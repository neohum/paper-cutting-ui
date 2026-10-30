/* 5학년 실과 5. 디지털 사회와 인공지능 — 1~3차시 문제 해결과 알고리즘([6실05-01]) → 4~6차시 명령과 기초 프로그래밍([6실05-02]) → 7~9차시 협력과 공유([6실05-03]).
 * 성취기준은 units-index의 단원 목록에서 차시 주제에 맞는 것만 적는다.
 */
(function () {
  const U = { catalog: 'g5-실과-2학기-5', grade: 5, subject: '실과', unitTitle: '5. 디지털 사회와 인공지능' };
  const PROMPT = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const head = (n, title, objective, standards) => ({
    id: `g5-prac-2-05-${String(n).padStart(2, '0')}`, schema: 'edu-lesson.v1',
    catalog: { unit: U.catalog, lesson: n },
    grade: U.grade, subject: U.subject, unitTitle: U.unitTitle,
    title, objective, standards, minutes: 40, formats: ['chromebook', 'projector', 'print'],
  });
  const CARD_LV = { easy: { live: true, instant: true }, base: {}, challenge: {} };
  const SCENES = [
    (t) => [{ motif: 'sun', x: 410, y: 58, s: 0.8 }, { motif: 'cloud', x: 110, y: 50 }, { motif: 'hills', y: 206 }, { motif: 'house', x: 90, y: 214 }, { motif: 'tree', x: 300, y: 214 }, { motif: 'house', x: 390, y: 216, color: 'sky', s: 0.9 }, { motif: 'text', x: 240, y: 134, text: t, size: 22 }],
    (t) => [{ motif: 'moon', x: 410, y: 58, s: 0.7 }, { motif: 'star', x: 90, y: 60 }, { motif: 'star', x: 170, y: 40, color: 'rose', s: 0.7 }, { motif: 'hills', y: 210 }, { motif: 'tree', x: 80, y: 216 }, { motif: 'flower', x: 400, y: 226 }, { motif: 'text', x: 240, y: 132, text: t, size: 21 }],
    (t) => [{ motif: 'cloud', x: 90, y: 48 }, { motif: 'cloud', x: 360, y: 70, s: 0.8 }, { motif: 'mountain', x: 200, y: 200 }, { motif: 'hills', y: 214 }, { motif: 'bird', x: 280, y: 84 }, { motif: 'leaf', x: 420, y: 226 }, { motif: 'text', x: 240, y: 136, text: t, size: 22 }],
  ];
  // d: { ill:[그림 설명, 장면 글, 장면 번호], intro:{ teacher, student, demo }, acts:[…], exit:{ teacher, items }, ws:{ title, items, easy:{ note, items } }, diff:[쉬움, 기본, 도전], notes }
  const lesson = (n, title, objective, stds, d) => {
    const acts = d.acts.map((a, i) => Object.assign({ id: `a${i + 1}`, minutes: d.acts.length === 3 ? 9 : d.acts.length === 2 ? (i === 0 ? 14 : 13) : 27, levels: CARD_LV }, a));
    const main = acts.reduce((s, a) => s + a.minutes, 0);
    return Object.assign(head(n, title, objective, stds), {
      illustration: { prompt: PROMPT(d.ill[0]), scene: { viewBox: [480, 270], layers: SCENES[d.ill[2] || 0](d.ill[1]) } },
      stages: [
        { id: 'intro', title: '도입', minutes: 6, teacher: d.intro.teacher, student: d.intro.student, demo: d.intro.demo },
        { id: 'main', title: '전개', minutes: main, activities: acts },
        { id: 'wrapup', title: '정리', minutes: 40 - 6 - main, teacher: d.exit.teacher, exitTicket: d.exit.items },
      ],
      worksheet: { title: d.ws.title, items: d.ws.items, easy: d.ws.easy },
      differentiation: { easy: d.diff[0], base: d.diff[1], challenge: d.diff[2] },
      teacherNotes: d.notes,
    }, d.safety ? { safety: d.safety } : {});
  };
  const L = [];

  // ───────────────────────── 1차시 (intro) 시작 상태와 목표 상태 ─────────────────────────
  L.push(lesson(1, '가방 싸기와 거북이 길 찾기로 시작·목표 상태 나누기',
    '문제를 풀기 전에 지금의 모습(시작 상태)과 이르려는 모습(목표 상태)을 가려 적고, 그 사이를 잇는 차례가 알고리즘임을 말할 수 있다.', ['[6실05-01]'], {
    ill: ['a child packing a school bag from a messy desk while a small paper turtle robot waits at a flag on a checkered board', '어디에서 출발해 어디에 닿을까요?', 0],
    intro: {
      teacher: '"내일 시간표대로 가방을 싼다고 해 볼게요. 지금 책상은 어떤 모습이고, 다 싸고 나면 어떤 모습이 되어야 하나요?" 두세 명에게 말하게 한 뒤 칠판에 \'지금\'과 \'다 한 뒤\'로 나누어 적는다. 시연 단추로 카드가 시작·목표 가지에 들어가는 모습을 보여 주고 "그 사이에 할 일을 빠짐없이 차례로 적은 것을 알고리즘이라고 해요."라고 말한다. 일 자체와 끝난 모습을 한 덩어리로 말하는 학생에게는 "일이 끝났을 때 눈에 보이는 모습만 말해 볼까요?"로 가른다.',
      student: '오늘 가방을 쌀 때 책상의 지금 모습과 다 싼 뒤의 모습을 각각 한 문장으로 말해 봅시다.',
      demo: { tool: 'mindmap', options: { topic: '가방 싸기', slots: ['시작 상태', '목표 상태'], cards: ['책이 책상에 흩어져 있어요', '시간표 책이 가방에 들어 있어요'], shuffle: false }, sequence: [{ sort: { '시작 상태': ['책이 책상에 흩어져 있어요'], '목표 상태': ['시간표 책이 가방에 들어 있어요'] } }] },
    },
    acts: [
      {
        title: '활동 1. 시작 상태와 목표 상태 가르기', tool: 'mindmap',
        teacher: '"문장이 지금의 모습을 말하나요, 끝난 뒤의 모습을 말하나요?" 문장 끝말(\'~있어요\', \'~되었어요\')이 모습을 말하는지 해야 할 일을 말하는지 보게 한다. \'바닥을 닦아요\'처럼 일을 말하는 카드를 두 가지에 모두 넣는 학생에게 "닦는 일은 사이에 있는 일이에요. 시작도 끝도 아니에요."라고 짚는다.',
        task: '카드를 읽고 지금의 모습은 시작 상태, 이르려는 모습은 목표 상태 가지에 넣어요.',
        items: [
          { prompt: '가방 싸기에서 카드를 시작 상태와 목표 상태로 나누어 보세요.', toolOptions: { topic: '가방 싸기', slots: ['시작 상태', '목표 상태'], cards: ['가방이 비어 있어요', '책이 책상에 쌓여 있어요', '필통과 물통이 가방에 있어요', '시간표 책이 모두 들어 있어요'] }, hints: ['일을 하기 전 눈에 보이는 모습인지, 일을 마친 뒤 눈에 보이는 모습인지 따져서 나누어요.'], target: { sort: { '시작 상태': ['가방이 비어 있어요', '책이 책상에 쌓여 있어요'], '목표 상태': ['필통과 물통이 가방에 있어요', '시간표 책이 모두 들어 있어요'] } }, difficulty: 0.1 },
          { prompt: '화분 물 주기에서 카드를 시작 상태와 목표 상태로 나누어 보세요.', toolOptions: { topic: '화분 물 주기', slots: ['시작 상태', '목표 상태'], cards: ['흙이 말라 갈라져 있어요', '잎이 축 처져 있어요', '흙이 촉촉해요', '잎이 힘 있게 서 있어요', '물뿌리개를 들어요'] }, hints: ['물을 주기 전 모습과 준 뒤 모습으로 나누어요. 하는 동작이 쓰인 카드는 어디에도 넣지 않아요.'], target: { sort: { '시작 상태': ['흙이 말라 갈라져 있어요', '잎이 축 처져 있어요'], '목표 상태': ['흙이 촉촉해요', '잎이 힘 있게 서 있어요'] } }, difficulty: 0.2 },
          { prompt: '해결할 문제마다 이르려는 목표 상태를 한 장씩 이어 보세요.', toolOptions: { mode: 'match', topic: '문제와 목표', slots: [{ id: 'floor', label: '교실 바닥에 종잇조각이 가득해요' }, { id: 'book', label: '책장의 책이 뒤죽박죽이에요' }, { id: 'lost', label: '사물함 열쇠를 어디 두었는지 몰라요' }], cards: ['바닥에 종잇조각이 하나도 없어요', '책이 번호 순서로 꽂혀 있어요', '열쇠가 늘 두는 주머니에 있어요', '친구가 청소를 대신해요'] }, hints: ['왼쪽 문제가 해결되었을 때 눈에 보일 모습을 떠올려 이어요. 누가 하는지가 쓰인 카드는 모습이 아니에요.'], target: { match: { floor: '바닥에 종잇조각이 하나도 없어요', book: '책이 번호 순서로 꽂혀 있어요', lost: '열쇠가 늘 두는 주머니에 있어요' } }, difficulty: 0.25,
            predict: { q: '목표 상태는 일을 하는 동작일까요, 일을 마친 뒤의 모습일까요?', options: ['하는 동작이에요', '마친 뒤의 모습이에요', '잘 모르겠어요'], answer: 1 },
            conclude: '목표 상태는 일을 마쳤을 때 눈에 보이는 모습이에요. 하는 동작은 그 사이의 차례에 들어가요.' },
        ],
      },
      {
        title: '활동 2. 거북이를 시작 칸에서 목표 칸으로 보내기', tool: 'block-coding',
        teacher: '"거북이는 지금 어느 칸에서 어느 쪽을 보고 있나요? 깃발은 어느 칸인가요?" 시작 칸과 방향, 목표 칸을 먼저 손가락으로 짚게 한 뒤 블록을 놓게 한다. 돌기 블록이 한 칸 움직인다고 생각하는 학생에게 "돌기 블록은 자리는 그대로 두고 보는 쪽만 바꿔요."라고 말하고 실행을 천천히 보게 한다.',
        task: '시작 칸과 목표 칸을 읽고, 앞으로·돌기 블록을 차례로 놓아 거북이를 깃발까지 보내요.',
        levels: { easy: { cols: 4, rows: 3, blocks: ['fwd', 'left', 'right'] }, base: { blocks: ['fwd', 'left', 'right'] }, challenge: { blocks: ['fwd', 'left', 'right', 'rep'] } },
        items: [
          { prompt: '거북이가 오른쪽을 보며 서 있어요. 깃발이 있는 칸까지 보내 보세요.', toolOptions: { cols: 5, rows: 3, start: { x: 0, y: 1, dir: 'E' }, goal: { x: 4, y: 1 } }, target: { reach: true }, difficulty: 0.1 },
          { prompt: '아래쪽 칸에서 시작해 위쪽 깃발까지 가도록 블록을 놓아 보세요.', toolOptions: { cols: 4, rows: 4, start: { x: 1, y: 3, dir: 'N' }, goal: { x: 1, y: 0 } }, target: { reach: true }, difficulty: 0.15 },
          { prompt: '시작 칸과 목표 칸이 대각선 끝이에요. 한 번 꺾어서 닿아 보세요.', toolOptions: { cols: 5, rows: 4, start: { x: 0, y: 3, dir: 'E' }, goal: { x: 3, y: 1 } }, target: { reach: true }, difficulty: 0.3,
            predict: { q: '출발할 때 거북이는 어느 쪽을 보고 있어야 편할까요?', options: ['오른쪽', '위쪽', '어느 쪽이든 같아요'], answer: 0 },
            conclude: '시작 상태에는 자리뿐 아니라 보는 방향도 들어 있어요. 방향에 맞춰 블록의 차례가 달라져요.' },
        ],
      },
      {
        title: '활동 3. 가방 싸기 차례를 빠짐없이 놓기', tool: 'kitchen',
        teacher: '"가방이 비어 있는 상태에서 시간표 책이 모두 든 상태가 되려면 무엇을 먼저 하나요?" 학생이 \'책 넣기\' 한 장으로 끝내려 하면 "시간표를 모르면 어떤 책을 넣죠?"로 되묻는다. 자기에게 뻔한 단계(시간표 보기)를 빼는 오류를 짚는다.',
        task: '가방을 싸는 일을 카드로 놓고, 시작 상태에서 목표 상태까지 빠짐없는 차례를 만들어요.',
        items: [
          { prompt: '시간표대로 가방 싸는 차례를 위에서부터 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: 'table', text: '시간표를 봐요' }, { id: 'pick', text: '필요한 책을 꺼내요' }, { id: 'put', text: '책을 가방에 넣어요' }, { id: 'zip', text: '가방을 닫아요' }] }, hints: ['무엇을 넣을지 알아야 넣을 수 있어요. 알아보는 일이 먼저인지 넣는 일이 먼저인지 따져 놓아요.'], target: { order: ['table', 'pick', 'put', 'zip'] }, difficulty: 0.15 },
          { prompt: '빠진 단계가 없도록 책가방을 비우는 차례를 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: 'open', text: '가방 덮개를 열어요' }, { id: 'out', text: '가방 속 물건을 꺼내요' }, { id: 'shake', text: '가방 안 먼지를 털어요' }, { id: 'sort', text: '꺼낸 물건을 종류별로 놓아요' }, { id: 'back', text: '필요한 물건만 다시 넣어요' }] }, hints: ['물건을 털기 전에 가방 속이 비어야 해요. 한 일이 다음 일의 바탕이 되는 차례를 찾아요.'], target: { order: ['open', 'out', 'shake', 'sort', 'back'] }, difficulty: 0.3 },
          { prompt: '내일 준비물을 챙기는 차례에서 알맞은 순서를 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: 'note', text: '알림장에서 준비물을 읽어요' }, { id: 'find', text: '집에서 준비물을 찾아요' }, { id: 'check', text: '빠진 것이 없는지 하나씩 살펴요' }, { id: 'bag', text: '가방 맨 위에 넣어요' }] }, hints: ['무엇이 필요한지 아는 일, 찾는 일, 살피는 일, 놓아 두는 일 중 앞에서 한 일이 뒤의 바탕이 되는 순서를 찾아요.'], target: { order: ['note', 'find', 'check', 'bag'] }, difficulty: 0.35 },
        ],
      },
    ],
    exit: {
      teacher: '"오늘 알게 된 시작 상태와 목표 상태를 내 말로 한 번 설명해 볼까요?" 출구 1번에서 \'바닥을 닦아요\'를 목표 상태에 넣은 학생에게 "그 말은 일을 하는 동작이에요. 다 하고 난 모습만 골라 볼까요?"라고 되묻는다. 다음 시간에는 같은 일을 말과 순서도로 나타내어 견준다고 예고한다.',
      items: [
        { type: 'tool', tool: 'mindmap', options: { topic: '교실 청소', slots: ['시작 상태', '목표 상태'], cards: ['쓰레기통이 가득 차 있어요', '바닥이 깨끗해요'] }, prompt: '교실 청소의 시작 상태와 목표 상태를 나누어 보세요.', target: { sort: { '시작 상태': ['쓰레기통이 가득 차 있어요'], '목표 상태': ['바닥이 깨끗해요'] } }, difficulty: 0.1 },
        { type: 'choice', prompt: '알고리즘은 무엇인가요?', options: ['시작 상태에서 목표 상태까지 가는 차례', '목표 상태를 그린 그림', '컴퓨터 안에 든 부품'], answer: 0, difficulty: 0.15, explain: '알고리즘은 시작 상태에서 목표 상태까지 이르는 일의 차례예요.' },
        { type: 'short', prompt: '오늘 해결해 본 일 하나를 골라 시작 상태와 목표 상태를 한 줄씩 쓰세요.' },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
    ws: {
      title: '시작 상태와 목표 상태 찾기',
      items: [
        { type: 'figure', wide: true, prompt: '가지마다 알맞은 모습을 한 가지씩 써 넣으세요.', tool: 'mindmap', figures: [{ options: { topic: '신발 정리', printCards: false, slots: ['시작 상태', '목표 상태'], cards: ['보기'] }, caption: '' }], answer: '예: 시작 — 신발이 현관에 흩어져 있어요 / 목표 — 신발이 신발장에 가지런해요' },
        { type: 'choice', prompt: '목표 상태에 알맞은 말에 ○ 하세요.', options: ['걸레를 빨아요', '책상 위가 깨끗해요', '청소 도구함을 열어요'], answer: '책상 위가 깨끗해요' },
        { type: 'table', prompt: '해결할 일마다 시작 상태와 목표 상태를 쓰세요.', columns: ['해결할 일', '시작 상태', '목표 상태'], cells: [['도서관 책 반납', '', ''], ['화분 옮기기', '', ''], ['', '', '']] },
        { type: 'short', prompt: '오늘 아침에 한 일 하나를 골라 시작 상태와 목표 상태를 쓰고, 그 사이에 한 일을 세 가지 쓰세요.' },
      ],
      easy: {
        note: '시작 상태는 일을 하기 전 모습이고, 목표 상태는 일을 마친 뒤 모습이에요.',
        items: [
          { type: 'figure', wide: true, prompt: '가지에 알맞은 모습을 한 가지씩 쓰세요.', tool: 'mindmap', figures: [{ options: { topic: '책상 정리', printCards: false, slots: ['시작 상태', '목표 상태'], cards: ['보기'] }, caption: '' }], answer: '예: 시작 — 책이 쌓여 있어요 / 목표 — 책상 위가 비어 있어요' },
          { type: 'choice', prompt: '일을 마친 뒤의 모습에 ○ 하세요.', options: ['물뿌리개를 들어요', '흙이 촉촉해요'], answer: '흙이 촉촉해요' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '일을 하기 전의 모습을 ___ 상태라고 해요.', answer: '시작' },
          { type: 'short', prompt: '오늘 한 일 하나를 쓰세요.' },
        ],
      },
    },
    diff: ['시작·목표 가르기에서 맞게 놓으면 초록 테두리가 생기고, 거북이는 4×3 작은 판에서 앞으로·돌기 블록만 써요.', '모두 놓은 뒤 확인을 눌러 스스로 고쳐요.', '거북이 문제에 반복 블록이 더해지고, 준비물 챙기기 차례의 카드 수가 늘어나요.'],
    notes: '자주 보이는 어려움: ① 목표 상태를 \'청소하기\'처럼 하는 일로 말한다 → 일을 마쳤을 때 눈에 보이는 모습만 말하게 한다. ② 거북이의 시작 방향을 보지 않고 블록을 놓는다 → 시작 칸과 방향을 손가락으로 짚고 시작한다. ③ 자기에게 뻔한 단계를 빼고 차례를 적는다 → 처음 보는 친구가 따라 할 수 있는지 묻는다.',
  }));

  // ───────────────────────── 2차시 (practice) 같은 절차를 말과 순서도로 ─────────────────────────
  L.push(lesson(2, '책 빌리는 일을 말과 순서도로 나타내어 견주기',
    '같은 절차를 말로 쓴 차례와 순서도로 나타낸 것을 견주고, 순서도 기호의 모양이 나타내는 뜻을 짝 지을 수 있다.', ['[6실05-01]'], {
    ill: ['a librarian desk with a flowchart of rounded and diamond paper shapes connected by arrows next to a stack of library books', '말로도, 그림으로도 나타내요', 1],
    intro: {
      teacher: '"도서관에서 책을 빌리는 방법을 친구에게 전화로 알려 준다면 어떻게 말할까요?" 한 학생이 말한 차례를 칠판에 한 줄씩 받아 적는다. 시연 단추로 같은 차례가 네모 상자와 화살표로 놓이는 모습을 보여 주고 "말은 사람이 알아듣지만, 그림으로 그리면 한눈에 순서가 보여요."라고 말한다. "대충 알아듣겠지"라며 적당히 말하는 학생에게는 "처음 도서관에 가는 동생도 따라 할 수 있나요?"라고 되묻는다.',
      student: '도서관에서 책을 빌리는 방법을 전화로 알려 준다면 어떻게 말할지 짝에게 말해 봅시다.',
      demo: { tool: 'kitchen', options: { mode: 'order', cards: [{ id: 'find', text: '책을 찾아요' }, { id: 'card', text: '대출 카드를 내요' }], shuffle: false }, sequence: [{ order: ['find', 'card'] }] },
    },
    acts: [
      {
        title: '활동 1. 말로 쓴 차례를 순서대로 놓기', tool: 'kitchen',
        teacher: '"책을 찾기 전에 대출 카드부터 내도 되나요?" 되묻는 말로 앞뒤 차례가 바뀌면 어떻게 되는지 말하게 한다. 말 하나가 두 가지 일을 한꺼번에 담고 있으면 나누어 적게 한다.',
        task: '카드에 쓰인 말을 읽고, 책을 빌려 나오기까지 일어나는 차례대로 놓아요.',
        items: [
          { prompt: '도서관에서 책을 빌려 나오는 차례를 위에서부터 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: 'enter', text: '도서관에 들어가요' }, { id: 'look', text: '읽고 싶은 책을 찾아요' }, { id: 'desk', text: '대출 카드를 내밀어요' }, { id: 'bag', text: '책을 가방에 넣어요' }] }, hints: ['장소에 들어가는 일이 먼저, 가지고 나가는 일이 마지막이에요. 가운데에서는 책을 손에 넣는 일부터 따져요.'], target: { order: ['enter', 'look', 'desk', 'bag'] }, difficulty: 0.15 },
          { prompt: '빌린 책을 돌려주는 차례를 위에서부터 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: 'carry', text: '책을 들고 반납대로 가요' }, { id: 'hand', text: '사서 선생님께 책을 건네요' }, { id: 'ok', text: '반납 확인을 받아요' }, { id: 'out', text: '인사하고 나와요' }] }, hints: ['책이 내 손에서 선생님 손으로 옮겨 가는 순서를 생각하고, 마치는 말은 맨 끝에 놓아요.'], target: { order: ['carry', 'hand', 'ok', 'out'] }, difficulty: 0.25 },
          { prompt: '친구에게 책을 소개하는 말하기 차례를 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: 'name', text: '책 제목을 말해요' }, { id: 'story', text: '줄거리를 한두 문장으로 말해요' }, { id: 'why', text: '추천하는 까닭을 말해요' }, { id: 'ask', text: '친구의 생각을 물어요' }, { id: 'thanks', text: '들어 줘서 고맙다고 말해요' }] }, hints: ['무슨 책인지 알려 준 뒤 내용, 까닭, 친구의 생각 순서로 이어져요. 끝인사는 마지막이에요.'], target: { order: ['name', 'story', 'why', 'ask', 'thanks'] }, difficulty: 0.35 },
        ],
      },
      {
        title: '활동 2. 순서도 기호의 모양과 뜻 짝 짓기', tool: 'mindmap',
        teacher: '"둥근 모양은 어디서 시작하고 어디서 끝난다는 표시예요. 마름모는 무엇을 하라는 표시일까요?" 마름모 안에는 물음이 들어가고 그 물음에서 \'예\'와 \'아니요\'로 길이 갈라진다는 점을 짚는다. 마름모를 \'할 일\' 상자로 착각하는 학생에게 "마름모에서 화살표가 몇 갈래로 나가나요?"라고 묻는다.',
        task: '순서도 기호의 이름과 모양을 읽고, 그 기호가 나타내는 뜻 카드를 한 장씩 이어요.',
        items: [
          { prompt: '기호 이름마다 알맞은 뜻 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '순서도 기호', slots: [{ id: 'round', label: '둥근 모양' }, { id: 'box', label: '네모 모양' }, { id: 'dia', label: '마름모 모양' }], cards: ['시작과 끝', '해야 할 일 한 가지', '예·아니요로 길을 가름', '컴퓨터 화면 크기'] }, hints: ['둥근 모양은 처음과 마지막, 네모는 일하는 칸, 마름모는 길이 나뉘는 곳이에요. 모양이 하는 일을 떠올려 이어요.'], target: { match: { round: '시작과 끝', box: '해야 할 일 한 가지', dia: '예·아니요로 길을 가름' } }, difficulty: 0.15 },
          { prompt: '책 빌리기 순서도의 칸을 마름모와 네모로 나누어 보세요.', toolOptions: { topic: '책 빌리기 순서도', slots: ['네모(할 일)', '마름모(물음)'], cards: ['책을 찾아요', '책이 있나요?', '대출 카드를 내요', '카드를 가져왔나요?'] }, hints: ['글이 물음표로 끝나 예·아니요로 대답하는 칸인지, 해야 할 일을 말하는 칸인지 보고 나누어요.'], target: { sort: { '네모(할 일)': ['책을 찾아요', '대출 카드를 내요'], '마름모(물음)': ['책이 있나요?', '카드를 가져왔나요?'] } }, difficulty: 0.25 },
          { prompt: '순서도에서 화살표와 갈림길에 알맞은 설명을 골라 보세요.', toolOptions: { mode: 'pick', topic: '맞는 설명', cards: ['화살표는 다음에 할 일의 방향이에요', '마름모에서는 길이 둘로 갈라져요', '화살표 없이도 차례를 알 수 있어요', '네모 안에는 물음만 써요'] }, hints: ['화살표가 무엇을 알려 주는지, 마름모에서 길이 몇 갈래가 되는지 떠올려 알맞은 설명만 골라요.'], target: { pick: ['화살표는 다음에 할 일의 방향이에요', '마름모에서는 길이 둘로 갈라져요'] }, difficulty: 0.3,
            predict: { q: '순서도에서 마름모 칸에는 무엇이 들어갈까요?', options: ['예·아니요로 답하는 물음', '해야 할 일 한 가지', '이름만 들어가요'], answer: 0 },
            conclude: '마름모 칸에는 예·아니요로 답하는 물음이 들어가고, 답에 따라 길이 두 갈래로 나뉘어요.' },
        ],
      },
      {
        title: '활동 3. 프로그램을 따라가 거북이가 멈출 칸 찾기', tool: 'block-coding',
        teacher: '"손가락을 거북이라고 생각하고 블록 하나씩 따라가 보세요. 돌기 블록에서는 자리가 움직이나요?" 칸을 고르기 전에는 실행할 수 없다고 알려 준다. 방향이 바뀐 뒤 앞으로 블록이 어느 쪽으로 가는지 헷갈리는 학생에게 몸을 거북이가 보는 쪽으로 돌려 서 보게 한다.',
        task: '블록 프로그램을 차례대로 따라가 거북이가 멈추는 칸을 골라요.',
        levels: { easy: { cols: 4, rows: 3 }, base: {}, challenge: {} },
        items: [
          { prompt: '이 프로그램을 따라가면 거북이가 어느 칸에서 멈출까요? 그 칸을 골라요.', toolOptions: { mode: 'trace', cols: 5, rows: 4, start: { x: 0, y: 2, dir: 'E' }, program: ['fwd', 'fwd', 'right', 'fwd'], revealAfterCheck: true }, target: { end: { x: 2, y: 3 } }, difficulty: 0.25 },
          { prompt: '서쪽을 보고 시작하는 거북이는 어느 칸에서 멈출까요? 그 칸을 골라요.', toolOptions: { mode: 'trace', cols: 5, rows: 4, start: { x: 4, y: 3, dir: 'W' }, program: ['fwd', 'fwd', 'fwd', 'right', 'fwd', 'fwd'], revealAfterCheck: true }, target: { end: { x: 1, y: 1 } }, difficulty: 0.4 },
          { prompt: '위 칸에서 아래로 출발한 거북이가 두 번 도는 프로그램이에요. 멈출 칸을 골라요.', toolOptions: { mode: 'trace', cols: 4, rows: 4, start: { x: 0, y: 0, dir: 'S' }, program: ['fwd', 'fwd', 'left', 'fwd', 'fwd', 'left', 'fwd'], revealAfterCheck: true }, target: { end: { x: 2, y: 1 } }, difficulty: 0.5 },
        ],
      },
    ],
    exit: {
      teacher: '"순서도로 그리면 말로 할 때보다 무엇이 좋은가요?" 갈림길이 한눈에 보인다는 점을 말하게 한다. 출구 2번에서 마름모를 \'할 일\' 칸이라고 고른 학생에게 "마름모에서 화살표가 몇 개 나가는지 세어 볼까요?"라고 묻는다. 다음 시간에는 내가 고른 생활 문제의 해결 절차를 빠짐없이 적어 친구에게 따라 하게 한다고 예고한다.',
      items: [
        { type: 'tool', tool: 'kitchen', options: { mode: 'order', cards: [{ id: 'pick', text: '읽을 책을 골라요' }, { id: 'take', text: '책을 빌려요' }, { id: 'read', text: '집에서 읽어요' }] }, prompt: '책을 읽기까지의 차례대로 놓아 보세요.', target: { order: ['pick', 'take', 'read'] }, difficulty: 0.1 },
        { type: 'choice', prompt: '순서도에서 예·아니요로 길이 갈라지는 곳의 모양은 무엇인가요?', options: ['둥근 모양', '네모 모양', '마름모 모양'], answer: 2, difficulty: 0.15, explain: '마름모 칸에서 예·아니요 두 길로 갈라져요.' },
        { type: 'short', prompt: '말로 쓴 차례와 순서도를 견주어 순서도가 더 좋은 점을 한 가지 쓰세요.' },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
    ws: {
      title: '순서도 기호와 차례',
      items: [
        { type: 'figure', prompt: '프로그램을 따라가 거북이가 멈추는 칸에 ○ 하세요.', tool: 'block-coding', options: { mode: 'trace', cols: 4, rows: 4, start: { x: 0, y: 3, dir: 'E' }, program: ['fwd', 'fwd', 'left', 'fwd', 'fwd'], printProgram: true }, figures: [{ state: {}, caption: '앞으로 → 앞으로 → 왼쪽으로 돌기 → 앞으로 → 앞으로' }], answer: '(2, 1)' },
        { type: 'choice', prompt: '순서도에서 시작과 끝을 나타내는 모양에 ○ 하세요.', options: ['둥근 모양', '마름모 모양', '화살표'], answer: '둥근 모양' },
        { type: 'table', prompt: '기호 이름과 뜻을 선으로 이어 쓰듯 짝 지어 쓰세요.', columns: ['기호', '뜻'], cells: [['둥근 모양', ''], ['네모 모양', ''], ['마름모 모양', '']] },
        { type: 'short', prompt: '책을 빌리는 일에서 예·아니요로 물어야 하는 물음 한 가지를 써 보세요.' },
      ],
      easy: {
        note: '둥근 모양은 시작과 끝, 네모는 할 일, 마름모는 예·아니요 물음이에요.',
        items: [
          { type: 'figure', prompt: '프로그램을 따라가 멈추는 칸에 ○ 하세요.', tool: 'block-coding', options: { mode: 'trace', cols: 4, rows: 3, start: { x: 0, y: 2, dir: 'E' }, program: ['fwd', 'left', 'fwd'], printProgram: true }, figures: [{ state: {}, caption: '앞으로 → 왼쪽으로 돌기 → 앞으로' }], answer: '(1, 1)' },
          { type: 'choice', prompt: '다음에 할 일의 방향을 알려 주는 것에 ○ 하세요.', options: ['화살표', '글자 크기'], answer: '화살표' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '예·아니요로 길이 갈라지는 곳의 모양은 ___ 모양이에요.', answer: '마름모' },
          { type: 'short', prompt: '책을 빌릴 때 가장 먼저 할 일을 쓰세요.' },
        ],
      },
    },
    diff: ['차례 놓기에서 맞게 놓으면 초록 테두리가 생기고, 따라가기는 4×3 작은 판에서 해요.', '모두 놓은 뒤 확인을 눌러 스스로 고쳐요.', '책 소개 차례의 카드가 다섯 장으로 늘고, 따라가기 문항은 방향이 더 많이 바뀌어요.'],
    notes: '자주 보이는 어려움: ① 말로 쓴 차례가 사람마다 달라도 괜찮다고 여긴다 → 처음 해 보는 사람이 그대로 따라 할 수 있는지 묻는다. ② 마름모를 할 일 칸으로 쓴다 → 마름모에서 예·아니요 두 길이 나가는지 센다. ③ 돌기 블록이 움직임이라고 생각한다 → 자리는 그대로이고 보는 방향만 바뀐다고 실행으로 확인한다.',
  }));

  // ───────────────────────── 3차시 (core) 생활 문제 해결 절차 쓰기와 고치기 ─────────────────────────
  L.push(lesson(3, '친구가 따라 해 보며 막힌 곳을 찾아 절차 고치기',
    '생활 문제의 해결 절차를 빠짐없이 쓰고, 친구가 따라 할 때 막히는 문장을 찾아 분명하게 고칠 수 있다.', ['[6실05-01]'], {
    ill: ['two children following a paper recipe card step by step at a table with a umbrella and a small paper turtle robot beside them', '빠진 단계는 없을까요?', 2],
    intro: {
      teacher: '"우산 챙기는 방법을 쓴 쪽지를 받았는데 \'적당히 챙겨요\'라고만 적혀 있다면 어떨까요?" 막막한 느낌을 말하게 한다. 시연 단추로 \'적당히\' 문장이 분명한 문장으로 바뀌는 모습을 보여 주고 "따라 하는 사람이 막히면 절차가 덜 쓰인 거예요."라고 말한다. 내가 쓴 절차는 내가 아니까 괜찮다고 여기는 학생에게는 "내일의 내가 아니라 처음 보는 친구가 읽는다면요?"라고 묻는다.',
      student: '\'적당히 챙겨요\'라고만 적힌 쪽지를 받았을 때 무엇이 막힐지 말해 봅시다.',
      demo: { tool: 'mindmap', options: { mode: 'pick', topic: '막히는 문장', cards: ['적당히 챙겨요', '우산을 가방 옆 주머니에 넣어요'], shuffle: false }, sequence: [{ pick: ['적당히 챙겨요'] }] },
    },
    acts: [
      {
        title: '활동 1. 따라 하다 막히는 문장 골라내기', tool: 'mindmap',
        teacher: '"이 문장을 처음 보는 친구가 그대로 따라 할 수 있나요? 몇 개, 어디에, 얼마나를 알 수 있나요?" 수나 양이 없는 낱말(\'조금\', \'알맞게\', \'적당히\')이 막힘의 단서임을 짚는다. 분명한 문장을 막히는 문장으로 고른 학생에게는 숫자나 장소가 쓰였는지 다시 보게 한다.',
        task: '친구가 따라 하다 막힐 것 같은 문장만 바구니에 넣어요. 몇 개·어디에·얼마나가 없으면 막혀요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          { prompt: '빨래를 너는 절차에서 따라 하다 막히는 문장만 골라 보세요.', toolOptions: { mode: 'pick', topic: '막히는 문장', cards: ['빨래를 적당히 털어요', '건조대 가운데 줄에 양말 두 켤레를 널어요', '알맞게 말려요', '바지는 허리를 집게 두 개로 집어요'] }, hints: ['몇 개인지, 어디인지, 얼마나인지가 빠진 문장을 찾아요. 처음 보는 친구가 따라 할 수 있는지 물어보며 골라요.'], target: { pick: ['빨래를 적당히 털어요', '알맞게 말려요'] }, difficulty: 0.15 },
          { prompt: '화분에 물 주는 절차에서 막히는 문장만 골라 보세요.', toolOptions: { mode: 'pick', topic: '막히는 문장', cards: ['물을 조금 줘요', '종이컵 한 컵 가득 물을 부어요', '흙이 마르면 줘요', '흙을 손가락으로 두 마디 눌러 보고 말랐으면 줘요'] }, hints: ['\'조금\', \'마르면\'처럼 사람마다 다르게 읽을 수 있는 말을 찾아요. 기준이 분명한 문장은 그대로 둬요.'], target: { pick: ['물을 조금 줘요', '흙이 마르면 줘요'] }, difficulty: 0.25 },
          { prompt: '막히는 문장을 분명하게 고친 문장끼리 짝 지어 보세요.', toolOptions: { mode: 'match', topic: '분명하게 고치기', slots: [{ id: 'shoe', label: '신발을 정리해요' }, { id: 'desk', label: '책상을 깨끗이 해요' }, { id: 'cup', label: '컵에 물을 따라요' }], cards: ['신발 한 켤레씩 짝을 맞춰 신발장 아래 칸에 넣어요', '책을 꺼내 가방에 넣고 마른 걸레로 상판을 한 번 닦아요', '컵의 눈금선까지 물을 따라요', '손으로 대충 밀어 놓아요'] }, hints: ['몇 개·어디에·어떻게가 들어 있는 문장이 왼쪽 막연한 문장을 가장 분명하게 풀어 줘요.'], target: { match: { shoe: '신발 한 켤레씩 짝을 맞춰 신발장 아래 칸에 넣어요', desk: '책을 꺼내 가방에 넣고 마른 걸레로 상판을 한 번 닦아요', cup: '컵의 눈금선까지 물을 따라요' } }, difficulty: 0.3,
            predict: { q: '\'조금\'이나 \'적당히\'가 쓰인 절차는 따라 하기 쉬울까요?', options: ['쉬워요', '어려워요', '잘 모르겠어요'], answer: 1 },
            conclude: '조금·적당히 같은 말은 사람마다 다르게 읽혀요. 수와 장소를 쓰면 누구나 같은 일을 해요.' },
        ],
      },
      {
        title: '활동 2. 바위를 피해 별을 모으는 절차 짜기', tool: 'block-coding',
        teacher: '"바위가 있는 칸을 한 번에 지나갈 수 있나요? 돌아서 가려면 어디에서 돌아야 할까요?" 먼저 판 위에서 손가락으로 길을 짚어 본 뒤 블록으로 옮기게 한다. 별 하나를 빼먹고 깃발로 가는 학생에게 "별을 모두 모으라는 목표를 다시 읽어 볼까요?"라고 묻는다.',
        task: '바위를 피하고 별을 모두 지나서 깃발에 닿는 절차를 빠짐없이 짜요.',
        levels: { easy: { cols: 4, rows: 4, blocks: ['fwd', 'left', 'right'] }, base: { blocks: ['fwd', 'left', 'right'] }, challenge: { blocks: ['fwd', 'left', 'right', 'rep'] } },
        items: [
          { prompt: '바위를 피해 돌아서 깃발에 닿도록 절차를 짜 보세요.', toolOptions: { cols: 5, rows: 3, start: { x: 0, y: 1, dir: 'E' }, goal: { x: 4, y: 1 }, rocks: [[2, 1]] }, target: { reach: true }, difficulty: 0.25 },
          { prompt: '별 두 개를 모두 모은 뒤 깃발에 닿도록 절차를 짜 보세요.', toolOptions: { cols: 5, rows: 4, start: { x: 0, y: 3, dir: 'E' }, goal: { x: 4, y: 3 }, stars: [[2, 3], [2, 1]] }, target: { reach: true, stars: true }, difficulty: 0.4 },
          { prompt: '바위 두 개 사이를 지나 별까지 먹고 깃발에 닿는 절차를 짜 보세요.', toolOptions: { cols: 5, rows: 4, start: { x: 0, y: 0, dir: 'S' }, goal: { x: 4, y: 3 }, rocks: [[1, 1], [3, 2]], stars: [[0, 2]] }, target: { reach: true, stars: true }, difficulty: 0.5,
            conclude: '길이 막힐 때는 돌아가는 단계를 새로 넣어야 해요. 한 단계라도 빠지면 거북이가 부딪혀요.' },
        ],
      },
      {
        title: '활동 3. 빠진 단계를 넣어 절차 완성하기', tool: 'kitchen',
        teacher: '"이 카드들만 놓으면 어디에서 막히나요?" 빠진 단계를 찾아 말하게 한 뒤 카드를 넣어 완성한다. 차례만 맞으면 완성이라고 여기는 학생에게 "처음 보는 친구가 확인하는 단계도 쓰여 있나요?"라고 묻는다.',
        task: '카드를 읽고 빠짐없이 놓은 차례를 만들어요. 알림이나 확인 단계도 빠뜨리지 않아요.',
        items: [
          { prompt: '우산을 챙겨 나가는 절차를 빠짐없이 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: 'weather', text: '오늘 날씨 예보를 봐요' }, { id: 'rain', text: '비가 온다고 하면 우산을 꺼내요' }, { id: 'dry', text: '우산이 젖지 않게 가방 옆에 놓아요' }, { id: 'door', text: '현관문을 닫고 나가요' }] }, hints: ['예보를 알아야 우산을 꺼낼지 정해요. 알아보기, 꺼내기, 놓기, 나가기 가운데 앞 일이 다음 일의 까닭이 되는 순서예요.'], target: { order: ['weather', 'rain', 'dry', 'door'] }, difficulty: 0.2 },
          { prompt: '알림장 쓰는 절차를 확인 단계까지 넣어 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: 'ask', text: '선생님 말씀을 끝까지 들어요' }, { id: 'write', text: '알림장에 숙제를 적어요' }, { id: 'read', text: '짝과 바꿔 읽으며 빠진 곳을 찾아요' }, { id: 'fix', text: '빠진 내용을 보태 써요' }, { id: 'sign', text: '이름을 쓰고 가방에 넣어요' }] }, hints: ['듣고 쓴 뒤에 바로 마치지 않고 확인해서 고치는 단계가 있어요. 쓰기 뒤에 살펴보고 고치는 순서를 찾아요.'], target: { order: ['ask', 'write', 'read', 'fix', 'sign'] }, difficulty: 0.35 },
          { prompt: '쉬는 시간에 쓴 칠판을 지우는 절차를 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: 'dust', text: '칠판 지우개의 가루를 털어요' }, { id: 'top', text: '칠판 위쪽부터 지워요' }, { id: 'down', text: '아래쪽으로 한 줄씩 내려와요' }, { id: 'wipe', text: '젖은 걸레로 마무리 닦아요' }] }, hints: ['지우기 전에 도구를 준비해요. 지우는 방향은 한쪽에서 시작해 끝까지 이어져요. 마무리 닦기는 지운 뒤예요.'], target: { order: ['dust', 'top', 'down', 'wipe'] }, difficulty: 0.4 },
        ],
      },
    ],
    exit: {
      teacher: '"오늘 막히는 문장을 어떻게 고쳤는지 한 가지 말해 볼까요?" 수와 장소가 들어갔는지 확인한다. 출구 1번에서 \'알맞게 말려요\'를 고르지 못한 학생에게 "알맞게가 몇 시간인가요?"라고 되묻는다. 다음 시간에는 컴퓨터가 알아듣는 명령 블록으로 절차를 옮겨 본다고 예고한다.',
      items: [
        { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '막히는 문장', cards: ['설거지를 알맞게 해요', '컵 세 개를 먼저 헹궈요', '조금 기다려요'] }, prompt: '친구가 따라 하다 막힐 문장만 골라 보세요.', target: { pick: ['설거지를 알맞게 해요', '조금 기다려요'] }, difficulty: 0.15 },
        { type: 'choice', prompt: '절차를 분명하게 고치려면 무엇을 쓰면 좋을까요?', options: ['몇 개·어디에·얼마나', '더 짧은 말', '재미있는 말'], answer: 0, difficulty: 0.2, explain: '수와 장소, 정도가 들어 있어야 누구나 같은 일을 해요.' },
        { type: 'short', prompt: '내가 쓴 절차에서 막힌 문장 하나와 고친 문장을 쓰세요.' },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
    ws: {
      title: '친구가 따라 하는 절차',
      items: [
        { type: 'figure', prompt: '바위를 피해 별을 모으고 깃발까지 가는 길을 화살표로 그리세요.', tool: 'block-coding', options: { cols: 5, rows: 4, start: { x: 0, y: 3, dir: 'E' }, goal: { x: 4, y: 0 }, rocks: [[2, 3]], stars: [[1, 1]] }, figures: [{ state: { program: [] }, caption: '별 모으고 깃발까지' }], answer: '예: 앞으로, 왼쪽 돌기, 앞으로 2, 오른쪽 돌기, 앞으로 3 …' },
        { type: 'choice', prompt: '따라 하기 쉬운 문장에 ○ 하세요.', options: ['컵에 물을 적당히 따라요', '컵의 눈금선까지 물을 따라요', '물을 알아서 따라요'], answer: '컵의 눈금선까지 물을 따라요' },
        { type: 'table', prompt: '막히는 문장을 분명한 문장으로 고쳐 쓰세요.', columns: ['막히는 문장', '고친 문장'], cells: [['책을 조금 꽂아요', ''], ['신발을 알맞은 곳에 놓아요', ''], ['', '']] },
        { type: 'short', prompt: '내가 쓴 절차를 친구가 따라 했을 때 막힌 곳과 고친 방법을 쓰세요.' },
      ],
      easy: {
        note: '몇 개, 어디에, 얼마나가 쓰여 있어야 친구가 막히지 않아요.',
        items: [
          { type: 'figure', prompt: '거북이가 깃발에 닿는 길을 화살표로 그리세요.', tool: 'block-coding', options: { cols: 4, rows: 3, start: { x: 0, y: 2, dir: 'E' }, goal: { x: 3, y: 0 } }, figures: [{ state: { program: [] }, caption: '깃발까지' }], answer: '예: 앞으로 3, 왼쪽 돌기, 앞으로 2' },
          { type: 'choice', prompt: '수가 분명한 문장에 ○ 하세요.', options: ['물을 조금 부어요', '물을 한 컵 부어요'], answer: '물을 한 컵 부어요' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '친구가 따라 하다 ___ 문장을 분명하게 고쳐요.', answer: '막히는' },
          { type: 'short', prompt: '오늘 고친 문장을 한 줄 쓰세요.' },
        ],
      },
    },
    diff: ['막히는 문장 고르기에서 맞게 고르면 초록 테두리가 생기고, 거북이는 작은 판에서 돌기 블록만 써요.', '모두 놓은 뒤 확인을 눌러 스스로 고쳐요.', '거북이 문제에 반복 블록이 더해지고, 알림장 절차는 확인·고치기 단계가 들어간 다섯 장이에요.'],
    notes: '자주 보이는 어려움: ① 내가 아는 단계는 적지 않아도 된다고 여긴다 → 처음 보는 친구가 읽는다고 생각하게 한다. ② \'조금\', \'알맞게\' 같은 말이 분명하다고 여긴다 → 숫자나 눈금, 장소로 바꿔 쓰게 한다. ③ 별을 빼먹고 깃발로 간다 → 목표 문장을 다시 읽고 별을 먼저 센다.',
  }));

  // ───────────────────────── 4차시 (core) 명령은 적힌 차례대로 ─────────────────────────
  L.push(lesson(4, '같은 블록 네 개를 순서만 바꾸어 거북이 멈추는 곳 견주기',
    '명령이 적힌 차례대로 하나씩 실행됨을 알고, 같은 명령도 차례를 바꾸면 결과가 달라지는 경우를 찾아 말할 수 있다.', ['[6실05-02]'], {
    ill: ['a paper turtle robot taking different paths on a checkered board depending on the order of arrow blocks lined up above it', '차례가 바뀌면 길도 바뀌어요', 1],
    intro: {
      teacher: '"선생님이 \'오른쪽으로 돌아요, 세 걸음 걸어요\'라고 말했을 때와 \'세 걸음 걸어요, 오른쪽으로 돌아요\'라고 말했을 때 서는 자리가 같을까요?" 두 학생이 직접 걸어 보게 한다. 시연 단추로 같은 블록 두 개가 순서만 바뀌어 거북이가 서로 다른 칸에 서는 모습을 보여 주고 "컴퓨터는 적힌 순서대로만 해요. 뜻을 짐작해서 순서를 바꾸지 않아요."라고 말한다. 명령을 넣으면 컴퓨터가 알아서 맞추어 준다고 여기는 학생에게는 "순서를 바꾸어 적으면 컴퓨터는 어떻게 움직일까요?"라고 되묻는다.',
      student: '\'오른쪽으로 돌아요, 세 걸음 걸어요\'와 \'세 걸음 걸어요, 오른쪽으로 돌아요\' 중 서는 자리가 같은지 걸어 보며 말해 봅시다.',
      demo: { tool: 'block-coding', options: { mode: 'trace', cols: 4, rows: 3, start: { x: 0, y: 2, dir: 'E' }, program: ['fwd', 'left', 'fwd'] }, sequence: [{ end: { x: 1, y: 1 } }] },
    },
    acts: [
      {
        title: '활동 1. 순서만 다른 프로그램의 끝 칸 따라가기', tool: 'block-coding',
        teacher: '"세 프로그램이 쓴 블록은 모두 같아요. 그런데 끝 칸이 같을까요?" 먼저 예상을 말하게 한 뒤 손가락으로 따라가며 확인한다. 돌기 블록이 어디에 있든 그 뒤의 앞으로가 달라진다는 점을 짚는다. 블록의 수가 같으면 결과도 같다고 말하는 학생에게 "블록의 개수가 아니라 순서를 보세요."라고 말한다.',
        task: '쓰인 블록은 같지만 순서가 다른 프로그램을 따라가 거북이가 멈추는 칸을 골라요.',
        levels: { easy: { cols: 5, rows: 4 }, base: {}, challenge: {} },
        items: [
          { prompt: '앞으로·앞으로·왼쪽으로 돌기·앞으로를 차례로 한 프로그램이에요. 멈출 칸을 골라요.', toolOptions: { mode: 'trace', cols: 5, rows: 4, start: { x: 0, y: 3, dir: 'E' }, program: ['fwd', 'fwd', 'left', 'fwd'], revealAfterCheck: true }, target: { end: { x: 2, y: 2 } }, difficulty: 0.2 },
          { prompt: '같은 블록인데 왼쪽으로 돌기를 맨 앞에 놓은 프로그램이에요. 멈출 칸을 골라요.', toolOptions: { mode: 'trace', cols: 5, rows: 4, start: { x: 0, y: 3, dir: 'E' }, program: ['left', 'fwd', 'fwd', 'fwd'], revealAfterCheck: true }, target: { end: { x: 0, y: 0 } }, difficulty: 0.3,
            predict: { q: '같은 블록을 순서만 바꾸면 거북이가 멈추는 칸도 같을까요?', options: ['같아요', '달라요', '잘 모르겠어요'], answer: 1 },
            conclude: '쓰인 블록이 같아도 순서가 다르면 멈추는 칸이 달라요. 컴퓨터는 적힌 순서대로만 해요.' },
          { prompt: '이번에는 앞으로를 한 번 간 뒤 왼쪽으로 돌기를 놓았어요. 멈출 칸을 골라요.', toolOptions: { mode: 'trace', cols: 5, rows: 4, start: { x: 0, y: 3, dir: 'E' }, program: ['fwd', 'left', 'fwd', 'fwd'], revealAfterCheck: true }, target: { end: { x: 1, y: 1 } }, difficulty: 0.35 },
        ],
      },
      {
        title: '활동 2. 차례를 맞추어 깃발까지 가는 프로그램 만들기', tool: 'block-coding',
        teacher: '"돌기 블록을 어디에 놓느냐에 따라 거북이가 꺾이는 자리가 달라져요. 꺾이고 싶은 칸에서 몇 번 앞으로 가야 할까요?" 판에 칸 수를 직접 세어 보게 한다. 한 번 실행해 부딪혔다면 \'처음으로\'를 누르고 부딪힌 바로 앞 블록부터 살펴 고치게 한다.',
        task: '돌기 블록을 놓을 자리를 정해 거북이를 깃발까지 보내요. 안 되면 처음으로 돌아가 차례를 바꾸어 봐요.',
        levels: { easy: { blocks: ['fwd', 'left', 'right'] }, base: { blocks: ['fwd', 'left', 'right'] }, challenge: { blocks: ['fwd', 'left', 'right', 'rep'] } },
        items: [
          { prompt: '앞으로 두 칸 간 뒤 위로 꺾어 깃발에 닿도록 프로그램을 만들어 보세요.', toolOptions: { cols: 5, rows: 4, start: { x: 0, y: 3, dir: 'E' }, goal: { x: 2, y: 0 } }, target: { reach: true }, difficulty: 0.2 },
          { prompt: '바위 앞에서 꺾어 돌아 깃발에 닿도록 프로그램을 만들어 보세요.', toolOptions: { cols: 5, rows: 3, start: { x: 0, y: 2, dir: 'E' }, goal: { x: 4, y: 2 }, rocks: [[2, 2]] }, target: { reach: true }, difficulty: 0.35 },
          { prompt: '별 하나를 지난 뒤 아래로 꺾어 깃발에 닿도록 프로그램을 만들어 보세요.', toolOptions: { cols: 5, rows: 4, start: { x: 0, y: 0, dir: 'E' }, goal: { x: 3, y: 3 }, stars: [[2, 0]] }, target: { reach: true, stars: true }, difficulty: 0.4 },
        ],
      },
      {
        title: '활동 3. 차례가 결과를 바꾸는 일 찾기', tool: 'mindmap',
        teacher: '"양말과 신발은 어느 쪽을 먼저 신어야 하나요? 필통에 연필과 지우개를 넣을 때는요?" 일상에서도 순서가 결과를 바꾸는 일과 바꾸지 않는 일이 있음을 짚는다. 모든 일이 순서가 중요하다고 말하는 학생에게 "연필과 지우개를 바꿔 넣으면 달라지는 것이 있나요?"라고 묻는다.',
        task: '카드를 읽고 순서를 바꾸면 결과가 달라지는 일을 가려요. 컴퓨터 명령도 같은 눈으로 봐요.',
        items: [
          { prompt: '순서를 바꾸면 결과가 달라지는 일만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '순서가 중요한 일', cards: ['양말을 신은 뒤 신발을 신어요', '필통에 지우개와 연필을 넣어요', '손을 씻은 뒤 밥을 먹어요', '교과서와 공책을 가방에 넣어요'] }, hints: ['순서를 바꾸면 하기 어렵거나 엉뚱해지는 일인지, 바꿔도 같은 결과인지 따져서 골라요.'], target: { pick: ['양말을 신은 뒤 신발을 신어요', '손을 씻은 뒤 밥을 먹어요'] }, difficulty: 0.15 },
          { prompt: '명령의 순서를 바꾸면 결과가 달라지는지에 따라 나누어 보세요.', toolOptions: { topic: '순서 바꾸기', slots: ['달라져요', '같아요'], cards: ['돌기 다음에 앞으로 가기', '앞으로 가기 다음에 돌기', '앞으로 한 번, 앞으로 한 번', '오른쪽 돌기 다음에 왼쪽 돌기와 앞으로'] }, hints: ['방향을 바꾸는 명령 앞뒤에 앞으로가 오는지, 같은 명령만 이어지는지 보고 나누어요.'], target: { sort: { 달라져요: ['돌기 다음에 앞으로 가기', '앞으로 가기 다음에 돌기'], 같아요: ['앞으로 한 번, 앞으로 한 번'] } }, difficulty: 0.3 },
          { prompt: '로봇 청소기에 시킬 명령을 알맞은 차례로 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: 'power', text: '전원을 켜요' }, { id: 'go', text: '청소 시작 단추를 눌러요' }, { id: 'home', text: '충전대로 돌아가요' }, { id: 'bin', text: '먼지통을 비워요' }] }, hints: ['켜야 시작할 수 있고, 일을 마친 뒤에야 돌아가거나 비워요. 앞 단계가 뒤 단계의 바탕이 되는 순서를 찾아요.'], target: { order: ['power', 'go', 'home', 'bin'] }, difficulty: 0.35 },
        ],
      },
    ],
    exit: {
      teacher: '"오늘 같은 블록인데 결과가 달라진 까닭을 한 문장으로 말해 볼까요?" 순서 때문이라는 말이 나오는지 듣는다. 출구 1번에서 끝 칸을 잘못 고른 학생에게 "돌기 블록 뒤에 오는 앞으로가 어느 쪽으로 가는지 손으로 따라가 볼까요?"라고 되묻는다. 다음 시간에는 똑같은 블록이 여러 번 이어질 때 반복 블록으로 줄여 본다고 예고한다.',
      items: [
        { type: 'tool', tool: 'block-coding', options: { mode: 'trace', cols: 4, rows: 3, start: { x: 0, y: 2, dir: 'E' }, program: ['fwd', 'fwd', 'left', 'fwd'], revealAfterCheck: true }, prompt: '이 프로그램을 따라가 거북이가 멈추는 칸을 골라 보세요.', target: { end: { x: 2, y: 1 } }, difficulty: 0.2 },
        { type: 'choice', prompt: '같은 블록 네 개를 순서만 바꾸었을 때 맞는 말은 무엇인가요?', options: ['결과가 언제나 같아요', '결과가 달라질 수 있어요', '실행이 되지 않아요'], answer: 1, difficulty: 0.2, explain: '컴퓨터는 적힌 순서대로 실행하므로 순서가 바뀌면 결과가 달라질 수 있어요.' },
        { type: 'short', prompt: '순서를 바꾸면 결과가 달라지는 우리 생활의 일 한 가지를 쓰세요.' },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
    ws: {
      title: '순서가 바꾸는 결과',
      items: [
        { type: 'figure', prompt: '프로그램을 따라가 거북이가 멈추는 칸에 ○ 하세요.', tool: 'block-coding', options: { mode: 'trace', cols: 5, rows: 4, start: { x: 0, y: 3, dir: 'E' }, program: ['fwd', 'left', 'fwd', 'right', 'fwd'], printProgram: true }, figures: [{ state: {}, caption: '앞으로 → 왼쪽 돌기 → 앞으로 → 오른쪽 돌기 → 앞으로' }], answer: '(2, 2)' },
        { type: 'figure', prompt: '같은 블록인데 순서를 바꾼 프로그램이에요. 멈추는 칸에 ○ 하세요.', tool: 'block-coding', options: { mode: 'trace', cols: 5, rows: 4, start: { x: 0, y: 3, dir: 'E' }, program: ['left', 'fwd', 'right', 'fwd', 'fwd'], printProgram: true }, figures: [{ state: {}, caption: '왼쪽 돌기 → 앞으로 → 오른쪽 돌기 → 앞으로 → 앞으로' }], answer: '(2, 2)' },
        { type: 'choice', prompt: '순서를 바꾸면 결과가 달라지는 일에 ○ 하세요.', options: ['양말 신고 신발 신기', '연필과 지우개 넣기', '책상 위 컵 옮기기'], answer: '양말 신고 신발 신기' },
        { type: 'table', prompt: '순서를 바꾸기 전과 후의 결과를 비교해 쓰세요.', columns: ['프로그램', '멈춘 칸'], cells: [['앞으로 앞으로 왼쪽 앞으로', ''], ['왼쪽 앞으로 앞으로 앞으로', ''], ['', '']] },
        { type: 'short', prompt: '컴퓨터가 명령을 실행할 때 순서가 중요한 까닭을 쓰세요.' },
      ],
      easy: {
        note: '컴퓨터는 적힌 순서대로 한 개씩 해요. 돌기 블록 뒤에 오는 앞으로는 바뀐 방향으로 가요.',
        items: [
          { type: 'figure', prompt: '프로그램을 따라가 멈추는 칸에 ○ 하세요.', tool: 'block-coding', options: { mode: 'trace', cols: 4, rows: 3, start: { x: 0, y: 2, dir: 'E' }, program: ['fwd', 'fwd', 'left', 'fwd'], printProgram: true }, figures: [{ state: {}, caption: '앞으로 → 앞으로 → 왼쪽 돌기 → 앞으로' }], answer: '(2, 1)' },
          { type: 'choice', prompt: '컴퓨터는 명령을 어떻게 실행하나요?', options: ['적힌 순서대로', '마음대로 순서를 바꾸어'], answer: '적힌 순서대로' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '같은 블록도 ___가 다르면 결과가 달라져요.', answer: '순서' },
          { type: 'short', prompt: '오늘 가장 놀라웠던 점을 쓰세요.' },
        ],
      },
    },
    diff: ['따라가기에서 쓰이는 칸이 작고, 거북이 만들기에서는 앞으로·돌기 블록만 써요.', '모두 풀고 확인을 눌러 스스로 고쳐요.', '거북이 만들기에 반복 블록이 더해지고, 따라가기 문제는 돌기가 두 번 이상 나와요.'],
    notes: '자주 보이는 어려움: ① 컴퓨터가 뜻을 알아서 순서를 맞추어 준다고 여긴다 → 적힌 그대로만 한다고 걸어 보며 확인한다. ② 블록 개수가 같으면 결과도 같다고 말한다 → 순서를 바꾼 두 프로그램의 끝 칸을 나란히 견주게 한다. ③ 돌기 블록 뒤의 앞으로가 어느 쪽인지 헷갈린다 → 몸을 거북이 방향으로 돌려 서 본다.',
  }));

  // ───────────────────────── 5차시 (practice) 반복 블록으로 줄이기 ─────────────────────────
  L.push(lesson(5, '똑같은 블록이 이어질 때 반복 블록으로 줄여 쓰기',
    '같은 명령이 되풀이되는 부분을 찾아 반복 블록으로 줄이고, 반복 블록이 든 프로그램을 따라가 결과를 말할 수 있다.', ['[6실05-02]'], {
    ill: ['a paper turtle robot walking a staircase path on a checkered board with a loop bracket made of ribbon wrapping four repeating arrow blocks', '같은 일이 되풀이돼요', 2],
    intro: {
      teacher: '"줄넘기를 열 번 뛴다고 할 때 \'뛰어요\'를 열 번 적을까요, \'열 번 뛰어요\'라고 적을까요?" 짧게 적는 쪽이 읽기도 고치기도 쉽다는 것을 말하게 한다. 시연 단추로 앞으로 블록 네 개가 반복 블록 하나로 줄어드는 모습을 보여 주고 "되풀이되는 묶음을 찾아 반복으로 감싸요."라고 말한다. 반복 블록 안에 모든 블록을 넣으려는 학생에게는 "되풀이되는 것만 안에 넣고, 한 번만 하는 것은 밖에 둬요."라고 짚는다.',
      student: '줄넘기를 열 번 뛰는 일을 짧게 적는 방법을 짝과 말해 봅시다.',
      demo: { tool: 'block-coding', options: { cols: 5, rows: 3, start: { x: 0, y: 1, dir: 'E' }, goal: { x: 4, y: 1 }, blocks: ['fwd', 'left', 'right', 'rep'] }, sequence: [{ reach: true, use: ['rep'], maxBlocks: 3 }] },
    },
    acts: [
      {
        title: '활동 1. 반복 블록으로 블록 수 줄이기', tool: 'block-coding',
        teacher: '"같은 블록이 몇 번 이어지나요? 그 묶음을 반복으로 감싸 볼까요?" 반복 수는 ↑/↓로 바꾼다고 알려 준다. 반복 블록을 놓고 나서 안에 아무것도 넣지 않는 학생에게 "반복할 블록이 안에 있어야 일을 해요."라고 말한다.',
        task: '반복 블록을 써서 정해진 블록 수 안에서 거북이를 깃발까지 보내요.',
        levels: { easy: { blocks: ['fwd', 'left', 'right', 'rep'] }, base: { blocks: ['fwd', 'left', 'right', 'rep'] }, challenge: { blocks: ['fwd', 'left', 'right', 'rep'] } },
        items: [
          { prompt: '반복 블록을 써서 블록 3개 이하로 거북이를 오른쪽 끝 깃발까지 보내요.', toolOptions: { cols: 7, rows: 3, start: { x: 0, y: 2, dir: 'E' }, goal: { x: 6, y: 2 } }, target: { reach: true, use: ['rep'], maxBlocks: 3 }, difficulty: 0.25 },
          { prompt: '계단 모양 길을 반복 블록으로 짧게 만들어요. 블록은 5개 이하예요.', toolOptions: { cols: 5, rows: 4, start: { x: 0, y: 3, dir: 'E' }, goal: { x: 3, y: 0 } }, target: { reach: true, use: ['rep'], maxBlocks: 5 }, difficulty: 0.45 },
          { prompt: '별을 모두 지나 깃발까지, 반복 블록을 두 번 써서 블록 6개 이하로 만들어요.', toolOptions: { cols: 5, rows: 5, start: { x: 0, y: 4, dir: 'N' }, goal: { x: 4, y: 0 }, stars: [[0, 2], [2, 0]] }, target: { reach: true, stars: true, use: ['rep'], maxBlocks: 6 }, difficulty: 0.5,
            conclude: '되풀이되는 부분은 반복 블록으로 감싸면 블록 수가 줄고 고치기도 쉬워져요.' },
        ],
      },
      {
        title: '활동 2. 반복 블록이 든 프로그램 따라가기', tool: 'block-coding',
        teacher: '"반복 블록은 안의 블록을 지정한 횟수만큼 처음부터 끝까지 되풀이해요. 한 번 돌 때마다 어디에 서 있나요?" 한 바퀴를 돌 때마다 위치와 방향을 적게 한다. 반복 수를 앞으로 가는 칸 수로 오해하는 학생에게 "반복 안에 앞으로가 몇 개 있나요?"라고 묻는다.',
        task: '반복 블록이 든 프로그램을 한 바퀴씩 따라가 거북이가 멈추는 칸을 골라요.',
        levels: { easy: { cols: 6, rows: 4 }, base: {}, challenge: {} },
        items: [
          { prompt: '앞으로를 네 번 되풀이한 뒤 왼쪽으로 돌아 한 칸 가요. 멈출 칸을 골라요.', toolOptions: { mode: 'trace', cols: 6, rows: 3, start: { x: 0, y: 1, dir: 'E' }, program: ['rep:4', 'fwd', 'end', 'left', 'fwd'], revealAfterCheck: true }, target: { end: { x: 4, y: 0 } }, difficulty: 0.3 },
          { prompt: '반복 안에서 앞으로 간 뒤 오른쪽으로 돌아요. 두 번 되풀이한 뒤 멈출 칸을 골라요.', toolOptions: { mode: 'trace', cols: 5, rows: 5, start: { x: 0, y: 4, dir: 'N' }, program: ['rep:2', 'fwd', 'right', 'end'], revealAfterCheck: true }, target: { end: { x: 1, y: 3 } }, difficulty: 0.45 },
          { prompt: '앞으로 간 뒤 왼쪽으로 도는 묶음을 세 번 되풀이해요. 멈출 칸을 골라요.', toolOptions: { mode: 'trace', cols: 5, rows: 5, start: { x: 2, y: 2, dir: 'N' }, program: ['rep:3', 'fwd', 'left', 'end'], revealAfterCheck: true }, target: { end: { x: 1, y: 2 } }, difficulty: 0.55,
            predict: { q: '반복 블록이 있는 프로그램은 안의 블록을 몇 번 실행할까요?', options: ['한 번만', '지정한 횟수만큼', '끝없이'], answer: 1 },
            conclude: '반복 블록은 안에 든 블록 묶음을 지정한 횟수만큼 처음부터 끝까지 되풀이해요.' },
        ],
      },
      {
        title: '활동 3. 길게 쓴 명령과 줄여 쓴 명령 짝 짓기', tool: 'mindmap',
        teacher: '"앞으로가 여섯 번 이어졌어요. 줄이려면 어떻게 쓸까요?" 반복 횟수와 안의 블록을 짚게 한다. 한 번만 하는 블록까지 반복 안에 넣어 짝을 맞춘 학생에게 "그러면 몇 번 실행되나요?"라고 되묻는다.',
        task: '길게 풀어 쓴 명령마다 줄여 쓴 명령을 한 장씩 이어요.',
        items: [
          { prompt: '길게 쓴 명령마다 알맞은 줄임 표현을 이어 보세요.', toolOptions: { mode: 'match', topic: '반복으로 줄이기', slots: [{ id: 'f6', label: '앞으로 앞으로 앞으로 앞으로 앞으로 앞으로' }, { id: 'lf', label: '앞으로 왼쪽 앞으로 왼쪽 앞으로 왼쪽' }, { id: 'rr', label: '오른쪽 오른쪽 앞으로 앞으로' }], cards: ['반복 6번 [앞으로]', '반복 3번 [앞으로, 왼쪽 돌기]', '오른쪽 돌기 2번 뒤 반복 2번 [앞으로]', '반복 2번 [오른쪽 돌기, 앞으로]'] }, hints: ['같은 묶음이 몇 번 되풀이되는지 세어 보고, 묶음 안에 든 블록의 차례까지 같은 줄임 표현을 찾아요.'], target: { match: { f6: '반복 6번 [앞으로]', lf: '반복 3번 [앞으로, 왼쪽 돌기]', rr: '오른쪽 돌기 2번 뒤 반복 2번 [앞으로]' } }, difficulty: 0.35 },
          { prompt: '반복 블록으로 줄이면 좋은 명령만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '줄이면 좋은 명령', cards: ['앞으로 앞으로 앞으로 앞으로', '왼쪽 돌기 한 번', '앞으로 오른쪽 앞으로 오른쪽', '앞으로 한 번'] }, hints: ['같은 블록이나 같은 블록 묶음이 되풀이되어 이어지는 명령만 골라요. 한 번만 쓰인 것은 줄일 필요가 없어요.'], target: { pick: ['앞으로 앞으로 앞으로 앞으로', '앞으로 오른쪽 앞으로 오른쪽'] }, difficulty: 0.25 },
          { prompt: '반복 블록을 쓰면 좋은 점과 나쁜 점을 나누어 보세요.', toolOptions: { topic: '반복 블록', slots: ['좋은 점', '조심할 점'], cards: ['블록 수가 줄어요', '고칠 곳이 한 군데예요', '안에 넣을 블록을 잘못 고르면 결과가 엉뚱해요', '횟수를 잘못 적으면 부딪혀요'] }, hints: ['짧아지고 고치기 쉬워지는 점은 좋은 점이고, 안의 블록이나 횟수를 잘못 정하는 것은 조심할 점이에요.'], target: { sort: { '좋은 점': ['블록 수가 줄어요', '고칠 곳이 한 군데예요'], '조심할 점': ['안에 넣을 블록을 잘못 고르면 결과가 엉뚱해요', '횟수를 잘못 적으면 부딪혀요'] } }, difficulty: 0.3 },
        ],
      },
    ],
    exit: {
      teacher: '"반복 블록으로 줄였더니 무엇이 좋아졌나요?" 블록 수가 줄고 고치기 쉬워졌다는 말이 나오는지 듣는다. 출구 2번에서 반복 횟수를 \'안의 블록 수\'로 고른 학생에게 "반복 횟수와 블록 수는 달라요. 안의 묶음을 몇 번 하는지를 말해요."라고 짚는다. 다음 시간에는 프로그램을 직접 만들어 실행하고 어긋난 곳을 한 군데씩 고친다고 예고한다.',
      items: [
        { type: 'tool', tool: 'block-coding', options: { cols: 6, rows: 3, start: { x: 0, y: 0, dir: 'E' }, goal: { x: 5, y: 0 }, blocks: ['fwd', 'left', 'right', 'rep'] }, prompt: '반복 블록을 써서 거북이를 깃발까지 보내 보세요.', target: { reach: true, use: ['rep'] }, difficulty: 0.25 },
        { type: 'choice', prompt: '앞으로를 다섯 번 이어 쓴 것을 가장 알맞게 줄인 것은 무엇인가요?', options: ['반복 5번 [앞으로]', '반복 2번 [앞으로 5개]', '앞으로 반복 3번'], answer: 0, difficulty: 0.2, explain: '앞으로 하나를 다섯 번 되풀이하므로 반복 5번 [앞으로]예요.' },
        { type: 'short', prompt: '반복 블록을 쓰면 편한 우리 생활의 일 한 가지를 쓰세요.' },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
    ws: {
      title: '반복으로 줄이기',
      items: [
        { type: 'figure', prompt: '반복 블록이 든 프로그램을 따라가 멈추는 칸에 ○ 하세요.', tool: 'block-coding', options: { mode: 'trace', cols: 6, rows: 3, start: { x: 0, y: 2, dir: 'E' }, program: ['rep:3', 'fwd', 'end', 'left', 'fwd', 'fwd'], printProgram: true }, figures: [{ state: {}, caption: '반복 3번 [앞으로] → 왼쪽 돌기 → 앞으로 → 앞으로' }], answer: '(3, 0)' },
        { type: 'choice', prompt: '반복 블록 안에 넣어야 하는 것에 ○ 하세요.', options: ['되풀이되는 블록', '한 번만 하는 블록', '프로그램 제목'], answer: '되풀이되는 블록' },
        { type: 'table', prompt: '아래 명령을 반복 블록으로 줄여 쓰세요.', columns: ['처음 명령', '줄인 명령'], cells: [['앞으로 앞으로 앞으로 앞으로 앞으로', ''], ['앞으로 오른쪽 앞으로 오른쪽', ''], ['', '']] },
        { type: 'short', prompt: '반복 블록을 쓰면 좋은 점 두 가지를 쓰세요.' },
      ],
      easy: {
        note: '같은 블록이 이어질 때 반복 블록으로 묶으면 짧아져요. 되풀이되는 것만 안에 넣어요.',
        items: [
          { type: 'figure', prompt: '프로그램을 따라가 멈추는 칸에 ○ 하세요.', tool: 'block-coding', options: { mode: 'trace', cols: 5, rows: 3, start: { x: 0, y: 1, dir: 'E' }, program: ['rep:3', 'fwd', 'end'], printProgram: true }, figures: [{ state: {}, caption: '반복 3번 [앞으로]' }], answer: '(3, 1)' },
          { type: 'choice', prompt: '앞으로를 세 번 이어 쓴 것을 줄인 것에 ○ 하세요.', options: ['반복 3번 [앞으로]', '반복 [앞으로 3개]'], answer: '반복 3번 [앞으로]' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '같은 일이 되풀이될 때는 ___ 블록을 써요.', answer: '반복' },
          { type: 'short', prompt: '반복 블록이 편한 점을 쓰세요.' },
        ],
      },
    },
    diff: ['반복 블록 만들기에서 쓰는 판이 작고, 줄이는 연습 카드는 스스로 점검해요.', '모두 풀고 확인을 눌러 스스로 고쳐요.', '거북이 문제에 반복 블록을 두 번 써야 하는 문항이 있고 따라가기 문항도 반복이 중첩에 가까워요.'],
    notes: '자주 보이는 어려움: ① 반복 블록 안에 모든 블록을 넣는다 → 되풀이되는 묶음만 안에 넣는다고 짚는다. ② 반복 횟수를 앞으로 가는 칸 수로만 생각한다 → 안의 묶음을 몇 번 하는지 한 바퀴씩 따라가게 한다. ③ 반복을 놓고 안을 비워 둔다 → 실행해서 거북이가 가만히 있는 모습을 보게 한다.',
  }));

  // ───────────────────────── 6차시 (core) 프로그램 만들고 한 군데씩 고치기 ─────────────────────────
  L.push(lesson(6, '프로그램을 실행해 보고 어긋난 곳을 한 군데씩 고치기',
    '문제를 푸는 프로그램을 만들어 실행하고, 결과가 어긋나면 한 군데씩 고쳐 다시 실행하며 원인을 좁힐 수 있다.', ['[6실05-02]'], {
    ill: ['a child holding a magnifying glass over a row of paper command blocks where one block glows red, with a small paper turtle robot looking confused on a checkered board', '어디가 어긋났을까?', 0],
    intro: {
      teacher: '"프로그램이 뜻대로 안 움직일 때 처음부터 다시 만들까요, 어디가 잘못인지 찾을까요?" 두 방법의 좋은 점과 나쁜 점을 말하게 한다. 시연 단추로 블록 하나만 바뀌어 거북이가 깃발에 닿는 모습을 보여 주고 "한 군데만 고치고 다시 실행하면 무엇이 문제였는지 알 수 있어요."라고 말한다. 여러 곳을 한꺼번에 바꾸는 학생에게는 "무엇이 결과를 바꾸었는지 알 수 있나요?"라고 되묻는다.',
      student: '프로그램이 뜻대로 안 될 때 처음부터 다시 만드는 것과 한 군데만 고치는 것 중 어느 쪽이 나을지 말해 봅시다.',
      demo: { tool: 'block-coding', options: { cols: 5, rows: 3, start: { x: 0, y: 2, dir: 'E' }, goal: { x: 4, y: 0 }, blocks: ['fwd', 'left', 'right'] }, sequence: [{ reach: true }] },
    },
    acts: [
      {
        title: '활동 1. 별을 모으는 프로그램을 만들어 실행하기', tool: 'block-coding',
        teacher: '"별 하나를 지나갈 때 어느 칸에서 돌아야 할까요?" 판에서 칸을 센 뒤 블록으로 옮기게 한다. 첫 실행에서 부딪히면 부딪힌 칸 바로 앞 블록을 살피게 한다. 별을 모으지 못하고 깃발에만 닿은 학생에게는 "목표에 별 모으기도 들어 있었나요?"라고 묻는다.',
        task: '별을 모으고 깃발까지 가는 프로그램을 만들고 실행해 봐요. 안 되면 처음으로 돌아가 한 군데씩 고쳐요.',
        levels: { easy: { blocks: ['fwd', 'left', 'right'] }, base: { blocks: ['fwd', 'left', 'right'] }, challenge: { blocks: ['fwd', 'left', 'right', 'rep'] } },
        items: [
          { prompt: '아래로 내려가 별을 모은 뒤 오른쪽으로 가 깃발에 닿는 프로그램을 만들어요.', toolOptions: { cols: 5, rows: 4, start: { x: 0, y: 0, dir: 'S' }, goal: { x: 4, y: 3 }, stars: [[0, 3]] }, target: { reach: true, stars: true }, difficulty: 0.3 },
          { prompt: '바위 두 개 사이로 길을 찾아 별을 모으고 깃발에 닿는 프로그램을 만들어요.', toolOptions: { cols: 6, rows: 4, start: { x: 0, y: 3, dir: 'E' }, goal: { x: 5, y: 0 }, rocks: [[3, 3], [3, 2]], stars: [[1, 1]] }, target: { reach: true, stars: true }, difficulty: 0.5 },
          { prompt: '별을 지나 오른쪽 끝에서 내려와 깃발에 닿는 프로그램을 블록 6개 이하로 만들어요.', toolOptions: { cols: 5, rows: 3, start: { x: 0, y: 0, dir: 'E' }, goal: { x: 4, y: 2 }, stars: [[2, 0]], blocks: ['fwd', 'left', 'right', 'rep'] }, target: { reach: true, stars: true, maxBlocks: 6 }, difficulty: 0.55,
            conclude: '프로그램은 한 번에 완성되지 않아요. 실행해 보고 어긋난 곳을 찾아 고치며 완성해요.' },
        ],
      },
      {
        title: '활동 2. 틀린 블록 하나만 찾아 고치기', tool: 'block-coding',
        teacher: '"처음으로를 누르고 실행해서 거북이가 처음 엉뚱하게 움직이는 블록이 어디인지 찾아보세요." 지우고 새로 짜지 않고 그 블록만 바꾸게 한다. 반복 횟수나 돌기 방향 하나만 틀린 경우가 많음을 알려 준다. 여러 블록을 바꾼 학생에게는 "처음 프로그램과 다른 블록이 몇 개인가요?"라고 묻는다.',
        task: '처음 프로그램을 실행해 어긋난 곳을 찾고, 블록 하나만 고쳐 깃발에 닿아요.',
        levels: { easy: { blocks: ['fwd', 'left', 'right'] }, base: { blocks: ['fwd', 'left', 'right'] }, challenge: { blocks: ['fwd', 'left', 'right', 'rep'] } },
        items: [
          { prompt: '거북이가 판 밖으로 나가려 해요. 틀린 돌기 블록 하나만 고쳐 깃발에 닿게 해요.', toolOptions: { cols: 5, rows: 3, start: { x: 0, y: 2, dir: 'E' }, goal: { x: 4, y: 0 }, rocks: [[2, 2]] }, state: { program: ['fwd', 'left', 'fwd', 'fwd', 'left', 'fwd', 'fwd', 'fwd'] }, target: { reach: true, maxEdits: 1 }, difficulty: 0.35 },
          { prompt: '깃발 앞에서 한 칸 모자라 멈춰요. 블록 하나만 보태 깃발에 닿게 해요.', toolOptions: { cols: 5, rows: 3, start: { x: 0, y: 1, dir: 'E' }, goal: { x: 4, y: 1 } }, state: { program: ['fwd', 'fwd', 'fwd'] }, target: { reach: true, maxEdits: 1 }, difficulty: 0.4 },
          { prompt: '앞으로 가는 횟수가 틀렸어요. 반복 횟수 하나만 고쳐 깃발에 닿게 해요.', toolOptions: { cols: 6, rows: 4, start: { x: 0, y: 3, dir: 'E' }, goal: { x: 4, y: 1 }, blocks: ['fwd', 'left', 'right', 'rep'] }, state: { program: ['rep:3', 'fwd', 'end', 'left', 'rep:2', 'fwd', 'end'] }, target: { reach: true, maxEdits: 1 }, difficulty: 0.5,
            predict: { q: '결과가 어긋났을 때 어디부터 살펴야 할까요?', options: ['처음부터 다시 만들어요', '처음으로 엉뚱하게 움직인 블록이에요', '맨 마지막 블록이에요'], answer: 1 },
            conclude: '어긋난 곳은 처음으로 엉뚱하게 움직인 블록 가까이에 있어요. 한 군데만 고쳐야 원인을 알아요.' },
        ],
      },
      {
        title: '활동 3. 어긋난 프로그램을 고치는 차례 놓기', tool: 'mindmap',
        teacher: '"프로그램이 안 될 때 가장 먼저 무엇을 하나요? 고친 다음에는요?" 실행→찾기→한 군데 고치기→다시 실행→기록이라는 흐름을 말하게 한다. 고치기 전에 결과를 기록하지 않는 학생에게 "무엇을 바꾸었더니 무엇이 달라졌는지 적어 두면 다음에 어떻게 도움이 될까요?"라고 묻는다.',
        task: '카드를 읽고 프로그램을 고칠 때 하는 일을 알맞은 차례로 놓거나, 좋은 방법만 골라요.',
        items: [
          { prompt: '프로그램을 고치는 차례를 위에서부터 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: 'run', text: '먼저 실행해서 결과를 봐요' }, { id: 'find', text: '엉뚱하게 움직인 블록을 찾아요' }, { id: 'one', text: '그 블록 한 군데만 고쳐요' }, { id: 'again', text: '다시 실행해 달라진 점을 봐요' }, { id: 'note', text: '무엇을 고쳤는지 적어 둬요' }] }, hints: ['일이 어긋난 걸 알아야 찾고, 찾은 뒤에 고쳐요. 고친 결과를 확인한 다음 적어 두는 순서를 떠올려요.'], target: { order: ['run', 'find', 'one', 'again', 'note'] }, difficulty: 0.3 },
          { prompt: '원인을 잘 좁히는 고치기 방법만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '좋은 고치기', cards: ['한 번에 한 군데씩 고쳐요', '고친 뒤 바로 다시 실행해요', '안 되면 모든 블록을 지워요', '여러 곳을 한꺼번에 바꿔요'] }, hints: ['무엇이 결과를 바꾸었는지 알 수 있게 조금씩 바꾸고 바로 확인하는 방법만 골라요.'], target: { pick: ['한 번에 한 군데씩 고쳐요', '고친 뒤 바로 다시 실행해요'] }, difficulty: 0.25 },
          { prompt: '결과가 어긋난 모습과 먼저 살펴볼 곳을 짝 지어 보세요.', toolOptions: { mode: 'match', topic: '먼저 살펴볼 곳', slots: [{ id: 'rock', label: '바위에 부딪혀 멈춰요' }, { id: 'short', label: '깃발 앞에서 멈춰요' }, { id: 'turn', label: '엉뚱한 쪽으로 가요' }], cards: ['부딪힌 칸 바로 앞의 블록', '앞으로 가는 횟수', '돌기 블록의 방향', '프로그램 이름'] }, hints: ['결과가 어긋난 모습을 보고 원인이 될 만한 블록이 어느 것인지 이어요. 이름은 결과를 바꾸지 않아요.'], target: { match: { rock: '부딪힌 칸 바로 앞의 블록', short: '앞으로 가는 횟수', turn: '돌기 블록의 방향' } }, difficulty: 0.35 },
        ],
      },
    ],
    exit: {
      teacher: '"오늘 프로그램을 고칠 때 가장 도움이 된 방법은 무엇이었나요?" 한 군데씩 고치고 바로 실행한 경험을 말하게 한다. 출구 2번에서 \'다시 만든다\'를 고른 학생에게 "다시 만들면 어디가 문제였는지 알 수 있나요?"라고 묻는다. 다음 시간부터는 여럿이 함께 프로그램을 만들 때 일을 나누는 방법을 살펴본다고 예고한다.',
      items: [
        { type: 'tool', tool: 'block-coding', options: { cols: 5, rows: 3, start: { x: 0, y: 1, dir: 'E' }, goal: { x: 4, y: 1 }, blocks: ['fwd', 'left', 'right'] }, state: { program: ['fwd', 'fwd', 'right', 'fwd'] }, prompt: '거북이가 깃발에 닿지 않아요. 블록 하나만 고쳐 보세요.', target: { reach: true, maxEdits: 2 }, difficulty: 0.35 },
        { type: 'choice', prompt: '프로그램이 뜻대로 되지 않을 때 가장 알맞은 방법은 무엇인가요?', options: ['모든 블록을 지우고 새로 짜요', '한 군데씩 고치고 바로 다시 실행해요', '블록 여러 개를 한꺼번에 바꿔요'], answer: 1, difficulty: 0.2, explain: '한 군데씩 고치고 다시 실행해야 무엇이 원인이었는지 알 수 있어요.' },
        { type: 'short', prompt: '오늘 프로그램에서 찾은 실수와 고친 방법을 쓰세요.' },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
    ws: {
      title: '고치며 완성하는 프로그램',
      items: [
        { type: 'figure', prompt: '프로그램을 따라가 거북이가 부딪히는 곳에 ✕ 하세요.', tool: 'block-coding', options: { mode: 'trace', cols: 5, rows: 4, start: { x: 0, y: 3, dir: 'E' }, program: ['fwd', 'fwd', 'left', 'fwd', 'fwd', 'fwd'], printProgram: true }, figures: [{ state: {}, caption: '앞으로 → 앞으로 → 왼쪽 돌기 → 앞으로 → 앞으로 → 앞으로' }], answer: '위쪽 판 밖에서 부딪힌다' },
        { type: 'choice', prompt: '프로그램을 고치는 좋은 방법에 ○ 하세요.', options: ['한 군데씩 고치고 다시 실행해요', '모든 블록을 한꺼번에 바꿔요', '고친 것을 적지 않아요'], answer: '한 군데씩 고치고 다시 실행해요' },
        { type: 'table', prompt: '고친 기록을 쓰세요.', columns: ['어긋난 모습', '고친 곳', '고친 뒤 결과'], cells: [['', '', ''], ['', '', '']] },
        { type: 'short', prompt: '프로그램을 한 군데씩 고쳐야 하는 까닭을 쓰세요.' },
      ],
      easy: {
        note: '실행하고, 엉뚱한 곳을 찾고, 한 군데만 고치고, 다시 실행해요.',
        items: [
          { type: 'figure', prompt: '프로그램을 따라가 멈추는 칸에 ○ 하세요.', tool: 'block-coding', options: { mode: 'trace', cols: 4, rows: 3, start: { x: 0, y: 2, dir: 'E' }, program: ['fwd', 'fwd', 'left', 'fwd'], printProgram: true }, figures: [{ state: {}, caption: '앞으로 → 앞으로 → 왼쪽 돌기 → 앞으로' }], answer: '(2, 1)' },
          { type: 'choice', prompt: '프로그램을 고칠 때 먼저 할 일에 ○ 하세요.', options: ['실행해서 결과를 봐요', '모든 블록을 지워요'], answer: '실행해서 결과를 봐요' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '프로그램을 한 ___씩 고치고 다시 실행해요.', answer: '군데' },
          { type: 'short', prompt: '오늘 고친 블록을 한 줄 쓰세요.' },
        ],
      },
    },
    diff: ['만들기 문항이 쉬운 판에서 시작하고, 고치기는 앞으로·돌기 블록만 써요.', '모두 풀고 확인을 눌러 스스로 고쳐요.', '고치기 문항에 반복 횟수가 틀린 프로그램이 나오고 블록 수 제한이 더해져요.'],
    notes: '자주 보이는 어려움: ① 안 될 때 처음부터 새로 만든다 → 처음 프로그램을 두고 엉뚱하게 움직인 블록만 찾게 한다. ② 여러 곳을 한꺼번에 고쳐 원인을 모른다 → 한 번에 한 군데씩 바꾸고 바로 실행하게 한다. ③ 고친 내용을 적지 않는다 → 고친 곳과 달라진 결과를 한 줄씩 적게 한다.',
  }));

  // ───────────────────────── 7차시 (core) 함께 만들 때 일 나누기 ─────────────────────────
  L.push(lesson(7, '모둠 프로그램의 일을 역할로 나누고 구간을 이어 만들기',
    '함께 프로그램을 만들 때 나눌 수 있는 일을 역할별로 가르고, 각자 만든 구간을 이어 붙여 하나의 프로그램으로 만들 수 있다.', ['[6실05-03]'], {
    ill: ['three children each holding one section of a long paper road and joining them on a table while a small paper turtle robot waits at the start', '각자 맡은 길을 이어요', 1],
    intro: {
      teacher: '"세 사람이 긴 그림을 함께 그린다면 한 사람이 처음부터 끝까지 그리는 것과 무엇이 다를까요?" 시간과 생각의 차이를 말하게 한다. 시연 단추로 짧은 길 두 구간이 이어져 거북이가 깃발에 닿는 모습을 보여 주고 "각자 맡은 구간이 이어지는 칸에서 만나야 해요."라고 말한다. 잘하는 한 사람이 다 만들면 협력이라고 여기는 학생에게는 "나머지 친구는 무엇을 했나요?"라고 되묻는다.',
      student: '세 사람이 긴 그림을 함께 그릴 때 한 사람이 혼자 그릴 때와 무엇이 다를지 말해 봅시다.',
      demo: { tool: 'block-coding', options: { cols: 5, rows: 3, start: { x: 0, y: 1, dir: 'E' }, goal: { x: 3, y: 1 } }, sequence: [{ reach: true }] },
    },
    acts: [
      {
        title: '활동 1. 모둠 프로그램의 일을 역할로 나누기', tool: 'mindmap',
        teacher: '"프로그램을 만드는 일은 코딩만일까요? 길을 정하는 일, 시험하는 일, 쓰는 방법을 알리는 일은요?" 계획·만들기·시험·설명으로 일을 나누어 보게 한다. 만들기만 중요하다고 여겨 시험 담당을 빼려는 학생에게는 "합친 뒤 실행해 보는 사람이 없으면 어떻게 될까요?"라고 묻는다.',
        task: '모둠 프로그램을 만들 때 해야 할 일 카드를 읽고, 알맞은 역할 가지에 나누어 넣어요.',
        items: [
          { prompt: '모둠 프로그램에서 해야 할 일을 계획·만들기·시험·설명 가지에 나누어 보세요.', toolOptions: { topic: '모둠 프로그램', slots: ['계획하기', '만들기', '시험하기', '설명하기'], cards: ['거북이가 갈 길을 종이에 그려요', '맡은 구간의 블록을 놓아요', '합친 프로그램을 실행해 봐요', '쓰는 방법을 쪽지로 써요'] }, hints: ['일이 시작 전에 정하는 것인지, 직접 만드는 것인지, 해 보고 살피는 것인지, 다른 사람에게 알리는 것인지 가려 넣어요.'], target: { sort: { '계획하기': ['거북이가 갈 길을 종이에 그려요'], '만들기': ['맡은 구간의 블록을 놓아요'], '시험하기': ['합친 프로그램을 실행해 봐요'], '설명하기': ['쓰는 방법을 쪽지로 써요'] } }, difficulty: 0.2 },
          { prompt: '네 가지 역할에 어울리는 일을 한 장씩 이어 보세요.', toolOptions: { mode: 'match', topic: '역할별 일', slots: [{ id: 'plan', label: '길 설계 담당' }, { id: 'front', label: '앞 구간 담당' }, { id: 'back', label: '뒤 구간 담당' }, { id: 'test', label: '시험·기록 담당' }], cards: ['출발과 중간 깃발 자리를 정해요', '출발 칸에서 중간 깃발까지 블록을 짜요', '중간 깃발에서 끝 깃발까지 블록을 짜요', '실행 결과와 고친 곳을 적어요'] }, hints: ['앞과 뒤 구간은 길의 어느 쪽을 맡는지, 설계와 시험은 만들기 전인지 만든 뒤인지로 이어요.'], target: { match: { plan: '출발과 중간 깃발 자리를 정해요', front: '출발 칸에서 중간 깃발까지 블록을 짜요', back: '중간 깃발에서 끝 깃발까지 블록을 짜요', test: '실행 결과와 고친 곳을 적어요' } }, difficulty: 0.3 },
          { prompt: '함께 만드는 모습에 알맞은 것만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '협력하는 모습', cards: ['맡을 부분을 정해 만들고 합쳐요', '잘하는 친구가 혼자 모두 만들어요', '이어지는 칸을 서로 알려 줘요', '남의 구간은 보지 않고 만들어요'] }, hints: ['일을 나누되 합칠 때 서로 이어지게 소통하는 모습만 골라요. 한 사람이 다 하거나 소통이 없는 것은 협력이 아니에요.'], target: { pick: ['맡을 부분을 정해 만들고 합쳐요', '이어지는 칸을 서로 알려 줘요'] }, difficulty: 0.25,
            predict: { q: '잘하는 친구가 혼자 모두 만들면 협력일까요?', options: ['협력이에요', '협력이 아니에요', '잘 모르겠어요'], answer: 1 },
            conclude: '협력은 일을 나누어 함께 만들고 합치는 거예요. 한 사람이 모두 하면 협력이 아니에요.' },
        ],
      },
      {
        title: '활동 2. 두 구간을 따로 만들어 하나로 잇기', tool: 'block-coding',
        teacher: '"앞 구간이 끝난 칸에서 거북이는 어느 쪽을 보고 있나요? 뒤 구간은 그 방향을 이어받나요?" 이어지는 칸의 방향을 서로 말해 주어야 함을 짚는다. 합친 뒤 방향이 어긋나 부딪히는 학생에게 "앞 구간 끝 방향과 뒤 구간 처음 방향이 같은가요?"라고 묻는다.',
        task: '앞 구간과 뒤 구간을 따로 만든 뒤, 둘을 이어 붙여 처음부터 끝까지 가는 프로그램을 만들어요.',
        levels: { easy: { blocks: ['fwd', 'left', 'right'] }, base: { blocks: ['fwd', 'left', 'right'] }, challenge: { blocks: ['fwd', 'left', 'right', 'rep'] } },
        items: [
          { prompt: '앞 구간 담당이에요. 출발 칸에서 별을 지나 중간 깃발까지 가는 프로그램을 만들어요.', toolOptions: { cols: 7, rows: 4, start: { x: 0, y: 3, dir: 'E' }, goal: { x: 3, y: 3 }, stars: [[1, 3]] }, target: { reach: true, stars: true }, difficulty: 0.2 },
          { prompt: '뒤 구간 담당이에요. 중간 깃발에서 바위를 피해 끝 깃발까지 가는 프로그램을 만들어요.', toolOptions: { cols: 7, rows: 4, start: { x: 3, y: 3, dir: 'E' }, goal: { x: 6, y: 0 }, rocks: [[4, 3]] }, target: { reach: true }, difficulty: 0.35 },
          { prompt: '두 구간을 이어 처음부터 끝 깃발까지, 별도 지나는 하나의 프로그램을 만들어요.', toolOptions: { cols: 7, rows: 4, start: { x: 0, y: 3, dir: 'E' }, goal: { x: 6, y: 0 }, rocks: [[4, 3]], stars: [[1, 3]] }, target: { reach: true, stars: true }, difficulty: 0.5,
            conclude: '구간을 이으려면 앞 구간이 끝나는 칸과 방향을 뒤 구간이 알고 있어야 해요.' },
        ],
      },
      {
        title: '활동 3. 모둠 프로그램을 만드는 차례 놓기', tool: 'mindmap',
        teacher: '"일을 나누기 전에 먼저 해야 할 것은 무엇일까요? 합치기 전에 각자 해야 하는 것은요?" 계획→나누기→각자 만들기→합치기→함께 실행이라는 흐름을 말하게 한다. 나누기 전에 각자 만들기부터 시작하려는 학생에게 "이어지는 칸을 정하지 않고 만들면 어떻게 될까요?"라고 묻는다.',
        task: '카드를 읽고 모둠이 프로그램을 만드는 차례를 놓거나, 합칠 때 점검할 것을 골라요.',
        items: [
          { prompt: '모둠 프로그램을 만드는 차례를 위에서부터 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: 'plan', text: '전체 길을 함께 그려요' }, { id: 'split', text: '구간을 나누어 맡아요' }, { id: 'make', text: '각자 맡은 구간을 만들어요' }, { id: 'join', text: '구간을 이어 하나로 합쳐요' }, { id: 'run', text: '합친 프로그램을 함께 실행해요' }] }, hints: ['나누기 전에 전체를 알아야 해요. 각자 만든 것을 합치고 나서야 함께 실행할 수 있어요.'], target: { order: ['plan', 'split', 'make', 'join', 'run'] }, difficulty: 0.25 },
          { prompt: '구간을 합칠 때 꼭 점검할 것만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '합칠 때 점검', cards: ['앞 구간이 끝나는 칸', '앞 구간이 끝날 때 보는 방향', '프로그램 파일의 색깔', '뒤 구간이 시작하는 칸'] }, hints: ['앞뒤 구간이 매끄럽게 이어지려면 만나는 자리와 방향이 같아야 해요. 겉모습과 상관없는 것은 빼요.'], target: { pick: ['앞 구간이 끝나는 칸', '앞 구간이 끝날 때 보는 방향', '뒤 구간이 시작하는 칸'] }, difficulty: 0.3 },
          { prompt: '모둠에서 생긴 어려움마다 알맞은 해결 방법을 이어 보세요.', toolOptions: { mode: 'match', topic: '어려움과 해결', slots: [{ id: 'dir', label: '합치니 거북이가 부딪혀요' }, { id: 'time', label: '한 사람의 일이 너무 많아요' }, { id: 'lost', label: '누가 무엇을 했는지 몰라요' }], cards: ['이어지는 칸과 방향을 서로 확인해요', '일을 다시 나누어 맡아요', '맡은 일과 고친 곳을 적어 둬요', '가장 잘하는 친구가 모두 해요'] }, hints: ['어려움의 까닭이 소통인지, 일의 양인지, 기록인지 보고 그 까닭을 푸는 방법을 이어요.'], target: { match: { dir: '이어지는 칸과 방향을 서로 확인해요', time: '일을 다시 나누어 맡아요', lost: '맡은 일과 고친 곳을 적어 둬요' } }, difficulty: 0.35 },
        ],
      },
    ],
    exit: {
      teacher: '"오늘 모둠으로 만들 때 일을 나눈 좋은 점과 어려운 점을 하나씩 말해 볼까요?" 시간이 줄고 생각이 모이는 점, 합칠 때 방향이 어긋나는 점을 말하게 한다. 출구 1번에서 이어붙이는 자리를 못 정한 학생에게 "앞 구간이 끝나는 칸을 정하고 시작해 볼까요?"라고 묻는다. 다음 시간에는 만든 것을 나눌 때 어떤 설명을 갖추어야 하는지 살펴본다고 예고한다.',
      items: [
        { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '협력하는 모습', cards: ['구간을 나누어 맡아요', '혼자 모두 만들어요', '이어지는 칸을 말해 줘요'] }, prompt: '함께 만드는 모습에 알맞은 것만 골라 보세요.', target: { pick: ['구간을 나누어 맡아요', '이어지는 칸을 말해 줘요'] }, difficulty: 0.15 },
        { type: 'choice', prompt: '구간을 이어 붙일 때 가장 먼저 맞추어야 할 것은 무엇인가요?', options: ['글자 크기', '앞 구간이 끝나는 칸과 방향', '프로그램 이름'], answer: 1, difficulty: 0.2, explain: '앞 구간이 끝나는 칸과 방향이 뒤 구간의 시작과 같아야 이어져요.' },
        { type: 'short', prompt: '내가 맡은 구간과 이어지는 칸을 한 문장으로 쓰세요.' },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
    ws: {
      title: '함께 만드는 프로그램',
      items: [
        { type: 'figure', prompt: '거북이가 중간 깃발에서 끝 깃발까지 가는 길을 화살표로 그리세요.', tool: 'block-coding', options: { cols: 6, rows: 4, start: { x: 2, y: 3, dir: 'E' }, goal: { x: 5, y: 1 }, rocks: [[3, 3]] }, figures: [{ state: { program: [] }, caption: '뒤 구간 담당' }], answer: '예: 왼쪽 돌기, 앞으로 2, 오른쪽 돌기, 앞으로 3' },
        { type: 'choice', prompt: '협력하는 모습에 ○ 하세요.', options: ['일을 나누어 맡고 합쳐요', '한 사람이 모두 해요', '합친 뒤 실행하지 않아요'], answer: '일을 나누어 맡고 합쳐요' },
        { type: 'table', prompt: '우리 모둠의 역할과 하는 일을 쓰세요.', columns: ['역할', '하는 일'], cells: [['계획하기', ''], ['앞 구간 만들기', ''], ['뒤 구간 만들기', ''], ['시험하고 기록하기', '']] },
        { type: 'short', prompt: '구간을 합칠 때 어려웠던 점과 해결 방법을 쓰세요.' },
      ],
      easy: {
        note: '함께 만들 때는 역할을 나누고, 구간이 이어지는 칸과 방향을 서로 알려 줘요.',
        items: [
          { type: 'figure', prompt: '거북이가 깃발에 닿는 길을 화살표로 그리세요.', tool: 'block-coding', options: { cols: 5, rows: 3, start: { x: 0, y: 2, dir: 'E' }, goal: { x: 3, y: 0 } }, figures: [{ state: { program: [] }, caption: '깃발까지' }], answer: '예: 앞으로 3, 왼쪽 돌기, 앞으로 2' },
          { type: 'choice', prompt: '함께 만들 때 알맞은 것에 ○ 하세요.', options: ['일을 나누어 맡아요', '혼자 다 해요'], answer: '일을 나누어 맡아요' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '구간을 이으려면 끝나는 칸과 ___이 같아야 해요.', answer: '방향' },
          { type: 'short', prompt: '내가 맡고 싶은 역할을 쓰세요.' },
        ],
      },
    },
    diff: ['역할 나누기에서 맞게 놓으면 초록 테두리가 생기고, 구간 만들기는 앞으로·돌기 블록만 써요.', '모두 풀고 확인을 눌러 스스로 고쳐요.', '이어 붙이기 문항에 반복 블록이 더해지고 함정 카드가 들어가요.'],
    notes: '자주 보이는 어려움: ① 잘하는 한 사람이 모두 만들면 협력이라고 여긴다 → 맡은 부분이 각자 있는지 묻는다. ② 구간이 만나는 칸의 방향을 말해 주지 않는다 → 앞 구간 끝 방향과 뒤 구간 처음 방향을 소리 내어 맞추게 한다. ③ 합친 뒤 실행하지 않는다 → 시험 담당이 한 번 실행해 결과를 적게 한다.',
  }));

  // ───────────────────────── 8차시 (practice) 결과물을 나눌 때 갖출 설명 ─────────────────────────
  L.push(lesson(8, '프로그램을 나누기 전에 설명 쪽지에 담을 항목 정하기',
    '프로그램을 다른 사람과 나눌 때 갖출 설명 항목을 알아 목록으로 만들고, 설명서를 읽고 프로그램을 따라 해 볼 수 있다.', ['[6실05-03]'], {
    ill: ['a child handing a small paper turtle robot and an instruction card with icons to a friend across a table', '쓰는 방법을 쪽지에 적어요', 2],
    intro: {
      teacher: '"새 장난감을 샀는데 쓰는 방법이 하나도 적혀 있지 않다면 어떨까요?" 막막한 경험을 말하게 한다. 시연 단추로 이름·하는 일·쓰는 방법이 쪽지에 모이는 모습을 보여 주고 "나눌 때는 받는 친구가 혼자 읽고 쓸 수 있도록 설명을 함께 줘요."라고 말한다. 프로그램만 주면 친구가 알아서 쓸 것이라 여기는 학생에게는 "친구가 이름만 보고 무엇을 하는 프로그램인지 알 수 있을까요?"라고 되묻는다.',
      student: '쓰는 방법이 하나도 적히지 않은 장난감을 받았을 때 어떤 점이 불편할지 말해 봅시다.',
      demo: { tool: 'mindmap', options: { mode: 'pick', topic: '설명 항목', cards: ['프로그램 이름', '쓰는 방법', '집 주소'], shuffle: false }, sequence: [{ pick: ['프로그램 이름', '쓰는 방법'] }] },
    },
    acts: [
      {
        title: '활동 1. 나눌 때 꼭 필요한 설명 고르기', tool: 'mindmap',
        teacher: '"받는 친구가 이 프로그램을 쓰려면 무엇을 알아야 할까요? 알려 주면 안 되는 것은 무엇일까요?" 이름, 하는 일, 쓰는 방법, 만든 사람의 역할이 필요한 설명임을 말하게 한다. 개인 정보(집 주소, 비밀번호)를 설명에 넣으려는 학생에게 "그 정보가 필요한가요? 누구에게든 알려도 될까요?"라고 묻는다.',
        task: '카드를 읽고 프로그램을 나눌 때 설명에 꼭 넣을 것만 바구니에 넣거나 갈래에 나누어요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          { prompt: '프로그램을 나눌 때 설명 쪽지에 꼭 넣을 것만 고르세요.', toolOptions: { mode: 'pick', topic: '설명 쪽지', cards: ['프로그램 이름', '하는 일 한 줄', '쓰는 순서', '만든 사람의 집 주소', '로그인 비밀번호'] }, hints: ['받는 친구가 쓰는 데 꼭 필요한 정보인지, 알려 주면 위험한 개인 정보인지 가려서 골라요.'], target: { pick: ['프로그램 이름', '하는 일 한 줄', '쓰는 순서'] }, difficulty: 0.15 },
          { prompt: '설명 쪽지의 내용을 알맞은 항목에 나누어 넣어 보세요.', toolOptions: { topic: '설명 항목', slots: ['이름', '하는 일', '쓰는 방법'], cards: ['거북이 길 찾기', '거북이를 깃발에 보내요', '먼저 시작을 눌러요', '블록을 순서대로 놓아요'] }, hints: ['제목 한 줄로 쓰는 것, 무엇을 하는지 말하는 것, 하는 순서를 말하는 것으로 가려 넣어요.'], target: { sort: { 이름: ['거북이 길 찾기'], '하는 일': ['거북이를 깃발에 보내요'], '쓰는 방법': ['먼저 시작을 눌러요', '블록을 순서대로 놓아요'] } }, difficulty: 0.25 },
          { prompt: '함께 만든 사람에 대해 설명에 쓰면 좋은 것만 골라 보세요.', toolOptions: { mode: 'pick', topic: '만든 사람 설명', cards: ['누가 어떤 구간을 맡았는지', '이름 대신 별명이나 역할', '전화번호', '고마운 사람'] }, hints: ['역할과 도움을 밝히는 것은 좋지만 전화번호처럼 알려지면 안 되는 정보는 쓰지 않아요.'], target: { pick: ['누가 어떤 구간을 맡았는지', '이름 대신 별명이나 역할', '고마운 사람'] }, difficulty: 0.3,
            predict: { q: '프로그램을 나눌 때 만든 사람의 전화번호를 적어도 될까요?', options: ['적어도 돼요', '적지 않아요', '잘 모르겠어요'], answer: 1 },
            conclude: '나눌 때는 필요한 설명만 쓰고 전화번호나 주소 같은 개인 정보는 쓰지 않아요.' },
        ],
      },
      {
        title: '활동 2. 설명 항목에 알맞은 문장 짝 짓기', tool: 'mindmap',
        teacher: '"\'거북이를 깃발까지 보내요\'는 이름일까요, 하는 일일까요?" 이름은 짧은 제목이고, 하는 일은 문장으로 풀어 쓴다고 짚는다. 쓰는 방법에 일의 결과만 쓰고 순서를 쓰지 않는 학생에게 "처음 보는 친구가 따라 할 수 있도록 먼저 무엇을 하라고 적어 줄까요?"라고 묻는다.',
        task: '설명 항목마다 알맞은 문장 한 장씩을 이어요. 문장을 보고 어떤 항목인지 생각해요.',
        items: [
          { prompt: '설명 항목마다 알맞은 문장을 이어 보세요.', toolOptions: { mode: 'match', topic: '설명 문장', slots: [{ id: 'name', label: '이름' }, { id: 'job', label: '하는 일' }, { id: 'use', label: '쓰는 방법' }], cards: ['별 모으기 거북이', '별을 모두 모아 깃발까지 가요', '블록을 놓고 실행을 눌러요', '제가 제일 잘 만들었어요'] }, hints: ['짧은 제목, 하는 일을 풀어 쓴 문장, 순서를 알려 주는 문장으로 나누어 이어요. 자랑은 설명 항목이 아니에요.'], target: { match: { name: '별 모으기 거북이', job: '별을 모두 모아 깃발까지 가요', use: '블록을 놓고 실행을 눌러요' } }, difficulty: 0.2 },
          { prompt: '쓰는 방법 설명을 받는 친구가 따라 하기 쉬운 문장끼리 골라 보세요.', toolOptions: { mode: 'pick', topic: '쓰기 쉬운 설명', cards: ['블록 고르개에서 앞으로를 눌러 놓아요', '알아서 해 보세요', '실행을 누르면 거북이가 움직여요', '이건 쉬워요'] }, hints: ['무엇을 누르고 무엇이 일어나는지 구체적으로 말해 주는 문장만 골라요. 막연한 말은 빼요.'], target: { pick: ['블록 고르개에서 앞으로를 눌러 놓아요', '실행을 누르면 거북이가 움직여요'] }, difficulty: 0.3 },
          { prompt: '설명서에 고친 점을 적는 까닭과 알맞은 모습을 짝 지어 보세요.', toolOptions: { mode: 'match', topic: '고친 점 기록', slots: [{ id: 'why', label: '고친 점을 적는 까닭' }, { id: 'good', label: '알맞은 기록' }], cards: ['다음 사람이 같은 실수를 하지 않게', '반복 횟수를 3에서 4로 고쳤어요', '기록은 필요 없어요', '잘 모르겠어요'] }, hints: ['기록은 다음에 읽는 사람을 위한 것이에요. 무엇을 바꾸었는지 구체적으로 쓴 문장을 찾아요.'], target: { match: { why: '다음 사람이 같은 실수를 하지 않게', good: '반복 횟수를 3에서 4로 고쳤어요' } }, difficulty: 0.35 },
        ],
      },
      {
        title: '활동 3. 설명서를 읽고 프로그램 따라가 보기', tool: 'block-coding',
        teacher: '"친구가 준 설명서만 보고 프로그램을 따라가 봅시다. 설명이 부족하면 어디서 막힐까요?" 설명서의 프로그램을 한 줄씩 손가락으로 따라가며 멈추는 칸을 고르게 한다. 반복 블록 안과 밖을 구분하지 못한 학생에게 "반복에 묶인 블록이 어디까지인가요?"라고 묻는다.',
        task: '설명서에 적힌 프로그램을 따라가 거북이가 멈추는 칸을 골라요.',
        levels: { easy: { cols: 6, rows: 4 }, base: {}, challenge: {} },
        items: [
          { prompt: '앞으로를 두 번 되풀이하고 왼쪽으로 돈 뒤 또 두 번 되풀이해요. 멈출 칸을 골라요.', toolOptions: { mode: 'trace', cols: 6, rows: 4, start: { x: 0, y: 3, dir: 'E' }, program: ['rep:2', 'fwd', 'end', 'left', 'rep:2', 'fwd', 'end'], revealAfterCheck: true }, target: { end: { x: 2, y: 1 } }, difficulty: 0.3 },
          { prompt: '위쪽을 보고 시작해 앞으로 두 번, 왼쪽으로 돌고 앞으로 두 번 가요. 멈출 칸을 골라요.', toolOptions: { mode: 'trace', cols: 5, rows: 5, start: { x: 4, y: 4, dir: 'N' }, program: ['fwd', 'fwd', 'left', 'fwd', 'fwd'], revealAfterCheck: true }, target: { end: { x: 2, y: 2 } }, difficulty: 0.4 },
          { prompt: '앞으로 한 번 간 뒤 오른쪽으로 돌고, 앞으로 두 번 되풀이한 뒤 다시 돌아요. 멈출 칸을 골라요.', toolOptions: { mode: 'trace', cols: 5, rows: 4, start: { x: 0, y: 0, dir: 'E' }, program: ['fwd', 'right', 'rep:2', 'fwd', 'end', 'right', 'fwd'], revealAfterCheck: true }, target: { end: { x: 0, y: 2 } }, difficulty: 0.55,
            conclude: '설명서가 분명하면 처음 보는 친구도 프로그램이 어디서 멈추는지 따라갈 수 있어요.' },
        ],
      },
    ],
    exit: {
      teacher: '"오늘 만든 설명 항목 목록에서 가장 중요하다고 생각하는 것은 무엇인가요?" 이름·하는 일·쓰는 방법 중 하나를 고르고 까닭을 말하게 한다. 출구 2번에서 개인 정보 카드를 고른 학생에게 "그 정보를 모르는 사람이 알면 어떤 일이 생길까요?"라고 묻는다. 다음 시간에는 모둠이 만든 프로그램을 합치고 올려서 의견으로 고쳐 본다고 예고한다.',
      items: [
        { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '설명 쪽지', cards: ['프로그램 이름', '쓰는 순서', '비밀번호'] }, prompt: '설명 쪽지에 꼭 넣을 것만 골라 보세요.', target: { pick: ['프로그램 이름', '쓰는 순서'] }, difficulty: 0.15 },
        { type: 'choice', prompt: '프로그램을 나눌 때 설명에 쓰면 안 되는 것은 무엇인가요?', options: ['쓰는 방법', '만든 사람의 전화번호', '하는 일'], answer: 1, difficulty: 0.2, explain: '전화번호 같은 개인 정보는 나눌 때 쓰지 않아요.' },
        { type: 'short', prompt: '내가 만든 프로그램의 설명에 넣을 항목 세 가지를 쓰세요.' },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
    ws: {
      title: '나눌 때 쓰는 설명 쪽지',
      items: [
        { type: 'figure', prompt: '설명서의 프로그램을 따라가 거북이가 멈추는 칸에 ○ 하세요.', tool: 'block-coding', options: { mode: 'trace', cols: 5, rows: 4, start: { x: 0, y: 3, dir: 'E' }, program: ['rep:3', 'fwd', 'end', 'left', 'fwd', 'fwd'], printProgram: true }, figures: [{ state: {}, caption: '반복 3번 [앞으로] → 왼쪽 돌기 → 앞으로 → 앞으로' }], answer: '(3, 1)' },
        { type: 'choice', prompt: '설명 쪽지에 넣으면 좋은 것에 ○ 하세요.', options: ['쓰는 순서', '비밀번호', '집 주소'], answer: '쓰는 순서' },
        { type: 'table', prompt: '내 프로그램의 설명 쪽지를 완성하세요.', columns: ['항목', '내용'], cells: [['이름', ''], ['하는 일', ''], ['쓰는 방법', ''], ['만든 사람의 역할', '']] },
        { type: 'short', prompt: '설명 쪽지에 개인 정보를 쓰지 않는 까닭을 쓰세요.' },
      ],
      easy: {
        note: '이름, 하는 일, 쓰는 방법을 쪽지에 쓰고 개인 정보는 쓰지 않아요.',
        items: [
          { type: 'figure', prompt: '프로그램을 따라가 멈추는 칸에 ○ 하세요.', tool: 'block-coding', options: { mode: 'trace', cols: 4, rows: 3, start: { x: 0, y: 1, dir: 'E' }, program: ['rep:2', 'fwd', 'end', 'left', 'fwd'], printProgram: true }, figures: [{ state: {}, caption: '반복 2번 [앞으로] → 왼쪽 돌기 → 앞으로' }], answer: '(2, 0)' },
          { type: 'choice', prompt: '설명에 쓸 수 있는 것에 ○ 하세요.', options: ['프로그램 이름', '전화번호'], answer: '프로그램 이름' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '나눌 때는 하는 일과 쓰는 ___을 설명해요.', answer: '방법' },
          { type: 'short', prompt: '내 프로그램의 이름을 쓰세요.' },
        ],
      },
    },
    diff: ['고르기·나누기에서 맞게 놓으면 초록 테두리가 생기고, 따라가기는 판이 작아요.', '모두 풀고 확인을 눌러 스스로 고쳐요.', '고르기에 함정 카드가 더 나오고, 따라가기에서 반복과 돌기가 섞여요.'],
    notes: '자주 보이는 어려움: ① 프로그램만 주면 설명은 필요 없다고 여긴다 → 이름만 보고 쓰임을 알 수 있는지 묻는다. ② 이름과 하는 일을 구분하지 못한다 → 이름은 짧은 제목, 하는 일은 문장이라고 짚는다. ③ 설명에 전화번호·주소를 쓴다 → 모르는 사람이 보아도 되는 정보인지 묻는다.',
  }));

  // ───────────────────────── 9차시 (wrap) 합쳐 실행하고 올려서 고치기 ─────────────────────────
  L.push(lesson(9, '모둠 구간을 합쳐 실행하고 받은 의견으로 고치기',
    '모둠이 만든 구간을 합쳐 실행하고, 정해진 곳에 올린 뒤 받은 의견을 예의 있게 받아들여 프로그램을 고칠 수 있다.', ['[6실05-03]'], {
    ill: ['a classroom board with three paper puzzle pieces fitted together into one turtle robot path and sticky notes with friendly comments around it', '합치고 올리고 고쳐요', 0],
    intro: {
      teacher: '"세 사람이 따로 만든 구간을 이었더니 거북이가 부딪혔다면 누구 탓일까요?" 이어지는 자리의 약속이 어긋났다는 점에서 \'탓\'이 아니라 \'고칠 곳\'을 찾자고 말한다. 시연 단추로 고쳐서 합쳐진 프로그램이 깃발에 닿는 모습을 보여 주고 "올린 뒤 친구 의견을 받아 다시 고치는 것까지가 한 번의 협력이에요."라고 말한다. 의견을 받으면 기분이 상한다는 학생에게는 "의견은 프로그램을 더 좋게 만드는 재료예요. 어떻게 답하면 서로 기분이 좋을까요?"라고 묻는다.',
      student: '따로 만든 구간을 이었더니 거북이가 부딪혔을 때 누구 탓일지, 무엇을 고쳐야 할지 말해 봅시다.',
      demo: { tool: 'block-coding', options: { cols: 5, rows: 3, start: { x: 0, y: 2, dir: 'E' }, goal: { x: 4, y: 0 } }, sequence: [{ reach: true }] },
    },
    acts: [
      {
        title: '활동 1. 구간을 합쳐 하나의 프로그램 완성하기', tool: 'block-coding',
        teacher: '"각자 만든 구간이 이어지는 자리의 칸과 방향이 같은가요? 합쳐서 한 번 실행해 봅시다." 구간을 이어 붙인 뒤 반드시 처음부터 실행해 보게 한다. 구간마다 따로는 잘 되는데 합치면 안 되는 이유를 자리와 방향에서 찾게 한다.',
        task: '여러 구간을 이어 하나의 프로그램으로 합쳐, 처음부터 끝까지 실행해 깃발에 닿아요.',
        levels: { easy: { blocks: ['fwd', 'left', 'right'] }, base: { blocks: ['fwd', 'left', 'right', 'rep'] }, challenge: { blocks: ['fwd', 'left', 'right', 'rep'] } },
        items: [
          { prompt: '구간 둘을 이어 별 둘을 지나 깃발에 닿고, 반복 블록으로 블록 6개 이하로 만들어요.', toolOptions: { cols: 6, rows: 5, start: { x: 0, y: 4, dir: 'N' }, goal: { x: 5, y: 0 }, stars: [[0, 2], [3, 0]], rocks: [[1, 2]], blocks: ['fwd', 'left', 'right', 'rep'] }, target: { reach: true, stars: true, use: ['rep'], maxBlocks: 6 }, difficulty: 0.4 },
          { prompt: '세 사람이 나눈 길을 이어 별을 모아 깃발까지 가는 하나의 프로그램을 만들어요.', toolOptions: { cols: 6, rows: 4, start: { x: 0, y: 0, dir: 'S' }, goal: { x: 5, y: 3 }, stars: [[2, 3]] }, target: { reach: true, stars: true }, difficulty: 0.35 },
          { prompt: '바위 둘을 돌아 아래로 내려갔다 오른쪽으로 가는 길을 합쳐 완성해요.', toolOptions: { cols: 5, rows: 5, start: { x: 0, y: 0, dir: 'E' }, goal: { x: 4, y: 4 }, rocks: [[2, 0], [2, 1]], stars: [[1, 2]] }, target: { reach: true, stars: true }, difficulty: 0.5,
            conclude: '구간을 합친 뒤에는 처음부터 한 번에 실행해 이어지는 자리가 맞는지 확인해야 해요.' },
        ],
      },
      {
        title: '활동 2. 합친 프로그램의 어긋난 자리 고치기', tool: 'block-coding',
        teacher: '"합친 프로그램에서 처음으로 엉뚱하게 움직이는 곳이 어디인가요? 구간과 구간이 만나는 자리를 먼저 보세요." 처음으로를 누르고 다시 실행해 이어지는 자리를 살피게 한다. 한 군데만 고친다는 약속을 상기시키고, 여러 블록을 바꾼 학생에게는 "처음 프로그램과 다른 블록이 몇 개인가요?"라고 묻는다.',
        task: '합친 프로그램을 실행해 어긋난 자리를 찾고, 블록 하나만 고쳐 깃발에 닿아요.',
        levels: { easy: { blocks: ['fwd', 'left', 'right'] }, base: { blocks: ['fwd', 'left', 'right'] }, challenge: { blocks: ['fwd', 'left', 'right', 'rep'] } },
        items: [
          { prompt: '두 구간이 이어지는 자리에 돌기 블록이 빠졌어요. 한 블록만 보태 깃발에 닿게 해요.', toolOptions: { cols: 6, rows: 4, start: { x: 0, y: 3, dir: 'E' }, goal: { x: 5, y: 0 } }, state: { program: ['fwd', 'fwd', 'left', 'fwd', 'fwd', 'fwd', 'fwd', 'fwd', 'fwd'] }, target: { reach: true, maxEdits: 1 }, difficulty: 0.4 },
          { prompt: '이어지는 자리의 돌기 방향이 틀렸어요. 블록 하나만 고쳐 깃발에 닿게 해요.', toolOptions: { cols: 5, rows: 4, start: { x: 0, y: 0, dir: 'E' }, goal: { x: 4, y: 3 } }, state: { program: ['fwd', 'fwd', 'right', 'fwd', 'fwd', 'fwd', 'right', 'fwd', 'fwd'] }, target: { reach: true, maxEdits: 1 }, difficulty: 0.45 },
          { prompt: '앞 구간의 반복 횟수가 모자라요. 반복 횟수 하나만 고쳐 깃발에 닿게 해요.', toolOptions: { cols: 6, rows: 3, start: { x: 0, y: 2, dir: 'E' }, goal: { x: 5, y: 0 }, blocks: ['fwd', 'left', 'right', 'rep'] }, state: { program: ['rep:3', 'fwd', 'end', 'left', 'fwd', 'fwd', 'right', 'fwd'] }, target: { reach: true, maxEdits: 1 }, difficulty: 0.5,
            predict: { q: '구간을 합쳤는데 부딪히면 어디를 먼저 살펴야 할까요?', options: ['구간이 만나는 자리', '프로그램 이름', '맨 마지막 블록만'], answer: 0 },
            conclude: '구간이 이어지는 자리의 칸과 방향이 어긋나기 쉬워요. 그곳부터 살펴 한 군데씩 고쳐요.' },
        ],
      },
      {
        title: '활동 3. 올리고 의견 받아 고치는 일과 말 가려 보기', tool: 'mindmap',
        teacher: '"올린 프로그램에 \'설명이 어려워요\'라는 의견이 달렸어요. 어떻게 답하면 좋을까요?" 고맙다고 먼저 말하고, 고칠 것을 알리는 답이 좋음을 말하게 한다. 의견이 기분 나빠 대충 답하는 학생에게 "의견을 준 친구는 프로그램이 더 좋아지길 바란 거예요. 어떻게 답하면 그 마음이 전해질까요?"라고 묻는다.',
        task: '카드를 읽고 올리고 고치는 차례를 놓거나, 의견에 알맞게 답한 말을 골라요.',
        items: [
          { prompt: '프로그램을 올리고 의견을 받아 고치는 차례를 위에서부터 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: 'join', text: '합쳐서 실행해 확인해요' }, { id: 'post', text: '정해진 곳에 올려요' }, { id: 'read', text: '받은 의견을 읽어요' }, { id: 'fix', text: '의견을 반영해 고쳐요' }, { id: 'reply', text: '고마운 마음과 고친 점을 답해요' }] }, hints: ['올리기 전에는 실행해 확인하고, 올린 뒤에야 의견을 읽을 수 있어요. 고친 뒤에 알려 주는 순서를 찾아요.'], target: { order: ['join', 'post', 'read', 'fix', 'reply'] }, difficulty: 0.3 },
          { prompt: '받은 의견에 예의 바르게 답한 말만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '예의 바른 답', cards: ['알려 줘서 고마워요, 설명을 쉽게 고칠게요', '그건 너희가 못 읽는 거야', '좋은 생각이에요, 반복 횟수를 바꿔 볼게요', '의견은 필요 없어요'] }, hints: ['의견을 준 친구에게 고마움을 전하고 고칠 점을 말하는 답만 골라요. 상대를 탓하거나 무시하는 말은 빼요.'], target: { pick: ['알려 줘서 고마워요, 설명을 쉽게 고칠게요', '좋은 생각이에요, 반복 횟수를 바꿔 볼게요'] }, difficulty: 0.25 },
          { prompt: '받은 의견마다 먼저 고칠 곳을 짝 지어 보세요.', toolOptions: { mode: 'match', topic: '의견과 고칠 곳', slots: [{ id: 'hard', label: '설명이 어려워요' }, { id: 'stuck', label: '끝 칸에 닿지 않아요' }, { id: 'name', label: '이름만 봐서는 몰라요' }], cards: ['쓰는 방법 문장을 쉽게 바꿔요', '구간이 만나는 자리를 다시 봐요', '하는 일이 드러나게 이름을 바꿔요', '프로그램 색을 바꿔요'] }, hints: ['의견이 무엇이 불편하다는 말인지 보고, 그 불편을 푸는 곳을 이어요. 겉모습만 바꾸는 것은 답이 아니에요.'], target: { match: { hard: '쓰는 방법 문장을 쉽게 바꿔요', stuck: '구간이 만나는 자리를 다시 봐요', name: '하는 일이 드러나게 이름을 바꿔요' } }, difficulty: 0.35 },
        ],
      },
    ],
    exit: {
      teacher: '"이 단원에서 알고리즘, 프로그래밍, 협력과 공유 중 가장 자신 있는 것은 무엇인가요?" 한 가지를 고르고 까닭을 말하게 한다. 출구 2번에서 의견을 탓하는 답을 고른 학생에게 "그 답을 받은 친구는 어떤 마음일까요?"라고 되묻는다. 이번 단원 전체를 알고리즘으로 문제를 풀고, 프로그램으로 만들고, 함께 나누고 고치는 흐름으로 돌아보며 마무리한다.',
      items: [
        { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '예의 바른 답', cards: ['알려 줘서 고마워요', '의견은 필요 없어요', '고쳐서 다시 올릴게요'] }, prompt: '받은 의견에 예의 바르게 답한 말만 골라 보세요.', target: { pick: ['알려 줘서 고마워요', '고쳐서 다시 올릴게요'] }, difficulty: 0.15 },
        { type: 'choice', prompt: '구간을 합쳐 부딪혔을 때 가장 먼저 살필 곳은 어디인가요?', options: ['구간이 만나는 자리의 칸과 방향', '프로그램 이름', '글자 색'], answer: 0, difficulty: 0.2, explain: '구간이 이어지는 자리가 어긋나기 쉬워서 칸과 방향부터 살펴요.' },
        { type: 'short', prompt: '이 단원에서 배운 것 가운데 앞으로 쓰고 싶은 것 하나와 까닭을 쓰세요.' },
        { type: 'mood', prompt: '이 단원 공부는 어땠나요?' },
      ],
    },
    ws: {
      title: '단원 돌아보기 — 만들고 나누고 고치기',
      items: [
        { type: 'figure', prompt: '두 구간을 이어 깃발에 닿는 길을 화살표로 그리세요.', tool: 'block-coding', options: { cols: 6, rows: 4, start: { x: 0, y: 3, dir: 'E' }, goal: { x: 5, y: 0 }, rocks: [[3, 3]], stars: [[2, 3]] }, figures: [{ state: { program: [] }, caption: '합친 프로그램' }], answer: '예: 앞으로 2, 왼쪽 돌기, 앞으로 3, 오른쪽 돌기, 앞으로 3' },
        { type: 'table', prompt: '단원 자기 평가: 알맞은 칸에 ○ 하세요.', columns: ['나는', '잘해요', '조금 해요', '아직이에요'], cells: [['시작 상태와 목표 상태를 나누어 말할 수 있어요', '', '', ''], ['명령의 순서와 반복을 이해해요', '', '', ''], ['어긋난 곳을 한 군데씩 고칠 수 있어요', '', '', ''], ['함께 만들고 의견을 받아 고쳤어요', '', '', '']] },
        { type: 'choice', prompt: '받은 의견에 알맞게 답한 말에 ○ 하세요.', options: ['알려 줘서 고마워요, 고쳐 볼게요', '그런 말은 하지 마세요', '의견은 필요 없어요'], answer: '알려 줘서 고마워요, 고쳐 볼게요' },
        { type: 'short', prompt: '이 단원에서 함께 만들며 가장 뿌듯했던 순간과 앞으로 다짐을 쓰세요.' },
      ],
      easy: {
        note: '알고리즘으로 문제를 풀고, 프로그램을 만들고, 함께 나누고 의견으로 고쳐요.',
        items: [
          { type: 'figure', prompt: '거북이가 깃발에 닿는 길을 화살표로 그리세요.', tool: 'block-coding', options: { cols: 5, rows: 3, start: { x: 0, y: 2, dir: 'E' }, goal: { x: 3, y: 0 } }, figures: [{ state: { program: [] }, caption: '깃발까지' }], answer: '예: 앞으로 3, 왼쪽 돌기, 앞으로 2' },
          { type: 'table', prompt: '자기 평가: 알맞은 칸에 ○ 하세요.', columns: ['나는', '잘해요', '아직이에요'], cells: [['순서대로 프로그램을 만들었어요', '', ''], ['함께 만들었어요', '', '']] },
          { type: 'choice', prompt: '의견에 알맞게 답한 말에 ○ 하세요.', options: ['알려 줘서 고마워요', '필요 없어요'], answer: '알려 줘서 고마워요' },
          { type: 'short', prompt: '이 단원에서 가장 재미있었던 일을 쓰세요.' },
        ],
      },
    },
    diff: ['합치기 문항은 앞으로·돌기 블록만 쓰고, 고치기는 판이 작아요.', '모두 풀고 확인을 눌러 스스로 고쳐요.', '합치기에 반복 블록이 더해지고, 고치기에는 반복 횟수가 틀린 프로그램이 나와요.'],
    notes: '자주 보이는 어려움: ① 따로는 잘 되는데 합치면 안 되는 까닭을 모른다 → 구간이 만나는 자리의 칸과 방향을 보게 한다. ② 의견을 비난으로 받아들인다 → 프로그램을 좋게 만드는 재료라고 알려 주고 고마움을 먼저 말하게 한다. ③ 올리고 끝낸다 → 의견을 반영해 고치고 알리는 것까지가 한 번의 협력임을 짚는다. 단원 자기 평가의 \'아직이에요\'는 꾸중이 아니라 다음 목표로 다룬다.',
  }));


  PaperLessons.registerUnit({
    id: 'g5-prac-2-05', schema: 'edu-unit.v1', catalogUnit: U.catalog,
    grade: U.grade, subject: U.subject, unitTitle: U.unitTitle,
    flow: '1~3차시는 문제 해결과 알고리즘이다: 가방 싸기와 거북이 길 찾기로 시작 상태와 목표 상태를 가르고, 같은 절차를 말과 순서도로 나타내 견준 뒤, 친구가 따라 하다 막히는 문장을 찾아 분명하게 고친다. 4~6차시는 명령과 기초 프로그래밍이다: 같은 블록도 순서가 달라지면 결과가 달라짐을 따라가 보고, 되풀이되는 묶음을 반복 블록으로 줄이며, 만든 프로그램을 실행해 어긋난 곳을 한 군데씩 고친다. 7~9차시는 협력과 공유다: 모둠의 일을 역할로 나누고 구간을 이어 만들고, 나눌 때 갖출 설명 항목을 정하고, 합친 프로그램을 올려 받은 의견으로 고친다. 세 묶음 모두 앞 차시에서 개념을 잡고 뒤 차시에서 직접 만들고 고치는 흐름이며, 거북이 코딩판·카드 판으로 차시마다 몸으로 따라가 보게 한다.',
    refs: {},
    lessons: L,
  });
})();
