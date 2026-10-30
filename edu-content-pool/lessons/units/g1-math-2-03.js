/* 1학년 2학기 3. 모양과 시각 — 단원 파일(차시 12개).
 * 흐름: 주변 물건을 삼각형·사각형·원으로 나누기(1) → 기울어도 같은 모양, 곧은 선 세기(2) → 칠교로 꾸미고 모양이 달라도 사각형임 알기(3)
 *      → 짧은바늘·긴바늘과 정각 읽기(4) → 정각 읽고 만들기, 하루 일과 순서(5) → 몇 시 30분 읽고 만들기(6) → 정각·30분 섞어 읽기와 숫자 시계(7)
 *      → 짧은바늘 자리 살피며 몇 시 30분 읽기(8) → 모양의 특징 말하기(9) → 크기·방향이 달라도 같은 모양(10)
 *      → 모양으로 그림 꾸미기(11) → 단원 정리: 모양과 시각(12).
 * 시각은 '몇 시', '몇 시 30분'까지만 다룬다(몇 시 몇 분은 2학년).
 */
(function () {
const UID = 'g1-math-2-03', CU = 'g1-수학-2학기-3', UT = '3. 모양과 시각';
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
// 수업 하나의 공통 겉옷: 도입 7분 + 전개 26분 + 정리 7분 = 40분
const lesson = (n, d) => ({
  id: `${UID}-${two(n)}`, schema: 'edu-lesson.v1', catalog: { unit: CU, lesson: n },
  grade: 1, subject: '수학', unitTitle: UT,
  title: d.title, objective: d.objective, standards: d.std, minutes: 40, formats: ['chromebook', 'projector', 'print'],
  illustration: ill(d.desc, d.text, d.layers),
  stages: [
    Object.assign({ id: 'intro', title: '도입', minutes: 7, teacher: d.intro[0], student: d.intro[1] }, d.demo ? { demo: d.demo } : {}),
    { id: 'main', title: '전개', minutes: 26, activities: d.acts },
    { id: 'wrapup', title: '정리', minutes: 7, teacher: d.wrap[0], exitTicket: [...d.wrap[1], { type: 'mood', prompt: '오늘 공부는 어땠나요?' }] },
  ],
  worksheet: d.ws, differentiation: d.diff, teacherNotes: d.notes,
});
// 카드 판 단계
const CARD = { easy: { live: true, instant: true }, base: {}, challenge: {} };
const SH = ['[2수03-03]'], CK = ['[2수03-07]'];
const BINS = ['삼각형', '사각형', '원'];
// 도형 카드 분류: cards = [[모양, 이름, 칸 번호, 기울기?], ...]
const cls = (prompt, cards, bins, d, extra) => { const ids = 'abcdefgh'; const cs = cards.map((c, i) => Object.assign({ id: ids[i], shape: c[0], label: c[1] }, c[3] ? { rot: c[3] } : {}));
  return { prompt, toolOptions: { cards: cs, bins }, target: { bins: Object.fromEntries(cards.map((c, i) => [ids[i], c[2]])) }, difficulty: d, ...(extra ? { extra: true } : {}) }; };
// 점판 만들기 / 점판 보고 고르기 / 칠교 채우기
const geo = (prompt, target, d, extra) => ({ prompt, target, difficulty: d, ...(extra ? { extra: true } : {}) });
const geoRead = (prompt, pts, q, choices, pick, d) => ({ prompt, state: { pts }, toolOptions: { readOnly: true, ask: { q, choices } }, target: { pick }, difficulty: d });
const tang = (prompt, figure, d, extra) => ({ prompt, toolOptions: { figure }, target: { fit: true }, difficulty: d, ...(extra ? { extra: true } : {}) });
// 시계: 읽기(보기 고르기) / 만들기
const clkRead = (prompt, h, m, choices, pick, d) => ({ prompt, state: { h, m }, toolOptions: { readOnly: true, choices }, target: { pick, h, m }, difficulty: d });
const clkMake = (prompt, h, m, d, from) => ({ prompt, state: from || { h: 12, m: 0 }, target: { h, m }, difficulty: d });
const matchCards = (prompt, topic, pairs, spare, d, extra) => ({ prompt, toolOptions: { mode: 'match', topic, slots: pairs.map((p, i) => ({ id: `s${i + 1}`, label: p[0] })), cards: [...pairs.map((p) => p[1]), ...(spare || [])] },
  target: { match: Object.fromEntries(pairs.map((p, i) => [`s${i + 1}`, p[1]])) }, difficulty: d, ...(extra ? { extra: true } : {}) });
const sortCards = (prompt, topic, slots, cards, d, extra) => ({ prompt, toolOptions: { topic, slots, cards: cards.map((c) => c[0]) },
  target: { sort: Object.fromEntries(slots.map((s) => [s, cards.filter((c) => c[1] === s).map((c) => c[0])])) }, difficulty: d, ...(extra ? { extra: true } : {}) });
const orderCards = (prompt, topic, steps, d, extra) => ({ prompt, toolOptions: { mode: 'order', topic, cards: steps.map((s) => ({ id: s, text: s })) }, target: { order: steps }, difficulty: d, ...(extra ? { extra: true } : {}) });
const pair = (id, title, minutes, task, teacher, prompts, tool, levels) => ({ id, title, minutes, tool, pair: true, task, teacher, levels, items: prompts.map((prompt) => ({ prompt, free: true, difficulty: 0 })) });
const L = [];
const GEOL = { easy: { mode: 'geoboard', size: 4, showCounts: true }, base: { mode: 'geoboard', size: 5, showCounts: false }, challenge: { mode: 'geoboard', size: 6, showCounts: false } };
const GEORL = { easy: { mode: 'geoboard', size: 4, showCounts: false }, base: { mode: 'geoboard', size: 4, showCounts: false }, challenge: { mode: 'geoboard', size: 4, showCounts: false } };
const CLSL = { easy: { mode: 'classify' }, base: { mode: 'classify' }, challenge: { mode: 'classify' } };
const TANGL = { easy: { mode: 'tangram', lines: true }, base: { mode: 'tangram' }, challenge: { mode: 'tangram' } };
// 점판 4줄(좌표 0~3)에 그린 모양 — 읽기 문항용
const TRI1 = [[0, 3], [3, 3], [1, 0]]; const TRI2 = [[0, 0], [3, 1], [1, 3]]; const RECT1 = [[0, 1], [3, 1], [3, 3], [0, 3]]; const SQ1 = [[1, 0], [3, 0], [3, 2], [1, 2]];
const QUAD1 = [[1, 0], [3, 1], [2, 3], [0, 2]]; const PENT1 = [[1, 0], [3, 0], [3, 2], [2, 3], [0, 2]];
// ───────────────────────────── 1차시 (intro · shapes) ─────────────────────────────
L.push(lesson(1, {
  std: SH,
  title: '주변 물건을 삼각형, 사각형, 원으로 나누기',
  objective: '주변 물건의 모양을 보고 삼각형, 사각형, 원으로 나누고, 점판에서 삼각형과 사각형을 만들 수 있다.',
  desc: 'a classroom shelf full of paper cut-out objects shaped like triangles, rectangles, squares, and circles, with a smiling child pointing at a round clock',
  text: '무슨 모양일까요?',
  layers: [{ motif: 'house', x: 110, y: 216, s: 0.9 }, { motif: 'tree', x: 390, y: 216 }, { motif: 'star', x: 150, y: 90, s: 0.6 }, { motif: 'flower', x: 250, y: 238 }],
  intro: ['"교실 시계는 어떤 모양일까요? 칠판은요?" 시연 단추로 점판에 삼각형이 만들어지고 이어서 사각형이 만들어지는 모습을 보여 준다. 곧은 선으로 둘러싸인 모양과 둥근 모양을 손으로 그려 보게 한다. 삼각형과 사각형을 "세모", "네모"라고만 부르던 학생에게 삼각형, 사각형이라는 이름도 알려 준다.', '주변에서 삼각형, 사각형, 원을 찾아 나누어 봐요.'],
  demo: { tool: 'shapes', options: { mode: 'geoboard', size: 4 }, sequence: [{ pts: [[0, 3], [3, 3], [1, 0]] }, { pts: [[0, 1], [3, 1], [3, 3], [0, 3]] }] },
  acts: [
    { id: 'a1', title: '활동 1. 물건 모양을 세 가지로 나누기', minutes: 9, tool: 'shapes',
      task: '물건 카드를 눌러 삼각형, 사각형, 원 가운데 알맞은 칸에 넣어요.',
      teacher: '"곧은 선이 세 개로 둘러싸이면 삼각형, 네 개면 사각형, 둥글면 원이에요." 칸 이름 하나하나를 손으로 그려 보게 한다. 길쭉한 공책을 삼각형이라고 하는 학생에게는 곧은 선이 몇 개인지 하나씩 세게 한다.',
      levels: CLSL,
      items: [cls('물건 카드를 삼각형, 사각형, 원으로 나누어 보세요.', [['triangle', '삼각자', 0], ['rectangle', '공책', 1], ['circle', '동전', 2], ['square', '손수건', 1], ['circle', '접시', 2], ['right-triangle', '삼각 깃발', 0]], BINS, 0.08),
        cls('이번에도 물건 카드를 나누어 보세요.', [['circle', '시계', 2], ['rectangle', '칠판', 1], ['triangle', '표지판', 0], ['square', '창문', 1], ['circle', '단추', 2], ['rectangle', '문', 1]], BINS, 0.1),
        cls('마지막으로 물건 카드를 나누어 보세요.', [['square', '색종이', 1], ['triangle', '지붕', 0], ['circle', '바퀴', 2], ['rectangle', '책', 1], ['triangle', '모자', 0], ['circle', '쟁반', 2]], BINS, 0.12)] },
    { id: 'a2', title: '활동 2. 점판에 삼각형과 사각형 만들기', minutes: 10, tool: 'shapes',
      task: '점을 차례로 눌러 곧은 선으로 이어요. 점을 모두 이으면 모양이 돼요.',
      teacher: '"점을 세 개 이으면 어떤 모양이 될까요? 네 개 이으면요?" 점 개수와 곧은 선 개수가 같다고 짚는다. 두 점만 이어 놓고 모양이 되었다고 하는 학생에게는 선으로 둘러싸여야 모양이라고 알려 준다.',
      levels: GEOL,
      items: [geo('점을 세 개 이어 삼각형을 만들어 보세요.', { shape: 'triangle' }, 0.05), geo('점을 네 개 이어 사각형을 만들어 보세요.', { shape: 'quadrilateral' }, 0.1),
        geo('네 변의 길이가 모두 같은 사각형을 만들어 보세요.', { shape: 'square' }, 0.15), geo('길쭉한 사각형을 만들어 보세요.', { shape: 'rectangle' }, 0.12)] },
    pair('a3', '활동 3. 짝과 교실 물건 모양 찾기', 7, '짝이 말한 물건이 삼각형, 사각형, 원 중에 무엇인지 카드로 나누어 봐요.',
      '짝끼리 번갈아 교실에서 본 물건을 말하게 한다. "시계는 원이에요"처럼 말하면 짝이 카드를 알맞은 칸에 넣는다. 말한 물건이 두 가지 모양으로 보이면 곧은 선과 둥근 선을 짚으며 이야기를 나누게 한다.',
      ['교실에서 원 모양인 물건을 찾아 말하고 카드를 알맞은 칸에 넣은 뒤 "다 했어요"를 누르세요.', '사각형 모양인 물건을 찾아 말하고 카드를 알맞은 칸에 넣은 뒤 "다 했어요"를 누르세요.', '삼각형 모양인 물건을 찾아 말하고 카드를 알맞은 칸에 넣은 뒤 "다 했어요"를 누르세요.'], 'shapes',
      { easy: { mode: 'classify', cards: [{ id: 'a', shape: 'circle', label: '시계' }, { id: 'b', shape: 'square', label: '색종이' }, { id: 'c', shape: 'triangle', label: '삼각자' }], bins: BINS }, base: { mode: 'classify', cards: [{ id: 'a', shape: 'circle', label: '시계' }, { id: 'b', shape: 'rectangle', label: '칠판' }, { id: 'c', shape: 'triangle', label: '삼각자' }], bins: BINS }, challenge: { mode: 'classify', cards: [{ id: 'a', shape: 'circle', label: '접시' }, { id: 'b', shape: 'rectangle', label: '공책' }, { id: 'c', shape: 'right-triangle', label: '삼각 깃발' }], bins: BINS } }),
  ],
  wrap: ['"삼각형은 곧은 선이 몇 개예요? 원은 어떻게 생겼어요?" 짝에게 손가락으로 그려 보이며 말하게 한다. 출구 1번을 틀린 학생은 길쭉한 사각형을 다른 모양으로 헷갈린 것이므로 다음 시간에 곧은 선을 세어 보게 한다.', [
    { type: 'choice', prompt: '동전과 같은 모양은 무엇인가요?', options: ['삼각형', '사각형', '원'], answer: 2, difficulty: 0.05, explain: '동전은 둥글어요. 둥근 모양은 원이에요.' },
    { type: 'tool', tool: 'shapes', options: { mode: 'geoboard', size: 4 }, prompt: '점판에 곧은 선이 세 개인 삼각형을 하나 만들어 보세요.', target: { shape: 'triangle' }, difficulty: 0.08 },
    { type: 'choice', prompt: '곧은 선이 세 개로 둘러싸인 모양은 무엇인가요?', options: ['삼각형', '원'], answer: 0, difficulty: 0.05, explain: '곧은 선 세 개로 둘러싸인 모양이 삼각형이에요.' },
  ]],
  ws: { title: '삼각형, 사각형, 원', items: [
    { type: 'figure', prompt: '점판의 모양은 무엇인지 쓰세요.', tool: 'shapes', options: { mode: 'geoboard', size: 4, showCounts: false }, figures: [{ state: { pts: TRI1 }, caption: BLANK }, { state: { pts: RECT1 }, caption: BLANK }, { state: { pts: SQ1 }, caption: BLANK }], answer: '삼각형, 사각형, 사각형' },
    { type: 'table', prompt: '물건의 모양에 ○ 하세요.', columns: ['물건', '삼각형', '사각형', '원'], cells: [['삼각자', '', '', ''], ['동전', '', '', ''], ['공책', '', '', ''], ['접시', '', '', '']], answer: '삼각자-삼각형, 동전-원, 공책-사각형, 접시-원' },
    { type: 'choice', prompt: '둥근 모양에 ○ 하세요.', options: ['시계', '칠판', '삼각자'], answer: '시계' },
    { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '곧은 선 세 개로 둘러싸인 모양은 ______이에요.', answer: '삼각형' },
    { type: 'draw', prompt: '삼각형 하나와 원 하나를 그려 보세요.' },
  ], easy: { note: '곧은 선 세 개는 삼각형, 곧은 선 네 개는 사각형, 둥근 모양은 원이에요.', items: [
    { type: 'figure', prompt: '점판의 모양은 무엇인지 쓰세요.', tool: 'shapes', options: { mode: 'geoboard', size: 4, showCounts: false }, figures: [{ state: { pts: TRI1 }, caption: BLANK }, { state: { pts: RECT1 }, caption: BLANK }], answer: '삼각형, 사각형' },
    { type: 'choice', prompt: '둥근 모양에 ○ 하세요.', options: ['접시', '공책'], answer: '접시' },
    { type: 'choice', prompt: '삼각형에 ○ 하세요.', options: ['삼각자', '동전'], answer: '삼각자' },
    { type: 'draw', prompt: '원을 하나 그려 보세요.' },
  ] } },
  diff: { easy: '점판이 4줄이고 곧은 선과 꼭짓점의 수가 화면에 보여요. 물건 카드를 맞는 칸에 넣으면 바로 알려 줘요.', base: '점판이 5줄로 넓어지고 곧은 선 수 표시가 사라져요.', challenge: '점판이 6줄로 더 넓어지고 길쭉한 모양도 만들어요.' },
  notes: '자주 보이는 어려움: ① 길쭉한 직사각형을 사각형이 아니라고 한다 → 곧은 선이 네 개인지 센다. ② 모서리가 둥근 물건을 사각형으로 고른다 → 둥근 부분은 곧은 선이 아님을 짚는다. ③ 점 두 개만 이어 놓고 모양이 되었다고 한다 → 선으로 둘러싸여야 모양이다. 방향이 달라도 같은 모양임은 2차시에서 한다.',
}));
// ───────────────────────────── 2차시 (practice · shapes) ─────────────────────────────
L.push(lesson(2, {
  std: SH,
  title: '곧은 선을 세어 기울어진 모양 이름 알아맞히기',
  objective: '곧은 선과 뾰족한 곳의 수를 세어 모양을 알아보고, 기울여 놓아도 같은 모양임을 말할 수 있다.',
  desc: 'a paper kite shaped like a tilted square flying beside a triangle flag and a round balloon in a bright sky',
  text: '기울어도 같아요',
  layers: [{ motif: 'tree', x: 90, y: 216, s: 1.0 }, { motif: 'bird', x: 300, y: 84 }, { motif: 'flower', x: 400, y: 236 }, { motif: 'star', x: 150, y: 90, s: 0.6 }],
  intro: ['"연이 기울어져 날고 있어요. 이 연은 무슨 모양일까요?" 시연 단추로 점판의 삼각형이 만들어지고 다른 방향의 삼각형이 만들어지는 모습을 보여 준다. 기울어진 네모를 "마름모"나 "다른 모양"이라고 말하는 학생이 있는지 살피고, 곧은 선이 몇 개인지 세어 보게 한다.', '모양을 돌려도 곧은 선의 수는 그대로일까요? 세어 봐요.'],
  demo: { tool: 'shapes', options: { mode: 'geoboard', size: 4 }, sequence: [{ pts: [[0, 3], [3, 3], [1, 0]] }, { pts: [[0, 0], [3, 1], [1, 3]] }] },
  acts: [
    { id: 'a1', title: '활동 1. 점판 모양의 곧은 선 세기', minutes: 9, tool: 'shapes',
      task: '점판의 모양을 보고 곧은 선이 몇 개인지 골라요. 하나씩 짚으며 세어요.',
      teacher: '"곧은 선을 세는 곳에 손가락을 올려요. 한 번 센 선은 다시 세지 않아요." 처음 센 선에서 한 번 더 세어 한 개를 더 말하는 학생이 있다 — 연필로 센 선에 표시하게 한다.',
      levels: GEORL,
      items: [geoRead('점판의 모양은 곧은 선이 몇 개인가요?', TRI1, '곧은 선은 몇 개인가요?', ['3개', '4개', '5개'], 0, 0.08), geoRead('점판의 모양은 곧은 선이 몇 개인가요?', RECT1, '곧은 선은 몇 개인가요?', ['3개', '4개', '5개'], 1, 0.1),
        geoRead('기울어진 모양도 곧은 선을 세어 보세요.', TRI2, '곧은 선은 몇 개인가요?', ['3개', '4개', '5개'], 0, 0.15), geoRead('기울어진 모양도 곧은 선을 세어 보세요.', QUAD1, '곧은 선은 몇 개인가요?', ['3개', '4개', '5개'], 1, 0.18)] },
    { id: 'a2', title: '활동 2. 기울이고 뒤집어도 같은 모양 찾기', minutes: 10, tool: 'shapes',
      task: '카드를 삼각형, 사각형, 원으로 나누어요. 기울어진 카드도 곧은 선을 세어 봐요.',
      teacher: '"기울어진 정사각형은 곧은 선이 몇 개예요?" 방향이 바뀌어도 곧은 선의 수는 그대로라고 짚는다. 뒤집힌 삼각형을 삼각형이 아니라고 하는 학생에게는 종이를 돌려 보게 한다.',
      levels: CLSL,
      items: [cls('기울어진 카드를 삼각형, 사각형, 원으로 나누어 보세요.', [['square', '연', 1, 45], ['triangle', '깃발', 0, 180], ['circle', '풍선', 2], ['rectangle', '편지', 1, 30]], BINS, 0.15),
        cls('이번에도 기울어진 카드를 나누어 보세요.', [['triangle', '지붕', 0, 90], ['rectangle', '문', 1, 20], ['circle', '공', 2], ['square', '쿠션', 1, 60], ['right-triangle', '삼각 샌드위치', 0, 270]], BINS, 0.18),
        cls('마지막으로 기울어진 카드를 나누어 보세요.', [['rectangle', '쪽지', 1, 90], ['triangle', '모자', 0, 135], ['circle', '단추', 2], ['square', '색종이', 1, 15]], BINS, 0.2)] },
    { id: 'a3', title: '활동 3. 곧은 선 수에 맞는 모양 만들기', minutes: 7, tool: 'shapes',
      task: '곧은 선이 몇 개인지 정해 주면 점판에서 그 모양을 만들어요.',
      teacher: '"곧은 선이 네 개인 모양을 만들려면 점이 몇 개 필요해요?" 점의 수와 곧은 선의 수가 같다고 짚는다. 점을 하나 더 찍어 곧은 선이 다섯 개인 모양을 만드는 학생에게는 점 하나를 눌러 빼 보게 한다.',
      levels: GEOL,
      items: [geo('곧은 선이 세 개인 모양을 만들어 보세요.', { sides: 3 }, 0.1), geo('곧은 선이 네 개인 모양을 만들어 보세요.', { sides: 4 }, 0.12), geo('곧은 선이 네 개이고 네 각이 모두 직각인 모양을 만들어 보세요.', { shape: 'rectangle' }, 0.2)] },
  ],
  wrap: ['"모양을 돌리면 곧은 선의 수가 변할까요?" 종이 삼각형을 돌려 가며 말하게 한다. 출구 2번을 틀린 학생은 기울어진 모양을 보고 곧은 선을 세지 못한 것이므로 다음 시간에 점판에서 하나씩 짚으며 다시 세게 한다.', [
    { type: 'choice', prompt: '삼각형을 거꾸로 돌려 놓으면 모양이 어떻게 되나요?', options: ['그대로 삼각형이에요', '사각형이 돼요'], answer: 0, difficulty: 0.1, explain: '돌려도 곧은 선은 세 개 그대로예요. 삼각형이에요.' },
    { type: 'tool', tool: 'shapes', options: { mode: 'geoboard', size: 4, showCounts: false, readOnly: true, ask: { q: '곧은 선은 몇 개인가요?', choices: ['3개', '4개', '5개'] } }, state: { pts: SQ1 }, prompt: '그림의 모양은 곧은 선이 몇 개인지 골라 보세요.', target: { pick: 1 }, difficulty: 0.12 },
    { type: 'choice', prompt: '비스듬히 놓은 색종이는 무슨 모양인가요?', options: ['삼각형', '사각형', '원'], answer: 1, difficulty: 0.12, explain: '기울여 놓아도 곧은 선이 네 개라서 사각형이에요.' },
  ]],
  ws: { title: '곧은 선 세기', items: [
    { type: 'figure', prompt: '곧은 선이 몇 개인지 쓰세요.', tool: 'shapes', options: { mode: 'geoboard', size: 4, showCounts: false }, figures: [{ state: { pts: TRI2 }, caption: '___개' }, { state: { pts: QUAD1 }, caption: '___개' }, { state: { pts: SQ1 }, caption: '___개' }], answer: '3개, 4개, 4개' },
    { type: 'table', prompt: '모양의 이름을 쓰세요.', columns: ['곧은 선 수', '모양 이름'], cells: [['3개', ''], ['4개', ''], ['없어요(둥글어요)', '']], answer: '삼각형, 사각형, 원' },
    { type: 'choice', prompt: '삼각형을 돌려 놓아도 곧은 선은 몇 개인가요?', options: ['3개', '4개', '5개'], answer: '3개' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '사각형은 곧은 선이 ___ 개예요.', answer: '4' },
    { type: 'draw', prompt: '기울어진 사각형을 하나 그려 보세요.' },
  ], easy: { note: '곧은 선에 손가락을 올리고 하나씩 세어요. 돌려도 수는 그대로예요.', items: [
    { type: 'figure', prompt: '곧은 선이 몇 개인지 쓰세요.', tool: 'shapes', options: { mode: 'geoboard', size: 4, showCounts: false }, figures: [{ state: { pts: TRI1 }, caption: '___개' }, { state: { pts: RECT1 }, caption: '___개' }], answer: '3개, 4개' },
    { type: 'choice', prompt: '곧은 선이 네 개인 모양은 무엇인가요?', options: ['삼각형', '사각형'], answer: '사각형' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '삼각형은 곧은 선이 ___ 개예요.', answer: '3' },
    { type: 'draw', prompt: '삼각형을 하나 그려 보세요.' },
  ] } },
  diff: { easy: '점판이 4줄이고 기울어진 카드도 맞는 칸에 넣으면 바로 알려 줘요.', base: '곧은 선 수 표시 없이 스스로 세어 골라요.', challenge: '점판이 6줄로 넓어지고 곧은 선이 네 개인 모양의 방법이 여러 가지예요.' },
  notes: '자주 보이는 어려움: ① 기울어진 정사각형을 다른 모양이라고 한다 → 곧은 선이 네 개이면 사각형이다. ② 뒤집힌 삼각형을 삼각형이 아니라고 한다 → 종이를 돌려 같은 모양임을 보여 준다. ③ 곧은 선을 센 곳을 또 센다 → 센 선에 표시한다. 정사각형, 직사각형처럼 이름이 다른 사각형은 3차시에서 만난다.',
}));
// ───────────────────────────── 3차시 (extend · shapes) ─────────────────────────────
L.push(lesson(3, {
  std: SH,
  title: '칠교 조각으로 꾸미고 모양이 달라도 사각형 찾기',
  objective: '칠교 조각을 맞추어 삼각형과 사각형을 만들고, 모양이 조금 달라도 곧은 선이 네 개이면 사각형임을 말할 수 있다.',
  desc: 'a girl arranging colorful paper tangram pieces on a desk to make a bigger triangle and a bigger square',
  text: '조각을 맞춰요',
  layers: [{ motif: 'house', x: 100, y: 216, s: 0.9 }, { motif: 'tree', x: 400, y: 216 }, { motif: 'star', x: 150, y: 90, s: 0.6 }, { motif: 'star', x: 330, y: 84, s: 0.6 }],
  intro: ['"삼각형 조각 두 개를 붙이면 어떤 모양이 될까요?" 시연 단추로 작은 삼각형 두 개가 맞추어져 큰 삼각형이 되는 모습을 보여 준다. 조각을 돌리고 뒤집으며 맞추는 것을 말해 준다. 조각이 안 맞을 때 바로 포기하는 학생에게는 한 조각을 돌려 보게 한다.', '삼각형 조각을 맞추어 더 큰 모양을 만들어 봐요.'],
  demo: { tool: 'shapes', options: { mode: 'tangram', figure: 'triangle2', lines: true }, sequence: [{ fit: true }] },
  acts: [
    { id: 'a1', title: '활동 1. 조각 두 개로 큰 모양 만들기', minutes: 9, tool: 'shapes',
      task: '오른쪽 조각을 끌어 그림자 자리에 놓아요. 조각을 고른 뒤 R로 돌릴 수 있어요.',
      teacher: '"그림자 안에 작은 삼각형이 몇 개 들어갈까요?" 그림자와 조각의 곧은 선 수를 견주게 한다. 조각을 억지로 밀어 넣는 학생에게는 한 번 돌려 보게 한다.',
      levels: TANGL,
      items: [tang('작은 삼각형 두 개로 큰 삼각형 자리를 채워 보세요.', 'triangle2', 0.1), tang('작은 삼각형 두 개로 평행사변형 자리를 채워 보세요.', 'parallelogram2', 0.2),
        tang('작은 삼각형 두 개로 정사각형 자리를 채워 보세요.', 'square2', 0.15)] },
    { id: 'a2', title: '활동 2. 모양이 달라도 사각형인지 살펴보기', minutes: 10, tool: 'shapes',
      task: '곧은 선이 네 개이면 모두 사각형이에요. 카드를 삼각형, 사각형, 원으로 나누어요.',
      teacher: '"길쭉해도, 기울어도 곧은 선이 네 개예요. 사각형이에요." 정사각형만 사각형이라고 하는 학생에게는 곧은 선을 세어 보게 한다. 마름모 카드를 따로 이름 붙이려는 학생에게는 지금은 모두 사각형이라고 묶는다.',
      levels: CLSL,
      items: [cls('모양이 다른 카드를 삼각형, 사각형, 원으로 나누어 보세요.', [['square', '색종이', 1], ['rectangle', '엽서', 1], ['rhombus', '다이아 카드', 1], ['triangle', '삼각자', 0], ['circle', '동전', 2]], BINS, 0.15),
        cls('이번에도 모양이 다른 카드를 나누어 보세요.', [['trapezoid', '양동이 뚜껑', 1], ['parallelogram', '리본', 1], ['right-triangle', '삼각 깃발', 0], ['circle', '바퀴', 2], ['rectangle', '문', 1]], BINS, 0.2),
        cls('마지막으로 모양이 다른 카드를 나누어 보세요.', [['rhombus', '연', 1], ['obtuse-triangle', '삼각 지붕', 0], ['square', '타일', 1], ['circle', '쟁반', 2], ['parallelogram', '발판', 1]], BINS, 0.22)] },
    pair('a3', '활동 3. 짝과 칠교 조각으로 모양 만들기', 7, '짝과 칠교 조각을 번갈아 놓아 큰 모양을 만들어요.',
      '짝끼리 번갈아 한 조각씩 놓아 큰 모양을 채우게 한다. "이 조각을 돌리면 맞을까?" 하고 서로 말하게 한다. 서로 의견이 다를 때는 곧은 선의 길이를 견주어 보게 한다.',
      ['짝과 번갈아 조각을 놓아 큰 삼각형을 채우고 "다 했어요"를 누르세요.', '조각을 돌려 가며 정사각형을 채우고 "다 했어요"를 누르세요.', '만든 모양이 무슨 모양인지 짝과 말해 보고 "다 했어요"를 누르세요.'], 'shapes',
      { easy: { mode: 'tangram', figure: 'triangle2', lines: true }, base: { mode: 'tangram', figure: 'square2' }, challenge: { mode: 'tangram', figure: 'parallelogram2' } }),
  ],
  wrap: ['"삼각형 조각 두 개로 어떤 모양을 만들었어요?" 만든 모양의 곧은 선을 세어 말하게 한다. 출구 2번을 틀린 학생은 기울어진 사각형을 사각형으로 세지 못한 것이므로 다음 시간에 곧은 선을 세어 보게 한다.', [
    { type: 'choice', prompt: '작은 삼각형 두 개로 만들 수 있는 모양은 무엇인가요?', options: ['원', '정사각형', '오각형'], answer: 1, difficulty: 0.12, explain: '작은 삼각형 두 개를 붙이면 정사각형이나 큰 삼각형을 만들 수 있어요.' },
    { type: 'choice', prompt: '곧은 선이 네 개이면 모두 무엇인가요?', options: ['삼각형', '사각형', '원'], answer: 1, difficulty: 0.1, explain: '모양이 달라도 곧은 선이 네 개이면 모두 사각형이에요.' },
    { type: 'tool', tool: 'shapes', options: { mode: 'tangram', figure: 'triangle2', lines: true }, prompt: '삼각형 조각 두 개를 붙여 위의 큰 삼각형 자리를 채워 보세요.', target: { fit: true }, difficulty: 0.12 },
  ]],
  ws: { title: '조각 맞추기와 사각형', items: [
    { type: 'figure', prompt: '작은 삼각형 두 조각으로 채워진 모양을 보고 이름을 쓰세요.', tool: 'shapes', options: { mode: 'tangram' }, figures: [{ options: { figure: 'triangle2' }, caption: BLANK }, { options: { figure: 'square2' }, caption: BLANK }], answer: '삼각형, 사각형' },
    { type: 'choice', prompt: '사각형이 아닌 것에 ○ 하세요.', options: ['공책', '삼각자', '색종이'], answer: '삼각자' },
    { type: 'table', prompt: '곧은 선 수를 쓰고 모양 이름에 ○ 하세요.', columns: ['모양', '곧은 선 수', '이름'], cells: [['길쭉한 모양', '', '사각형 / 삼각형'], ['정사각형 모양', '', '사각형 / 삼각형']], answer: '4, 사각형, 4, 사각형' },
    { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '곧은 선이 네 개인 모양은 모두 ______이에요.', answer: '사각형' },
    { type: 'draw', prompt: '삼각형 두 개를 붙여 큰 모양을 그려 보세요.' },
  ], easy: { note: '곧은 선이 네 개이면 모양이 달라도 사각형이에요.', items: [
    { type: 'figure', prompt: '채워진 모양의 이름을 쓰세요.', tool: 'shapes', options: { mode: 'tangram' }, figures: [{ options: { figure: 'triangle2' }, caption: BLANK }], answer: '삼각형' },
    { type: 'choice', prompt: '사각형에 ○ 하세요.', options: ['엽서', '동전'], answer: '엽서' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '사각형은 곧은 선이 ___ 개예요.', answer: '4' },
    { type: 'draw', prompt: '네모 모양을 하나 그려 보세요.' },
  ] } },
  diff: { easy: '칠교 그림자 안에 조각 경계선이 보이고, 카드를 맞는 칸에 넣으면 바로 알려 줘요.', base: '경계선 없이 조각을 맞추고, 카드를 스스로 나누어요.', challenge: '경계선 없이 조각을 돌려 가며 맞추고, 모양이 더 다양한 카드를 나누어요.' },
  notes: '자주 보이는 어려움: ① 정사각형만 사각형이라고 한다 → 곧은 선이 네 개이면 모두 사각형이다. ② 조각을 돌리지 않고 끌어 넣으려 한다 → 한 조각을 고른 뒤 돌려 본다. ③ 둥근 모서리 물건을 사각형으로 센다 → 곧은 선이 아님을 짚는다. 사각형의 이름(정사각형, 직사각형 등)은 2학년에서 배운다.',
}));
// 시계 교구 단계: 정각만 / 30분 단위 / 섞어서
const HOUR = { easy: { hourOnly: true, showMinuteNumbers: true }, base: { hourOnly: true }, challenge: { hourOnly: true, showMinuteMarks: false } };
const HALF = { easy: { hourZone: true, showMinuteNumbers: true, minuteStep: 30 }, base: { minuteStep: 30 }, challenge: { minuteStep: 30, showMinuteMarks: false } };
const HOURR = { easy: { showMinuteNumbers: true, hourZone: true }, base: {}, challenge: { showMinuteMarks: false } };
// ───────────────────────────── 4차시 (core · clock) ─────────────────────────────
L.push(lesson(4, {
  std: CK,
  title: '짧은바늘과 긴바늘로 몇 시인지 읽기',
  objective: '짧은바늘은 시를, 긴바늘은 분을 나타냄을 알고 긴바늘이 12에 있을 때 몇 시인지 읽을 수 있다.',
  desc: 'a big round paper wall clock with a short mint hand and a long peach hand pointing straight up, with a girl and a boy looking up at it',
  text: '몇 시일까요?',
  layers: [{ motif: 'house', x: 110, y: 216, s: 0.9 }, { motif: 'tree', x: 390, y: 216 }, { motif: 'bird', x: 250, y: 84 }, { motif: 'flower', x: 250, y: 238 }],
  intro: ['"교실 시계를 보세요. 바늘이 몇 개일까요? 길이가 같나요?" 시연 단추로 시계가 3시, 7시로 바뀌는 모습을 보여 준다. 짧은 바늘이 숫자를 가리키는 것을 손가락으로 따라가게 한다. 두 바늘 가운데 긴바늘이 가리키는 숫자를 몇 시로 읽는 학생이 있는지 살핀다.', '시계의 두 바늘은 길이가 달라요. 어느 바늘이 몇 시를 알려 줄까요?'],
  demo: { tool: 'clock', options: { hourOnly: true, showDigital: true }, sequence: [{ h: 3, m: 0 }, { h: 7, m: 0 }] },
  acts: [
    { id: 'a1', title: '활동 1. 시계를 보고 몇 시인지 고르기', minutes: 9, tool: 'clock',
      task: '긴바늘이 12를 가리키면 정각이에요. 짧은바늘이 가리키는 숫자가 몇 시예요.',
      teacher: '"어느 바늘이 더 짧아요? 그 바늘이 가리키는 숫자가 시예요." 짧은바늘을 손가락으로 짚게 한다. 3시를 12시로 고르는 학생은 긴바늘이 가리키는 숫자 12를 읽은 것이다 — 두 바늘의 길이를 견주어 보게 한다.',
      levels: HOURR,
      items: [clkRead('시계를 보고 몇 시인지 골라 보세요.', 3, 0, ['12시', '3시', '6시'], 1, 0.05), clkRead('시계를 보고 몇 시인지 골라 보세요. 짧은바늘을 먼저 봐요.', 8, 0, ['8시', '12시', '4시'], 0, 0.08),
        clkRead('시계를 보고 몇 시인지 골라 보세요.', 5, 0, ['1시', '5시', '12시'], 1, 0.1), clkRead('시계를 보고 몇 시인지 골라 보세요.', 10, 0, ['2시', '12시', '10시'], 2, 0.12)] },
    { id: 'a2', title: '활동 2. 짧은바늘을 돌려 몇 시 만들기', minutes: 9, tool: 'clock',
      task: '짧은바늘을 돌려 말한 시각을 만들어요. 긴바늘은 12에 있어요.',
      teacher: '"2시를 만들려면 짧은바늘이 어느 숫자를 가리켜야 해요?" 긴바늘은 움직이지 않는다고 짚는다. 2시를 만들면서 긴바늘을 2에 놓으려는 학생에게는 긴바늘이 12에 있어야 정각이라고 말해 준다.',
      levels: HOUR,
      items: [clkMake('학교에 가는 2시를 만들어 보세요.', 2, 0, 0.05), clkMake('점심을 먹는 9시를 만들어 보세요.', 9, 0, 0.08), clkMake('책을 읽는 6시를 만들어 보세요.', 6, 0, 0.08, { h: 3, m: 0 }), clkMake('잠자는 11시를 만들어 보세요.', 11, 0, 0.1)] },
    { id: 'a3', title: '활동 3. 바늘이 하는 일 짝짓기', minutes: 8, tool: 'mindmap',
      task: '바늘 이름 옆에 하는 일을 놓아요.',
      teacher: '"짧은바늘은 무엇을 알려 줘요? 긴바늘이 12를 가리키면 어떤 시각이에요?" 시계를 앞에 놓고 바늘을 가리키며 말하게 한다. 긴바늘이 몇 시를 알려 준다고 하는 학생에게는 두 바늘의 길이를 다시 견주게 한다.',
      levels: CARD,
      items: [matchCards('바늘과 하는 일을 이어 보세요.', '바늘의 일', [['짧은바늘', '몇 시를 알려 줘요'], ['긴바늘', '몇 분을 알려 줘요']], ['몇 월을 알려 줘요'], 0.08),
        matchCards('긴바늘의 자리와 시각을 이어 보세요.', '시각 읽기', [['긴바늘이 12에 있어요', '정각이에요'], ['짧은바늘이 4에 있어요', '4시예요'], ['짧은바늘이 7에 있어요', '7시예요']], null, 0.1),
        matchCards('시계 모양과 읽는 말을 이어 보세요.', '시각 읽기', [['짧은바늘 1, 긴바늘 12', '1시'], ['짧은바늘 9, 긴바늘 12', '9시']], ['12시'], 0.15)] },
  ],
  wrap: ['"짧은바늘은 무엇을 알려 주나요? 긴바늘이 12에 있으면 어떤 시각이에요?" 시계 앞에서 짝에게 바늘을 가리키며 말하게 한다. 출구 1번을 틀린 학생은 긴바늘이 가리키는 숫자를 시로 읽은 것이므로 다음 시간에 두 바늘의 길이부터 견주게 한다.', [
    { type: 'tool', tool: 'clock', options: { readOnly: true, choices: ['12시', '4시', '8시'] }, state: { h: 4, m: 0 }, prompt: '시계를 보고 몇 시인지 고르세요.', target: { pick: 1, h: 4, m: 0 }, difficulty: 0.08 },
    { type: 'choice', prompt: '몇 시를 알려 주는 바늘은 무엇인가요?', options: ['긴바늘', '짧은바늘'], answer: 1, difficulty: 0.05, explain: '짧은바늘이 몇 시를 알려 줘요.' },
    { type: 'choice', prompt: '긴바늘이 12를 가리키고 짧은바늘이 7을 가리키면 몇 시인가요?', options: ['12시', '7시'], answer: 1, difficulty: 0.08, explain: '짧은바늘이 가리키는 숫자가 시예요. 7시예요.' },
  ]],
  ws: { title: '몇 시일까요?', items: [
    { type: 'figure', prompt: '시계를 보고 몇 시인지 쓰세요.', tool: 'clock', options: { hourOnly: true }, figures: [{ state: { h: 7, m: 0 }, caption: '___시' }, { state: { h: 3, m: 0 }, caption: '___시' }, { state: { h: 11, m: 0 }, caption: '___시' }], answer: '7시, 3시, 11시' },
    { type: 'choice', prompt: '시를 알려 주는 바늘에 ○ 하세요.', options: ['긴바늘', '짧은바늘'], answer: '짧은바늘' },
    { type: 'table', prompt: '짧은바늘이 가리키는 숫자를 보고 몇 시인지 쓰세요.', columns: ['짧은바늘', '1', '5', '9', '12'], cells: [['몇 시', '1시', '', '', '']], answer: '5시, 9시, 12시' },
    { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '긴바늘이 12에 있고 짧은바늘이 6에 있으면 ___ 시예요.', answer: '6' },
    { type: 'draw', prompt: '4시를 시계에 그려 보세요. 짧은바늘과 긴바늘을 다르게 그려요.' },
  ], easy: { note: '짧은바늘이 가리키는 숫자가 몇 시예요. 긴바늘이 12에 있으면 정각이에요.', items: [
    { type: 'figure', prompt: '시계를 보고 몇 시인지 쓰세요.', tool: 'clock', options: { hourOnly: true, showMinuteNumbers: true }, figures: [{ state: { h: 2, m: 0 }, caption: '___시' }, { state: { h: 9, m: 0 }, caption: '___시' }], answer: '2시, 9시' },
    { type: 'choice', prompt: '짧은바늘에 ○ 하세요.', options: ['긴 바늘', '짧은 바늘'], answer: '짧은 바늘' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '짧은바늘이 3에 있으면 ___ 시예요.', answer: '3' },
    { type: 'draw', prompt: '2시를 시계에 그려 보세요.' },
  ] } },
  diff: { easy: '시계 바깥에 분 숫자(5, 10…)가 보이고 짧은바늘이 있어야 할 자리가 연하게 칠해져요.', base: '숫자 도움 없이 두 바늘을 보고 읽어요.', challenge: '작은 눈금이 없는 시계로 읽고 만들어요.' },
  notes: '자주 보이는 어려움: ① 긴바늘이 가리키는 12를 시로 읽는다 → 짧은바늘이 시를 알려 준다. ② 두 바늘의 길이를 헷갈린다 → 길이를 먼저 견준다. ③ 시계를 만들 때 긴바늘을 12에서 옮긴다 → 정각은 긴바늘이 12에 있다. 몇 시 30분은 6차시에서 한다.',
}));
// ───────────────────────────── 5차시 (practice · clock) ─────────────────────────────
L.push(lesson(5, {
  std: CK,
  title: '하루 일과를 몇 시로 읽고 시계로 나타내기',
  objective: '정각을 읽고 시계로 나타내며, 하루 일과를 시각 순서대로 놓을 수 있다.',
  desc: 'a day timeline of paper clocks showing morning, noon and evening with small pictures of waking up, eating lunch and going to bed',
  text: '하루가 시작돼요',
  layers: [{ motif: 'house', x: 110, y: 216, s: 0.9 }, { motif: 'tree', x: 390, y: 216 }, { motif: 'bird', x: 250, y: 84 }, { motif: 'star', x: 150, y: 90, s: 0.6 }],
  intro: ['"아침에 일어나는 시각은 몇 시예요? 학교에 가는 시각은요?" 시연 단추로 시계가 7시, 8시, 12시로 바뀌는 모습을 보여 준다. 하루 일과가 시각 순서로 이어지는 것을 말하게 한다. 짧은바늘만 보고 시를 읽는 것과 긴바늘이 12에 있는지 함께 보는 것을 짚는다.', '내가 하는 일들이 몇 시에 일어나는지 시계로 읽어 봐요.'],
  demo: { tool: 'clock', options: { hourOnly: true, showDigital: true }, sequence: [{ h: 7, m: 0 }, { h: 8, m: 0 }, { h: 12, m: 0 }] },
  acts: [
    { id: 'a1', title: '활동 1. 일과 시계를 읽기', minutes: 9, tool: 'clock',
      task: '일과 시계를 보고 몇 시인지 골라요. 짧은바늘부터 봐요.',
      teacher: '"긴바늘이 12에 있어요. 정각이에요. 짧은바늘이 가리키는 숫자를 읽어 봐요." 12시와 1시를 헷갈리는 학생에게는 두 바늘이 겹쳐 있는 12시 모양을 따로 짚어 준다.',
      levels: HOURR,
      items: [clkRead('일어나는 시각이에요. 몇 시인가요?', 7, 0, ['7시', '12시', '1시'], 0, 0.05), clkRead('점심을 먹는 시각이에요. 몇 시인가요?', 12, 0, ['6시', '12시', '1시'], 1, 0.1),
        clkRead('간식을 먹는 시각이에요. 몇 시인가요?', 4, 0, ['4시', '12시', '8시'], 0, 0.08), clkRead('저녁을 먹는 시각이에요. 몇 시인가요?', 6, 0, ['12시', '6시', '3시'], 1, 0.1)] },
    { id: 'a2', title: '활동 2. 말한 시각을 시계로 만들기', minutes: 9, tool: 'clock',
      task: '일과에 맞는 시각을 시계로 만들어요. 짧은바늘만 돌려요.',
      teacher: '"1시를 만들려면 짧은바늘이 어느 숫자에 가야 해요?" 12 다음 숫자가 1이라고 짚는다. 12시와 1시를 헷갈리는 학생에게는 시계 숫자를 손으로 12부터 읽게 한다.',
      levels: HOUR,
      items: [clkMake('도서관에 가는 1시를 만들어 보세요.', 1, 0, 0.08, { h: 6, m: 0 }), clkMake('운동하는 4시를 만들어 보세요.', 4, 0, 0.08), clkMake('집에 돌아오는 5시를 만들어 보세요.', 5, 0, 0.08), clkMake('잠을 깨는 8시를 만들어 보세요.', 8, 0, 0.1)] },
    { id: 'a3', title: '활동 3. 하루 일과를 시각 순서로 놓기', minutes: 8, tool: 'mindmap',
      task: '시각이 빠른 일부터 차례로 카드를 놓아요.',
      teacher: '"7시와 8시 가운데 어느 시각이 먼저예요?" 시계의 짧은바늘이 숫자를 따라 한 칸씩 가는 것을 떠올리게 한다. 숫자가 큰 시각을 먼저 놓는 학생에게는 하루가 시작되는 때부터 이야기를 해 보게 한다.',
      levels: CARD,
      items: [orderCards('아침 일과를 시각이 빠른 것부터 놓아 보세요.', '아침 일과', ['7시 일어나요', '8시 아침을 먹어요', '9시 공부를 시작해요'], 0.1), orderCards('낮 일과를 시각이 빠른 것부터 놓아 보세요.', '낮 일과', ['12시 점심을 먹어요', '2시 책을 읽어요', '4시 간식을 먹어요'], 0.12),
        orderCards('저녁 일과를 시각이 빠른 것부터 놓아 보세요.', '저녁 일과', ['5시 집에 와요', '6시 저녁을 먹어요', '9시 잠자요'], 0.15)] },
  ],
  wrap: ['"학교에 가는 시각과 잠자는 시각을 시계로 말해 볼까요?" 짝에게 자기 일과 하나를 몇 시로 말하게 한다. 출구 1번을 틀린 학생은 12시와 다른 시각을 헷갈린 것이므로 다음 시간에 12시 모양을 먼저 보여 준다.', [
    { type: 'tool', tool: 'clock', options: { readOnly: true, choices: ['12시', '2시', '10시'] }, state: { h: 2, m: 0 }, prompt: '시계를 보고 몇 시인지 고르세요.', target: { pick: 1, h: 2, m: 0 }, difficulty: 0.1 },
    { type: 'tool', tool: 'clock', options: { hourOnly: true }, state: { h: 12, m: 0 }, prompt: '아침을 먹는 8시를 만들어 보세요.', target: { h: 8, m: 0 }, difficulty: 0.1 },
    { type: 'choice', prompt: '더 먼저 일어나는 일은 무엇인가요?', options: ['9시에 공부를 시작해요', '7시에 일어나요'], answer: 1, difficulty: 0.1, explain: '7시가 9시보다 먼저예요. 하루는 숫자가 작은 시각부터 시작해요.' },
  ]],
  ws: { title: '하루 일과와 시각', items: [
    { type: 'figure', prompt: '시계를 보고 몇 시인지 쓰세요.', tool: 'clock', options: { hourOnly: true }, figures: [{ state: { h: 1, m: 0 }, caption: '___시' }, { state: { h: 12, m: 0 }, caption: '___시' }, { state: { h: 6, m: 0 }, caption: '___시' }], answer: '1시, 12시, 6시' },
    { type: 'table', prompt: '일과와 시각을 이어 써 보세요.', columns: ['일과', '시각'], cells: [['일어나요', '7시'], ['점심을 먹어요', ''], ['저녁을 먹어요', ''], ['잠자요', '']], answer: '12시, 6시, 9시' },
    { type: 'choice', prompt: '시각이 더 이른 것에 ○ 하세요.', options: ['5시', '10시'], answer: '5시' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '긴바늘이 12에 있고 짧은바늘이 4에 있으면 ___ 시예요.', answer: '4' },
    { type: 'draw', prompt: '내가 간식을 먹는 시각을 시계에 그려 보세요.' },
  ], easy: { note: '짧은바늘이 가리키는 숫자를 읽어요. 12시는 두 바늘이 모두 위로 가요.', items: [
    { type: 'figure', prompt: '시계를 보고 몇 시인지 쓰세요.', tool: 'clock', options: { hourOnly: true, showMinuteNumbers: true }, figures: [{ state: { h: 12, m: 0 }, caption: '___시' }, { state: { h: 4, m: 0 }, caption: '___시' }], answer: '12시, 4시' },
    { type: 'choice', prompt: '더 이른 시각에 ○ 하세요.', options: ['3시', '8시'], answer: '3시' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '짧은바늘이 7에 있으면 ___ 시예요.', answer: '7' },
    { type: 'draw', prompt: '8시를 시계에 그려 보세요.' },
  ] } },
  diff: { easy: '시계 바깥에 분 숫자가 보이고, 짧은바늘이 가야 할 자리가 연하게 칠해져요.', base: '숫자 도움 없이 읽고 만들어요.', challenge: '작은 눈금이 없는 시계로 읽고 만들어요.' },
  notes: '자주 보이는 어려움: ① 12시와 1시를 헷갈린다 → 12 다음이 1임을 숫자를 읽으며 짚는다. ② 시각의 순서를 숫자 크기로 가린다 → 하루는 아침부터 시작함을 떠올린다. ③ 짧은바늘을 안 보고 긴바늘의 숫자를 읽는다 → 두 바늘의 길이를 먼저 견준다. 12시 다음은 1시로 돌아간다는 것이 처음이라 어렵다.',
}));
// ───────────────────────────── 6차시 (core · clock representation) ─────────────────────────────
L.push(lesson(6, {
  std: CK,
  title: '긴바늘이 6일 때 몇 시 30분 읽기',
  objective: '긴바늘이 6을 가리킬 때 몇 시 30분으로 읽고, 시계에 몇 시 30분을 나타낼 수 있다.',
  desc: 'a round paper clock with the long hand pointing straight down and the short hand between two numbers, with a half-moon beside it',
  text: '몇 시 30분',
  layers: [{ motif: 'house', x: 110, y: 216, s: 0.9 }, { motif: 'moon', x: 410, y: 60, s: 0.8 }, { motif: 'tree', x: 390, y: 216 }, { motif: 'star', x: 150, y: 90, s: 0.6 }],
  intro: ['"긴바늘이 12에서 6까지 오면 한 바퀴의 반이에요. 이 시각을 몇 시 30분이라고 해요." 시연 단추로 시계가 3시에서 3시 30분으로 바뀌는 모습을 보여 준다. 긴바늘이 6에 있을 때 짧은바늘이 두 숫자 사이에 있는 것을 손가락으로 짚는다. 긴바늘이 6이라서 "6시"라고 읽는 학생이 있는지 살핀다.', '긴바늘이 6을 가리키면 몇 시 30분이에요. 짧은바늘은 어디에 있을까요?'],
  demo: { tool: 'clock', options: { minuteStep: 30, showDigital: true }, sequence: [{ h: 3, m: 0 }, { h: 3, m: 30 }] },
  acts: [
    { id: 'a1', title: '활동 1. 몇 시 30분 시계 읽기', minutes: 9, tool: 'clock',
      task: '긴바늘이 6을 가리키면 몇 시 30분이에요. 짧은바늘이 지나온 숫자가 시예요.',
      teacher: '"긴바늘이 6에 있어요. 몇 분이에요? 짧은바늘은 어떤 숫자를 지나왔어요?" 짧은바늘이 두 숫자 사이에 있으면 지나온 숫자를 읽는다고 말해 준다. 4시 30분을 5시 30분으로 읽는 학생에게는 짧은바늘이 5에 아직 닿지 않았음을 보게 한다.',
      levels: HALF,
      items: [clkRead('시계를 보고 몇 시 30분인지 골라 보세요.', 4, 30, ['4시 30분', '6시 4분', '5시 30분'], 0, 0.1), clkRead('시계를 보고 몇 시 30분인지 골라 보세요.', 9, 30, ['9시 30분', '10시 30분', '9시'], 0, 0.12),
        clkRead('시계를 보고 몇 시 30분인지 골라 보세요.', 2, 30, ['2시 30분', '3시 30분', '6시 2분'], 0, 0.15), clkRead('시계를 보고 몇 시 30분인지 골라 보세요.', 11, 30, ['12시 30분', '11시 30분', '11시'], 1, 0.18)] },
    { id: 'a2', title: '활동 2. 긴바늘을 6에 놓아 몇 시 30분 만들기', minutes: 9, tool: 'clock',
      task: '긴바늘을 6에 놓아요. 짧은바늘은 시에 맞게 따라가요.',
      teacher: '"3시 30분을 만들려면 긴바늘은 어디에 놓아요?" 긴바늘을 6에 놓으면 짧은바늘이 두 숫자 사이로 저절로 따라온다고 보여 준다. 짧은바늘을 6에 놓으려는 학생에게는 짧은바늘은 시, 긴바늘은 분이라고 다시 짚는다.',
      levels: HALF,
      items: [clkMake('간식을 먹는 3시 30분을 만들어 보세요.', 3, 30, 0.12), clkMake('책을 읽는 7시 30분을 만들어 보세요.', 7, 30, 0.12), clkMake('잠자러 가는 10시 30분을 만들어 보세요.', 10, 30, 0.15), clkMake('공원에 가는 1시 30분을 만들어 보세요.', 1, 30, 0.15)] },
    { id: 'a3', title: '활동 3. 시각을 빠른 순서로 놓기', minutes: 8, tool: 'mindmap',
      task: '정각과 몇 시 30분이 섞인 시각을 빠른 것부터 차례로 놓아요.',
      teacher: '"7시와 7시 30분 가운데 어느 시각이 먼저예요?" 같은 시일 때는 30분이 지난 쪽이 더 늦다고 말해 준다. 7시 30분을 8시보다 늦다고 하는 학생에게는 짧은바늘이 8에 아직 닿지 않았음을 시계로 보여 준다.',
      levels: CARD,
      items: [orderCards('시각이 빠른 것부터 놓아 보세요.', '시각 순서', ['7시', '7시 30분', '8시'], 0.12), orderCards('시각이 빠른 것부터 놓아 보세요.', '시각 순서', ['2시', '2시 30분', '3시'], 0.15),
        orderCards('시각이 빠른 것부터 놓아 보세요.', '시각 순서', ['9시 30분', '10시', '10시 30분'], 0.18)] },
  ],
  wrap: ['"긴바늘이 6을 가리키면 몇 분이에요? 짧은바늘은 어떻게 읽어요?" 시계에서 바늘을 가리키며 말하게 한다. 출구 1번을 틀린 학생은 긴바늘의 6을 시로 읽은 것이므로 다음 시간에 짧은바늘이 시라는 것을 먼저 짚는다.', [
    { type: 'tool', tool: 'clock', options: { readOnly: true, choices: ['8시 30분', '6시 8분', '9시 30분'] }, state: { h: 8, m: 30 }, prompt: '시계를 보고 몇 시 30분인지 고르세요.', target: { pick: 0, h: 8, m: 30 }, difficulty: 0.12 },
    { type: 'choice', prompt: '긴바늘이 6을 가리키면 몇 분인가요?', options: ['6분', '30분', '60분'], answer: 1, difficulty: 0.1, explain: '긴바늘이 한 바퀴의 반을 돌아 6에 있으면 30분이에요.' },
    { type: 'choice', prompt: '5시 30분일 때 짧은바늘은 어디에 있나요?', options: ['5와 6 사이', '6'], answer: 0, difficulty: 0.15, explain: '5시 30분은 5를 지나 6에 가기 전이라 짧은바늘이 5와 6 사이에 있어요.' },
  ]],
  ws: { title: '몇 시 30분', items: [
    { type: 'figure', prompt: '시계를 보고 몇 시 30분인지 쓰세요.', tool: 'clock', options: { minuteStep: 30 }, figures: [{ state: { h: 5, m: 30 }, caption: '___시 30분' }, { state: { h: 8, m: 30 }, caption: '___시 30분' }, { state: { h: 12, m: 30 }, caption: '___시 30분' }], answer: '5시 30분, 8시 30분, 12시 30분' },
    { type: 'choice', prompt: '긴바늘이 6에 있는 시각에 ○ 하세요.', options: ['4시', '4시 30분'], answer: '4시 30분' },
    { type: 'table', prompt: '시각을 보고 긴바늘이 가리키는 숫자를 쓰세요.', columns: ['시각', '긴바늘'], cells: [['3시', ''], ['3시 30분', ''], ['9시', ''], ['9시 30분', '']], answer: '12, 6, 12, 6' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '긴바늘이 6을 가리키면 ___ 분이에요.', answer: '30' },
    { type: 'draw', prompt: '2시 30분을 시계에 그려 보세요.' },
  ], easy: { note: '긴바늘이 6에 있으면 30분이에요. 짧은바늘은 지나온 숫자를 읽어요.', items: [
    { type: 'figure', prompt: '시계를 보고 몇 시 30분인지 쓰세요.', tool: 'clock', options: { minuteStep: 30, showMinuteNumbers: true }, figures: [{ state: { h: 3, m: 30 }, caption: '___시 30분' }, { state: { h: 7, m: 30 }, caption: '___시 30분' }], answer: '3시 30분, 7시 30분' },
    { type: 'choice', prompt: '30분은 긴바늘이 어디에 있을 때예요?', options: ['6', '12'], answer: '6' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '긴바늘이 12이면 정각이고, 6이면 ___ 분이에요.', answer: '30' },
    { type: 'draw', prompt: '1시 30분을 시계에 그려 보세요.' },
  ] } },
  diff: { easy: '시계 바깥에 분 숫자가 보이고 짧은바늘이 있어야 할 두 숫자 사이가 연하게 칠해져요.', base: '숫자 도움 없이 읽고 만들어요.', challenge: '작은 눈금이 없는 시계로 읽고 만들어요.' },
  notes: '자주 보이는 어려움: ① 긴바늘의 6을 시로 읽는다(6시 4분) → 짧은바늘이 시, 긴바늘 6은 30분. ② 짧은바늘이 두 숫자 사이일 때 뒤의 숫자를 읽는다(4시 30분을 5시 30분) → 지나온 숫자를 읽는다. ③ 30분을 3분이라고 한다 → 숫자 한 칸이 5분이지만 1학년은 6이면 30분이라고 외워 읽어도 된다.',
}));
// ───────────────────────────── 7차시 (practice · clock representation) ─────────────────────────────
L.push(lesson(7, {
  std: CK,
  title: '정각과 몇 시 30분을 섞어 읽고 숫자 시계와 짝짓기',
  objective: '정각과 몇 시 30분을 구분하여 읽고, 숫자 시계(8:30)와 같은 시각을 짝지을 수 있다.',
  desc: 'a bedside table with a round paper clock and a small digital clock showing the same time, next to a lamp',
  text: '같은 시각 찾기',
  layers: [{ motif: 'house', x: 110, y: 216, s: 0.9 }, { motif: 'moon', x: 410, y: 60, s: 0.8 }, { motif: 'tree', x: 390, y: 216 }, { motif: 'flower', x: 250, y: 238 }],
  intro: ['"숫자로 쓴 시계에는 8:30이라고 나와요. 8은 시, 30은 분이에요. 바늘 시계와 같은 시각일까요?" 시연 단추로 시계가 8시에서 8시 30분으로 바뀌면서 숫자 시각이 함께 바뀌는 모습을 보여 준다. 30을 시로 읽는 학생이 있는지 살핀다.', '바늘 시계와 숫자 시계가 같은 시각을 어떻게 나타내는지 봐요.'],
  demo: { tool: 'clock', options: { minuteStep: 30, showDigital: true }, sequence: [{ h: 8, m: 0 }, { h: 8, m: 30 }] },
  acts: [
    { id: 'a1', title: '활동 1. 정각과 30분 섞어 읽기', minutes: 9, tool: 'clock',
      task: '시계를 보고 정각인지 30분인지 먼저 보고 몇 시인지 읽어요.',
      teacher: '"긴바늘이 12예요, 6이에요?" 긴바늘을 먼저 보고, 짧은바늘로 시를 읽는다고 순서를 말해 준다. 6시 30분을 7시로 읽는 학생에게는 긴바늘이 6이므로 30분이 지났음을 짚는다.',
      levels: HALF,
      items: [clkRead('시계를 보고 몇 시인지 골라 보세요.', 6, 30, ['6시', '6시 30분', '7시 30분'], 1, 0.1), clkRead('시계를 보고 몇 시인지 골라 보세요.', 1, 0, ['1시', '1시 30분', '12시 30분'], 0, 0.08),
        clkRead('시계를 보고 몇 시인지 골라 보세요.', 12, 30, ['12시', '1시 30분', '12시 30분'], 2, 0.15), clkRead('긴바늘이 12에 있는 시계예요. 몇 시인지 골라 보세요.', 5, 0, ['5시 30분', '5시', '6시'], 1, 0.1)] },
    { id: 'a2', title: '활동 2. 정각과 30분 시계 만들기', minutes: 9, tool: 'clock',
      task: '말한 시각을 시계에 나타내요. 정각이면 긴바늘을 12에, 30분이면 6에 놓아요.',
      teacher: '"몇 시 30분이면 긴바늘을 어디에 놓아요?" 정각이 아닌데 긴바늘을 12에 두는 학생에게는 30분이 어느 숫자인지 다시 묻는다. 만든 시계를 짝에게 읽어 주게 한다.',
      levels: HALF,
      items: [clkMake('아침을 먹는 7시 30분을 만들어 보세요.', 7, 30, 0.12), clkMake('수업이 끝나는 2시를 만들어 보세요.', 2, 0, 0.1, { h: 5, m: 30 }), clkMake('놀이터에 가는 4시 30분을 만들어 보세요.', 4, 30, 0.12), clkMake('저녁 먹는 6시를 만들어 보세요.', 6, 0, 0.1, { h: 9, m: 30 })] },
    { id: 'a3', title: '활동 3. 바늘 시계와 숫자 시계 짝짓기', minutes: 8, tool: 'mindmap',
      task: '숫자 시계의 시각과 같은 읽는 말을 이어요. 8:30은 8시 30분이에요.',
      teacher: '"8:30에서 앞의 8은 무엇이고 뒤의 30은 무엇이에요?" 점 앞이 시, 점 뒤가 분이라고 말해 준다. 5:00을 5시 30분으로 이어 놓는 학생에게는 00이 분이 없다는 뜻임을 짚는다.',
      levels: CARD,
      items: [matchCards('숫자 시계와 읽는 말을 이어 보세요.', '숫자 시계', [['8:30', '8시 30분'], ['8:00', '8시'], ['2:30', '2시 30분']], null, 0.12),
        matchCards('숫자 시계와 읽는 말을 이어 보세요.', '숫자 시계', [['5:00', '5시'], ['10:30', '10시 30분'], ['12:00', '12시']], null, 0.15),
        matchCards('카드 한 장이 남아요. 맞는 카드만 이어 보세요.', '숫자 시계', [['3:30', '3시 30분'], ['9:00', '9시']], ['9시 30분'], 0.18)] },
  ],
  wrap: ['"숫자 시계 7:30은 어떻게 읽어요?" 점 앞과 뒤를 손가락으로 짚으며 말하게 한다. 출구 2번을 틀린 학생은 점 뒤의 수를 시로 읽은 것이므로 다음 시간에 바늘 시계와 숫자 시계를 나란히 놓아 보여 준다.', [
    { type: 'tool', tool: 'clock', options: { readOnly: true, choices: ['3시', '3시 30분', '6시'] }, state: { h: 3, m: 30 }, prompt: '시계를 보고 몇 시인지 고르세요.', target: { pick: 1, h: 3, m: 30 }, difficulty: 0.12 },
    { type: 'choice', prompt: '숫자 시계에 9:30이라고 나와요. 어떻게 읽나요?', options: ['9시 30분', '30시 9분', '9시'], answer: 0, difficulty: 0.12, explain: '점 앞의 9는 시, 점 뒤의 30은 분이에요. 9시 30분이에요.' },
    { type: 'choice', prompt: '시계의 긴바늘이 12에 있고 짧은바늘이 1에 있어요. 숫자 시계는 무엇일까요?', options: ['1:00', '1:30', '12:00'], answer: 0, difficulty: 0.15, explain: '긴바늘이 12이면 정각이고 짧은바늘이 1이라 1시, 즉 1:00이에요.' },
  ]],
  ws: { title: '정각과 몇 시 30분', items: [
    { type: 'figure', prompt: '시계를 보고 몇 시인지 쓰세요.', tool: 'clock', options: { minuteStep: 30 }, figures: [{ state: { h: 6, m: 0 }, caption: BLANK }, { state: { h: 6, m: 30 }, caption: BLANK }, { state: { h: 10, m: 30 }, caption: BLANK }], answer: '6시, 6시 30분, 10시 30분' },
    { type: 'table', prompt: '숫자 시계의 읽는 말을 쓰세요.', columns: ['숫자 시계', '읽는 말'], cells: [['4:30', ''], ['11:00', ''], ['1:30', ''], ['7:00', '']], answer: '4시 30분, 11시, 1시 30분, 7시' },
    { type: 'choice', prompt: '8시 30분에 ○ 하세요.', options: ['8:00', '8:30', '3:08'], answer: '8:30' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '2시 30분을 숫자 시계로 쓰면 ___ : ___ 이에요.', answer: '2, 30' },
    { type: 'draw', prompt: '5시 30분을 시계에 그리고 숫자 시계도 써 보세요.' },
  ], easy: { note: '숫자 시계는 점 앞이 시, 점 뒤가 분이에요.', items: [
    { type: 'figure', prompt: '시계를 보고 몇 시인지 쓰세요.', tool: 'clock', options: { minuteStep: 30, showMinuteNumbers: true }, figures: [{ state: { h: 9, m: 0 }, caption: BLANK }, { state: { h: 9, m: 30 }, caption: BLANK }], answer: '9시, 9시 30분' },
    { type: 'choice', prompt: '3시 30분에 ○ 하세요.', options: ['3:00', '3:30'], answer: '3:30' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '7:30은 ___ 시 30분이에요.', answer: '7' },
    { type: 'draw', prompt: '8시를 시계에 그려 보세요.' },
  ] } },
  diff: { easy: '시계 바깥에 분 숫자가 보이고, 짝짓기에서 맞는 짝을 놓으면 초록 테두리가 생겨요.', base: '숫자 도움 없이 읽고 만들며 카드를 스스로 이어요.', challenge: '작은 눈금이 없는 시계로 읽고 만들어요. 남는 카드가 섞여 있어요.' },
  notes: '자주 보이는 어려움: ① 점 뒤의 30을 시로 읽는다 → 점 앞이 시, 점 뒤가 분이다. ② 정각인데 30분이라고 읽는다 → 긴바늘이 12인지 6인지 먼저 본다. ③ 12시 30분을 12시로 읽는다 → 긴바늘이 6이면 30분이 지난 것이다. 몇 시 몇 분은 2학년에서 배우므로 30분만 다룬다.',
}));
// ───────────────────────────── 8차시 (extend · clock representation) ─────────────────────────────
L.push(lesson(8, {
  std: CK,
  title: '짧은바늘이 두 숫자 사이일 때 몇 시 30분인지 읽기',
  objective: '짧은바늘이 두 숫자 사이에 있을 때 지나온 숫자를 시로 읽어 몇 시 30분을 정확히 읽을 수 있다.',
  desc: 'a paper clock where the short hand sits halfway between two numbers and a little caterpillar walking along the clock edge from one number to the next',
  text: '지나온 숫자는?',
  layers: [{ motif: 'tree', x: 90, y: 216, s: 1.0 }, { motif: 'house', x: 390, y: 216, s: 0.9 }, { motif: 'bird', x: 250, y: 84 }, { motif: 'flower', x: 250, y: 238 }],
  intro: ['"애벌레가 시계 바깥을 걷고 있어요. 6에서 7로 가는 중이에요. 지금 몇 시일까요?" 시연 단추로 시계가 6시에서 6시 30분으로 바뀌고 짧은바늘이 6과 7 사이에 오는 것을 보여 준다. 짧은바늘이 두 숫자 사이에 있으면 지나온 숫자를 읽는다고 말해 준다. 더 가까운 숫자로 읽는 학생이 있는지 살핀다.', '짧은바늘이 두 숫자 사이에 있을 때 어느 숫자를 읽을까요?'],
  demo: { tool: 'clock', options: { minuteStep: 30, showDigital: true }, sequence: [{ h: 6, m: 0 }, { h: 6, m: 30 }] },
  acts: [
    { id: 'a1', title: '활동 1. 지나온 숫자로 시 읽기', minutes: 10, tool: 'clock',
      task: '짧은바늘이 두 숫자 사이에 있어요. 지나온 숫자가 시예요. 긴바늘은 6이에요.',
      teacher: '"짧은바늘이 6을 지나 7로 가는 중이에요. 시는 6일까요, 7일까요?" 길을 걷는 비유로 지나온 숫자가 시라고 말해 준다. 7시 30분이 아니라 "8시 30분"을 고르는 학생에게는 짧은바늘이 7과 8 사이에 있는 것을 손가락으로 짚어 지나온 숫자를 찾게 한다.',
      levels: HALF,
      items: [clkRead('짧은바늘이 두 숫자 사이에 있어요. 몇 시 30분인가요?', 6, 30, ['6시 30분', '7시 30분', '6시'], 0, 0.15), clkRead('짧은바늘이 두 숫자 사이에 있어요. 몇 시 30분인가요?', 10, 30, ['11시 30분', '10시 30분', '10시'], 1, 0.18),
        clkRead('짧은바늘이 두 숫자 사이에 있어요. 몇 시 30분인가요?', 7, 30, ['8시 30분', '7시', '7시 30분'], 2, 0.18), clkRead('짧은바늘이 두 숫자 사이에 있어요. 몇 시 30분인가요?', 3, 30, ['3시 30분', '4시 30분', '3시'], 0, 0.15)] },
    { id: 'a2', title: '활동 2. 이야기 속 시각을 시계로 나타내기', minutes: 9, tool: 'clock',
      task: '이야기를 읽고 시각을 시계로 나타내요. 정각인지 30분인지 먼저 생각해요.',
      teacher: '"이야기에 몇 시 30분이라고 나와 있어요, 몇 시라고 나와 있어요?" 이야기에서 정각과 30분을 가려 읽게 한다. 몇 시 30분을 만들면서 짧은바늘을 다음 숫자에 놓는 학생에게는 지나온 숫자 위에 짧은바늘이 있어야 한다고 말해 준다.',
      levels: HALF,
      items: [clkMake('동생이 일어난 시각은 8시 30분이에요. 시계로 나타내 보세요.', 8, 30, 0.2), clkMake('학원이 끝나는 시각은 5시예요. 시계로 나타내 보세요.', 5, 0, 0.15, { h: 11, m: 30 }), clkMake('할머니 댁에 도착한 시각은 12시 30분이에요. 시계로 나타내 보세요.', 12, 30, 0.22, { h: 4, m: 0 }), clkMake('영화가 시작하는 시각은 2시 30분이에요. 시계로 나타내 보세요.', 2, 30, 0.18)] },
    pair('a3', '활동 3. 짝에게 시각 문제 내기', 7, '짝이 말한 몇 시 또는 몇 시 30분을 시계로 나타내요. 서로 번갈아 문제를 내요.',
      '짝끼리 번갈아 "4시 30분이에요" 같은 시각을 말하게 하고, 짝은 시계에 나타낸다. 나타낸 시계를 짝이 읽어 맞는지 확인하게 한다. 짧은바늘이 지나온 숫자 위에 있는지 서로 살피게 한다.',
      ['짝이 말한 몇 시를 시계로 나타내고 "다 했어요"를 누르세요.', '짝이 말한 몇 시 30분을 시계로 나타내고 "다 했어요"를 누르세요.', '이번에는 내가 문제를 내고 짝이 만든 시계를 읽어 보고 "다 했어요"를 누르세요.'], 'clock', HALF),
  ],
  wrap: ['"짧은바늘이 두 숫자 사이에 있으면 어느 숫자를 읽어요?" 지나온 숫자를 손가락으로 짚으며 말하게 한다. 출구 1번을 틀린 학생은 다음 숫자를 읽은 것이므로 다음 시간에 짧은바늘이 걸어온 길을 따라가게 한다.', [
    { type: 'tool', tool: 'clock', options: { readOnly: true, choices: ['9시 30분', '10시 30분', '9시'] }, state: { h: 9, m: 30 }, prompt: '시계를 보고 몇 시인지 고르세요.', target: { pick: 0, h: 9, m: 30 }, difficulty: 0.18 },
    { type: 'choice', prompt: '짧은바늘이 4와 5 사이에 있고 긴바늘이 6에 있어요. 몇 시인가요?', options: ['5시 30분', '4시 30분', '6시'], answer: 1, difficulty: 0.18, explain: '짧은바늘이 4를 지나왔으니 시는 4예요. 긴바늘이 6이니 4시 30분이에요.' },
    { type: 'tool', tool: 'clock', options: { minuteStep: 30 }, state: { h: 12, m: 0 }, prompt: '1시 30분을 시계로 나타내 보세요.', target: { h: 1, m: 30 }, difficulty: 0.15 },
  ]],
  ws: { title: '짧은바늘이 두 숫자 사이에 있을 때', items: [
    { type: 'figure', prompt: '시계를 보고 몇 시 30분인지 쓰세요.', tool: 'clock', options: { minuteStep: 30 }, figures: [{ state: { h: 7, m: 30 }, caption: '___시 30분' }, { state: { h: 11, m: 30 }, caption: '___시 30분' }, { state: { h: 4, m: 30 }, caption: '___시 30분' }], answer: '7시 30분, 11시 30분, 4시 30분' },
    { type: 'choice', prompt: '짧은바늘이 2와 3 사이에 있고 긴바늘이 6이에요. 알맞은 시각에 ○ 하세요.', options: ['2시 30분', '3시 30분'], answer: '2시 30분' },
    { type: 'table', prompt: '짧은바늘이 지나온 숫자를 쓰고 몇 시 30분인지 쓰세요.', columns: ['짧은바늘', '지나온 숫자', '시각'], cells: [['8과 9 사이', '', ''], ['1과 2 사이', '', '']], answer: '8, 8시 30분, 1, 1시 30분' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '짧은바늘이 5와 6 사이에 있고 긴바늘이 6이면 ___ 시 30분이에요.', answer: '5' },
    { type: 'short', prompt: '짧은바늘이 두 숫자 사이에 있을 때 어느 숫자를 읽는지 써 보세요.' },
  ], easy: { note: '짧은바늘이 지나온 숫자가 시예요. 긴바늘 6은 30분이에요.', items: [
    { type: 'figure', prompt: '시계를 보고 몇 시 30분인지 쓰세요.', tool: 'clock', options: { minuteStep: 30, showMinuteNumbers: true }, figures: [{ state: { h: 2, m: 30 }, caption: '___시 30분' }, { state: { h: 9, m: 30 }, caption: '___시 30분' }], answer: '2시 30분, 9시 30분' },
    { type: 'choice', prompt: '짧은바늘이 3과 4 사이에 있고 긴바늘이 6이에요. 알맞은 시각에 ○ 하세요.', options: ['3시 30분', '4시 30분'], answer: '3시 30분' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '짧은바늘이 6과 7 사이에 있고 긴바늘이 6이면 ___ 시 30분이에요.', answer: '6' },
    { type: 'draw', prompt: '10시 30분을 시계에 그려 보세요.' },
  ] } },
  diff: { easy: '짧은바늘이 있어야 할 두 숫자 사이가 연하게 칠해지고 분 숫자가 보여요.', base: '숫자 도움 없이 지나온 숫자를 찾아 읽어요.', challenge: '작은 눈금이 없는 시계로 읽고 만들어요.' },
  notes: '자주 보이는 어려움: ① 짧은바늘이 가까운 숫자를 시로 읽는다 → 지나온 숫자를 읽는다. ② 12시 30분을 1시 30분이라고 한다 → 짧은바늘이 12를 지났고 1에는 닿지 않았다. ③ 몇 시 30분을 만들며 짧은바늘을 다음 숫자 위에 놓는다 → 긴바늘을 6에 놓으면 짧은바늘이 두 숫자 사이로 따라온다.',
}));
// ───────────────────────────── 9차시 (core · shapes representation) ─────────────────────────────
L.push(lesson(9, {
  std: SH,
  title: '곧은 선과 뾰족한 곳으로 모양의 특징 말하기',
  objective: '삼각형, 사각형, 원의 곧은 선 수와 뾰족한 곳 수를 말하고, 특징에 맞는 모양을 짝지을 수 있다.',
  desc: 'three paper signs showing a triangle, a rectangle, and a circle each with small labels about straight lines and corners, held by cheerful paper animals',
  text: '특징을 말해요',
  layers: [{ motif: 'house', x: 110, y: 216, s: 0.9 }, { motif: 'tree', x: 390, y: 216 }, { motif: 'star', x: 150, y: 90, s: 0.6 }, { motif: 'bird', x: 300, y: 84 }],
  intro: ['"삼각형, 사각형, 원은 어디가 다를까요?" 시연 단추로 점판에 삼각형, 사각형이 차례로 만들어지는 모습을 보여 준다. 곧은 선의 수와 뾰족한 곳의 수를 손가락으로 세어 말하게 한다. 원에도 곧은 선이 있다고 하는 학생이 있는지 살피고, 원은 곧은 선이 없다고 짚는다.', '곧은 선이 몇 개인지, 뾰족한 곳이 몇 개인지 세어서 모양을 말해 봐요.'],
  demo: { tool: 'shapes', options: { mode: 'geoboard', size: 4 }, sequence: [{ pts: [[0, 3], [3, 3], [1, 0]] }, { pts: [[0, 1], [3, 1], [3, 3], [0, 3]] }] },
  acts: [
    { id: 'a1', title: '활동 1. 곧은 선 수로 모양 나누기', minutes: 9, tool: 'shapes',
      task: '카드를 곧은 선 수에 따라 알맞은 칸에 넣어요. 원은 곧은 선이 없어요.',
      teacher: '"곧은 선이 세 개이면 어느 칸이에요?" 곧은 선을 손가락으로 따라가며 세게 한다. 둥근 모서리의 물건 카드를 곧은 선이 네 개인 칸에 넣는 학생에게는 곧은 선이 아닌 부분을 짚어 준다.',
      levels: CLSL,
      items: [cls('카드를 곧은 선 수에 따라 나누어 보세요.', [['triangle', '삼각자', 0], ['rectangle', '엽서', 1], ['circle', '동전', 2], ['square', '타일', 1], ['circle', '단추', 2], ['right-triangle', '삼각 깃발', 0]], ['곧은 선이 3개', '곧은 선이 4개', '곧은 선이 없어요'], 0.15),
        cls('이번에도 곧은 선 수에 따라 나누어 보세요.', [['rectangle', '문', 1, 90], ['triangle', '지붕', 0, 180], ['circle', '바퀴', 2], ['square', '비스듬한 쿠션', 1, 45], ['obtuse-triangle', '삼각 모자', 0]], ['곧은 선이 3개', '곧은 선이 4개', '곧은 선이 없어요'], 0.18),
        cls('마지막으로 곧은 선 수에 따라 나누어 보세요.', [['circle', '접시', 2], ['trapezoid', '양동이 뚜껑', 1], ['triangle', '표지판', 0], ['parallelogram', '리본', 1], ['circle', '시계', 2]], ['곧은 선이 3개', '곧은 선이 4개', '곧은 선이 없어요'], 0.2)] },
    { id: 'a2', title: '활동 2. 뾰족한 곳 수 세어 고르기', minutes: 9, tool: 'shapes',
      task: '점판의 모양을 보고 뾰족한 곳이 몇 개인지 골라요.',
      teacher: '"뾰족한 곳은 곧은 선과 곧은 선이 만나는 곳이에요. 하나씩 짚으며 세어요." 곧은 선 수와 같다고 짚는다. 뾰족한 곳을 곧은 선의 가운데에서 세는 학생에게는 선이 꺾이는 곳만 센다고 알려 준다.',
      levels: GEORL,
      items: [geoRead('점판의 모양은 뾰족한 곳이 몇 개인가요?', TRI1, '뾰족한 곳은 몇 개인가요?', ['3개', '4개', '5개'], 0, 0.1), geoRead('점판의 모양은 뾰족한 곳이 몇 개인가요?', SQ1, '뾰족한 곳은 몇 개인가요?', ['3개', '4개', '5개'], 1, 0.12),
        geoRead('기울어진 모양은 뾰족한 곳이 몇 개인가요?', QUAD1, '뾰족한 곳은 몇 개인가요?', ['3개', '4개', '5개'], 1, 0.15), geoRead('점판의 모양은 뾰족한 곳이 몇 개인가요?', PENT1, '뾰족한 곳은 몇 개인가요?', ['3개', '4개', '5개'], 2, 0.2)] },
    { id: 'a3', title: '활동 3. 모양과 특징 이어 보기', minutes: 8, tool: 'mindmap',
      task: '모양 이름 옆에 알맞은 특징 카드를 놓아요.',
      teacher: '"삼각형은 뾰족한 곳이 몇 개예요? 원은 뾰족한 곳이 있어요?" 특징을 소리 내어 읽으며 짝짓게 한다. 원에 뾰족한 곳이 있다고 하는 학생에게는 원 모양의 동전 가장자리를 손가락으로 따라가게 한다.',
      levels: CARD,
      items: [matchCards('모양과 특징을 이어 보세요.', '모양의 특징', [['삼각형', '뾰족한 곳이 3개예요'], ['사각형', '뾰족한 곳이 4개예요'], ['원', '뾰족한 곳이 없어요']], null, 0.12),
        matchCards('모양과 특징을 이어 보세요.', '모양의 특징', [['삼각형', '곧은 선이 3개예요'], ['사각형', '곧은 선이 4개예요'], ['원', '둥글게 이어져 있어요']], ['곧은 선이 5개예요'], 0.15),
        matchCards('모양과 물건을 이어 보세요.', '모양과 물건', [['삼각형', '삼각자'], ['사각형', '공책'], ['원', '동전']], ['바퀴 달린 가방'], 0.12)] },
  ],
  wrap: ['"삼각형, 사각형, 원은 어디가 다르다고 말할 수 있나요?" 곧은 선과 뾰족한 곳의 수로 말하게 한다. 출구 1번을 틀린 학생은 원에도 뾰족한 곳이 있다고 생각한 것이므로 다음 시간에 원 모양을 손가락으로 따라가게 한다.', [
    { type: 'choice', prompt: '뾰족한 곳이 없는 모양은 무엇인가요?', options: ['삼각형', '사각형', '원'], answer: 2, difficulty: 0.08, explain: '원은 둥글게 이어져 있어서 뾰족한 곳이 없어요.' },
    { type: 'tool', tool: 'shapes', options: { mode: 'geoboard', size: 4, showCounts: false, readOnly: true, ask: { q: '곧은 선은 몇 개인가요?', choices: ['3개', '4개', '5개'] } }, state: { pts: PENT1 }, prompt: '점판의 모양은 곧은 선이 몇 개인가요?', target: { pick: 2 }, difficulty: 0.2 },
    { type: 'choice', prompt: '곧은 선이 네 개이고 뾰족한 곳이 네 개인 모양은 무엇인가요?', options: ['삼각형', '사각형'], answer: 1, difficulty: 0.1, explain: '사각형은 곧은 선 네 개, 뾰족한 곳 네 개예요.' },
  ]],
  ws: { title: '모양의 특징', items: [
    { type: 'table', prompt: '모양의 특징을 쓰세요.', columns: ['모양', '곧은 선', '뾰족한 곳'], cells: [['삼각형', '', ''], ['사각형', '', ''], ['원', '', '']], answer: '3·3, 4·4, 0·0' },
    { type: 'figure', prompt: '점판의 모양에서 뾰족한 곳이 몇 개인지 쓰세요.', tool: 'shapes', options: { mode: 'geoboard', size: 4, showCounts: false }, figures: [{ state: { pts: TRI2 }, caption: '___개' }, { state: { pts: RECT1 }, caption: '___개' }, { state: { pts: PENT1 }, caption: '___개' }], answer: '3개, 4개, 5개' },
    { type: 'choice', prompt: '곧은 선이 하나도 없는 모양에 ○ 하세요.', options: ['삼각형', '사각형', '원'], answer: '원' },
    { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '곧은 선이 네 개인 모양은 ______이에요.', answer: '사각형' },
    { type: 'short', prompt: '삼각형과 원은 어디가 다른지 한 문장으로 써 보세요.' },
  ], easy: { note: '곧은 선과 뾰족한 곳은 삼각형이 3개, 사각형이 4개, 원은 없어요.', items: [
    { type: 'table', prompt: '모양의 특징을 쓰세요.', columns: ['모양', '곧은 선', '뾰족한 곳'], cells: [['삼각형', '3', ''], ['사각형', '4', '']], answer: '3, 4' },
    { type: 'figure', prompt: '뾰족한 곳이 몇 개인지 쓰세요.', tool: 'shapes', options: { mode: 'geoboard', size: 4, showCounts: false }, figures: [{ state: { pts: TRI1 }, caption: '___개' }, { state: { pts: SQ1 }, caption: '___개' }], answer: '3개, 4개' },
    { type: 'choice', prompt: '둥근 모양에 ○ 하세요.', options: ['원', '사각형'], answer: '원' },
    { type: 'draw', prompt: '뾰족한 곳이 3개인 모양을 그려 보세요.' },
  ] } },
  diff: { easy: '카드를 맞는 칸에 넣으면 바로 알려 주고, 점판 읽기에서도 모양을 기울이지 않은 것이 먼저 나와요.', base: '기울어진 카드가 섞이고 스스로 세어 골라요.', challenge: '점판에 오각형도 나오고 카드 모양이 더 다양해요.' },
  notes: '자주 보이는 어려움: ① 원에도 곧은 선이나 뾰족한 곳이 있다고 말한다 → 원은 둥글게 이어져 있다. ② 곧은 선과 뾰족한 곳의 수를 서로 다르게 센다 → 닫힌 모양에서는 같다. ③ 한 선에서 두 번 센다 → 센 곳에 표시한다. 오각형은 이 단원의 목표는 아니지만 곧은 선 수를 세는 연습으로 쓴다.',
}));
// ───────────────────────────── 10차시 (practice · shapes representation) ─────────────────────────────
L.push(lesson(10, {
  std: SH,
  title: '크기와 방향이 달라도 같은 모양인지 살펴보기',
  objective: '크기와 방향이 달라도 곧은 선 수가 같으면 같은 모양임을 알고, 점판에서 다양한 크기의 삼각형과 사각형을 만들 수 있다.',
  desc: 'a big, a medium and a small paper triangle standing together in a row like a family, with a round paper sun smiling behind them',
  text: '크기가 달라도',
  layers: [{ motif: 'house', x: 110, y: 216, s: 0.9 }, { motif: 'tree', x: 390, y: 216 }, { motif: 'star', x: 330, y: 84, s: 0.6 }, { motif: 'flower', x: 250, y: 238, color: 'lavender' }],
  intro: ['"큰 삼각형과 작은 삼각형은 같은 모양일까요?" 시연 단추로 점판에 작은 삼각형이 만들어지고 이어서 큰 삼각형이 만들어지는 모습을 보여 준다. 곧은 선이 몇 개인지 세어 크기와 상관없이 삼각형이라고 말하게 한다. 크기가 다르면 다른 모양이라고 하는 학생이 있는지 살핀다.', '크기가 달라도 같은 모양일까요? 곧은 선을 세어 봐요.'],
  demo: { tool: 'shapes', options: { mode: 'geoboard', size: 4 }, sequence: [{ pts: [[0, 3], [2, 3], [1, 2]] }, { pts: [[0, 3], [3, 3], [1, 0]] }] },
  acts: [
    { id: 'a1', title: '활동 1. 크기와 방향이 다른 카드 나누기', minutes: 9, tool: 'shapes',
      task: '카드를 삼각형, 사각형, 원으로 나누어요. 크기가 달라도 곧은 선을 세어 봐요.',
      teacher: '"큰 카드와 작은 카드 가운데 어느 것이 삼각형이에요?" 둘 다 곧은 선이 세 개라고 말하게 한다. 크기 때문에 다른 칸에 놓는 학생에게는 곧은 선을 세어 보게 한다.',
      levels: CLSL,
      items: [cls('방향이 다른 카드를 삼각형, 사각형, 원으로 나누어 보세요.', [['triangle', '큰 깃발', 0, 30], ['triangle', '작은 깃발', 0, 210], ['square', '큰 타일', 1, 60], ['circle', '큰 쟁반', 2], ['circle', '작은 단추', 2]], BINS, 0.15),
        cls('이번에도 방향이 다른 카드를 나누어 보세요.', [['rectangle', '긴 엽서', 1, 15], ['rectangle', '높은 문', 1, 90], ['right-triangle', '삼각 샌드위치', 0, 120], ['circle', '바퀴', 2], ['square', '작은 손수건', 1, 25]], BINS, 0.18),
        cls('마지막으로 방향이 다른 카드를 나누어 보세요.', [['triangle', '삼각자', 0, 270], ['rectangle', '쪽지', 1, 45], ['circle', '동전', 2], ['obtuse-triangle', '넓은 삼각 모자', 0], ['square', '쿠션', 1, 10]], BINS, 0.2)] },
    { id: 'a2', title: '활동 2. 점판 모양의 이름 고르기', minutes: 9, tool: 'shapes',
      task: '점판의 모양을 보고 삼각형인지 사각형인지 고르세요.',
      teacher: '"곧은 선이 몇 개인지 세어 이름을 정해요." 기울어지거나 길쭉해도 곧은 선 수로 정한다고 짚는다. 길쭉한 사각형을 삼각형이라고 고르는 학생에게는 뾰족한 곳을 하나씩 세게 한다.',
      levels: GEORL,
      items: [geoRead('점판의 모양은 이름이 무엇인가요?', TRI2, '모양의 이름은 무엇인가요?', ['삼각형', '사각형'], 0, 0.12), geoRead('점판의 모양은 이름이 무엇인가요?', RECT1, '모양의 이름은 무엇인가요?', ['삼각형', '사각형'], 1, 0.1),
        geoRead('기울어진 점판 모양의 이름은 무엇인가요?', QUAD1, '모양의 이름은 무엇인가요?', ['삼각형', '사각형'], 1, 0.18), geoRead('위로 뾰족한 점판 모양의 이름은 무엇인가요?', TRI1, '모양의 이름은 무엇인가요?', ['삼각형', '사각형'], 0, 0.1)] },
    { id: 'a3', title: '활동 3. 점판에 크기가 다른 모양 만들기', minutes: 8, tool: 'shapes',
      task: '점판에 크기가 다른 삼각형과 사각형을 만들어요.',
      teacher: '"방금 만든 삼각형보다 더 큰 삼각형을 만들 수 있어요?" 점의 수는 같아도 점 사이가 멀면 더 크다고 보여 준다. 점 개수를 늘려 큰 모양을 만들려는 학생에게는 곧은 선이 세 개이면 점도 세 개라고 짚는다.',
      levels: GEOL,
      items: [geo('점판에서 가장 작은 삼각형을 만들어 보세요.', { shape: 'triangle' }, 0.12), geo('점판을 크게 쓰는 삼각형을 만들어 보세요.', { shape: 'triangle' }, 0.15), geo('세로로 길쭉한 직사각형을 만들어 보세요.', { shape: 'rectangle' }, 0.18)] },
  ],
  wrap: ['"크기가 달라도 모양 이름이 같을 수 있나요?" 큰 카드와 작은 카드를 나란히 놓아 말하게 한다. 출구 2번을 틀린 학생은 크기에 따라 모양 이름을 다르게 붙인 것이므로 다음 시간에 곧은 선을 세는 연습부터 한다.', [
    { type: 'choice', prompt: '큰 삼각형과 작은 삼각형은 어떤 모양인가요?', options: ['둘 다 삼각형이에요', '큰 것만 삼각형이에요'], answer: 0, difficulty: 0.1, explain: '크기가 달라도 곧은 선이 세 개이면 모두 삼각형이에요.' },
    { type: 'tool', tool: 'shapes', options: { mode: 'geoboard', size: 4, showCounts: false, readOnly: true, ask: { q: '모양의 이름은 무엇인가요?', choices: ['삼각형', '사각형'] } }, state: { pts: QUAD1 }, prompt: '그림의 모양은 삼각형일까요, 사각형일까요?', target: { pick: 1 }, difficulty: 0.18 },
    { type: 'tool', tool: 'shapes', options: { mode: 'geoboard', size: 4 }, prompt: '점판에 직사각형을 하나 만들어 보세요.', target: { shape: 'rectangle' }, difficulty: 0.12 },
  ]],
  ws: { title: '크기가 달라도 같은 모양', items: [
    { type: 'figure', prompt: '점판의 모양은 삼각형인지 사각형인지 쓰세요.', tool: 'shapes', options: { mode: 'geoboard', size: 4, showCounts: false }, figures: [{ state: { pts: TRI2 }, caption: BLANK }, { state: { pts: QUAD1 }, caption: BLANK }, { state: { pts: RECT1 }, caption: BLANK }], answer: '삼각형, 사각형, 사각형' },
    { type: 'choice', prompt: '삼각형이 아닌 것에 ○ 하세요.', options: ['큰 삼각 깃발', '작은 삼각자', '긴 엽서'], answer: '긴 엽서' },
    { type: 'table', prompt: '카드의 모양 이름을 쓰세요.', columns: ['카드', '곧은 선 수', '이름'], cells: [['기울어진 색종이', '', ''], ['거꾸로 놓은 삼각자', '', '']], answer: '4, 사각형, 3, 삼각형' },
    { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '큰 삼각형과 작은 삼각형은 곧은 선이 둘 다 ___ 개예요.', answer: '3' },
    { type: 'draw', prompt: '큰 사각형과 작은 사각형을 하나씩 그려 보세요.' },
  ], easy: { note: '크기와 방향이 달라도 곧은 선 수가 같으면 같은 모양이에요.', items: [
    { type: 'figure', prompt: '점판의 모양은 삼각형인지 사각형인지 쓰세요.', tool: 'shapes', options: { mode: 'geoboard', size: 4, showCounts: false }, figures: [{ state: { pts: TRI1 }, caption: BLANK }, { state: { pts: SQ1 }, caption: BLANK }], answer: '삼각형, 사각형' },
    { type: 'choice', prompt: '사각형에 ○ 하세요.', options: ['긴 엽서', '작은 삼각자'], answer: '긴 엽서' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '작은 삼각형도 곧은 선이 ___ 개예요.', answer: '3' },
    { type: 'draw', prompt: '작은 삼각형과 큰 삼각형을 그려 보세요.' },
  ] } },
  diff: { easy: '점판이 4줄이고 곧은 선 수가 보여 크기가 다른 모양을 만들기 쉬워요.', base: '점판이 5줄로 넓어지고 곧은 선 수 표시가 사라져요.', challenge: '점판이 6줄로 더 넓어져 크기가 매우 다른 모양을 만들 수 있어요.' },
  notes: '자주 보이는 어려움: ① 크기가 다르면 다른 모양이라고 한다 → 곧은 선을 센다. ② 길쭉한 사각형을 삼각형으로 읽는다 → 뾰족한 곳을 하나씩 센다. ③ 큰 모양을 만들려고 점을 더 많이 찍는다 → 점 개수는 곧은 선 수와 같다. 크기와 방향은 모양 이름과 관계없다는 것을 말로 정리한다.',
}));
// ───────────────────────────── 11차시 (core · shapes application) ─────────────────────────────
L.push(lesson(11, {
  std: SH,
  title: '모양 조각으로 그림 꾸미고 이야기하기',
  objective: '삼각형, 사각형, 원 조각으로 그림을 꾸미고, 쓰인 모양과 물건 모양을 이야기할 수 있다.',
  desc: 'a paper house made from a triangle roof, rectangle walls and a round window, beside a small paper tree made from a circle and a rectangle',
  text: '모양으로 꾸며요',
  layers: [{ motif: 'house', x: 110, y: 216, s: 1.0 }, { motif: 'tree', x: 390, y: 216 }, { motif: 'flower', x: 250, y: 238 }, { motif: 'bird', x: 300, y: 84 }],
  intro: ['"삼각형 지붕, 사각형 벽, 원 창문으로 집을 꾸밀 수 있어요." 시연 단추로 칠교 조각이 맞추어져 큰 삼각형이 되는 모습을 보여 준다. 조각을 합치면 새 모양이 된다는 것을 말해 준다. 조각이 겹치거나 틈이 생기는 것을 알아채는 학생을 칭찬한다.', '삼각형, 사각형, 원으로 그림을 꾸며 보고 어떤 모양을 썼는지 말해 봐요.'],
  demo: { tool: 'shapes', options: { mode: 'tangram', figure: 'square3', lines: true }, sequence: [{ fit: true }] },
  acts: [
    { id: 'a1', title: '활동 1. 칠교 조각으로 큰 모양 채우기', minutes: 9, tool: 'shapes',
      task: '여러 조각을 맞추어 그림자 자리를 채워요. 조각이 안 맞으면 돌려 봐요.',
      teacher: '"조각이 몇 개 들어갈까요? 어느 조각이 가장 클까요?" 모양을 돌려 보며 맞추게 한다. 큰 조각부터 놓지 않고 작은 조각부터 채우려는 학생에게는 가장 큰 조각을 먼저 놓아 보게 한다.',
      levels: TANGL,
      items: [tang('작은 삼각형 두 개와 중간 삼각형 하나를 모아 정사각형 자리를 채워 보세요.', 'square3', 0.2), tang('삼각형 조각 세 개를 모아 큰 삼각형 자리를 채워 보세요.', 'triangle3', 0.22),
        tang('삼각형 조각 두 개를 이어 비스듬한 사각형 자리를 채워 보세요.', 'parallelogram2', 0.25)] },
    { id: 'a2', title: '활동 2. 생활 속 물건을 모양별로 나누기', minutes: 9, tool: 'mindmap',
      task: '물건 카드를 삼각형, 사각형, 원 모양끼리 나누어요.',
      teacher: '"우리 반에서 본 물건은 어떤 모양이에요?" 생활 속 물건을 모양으로 이름 붙이게 한다. 모서리가 둥근 책을 원이라고 하는 학생에게는 곧은 선이 네 개인지 세어 보게 한다.',
      levels: CARD,
      items: [sortCards('물건을 모양에 따라 나누어 보세요.', '물건 모양', BINS, [['삼각자', '삼각형'], ['창문', '사각형'], ['동전', '원'], ['공책', '사각형'], ['접시', '원'], ['삼각 깃발', '삼각형']], 0.15),
        sortCards('집 꾸미기 물건을 모양에 따라 나누어 보세요.', '꾸미기 물건', BINS, [['지붕', '삼각형'], ['벽', '사각형'], ['둥근 창문', '원'], ['문', '사각형'], ['굴뚝 연기 구름', '원'], ['지붕 장식', '삼각형']], 0.18),
        sortCards('교실 물건을 모양에 따라 나누어 보세요.', '교실 물건', BINS, [['시계', '원'], ['칠판', '사각형'], ['삼각자', '삼각형'], ['색종이', '사각형'], ['풀 뚜껑', '원'], ['표지판', '삼각형']], 0.18)] },
    pair('a3', '활동 3. 짝과 모양으로 꾸민 그림 말하기', 8, '짝과 칠교 조각으로 그림을 꾸미고 어떤 모양이 몇 개 쓰였는지 서로 말해요.',
      '짝끼리 칠교 조각으로 집이나 나무를 꾸며 보게 한다. "삼각형 조각이 두 개 들어갔어요"처럼 쓰인 모양과 수를 서로 말하게 한다. 조각을 포개거나 틈이 생기면 모양이 어떻게 달라지는지 이야기를 나누게 한다.',
      ['짝과 함께 조각을 놓아 큰 모양을 채우고 "다 했어요"를 누르세요.', '쓰인 삼각형 조각이 몇 개인지 짝과 세어 보고 "다 했어요"를 누르세요.', '만든 모양이 어떤 물건을 닮았는지 말하고 "다 했어요"를 누르세요.'], 'shapes',
      { easy: { mode: 'tangram', figure: 'square2', lines: true }, base: { mode: 'tangram', figure: 'triangle3' }, challenge: { mode: 'tangram', figure: 'square3' } }),
  ],
  wrap: ['"오늘 쓴 모양 가운데 어떤 모양이 가장 많이 들어갔어요?" 쓰인 조각의 수를 세어 말하게 한다. 출구 1번을 틀린 학생은 모양을 합치면 새 모양이 된다는 것을 놓친 것이므로 다음 시간에 조각을 직접 맞추어 보게 한다.', [
    { type: 'choice', prompt: '삼각형 조각 두 개를 붙여 만들 수 있는 모양은 무엇인가요?', options: ['정사각형', '원'], answer: 0, difficulty: 0.15, explain: '삼각형 조각 두 개를 붙이면 정사각형이나 큰 삼각형을 만들 수 있어요.' },
    { type: 'tool', tool: 'shapes', options: { mode: 'tangram', figure: 'square2', lines: true }, prompt: '삼각형 조각 두 개를 붙여 정사각형 자리를 채워 보세요.', target: { fit: true }, difficulty: 0.15 },
    { type: 'choice', prompt: '둥근 창문은 어떤 모양인가요?', options: ['삼각형', '사각형', '원'], answer: 2, difficulty: 0.08, explain: '둥근 창문은 곧은 선이 없는 원 모양이에요.' },
  ]],
  ws: { title: '모양으로 그림 꾸미기', items: [
    { type: 'figure', prompt: '조각으로 채운 모양은 무엇인지 쓰세요.', tool: 'shapes', options: { mode: 'tangram' }, figures: [{ options: { figure: 'square3' }, caption: BLANK }, { options: { figure: 'triangle3' }, caption: BLANK }], answer: '사각형, 삼각형' },
    { type: 'table', prompt: '집을 꾸민 모양에 ○ 하세요.', columns: ['집의 부분', '삼각형', '사각형', '원'], cells: [['지붕', '', '', ''], ['벽', '', '', ''], ['둥근 창문', '', '', '']], answer: '지붕-삼각형, 벽-사각형, 둥근 창문-원' },
    { type: 'choice', prompt: '삼각형 모양 물건에 ○ 하세요.', options: ['삼각 깃발', '접시', '공책'], answer: '삼각 깃발' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '작은 삼각형 조각 2개를 붙이면 ___ 개의 조각이 한 모양이 돼요.', answer: '2' },
    { type: 'draw', prompt: '삼각형, 사각형, 원을 한 개씩 써서 그림을 꾸며 보세요.' },
  ], easy: { note: '삼각형은 곧은 선이 3개, 사각형은 4개, 원은 곧은 선이 없어요.', items: [
    { type: 'figure', prompt: '조각으로 채운 모양은 무엇인지 쓰세요.', tool: 'shapes', options: { mode: 'tangram' }, figures: [{ options: { figure: 'triangle2' }, caption: BLANK }], answer: '삼각형' },
    { type: 'choice', prompt: '원 모양 물건에 ○ 하세요.', options: ['동전', '공책'], answer: '동전' },
    { type: 'choice', prompt: '사각형 모양 물건에 ○ 하세요.', options: ['공책', '접시'], answer: '공책' },
    { type: 'draw', prompt: '삼각형과 사각형으로 집을 그려 보세요.' },
  ] } },
  diff: { easy: '칠교 그림자 안에 조각 경계선이 보이고 물건 카드는 맞는 칸에 놓으면 바로 알려 줘요.', base: '경계선 없이 조각을 맞추고 카드를 스스로 나누어요.', challenge: '조각을 돌리고 뒤집어야 하는 모양을 채워요.' },
  notes: '자주 보이는 어려움: ① 조각을 억지로 넣으려 한다 → 한 번 돌려 본다. ② 모서리가 둥근 물건을 사각형으로 세는 것을 주저한다 → 곧은 선이 네 개이면 사각형이다. ③ 조각을 합치면 이름이 바뀐다는 것을 놓친다 → 삼각형 둘이 정사각형이 되는 것을 직접 맞추어 본다.',
}));
// ───────────────────────────── 12차시 (wrap) ─────────────────────────────
L.push(lesson(12, {
  std: [...SH, ...CK],
  title: '모양 나누기와 시계 읽기 모아서 점검하기',
  objective: '삼각형, 사각형, 원을 나누고 몇 시와 몇 시 30분을 읽으며, 단원에서 배운 것을 스스로 점검할 수 있다.',
  desc: 'a cheerful paper town square with a triangle-roof house, a rectangle door, a round clock tower and children checking the time',
  text: '모양과 시각',
  layers: [{ motif: 'house', x: 110, y: 216, s: 1.0 }, { motif: 'tree', x: 400, y: 216 }, { motif: 'star', x: 150, y: 90, s: 0.6 }, { motif: 'flower', x: 250, y: 238 }],
  intro: ['"우리는 삼각형, 사각형, 원을 배웠어요. 시계 읽기도 배웠어요." 시연 단추로 시계가 6시에서 6시 30분으로 바뀌는 모습을 보여 준다. "무엇이 쉬웠고 무엇이 어려웠어요?" 하고 묻고, 한 가지씩 손을 들어 보게 한다. 곧은 선 수를 세던 것과 짧은바늘을 먼저 보던 것을 떠올리게 한다.', '지금까지 배운 모양과 시각을 한 번 더 점검해 봐요.'],
  demo: { tool: 'clock', options: { minuteStep: 30, showDigital: true }, sequence: [{ h: 6, m: 0 }, { h: 6, m: 30 }] },
  acts: [
    { id: 'a1', title: '활동 1. 모양을 곧은 선 수로 나누기', minutes: 8, tool: 'shapes',
      task: '카드를 삼각형, 사각형, 원으로 나누어요. 곧은 선이 몇 개인지 세어 봐요.',
      teacher: '"곧은 선이 몇 개인지 세어 보세요. 크기나 방향은 상관없어요." 기울어진 카드를 틀리게 놓는 학생에게는 종이를 돌려 곧은 선 수를 세게 한다. 단원 처음에 틀렸던 것이 이번에는 맞았는지 스스로 점검하게 한다.',
      levels: CLSL,
      items: [cls('카드를 삼각형, 사각형, 원으로 나누어 보세요.', [['triangle', '삼각 깃발', 0, 60], ['rectangle', '공책', 1, 10], ['circle', '동전', 2], ['rhombus', '다이아 카드', 1], ['circle', '바퀴', 2], ['right-triangle', '삼각자', 0, 180]], BINS, 0.2),
        cls('이번에도 카드를 나누어 보세요.', [['square', '기울인 쿠션', 1, 35], ['triangle', '표지판', 0], ['circle', '접시', 2], ['trapezoid', '양동이 뚜껑', 1], ['obtuse-triangle', '넓은 지붕', 0]], BINS, 0.22),
        cls('마지막으로 카드를 나누어 보세요.', [['circle', '시계', 2], ['rectangle', '창문', 1, 90], ['triangle', '삼각 지붕', 0, 200], ['parallelogram', '리본', 1], ['circle', '풍선', 2]], BINS, 0.22)] },
    { id: 'a2', title: '활동 2. 정각과 몇 시 30분 읽기', minutes: 9, tool: 'clock',
      task: '시계를 보고 몇 시인지 읽어요. 긴바늘을 먼저 보고 짧은바늘로 시를 읽어요.',
      teacher: '"긴바늘이 12예요, 6이에요? 그다음 짧은바늘이 지나온 숫자를 읽어요." 읽는 순서를 소리 내어 말하게 한다. 짧은바늘이 두 숫자 사이일 때 뒤의 숫자를 읽는 학생에게는 지나온 숫자를 짚게 한다.',
      levels: HALF,
      items: [clkRead('시계를 보고 몇 시인지 골라 보세요.', 8, 0, ['8시 30분', '8시', '12시'], 1, 0.15), clkRead('시계를 보고 몇 시인지 골라 보세요.', 1, 30, ['1시', '1시 30분', '2시 30분'], 1, 0.18),
        clkRead('시계를 보고 몇 시인지 골라 보세요.', 11, 0, ['12시', '11시', '11시 30분'], 1, 0.15), clkRead('시계를 보고 몇 시인지 골라 보세요.', 5, 30, ['6시 30분', '5시', '5시 30분'], 2, 0.2)] },
    { id: 'a3', title: '활동 3. 칠교 조각으로 모양 만들기', minutes: 9, tool: 'shapes',
      task: '칠교 조각을 맞추어 그림자 자리를 채워요. 어렵다면 한 조각을 돌려 봐요.',
      teacher: '"어떤 조각부터 놓을까요? 조각을 돌려도 곧은 선의 수는 그대로예요." 단원에서 배운 곧은 선 수를 떠올리며 맞추게 한다. 조각이 안 맞는다고 포기하는 학생에게는 한 번 돌리거나 뒤집어 보게 한다.',
      levels: TANGL,
      items: [tang('삼각형 조각 두 개를 맞추어 네모 자리를 채워 보세요.', 'square2', 0.2), tang('삼각형 조각 세 개로 큰 삼각형 자리를 채워 보세요. 한 조각은 중간 크기예요.', 'triangle3', 0.22),
        tang('작은 조각 둘을 이어 세모 자리를 채워 보세요.', 'triangle2', 0.2)] },
  ],
  wrap: ['"이 단원에서 새로 알게 된 것을 한 가지씩 말해 봐요." 곧은 선으로 모양을 나누는 것, 짧은바늘로 시를 읽는 것, 긴바늘 6이 30분인 것 가운데 하나를 말하게 한다. 출구에서 틀린 문항은 그 차시로 돌아가 다시 풀게 한다.', [
    { type: 'choice', prompt: '곧은 선이 네 개인 모양은 무엇인가요?', options: ['삼각형', '사각형', '원'], answer: 1, difficulty: 0.1, explain: '곧은 선이 네 개인 모양은 모두 사각형이에요.' },
    { type: 'tool', tool: 'clock', options: { readOnly: true, choices: ['7시', '7시 30분', '6시 30분'] }, state: { h: 7, m: 30 }, prompt: '시계를 보고 몇 시인지 고르세요.', target: { pick: 1, h: 7, m: 30 }, difficulty: 0.18 },
    { type: 'choice', prompt: '짧은바늘이 3과 4 사이에 있고 긴바늘이 6이에요. 몇 시인가요?', options: ['3시 30분', '4시 30분'], answer: 0, difficulty: 0.2, explain: '짧은바늘이 3을 지나왔으니 시는 3이에요. 긴바늘이 6이니 3시 30분이에요.' },
  ]],
  ws: { title: '모양과 시각 정리', items: [
    { type: 'table', prompt: '모양의 곧은 선 수와 이름을 쓰세요.', columns: ['곧은 선 수', '이름'], cells: [['3개', ''], ['4개', ''], ['없어요', '']], answer: '삼각형, 사각형, 원' },
    { type: 'figure', prompt: '시계를 보고 몇 시인지 쓰세요.', tool: 'clock', options: { minuteStep: 30 }, figures: [{ state: { h: 2, m: 0 }, caption: BLANK }, { state: { h: 2, m: 30 }, caption: BLANK }, { state: { h: 9, m: 30 }, caption: BLANK }], answer: '2시, 2시 30분, 9시 30분' },
    { type: 'choice', prompt: '둥근 모양에 ○ 하세요.', options: ['시계', '삼각자', '공책'], answer: '시계' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '긴바늘이 6을 가리키면 ___ 분이에요.', answer: '30' },
    { type: 'short', prompt: '이 단원에서 가장 어려웠던 것과 쉬웠던 것을 한 가지씩 써 보세요.' },
  ], easy: { note: '곧은 선 수로 모양을 나누고, 짧은바늘로 시를 읽어요.', items: [
    { type: 'table', prompt: '모양의 곧은 선 수와 이름을 쓰세요.', columns: ['곧은 선 수', '이름'], cells: [['3개', ''], ['4개', '']], answer: '삼각형, 사각형' },
    { type: 'figure', prompt: '시계를 보고 몇 시인지 쓰세요.', tool: 'clock', options: { minuteStep: 30, showMinuteNumbers: true }, figures: [{ state: { h: 4, m: 0 }, caption: BLANK }, { state: { h: 4, m: 30 }, caption: BLANK }], answer: '4시, 4시 30분' },
    { type: 'choice', prompt: '원 모양 물건에 ○ 하세요.', options: ['접시', '공책'], answer: '접시' },
    { type: 'draw', prompt: '이 단원에서 배운 모양을 하나 그려 보세요.' },
  ] } },
  diff: { easy: '시계 바깥에 분 숫자가 보이고, 카드를 맞는 칸에 넣으면 바로 알려 주며, 칠교 조각 경계선이 보여요.', base: '숫자 도움과 경계선 없이 읽고 나누고 맞추어요.', challenge: '작은 눈금이 없는 시계로 읽고, 칠교 조각을 돌려 가며 맞추어요.' },
  notes: '자주 보이는 어려움: ① 크기와 방향에 속아 모양 이름을 잘못 붙인다 → 곧은 선 수를 센다. ② 긴바늘의 6을 시로 읽는다 → 짧은바늘이 시, 긴바늘 6은 30분. ③ 짧은바늘이 두 숫자 사이일 때 뒤의 숫자를 읽는다 → 지나온 숫자를 읽는다. 자기 점검에서 헷갈린다고 한 차시는 다시 풀게 한다.',
}));
// @@NEXT@@
PaperLessons.registerUnit({
  id: UID, schema: 'edu-unit.v1', catalogUnit: CU, grade: 1, subject: '수학', unitTitle: UT,
  flow: '1~3차시는 주변 물건을 곧은 선 수와 둥근 모양으로 삼각형, 사각형, 원으로 나누고, 점판에 직접 만들며, 기울여도 곧은 선 수는 그대로임과 모양이 달라도 곧은 선이 네 개이면 사각형임을 칠교 조각 맞추기로 확인합니다. 4~8차시는 시계의 짧은바늘이 시, 긴바늘이 분을 알려 준다는 것에서 출발해 정각을 읽고 만들며 하루 일과 순서를 놓고, 긴바늘이 6일 때 몇 시 30분을 읽고 만들고, 숫자 시계와 짝지으며, 짧은바늘이 두 숫자 사이에 있을 때 지나온 숫자를 시로 읽도록 짚습니다. 9~11차시는 모양의 곧은 선과 뾰족한 곳 수를 말하고, 크기와 방향이 달라도 같은 모양임을 알고, 칠교 조각과 생활 속 물건으로 모양을 꾸며 말합니다. 12차시에서 모양 나누기와 시계 읽기를 함께 점검합니다.',
  refs: {},
  lessons: L,
});
})();
