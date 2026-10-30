/* 6학년 2학기 과학 3. 전기의 이용 — 13차시
 * 불이 켜지는 회로(1~4) → 전지 한 개와 두 개의 직렬연결(5~7) → 전자석(8~10) → 전기를 효율적이고 안전하게 쓰기(11~13).
 * 회로 실험은 건전지와 전구·전선·전자석으로만 하고 콘센트는 쓰지 않는다. 화면의 회로판(circuit 교구)이 실험의 앞뒤(예상·구성·정리)를 받친다.
 * 표·그래프의 숫자는 모두 실험 예시 값이다.
 */
(function () {
  const U = { grade: 6, subject: '과학', unitTitle: '3. 전기의 이용' };
  const CU = 'g6-과학-2학기-3';
  const UID = 'g6-sci-2-03';
  const P = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const MOOD = { type: 'mood', prompt: '오늘 공부는 어땠나요?' };
  const SC = (text, extra) => ({ viewBox: [480, 270], layers: [].concat(extra || [], [{ motif: 'text', x: 240, y: 132, text, size: 22 }]) });
  const LV = { easy: { live: true, instant: true }, base: {}, challenge: {} };
  const CLV = { easy: { readout: true }, base: {}, challenge: { readout: false } };
  const NLV = { easy: {}, base: {}, challenge: {} };
  const L = (n, o) => {
    const mins = o.acts.length === 1 ? [25] : o.acts.length === 2 ? [13, 12] : [9, 8, 8];
    return Object.assign({
      id: `${UID}-${String(n).padStart(2, '0')}`, schema: 'edu-lesson.v1',
      catalog: { unit: CU, lesson: n }, minutes: 40, formats: ['chromebook', 'projector', 'print'],
    }, U, {
      title: o.title, objective: o.objective, standards: o.standards,
      ...(o.safety ? { safety: o.safety } : {}),
      illustration: { prompt: P(o.ill), scene: o.scene },
      stages: [
        { id: 'intro', title: '도입', minutes: 7, teacher: o.intro[0], student: o.intro[1] },
        { id: 'main', title: '전개', minutes: 25, activities: o.acts.map((a, i) => ({
          id: `a${i + 1}`, title: `활동 ${i + 1}. ${a.title}`, minutes: mins[i], tool: a.tool,
          ...(a.options ? { options: a.options } : {}),
          task: a.task, teacher: a.teacher, levels: a.levels || LV, items: a.items })) },
        { id: 'wrapup', title: '정리', minutes: 8, teacher: o.wrap, exitTicket: [].concat(o.exit, [MOOD]) },
      ],
      worksheet: { title: o.ws.title, items: o.ws.items, easy: { note: o.ws.note, items: o.ws.easy } },
      differentiation: o.diff, teacherNotes: o.notes,
    });
  };
  const S1 = ['[6과15-01]'], S2 = ['[6과15-02]'], S3 = ['[6과15-03]'], S4 = ['[6과15-04]'];
  const SAFE_E = ['실험에는 건전지만 써요. 집이나 교실의 콘센트에는 전선이나 클립을 절대 꽂지 않아요.', '전지의 (+)극과 (−)극을 도선 하나로 바로 이으면(합선) 전선이 뜨거워지니 절대 이어 두지 않아요.', '실험이 끝나면 전지를 바로 빼 두고, 젖은 손으로 전지와 전선을 만지지 않아요.'];
  // 4×3 점판(가로 칸 h, 세로 칸 v)의 둘레 고리: 왼쪽 위 세로 칸 v0-0에 전지, 나머지는 도선. over로 칸을 바꾸고 null이면 비운다
  const LOOP43 = (over) => {
    const p = { 'v0-0': 'bat-', 'h0-0': 'wire', 'h1-0': 'wire', 'h2-0': 'wire', 'v3-0': 'wire', 'v3-1': 'wire', 'h2-2': 'wire', 'h1-2': 'wire', 'h0-2': 'wire', 'v0-1': 'wire' };
    Object.entries(over || {}).forEach(([k, v]) => { if (v == null) delete p[k]; else p[k] = v; });
    return { parts: p };
  };
  // 3×2 점판의 둘레 고리
  const LOOP32 = (over) => {
    const p = { 'v0-0': 'bat-', 'h0-0': 'wire', 'h1-0': 'wire', 'v2-0': 'wire', 'h1-1': 'wire', 'h0-1': 'wire' };
    Object.entries(over || {}).forEach(([k, v]) => { if (v == null) delete p[k]; else p[k] = v; });
    return { parts: p };
  };

  const lessons = [
    // ───────────────────────── 1차시 (intro) ─────────────────────────
    L(1, {
      title: '전구에 불이 켜지는 회로와 켜지지 않는 회로 가르기',
      objective: '전지·전구·도선으로 이은 회로 그림을 보고 불이 켜지는 회로와 켜지지 않는 회로를 가르고, 끊김 없이 이어진 길이 있어야 불이 켜진다고 말할 수 있다.',
      standards: S1,
      safety: SAFE_E,
      ill: 'a paper battery, a bulb and wires drawn as one closed loop on a board, with one loop missing a piece, and children pointing at the gap',
      scene: SC('불이 켜질까요?', [{ motif: 'star', x: 90, y: 58 }, { motif: 'star', x: 400, y: 70, s: 0.8 }, { motif: 'hills', y: 230, colors: ['buttercup', 'peach', 'sky'] }]),
      intro: ['"손전등 스위치를 켜면 불이 켜지죠. 전지 속의 전기는 어떤 길로 다닐까요?" 손전등을 분해해 전지·전구·도선이 한 줄로 이어진 모습을 보여 준다. "전선을 전지 한쪽에만 이어도 불이 켜진다"고 생각하는 학생이 많아, 길이 끊김 없이 이어져야 하는지 오늘 회로 그림으로 확인한다고 알린다.', '전구에 불이 켜지려면 전지에서 나온 전기의 길이 어떻게 되어 있어야 할까요?'],
      acts: [
        {
          title: '켜질지 안 켜질지 예상하기', tool: 'circuit', levels: NLV, options: { grid: [3, 2] },
          task: '회로 그림을 보고 전구에 불이 켜질지 골라요. 그림은 움직이지 않아요.',
          teacher: '"전지의 (+)극에서 나온 전기가 어디를 지나서 (−)극으로 돌아오나요? 손가락으로 따라가 봐요." 길이 끊긴 그림에서 "켜져요"를 고른 학생에게는 끊긴 칸을 짚어 보게 한다.',
          items: [
            { prompt: '민지가 전지·전구·도선으로 회로를 이었어요. 전구에 불이 켜질까요?', toolOptions: { readOnly: true, glow: false, ask: { q: '전구는 어떻게 될까요?', choices: ['켜져요', '켜지지 않아요'], why: [null, '전기의 길이 끊김 없이 이어져 있어요. 손가락으로 한 바퀴 따라가 보세요.'] } },
              state: LOOP32({ 'h0-0': 'bulb' }), target: { pick: 0 }, difficulty: 0.1,
              predict: { q: '이 회로의 전구는 켜질까요?', options: ['켜질 것 같다', '켜지지 않을 것 같다'], answer: 0 },
              conclude: '전지·전구·도선이 한 바퀴 끊김 없이 이어지면 전기가 흘러 불이 켜져요.' },
            { prompt: '준호의 회로예요. 아래쪽 도선 칸 하나가 비어 있어요. 전구는 켜질까요?', toolOptions: { readOnly: true, glow: false, ask: { q: '전구는 어떻게 될까요?', choices: ['켜져요', '켜지지 않아요'], why: ['아래쪽 칸이 비어 전기의 길이 끊겼어요.', null] } },
              state: LOOP32({ 'h0-0': 'bulb', 'h1-1': null }), target: { pick: 1 }, difficulty: 0.15 },
            { prompt: '전지와 전구를 도선 하나로만 이었어요. 전구는 왜 켜지지 않을까요?', toolOptions: { readOnly: true, glow: false, ask: { q: '켜지지 않는 까닭은?', choices: ['전구 한쪽에서 전지로 돌아오는 길이 없어요', '전지가 너무 커요', '전구가 너무 작아요'], why: [null, '전지 크기는 불이 켜지는 것과 상관없어요. 전기의 길을 보세요.', '전구 크기는 길이 끊긴 것과 상관없어요.'] } },
              state: { parts: { 'v0-0': 'bat-', 'h0-0': 'bulb' } }, target: { pick: 0 }, difficulty: 0.25 },
          ],
        },
        {
          title: '끊긴 길을 도선으로 이어 불 켜기', tool: 'circuit', levels: CLV, options: { grid: [4, 3], lock: true },
          task: '조각함에서 도선을 골라 빈칸을 눌러 이어요. 연보라 바탕의 부품은 고정이에요.',
          teacher: '"어느 칸을 이으면 전기의 길이 완성될까요?" 빈칸이 두 곳일 때는 한 곳만 이어 놓고 "켜졌나요? 아직 끊긴 곳이 있죠?"라고 묻는다. 도선만으로 전지 두 극을 잇는 합선은 하지 않도록 짚는다.',
          items: [
            { prompt: '윗줄 도선 칸 하나가 비어 있어요. 이어서 전구에 불을 켜 보세요.', state: LOOP43({ 'h1-0': 'bulb', 'h2-0': null }), target: { lit: 'all' }, difficulty: 0.1 },
            { prompt: '아래쪽 도선 칸 두 개가 비어 있어요. 모두 이어서 불을 켜 보세요.', state: LOOP43({ 'h2-2': 'bulb', 'h1-2': null, 'v3-1': null }), target: { lit: 'all' }, difficulty: 0.2 },
            { prompt: '오른쪽에 전구를 두었어요. 끊긴 곳을 찾아 이어 불을 켜 보세요.', state: LOOP43({ 'v3-0': 'bulb', 'h1-0': null, 'h0-2': null }), target: { lit: 'all' }, difficulty: 0.25,
              conclude: '끊긴 곳을 모두 이어 길이 한 바퀴 완성되어야 전구에 불이 켜져요.' },
          ],
        },
        {
          title: '불이 켜지는 회로의 특징 고르기', tool: 'mindmap',
          task: '카드를 읽고 불이 켜지는 회로의 특징만 골라요.',
          teacher: '"켜지는 회로와 안 켜지는 회로를 가르는 가장 큰 까닭이 무엇이었죠?" 전선의 길이나 색을 근거로 든 학생에게 "길이 이어졌는지와 상관있을까요?"를 묻는다.',
          items: [
            { prompt: '불이 켜지는 회로의 특징만 바구니에 담으세요.',
              toolOptions: { mode: 'pick', topic: '켜지는 회로', basket: '켜지는 회로의 특징', cards: [{ id: 'a', text: '전기의 길이 끊김 없이 한 바퀴 이어져요' }, { id: 'b', text: '전지의 두 극이 모두 이어져 있어요' }, { id: 'c', text: '전선이 길어요', why: '전선의 길이는 켜지는 까닭이 아니에요.' }, { id: 'd', text: '전구가 전지 한쪽에만 이어져요', why: '한쪽에만 이으면 전기의 길이 만들어지지 않아요.' }] },
              target: { pick: ['a', 'b'] }, difficulty: 0.2 },
            { prompt: '회로를 보고 한 말을 켜지는 경우와 안 켜지는 경우로 나누세요.',
              toolOptions: { mode: 'sort', topic: '회로 관찰', slots: ['켜져요', '안 켜져요'], cards: ['길이 한 바퀴 이어졌어요', '도선 칸이 하나 비어 있어요', '전구 양쪽이 모두 이어졌어요', '전구 한쪽만 이어졌어요'] },
              target: { sort: { '켜져요': ['길이 한 바퀴 이어졌어요', '전구 양쪽이 모두 이어졌어요'], '안 켜져요': ['도선 칸이 하나 비어 있어요', '전구 한쪽만 이어졌어요'] } }, difficulty: 0.2 },
            { prompt: '불이 켜지지 않을 때 고칠 것을 차례대로 놓으세요.',
              toolOptions: { mode: 'order', slots: ['첫째', '둘째', '셋째'], cards: ['끊긴 칸이 있는지 찾아요', '비어 있는 칸에 도선을 이어요', '전구가 켜졌는지 다시 봐요'] },
              target: { order: ['끊긴 칸이 있는지 찾아요', '비어 있는 칸에 도선을 이어요', '전구가 켜졌는지 다시 봐요'] }, difficulty: 0.15 },
          ],
        },
      ],
      wrap: '"전선을 전지 한쪽에만 이어도 불이 켜질까요?" 길이 한 바퀴 이어져야 한다는 것을 손가락으로 따라가며 말하게 한다. 출구 2번을 틀린 학생에게는 회로판에서 도선 한 칸을 빼 전구가 꺼지는 것을 보여 준다.',
      exit: [
        { type: 'tool', tool: 'circuit', options: { grid: [3, 2], lock: true }, state: LOOP32({ 'h0-0': 'bulb', 'h1-1': null }), prompt: '비어 있는 칸을 이어 전구를 켜세요.', target: { lit: 'all' }, difficulty: 0.15 },
        { type: 'choice', prompt: '전구에 불이 켜지려면 전기의 길은 어때야 하나요?', options: ['끊김 없이 한 바퀴 이어져야 해요', '한쪽만 이어도 돼요'], answer: 0, difficulty: 0.2, explain: '전지의 (+)극에서 나온 전기가 부품을 지나 (−)극으로 돌아오는 길이 완성되어야 해요.' },
        { type: 'choice', prompt: '전구와 전지를 도선 하나로만 이은 회로에서 불이 켜지지 않는 까닭은 무엇인가요?', options: ['돌아오는 길이 없어서', '도선이 짧아서'], answer: 0, difficulty: 0.25, explain: '한쪽만 이으면 전기가 돌아오는 길이 없어 흐르지 못해요.' },
      ],
      ws: {
        title: '켜지는 회로 찾기',
        note: '전기의 길을 손가락으로 따라가요. 끊긴 곳이 없으면 켜지는 회로예요.',
        items: [
          { type: 'figure', prompt: '두 회로에서 전구에 불이 켜질지 쓰세요.', tool: 'circuit', options: { grid: [3, 2] }, figures: [
            { state: LOOP32({ 'h0-0': 'bulb' }), caption: '(    )' }, { state: LOOP32({ 'h0-0': 'bulb', 'h1-1': null }), caption: '(    )' }], answer: '켜진다, 켜지지 않는다' },
          { type: 'choice', prompt: '불이 켜지는 회로의 특징에 ○ 하세요.', options: ['전기의 길이 끊김 없이 한 바퀴 이어져요', '전선이 길어요', '전구가 커요'], answer: '전기의 길이 끊김 없이 한 바퀴 이어져요' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '전지의 ___극에서 나온 전기가 전구를 지나 ___극으로 돌아오는 길이 이어져야 해요.', answer: '(+), (−)' },
          { type: 'short', prompt: '불이 켜지지 않는 회로를 보고 어디를 어떻게 고쳐야 하는지 쓰세요.', answer: '끊긴 칸을 찾아 도선으로 이어 길이 한 바퀴 이어지게 한다.' },
        ],
        easy: [
          { type: 'choice', prompt: '불이 켜지는 회로에 ○ 하세요.', options: ['길이 끊김 없이 이어진 회로', '길이 끊긴 회로'], answer: '길이 끊김 없이 이어진 회로' },
          { type: 'choice', prompt: '전구를 전지 한쪽에만 이으면?', options: ['켜져요', '안 켜져요'], answer: '안 켜져요' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '전기의 길이 ___ 없이 이어져야 불이 켜져요.', answer: '끊김' },
          { type: 'draw', prompt: '전지·전구·도선을 이어 불이 켜지는 모습을 그려 보세요.' },
        ],
      },
      diff: {
        easy: '켜진 전구 수가 글자로 바로 보여 회로를 이은 결과를 곧바로 확인해요.',
        base: '전구의 빛만 보고 판단하며, 끊긴 칸을 스스로 찾아요.',
        challenge: '켜진 전구 수 글자도 없이 회로의 빛만 보고 판단하고, 끊긴 칸이 여러 곳이에요.',
      },
      teacherNotes: '준비물(모둠): 건전지 1개와 건전지 끼우개, 꼬마전구와 소켓, 집게 전선 3개. 콘센트에는 연결하지 않는다. 자주 보이는 어려움: ① 전구 한쪽만 이어도 켜진다고 생각한다 → 전구의 두 끝이 모두 길에 이어져야 한다. ② 도선이 길거나 색이 달라 켜진다고 생각한다 → 길이 이어졌는지만 본다. ③ 도선만으로 전지 두 극을 잇는다(합선) → 전선이 뜨거워지므로 즉시 떼게 한다.',
    }),

    // ───────────────────────── 2차시 (practice) ─────────────────────────
    L(2, {
      title: '스위치와 전구 없는 회로까지 살펴 불이 켜질지 따지기',
      objective: '스위치가 열려 있거나 닫혀 있을 때와 전구가 없는 회로(합선)의 모습을 보고 전구가 켜질지, 어떤 위험이 있을지 근거를 들어 말할 수 있다.',
      standards: S1,
      safety: SAFE_E,
      ill: 'a paper switch lever between open and closed positions on a loop with a bulb, and a bright warning spark on a loop with no bulb',
      scene: SC('스위치를 눌러 볼까요?', [{ motif: 'cloud', x: 100, y: 50 }, { motif: 'flower', x: 390, y: 214 }, { motif: 'hills', y: 230, colors: ['lavender', 'mint', 'peach'] }]),
      intro: ['"방의 불을 끄고 켜는 스위치 안에서는 무슨 일이 일어날까요?" 스위치를 누르면 길이 열리고 닫히는 것을 지난 시간의 \'끊긴 길\'과 이어서 말하게 한다. 오늘은 스위치가 열렸을 때와 닫혔을 때, 그리고 전구 없이 전선만 이은 회로를 비교한다.', '스위치는 전기의 길을 어떻게 바꿀까요? 전구 없이 전선만 이으면 어떻게 될까요?'],
      acts: [
        {
          title: '스위치와 전선만 이은 회로 읽기', tool: 'circuit', levels: NLV, options: { grid: [3, 2] },
          task: '회로 그림을 보고 알맞은 답을 골라요. 그림은 움직이지 않아요.',
          teacher: '"스위치가 열려 있으면 전기의 길은 어떻게 되나요?" 열린 스위치를 끊어진 도선으로 생각하게 한다. 합선 그림에서 "전구가 아주 밝게 켜진다"를 고른 학생에게는 "전구가 길에 없는데 어떻게 켜지죠?"를 되묻고 전선이 뜨거워지는 위험을 짚는다.',
          items: [
            { prompt: '아래쪽에 스위치가 있는 회로예요. 스위치가 열려 있어요. 전구는 어떻게 될까요?', toolOptions: { grid: [4, 3], readOnly: true, glow: false, ask: { q: '전구는 어떻게 될까요?', choices: ['켜져요', '꺼져 있어요'], why: ['스위치가 열려 전기의 길이 끊겼어요.', null] } },
              state: LOOP43({ 'h1-0': 'bulb', 'h2-2': 'sw0' }), target: { pick: 1 }, difficulty: 0.15 },
            { prompt: '스위치를 닫아 둔 회로예요. 전구는 어떻게 될까요?', toolOptions: { readOnly: true, glow: false, ask: { q: '전구는 어떻게 될까요?', choices: ['켜져요', '꺼져 있어요'], why: [null, '스위치가 닫히면 길이 이어져 전기가 흘러요.'] } },
              state: LOOP32({ 'h0-0': 'bulb', 'h1-1': 'sw1' }), target: { pick: 0 }, difficulty: 0.2 },
            { prompt: '전구 없이 도선만으로 전지의 두 극을 이었어요. 어떤 일이 생길까요?', toolOptions: { readOnly: true, glow: false, ask: { q: '어떤 일이 생길까요?', choices: ['전구가 켜져요', '도선이 뜨거워져 위험해요', '아무 일도 없어요'], why: ['전구가 길에 없어서 켜질 수 없어요.', null, '전지의 전기가 한꺼번에 흘러 도선이 뜨거워질 수 있어요.'] } },
              state: LOOP32({}), target: { pick: 1 }, difficulty: 0.25 },
          ],
        },
        {
          title: '스위치를 여닫으며 회로 고치기', tool: 'circuit', levels: CLV, options: { grid: [4, 3], lock: true },
          task: '스위치를 눌러 열고 닫으며 전구에 불이 켜지고 꺼지게 해요. 연보라 바탕의 부품은 고정이에요.',
          teacher: '"스위치를 누르면 무엇이 바뀌었나요?" 전구를 켜는 문제와 끄는 문제를 번갈아 풀게 한다. 스위치를 닫았는데도 안 켜지면 도선이 빠진 곳은 없는지 한 바퀴 따라가 보게 한다.',
          items: [
            { prompt: '스위치가 열려 있어요. 스위치를 닫아 전구에 불을 켜 보세요.', state: LOOP43({ 'h1-0': 'bulb', 'h2-2': 'sw0' }), target: { lit: 'all', switch: 'closed' }, difficulty: 0.1 },
            { prompt: '불이 켜져 있어요. 스위치를 열어 전구를 꺼 보세요.', toolOptions: { grid: [3, 2] }, state: LOOP32({ 'h0-0': 'bulb', 'h1-1': 'sw1' }), target: { lit: 0, switch: 'open' }, difficulty: 0.1 },
            { prompt: '빈 회로판에 전지·전구·스위치를 놓아 스위치로 켜고 끄는 회로를 만들어 보세요. 켜졌는지는 확인한 뒤에 보여요.', toolOptions: { grid: [3, 2], lock: false, readout: true }, state: { parts: {} }, target: { lit: 'all' }, difficulty: 0.3, reveal: 'after-check',
              conclude: '스위치를 닫으면 길이 이어져 켜지고, 열면 길이 끊겨 꺼져요.' },
          ],
        },
        {
          title: '전기를 안전하게 다루는 약속 고르기', tool: 'mindmap',
          task: '카드를 읽고 회로 실험에서 지켜야 할 약속만 골라요.',
          teacher: '"전선이 뜨거워지면 어떻게 할까요?" 손으로 만지지 말고 바로 전지를 빼야 한다고 짚는다. 합선과 콘센트 연결을 어기면 위험한 이유를 학생이 한 문장씩 말하게 한다.',
          items: [
            { prompt: '회로 실험에서 지켜야 할 약속만 바구니에 담으세요.',
              toolOptions: { mode: 'pick', topic: '안전 약속', basket: '지킬 약속', cards: [{ id: 'a', text: '전지의 두 극을 도선만으로 잇지 않아요' }, { id: 'b', text: '콘센트에는 전선을 꽂지 않아요' }, { id: 'c', text: '전선이 뜨거워져도 계속 쥐고 있어요', why: '뜨거워지면 바로 전지에서 떼어야 해요.' }, { id: 'd', text: '젖은 손으로 전지를 만져요', why: '젖은 손으로는 전기 제품을 만지지 않아요.' }] },
              target: { pick: ['a', 'b'] }, difficulty: 0.15 },
            { prompt: '실험하다가 일어난 일에 알맞게 대처하는 말을 나누세요.',
              toolOptions: { mode: 'sort', topic: '이럴 땐', slots: ['바로 해야 해요', '하면 안 돼요'], cards: ['전선이 뜨거우면 전지를 빼요', '선생님께 말해요', '뜨거운 전선을 맨손으로 만져요', '전지 두 극을 도선으로 이어 둬요'] },
              target: { sort: { '바로 해야 해요': ['전선이 뜨거우면 전지를 빼요', '선생님께 말해요'], '하면 안 돼요': ['뜨거운 전선을 맨손으로 만져요', '전지 두 극을 도선으로 이어 둬요'] } }, difficulty: 0.15 },
            { prompt: '실험이 끝난 뒤 할 일을 차례대로 놓으세요.',
              toolOptions: { mode: 'order', slots: ['첫째', '둘째', '셋째'], cards: ['스위치를 열어요', '전지를 빼서 모아요', '손을 씻고 정리해요'] },
              target: { order: ['스위치를 열어요', '전지를 빼서 모아요', '손을 씻고 정리해요'] }, difficulty: 0.15 },
          ],
        },
      ],
      wrap: '"스위치를 열면 왜 전구가 꺼질까요?" 스위치를 전기의 길을 열고 닫는 부품으로 말하게 한다. 출구 3번을 틀린 학생에게는 전구 없이 전선만 이은 회로의 위험을 그림 카드로 다시 읽어 준다.',
      exit: [
        { type: 'tool', tool: 'circuit', options: { grid: [3, 2], lock: true }, state: LOOP32({ 'h0-0': 'bulb', 'h1-1': 'sw0' }), prompt: '스위치를 닫아 전구에 불을 켜세요.', target: { lit: 'all', switch: 'closed' }, difficulty: 0.15 },
        { type: 'choice', prompt: '스위치를 열면 전구가 꺼지는 까닭은 무엇인가요?', options: ['전기의 길이 끊겨서', '전구가 고장 나서'], answer: 0, difficulty: 0.2, explain: '스위치를 열면 전기의 길이 끊겨 전기가 흐르지 못해요.' },
        { type: 'choice', prompt: '전구 없이 전선만으로 전지의 두 극을 이으면 어떻게 되나요?', options: ['전선이 뜨거워져 위험해요', '전구가 켜져요'], answer: 0, difficulty: 0.25, explain: '전기가 한꺼번에 흘러 전선이 뜨거워지는 합선이에요.' },
      ],
      ws: {
        title: '스위치와 합선 살펴보기',
        note: '스위치가 닫히면 길이 이어지고 열리면 끊겨요. 전구 없이 선만 이으면 위험해요.',
        items: [
          { type: 'figure', prompt: '스위치가 열린 회로와 닫힌 회로예요. 전구가 켜질지 쓰세요.', tool: 'circuit', options: { grid: [3, 2] }, figures: [
            { state: LOOP32({ 'h0-0': 'bulb', 'h1-1': 'sw0' }), caption: '(    )' }, { state: LOOP32({ 'h0-0': 'bulb', 'h1-1': 'sw1' }), caption: '(    )' }], answer: '켜지지 않는다, 켜진다' },
          { type: 'choice', prompt: '스위치를 닫으면 어떻게 되나요? ○ 하세요.', options: ['전기의 길이 이어져요', '전기의 길이 끊겨요'], answer: '전기의 길이 이어져요' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '전구 없이 전선만으로 전지의 두 극을 이으면 전선이 ___ 위험해요.', answer: '뜨거워져' },
          { type: 'short', prompt: '전선이 뜨거워졌을 때 해야 할 일을 쓰세요.', answer: '맨손으로 만지지 않고 바로 전지에서 떼어 선생님께 알린다.' },
        ],
        easy: [
          { type: 'choice', prompt: '스위치가 열리면 전구는?', options: ['꺼져요', '켜져요'], answer: '꺼져요' },
          { type: 'choice', prompt: '위험한 것에 ○ 하세요.', options: ['전구 없이 선만 잇기', '스위치 닫기'], answer: '전구 없이 선만 잇기' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '스위치를 ___ 전구가 켜져요.', answer: '닫으면' },
          { type: 'draw', prompt: '스위치가 열린 회로와 닫힌 회로를 각각 그려 보세요.' },
        ],
      },
      diff: {
        easy: '켜진 전구 수가 글자로 보이고, 스위치를 눌러 바로 결과를 확인해요.',
        base: '전구의 빛만 보고 스위치의 열림·닫힘을 판단해요.',
        challenge: '글자 없이 빛만 보고 판단하며, 빈 판에서 스위치 회로를 처음부터 만들어요.',
      },
      teacherNotes: '준비물: 스위치(손잡이형), 건전지, 꼬마전구, 집게 전선. 자주 보이는 어려움: ① 스위치가 열려도 전기가 조금 흐른다고 생각한다 → 열린 스위치는 도선 한 칸이 빠진 것과 같다. ② 합선을 불이 가장 밝은 회로로 생각한다 → 전구를 거치지 않아 전선이 뜨거워진다. ③ 합선 실험을 직접 해 보려 한다 → 실제로는 하지 않고 그림으로만 다룬다.',
    }),

    // ───────────────────────── 3차시 (core) ─────────────────────────
    L(3, {
      title: '회로를 전기 기호와 선으로 그리고 전기가 흐르는 길 표시하기',
      objective: '꾸민 회로를 전기 기호와 선으로 나타내고, 전기가 흐르는 길을 화살표로 표시하여 켜지는 회로와 켜지지 않는 회로의 차이를 설명할 수 있다.',
      standards: S1,
      safety: SAFE_E,
      ill: 'a paper circuit diagram with a battery symbol, a bulb symbol in a circle and a switch symbol drawn on a grid, with a bright arrow showing the way',
      scene: SC('기호로 그려 봐요', [{ motif: 'star', x: 90, y: 60 }, { motif: 'sun', x: 410, y: 56, s: 0.7 }, { motif: 'hills', y: 230, colors: ['sky', 'peach', 'mint'] }]),
      intro: ['"회로를 매번 그림으로 그리면 오래 걸리죠. 약속된 기호로 쓰면 어떨까요?" 전지(긴 선 하나와 짧은 선 하나), 전구(원 안에 ×), 스위치(끊어진 선 위의 손잡이) 기호를 칠판에 소개한다. 회로도에서 선이 끊어져 있는데 켜지는 회로라고 적는 오류를 먼저 보여 주고, 오늘은 기호로 그리고 길을 화살표로 표시해 본다.', '약속된 기호로 회로를 그리고 전기가 흐르는 길을 어떻게 표시할까요?'],
      acts: [
        {
          title: '기호와 부품 이름 잇기', tool: 'mindmap',
          task: '전기 기호의 모양 설명과 부품 이름을 알맞게 이어요.',
          teacher: '"긴 선과 짧은 선 한 쌍은 무엇을 나타낼까요?" 전지의 긴 선이 (+)극이라는 것을 짚는다. 기호 이름을 외우기보다 회로도에서 그 모양이 어디에 있었는지 말하게 한다.',
          items: [
            { prompt: '기호의 모양과 부품 이름을 이으세요. 맞지 않는 카드는 남겨 둬요.',
              toolOptions: { mode: 'match', topic: '전기 기호', slots: [{ id: 'c1', label: '긴 선과 짧은 선 한 쌍' }, { id: 'c2', label: '원 안에 ×' }, { id: 'c3', label: '끊어진 선 위의 손잡이' }], cards: [{ id: '전지', text: '전지' }, { id: '전구', text: '전구' }, { id: '스위치', text: '스위치' }, { id: '도선', text: '자석', why: '자석의 기호는 아니에요.' }] },
              target: { match: { c1: '전지', c2: '전구', c3: '스위치' } }, difficulty: 0.2 },
            { prompt: '전기 회로도에 꼭 필요한 표시만 골라 담으세요.',
              toolOptions: { mode: 'pick', topic: '회로도', basket: '꼭 필요한 표시', cards: [{ id: 'a', text: '전지와 전구 기호' }, { id: 'b', text: '이어진 선' }, { id: 'c', text: '전기가 흐르는 방향 화살표' }, { id: 'd', text: '예쁜 테두리 장식', why: '그림이 잘 읽히게는 해 주지만 회로를 나타내는 데 필요한 표시는 아니에요.' }] },
              target: { pick: ['a', 'b', 'c'] }, difficulty: 0.2 },
            { prompt: '친구가 그린 회로도의 설명이에요. 맞는 설명과 잘못된 설명으로 나누세요.',
              toolOptions: { mode: 'sort', topic: '회로도 점검', slots: ['맞는 설명', '고쳐야 해요'], cards: ['선이 끊김 없이 이어져 불이 켜져요', '선이 끊겼는데 불이 켜진다고 썼어요', '전지의 극을 표시했어요', '전구 기호를 그리지 않았어요'] },
              target: { sort: { '맞는 설명': ['선이 끊김 없이 이어져 불이 켜져요', '전지의 극을 표시했어요'], '고쳐야 해요': ['선이 끊겼는데 불이 켜진다고 썼어요', '전구 기호를 그리지 않았어요'] } }, difficulty: 0.3 },
          ],
        },
        {
          title: '회로도를 보고 회로판에 꾸미기', tool: 'circuit', levels: CLV, options: { grid: [4, 3], lock: true },
          task: '회로도에 맞게 빈칸을 도선으로 이어 전구에 불을 켜요. 연보라 바탕의 부품은 고정이에요.',
          teacher: '"회로도의 선이 이어진 곳이 회로판의 어느 칸일까요?" 그림과 판을 짝지어 짚게 한다. 빈칸이 2개일 때는 두 칸이 모두 이어졌는지 하나씩 소리 내어 확인하게 한다.',
          items: [
            { prompt: '회로도에는 윗줄이 모두 이어져 있어요. 판의 빈칸을 이어 불을 켜 보세요.', state: LOOP43({ 'h1-0': 'bulb', 'h0-0': null }), target: { lit: 'all' }, difficulty: 0.15 },
            { prompt: '전구 두 개를 윗줄에 한 줄로 이은 회로도예요. 빈칸을 이어 두 전구를 모두 켜 보세요.', state: LOOP43({ 'h0-0': 'bulb', 'h1-0': 'bulb', 'h2-0': null }), target: { lit: 'all', bulbs: 2, connection: 'series' }, difficulty: 0.25 },
            { prompt: '아래쪽 세 칸 중 둘이 비었어요. 회로도처럼 이어 불을 켜 보세요.', state: LOOP43({ 'h1-2': 'bulb', 'h0-2': null, 'h2-2': null }), target: { lit: 'all' }, difficulty: 0.25,
              conclude: '회로도의 이어진 선은 회로판에서 도선이 이어진 길을 뜻해요.' },
          ],
        },
        {
          title: '회로도를 그리는 차례 놓기', tool: 'story',
          task: '회로도를 그리는 차례대로 카드를 놓아요.',
          teacher: '"전지에서 시작해 어느 쪽으로 선을 이으면 좋을까요?" 부품 기호부터 놓고 선을 잇고 마지막에 화살표를 표시하는 차례를 말하게 한다. 화살표를 먼저 그려 선이 끊긴 것을 놓치는 학생에게는 "길이 완성된 뒤 방향을 표시해요"를 알려 준다.',
          items: [
            { prompt: '회로도를 그리는 차례대로 카드를 놓으세요.',
              toolOptions: { mode: 'order', slots: ['첫째', '둘째', '셋째', '넷째'], cards: ['전지·전구·스위치 기호를 놓아요', '기호 사이를 선으로 이어요', '전지의 (+)극에서 시작하는 화살표로 길을 표시해요', '이 회로에서 불이 켜지는지 적어요'] },
              target: { order: ['전지·전구·스위치 기호를 놓아요', '기호 사이를 선으로 이어요', '전지의 (+)극에서 시작하는 화살표로 길을 표시해요', '이 회로에서 불이 켜지는지 적어요'] }, difficulty: 0.25 },
            { prompt: '회로도에서 길을 따라가는 차례를 놓으세요.',
              toolOptions: { mode: 'order', slots: ['첫째', '둘째', '셋째'], cards: ['전지의 (+)극에서 출발해요', '스위치와 전구를 차례로 지나요', '전지의 (−)극으로 돌아와요'] },
              target: { order: ['전지의 (+)극에서 출발해요', '스위치와 전구를 차례로 지나요', '전지의 (−)극으로 돌아와요'] }, difficulty: 0.2 },
            { prompt: '켜지지 않는 회로도를 고치는 차례를 놓으세요.',
              toolOptions: { mode: 'order', slots: ['첫째', '둘째', '셋째'], cards: ['선이 끊긴 곳을 찾아 동그라미 쳐요', '끊긴 곳을 선으로 이어요', '고친 길을 화살표로 다시 표시해요'] },
              target: { order: ['선이 끊긴 곳을 찾아 동그라미 쳐요', '끊긴 곳을 선으로 이어요', '고친 길을 화살표로 다시 표시해요'] }, difficulty: 0.25 },
          ],
        },
      ],
      wrap: '"회로도의 선이 끊어져 있으면 어떤 회로일까요?" 켜지지 않는 회로임을 기호와 선으로 설명하게 한다. 출구 2번에서 기호를 바꿔 고른 학생은 짝과 기호 카드를 서로 맞혀 보게 한다.',
      exit: [
        { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '전기 기호', slots: [{ id: 'c1', label: '원 안에 ×' }, { id: 'c2', label: '긴 선과 짧은 선 한 쌍' }], cards: [{ id: '전지', text: '전지' }, { id: '전구', text: '전구' }] }, prompt: '기호와 이름을 이으세요.', target: { match: { c1: '전구', c2: '전지' } }, difficulty: 0.2 },
        { type: 'choice', prompt: '회로도에서 선이 끊겨 있으면 어떤 회로인가요?', options: ['켜지지 않는 회로', '켜지는 회로'], answer: 0, difficulty: 0.2, explain: '선이 끊겼다는 것은 전기의 길이 끊겼다는 뜻이에요.' },
        { type: 'choice', prompt: '전기가 흐르는 방향은 어디에서 시작하는 화살표로 나타내나요?', options: ['전지의 (+)극', '전구'], answer: 0, difficulty: 0.25, explain: '전기는 전지의 (+)극에서 나와 (−)극으로 돌아가는 것으로 약속해요.' },
      ],
      ws: {
        title: '회로도 그리기',
        note: '전지(긴 선 + 짧은 선), 전구(원 안에 ×), 스위치 기호로 그려요.',
        items: [
          { type: 'figure', prompt: '두 회로를 보고 기호와 선으로 그려 보세요. 전기가 흐르는 길도 화살표로 표시하세요.', tool: 'circuit', options: { grid: [3, 2] }, figures: [
            { state: LOOP32({ 'h0-0': 'bulb' }), caption: '켜지는 회로' }, { state: LOOP32({ 'h0-0': 'bulb', 'h1-1': null }), caption: '켜지지 않는 회로' }], answer: '켜지는 회로: 끊김 없는 선과 화살표, 켜지지 않는 회로: 끊긴 칸 표시' },
          { type: 'choice', prompt: '원 안에 ×로 그리는 부품에 ○ 하세요.', options: ['전지', '전구', '스위치'], answer: '전구' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '전지의 긴 선은 ___극을 나타내요.', answer: '(+)' },
          { type: 'short', prompt: '불이 켜지는 회로와 켜지지 않는 회로의 차이를 회로도로 설명하세요.', answer: '켜지는 회로는 선이 끊김 없이 이어졌고, 켜지지 않는 회로는 선이 끊겨 전기의 길이 완성되지 않았다.' },
        ],
        easy: [
          { type: 'choice', prompt: '전지 기호에 ○ 하세요.', options: ['긴 선과 짧은 선 한 쌍', '원 안에 ×'], answer: '긴 선과 짧은 선 한 쌍' },
          { type: 'choice', prompt: '켜지는 회로는 선이?', options: ['끊김 없이 이어졌어요', '끊겼어요'], answer: '끊김 없이 이어졌어요' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '전구 기호는 원 안에 ___예요.', answer: '×' },
          { type: 'draw', prompt: '전지와 전구를 선으로 이은 회로도를 그려 보세요.' },
        ],
      },
      diff: {
        easy: '켜진 전구 수 글자가 보이고, 빈칸이 하나인 회로판부터 시작해요.',
        base: '회로도를 보고 판의 빈칸을 스스로 찾아 이어요.',
        challenge: '글자 없이 빛으로 확인하며, 전구가 두 개인 회로도도 판에 꾸며요.',
      },
      teacherNotes: '기호는 교과서 표기를 따른다. 전지는 긴 선이 (+)극, 짧은 선이 (−)극이다. 자주 보이는 어려움: ① 선이 끊겼는데 켜진다고 적는다 → 끊긴 곳에 ×를 표시하게 한다. ② 전지의 극 표시를 빠뜨린다 → 긴 선과 짧은 선을 구분해 그린다. ③ 화살표를 먼저 그린다 → 길이 완성된 뒤 방향을 표시한다.',
    }),

    // ───────────────────────── 4차시 (core) ─────────────────────────
    L(4, {
      title: '전지·전구·전선을 이어 불 켜고 안 켜지는 경우와 견주기',
      objective: '전지·전구·전선을 직접 이어 전구에 불을 켜고, 켜지지 않는 경우와 견주어 기록하며 전기 안전과 전구 규격을 지켜 실험할 수 있다.',
      standards: S1,
      safety: SAFE_E.concat(['전구에 적힌 전압(V) 규격을 확인하고, 규격보다 많은 전지를 이어 전구를 상하게 하지 않아요.']),
      ill: 'three children building a small circuit with a battery holder, a bulb socket and clip wires on a tray, one bulb glowing and one dark',
      scene: SC('내가 꾸민 회로', [{ motif: 'cloud', x: 110, y: 50 }, { motif: 'bird', x: 380, y: 66 }, { motif: 'hills', y: 230, colors: ['mint', 'buttercup', 'lavender'] }]),
      intro: ['"전구 하나, 전지 하나, 전선 두 가닥으로 불을 켜 볼 거예요. 먼저 확인해야 할 것은 뭘까요?" 전구에 적힌 규격(V)과 전지의 전압이 맞는지 보는 것을 안내하고, 규격을 확인하지 않고 전지를 여러 개 이으면 전구가 망가질 수 있다고 알린다. 켜진 경우와 안 켜진 경우를 모두 기록해야 비교할 수 있다고 말한다.', '전구에 불을 켜기 전에 확인할 것은 무엇이고, 켜지지 않으면 무엇을 살펴볼까요?'],
      acts: [
        {
          title: '실험 차례와 점검 놓기', tool: 'story',
          task: '불 켜기 실험의 차례 카드를 순서대로 놓아요.',
          teacher: '"전구 규격 확인은 언제 해야 하나요? 켜지지 않으면 무엇부터 다시 보나요?" 확인을 맨 앞에 두게 한다. 켜지지 않는 경우에는 전선이 헐거운 곳이 없는지 접점부터 본다.',
          items: [
            { prompt: '불 켜기 실험의 차례대로 카드를 놓으세요.',
              toolOptions: { mode: 'order', slots: ['첫째', '둘째', '셋째', '넷째'], cards: ['전구와 전지의 규격을 확인해요', '전지·전구·전선을 이어 회로를 만들어요', '전구에 불이 켜지는지 관찰해요', '결과를 기록하고 전지를 빼요'] },
              target: { order: ['전구와 전지의 규격을 확인해요', '전지·전구·전선을 이어 회로를 만들어요', '전구에 불이 켜지는지 관찰해요', '결과를 기록하고 전지를 빼요'] }, difficulty: 0.2 },
            { prompt: '전구가 켜지지 않을 때 확인할 차례를 놓으세요.',
              toolOptions: { mode: 'order', slots: ['첫째', '둘째', '셋째'], cards: ['전지 끼우개의 접촉을 살펴요', '전선의 집게가 헐거운지 살펴요', '전구가 소켓에 잘 끼워졌는지 살펴요'] },
              target: { order: ['전지 끼우개의 접촉을 살펴요', '전선의 집게가 헐거운지 살펴요', '전구가 소켓에 잘 끼워졌는지 살펴요'] }, difficulty: 0.25 },
            { prompt: '실험을 마치고 정리하는 차례를 놓으세요.',
              toolOptions: { mode: 'order', slots: ['첫째', '둘째', '셋째'], cards: ['전지를 끼우개에서 빼요', '전선을 풀어 감아서 정리해요', '손을 씻고 기록표를 내요'] },
              target: { order: ['전지를 끼우개에서 빼요', '전선을 풀어 감아서 정리해요', '손을 씻고 기록표를 내요'] }, difficulty: 0.2 },
          ],
        },
        {
          title: '빈 회로판에 불이 켜지는 회로 꾸미기', tool: 'circuit', levels: CLV, options: { grid: [3, 2], lock: false },
          task: '조각함에서 전지·전구·도선을 골라 불이 켜지는 회로를 처음부터 꾸며요. 켜졌는지는 확인한 뒤에 보여요.',
          teacher: '"전구가 켜지지 않았다면 어디를 먼저 고쳐 볼까요?" 한 군데씩 고친 뒤 다시 확인하게 한다. 전지를 놓지 않고 전구와 도선만 이은 학생에게는 "전기를 내보내는 부품이 있나요?"를 묻는다.',
          items: [
            { prompt: '빈 회로판에 전지 한 개, 전구 한 개, 도선을 놓아 불이 켜지게 해 보세요.', state: { parts: {} }, target: { lit: 'all', bulbs: 1, batteries: 1 }, difficulty: 0.3, reveal: 'after-check',
              conclude: '전지·전구·도선을 한 바퀴 이으면 전구에 불이 켜져요.' },
            { prompt: '스위치를 하나 넣어 스위치로 켜고 끌 수 있는 회로를 만들어 보세요.', state: { parts: {} }, target: { lit: 'all', switch: 'closed' }, difficulty: 0.35, reveal: 'after-check' },
            { prompt: '아래쪽에 전지를 두고 전구를 윗줄에 놓아 불이 켜지는 회로를 완성해 보세요.', toolOptions: { grid: [4, 3] }, state: { parts: { 'h1-2': 'bat+' } }, target: { lit: 'all', bulbs: 1 }, difficulty: 0.3, reveal: 'after-check' },
          ],
        },
        {
          title: '규격과 기록 점검하기', tool: 'mindmap',
          task: '실험 기록과 안전 점검 카드를 읽고 알맞은 것을 골라요.',
          teacher: '"전구 규격을 확인하지 않고 전지를 여러 개 이으면 어떻게 될까요?" 전구가 너무 밝아지다 망가질 수 있다는 것을 짚는다. 기록에 켜지지 않은 경우를 빼먹은 학생에게는 "비교하려면 어떤 경우가 더 필요하죠?"를 묻는다.',
          items: [
            { prompt: '실험 전에 확인할 것만 바구니에 담으세요.',
              toolOptions: { mode: 'pick', topic: '실험 전', basket: '확인할 것', cards: [{ id: 'a', text: '전구에 적힌 규격(V)' }, { id: 'b', text: '전선 집게가 헐겁지 않은지' }, { id: 'c', text: '전선 색깔', why: '전선 색은 불이 켜지는 것과 상관없어요.' }, { id: 'd', text: '전지를 일부러 여러 개 이어 보기', why: '규격을 확인하지 않고 전지를 많이 이으면 전구가 망가질 수 있어요.' }] },
              target: { pick: ['a', 'b'] }, difficulty: 0.2 },
            { prompt: '기록 카드를 켜진 경우와 켜지지 않은 경우로 나누세요.',
              toolOptions: { mode: 'sort', topic: '실험 기록', slots: ['켜진 경우', '켜지지 않은 경우'], cards: ['전선 두 가닥을 모두 이었어요', '전선 한 가닥만 이었어요', '전구가 소켓에 잘 끼워졌어요', '전구가 소켓에 헐겁게 끼워졌어요'] },
              target: { sort: { '켜진 경우': ['전선 두 가닥을 모두 이었어요', '전구가 소켓에 잘 끼워졌어요'], '켜지지 않은 경우': ['전선 한 가닥만 이었어요', '전구가 소켓에 헐겁게 끼워졌어요'] } }, difficulty: 0.25 },
            { prompt: '안전 약속을 지키는 행동만 고르세요.',
              toolOptions: { mode: 'pick', topic: '안전', basket: '지키는 행동', cards: [{ id: 'a', text: '실험이 끝나면 전지를 빼요' }, { id: 'b', text: '뜨거워진 전선은 만지지 않아요' }, { id: 'c', text: '교실 콘센트에 전선을 꽂아 봐요', why: '콘센트 전기는 매우 위험해요. 실험에는 건전지만 써요.' }, { id: 'd', text: '젖은 손으로 전지를 만져요', why: '젖은 손으로는 전기 제품을 만지지 않아요.' }] },
              target: { pick: ['a', 'b'] }, difficulty: 0.15 },
          ],
        },
      ],
      wrap: '"켜진 경우와 켜지지 않은 경우를 둘 다 기록하면 무엇이 좋은가요?" 두 경우를 견주어 불이 켜지는 조건을 말하게 한다. 출구 3번을 틀린 학생에게는 전구 규격을 확인하는 이유를 그림 카드로 다시 읽어 준다.',
      exit: [
        { type: 'tool', tool: 'circuit', options: { grid: [3, 2], lock: false }, state: { parts: {} }, prompt: '전지·전구·도선으로 불이 켜지는 회로를 꾸미세요.', target: { lit: 'all' }, difficulty: 0.25 },
        { type: 'choice', prompt: '전구가 켜지지 않을 때 가장 먼저 살펴볼 것은 무엇인가요?', options: ['이어진 곳이 헐겁거나 끊겼는지', '교실이 밝은지'], answer: 0, difficulty: 0.2, explain: '전기의 길이 끊긴 곳이 있는지 먼저 살펴요.' },
        { type: 'choice', prompt: '전구 규격을 확인하지 않고 전지를 여러 개 이으면 어떻게 될 수 있나요?', options: ['전구가 상할 수 있어요', '전구가 더 오래 가요'], answer: 0, difficulty: 0.25, explain: '전구가 견딜 수 있는 것보다 큰 전기가 흘러 상할 수 있어요.' },
      ],
      ws: {
        title: '불 켜기 실험 기록',
        note: '켜진 경우와 켜지지 않은 경우를 모두 쓰고 안전 약속을 지켰는지 ✔ 하세요.',
        items: [
          { type: 'table', prompt: '실험한 회로를 기록하세요.', columns: ['이은 방법', '켜졌나요? (○, ×)', '그렇게 생각한 까닭'], cells: [['전선 두 가닥을 모두 이었다', '', ''], ['전선 한 가닥만 이었다', '', ''], ['전구를 소켓에 헐겁게 끼웠다', '', '']], answer: '○ 길이 이어져서, × 돌아오는 길이 없어서, × 접촉이 끊겨서' },
          { type: 'check', prompt: '지킨 약속에 ✔ 하세요.', options: ['전구 규격을 확인했어요', '콘센트를 쓰지 않았어요', '뜨거운 전선을 만지지 않았어요', '실험 뒤 전지를 뺐어요'] },
          { type: 'choice', prompt: '전구가 켜지지 않을 때 가장 먼저 해 볼 것에 ○ 하세요.', options: ['이은 곳을 살펴 끊긴 곳 찾기', '전지를 더 많이 잇기'], answer: '이은 곳을 살펴 끊긴 곳 찾기' },
          { type: 'short', prompt: '켜지는 회로와 켜지지 않는 회로의 차이를 한 문장으로 쓰세요.', answer: '켜지는 회로는 전기의 길이 끊김 없이 이어졌고 켜지지 않는 회로는 길이 끊겼다.' },
        ],
        easy: [
          { type: 'table', prompt: '켜졌나요? ○, × 하세요.', columns: ['이은 방법', '켜졌나요?'], cells: [['두 가닥을 모두 이었다', ''], ['한 가닥만 이었다', '']], answer: '○, ×' },
          { type: 'check', prompt: '지킨 약속에 ✔ 하세요.', options: ['콘센트를 쓰지 않았어요', '실험 뒤 전지를 뺐어요'] },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '전구가 켜지지 않으면 끊긴 곳을 ___.', answer: '찾아요' },
          { type: 'draw', prompt: '내가 꾸민 회로를 그리고 켜졌는지 표시하세요.' },
        ],
      },
      diff: {
        easy: '켜진 전구 수가 글자로 보이고, 실험 차례 카드가 3장이에요.',
        base: '글자 없이 빛으로 켜졌는지 판단하고 빈 판에서 회로를 만들어요.',
        challenge: '전지 위치가 정해진 채 부품을 골라 스스로 회로를 꾸미고, 근거 없는 카드가 더 섞여요.',
      },
      teacherNotes: '준비물(모둠): 건전지(1.5V) 1~2개와 끼우개, 꼬마전구(규격 확인)와 소켓, 집게 전선, 스위치. 교실 콘센트는 쓰지 않는다. 자주 보이는 어려움: ① 전구 규격을 보지 않고 전지를 이어 본다 → 전구에 적힌 V를 먼저 읽는다. ② 전선 접점이 헐거워 안 켜지는데 전구 탓을 한다 → 접점부터 살핀다. ③ 안 켜진 경우를 기록하지 않는다 → 두 경우를 나란히 표에 적어 견준다.',
    }),

    // ───────────────────────── 5차시 (core) ─────────────────────────
    L(5, {
      title: '전지 한 개와 전지 두 개를 한 줄로 이은 회로의 밝기 견주기',
      objective: '전지를 한 개 이은 회로와 두 개를 직렬로 이은 회로에서 전구의 밝기를 견주고, 밝기의 차이를 이은 전지의 개수와 이어 설명할 수 있다.',
      standards: S2,
      safety: SAFE_E,
      ill: 'two paper batteries lined up end to end next to a single battery, a bulb glowing brighter on the two-battery side, with children comparing',
      scene: SC('전지가 두 개면?', [{ motif: 'sun', x: 410, y: 56, s: 0.7 }, { motif: 'cloud', x: 100, y: 52 }, { motif: 'hills', y: 230, colors: ['peach', 'sky', 'mint'] }]),
      intro: ['"손전등에는 전지가 두 개, 세 개 들어가는 것도 있어요. 왜 여러 개를 넣을까요?" 손전등의 전지를 꺼내 한 줄로 이어져 있는 모습을 보여 준다. 전지를 아무 방향으로나 이어도 밝기가 같을 것이라고 생각하는 학생이 있어 이를 오늘의 확인 거리로 남긴다.', '전지를 한 줄로 이으면 전구는 더 밝아질까요? 전지의 방향은 상관없을까요?'],
      acts: [
        {
          title: '전지를 한 줄로 이어 전구 켜기', tool: 'circuit', levels: CLV, options: { grid: [4, 3], stock: { bulb: 1, battery: 2, switch: 0, coil: 0 } },
          task: '조각함에서 전지를 골라 칸에 놓아 전지 두 개를 한 줄로 이어요. 전지를 다시 누르면 방향이 바뀌어요.',
          teacher: '"한 전지의 (+)극이 다른 전지의 (−)극과 이어졌나요?" 전지를 마주 보게 이어 전구가 꺼지는 학생에게는 "두 전지가 서로 밀고 있어요. 방향을 맞춰 봐요"라고 짚는다.',
          items: [
            { prompt: '전구가 있는 회로에 전지를 한 줄로 두 개 이어 전구를 켜 보세요.', state: { parts: { 'h1-0': 'bulb' } }, target: { lit: 'all', batteries: 2, batteryLink: 'series' }, difficulty: 0.3,
              predict: { q: '전지를 한 줄로 두 개 이으면 전구의 밝기는?', options: ['더 밝아진다', '더 어두워진다', '같다'], answer: 0 },
              conclude: '전지를 방향을 맞춰 한 줄로 이으면 전구가 더 밝아져요.' },
            { prompt: '전구를 아래쪽에 두었어요. 전지 두 개를 직렬로 이어 전구를 켜 보세요.', state: { parts: { 'h1-2': 'bulb' } }, target: { lit: 'all', batteries: 2, batteryLink: 'series' }, difficulty: 0.35 },
            { prompt: '전지 한 개가 이미 있어요. 전지를 하나 더 이어 직렬연결로 만들어 보세요.', state: { parts: { 'v0-0': 'bat-', 'h1-0': 'bulb', 'h0-0': 'wire', 'h2-0': 'wire', 'v3-0': 'wire', 'v3-1': 'wire', 'h2-2': 'wire', 'h1-2': 'wire', 'h0-2': 'wire' } }, target: { lit: 'all', batteries: 2, batteryLink: 'series' }, difficulty: 0.35 },
          ],
        },
        {
          title: '전지의 개수와 방향이 밝기에 주는 영향 읽기', tool: 'circuit', levels: NLV, options: { grid: [4, 3] },
          task: '회로 그림을 보고 알맞은 답을 골라요. 그림은 움직이지 않아요.',
          teacher: '"전지를 한 줄로 이었을 때와 서로 마주 보게 이었을 때, 전기는 어디로 가나요?" 방향이 반대면 두 전지의 힘이 서로 막아 전구가 켜지지 않을 수 있음을 짚는다. 전지 개수가 많을수록 밝다는 말을 "방향을 맞춘 한 줄 연결일 때"로 정확히 쓰게 한다.',
          items: [
            { prompt: '전지 한 개 회로에 전지를 한 줄로 하나 더 이으면 전구는 어떻게 될까요?', toolOptions: { readOnly: true, glow: false, ask: { q: '전구의 밝기는?', choices: ['더 밝아져요', '더 어두워져요', '같아요'], why: [null, '전지를 한 줄로 이으면 더 센 전기가 흘러 밝아져요.', '전지를 한 줄로 이으면 전구에 걸리는 힘이 커져요.'] } },
              state: LOOP43({ 'h1-0': 'bulb' }), target: { pick: 0 }, difficulty: 0.2 },
            { prompt: '전지 두 개를 서로 마주 보게(방향을 반대로) 이었어요. 전구는 어떻게 될까요?', toolOptions: { readOnly: true, glow: false, ask: { q: '전구는 어떻게 될까요?', choices: ['매우 밝게 켜져요', '켜지지 않아요'], why: ['두 전지가 서로 막고 있어 전기가 흐르지 못해요.', null] } },
              state: LOOP43({ 'h1-0': 'bulb', 'v0-0': 'bat-', 'v0-1': 'bat+' }), target: { pick: 1 }, difficulty: 0.35 },
            { prompt: '전지 두 개를 방향을 맞춰 한 줄로 이은 회로예요. 전구는 어떻게 될까요?', toolOptions: { readOnly: true, glow: false, ask: { q: '전구는 어떻게 될까요?', choices: ['켜지지 않아요', '전지 한 개일 때보다 밝게 켜져요'], why: ['두 전지의 방향이 같아 힘이 합쳐져요.', null] } },
              state: LOOP43({ 'h1-0': 'bulb', 'v0-1': 'bat-' }), target: { pick: 1 }, difficulty: 0.3 },
          ],
        },
        {
          title: '직렬연결의 특징 고르기', tool: 'mindmap',
          task: '카드를 읽고 전지의 직렬연결에 알맞은 설명을 골라요.',
          teacher: '"전지를 직렬로 이었다는 건 어떻게 이은 것일까요?" 한 전지의 (+)극과 다른 전지의 (−)극을 이어 한 줄로 만든다고 말하게 한다. 방향을 가리지 않아도 된다는 카드에는 앞 활동 그림을 떠올리게 한다.',
          items: [
            { prompt: '전지 직렬연결에 대한 알맞은 설명만 고르세요.',
              toolOptions: { mode: 'pick', topic: '직렬연결', basket: '알맞은 설명', cards: [{ id: 'a', text: '한 전지의 (+)극을 다른 전지의 (−)극에 이어요' }, { id: 'b', text: '전지 개수가 늘어 전구가 더 밝아져요' }, { id: 'c', text: '전지를 아무 방향으로 이어도 밝기가 같아요', why: '방향이 반대이면 전구가 켜지지 않을 수도 있어요.' }, { id: 'd', text: '전지를 많이 이을수록 불이 더 오래 켜져요', why: '밝기가 달라지는 것과 오래 켜지는 것은 달라요.' }] },
              target: { pick: ['a', 'b'] }, difficulty: 0.2 },
            { prompt: '전지를 이은 모습을 알맞은 가지에 나누세요.',
              toolOptions: { mode: 'sort', topic: '전지 잇기', slots: ['전구가 켜져요', '전구가 안 켜져요'], cards: ['(+)극과 (−)극을 이어 한 줄로 만들어요', '(+)극과 (+)극이 마주 보게 이어요', '전지 한 개만 이어요', '두 전지를 방향을 맞춰 이어요'] },
              target: { sort: { '전구가 켜져요': ['(+)극과 (−)극을 이어 한 줄로 만들어요', '전지 한 개만 이어요', '두 전지를 방향을 맞춰 이어요'], '전구가 안 켜져요': ['(+)극과 (+)극이 마주 보게 이어요'] } }, difficulty: 0.3 },
            { prompt: '밝기를 비교한 말을 알맞게 이으세요.',
              toolOptions: { mode: 'match', topic: '밝기 비교', slots: [{ id: 'c1', label: '전지 한 개' }, { id: 'c2', label: '전지 두 개 직렬' }], cards: [{ id: '보통', text: '전구가 보통 밝기로 켜져요' }, { id: '밝게', text: '전구가 더 밝게 켜져요' }, { id: '꺼짐', text: '전구가 꺼져요', why: '방향을 맞춰 이으면 꺼지지 않아요.' }] },
              target: { match: { c1: '보통', c2: '밝게' } }, difficulty: 0.15 },
          ],
        },
      ],
      wrap: '"전지를 한 줄로 이어 밝아지려면 무엇을 지켜야 하나요?" 전지의 방향을 맞춘다는 것을 말하게 한다. 출구 3번을 틀린 학생에게는 두 전지를 마주 보게 놓은 그림을 다시 보여 주고 (+)극의 방향을 화살표로 표시하게 한다.',
      exit: [
        { type: 'tool', tool: 'circuit', options: { grid: [4, 3], stock: { bulb: 1, battery: 2, switch: 0, coil: 0 } }, state: { parts: { 'h1-2': 'bulb' } }, prompt: '전지를 두 개 한 줄로 이어 전구를 켜세요.', target: { lit: 'all', batteries: 2, batteryLink: 'series' }, difficulty: 0.3 },
        { type: 'choice', prompt: '전지 두 개를 방향을 맞춰 한 줄로 이으면 전구는 전지 한 개일 때보다 어떻게 되나요?', options: ['더 밝아져요', '더 어두워져요'], answer: 0, difficulty: 0.2, explain: '전지의 힘이 합쳐져 전구가 더 밝아져요.' },
        { type: 'choice', prompt: '전지를 서로 마주 보게(방향을 반대로) 이으면 어떻게 되나요?', options: ['전구가 켜지지 않을 수 있어요', '전구가 더 밝아져요'], answer: 0, difficulty: 0.3, explain: '두 전지가 서로 막아 전기가 흐르지 못할 수 있어요.' },
      ],
      ws: {
        title: '전지 개수와 밝기',
        note: '전지를 한 줄로 이을 때는 한 전지의 (+)극과 다른 전지의 (−)극을 이어요.',
        items: [
          { type: 'figure', prompt: '두 회로를 보고 전지가 몇 개 이어졌는지 쓰세요.', tool: 'circuit', options: { grid: [4, 3] }, figures: [
            { state: LOOP43({ 'h1-0': 'bulb' }), caption: '전지 ___개' }, { state: LOOP43({ 'h1-0': 'bulb', 'v0-1': 'bat-' }), caption: '전지 ___개' }], answer: '1개, 2개' },
          { type: 'table', prompt: '전지의 개수와 밝기를 정리하세요.', columns: ['전지의 수', '전구의 밝기'], cells: [['1개', ''], ['2개(직렬)', '']], answer: '보통, 더 밝다' },
          { type: 'choice', prompt: '두 전지를 마주 보게 이으면?', options: ['켜지지 않을 수 있어요', '더 밝아져요'], answer: '켜지지 않을 수 있어요' },
          { type: 'short', prompt: '전지를 직렬로 이을 때 지켜야 할 것 한 가지를 쓰세요.', answer: '한 전지의 (+)극과 다른 전지의 (−)극을 이어 방향을 맞춘다.' },
        ],
        easy: [
          { type: 'choice', prompt: '전지를 한 줄로 이으면 전구는?', options: ['더 밝아져요', '꺼져요'], answer: '더 밝아져요' },
          { type: 'choice', prompt: '전지를 이을 때 방향은?', options: ['맞춰야 해요', '상관없어요'], answer: '맞춰야 해요' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '전지를 한 줄로 이으면 ___연결이라고 해요.', answer: '직렬' },
          { type: 'draw', prompt: '전지 두 개를 한 줄로 이은 모습을 그려 보세요.' },
        ],
      },
      diff: {
        easy: '켜진 전구 수가 글자로 보이고, 전지를 놓는 칸이 정해져 있어요.',
        base: '전지의 방향을 스스로 맞추며 두 개를 이어요.',
        challenge: '글자 없이 빛만 보고 판단하고, 전지 하나가 이미 고정된 판에서 하나를 더 이어요.',
      },
      teacherNotes: '준비물(모둠): 건전지 2개와 끼우개, 꼬마전구와 소켓, 집게 전선. 규격에 맞는 전구를 쓴다. 자주 보이는 어려움: ① 전지를 아무 방향으로나 이어도 같다고 생각한다 → 마주 보게 이으면 서로 막는다. ② 전지가 많을수록 오래 켜진다고 한다 → 밝기와 오래 가는 것은 다르다. ③ 직렬을 "나란히 놓기"로 이해한다 → (+)극과 (−)극이 이어진 한 줄이다.',
    }),

    // ───────────────────────── 6차시 (core) ─────────────────────────
    L(6, {
      title: '전지 한 개와 두 개 회로를 나란히 그려 밝기를 표로 나타내기',
      objective: '전지 한 개 회로와 두 개 직렬 회로를 나란히 그려 전지의 개수와 극을 표시하고, 밝기의 차이를 표와 기호로 나타내 설명할 수 있다.',
      standards: S2,
      safety: SAFE_E,
      ill: 'two paper circuit diagrams side by side one with one battery and one with two, plus and minus marks, and a small star rating table for brightness',
      scene: SC('두 회로를 나란히', [{ motif: 'star', x: 90, y: 58 }, { motif: 'star', x: 390, y: 68, s: 0.8 }, { motif: 'hills', y: 230, colors: ['lavender', 'mint', 'peach'] }]),
      intro: ['"전지가 한 개인 회로와 두 개인 회로를 한 장에 나란히 그리면 무엇이 좋을까요?" 그림만 있고 전지의 극 표시가 없는 회로도를 보여 주며 이어진 방향을 알 수 없는 문제를 짚는다. 오늘은 전지의 개수와 극을 표시하고 밝기를 표로 정리한다.', '두 회로를 견주는 표에는 무엇을 꼭 적어야 할까요?'],
      acts: [
        {
          title: '두 회로의 관찰을 표로 나누기', tool: 'mindmap',
          task: '관찰 문장을 읽고 전지 한 개 회로와 전지 두 개 직렬 회로 칸에 나누어요.',
          teacher: '"이 문장은 전지가 한 개인 회로를 말하나요, 두 개인 회로를 말하나요?" 같은 항목(전지 수, 극, 밝기)을 두 칸에 나란히 두게 한다. 전지의 극 표시가 빠진 문장에는 "방향을 알 수 있나요?"를 묻는다.',
          items: [
            { prompt: '관찰 문장을 알맞은 회로 칸으로 나누세요.',
              toolOptions: { mode: 'sort', topic: '두 회로 비교', slots: ['전지 한 개', '전지 두 개(직렬)'], cards: ['전구가 보통 밝기예요', '전구가 더 밝아요', '(+)극과 (−)극이 한 줄로 이어졌어요', '전지는 하나뿐이에요'] },
              target: { sort: { '전지 한 개': ['전구가 보통 밝기예요', '전지는 하나뿐이에요'], '전지 두 개(직렬)': ['전구가 더 밝아요', '(+)극과 (−)극이 한 줄로 이어졌어요'] } }, difficulty: 0.2 },
            { prompt: '비교하는 표에 꼭 넣어야 할 항목만 골라 담으세요.',
              toolOptions: { mode: 'pick', topic: '표의 항목', basket: '꼭 넣을 항목', cards: [{ id: 'a', text: '전지의 개수' }, { id: 'b', text: '전지의 극 방향' }, { id: 'c', text: '전구의 밝기' }, { id: 'd', text: '전선의 색깔', why: '전선 색은 밝기와 상관이 없어요.' }] },
              target: { pick: ['a', 'b', 'c'] }, difficulty: 0.2 },
            { prompt: '표를 읽고 알 수 있는 내용을 알맞은 가지로 나누세요.',
              toolOptions: { mode: 'sort', topic: '표 읽기', slots: ['알 수 있어요', '알 수 없어요'], cards: ['전지가 많으면 더 밝아졌어요', '전지의 개수가 달랐어요', '전지가 얼마나 오래 가는지', '전구가 몇 시간 켜졌는지'] },
              target: { sort: { '알 수 있어요': ['전지가 많으면 더 밝아졌어요', '전지의 개수가 달랐어요'], '알 수 없어요': ['전지가 얼마나 오래 가는지', '전구가 몇 시간 켜졌는지'] } }, difficulty: 0.3 },
          ],
        },
        {
          title: '밝기를 단계 그래프로 나타내기', tool: 'chart', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          task: '밝기를 단계(1~5)로 매긴 표를 보고 막대그래프를 완성하거나 읽어요. 단계는 실험 예시 값이에요.',
          teacher: '"밝기를 숫자로 나타내면 어떤 점이 편해요?" 눈으로 본 밝기를 단계로 매긴 값이어서 사람마다 다를 수 있다는 점도 짚는다. 가로축에 전지의 수, 세로축에 밝기 단계를 쓰게 한다.',
          items: [
            { prompt: '전지 개수에 따른 밝기 단계(예시 값) 표를 보고 막대그래프를 완성하세요.',
              toolOptions: { type: 'bar', title: '전지 수와 전구 밝기(예시)', data: [['전지 1개', 2], ['전지 2개', 4]], unit: '단계', xLabel: '전지 수', yLabel: '밝기', scale: 1, max: 5, given: [0] },
              target: { build: true }, difficulty: 0.2 },
            { prompt: '다른 모둠의 밝기 단계(예시 값)를 막대그래프로 나타내세요.',
              toolOptions: { type: 'bar', title: '다른 모둠 기록(예시)', data: [['전지 1개', 1], ['전지 2개', 3], ['전지 3개', 5]], unit: '단계', xLabel: '전지 수', yLabel: '밝기', scale: 1, max: 5, given: [0] },
              target: { build: true }, difficulty: 0.3 },
            { prompt: '그래프를 보고 가장 밝았던 회로를 고르세요.',
              toolOptions: { type: 'bar', mode: 'read', title: '세 번째 모둠(예시)', data: [['전지 1개', 2], ['전지 2개', 4], ['전지 3개', 5]], unit: '단계', xLabel: '전지 수', scale: 1, max: 5, choices: ['전지 1개', '전지 2개', '전지 3개'], question: '가장 밝았던 회로는?', why: ['전지 1개 막대가 가장 낮아요.', '전지 2개 막대는 전지 3개보다 낮아요.', ''], explain: '전지 3개 막대가 가장 높아요. 직렬로 이은 전지가 많을수록 밝아요.' },
              target: { pick: 2 }, difficulty: 0.2 },
          ],
        },
        {
          title: '회로도의 전지 극 표시 점검하기', tool: 'circuit', levels: CLV, options: { grid: [4, 3], lock: true, stock: { bulb: 2, battery: 2, switch: 0, coil: 0 } },
          task: '회로도의 전지 극 표시를 따라 판에서 전지를 이어요. 연보라 바탕의 부품은 고정이에요.',
          teacher: '"회로도에서 전지의 (+)극이 어느 쪽인가요? 판에서도 같은 방향이 되도록 이어 볼까요?" 방향이 반대이면 전구가 켜지지 않는 것을 결과로 확인하게 한다.',
          items: [
            { prompt: '전지 한 개가 있는 회로도예요. 판의 빈칸을 이어 전구에 불을 켜 보세요.', state: LOOP43({ 'h1-0': 'bulb', 'h2-0': null }), target: { lit: 'all', batteries: 1 }, difficulty: 0.15 },
            { prompt: '전지를 한 개 더 이은 회로도예요. 전지 두 개를 직렬로 이어 전구를 켜 보세요.', state: { parts: { 'h1-0': 'bulb' } }, toolOptions: { lock: false }, target: { lit: 'all', batteries: 2, batteryLink: 'series' }, difficulty: 0.3 },
            { prompt: '전지 한 개와 전구 두 개를 한 줄로 이은 회로도예요. 빈칸을 이어 불을 켜 보세요.', state: LOOP43({ 'h0-0': 'bulb', 'h1-0': 'bulb', 'h2-0': null }), target: { lit: 'all', bulbs: 2, connection: 'series' }, difficulty: 0.3,
              conclude: '전지의 극 방향과 개수를 회로도에 표시하면 회로를 똑같이 다시 만들 수 있어요.' },
          ],
        },
      ],
      wrap: '"전지가 많아질수록 밝기가 어떻게 변했나요? 표에서 그 증거를 찾아봐요." 표의 두 칸을 견주어 말하게 한다. 출구 3번에서 극 표시를 빠뜨린 학생은 오늘 그린 회로도에 (+), (−)를 다시 써 넣게 한다.',
      exit: [
        { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '두 회로 비교', slots: ['전지 한 개', '전지 두 개(직렬)'], cards: ['보통 밝기', '더 밝아요'] }, prompt: '관찰을 알맞은 칸에 놓으세요.', target: { sort: { '전지 한 개': ['보통 밝기'], '전지 두 개(직렬)': ['더 밝아요'] } }, difficulty: 0.2 },
        { type: 'choice', prompt: '두 회로를 견주는 표에 꼭 넣을 것에 가까운 것은 무엇인가요?', options: ['전지의 개수와 극', '전선의 색'], answer: 0, difficulty: 0.2, explain: '밝기를 견주려면 전지의 개수와 이은 방향을 알아야 해요.' },
        { type: 'choice', prompt: '그래프에서 전지 수가 늘면 막대는 어떻게 변했나요?', options: ['더 높아졌어요', '더 낮아졌어요'], answer: 0, difficulty: 0.25, explain: '직렬로 이은 전지가 많을수록 밝기 단계가 높아졌어요.' },
      ],
      ws: {
        title: '두 회로 비교 표',
        note: '전지의 개수, 극의 방향, 밝기를 같은 항목끼리 나란히 써요. 단계 값은 예시예요.',
        items: [
          { type: 'figure', prompt: '두 회로를 보고 전지 수와 밝기를 비교해 쓰세요.', tool: 'circuit', options: { grid: [4, 3] }, figures: [
            { state: LOOP43({ 'h1-0': 'bulb' }), caption: '전지 ___개' }, { state: LOOP43({ 'h1-0': 'bulb', 'v0-1': 'bat-' }), caption: '전지 ___개' }], answer: '1개, 2개' },
          { type: 'table', prompt: '표를 완성하세요.', columns: ['회로', '전지의 수', '전구의 밝기'], cells: [['가', '1개', ''], ['나', '2개(직렬)', '']], answer: '보통, 더 밝다' },
          { type: 'choice', prompt: '표에서 알 수 있는 것에 ○ 하세요.', options: ['전지가 많으면 더 밝다', '전지가 많으면 오래 간다'], answer: '전지가 많으면 더 밝다' },
          { type: 'short', prompt: '회로도에 전지의 극을 표시해야 하는 까닭을 쓰세요.', answer: '극의 방향을 알아야 전지를 어떻게 이었는지 알 수 있다.' },
        ],
        easy: [
          { type: 'table', prompt: '전지 수와 밝기를 쓰세요.', columns: ['회로', '밝기'], cells: [['전지 1개', ''], ['전지 2개', '']], answer: '보통, 더 밝다' },
          { type: 'choice', prompt: '전지가 두 개면 전구는?', options: ['더 밝아요', '더 어두워요'], answer: '더 밝아요' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '회로도에는 전지의 ___도 표시해요.', answer: '극' },
          { type: 'draw', prompt: '전지 한 개 회로와 두 개 회로를 나란히 그려 보세요.' },
        ],
      },
      diff: {
        easy: '막대 끝의 값이 보이고, 전구가 켜졌는지 글자로 바로 알 수 있어요.',
        base: '막대를 직접 올려 그래프를 완성하고 극 표시를 따라 전지를 이어요.',
        challenge: '막대가 더 많이 비어 있고 전구가 두 개인 회로도도 판에 꾸며요.',
      },
      teacherNotes: '밝기 단계는 눈으로 매긴 값이라 모둠마다 달라도 괜찮고 모두 예시이다. 자주 보이는 어려움: ① 표에 전지 수를 적지 않고 밝기만 적는다 → 비교의 조건과 결과를 함께 적는다. ② 회로도에 극을 표시하지 않는다 → (+), (−)를 꼭 쓴다. ③ 단계 값을 정확한 측정값으로 읽는다 → 눈대중 단계임을 알려 준다.',
    }),

    // ───────────────────────── 7차시 (core) ─────────────────────────
    L(7, {
      title: '전지 한 개와 두 개를 이어 전구 밝기를 견주고 다른 부품으로 확인하기',
      objective: '전지의 개수만 다르게 한 두 회로를 꾸며 전구의 밝기를 견주고, 같게 해야 할 것과 다르게 할 것을 구분해 결과를 기록하고 다른 부품에서도 확인할 수 있다.',
      standards: S2,
      safety: SAFE_E.concat(['전지를 오래 연결해 두면 전지와 전선이 뜨거워질 수 있어 확인이 끝나면 곧바로 풀어요.']),
      ill: 'a tray with two small circuits one with a single battery and one with two batteries lined up, a bulb and a small paper motor spinning on the side',
      scene: SC('전지만 다르게', [{ motif: 'cloud', x: 100, y: 52 }, { motif: 'bird', x: 390, y: 68 }, { motif: 'hills', y: 230, colors: ['mint', 'sky', 'buttercup'] }]),
      intro: ['"전지만 하나 더 이었는데 전구가 달라졌다고 말하려면 무엇은 같게 해야 할까요?" 전구를 서로 다른 것으로 바꿔 쓰면 밝기 차이가 전지 때문인지 전구 때문인지 알 수 없음을 보여 준다. 오늘은 같은 전구로 전지만 다르게 하고, 다른 부품(발광다이오드·전동기)으로도 알아본다.', '밝기 차이가 전지 때문이라고 말하려면 무엇은 같게 하고 무엇은 다르게 해야 할까요?'],
      acts: [
        {
          title: '실험 차례 놓기', tool: 'story',
          task: '전지 개수를 바꿔 밝기를 견주는 실험의 차례 카드를 순서대로 놓아요.',
          teacher: '"전지 한 개 회로의 밝기를 먼저 보는 까닭은 뭘까요?" 비교할 기준을 먼저 만든다는 것을 말하게 한다. 전지를 두 개로 늘린 뒤에는 방향을 맞췄는지 확인하게 한다.',
          items: [
            { prompt: '전지 개수에 따른 밝기를 견주는 실험의 차례대로 카드를 놓으세요.',
              toolOptions: { mode: 'order', slots: ['첫째', '둘째', '셋째', '넷째'], cards: ['전지 한 개로 회로를 만들고 밝기를 봐요', '전지를 한 개 더 한 줄로 이어요', '전구의 밝기를 견주어 보아요', '결과를 표에 기록해요'] },
              target: { order: ['전지 한 개로 회로를 만들고 밝기를 봐요', '전지를 한 개 더 한 줄로 이어요', '전구의 밝기를 견주어 보아요', '결과를 표에 기록해요'] }, difficulty: 0.2 },
            { prompt: '다른 부품으로 결과를 다시 확인하는 차례를 놓으세요.',
              toolOptions: { mode: 'order', slots: ['첫째', '둘째', '셋째'], cards: ['전구를 전동기로 바꿔 이어요', '전지 한 개와 두 개로 각각 확인해요', '전동기가 도는 빠르기를 견주어요'] },
              target: { order: ['전구를 전동기로 바꿔 이어요', '전지 한 개와 두 개로 각각 확인해요', '전동기가 도는 빠르기를 견주어요'] }, difficulty: 0.25 },
            { prompt: '실험이 끝난 뒤 정리 차례를 놓으세요.',
              toolOptions: { mode: 'order', slots: ['첫째', '둘째', '셋째'], cards: ['전지를 끼우개에서 빼요', '부품과 전선을 정리해요', '손을 씻고 기록표를 모아요'] },
              target: { order: ['전지를 끼우개에서 빼요', '부품과 전선을 정리해요', '손을 씻고 기록표를 모아요'] }, difficulty: 0.2 },
          ],
        },
        {
          title: '전지 한 개와 두 개 회로 꾸미기', tool: 'circuit', levels: CLV, options: { grid: [4, 3], stock: { bulb: 1, battery: 2, switch: 0, coil: 0 } },
          task: '조각함에서 전지·전구·도선으로 두 가지 회로를 꾸며요. 켜졌는지는 확인한 뒤에 보여요.',
          teacher: '"우리 모둠 회로는 전지가 몇 개이고 밝기는 어땠나요?" 두 회로를 각각 만든 뒤 전구가 켜진 정도를 말하게 한다. 전지를 두 개 놓고 불이 안 켜지면 한 전지를 뒤집어 보게 한다.',
          items: [
            { prompt: '전지 한 개, 전구 한 개로 불이 켜지는 회로를 꾸며 보세요.', toolOptions: { stock: { bulb: 1, battery: 1, switch: 0, coil: 0 } }, state: { parts: { 'h1-0': 'bulb' } }, target: { lit: 'all', batteries: 1 }, difficulty: 0.25, reveal: 'after-check' },
            { prompt: '같은 전구에 전지 두 개를 직렬로 이어 불이 켜지는 회로를 꾸며 보세요.', state: { parts: { 'h1-0': 'bulb' } }, target: { lit: 'all', batteries: 2, batteryLink: 'series' }, difficulty: 0.35, reveal: 'after-check',
              conclude: '같은 전구에 전지만 늘렸더니 더 밝아졌으니, 밝기 차이는 전지의 개수 때문이에요.' },
            { prompt: '전지 하나가 고정된 판에서 전지를 하나 더 이어 전구를 켜 보세요.', state: { parts: { 'v0-0': 'bat-', 'h1-0': 'bulb', 'h0-0': 'wire', 'h2-0': 'wire', 'v3-0': 'wire', 'v3-1': 'wire', 'h2-2': 'wire', 'h1-2': 'wire', 'h0-2': 'wire' } }, target: { lit: 'all', batteries: 2, batteryLink: 'series' }, difficulty: 0.35 },
          ],
        },
        {
          title: '공정한 비교와 다른 부품 점검하기', tool: 'mindmap',
          task: '카드를 읽고 같게 할 것과 다르게 할 것을 나누고, 다른 부품에서의 결과도 골라요.',
          teacher: '"전구 종류를 서로 다르게 쓰면 밝기 차이를 전지 탓으로 돌릴 수 있을까요?" 같게 하는 것(전구의 종류, 전선, 연결 방법)과 다르게 하는 것(전지의 개수)을 말하게 한다. 발광다이오드는 극 방향을 맞춰 이어야 켜진다는 점을 짚는다.',
          items: [
            { prompt: '밝기를 공정하게 견주려면 같게 해야 하는 것만 고르세요.',
              toolOptions: { mode: 'pick', topic: '같게 할 것', basket: '같게 할 것', cards: [{ id: 'a', text: '전구의 종류' }, { id: 'b', text: '전선과 연결 방법' }, { id: 'c', text: '전지의 개수', why: '전지의 개수는 이 실험에서 다르게 하는 것이에요.' }, { id: 'd', text: '전구를 아무거나 바꿔 쓰기', why: '전구가 다르면 밝기 차이가 전지 때문인지 알 수 없어요.' }] },
              target: { pick: ['a', 'b'] }, difficulty: 0.25 },
            { prompt: '다른 부품으로 확인한 결과를 알맞은 가지에 나누세요.',
              toolOptions: { mode: 'sort', topic: '다른 부품', slots: ['전지 한 개', '전지 두 개(직렬)'], cards: ['전동기가 보통 빠르기로 돌아요', '전동기가 더 빠르게 돌아요', '발광다이오드가 보통 밝기예요', '발광다이오드가 더 밝아요'] },
              target: { sort: { '전지 한 개': ['전동기가 보통 빠르기로 돌아요', '발광다이오드가 보통 밝기예요'], '전지 두 개(직렬)': ['전동기가 더 빠르게 돌아요', '발광다이오드가 더 밝아요'] } }, difficulty: 0.25 },
            { prompt: '발광다이오드를 이을 때 지킬 약속만 고르세요.',
              toolOptions: { mode: 'pick', topic: '발광다이오드', basket: '지킬 약속', cards: [{ id: 'a', text: '전지의 (+)극 방향에 맞춰 이어요' }, { id: 'b', text: '켜지지 않으면 뒤집어 이어 봐요' }, { id: 'c', text: '전지를 아주 많이 이어 더 밝게 해요', why: '규격에 맞지 않으면 부품이 상할 수 있어요.' }, { id: 'd', text: '전선을 맨손으로 오래 쥐고 있어요', why: '전선이 뜨거워질 수 있어요.' }] },
              target: { pick: ['a', 'b'] }, difficulty: 0.25 },
          ],
        },
      ],
      wrap: '"밝기가 달라진 까닭이 전지 때문이라고 말하려면 무엇이 같아야 했나요?" 같은 전구·같은 연결 방법을 말하게 한다. 출구 3번을 틀린 학생에게는 전구를 바꿔 가며 비교한 상황을 상상해 어떤 점이 뒤섞이는지 말하게 한다.',
      exit: [
        { type: 'tool', tool: 'circuit', options: { grid: [4, 3], stock: { bulb: 1, battery: 2, switch: 0, coil: 0 } }, state: { parts: { 'h1-0': 'bulb' } }, prompt: '같은 전구에 전지 두 개를 직렬로 이어 켜세요.', target: { lit: 'all', batteries: 2, batteryLink: 'series' }, difficulty: 0.3 },
        { type: 'choice', prompt: '전지의 개수가 밝기에 주는 영향을 알아보려면 같게 해야 하는 것은 무엇인가요?', options: ['전구의 종류', '전지의 개수'], answer: 0, difficulty: 0.2, explain: '알아보려는 것(전지의 개수)만 다르게 하고 나머지는 같게 해야 해요.' },
        { type: 'choice', prompt: '전지를 두 개 직렬로 이으면 전동기는 어떻게 돌까요?', options: ['더 빠르게 돌아요', '더 느리게 돌아요'], answer: 0, difficulty: 0.25, explain: '더 센 전기가 흘러 전동기도 더 빠르게 돌아요.' },
      ],
      ws: {
        title: '전지 개수와 밝기 비교 기록',
        note: '같은 전구를 쓰고 전지의 개수만 다르게 해요. 안전 약속도 지켰는지 ✔ 하세요.',
        items: [
          { type: 'table', prompt: '실험 결과를 쓰세요.', columns: ['회로', '전지의 수', '전구의 밝기(예: 보통·밝음)'], cells: [['가', '1개', ''], ['나', '2개(직렬)', '']], answer: '가: 보통, 나: 더 밝음 (모둠 기록에 따라 다를 수 있음)' },
          { type: 'check', prompt: '지킨 약속에 ✔ 하세요.', options: ['같은 전구를 썼어요', '전지의 방향을 맞췄어요', '확인이 끝나면 전지를 풀었어요', '콘센트를 쓰지 않았어요'] },
          { type: 'choice', prompt: '이 실험에서 다르게 한 것에 ○ 하세요.', options: ['전지의 개수', '전구의 종류', '전선의 길이'], answer: '전지의 개수' },
          { type: 'short', prompt: '발광다이오드나 전동기로 바꿔도 같은 결과가 나왔는지 쓰세요.', answer: '전지를 직렬로 더 이으면 발광다이오드는 더 밝아지고 전동기는 더 빠르게 돈다.' },
        ],
        easy: [
          { type: 'table', prompt: '밝기를 쓰세요.', columns: ['전지 수', '밝기'], cells: [['1개', ''], ['2개', '']], answer: '보통, 더 밝음' },
          { type: 'check', prompt: '지킨 약속에 ✔ 하세요.', options: ['같은 전구를 썼어요', '전지를 풀었어요'] },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '전지만 다르게 하고 ___은 같게 해요.', answer: '전구' },
          { type: 'draw', prompt: '전지 한 개와 두 개 회로의 전구 밝기를 그려 보세요.' },
        ],
      },
      diff: {
        easy: '켜진 전구 수가 글자로 보이고, 실험 차례 카드가 3장이에요.',
        base: '두 회로를 직접 꾸며 결과를 비교하고, 같게 할 것을 스스로 골라요.',
        challenge: '글자 없이 빛으로 판단하며, 전지 하나가 고정된 판에서 직렬로 하나를 더 이어요.',
      },
      teacherNotes: '준비물(모둠): 건전지 2개와 끼우개, 같은 규격의 꼬마전구 소켓, 집게 전선, 발광다이오드나 작은 전동기(선택). 자주 보이는 어려움: ① 전구 종류가 달라져 밝기 차를 전지 탓으로 돌린다 → 같은 전구를 쓴다. ② 전지를 반대로 이어 켜지지 않는다 → (+)극과 (−)극을 이어 한 줄로 만든다. ③ 전지를 오래 연결해 둔다 → 확인 뒤 바로 푼다.',
    }),

    // ───────────────────────── 8차시 (core) ─────────────────────────
    L(8, {
      title: '전자석이 영구 자석과 다른 점과 전지로 세기 바꾸는 방법 찾기',
      objective: '전자석에 전기가 흐를 때만 자석의 성질이 생기는 것을 알고, 전지의 개수와 이은 방향이 전자석의 세기와 극에 주는 영향을 설명할 수 있다.',
      standards: S3,
      safety: SAFE_E.concat(['전자석에 전기를 오래 흐르게 하면 못과 전선이 뜨거워지니 확인할 때만 짧게 연결해요.']),
      ill: 'a paper nail wrapped with wire connected to a battery, paper clips clinging to its end, and a bar magnet lying beside it',
      scene: SC('전자석은 무엇이 다를까?', [{ motif: 'star', x: 90, y: 58 }, { motif: 'sun', x: 410, y: 56, s: 0.7 }, { motif: 'hills', y: 230, colors: ['sky', 'lavender', 'peach'] }]),
      intro: ['"폐차장 크레인은 자동차를 번쩍 들었다가 쿵 하고 내려놓아요. 막대자석으로도 가능할까요?" 막대자석은 클립이 늘 붙어 있지만 전자석은 전기를 끊으면 떨어지는 것을 시연한다. "전기를 끊어도 자석의 성질이 그대로 남는다"고 생각하는 학생이 많아 오늘 회로판에서 직접 해 보자고 한다.', '전자석은 영구 자석과 무엇이 다를까요? 전지로 세기와 극을 바꿀 수 있을까요?'],
      acts: [
        {
          title: '전자석에 전기를 흐르게 하기', tool: 'circuit', levels: CLV, options: { grid: [4, 3], parts: ['wire', 'battery', 'coil', 'switch'], stock: { bulb: 0, battery: 2, switch: 1, coil: 1 } },
          task: '전자석 조각(못에 감은 에나멜선)을 회로에 넣어 클립이 붙는지 보아요.',
          teacher: '"전기가 흐르지 않으면 클립이 붙어 있을까요, 떨어질까요?" 스위치를 열었을 때 클립이 떨어지는 것으로 확인하게 한다. 전자석에서 전기가 흐르는 방향을 손가락으로 따라가며 전지 방향과 이어서 말하게 한다.',
          items: [
            { prompt: '전자석에 전기가 흐르도록 회로를 이어 클립을 붙여 보세요.', state: { parts: { 'v0-0': 'bat-', 'h1-0': 'coil' } }, target: { magnet: true }, difficulty: 0.2,
              predict: { q: '전자석에 전기가 흐르면 클립이 붙을까요?', options: ['붙는다', '붙지 않는다'], answer: 0 },
              conclude: '전자석은 전기가 흐를 때 자석의 성질이 생겨 클립이 붙어요.' },
            { prompt: '전자석이 아래쪽에 있어요. 전기가 흐르도록 회로를 이어 클립을 붙여 보세요.', state: { parts: { 'v0-0': 'bat-', 'h1-2': 'coil' } }, target: { magnet: true }, difficulty: 0.25 },
            { prompt: '스위치를 열어 전자석에서 클립이 떨어지게 해 보세요.', toolOptions: { lock: true }, state: LOOP43({ 'h1-0': 'coil', 'h2-2': 'sw1' }), target: { magnet: false, switch: 'open' }, difficulty: 0.15,
              conclude: '전기를 끊으면 전자석의 자석 성질이 없어져 클립이 떨어져요.' },
          ],
        },
        {
          title: '전자석과 영구 자석 비교하기', tool: 'mindmap',
          task: '카드를 읽고 전자석과 막대자석의 성질을 알맞게 나누어요.',
          teacher: '"막대자석은 전기를 끊을 수 있나요?" 전자석만의 성질(껐다 켰다, 세기와 극 바꾸기)을 찾아 말하게 한다. 전자석도 영구 자석처럼 늘 자석이라고 쓴 카드에는 방금 클립이 떨어진 장면을 떠올리게 한다.',
          items: [
            { prompt: '전자석과 막대자석의 성질로 카드를 나누세요.',
              toolOptions: { mode: 'sort', topic: '자석 비교', slots: ['전자석', '막대자석'], cards: ['전기를 끊으면 자석의 성질이 없어져요', '늘 자석의 성질이 남아 있어요', '전지를 더 이어 세기를 키울 수 있어요', '전지 방향을 바꿔 극을 바꿀 수 있어요'] },
              target: { sort: { '전자석': ['전기를 끊으면 자석의 성질이 없어져요', '전지를 더 이어 세기를 키울 수 있어요', '전지 방향을 바꿔 극을 바꿀 수 있어요'], '막대자석': ['늘 자석의 성질이 남아 있어요'] } }, difficulty: 0.25 },
            { prompt: '전자석에 대한 옳은 설명만 고르세요.',
              toolOptions: { mode: 'pick', topic: '전자석', basket: '옳은 설명', cards: [{ id: 'a', text: '전기가 흐를 때만 자석의 성질이 생겨요' }, { id: 'b', text: '전지 방향을 바꾸면 N극과 S극이 바뀌어요' }, { id: 'c', text: '전기를 끊어도 자석의 성질이 그대로 남아요', why: '전기를 끊으면 클립이 떨어져요.' }, { id: 'd', text: '전지를 많이 이을수록 자석이 약해져요', why: '직렬로 전지를 더 이으면 오히려 세져요.' }] },
              target: { pick: ['a', 'b'] }, difficulty: 0.2 },
            { prompt: '전자석이 쓰이는 곳과 그 까닭을 알맞게 이으세요.',
              toolOptions: { mode: 'match', topic: '전자석 쓰임', slots: [{ id: 'c1', label: '고철을 들어 옮기는 크레인' }, { id: 'c2', label: '초인종' }], cards: [{ id: '붙였다', text: '전기를 껐다 켜며 붙였다 떼요' }, { id: '울림', text: '전기가 흐르면 쇠 막대를 끌어당겨 울려요' }, { id: '식음', text: '전기가 없어도 늘 붙어 있어요', why: '전자석은 전기를 끊으면 자석의 성질이 없어져요.' }] },
              target: { match: { c1: '붙였다', c2: '울림' } }, difficulty: 0.3 },
          ],
        },
        {
          title: '세기와 극 바꾸는 방법 찾기', tool: 'circuit', levels: CLV, options: { grid: [4, 3], parts: ['wire', 'battery', 'coil', 'switch'], stock: { bulb: 0, battery: 2, switch: 1, coil: 1 } },
          task: '전지의 개수와 방향을 바꿔 전자석을 세게 하거나 N극의 방향을 바꿔요.',
          teacher: '"전자석을 더 세게 하려면 무엇을 바꿔야 할까요?" 전지를 직렬로 더 이으면 클립이 더 많이 붙는 것을, 전지의 방향을 바꾸면 극이 바뀌는 것을 따로 말하게 한다. 세기를 바꾸는 방법과 극을 바꾸는 방법을 섞는 학생에게는 표로 나누게 한다.',
          items: [
            { prompt: '클립이 더 많이 붙는 센 전자석을 만들어 보세요. 클립 수는 확인한 뒤에 보여요.', state: LOOP43({ 'h1-0': 'coil' }), toolOptions: { readout: true }, target: { magnet: true, strong: true }, difficulty: 0.35, reveal: 'after-check',
              predict: { q: '전자석을 더 세게 하려면?', options: ['전지를 직렬로 더 잇는다', '전지를 하나 빼 둔다'], answer: 0 },
              conclude: '전지를 직렬로 더 이으면 더 센 전기가 흘러 전자석이 세져요.' },
            { prompt: '전자석의 왼쪽 끝이 N극이 되도록 회로를 바꿔 보세요.', state: LOOP43({ 'v0-0': 'bat-', 'h1-0': 'coil' }), target: { magnet: true, coilN: 'left' }, difficulty: 0.3 },
            { prompt: '그림을 보고 고르세요. 이 전자석의 극을 바꾸려면 어떻게 해야 할까요?', toolOptions: { readOnly: true, ask: { q: '극을 바꾸려면?', choices: ['전지를 하나 더 직렬로 잇는다', '전지의 방향을 바꾼다', '스위치를 연다'], why: ['전지를 더 이으면 세기만 커져요.', null, '스위치를 열면 전기가 끊겨 자석의 성질이 없어져요.'] } }, state: LOOP43({ 'h1-0': 'coil' }), target: { pick: 1 }, difficulty: 0.25 },
          ],
        },
      ],
      wrap: '"전기를 끊으면 전자석에는 어떤 일이 생기나요? 세기를 키우는 방법은요?" 두 질문에 한 문장씩 답하게 한다. 출구 3번을 틀린 학생에게는 세기와 극을 바꾸는 방법을 표 두 칸으로 나누어 쓰게 한다.',
      exit: [
        { type: 'tool', tool: 'circuit', options: { grid: [4, 3], parts: ['wire', 'battery', 'coil', 'switch'], stock: { bulb: 0, battery: 2, switch: 1, coil: 1 } }, state: { parts: { 'v0-0': 'bat-', 'h1-0': 'coil' } }, prompt: '전자석에 전기가 흐르게 회로를 이으세요.', target: { magnet: true }, difficulty: 0.2 },
        { type: 'choice', prompt: '전자석이 영구 자석과 다른 점은 무엇인가요?', options: ['전기를 끊으면 자석의 성질이 없어져요', '클립이 붙지 않아요'], answer: 0, difficulty: 0.2, explain: '전자석은 전기가 흐를 때만 자석의 성질이 생겨요.' },
        { type: 'choice', prompt: '전자석의 극을 바꾸는 방법은 무엇인가요?', options: ['전지의 방향을 바꾼다', '클립을 더 많이 붙인다'], answer: 0, difficulty: 0.25, explain: '전기가 흐르는 방향이 바뀌면 N극과 S극도 바뀌어요.' },
      ],
      ws: {
        title: '전자석의 성질 정리',
        note: '전자석은 전기가 흐를 때만 자석이에요. 세기는 전지 수, 극은 전지 방향으로 바꿔요.',
        items: [
          { type: 'figure', prompt: '전자석 회로예요. 전기가 흐르는지 쓰세요.', tool: 'circuit', options: { grid: [4, 3], parts: ['wire', 'battery', 'coil', 'switch'] }, figures: [
            { state: LOOP43({ 'h1-0': 'coil' }), caption: '(    )' }, { state: LOOP43({ 'h1-0': 'coil', 'h2-0': null }), caption: '(    )' }], answer: '흐른다, 흐르지 않는다' },
          { type: 'table', prompt: '무엇을 바꾸면 어떻게 되는지 쓰세요.', columns: ['바꾼 것', '생기는 일'], cells: [['전지를 직렬로 하나 더 이어요', ''], ['전지의 방향을 바꿔요', ''], ['스위치를 열어요', '']], answer: '세기가 커진다, N극과 S극이 바뀐다, 자석의 성질이 없어진다' },
          { type: 'choice', prompt: '전자석에 대해 옳은 것에 ○ 하세요.', options: ['전기를 끊어도 계속 자석이에요', '전기를 흐르게 할 때만 자석이에요'], answer: '전기를 흐르게 할 때만 자석이에요' },
          { type: 'short', prompt: '전자석이 쓰이는 물건을 하나 쓰세요.', answer: '크레인, 초인종, 자기부상열차, 스피커 등' },
        ],
        easy: [
          { type: 'choice', prompt: '전기를 끊으면 전자석은?', options: ['자석의 성질이 없어져요', '계속 자석이에요'], answer: '자석의 성질이 없어져요' },
          { type: 'choice', prompt: '전자석을 더 세게 하려면?', options: ['전지를 직렬로 더 이어요', '전지를 빼요'], answer: '전지를 직렬로 더 이어요' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '전지의 ___을 바꾸면 전자석의 극이 바뀌어요.', answer: '방향' },
          { type: 'draw', prompt: '전자석에 클립이 붙은 모습을 그려 보세요.' },
        ],
      },
      diff: {
        easy: '붙은 클립 수가 글자로 보이고, 전자석을 놓을 칸이 정해져 있어요.',
        base: '글자 없이 클립의 개수와 극 표시를 보고 판단해요.',
        challenge: '확인을 누른 뒤에야 클립 수가 보이고, 센 전자석과 극 바꾸기를 모두 해내야 해요.',
      },
      teacherNotes: '이 시간은 개념 확인이며 실제로 전자석을 만드는 것은 10차시에서 한다. 자주 보이는 어려움: ① 전기를 끊어도 자석의 성질이 남는다고 한다 → 스위치를 열어 클립이 떨어지는 것을 본다. ② 세기를 바꾸는 방법과 극을 바꾸는 방법을 섞는다 → 전지 수와 전지 방향으로 나누어 표에 쓴다. ③ 전자석을 영구 자석의 한 종류로 본다 → 전기로 조절할 수 있다는 점이 다르다.',
    }),

    // ───────────────────────── 9차시 (core) ─────────────────────────
    L(9, {
      title: '전지 개수와 붙은 클립 수를 표와 막대그래프로 나타내기',
      objective: '전지 개수에 따라 전자석에 붙은 클립 수를 표와 막대그래프로 나타내고, 알 수 있는 점과 전자석이 쓰이는 예를 정리해 설명할 수 있다.',
      standards: S3,
      safety: SAFE_E,
      ill: 'a paper bar graph with three bars of stacked paper clips beside a nail electromagnet, plus small cards of a crane and a doorbell',
      scene: SC('전지가 많으면 클립은?', [{ motif: 'cloud', x: 100, y: 52 }, { motif: 'star', x: 390, y: 66, s: 0.8 }, { motif: 'hills', y: 230, colors: ['peach', 'buttercup', 'sky'] }]),
      intro: ['"전지를 한 개 더 이었더니 클립이 많이 붙었어요. 얼마나 더 붙었는지 어떻게 보여 줄 수 있을까요?" 말로만 하는 것보다 표와 그래프가 한눈에 보인다는 점을 이야기한다. 표에 클립 수만 적고 전지의 개수는 비워 두면 무슨 문제가 있는지 묻는다.', '전지의 개수와 클립 수를 짝지어 표와 그래프로 나타내면 무엇을 알 수 있을까요?'],
      acts: [
        {
          title: '전지 개수와 클립 수를 막대그래프로', tool: 'chart', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          task: '전지 개수에 따라 붙은 클립 수(예시 값) 표를 보고 막대그래프를 완성하거나 읽어요.',
          teacher: '"가로에는 무엇을, 세로에는 무엇을 쓰면 좋을까요?" 바꾼 것(전지 수)은 가로, 잰 값(클립 수)은 세로에 쓰게 한다. 표에 전지의 개수를 비워 둔 학생에게 "이 값이 몇 개일 때의 값이죠?"라고 묻는다.',
          items: [
            { prompt: '전지 개수에 따른 클립 수(예시 값) 표를 보고 막대그래프를 완성하세요.',
              toolOptions: { type: 'bar', title: '전지 수와 붙은 클립 수(예시)', data: [['전지 1개', 4], ['전지 2개', 9]], unit: '개', xLabel: '전지 수', yLabel: '클립 수', scale: 1, max: 14, given: [0] },
              target: { build: true }, difficulty: 0.2 },
            { prompt: '다른 모둠의 클립 수(예시 값)를 막대그래프로 나타내세요.',
              toolOptions: { type: 'bar', title: '다른 모둠 기록(예시)', data: [['전지 1개', 3], ['전지 2개', 7], ['전지 3개', 12]], unit: '개', xLabel: '전지 수', yLabel: '클립 수', scale: 1, max: 14, given: [0] },
              target: { build: true }, difficulty: 0.3 },
            { prompt: '그래프를 읽고 전지 3개일 때 붙은 클립 수를 쓰세요.',
              toolOptions: { type: 'bar', mode: 'read', title: '세 번째 모둠(예시)', data: [['전지 1개', 5], ['전지 2개', 10], ['전지 3개', 13]], unit: '개', xLabel: '전지 수', scale: 1, max: 14, question: '전지 3개일 때 클립은 몇 개?' },
              target: { value: 13 }, difficulty: 0.25 },
          ],
        },
        {
          title: '전자석이 쓰이는 예 나누기', tool: 'mindmap',
          task: '카드를 읽고 전자석이 쓰이는 곳과 영구 자석이 쓰이는 곳으로 나누어요.',
          teacher: '"이 물건은 붙였다 뗐다 해야 하나요, 늘 붙어 있어야 하나요?" 쓰임의 까닭에서 전자석과 영구 자석을 가르게 한다. 냉장고 자석처럼 늘 붙어 있어야 하는 것을 전자석 쪽에 놓은 학생에게는 "전기를 끊으면 떨어져도 괜찮은 물건인가요?"라고 되묻는다.',
          items: [
            { prompt: '전자석이 쓰이는 곳과 영구 자석이 쓰이는 곳으로 나누세요.',
              toolOptions: { mode: 'sort', topic: '자석의 쓰임', slots: ['전자석', '영구 자석'], cards: ['고철을 옮기는 크레인', '냉장고 문에 붙이는 메모 자석', '전기를 껐다 켜는 초인종', '나침반 바늘'] },
              target: { sort: { '전자석': ['고철을 옮기는 크레인', '전기를 껐다 켜는 초인종'], '영구 자석': ['냉장고 문에 붙이는 메모 자석', '나침반 바늘'] } }, difficulty: 0.25 },
            { prompt: '크레인에 전자석을 쓰는 까닭만 고르세요.',
              toolOptions: { mode: 'pick', topic: '크레인', basket: '전자석을 쓰는 까닭', cards: [{ id: 'a', text: '전기를 켜면 고철이 붙고 끄면 떨어져요' }, { id: 'b', text: '전지 수로 세기를 조절할 수 있어요' }, { id: 'c', text: '전기 없이도 늘 같은 힘으로 붙어 있어요', why: '그것은 영구 자석의 성질이에요.' }, { id: 'd', text: '고철만이 아니라 모든 물체가 붙어요', why: '자석은 철 같은 물질만 끌어당겨요.' }] },
              target: { pick: ['a', 'b'] }, difficulty: 0.25 },
            { prompt: '전자석을 쓰는 물건과 하는 일을 알맞게 이으세요.',
              toolOptions: { mode: 'match', topic: '전자석 쓰임', slots: [{ id: 'c1', label: '문 잠금장치' }, { id: 'c2', label: '고철 분리기' }], cards: [{ id: '잠금', text: '전기를 흘려 잠금 쇠막대를 끌어당겨요' }, { id: '분리', text: '전기를 켜 철을 붙여 골라내요' }, { id: '냉각', text: '열을 식혀 줘요', why: '자석과는 상관없는 일이에요.' }] },
              target: { match: { c1: '잠금', c2: '분리' } }, difficulty: 0.3 },
          ],
        },
        {
          title: '전지를 늘려 클립 수 읽기', tool: 'circuit', levels: CLV, options: { grid: [4, 3], parts: ['wire', 'battery', 'coil', 'switch'], stock: { bulb: 0, battery: 2, switch: 1, coil: 1 } },
          task: '전자석 회로에서 전지를 늘려 클립이 더 붙게 하거나, 그림을 보고 답을 골라요.',
          teacher: '"전지 수가 늘 때 표의 클립 수는 어떻게 되었나요?" 그래프로 본 값과 회로판의 클립을 이어 말하게 한다. 클립 수가 많아져도 계속 늘기만 하는 것은 아니라는 점은 모둠 값을 보며 이야기한다.',
          items: [
            { prompt: '전자석이 아래쪽에 있어요. 클립이 더 많이 붙도록 전지를 이어 보세요.', state: LOOP43({ 'h1-2': 'coil' }), toolOptions: { readout: true }, target: { magnet: true, strong: true }, difficulty: 0.35, reveal: 'after-check' },
            { prompt: '전지 한 개가 이미 이어져 있어요. 전지를 한 개 더 한 줄로 이어 클립이 더 많이 붙는 전자석을 만들어 보세요.', state: LOOP43({ 'h1-0': 'coil' }), target: { magnet: true, strong: true }, difficulty: 0.35 },
            { prompt: '그림을 보고 고르세요. 전지가 두 개 직렬로 이어진 전자석에는 전지 한 개일 때보다 클립이 어떻게 붙을까요?', toolOptions: { readOnly: true, readout: false, ask: { q: '붙는 클립의 수는?', choices: ['더 많이 붙어요', '더 적게 붙어요', '같아요'], why: [null, '전지를 직렬로 이으면 센 전기가 흘러 더 세져요.', '전지가 늘면 전자석의 세기가 달라져요.'] } }, state: LOOP43({ 'h1-0': 'coil', 'v0-1': 'bat-' }), target: { pick: 0 }, difficulty: 0.25 },
          ],
        },
      ],
      wrap: '"그래프에서 전지 수가 늘면 클립 수가 어떻게 변했나요? 전자석은 어디에 쓰이나요?" 그래프의 막대 높이 변화를 짚으며 한 문장으로 말하게 한다. 출구 2번을 틀린 학생은 표의 가로·세로 이름을 다시 읽게 한다.',
      exit: [
        { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '전지 수와 클립(예시)', data: [['전지 1개', 4], ['전지 2개', 8]], unit: '개', xLabel: '전지 수', scale: 1, max: 10, choices: ['전지 1개', '전지 2개'], question: '클립이 더 많이 붙은 쪽은?' }, prompt: '그래프를 보고 답하세요.', target: { pick: 1 }, difficulty: 0.2 },
        { type: 'choice', prompt: '표에 클립 수만 적고 전지 수를 적지 않으면 어떤 문제가 있나요?', options: ['무엇 때문에 달라졌는지 알 수 없어요', '표가 짧아져요'], answer: 0, difficulty: 0.25, explain: '전지 수와 클립 수를 짝지어야 관계를 알 수 있어요.' },
        { type: 'choice', prompt: '전자석을 쓰는 것은 어느 것인가요?', options: ['고철을 옮기는 크레인', '나침반 바늘'], answer: 0, difficulty: 0.2, explain: '크레인은 전기를 켜고 꺼서 고철을 붙였다 떼요.' },
      ],
      ws: {
        title: '전지 수와 클립 수',
        note: '가로에는 바꾼 것(전지 수), 세로에는 잰 값(클립 수)을 써요. 값은 예시예요.',
        items: [
          { type: 'table', prompt: '표를 완성하고 알 수 있는 점을 쓰세요. (예시 값)', columns: ['전지 수', '붙은 클립 수'], cells: [['1개', '4'], ['2개', ''], ['3개', '']], answer: '모둠 결과에 따라 다름. 전지가 많을수록 클립이 더 많이 붙는 경향' },
          { type: 'figure', prompt: '두 전자석 회로를 보고 클립이 더 많이 붙을 쪽에 ○ 하세요.', tool: 'circuit', options: { grid: [4, 3], parts: ['wire', 'battery', 'coil', 'switch'] }, figures: [
            { state: LOOP43({ 'h1-0': 'coil' }), caption: '(    )' }, { state: LOOP43({ 'h1-0': 'coil', 'v0-1': 'bat-' }), caption: '(    )' }], answer: '두 번째 회로(전지 2개)' },
          { type: 'choice', prompt: '전자석이 쓰이는 곳에 ○ 하세요.', options: ['크레인', '나침반'], answer: '크레인' },
          { type: 'short', prompt: '그래프에서 알 수 있는 점을 한 문장으로 쓰세요.', answer: '전지를 직렬로 많이 이을수록 전자석에 클립이 더 많이 붙는다.' },
        ],
        easy: [
          { type: 'table', prompt: '전지 수와 클립 수를 쓰세요.', columns: ['전지 수', '클립 수'], cells: [['1개', ''], ['2개', '']], answer: '모둠 결과에 따라 다름' },
          { type: 'choice', prompt: '전지가 많으면 클립이?', options: ['더 많이 붙어요', '더 적게 붙어요'], answer: '더 많이 붙어요' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '전자석은 ___을 껐다 켜며 쓸 수 있어요.', answer: '전기' },
          { type: 'draw', prompt: '전자석이 쓰이는 물건 하나를 그려 보세요.' },
        ],
      },
      diff: {
        easy: '막대 끝의 값과 붙은 클립 수가 글자로 보여요.',
        base: '막대를 직접 올려 그래프를 완성하고, 클립 수는 확인한 뒤에 봐요.',
        challenge: '막대가 더 많이 비어 있고, 센 전자석을 확인 전까지 클립 수 없이 만들어야 해요.',
      },
      teacherNotes: '그래프와 표의 값은 모두 예시이며 모둠 값과 달라도 된다. 자주 보이는 어려움: ① 표에 전지 수를 적지 않는다 → 바꾼 것과 잰 값을 짝으로 쓴다. ② 막대 눈금을 잘못 읽는다 → 한 칸이 1개인지 확인한다. ③ 크레인과 냉장고 자석을 같은 자석으로 본다 → 껐다 켜야 하는지로 가른다.',
    }),

    // ───────────────────────── 10차시 (core) ─────────────────────────
    L(10, {
      title: '못에 에나멜선을 감아 전자석을 만들고 클립 수 세기',
      objective: '못에 에나멜선을 감아 전자석을 만들고 전지의 개수와 방향을 바꾸며 붙는 클립의 수와 극을 기록하고, 감은 횟수도 따져 볼 수 있다.',
      standards: S3,
      safety: SAFE_E.concat(['못 끝이 뾰족하니 손을 찔리지 않게 하고, 에나멜선 끝을 벗기는 사포는 선생님과 함께 써요.', '전자석에 전기를 오래 흐르게 하면 못과 전선이 뜨거워지니 클립을 셀 때만 짧게 연결해요.']),
      ill: 'a child winding a thin copper wire around an iron nail on a tray with a battery holder, paper clips clinging to the nail tip',
      scene: SC('감고 이어 클립을 세요', [{ motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'cloud', x: 100, y: 50 }, { motif: 'hills', y: 230, colors: ['lavender', 'mint', 'peach'] }]),
      intro: ['"선을 몇 번 감을지도 전자석의 세기에 영향을 줄까요?" 전지 개수만 살펴본 어제 자료를 떠올리게 하고, 감은 횟수를 세지 않으면 어떤 점을 놓치는지 묻는다. 오늘은 같은 못으로 감은 횟수를 모둠이 정해 같게 하고 전지 개수만 바꿔 본다. 전선이 뜨거워질 수 있어 짧게 연결한다.', '전자석을 만들 때 감은 횟수를 왜 세어 두어야 할까요?'],
      acts: [
        {
          title: '전자석 만드는 차례 놓기', tool: 'story',
          task: '전자석을 만들어 확인하는 차례 카드를 순서대로 놓아요.',
          teacher: '"선 끝의 에나멜을 벗기지 않으면 어떻게 될까요?" 겉의 칠을 벗기지 않으면 전기가 흐르지 못한다고 짚는다. 감은 횟수를 세는 단계를 빼먹은 학생에게는 "전지를 바꾸면 무엇이 달라지는지 말하려면 감은 횟수는 어떻게 해야 하죠?"라고 묻는다.',
          items: [
            { prompt: '전자석을 만들어 클립을 붙이는 차례대로 카드를 놓으세요.',
              toolOptions: { mode: 'order', slots: ['첫째', '둘째', '셋째', '넷째'], cards: ['에나멜선 끝의 칠을 사포로 벗겨요', '못에 선을 한 방향으로 정해진 횟수만큼 감아요', '선 끝을 전지에 이어 클립에 대어 봐요', '붙은 클립을 세어 기록하고 전지를 풀어요'] },
              target: { order: ['에나멜선 끝의 칠을 사포로 벗겨요', '못에 선을 한 방향으로 정해진 횟수만큼 감아요', '선 끝을 전지에 이어 클립에 대어 봐요', '붙은 클립을 세어 기록하고 전지를 풀어요'] }, difficulty: 0.25 },
            { prompt: '전지 개수를 바꿔 비교하는 차례를 놓으세요.',
              toolOptions: { mode: 'order', slots: ['첫째', '둘째', '셋째'], cards: ['전지 한 개로 붙은 클립 수를 세요', '같은 전자석에 전지를 한 줄로 하나 더 이어요', '붙은 클립 수를 다시 세어 견주어요'] },
              target: { order: ['전지 한 개로 붙은 클립 수를 세요', '같은 전자석에 전지를 한 줄로 하나 더 이어요', '붙은 클립 수를 다시 세어 견주어요'] }, difficulty: 0.25 },
            { prompt: '실험이 끝난 뒤 정리 차례를 놓으세요.',
              toolOptions: { mode: 'order', slots: ['첫째', '둘째', '셋째'], cards: ['전지를 풀어서 따로 모아요', '클립과 못을 정리해 상자에 담아요', '손을 씻고 기록표를 내요'] },
              target: { order: ['전지를 풀어서 따로 모아요', '클립과 못을 정리해 상자에 담아요', '손을 씻고 기록표를 내요'] }, difficulty: 0.2 },
          ],
        },
        {
          title: '회로판에서 전자석 세기 미리 정하기', tool: 'circuit', levels: CLV, options: { grid: [4, 3], parts: ['wire', 'battery', 'coil', 'switch'], stock: { bulb: 0, battery: 2, switch: 1, coil: 1 } },
          task: '실제 실험 전에 회로판에서 전자석 회로를 만들어 세기가 어떻게 달라질지 예상해요.',
          teacher: '"전자석에 전기가 흐르는 길은 어디인가요?" 손가락으로 따라가며 전지와 전자석이 한 바퀴 이어졌는지 확인하게 한다. 회로판의 결과는 예상이고, 실제 못과 선에서는 다시 세어 확인한다고 말해 준다.',
          items: [
            { prompt: '전지 한 개로 전자석에 전기가 흐르게 이어 보세요.', state: { parts: { 'v0-0': 'bat-', 'h1-0': 'coil' } }, target: { magnet: true }, difficulty: 0.2 },
            { prompt: '전지를 하나 더 이어 클립이 더 많이 붙는 전자석을 만들어 보세요. 클립 수는 확인한 뒤에 보여요.', state: LOOP43({ 'h1-0': 'coil' }), toolOptions: { readout: true }, target: { magnet: true, strong: true }, difficulty: 0.35, reveal: 'after-check',
              conclude: '전지를 직렬로 더 이으면 전자석이 세져요. 실제 실험에서도 감은 횟수는 같게 하고 확인해요.' },
            { prompt: '전자석의 위쪽 끝이 N극이 되도록 전지 방향을 바꿔 보세요.', toolOptions: { grid: [4, 3] }, state: LOOP43({ 'v0-0': 'bat+', 'h1-0': 'coil' }), target: { magnet: true, coilN: 'right' }, difficulty: 0.35 },
          ],
        },
        {
          title: '변인과 안전 점검하기', tool: 'mindmap',
          task: '실험에서 같게 할 것과 다르게 할 것을 고르고 안전 약속을 점검해요.',
          teacher: '"감은 횟수를 세지 않고 전지만 바꿔 비교하면 무엇이 문제일까요?" 전지의 영향인지 감은 횟수의 영향인지 가려낼 수 없음을 말하게 한다. 클립이 뜨거운 못에 붙어 있어도 맨손으로 만지지 않게 한다.',
          items: [
            { prompt: '전지 개수의 영향을 알아보려면 같게 할 것만 고르세요.',
              toolOptions: { mode: 'pick', topic: '같게 할 것', basket: '같게 할 것', cards: [{ id: 'a', text: '못의 크기와 종류' }, { id: 'b', text: '에나멜선을 감은 횟수' }, { id: 'c', text: '전지의 개수', why: '전지의 개수는 이 실험에서 다르게 하는 것이에요.' }, { id: 'd', text: '감는 방향을 칸마다 바꿔요', why: '감는 방향이 달라지면 극이 달라져 비교하기 어려워요.' }] },
              target: { pick: ['a', 'b'] }, difficulty: 0.25 },
            { prompt: '감은 횟수를 같게 한 모둠과 세지 않은 모둠의 말을 나누세요.',
              toolOptions: { mode: 'sort', topic: '모둠 비교', slots: ['믿을 수 있어요', '믿기 어려워요'], cards: ['감은 횟수를 같게 하고 전지만 바꿨어요', '못도 바꾸고 전지도 바꿨어요', '같은 못에 전지만 하나 더 이었어요', '감은 횟수를 세지 않았어요'] },
              target: { sort: { '믿을 수 있어요': ['감은 횟수를 같게 하고 전지만 바꿨어요', '같은 못에 전지만 하나 더 이었어요'], '믿기 어려워요': ['못도 바꾸고 전지도 바꿨어요', '감은 횟수를 세지 않았어요'] } }, difficulty: 0.3 },
            { prompt: '전자석 실험에서 안전 약속을 지키는 행동만 고르세요.',
              toolOptions: { mode: 'pick', topic: '안전', basket: '지키는 행동', cards: [{ id: 'a', text: '클립을 센 뒤 바로 전지를 풀어요' }, { id: 'b', text: '못과 선이 뜨거우면 만지지 않고 식혀요' }, { id: 'c', text: '전지를 오래 연결한 채로 클립을 세요', why: '전선과 못이 뜨거워질 수 있어요.' }, { id: 'd', text: '못 끝을 손으로 눌러 봐요', why: '못 끝이 뾰족해 다칠 수 있어요.' }] },
              target: { pick: ['a', 'b'] }, difficulty: 0.15 },
          ],
        },
      ],
      wrap: '"감은 횟수를 같게 해야 하는 까닭은 무엇이었나요?" 전지의 영향만 보기 위해서라는 것을 말하게 한다. 출구 3번을 틀린 학생에게는 전선을 오래 연결했을 때의 위험을 짝에게 설명하게 한다.',
      exit: [
        { type: 'tool', tool: 'story', options: { mode: 'order', slots: ['첫째', '둘째', '셋째'], cards: ['못에 선을 감아요', '전지에 이어 클립을 붙여요', '붙은 클립 수를 세요'] }, prompt: '전자석 실험의 차례대로 놓으세요.', target: { order: ['못에 선을 감아요', '전지에 이어 클립을 붙여요', '붙은 클립 수를 세요'] }, difficulty: 0.2 },
        { type: 'choice', prompt: '전지 개수의 영향만 알아보려면 감은 횟수를 어떻게 해야 하나요?', options: ['같게 해요', '다르게 해요'], answer: 0, difficulty: 0.2, explain: '다르게 하는 것은 전지 개수 하나뿐이어야 결과를 믿을 수 있어요.' },
        { type: 'choice', prompt: '전자석에 전기를 오래 흐르게 하면 어떻게 될 수 있나요?', options: ['못과 전선이 뜨거워져요', '클립이 더 많이 붙어요'], answer: 0, difficulty: 0.25, explain: '오래 연결하면 전선과 못이 뜨거워질 수 있어요.' },
      ],
      ws: {
        title: '전자석 만들기 기록',
        note: '같은 못에 감은 횟수는 같게 하고 전지 개수만 바꿔요. 값은 우리 모둠 값을 써요.',
        items: [
          { type: 'table', prompt: '실험 결과를 쓰세요.', columns: ['감은 횟수', '전지 수', '붙은 클립 수', '극(N극 쪽)'], cells: [['', '1개', '', ''], ['', '2개(직렬)', '', '']], answer: '모둠 결과에 따라 다름. 감은 횟수가 두 칸에서 같은지, 전지 2개일 때 클립이 더 많은지 확인' },
          { type: 'check', prompt: '지킨 약속에 ✔ 하세요.', options: ['선 끝의 칠을 벗겼어요', '감은 횟수를 세어 같게 했어요', '클립을 센 뒤 바로 전지를 풀었어요', '뜨거운 전선을 만지지 않았어요'] },
          { type: 'choice', prompt: '이 실험에서 다르게 한 것에 ○ 하세요.', options: ['전지의 개수', '감은 횟수', '못의 크기'], answer: '전지의 개수' },
          { type: 'short', prompt: '전지 방향을 바꾸면 전자석에 어떤 변화가 생겼는지 쓰세요.', answer: '전자석의 N극과 S극이 바뀌었다.' },
        ],
        easy: [
          { type: 'table', prompt: '붙은 클립 수를 쓰세요.', columns: ['전지 수', '클립 수'], cells: [['1개', ''], ['2개', '']], answer: '모둠 결과에 따라 다름' },
          { type: 'check', prompt: '지킨 약속에 ✔ 하세요.', options: ['감은 횟수를 같게 했어요', '전지를 바로 풀었어요'] },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '전자석은 못에 ___을 감아 만들어요.', answer: '에나멜선' },
          { type: 'draw', prompt: '내가 만든 전자석과 붙은 클립을 그려 보세요.' },
        ],
      },
      diff: {
        easy: '붙은 클립 수가 글자로 보이고, 실험 차례 카드가 3장이에요.',
        base: '회로판에서 예상하고 실제 실험은 감은 횟수를 직접 정해 기록해요.',
        challenge: '클립 수는 확인한 뒤에만 보이고, 극과 세기를 한꺼번에 맞추는 회로를 만들어요.',
      },
      teacherNotes: '준비물(모둠): 큰 못(철) 1개, 에나멜선(약 1 m), 사포, 건전지 2개와 끼우개, 클립 20개, 스위치, 보호 안경. 에나멜선 끝은 칠을 벗겨야 전기가 흐른다. 자주 보이는 어려움: ① 감은 횟수를 세지 않고 전지만 탓한다 → 감은 횟수를 같게 센다. ② 선을 감는 방향이 뒤섞여 극이 헷갈린다 → 한 방향으로만 감는다. ③ 오래 연결해 전선이 뜨거워진다 → 클립을 센 뒤 곧바로 푼다.',
    }),

    // ───────────────────────── 11차시 (core) ─────────────────────────
    L(11, {
      title: '전기를 아끼는 방법과 안전하게 쓰는 방법 가르고 까닭 말하기',
      objective: '전기를 아껴 쓰는 방법과 안전하게 쓰는 방법을 가르고, 고른 방법이 왜 도움이 되는지 근거를 들어 설명할 수 있다.',
      standards: S4,
      safety: ['교실 콘센트에 손이나 클립, 전선을 넣지 않아요. 플러그를 뽑을 때는 전선이 아니라 몸통을 잡아요.', '젖은 손으로 플러그나 전기 제품을 만지지 않아요.'],
      ill: 'a paper power strip overloaded with many plugs with a warning sign, next to a plug being pulled out by its body and a light switch turned off',
      scene: SC('아끼고 안전하게', [{ motif: 'house', x: 110, y: 204, s: 0.9 }, { motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'cloud', x: 300, y: 48 }]),
      intro: ['"집에서 전기를 쓰다가 위험하거나 아깝다고 느낀 적이 있나요?" 학생이 말한 장면을 아낌과 안전으로 나누어 칠판에 적는다. "플러그를 꽂아 두기만 하면 전기가 전혀 쓰이지 않는다"는 생각이 흔해, 이를 오늘의 확인 거리로 남긴다. 아끼는 일과 안전한 일이 항상 같지는 않다는 것도 알린다.', '전기를 아끼는 방법과 안전하게 쓰는 방법은 어떻게 다를까요?'],
      acts: [
        {
          title: '아끼기와 안전 가르기', tool: 'mindmap',
          task: '생활 장면 카드를 읽고 전기를 아끼는 방법과 안전하게 쓰는 방법으로 나누어요.',
          teacher: '"이 행동은 전기를 덜 쓰게 하나요, 사고를 막나요?" 카드마다 한 가지 이로움을 말하게 한다. 둘 다에 해당하는 행동(예: 안 쓰는 플러그 뽑기)은 이로움을 모두 말하게 한다.',
          items: [
            { prompt: '생활 장면을 아끼는 방법과 안전한 방법으로 나누세요.',
              toolOptions: { mode: 'sort', topic: '전기 쓰기', slots: ['전기를 아껴요', '안전하게 써요'], cards: ['안 보는 방의 불을 꺼요', '젖은 손으로 플러그를 만지지 않아요', '쓰지 않는 충전기를 뽑아요', '한 콘센트에 많이 꽂지 않아요'] },
              target: { sort: { '전기를 아껴요': ['안 보는 방의 불을 꺼요', '쓰지 않는 충전기를 뽑아요'], '안전하게 써요': ['젖은 손으로 플러그를 만지지 않아요', '한 콘센트에 많이 꽂지 않아요'] } }, difficulty: 0.25 },
            { prompt: '한 콘센트에 여러 기기를 꽂으면 위험한 까닭만 고르세요.',
              toolOptions: { mode: 'pick', topic: '문어발 콘센트', basket: '위험한 까닭', cards: [{ id: 'a', text: '한꺼번에 센 전기가 흘러 전선이 뜨거워져요' }, { id: 'b', text: '과열되면 불이 날 수 있어요' }, { id: 'c', text: '전기 요금이 줄어요', why: '아낌과 안전은 달라요. 많이 꽂으면 위험해요.' }, { id: 'd', text: '플러그가 반짝이면 괜찮아요', why: '반짝임으로 안전을 알 수 없어요.' }] },
              target: { pick: ['a', 'b'] }, difficulty: 0.25 },
            { prompt: '대기전력에 대한 옳은 설명만 고르세요.',
              toolOptions: { mode: 'pick', topic: '대기전력', basket: '옳은 설명', cards: [{ id: 'a', text: '꺼 놓은 듯해도 꽂혀 있으면 조금씩 전기를 써요' }, { id: 'b', text: '안 쓸 때 플러그를 뽑으면 줄일 수 있어요' }, { id: 'c', text: '플러그를 꽂아 두기만 하면 전기가 전혀 안 쓰여요', why: '꺼진 것처럼 보여도 기기 안의 일부는 전기를 계속 써요.' }, { id: 'd', text: '대기전력은 눈에 보이는 불빛만이에요', why: '불빛이 없어도 전기를 쓸 수 있어요.' }] },
              target: { pick: ['a', 'b'] }, difficulty: 0.3 },
          ],
        },
        {
          title: '스위치를 열어 전기를 쓰지 않게 하기', tool: 'circuit', levels: CLV, options: { grid: [4, 3], lock: true },
          task: '스위치를 눌러 전구를 켜고 끄며 전기를 쓰는 때와 쓰지 않는 때를 살펴요.',
          teacher: '"스위치가 열리면 전기는 흐르나요?" 열린 스위치는 전기의 길이 끊긴 것이라 전기를 쓰지 않는다고 말하게 한다. 실제 기기는 꺼도 안쪽 일부가 켜져 있는 경우가 많아 플러그를 뽑는 것이 더 확실하다고 짚는다.',
          items: [
            { prompt: '전구가 켜져 있어요. 스위치를 열어 전기를 쓰지 않게 해 보세요.', state: LOOP43({ 'h1-0': 'bulb', 'h2-2': 'sw1' }), target: { lit: 0, switch: 'open' }, difficulty: 0.1 },
            { prompt: '스위치가 열려 있어요. 필요할 때만 켤 수 있게 닫아 전구를 켜 보세요.', toolOptions: { grid: [3, 2] }, state: LOOP32({ 'h0-0': 'bulb', 'h1-1': 'sw0' }), target: { lit: 'all', switch: 'closed' }, difficulty: 0.1 },
            { prompt: '스위치가 열린 회로예요. 이 회로에서 전구는 전기를 쓰고 있을까요?', toolOptions: { readOnly: true, glow: false, ask: { q: '전구는 전기를 쓸까요?', choices: ['쓰지 않아요', '계속 써요'], why: [null, '스위치가 열려 전기의 길이 끊겼어요.'] } }, state: LOOP43({ 'h1-0': 'bulb', 'h2-2': 'sw0' }), target: { pick: 0 }, difficulty: 0.2,
              conclude: '스위치를 열면 전기의 길이 끊겨 전기를 쓰지 않아요. 실제 기기는 플러그를 뽑으면 더 확실해요.' },
          ],
        },
        {
          title: '고르는 이유 말하기', tool: 'mindmap',
          task: '방법 카드와 알맞은 까닭을 이어요.',
          teacher: '"그 방법이 왜 도움이 되나요?" 방법만 고르고 까닭을 말하지 못하는 학생에게는 "무엇이 줄거나 막아지나요?"라고 묻는다. 까닭에는 전기가 아껴지는 것과 사고가 막아지는 것을 함께 쓰게 한다.',
          items: [
            { prompt: '방법과 알맞은 까닭을 이으세요.',
              toolOptions: { mode: 'match', topic: '방법과 까닭', slots: [{ id: 'c1', label: '쓰지 않는 기기의 플러그를 뽑아요' }, { id: 'c2', label: '한 콘센트에 많이 꽂지 않아요' }], cards: [{ id: '대기', text: '대기전력으로 새는 전기를 줄여요' }, { id: '과열', text: '전선이 뜨거워져 불이 나는 것을 막아요' }, { id: '밝기', text: '전등이 더 밝아져요', why: '밝기와는 상관이 없어요.' }] },
              target: { match: { c1: '대기', c2: '과열' } }, difficulty: 0.25 },
            { prompt: '전기를 아끼는 방법과 안전한 방법을 모두 만족하는 행동만 고르세요.',
              toolOptions: { mode: 'pick', topic: '둘 다 해당', basket: '둘 다 도움이 되는 것', cards: [{ id: 'a', text: '쓰지 않는 기기의 플러그를 뽑아요' }, { id: 'b', text: '안 쓰는 멀티탭의 스위치를 꺼요' }, { id: 'c', text: '전등만 끄고 충전기는 계속 꽂아 둬요', why: '전기를 아끼는 데 일부만 도움이 돼요.' }, { id: 'd', text: '플러그를 전선을 잡아 당겨 빼요', why: '전선이 상해 위험해질 수 있어요.' }] },
              target: { pick: ['a', 'b'] }, difficulty: 0.3 },
            { prompt: '위험한 행동과 안전한 행동으로 나누세요.',
              toolOptions: { mode: 'sort', topic: '전기 안전', slots: ['위험해요', '안전해요'], cards: ['젖은 손으로 플러그를 꽂아요', '플러그를 몸통을 잡고 뽑아요', '콘센트에 젓가락을 꽂아요', '손이 마른 상태로 스위치를 눌러요'] },
              target: { sort: { '위험해요': ['젖은 손으로 플러그를 꽂아요', '콘센트에 젓가락을 꽂아요'], '안전해요': ['플러그를 몸통을 잡고 뽑아요', '손이 마른 상태로 스위치를 눌러요'] } }, difficulty: 0.15 },
          ],
        },
      ],
      wrap: '"플러그를 꽂아 두기만 해도 전기가 쓰일까요?" 대기전력을 사례로 말하게 한다. 출구 3번을 틀린 학생에게는 안전한 방법과 아끼는 방법을 한 가지씩 직접 쓰게 한다.',
      exit: [
        { type: 'tool', tool: 'circuit', options: { grid: [3, 2], lock: true }, state: LOOP32({ 'h0-0': 'bulb', 'h1-1': 'sw1' }), prompt: '스위치를 열어 전구를 끄세요.', target: { lit: 0, switch: 'open' }, difficulty: 0.15 },
        { type: 'choice', prompt: '쓰지 않는 충전기를 뽑는 까닭은 무엇인가요?', options: ['꽂혀 있으면 조금씩 전기가 쓰여서', '충전기가 지겨워해서'], answer: 0, difficulty: 0.2, explain: '꽂혀 있기만 해도 대기전력으로 전기가 조금씩 쓰여요.' },
        { type: 'choice', prompt: '한 콘센트에 여러 기기를 꽂으면 위험한 까닭은 무엇인가요?', options: ['전선이 뜨거워져 불이 날 수 있어서', '전기가 아껴져서'], answer: 0, difficulty: 0.2, explain: '한꺼번에 센 전기가 흘러 전선이 과열될 수 있어요.' },
      ],
      ws: {
        title: '전기를 아끼고 안전하게 쓰기',
        note: '아끼는 방법과 안전한 방법을 구분하고 까닭을 함께 써요.',
        items: [
          { type: 'table', prompt: '방법과 까닭을 쓰세요.', columns: ['방법', '아끼기 / 안전', '까닭'], cells: [['안 보는 방의 불을 꺼요', '', ''], ['한 콘센트에 많이 꽂지 않아요', '', ''], ['쓰지 않는 충전기를 뽑아요', '', '']], answer: '아끼기-전기 사용 줄임, 안전-과열과 화재 예방, 아끼기-대기전력 줄임' },
          { type: 'check', prompt: '우리 집에서 지킬 약속에 ✔ 하세요.', options: ['젖은 손으로 플러그를 만지지 않아요', '플러그는 몸통을 잡고 뽑아요', '안 쓰는 방의 불을 꺼요', '쓰지 않는 충전기를 뽑아요'] },
          { type: 'choice', prompt: '꽂아 두기만 해도 전기가 쓰일 수 있는 까닭에 ○ 하세요.', options: ['기기 안의 일부가 계속 켜져 있어서', '전선이 길어서'], answer: '기기 안의 일부가 계속 켜져 있어서' },
          { type: 'short', prompt: '우리 집에서 전기를 아끼거나 안전하게 쓰는 방법을 한 가지 쓰세요.', answer: '예: 나갈 때 불 끄기, 젖은 손으로 만지지 않기' },
        ],
        easy: [
          { type: 'choice', prompt: '전기를 아끼는 방법에 ○ 하세요.', options: ['안 보는 방의 불 끄기', '젖은 손으로 플러그 만지기'], answer: '안 보는 방의 불 끄기' },
          { type: 'choice', prompt: '안전한 방법에 ○ 하세요.', options: ['한 콘센트에 많이 꽂기', '플러그를 몸통을 잡고 뽑기'], answer: '플러그를 몸통을 잡고 뽑기' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '쓰지 않을 때는 플러그를 ___요.', answer: '뽑아' },
          { type: 'draw', prompt: '전기를 안전하게 쓰는 모습을 그려 보세요.' },
        ],
      },
      diff: {
        easy: '카드가 3장이고, 스위치 회로에서 켜진 전구 수가 글자로 보여요.',
        base: '방법과 까닭을 스스로 이어 보고 전구의 빛으로 스위치 결과를 판단해요.',
        challenge: '둘 다 해당하는 방법을 가려내고 글자 없이 빛만 보고 스위치 상태를 판단해요.',
      },
      teacherNotes: '전기 사용량과 요금 숫자는 쓰지 않고 방법과 까닭에 집중한다. 교실의 실제 콘센트에는 학생이 손대지 않는다. 자주 보이는 어려움: ① 아끼기와 안전을 같은 말로 쓴다 → 줄이는 것(전기)과 막는 것(사고)을 나눈다. ② 꽂아 두기만 하면 전기를 안 쓴다고 생각한다 → 대기전력의 개념을 알려 준다. ③ 젖은 손의 위험을 가볍게 여긴다 → 물이 전기를 통하게 해 감전될 수 있다고 말해 준다.',
    }),

    // ───────────────────────── 12차시 (core) ─────────────────────────
    L(12, {
      title: '전기 생활 규칙을 까닭과 함께 안내 자료로 만들기',
      objective: '전기를 아끼고 안전하게 쓰는 생활 규칙에 그 규칙이 줄이는 위험이나 낭비를 함께 적어 안내 자료로 만들 수 있다.',
      standards: S4,
      safety: ['플러그를 뽑을 때는 몸통을 잡고, 젖은 손으로 전기 제품을 만지지 않는 규칙은 자료에 꼭 넣어요.'],
      ill: 'a paper poster on a classroom wall with three icons a light switch, a plug and a warning triangle and short rule sentences, with a child pinning it up',
      scene: SC('교실에 붙일 안내문', [{ motif: 'star', x: 90, y: 58 }, { motif: 'cloud', x: 390, y: 52 }, { motif: 'house', x: 110, y: 206, s: 0.8 }]),
      intro: ['"규칙만 적힌 안내문과 이유까지 적힌 안내문 중 어느 쪽을 더 잘 지키게 될까요?" 규칙만 있는 안내문과 까닭이 함께 있는 안내문을 비교해 보여 준다. 오늘은 규칙, 까닭, 그림 세 가지를 갖춘 안내 자료를 만든다.', '규칙에 까닭을 함께 적으면 무엇이 좋을까요?'],
      acts: [
        {
          title: '규칙과 까닭 이어 안내문 칸 채우기', tool: 'mindmap',
          task: '규칙 카드와 알맞은 까닭 카드를 이어요.',
          teacher: '"이 규칙은 무슨 일을 막거나 줄이나요?" 까닭이 규칙과 맞지 않으면 "이 까닭이 이 규칙에 어울리나요?"를 묻는다. 규칙만 적고 까닭을 비워 둔 칸이 없는지 확인하게 한다.',
          items: [
            { prompt: '교실 전기 규칙과 알맞은 까닭을 이으세요. 맞지 않는 카드는 남겨 둬요.',
              toolOptions: { mode: 'match', topic: '규칙과 까닭', slots: [{ id: 'c1', label: '나갈 때 교실 불을 꺼요' }, { id: 'c2', label: '젖은 손으로 전기 제품을 만지지 않아요' }, { id: 'c3', label: '멀티탭에 기기를 너무 많이 꽂지 않아요' }], cards: [{ id: '낭비', text: '쓰지 않는 전기가 낭비되는 것을 줄여요' }, { id: '감전', text: '전기가 몸에 흐르는 감전을 막아요' }, { id: '과열', text: '과열로 불이 나는 것을 막아요' }, { id: '시간', text: '수업 시간이 길어져요', why: '규칙의 까닭과 상관없어요.' }] },
              target: { match: { c1: '낭비', c2: '감전', c3: '과열' } }, difficulty: 0.3 },
            { prompt: '안내 자료에 꼭 들어갈 것만 골라 담으세요.',
              toolOptions: { mode: 'pick', topic: '안내 자료', basket: '꼭 들어갈 것', cards: [{ id: 'a', text: '짧은 규칙 문장' }, { id: 'b', text: '그 규칙의 까닭' }, { id: 'c', text: '내용을 알려 주는 그림' }, { id: 'd', text: '다른 반 친구 이름 목록', why: '개인정보는 자료에 넣지 않아요.' }] },
              target: { pick: ['a', 'b', 'c'] }, difficulty: 0.2 },
            { prompt: '안내문의 좋은 점과 고칠 점을 나누세요.',
              toolOptions: { mode: 'sort', topic: '안내문 점검', slots: ['좋은 점', '고칠 점'], cards: ['규칙 옆에 까닭이 적혀 있어요', '규칙만 있고 까닭이 없어요', '그림이 규칙과 어울려요', '글이 너무 많아 읽기 어려워요'] },
              target: { sort: { '좋은 점': ['규칙 옆에 까닭이 적혀 있어요', '그림이 규칙과 어울려요'], '고칠 점': ['규칙만 있고 까닭이 없어요', '글이 너무 많아 읽기 어려워요'] } }, difficulty: 0.25 },
          ],
        },
        {
          title: '안내문 빈칸 채우기', tool: 'story', levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          task: '안내문의 빈칸에 알맞은 카드를 넣어요.',
          teacher: '"이 문장에는 규칙과 까닭이 모두 있나요?" 빈칸 문장을 소리 내어 읽으며 앞뒤가 이어지는지 말하게 한다. 규칙을 지키지 않으면 어떤 일이 생기는지도 한 문장으로 말하게 한다.',
          items: [
            { prompt: '안내문의 빈칸에 알맞은 카드를 넣으세요.',
              toolOptions: { mode: 'fill', title: '교실 전기 안내문', slots: [{ id: 's1', label: '나갈 때는 ___를 꺼요.' }, { id: 's2', label: '그래야 ___이 줄어요.' }], cards: [{ id: '불', text: '교실 불' }, { id: '낭비', text: '전기 낭비' }, { id: '시간', text: '쉬는 시간' }] },
              target: { fill: { s1: '불', s2: '낭비' } }, difficulty: 0.2 },
            { prompt: '안전 안내문의 빈칸을 채우세요.',
              toolOptions: { mode: 'fill', title: '전기 안전 안내문', slots: [{ id: 's1', label: '___ 손으로 플러그를 만지지 않아요.' }, { id: 's2', label: '물이 전기를 통하게 해 ___ 위험이 있어요.' }], cards: [{ id: '젖은', text: '젖은' }, { id: '감전될', text: '감전될' }, { id: '마른', text: '마른' }] },
              target: { fill: { s1: '젖은', s2: '감전될' } }, difficulty: 0.25 },
            { prompt: '안내문을 만드는 차례대로 카드를 놓으세요.',
              toolOptions: { mode: 'order', slots: ['첫째', '둘째', '셋째'], cards: ['규칙을 정해요', '규칙마다 까닭을 써요', '규칙에 어울리는 그림을 그려요'] },
              target: { order: ['규칙을 정해요', '규칙마다 까닭을 써요', '규칙에 어울리는 그림을 그려요'] }, difficulty: 0.2 },
          ],
        },
        {
          title: '실천 결과를 그래프로 나타내기', tool: 'chart', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          task: '일주일 동안 지킨 규칙 수(예시 값) 표를 막대그래프로 나타내거나 읽어요.',
          teacher: '"그래프에서 가장 잘 지킨 요일은 언제일까요? 못 지킨 날은 왜 못 지켰을까요?" 숫자만 읽지 말고 까닭을 말하게 한다. 가로축에 요일, 세로축에 지킨 규칙 수를 쓰게 한다.',
          items: [
            { prompt: '우리 반 일주일 실천 기록(예시 값)을 막대그래프로 나타내세요.',
              toolOptions: { type: 'bar', title: '지킨 규칙 수(예시)', data: [['월', 3], ['화', 4], ['수', 2], ['목', 5], ['금', 4]], unit: '개', xLabel: '요일', yLabel: '지킨 규칙 수', scale: 1, max: 6, given: [0] },
              target: { build: true }, difficulty: 0.25 },
            { prompt: '그래프를 보고 규칙을 가장 많이 지킨 요일을 고르세요.',
              toolOptions: { type: 'bar', mode: 'read', title: '다른 반 기록(예시)', data: [['월', 2], ['화', 5], ['수', 3], ['목', 4]], unit: '개', xLabel: '요일', scale: 1, max: 6, choices: ['월', '화', '수', '목'], question: '가장 많이 지킨 요일은?', why: ['월요일 막대가 가장 낮아요.', '', '수요일은 화요일보다 낮아요.', '목요일은 화요일보다 낮아요.'], explain: '화요일 막대가 5개로 가장 높아요.' },
              target: { pick: 1 }, difficulty: 0.2 },
            { prompt: '같은 그래프에서 수요일에 지킨 규칙은 몇 개인가요?',
              toolOptions: { type: 'bar', mode: 'read', title: '다른 반 기록(예시)', data: [['월', 2], ['화', 5], ['수', 3], ['목', 4]], unit: '개', xLabel: '요일', scale: 1, max: 6, question: '수요일에 지킨 규칙 수는?' },
              target: { value: 3 }, difficulty: 0.25 },
          ],
        },
      ],
      wrap: '"규칙마다 까닭이 적혀 있나요? 그림이 규칙을 잘 보여 주나요?" 모둠 안내문을 서로 읽고 좋은 점과 더 넣을 점을 말하게 한다. 출구 3번을 틀린 학생에게는 자기 안내문에서 까닭이 빠진 규칙을 찾아 채우게 한다.',
      exit: [
        { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '규칙과 까닭', slots: [{ id: 'c1', label: '나갈 때 불을 꺼요' }], cards: [{ id: '낭비', text: '전기 낭비를 줄여요' }, { id: '감전', text: '감전을 막아요' }] }, prompt: '규칙과 까닭을 이으세요.', target: { match: { c1: '낭비' } }, difficulty: 0.2 },
        { type: 'choice', prompt: '안내 자료에 규칙의 까닭을 적는 좋은 점은 무엇인가요?', options: ['왜 지켜야 하는지 알 수 있어요', '글이 길어져요'], answer: 0, difficulty: 0.2, explain: '까닭을 알면 규칙을 더 잘 지키게 돼요.' },
        { type: 'choice', prompt: '그래프의 가로축에 쓰는 것은 무엇인가요?', options: ['요일처럼 바꾸어 가며 본 것', '지킨 규칙 수'], answer: 0, difficulty: 0.25, explain: '가로에는 바꾼 것(요일), 세로에는 잰 값(규칙 수)을 써요.' },
      ],
      ws: {
        title: '전기 안내 자료 만들기',
        note: '규칙, 까닭, 그림 세 가지를 갖추고 숫자는 예시예요.',
        items: [
          { type: 'table', prompt: '우리 교실 전기 규칙을 정하고 까닭을 쓰세요.', columns: ['규칙', '까닭(줄이는 위험이나 낭비)'], cells: [['', ''], ['', ''], ['', '']], answer: '예: 나갈 때 불을 끈다-전기 낭비 줄임, 젖은 손으로 만지지 않는다-감전 예방, 멀티탭 과하게 쓰지 않는다-과열 예방' },
          { type: 'choice', prompt: '안내문에 꼭 넣을 것에 ○ 하세요.', options: ['규칙과 까닭', '친구 이름 목록'], answer: '규칙과 까닭' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '안내문에는 규칙과 함께 그 ___을 적어요.', answer: '까닭' },
          { type: 'short', prompt: '내가 만든 안내문의 제목과 가장 중요한 규칙을 쓰세요.', answer: '예: 전기를 안전하게 / 젖은 손으로 플러그를 만지지 않아요' },
        ],
        easy: [
          { type: 'table', prompt: '규칙과 까닭을 쓰세요.', columns: ['규칙', '까닭'], cells: [['나갈 때 불을 꺼요', ''], ['젖은 손으로 만지지 않아요', '']], answer: '전기 낭비를 줄여요, 감전을 막아요' },
          { type: 'choice', prompt: '안내문에 꼭 필요한 것은?', options: ['그림과 까닭', '친구 이름'], answer: '그림과 까닭' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '규칙을 지키면 ___을 막을 수 있어요.', answer: '사고' },
          { type: 'draw', prompt: '우리 교실에 붙일 전기 안내 그림을 그려 보세요.' },
        ],
      },
      diff: {
        easy: '카드를 놓을 칸이 줄고 막대 끝의 값이 보여요.',
        base: '규칙과 까닭을 스스로 이어 보고 막대그래프를 완성해요.',
        challenge: '규칙 세 개와 까닭 네 장이 섞여 있고, 그래프 값을 읽어 이유까지 말해요.',
      },
      teacherNotes: '그래프의 값은 예시이다. 안내문에 학생 이름이나 얼굴 사진은 넣지 않는다. 자주 보이는 어려움: ① 규칙만 적고 까닭을 비워 둔다 → 규칙마다 줄이는 낭비·위험을 쓴다. ② 까닭이 규칙과 어울리지 않는다 → 이어 읽어 본다. ③ 글을 너무 많이 쓴다 → 짧은 문장과 그림 하나를 한 쌍으로 둔다.',
    }),

    // ───────────────────────── 13차시 (wrap) ─────────────────────────
    L(13, {
      title: '교실의 전기 사용을 살펴 계획 세우고 일주일 실천 기록하기',
      objective: '교실에서 전기를 쓰는 모습을 살펴 고칠 점을 찾고, 실천 계획을 세워 일주일 동안 실천한 결과를 기록하며 단원을 정리할 수 있다.',
      standards: S4,
      safety: ['관찰할 때 콘센트와 플러그에는 손을 대지 않고 눈으로만 살펴요.', '플러그를 뽑거나 스위치를 만지는 것은 마른 손으로 해요.'],
      ill: 'a paper classroom with a checklist clipboard and a child marking lights switched off, a weekly chart on the wall with small stars',
      scene: SC('우리 교실 전기 살피기', [{ motif: 'house', x: 110, y: 206, s: 0.9 }, { motif: 'star', x: 390, y: 60 }, { motif: 'star', x: 430, y: 100, s: 0.7 }]),
      intro: ['"교실에서 전기를 쓰는 모습을 한번 살펴볼까요? 아깝거나 위험해 보이는 곳이 있나요?" 학생들이 쉬는 시간에 본 교실의 모습을 말하게 한다. 고칠 점을 찾는 것에서 끝나면 안 되고 계획으로 옮겨야 실천이 이어진다는 점을 알린다. 오늘은 계획을 세우고 일주일 기록표까지 만들고 단원을 정리한다.', '고칠 점을 찾았다면 어떻게 계획으로 옮기고 실천을 이어 갈까요?'],
      acts: [
        {
          title: '교실의 모습에서 고칠 점 찾기', tool: 'mindmap',
          task: '교실 장면 카드를 읽고 잘하고 있는 점과 고칠 점으로 나누어요.',
          teacher: '"이 장면에서 전기가 아깝거나 위험한 곳은 어디인가요?" 고칠 점이 없다고 하는 모둠에게 쉬는 시간의 교실을 떠올리게 한다. 장면을 탓하기보다 "우리가 무엇을 할 수 있을까요?"로 이어 간다.',
          items: [
            { prompt: '교실 장면을 잘하고 있는 점과 고칠 점으로 나누세요.',
              toolOptions: { mode: 'sort', topic: '우리 교실', slots: ['잘하고 있어요', '고칠 점이에요'], cards: ['빈 교실의 불이 꺼져 있어요', '쉬는 시간에 아무도 없는 곳의 불이 켜져 있어요', '쓰지 않는 충전기가 꽂혀 있어요', '멀티탭이 정리되어 있고 기기가 적게 꽂혀 있어요'] },
              target: { sort: { '잘하고 있어요': ['빈 교실의 불이 꺼져 있어요', '멀티탭이 정리되어 있고 기기가 적게 꽂혀 있어요'], '고칠 점이에요': ['쉬는 시간에 아무도 없는 곳의 불이 켜져 있어요', '쓰지 않는 충전기가 꽂혀 있어요'] } }, difficulty: 0.2 },
            { prompt: '고칠 점과 알맞은 실천 방법을 이으세요.',
              toolOptions: { mode: 'match', topic: '고쳐 보기', slots: [{ id: 'c1', label: '아무도 없는 곳의 불이 켜져 있어요' }, { id: 'c2', label: '쓰지 않는 충전기가 꽂혀 있어요' }], cards: [{ id: '끄기', text: '마지막으로 나가는 사람이 불을 꺼요' }, { id: '뽑기', text: '쓰지 않을 때 플러그를 뽑아요' }, { id: '켜기', text: '불을 더 많이 켜요', why: '불을 더 켜면 전기를 더 쓰게 돼요.' }] },
              target: { match: { c1: '끄기', c2: '뽑기' } }, difficulty: 0.25 },
            { prompt: '실천 계획으로 알맞은 것만 고르세요. 누가, 언제, 무엇을 하는지가 분명해야 해요.',
              toolOptions: { mode: 'pick', topic: '계획', basket: '실천 계획', cards: [{ id: 'a', text: '이번 주 쉬는 시간마다 당번이 빈 곳의 불을 꺼요' }, { id: 'b', text: '매일 하교 전 우리 모둠이 충전기를 뽑는지 살펴요' }, { id: 'c', text: '전기를 아껴요', why: '누가 언제 무엇을 하는지가 없어 실천하기 어려워요.' }, { id: 'd', text: '언젠가 모두 열심히 해요', why: '때와 방법이 없어 계획이라고 하기 어려워요.' }] },
              target: { pick: ['a', 'b'] }, difficulty: 0.3 },
          ],
        },
        {
          title: '계획 세우고 기록하는 차례 놓기', tool: 'story',
          task: '살펴보기에서 실천 기록까지의 차례 카드를 순서대로 놓아요.',
          teacher: '"계획을 세운 뒤에 반드시 해야 할 일은 무엇일까요?" 실천한 결과를 날마다 기록해야 계획이 지켜졌는지 알 수 있다고 짚는다. 기록을 하루만 하고 멈추는 학생에게는 한 주 기록의 모습을 다시 보여 준다.',
          items: [
            { prompt: '살펴보기부터 정리까지의 차례대로 카드를 놓으세요.',
              toolOptions: { mode: 'order', slots: ['첫째', '둘째', '셋째', '넷째'], cards: ['교실에서 전기를 쓰는 모습을 살펴요', '고칠 점을 찾아 실천 계획을 세워요', '일주일 동안 실천하고 날마다 기록해요', '결과를 돌아보고 다음 계획을 정해요'] },
              target: { order: ['교실에서 전기를 쓰는 모습을 살펴요', '고칠 점을 찾아 실천 계획을 세워요', '일주일 동안 실천하고 날마다 기록해요', '결과를 돌아보고 다음 계획을 정해요'] }, difficulty: 0.25 },
            { prompt: '계획을 세우는 차례를 놓으세요.',
              toolOptions: { mode: 'order', slots: ['첫째', '둘째', '셋째'], cards: ['고칠 점 한 가지를 골라요', '누가·언제·무엇을 할지 정해요', '기록표에 날마다 ○, ×를 적어요'] },
              target: { order: ['고칠 점 한 가지를 골라요', '누가·언제·무엇을 할지 정해요', '기록표에 날마다 ○, ×를 적어요'] }, difficulty: 0.25 },
            { prompt: '실천이 끝난 뒤 돌아보는 차례를 놓으세요.',
              toolOptions: { mode: 'order', slots: ['첫째', '둘째', '셋째'], cards: ['지킨 날과 못 지킨 날을 세어요', '못 지킨 까닭을 찾아요', '다음 주 계획을 고쳐요'] },
              target: { order: ['지킨 날과 못 지킨 날을 세어요', '못 지킨 까닭을 찾아요', '다음 주 계획을 고쳐요'] }, difficulty: 0.25 },
          ],
        },
        {
          title: '단원 정리와 실천 다짐', tool: 'mindmap',
          task: '단원에서 배운 것을 짝에게 말하고 오늘 정한 계획을 확인한 뒤 "다 했어요"를 눌러요.',
          teacher: '"회로, 전자석, 전기 안전 중 가장 기억에 남는 것은 무엇이고 왜 그런가요?" 단원을 다시 짚으며 실제 실천으로 이어 말하게 한다. 학생이 계획을 말한 뒤 "이번 주에 어떻게 기록할 거예요?"라고 묻는다.',
          items: [
            { prompt: '단원에서 배운 것을 알맞은 가지에 놓으세요.',
              toolOptions: { mode: 'sort', topic: '배운 것', slots: ['회로', '전자석', '안전과 절약'], cards: ['전기의 길이 끊김 없이 이어져야 불이 켜져요', '전지를 직렬로 이으면 전구가 더 밝아져요', '전기가 흐를 때만 자석의 성질이 생겨요', '젖은 손으로 플러그를 만지지 않아요', '전지를 더 이으면 전자석이 세져요'] },
              target: { sort: { '회로': ['전기의 길이 끊김 없이 이어져야 불이 켜져요', '전지를 직렬로 이으면 전구가 더 밝아져요'], '전자석': ['전기가 흐를 때만 자석의 성질이 생겨요', '전지를 더 이으면 전자석이 세져요'], '안전과 절약': ['젖은 손으로 플러그를 만지지 않아요'] } }, difficulty: 0.3 },
            { prompt: '실천 기록표에 꼭 필요한 칸만 고르세요.',
              toolOptions: { mode: 'pick', topic: '기록표', basket: '필요한 칸', cards: [{ id: 'a', text: '날짜' }, { id: 'b', text: '실천한 일' }, { id: 'c', text: '지켰는지(○, ×)' }, { id: 'd', text: '다른 학생의 이름과 사진', why: '개인정보는 기록하지 않아요.' }] },
              target: { pick: ['a', 'b', 'c'] }, difficulty: 0.2 },
            { prompt: '짝에게 이번 주 실천 계획을 말하고 짝의 계획에서 좋은 점 하나를 이야기한 뒤 "다 했어요"를 누르세요.', toolOptions: { topic: '실천 다짐', slots: ['내 계획', '짝의 좋은 점'], cards: [{ id: 'q1', text: '누가·언제·무엇' }, { id: 'q2', text: '좋은 점' }] }, free: true, talk: true, difficulty: 0 },
          ],
        },
      ],
      wrap: '"단원을 시작할 때 \'전선을 전지 한쪽에만 이어도 켜질까?\'라고 물었죠? 지금은 어떻게 말할 수 있나요?" 회로, 전자석, 안전·절약을 이어 한 문장으로 말하게 한다. 활동지 자기 점검에서 △가 많은 항목은 다음 시간 앞 5분에 복습한다.',
      exit: [
        { type: 'tool', tool: 'circuit', options: { grid: [3, 2], lock: true }, state: LOOP32({ 'h0-0': 'bulb', 'h0-1': null }), prompt: '끊긴 칸을 이어 전구에 불을 켜세요.', target: { lit: 'all' }, difficulty: 0.15 },
        { type: 'choice', prompt: '실천 계획에 꼭 들어가야 할 것은 무엇인가요?', options: ['누가·언제·무엇을 할지', '막연한 다짐'], answer: 0, difficulty: 0.2, explain: '구체적이어야 실천하고 기록할 수 있어요.' },
        { type: 'choice', prompt: '전자석을 더 세게 하는 방법은 무엇인가요?', options: ['전지를 직렬로 더 이어요', '전지를 빼요'], answer: 0, difficulty: 0.25, explain: '전지를 직렬로 이으면 더 센 전기가 흘러 전자석이 세져요.' },
      ],
      ws: {
        title: '단원 정리와 일주일 실천 기록',
        note: '단원에서 배운 것을 점검하고, 실천할 일과 지킨 날을 기록해요.',
        items: [
          { type: 'table', prompt: '나의 단원 점검: 할 수 있으면 ○, 아직이면 △ 하세요.', columns: ['할 수 있는 것', '○ / △'], cells: [['불이 켜지는 회로의 특징을 말할 수 있다', ''], ['전지 한 개와 두 개 직렬 회로의 밝기를 견줄 수 있다', ''], ['전자석의 성질과 세기를 바꾸는 방법을 말할 수 있다', ''], ['전기를 아끼고 안전하게 쓰는 방법을 말할 수 있다', '']] },
          { type: 'table', prompt: '내 실천 계획과 일주일 기록을 쓰세요.', columns: ['실천할 일', '월', '화', '수', '목', '금'], cells: [['', '', '', '', '', ''], ['', '', '', '', '', '']], answer: '구체적인 실천(누가·언제·무엇)을 쓰고 지킨 날을 ○로 기록했는지 확인' },
          { type: 'choice', prompt: '실천 계획으로 알맞은 것에 ○ 하세요.', options: ['쉬는 시간마다 빈 곳의 불을 꺼요', '전기를 아껴요'], answer: '쉬는 시간마다 빈 곳의 불을 꺼요' },
          { type: 'short', prompt: '단원 첫 시간의 질문 "전선을 전지 한쪽에만 이어도 불이 켜질까?"에 지금의 내 말로 답하세요.', answer: '켜지지 않는다. 전기의 길이 끊김 없이 한 바퀴 이어져야 전구에 불이 켜진다.' },
        ],
        easy: [
          { type: 'choice', prompt: '불이 켜지는 회로에 ○ 하세요.', options: ['길이 끊김 없이 이어진 회로', '길이 끊긴 회로'], answer: '길이 끊김 없이 이어진 회로' },
          { type: 'choice', prompt: '전기를 아끼는 방법에 ○ 하세요.', options: ['안 쓸 때 불 끄기', '젖은 손으로 플러그 만지기'], answer: '안 쓸 때 불 끄기' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '전자석은 ___가 흐를 때만 자석이에요.', answer: '전기' },
          { type: 'draw', prompt: '이 단원에서 가장 기억에 남는 것을 그림으로 그려 보세요.' },
        ],
      },
      diff: {
        easy: '카드를 놓는 칸이 줄고 회로판의 전구 수가 글자로 보여요.',
        base: '고칠 점과 실천 방법을 스스로 이어 보고 단원 내용을 세 갈래로 나눠요.',
        challenge: '실천 계획 카드에 막연한 것이 섞여 있어, 구체적인 계획만 골라야 해요.',
      },
      teacherNotes: '단원 정리 시간이다. 한 주 동안의 실천 기록은 다음 주 첫 시간에 돌아보며 못 지킨 까닭을 이야기한다. 학생 이름이나 얼굴 사진은 기록하지 않는다. 자주 보이는 어려움: ① 고칠 점을 찾고도 계획으로 옮기지 않는다 → 누가·언제·무엇을 쓰게 한다. ② 계획이 막연하다 → 한 가지만 골라 구체적으로 쓴다. ③ 자기 점검에서 △가 많은 항목은 다음 시간 5분 복습에 쓴다.',
    }),
  ];

  PaperLessons.registerUnit({
    id: 'g6-sci-2-03', schema: 'edu-unit.v1', catalogUnit: CU,
    grade: 6, subject: '과학', unitTitle: '3. 전기의 이용',
    flow: '1~4차시는 불이 켜지는 회로이다. 길이 끊겼는지로 켜지는 회로를 가르고(1), 스위치와 합선을 읽고(2), 기호와 선으로 회로도를 그린 뒤(3), 직접 이어 불을 켜 보고 안 켜진 경우와 견준다(4). 5~7차시는 전지의 직렬연결로, 전지를 한 줄로 이어 밝기를 견주고 방향이 반대면 켜지지 않을 수 있음을 알고(5), 두 회로를 표·단계 그래프로 나타내며(6), 같은 전구로 전지만 바꿔 직접 견준다(7). 8~10차시는 전자석으로, 전기가 흐를 때만 자석이 되고 세기·극을 전지로 바꿀 수 있음을 알고(8), 전지 수와 클립 수를 표·그래프로 정리하며(9), 못에 선을 감아 직접 만든다(10). 11~13차시는 전기를 효율적이고 안전하게 쓰기로, 아낌과 안전을 가르고(11), 규칙에 까닭을 담은 안내 자료를 만들며(12), 교실을 살펴 계획을 세우고 한 주 실천을 기록한다(13).',
    refs: {},
    lessons,
  });
})();
