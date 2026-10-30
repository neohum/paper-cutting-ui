/* 4학년 2학기 4. 사각형 — 단원 파일(차시 10개, 기존 차시 없음).
 * 흐름: 직각으로 만나는 수직(1) → 수선 찾고 알아보기(2) → 서로 만나지 않는 평행선(3) → 평행선 사이의 거리(4) → 교실·도형 속 수직과 평행(5)
 *      → 사다리꼴(6) → 평행사변형(7) → 마름모(8) → 직사각형과 정사각형(9) → 사각형 사이의 관계 정리(10).
 * 확인 필요: units-index 의 plan 은 1~5차시가 사각형(topic s4-03-10), 6~10차시가 수직·평행(s4-03-03) 순이다. 사다리꼴·평행사변형은
 *   '평행'으로 정의되므로 수직·평행을 먼저 가르치는 것이 교과서 순서이다. 그래서 차시 번호와 역할(1 intro, 10 wrap)은 plan 그대로 두고,
 *   1~5차시에 수직·평행([4수03-03]), 6~10차시에 여러 가지 사각형([4수03-10])을 담았다. 성취기준은 내용에 맞는 코드를 달았다.
 *   사다리꼴은 '평행한 변이 한 쌍이라도 있는 사각형'(평행사변형·직사각형 포함)으로 가르치며 shapes 교구도 같은 포함 관계로 판정한다.
 */
(function () {
const UID = 'g4-math-2-04', CU = 'g4-수학-2학기-4', UT = '4. 사각형';
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
  title: d.title, objective: d.objective, standards: d.std, minutes: 40, formats: ['chromebook', 'projector', 'print'],
  illustration: ill(d.desc, d.text, d.layers),
  stages: [
    Object.assign({ id: 'intro', title: '도입', minutes: 7, teacher: d.intro[0], student: d.intro[1] }, d.demo ? { demo: d.demo } : {}),
    { id: 'main', title: '전개', minutes: 26, activities: d.acts },
    { id: 'wrapup', title: '정리', minutes: 7, teacher: d.wrap[0], exitTicket: [...d.wrap[1], { type: 'mood', prompt: '오늘 공부는 어땠나요?' }] },
  ],
  worksheet: d.ws, differentiation: d.diff, teacherNotes: d.notes,
});
const S3 = ['[4수03-03]'], S10 = ['[4수03-10]'];
const IT = (d, extra) => ({ difficulty: d, ...(extra ? { extra: true } : {}) });
const CARD = { easy: { live: true, instant: true }, base: {}, challenge: {} };
const BLANK = '___';
// 점판 도형 좌표(열, 행) — 모두 7×7 점판 안
const R = (c, r, w, h) => [[c, r], [c + w, r], [c + w, r + h], [c, r + h]];
const TRAP_L = [[1, 4], [1, 1], [3, 1], [5, 4]]; // 왼쪽 변이 윗변·아랫변에 수직인 사다리꼴
const TRAP_R = [[5, 4], [5, 1], [3, 1], [1, 4]]; // 오른쪽 변이 윗변·아랫변에 수직인 사다리꼴
const TRAP_I = [[0, 3], [1, 0], [3, 0], [4, 3]]; // 두 다리가 서로 평행하지 않은 사다리꼴
const PAR1 = [[0, 3], [2, 3], [4, 0], [2, 0]]; // 평행사변형(아랫변 2, 높이 3)
const PAR2 = [[1, 5], [4, 5], [6, 1], [3, 1]]; // 평행사변형(아랫변 3, 높이 4)
const RHO1 = [[3, 0], [6, 2], [3, 4], [0, 2]]; // 마름모(직각 없음)
const SQT = [[3, 0], [6, 3], [3, 6], [0, 3]]; // 기울어진 정사각형
const KITE = [[2, 0], [4, 2], [2, 5], [0, 2]]; // 연 모양(평행한 변 없음)
const GEO = { easy: { mode: 'geoboard', size: 7, showRight: true }, base: { mode: 'geoboard', size: 7 }, challenge: { mode: 'geoboard', size: 7, showCounts: false } };
const GER = { easy: { mode: 'geoboard', size: 7, showCounts: false, showRight: true }, base: { mode: 'geoboard', size: 7, showCounts: false }, challenge: { mode: 'geoboard', size: 7, showCounts: false } };
const CLS = { easy: { mode: 'classify', live: true, instant: true }, base: { mode: 'classify' }, challenge: { mode: 'classify' } };
const RAJ = { easy: { mode: 'judge' }, base: { mode: 'judge' }, challenge: { mode: 'judge' } };
const RAM = { easy: { mode: 'make', showKind: true }, base: { mode: 'make' }, challenge: { mode: 'make', step: 5 } };
// 점판 도형 만들기 / 점판 도형 보고 고르기 · 수 쓰기
const geo = (prompt, target, d, extra, more) => ({ prompt, target, ...IT(d, extra), ...(more || {}) });
const geoRead = (prompt, pts, q, choices, pick, d, extra) => ({ prompt, state: { pts }, toolOptions: { readOnly: true, ask: { q, choices } }, target: { pick }, ...IT(d, extra) });
const geoNum = (prompt, pts, q, unit, num, d, extra) => ({ prompt, state: { pts }, toolOptions: { readOnly: true, askNum: { q, unit } }, target: { num }, ...IT(d, extra) });
// 종이 직각: 삼각자로 판정 / 띠를 돌려 직각 만들기
const raj = (prompt, angle, turn, judge, d, extra) => ({ prompt, state: { angle }, toolOptions: { turn }, target: { judge }, ...IT(d, extra) });
const ram = (prompt, o, d, extra) => ({ prompt, toolOptions: o, target: { right: true }, ...IT(d, extra) });
// 도형 카드 분류: cards = [[모양(또는 점 좌표), 이름, 칸 번호], ...]
const ids = 'abcdefgh';
const cls = (prompt, cards, bins, d, extra) => { const cs = cards.map((c, i) => Object.assign({ id: ids[i], label: c[1] }, Array.isArray(c[0]) ? { pts: c[0] } : { shape: c[0] }));
  return { prompt, toolOptions: { cards: cs, bins }, target: { bins: Object.fromEntries(cards.map((c, i) => [ids[i], c[2]])) }, ...IT(d, extra) }; };
// 카드 판(mindmap): 짝 잇기 / 바른 것 고르기 / 차례 놓기 / 칸에 나누기
const matchCards = (prompt, topic, pairs, spare, d, extra) => ({ prompt, toolOptions: { mode: 'match', topic, slots: pairs.map((p, i) => ({ id: `s${i + 1}`, label: p[0] })), cards: [...pairs.map((p) => p[1]), ...(spare || [])] },
  target: { match: Object.fromEntries(pairs.map((p, i) => [`s${i + 1}`, p[1]])) }, ...IT(d, extra) });
const pk = (prompt, topic, cards, d, extra) => ({ prompt, toolOptions: { mode: 'pick', topic, basket: '바른 카드', cards: cards.map((c, i) => ({ id: `c${i}`, text: c[0], ...(c[2] ? { why: c[2] } : {}) })) },
  target: { pick: cards.flatMap((c, i) => (c[1] ? [`c${i}`] : [])) }, ...IT(d, extra) });
const orderCards = (prompt, topic, steps, d, extra) => ({ prompt, toolOptions: { mode: 'order', topic, cards: steps.map((s) => ({ id: s, text: s })) }, target: { order: steps }, ...IT(d, extra) });
const sortCards = (prompt, topic, slots, cards, d, extra) => ({ prompt, toolOptions: { topic, slots, cards: cards.map((c) => c[0]) },
  target: { sort: Object.fromEntries(slots.map((s) => [s, cards.filter((c) => c[1] === s).map((c) => c[0])])) }, ...IT(d, extra) });
// 도형 카드(점 좌표는 0~1 안쪽) — 분류 교구의 preset 으로 만들 수 없는 모양
const GENQ = [[0.1, 0.3], [0.9, 0.05], [0.85, 0.9], [0.25, 0.7]]; // 평행한 변이 없는 사각형
const KITE_N = [[0.5, 0.04], [0.85, 0.4], [0.5, 0.96], [0.15, 0.4]]; // 연 모양
const RTRAP_N = [[0.1, 0.2], [0.1, 0.85], [0.9, 0.85], [0.55, 0.2]]; // 직각이 두 개인 사다리꼴
const DIAMOND_N = [[0.5, 0.04], [0.9, 0.5], [0.5, 0.96], [0.1, 0.5]]; // 마름모
const TALL_N = [[0.5, 0.02], [0.75, 0.5], [0.5, 0.98], [0.25, 0.5]]; // 길쭉한 마름모
const PARA_N = [[0.2, 0.2], [0.95, 0.2], [0.8, 0.8], [0.05, 0.8]]; // 평행사변형
const RECT_N = [[0.05, 0.3], [0.95, 0.3], [0.95, 0.7], [0.05, 0.7]]; // 직사각형
const SQ_N = [[0.25, 0.25], [0.75, 0.25], [0.75, 0.75], [0.25, 0.75]]; // 정사각형
const NAMES5 = ['사다리꼴', '평행사변형', '마름모', '직사각형', '정사각형'];
const L = [];

// ───────────────────────────── 1차시 (intro · concept) ─────────────────────────────
L.push(lesson(1, {
  std: S3,
  title: '삼각자를 대어 보고 수직인 두 직선 찾기',
  objective: '두 직선이 만나서 이루는 각이 직각이면 두 직선이 서로 수직임을 알고, 삼각자를 대어 수직인 두 직선을 찾을 수 있다.',
  desc: 'two crossing paper strips forming a square corner with a paper set square fitted into the corner, on a classroom desk beside a bookshelf',
  text: '직각으로 만나요',
  layers: [{ motif: 'house', x: 110, y: 216, s: 0.8 }, { motif: 'tree', x: 400, y: 216, s: 0.8 }, { motif: 'flower', x: 250, y: 238 }],
  intro: ['"책꽂이의 세로 칸막이와 가로 선반이 만나는 곳을 살펴봐요. 어떤 각이 보이나요?" 시연 단추로 종이띠를 돌려 직각이 되는 순간 삼각자가 꼭 맞는 모습을 보여 준다. "두 직선이 만나서 이루는 각이 직각이면 두 직선은 서로 수직이에요." 두 직선이 가로·세로로 놓여야만 수직이라고 생각하는 학생이 있으면 그 말을 칠판에 적어 두었다가 활동 1의 비스듬한 그림에서 다시 따져 본다.', '책꽂이의 세로 칸막이와 가로 선반은 어떤 각으로 만날까요? 삼각자를 대어 보면 알 수 있어요.'],
  demo: { tool: 'rightangle', options: { mode: 'make', start: 30 }, sequence: [{ right: true }] },
  acts: [
    { id: 'a1', title: '활동 1. 삼각자를 대어 직각인지 판단하기', minutes: 9, tool: 'rightangle',
      task: '두 띠가 만나서 이룬 각에 삼각자를 대어 보고 골라요. 직각이면 두 띠는 수직이에요.',
      teacher: '"삼각자의 직각을 두 띠가 만난 곳에 대 봐요. 꼭 맞나요, 틈이 생기나요?" 꼭 맞으면 수직이라고 말하게 한다. 비스듬히 놓인 그림을 보고 "기울어져서 수직이 아니에요"라고 답한 학생에게는 삼각자를 돌려 대어 보게 하고 놓인 방향은 수직과 관계없다고 짚는다.',
      levels: RAJ,
      items: [
        raj('가 그림: 두 띠가 만난 곳에 삼각자를 대어 보고 골라 보세요.', 90, 0, 'right', 0.1),
        raj('나 그림은 비스듬히 놓여 있어요. 삼각자를 대어 보고 골라 보세요.', 90, 35, 'right', 0.2, false, { predict: { q: '기울어져 있어도 두 띠가 수직일까요?', options: ['수직이에요', '수직이 아니에요'], answer: 0 }, conclude: '놓인 방향이 달라도 만나서 이룬 각이 직각이면 수직이에요.' }),
        raj('다 그림: 두 띠가 만난 곳에 삼각자를 대어 보고 골라 보세요.', 70, 10, 'less', 0.18),
        raj('더 해 보기: 라 그림에 삼각자를 대어 보고 골라 보세요.', 115, 20, 'more', 0.26, true),
      ] },
    { id: 'a2', title: '활동 2. 수직인 것과 수직이 아닌 것 나누기', minutes: 8, tool: 'mindmap',
      task: '주변 모습에서 두 선이 직각으로 만나면 "수직이에요"에, 아니면 "수직이 아니에요"에 놓아요.',
      teacher: '"시계가 3시 정각일 때 긴바늘과 짧은바늘은 어떤 각으로 만날까요?" 12와 3을 가리키니 직각이라고 말하게 한다. 시계 6시를 직각으로 고르는 학생에게는 두 바늘이 한 줄로 펴져 있어 직각이 아니라고 짚는다.',
      levels: CARD,
      items: [
        sortCards('두 선이 직각으로 만나는지 보고 칸에 나누어 보세요.', '수직', ['수직이에요', '수직이 아니에요'], [['책의 이웃한 두 모서리', '수직이에요'], ['3시 정각일 때 시계의 두 바늘', '수직이에요'], ['2시 정각일 때 시계의 두 바늘', '수직이 아니에요'], ['열린 문과 문틀이 비스듬히 이룬 각', '수직이 아니에요']], 0.14),
        sortCards('이번에도 칸에 나누어 보세요.', '수직', ['수직이에요', '수직이 아니에요'], [['창틀의 이웃한 두 변', '수직이에요'], ['펼친 가위의 두 날', '수직이 아니에요'], ['9시 정각일 때 시계의 두 바늘', '수직이에요'], ['6시 정각일 때 시계의 두 바늘', '수직이 아니에요']], 0.2),
        sortCards('마지막으로 칸에 나누어 보세요.', '수직', ['수직이에요', '수직이 아니에요'], [['칠판의 이웃한 두 변', '수직이에요'], ['글자 ㅏ의 긴 세로선과 짧은 가로선', '수직이에요'], ['글자 ㅅ의 두 획', '수직이 아니에요'], ['펼친 부채의 두 살', '수직이 아니에요'], ['4시 정각일 때 시계의 두 바늘', '수직이 아니에요']], 0.24),
      ] },
    { id: 'a3', title: '활동 3. 수직에 대해 바르게 말한 카드 고르기', minutes: 9, tool: 'mindmap',
      task: '친구들의 말 가운데 수직에 대해 바르게 말한 카드를 모두 골라요.',
      teacher: '"준호는 기울어져 놓인 두 직선은 수직이 될 수 없다고 했어요. 바른 말은 어느 카드일까요?" 방향이 아니라 이룬 각이 직각인지가 기준이라고 짚는다. "직선 가가 직선 나에 수직이면 직선 나도 직선 가에 수직이에요."',
      levels: CARD,
      items: [
        pk('준호는 "기울어져 놓인 두 직선은 수직이 될 수 없다"고 했어요. 바르게 말한 카드를 모두 골라 보세요.', '수직', [['놓인 방향이 달라도 만나서 이룬 각이 직각이면 수직이에요', true], ['기울어져 있어도 삼각자의 직각과 꼭 맞으면 수직이에요', true], ['가로와 세로로 놓여야만 수직이에요', false, '두 직선이 만나서 이룬 각이 직각인지가 기준이에요.'], ['수직은 직각으로 만나는 두 직선 사이의 관계예요', true]], 0.16),
        pk('두 직선이 수직인지 알아보는 방법을 바르게 말한 카드를 모두 골라 보세요.', '수직', [['삼각자의 직각을 두 직선이 만난 곳에 대 봐요', true], ['두 직선이 만난 곳에서 각이 직각인지 봐요', true], ['두 직선의 길이가 같으면 수직이에요', false, '길이는 수직과 관계없어요.'], ['두 직선이 만나지 않으면 수직이에요', false, '만나지 않는 직선은 수직이 아니에요.']], 0.2),
        pk('수직인 두 직선에 대해 바르게 말한 카드를 모두 골라 보세요.', '수직', [['두 직선이 서로 직각으로 만나요', true], ['만나서 생긴 네 각이 모두 직각이에요', true], ['한 직선이 다른 직선보다 반드시 길어야 해요', false, '길이와 상관없어요.'], ['수직인 두 직선은 한 점에서 만나요', true]], 0.22),
        pk('더 해 보기: 바르게 말한 카드를 모두 골라 보세요.', '수직', [['직선 가가 직선 나에 수직이면 직선 나도 직선 가에 수직이에요', true], ['직선 가에 수직인 직선은 오직 하나뿐이에요', false, '직선 가 위의 점마다 수직인 직선을 하나씩 그을 수 있어요.'], ['삼각자의 직각 모서리를 대어 확인해요', true], ['긴 직선만 수직이 될 수 있어요', false, '짧은 선분도 수직이 될 수 있어요.']], 0.26, true),
      ] },
  ],
  wrap: ['"두 직선이 수직이라고 말하려면 만나서 이룬 각이 어떤 각이어야 할까요?" 직각이라는 말이 나오는지 듣는다. 출구 2번에서 수직이 아니라고 답한 학생은 기울어진 그림을 보고 방향이 달라서라고 생각했는지 다음 시간에 먼저 살핀다.', [
    { type: 'choice', prompt: '두 직선이 수직이 되려면 만나서 이룬 각이 어떤 각이어야 하나요?', options: ['예각', '직각', '둔각'], answer: 1, difficulty: 0.1, explain: '두 직선이 만나서 이룬 각이 직각이면 서로 수직이에요.' },
    { type: 'tool', tool: 'rightangle', options: { mode: 'judge', turn: 50 }, state: { angle: 90 }, prompt: '비스듬히 놓인 마 그림이에요. 삼각자를 대어 보고 골라 보세요.', target: { judge: 'right' }, difficulty: 0.22 },
    { type: 'short', prompt: '기울어져 있어도 수직이라고 말할 수 있는 까닭을 써 보세요.', answer: '놓인 방향과 관계없이 두 직선이 만나서 이룬 각이 직각이면 수직이기 때문이다.', difficulty: 0.2 },
  ]],
  ws: {
    title: '수직인 두 직선',
    items: [
      { type: 'figure', prompt: '삼각자를 대어 보고 두 띠가 수직이면 ○ 하세요.', tool: 'rightangle', answer: '가 ○, 나 ○, 다 ×', figures: [
        { options: { mode: 'judge' }, state: { angle: 90 }, caption: '가' }, { options: { mode: 'judge', turn: 40 }, state: { angle: 90 }, caption: '나' }, { options: { mode: 'judge' }, state: { angle: 65 }, caption: '다' }] },
      { type: 'table', prompt: '시계가 다음 시각일 때 두 바늘이 수직이면 ○, 아니면 ×를 쓰세요.', columns: ['시각', '3시', '6시', '9시', '2시'], cells: [['수직', '', '', '', '']], answer: '○, ×, ○, ×' },
      { type: 'choice', prompt: '수직인 두 직선에 대해 바르게 말한 것에 ○ 하세요.', options: ['가로, 세로로만 놓여야 해요', '만나서 이룬 각이 직각이에요', '길이가 같아야 해요'], answer: '만나서 이룬 각이 직각이에요' },
      { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '두 직선이 만나서 이루는 각이 ______이면 두 직선은 서로 ______이라고 해요.', answer: '직각, 수직' },
      { type: 'short', prompt: '교실에서 서로 수직인 두 선을 찾아 어디인지 써 보세요.', answer: '예: 칠판의 이웃한 두 변, 책상 모서리의 두 변' },
    ],
    easy: {
      note: '삼각자의 직각을 두 띠가 만난 곳에 꼭 맞게 대어 봐요. 꼭 맞으면 수직이에요.',
      items: [
        { type: 'figure', prompt: '삼각자를 대어 보고 수직이면 ○ 하세요.', tool: 'rightangle', figures: [{ options: { mode: 'judge' }, state: { angle: 90 }, caption: '가' }, { options: { mode: 'judge' }, state: { angle: 60 }, caption: '나' }], answer: '가 ○, 나 ×' },
        { type: 'table', prompt: '시계의 두 바늘이 수직이면 ○, 아니면 ×를 쓰세요.', columns: ['시각', '3시', '5시'], cells: [['수직', '', '']], answer: '○, ×' },
        { type: 'choice', prompt: '수직이 되려면 어떤 각으로 만나야 하나요? ○ 하세요.', options: ['직각', '직각이 아닌 각'], answer: '직각' },
        { type: 'draw', prompt: '삼각자를 대어 서로 수직인 두 선을 그려 보세요.' },
      ],
    },
  },
  diff: {
    easy: '띠를 돌릴 때 각의 이름(직각)이 글자로 보이고 삼각자를 대면 맞는지 바로 알 수 있어요.',
    base: '삼각자를 대어 보고 직각인지 스스로 판단해요.',
    challenge: '띠를 5° 단위로 돌려 정확히 직각을 만들고 비스듬히 놓인 그림에서도 수직인지 판단해요.',
  },
  notes: '자주 보이는 어려움: ① 가로·세로로 놓여야만 수직이라고 생각한다 → 삼각자를 돌려 대어 보고 방향과 무관함을 확인. ② 직각에 가깝지만 약간 틀어진 각도 수직으로 본다 → 삼각자를 대면 틈이 생김. ③ 두 직선이 만나지 않는 경우와 수직을 섞어 말한다 → 만나서 이룬 각이 기준. 각의 크기를 직각과 견주는 것은 3학년 직각 단원에서 다룬 내용을 바탕으로 한다.',
}));

