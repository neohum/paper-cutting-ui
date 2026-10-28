/* 4학년 1학기 체육 2. 스포츠 — 46차시.
 * 몸으로 하는 활동(주고받기·몰기·평균대·오르기·줄넘기·모둠 게임)은 교구가 판정하지 않는다. 교구는 계획(차례·구간 타이머)·관찰(장면 나누기·그래프 읽기)·
 * 판단(빈 곳·안전·규칙 장면)·기록과 스스로 점검을 맡고, 실제 움직임은 task·teacher·짝 활동(free)·활동지에 적어 교사가 관찰한다.
 * 그래프의 수(성공 횟수·기록)는 설명을 위해 지은 예시 자료다. 학생 이름 예시는 가명(민지·준호·서연·도윤)만 쓴다.
 */
(function () {
  const UNIT = 'g4-pe-1-02';
  const CU = 'g4-체육-1학기-2';
  const BASE = { schema: 'edu-lesson.v1', grade: 4, subject: '체육', unitTitle: '2. 스포츠', minutes: 40, formats: ['chromebook', 'projector', 'print'] };
  // 체육은 units-map.json 에 없어 check-unit 이 units-index.json 의 단원 성취기준만 받는다.
  // 차시 묶음별: 1~10 전략형 스포츠 · 11~19 생태형 스포츠 · 20~28 다양한 환경과 안전 · 29~37 자신감 있는 도전 · 38~46 최선과 규칙.
  const stdOf = (n) => (n <= 10 ? '[4체02-06]' : n <= 19 ? '[4체02-07]' : n <= 28 ? '[4체02-10]' : n <= 37 ? '[4체02-08]' : '[4체02-09]');
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
  const FREE = (prompt) => ({ prompt, free: true });
  const MOOD = (prompt) => ({ type: 'mood', prompt });
  const LV = { easy: {}, base: {}, challenge: {} };
  const CARD = { easy: { live: true, instant: true }, base: {}, challenge: {} };
  const BRANCH = { easy: {}, base: {}, challenge: { revealAfterCheck: true } };
  // 안전 약속(차시마다 골라 쓴다)
  const SPACE = '짝이나 모둠과 두 팔을 벌려 닿지 않을 만큼 떨어져서 활동해요.';
  const BALL = '공이 굴러가면 둘레를 먼저 살피고 걸어서 주워 와요. 다른 모둠 쪽으로 뛰어들지 않아요.';
  const FACE = '공은 친구 가슴 높이로 보내고, 얼굴 쪽으로 세게 보내지 않아요.';
  const STOP = '어지럽거나 숨이 너무 차면 바로 멈추고 선생님께 말해요.';
  const SIGNAL = '호루라기(멈춤 신호)를 들으면 바로 제자리에 서요.';
  const SHOE = '신발 끈을 단단히 묶고, 바닥의 물기나 돌을 먼저 살펴요.';
  const BEAM = '평균대·오름 기구에는 한 사람씩 오르고, 앞사람이 내려온 뒤 출발해요.';
  const HOLD = '기구를 오르내릴 때는 손발 넷 가운데 셋을 늘 기구에 붙여 두어요.';
  const MAT = '기구 아래에 매트가 깔려 있는지 확인하고, 뛰어내리지 않고 걸어서 내려와요.';
  const OUT = '바깥 활동은 정해진 구역 안에서만 하고, 혼자 떨어지지 않고 짝과 함께 다녀요.';
  const ROPE = '줄넘기 줄은 내 둘레 안에서만 돌리고, 쓰지 않을 때는 접어서 손에 쥐어요.';
  const RULE = '부딪힘이 생기면 경기를 멈추고 다친 친구가 없는지 먼저 살펴요.';

  PaperLessons.registerUnit({
    id: UNIT, schema: 'edu-unit.v1', catalogUnit: CU,
    grade: 4, subject: '체육', unitTitle: '2. 스포츠',
    flow: '1~10차시는 공을 보내는 움직임과 받는 움직임을 나누고, 빈 곳·거리·세기라는 원리를 익힌 뒤 주고받기·몰기·넘기기로 해 보고, 끊긴 까닭을 거리와 세기로 나누어 고칩니다. 11~19차시는 학교 안에서 균형이 필요한 곳과 조심할 점을 찾고, 낮은 평균대·오름 기구·학교 숲 지도 걷기를 해 본 뒤 흔들린 자세를 짚어 다음 자세를 정합니다. 20~28차시는 체육관·운동장·놀이터와 날씨에 따라 달라지는 안전 수칙을 견주고, 활동 전에 위험한 곳을 살펴 알리며, 위험할 뻔한 순간을 나누어 새 안전 규칙을 제안합니다. 29~37차시는 어려워 보이는 동작을 낮은 단계로 나누어 도전하고, 성공 횟수를 지난 기록과 견주어 다음 단계를 스스로 고릅니다. 38~46차시는 규칙이 왜 필요한지, 실수와 규칙 어김이 어떻게 다른지 알고, 모둠 게임에서 규칙과 차례를 지키며 끝까지 참여한 뒤 지킨 규칙과 고칠 행동을 돌아보며 단원을 마칩니다.',
    refs: {},
    lessons: [
      // ───────────────────────── 1 ─────────────────────────
      L(1, {
        title: '공을 보내는 움직임과 받는 움직임 나누기',
        objective: '여러 공 운동 장면을 보고 공을 보내는 움직임(던지기·차기·치기·굴리기)과 받는 움직임(잡기·멈추기)으로 나누어 이름 붙일 수 있다.',
        illustration: art('two children rolling and catching a soft ball on a sunny school field, with dotted arrows showing the ball going back and forth', [
          { motif: 'sun', x: 410, y: 54, s: 0.8 }, { motif: 'cloud', x: 100, y: 50 }, { motif: 'hills', y: 208 },
          { motif: 'tree', x: 60, y: 210 }, { motif: 'tree', x: 430, y: 212, s: 0.8 },
          { motif: 'text', x: 240, y: 128, text: '보내고, 받고!', size: 26 },
        ]),
        safety: [SPACE, BALL, SHOE],
        stages: stages(
          {
            teacher: '부드러운 공 하나를 들고 묻는다. "공으로 하는 운동을 아는 대로 말해 볼까요?" 축구·피구·배구·발야구가 나오면 칠판에 적는다. 교사가 한 학생과 공을 굴려 주고받아 보인 뒤 "공이 오가려면 두 사람이 각각 무엇을 했나요?"라고 물어 보내는 움직임과 받는 움직임이 짝을 이룬다는 것을 짚는다. 이 단원에서는 공 운동·자연 속 운동·안전·도전·규칙을 차례로 배운다고 알려 준다.',
            student: '선생님과 친구가 공을 주고받는 모습을 보고, 두 사람이 각각 어떤 움직임을 했는지 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 장면 카드를 보내기·받기로 나누기', minutes: 12, tool: 'mindmap',
              task: '공 운동 장면 카드를 보내는 움직임과 받는 움직임으로 나누어요. 나눈 뒤 카드 동작을 제자리에서 공 없이 흉내 내 봐요.',
              teacher: '"공이 내 몸에서 떠나면 보내기, 내 몸으로 들어오면 받기예요." 카드를 나눈 학생에게 그 동작을 공 없이 해 보게 한다. 잡기를 "받는 사람은 가만히 서 있기만 하면 된다"고 말하는 학생에게 손과 몸이 공 쪽으로 움직여야 받을 수 있다고 짚는다.',
              levels: CARD,
              items: [
                { prompt: '장면 카드를 공을 보내는 움직임과 받는 움직임 가지로 나누어요.', toolOptions: { topic: '공과 움직임', slots: ['공을 보내요', '공을 받아요'], cards: ['손으로 공 던지기', '발로 공 차기', '두 손으로 공 잡기', '발바닥으로 공 멈추기'] }, target: { sort: { '공을 보내요': ['손으로 공 던지기', '발로 공 차기'], '공을 받아요': ['두 손으로 공 잡기', '발바닥으로 공 멈추기'] } }, levels: { easy: { state: { at: { '손으로 공 던지기': 0 } } }, challenge: { prompt: '장면 카드를 보내는 움직임과 받는 움직임으로 나누어요. 공이 오가지 않는 카드는 어느 가지에도 넣지 않아요.', toolOptions: { cards: ['손으로 공 던지기', '발로 공 차기', '두 손으로 공 잡기', '발바닥으로 공 멈추기', '공 없이 제자리 뛰기'] } } }, difficulty: 0.1,
                  hints: ['공이 내 몸에서 떠나는 동작인지, 내 몸으로 들어오는 동작인지 생각해요.'] },
                { prompt: '경기 장면에 어울리는 움직임 카드를 이어요.', toolOptions: { mode: 'match', topic: '이 장면에서는?', slots: [{ id: 'bk', label: '농구에서 친구에게 공을 줄 때' }, { id: 'sc', label: '축구에서 굴러온 공을 세울 때' }, { id: 'dg', label: '피구에서 날아온 공을 받을 때' }], cards: ['가슴 앞에서 두 손으로 밀어 보내기', '발바닥으로 공 위를 눌러 멈추기', '두 팔로 공을 감싸 안아 잡기'] }, target: { match: { bk: '가슴 앞에서 두 손으로 밀어 보내기', sc: '발바닥으로 공 위를 눌러 멈추기', dg: '두 팔로 공을 감싸 안아 잡기' } }, levels: { easy: { state: { at: { '가슴 앞에서 두 손으로 밀어 보내기': 0 } } } }, difficulty: 0.15 },
                { prompt: '공을 보내는 움직임만 바구니에 골라 담아요.', toolOptions: { mode: 'pick', topic: '보내는 움직임', cards: ['공 굴리기', '튀겨서 패스하기', '날아온 공 잡기', '배트로 공 치기', '굴러온 공 멈추기'] }, target: { pick: ['공 굴리기', '튀겨서 패스하기', '배트로 공 치기'] }, difficulty: 0.2,
                  conclude: '공을 굴리고, 튀기고, 치는 것은 모두 공을 내 몸에서 떠나보내는 움직임이에요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 안전 점검하고 짝과 굴려 주고받기', minutes: 14, tool: 'timer',
              task: '공 놀이 자리를 살펴 안전 점검을 표시하고, 몸풀기 차례를 세워요. 그다음 짝과 다섯 걸음 떨어져 공을 굴려 주고받아요.',
              teacher: '"눈으로 직접 본 것만 눌러요." 굴려 주고받기에서는 받는 사람이 무릎을 굽혀 두 손을 바닥 가까이 내미는지 본다. 횟수는 짝끼리만 견주고 다른 모둠과 견주지 않는다고 말해 준다.',
              levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
              items: [
                { prompt: '공 놀이를 하기 전에 둘레를 살펴보고 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['공이 굴러갈 쪽에 친구나 물건이 없어요', '짝과 다섯 걸음 떨어져 마주 섰어요', '공에 바람이 알맞게 들어 있어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '공 놀이 전 몸풀기 카드를 작은 관절 풀기에서 온몸 움직이기, 공 활동 차례로 놓아요.', toolOptions: { cards: ['짝과 공 굴려 주고받기', '손목·발목 돌리기', '제자리에서 가볍게 뛰기'] }, target: { order: ['손목·발목 돌리기', '제자리에서 가볍게 뛰기', '짝과 공 굴려 주고받기'] }, levels: { easy: { state: { order: ['손목·발목 돌리기', '짝과 공 굴려 주고받기', '제자리에서 가볍게 뛰기'] } } }, difficulty: 0.15 },
                { prompt: '짝과 1분 동안 공을 굴려 주고받고, 끊기지 않고 이어 간 횟수를 두 번 재어 적어요.', toolOptions: { fields: ['첫째 1분', '둘째 1분'], unit: '번' }, target: { records: true }, levels: { challenge: { toolOptions: { fields: ['첫째 1분', '둘째 1분', { label: '둘째가 첫째보다 늘어난 횟수', unit: '번' }] } } }, difficulty: 0.15 },
                FREE('굴려 보내는 사람과 받는 사람을 정해 다섯 번씩 하고 역할을 바꾸어 해 본 뒤 표시해요.'),
              ],
            },
          ],
          {
            teacher: '"오늘 공을 받을 때 몸의 어디를 움직였나요?" 두세 명에게 듣고, 받기도 가만히 있는 것이 아니라 움직이는 기술이라고 정리한다. 출구 1번에서 새 장면을 잘못 나눈 학생은 공이 몸에서 떠나는지 들어오는지를 다시 묻는다. 손목·발목을 천천히 돌리며 정리 운동을 한다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { topic: '공과 움직임', slots: ['공을 보내요', '공을 받아요'], cards: ['탁구채로 공 넘기기', '튀어 오른 공 두 손으로 잡기', '머리 위로 공 던지기'] }, prompt: '새 장면 카드를 보내는 움직임과 받는 움직임으로 나누어요.', target: { sort: { '공을 보내요': ['탁구채로 공 넘기기', '머리 위로 공 던지기'], '공을 받아요': ['튀어 오른 공 두 손으로 잡기'] } }, difficulty: 0.15 },
              { type: 'choice', prompt: '다음 가운데 공을 받는 움직임은 무엇인가요?', options: ['공 차기', '공 멈추기', '공 굴리기'], answer: 1, difficulty: 0.1, explain: '굴러온 공을 멈추는 것은 공이 내 몸으로 들어오는 받는 움직임이에요.' },
              MOOD('공 운동 단원을 시작한 오늘 마음은 어떤가요?'),
            ],
          },
        ),
        worksheet: {
          title: '보내는 움직임, 받는 움직임',
          items: [
            { type: 'table', prompt: '운동마다 공을 보내는 움직임과 받는 움직임을 하나씩 쓰세요.', columns: ['운동', '보내는 움직임', '받는 움직임'], cells: [['피구', '', ''], ['축구', '', ''], ['발야구', '', '']] },
            { type: 'choice', prompt: '공을 보내는 움직임이 아닌 것에 ○ 하세요.', options: ['던지기', '차기', '잡기', '굴리기'], answer: '잡기' },
            { type: 'table', prompt: '짝과 굴려 주고받기에서 이어 간 횟수를 쓰세요.', columns: ['때', '첫째 1분', '둘째 1분'], cells: [['이어 간 횟수', '', '']] },
            { type: 'check', prompt: '오늘 지킨 안전 약속에 ✓ 하세요.', options: ['짝과 알맞게 떨어져 섰어요', '굴러간 공은 걸어서 주워 왔어요', '신발 끈을 묶었어요'] },
            { type: 'short', prompt: '공을 받는 사람도 움직여야 하는 까닭을 한 줄로 쓰세요.' },
          ],
          easy: {
            note: '공이 내 몸에서 떠나면 보내기, 내 몸으로 들어오면 받기예요.',
            items: [
              { type: 'choice', prompt: '공을 받는 움직임에 ○ 하세요.', options: ['차기', '잡기', '던지기'], answer: '잡기' },
              { type: 'short', prompt: '오늘 해 본 공 놀이 이름을 쓰세요.' },
              { type: 'draw', prompt: '짝과 공을 굴려 주고받는 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 맞는 가지에 놓으면 바로 표시되고, 틀리면 까닭을 말해 주고 되돌아와요. 카드 한 장이나 첫 차례가 미리 놓여 있어요.',
          base: '카드를 모두 놓은 뒤 확인해 스스로 고쳐요.',
          challenge: '공이 오가지 않는 함정 카드가 섞여 있고, 기록판에 늘어난 횟수를 셈해 적는 칸과 시간 재기가 더해져요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 받는 사람은 가만히 서 있으면 된다고 여긴다 → 굴려 주고받기에서 무릎을 굽히고 손을 내미는 모습을 짚어 준다. ② 공을 세게 보낼수록 좋다고 여긴다(다음 차시들에서 다룸) → 오늘은 짝이 받기 좋은 속도로 굴리게 한다. ③ 공 없이 하는 몸풀기를 건너뛴다 → 손목·발목부터 풀어야 공을 받을 때 삐지 않는다고 말한다. 실제 굴리기·받기는 교구가 판정하지 않으므로 교사가 관찰한다.',
      }),
      // ───────────────────────── 2 ─────────────────────────
      L(2, {
        title: '수비가 없는 빈 곳 찾아 공 보내기',
        objective: '공을 주고받는 경기 장면에서 수비가 없는 빈 곳을 찾아 공을 보낼 곳을 고르고, 빈 곳으로 보내면 좋은 까닭을 말할 수 있다.',
        illustration: art('a top view of a small paper sports court with two teams of round tokens and a bright open space marked by a dotted circle', [
          { motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'cloud', x: 90, y: 48 }, { motif: 'hills', y: 214 },
          { motif: 'star', x: 330, y: 150, s: 0.9 }, { motif: 'flower', x: 70, y: 214 },
          { motif: 'text', x: 240, y: 124, text: '빈 곳은 어디일까?', size: 24 },
        ]),
        safety: [SPACE, BALL, FACE],
        stages: stages(
          {
            teacher: '교사가 두 학생을 세우고 한 학생 바로 앞에 수비 학생을 세운다. "이 친구에게 공을 보내면 어떻게 될까요?" 대답을 들은 뒤 수비가 없는 다른 학생에게 보내 보인다. "공을 세게만 보내면 수비를 이길 수 있을까요?"라고 물어, 세기보다 어디로 보내는지가 먼저라는 생각을 열어 둔다.',
            student: '수비 친구가 서 있는 쪽과 비어 있는 쪽을 보고, 공을 어디로 보내면 좋을지 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 경기 장면에서 보낼 곳 고르기', minutes: 9, tool: 'emotion',
              task: '경기 장면을 읽고 공을 어디로 보낼지 골라요. 고른 까닭을 짝에게 한 문장으로 말해요.',
              teacher: '"수비가 어디에 서 있나요? 그럼 빈 곳은?" 세게 던지는 보기를 고른 학생에게 "세게 던진 공도 수비 손이 닿는 곳이면 어떻게 될까요?"라고 되묻는다.',
              levels: BRANCH,
              items: [
                { prompt: '패스 게임 장면이에요. 공을 누구에게 보낼지 골라요.', toolOptions: { mode: 'branch', situation: '우리 편 민지는 왼쪽, 준호는 오른쪽에 있어요. 수비 친구가 민지 바로 앞에 서 있어요.', ask: '공을 어디로 보낼까요?', motif: 'sun', choices: [{ id: 'jun', text: '수비가 없는 준호에게 보내요', result: '준호가 편하게 받아 앞으로 나가요', mood: '신남' }, { id: 'min', text: '민지에게 아주 세게 던져요', result: '수비 친구가 공을 가로채요', mood: '속상함', why: '민지 바로 앞에 누가 서 있는지 다시 보세요.' }, { id: 'hold', text: '공을 든 채 오래 기다려요', result: '수비가 다가와 보낼 곳이 좁아져요', mood: '걱정', why: '기다리는 동안 수비도 움직여요.' }] }, target: { choice: 'jun' }, levels: { easy: { toolOptions: { choices: [{ id: 'jun', text: '수비가 없는 준호에게 보내요', result: '준호가 편하게 받아 앞으로 나가요', mood: '신남' }, { id: 'min', text: '민지에게 아주 세게 던져요', result: '수비 친구가 공을 가로채요', mood: '속상함', why: '민지 바로 앞에 누가 서 있는지 다시 보세요.' }] } } }, difficulty: 0.1 },
                { prompt: '풍선 배구 장면이에요. 풍선을 어디로 넘길지 골라요.', toolOptions: { mode: 'branch', situation: '상대편 두 명이 모두 그물 바로 앞에 붙어 서 있어요. 뒤쪽은 텅 비어 있어요.', ask: '풍선을 어디로 넘길까요?', motif: 'cloud', choices: [{ id: 'back', text: '상대편 뒤쪽 빈 곳으로 높이 넘겨요', result: '상대가 뒤로 달려가다 풍선을 놓쳐요', mood: '신남' }, { id: 'front', text: '그물 바로 앞 친구 쪽으로 넘겨요', result: '상대가 바로 쳐서 되넘겨요', mood: '속상함', why: '상대 두 명이 어디에 모여 있는지 보세요.' }, { id: 'out', text: '코트 밖으로 세게 쳐요', result: '풍선이 선 밖에 떨어져 상대 점수가 돼요', mood: '속상함', why: '빈 곳은 코트 안에 있어야 점수가 나요.' }] }, target: { choice: 'back' }, levels: { easy: { toolOptions: { choices: [{ id: 'back', text: '상대편 뒤쪽 빈 곳으로 높이 넘겨요', result: '상대가 뒤로 달려가다 풍선을 놓쳐요', mood: '신남' }, { id: 'front', text: '그물 바로 앞 친구 쪽으로 넘겨요', result: '상대가 바로 쳐서 되넘겨요', mood: '속상함', why: '상대 두 명이 어디에 모여 있는지 보세요.' }] } } }, difficulty: 0.2 },
                { prompt: '발야구 장면이에요. 굴러온 공을 어디로 찰지 골라요.', toolOptions: { mode: 'branch', situation: '수비 친구들이 모두 왼쪽 마당에 모여 서 있어요.', ask: '공을 어디로 찰까요?', motif: 'tree', choices: [{ id: 'right', text: '오른쪽 빈 마당으로 차요', result: '공을 쫓는 사이 1루까지 달려가요', mood: '신남' }, { id: 'left', text: '왼쪽으로 있는 힘껏 차요', result: '수비가 공을 바로 잡아 아웃이 돼요', mood: '속상함', why: '세게 찬 공도 수비가 모인 곳으로 가면 잡혀요.' }, { id: 'up', text: '하늘 높이 띄워 차요', result: '수비가 떨어지는 공을 잡아요', mood: '걱정', why: '높이 뜬 공은 수비가 자리 잡을 시간을 줘요.' }] }, target: { choice: 'right' }, levels: { easy: { toolOptions: { choices: [{ id: 'right', text: '오른쪽 빈 마당으로 차요', result: '공을 쫓는 사이 1루까지 달려가요', mood: '신남' }, { id: 'left', text: '왼쪽으로 있는 힘껏 차요', result: '수비가 공을 바로 잡아 아웃이 돼요', mood: '속상함', why: '세게 찬 공도 수비가 모인 곳으로 가면 잡혀요.' }] } } }, difficulty: 0.2,
                  conclude: '세게 보내는 것보다 수비가 없는 빈 곳으로 보내는 것이 먼저예요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 빈 곳과 그 까닭 정리하기', minutes: 9, tool: 'mindmap',
              task: '보낼 자리 카드를 빈 곳과 막힌 곳으로 나누고, 빈 곳으로 보내면 좋은 까닭을 골라요.',
              teacher: '"빈 곳이란 그냥 아무도 없는 땅일까요, 우리 편이 받을 수 있는 곳일까요?" 수비 두 명 사이 좁은 틈을 빈 곳으로 넣은 학생에게 수비 손이 닿는 거리를 팔로 재어 보게 한다.',
              levels: CARD,
              items: [
                { prompt: '공을 보낼 자리 카드를 빈 곳과 막힌 곳으로 나누어요.', toolOptions: { topic: '보낼 자리', slots: ['빈 곳', '막힌 곳'], cards: ['아무도 없는 오른쪽 넓은 땅', '우리 편이 뛰어드는 앞쪽 공간', '수비 두 명 사이 좁은 틈', '수비가 붙어 선 친구 발 앞'] }, target: { sort: { '빈 곳': ['아무도 없는 오른쪽 넓은 땅', '우리 편이 뛰어드는 앞쪽 공간'], '막힌 곳': ['수비 두 명 사이 좁은 틈', '수비가 붙어 선 친구 발 앞'] } }, levels: { easy: { state: { at: { '아무도 없는 오른쪽 넓은 땅': 0 } } } }, difficulty: 0.15 },
                { prompt: '수비가 선 자리에 맞게 공을 보낼 곳 카드를 이어요.', toolOptions: { mode: 'match', topic: '수비를 보고', slots: [{ id: 'l', label: '수비가 왼쪽에 모여 있어요' }, { id: 'f', label: '수비가 앞쪽에 붙어 있어요' }, { id: 'b', label: '수비가 뒤쪽에 물러나 있어요' }], cards: ['오른쪽으로 보내요', '뒤쪽 깊숙이 보내요', '앞쪽에 짧게 보내요'] }, target: { match: { l: '오른쪽으로 보내요', f: '뒤쪽 깊숙이 보내요', b: '앞쪽에 짧게 보내요' } }, levels: { easy: { state: { at: { '오른쪽으로 보내요': 0 } } } }, difficulty: 0.2 },
                { prompt: '빈 곳으로 공을 보내면 좋은 까닭만 골라요.', toolOptions: { mode: 'pick', topic: '빈 곳으로 보내면', cards: ['받는 친구가 편하게 받아요', '수비가 가로채기 어려워요', '받은 뒤 다음 움직임을 할 틈이 생겨요', '공을 세게 차는 힘이 길러져요'] }, target: { pick: ['받는 친구가 편하게 받아요', '수비가 가로채기 어려워요', '받은 뒤 다음 움직임을 할 틈이 생겨요'] }, levels: { challenge: { prompt: '빈 곳으로 공을 보내면 좋은 까닭만 골라요. 그럴듯하지만 틀린 카드가 섞여 있어요.', toolOptions: { cards: ['받는 친구가 편하게 받아요', '수비가 가로채기 어려워요', '받은 뒤 다음 움직임을 할 틈이 생겨요', '공을 세게 차는 힘이 길러져요', '수비와 부딪혀 공을 빼앗기 쉬워요'] } } }, difficulty: 0.2 },
              ],
            },
            {
              id: 'a3', title: '활동 3. 세 사람이 빈 곳 패스 해 보기', minutes: 8, tool: 'timer',
              task: '세 사람이 보내는 사람·받는 사람·수비가 되어, 받는 사람은 수비가 없는 쪽으로 옮기고 보내는 사람은 그 빈 곳으로 굴려요. 역할을 바꾸어 해요.',
              teacher: '"받는 사람이 먼저 빈 곳으로 움직여야 보낼 곳이 생겨요." 수비는 두 팔을 벌리고 제자리에서 한 걸음만 움직이게 해 부딪힘을 막는다. 기록은 열 번 가운데 수비를 피해 받은 횟수만 센다.',
              levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
              items: [
                { prompt: '빈 곳 패스를 하기 전에 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['수비는 한 걸음 안에서만 움직이기로 했어요', '공은 굴려서 보내기로 했어요', '모둠 사이가 충분히 떨어져 있어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '열 번 굴려 보내기에서 수비를 피해 받은 횟수를 역할마다 적어요.', toolOptions: { fields: ['내가 보낼 때', '내가 받을 때'], unit: '번', max: 10 }, target: { records: true }, difficulty: 0.15 },
                FREE('세 역할(보내기·받기·수비)을 모두 한 번씩 해 보고 표시해요.'),
              ],
            },
          ],
          {
            teacher: '"오늘 공을 받기 좋았던 때는 언제였나요?" 받는 사람이 빈 곳으로 먼저 움직였을 때라는 대답을 끌어낸다. 출구 1번에서 세게 보내는 보기를 고른 학생은 다음 시간 짝 활동에서 먼저 살핀다. 천천히 걸으며 숨을 고른다.',
            exitTicket: [
              { type: 'tool', tool: 'emotion', options: { mode: 'branch', situation: '피구 대신 하는 굴리기 게임이에요. 상대편이 모두 가운데에 모여 있어요.', ask: '공을 어디로 굴릴까요?', motif: 'sun', choices: [{ id: 'side', text: '빈 옆쪽 끝으로 굴려요', result: '우리 편이 공을 이어 받아요', mood: '기쁨' }, { id: 'mid', text: '가운데로 세게 굴려요', result: '상대가 공을 막아 가져가요', mood: '속상함' }] }, prompt: '굴리기 게임 장면을 읽고 공을 보낼 곳을 골라요.', target: { choice: 'side' }, difficulty: 0.15 },
              { type: 'choice', prompt: '공을 빈 곳으로 보내면 좋은 점으로 알맞은 것은?', options: ['수비가 가로채기 어려워요', '공이 더 빨라져요', '받는 친구가 움직이지 않아도 돼요'], answer: 0, difficulty: 0.15, explain: '빈 곳에는 수비 손이 닿지 않아 공을 지킬 수 있어요.' },
              MOOD('빈 곳을 찾아 공을 보내 본 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '빈 곳으로 보내요',
          items: [
            { type: 'choice', prompt: '수비가 오른쪽에 모여 있을 때 공을 보낼 곳에 ○ 하세요.', options: ['오른쪽', '왼쪽 빈 곳', '수비 바로 앞'], answer: '왼쪽 빈 곳' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '공은 세게 보내는 것보다 수비가 없는 ___ 으로 보내는 것이 먼저예요.', answer: '빈 곳' },
            { type: 'table', prompt: '세 사람 빈 곳 패스에서 열 번 가운데 성공한 횟수를 쓰세요.', columns: ['역할', '성공한 횟수'], cells: [['보낼 때', ''], ['받을 때', '']] },
            { type: 'draw', prompt: '수비 한 명(●)과 받는 친구(○)를 그리고, 공을 보낼 빈 곳에 화살표를 그리세요.' },
            { type: 'short', prompt: '받는 사람이 빈 곳으로 먼저 움직여야 하는 까닭을 쓰세요.' },
          ],
          easy: {
            note: '수비가 서 있는 곳을 먼저 찾고, 그 반대쪽을 보세요.',
            items: [
              { type: 'choice', prompt: '수비가 앞에 붙어 있으면 어디로 보내면 좋을까요?', options: ['앞쪽', '뒤쪽 빈 곳'], answer: '뒤쪽 빈 곳' },
              { type: 'check', prompt: '오늘 해 본 역할에 ✓ 하세요.', options: ['보내는 사람', '받는 사람', '수비'] },
              { type: 'short', prompt: '빈 곳은 어떤 곳인지 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '장면마다 보기가 두 개로 줄어요. 카드를 맞는 가지에 놓으면 바로 표시돼요.',
          base: '보기 세 개 가운데 고르고, 카드를 모두 놓은 뒤 확인해요.',
          challenge: '보기를 고른 뒤 결과가 맞힌 다음에만 보여 스스로 장면을 읽어야 해요. 그럴듯한 함정 카드가 섞여 있어요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 공을 세게 보내는 것이 언제나 좋다고 여긴다 → 세게 던진 공도 수비 손이 닿는 곳이면 빼앗긴다는 것을 세 사람 활동에서 직접 보게 한다. ② 빈 곳을 "아무도 없는 땅"으로만 여겨 우리 편이 받을 수 없는 곳으로 보낸다 → 받는 사람이 먼저 움직여 만든 빈 곳으로 보내게 한다. ③ 수비가 몸으로 막으려다 부딪힌다 → 수비는 한 걸음 안에서만 팔을 벌린다.',
      }),
      // ───────────────────────── 3 ─────────────────────────
      L(3, {
        title: '거리에 맞게 공 보내는 세기 조절하기',
        objective: '짝과의 거리에 따라 공을 보내는 세기를 고르고, 너무 세게 보내면 받기 어려운 까닭을 기록 그래프로 설명할 수 있다.',
        illustration: art('three pairs of children standing at near, middle and far distances passing a ball, with small, medium and large paper arcs showing different strengths', [
          { motif: 'sun', x: 410, y: 52, s: 0.7 }, { motif: 'cloud', x: 120, y: 50 }, { motif: 'hills', y: 210 },
          { motif: 'tree', x: 50, y: 212, s: 0.8 }, { motif: 'flower', x: 430, y: 216 },
          { motif: 'text', x: 240, y: 128, text: '가까우면 살짝, 멀면 크게', size: 22 },
        ]),
        safety: [SPACE, FACE, BALL],
        stages: stages(
          {
            teacher: '두 걸음 앞에 선 학생에게 교사가 공을 아주 세게 보내는 시늉만 하고 멈춘다. "이렇게 세게 보내면 친구가 받을 수 있을까요?" 이어서 열 걸음 떨어진 학생에게는 손목만 써서 살짝 보내 공이 중간에 멈추는 것을 보인다. "그럼 세기는 무엇을 보고 정해야 할까요?" 거리라는 대답을 끌어낸다.',
            student: '가까운 친구와 먼 친구에게 공을 보낼 때 세기가 어떻게 달라야 할지 생각해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 세기별 받기 기록 그래프 읽기', minutes: 9, tool: 'chart',
              task: '다른 반 친구들이 세기를 바꾸어 열 번씩 보내 본 기록 그래프예요. 그래프를 읽고 물음에 답해요.',
              teacher: '"막대가 가장 긴 것이 무엇인가요? 아주 세게 보낸 막대는요?" 세게 보낸 공이 짝 손을 튕겨 나가거나 짝을 지나쳐 성공이 적었다는 것을 짚는다. 그래프의 수는 예시 기록이라고 알려 준다.',
              levels: { easy: { showValues: true }, base: {}, challenge: {} },
              items: [
                { prompt: '세 걸음 거리 기록이에요. 짝이 가장 많이 받은 세기를 골라요.', toolOptions: { type: 'bar', mode: 'read', title: '세 걸음 거리에서 받은 횟수(10번 중)', unit: '번', xLabel: '세기', yLabel: '받은 횟수', max: 10, scale: 1, data: [['살짝', 6], ['알맞게', 9], ['아주 세게', 3]], question: '짝이 가장 많이 받은 세기는?', choices: ['살짝', '알맞게', '아주 세게'] }, target: { pick: 1 }, difficulty: 0.1 },
                { prompt: '세 걸음 거리 기록에서 알맞게 보냈을 때와 아주 세게 보냈을 때 받은 횟수의 차이를 써요.', toolOptions: { type: 'bar', mode: 'read', title: '세 걸음 거리에서 받은 횟수(10번 중)', unit: '번', xLabel: '세기', yLabel: '받은 횟수', max: 10, scale: 1, data: [['살짝', 6], ['알맞게', 9], ['아주 세게', 3]], question: '두 막대의 차이는 몇 번인가요?' }, target: { value: 6 }, difficulty: 0.25 },
                { prompt: '열 걸음 거리 기록이에요. 살짝 보낸 공을 적게 받은 까닭을 골라요.', toolOptions: { type: 'bar', mode: 'read', title: '열 걸음 거리에서 받은 횟수(10번 중)', unit: '번', xLabel: '세기', yLabel: '받은 횟수', max: 10, scale: 1, data: [['살짝', 2], ['알맞게', 8], ['아주 세게', 4]], question: '살짝 보낸 공을 적게 받은 까닭은?', choices: ['공이 짝에게 닿기 전에 멈춰서', '공이 너무 빨라 손에서 튕겨서', '짝이 공을 보지 않아서'] }, target: { pick: 0 }, difficulty: 0.25,
                  conclude: '가까울 때 세게, 멀 때 살짝 보내면 모두 받기 어려워요. 세기는 거리에 맞춰요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 거리와 세기 짝 짓기', minutes: 7, tool: 'mindmap',
              task: '짝과의 거리마다 알맞은 보내는 방법을 이어요. 세게만 보내면 생기는 일도 골라요.',
              teacher: '"팔을 얼마나 크게 흔드느냐가 세기를 정해요." 세 방법을 교사가 공 없이 보여 준 뒤 학생이 따라 하게 한다. 먼 거리에는 한 발을 내딛으며 몸 전체를 쓴다는 것을 짚는다.',
              levels: CARD,
              items: [
                { prompt: '짝과의 거리에 알맞은 보내는 방법 카드를 이어요.', toolOptions: { mode: 'match', topic: '거리와 세기', slots: [{ id: 'd2', label: '두 걸음 앞의 짝' }, { id: 'd5', label: '다섯 걸음 앞의 짝' }, { id: 'd10', label: '열 걸음 앞의 짝' }], cards: ['손목만 써서 살짝', '팔을 반쯤 흔들어 보통으로', '한 발 내딛고 팔을 크게 흔들어'] }, target: { match: { d2: '손목만 써서 살짝', d5: '팔을 반쯤 흔들어 보통으로', d10: '한 발 내딛고 팔을 크게 흔들어' } }, levels: { easy: { state: { at: { '손목만 써서 살짝': 0 } } } }, difficulty: 0.15 },
                { prompt: '가까운 짝에게 공을 세게만 보내면 생기는 일만 골라요.', toolOptions: { mode: 'pick', topic: '세게만 보내면', cards: ['짝이 공을 놓쳐요', '짝의 손가락이 아플 수 있어요', '공이 짝을 지나 멀리 굴러가요', '공이 언제나 정확하게 가요'] }, target: { pick: ['짝이 공을 놓쳐요', '짝의 손가락이 아플 수 있어요', '공이 짝을 지나 멀리 굴러가요'] }, difficulty: 0.15 },
                { prompt: '보내는 세기를 정할 때 살펴볼 것과 살펴보지 않아도 되는 것으로 나누어요.', toolOptions: { topic: '세기를 정할 때', slots: ['살펴봐요', '상관없어요'], cards: ['짝과의 거리', '짝이 받을 준비를 했는지', '내 옷 색깔', '오늘 요일'] }, target: { sort: { '살펴봐요': ['짝과의 거리', '짝이 받을 준비를 했는지'], '상관없어요': ['내 옷 색깔', '오늘 요일'] } }, levels: { easy: { state: { at: { '짝과의 거리': 0 } } } }, difficulty: 0.1 },
              ],
            },
            {
              id: 'a3', title: '활동 3. 세 거리에서 주고받기', minutes: 10, tool: 'timer',
              task: '바닥 표시(세 걸음·다섯 걸음·여덟 걸음)에 서서 거리마다 공을 다섯 번씩 보내고, 짝이 받은 횟수를 적어요.',
              teacher: '"거리가 바뀌면 팔 흔들기도 바뀌었나요?" 여덟 걸음에서 팔만 세게 휘두르는 학생에게 한 발을 내딛게 한다. 가까운 거리에서 세게 보내는 학생은 바로 멈추고 손목만 쓰게 한다.',
              levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
              items: [
                { prompt: '세 거리에서 공을 다섯 번씩 보내고, 짝이 받은 횟수를 적어요.', toolOptions: { fields: [{ label: '세 걸음', unit: '번', max: 5 }, { label: '다섯 걸음', unit: '번', max: 5 }, { label: '여덟 걸음', unit: '번', max: 5 }] }, target: { records: true }, levels: { challenge: { toolOptions: { fields: [{ label: '세 걸음', unit: '번', max: 5 }, { label: '다섯 걸음', unit: '번', max: 5 }, { label: '여덟 걸음', unit: '번', max: 5 }, { label: '세 거리에서 받은 횟수 합계', unit: '번', max: 15 }] } } }, difficulty: 0.15 },
                { prompt: '거리를 바꾸어 주고받은 뒤 해낸 것을 점검 목록에 표시해요.', target: { selfCheck: ['거리마다 팔 흔들기 크기를 바꾸었어요', '가까운 거리에서 세게 보내지 않았어요', '짝이 받을 준비를 한 뒤 보냈어요'] }, difficulty: 0.1 },
                FREE('짝과 거리를 하나 골라 받은 횟수가 가장 적었던 거리에서 다섯 번을 더 해 보고 표시해요.'),
              ],
            },
          ],
          {
            teacher: '"두 걸음 앞 친구와 열 걸음 앞 친구에게 똑같은 세기로 보내면 어떻게 될까요?" 세기는 거리에 맞춘다는 것을 학생 말로 정리하게 한다. 출구 2번을 틀린 학생은 다음 시간 짝 활동 때 거리 표시를 먼저 보게 한다. 어깨와 팔을 천천히 풀며 마친다.',
            exitTicket: [
              { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '여섯 걸음 거리에서 받은 횟수(10번 중)', unit: '번', xLabel: '세기', yLabel: '받은 횟수', max: 10, scale: 1, data: [['살짝', 4], ['알맞게', 7], ['아주 세게', 5]], question: '짝이 가장 적게 받은 세기는?', choices: ['살짝', '알맞게', '아주 세게'] }, prompt: '여섯 걸음 거리 기록 그래프를 읽고 물음에 답해요.', target: { pick: 0 }, difficulty: 0.15 },
              { type: 'choice', prompt: '두 걸음 앞 짝에게 공을 보낼 때 알맞은 방법은?', options: ['손목만 써서 살짝', '한 발 내딛고 있는 힘껏', '머리 위로 높이 던지기'], answer: 0, difficulty: 0.15, explain: '가까운 짝에게는 손목만 써서 받기 좋은 세기로 보내요.' },
              { type: 'short', prompt: '공을 보내는 세기를 무엇에 맞추어야 하는지 한 줄로 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '거리에 맞는 세기',
          items: [
            { type: 'table', prompt: '세 거리에서 다섯 번씩 보내 짝이 받은 횟수를 쓰세요.', columns: ['거리', '세 걸음', '다섯 걸음', '여덟 걸음'], cells: [['받은 횟수', '', '', '']] },
            { type: 'choice', prompt: '열 걸음 앞 짝에게 공을 보낼 때 알맞은 방법에 ○ 하세요.', options: ['손목만 써서 살짝', '한 발 내딛고 팔을 크게 흔들어', '공을 굴리지 않고 들고 걸어가기'], answer: '한 발 내딛고 팔을 크게 흔들어' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '짝이 가까우면 ___ 보내고, 멀면 팔을 크게 흔들어 보내요.', answer: '살짝' },
            { type: 'check', prompt: '세기를 정할 때 살펴볼 것에 ✓ 하세요.', options: ['짝과의 거리', '짝이 받을 준비를 했는지', '내 옷 색깔'] },
            { type: 'short', prompt: '"공은 언제나 세게 보내야 좋다"라는 말에 대한 내 생각을 쓰세요.' },
          ],
          easy: {
            note: '가까우면 손목만, 멀면 한 발 내딛고 팔을 크게!',
            items: [
              { type: 'choice', prompt: '가까운 짝에게는 어떻게 보낼까요?', options: ['살짝', '아주 세게'], answer: '살짝' },
              { type: 'short', prompt: '오늘 짝이 가장 많이 받은 거리를 쓰세요.' },
              { type: 'draw', prompt: '가까운 짝과 먼 짝에게 공을 보내는 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '그래프 막대 끝에 수가 보여요. 카드를 맞는 곳에 놓으면 바로 표시돼요.',
          base: '눈금을 읽어 그래프에서 답을 찾아요.',
          challenge: '세 거리 기록의 합계를 셈해 적고, 시간 재기로 주고받기 시간을 직접 재요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 공을 세게 보내는 것이 언제나 좋다고 여긴다 → 세 걸음 거리 그래프에서 아주 세게 보낸 막대가 가장 짧은 것을 보게 한다. ② 먼 거리에서 팔만 휘둘러 공이 엉뚱한 곳으로 간다 → 한 발을 내딛으며 몸 전체를 쓰게 한다. ③ 그래프 차이를 구할 때 두 수를 더한다 → 막대 끝을 가로로 이어 몇 칸 차이인지 세게 한다. 그래프의 수는 지은 예시 기록이다.',
      }),
      // ───────────────────────── 4 ─────────────────────────
      L(4, {
        title: '영역형·네트형·필드형 게임에서 빈 곳 견주기',
        objective: '공 게임을 영역형·네트형·필드형으로 나누고, 게임마다 공을 보내야 할 빈 곳이 어디인지 말할 수 있다.',
        illustration: art('three small paper playgrounds side by side: a goal field, a court with a low net, and a diamond-shaped base field, each with a glowing empty spot', [
          { motif: 'sun', x: 410, y: 52, s: 0.7 }, { motif: 'cloud', x: 100, y: 46 }, { motif: 'hills', y: 214 },
          { motif: 'star', x: 120, y: 150, s: 0.7 }, { motif: 'star', x: 240, y: 150, s: 0.7 }, { motif: 'star', x: 360, y: 150, s: 0.7 },
          { motif: 'text', x: 240, y: 112, text: '빈 곳은 게임마다 달라요', size: 22 },
        ]),
        safety: [SPACE, BALL, SIGNAL],
        stages: stages(
          {
            teacher: '축구 골대, 낮은 그물, 발야구 누 그림을 칠판에 나란히 붙인다. "세 게임 모두 빈 곳으로 보내는 것이 좋다고 배웠어요. 그런데 빈 곳이 어디인지는 같을까요?" 축구는 우리 편이 달려 들어갈 앞쪽, 배구는 그물 너머 상대가 없는 바닥, 발야구는 수비가 없는 마당이라는 것을 학생 대답으로 이끌어 낸다. 오늘은 세 마당을 돌며 직접 해 본다고 알린다.',
            student: '세 가지 공 게임 그림을 보고, 게임마다 공을 어디로 보내야 점수가 나는지 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 게임 갈래와 빈 곳 짝 짓기', minutes: 12, tool: 'mindmap',
              task: '공 게임 카드를 영역형·네트형·필드형으로 나누고, 갈래마다 빈 곳이 어디인지 이어요.',
              teacher: '"상대와 한 마당에 섞여 뛰나요, 그물로 나뉘어 있나요, 치고 달리나요?" 이 세 물음으로 갈래를 가르게 한다. 배드민턴을 영역형에 넣은 학생에게 상대와 섞여 뛰는지 물어본다.',
              levels: CARD,
              items: [
                { prompt: '공 게임 카드를 영역형·네트형·필드형 가지로 나누어요.', toolOptions: { topic: '공 게임 갈래', slots: ['영역형', '네트형', '필드형'], cards: ['축구', '농구', '배구', '배드민턴', '발야구', '티볼'] }, target: { sort: { '영역형': ['축구', '농구'], '네트형': ['배구', '배드민턴'], '필드형': ['발야구', '티볼'] } }, levels: { easy: { state: { at: { '축구': 0, '배구': 1 } } }, challenge: { prompt: '공 게임 카드를 세 갈래로 나누어요. 상대와 공을 주고받는 게임이 아닌 카드는 넣지 않아요.', toolOptions: { cards: ['축구', '농구', '배구', '배드민턴', '발야구', '티볼', '오래달리기'] } } }, difficulty: 0.15,
                  hints: ['상대와 한 마당에 섞여 뛰는지, 그물로 나뉘어 있는지, 공을 치고 누를 달리는지 차례로 물어보세요.'] },
                { prompt: '게임 갈래에 알맞은 빈 곳 카드를 이어요.', toolOptions: { mode: 'match', topic: '갈래마다 빈 곳', slots: [{ id: 'area', label: '영역형' }, { id: 'net', label: '네트형' }, { id: 'field', label: '필드형' }], cards: ['우리 편이 달려 들어가는 앞쪽 공간', '그물 너머 상대가 없는 바닥', '수비가 서 있지 않은 넓은 마당'] }, target: { match: { area: '우리 편이 달려 들어가는 앞쪽 공간', net: '그물 너머 상대가 없는 바닥', field: '수비가 서 있지 않은 넓은 마당' } }, levels: { easy: { state: { at: { '그물 너머 상대가 없는 바닥': 1 } } } }, difficulty: 0.2 },
                { prompt: '게임 설명에 알맞은 갈래 카드를 이어요.', toolOptions: { mode: 'match', topic: '어떤 갈래일까?', slots: [{ id: 's1', label: '상대 마당으로 공을 몰고 가 골대에 넣어요' }, { id: 's2', label: '그물 너머 상대 바닥에 공을 떨어뜨려요' }, { id: 's3', label: '공을 치거나 차고 누를 돌아 점수를 내요' }], cards: ['영역형', '네트형', '필드형'] }, target: { match: { s1: '영역형', s2: '네트형', s3: '필드형' } }, difficulty: 0.15,
                  conclude: '빈 곳을 찾는 원리는 같지만, 그 빈 곳이 어디인지는 게임 갈래마다 달라요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 세 마당 돌며 맛보기', minutes: 14, tool: 'timer',
              task: '모둠이 차기 마당(영역형)·넘기기 마당(네트형)·차고 달리기 마당(필드형)을 차례로 돌아요. 마당마다 빈 곳으로 보낸 횟수를 세요.',
              teacher: '"이 마당에서 빈 곳은 어디였나요?" 마당을 옮길 때마다 묻는다. 시간 계획을 세울 때 마당 수만큼 되풀이하고, 마지막 마당 뒤에는 옮기지 않는다는 것을 짚는다.',
              levels: { easy: { workStep: 30, restStep: 30 }, base: { workStep: 30, restStep: 30 }, challenge: { workStep: 30, restStep: 30, showTotal: false } },
              items: [
                { prompt: '마당마다 3분(180초) 활동하고 1분(60초) 동안 옮기기를 세 마당만큼 하도록 타이머를 맞춰요.', toolOptions: { plan: { work: 120, rest: 30, rounds: 2 }, showTotal: true }, target: { plan: { work: 180, rest: 60, rounds: 3 } }, difficulty: 0.25 },
                { prompt: '세 마당에서 빈 곳으로 보내 성공한 횟수를 마당마다 적어요.', toolOptions: { fields: ['차기 마당', '넘기기 마당', '차고 달리기 마당'], unit: '번' }, target: { records: true }, levels: { challenge: { toolOptions: { fields: ['차기 마당', '넘기기 마당', '차고 달리기 마당', { label: '가장 많은 마당과 가장 적은 마당의 차이', unit: '번' }] } } }, difficulty: 0.15 },
                { prompt: '마당을 옮기기 전에 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['쓴 공을 바구니에 넣었어요', '다음 마당 친구들이 빠져나간 것을 보았어요', '걸어서 옮기기로 했어요'] }, target: { safety: true }, difficulty: 0.1 },
                FREE('세 마당을 모두 돌아 본 뒤, 모둠에서 가장 빈 곳을 찾기 쉬웠던 마당을 하나 정해 표시해요.'),
              ],
            },
          ],
          {
            teacher: '"배드민턴에서 빈 곳은 어디예요? 농구에서는요?" 갈래마다 빈 곳이 다르다는 것을 두세 학생이 말하게 한다. 출구 1번을 틀린 학생은 상대와 섞여 뛰는지부터 묻는다. 세 마당 도구를 함께 정리하며 숨을 고른다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { topic: '공 게임 갈래', slots: ['영역형', '네트형', '필드형'], cards: ['핸드볼', '족구', '야구'] }, prompt: '새 게임 카드를 세 갈래로 나누어요.', target: { sort: { '영역형': ['핸드볼'], '네트형': ['족구'], '필드형': ['야구'] } }, difficulty: 0.2 },
              { type: 'choice', prompt: '네트형 게임에서 공을 보내야 할 빈 곳은 어디인가요?', options: ['그물 너머 상대가 없는 바닥', '우리 편 바로 앞', '그물 위'], answer: 0, difficulty: 0.15, explain: '네트형은 그물 너머 상대 바닥에 공을 떨어뜨려야 점수가 나요.' },
              MOOD('세 마당을 돌아본 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '게임마다 빈 곳',
          items: [
            { type: 'table', prompt: '갈래마다 게임 이름과 빈 곳을 쓰세요.', columns: ['갈래', '게임 이름', '빈 곳은 어디?'], cells: [['영역형', '', ''], ['네트형', '', ''], ['필드형', '', '']] },
            { type: 'choice', prompt: '필드형 게임에 ○ 하세요.', options: ['농구', '배드민턴', '발야구'], answer: '발야구' },
            { type: 'table', prompt: '마당마다 빈 곳으로 보내 성공한 횟수를 쓰세요.', columns: ['마당', '차기', '넘기기', '차고 달리기'], cells: [['성공 횟수', '', '', '']] },
            { type: 'short', prompt: '세 마당 가운데 빈 곳을 찾기 가장 어려웠던 마당과 그 까닭을 쓰세요.' },
          ],
          easy: {
            note: '섞여 뛰면 영역형, 그물이 있으면 네트형, 치고 달리면 필드형이에요.',
            items: [
              { type: 'choice', prompt: '그물이 있는 게임은 무엇인가요?', options: ['축구', '배구'], answer: '배구' },
              { type: 'short', prompt: '오늘 가장 재미있었던 마당을 쓰세요.' },
              { type: 'draw', prompt: '네트형 마당에서 공을 넘기는 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드 두 장이 미리 놓여 있고, 맞는 가지에 놓으면 바로 표시돼요. 타이머를 30초씩 맞춰요.',
          base: '카드를 모두 놓은 뒤 확인하고, 전체 시간을 화면에서 확인해요.',
          challenge: '상대와 주고받지 않는 함정 카드가 섞여 있고, 전체 시간이 보이지 않아 스스로 셈해요. 기록 차이를 셈해 적어요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 빈 곳은 어느 게임이나 같은 곳이라고 여긴다 → 세 마당을 돌 때마다 "여기서 빈 곳은?"을 묻는다. ② 배드민턴·족구를 영역형으로 넣는다 → 상대와 섞여 뛰는지, 그물로 나뉘는지를 묻는다. ③ 마당을 옮길 때 뛰어서 부딪힌다 → 옮기는 시간을 타이머에 넣고 걸어서 옮긴다. 마당 활동은 공을 굴리거나 가볍게 차는 정도로 낮추어 한다.',
      }),
      // ───────────────────────── 5 ─────────────────────────
      L(5, {
        title: '몸을 옮겨 받으며 짝과 열 번 주고받기',
        objective: '공이 오는 쪽으로 몸을 옮기고 두 손을 내밀었다가 당기며 받아, 짝과 다섯 걸음 떨어져 주고받기를 열 번 이어 갈 수 있다.',
        illustration: art('a child stepping sideways with soft knees and open hands to catch a ball thrown by a partner five steps away, with footprints showing the step', [
          { motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'cloud', x: 90, y: 50 }, { motif: 'hills', y: 212 },
          { motif: 'tree', x: 430, y: 212, s: 0.8 }, { motif: 'leaf', x: 70, y: 200 },
          { motif: 'text', x: 240, y: 126, text: '보고, 옮기고, 당겨요', size: 24 },
        ]),
        safety: [SPACE, FACE, BALL, STOP],
        stages: stages(
          {
            teacher: '교사가 제자리에 선 채 손만 내밀어 공을 받다가 옆으로 빠뜨려 보인다. "선생님은 왜 놓쳤을까요?" 다음에는 한 걸음 옮겨 몸 앞에서 받고 팔을 당겨 보인다. "두 번이 무엇이 달랐나요?" 발을 옮긴 것과 팔을 당긴 것을 학생 말로 찾게 한다. 오늘 목표는 다섯 걸음 떨어져 열 번 이어 가기라고 알린다.',
            student: '선생님이 놓친 받기와 잘한 받기를 보고, 무엇이 달랐는지 찾아봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 잘 받는 몸 살펴보기', minutes: 10, tool: 'mindmap',
              task: '공을 받을 때 발과 손이 하는 일을 나누고, 받기가 잘 안 될 때 고칠 방법을 이어요.',
              teacher: '"받기는 손만의 일일까요?" 발 카드를 손 가지에 넣는 학생에게 직접 한 걸음 옮겨 보게 한다. 공이 무서운 학생에게는 부드러운 공과 가까운 거리부터 해도 된다고 말해 준다.',
              levels: CARD,
              items: [
                { prompt: '공을 받을 때 하는 일을 발이 하는 일과 손·팔이 하는 일로 나누어요.', toolOptions: { topic: '받을 때 몸', slots: ['발', '손과 팔'], cards: ['공 쪽으로 한두 걸음 옮기기', '무릎을 살짝 굽혀 서기', '손가락을 펴서 두 손 내밀기', '공이 닿으면 팔꿈치 당기기'] }, target: { sort: { '발': ['공 쪽으로 한두 걸음 옮기기', '무릎을 살짝 굽혀 서기'], '손과 팔': ['손가락을 펴서 두 손 내밀기', '공이 닿으면 팔꿈치 당기기'] } }, levels: { easy: { state: { at: { '공 쪽으로 한두 걸음 옮기기': 0 } } } }, difficulty: 0.15 },
                { prompt: '공을 잘 받는 모습만 골라요.', toolOptions: { mode: 'pick', topic: '잘 받는 모습', cards: ['눈으로 공을 끝까지 봐요', '몸을 공 앞으로 옮겨요', '공이 닿을 때 팔을 당겨요', '발은 그대로 두고 손만 뻗어요'] }, target: { pick: ['눈으로 공을 끝까지 봐요', '몸을 공 앞으로 옮겨요', '공이 닿을 때 팔을 당겨요'] }, levels: { challenge: { prompt: '공을 잘 받는 모습만 골라요. 그럴듯하지만 틀린 카드가 섞여 있어요.', toolOptions: { cards: ['눈으로 공을 끝까지 봐요', '몸을 공 앞으로 옮겨요', '공이 닿을 때 팔을 당겨요', '발은 그대로 두고 손만 뻗어요', '공이 오면 손바닥을 딱딱하게 세워요'] } } }, difficulty: 0.15 },
                { prompt: '받기가 잘 안 되는 모습에 알맞은 고칠 방법 카드를 이어요.', toolOptions: { mode: 'match', topic: '이렇게 고쳐요', slots: [{ id: 'bounce', label: '공이 손에서 튕겨 나가요' }, { id: 'side', label: '공이 몸 옆으로 빠져나가요' }, { id: 'fear', label: '공이 무서워 고개를 돌려요' }], cards: ['닿는 순간 팔을 몸 쪽으로 당겨요', '발을 옮겨 몸을 공 앞에 두어요', '부드러운 공으로 가까이서 시작해요'] }, target: { match: { bounce: '닿는 순간 팔을 몸 쪽으로 당겨요', side: '발을 옮겨 몸을 공 앞에 두어요', fear: '부드러운 공으로 가까이서 시작해요' } }, levels: { easy: { state: { at: { '닿는 순간 팔을 몸 쪽으로 당겨요': 0 } } } }, difficulty: 0.2,
                  conclude: '받기는 손만의 일이 아니에요. 보고, 발을 옮기고, 팔을 당기는 몸 전체의 움직임이에요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 다섯 걸음 주고받기 열 번 도전', minutes: 16, tool: 'timer',
              task: '받는 차례를 세운 뒤 짝과 다섯 걸음 떨어져 가슴 높이로 주고받아요. 떨어뜨리지 않고 이어 간 횟수를 세 번 재어 적어요.',
              teacher: '"공이 오면 발 먼저!" 받을 때 발이 붙어 있는 학생 옆에서 "한 걸음"이라고 말해 준다. 열 번을 못 채워도 지난번보다 늘었는지를 보게 하고, 떨어뜨린 공은 걸어서 주워 온다.',
              levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
              items: [
                { prompt: '공을 받는 움직임 카드를 하는 차례대로 놓아요.', toolOptions: { cards: ['두 손을 공 쪽으로 내밀어요', '공이 닿으면 팔을 몸 쪽으로 당겨요', '공을 끝까지 봐요', '공이 오는 쪽으로 발을 옮겨요'] }, target: { order: ['공을 끝까지 봐요', '공이 오는 쪽으로 발을 옮겨요', '두 손을 공 쪽으로 내밀어요', '공이 닿으면 팔을 몸 쪽으로 당겨요'] }, levels: { easy: { state: { order: ['공을 끝까지 봐요', '두 손을 공 쪽으로 내밀어요', '공이 오는 쪽으로 발을 옮겨요', '공이 닿으면 팔을 몸 쪽으로 당겨요'] } }, challenge: { prompt: '받은 공을 다시 보내기까지 움직임 카드를 하는 차례대로 놓아요.', toolOptions: { cards: ['두 손을 공 쪽으로 내밀어요', '공이 닿으면 팔을 몸 쪽으로 당겨요', '공을 끝까지 봐요', '공이 오는 쪽으로 발을 옮겨요', '공을 가슴 앞에 모았다가 보내요'] }, target: { order: ['공을 끝까지 봐요', '공이 오는 쪽으로 발을 옮겨요', '두 손을 공 쪽으로 내밀어요', '공이 닿으면 팔을 몸 쪽으로 당겨요', '공을 가슴 앞에 모았다가 보내요'] } } }, difficulty: 0.2,
                  hints: ['눈 → 발 → 손 → 팔 차례로, 몸의 어느 곳이 먼저 움직여야 공 앞에 설 수 있는지 떠올려요.', '손을 내밀기 전에 몸이 공 앞에 와 있어야 해요. 발을 옮기는 카드가 어디에 있는지 보세요.'] },
                { prompt: '짝과 다섯 걸음 떨어져 주고받기를 세 번 하고, 떨어뜨리지 않고 이어 간 횟수를 적어요.', toolOptions: { fields: ['1회', '2회', '3회'], unit: '번' }, target: { records: true }, levels: { challenge: { toolOptions: { fields: ['1회', '2회', '3회', { label: '3회가 1회보다 늘어난 횟수', unit: '번' }] } } }, difficulty: 0.15 },
                FREE('열 번 이어 가기에 성공한 짝은 한 걸음 더 떨어져서, 못 한 짝은 한 걸음 가까이 서서 다시 해 보고 표시해요.'),
              ],
            },
          ],
          {
            teacher: '"오늘 받기가 잘된 때 내 발은 어떻게 움직였나요?" 손만 내밀어도 된다고 말하는 학생이 있으면 활동 1의 고칠 방법 카드를 다시 보여 준다. 출구 1번(발로 받기 차례)에서 틀린 학생은 다음 시간 몰기 활동 전에 먼저 살핀다. 손목·어깨를 천천히 풀며 마친다.',
            exitTicket: [
              { type: 'tool', tool: 'timer', options: { cards: ['발바닥을 공 위로 들어요', '공이 닿으면 발을 살짝 뒤로 빼요', '굴러오는 공을 끝까지 봐요', '공이 오는 길로 발을 옮겨요'] }, prompt: '굴러오는 공을 발로 받는 움직임 카드를 차례대로 놓아요.', target: { order: ['굴러오는 공을 끝까지 봐요', '공이 오는 길로 발을 옮겨요', '발바닥을 공 위로 들어요', '공이 닿으면 발을 살짝 뒤로 빼요'] }, difficulty: 0.25 },
              { type: 'choice', prompt: '공이 손에서 자꾸 튕겨 나갈 때 알맞은 방법은?', options: ['손을 더 딱딱하게 세워요', '닿는 순간 팔을 몸 쪽으로 당겨요', '공을 보지 않고 손만 내밀어요'], answer: 1, difficulty: 0.15, explain: '팔을 당기면 공의 힘이 줄어 손에서 튕기지 않아요.' },
              MOOD('짝과 주고받기를 이어 가 본 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '몸으로 받아요',
          items: [
            { type: 'blank', prompt: '받는 차례를 빈칸에 쓰세요.', text: '공을 끝까지 봐요 → ___을 옮겨요 → 두 손을 내밀어요 → 닿으면 팔을 ___요', answer: '발, 당겨' },
            { type: 'table', prompt: '다섯 걸음 주고받기에서 이어 간 횟수를 쓰세요.', columns: ['때', '1회', '2회', '3회'], cells: [['이어 간 횟수', '', '', '']] },
            { type: 'choice', prompt: '공이 몸 옆으로 빠져나갈 때 고칠 점에 ○ 하세요.', options: ['발을 옮겨 몸을 공 앞에 두어요', '손을 더 세게 휘둘러요', '눈을 감아요'], answer: '발을 옮겨 몸을 공 앞에 두어요' },
            { type: 'check', prompt: '오늘 받기에서 해낸 것에 ✓ 하세요.', options: ['공을 끝까지 보았어요', '발을 옮겼어요', '팔을 당겨 받았어요'] },
            { type: 'short', prompt: '"공을 받을 때는 손만 내밀면 된다"는 말을 고쳐 쓰세요.' },
          ],
          easy: {
            note: '공이 오면 발 먼저, 손은 그다음이에요.',
            items: [
              { type: 'choice', prompt: '공을 받을 때 무엇을 먼저 옮기나요?', options: ['발', '머리'], answer: '발' },
              { type: 'short', prompt: '오늘 가장 많이 이어 간 횟수를 쓰세요.' },
              { type: 'draw', prompt: '두 손을 내밀어 공을 받는 내 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드 한 장이나 첫 차례가 미리 놓여 있고, 맞는 곳에 놓으면 바로 표시돼요. 거리를 한 걸음 줄여 해도 돼요.',
          base: '네 동작 차례를 스스로 세우고 다섯 걸음에서 주고받아요.',
          challenge: '받은 뒤 다시 보내기까지 다섯 동작 차례를 세우고, 함정 카드가 섞인 문항을 풀어요. 늘어난 횟수를 셈해 적어요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 공을 받을 때 손이나 발만 내밀면 된다고 여긴다 → "발 먼저"를 말로 외치며 한 걸음 옮기게 한다. ② 손바닥을 딱딱하게 세워 공이 튕긴다 → 손가락을 펴고 닿는 순간 팔꿈치를 당기게 한다. ③ 공이 무서워 고개를 돌린다 → 부드러운 공과 세 걸음 거리부터 시작한다. 실제 받기는 교구가 판정하지 않으므로 교사가 짝마다 돌며 관찰한다.',
      }),
      // ───────────────────────── 6 ─────────────────────────
      L(6, {
        title: '발로 공을 몰다가 멈춤 선에서 세우기',
        objective: '발 안쪽으로 공을 살짝살짝 밀며 고깔까지 몰고 가서, 멈춤 선에서 발바닥으로 공을 세울 수 있다.',
        illustration: art('a child dribbling a soccer ball with small touches along a line of colorful paper cones toward a stop line', [
          { motif: 'sun', x: 410, y: 52, s: 0.7 }, { motif: 'cloud', x: 110, y: 46 }, { motif: 'hills', y: 214 },
          { motif: 'flower', x: 60, y: 214 }, { motif: 'tree', x: 430, y: 212, s: 0.7 },
          { motif: 'text', x: 240, y: 126, text: '톡톡 몰고, 꾹 멈춰요', size: 24 },
        ]),
        safety: [SPACE, BALL, SHOE, SIGNAL],
        stages: stages(
          {
            teacher: '교사가 공을 한 번 세게 차고 쫓아가는 몰기와 발 안쪽으로 톡톡 미는 몰기를 차례로 보여 준다. "어느 쪽이 공을 내 것으로 지키기 좋을까요?" 세게 차면 공이 멀어져 상대가 가져가기 쉽다는 것을 짚는다. 이어서 발바닥으로 공 위를 눌러 세우는 모습을 보이고 "멈출 때는 어느 발 부분을 쓰나요?"라고 묻는다.',
            student: '두 가지 몰기를 보고, 공을 내 것으로 지키기 좋은 몰기가 어느 쪽인지 골라 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 몰기와 멈추기 방법 고르기', minutes: 10, tool: 'mindmap',
              task: '몰기 상황에 알맞은 발 쓰기를 잇고, 공을 잘 모는 모습을 골라요. 고른 동작을 제자리에서 공 없이 해 봐요.',
              teacher: '"공이 내 발에서 한 걸음 안에 있어야 내 공이에요." 발끝으로 차는 카드를 고른 학생에게는 발끝으로 차면 공이 어디로 갈지 모른다는 것을 직접 굴려 보여 준다.',
              levels: CARD,
              items: [
                { prompt: '몰기 상황에 알맞은 발 쓰기 카드를 이어요.', toolOptions: { mode: 'match', topic: '몰 때 발 쓰기', slots: [{ id: 'go', label: '곧게 앞으로 몰 때' }, { id: 'far', label: '공이 발에서 멀어졌을 때' }, { id: 'stop', label: '멈춤 선에 왔을 때' }], cards: ['발 안쪽으로 살짝살짝 밀기', '빨리 따라가 발 가까이 붙이기', '발바닥으로 공 위를 누르기'] }, target: { match: { go: '발 안쪽으로 살짝살짝 밀기', far: '빨리 따라가 발 가까이 붙이기', stop: '발바닥으로 공 위를 누르기' } }, levels: { easy: { state: { at: { '발바닥으로 공 위를 누르기': 2 } } } }, difficulty: 0.15 },
                { prompt: '공을 잘 모는 모습만 골라요.', toolOptions: { mode: 'pick', topic: '잘 모는 모습', cards: ['공을 발 가까이 두고 몰아요', '가끔 고개를 들어 앞을 봐요', '공을 멀리 차 놓고 쫓아가요', '발끝으로 공을 쿡 찔러요'] }, target: { pick: ['공을 발 가까이 두고 몰아요', '가끔 고개를 들어 앞을 봐요'] }, difficulty: 0.15 },
                { prompt: '몰기에서 생긴 일을 공을 지킨 일과 빼앗기기 쉬운 일로 나누어요.', toolOptions: { topic: '몰기에서 생긴 일', slots: ['공을 지켰어요', '빼앗기기 쉬워요'], cards: ['톡톡 밀어 한 걸음 안에 두었어요', '멈춤 선에서 공을 꾹 눌러 세웠어요', '세게 차서 공이 다섯 걸음 앞에 갔어요', '공만 보다가 고깔에 부딪혔어요'] }, target: { sort: { '공을 지켰어요': ['톡톡 밀어 한 걸음 안에 두었어요', '멈춤 선에서 공을 꾹 눌러 세웠어요'], '빼앗기기 쉬워요': ['세게 차서 공이 다섯 걸음 앞에 갔어요', '공만 보다가 고깔에 부딪혔어요'] } }, levels: { easy: { state: { at: { '톡톡 밀어 한 걸음 안에 두었어요': 0 } } } }, difficulty: 0.2,
                  conclude: '공을 발에서 한 걸음 안에 두고 톡톡 밀어야 내 공을 지킬 수 있어요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 고깔까지 몰고 멈추기', minutes: 16, tool: 'timer',
              task: '고깔 네 개를 지나 멈춤 선까지 공을 몰고 가 발바닥으로 세워요. 몰기와 쉬기를 되풀이하고, 짝이 출발부터 멈춤까지 시간을 재 줘요.',
              teacher: '"빠른 것보다 멈춤 선에서 딱 서는 것이 먼저예요." 선을 지나쳐 멈춘 기록은 다시 하게 한다. 쉬는 시간에는 다음 사람이 출발하므로 줄에서 기다리는 자리를 지키게 한다.',
              levels: { easy: { workStep: 10, restStep: 10 }, base: {}, challenge: { stopwatch: true } },
              items: [
                { prompt: '30초 동안 몰기를 하고 15초 쉬기를 4번 되풀이하도록 타이머를 맞춰요.', toolOptions: { plan: { work: 20, rest: 10, rounds: 2 } }, target: { plan: { work: 30, rest: 15, rounds: 4 } }, levels: { easy: { prompt: '30초 동안 몰기를 하고 10초 쉬기를 4번 되풀이하도록 타이머를 맞춰요.', target: { plan: { work: 30, rest: 10, rounds: 4 } } } }, difficulty: 0.2 },
                { prompt: '출발부터 멈춤 선에서 공을 세우기까지 걸린 시간을 두 번 재어 적어요.', toolOptions: { fields: [{ label: '1회', unit: '초', step: 0.5 }, { label: '2회', unit: '초', step: 0.5 }] }, target: { records: true }, difficulty: 0.15 },
                { prompt: '몰기를 마치고 해낸 것을 점검 목록에 표시해요.', target: { selfCheck: ['공을 발 가까이 두고 몰았어요', '고깔을 건드리지 않고 지나갔어요', '멈춤 선에서 발바닥으로 공을 세웠어요'] }, difficulty: 0.1 },
                FREE('고깔을 지그재그로 놓아 몰고 가다 멈추기를 짝과 번갈아 세 번 해 보고 표시해요.'),
              ],
            },
          ],
          {
            teacher: '"공이 멀어졌을 때 어떻게 했나요?" 세게 차고 쫓아간 학생과 톡톡 민 학생의 이야기를 듣고 견준다. 출구 2번을 틀린 학생은 발바닥 멈추기를 한 번 더 보여 준다. 발목을 천천히 돌리며 마친다.',
            exitTicket: [
              { type: 'tool', tool: 'timer', options: { plan: { work: 15, rest: 15, rounds: 2 } }, prompt: '40초 몰고 20초 쉬기를 3번 하도록 타이머를 맞춰요.', target: { plan: { work: 40, rest: 20, rounds: 3 } }, difficulty: 0.2 },
              { type: 'choice', prompt: '몰고 가던 공을 멈춤 선에서 세울 때 쓰는 발 부분은?', options: ['발끝', '발바닥', '발뒤꿈치'], answer: 1, difficulty: 0.15, explain: '발바닥으로 공 위를 살짝 누르면 공이 그 자리에 서요.' },
              MOOD('공을 몰고 멈춰 본 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '몰고, 멈춰요',
          items: [
            { type: 'choice', prompt: '공을 몰 때 알맞은 모습에 ○ 하세요.', options: ['공을 멀리 차 놓고 쫓아가요', '발 안쪽으로 살짝살짝 밀어요', '발끝으로 쿡 찔러요'], answer: '발 안쪽으로 살짝살짝 밀어요' },
            { type: 'table', prompt: '출발부터 멈춤까지 걸린 시간을 쓰세요.', columns: ['때', '1회', '2회'], cells: [['걸린 시간(초)', '', '']] },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '공은 내 발에서 ___ 걸음 안에 두어야 지킬 수 있어요.', answer: '한' },
            { type: 'check', prompt: '오늘 해낸 것에 ✓ 하세요.', options: ['고깔을 건드리지 않았어요', '멈춤 선에서 공을 세웠어요', '줄에서 차례를 기다렸어요'] },
            { type: 'short', prompt: '공을 세게 차고 쫓아가면 어떤 일이 생길지 쓰세요.' },
          ],
          easy: {
            note: '톡톡 밀고, 멈출 때는 발바닥으로 꾹!',
            items: [
              { type: 'choice', prompt: '공을 세울 때 쓰는 곳은?', options: ['발바닥', '무릎'], answer: '발바닥' },
              { type: 'short', prompt: '오늘 가장 빨랐던 기록을 쓰세요.' },
              { type: 'draw', prompt: '고깔 사이로 공을 모는 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '쉬는 시간이 10초이고 타이머를 10초씩 맞춰요. 카드 한 장이 미리 놓여 있어요. 고깔 사이를 넓혀 해도 돼요.',
          base: '타이머를 5초씩 맞추고, 고깔 네 개를 지나 멈춰요.',
          challenge: '시간 재기로 기록을 직접 재고, 고깔을 지그재그로 놓아 몰아요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 공을 세게 차 놓고 쫓아간다 → "한 걸음 안"을 기준으로 삼게 한다. ② 공만 보다가 고깔이나 친구와 부딪힌다 → 세 번 밀 때마다 고개를 한 번 드는 연습을 한다. ③ 멈춤 선을 지나 멈춘다 → 선 두 걸음 앞에서 속도를 줄이게 한다. 기록은 빠르기보다 바르게 멈춘 것을 먼저 본다.',
      }),
      // ───────────────────────── 7 ─────────────────────────
      L(7, {
        title: '풍선을 쳐 올려 낮은 줄 너머로 넘기기',
        objective: '풍선이 떨어질 곳 아래로 옮겨 무릎을 굽혔다 펴며 손바닥으로 쳐 올려, 낮은 줄 너머 짝에게 이어서 넘길 수 있다.',
        illustration: art('children hitting colorful balloons over a low rope tied between two chairs in a school gym, with soft dotted arcs above', [
          { motif: 'sun', x: 410, y: 52, s: 0.6 }, { motif: 'cloud', x: 120, y: 60 }, { motif: 'cloud', x: 330, y: 44, s: 0.7 }, { motif: 'hills', y: 214 },
          { motif: 'star', x: 240, y: 170, s: 0.6 },
          { motif: 'text', x: 240, y: 126, text: '무릎 펴며 위로 톡!', size: 24 },
        ]),
        safety: [SPACE, SIGNAL, '내 쪽으로 온 풍선만 치고, "내 거!"라고 말한 뒤 움직여 친구와 부딪히지 않아요.', '줄을 손으로 잡아당기거나 넘어가지 않아요.'],
        stages: stages(
          {
            teacher: '풍선을 위로 던져 손바닥으로 쳐 올려 보인 뒤 묻는다. "풍선은 공보다 천천히 떨어져요. 이걸로 무엇을 연습할 수 있을까요?" 배구나 배드민턴처럼 그물 너머로 넘기는 네트형 게임을 떠올리게 한다. "팔만 휘두르면 위로 잘 올라갈까요?"라고 물어, 무릎을 펴는 힘을 함께 쓰는 것을 오늘 살펴본다고 말한다.',
            student: '풍선이 공보다 천천히 떨어지는 것을 보고, 어떤 게임 연습에 좋을지 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 풍선 넘기기 방법과 점수 알기', minutes: 10, tool: 'mindmap',
              task: '풍선이 오는 곳에 알맞은 움직임을 잇고, 지킬 약속을 고르고, 점수가 누구에게 가는지 나누어요.',
              teacher: '"풍선이 높이 오면 앞으로 갈까요, 뒤로 갈까요?" 점수 카드에서 상대가 친 풍선이 줄 밖에 떨어진 것을 상대 점수로 넣는 학생에게 "마지막으로 친 사람이 누구예요?"라고 묻는다.',
              levels: CARD,
              items: [
                { prompt: '풍선이 오는 모습에 알맞은 움직임 카드를 이어요.', toolOptions: { mode: 'match', topic: '풍선이 오면', slots: [{ id: 'high', label: '풍선이 머리 위로 높이 와요' }, { id: 'low', label: '풍선이 내 앞에 낮게 떨어져요' }, { id: 'short', label: '내가 친 풍선이 줄을 못 넘어요' }], cards: ['뒤로 물러나 풍선 아래에 서요', '앞으로 나가 무릎을 깊게 굽혀요', '무릎을 펴며 위로 더 밀어 올려요'] }, target: { match: { high: '뒤로 물러나 풍선 아래에 서요', low: '앞으로 나가 무릎을 깊게 굽혀요', short: '무릎을 펴며 위로 더 밀어 올려요' } }, levels: { easy: { state: { at: { '뒤로 물러나 풍선 아래에 서요': 0 } } } }, difficulty: 0.2 },
                { prompt: '풍선 넘기기에서 지킬 약속만 골라요.', toolOptions: { mode: 'pick', topic: '풍선 넘기기 약속', cards: ['내 쪽으로 온 풍선만 쳐요', '"내 거!" 하고 말한 뒤 움직여요', '줄을 손으로 잡아당기지 않아요', '친구 쪽 풍선에도 뛰어들어요'] }, target: { pick: ['내 쪽으로 온 풍선만 쳐요', '"내 거!" 하고 말한 뒤 움직여요', '줄을 손으로 잡아당기지 않아요'] }, difficulty: 0.1 },
                { prompt: '풍선 넘기기 게임에서 생긴 일을 우리 점수와 상대 점수로 나누어요.', toolOptions: { topic: '누구 점수일까?', slots: ['우리 점수', '상대 점수'], cards: ['우리가 넘긴 풍선이 상대 바닥에 떨어졌어요', '상대가 친 풍선이 줄 밖에 떨어졌어요', '우리가 친 풍선이 줄에 걸렸어요', '상대가 넘긴 풍선이 우리 바닥에 떨어졌어요'] }, target: { sort: { '우리 점수': ['우리가 넘긴 풍선이 상대 바닥에 떨어졌어요', '상대가 친 풍선이 줄 밖에 떨어졌어요'], '상대 점수': ['우리가 친 풍선이 줄에 걸렸어요', '상대가 넘긴 풍선이 우리 바닥에 떨어졌어요'] } }, levels: { easy: { state: { at: { '우리가 넘긴 풍선이 상대 바닥에 떨어졌어요': 0 } } } }, difficulty: 0.25,
                  hints: ['풍선을 마지막으로 친 편이 누구인지, 그리고 풍선이 어디에 떨어졌는지 두 가지를 함께 보세요.'] },
              ],
            },
            {
              id: 'a2', title: '활동 2. 줄 너머 짝과 이어 치기', minutes: 16, tool: 'timer',
              task: '의자 두 개에 묶은 낮은 줄을 사이에 두고 짝과 마주 서요. 쳐 올리는 차례를 세운 뒤, 풍선을 떨어뜨리지 않고 줄 너머로 이어 친 횟수를 세요.',
              teacher: '"팔만 쓰지 말고 무릎을 펴는 힘으로!" 팔을 옆으로 휘두르는 학생에게 손바닥을 하늘로 향하게 한다. 이어 친 횟수가 다섯 번을 넘은 짝은 두 번에 넘기기(한 번 쳐 올리고 두 번째에 넘기기)로 바꾸어 본다.',
              levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
              items: [
                { prompt: '풍선을 쳐 올려 넘기는 움직임 카드를 하는 차례대로 놓아요.', toolOptions: { cards: ['무릎을 펴며 풍선을 위로 쳐요', '풍선이 떨어질 곳 아래로 옮겨요', '무릎을 굽히고 손바닥을 위로 펴요'] }, target: { order: ['풍선이 떨어질 곳 아래로 옮겨요', '무릎을 굽히고 손바닥을 위로 펴요', '무릎을 펴며 풍선을 위로 쳐요'] }, levels: { easy: { state: { order: ['풍선이 떨어질 곳 아래로 옮겨요', '무릎을 펴며 풍선을 위로 쳐요', '무릎을 굽히고 손바닥을 위로 펴요'] } } }, difficulty: 0.15,
                  hints: ['풍선을 치기 전에 내 몸이 먼저 어디에 있어야 하는지, 힘을 모으는 자세와 힘을 쓰는 자세 가운데 무엇이 먼저인지 떠올려요.', '무릎을 굽힌 자세와 편 자세 가운데 어느 쪽이 먼저인지 몸으로 해 보세요.'] },
                { prompt: '줄 너머 짝과 풍선을 떨어뜨리지 않고 이어 친 횟수를 세 번 재어 적어요.', toolOptions: { fields: ['1회', '2회', '3회'], unit: '번' }, target: { records: true }, levels: { challenge: { toolOptions: { fields: ['1회', '2회', '3회', { label: '두 번에 넘기기로 이어 친 횟수', unit: '번' }] } } }, difficulty: 0.15 },
                { prompt: '풍선 넘기기를 하기 전에 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['줄을 묶은 의자가 흔들리지 않아요', '옆 짝과 두 팔 넘게 떨어졌어요', '바닥에 떨어진 풍선 조각이 없어요'] }, target: { safety: true }, difficulty: 0.1 },
                FREE('짝과 두 사람씩 편을 나누어 풍선 넘기기 게임을 3분 동안 해 보고 표시해요.'),
              ],
            },
          ],
          {
            teacher: '"풍선을 높이 올린 친구는 무엇을 했나요?" 무릎을 편 힘을 쓴 학생의 말을 받아 정리한다. 출구 1번에서 풍선 아래로 옮기는 것을 빠뜨린 학생에게는 다음 시간 받기 전에 다시 짚는다. 풍선은 터뜨리지 않고 상자에 모은다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '풍선이 오면', slots: [{ id: 'left', label: '풍선이 내 왼쪽으로 떨어져요' }, { id: 'net', label: '풍선이 줄 가까이 떨어져요' }], cards: ['왼쪽으로 옮겨 풍선 아래에 서요', '줄 가까이 다가가 위로 톡 쳐요'] }, prompt: '새 장면에 알맞은 움직임 카드를 이어요.', target: { match: { left: '왼쪽으로 옮겨 풍선 아래에 서요', net: '줄 가까이 다가가 위로 톡 쳐요' } }, difficulty: 0.2 },
              { type: 'choice', prompt: '풍선을 위로 높이 쳐 올리려면 어떻게 하나요?', options: ['팔만 옆으로 세게 휘둘러요', '무릎을 굽혔다 펴며 손바닥으로 쳐요', '풍선을 주먹으로 내려쳐요'], answer: 1, difficulty: 0.15, explain: '무릎을 펴는 힘을 함께 쓰면 풍선이 위로 높이 올라가요.' },
              MOOD('풍선을 이어 쳐 본 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '줄 너머로 넘겨요',
          items: [
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '풍선 아래로 옮겨요 → 무릎을 ___고 손바닥을 위로 → 무릎을 ___며 쳐요', answer: '굽히, 펴' },
            { type: 'table', prompt: '줄 너머로 이어 친 횟수를 쓰세요.', columns: ['때', '1회', '2회', '3회'], cells: [['이어 친 횟수', '', '', '']] },
            { type: 'choice', prompt: '상대가 친 풍선이 줄 밖에 떨어지면 누구 점수인가요?', options: ['우리 점수', '상대 점수', '점수 없음'], answer: '우리 점수' },
            { type: 'check', prompt: '오늘 지킨 약속에 ✓ 하세요.', options: ['"내 거!"라고 말했어요', '내 쪽 풍선만 쳤어요', '줄을 잡아당기지 않았어요'] },
            { type: 'short', prompt: '풍선 넘기기가 배구나 배드민턴과 닮은 점을 쓰세요.' },
          ],
          easy: {
            note: '풍선 아래로 먼저 가요. 손바닥은 하늘을 봐요.',
            items: [
              { type: 'choice', prompt: '풍선을 칠 때 손바닥은 어디를 보나요?', options: ['하늘', '땅'], answer: '하늘' },
              { type: 'short', prompt: '오늘 가장 많이 이어 친 횟수를 쓰세요.' },
              { type: 'draw', prompt: '줄 너머로 풍선을 넘기는 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드 한 장이나 첫 차례가 미리 놓여 있고, 맞는 곳에 놓으면 바로 표시돼요. 줄 없이 짝과 쳐 주고받아도 돼요.',
          base: '낮은 줄 너머로 짝과 이어 쳐요.',
          challenge: '한 번 쳐 올리고 두 번째에 넘기는 방법으로 이어 친 횟수를 따로 적고, 시간 재기로 이어 친 시간을 재요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 팔만 옆으로 휘둘러 풍선이 옆으로 간다 → 손바닥을 하늘로 향하고 무릎을 펴며 친다. ② 풍선 아래로 옮기지 않고 손만 뻗는다 → "풍선 아래 먼저"를 외치게 한다. ③ 점수 규칙에서 마지막으로 친 편을 헷갈린다 → 누가 마지막으로 쳤는지, 어디에 떨어졌는지 두 가지를 차례로 묻는다. 풍선 대신 가벼운 비치볼을 써도 된다.',
      }),
      // ───────────────────────── 8 ─────────────────────────
      L(8, {
        title: '주고받기가 끊긴 까닭을 거리와 세기로 나누기',
        objective: '주고받기가 끊긴 장면을 거리 탓과 세기 탓으로 나누어 말하고, 그 가운데 하나만 바꾸어 다시 열 번 주고받을 수 있다.',
        illustration: art('two children looking at a dropped ball between them with thought bubbles showing a long ruler and a strength meter', [
          { motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'cloud', x: 110, y: 50 }, { motif: 'hills', y: 212 },
          { motif: 'tree', x: 50, y: 212, s: 0.8 }, { motif: 'flower', x: 430, y: 216 },
          { motif: 'text', x: 240, y: 126, text: '거리 탓? 세기 탓?', size: 24 },
        ]),
        safety: [SPACE, FACE, BALL],
        stages: stages(
          {
            teacher: '5차시에 적은 주고받기 기록을 떠올리게 한다. "주고받기가 끊겼을 때 누구 잘못이라고 생각했나요?" "받는 사람이 못 받아서요"라는 대답이 나오면, 교사가 두 걸음 앞 학생에게 있는 힘껏 보내는 시늉을 하며 "이때도 받는 사람 잘못일까요?"라고 되묻는다. 끊김에는 거리와 세기라는 까닭이 있다는 것을 오늘 살펴본다고 알린다.',
            student: '주고받기가 끊긴 때를 떠올려 보고, 그때 누구 탓이라고 생각했는지 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 끊긴 장면을 거리와 세기로 나누기', minutes: 10, tool: 'mindmap',
              task: '주고받기가 끊긴 장면 카드를 거리 탓과 세기 탓으로 나누고, 장면마다 바꿀 것 하나를 이어요.',
              teacher: '"거리가 문제였다면 무엇을 바꾸면 될까요? 세기가 문제였다면요?" 거리 탓 카드와 세기 탓 카드를 가를 때 "공을 보낸 힘은 알맞았나요?"를 먼저 물어보게 한다. 받는 사람 탓으로만 말하는 학생에게 보낸 사람이 바꿀 수 있는 것을 찾게 한다.',
              levels: CARD,
              items: [
                { prompt: '주고받기가 끊긴 장면 카드를 거리 탓과 세기 탓으로 나누어요.', toolOptions: { topic: '끊긴 까닭', slots: ['거리 탓', '세기 탓'], cards: ['알맞은 힘으로 보냈지만 짝이 너무 멀었어요', '짝이 너무 가까워 손을 내밀 틈이 없었어요', '두 걸음 앞 짝에게 있는 힘껏 보냈어요', '여섯 걸음 짝에게 손목만 써서 보냈어요'] }, target: { sort: { '거리 탓': ['알맞은 힘으로 보냈지만 짝이 너무 멀었어요', '짝이 너무 가까워 손을 내밀 틈이 없었어요'], '세기 탓': ['두 걸음 앞 짝에게 있는 힘껏 보냈어요', '여섯 걸음 짝에게 손목만 써서 보냈어요'] } }, levels: { easy: { state: { at: { '두 걸음 앞 짝에게 있는 힘껏 보냈어요': 1 } } } }, difficulty: 0.2,
                  hints: ['카드마다 공을 보낸 힘이 알맞았는지, 두 사람 사이가 알맞았는지를 따로 물어보세요.'] },
                { prompt: '끊긴 장면에 알맞은 바꿀 것 하나를 이어요.', toolOptions: { mode: 'match', topic: '하나만 바꿔요', slots: [{ id: 'far', label: '알맞게 던졌는데 공이 짝까지 못 가요' }, { id: 'near', label: '살짝 던져도 짝이 너무 가까워요' }, { id: 'over', label: '다섯 걸음 짝의 머리 위로 날아가요' }], cards: ['한 걸음 가까이 서요', '한 걸음 뒤로 물러서요', '팔 흔들기를 줄여요'] }, target: { match: { far: '한 걸음 가까이 서요', near: '한 걸음 뒤로 물러서요', over: '팔 흔들기를 줄여요' } }, levels: { easy: { state: { at: { '팔 흔들기를 줄여요': 2 } } } }, difficulty: 0.2 },
                { prompt: '끊긴 까닭을 찾을 때 알맞은 생각만 골라요.', toolOptions: { mode: 'pick', topic: '까닭 찾기', cards: ['보낸 사람과 받은 사람을 모두 살펴봐요', '거리와 세기 가운데 하나를 바꿔 봐요', '한 번에 하나씩만 바꿔 다시 해요', '끊기면 늘 받는 사람이 잘못한 거예요'] }, target: { pick: ['보낸 사람과 받은 사람을 모두 살펴봐요', '거리와 세기 가운데 하나를 바꿔 봐요', '한 번에 하나씩만 바꿔 다시 해요'] }, levels: { challenge: { prompt: '끊긴 까닭을 찾을 때 알맞은 생각만 골라요. 그럴듯하지만 틀린 카드가 섞여 있어요.', toolOptions: { cards: ['보낸 사람과 받은 사람을 모두 살펴봐요', '거리와 세기 가운데 하나를 바꿔 봐요', '한 번에 하나씩만 바꿔 다시 해요', '끊기면 늘 받는 사람이 잘못한 거예요', '거리와 세기를 한꺼번에 모두 바꿔요'] } } }, difficulty: 0.2,
                  conclude: '주고받기가 끊기면 받는 사람 탓만 하지 말고, 거리와 세기 가운데 하나를 골라 바꿔 봐요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 하나만 바꾸어 다시 열 번', minutes: 16, tool: 'timer',
              task: '짝과 열 번 주고받고, 끊긴 까닭을 거리와 세기 가운데 하나로 정해요. 그 하나만 바꾸어 다시 열 번 하고 두 기록을 견주어요.',
              teacher: '"이번에는 무엇 하나를 바꿨나요?" 짝마다 바꾼 것을 한 낱말(거리·세기)로 말하게 한다. 두 가지를 한꺼번에 바꾸는 짝에게는 무엇 때문에 나아졌는지 알 수 없다는 것을 짚는다.',
              levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
              items: [
                { prompt: '끊긴 까닭을 고치는 일을 하는 차례대로 놓아요.', toolOptions: { cards: ['거리 탓인지 세기 탓인지 정해요', '하나만 바꾸어 다시 열 번 해요', '끊긴 장면을 떠올려요', '두 기록을 견주어 봐요'] }, target: { order: ['끊긴 장면을 떠올려요', '거리 탓인지 세기 탓인지 정해요', '하나만 바꾸어 다시 열 번 해요', '두 기록을 견주어 봐요'] }, levels: { easy: { state: { order: ['끊긴 장면을 떠올려요', '하나만 바꾸어 다시 열 번 해요', '거리 탓인지 세기 탓인지 정해요', '두 기록을 견주어 봐요'] } } }, difficulty: 0.15,
                  hints: ['무엇이 잘못됐는지 알아야 고칠 수 있고, 고쳐 본 뒤에야 견줄 수 있어요. 생각 → 정하기 → 해 보기 → 견주기 차례를 떠올려요.'] },
                { prompt: '바꾸기 전과 바꾼 뒤 열 번 주고받기에서 이어 간 횟수를 적어요.', toolOptions: { fields: [{ label: '바꾸기 전', unit: '번', max: 10 }, { label: '바꾼 뒤', unit: '번', max: 10 }] }, target: { records: true }, levels: { challenge: { toolOptions: { fields: [{ label: '바꾸기 전', unit: '번', max: 10 }, { label: '바꾼 뒤', unit: '번', max: 10 }, { label: '두 기록의 차이', unit: '번', max: 10 }] } } }, difficulty: 0.15 },
                { prompt: '다시 해 본 뒤 해낸 것을 점검 목록에 표시해요.', target: { selfCheck: ['끊긴 까닭을 거리나 세기로 말했어요', '한 가지만 바꾸어 다시 했어요', '짝을 탓하지 않고 함께 고쳤어요'] }, difficulty: 0.1 },
                FREE('짝과 바꾼 것이 무엇이었는지, 기록이 어떻게 달라졌는지 서로 한 문장씩 말해 보고 표시해요.'),
              ],
            },
          ],
          {
            teacher: '"오늘 바꾼 것이 거리였던 짝, 손 들어 볼까요? 세기였던 짝은요?" 어느 쪽이 나아졌는지 몇 짝의 기록을 듣는다. 끊긴 까닭은 받는 사람만의 잘못이 아니라는 말로 마친다. 출구 1번에서 받는 사람을 탓하는 보기를 고른 학생은 다음 시간 짝 활동에서 먼저 살핀다.',
            exitTicket: [
              { type: 'tool', tool: 'emotion', options: { mode: 'branch', situation: '민지와 준호의 주고받기가 자꾸 끊겨요. 준호가 "네가 못 받아서 그래"라고 말해요.', ask: '민지와 준호는 어떻게 하면 좋을까요?', motif: 'cloud', choices: [{ id: 'both', text: '거리와 세기를 함께 살펴 하나를 바꿔요', result: '한 걸음 가까이 서자 열 번을 이어 가요', mood: '뿌듯함' }, { id: 'blame', text: '받은 민지가 더 잘하기로 해요', result: '준호가 계속 세게 던져 또 끊겨요', mood: '속상함' }, { id: 'quit', text: '주고받기를 그만둬요', result: '둘 다 나아질 기회를 잃어요', mood: '슬픔' }] }, prompt: '주고받기가 끊긴 짝의 장면을 읽고 알맞은 행동을 골라요.', target: { choice: 'both' }, difficulty: 0.15 },
              { type: 'choice', prompt: '여덟 걸음 떨어진 짝에게 손목만 써서 보냈더니 공이 중간에 멈췄어요. 끊긴 까닭은?', options: ['거리가 너무 가까워서', '세기가 약해서', '받는 사람이 늦어서'], answer: 1, difficulty: 0.2, explain: '먼 짝에게 손목만 쓰면 세기가 모자라 공이 닿지 않아요.' },
              { type: 'short', prompt: '다음 주고받기에서 바꿀 것 하나(거리 또는 세기)와 그 까닭을 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '끊긴 까닭 찾기',
          items: [
            { type: 'table', prompt: '끊긴 장면을 쓰고 거리 탓인지 세기 탓인지 ○ 하세요.', columns: ['끊긴 장면', '거리 탓', '세기 탓'], rows: 3 },
            { type: 'table', prompt: '바꾸기 전과 뒤의 기록을 쓰세요.', columns: ['때', '바꾸기 전', '바꾼 뒤', '바꾼 것'], cells: [['이어 간 횟수', '', '', '']] },
            { type: 'choice', prompt: '두 걸음 앞 짝에게 세게 보내 공이 튕겼어요. 바꿀 것에 ○ 하세요.', options: ['한 걸음 가까이 서기', '세기 줄이기', '공 바꾸기'], answer: '세기 줄이기' },
            { type: 'short', prompt: '"주고받기가 끊기면 늘 받는 사람 잘못이다"라는 말에 대한 내 생각을 쓰세요.' },
          ],
          easy: {
            note: '공이 짝까지 안 가면 → 거리나 세기를 살펴요. 둘 중 하나만 바꿔요.',
            items: [
              { type: 'choice', prompt: '짝이 너무 멀어서 끊겼어요. 무엇을 바꿀까요?', options: ['거리', '옷'], answer: '거리' },
              { type: 'short', prompt: '오늘 바꾼 뒤 이어 간 횟수를 쓰세요.' },
              { type: 'draw', prompt: '짝과 알맞은 거리에서 주고받는 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드 한 장이나 첫 차례가 미리 놓여 있고, 맞는 곳에 놓으면 바로 표시돼요.',
          base: '까닭을 스스로 나누고, 하나만 바꾸어 기록을 견주어요.',
          challenge: '두 가지를 한꺼번에 바꾸는 함정 카드가 섞여 있고, 두 기록의 차이를 셈해 적어요. 시간 재기로 주고받기 시간을 재요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 주고받기가 끊기면 늘 받는 사람 잘못이라고 여긴다 → 보낸 사람이 바꿀 수 있는 거리·세기를 먼저 묻는다. ② 거리와 세기를 한꺼번에 바꿔 무엇 때문에 나아졌는지 모른다 → 한 번에 하나만 바꾸게 한다. ③ 거리 탓과 세기 탓을 헷갈린다 → "보낸 힘은 알맞았나요?"를 먼저 묻는다. 기록이 줄어도 까닭을 찾았으면 잘한 것이라고 말해 준다.',
      }),
      // ───────────────────────── 9 ─────────────────────────
      L(9, {
        title: '몰기 기록을 그래프로 보고 바꿀 것 정하기',
        objective: '몰기 기록 그래프를 그리고 읽어 멈춤 선에서 공을 못 세운 까닭을 세기와 간격으로 나누고, 한 가지만 바꾼 다음 계획을 세울 수 있다.',
        illustration: art('a paper bar chart standing next to a line of cones and a soccer ball, with a child pointing at the shortest bar', [
          { motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'cloud', x: 100, y: 50 }, { motif: 'hills', y: 212 },
          { motif: 'leaf', x: 60, y: 210 }, { motif: 'tree', x: 430, y: 212, s: 0.7 },
          { motif: 'text', x: 240, y: 126, text: '어디서 공이 멀어졌을까?', size: 22 },
        ]),
        safety: [SPACE, BALL, SHOE],
        stages: stages(
          {
            teacher: '6차시 몰기에서 멈춤 선을 지나친 친구가 많았다는 것을 떠올리게 한다. "공이 멈춤 선을 지나간 것은 다리가 느려서였을까요?" 학생 생각을 듣고, 미는 세기와 고깔 간격이 기록을 바꾼다는 것을 그래프로 알아본다고 알린다. "그래프의 막대 하나는 무엇을 뜻할까요?"라고 미리 물어 둔다.',
            student: '지난 몰기 시간에 공이 멈춤 선을 지나간 때를 떠올려 보고, 그 까닭을 짐작해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 고깔 간격별 기록 그래프 그리고 읽기', minutes: 10, tool: 'chart',
              task: '다른 반 친구가 고깔 간격을 바꾸어 다섯 번씩 몰고 멈춘 기록 표예요. 막대그래프를 완성하고 읽어요.',
              teacher: '"간격이 좁아질수록 막대가 어떻게 되나요?" 그래프를 완성한 뒤 간격이 좁을 때 공을 세게 밀면 고깔에 걸린다는 것을 짚는다. 그래프의 수는 예시 기록이라고 알려 준다.',
              levels: { easy: { showValues: true, given: [0] }, base: {}, challenge: {} },
              items: [
                { prompt: '고깔 간격별로 멈춤 선에서 공을 세운 횟수 표를 보고 막대그래프를 완성해요.', toolOptions: { type: 'bar', title: '멈춤 선에서 세운 횟수(5번 중)', unit: '번', xLabel: '고깔 간격', yLabel: '세운 횟수', max: 5, scale: 1, data: [['세 걸음', 4], ['두 걸음', 3], ['한 걸음', 1]] }, target: { build: true }, difficulty: 0.15 },
                { prompt: '그래프를 읽고 공을 세운 횟수가 가장 적은 간격을 골라요.', toolOptions: { type: 'bar', mode: 'read', title: '멈춤 선에서 세운 횟수(5번 중)', unit: '번', xLabel: '고깔 간격', yLabel: '세운 횟수', max: 5, scale: 1, data: [['세 걸음', 4], ['두 걸음', 3], ['한 걸음', 1]], question: '세운 횟수가 가장 적은 간격은?', choices: ['세 걸음', '두 걸음', '한 걸음'] }, target: { pick: 2 }, difficulty: 0.1 },
                { prompt: '같은 한 걸음 간격에서 미는 세기를 줄였더니 기록이 달라졌어요. 늘어난 횟수를 써요.', toolOptions: { type: 'bar', mode: 'read', title: '한 걸음 간격에서 세운 횟수(5번 중)', unit: '번', xLabel: '미는 세기', yLabel: '세운 횟수', max: 5, scale: 1, data: [['세게 밀기', 1], ['살짝 밀기', 4]], question: '살짝 밀었을 때 몇 번 더 세웠나요?' }, target: { value: 3 }, difficulty: 0.25,
                  conclude: '간격이 좁을 때는 공을 살짝 밀어야 고깔에 걸리지 않고 멈춤 선에서 세울 수 있어요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 몰기 까닭 나누고 다음 계획 고르기', minutes: 7, tool: 'mindmap',
              task: '몰기에서 생긴 일을 세기 탓과 간격 탓으로 나누고, 한 가지만 바꾼 계획을 골라요.',
              teacher: '"간격도 바꾸고 세기도 바꾸고 공도 바꾸면 무엇이 좋아졌는지 알 수 있을까요?" 계획 카드에서 여러 가지를 한꺼번에 바꾼 카드를 고른 학생에게 묻는다.',
              levels: CARD,
              items: [
                { prompt: '몰기에서 생긴 일을 미는 세기 탓과 고깔 간격 탓으로 나누어요.', toolOptions: { topic: '몰기에서 생긴 일', slots: ['세기 탓', '간격 탓'], cards: ['세게 밀어 공이 멈춤 선을 지나쳤어요', '너무 약하게 밀어 공이 발에 걸렸어요', '고깔이 한 걸음 간격이라 발이 꼬였어요', '멈춤 선이 마지막 고깔에 너무 붙어 있었어요'] }, target: { sort: { '세기 탓': ['세게 밀어 공이 멈춤 선을 지나쳤어요', '너무 약하게 밀어 공이 발에 걸렸어요'], '간격 탓': ['고깔이 한 걸음 간격이라 발이 꼬였어요', '멈춤 선이 마지막 고깔에 너무 붙어 있었어요'] } }, levels: { easy: { state: { at: { '세게 밀어 공이 멈춤 선을 지나쳤어요': 0 } } } }, difficulty: 0.2 },
                { prompt: '몰기에서 생긴 문제에 알맞은 바꿀 것을 이어요.', toolOptions: { mode: 'match', topic: '이렇게 바꿔요', slots: [{ id: 'run', label: '공이 발에서 세 걸음 넘게 멀어져요' }, { id: 'cone', label: '공이 고깔에 자꾸 걸려요' }, { id: 'line', label: '멈춤 선을 지나서 멈춰요' }], cards: ['미는 세기를 줄여요', '고깔 간격을 한 걸음 넓혀요', '선 두 걸음 앞에서 속도를 줄여요'] }, target: { match: { run: '미는 세기를 줄여요', cone: '고깔 간격을 한 걸음 넓혀요', line: '선 두 걸음 앞에서 속도를 줄여요' } }, levels: { easy: { state: { at: { '미는 세기를 줄여요': 0 } } } }, difficulty: 0.2 },
                { prompt: '다음 몰기 계획 가운데 한 가지만 바꾼 계획을 모두 골라요.', toolOptions: { mode: 'pick', topic: '하나만 바꾼 계획', cards: ['간격만 두 걸음으로 넓혀요', '미는 세기만 줄여요', '간격·세기·공을 모두 바꿔요', '아무것도 바꾸지 않고 열 번 더 해요'] }, target: { pick: ['간격만 두 걸음으로 넓혀요', '미는 세기만 줄여요'] }, difficulty: 0.2 },
              ],
            },
            {
              id: 'a3', title: '활동 3. 고른 계획으로 다시 몰기', minutes: 9, tool: 'timer',
              task: '고른 계획 하나만 바꾸어 고깔 사이를 다시 몰고 멈춤 선에서 세워요. 다섯 번 가운데 세운 횟수를 적어요.',
              teacher: '"지난번보다 몇 번 더 세웠나요? 줄었다면 까닭은 무엇일까요?" 기록이 줄어든 학생에게 바꾼 것이 오히려 어렵게 했는지 함께 살핀다. 기록은 남과 견주지 않는다.',
              levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
              items: [
                { prompt: '계획대로 하나만 바꾸어 몰고, 다섯 번 가운데 멈춤 선에서 세운 횟수를 적어요.', toolOptions: { fields: [{ label: '6차시 기록', unit: '번', max: 5 }, { label: '오늘 기록', unit: '번', max: 5 }] }, target: { records: true }, levels: { challenge: { toolOptions: { fields: [{ label: '6차시 기록', unit: '번', max: 5 }, { label: '오늘 기록', unit: '번', max: 5 }, { label: '늘어나거나 줄어든 횟수', unit: '번', max: 5 }] } } }, difficulty: 0.15 },
                { prompt: '다시 몰기를 하기 전에 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['고깔 사이를 다른 모둠이 지나가지 않아요', '공이 굴러갈 쪽이 비어 있어요', '앞사람이 멈춘 뒤 출발하기로 했어요'] }, target: { safety: true }, difficulty: 0.1 },
                FREE('짝에게 내가 바꾼 것 하나를 말하고, 짝이 몰 때 공이 발에서 멀어지는지 지켜봐 준 뒤 표시해요.'),
              ],
            },
          ],
          {
            teacher: '"바꾼 것 하나 때문에 기록이 어떻게 됐나요?" 기록이 늘어난 학생과 줄어든 학생 모두에게 까닭을 묻는다. 줄었더라도 까닭을 찾았으면 다음 계획을 세울 수 있다고 말한다. 출구 1번을 틀린 학생은 막대 끝을 손으로 짚어 읽게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '두 걸음 간격에서 세운 횟수(5번 중)', unit: '번', xLabel: '미는 세기', yLabel: '세운 횟수', max: 5, scale: 1, data: [['세게 밀기', 2], ['살짝 밀기', 5]], question: '공을 더 많이 세운 세기는?', choices: ['세게 밀기', '살짝 밀기'] }, prompt: '새 몰기 기록 그래프를 읽고 물음에 답해요.', target: { pick: 1 }, difficulty: 0.15 },
              { type: 'choice', prompt: '공이 고깔에 자꾸 걸릴 때 한 가지만 바꾼다면 알맞은 것은?', options: ['고깔 간격을 넓혀요', '공도 바꾸고 신발도 바꿔요', '눈을 감고 몰아요'], answer: 0, difficulty: 0.15, explain: '고깔에 걸리면 간격 하나만 넓혀 다시 해 봐요.' },
              MOOD('내 몰기 기록을 돌아본 오늘 마음은 어떤가요?'),
            ],
          },
        ),
        worksheet: {
          title: '몰기 기록 돌아보기',
          items: [
            { type: 'table', prompt: '6차시와 오늘의 몰기 기록과 바꾼 것을 쓰세요.', columns: ['때', '세운 횟수(5번 중)', '바꾼 것'], cells: [['6차시', '', '없음'], ['오늘', '', '']] },
            { type: 'choice', prompt: '공이 멈춤 선을 자꾸 지나칠 때 살펴볼 것에 ○ 하세요.', options: ['미는 세기', '옷 색깔', '날씨'], answer: '미는 세기' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '계획을 바꿀 때는 한 번에 ___ 가지만 바꿔요.', answer: '한' },
            { type: 'short', prompt: '다음 몰기에서 바꿀 것 하나와 그 까닭을 쓰세요.' },
          ],
          easy: {
            note: '막대가 짧으면 세운 횟수가 적어요.',
            items: [
              { type: 'choice', prompt: '고깔에 자꾸 걸리면 무엇을 넓힐까요?', options: ['고깔 간격', '공 크기'], answer: '고깔 간격' },
              { type: 'short', prompt: '오늘 세운 횟수를 쓰세요.' },
              { type: 'draw', prompt: '고깔 사이를 공과 함께 지나가는 내 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '그래프 첫 막대가 미리 그려져 있고 막대 끝에 수가 보여요. 카드 한 장이 미리 놓여 있어요.',
          base: '막대를 모두 그리고 눈금을 읽어요.',
          challenge: '늘어나거나 줄어든 횟수를 셈해 적고, 시간 재기로 몰기 시간도 재요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 기록이 나쁜 까닭을 "내가 느려서"로만 여긴다 → 미는 세기와 고깔 간격을 따로 살피게 한다. ② 여러 가지를 한꺼번에 바꾼다 → 한 번에 하나만 바꿔야 무엇이 도움 됐는지 안다고 짚는다. ③ 막대그래프 눈금을 잘못 센다 → 막대 끝에서 왼쪽 눈금까지 가로로 손가락을 옮기게 한다. 그래프의 수는 지은 예시 기록이다.',
      }),
      // ───────────────────────── 10 ─────────────────────────
      L(10, {
        title: '둘이 하나를 피해 패스하는 게임 돌아보기',
        objective: '둘이 수비 하나를 피해 공을 주고받는 게임을 하고, 끊긴 장면을 거리·세기·보낸 곳으로 나누어 다음 작전 하나를 세울 수 있다.',
        illustration: art('two children passing a ball around one defender inside a chalk square on a playground, with a small whiteboard showing a game plan', [
          { motif: 'sun', x: 410, y: 52, s: 0.7 }, { motif: 'cloud', x: 100, y: 48 }, { motif: 'hills', y: 212 },
          { motif: 'tree', x: 430, y: 212, s: 0.8 }, { motif: 'star', x: 240, y: 172, s: 0.6 },
          { motif: 'text', x: 240, y: 124, text: '둘이서 하나를 피해요', size: 24 },
        ]),
        safety: [SPACE, BALL, SIGNAL, '수비는 공만 막고 친구 몸을 밀거나 잡지 않아요.'],
        stages: stages(
          {
            teacher: '바닥에 네모 칸을 그리고 공격 두 명, 수비 한 명이 서는 모습을 보여 준다. "공격이 다섯 번 이어 주고받으면 1점, 수비가 공을 건드리면 역할을 바꿔요." 규칙을 알려 준 뒤 묻는다. "지금까지 배운 것 가운데 이 게임에서 쓸 수 있는 것은 무엇일까요?" 빈 곳·거리·세기·몸을 옮겨 받기를 학생 말로 다시 꺼낸다.',
            student: '둘이 하나를 피해 공을 주고받는 게임 규칙을 듣고, 지금까지 배운 것 가운데 무엇을 쓸지 골라 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 게임 시간 계획하고 해 보기', minutes: 12, tool: 'timer',
              task: '게임 판마다 2분 하고 1분 작전 시간을 가지며 세 판을 해요. 판마다 얻은 점수를 적어요.',
              teacher: '"작전 시간 1분에는 무엇을 이야기할까요?" 판이 끝날 때마다 끊긴 장면 하나를 짝과 말하게 한다. 수비가 몸으로 부딪히면 바로 멈추고 규칙을 다시 읽는다.',
              levels: { easy: { workStep: 30, restStep: 30 }, base: { workStep: 30, restStep: 30 }, challenge: { workStep: 30, restStep: 30, showTotal: false } },
              items: [
                { prompt: '게임 2분(120초), 작전 시간 1분(60초)으로 세 판을 하도록 타이머를 맞춰요.', toolOptions: { plan: { work: 60, rest: 30, rounds: 2 }, showTotal: true }, target: { plan: { work: 120, rest: 60, rounds: 3 } }, difficulty: 0.2 },
                { prompt: '판마다 다섯 번 이어 주고받아 얻은 점수를 적어요.', toolOptions: { fields: ['첫째 판', '둘째 판', '셋째 판'], unit: '점' }, target: { records: true }, levels: { challenge: { toolOptions: { fields: ['첫째 판', '둘째 판', '셋째 판', { label: '세 판 점수 합계', unit: '점' }] } } }, difficulty: 0.15 },
                { prompt: '게임을 하기 전에 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['네모 칸 둘레에 물건이 없어요', '수비는 공만 막기로 했어요', '다른 모둠 칸과 떨어져 있어요'] }, target: { safety: true }, difficulty: 0.1 },
                FREE('세 사람이 공격 둘·수비 하나 역할을 모두 한 번씩 돌아가며 해 보고 표시해요.'),
              ],
            },
            {
              id: 'a2', title: '활동 2. 끊긴 장면 나누고 작전 세우기', minutes: 14, tool: 'mindmap',
              task: '게임에서 공이 끊긴 장면을 거리·세기·보낸 곳 탓으로 나누고, 다음 판 작전을 이어요.',
              teacher: '"이 장면은 거리가 문제였나요, 세기였나요, 보낸 곳이었나요?" 세 가지를 가를 때 수비가 손을 뻗어 닿은 장면은 보낸 곳 탓이라는 것을 짚는다. 작전은 한 판에 하나만 정하게 한다.',
              levels: CARD,
              items: [
                { prompt: '게임에서 공이 끊긴 장면을 거리·세기·보낸 곳 탓으로 나누어요.', toolOptions: { topic: '끊긴 장면', slots: ['거리 탓', '세기 탓', '보낸 곳 탓'], cards: ['짝이 칸 끝까지 가 버려 공이 닿지 않았어요', '짝이 바로 옆에 붙어 받을 틈이 없었어요', '세 걸음 앞 짝에게 세게 차서 튕겼어요', '먼 짝에게 살짝 굴려 중간에 멈췄어요', '수비 손이 닿는 쪽으로 굴렸어요', '수비 바로 뒤에 선 짝에게 보냈어요'] }, target: { sort: { '거리 탓': ['짝이 칸 끝까지 가 버려 공이 닿지 않았어요', '짝이 바로 옆에 붙어 받을 틈이 없었어요'], '세기 탓': ['세 걸음 앞 짝에게 세게 차서 튕겼어요', '먼 짝에게 살짝 굴려 중간에 멈췄어요'], '보낸 곳 탓': ['수비 손이 닿는 쪽으로 굴렸어요', '수비 바로 뒤에 선 짝에게 보냈어요'] } }, levels: { easy: { state: { at: { '짝이 칸 끝까지 가 버려 공이 닿지 않았어요': 0, '수비 손이 닿는 쪽으로 굴렸어요': 2 } } } }, difficulty: 0.25,
                  hints: ['카드마다 세 가지를 차례로 물어요: 두 사람 사이가 알맞았나? 힘이 알맞았나? 수비 손이 닿지 않는 곳이었나?'] },
                { prompt: '끊긴 장면에 알맞은 다음 판 작전 카드를 이어요.', toolOptions: { mode: 'match', topic: '다음 판 작전', slots: [{ id: 'block', label: '수비가 늘 공과 짝 사이에 서요' }, { id: 'stuck', label: '짝이 한 자리에 서 있기만 해요' }, { id: 'hard', label: '가까운 짝에게도 세게 보내요' }], cards: ['수비 옆 빈 곳으로 옮겨 받아요', '공을 보내면 바로 다른 빈 곳으로 움직여요', '가까우면 손목만 써서 살짝 보내요'] }, target: { match: { block: '수비 옆 빈 곳으로 옮겨 받아요', stuck: '공을 보내면 바로 다른 빈 곳으로 움직여요', hard: '가까우면 손목만 써서 살짝 보내요' } }, levels: { easy: { state: { at: { '가까우면 손목만 써서 살짝 보내요': 2 } } } }, difficulty: 0.2 },
                { prompt: '이 게임에서 함께 이기는 공격 짝의 모습만 골라요.', toolOptions: { mode: 'pick', topic: '좋은 공격 짝', cards: ['받을 짝이 빈 곳으로 먼저 움직여요', '"여기!" 하고 소리 내어 알려요', '끊긴 뒤 짝과 작전을 바꿔요', '공을 혼자 오래 들고 있어요'] }, target: { pick: ['받을 짝이 빈 곳으로 먼저 움직여요', '"여기!" 하고 소리 내어 알려요', '끊긴 뒤 짝과 작전을 바꿔요'] }, levels: { challenge: { prompt: '함께 이기는 공격 짝의 모습만 골라요. 그럴듯하지만 틀린 카드가 섞여 있어요.', toolOptions: { cards: ['받을 짝이 빈 곳으로 먼저 움직여요', '"여기!" 하고 소리 내어 알려요', '끊긴 뒤 짝과 작전을 바꿔요', '공을 혼자 오래 들고 있어요', '끊기면 짝 탓을 크게 말해요'] } } }, difficulty: 0.2,
                  conclude: '거리·세기·보낸 곳 가운데 무엇이 문제였는지 찾으면, 다음 판에 바꿀 작전 하나가 보여요.' },
              ],
            },
          ],
          {
            teacher: '"전략형 스포츠에서 배운 것을 한 낱말로 말해 볼까요?" 빈 곳·거리·세기·받는 몸이 나오면 칠판에 묶어 적는다. 다음 차시부터는 자연 속에서 몸의 균형을 잡는 생태형 스포츠를 배운다고 알린다. 출구 1번을 틀린 학생은 세 가지를 차례로 묻는 방법을 다시 알려 준다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { topic: '끊긴 장면', slots: ['거리 탓', '세기 탓', '보낸 곳 탓'], cards: ['여덟 걸음 짝에게 손목만 써서 보냈어요', '수비가 두 팔을 벌린 쪽으로 보냈어요', '짝이 칸 밖으로 나가 공이 닿지 않았어요'] }, prompt: '새 게임 장면 카드를 세 가지 탓으로 나누어요.', target: { sort: { '거리 탓': ['짝이 칸 밖으로 나가 공이 닿지 않았어요'], '세기 탓': ['여덟 걸음 짝에게 손목만 써서 보냈어요'], '보낸 곳 탓': ['수비가 두 팔을 벌린 쪽으로 보냈어요'] } }, difficulty: 0.2 },
              { type: 'short', prompt: '다음 게임에서 쓸 작전 하나와 그 까닭을 쓰세요.' },
              MOOD('전략형 스포츠 공부를 마친 지금 마음은 어떤가요?'),
            ],
          },
        ),
        worksheet: {
          title: '둘이서 하나를 피해요',
          items: [
            { type: 'table', prompt: '판마다 얻은 점수와 끊긴 까닭을 쓰세요.', columns: ['판', '점수', '끊긴 까닭(거리·세기·보낸 곳)'], cells: [['첫째 판', '', ''], ['둘째 판', '', ''], ['셋째 판', '', '']] },
            { type: 'choice', prompt: '수비가 늘 공과 짝 사이에 설 때 알맞은 작전에 ○ 하세요.', options: ['수비 옆 빈 곳으로 옮겨 받기', '더 세게 차기', '공을 들고 기다리기'], answer: '수비 옆 빈 곳으로 옮겨 받기' },
            { type: 'check', prompt: '전략형 스포츠에서 배운 것 가운데 이제 할 수 있는 것에 ✓ 하세요.', options: ['빈 곳 찾기', '거리에 맞는 세기', '몸을 옮겨 받기', '끊긴 까닭 찾기'] },
            { type: 'short', prompt: '이 게임에서 짝과 잘 맞았던 순간을 쓰세요.' },
          ],
          easy: {
            note: '끊기면 거리·세기·보낸 곳을 차례로 살펴요.',
            items: [
              { type: 'choice', prompt: '수비 손이 닿는 곳으로 보내 끊겼어요. 무엇 탓인가요?', options: ['보낸 곳', '거리'], answer: '보낸 곳' },
              { type: 'short', prompt: '오늘 가장 많이 얻은 점수를 쓰세요.' },
              { type: 'draw', prompt: '수비를 피해 짝에게 공을 보내는 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드 두 장이 미리 놓여 있고, 맞는 곳에 놓으면 바로 표시돼요. 타이머를 30초씩 맞춰요. 수비는 한 발을 붙이고 해도 돼요.',
          base: '세 가지 탓으로 스스로 나누고, 작전 하나를 정해요.',
          challenge: '전체 시간이 보이지 않아 스스로 셈하고, 세 판 점수 합계를 적어요. 함정 카드가 섞인 문항을 풀어요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 끊긴 까닭을 수비가 잘해서라고만 여긴다 → 거리·세기·보낸 곳 세 가지를 차례로 묻는다. ② 공을 혼자 오래 들고 있다 → "보내고 움직이기"를 작전으로 정하게 한다. ③ 수비가 몸으로 막다 부딪힌다 → 공만 막는 규칙을 판마다 다시 읽는다. 게임 점수보다 작전을 바꾸어 본 것을 칭찬한다.',
      }),
      // ───────────────────────── 11 ─────────────────────────
      L(11, {
        title: '학교에서 균형이 필요한 곳 찾고 조심할 점 말하기',
        objective: '학교 놀이터와 운동장을 둘러보고 균형을 잡아야 하는 곳을 두 군데 이상 찾아, 그곳에서 조심할 점을 하나씩 말할 수 있다.',
        illustration: art('a school playground with a low balance beam, a rope bridge and stepping stones, children walking carefully with arms out', [
          { motif: 'sun', x: 410, y: 52, s: 0.8 }, { motif: 'cloud', x: 110, y: 48 }, { motif: 'hills', y: 212 },
          { motif: 'tree', x: 60, y: 210 }, { motif: 'tree', x: 430, y: 212, s: 0.9 }, { motif: 'flower', x: 150, y: 220 },
          { motif: 'text', x: 240, y: 124, text: '어디서 균형을 잡을까?', size: 24 },
        ]),
        safety: [OUT, SHOE, BEAM, STOP],
        stages: stages(
          {
            teacher: '교사가 한 발로 서서 몸이 흔들리는 모습을 보인다. "지금 선생님 몸에서 무슨 일이 일어나고 있을까요?" 균형이라는 말을 꺼낸 뒤 묻는다. "놀이터에서 노는 것도 체육 공부일까요?" 놀이일 뿐이라는 대답이 나오면 오늘 놀이터를 둘러보며 균형을 기르는 곳을 찾아보자고 한다. 생태형 스포츠는 자연이나 바깥 환경에서 몸을 다루는 운동이라고 소개한다.',
            student: '선생님처럼 한 발로 서 보고, 몸이 흔들릴 때 어떻게 버텼는지 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 균형이 필요한 곳과 조심할 점', minutes: 12, tool: 'mindmap',
              task: '학교 안의 장소 카드에서 균형을 잡아야 하는 곳을 고르고, 그곳에서 조심할 점을 이어요.',
              teacher: '"이곳에서 발이 미끄러지거나 몸이 흔들릴 수 있나요?" 이 물음으로 장소를 고르게 한다. 놀이터 활동으로 길러지는 힘이 없다고 고른 학생에게 한 발 서기가 몇 초까지 되는지 직접 재 보게 한다.',
              levels: CARD,
              items: [
                { prompt: '학교 안 장소 가운데 균형을 잡아야 하는 곳만 골라요.', toolOptions: { mode: 'pick', topic: '균형이 필요한 곳', cards: ['놀이터 흔들다리', '낮은 평균대', '화단 둘레 좁은 턱', '넓고 평평한 복도', '교실 의자에 앉기'] }, target: { pick: ['놀이터 흔들다리', '낮은 평균대', '화단 둘레 좁은 턱'] }, difficulty: 0.1,
                  hints: ['발 디딜 곳이 좁거나 흔들리는 곳인지 떠올려 보세요.'] },
                { prompt: '균형이 필요한 곳에 알맞은 조심할 점 카드를 이어요.', toolOptions: { mode: 'match', topic: '이곳에서는', slots: [{ id: 'bridge', label: '놀이터 흔들다리' }, { id: 'stone', label: '화단 징검돌' }, { id: 'beam', label: '낮은 평균대' }], cards: ['두 손으로 줄을 잡고 한 사람씩 건너요', '한 돌에 두 발을 모은 뒤 다음 돌을 봐요', '두 팔을 옆으로 벌리고 끝을 보며 걸어요'] }, target: { match: { bridge: '두 손으로 줄을 잡고 한 사람씩 건너요', stone: '한 돌에 두 발을 모은 뒤 다음 돌을 봐요', beam: '두 팔을 옆으로 벌리고 끝을 보며 걸어요' } }, levels: { easy: { state: { at: { '두 손으로 줄을 잡고 한 사람씩 건너요': 0 } } } }, difficulty: 0.15 },
                { prompt: '놀이터에서 균형 잡기 활동을 하면 길러지는 것만 골라요.', toolOptions: { mode: 'pick', topic: '바깥 활동으로', cards: ['몸의 균형 감각', '팔다리의 힘', '위험한 곳을 살피는 눈', '아무것도 길러지지 않아요'] }, target: { pick: ['몸의 균형 감각', '팔다리의 힘', '위험한 곳을 살피는 눈'] }, difficulty: 0.1,
                  conclude: '놀이터와 바깥 활동도 균형 감각과 힘, 위험을 살피는 눈을 기르는 체육 공부예요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 놀이터 둘러보며 한 발 서기', minutes: 14, tool: 'timer',
              task: '짝과 놀이터를 돌며 균형이 필요한 곳을 찾아요. 찾은 곳 옆 평평한 땅에서 한 발 서기를 하고 버틴 시간을 재요.',
              teacher: '"기구 위가 아니라 기구 옆 평평한 땅에서 한 발로 서요." 오늘은 기구에 오르지 않고 살펴보기만 한다는 것을 짚는다. 한 발 서기에서 버틴 시간은 짝이 세어 준다.',
              levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
              items: [
                { prompt: '놀이터에 나가기 전에 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['정해진 구역을 선생님과 확인했어요', '짝과 함께 다니기로 했어요', '오늘은 기구에 오르지 않기로 했어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '균형이 필요한 곳을 찾은 수와 한 발 서기로 버틴 시간을 적어요.', toolOptions: { fields: [{ label: '찾은 곳', unit: '군데' }, { label: '오른발 서기', unit: '초' }, { label: '왼발 서기', unit: '초' }] }, target: { records: true }, levels: { challenge: { toolOptions: { fields: [{ label: '찾은 곳', unit: '군데' }, { label: '오른발 서기', unit: '초' }, { label: '왼발 서기', unit: '초' }, { label: '두 발 기록의 차이', unit: '초' }] } } }, difficulty: 0.15 },
                FREE('짝과 찾은 곳 두 군데에서 조심할 점을 한 가지씩 서로 말해 보고 표시해요.'),
              ],
            },
          ],
          {
            teacher: '"놀이터에서 찾은 곳 가운데 가장 조심해야 할 곳은 어디였나요?" 두세 모둠에게 까닭과 함께 듣는다. 바깥 활동도 균형과 안전을 배우는 시간이라는 것을 다시 짚는다. 출구 1번에서 평평한 곳을 고른 학생에게는 발 디딜 곳이 좁은지 묻는다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '균형이 필요한 곳', cards: ['운동장 가장자리 낮은 경계석', '출렁이는 그물 놀이 기구', '넓은 잔디밭 한가운데'] }, prompt: '새 장소 카드에서 균형을 잡아야 하는 곳만 골라요.', target: { pick: ['운동장 가장자리 낮은 경계석', '출렁이는 그물 놀이 기구'] }, difficulty: 0.15 },
              { type: 'choice', prompt: '흔들다리를 건널 때 조심할 점으로 알맞은 것은?', options: ['두 손으로 줄을 잡고 한 사람씩 건너요', '친구와 함께 뛰어 건너요', '다리를 일부러 흔들어요'], answer: 0, difficulty: 0.1, explain: '흔들다리는 줄을 잡고 한 사람씩 건너야 균형을 잃지 않아요.' },
              MOOD('놀이터를 둘러본 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '균형이 필요한 곳',
          items: [
            { type: 'table', prompt: '찾은 곳과 그곳에서 조심할 점을 쓰세요.', columns: ['균형이 필요한 곳', '조심할 점'], rows: 3 },
            { type: 'table', prompt: '한 발 서기로 버틴 시간을 쓰세요.', columns: ['발', '오른발', '왼발'], cells: [['버틴 시간(초)', '', '']] },
            { type: 'choice', prompt: '균형이 필요한 곳이 아닌 것에 ○ 하세요.', options: ['낮은 평균대', '넓고 평평한 복도', '흔들다리'], answer: '넓고 평평한 복도' },
            { type: 'short', prompt: '"놀이터에서 노는 것은 배울 것이 없다"라는 말에 대한 내 생각을 쓰세요.' },
          ],
          easy: {
            note: '발 디딜 곳이 좁거나 흔들리면 균형이 필요해요.',
            items: [
              { type: 'choice', prompt: '균형이 필요한 곳은?', options: ['평균대', '교실 의자'], answer: '평균대' },
              { type: 'short', prompt: '오늘 찾은 곳 하나를 쓰세요.' },
              { type: 'draw', prompt: '한 발로 서서 균형을 잡는 내 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드 한 장이 미리 놓여 있고, 맞는 곳에 놓으면 바로 표시돼요. 한 발 서기는 벽을 한 손으로 짚고 해도 돼요.',
          base: '균형이 필요한 곳을 스스로 고르고, 두 발 기록을 재요.',
          challenge: '두 발 기록의 차이를 셈해 적고, 시간 재기로 직접 재요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 바깥 활동은 놀이일 뿐 배울 것이 없다고 여긴다 → 한 발 서기 기록을 재어 균형도 기를 수 있는 힘이라는 것을 보게 한다. ② 놀이터에서 기구에 바로 올라간다 → 오늘은 살펴보기만 한다고 출발 전에 약속한다. ③ 평평한 곳도 균형이 필요하다고 골라 헷갈린다 → 발 디딜 곳이 좁거나 흔들리는지를 기준으로 삼게 한다.',
      }),
      // ───────────────────────── 12 ─────────────────────────
      L(12, {
        title: '미끄럽고 흔들리는 곳에서 몸 낮추어 움직이기',
        objective: '젖은 곳·낙엽 길·흔들다리처럼 미끄럽거나 흔들리는 곳에서 몸을 낮추고 보폭을 줄이는 안전한 움직임을 고르고, 한 발 서기로 그 효과를 견줄 수 있다.',
        illustration: art('children crossing a wobbly rope bridge and a leafy slope with bent knees and short steps after the rain, with puddles shining on the ground', [
          { motif: 'cloud', x: 110, y: 50 }, { motif: 'cloud', x: 340, y: 40, s: 0.8 }, { motif: 'hills', y: 212 },
          { motif: 'leaf', x: 80, y: 196 }, { motif: 'leaf', x: 120, y: 206, s: 0.8 }, { motif: 'tree', x: 430, y: 212 },
          { motif: 'text', x: 240, y: 126, text: '낮게, 짧게, 천천히', size: 24 },
        ]),
        safety: [OUT, SHOE, STOP, '젖은 기구나 비탈에는 오늘 올라가지 않고, 평평한 땅에서만 연습해요.'],
        stages: stages(
          {
            teacher: '빗물에 젖은 미끄럼틀 사진(교사가 찍은 학교 사진)을 보여 준다. "이럴 때 빨리 지나가면 덜 미끄러질까요?" 손을 들게 한 뒤, 교사가 무릎을 펴고 성큼 걷는 모습과 무릎을 굽혀 짧게 걷는 모습을 견주어 보인다. "어느 쪽이 덜 흔들려 보이나요?" 지난 시간에 찾은 곳 가운데 미끄럽거나 흔들리는 곳을 떠올리게 한다.',
            student: '젖은 미끄럼틀 사진을 보고, 이런 곳에서 빨리 지나가면 괜찮을지 생각해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 미끄럽고 흔들리는 장면에서 할 일 고르기', minutes: 9, tool: 'emotion',
              task: '장면을 읽고 어떻게 움직일지 골라요. 고른 까닭을 짝에게 말해요.',
              teacher: '"빨리 지나가면 발이 땅에 닿는 시간이 짧아져서 더 미끄러질 수 있어요." 뛰는 보기를 고른 학생에게 젖은 바닥에서 뛰면 무슨 일이 생길지 묻는다. 흔들다리 장면에서는 장난으로 흔드는 친구에게 말하는 것도 안전 행동이라고 짚는다.',
              levels: BRANCH,
              items: [
                { prompt: '비 온 뒤 놀이터 장면을 읽고 할 일을 골라요.', toolOptions: { mode: 'branch', situation: '비가 그친 뒤 놀이터 평균대 위가 젖어 반짝여요.', ask: '어떻게 할까요?', motif: 'cloud', choices: [{ id: 'wait', text: '마를 때까지 평평한 곳에서 놀아요', result: '미끄러지지 않고 안전하게 놀아요', mood: '편안함' }, { id: 'run', text: '빨리 뛰어 건너면 괜찮아요', result: '젖은 곳에서 발이 미끄러져 넘어져요', mood: '속상함', why: '젖은 곳에서 뛰면 더 미끄러워요.' }, { id: 'sock', text: '신발을 벗고 양말로 건너요', result: '양말이 더 미끄러워 휘청거려요', mood: '무서움', why: '양말은 신발보다 바닥을 덜 붙잡아요.' }] }, target: { choice: 'wait' }, levels: { easy: { toolOptions: { choices: [{ id: 'wait', text: '마를 때까지 평평한 곳에서 놀아요', result: '미끄러지지 않고 안전하게 놀아요', mood: '편안함' }, { id: 'run', text: '빨리 뛰어 건너면 괜찮아요', result: '젖은 곳에서 발이 미끄러져 넘어져요', mood: '속상함', why: '젖은 곳에서 뛰면 더 미끄러워요.' }] } } }, difficulty: 0.1 },
                { prompt: '흔들다리 장면을 읽고 할 일을 골라요.', toolOptions: { mode: 'branch', situation: '흔들다리를 건너는데 뒤에서 친구가 다리를 일부러 흔들어요.', ask: '어떻게 할까요?', motif: 'wind', choices: [{ id: 'hold', text: '멈춰서 줄을 꽉 잡고 "흔들지 마"라고 말해요', result: '친구가 멈추고 천천히 건너요', mood: '편안함' }, { id: 'shake', text: '나도 같이 흔들어요', result: '둘 다 휘청거려 무릎을 부딪쳐요', mood: '속상함', why: '함께 흔들면 둘 다 균형을 잃어요.' }, { id: 'jump', text: '줄을 놓고 뛰어서 건너요', result: '발판이 출렁여 손을 짚고 넘어져요', mood: '무서움', why: '흔들릴 때 줄을 놓으면 잡을 곳이 없어요.' }] }, target: { choice: 'hold' }, levels: { easy: { toolOptions: { choices: [{ id: 'hold', text: '멈춰서 줄을 꽉 잡고 "흔들지 마"라고 말해요', result: '친구가 멈추고 천천히 건너요', mood: '편안함' }, { id: 'shake', text: '나도 같이 흔들어요', result: '둘 다 휘청거려 무릎을 부딪쳐요', mood: '속상함', why: '함께 흔들면 둘 다 균형을 잃어요.' }] } } }, difficulty: 0.15 },
                { prompt: '낙엽 쌓인 비탈길 장면을 읽고 할 일을 골라요.', toolOptions: { mode: 'branch', situation: '학교 뒤뜰의 낙엽이 수북이 쌓인 비탈길을 내려가야 해요.', ask: '어떻게 내려갈까요?', motif: 'leaf', choices: [{ id: 'slow', text: '보폭을 줄이고 무릎을 굽혀 천천히 내려가요', result: '낙엽 위에서도 미끄러지지 않아요', mood: '뿌듯함' }, { id: 'dash', text: '빨리 뛰어 내려가요', result: '낙엽에 발이 미끄러져 엉덩방아를 찧어요', mood: '속상함', why: '비탈에서 뛰면 멈추기 어려워요.' }, { id: 'pull', text: '앞 친구 손을 끌어당기며 내려가요', result: '친구까지 균형을 잃어요', mood: '걱정', why: '남을 당기면 두 사람 모두 흔들려요.' }] }, target: { choice: 'slow' }, levels: { easy: { toolOptions: { choices: [{ id: 'slow', text: '보폭을 줄이고 무릎을 굽혀 천천히 내려가요', result: '낙엽 위에서도 미끄러지지 않아요', mood: '뿌듯함' }, { id: 'dash', text: '빨리 뛰어 내려가요', result: '낙엽에 발이 미끄러져 엉덩방아를 찧어요', mood: '속상함', why: '비탈에서 뛰면 멈추기 어려워요.' }] } } }, difficulty: 0.15,
                  conclude: '미끄럽거나 흔들리는 곳에서는 빨리가 아니라 낮게, 짧게, 천천히 움직여요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 미끄러운 곳·흔들리는 곳 나누기', minutes: 7, tool: 'mindmap',
              task: '장소 카드를 미끄러운 곳과 흔들리는 곳으로 나누고, 알맞은 움직임을 이어요.',
              teacher: '"발밑이 미끄러운 걸까요, 발판이 움직이는 걸까요?" 두 가지가 다르면 조심하는 방법도 다르다는 것을 짚는다. 빨리 지나가는 카드를 고른 학생에게 활동 1의 결과를 다시 떠올리게 한다.',
              levels: CARD,
              items: [
                { prompt: '장소 카드를 미끄러운 곳과 흔들리는 곳으로 나누어요.', toolOptions: { topic: '어떤 곳일까?', slots: ['미끄러운 곳', '흔들리는 곳'], cards: ['비에 젖은 미끄럼틀', '낙엽이 쌓인 비탈길', '줄로 만든 흔들다리 발판', '출렁이는 그물 놀이 기구'] }, target: { sort: { '미끄러운 곳': ['비에 젖은 미끄럼틀', '낙엽이 쌓인 비탈길'], '흔들리는 곳': ['줄로 만든 흔들다리 발판', '출렁이는 그물 놀이 기구'] } }, levels: { easy: { state: { at: { '비에 젖은 미끄럼틀': 0 } } } }, difficulty: 0.1 },
                { prompt: '곳에 알맞은 움직임 카드를 이어요.', toolOptions: { mode: 'match', topic: '이렇게 움직여요', slots: [{ id: 'slip', label: '미끄러운 곳' }, { id: 'wob', label: '흔들리는 곳' }, { id: 'down', label: '내리막 비탈' }], cards: ['발바닥 전체로 꾹꾹 디뎌요', '손잡이를 잡고 무게를 낮춰요', '옆으로 서서 한 걸음씩 내려가요'] }, target: { match: { slip: '발바닥 전체로 꾹꾹 디뎌요', wob: '손잡이를 잡고 무게를 낮춰요', down: '옆으로 서서 한 걸음씩 내려가요' } }, levels: { easy: { state: { at: { '손잡이를 잡고 무게를 낮춰요': 1 } } } }, difficulty: 0.2 },
                { prompt: '미끄럽거나 흔들리는 곳에서 몸을 지키는 방법만 골라요.', toolOptions: { mode: 'pick', topic: '몸을 지켜요', cards: ['무릎을 살짝 굽혀요', '보폭을 줄여요', '두 팔을 벌려 균형을 잡아요', '빨리 뛰어 지나가요'] }, target: { pick: ['무릎을 살짝 굽혀요', '보폭을 줄여요', '두 팔을 벌려 균형을 잡아요'] }, levels: { challenge: { prompt: '미끄럽거나 흔들리는 곳에서 몸을 지키는 방법만 골라요. 그럴듯하지만 틀린 카드가 섞여 있어요.', toolOptions: { cards: ['무릎을 살짝 굽혀요', '보폭을 줄여요', '두 팔을 벌려 균형을 잡아요', '빨리 뛰어 지나가요', '발끝으로만 살금살금 디뎌요'] } } }, difficulty: 0.15 },
              ],
            },
            {
              id: 'a3', title: '활동 3. 무릎 펴고·굽히고 한 발 서기 견주기', minutes: 10, tool: 'timer',
              task: '평평한 땅에서 무릎을 쭉 편 한 발 서기와, 무릎을 살짝 굽히고 팔을 벌린 한 발 서기를 해요. 짝이 버틴 시간을 재 주고 두 기록을 견주어요.',
              teacher: '"어느 자세에서 더 오래 버텼나요?" 무릎을 굽히고 팔을 벌리면 몸의 무게가 낮아지고 넓게 퍼져 덜 흔들린다는 것을 쉬운 말로 짚는다. 30초가 넘으면 멈추고 기록을 30초로 적는다.',
              levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
              items: [
                { prompt: '한 발 서기 전에 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['평평하고 마른 땅에 섰어요', '짝이 옆에서 지켜봐 주기로 했어요', '넘어질 것 같으면 바로 두 발로 서기로 했어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '두 자세로 한 발 서기를 하고 버틴 시간을 적어요.', toolOptions: { fields: [{ label: '무릎 펴고 서기', unit: '초', max: 30 }, { label: '무릎 굽히고 팔 벌려 서기', unit: '초', max: 30 }] }, target: { records: true }, levels: { challenge: { toolOptions: { fields: [{ label: '무릎 펴고 서기', unit: '초', max: 30 }, { label: '무릎 굽히고 팔 벌려 서기', unit: '초', max: 30 }, { label: '두 기록의 차이', unit: '초', max: 30 }] } } }, difficulty: 0.15,
                  predict: { q: '어느 자세로 더 오래 버틸 것 같나요?', options: ['무릎 펴고', '무릎 굽히고'], answer: 1 },
                  conclude: '무릎을 굽히고 팔을 벌리면 몸이 낮아지고 넓어져 덜 흔들려요.' },
                FREE('짝과 함께 무릎을 살짝 굽히고 짧은 보폭으로 운동장 선을 따라 열 걸음 걸어 보고 표시해요.'),
              ],
            },
          ],
          {
            teacher: '"젖은 곳에서 빨리 지나가면 덜 미끄러질까요?" 오늘 고른 장면과 한 발 서기 기록을 근거로 대답하게 한다. 출구 1번을 틀린 학생은 활동 1의 결과 글을 다시 읽어 보게 한다. 발목을 천천히 돌리며 마친다.',
            exitTicket: [
              { type: 'tool', tool: 'emotion', options: { mode: 'branch', situation: '모래가 흩어진 운동장 가장자리를 지나가야 해요.', ask: '어떻게 지나갈까요?', motif: 'sun', choices: [{ id: 'step', text: '보폭을 줄여 발바닥 전체로 디뎌요', result: '모래 위에서도 미끄러지지 않아요', mood: '편안함' }, { id: 'slide', text: '모래 위를 미끄럼 타듯 뛰어가요', result: '발이 미끄러져 넘어져요', mood: '속상함' }] }, prompt: '모래가 흩어진 길 장면을 읽고 할 일을 골라요.', target: { choice: 'step' }, difficulty: 0.15 },
              { type: 'choice', prompt: '흔들리는 곳에서 덜 흔들리게 하는 자세는?', options: ['무릎을 쭉 펴고 서요', '무릎을 살짝 굽히고 팔을 벌려요', '두 팔을 몸에 붙여요'], answer: 1, difficulty: 0.15, explain: '몸을 낮추고 팔을 벌리면 균형을 잡기 쉬워요.' },
              MOOD('미끄럽고 흔들리는 곳을 공부한 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '낮게, 짧게, 천천히',
          items: [
            { type: 'table', prompt: '두 자세의 한 발 서기 기록을 쓰고 더 오래 버틴 쪽에 ○ 하세요.', columns: ['자세', '버틴 시간(초)', '○'], cells: [['무릎 펴고', '', ''], ['무릎 굽히고 팔 벌려', '', '']] },
            { type: 'choice', prompt: '비에 젖은 평균대 앞에서 알맞은 행동에 ○ 하세요.', options: ['빨리 뛰어 건너요', '마를 때까지 기다려요', '양말만 신고 건너요'], answer: '마를 때까지 기다려요' },
            { type: 'table', prompt: '미끄러운 곳과 흔들리는 곳을 하나씩 쓰고 조심할 점을 쓰세요.', columns: ['', '곳', '조심할 점'], cells: [['미끄러운 곳', '', ''], ['흔들리는 곳', '', '']] },
            { type: 'short', prompt: '"빨리 지나가면 덜 미끄럽다"는 말이 맞는지 오늘 한 활동을 근거로 쓰세요.' },
          ],
          easy: {
            note: '미끄럽거나 흔들리면 무릎을 굽히고 짧게 걸어요.',
            items: [
              { type: 'choice', prompt: '젖은 곳에서는 어떻게 걸을까요?', options: ['천천히 짧게', '빨리 크게'], answer: '천천히 짧게' },
              { type: 'short', prompt: '오늘 더 오래 버틴 자세를 쓰세요.' },
              { type: 'draw', prompt: '무릎을 굽히고 팔을 벌려 한 발로 선 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '장면마다 보기가 두 개로 줄고, 카드 한 장이 미리 놓여 있어요. 한 발 서기는 짝의 어깨를 살짝 짚고 해도 돼요.',
          base: '보기 세 개 가운데 고르고, 두 자세 기록을 견주어요.',
          challenge: '보기를 고른 뒤 결과가 맞힌 다음에만 보여요. 함정 카드가 섞여 있고, 두 기록의 차이를 셈해 적어요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 빨리 지나가면 균형을 잘 잡은 것이라고 여긴다 → 한 발 서기 실험과 장면 결과로 "낮게, 짧게, 천천히"를 몸으로 느끼게 한다. ② 미끄러운 곳과 흔들리는 곳을 같은 것으로 여긴다 → 발밑이 미끄러운지, 발판이 움직이는지를 묻는다. ③ 장난으로 흔드는 친구를 보고도 말하지 않는다 → 멈추고 말하는 것도 안전 행동이라고 짚는다. 오늘은 젖은 기구에 오르지 않는다.',
      }),
      // ───────────────────────── 13 ─────────────────────────
      L(13, {
        title: '학교 숲길 지도에서 방위로 깃발 자리 찾기',
        objective: '학교 숲길 지도의 방위와 칸 수를 읽어 깃발 자리를 찾고, 자연 속을 걸을 때 지킬 약속과 조심할 곳을 말할 수 있다.',
        illustration: art('a paper map of a school forest trail with a compass rose, little flags, a rope bridge and stepping stones, held by two children', [
          { motif: 'sun', x: 410, y: 52, s: 0.7 }, { motif: 'cloud', x: 100, y: 46 }, { motif: 'mountain', x: 360, y: 200, s: 0.8 }, { motif: 'hills', y: 214 },
          { motif: 'tree', x: 70, y: 210 }, { motif: 'tree', x: 130, y: 214, s: 0.7 },
          { motif: 'text', x: 240, y: 120, text: '북쪽으로 두 칸!', size: 24 },
        ]),
        safety: [OUT, SHOE, '숲길에서는 정해진 길로만 걷고, 꽃과 나무를 꺾지 않아요.', STOP],
        stages: stages(
          {
            teacher: '등산이나 숲길 걷기를 해 본 경험을 묻는다. "산이나 숲에서 길을 찾을 때 무엇을 보나요?" 지도와 방위표를 꺼내 보이며 3학년 사회에서 배운 동서남북을 떠올리게 한다. "지도에서 위쪽은 늘 북쪽일까요?" 북쪽 화살표를 보아야 한다는 것을 짚는다. 오늘은 지도로 깃발 자리를 찾고, 다음 시간 실제 숲길을 걷는다고 알린다.',
            student: '숲이나 산에서 길을 찾아본 경험을 떠올리고, 지도에서 무엇을 보면 좋을지 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 숲길 지도에서 깃발 자리에 핀 꽂기', minutes: 11, tool: 'map',
              task: '지도의 북쪽 화살표를 먼저 보고, 장소에서 말한 방위로 칸을 세어 깃발 자리에 핀을 꽂아요.',
              teacher: '"출발에서 북쪽으로 두 칸이면 출발 칸도 세나요?" 출발 칸을 하나로 세는 학생이 많다 — 출발 칸 다음 칸부터 하나, 둘을 센다고 짚는다. 칸을 세는 손가락을 지도 위에서 실제로 움직이게 한다.',
              levels: { easy: { readout: true }, base: {}, challenge: {} },
              items: [
                { prompt: '출발에서 북쪽으로 두 칸 가면 첫째 깃발이 있어요. 그 자리에 핀을 꽂아요.', toolOptions: { title: '학교 뒤뜰 숲길', grid: [6, 4], places: [{ name: '출발', icon: 'school', at: [0, 3] }, { name: '큰 나무', icon: 'forest', at: [2, 3] }, { name: '징검돌', icon: 'dot', at: [1, 1] }, { name: '흔들다리', icon: 'bridge', at: [4, 1] }, { name: '쉼터', icon: 'park', at: [5, 3], legend: '쉼터' }] }, target: { from: '출발', dir: '북', steps: 2 }, levels: { challenge: { prompt: '출발에서 북동쪽으로 두 칸 가면 첫째 깃발이 있어요. 그 자리에 핀을 꽂아요.', target: { from: '출발', dir: '북동', steps: 2 } } }, difficulty: 0.15 },
                { prompt: '흔들다리에서 남쪽으로 두 칸 가면 둘째 깃발이 있어요. 핀을 꽂아요.', toolOptions: { title: '학교 뒤뜰 숲길', grid: [6, 4], places: [{ name: '출발', icon: 'school', at: [0, 3] }, { name: '큰 나무', icon: 'forest', at: [2, 3] }, { name: '징검돌', icon: 'dot', at: [1, 1] }, { name: '흔들다리', icon: 'bridge', at: [4, 1] }, { name: '쉼터', icon: 'park', at: [5, 3], legend: '쉼터' }] }, target: { from: '흔들다리', dir: '남', steps: 2 }, difficulty: 0.15 },
                { prompt: '큰 나무에서 북쪽으로 세 칸 가면 셋째 깃발이 있어요. 핀을 꽂아요.', toolOptions: { title: '학교 뒤뜰 숲길', grid: [6, 4], places: [{ name: '출발', icon: 'school', at: [0, 3] }, { name: '큰 나무', icon: 'forest', at: [2, 3] }, { name: '징검돌', icon: 'dot', at: [1, 1] }, { name: '흔들다리', icon: 'bridge', at: [4, 1] }, { name: '쉼터', icon: 'park', at: [5, 3], legend: '쉼터' }] }, target: { from: '큰 나무', dir: '북', steps: 3 }, difficulty: 0.2,
                  conclude: '지도에서는 북쪽 화살표를 먼저 보고, 출발 칸 다음 칸부터 하나씩 세어요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 숲길에서 지킬 약속과 조심할 곳', minutes: 8, tool: 'mindmap',
              task: '숲길에서 해도 되는 일과 하면 안 되는 일을 나누고, 숲길의 장소마다 조심할 점을 이어요.',
              teacher: '"숲은 우리만 쓰는 곳일까요?" 꽃과 나무, 숲에 사는 생물도 함께 지켜야 한다는 것을 짚는다. 표지 없는 곳으로 혼자 가는 카드를 해도 되는 일에 넣은 학생에게 길을 잃으면 어떻게 될지 묻는다.',
              levels: CARD,
              items: [
                { prompt: '숲길에서 해도 되는 일과 하면 안 되는 일로 카드를 나누어요.', toolOptions: { topic: '숲길 약속', slots: ['해도 돼요', '하면 안 돼요'], cards: ['정해진 길로만 걸어요', '짝과 함께 다녀요', '꽃과 나뭇가지를 꺾어요', '표지가 없는 곳으로 혼자 가요'] }, target: { sort: { '해도 돼요': ['정해진 길로만 걸어요', '짝과 함께 다녀요'], '하면 안 돼요': ['꽃과 나뭇가지를 꺾어요', '표지가 없는 곳으로 혼자 가요'] } }, levels: { easy: { state: { at: { '정해진 길로만 걸어요': 0 } } } }, difficulty: 0.1 },
                { prompt: '숲길 장소에 알맞은 조심할 점 카드를 이어요.', toolOptions: { mode: 'match', topic: '숲길 장소', slots: [{ id: 'root', label: '나무뿌리가 튀어나온 길' }, { id: 'rock', label: '물기 있는 바위' }, { id: 'step', label: '계단처럼 높은 턱' }], cards: ['발을 높이 들어 걸려 넘어지지 않게 해요', '발바닥 전체로 디디고 손을 짚을 곳을 봐요', '한 발씩 디디고 뛰어내리지 않아요'] }, target: { match: { root: '발을 높이 들어 걸려 넘어지지 않게 해요', rock: '발바닥 전체로 디디고 손을 짚을 곳을 봐요', step: '한 발씩 디디고 뛰어내리지 않아요' } }, levels: { easy: { state: { at: { '발을 높이 들어 걸려 넘어지지 않게 해요': 0 } } } }, difficulty: 0.2 },
                { prompt: '숲길 걷기를 하기 전에 챙길 것만 골라요.', toolOptions: { mode: 'pick', topic: '숲길 준비', cards: ['끈을 단단히 묶은 운동화', '숲길 지도', '마실 물', '굽이 높은 구두'] }, target: { pick: ['끈을 단단히 묶은 운동화', '숲길 지도', '마실 물'] }, difficulty: 0.1 },
              ],
            },
            {
              id: 'a3', title: '활동 3. 운동장에 그린 숲길 지도 따라 걷기', minutes: 7, tool: 'timer',
              task: '운동장 바닥에 그린 칸 지도를 짝과 함께 걸어요. 출발에서 방위대로 칸을 세며 걸어가 깃발 세 개를 찾아요.',
              teacher: '"걸을 때도 지도의 북쪽과 운동장의 북쪽을 맞추고 걸어요." 교사가 미리 운동장 북쪽에 표지를 세워 둔다. 깃발을 다 찾은 짝은 출발로 돌아와 기다린다.',
              levels: LV,
              items: [
                { prompt: '운동장 지도 걷기를 하기 전에 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['운동장 북쪽 표지를 찾았어요', '짝과 손이 닿을 거리에서 걷기로 했어요', '다른 짝과 부딪히지 않게 걷기로 했어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '찾은 깃발 수와 출발로 돌아오기까지 걸린 시간을 적어요.', toolOptions: { fields: [{ label: '찾은 깃발', unit: '개', max: 3 }, { label: '걸린 시간', unit: '분' }] }, target: { records: true }, difficulty: 0.15 },
                FREE('짝과 역할을 바꾸어 한 사람은 방위를 말하고 한 사람은 그대로 걸어 깃발 하나를 더 찾아보고 표시해요.'),
              ],
            },
          ],
          {
            teacher: '"지도에서 칸을 셀 때 출발 칸을 세었나요?" 출구 1번을 틀린 학생은 이 실수를 했는지 살핀다. 다음 시간에는 실제 학교 숲길이나 화단 길을 지도로 걸어 본다고 알린다. 걸은 길을 천천히 되짚으며 숨을 고른다.',
            exitTicket: [
              { type: 'tool', tool: 'map', options: { title: '학교 뒤뜰 숲길', grid: [6, 4], places: [{ name: '출발', icon: 'school', at: [0, 3] }, { name: '큰 나무', icon: 'forest', at: [2, 3] }, { name: '징검돌', icon: 'dot', at: [1, 1] }, { name: '흔들다리', icon: 'bridge', at: [4, 1] }, { name: '쉼터', icon: 'park', at: [5, 3], legend: '쉼터' }] }, prompt: '징검돌에서 동쪽으로 두 칸 가면 넷째 깃발이 있어요. 핀을 꽂아요.', target: { from: '징검돌', dir: '동', steps: 2 }, difficulty: 0.15 },
              { type: 'choice', prompt: '숲길에서 지킬 약속으로 알맞지 않은 것은?', options: ['정해진 길로만 걸어요', '짝과 함께 다녀요', '예쁜 꽃은 꺾어 가요'], answer: 2, difficulty: 0.1, explain: '숲의 꽃과 나무는 모두가 함께 지켜요.' },
              MOOD('지도로 깃발을 찾아본 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '숲길 지도 읽기',
          items: [
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '지도에서는 ___ 화살표를 먼저 보고, 출발 칸 ___ 칸부터 하나씩 세어요.', answer: '북쪽, 다음' },
            { type: 'table', prompt: '찾은 깃발과 그 깃발까지 가는 방법을 쓰세요.', columns: ['깃발', '어디에서', '어느 방위로 몇 칸'], cells: [['첫째', '', ''], ['둘째', '', ''], ['셋째', '', '']] },
            { type: 'choice', prompt: '나무뿌리가 튀어나온 길에서 조심할 점에 ○ 하세요.', options: ['발을 높이 들어 걸어요', '뛰어서 빨리 지나가요', '눈을 감고 걸어요'], answer: '발을 높이 들어 걸어요' },
            { type: 'check', prompt: '숲길 걷기 전에 챙길 것에 ✓ 하세요.', options: ['운동화', '숲길 지도', '마실 물'] },
            { type: 'draw', prompt: '우리 학교에서 숲길처럼 걸어 보고 싶은 곳을 간단한 칸 지도로 그리세요.' },
          ],
          easy: {
            note: '출발 칸은 세지 않아요. 다음 칸이 하나예요.',
            items: [
              { type: 'choice', prompt: '지도에서 먼저 볼 것은?', options: ['북쪽 화살표', '지도 색깔'], answer: '북쪽 화살표' },
              { type: 'short', prompt: '오늘 찾은 깃발 수를 쓰세요.' },
              { type: 'draw', prompt: '동서남북을 적은 방위표를 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '핀을 놓으면 어디에서 몇 칸인지 읽기 글자가 보여요. 카드 한 장이 미리 놓여 있어요.',
          base: '방위와 칸 수를 스스로 세어 핀을 꽂아요.',
          challenge: '북동쪽처럼 두 방위를 섞은 방향으로 칸을 세어요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 출발 칸을 하나로 센다 → 출발 칸 다음 칸부터 "하나"라고 소리 내어 센다. ② 지도의 위쪽이 늘 북쪽이라고 여긴다 → 북쪽 화살표부터 찾게 한다(다음 차시에서 북쪽이 돌아간 지도를 쓴다). ③ 자연 속 활동을 마음대로 다녀도 되는 놀이로 여긴다 → 숲길 약속과 장소별 조심할 점을 먼저 정한다. 운동장 바닥 칸 지도는 분필이나 줄로 미리 그려 둔다.',
      }),
      // ───────────────────────── 14 ─────────────────────────
      L(14, {
        title: '낮은 평균대를 팔 벌려 천천히 끝까지 건너기',
        objective: '두 팔을 옆으로 벌리고 평균대 끝을 보며 한 발씩 천천히 디뎌, 낮은 평균대를 바닥에 닿지 않고 끝까지 건널 수 있다.',
        illustration: art('a child walking slowly on a low balance beam over a soft mat with arms spread wide and eyes looking ahead, classmates waiting in line', [
          { motif: 'sun', x: 410, y: 52, s: 0.6 }, { motif: 'cloud', x: 110, y: 50 }, { motif: 'hills', y: 214 },
          { motif: 'star', x: 380, y: 140, s: 0.6 }, { motif: 'bird', x: 200, y: 70 },
          { motif: 'text', x: 240, y: 124, text: '팔은 옆으로, 눈은 끝으로', size: 22 },
        ]),
        safety: [BEAM, MAT, SPACE, STOP],
        stages: stages(
          {
            teacher: '바닥에 줄을 하나 붙이고 교사가 그 위를 팔을 붙인 채 빨리 걷다 휘청이는 모습, 팔을 벌리고 천천히 걷는 모습을 차례로 보인다. "어느 쪽이 균형을 잘 잡은 걸까요? 빨리 건넌 쪽일까요?" 학생 생각을 들은 뒤, 오늘 빨리 건너기와 천천히 건너기를 직접 견주어 본다고 알린다.',
            student: '선생님이 줄 위를 걷는 두 가지 모습을 보고, 어느 쪽이 균형을 잘 잡았는지 골라 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 균형 잡는 자세 살펴보기', minutes: 9, tool: 'mindmap',
              task: '평균대 위 자세 카드를 균형이 잘 잡히는 자세와 흔들리기 쉬운 자세로 나누고, 흔들릴 때 할 일을 이어요.',
              teacher: '"몸이 왼쪽으로 기울면 어느 팔을 더 뻗을까요?" 줄 위에서 직접 해 보게 한다. 발만 내려다보는 카드를 잘 잡히는 자세에 넣은 학생에게 고개를 숙이면 몸이 어떻게 되는지 묻는다.',
              levels: CARD,
              items: [
                { prompt: '평균대 위 자세 카드를 균형이 잘 잡히는 자세와 흔들리기 쉬운 자세로 나누어요.', toolOptions: { topic: '평균대 위 자세', slots: ['잘 잡혀요', '흔들리기 쉬워요'], cards: ['두 팔을 어깨높이로 옆으로 벌려요', '눈은 평균대 끝을 봐요', '두 팔을 몸에 붙여요', '고개를 숙여 발만 내려다봐요'] }, target: { sort: { '잘 잡혀요': ['두 팔을 어깨높이로 옆으로 벌려요', '눈은 평균대 끝을 봐요'], '흔들리기 쉬워요': ['두 팔을 몸에 붙여요', '고개를 숙여 발만 내려다봐요'] } }, levels: { easy: { state: { at: { '두 팔을 어깨높이로 옆으로 벌려요': 0 } } } }, difficulty: 0.1 },
                { prompt: '평균대 위에서 생긴 일에 알맞은 할 일 카드를 이어요.', toolOptions: { mode: 'match', topic: '이럴 때는', slots: [{ id: 'lean', label: '몸이 왼쪽으로 기울어요' }, { id: 'stuck', label: '겁이 나서 가운데서 멈췄어요' }, { id: 'fall', label: '흔들려서 떨어질 것 같아요' }], cards: ['오른팔을 더 뻗어 무게를 맞춰요', '숨을 고르고 한 발씩 다시 디뎌요', '매트 쪽으로 살짝 내려서 처음부터 해요'] }, target: { match: { lean: '오른팔을 더 뻗어 무게를 맞춰요', stuck: '숨을 고르고 한 발씩 다시 디뎌요', fall: '매트 쪽으로 살짝 내려서 처음부터 해요' } }, levels: { easy: { state: { at: { '매트 쪽으로 살짝 내려서 처음부터 해요': 2 } } } }, difficulty: 0.2 },
                { prompt: '평균대를 잘 건너는 모습만 골라요.', toolOptions: { mode: 'pick', topic: '잘 건너는 모습', cards: ['발 길이만큼 짧게 디뎌요', '앞사람이 내려온 뒤 올라가요', '끝에서 두 발을 모으고 걸어 내려와요', '빨리 뛰어 지나가요'] }, target: { pick: ['발 길이만큼 짧게 디뎌요', '앞사람이 내려온 뒤 올라가요', '끝에서 두 발을 모으고 걸어 내려와요'] }, levels: { challenge: { prompt: '평균대를 잘 건너는 모습만 골라요. 그럴듯하지만 틀린 카드가 섞여 있어요.', toolOptions: { cards: ['발 길이만큼 짧게 디뎌요', '앞사람이 내려온 뒤 올라가요', '끝에서 두 발을 모으고 걸어 내려와요', '빨리 뛰어 지나가요', '끝에서 매트로 펄쩍 뛰어내려요'] } } }, difficulty: 0.15 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 빨리 건너기와 천천히 건너기 견주기', minutes: 17, tool: 'timer',
              task: '건너는 차례를 세운 뒤, 낮은 평균대를 빨리 다섯 번, 천천히 다섯 번 건너요. 바닥에 닿지 않고 끝까지 건넌 횟수를 견주어요.',
              teacher: '"빠른 것과 끝까지 건넌 것은 같은 걸까요?" 빨리 건너기에서도 뛰지 않고 걷는다는 것을 먼저 약속한다. 기다리는 학생은 줄을 서서 앞 친구의 팔과 눈을 관찰하게 한다.',
              levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
              items: [
                { prompt: '평균대를 건너는 움직임 카드를 하는 차례대로 놓아요.', toolOptions: { cards: ['한 발씩 천천히 앞으로 디뎌요', '끝에서 두 발을 모으고 걸어 내려와요', '평균대에 올라 두 팔을 옆으로 벌려요'] }, target: { order: ['평균대에 올라 두 팔을 옆으로 벌려요', '한 발씩 천천히 앞으로 디뎌요', '끝에서 두 발을 모으고 걸어 내려와요'] }, levels: { easy: { state: { order: ['평균대에 올라 두 팔을 옆으로 벌려요', '끝에서 두 발을 모으고 걸어 내려와요', '한 발씩 천천히 앞으로 디뎌요'] } }, challenge: { prompt: '올라가기 전부터 내려오기까지 평균대 움직임 카드를 차례대로 놓아요.', toolOptions: { cards: ['한 발씩 천천히 앞으로 디뎌요', '끝에서 두 발을 모으고 걸어 내려와요', '평균대에 올라 두 팔을 옆으로 벌려요', '올라가기 전에 평균대 끝을 바라봐요'] }, target: { order: ['올라가기 전에 평균대 끝을 바라봐요', '평균대에 올라 두 팔을 옆으로 벌려요', '한 발씩 천천히 앞으로 디뎌요', '끝에서 두 발을 모으고 걸어 내려와요'] } } }, difficulty: 0.15,
                  hints: ['올라가서 자세를 잡고, 건너고, 내려오는 세 단계로 나누어 생각해요.', '팔을 벌리는 것은 건너기 전에 해야 할까요, 다 건넌 뒤에 해야 할까요?'] },
                { prompt: '빨리 다섯 번, 천천히 다섯 번 건너고 바닥에 닿지 않고 끝까지 건넌 횟수를 적어요.', toolOptions: { fields: [{ label: '빨리 건너기', unit: '번', max: 5 }, { label: '천천히 건너기', unit: '번', max: 5 }] }, target: { records: true }, levels: { challenge: { toolOptions: { fields: [{ label: '빨리 건너기', unit: '번', max: 5 }, { label: '천천히 건너기', unit: '번', max: 5 }, { label: '두 기록의 차이', unit: '번', max: 5 }] } } }, difficulty: 0.15,
                  predict: { q: '어느 쪽이 끝까지 건넌 횟수가 많을까요?', options: ['빨리 건너기', '천천히 건너기', '같아요'], answer: 1 },
                  conclude: '빨리 지나가는 것과 균형을 잘 잡는 것은 달라요. 천천히 디딜 때 끝까지 건너기 쉬워요.' },
                { prompt: '평균대 건너기를 마치고 해낸 것을 점검 목록에 표시해요.', target: { selfCheck: ['두 팔을 옆으로 벌리고 건넜어요', '눈은 평균대 끝을 보았어요', '끝에서 걸어 내려왔어요'] }, difficulty: 0.1 },
                FREE('평균대 끝까지 건넌 뒤 짝이 건널 때 팔과 눈이 어디에 있는지 살펴보고 한 가지를 말해 준 뒤 표시해요.'),
              ],
            },
          ],
          {
            teacher: '"빨리 건넌 것과 천천히 건넌 것 가운데 어느 쪽이 끝까지 건넌 횟수가 많았나요?" 몇 학생의 기록을 듣고 정리한다. 출구 1번에서 틀린 학생은 다음 시간 오름 기구 활동 전에 팔 벌리기를 먼저 다시 해 본다. 다리를 털며 정리 운동을 한다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '이럴 때는', slots: [{ id: 'right', label: '몸이 오른쪽으로 기울어요' }, { id: 'down', label: '자꾸 발을 내려다보게 돼요' }], cards: ['왼팔을 더 뻗어 무게를 맞춰요', '평균대 끝에 눈을 두어요'] }, prompt: '평균대 위 새 장면에 알맞은 할 일을 이어요.', target: { match: { right: '왼팔을 더 뻗어 무게를 맞춰요', down: '평균대 끝에 눈을 두어요' } }, difficulty: 0.2 },
              { type: 'choice', prompt: '"평균대를 빨리 지나가면 균형을 잘 잡은 것이다"라는 말은?', options: ['맞아요', '틀려요. 천천히 끝까지 건너는 것이 균형이에요'], answer: 1, difficulty: 0.15, explain: '빨리 지나가면 흔들려도 모르고 지나갈 뿐이에요. 천천히 끝까지 디뎌야 균형을 잡은 거예요.' },
              MOOD('평균대를 건너 본 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '평균대 건너기',
          items: [
            { type: 'table', prompt: '두 가지로 건넌 기록을 쓰세요.', columns: ['건너기', '끝까지 건넌 횟수(5번 중)'], cells: [['빨리 건너기', ''], ['천천히 건너기', '']] },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '평균대 위에서 팔은 ___으로 벌리고, 눈은 평균대 ___을 봐요.', answer: '옆, 끝' },
            { type: 'choice', prompt: '몸이 오른쪽으로 기울 때 할 일에 ○ 하세요.', options: ['왼팔을 더 뻗어요', '오른팔을 몸에 붙여요', '뛰어내려요'], answer: '왼팔을 더 뻗어요' },
            { type: 'check', prompt: '오늘 지킨 안전 약속에 ✓ 하세요.', options: ['한 사람씩 올라갔어요', '앞사람이 내려온 뒤 출발했어요', '걸어서 내려왔어요'] },
            { type: 'short', prompt: '빨리 건넌 것과 천천히 건넌 것이 어떻게 달랐는지 쓰세요.' },
          ],
          easy: {
            note: '팔은 옆으로, 눈은 끝으로, 발은 짧게!',
            items: [
              { type: 'choice', prompt: '평균대 위에서 눈은 어디를 볼까요?', options: ['평균대 끝', '내 발'], answer: '평균대 끝' },
              { type: 'short', prompt: '오늘 끝까지 건넌 횟수를 쓰세요.' },
              { type: 'draw', prompt: '팔을 벌리고 평균대를 건너는 내 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드 한 장이나 첫 차례가 미리 놓여 있어요. 평균대 대신 바닥에 붙인 넓은 줄 위를 걸어도 되고, 교사나 짝이 손을 잡아 줘도 돼요.',
          base: '낮은 평균대를 혼자 건너고 두 가지 빠르기를 견주어요.',
          challenge: '올라가기 전 동작까지 넣은 네 차례를 세우고, 함정 카드가 섞인 문항을 풀어요. 두 기록의 차이를 셈해 적어요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 빨리 지나가면 균형을 잘 잡은 것이라고 여긴다 → 빨리·천천히 두 기록을 견주게 한다. ② 고개를 숙여 발만 본다 → 평균대 끝에 작은 표지를 세워 그곳을 보게 한다. ③ 끝에서 뛰어내린다 → 두 발을 모으고 걸어 내려오는 것까지가 건너기라고 정한다. 평균대 높이는 30cm 아래로 하고 아래에 매트를 깐다. 실제 건너기는 교구가 판정하지 않으므로 교사가 관찰한다.',
      }),
      // ───────────────────────── 15 ─────────────────────────
      L(15, {
        title: '오름 기구에서 손발 번갈아 세 칸 오르고 내려오기',
        objective: '손발 넷 가운데 셋을 기구에 붙인 채 손과 발을 한 번에 하나씩 번갈아 옮겨, 오름 기구를 세 칸 올라갔다가 안전하게 내려올 수 있다.',
        illustration: art('a child climbing a low climbing frame three rungs up, keeping three limbs on the bars, with a soft mat below and a friend watching', [
          { motif: 'sun', x: 410, y: 52, s: 0.7 }, { motif: 'cloud', x: 100, y: 48 }, { motif: 'hills', y: 214 },
          { motif: 'tree', x: 430, y: 212, s: 0.8 }, { motif: 'star', x: 240, y: 76, s: 0.6 },
          { motif: 'text', x: 240, y: 126, text: '셋은 붙이고, 하나만 옮겨요', size: 22 },
        ]),
        safety: [HOLD, MAT, BEAM, STOP],
        stages: stages(
          {
            teacher: '교사가 오름 기구 첫 칸에서 손발 넷을 모두 붙인 모습을 보인 뒤, 손 하나만 떼어 위 칸으로 옮긴다. "지금 기구에 붙어 있는 손발은 몇 개인가요?" 셋이라는 대답을 받고, 두 개를 한꺼번에 떼면 어떻게 될지 묻는다. "세 개는 붙이고 하나만 옮기기"를 오늘의 약속으로 칠판에 적는다.',
            student: '선생님이 오름 기구에서 손을 하나 옮길 때, 기구에 붙어 있는 손발이 몇 개인지 세어 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 바르게 오르는 모습 알기', minutes: 9, tool: 'mindmap',
              task: '오름 기구 위 모습 카드를 바른 모습과 위험한 모습으로 나누고, 생긴 일에 알맞은 행동을 이어요.',
              teacher: '"손가락 끝만 걸치면 어떻게 될까요?" 쥐는 법을 직접 보여 주며 엄지까지 감아 쥐게 한다. 꼭대기에서 뛰어내리는 카드를 바른 모습에 넣는 학생은 없도록, 내려오는 것도 오르는 것만큼 천천히 한다고 짚는다.',
              levels: CARD,
              items: [
                { prompt: '오름 기구 위 모습 카드를 바른 모습과 위험한 모습으로 나누어요.', toolOptions: { topic: '오름 기구 위', slots: ['바른 모습', '위험한 모습'], cards: ['손발 셋을 늘 붙여 두어요', '한 번에 손이나 발 하나만 옮겨요', '두 손을 한꺼번에 놓아요', '세 칸 위에서 매트로 뛰어내려요'] }, target: { sort: { '바른 모습': ['손발 셋을 늘 붙여 두어요', '한 번에 손이나 발 하나만 옮겨요'], '위험한 모습': ['두 손을 한꺼번에 놓아요', '세 칸 위에서 매트로 뛰어내려요'] } }, levels: { easy: { state: { at: { '손발 셋을 늘 붙여 두어요': 0 } } } }, difficulty: 0.1 },
                { prompt: '오름 기구에서 생긴 일에 알맞은 행동 카드를 이어요.', toolOptions: { mode: 'match', topic: '이럴 때는', slots: [{ id: 'busy', label: '앞 친구가 아직 위에 있어요' }, { id: 'sweat', label: '손에 땀이 나 미끄러워요' }, { id: 'top', label: '세 칸까지 다 올랐어요' }], cards: ['아래에서 차례를 기다려요', '내려와서 손을 닦고 다시 올라요', '오른 차례를 거꾸로 하여 천천히 내려와요'] }, target: { match: { busy: '아래에서 차례를 기다려요', sweat: '내려와서 손을 닦고 다시 올라요', top: '오른 차례를 거꾸로 하여 천천히 내려와요' } }, levels: { easy: { state: { at: { '아래에서 차례를 기다려요': 0 } } } }, difficulty: 0.15 },
                { prompt: '오름 기구 가로대를 바르게 쥐는 방법만 골라요.', toolOptions: { mode: 'pick', topic: '바르게 쥐기', cards: ['엄지까지 감아 꽉 쥐어요', '손바닥 전체로 가로대를 감싸요', '손가락 끝만 걸쳐요', '앞 친구의 발목을 잡아요'] }, target: { pick: ['엄지까지 감아 꽉 쥐어요', '손바닥 전체로 가로대를 감싸요'] }, difficulty: 0.15,
                  conclude: '손발 셋은 붙이고 하나만 옮기며, 가로대는 엄지까지 감아 쥐어야 안전하게 오를 수 있어요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 세 칸 오르고 내려오기', minutes: 17, tool: 'timer',
              task: '모둠별로 차례를 지켜 오름 기구를 세 칸 오르고 내려와요. 짝은 아래에서 손발 셋이 붙어 있는지 세어 주고, 성공한 횟수를 적어요.',
              teacher: '"손 하나, 발 하나, 손 하나, 발 하나." 리듬을 말로 붙여 주면 두 개를 한꺼번에 떼는 학생이 줄어든다. 세 칸이 무서운 학생은 한 칸만 올라갔다 내려와도 된다고 말한다. 아래 짝은 기구 바로 밑이 아니라 한 걸음 옆에 선다.',
              levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
              items: [
                { prompt: '오름 기구에 오르기 전에 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['기구 아래에 매트가 깔려 있어요', '가로대가 젖어 있지 않아요', '기구 위에 앞 친구가 없어요', '손이 마르고 미끄럽지 않아요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '세 번 도전해 세 칸 오르고 내려오기에 성공한 횟수와, 짝이 센 손발 셋 지키기 횟수를 적어요.', toolOptions: { fields: [{ label: '세 칸 오르고 내려오기 성공', unit: '번', max: 3 }, { label: '손발 셋을 끝까지 지킨 도전', unit: '번', max: 3 }] }, target: { records: true }, difficulty: 0.15 },
                { prompt: '오르고 내려온 뒤 해낸 것을 점검 목록에 표시해요.', target: { selfCheck: ['손발 셋을 붙인 채 하나만 옮겼어요', '엄지까지 감아 쥐었어요', '뛰어내리지 않고 걸어 내려왔어요', '차례를 지켜 기다렸어요'] }, difficulty: 0.1 },
                FREE('짝이 오를 때 "손 하나, 발 하나"를 말로 세어 주고, 손발 셋이 떨어진 순간이 있었는지 알려 준 뒤 표시해요.'),
              ],
            },
          ],
          {
            teacher: '"오를 때와 내려올 때 가운데 언제가 더 어려웠나요?" 내려올 때 발 디딜 곳을 찾기 어렵다는 이야기가 나오면 다음 시간에 다시 다룬다고 말한다. 출구 2번을 틀린 학생은 손발 셋을 다시 세어 보게 한다. 손목과 어깨를 풀며 마친다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '오름 기구 약속', cards: ['기구 위에는 한 사람씩 올라요', '내려올 때도 손발 셋을 붙여요', '친구가 오를 때 기구를 흔들어요'] }, prompt: '오름 기구에서 지킬 약속만 골라요.', target: { pick: ['기구 위에는 한 사람씩 올라요', '내려올 때도 손발 셋을 붙여요'] }, difficulty: 0.1 },
              { type: 'choice', prompt: '오름 기구에서 왼손을 위 칸으로 옮기는 동안 기구에 붙어 있어야 하는 것은?', options: ['오른손과 두 발', '두 발만', '오른손만'], answer: 0, difficulty: 0.2, explain: '하나를 옮길 때 나머지 셋은 기구에 붙어 있어야 해요.' },
              MOOD('오름 기구에 올라 본 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '셋은 붙이고, 하나만 옮겨요',
          items: [
            { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '오름 기구에서는 손발 넷 가운데 ___ 개를 늘 붙이고, ___ 개만 옮겨요.', answer: '3, 1' },
            { type: 'table', prompt: '오늘 도전 기록을 쓰세요.', columns: ['기록', '세 번 가운데'], cells: [['세 칸 오르고 내려오기 성공', ''], ['손발 셋을 끝까지 지킨 도전', '']] },
            { type: 'choice', prompt: '손에 땀이 나 미끄러울 때 알맞은 행동에 ○ 하세요.', options: ['더 빨리 올라가요', '내려와서 손을 닦고 다시 올라요', '한 손으로만 잡아요'], answer: '내려와서 손을 닦고 다시 올라요' },
            { type: 'check', prompt: '오르기 전에 확인한 것에 ✓ 하세요.', options: ['매트', '젖지 않은 가로대', '위에 친구가 없는지'] },
            { type: 'short', prompt: '내려올 때도 천천히 해야 하는 까닭을 쓰세요.' },
          ],
          easy: {
            note: '"손 하나, 발 하나" 하고 말하며 하나씩 옮겨요.',
            items: [
              { type: 'choice', prompt: '한 번에 몇 개를 옮기나요?', options: ['하나', '둘'], answer: '하나' },
              { type: 'short', prompt: '오늘 몇 칸까지 올랐는지 쓰세요.' },
              { type: 'draw', prompt: '오름 기구를 잡고 있는 내 손 모양을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드 한 장이 미리 놓여 있고, 맞는 곳에 놓으면 바로 표시돼요. 한 칸만 오르고 내려와도 돼요.',
          base: '세 칸을 오르고 내려와요.',
          challenge: '시간 재기로 오르고 내려오는 시간을 재되, 손발 셋 지키기를 먼저 지킨 기록만 인정해요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 손과 발을 한꺼번에 옮긴다 → "손 하나, 발 하나"를 말로 붙인다. ② 손가락 끝만 걸친다 → 엄지까지 감아 쥐는 모양을 짝끼리 확인한다. ③ 꼭대기에서 뛰어내린다 → 오른 차례를 거꾸로 하여 내려오는 것까지가 오르기라고 정한다. 높이는 세 칸(학생 키보다 낮게)으로 하고 아래에 매트를 깐다. 교사는 기구 옆에서 한 명씩 관찰한다.',
      }),
      // ───────────────────────── 16 ─────────────────────────
      L(16, {
        title: '방위표를 지도에 맞추고 학교 숲길 걷기',
        objective: '방위표를 지도의 북쪽에 맞추어 장소 사이의 방위를 읽고, 짝과 함께 학교 숲길을 걸어 정해진 곳들을 차례로 찾을 수 있다.',
        illustration: art('two children holding a paper map and a round compass card on a school garden path, with pine trees, a small pond and a pavilion along the way', [
          { motif: 'sun', x: 410, y: 52, s: 0.7 }, { motif: 'cloud', x: 100, y: 46 }, { motif: 'hills', y: 214 },
          { motif: 'tree', x: 70, y: 210 }, { motif: 'tree', x: 400, y: 214, s: 0.8 }, { motif: 'flower', x: 160, y: 220 },
          { motif: 'text', x: 240, y: 120, text: '방위표를 지도에 맞춰요', size: 22 },
        ]),
        safety: [OUT, SHOE, '정해진 구역 경계(노란 끈) 밖으로 나가지 않고, 정해진 시간에 출발로 돌아와요.', STOP],
        stages: stages(
          {
            teacher: '북쪽 화살표가 오른쪽을 가리키는 지도를 보여 준다. "이 지도에서 위쪽이 북쪽일까요?" 지난 시간에 위쪽이 북쪽이었던 지도와 견주게 한다. "방위표의 빨간 바늘을 지도 북쪽 화살표에 맞추면 나머지 방위도 바로 맞아요." 교사가 방위표를 돌려 맞추는 모습을 보인다. 오늘은 실제 학교 숲길(화단 길)을 짝과 걸어 다섯 곳을 찾는다고 알린다.',
            student: '북쪽 화살표가 옆을 가리키는 지도를 보고, 이 지도의 북쪽이 어디인지 찾아봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 방위표 맞추고 장소 사이 방위 읽기', minutes: 10, tool: 'map',
              task: '지도의 북쪽 화살표에 방위표를 맞춘 뒤, 출발 장소에 서서 도착 장소가 어느 방위에 있는지 골라요.',
              teacher: '"방위표를 먼저 맞췄나요?" 위쪽을 무조건 북쪽으로 고르는 학생에게 북쪽 화살표를 손가락으로 따라가게 한다. 출발 장소에 연필을 세워 두고 도착 장소 쪽으로 눕혀 보게 하면 방위를 고르기 쉽다.',
              levels: { easy: { readout: true }, base: {}, challenge: {} },
              items: [
                { prompt: '이 지도는 북쪽 화살표가 오른쪽을 가리켜요. 방위표를 돌려 지도의 북쪽에 맞춰요.', toolOptions: { mode: 'compass', title: '학교 숲길', north: 90, grid: [6, 4], places: [{ name: '출발', icon: 'school', at: [0, 3] }, { name: '큰 소나무', icon: 'forest', at: [3, 3] }, { name: '연못', icon: 'dot', at: [3, 0] }, { name: '정자', icon: 'park', at: [0, 0], legend: '정자' }] }, target: { align: true }, difficulty: 0.2 },
                { prompt: '출발에서 큰 소나무는 어느 방위에 있나요? 방위를 골라요.', toolOptions: { mode: 'compass', title: '학교 숲길', grid: [6, 4], places: [{ name: '출발', icon: 'school', at: [0, 3] }, { name: '큰 소나무', icon: 'forest', at: [3, 3] }, { name: '연못', icon: 'dot', at: [3, 0] }, { name: '정자', icon: 'park', at: [0, 0], legend: '정자' }] }, target: { from: '출발', to: '큰 소나무' }, levels: { challenge: { prompt: '출발에서 연못은 어느 방위에 있나요? 두 방위를 섞은 이름으로 골라요.', target: { from: '출발', to: '연못' } } }, difficulty: 0.15 },
                { prompt: '큰 소나무에서 연못은 어느 방위에 있나요? 방위를 골라요.', toolOptions: { mode: 'compass', title: '학교 숲길', grid: [6, 4], places: [{ name: '출발', icon: 'school', at: [0, 3] }, { name: '큰 소나무', icon: 'forest', at: [3, 3] }, { name: '연못', icon: 'dot', at: [3, 0] }, { name: '정자', icon: 'park', at: [0, 0], legend: '정자' }] }, target: { from: '큰 소나무', to: '연못' }, difficulty: 0.15,
                  conclude: '방위표를 지도 북쪽에 맞추고, 출발 장소에 서서 도착 장소 쪽을 보면 방위를 읽을 수 있어요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 짝과 학교 숲길 다섯 곳 찾기', minutes: 16, tool: 'timer',
              task: '짝과 지도와 방위표를 들고 학교 숲길을 걸어요. 다섯 곳에 놓인 표지 글자를 찾아 적고, 정한 시간 안에 출발로 돌아와요.',
              teacher: '"뛰지 말고 지도를 보며 걸어요. 길을 모르겠으면 그 자리에 서서 방위표부터 다시 맞춰요." 표지는 교사가 미리 경계 안에만 놓는다. 12분이 지나면 호루라기를 불어 모두 출발로 모인다.',
              levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
              items: [
                { prompt: '숲길 걷기를 하기 전에 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['노란 끈 경계를 확인했어요', '짝과 손이 닿을 거리로 걷기로 했어요', '돌아올 시각을 알아요', '신발 끈을 단단히 묶었어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '찾은 표지 수와 출발로 돌아오기까지 걸린 시간을 적어요.', toolOptions: { fields: [{ label: '찾은 표지', unit: '개', max: 5 }, { label: '걸린 시간', unit: '분' }] }, target: { records: true }, levels: { challenge: { toolOptions: { fields: [{ label: '찾은 표지', unit: '개', max: 5 }, { label: '걸린 시간', unit: '분' }, { label: '방위표를 다시 맞춘 횟수', unit: '번' }] } } }, difficulty: 0.15 },
                { prompt: '숲길 걷기를 마치고 해낸 것을 점검 목록에 표시해요.', target: { selfCheck: ['방위표를 지도 북쪽에 맞추고 걸었어요', '짝과 떨어지지 않고 함께 걸었어요', '정해진 길로만 걸었어요'] }, difficulty: 0.1 },
                FREE('찾은 표지 글자를 짝과 맞추어 보고, 헷갈렸던 곳 하나를 지도에 표시해 본 뒤 표시해요.'),
              ],
            },
          ],
          {
            teacher: '"길을 헤맨 짝은 어디서 헤맸나요? 그때 방위표는 맞춰져 있었나요?" 두세 짝의 이야기를 듣는다. 다음 시간에 헤맨 까닭을 더 살펴본다고 알린다. 출구 1번을 틀린 학생은 방위표 맞추기를 먼저 했는지 묻는다. 숲길에서 본 것을 한 낱말로 말하며 마친다.',
            exitTicket: [
              { type: 'tool', tool: 'map', options: { mode: 'compass', title: '학교 숲길', grid: [6, 4], places: [{ name: '출발', icon: 'school', at: [0, 3] }, { name: '큰 소나무', icon: 'forest', at: [3, 3] }, { name: '연못', icon: 'dot', at: [3, 0] }, { name: '정자', icon: 'park', at: [0, 0], legend: '정자' }] }, prompt: '연못에서 정자는 어느 방위에 있나요?', target: { from: '연못', to: '정자' }, difficulty: 0.15 },
              { type: 'choice', prompt: '북쪽 화살표가 왼쪽을 가리키는 지도에서 지도 오른쪽은 어느 방위인가요?', options: ['북쪽', '남쪽', '동쪽'], answer: 1, difficulty: 0.3, explain: '왼쪽이 북쪽이면 그 반대쪽인 오른쪽은 남쪽이에요.' },
              MOOD('짝과 숲길을 걸어 본 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '방위표 맞추고 걸어요',
          items: [
            { type: 'table', prompt: '찾은 표지 글자와 그곳의 방위를 쓰세요.', columns: ['차례', '표지 글자', '앞 장소에서 어느 방위?'], cells: [['1', '', ''], ['2', '', ''], ['3', '', ''], ['4', '', ''], ['5', '', '']] },
            { type: 'choice', prompt: '지도를 볼 때 가장 먼저 할 일에 ○ 하세요.', options: ['방위표를 지도 북쪽에 맞춰요', '가장 가까운 곳으로 뛰어가요', '지도를 접어 넣어요'], answer: '방위표를 지도 북쪽에 맞춰요' },
            { type: 'blank', prompt: '빈칸에 알맞은 방위를 쓰세요.', text: '북쪽 화살표가 오른쪽을 가리키면, 지도 위쪽은 ___쪽이에요.', answer: '서' },
            { type: 'short', prompt: '숲길을 걸으며 길을 헤맸을 때 어떻게 했는지 쓰세요.' },
          ],
          easy: {
            note: '빨간 바늘(북)을 지도 북쪽 화살표에 맞추면 나머지 방위도 맞아요.',
            items: [
              { type: 'choice', prompt: '방위표의 빨간 바늘은 어느 방위인가요?', options: ['북', '남'], answer: '북' },
              { type: 'short', prompt: '오늘 찾은 표지 수를 쓰세요.' },
              { type: 'draw', prompt: '오늘 걸은 숲길에서 본 것 하나를 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '방위표를 돌리면 지금 각도가 글자로 보여요. 숲길 걷기는 교사가 정한 세 곳만 찾아도 돼요.',
          base: '방위표를 맞추고 네 방위로 읽어요.',
          challenge: '북동처럼 두 방위를 섞은 방위를 읽고, 방위표를 다시 맞춘 횟수까지 적어요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 지도 위쪽을 늘 북쪽으로 읽는다 → 북쪽 화살표를 손가락으로 따라가고 방위표부터 맞추게 한다. ② 출발과 도착을 바꾸어 방위를 읽는다 → 출발 장소에 연필을 세우고 도착 쪽으로 눕혀 보게 한다. ③ 걷기를 달리기 시합으로 여긴다 → 기록보다 짝과 함께, 정해진 길로 걷는 것을 먼저 점검한다. 표지는 경계 안 눈에 띄는 곳에만 둔다.',
      }),
      // @@NEXT@@
    ],
  });
})();
