/* 2학년 2학기 6. 규칙 찾기 — 단원 파일(차시 11개, 기존 차시 없음).
 * 1학년 2학기 5단원(되풀이되는 색·모양, 1·2·5씩 커지는 수)보다 한 단계 올려, 색과 모양이 함께 바뀌는 무늬·개수가 늘어나는 쌓은 모양·
 * 덧셈표와 곱셈표·생활 속(달력·요일·신호) 규칙을 찾고, 내가 정한 규칙으로 무늬와 수 배열을 만든다.
 * 성취기준 [2수02-01](물체·무늬·수 배열에서 규칙 찾아 여러 방법으로 나타내기), [2수02-02](스스로 정한 규칙으로 배열하기).
 * 확인 필요: 없음(units-index 의 두 성취기준 그대로, plan 제목·topic 도 단원 제목과 어긋나지 않음). 교구에 '쌓기나무' 판이 없어 쌓은 모양은
 *   pattern 의 늘어나는 조각(k)으로, 덧셈표·곱셈표는 multiply(table)로 다룬다.
 * 흐름: 색·모양이 함께 되풀이되는 무늬(1) → 개수가 늘어나는 모양과 수 배열(2) → 덧셈표 규칙(3) → 곱셈표 규칙(4)
 *      → 같은 규칙을 모양·글자·수로 바꿔 나타내기(5) → 달력·요일·신호 같은 생활 속 규칙(6) → 내가 정한 묶음으로 무늬 만들기(7)
 *      → 정한 수만큼 변하는 수 배열 만들기(8) → 규칙 하나를 바꿔 새 무늬 만들기(9) → 친구 규칙 맞히고 고치기(10) → 단원 정리(11).
 */
(function () {
const UID = 'g2-math-2-06', CU = 'g2-수학-2학기-6', UT = '6. 규칙 찾기';
const S1 = ['[2수02-01]'], S2 = ['[2수02-02]'];
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
  grade: 2, subject: '수학', unitTitle: UT,
  title: d.title, objective: d.objective, standards: n <= 6 ? S1 : S2, minutes: 40, formats: ['chromebook', 'projector', 'print'],
  illustration: ill(d.desc, d.text, d.layers),
  stages: [
    Object.assign({ id: 'intro', title: '도입', minutes: 7, teacher: d.intro[0], student: d.intro[1] }, d.demo ? { demo: d.demo } : {}),
    { id: 'main', title: '전개', minutes: 26, activities: d.acts },
    { id: 'wrapup', title: '정리', minutes: 7, teacher: d.wrap[0], exitTicket: [...d.wrap[1], { type: 'mood', prompt: '오늘 공부는 어땠나요?' }] },
  ],
  worksheet: d.ws, differentiation: d.diff, teacherNotes: d.notes,
});
// 카드 판(mindmap): 쉬움은 맞는 곳에 초록 테두리
const ML = (mode, topic) => ({ easy: { mode, topic, live: true }, base: { mode, topic }, challenge: { mode, topic } });
const srt = (prompt, topic, map, d, ex) => {
  const names = Object.keys(map); const cs = []; const tgt = {};
  names.forEach((n) => { tgt[n] = []; });
  const max = Math.max(...names.map((n) => map[n].length));
  for (let r = 0; r < max; r++) names.forEach((n) => { if (r < map[n].length) { const id = `k${cs.length + 1}`; cs.push({ id, text: map[n][r] }); tgt[n].push(id); } });
  return Object.assign({ prompt, difficulty: d, toolOptions: { mode: 'sort', topic, slots: names, cards: cs }, target: { sort: tgt } }, ex || {});
};
const pk = (prompt, topic, list, d, basket, ex) => {
  const cs = list.map((c, i) => ({ id: `p${i + 1}`, text: c[0] }));
  return Object.assign({ prompt, difficulty: d, toolOptions: { mode: 'pick', topic, basket: basket || '고른 것', cards: cs }, target: { pick: list.map((c, i) => (c[1] ? `p${i + 1}` : null)).filter(Boolean) } }, ex || {});
};
const mt = (prompt, topic, pairs, more, d, ex) => {
  const slots = pairs.map((p, i) => ({ id: `s${i + 1}`, label: p[0] }));
  const cards = pairs.map((p, i) => ({ id: `c${i + 1}`, text: p[1] })).concat((more || []).map((t, i) => ({ id: `x${i + 1}`, text: t })));
  return Object.assign({ prompt, difficulty: d, toolOptions: { mode: 'match', topic, slots, cards }, target: { match: Object.fromEntries(pairs.map((p, i) => [`s${i + 1}`, `c${i + 1}`])) } }, ex || {});
};
// 규칙 판(pattern): 조각은 'circle:rose'(모양:색), 수, 글자 또는 { s, c, k(개수), r(각도) }
const PL = { easy: { perRow: 6 }, base: {}, challenge: {} };
const fill = (prompt, seq, target, d, ex, o) => Object.assign({ prompt, toolOptions: Object.assign({ seq }, o || {}), target: { fill: target }, difficulty: d }, ex || {});
const rule = (prompt, seq, choices, k, d, ex, q) => Object.assign({ prompt, toolOptions: { mode: 'rule', seq, choices, question: q || '어떤 규칙으로 늘어놓았나요?' }, target: { pick: k }, difficulty: d }, ex || {});
const odd = (prompt, seq, k, d, ex) => Object.assign({ prompt, toolOptions: { mode: 'odd', seq }, target: { odd: k }, difficulty: d }, ex || {});
const make = (prompt, palette, length, target, d, ex, o) => Object.assign({ prompt, toolOptions: Object.assign({ mode: 'make', palette, length }, o || {}), target, difficulty: d }, ex || {});
const makeNum = (prompt, length, start, step, d, ex) => Object.assign({ prompt, toolOptions: { mode: 'make', input: 'number', length, start }, target: { rule: 'add', step }, difficulty: d }, ex || {});
// 덧셈표·곱셈표(multiply table)
const TL = { easy: { mode: 'table' }, base: { mode: 'table' }, challenge: { mode: 'table' } };
const tbl = (prompt, op, rows, cols, blanks, d, ex) => Object.assign({ prompt, toolOptions: { mode: 'table', op, rowsOf: rows, colsOf: cols, blanks }, target: { cells: true }, difficulty: d }, ex || {});
const K = (s, c, k) => ({ s, c, k });
// 활동지 그림
const wpat = (prompt, seq, caption, answer) => ({ type: 'figure', wide: true, prompt, tool: 'pattern', figures: [{ options: { seq }, caption }], answer });
const wtbl = (prompt, op, rows, cols, blanks, caption, answer) => ({ type: 'figure', wide: true, prompt, tool: 'multiply', figures: [{ options: { mode: 'table', op, rowsOf: rows, colsOf: cols, blanks }, caption }], answer });
const xt = (tool, options, prompt, target, d) => ({ type: 'tool', tool, options, prompt, target, difficulty: d });

