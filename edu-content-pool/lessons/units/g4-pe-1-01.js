/* 4학년 1학기 체육 1. 운동 — 28차시.
 * 몸으로 하는 활동(제자리 뛰기·스트레칭·계단 오르기·쉬는 시간 움직이기)은 교구가 판정하지 않는다. 교구는 계획(타이머·차례·요일 칸)·관찰(그래프 읽기·분류)·
 * 판단(안전·몸 신호·방해 상황)·기록과 스스로 점검을 맡고, 실제 움직임과 일상 실천(집·학교)은 task·teacher·활동지에 적어 교사가 관찰하고 학생이 기록한다.
 * 그래프·기록의 수(횟수·시간·날짜)는 설명을 위해 지은 예시 자료다. 학생 이름 예시는 가명(민지·준호·서연·도윤·지아)만 쓴다.
 * 몸 상태나 건강에 관한 말은 일반 수업 수준(준비 운동·물 마시기·아프면 멈추기)만 쓰고, 진단·치료·식단 처방은 다루지 않는다.
 */
(function () {
  const UNIT = 'g4-pe-1-01';
  const CU = 'g4-체육-1학기-1';
  const BASE = { schema: 'edu-lesson.v1', grade: 4, subject: '체육', unitTitle: '1. 운동', minutes: 40, formats: ['chromebook', 'projector', 'print'] };
  // 체육은 units-map.json 에 없어 check-unit 이 units-index.json 의 단원 성취기준(이 단원은 이 세 개)만 받는다.
  // 차시 묶음별로 고른다: 1~10 신체 특징과 운동 계획(4che0105) · 11~19 운동과 건강 습관(4che0106) · 20~28 생활 습관 실천(4che0104).
  const S5 = '[4체01-05]'; const S6 = '[4체01-06]'; const S4 = '[4체01-04]';
  const stdOf = (n) => (n <= 10 ? S5 : n <= 19 ? S6 : S4);
  const art = (what, layers) => ({
    prompt: `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`,
    scene: { viewBox: [480, 270], layers },
  });
  const L = (n, o) => Object.assign({ id: `${UNIT}-${String(n).padStart(2, '0')}`, catalog: { unit: CU, lesson: n } }, BASE, { standards: [stdOf(n)] }, o);
  const stages = (intro, acts, wrap) => [
    Object.assign({ id: 'intro', title: '도입', minutes: 6 }, intro),
    { id: 'main', title: '전개', minutes: 26, activities: acts },
    Object.assign({ id: 'wrapup', title: '정리', minutes: 8 }, wrap),
  ];
  const CARD = { easy: { live: true, instant: true }, base: {}, challenge: {} };
  const MOOD = (prompt) => ({ type: 'mood', prompt });
  // 안전 약속(차시마다 골라 쓴다)
  const SPACE = '친구와 두 팔을 벌려 닿지 않을 만큼 떨어져서 움직여요.';
  const FLOOR = '실내화 끈과 바닥의 물기를 살피고, 미끄러운 곳에서는 뛰지 않아요.';
  const STOP = '어지럽거나 숨이 너무 차면 바로 멈추고 선생님께 말해요.';
  const PAIN = '아픈 곳이 생기면 참지 말고 바로 멈추고 선생님께 알려요.';
  const WARM = '준비 운동으로 몸을 먼저 풀고 나서 힘을 써요.';
  const OWN = '친구와 횟수를 견주지 말고, 내 몸에 맞는 만큼만 해요.';
  const WATER = '목이 마르면 쉬는 때에 물을 마셔요.';
  const STAIR = '계단은 난간을 잡고 한 칸씩 걸어서 오르내려요.';
  const LOOK = '움직일 때는 가는 쪽을 먼저 보고, 멈춤 신호를 들으면 바로 서요.';

  PaperLessons.registerUnit({
    id: UNIT, schema: 'edu-unit.v1', catalogUnit: CU,
    grade: 4, subject: '체육', unitTitle: '1. 운동',
    flow: '1~10차시는 키·팔 길이·잘하는 움직임이 사람마다 다르다는 것을 알아보고, 운동 전 풀어 줄 부위와 몸의 신호(계속·쉬며 물 마시기·멈추고 알리기)를 익힌 뒤, 언제·어디서·무엇을이 들어간 계획표를 만들어 하루치를 안전하게 해 보고 못 지킨 까닭을 찾아 계획을 고칩니다. 11~19차시는 하루 중 앉아 있는 때를 그래프로 찾고 앉은 시간을 줄이면 좋아지는 점을 근거로 말한 뒤, 방법 하나를 골라 하루 해 보고 짝과 약속해 서로 확인하며 안전하게 움직이고 이어 갈지를 기록으로 정합니다. 20~28차시는 잠·밥·손 씻기 가운데 어려운 습관이 몸·마음·친구 사이로 이어지는 모습을 보고, 구체적인 이레 목표를 학교와 집에서 날마다 표시하며 지키고, 어려운 날의 방법과 도움 받기를 정해 단원을 돌아봅니다. 교구는 계획·분류·그래프 읽기·기록·점검을 맡고, 실제 움직임과 집·학교의 실천은 교사가 관찰하고 학생이 표로 남깁니다.',
    refs: {},
    lessons: [
      // ───────────────────────── 1 ─────────────────────────
      L(1, {
        title: '친구마다 다른 몸, 잘하는 움직임 찾아보기',
        objective: '키·팔 길이·몸의 가벼움처럼 몸의 특징이 사람마다 다르다는 것을 사례로 들고, 자기가 잘하는 움직임과 더 익히고 싶은 움직임을 나누어 적을 수 있다.',
        illustration: art('four children of different heights stretching, jumping, running and balancing together in a school playground, each with a small paper star above their head', [
          { motif: 'sun', x: 410, y: 54, s: 0.8 }, { motif: 'cloud', x: 100, y: 50 }, { motif: 'hills', y: 208 },
          { motif: 'tree', x: 60, y: 212 }, { motif: 'tree', x: 430, y: 214, s: 0.8 },
          { motif: 'text', x: 240, y: 128, text: '나는 이걸 잘해요!', size: 26 },
        ]),
        safety: [SPACE, FLOOR, WARM],
        stages: stages(
          {
            teacher: '"우리 반에서 키가 가장 큰 친구와 가장 작은 친구 가운데 누가 운동을 더 잘할까요?" 학생 생각을 듣고, 높이 닿기·낮게 구르기·오래 달리기·공 던지기 같은 움직임을 칠판에 적으며 움직임마다 잘하는 사람이 다를 수 있음을 짚는다. "몸집이 크면 모든 운동을 더 잘한다"는 생각이 나오면 반대 사례를 한 가지 물어 본다.',
            student: '내 몸에는 어떤 특징이 있을까요? 내가 잘하는 움직임과 친구가 잘하는 움직임을 찾아봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 몸의 특징과 어울리는 움직임 알아보기', minutes: 13, tool: 'mindmap',
              task: '몸의 특징과 움직임을 이어 보고, 사람마다 다르다는 것을 알려 주는 말과 몸의 특징·연습으로 달라지는 것을 가려내요.',
              teacher: '"팔이 길면 어떤 움직임이 쉬울까요? 직접 팔을 쭉 뻗어 보세요." 특징과 움직임이 짝지어질 수는 있어도 그것만으로 운동 실력이 정해지지는 않는다고 말해 준다. 연습으로 달라지는 것(자세·요령)을 몸의 특징과 섞는 학생에게 "연습하면 바뀌는 것인가요?"라고 되묻는다.',
              levels: CARD,
              items: [
                { prompt: '몸의 특징에 어울릴 수 있는 움직임을 이어요.', toolOptions: { mode: 'match', topic: '몸의 특징과 움직임', slots: [{ id: 'arm', label: '팔이 길어요' }, { id: 'light', label: '몸이 가벼워요' }, { id: 'long', label: '숨을 오래 고르게 쉬어요' }], cards: ['멀리 뻗어 공 막기', '가볍게 뛰어올라 닿기', '쉬지 않고 천천히 오래 달리기'] }, target: { match: { arm: '멀리 뻗어 공 막기', light: '가볍게 뛰어올라 닿기', long: '쉬지 않고 천천히 오래 달리기' } }, difficulty: 0.15 },
                { prompt: '사람마다 몸이 다르다는 것을 알려 주는 말만 골라요.', toolOptions: { mode: 'pick', topic: '사람마다 달라요', cards: ['키가 큰 친구와 작은 친구는 잘하는 움직임이 달라요', '몸집이 큰 사람이 모든 운동을 더 잘해요', '나는 달리기가 빠르고 친구는 공을 멀리 던져요', '운동을 못하는 몸은 따로 정해져 있어요'] }, target: { pick: ['키가 큰 친구와 작은 친구는 잘하는 움직임이 달라요', '나는 달리기가 빠르고 친구는 공을 멀리 던져요'] }, difficulty: 0.2 },
                { prompt: '몸의 특징이에요, 연습으로 달라져요? 카드를 두 칸으로 나누어요.', toolOptions: { topic: '몸의 특징과 연습', slots: ['몸의 특징이에요', '연습으로 달라져요'], cards: ['타고난 키', '팔다리의 길이', '공을 던지는 요령', '줄을 넘는 횟수'] }, target: { sort: { '몸의 특징이에요': ['타고난 키', '팔다리의 길이'], '연습으로 달라져요': ['공을 던지는 요령', '줄을 넘는 횟수'] } }, difficulty: 0.25,
                  conclude: '키와 팔다리 길이는 사람마다 달라요. 요령과 횟수는 연습하면 달라질 수 있어요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 내가 잘하는 움직임 해 보고 적기', minutes: 13, tool: 'timer',
              task: '안전 점검을 하고, 세 가지 움직임을 한 번씩 해 본 기록을 적어요. 그다음 내가 잘하는 움직임과 익히고 싶은 움직임을 점검해요.',
              teacher: '"친구와 숫자를 견주려는 게 아니에요. 내 몸이 해낸 만큼을 적어요." 기록이 친구보다 적다고 속상해하는 학생에게 "다음 주의 나와 견주어 보자"고 말해 준다. 한 발 서기에서는 균형을 잃기 전에 손을 내려놓게 해서 넘어짐을 막는다.',
              levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
              items: [
                { prompt: '움직여 보기 전에 둘레를 살피고 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['내 둘레에 두 팔을 벌릴 공간이 있어요', '바닥에 물기나 떨어진 물건이 없어요', '아프거나 어지러운 곳이 없어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '한 번씩 해 보고 기록을 적어요. 제자리 뛰기 20초 횟수, 한 발로 선 초, 공 받은 횟수예요.', toolOptions: { fields: [{ label: '제자리 뛰기 20초', unit: '번' }, { label: '한 발로 서기', unit: '초' }, { label: '공 던져 받기', unit: '번' }] }, target: { records: true }, difficulty: 0.15 },
                { prompt: '오늘 알게 된 내 몸과 움직임을 점검 목록에 표시해요.', target: { selfCheck: ['내가 잘하는 움직임을 한 가지 말했어요', '더 익히고 싶은 움직임을 한 가지 정했어요', '친구가 잘하는 움직임을 한 가지 찾아 칭찬했어요'] }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"오늘 알게 된 것 한 가지만 말해 볼까요? 친구가 나보다 잘하는 움직임이 있으면 나는 못하는 걸까요?" 두 가지 이상 움직임이 있다는 것을 다시 짚는다. 정리 운동으로 어깨와 목을 천천히 돌리며 숨을 고른다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { topic: '몸의 특징과 연습', slots: ['몸의 특징이에요', '연습으로 달라져요'], cards: ['어깨너비', '다리 길이', '발을 구르는 요령', '숨 고르는 방법'] }, prompt: '새 카드를 두 칸으로 나누어요.', target: { sort: { '몸의 특징이에요': ['어깨너비', '다리 길이'], '연습으로 달라져요': ['발을 구르는 요령', '숨 고르는 방법'] } }, difficulty: 0.2 },
              { type: 'choice', prompt: '몸집이 큰 친구가 모든 운동을 가장 잘한다는 말은 맞을까요?', options: ['맞아요, 몸집이 큰 사람이 이겨요', '아니에요, 움직임마다 잘하는 사람이 달라요', '아니에요, 몸집이 작은 사람이 늘 이겨요'], answer: 1, difficulty: 0.2, explain: '움직임마다 도움이 되는 몸의 특징이 달라서 잘하는 사람도 달라요.' },
              MOOD('내 몸의 특징을 알아본 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '나의 몸, 나의 움직임',
          items: [
            { type: 'table', prompt: '오늘 해 본 기록을 쓰세요.', columns: ['움직임', '내 기록'], cells: [['제자리 뛰기 20초', ''], ['한 발로 서기', ''], ['공 던져 받기', '']] },
            { type: 'choice', prompt: '다음 중 연습으로 달라질 수 있는 것에 ○ 하세요.', options: ['타고난 키', '공을 던지는 요령', '팔다리의 길이'], answer: '공을 던지는 요령' },
            { type: 'table', prompt: '움직임을 나누어 쓰세요.', columns: ['내가 잘하는 움직임', '더 익히고 싶은 움직임'], rows: 2 },
            { type: 'check', prompt: '오늘 지킨 안전 약속에 ✓ 하세요.', options: ['두 팔 간격을 지켰어요', '준비 운동을 먼저 했어요', '친구와 기록을 견주지 않았어요'] },
            { type: 'short', prompt: '친구가 잘하는 움직임 하나와 칭찬하는 말을 쓰세요.' },
          ],
          easy: {
            note: '내 몸의 모습과 잘하는 움직임을 떠올려 봐요. 정답은 사람마다 달라요.',
            items: [
              { type: 'choice', prompt: '연습하면 달라질 수 있는 것은?', options: ['공을 던지는 요령', '타고난 키'], answer: '공을 던지는 요령' },
              { type: 'short', prompt: '내가 잘하는 움직임을 하나 쓰세요.' },
              { type: 'draw', prompt: '내가 잘하는 움직임을 하는 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 맞는 칸에 놓으면 바로 맞는지 알려 줘요. 기록판은 처음 값부터 시작해 한 칸씩 바꿔 적어요.',
          base: '카드를 모두 놓은 뒤 확인해 스스로 고쳐요.',
          challenge: '기록판의 시간 재기를 켜서 한 발 서기를 직접 재어 적어요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 몸집이 큰 사람이 모든 운동을 더 잘한다고 여긴다 → 움직임마다 도움이 되는 몸이 다른 사례를 든다. ② 기록을 친구와 견주어 속상해한다 → 내 기록은 내 몸에 맞는 값이라고 말하고 다음 주의 나와 견준다. ③ 연습으로 바뀌는 것과 타고난 특징을 섞는다 → "연습하면 바뀌나요?"를 되묻는다. 실제 움직임은 교구가 판정하지 않고 교사가 관찰한다.',
      }),
      // ───────────────────────── 2 ─────────────────────────
      L(2, {
        title: '키가 달라도 괜찮아, 친구의 강점 찾아 말하기',
        objective: '친구의 몸의 특징과 연습 경험을 근거로 그 친구가 잘하는 움직임을 찾아 말하고, 몸이 달라서 속상할 때 어떻게 할지 고를 수 있다.',
        illustration: art('three children of different heights cheering each other with paper stars, a tall child reaching high, a small child curling low, a child jogging steadily', [
          { motif: 'sun', x: 400, y: 56, s: 0.7 }, { motif: 'cloud', x: 100, y: 50 }, { motif: 'hills', y: 210 },
          { motif: 'flower', x: 80, y: 212 }, { motif: 'flower', x: 410, y: 212 },
          { motif: 'text', x: 240, y: 128, text: '너는 이게 멋져!', size: 26 },
        ]),
        safety: [SPACE, FLOOR, OWN],
        stages: stages(
          {
            teacher: '지난 시간에 "움직임마다 잘하는 사람이 다르다"고 했다. 오늘은 이름을 붙인 가상 친구 사례로 이어 간다. "준호는 팔이 길고, 민지는 매일 아침 줄넘기를 해요. 두 친구가 잘하는 움직임은 같을까요?" 근거가 둘 — 몸의 특징과 연습 경험 — 이라는 것을 짚고, 속상한 마음이 들 때 어떻게 하면 좋을지도 다룬다고 알려 준다.',
            student: '민지, 준호, 서연의 이야기를 읽고 친구마다 잘하는 움직임을 찾아봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 친구의 강점과 근거 찾기', minutes: 13, tool: 'mindmap',
              task: '가상 친구의 이야기에서 잘하는 움직임을 찾고, 어떤 칭찬이 알맞은지, 틀린 생각은 무엇인지 가려내요.',
              teacher: '"어떤 이야기에서 그렇게 생각했나요? 근거를 말해 볼까요?" 칭찬은 몸을 흉보지 않고 한 일을 구체적으로 말해야 한다고 짚는다. "키가 작아서 안 돼"를 칭찬으로 고르는 학생에게는 몸을 탓하는 말이 왜 칭찬이 아닌지 묻는다.',
              levels: CARD,
              items: [
                { prompt: '가상 친구마다 이야기에 어울리는 잘하는 움직임을 이어요.', toolOptions: { mode: 'match', topic: '친구의 강점', slots: [{ id: 'minji', label: '민지: 매일 아침 줄넘기를 해요' }, { id: 'junho', label: '준호: 두 팔이 길어요' }, { id: 'seoyeon', label: '서연: 걸음이 일정하고 숨을 잘 골라요' }], cards: ['줄을 오래 넘기기', '멀리 뻗어 공 받기', '천천히 오래 달리기'] }, target: { match: { minji: '줄을 오래 넘기기', junho: '멀리 뻗어 공 받기', seoyeon: '천천히 오래 달리기' } }, difficulty: 0.15 },
                { prompt: '친구의 잘하는 움직임을 칭찬하는 말을 골라요.', toolOptions: { mode: 'pick', topic: '알맞은 칭찬', cards: ['공을 던질 때 팔이 쭉 뻗어서 멋있어', '너는 키가 작아서 이 운동은 안 돼', '오래 달리는데 걸음이 흔들리지 않았어', '너보다 내가 더 잘해'] }, target: { pick: ['공을 던질 때 팔이 쭉 뻗어서 멋있어', '오래 달리는데 걸음이 흔들리지 않았어'] }, difficulty: 0.2 },
                { prompt: '이야기를 맞는 생각과 고쳐야 할 생각 두 칸으로 나누어요.', toolOptions: { topic: '맞는 생각과 오해', slots: ['맞는 생각이에요', '고쳐야 해요'], cards: ['몸이 달라도 잘하는 움직임이 있어요', '키가 작으면 모든 운동이 어려워요', '연습으로 요령이 늘 수 있어요', '몸집이 큰 사람이 늘 이겨요'] }, target: { sort: { '맞는 생각이에요': ['몸이 달라도 잘하는 움직임이 있어요', '연습으로 요령이 늘 수 있어요'], '고쳐야 해요': ['키가 작으면 모든 운동이 어려워요', '몸집이 큰 사람이 늘 이겨요'] } }, difficulty: 0.25,
                  conclude: '칭찬은 몸이 아니라 친구가 한 움직임을 구체적으로 말해 주는 거예요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 속상할 때 이럴 땐 어떻게?', minutes: 13, tool: 'emotion',
              task: '몸이 달라 속상할 수 있는 상황이에요. 어떻게 할지 고르고, 고른 대로 짝과 말로 해 봐요.',
              teacher: '"속상한 마음은 나쁜 걸까요?" 속상한 것은 자연스럽고, 그다음 행동이 중요하다고 말해 준다. 포기하거나 친구 탓을 하는 보기를 고른 학생에게는 "그러면 내 마음이 풀릴까요?"라고 되묻고, 다시 고르게 한다.',
              levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '높은 곳에 달린 공을 건드리지 못해서 속상해요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '키가 작아 높이 달린 공을 건드리지 못했어요.', choices: [{ id: 'quit', text: '"나는 이 운동 안 할래" 하고 빠져요', result: '더 속상하고 친구들과도 멀어졌어요.', mood: '속상함', why: '빠지면 연습할 기회가 없어요.' }, { id: 'jump', text: '한 걸음 뒤에서 다리를 구부렸다 뛰는 요령을 연습해요', result: '조금씩 더 높이 닿았어요.', mood: '뿌듯함' }, { id: 'blame', text: '키 큰 친구를 탓해요', result: '친구와 사이가 나빠졌어요.', mood: '화남', why: '친구는 잘못한 것이 없어요.' }] }, target: { choice: 'jump' }, difficulty: 0.15 },
                { prompt: '내 달리기를 친구가 느리다고 놀려요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '친구가 내 달리기를 느리다고 놀려요.', choices: [{ id: 'tell', text: '"그 말은 속상해. 그만해 줘"라고 말해요', result: '친구가 놀리는 것을 멈췄어요.', mood: '편안함' }, { id: 'hit', text: '친구를 밀어요', result: '둘 다 다칠 뻔했어요.', mood: '놀람', why: '몸으로 해결하면 다쳐요.' }, { id: 'hide', text: '아무 말도 못 하고 달리기를 그만둬요', result: '속상한 마음이 계속 남았어요.', mood: '속상함', why: '마음을 말해야 풀려요.' }] }, target: { choice: 'tell' }, difficulty: 0.15 },
                { prompt: '몸집이 큰 친구와 한 판에서 졌어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '몸집이 큰 친구와 한 판에서 졌어요.', choices: [{ id: 'excuse', text: '"쟤는 몸이 커서 반칙이야"라고 해요', result: '친구가 억울해했어요.', mood: '화남', why: '몸집은 반칙이 아니에요.' }, { id: 'tactic', text: '내가 잘하는 빠른 방향 바꾸기로 다음에 해 봐요', result: '다음 판에서 더 잘 버텼어요.', mood: '뿌듯함' }, { id: 'giveup', text: '"나는 원래 못해"라고 말해요', result: '다음 판도 하기 싫어졌어요.', mood: '속상함', why: '그렇게 말하면 연습할 마음이 사라져요.' }] }, target: { choice: 'tactic' }, difficulty: 0.2 },
              ],
            },
          ],
          {
            teacher: '"오늘 친구에게 한 칭찬 중 가장 구체적이었던 말은 무엇인가요?" 한두 명이 말해 보게 한다. 출구 1번을 틀린 학생은 근거 이야기를 다시 읽고 어느 말에서 그렇게 생각했는지 찾게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '친구의 강점', slots: [{ id: 'doyun', label: '도윤: 다리가 길어요' }, { id: 'jia', label: '지아: 날마다 공을 받아 보았어요' }], cards: ['성큼성큼 멀리 걷기', '공을 안정적으로 받기'] }, prompt: '새 친구 이야기에서 잘하는 움직임을 이어요.', target: { match: { doyun: '성큼성큼 멀리 걷기', jia: '공을 안정적으로 받기' } }, difficulty: 0.2 },
              { type: 'choice', prompt: '친구의 움직임을 칭찬할 때 가장 알맞은 말은 무엇인가요?', options: ['넌 키가 커서 당연히 잘하지', '공을 받을 때 두 손이 부드러웠어', '너보다 내가 잘해'], answer: 1, difficulty: 0.15, explain: '한 일을 구체적으로 말해 주는 것이 좋은 칭찬이에요.' },
              MOOD('친구의 강점을 찾아본 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '친구의 강점 찾기',
          items: [
            { type: 'table', prompt: '이야기 속 친구와 잘하는 움직임을 이어 쓰세요.', columns: ['친구', '근거', '잘하는 움직임'], cells: [['민지', '매일 아침 줄넘기를 해요', ''], ['준호', '두 팔이 길어요', ''], ['서연', '걸음이 일정해요', '']] },
            { type: 'choice', prompt: '알맞은 칭찬에 ○ 하세요.', options: ['넌 키가 작아서 안 돼', '달릴 때 팔을 크게 흔들어서 멋졌어', '내가 훨씬 빨라'], answer: '달릴 때 팔을 크게 흔들어서 멋졌어' },
            { type: 'short', prompt: '내 짝의 잘하는 움직임을 하나 찾아 칭찬하는 말을 쓰세요.' },
            { type: 'check', prompt: '속상할 때 할 일에 ✓ 하세요.', options: ['마음을 말로 해요', '연습 방법을 바꿔 봐요', '친구 탓을 해요'] },
          ],
          easy: {
            note: '칭찬은 친구가 한 일을 구체적으로 말하는 거예요.',
            items: [
              { type: 'choice', prompt: '좋은 칭찬은?', options: ['공을 부드럽게 받았어', '너는 못해'], answer: '공을 부드럽게 받았어' },
              { type: 'short', prompt: '짝에게 하고 싶은 칭찬을 쓰세요.' },
              { type: 'draw', prompt: '친구가 잘하는 움직임을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 맞는 칸에 놓으면 바로 맞는지 알려 줘요. 상황 문항은 고를 보기가 두세 개예요.',
          base: '모두 놓은 뒤 확인해 스스로 고쳐요.',
          challenge: '상황 문항에서 확인을 누르기 전까지 결과가 보이지 않아 까닭을 먼저 생각해요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 몸집이 큰 사람이 늘 이긴다고 여긴다 → 움직임마다 잘하는 사람이 다른 사례. ② 칭찬이 몸을 평가하는 말이 된다 → 한 일을 구체적으로 말하기. ③ 속상할 때 포기하거나 친구 탓을 한다 → 마음을 말로 하고 방법을 바꾸는 쪽을 고르게 한다. 상황 선택은 짝과 말로 재현해 본다.',
      }),
      // ───────────────────────── 3 ─────────────────────────
      L(3, {
        title: '우리 반이 잘하는 움직임 그래프로 읽기',
        objective: '우리 반이 잘하는 움직임을 조사한 막대그래프를 만들고 읽어, 사람마다 잘하는 움직임이 다양하다는 것을 말할 수 있다.',
        illustration: art('a colorful paper bar chart on a classroom wall with small paper figures jumping, running, throwing and balancing on top of each bar', [
          { motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'cloud', x: 90, y: 52 }, { motif: 'hills', y: 210 },
          { motif: 'flower', x: 70, y: 212 }, { motif: 'tree', x: 420, y: 212, s: 0.8 },
          { motif: 'text', x: 240, y: 128, text: '우리 반 움직임 조사', size: 24 },
        ]),
        safety: [SPACE, FLOOR, STOP],
        stages: stages(
          {
            teacher: '"우리 반 친구들이 잘하는 움직임이 모두 같을까요? 손을 들어 보고 세어 볼까요?" 한 가지씩 손을 들게 해 보고 사람마다 다르다는 것을 눈으로 확인한다. 몸으로 한 조사를 그래프로 나타내면 한눈에 보인다고 알려 준다. 몸집이 큰 사람이 가장 많은 칸에 있을 거라는 생각이 나오면 "그래프로 확인해 봐요"라고 한다.',
            student: '우리 반 친구들은 어떤 움직임을 가장 잘할까요? 그래프로 나타내고 읽어 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 조사한 기록 막대그래프로 나타내고 읽기', minutes: 13, tool: 'chart',
              task: '한 모둠이 조사한 예시 자료로 막대그래프를 완성하고, 가장 많은 것과 차이를 읽어요. 우리 반 자료는 활동지에 옮겨 그려요.',
              teacher: '"가장 높은 막대는 무엇이에요? 그 막대가 높다고 그 움직임이 가장 좋은 걸까요?" 막대가 높은 것은 그 움직임을 잘하는 친구가 많다는 뜻이지 더 좋다는 뜻이 아니라고 말해 준다. 막대 눈금을 세지 않고 눈대중으로 읽는 학생에게 눈금선을 따라가 보게 한다.',
              levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '우리 모둠이 잘하는 움직임을 조사한 표를 보고 막대그래프를 완성해요.', toolOptions: { type: 'bar', title: '우리 모둠이 잘하는 움직임(명)', unit: '명', xLabel: '움직임', yLabel: '친구 수', data: [['달리기', 5], ['공 던지기', 3], ['줄넘기', 4], ['균형 잡기', 2]] }, target: { build: true }, levels: { easy: { toolOptions: { given: [0, 1] } } }, difficulty: 0.15 },
                { prompt: '그래프에서 잘하는 친구가 가장 많은 움직임을 골라요.', toolOptions: { type: 'bar', mode: 'read', title: '우리 모둠이 잘하는 움직임(명)', unit: '명', xLabel: '움직임', yLabel: '친구 수', data: [['달리기', 5], ['공 던지기', 3], ['줄넘기', 4], ['균형 잡기', 2]], question: '가장 많은 움직임은?', choices: ['달리기', '공 던지기', '줄넘기', '균형 잡기'] }, target: { pick: 0 }, difficulty: 0.15 },
                { prompt: '줄넘기를 잘하는 친구는 균형 잡기를 잘하는 친구보다 몇 명 더 많은지 써요.', toolOptions: { type: 'bar', mode: 'read', title: '우리 모둠이 잘하는 움직임(명)', unit: '명', xLabel: '움직임', yLabel: '친구 수', data: [['달리기', 5], ['공 던지기', 3], ['줄넘기', 4], ['균형 잡기', 2]], question: '줄넘기는 균형 잡기보다 몇 명 더 많나요?' }, target: { value: 2 }, levels: { challenge: { prompt: '모둠 친구 14명이 모두 한 가지씩 골랐다면, 그래프에 없는 ‘기타’를 고른 친구는 몇 명인지 써요.', toolOptions: { question: '기타를 고른 친구는 몇 명인가요?' }, target: { value: 0 } } }, difficulty: 0.2,
                  conclude: '막대가 높다고 더 좋은 것이 아니에요. 그 움직임을 잘하는 친구가 더 많다는 뜻이에요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 그래프를 보고 내 생각 말하기', minutes: 13, tool: 'mindmap',
              task: '그래프에서 알 수 있는 것과 알 수 없는 것을 가려내고, 내 움직임이 어느 막대에 있는지 찾아 짝에게 말해요.',
              teacher: '"그래프에서 알 수 있는 것은 무엇이고, 알 수 없는 것은 무엇일까요?" 그래프로 몇 명인지는 알 수 있지만 누가 더 힘이 센지는 알 수 없다고 가려 준다. "나는 아무 막대에도 없어요"라고 하는 학생에게는 아직 찾지 못한 움직임이 있다고 말하고 다음 시간에 찾아보게 한다.',
              levels: CARD,
              items: [
                { prompt: '그래프에서 알 수 있는 것과 알 수 없는 것으로 나누어요.', toolOptions: { topic: '그래프로 알아요?', slots: ['알 수 있어요', '알 수 없어요'], cards: ['달리기를 잘하는 친구가 몇 명인지', '줄넘기를 가장 오래 한 친구가 누구인지', '움직임마다 잘하는 친구 수가 다르다는 것', '친구들의 키가 몇 센티미터인지'] }, target: { sort: { '알 수 있어요': ['달리기를 잘하는 친구가 몇 명인지', '움직임마다 잘하는 친구 수가 다르다는 것'], '알 수 없어요': ['줄넘기를 가장 오래 한 친구가 누구인지', '친구들의 키가 몇 센티미터인지'] } }, difficulty: 0.25 },
                { prompt: '그래프를 보고 알맞게 말한 것만 골라요.', toolOptions: { mode: 'pick', topic: '그래프 읽기', cards: ['잘하는 움직임이 친구마다 달라요', '달리기가 가장 높으니 달리기만 해야 해요', '낮은 막대의 움직임도 잘하는 친구가 있어요', '막대가 낮으면 그 움직임은 쓸모없어요'] }, target: { pick: ['잘하는 움직임이 친구마다 달라요', '낮은 막대의 움직임도 잘하는 친구가 있어요'] }, difficulty: 0.2 },
                { prompt: '내가 잘하는 움직임을 이야기하는 순서대로 말 카드를 놓아요.', toolOptions: { mode: 'order', cards: ['그래서 이번 주에 연습해 보려고 해', '나는 줄넘기를 잘해', '그래프에서 줄넘기는 네 명이야', '연습한 적이 있어서야'] }, target: { order: ['나는 줄넘기를 잘해', '그래프에서 줄넘기는 네 명이야', '연습한 적이 있어서야', '그래서 이번 주에 연습해 보려고 해'] }, difficulty: 0.2 },
              ],
            },
          ],
          {
            teacher: '"오늘 그래프에서 가장 놀라웠던 것은 무엇이었나요?" 잘하는 움직임이 다양하다는 말이 나오도록 이끈다. 출구 1번을 틀린 학생은 눈금선을 손가락으로 따라가 다시 읽게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '옆 모둠이 잘하는 움직임(명)', unit: '명', xLabel: '움직임', yLabel: '친구 수', data: [['달리기', 3], ['공 던지기', 6], ['줄넘기', 2]], question: '가장 적은 움직임은?', choices: ['달리기', '공 던지기', '줄넘기'] }, prompt: '옆 모둠의 그래프를 보고 잘하는 친구가 가장 적은 움직임을 골라요.', target: { pick: 2 }, difficulty: 0.15 },
              { type: 'choice', prompt: '막대가 가장 높은 움직임에 대한 알맞은 말은 무엇인가요?', options: ['가장 좋은 운동이에요', '그 움직임을 잘하는 친구가 가장 많아요', '다른 움직임은 하지 말아야 해요'], answer: 1, difficulty: 0.2, explain: '막대가 높다는 것은 사람 수가 많다는 뜻이에요.' },
              MOOD('우리 반 그래프를 읽은 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '우리 반 움직임 그래프',
          items: [
            { type: 'table', prompt: '우리 모둠 친구들이 잘하는 움직임을 세어 쓰세요.', columns: ['움직임', '달리기', '공 던지기', '줄넘기', '균형 잡기'], cells: [['친구 수(명)', '', '', '', '']] },
            { type: 'draw', prompt: '위 표를 막대그래프로 그리세요(가로: 움직임, 세로: 친구 수).' },
            { type: 'choice', prompt: '그래프에서 알 수 있는 것에 ○ 하세요.', options: ['달리기를 잘하는 친구 수', '누가 가장 힘이 센지', '친구의 키'], answer: '달리기를 잘하는 친구 수' },
            { type: 'short', prompt: '그래프를 보고 알게 된 점을 한 줄로 쓰세요.' },
          ],
          easy: {
            note: '막대의 끝을 눈금선으로 따라가 읽어요.',
            items: [
              { type: 'choice', prompt: '막대가 높으면?', options: ['잘하는 친구가 많아요', '더 좋은 운동이에요'], answer: '잘하는 친구가 많아요' },
              { type: 'short', prompt: '우리 모둠에서 가장 많은 움직임을 쓰세요.' },
              { type: 'draw', prompt: '가장 높은 막대를 색칠하세요.' },
            ],
          },
        },
        differentiation: {
          easy: '막대 위에 값이 보이고 막대 두 개가 미리 그려져 있어요. 카드를 맞는 칸에 놓으면 바로 맞는지 알려 줘요.',
          base: '그래프를 처음부터 스스로 그리고 읽어요.',
          challenge: '맞힌 뒤에야 읽은 값이 드러나고, 세 번 틀리면 풀이를 보며 다음으로 넘어가요. 그래프 질문이 한 번 더 이어져요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 막대가 높은 움직임이 가장 좋은 운동이라고 여긴다 → 높이는 사람 수라고 말해 준다. ② 눈금을 세지 않고 눈대중으로 읽는다 → 눈금선을 따라 손가락으로 읽게 한다. ③ 알 수 없는 것까지 그래프로 말한다 → 그래프의 범위를 묻는다. 예시 그래프의 수는 설명용으로 지은 자료다.',
      }),
      // ───────────────────────── 4 ─────────────────────────
      L(4, {
        title: '내 몸의 신호 읽고 멈출 때 알기',
        objective: '운동 전에 풀어 줄 몸의 부위를 고르고, 운동 중 몸에서 오는 신호를 계속해도 되는 것과 멈추고 알려야 하는 것으로 나눌 수 있다.',
        illustration: art('a child resting on a school bench holding a water bottle after stretching, with small paper signs showing a stop hand and a heart', [
          { motif: 'sun', x: 410, y: 54, s: 0.8 }, { motif: 'cloud', x: 100, y: 52 }, { motif: 'hills', y: 208 },
          { motif: 'tree', x: 62, y: 212 }, { motif: 'house', x: 420, y: 214, s: 0.8 },
          { motif: 'text', x: 240, y: 128, text: '몸이 보내는 신호', size: 26 },
        ]),
        safety: [PAIN, STOP, WATER, WARM],
        stages: stages(
          {
            teacher: '"달리기를 하다가 숨이 차면 계속 달려야 할까요, 멈춰야 할까요?" 학생 생각을 듣고 숨이 조금 차는 것과 가슴이 아프거나 어지러운 것은 다르다고 짚는다. 사람마다 몸이 달라서 같은 운동도 느낌이 다르다는 것을 지난 시간과 이어 말한다. "몸이 보내는 신호를 모른 척해도 될까요?"를 묻고 오늘 신호를 읽는 법을 배운다고 알린다.',
            student: '운동할 때 몸이 보내는 신호를 어떻게 읽을까요? 계속해도 되는 신호와 멈춰야 하는 신호를 알아봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 운동 전에 풀어 줄 몸의 부위 고르기', minutes: 12, tool: 'body',
              task: '운동마다 많이 쓰는 몸의 부위를 골라 눌러요. 고른 부위를 모둠이 함께 10초씩 천천히 풀어 줘요.',
              teacher: '"공을 던지기 전에 몸의 어디를 풀어 줘야 할까요? 던지는 척 해 보세요." 모든 부위를 다 고르는 학생에게는 가장 많이 쓰는 곳을 다시 묻는다. 풀 때 반동을 주어 세게 당기지 않고 숨을 내쉬며 천천히 하도록 한다.',
              levels: { easy: { readout: true }, base: {}, challenge: { readout: false } },
              items: [
                { prompt: '달리기 전에 풀어 줄 다리 쪽 두 군데를 골라요.', toolOptions: { mode: 'parts', parts: ['목', '어깨', '팔꿈치', '손목', '허리', '무릎', '발목'] }, target: { parts: ['무릎', '발목'] }, levels: { easy: { toolOptions: { parts: ['목', '손목', '무릎', '발목'] } }, challenge: { prompt: '달리기 전에 풀어 줄 허리와 다리 쪽 세 군데를 골라요.', target: { parts: ['허리', '무릎', '발목'] } } }, difficulty: 0.15 },
                { prompt: '공을 멀리 던지기 전에 풀어 줄 팔 쪽 세 군데를 골라요.', toolOptions: { mode: 'parts', parts: ['목', '어깨', '팔꿈치', '손목', '허리', '무릎', '발목'] }, target: { parts: ['어깨', '팔꿈치', '손목'] }, difficulty: 0.2 },
                { prompt: '앉았다 일어서기를 하기 전에 가장 많이 쓰는 곳 한 군데를 골라요.', toolOptions: { mode: 'parts', parts: ['목', '어깨', '팔꿈치', '손목', '허리', '무릎', '발목'] }, target: { parts: ['무릎'] }, difficulty: 0.2,
                  conclude: '운동마다 많이 쓰는 몸의 부위가 달라요. 그곳을 먼저 풀어 주면 덜 다쳐요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 몸의 신호 읽고 알맞게 행동하기', minutes: 14, tool: 'mindmap',
              task: '운동 중에 느낄 수 있는 몸의 신호를 알맞은 행동으로 나누고, 신호를 알리는 말과 차례를 정해요.',
              teacher: '"어지러우면 조금만 참고 계속해도 될까요?" 참지 말고 바로 멈추고 알리는 것이 용기라고 말한다. 땀이 나는 것·조금 숨이 찬 것·목이 마른 것은 쉬면서 살피는 신호, 아프거나 어지러운 것은 멈추고 알리는 신호로 가르는 데 시간을 쓴다. 이 단원은 진단이 아니라 멈추고 알리는 법을 다룬다.',
              levels: CARD,
              items: [
                { prompt: '몸의 신호를 알맞은 행동 세 칸으로 나누어요.', toolOptions: { topic: '신호와 행동', slots: ['계속해도 돼요', '쉬면서 물을 마셔요', '멈추고 알려요'], cards: ['몸이 따뜻해지고 땀이 조금 나요', '목이 많이 말라요', '무릎이 찌릿하게 아파요', '어지러워서 눈앞이 빙빙 돌아요'] }, target: { sort: { '계속해도 돼요': ['몸이 따뜻해지고 땀이 조금 나요'], '쉬면서 물을 마셔요': ['목이 많이 말라요'], '멈추고 알려요': ['무릎이 찌릿하게 아파요', '어지러워서 눈앞이 빙빙 돌아요'] } }, difficulty: 0.25 },
                { prompt: '몸이 이상할 때 선생님께 알리는 말로 알맞은 것만 골라요.', toolOptions: { mode: 'pick', topic: '알리는 말', cards: ['선생님, 무릎이 아파서 멈췄어요', '아파도 참으면 되니까 말 안 할래요', '선생님, 어지러워서 잠깐 앉고 싶어요', '친구가 비웃을 것 같아서 몰래 계속할래요'] }, target: { pick: ['선생님, 무릎이 아파서 멈췄어요', '선생님, 어지러워서 잠깐 앉고 싶어요'] }, difficulty: 0.2 },
                { prompt: '아픈 곳이 생겼을 때 할 일을 차례대로 놓아요.', toolOptions: { mode: 'order', cards: ['선생님께 어디가 어떻게 아픈지 말해요', '하던 운동을 바로 멈춰요', '안전한 곳에 앉아 쉬어요', '선생님이 말한 대로 해요'] }, target: { order: ['하던 운동을 바로 멈춰요', '안전한 곳에 앉아 쉬어요', '선생님께 어디가 어떻게 아픈지 말해요', '선생님이 말한 대로 해요'] }, difficulty: 0.25 },
              ],
            },
          ],
          {
            teacher: '"몸이 보내는 신호 가운데 오늘 새로 알게 된 것은 무엇인가요?" 멈추고 알리는 것이 부끄러운 일이 아니라 나를 지키는 일임을 다시 말한다. 출구 1번을 틀린 학생은 던지는 팔이 어디까지 움직이는지 직접 해 보게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'body', options: { mode: 'parts', parts: ['목', '어깨', '팔꿈치', '손목', '허리', '무릎', '발목'] }, prompt: '줄넘기를 하기 전에 풀어 줄 곳 두 군데를 골라요.', target: { parts: ['손목', '발목'] }, difficulty: 0.2 },
              { type: 'choice', prompt: '운동 중 어지러워지면 어떻게 하나요?', options: ['조금 참고 계속한다', '바로 멈추고 선생님께 알린다', '친구에게 말하지 않고 앉는다'], answer: 1, difficulty: 0.1, explain: '어지러우면 참지 말고 바로 멈추고 어른에게 알려야 해요.' },
              MOOD('몸의 신호를 알아본 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '몸의 신호를 읽어요',
          items: [
            { type: 'table', prompt: '운동과 풀어 줄 몸의 부위를 이어 쓰세요.', columns: ['운동', '풀어 줄 부위'], cells: [['달리기', ''], ['공 던지기', ''], ['앉았다 일어서기', '']] },
            { type: 'table', prompt: '몸의 신호와 알맞은 행동을 이어 쓰세요.', columns: ['신호', '행동'], cells: [['땀이 조금 나요', ''], ['목이 말라요', ''], ['어지러워요', '']] },
            { type: 'choice', prompt: '아픈 곳이 생겼을 때 알맞은 것에 ○ 하세요.', options: ['참고 계속한다', '바로 멈추고 알린다', '아무에게도 말하지 않는다'], answer: '바로 멈추고 알린다' },
            { type: 'short', prompt: '몸이 아플 때 선생님께 할 말을 한 문장으로 쓰세요.' },
          ],
          easy: {
            note: '아프거나 어지러우면 바로 멈추고 어른에게 알려요.',
            items: [
              { type: 'choice', prompt: '어지러우면?', options: ['멈추고 알려요', '참고 계속해요'], answer: '멈추고 알려요' },
              { type: 'short', prompt: '달리기 전에 풀어 줄 곳 하나를 쓰세요.' },
              { type: 'draw', prompt: '쉬면서 물을 마시는 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '몸의 부위 그림에 고른 이름이 바로 보이고, 카드를 맞는 칸에 놓으면 바로 맞는지 알려 줘요.',
          base: '부위를 이름 없이 스스로 찾고 카드를 모두 놓은 뒤 확인해요.',
          challenge: '부위 이름이 보이지 않고, 달리기 문항에서 허리까지 고를 곳이 늘어요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 아파도 참으면 더 잘하는 거라고 여긴다 → 알리는 것이 나를 지키는 일이라고 말한다. ② 모든 부위를 다 고른다 → 가장 많이 쓰는 곳을 묻는다. ③ 사람마다 느끼는 몸의 신호가 달라 서로 견주려 한다 → 내 몸의 신호는 내가 가장 잘 안다고 말한다. 병의 이름이나 치료는 다루지 않고 멈추고 알리는 방법만 가르친다.',
      }),
      // ───────────────────────── 5 ─────────────────────────
      L(5, {
        title: '언제·어디서·무엇을, 내 운동 계획표 한 장 만들기',
        objective: '언제·어디서·무엇을 할지 넣어 내 운동 계획을 한 장으로 만들고, 구간 운동 시간을 계획표에 맞게 정할 수 있다.',
        illustration: art('a child at a desk filling in a paper weekly exercise planner with little icons of a jump rope, sneakers and a water bottle', [
          { motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'cloud', x: 100, y: 50 }, { motif: 'hills', y: 208 },
          { motif: 'house', x: 90, y: 214, s: 0.9 }, { motif: 'flower', x: 400, y: 214 },
          { motif: 'text', x: 240, y: 128, text: '언제 · 어디서 · 무엇을', size: 24 },
        ]),
        safety: [SPACE, FLOOR, WARM, OWN],
        stages: stages(
          {
            teacher: '"계획 없이 운동하는 날과 계획이 있는 날, 어느 쪽이 더 오래 이어질까요?" 생각을 나눈 뒤 계획에는 언제·어디서·무엇을이 들어가야 한다고 알려 준다. "계획만 세우면 한 것과 같을까요?"라고 물어, 계획은 시작이고 실제로 해 보는 것이 이어진다는 것을 짚는다. 오늘은 계획표를 만들고, 다음 시간에 하루치를 해 본다고 알린다.',
            student: '운동 계획표에는 무엇이 들어가야 할까요? 언제, 어디서, 무엇을 할지 넣어 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 계획에 들어갈 세 가지 채우기', minutes: 13, tool: 'story',
              task: '가상 친구의 운동 계획 문장에서 언제·어디서·무엇을 칸에 알맞은 카드를 넣어요. 그다음 내 계획표에도 같은 방법으로 써요.',
              teacher: '"‘열심히 할 거야’는 언제 어디서 무엇을 하는 계획일까요?" 다짐은 계획이 아니라고 말하고, 시간·장소·활동이 모두 있어야 실천할 수 있다고 짚는다. 장소와 활동이 어울리지 않는 조합을 고른 학생에게는 그 장소에서 그 활동이 가능한지 묻는다.',
              levels: CARD,
              items: [
                { prompt: '민지의 계획 문장에 알맞은 카드를 넣어요.', toolOptions: { mode: 'fill', cards: ['수요일 방과 후에', '학교 운동장에서', '줄넘기를 3분 동안', '밤 열 시에'], slots: [{ id: 'when', who: '민지', motif: 'sun', label: '나는 ___ 운동할 거야.' }, { id: 'where', who: '민지', motif: 'tree', label: '___ 할 거야.' }, { id: 'what', who: '민지', motif: 'star', label: '___ 할 거야.' }] }, target: { fill: { when: '수요일 방과 후에', where: '학교 운동장에서', what: '줄넘기를 3분 동안' } }, difficulty: 0.15 },
                { prompt: '준호의 계획 문장에서 언제와 무엇이 들어갈 칸을 채워요.', toolOptions: { mode: 'fill', cards: ['금요일 저녁 식사 전에', '집 앞 길에서 빠르게 걷기', '새벽 다섯 시에', '높은 담 위에서 뛰기'], slots: [{ id: 'when', who: '준호', motif: 'moon', label: '___ 운동할 거야.' }, { id: 'what', who: '준호', motif: 'house', label: '___ 할 거야.' }] }, target: { fill: { when: '금요일 저녁 식사 전에', what: '집 앞 길에서 빠르게 걷기' } }, difficulty: 0.2 },
                { prompt: '서연의 계획에서 비 오는 날 할 수 있는 운동 칸을 채워요.', toolOptions: { mode: 'fill', cards: ['거실에서 제자리 스트레칭', '비 오는 운동장에서 달리기', '집 안에서 계단 오르내리기 뛰기'], slots: [{ id: 'rain', who: '서연', motif: 'cloud', label: '비 오는 날에는 ___ 할 거야.' }] }, target: { fill: { rain: '거실에서 제자리 스트레칭' } }, difficulty: 0.2,
                  conclude: '언제·어디서·무엇을이 모두 있어야 계획이에요. 날씨까지 생각하면 더 지킬 수 있어요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 구간 운동 시간 맞추고 차례 정하기', minutes: 13, tool: 'timer',
              task: '내 계획표에 넣을 구간 운동 시간을 타이머로 맞추고, 준비·본·정리 운동 차례를 놓은 뒤 계획에 맞게 점검해요.',
              teacher: '"운동 20초, 쉬기 10초를 4번 하면 모두 몇 초일까요?" 마지막 쉬기는 없다는 것을 짚어 전체 시간을 셈하게 한다. 쉬는 시간을 빼고 계획하는 학생에게 "숨이 찬 몸은 쉬는 동안 어떻게 되나요?"라고 묻는다.',
              levels: { easy: { workStep: 10, restStep: 10, showTotal: true }, base: { showTotal: true }, challenge: { showTotal: false } },
              items: [
                { prompt: '20초 운동하고 10초 쉬기를 4번 되풀이하도록 타이머를 맞춰요.', toolOptions: { plan: { work: 30, rest: 20, rounds: 2 } }, target: { plan: { work: 20, rest: 10, rounds: 4 } }, difficulty: 0.15 },
                { prompt: '운동 20초, 쉬기 10초를 4번 하면 처음부터 끝까지 모두 몇 초인지 맞춰요.', toolOptions: { plan: { work: 20, rest: 10, rounds: 2 } }, target: { total: 110 }, difficulty: 0.25,
                  hints: ['운동하는 시간 묶음의 수와 쉬는 시간 묶음의 수는 같지 않아요. 마지막에도 쉴지 생각해 보세요.', '운동을 몇 번 하고 그 사이에 쉬는 때가 몇 번 있는지 세어 더해 보세요.'] },
                { prompt: '준비 운동, 본 운동, 정리 운동 카드를 하는 차례대로 놓아요.', toolOptions: { cards: ['정리 운동: 천천히 걸으며 숨 고르기', '본 운동: 줄넘기 구간 운동', '준비 운동: 어깨·무릎 돌리기'] }, target: { order: ['준비 운동: 어깨·무릎 돌리기', '본 운동: 줄넘기 구간 운동', '정리 운동: 천천히 걸으며 숨 고르기'] }, levels: { easy: { state: { order: ['준비 운동: 어깨·무릎 돌리기', '정리 운동: 천천히 걸으며 숨 고르기', '본 운동: 줄넘기 구간 운동'] } } }, difficulty: 0.15 },
                { prompt: '내 계획표를 점검 목록에 표시해요.', target: { selfCheck: ['언제 할지 정했어요', '어디서 할지 정했어요', '무엇을 할지 정했어요', '쉬는 시간도 넣었어요'] }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"오늘 만든 계획표에서 가장 중요한 것 하나는 무엇일까요?" 언제·어디서·무엇을이 모두 들어갔는지 짝과 확인하게 한다. 출구 1번을 틀린 학생은 문장을 소리 내어 읽으며 칸에 넣어 보게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'story', options: { mode: 'fill', cards: ['토요일 아침에', '동네 공원에서', '천천히 걷기를 10분 동안'], slots: [{ id: 'when', who: '도윤', motif: 'sun', label: '나는 ___ 운동할 거야.' }, { id: 'where', who: '도윤', motif: 'tree', label: '___ 할 거야.' }, { id: 'what', who: '도윤', motif: 'star', label: '___ 할 거야.' }] }, prompt: '도윤의 계획 문장에 알맞은 카드를 넣어요.', target: { fill: { when: '토요일 아침에', where: '동네 공원에서', what: '천천히 걷기를 10분 동안' } }, difficulty: 0.15 },
              { type: 'choice', prompt: '계획표에 꼭 들어가야 하는 세 가지는 무엇인가요?', options: ['언제·어디서·무엇을', '누가 이겼는지·몇 점인지·상품', '친구 이름·점수·순위'], answer: 0, difficulty: 0.15, explain: '언제·어디서·무엇을이 있어야 실제로 할 수 있어요.' },
              MOOD('내 계획표를 만든 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '내 운동 계획표',
          items: [
            { type: 'table', prompt: '다음 주에 할 운동 계획을 쓰세요.', columns: ['요일', '언제', '어디서', '무엇을'], rows: 3 },
            { type: 'table', prompt: '준비·본·정리 운동의 차례 번호를 쓰세요.', columns: ['운동', '차례'], cells: [['정리 운동', ''], ['본 운동', ''], ['준비 운동', '']], answer: '정리 3, 본 2, 준비 1' },
            { type: 'blank', prompt: '운동 20초, 쉬기 10초를 3번 하면 모두 몇 초인지 쓰세요.', text: '20×3 + 10×2 = ___ 초', answer: '80' },
            { type: 'choice', prompt: '계획이라고 할 수 있는 것에 ○ 하세요.', options: ['열심히 할 거야', '수요일 방과 후 운동장에서 줄넘기 3분', '언젠가 해 볼래'], answer: '수요일 방과 후 운동장에서 줄넘기 3분' },
            { type: 'short', prompt: '비 오는 날 할 수 있는 운동을 하나 쓰세요.' },
          ],
          easy: {
            note: '‘언제’, ‘어디서’, ‘무엇을’을 하나씩 채워요.',
            items: [
              { type: 'choice', prompt: '‘운동장에서’는 무엇에 해당하나요?', options: ['어디서', '언제'], answer: '어디서' },
              { type: 'short', prompt: '내가 운동할 때를 한 가지 쓰세요.' },
              { type: 'draw', prompt: '내 운동 계획 가운데 한 장면을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '타이머 시간이 10초씩 바뀌고 전체 시간이 화면에 보여요. 첫 카드가 미리 놓인 문항이 있어요.',
          base: '전체 시간을 화면에서 확인하며 맞춰요.',
          challenge: '전체 시간이 보이지 않아 스스로 셈해 맞춰요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 다짐을 계획이라고 여긴다 → 시간·장소·활동을 확인한다. ② 계획만 세우면 실천한 것과 같다고 여긴다 → 다음 시간에 하루치를 해 본다고 약속한다. ③ 마지막 쉬는 시간을 더해 셈한다 → 운동 4번 사이의 쉬기는 3번이라는 것을 손가락으로 짚는다. 계획표 내용은 학생마다 달라 교사가 읽고 확인한다.',
      }),
      // ───────────────────────── 6 ─────────────────────────
      L(6, {
        title: '계획한 운동 하루치를 안전하게 해 보기',
        objective: '계획한 운동 하루치를 안전 점검, 구간 운동, 기록 순으로 해 보고, 해낸 횟수를 구간마다 적을 수 있다.',
        illustration: art('children doing interval jumping exercises in a school gym with a paper stopwatch and a checklist floating beside them', [
          { motif: 'sun', x: 410, y: 56, s: 0.7 }, { motif: 'cloud', x: 100, y: 50 }, { motif: 'hills', y: 210 },
          { motif: 'star', x: 150, y: 120, s: 0.9 }, { motif: 'star', x: 330, y: 130, s: 0.7 },
          { motif: 'text', x: 240, y: 200, text: '30초 해요, 10초 쉬어요', size: 22 },
        ]),
        safety: [SPACE, FLOOR, WARM, STOP, WATER],
        stages: stages(
          {
            teacher: '"어제 만든 계획을 오늘 한 번 해 봅시다. 계획표에 쓴 운동 중 하나를 골라요." 안전 점검 → 준비 운동 → 구간 운동 → 기록 순서를 칠판에 적는다. "한 번 해 본 결과로 내 체력을 다 알 수 있을까요?"라고 물어, 하루치 결과는 시작일 뿐이라고 짚는다.',
            student: '내가 세운 계획 가운데 하나를 오늘 해 봐요. 안전 점검부터 해요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 안전 점검하고 준비 운동 차례 정하기', minutes: 10, tool: 'timer',
              task: '운동하는 곳을 둘러보며 확인한 것을 표시하고, 준비 운동 차례를 놓은 뒤 함께 몸을 풀어요.',
              teacher: '"눈으로 직접 본 것만 눌러요." 점검을 마치면 준비 운동을 함께 한다. 점검을 건성으로 누르는 학생에게는 바닥을 직접 보러 가게 한다. 준비 운동은 작은 움직임에서 큰 움직임으로 나아가게 한다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '운동하기 전에 둘레를 살피고 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['운동할 곳에 두 팔을 벌릴 공간이 있어요', '바닥에 물기와 떨어진 물건이 없어요', '신발 끈이 단단히 묶여 있어요', '마실 물이 가까이에 있어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '몸 풀기 카드를 몸 한 곳만 움직이는 것에서 온몸을 쓰는 것 차례로 놓아요.', toolOptions: { cards: ['제자리 가볍게 뛰기', '목과 어깨 돌리기', '손목과 발목 돌리기', '제자리에서 무릎 올리며 걷기'] }, target: { order: ['목과 어깨 돌리기', '손목과 발목 돌리기', '제자리에서 무릎 올리며 걷기', '제자리 가볍게 뛰기'] }, levels: { easy: { state: { order: ['목과 어깨 돌리기', '손목과 발목 돌리기', '제자리 가볍게 뛰기', '제자리에서 무릎 올리며 걷기'] } } }, difficulty: 0.2 },
                { prompt: '준비 운동을 마친 뒤 내 몸의 느낌을 점검 목록에 표시해요.', target: { selfCheck: ['몸이 따뜻해졌어요', '아픈 곳이 없어요', '물을 마실 위치를 알아요'] }, difficulty: 0.1 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 30초 구간 운동 해 보고 기록하기', minutes: 16, tool: 'timer',
              task: '타이머를 30초 운동, 10초 쉬기, 3번으로 맞추고 구간 운동을 해요. 구간마다 해낸 횟수를 적고 쉬는 동안 몸의 느낌도 살펴요.',
              teacher: '"숨이 찰 때 쉬는 시간에 어떻게 하면 좋을까요?" 쉬는 시간에는 서서 천천히 숨을 고르고, 앉아 버리지 않도록 한다. 구간 사이 기록을 건너뛰는 학생에게 "한 번 해 본 결과로 내 체력을 다 알 수 없어요. 그래서 기록해 둬요"라고 짚는다.',
              levels: { easy: { workStep: 10, restStep: 10, showTotal: true }, base: { showTotal: true }, challenge: { showTotal: false, stopwatch: true } },
              items: [
                { prompt: '30초 운동하고 10초 쉬기를 3번 하도록 타이머를 맞춰요.', toolOptions: { plan: { work: 20, rest: 20, rounds: 2 } }, target: { plan: { work: 30, rest: 10, rounds: 3 } }, difficulty: 0.15 },
                { prompt: '구간마다 제자리에서 해낸 줄넘기(또는 제자리 뛰기) 횟수를 적어요.', toolOptions: { fields: ['1구간', '2구간', '3구간'], unit: '번' }, target: { records: true }, difficulty: 0.15 },
                { prompt: '구간 운동을 마친 뒤 내 몸의 숨찬 정도를 표시해요.', target: { selfCheck: ['쉬는 동안 천천히 숨을 골랐어요', '무리하지 않고 내 속도로 했어요', '끝나고 물을 마셨어요'] }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"하루치를 해 보니 계획대로 되었나요? 가장 힘들었던 구간은 언제였나요?" 몇 구간에서 횟수가 줄었는지 기록을 보며 말하게 한다. 출구 1번을 틀린 학생은 안전 점검 항목 중 빠뜨린 것이 없는지 다시 보게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'timer', options: { cards: ['정리 운동: 천천히 걸으며 숨 고르기', '본 운동: 구간 운동', '안전 점검하기', '준비 운동: 관절 풀기'] }, prompt: '오늘 한 운동 차례대로 카드를 놓아요.', target: { order: ['안전 점검하기', '준비 운동: 관절 풀기', '본 운동: 구간 운동', '정리 운동: 천천히 걸으며 숨 고르기'] }, difficulty: 0.2 },
              { type: 'choice', prompt: '쉬는 시간에 가장 알맞은 행동은 무엇인가요?', options: ['서서 천천히 숨을 고르며 물을 마신다', '바로 누워 버린다', '더 빨리 달려 숨을 푼다'], answer: 0, difficulty: 0.2, explain: '숨이 찰 때는 천천히 숨을 고르고 물을 마시며 쉬어요.' },
              MOOD('계획한 운동을 해 본 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '하루치 운동 기록',
          items: [
            { type: 'table', prompt: '구간마다 해낸 횟수를 쓰세요.', columns: ['구간', '1구간', '2구간', '3구간'], cells: [['해낸 횟수', '', '', '']] },
            { type: 'check', prompt: '운동 전에 확인한 것에 ✓ 하세요.', options: ['운동할 공간이 있어요', '바닥이 마른 것을 확인했어요', '신발 끈을 묶었어요', '마실 물이 가까이 있어요'] },
            { type: 'choice', prompt: '한 번 해 본 결과를 어떻게 보면 좋을까요?', options: ['내 체력을 다 알 수 있어요', '시작일 뿐이라 계속 기록하며 봐요', '친구와 견주어 순위를 매겨요'], answer: '시작일 뿐이라 계속 기록하며 봐요' },
            { type: 'short', prompt: '쉬는 동안 몸에서 느낀 점을 한 줄로 쓰세요.' },
          ],
          easy: {
            note: '해낸 만큼만 적어요. 많고 적음은 중요하지 않아요.',
            items: [
              { type: 'table', prompt: '해낸 횟수를 쓰세요.', columns: ['1구간', '2구간', '3구간'], rows: 1 },
              { type: 'choice', prompt: '쉬는 시간에는?', options: ['천천히 숨을 골라요', '더 빨리 달려요'], answer: '천천히 숨을 골라요' },
              { type: 'draw', prompt: '운동하는 내 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '타이머가 10초씩 바뀌고 전체 시간이 화면에 보여요. 첫 카드가 미리 놓인 문항이 있어요.',
          base: '타이머를 5초씩 맞추고 전체 시간을 화면에서 확인해요.',
          challenge: '전체 시간이 보이지 않고, 기록판의 시간 재기로 구간을 직접 재요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 안전 점검을 건성으로 누른다 → 바닥을 직접 보러 가게 한다. ② 한 번 해 본 결과로 체력을 다 알 수 있다고 여긴다 → 계속 기록해 변화를 본다. ③ 쉬는 시간에 누워 버리거나 더 빨리 달린다 → 서서 천천히 숨을 고르게 한다. 실제 운동은 교구가 판정하지 않고 교사가 관찰한다. 줄넘기가 없으면 제자리 뛰기로 바꾼다.',
      }),
      // ───────────────────────── 7 ─────────────────────────
      L(7, {
        title: '날씨와 장소에 맞게 운동 바꿔 보기',
        objective: '더운 날, 비 오는 날, 좁은 집 같은 상황에서 안전하게 할 수 있는 운동을 고르고 계획을 알맞게 바꿀 수 있다.',
        illustration: art('three small scenes of children exercising: in a sunny park with a hat, indoors by a window on a rainy day, and on a quiet sidewalk with a water bottle', [
          { motif: 'sun', x: 90, y: 56, s: 0.8 }, { motif: 'cloud', x: 240, y: 50 }, { motif: 'hills', y: 210 },
          { motif: 'house', x: 400, y: 212, s: 0.9 }, { motif: 'tree', x: 60, y: 212 },
          { motif: 'text', x: 240, y: 128, text: '날씨 따라 바꿔요', size: 26 },
        ]),
        safety: [FLOOR, STOP, WATER, '더운 날에는 그늘에서 쉬고 모자를 써요.'],
        stages: stages(
          {
            teacher: '"비가 오는 날에는 운동 계획을 포기해야 할까요?" 학생 생각을 듣고, 같은 운동이라도 장소와 날씨에 따라 방법을 바꿀 수 있다고 말해 준다. 더운 날, 비 오는 날, 좁은 집이라는 세 상황을 칠판에 적고, 안전하게 할 수 있는 운동과 위험한 운동을 오늘 가린다고 알려 준다.',
            student: '날씨가 나쁘거나 장소가 좁아도 운동할 수 있을까요? 안전하게 하는 방법을 찾아봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 이럴 땐 어떻게 운동할까?', minutes: 14, tool: 'emotion',
              task: '날씨와 장소가 달라진 상황에서 어떻게 할지 고르고, 고른 방법이 안전한 까닭을 짝에게 말해요.',
              teacher: '"계획을 못 지킨 게 아니라 방법을 바꾼 거예요." 날씨 때문에 아예 포기하는 보기를 고른 학생에게는 안에서 할 수 있는 운동을 함께 찾아본다. 위험을 알면서 계속하는 보기가 왜 위험한지 까닭을 말하게 한다.',
              levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '계획한 날에 갑자기 비가 와요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '운동장에서 줄넘기를 하기로 한 날, 갑자기 비가 와요.', choices: [{ id: 'run', text: '비를 맞으며 운동장에서 그대로 해요', result: '바닥이 미끄러워 넘어질 뻔했어요.', mood: '놀람', why: '젖은 바닥은 미끄러워 다칠 수 있어요.' }, { id: 'inside', text: '집 안에서 제자리 스트레칭으로 바꿔요', result: '비에 젖지 않고 계획을 이어 갔어요.', mood: '뿌듯함' }, { id: 'skip', text: '이번 주 운동은 다 건너뛰어요', result: '몸이 찌뿌둥하고 계획이 흐지부지됐어요.', mood: '속상함', why: '방법을 바꾸면 이어 갈 수 있어요.' }] }, target: { choice: 'inside' }, difficulty: 0.15 },
                { prompt: '한낮에 해가 쨍쨍해요. 달리기를 하려는데 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '한낮에 해가 쨍쨍하게 비쳐요. 달리기를 하려고 해요.', choices: [{ id: 'sun', text: '모자도 물도 없이 그냥 뛰어요', result: '금방 지치고 어지러웠어요.', mood: '걱정', why: '더운 날에는 물과 그늘이 꼭 필요해요.' }, { id: 'shade', text: '해가 약한 때로 바꾸고 모자와 물을 챙겨요', result: '덥지 않게 끝까지 해냈어요.', mood: '편안함' }, { id: 'more', text: '더 오래 뛰어서 땀을 많이 내요', result: '몸이 힘들고 어지러웠어요.', mood: '걱정', why: '땀을 많이 낸다고 더 좋은 것이 아니에요.' }] }, target: { choice: 'shade' }, difficulty: 0.2 },
                { prompt: '집이 좁고 아래층에 사람이 살아요. 어떤 운동이 알맞을까요?', toolOptions: { mode: 'branch', situation: '집이 좁고 아래층에 사람이 살아요. 운동을 하고 싶어요.', choices: [{ id: 'jump', text: '쿵쿵 뛰는 줄넘기를 해요', result: '아래층에서 시끄럽다고 말했어요.', mood: '미안함', why: '쿵쿵 뛰는 소리가 이웃에게 불편해요.' }, { id: 'stretch', text: '조용히 늘리고 버티는 동작을 해요', result: '이웃을 방해하지 않고 몸을 풀었어요.', mood: '편안함' }, { id: 'ball', text: '거실에서 공을 세게 던져요', result: '물건이 깨질 뻔했어요.', mood: '놀람', why: '좁은 곳에서 공을 던지면 위험해요.' }] }, target: { choice: 'stretch' }, difficulty: 0.2 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 상황에 알맞은 운동 짝 짓기', minutes: 12, tool: 'mindmap',
              task: '날씨와 장소마다 알맞은 운동을 이어 보고, 안전하지 않은 방법을 가려내요.',
              teacher: '"같은 운동이라도 장소가 바뀌면 방법이 어떻게 달라질까요?" 장소에 맞는 방법을 말하게 한다. 안전하지 않은 보기를 고르는 학생에게는 어디가 위험한지 직접 짚게 한다.',
              levels: CARD,
              items: [
                { prompt: '상황마다 알맞은 운동을 이어요.', toolOptions: { mode: 'match', topic: '상황과 운동', slots: [{ id: 'rain', label: '비 오는 날 집 안' }, { id: 'heat', label: '더운 한낮' }, { id: 'cold', label: '추운 아침' }], cards: ['조용한 스트레칭과 균형 잡기', '그늘에서 물 마시며 가볍게 걷기', '몸을 충분히 풀고 천천히 시작하기'] }, target: { match: { rain: '조용한 스트레칭과 균형 잡기', heat: '그늘에서 물 마시며 가볍게 걷기', cold: '몸을 충분히 풀고 천천히 시작하기' } }, difficulty: 0.2 },
                { prompt: '안전하게 운동하는 방법만 골라요.', toolOptions: { mode: 'pick', topic: '안전한 방법', cards: ['물을 챙기고 모자를 써요', '젖은 바닥에서 힘껏 뛰어요', '해가 약한 때로 시간을 바꿔요', '어지러워도 참고 계속해요'] }, target: { pick: ['물을 챙기고 모자를 써요', '해가 약한 때로 시간을 바꿔요'] }, difficulty: 0.15 },
                { prompt: '운동 장소를 안전한 곳과 조심할 곳으로 나누어요.', toolOptions: { topic: '장소 안전', slots: ['안전해요', '조심해요'], cards: ['바닥이 마른 체육관', '차가 다니는 길', '평평하고 넓은 운동장', '물기가 있는 계단'] }, target: { sort: { '안전해요': ['바닥이 마른 체육관', '평평하고 넓은 운동장'], '조심해요': ['차가 다니는 길', '물기가 있는 계단'] } }, difficulty: 0.2,
                  conclude: '장소와 날씨에 맞게 방법을 바꾸면 안전하게 운동을 이어 갈 수 있어요.' },
              ],
            },
          ],
          {
            teacher: '"계획을 바꾼 것과 계획을 포기한 것은 어떻게 다른가요?" 바꾸는 것은 목표를 지키는 방법이라고 말해 준다. 출구 1번을 틀린 학생은 비 오는 날과 어울리는 곳이 어디인지 다시 짚는다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { topic: '장소 안전', slots: ['안전해요', '조심해요'], cards: ['집 안 넓은 바닥', '젖은 미끄럼틀', '가로등 있는 학교 운동장', '자동차가 지나가는 골목'] }, prompt: '새 장소를 안전한 곳과 조심할 곳으로 나누어요.', target: { sort: { '안전해요': ['집 안 넓은 바닥', '가로등 있는 학교 운동장'], '조심해요': ['젖은 미끄럼틀', '자동차가 지나가는 골목'] } }, difficulty: 0.2 },
              { type: 'choice', prompt: '더운 날 운동할 때 알맞은 것은 무엇인가요?', options: ['물과 그늘을 챙긴다', '물 없이 오래 뛴다', '모자 없이 한낮에 뛴다'], answer: 0, difficulty: 0.1, explain: '더운 날에는 물과 그늘을 챙겨요.' },
              MOOD('날씨와 장소에 맞게 운동을 생각한 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '날씨와 장소에 맞는 운동',
          items: [
            { type: 'table', prompt: '상황마다 할 수 있는 운동을 쓰세요.', columns: ['상황', '할 수 있는 운동'], cells: [['비 오는 날', ''], ['더운 날', ''], ['좁은 집', '']] },
            { type: 'check', prompt: '안전하게 운동하기 위해 챙길 것에 ✓ 하세요.', options: ['마실 물', '모자나 그늘', '미끄럽지 않은 신발', '큰 소리 나는 장난감'] },
            { type: 'choice', prompt: '비 오는 날에 알맞은 행동에 ○ 하세요.', options: ['젖은 운동장에서 달린다', '집 안에서 조용히 스트레칭한다', '운동을 아예 그만둔다'], answer: '집 안에서 조용히 스트레칭한다' },
            { type: 'short', prompt: '이웃을 방해하지 않고 집에서 할 수 있는 운동을 하나 쓰세요.' },
          ],
          easy: {
            note: '날씨에 맞게 방법을 바꾸면 운동을 이어 갈 수 있어요.',
            items: [
              { type: 'choice', prompt: '더운 날에는?', options: ['물과 그늘을 챙겨요', '물 없이 뛰어요'], answer: '물과 그늘을 챙겨요' },
              { type: 'short', prompt: '비 오는 날 할 운동을 하나 쓰세요.' },
              { type: 'draw', prompt: '집 안에서 운동하는 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '상황 문항은 고를 보기가 두 개씩이고, 카드를 맞는 칸에 놓으면 바로 맞는지 알려 줘요.',
          base: '보기 세 개 가운데 고르고 모두 놓은 뒤 확인해요.',
          challenge: '확인을 누르기 전까지 선택의 결과가 보이지 않아 까닭을 먼저 생각해요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 날씨가 나쁘면 운동을 건너뛰어도 된다고 여긴다 → 방법을 바꾸는 쪽을 고르게 한다. ② 땀을 많이 낼수록 좋다고 여긴다 → 더운 날 무리하면 위험하다고 말한다. ③ 좁은 집에서 쿵쿵 뛰는 운동을 고른다 → 이웃을 생각하는 방법을 묻는다. 실제로 움직여 보며 확인한다.',
      }),
      // ───────────────────────── 8 ─────────────────────────
      L(8, {
        title: '한 주 계획과 실천 견주어 지킨 것 찾기',
        objective: '한 주 계획과 실천 기록을 견주어 지킨 것과 지키지 못한 것으로 나누고, 그래프로 읽어 말할 수 있다.',
        illustration: art('a paper weekly calendar with some days marked by stars and some left blank, and a child comparing the plan row with the done row', [
          { motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'cloud', x: 100, y: 50 }, { motif: 'hills', y: 208 },
          { motif: 'star', x: 150, y: 118, s: 0.8 }, { motif: 'star', x: 240, y: 118, s: 0.8 }, { motif: 'star', x: 330, y: 118, s: 0.8 },
          { motif: 'text', x: 240, y: 190, text: '계획 vs 실천', size: 24 },
        ]),
        safety: [SPACE, WARM, OWN],
        stages: stages(
          {
            teacher: '"일주일 계획을 모두 지킨 사람도 있고, 반만 지킨 사람도 있을 거예요. 지키지 못했다고 실패일까요?" 학생 생각을 듣고, 지킨 것과 못 지킨 것을 나누어 보면 다음 계획을 잘 고칠 수 있다고 말해 준다. 계획과 실천을 한 줄씩 나란히 놓아 견주는 법을 보여 준다.',
            student: '내 한 주 계획과 실천을 견줘 봐요. 지킨 것과 못 지킨 것은 무엇일까요?',
          },
          [
            {
              id: 'a1', title: '활동 1. 계획과 실천 그래프로 읽기', minutes: 13, tool: 'chart',
              task: '가상 친구의 한 주 운동 계획과 실천 시간을 막대그래프로 나타내고 읽어요. 내 기록은 활동지에 옮겨 같은 방법으로 그려요.',
              teacher: '"계획한 날과 실천한 날 중 몇 날이 같을까요?" 막대 두 개가 같은 높이인 날을 짚으며 지킨 날을 세게 한다. 실천 시간이 계획보다 많은 날도 있다는 점을 놓치지 않는다. 오개념은 못 지키면 실패라는 생각이므로 "그날은 무슨 일이 있었을까요?"라고 묻는다.',
              levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '지아가 한 주 동안 실천한 운동 시간을 표를 보고 막대그래프로 완성해요.', toolOptions: { type: 'bar', title: '지아가 실천한 운동 시간(분)', unit: '분', xLabel: '요일', yLabel: '운동 시간', data: [['월', 20], ['화', 0], ['수', 15], ['목', 20], ['금', 10]] }, target: { build: true }, levels: { easy: { toolOptions: { given: [0, 1] } } }, difficulty: 0.15 },
                { prompt: '지아가 운동을 하지 않은 요일을 그래프에서 골라요.', toolOptions: { type: 'bar', mode: 'read', title: '지아가 실천한 운동 시간(분)', unit: '분', xLabel: '요일', yLabel: '운동 시간', data: [['월', 20], ['화', 0], ['수', 15], ['목', 20], ['금', 10]], question: '운동을 하지 않은 요일은?', choices: ['월요일', '화요일', '수요일', '금요일'] }, target: { pick: 1 }, difficulty: 0.15 },
                { prompt: '지아가 매일 20분을 계획했다면, 계획보다 적게 한 날은 모두 며칠인지 써요.', toolOptions: { type: 'bar', mode: 'read', title: '지아가 실천한 운동 시간(분)', unit: '분', xLabel: '요일', yLabel: '운동 시간', data: [['월', 20], ['화', 0], ['수', 15], ['목', 20], ['금', 10]], question: '20분보다 적게 한 날은 며칠인가요?' }, target: { value: 3 }, levels: { challenge: { prompt: '지아가 매일 20분을 계획했다면, 한 주 동안 계획보다 부족하게 한 시간은 모두 몇 분인지 써요.', toolOptions: { question: '부족한 시간은 모두 몇 분인가요?' }, target: { value: 35 } } }, difficulty: 0.25,
                  conclude: '계획과 실천을 나란히 견주면 어느 날 어느 만큼 못 지켰는지 한눈에 보여요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 지킨 것과 못 지킨 것 나누기', minutes: 13, tool: 'mindmap',
              task: '한 주를 돌아보며 계획대로 된 일과 되지 않은 일을 나누고, 못 지킨 까닭이 어디에 있는지 가려요.',
              teacher: '"못 지킨 까닭이 몸 때문일까요, 방법 때문일까요?" 몸 탓으로만 돌리지 않고 시간·장소·준비물 같은 방법의 문제를 함께 찾아본다. "내가 게을러서"라고 쓰는 학생에게는 구체적으로 언제 무엇이 막았는지 묻는다.',
              levels: CARD,
              items: [
                { prompt: '한 주의 일을 지켰어요, 못 지켰어요 두 칸으로 나누어요.', toolOptions: { topic: '한 주 돌아보기', slots: ['지켰어요', '못 지켰어요'], cards: ['월요일 20분 줄넘기', '화요일 비가 와서 쉼', '수요일 15분 스트레칭', '금요일 숙제 때문에 10분만 함'] }, target: { sort: { '지켰어요': ['월요일 20분 줄넘기', '수요일 15분 스트레칭'], '못 지켰어요': ['화요일 비가 와서 쉼', '금요일 숙제 때문에 10분만 함'] } }, difficulty: 0.2 },
                { prompt: '못 지킨 까닭을 몸, 시간, 장소 세 칸으로 나누어요.', toolOptions: { topic: '못 지킨 까닭', slots: ['몸', '시간', '장소'], cards: ['무릎이 조금 아팠어요', '학원이 늦게 끝났어요', '운동장이 비로 젖었어요', '숙제를 하느라 시간이 없었어요'] }, target: { sort: { '몸': ['무릎이 조금 아팠어요'], '시간': ['학원이 늦게 끝났어요', '숙제를 하느라 시간이 없었어요'], '장소': ['운동장이 비로 젖었어요'] } }, difficulty: 0.25 },
                { prompt: '한 주를 돌아본 말로 알맞은 것만 골라요.', toolOptions: { mode: 'pick', topic: '알맞은 돌아보기', cards: ['못 지킨 날의 까닭을 찾아야 고칠 수 있어', '못 지켰으니 나는 운동과 안 맞아', '지킨 날이 사흘이나 되어 뿌듯해', '다음 주에는 시간만 조금 바꿔 볼까'] }, target: { pick: ['못 지킨 날의 까닭을 찾아야 고칠 수 있어', '지킨 날이 사흘이나 되어 뿌듯해', '다음 주에는 시간만 조금 바꿔 볼까'] }, difficulty: 0.2 },
              ],
            },
          ],
          {
            teacher: '"오늘 지킨 날과 못 지킨 날을 나누어 보니 무엇이 보였나요?" 지킨 것도 꼭 칭찬하도록 한다. 출구 1번을 틀린 학생은 막대가 0인 요일을 손가락으로 짚어 다시 찾게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '도윤이 실천한 운동 시간(분)', unit: '분', xLabel: '요일', yLabel: '운동 시간', data: [['월', 10], ['수', 20], ['금', 5]], question: '가장 많이 한 요일은?', choices: ['월요일', '수요일', '금요일'] }, prompt: '도윤의 그래프를 보고 운동을 가장 많이 한 요일을 골라요.', target: { pick: 1 }, difficulty: 0.15 },
              { type: 'choice', prompt: '못 지킨 날이 있을 때 가장 알맞은 생각은 무엇인가요?', options: ['나는 운동과 안 맞아', '까닭을 찾아 다음 계획을 고치자', '계획은 세워 봐야 소용없어'], answer: 1, difficulty: 0.15, explain: '못 지킨 까닭을 찾으면 다음 계획을 고칠 수 있어요.' },
              MOOD('내 한 주를 돌아본 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '계획과 실천 견주기',
          items: [
            { type: 'table', prompt: '내 한 주 계획과 실천을 쓰세요.', columns: ['요일', '월', '화', '수', '목', '금'], cells: [['계획(분)', '', '', '', '', ''], ['실천(분)', '', '', '', '', '']] },
            { type: 'draw', prompt: '실천한 시간을 막대그래프로 그리세요(가로: 요일, 세로: 분).' },
            { type: 'table', prompt: '못 지킨 날과 까닭을 쓰세요.', columns: ['못 지킨 날', '까닭(몸·시간·장소)'], rows: 2 },
            { type: 'short', prompt: '이번 주에 지킨 것 가운데 가장 뿌듯한 것을 쓰세요.' },
          ],
          easy: {
            note: '막대가 0인 날이 못 지킨 날이에요. 까닭을 한 가지만 찾아요.',
            items: [
              { type: 'choice', prompt: '못 지킨 까닭을 찾는 까닭은?', options: ['다음 계획을 고치려고', '나를 탓하려고'], answer: '다음 계획을 고치려고' },
              { type: 'short', prompt: '지킨 날 하나를 쓰세요.' },
              { type: 'draw', prompt: '이번 주 가장 뿌듯했던 날을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '막대 위에 값이 보이고 막대 두 개가 미리 그려져 있어요. 카드를 맞는 칸에 놓으면 바로 알려 줘요.',
          base: '그래프를 스스로 그리고 읽어요.',
          challenge: '그래프 질문이 부족한 시간의 합까지 이어지고, 읽은 값은 맞힌 뒤에야 드러나요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 못 지키면 실패라고 여긴다 → 까닭을 찾는 자료라고 말한다. ② 못 지킨 까닭을 몸 탓으로만 돌린다 → 시간·장소 같은 방법도 함께 찾는다. ③ 0분 막대를 읽지 못한다 → 아무것도 하지 않은 날이라고 말해 준다. 그래프의 수는 설명을 위해 지은 예시이고 내 기록은 활동지에 따로 쓴다.',
      }),
      // ───────────────────────── 9 ─────────────────────────
      L(9, {
        title: '못 지킨 까닭에 맞는 고치는 방법 찾기',
        objective: '계획을 못 지킨 까닭마다 알맞은 고치는 방법(시간·장소·운동 바꾸기)을 짝 지어 고르고, 고친 계획을 짧게 해 볼 수 있다.',
        illustration: art('a child rubbing out one line of a paper plan and writing a new one beside it, with small arrows showing time, place and activity changing', [
          { motif: 'sun', x: 410, y: 56, s: 0.7 }, { motif: 'cloud', x: 100, y: 50 }, { motif: 'hills', y: 210 },
          { motif: 'flower', x: 80, y: 212 }, { motif: 'tree', x: 420, y: 212, s: 0.8 },
          { motif: 'text', x: 240, y: 128, text: '까닭을 찾아 고쳐요', size: 24 },
        ]),
        safety: [SPACE, WARM, PAIN, OWN],
        stages: stages(
          {
            teacher: '"지난 시간에 못 지킨 까닭을 몸·시간·장소로 나누어 봤죠. 오늘은 까닭마다 어떻게 고칠지 정해 봐요." 같은 까닭이라도 고치는 방법이 여러 가지라는 것을 칠판에 적는다. "못 지킨 까닭을 몸 탓으로만 돌리고 방법은 그대로 두면 다음 주에도 같은 일이 생기지 않을까요?"라고 물어 방법을 바꿔야 한다는 점을 짚는다.',
            student: '못 지킨 까닭마다 어떻게 고치면 좋을지 짝을 지어 봐요. 그리고 고친 계획을 잠깐 해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 까닭에 맞는 고치는 방법 짝 짓기', minutes: 14, tool: 'mindmap',
              task: '못 지킨 까닭과 고치는 방법을 이어 보고, 고치는 방법을 시간·장소·운동 바꾸기로 나누고, 좋은 고침이 무엇인지 골라요.',
              teacher: '"학원이 늦게 끝나서 못 했다면 시간을 어떻게 바꿀 수 있을까요?" 같은 까닭에 방법이 하나만 있는 것이 아니라고 말해 준다. "더 열심히 하자"는 다짐을 고치는 방법으로 고른 학생에게는 무엇이 달라지는지 구체적으로 물어, 시간·장소·운동처럼 바꿀 것이 눈에 보여야 한다고 짚는다.',
              levels: CARD,
              items: [
                { prompt: '못 지킨 까닭마다 알맞은 고치는 방법을 이어요.', toolOptions: { mode: 'match', topic: '까닭과 고치는 방법', slots: [{ id: 'late', label: '저녁에 시간이 없었어요' }, { id: 'rain', label: '비가 와서 운동장에 못 나갔어요' }, { id: 'hard', label: '줄넘기가 너무 힘들었어요' }], cards: ['쉬는 시간에 5분씩 나누어 해요', '집 안에서 할 수 있는 운동으로 바꿔요', '횟수를 반으로 줄이고 천천히 늘려요'] }, target: { match: { late: '쉬는 시간에 5분씩 나누어 해요', rain: '집 안에서 할 수 있는 운동으로 바꿔요', hard: '횟수를 반으로 줄이고 천천히 늘려요' } }, difficulty: 0.2 },
                { prompt: '고치는 방법을 시간 바꾸기·장소 바꾸기·운동 바꾸기로 나누어요.', toolOptions: { topic: '고치는 방법', slots: ['시간 바꾸기', '장소 바꾸기', '운동 바꾸기'], cards: ['아침 대신 저녁 먹기 전에 해요', '운동장 대신 복도 끝 넓은 곳에서 해요', '달리기 대신 걷기로 바꿔요', '방과 후 대신 점심시간에 해요'] }, target: { sort: { '시간 바꾸기': ['아침 대신 저녁 먹기 전에 해요', '방과 후 대신 점심시간에 해요'], '장소 바꾸기': ['운동장 대신 복도 끝 넓은 곳에서 해요'], '운동 바꾸기': ['달리기 대신 걷기로 바꿔요'] } }, difficulty: 0.25 },
                { prompt: '실제로 달라지는 고치는 방법만 골라요.', toolOptions: { mode: 'pick', topic: '좋은 고침', cards: ['요일을 월·수·금으로 바꿔요', '이번에는 더 열심히 할게요', '운동 시간을 20분에서 10분으로 줄여요', '다음에는 꼭 지킬 거예요'] }, target: { pick: ['요일을 월·수·금으로 바꿔요', '운동 시간을 20분에서 10분으로 줄여요'] }, difficulty: 0.2,
                  conclude: '“더 열심히”는 다짐이고, 시간·장소·운동을 바꾸는 것은 고침이에요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 고친 계획 5분 해 보기', minutes: 12, tool: 'timer',
              task: '고친 계획을 정해 타이머를 40초 운동, 20초 쉬기, 2번으로 맞추고 해 봐요. 해낸 횟수를 적고 점검해요.',
              teacher: '"고친 계획으로 해 보니 어땠나요? 이번에는 덜 힘들었나요?" 쉬는 시간을 20초로 늘려 호흡을 고르게 한다. 고쳤는데도 힘들어하는 학생에게는 횟수를 더 줄이도록 허락한다.',
              levels: { easy: { workStep: 10, restStep: 10, showTotal: true }, base: { showTotal: true }, challenge: { showTotal: false, stopwatch: true } },
              items: [
                { prompt: '40초 운동하고 20초 쉬기를 2번 하도록 타이머를 맞춰요.', toolOptions: { plan: { work: 20, rest: 10, rounds: 3 } }, target: { plan: { work: 40, rest: 20, rounds: 2 } }, difficulty: 0.15 },
                { prompt: '고친 계획으로 한 운동 가운데 구간마다 한 횟수를 적어요.', toolOptions: { fields: ['첫 번째 구간', '두 번째 구간'], unit: '번' }, target: { records: true }, difficulty: 0.15 },
                { prompt: '고친 계획을 해 본 뒤 내 생각을 점검 목록에 표시해요.', target: { selfCheck: ['바꾼 것이 무엇인지 말할 수 있어요', '전보다 덜 힘들었어요', '이 계획이라면 이어 갈 수 있어요'] }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"오늘 고친 방법 가운데 내 계획에 쓰고 싶은 것 하나를 말해 볼까요?" 바꾼 것이 시간·장소·운동 가운데 무엇인지 함께 말하게 한다. 출구 1번을 틀린 학생은 까닭과 방법을 소리 내어 읽으며 짝을 지어 보게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '까닭과 고치는 방법', slots: [{ id: 'wind', label: '바람이 너무 세서 못 했어요' }, { id: 'tired', label: '학교 끝나고 너무 피곤했어요' }], cards: ['집 안 거실에서 할 수 있는 운동으로 바꿔요', '쉬는 시간에 짧게 나누어 해요'] }, prompt: '새 까닭에 알맞은 고치는 방법을 이어요.', target: { match: { wind: '집 안 거실에서 할 수 있는 운동으로 바꿔요', tired: '쉬는 시간에 짧게 나누어 해요' } }, difficulty: 0.2 },
              { type: 'choice', prompt: '계획을 고친다는 것은 무엇을 바꾸는 것인가요?', options: ['마음가짐만 바꾼다', '시간·장소·운동 가운데 하나를 바꾼다', '계획을 버린다'], answer: 1, difficulty: 0.15, explain: '눈에 보이게 바꿔야 다음 주에 달라져요.' },
              MOOD('계획을 고쳐 본 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '까닭을 찾아 고치기',
          items: [
            { type: 'table', prompt: '못 지킨 까닭과 고치는 방법을 쓰세요.', columns: ['못 지킨 까닭', '고치는 방법'], rows: 3 },
            { type: 'choice', prompt: '고치는 방법으로 알맞은 것에 ○ 하세요.', options: ['더 열심히 해요', '운동 시간을 20분에서 10분으로 줄여요', '다음에는 꼭 할 거예요'], answer: '운동 시간을 20분에서 10분으로 줄여요' },
            { type: 'check', prompt: '내가 바꿀 것에 ✓ 하세요.', options: ['요일이나 시간', '장소', '운동 종류', '횟수와 시간'] },
            { type: 'short', prompt: '고친 계획으로 해 보고 느낀 점을 쓰세요.' },
          ],
          easy: {
            note: '시간·장소·운동 가운데 하나만 바꿔도 돼요.',
            items: [
              { type: 'choice', prompt: '비 오는 날 운동을 이어 가려면?', options: ['집 안 운동으로 바꿔요', '그냥 쉬어요'], answer: '집 안 운동으로 바꿔요' },
              { type: 'short', prompt: '내가 바꿀 것을 하나 쓰세요.' },
              { type: 'draw', prompt: '고친 계획으로 운동하는 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 맞는 칸에 놓으면 바로 알려 주고, 타이머가 10초씩 바뀌며 전체 시간이 보여요.',
          base: '카드를 모두 놓은 뒤 확인하고 타이머는 5초씩 맞춰요.',
          challenge: '전체 시간이 보이지 않고, 기록판의 시간 재기로 구간을 직접 재요.',
        },
        teacherNotes: '자주 보이는 어려움: ① “더 열심히 하자”를 고치는 방법으로 고른다 → 눈에 보이게 바꾼 것이 무엇인지 묻는다. ② 못 지킨 까닭을 몸 탓으로만 돌린다 → 시간·장소·운동을 바꿀 수 있다고 알려 준다. ③ 한 번에 다 바꾸려 한다 → 한 가지만 바꾸어 본다. 실제 운동은 교사가 관찰하고 교구는 계획과 기록만 판정한다.',
      }),
      // ───────────────────────── 10 ─────────────────────────
      L(10, {
        title: '고친 계획 다시 적고 이어 갈 한 가지 정하기',
        objective: '못 지킨 부분을 자기 몸과 시간에 맞게 고쳐 계획을 다시 적고, 이어 갈 한 가지를 정해 말할 수 있다.',
        illustration: art('a child taping a new weekly exercise plan on a bedroom wall with a small star sticker next to one chosen activity', [
          { motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'cloud', x: 100, y: 50 }, { motif: 'hills', y: 208 },
          { motif: 'house', x: 90, y: 214, s: 0.9 }, { motif: 'star', x: 330, y: 120, s: 1.1 },
          { motif: 'text', x: 240, y: 190, text: '이어 갈 한 가지!', size: 24 },
        ]),
        safety: [SPACE, WARM, OWN, STOP],
        stages: stages(
          {
            teacher: '"계획을 다시 쓸 때 가장 먼저 지켜야 할 것은 무엇일까요?" 내 몸과 내 시간에 맞는 것이라고 말해 준다. 친구와 똑같이 하거나 어려운 목표를 세우는 것이 아니라고 짚는다. 단원 앞부분에서 만든 계획표와 못 지킨 까닭을 꺼내 오늘 다시 쓴다고 알린다.',
            student: '지난 시간에 고친 방법을 넣어 내 계획표를 다시 써 봐요. 이어 갈 한 가지도 골라요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 고친 계획 문장 완성하기', minutes: 13, tool: 'story',
              task: '가상 친구가 고친 계획 문장의 빈칸을 채워요. 다 채운 뒤 내 고친 계획도 같은 틀로 써요.',
              teacher: '"고친 계획에는 처음 계획과 무엇이 달라졌는지가 들어 있어야 해요." 바뀐 것을 한 문장으로 말하게 한다. 너무 큰 목표를 쓰는 학생에게는 지킬 수 있는 만큼으로 줄이도록 한다.',
              levels: CARD,
              items: [
                { prompt: '준호가 고친 계획 문장에 알맞은 카드를 넣어요.', toolOptions: { mode: 'fill', cards: ['월·수·금 점심시간에', '복도 끝 넓은 곳에서 스트레칭 10분', '일요일 새벽에', '운동장에서 전력 질주 30분'], slots: [{ id: 'when', who: '준호', motif: 'sun', label: '이제부터 ___ 운동할 거야.' }, { id: 'what', who: '준호', motif: 'house', label: '___ 할 거야.' }] }, target: { fill: { when: '월·수·금 점심시간에', what: '복도 끝 넓은 곳에서 스트레칭 10분' } }, difficulty: 0.2 },
                { prompt: '서연이 고친 계획에서 바뀐 것을 설명하는 빈칸을 채워요.', toolOptions: { mode: 'fill', cards: ['시간을 20분에서 10분으로 줄였어', '운동 이름을 더 어렵게 바꿨어', '요일을 매일에서 격일로 바꿨어'], slots: [{ id: 'a', who: '서연', motif: 'star', label: '처음 계획에서 ___.' }] }, target: { fill: { a: '시간을 20분에서 10분으로 줄였어' } }, difficulty: 0.25 },
                { prompt: '지아의 고친 계획에서 비 오는 날 방법과 맑은 날 방법을 채워요.', toolOptions: { mode: 'fill', cards: ['집 거실에서 균형 잡기', '동네 공원 한 바퀴 걷기', '빗속 운동장 달리기'], slots: [{ id: 'sunny', who: '지아', motif: 'sun', label: '맑은 날에는 ___.' }, { id: 'rainy', who: '지아', motif: 'cloud', label: '비 오는 날에는 ___.' }] }, target: { fill: { sunny: '동네 공원 한 바퀴 걷기', rainy: '집 거실에서 균형 잡기' } }, difficulty: 0.2,
                  conclude: '고친 계획에는 무엇이 바뀌었는지가 들어 있어야 해요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 이어 갈 한 가지 정하고 점검하기', minutes: 13, tool: 'timer',
              task: '고친 계획에서 이어 갈 한 가지를 고르고, 일주일 동안 할 시간을 타이머로 맞춰 계산해요. 계획을 점검 목록으로 확인해요.',
              teacher: '"이어 갈 한 가지는 쉬워야 오래가요." 이어 갈 한 가지를 정하는 까닭을 짚는다. 여러 가지를 한꺼번에 이어 가려는 학생에게 우선 한 가지만 정하게 한다. 운동 시간 합계 셈에서는 "30초가 몇 번이지?" 하고 곱셈으로 묶어 세게 한다.',
              levels: { easy: { workStep: 10, restStep: 10, showTotal: true }, base: { showTotal: true }, challenge: { showTotal: false } },
              items: [
                { prompt: '이어 갈 운동을 30초 하고 15초 쉬기를 4번 하도록 타이머를 맞춰요.', toolOptions: { plan: { work: 20, rest: 10, rounds: 2 } }, target: { plan: { work: 30, rest: 15, rounds: 4 } }, difficulty: 0.15 },
                { prompt: '30초 운동, 15초 쉬기를 4번 하면 처음부터 끝까지 모두 몇 초인지 맞춰요.', toolOptions: { plan: { work: 30, rest: 15, rounds: 2 } }, target: { total: 165 }, difficulty: 0.25,
                  hints: ['운동 구간 수와 쉬는 구간 수가 달라요. 쉬는 구간은 운동 구간 사이에만 있어요.', '운동한 시간의 합과 쉰 시간의 합을 따로 구해 더해 보세요.'] },
                { prompt: '다시 적은 내 계획을 점검 목록에 표시해요.', target: { selfCheck: ['처음 계획과 달라진 점을 한 가지 말할 수 있어요', '내 몸과 시간에 맞는 만큼이에요', '이어 갈 한 가지를 정했어요', '쉬는 시간도 넣었어요'] }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"이어 갈 한 가지를 정한 까닭을 한 문장으로 말해 볼까요?" 한두 명이 발표한다. 다음 단원 활동에서 이 계획을 이어 쓴다고 알려 준다. 출구 1번을 틀린 학생은 바뀐 것과 그대로인 것을 나누어 말하게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'story', options: { mode: 'fill', cards: ['화·목 방과 후에', '교실 뒤 빈 곳에서 가벼운 스트레칭', '새벽 다섯 시에'], slots: [{ id: 'when', who: '도윤', motif: 'sun', label: '이제부터 ___ 운동할 거야.' }, { id: 'what', who: '도윤', motif: 'house', label: '___ 할 거야.' }] }, prompt: '도윤이 고친 계획 문장에 알맞은 카드를 넣어요.', target: { fill: { when: '화·목 방과 후에', what: '교실 뒤 빈 곳에서 가벼운 스트레칭' } }, difficulty: 0.2 },
              { type: 'choice', prompt: '이어 갈 한 가지를 정할 때 가장 알맞은 것은 무엇인가요?', options: ['가장 어려운 것으로 정한다', '내 몸과 시간에 맞아 지킬 수 있는 것으로 정한다', '친구가 하는 것을 그대로 따라 한다'], answer: 1, difficulty: 0.15, explain: '지킬 수 있는 것이어야 이어 갈 수 있어요.' },
              MOOD('이어 갈 계획을 정한 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '고친 운동 계획',
          items: [
            { type: 'table', prompt: '고친 내 운동 계획을 쓰세요.', columns: ['요일', '언제', '어디서', '무엇을'], rows: 3 },
            { type: 'blank', prompt: '30초 운동, 15초 쉬기를 3번 하면 모두 몇 초인지 쓰세요.', text: '30×3 + 15×2 = ___ 초', answer: '120' },
            { type: 'short', prompt: '처음 계획에서 달라진 점을 한 문장으로 쓰세요.' },
            { type: 'check', prompt: '내 계획이 맞는지 ✓ 하세요.', options: ['내 몸에 맞아요', '내 시간에 맞아요', '이어 갈 한 가지가 있어요'] },
          ],
          easy: {
            note: '처음 계획과 달라진 곳 한 군데만 찾아도 돼요.',
            items: [
              { type: 'choice', prompt: '이어 갈 계획은?', options: ['지킬 수 있는 것', '가장 어려운 것'], answer: '지킬 수 있는 것' },
              { type: 'short', prompt: '이어 갈 운동 하나를 쓰세요.' },
              { type: 'draw', prompt: '다음 주에 운동하는 내 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드 한 장이 미리 놓여 있고, 타이머가 10초씩 바뀌며 전체 시간이 화면에 보여요.',
          base: '카드를 모두 놓은 뒤 확인하고 전체 시간을 화면에서 확인해요.',
          challenge: '전체 시간이 보이지 않아 스스로 셈해 맞춰요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 계획을 못 지킨 까닭을 몸 탓으로만 돌린다 → 방법도 함께 고친다. ② 처음 계획과 달라진 점을 말하지 못한다 → 바뀐 것과 그대로인 것을 나누어 말하게 한다. ③ 운동 구간 사이의 쉬는 횟수를 틀리게 센다 → 운동 4번 사이의 쉬기는 3번이라고 짚는다. 학생마다 계획 내용이 달라 교사가 읽고 확인한다.',
      }),
      // ───────────────────────── 11 ─────────────────────────
      L(11, {
        title: '하루 중 앉아만 있는 때 찾아 그래프로 보기',
        objective: '하루 가운데 몸을 거의 움직이지 않고 앉아 있는 때를 찾아 그래프로 읽고, 몸을 덜 움직이게 만드는 일을 두 가지 이상 말할 수 있다.',
        illustration: art('a paper day timeline with small scenes of a child sitting at a desk, on a bus seat and on a sofa, and a few scenes of walking and playing outside', [
          { motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'cloud', x: 100, y: 50 }, { motif: 'hills', y: 208 },
          { motif: 'house', x: 90, y: 214, s: 0.9 }, { motif: 'tree', x: 420, y: 214 },
          { motif: 'text', x: 240, y: 128, text: '앉아 있는 시간은?', size: 24 },
        ]),
        safety: [SPACE, FLOOR, STOP],
        stages: stages(
          {
            teacher: '"어제 일어난 때부터 잘 때까지, 의자나 소파에 앉아 있던 때를 손가락으로 세어 볼까요?" 학교 수업·버스·식사·숙제·화면 보기가 나온다. 앉아 있는 것이 나쁜 것이 아니라 오래 이어지는 것이 문제라고 말해 준다. "앉아 있는 시간은 줄일 수 없는 걸까요?"를 묻고 오늘 찾아본다고 알린다.',
            student: '하루 가운데 앉아만 있는 때는 언제일까요? 찾아서 그래프로 나타내 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 앉아 있던 시간 그래프 만들고 읽기', minutes: 13, tool: 'chart',
              task: '가상 친구의 하루 앉은 시간을 막대그래프로 나타내고 읽어요. 내 하루 기록은 활동지에 옮겨 같은 방법으로 그려요.',
              teacher: '"가장 길게 앉아 있는 때는 언제일까요? 그 시간에 움직일 수 있는 방법은 없을까요?" 그래프에서 가장 높은 막대를 짚고 줄일 방법을 말하게 한다. 학교 수업 시간을 줄일 수 없다고 느끼는 학생에게는 쉬는 시간이나 집에서의 시간을 먼저 보게 한다.',
              levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '민지가 하루 동안 앉아 있던 시간을 표를 보고 막대그래프로 완성해요.', toolOptions: { type: 'bar', title: '민지가 앉아 있던 시간(시간)', unit: '시간', xLabel: '때', yLabel: '앉은 시간', data: [['학교 수업', 4], ['버스·차', 1], ['숙제·책상', 2], ['화면 보기', 2]] }, target: { build: true }, levels: { easy: { toolOptions: { given: [0, 1] } } }, difficulty: 0.15 },
                { prompt: '민지가 가장 오래 앉아 있던 때를 그래프에서 골라요.', toolOptions: { type: 'bar', mode: 'read', title: '민지가 앉아 있던 시간(시간)', unit: '시간', xLabel: '때', yLabel: '앉은 시간', data: [['학교 수업', 4], ['버스·차', 1], ['숙제·책상', 2], ['화면 보기', 2]], question: '가장 오래 앉은 때는?', choices: ['학교 수업', '버스·차', '숙제·책상', '화면 보기'] }, target: { pick: 0 }, difficulty: 0.15 },
                { prompt: '민지가 학교 밖에서 앉아 있던 시간은 모두 몇 시간인지 그래프를 읽고 더해 써요.', toolOptions: { type: 'bar', mode: 'read', title: '민지가 앉아 있던 시간(시간)', unit: '시간', xLabel: '때', yLabel: '앉은 시간', data: [['학교 수업', 4], ['버스·차', 1], ['숙제·책상', 2], ['화면 보기', 2]], question: '학교 수업을 뺀 앉은 시간은 모두 몇 시간인가요?' }, target: { value: 5 }, levels: { challenge: { prompt: '민지가 화면 보기 시간을 1시간 줄이면 하루에 앉아 있는 시간은 모두 몇 시간이 되는지 써요.', toolOptions: { question: '화면 보기를 1시간 줄이면 앉은 시간은 모두 몇 시간인가요?' }, target: { value: 8 } } }, difficulty: 0.25,
                  conclude: '학교 밖의 시간을 줄이는 것이 우리가 바꿀 수 있는 가장 쉬운 방법이에요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 몸을 덜 움직이게 만드는 일 찾기', minutes: 13, tool: 'mindmap',
              task: '하루의 일을 앉아서 하는 일과 몸을 움직이는 일로 나누고, 몸을 덜 움직이게 만드는 일과 줄이는 방법을 가려요.',
              teacher: '"숙제하는 시간도 몸을 덜 움직이게 만들까요? 숙제는 안 할 수 없는데 어떻게 하면 좋을까요?" 앉아 있는 일을 아예 없애는 것이 아니라 중간에 움직임을 끼우는 방법을 찾는다. 모든 일을 움직임으로 고르는 학생에게는 앉아서 하는 일을 한 가지씩 찾아보게 한다.',
              levels: CARD,
              items: [
                { prompt: '하루의 일을 앉아서 하는 일과 몸을 움직이는 일로 나누어요.', toolOptions: { topic: '하루의 일', slots: ['앉아서 해요', '몸을 움직여요'], cards: ['만화 영상 보기', '쉬는 시간에 복도 걷기', '책상에서 숙제하기', '체육 시간 달리기'] }, target: { sort: { '앉아서 해요': ['만화 영상 보기', '책상에서 숙제하기'], '몸을 움직여요': ['쉬는 시간에 복도 걷기', '체육 시간 달리기'] } }, difficulty: 0.15 },
                { prompt: '몸을 덜 움직이게 만드는 일만 골라요.', toolOptions: { mode: 'pick', topic: '덜 움직이는 일', cards: ['몇 시간씩 이어서 화면 보기', '버스 한 정거장 전에 내려 걷기', '의자에 앉은 채 오래 게임하기', '엘리베이터 대신 계단 오르기'] }, target: { pick: ['몇 시간씩 이어서 화면 보기', '의자에 앉은 채 오래 게임하기'] }, difficulty: 0.2 },
                { prompt: '앉아 있는 시간을 줄이는 방법과 하루 때를 이어요.', toolOptions: { mode: 'match', topic: '줄이는 방법', slots: [{ id: 'break', label: '쉬는 시간' }, { id: 'home', label: '집에서 화면을 볼 때' }, { id: 'bus', label: '집에 갈 때' }], cards: ['일어나서 가볍게 스트레칭하기', '30분마다 일어나 한 바퀴 걷기', '한 정거장 일찍 내려 걷기'] }, target: { match: { break: '일어나서 가볍게 스트레칭하기', home: '30분마다 일어나 한 바퀴 걷기', bus: '한 정거장 일찍 내려 걷기' } }, difficulty: 0.25 },
              ],
            },
          ],
          {
            teacher: '"오늘 찾은 앉아 있는 때 가운데 줄일 수 있는 때는 언제인가요?" 방법을 한 가지씩 말하게 한다. 출구 1번을 틀린 학생은 눈금선을 따라 막대 높이를 다시 읽게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '준호가 앉아 있던 시간(시간)', unit: '시간', xLabel: '때', yLabel: '앉은 시간', data: [['학교 수업', 4], ['학원', 2], ['화면 보기', 3]], question: '학교 밖에서 더 오래 앉은 때는?', choices: ['학원', '화면 보기'] }, prompt: '준호의 그래프를 보고 학교 밖에서 더 오래 앉은 때를 골라요.', target: { pick: 1 }, difficulty: 0.15 },
              { type: 'choice', prompt: '앉아 있는 시간에 대해 알맞은 말은 무엇인가요?', options: ['줄일 수 없는 시간이에요', '중간에 움직임을 끼우면 줄일 수 있어요', '앉아 있는 것은 아무 상관이 없어요'], answer: 1, difficulty: 0.15, explain: '앉아 있는 사이에 일어나 움직이면 줄일 수 있어요.' },
              MOOD('내 하루의 앉은 시간을 찾아본 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '내 하루의 앉은 시간',
          items: [
            { type: 'table', prompt: '어제 앉아 있던 때와 시간을 쓰세요.', columns: ['앉아 있던 때', '시간(대략)'], rows: 4 },
            { type: 'draw', prompt: '위 표를 막대그래프로 그리세요(가로: 때, 세로: 시간).' },
            { type: 'choice', prompt: '앉아 있는 시간을 줄이는 방법에 ○ 하세요.', options: ['30분마다 일어나 걷기', '쉬지 않고 계속 앉기', '움직이는 일을 모두 없애기'], answer: '30분마다 일어나 걷기' },
            { type: 'short', prompt: '내가 줄일 수 있는 앉은 때 하나와 방법을 쓰세요.' },
          ],
          easy: {
            note: '앉아 있는 사이에 한 번 일어나 움직이면 돼요.',
            items: [
              { type: 'choice', prompt: '앉은 시간을 줄이는 방법은?', options: ['중간에 일어나 걷기', '계속 앉기'], answer: '중간에 일어나 걷기' },
              { type: 'short', prompt: '내가 앉아 있던 때 하나를 쓰세요.' },
              { type: 'draw', prompt: '쉬는 시간에 몸을 움직이는 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '막대 위에 값이 보이고 막대 두 개가 미리 그려져 있어요. 카드를 맞는 칸에 놓으면 바로 알려 줘요.',
          base: '그래프를 스스로 그리고 읽어요.',
          challenge: '읽은 값이 맞힌 뒤에야 드러나고, 마지막 문항은 시간을 줄인 뒤의 합을 구해요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 앉아 있는 시간은 줄일 수 없다고 여긴다 → 쉬는 시간·집·이동에서 줄일 수 있는 때를 찾게 한다. ② 앉는 것 자체가 나쁘다고 생각한다 → 오래 이어서 앉는 것을 줄인다고 말한다. ③ 막대 합계를 틀린다 → 학교 수업 막대를 뺀다는 조건을 밑줄 긋게 한다. 그래프의 수는 설명용 예시다.',
      }),
      // ───────────────────────── 12 ─────────────────────────
      L(12, {
        title: '앉은 시간을 줄이면 좋아지는 것 찾아 말하기',
        objective: '앉은 시간을 줄이면 좋아지는 것 두 가지를 근거를 들어 말하고, 앉아만 있고 싶은 순간에 어떻게 할지 고를 수 있다.',
        illustration: art('a child standing and stretching up beside a desk while a small paper clock and a smiling heart float nearby', [
          { motif: 'sun', x: 410, y: 56, s: 0.7 }, { motif: 'cloud', x: 100, y: 50 }, { motif: 'hills', y: 210 },
          { motif: 'flower', x: 70, y: 212 }, { motif: 'tree', x: 420, y: 212, s: 0.8 },
          { motif: 'text', x: 240, y: 128, text: '일어나면 달라져요', size: 24 },
        ]),
        safety: [SPACE, STOP, FLOOR],
        stages: stages(
          {
            teacher: '교사가 학생들과 함께 1분 동안 의자에 앉아 눈을 감고 있다가 일어나 기지개를 켠다. "앉아 있다가 일어나니 몸이 어떻게 달라졌나요?" 어깨·허리·졸림·기분이 나온다. 앉은 시간을 줄이면 무엇이 좋아질지 근거를 들어 말하는 연습을 한다고 알린다. "앉아 있는 시간은 줄일 수 없다"는 생각을 바꿀 수 있게 이끈다.',
            student: '잠깐 일어나 기지개를 켜 봐요. 몸이 어떻게 달라졌나요? 앉은 시간을 줄이면 좋아지는 것을 찾아봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 일어나 움직이면 좋아지는 까닭 잇기', minutes: 13, tool: 'mindmap',
              task: '앉은 시간을 줄이면 좋아지는 것과 그 까닭을 이어 보고, 알맞은 까닭만 골라요.',
              teacher: '"일어나서 한 바퀴 걷고 오니 졸림이 어떻게 되었나요? 왜 그럴까요?" 몸을 움직이면 몸이 따뜻해지고 기분이 가벼워지는 경험을 근거로 삼게 한다. 근거 없이 "그냥 좋아요"라고 말하는 학생에게는 몸의 어느 곳이 어떻게 달라졌는지 묻는다.',
              levels: CARD,
              items: [
                { prompt: '앉은 시간을 줄이면 좋아지는 것과 까닭을 이어요.', toolOptions: { mode: 'match', topic: '줄이면 좋아져요', slots: [{ id: 'stiff', label: '어깨와 허리가 덜 뻐근해요' }, { id: 'sleepy', label: '졸림이 줄어요' }, { id: 'mood', label: '기분이 가벼워져요' }], cards: ['일어나 움직이면 굳은 곳이 풀려요', '몸이 따뜻해지고 정신이 깨어요', '몸을 움직이면 답답한 마음이 풀려요'] }, target: { match: { stiff: '일어나 움직이면 굳은 곳이 풀려요', sleepy: '몸이 따뜻해지고 정신이 깨어요', mood: '몸을 움직이면 답답한 마음이 풀려요' } }, difficulty: 0.2 },
                { prompt: '앉은 시간을 줄여야 하는 까닭으로 알맞은 것만 골라요.', toolOptions: { mode: 'pick', topic: '알맞은 까닭', cards: ['오래 앉으면 어깨와 허리가 굳어요', '앉아 있으면 키가 줄어들어요', '일어나 움직이면 몸이 가벼워져요', '움직이면 숙제를 안 해도 돼요'] }, target: { pick: ['오래 앉으면 어깨와 허리가 굳어요', '일어나 움직이면 몸이 가벼워져요'] }, difficulty: 0.2 },
                { prompt: '일어났을 때 달라지는 것을 몸, 마음 두 칸으로 나누어요.', toolOptions: { topic: '달라지는 것', slots: ['몸', '마음'], cards: ['뻐근한 어깨가 풀려요', '눈의 피로가 줄어요', '답답함이 풀려요', '다시 해 볼 힘이 생겨요'] }, target: { sort: { '몸': ['뻐근한 어깨가 풀려요', '눈의 피로가 줄어요'], '마음': ['답답함이 풀려요', '다시 해 볼 힘이 생겨요'] } }, difficulty: 0.25,
                  conclude: '앉은 시간을 줄이면 몸이 덜 굳고 마음도 가벼워져요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 앉아만 있고 싶을 때 어떻게 할까?', minutes: 13, tool: 'emotion',
              task: '앉아만 있고 싶은 순간의 상황이에요. 어떻게 할지 고르고, 고른 방법을 짝에게 말로 해 봐요.',
              teacher: '"앉아 있고 싶은 마음이 드는 건 이상한 게 아니에요. 그때 어떻게 하면 좋을까요?" 마음을 인정한 뒤 작은 행동을 고르게 한다. 아예 안 하겠다는 보기를 고른 학생에게는 1분만 해 보는 방법을 알려 준다.',
              levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '재미있는 영상이 끝나지 않아 계속 앉아 있고 싶어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '재미있는 영상을 보다가 한 시간이 지났어요. 더 앉아 있고 싶어요.', choices: [{ id: 'more', text: '끝날 때까지 가만히 앉아 있어요', result: '어깨가 뻐근하고 눈이 피곤했어요.', mood: '속상함', why: '오래 앉으면 몸이 굳어요.' }, { id: 'stand', text: '영상 사이에 일어나 1분 기지개를 켜요', result: '몸이 가벼워져서 다시 즐겁게 봤어요.', mood: '편안함' }, { id: 'stop', text: '화나서 소리를 지르며 꺼요', result: '가족이 놀랐어요.', mood: '미안함', why: '화를 내는 것은 몸을 움직이는 좋은 방법이 아니에요.' }] }, target: { choice: 'stand' }, difficulty: 0.15 },
                { prompt: '숙제하다 몸이 뻐근해요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '책상에서 숙제를 오래 하다 보니 어깨와 허리가 뻐근해요.', choices: [{ id: 'bear', text: '참고 숙제를 끝낼 때까지 해요', result: '숙제 끝나고 몸이 더 뻐근했어요.', mood: '속상함', why: '중간에 풀어 주어야 덜 굳어요.' }, { id: 'break', text: '숙제 사이사이에 일어나 어깨를 돌려요', result: '몸이 풀려서 숙제가 더 잘 됐어요.', mood: '뿌듯함' }, { id: 'lie', text: '바닥에 누워 버려요', result: '졸려서 숙제가 더 늦어졌어요.', mood: '걱정', why: '누우면 몸이 더 늘어져요.' }] }, target: { choice: 'break' }, difficulty: 0.2 },
                { prompt: '친구가 "움직이기 귀찮아, 계속 앉아 있자"고 해요. 어떻게 말할까요?', toolOptions: { mode: 'branch', situation: '친구가 "귀찮아, 쉬는 시간에도 계속 앉아 있자"고 해요.', choices: [{ id: 'agree', text: '"그래, 나도 앉아 있을래"라고 해요', result: '둘 다 점심시간이 지루했어요.', mood: '걱정', why: '움직이면 기분이 더 가벼워져요.' }, { id: 'invite', text: '"1분만 같이 걷고 올래?"라고 말해요', result: '친구도 함께 걷고 기분이 좋아졌어요.', mood: '고마움' }, { id: 'force', text: '"무조건 일어나!" 하고 끌어당겨요', result: '친구가 아파서 화를 냈어요.', mood: '화남', why: '힘으로 끌면 다칠 수 있어요.' }] }, target: { choice: 'invite' }, difficulty: 0.2 },
              ],
            },
          ],
          {
            teacher: '"앉은 시간을 줄이면 좋아지는 것 가운데 가장 와닿는 것 하나는 무엇인가요?" 몸과 마음 한 가지씩 말하게 한다. 출구 1번을 틀린 학생은 일어났을 때 느낀 점을 몸·마음으로 나누어 다시 말하게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '줄이면 좋아져요', slots: [{ id: 'neck', label: '목이 뻣뻣해요' }, { id: 'sleepy', label: '낮에 졸려요' }], cards: ['고개를 돌리며 일어나 움직여요', '밖에서 가볍게 걸어요'] }, prompt: '새 상황과 알맞은 방법을 이어요.', target: { match: { neck: '고개를 돌리며 일어나 움직여요', sleepy: '밖에서 가볍게 걸어요' } }, difficulty: 0.2 },
              { type: 'choice', prompt: '앉아 있고 싶은 마음이 들 때 가장 알맞은 행동은 무엇인가요?', options: ['1분만 일어나 움직여 본다', '마음을 무시하고 계속 앉는다', '화를 내며 짜증을 낸다'], answer: 0, difficulty: 0.1, explain: '작은 움직임부터 시작하면 앉아 있는 시간이 줄어요.' },
              MOOD('일어나 움직여 본 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '일어나면 좋아지는 것',
          items: [
            { type: 'table', prompt: '앉은 시간을 줄이면 좋아지는 것을 몸과 마음으로 나누어 쓰세요.', columns: ['몸', '마음'], rows: 3 },
            { type: 'choice', prompt: '알맞은 까닭에 ○ 하세요.', options: ['움직이면 몸이 가벼워져요', '움직이면 숙제가 없어져요', '앉아 있으면 키가 줄어요'], answer: '움직이면 몸이 가벼워져요' },
            { type: 'short', prompt: '앉아 있다 일어났을 때 몸이 어떻게 달라졌는지 쓰세요.' },
            { type: 'check', prompt: '앉아만 있고 싶을 때 할 수 있는 것에 ✓ 하세요.', options: ['1분만 일어나기', '기지개 켜기', '물 마시러 걷기'] },
          ],
          easy: {
            note: '몸과 마음이 어떻게 달라졌는지 한 가지만 써도 돼요.',
            items: [
              { type: 'choice', prompt: '일어나 움직이면?', options: ['몸이 가벼워져요', '몸이 더 굳어요'], answer: '몸이 가벼워져요' },
              { type: 'short', prompt: '1분 동안 할 수 있는 움직임을 하나 쓰세요.' },
              { type: 'draw', prompt: '기지개를 켜는 내 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 맞는 칸에 놓으면 바로 알려 주고, 상황 문항은 보기가 두 개씩이에요.',
          base: '카드를 모두 놓은 뒤 확인하고 상황 보기 세 개 가운데 골라요.',
          challenge: '확인을 누르기 전까지 선택의 결과가 보이지 않아 까닭을 먼저 말해 봐요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 앉아 있는 시간은 줄일 수 없다고 여긴다 → 1분 움직임으로 시작한다. ② 좋아지는 까닭을 근거 없이 말한다 → 몸의 어느 곳이 어떻게 달라졌는지 묻는다. ③ 건강 효과를 과장해 말한다 → 뻐근함·졸림·기분처럼 직접 느낄 수 있는 것만 말하게 한다. 의학적 효과는 다루지 않는다.',
      }),
      // ───────────────────────── 13 ─────────────────────────
      L(13, {
        title: '이어 앉은 시간이 줄어든 모습 선그래프로 읽기',
        objective: '일어나 움직이는 습관을 들인 뒤 한 번에 이어서 앉은 시간이 줄어든 변화를 선그래프로 읽고, 쉬는 시간 스트레칭 계획을 세울 수 있다.',
        illustration: art('a paper line graph sloping down across a classroom wall with small paper children standing up and stretching at each point along the line', [
          { motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'cloud', x: 100, y: 50 }, { motif: 'hills', y: 208 },
          { motif: 'tree', x: 62, y: 212 }, { motif: 'flower', x: 420, y: 214 },
          { motif: 'text', x: 240, y: 128, text: '선이 내려가요', size: 26 },
        ]),
        safety: [SPACE, FLOOR, STOP, PAIN],
        stages: stages(
          {
            teacher: '"지난 시간에는 앉은 시간을 줄이면 좋은 점을 찾았어요. 줄어들었는지는 어떻게 알 수 있을까요?" 기록을 모아 그래프로 보면 변화가 한눈에 보인다고 알려 준다. 선이 내려가면 줄어든 것이고 올라가면 늘어난 것이라는 읽는 법을 칠판에 한 번 그려 본다. 선이 한 번 올라갔다고 해서 실패는 아니라는 점도 미리 말해 둔다.',
            student: '일어나는 습관을 들인 뒤, 이어서 앉은 시간이 어떻게 달라졌는지 선그래프로 읽어 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 이어 앉은 시간 선그래프 읽기', minutes: 14, tool: 'chart',
              task: '가상 친구가 한 번에 이어서 앉은 시간을 기록한 선그래프를 만들고 읽어요. 내 기록은 활동지에 옮겨 그려요.',
              teacher: '"선이 내려가는 곳은 무슨 뜻일까요?" 내려가면 이어 앉은 시간이 줄어든 것이라고 읽게 한다. 선이 올라가는 곳에서 "실패했다"고 말하는 학생에게는 그날 무슨 일이 있었을지 묻고, 전체 흐름을 보게 한다.',
              levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '지아가 한 번에 이어서 앉은 시간을 표를 보고 선그래프로 완성해요.', toolOptions: { type: 'line', title: '지아가 한 번에 이어서 앉은 시간(분)', unit: '분', xLabel: '요일', yLabel: '이어 앉은 시간', data: [['월', 90], ['화', 60], ['수', 45], ['목', 45], ['금', 30]] }, target: { build: true }, levels: { easy: { toolOptions: { given: [0, 1] } } }, difficulty: 0.2 },
                { prompt: '이어 앉은 시간이 가장 많이 줄어든 때를 골라요.', toolOptions: { type: 'line', mode: 'read', title: '지아가 한 번에 이어서 앉은 시간(분)', unit: '분', xLabel: '요일', data: [['월', 90], ['화', 60], ['수', 45], ['목', 45], ['금', 30]], question: '가장 많이 줄어든 때는?', choices: ['월→화', '화→수', '수→목', '목→금'] }, target: { pick: 0 }, difficulty: 0.25 },
                { prompt: '지아의 금요일 이어 앉은 시간은 월요일보다 몇 분 줄었는지 써요.', toolOptions: { type: 'line', mode: 'read', title: '지아가 한 번에 이어서 앉은 시간(분)', unit: '분', xLabel: '요일', data: [['월', 90], ['화', 60], ['수', 45], ['목', 45], ['금', 30]], question: '월요일보다 몇 분 줄었나요?' }, target: { value: 60 }, levels: { challenge: { prompt: '지아의 이어 앉은 시간이 하루 전과 같았던 요일은 며칠째 이어졌는지 세어 써요.', toolOptions: { question: '하루 전과 같았던 요일은 며칠인가요?' }, target: { value: 1 } } }, difficulty: 0.25,
                  conclude: '선이 내려가면 줄어든 것이고 평평한 곳은 그대로예요. 선이 올라갔더라도 전체 흐름을 봐요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 쉬는 시간 스트레칭 계획 세우기', minutes: 12, tool: 'timer',
              task: '쉬는 시간 스트레칭 계획을 타이머로 맞추고, 스트레칭 차례를 놓고 계획을 점검해요.',
              teacher: '"쉬는 시간이 10분이니까 스트레칭은 몇 분이면 될까요?" 쉬는 시간 안에 화장실·물 마시기·스트레칭을 모두 넣을 시간을 세게 한다. 쉬는 시간 내내 하려는 학생에게 "다음 시간 준비도 해야 해요"라고 말해 준다.',
              levels: { easy: { workStep: 10, restStep: 10, showTotal: true }, base: { showTotal: true }, challenge: { showTotal: false } },
              items: [
                { prompt: '스트레칭 45초 하고 15초 쉬기를 2번 하도록 타이머를 맞춰요.', toolOptions: { plan: { work: 30, rest: 10, rounds: 3 } }, target: { plan: { work: 45, rest: 15, rounds: 2 } }, difficulty: 0.15 },
                { prompt: '쉬는 시간 스트레칭 동작을 목에서 아래로 내려가는 차례로 놓아요.', toolOptions: { cards: ['허리 옆으로 숙이기', '목 좌우로 천천히 돌리기', '어깨 위로 올렸다 내리기', '발목 한 쪽씩 돌리기'] }, target: { order: ['목 좌우로 천천히 돌리기', '어깨 위로 올렸다 내리기', '허리 옆으로 숙이기', '발목 한 쪽씩 돌리기'] }, levels: { easy: { state: { order: ['목 좌우로 천천히 돌리기', '어깨 위로 올렸다 내리기', '발목 한 쪽씩 돌리기', '허리 옆으로 숙이기'] } } }, difficulty: 0.2 },
                { prompt: '스트레칭 계획을 점검 목록에 표시해요.', target: { selfCheck: ['쉬는 시간 안에 끝낼 수 있어요', '반동 없이 천천히 하기로 했어요', '아프면 멈추기로 했어요'] }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"선그래프가 내려가는 것을 보고 어떤 생각이 들었나요?" 줄어든 변화가 내 노력이라는 것을 말하게 한다. 출구 1번을 틀린 학생은 가장 가파르게 내려간 곳을 손으로 따라가 보게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'chart', options: { type: 'line', mode: 'read', title: '서연이 한 번에 이어서 앉은 시간(분)', unit: '분', xLabel: '요일', data: [['월', 80], ['화', 80], ['수', 50], ['목', 40]], question: '그대로였던 때는?', choices: ['월→화', '화→수', '수→목'] }, prompt: '서연의 선그래프를 보고 그대로였던 때를 골라요.', target: { pick: 0 }, difficulty: 0.2 },
              { type: 'choice', prompt: '선그래프에서 선이 내려가면 무슨 뜻인가요?', options: ['이어 앉은 시간이 늘었어요', '이어 앉은 시간이 줄었어요', '아무 변화가 없어요'], answer: 1, difficulty: 0.1, explain: '선이 내려가면 값이 줄어든 것이에요.' },
              MOOD('선그래프를 읽어 본 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '이어 앉은 시간 선그래프',
          items: [
            { type: 'table', prompt: '내가 한 번에 이어서 앉은 시간을 쓰세요.', columns: ['요일', '월', '화', '수', '목', '금'], cells: [['이어 앉은 시간(분)', '', '', '', '', '']] },
            { type: 'draw', prompt: '위 표를 선그래프로 그리세요(가로: 요일, 세로: 분).' },
            { type: 'choice', prompt: '선이 내려가면 알맞은 말에 ○ 하세요.', options: ['값이 줄었어요', '값이 늘었어요', '알 수 없어요'], answer: '값이 줄었어요' },
            { type: 'short', prompt: '그래프를 보고 알게 된 점을 한 줄로 쓰세요.' },
          ],
          easy: {
            note: '선이 내려가면 줄어든 것, 올라가면 늘어난 것이에요.',
            items: [
              { type: 'choice', prompt: '선이 올라가면?', options: ['늘었어요', '줄었어요'], answer: '늘었어요' },
              { type: 'short', prompt: '쉬는 시간에 할 스트레칭 하나를 쓰세요.' },
              { type: 'draw', prompt: '쉬는 시간에 스트레칭하는 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '점 위에 값이 보이고 점 두 개가 미리 찍혀 있어요. 타이머는 10초씩 바뀌고 전체 시간이 보여요.',
          base: '선그래프를 스스로 그리고 읽어요.',
          challenge: '읽은 값이 맞힌 뒤에야 드러나고, 마지막 문항은 같은 값이 이어진 곳을 세어요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 선이 한 번 올라가면 실패라고 여긴다 → 전체 흐름을 본다. ② 가장 많이 줄어든 때를 점의 높이로만 고른다 → 이웃한 두 점의 차이를 구하게 한다. ③ 쉬는 시간 전체를 스트레칭에 쓰려 한다 → 화장실·물·다음 시간 준비 시간을 함께 센다. 그래프의 수는 설명용 예시다.',
      }),
      // ───────────────────────── 14 ─────────────────────────
      L(14, {
        title: '앉은 시간 줄일 내 방법 하나 골라 하루 해 보기',
        objective: '앉은 시간을 줄일 방법 하나를 기준에 따라 골라 하루 동안 해 보고, 실천한 횟수를 적을 수 있다.',
        illustration: art('a child picking one sticky note labeled with a small stairs icon from several notes on a wall, with a school corridor behind', [
          { motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'cloud', x: 100, y: 50 }, { motif: 'hills', y: 208 },
          { motif: 'house', x: 90, y: 214, s: 0.9 }, { motif: 'tree', x: 420, y: 214 },
          { motif: 'text', x: 240, y: 128, text: '내 방법 하나 고르기', size: 24 },
        ]),
        safety: [SPACE, FLOOR, STAIR, LOOK],
        stages: stages(
          {
            teacher: '"앉은 시간을 줄이는 방법은 많아요. 그중 어떤 것이 내게 맞을까요?" 방법을 칠판에 모은다: 쉬는 시간 한 바퀴 걷기, 한 층 계단으로 오르기, 30분마다 일어나기, 물 마시러 걷기. "한 번에 다 하려고 하면 어떻게 될까요?"라고 물어 하나만 골라야 오래간다고 짚는다.',
            student: '앉은 시간을 줄일 방법 가운데 내가 오늘 해 볼 한 가지를 골라 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 방법을 고르는 기준 알아보기', minutes: 13, tool: 'mindmap',
              task: '방법마다 안전한지, 쉬운지, 언제 하는지를 따져 보고 내게 맞는 한 가지를 골라요.',
              teacher: '"방법을 고를 때 무엇을 먼저 따져 볼까요?" 안전한지, 내 하루에 넣을 수 있는지, 혼자 할 수 있는지를 말하게 한다. "제일 힘든 방법이 제일 좋아요"라고 고르는 학생에게는 오래 이어 가려면 쉬워야 한다고 말해 준다.',
              levels: CARD,
              items: [
                { prompt: '방법을 쉬운 방법과 어려운 방법으로 나누어요.', toolOptions: { topic: '방법의 어려움', slots: ['쉬워요', '어려워요'], cards: ['쉬는 시간에 복도를 한 바퀴 걷기', '물을 마시러 걸어가기', '하루에 계단 열 층 오르기', '매 시간마다 운동장 달리기'] }, target: { sort: { '쉬워요': ['쉬는 시간에 복도를 한 바퀴 걷기', '물을 마시러 걸어가기'], '어려워요': ['하루에 계단 열 층 오르기', '매 시간마다 운동장 달리기'] } }, difficulty: 0.2 },
                { prompt: '방법을 고를 때 따져 볼 것만 골라요.', toolOptions: { mode: 'pick', topic: '고르는 기준', cards: ['안전하게 할 수 있는가', '내 하루에 넣을 수 있는가', '친구보다 더 힘든가', '혼자서도 할 수 있는가'] }, target: { pick: ['안전하게 할 수 있는가', '내 하루에 넣을 수 있는가', '혼자서도 할 수 있는가'] }, difficulty: 0.2 },
                { prompt: '내게 맞는 방법을 고르는 차례대로 카드를 놓아요.', toolOptions: { mode: 'order', cards: ['고른 방법을 하루 계획에 쓰기', '방법을 여러 개 떠올리기', '안전하고 쉬운지 따져 보기', '가장 맞는 한 가지 고르기'] }, target: { order: ['방법을 여러 개 떠올리기', '안전하고 쉬운지 따져 보기', '가장 맞는 한 가지 고르기', '고른 방법을 하루 계획에 쓰기'] }, difficulty: 0.25,
                  conclude: '쉽고 안전한 방법 한 가지를 정해야 오래 이어 갈 수 있어요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 하루 동안 해 보고 기록하기', minutes: 13, tool: 'timer',
              task: '고른 방법을 하기 전에 안전 점검을 하고, 하루 동안 해낸 횟수를 쉬는 시간마다 적고 스스로 점검해요.',
              teacher: '"쉬는 시간마다 한 번씩 해 보고 적으세요. 횟수가 많고 적음은 중요하지 않아요." 기록을 남과 견주는 학생에게는 내 기록만 본다고 다시 말한다. 계단 방법을 고른 학생에게는 난간을 잡고 한 칸씩 걷는지 "한 칸씩이지요?" 하며 곁에서 본다.',
              levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
              items: [
                { prompt: '방법을 해 보기 전에 둘레를 살피고 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['가는 길에 뛰어다니는 친구가 없어요', '바닥이 젖어 있지 않아요', '계단이라면 난간이 있어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '쉬는 시간마다 고른 방법을 해낸 횟수를 적어요.', toolOptions: { fields: ['1교시 뒤', '2교시 뒤', '3교시 뒤', '4교시 뒤'], unit: '번' }, target: { records: true }, difficulty: 0.15 },
                { prompt: '하루를 마치고 내 방법을 점검 목록에 표시해요.', target: { selfCheck: ['고른 방법을 하루에 한 번 이상 했어요', '안전 약속을 지켰어요', '해 보니 내게 맞는 방법이었어요'] }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"내가 고른 방법을 오늘 몇 번 해 보았나요? 내일도 할 수 있을까요?" 이어 갈 가능성을 스스로 말하게 한다. 출구 1번을 틀린 학생은 안전한지를 먼저 따졌는지 "난간은 있었나요?"처럼 물어 본다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { topic: '방법의 어려움', slots: ['쉬워요', '어려워요'], cards: ['점심 먹고 운동장 한 바퀴 걷기', '매 쉬는 시간마다 줄넘기 백 번', '교실 뒤에서 기지개 켜기', '하교 때 한 층 계단으로 오르기'] }, prompt: '새 방법을 쉬운 방법과 어려운 방법으로 나누어요.', target: { sort: { '쉬워요': ['점심 먹고 운동장 한 바퀴 걷기', '교실 뒤에서 기지개 켜기'], '어려워요': ['매 쉬는 시간마다 줄넘기 백 번', '하교 때 한 층 계단으로 오르기'] } }, difficulty: 0.25 },
              { type: 'choice', prompt: '방법을 고를 때 가장 먼저 따져 볼 것은 무엇인가요?', options: ['친구보다 많이 할 수 있는가', '안전하고 내 하루에 넣을 수 있는가', '가장 힘든가'], answer: 1, difficulty: 0.15, explain: '안전하고 내 하루에 넣을 수 있어야 이어 갈 수 있어요.' },
              MOOD('내 방법을 해 본 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '내가 고른 방법',
          items: [
            { type: 'check', prompt: '고른 방법에 ✓ 하세요.', options: ['쉬는 시간 한 바퀴 걷기', '한 층 계단으로 오르기', '30분마다 일어나기', '물 마시러 걷기'] },
            { type: 'table', prompt: '쉬는 시간마다 해낸 횟수를 쓰세요.', columns: ['때', '1교시 뒤', '2교시 뒤', '3교시 뒤', '4교시 뒤'], cells: [['횟수', '', '', '', '']] },
            { type: 'choice', prompt: '오래 이어 가려면 어떤 방법이 좋을까요?', options: ['쉽고 안전한 방법', '가장 힘든 방법', '친구가 하는 방법'], answer: '쉽고 안전한 방법' },
            { type: 'short', prompt: '해 보니 어려웠던 점이나 좋았던 점을 쓰세요.' },
          ],
          easy: {
            note: '한 가지만 골라도 충분해요. 쉽게 할 수 있는 것으로 정해요.',
            items: [
              { type: 'choice', prompt: '쉬운 방법은?', options: ['복도 한 바퀴 걷기', '매 시간 줄넘기 백 번'], answer: '복도 한 바퀴 걷기' },
              { type: 'short', prompt: '내가 고른 방법을 쓰세요.' },
              { type: 'draw', prompt: '내 방법을 하는 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 맞는 칸에 놓으면 바로 알려 줘요. 기록 칸은 처음 값부터 한 칸씩 바꿔 적어요.',
          base: '카드를 모두 놓은 뒤 확인해 스스로 고쳐요.',
          challenge: '기록판의 시간 재기를 켜서 한 번에 걸린 시간도 재어 봐요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 가장 힘든 방법이 가장 좋다고 여긴다 → 오래 이어 갈 수 있는 쉬운 방법을 고르게 한다. ② 안전을 따지지 않고 고른다 → 안전한지를 먼저 묻는다. ③ 기록을 친구와 견준다 → 내 기록만 본다고 말한다. 실제 실천은 하루 동안 이루어지므로 활동지로 확인한다.',
      }),
      // ───────────────────────── 15 ─────────────────────────
      L(15, {
        title: '짝과 함께 약속하고 서로 확인하며 움직이기',
        objective: '앉은 시간을 줄이는 방법을 짝과 함께 실천하기로 약속을 정하고, 서로 확인한 횟수를 세어 적을 수 있다.',
        illustration: art('two children walking side by side in a school hallway, one holding a small paper checklist and the other giving a thumbs up', [
          { motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'cloud', x: 100, y: 50 }, { motif: 'hills', y: 208 },
          { motif: 'flower', x: 80, y: 214 }, { motif: 'tree', x: 420, y: 214, s: 0.8 },
          { motif: 'text', x: 240, y: 128, text: '같이 하면 더 쉬워요', size: 24 },
        ]),
        safety: [SPACE, LOOK, STAIR, OWN],
        stages: stages(
          {
            teacher: '"혼자 하는 것과 친구와 함께 하는 것, 어느 쪽이 더 오래 이어질까요?" 학생 경험을 듣고, 서로 확인해 주면 잊지 않고 힘이 난다고 말해 준다. "혼자 하면 되니까 친구와 함께 할 필요가 없다"는 생각이 나오면, 중간에 포기하고 싶었던 때를 물어 본다. 오늘은 짝과 약속을 정하고 서로 세어 준다고 알린다.',
            student: '짝과 함께 앉은 시간을 줄이기로 약속해 봐요. 서로 몇 번 했는지 세어 주어요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 짝과 약속 문장 만들기', minutes: 12, tool: 'story',
              task: '짝과 함께하는 약속 문장의 빈칸을 채우고, 약속을 지키는 차례를 놓아요. 내 약속은 활동지에 써서 짝과 바꿔 읽어요.',
              teacher: '"약속에는 언제, 무엇을, 누가 확인할지가 들어가야 해요." 확인하는 사람이 없으면 잊기 쉽다고 말한다. 짝을 정할 때 친한 친구만 고르는 학생에게는 누구와도 할 수 있다고 알려 준다.',
              levels: CARD,
              items: [
                { prompt: '민지와 준호의 약속 문장에 알맞은 카드를 넣어요.', toolOptions: { mode: 'fill', cards: ['쉬는 시간마다', '복도를 한 바퀴 걷기', '수업 시간 중에'], slots: [{ id: 'when', who: '민지', motif: 'sun', label: '우리는 ___ 해 보자.' }, { id: 'what', who: '준호', motif: 'house', label: '그래, ___ 하자.' }] }, target: { fill: { when: '쉬는 시간마다', what: '복도를 한 바퀴 걷기' } }, difficulty: 0.2 },
                { prompt: '서연과 도윤이 서로 확인하는 말을 빈칸에 넣어요.', toolOptions: { mode: 'fill', cards: ['오늘 몇 번 했어?', '나는 안 했는데 너는 해?', '내일은 같이 할래?'], slots: [{ id: 'ask', who: '서연', motif: 'star', label: '___' }, { id: 'next', who: '도윤', motif: 'flower', label: '___' }] }, target: { fill: { ask: '오늘 몇 번 했어?', next: '내일은 같이 할래?' } }, difficulty: 0.25 },
                { prompt: '짝과 한 약속을 지키는 차례대로 카드를 놓아요.', toolOptions: { mode: 'order', cards: ['오늘 해낸 횟수를 짝과 말하기', '짝과 하기로 한 방법을 정하기', '쉬는 시간에 함께 해 보기', '내일 할 일을 함께 정하기'] }, target: { order: ['짝과 하기로 한 방법을 정하기', '쉬는 시간에 함께 해 보기', '오늘 해낸 횟수를 짝과 말하기', '내일 할 일을 함께 정하기'] }, difficulty: 0.2,
                  conclude: '짝과 약속하고 서로 확인하면 잊지 않고 오래 이어 갈 수 있어요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 짝과 하고 서로 세어 주기', minutes: 14, tool: 'timer',
              task: '짝과 함께 약속한 방법을 해 보고 서로 몇 번 했는지 세어 적어요. 짝과 함께 한 것을 점검해요.',
              teacher: '"짝이 세어 준 횟수와 내가 센 횟수가 같은가요?" 서로 센 횟수가 달라도 괜찮고 같이 맞춰 본다. 짝의 횟수가 적다고 놀리는 학생에게는 내 몸에 맞는 만큼이라고 다시 말한다.',
              levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
              items: [
                { prompt: '함께하기 전에 안전을 점검하고 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['짝과 걷는 길이 비어 있어요', '뛰지 않고 걷기로 약속했어요', '계단이라면 한 칸씩 오르기로 했어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '짝과 함께 해낸 횟수를 서로 세어 내 칸과 짝 칸에 적어요.', toolOptions: { fields: [{ label: '내 횟수', unit: '번' }, { label: '짝 횟수', unit: '번' }, { label: '함께한 횟수', unit: '번' }] }, target: { records: true }, difficulty: 0.15 },
                { prompt: '짝과 함께한 것을 점검 목록에 표시해요.', target: { selfCheck: ['약속을 먼저 말했어요', '짝이 한 것을 세어 주었어요', '짝의 횟수와 내 횟수를 견주지 않았어요'] }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"짝과 함께 하니 혼자 할 때와 무엇이 달랐나요?" 서로 확인해 준 일을 말하게 한다. 출구 1번을 틀린 학생은 약속 문장을 소리 내어 읽어 보게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'story', options: { mode: 'fill', cards: ['점심시간에', '운동장 가장자리를 천천히 걷기', '학교 가는 길에'], slots: [{ id: 'when', who: '지아', motif: 'sun', label: '우리는 ___ 해 보자.' }, { id: 'what', who: '도윤', motif: 'tree', label: '그래, ___ 하자.' }] }, prompt: '지아와 도윤의 약속 문장에 알맞은 카드를 넣어요.', target: { fill: { when: '점심시간에', what: '운동장 가장자리를 천천히 걷기' } }, difficulty: 0.2 },
              { type: 'choice', prompt: '짝과 함께 하면 좋은 점은 무엇인가요?', options: ['서로 확인해 주어 잊지 않아요', '친구보다 더 많이 해야 해요', '혼자보다 힘들어요'], answer: 0, difficulty: 0.1, explain: '서로 확인해 주면 잊지 않고 힘이 나요.' },
              MOOD('짝과 함께 해 본 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '짝과 함께하는 약속',
          items: [
            { type: 'table', prompt: '짝과 한 약속을 쓰세요.', columns: ['언제', '무엇을', '누가 확인할지'], rows: 2 },
            { type: 'table', prompt: '짝과 함께 해낸 횟수를 쓰세요.', columns: ['내 횟수', '짝 횟수', '함께한 횟수'], rows: 1 },
            { type: 'choice', prompt: '짝에게 하면 좋은 말에 ○ 하세요.', options: ['오늘 몇 번 했어?', '넌 왜 이것밖에 못 해?', '나보다 못하네'], answer: '오늘 몇 번 했어?' },
            { type: 'short', prompt: '짝과 함께 하고 느낀 점을 쓰세요.' },
          ],
          easy: {
            note: '서로 응원하는 말을 하면 더 힘이 나요.',
            items: [
              { type: 'choice', prompt: '짝이 한 횟수를 알려 주면?', options: ['고마워, 나도 해 볼게', '왜 이것밖에 안 했어'], answer: '고마워, 나도 해 볼게' },
              { type: 'short', prompt: '짝과 할 일을 하나 쓰세요.' },
              { type: 'draw', prompt: '짝과 함께 걷는 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 맞는 칸에 놓으면 바로 알려 주고, 기록 칸은 처음 값부터 한 칸씩 바꿔 적어요.',
          base: '카드를 모두 놓은 뒤 확인해 스스로 고쳐요.',
          challenge: '기록판의 시간 재기를 켜서 함께 걸린 시간도 재어 봐요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 혼자 하면 되니 친구가 필요 없다고 여긴다 → 서로 확인해 준 경험을 말하게 한다. ② 짝의 횟수가 적다고 놀린다 → 내 몸에 맞는 만큼이라고 말해 준다. ③ 약속에 확인할 사람이 빠진다 → 누가 확인할지를 문장에 넣게 한다. 짝은 교사가 정해 줄 수도 있다.',
      }),
      // ───────────────────────── 16 ─────────────────────────
      L(16, {
        title: '계단·복도·교실에서 안전하게 움직이는 방법 가리기',
        objective: '앉은 시간을 줄이려 몸을 움직일 때 계단·복도·교실에서 안전한 방법과 위험한 방법을 가려 말할 수 있다.',
        illustration: art('a school staircase and hallway with small paper arrows and a handrail, a child walking carefully one step at a time', [
          { motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'cloud', x: 100, y: 50 }, { motif: 'hills', y: 208 },
          { motif: 'house', x: 90, y: 214, s: 0.9 }, { motif: 'tree', x: 420, y: 214 },
          { motif: 'text', x: 240, y: 128, text: '천천히, 난간 잡고!', size: 24 },
        ]),
        safety: [STAIR, LOOK, FLOOR, STOP],
        stages: stages(
          {
            teacher: '"계단으로 오르면 운동이 되지만, 어떻게 오르느냐도 중요해요. 계단에서 어떤 일이 위험할까요?" 뛰기·두 칸씩 뛰기·친구 밀기·화면 보며 걷기가 나온다. 몸을 움직이는 방법을 고를 때 안전한지를 먼저 따져야 한다고 짚는다. 오늘은 안전한 방법과 위험한 방법을 가려 본다고 알린다.',
            student: '몸을 움직이는 방법 가운데 안전한 것과 위험한 것은 무엇일까요? 가려 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 이럴 땐 어떻게 움직일까?', minutes: 14, tool: 'emotion',
              task: '학교에서 몸을 움직일 때 생길 수 있는 상황이에요. 어떻게 할지 고르고, 까닭을 짝에게 말해요.',
              teacher: '"빨리 가면 앉은 시간이 더 줄어들까요?" 속도가 아니라 안전하게 움직이는 것이 중요하다고 짚는다. 바쁘다는 이유로 뛰는 보기를 고른 학생에게는 다쳤을 때 오히려 움직이지 못하게 된다고 말해 준다.',
              levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '쉬는 시간이 얼마 안 남아 계단을 내려가야 해요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '쉬는 시간이 얼마 안 남았는데 계단을 내려가야 해요.', choices: [{ id: 'run', text: '두 칸씩 뛰어 내려가요', result: '발을 헛디뎌 넘어질 뻔했어요.', mood: '놀람', why: '계단에서 뛰면 크게 다칠 수 있어요.' }, { id: 'rail', text: '난간을 잡고 한 칸씩 걸어 내려가요', result: '조금 늦었지만 안전하게 도착했어요.', mood: '편안함' }, { id: 'push', text: '앞 친구를 살짝 밀어요', result: '친구가 넘어질 뻔했어요.', mood: '미안함', why: '계단에서 밀면 매우 위험해요.' }] }, target: { choice: 'rail' }, difficulty: 0.15 },
                { prompt: '복도에서 친구가 달려와요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '복도에서 친구가 달려오고 있어요.', choices: [{ id: 'stop', text: '벽 쪽으로 붙어 멈추고 "복도에서는 걸어 줘"라고 말해요', result: '친구가 멈추고 사과했어요.', mood: '편안함' }, { id: 'race', text: '같이 달려요', result: '코너에서 부딪혔어요.', mood: '놀람', why: '복도 모퉁이에서는 앞이 안 보여요.' }, { id: 'yell', text: '크게 소리 지르며 쫓아가요', result: '다른 반 수업을 방해했어요.', mood: '미안함', why: '큰 소리는 수업을 방해해요.' }] }, target: { choice: 'stop' }, difficulty: 0.2 },
                { prompt: '교실에서 몸을 풀고 싶어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '교실 뒤에서 몸을 풀고 싶어요. 책상과 가방이 놓여 있어요.', choices: [{ id: 'jump', text: '책상 사이에서 높이 뛰어요', result: '책상 모서리에 부딪힐 뻔했어요.', mood: '놀람', why: '책상 사이는 좁아서 위험해요.' }, { id: 'space', text: '빈 곳을 확인하고 제자리에서 스트레칭을 해요', result: '아무도 다치지 않고 몸이 풀렸어요.', mood: '편안함' }, { id: 'ball', text: '교실에서 공을 던져 봐요', result: '친구의 물건이 떨어졌어요.', mood: '미안함', why: '교실에서는 공을 던지지 않아요.' }] }, target: { choice: 'space' }, difficulty: 0.2 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 안전한 방법과 위험한 방법 가리기', minutes: 12, tool: 'mindmap',
              task: '장소마다 안전한 방법과 위험한 방법을 가르고, 안전 약속을 지키는 차례를 놓아요.',
              teacher: '"안전한 방법인지 어떻게 알 수 있을까요?" 부딪히거나 넘어질 수 있는지, 다른 사람에게 불편을 주는지를 기준으로 삼게 한다. 위험한 방법도 괜찮다고 생각하는 학생에게는 지난 실수를 물어 본다.',
              levels: CARD,
              items: [
                { prompt: '움직이는 방법을 안전해요와 위험해요 두 칸으로 나누어요.', toolOptions: { topic: '안전한가요?', slots: ['안전해요', '위험해요'], cards: ['난간을 잡고 계단을 한 칸씩 오르기', '화면을 보며 계단 오르기', '복도 오른쪽으로 걷기', '복도에서 달리기'] }, target: { sort: { '안전해요': ['난간을 잡고 계단을 한 칸씩 오르기', '복도 오른쪽으로 걷기'], '위험해요': ['화면을 보며 계단 오르기', '복도에서 달리기'] } }, difficulty: 0.2 },
                { prompt: '장소와 알맞은 안전 약속을 이어요.', toolOptions: { mode: 'match', topic: '장소와 약속', slots: [{ id: 'stair', label: '계단' }, { id: 'hall', label: '복도' }, { id: 'room', label: '교실' }], cards: ['난간을 잡고 한 칸씩 걷기', '오른쪽 벽 쪽으로 걷기', '빈 곳을 확인하고 제자리에서 움직이기'] }, target: { match: { stair: '난간을 잡고 한 칸씩 걷기', hall: '오른쪽 벽 쪽으로 걷기', room: '빈 곳을 확인하고 제자리에서 움직이기' } }, difficulty: 0.2 },
                { prompt: '계단을 안전하게 오르는 차례대로 카드를 놓아요.', toolOptions: { mode: 'order', cards: ['난간을 한 손으로 잡아요', '앞 사람과 거리를 두어요', '한 칸씩 천천히 올라요', '계단 앞에서 멈춰 바닥을 살펴요'] }, target: { order: ['계단 앞에서 멈춰 바닥을 살펴요', '난간을 한 손으로 잡아요', '앞 사람과 거리를 두어요', '한 칸씩 천천히 올라요'] }, difficulty: 0.25,
                  conclude: '빨리 가는 것보다 안전하게 가는 것이 먼저예요. 다치면 오히려 움직일 수 없어요.' },
              ],
            },
          ],
          {
            teacher: '"오늘 알게 된 안전 약속 한 가지는 무엇인가요? 내일 어디서 지킬 건가요?" 한 사람씩 말하게 한다. 출구 1번을 틀린 학생은 어디가 위험한지 손가락으로 짚어 말하게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { topic: '안전한가요?', slots: ['안전해요', '위험해요'], cards: ['신발 끈을 묶고 걷기', '젖은 계단을 뛰어 내려가기', '모퉁이에서 속도 줄이기', '친구를 밀며 가기'] }, prompt: '새 방법을 안전한 것과 위험한 것으로 나누어요.', target: { sort: { '안전해요': ['신발 끈을 묶고 걷기', '모퉁이에서 속도 줄이기'], '위험해요': ['젖은 계단을 뛰어 내려가기', '친구를 밀며 가기'] } }, difficulty: 0.2 },
              { type: 'choice', prompt: '계단에서 알맞은 행동은 무엇인가요?', options: ['난간을 잡고 한 칸씩 걷는다', '친구와 뛰어 내려간다', '화면을 보며 오른다'], answer: 0, difficulty: 0.1, explain: '계단에서는 난간을 잡고 한 칸씩 걷는 것이 안전해요.' },
              MOOD('안전하게 움직이는 법을 알아본 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '안전하게 움직이기',
          items: [
            { type: 'table', prompt: '장소마다 안전 약속을 쓰세요.', columns: ['장소', '안전 약속'], cells: [['계단', ''], ['복도', ''], ['교실', '']] },
            { type: 'choice', prompt: '계단에서 안전한 행동에 ○ 하세요.', options: ['두 칸씩 뛰어 내려가요', '난간을 잡고 한 칸씩 걸어요', '화면을 보며 걸어요'], answer: '난간을 잡고 한 칸씩 걸어요' },
            { type: 'check', prompt: '내가 지킬 안전 약속에 ✓ 하세요.', options: ['계단에서 뛰지 않아요', '복도에서 걸어요', '교실에서 공을 던지지 않아요'] },
            { type: 'short', prompt: '내가 다칠 뻔했던 순간과 앞으로 지킬 약속을 쓰세요.' },
          ],
          easy: {
            note: '안전한 방법은 부딪히거나 넘어지지 않는 방법이에요.',
            items: [
              { type: 'choice', prompt: '복도에서는?', options: ['걸어요', '달려요'], answer: '걸어요' },
              { type: 'short', prompt: '계단에서 지킬 약속을 쓰세요.' },
              { type: 'draw', prompt: '계단을 안전하게 걷는 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '상황 문항은 보기가 두 개씩이고, 카드를 맞는 칸에 놓으면 바로 알려 줘요.',
          base: '보기 세 개 가운데 고르고 카드를 모두 놓은 뒤 확인해요.',
          challenge: '확인을 누르기 전까지 선택의 결과가 보이지 않아 까닭을 먼저 말해 봐요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 빨리 가는 것이 더 운동이 된다고 여긴다 → 안전이 먼저라고 말한다. ② 복도에서 달리는 것이 괜찮다고 생각한다 → 모퉁이에서 앞이 안 보인다는 점을 짚는다. ③ 교실에서 몸을 풀 때 빈 곳 확인을 건너뛴다 → 빈 곳을 눈으로 확인하게 한다. 학교 안전 규칙을 먼저 따른다.',
      }),
      // ───────────────────────── 17 ─────────────────────────
      L(17, {
        title: '이어 갈까 바꿀까, 근거를 들어 정하기',
        objective: '하루 동안 해 본 방법의 기록을 근거로 이어 갈지 바꿀지 그만둘지 정하고, 까닭을 말할 수 있다.',
        illustration: art('a child standing at a three-way path sign with arrows labeled keep, change and stop, holding a paper record sheet', [
          { motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'cloud', x: 100, y: 50 }, { motif: 'hills', y: 208 },
          { motif: 'tree', x: 62, y: 212 }, { motif: 'flower', x: 420, y: 214 },
          { motif: 'text', x: 240, y: 128, text: '이어 갈까? 바꿀까?', size: 24 },
        ]),
        safety: [SPACE, OWN, STOP],
        stages: stages(
          {
            teacher: '"하루 해 보고 별로였으면 그만두는 게 맞을까요? 하루 만에 습관이 될까요?" 학생 생각을 듣고, 하루 결과만이 아니라 기록과 느낌을 모아 결정해야 한다고 알려 준다. 이어 갈지, 바꿀지, 그만둘지 세 길 가운데 "근거가 있는 길"을 고르는 것이 오늘의 활동이라고 말해 준다.',
            student: '내가 하루 동안 해 본 방법을 이어 갈지 바꿀지 근거를 들어 정해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 하루 기록 읽고 결정 근거 찾기', minutes: 13, tool: 'chart',
              task: '가상 친구의 하루 실천 기록 그래프를 읽고 근거로 삼을 수 있는 것을 찾아요. 내 기록은 활동지에 옮겨 같은 방법으로 읽어요.',
              teacher: '"하루 기록에서 이어 갈 근거는 무엇일까요?" 횟수가 많았던 때와 적었던 때를 짚으며 왜 달랐을지 묻는다. 횟수가 적으니 그만두겠다는 학생에게는 적었던 까닭을 먼저 찾아본다.',
              levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '도윤이 하루 동안 쉬는 시간마다 한 횟수를 표를 보고 막대그래프로 완성해요.', toolOptions: { type: 'bar', title: '도윤이 쉬는 시간마다 걸은 횟수(번)', unit: '번', xLabel: '때', yLabel: '횟수', data: [['1교시 뒤', 2], ['2교시 뒤', 3], ['점심 뒤', 1], ['4교시 뒤', 3]] }, target: { build: true }, levels: { easy: { toolOptions: { given: [0, 1] } } }, difficulty: 0.15 },
                { prompt: '도윤이 가장 적게 걸은 때를 그래프에서 골라요.', toolOptions: { type: 'bar', mode: 'read', title: '도윤이 쉬는 시간마다 걸은 횟수(번)', unit: '번', xLabel: '때', yLabel: '횟수', data: [['1교시 뒤', 2], ['2교시 뒤', 3], ['점심 뒤', 1], ['4교시 뒤', 3]], question: '가장 적게 걸은 때는?', choices: ['1교시 뒤', '2교시 뒤', '점심 뒤', '4교시 뒤'] }, target: { pick: 2 }, difficulty: 0.15 },
                { prompt: '도윤이 하루 동안 걸은 횟수는 모두 몇 번인지 그래프를 읽고 더해 써요.', toolOptions: { type: 'bar', mode: 'read', title: '도윤이 쉬는 시간마다 걸은 횟수(번)', unit: '번', xLabel: '때', yLabel: '횟수', data: [['1교시 뒤', 2], ['2교시 뒤', 3], ['점심 뒤', 1], ['4교시 뒤', 3]], question: '모두 몇 번 걸었나요?' }, target: { value: 9 }, levels: { challenge: { prompt: '도윤이 점심 뒤에도 2번 더 걸었다면 하루 걸은 횟수는 모두 몇 번이 되는지 써요.', toolOptions: { question: '점심 뒤에 2번 더 걸으면 모두 몇 번인가요?' }, target: { value: 11 } } }, difficulty: 0.2,
                  conclude: '기록은 이어 갈지 정하는 근거가 돼요. 적은 때는 까닭을 찾아봐요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 이어 갈까 바꿀까 정하기', minutes: 13, tool: 'mindmap',
              task: '근거와 알맞은 결정을 이어 보고, 결정을 말하는 문장의 차례를 놓고, 알맞은 근거만 골라요.',
              teacher: '"기록이 적었던 까닭이 방법 때문인지 시간 때문인지 따져 볼까요?" 방법이 맞지 않으면 바꾸고, 시간이 부족했다면 시간을 바꾼다는 식으로 근거와 결정을 잇게 한다. 하루 해 보고 싫다고 그만두는 학생에게는 일주일은 해 보자고 권한다.',
              levels: CARD,
              items: [
                { prompt: '근거와 알맞은 결정을 이어요.', toolOptions: { mode: 'match', topic: '근거와 결정', slots: [{ id: 'keep', label: '매번 걸었고 몸이 가벼웠어요' }, { id: 'change', label: '점심 뒤에는 시간이 없었어요' }, { id: 'stop', label: '계단에서 아픈 곳이 생겼어요' }], cards: ['이어 가요', '시간을 바꿔요', '선생님께 알리고 방법을 바꿔요'] }, target: { match: { keep: '이어 가요', change: '시간을 바꿔요', stop: '선생님께 알리고 방법을 바꿔요' } }, difficulty: 0.2 },
                { prompt: '이어 갈 때 알맞은 근거만 골라요.', toolOptions: { mode: 'pick', topic: '이어 갈 근거', cards: ['기록을 보니 하루에 아홉 번 했어요', '몸이 가벼워진 느낌이 들었어요', '친구가 하니까 그냥 할래요', '귀찮지만 어쩔 수 없어요'] }, target: { pick: ['기록을 보니 하루에 아홉 번 했어요', '몸이 가벼워진 느낌이 들었어요'] }, difficulty: 0.2 },
                { prompt: '결정을 말하는 문장을 차례대로 놓아요.', toolOptions: { mode: 'order', cards: ['그래서 이어 가기로 했어요', '하루에 아홉 번을 걸었어요', '내 결정은 이어 가는 거예요', '몸이 가벼워서 좋았어요'] }, target: { order: ['내 결정은 이어 가는 거예요', '하루에 아홉 번을 걸었어요', '몸이 가벼워서 좋았어요', '그래서 이어 가기로 했어요'] }, difficulty: 0.25 },
              ],
            },
          ],
          {
            teacher: '"오늘 정한 결정과 그 근거를 한 문장으로 말해 볼까요?" 근거 없이 "그냥"이라고 말하지 않게 한다. 출구 1번을 틀린 학생은 막대가 가장 낮은 곳을 다시 찾게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '지아가 쉬는 시간마다 걸은 횟수(번)', unit: '번', xLabel: '때', yLabel: '횟수', data: [['1교시 뒤', 1], ['2교시 뒤', 4], ['3교시 뒤', 2]], question: '가장 많이 걸은 때는?', choices: ['1교시 뒤', '2교시 뒤', '3교시 뒤'] }, prompt: '지아의 그래프를 보고 가장 많이 걸은 때를 골라요.', target: { pick: 1 }, difficulty: 0.15 },
              { type: 'choice', prompt: '이어 갈지 정할 때 가장 알맞은 근거는 무엇인가요?', options: ['내 기록과 몸의 느낌', '친구가 하니까', '귀찮아서'], answer: 0, difficulty: 0.15, explain: '기록과 느낌이 이어 갈지 정하는 근거예요.' },
              MOOD('이어 갈지 정해 본 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '이어 갈까 바꿀까',
          items: [
            { type: 'table', prompt: '하루 동안 해낸 횟수를 쓰세요.', columns: ['때', '1교시 뒤', '2교시 뒤', '3교시 뒤', '4교시 뒤'], cells: [['횟수', '', '', '', '']] },
            { type: 'check', prompt: '내 결정에 ✓ 하세요.', options: ['이어 가요', '시간을 바꿔요', '방법을 바꿔요', '선생님께 알려요'] },
            { type: 'short', prompt: '내 결정의 근거를 기록과 느낌으로 한 문장 쓰세요.' },
            { type: 'choice', prompt: '근거로 알맞은 것에 ○ 하세요.', options: ['내 기록과 몸의 느낌', '친구가 해서', '귀찮아서'], answer: '내 기록과 몸의 느낌' },
          ],
          easy: {
            note: '기록을 보고 내 몸의 느낌을 함께 떠올려요.',
            items: [
              { type: 'choice', prompt: '근거는?', options: ['내 기록', '귀찮아서'], answer: '내 기록' },
              { type: 'short', prompt: '이어 갈지 바꿀지 쓰세요.' },
              { type: 'draw', prompt: '내가 정한 결정을 그림으로 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '막대 위에 값이 보이고 막대 두 개가 미리 그려져 있어요. 카드를 맞는 칸에 놓으면 바로 알려 줘요.',
          base: '그래프를 스스로 그리고 읽어요.',
          challenge: '읽은 값이 맞힌 뒤에야 드러나고, 마지막 문항은 더 걸었을 때의 합을 구해요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 하루 해 보고 별로면 그만둔다 → 일주일은 해 보고 정하자고 권한다. ② 근거 없이 "그냥"이라고 정한다 → 기록 한 가지와 느낌 한 가지를 말하게 한다. ③ 아파서 그만두려는 경우를 구분하지 못한다 → 아픈 경우는 선생님께 알리고 방법을 바꾼다고 말한다. 그래프의 수는 설명용 예시다.',
      }),
      // ───────────────────────── 18 ─────────────────────────
      L(18, {
        title: '다음 주 달력에 이어 갈 운동 적어 붙이기',
        objective: '이어 가기로 한 운동을 다음 주 요일 칸에 언제 할지 적고, 하는 순서와 필요한 것을 점검할 수 있다.',
        illustration: art('a large paper calendar for next week pinned to a wall, with small stickers of sneakers and a jump rope on different days', [
          { motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'cloud', x: 100, y: 50 }, { motif: 'hills', y: 208 },
          { motif: 'star', x: 150, y: 118, s: 0.8 }, { motif: 'star', x: 250, y: 118, s: 0.8 }, { motif: 'star', x: 350, y: 118, s: 0.8 },
          { motif: 'text', x: 240, y: 190, text: '월 화 수 목 금', size: 24 },
        ]),
        safety: [SPACE, WARM, OWN],
        stages: stages(
          {
            teacher: '"이어 가기로 했는데 막상 날이 되면 잊어버릴 때가 있죠. 어떻게 하면 잊지 않을까요?" 눈에 보이는 곳에 달력을 붙이고 요일과 시간을 적어 두는 방법을 나눈다. "며칠 하다 그만두어도 습관은 저절로 남는다"는 생각이 나오면 남는 것은 눈에 보이는 약속이라는 점을 말해 준다.',
            student: '이어 갈 운동을 다음 주 달력에 적어 눈에 잘 보이는 곳에 붙여 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 요일 칸에 운동 놓기', minutes: 14, tool: 'timeline',
              task: '가상 친구의 계획 카드를 월~일 요일 칸에 알맞게 놓아요. 그다음 내 달력에 같은 방법으로 써요.',
              teacher: '"학원이 있는 날은 어떤 운동이 알맞을까요?" 하루 일과와 어울리게 놓아야 지킬 수 있다고 말한다. 일주일 내내 빽빽하게 채우려는 학생에게는 쉬는 날도 계획이라고 짚어 준다.',
              levels: CARD,
              items: [
                { prompt: '민지의 계획 카드를 월·수·금 요일 칸에 알맞게 놓아요.', toolOptions: { mode: 'match', axis: ['월요일', '금요일'], slots: [{ id: 'mon', label: '월요일' }, { id: 'wed', label: '수요일' }, { id: 'fri', label: '금요일' }], cards: ['학원 없는 날: 복도 걷기 10분', '학원 늦는 날: 쉬는 시간 스트레칭', '쉬는 날 앞: 운동장 놀이 20분'] }, target: { match: { mon: '학원 없는 날: 복도 걷기 10분', wed: '학원 늦는 날: 쉬는 시간 스트레칭', fri: '쉬는 날 앞: 운동장 놀이 20분' } }, difficulty: 0.2 },
                { prompt: '준호의 운동 카드를 화·목 요일 칸에 놓아요.', toolOptions: { mode: 'match', axis: ['화요일', '목요일'], slots: [{ id: 'tue', label: '화요일' }, { id: 'thu', label: '목요일' }], cards: ['비 예보: 집에서 균형 잡기', '맑은 날: 공원에서 걷기'] }, target: { match: { tue: '비 예보: 집에서 균형 잡기', thu: '맑은 날: 공원에서 걷기' } }, difficulty: 0.2 },
                { prompt: '서연의 일곱 날 계획에서 쉬는 날 카드를 놓을 토요일과 일요일 칸을 채워요.', toolOptions: { mode: 'match', axis: ['토요일', '일요일'], slots: [{ id: 'sat', label: '토요일' }, { id: 'sun', label: '일요일' }], cards: ['가족과 함께 걷기 30분', '푹 쉬며 가볍게 스트레칭'] }, target: { match: { sat: '가족과 함께 걷기 30분', sun: '푹 쉬며 가볍게 스트레칭' } }, difficulty: 0.25,
                  conclude: '요일과 하루 일과에 맞게 놓아야 지킬 수 있어요. 쉬는 날도 계획에 들어 있어요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 달력에 붙이기 전 점검하기', minutes: 12, tool: 'timer',
              task: '달력에 적은 운동의 차례와 필요한 것을 점검하고, 이어 갈 운동 시간을 타이머로 맞춰요.',
              teacher: '"달력에 적었다고 끝일까요?" 붙이는 곳과 알림 방법도 정해야 한다고 짚는다. 눈에 안 띄는 곳에 붙이는 학생에게는 하루에 몇 번 볼 수 있는지 묻는다.',
              levels: { easy: { workStep: 10, restStep: 10, showTotal: true }, base: { showTotal: true }, challenge: { showTotal: false } },
              items: [
                { prompt: '이어 갈 운동을 50초 하고 10초 쉬기를 3번 하도록 타이머를 맞춰요.', toolOptions: { plan: { work: 30, rest: 20, rounds: 2 } }, target: { plan: { work: 50, rest: 10, rounds: 3 } }, difficulty: 0.15 },
                { prompt: '달력에 붙이고 실천하는 차례대로 카드를 놓아요.', toolOptions: { cards: ['날이 되면 달력을 보고 운동하기', '운동을 마친 날 달력에 표시하기', '달력에 요일과 운동 쓰기', '눈에 잘 보이는 곳에 붙이기'] }, target: { order: ['달력에 요일과 운동 쓰기', '눈에 잘 보이는 곳에 붙이기', '날이 되면 달력을 보고 운동하기', '운동을 마친 날 달력에 표시하기'] }, levels: { easy: { state: { order: ['달력에 요일과 운동 쓰기', '눈에 잘 보이는 곳에 붙이기', '운동을 마친 날 달력에 표시하기', '날이 되면 달력을 보고 운동하기'] } } }, difficulty: 0.2 },
                { prompt: '달력을 점검 목록에 표시해요.', target: { selfCheck: ['요일과 운동 이름을 모두 적었어요', '쉬는 날도 정했어요', '눈에 잘 보이는 곳에 붙일 곳을 정했어요'] }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"달력을 어디에 붙이면 잊지 않을까요?" 책상 앞·냉장고·현관 같은 곳을 말하게 한다. 출구 1번을 틀린 학생은 날씨나 일과를 다시 읽고 어울리는 카드를 찾게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'timeline', options: { mode: 'match', axis: ['수요일', '토요일'], slots: [{ id: 'wed', label: '수요일' }, { id: 'sat', label: '토요일' }], cards: ['학원 일찍 끝나는 날: 동네 걷기', '시간이 많은 날: 가족과 공원 걷기'] }, prompt: '도윤의 계획 카드를 알맞은 요일 칸에 놓아요.', target: { match: { wed: '학원 일찍 끝나는 날: 동네 걷기', sat: '시간이 많은 날: 가족과 공원 걷기' } }, difficulty: 0.25 },
              { type: 'choice', prompt: '달력을 붙일 때 가장 알맞은 곳은 어디인가요?', options: ['서랍 깊은 곳', '눈에 잘 보이는 곳', '가방 속'], answer: 1, difficulty: 0.1, explain: '눈에 잘 보여야 잊지 않아요.' },
              MOOD('달력에 운동을 적어 본 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '다음 주 운동 달력',
          items: [
            { type: 'table', prompt: '다음 주 달력에 이어 갈 운동을 쓰세요.', columns: ['월', '화', '수', '목', '금', '토', '일'], rows: 2 },
            { type: 'check', prompt: '달력에 쓴 것에 ✓ 하세요.', options: ['요일', '운동 이름', '시간', '쉬는 날'] },
            { type: 'choice', prompt: '달력을 붙이기에 알맞은 곳에 ○ 하세요.', options: ['눈에 잘 보이는 곳', '서랍 속', '가방 속'], answer: '눈에 잘 보이는 곳' },
            { type: 'short', prompt: '달력을 어디에 붙일지 쓰세요.' },
          ],
          easy: {
            note: '달력에는 요일과 운동 이름을 꼭 적어요.',
            items: [
              { type: 'choice', prompt: '달력에 꼭 필요한 것은?', options: ['요일과 운동 이름', '친구 점수'], answer: '요일과 운동 이름' },
              { type: 'short', prompt: '내가 할 운동 하나를 쓰세요.' },
              { type: 'draw', prompt: '내 달력에 붙일 스티커 그림을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 맞는 칸에 놓으면 바로 알려 주고, 타이머는 10초씩 바뀌며 전체 시간이 보여요.',
          base: '카드를 모두 놓은 뒤 확인하고 전체 시간을 화면에서 확인해요.',
          challenge: '전체 시간이 보이지 않아 스스로 셈해 맞춰요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 며칠 하다 그만두어도 습관은 남는다고 여긴다 → 눈에 보이는 달력과 표시로 잇는다. ② 일곱 날을 모두 채우려 한다 → 쉬는 날도 계획이라고 말한다. ③ 하루 일과와 맞지 않는 날에 운동을 넣는다 → 학원·숙제 시간을 먼저 보게 한다. 학생마다 달력 내용이 달라 교사가 읽고 확인한다.',
      }),
      // ───────────────────────── 19 ─────────────────────────
      L(19, {
        title: '이어 가기를 방해하는 일 만났을 때 해결하기',
        objective: '운동 습관을 이어 가는 데 방해가 되는 일을 찾고, 방해마다 알맞은 해결 방법을 골라 말할 수 있다.',
        illustration: art('a child on a path facing a small paper hill labeled tired, with a friend extending a hand and a shining star at the top of the hill', [
          { motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'mountain', x: 250, y: 190 }, { motif: 'cloud', x: 100, y: 50 }, { motif: 'hills', y: 214 },
          { motif: 'star', x: 250, y: 88, s: 0.9 },
          { motif: 'text', x: 240, y: 130, text: '함께 넘어요', size: 24 },
        ]),
        safety: [SPACE, STOP, OWN],
        stages: stages(
          {
            teacher: '"계획대로 하려는데 방해하는 일이 생겨 본 적이 있나요?" 숙제·피곤함·친구의 놀자는 말·날씨가 나온다. 방해를 만나는 것은 실패가 아니라 누구에게나 생기는 일이라고 말해 준다. 오늘은 방해마다 어울리는 해결 방법을 골라 본다고 알린다.',
            student: '운동을 이어 가려는데 방해하는 일이 생기면 어떻게 할까요? 해결 방법을 찾아봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 방해하는 일과 해결 방법 잇기', minutes: 13, tool: 'mindmap',
              task: '이어 가기를 방해하는 일과 해결 방법을 이어 보고, 알맞은 해결 방법만 골라요.',
              teacher: '"방해하는 일이 생겼을 때 그만두는 것 말고 어떤 방법이 있을까요?" 크게 바꾸지 않고 시간이나 방법을 조금만 바꾸는 쪽을 말하게 한다. "의지가 약해서 그래"라고 말하는 학생에게는 의지가 아니라 방법이 맞지 않았을 수 있다고 알려 준다.',
              levels: CARD,
              items: [
                { prompt: '방해하는 일과 알맞은 해결 방법을 이어요.', toolOptions: { mode: 'match', topic: '방해와 해결', slots: [{ id: 'tired', label: '학교 끝나고 너무 피곤해요' }, { id: 'play', label: '친구가 게임하자고 불러요' }, { id: 'forget', label: '운동할 시간을 자꾸 잊어요' }], cards: ['아침에 5분만 가볍게 걷기로 바꿔요', '10분만 운동하고 놀자고 말해요', '책상 앞에 알림 쪽지를 붙여요'] }, target: { match: { tired: '아침에 5분만 가볍게 걷기로 바꿔요', play: '10분만 운동하고 놀자고 말해요', forget: '책상 앞에 알림 쪽지를 붙여요' } }, difficulty: 0.2 },
                { prompt: '방해를 만났을 때 알맞은 말만 골라요.', toolOptions: { mode: 'pick', topic: '알맞은 말', cards: ['오늘은 5분만 하고 내일 더 해 볼게', '나는 의지가 약해서 안 돼', '방해가 있으면 시간을 바꿔 볼까', '다 소용없으니 그만할래'] }, target: { pick: ['오늘은 5분만 하고 내일 더 해 볼게', '방해가 있으면 시간을 바꿔 볼까'] }, difficulty: 0.2 },
                { prompt: '방해하는 일을 내 마음과 둘레 두 칸으로 나누어요.', toolOptions: { topic: '방해의 갈래', slots: ['내 마음에서', '둘레에서'], cards: ['귀찮은 마음', '친구의 놀자는 말', '비가 오는 날씨', '지치는 느낌'] }, target: { sort: { '내 마음에서': ['귀찮은 마음', '지치는 느낌'], '둘레에서': ['친구의 놀자는 말', '비가 오는 날씨'] } }, difficulty: 0.25,
                  conclude: '방해는 누구에게나 생겨요. 방법을 조금 바꾸면 이어 갈 수 있어요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 방해를 만났을 때 어떻게 할까?', minutes: 13, tool: 'emotion',
              task: '이어 가기를 방해하는 상황이에요. 어떻게 할지 고르고, 고른 방법을 짝에게 말로 해 봐요.',
              teacher: '"한 번 못했다고 모두 끝난 걸까요?" 하루 거른 날도 다음 날 다시 이으면 된다는 것을 짚는다. 그만두는 보기를 고른 학생에게는 작은 목표로 바꾸는 방법을 함께 찾아 준다.',
              levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '이틀 연속 운동을 못 했어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '시험 때문에 이틀 연속 운동을 못 했어요.', choices: [{ id: 'quit', text: '"이제 틀렸어" 하고 그만둬요', result: '계획이 사라졌어요.', mood: '속상함', why: '이틀 거른 것으로 끝나지 않아요.' }, { id: 'resume', text: '오늘은 5분만 하고 이어 가요', result: '다시 이어 가서 뿌듯했어요.', mood: '뿌듯함' }, { id: 'double', text: '밀린 것을 오늘 한꺼번에 해요', result: '몸이 힘들고 아팠어요.', mood: '걱정', why: '한꺼번에 하면 다칠 수 있어요.' }] }, target: { choice: 'resume' }, difficulty: 0.15 },
                { prompt: '친구가 "운동은 지루해, 나랑만 놀자"고 해요. 어떻게 말할까요?', toolOptions: { mode: 'branch', situation: '친구가 "운동은 지루해, 나랑만 놀자"고 해요.', choices: [{ id: 'both', text: '"10분 운동하고 같이 놀자"라고 말해요', result: '친구도 같이 하고 신나게 놀았어요.', mood: '신남' }, { id: 'angry', text: '"너 때문에 못 하잖아" 하고 화내요', result: '친구와 사이가 나빠졌어요.', mood: '화남', why: '친구 탓이 아니에요.' }, { id: 'give', text: '운동을 안 하고 같이 놀아요', result: '나중에 후회했어요.', mood: '속상함', why: '짧게라도 하고 노는 방법이 있어요.' }] }, target: { choice: 'both' }, difficulty: 0.2 },
                { prompt: '비가 많이 와서 밖에서 못 해요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '비가 많이 와서 밖에서 운동할 수 없어요.', choices: [{ id: 'inhome', text: '집 안에서 할 수 있는 스트레칭으로 바꿔요', result: '비 오는 날에도 계획을 지켰어요.', mood: '뿌듯함' }, { id: 'skip', text: '이번 주는 아예 건너뛰어요', result: '몸이 찌뿌둥하고 계획이 흐지부지됐어요.', mood: '속상함', why: '방법을 바꾸면 이어 갈 수 있어요.' }, { id: 'rain', text: '우산도 없이 나가서 달려요', result: '옷이 젖고 몸이 떨렸어요.', mood: '걱정', why: '비 오는 날 밖에서 무리하면 위험해요.' }] }, target: { choice: 'inhome' }, difficulty: 0.2 },
              ],
            },
          ],
          {
            teacher: '"방해가 생겼을 때 오늘 알게 된 방법 가운데 가장 쉬운 것은 무엇인가요?" 한 가지씩 말하게 한다. 출구 1번을 틀린 학생은 방해가 마음에서 오는지 둘레에서 오는지 다시 나누어 말하게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '방해와 해결', slots: [{ id: 'busy', label: '숙제가 많아서 시간이 없어요' }, { id: 'cold', label: '날씨가 추워서 나가기 싫어요' }], cards: ['쉬는 시간에 5분씩 나누어 해요', '실내에서 몸을 충분히 풀고 해요'] }, prompt: '새 방해와 알맞은 해결 방법을 이어요.', target: { match: { busy: '쉬는 시간에 5분씩 나누어 해요', cold: '실내에서 몸을 충분히 풀고 해요' } }, difficulty: 0.2 },
              { type: 'choice', prompt: '이틀 운동을 못 했을 때 가장 알맞은 생각은 무엇인가요?', options: ['이제 끝났으니 그만두자', '오늘 5분이라도 다시 시작하자', '밀린 것을 오늘 모두 하자'], answer: 1, difficulty: 0.15, explain: '작게라도 다시 시작하면 이어 갈 수 있어요.' },
              MOOD('방해를 이겨 낼 방법을 찾아본 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '방해를 만났을 때',
          items: [
            { type: 'table', prompt: '방해하는 일과 해결 방법을 쓰세요.', columns: ['방해하는 일', '해결 방법'], rows: 3 },
            { type: 'choice', prompt: '방해를 만났을 때 알맞은 말에 ○ 하세요.', options: ['5분만 해 볼게', '나는 의지가 약해', '이제 소용없어'], answer: '5분만 해 볼게' },
            { type: 'check', prompt: '내가 쓸 수 있는 방법에 ✓ 하세요.', options: ['시간 바꾸기', '운동 시간 줄이기', '알림 쪽지 붙이기', '친구에게 말하기'] },
            { type: 'short', prompt: '내가 자주 만나는 방해 하나와 해결 방법을 쓰세요.' },
          ],
          easy: {
            note: '방해는 누구에게나 생겨요. 5분만 해도 이어 가는 거예요.',
            items: [
              { type: 'choice', prompt: '운동을 못 한 날 다음에는?', options: ['5분이라도 다시 해요', '그만둬요'], answer: '5분이라도 다시 해요' },
              { type: 'short', prompt: '내가 만나는 방해 하나를 쓰세요.' },
              { type: 'draw', prompt: '방해를 이겨 낸 내 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '상황 문항은 보기가 두 개씩이고, 카드를 맞는 칸에 놓으면 바로 알려 줘요.',
          base: '보기 세 개 가운데 고르고 카드를 모두 놓은 뒤 확인해요.',
          challenge: '확인을 누르기 전까지 선택의 결과가 보이지 않아 까닭을 먼저 말해 봐요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 의지가 약해서 못 한다고 여긴다 → 방법이 맞지 않았을 수 있다고 말한다. ② 이틀 거르면 끝이라고 여긴다 → 5분이라도 다시 잇는다. ③ 밀린 것을 한꺼번에 하려 한다 → 몸에 무리라고 알려 준다. 상황 선택은 짝과 말로 재현해 본다.',
      }),
      // ───────────────────────── 20 ─────────────────────────
      L(20, {
        title: '잠·밥·손 씻기 가운데 요즘 가장 어려운 것 고르기',
        objective: '잠자기·밥 먹기·손 씻기 가운데 자기에게 가장 어려운 것을 고르고, 그 습관이 몸과 마음에 주는 영향을 말할 수 있다.',
        illustration: art('three paper vignettes side by side showing a child sleeping under a moon blanket, a child eating a bowl of rice with vegetables, and a child washing hands with soap bubbles', [
          { motif: 'moon', x: 90, y: 56, s: 0.8 }, { motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'hills', y: 210 },
          { motif: 'cloud', x: 250, y: 50 }, { motif: 'house', x: 250, y: 214, s: 0.8 },
          { motif: 'text', x: 240, y: 128, text: '잠 · 밥 · 손 씻기', size: 26 },
        ]),
        safety: [SPACE, FLOOR, STOP],
        stages: stages(
          {
            teacher: '"잠자기, 밥 먹기, 손 씻기 가운데 요즘 가장 잘 안 되는 것은 무엇인가요? 손으로 1, 2, 3을 들어 보세요." 학생들의 손가락을 보고 몇 명이 어느 것을 골랐는지 세어 본다. "그 습관은 몸에만 영향을 줄까요, 마음이나 친구 사이에도 영향을 줄까요?"라고 물어, 하나가 여러 곳에 이어진다는 것을 짚는다. 나쁜 점수가 아니라 알아보는 시간이라고 말해 둔다.',
            student: '잠자기, 밥 먹기, 손 씻기 가운데 요즘 가장 어려운 것은 무엇일까요? 하나를 골라 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 습관이 닿는 곳 나누어 보기', minutes: 13, tool: 'mindmap',
              task: '습관이 몸·마음·친구 사이 가운데 어디에 영향을 주는지 나누어 보고, 알맞은 말을 골라요.',
              teacher: '"잠을 못 자면 몸만 힘들까요?" 잠이 모자라면 몸이 피곤하고 짜증이 늘고 친구와 부딪힐 수 있다는 식으로 하나가 여러 곳에 닿는다고 짚는다. 습관이 몸에만 영향을 준다고 말하는 학생에게는 마음이나 친구 사이의 경험을 물어 본다.',
              levels: CARD,
              items: [
                { prompt: '습관이 줄 수 있는 영향을 몸·마음·친구 사이 세 칸으로 나누어요.', toolOptions: { topic: '습관의 영향', slots: ['몸', '마음', '친구 사이'], cards: ['아침에 졸리고 피곤해요', '작은 일에도 짜증이 나요', '친구에게 짜증을 내서 다퉈요', '배가 고파서 힘이 없어요'] }, target: { sort: { '몸': ['아침에 졸리고 피곤해요', '배가 고파서 힘이 없어요'], '마음': ['작은 일에도 짜증이 나요'], '친구 사이': ['친구에게 짜증을 내서 다퉈요'] } }, difficulty: 0.25 },
                { prompt: '습관과 안 지켰을 때 일어날 수 있는 일을 이어요.', toolOptions: { mode: 'match', topic: '습관과 영향', slots: [{ id: 'sleep', label: '늦게 자요' }, { id: 'meal', label: '아침을 거르고 가요' }, { id: 'wash', label: '손을 안 씻고 먹어요' }], cards: ['수업 시간에 졸려요', '배가 고파 집중이 안 돼요', '세균이 입으로 들어갈 수 있어요'] }, target: { match: { sleep: '수업 시간에 졸려요', meal: '배가 고파 집중이 안 돼요', wash: '세균이 입으로 들어갈 수 있어요' } }, difficulty: 0.2 },
                { prompt: '생활 습관에 대해 알맞은 말만 골라요.', toolOptions: { mode: 'pick', topic: '알맞은 말', cards: ['잠과 밥은 기분에도 영향을 줘요', '습관은 몸에만 영향을 줘요', '손 씻기는 친구의 건강도 지켜 줘요', '하루 안 해도 아무 영향이 없어요'] }, target: { pick: ['잠과 밥은 기분에도 영향을 줘요', '손 씻기는 친구의 건강도 지켜 줘요'] }, difficulty: 0.2,
                  conclude: '하나의 습관은 몸, 마음, 친구 사이에 모두 이어져요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 우리 반 습관 그래프로 읽기', minutes: 13, tool: 'chart',
              task: '우리 모둠이 고른 가장 어려운 습관을 막대그래프로 나타내고 읽어요. 내 선택은 활동지에 표시해요.',
              teacher: '"가장 높은 막대가 가장 큰 문제일까요?" 사람이 많이 고른 것이지 잘못이 많은 것이 아니라고 짚는다. 자기만 못 한다고 생각하던 학생이 많은 친구가 같은 것을 어려워한다는 것을 보며 안도하게 한다.',
              levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '우리 모둠이 가장 어려운 습관으로 고른 표를 보고 막대그래프를 완성해요.', toolOptions: { type: 'bar', title: '가장 어려운 습관(명)', unit: '명', xLabel: '습관', yLabel: '친구 수', data: [['일찍 자기', 5], ['아침 먹기', 2], ['손 씻기', 3]] }, target: { build: true }, levels: { easy: { toolOptions: { given: [0] } } }, difficulty: 0.15 },
                { prompt: '가장 많은 친구가 어려워하는 습관을 그래프에서 골라요.', toolOptions: { type: 'bar', mode: 'read', title: '가장 어려운 습관(명)', unit: '명', xLabel: '습관', yLabel: '친구 수', data: [['일찍 자기', 5], ['아침 먹기', 2], ['손 씻기', 3]], question: '가장 많은 습관은?', choices: ['일찍 자기', '아침 먹기', '손 씻기'] }, target: { pick: 0 }, difficulty: 0.15 },
                { prompt: '손 씻기와 아침 먹기를 어려워하는 친구는 모두 몇 명인지 써요.', toolOptions: { type: 'bar', mode: 'read', title: '가장 어려운 습관(명)', unit: '명', xLabel: '습관', yLabel: '친구 수', data: [['일찍 자기', 5], ['아침 먹기', 2], ['손 씻기', 3]], question: '손 씻기와 아침 먹기를 고른 친구는 모두 몇 명인가요?' }, target: { value: 5 }, levels: { challenge: { prompt: '일찍 자기를 어려워하는 친구는 나머지 두 습관을 합한 친구보다 몇 명 더 많은지 써요.', toolOptions: { question: '일찍 자기는 나머지 둘의 합보다 몇 명 더 많은가요?' }, target: { value: 0 } } }, difficulty: 0.2,
                  conclude: '많은 친구가 같은 것을 어려워해요. 어려운 것은 함께 방법을 찾을 수 있어요.' },
              ],
            },
          ],
          {
            teacher: '"오늘 고른 습관은 몸·마음·친구 사이 가운데 어디에 가장 크게 이어질까요?" 한두 명이 사례와 함께 말하게 한다. 출구 1번을 틀린 학생은 습관이 몸에만 영향을 준다고 여기지 않았는지 되묻는다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { topic: '습관의 영향', slots: ['몸', '마음', '친구 사이'], cards: ['눈이 뻑뻑하고 몸이 무거워요', '괜히 화가 나요', '친구가 말을 걸어도 대답하기 싫어요'] }, prompt: '새 카드를 몸·마음·친구 사이로 나누어요.', target: { sort: { '몸': ['눈이 뻑뻑하고 몸이 무거워요'], '마음': ['괜히 화가 나요'], '친구 사이': ['친구가 말을 걸어도 대답하기 싫어요'] } }, difficulty: 0.25 },
              { type: 'choice', prompt: '잠이 모자란 날 일어날 수 있는 일로 알맞은 것은 무엇인가요?', options: ['몸이 피곤하고 기분도 나빠질 수 있어요', '몸에만 영향이 있어요', '아무 영향이 없어요'], answer: 0, difficulty: 0.15, explain: '잠은 몸과 마음 모두에 영향을 줘요.' },
              MOOD('내게 어려운 습관을 찾아본 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '내게 어려운 생활 습관',
          items: [
            { type: 'check', prompt: '요즘 가장 어려운 습관 하나에 ✓ 하세요.', options: ['일찍 자기', '아침 먹기', '손 씻기'] },
            { type: 'table', prompt: '고른 습관이 영향을 주는 곳을 쓰세요.', columns: ['몸', '마음', '친구 사이'], rows: 2 },
            { type: 'choice', prompt: '알맞은 말에 ○ 하세요.', options: ['습관은 몸에만 영향을 줘요', '습관은 몸·마음·친구 사이에 이어져요', '습관은 아무 영향이 없어요'], answer: '습관은 몸·마음·친구 사이에 이어져요' },
            { type: 'short', prompt: '그 습관이 어려운 까닭을 한 문장으로 쓰세요.' },
          ],
          easy: {
            note: '어려운 것이 있어도 괜찮아요. 알아야 고칠 수 있어요.',
            items: [
              { type: 'choice', prompt: '잠이 모자라면?', options: ['몸도 마음도 힘들어요', '아무 일도 없어요'], answer: '몸도 마음도 힘들어요' },
              { type: 'short', prompt: '내게 가장 어려운 습관을 쓰세요.' },
              { type: 'draw', prompt: '잘 잔 날 아침의 내 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 맞는 칸에 놓으면 바로 알려 주고, 그래프 막대 한 개가 미리 그려져 있어요.',
          base: '그래프를 스스로 그리고 읽어요.',
          challenge: '읽은 값이 맞힌 뒤에야 드러나고, 마지막 문항은 두 값의 차이를 구해요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 생활 습관은 몸에만 영향을 준다고 여긴다 → 마음과 친구 사이의 경험을 묻는다. ② 어려운 습관이 있으면 잘못이라고 느낀다 → 알아보는 시간이라고 말한다. ③ 막대가 높은 것이 가장 큰 문제라고 여긴다 → 사람 수라고 말해 준다. 개인의 수면·식사 기록을 비교하거나 평가하지 않는다.',
      }),
      // ───────────────────────── 21 ─────────────────────────
      L(21, {
        title: '잠이 모자란 아침 이야기의 인과 따라가기',
        objective: '하나의 생활 습관이 몸·마음·친구 사이로 이어지는 이야기를 차례대로 놓고, 어디서 끊으면 좋을지 말할 수 있다.',
        illustration: art('a row of paper story panels showing a child staying up late, yawning in class, and feeling grumpy with a friend, with a dotted arrow linking them', [
          { motif: 'moon', x: 90, y: 56, s: 0.8 }, { motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'cloud', x: 250, y: 50 }, { motif: 'hills', y: 210 },
          { motif: 'star', x: 150, y: 120, s: 0.8 }, { motif: 'star', x: 250, y: 120, s: 0.8 }, { motif: 'star', x: 350, y: 120, s: 0.8 },
          { motif: 'text', x: 240, y: 192, text: '이어지는 하루', size: 24 },
        ]),
        safety: [SPACE, STOP, OWN],
        stages: stages(
          {
            teacher: '"밤에 늦게 자면 다음 날 무슨 일이 생길까요? 일어난 순서대로 말해 볼까요?" 아침에 일어나기 힘들고 → 학교에서 졸리고 → 기분이 나빠지고 → 친구와 부딪히는 식으로 이어지는 것을 칠판에 화살표로 그린다. "습관이 몸에만 영향을 준다고 했던 생각이 맞았을까요?"를 물어 본다. 오늘은 이어지는 이야기를 만들고 어디서 끊을지 찾는다고 알린다.',
            student: '하나의 습관이 몸과 마음, 친구 사이로 이어지는 이야기를 차례대로 놓아 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 이어지는 이야기 차례대로 놓기', minutes: 14, tool: 'story',
              task: '가상 친구의 이야기 장면을 일어난 차례대로 놓고, 빈칸에 알맞은 말을 넣어요.',
              teacher: '"어느 장면이 먼저일까요? 왜 그렇게 생각했나요?" 앞 장면이 뒤 장면의 까닭이 되도록 이어 말하게 한다. 친구와 다툰 일을 앞에 놓는 학생에게는 그 전에 몸 상태가 어땠는지 묻는다.',
              levels: CARD,
              items: [
                { prompt: '밤늦게까지 깨어 있던 날의 이야기를 일어난 차례대로 놓아요.', toolOptions: { cards: [{ id: 'late', text: '밤늦게까지 자지 않았어요', motif: 'moon' }, { id: 'yawn', text: '아침에 못 일어나고 수업 시간에 하품했어요', motif: 'sun' }, { id: 'cranky', text: '작은 일에도 짜증이 났어요', motif: 'cloud' }, { id: 'fight', text: '친구와 말다툼을 했어요', motif: 'star' }], slots: 4 }, target: { order: ['late', 'yawn', 'cranky', 'fight'] }, levels: { easy: { state: { at: { late: 0 } } } }, difficulty: 0.15 },
                { prompt: '아침을 거르고 학교에 간 날의 이야기를 처음·가운데·끝 차례로 놓아요.', toolOptions: { cards: [{ id: 'skip', text: '아침을 먹지 않았어요', motif: 'sun' }, { id: 'hungry', text: '3교시에 배가 고파 집중이 안 됐어요', motif: 'cloud' }, { id: 'snack', text: '쉬는 시간에 간식만 잔뜩 먹었어요', motif: 'leaf' }], slots: ['처음', '가운데', '끝'] }, target: { order: ['skip', 'hungry', 'snack'] }, levels: { easy: { state: { at: { skip: 0 } } } }, difficulty: 0.2 },
                { prompt: '손을 안 씻은 이야기에서 빈칸에 알맞은 말을 넣어요.', toolOptions: { mode: 'fill', cards: ['세균이 입으로 들어갈 수 있어', '손이 더러워서 그냥 먹어도 괜찮아', '친구에게도 옮길 수 있어'], slots: [{ id: 'a', who: '민지', motif: 'sun', label: '손을 안 씻고 먹으면 ___.' }, { id: 'b', who: '준호', motif: 'star', label: '아픈 몸으로 놀면 ___.' }] }, target: { fill: { a: '세균이 입으로 들어갈 수 있어', b: '친구에게도 옮길 수 있어' } }, difficulty: 0.2,
                  conclude: '앞의 일이 뒤의 일의 까닭이 되어요. 처음을 바꾸면 뒤도 달라져요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 어디서 끊으면 좋을까?', minutes: 12, tool: 'mindmap',
              task: '이어지는 이야기에서 끊을 곳과 끊는 방법을 이어 보고, 가장 먼저 바꿀 곳을 골라요.',
              teacher: '"이 이야기에서 가장 먼저 바꿀 곳은 어디일까요?" 마지막 다툼보다 처음의 늦은 잠을 바꾸는 쪽이 이야기 전체를 바꾼다고 짚는다. 결과(다툼)만 고치려는 학생에게는 까닭이 어디서 시작됐는지 되짚게 한다.',
              levels: CARD,
              items: [
                { prompt: '이야기의 장면과 끊는 방법을 이어요.', toolOptions: { mode: 'match', topic: '끊는 방법', slots: [{ id: 'late', label: '밤늦게 깨어 있어요' }, { id: 'hungry', label: '아침을 못 먹었어요' }, { id: 'fight', label: '짜증이 나서 다투려 해요' }], cards: ['잘 시간에 화면을 끄고 누워요', '주먹밥이나 과일이라도 먹고 가요', '숨을 크게 쉬고 잠깐 자리를 비워요'] }, target: { match: { late: '잘 시간에 화면을 끄고 누워요', hungry: '주먹밥이나 과일이라도 먹고 가요', fight: '숨을 크게 쉬고 잠깐 자리를 비워요' } }, difficulty: 0.25 },
                { prompt: '이야기 전체를 바꾸려면 가장 먼저 바꿀 것을 골라요.', toolOptions: { mode: 'pick', topic: '먼저 바꿀 것', cards: ['밤에 잠자는 시간을 바꿔요', '친구와의 다툼만 사과해요', '아침 하품을 참아요', '짜증을 숨겨요'] }, target: { pick: ['밤에 잠자는 시간을 바꿔요'] }, difficulty: 0.25 },
                { prompt: '이야기에서 알맞은 해결 말만 골라요.', toolOptions: { mode: 'pick', topic: '알맞은 해결', cards: ['오늘은 일찍 자서 내일 개운하게 일어날래', '어차피 졸릴 테니 계속 늦게 잘래', '손을 씻고 밥을 먹을래', '배고파도 그냥 참을래'] }, target: { pick: ['오늘은 일찍 자서 내일 개운하게 일어날래', '손을 씻고 밥을 먹을래'] }, difficulty: 0.2 },
              ],
            },
          ],
          {
            teacher: '"오늘 이야기에서 가장 먼저 바꿀 곳은 어디였나요? 왜 거기인가요?" 처음을 바꾸는 쪽이 가장 효과가 크다는 점을 말하게 한다. 출구 1번을 틀린 학생은 앞 장면이 뒤 장면의 까닭인지 소리 내어 이어 읽게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'story', options: { cards: [{ id: 'night', text: '밤에 화면을 오래 봐서 늦게 잤어요', motif: 'moon' }, { id: 'tired', text: '아침에 몸이 무겁고 피곤했어요', motif: 'sun' }, { id: 'class', text: '수업 시간에 집중하기 어려웠어요', motif: 'cloud' }], slots: ['처음', '가운데', '끝'] }, prompt: '이야기를 일어난 차례대로 놓아요.', target: { order: ['night', 'tired', 'class'] }, difficulty: 0.2 },
              { type: 'choice', prompt: '이어지는 이야기를 바꾸려면 어디를 바꾸는 것이 가장 효과적일까요?', options: ['가장 마지막 결과', '가장 처음 원인', '아무 데나'], answer: 1, difficulty: 0.2, explain: '처음을 바꾸면 뒤의 일도 함께 달라져요.' },
              MOOD('이어지는 이야기를 만들어 본 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '이어지는 하루',
          items: [
            { type: 'table', prompt: '이야기를 차례대로 번호 쓰세요.', columns: ['장면', '차례'], cells: [['친구와 말다툼을 했어요', ''], ['밤늦게까지 자지 않았어요', ''], ['작은 일에도 짜증이 났어요', ''], ['수업 시간에 하품했어요', '']], answer: '말다툼 4, 늦게 잠 1, 짜증 3, 하품 2' },
            { type: 'choice', prompt: '가장 먼저 바꿀 곳에 ○ 하세요.', options: ['친구와의 다툼', '밤에 자는 시간', '아침 하품'], answer: '밤에 자는 시간' },
            { type: 'short', prompt: '내 이야기에서 바꾸고 싶은 첫 장면을 쓰세요.' },
            { type: 'check', prompt: '나에게 도움이 되는 방법에 ✓ 하세요.', options: ['자기 전에 화면 끄기', '아침에 가볍게 먹기', '숨을 크게 쉬고 말하기'] },
          ],
          easy: {
            note: '이야기는 앞의 일이 뒤의 일로 이어져요.',
            items: [
              { type: 'choice', prompt: '가장 먼저 바꾸면 좋은 것은?', options: ['처음 원인', '마지막 결과'], answer: '처음 원인' },
              { type: 'short', prompt: '이어지는 이야기 한 줄을 써 보세요.' },
              { type: 'draw', prompt: '잘 자고 일어난 아침을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '장면 카드 한 장이 미리 놓여 있고, 카드를 맞는 칸에 놓으면 바로 알려 줘요.',
          base: '카드를 모두 놓은 뒤 확인해 스스로 고쳐요.',
          challenge: '맞고 틀림이 확인 뒤에야 보여 스스로 장면의 까닭을 먼저 말해 봐요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 습관은 몸에만 영향을 준다고 여긴다 → 장면이 마음과 친구 사이로 이어지는 것을 보게 한다. ② 결과만 고치려 한다 → 처음 원인을 찾게 한다. ③ 이야기를 지나치게 무섭게 만든다 → 일어날 수 있는 일을 가볍게 다룬다. 한 사람의 잠자는 모습을 놀리지 않도록 약속한다.',
      }),
      // ───────────────────────── 22 ─────────────────────────
      L(22, {
        title: '손 씻기 순서 익히고 밥 먹기 전 준비 점검하기',
        objective: '손 씻기의 올바른 순서를 차례대로 놓고, 밥 먹기 전 준비를 스스로 점검할 수 있다.',
        illustration: art('a child washing hands under a tap with soap bubbles, a paper clock showing thirty seconds, and a rice bowl waiting on a table', [
          { motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'cloud', x: 100, y: 50 }, { motif: 'hills', y: 208 },
          { motif: 'house', x: 90, y: 214, s: 0.9 }, { motif: 'wave', x: 330, y: 190 },
          { motif: 'text', x: 240, y: 128, text: '30초 손 씻기', size: 26 },
        ]),
        safety: ['바닥이 젖으면 닦거나 선생님께 알리고, 물이 있는 곳에서는 뛰지 않아요.', FLOOR, STOP],
        stages: stages(
          {
            teacher: '교사가 빛이 나는 가루(없으면 밀가루)를 손에 묻혀 보이고 물로만 씻은 뒤 어디에 남았는지 보여 준다. "물로만 슥 씻으면 다 깨끗해질까요?" 손등·손톱 밑·손가락 사이에 남는 것을 확인한다. 비누로 문질러 30초 정도 씻어야 한다고 알려 주고, 순서를 오늘 익힌다고 말한다.',
            student: '손은 어디를 어떻게 씻어야 깨끗해질까요? 순서대로 익혀 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 손 씻기 순서와 시간 맞추기', minutes: 14, tool: 'timer',
              task: '손 씻기 순서 카드를 차례대로 놓고, 30초 타이머로 시간을 맞춰 보아요. 직접 씻는 것은 화장실이나 교실 세면대에서 해요.',
              teacher: '"손바닥만 씻으면 되나요?" 손등·손가락 사이·엄지·손톱 밑·손목까지 순서를 말로 외우게 한다. 물 아끼려고 5초만에 끝내는 학생에게 "노래 한 소절이 30초쯤 돼요"라고 시간을 느끼게 한다.',
              levels: { easy: { workStep: 10, restStep: 10, showTotal: true }, base: { showTotal: true }, challenge: { showTotal: false } },
              items: [
                { prompt: '손 씻기 카드를 물로 적시는 것부터 말리는 것까지 차례대로 놓아요.', toolOptions: { cards: ['깨끗한 수건이나 바람으로 말려요', '비누를 묻혀 손바닥을 문질러요', '흐르는 물에 손을 적셔요', '손등과 손가락 사이를 문질러요', '흐르는 물에 헹궈요'] }, target: { order: ['흐르는 물에 손을 적셔요', '비누를 묻혀 손바닥을 문질러요', '손등과 손가락 사이를 문질러요', '흐르는 물에 헹궈요', '깨끗한 수건이나 바람으로 말려요'] }, levels: { easy: { state: { order: ['흐르는 물에 손을 적셔요', '비누를 묻혀 손바닥을 문질러요', '손등과 손가락 사이를 문질러요', '깨끗한 수건이나 바람으로 말려요', '흐르는 물에 헹궈요'] } } }, difficulty: 0.2 },
                { prompt: '비누로 문지르는 시간을 30초, 헹구는 시간을 10초로 한 번 하도록 타이머를 맞춰요.', toolOptions: { plan: { work: 20, rest: 20, rounds: 2 } }, target: { plan: { work: 30, rest: 10, rounds: 1 } }, difficulty: 0.2 },
                { prompt: '손을 씻은 뒤 내가 한 것을 점검 목록에 표시해요.', target: { selfCheck: ['손등과 손가락 사이도 문질렀어요', '손톱 밑도 문질렀어요', '30초쯤 씻었어요', '깨끗한 수건으로 말렸어요'] }, difficulty: 0.1 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 밥 먹기 전 준비 점검하기', minutes: 12, tool: 'kitchen',
              task: '밥을 먹기 전에 하면 좋은 일만 골라 점검해요. 고른 일을 직접 해 본 뒤 짝에게 말해요.',
              teacher: '"밥 먹기 전에 꼭 하는 일은 무엇이지요?" 손 씻기, 자리 정리하기, 먹을 만큼 받기가 나온다. 모든 보기를 체크하는 학생에게는 하나씩 까닭을 묻는다. 알레르기가 있는 친구가 있으면 먹지 않는 음식은 말해야 한다고 한 번 짚는다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '밥 먹기 전에 해야 할 일만 골라 표시해요.', toolOptions: { mode: 'checklist', title: '밥 먹기 전에 할 일', items: [{ id: 'wash', text: '손을 비누로 씻어요' }, { id: 'tv', text: '영상을 틀어 놓아요' }, { id: 'seat', text: '바른 자세로 앉아요' }, { id: 'run', text: '식판을 들고 뛰어가요' }] }, target: { checklist: ['wash', 'seat'] }, difficulty: 0.15 },
                { prompt: '급식을 받을 때 알맞은 행동만 골라 표시해요.', toolOptions: { mode: 'checklist', title: '급식 받을 때', items: [{ id: 'line', text: '줄을 서서 기다려요' }, { id: 'amount', text: '먹을 만큼 받아요' }, { id: 'cut', text: '먼저 받으려고 새치기해요' }, { id: 'taste', text: '안 먹는 음식은 말없이 버려요' }] }, target: { checklist: ['line', 'amount'] }, difficulty: 0.2 },
                { prompt: '밥 먹은 뒤 내가 실제로 한 일을 점검 목록에 표시해요.', toolOptions: { mode: 'checklist', title: '밥 먹은 뒤 한 일', items: [{ id: 'clean', text: '자리를 깨끗이 치웠어요' }, { id: 'tray', text: '식판을 제자리에 놓았어요' }, { id: 'brush', text: '양치로 입안을 개운하게 했어요' }] }, target: { selfCheck: true }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"손 씻기에서 가장 놓치기 쉬운 곳은 어디였나요?" 손톱 밑과 손가락 사이가 나오도록 한다. 출구 1번을 틀린 학생은 헹구기와 말리기의 순서를 다시 보게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'timer', options: { cards: ['비누를 묻혀 문질러요', '흐르는 물로 헹궈요', '손을 물에 적셔요', '수건으로 말려요'] }, prompt: '손 씻기 순서 카드를 차례대로 놓아요.', target: { order: ['손을 물에 적셔요', '비누를 묻혀 문질러요', '흐르는 물로 헹궈요', '수건으로 말려요'] }, difficulty: 0.2 },
              { type: 'choice', prompt: '비누로 손을 씻을 때 알맞은 시간은 얼마쯤일까요?', options: ['5초', '30초쯤', '5분'], answer: 1, difficulty: 0.15, explain: '30초쯤 구석구석 문질러야 깨끗해져요.' },
              MOOD('손 씻기를 익힌 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '손 씻기와 밥 먹기 전',
          items: [
            { type: 'table', prompt: '손 씻기 순서에 번호를 쓰세요.', columns: ['하는 일', '차례'], cells: [['흐르는 물에 헹궈요', ''], ['물에 손을 적셔요', ''], ['수건으로 말려요', ''], ['비누로 문질러요', '']], answer: '헹궈요 3, 적셔요 1, 말려요 4, 문질러요 2' },
            { type: 'choice', prompt: '손은 얼마나 씻어야 할까요?', options: ['5초', '30초쯤', '아무렇게나'], answer: '30초쯤' },
            { type: 'check', prompt: '밥 먹기 전에 할 일에 ✓ 하세요.', options: ['손 씻기', '바른 자세로 앉기', '먹을 만큼 받기'] },
            { type: 'short', prompt: '손을 씻으며 잘 안 되던 곳을 한 군데 쓰세요.' },
          ],
          easy: {
            note: '적시기 → 비누 → 문지르기 → 헹구기 → 말리기 순서예요.',
            items: [
              { type: 'choice', prompt: '손을 씻은 뒤 마지막으로 하는 일은?', options: ['말리기', '비누 묻히기'], answer: '말리기' },
              { type: 'short', prompt: '손을 씻는 때 하나를 쓰세요.' },
              { type: 'draw', prompt: '손을 씻는 내 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드 순서가 거의 맞게 놓여 있어 한 곳만 옮기면 되고, 타이머는 10초씩 바뀌며 전체 시간이 보여요.',
          base: '전체 시간을 화면에서 확인하며 맞춰요.',
          challenge: '전체 시간이 보이지 않아 스스로 셈해 맞춰요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 물로만 씻으면 된다고 여긴다 → 비누와 문지르기를 보여 준다. ② 헹구기 전에 말리기를 먼저 놓는다 → 비누를 씻어 낸 뒤 말린다고 말한다. ③ 시간을 너무 짧게 씻는다 → 30초를 함께 센다. 실제 손 씻기는 교사가 관찰한다. 알레르기가 있는 학생에게는 먹지 않는 음식을 말하도록 한다.',
      }),
      // ───────────────────────── 23 ─────────────────────────
      L(23, {
        title: '이레 동안 지킬 습관 하나 정하고 표 만들기',
        objective: '고른 생활 습관을 학교와 집에서 이레 동안 지키기 위해 구체적인 목표를 정하고, 날마다 표시할 표를 만들 수 있다.',
        illustration: art('a child drawing a seven day tick chart with a pencil, with a toothbrush, a moon pillow and a soap bar drawn at the top of the paper', [
          { motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'moon', x: 90, y: 56, s: 0.7 }, { motif: 'hills', y: 210 },
          { motif: 'cloud', x: 250, y: 50 }, { motif: 'house', x: 90, y: 214, s: 0.8 },
          { motif: 'text', x: 240, y: 128, text: '이레 습관 표', size: 26 },
        ]),
        safety: [SPACE, FLOOR, STOP],
        stages: stages(
          {
            teacher: '"지난 시간에 요즘 가장 어려운 습관을 하나 골랐죠. 이제 이레(7일) 동안 지켜 볼 목표를 정해요." "학교에서만 지키면 습관이 된 걸까요?"라고 물어, 학교와 집 모두에서 지켜야 한다고 짚는다. 좋은 목표는 구체적이고 작아야 지킬 수 있다고 사례를 두 개 보여 준다: ‘일찍 자기’와 ‘밤 아홉 시 반에 불 끄고 눕기’ 중 어느 것이 지키기 쉬울까?',
            student: '이레 동안 지킬 습관 목표를 구체적으로 정하고, 날마다 표시할 표를 만들어 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 구체적이고 작은 목표 정하기', minutes: 13, tool: 'mindmap',
              task: '막연한 목표와 구체적인 목표를 나누고, 습관과 시간을 이어 보며 내 목표를 정해요.',
              teacher: '"목표에 시간이나 횟수가 들어 있나요?" ‘잘 먹기’처럼 막연한 목표는 지켰는지 알 수 없다고 말해 준다. 거창한 목표를 세우는 학생에게는 오늘부터 이레만 해 보라고 하며 작게 줄이게 한다.',
              levels: CARD,
              items: [
                { prompt: '목표를 막연해요와 구체적이에요 두 칸으로 나누어요.', toolOptions: { topic: '목표의 모습', slots: ['막연해요', '구체적이에요'], cards: ['더 건강해지기', '밤 아홉 시 반에 화면 끄기', '잘 씻기', '밥 먹기 전에 비누로 30초 손 씻기'] }, target: { sort: { '막연해요': ['더 건강해지기', '잘 씻기'], '구체적이에요': ['밤 아홉 시 반에 화면 끄기', '밥 먹기 전에 비누로 30초 손 씻기'] } }, difficulty: 0.2 },
                { prompt: '습관마다 지킬 때를 이어요.', toolOptions: { mode: 'match', topic: '습관과 때', slots: [{ id: 'sleep', label: '일찍 자기' }, { id: 'meal', label: '아침 먹기' }, { id: 'wash', label: '손 씻기' }], cards: ['밤 아홉 시 반에 침대에 눕기', '일어나서 십 분 안에 먹기', '밥 먹기 전, 화장실 다녀온 뒤'] }, target: { match: { sleep: '밤 아홉 시 반에 침대에 눕기', meal: '일어나서 십 분 안에 먹기', wash: '밥 먹기 전, 화장실 다녀온 뒤' } }, difficulty: 0.2 },
                { prompt: '이레 동안 지킬 좋은 목표의 조건만 골라요.', toolOptions: { mode: 'pick', topic: '좋은 목표', cards: ['시간이나 횟수가 들어 있어요', '학교와 집에서 모두 할 수 있어요', '지키기 매우 어려울 만큼 어려워요', '했는지 표시로 알 수 있어요'] }, target: { pick: ['시간이나 횟수가 들어 있어요', '학교와 집에서 모두 할 수 있어요', '했는지 표시로 알 수 있어요'] }, difficulty: 0.2,
                  conclude: '시간과 횟수가 들어 있는 작은 목표라야 지켰는지 알 수 있어요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 하루 차례와 이레 표 만들기', minutes: 13, tool: 'timer',
              task: '목표를 지킬 때를 하루 차례로 놓고, 이레 동안 매일 지킬 횟수를 표 칸에 적고, 내 표를 점검해요.',
              teacher: '"아침, 낮, 밤 가운데 언제 지킬 건가요?" 하루 일과와 목표가 만나는 때를 짚는다. 표 칸을 일곱 날 모두 같은 횟수로 적는 학생은 괜찮다고 해 주되, 주말은 다를 수 있는지 묻는다.',
              levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
              items: [
                { prompt: '손 씻기 목표를 지킬 때를 하루 차례대로 놓아요.', toolOptions: { cards: ['자기 전 화장실을 다녀온 뒤', '아침 식사 전', '점심 급식 받기 전', '저녁 식사 전'] }, target: { order: ['아침 식사 전', '점심 급식 받기 전', '저녁 식사 전', '자기 전 화장실을 다녀온 뒤'] }, levels: { easy: { state: { order: ['아침 식사 전', '점심 급식 받기 전', '자기 전 화장실을 다녀온 뒤', '저녁 식사 전'] } } }, difficulty: 0.2 },
                { prompt: '이레 동안 하루에 지킬 횟수를 예상해 표 칸에 적어요.', toolOptions: { fields: ['월', '화', '수', '목', '금', '토', '일'], unit: '번' }, target: { records: true }, difficulty: 0.15 },
                { prompt: '내 이레 표를 점검 목록에 표시해요.', target: { selfCheck: ['목표에 시간이나 횟수가 들어 있어요', '학교와 집에서 모두 할 수 있어요', '날마다 표시할 칸을 만들었어요'] }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"내가 정한 목표를 한 문장으로 말해 볼까요? 시간이나 횟수가 들어 있나요?" 짝끼리 서로 목표를 들려주고 구체적인지 확인하게 한다. 출구 1번을 틀린 학생은 목표 문장에서 시간이나 횟수가 있는 곳을 찾아 줄을 그어 보게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { topic: '목표의 모습', slots: ['막연해요', '구체적이에요'], cards: ['몸 잘 돌보기', '저녁 식사 전에 비누로 손 씻기', '건강하게 먹기', '매일 밤 열 시 전에 눕기'] }, prompt: '새 목표를 막연한 것과 구체적인 것으로 나누어요.', target: { sort: { '막연해요': ['몸 잘 돌보기', '건강하게 먹기'], '구체적이에요': ['저녁 식사 전에 비누로 손 씻기', '매일 밤 열 시 전에 눕기'] } }, difficulty: 0.2 },
              { type: 'choice', prompt: '이레 동안 지킬 목표로 가장 알맞은 것은 무엇인가요?', options: ['건강해지기', '밥 먹기 전에 비누로 30초 손 씻기', '완벽하게 잘하기'], answer: 1, difficulty: 0.15, explain: '시간과 횟수가 있어야 지켰는지 알 수 있어요.' },
              MOOD('이레 습관 목표를 정한 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '이레 습관 표',
          items: [
            { type: 'blank', prompt: '내 이레 목표를 한 문장으로 쓰세요.', text: '나는 이레 동안 ______________ 할 거예요.', answer: '학생마다 다름' },
            { type: 'table', prompt: '날마다 지켰으면 ○ 표 하세요(이레 동안 쓰기).', columns: ['월', '화', '수', '목', '금', '토', '일'], cells: [['학교', '', '', '', '', '', ''], ['집', '', '', '', '', '', '']] },
            { type: 'choice', prompt: '구체적인 목표에 ○ 하세요.', options: ['건강해지기', '밥 먹기 전 30초 손 씻기', '잘 지내기'], answer: '밥 먹기 전 30초 손 씻기' },
            { type: 'check', prompt: '내 목표가 맞는지 ✓ 하세요.', options: ['시간이나 횟수가 있어요', '학교와 집에서 할 수 있어요', '표시로 알 수 있어요'] },
          ],
          easy: {
            note: '시간이나 횟수가 있는 작은 목표를 골라요.',
            items: [
              { type: 'choice', prompt: '좋은 목표는?', options: ['작고 구체적인 것', '막연한 것'], answer: '작고 구체적인 것' },
              { type: 'short', prompt: '내가 지킬 습관 하나를 쓰세요.' },
              { type: 'draw', prompt: '내 표에 붙일 스티커를 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 맞는 칸에 놓으면 바로 알려 주고, 순서 카드 한 장이 미리 놓여 있어요.',
          base: '카드를 모두 놓은 뒤 확인해 스스로 고쳐요.',
          challenge: '기록판의 시간 재기를 켜서 손 씻기 시간도 재어 적어요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 학교에서만 지키면 습관이 된다고 여긴다 → 집에서 지킬 때도 표에 넣게 한다. ② 막연한 목표를 정한다 → 시간이나 횟수를 넣게 한다. ③ 너무 큰 목표를 세운다 → 이레만 해 볼 작은 목표로 줄인다. 이 단원은 수면·식사 처방을 하지 않고 학생이 자기 습관을 스스로 정하게 한다.',
      }),
      // ───────────────────────── 24 ─────────────────────────
      L(24, {
        title: '날마다 표시하고 학교와 집 모두에서 지키기',
        objective: '이레 습관 표에 날마다 지킨 것을 표시하고, 학교에서만 지키는 습관을 집에서도 지키는 방법을 찾을 수 있다.',
        illustration: art('a paper seven day chart half filled with star stickers, with a small school building on the left and a small house on the right connected by a dotted line', [
          { motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'cloud', x: 100, y: 50 }, { motif: 'hills', y: 208 },
          { motif: 'house', x: 90, y: 214, s: 0.9 }, { motif: 'house', x: 390, y: 214, s: 0.9 },
          { motif: 'text', x: 240, y: 128, text: '학교에서도 집에서도', size: 24 },
        ]),
        safety: [SPACE, STOP, OWN],
        stages: stages(
          {
            teacher: '"표를 만들어 두기만 하면 습관이 될까요?" 날마다 표시해야 기록이 쌓인다고 말해 준다. "학교에서는 지키는데 집에서는 잊어버리는 사람?"이라고 물어 손을 들게 한다. 오늘은 표시하는 방법과 집에서도 지키는 방법을 찾는다고 알린다.',
            student: '이레 표에 날마다 어떻게 표시할까요? 집에서도 지킬 방법을 찾아봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 날마다 표시한 기록 그래프로 만들기', minutes: 13, tool: 'chart',
              task: '가상 친구가 이레 동안 학교와 집에서 지킨 횟수를 막대그래프로 나타내고 읽어요. 내 표는 활동지에 날마다 표시해요.',
              teacher: '"학교와 집 가운데 어느 쪽이 더 높은가요? 왜 그럴까요?" 집에서의 막대가 낮은 까닭을 말하게 한다. 낮은 막대를 보고 "집에서는 못하는 사람"이라고 단정하는 학생에게는 집에서 무엇이 달라지는지 먼저 묻는다.',
              levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '지아가 이레 동안 학교에서 손 씻기를 지킨 날을 요일별 표로 보고 막대그래프를 완성해요.', toolOptions: { type: 'bar', title: '학교에서 지킨 횟수(번)', unit: '번', xLabel: '요일', yLabel: '횟수', data: [['월', 3], ['화', 3], ['수', 2], ['목', 3], ['금', 3]] }, target: { build: true }, levels: { easy: { toolOptions: { given: [0, 1] } } }, difficulty: 0.15 },
                { prompt: '지아가 집에서 손 씻기를 지킨 횟수를 그래프로 읽고 가장 적게 지킨 요일을 골라요.', toolOptions: { type: 'bar', mode: 'read', title: '집에서 지킨 횟수(번)', unit: '번', xLabel: '요일', yLabel: '횟수', data: [['월', 2], ['화', 1], ['수', 3], ['목', 2], ['금', 0]], question: '가장 적게 지킨 요일은?', choices: ['월요일', '화요일', '수요일', '금요일'] }, target: { pick: 3 }, difficulty: 0.2 },
                { prompt: '지아가 집에서 이레 동안 지킨 횟수는 모두 몇 번인지 그래프를 읽고 더해 써요.', toolOptions: { type: 'bar', mode: 'read', title: '집에서 지킨 횟수(번)', unit: '번', xLabel: '요일', yLabel: '횟수', data: [['월', 2], ['화', 1], ['수', 3], ['목', 2], ['금', 0]], question: '집에서 지킨 횟수는 모두 몇 번인가요?' }, target: { value: 8 }, levels: { challenge: { prompt: '지아가 집과 학교를 모두 합해 금요일에 지킨 횟수는 몇 번인지 두 그래프를 떠올려 써요.', toolOptions: { question: '집과 학교에서 금요일에 지킨 횟수는 모두 몇 번인가요?' }, target: { value: 3 } } }, difficulty: 0.25,
                  conclude: '집의 막대가 낮으면 집에서 방법을 찾아봐요. 학교에서 하는 방법을 가져오면 돼요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 집에서도 지키는 방법 상황 고르기', minutes: 13, tool: 'emotion',
              task: '집에서 습관을 지키기 어려운 상황이에요. 어떻게 할지 고르고, 방법을 짝에게 말해요.',
              teacher: '"학교에서는 선생님이 챙겨 주고, 집에서는 누가 챙겨 줄까요?" 가족에게 말하거나 눈에 보이는 곳에 표를 붙이는 방법을 짚는다. 혼자서만 하려는 학생에게는 가족에게 부탁할 수 있다고 말한다.',
              levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '집에 오면 손을 안 씻고 간식부터 먹고 싶어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '집에 오자마자 간식이 눈에 보여서 손을 안 씻고 먹고 싶어요.', choices: [{ id: 'eat', text: '손 씻기는 학교에서 했으니 그냥 먹어요', result: '손에 묻은 것을 그대로 먹었어요.', mood: '걱정', why: '집에서도 손을 씻어야 해요.' }, { id: 'wash', text: '간식 앞에 손 씻기 쪽지를 붙여 두고 먼저 씻어요', result: '손을 씻고 개운하게 간식을 먹었어요.', mood: '뿌듯함' }, { id: 'skip', text: '간식 없이 방으로 들어가요', result: '배가 고파 힘이 없었어요.', mood: '속상함', why: '습관은 먹는 것을 막는 것이 아니에요.' }] }, target: { choice: 'wash' }, difficulty: 0.15 },
                { prompt: '밤에 화면을 끄기 싫어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '자기 전 한 시간 동안 영상을 보고 싶어서 화면을 끄기 싫어요.', choices: [{ id: 'more', text: '조금만 더 보자고 계속 봐요', result: '시간이 한참 지나 늦게 잤어요.', mood: '후회', why: '조금만이 길어지기 쉬워요.' }, { id: 'alarm', text: '알람을 맞추고 울리면 바로 꺼요', result: '정한 시간에 끄고 편하게 누웠어요.', mood: '뿌듯함' }, { id: 'hide', text: '가족 몰래 숨어서 봐요', result: '들켜서 혼이 났어요.', mood: '미안함', why: '몰래 하면 마음도 불편해요.' }] }, target: { choice: 'alarm' }, difficulty: 0.2 },
                { prompt: '가족이 바빠서 아침을 챙겨 주지 못해요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '가족이 일찍 출근해서 아침을 챙겨 주지 못해요.', choices: [{ id: 'hungry', text: '그냥 굶고 학교에 가요', result: '3교시에 배가 고파 집중이 안 됐어요.', mood: '속상함', why: '아침을 거르면 힘이 나지 않아요.' }, { id: 'ask', text: '전날 밤 가족과 간단히 먹을 것을 정해 두어요', result: '아침에 바로 먹고 나갈 수 있었어요.', mood: '고마움' }, { id: 'snack', text: '과자만 잔뜩 먹고 가요', result: '속이 더부룩했어요.', mood: '걱정', why: '든든한 먹을 것이 더 좋아요.' }] }, target: { choice: 'ask' }, difficulty: 0.2 },
              ],
            },
          ],
          {
            teacher: '"집에서 지키기 가장 어려운 것은 무엇이었나요? 오늘 알게 된 방법 중 써 볼 것은?" 눈에 보이는 곳에 붙이기, 알람 맞추기, 가족에게 말하기가 나오도록 한다. 출구 1번을 틀린 학생은 요일 줄을 손가락으로 따라 다시 읽게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '도윤이 집에서 지킨 횟수(번)', unit: '번', xLabel: '요일', yLabel: '횟수', data: [['월', 1], ['화', 3], ['수', 2]], question: '가장 많이 지킨 요일은?', choices: ['월요일', '화요일', '수요일'] }, prompt: '도윤의 그래프를 보고 집에서 가장 많이 지킨 요일을 골라요.', target: { pick: 1 }, difficulty: 0.15 },
              { type: 'choice', prompt: '학교에서만 지키는 습관을 집에서도 지키려면 어떻게 하면 좋을까요?', options: ['잊어버려도 그냥 둔다', '눈에 보이는 곳에 표를 붙이고 가족에게도 말한다', '집에서는 하지 않는다'], answer: 1, difficulty: 0.15, explain: '눈에 보이고 가족이 도와주면 집에서도 이어 가기 쉬워요.' },
              MOOD('표시하며 지켜 본 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '학교와 집에서 지키기',
          items: [
            { type: 'table', prompt: '이레 동안 지킨 횟수를 날마다 쓰세요.', columns: ['요일', '월', '화', '수', '목', '금'], cells: [['학교', '', '', '', '', ''], ['집', '', '', '', '', '']] },
            { type: 'draw', prompt: '집에서 지킨 횟수를 막대그래프로 그리세요.' },
            { type: 'choice', prompt: '집에서도 지키는 방법에 ○ 하세요.', options: ['표를 눈에 보이는 곳에 붙인다', '표를 서랍에 넣어 둔다', '집에서는 안 한다'], answer: '표를 눈에 보이는 곳에 붙인다' },
            { type: 'short', prompt: '집에서 습관을 지킬 때 도움이 되는 방법을 쓰세요.' },
          ],
          easy: {
            note: '집에서도 지킬 수 있게 쪽지를 붙여 보아요.',
            items: [
              { type: 'choice', prompt: '집에서 습관을 잊지 않으려면?', options: ['쪽지를 붙여요', '잊어버려요'], answer: '쪽지를 붙여요' },
              { type: 'short', prompt: '집에서 지킬 습관을 하나 쓰세요.' },
              { type: 'draw', prompt: '집에서 습관을 지키는 내 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '막대 위에 값이 보이고 막대 두 개가 미리 그려져 있어요. 상황 문항은 보기가 두 개씩이에요.',
          base: '그래프를 스스로 그리고 읽고 상황 보기 세 개 가운데 골라요.',
          challenge: '읽은 값이 맞힌 뒤에야 드러나고, 마지막 문항은 두 곳의 합을 구해요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 학교에서만 지키면 습관이 된 것이라고 여긴다 → 집에서의 막대를 같이 본다. ② 집에서 못한 것을 가족 탓으로 돌린다 → 내가 할 수 있는 작은 방법을 찾는다. ③ 몰래 하는 방법을 고른다 → 가족에게 말하는 쪽을 고르게 한다. 가정의 사정이 다르므로 집 이야기를 비교하거나 평가하지 않는다.',
      }),
      // ───────────────────────── 25 ─────────────────────────
      L(25, {
        title: '지키기 어려웠던 날 쓴 방법 나누기',
        objective: '습관을 지키기 어려웠던 날 어떤 방법을 썼는지 말하고, 방법을 상황에 맞게 골라 계획에 넣을 수 있다.',
        illustration: art('a child on a rainy day with a small umbrella walking along a dotted line toward a bright star, with a friend holding the other end of the line', [
          { motif: 'cloud', x: 100, y: 50 }, { motif: 'sun', x: 410, y: 56, s: 0.6 }, { motif: 'hills', y: 210 },
          { motif: 'tree', x: 62, y: 212 }, { motif: 'star', x: 330, y: 118, s: 1.0 },
          { motif: 'text', x: 240, y: 190, text: '어려운 날의 비법', size: 24 },
        ]),
        safety: [SPACE, STOP, OWN, WATER],
        stages: stages(
          {
            teacher: '"이레 동안 습관을 지키면서 가장 어려웠던 날은 언제였나요?" 학생이 말하는 어려운 날(피곤, 놀기, 잊음, 비)을 칠판에 적는다. "그날 어떻게 했나요? 그 방법을 다른 친구도 쓸 수 있을까요?" 방법을 나누면 다음에 도움이 된다고 알려 준다.',
            student: '습관을 지키기 어려웠던 날 어떻게 했는지 나누어 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 어려운 날과 방법 잇기', minutes: 13, tool: 'mindmap',
              task: '어려운 날과 알맞은 방법을 이어 보고, 방법을 갈래로 나누고, 친구 말에 알맞은 응원을 골라요.',
              teacher: '"어려운 날에는 목표를 작게 줄여도 괜찮아요. 그게 포기일까요?" 줄이는 것은 포기가 아니라 이어 가는 방법이라고 말해 준다. 어려운 날 아예 안 하는 것이 낫다고 하는 학생에게는 5분이라도 하는 쪽을 권한다.',
              levels: CARD,
              items: [
                { prompt: '어려운 날과 알맞은 방법을 이어요.', toolOptions: { mode: 'match', topic: '어려운 날의 방법', slots: [{ id: 'sleepy', label: '졸려서 눈이 안 떠져요' }, { id: 'forgot', label: '손 씻기를 깜빡 잊었어요' }, { id: 'full', label: '친구와 놀다 시간이 지났어요' }], cards: ['알람을 잠자리 옆에 두어요', '눈에 띄는 곳에 쪽지를 붙여요', '놀기 전에 하기로 먼저 정해요'] }, target: { match: { sleepy: '알람을 잠자리 옆에 두어요', forgot: '눈에 띄는 곳에 쪽지를 붙여요', full: '놀기 전에 하기로 먼저 정해요' } }, difficulty: 0.2 },
                { prompt: '방법을 내가 혼자 하는 것과 누군가의 도움을 받는 것으로 나누어요.', toolOptions: { topic: '방법의 갈래', slots: ['혼자 해요', '도움을 받아요'], cards: ['알람 맞추기', '가족에게 깨워 달라고 부탁하기', '표시 스티커 붙이기', '친구와 같이 하기로 약속하기'] }, target: { sort: { '혼자 해요': ['알람 맞추기', '표시 스티커 붙이기'], '도움을 받아요': ['가족에게 깨워 달라고 부탁하기', '친구와 같이 하기로 약속하기'] } }, difficulty: 0.2 },
                { prompt: '어려운 날 친구에게 건넬 알맞은 응원만 골라요.', toolOptions: { mode: 'pick', topic: '알맞은 응원', cards: ['오늘은 5분만 해도 괜찮아', '어려운 날은 건너뛰어도 소용없어', '내일 다시 해 보면 돼', '왜 그것도 못 해'] }, target: { pick: ['오늘은 5분만 해도 괜찮아', '내일 다시 해 보면 돼'] }, difficulty: 0.2,
                  conclude: '어려운 날에는 목표를 작게 줄이거나 도움을 받아 이어 가요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 잠자기 전 준비 계획하기', minutes: 13, tool: 'timer',
              task: '내가 고른 습관이 잠자기라면 잠자리 준비 차례를 놓고 양치 시간을 타이머로 맞춰요. 점검 목록으로 오늘 밤 계획을 확인해요.',
              teacher: '"자기 전에 할 일이 너무 많으면 어떻게 될까요?" 순서를 정해 두면 헤매지 않는다고 말한다. 잠자리 준비를 길게 계획하는 학생에게는 20분 안에 끝낼 수 있는 만큼으로 줄이게 한다.',
              levels: { easy: { workStep: 10, restStep: 10, showTotal: true }, base: { showTotal: true }, challenge: { showTotal: false, stopwatch: true } },
              items: [
                { prompt: '잠자기 전 할 일을 차례대로 놓아요.', toolOptions: { cards: ['불을 끄고 눕기', '화면을 끄고 내일 가방 챙기기', '양치하고 세수하기', '잠옷으로 갈아입기'] }, target: { order: ['화면을 끄고 내일 가방 챙기기', '양치하고 세수하기', '잠옷으로 갈아입기', '불을 끄고 눕기'] }, levels: { easy: { state: { order: ['화면을 끄고 내일 가방 챙기기', '양치하고 세수하기', '불을 끄고 눕기', '잠옷으로 갈아입기'] } } }, difficulty: 0.2 },
                { prompt: '양치 2분을 하고, 쉬지 않고 한 번 하도록 타이머를 맞춰요.', toolOptions: { plan: { work: 60, rest: 10, rounds: 2 } }, target: { plan: { work: 120, rounds: 1 } }, difficulty: 0.2 },
                { prompt: '오늘 밤 계획을 점검 목록에 표시해요.', target: { selfCheck: ['잘 시간을 정했어요', '자기 전에 화면 끄는 시간을 정했어요', '잠자리 준비 차례를 알아요'] }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"오늘 새로 알게 된 방법 가운데 내가 써 볼 한 가지는 무엇인가요?" 한 사람씩 말하게 한다. 출구 1번을 틀린 학생은 어려운 날과 방법의 짝을 소리 내어 읽어 보게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '어려운 날의 방법', slots: [{ id: 'rain', label: '비가 와서 나가기 싫어요' }, { id: 'tv', label: '영상이 끝나지 않아요' }], cards: ['집 안에서 할 수 있는 것으로 바꿔요', '알람이 울리면 바로 꺼요'] }, prompt: '새 어려운 날과 알맞은 방법을 이어요.', target: { match: { rain: '집 안에서 할 수 있는 것으로 바꿔요', tv: '알람이 울리면 바로 꺼요' } }, difficulty: 0.2 },
              { type: 'choice', prompt: '어려운 날 목표를 작게 줄이는 것은 어떤 일일까요?', options: ['포기하는 일', '이어 가는 방법이에요', '해서는 안 되는 일'], answer: 1, difficulty: 0.15, explain: '작게 줄여서라도 이어 가면 습관이 돼요.' },
              MOOD('어려운 날의 방법을 나눠 본 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '어려운 날의 방법',
          items: [
            { type: 'table', prompt: '어려웠던 날과 내가 쓴 방법을 쓰세요.', columns: ['어려웠던 날', '내가 쓴 방법'], rows: 3 },
            { type: 'check', prompt: '내가 써 볼 방법에 ✓ 하세요.', options: ['목표를 작게 줄이기', '쪽지 붙이기', '알람 맞추기', '가족에게 부탁하기'] },
            { type: 'choice', prompt: '어려운 날 알맞은 생각에 ○ 하세요.', options: ['오늘은 5분만 해도 괜찮아', '어려운 날은 소용없어', '못 하는 내가 싫어'], answer: '오늘은 5분만 해도 괜찮아' },
            { type: 'short', prompt: '친구에게 건넬 응원의 말을 한 문장으로 쓰세요.' },
          ],
          easy: {
            note: '어려운 날에는 작게 줄이거나 도움을 받으면 돼요.',
            items: [
              { type: 'choice', prompt: '어려운 날에는?', options: ['5분만 해도 돼요', '모두 그만둬요'], answer: '5분만 해도 돼요' },
              { type: 'short', prompt: '내가 쓴 방법 하나를 쓰세요.' },
              { type: 'draw', prompt: '어려운 날을 이겨 낸 내 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 맞는 칸에 놓으면 바로 알려 주고, 순서 카드가 거의 맞게 놓여 있어요.',
          base: '카드를 모두 놓은 뒤 확인하고 전체 시간을 화면에서 확인해요.',
          challenge: '전체 시간이 보이지 않고 기록판의 시간 재기로 양치 시간을 재요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 어려운 날에는 아예 안 하는 게 낫다고 여긴다 → 5분이라도 한다. ② 의지가 약해서 못 했다고 자신을 탓한다 → 방법을 바꾸라고 말한다. ③ 가족 도움을 부끄러워한다 → 도움을 받는 것도 방법이라고 말한다. 가정마다 환경이 달라 개인 사정을 캐묻지 않는다.',
      }),
      // ───────────────────────── 26 ─────────────────────────
      L(26, {
        title: '이레 표를 세어 잘 지킨 날과 못 지킨 날 나누기',
        objective: '이레 습관 표의 표시를 세어 잘 지킨 날과 못 지킨 날을 나누고, 그 결과를 그래프로 읽어 말할 수 있다.',
        illustration: art('a paper seven day chart with filled stars on five days and empty circles on two days, and a child counting the stars with a pencil', [
          { motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'cloud', x: 100, y: 50 }, { motif: 'hills', y: 208 },
          { motif: 'star', x: 140, y: 118, s: 0.8 }, { motif: 'star', x: 220, y: 118, s: 0.8 }, { motif: 'star', x: 300, y: 118, s: 0.8 },
          { motif: 'text', x: 240, y: 190, text: '별을 세어 봐요', size: 24 },
        ]),
        safety: [SPACE, OWN, STOP],
        stages: stages(
          {
            teacher: '"이레 표에 별 몇 개를 붙였나요? 세어 볼까요?" 각자 지킨 날을 세어 보게 한다. "잘 지킨 날이 많으면 칭찬, 적으면 실패일까요?"라고 물어, 세는 목적은 다음 이레를 더 잘 정하기 위해서라고 알려 준다. 친구와 별 개수를 견주지 않고 내 표만 본다고 약속한다.',
            student: '이레 표를 보고 잘 지킨 날과 못 지킨 날을 세어 봐요. 별은 몇 개일까요?',
          },
          [
            {
              id: 'a1', title: '활동 1. 이레 표시를 세어 그래프로 읽기', minutes: 13, tool: 'chart',
              task: '가상 친구의 이레 표 결과를 그래프로 나타내고 잘 지킨 날을 읽어요. 내 표는 활동지에 옮겨 세어요.',
              teacher: '"그래프에서 지킨 날과 못 지킨 날을 합하면 며칠일까요?" 두 막대를 합하면 이레가 된다는 것을 확인하게 한다. 지킨 날이 적은 막대를 부끄러워하는 학생에게는 처음의 내가 더 적었는지 견주게 한다.',
              levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '서연이 이레 표에서 습관별로 지킨 날 수를 보고 막대그래프를 완성해요.', toolOptions: { type: 'bar', title: '서연이 이레 동안 지킨 날(일)', unit: '일', xLabel: '습관', yLabel: '지킨 날', data: [['손 씻기', 6], ['일찍 자기', 4], ['아침 먹기', 5]] }, target: { build: true }, levels: { easy: { toolOptions: { given: [0] } } }, difficulty: 0.15 },
                { prompt: '서연이 가장 잘 지킨 습관을 그래프에서 골라요.', toolOptions: { type: 'bar', mode: 'read', title: '서연이 이레 동안 지킨 날(일)', unit: '일', xLabel: '습관', yLabel: '지킨 날', data: [['손 씻기', 6], ['일찍 자기', 4], ['아침 먹기', 5]], question: '가장 잘 지킨 습관은?', choices: ['손 씻기', '일찍 자기', '아침 먹기'] }, target: { pick: 0 }, difficulty: 0.15 },
                { prompt: '서연이 일찍 자기를 지키지 못한 날은 이레 중 며칠인지 그래프를 읽고 써요.', toolOptions: { type: 'bar', mode: 'read', title: '서연이 이레 동안 지킨 날(일)', unit: '일', xLabel: '습관', yLabel: '지킨 날', data: [['손 씻기', 6], ['일찍 자기', 4], ['아침 먹기', 5]], question: '일찍 자기를 못 지킨 날은 며칠인가요?' }, target: { value: 3 }, levels: { challenge: { prompt: '서연이 세 습관에서 못 지킨 날을 모두 합하면 며칠인지 써요.', toolOptions: { question: '세 습관에서 못 지킨 날은 모두 며칠인가요?' }, target: { value: 6 } } }, difficulty: 0.25,
                  conclude: '지킨 날과 못 지킨 날을 합하면 이레예요. 못 지킨 날의 까닭이 다음 계획의 힌트예요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 잘 지킨 날과 못 지킨 날의 까닭 나누기', minutes: 13, tool: 'mindmap',
              task: '이레 동안 지킨 날과 못 지킨 날을 나누고, 못 지킨 까닭을 갈래로 나누고, 알맞은 돌아보는 말을 골라요.',
              teacher: '"이레 가운데 지킨 날이 며칠인지 숫자를 말해 볼까요?" 칭찬은 숫자와 함께 구체적으로 한다. 못 지킨 날을 몸 탓·마음 탓으로만 돌리는 학생에게는 시간·장소·준비물 가운데 바꿀 수 있는 것을 찾게 한다.',
              levels: CARD,
              items: [
                { prompt: '이레 가운데 날들을 지켰어요와 못 지켰어요 두 칸으로 나누어요.', toolOptions: { topic: '이레 돌아보기', slots: ['지켰어요', '못 지켰어요'], cards: ['월요일 밥 먹기 전에 손 씻음', '목요일 늦잠 자서 아침을 못 먹음', '토요일 비누가 떨어져 못 씻음', '일요일 가족과 함께 일찍 잠'] }, target: { sort: { '지켰어요': ['월요일 밥 먹기 전에 손 씻음', '일요일 가족과 함께 일찍 잠'], '못 지켰어요': ['목요일 늦잠 자서 아침을 못 먹음', '토요일 비누가 떨어져 못 씻음'] } }, difficulty: 0.2 },
                { prompt: '못 지킨 까닭을 시간, 준비물, 마음 세 칸으로 나누어요.', toolOptions: { topic: '못 지킨 까닭', slots: ['시간', '준비물', '마음'], cards: ['아침에 늦게 일어났어요', '비누를 안 챙겼어요', '귀찮은 마음이 들었어요', '숙제를 하다 시간이 지났어요'] }, target: { sort: { '시간': ['아침에 늦게 일어났어요', '숙제를 하다 시간이 지났어요'], '준비물': ['비누를 안 챙겼어요'], '마음': ['귀찮은 마음이 들었어요'] } }, difficulty: 0.25 },
                { prompt: '이레를 돌아보는 말로 알맞은 것만 골라요.', toolOptions: { mode: 'pick', topic: '알맞은 말', cards: ['이레 가운데 나흘을 지켜서 뿌듯해', '사흘 못 지켰으니 나는 안 돼', '못 지킨 까닭을 찾으면 다음엔 더 잘할 수 있어', '다른 친구는 더 잘하니까 내 별은 부끄러워'] }, target: { pick: ['이레 가운데 나흘을 지켜서 뿌듯해', '못 지킨 까닭을 찾으면 다음엔 더 잘할 수 있어'] }, difficulty: 0.2 },
              ],
            },
          ],
          {
            teacher: '"오늘 세어 본 이레 표에서 가장 뿌듯한 숫자는 무엇인가요?" 숫자와 함께 말하게 한다. 출구 1번을 틀린 학생은 막대 두 개의 합이 이레가 되는지 확인해 보게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '준호가 이레 동안 지킨 날(일)', unit: '일', xLabel: '습관', yLabel: '지킨 날', data: [['손 씻기', 7], ['일찍 자기', 3]], question: '못 지킨 날이 더 많은 습관은?', choices: ['손 씻기', '일찍 자기'] }, prompt: '준호의 그래프를 보고 못 지킨 날이 더 많은 습관을 골라요.', target: { pick: 1 }, difficulty: 0.15 },
              { type: 'choice', prompt: '이레 가운데 지킨 날이 많지 않았을 때 가장 알맞은 생각은 무엇인가요?', options: ['나는 이 습관과 안 맞아', '못 지킨 까닭을 찾아 다음 이레를 고치자', '이제 그만하자'], answer: 1, difficulty: 0.15, explain: '까닭을 찾으면 다음 이레를 더 잘 정할 수 있어요.' },
              MOOD('이레 표를 세어 본 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '이레 표 세어 보기',
          items: [
            { type: 'table', prompt: '내 이레 표를 세어 쓰세요.', columns: ['지킨 날', '못 지킨 날', '합(이레)'], rows: 1 },
            { type: 'draw', prompt: '지킨 날과 못 지킨 날을 막대그래프로 그리세요.' },
            { type: 'table', prompt: '못 지킨 날과 까닭을 쓰세요.', columns: ['못 지킨 날', '까닭(시간·준비물·마음)'], rows: 2 },
            { type: 'short', prompt: '이레 동안 가장 뿌듯했던 일을 숫자와 함께 쓰세요.' },
          ],
          easy: {
            note: '지킨 날과 못 지킨 날을 합하면 이레예요.',
            items: [
              { type: 'choice', prompt: '지킨 날 5일이면 못 지킨 날은?', options: ['2일', '5일'], answer: '2일' },
              { type: 'short', prompt: '내가 지킨 날 수를 쓰세요.' },
              { type: 'draw', prompt: '내 표의 별을 그려 보세요.' },
            ],
          },
        },
        differentiation: {
          easy: '막대 위에 값이 보이고 막대 한 개가 미리 그려져 있어요. 카드를 맞는 칸에 놓으면 바로 알려 줘요.',
          base: '그래프를 스스로 그리고 읽어요.',
          challenge: '읽은 값이 맞힌 뒤에야 드러나고, 마지막 문항은 여러 막대를 합해 구해요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 못 지킨 날이 많으면 실패라고 여긴다 → 까닭을 찾는 자료라고 말한다. ② 친구의 별 개수와 견준다 → 내 처음과 견준다. ③ 지킨 날과 못 지킨 날의 합을 이레로 맞추지 않는다 → 두 막대를 합해 확인하게 한다. 그래프의 수는 설명용 예시이고 학생의 수면·식사 기록을 평가하지 않는다.',
      }),
      // ───────────────────────── 27 ─────────────────────────
      L(27, {
        title: '다음 이레, 누구에게 어떤 도움을 받을지 정하기',
        objective: '다음 이레에 습관을 이어 가기 위해 도움을 받을 사람과 도움의 내용을 정하고 부탁하는 말을 만들 수 있다.',
        illustration: art('a child handing a paper checklist to a parent and a friend who are smiling, with a small sun and a heart floating above', [
          { motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'cloud', x: 100, y: 50 }, { motif: 'hills', y: 208 },
          { motif: 'house', x: 90, y: 214, s: 0.9 }, { motif: 'flower', x: 410, y: 214 },
          { motif: 'text', x: 240, y: 128, text: '도와줘, 고마워!', size: 26 },
        ]),
        safety: [SPACE, OWN, STOP],
        stages: stages(
          {
            teacher: '"다음 이레에 이어 가려면 혼자 해도 될까요, 누군가의 도움이 필요할까요?" 도움을 받는 것이 약한 것이 아니라 오래 이어 가는 방법이라고 말해 준다. 도움을 줄 수 있는 사람(가족·친구·선생님·보건 선생님)과 줄 수 있는 도움을 칠판에 적는다. 오늘은 누구에게 어떻게 말할지 정한다고 알린다.',
            student: '다음 이레에 도움이 될 사람과 도움의 내용을 정하고, 부탁하는 말도 만들어 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 도움을 줄 사람과 도움 잇기', minutes: 13, tool: 'mindmap',
              task: '도움을 줄 사람과 알맞은 도움을 이어 보고, 부탁에 알맞은 말만 골라요.',
              teacher: '"알람을 맞춰 줄 수 있는 사람은 누구일까요?" 사람마다 도울 수 있는 일이 다르다는 것을 짚는다. "혼자 하는 것이 더 멋져요"라고 말하는 학생에게는 도움을 받아 이어 간 사례를 말해 준다.',
              levels: CARD,
              items: [
                { prompt: '도움을 줄 사람과 알맞은 도움을 이어요.', toolOptions: { mode: 'match', topic: '사람과 도움', slots: [{ id: 'family', label: '가족' }, { id: 'friend', label: '친구' }, { id: 'teacher', label: '선생님' }], cards: ['저녁에 같이 손 씻자고 말해 주기', '학교에서 서로 표시를 확인해 주기', '어려운 점이 있으면 상담해 주기'] }, target: { match: { family: '저녁에 같이 손 씻자고 말해 주기', friend: '학교에서 서로 표시를 확인해 주기', teacher: '어려운 점이 있으면 상담해 주기' } }, difficulty: 0.2 },
                { prompt: '도움을 부탁하는 말로 알맞은 것만 골라요.', toolOptions: { mode: 'pick', topic: '알맞은 부탁', cards: ['저녁 먹기 전에 손 씻었는지 물어봐 줄래?', '그냥 알아서 챙겨 줘', '나 혼자 못 하니까 대신 해 줘', '일찍 자려는데 아홉 시에 알려 줄래?'] }, target: { pick: ['저녁 먹기 전에 손 씻었는지 물어봐 줄래?', '일찍 자려는데 아홉 시에 알려 줄래?'] }, difficulty: 0.2 },
                { prompt: '도움을 받는 차례대로 카드를 놓아요.', toolOptions: { mode: 'order', cards: ['도움을 받은 뒤 고마움을 말해요', '도움이 필요한 일을 정해요', '도움을 줄 사람에게 부탁해요', '도움을 받으며 습관을 지켜요'] }, target: { order: ['도움이 필요한 일을 정해요', '도움을 줄 사람에게 부탁해요', '도움을 받으며 습관을 지켜요', '도움을 받은 뒤 고마움을 말해요'] }, difficulty: 0.25,
                  conclude: '도움을 받는 것은 약한 것이 아니라 오래 이어 가는 방법이에요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 도움 요청 말 만들고 다음 이레 정하기', minutes: 13, tool: 'story',
              task: '도움을 요청하는 문장의 빈칸을 채우고, 다음 이레 계획을 세우는 차례를 놓아요.',
              teacher: '"부탁할 때는 무엇을, 언제, 어떻게 해 달라고 말해야 해요." 막연하게 "도와줘"라고만 말하지 않게 한다. 쑥스러워하는 학생에게는 짝과 역할을 바꾸어 연습하게 한다.',
              levels: CARD,
              items: [
                { prompt: '민지가 가족에게 부탁하는 말의 빈칸을 채워요.', toolOptions: { mode: 'fill', cards: ['아침 일곱 시에 깨워', '무엇이든 알아서 해', '저녁에 손 씻었는지 물어봐'], slots: [{ id: 'a', who: '민지', motif: 'sun', label: '엄마, 내일부터 ___ 줄래요?' }, { id: 'b', who: '민지', motif: 'moon', label: '그리고 ___ 줄래요?' }] }, target: { fill: { a: '아침 일곱 시에 깨워', b: '저녁에 손 씻었는지 물어봐' } }, difficulty: 0.2 },
                { prompt: '준호가 친구에게 부탁하는 말의 빈칸을 채워요.', toolOptions: { mode: 'fill', cards: ['학교에서 손 씻는 걸 같이 확인하자', '내 일은 네가 해', '그냥 같이 있어 줘'], slots: [{ id: 'a', who: '준호', motif: 'star', label: '우리 이번 주에 ___.' }] }, target: { fill: { a: '학교에서 손 씻는 걸 같이 확인하자' } }, difficulty: 0.2 },
                { prompt: '다음 이레 계획을 세우는 차례대로 카드를 놓아요.', toolOptions: { mode: 'order', cards: ['다음 이레 표를 새로 만들어요', '지난 이레 표를 세어 돌아봐요', '고칠 점과 도움받을 사람을 정해요', '이레 동안 날마다 표시해요'] }, target: { order: ['지난 이레 표를 세어 돌아봐요', '고칠 점과 도움받을 사람을 정해요', '다음 이레 표를 새로 만들어요', '이레 동안 날마다 표시해요'] }, difficulty: 0.25 },
              ],
            },
          ],
          {
            teacher: '"다음 이레에 도움을 받을 사람은 누구이고 무엇을 부탁할 건가요?" 한두 명이 발표한다. 출구 1번을 틀린 학생은 사람과 도움의 짝을 소리 내어 읽어 보게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '사람과 도움', slots: [{ id: 'sibling', label: '동생이나 형' }, { id: 'nurse', label: '보건 선생님' }], cards: ['아침에 같이 일어나자고 말해 주기', '몸이 아플 때 어떻게 할지 알려 주기'] }, prompt: '새 사람과 알맞은 도움을 이어요.', target: { match: { sibling: '아침에 같이 일어나자고 말해 주기', nurse: '몸이 아플 때 어떻게 할지 알려 주기' } }, difficulty: 0.2 },
              { type: 'choice', prompt: '도움을 부탁하는 말로 가장 알맞은 것은 무엇인가요?', options: ['아침 일곱 시에 깨워 줄래요?', '알아서 해 줘요', '대신 해 주세요'], answer: 0, difficulty: 0.15, explain: '언제 무엇을 해 달라고 구체적으로 말해야 해요.' },
              MOOD('도움을 부탁해 보기로 한 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '다음 이레의 도움',
          items: [
            { type: 'table', prompt: '도움을 받을 사람과 도움을 쓰세요.', columns: ['도움을 줄 사람', '부탁할 일'], rows: 3 },
            { type: 'blank', prompt: '도움을 부탁하는 말을 완성하세요.', text: '___님, 이번 이레에 ______________ 해 줄래요?', answer: '학생마다 다름' },
            { type: 'choice', prompt: '알맞은 부탁에 ○ 하세요.', options: ['저녁에 손 씻었는지 물어봐 줄래?', '그냥 알아서 해 줘', '나 대신 해 줘'], answer: '저녁에 손 씻었는지 물어봐 줄래?' },
            { type: 'short', prompt: '다음 이레에 고치고 싶은 점 한 가지를 쓰세요.' },
          ],
          easy: {
            note: '언제 무엇을 해 달라고 구체적으로 말해요.',
            items: [
              { type: 'choice', prompt: '도움을 받는 것은?', options: ['오래 이어 가는 방법', '약한 일'], answer: '오래 이어 가는 방법' },
              { type: 'short', prompt: '도움을 받고 싶은 사람 한 명을 쓰세요.' },
              { type: 'draw', prompt: '도움을 주는 사람과 나의 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 맞는 칸에 놓으면 바로 알려 주고, 빈칸 보기가 두 개씩이에요.',
          base: '카드를 모두 놓은 뒤 확인해 스스로 고쳐요.',
          challenge: '확인 뒤에야 맞고 틀림이 보이고, 도움을 부탁하는 말을 스스로 만들어 말해요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 혼자 해야 더 멋지다고 여긴다 → 도움을 받아 이어 간 사례를 든다. ② "도와줘"만 말한다 → 언제 무엇을 해 달라고 구체적으로 말하게 한다. ③ 도움을 줄 사람이 없다고 느낀다 → 선생님이나 보건 선생님도 있다고 알려 준다. 가정마다 돌봄 환경이 달라 가족 이야기를 캐묻지 않는다.',
      }),
      // ───────────────────────── 28 ─────────────────────────
      L(28, {
        title: '단원 돌아보기 — 내 몸, 내 습관, 내 계획 정리',
        objective: '단원에서 배운 내 몸의 특징, 운동 계획, 건강한 습관을 한 가지씩 묶어 말하고 스스로 평가할 수 있다.',
        illustration: art('three paper stepping stones labeled body, plan and habit leading to a bright star, with a child standing on the last stone', [
          { motif: 'sun', x: 410, y: 54, s: 0.8 }, { motif: 'cloud', x: 100, y: 50 }, { motif: 'hills', y: 208 },
          { motif: 'star', x: 330, y: 120, s: 1.2 }, { motif: 'tree', x: 62, y: 212 },
          { motif: 'text', x: 240, y: 190, text: '몸 · 계획 · 습관', size: 24 },
        ]),
        safety: [SPACE, WARM, STOP, WATER],
        stages: stages(
          {
            teacher: '"이 단원에서 내 몸에 대해 알게 된 것, 계획에 대해 알게 된 것, 습관에 대해 알게 된 것을 한 가지씩 말해 볼까요?" 손가락 세 개를 접으며 하나씩 말하게 한다. "습관은 며칠 하다 말아도 저절로 남을까요?"를 다시 물어, 이어 가려면 계획·표시·도움이 필요했다고 되짚는다. 오늘은 단원을 묶어 정리하고 스스로 평가한다고 알린다.',
            student: '내 몸, 운동 계획, 생활 습관에서 배운 것을 한 가지씩 말하고 나를 돌아봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 단원에서 배운 것 세 갈래로 묶기', minutes: 14, tool: 'mindmap',
              task: '배운 내용 카드를 몸의 특징·운동 계획·생활 습관 세 갈래로 나누고, 알맞은 말을 골라요.',
              teacher: '"이 카드는 몸에 관한 것일까, 계획일까, 습관일까요?" 카드마다 손으로 갈래를 가리키게 한다. 하나의 카드가 두 갈래에 걸치는 학생에게는 가장 가까운 갈래를 고르게 하고 이유를 말하게 한다.',
              levels: CARD,
              items: [
                { prompt: '배운 것을 몸의 특징, 운동 계획, 생활 습관 세 칸으로 나누어요.', toolOptions: { topic: '단원에서 배운 것', slots: ['몸의 특징', '운동 계획', '생활 습관'], cards: ['움직임마다 잘하는 사람이 달라요', '언제·어디서·무엇을을 정해요', '이레 동안 날마다 표시해요', '아프면 멈추고 알려요'] }, target: { sort: { '몸의 특징': ['움직임마다 잘하는 사람이 달라요', '아프면 멈추고 알려요'], '운동 계획': ['언제·어디서·무엇을을 정해요'], '생활 습관': ['이레 동안 날마다 표시해요'] } }, difficulty: 0.25 },
                { prompt: '이 단원에서 배운 것과 맞는 말만 골라요.', toolOptions: { mode: 'pick', topic: '단원 정리', cards: ['못 지킨 까닭을 찾아 계획을 고쳐요', '몸집이 큰 사람이 모든 운동을 잘해요', '앉아 있는 시간은 중간에 움직임을 끼워 줄여요', '습관은 하루 해 보면 저절로 남아요'] }, target: { pick: ['못 지킨 까닭을 찾아 계획을 고쳐요', '앉아 있는 시간은 중간에 움직임을 끼워 줄여요'] }, difficulty: 0.2 },
                { prompt: '단원 활동을 내가 한 차례대로 놓아요.', toolOptions: { mode: 'order', cards: ['이레 동안 생활 습관을 지켜 보았어요', '내 몸과 잘하는 움직임을 알아보았어요', '앉은 시간을 줄이는 방법을 해 보았어요', '운동 계획표를 만들고 해 보았어요'] }, target: { order: ['내 몸과 잘하는 움직임을 알아보았어요', '운동 계획표를 만들고 해 보았어요', '앉은 시간을 줄이는 방법을 해 보았어요', '이레 동안 생활 습관을 지켜 보았어요'] }, difficulty: 0.2,
                  conclude: '내 몸을 알고, 계획을 세우고, 표시하고 도움을 받으며 습관을 이어 가요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 처음과 지금 견주어 자기 평가하기', minutes: 12, tool: 'timer',
              task: '처음과 지금의 나를 견주어 점수를 적고, 다음에 이어 갈 것을 점검해요.',
              teacher: '"1점이 가장 낮고 5점이 가장 높아요. 친구와 견주지 말고 처음의 나와 견주어요." 점수가 낮아도 자란 점이 있다고 말해 준다. 모두 5점을 주는 학생에게는 가장 부족한 한 가지를 찾게 한다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '처음 활동 때와 지금의 나를 1~5점으로 적어요.', toolOptions: { fields: [{ label: '내 몸 이해(처음)', unit: '점', max: 5 }, { label: '내 몸 이해(지금)', unit: '점', max: 5 }, { label: '습관 지키기(처음)', unit: '점', max: 5 }, { label: '습관 지키기(지금)', unit: '점', max: 5 }] }, target: { records: true }, difficulty: 0.15 },
                { prompt: '단원에서 자란 점을 점검 목록에 표시해요.', target: { selfCheck: ['잘하는 움직임을 말할 수 있어요', '운동 계획표를 만들 수 있어요', '앉은 시간을 줄이는 방법을 알아요', '이레 동안 습관을 지켜 보았어요'] }, difficulty: 0.1 },
                { prompt: '다음에 이어 갈 것을 점검 목록에 표시해요.', target: { selfCheck: ['이어 갈 한 가지를 정했어요', '도움을 받을 사람을 정했어요', '몸이 아프면 멈추고 알릴 거예요'] }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"이 단원을 마치며 내 몸에게 해 주고 싶은 말은 무엇인가요?" 몇 명이 발표한다. 단원이 끝나도 계획과 표시를 이어 가라고 말하고 마친다. 출구 1번을 틀린 학생은 카드가 몸·계획·습관 가운데 어디에 가까운지 다시 말하게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { topic: '단원에서 배운 것', slots: ['몸의 특징', '운동 계획', '생활 습관'], cards: ['어깨너비와 팔 길이는 사람마다 달라요', '다음 주 달력에 요일과 운동을 써요', '밥 먹기 전 손 씻기를 이레 동안 표시해요'] }, prompt: '새 카드를 몸의 특징·운동 계획·생활 습관으로 나누어요.', target: { sort: { '몸의 특징': ['어깨너비와 팔 길이는 사람마다 달라요'], '운동 계획': ['다음 주 달력에 요일과 운동을 써요'], '생활 습관': ['밥 먹기 전 손 씻기를 이레 동안 표시해요'] } }, difficulty: 0.25 },
              { type: 'choice', prompt: '이 단원에서 배운 것으로 알맞은 것은 무엇인가요?', options: ['몸집이 큰 사람이 이겨요', '작은 계획과 표시와 도움으로 습관을 이어 가요', '계획은 세우면 저절로 지켜져요'], answer: 1, difficulty: 0.15, explain: '작은 계획, 표시, 도움이 습관을 이어 가게 해요.' },
              MOOD('이 단원을 마친 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '단원 돌아보기',
          items: [
            { type: 'table', prompt: '처음과 지금의 나를 1~5점으로 쓰세요.', columns: ['항목', '처음', '지금'], cells: [['내 몸 이해', '', ''], ['운동 계획', '', ''], ['생활 습관 지키기', '', '']] },
            { type: 'check', prompt: '자란 점에 ✓ 하세요.', options: ['잘하는 움직임을 말할 수 있어요', '운동 계획을 세울 수 있어요', '앉은 시간을 줄일 수 있어요', '습관을 이레 동안 지켜 보았어요'] },
            { type: 'choice', prompt: '가장 재미있었던 부분에 ○ 하세요.', options: ['내 몸과 계획', '운동과 건강 습관', '생활 습관 실천'], answer: '스스로 고르기' },
            { type: 'short', prompt: '내 몸에게 해 주고 싶은 말을 한 문장으로 쓰세요.' },
          ],
          easy: {
            note: '처음의 나와 지금의 나를 견주어 봐요. 조금이라도 자랐으면 별을 더 주어요.',
            items: [
              { type: 'choice', prompt: '가장 기억에 남는 부분에 ○ 하세요.', options: ['내 몸', '운동 계획', '생활 습관'], answer: '스스로 고르기' },
              { type: 'short', prompt: '이 단원에서 잘하게 된 것 하나를 쓰세요.' },
              { type: 'draw', prompt: '가장 기억에 남는 활동을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 맞는 칸에 놓으면 바로 알려 주고, 점수 칸은 처음 값부터 한 칸씩 바꿔 적어요.',
          base: '카드를 모두 놓은 뒤 확인해 스스로 고쳐요.',
          challenge: '자기 평가마다 근거가 된 활동지를 찾아 짝에게 설명해요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 습관은 며칠 하다 말아도 저절로 남는다고 여긴다 → 계획·표시·도움이 있어야 이어 간다고 되짚는다. ② 자기 평가를 친구와 견주어 낮게 준다 → 처음의 나와 견준다. ③ 세 부분이 따로 논다고 느낀다 → 몸을 알고 계획을 세우고 습관으로 잇는 한 흐름이라고 말한다. 개인의 몸·수면·식사 기록은 평가하거나 비교하지 않는다.',
      }),
    ],
  });
})();