// ───────────────────────────── 2차시 (practice · concept) ─────────────────────────────
L.push(lesson(2, {
  std: S3,
  title: '한 직선에 수직인 직선 긋고 수선 알아보기',
  objective: '한 직선에 수직인 직선을 수선이라고 하고, 도형의 한 변에 수직인 변을 찾아 말하며 삼각자로 수선을 긋는 차례를 말할 수 있다.',
  desc: 'a child drawing a straight line with a pencil along a paper set square placed against a long ruler on a desk, with a small pencil case nearby',
  text: '수선 긋기',
  layers: [{ motif: 'house', x: 120, y: 216, s: 0.8 }, { motif: 'tree', x: 380, y: 216, s: 0.8 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"직선 가에 수직으로 만나는 직선을 하나 더 그려 볼까요?" 칠판에 직선 가를 긋고 삼각자로 수직인 직선을 긋는 모습을 보여 준다. "직선 가에 수직인 직선을 직선 가의 수선이라고 해요." 수선은 직선 가 위의 어느 점에서든 하나씩 그을 수 있음을 몇 군데 그어 보이고, 수선이 한 개뿐이라고 말하는 학생이 있으면 직접 점을 바꿔 가며 다시 그어 보게 한다.', '직선 가에 수직인 직선을 그어 볼 수 있을까요? 삼각자를 어떻게 놓아야 할지 생각해 봐요.'],
  demo: { tool: 'rightangle', options: { mode: 'make', start: 60, turn: 40 }, sequence: [{ right: true }] },
  acts: [
    { id: 'a1', title: '활동 1. 띠를 돌려 한 띠에 수직인 띠 만들기', minutes: 8, tool: 'rightangle',
      task: '고정된 띠에 수직이 되도록 복숭아색 띠를 돌려요. 삼각자를 대어 맞는지 확인할 수 있어요.',
      teacher: '"아래 띠에 수직이 되려면 위 띠는 얼마나 더 돌아야 할까요?" 삼각자를 대어 보며 직각이 될 때까지 돌리게 한다. 직각보다 큰 각에서 시작할 때는 오히려 반대쪽으로 돌려야 한다는 것을 짚는다. 비스듬히 놓인 띠에서도 돌려 보며 방향이 달라도 수직이 되는 각은 같다고 말하게 한다.',
      levels: RAM,
      items: [
        ram('아래 띠에 수직이 되도록 위 띠를 돌려 보세요.', { start: 30 }, 0.1),
        ram('처음 각이 직각보다 커요. 수직이 되도록 위 띠를 돌려 보세요.', { start: 150 }, 0.16),
        ram('기울어져 놓인 띠에 수직이 되도록 위 띠를 돌려 보세요.', { start: 60, turn: 40 }, 0.2),
        ram('더 해 보기: 띠가 길어요. 그래도 아래 띠에 수직이 되도록 돌려 보세요.', { start: 105, arm: 1.3 }, 0.26, true),
      ] },
    { id: 'a2', title: '활동 2. 도형에서 한 변에 수직인 변 찾기', minutes: 9, tool: 'shapes',
      task: '점판 도형을 보고 한 변에 수직인 변이 어느 것인지 골라요. 가로줄과 세로줄이 만나는 곳은 직각이에요.',
      teacher: '"아랫변에 수직인 변은 윗변일까요, 왼쪽 변일까요?" 윗변은 아랫변과 만나지 않고 나란히 간다고 짚는다. 오른쪽 변이 기울어져 있는데 수직이라고 고른 학생에게는 삼각자의 직각을 대어 보게 한다. 직사각형에서 한 변에 수직인 변이 두 개라는 것도 말하게 한다.',
      levels: GER,
      items: [
        geoRead('사다리꼴이에요. 아랫변에 수직인 변은 어느 것인지 골라 보세요.', TRAP_L, '아랫변에 수직인 변은?', ['윗변', '왼쪽 변', '오른쪽 변'], 1, 0.16),
        geoNum('직사각형이에요. 왼쪽 변에 수직인 변은 모두 몇 개일까요?', R(1, 1, 4, 2), '왼쪽 변에 수직인 변은 몇 개일까요?', '개', 2, 0.2),
        geoRead('이번 사다리꼴에서 윗변에 수직인 변은 어느 것인지 골라 보세요.', TRAP_R, '윗변에 수직인 변은?', ['아랫변', '왼쪽 변', '오른쪽 변'], 2, 0.22),
        geoRead('더 해 보기: 평행사변형이에요. 아랫변에 수직인 변이 있는지 골라 보세요.', PAR1, '아랫변에 수직인 변이 있나요?', ['있어요', '없어요'], 1, 0.28, true),
      ] },
    { id: 'a3', title: '활동 3. 수선을 긋는 방법 말하기', minutes: 9, tool: 'mindmap',
      task: '수선에 대해 바르게 말한 카드를 고르고 삼각자로 수선 긋는 차례를 놓아요.',
      teacher: '"직선 가에 수직인 직선 나는 직선 가의 수선이에요. 직선 가는 직선 나의 수선일까요?" 서로에게 수선이라고 말하게 한다. 직선 위 한 점을 지나는 수선이 하나뿐인지 물어, 점이 바뀌면 수선도 달라진다고 짚는다.',
      levels: CARD,
      items: [
        pk('직선 가에 수직으로 만나는 직선 나가 있어요. 바르게 말한 카드를 모두 골라 보세요.', '수선', [['직선 나는 직선 가의 수선이에요', true], ['직선 가도 직선 나의 수선이에요', true], ['직선 나만 수선이고 직선 가는 수선이 될 수 없어요', false, '서로 수직이면 서로에게 수선이에요.'], ['두 직선이 만나서 이룬 각은 직각이에요', true]], 0.18),
        pk('직선 가 위의 점들에서 수선을 그으려고 해요. 바르게 말한 카드를 모두 골라 보세요.', '수선', [['점이 다르면 수선도 다른 직선이에요', true], ['직선 가 위의 한 점을 지나는 수선은 하나예요', true], ['직선 가에 수선은 하나만 그을 수 있어요', false, '점마다 수선을 하나씩 그을 수 있어요.'], ['수선은 삼각자의 직각을 이용해 그을 수 있어요', true]], 0.22),
        orderCards('삼각자로 직선 가에 수선을 긋는 차례대로 카드를 놓아 보세요.', '수선', ['직선 가 위에 수선을 그을 점을 정한다', '삼각자의 직각을 낀 한 변을 직선 가에 맞춘다', '직각 꼭짓점이 정한 점에 오도록 밀어 맞춘다', '다른 변을 따라 선을 긋는다'], 0.26),
        pk('더 해 보기: 직선 가 위에 있지 않은 점 ㅁ을 지나는 수선을 긋는 방법으로 바른 카드를 골라 보세요.', '수선', [['삼각자의 한 변을 직선 가에 맞추고 직각을 낀 다른 변이 점 ㅁ을 지나도록 밀어요', true], ['점 ㅁ에서 직선 가까지 아무렇게나 선을 그어요', false, '직각이 되도록 삼각자를 맞추어야 해요.'], ['그은 선이 직선 가와 직각으로 만나는지 삼각자로 다시 확인해요', true]], 0.3, true),
      ] },
  ],
  wrap: ['"직선 가에 수직인 직선을 무엇이라고 부르나요? 점이 바뀌면 수선은 어떻게 될까요?" 수선이 점마다 하나씩 있다는 말이 나오는지 듣는다. 출구 1번에서 윗변을 고른 학생은 평행하게 놓인 변과 수직으로 만나는 변을 구별하지 못하는지 다음 시간에 먼저 살핀다.', [
    { type: 'tool', tool: 'shapes', options: { mode: 'geoboard', size: 7, readOnly: true, showCounts: false, ask: { q: '아랫변에 수직인 변은?', choices: ['윗변', '왼쪽 변', '오른쪽 변'] } }, state: { pts: TRAP_R }, prompt: '사다리꼴이에요. 아랫변에 수직인 변은 어느 것인지 골라 보세요.', target: { pick: 2 }, difficulty: 0.2 },
    { type: 'choice', prompt: '직선 가에 수직인 직선 나를 직선 가의 무엇이라고 하나요?', options: ['평행선', '수선', '대각선'], answer: 1, difficulty: 0.12, explain: '한 직선에 수직인 직선을 그 직선의 수선이라고 해요.' },
    { type: 'short', prompt: '삼각자로 수선을 그을 때 맨 먼저 해야 할 일을 써 보세요.', answer: '직선 위에 수선을 그을 점을 정한다.', difficulty: 0.2 },
  ]],
  ws: {
    title: '수선 알아보기',
    items: [
      { type: 'figure', prompt: '도형에서 아랫변에 수직인 변에 ○ 하세요. 가로줄과 세로줄이 만나는 곳은 직각이에요.', tool: 'shapes', wide: true, answer: '가: 왼쪽 변, 나: 왼쪽 변과 오른쪽 변', figures: [
        { options: { mode: 'geoboard', size: 7, showCounts: false }, state: { pts: TRAP_L }, caption: '가' }, { options: { mode: 'geoboard', size: 7, showCounts: false }, state: { pts: R(1, 1, 4, 3) }, caption: '나' }] },
      { type: 'table', prompt: '삼각자로 수선을 긋는 차례를 1~4로 쓰세요.', columns: ['하는 일', '차례'], cells: [['다른 변을 따라 선을 긋는다', ''], ['직선 위에 수선을 그을 점을 정한다', ''], ['삼각자의 직각을 낀 한 변을 직선에 맞춘다', ''], ['직각 꼭짓점이 정한 점에 오도록 밀어 맞춘다', '']], answer: '4, 1, 2, 3' },
      { type: 'choice', prompt: '직선 가의 수선이 아닌 것에 ○ 하세요.', options: ['직선 가와 직각으로 만나는 직선', '직선 가와 비스듬히 만나는 직선', '직선 가 위의 다른 점을 지나며 직각으로 만나는 직선'], answer: '직선 가와 비스듬히 만나는 직선' },
      { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '직선 가에 수직인 직선을 직선 가의 ______이라고 해요.', answer: '수선' },
      { type: 'short', prompt: '직선 가 위의 점 ㄱ과 점 ㄴ에서 각각 수선을 그으면 같은 직선일까요? 까닭을 써 보세요.', answer: '같은 직선이 아니다. 점이 다르면 그 점을 지나는 수선도 다른 직선이다.' },
    ],
    easy: {
      note: '수선은 한 직선에 직각으로 만나는 직선이에요. 삼각자의 직각을 이용해 그어요.',
      items: [
        { type: 'figure', prompt: '아랫변에 수직인 변에 ○ 하세요.', tool: 'shapes', wide: true, figures: [{ options: { mode: 'geoboard', size: 7, showCounts: false }, state: { pts: TRAP_L }, caption: '가' }], answer: '왼쪽 변' },
        { type: 'table', prompt: '삼각자로 수선을 긋는 차례를 1~2로 쓰세요.', columns: ['하는 일', '차례'], cells: [['삼각자의 직각을 낀 변을 직선에 맞춘다', ''], ['다른 변을 따라 선을 긋는다', '']], answer: '1, 2' },
        { type: 'choice', prompt: '한 직선에 수직인 직선을 무엇이라고 하나요? ○ 하세요.', options: ['수선', '평행선'], answer: '수선' },
        { type: 'draw', prompt: '직선을 하나 긋고 삼각자로 그 직선의 수선을 하나 그어 보세요.' },
      ],
    },
  },
  diff: {
    easy: '점판에 직각 표시가 보이고 띠를 돌릴 때 각의 이름이 글자로 나와요.',
    base: '직각 표시 없이 도형의 변을 보고 수직인 변을 골라요.',
    challenge: '띠를 5° 단위로 돌려 수선을 만들고 평행사변형처럼 수선이 없는 경우도 가려내요.',
  },
  notes: '자주 보이는 어려움: ① 평행하게 놓인 변(윗변)을 수직인 변으로 고른다 → 만나서 직각을 이루는 변이 수선. ② 기울어진 변이 수직이라고 생각한다 → 삼각자를 대어 확인. ③ 수선이 한 개뿐이라고 말한다 → 점이 다르면 수선도 달라진다. 직선 밖의 한 점을 지나는 수선 긋기는 활동 3 마지막 문항에서만 다루고 다음 차시부터 평행선으로 넘어간다.',
}));

// ───────────────────────────── 3차시 (core · representation) ─────────────────────────────
L.push(lesson(3, {
  std: S3,
  title: '서로 만나지 않는 두 직선, 평행선 찾기',
  objective: '한 직선에 수직인 두 직선은 서로 만나지 않음을 알고, 서로 만나지 않는 두 직선을 평행하다고 말하며 평행선과 평행한 변이 있는 사각형을 찾을 수 있다.',
  desc: 'two long parallel railway tracks stretching across paper hills with small wooden sleepers between them and a tiny paper train in the distance',
  text: '만나지 않는 두 직선',
  layers: [{ motif: 'house', x: 110, y: 216, s: 0.8 }, { motif: 'tree', x: 400, y: 216, s: 0.8 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"기차가 달리는 철길의 두 레일은 아무리 길어도 만나지 않아요. 왜 그럴까요?" 칠판에 직선 가를 긋고 그 직선에 수직인 두 직선 나와 다를 긋는다. "직선 나와 다는 서로 만날까요?" 만나지 않는다고 말하게 한 뒤 "서로 만나지 않는 두 직선은 평행하다고 하고 이 두 직선을 평행선이라고 해요"라고 알려 준다. 평행선이 같은 길이여야 한다고 생각하는 학생에게는 길이가 달라도 만나지 않으면 평행임을 보여 준다.', '철길의 두 레일은 아무리 길게 늘여도 만나지 않아요. 이런 두 직선을 무엇이라고 부를지 생각해 봐요.'],
  demo: { tool: 'shapes', options: { mode: 'geoboard', size: 7 }, sequence: [{ pts: R(1, 1, 4, 3) }] },
  acts: [
    { id: 'a1', title: '활동 1. 평행한 변이 있는 사각형 만들기', minutes: 9, tool: 'shapes',
      task: '점판에 사각형을 만들어요. 서로 만나지 않고 나란히 가는 변이 평행한 변이에요.',
      teacher: '"윗변과 아랫변을 같은 방향으로 그으면 어떻게 될까요? 길게 늘여도 만날까요?" 평행한 변이 몇 쌍인지 세어 말하게 한다. 마주 보는 변이 아닌 이웃한 변을 평행하다고 센 학생에게는 이웃한 변은 한 점에서 만난다고 짚는다.',
      levels: GEO,
      items: [
        geo('평행한 변이 한 쌍 있는 사각형을 만들어 보세요.', { sides: 4, parallel: 1 }, 0.14),
        geo('마주 보는 두 쌍의 변이 모두 평행한 사각형을 만들어 보세요. 직각은 없어요.', { sides: 4, parallel: 2, rightAngles: 0 }, 0.2),
        geo('평행한 변이 한 쌍이고 직각이 두 개 있는 사각형을 만들어 보세요.', { sides: 4, parallel: 1, rightAngles: 2 }, 0.24),
        geo('더 해 보기: 마주 보는 두 쌍의 변이 모두 평행하고 직각이 네 개인 사각형을 만들어 보세요.', { sides: 4, parallel: 2, rightAngles: 4 }, 0.28, true),
      ] },
    { id: 'a2', title: '활동 2. 평행한 것과 평행하지 않은 것 나누기', minutes: 8, tool: 'mindmap',
      task: '주변 모습에서 두 선이 서로 만나지 않고 나란하면 "평행해요"에, 아니면 "평행하지 않아요"에 놓아요.',
      teacher: '"사다리의 양쪽 기둥은 서로 평행할까요? 위로 길게 늘이면 어떻게 될까요?" 늘여도 만나지 않으면 평행이라고 말하게 한다. 펼친 부채의 두 살을 평행으로 고른 학생에게는 아래로 늘이면 한 점에서 만난다고 짚는다.',
      levels: CARD,
      items: [
        sortCards('두 선이 서로 만나지 않고 나란한지 보고 칸에 나누어 보세요.', '평행', ['평행해요', '평행하지 않아요'], [['철길의 두 레일', '평행해요'], ['사다리의 양쪽 기둥', '평행해요'], ['펼친 부채의 두 살', '평행하지 않아요'], ['X자로 놓인 두 막대', '평행하지 않아요']], 0.14),
        sortCards('이번에도 칸에 나누어 보세요.', '평행', ['평행해요', '평행하지 않아요'], [['공책의 가로줄 두 줄', '평행해요'], ['계단 난간의 두 가로대', '평행해요'], ['삼각형 지붕의 두 경사면', '평행하지 않아요'], ['책의 이웃한 두 모서리', '평행하지 않아요']], 0.2),
        sortCards('마지막으로 칸에 나누어 보세요.', '평행', ['평행해요', '평행하지 않아요'], [['횡단보도의 흰 줄 두 개', '평행해요'], ['책장의 가로 선반 두 개', '평행해요'], ['교차로에서 만나는 두 도로', '평행하지 않아요'], ['창틀의 세로 틀 두 개', '평행해요'], ['날개를 펼친 새의 두 날개 끝선', '평행하지 않아요']], 0.24),
      ] },
    { id: 'a3', title: '활동 3. 평행선에 대해 바르게 말한 카드 고르기', minutes: 9, tool: 'mindmap',
      task: '평행선에 대해 바르게 말한 카드를 모두 골라요.',
      teacher: '"한 직선에 수직인 두 직선은 서로 만날까요, 만나지 않을까요?" 두 직선이 같은 직선에 수직이면 같은 방향으로 놓이므로 평행하다고 짚는다. "평행선은 길이가 같아야 하나요?" 길이는 평행과 관계없다고 말하게 한다.',
      levels: CARD,
      items: [
        pk('평행선에 대해 바르게 말한 카드를 모두 골라 보세요.', '평행선', [['평행한 두 직선은 아무리 길게 늘여도 만나지 않아요', true], ['한 직선에 수직인 두 직선은 서로 평행해요', true], ['평행선은 길이가 같아야 해요', false, '길이가 달라도 만나지 않으면 평행해요.'], ['평행한 두 직선은 같은 방향으로 놓여 있어요', true]], 0.18),
        pk('직선 가에 평행한 직선에 대해 바르게 말한 카드를 모두 골라 보세요.', '평행선', [['직선 가에 평행한 직선은 셀 수 없이 많이 그을 수 있어요', true], ['직선 가에 평행한 직선은 직선 가와 만나지 않아요', true], ['직선 가에 평행한 직선은 오직 하나뿐이에요', false, '위치를 옮겨 가며 얼마든지 그을 수 있어요.'], ['직선 가에 평행한 두 직선도 서로 평행해요', true]], 0.22),
        pk('이웃한 두 변과 마주 보는 두 변에 대해 바르게 말한 카드를 모두 골라 보세요.', '평행선', [['직사각형의 마주 보는 두 변은 평행해요', true], ['직사각형의 이웃한 두 변은 수직이에요', true], ['직사각형의 이웃한 두 변은 평행해요', false, '이웃한 두 변은 한 점에서 만나요.'], ['평행한 두 변은 서로 만나지 않아요', true]], 0.24),
        pk('더 해 보기: 바르게 말한 카드를 모두 골라 보세요.', '평행선', [['두 직선이 만나면 평행이 아니에요', true], ['한 직선에 수직인 두 직선은 평행하지만 수직인 두 직선은 평행하지 않아요', true], ['평행선은 한 점에서 만나요', false, '평행선은 만나지 않아요.'], ['평행한 직선은 서로 일정한 간격을 두고 놓여 있어요', true]], 0.3, true),
      ] },
  ],
  wrap: ['"서로 만나지 않는 두 직선을 무엇이라고 하나요? 한 직선에 수직인 두 직선은 어떤 관계일까요?" 평행이라는 말이 나오는지 듣는다. 출구 2번에서 평행하지 않다고 답한 학생은 두 선의 길이가 달라서라고 생각하는지 다음 시간에 먼저 살핀다.', [
    { type: 'tool', tool: 'shapes', options: { mode: 'geoboard', size: 7 }, prompt: '평행한 변이 한 쌍이고 직각이 하나도 없는 사각형을 만들어 보세요.', target: { sides: 4, parallel: 1, rightAngles: 0 }, difficulty: 0.24 },
    { type: 'choice', prompt: '서로 만나지 않는 두 직선을 무엇이라고 하나요?', options: ['수직', '평행', '대각선'], answer: 1, difficulty: 0.12, explain: '아무리 늘여도 서로 만나지 않는 두 직선은 평행하다고 해요.' },
    { type: 'short', prompt: '한 직선에 수직인 두 직선이 평행한 까닭을 써 보세요.', answer: '두 직선이 같은 직선에 직각으로 만나 같은 방향으로 놓이므로 아무리 늘여도 서로 만나지 않기 때문이다.', difficulty: 0.24 },
  ]],
  ws: {
    title: '평행선 찾기',
    items: [
      { type: 'figure', prompt: '평행한 변이 몇 쌍인지 쓰세요.', tool: 'shapes', wide: true, answer: '가: 2쌍, 나: 1쌍', figures: [
        { options: { mode: 'geoboard', size: 7, showCounts: false }, state: { pts: PAR1 }, caption: '가 ___쌍' }, { options: { mode: 'geoboard', size: 7, showCounts: false }, state: { pts: TRAP_I }, caption: '나 ___쌍' }] },
      { type: 'table', prompt: '두 선이 평행하면 ○, 아니면 ×를 쓰세요.', columns: ['두 선', '철길의 두 레일', '펼친 부채의 두 살', '공책의 가로줄 두 줄'], cells: [['평행', '', '', '']], answer: '○, ×, ○' },
      { type: 'choice', prompt: '평행선에 대해 바르게 말한 것에 ○ 하세요.', options: ['아무리 늘여도 만나지 않아요', '길이가 같아야 해요', '한 점에서 만나요'], answer: '아무리 늘여도 만나지 않아요' },
      { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '서로 만나지 않는 두 직선은 ______하다고 하고, 이 두 직선을 ______이라고 해요.', answer: '평행, 평행선' },
      { type: 'short', prompt: '교실에서 서로 평행한 두 선을 찾아 써 보세요.', answer: '예: 칠판의 윗변과 아랫변, 책상 앞쪽과 뒤쪽 가장자리' },
    ],
    easy: {
      note: '아무리 늘여도 만나지 않는 두 직선이 평행선이에요. 이웃한 두 변은 한 점에서 만나요.',
      items: [
        { type: 'figure', prompt: '평행한 변이 몇 쌍인지 쓰세요.', tool: 'shapes', wide: true, figures: [{ options: { mode: 'geoboard', size: 7, showCounts: false }, state: { pts: R(1, 1, 4, 2) }, caption: '___쌍' }], answer: '2쌍' },
        { type: 'table', prompt: '두 선이 평행하면 ○, 아니면 ×를 쓰세요.', columns: ['두 선', '철길의 두 레일', 'X자로 놓인 두 막대'], cells: [['평행', '', '']], answer: '○, ×' },
        { type: 'choice', prompt: '서로 만나지 않는 두 직선에 ○ 하세요.', options: ['평행선', '수직인 두 직선'], answer: '평행선' },
        { type: 'draw', prompt: '삼각자와 자를 이용해 서로 평행한 두 직선을 그려 보세요.' },
      ],
    },
  },
  diff: {
    easy: '점판에 직각 표시가 보이고 만든 사각형의 꼭짓점·변 수가 바로 보여요.',
    base: '꼭짓점·변 수가 보이는 점판에서 조건에 맞는 사각형을 만들어요.',
    challenge: '꼭짓점·변 수 표시 없이 평행한 변과 직각의 수를 스스로 세어 사각형을 만들어요.',
  },
  notes: '자주 보이는 어려움: ① 이웃한 두 변을 평행하다고 센다 → 이웃한 변은 한 점에서 만난다. ② 평행선은 길이가 같아야 한다고 생각한다 → 만나지 않는 것이 기준. ③ 한 직선에 수직인 두 직선이 평행하다는 것을 직접 그려 보기 전에는 받아들이지 못한다 → 삼각자로 수선 두 개를 그어 확인. 평행선 사이의 거리는 다음 차시에서 다룬다.',
}));

// ───────────────────────────── 4차시 (practice · representation) ─────────────────────────────
L.push(lesson(4, {
  std: S3,
  title: '평행선 사이의 거리를 수직으로 재기',
  objective: '평행선 사이의 거리가 두 평행선에 수직으로 그은 선분의 길이임을 알고, 점판 도형과 자로 평행선 사이의 거리를 구할 수 있다.',
  desc: 'two parallel paper lines with a short straight paper strip placed across them at right angles and a ruler beside it, on a craft table',
  text: '수직으로 재요',
  layers: [{ motif: 'house', x: 120, y: 216, s: 0.8 }, { motif: 'flower', x: 330, y: 238 }, { motif: 'bird', x: 300, y: 84 }],
  intro: ['"철길의 두 레일 사이를 재려고 해요. 비스듬히 잴까요, 수직으로 잴까요?" 평행한 두 직선 사이에 비스듬한 선분과 수직인 선분을 여러 개 그어 길이를 견주어 보인다. "수직으로 그은 선분이 가장 짧아요. 이 길이를 평행선 사이의 거리라고 해요." 비스듬히 잰 길이를 거리라고 하는 학생에게는 수직인 선분과 길이를 직접 견주어 보게 한다.', '평행한 두 직선 사이의 거리는 어떻게 재야 할까요? 수직으로 잴 때와 비스듬히 잴 때의 길이를 견줘 봐요.'],
  acts: [
    { id: 'a1', title: '활동 1. 수직으로 놓인 띠의 길이 재기', minutes: 8, tool: 'measure',
      task: '두 평행선 사이에 수직으로 놓은 종이띠의 길이를 재어요. 그 길이가 평행선 사이의 거리예요.',
      teacher: '"종이띠는 두 평행선에 수직으로 놓여 있어요. 자로 재면 몇 cm일까요?" 눈금 0에서 띠 끝까지 읽게 한다. 눈금 처음이 0이 아닌 곳에서 시작할 때 끝 눈금을 그대로 읽는 학생에게는 처음 눈금을 짚어 길이를 다시 구하게 한다.',
      levels: { easy: { mode: 'ruler', mm: false, max: 10 }, base: { mode: 'ruler', mm: false, max: 10 }, challenge: { mode: 'ruler', mm: false, max: 10 } },
      items: [
        { prompt: '두 평행선 사이에 수직으로 놓은 띠예요. 평행선 사이의 거리는 몇 cm일까요?', toolOptions: { object: { name: '수직 띠', len: 3 }, askNum: { q: '평행선 사이의 거리는 몇 cm일까요?', unit: 'cm' } }, target: { num: 3 }, ...IT(0.12) },
        { prompt: '이번 평행선 사이에 수직으로 놓은 띠의 길이를 재어 평행선 사이의 거리를 써 보세요.', toolOptions: { object: { name: '수직 띠', len: 5 }, askNum: { q: '평행선 사이의 거리는 몇 cm일까요?', unit: 'cm' } }, target: { num: 5 }, ...IT(0.16) },
        { prompt: '평행선 사이에 놓은 띠가 눈금 2에서 시작해요. 평행선 사이의 거리는 몇 cm일까요?', toolOptions: { object: { name: '수직 띠', len: 4, start: 2 }, askNum: { q: '평행선 사이의 거리는 몇 cm일까요?', unit: 'cm' } }, target: { num: 4 }, ...IT(0.24) },
        { prompt: '더 해 보기: 두 평행선 사이에 수직으로 놓은 띠가 눈금 1에서 시작해요. 거리는 몇 cm일까요?', toolOptions: { object: { name: '수직 띠', len: 6, start: 1 }, askNum: { q: '평행선 사이의 거리는 몇 cm일까요?', unit: 'cm' } }, target: { num: 6 }, ...IT(0.3, true) },
      ] },
    { id: 'a2', title: '활동 2. 점판 도형에서 평행한 두 변 사이의 거리 구하기', minutes: 9, tool: 'shapes',
      task: '점판 한 칸의 길이를 1로 해요. 평행한 두 변 사이의 거리를 수직인 칸 수로 세어 써요.',
      teacher: '"위 변과 아래 변이 평행해요. 두 변 사이의 거리는 몇 칸일까요?" 세로줄을 따라 칸을 세게 한다. 평행사변형에서 기울어진 변의 길이를 거리로 말하는 학생에게는 기울어진 변과 수직인 선분 가운데 어느 것이 더 짧은지 물어 수직으로 센 칸 수가 거리라고 짚는다.',
      levels: GER,
      items: [
        geoNum('직사각형에서 위 변과 아래 변은 평행해요. 두 변 사이의 거리는 몇 칸일까요?', R(1, 1, 4, 3), '위 변과 아래 변 사이의 거리는 몇 칸일까요?', '칸', 3, 0.14),
        geoNum('평행사변형에서 위 변과 아래 변은 평행해요. 두 변 사이의 거리는 몇 칸일까요?', [[0, 5], [3, 5], [6, 1], [3, 1]], '위 변과 아래 변 사이의 거리는 몇 칸일까요?', '칸', 4, 0.22),
        geoNum('사다리꼴에서 윗변과 아랫변은 평행해요. 두 변 사이의 거리는 몇 칸일까요?', [[0, 3], [1, 1], [4, 1], [6, 3]], '윗변과 아랫변 사이의 거리는 몇 칸일까요?', '칸', 2, 0.24),
        geoNum('더 해 보기: 평행사변형에서 위 변과 아래 변 사이의 거리는 몇 칸일까요?', [[0, 6], [3, 6], [5, 1], [2, 1]], '위 변과 아래 변 사이의 거리는 몇 칸일까요?', '칸', 5, 0.3, true),
      ] },
    { id: 'a3', title: '활동 3. 평행선 사이의 거리에 대해 말하기', minutes: 9, tool: 'mindmap',
      task: '평행선 사이의 거리에 대해 바르게 말한 카드를 고르고 재는 차례를 놓아요.',
      teacher: '"평행선 사이에 선분을 여러 개 그었어요. 어느 선분이 가장 짧을까요? 그 길이가 거리예요." 수직인 선분이 가장 짧다는 말이 나오게 한다. "평행선은 어디에서 재도 수직으로 재면 거리가 같을까요?" 같다는 것을 직접 두 군데에서 재어 확인하게 한다.',
      levels: CARD,
      items: [
        pk('두 평행선 사이에 선분을 여러 개 그었어요. 바르게 말한 카드를 모두 골라 보세요.', '평행선 사이의 거리', [['평행선 사이의 거리는 두 평행선에 수직으로 그은 선분의 길이예요', true], ['비스듬히 그은 선분은 수직인 선분보다 길어요', true], ['어디에서 재어도 수직으로 재면 거리가 같아요', true], ['비스듬히 잰 길이가 평행선 사이의 거리예요', false, '수직으로 잰 길이가 거리예요.']], 0.2),
        pk('평행선 사이의 거리를 바르게 구한 말을 모두 골라 보세요.', '평행선 사이의 거리', [['직사각형에서 마주 보는 두 변 사이의 거리는 다른 변의 길이와 같아요', true], ['평행사변형에서는 기울어진 변의 길이가 두 변 사이의 거리예요', false, '수직으로 재야 해요. 기울어진 변은 더 길어요.'], ['거리는 두 평행선에 직각으로 맞춘 삼각자 변을 따라 재요', true], ['평행선 사이의 거리는 항상 선분의 길이와 같아요', false, '수직으로 그은 선분의 길이만 거리예요.']], 0.24),
        orderCards('평행선 사이의 거리를 재는 차례대로 카드를 놓아 보세요.', '평행선 사이의 거리', ['한 평행선 위에 점을 하나 정한다', '삼각자로 그 점에서 다른 평행선까지 수직인 선분을 긋는다', '수직인 선분의 길이를 자로 잰다', '잰 길이를 평행선 사이의 거리로 쓴다'], 0.26),
        pk('더 해 보기: 두 평행선 사이의 거리를 두 군데에서 재었어요. 바르게 말한 카드를 모두 골라 보세요.', '평행선 사이의 거리', [['두 길이는 같게 나와요', true], ['평행선은 어디에서 재도 간격이 일정해요', true], ['한 군데는 길고 한 군데는 짧게 나와야 해요', false, '평행선 사이의 거리는 일정해요.']], 0.3, true),
      ] },
  ],
  wrap: ['"평행선 사이의 거리는 어떻게 재야 할까요? 왜 비스듬히 재면 안 될까요?" 수직으로 잰 선분이 가장 짧다는 말이 나오는지 듣는다. 출구 1번에서 기울어진 변의 길이를 쓴 학생은 평행사변형의 기울어진 변과 수직인 선분을 구별하지 못하는지 다음 시간에 먼저 살핀다.', [
    { type: 'tool', tool: 'shapes', options: { mode: 'geoboard', size: 7, readOnly: true, showCounts: false, askNum: { q: '윗변과 아랫변 사이의 거리는 몇 칸일까요?', unit: '칸' } }, state: { pts: [[1, 6], [2, 2], [5, 2], [6, 6]] }, prompt: '사다리꼴에서 윗변과 아랫변은 평행해요. 두 변 사이의 거리는 몇 칸일까요?', target: { num: 4 }, difficulty: 0.24 },
    { type: 'choice', prompt: '평행선 사이의 거리는 어떻게 재야 하나요?', options: ['비스듬하게', '수직으로', '아무렇게나'], answer: 1, difficulty: 0.14, explain: '평행선 사이의 거리는 두 평행선에 수직으로 잰 선분의 길이예요.' },
    { type: 'short', prompt: '평행선 사이의 거리를 비스듬히 재면 안 되는 까닭을 써 보세요.', answer: '비스듬히 잰 선분은 수직으로 잰 선분보다 길어서 가장 짧은 길이인 평행선 사이의 거리가 되지 않기 때문이다.', difficulty: 0.24 },
  ]],
  ws: {
    title: '평행선 사이의 거리',
    items: [
      { type: 'figure', prompt: '평행한 두 변 사이의 거리는 몇 칸인지 쓰세요. 점판 한 칸의 길이는 1이에요.', tool: 'shapes', wide: true, answer: '가: 3칸, 나: 4칸', figures: [
        { options: { mode: 'geoboard', size: 7, showCounts: false }, state: { pts: R(1, 1, 3, 3) }, caption: '가 ___칸' }, { options: { mode: 'geoboard', size: 7, showCounts: false }, state: { pts: [[1, 6], [2, 2], [5, 2], [6, 6]] }, caption: '나 ___칸' }] },
      { type: 'table', prompt: '평행선 사이에 놓은 선분의 길이를 보고 거리에 ○ 하세요.', columns: ['선분', '수직으로 놓은 것', '비스듬히 놓은 것'], cells: [['길이', '3 cm', '5 cm']], answer: '수직으로 놓은 것 3 cm' },
      { type: 'choice', prompt: '평행선 사이의 거리에 대해 바르게 말한 것에 ○ 하세요.', options: ['수직으로 재요', '비스듬히 재요', '길이가 달라요'], answer: '수직으로 재요' },
      { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '평행선 사이의 거리는 평행선에 ______으로 그은 선분의 길이예요.', answer: '수직' },
      { type: 'short', prompt: '평행사변형에서 기울어진 변의 길이가 평행선 사이의 거리가 아닌 까닭을 써 보세요.', answer: '기울어진 변은 수직으로 그은 선분보다 길어서 가장 짧은 길이가 아니기 때문이다.' },
    ],
    easy: {
      note: '평행선 사이의 거리는 수직인 선분의 길이예요. 점판에서는 수직인 줄의 칸 수를 세어요.',
      items: [
        { type: 'figure', prompt: '평행한 두 변 사이의 거리는 몇 칸인지 쓰세요.', tool: 'shapes', wide: true, figures: [{ options: { mode: 'geoboard', size: 7, showCounts: false }, state: { pts: R(1, 1, 4, 2) }, caption: '___칸' }], answer: '2칸' },
        { type: 'table', prompt: '거리에 ○ 하세요.', columns: ['선분', '수직으로 놓은 것', '비스듬히 놓은 것'], cells: [['길이', '2 cm', '4 cm']], answer: '수직으로 놓은 것 2 cm' },
        { type: 'choice', prompt: '수직으로 재는 것에 ○ 하세요.', options: ['평행선 사이의 거리', '기울어진 변의 길이'], answer: '평행선 사이의 거리' },
        { type: 'draw', prompt: '자와 삼각자로 평행한 두 직선 사이에 수직 선분을 그리고 길이를 재어 써 보세요.' },
      ],
    },
  },
  diff: {
    easy: '점판 도형에 직각 표시가 보이고 평행한 두 변 사이의 칸을 세기 쉬워요.',
    base: '점판 도형을 보고 수직으로 세어 평행선 사이의 거리를 써요.',
    challenge: '눈금이 0이 아닌 곳에서 시작하는 띠와 기울어진 평행사변형을 보고 거리를 구해요.',
  },
  notes: '자주 보이는 어려움: ① 평행사변형의 기울어진 변의 길이를 거리로 말한다 → 수직인 선분이 가장 짧음을 직접 견주기. ② 자의 눈금이 0이 아닌 곳에서 시작할 때 끝 눈금을 그대로 읽는다. ③ 거리를 비스듬한 칸 수로 센다. 평행선 사이의 거리 개념은 5학년 평행사변형 넓이(밑변과 높이)로 이어진다.',
}));

// ───────────────────────────── 5차시 (core · application) ─────────────────────────────
L.push(lesson(5, {
  std: S3,
  title: '점판 도형과 우리 교실에서 수직과 평행 찾기',
  objective: '점판 도형과 교실 물건에서 수직인 곳과 평행한 변을 찾아 개수를 세고, 수직과 평행을 구별해 설명할 수 있다.',
  desc: 'a tidy classroom corner with a bookshelf, a window frame and a poster on the wall each outlined with colored paper strips to show perpendicular and parallel edges',
  text: '교실 속 수직과 평행',
  layers: [{ motif: 'house', x: 110, y: 216, s: 0.8 }, { motif: 'tree', x: 400, y: 216, s: 0.8 }, { motif: 'flower', x: 250, y: 238 }, { motif: 'star', x: 340, y: 52, s: 0.5 }],
  intro: ['"우리 교실에서 서로 수직인 두 선과 서로 평행한 두 선을 찾아볼까요?" 칠판의 이웃한 두 변은 수직, 마주 보는 두 변은 평행이라는 예를 먼저 들어 준다. "한 도형 안에도 수직과 평행이 함께 있어요. 직사각형에는 평행한 변이 몇 쌍, 수직인 곳이 몇 군데일까요?" 평행한 변의 쌍을 낱개 변의 수로 세어 4쌍이라고 하는 학생에게는 마주 보는 두 변이 한 쌍이라고 짚는다.', '교실에서 서로 수직인 두 선과 서로 평행한 두 선을 찾아봐요. 한 도형 안에서도 찾을 수 있을까요?'],
  acts: [
    { id: 'a1', title: '활동 1. 수직과 평행 조건에 맞는 도형 만들기', minutes: 9, tool: 'shapes',
      task: '점판에 조건에 맞는 도형을 만들어요. 직각은 수직인 곳이고 평행한 변은 마주 보는 두 변이에요.',
      teacher: '"직각이 있는 삼각형을 만들려면 꼭짓점을 어디에 두어야 할까요?" 가로줄과 세로줄이 만나는 곳에 꼭짓점을 두라고 짚는다. 넓이 조건이 함께 붙은 문항에서는 가로 칸 수와 세로 칸 수를 먼저 정하게 한다. 평행한 변이 있으면 넓이가 어떻게 되는지 세어 보게 한다.',
      levels: GEO,
      items: [
        geo('두 변이 수직으로 만나는 삼각형을 만들어 보세요. 직각이 하나 있어요.', { sides: 3, rightAngles: 1 }, 0.14),
        geo('네 각이 모두 직각이고 넓이가 6칸인 사각형을 만들어 보세요.', { sides: 4, rightAngles: 4, area: 6 }, 0.2),
        geo('평행한 변이 한 쌍이고 직각이 두 개이며 넓이가 6칸인 사각형을 만들어 보세요.', { sides: 4, parallel: 1, rightAngles: 2, area: 6 }, 0.26),
        geo('더 해 보기: 마주 보는 두 쌍의 변이 평행하고 직각이 네 개이며 넓이가 9칸인 사각형을 만들어 보세요.', { sides: 4, parallel: 2, rightAngles: 4, area: 9 }, 0.3, true),
      ] },
    { id: 'a2', title: '활동 2. 마주 보는 변과 이웃한 변의 관계 나누기', minutes: 8, tool: 'mindmap',
      task: '직사각형과 정사각형의 변을 보고 "평행"과 "수직" 가운데 알맞은 칸에 놓아요.',
      teacher: '"직사각형에서 마주 보는 두 변은 평행일까요, 수직일까요? 이웃한 두 변은요?" 마주 보는 변은 평행, 이웃한 변은 수직이라고 말하게 한다. 정사각형의 이웃한 두 변을 평행으로 놓은 학생에게는 두 변이 꼭짓점에서 만난다는 것을 짚어 준다.',
      levels: CARD,
      items: [
        sortCards('직사각형의 변을 보고 평행과 수직으로 나누어 보세요.', '변의 관계', ['평행', '수직'], [['직사각형의 마주 보는 두 변', '평행'], ['직사각형의 이웃한 두 변', '수직'], ['직사각형의 긴 변과 짧은 변', '수직'], ['직사각형의 두 긴 변', '평행']], 0.18),
        sortCards('정사각형의 변을 보고 평행과 수직으로 나누어 보세요.', '변의 관계', ['평행', '수직'], [['정사각형의 한 변과 그 변에 마주 보는 변', '평행'], ['정사각형의 이웃한 두 변', '수직'], ['정사각형의 위쪽 변과 아래쪽 변', '평행'], ['정사각형의 왼쪽 변과 아래쪽 변', '수직']], 0.22),
        sortCards('교실 물건의 선을 보고 평행과 수직으로 나누어 보세요.', '변의 관계', ['평행', '수직'], [['책장의 위 선반과 아래 선반', '평행'], ['창틀의 세로 틀과 가로 틀', '수직'], ['공책의 가로줄 두 줄', '평행'], ['문의 세로 모서리와 바닥선', '수직'], ['사다리의 양쪽 기둥', '평행']], 0.26),
      ] },
    { id: 'a3', title: '활동 3. 도형에서 평행한 변 쌍과 직각 개수 세기', minutes: 9, tool: 'shapes',
      task: '점판 도형을 보고 평행한 변이 몇 쌍인지, 직각이 몇 군데인지 세어 써요. 마주 보는 두 변이 한 쌍이에요.',
      teacher: '"직사각형의 평행한 변은 모두 몇 쌍일까요? 변이 네 개니까 4쌍일까요?" 한 쌍은 마주 보는 두 변이라고 짚고 위·아래, 왼쪽·오른쪽 두 쌍으로 세게 한다. 사다리꼴의 직각 두 군데를 하나로 세는 학생에게는 가로줄과 세로줄이 만나는 곳을 하나씩 짚으며 세어 보게 한다.',
      levels: GER,
      items: [
        geoNum('직사각형이에요. 평행한 변은 모두 몇 쌍일까요?', R(1, 1, 4, 2), '평행한 변은 몇 쌍일까요?', '쌍', 2, 0.16),
        geoNum('사다리꼴이에요. 평행한 변은 모두 몇 쌍일까요?', TRAP_L, '평행한 변은 몇 쌍일까요?', '쌍', 1, 0.2),
        geoNum('같은 사다리꼴이에요. 직각은 모두 몇 군데일까요?', TRAP_L, '직각은 몇 군데일까요?', '군데', 2, 0.24),
        geoNum('더 해 보기: 정사각형이에요. 직각은 모두 몇 군데일까요?', R(1, 1, 3, 3), '직각은 몇 군데일까요?', '군데', 4, 0.28, true),
      ] },
  ],
  wrap: ['"직사각형에서 평행한 변은 몇 쌍이고 수직인 곳은 몇 군데일까요?" 2쌍과 4군데라는 말이 나오는지 듣는다. 출구 1번에서 4쌍을 고른 학생은 마주 보는 두 변을 한 쌍으로 세는지 다음 시간에 먼저 살핀다.', [
    { type: 'choice', prompt: '직사각형에서 평행한 변은 모두 몇 쌍인가요?', options: ['1쌍', '2쌍', '4쌍'], answer: 1, difficulty: 0.14, explain: '마주 보는 두 변이 한 쌍이라서 위·아래 한 쌍, 왼쪽·오른쪽 한 쌍으로 모두 2쌍이에요.' },
    { type: 'tool', tool: 'shapes', options: { mode: 'geoboard', size: 7, readOnly: true, showCounts: false, askNum: { q: '직각은 몇 군데일까요?', unit: '군데' } }, state: { pts: TRAP_R }, prompt: '사다리꼴이에요. 직각은 모두 몇 군데일까요?', target: { num: 2 }, difficulty: 0.22 },
    { type: 'short', prompt: '한 도형에서 평행한 변과 수직인 변을 구별하는 방법을 써 보세요.', answer: '마주 보는 변이 만나지 않으면 평행하고, 이웃한 변이 직각으로 만나면 수직이다.', difficulty: 0.24 },
  ]],
  ws: {
    title: '수직과 평행 정리',
    items: [
      { type: 'figure', prompt: '평행한 변은 몇 쌍이고 직각은 몇 군데인지 쓰세요.', tool: 'shapes', wide: true, answer: '가: 2쌍, 4군데 / 나: 1쌍, 2군데', figures: [
        { options: { mode: 'geoboard', size: 7, showCounts: false }, state: { pts: R(1, 1, 4, 3) }, caption: '가 평행 ___쌍 직각 ___군데' }, { options: { mode: 'geoboard', size: 7, showCounts: false }, state: { pts: TRAP_L }, caption: '나 평행 ___쌍 직각 ___군데' }] },
      { type: 'table', prompt: '교실 물건의 두 선이 평행하면 평행, 직각이면 수직이라고 쓰세요.', columns: ['두 선', '칠판의 이웃한 두 변', '칠판의 위·아래 변', '문의 세로 모서리와 바닥선'], cells: [['관계', '', '', '']], answer: '수직, 평행, 수직' },
      { type: 'choice', prompt: '정사각형에 대해 바르게 말한 것에 ○ 하세요.', options: ['이웃한 변은 평행해요', '마주 보는 변은 평행해요', '직각이 두 군데예요'], answer: '마주 보는 변은 평행해요' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '직사각형에서 평행한 변은 ___쌍이고, 직각은 ___군데예요.', answer: '2, 4' },
      { type: 'short', prompt: '수직과 평행은 어떻게 다른지 한 문장으로 써 보세요.', answer: '수직은 두 직선이 직각으로 만나는 것이고, 평행은 두 직선이 아무리 늘여도 만나지 않는 것이다.' },
    ],
    easy: {
      note: '마주 보는 두 변이 평행한 한 쌍이에요. 이웃한 두 변이 직각으로 만나는 곳이 수직이에요.',
      items: [
        { type: 'figure', prompt: '평행한 변은 몇 쌍인지 쓰세요.', tool: 'shapes', wide: true, figures: [{ options: { mode: 'geoboard', size: 7, showCounts: false }, state: { pts: R(1, 1, 3, 2) }, caption: '___쌍' }], answer: '2쌍' },
        { type: 'table', prompt: '평행이면 평행, 직각이면 수직이라고 쓰세요.', columns: ['두 선', '칠판의 이웃한 두 변', '칠판의 위·아래 변'], cells: [['관계', '', '']], answer: '수직, 평행' },
        { type: 'choice', prompt: '마주 보는 두 변의 관계에 ○ 하세요.', options: ['평행', '수직'], answer: '평행' },
        { type: 'draw', prompt: '직사각형을 그리고 평행한 변에는 ∥, 수직인 곳에는 직각 표시를 해 보세요.' },
      ],
    },
  },
  diff: {
    easy: '점판에 직각 표시가 보이고 만든 도형의 변·꼭짓점 수가 바로 보여요.',
    base: '직각 표시 없이 조건을 읽고 도형을 만들어요.',
    challenge: '조건이 세 가지 겹치고 넓이까지 맞추어 도형을 만들어요.',
  },
  notes: '자주 보이는 어려움: ① 평행한 변의 쌍을 낱개 변 수로 센다(직사각형 4쌍) → 마주 보는 두 변이 한 쌍. ② 직각이 있는 곳을 하나로만 센다 → 가로줄과 세로줄이 만나는 꼭짓점을 하나씩 짚으며. ③ 평행과 수직을 서로 바꾸어 말한다 → 만나지 않으면 평행, 직각으로 만나면 수직. 다음 차시부터는 평행을 바탕으로 여러 가지 사각형을 분류한다.',
}));

// ───────────────────────────── 6차시 (core · concept) ─────────────────────────────
L.push(lesson(6, {
  std: S10,
  title: '평행한 변이 있는 사각형, 사다리꼴 만들고 가려내기',
  objective: '평행한 변이 한 쌍이라도 있는 사각형을 사다리꼴이라고 하며, 점판에서 사다리꼴을 만들고 도형 카드에서 사다리꼴을 가려내 까닭을 말할 수 있다.',
  desc: 'a paper ladder leaning against a paper house wall with trapezoid shaped paper window boxes and flower pots on the ground',
  text: '평행한 변이 있는 사각형',
  layers: [{ motif: 'house', x: 110, y: 216, s: 0.8 }, { motif: 'tree', x: 400, y: 216, s: 0.8 }, { motif: 'flower', x: 250, y: 238 }],
  intro: ['"사다리를 옆에서 본 모양, 화단 앞면처럼 위가 좁고 아래가 넓은 모양을 본 적이 있나요? 이 사각형에는 평행한 변이 있어요." 칠판에 평행한 두 변을 같은 색으로 표시한 사각형을 그려 보인다. "평행한 변이 한 쌍이라도 있는 사각형을 사다리꼴이라고 해요." 평행한 변이 두 쌍이면 사다리꼴이 아니라고 말하는 학생이 있으면 그 말을 칠판에 적어 두었다가 활동 2의 직사각형 카드에서 다시 따져 본다.', '평행한 변이 있는 사각형을 찾아보세요. 평행한 변이 한 쌍이라도 있는 사각형을 사다리꼴이라고 불러요.'],
  demo: { tool: 'shapes', options: { mode: 'geoboard', size: 7 }, sequence: [{ pts: TRAP_I }] },
  acts: [
    { id: 'a1', title: '활동 1. 점판에서 사다리꼴 만들기', minutes: 9, tool: 'shapes',
      task: '점판에 사다리꼴을 만들어요. 평행한 변을 먼저 정하고 나머지 두 점을 찍어 사각형을 완성해요.',
      teacher: '"윗변과 아랫변을 평행하게 그으려면 두 변이 같은 줄 위에 있어야 해요. 어느 줄을 고를까요?" 가로줄 둘을 골라 두 점씩 찍게 한다. 평행한 변이 한 쌍뿐인 사다리꼴을 만들라는 문항에서 직사각형을 만든 학생에게는 마주 보는 두 쌍이 모두 평행한 것은 평행사변형이라고 짚는다.',
      levels: GEO,
      items: [
        geo('평행한 변이 한 쌍이라도 있는 사다리꼴을 만들어 보세요.', { shape: 'trapezoid' }, 0.12),
        geo('평행한 변이 한 쌍뿐인 사다리꼴을 만들어 보세요. 두 쌍이면 평행사변형이 돼요.', { shape: 'trapezoid', exact: true }, 0.2),
        geo('직각이 두 개이고 평행한 변이 한 쌍뿐인 사다리꼴을 만들어 보세요.', { shape: 'trapezoid', exact: true, rightAngles: 2 }, 0.24),
        geo('더 해 보기: 평행한 변이 한 쌍뿐이고 넓이가 6칸인 사다리꼴을 만들어 보세요.', { shape: 'trapezoid', exact: true, area: 6 }, 0.3, true),
      ] },
    { id: 'a2', title: '활동 2. 사다리꼴과 사다리꼴이 아닌 도형 나누기', minutes: 9, tool: 'shapes',
      task: '도형 카드를 사다리꼴과 사다리꼴이 아닌 것으로 나누어요. 평행한 변이 한 쌍이라도 있는 사각형은 사다리꼴이에요.',
      teacher: '"직사각형에는 평행한 변이 몇 쌍 있나요? 한 쌍이라도 있으면 사다리꼴일까요?" 두 쌍도 한 쌍 이상이라 사다리꼴이라고 말하게 한다. 연 모양을 사다리꼴로 고른 학생에게는 마주 보는 변을 길게 늘여 만나는지 보게 하고, 삼각형은 변이 세 개라서 사각형이 아니라고 짚는다.',
      levels: CLS,
      items: [
        cls('도형 카드를 사다리꼴과 사다리꼴이 아닌 것으로 나누어 보세요.', [['trapezoid', '가', 0], [GENQ, '나', 1], ['rectangle', '다', 0], [KITE_N, '라', 1], ['parallelogram', '마', 0], ['triangle', '바', 1]], ['사다리꼴', '사다리꼴이 아니에요'], 0.2),
        cls('이번에는 도형 카드를 사다리꼴과 사다리꼴이 아닌 것으로 나누어 보세요.', [['rhombus', '가', 0], ['pentagon', '나', 1], ['square', '다', 0], [KITE_N, '라', 1], ['trapezoid', '마', 0], ['hexagon', '바', 1]], ['사다리꼴', '사다리꼴이 아니에요'], 0.24),
        cls('마지막으로 도형 카드를 사다리꼴과 사다리꼴이 아닌 것으로 나누어 보세요.', [[RTRAP_N, '가', 0], ['obtuse-triangle', '나', 1], ['rhombus', '다', 0], [GENQ, '라', 1], ['trapezoid', '마', 0], ['rectangle', '바', 0]], ['사다리꼴', '사다리꼴이 아니에요'], 0.28),
      ] },
    { id: 'a3', title: '활동 3. 사다리꼴에 대해 바르게 말한 카드 고르기', minutes: 8, tool: 'mindmap',
      task: '사다리꼴에 대해 바르게 말한 카드를 모두 골라요.',
      teacher: '"준호는 직사각형은 평행한 변이 두 쌍이니까 사다리꼴이 아니라고 했어요. 바른 말은 어느 카드일까요?" 사다리꼴의 조건은 평행한 변이 적어도 한 쌍이라는 점을 짚는다. "사다리꼴이 아닌 사각형은 평행한 변이 하나도 없는 사각형이에요."',
      levels: CARD,
      items: [
        pk('사다리꼴에 대해 바르게 말한 카드를 모두 골라 보세요.', '사다리꼴', [['평행한 변이 한 쌍이라도 있는 사각형이에요', true], ['마주 보는 두 쌍이 모두 평행해도 사다리꼴이에요', true], ['평행한 변이 한 쌍만 있어야 사다리꼴이에요', false, '두 쌍이어도 한 쌍 이상이니 사다리꼴이에요.'], ['변이 네 개인 도형이에요', true]], 0.18),
        pk('준호는 "직사각형은 평행한 변이 두 쌍이니까 사다리꼴이 아니다"라고 했어요. 바르게 말한 카드를 모두 골라 보세요.', '사다리꼴', [['직사각형도 평행한 변이 한 쌍 이상 있어서 사다리꼴이에요', true], ['사다리꼴의 조건은 평행한 변이 한 쌍이라도 있는 것이에요', true], ['평행한 변이 두 쌍이면 사다리꼴이 될 수 없어요', false, '한 쌍이라도 있으면 되니 두 쌍도 괜찮아요.'], ['직사각형은 사다리꼴이면서 평행사변형이기도 해요', true]], 0.24),
        pk('사다리꼴이 아닌 도형에 대해 바르게 말한 카드를 모두 골라 보세요.', '사다리꼴', [['평행한 변이 하나도 없는 사각형은 사다리꼴이 아니에요', true], ['연 모양처럼 마주 보는 변이 모두 만나는 사각형은 사다리꼴이 아니에요', true], ['변이 네 개가 아니어도 사다리꼴이 될 수 있어요', false, '사다리꼴은 사각형이라서 변이 네 개여야 해요.'], ['삼각형은 사다리꼴이 아니에요', true]], 0.26),
        pk('더 해 보기: 사다리꼴을 그리는 방법으로 바른 카드를 모두 골라 보세요.', '사다리꼴', [['한 직선을 긋고 그 직선과 평행한 직선을 하나 더 그어요', true], ['평행한 두 직선 위에서 점을 두 개씩 찾아 이어 사각형을 만들어요', true], ['네 변을 모두 서로 다른 방향으로 그어요', false, '평행한 변이 하나도 없으면 사다리꼴이 아니에요.']], 0.3, true),
      ] },
  ],
  wrap: ['"사다리꼴은 어떤 사각형인가요? 직사각형도 사다리꼴일까요?" 평행한 변이 한 쌍이라도 있다는 말이 나오는지 듣는다. 출구 3번에서 직사각형은 사다리꼴이 될 수 없다고 답한 학생은 평행한 변이 한 쌍뿐이어야 한다고 생각하는지 다음 시간에 먼저 살핀다.', [
    { type: 'tool', tool: 'shapes', options: { mode: 'geoboard', size: 7 }, prompt: '평행한 변이 한 쌍이고 넓이가 4칸인 사다리꼴을 만들어 보세요.', target: { shape: 'trapezoid', area: 4 }, difficulty: 0.22 },
    { type: 'choice', prompt: '평행한 변이 한 쌍이라도 있는 사각형을 무엇이라고 하나요?', options: ['사다리꼴', '마름모', '삼각형'], answer: 0, difficulty: 0.12, explain: '평행한 변이 한 쌍이라도 있는 사각형이 사다리꼴이에요.' },
    { type: 'choice', prompt: '직사각형은 사다리꼴일까요?', options: ['사다리꼴이 될 수 없어요', '사다리꼴이기도 해요'], answer: 1, difficulty: 0.24, explain: '직사각형은 평행한 변이 두 쌍 있어서 한 쌍 이상이라는 사다리꼴의 조건을 만족해요.' },
  ]],
  ws: {
    title: '사다리꼴 알아보기',
    items: [
      { type: 'figure', prompt: '사다리꼴이면 ○ 하세요. 평행한 변이 한 쌍이라도 있으면 사다리꼴이에요.', tool: 'shapes', wide: true, answer: '가 ○, 나 ×, 다 ○', figures: [
        { options: { mode: 'geoboard', size: 7, showCounts: false }, state: { pts: TRAP_I }, caption: '가' }, { options: { mode: 'geoboard', size: 7, showCounts: false }, state: { pts: KITE }, caption: '나' }, { options: { mode: 'geoboard', size: 7, showCounts: false }, state: { pts: R(1, 1, 4, 2) }, caption: '다' }] },
      { type: 'table', prompt: '평행한 변이 몇 쌍인지 쓰고 사다리꼴이면 ○ 하세요.', columns: ['도형', '평행한 변', '사다리꼴'], cells: [['직사각형', '', ''], ['평행사변형', '', ''], ['연 모양', '', '']], answer: '2쌍 ○, 2쌍 ○, 0쌍 ×' },
      { type: 'choice', prompt: '사다리꼴에 대해 바르게 말한 것에 ○ 하세요.', options: ['평행한 변이 한 쌍이라도 있어요', '평행한 변이 한 쌍만 있어야 해요', '변이 세 개예요'], answer: '평행한 변이 한 쌍이라도 있어요' },
      { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '평행한 변이 ______ 있는 사각형을 ______이라고 해요.', answer: '한 쌍이라도, 사다리꼴' },
      { type: 'short', prompt: '직사각형이 사다리꼴인 까닭을 써 보세요.', answer: '직사각형은 평행한 변이 두 쌍 있어서 한 쌍이라도 있다는 사다리꼴의 조건을 만족하기 때문이다.' },
    ],
    easy: {
      note: '평행한 변이 한 쌍이라도 있으면 사다리꼴이에요. 마주 보는 변을 찾아 표시해 보세요.',
      items: [
        { type: 'figure', prompt: '사다리꼴이면 ○ 하세요.', tool: 'shapes', wide: true, figures: [{ options: { mode: 'geoboard', size: 7, showCounts: false }, state: { pts: TRAP_L }, caption: '가' }, { options: { mode: 'geoboard', size: 7, showCounts: false }, state: { pts: KITE }, caption: '나' }], answer: '가 ○, 나 ×' },
        { type: 'table', prompt: '평행한 변이 몇 쌍인지 쓰세요.', columns: ['도형', '평행한 변'], cells: [['직사각형', ''], ['연 모양', '']], answer: '2쌍, 0쌍' },
        { type: 'choice', prompt: '평행한 변이 없는 사각형은 사다리꼴인가요? ○ 하세요.', options: ['사다리꼴이에요', '사다리꼴이 아니에요'], answer: '사다리꼴이 아니에요' },
        { type: 'draw', prompt: '평행한 두 직선을 긋고 두 직선 위의 네 점을 이어 사다리꼴을 그려 보세요.' },
      ],
    },
  },
  diff: {
    easy: '점판에 직각 표시가 보이고 도형 카드를 놓으면 바로 맞는지 알려 줘요.',
    base: '직각 표시 없이 평행한 변이 한 쌍이라도 있는지 스스로 살펴 사다리꼴을 만들고 가려내요.',
    challenge: '꼭짓점·변 수 표시 없이 직각·넓이 조건이 붙은 사다리꼴을 만들고 연 모양처럼 헷갈리는 카드도 가려내요.',
  },
  notes: '자주 보이는 어려움: ① 평행한 변이 두 쌍이면 사다리꼴이 아니라고 생각한다(직사각형·평행사변형을 제외) → 한 쌍이라도 있으면 사다리꼴. ② 연 모양을 사다리꼴로 고른다 → 마주 보는 변을 늘여 만나는지 확인. ③ 삼각형을 사다리꼴로 고른다 → 사각형은 변이 네 개. 이 단원에서는 평행한 변이 한 쌍이라도 있는 사각형을 사다리꼴로 정의하며, 교구도 같은 포함 관계로 판정한다.',
}));

// ───────────────────────────── 7차시 (practice · concept) ─────────────────────────────
L.push(lesson(7, {
  std: S10,
  title: '마주 보는 두 쌍이 평행한 평행사변형 만들기',
  objective: '마주 보는 두 쌍의 변이 서로 평행한 사각형을 평행사변형이라고 하며, 평행사변형의 마주 보는 변과 각의 성질을 말하고 점판에서 만들 수 있다.',
  desc: 'a paper parallelogram shaped cardboard frame being pushed from a rectangle into a slanted shape beside a pair of small paper rulers on a craft table',
  text: '밀어서 만든 평행사변형',
  layers: [{ motif: 'house', x: 120, y: 216, s: 0.8 }, { motif: 'tree', x: 380, y: 216, s: 0.8 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"직사각형 틀의 윗변을 옆으로 밀면 어떤 모양이 될까요?" 칠판에 직사각형을 그리고 윗변을 오른쪽으로 밀어 평행사변형으로 바꾸어 보인다. "마주 보는 두 쌍의 변이 서로 평행한 사각형을 평행사변형이라고 해요." 밀어도 마주 보는 변이 평행한 채인지 짚고, 이웃한 변의 길이가 같아야만 평행사변형이라고 생각하는 학생에게는 길이가 달라도 평행하면 평행사변형이라고 말해 준다.', '직사각형의 윗변을 옆으로 밀면 어떤 모양이 될까요? 마주 보는 변이 평행한지 살펴봐요.'],
  demo: { tool: 'shapes', options: { mode: 'geoboard', size: 7 }, sequence: [{ pts: R(1, 1, 3, 2) }, { pts: [[1, 1], [4, 1], [5, 3], [2, 3]] }] },
  acts: [
    { id: 'a1', title: '활동 1. 점판에서 평행사변형 만들기', minutes: 9, tool: 'shapes',
      task: '점판에 평행사변형을 만들어요. 마주 보는 두 쌍의 변이 모두 평행해야 하고 직각이나 같은 변이 아니어도 돼요.',
      teacher: '"윗변과 아랫변의 길이가 같으면 마주 보는 다른 두 변은 어떻게 그어야 할까요?" 윗변을 오른쪽으로 옮긴 만큼 아랫변도 같은 방향으로 밀어 그려 보게 한다. 윗변과 아랫변의 길이를 다르게 해서 사다리꼴이 된 학생에게는 마주 보는 다른 두 변이 평행한지 확인하게 한다.',
      levels: GEO,
      items: [
        geo('마주 보는 두 쌍이 평행한 평행사변형을 만들어 보세요. 직각이 없는 모양이에요.', { shape: 'parallelogram', exact: true }, 0.16),
        geo('넓이가 6칸인 평행사변형을 만들어 보세요. 가로 칸 수와 높이를 곱해요.', { shape: 'parallelogram', exact: true, area: 6 }, 0.22),
        geo('넓이가 8칸인 평행사변형을 만들어 보세요.', { shape: 'parallelogram', exact: true, area: 8 }, 0.26),
        geo('더 해 보기: 넓이가 9칸인 평행사변형을 만들어 보세요.', { shape: 'parallelogram', exact: true, area: 9 }, 0.3, true),
      ] },
    { id: 'a2', title: '활동 2. 평행사변형의 성질 말하기', minutes: 9, tool: 'mindmap',
      task: '평행사변형에 대해 바르게 말한 카드를 모두 골라요.',
      teacher: '"평행사변형을 밀어서 모양을 바꿔도 변하지 않는 것은 무엇일까요?" 마주 보는 변이 평행한 것과 길이가 같은 것이라고 말하게 한다. 직각의 수나 네 각의 크기는 밀면 변한다고 짚는다. 직사각형은 평행사변형일까를 마지막 문항에서 따지게 한다.',
      levels: CARD,
      items: [
        pk('평행사변형에서 마주 보는 변과 각에 대해 바르게 말한 카드를 모두 골라 보세요.', '평행사변형', [['마주 보는 두 변의 길이가 같아요', true], ['마주 보는 두 각의 크기가 같아요', true], ['이웃한 두 변의 길이는 항상 같아요', false, '이웃한 두 변의 길이는 달라도 돼요.'], ['마주 보는 두 쌍의 변이 서로 평행해요', true]], 0.2),
        pk('평행사변형을 밀어서 모양을 바꿀 때 변하지 않는 것을 모두 골라 보세요.', '평행사변형', [['마주 보는 변의 길이', true], ['마주 보는 변이 평행한 것', true], ['직각의 수', false, '밀면 각의 크기가 변해서 직각의 수가 달라져요.'], ['네 각의 크기', false, '밀면 각의 크기가 변해요.']], 0.24),
        pk('준호는 "직사각형은 평행사변형이 아니다"라고 했어요. 바르게 말한 카드를 모두 골라 보세요.', '평행사변형', [['직사각형도 마주 보는 두 쌍이 평행해서 평행사변형이에요', true], ['직사각형은 평행사변형이면서 직각이 네 개인 사각형이에요', true], ['직각이 있으면 평행사변형이 될 수 없어요', false, '직각이 있어도 마주 보는 두 쌍이 평행하면 평행사변형이에요.'], ['네 변의 길이가 같아야만 평행사변형이에요', false, '변의 길이가 같지 않아도 평행하면 평행사변형이에요.']], 0.26),
        pk('더 해 보기: 사다리꼴과 평행사변형의 관계를 바르게 말한 카드를 모두 골라 보세요.', '평행사변형', [['평행사변형은 사다리꼴이기도 해요', true], ['평행사변형은 평행한 변이 두 쌍이에요', true], ['사다리꼴은 모두 평행사변형이에요', false, '평행한 변이 한 쌍뿐인 사다리꼴은 평행사변형이 아니에요.']], 0.3, true),
      ] },
    { id: 'a3', title: '활동 3. 점판 도형의 이름 고르기', minutes: 8, tool: 'shapes',
      task: '점판 도형을 보고 가장 알맞은 이름을 골라요. 마주 보는 변이 평행한 쌍이 몇 쌍인지 세어 봐요.',
      teacher: '"이 도형에서 마주 보는 변이 평행한 쌍은 몇 쌍일까요?" 윗변과 아랫변, 비스듬한 두 변을 차례로 짚으며 세게 한다. 두 다리가 평행하지 않은 사다리꼴을 평행사변형으로 고르는 학생에게는 비스듬한 두 변을 늘이면 만나는지 보게 한다.',
      levels: GER,
      items: [
        geoRead('점판 도형의 가장 알맞은 이름을 골라 보세요.', PAR1, '가장 알맞은 이름은?', ['사다리꼴', '평행사변형', '직사각형'], 1, 0.16),
        geoRead('이번 도형의 가장 알맞은 이름을 골라 보세요.', TRAP_I, '가장 알맞은 이름은?', ['평행사변형', '사다리꼴', '마름모'], 1, 0.22),
        geoRead('점판 도형에서 마주 보는 변이 평행한 쌍은 몇 쌍인지 골라 보세요.', PAR2, '평행한 변은 몇 쌍일까요?', ['한 쌍', '두 쌍', '없어요'], 1, 0.22),
        geoRead('더 해 보기: 연 모양의 도형이에요. 가장 알맞은 이름을 골라 보세요.', KITE, '가장 알맞은 이름은?', ['평행사변형', '사다리꼴', '어느 것도 아니에요'], 2, 0.28, true),
      ] },
  ],
  wrap: ['"평행사변형은 어떤 사각형인가요? 마주 보는 변은 길이가 어떤가요?" 마주 보는 두 쌍이 평행하고 길이가 같다는 말이 나오는지 듣는다. 출구 2번에서 마주 보는 변의 길이가 다르다고 답한 학생은 이웃한 변과 마주 보는 변을 섞는지 다음 시간에 먼저 살핀다.', [
    { type: 'tool', tool: 'shapes', options: { mode: 'geoboard', size: 7 }, prompt: '넓이가 4칸인 평행사변형을 만들어 보세요.', target: { shape: 'parallelogram', exact: true, area: 4 }, difficulty: 0.22 },
    { type: 'choice', prompt: '평행사변형에서 마주 보는 두 변의 길이는 어떤가요?', options: ['같아요', '달라요', '알 수 없어요'], answer: 0, difficulty: 0.16, explain: '평행사변형에서 마주 보는 두 변은 서로 평행하고 길이도 같아요.' },
    { type: 'short', prompt: '평행사변형을 밀어서 모양을 바꿔도 변하지 않는 것을 한 가지 써 보세요.', answer: '마주 보는 변이 평행한 것과 마주 보는 변의 길이가 같은 것은 변하지 않는다.', difficulty: 0.22 },
  ]],
  ws: {
    title: '평행사변형 알아보기',
    items: [
      { type: 'figure', prompt: '평행사변형이면 ○ 하세요. 마주 보는 두 쌍의 변이 평행해야 해요.', tool: 'shapes', wide: true, answer: '가 ○, 나 ×, 다 ○', figures: [
        { options: { mode: 'geoboard', size: 7, showCounts: false }, state: { pts: PAR2 }, caption: '가' }, { options: { mode: 'geoboard', size: 7, showCounts: false }, state: { pts: TRAP_I }, caption: '나' }, { options: { mode: 'geoboard', size: 7, showCounts: false }, state: { pts: R(1, 1, 3, 2) }, caption: '다' }] },
      { type: 'table', prompt: '평행사변형의 성질에서 맞는 것에 ○ 하세요.', columns: ['성질', '맞나요'], cells: [['마주 보는 두 변의 길이가 같아요', ''], ['이웃한 두 변의 길이가 항상 같아요', ''], ['마주 보는 두 각의 크기가 같아요', '']], answer: '○, ×, ○' },
      { type: 'choice', prompt: '평행사변형이기도 한 도형에 ○ 하세요.', options: ['직사각형', '연 모양', '삼각형'], answer: '직사각형' },
      { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '마주 보는 ______ 쌍의 변이 서로 평행한 사각형을 ______이라고 해요.', answer: '두, 평행사변형' },
      { type: 'short', prompt: '평행사변형은 사다리꼴이기도 한 까닭을 써 보세요.', answer: '평행사변형은 평행한 변이 두 쌍 있어서 한 쌍이라도 있다는 사다리꼴의 조건을 만족하기 때문이다.' },
    ],
    easy: {
      note: '평행사변형은 마주 보는 두 쌍의 변이 평행해요. 마주 보는 변의 길이도 같아요.',
      items: [
        { type: 'figure', prompt: '평행사변형이면 ○ 하세요.', tool: 'shapes', wide: true, figures: [{ options: { mode: 'geoboard', size: 7, showCounts: false }, state: { pts: PAR1 }, caption: '가' }, { options: { mode: 'geoboard', size: 7, showCounts: false }, state: { pts: KITE }, caption: '나' }], answer: '가 ○, 나 ×' },
        { type: 'table', prompt: '맞는 것에 ○ 하세요.', columns: ['성질', '맞나요'], cells: [['마주 보는 변의 길이가 같아요', '']], answer: '○' },
        { type: 'choice', prompt: '평행사변형은 평행한 변이 몇 쌍이에요? ○ 하세요.', options: ['한 쌍', '두 쌍'], answer: '두 쌍' },
        { type: 'draw', prompt: '직사각형을 그리고 윗변을 옆으로 밀어 평행사변형으로 바꿔 그려 보세요.' },
      ],
    },
  },
  diff: {
    easy: '점판에 직각 표시가 보이고 만든 도형의 꼭짓점·변 수가 바로 보여요.',
    base: '직각 표시 없이 평행사변형의 넓이 조건에 맞는 점을 직접 찍어요.',
    challenge: '꼭짓점·변 수 표시 없이 도형의 이름을 가려내고 연 모양처럼 평행한 변이 없는 도형도 구별해요.',
  },
  notes: '자주 보이는 어려움: ① 이웃한 변의 길이가 같아야 평행사변형이라고 생각한다 → 평행한 변이 두 쌍이면 길이는 달라도 된다. ② 직각이 있으면 평행사변형이 아니라고 생각한다 → 직사각형도 평행사변형. ③ 두 다리가 평행하지 않은 사다리꼴을 평행사변형으로 고른다 → 비스듬한 두 변을 늘여 만나는지. 평행사변형의 넓이 공식은 5학년에서 다루므로 여기서는 점판 칸 수로만 넓이를 맞춘다.',
}));

// ───────────────────────────── 8차시 (core · representation) ─────────────────────────────
L.push(lesson(8, {
  std: S10,
  title: '네 변의 길이가 모두 같은 마름모 찾고 만들기',
  objective: '네 변의 길이가 모두 같은 사각형을 마름모라고 하며, 마름모가 평행사변형이기도 함을 알고 점판에서 만들고 도형 카드에서 가려낼 수 있다.',
  desc: 'a paper diamond shaped kite hanging on a string above a grassy paper hill with a small child pointing at it',
  text: '네 변이 모두 같아요',
  layers: [{ motif: 'house', x: 110, y: 216, s: 0.8 }, { motif: 'tree', x: 400, y: 216, s: 0.8 }, { motif: 'flower', x: 250, y: 238 }],
  intro: ['"네 변의 길이가 모두 같게 막대 네 개를 이어 볼까요? 어떤 모양이 될까요?" 칠판에 길이가 같은 네 막대로 직사각형이 아닌 기울어진 모양을 만들어 보인다. "네 변의 길이가 모두 같은 사각형을 마름모라고 해요. 마주 보는 두 쌍도 평행해서 마름모는 평행사변형이기도 해요." 정사각형은 마름모가 아니라고 말하는 학생이 있으면 네 변이 모두 같은지 따져 보게 한다.', '네 변의 길이가 모두 같은 사각형을 마름모라고 해요. 마름모에는 어떤 특징이 더 있을까요?'],
  demo: { tool: 'shapes', options: { mode: 'geoboard', size: 7 }, sequence: [{ pts: RHO1 }] },
  acts: [
    { id: 'a1', title: '활동 1. 점판에서 마름모 만들기', minutes: 9, tool: 'shapes',
      task: '점판에 마름모를 만들어요. 네 변의 길이가 모두 같고 마주 보는 변이 평행해야 해요.',
      teacher: '"마름모를 점판에 만들려면 네 변이 각각 가로로 몇 칸, 세로로 몇 칸 가는지 같아야 해요. 어떻게 점을 찍으면 될까요?" 마름모 한가운데를 중심으로 위·아래, 왼쪽·오른쪽에 점을 찍게 한다. 네 변의 길이가 같지 않은 평행사변형을 만든 학생에게는 변마다 몇 칸씩 가는지 세어 견주게 한다.',
      levels: GEO,
      items: [
        geo('네 변의 길이가 모두 같은 마름모를 만들어 보세요.', { shape: 'rhombus' }, 0.16),
        geo('직각이 없는 마름모를 만들어 보세요. 정사각형이 아닌 마름모예요.', { shape: 'rhombus', exact: true }, 0.22),
        geo('넓이가 4칸인 마름모를 만들어 보세요. 정사각형이 아닌 마름모예요.', { shape: 'rhombus', exact: true, area: 4 }, 0.28),
        geo('더 해 보기: 넓이가 6칸인 마름모를 만들어 보세요. 정사각형이 아닌 마름모예요.', { shape: 'rhombus', exact: true, area: 6 }, 0.32, true),
      ] },
    { id: 'a2', title: '활동 2. 마름모와 마름모가 아닌 도형 나누기', minutes: 9, tool: 'shapes',
      task: '도형 카드를 마름모와 마름모가 아닌 것으로 나누어요. 네 변의 길이가 모두 같으면 마름모예요.',
      teacher: '"정사각형도 네 변의 길이가 모두 같을까요? 그러면 마름모일까요?" 네 변이 모두 같으니 마름모라고 말하게 한다. 직사각형을 마름모로 고른 학생에게는 긴 변과 짧은 변의 길이를 견주게 하고, 연 모양은 네 변이 모두 같지 않다고 짚는다.',
      levels: CLS,
      items: [
        cls('도형 카드를 마름모와 마름모가 아닌 것으로 나누어 보세요.', [['rhombus', '가', 0], ['rectangle', '나', 1], ['parallelogram', '다', 1], ['square', '라', 0], [KITE_N, '마', 1], ['trapezoid', '바', 1]], ['마름모', '마름모가 아니에요'], 0.2),
        cls('이번에는 도형 카드를 마름모와 마름모가 아닌 것으로 나누어 보세요.', [[DIAMOND_N, '가', 0], ['pentagon', '나', 1], ['square', '다', 0], [GENQ, '라', 1], ['parallelogram', '마', 1], ['rhombus', '바', 0]], ['마름모', '마름모가 아니에요'], 0.24),
        cls('마지막으로 도형 카드를 마름모와 마름모가 아닌 것으로 나누어 보세요.', [['rhombus', '가', 0], ['trapezoid', '나', 1], [TALL_N, '다', 0], ['rectangle', '라', 1], ['square', '마', 0], ['obtuse-triangle', '바', 1]], ['마름모', '마름모가 아니에요'], 0.28),
      ] },
    { id: 'a3', title: '활동 3. 사각형의 설명과 이름 짝짓기', minutes: 8, tool: 'mindmap',
      task: '사각형을 설명한 말과 알맞은 이름을 이어요. 마름모의 특징도 살펴봐요.',
      teacher: '"네 변의 길이가 모두 같고 마주 보는 변이 평행한 사각형은 무엇이라고 했지요?" 마름모라고 말하게 한다. 마름모의 네 각이 모두 직각이어야 한다고 생각하는 학생에게는 점판에서 직각이 없는 마름모를 만들었던 것을 떠올리게 한다.',
      levels: CARD,
      items: [
        matchCards('사각형을 설명한 말과 알맞은 이름을 이어 보세요.', '사각형의 이름', [['네 각이 모두 직각인 사각형', '직사각형'], ['네 변의 길이가 모두 같고 마주 보는 변이 평행한 사각형', '마름모'], ['평행한 변이 한 쌍이라도 있는 사각형', '사다리꼴']], ['오각형'], 0.2),
        matchCards('이번에도 설명과 이름을 이어 보세요.', '사각형의 이름', [['마주 보는 두 쌍의 변이 평행한 사각형', '평행사변형'], ['네 변의 길이가 모두 같고 네 각이 모두 직각인 사각형', '정사각형'], ['네 변의 길이가 모두 같은 평행사변형', '마름모']], ['사다리꼴'], 0.24),
        matchCards('마름모의 특징을 이어 보세요.', '마름모', [['마름모의 네 변은', '길이가 모두 같아요'], ['마름모의 마주 보는 두 변은', '서로 평행해요'], ['마름모의 네 각은', '모두 직각이 아닐 수도 있어요']], ['길이가 모두 달라요'], 0.28),
      ] },
  ],
  wrap: ['"마름모는 어떤 사각형인가요? 정사각형도 마름모일까요?" 네 변의 길이가 모두 같다는 말과 정사각형도 포함된다는 말이 나오는지 듣는다. 출구 1번에서 직사각형을 고른 학생은 마주 보는 변이 같은 것과 네 변이 모두 같은 것을 섞는지 다음 시간에 먼저 살핀다.', [
    { type: 'choice', prompt: '네 변의 길이가 모두 같고 마주 보는 두 쌍이 평행한 사각형은 무엇인가요?', options: ['마름모', '사다리꼴', '직사각형'], answer: 0, difficulty: 0.14, explain: '네 변의 길이가 모두 같은 사각형은 마름모예요.' },
    { type: 'tool', tool: 'shapes', options: { mode: 'geoboard', size: 7 }, prompt: '넓이가 12칸인 마름모를 만들어 보세요. 정사각형이 아닌 마름모예요.', target: { shape: 'rhombus', exact: true, area: 12 }, difficulty: 0.3 },
    { type: 'short', prompt: '정사각형이 마름모이기도 한 까닭을 써 보세요.', answer: '정사각형은 네 변의 길이가 모두 같고 마주 보는 변이 평행해서 마름모의 조건을 만족하기 때문이다.', difficulty: 0.26 },
  ]],
  ws: {
    title: '마름모 알아보기',
    items: [
      { type: 'figure', prompt: '마름모이면 ○ 하세요. 네 변의 길이가 모두 같아야 해요.', tool: 'shapes', wide: true, answer: '가 ○, 나 ×, 다 ○', figures: [
        { options: { mode: 'geoboard', size: 7, showCounts: false }, state: { pts: RHO1 }, caption: '가' }, { options: { mode: 'geoboard', size: 7, showCounts: false }, state: { pts: PAR2 }, caption: '나' }, { options: { mode: 'geoboard', size: 7, showCounts: false }, state: { pts: R(1, 1, 3, 3) }, caption: '다' }] },
      { type: 'table', prompt: '도형이 마름모이면 ○, 아니면 ×를 쓰세요.', columns: ['도형', '정사각형', '직사각형', '평행사변형', '연 모양'], cells: [['마름모', '', '', '', '']], answer: '정사각형 ○, 직사각형 ×(네 변이 같을 때만 ○), 평행사변형 ×(네 변이 같을 때만 ○), 연 모양 ×' },
      { type: 'choice', prompt: '마름모에 대해 바르게 말한 것에 ○ 하세요.', options: ['네 변의 길이가 모두 같아요', '네 각이 모두 직각이에요', '평행한 변이 한 쌍뿐이에요'], answer: '네 변의 길이가 모두 같아요' },
      { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '네 변의 길이가 모두 같은 사각형을 ______이라고 해요.', answer: '마름모' },
      { type: 'short', prompt: '직사각형이 항상 마름모가 아닌 까닭을 써 보세요.', answer: '직사각형은 긴 변과 짧은 변의 길이가 다를 수 있어서 네 변의 길이가 모두 같지 않기 때문이다.' },
    ],
    easy: {
      note: '마름모는 네 변의 길이가 모두 같은 사각형이에요. 변마다 점판 칸이 몇 칸인지 세어 보세요.',
      items: [
        { type: 'figure', prompt: '마름모이면 ○ 하세요.', tool: 'shapes', wide: true, figures: [{ options: { mode: 'geoboard', size: 7, showCounts: false }, state: { pts: RHO1 }, caption: '가' }, { options: { mode: 'geoboard', size: 7, showCounts: false }, state: { pts: R(1, 1, 4, 2) }, caption: '나' }], answer: '가 ○, 나 ×' },
        { type: 'table', prompt: '마름모의 네 변의 길이는 어떤가요?', columns: ['도형', '네 변의 길이'], cells: [['마름모', '']], answer: '모두 같아요' },
        { type: 'choice', prompt: '마름모는 변의 길이가 어떤가요? ○ 하세요.', options: ['모두 같아요', '모두 달라요'], answer: '모두 같아요' },
        { type: 'draw', prompt: '네 변의 길이가 모두 같은 마름모를 점판에 그려 보세요.' },
      ],
    },
  },
  diff: {
    easy: '점판에 직각 표시가 보이고 도형 카드를 놓으면 바로 맞는지 알려 줘요.',
    base: '직각 표시 없이 네 변의 길이를 점판 칸으로 세어 마름모를 만들어요.',
    challenge: '꼭짓점·변 수 표시 없이 넓이 조건이 붙은 마름모를 만들고 정사각형이 아닌 것만 골라요.',
  },
  notes: '자주 보이는 어려움: ① 마름모는 직각이 없어야 한다고 생각한다(정사각형을 제외) → 네 변이 모두 같으면 정사각형도 마름모. ② 직사각형을 마름모로 고른다 → 이웃한 두 변의 길이를 견주기. ③ 연 모양을 마름모로 고른다 → 네 변이 모두 같은지 칸 수로 확인. 마름모의 대각선 성질은 5학년 이후에 다루므로 이번 차시에서는 변의 길이에 집중한다.',
}));

// ───────────────────────────── 9차시 (practice · representation) ─────────────────────────────
L.push(lesson(9, {
  std: S10,
  title: '직사각형과 정사각형은 무엇이 같고 무엇이 다를까',
  objective: '네 각이 모두 직각인 사각형을 직사각형이라고 하고 네 변의 길이도 모두 같으면 정사각형임을 알며, 정사각형이 직사각형이기도 한 까닭을 설명할 수 있다.',
  desc: 'a square paper napkin and a rectangular paper book lying side by side on a kitchen table with small paper set squares fitted in their corners',
  text: '정사각형은 직사각형일까?',
  layers: [{ motif: 'house', x: 120, y: 216, s: 0.8 }, { motif: 'tree', x: 380, y: 216, s: 0.8 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"공책과 색종이의 모서리에 삼각자를 대 보세요. 모두 어떤 각일까요?" 두 물건의 네 모서리가 모두 직각임을 확인하게 한다. "네 각이 모두 직각인 사각형을 직사각형이라고 해요. 색종이처럼 네 변의 길이도 모두 같으면 정사각형이에요." "정사각형도 네 각이 모두 직각이니까 직사각형이라고 해도 될까요?"라고 물어 오개념(정사각형은 직사각형이 아니다)을 먼저 끌어낸다.', '공책과 색종이의 모서리에 삼각자를 대어 보세요. 두 물건의 각은 어떻게 같고, 변은 어떻게 다를까요?'],
  demo: { tool: 'shapes', options: { mode: 'geoboard', size: 7, showRight: true }, sequence: [{ pts: R(1, 1, 4, 2) }, { pts: R(1, 1, 3, 3) }] },
  acts: [
    { id: 'a1', title: '활동 1. 점판에서 직사각형과 정사각형 만들기', minutes: 9, tool: 'shapes',
      task: '점판에 직사각형과 정사각형을 만들어요. 네 각이 모두 직각이어야 하고 정사각형은 네 변의 길이도 모두 같아요.',
      teacher: '"직사각형을 만들 때 마주 보는 변은 몇 칸씩이어야 할까요? 정사각형은 가로와 세로가 어떻게 되어야 할까요?" 가로 칸 수와 세로 칸 수를 먼저 정하게 한다. 직사각형을 만들라고 했는데 정사각형을 만든 학생에게는 정사각형도 직사각형이기는 하지만 이번에는 네 변이 모두 같지 않은 직사각형을 만들어 보자고 말한다.',
      levels: GEO,
      items: [
        geo('네 각이 모두 직각이고 네 변의 길이가 모두 같지는 않은 직사각형을 만들어 보세요.', { shape: 'rectangle', exact: true }, 0.14),
        geo('네 각이 모두 직각이고 네 변의 길이가 모두 같은 정사각형을 만들어 보세요.', { shape: 'square', exact: true }, 0.16),
        geo('넓이가 6칸인 직사각형을 만들어 보세요. 네 변의 길이가 모두 같지는 않아요.', { shape: 'rectangle', exact: true, area: 6 }, 0.22),
        geo('더 해 보기: 넓이가 9칸인 정사각형을 만들어 보세요.', { shape: 'square', exact: true, area: 9 }, 0.26, true),
      ] },
    { id: 'a2', title: '활동 2. 직사각형과 정사각형 비교하기', minutes: 9, tool: 'mindmap',
      task: '직사각형과 정사각형을 비교한 말 가운데 바르게 말한 카드를 모두 골라요.',
      teacher: '"정사각형은 네 각이 모두 직각이니까 직사각형일까요, 아닐까요?" 직각이 네 개라는 조건을 만족하므로 직사각형이라고 말하게 한다. "직사각형은 모두 정사각형일까요?" 긴 변과 짧은 변이 다른 직사각형을 보이며 아니라고 짚는다.',
      levels: CARD,
      items: [
        pk('정사각형이 직사각형이기도 한 까닭을 바르게 말한 카드를 모두 골라 보세요.', '직사각형과 정사각형', [['직사각형은 네 각이 모두 직각인 사각형이에요', true], ['정사각형도 네 각이 모두 직각이에요', true], ['정사각형은 직사각형이 아니에요', false, '네 각이 모두 직각이라서 직사각형이기도 해요.'], ['정사각형은 네 변의 길이도 모두 같아요', true]], 0.2),
        pk('직사각형과 정사각형을 비교한 말 가운데 바르게 말한 카드를 모두 골라 보세요.', '직사각형과 정사각형', [['마주 보는 두 변의 길이가 같은 것은 둘 다 같아요', true], ['네 변의 길이가 모두 같은 것은 직사각형이에요', false, '직사각형은 네 변이 모두 같지 않아도 돼요.'], ['직사각형에서 네 변의 길이가 모두 같으면 정사각형이에요', true], ['정사각형은 마름모이기도 해요', true]], 0.24),
        pk('준호는 "직사각형은 모두 정사각형이다"라고 했어요. 바르게 말한 카드를 모두 골라 보세요.', '직사각형과 정사각형', [['긴 변과 짧은 변이 다른 직사각형은 정사각형이 아니에요', true], ['정사각형은 직사각형이지만 직사각형이 모두 정사각형은 아니에요', true], ['직사각형은 항상 네 변의 길이가 같아요', false, '네 변이 모두 같을 때만 정사각형이에요.']], 0.26),
        pk('더 해 보기: 정사각형에 대해 바르게 말한 카드를 모두 골라 보세요.', '직사각형과 정사각형', [['직사각형이면서 마름모예요', true], ['평행사변형이면서 사다리꼴이기도 해요', true], ['네 각이 모두 직각이라서 평행한 변이 한 쌍도 없어요', false, '마주 보는 변이 평행해서 평행한 변이 두 쌍 있어요.'], ['네 변의 길이가 모두 같아요', true]], 0.3, true),
      ] },
    { id: 'a3', title: '활동 3. 점판 도형의 가장 알맞은 이름 고르기', minutes: 8, tool: 'shapes',
      task: '점판 도형을 보고 가장 알맞은 이름을 골라요. 기울어져 있어도 변의 길이와 각을 따져 봐요.',
      teacher: '"기울어져 놓인 이 도형도 정사각형일까요? 어떻게 알 수 있어요?" 네 변의 길이가 같고 네 각이 직각인지 점판 칸으로 따져 보게 한다. 기울어진 정사각형을 마름모로 고른 학생에게는 직각 표시를 켜 보게 하고 마름모이기도 하지만 가장 알맞은 이름은 정사각형이라고 짚는다.',
      levels: GER,
      items: [
        geoRead('가로가 세로보다 긴 점판 도형의 가장 알맞은 이름을 골라 보세요.', R(1, 1, 4, 2), '가장 알맞은 이름은?', ['정사각형', '직사각형', '마름모'], 1, 0.16),
        geoRead('이번 점판 도형의 가장 알맞은 이름을 골라 보세요.', R(1, 1, 3, 3), '가장 알맞은 이름은?', ['직사각형', '정사각형', '평행사변형'], 1, 0.2),
        geoRead('기울어져 놓인 점판 도형의 가장 알맞은 이름을 골라 보세요.', SQT, '가장 알맞은 이름은?', ['마름모', '정사각형', '평행사변형'], 1, 0.28),
        geoRead('더 해 보기: 이 직사각형은 네 변의 길이가 모두 같은지 골라 보세요.', R(0, 1, 5, 2), '네 변의 길이가 모두 같나요?', ['같아요', '같지 않아요'], 1, 0.22, true),
      ] },
  ],
  wrap: ['"정사각형은 직사각형이라고 할 수 있을까요? 까닭을 말해 볼까요?" 네 각이 모두 직각이라는 조건을 만족한다는 말이 나오는지 듣는다. 출구 2번에서 직사각형이 아니라고 답한 학생은 네 변이 같으면 직사각형이 될 수 없다고 생각하는지 다음 시간에 먼저 살핀다.', [
    { type: 'tool', tool: 'shapes', options: { mode: 'geoboard', size: 7 }, prompt: '넓이가 4칸인 정사각형을 만들어 보세요.', target: { shape: 'square', exact: true, area: 4 }, difficulty: 0.18 },
    { type: 'choice', prompt: '정사각형은 직사각형이기도 할까요?', options: ['아니요, 직사각형이 아니에요', '네, 네 각이 모두 직각이라서요', '알 수 없어요'], answer: 1, difficulty: 0.22, explain: '직사각형은 네 각이 모두 직각인 사각형이고 정사각형도 그래서 직사각형이기도 해요.' },
    { type: 'short', prompt: '직사각형이 모두 정사각형이 아닌 까닭을 써 보세요.', answer: '직사각형은 네 각이 직각이기만 하면 되고 네 변의 길이가 모두 같지 않아도 되기 때문이다.', difficulty: 0.24 },
  ]],
  ws: {
    title: '직사각형과 정사각형',
    items: [
      { type: 'figure', prompt: '직사각형이면 ○, 정사각형이면 □ 하세요. 둘 다이면 ○와 □를 모두 하세요.', tool: 'shapes', wide: true, answer: '가 ○, 나 ○ □, 다 ×', figures: [
        { options: { mode: 'geoboard', size: 7, showCounts: false }, state: { pts: R(1, 1, 4, 2) }, caption: '가' }, { options: { mode: 'geoboard', size: 7, showCounts: false }, state: { pts: R(1, 1, 3, 3) }, caption: '나' }, { options: { mode: 'geoboard', size: 7, showCounts: false }, state: { pts: PAR2 }, caption: '다' }] },
      { type: 'table', prompt: '도형에 알맞은 이름에 ○ 하세요.', columns: ['도형', '직사각형', '정사각형', '마름모'], cells: [['네 각이 모두 직각, 네 변의 길이가 모두 같음', '', '', ''], ['네 각이 모두 직각, 마주 보는 변만 길이가 같음', '', '', '']], answer: '첫째 줄: 모두 ○, 둘째 줄: 직사각형만 ○' },
      { type: 'choice', prompt: '정사각형에 대해 바르게 말한 것에 ○ 하세요.', options: ['직사각형이 아니에요', '직사각형이기도 해요', '직각이 두 개예요'], answer: '직사각형이기도 해요' },
      { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '네 각이 모두 직각이고 네 변의 길이도 모두 같은 사각형을 ______이라고 해요.', answer: '정사각형' },
      { type: 'short', prompt: '직사각형과 정사각형의 같은 점과 다른 점을 한 가지씩 써 보세요.', answer: '같은 점: 네 각이 모두 직각이다. 다른 점: 정사각형은 네 변의 길이가 모두 같지만 직사각형은 같지 않을 수 있다.' },
    ],
    easy: {
      note: '네 각이 모두 직각이면 직사각형이에요. 네 변의 길이도 모두 같으면 정사각형이에요.',
      items: [
        { type: 'figure', prompt: '직사각형이면 ○ 하세요.', tool: 'shapes', wide: true, figures: [{ options: { mode: 'geoboard', size: 7, showCounts: false }, state: { pts: R(1, 1, 4, 2) }, caption: '가' }, { options: { mode: 'geoboard', size: 7, showCounts: false }, state: { pts: KITE }, caption: '나' }], answer: '가 ○, 나 ×' },
        { type: 'table', prompt: '알맞은 이름에 ○ 하세요.', columns: ['도형', '직사각형', '정사각형'], cells: [['네 각이 직각, 네 변의 길이가 모두 같음', '', '']], answer: '직사각형 ○, 정사각형 ○' },
        { type: 'choice', prompt: '정사각형은 직사각형인가요? ○ 하세요.', options: ['직사각형이기도 해요', '직사각형이 아니에요'], answer: '직사각형이기도 해요' },
        { type: 'draw', prompt: '삼각자로 직각을 확인하며 직사각형과 정사각형을 하나씩 그려 보세요.' },
      ],
    },
  },
  diff: {
    easy: '점판에 직각 표시가 보이고 만든 도형의 꼭짓점·변 수가 바로 보여요.',
    base: '직각 표시 없이 도형의 가로·세로 칸 수를 세어 직사각형과 정사각형을 만들어요.',
    challenge: '꼭짓점·변 수 표시 없이 넓이 조건이 붙은 도형을 만들고 기울어진 정사각형의 이름을 가려내요.',
  },
  notes: '자주 보이는 어려움: ① 정사각형은 직사각형이 아니라고 생각한다 → 직사각형의 조건(네 각이 직각)을 먼저 말하고 정사각형이 만족하는지 확인. ② 직사각형은 네 변이 모두 같아야 한다고 생각한다 → 마주 보는 변만 같다. ③ 기울어진 정사각형을 마름모로만 고른다 → 마름모이기도 하지만 가장 알맞은 이름은 정사각형. 사각형 사이의 관계는 다음 시간에 한꺼번에 정리한다.',
}));

// ───────────────────────────── 10차시 (wrap · application) ─────────────────────────────
L.push(lesson(10, {
  std: S10,
  title: '사각형 사이의 관계 정리하고 가장 알맞은 이름 붙이기',
  objective: '사다리꼴·평행사변형·마름모·직사각형·정사각형의 조건을 견주어 포함 관계를 말하고 도형에 가장 알맞은 이름을 붙일 수 있다.',
  desc: 'five paper shapes a trapezoid a parallelogram a rhombus a rectangle and a square nested like stacked paper cards on a classroom bulletin board with name tags',
  text: '사각형 이름표 붙이기',
  layers: [{ motif: 'house', x: 110, y: 216, s: 0.8 }, { motif: 'tree', x: 400, y: 216, s: 0.8 }, { motif: 'flower', x: 250, y: 238 }, { motif: 'star', x: 340, y: 52, s: 0.5 }],
  intro: ['"사다리꼴, 평행사변형, 마름모, 직사각형, 정사각형은 서로 어떤 관계일까요?" 칠판에 다섯 이름을 쓰고 조건 카드(평행한 변이 한 쌍 이상, 마주 보는 두 쌍 평행, 네 변이 같음, 네 각이 직각)를 하나씩 붙여 본다. "정사각형은 몇 개의 이름을 가질 수 있을까요?" 학생이 말한 것을 모아 적고 정사각형이 사다리꼴, 평행사변형, 마름모, 직사각형이기도 하다는 것을 이름 카드의 조건에 하나씩 대어 보게 한다.', '다섯 가지 사각형의 이름을 떠올려 봐요. 한 도형이 여러 이름을 가질 수 있을까요?'],
  acts: [
    { id: 'a1', title: '활동 1. 조건에 맞는 사각형 모두 고르기', minutes: 9, tool: 'mindmap',
      task: '조건을 읽고 그 조건에 맞는 사각형 이름을 모두 골라요. 한 도형이 여러 이름을 가질 수 있어요.',
      teacher: '"마주 보는 두 쌍의 변이 평행한 사각형은 어떤 이름들이 있을까요?" 평행사변형, 마름모, 직사각형, 정사각형이 모두 해당한다고 말하게 한다. 직사각형이라고만 답한 학생에게는 마름모와 정사각형도 같은 조건을 만족하는지 한 도형씩 확인하게 한다.',
      levels: CARD,
      items: [
        pk('마주 보는 두 쌍의 변이 평행한 사각형을 모두 골라 보세요.', '사각형의 조건', [['평행사변형', true], ['마름모', true], ['직사각형', true], ['정사각형', true], ['평행한 변이 한 쌍뿐인 사다리꼴', false, '평행한 변이 한 쌍뿐이라 마주 보는 두 쌍이 모두 평행하지는 않아요.']], 0.2),
        pk('네 변의 길이가 모두 같은 사각형을 모두 골라 보세요.', '사각형의 조건', [['마름모', true], ['정사각형', true], ['직사각형', false, '직사각형은 네 변의 길이가 모두 같지 않아도 돼요.'], ['평행사변형', false, '평행사변형은 마주 보는 변의 길이만 같으면 돼요.']], 0.24),
        pk('네 각이 모두 직각인 사각형을 모두 골라 보세요.', '사각형의 조건', [['직사각형', true], ['정사각형', true], ['마름모', false, '마름모는 직각이 아닐 수도 있어요.'], ['사다리꼴', false, '사다리꼴은 직각이 없을 수도 있어요.']], 0.24),
        pk('더 해 보기: 정사각형과 같은 이름으로 불릴 수 있는 사각형을 모두 골라 보세요.', '사각형의 조건', [['직사각형', true], ['마름모', true], ['평행사변형', true], ['사다리꼴', true], ['오각형', false, '오각형은 사각형이 아니에요.']], 0.3, true),
      ] },
    { id: 'a2', title: '활동 2. 도형에 가장 알맞은 이름 붙이기', minutes: 9, tool: 'shapes',
      task: '도형 카드를 가장 알맞은 이름 칸에 놓아요. 여러 이름이 가능하면 조건이 가장 많은 이름이에요.',
      teacher: '"이 도형은 사다리꼴이기도 하고 평행사변형이기도 해요. 가장 알맞은 이름은 무엇일까요?" 조건이 가장 많이 맞는 이름을 고르게 한다. 정사각형을 사다리꼴 칸에 놓은 학생에게는 정사각형이 사다리꼴이기도 하지만 더 알맞은 이름이 있다고 짚는다.',
      levels: CLS,
      items: [
        cls('도형 카드를 가장 알맞은 이름 칸에 놓아 보세요.', [['trapezoid', '가', 0], ['parallelogram', '나', 1], ['rhombus', '다', 2], ['rectangle', '라', 3], ['square', '마', 4]], NAMES5, 0.22),
        cls('이번에는 모양을 바꾼 카드를 가장 알맞은 이름 칸에 놓아 보세요.', [[RTRAP_N, '가', 0], [PARA_N, '나', 1], [TALL_N, '다', 2], [RECT_N, '라', 3], [SQ_N, '마', 4]], NAMES5, 0.26),
        cls('마지막으로 도형 카드를 가장 알맞은 이름 칸에 놓아 보세요.', [['rectangle', '가', 3], ['square', '나', 4], ['rhombus', '다', 2], ['parallelogram', '라', 1], ['trapezoid', '마', 0], [DIAMOND_N, '바', 2]], NAMES5, 0.3),
      ] },
    { id: 'a3', title: '활동 3. 맞는 말과 틀린 말 나누기', minutes: 8, tool: 'mindmap',
      task: '사각형의 관계에 대한 말을 읽고 맞는 말과 틀린 말로 나누어요.',
      teacher: '"마름모는 직사각형이라고 할 수 있을까요?" 마름모는 직각이 없을 수도 있어서 모두가 직사각형은 아니라고 말하게 한다. 틀린 말을 골랐다면 어느 낱말이 잘못인지 짚어 맞는 말로 고쳐 말하게 한다. 정사각형은 어느 말이든 맞는 쪽으로 오는지도 살핀다.',
      levels: CARD,
      items: [
        sortCards('사각형의 관계에 대한 말을 맞는 말과 틀린 말로 나누어 보세요.', '사각형의 관계', ['맞는 말', '틀린 말'], [['정사각형은 직사각형이기도 해요', '맞는 말'], ['마름모는 직사각형이에요', '틀린 말'], ['평행사변형은 사다리꼴이기도 해요', '맞는 말'], ['사다리꼴은 모두 평행사변형이에요', '틀린 말']], 0.24),
        sortCards('이번에도 맞는 말과 틀린 말로 나누어 보세요.', '사각형의 관계', ['맞는 말', '틀린 말'], [['직사각형은 평행사변형이에요', '맞는 말'], ['정사각형은 마름모이기도 해요', '맞는 말'], ['마름모는 평행한 변이 한 쌍뿐이에요', '틀린 말'], ['직사각형의 네 변은 항상 길이가 같아요', '틀린 말']], 0.26),
        sortCards('마지막으로 맞는 말과 틀린 말로 나누어 보세요.', '사각형의 관계', ['맞는 말', '틀린 말'], [['네 변의 길이가 같은 사각형은 모두 정사각형이에요', '틀린 말'], ['네 각이 모두 직각이고 네 변의 길이가 같으면 정사각형이에요', '맞는 말'], ['평행사변형은 마주 보는 두 쌍의 변이 평행해요', '맞는 말'], ['사다리꼴은 마주 보는 두 쌍이 모두 평행해야 해요', '틀린 말']], 0.3),
      ] },
  ],
  wrap: ['"오늘 정리한 것 가운데 정사각형은 몇 가지 이름으로 부를 수 있을까요?" 사다리꼴·평행사변형·마름모·직사각형·정사각형이라는 말이 나오는지 듣는다. 출구 2번에서 마름모를 고르지 못한 학생은 직각이 없는 마름모만 마름모라고 생각하는지 단원 정리 뒤에 짚는다.', [
    { type: 'choice', prompt: '정사각형과 같은 이름으로 불릴 수 있는 것에 모두 해당하는 줄은 무엇인가요?', options: ['직사각형, 마름모, 평행사변형', '직사각형, 오각형', '사다리꼴만'], answer: 0, difficulty: 0.26, explain: '정사각형은 직사각형, 마름모, 평행사변형, 사다리꼴이기도 해요.' },
    { type: 'choice', prompt: '네 변의 길이가 모두 같은 사각형에 해당하는 이름은 무엇인가요?', options: ['직사각형', '마름모', '사다리꼴만'], answer: 1, difficulty: 0.22, explain: '네 변의 길이가 모두 같은 사각형은 마름모예요.' },
    { type: 'short', prompt: '평행사변형이 사다리꼴이기도 한 까닭을 써 보세요.', answer: '평행사변형은 평행한 변이 두 쌍이라 한 쌍이라도 있다는 사다리꼴의 조건을 만족하기 때문이다.', difficulty: 0.26 },
  ]],
  ws: {
    title: '사각형 사이의 관계',
    items: [
      { type: 'table', prompt: '조건에 맞는 사각형에 ○ 하세요.', columns: ['조건', '사다리꼴', '평행사변형', '마름모', '직사각형', '정사각형'], cells: [['평행 한 쌍 이상', '', '', '', '', ''], ['네 변이 같음', '', '', '', '', ''], ['네 각이 직각', '', '', '', '', '']], answer: '평행: 모두 ○, 네 변 같음: 마름모·정사각형, 네 각 직각: 직사각형·정사각형' },
      { type: 'figure', prompt: '도형에 가장 알맞은 이름을 쓰세요.', tool: 'shapes', wide: true, answer: '가: 평행사변형, 나: 정사각형', figures: [
        { options: { mode: 'geoboard', size: 7, showCounts: false }, state: { pts: PAR1 }, caption: '가 ___' }, { options: { mode: 'geoboard', size: 7, showCounts: false }, state: { pts: SQT }, caption: '나 ___' }] },
      { type: 'choice', prompt: '바르게 말한 것에 ○ 하세요.', options: ['정사각형은 마름모이기도 해요', '직사각형은 마름모예요', '사다리꼴은 모두 평행사변형이에요'], answer: '정사각형은 마름모이기도 해요' },
      { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '평행사변형은 ______이기도 하고, 정사각형은 ______이기도 해요.', answer: '사다리꼴, 직사각형(마름모)' },
      { type: 'short', prompt: '사각형 하나를 골라 조건을 써 보세요.', answer: '예: 마름모는 네 변의 길이가 모두 같고 마주 보는 변이 평행한 사각형이다.' },
    ],
    easy: {
      note: '정사각형은 직사각형, 마름모, 평행사변형, 사다리꼴이기도 해요. 조건이 가장 많이 맞는 이름이 가장 알맞은 이름이에요.',
      items: [
        { type: 'table', prompt: '조건에 맞는 사각형에 ○ 하세요.', columns: ['사각형', '직사각형', '정사각형'], cells: [['네 각이 모두 직각임', '', '']], answer: '직사각형 ○, 정사각형 ○' },
        { type: 'figure', prompt: '도형에 가장 알맞은 이름을 쓰세요.', tool: 'shapes', wide: true, figures: [{ options: { mode: 'geoboard', size: 7, showCounts: false }, state: { pts: R(1, 1, 3, 3) }, caption: '___' }], answer: '정사각형' },
        { type: 'choice', prompt: '정사각형은 직사각형이기도 한가요? ○ 하세요.', options: ['직사각형이기도 해요', '직사각형이 아니에요'], answer: '직사각형이기도 해요' },
        { type: 'draw', prompt: '사다리꼴, 평행사변형, 직사각형 가운데 하나를 골라 그리고 그 조건을 한 가지 써 보세요.' },
      ],
    },
  },
  diff: {
    easy: '카드를 놓자마자 맞는지 표시가 나고 점판에 직각 표시가 보여요.',
    base: '카드를 모두 놓은 뒤 확인을 눌러 맞았는지 알아보아요.',
    challenge: '모양이 기울어진 카드와 이름이 여러 개인 카드를 섞어 가장 알맞은 이름을 가려내고, 틀린 말의 낱말을 찾아 고쳐요.',
  },
  notes: '자주 보이는 어려움: ① 정사각형을 직사각형·마름모와 다른 도형으로만 생각한다 → 조건 카드로 하나씩 확인. ② 마름모는 직사각형이라고 한다 → 마름모는 직각이 없을 수도 있다. ③ 사다리꼴은 평행한 변이 한 쌍뿐이라고 생각한다 → 한 쌍이라도 있으면 사다리꼴. 이 단원에서 헷갈린 포함 관계를 학생이 스스로 한 줄로 쓰게 하고 다음 도형 단원의 시작에서 다시 살핀다.',
}));

PaperLessons.registerUnit({
  id: UID, schema: 'edu-unit.v1', catalogUnit: CU, grade: 4, subject: '수학', unitTitle: UT,
  flow: '1~2차시는 3학년 직각을 바탕으로 두 직선이 직각으로 만나는 수직을 삼각자로 확인하고, 한 직선에 수직인 직선(수선)을 찾고 긋는 방법을 익힙니다. 3~5차시는 서로 만나지 않는 평행선을 알아보고, 평행선 사이의 거리를 수직으로 재며, 점판 도형과 교실에서 수직과 평행을 세어 봅니다. 6~7차시는 평행으로 정의되는 사다리꼴과 평행사변형을 점판에서 만들고 카드를 가려내며, 평행한 변이 한 쌍이라도 있으면 사다리꼴이고 마주 보는 두 쌍이 평행하면 평행사변형임을 확인합니다. 8~9차시는 네 변의 길이가 같은 마름모와 네 각이 모두 직각인 직사각형·정사각형을 만들고 비교하며, 정사각형이 직사각형·마름모이기도 함을 짚습니다. 10차시는 다섯 사각형의 조건과 포함 관계를 모아 도형에 가장 알맞은 이름을 붙이고 맞는 말·틀린 말로 점검합니다. 수직과 평행을 먼저 가르쳐야 사각형의 이름이 평행으로 풀리므로 plan 의 차시 번호와 역할은 두고 내용 순서를 이렇게 잡았습니다.',
  lessons: L,
});
})();