PaperLessons.registerUnit({
  id: UID, schema: 'edu-unit.v1', catalogUnit: CU,
  grade: 2, subject: '수학', unitTitle: UT,
  flow: '1학년에서 배운 되풀이되는 색·모양과 1·2·5씩 커지는 수에서 출발해, 첫 시간에 색과 모양이 함께 바뀌는 무늬와 돌아가는 화살표에서 한 묶음을 끊어 읽습니다. 2~4차시는 개수가 늘어나는 쌓은 모양과 수 배열, 덧셈표의 가로·세로·비스듬한 규칙, 곱셈표에서 단마다 달라지는 규칙을 찾습니다. 5~6차시는 같은 규칙을 모양·글자·수로 바꾸어 나타내고, 달력·요일·신호등·버스 시각 같은 생활 속 규칙을 되풀이되는 규칙과 커지는 규칙으로 나눕니다. 7~10차시는 내가 정한 묶음으로 무늬를 만들고, 정한 수만큼 변하는 수 배열을 만들며, 규칙 하나를 바꾸어 새 무늬를 만들고, 친구가 만든 줄에서 규칙을 맞히고 틀린 곳을 고칩니다. 11차시에서 규칙의 종류를 정리하고 내가 정한 규칙을 소개하며 단원을 마칩니다.',
  refs: {},
  lessons: [
    // ───────────────────────────── 1차시 (intro) ─────────────────────────────
    lesson(1, {
      title: '색과 모양이 함께 바뀌는 무늬의 다음 조각 찾기',
      objective: '색과 모양이 함께 되풀이되거나 돌아가는 무늬에서 한 묶음을 찾아 빈칸에 알맞은 조각을 넣고, 규칙을 말로 나타낼 수 있다.',
      desc: 'a long paper-cut border of colorful circles, squares and stars repeating along a classroom wall with children pointing at the pattern',
      text: '무늬의 규칙을 찾아요', layers: [{ motif: 'house', x: 110, y: 214 }, { motif: 'flower', x: 380, y: 228, color: 'rose' }],
      intro: ['"교실 벽 장식 띠의 다음 조각은 무엇일까요?" 분홍 동그라미, 파란 네모가 번갈아 놓인 띠를 보이고 바로 앞 조각을 따라 놓지 않도록 "몇 개가 한 묶음일까요?" 하고 묻는다. 1학년 때는 색 하나, 모양 하나만 봤지만 오늘은 색과 모양이 함께 바뀌는 무늬도 있다고 알려 준다. 앞 조각만 보고 따라 하는 학생에게는 묶음을 손으로 끊어 읽게 한다.', '교실이나 집에서 되풀이되는 무늬(타일, 옷 무늬)를 하나 떠올려 말해 봐요.'],
      acts: [
        { id: 'a1', title: '활동 1. 빈칸에 알맞은 조각 넣기', minutes: 10, tool: 'pattern',
          task: '빈칸을 누르고 아래 조각 단추로 채워요. 몇 개가 한 묶음인지 끊어 읽어 봐요.',
          teacher: '"한 묶음은 몇 개예요? 묶음마다 손으로 끊어 보세요." 바로 앞 조각을 그대로 따라 놓는 학생에게는 "처음 묶음으로 돌아가요"라고 말해 준다. 색과 모양이 함께 바뀌는 줄에서는 색만 먼저, 모양만 먼저 읽어 보게 한다.',
          levels: PL,
          items: [
            fill('분홍 동그라미와 파란 네모가 번갈아 놓여요. 빈칸에 알맞은 조각을 넣으세요.', ['circle:rose', 'square:sky', 'circle:rose', 'square:sky', 'circle:rose', null], ['square:sky'], 0.05, null, { palette: ['circle:rose', 'square:sky', 'triangle:mint'] }),
            fill('별, 하트, 하트가 한 묶음으로 되풀이돼요. 빈칸 두 곳을 채워 보세요.', ['star:buttercup', 'heart:rose', 'heart:rose', 'star:buttercup', 'heart:rose', 'heart:rose', null, null, 'heart:rose'], ['star:buttercup', 'heart:rose'], 0.15),
            fill('모양은 세모와 네모가 번갈아, 색은 세 가지가 차례로 바뀌어요. 빈칸을 채워 보세요.', ['triangle:mint', 'square:peach', 'triangle:lavender', 'square:mint', 'triangle:peach', 'square:lavender', 'triangle:mint', null, null], ['square:peach', 'triangle:lavender'], 0.28,
              { predict: { q: '일곱째 조각은 첫째 조각과 같을까요?', options: ['같아요', '달라요'], answer: 0 }, conclude: '모양은 둘, 색은 셋씩 되풀이되어 여섯 칸마다 처음으로 돌아와요.' }),
            fill('화살표가 한 칸마다 직각만큼 돌아요. 빈칸 두 곳에 알맞은 화살표를 넣으세요.', [{ s: 'arrow', c: 'peach' }, { s: 'arrow', c: 'peach', r: 90 }, { s: 'arrow', c: 'peach', r: 180 }, { s: 'arrow', c: 'peach', r: 270 }, { s: 'arrow', c: 'peach' }, { s: 'arrow', c: 'peach', r: 90 }, null, null], [{ s: 'arrow', c: 'peach', r: 180 }, { s: 'arrow', c: 'peach', r: 270 }], 0.3, { extra: true }),
          ] },
        { id: 'a2', title: '활동 2. 규칙을 말로 고르기', minutes: 8, tool: 'pattern',
          task: '줄을 보고 어떤 규칙인지 알맞은 말을 골라요.',
          teacher: '"어떤 것이 되풀이되나요? 모양인가요, 색인가요, 수인가요?" 보기 가운데 "점점 늘어나요"를 되풀이 무늬에 고르는 학생에게는 처음 두 묶음을 나란히 겹쳐 보이게 한다.',
          levels: { easy: { mode: 'rule' }, base: { mode: 'rule' }, challenge: { mode: 'rule' } },
          items: [
            rule('이 무늬는 어떤 규칙인지 골라 보세요.', ['circle:sky', 'circle:sky', 'square:rose', 'circle:sky', 'circle:sky', 'square:rose'], ['동그라미 둘, 네모 하나가 되풀이돼요', '동그라미와 네모가 번갈아 나와요', '네모가 점점 늘어나요'], 0, 0.12),
            rule('이 수 배열은 어떤 규칙인지 골라 보세요.', [20, 18, 16, 14, 12], ['2씩 작아져요', '2씩 커져요', '20이 되풀이돼요'], 0, 0.18),
            rule('이 줄은 어떤 규칙인지 골라 보세요.', ['star:rose', 'star:sky', 'star:buttercup', 'star:rose', 'star:sky', 'star:buttercup'], ['분홍, 파랑, 노랑이 차례로 되풀이돼요', '분홍과 파랑이 번갈아 나와요', '별이 점점 많아져요'], 0, 0.22),
          ] },
        { id: 'a3', title: '활동 3. 규칙에 맞지 않는 조각 찾기', minutes: 8, tool: 'pattern',
          task: '규칙에 맞지 않는 조각을 하나 눌러요. 묶음을 끊어 읽으면 어디서 어긋나는지 보여요.',
          teacher: '"어느 칸에서 처음으로 묶음이 달라지나요?" 맨 마지막 조각만 틀렸다고 보는 학생에게는 처음부터 한 묶음씩 끊어 읽게 한다. 수 배열에서는 이웃한 두 수의 차이를 차례로 적게 한다.',
          levels: { easy: { mode: 'odd' }, base: { mode: 'odd' }, challenge: { mode: 'odd' } },
          items: [
            odd('규칙에 맞지 않는 조각을 하나 찾아 눌러 보세요.', ['square:mint', 'circle:peach', 'square:mint', 'circle:peach', 'circle:peach', 'circle:peach', 'square:mint', 'circle:peach'], 4, 0.18),
            odd('수 배열에서 규칙에 맞지 않는 수를 찾아 눌러 보세요.', [4, 8, 12, 15, 20, 24], 3, 0.22),
            odd('규칙에 맞지 않는 조각을 하나 찾아 눌러 보세요. 하트, 하트, 별이 되풀이돼요.', ['heart:rose', 'heart:rose', 'star:sky', 'heart:rose', 'star:sky', 'star:sky', 'heart:rose', 'heart:rose', 'star:sky'], 4, 0.28, { conclude: '하트, 하트, 별을 한 묶음으로 끊어 읽으면 다섯째 칸은 하트여야 해요.' }),
          ] },
      ],
      wrap: ['"무늬에서 규칙을 찾을 때 무엇부터 해요?" 같은 묶음이 처음 나오는 곳까지 끊어 읽는다는 말을 학생 입으로 정리한다. 출구 1번을 틀린 학생은 바로 앞 조각을 따라 놓는지, 2번을 틀린 학생은 묶음의 길이를 잘못 세는지 다음 시간에 먼저 살핀다.', [
        xt('pattern', { seq: ['square:peach', 'circle:mint', 'circle:mint', 'square:peach', 'circle:mint', 'circle:mint', 'square:peach', null, null] }, '빈칸 두 곳에 알맞은 조각을 넣으세요.', { fill: ['circle:mint', 'circle:mint'] }, 0.15),
        { type: 'choice', prompt: '"빨강, 노랑, 노랑"이 되풀이될 때 다음에 올 색은 무엇인가요? (빨강, 노랑, 노랑, 빨강, 노랑, ?)', options: ['빨강', '노랑'], answer: 1, difficulty: 0.15, explain: '빨강 하나, 노랑 둘이 한 묶음이라서 다섯째 칸 다음은 노랑이에요.' },
      ]],
      ws: {
        title: '무늬의 규칙 찾기',
        items: [
          wpat('규칙을 찾아 빈칸에 알맞은 모양을 그리세요.', ['circle:rose', 'triangle:mint', 'triangle:mint', 'circle:rose', 'triangle:mint', null, null], '', '세모, 동그라미'),
          wpat('색과 모양이 함께 바뀌는 무늬예요. 빈칸에 알맞은 모양을 그리세요.', ['star:rose', 'heart:sky', 'star:buttercup', 'heart:rose', 'star:sky', 'heart:buttercup', null, null], '', '별(분홍), 하트(파랑)'),
          { type: 'choice', prompt: '20, 18, 16, 14의 규칙에 ○ 하세요.', options: ['2씩 커져요', '2씩 작아져요', '20이 되풀이돼요'], answer: '2씩 작아져요' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '무늬의 규칙을 찾으려면 같은 ______이 처음 나오는 곳까지 끊어 읽어요.', answer: '묶음' },
          { type: 'short', prompt: '위 1번 무늬의 규칙을 말로 써 보세요.' },
        ],
        easy: { note: '처음부터 몇 개씩 끊어 읽어 봐요. 같은 묶음이 다시 나오면 그것이 규칙이에요.', items: [
          wpat('빈칸에 알맞은 모양을 그리세요.', ['circle:rose', 'square:sky', 'circle:rose', 'square:sky', null], '', '동그라미'),
          wpat('빈칸에 알맞은 수를 쓰세요.', [10, 20, 30, null, 50], '', '40'),
          { type: 'choice', prompt: '5, 10, 15, 20의 규칙에 ○ 하세요.', options: ['5씩 커져요', '1씩 커져요'], answer: '5씩 커져요' },
          { type: 'draw', prompt: '동그라미와 네모로 규칙 무늬를 그려 보세요.' },
        ] },
      },
      diff: { easy: '한 줄에 조각이 6개씩 크게 보이고, 규칙 고르기와 틀린 조각 찾기부터 쉽게 시작해요.', base: '무늬의 빈칸 두 곳을 채우고 색과 모양이 함께 바뀌는 줄도 읽어요.', challenge: '돌아가는 화살표와 세 가지 색이 함께 바뀌는 줄을 읽고 규칙을 말로 설명해요.' },
      notes: '자주 보이는 어려움: ① 바로 앞 조각을 그대로 따라 놓는다(분홍 동그라미, 파란 네모, 분홍 동그라미 다음에 분홍) → 교구는 "바로 앞 조각을 그대로 따라 했어요"라고 짚는다. ② 색과 모양이 함께 바뀌는 줄에서 한 가지만 보고 다음 조각을 정한다 → 색만, 모양만 따로 읽어 본 뒤 합친다. ③ 수 배열에서 이웃한 두 수의 차이를 끝까지 확인하지 않는다.',
    }),
    // ───────────────────────────── 2차시 (practice · 늘어나는 모양) ─────────────────────────────
    lesson(2, {
      title: '개수가 늘어나는 모양과 수 배열의 규칙 찾기',
      objective: '개수가 하나씩, 둘씩 늘어나거나 줄어드는 모양과 수 배열에서 규칙을 찾아 빈칸을 채우고, 같은 수만큼 변하는지 말할 수 있다.',
      desc: 'a staircase of stacked paper blocks growing one by one on a classroom table while children count the blocks on each step',
      text: '하나씩 늘어나요', layers: [{ motif: 'tree', x: 100, y: 216 }, { motif: 'house', x: 380, y: 214, color: 'mint' }],
      intro: ['"블록을 1개, 2개, 3개로 쌓았어요. 다음 계단에는 몇 개를 쌓을까요?" 블록 그림 세 단을 놓고 단마다 몇 개 늘었는지 손가락으로 세어 보인다. "하나씩 늘어요"라는 말이 나오면 "그럼 다음은 몇 개예요?" 하고 되묻는다. 1학년의 되풀이 규칙과 달리 늘어나는 규칙은 얼마씩 변하는지 먼저 살펴야 한다.', '내 책상 위 물건으로 1개, 2개, 3개씩 쌓아 늘어나는 모양을 만들어 봐요.'],
      acts: [
        { id: 'a1', title: '활동 1. 늘어나는 모양의 다음 단 채우기', minutes: 10, tool: 'pattern',
          task: '조각 안의 작은 모양 개수가 어떻게 변하는지 보고 빈칸에 알맞은 조각을 넣어요.',
          teacher: '"첫째에서 둘째로 몇 개 늘었어요? 둘째에서 셋째로는요?" 앞 조각의 개수를 그대로 따라 놓는 학생에게는 늘어난 개수를 차례로 짚게 한다. 2개씩 늘어나는 줄에서 1개씩 늘리는 학생에게는 "처음 두 조각의 차이가 얼마였지요?"라고 묻는다.',
          levels: PL,
          items: [
            fill('삼각형이 하나씩 늘어나요. 빈칸 두 곳을 채워 보세요.', [K('triangle', 'lavender', 1), K('triangle', 'lavender', 2), K('triangle', 'lavender', 3), null, null], [K('triangle', 'lavender', 4), K('triangle', 'lavender', 5)], 0.1, null, { palette: [K('triangle', 'lavender', 3), K('triangle', 'lavender', 4), K('triangle', 'lavender', 5), K('triangle', 'lavender', 6)] }),
            fill('하트가 둘씩 늘어나요. 빈칸을 채워 보세요.', [K('heart', 'rose', 2), K('heart', 'rose', 4), K('heart', 'rose', 6), null], [K('heart', 'rose', 8)], 0.18, null, { palette: [K('heart', 'rose', 6), K('heart', 'rose', 7), K('heart', 'rose', 8), K('heart', 'rose', 9)] }),
            fill('별이 셋씩 늘어나요. 빈칸 두 곳을 채워 보세요.', [K('star', 'buttercup', 1), K('star', 'buttercup', 4), K('star', 'buttercup', 7), null, null], [K('star', 'buttercup', 10), K('star', 'buttercup', 13)], 0.28, { reveal: 'after-check' }, { palette: [K('star', 'buttercup', 10), K('star', 'buttercup', 11), K('star', 'buttercup', 12), K('star', 'buttercup', 13)] }),
            fill('더 해 보기: 동그라미가 줄어들어요. 빈칸 두 곳을 채워 보세요.', [K('circle', 'sky', 10), K('circle', 'sky', 8), K('circle', 'sky', 6), null, null], [K('circle', 'sky', 4), K('circle', 'sky', 2)], 0.3, { extra: true }, { palette: [K('circle', 'sky', 2), K('circle', 'sky', 3), K('circle', 'sky', 4), K('circle', 'sky', 5)] }),
          ] },
        { id: 'a2', title: '활동 2. 수로 나타낸 배열의 빈칸 채우기', minutes: 8, tool: 'pattern',
          task: '모양의 개수를 수로 바꾼 배열이에요. 얼마씩 변하는지 찾아 빈칸에 수를 써요.',
          teacher: '"이웃한 두 수의 차이는 얼마예요? 모두 같은지 끝까지 확인해 보세요." 첫 두 수의 차이만 보고 쓰는 학생에게는 수 사이에 화살표를 그리고 차이를 적게 한다. 작아지는 배열도 규칙임을 말해 준다.',
          levels: PL,
          items: [
            fill('1, 3, 5처럼 같은 수씩 커져요. 빈칸에 알맞은 수를 쓰세요.', [1, 3, 5, null, 9, null], [7, 11], 0.12),
            fill('같은 수씩 커져요. 빈칸에 알맞은 수를 쓰세요.', [4, 8, 12, null, 20, null], [16, 24], 0.18),
            fill('작아지는 수 배열이에요. 빈칸에 알맞은 수를 쓰세요.', [30, 27, 24, null, 18], [21], 0.22, { reveal: 'after-check' }),
            fill('더 해 보기: 같은 수씩 커져요. 빈칸에 알맞은 수를 쓰세요.', [2, 5, 8, null, 14, null], [11, 17], 0.3, { extra: true }),
          ] },
        { id: 'a3', title: '활동 3. 늘어나는 규칙을 말로 고르기', minutes: 8, tool: 'pattern',
          task: '줄이 어떻게 변하는지 알맞은 말을 골라요.',
          teacher: '"얼마씩 변해요? 늘 같은 수만큼인가요?" 차이가 1, 2, 3으로 점점 커지는 배열을 "2씩 커져요"로 고르는 학생에게는 이웃한 수의 차이를 차례로 쓰게 한다.',
          levels: { easy: { mode: 'rule' }, base: { mode: 'rule' }, challenge: { mode: 'rule' } },
          items: [
            rule('블록 수의 규칙을 골라 보세요.', [K('square', 'mint', 1), K('square', 'mint', 2), K('square', 'mint', 3), K('square', 'mint', 4)], ['한 칸마다 하나씩 늘어나요', '한 칸마다 둘씩 늘어나요', '같은 모양이 되풀이돼요'], 0, 0.12),
            rule('저금통에 남은 돈(원)을 적은 배열이에요. 어떤 규칙인지 골라 보세요.', [100, 90, 80, 70, 60], ['10씩 작아져요', '10씩 커져요', '100이 되풀이돼요'], 0, 0.15),
            rule('이 수 배열은 어떤 규칙인지 골라 보세요.', [1, 2, 4, 7, 11], ['1씩 커져요', '1, 2, 3, 4씩 점점 더 많이 커져요', '2씩 커져요'], 1, 0.3, { conclude: '이웃한 수의 차이가 1, 2, 3, 4로 달라서 늘 같은 수만큼 변하는 규칙이 아니에요.' }),
          ] },
      ],
      wrap: ['"늘어나는 규칙을 찾을 때 무엇을 먼저 살펴요?" 이웃한 두 수의 차이가 늘 같은지 본다는 말을 학생 입으로 정리한다. 출구 1번을 틀린 학생은 늘어난 개수를 세는지, 출구 2번을 틀린 학생은 첫 두 수의 차이만 보고 끝까지 확인하지 않는지 다음 시간에 먼저 살핀다.', [
        xt('pattern', { seq: [K('diamond', 'peach', 2), K('diamond', 'peach', 4), K('diamond', 'peach', 6), null], palette: [K('diamond', 'peach', 6), K('diamond', 'peach', 7), K('diamond', 'peach', 8)] }, '마름모가 둘씩 늘어나요. 빈칸에 알맞은 조각을 넣으세요.', { fill: [K('diamond', 'peach', 8)] }, 0.2),
        xt('pattern', { seq: [6, 12, 18, null, 30] }, '같은 수씩 커지는 배열이에요. 빈칸에 알맞은 수를 쓰세요.', { fill: [24] }, 0.18),
        { type: 'choice', prompt: '2, 4, 6, 8의 규칙은 무엇인가요?', options: ['2씩 커져요', '4씩 커져요', '2가 되풀이돼요'], answer: 0, difficulty: 0.1, explain: '이웃한 수의 차이가 늘 2라서 2씩 커져요.' },
      ]],
      ws: {
        title: '늘어나는 모양과 수',
        items: [
          wpat('개수가 늘어나는 규칙을 찾아 빈칸에 알맞은 모양을 그리세요.', [K('circle', 'rose', 1), K('circle', 'rose', 2), K('circle', 'rose', 3), null], '', '동그라미 4개'),
          wpat('빈칸에 알맞은 수를 쓰세요.', [7, 14, 21, null, 35, null], '', '28, 42'),
          wpat('작아지는 수 배열의 빈칸에 알맞은 수를 쓰세요.', [50, 45, 40, null, 30, null], '', '35, 25'),
          { type: 'choice', prompt: '3, 6, 9, 12의 규칙에 ○ 하세요.', options: ['3씩 커져요', '6씩 커져요', '3이 되풀이돼요'], answer: '3씩 커져요' },
          { type: 'short', prompt: '1, 4, 7, 10의 규칙을 말로 써 보세요.' },
        ],
        easy: { note: '이웃한 두 수의 차이를 먼저 구해요. 모두 같으면 그 수만큼 변하는 규칙이에요.', items: [
          wpat('빈칸에 알맞은 수를 쓰세요.', [2, 4, 6, null, 10], '', '8'),
          wpat('빈칸에 알맞은 모양을 그리세요.', [K('square', 'sky', 1), K('square', 'sky', 2), K('square', 'sky', 3), null], '', '네모 4개'),
          { type: 'choice', prompt: '10, 20, 30의 규칙에 ○ 하세요.', options: ['10씩 커져요', '1씩 커져요'], answer: '10씩 커져요' },
          { type: 'draw', prompt: '○를 1개, 2개, 3개로 늘려 가며 그려 보세요.' },
        ] },
      },
      diff: { easy: '조각이 6개씩 크게 보이고, 1씩 늘어나는 줄부터 읽어요.', base: '1·2·3씩 늘어나는 모양과 수 배열의 빈칸을 스스로 채워요.', challenge: '줄어드는 모양, 맞힌 뒤에야 결과가 드러나는 3씩 늘어나는 별 줄, 차이가 점점 커지는 배열까지 읽어요.' },
      notes: '자주 보이는 어려움: ① 첫 두 수의 차이만 보고 끝까지 확인하지 않는다 → 이웃한 수마다 차이를 적어 모두 같은지 본다. ② 2씩 늘어나는데 1씩 늘린다. ③ 작아지는 배열이 규칙이라는 것을 모른다. ④ 차이가 점점 커지는 배열(1, 2, 4, 7)을 같은 수씩 커진다고 오해한다.',
    }),
    // ───────────────────────────── 3차시 (core · 덧셈표) ─────────────────────────────
    lesson(3, {
      title: '덧셈표를 채우며 가로·세로 규칙 찾기',
      objective: '덧셈표의 빈칸을 채우고, 가로로는 오른쪽으로, 세로로는 아래로 갈 때 일정하게 커지는 규칙을 찾아 말할 수 있다.',
      desc: 'a big paper addition table pinned on a classroom wall with colorful highlighted rows and columns while children trace the numbers with fingers',
      text: '덧셈표의 규칙', layers: [{ motif: 'house', x: 110, y: 214, color: 'lavender' }, { motif: 'tree', x: 380, y: 216 }],
      intro: ['"위쪽에 1, 2, 3, 4, 옆쪽에 1, 2, 3이 써 있는 표예요. 두 수를 더한 값을 어디에 쓸까요?" 맨 위 수와 맨 왼쪽 수를 손가락으로 만나게 하여 한 칸을 채우는 모습을 보인다. 표 안의 수가 어떻게 변하는지 찾아보게 하고, 한 칸을 채울 때 맨 위 수와 맨 왼쪽 수를 바꿔 읽는 일이 없는지 살핀다.', '2 + 3과 3 + 2를 각각 계산해 보고 같은지 짝과 말해 봐요.'],
      acts: [
        { id: 'a1', title: '활동 1. 덧셈표 빈칸 채우기', minutes: 10, tool: 'multiply',
          task: '왼쪽 수와 위쪽 수를 더해 빈칸에 써요. 한 줄을 다 채우면 수가 어떻게 변하는지 보세요.',
          teacher: '"왼쪽 수 2와 위쪽 수 3을 만나는 칸에는 몇을 쓸까요?" 두 수를 곱하는 학생에게는 표 머리의 + 기호를 짚어 준다. 한 줄을 채운 뒤 "오른쪽으로 갈수록 몇씩 커져요?" 하고 묻는다.',
          levels: TL,
          items: [
            tbl('덧셈표의 2행 빈칸을 채워 보세요.', '+', [1, 2, 3], [1, 2, 3, 4, 5], 'row:2', 0.1),
            tbl('덧셈표의 흰 칸 세 곳을 채워 보세요.', '+', [2, 3, 4, 5], [1, 2, 3, 4], [[3, 2], [4, 4], [5, 1]], 0.18),
            tbl('덧셈표에서 6이 쓰인 열의 빈칸을 모두 채워 보세요.', '+', [3, 4, 5, 6, 7], [4, 5, 6, 7, 8], 'col:6', 0.22),
            tbl('더 해 보기: 작은 덧셈표 전체를 채워 보세요.', '+', [1, 2, 3], [1, 2, 3], 'all', 0.25, { extra: true }),
          ] },
        { id: 'a2', title: '활동 2. 덧셈표에서 맞는 규칙 고르기', minutes: 8, tool: 'mindmap',
          task: '덧셈표를 살펴 맞는 규칙을 골라요.',
          teacher: '"오른쪽으로 한 칸 가면 몇이 커져요? 아래로 한 칸 가면요?" 대각선(비스듬한 줄)의 수가 같다는 것은 표에서 직접 손가락으로 짚어 보게 한다. 규칙을 말할 때 "~씩 커져요"처럼 수를 넣어 말하게 한다.',
          levels: ML('pick', '덧셈표 규칙'),
          items: [
            pk('덧셈표에서 맞는 규칙을 모두 골라 보세요. (맨 위 수와 맨 왼쪽 수가 1씩 커지는 표)', '덧셈표 규칙', [['오른쪽으로 갈수록 1씩 커져요', true], ['아래로 갈수록 1씩 커져요', true], ['왼쪽 위 칸이 가장 커요', false], ['한 줄의 수가 모두 같아요', false]], 0.15, '맞는 규칙'),
            pk('덧셈표에서 비스듬한 줄에 대해 맞는 말을 모두 골라 보세요.', '덧셈표 규칙', [['오른쪽 위에서 왼쪽 아래로 같은 수가 나란히 있어요', true], ['비스듬한 줄의 수는 모두 달라요', false], ['3 + 4와 4 + 3은 같은 수예요', true], ['아래로 갈수록 작아져요', false]], 0.25, '맞는 말'),
            pk('덧셈표 한 칸을 채우는 방법을 모두 골라 보세요.', '덧셈표 규칙', [['왼쪽 수와 위쪽 수를 더해요', true], ['왼쪽 수와 위쪽 수를 곱해요', false], ['주변 칸의 규칙을 보고 알아내요', true], ['아무 수나 써요', false]], 0.2, '채우는 방법', { conclude: '왼쪽 수와 위쪽 수를 더해도 되고, 한 줄에서 1씩 커지는 규칙을 이용해도 돼요.' }),
          ] },
        { id: 'a3', title: '활동 3. 표의 한 줄을 이어 쓰기', minutes: 8, tool: 'pattern',
          task: '덧셈표의 한 줄을 꺼내 놓은 거예요. 같은 수씩 커지는 규칙으로 빈칸에 수를 써요.',
          teacher: '"3 + 1, 3 + 2, 3 + 3이 4, 5, 6이에요. 다음은요?" 덧셈표의 한 줄이 곧 1씩 커지는 수 배열임을 연결해 준다. 줄이 바뀌면 시작하는 수만 달라지고 커지는 규칙은 같다는 점을 짚는다.',
          levels: PL,
          items: [
            fill('3에 1, 2, 3, …을 더한 수가 놓였어요. 빈칸에 알맞은 수를 쓰세요.', [4, 5, 6, null, 8, null], [7, 9], 0.12),
            fill('5에 1, 2, 3, …을 더한 수가 놓였어요. 빈칸에 알맞은 수를 쓰세요.', [6, 7, null, 9, 10, null], [8, 11], 0.15),
            fill('표의 한 줄이에요. 1씩 커지는 규칙으로 빈칸에 알맞은 수를 쓰세요.', [9, null, 11, 12, null, 14], [10, 13], 0.2),
          ] },
      ],
      wrap: ['"덧셈표에서 아래로 갈수록 수가 어떻게 변하나요?" 한 칸 아래로 갈 때 왼쪽 수가 1 커져 덧셈표의 수도 1씩 커진다는 말을 학생 입으로 정리한다. 출구 1번을 틀린 학생은 더해야 하는 수를 곱하는지 다음 시간에 먼저 살핀다.', [
        xt('multiply', { mode: 'table', op: '+', rowsOf: [4, 5, 6], colsOf: [2, 3, 4, 5], blanks: [[5, 3], [6, 5]] }, '덧셈표의 흰 칸 두 곳을 채워 보세요.', { cells: true }, 0.18),
        { type: 'choice', prompt: '덧셈표에서 오른쪽으로 한 칸 갈 때마다 수는 어떻게 변하나요? (맨 위 수가 1씩 커지는 표)', options: ['1씩 커져요', '1씩 작아져요', '변하지 않아요'], answer: 0, difficulty: 0.15, explain: '맨 위 수가 1씩 커지므로 같은 줄의 합도 1씩 커져요.' },
      ]],
      ws: {
        title: '덧셈표의 규칙',
        items: [
          wtbl('덧셈표의 빈칸을 채우세요.', '+', [1, 2, 3, 4], [1, 2, 3, 4, 5], [[2, 3], [3, 5], [4, 1], [4, 4]], '', '5, 8, 5, 8'),
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '덧셈표에서 오른쪽으로 갈수록 수가 ____씩 커져요.', answer: '1' },
          { type: 'choice', prompt: '4 + 3과 같은 수가 되는 식에 ○ 하세요.', options: ['3 + 4', '4 + 4', '3 + 3'], answer: '3 + 4' },
          wpat('표의 한 줄이에요. 규칙을 찾아 빈칸에 알맞은 수를 쓰세요.', [6, 7, 8, null, 10, null], '', '9, 11'),
          { type: 'short', prompt: '덧셈표에서 찾은 규칙을 한 가지 써 보세요.' },
        ],
        easy: { note: '왼쪽 수와 위쪽 수가 만나는 칸에 두 수를 더해서 써요.', items: [
          wtbl('덧셈표의 빈칸을 채우세요.', '+', [1, 2, 3], [1, 2, 3], [[2, 2], [3, 1]], '', '4, 4'),
          { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '2 + 3 = ____', answer: '5' },
          { type: 'choice', prompt: '덧셈표의 칸에는 두 수를 어떻게 하나요?', options: ['더해요', '곱해요'], answer: '더해요' },
          { type: 'draw', prompt: '작은 덧셈표(1, 2, 3)를 그려 칸을 채워 보세요.' },
        ] },
      },
      diff: { easy: '표의 칸을 한 줄씩 채우고, 맞는 규칙을 고를 때 초록 테두리가 생겨요.', base: '덧셈표의 빈칸을 스스로 채우고 가로·세로 규칙을 말로 골라요.', challenge: '작은 덧셈표 전체를 채우고, 비스듬한 줄의 규칙과 3 + 4 = 4 + 3처럼 서로 같은 칸도 찾아 설명해요.' },
      notes: '자주 보이는 어려움: ① 덧셈표인데 두 수를 곱한다. ② 맨 위 수와 맨 왼쪽 수를 바꾸어 읽어 칸을 잘못 짚는다. ③ 한 줄의 수가 같은 수씩 커진다는 것을 모른다 → 한 줄을 이어 읽는다. ④ 비스듬한 줄의 수가 같다는 것을 놓친다 → 표에서 손가락으로 짚어 본다.',
    }),
    // ───────────────────────────── 4차시 (core · 곱셈표) ─────────────────────────────
    lesson(4, {
      title: '곱셈표에서 단마다 달라지는 규칙 찾기',
      objective: '곱셈표의 빈칸을 채우고, 곱하는 수가 1 커질 때 곱이 그 단의 수만큼 커진다는 것과 짝수·일의 자리 규칙을 찾아 말할 수 있다.',
      desc: 'a colorful multiplication table poster on a classroom wall with highlighted rows of twos and fives while children point at the numbers',
      text: '곱셈표의 규칙', layers: [{ motif: 'tree', x: 100, y: 216, color: 'mint' }, { motif: 'house', x: 380, y: 214 }],
      intro: ['"2단, 5단 곱셈구구를 외울 때 어떤 느낌이었어요? 외우지 않고 규칙으로 알아낼 수도 있을까요?" 곱셈표의 2단 줄을 손가락으로 짚으며 소리 내어 읽게 하고 "다음 칸은 몇만큼 커졌어요?" 하고 묻는다. 덧셈표처럼 한 줄에서 같은 수씩 커진다는 것을 짚고, 오늘은 단마다 그 수가 다르다는 것을 찾아본다.', '2단을 소리 내어 읽으며 손가락으로 한 칸씩 짚어 봐요.'],
      acts: [
        { id: 'a1', title: '활동 1. 곱셈표 빈칸 채우기', minutes: 10, tool: 'multiply',
          task: '표의 단과 곱하는 수를 보고 빈칸을 채워요. 앞 칸에서 얼마가 커졌는지 이용해도 돼요.',
          teacher: '"2단에서 2 × 3은 6이에요. 2 × 4는 앞 칸보다 몇이 커졌어요?" 곱셈구구를 외우지 못한 학생에게는 앞 칸에 그 단의 수를 더해 보게 한다. 곱하는 수와 단의 수를 바꿔 읽은 학생에게는 줄 머리를 손가락으로 짚게 한다.',
          levels: TL,
          items: [
            tbl('2단 곱셈표의 빈칸을 모두 채워 보세요.', '×', [2], [1, 2, 3, 4, 5, 6, 7, 8, 9], 'row:2', 0.1),
            tbl('5단 곱셈표의 빈칸을 모두 채워 보세요.', '×', [5], [1, 2, 3, 4, 5, 6, 7, 8, 9], 'row:5', 0.15),
            tbl('3단과 6단 가운데 6단 빈칸을 모두 채워 보세요.', '×', [3, 6], [1, 2, 3, 4, 5, 6], 'row:6', 0.22),
            tbl('더 해 보기: 4단과 8단의 흰 칸을 채워 보세요.', '×', [4, 8], [1, 2, 3, 4, 5], [[8, 2], [8, 4], [4, 3]], 0.28, { extra: true }),
          ] },
        { id: 'a2', title: '활동 2. 곱셈표에서 맞는 규칙 고르기', minutes: 8, tool: 'mindmap',
          task: '곱셈표를 살펴 맞는 규칙을 골라요.',
          teacher: '"2단의 수는 모두 짝수일까요? 5단의 일의 자리는 어떤 수일까요?" 곱셈표에서 직접 짚어 확인하게 한다. "아래로 갈수록 작아져요"처럼 방향을 잘못 말하는 학생에게는 표의 숫자를 위에서 아래로 읽어 보게 한다.',
          levels: ML('pick', '곱셈표 규칙'),
          items: [
            pk('2단의 수에 대해 맞는 말을 모두 골라 보세요.', '곱셈표 규칙', [['모두 짝수예요', true], ['홀수도 섞여 있어요', false], ['2씩 커져요', true], ['5씩 커져요', false]], 0.12, '맞는 말'),
            pk('5단의 수에 대해 맞는 말을 모두 골라 보세요.', '곱셈표 규칙', [['일의 자리가 0 또는 5예요', true], ['모두 짝수예요', false], ['5씩 커져요', true], ['모두 홀수예요', false]], 0.18, '맞는 말'),
            pk('곱셈표에서 맞는 규칙을 모두 골라 보세요.', '곱셈표 규칙', [['곱하는 수가 1 커지면 곱은 단의 수만큼 커져요', true], ['3단 수를 2배 하면 6단 수가 돼요', true], ['9단의 수는 모두 같아요', false], ['곱셈표는 아래로 갈수록 작아져요', false]], 0.28, '맞는 규칙', { conclude: '3 × 2 = 6이므로 3단의 수를 2배 하면 6단의 수가 되고, 곱하는 수가 1 커질 때마다 그 단의 수만큼 커져요.' }),
          ] },
        { id: 'a3', title: '활동 3. 단마다 이어 쓰기', minutes: 8, tool: 'pattern',
          task: '곱셈표의 한 단을 꺼내 놓은 거예요. 같은 수씩 커지는 규칙으로 빈칸에 수를 써요.',
          teacher: '"2단은 2씩, 5단은 5씩 커져요. 이 줄은 몇씩 커지는 줄일까요?" 앞의 두 수 차이로 몇 단인지 먼저 알아내게 한다. 규칙으로 구한 값이 곱셈구구와 같은지 소리 내어 곱셈구구로도 확인하게 한다.',
          levels: PL,
          items: [
            fill('2단의 수를 늘어놓았어요. 빈칸에 알맞은 수를 쓰세요.', [2, 4, 6, null, 10, null], [8, 12], 0.1),
            fill('5단의 수를 늘어놓았어요. 빈칸에 알맞은 수를 쓰세요.', [5, 10, null, 20, 25, null], [15, 30], 0.15),
            fill('9단의 수를 늘어놓았어요. 빈칸에 알맞은 수를 쓰세요.', [9, 18, 27, null, 45], [36], 0.22),
          ] },
      ],
      wrap: ['"곱셈표에서 곱하는 수가 1 커지면 곱은 얼마가 커져요?" 그 단의 수만큼 커진다는 말을 학생 입으로 정리한다. 출구 1번을 틀린 학생은 단의 수를 더하는 대신 곱하는 수를 더하는지 다음 시간에 먼저 살핀다.', [
        xt('multiply', { mode: 'table', rowsOf: [7], colsOf: [1, 2, 3, 4, 5], blanks: [[7, 3], [7, 5]] }, '7단 곱셈표의 흰 칸을 채워 보세요.', { cells: true }, 0.2),
        { type: 'choice', prompt: '곱셈표에서 5단의 수는 한 칸마다 몇씩 커지나요?', options: ['5씩', '1씩', '10씩'], answer: 0, difficulty: 0.1, explain: '곱하는 수가 1 커질 때마다 곱은 5씩 커져요.' },
      ]],
      ws: {
        title: '곱셈표의 규칙',
        items: [
          wtbl('곱셈표의 빈칸을 채우세요.', '×', [2, 3], [1, 2, 3, 4, 5, 6], [[2, 4], [2, 6], [3, 3], [3, 5]], '', '8, 12, 9, 15'),
          wpat('4단의 수를 늘어놓았어요. 빈칸에 알맞은 수를 쓰세요.', [4, 8, 12, null, 20, null], '', '16, 24'),
          { type: 'choice', prompt: '5단의 수의 일의 자리에 ○ 하세요.', options: ['0과 5', '1과 6', '2와 7'], answer: '0과 5' },
          { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '3단에서 곱하는 수가 1 커지면 곱은 ____씩 커져요.', answer: '3' },
          { type: 'short', prompt: '2단의 수가 모두 짝수인 까닭을 규칙으로 써 보세요.' },
        ],
        easy: { note: '곱하는 수가 1 커질 때마다 그 단의 수만큼 커져요. 앞 칸에 그 단의 수를 더해 봐요.', items: [
          wtbl('곱셈표의 빈칸을 채우세요.', '×', [2], [1, 2, 3, 4, 5], [[2, 3], [2, 5]], '', '6, 10'),
          wpat('빈칸에 알맞은 수를 쓰세요.', [5, 10, 15, null, 25], '', '20'),
          { type: 'choice', prompt: '2단의 수는 몇씩 커지나요?', options: ['2씩', '3씩'], answer: '2씩' },
          { type: 'draw', prompt: '2단의 수를 5개 써 보세요.' },
        ] },
      },
      diff: { easy: '표의 한 줄만 채우고, 맞는 규칙을 고를 때 초록 테두리가 생겨요.', base: '단을 바꾸어 가며 곱셈표 빈칸을 채우고, 단마다 이어 쓰기를 해요.', challenge: '4단과 8단을 함께 보며 두 단 사이의 규칙을 찾고, 3단 수를 2배 하면 6단 수가 되는 까닭을 말해요.' },
      notes: '자주 보이는 어려움: ① 곱셈구구를 외우지 못해 칸을 비운다 → 앞 칸에 그 단의 수를 더한다. ② 한 줄에서 커지는 수를 곱하는 수(1)로 착각한다 → 단의 수만큼 커진다고 말하게 한다. ③ 단의 수와 곱하는 수를 바꾸어 읽는다 → 줄 머리와 칸 머리를 짚는다. 곱셈표 규칙은 4학년 규칙과 대응으로 이어진다.',
    }),
    // ───────────────────────────── 5차시 (core · 여러 방법으로 나타내기) ─────────────────────────────
    lesson(5, {
      title: '같은 규칙을 모양·글자·수로 바꾸어 나타내기',
      objective: '같은 규칙을 모양, 글자(가·나·다), 수로 바꾸어 나타내고, 겉모습이 달라도 규칙이 같은지 가려낼 수 있다.',
      desc: 'three paper-cut strips on a classroom board showing the same repeating rule drawn as shapes, as letters and as numbers with children matching them',
      text: '같은 규칙, 다른 모습', layers: [{ motif: 'house', x: 110, y: 214, color: 'buttercup' }, { motif: 'tree', x: 380, y: 216 }],
      intro: ['"○ □ ○ □와 1 2 1 2는 같은 규칙일까요, 다른 규칙일까요?" 두 줄을 위아래로 겹쳐 놓고 모양과 수가 짝지어진 것을 보인다. "무엇이 같아요?" 하고 물어 모양은 달라도 한 묶음의 모습(가 나 가 나)이 같다는 말이 나오게 한다. 모양이 다르면 규칙도 다르다고 생각하는 학생에게는 묶음의 길이를 먼저 세게 한다.', '내가 좋아하는 두 가지(색, 과일)로 번갈아 늘어놓는 줄을 말로 만들어 봐요.'],
      acts: [
        { id: 'a1', title: '활동 1. 같은 규칙끼리 모으기', minutes: 9, tool: 'mindmap',
          task: '모양·수·소리로 쓴 줄을 읽고, 규칙이 같은 것끼리 같은 칸에 모아요.',
          teacher: '"○ □ ○ □와 1 2 1 2는 한 묶음이 몇 개예요?" 소리·수·모양이 달라서 다른 규칙으로 나누는 학생에게는 가장 짧은 되풀이 묶음을 소리 내어 말하게 한다. 한 묶음을 가·나로 바꾸어 말하면 같은 규칙인지 한눈에 보인다고 짚는다.',
          levels: ML('sort', '같은 규칙'),
          items: [
            srt('규칙이 같은 줄끼리 모아 보세요. (가 나 가 나 / 가 가 나 가 가 나)', '같은 규칙', { '가 나 가 나': ['○ □ ○ □ ○ □', '1 2 1 2 1 2', '쿵 짝 쿵 짝 쿵 짝'], '가 가 나 가 가 나': ['○ ○ □ ○ ○ □', '1 1 2 1 1 2', '쿵 쿵 짝 쿵 쿵 짝'] }, 0.15),
            srt('두 가지가 번갈아 나오는 줄과 세 가지가 차례로 나오는 줄로 나누어 보세요.', '같은 규칙', { '두 가지 번갈아': ['빨강 파랑 빨강 파랑', '별 하트 별 하트', '1 3 1 3'], '세 가지 차례로': ['빨강 파랑 노랑 빨강 파랑 노랑', '별 하트 달 별 하트 달', '1 3 5 1 3 5'] }, 0.2),
            srt('더 해 보기: 커지는 규칙, 작아지는 규칙, 되풀이 규칙으로 나누어 보세요.', '같은 규칙', { '커지는 규칙': ['1 3 5 7 9', '2 4 6 8 10'], '작아지는 규칙': ['9 7 5 3 1', '20 15 10 5'], '되풀이 규칙': ['가 나 가 나 가 나', '1 2 3 1 2 3'] }, 0.3, { extra: true }),
          ] },
        { id: 'a2', title: '활동 2. 글자와 수로 바꾼 줄의 빈칸 채우기', minutes: 9, tool: 'pattern',
          task: '모양을 글자나 수로 바꾼 줄이에요. 같은 규칙으로 빈칸을 채워요.',
          teacher: '"모양을 가·나로 바꾸었어요. 가 가 나 다음에는 무엇이 올까요?" 글자가 바뀌는 칸에서 앞 글자를 그대로 따라 쓰는 학생에게는 한 묶음을 손으로 끊어 읽게 한다. 수로 바꾼 줄에서는 수의 크기가 아니라 자리가 같은 것끼리 짝지어 보게 한다.',
          levels: PL,
          items: [
            fill('가, 가, 나가 되풀이돼요. 빈칸 두 곳에 알맞은 글자를 쓰세요.', ['가', '가', '나', '가', '가', '나', null, null, '나'], ['가', '가'], 0.12),
            fill('1, 2, 3이 되풀이돼요. 빈칸에 알맞은 수를 쓰세요.', [1, 2, 3, 1, 2, 3, null, 2, null], [1, 3], 0.18),
            fill('○를 1, □를 2로 바꾸었어요. 빈칸에 알맞은 수를 쓰세요.', [1, 2, 2, 1, 2, 2, null, 2, null], [1, 2], 0.22),
            fill('ㄱ, ㄴ, ㄷ이 되풀이돼요. 빈칸에 알맞은 글자를 쓰세요.', ['ㄱ', 'ㄴ', 'ㄷ', 'ㄱ', 'ㄴ', 'ㄷ', null, 'ㄴ', null], ['ㄱ', 'ㄷ'], 0.25),
          ] },
        { id: 'a3', title: '활동 3. 같은 규칙을 다르게 나타낸 것 고르기', minutes: 8, tool: 'pattern',
          task: '줄을 읽고 같은 규칙을 다르게 나타낸 것을 골라요.',
          teacher: '"별을 1, 하트를 2로 바꾸면 이 줄은 어떻게 쓰일까요?" 규칙이 같다는 것은 한 묶음의 모습이 같다는 뜻임을 짚는다. 수로 바꿀 때 짝지은 수를 잊고 아무 수나 쓰는 학생에게는 별 = 1, 하트 = 2처럼 먼저 약속을 적게 한다.',
          levels: { easy: { mode: 'rule' }, base: { mode: 'rule' }, challenge: { mode: 'rule' } },
          items: [
            rule('별을 1, 하트를 2로 바꾸어 수로 나타내면 어느 것일까요?', ['star:buttercup', 'heart:rose', 'heart:rose', 'star:buttercup', 'heart:rose', 'heart:rose'], ['1 2 2 1 2 2', '1 2 1 2 1 2', '1 1 2 1 1 2'], 0, 0.15, null, '수로 나타낸 줄은 어느 것일까요?'),
            rule('동그라미를 3, 네모를 5로 바꾸어 수로 나타내면 어느 것일까요?', ['circle:sky', 'square:mint', 'circle:sky', 'square:mint'], ['3 5 3 5', '3 3 5 5', '3 5 5 3'], 0, 0.18, null, '수로 나타낸 줄은 어느 것일까요?'),
            rule('수 배열을 글자(1=가, 2=나, 3=다)로 바꾸면 어느 것일까요?', [1, 1, 2, 3, 1, 1, 2, 3], ['가 가 나 다가 되풀이돼요', '가 나 다가 되풀이돼요', '가 나 나 다가 되풀이돼요'], 0, 0.28, { conclude: '수 1 1 2 3 을 글자로 바꾸면 가 가 나 다이고, 이 묶음이 되풀이돼요.' }, '글자로 나타낸 규칙은 어느 것일까요?'),
          ] },
      ],
      wrap: ['"모양이 달라도 같은 규칙이라고 말할 수 있는 까닭은 무엇인가요?" 한 묶음의 모습(가 나 가 나)이 같기 때문이라는 말을 학생 입으로 정리한다. 출구 2번을 틀린 학생은 모양이나 수가 달라서 규칙도 다르다고 생각하는지 다음 시간에 먼저 살핀다.', [
        xt('pattern', { seq: ['가', '나', '나', '가', '나', '나', null, null, '나'] }, '가, 나, 나가 되풀이돼요. 빈칸 두 곳에 알맞은 글자를 쓰세요.', { fill: ['가', '나'] }, 0.15),
        { type: 'choice', prompt: '"빨강 노랑 빨강 노랑"과 같은 규칙인 것은 무엇인가요?', options: ['1 2 1 2', '1 1 2 2', '1 2 3 1'], answer: 0, difficulty: 0.15, explain: '두 가지가 번갈아 나오는 가 나 가 나 규칙은 1 2 1 2와 같아요.' },
      ]],
      ws: {
        title: '같은 규칙 다르게 나타내기',
        items: [
          wpat('○를 1, △를 2로 바꾸어 아래 줄에 수를 쓰세요.', ['circle:rose', 'triangle:mint', 'triangle:mint', 'circle:rose', 'triangle:mint', 'triangle:mint'], '___ ___ ___ ___ ___ ___', '1 2 2 1 2 2'),
          wpat('같은 규칙으로 빈칸에 알맞은 수를 쓰세요.', [1, 2, 3, 1, 2, null, 1, null], '', '3, 2'),
          { type: 'choice', prompt: '"가 나 가 나"와 같은 규칙에 ○ 하세요.', options: ['☆ ♡ ☆ ♡', '☆ ☆ ♡ ♡', '☆ ♡ ♡ ☆'], answer: '☆ ♡ ☆ ♡' },
          { type: 'blank', prompt: '빈칸에 알맞은 글자를 쓰세요.', text: '1 2 2 1 2 2 를 글자로 바꾸면 가 나 나 ___ 나 나예요.', answer: '가' },
          { type: 'short', prompt: '같은 규칙을 모양과 수로 나타내 보고, 무엇이 같은지 써 보세요.' },
        ],
        easy: { note: '한 묶음이 몇 개인지 먼저 세어 봐요. 묶음의 모습이 같으면 같은 규칙이에요.', items: [
          wpat('△를 1, ○를 2로 바꾸어 아래에 수를 쓰세요.', ['triangle:mint', 'circle:rose', 'triangle:mint', 'circle:rose'], '___ ___ ___ ___', '1 2 1 2'),
          wpat('빈칸에 알맞은 수를 쓰세요.', [1, 2, 1, 2, 1, null], '', '2'),
          { type: 'choice', prompt: '"가 나 가 나"와 같은 규칙에 ○ 하세요.', options: ['1 2 1 2', '1 1 2 2'], answer: '1 2 1 2' },
          { type: 'draw', prompt: '○ □ ○ □ 를 수(1 2 1 2)로도 써 보세요.' },
        ] },
      },
      diff: { easy: '같은 규칙끼리 모을 때 맞는 칸에 초록 테두리가 생기고 줄은 6칸씩 크게 보여요.', base: '모양·글자·수로 바꾼 줄을 읽고 빈칸을 채워요.', challenge: '수를 글자로 바꾸는 문항과 커지는·작아지는·되풀이 규칙을 모으는 더 해 보기까지 풀어요.' },
      notes: '자주 보이는 어려움: ① 모양이나 수가 달라서 규칙도 다르다고 생각한다 → 한 묶음의 길이와 모습을 비교한다. ② 모양을 수로 바꿀 때 약속을 잊는다 → 별 = 1, 하트 = 2처럼 먼저 적는다. ③ 글자로 바꾼 줄에서 앞 글자를 그대로 따라 쓴다.',
    }),
    // ───────────────────────────── 6차시 (practice · 생활 속 규칙) ─────────────────────────────
    lesson(6, {
      title: '달력·요일·신호등에서 규칙 찾기',
      objective: '달력의 날짜, 요일 이름, 신호등 색, 버스가 오는 시각에서 규칙을 찾아 빈칸을 채우고 알맞게 말할 수 있다.',
      desc: 'a school hallway with a big calendar, a traffic light picture and a bus timetable on the wall while children point at the repeating parts',
      text: '생활 속 규칙', layers: [{ motif: 'house', x: 100, y: 214 }, { motif: 'tree', x: 380, y: 216, color: 'mint' }],
      intro: ['"달력을 세로로 읽어 볼까요? 3일 아래에는 며칠이 있어요?" 달력에서 같은 요일의 날짜를 세로로 읽어 7씩 커지는 모습을 보인다. 신호등 색과 요일 이름도 생활 속에서 되풀이되는 규칙임을 이야기한다. 달력에서 다음 줄로 넘어갈 때 7이 아니라 1씩 더하는 학생이 있으니 가로와 세로를 구별하게 한다.', '우리 집 달력에서 같은 요일의 날짜들을 찾아 소리 내어 읽어 봐요.'],
      acts: [
        { id: 'a1', title: '활동 1. 달력·요일·신호등 규칙의 빈칸 채우기', minutes: 10, tool: 'pattern',
          task: '달력의 세로 줄, 요일 이름, 신호등 색이 놓여 있어요. 규칙을 찾아 빈칸을 채워요.',
          teacher: '"달력에서 같은 요일은 몇 칸 아래에 있어요? 한 줄에 며칠이 있나요?" 한 줄에 7일이 있다는 것을 달력에서 세어 보게 한다. 요일 이름은 일요일 다음이 다시 월요일이라는 것을 되풀이 규칙으로 짚는다.',
          levels: PL,
          items: [
            fill('달력에서 같은 요일의 날짜를 세로로 읽었어요. 빈칸에 알맞은 수를 쓰세요.', [3, 10, 17, null, 31], [24], 0.12),
            fill('다른 요일의 날짜를 세로로 읽었어요. 빈칸에 알맞은 수를 쓰세요.', [2, 9, null, 23, 30], [16], 0.15),
            fill('요일 이름이 차례로 되풀이돼요. 빈칸에 알맞은 요일을 쓰세요.', ['월', '화', '수', '목', '금', '토', '일', '월', '화', null, null], ['수', '목'], 0.2),
            fill('자동차 신호등이 초록, 노랑, 빨강으로 되풀이돼요. 빈칸에 알맞은 색을 쓰세요.', ['초록', '노랑', '빨강', '초록', '노랑', null], ['빨강'], 0.22),
          ] },
        { id: 'a2', title: '활동 2. 버스 시각에서 뛰어 세기', minutes: 8, tool: 'numberline',
          task: '같은 시간마다 되풀이되는 일을 수직선에서 뛰어 세어 몇 분인지 찾아요.',
          teacher: '"버스가 4분마다 오면 첫 번째 버스 다음은 몇 분일까요?" 한 번 뛴 크기를 세지 않고 점의 개수만 세는 학생에게는 화살표 하나가 몇 분인지 소리 내어 읽게 한다. 몇 번 뛰었는지와 닿은 수가 다르다는 것을 짚는다.',
          levels: { easy: { mode: 'jump', showValue: true }, base: { mode: 'jump' }, challenge: { mode: 'jump' } },
          items: [
            { prompt: '버스가 4분마다 와요. 0분부터 4분씩 5번 뛰어 세어 보세요.', toolOptions: { mode: 'jump', min: 0, max: 24, step: 4, labels: 'all', fixedFrom: 0 }, target: { from: 0, size: 4, count: 5 }, difficulty: 0.15 },
            { prompt: '계단을 3칸씩 올라가요. 0칸에서 3칸씩 6번 뛰어 세어 보세요.', toolOptions: { mode: 'jump', min: 0, max: 21, step: 3, labels: 'all', fixedFrom: 0 }, target: { from: 0, size: 3, count: 6 }, difficulty: 0.2 },
            { prompt: '10씩 뛰어 세어 50에 닿아 보세요. 몇 번 뛰었나요?', toolOptions: { mode: 'jump', min: 0, max: 60, step: 10, labels: 'all', fixedFrom: 0 }, target: { from: 0, size: 10, end: 50 }, difficulty: 0.22,
              predict: { q: '10씩 뛰어 50에 닿으려면 몇 번 뛰어야 할까요?', options: ['4번', '5번', '6번'], answer: 1 }, conclude: '10씩 5번 뛰면 50이에요. 뛴 횟수와 닿은 수를 구별해요.' },
          ] },
        { id: 'a3', title: '활동 3. 생활 속 규칙의 종류 나누기', minutes: 8, tool: 'mindmap',
          task: '생활 속 규칙을 되풀이되는 규칙과 커지는 규칙으로 나누어요.',
          teacher: '"이것은 같은 것이 되풀이될까요, 점점 커질까요?" 계절·요일을 커지는 규칙으로 나누는 학생에게는 일요일 다음에 월요일이 다시 오는 것을 짚는다. 나이 늘어나기·층 번호는 되풀이 없이 계속 커진다는 것을 말해 주게 한다.',
          levels: ML('sort', '생활 속 규칙'),
          items: [
            srt('생활 속 규칙을 되풀이되는 규칙과 커지는 규칙으로 나누어 보세요.', '생활 속 규칙', { '되풀이되는 규칙': ['신호등 색', '요일 이름', '무지개 색 차례'], '커지는 규칙': ['계단 번호 1 2 3', '달력에서 세로 날짜', '엘리베이터 층 번호'] }, 0.15),
            srt('이번에는 생활 속 규칙을 두 종류로 나누어 보세요.', '생활 속 규칙', { '되풀이되는 규칙': ['아침 점심 저녁', '봄 여름 가을 겨울', '낮과 밤'], '커지는 규칙': ['줄넘기 횟수 늘리기', '나이 한 살씩 늘기', '자라는 식물의 키'] }, 0.22),
            srt('더 해 보기: 규칙의 종류를 나누어 보세요.', '생활 속 규칙', { '되풀이되는 규칙': ['사이렌 소리 빠앙 빠앙', '횡단보도 흰줄 검은줄'], '커지는 규칙': ['달리기 기록 100 200 300', '버스 번호 1번 2번 3번'], '작아지는 규칙': ['남은 쪽수 9 8 7', '타이머 3 2 1'] }, 0.3, { extra: true }),
          ] },
      ],
      wrap: ['"생활에서 규칙을 찾은 것이 있나요?" 학생이 본 달력, 요일, 신호등을 말하게 하고 되풀이되는 규칙과 커지는 규칙으로 가려 말하게 한다. 출구 1번을 틀린 학생은 달력의 가로·세로를 헷갈리는지 다음 시간에 먼저 살핀다.', [
        xt('pattern', { seq: [2, 9, 16, null, 30] }, '달력에서 같은 요일의 날짜를 세로로 읽었어요. 빈칸에 알맞은 수를 쓰세요.', { fill: [23] }, 0.18),
        { type: 'choice', prompt: '화요일 다음 다음 날은 무슨 요일인가요?', options: ['수요일', '목요일', '금요일'], answer: 1, difficulty: 0.15, explain: '화요일 다음은 수요일, 그 다음은 목요일이에요.' },
      ]],
      ws: {
        title: '생활 속 규칙',
        items: [
          wpat('달력에서 같은 요일의 날짜를 세로로 읽었어요. 빈칸에 알맞은 수를 쓰세요.', [1, 8, null, 22, null], '', '15, 29'),
          wpat('요일 이름이 되풀이돼요. 빈칸에 알맞은 요일을 쓰세요.', ['금', '토', '일', '월', null, null], '', '화, 수'),
          { type: 'choice', prompt: '달력의 한 줄에는 며칠이 있나요?', options: ['5일', '7일', '10일'], answer: '7일' },
          { type: 'table', prompt: '내가 사는 곳에서 되풀이되는 것과 커지는 것을 하나씩 찾아 쓰세요.', columns: ['규칙의 종류', '내가 찾은 것'], cells: [['되풀이되는 규칙', ''], ['커지는 규칙', '']], answer: '예: 신호등 색 / 층 번호' },
          { type: 'short', prompt: '달력에서 찾은 규칙을 한 문장으로 써 보세요.' },
        ],
        easy: { note: '달력은 한 줄에 7일이에요. 같은 요일은 아래로 7씩 커져요.', items: [
          wpat('같은 요일의 날짜를 세로로 읽었어요. 빈칸에 알맞은 수를 쓰세요.', [1, 8, 15, null], '', '22'),
          wpat('요일 이름이 되풀이돼요. 빈칸에 알맞은 요일을 쓰세요.', ['수', '목', '금', '토', null], '', '일'),
          { type: 'choice', prompt: '신호등 색이 되풀이되는 것을 골라 ○ 하세요.', options: ['초록, 노랑, 빨강, 초록', '초록, 빨강, 파랑, 보라'], answer: '초록, 노랑, 빨강, 초록' },
          { type: 'draw', prompt: '신호등 색을 차례로 세 번 되풀이해서 그려 보세요.' },
        ] },
      },
      diff: { easy: '조각이 6개씩 크게 보이고, 수직선 도착점 수가 보여요. 맞는 칸에 초록 테두리가 생겨요.', base: '달력·요일·신호등 빈칸을 채우고 뛰어 세기로 시각을 찾아요.', challenge: '작아지는 규칙까지 세 종류로 나누는 더 해 보기를 풀고, 뛴 횟수와 닿은 수를 구별해 설명해요.' },
      notes: '자주 보이는 어려움: ① 달력에서 세로로 읽을 때 1씩 더한다 → 한 줄이 7일임을 센다. ② 요일 다음에 오는 이름이 다시 돌아온다는 것을 놓친다. ③ 뛰어 세기에서 뛴 횟수와 닿은 수를 구별하지 못한다. 시각·달력 실제 날짜에는 개인 정보를 쓰지 않는다.',
    }),
    // ───────────────────────────── 7차시 (core · 내가 정한 묶음) ─────────────────────────────
    lesson(7, {
      title: '내가 정한 묶음을 되풀이해 무늬 만들기',
      objective: '두세 가지 조각으로 한 묶음을 정하고, 그 묶음을 되풀이해서 규칙이 있는 무늬를 만들 수 있다.',
      desc: 'children decorating a long paper strip with their own chosen repeating pattern of stars, hearts and circles at a craft table',
      text: '내가 만드는 무늬', layers: [{ motif: 'tree', x: 100, y: 216 }, { motif: 'flower', x: 380, y: 228, color: 'rose' }],
      intro: ['"이번에는 규칙을 찾는 사람이 아니라 만드는 사람이에요. 어떤 묶음으로 무늬를 만들고 싶어요?" 별, 하트, 동그라미 단추를 보이고 "한 묶음을 먼저 정한 뒤 그 묶음을 되풀이해요"라고 말한다. 처음부터 마음대로 늘어놓아 규칙이 없어지는 학생이 많으니, 처음 몇 칸을 한 묶음으로 정해 소리 내어 읽게 한다.', '내가 쓸 두세 가지 모양이나 색을 정해 보고, 어떤 차례로 놓을지 말해 봐요.'],
      acts: [
        { id: 'a1', title: '활동 1. 정한 묶음으로 무늬 만들기', minutes: 10, tool: 'pattern',
          task: '아래 조각 단추로 칸을 차례로 채워 규칙이 있는 무늬를 만들어요.',
          teacher: '"한 묶음은 어떤 조각들이에요? 두 번째 묶음도 똑같이 놓았나요?" 묶음 없이 마음대로 늘어놓은 학생에게는 처음 세 칸만 보고 같은 순서로 다시 놓게 한다. 묶음 길이가 문제와 다르게 만든 학생에게는 묶음 하나의 조각 수를 세어 보게 한다.',
          levels: { easy: { perRow: 6 }, base: {}, challenge: {} },
          items: [
            make('별, 하트, 동그라미 세 가지가 차례로 되풀이되는 무늬를 만들어 보세요.', ['star:buttercup', 'heart:rose', 'circle:sky'], 9, { rule: 'repeat', period: 3, uses: 3 }, 0.15),
            make('네 칸이 한 묶음으로 두 번 되풀이되는 무늬를 만들어 보세요.', ['triangle:mint', 'square:peach'], 8, { rule: 'repeat', period: 4, uses: 2 }, 0.22),
            make('별, 별, 하트를 되풀이하는 무늬를 만들어 보세요.', ['star:buttercup', 'heart:rose', 'circle:sky'], 9, { rule: 'core', core: ['star:buttercup', 'star:buttercup', 'heart:rose'] }, 0.2),
            make('더 해 보기: 마음에 드는 규칙으로 열두 칸 무늬를 만들어 보세요. 묶음이 세 번 이상 나와야 해요.', ['diamond:mint', 'hexagon:lavender', 'circle:peach', 'square:sky'], 12, { rule: 'repeat', minRepeats: 3, uses: 2 }, 0.3, { extra: true }),
          ] },
        { id: 'a2', title: '활동 2. 짝이 만든 무늬의 다음 조각 맞히기', minutes: 8, tool: 'pattern',
          task: '짝이 만든 무늬라고 생각하고 빈칸에 알맞은 조각을 넣어요.',
          teacher: '"규칙이 분명하면 짝이 다음 조각을 맞힐 수 있어요." 짝이 맞히지 못하는 무늬는 묶음이 분명하지 않다는 뜻이라고 말해 준다. 빈칸에 바로 앞 조각을 따라 놓는 학생에게는 처음 묶음으로 돌아가게 한다.',
          levels: PL,
          items: [
            fill('육각형, 동그라미가 번갈아 놓여요. 빈칸 두 곳을 채워 보세요.', ['hexagon:lavender', 'circle:peach', 'hexagon:lavender', 'circle:peach', null, null], ['hexagon:lavender', 'circle:peach'], 0.12),
            fill('마름모, 마름모, 네모가 되풀이돼요. 빈칸을 채워 보세요.', ['diamond:mint', 'diamond:mint', 'square:sky', 'diamond:mint', 'diamond:mint', null, 'diamond:mint'], ['square:sky'], 0.2),
            fill('세 칸 묶음이 되풀이돼요. 빈칸 두 곳을 채워 보세요.', ['heart:rose', 'circle:sky', 'star:buttercup', 'heart:rose', 'circle:sky', 'star:buttercup', 'heart:rose', null, null], ['circle:sky', 'star:buttercup'], 0.25),
          ] },
        { id: 'a3', title: '활동 3. 내 규칙을 말로 나타내기', minutes: 8, tool: 'pattern',
          task: '줄을 보고 알맞은 규칙의 말을 골라요. 그 뒤 내가 만든 무늬를 짝에게 말해 봐요.',
          teacher: '"내 규칙을 한 문장으로 말해 볼까요?" 묶음에 들어간 조각의 수와 순서를 모두 말하도록 돕는다. 마지막 짝 활동에서 짝이 다음 조각을 맞히지 못하면 규칙이 아닌 곳이 있는지 같이 찾아본다.',
          levels: { easy: { mode: 'rule' }, base: { mode: 'rule' }, challenge: { mode: 'rule' } },
          items: [
            rule('이 무늬의 규칙을 알맞게 말한 것을 골라 보세요.', ['circle:peach', 'circle:peach', 'square:sky', 'circle:peach', 'circle:peach', 'square:sky'], ['동그라미 둘, 네모 하나가 되풀이돼요', '동그라미 하나, 네모 둘이 되풀이돼요', '동그라미와 네모가 번갈아 나와요'], 0, 0.15),
            rule('색과 모양이 함께 있는 이 띠의 규칙을 알맞게 말한 것을 골라 보세요.', ['star:rose', 'star:sky', 'heart:rose', 'star:rose', 'star:sky', 'heart:rose'], ['별 분홍, 별 파랑, 하트 분홍이 되풀이돼요', '별과 하트가 번갈아 나와요', '분홍과 파랑이 번갈아 나와요'], 0, 0.25),
            { prompt: '내가 만든 규칙 무늬를 짝에게 보여 주고, 다음 조각이 무엇인지 맞혀 보게 한 뒤 "다 했어요"를 누르세요.', free: true, talk: true },
          ] },
      ],
      wrap: ['"내가 만든 무늬의 규칙을 한 문장으로 말해 볼까요?" 한 묶음에 무엇이 들어 있고 몇 번 되풀이하는지 학생 말로 말하게 한다. 출구 1번을 틀린 학생은 묶음이 분명한지, 2번을 틀린 학생은 앞 조각을 따라 놓는지 다음 시간에 먼저 살핀다.', [
        xt('pattern', { mode: 'make', palette: ['heart:rose', 'star:buttercup', 'circle:mint'], length: 6 }, '하트, 별, 동그라미 세 가지를 차례로 되풀이해 여섯 칸 무늬를 만들어 보세요.', { rule: 'repeat', period: 3, uses: 3 }, 0.18),
        xt('pattern', { seq: ['hexagon:sky', 'square:rose', 'hexagon:sky', 'square:rose', 'hexagon:sky', null] }, '규칙에 맞게 빈칸에 알맞은 조각을 넣으세요.', { fill: ['square:rose'] }, 0.12),
        { type: 'choice', prompt: '규칙이 있는 무늬를 만들려면 어떻게 해야 하나요?', options: ['한 묶음을 정해 되풀이해요', '마음대로 아무것이나 놓아요', '한 가지만 계속 놓아요'], answer: 0, difficulty: 0.12, explain: '묶음을 먼저 정하고 같은 순서로 되풀이해야 규칙이 생겨요.' },
      ]],
      ws: {
        title: '내가 정한 규칙으로 무늬 만들기',
        items: [
          wpat('규칙을 찾아 빈칸에 알맞은 모양을 그리세요.', ['heart:rose', 'circle:sky', 'star:buttercup', 'heart:rose', 'circle:sky', null, null], '', '별, 하트'),
          { type: 'draw', prompt: '세모, 네모, 동그라미 세 가지로 세 칸 묶음이 세 번 되풀이되는 무늬를 그려 보세요.' },
          { type: 'choice', prompt: '"별, 별, 하트"가 되풀이될 때 여섯째 칸은 무엇인가요?', options: ['별', '하트'], answer: '하트' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '규칙이 있는 무늬는 한 ______을 되풀이해서 만들어요.', answer: '묶음' },
          { type: 'short', prompt: '내가 만든 무늬의 규칙을 한 문장으로 써 보세요.' },
        ],
        easy: { note: '먼저 두세 칸을 한 묶음으로 정해요. 그 묶음을 같은 순서로 되풀이해서 놓아요.', items: [
          wpat('빈칸에 알맞은 모양을 그리세요.', ['circle:rose', 'square:sky', 'circle:rose', 'square:sky', null], '', '동그라미'),
          { type: 'draw', prompt: '동그라미와 네모로 번갈아 놓는 무늬를 여섯 칸 그려 보세요.' },
          { type: 'choice', prompt: '"별, 하트"가 되풀이될 때 다음에 올 것은? (별, 하트, 별, ?)', options: ['별', '하트'], answer: '하트' },
          { type: 'short', prompt: '내 무늬의 한 묶음에 들어간 조각을 써 보세요.' },
        ] },
      },
      diff: { easy: '한 줄에 조각이 6개씩 크게 보이고, 두 가지 조각으로 번갈아 놓는 무늬부터 만들어요.', base: '세 가지 조각, 네 칸 묶음, 정한 묶음 되풀이하기를 스스로 만들고 규칙을 말해요.', challenge: '열두 칸 무늬를 마음대로 정한 규칙으로 만들고, 짝이 다음 조각을 맞히도록 규칙을 설명해요.' },
      notes: '자주 보이는 어려움: ① 묶음 없이 마음대로 늘어놓는다 → 처음 몇 칸을 한 묶음으로 정해 소리 내어 읽게 한다. ② 묶음의 길이가 문제와 다르다. ③ 묶음을 한 번만 놓고 되풀이하지 않는다. ④ 규칙을 말로 설명할 때 조각의 수와 순서를 빠뜨린다.',
    }),
    // ───────────────────────────── 8차시 (practice · 수 배열 만들기) ─────────────────────────────
    lesson(8, {
      title: '정한 수만큼 커지거나 작아지는 수 배열 만들기',
      objective: '처음 수와 변하는 크기를 정해 같은 수만큼 커지거나 작아지는 수 배열을 만들고, 규칙에 맞지 않는 수를 찾아 고칠 수 있다.',
      desc: 'children writing number cards on a long paper ribbon that grows by the same amount each step, with a big number line on the wall',
      text: '내가 만드는 수 배열', layers: [{ motif: 'house', x: 110, y: 214 }, { motif: 'tree', x: 380, y: 216 }],
      intro: ['"2에서 시작해서 3씩 커지게 수를 늘어놓아 볼까요?" 칠판에 2를 쓰고 3을 더한 5, 다시 3을 더한 8을 한 칸씩 써 보인다. "다음 수는 어떻게 알았어요?" 하고 물어 앞의 수에 같은 수를 더했다는 말이 나오게 한다. 앞 수에 더하는 수가 매번 달라지면 규칙이 아니라는 점을 짚는다.', '1부터 시작해 2씩 커지게 손가락을 접으며 세어 봐요.'],
      acts: [
        { id: 'a1', title: '활동 1. 정한 크기로 수 배열 만들기', minutes: 10, tool: 'pattern',
          task: '칸에 수를 써서 일정하게 커지거나 작아지는 수 배열을 만들어요. 이웃한 수의 차이가 모두 같아야 해요.',
          teacher: '"이웃한 두 수의 차이가 모두 같은가요? 하나씩 적어 보세요." 중간에서 더하는 수가 바뀌는 학생에게는 차이를 수 사이에 화살표로 적게 한다. 작아지는 배열에서 빼는 수를 더해 버리는 학생에게는 한 칸 갈 때 수가 작아져야 한다는 것을 말하게 한다.',
          levels: { easy: { perRow: 6 }, base: {}, challenge: {} },
          items: [
            makeNum('2에서 시작해 3씩 커지는 수 여섯 개를 만들어 보세요.', 6, 2, 3, 0.12),
            makeNum('10에서 시작해 5씩 커지는 수 여섯 개를 만들어 보세요.', 6, 10, 5, 0.15),
            makeNum('20에서 시작해 2씩 작아지는 수 여섯 개를 만들어 보세요.', 6, 20, -2, 0.22),
            makeNum('더 해 보기: 50에서 시작해 10씩 작아지는 수 다섯 개를 만들어 보세요.', 5, 50, -10, 0.28, { extra: true }),
          ] },
        { id: 'a2', title: '활동 2. 규칙에 맞지 않는 수 찾기', minutes: 8, tool: 'pattern',
          task: '수 배열에서 규칙에 맞지 않는 수를 하나 눌러요.',
          teacher: '"이웃한 두 수의 차이를 차례로 적어 보세요. 처음 다른 차이는 어디에서 나와요?" 마지막 수만 틀렸다고 보는 학생에게는 처음부터 차이를 다 적게 한다. 맞는 수를 알았으면 고쳐 써 보게 한다.',
          levels: { easy: { mode: 'odd' }, base: { mode: 'odd' }, challenge: { mode: 'odd' } },
          items: [
            odd('5씩 커지는 수 배열이에요. 규칙에 맞지 않는 수를 찾아 눌러 보세요.', [5, 10, 15, 19, 25, 30], 3, 0.15),
            odd('4씩 작아지는 수 배열이에요. 규칙에 맞지 않는 수를 찾아 눌러 보세요.', [30, 26, 22, 18, 15, 10], 4, 0.22),
            odd('2씩 커지는 수 배열이에요. 규칙에 맞지 않는 수를 찾아 눌러 보세요.', [2, 4, 6, 8, 10, 13], 5, 0.25, { conclude: '10 다음에는 12가 와야 해요. 13은 이웃한 수와의 차이가 3이라서 규칙에 맞지 않아요.' }),
          ] },
        { id: 'a3', title: '활동 3. 수 배열을 만들 때 지킬 것 고르기', minutes: 8, tool: 'mindmap',
          task: '수 배열을 만들거나 확인할 때 해야 할 일을 모두 골라요.',
          teacher: '"규칙이 있는 수 배열이 되려면 무엇이 같아야 할까요?" 첫 두 수의 차이만 보고 끝까지 확인하지 않는 학생에게는 마지막 두 수의 차이도 구해 보게 한다. 규칙을 한 문장으로 말하는 습관을 들인다.',
          levels: ML('pick', '수 배열 규칙'),
          items: [
            pk('커지는 수 배열을 만들 때 지킬 것을 모두 골라 보세요.', '수 배열 규칙', [['이웃한 두 수의 차이가 늘 같아요', true], ['앞 수에 같은 수를 더해요', true], ['마음대로 아무 수나 써요', false], ['수가 변하지 않아요', false]], 0.15, '지킬 것'),
            pk('작아지는 수 배열을 만들 때 지킬 것을 모두 골라 보세요.', '수 배열 규칙', [['앞 수에서 같은 수를 빼요', true], ['한 칸 갈 때마다 수가 작아져요', true], ['더했다 뺐다 해요', false], ['한 번은 크게, 한 번은 작게 줄여요', false]], 0.2, '지킬 것'),
            pk('다 만든 수 배열을 확인하는 방법을 모두 골라 보세요.', '수 배열 규칙', [['이웃한 수의 차이를 모두 적어 봐요', true], ['차이가 모두 같은지 살펴요', true], ['첫 두 수만 봐요', false], ['마지막 수만 봐요', false]], 0.25, '확인하는 방법', { conclude: '차이를 처음부터 끝까지 적어 모두 같은지 보아야 규칙이 있는 수 배열이에요.' }),
          ] },
      ],
      wrap: ['"규칙이 있는 수 배열은 무엇이 늘 같아요?" 이웃한 두 수의 차이가 늘 같다는 말을 학생 입으로 정리한다. 출구 1번을 틀린 학생은 중간에 차이가 달라지는지, 출구 2번을 틀린 학생은 작아지는 규칙에서 더하는지 다음 시간에 먼저 살핀다.', [
        xt('pattern', { mode: 'make', input: 'number', length: 5, start: 4 }, '4에서 시작해 4씩 커지는 수 다섯 개를 만들어 보세요.', { rule: 'add', step: 4 }, 0.15),
        xt('pattern', { mode: 'odd', seq: [12, 9, 6, 4, 0] }, '3씩 작아지는 수 배열이에요. 규칙에 맞지 않는 수를 찾아 누르세요.', { odd: 3 }, 0.2),
        { type: 'choice', prompt: '40, 35, 30, 25의 규칙은 무엇인가요?', options: ['5씩 작아져요', '5씩 커져요', '40이 되풀이돼요'], answer: 0, difficulty: 0.12, explain: '이웃한 수의 차이가 늘 5이고 점점 작아져요.' },
      ]],
      ws: {
        title: '수 배열 만들기',
        items: [
          { type: 'table', prompt: '3에서 시작해 4씩 커지는 수를 빈칸에 쓰세요.', columns: ['1번째', '2번째', '3번째', '4번째', '5번째'], cells: [['3', '', '', '', '']], answer: '7, 11, 15, 19' },
          wpat('규칙에 맞게 빈칸에 알맞은 수를 쓰세요.', [40, 35, 30, null, 20, null], '', '25, 15'),
          wpat('규칙에 맞지 않는 수에 ×표 하세요. (2씩 커지는 수 배열)', [3, 5, 7, 10, 11, 13], '', '10'),
          { type: 'choice', prompt: '2, 6, 10, 14의 규칙에 ○ 하세요.', options: ['2씩 커져요', '4씩 커져요', '6씩 커져요'], answer: '4씩 커져요' },
          { type: 'short', prompt: '내가 만든 수 배열의 규칙을 한 문장으로 써 보세요.' },
        ],
        easy: { note: '앞 수에 정한 수를 더하면서 한 칸씩 써요. 이웃한 수의 차이가 같은지 살펴요.', items: [
          { type: 'table', prompt: '1에서 시작해 2씩 커지는 수를 빈칸에 쓰세요.', columns: ['1번째', '2번째', '3번째', '4번째'], cells: [['1', '', '', '']], answer: '3, 5, 7' },
          wpat('빈칸에 알맞은 수를 쓰세요.', [10, 20, 30, null, 50], '', '40'),
          { type: 'choice', prompt: '5, 10, 15의 규칙에 ○ 하세요.', options: ['5씩 커져요', '10씩 커져요'], answer: '5씩 커져요' },
          { type: 'draw', prompt: '3씩 커지는 수를 다섯 개 써 보세요.' },
        ] },
      },
      diff: { easy: '칸이 6개씩 크게 보이고, 1~2씩 변하는 배열부터 만들어요.', base: '3씩, 5씩 커지고 2씩 작아지는 수 배열을 만들고 틀린 수를 찾아요.', challenge: '10씩 작아지는 배열까지 만들고, 규칙에 맞지 않는 수를 찾아 고치며 차이를 모두 적어 확인해요.' },
      notes: '자주 보이는 어려움: ① 중간에서 더하는 수가 바뀐다 → 이웃한 수 사이에 차이를 적어 모두 같은지 본다. ② 작아지는 배열에서 수를 더해 커지게 만든다. ③ 첫 두 수의 차이만 보고 끝까지 확인하지 않는다. ④ 틀린 수를 찾아도 어떻게 고칠지 모른다 → 앞 수에 더하는 수로 맞는 수를 구한다.',
    }),
    // ───────────────────────────── 9차시 (core · 규칙 바꾸기) ─────────────────────────────
    lesson(9, {
      title: '규칙 하나를 바꾸어 새로운 무늬 만들기',
      objective: '색만, 모양만, 또는 묶음의 길이만 바꾸어 새로운 규칙 무늬를 만들고, 바뀐 점을 말할 수 있다.',
      desc: 'two paper-cut strips on a craft table, one with circles and squares and one changed into new colors, with children comparing them and smiling',
      text: '규칙을 바꾸어요', layers: [{ motif: 'house', x: 110, y: 214, color: 'lavender' }, { motif: 'flower', x: 370, y: 228 }],
      intro: ['"어제 만든 무늬에서 색만 바꾸면 어떤 무늬가 될까요?" ○ □ ○ □를 보이고 색만 바꾼 줄, 모양만 바꾼 줄을 나란히 놓는다. "무엇이 달라지고 무엇은 그대로예요?" 하고 물어 규칙을 바꾸는 방법이 여러 가지임을 알게 한다. 한 번에 모두 바꾸면 처음 규칙과 비교할 수 없으니 하나씩 바꾼다고 말해 준다.', '내가 어제 만든 무늬에서 바꾸고 싶은 한 가지를 정해 말해 봐요.'],
      acts: [
        { id: 'a1', title: '활동 1. 정한 묶음대로 새 무늬 만들기', minutes: 10, tool: 'pattern',
          task: '정한 묶음을 되풀이해서 칸을 채워요. 묶음의 순서를 바꾸지 않아요.',
          teacher: '"한 묶음은 어떤 조각들이에요? 순서를 소리 내어 읽으며 놓아 보세요." 묶음의 순서를 바꾸어 놓는 학생에게는 처음 묶음을 겹쳐 놓고 견주게 한다. 묶음이 끝났을 때 처음으로 돌아가 다시 시작하는지 지켜본다.',
          levels: { easy: { perRow: 6 }, base: {}, challenge: {} },
          items: [
            make('별, 동그라미, 동그라미를 되풀이하는 무늬를 만들어 보세요.', ['star:buttercup', 'circle:sky', 'heart:rose'], 9, { rule: 'core', core: ['star:buttercup', 'circle:sky', 'circle:sky'] }, 0.15),
            make('세모, 세모, 네모, 네모를 되풀이하는 무늬를 만들어 보세요.', ['triangle:mint', 'square:peach', 'diamond:lavender'], 8, { rule: 'core', core: ['triangle:mint', 'triangle:mint', 'square:peach', 'square:peach'] }, 0.22),
            make('모양은 별 그대로, 색만 노랑, 파랑, 분홍으로 바꾸어 되풀이해 보세요.', ['star:buttercup', 'star:sky', 'star:rose'], 9, { rule: 'core', core: ['star:buttercup', 'star:sky', 'star:rose'] }, 0.2),
            make('더 해 보기: 분홍 하트, 파랑 동그라미, 파랑 하트, 분홍 동그라미를 되풀이해 보세요.', ['heart:rose', 'circle:sky', 'heart:sky', 'circle:rose'], 8, { rule: 'core', core: ['heart:rose', 'circle:sky', 'heart:sky', 'circle:rose'] }, 0.3, { extra: true }),
          ] },
        { id: 'a2', title: '활동 2. 색만, 모양만 바뀐 무늬의 빈칸 채우기', minutes: 8, tool: 'pattern',
          task: '무엇이 바뀌고 무엇이 그대로인지 찾아 빈칸을 채워요.',
          teacher: '"색은 그대로예요, 모양은 그대로예요?" 두 가지가 함께 바뀌는 줄에서 한 가지만 보고 쓰는 학생에게는 색 줄과 모양 줄을 따로 읽게 한다. 묶음의 길이가 색과 모양에서 다르면 두 길이가 처음으로 함께 돌아오는 칸이 되풀이 한 묶음임을 짚는다.',
          levels: PL,
          items: [
            fill('모양은 그대로이고 색만 번갈아 바뀌어요. 빈칸을 채워 보세요.', ['circle:rose', 'circle:sky', 'circle:rose', 'circle:sky', null, null], ['circle:rose', 'circle:sky'], 0.12),
            fill('색은 그대로이고 모양만 차례로 바뀌어요. 빈칸 두 곳을 채워 보세요.', ['square:mint', 'triangle:mint', 'star:mint', 'square:mint', 'triangle:mint', null, null], ['star:mint', 'square:mint'], 0.2),
            fill('모양은 번갈아, 색은 세 가지가 차례로 바뀌어요. 빈칸을 채워 보세요.', ['heart:rose', 'star:sky', 'heart:buttercup', 'star:rose', 'heart:sky', null], ['star:buttercup'], 0.28, null, { palette: ['star:buttercup', 'star:sky', 'star:rose', 'heart:rose', 'heart:sky', 'heart:buttercup'] }),
          ] },
        { id: 'a3', title: '활동 3. 규칙을 바꾸었을 때 달라진 점 찾기', minutes: 8, tool: 'mindmap',
          task: '처음 줄을 바꾸어 만든 새 줄을 보고, 달라진 점을 모두 골라요.',
          teacher: '"처음 줄과 새 줄에서 무엇이 달라졌어요? 그대로인 것도 있나요?" 달라진 점만 찾고 같은 점을 놓치는 학생에게는 두 줄을 위아래로 맞대어 보게 한다. 규칙이 사라지지 않았다는 것도 함께 말하게 한다.',
          levels: ML('pick', '바뀐 점'),
          items: [
            pk('"○ □ ○ □"를 "○ □ □ ○ □ □"로 바꾸었어요. 바뀐 점을 모두 골라 보세요.', '바뀐 점', [['네모가 하나 더 늘었어요', true], ['한 묶음의 길이가 길어졌어요', true], ['동그라미가 없어졌어요', false], ['되풀이되지 않아요', false]], 0.15, '바뀐 점'),
            pk('"빨강 파랑 빨강 파랑"을 "빨강 파랑 노랑 빨강 파랑 노랑"으로 바꾸었어요. 바뀐 점을 모두 골라 보세요.', '바뀐 점', [['노랑이 생겼어요', true], ['묶음이 세 칸이 되었어요', true], ['빨강이 없어졌어요', false], ['규칙이 없어졌어요', false]], 0.22, '바뀐 점'),
            pk('"2 4 6 8"을 3씩 커지게 바꾸었어요. 달라지는 점을 모두 골라 보세요.', '바뀐 점', [['이웃한 수의 차이가 3이 돼요', true], ['수가 더 빨리 커져요', true], ['수가 작아져요', false], ['차이가 일정하지 않아요', false]], 0.28, '달라지는 점', { conclude: '2씩에서 3씩으로 바뀌어도 이웃한 수의 차이가 늘 같은 규칙은 그대로예요.' }),
          ] },
      ],
      wrap: ['"규칙을 바꿀 때 한 번에 몇 가지를 바꾸면 비교하기 쉬울까요?" 한 가지씩 바꾸면 처음 규칙과 견주기 쉽다는 말을 학생 입으로 정리한다. 출구 1번을 틀린 학생은 묶음의 순서를 바꾸는지, 출구 2번을 틀린 학생은 색과 모양을 한꺼번에 읽는지 다음 시간에 먼저 살핀다.', [
        xt('pattern', { mode: 'make', palette: ['heart:rose', 'star:buttercup', 'circle:sky'], length: 6 }, '하트, 별, 별을 되풀이해 여섯 칸 무늬를 만들어 보세요.', { rule: 'core', core: ['heart:rose', 'star:buttercup', 'star:buttercup'] }, 0.2),
        xt('pattern', { seq: ['diamond:peach', 'diamond:lavender', 'diamond:peach', 'diamond:lavender', null] }, '모양은 그대로이고 색이 번갈아 바뀌어요. 빈칸을 채워 보세요.', { fill: ['diamond:peach'] }, 0.12),
        { type: 'choice', prompt: '"○ □ ○ □"에서 모양은 그대로 두고 색만 바꾸면 어떻게 되나요?', options: ['모양이 같은 채 색이 달라져요', '모양이 모두 달라져요', '규칙이 없어져요'], answer: 0, difficulty: 0.1, explain: '모양은 그대로이고 색만 바뀐 무늬가 돼요.' },
      ]],
      ws: {
        title: '규칙을 바꾸어 새 무늬 만들기',
        items: [
          wpat('색만 번갈아 바뀌는 무늬예요. 빈칸에 알맞은 모양을 그리세요.', ['square:rose', 'square:sky', 'square:rose', 'square:sky', null, null], '', '분홍 네모, 파랑 네모'),
          { type: 'draw', prompt: '"○ □ ○ □"에서 모양만 바꾸어 새 무늬를 여섯 칸 그려 보세요.' },
          wpat('모양은 번갈아, 색은 세 가지가 차례로 바뀌어요. 빈칸에 알맞은 모양을 그리세요.', ['triangle:mint', 'circle:peach', 'triangle:lavender', 'circle:mint', 'triangle:peach', null], '', '동그라미(보라)'),
          { type: 'choice', prompt: '"빨강 파랑 빨강 파랑"을 "빨강 파랑 노랑 빨강 파랑 노랑"으로 바꾸면 무엇이 달라지나요?', options: ['한 묶음이 세 칸이 돼요', '빨강이 없어져요'], answer: '한 묶음이 세 칸이 돼요' },
          { type: 'short', prompt: '처음 무늬에서 한 가지를 바꾸어 만든 새 무늬를 설명해 보세요.' },
        ],
        easy: { note: '바꿀 것을 한 가지만 정해요. 색만 바꾸거나 모양만 바꾸어요.', items: [
          wpat('색만 번갈아 바뀌는 무늬예요. 빈칸에 알맞은 모양을 그리세요.', ['circle:rose', 'circle:sky', 'circle:rose', null], '', '파랑 동그라미'),
          { type: 'draw', prompt: '동그라미와 네모로 번갈아 놓는 무늬의 색만 바꾸어 그려 보세요.' },
          { type: 'choice', prompt: '색만 바꾸면 달라지는 것은 무엇인가요?', options: ['색', '규칙'], answer: '색' },
          { type: 'short', prompt: '무엇을 바꾸었는지 한 문장으로 써 보세요.' },
        ] },
      },
      diff: { easy: '한 줄에 조각이 6개씩 크게 보이고, 색만 바꾸는 문항부터 시작해요.', base: '색만, 모양만, 묶음 길이만 바꾸어 만든 무늬를 읽고 만들어요.', challenge: '색과 모양이 함께 바뀌는 줄과 네 가지 조각이 얽힌 더 해 보기까지 만들고, 바뀐 점과 그대로인 점을 말해요.' },
      notes: '자주 보이는 어려움: ① 묶음의 순서를 바꾸어 놓아 규칙이 깨진다. ② 한 번에 여러 가지를 바꾸어 처음 규칙과 비교하지 못한다 → 한 가지씩 바꾼다. ③ 색과 모양이 함께 바뀌는 줄에서 한 가지만 보고 다음 조각을 정한다 → 색 줄, 모양 줄을 따로 읽는다.',
    }),
    // ───────────────────────────── 10차시 (practice · 친구 규칙 맞히고 고치기) ─────────────────────────────
    lesson(10, {
      title: '친구가 만든 규칙 맞히고 틀린 곳 고치기',
      objective: '친구가 만든 무늬와 수 배열에서 규칙을 말로 나타내고, 규칙에 맞지 않는 곳을 찾아 알맞게 고칠 수 있다.',
      desc: 'two children facing each other at a table, one covering part of a paper-cut pattern strip while the other guesses the next piece',
      text: '규칙을 맞혀요', layers: [{ motif: 'tree', x: 100, y: 216 }, { motif: 'house', x: 380, y: 214, color: 'buttercup' }],
      intro: ['"친구가 무늬를 가리고 다음 조각을 맞혀 보래요. 어떻게 하면 맞힐 수 있을까요?" 한 줄의 앞부분만 보여 주고 다음 조각을 맞히게 한다. 맞힌 학생에게 "어떻게 알았어요?" 하고 물어 규칙을 말로 나타내게 하고, 틀린 곳이 있는 줄에서는 처음부터 한 묶음씩 끊어 읽는 방법을 보여 준다.', '짝이 한 줄을 만들면 가려 놓고 다음 조각이 무엇일지 맞혀 봐요.'],
      acts: [
        { id: 'a1', title: '활동 1. 규칙에 맞지 않는 조각 찾기', minutes: 9, tool: 'pattern',
          task: '무늬나 수 배열에서 규칙에 맞지 않는 칸을 하나 눌러요.',
          teacher: '"어느 칸에서 처음으로 규칙이 깨지나요?" 마지막 칸만 틀렸다고 보는 학생에게는 한 묶음씩 끊어 읽어 가며 어디서 어긋나는지 찾게 한다. 틀린 곳을 찾으면 그 칸에 와야 할 조각이 무엇인지도 말하게 한다.',
          levels: { easy: { mode: 'odd' }, base: { mode: 'odd' }, challenge: { mode: 'odd' } },
          items: [
            odd('세모, 동그라미가 번갈아 놓여야 해요. 규칙에 맞지 않는 칸을 찾아 눌러 보세요.', ['triangle:peach', 'circle:mint', 'triangle:peach', 'circle:mint', 'triangle:peach', 'triangle:peach', 'triangle:peach', 'circle:mint'], 5, 0.18),
            odd('3씩 커지는 수 배열이에요. 규칙에 맞지 않는 수를 찾아 눌러 보세요.', [3, 6, 9, 12, 16, 18, 21], 4, 0.2),
            odd('별 둘, 하트 하나가 되풀이되어야 해요. 규칙에 맞지 않는 칸을 찾아 눌러 보세요.', ['star:rose', 'star:sky', 'heart:rose', 'star:rose', 'star:sky', 'heart:rose', 'star:rose', 'heart:sky', 'heart:rose'], 7, 0.28),
            odd('더 해 보기: 10씩 작아지는 수 배열이에요. 규칙에 맞지 않는 수를 찾아 눌러 보세요.', [100, 90, 80, 75, 60, 50], 3, 0.25, { extra: true }),
          ] },
        { id: 'a2', title: '활동 2. 알맞은 규칙의 말 고르기', minutes: 8, tool: 'pattern',
          task: '줄을 보고 규칙을 알맞게 말한 친구를 골라요.',
          teacher: '"누구의 말이 이 줄을 모두 설명하나요?" 일부만 맞는 말(처음 두 칸만 설명)을 고르는 학생에게는 줄 끝까지 말을 대어 보게 한다. 규칙을 말할 때는 수와 순서를 함께 말한다고 짚는다.',
          levels: { easy: { mode: 'rule' }, base: { mode: 'rule' }, challenge: { mode: 'rule' } },
          items: [
            rule('이 줄의 규칙을 알맞게 말한 친구를 골라 보세요.', ['square:peach', 'triangle:mint', 'square:peach', 'triangle:mint'], ['민지: 네모와 세모가 번갈아 나와요', '준호: 네모가 점점 늘어나요', '하나: 모두 같은 모양이에요'], 0, 0.12),
            rule('이 수 배열의 규칙을 알맞게 말한 친구를 골라 보세요.', [5, 10, 15, 20, 25, 30], ['5씩 커져요', '5가 되풀이돼요', '10씩 커져요'], 0, 0.15),
            rule('내려가는 수 배열이에요. 규칙을 알맞게 말한 친구를 골라 보세요.', [60, 55, 50, 45], ['5씩 작아져요', '5씩 커져요', '60이 되풀이돼요'], 0, 0.2),
          ] },
        { id: 'a3', title: '활동 3. 가려진 조각 맞히기', minutes: 9, tool: 'pattern',
          task: '묶음 전체가 가려져 있어요. 규칙을 찾아 빈칸 여러 곳을 한꺼번에 채워요.',
          teacher: '"가려진 부분이 많아도 규칙을 알면 맞힐 수 있어요." 빈칸이 이어져 있을 때 앞 조각만 따라 놓는 학생에게는 처음 묶음으로 돌아가 읽게 한다. 수 배열에서는 앞 수에 더하는 수를 먼저 정하게 한다.',
          levels: PL,
          items: [
            fill('두 조각이 한 묶음으로 두 번 놓인 뒤 세 번째 묶음이 가려졌어요. 빈칸을 채워 보세요.', ['triangle:mint', 'triangle:mint', 'square:sky', 'triangle:mint', 'triangle:mint', 'square:sky', null, null, null], ['triangle:mint', 'triangle:mint', 'square:sky'], 0.25),
            fill('같은 수씩 커지는 수 배열이에요. 빈칸에 알맞은 수를 쓰세요.', [1, 4, 7, null, 13, null, 19], [10, 16], 0.22),
            fill('가, 나, 다, 다가 되풀이돼요. 빈칸에 알맞은 글자를 쓰세요.', ['가', '나', '다', '다', '가', '나', '다', '다', null, null], ['가', '나'], 0.28),
          ] },
      ],
      wrap: ['"친구의 규칙을 맞히려면 무엇을 해야 해요?" 한 묶음을 끊어 읽고 수는 차이를 구한다는 말을 학생 입으로 정리한다. 출구 1번을 틀린 학생은 틀린 곳을 마지막 칸으로만 찾는지, 2번을 틀린 학생은 앞 조각을 따라 놓는지 다음 시간에 먼저 살핀다.', [
        xt('pattern', { mode: 'odd', seq: ['heart:rose', 'circle:sky', 'heart:rose', 'circle:sky', 'circle:sky', 'circle:sky'] }, '하트와 동그라미가 번갈아 놓여야 해요. 규칙에 맞지 않는 칸을 누르세요.', { odd: 4 }, 0.18),
        xt('pattern', { seq: ['square:lavender', 'star:peach', 'star:peach', 'square:lavender', 'star:peach', 'star:peach', null, null] }, '규칙에 맞게 빈칸 두 곳을 채워 보세요.', { fill: ['square:lavender', 'star:peach'] }, 0.2),
        { type: 'choice', prompt: '규칙에 맞지 않는 곳을 찾을 때 알맞은 방법은 무엇인가요?', options: ['처음부터 묶음마다 끊어 읽어요', '마지막 칸만 봐요', '아무 데나 눌러요'], answer: 0, difficulty: 0.12, explain: '묶음마다 끊어 읽으면 처음으로 어긋나는 칸을 찾을 수 있어요.' },
      ]],
      ws: {
        title: '친구 규칙 맞히고 고치기',
        items: [
          wpat('규칙에 맞지 않는 칸에 ×표 하세요. (동그라미, 네모가 번갈아)', ['circle:rose', 'square:sky', 'circle:rose', 'circle:rose', 'circle:rose', 'square:sky'], '', '4번째 칸(네모로 고치기)'),
          wpat('규칙에 맞지 않는 수에 ×표 하세요. (4씩 커지는 수 배열)', [4, 8, 12, 15, 20, 24], '', '15 (16으로 고치기)'),
          wpat('묶음이 가려졌어요. 빈칸에 알맞은 조각을 그리세요.', ['star:buttercup', 'heart:rose', 'heart:rose', 'star:buttercup', 'heart:rose', 'heart:rose', null, null, null], '', '별, 하트, 하트'),
          { type: 'choice', prompt: '"가 나 다 다"가 되풀이될 때 다섯째 칸은 무엇인가요?', options: ['가', '다'], answer: '가' },
          { type: 'short', prompt: '친구가 만든 무늬를 보고 규칙을 말로 설명해 보세요.' },
        ],
        easy: { note: '묶음마다 끊어 읽어 보세요. 처음으로 어긋나는 곳이 틀린 곳이에요.', items: [
          wpat('규칙에 맞지 않는 칸에 ×표 하세요.', ['circle:rose', 'square:sky', 'circle:rose', 'circle:rose'], '', '4번째 칸'),
          wpat('빈칸에 알맞은 수를 쓰세요.', [2, 4, 6, 8, null], '', '10'),
          { type: 'choice', prompt: '"가 나 가 나"의 다음에 올 글자는?', options: ['가', '나'], answer: '가' },
          { type: 'short', prompt: '짝의 무늬를 보고 다음 조각을 말해 보세요.' },
        ] },
      },
      diff: { easy: '한 줄에 조각이 6개씩 크게 보이고, 번갈아 나오는 무늬에서 틀린 칸 찾기부터 해요.', base: '틀린 칸 찾기, 알맞은 규칙의 말 고르기, 가려진 조각 맞히기를 스스로 풀어요.', challenge: '묶음 하나가 통째로 가려진 줄과 네 칸 묶음, 작아지는 수 배열에서 틀린 수를 찾고 고쳐 써요.' },
      notes: '자주 보이는 어려움: ① 틀린 칸을 마지막에서만 찾는다 → 처음부터 묶음을 끊어 읽는다. ② 빈칸이 이어질 때 앞 조각을 따라 놓는다. ③ 규칙의 말을 일부만 설명하는 것으로 고른다 → 줄 끝까지 대어 본다. ④ 틀린 수를 찾아도 고치지 못한다 → 앞 수에 더하는 수로 구한다.',
    }),
    // ───────────────────────────── 11차시 (wrap · 단원 정리) ─────────────────────────────
    lesson(11, {
      title: '규칙 찾기와 만들기 한눈에 정리하고 나만의 규칙 소개하기',
      objective: '단원에서 배운 되풀이·커지는·작아지는 규칙을 가려 말하고, 무늬·수 배열·표에서 규칙을 찾거나 만들어 설명할 수 있다.',
      desc: 'a classroom gallery of paper-cut pattern strips, number ribbons and small tables on the wall with children presenting their own rules',
      text: '나만의 규칙 소개', layers: [{ motif: 'house', x: 110, y: 214 }, { motif: 'tree', x: 380, y: 216 }, { motif: 'flower', x: 230, y: 228 }],
      intro: ['"이번 단원에서 우리는 어떤 규칙을 만났나요?" 무늬의 되풀이, 늘어나는 모양, 덧셈표, 곱셈표, 달력을 칠판에 한 줄씩 적게 한다. "내가 만든 규칙을 친구에게 소개하려면 무엇을 말해야 할까요?" 한 묶음의 모습, 얼마씩 변하는지, 몇 번 되풀이하는지를 모두 말해야 한다고 알려 준다.', '이 단원에서 가장 재미있었던 규칙 하나를 짝에게 말해 봐요.'],
      acts: [
        { id: 'a1', title: '활동 1. 규칙의 종류 나누기', minutes: 8, tool: 'mindmap',
          task: '규칙을 되풀이되는 규칙, 커지는 규칙, 작아지는 규칙으로 나누어요.',
          teacher: '"이 줄은 같은 것이 되풀이될까요, 점점 커질까요, 작아질까요?" 5 10 15 20을 되풀이 규칙으로 나누는 학생에게는 앞 수와의 차이를 말하게 한다. 되풀이되는 규칙에는 한 묶음이 있고, 커지거나 작아지는 규칙에는 같은 수의 차이가 있다고 짚는다.',
          levels: ML('sort', '규칙의 종류'),
          items: [
            srt('규칙의 종류를 알맞게 나누어 보세요.', '규칙의 종류', { '되풀이되는 규칙': ['○ □ ○ □', '가 가 나 가 가 나', '빨강 파랑 빨강 파랑'], '커지는 규칙': ['3 6 9 12', '1 3 5 7'], '작아지는 규칙': ['50 40 30 20', '9 6 3'] }, 0.15),
            srt('생활 속 규칙의 종류를 나누어 보세요.', '규칙의 종류', { '되풀이되는 규칙': ['신호등 초록 노랑 빨강', '봄 여름 가을 겨울'], '커지는 규칙': ['달력에서 세로 날짜', '엘리베이터 층 번호 1 2 3'], '작아지는 규칙': ['남은 쪽수 9 8 7', '타이머 5 4 3 2 1'] }, 0.22),
            srt('더 해 보기: 표에서 찾은 규칙을 나누어 보세요.', '규칙의 종류', { '같은 수씩 커지는 규칙': ['덧셈표 한 줄', '2단의 수', '5단의 수'], '되풀이되는 규칙': ['요일 이름', '신호등 색'] }, 0.28, { extra: true }),
          ] },
        { id: 'a2', title: '활동 2. 찾고 만들어 보기', minutes: 10, tool: 'pattern',
          task: '무늬와 수 배열의 빈칸을 채우고, 내가 정한 규칙으로 무늬와 수 배열을 만들어요.',
          teacher: '"찾을 때는 한 묶음이나 차이를 보고, 만들 때는 먼저 규칙을 정하세요." 앞 조각을 따라 놓는 학생이나 중간에 차이가 달라지는 학생에게는 지금까지 배운 방법(끊어 읽기, 차이 적기)을 떠올리게 한다. 만든 규칙은 한 문장으로 말하게 한다.',
          levels: { easy: { perRow: 6 }, base: {}, challenge: {} },
          items: [
            fill('같은 수씩 커지는 수 배열이에요. 빈칸에 알맞은 수를 쓰세요.', [2, 6, 10, null, 18, null], [14, 22], 0.15),
            fill('별, 하트가 번갈아 놓여요. 빈칸에 알맞은 조각을 넣으세요.', ['star:buttercup', 'heart:rose', 'star:buttercup', 'heart:rose', null, 'heart:rose'], ['star:buttercup'], 0.12),
            make('두 가지 이상 조각으로 규칙을 정해 여덟 칸 무늬를 만들어 보세요.', ['circle:sky', 'square:rose', 'triangle:mint'], 8, { rule: 'repeat', minRepeats: 2, uses: 2 }, 0.22),
            makeNum('더 해 보기: 7에서 시작해 4씩 커지는 수 다섯 개를 만들어 보세요.', 5, 7, 4, 0.28, { extra: true }),
          ] },
        { id: 'a3', title: '활동 3. 덧셈표·곱셈표 다시 보기', minutes: 8, tool: 'multiply',
          task: '덧셈표와 곱셈표의 빈칸을 규칙으로 채워요.',
          teacher: '"한 칸 오른쪽으로 가면 몇이 커졌어요?" 덧셈표와 곱셈표에서 같은 수씩 커지는 규칙이 있다는 것을 다시 짚는다. 곱셈표에서 단의 수 대신 곱하는 수를 더하는 학생에게는 표의 줄 머리를 짚게 한다.',
          levels: TL,
          items: [
            tbl('정리 문제: 덧셈표의 흰 칸 두 곳을 채워 보세요.', '+', [5, 6, 7], [1, 2, 3, 4], [[6, 3], [7, 4]], 0.15),
            tbl('9단 곱셈표의 빈칸을 모두 채워 보세요.', '×', [9], [1, 2, 3, 4, 5], 'row:9', 0.22),
            tbl('3단과 4단 곱셈표의 빈칸을 모두 채워 보세요.', '×', [3, 4], [1, 2, 3, 4], 'all', 0.25),
          ] },
      ],
      wrap: ['"이 단원에서 알게 된 규칙 찾는 방법을 말해 볼까요?" 끊어 읽기, 이웃한 수의 차이 구하기, 규칙을 먼저 정하고 만들기를 학생 말로 이어 정리한다. 출구 1번을 틀린 학생은 규칙의 종류를 가리는지, 2번을 틀린 학생은 규칙 만들기에서 묶음이 분명한지 다음 시간에 먼저 살핀다.', [
        xt('pattern', { seq: [8, 16, 24, null, 40, null] }, '같은 수씩 커지는 수 배열이에요. 빈칸에 알맞은 수를 쓰세요.', { fill: [32, 48] }, 0.18),
        xt('pattern', { mode: 'make', palette: ['star:buttercup', 'heart:rose', 'circle:sky'], length: 6 }, '내가 정한 규칙으로 여섯 칸 무늬를 만들어 보세요. 두 가지 이상을 되풀이해요.', { rule: 'repeat', minRepeats: 2, uses: 2 }, 0.2),
        { type: 'short', prompt: '이 단원에서 찾거나 만든 규칙을 한 가지 골라 문장으로 설명해 보세요.' },
      ]],
      ws: {
        title: '규칙 찾기와 만들기 정리',
        items: [
          wpat('규칙을 찾아 빈칸에 알맞은 모양을 그리세요.', ['star:rose', 'circle:sky', 'circle:sky', 'star:rose', 'circle:sky', null, null], '', '동그라미(파랑), 별(분홍)'),
          wpat('같은 수씩 커지는 규칙으로 빈칸에 알맞은 수를 쓰세요.', [3, 8, 13, null, 23, null], '', '18, 28'),
          wtbl('덧셈표의 빈칸을 채우세요.', '+', [2, 3, 4], [1, 2, 3, 4], [[3, 3], [4, 2], [4, 4]], '', '6, 6, 8'),
          { type: 'table', prompt: '자기 점검: 할 수 있으면 ○, 조금 헷갈리면 △를 쓰세요.', columns: ['나는 이것을 할 수 있어요', '○/△'], cells: [['무늬에서 규칙을 찾아요', ''], ['수 배열의 규칙을 찾아요', ''], ['표에서 규칙을 찾아요', ''], ['내가 정한 규칙으로 만들어요', '']], answer: '스스로 표시' },
          { type: 'draw', prompt: '내가 정한 규칙으로 무늬를 열 칸 그리고, 규칙을 한 문장으로 써 보세요.' },
        ],
        easy: { note: '규칙을 찾을 때는 묶음을 끊어 읽거나 이웃한 수의 차이를 구해요.', items: [
          wpat('빈칸에 알맞은 모양을 그리세요.', ['circle:rose', 'square:sky', 'circle:rose', 'square:sky', null], '', '동그라미'),
          wpat('빈칸에 알맞은 수를 쓰세요.', [5, 10, 15, null, 25], '', '20'),
          { type: 'choice', prompt: '2, 4, 6, 8의 규칙에 ○ 하세요.', options: ['2씩 커져요', '2씩 작아져요'], answer: '2씩 커져요' },
          { type: 'table', prompt: '자기 점검: 할 수 있으면 ○, 헷갈리면 △를 쓰세요.', columns: ['나는 이것을 할 수 있어요', '○/△'], cells: [['무늬에서 규칙을 찾아요', ''], ['내 규칙으로 무늬를 만들어요', '']], answer: '스스로 표시' },
        ] },
      },
      diff: { easy: '한 줄에 조각이 6개씩 크게 보이고, 규칙의 종류를 나눌 때 맞는 칸에 초록 테두리가 생겨요.', base: '규칙의 종류를 나누고, 찾고 만들기와 표 채우기를 스스로 해요.', challenge: '표에서 찾은 규칙 나누기와 7에서 시작해 4씩 커지는 수 만들기 같은 더 해 보기까지 풀고, 내 규칙을 소개해요.' },
      notes: '자주 보이는 어려움: ① 5 10 15 20 같은 커지는 규칙을 되풀이 규칙으로 가른다 → 앞 수와의 차이를 말하게 한다. ② 규칙을 만들 때 묶음이 분명하지 않다 → 처음 몇 칸을 한 묶음으로 정한다. ③ 곱셈표에서 단의 수 대신 곱하는 수를 더한다. 자기 점검 표는 교사가 다음 단원에서 다시 살필 차시를 고르는 데 쓴다.',
    }),
// @@NEXT@@
  ],
});
})();
