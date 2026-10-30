/* 1학년 1학기 4. 비교하기 — 단원 파일(차시 12개, 기존 차시 없음).
 * 흐름: 클립으로 재어 길이 비교(1) → 탑 높이 비교(2) → 몇 개 더 긴지(3) → 셋 이상 길이 차례(4)
 *      → 양팔저울로 무게 비교(5) → 같은 무게·셋 이상 무게 차례(6) → 바둑돌로 무게 재기(7) → 점판 칸 세어 넓이 비교(8)
 *      → 물의 양 비교(9) → 담을 수 있는 양(10) → 길이·무게·넓이·양 말로 나타내기(11) → 단원 정리(12).
 * 성취기준은 units-index 의 [2수03-06] 하나. 1학년은 cm·g 같은 표준 단위 없이 클립·블록·바둑돌·점판 칸으로 견준다.
 */
(function () {
const UID = 'g1-math-1-04', CU = 'g1-수학-1학기-4', UT = '4. 비교하기', STD = ['[2수03-06]'];
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
const lesson = (n, d) => ({
  id: `${UID}-${two(n)}`, schema: 'edu-lesson.v1', catalog: { unit: CU, lesson: n },
  grade: 1, subject: '수학', unitTitle: UT,
  title: d.title, objective: d.objective, standards: STD, minutes: 40, formats: ['chromebook', 'projector', 'print'],
  illustration: ill(d.desc, d.text, d.layers),
  stages: [
    Object.assign({ id: 'intro', title: '도입', minutes: 7, teacher: d.intro[0], student: d.intro[1] }, d.demo ? { demo: d.demo } : {}),
    { id: 'main', title: '전개', minutes: 26, activities: d.acts },
    { id: 'wrapup', title: '정리', minutes: 7, teacher: d.wrap[0], exitTicket: [...d.wrap[1], { type: 'mood', prompt: '오늘 공부는 어땠나요?' }] },
  ],
  worksheet: d.ws, differentiation: d.diff, teacherNotes: d.notes,
});
// 교구 단계 묶음
const RL = { easy: { mode: 'ruler', max: 12 }, base: { mode: 'ruler', max: 12 }, challenge: { mode: 'ruler', max: 12 } };
const SL = { easy: { mode: 'scale' }, base: { mode: 'scale' }, challenge: { mode: 'scale' } };
const VL = { easy: { mode: 'volume' }, base: { mode: 'volume' }, challenge: { mode: 'volume' } };
const GR = { easy: { mode: 'geoboard', size: 6 }, base: { mode: 'geoboard', size: 6 }, challenge: { mode: 'geoboard', size: 7 } };
const GM = { easy: { mode: 'geoboard', size: 6, showArea: true }, base: { mode: 'geoboard', size: 6 }, challenge: { mode: 'geoboard', size: 7 } };
const CARD_LV = { easy: { live: true, instant: true }, base: {}, challenge: {} };
const pair = (id, title, minutes, task, teacher, prompts, tool, levels) => ({ id, title, minutes, tool, pair: true, task, teacher, levels, items: prompts.map((prompt) => ({ prompt, free: true, difficulty: 0 })) });
// 클립·블록 같은 조각으로 길이(높이) 재기: 조각 몇 개만큼인지 쓴다
const tile = (prompt, name, len, unit, ulen, d, extra) => Object.assign({ prompt, toolOptions: { object: { name, len }, tiles: { name: unit, len: ulen } }, target: { read: len / ulen }, difficulty: d }, extra || {});
// 양팔저울: 더 무거운(heavy) 쪽 / 더 가벼운(light) 쪽 고르기. 무게가 같으면 수평
const bal = (prompt, l, r, kind, d, extra) => {
  const heavy = kind !== 'light';
  const pick = l[1] === r[1] ? 2 : ((l[1] > r[1]) === heavy ? 0 : 1);
  return Object.assign({ prompt, toolOptions: { mode: 'scale', kind: 'balance', left: [{ name: l[0], w: l[1] }], right: [{ name: r[0], w: r[1] }], readOnly: true,
    ask: { q: heavy ? '더 무거운 것은?' : '더 가벼운 것은?', choices: [l[0], r[0], '같아요'], explain: pick === 2 ? '저울이 수평이면 두 물건의 무게가 같아요.' : `${heavy ? '내려간' : '올라간'} 쪽 ${[l[0], r[0]][pick]}이(가) 더 ${heavy ? '무거워' : '가벼워'}요.` } },
  target: { pick }, difficulty: d }, extra || {});
};
// 바둑돌로 저울 맞추기
const stones = (prompt, name, w, d, extra) => Object.assign({ prompt, toolOptions: { mode: 'scale', kind: 'balance', left: [{ name, w }], unit: { name: '바둑돌', w: 1 }, maxUnits: 12 }, target: { balance: true }, difficulty: d }, extra || {});
// 눈금 그릇: 물의 양 비교
const vol = (prompt, beakers, q, choices, pick, d, extra) => Object.assign({ prompt, toolOptions: { mode: 'volume', beakers, readOnly: true, ask: { q, choices } }, target: { pick }, difficulty: d }, extra || {});
const cup = (label, v, w) => ({ v, max: 300, w: w || 1, label, ticks: false });
// 점판 도형: 칸 수 읽기 / 만들기
const area = (pts) => { let s = 0; pts.forEach((p, i) => { const q = pts[(i + 1) % pts.length]; s += p[0] * q[1] - q[0] * p[1]; }); return Math.abs(s) / 2; };
const geoRead = (prompt, pts, d, extra) => Object.assign({ prompt, state: { pts }, toolOptions: { readOnly: true, showCounts: false, askNum: { q: '모두 몇 칸인가요?', unit: '칸' } }, target: { num: area(pts) }, difficulty: d }, extra || {});
const geoMake = (prompt, a, d, extra) => Object.assign({ prompt, target: { area: a }, difficulty: d }, extra || {});
const rect = (c, r, w, h) => [[c, r], [c + w, r], [c + w, r + h], [c, r + h]];
const match = (prompt, topic, slots, cards, d, extra) => {
  const sl = slots.map((s, i) => ({ id: `s${i + 1}`, label: s }));
  const tg = {}; sl.forEach((s, i) => { tg[s.id] = cards[i]; });
  return Object.assign({ prompt, toolOptions: { mode: 'match', topic, slots: sl, cards: cards.slice().reverse() }, target: { match: tg }, difficulty: d }, extra || {});
};
const sortTo = (prompt, topic, names, groups, d, extra) => {
  const sl = names.map((s, i) => ({ id: `s${i + 1}`, label: s }));
  const tg = {}; sl.forEach((s, i) => { tg[s.id] = groups[i]; });
  const cards = [].concat(...groups);
  return Object.assign({ prompt, toolOptions: { mode: 'sort', topic, slots: sl, cards: cards.filter((_, i) => i % 2 === 0).concat(cards.filter((_, i) => i % 2 === 1)) }, target: { sort: tg }, difficulty: d }, extra || {});
};
const pickOf = (prompt, basket, cards, ok, d, extra) => Object.assign({ prompt, toolOptions: { mode: 'pick', basket, cards }, target: { pick: ok }, difficulty: d }, extra || {});
const orderOf = (prompt, topic, ordered, d, extra) => {
  const cards = ordered.slice(1).concat(ordered.slice(0, 1)).reverse();
  return Object.assign({ prompt, toolOptions: { mode: 'order', topic, cards, slots: ordered.map((_, i) => String(i + 1)) }, target: { order: ordered }, difficulty: d }, extra || {});
};
const L = [];
// ───────────────────────────── 1차시 (intro) ─────────────────────────────
L.push(lesson(1, {
  title: '클립으로 재어 어느 쪽이 더 긴지 비교하기',
  objective: '물건의 길이를 같은 클립으로 재어 몇 개만큼인지 말하고, 더 길다·더 짧다로 비교할 수 있다.',
  desc: 'a pencil, an eraser and a crayon lined up on a desk with paper clips laid end to end beside them for measuring',
  text: '어느 것이 더 길까요?',
  layers: [{ motif: 'house', x: 100, y: 214 }, { motif: 'flower', x: 300, y: 236 }, { motif: 'tree', x: 400, y: 216, s: 0.9 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"연필과 지우개를 나란히 놓으면 어느 쪽이 더 길까요?" 두 물건의 한쪽 끝을 맞추어 놓고 다른 쪽 끝을 비교한다. "눈으로만 보면 헷갈릴 때는 같은 클립을 이어 붙여 몇 개인지 세어 봐요." 클립을 틈을 두고 놓거나 겹쳐 놓는 학생이 있다 — 활동에서 "빈틈없이, 겹치지 않게"를 알려 준다.', '두 물건의 길이는 어떻게 견줄 수 있을까요?'],
  demo: { tool: 'measure', options: { mode: 'ruler', max: 12, object: { name: '연필', len: 8 }, tiles: { name: '클립', len: 2 } }, sequence: [{ ans: 4 }] },
  acts: [
    { id: 'a1', title: '활동 1. 클립을 이어 붙여 길이 재기', minutes: 9, tool: 'measure',
      task: '물건 아래에 클립을 빈틈없이 이어 붙인 모습을 보고, 클립 몇 개만큼인지 써요.',
      teacher: '"클립이 물건의 끝에서 끝까지 몇 개 들어가요? 하나씩 짚으며 세어요." 한쪽 끝이 맞지 않게 놓인 클립은 센 수가 달라진다고 짚는다. 클립 사이 틈까지 센 학생에게는 클립 한 개마다 손가락을 얹어 세게 한다.',
      levels: RL,
      items: [
        tile('연필의 길이는 클립 몇 개만큼인가요?', '연필', 8, '클립', 2, 0.05),
        tile('지우개의 길이는 클립 몇 개만큼인가요?', '지우개', 4, '클립', 2, 0.1),
        tile('크레파스의 길이는 클립 몇 개만큼인가요?', '크레파스', 6, '클립', 2, 0.12,
          { predict: { q: '연필(클립 4개)보다 크레파스가 더 길까요?', options: ['더 길어요', '더 짧아요', '같아요'], answer: 1 }, conclude: '크레파스는 클립 3개, 연필은 클립 4개예요. 클립이 더 적으면 더 짧아요.' }),
        tile('더 해 보기: 리본의 길이는 클립 몇 개만큼인가요?', '리본', 10, '클립', 2, 0.2, { extra: true }),
      ] },
    { id: 'a2', title: '활동 2. 기준보다 긴 것과 짧은 것 나누기', minutes: 11, tool: 'mindmap',
      task: '기준이 되는 물건의 클립 수와 견주어 "더 길어요"와 "더 짧아요"로 나누어 놓아요.',
      teacher: '"연필은 클립 4개예요. 리본은 클립 6개이니 연필보다 어떤가요?" 클립 수가 많을수록 더 길다고 말하게 한다. 수가 큰 쪽이 짧다고 거꾸로 말하는 학생에게는 클립을 이어 붙여 두 물건을 나란히 놓아 보게 한다.',
      levels: CARD_LV,
      items: [
        sortTo('연필(클립 4개)보다 더 긴 것과 더 짧은 것으로 나누어 보세요.', '연필과 견주기', ['더 길어요', '더 짧아요'], [['리본: 클립 6개', '가위: 클립 5개'], ['풀: 클립 2개', '지우개: 클립 1개']], 0.12),
        sortTo('공책(클립 7개)보다 더 긴 것과 더 짧은 것으로 나누어 보세요.', '공책과 견주기', ['더 길어요', '더 짧아요'], [['자: 클립 9개', '책: 클립 8개'], ['열쇠: 클립 3개', '단추: 클립 1개']], 0.15),
        sortTo('더 해 보기: 젓가락(클립 5개)보다 더 긴 것과 더 짧은 것으로 나누어 보세요.', '젓가락과 견주기', ['더 길어요', '더 짧아요'], [['빗자루: 클립 12개', '우산: 클립 11개'], ['숟가락: 클립 4개', '이쑤시개: 클립 2개']], 0.2, { extra: true }),
      ] },
    { id: 'a3', title: '활동 3. 가장 긴 것 고르기', minutes: 6, tool: 'mindmap',
      task: '여러 물건 가운데 가장 긴 것 하나를 바구니에 담아요.',
      teacher: '"클립 수가 가장 많은 것은 어느 것일까요?" 둘씩 견주어 보면서 남는 것을 찾게 한다. 단위가 다른 물건(클립 5개와 블록 3개)을 견주는 학생이 있다면 같은 단위로 잰 것끼리만 견주자고 말해 준다.',
      levels: CARD_LV,
      items: [
        pickOf('클립으로 잰 길이예요. 가장 긴 것을 골라 보세요.', '가장 길어요', ['색연필: 클립 5개', '자: 클립 9개', '지우개: 클립 2개'], ['자: 클립 9개'], 0.1),
        pickOf('클립으로 잰 길이예요. 가장 짧은 것을 골라 보세요.', '가장 짧아요', ['가위: 클립 6개', '풀: 클립 4개', '테이프: 클립 3개'], ['테이프: 클립 3개'], 0.12),
        pickOf('더 해 보기: 클립으로 잰 길이예요. 가장 긴 것을 골라 보세요.', '가장 길어요', ['끈 가: 클립 7개', '끈 나: 클립 10개', '끈 다: 클립 8개', '끈 라: 클립 6개'], ['끈 나: 클립 10개'], 0.2, { extra: true }),
      ] },
  ],
  wrap: ['"길이는 어떻게 비교했나요?" 짝에게 연필과 지우개를 클립으로 재어 말하게 한다. 출구 2번을 틀린 학생은 클립이 많은 쪽이 더 짧다고 생각하는지 다음 시간에 먼저 살핀다.', [
    { type: 'tool', tool: 'measure', options: { mode: 'ruler', max: 12, object: { name: '붓', len: 12 }, tiles: { name: '클립', len: 2 } }, prompt: '붓의 길이는 클립 몇 개만큼인가요?', target: { read: 6 }, difficulty: 0.15 },
    { type: 'choice', prompt: '연필은 클립 4개, 가위는 클립 6개예요. 더 긴 것은 무엇인가요?', options: ['연필', '가위', '같아요'], answer: 1, difficulty: 0.12, explain: '클립이 더 많은 가위가 더 길어요.' },
    { type: 'choice', prompt: '길이를 비교할 때 바른 방법에 ○ 하세요.', options: ['한쪽 끝을 맞추어 비교해요', '아무 데서나 시작해서 비교해요'], answer: 0, difficulty: 0.08, explain: '한쪽 끝을 맞추어야 어느 쪽이 더 긴지 알 수 있어요.' },
  ]],
  ws: { title: '클립으로 길이 재기', items: [
    { type: 'figure', wide: true, prompt: '클립으로 잰 길이를 세어 쓰세요.', tool: 'measure', options: { mode: 'ruler', max: 12, tiles: { name: '클립', len: 2 } }, figures: [{ options: { object: { name: '연필', len: 8 } }, caption: '클립 ' + BLANK + '개' }, { options: { object: { name: '자', len: 12 } }, caption: '클립 ' + BLANK + '개' }], answer: '4개, 6개' },
    { type: 'blank', prompt: '더 긴 것에 ○ 하고, 빈칸에 알맞은 말을 쓰세요.', text: '가위(클립 5개)와 풀(클립 3개) 중 더 ______ 것은 가위예요.', answer: '긴' },
    { type: 'choice', prompt: '클립 2개인 지우개와 클립 4개인 연필 중 더 짧은 것에 ○ 하세요.', options: ['지우개', '연필'], answer: '지우개' },
    { type: 'short', prompt: '길이를 비교할 때 한쪽 끝을 맞추어야 하는 까닭을 써 보세요.' },
  ], easy: { note: '클립을 빈틈없이 이어 붙이고 하나씩 짚으며 세요. 더 많으면 더 길어요.', items: [
    { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '클립 5개인 것은 클립 3개인 것보다 더 ______ 요. (길어 / 짧아)', answer: '길어' },
    { type: 'choice', prompt: '더 긴 것에 ○ 하세요.', options: ['연필(클립 4개)', '지우개(클립 2개)'], answer: '연필(클립 4개)' },
    { type: 'choice', prompt: '더 짧은 것에 ○ 하세요.', options: ['풀(클립 3개)', '가위(클립 5개)'], answer: '풀(클립 3개)' },
    { type: 'draw', prompt: '클립 3개를 이어 붙인 길이의 줄을 그려 보세요.' },
  ] } },
  diff: { easy: '클립을 하나씩 짚어 셀 수 있게 클립마다 번호가 보여요. 카드 나누기는 틀리면 까닭을 말하고 돌아와요.', base: '클립을 스스로 세어 몇 개인지 수를 직접 써요.', challenge: '클립 길이가 달라 더 긴 물건에 클립이 더 많이 들어가지 않을 수도 있는 문제가 나와요.' },
  notes: '자주 보이는 어려움: ① 물건의 한쪽 끝을 맞추지 않고 비교한다 → 책상 가장자리에 한쪽 끝을 맞춘다. ② 클립 사이 틈이나 겹침까지 센다 → 빈틈없이, 겹치지 않게 놓는다. ③ 클립 수가 많으면 더 짧다고 말한다 → 클립을 직접 이어 붙여 본다. 2차시에서 높이를 비교한다.',
}));
// ───────────────────────────── 2차시 (practice) ─────────────────────────────
L.push(lesson(2, {
  title: '블록 탑의 높이를 재어 높은 것과 낮은 것 찾기',
  objective: '쌓은 블록의 수로 높이를 재어 더 높다·더 낮다로 말하고 높이 차례를 정할 수 있다.',
  desc: 'three paper block towers of different heights standing side by side on a table, a small rabbit pointing at the tallest one',
  text: '어느 탑이 더 높을까요?',
  layers: [{ motif: 'house', x: 100, y: 214 }, { motif: 'star', x: 300, y: 214 }, { motif: 'star', x: 340, y: 224 }, { motif: 'tree', x: 420, y: 216, s: 0.9 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"블록으로 탑을 쌓았어요. 어느 탑이 가장 높을까요?" 바닥에서 같은 높이로 시작해야 높이를 견줄 수 있다고 알려 준다. "길이는 긴, 짧은이라고 하고 높이는 높은, 낮은이라고 말해요." 탑 옆에 서 있는 모양만 보고 정하는 학생이 있다 — 블록을 세어 확인한다고 예고한다.', '높이는 어떻게 비교할 수 있을까요?'],
  demo: { tool: 'measure', options: { mode: 'ruler', max: 15, object: { name: '파란 탑', len: 12 }, tiles: { name: '블록', len: 3 } }, sequence: [{ ans: 4 }] },
  acts: [
    { id: 'a1', title: '활동 1. 블록을 세어 탑의 높이 재기', minutes: 9, tool: 'measure',
      task: '탑에 쌓인 블록이 몇 개인지 세어요. 블록 하나의 높이는 모두 같아요.',
      teacher: '"블록은 아래부터 하나씩 짚으며 세어요." 맨 아래 블록을 빼먹거나 두 번 세는 학생이 있다. 높이도 길이처럼 같은 단위로 세어 견준다는 점을 짚는다.',
      levels: RL,
      items: [
        tile('파란 탑의 높이는 블록 몇 개만큼인가요?', '파란 탑', 12, '블록', 3, 0.08),
        tile('노란 탑의 높이는 블록 몇 개만큼인가요?', '노란 탑', 6, '블록', 3, 0.05),
        tile('초록 탑의 높이는 블록 몇 개만큼인가요?', '초록 탑', 9, '블록', 3, 0.12),
        tile('더 해 보기: 분홍 탑의 높이는 블록 몇 개만큼인가요?', '분홍 탑', 15, '블록', 3, 0.2, { extra: true }),
      ] },
    { id: 'a2', title: '활동 2. 낮은 탑부터 차례로 놓기', minutes: 11, tool: 'mindmap',
      task: '블록 수를 보고 낮은 탑부터 차례로 놓아요.',
      teacher: '"블록이 가장 적은 탑은 어느 것일까요? 그 탑이 가장 낮아요." 낮은 것부터 높은 것으로 한 방향으로 놓고, 놓은 뒤 짝에게 "가장 낮은 탑, 그다음, 가장 높은 탑"을 읽게 한다. 높은 것부터 놓는 학생에게는 문제를 소리 내어 다시 읽게 한다.',
      levels: CARD_LV,
      items: [
        orderOf('낮은 탑부터 차례로 놓아 보세요.', '낮은 탑부터', ['탑 가: 블록 2개', '탑 나: 블록 5개', '탑 다: 블록 8개'], 0.12),
        orderOf('높은 탑부터 차례로 놓아 보세요.', '높은 탑부터', ['탑 마: 블록 9개', '탑 바: 블록 6개', '탑 사: 블록 3개'], 0.15),
        orderOf('더 해 보기: 낮은 탑부터 차례로 놓아 보세요.', '낮은 탑부터', ['탑 아: 블록 1개', '탑 자: 블록 4개', '탑 차: 블록 7개', '탑 카: 블록 10개'], 0.22, { extra: true }),
      ] },
    { id: 'a3', title: '활동 3. 가장 높은 것과 가장 낮은 것 찾기', minutes: 6, tool: 'mindmap',
      task: '이야기를 읽고 가장 높은 것 또는 가장 낮은 것 하나를 골라요.',
      teacher: '"높이가 가장 높은 것은 어느 것일까요?" 수가 가장 큰 것이 가장 높다고 말하게 한다. 길이를 비교하는 문제와 섞어 "이건 길이일까요, 높이일까요?"를 묻는다.',
      levels: CARD_LV,
      items: [
        pickOf('블록으로 잰 높이예요. 가장 높은 것을 골라 보세요.', '가장 높아요', ['책장: 블록 12개', '의자: 블록 5개', '책상: 블록 7개'], ['책장: 블록 12개'], 0.1),
        pickOf('블록으로 잰 높이예요. 가장 낮은 것을 골라 보세요.', '가장 낮아요', ['화분: 블록 4개', '컵: 블록 2개', '꽃병: 블록 6개'], ['컵: 블록 2개'], 0.12),
        pickOf('더 해 보기: 블록으로 잰 높이예요. 가장 높은 것을 골라 보세요.', '가장 높아요', ['나무: 블록 14개', '울타리: 블록 6개', '문: 블록 11개', '의자: 블록 5개'], ['나무: 블록 14개'], 0.2, { extra: true }),
      ] },
  ],
  wrap: ['"높이를 비교하려면 무엇이 같아야 하나요?" 짝에게 바닥이 같아야 하고 같은 블록으로 세어야 한다고 말하게 한다. 출구 1번에서 쌓은 수가 같다고 한 학생은 블록 크기가 같은지 먼저 살핀다.', [
    { type: 'choice', prompt: '탑 가는 블록 4개, 탑 나는 블록 7개예요. 더 높은 탑은 어느 것인가요?', options: ['탑 가', '탑 나', '같아요'], answer: 1, difficulty: 0.1, explain: '블록이 더 많은 탑 나가 더 높아요.' },
    { type: 'tool', tool: 'measure', options: { mode: 'ruler', max: 15, object: { name: '빨간 탑', len: 9 }, tiles: { name: '블록', len: 3 } }, prompt: '빨간 탑의 높이는 블록 몇 개만큼인가요?', target: { read: 3 }, difficulty: 0.15 },
    { type: 'choice', prompt: '높이를 말할 때 쓰는 말에 ○ 하세요.', options: ['높아요, 낮아요', '무거워요, 가벼워요'], answer: 0, difficulty: 0.05, explain: '높이는 높다·낮다로 말해요. 무거워요·가벼워요는 무게를 말할 때 써요.' },
  ]],
  ws: { title: '높이 비교하기', items: [
    { type: 'figure', wide: true, prompt: '블록으로 잰 탑의 높이를 세어 쓰세요.', tool: 'measure', options: { mode: 'ruler', max: 15, tiles: { name: '블록', len: 3 } }, figures: [{ options: { object: { name: '탑 가', len: 6 } }, caption: '블록 ' + BLANK + '개' }, { options: { object: { name: '탑 나', len: 12 } }, caption: '블록 ' + BLANK + '개' }], answer: '2개, 4개' },
    { type: 'table', prompt: '블록 수를 보고 더 높은 것에 ○ 하세요.', columns: ['탑', '블록 수', '더 높은 것'], cells: [['가', '3개', ''], ['나', '5개', ''], ['다', '2개', ''], ['라', '6개', '']], answer: '가-나, 다-라처럼 짝지어 비교해요(나, 라)' },
    { type: 'choice', prompt: '가장 낮은 것에 ○ 하세요.', options: ['블록 8개', '블록 3개', '블록 5개'], answer: '블록 3개' },
    { type: 'short', prompt: '내가 쌓을 수 있는 가장 높은 탑은 블록 몇 개일까요? 까닭도 써 보세요.' },
  ], easy: { note: '블록이 더 많으면 더 높아요. 아래부터 하나씩 세어요.', items: [
    { type: 'choice', prompt: '더 높은 탑에 ○ 하세요.', options: ['블록 3개', '블록 5개'], answer: '블록 5개' },
    { type: 'choice', prompt: '더 낮은 탑에 ○ 하세요.', options: ['블록 6개', '블록 2개'], answer: '블록 2개' },
    { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '블록 4개 탑은 블록 2개 탑보다 더 ______ 요. (높아 / 낮아)', answer: '높아' },
    { type: 'draw', prompt: '블록 3개로 쌓은 탑을 그려 보세요.' },
  ] } },
  diff: { easy: '블록마다 번호가 보여서 하나씩 짚어 셀 수 있어요. 카드 차례 놓기는 틀리면 까닭을 말하고 돌아와요.', base: '블록 수를 스스로 세어 쓰고, 카드를 놓은 뒤 확인을 눌러요.', challenge: '카드가 네 장으로 늘고, 블록 높이가 서로 달라 같은 단위로 맞추어 견주는 문제가 나와요.' },
  notes: '자주 보이는 어려움: ① 탑 바닥이 달라 높이를 잘못 견준다 → 같은 바닥에서 시작해야 한다. ② 높은 것부터 놓으라는데 낮은 것부터 놓는다 → 문제를 소리 내어 읽는다. ③ 블록 크기가 다른데 개수만 견준다 → 같은 블록으로 재야 견줄 수 있다. 3차시에서 몇 개 더 긴지 알아본다.',
}));
// ───────────────────────────── 3차시 (extend) ─────────────────────────────
L.push(lesson(3, {
  title: '두 끈의 길이가 클립 몇 개만큼 다른지 알아보기',
  objective: '두 물건의 길이를 클립 수로 재고, 긴 것이 짧은 것보다 클립 몇 개만큼 더 긴지 말할 수 있다.',
  desc: 'a long and a short colored ribbon laid side by side with the left ends matched and a few paper clips marking the extra part',
  text: '몇 개만큼 더 길까요?',
  layers: [{ motif: 'house', x: 100, y: 214 }, { motif: 'flower', x: 300, y: 236 }, { motif: 'tree', x: 400, y: 216, s: 0.9 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"초록 끈은 클립 5개, 파란 끈은 클립 3개예요. 초록 끈은 파란 끈보다 클립 몇 개만큼 더 길까요?" 두 끈의 한쪽 끝을 맞추고 남는 부분에 클립을 놓아 보인다. "5개에서 3개를 빼면 2개, 또는 3개에서 5개까지 이어 세면 2개예요." 5와 3을 더해 8개라고 답하는 학생이 있는지 살핀다.', '두 끈의 길이는 얼마나 차이가 날까요?'],
  demo: { tool: 'measure', options: { mode: 'ruler', max: 12, object: { name: '초록 끈', len: 10 }, tiles: { name: '클립', len: 2 } }, sequence: [{ ans: 5 }] },
  acts: [
    { id: 'a1', title: '활동 1. 끈마다 클립 수 재기', minutes: 9, tool: 'measure',
      task: '끈마다 클립을 이어 붙여 몇 개인지 세어요. 다음 활동에서 두 끈을 견주어요.',
      teacher: '"각 끈의 클립 수를 먼저 정확히 세어요." 클립이 끈 끝을 넘어가거나 모자라면 다시 맞추게 한다. 클립 수를 쓴 뒤 짝과 맞추어 보게 한다.',
      levels: RL,
      items: [
        tile('초록 끈의 길이는 클립 몇 개만큼인가요?', '초록 끈', 10, '클립', 2, 0.1),
        tile('파란 끈의 길이는 클립 몇 개만큼인가요?', '파란 끈', 6, '클립', 2, 0.08),
        tile('노란 끈의 길이는 클립 몇 개만큼인가요?', '노란 끈', 8, '클립', 2, 0.1),
        tile('더 해 보기: 빨간 끈의 길이는 클립 몇 개만큼인가요?', '빨간 끈', 12, '클립', 2, 0.18, { extra: true }),
      ] },
    { id: 'a2', title: '활동 2. 몇 개 더 긴지 고르기', minutes: 11, tool: 'mindmap',
      task: '두 끈의 클립 수를 견주어 긴 끈이 몇 개만큼 더 긴지 골라요.',
      teacher: '"큰 수에서 작은 수를 빼면 얼마나 더 긴지 알 수 있어요." 두 수를 더하는 학생에게는 두 끈을 나란히 놓고 남은 부분의 클립만 세게 한다. 이어 세기(3에서 5까지 4, 5)로 확인해도 좋다고 알려 준다.',
      levels: CARD_LV,
      items: [
        pickOf('초록 끈은 클립 5개, 파란 끈은 클립 3개예요. 초록 끈은 클립 몇 개 더 길까요?', '더 긴 만큼', ['1개', '2개', '8개'], ['2개'], 0.12),
        pickOf('노란 끈은 클립 7개, 주황 끈은 클립 4개예요. 노란 끈은 클립 몇 개 더 길까요?', '더 긴 만큼', ['3개', '4개', '11개'], ['3개'], 0.15),
        pickOf('보라 끈은 클립 8개, 분홍 끈은 클립 7개예요. 보라 끈은 클립 몇 개 더 길까요?', '더 긴 만큼', ['1개', '7개', '15개'], ['1개'], 0.12),
        pickOf('더 해 보기: 하늘 끈은 클립 9개, 갈색 끈은 클립 4개예요. 갈색 끈은 하늘 끈보다 클립 몇 개 더 짧을까요?', '더 짧은 만큼', ['4개', '5개', '13개'], ['5개'], 0.22, { extra: true }),
      ] },
    { id: 'a3', title: '활동 3. 기준 끈과 견주어 나누기', minutes: 6, tool: 'mindmap',
      task: '기준 끈(클립 5개)과 견주어 "더 길어요", "같아요", "더 짧아요"로 나누어 놓아요.',
      teacher: '"클립이 5개와 같은 끈은 어느 것일까요?" 같은 길이도 하나의 비교 결과임을 알려 준다. 클립 수가 아닌 끈의 색이나 모양으로 나누는 학생이 있으면 클립 수만 보게 한다.',
      levels: CARD_LV,
      items: [
        sortTo('기준 끈(클립 5개)과 견주어 세 곳으로 나누어 보세요.', '기준 끈과 견주기', ['더 길어요', '같아요', '더 짧아요'], [['끈 가: 클립 7개'], ['끈 나: 클립 5개'], ['끈 다: 클립 3개', '끈 라: 클립 4개']], 0.15),
        sortTo('이번에는 기준 끈(클립 6개)과 견주어 세 곳으로 나누어 보세요.', '기준 끈과 견주기', ['더 길어요', '같아요', '더 짧아요'], [['끈 마: 클립 9개', '끈 바: 클립 8개'], ['끈 사: 클립 6개'], ['끈 아: 클립 2개']], 0.18),
        sortTo('더 해 보기: 기준 끈(클립 4개)과 견주어 세 곳으로 나누어 보세요.', '기준 끈과 견주기', ['더 길어요', '같아요', '더 짧아요'], [['끈 자: 클립 6개'], ['끈 차: 클립 4개', '끈 카: 클립 4개'], ['끈 타: 클립 1개']], 0.2, { extra: true }),
      ] },
  ],
  wrap: ['"얼마나 더 긴지는 어떻게 구하나요?" 짝에게 5개와 3개의 차이를 말하게 한다. 출구 1번에서 8개를 고른 학생은 두 수를 더했는지 살펴 다시 끈을 나란히 놓아 보게 한다.', [
    { type: 'choice', prompt: '연필은 클립 6개, 지우개는 클립 2개예요. 연필은 지우개보다 클립 몇 개 더 길까요?', options: ['4개', '6개', '8개'], answer: 0, difficulty: 0.15, explain: '6에서 2를 빼면 4예요. 4개만큼 더 길어요.' },
    { type: 'tool', tool: 'measure', options: { mode: 'ruler', max: 12, object: { name: '막대', len: 10 }, tiles: { name: '클립', len: 2 } }, prompt: '막대의 길이는 클립 몇 개만큼인가요?', target: { read: 5 }, difficulty: 0.15 },
    { type: 'choice', prompt: '클립 4개인 끈과 클립 4개인 끈을 견주면 어떤가요?', options: ['왼쪽이 더 길어요', '오른쪽이 더 길어요', '길이가 같아요'], answer: 2, difficulty: 0.1, explain: '클립 수가 같으면 길이가 같아요.' },
  ]],
  ws: { title: '얼마나 더 길까', items: [
    { type: 'table', prompt: '두 끈의 클립 수를 보고 얼마나 더 긴지 쓰세요.', columns: ['긴 끈', '짧은 끈', '더 긴 만큼'], cells: [['클립 6개', '클립 4개', ''], ['클립 9개', '클립 5개', ''], ['클립 8개', '클립 7개', '']], answer: '2개, 4개, 1개' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '7 − 3 = ___     9 − 6 = ___     5 − 5 = ___', answer: '4, 3, 0' },
    { type: 'choice', prompt: '클립 8개인 끈과 클립 3개인 끈 가운데 더 짧은 끈에 ○ 하세요.', options: ['클립 8개', '클립 3개'], answer: '클립 3개' },
    { type: 'short', prompt: '클립 5개인 끈과 클립 2개인 끈의 길이 차이를 구하는 방법을 써 보세요.' },
  ], easy: { note: '큰 수에서 작은 수를 빼면 얼마나 더 긴지 알 수 있어요.', items: [
    { type: 'table', prompt: '두 끈의 클립 수를 보고 얼마나 더 긴지 쓰세요.', columns: ['긴 끈', '짧은 끈', '더 긴 만큼'], cells: [['클립 4개', '클립 3개', '1개'], ['클립 6개', '클립 4개', '']], answer: '2개' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '5 − 2 = ___     4 − 1 = ___', answer: '3, 3' },
    { type: 'choice', prompt: '더 짧은 끈에 ○ 하세요.', options: ['클립 6개', '클립 2개'], answer: '클립 2개' },
    { type: 'draw', prompt: '클립 4개 길이의 끈과 클립 2개 길이의 끈을 나란히 그려 보세요.' },
  ] } },
  diff: { easy: '클립에 번호가 보이고 카드 고르기는 틀리면 까닭을 말하고 돌아와요.', base: '클립 수를 스스로 세고, 차이를 보기에서 골라요.', challenge: '긴 끈이 아니라 짧은 끈을 기준으로 "몇 개 더 짧은지"를 묻는 문제가 나와요.' },
  notes: '자주 보이는 어려움: ① 두 수를 더해 답한다(5개와 3개 → 8개) → 두 끈을 나란히 놓고 남는 부분만 센다. ② 짧은 끈의 클립 수를 답으로 쓴다 → 차이는 남는 부분이라고 말한다. ③ 클립 수가 같은 끈의 길이가 다르다고 한다 → 같다고 말하게 한다. 4차시에서 셋 이상의 길이를 차례로 놓는다.',
}));
// ───────────────────────────── 4차시 (extend) ─────────────────────────────
L.push(lesson(4, {
  title: '길이가 서로 다른 물건 셋을 짧은 것부터 놓기',
  objective: '셋 이상의 물건의 길이를 재어 짧은 것부터 또는 긴 것부터 차례로 놓을 수 있다.',
  desc: 'four wooden spoons of different lengths lined up from shortest to longest on a cream cloth with a small paper cat watching',
  text: '짧은 것부터 놓아요',
  layers: [{ motif: 'house', x: 100, y: 214 }, { motif: 'flower', x: 300, y: 236 }, { motif: 'tree', x: 400, y: 216, s: 0.9 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"숟가락 세 개를 짧은 것부터 놓아 봐요. 제일 짧은 것은 어느 것일까요?" 세 개를 한꺼번에 비교하기 어려우니 둘씩 비교하라고 알려 준다. "가장 긴 것과 가장 짧은 것을 먼저 찾고 나머지를 가운데에 놓아요." 가운데 것을 먼저 놓아 순서가 흩어지는 학생이 있는지 살핀다.', '길이가 다른 물건 셋은 어떻게 차례로 놓을까요?'],
  demo: { tool: 'measure', options: { mode: 'ruler', max: 15, object: { name: '숟가락', len: 12 }, tiles: { name: '클립', len: 3 } }, sequence: [{ ans: 4 }] },
  acts: [
    { id: 'a1', title: '활동 1. 짧은 것부터 차례로 놓기', minutes: 9, tool: 'mindmap',
      task: '클립 수를 보고 짧은 것부터 차례로 놓아요.',
      teacher: '"가장 짧은 것은 클립이 가장 적은 것이에요." 한 번에 하나씩 가장 짧은 것을 찾아 놓게 한다. 순서를 거꾸로 놓은 학생에게는 첫 칸에 오는 것이 가장 짧은 것인지 다시 묻는다.',
      levels: CARD_LV,
      items: [
        orderOf('짧은 것부터 차례로 놓아 보세요.', '짧은 것부터', ['연필: 클립 4개', '젓가락: 클립 6개', '우산: 클립 11개'], 0.12),
        orderOf('긴 것부터 차례로 놓아 보세요.', '긴 것부터', ['빗자루: 클립 12개', '리코더: 클립 7개', '크레파스: 클립 3개'], 0.15),
        orderOf('짧은 것부터 차례로 놓아 보세요. 하나가 더 있어요.', '짧은 것부터', ['단추: 클립 1개', '지우개: 클립 2개', '풀: 클립 4개', '가위: 클립 5개'], 0.2),
        orderOf('더 해 보기: 긴 것부터 차례로 놓아 보세요.', '긴 것부터', ['줄넘기: 클립 10개', '목도리: 클립 9개', '손수건: 클립 5개', '열쇠: 클립 3개'], 0.25, { extra: true }),
      ] },
    { id: 'a2', title: '활동 2. 클립으로 재어 알아보기', minutes: 11, tool: 'measure',
      task: '물건마다 클립을 이어 붙여 몇 개인지 세고, 어느 물건이 가장 긴지 생각해요.',
      teacher: '"세 물건을 모두 재고 나서 견줘 봐요." 하나만 재고 어림짐작하는 학생에게 잰 수를 칠판에 적어 놓고 견주게 한다. 클립 크기가 다른 두 단원(클립과 블록)을 섞어 견주지 않도록 물어본다.',
      levels: RL,
      items: [
        tile('숟가락의 길이는 클립 몇 개만큼인가요?', '숟가락', 12, '클립', 3, 0.1),
        tile('포크의 길이는 클립 몇 개만큼인가요?', '포크', 9, '클립', 3, 0.1),
        tile('칼의 길이는 클립 몇 개만큼인가요?', '칼', 15, '클립', 3, 0.15,
          { predict: { q: '숟가락, 포크, 칼 중 가장 긴 것은 어느 것일까요?', options: ['숟가락', '포크', '칼'], answer: 2 }, conclude: '칼은 클립 5개, 숟가락은 4개, 포크는 3개예요. 칼이 가장 길어요.' }),
        tile('더 해 보기: 국자의 길이는 클립 몇 개만큼인가요?', '국자', 18, '클립', 3, 0.22, { extra: true }),
      ] },
    { id: 'a3', title: '활동 3. 가장 긴 것과 가장 짧은 것 고르기', minutes: 6, tool: 'mindmap',
      task: '여러 물건 가운데 가장 긴 것 또는 가장 짧은 것을 골라요.',
      teacher: '"둘씩 견주어 남는 것이 가장 길어요." 길이가 같은 물건이 둘 있을 때는 어떻게 할지 이야기하게 한다. 가장 긴 것과 가장 짧은 것을 섞어 고르는 학생에게 문제를 소리 내어 다시 읽게 한다.',
      levels: CARD_LV,
      items: [
        pickOf('길이를 보고 가장 짧은 것을 골라 보세요.', '가장 짧아요', ['손가락: 클립 2개', '팔: 클립 9개', '다리: 클립 12개'], ['손가락: 클립 2개'], 0.1),
        pickOf('길이를 보고 가장 긴 것을 골라 보세요.', '가장 길어요', ['기차: 클립 14개', '자동차: 클립 8개', '자전거: 클립 6개'], ['기차: 클립 14개'], 0.12),
        pickOf('더 해 보기: 길이를 보고 가장 짧은 것을 골라 보세요.', '가장 짧아요', ['리본: 클립 6개', '실: 클립 9개', '끈: 클립 4개', '줄: 클립 8개'], ['끈: 클립 4개'], 0.2, { extra: true }),
      ] },
  ],
  wrap: ['"셋 이상의 길이를 차례로 놓을 때 어떻게 하나요?" 짝에게 가장 긴 것과 가장 짧은 것을 먼저 찾는다고 말하게 한다. 출구 1번을 틀린 학생은 첫 칸이 가장 짧은 것인지 확인했는지 다음 시간에 먼저 살핀다.', [
    { type: 'choice', prompt: '클립으로 잰 길이예요. 가 3개, 나 7개, 다 5개. 짧은 것부터 차례로 쓴 것은?', options: ['가, 다, 나', '나, 다, 가', '다, 가, 나'], answer: 0, difficulty: 0.15, explain: '3개, 5개, 7개 순서이니 가, 다, 나예요.' },
    { type: 'choice', prompt: '길이가 가장 긴 것은 어느 것인가요? (가: 클립 4개, 나: 클립 9개, 다: 클립 6개)', options: ['가', '나', '다'], answer: 1, difficulty: 0.1, explain: '클립이 가장 많은 나가 가장 길어요.' },
    { type: 'tool', tool: 'measure', options: { mode: 'ruler', max: 15, object: { name: '젓가락', len: 15 }, tiles: { name: '클립', len: 3 } }, prompt: '젓가락의 길이는 클립 몇 개만큼인가요?', target: { read: 5 }, difficulty: 0.15 },
  ]],
  ws: { title: '길이 차례로 놓기', items: [
    { type: 'table', prompt: '클립 수를 보고 짧은 것부터 1, 2, 3을 쓰세요.', columns: ['물건', '클립 수', '짧은 차례'], cells: [['연필', '5개', ''], ['지우개', '2개', ''], ['자', '9개', '']], answer: '2, 1, 3' },
    { type: 'table', prompt: '클립 수를 보고 긴 것부터 1, 2, 3을 쓰세요.', columns: ['물건', '클립 수', '긴 차례'], cells: [['끈 가', '8개', ''], ['끈 나', '3개', ''], ['끈 다', '6개', '']], answer: '1, 3, 2' },
    { type: 'choice', prompt: '가장 긴 것에 ○ 하세요.', options: ['클립 4개', '클립 10개', '클립 7개'], answer: '클립 10개' },
    { type: 'short', prompt: '교실에서 길이가 다른 물건 셋을 골라 짧은 것부터 이름을 써 보세요.' },
  ], easy: { note: '클립이 적을수록 짧아요. 가장 짧은 것부터 하나씩 찾아요.', items: [
    { type: 'table', prompt: '클립 수를 보고 짧은 것부터 1, 2를 쓰세요.', columns: ['물건', '클립 수', '짧은 차례'], cells: [['풀', '3개', ''], ['가위', '6개', '']], answer: '1, 2' },
    { type: 'choice', prompt: '가장 긴 것에 ○ 하세요.', options: ['클립 2개', '클립 8개', '클립 5개'], answer: '클립 8개' },
    { type: 'choice', prompt: '가장 짧은 것에 ○ 하세요.', options: ['클립 7개', '클립 4개', '클립 9개'], answer: '클립 4개' },
    { type: 'draw', prompt: '길이가 다른 줄 세 개를 짧은 것부터 차례로 그려 보세요.' },
  ] } },
  diff: { easy: '클립에 번호가 보이고 카드 놓기는 틀리면 까닭을 말하고 돌아와요.', base: '카드를 모두 놓은 뒤 확인을 눌러 순서가 맞는지 봐요.', challenge: '카드가 네 장이고 클립 수가 비슷해서 더 꼼꼼히 견주어야 해요.' },
  notes: '자주 보이는 어려움: ① 가운데 길이를 먼저 놓아 순서가 흩어진다 → 가장 짧은 것부터 하나씩 찾는다. ② 긴 것부터인지 짧은 것부터인지 혼동한다 → 문제를 소리 내어 읽는다. ③ 클립 수가 같은 물건이 둘 있으면 어느 쪽이 먼저인지 헷갈린다 → 같은 길이라고 말하게 한다. 5차시부터는 무게를 비교한다.',
}));
// ───────────────────────────── 5차시 (core · concept) ─────────────────────────────
L.push(lesson(5, {
  title: '양팔저울로 어느 쪽이 더 무거운지 알아보기',
  objective: '양팔저울이 기운 모양을 보고 내려간 쪽이 더 무겁고 올라간 쪽이 더 가벼움을 말할 수 있다.',
  desc: 'a paper balance scale with a big watermelon pulling one pan down and a small tangerine on the other pan lifted up',
  text: '내려간 쪽이 더 무거워요',
  layers: [{ motif: 'house', x: 100, y: 214 }, { motif: 'flower', x: 300, y: 236 }, { motif: 'tree', x: 400, y: 216, s: 0.9 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"두 손에 가방과 필통을 들어 보세요. 어느 쪽이 더 무겁게 느껴져요?" 손으로 들어 보면 헷갈릴 때가 있다고 이야기한다. "양팔저울에 올려 보면 더 무거운 쪽이 내려가요." 시연 단추로 저울이 기우는 모습을 보여 준다. 내려간 쪽이 가볍다고 거꾸로 말하는 학생이 있는지 살핀다 — 시소에서 무거운 사람이 앉은 쪽이 내려가는 경험을 떠올리게 한다.', '두 물건 중 어느 쪽이 더 무거운지 어떻게 알 수 있을까요?'],
  demo: { tool: 'measure', options: { mode: 'scale', kind: 'balance', left: [{ name: '수박', w: 2000 }], unit: { name: '바둑돌', w: 1 }, maxUnits: 12 }, sequence: [{ n: 0 }] },
  acts: [
    { id: 'a1', title: '활동 1. 내려간 쪽 찾아 더 무거운 것 고르기', minutes: 9, tool: 'measure',
      task: '저울이 어느 쪽으로 기울었는지 보고, 더 무거운 것을 골라요.',
      teacher: '"저울이 어느 쪽으로 내려갔나요? 내려간 쪽에는 무엇이 있나요?" 내려간 쪽 물건을 손가락으로 짚게 한다. 크기가 큰 쪽이 항상 더 무겁다고 생각하는 학생에게는 작지만 무거운 물건(돌멩이)을 나중에 보여 준다고 말한다.',
      levels: SL,
      items: [
        bal('왼쪽에 수박, 오른쪽에 귤이 놓였어요. 더 무거운 것은 무엇인가요?', ['수박', 2000], ['귤', 100], 'heavy', 0.05),
        bal('왼쪽에 연필, 오른쪽에 가방이 놓였어요. 더 무거운 것은 무엇인가요?', ['연필', 10], ['가방', 900], 'heavy', 0.1),
        bal('왼쪽에 공책, 오른쪽에 필통이 놓였어요. 더 무거운 것은 무엇인가요?', ['공책', 120], ['필통', 300], 'heavy', 0.15,
          { predict: { q: '저울에서 더 무거운 쪽은 어떻게 될까요?', options: ['올라가요', '내려가요'], answer: 1 }, conclude: '더 무거운 쪽이 내려가요. 올라간 쪽은 더 가벼워요.' }),
        bal('더 해 보기: 왼쪽에 큰 인형, 오른쪽에 작은 돌멩이가 놓였어요. 더 무거운 것은 무엇인가요?', ['큰 인형', 120], ['작은 돌멩이', 400], 'heavy', 0.25, { extra: true }),
      ] },
    { id: 'a2', title: '활동 2. 올라간 쪽 찾아 더 가벼운 것 고르기', minutes: 11, tool: 'measure',
      task: '저울이 어느 쪽으로 기울었는지 보고, 더 가벼운 것을 골라요.',
      teacher: '"올라간 쪽은 더 가벼워요. 이번에는 더 가벼운 것을 골라요." 문제가 무거운 것을 묻는지 가벼운 것을 묻는지 소리 내어 읽게 한다. 물음을 읽지 않고 내려간 쪽만 고르는 학생에게는 물음에 밑줄을 긋게 한다.',
      levels: SL,
      items: [
        bal('왼쪽에 깃털, 오른쪽에 돌멩이가 놓였어요. 더 가벼운 것은 무엇인가요?', ['깃털', 2], ['돌멩이', 300], 'light', 0.08),
        bal('왼쪽에 벽돌, 오른쪽에 종이가 놓였어요. 더 가벼운 것은 무엇인가요?', ['벽돌', 1500], ['종이', 5], 'light', 0.1),
        bal('왼쪽에 사과, 오른쪽에 방울토마토가 놓였어요. 더 가벼운 것은 무엇인가요?', ['사과', 200], ['방울토마토', 20], 'light', 0.15),
        bal('더 해 보기: 왼쪽에 풍선, 오른쪽에 책이 놓였어요. 더 가벼운 것은 무엇인가요?', ['풍선', 5], ['책', 400], 'light', 0.2, { extra: true }),
      ] },
    { id: 'a3', title: '활동 3. 무거운 것과 가벼운 것 나누기', minutes: 6, tool: 'mindmap',
      task: '물건을 "무거워요"와 "가벼워요" 두 곳으로 나누어 놓아요.',
      teacher: '"손에 들었을 때 어떤 느낌일까요?" 크기와 무게가 다를 수 있다고 이야기한다. 솜사탕 같은 큰 것이 가볍다고 말한 학생을 칭찬하고, 나눈 뒤 두 물건을 골라 짝과 저울에 올려 볼 때 어느 쪽이 내려갈지 말하게 한다.',
      levels: CARD_LV,
      items: [
        sortTo('물건을 두 곳으로 나누어 보세요.', '들어 보면 어때요?', ['무거워요', '가벼워요'], [['벽돌', '수박', '책가방'], ['깃털', '종이', '풍선']], 0.1),
        sortTo('이번에도 두 곳으로 나누어 보세요.', '들어 보면 어때요?', ['무거워요', '가벼워요'], [['돌멩이', '쌀자루', '냄비'], ['솜', '비눗방울', '휴지']], 0.15),
        sortTo('더 해 보기: 물건을 두 곳으로 나누어 보세요.', '들어 보면 어때요?', ['무거워요', '가벼워요'], [['의자', '우산 가방', '물병 가득'], ['나뭇잎', '고무공 빈 것', '스티커']], 0.2, { extra: true }),
      ] },
  ],
  wrap: ['"저울이 기울면 무엇을 알 수 있나요?" 짝에게 내려간 쪽이 더 무겁다고 말하게 한다. 출구 1번에서 올라간 쪽을 고른 학생은 시소를 타던 경험을 다시 떠올리게 한다.', [
    { type: 'choice', prompt: '저울에서 왼쪽이 내려갔어요. 왼쪽 물건은 오른쪽 물건보다 어떤가요?', options: ['더 무거워요', '더 가벼워요', '같아요'], answer: 0, difficulty: 0.1, explain: '내려간 쪽이 더 무거워요.' },
    { type: 'choice', prompt: '저울에서 오른쪽이 올라갔어요. 오른쪽 물건은 왼쪽 물건보다 어떤가요?', options: ['더 무거워요', '더 가벼워요', '같아요'], answer: 1, difficulty: 0.12, explain: '올라간 쪽이 더 가벼워요.' },
    { type: 'tool', tool: 'measure', options: { mode: 'scale', kind: 'balance', left: [{ name: '연필통', w: 400 }], right: [{ name: '지우개', w: 20 }], readOnly: true, ask: { q: '더 무거운 것은?', choices: ['연필통', '지우개', '같아요'] } }, prompt: '저울을 보고 더 무거운 것을 골라 보세요.', target: { pick: 0 }, difficulty: 0.15 },
  ]],
  ws: { title: '무게 비교하기', items: [
    { type: 'figure', wide: true, prompt: '저울을 보고 더 무거운 것에 ○ 하세요.', tool: 'measure', options: { mode: 'scale', kind: 'balance', readOnly: true }, figures: [{ options: { left: [{ name: '수박', w: 2000 }], right: [{ name: '귤', w: 100 }] }, caption: '수박 / 귤' }, { options: { left: [{ name: '가방', w: 400 }], right: [{ name: '책', w: 900 }] }, caption: '가방 / 책' }], answer: '수박, 책' },
    { type: 'choice', prompt: '더 가벼운 것에 ○ 하세요.', options: ['깃털', '벽돌'], answer: '깃털' },
    { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '저울에서 내려간 쪽이 더 ______ 요. 올라간 쪽이 더 ______ 요. (무거워 / 가벼워)', answer: '무거워, 가벼워' },
    { type: 'short', prompt: '집에서 나보다 더 무거운 물건과 더 가벼운 물건을 하나씩 써 보세요.' },
  ], easy: { note: '내려간 쪽이 더 무거워요. 올라간 쪽은 더 가벼워요.', items: [
    { type: 'choice', prompt: '저울에서 내려간 쪽은 어떤가요?', options: ['더 무거워요', '더 가벼워요'], answer: '더 무거워요' },
    { type: 'choice', prompt: '더 무거운 것에 ○ 하세요.', options: ['벽돌', '풍선'], answer: '벽돌' },
    { type: 'choice', prompt: '더 가벼운 것에 ○ 하세요.', options: ['수박', '종이'], answer: '종이' },
    { type: 'draw', prompt: '기울어진 저울을 그리고, 내려간 쪽에 ○ 를 해 보세요.' },
  ] } },
  diff: { easy: '저울이 기운 쪽에 화살표가 나와요. 카드 나누기는 틀리면 까닭을 말하고 돌아와요.', base: '저울을 보고 무엇을 고를지 스스로 정해요.', challenge: '크기가 큰 물건이 더 가벼운 경우(큰 인형과 작은 돌멩이)가 나와요.' },
  notes: '자주 보이는 어려움: ① 올라간 쪽이 무겁다고 말한다 → 시소를 떠올리게 한다. ② 크기가 크면 더 무겁다고 말한다 → 큰 인형과 작은 돌멩이를 저울에 올려 본다. ③ 무거운 것을 묻는지 가벼운 것을 묻는지 읽지 않는다 → 물음에 밑줄을 긋게 한다. 6차시에서 같은 무게와 셋 이상의 무게를 비교한다.',
}));
// ───────────────────────────── 6차시 (practice · concept) ─────────────────────────────
L.push(lesson(6, {
  title: '무게가 같을 때와 세 가지 무게를 차례로 놓기',
  objective: '저울이 수평이면 무게가 같음을 알고, 셋 이상의 물건을 무거운 것 또는 가벼운 것부터 차례로 놓을 수 있다.',
  desc: 'a perfectly level paper balance scale with a book and a lunch box on each pan, and a rabbit and a bear watching',
  text: '수평이면 무게가 같아요',
  layers: [{ motif: 'house', x: 100, y: 214 }, { motif: 'flower', x: 300, y: 236 }, { motif: 'tree', x: 400, y: 216, s: 0.9 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"저울이 기울지 않고 평평하면 두 물건의 무게는 어떨까요?" 시연 단추로 양쪽 무게가 같은 저울을 보여 준다. "수평이면 무게가 같아요." 오늘은 같은 무게와 셋 이상의 무게를 견줘 본다고 알려 준다. 수평을 보고도 어느 한쪽이 더 무겁다고 말하는 학생이 있는지 살핀다.', '저울이 평평하면 두 물건의 무게는 어떻게 될까요?'],
  demo: { tool: 'measure', options: { mode: 'scale', kind: 'balance', left: [{ name: '필통', w: 300 }], unit: { name: '바둑돌', w: 1 }, maxUnits: 12 }, sequence: [{ n: 0 }] },
  acts: [
    { id: 'a1', title: '활동 1. 수평인 저울 읽기', minutes: 9, tool: 'measure',
      task: '저울이 기울었는지 평평한지 보고 무게를 비교해요.',
      teacher: '"저울이 기울지 않았어요. 무게는 어떻게 비교될까요?" 기울지 않았다는 것은 같다는 뜻이라고 정리한다. 기운 저울과 평평한 저울이 섞여 나오므로 문항마다 저울 모양을 먼저 말하게 한다.',
      levels: SL,
      items: [
        bal('왼쪽에 필통, 오른쪽에 도시락이 놓였어요. 저울이 평평해요. 무게는 어떤가요?', ['필통', 300], ['도시락', 300], 'heavy', 0.12),
        bal('왼쪽에 풀, 오른쪽에 테이프가 놓였어요. 더 무거운 것은 무엇인가요?', ['풀', 200], ['테이프', 80], 'heavy', 0.12,
          { predict: { q: '저울이 기울었어요. 풀과 테이프의 무게가 같을까요?', options: ['같아요', '달라요'], answer: 1 }, conclude: '저울이 기울었으니 무게가 달라요. 내려간 풀이 더 무거워요.' }),
        bal('왼쪽에 공 둘, 오른쪽에 구슬 한 봉지가 놓였어요. 저울이 평평해요. 무게는 어떤가요?', ['공 둘', 150], ['구슬 한 봉지', 150], 'heavy', 0.2),
        bal('더 해 보기: 왼쪽에 쌀 한 봉지, 오른쪽에 콩 한 봉지가 놓였어요. 저울이 평평해요. 무게는 어떤가요?', ['쌀 한 봉지', 500], ['콩 한 봉지', 500], 'heavy', 0.22, { extra: true }),
      ] },
    { id: 'a2', title: '활동 2. 무거운 것부터 차례로 놓기', minutes: 11, tool: 'mindmap',
      task: '물건을 무거운 것부터 또는 가벼운 것부터 차례로 놓아요.',
      teacher: '"가장 무거운 것은 무엇일까요? 가장 가벼운 것은 무엇일까요?" 양 끝을 먼저 정하고 가운데를 놓게 한다. 크기가 큰 것을 먼저 놓는 학생에게는 저울에 올려 확인하자고 말해 준다.',
      levels: CARD_LV,
      items: [
        orderOf('무거운 것부터 차례로 놓아 보세요.', '무거운 것부터', ['코끼리', '강아지', '병아리'], 0.12),
        orderOf('가벼운 것부터 차례로 놓아 보세요.', '가벼운 것부터', ['깃털', '사과', '수박'], 0.12),
        orderOf('무거운 것부터 차례로 놓아 보세요. 하나가 더 있어요.', '무거운 것부터', ['트럭', '자전거', '책가방', '연필'], 0.22),
        orderOf('더 해 보기: 가벼운 것부터 차례로 놓아 보세요.', '가벼운 것부터', ['비눗방울', '지우개', '필통', '의자'], 0.25, { extra: true }),
      ] },
    { id: 'a3', title: '활동 3. 저울을 보고 가벼운 것 고르기', minutes: 6, tool: 'measure',
      task: '저울을 보고 더 가벼운 것을 골라요. 수평이면 "같아요"를 골라요.',
      teacher: '"올라간 쪽이 더 가벼워요. 평평하면 같아요." 보기에 "같아요"가 있는 것을 놓치고 한쪽을 고르는 학생에게 저울 모양을 다시 말하게 한다.',
      levels: SL,
      items: [
        bal('왼쪽에 스티커, 오른쪽에 가위가 놓였어요. 더 가벼운 것은 무엇인가요?', ['스티커', 3], ['가위', 90], 'light', 0.1),
        bal('왼쪽에 장갑, 오른쪽에 모자가 놓였어요. 저울이 평평해요. 무게는 어떤가요?', ['장갑', 60], ['모자', 60], 'light', 0.15),
        bal('더 해 보기: 왼쪽에 우산, 오른쪽에 리코더가 놓였어요. 더 가벼운 것은 무엇인가요?', ['우산', 300], ['리코더', 150], 'light', 0.2, { extra: true }),
      ] },
  ],
  wrap: ['"저울이 평평하면 무게는 어떻다고 말하나요?" 짝에게 기울었을 때와 평평할 때를 각각 말하게 한다. 출구 1번에서 "더 무거워요"를 고른 학생은 평평한 저울과 기운 저울을 나란히 그려 보게 한다.', [
    { type: 'choice', prompt: '저울이 평평해요. 왼쪽 물건과 오른쪽 물건의 무게는 어떤가요?', options: ['왼쪽이 더 무거워요', '오른쪽이 더 무거워요', '무게가 같아요'], answer: 2, difficulty: 0.1, explain: '저울이 평평하면 두 물건의 무게가 같아요.' },
    { type: 'choice', prompt: '가벼운 것부터 차례로 쓴 것은 어느 것인가요? (깃털, 고양이, 코끼리)', options: ['깃털, 고양이, 코끼리', '코끼리, 고양이, 깃털', '고양이, 깃털, 코끼리'], answer: 0, difficulty: 0.12, explain: '깃털이 가장 가볍고 코끼리가 가장 무거워요.' },
    { type: 'tool', tool: 'measure', options: { mode: 'scale', kind: 'balance', left: [{ name: '바나나', w: 120 }], right: [{ name: '귤', w: 120 }], readOnly: true, ask: { q: '무게는?', choices: ['바나나가 더 무거워요', '귤이 더 무거워요', '무게가 같아요'] } }, prompt: '저울을 보고 무게를 비교해 보세요.', target: { pick: 2 }, difficulty: 0.15 },
  ]],
  ws: { title: '같은 무게와 차례', items: [
    { type: 'figure', wide: true, prompt: '저울을 보고 알맞은 말에 ○ 하세요.', tool: 'measure', options: { mode: 'scale', kind: 'balance', readOnly: true }, figures: [{ options: { left: [{ name: '컵', w: 200 }], right: [{ name: '접시', w: 200 }] }, caption: '같아요 / 달라요' }, { options: { left: [{ name: '솜', w: 20 }], right: [{ name: '돌', w: 500 }] }, caption: '같아요 / 달라요' }], answer: '같아요, 달라요' },
    { type: 'table', prompt: '무거운 것부터 1, 2, 3을 쓰세요.', columns: ['물건', '무거운 차례'], cells: [['벽돌', ''], ['종이', ''], ['책', '']], answer: '1, 3, 2' },
    { type: 'choice', prompt: '가장 가벼운 것에 ○ 하세요.', options: ['쌀 한 포대', '솜 한 뭉치', '수박'], answer: '솜 한 뭉치' },
    { type: 'short', prompt: '저울이 평평할 때 무게가 같다고 말하는 까닭을 써 보세요.' },
  ], easy: { note: '평평하면 같아요. 기울면 내려간 쪽이 더 무거워요.', items: [
    { type: 'choice', prompt: '저울이 평평해요. 무게는 어떤가요?', options: ['같아요', '달라요'], answer: '같아요' },
    { type: 'choice', prompt: '무거운 것부터 놓을 때 첫 번째에 오는 것에 ○ 하세요.', options: ['코끼리', '병아리'], answer: '코끼리' },
    { type: 'choice', prompt: '가벼운 것부터 놓을 때 첫 번째에 오는 것에 ○ 하세요.', options: ['깃털', '벽돌'], answer: '깃털' },
    { type: 'draw', prompt: '평평한 저울을 그려 보세요.' },
  ] } },
  diff: { easy: '저울이 기운 쪽에 화살표가 나오고, 평평할 때는 "수평"이라고 보여요. 카드 놓기는 틀리면 까닭을 말하고 돌아와요.', base: '저울을 보고 스스로 비교해 골라요.', challenge: '카드가 네 장이고 크기가 큰 물건이 더 가벼운 경우가 섞여 나와요.' },
  notes: '자주 보이는 어려움: ① 평평한 저울을 보고 한쪽을 고른다 → 기울지 않은 것은 같다고 말한다. ② 크기가 큰 것을 더 무겁게 놓는다 → 저울에 올려 확인한다. ③ 무거운 것부터와 가벼운 것부터를 혼동한다 → 문제를 소리 내어 읽는다. 7차시에서는 바둑돌로 무게를 재어 견준다.',
}));
// ───────────────────────────── 7차시 (extend · concept) ─────────────────────────────
L.push(lesson(7, {
  title: '바둑돌을 올려 물건의 무게를 재어 보기',
  objective: '물건과 저울이 수평이 되게 바둑돌을 올려 바둑돌 몇 개만큼의 무게인지 말하고 견줄 수 있다.',
  desc: 'a paper balance scale with a pair of scissors on one pan and a small pile of black and white stones on the other pan',
  text: '바둑돌 몇 개만큼 무거울까?',
  layers: [{ motif: 'house', x: 100, y: 214 }, { motif: 'flower', x: 300, y: 236 }, { motif: 'tree', x: 400, y: 216, s: 0.9 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"가위의 무게를 어떻게 말할 수 있을까요? 바둑돌을 올려 평평하게 만들면 몇 개일까요?" 길이를 클립으로 쟀던 것처럼 무게도 같은 바둑돌로 잰다고 알려 준다. 시연 단추로 바둑돌이 하나씩 올라가 평평해지는 모습을 보여 준다. 바둑돌을 너무 많이 올렸는데 "많이 올리면 정확하다"고 생각하는 학생이 있는지 살핀다.', '바둑돌로 물건의 무게를 말할 수 있을까요?'],
  demo: { tool: 'measure', options: { mode: 'scale', kind: 'balance', left: [{ name: '가위', w: 8 }], unit: { name: '바둑돌', w: 1 }, maxUnits: 12 }, sequence: [{ n: 8 }] },
  acts: [
    { id: 'a1', title: '활동 1. 저울이 평평해지게 바둑돌 올리기', minutes: 9, tool: 'measure',
      task: '+ 단추로 바둑돌을 올려요. 저울이 평평해지면 바둑돌 몇 개인지 세어요.',
      teacher: '"바둑돌을 하나씩 올릴 때 저울이 어떻게 움직이나요? 평평해지면 멈춰요." 평평해진 뒤에도 더 올리면 반대쪽으로 기운다고 보여 준다. 바둑돌 수를 다 센 뒤 "가위는 바둑돌 8개만큼 무거워요"처럼 문장으로 말하게 한다.',
      levels: SL,
      items: [
        stones('가위와 수평이 되도록 오른쪽에 바둑돌을 올려 보세요.', '가위', 8, 0.1),
        stones('풀과 수평이 되도록 오른쪽에 바둑돌을 올려 보세요.', '풀', 5, 0.08),
        stones('테이프와 수평이 되도록 오른쪽에 바둑돌을 올려 보세요.', '테이프', 7, 0.12,
          { predict: { q: '풀(바둑돌 5개)보다 테이프를 맞추려면 바둑돌이 더 많이 필요할까요?', options: ['더 많이 필요해요', '더 적게 필요해요'], answer: 0 }, conclude: '테이프는 바둑돌 7개, 풀은 5개예요. 바둑돌이 더 많이 필요한 쪽이 더 무거워요.' }),
        stones('더 해 보기: 필통과 수평이 되도록 오른쪽에 바둑돌을 올려 보세요.', '필통', 11, 0.2, { extra: true }),
      ] },
    { id: 'a2', title: '활동 2. 바둑돌 수로 무게 견주기', minutes: 11, tool: 'mindmap',
      task: '바둑돌 수를 보고 더 무거운 것 또는 가벼운 것을 골라요.',
      teacher: '"바둑돌이 많이 필요할수록 더 무거워요." 바둑돌 수가 큰 쪽을 가볍다고 고르는 학생에게는 저울에 올린 모습을 그려 보게 한다. 같은 수가 나오면 무게가 같다고 말하게 한다.',
      levels: CARD_LV,
      items: [
        pickOf('풀은 바둑돌 5개, 테이프는 바둑돌 8개만큼이에요. 더 무거운 것을 골라 보세요.', '더 무거워요', ['풀', '테이프'], ['테이프'], 0.1),
        pickOf('지우개는 바둑돌 3개, 자는 바둑돌 4개만큼이에요. 더 가벼운 것을 골라 보세요.', '더 가벼워요', ['지우개', '자'], ['지우개'], 0.12),
        pickOf('가위는 바둑돌 9개, 풀은 바둑돌 6개, 연필은 바둑돌 2개만큼이에요. 가장 무거운 것을 골라 보세요.', '가장 무거워요', ['가위', '풀', '연필'], ['가위'], 0.18),
        pickOf('더 해 보기: 사과는 바둑돌 10개, 귤은 바둑돌 7개, 밤은 바둑돌 4개만큼이에요. 가장 가벼운 것을 골라 보세요.', '가장 가벼워요', ['사과', '귤', '밤'], ['밤'], 0.22, { extra: true }),
      ] },
    { id: 'a3', title: '활동 3. 기준 물건과 견주어 나누기', minutes: 6, tool: 'mindmap',
      task: '지우개(바둑돌 6개)와 견주어 더 무거운 것과 더 가벼운 것으로 나누어 놓아요.',
      teacher: '"지우개는 바둑돌 6개예요. 바둑돌이 6개보다 많으면 지우개보다 어때요?" 바둑돌 수만 비교하게 한다. 6개와 같은 물건이 있다면 따로 놓을 곳이 필요하다고 말해 준다.',
      levels: CARD_LV,
      items: [
        sortTo('지우개(바둑돌 6개)와 견주어 두 곳으로 나누어 보세요.', '지우개와 견주기', ['더 무거워요', '더 가벼워요'], [['가위: 바둑돌 9개', '필통: 바둑돌 11개'], ['풀: 바둑돌 4개', '클립: 바둑돌 1개']], 0.12),
        sortTo('이번에는 필통(바둑돌 10개)과 견주어 두 곳으로 나누어 보세요.', '필통과 견주기', ['더 무거워요', '더 가벼워요'], [['도시락: 바둑돌 12개', '물병: 바둑돌 11개'], ['자: 바둑돌 3개', '연필: 바둑돌 2개']], 0.15),
        sortTo('더 해 보기: 가위(바둑돌 8개)와 견주어 두 곳으로 나누어 보세요.', '가위와 견주기', ['더 무거워요', '더 가벼워요'], [['컵: 바둑돌 9개', '공책: 바둑돌 10개'], ['반창고: 바둑돌 1개', '풀: 바둑돌 5개']], 0.2, { extra: true }),
      ] },
  ],
  wrap: ['"바둑돌로 무게를 재면 어떤 점이 좋은가요?" 짝에게 바둑돌 수로 무게를 말하게 한다. 출구 2번을 틀린 학생은 바둑돌이 적을수록 더 가벼운지 다시 말하게 한다.', [
    { type: 'tool', tool: 'measure', options: { mode: 'scale', kind: 'balance', left: [{ name: '컵', w: 4 }], unit: { name: '바둑돌', w: 1 }, maxUnits: 12 }, prompt: '컵과 수평이 되도록 오른쪽에 바둑돌을 올려 보세요.', target: { balance: true }, difficulty: 0.15 },
    { type: 'choice', prompt: '연필은 바둑돌 3개, 지우개는 바둑돌 5개만큼이에요. 더 무거운 것은 어느 것인가요?', options: ['연필', '지우개', '같아요'], answer: 1, difficulty: 0.12, explain: '바둑돌이 더 많이 필요한 지우개가 더 무거워요.' },
    { type: 'choice', prompt: '바둑돌 6개와 바둑돌 6개만큼 무거운 두 물건을 견주면 어떤가요?', options: ['왼쪽이 더 무거워요', '무게가 같아요', '오른쪽이 더 무거워요'], answer: 1, difficulty: 0.1, explain: '바둑돌 수가 같으면 무게가 같아요.' },
  ]],
  ws: { title: '바둑돌로 무게 재기', items: [
    { type: 'table', prompt: '바둑돌 수를 보고 더 무거운 것에 ○ 하세요.', columns: ['물건', '바둑돌 수', '더 무거운 것'], cells: [['풀 / 테이프', '5개 / 8개', ''], ['공책 / 자', '9개 / 4개', ''], ['지우개 / 연필', '3개 / 2개', '']], answer: '테이프, 공책, 지우개' },
    { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '바둑돌이 많이 필요한 물건일수록 더 ______ 요. (무거워 / 가벼워)', answer: '무거워' },
    { type: 'choice', prompt: '바둑돌 4개인 풀과 바둑돌 7개인 가위 가운데 더 가벼운 것에 ○ 하세요.', options: ['풀', '가위'], answer: '풀' },
    { type: 'short', prompt: '가위의 무게를 바둑돌로 말해 보고, 친구에게 설명하듯 써 보세요.' },
  ], easy: { note: '바둑돌이 많을수록 더 무거워요. 같은 수이면 무게가 같아요.', items: [
    { type: 'choice', prompt: '더 무거운 것에 ○ 하세요.', options: ['풀(바둑돌 5개)', '테이프(바둑돌 8개)'], answer: '테이프(바둑돌 8개)' },
    { type: 'choice', prompt: '더 가벼운 것에 ○ 하세요.', options: ['지우개(바둑돌 3개)', '자(바둑돌 6개)'], answer: '지우개(바둑돌 3개)' },
    { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '바둑돌 7개와 바둑돌 7개는 무게가 ______ 요. (같아 / 달라)', answer: '같아' },
    { type: 'draw', prompt: '가위가 바둑돌 4개와 평평한 저울을 그려 보세요.' },
  ] } },
  diff: { easy: '바둑돌 수가 접시 위에 보여요. 카드 나누기는 틀리면 까닭을 말하고 돌아와요.', base: '바둑돌을 직접 올려 평평하게 맞춰요.', challenge: '물건이 아니라 바둑돌 수만 주어져, 수만 비교해 답해야 하는 문제가 나와요.' },
  notes: '자주 보이는 어려움: ① 평평해진 뒤에도 바둑돌을 더 올린다 → 반대쪽으로 기울어짐을 보여 준다. ② 바둑돌 수가 많으면 가볍다고 말한다 → 저울 모양을 그려 보게 한다. ③ 단위가 다른 것을 견준다 → 같은 바둑돌로 잰 수끼리만 견주게 한다. 8차시에서 넓이를 비교한다.',
}));
// ───────────────────────────── 8차시 (extend · concept) ─────────────────────────────
L.push(lesson(8, {
  title: '점판의 칸을 세어 어느 쪽이 더 넓은지 비교하기',
  objective: '도형이 차지하는 칸의 수를 세어 더 넓다·더 좁다로 비교하고 넓이가 같은 도형을 만들 수 있다.',
  desc: 'a big green paper sheet and a small yellow paper sheet laid on a table, covered with equal paper squares to count the space',
  text: '칸이 많으면 더 넓어요',
  layers: [{ motif: 'house', x: 100, y: 214 }, { motif: 'flower', x: 300, y: 236 }, { motif: 'tree', x: 400, y: 216, s: 0.9 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"교실 바닥과 책상 위, 어느 쪽이 더 넓을까요?" 두 도화지를 겹쳐 보이며 한쪽이 삐져나오면 그쪽이 더 넓다고 말해 준다. "겹쳐 보기 어려우면 같은 크기의 칸으로 덮어 세어 봐요." 모양이 길쭉하면 더 넓다고 생각하는 학생이 있는지 살핀다 — 활동 1에서 칸을 세어 보며 견주게 한다.', '두 물건의 넓이는 어떻게 비교할 수 있을까요?'],
  demo: { tool: 'shapes', options: { mode: 'geoboard', size: 6, showArea: true }, sequence: [{ pts: [[0, 0], [3, 0], [3, 2], [0, 2]] }] },
  acts: [
    { id: 'a1', title: '활동 1. 점판 도형이 몇 칸인지 세기', minutes: 9, tool: 'shapes',
      task: '점판 위의 도형이 모두 몇 칸인지 세어서 답해요. 한 칸의 크기는 모두 같아요.',
      teacher: '"칸을 하나씩 짚으며 세어요. 위에서 아래로 한 줄씩 세면 빼먹지 않아요." 줄 수와 한 줄의 칸 수를 곱하는 방법은 2학년 이후에 배우므로 하나씩 세게 한다. 칸의 선(점)을 세는 학생에게는 점이 아니라 사이사이의 칸을 세라고 말한다.',
      levels: GR,
      items: [
        geoRead('가 도형은 모두 몇 칸인가요?', rect(0, 0, 3, 2), 0.08),
        geoRead('나 도형은 모두 몇 칸인가요?', rect(1, 1, 2, 2), 0.1),
        geoRead('다 도형은 모두 몇 칸인가요?', rect(0, 0, 4, 2), 0.15,
          { predict: { q: '가 도형(6칸)보다 다 도형이 더 넓을까요?', options: ['더 넓어요', '더 좁아요', '같아요'], answer: 0 }, conclude: '다 도형은 8칸, 가 도형은 6칸이에요. 칸이 더 많은 다 도형이 더 넓어요.' }),
        geoRead('더 해 보기: 라 도형은 모두 몇 칸인가요?', rect(0, 0, 3, 3), 0.2, { extra: true }),
      ] },
    { id: 'a2', title: '활동 2. 정해진 칸 수로 도형 만들기', minutes: 11, tool: 'shapes',
      task: '점을 이어 정해진 칸 수만큼의 넓이가 되는 도형을 만들어요. 도형의 모양은 마음대로 해요.',
      teacher: '"넓이가 6칸이 되는 도형을 만들어요. 모양이 달라도 칸 수가 같으면 넓이가 같아요." 짝과 서로 다른 모양으로 만들었는지 견주어 보게 한다. 점의 수와 칸의 수를 헷갈리는 학생에게는 쉬움 단계의 칸 수 표시를 보며 맞추게 한다.',
      levels: GM,
      items: [
        geoMake('넓이가 4칸인 도형을 만들어 보세요.', 4, 0.1),
        geoMake('넓이가 6칸인 도형을 만들어 보세요.', 6, 0.15,
          { conclude: '모양이 달라도 6칸이면 넓이가 같아요. 네모와 L 모양도 6칸이 될 수 있어요.' }),
        geoMake('넓이가 8칸인 도형을 만들어 보세요.', 8, 0.2),
        geoMake('더 해 보기: 넓이가 5칸인 도형을 만들어 보세요.', 5, 0.22, { extra: true }),
      ] },
    { id: 'a3', title: '활동 3. 칸 수를 보고 가장 넓은 것 고르기', minutes: 6, tool: 'mindmap',
      task: '칸 수를 보고 가장 넓은 것 또는 가장 좁은 것을 골라요.',
      teacher: '"칸이 가장 많은 것이 가장 넓어요." 크기가 달라 보이는 모양이어도 칸 수로 견주게 한다. 길쭉한 것이 더 넓다고 말하는 학생에게 칸을 세어 보게 한다.',
      levels: CARD_LV,
      items: [
        pickOf('도화지의 칸 수예요. 가장 넓은 것을 골라 보세요.', '가장 넓어요', ['도화지 가: 6칸', '도화지 나: 10칸', '도화지 다: 8칸'], ['도화지 나: 10칸'], 0.12),
        pickOf('손수건의 칸 수예요. 가장 좁은 것을 골라 보세요.', '가장 좁아요', ['손수건 가: 9칸', '손수건 나: 4칸', '손수건 다: 7칸'], ['손수건 나: 4칸'], 0.12),
        pickOf('더 해 보기: 마당의 칸 수예요. 가장 넓은 것을 골라 보세요.', '가장 넓어요', ['마당 가: 12칸', '마당 나: 15칸', '마당 다: 11칸', '마당 라: 14칸'], ['마당 나: 15칸'], 0.22, { extra: true }),
      ] },
  ],
  wrap: ['"넓이는 어떻게 비교하나요?" 짝에게 칸을 세어 많은 쪽이 더 넓다고 말하게 한다. 출구 2번에서 모양이 긴 쪽을 고른 학생은 칸을 하나씩 짚으며 세어 보게 한다.', [
    { type: 'tool', tool: 'shapes', options: { mode: 'geoboard', size: 6, readOnly: true, showCounts: false, askNum: { q: '모두 몇 칸인가요?', unit: '칸' }, target: { num: 4 } }, state: { pts: rect(0, 0, 2, 2) }, prompt: '마 도형은 모두 몇 칸인가요?', target: { num: 4 }, difficulty: 0.12 },
    { type: 'choice', prompt: '도화지 가는 5칸, 도화지 나는 7칸이에요. 더 넓은 것은 어느 것인가요?', options: ['도화지 가', '도화지 나', '같아요'], answer: 1, difficulty: 0.12, explain: '칸이 더 많은 도화지 나가 더 넓어요.' },
    { type: 'choice', prompt: '두 도형이 모두 6칸이에요. 넓이는 어떤가요?', options: ['모양이 다르면 달라요', '같아요'], answer: 1, difficulty: 0.15, explain: '모양이 달라도 칸 수가 같으면 넓이가 같아요.' },
  ]],
  ws: { title: '넓이 비교하기', items: [
    { type: 'figure', wide: true, prompt: '점판 도형이 몇 칸인지 세어 쓰세요.', tool: 'shapes', options: { mode: 'geoboard', size: 6 }, figures: [{ state: { pts: rect(0, 0, 2, 3) }, caption: BLANK + '칸' }, { state: { pts: rect(1, 1, 3, 2) }, caption: BLANK + '칸' }], answer: '6칸, 6칸' },
    { type: 'choice', prompt: '더 넓은 것에 ○ 하세요.', options: ['5칸', '9칸'], answer: '9칸' },
    { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '칸이 7개인 모양은 칸이 4개인 모양보다 더 ______ 요. (넓어 / 좁아)', answer: '넓어' },
    { type: 'short', prompt: '모양이 달라도 칸 수가 같으면 넓이가 같은 까닭을 써 보세요.' },
  ], easy: { note: '칸을 하나씩 짚으며 세어요. 칸이 많으면 더 넓어요.', items: [
    { type: 'figure', wide: true, prompt: '점판 도형이 몇 칸인지 세어 쓰세요.', tool: 'shapes', options: { mode: 'geoboard', size: 6 }, figures: [{ state: { pts: rect(0, 0, 2, 2) }, caption: BLANK + '칸' }, { state: { pts: rect(0, 0, 3, 1) }, caption: BLANK + '칸' }], answer: '4칸, 3칸' },
    { type: 'choice', prompt: '더 넓은 것에 ○ 하세요.', options: ['3칸', '6칸'], answer: '6칸' },
    { type: 'choice', prompt: '더 좁은 것에 ○ 하세요.', options: ['8칸', '2칸'], answer: '2칸' },
    { type: 'draw', prompt: '네모 칸 4개로 이루어진 모양을 그려 보세요.' },
  ] } },
  diff: { easy: '점판에 칸 수가 바로 보여 맞추기 쉬워요.', base: '칸 수를 스스로 세고, 칸 수를 보고 도형을 만들어요.', challenge: '점판이 더 커지고(7×7), 칸 수가 더 큰 도형을 만들거나 세요.' },
  notes: '자주 보이는 어려움: ① 점을 세어 칸 수로 답한다 → 점 사이의 칸을 세게 한다. ② 길쭉한 모양이 더 넓다고 말한다 → 칸을 세어 확인한다. ③ 모양이 다르면 넓이도 다르다고 생각한다 → 칸 수가 같은 두 모양을 나란히 놓아 본다. 9차시에서는 물의 양을 비교한다.',
}));
// ───────────────────────────── 9차시 (core · representation) ─────────────────────────────
L.push(lesson(9, {
  title: '두 컵에 담긴 물의 양을 눈으로 비교하기',
  objective: '같은 컵에 담긴 물의 높이를 보고 물이 더 많은 쪽과 더 적은 쪽을 말할 수 있다.',
  desc: 'two identical clear paper cups on a table, one nearly full of blue water and the other with only a little water',
  text: '어느 컵에 물이 더 많을까요?',
  layers: [{ motif: 'house', x: 100, y: 214 }, { motif: 'flower', x: 300, y: 236 }, { motif: 'tree', x: 400, y: 216, s: 0.9 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"똑같은 컵 두 개에 물이 담겨 있어요. 어느 컵에 물이 더 많을까요?" 시연 단추로 한 컵에 물이 차오르는 모습을 보여 준다. "모양이 같은 컵에서는 물이 더 높이 올라온 쪽이 더 많아요." 컵이 서로 다르면 높이만 보고 정하기 어렵다고 다음 시간을 예고한다. 물이 담긴 컵의 높이가 아니라 컵 색깔로 고르는 학생이 있는지 살핀다.', '두 컵 중 어느 컵에 물이 더 많은지 어떻게 알 수 있을까요?'],
  demo: { tool: 'measure', options: { mode: 'volume', beakers: [{ v: 100, max: 300, label: '가 컵', ticks: false }] }, sequence: [{ v: [150] }] },
  acts: [
    { id: 'a1', title: '활동 1. 물이 더 많은 컵 찾기', minutes: 9, tool: 'measure',
      task: '같은 모양의 두 컵을 보고 물이 더 많은 컵을 골라요.',
      teacher: '"두 컵의 바닥을 맞추어 놓고 물이 올라온 높이를 비교해요." 컵 모양이 같을 때만 높이로 견줄 수 있다고 알려 준다. 물이 같은 높이면 같다고 말하게 한다. 컵의 크기가 달라 보이는 학생에게는 두 컵이 똑같은 컵이라는 것을 확인시킨다.',
      levels: VL,
      items: [
        vol('가 컵과 나 컵 중 물이 더 많은 컵은 어느 것인가요?', [cup('가 컵', 150), cup('나 컵', 80)], '물이 더 많은 컵은?', ['가 컵', '나 컵', '같아요'], 0, 0.08),
        vol('다 컵과 라 컵 중 물이 더 많은 컵은 어느 것인가요?', [cup('다 컵', 60), cup('라 컵', 200)], '물이 더 많은 컵은?', ['다 컵', '라 컵', '같아요'], 1, 0.1,
          { predict: { q: '물이 더 높이 올라온 컵은 물이 더 많을까요?', options: ['더 많아요', '더 적어요'], answer: 0 }, conclude: '같은 모양의 컵에서는 물이 더 높이 올라온 쪽이 물이 더 많아요.' }),
        vol('마 컵과 바 컵 중 물은 어떤가요?', [cup('마 컵', 120), cup('바 컵', 120)], '물의 양은?', ['마 컵이 더 많아요', '바 컵이 더 많아요', '양이 같아요'], 2, 0.15),
        vol('더 해 보기: 사 컵과 아 컵 중 물이 더 많은 컵은 어느 것인가요?', [cup('사 컵', 90), cup('아 컵', 40)], '물이 더 많은 컵은?', ['사 컵', '아 컵', '같아요'], 0, 0.2, { extra: true }),
      ] },
    { id: 'a2', title: '활동 2. 물이 더 적은 컵 찾기', minutes: 11, tool: 'measure',
      task: '이번에는 물이 더 적은 컵을 골라요. 물음을 잘 읽고 골라요.',
      teacher: '"물이 많은 컵을 찾는 것일까요, 적은 컵을 찾는 것일까요?" 물음을 소리 내어 읽게 한다. 많은 쪽을 고르고 마는 학생에게는 물음에 밑줄을 긋게 한다. 세 컵을 견주는 문항은 둘씩 짝지어 견주게 한다.',
      levels: VL,
      items: [
        vol('자 컵과 차 컵 중 물이 더 적은 컵은 어느 것인가요?', [cup('자 컵', 100), cup('차 컵', 220)], '물이 더 적은 컵은?', ['자 컵', '차 컵', '같아요'], 0, 0.1),
        vol('카 컵과 타 컵 중 물이 더 적은 컵은 어느 것인가요?', [cup('카 컵', 250), cup('타 컵', 130)], '물이 더 적은 컵은?', ['카 컵', '타 컵', '같아요'], 1, 0.12),
        vol('세 컵 중 물이 가장 적은 컵은 어느 것인가요?', [cup('가 컵', 200), cup('나 컵', 70), cup('다 컵', 140)], '물이 가장 적은 컵은?', ['가 컵', '나 컵', '다 컵'], 1, 0.2),
        vol('더 해 보기: 세 컵 중 물이 가장 많은 컵은 어느 것인가요?', [cup('라 컵', 110), cup('마 컵', 260), cup('바 컵', 180)], '물이 가장 많은 컵은?', ['라 컵', '마 컵', '바 컵'], 1, 0.22, { extra: true }),
      ] },
    { id: 'a3', title: '활동 3. 물이 많은 것부터 차례로 놓기', minutes: 6, tool: 'mindmap',
      task: '그릇에 담을 수 있는 물의 양을 떠올려 많은 것부터 차례로 놓아요.',
      teacher: '"욕조와 양동이, 컵 중에서 물이 가장 많이 들어가는 것은 어느 것일까요?" 실제 경험으로 짐작하게 한다. 크기가 비슷해 보이는 그릇은 직접 물을 부어 확인할 수 있다고 알려 준다.',
      levels: CARD_LV,
      items: [
        orderOf('물이 많이 담기는 것부터 차례로 놓아 보세요.', '많이 담기는 것부터', ['욕조', '양동이', '컵'], 0.12),
        orderOf('물이 적게 담기는 것부터 차례로 놓아 보세요.', '적게 담기는 것부터', ['숟가락', '종이컵', '주전자'], 0.15),
        orderOf('더 해 보기: 물이 많이 담기는 것부터 차례로 놓아 보세요.', '많이 담기는 것부터', ['수영장', '물통', '병', '찻잔'], 0.22, { extra: true }),
      ] },
  ],
  wrap: ['"같은 모양의 컵에서 물의 양은 어떻게 비교하나요?" 짝에게 높이가 높은 쪽이 더 많다고 말하게 한다. 출구 2번을 틀린 학생은 물음을 다시 읽고 많은 컵과 적은 컵 중 무엇을 찾는지 말하게 한다.', [
    { type: 'tool', tool: 'measure', options: { mode: 'volume', beakers: [cup('왼쪽 컵', 180), cup('오른쪽 컵', 60)], readOnly: true, ask: { q: '물이 더 많은 컵은?', choices: ['왼쪽 컵', '오른쪽 컵', '같아요'] } }, prompt: '물이 더 많은 컵을 골라 보세요.', target: { pick: 0 }, difficulty: 0.12 },
    { type: 'choice', prompt: '같은 모양의 두 컵에서 물이 더 높이 올라온 컵은 어떤가요?', options: ['물이 더 많아요', '물이 더 적어요', '같아요'], answer: 0, difficulty: 0.1, explain: '같은 모양의 컵에서는 높이가 높은 쪽이 물이 더 많아요.' },
    { type: 'choice', prompt: '컵 가는 물이 컵 나보다 낮게 있어요. 물이 더 적은 컵은 어느 것인가요?', options: ['컵 가', '컵 나'], answer: 0, difficulty: 0.12, explain: '물이 더 낮은 컵 가가 물이 더 적어요.' },
  ]],
  ws: { title: '물의 양 비교하기', items: [
    { type: 'figure', wide: true, prompt: '물이 더 많은 컵에 ○ 하세요.', tool: 'measure', options: { mode: 'volume', readOnly: true }, figures: [{ options: { beakers: [cup('가', 200), cup('나', 90)] }, caption: '가 / 나' }, { options: { beakers: [cup('다', 70), cup('라', 160)] }, caption: '다 / 라' }], answer: '가, 라' },
    { type: 'choice', prompt: '물이 가장 많이 담기는 것에 ○ 하세요.', options: ['컵', '양동이', '숟가락'], answer: '양동이' },
    { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '같은 컵에서 물이 낮게 있으면 물이 더 ______ 요. (많아 / 적어)', answer: '적어' },
    { type: 'short', prompt: '집에서 물이 많이 담기는 그릇과 적게 담기는 그릇을 하나씩 써 보세요.' },
  ], easy: { note: '같은 모양의 컵에서는 물이 높이 올라올수록 더 많아요.', items: [
    { type: 'choice', prompt: '물이 더 많은 쪽에 ○ 하세요.', options: ['높이 올라온 컵', '낮게 있는 컵'], answer: '높이 올라온 컵' },
    { type: 'choice', prompt: '물이 더 적은 쪽에 ○ 하세요.', options: ['높이 올라온 컵', '낮게 있는 컵'], answer: '낮게 있는 컵' },
    { type: 'choice', prompt: '물이 가장 많이 담기는 것에 ○ 하세요.', options: ['욕조', '컵'], answer: '욕조' },
    { type: 'draw', prompt: '물이 반쯤 담긴 컵과 가득 담긴 컵을 그려 보세요.' },
  ] } },
  diff: { easy: '컵 위에 물높이를 이어 주는 점선이 나와요. 카드 놓기는 틀리면 까닭을 말하고 돌아와요.', base: '컵을 보고 스스로 물의 양을 견주어요.', challenge: '컵이 세 개로 늘어 더 꼼꼼히 견주어야 해요.' },
  notes: '자주 보이는 어려움: ① 컵의 모양이 달라도 높이만 보고 양을 정한다 → 모양이 같은 컵에서만 높이로 견준다고 알려 준다. ② 물음(많은/적은)을 읽지 않는다 → 물음에 밑줄을 긋게 한다. ③ 컵 색깔이나 위치로 답한다 → 물이 올라온 높이만 보게 한다. 10차시에서 담을 수 있는 양을 비교한다.',
}));
// ───────────────────────────── 10차시 (practice · representation) ─────────────────────────────
L.push(lesson(10, {
  title: '담을 수 있는 양이 더 많은 그릇 찾기',
  objective: '그릇의 크기를 보고 더 많이 담을 수 있는 그릇과 더 적게 담을 수 있는 그릇을 말할 수 있다.',
  desc: 'a big paper bucket, a medium mug and a small spoon lined up on a table with water drops, a rabbit pouring water',
  text: '어느 그릇에 더 많이 담길까요?',
  layers: [{ motif: 'house', x: 100, y: 214 }, { motif: 'flower', x: 300, y: 236 }, { motif: 'tree', x: 400, y: 216, s: 0.9 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"컵과 양동이에 물을 가득 채우면 어느 쪽에 물이 더 많이 들어갈까요?" 두 그릇을 나란히 보이고 "그릇이 클수록 물을 더 많이 담을 수 있어요"라고 말한다. 시연 단추로 물이 한 컵에서 차오르는 모습을 보여 준다. 작은 그릇이 높고 가늘면 더 많이 담긴다고 생각하는 학생이 있는지 살핀다 — 활동에서 직접 견주어 보자고 예고한다.', '그릇마다 담을 수 있는 물의 양이 어떻게 다를까요?'],
  demo: { tool: 'measure', options: { mode: 'volume', beakers: [{ v: 250, max: 300, label: '큰 그릇', ticks: false }, { v: 100, max: 300, label: '작은 그릇', ticks: false }] }, sequence: [{ v: [250, 100] }] },
  acts: [
    { id: 'a1', title: '활동 1. 세 컵 가운데 가장 많은 물 찾기', minutes: 9, tool: 'measure',
      task: '같은 모양의 세 컵에 담긴 물을 보고, 가장 많은 것과 가장 적은 것을 찾아요.',
      teacher: '"세 컵을 둘씩 견주어 보고 가장 높이 올라온 컵을 찾아요." 앞 시간에 배운 방법을 한 번 더 쓰게 한다. 가장 많은 것을 찾으라는데 가장 적은 것을 고르는 학생에게는 물음을 다시 읽게 한다.',
      levels: VL,
      items: [
        vol('세 컵 중 물이 가장 많은 컵은 어느 것인가요?', [cup('A 컵', 90), cup('B 컵', 170), cup('C 컵', 130)], '물이 가장 많은 컵은?', ['A 컵', 'B 컵', 'C 컵'], 1, 0.12),
        vol('세 컵 중 물이 가장 적은 컵은 어느 것인가요?', [cup('D 컵', 210), cup('E 컵', 150), cup('F 컵', 60)], '물이 가장 적은 컵은?', ['D 컵', 'E 컵', 'F 컵'], 2, 0.15),
        vol('두 컵의 물은 어떤가요?', [cup('G 컵', 100), cup('H 컵', 100)], '물의 양은?', ['G 컵이 더 많아요', 'H 컵이 더 많아요', '양이 같아요'], 2, 0.15),
        vol('더 해 보기: 세 컵 중 물이 가장 많은 컵은 어느 것인가요?', [cup('I 컵', 280), cup('J 컵', 190), cup('K 컵', 240)], '물이 가장 많은 컵은?', ['I 컵', 'J 컵', 'K 컵'], 0, 0.22, { extra: true }),
      ] },
    { id: 'a2', title: '활동 2. 모양이 다른 그릇의 물 견주기', minutes: 11, tool: 'measure',
      task: '모양이 다른 그릇에 담긴 물을 견주어요. 높이만 보면 헷갈릴 수 있어요.',
      teacher: '"넓은 그릇과 좁은 그릇에 물이 담겨 있어요. 높이가 높은 쪽이 더 많을까요?" 모양이 다른 그릇은 높이만으로 견주기 어렵다고 알려 주고, 같은 컵에 옮겨 부어 견주는 방법을 말하게 한다. 높이만 보고 답한 학생에게 실제로 같은 컵에 옮겨 부었다면 어떨지 물어본다.',
      levels: VL,
      items: [
        vol('넓은 그릇에 물 200이 있고, 좁은 그릇에 물 100이 있어요. 물이 더 많은 그릇은 어느 것인가요?', [cup('넓은 그릇', 200, 1.5), cup('좁은 그릇', 100, 0.6)], '물이 더 많은 그릇은?', ['넓은 그릇', '좁은 그릇', '같아요'], 0, 0.2,
          { predict: { q: '모양이 다른 그릇에서는 높이만 보고 양을 정해도 될까요?', options: ['돼요', '안 돼요'], answer: 1 }, conclude: '모양이 다른 그릇은 높이만 보고 정하면 틀릴 수 있어요. 같은 컵에 옮겨 부어 견주어야 해요.' }),
        vol('큰 병에는 물이 적게, 작은 컵에는 물이 가득 있어요. 담긴 물이 더 많은 것은 어느 것인가요?', [{ v: 60, max: 300, w: 1.4, label: '큰 병', ticks: false }, { v: 100, max: 300, w: 0.6, label: '작은 컵', ticks: false }], '물이 더 많은 것은?', ['큰 병', '작은 컵', '같아요'], 1, 0.22),
        vol('더 해 보기: 낮은 접시와 높은 컵에 물이 담겨 있어요. 물이 더 많은 것은 어느 것인가요?', [{ v: 160, max: 300, w: 1.6, label: '낮은 접시', ticks: false }, { v: 120, max: 300, w: 0.6, label: '높은 컵', ticks: false }], '물이 더 많은 것은?', ['낮은 접시', '높은 컵', '같아요'], 0, 0.28, { extra: true }),
      ] },
    { id: 'a3', title: '활동 3. 컵보다 많이 담기는 것과 적게 담기는 것 나누기', minutes: 6, tool: 'mindmap',
      task: '그릇을 컵과 견주어 "더 많이 담겨요"와 "더 적게 담겨요"로 나누어 놓아요.',
      teacher: '"양동이는 컵보다 물이 많이 들어갈까요?" 생활 경험을 떠올리며 나누게 한다. 숟가락을 컵과 같다고 하는 학생에게는 숟가락으로 컵을 채우려면 몇 번 퍼야 하는지 물어본다.',
      levels: CARD_LV,
      items: [
        sortTo('컵과 견주어 두 곳으로 나누어 보세요.', '컵과 견주기', ['더 많이 담겨요', '더 적게 담겨요'], [['양동이', '욕조', '주전자'], ['숟가락', '병뚜껑', '종지']], 0.12),
        sortTo('이번에는 양동이와 견주어 두 곳으로 나누어 보세요.', '양동이와 견주기', ['더 많이 담겨요', '더 적게 담겨요'], [['수영장', '큰 물탱크'], ['컵', '물병', '주전자']], 0.18),
        sortTo('더 해 보기: 물병과 견주어 두 곳으로 나누어 보세요.', '물병과 견주기', ['더 많이 담겨요', '더 적게 담겨요'], [['욕조', '세숫대야'], ['찻잔', '숟가락']], 0.2, { extra: true }),
      ] },
  ],
  wrap: ['"담을 수 있는 양은 무엇을 보면 알 수 있나요?" 짝에게 그릇의 크기와 같은 컵에 옮겨 부어 보는 방법을 말하게 한다. 출구 1번에서 높은 그릇을 고른 학생은 모양이 다르면 높이만 보고 정하면 안 된다는 점을 다시 짚는다.', [
    { type: 'choice', prompt: '같은 컵 세 개 중 물이 가장 높이 올라온 컵은 어떤가요?', options: ['물이 가장 많아요', '물이 가장 적어요', '모두 같아요'], answer: 0, difficulty: 0.1, explain: '같은 모양의 컵에서는 높이가 높을수록 물이 많아요.' },
    { type: 'choice', prompt: '모양이 다른 그릇의 물을 정확히 견주려면 어떻게 해야 할까요?', options: ['높이만 봐요', '같은 컵에 옮겨 부어 견주어요'], answer: 1, difficulty: 0.2, explain: '같은 컵에 옮겨 부으면 높이로 정확히 견줄 수 있어요.' },
    { type: 'tool', tool: 'measure', options: { mode: 'volume', beakers: [cup('왼쪽', 80), cup('가운데', 200), cup('오른쪽', 140)], readOnly: true, ask: { q: '물이 가장 많은 컵은?', choices: ['왼쪽', '가운데', '오른쪽'] } }, prompt: '물이 가장 많은 컵을 골라 보세요.', target: { pick: 1 }, difficulty: 0.15 },
  ]],
  ws: { title: '담을 수 있는 양', items: [
    { type: 'figure', wide: true, prompt: '물이 더 많은 컵에 ○ 하세요.', tool: 'measure', options: { mode: 'volume', readOnly: true }, figures: [{ options: { beakers: [cup('가', 150), cup('나', 150)] }, caption: '같아요 / 달라요' }, { options: { beakers: [cup('다', 240), cup('라', 90)] }, caption: '다 / 라' }], answer: '같아요, 다' },
    { type: 'choice', prompt: '컵보다 더 많이 담기는 것에 ○ 하세요.', options: ['욕조', '숟가락'], answer: '욕조' },
    { type: 'choice', prompt: '컵보다 더 적게 담기는 것에 ○ 하세요.', options: ['양동이', '병뚜껑'], answer: '병뚜껑' },
    { type: 'short', prompt: '모양이 다른 두 그릇의 물을 정확히 견주는 방법을 써 보세요.' },
  ], easy: { note: '큰 그릇일수록 더 많이 담아요. 같은 모양의 컵에서는 높이가 높을수록 더 많아요.', items: [
    { type: 'choice', prompt: '더 많이 담기는 것에 ○ 하세요.', options: ['양동이', '컵'], answer: '양동이' },
    { type: 'choice', prompt: '더 적게 담기는 것에 ○ 하세요.', options: ['욕조', '숟가락'], answer: '숟가락' },
    { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '같은 컵에서 물이 높이 올라오면 물이 더 ______ 요. (많아 / 적어)', answer: '많아' },
    { type: 'draw', prompt: '큰 그릇과 작은 그릇을 그려 보세요.' },
  ] } },
  diff: { easy: '컵 높이를 이어 주는 점선이 나오고, 카드 나누기는 틀리면 까닭을 말하고 돌아와요.', base: '그릇을 보고 스스로 견주어요.', challenge: '그릇의 모양이 서로 달라 높이만 보면 틀리는 문제가 나와요.' },
  notes: '자주 보이는 어려움: ① 모양이 다른 그릇인데 높이만 보고 정한다 → 같은 컵에 옮겨 부어 견준다. ② 작은 그릇이 높으면 더 많이 담긴다고 생각한다 → 폭과 높이를 함께 보게 한다. ③ 숟가락과 컵을 같은 양으로 본다 → 컵을 채우려면 숟가락으로 몇 번 푸는지 묻는다. 11차시에서 길이·무게·넓이·양을 말로 나타낸다.',
}));
// ───────────────────────────── 11차시 (extend · representation) ─────────────────────────────
L.push(lesson(11, {
  title: '길이·무게·넓이·양을 알맞은 말로 나타내기',
  objective: '길이, 무게, 넓이, 물의 양을 비교하는 말(길다·짧다, 무겁다·가볍다, 넓다·좁다, 많다·적다)을 알맞게 골라 말할 수 있다.',
  desc: 'four paper cards on a table showing a long ribbon, a heavy stone, a wide blanket and a full cup, with a paper rabbit pointing at each',
  text: '알맞은 말을 찾아요',
  layers: [{ motif: 'house', x: 100, y: 214 }, { motif: 'flower', x: 300, y: 236 }, { motif: 'tree', x: 400, y: 216, s: 0.9 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"끈은 길다, 짧다고 하고 돌은 무겁다, 가볍다고 말해요. 담요는요? 컵의 물은요?" 시연 단추로 길이, 저울, 컵을 차례로 보여 준다. "무엇을 비교하느냐에 따라 쓰는 말이 달라요." 높이를 말할 때 "높다, 낮다"를 쓴다는 점도 짚는다. 길이를 말하면서 "무겁다"를 쓰는 학생이 있는지 살핀다.', '비교하는 것에 따라 쓰는 말이 어떻게 다를까요?'],
  demo: { tool: 'measure', options: { mode: 'scale', kind: 'balance', left: [{ name: '돌', w: 500 }], unit: { name: '바둑돌', w: 1 }, maxUnits: 12 }, sequence: [{ n: 0 }] },
  acts: [
    { id: 'a1', title: '활동 1. 비교하는 말을 종류별로 나누기', minutes: 9, tool: 'mindmap',
      task: '비교하는 말 카드를 길이, 무게, 넓이, 물의 양 중 알맞은 곳에 놓아요.',
      teacher: '"길다와 짧다는 무엇을 비교할 때 쓰는 말일까요?" 두 말이 짝이라는 점을 짚는다. 무겁다를 넓이에 놓은 학생에게는 저울을 떠올리게 한다. 많다와 적다는 물의 양뿐 아니라 개수에도 쓴다고 알려 주고 이 활동에서는 물의 양에 놓게 한다.',
      levels: CARD_LV,
      items: [
        sortTo('말 카드를 알맞은 곳에 놓아 보세요.', '무엇을 비교할까?', ['길이', '무게', '넓이', '물의 양'], [['길다', '짧다'], ['무겁다', '가볍다'], ['넓다', '좁다'], ['많다', '적다']], 0.15),
        sortTo('이번에는 쓰는 말을 두 곳으로 나누어 보세요.', '무엇을 말할까?', ['저울로 견줘요', '눈으로 견줘요'], [['무겁다', '가볍다'], ['높다', '낮다']], 0.18),
        sortTo('더 해 보기: 물건 이름을 알맞은 말 아래에 놓아 보세요.', '무엇이 어때요?', ['길어요', '넓어요'], [['기차', '긴 줄넘기'], ['운동장', '큰 도화지']], 0.2, { extra: true }),
      ] },
    { id: 'a2', title: '활동 2. 이야기에 알맞은 말 잇기', minutes: 11, tool: 'mindmap',
      task: '이야기의 빈칸에 알맞은 말 카드를 이어요.',
      teacher: '"이야기를 읽고 빈칸에 들어갈 말을 정해요." 비교하는 것이 무엇인지 먼저 말하게 한다. 같은 낱말이 두 곳에 들어갈 것 같다면 이야기를 다시 읽고 길이, 무게, 넓이, 양 중 무엇인지 찾게 한다.',
      levels: CARD_LV,
      items: [
        match('알맞은 말을 이어 보세요.', '알맞은 말', ['탑에 블록이 9개 있어서 더 ____', '저울에서 내려간 쪽이 더 ____', '칸이 많은 도화지가 더 ____'], ['높아요', '무거워요', '넓어요'], 0.15),
        match('이번에도 알맞은 말을 이어 보세요.', '알맞은 말', ['클립이 더 적은 끈은 더 ____', '물이 낮은 컵은 물이 더 ____', '저울에서 올라간 쪽이 더 ____'], ['짧아요', '적어요', '가벼워요'], 0.18),
        match('더 해 보기: 알맞은 말을 이어 보세요.', '알맞은 말', ['양동이는 컵보다 물이 더 ____', '풍선은 벽돌보다 더 ____'], ['많이 담겨요', '가벼워요'], 0.2, { extra: true }),
      ] },
    { id: 'a3', title: '활동 3. 짝에게 비교하는 말 들려주기', minutes: 6, tool: 'mindmap', pair: true,
      task: '교실의 두 물건을 골라 알맞은 말로 비교해요. 짝에게 말하고 맞는지 확인해요.',
      teacher: '"필통과 가방을 들어 보고 어떻게 말하면 좋을까요?" 짝끼리 "가방이 필통보다 더 무거워요"처럼 문장으로 말하게 한다. 비교하는 말이 길이, 무게, 넓이, 양 중 무엇인지 짝에게 물어보게 한다. 말이 어긋나면 다시 해 보게 한다.',
      levels: CARD_LV,
      items: [
        { prompt: '교실에서 길이가 다른 두 물건을 골라 "○○이(가) 더 길어요"라고 짝에게 말해요. 다 하면 "다 했어요"를 누르세요.', free: true, talk: true, difficulty: 0 },
        { prompt: '두 물건을 두 손에 들어 보고 "○○이(가) 더 무거워요"라고 짝에게 말해요. 다 하면 "다 했어요"를 누르세요.', free: true, talk: true, difficulty: 0 },
        { prompt: '두 컵의 물이나 두 종이의 넓이를 견주어 알맞은 말로 짝에게 말해요. 다 하면 "다 했어요"를 누르세요.', free: true, talk: true, difficulty: 0 },
      ] },
  ],
  wrap: ['"무엇을 비교하느냐에 따라 쓰는 말이 달라요. 오늘 배운 말을 몇 가지 말해 볼까요?" 짝에게 한 쌍씩 비교하는 말을 말하게 한다. 출구 1번을 틀린 학생은 어떤 것을 비교하는지 먼저 말해 보게 한다.', [
    { type: 'choice', prompt: '저울에서 올라간 쪽을 말할 때 알맞은 말은 어느 것인가요?', options: ['더 가벼워요', '더 길어요', '더 넓어요'], answer: 0, difficulty: 0.1, explain: '저울은 무게를 비교해요. 올라간 쪽이 더 가벼워요.' },
    { type: 'choice', prompt: '클립 8개인 끈과 클립 3개인 끈을 비교하는 알맞은 말은 어느 것인가요?', options: ['더 길어요', '더 무거워요', '더 넓어요'], answer: 0, difficulty: 0.1, explain: '클립으로 잰 것은 길이예요. 클립이 더 많은 끈이 더 길어요.' },
    { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '물의 양을 비교하는 말', cards: ['많다', '무겁다', '넓다'] }, prompt: '물의 양을 비교할 때 쓰는 말을 골라 보세요.', target: { pick: ['많다'] }, difficulty: 0.15 },
  ]],
  ws: { title: '알맞은 말 찾기', items: [
    { type: 'table', prompt: '비교하는 것에 알맞은 말을 이어서 쓰세요.', columns: ['비교하는 것', '쓰는 말'], cells: [['길이', '길다 / ' + BLANK], ['무게', '무겁다 / ' + BLANK], ['넓이', '넓다 / ' + BLANK], ['물의 양', '많다 / ' + BLANK]], answer: '짧다, 가볍다, 좁다, 적다' },
    { type: 'choice', prompt: '블록 탑을 비교할 때 쓰는 말에 ○ 하세요.', options: ['높다, 낮다', '무겁다, 가볍다'], answer: '높다, 낮다' },
    { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '칸이 7개인 도화지는 칸이 4개인 도화지보다 더 ______ 요.', answer: '넓어' },
    { type: 'short', prompt: '오늘 배운 비교하는 말 가운데 하나를 골라 짧은 문장을 만들어 보세요.' },
  ], easy: { note: '길이는 길다·짧다, 무게는 무겁다·가볍다, 넓이는 넓다·좁다, 물의 양은 많다·적다로 말해요.', items: [
    { type: 'choice', prompt: '무게를 비교할 때 쓰는 말에 ○ 하세요.', options: ['무겁다, 가볍다', '길다, 짧다'], answer: '무겁다, 가볍다' },
    { type: 'choice', prompt: '넓이를 비교할 때 쓰는 말에 ○ 하세요.', options: ['넓다, 좁다', '많다, 적다'], answer: '넓다, 좁다' },
    { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '물이 높이 올라온 컵은 물이 더 ______ 요. (많아 / 적어)', answer: '많아' },
    { type: 'draw', prompt: '긴 끈과 짧은 끈을 그리고 이름을 써 보세요.' },
  ] } },
  diff: { easy: '카드를 알맞은 곳에 놓으면 바로 초록 테두리가 생겨요. 맞지 않으면 까닭을 말하고 돌아와요.', base: '카드를 모두 놓은 뒤 확인을 눌러 맞는지 봐요.', challenge: '카드가 늘어나고 높이처럼 새로운 말이 함께 나와요.' },
  notes: '자주 보이는 어려움: ① 길이를 말하면서 "무겁다"를 쓴다 → 무엇을 비교하는지 먼저 말하게 한다. ② 높이와 길이를 같은 말로 쓴다 → 높이는 높다·낮다, 길이는 길다·짧다임을 짚는다. ③ 많다·적다를 길이에도 쓴다 → 길이는 길다·짧다라고 고쳐 말하게 한다. 12차시에서 단원을 정리한다.',
}));
// ───────────────────────────── 12차시 (wrap · representation) ─────────────────────────────
L.push(lesson(12, {
  title: '길이·무게·넓이·양을 모아 비교하며 단원 정리하기',
  objective: '길이, 무게, 넓이, 물의 양을 알맞은 방법으로 비교하고, 비교한 결과를 알맞은 말로 설명할 수 있다.',
  desc: 'a paper classroom table with a ribbon, a balance scale, a grid sheet and a cup of water, children cut from paper comparing them in a group',
  text: '비교한 것을 말해요',
  layers: [{ motif: 'house', x: 100, y: 214 }, { motif: 'flower', x: 300, y: 236 }, { motif: 'tree', x: 400, y: 216, s: 0.9 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"이번 단원에서 길이, 무게, 넓이, 물의 양을 비교했어요. 어떻게 비교했는지 떠올려 볼까요?" 클립, 저울, 점판 칸, 컵을 차례로 짚으며 학생이 말하게 한다. "오늘은 네 가지를 모아 한 번 더 비교해 봐요." 길이를 비교하는 데 저울을 쓰려는 학생이 있는지 살핀다 — 무엇을 비교하느냐에 따라 방법이 달라진다고 말해 준다.', '길이, 무게, 넓이, 물의 양은 각각 어떻게 비교했나요?'],
  demo: { tool: 'measure', options: { mode: 'ruler', max: 12, object: { name: '양말', len: 8 }, tiles: { name: '클립', len: 2 } }, sequence: [{ ans: 4 }] },
  acts: [
    { id: 'a1', title: '활동 1. 클립으로 길이 다시 재기', minutes: 9, tool: 'measure',
      task: '물건의 길이를 클립으로 재어 몇 개만큼인지 써요.',
      teacher: '"클립을 빈틈없이 이어 붙이고 하나씩 세어요." 앞 시간에 틀린 학생이 있었다면 짝에게 설명하며 다시 세게 한다. 클립 수가 큰 쪽이 더 길다고 말하며 결과를 확인하게 한다.',
      levels: RL,
      items: [
        tile('칫솔의 길이는 클립 몇 개만큼인가요?', '칫솔', 6, '클립', 2, 0.08),
        tile('빨대의 길이는 클립 몇 개만큼인가요?', '빨대', 10, '클립', 2, 0.1),
        tile('양말의 길이는 클립 몇 개만큼인가요?', '양말', 8, '클립', 2, 0.1,
          { conclude: '빨대는 클립 5개, 양말은 4개, 칫솔은 3개예요. 빨대가 가장 길고 칫솔이 가장 짧아요.' }),
        tile('더 해 보기: 머리끈의 길이는 클립 몇 개만큼인가요?', '머리끈', 4, '클립', 2, 0.15, { extra: true }),
      ] },
    { id: 'a2', title: '활동 2. 저울로 무게 다시 비교하기', minutes: 11, tool: 'measure',
      task: '저울을 보고 더 무거운 것 또는 더 가벼운 것을 골라요. 평평하면 "같아요"를 골라요.',
      teacher: '"저울이 어느 쪽으로 기울었나요? 평평한가요?" 기운 쪽, 올라간 쪽, 평평한 모양을 말하게 한 뒤 고르게 한다. 물음이 무거운 것인지 가벼운 것인지 소리 내어 읽게 한다.',
      levels: SL,
      items: [
        bal('왼쪽에 냄비, 오른쪽에 숟가락이 놓였어요. 더 무거운 것은 무엇인가요?', ['냄비', 700], ['숟가락', 40], 'heavy', 0.1),
        bal('왼쪽에 손수건, 오른쪽에 책이 놓였어요. 더 가벼운 것은 무엇인가요?', ['손수건', 30], ['책', 350], 'light', 0.12),
        bal('왼쪽에 우유, 오른쪽에 주스가 놓였어요. 저울이 평평해요. 무게는 어떤가요?', ['우유', 250], ['주스', 250], 'heavy', 0.18),
        bal('더 해 보기: 왼쪽에 모래 한 주먹, 오른쪽에 솜 한 주먹이 놓였어요. 더 무거운 것은 무엇인가요?', ['모래 한 주먹', 200], ['솜 한 주먹', 15], 'heavy', 0.22, { extra: true }),
      ] },
    { id: 'a3', title: '활동 3. 말에 알맞은 것 골라 정리하기', minutes: 6, tool: 'mindmap',
      task: '비교하는 말을 보고 알맞은 것 하나를 골라요.',
      teacher: '"가장 넓은 것은 어느 것일까요?" 칸 수나 클립 수, 바둑돌 수를 보고 말하게 한다. 단위가 다른 것을 섞어 견주는 학생에게 같은 단위끼리만 견주자고 말해 준다.',
      levels: CARD_LV,
      items: [
        pickOf('칸 수를 보고 가장 넓은 것을 골라 보세요.', '가장 넓어요', ['도화지 가: 7칸', '도화지 나: 12칸', '도화지 다: 9칸'], ['도화지 나: 12칸'], 0.12),
        pickOf('바둑돌 수를 보고 가장 가벼운 것을 골라 보세요.', '가장 가벼워요', ['호두: 바둑돌 3개', '밤: 바둑돌 6개', '귤: 바둑돌 12개'], ['호두: 바둑돌 3개'], 0.15),
        pickOf('물의 높이를 보고 물이 가장 많은 것을 골라 보세요. (같은 컵이에요)', '물이 가장 많아요', ['컵 가: 2칸', '컵 나: 7칸', '컵 다: 5칸'], ['컵 나: 7칸'], 0.18),
        pickOf('더 해 보기: 블록 수를 보고 가장 낮은 것을 골라 보세요.', '가장 낮아요', ['의자: 블록 6개', '책상: 블록 9개', '화분: 블록 4개'], ['화분: 블록 4개'], 0.2, { extra: true }),
      ] },
  ],
  wrap: ['"오늘 비교한 것 가운데 가장 재미있었던 것은 무엇이었나요?" 짝에게 무엇을 비교했고 어떤 도구를 썼는지 말하게 한다. 출구에서 틀린 문항은 다음 단원에서 수를 견줄 때 다시 살핀다.', [
    { type: 'choice', prompt: '길이를 비교할 때 쓸 수 있는 방법에 ○ 하세요.', options: ['클립을 이어 붙여 세요', '컵에 물을 부어요', '저울에 올려요'], answer: 0, difficulty: 0.1, explain: '길이는 클립을 이어 붙여 세어 비교해요.' },
    { type: 'choice', prompt: '무게를 비교할 때 쓸 수 있는 방법에 ○ 하세요.', options: ['점판 칸을 세요', '저울에 올려요', '클립을 이어요'], answer: 1, difficulty: 0.1, explain: '무게는 양팔저울에 올려 비교해요.' },
    { type: 'tool', tool: 'measure', options: { mode: 'volume', beakers: [cup('왼쪽 컵', 90), cup('오른쪽 컵', 210)], readOnly: true, ask: { q: '물이 더 적은 컵은?', choices: ['왼쪽 컵', '오른쪽 컵', '같아요'] } }, prompt: '물이 더 적은 컵을 골라 보세요.', target: { pick: 0 }, difficulty: 0.15 },
  ]],
  ws: { title: '비교하기 정리', items: [
    { type: 'table', prompt: '비교하는 것에 알맞은 도구나 방법을 이어서 쓰세요.', columns: ['비교하는 것', '비교하는 방법'], cells: [['길이', '(클립 / 저울 / 칸)을 세어요'], ['무게', '(클립 / 저울 / 칸)에 올려요'], ['넓이', '(클립 / 저울 / 칸)을 세어요']], answer: '클립, 저울, 칸' },
    { type: 'figure', wide: true, prompt: '저울을 보고 더 가벼운 것에 ○ 하세요.', tool: 'measure', options: { mode: 'scale', kind: 'balance', readOnly: true }, figures: [{ options: { left: [{ name: '풍선', w: 5 }], right: [{ name: '책', w: 400 }] }, caption: '풍선 / 책' }, { options: { left: [{ name: '쌀', w: 600 }], right: [{ name: '솜', w: 20 }] }, caption: '쌀 / 솜' }], answer: '풍선, 솜' },
    { type: 'choice', prompt: '클립 4개인 연필과 클립 7개인 자 중 더 긴 것에 ○ 하세요.', options: ['연필', '자'], answer: '자' },
    { type: 'short', prompt: '이 단원에서 가장 재미있었던 비교와 그 까닭을 써 보세요.' },
  ], easy: { note: '길이는 클립, 무게는 저울, 넓이는 칸으로 비교해요.', items: [
    { type: 'choice', prompt: '길이를 비교할 때 쓰는 것에 ○ 하세요.', options: ['클립', '저울'], answer: '클립' },
    { type: 'choice', prompt: '무게를 비교할 때 쓰는 것에 ○ 하세요.', options: ['클립', '저울'], answer: '저울' },
    { type: 'choice', prompt: '더 넓은 것에 ○ 하세요.', options: ['4칸', '9칸'], answer: '9칸' },
    { type: 'draw', prompt: '이 단원에서 비교해 본 것 하나를 그려 보세요.' },
  ] } },
  diff: { easy: '카드 고르기는 틀리면 까닭을 말하고 돌아와요. 클립에 번호가 보이고 저울이 기운 쪽에 화살표가 나와요.', base: '클립과 저울을 보고 스스로 재고 골라요.', challenge: '카드가 네 장으로 늘고 단위가 다른 것이 섞여 나와요.' },
  notes: '자주 보이는 어려움: ① 비교하는 것에 맞지 않는 도구를 쓴다(길이를 저울로) → 무엇을 비교하는지 먼저 말한다. ② 단위가 다른 것을 견준다(클립 수와 바둑돌 수) → 같은 단위끼리만 견준다. ③ 비교하는 말을 헷갈린다 → 11차시의 말 짝을 되짚는다. 다음 단원에서는 50까지의 수를 센다.',
}));
// @@NEXT@@
PaperLessons.registerUnit({
  id: UID, schema: 'edu-unit.v1', catalogUnit: CU,
  grade: 1, subject: '수학', unitTitle: UT,
  flow: '1~4차시는 길이로, 두 물건의 한쪽 끝을 맞추고 같은 클립을 이어 붙여 몇 개만큼인지 세어 긴 것과 짧은 것을 말하고, 블록 탑의 높이, 몇 개 더 긴지, 셋 이상을 차례로 놓기까지 넓혀 갑니다. 5~7차시는 무게로, 양팔저울이 기운 모양으로 더 무거운 것과 더 가벼운 것을 알고, 평평하면 같다는 것과 셋 이상의 차례를 익힌 뒤 바둑돌 수로 무게를 재어 견줍니다. 8차시는 넓이로, 점판의 칸 수를 세어 더 넓은 것을 고르고 같은 칸 수의 다른 모양을 만듭니다. 9~10차시는 물의 양으로, 같은 모양의 컵에서 물의 높이로 견주고 모양이 다른 그릇에서는 높이만 보면 틀릴 수 있음을 확인합니다. 11~12차시에서 길이·무게·넓이·양에 알맞은 비교하는 말을 짝지어 말하고, 네 가지를 모아 한 번 더 비교하며 단원을 정리합니다.',
  refs: {},
  lessons: L,
});
})();
