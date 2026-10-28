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
                { prompt: '출발에서 북쪽으로 두 칸 가면 첫째 깃발이 있어요. 그 자리에 핀을 꽂아요.', toolOptions: { title: '학교 뒤뜰 숲길', grid: [6, 4], places: [{ name: '출발', icon: 'school', at: [0, 3] }, { name: '큰 나무', icon: 'forest', at: [2, 3] }, { name: '징검돌', icon: 'dot', at: [1, 1] }, { name: '흔들다리', icon: 'bridge', at: [4, 1] }, { name: '쉼터', icon: 'park', at: [5, 3], legend: '쉼터' }] }, target: { from: '출발', dir: '북', steps: 2 }, levels: { challenge: { prompt: '출발에서 북동쪽으로 두 칸 가면 첫째 깃발이 있어요. 그 자리에 핀을 꽂아요.', target: { from: '출발', dir: '북동', steps: 2 } } }, difficulty: 0.15,
                  hints: ['문장에 나온 장소를 지도에서 먼저 찾고, 그곳에서 말한 방향으로 한 칸씩 세어 가요.', '방향은 지도의 방위 화살표로 정해요. 화살표 끝이 가리키는 쪽이 북쪽이에요.', '출발 칸에 손가락을 두고 말한 방향으로 한 칸, 두 칸 옮겨 멈춘 칸에 핀을 꽂아요.'] },
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
                { prompt: '출발에서 큰 소나무는 어느 방위에 있나요? 방위를 골라요.', toolOptions: { mode: 'compass', title: '학교 숲길', grid: [6, 4], places: [{ name: '출발', icon: 'school', at: [0, 3] }, { name: '큰 소나무', icon: 'forest', at: [3, 3] }, { name: '연못', icon: 'dot', at: [3, 0] }, { name: '정자', icon: 'park', at: [0, 0], legend: '정자' }] }, target: { from: '출발', to: '큰 소나무' }, levels: { challenge: { prompt: '출발에서 연못은 어느 방위에 있나요? 두 방위를 섞은 이름으로 골라요.', target: { from: '출발', to: '연못' } } }, difficulty: 0.15,
                  hints: ['방위표의 빨간 바늘이 지도의 방위 화살표와 같은 쪽을 가리키는지 먼저 봐요.', '문장의 앞 장소에 서서 뒤 장소 쪽을 바라본다고 생각하고, 그쪽에 있는 방위표 글자를 읽어요.', '앞 장소에서 뒤 장소까지 손가락을 옮겨 보고, 손가락이 움직인 쪽에 있는 방위표 글자를 골라요. 위와 옆으로 함께 움직였으면 두 방위를 섞어 읽어요.'] },
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
      // ───────────────────────── 17 ─────────────────────────
      L(17, {
        title: '평균대에서 흔들린 곳 짚고 팔과 눈 자세 고치기',
        objective: '평균대를 건너며 흔들렸던 곳을 짚어 그때 팔과 눈이 어디에 있었는지 말하고, 다음에 쓸 자세 하나를 골라 적을 수 있다.',
        illustration: art('a child pointing at the middle of a low balance beam while a partner shows arms spread wide, with small paper footprints on the beam', [
          { motif: 'sun', x: 410, y: 52, s: 0.6 }, { motif: 'cloud', x: 110, y: 50 }, { motif: 'hills', y: 214 },
          { motif: 'star', x: 330, y: 150, s: 0.6 }, { motif: 'leaf', x: 80, y: 210 },
          { motif: 'text', x: 240, y: 124, text: '어디서 흔들렸을까?', size: 24 },
        ]),
        safety: [BEAM, MAT, SPACE, STOP],
        stages: stages(
          {
            teacher: '평균대를 칠판에 길게 그리고 처음·가운데·끝을 나눈다. "지난번 평균대에서 어디쯤 흔들렸나요? 손가락으로 짚어 볼까요?" 몇 학생이 짚으면 "그때 흔들린 것은 무서워서였을까요, 팔과 눈 때문이었을까요?" 하고 묻는다. "무서워서 그래요"라는 대답이 나오면 바로 고치지 말고, 오늘 짝이 흔들린 순간의 팔과 눈을 살펴서 알아보자고 한다.',
            student: '평균대 그림에서 지난번 내가 흔들렸던 곳을 짚고, 그때 무엇이 어려웠는지 떠올려 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 흔들린 까닭을 팔·눈·발로 나누기', minutes: 9, tool: 'mindmap',
              task: '친구들이 말한 흔들린 까닭 카드를 팔·눈·발 가운데 어디 때문인지 나누고, 흔들린 순간에 바꿀 자세를 이어요.',
              teacher: '"무서운 마음도 있었겠지만, 그때 팔은 어디 있었나요?" 겁이 나서 흔들렸다고만 말하는 학생에게 그 순간 몸의 한 곳을 짚게 한다. 옆 친구를 쳐다본 카드를 팔에 넣은 학생에게는 무엇을 보고 있었는지 묻는다.',
              levels: CARD,
              items: [
                { prompt: '평균대에서 흔들린 까닭 카드를 팔·눈·발 가운데 어디 때문인지 나누어요.', toolOptions: { topic: '흔들린 까닭', slots: ['팔', '눈', '발'], cards: ['두 팔을 몸에 붙이고 걸었어요', '팔을 머리 위로 번쩍 들었어요', '고개를 숙여 발만 내려다보았어요', '옆 줄 친구를 쳐다보았어요', '성큼성큼 크게 디뎠어요'] }, target: { sort: { '팔': ['두 팔을 몸에 붙이고 걸었어요', '팔을 머리 위로 번쩍 들었어요'], '눈': ['고개를 숙여 발만 내려다보았어요', '옆 줄 친구를 쳐다보았어요'], '발': ['성큼성큼 크게 디뎠어요'] } }, levels: { easy: { state: { at: { '두 팔을 몸에 붙이고 걸었어요': 0 } } }, challenge: { prompt: '흔들린 까닭 카드를 팔·눈·발로 나누어요. 흔들린 까닭이 아닌 카드는 어느 가지에도 넣지 않아요.', toolOptions: { cards: ['두 팔을 몸에 붙이고 걸었어요', '팔을 머리 위로 번쩍 들었어요', '고개를 숙여 발만 내려다보았어요', '옆 줄 친구를 쳐다보았어요', '성큼성큼 크게 디뎠어요', '끝에서 두 발을 모으고 걸어 내려왔어요'] } } }, difficulty: 0.15,
                  hints: ['카드에 나온 몸의 부분이 무엇인지 먼저 찾아요. 무엇을 보았는지는 눈, 어떻게 디뎠는지는 발이에요.', '쳐다보거나 내려다본 것은 몸을 움직인 것이 아니라 보는 곳이 바뀐 거예요.', '팔이 어디 있었는지 말하는 카드 두 장, 무엇을 보았는지 말하는 카드 두 장, 디딘 걸음을 말하는 카드 한 장이에요.'] },
                { prompt: '흔들린 순간에 다음에 바꿀 자세 카드를 이어요.', toolOptions: { mode: 'match', topic: '다음에는', slots: [{ id: 'arm', label: '팔을 몸에 붙였더니 몸이 옆으로 기울었어요' }, { id: 'eye', label: '발을 내려다보다 몸이 앞으로 쏠렸어요' }, { id: 'step', label: '크게 디디다 발이 평균대 옆으로 빗나갔어요' }], cards: ['두 팔을 어깨높이로 옆으로 벌려요', '눈을 평균대 끝 표지에 두어요', '발 길이만큼 짧게 디뎌요'] }, target: { match: { arm: '두 팔을 어깨높이로 옆으로 벌려요', eye: '눈을 평균대 끝 표지에 두어요', step: '발 길이만큼 짧게 디뎌요' } }, levels: { easy: { state: { at: { '두 팔을 어깨높이로 옆으로 벌려요': 0 } } } }, difficulty: 0.15 },
                { prompt: '준호가 "나는 겁이 많아서 흔들린 거야. 자세는 상관없어."라고 말해요. 준호에게 해 줄 알맞은 말만 골라요.', toolOptions: { mode: 'pick', topic: '준호에게', cards: ['흔들린 곳에서 팔이 어디 있었는지 같이 살펴보자', '눈을 끝에 두고 한 번 더 건너 보자', '겁이 나면 어쩔 수 없어', '평균대는 그만하고 쉬자'] }, target: { pick: ['흔들린 곳에서 팔이 어디 있었는지 같이 살펴보자', '눈을 끝에 두고 한 번 더 건너 보자'] }, levels: { challenge: { prompt: '준호가 "겁이 많아서 흔들린 거야. 자세는 상관없어."라고 말해요. 해 줄 알맞은 말만 골라요. 그럴듯하지만 틀린 카드가 섞여 있어요.', toolOptions: { cards: ['흔들린 곳에서 팔이 어디 있었는지 같이 살펴보자', '눈을 끝에 두고 한 번 더 건너 보자', '겁이 나면 어쩔 수 없어', '평균대는 그만하고 쉬자', '흔들리지 않게 빨리 뛰어 건너 봐'] } } }, difficulty: 0.2,
                  conclude: '겁이 날 때도 팔과 눈의 자세를 바꾸면 덜 흔들려요. 흔들림은 자세와 이어져 있어요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 짝이 짚어 준 곳을 고친 자세로 다시 건너기', minutes: 17, tool: 'timer',
              task: '짝끼리 번갈아 낮은 평균대를 건너요. 보는 짝은 흔들린 곳을 짚어 주고 그때 팔과 눈을 말해 줘요. 고를 자세를 하나 정해 다섯 번 다시 건너고 지난 기록과 견주어요.',
              teacher: '"흔들렸다고 놀리는 것이 아니라 고칠 곳을 찾아 주는 거예요." 보는 짝은 평균대 옆 한 걸음 떨어진 곳에서 본다. 지난 기록은 14차시 활동지의 천천히 건너기 기록을 옮겨 적게 하고, 기록이 없는 학생은 오늘 첫 다섯 번을 지난 기록으로 쓴다.',
              levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
              items: [
                { prompt: '평균대에 오르기 전에 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['평균대 아래에 매트가 깔려 있어요', '앞 친구가 다 내려왔어요', '보는 짝이 한 걸음 떨어져 섰어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '짝을 관찰하는 차례대로 카드를 놓아요.', toolOptions: { cards: ['흔들린 곳을 손가락으로 짚어 알려 줘요', '평균대 옆 한 걸음 떨어진 곳에 서요', '짝이 건너는 동안 팔과 눈을 봐요'] }, target: { order: ['평균대 옆 한 걸음 떨어진 곳에 서요', '짝이 건너는 동안 팔과 눈을 봐요', '흔들린 곳을 손가락으로 짚어 알려 줘요'] }, levels: { easy: { state: { order: ['평균대 옆 한 걸음 떨어진 곳에 서요', '흔들린 곳을 손가락으로 짚어 알려 줘요', '짝이 건너는 동안 팔과 눈을 봐요'] } } }, difficulty: 0.15 },
                { prompt: '지난 기록과, 고른 자세로 다섯 번 건넌 오늘 기록을 적어요.', toolOptions: { fields: [{ label: '지난번 끝까지 건넌 횟수', unit: '번', max: 5 }, { label: '고친 자세로 끝까지 건넌 횟수', unit: '번', max: 5 }] }, target: { records: true }, levels: { challenge: { toolOptions: { fields: [{ label: '지난번 끝까지 건넌 횟수', unit: '번', max: 5 }, { label: '고친 자세로 끝까지 건넌 횟수', unit: '번', max: 5 }, { label: '흔들린 곳이 바뀐 횟수', unit: '번', max: 5 }] } } }, difficulty: 0.15 },
                { prompt: '다시 건너고 해낸 것을 점검 목록에 표시해요.', target: { selfCheck: ['흔들린 곳을 짚어 보았어요', '그때 팔과 눈이 어디 있었는지 말했어요', '다음에 쓸 자세를 하나 정했어요'] }, difficulty: 0.1 },
                FREE('짝에게 "네가 흔들린 곳은 여기였고, 그때 팔(눈)은 ○○에 있었어."라고 말해 준 뒤 역할을 바꾸고 표시해요.'),
              ],
            },
          ],
          {
            teacher: '"자세를 바꾸고 나서 흔들린 곳이 달라진 사람?" 두세 명에게 무엇을 바꾸었는지 듣는다. 무서워서 흔들렸다는 말이 다시 나오면 "무서운 마음이 들 때 어떤 자세가 도움이 되었나요?"로 되묻는다. 출구 1번을 틀린 학생은 다음 시간 오름 기구 활동 전에 흔들린 장면을 몸으로 다시 해 보게 한다. 발목을 돌리며 마친다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '다음에는', slots: [{ id: 'up', label: '팔을 위로 든 채 걷다 휘청였어요' }, { id: 'side', label: '옆 줄 친구를 보다 발이 빗나갔어요' }], cards: ['팔을 어깨높이로 내려 옆으로 벌려요', '눈을 평균대 끝에 두어요'] }, prompt: '새로 흔들린 장면에 알맞은 다음 자세를 이어요.', target: { match: { up: '팔을 어깨높이로 내려 옆으로 벌려요', side: '눈을 평균대 끝에 두어요' } }, difficulty: 0.2 },
              { type: 'choice', prompt: '"평균대에서 흔들리는 것은 무서워서일 뿐, 자세와는 상관없다"는 말은?', options: ['맞아요', '틀려요. 팔과 눈의 자세를 바꾸면 덜 흔들려요'], answer: 1, difficulty: 0.15, explain: '무서운 마음이 있어도 팔을 벌리고 끝을 보면 몸이 덜 흔들려요.' },
              MOOD('흔들린 곳을 짚고 다시 건너 본 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '흔들린 곳을 짚어요',
          items: [
            { type: 'draw', prompt: '평균대를 길게 그리고, 내가 흔들렸던 곳에 ✕ 표시를 하세요.' },
            { type: 'table', prompt: '흔들렸던 때의 자세를 쓰세요.', columns: ['살펴볼 곳', '그때 어디에 있었나요?'], cells: [['팔', ''], ['눈', ''], ['발(걸음)', '']] },
            { type: 'table', prompt: '건넌 기록을 견주어 쓰세요.', columns: ['때', '끝까지 건넌 횟수(5번 중)'], cells: [['지난번', ''], ['고친 자세로', '']] },
            { type: 'choice', prompt: '발만 내려다보다 흔들렸을 때 바꿀 자세에 ○ 하세요.', options: ['눈을 평균대 끝에 두어요', '팔을 몸에 붙여요', '더 빨리 걸어요'], answer: '눈을 평균대 끝에 두어요' },
            { type: 'short', prompt: '다음 시간에 쓸 자세 하나를 쓰세요.' },
          ],
          easy: {
            note: '팔은 어디? 눈은 어디? 두 가지만 떠올려요.',
            items: [
              { type: 'choice', prompt: '흔들릴 때 팔은 어떻게 할까요?', options: ['옆으로 벌려요', '몸에 붙여요'], answer: '옆으로 벌려요' },
              { type: 'draw', prompt: '평균대에서 흔들린 곳에 ✕ 하세요.' },
              { type: 'short', prompt: '다음에 쓸 자세를 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드 한 장이나 첫 차례가 미리 놓여 있고, 맞는 곳에 놓으면 바로 표시돼요. 보기가 두 개로 줄어요. 바닥 줄 위에서 다시 해도 돼요.',
          base: '흔들린 까닭을 팔·눈·발로 나누고, 고른 자세로 다시 건너 기록을 견주어요.',
          challenge: '흔들린 까닭이 아닌 함정 카드가 섞여 있고, 보기의 결과는 고른 뒤에만 보여요. 흔들린 곳이 바뀐 횟수까지 적어요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 흔들리는 것은 무서워서일 뿐 자세와 상관없다고 여긴다 → 짝이 짚어 준 순간의 팔과 눈을 말하게 하고, 자세를 바꾼 뒤 기록을 견주게 한다. ② 짝의 흔들림을 놀림거리로 삼는다 → "고칠 곳을 찾아 주는 말"의 틀을 칠판에 적어 두고 그대로 말하게 한다. ③ 고칠 자세를 여러 개 한꺼번에 바꾼다 → 한 번에 하나만 바꾸어야 무엇이 도움이 됐는지 안다고 말한다. 실제 건너기는 교구가 판정하지 않으므로 교사가 관찰한다.',
      }),
      // ───────────────────────── 18 ─────────────────────────
      L(18, {
        title: '오름 기구 내려오기에서 멈칫한 순간 돌아보기',
        objective: '오름 기구를 내려올 때 멈칫하거나 흔들린 순간의 까닭을 반 기록 그래프에서 찾고, 다음에 쓸 내려오기 자세를 하나 골라 적을 수 있다.',
        illustration: art('a child carefully climbing down a low climbing frame looking at the rung below, feet first, with a soft mat and a friend watching from the side', [
          { motif: 'sun', x: 410, y: 52, s: 0.6 }, { motif: 'cloud', x: 100, y: 48 }, { motif: 'hills', y: 214 },
          { motif: 'tree', x: 430, y: 212, s: 0.8 }, { motif: 'leaf', x: 70, y: 212 },
          { motif: 'text', x: 240, y: 126, text: '눈 먼저, 발 하나, 손 하나', size: 22 },
        ]),
        safety: [HOLD, MAT, BEAM, STOP],
        stages: stages(
          {
            teacher: '"지난번 오름 기구에서 오를 때와 내려올 때 가운데 언제 더 멈칫했나요?" 손을 들게 해 수를 센다. 대부분 내려올 때라고 하면 "왜 내려올 때가 더 어려울까요?"라고 묻고, 발 디딜 곳이 잘 안 보인다는 대답을 기다린다. 오늘은 반 친구들이 멈칫한 까닭을 그래프로 보고, 내 내려오기 자세를 고쳐 본다고 알린다.',
            student: '오름 기구에서 오를 때와 내려올 때 가운데 언제 더 어려웠는지 손을 들어 답해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 멈칫한 까닭 그래프 읽기', minutes: 7, tool: 'chart',
              task: '우리 반이 내려오다 멈칫한 까닭을 모은 그래프를 읽고, 가장 많은 까닭과 고칠 자세를 찾아요.',
              teacher: '"막대가 가장 긴 것이 우리 반이 가장 많이 멈칫한 까닭이에요." 그래프의 수는 예시로 지은 자료라고 말해 준다. 가장 긴 막대를 고른 학생에게 "그럼 우리가 먼저 고칠 것은 무엇일까요?"라고 이어 묻는다.',
              levels: { easy: { showValues: true }, base: {}, challenge: {} },
              items: [
                { prompt: '내려오다 멈칫한 까닭 그래프에서 가장 많은 까닭을 골라요.', toolOptions: { type: 'bar', mode: 'read', title: '내려오다 멈칫한 까닭(우리 반 26명)', unit: '명', xLabel: '까닭', yLabel: '학생 수', max: 12, scale: 1, data: [['디딜 칸이 안 보여서', 11], ['두 손을 함께 떼서', 6], ['손이 미끄러워서', 3], ['서둘러서', 6]], question: '가장 많은 학생이 멈칫한 까닭은?', choices: ['디딜 칸이 안 보여서', '두 손을 함께 떼서', '손이 미끄러워서', '서둘러서'] }, target: { pick: 0 }, difficulty: 0.1 },
                { prompt: '같은 그래프에서 디딜 칸이 안 보여서 멈칫한 학생은 손이 미끄러워서 멈칫한 학생보다 몇 명 더 많은지 써요.', toolOptions: { type: 'bar', mode: 'read', title: '내려오다 멈칫한 까닭(우리 반 26명)', unit: '명', xLabel: '까닭', yLabel: '학생 수', max: 12, scale: 1, data: [['디딜 칸이 안 보여서', 11], ['두 손을 함께 떼서', 6], ['손이 미끄러워서', 3], ['서둘러서', 6]], question: '두 막대의 차이는 몇 명인가요?' }, target: { value: 8 }, difficulty: 0.25 },
                { prompt: '같은 그래프에서 학생 수가 가장 적은 까닭을 골라요.', toolOptions: { type: 'bar', mode: 'read', title: '내려오다 멈칫한 까닭(우리 반 26명)', unit: '명', xLabel: '까닭', yLabel: '학생 수', max: 12, scale: 1, data: [['디딜 칸이 안 보여서', 11], ['두 손을 함께 떼서', 6], ['손이 미끄러워서', 3], ['서둘러서', 6]], question: '가장 적은 학생이 멈칫한 까닭은?', choices: ['디딜 칸이 안 보여서', '두 손을 함께 떼서', '손이 미끄러워서', '서둘러서'] }, target: { pick: 2 }, difficulty: 0.1 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 멈칫한 까닭마다 고칠 자세 정하기', minutes: 6, tool: 'mindmap',
              task: '그래프에서 찾은 까닭마다 고칠 자세를 잇고, 안전하게 내려오는 모습을 골라요.',
              teacher: '"그래프에서 가장 많은 까닭을 고치면 우리 반이 가장 많이 나아질 거예요." 뛰어내리는 카드를 안전한 모습에 넣은 학생에게 두 발이 매트에 닿을 때까지가 내려오기라고 짚는다.',
              levels: CARD,
              items: [
                { prompt: '멈칫한 까닭에 알맞은 고칠 자세 카드를 이어요.', toolOptions: { mode: 'match', topic: '내려올 때는', slots: [{ id: 'see', label: '디딜 칸이 안 보였어요' }, { id: 'both', label: '두 손을 함께 뗐어요' }, { id: 'rush', label: '서둘러 내려왔어요' }], cards: ['몸을 기구에서 살짝 떼어 아래 칸을 내려다봐요', '손 하나를 옮길 때 다른 손은 꽉 쥐어요', '"발 하나, 손 하나"를 말하며 천천히 내려와요'] }, target: { match: { see: '몸을 기구에서 살짝 떼어 아래 칸을 내려다봐요', both: '손 하나를 옮길 때 다른 손은 꽉 쥐어요', rush: '"발 하나, 손 하나"를 말하며 천천히 내려와요' } }, levels: { easy: { state: { at: { '손 하나를 옮길 때 다른 손은 꽉 쥐어요': 1 } } } }, difficulty: 0.2, },
                { prompt: '내려오기 장면 카드를 멈칫하기 쉬운 모습과 안전하게 내려오는 모습으로 나누어요.', toolOptions: { topic: '내려오기', slots: ['멈칫하기 쉬워요', '안전하게 내려와요'], cards: ['아래를 보지 않고 발을 더듬어 내려요', '두 손을 한꺼번에 아래 칸으로 옮겨요', '발이 아래 칸을 디딘 뒤에 손을 옮겨요', '마지막 칸까지 걸어 내려와 두 발로 매트에 서요'] }, target: { sort: { '멈칫하기 쉬워요': ['아래를 보지 않고 발을 더듬어 내려요', '두 손을 한꺼번에 아래 칸으로 옮겨요'], '안전하게 내려와요': ['발이 아래 칸을 디딘 뒤에 손을 옮겨요', '마지막 칸까지 걸어 내려와 두 발로 매트에 서요'] } }, levels: { easy: { state: { at: { '발이 아래 칸을 디딘 뒤에 손을 옮겨요': 1 } } }, challenge: { prompt: '내려오기 장면 카드를 두 가지로 나누어요. 오르기 장면 카드는 어느 가지에도 넣지 않아요.', toolOptions: { cards: ['아래를 보지 않고 발을 더듬어 내려요', '두 손을 한꺼번에 아래 칸으로 옮겨요', '발이 아래 칸을 디딘 뒤에 손을 옮겨요', '마지막 칸까지 걸어 내려와 두 발로 매트에 서요', '손을 위 칸으로 뻗어 가로대를 잡아요'] } } }, difficulty: 0.15,
                  conclude: '내려올 때는 아래 칸을 눈으로 먼저 보고, 발이 디딘 뒤에 손을 하나씩 옮겨요.' },
                { prompt: '오름 기구에서 내려올 때 눈이 볼 곳만 골라요.', toolOptions: { mode: 'pick', topic: '내려올 때 눈은', cards: ['발을 내릴 아래 칸 가로대', '지금 꽉 쥐고 있는 손', '운동장 건너편에서 노는 친구', '기구 꼭대기 위 하늘'] }, target: { pick: ['발을 내릴 아래 칸 가로대', '지금 꽉 쥐고 있는 손'] }, difficulty: 0.15 },
              ],
            },
            {
              id: 'a3', title: '활동 3. 고른 자세로 세 번 내려오기', minutes: 13, tool: 'timer',
              task: '내려오는 차례를 세운 뒤, 오름 기구를 세 칸 올랐다가 고른 자세로 세 번 내려와요. 보는 짝은 멈칫한 칸을 알려 주고, 멈칫하지 않고 내려온 횟수를 적어요.',
              teacher: '"내려올 때는 발이 먼저예요. 발이 아래 칸을 디딘 뒤에 손을 옮겨요." 아래 짝은 기구 바로 밑이 아니라 한 걸음 옆에 선다. 세 칸이 무서운 학생은 두 칸에서 내려오기를 연습하게 한다.',
              levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
              items: [
                { prompt: '내려오기 연습을 하기 전에 살펴본 것을 눌러 표시해요.', toolOptions: { safety: ['기구 아래에 매트가 깔려 있어요', '손을 닦아 말렸어요', '기구 위에 앞 친구가 없어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '오름 기구에서 한 칸 내려오는 움직임 카드를 하는 차례대로 놓아요.', toolOptions: { cards: ['손 하나를 한 칸 아래로 옮겨요', '아래 칸을 눈으로 확인해요', '발 하나를 아래 칸에 내려 디뎌요'] }, target: { order: ['아래 칸을 눈으로 확인해요', '발 하나를 아래 칸에 내려 디뎌요', '손 하나를 한 칸 아래로 옮겨요'] }, levels: { easy: { state: { order: ['아래 칸을 눈으로 확인해요', '손 하나를 한 칸 아래로 옮겨요', '발 하나를 아래 칸에 내려 디뎌요'] } } }, difficulty: 0.15,
                  hints: ['디딜 곳을 모르고 발을 내리면 어떻게 될지 먼저 떠올려요.', '내려올 때는 몸무게를 받쳐 줄 곳이 먼저 생겨야 손을 뗄 수 있어요.', '눈으로 아래 칸을 보고, 발을 내려 디딘 다음, 손을 옮겨요.'] },
                { prompt: '세 번 내려오기에서 멈칫하지 않고 내려온 횟수와 손발 셋을 지킨 횟수를 적어요.', toolOptions: { fields: [{ label: '멈칫하지 않고 내려오기', unit: '번', max: 3 }, { label: '손발 셋을 지킨 내려오기', unit: '번', max: 3 }] }, target: { records: true }, difficulty: 0.15 },
                { prompt: '내려오기를 마치고 해낸 것을 점검 목록에 표시해요.', target: { selfCheck: ['아래 칸을 눈으로 먼저 보았어요', '발을 먼저 내리고 손을 옮겼어요', '멈칫한 칸을 짝에게 들었어요', '다음에 쓸 내려오기 자세를 정했어요'] }, difficulty: 0.1 },
                FREE('짝이 내려올 때 "발 하나, 손 하나"를 말로 세어 주고, 멈칫한 칸이 몇째 칸이었는지 알려 준 뒤 역할을 바꾸어 표시해요.'),
              ],
            },
          ],
          {
            teacher: '"멈칫하지 않고 내려온 횟수가 늘어난 사람은 무엇을 바꾸었나요?" 눈으로 아래 칸을 먼저 본 것, 발을 먼저 내린 것을 칠판에 적는다. 출구 1번에서 새 장면을 잘못 이은 학생은 다음 체육 시간에 내려오기 차례를 다시 말로 해 보게 한다. 어깨와 손목을 돌리며 마친다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '내려올 때는', slots: [{ id: 'turn', label: '아래서 친구가 불러 고개를 돌렸어요' }, { id: 'wet', label: '손에 땀이 나 가로대가 미끄러웠어요' }], cards: ['내려오는 동안 눈은 기구에 두어요', '오르기 전에 손을 닦아 말려요'] }, prompt: '새로 멈칫한 장면에 알맞은 자세를 이어요.', target: { match: { turn: '내려오는 동안 눈은 기구에 두어요', wet: '오르기 전에 손을 닦아 말려요' } }, difficulty: 0.2 },
              { type: 'choice', prompt: '오름 기구에서 내려올 때 가장 먼저 할 일은?', options: ['손 두 개를 함께 떼요', '아래 칸을 눈으로 확인해요', '매트로 뛰어내려요'], answer: 1, difficulty: 0.15, explain: '디딜 곳을 눈으로 먼저 보아야 발을 안전하게 내릴 수 있어요.' },
              MOOD('오름 기구에서 내려오기를 고쳐 본 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '내려오기를 돌아봐요',
          items: [
            { type: 'blank', prompt: '내려오는 차례를 쓰세요.', text: '아래 칸을 ___으로 보고, ___을 먼저 내려 디딘 뒤, 손을 옮겨요.', answer: '눈, 발' },
            { type: 'table', prompt: '오늘 내려오기 기록을 쓰세요.', columns: ['기록', '세 번 가운데'], cells: [['멈칫하지 않고 내려오기', ''], ['손발 셋을 지킨 내려오기', '']] },
            { type: 'choice', prompt: '두 손을 함께 떼다 멈칫했을 때 고칠 자세에 ○ 하세요.', options: ['손 하나를 옮길 때 다른 손은 꽉 쥐어요', '더 빨리 내려와요', '두 발도 함께 떼요'], answer: '손 하나를 옮길 때 다른 손은 꽉 쥐어요' },
            { type: 'short', prompt: '오늘 내가 멈칫한 칸과 그때의 까닭을 쓰세요.' },
            { type: 'short', prompt: '다음 시간에 쓸 내려오기 자세 하나를 쓰세요.' },
          ],
          easy: {
            note: '눈 먼저, 발 하나, 손 하나!',
            items: [
              { type: 'choice', prompt: '내려올 때 먼저 내리는 것은?', options: ['발', '두 손'], answer: '발' },
              { type: 'short', prompt: '오늘 몇 칸에서 내려왔는지 쓰세요.' },
              { type: 'draw', prompt: '아래 칸을 보며 내려오는 내 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '그래프 막대 끝에 수가 보이고, 첫 차례가 미리 놓여 있어요. 두 칸에서 내려오기를 연습해도 돼요.',
          base: '그래프를 읽어 까닭을 찾고, 고른 자세로 세 칸에서 세 번 내려와요.',
          challenge: '그래프 두 막대의 차이를 셈하고, 시간 재기로 내려오는 시간을 재되 손발 셋을 지킨 기록만 인정해요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 흔들리거나 멈칫한 것은 무서워서일 뿐이라고 여긴다 → 그래프의 까닭이 모두 자세(눈·손·발)와 이어져 있다는 것을 짚는다. ② 내려올 때 손부터 뗀다 → "발이 디딘 뒤에 손"을 말로 붙인다. ③ 마지막 칸에서 뛰어내린다 → 두 발이 매트에 닿을 때까지가 내려오기라고 정한다. 그래프 수는 설명을 위한 예시 자료이며, 실제 반 조사로 바꾸어 써도 된다.',
      }),
      // ───────────────────────── 19 ─────────────────────────
      L(19, {
        title: '징검돌·통나무 코스 건너고 구간마다 자세 정하기',
        objective: '징검돌·좁은 판자·통나무로 꾸민 균형 코스를 건넌 뒤 발이 바닥에 닿은 구간을 기록에서 찾고, 구간마다 쓸 자세를 골라 말할 수 있다.',
        illustration: art('a gentle balance course in a school garden with round paper stepping stones, a narrow plank and a log over a soft mat, children waiting in a line', [
          { motif: 'sun', x: 410, y: 52, s: 0.7 }, { motif: 'cloud', x: 120, y: 46 }, { motif: 'hills', y: 214 },
          { motif: 'tree', x: 60, y: 210 }, { motif: 'flower', x: 420, y: 218 }, { motif: 'leaf', x: 200, y: 216 },
          { motif: 'text', x: 240, y: 122, text: '구간마다 자세가 달라요', size: 22 },
        ]),
        safety: [SHOE, BEAM, MAT, SPACE, STOP],
        stages: stages(
          {
            teacher: '바닥에 원판 징검돌, 좁은 판자, 둥근 통나무(또는 반원 매트)를 차례로 놓은 코스를 보여 준다. "개울을 건너는 징검돌과 좁은 다리, 통나무가 있어요. 세 곳에서 똑같은 자세로 건너면 될까요?" 학생 생각을 들은 뒤, 오늘은 구간마다 발이 바닥에 닿은 곳을 찾아 자세를 다르게 정해 본다고 알린다. 지금까지 배운 평균대·오름 기구·숲길을 떠올리게 하는 마지막 생태형 활동이라고 말한다.',
            student: '징검돌·좁은 판자·통나무 코스를 보고, 어느 구간이 가장 어려워 보이는지 골라 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 징검돌 코스 건너고 구간 기록 적기', minutes: 11, tool: 'timer',
              task: '모둠별로 코스를 한 사람씩 세 번 건너요. 보는 짝은 구간마다 발이 바닥에 닿은 횟수를 세어 알려 주고, 나는 구간별로 적어요.',
              teacher: '"징검돌은 다음 돌을 눈으로 먼저 고른 뒤 디뎌요." 앞사람이 통나무 구간을 다 지나간 뒤 다음 사람이 출발한다. 바닥에 발이 닿으면 그 자리에서 다시 올라 이어 가면 되고, 처음으로 돌아가지 않아도 된다고 말한다.',
              levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
              items: [
                { prompt: '코스를 건너기 전에 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['징검돌이 밀리지 않게 고정되어 있어요', '통나무 아래에 매트가 있어요', '앞사람이 통나무를 다 지나갔어요', '신발 끈을 묶었어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '세 번 건너는 동안 구간마다 발이 바닥에 닿은 횟수를 모두 더해 적어요.', toolOptions: { fields: [{ label: '징검돌', unit: '번' }, { label: '좁은 판자', unit: '번' }, { label: '통나무', unit: '번' }] }, target: { records: true }, difficulty: 0.15 },
                FREE('짝이 건너는 동안 구간마다 발이 닿은 횟수를 손가락으로 세어 주고, 역할을 바꾸어 해 본 뒤 표시해요.'),
              ],
            },
            {
              id: 'a2', title: '활동 2. 모둠 기록 그래프 보고 어려운 구간 찾기', minutes: 7, tool: 'chart',
              task: '한 모둠의 구간별 기록 그래프를 읽고 가장 많이 닿은 구간과 그 까닭을 골라요.',
              teacher: '"이 그래프는 다른 반 한 모둠의 기록이에요(예시 자료). 우리 모둠 기록과 같은 구간이 가장 어려웠나요?" 그래프를 읽은 뒤 자기 기록과 견주어 말하게 한다.',
              levels: { easy: { showValues: true }, base: {}, challenge: {} },
              items: [
                { prompt: '모둠 기록 그래프에서 발이 바닥에 가장 많이 닿은 구간을 골라요.', toolOptions: { type: 'bar', mode: 'read', title: '구간마다 발이 바닥에 닿은 횟수(모둠 4명)', unit: '번', xLabel: '구간', yLabel: '닿은 횟수', max: 10, scale: 1, data: [['징검돌', 8], ['좁은 판자', 3], ['통나무', 5]], question: '가장 많이 닿은 구간은?', choices: ['징검돌', '좁은 판자', '통나무'] }, target: { pick: 0 }, difficulty: 0.1 },
                { prompt: '징검돌 구간에서 발이 많이 닿은 까닭으로 알맞은 것을 골라요.', toolOptions: { type: 'bar', mode: 'read', title: '구간마다 발이 바닥에 닿은 횟수(모둠 4명)', unit: '번', xLabel: '구간', yLabel: '닿은 횟수', max: 10, scale: 1, data: [['징검돌', 8], ['좁은 판자', 3], ['통나무', 5]], question: '징검돌에서 많이 닿은 까닭은?', choices: ['다음 돌을 보지 않고 발을 내밀어서', '징검돌이 판자보다 넓어서', '징검돌 구간이 맨 처음이라 힘이 남아서'], why: ['', '넓은 돌이 더 디디기 쉬워요. 다른 까닭을 찾아봐요.', '힘이 남아 있으면 더 잘 건널 수 있어요.'] }, target: { pick: 0 }, difficulty: 0.25 },
                { prompt: '통나무 구간에서 닿은 횟수는 좁은 판자보다 몇 번 더 많은지 써요.', toolOptions: { type: 'bar', mode: 'read', title: '구간마다 발이 바닥에 닿은 횟수(모둠 4명)', unit: '번', xLabel: '구간', yLabel: '닿은 횟수', max: 10, scale: 1, data: [['징검돌', 8], ['좁은 판자', 3], ['통나무', 5]], question: '두 막대의 차이는 몇 번인가요?' }, target: { value: 2 }, difficulty: 0.2 },
              ],
            },
            {
              id: 'a3', title: '활동 3. 구간마다 쓸 자세 정하기', minutes: 8, tool: 'mindmap',
              task: '구간마다 알맞은 자세를 잇고, 생태형 활동에서 배운 균형 원리를 골라요. 고른 자세로 가장 어려웠던 구간을 한 번 더 건너요.',
              teacher: '"징검돌, 판자, 통나무는 디디는 곳의 모양이 달라요. 그래서 자세도 조금씩 달라요." 통나무를 빨리 지나가는 것이 낫다고 하는 학생에게 둥근 곳에서 빨리 디디면 발이 어떻게 되는지 묻는다.',
              levels: CARD,
              items: [
                { prompt: '구간에 알맞은 자세 카드를 이어요.', toolOptions: { mode: 'match', topic: '구간마다', slots: [{ id: 'stone', label: '징검돌: 돌과 돌 사이가 떨어져 있어요' }, { id: 'plank', label: '좁은 판자: 폭이 발 하나만큼이에요' }, { id: 'log', label: '통나무: 디디는 곳이 둥글어요' }], cards: ['다음 돌을 눈으로 먼저 고른 뒤 디뎌요', '발을 한 줄로 앞뒤로 놓으며 걸어요', '무릎을 조금 굽혀 몸을 낮추고 발바닥 전체로 디뎌요'] }, target: { match: { stone: '다음 돌을 눈으로 먼저 고른 뒤 디뎌요', plank: '발을 한 줄로 앞뒤로 놓으며 걸어요', log: '무릎을 조금 굽혀 몸을 낮추고 발바닥 전체로 디뎌요' } }, levels: { easy: { state: { at: { '다음 돌을 눈으로 먼저 고른 뒤 디뎌요': 0 } } } }, difficulty: 0.2 },
                { prompt: '평균대·오름 기구·숲길·징검돌에서 모두 도움이 된 균형 원리만 골라요.', toolOptions: { mode: 'pick', topic: '균형 원리', cards: ['디딜 곳을 눈으로 먼저 봐요', '한 번에 하나씩 천천히 옮겨요', '흔들리면 멈추고 자세를 다시 잡아요', '빨리 지나갈수록 안전해요'] }, target: { pick: ['디딜 곳을 눈으로 먼저 봐요', '한 번에 하나씩 천천히 옮겨요', '흔들리면 멈추고 자세를 다시 잡아요'] }, levels: { challenge: { prompt: '네 활동 모두에서 도움이 된 균형 원리만 골라요. 그럴듯하지만 틀린 카드가 섞여 있어요.', toolOptions: { cards: ['디딜 곳을 눈으로 먼저 봐요', '한 번에 하나씩 천천히 옮겨요', '흔들리면 멈추고 자세를 다시 잡아요', '빨리 지나갈수록 안전해요', '두 팔을 몸에 꼭 붙이면 덜 흔들려요'] } } }, difficulty: 0.2,
                  conclude: '디딜 곳을 먼저 보고, 하나씩 천천히 옮기고, 흔들리면 멈추어 다시 잡는 것이 자연 속 균형의 원리예요.' },
                FREE('가장 많이 닿았던 구간을 고른 자세로 한 번 더 건너고, 닿은 횟수가 줄었는지 짝에게 말한 뒤 표시해요.'),
              ],
            },
          ],
          {
            teacher: '"오늘 가장 어려웠던 구간에서 무엇을 바꾸었더니 나아졌나요?" 두세 명에게 듣는다. 생태형 활동 네 가지를 칠판에 쓰고 공통 원리 세 가지를 학생 말로 다시 정리한다. 출구 1번을 틀린 학생은 구간의 모양(떨어짐·좁음·둥긂)을 다시 짚는다. 다음 시간부터는 체육관·운동장·놀이터의 안전을 배운다고 알리고, 코스를 함께 정리한 뒤 마친다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '구간마다', slots: [{ id: 'rope', label: '밧줄 다리: 발밑이 출렁여요' }, { id: 'hoop', label: '훌라후프 징검돌: 바닥에 놓인 고리 사이가 떨어져 있어요' }], cards: ['밧줄을 두 손으로 잡고 발을 천천히 옮겨요', '다음 고리를 눈으로 먼저 고르고 디뎌요'] }, prompt: '새 구간에 알맞은 자세를 이어요.', target: { match: { rope: '밧줄을 두 손으로 잡고 발을 천천히 옮겨요', hoop: '다음 고리를 눈으로 먼저 고르고 디뎌요' } }, difficulty: 0.2 },
              { type: 'choice', prompt: '둥근 통나무 위를 건널 때 알맞은 것은?', options: ['빨리 뛰어 지나가요', '무릎을 조금 굽혀 몸을 낮추고 천천히 디뎌요', '눈을 감고 건너요'], answer: 1, difficulty: 0.15, explain: '몸을 낮추고 천천히 디디면 둥근 곳에서도 발이 덜 미끄러져요.' },
              MOOD('징검돌 코스를 건너 본 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '구간마다 자세를 정해요',
          items: [
            { type: 'table', prompt: '세 번 건너는 동안 구간마다 발이 닿은 횟수를 쓰세요.', columns: ['구간', '닿은 횟수', '다음에 쓸 자세'], cells: [['징검돌', '', ''], ['좁은 판자', '', ''], ['통나무', '', '']] },
            { type: 'choice', prompt: '좁은 판자 위에서 알맞은 걸음에 ○ 하세요.', options: ['발을 한 줄로 앞뒤로 놓아요', '두 발을 옆으로 넓게 벌려요', '뛰어서 건너요'], answer: '발을 한 줄로 앞뒤로 놓아요' },
            { type: 'check', prompt: '생태형 활동에서 해 본 것에 ✓ 하세요.', options: ['평균대 건너기', '오름 기구 오르고 내려오기', '학교 숲길 걷기', '징검돌 코스 건너기'] },
            { type: 'short', prompt: '내가 가장 어려웠던 구간과 그 까닭을 쓰세요.' },
            { type: 'short', prompt: '네 활동 모두에서 도움이 된 균형 원리 하나를 쓰세요.' },
          ],
          easy: {
            note: '돌 사이가 멀면 눈 먼저, 좁으면 한 줄로, 둥글면 낮게!',
            items: [
              { type: 'choice', prompt: '징검돌을 건널 때 먼저 할 일은?', options: ['다음 돌을 눈으로 봐요', '눈을 감아요'], answer: '다음 돌을 눈으로 봐요' },
              { type: 'short', prompt: '가장 어려웠던 구간 이름을 쓰세요.' },
              { type: 'draw', prompt: '오늘 건넌 코스 가운데 한 구간을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '그래프 막대 끝에 수가 보이고, 카드 한 장이 미리 놓여 있어요. 징검돌 사이를 좁게 놓은 쉬운 줄로 건너도 돼요.',
          base: '코스를 세 번 건너 구간 기록을 적고, 그래프와 견주어 자세를 정해요.',
          challenge: '시간 재기를 더하되 발이 닿지 않은 기록을 먼저 보고, 함정 카드가 섞인 원리 고르기를 풀어요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 빨리 지나가면 균형을 잘 잡은 것이라고 여긴다 → 구간 기록에서 빨리 지나간 사람의 닿은 횟수를 견주게 한다. ② 징검돌에서 다음 돌을 보지 않고 발을 내민다 → "눈이 먼저, 발이 나중"을 말로 붙인다. ③ 발이 닿으면 처음부터 다시 하려고 줄을 거슬러 간다 → 닿은 자리에서 이어 가게 해 뒤 사람과 부딪히지 않게 한다. 징검돌·판자는 미끄럼 방지 원판이나 매트 위 테이프 줄로 대신해도 된다.',
      }),
      // ───────────────────────── 20 ─────────────────────────
      L(20, {
        title: '체육관·운동장·놀이터에서 조심할 점 견주기',
        objective: '체육관·운동장·놀이터의 바닥과 기구가 어떻게 다른지 견주어, 장소마다 조심할 점과 지킬 안전 수칙을 하나씩 들 수 있다.',
        illustration: art('three paper panels side by side: an indoor gym with a wooden floor, a dirt school field with goal posts, and a playground with swings and a slide', [
          { motif: 'sun', x: 410, y: 50, s: 0.7 }, { motif: 'cloud', x: 120, y: 46 }, { motif: 'hills', y: 214 },
          { motif: 'house', x: 80, y: 196, s: 0.8 }, { motif: 'tree', x: 420, y: 210, s: 0.8 },
          { motif: 'text', x: 240, y: 124, text: '곳마다 조심할 점이 달라요', size: 22 },
        ]),
        safety: [SIGNAL, SHOE, SPACE],
        stages: stages(
          {
            teacher: '체육관 마룻바닥, 운동장 흙바닥, 놀이터 모래(또는 고무 바닥) 사진을 나란히 보여 준다. "세 곳의 바닥을 맨발로 밟는다면 느낌이 어떻게 다를까요?" 미끄럽다, 딱딱하다, 푹신하다는 말을 받아 적는다. 이어 "그럼 세 곳에서 지킬 안전 수칙은 모두 똑같을까요?"라고 묻고, 똑같다는 대답과 다르다는 대답을 모두 칠판에 남겨 둔 채 활동을 시작한다.',
            student: '세 곳의 바닥 사진을 보고, 밟았을 때 느낌이 어떻게 다를지 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 장소마다 조심할 점 나누기', minutes: 12, tool: 'mindmap',
              task: '조심할 점 카드를 그 일이 생기는 장소로 나누고, 장소마다 지킬 수칙을 이어요. 장소마다 수칙이 다른 까닭도 골라요.',
              teacher: '"그 일이 어디에서 생길까요? 바닥과 기구를 떠올려 봐요." 그네 카드를 운동장에 넣은 학생에게 그네가 어느 곳에 있는지 묻는다. 도전 단계의 함정 카드(어디서나 지키는 약속)를 보고 "이건 어디에도 들어가지 않아요. 왜일까요?"라고 물어, 모든 곳에서 지키는 수칙과 장소마다 다른 수칙이 함께 있다는 것을 짚는다.',
              levels: CARD,
              items: [
                { prompt: '조심할 점 카드를 그 일이 생기는 장소로 나누어요.', toolOptions: { topic: '어디에서?', slots: ['체육관', '운동장', '놀이터'], cards: ['마룻바닥에 떨어진 땀방울에 미끄러져요', '달리다 벽이나 기둥에 부딪혀요', '흙바닥의 돌멩이에 걸려 넘어져요', '그늘 없는 땡볕에서 오래 뛰다 지쳐요', '움직이는 그네 앞을 지나가다 부딪혀요', '미끄럼틀을 거꾸로 올라가다 내려오는 친구와 부딪혀요'] }, target: { sort: { '체육관': ['마룻바닥에 떨어진 땀방울에 미끄러져요', '달리다 벽이나 기둥에 부딪혀요'], '운동장': ['흙바닥의 돌멩이에 걸려 넘어져요', '그늘 없는 땡볕에서 오래 뛰다 지쳐요'], '놀이터': ['움직이는 그네 앞을 지나가다 부딪혀요', '미끄럼틀을 거꾸로 올라가다 내려오는 친구와 부딪혀요'] } }, levels: { easy: { prompt: '조심할 점 카드를 그 일이 생기는 장소로 나누어요. 카드가 네 장이에요.', toolOptions: { slots: ['체육관', '놀이터'], cards: ['마룻바닥에 떨어진 땀방울에 미끄러져요', '달리다 벽이나 기둥에 부딪혀요', '움직이는 그네 앞을 지나가다 부딪혀요', '미끄럼틀을 거꾸로 올라가다 내려오는 친구와 부딪혀요'] }, target: { sort: { '체육관': ['마룻바닥에 떨어진 땀방울에 미끄러져요', '달리다 벽이나 기둥에 부딪혀요'], '놀이터': ['움직이는 그네 앞을 지나가다 부딪혀요', '미끄럼틀을 거꾸로 올라가다 내려오는 친구와 부딪혀요'] } } }, challenge: { prompt: '조심할 점 카드를 장소로 나누어요. 어느 곳에서나 똑같이 지키는 약속 카드는 어느 가지에도 넣지 않아요.', toolOptions: { cards: ['마룻바닥에 떨어진 땀방울에 미끄러져요', '달리다 벽이나 기둥에 부딪혀요', '흙바닥의 돌멩이에 걸려 넘어져요', '그늘 없는 땡볕에서 오래 뛰다 지쳐요', '움직이는 그네 앞을 지나가다 부딪혀요', '미끄럼틀을 거꾸로 올라가다 내려오는 친구와 부딪혀요', '활동 전에 준비 운동을 해요'] } } }, difficulty: 0.2,
                  hints: ['카드에 나온 바닥이나 기구가 세 곳 가운데 어디에 있는지 떠올려요.', '마루와 벽은 지붕 아래, 흙과 땡볕은 지붕 없는 넓은 곳, 그네와 미끄럼틀은 놀이 기구가 있는 곳이에요.', '체육관에는 땀방울·벽 카드, 운동장에는 돌멩이·땡볕 카드, 놀이터에는 그네·미끄럼틀 카드가 들어가요.'] },
                { prompt: '장소에 알맞은 안전 수칙 카드를 이어요.', toolOptions: { mode: 'match', topic: '이곳에서는', slots: [{ id: 'gym', label: '체육관' }, { id: 'field', label: '운동장' }, { id: 'play', label: '놀이터' }], cards: ['바닥에 물기가 있으면 닦은 뒤 활동해요', '돌과 패인 곳이 없는 자리를 골라 뛰어요', '기구 하나에 정해진 사람 수만 타요'] }, target: { match: { gym: '바닥에 물기가 있으면 닦은 뒤 활동해요', field: '돌과 패인 곳이 없는 자리를 골라 뛰어요', play: '기구 하나에 정해진 사람 수만 타요' } }, levels: { easy: { state: { at: { '바닥에 물기가 있으면 닦은 뒤 활동해요': 0 } } } }, difficulty: 0.15 },
                { prompt: '장소마다 안전 수칙이 다른 까닭만 골라요.', toolOptions: { mode: 'pick', topic: '수칙이 다른 까닭', cards: ['바닥이 마루·흙·모래로 달라요', '있는 기구가 달라요', '벽과 지붕이 있는지가 달라요', '장소마다 이기는 편이 달라요'] }, target: { pick: ['바닥이 마루·흙·모래로 달라요', '있는 기구가 달라요', '벽과 지붕이 있는지가 달라요'] }, difficulty: 0.2,
                  conclude: '바닥과 기구, 벽과 지붕이 다르니 장소마다 조심할 점과 지킬 수칙도 달라요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 지금 있는 곳 둘러보고 조심할 곳 찾기', minutes: 14, tool: 'timer',
              task: '짝과 지금 수업하는 곳(체육관 또는 운동장)의 정해진 구역을 걸어서 둘러보고, 조심할 곳을 찾아 손으로 가리켜 알려요. 찾은 수를 적고 장소에 맞는 수칙을 하나 정해요.',
              teacher: '"뛰지 말고 걸으면서, 바닥 한 번, 기구 한 번, 둘레 한 번 봐요." 찾은 곳은 손대지 말고 교사에게 자리를 가리켜 알리게 한다. 8분 뒤 호루라기로 모은 뒤 모둠마다 찾은 곳 하나씩을 듣고, 이곳에만 맞는 수칙인지 어디서나 맞는 수칙인지 반 전체에 묻는다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '둘러보기를 하기 전에 짝과 약속한 것을 눌러 표시해요.', toolOptions: { safety: ['정해진 구역 안에서만 걸어 다녀요', '찾은 곳은 손대지 않고 가리켜 알려요', '호루라기가 울리면 바로 모여요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '둘러보며 찾은 조심할 곳의 수를 바닥·기구·둘레로 나누어 적어요.', toolOptions: { fields: [{ label: '바닥', unit: '곳' }, { label: '기구', unit: '곳' }, { label: '벽·기둥·둘레', unit: '곳' }] }, target: { records: true }, levels: { challenge: { toolOptions: { fields: [{ label: '바닥', unit: '곳' }, { label: '기구', unit: '곳' }, { label: '벽·기둥·둘레', unit: '곳' }, { label: '모두 더한 수', unit: '곳' }] } } }, difficulty: 0.15 },
                { prompt: '둘러보기를 마치고 해낸 것을 점검 목록에 표시해요.', target: { selfCheck: ['바닥과 기구와 둘레를 모두 살펴보았어요', '찾은 곳을 손대지 않고 알렸어요', '이곳에 맞는 수칙을 하나 정했어요'] }, difficulty: 0.1 },
                FREE('찾은 곳 가운데 하나를 짝과 골라, 그곳에서 지킬 수칙을 한 문장으로 만들어 모둠에 말한 뒤 표시해요.'),
              ],
            },
          ],
          {
            teacher: '처음에 칠판에 남겨 둔 "수칙은 모두 똑같다/다르다"로 돌아간다. "오늘 찾은 것을 보니 어떤가요?" 어디서나 지키는 수칙(준비 운동, 멈춤 신호)과 장소마다 다른 수칙이 함께 있다는 말이 나오면 그대로 정리한다. 출구 1번을 틀린 학생은 카드의 바닥·기구 낱말에 밑줄을 그어 보게 한다. 가볍게 걸으며 마친다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { topic: '어디에서?', slots: ['체육관', '운동장'], cards: ['천장에 걸린 공을 꺼내려 의자를 쌓아 올라가요', '비 온 뒤 물웅덩이를 밟고 미끄러져요', '흙먼지가 날려 눈에 들어가요'] }, prompt: '새 조심할 점 카드를 그 일이 생기는 장소로 나누어요.', target: { sort: { '체육관': ['천장에 걸린 공을 꺼내려 의자를 쌓아 올라가요'], '운동장': ['비 온 뒤 물웅덩이를 밟고 미끄러져요', '흙먼지가 날려 눈에 들어가요'] } }, difficulty: 0.15 },
              { type: 'choice', prompt: '"안전 수칙은 어느 곳에서나 똑같다"는 말은?', options: ['맞아요', '틀려요. 바닥과 기구가 다르면 지킬 수칙도 달라져요'], answer: 1, difficulty: 0.15, explain: '어디서나 지키는 수칙도 있지만, 마루·흙·놀이 기구처럼 장소마다 다른 수칙도 있어요.' },
              MOOD('장소마다 조심할 점을 찾아본 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '곳마다 조심할 점',
          items: [
            { type: 'table', prompt: '장소마다 조심할 점과 지킬 수칙을 하나씩 쓰세요.', columns: ['장소', '조심할 점', '지킬 수칙'], cells: [['체육관', '', ''], ['운동장', '', ''], ['놀이터', '', '']] },
            { type: 'choice', prompt: '놀이터에서 생길 수 있는 일에 ○ 하세요.', options: ['움직이는 그네 앞을 지나가다 부딪혀요', '마룻바닥 땀방울에 미끄러져요', '체육관 기둥에 부딪혀요'], answer: '움직이는 그네 앞을 지나가다 부딪혀요' },
            { type: 'check', prompt: '어느 곳에서나 지키는 수칙에 ✓ 하세요.', options: ['활동 전에 준비 운동을 해요', '멈춤 신호를 들으면 바로 서요', '그네는 한 사람씩 타요'] },
            { type: 'short', prompt: '오늘 둘러본 곳에서 찾은 조심할 곳 하나와 그 까닭을 쓰세요.' },
            { type: 'short', prompt: '장소마다 안전 수칙이 다른 까닭을 쓰세요.' },
          ],
          easy: {
            note: '바닥은 무엇으로 되어 있나요? 어떤 기구가 있나요? 두 가지를 보면 조심할 점이 보여요.',
            items: [
              { type: 'choice', prompt: '마룻바닥이 미끄러워지는 곳은?', options: ['체육관', '놀이터 모래밭'], answer: '체육관' },
              { type: 'short', prompt: '오늘 찾은 조심할 곳 하나를 쓰세요.' },
              { type: 'draw', prompt: '체육관·운동장·놀이터 가운데 한 곳을 그리고 조심할 곳에 ○ 하세요.' },
            ],
          },
        },
        differentiation: {
          easy: '장소가 두 곳, 카드가 네 장으로 줄고, 맞는 곳에 놓으면 바로 표시돼요. 둘러보기는 바닥만 살펴도 돼요.',
          base: '세 장소로 카드를 나누고, 지금 있는 곳을 바닥·기구·둘레로 살펴요.',
          challenge: '어디서나 지키는 약속 카드가 함정으로 섞여 있고, 찾은 곳을 모두 더해 적어요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 안전 수칙은 어느 곳에서나 똑같다고 여긴다 → 바닥과 기구가 다르면 조심할 점이 달라진다는 것을 세 장소 카드로 견주게 하고, 어디서나 같은 수칙(준비 운동·멈춤 신호)도 따로 짚는다. ② 둘러보기를 달리기처럼 한다 → 걸으며 "바닥·기구·둘레" 세 번 보기를 말로 붙인다. ③ 찾은 위험물을 직접 치우려 한다 → 오늘은 손대지 않고 알리기만 한다(23차시에서 치울 것과 알릴 것을 나눈다). 놀이터가 없는 학교는 놀이터 사진으로 대신한다.',
      }),
      // ───────────────────────── 21 ─────────────────────────
      L(21, {
        title: '날씨에 따라 바꾸는 운동장 안전 수칙 정하기',
        objective: '더운 날·추운 날·비 온 뒤·바람 센 날에 운동장에서 달라지는 위험을 들고, 날씨에 맞게 쉬는 시간과 활동을 바꾸는 계획을 세울 수 있다.',
        illustration: art('a school field shown in four small paper panels: blazing sun with a shady tree, frosty morning, puddles after rain, and a windy day with flying leaves', [
          { motif: 'sun', x: 90, y: 60, s: 0.8 }, { motif: 'snow', x: 200, y: 60, s: 0.7 }, { motif: 'cloud', x: 300, y: 56 }, { motif: 'leaf', x: 400, y: 70 },
          { motif: 'hills', y: 214 }, { motif: 'tree', x: 430, y: 212, s: 0.8 },
          { motif: 'text', x: 240, y: 136, text: '오늘 날씨는 어때요?', size: 24 },
        ]),
        safety: [STOP, SIGNAL, '더운 날에는 활동 사이사이 그늘에서 쉬고 물을 마셔요.', SHOE],
        stages: stages(
          {
            teacher: '창밖을 함께 보며 묻는다. "오늘 날씨는 어떤가요? 오늘 운동장에서 뛰어도 될까요?" 대답을 듣고 무더운 날, 서리 낀 아침, 비 온 다음 날, 바람 센 날의 운동장 사진을 차례로 보여 준다. "같은 운동장인데 날씨가 바뀌면 무엇이 달라질까요?" 지난 시간에 장소마다 수칙이 달랐던 것처럼, 오늘은 날씨마다 달라지는 수칙을 찾는다고 알린다.',
            student: '창밖 날씨를 보고 오늘 운동장에서 무엇을 조심해야 할지 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 날씨마다 달라지는 수칙 잇기', minutes: 9, tool: 'mindmap',
              task: '날씨 칸에 알맞은 수칙을 잇고, 날씨 알림을 보고 밖에서 할지 실내로 옮길지 나누어요.',
              teacher: '"이 날씨에 가장 먼저 다칠 수 있는 곳은 몸의 어디일까요?" 추운 날에 준비 운동을 더 오래 하는 까닭을 묻고, 굳은 근육이 갑자기 늘어나면 다치기 쉽다고 짚는다. 천둥이 칠 때도 비만 안 오면 밖에서 해도 된다는 학생에게 번개는 비보다 먼저 올 수 있다고 말한다.',
              levels: CARD,
              items: [
                { prompt: '날씨에 알맞은 운동장 안전 수칙 카드를 이어요.', toolOptions: { mode: 'match', topic: '날씨마다', slots: [{ id: 'hot', label: '햇볕이 뜨거운 날', motif: 'sun' }, { id: 'cold', label: '아침 서리가 낀 추운 날', motif: 'snow' }, { id: 'rain', label: '비가 그친 다음 날', motif: 'cloud' }, { id: 'wind', label: '모래가 날리는 바람 센 날', motif: 'leaf' }], cards: ['그늘에서 쉬고 물을 자주 마셔요', '준비 운동을 더 오래 해서 몸을 데워요', '물웅덩이와 젖은 선을 피해 뛰어요', '바람을 등지고 서서 눈을 보호해요'] }, target: { match: { hot: '그늘에서 쉬고 물을 자주 마셔요', cold: '준비 운동을 더 오래 해서 몸을 데워요', rain: '물웅덩이와 젖은 선을 피해 뛰어요', wind: '바람을 등지고 서서 눈을 보호해요' } }, levels: { easy: { state: { at: { '그늘에서 쉬고 물을 자주 마셔요': 0 } } } }, difficulty: 0.15 },
                { prompt: '날씨 알림 카드를 밖에서 해도 되는 날과 실내로 옮길 날로 나누어요.', toolOptions: { topic: '오늘 체육은?', slots: ['밖에서 해요', '실내로 옮겨요'], cards: ['천둥소리가 들리고 번개가 쳐요', '미세먼지 매우 나쁨 알림이 왔어요', '구름이 조금 낀 맑은 날이에요', '선선한 바람이 살짝 불어요'] }, target: { sort: { '밖에서 해요': ['구름이 조금 낀 맑은 날이에요', '선선한 바람이 살짝 불어요'], '실내로 옮겨요': ['천둥소리가 들리고 번개가 쳐요', '미세먼지 매우 나쁨 알림이 왔어요'] } }, levels: { easy: { state: { at: { '천둥소리가 들리고 번개가 쳐요': 1 } } } }, difficulty: 0.15 },
                { prompt: '추운 날 준비 운동을 더 오래 하는 까닭만 골라요.', toolOptions: { mode: 'pick', topic: '추운 날 준비 운동', cards: ['굳은 몸을 데워 근육이 다치지 않게 해요', '관절이 부드럽게 움직이게 해요', '숨이 갑자기 차오르지 않게 해요', '본 활동 시간을 줄이려고 해요'] }, target: { pick: ['굳은 몸을 데워 근육이 다치지 않게 해요', '관절이 부드럽게 움직이게 해요', '숨이 갑자기 차오르지 않게 해요'] }, difficulty: 0.2,
                  conclude: '날씨가 바뀌면 바닥·몸·공기가 달라져요. 그래서 같은 운동장에서도 수칙을 바꾸어 지켜요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 더운 날 기온 그래프 읽기', minutes: 7, tool: 'chart',
              task: '더운 여름날 시각마다 잰 운동장 기온 그래프를 읽고, 체육 시간과 쉬는 방법을 정해요.',
              teacher: '"기온이 가장 높은 때 운동장에서 오래 뛰면 어떻게 될까요?" 그래프의 수는 설명을 위한 예시 자료라고 알려 준다. 점과 점을 잇는 선이 올라가면 기온이 오르는 것이라고 짚는다.',
              levels: { easy: { showValues: true }, base: {}, challenge: {} },
              items: [
                { prompt: '여름날 운동장 기온 그래프에서 기온이 가장 높은 시각을 골라요.', toolOptions: { type: 'line', mode: 'read', title: '여름날 운동장 기온', unit: '°C', xLabel: '시각', yLabel: '기온', from: 20, max: 34, scale: 2, data: [['오전 9시', 24], ['오전 10시', 27], ['오전 11시', 30], ['낮 12시', 32], ['오후 1시', 33]], question: '기온이 가장 높은 시각은?', choices: ['오전 9시', '오전 11시', '오후 1시'] }, target: { pick: 2 }, difficulty: 0.1 },
                { prompt: '오전 9시와 오후 1시의 기온 차이를 써요.', toolOptions: { type: 'line', mode: 'read', title: '여름날 운동장 기온', unit: '°C', xLabel: '시각', yLabel: '기온', from: 20, max: 34, scale: 2, data: [['오전 9시', 24], ['오전 10시', 27], ['오전 11시', 30], ['낮 12시', 32], ['오후 1시', 33]], question: '두 시각의 기온 차이는 몇 도인가요?' }, target: { value: 9 }, difficulty: 0.25 },
                { prompt: '그래프를 보고 운동장 체육을 하기에 더 알맞은 때를 골라요.', toolOptions: { type: 'line', mode: 'read', title: '여름날 운동장 기온', unit: '°C', xLabel: '시각', yLabel: '기온', from: 20, max: 34, scale: 2, data: [['오전 9시', 24], ['오전 10시', 27], ['오전 11시', 30], ['낮 12시', 32], ['오후 1시', 33]], question: '운동장 체육을 하기에 더 알맞은 때는?', choices: ['기온이 낮은 오전 9시', '기온이 가장 높은 오후 1시'], why: ['', '가장 더운 때 오래 뛰면 몸이 쉽게 지쳐요.'] }, target: { pick: 0 }, difficulty: 0.15 },
              ],
            },
            {
              id: 'a3', title: '활동 3. 더운 날 쉬는 시간을 넣어 이어 달리기 계획하고 해 보기', minutes: 10, tool: 'timer',
              task: '더운 날에 맞게 1분 달리고 30초 그늘에서 쉬기를 4번 하도록 타이머를 맞추고, 운동장(또는 체육관)에서 그대로 해 봐요.',
              teacher: '"쉬는 시간도 계획의 한 부분이에요." 타이머를 맞춘 뒤 한 모둠씩 실제로 달리고 쉰다. 쉬는 동안 물을 한 모금 마시고, 어지러운 학생은 바로 그늘에 앉게 한다. 날씨가 덥지 않은 날에도 같은 계획으로 연습하되, 오늘 날씨라면 무엇을 바꿀지 묻는다.',
              levels: { easy: {}, base: {}, challenge: { showTotal: true, revealAfterCheck: true } },
              items: [
                { prompt: '더운 날 1분(60초) 달리고 30초 쉬기를 4번 하도록 타이머를 맞춰요.', toolOptions: { plan: { work: 30, rest: 10, rounds: 2 }, workStep: 10, restStep: 10 }, target: { plan: { work: 60, rest: 30, rounds: 4 } }, levels: { easy: { state: { plan: { work: 60, rest: 10, rounds: 4 } } }, challenge: { prompt: '1분(60초) 달리고 30초 쉬기를 4번 하도록 맞추고, 전체 시간이 몇 초인지 셈해 봐요.', target: { plan: { work: 60, rest: 30, rounds: 4 }, total: 330 } } }, difficulty: 0.2,
                  hints: ['달리는 시간, 쉬는 시간, 되풀이 횟수 세 칸을 하나씩 맞춰요. 1분이 몇 초인지 먼저 떠올려요.', '쉬는 시간은 달리기와 달리기 사이에만 들어가요.', '달리기 60초, 쉬기 30초, 4번으로 맞춰요. 전체는 60×4에 30×3을 더해요.'] },
                { prompt: '계획대로 달리기 전에 날씨에 맞게 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['쉴 수 있는 그늘 자리를 정했어요', '물병을 그늘에 두었어요', '모자를 썼거나 그늘 자리를 확인했어요', '어지러우면 바로 멈추기로 했어요'] }, target: { safety: true }, difficulty: 0.1 },
                FREE('모둠과 계획한 대로 달리고 쉬기를 해 보고, 쉬는 동안 물을 마셨는지 서로 확인한 뒤 표시해요.'),
              ],
            },
          ],
          {
            teacher: '"오늘 날씨였다면 계획에서 무엇을 바꾸었을까요?" 오늘 실제 날씨에 맞춰 두세 학생의 생각을 듣는다. 출구 1번을 틀린 학생에게는 그 날씨에서 다칠 수 있는 곳(바닥·몸·눈)을 먼저 짚게 한다. 그늘에서 숨을 고르며 마친다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '날씨마다', slots: [{ id: 'fog', label: '안개가 짙어 멀리 안 보이는 날' }, { id: 'ice', label: '밤새 얼어 그늘진 곳이 반들반들한 날' }], cards: ['공은 가까운 거리에서만 주고받아요', '얼음 낀 그늘 쪽을 피해 해가 든 곳에서 활동해요'] }, prompt: '새 날씨에 알맞은 수칙을 이어요.', target: { match: { fog: '공은 가까운 거리에서만 주고받아요', ice: '얼음 낀 그늘 쪽을 피해 해가 든 곳에서 활동해요' } }, difficulty: 0.2 },
              { type: 'choice', prompt: '비가 그친 다음 날 운동장 이어달리기에서 알맞은 것은?', options: ['물웅덩이를 피해 달릴 길을 정해요', '물웅덩이를 뛰어넘으며 달려요', '날씨는 상관없이 늘 하던 대로 해요'], answer: 0, difficulty: 0.15, explain: '젖은 흙과 웅덩이는 미끄러우니 피해서 달릴 길을 정해요.' },
              MOOD('날씨에 맞는 계획을 세워 본 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '날씨마다 바뀌는 수칙',
          items: [
            { type: 'table', prompt: '날씨마다 조심할 점과 바꿀 수칙을 쓰세요.', columns: ['날씨', '조심할 점', '바꿀 수칙'], cells: [['햇볕이 뜨거운 날', '', ''], ['추운 날', '', ''], ['비 온 다음 날', '', ''], ['바람 센 날', '', '']] },
            { type: 'choice', prompt: '천둥·번개가 칠 때 체육은 어떻게 할까요?', options: ['실내로 옮겨요', '비가 안 오면 밖에서 해요', '나무 밑으로 모여요'], answer: '실내로 옮겨요' },
            { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '1분 달리고 30초 쉬기를 4번 하면 쉬기는 모두 ___번 들어가요.', answer: '3' },
            { type: 'short', prompt: '오늘 날씨에 맞게 바꾸면 좋을 수칙 하나를 쓰세요.' },
          ],
          easy: {
            note: '더우면 그늘과 물, 추우면 준비 운동 길게, 비 온 뒤에는 웅덩이 피하기!',
            items: [
              { type: 'choice', prompt: '더운 날 쉬는 곳은?', options: ['그늘', '햇볕 아래'], answer: '그늘' },
              { type: 'short', prompt: '오늘 날씨를 한 낱말로 쓰세요.' },
              { type: 'draw', prompt: '오늘 날씨와 그 날씨에 지킬 수칙 하나를 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드 한 장이 미리 놓여 있고, 그래프 점 옆에 기온이 보여요. 타이머는 달리기 시간이 이미 맞추어져 있어요.',
          base: '날씨와 수칙을 잇고, 그래프를 읽고, 쉬는 시간을 넣은 계획을 세워요.',
          challenge: '타이머 전체 시간을 직접 셈해 맞춰야 하고, 전체 시간은 맞힌 뒤에만 보여요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 안전 수칙은 날씨와 상관없이 늘 같다고 여긴다 → 같은 운동장 사진 네 장으로 바닥·몸·공기가 달라지는 것을 견주게 한다. ② 쉬는 시간을 계획에서 빼려 한다 → 쉬기도 계획이라는 것을 타이머로 보여 준다. ③ 쉬기 횟수를 달리기 횟수와 같다고 셈한다 → 손가락으로 "달리기, 쉬기, 달리기…"를 짚어 세게 한다. 실제로 폭염 특보·미세먼지 나쁨·낙뢰가 있으면 실외 활동을 하지 않는다. 기온 그래프는 예시 자료다.',
      }),
      // ───────────────────────── 22 ─────────────────────────
      L(22, {
        title: '물가와 산길 체험에서 지킬 안전 수칙 견주기',
        objective: '물가와 산길에서 생길 수 있는 위험을 견주어 장소마다 지킬 수칙을 들고, 물에 빠진 친구를 보았을 때 할 일을 차례대로 말할 수 있다.',
        illustration: art('a paper-cut scene of a calm shallow stream with a child in a life jacket on one side and a gentle mountain trail with signposts on the other side', [
          { motif: 'sun', x: 410, y: 52, s: 0.7 }, { motif: 'mountain', x: 360, y: 170 }, { motif: 'wave', x: 120, y: 214 },
          { motif: 'tree', x: 430, y: 212, s: 0.8 }, { motif: 'cloud', x: 120, y: 50 },
          { motif: 'text', x: 240, y: 124, text: '물가와 산길, 무엇이 다를까?', size: 22 },
        ]),
        safety: [SPACE, STOP, '구명조끼 입어 보기는 교사가 끈 조임을 확인한 뒤 매트 위에서만 해요.'],
        stages: stages(
          {
            teacher: '"현장 체험학습으로 계곡에 간다면, 산에 오른다면 무엇이 가장 걱정되나요?" 물에 빠짐, 미끄러짐, 길 잃음 같은 대답을 두 칸(물가·산길)으로 나누어 적는다. "체육관과 운동장처럼, 물가와 산길도 조심할 점이 다를까요?" 오늘은 학교 밖에서 스포츠와 체험을 할 때 지킬 수칙을 견주고, 물에 빠진 친구를 보았을 때 할 일을 몸으로 연습한다고 알린다.',
            student: '계곡과 산길에 간다면 무엇이 가장 걱정될지 하나씩 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 물가 수칙과 산길 수칙 나누기', minutes: 8, tool: 'mindmap',
              task: '안전 수칙 카드를 물가에서 지킬 것과 산길에서 지킬 것으로 나누고, 위험한 장면에 알맞은 행동을 이어요.',
              teacher: '"이 수칙은 물을 위한 것일까요, 걷는 길을 위한 것일까요?" 도전 단계의 준비 운동 카드처럼 두 곳 모두에서 지키는 수칙도 있다는 것을 짚는다. 물이 얕아 보여도 안전하다고 말하는 학생에게 물속 돌은 미끄럽고 깊이는 겉으로 알기 어렵다고 말한다.',
              levels: CARD,
              items: [
                { prompt: '안전 수칙 카드를 물가에서 지킬 것과 산길에서 지킬 것으로 나누어요.', toolOptions: { topic: '어디에서 지킬까?', slots: ['물가', '산길'], cards: ['구명조끼를 입고 끈을 단단히 조여요', '물에 들어가기 전에 손발에 물을 묻혀요', '정해진 등산로로만 걸어요', '내리막에서는 무릎을 굽히고 걸음을 줄여요'] }, target: { sort: { '물가': ['구명조끼를 입고 끈을 단단히 조여요', '물에 들어가기 전에 손발에 물을 묻혀요'], '산길': ['정해진 등산로로만 걸어요', '내리막에서는 무릎을 굽히고 걸음을 줄여요'] } }, levels: { easy: { state: { at: { '구명조끼를 입고 끈을 단단히 조여요': 0 } } }, challenge: { prompt: '안전 수칙 카드를 물가와 산길로 나누어요. 두 곳 모두에서 지키는 수칙 카드는 어느 가지에도 넣지 않아요.', toolOptions: { cards: ['구명조끼를 입고 끈을 단단히 조여요', '물에 들어가기 전에 손발에 물을 묻혀요', '정해진 등산로로만 걸어요', '내리막에서는 무릎을 굽히고 걸음을 줄여요', '출발 전에 준비 운동을 해요'] } } }, difficulty: 0.15 },
                { prompt: '위험한 장면에 알맞은 행동 카드를 이어요.', toolOptions: { mode: 'match', topic: '이럴 때는', slots: [{ id: 'deep', label: '친구가 물살이 센 깊은 곳으로 가자고 해요' }, { id: 'short', label: '친구가 길 없는 비탈로 지름길을 가자고 해요' }, { id: 'lost', label: '산길에서 모둠을 놓쳤어요' }], cards: ['"위험해, 얕은 곳에 있자." 하고 선생님 곁에 있어요', '정해진 등산로로 함께 가자고 말해요', '그 자리에 멈춰 큰 소리로 부르고 기다려요'] }, target: { match: { deep: '"위험해, 얕은 곳에 있자." 하고 선생님 곁에 있어요', short: '정해진 등산로로 함께 가자고 말해요', lost: '그 자리에 멈춰 큰 소리로 부르고 기다려요' } }, levels: { easy: { state: { at: { '정해진 등산로로 함께 가자고 말해요': 1 } } } }, difficulty: 0.2 },
                { prompt: '물가에서 안전한 행동만 골라요.', toolOptions: { mode: 'pick', topic: '물가에서', cards: ['어른이 지켜보는 곳에서만 물에 들어가요', '물속 바위는 미끄러우니 밟지 않아요', '배가 고프거나 추우면 물에서 나와 쉬어요', '얕아 보이면 혼자 건너 봐요'] }, target: { pick: ['어른이 지켜보는 곳에서만 물에 들어가요', '물속 바위는 미끄러우니 밟지 않아요', '배가 고프거나 추우면 물에서 나와 쉬어요'] }, difficulty: 0.2,
                  conclude: '물가는 빠짐과 미끄러짐을, 산길은 길 잃음과 넘어짐을 먼저 조심해요. 준비 운동처럼 두 곳 모두에서 지키는 수칙도 있어요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 물에 빠진 친구를 보았을 때 할 일 연습하기', minutes: 18, tool: 'timer',
              task: '물에 빠진 친구를 보았을 때 할 일의 차례를 세우고, 모둠에서 역할(알리는 사람·신고하는 사람·뜨는 물건 던지는 사람)을 나누어 몸으로 연습해요. 매트 위에서 누워 뜨기 자세도 흉내 내 봐요.',
              teacher: '"친구를 구하려고 물에 뛰어들면 어떻게 될까요?" 어린이가 직접 들어가면 함께 빠질 수 있으니 절대 들어가지 않는다고 분명히 말한다. 던지는 사람은 빈 페트병이나 부드러운 공을 친구 앞쪽 바닥에 굴려 놓게 하고, 몸 쪽으로 세게 던지지 않는다. 누워 뜨기는 매트에 등을 대고 두 팔을 옆으로 벌려 배꼽을 하늘로 내미는 모양을 30초 동안 해 본다.',
              levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
              items: [
                { prompt: '물에 빠진 친구를 보았을 때 할 일 카드를 차례대로 놓아요.', toolOptions: { cards: ['물에 뜨는 물건을 친구 앞쪽으로 던져 줘요', '큰 소리로 "도와주세요!" 하고 어른을 불러요', '어른과 함께 119에 신고해요'] }, target: { order: ['큰 소리로 "도와주세요!" 하고 어른을 불러요', '어른과 함께 119에 신고해요', '물에 뜨는 물건을 친구 앞쪽으로 던져 줘요'] }, levels: { easy: { state: { order: ['큰 소리로 "도와주세요!" 하고 어른을 불러요', '물에 뜨는 물건을 친구 앞쪽으로 던져 줘요', '어른과 함께 119에 신고해요'] } } }, difficulty: 0.2,
                  hints: ['혼자서 할 수 있는 일과 어른의 힘이 필요한 일을 먼저 떠올려요.', '도와줄 사람이 많아져야 구조가 빨라져요. 어른을 부르는 일이 앞에 와요.', '어른을 부르고, 함께 119에 신고하고, 그다음 뜨는 물건을 던져 줘요.'] },
                { prompt: '모둠 연습을 하기 전에 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['던질 물건은 빈 페트병이나 부드러운 공이에요', '물건은 친구 앞쪽 바닥에 굴려 놓기로 했어요', '매트 사이가 충분히 떨어져 있어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '모둠 연습을 세 역할로 해 본 횟수와 누워 뜨기 자세를 30초 지킨 횟수를 적어요.', toolOptions: { fields: [{ label: '역할 바꾸어 연습한 횟수', unit: '번', max: 3 }, { label: '누워 뜨기 30초 지킨 횟수', unit: '번', max: 3 }] }, target: { records: true }, difficulty: 0.15 },
                { prompt: '연습을 마치고 해낸 것을 점검 목록에 표시해요.', target: { selfCheck: ['큰 소리로 어른을 부르는 말을 해 보았어요', '물에 직접 들어가지 않는다는 것을 말할 수 있어요', '누워 뜨기 자세를 해 보았어요'] }, difficulty: 0.1 },
                FREE('모둠에서 알리기·신고하기·던지기 세 역할을 돌아가며 한 번씩 맡아 연습한 뒤 표시해요.'),
              ],
            },
          ],
          {
            teacher: '"물에 빠진 친구를 보면 가장 먼저 무엇을 하나요? 해서는 안 되는 일은요?" 두 대답을 함께 듣고 "직접 들어가지 않는다"를 다시 짚는다. 출구 2번을 틀린 학생에게는 활동 2의 역할 연습을 떠올리게 한다. 누워 뜨기 자세로 숨을 고르며 마친다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { topic: '어디에서 지킬까?', slots: ['물가', '산길'], cards: ['물놀이 뒤에는 물 밖에서 몸을 말리고 쉬어요', '돌이 굴러 내려오는 비탈 아래에 서지 않아요', '해가 지기 전에 내려오도록 출발 시각을 정해요'] }, prompt: '새 수칙 카드를 물가와 산길로 나누어요.', target: { sort: { '물가': ['물놀이 뒤에는 물 밖에서 몸을 말리고 쉬어요'], '산길': ['돌이 굴러 내려오는 비탈 아래에 서지 않아요', '해가 지기 전에 내려오도록 출발 시각을 정해요'] } }, difficulty: 0.15 },
              { type: 'choice', prompt: '물에 빠진 친구를 보았을 때 하면 안 되는 일은?', options: ['큰 소리로 어른을 불러요', '친구를 구하려고 직접 물에 뛰어들어요', '물에 뜨는 물건을 던져 줘요'], answer: 1, difficulty: 0.15, explain: '어린이가 직접 들어가면 함께 빠질 수 있어요. 알리고, 신고하고, 뜨는 물건을 던져요.' },
              MOOD('물가와 산길 안전을 연습해 본 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '물가와 산길 안전',
          items: [
            { type: 'table', prompt: '물가와 산길에서 조심할 점과 지킬 수칙을 쓰세요.', columns: ['장소', '조심할 점', '지킬 수칙'], cells: [['물가', '', ''], ['산길', '', '']] },
            { type: 'table', prompt: '물에 빠진 친구를 보았을 때 할 일을 차례대로 쓰세요.', columns: ['차례', '할 일'], cells: [['1', ''], ['2', ''], ['3', '']] },
            { type: 'choice', prompt: '산길에서 모둠을 놓쳤을 때 알맞은 행동에 ○ 하세요.', options: ['그 자리에 멈춰 부르고 기다려요', '혼자 지름길로 내려가요', '모둠을 찾아 이리저리 뛰어다녀요'], answer: '그 자리에 멈춰 부르고 기다려요' },
            { type: 'check', prompt: '물가와 산길 두 곳 모두에서 지키는 수칙에 ✓ 하세요.', options: ['출발 전에 준비 운동을 해요', '모둠과 떨어지지 않아요', '구명조끼를 입어요'] },
            { type: 'short', prompt: '물에 빠진 친구를 구하려고 직접 들어가면 안 되는 까닭을 쓰세요.' },
          ],
          easy: {
            note: '물에 빠진 친구를 보면: 알리고 → 신고하고 → 뜨는 물건 던지기. 직접 들어가지 않아요.',
            items: [
              { type: 'choice', prompt: '물에 빠진 친구를 보면 가장 먼저?', options: ['큰 소리로 어른을 불러요', '물에 뛰어들어요'], answer: '큰 소리로 어른을 불러요' },
              { type: 'short', prompt: '물가에서 입는 옷(조끼) 이름을 쓰세요.' },
              { type: 'draw', prompt: '누워 뜨기 자세를 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드 한 장이나 첫 차례가 미리 놓여 있고, 맞는 곳에 놓으면 바로 표시돼요. 역할 연습은 "알리기" 한 역할만 맡아도 돼요.',
          base: '물가와 산길 수칙을 나누고, 할 일의 차례를 세워 세 역할로 연습해요.',
          challenge: '두 곳 모두에서 지키는 함정 카드가 섞여 있고, 시간 재기로 알리기부터 던지기까지 걸린 시간을 재요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 안전 수칙은 어디서나 똑같다고 여긴다 → 물가(빠짐·미끄러짐)와 산길(길 잃음·넘어짐)의 위험이 다르다는 것을 두 칸 표로 견주게 한다. ② 친구를 구하려면 직접 들어가야 한다고 여긴다 → 함께 빠질 수 있다는 것을 분명히 말하고, 뜨는 물건 던지기를 몸으로 연습한다. ③ 얕아 보이는 물은 안전하다고 여긴다 → 물속 바위와 물살은 겉으로 알기 어렵다고 짚는다. 실제 물속 활동은 하지 않으며, 생존 수영 수업이 있으면 그 수업과 이어 쓴다.',
      }),
      // ───────────────────────── 23 ─────────────────────────
      L(23, {
        title: '활동 전에 체육관 바닥과 기구 살펴 위험한 곳 알리기',
        objective: '활동 전에 바닥과 기구를 차례로 살펴 위험해 보이는 곳을 찾고, 내가 치울 것과 선생님께 알릴 것을 나누어 자리와 위험을 알릴 수 있다.',
        illustration: art('children walking slowly around an indoor gym before class, one child pointing at a small puddle near a basketball pole while the teacher listens', [
          { motif: 'star', x: 410, y: 60, s: 0.7 }, { motif: 'house', x: 90, y: 196, s: 0.8 }, { motif: 'hills', y: 220 },
          { motif: 'ball', x: 330, y: 200, s: 0.8 }, { motif: 'cloud', x: 120, y: 50 },
          { motif: 'text', x: 240, y: 124, text: '살펴보고, 알려요', size: 26 },
        ]),
        safety: [SIGNAL, SPACE, '깨진 것·날카로운 것·고장 난 기구는 손대지 않고 선생님께 알려요.'],
        stages: stages(
          {
            teacher: '수업 전에 체육관 다섯 곳에 "위험 표지 카드"(물 자국 그림, 떨어진 줄넘기 줄, 찢어진 매트 사진 등)를 미리 놓아 둔다. "어제 이 체육관에서 다친 사람이 없었으니 오늘은 살피지 않고 바로 시작해도 될까요?" 대답을 들은 뒤 "어제 없던 물 자국이 오늘 생겼을 수도 있어요."라고 말하고, 오늘은 활동 전에 직접 살펴 알리는 연습을 한다고 알린다.',
            student: '어제 다친 사람이 없었으면 오늘 살피지 않아도 되는지 생각해 보고 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 치울 것과 알릴 것 나누기', minutes: 9, tool: 'mindmap',
              task: '활동 전에 발견한 것 카드를 내가 바로 치울 것과 손대지 않고 선생님께 알릴 것으로 나누고, 알릴 때 넣을 말을 골라요.',
              teacher: '"가볍고 다칠 염려가 없으면 내가 치우고, 다칠 수 있거나 고장 난 것은 손대지 않고 알려요." 깨진 조각을 직접 줍겠다는 학생에게 손을 다칠 수 있다고 말한다. 알릴 때 "저기 위험해요"만 말하면 선생님이 어디인지 모른다는 것을 짚는다.',
              levels: CARD,
              items: [
                { prompt: '발견한 것 카드를 내가 바로 치울 것과 선생님께 알릴 것으로 나누어요.', toolOptions: { topic: '발견했어요', slots: ['내가 치워요', '선생님께 알려요'], cards: ['바닥에 떨어진 줄넘기 줄', '구석으로 굴러간 고무공', '바닥에 흩어진 깨진 유리 조각', '흔들거리는 농구대 받침', '덮개가 찢어져 속이 보이는 매트'] }, target: { sort: { '내가 치워요': ['바닥에 떨어진 줄넘기 줄', '구석으로 굴러간 고무공'], '선생님께 알려요': ['바닥에 흩어진 깨진 유리 조각', '흔들거리는 농구대 받침', '덮개가 찢어져 속이 보이는 매트'] } }, levels: { easy: { state: { at: { '바닥에 흩어진 깨진 유리 조각': 1 } } } }, difficulty: 0.15,
                  hints: ['손으로 집어도 다칠 염려가 없는지, 고장 나서 고쳐야 하는지 생각해요.', '날카로운 것과 고장 난 기구는 어린이가 손대면 다칠 수 있어요.', '줄넘기 줄과 고무공은 내가 치우고, 유리 조각·흔들리는 받침·찢어진 매트는 알려요.'] },
                { prompt: '위험한 곳을 알릴 때 꼭 넣을 말만 골라요.', toolOptions: { mode: 'pick', topic: '알릴 때 넣을 말', cards: ['어디에 있는지(자리)', '무엇이 위험한지', '누가 그렇게 만들었는지', '친구 이름을 대며 탓하는 말'] }, target: { pick: ['어디에 있는지(자리)', '무엇이 위험한지'] }, difficulty: 0.15 },
                { prompt: '발견한 것에 알맞게 알리는 말을 이어요.', toolOptions: { mode: 'match', topic: '이렇게 알려요', slots: [{ id: 'water', label: '농구대 밑 바닥에 물이 고여 있어요' }, { id: 'mat', label: '뜀틀 앞 매트가 들떠 있어요' }], cards: ['"선생님, 농구대 밑에 물이 있어서 미끄러워요."', '"선생님, 뜀틀 앞 매트가 들떠서 발이 걸려요."'] }, target: { match: { water: '"선생님, 농구대 밑에 물이 있어서 미끄러워요."', mat: '"선생님, 뜀틀 앞 매트가 들떠서 발이 걸려요."' } }, difficulty: 0.1,
                  conclude: '알릴 때는 어디에, 무엇이 위험한지를 함께 말해야 바로 고칠 수 있어요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 체육관을 차례로 살펴 위험 표지 찾기', minutes: 17, tool: 'timer',
              task: '짝과 살펴보는 차례를 정한 뒤, 체육관을 걸어 다니며 숨겨진 위험 표지를 찾아요. 찾은 것은 치울지 알릴지 정해 그대로 하고, 찾은 수를 적어요. 다 살핀 뒤 모두 함께 짧은 공 놀이를 해요.',
              teacher: '"바닥부터, 그다음 기구, 마지막으로 둘레를 봐요." 학생이 알리러 오면 "어디에, 무엇이" 두 가지가 들어갔는지 확인하고 표지 카드를 받는다. 다섯 개를 모두 찾지 못한 모둠이 있으면 남은 자리를 말로 알려 주지 말고 "바닥에 하나 더 있어요"처럼 범위만 말한다. 점검이 끝나면 10분 남짓 짧은 굴리기 놀이를 하며 살핀 곳을 피해 활동하는지 본다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '체육관을 살펴보는 차례대로 카드를 놓아요.', toolOptions: { cards: ['둘레의 벽·기둥·창문을 살펴요', '바닥의 물기와 떨어진 물건을 살펴요', '쓸 기구가 흔들리거나 찢어졌는지 살펴요'] }, target: { order: ['바닥의 물기와 떨어진 물건을 살펴요', '쓸 기구가 흔들리거나 찢어졌는지 살펴요', '둘레의 벽·기둥·창문을 살펴요'] }, levels: { easy: { state: { order: ['바닥의 물기와 떨어진 물건을 살펴요', '둘레의 벽·기둥·창문을 살펴요', '쓸 기구가 흔들리거나 찢어졌는지 살펴요'] } } }, difficulty: 0.15,
                  hints: ['선생님이 칠판에 적은 "살펴보는 차례"를 떠올려요.', '발밑에서 시작해 손에 닿는 기구, 그다음 멀리 있는 둘레로 넓혀 가요.', '바닥, 기구, 둘레 차례예요.'] },
                { prompt: '점검을 시작하기 전에 짝과 약속한 것을 눌러 표시해요.', toolOptions: { safety: ['걸어서 살펴보기로 했어요', '날카로운 것은 손대지 않기로 했어요', '찾으면 자리와 위험을 함께 알리기로 했어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '찾은 위험 표지 수와 그 가운데 선생님께 알린 수를 적어요.', toolOptions: { fields: [{ label: '찾은 위험 표지', unit: '개', max: 5 }, { label: '선생님께 알린 것', unit: '개', max: 5 }] }, target: { records: true }, levels: { challenge: { toolOptions: { fields: [{ label: '찾은 위험 표지', unit: '개', max: 5 }, { label: '선생님께 알린 것', unit: '개', max: 5 }, { label: '내가 치운 것', unit: '개', max: 5 }] } } }, difficulty: 0.15 },
                { prompt: '점검과 공 놀이를 마치고 해낸 것을 점검 목록에 표시해요.', target: { selfCheck: ['바닥·기구·둘레 차례로 살폈어요', '자리와 위험을 함께 말해 알렸어요', '공 놀이 동안 살핀 곳을 피해 활동했어요'] }, difficulty: 0.1 },
                FREE('짝과 함께 찾은 표지 하나를 골라 선생님께 "어디에, 무엇이" 들어간 말로 알린 뒤 표시해요.'),
              ],
            },
          ],
          {
            teacher: '"찾은 다섯 곳 가운데 그냥 시작했다면 가장 위험했을 곳은 어디였나요?" 두세 명에게 까닭과 함께 듣는다. 처음 질문 "어제 다친 사람이 없으면 살피지 않아도 될까요?"를 다시 묻고 학생 말로 답하게 한다. 출구 1번을 틀린 학생에게는 "손대면 다칠 수 있나요?"를 먼저 묻게 한다. 표지 카드를 함께 거두며 마친다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { topic: '발견했어요', slots: ['내가 치워요', '선생님께 알려요'], cards: ['못이 튀어나온 나무 뜀틀', '바닥에 떨어진 수건', '고리가 빠져 흔들리는 철봉'] }, prompt: '새로 발견한 것 카드를 치울 것과 알릴 것으로 나누어요.', target: { sort: { '내가 치워요': ['바닥에 떨어진 수건'], '선생님께 알려요': ['못이 튀어나온 나무 뜀틀', '고리가 빠져 흔들리는 철봉'] } }, difficulty: 0.15 },
              { type: 'choice', prompt: '"지난번에 다친 사람이 없었으니 오늘은 살피지 않아도 된다"는 말은?', options: ['맞아요', '틀려요. 바닥과 기구는 날마다 달라질 수 있어 매번 살펴요'], answer: 1, difficulty: 0.15, explain: '물 자국이나 떨어진 물건은 오늘 새로 생길 수 있어요. 활동 전에는 매번 살펴요.' },
              MOOD('위험한 곳을 찾아 알려 본 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '살펴보고 알려요',
          items: [
            { type: 'table', prompt: '오늘 찾은 위험한 곳을 쓰세요.', columns: ['어디에?', '무엇이 위험한가요?', '치움 / 알림'], cells: [['', '', ''], ['', '', ''], ['', '', '']] },
            { type: 'blank', prompt: '살펴보는 차례를 쓰세요.', text: '___ → 기구 → 둘레', answer: '바닥' },
            { type: 'choice', prompt: '깨진 유리 조각을 보았을 때 알맞은 행동에 ○ 하세요.', options: ['손대지 않고 선생님께 알려요', '손으로 주워 버려요', '모른 척 지나가요'], answer: '손대지 않고 선생님께 알려요' },
            { type: 'short', prompt: '"저기 위험해요" 대신 어떻게 알리면 좋을지 한 문장으로 쓰세요.' },
            { type: 'short', prompt: '다친 적이 없어도 활동 전에 살펴야 하는 까닭을 쓰세요.' },
          ],
          easy: {
            note: '다칠 수 있으면 손대지 않고 알려요. "어디에, 무엇이"를 말해요.',
            items: [
              { type: 'choice', prompt: '흔들리는 농구대 받침을 보면?', options: ['선생님께 알려요', '내가 고쳐요'], answer: '선생님께 알려요' },
              { type: 'short', prompt: '오늘 찾은 위험 표지 수를 쓰세요.' },
              { type: 'draw', prompt: '오늘 찾은 위험한 곳 하나를 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드 한 장이나 첫 차례가 미리 놓여 있고, 맞는 곳에 놓으면 바로 표시돼요. 점검은 바닥만 맡아도 돼요.',
          base: '치울 것과 알릴 것을 나누고, 바닥·기구·둘레 차례로 살펴 찾은 수를 적어요.',
          challenge: '알린 것과 치운 것을 나누어 적고, 공 놀이 동안 살핀 곳을 피해 활동하는지 스스로 점검해요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 다친 적이 없으면 안전을 살피지 않아도 된다고 여긴다 → 어제 없던 물 자국이 오늘 생길 수 있다는 것을 미리 놓아 둔 표지로 직접 보게 한다. ② 날카로운 것을 직접 치우려 한다 → "다칠 수 있으면 손대지 않기"를 먼저 정한다. ③ "저기요"처럼 자리를 말하지 않고 알린다 → "어디에, 무엇이" 두 가지를 넣는 말틀을 칠판에 적는다. 위험 표지는 실제 위험물이 아니라 그림·사진 카드로 만든다.',
      }),
      // ───────────────────────── 24 ─────────────────────────
      L(24, {
        title: '운동장 꼬리잡기 전에 위험한 곳 표시하고 수칙 지키며 끝까지 하기',
        objective: '운동장 지도에 위험한 곳을 표시해 피할 곳을 정하고, 정한 안전 수칙을 지키며 꼬리잡기 세 판에 끝까지 참여할 수 있다.',
        illustration: art('children playing a tail-tag game with ribbon tails on a school field marked with cones, a small puddle and a rock circled with a dotted line', [
          { motif: 'sun', x: 410, y: 52, s: 0.7 }, { motif: 'cloud', x: 100, y: 48 }, { motif: 'hills', y: 214 },
          { motif: 'tree', x: 60, y: 210 }, { motif: 'flower', x: 420, y: 218 },
          { motif: 'text', x: 240, y: 124, text: '피할 곳을 먼저 정해요', size: 24 },
        ]),
        safety: [SHOE, SIGNAL, '꼬리는 손으로만 떼고, 친구 옷이나 몸을 잡아당기지 않아요.', STOP],
        stages: stages(
          {
            teacher: '수업 전에 교사가 운동장 놀이 구역을 미리 걸어 보고 물웅덩이·튀어나온 돌·스프링클러 머리처럼 걸려 넘어질 곳 세 군데에 고깔을 세워 둔다. "지난 시간에는 체육관을 살폈지요. 운동장은 체육관과 무엇이 달랐나요?" 흙바닥, 돌, 넓은 공간이 나오면 "오늘은 그 운동장에서 꼬리잡기를 해요. 시작 전에 피할 곳을 지도에 표시하고, 놀이가 신날 때도 수칙을 끝까지 지키는지 스스로 살펴봐요."라고 알린다.',
            student: '체육관과 운동장의 바닥이 어떻게 다른지 떠올려 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 운동장 지도에 피할 곳 표시하기', minutes: 8, tool: 'map',
              task: '선생님이 미리 걸어 보고 알려 준 위험한 곳을 운동장 지도에 핀으로 꽂아요. 꽂은 곳은 꼬리잡기 때 피해 다닐 곳이에요.',
              teacher: '"선생님이 고깔을 세운 세 곳을 말로 알려 줄게요. 지도에서 어디인지 핀을 꽂아요." 지도 북쪽이 위라는 것을 먼저 확인한다. 핀을 꽂은 뒤 실제 운동장에서 고깔을 손으로 가리켜 지도와 견주어 보게 한다.',
              levels: { easy: { readout: true }, base: {}, challenge: {} },
              items: [
                { prompt: '물웅덩이는 축구 골대에서 남쪽으로 두 칸 간 곳에 있어요. 그 자리에 핀을 꽂아요.', toolOptions: { title: '꼬리잡기 운동장', grid: [6, 4], places: [{ name: '축구 골대', icon: 'dot', at: [1, 0] }, { name: '구령대', icon: 'office', at: [5, 0], legend: '구령대' }, { name: '철봉', icon: 'dot', at: [0, 3] }, { name: '느티나무', icon: 'forest', at: [5, 3] }] }, target: { from: '축구 골대', dir: '남', steps: 2 }, difficulty: 0.15,
                  hints: ['문장에 나온 기준 장소를 지도에서 먼저 찾아요.', '지도 위쪽이 북쪽이면 아래쪽이 남쪽이에요. 기준 장소에서 그쪽으로 한 칸씩 세어 가요.', '골대 칸에서 아래로 두 칸 내려간 칸이에요.'] },
                { prompt: '튀어나온 돌은 구령대에서 서쪽으로 세 칸 간 곳에 있어요. 핀을 꽂아요.', toolOptions: { title: '꼬리잡기 운동장', grid: [6, 4], places: [{ name: '축구 골대', icon: 'dot', at: [1, 0] }, { name: '구령대', icon: 'office', at: [5, 0], legend: '구령대' }, { name: '철봉', icon: 'dot', at: [0, 3] }, { name: '느티나무', icon: 'forest', at: [5, 3] }] }, target: { from: '구령대', dir: '서', steps: 3 }, levels: { challenge: { prompt: '튀어나온 돌은 구령대에서 남서쪽으로 두 칸 간 곳에 있어요. 핀을 꽂아요.', target: { from: '구령대', dir: '남서', steps: 2 } } }, difficulty: 0.2,
                  hints: ['기준 장소를 먼저 찾고, 그곳에서 말한 방향으로 손가락을 옮겨 세어요.', '서쪽은 지도의 왼쪽이에요. 두 방위를 섞은 방향은 대각선으로 한 칸씩 가요.', '기준 칸에 손가락을 두고 말한 방향으로 말한 칸 수만큼 옮긴 곳에 핀을 꽂아요.'] },
                { prompt: '스프링클러 머리는 느티나무에서 북쪽으로 한 칸 간 곳에 있어요. 핀을 꽂아요.', toolOptions: { title: '꼬리잡기 운동장', grid: [6, 4], places: [{ name: '축구 골대', icon: 'dot', at: [1, 0] }, { name: '구령대', icon: 'office', at: [5, 0], legend: '구령대' }, { name: '철봉', icon: 'dot', at: [0, 3] }, { name: '느티나무', icon: 'forest', at: [5, 3] }] }, target: { from: '느티나무', dir: '북', steps: 1 }, difficulty: 0.15,
                  hints: ['기준 장소를 지도에서 찾고 방향을 확인해요.', '북쪽은 지도의 위쪽이에요.', '나무 칸에서 위로 한 칸 올라간 칸이에요.'],
                  conclude: '놀이를 시작하기 전에 위험한 곳을 지도와 눈으로 확인해 두면, 달리는 중에도 피할 수 있어요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 수칙을 정하고 꼬리잡기 세 판 끝까지 하기', minutes: 18, tool: 'timer',
              task: '2분 놀이·1분 쉬기를 세 판 하도록 타이머를 맞추고, 정한 수칙을 지키며 꼬리잡기를 해요. 판마다 수칙을 지켰는지 스스로 적어요.',
              teacher: '"신날 때 수칙을 잊기 쉬워요. 세 판째에도 지키는지가 오늘의 도전이에요." 꼬리(띠)는 바지 뒤에 끼우고 손으로만 뗀다. 고깔 둘레 두 걸음 안으로 들어가면 그 판은 잠시 멈추고 나왔다가 다시 한다. 쉬는 1분에는 그늘에서 물을 마신다.',
              levels: { easy: {}, base: {}, challenge: { showTotal: true, revealAfterCheck: true } },
              items: [
                { prompt: '2분(120초) 놀이·1분(60초) 쉬기를 3판 하도록 타이머를 맞춰요.', toolOptions: { plan: { work: 60, rest: 30, rounds: 2 }, workStep: 30, restStep: 30 }, target: { plan: { work: 120, rest: 60, rounds: 3 } }, levels: { easy: { state: { plan: { work: 120, rest: 30, rounds: 3 } } }, challenge: { prompt: '2분(120초) 놀이·1분(60초) 쉬기를 3판 하도록 맞추고, 전체 시간이 몇 초인지 셈해 봐요.', target: { plan: { work: 120, rest: 60, rounds: 3 }, total: 480 } } }, difficulty: 0.2,
                  hints: ['놀이 시간, 쉬는 시간, 판 수를 한 칸씩 맞춰요. 1분이 몇 초인지 먼저 떠올려요.', '쉬는 시간은 판과 판 사이에만 들어가요.', '놀이 120초, 쉬기 60초, 3판으로 맞춰요. 전체는 120×3에 60×2를 더해요.'] },
                { prompt: '꼬리잡기를 시작하기 전에 운동장을 보고 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['고깔을 세운 세 곳을 눈으로 찾았어요', '꼬리 띠를 바지 뒤에 끼웠어요', '놀이 구역 경계를 확인했어요', '신발 끈을 단단히 묶었어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '세 판 가운데 수칙을 끝까지 지킨 판의 수와 끝까지 참여한 판의 수를 적어요.', toolOptions: { fields: [{ label: '수칙을 끝까지 지킨 판', unit: '판', max: 3 }, { label: '끝까지 참여한 판', unit: '판', max: 3 }] }, target: { records: true }, difficulty: 0.15 },
                { prompt: '꼬리잡기를 마치고 해낸 것을 점검 목록에 표시해요.', target: { selfCheck: ['고깔을 세운 곳을 피해 달렸어요', '꼬리는 손으로만 떼었어요', '쉬는 시간에 물을 마셨어요'] }, difficulty: 0.1 },
                FREE('판이 끝날 때마다 짝과 "고깔을 피했나, 옷을 잡아당기지 않았나" 두 가지를 서로 말해 준 뒤 표시해요.'),
              ],
            },
          ],
          {
            teacher: '"세 판째에 수칙을 지키기가 더 어려웠던 사람?" 왜 그랬는지 듣고, 신이 날 때가 가장 다치기 쉬운 때라고 정리한다. 고깔 둘레에 들어간 순간이 있었다면 그 순간을 다음 시간에 다시 이야기한다고 알린다. 출구 1번을 틀린 학생에게는 기준 장소부터 짚게 한다. 꼬리 띠를 거두고 숨을 고르며 마친다.',
            exitTicket: [
              { type: 'tool', tool: 'map', options: { title: '꼬리잡기 운동장', grid: [6, 4], places: [{ name: '축구 골대', icon: 'dot', at: [1, 0] }, { name: '구령대', icon: 'office', at: [5, 0], legend: '구령대' }, { name: '철봉', icon: 'dot', at: [0, 3] }, { name: '느티나무', icon: 'forest', at: [5, 3] }] }, prompt: '깨진 화분 조각은 철봉에서 동쪽으로 두 칸 간 곳에 있어요. 핀을 꽂아요.', target: { from: '철봉', dir: '동', steps: 2 }, difficulty: 0.15 },
              { type: 'choice', prompt: '꼬리잡기가 신나서 고깔을 세운 곳 쪽으로 달려가게 되었어요. 알맞은 행동은?', options: ['멈추고 고깔 둘레 밖으로 돌아 나와요', '이번만 그냥 지나가요', '더 빨리 뛰어 지나가요'], answer: 0, difficulty: 0.15, explain: '정한 수칙은 신날 때도 끝까지 지켜요. 멈추고 돌아 나오면 돼요.' },
              MOOD('수칙을 지키며 꼬리잡기를 끝까지 해 본 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '피할 곳을 정하고 끝까지',
          items: [
            { type: 'table', prompt: '오늘 피한 곳과 그곳이 위험한 까닭을 쓰세요.', columns: ['피한 곳', '위험한 까닭'], cells: [['물웅덩이', ''], ['튀어나온 돌', ''], ['스프링클러 머리', '']] },
            { type: 'table', prompt: '세 판의 기록을 쓰세요.', columns: ['판', '수칙을 지켰나요? (○/✕)', '끝까지 참여했나요? (○/✕)'], cells: [['1판', '', ''], ['2판', '', ''], ['3판', '', '']] },
            { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '2분 놀이, 1분 쉬기를 3판 하면 쉬기는 ___번 들어가요.', answer: '2' },
            { type: 'short', prompt: '놀이가 신날 때 수칙을 지키기 어려운 까닭과 지키는 방법을 쓰세요.' },
          ],
          easy: {
            note: '시작 전에 고깔 세 곳을 눈으로 찾고, 달릴 때 그쪽을 피해요.',
            items: [
              { type: 'choice', prompt: '꼬리는 무엇으로 떼나요?', options: ['손', '친구 옷을 잡아당겨서'], answer: '손' },
              { type: 'short', prompt: '오늘 끝까지 참여한 판의 수를 쓰세요.' },
              { type: 'draw', prompt: '운동장을 그리고 피할 곳에 ✕ 하세요.' },
            ],
          },
        },
        differentiation: {
          easy: '지도에 핀 자리 글자가 보이고, 타이머의 놀이 시간이 이미 맞추어져 있어요.',
          base: '말로 들은 방위로 핀을 꽂고, 놀이·쉬기 계획을 직접 맞춰요.',
          challenge: '두 방위를 섞은 방향으로 핀을 꽂고, 타이머 전체 시간을 셈해 맞춰요. 전체 시간은 맞힌 뒤에만 보여요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 다친 적이 없는 운동장이니 살피지 않아도 된다고 여긴다 → 교사가 미리 찾아 세운 고깔 세 곳을 지도와 실제로 견주게 한다. ② 놀이 중반부터 수칙을 잊는다 → 판마다 짝과 두 가지를 점검하게 하고, 세 판째를 오늘의 도전으로 정한다. ③ 꼬리 대신 옷을 잡는다 → 그 판은 바로 멈추고 꼬리 떼는 손 모양을 다시 보인다. 운동장 상태에 맞게 위험한 곳과 지도 장소를 바꾸어 쓴다.',
      }),
      // ───────────────────────── 25 ─────────────────────────
      L(25, {
        title: '놀이 기구를 점검하고 차례 지키며 놀이터 순환 놀이하기',
        objective: '놀이 기구마다 점검할 곳을 살펴 안전한지 확인하고, 정한 차례와 이동 시간을 지키며 네 곳 순환 놀이에 끝까지 참여할 수 있다.',
        illustration: art('a school playground with a swing, a slide, a climbing dome and a seesaw, each with a small paper checklist flag, children rotating in groups', [
          { motif: 'sun', x: 410, y: 50, s: 0.7 }, { motif: 'cloud', x: 110, y: 46 }, { motif: 'hills', y: 214 },
          { motif: 'tree', x: 430, y: 212, s: 0.8 }, { motif: 'star', x: 240, y: 72, s: 0.6 },
          { motif: 'text', x: 240, y: 128, text: '살피고, 차례대로, 돌아가며', size: 22 },
        ]),
        safety: ['그네 앞뒤 두 걸음 안으로 지나가지 않아요.', '미끄럼틀은 앉아서 발부터 내려오고, 거꾸로 오르지 않아요.', HOLD, SIGNAL],
        stages: stages(
          {
            teacher: '놀이터 사진을 보이며 묻는다. "놀이터는 늘 놀던 곳이라 살피지 않아도 될까요?" 대답을 들은 뒤 사슬이 꼬인 그네, 미끄럼틀 끝에 놓인 돌 사진을 보여 준다. "어제는 괜찮았던 기구도 오늘 달라질 수 있어요." 오늘은 모둠마다 기구 네 곳을 살핀 뒤, 3분씩 돌아가며 놀고 30초 안에 다음 기구로 옮기는 순환 놀이를 한다고 알린다.',
            student: '놀이터 사진에서 위험해 보이는 곳을 하나 찾아 손으로 가리켜 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 기구마다 점검할 곳 알기', minutes: 8, tool: 'mindmap',
              task: '놀이 기구에 알맞은 점검할 곳을 잇고, 점검할 때 바른 행동을 골라요.',
              teacher: '"그네는 무엇이 끊어지면 위험할까요? 미끄럼틀은 어디에 무엇이 있으면 위험할까요?" 기구를 손으로 흔들어 보며 점검하는 학생에게 흔들리는지는 손을 대지 말고 눈으로 보고, 의심되면 알리라고 말한다.',
              levels: CARD,
              items: [
                { prompt: '놀이 기구에 알맞은 점검할 곳 카드를 이어요.', toolOptions: { mode: 'match', topic: '이것을 살펴요', slots: [{ id: 'swing', label: '그네' }, { id: 'slide', label: '미끄럼틀' }, { id: 'dome', label: '오르기 돔' }, { id: 'saw', label: '시소' }], cards: ['사슬이 꼬이거나 끊어지지 않았나요?', '내려오는 끝에 돌이나 물건이 없나요?', '가로대가 젖거나 미끄럽지 않나요?', '앉는 판 아래 받침 타이어가 있나요?'] }, target: { match: { swing: '사슬이 꼬이거나 끊어지지 않았나요?', slide: '내려오는 끝에 돌이나 물건이 없나요?', dome: '가로대가 젖거나 미끄럽지 않나요?', saw: '앉는 판 아래 받침 타이어가 있나요?' } }, levels: { easy: { state: { at: { '사슬이 꼬이거나 끊어지지 않았나요?': 0 } } } }, difficulty: 0.2 },
                { prompt: '놀이 기구를 점검할 때 바른 행동만 골라요.', toolOptions: { mode: 'pick', topic: '점검할 때', cards: ['기구가 움직이지 않을 때 둘레를 걸으며 봐요', '이상해 보이면 타지 않고 선생님께 알려요', '바닥 모래 속에 날카로운 것이 없는지 봐요', '흔들리는지 보려고 기구에 매달려 흔들어요'] }, target: { pick: ['기구가 움직이지 않을 때 둘레를 걸으며 봐요', '이상해 보이면 타지 않고 선생님께 알려요', '바닥 모래 속에 날카로운 것이 없는지 봐요'] }, difficulty: 0.15 },
                { prompt: '놀이터에서 생긴 일에 알맞은 행동 카드를 이어요.', toolOptions: { mode: 'match', topic: '이럴 때는', slots: [{ id: 'up', label: '친구가 미끄럼틀을 거꾸로 올라오려 해요' }, { id: 'push', label: '그네를 기다리다 친구가 밀어 달라고 해요' }], cards: ['"내려오는 친구와 부딪혀. 계단으로 올라가자." 하고 말해요', '그네가 멈춘 뒤 탄 친구 등 뒤에서 살살 밀어 줘요'] }, target: { match: { up: '"내려오는 친구와 부딪혀. 계단으로 올라가자." 하고 말해요', push: '그네가 멈춘 뒤 탄 친구 등 뒤에서 살살 밀어 줘요' } }, difficulty: 0.15,
                  conclude: '늘 놀던 기구도 놀기 전에 살펴요. 이상하면 타지 않고 알리는 것이 먼저예요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 네 곳 순환 놀이 계획하고 해 보기', minutes: 18, tool: 'timer',
              task: '기구 네 곳을 3분씩 놀고 30초 안에 다음 기구로 옮기도록 타이머를 맞춰요. 모둠별로 맡은 기구를 먼저 점검한 뒤 순환 놀이를 하고, 지킨 것을 적어요.',
              teacher: '"이동하는 30초에는 걸어서 옮기고, 다음 기구 앞에서 줄을 서요." 모둠마다 처음 맡은 기구의 점검표를 먼저 확인하게 한다. 그네는 한 번에 정해진 사람만 타고, 기다리는 학생은 그네 앞뒤 두 걸음 밖 줄에 선다. 교사는 놀이터 가운데에서 네 곳을 모두 볼 수 있게 선다.',
              levels: { easy: {}, base: {}, challenge: { showTotal: true, revealAfterCheck: true } },
              items: [
                { prompt: '기구 네 곳을 3분(180초)씩 놀고, 옮기는 시간 30초를 넣도록 타이머를 맞춰요.', toolOptions: { plan: { work: 60, rest: 10, rounds: 2 }, workStep: 30, restStep: 10 }, target: { plan: { work: 180, rest: 30, rounds: 4 } }, levels: { easy: { state: { plan: { work: 180, rest: 10, rounds: 4 } } }, challenge: { prompt: '네 곳을 3분(180초)씩 놀고 옮기는 시간 30초를 넣도록 맞추고, 전체 시간이 몇 초인지 셈해 봐요.', target: { plan: { work: 180, rest: 30, rounds: 4 }, total: 810 } } }, difficulty: 0.2,
                  hints: ['노는 시간, 옮기는 시간, 기구 수를 한 칸씩 맞춰요. 3분이 몇 초인지 먼저 셈해요.', '옮기는 시간은 기구와 기구 사이에만 들어가요. 마지막 기구 뒤에는 옮기지 않아요.', '놀기 180초, 옮기기 30초, 4번으로 맞춰요. 전체는 180×4에 30×3을 더해요.'] },
                { prompt: '모둠이 처음 맡은 기구를 점검하고 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['기구에 끊어지거나 젖은 곳이 없어요', '기구 아래 바닥에 날카로운 것이 없어요', '이상한 곳은 선생님께 알렸어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '네 곳 가운데 차례를 지켜 논 곳의 수와 30초 안에 옮긴 횟수를 적어요.', toolOptions: { fields: [{ label: '차례를 지켜 논 기구', unit: '곳', max: 4 }, { label: '30초 안에 옮긴 횟수', unit: '번', max: 3 }] }, target: { records: true }, difficulty: 0.15 },
                { prompt: '순환 놀이를 마치고 해낸 것을 점검 목록에 표시해요.', target: { selfCheck: ['놀기 전에 맡은 기구를 살폈어요', '그네 앞뒤로 지나가지 않았어요', '미끄럼틀은 앉아서 발부터 내려왔어요', '옮길 때 걸어서 갔어요'] }, difficulty: 0.1 },
                FREE('모둠과 네 곳을 돌며 놀고, 마지막 기구에서 "가장 지키기 어려웠던 수칙"을 하나씩 말한 뒤 표시해요.'),
              ],
            },
          ],
          {
            teacher: '"점검하다가 실제로 이상한 곳을 찾은 모둠이 있나요?" 찾은 모둠을 칭찬하고 교사가 확인한 결과를 알려 준다. 가장 지키기 어려웠던 수칙을 두세 개 듣고 다음 시간에 위험할 뻔한 순간 이야기로 이어 간다고 말한다. 출구 1번을 틀린 학생에게는 기구가 무엇으로 이어져 있고 어디로 내려오는지 짚게 한다. 손을 씻고 교실로 돌아간다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '이것을 살펴요', slots: [{ id: 'spring', label: '스프링 흔들 말' }, { id: 'rope', label: '밧줄 그물 오르기' }], cards: ['스프링 둘레에 손가락이 낄 틈이 벌어지지 않았나요?', '밧줄이 닳아 풀리거나 매듭이 느슨하지 않나요?'] }, prompt: '새 놀이 기구에 알맞은 점검할 곳을 이어요.', target: { match: { spring: '스프링 둘레에 손가락이 낄 틈이 벌어지지 않았나요?', rope: '밧줄이 닳아 풀리거나 매듭이 느슨하지 않나요?' } }, difficulty: 0.2 },
              { type: 'choice', prompt: '그네 사슬 하나가 꼬여 있는 것을 보았어요. 알맞은 행동은?', options: ['타지 않고 선생님께 알려요', '조심해서 살짝 타 봐요', '사슬을 손으로 풀어 봐요'], answer: 0, difficulty: 0.15, explain: '이상한 기구는 타지도 고치지도 않고 알리는 것이 먼저예요.' },
              MOOD('놀이 기구를 살피고 순환 놀이를 해 본 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '놀이 기구 점검표',
          items: [
            { type: 'table', prompt: '기구마다 점검할 곳과 오늘 살펴본 결과를 쓰세요.', columns: ['기구', '점검할 곳', '괜찮나요? (○/✕)'], cells: [['그네', '', ''], ['미끄럼틀', '', ''], ['오르기 돔', '', ''], ['시소', '', '']] },
            { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '네 곳을 돌며 놀 때 옮기는 시간은 모두 ___번 들어가요.', answer: '3' },
            { type: 'choice', prompt: '그네를 기다릴 때 서는 곳에 ○ 하세요.', options: ['그네 앞뒤 두 걸음 밖', '그네 바로 앞', '그네 바로 뒤'], answer: '그네 앞뒤 두 걸음 밖' },
            { type: 'short', prompt: '오늘 가장 지키기 어려웠던 수칙과 그 까닭을 쓰세요.' },
          ],
          easy: {
            note: '놀기 전에 살피고, 이상하면 타지 않고 알려요.',
            items: [
              { type: 'choice', prompt: '미끄럼틀은 어떻게 내려오나요?', options: ['앉아서 발부터', '엎드려 머리부터'], answer: '앉아서 발부터' },
              { type: 'short', prompt: '오늘 차례를 지켜 논 기구 이름을 하나 쓰세요.' },
              { type: 'draw', prompt: '오늘 살펴본 기구 하나와 점검한 곳을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드 한 장이 미리 놓여 있고, 맞는 곳에 놓으면 바로 표시돼요. 타이머의 노는 시간이 이미 맞추어져 있어요.',
          base: '기구마다 점검할 곳을 잇고, 순환 놀이 계획을 직접 맞추어 해 봐요.',
          challenge: '타이머 전체 시간을 셈해 맞추고, 전체 시간은 맞힌 뒤에만 보여요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 늘 놀던 기구라 살피지 않아도 된다고 여긴다 → 꼬인 사슬·미끄럼틀 끝 돌 사진으로 "어제와 오늘이 다를 수 있다"를 보여 준다. ② 점검한다고 기구에 매달려 흔든다 → 눈으로 보고 의심되면 알리게 한다. ③ 이동 시간에 뛰어간다 → 30초는 걸어서도 충분하다는 것을 첫 이동 때 함께 걸어 보인다. 학교에 없는 기구는 있는 기구로 바꾸어 쓰고, 기구 점검 결과는 교사가 다시 확인한다.',
      }),
      // ───────────────────────── 26 ─────────────────────────
      L(26, {
        title: '위험할 뻔한 순간 떠올려 말하고 안전 규칙 제안하기',
        objective: '활동 중 위험할 뻔했던 순간을 떠올려 무엇이 위험했는지 말하고, 그 일을 막을 안전 규칙 하나를 모둠에 제안할 수 있다.',
        illustration: art('a small group of children sitting in a circle on the grass after a game, one child speaking while others listen, a paper speech bubble with a safety sign', [
          { motif: 'sun', x: 410, y: 52, s: 0.6 }, { motif: 'cloud', x: 110, y: 50 }, { motif: 'hills', y: 214 },
          { motif: 'tree', x: 60, y: 210 }, { motif: 'heart', x: 380, y: 150, s: 0.6 },
          { motif: 'text', x: 240, y: 124, text: '"아까 위험할 뻔했어"', size: 24 },
        ]),
        safety: [SPACE, SIGNAL, '부딪힘 피하기 놀이는 걷기 빠르기로만 해요.', STOP],
        stages: stages(
          {
            teacher: '교사가 먼저 자기 이야기를 들려준다. "선생님이 어제 복도 모퉁이에서 뛰어오는 학생과 부딪힐 뻔했어요. 아무도 다치지 않았지만 선생님은 그 일을 다른 선생님들께 말했어요. 왜 그랬을까요?" 대답을 들은 뒤 "다치지 않았으니 말하지 않아도 될까요?"라고 묻는다. 오늘은 짧은 놀이를 한 뒤 위험할 뻔한 순간을 찾아 말하고, 그 일을 막는 규칙을 만든다고 알린다.',
            student: '선생님 이야기를 듣고, 다치지 않은 일도 말해야 하는지 생각해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 부딪힘 피하기 놀이 하고 위험할 뻔한 순간 세기', minutes: 9, tool: 'timer',
              task: '고깔로 만든 좁은 구역 안을 걷기 빠르기로 돌아다니다 신호에 따라 방향을 바꾸는 놀이를 해요. 놀이가 끝나면 부딪힐 뻔한 순간을 세어 적어요.',
              teacher: '"걸으면서 친구와 부딪히지 않게 빈 곳을 찾아 다녀요." 신호(손뼉 한 번 = 방향 바꾸기, 두 번 = 멈추기)를 정한다. 일부러 좁은 구역에서 하므로 부딪힐 뻔한 순간이 생긴다는 것을 미리 알리고, 그 순간을 기억해 두게 한다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '부딪힘 피하기 놀이를 하기 전에 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['걷기 빠르기로만 움직이기로 했어요', '손뼉 신호의 뜻을 알아요', '두 팔은 몸 옆에 내리고 걸어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '놀이 두 번 동안 부딪힐 뻔한 순간을 세어 적어요.', toolOptions: { fields: [{ label: '첫째 놀이', unit: '번' }, { label: '둘째 놀이', unit: '번' }] }, target: { records: true }, difficulty: 0.15 },
                FREE('놀이가 끝나면 짝에게 내가 부딪힐 뻔한 순간 하나를 "언제, 어디서, 무엇이" 들어간 말로 말한 뒤 표시해요.'),
              ],
            },
            {
              id: 'a2', title: '활동 2. 위험할 뻔한 일을 말할지 고르기', minutes: 8, tool: 'emotion',
              task: '위험할 뻔한 장면을 읽고 어떻게 할지 골라요. 그때 마음의 크기도 눈금에 솔직하게 표시해요.',
              teacher: '"다치지 않았으니 괜찮아요"라는 보기를 고른 학생에게 "다음 사람에게도 같은 일이 생기면요?"라고 묻는다. 눈금 문항은 정답이 없으니 내 마음 그대로 고르면 된다고 말한다.',
              levels: BRANCH,
              items: [
                { prompt: '체육관 장면이에요. 어떻게 할지 골라요.', toolOptions: { mode: 'branch', who: '서연', situation: '서연이가 공을 주우러 가다 바닥 물기에 미끄러질 뻔했어요. 다치지는 않았어요.', ask: '서연이는 어떻게 하면 좋을까요?', motif: 'star', choices: [{ id: 'tell', text: '선생님께 물기가 있는 자리를 알려요', result: '선생님이 바닥을 닦아 다른 친구가 미끄러지지 않아요', mood: '뿌듯함' }, { id: 'quiet', text: '다치지 않았으니 아무 말 하지 않아요', result: '다음 친구가 같은 자리에서 넘어져요', mood: '속상함', why: '다치지 않아도 그 자리는 그대로 위험해요.' }, { id: 'shy', text: '부끄러우니 빨리 자리로 돌아가요', result: '물기는 그대로 남아 있어요', mood: '걱정', why: '미끄러질 뻔한 것은 부끄러운 일이 아니라 알릴 일이에요.' }] }, target: { choice: 'tell' }, levels: { easy: { toolOptions: { choices: [{ id: 'tell', text: '선생님께 물기가 있는 자리를 알려요', result: '선생님이 바닥을 닦아 다른 친구가 미끄러지지 않아요', mood: '뿌듯함' }, { id: 'quiet', text: '다치지 않았으니 아무 말 하지 않아요', result: '다음 친구가 같은 자리에서 넘어져요', mood: '속상함', why: '다치지 않아도 그 자리는 그대로 위험해요.' }] } } }, difficulty: 0.1 },
                { prompt: '운동장 장면이에요. 어떻게 할지 골라요.', toolOptions: { mode: 'branch', who: '도윤', situation: '도윤이가 공 차기 놀이에서 옆 모둠이 찬 공에 맞을 뻔했어요. 두 모둠이 너무 가까이 있었어요.', ask: '도윤이는 어떻게 하면 좋을까요?', motif: 'sun', choices: [{ id: 'move', text: '두 모둠 사이를 넓히자고 선생님께 말해요', result: '모둠 사이가 넓어져 공에 맞을 걱정이 줄어요', mood: '편안함' }, { id: 'kick', text: '그 공을 옆 모둠 쪽으로 세게 차 보내요', result: '옆 모둠 친구가 공에 맞을 뻔해요', mood: '화남', why: '같은 위험을 다른 친구에게 만들 뿐이에요.' }, { id: 'ignore', text: '맞지 않았으니 그냥 놀이를 이어 가요', result: '얼마 뒤 다른 친구가 공에 맞아요', mood: '속상함', why: '모둠이 가까이 있는 것은 그대로예요.' }] }, target: { choice: 'move' }, levels: { easy: { toolOptions: { choices: [{ id: 'move', text: '두 모둠 사이를 넓히자고 선생님께 말해요', result: '모둠 사이가 넓어져 공에 맞을 걱정이 줄어요', mood: '편안함' }, { id: 'ignore', text: '맞지 않았으니 그냥 놀이를 이어 가요', result: '얼마 뒤 다른 친구가 공에 맞아요', mood: '속상함', why: '모둠이 가까이 있는 것은 그대로예요.' }] } } }, difficulty: 0.15 },
                { prompt: '오늘 놀이에서 부딪힐 뻔했을 때 내 마음은 얼마나 놀랐나요? 눈금에 솔직하게 골라요.', toolOptions: { mode: 'scale', situation: '좁은 구역에서 걷다가 친구와 부딪힐 뻔했어요.', feeling: '놀람', steps: 3, scaleLabels: ['조금', '보통', '많이'], ask: '그때 얼마나 놀랐나요?', after: '놀란 만큼 그 순간은 다시 살펴볼 만한 순간이에요.' }, target: { level: 'any' }, difficulty: 0.05 },
              ],
            },
            {
              id: 'a3', title: '활동 3. 위험할 뻔한 일을 막는 규칙 만들기', minutes: 9, tool: 'mindmap',
              task: '위험할 뻔한 순간에 알맞은 새 규칙을 잇고, 좋은 규칙의 조건을 골라 모둠 규칙 하나를 제안해요.',
              teacher: '"규칙은 누구 잘못인지 밝히는 것이 아니라, 다음에 같은 일이 생기지 않게 하는 거예요." 친구 이름을 넣은 규칙을 만드는 모둠이 있으면 행동으로 바꾸어 쓰게 한다. 모둠마다 하나씩 칠판에 붙이고, 다음 시간에 그래프로 모아 본다고 알린다.',
              levels: CARD,
              items: [
                { prompt: '위험할 뻔한 순간에 알맞은 새 규칙 카드를 이어요.', toolOptions: { mode: 'match', topic: '새 규칙', slots: [{ id: 'corner', label: '고깔 구석에서 두 사람이 마주 부딪힐 뻔했어요' }, { id: 'ball', label: '굴러온 공을 줍다 뒤에서 오는 친구와 부딪힐 뻔했어요' }, { id: 'line', label: '줄 맨 앞에서 밀려 넘어질 뻔했어요' }], cards: ['구석에 고깔을 하나 더 세워 들어가지 않게 해요', '공을 주울 때는 손을 들어 "주울게!" 하고 알려요', '줄을 설 때 앞사람과 한 팔 간격을 두어요'] }, target: { match: { corner: '구석에 고깔을 하나 더 세워 들어가지 않게 해요', ball: '공을 주울 때는 손을 들어 "주울게!" 하고 알려요', line: '줄을 설 때 앞사람과 한 팔 간격을 두어요' } }, levels: { easy: { state: { at: { '줄을 설 때 앞사람과 한 팔 간격을 두어요': 2 } } } }, difficulty: 0.2 },
                { prompt: '좋은 안전 규칙의 조건만 골라요.', toolOptions: { mode: 'pick', topic: '좋은 규칙은', cards: ['누구나 지킬 수 있게 짧아요', '무엇을 할지 행동으로 말해요', '같은 일이 다시 생기지 않게 막아요', '그 일을 만든 친구 이름이 들어가요'] }, target: { pick: ['누구나 지킬 수 있게 짧아요', '무엇을 할지 행동으로 말해요', '같은 일이 다시 생기지 않게 막아요'] }, levels: { challenge: { prompt: '좋은 안전 규칙의 조건만 골라요. 그럴듯하지만 틀린 카드가 섞여 있어요.', toolOptions: { cards: ['누구나 지킬 수 있게 짧아요', '무엇을 할지 행동으로 말해요', '같은 일이 다시 생기지 않게 막아요', '그 일을 만든 친구 이름이 들어가요', '어기면 놀이에서 영영 빠지게 해요'] } } }, difficulty: 0.2 },
                FREE('모둠에서 오늘 위험할 뻔한 순간 하나를 골라 그 일을 막는 규칙을 한 문장으로 만들고, 반 전체에 제안한 뒤 표시해요.'),
              ],
            },
          ],
          {
            teacher: '모둠이 제안한 규칙을 하나씩 읽고 "이 규칙이 있었다면 아까 그 순간은 어떻게 되었을까요?"라고 묻는다. 처음 질문 "다치지 않았으니 말하지 않아도 될까요?"로 돌아가 학생 말로 답하게 한다. 출구 2번을 틀린 학생에게는 활동 2의 서연이 장면에서 다음 친구에게 생긴 일을 다시 떠올리게 한다. 손목·발목을 돌리며 마친다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '새 규칙', slots: [{ id: 'door', label: '체육관 문을 열다 들어오는 친구와 부딪힐 뻔했어요' }, { id: 'rope', label: '줄넘기 줄이 옆 친구 얼굴에 닿을 뻔했어요' }], cards: ['문은 천천히 열고 문 앞에서 한 번 멈춰요', '줄넘기는 두 팔 벌린 거리 밖에서 해요'] }, prompt: '새로 위험할 뻔한 순간에 알맞은 규칙을 이어요.', target: { match: { door: '문은 천천히 열고 문 앞에서 한 번 멈춰요', rope: '줄넘기는 두 팔 벌린 거리 밖에서 해요' } }, difficulty: 0.2 },
              { type: 'choice', prompt: '"위험할 뻔한 일은 다치지 않았으니 말하지 않아도 된다"는 말은?', options: ['맞아요', '틀려요. 알려야 같은 일이 다시 생기지 않아요'], answer: 1, difficulty: 0.15, explain: '다치지 않은 일도 그 자리와 까닭은 그대로 남아 있어요. 말해야 막을 수 있어요.' },
              MOOD('위험할 뻔한 순간을 이야기해 본 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '위험할 뻔했어요',
          items: [
            { type: 'table', prompt: '오늘 위험할 뻔한 순간을 쓰세요.', columns: ['언제', '어디서', '무엇이 위험했나요?'], cells: [['', '', '']] },
            { type: 'short', prompt: '그 일을 막을 안전 규칙을 한 문장으로 쓰세요.' },
            { type: 'check', prompt: '내가 쓴 규칙에 들어 있는 것에 ✓ 하세요.', options: ['짧아요', '행동으로 말해요', '같은 일을 막아요'] },
            { type: 'choice', prompt: '바닥 물기에 미끄러질 뻔했지만 다치지 않았어요. 알맞은 행동에 ○ 하세요.', options: ['선생님께 자리를 알려요', '아무 말 하지 않아요', '빨리 자리로 돌아가요'], answer: '선생님께 자리를 알려요' },
            { type: 'short', prompt: '다치지 않은 일도 말해야 하는 까닭을 쓰세요.' },
          ],
          easy: {
            note: '"언제, 어디서, 무엇이"를 넣어 말하면 돼요.',
            items: [
              { type: 'choice', prompt: '위험할 뻔한 일은?', options: ['선생님께 말해요', '숨겨요'], answer: '선생님께 말해요' },
              { type: 'short', prompt: '오늘 부딪힐 뻔한 횟수를 쓰세요.' },
              { type: 'draw', prompt: '위험할 뻔한 순간을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '장면마다 보기가 두 개로 줄고, 카드 한 장이 미리 놓여 있어요. 규칙은 모둠 친구의 말을 듣고 골라도 돼요.',
          base: '보기 세 개 가운데 고르고, 위험할 뻔한 순간에 맞는 규칙을 이어요.',
          challenge: '보기의 결과는 고른 뒤에만 보이고, 좋은 규칙 고르기에 함정 카드가 섞여 있어요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 위험할 뻔한 일은 다치지 않았으니 말하지 않아도 된다고 여긴다 → 교사가 먼저 자기 이야기를 들려주고, 서연이 장면에서 다음 친구에게 생긴 일을 보게 한다. ② 위험할 뻔한 일을 말하면 친구가 혼날까 봐 숨긴다 → 규칙은 사람 탓이 아니라 행동과 자리를 고치는 것이라고 말한다. ③ 규칙을 "조심하자"처럼 막연하게 쓴다 → "무엇을 어떻게"가 들어간 행동 문장으로 바꾸게 한다. 마음 눈금은 정답이 없는 자기 돌아보기다.',
      }),
      // ───────────────────────── 27 ─────────────────────────
      L(27, {
        title: '위험할 뻔한 일 기록을 그래프로 모아 반 안전 규칙 고르기',
        objective: '반이 모은 위험할 뻔한 일 기록을 막대그래프로 나타내 가장 많은 일을 찾고, 그 일을 막는 규칙을 골라 지키며 다시 활동할 수 있다.',
        illustration: art('children gathered around a large paper bar chart on the gym wall, sticking small paper notes into columns, with a rule card at the top', [
          { motif: 'star', x: 410, y: 58, s: 0.7 }, { motif: 'house', x: 80, y: 196, s: 0.8 }, { motif: 'hills', y: 220 },
          { motif: 'pencil', x: 380, y: 196, s: 0.8 }, { motif: 'cloud', x: 120, y: 50 },
          { motif: 'text', x: 240, y: 124, text: '가장 많은 일부터 막아요', size: 24 },
        ]),
        safety: [SPACE, SIGNAL, '부딪힘 피하기 놀이는 걷기 빠르기로만 해요.', STOP],
        stages: stages(
          {
            teacher: '지난 시간 모둠마다 붙인 규칙 카드와, 한 주 동안 체육 시간마다 모은 "위험할 뻔한 일" 쪽지를 보여 준다. "규칙이 다섯 개나 생겼어요. 모두 한꺼번에 지킬 수 있을까요? 무엇부터 정하면 좋을까요?" 가장 많이 생긴 일부터 막자는 생각이 나오면, 오늘은 쪽지를 그래프로 모아 반 규칙 하나를 고른다고 알린다. 그래프의 수는 반 기록 대신 쓰는 예시라고 말해 두고, 실제 반 쪽지 수로 바꾸어 써도 된다.',
            student: '규칙 카드 다섯 개를 보고, 무엇부터 지키면 좋을지 생각해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 위험할 뻔한 일 그래프 그리고 읽기', minutes: 9, tool: 'chart',
              task: '위험할 뻔한 일을 종류별로 센 표를 보고 막대그래프를 완성한 뒤, 가장 많은 일과 두 막대의 차이를 읽어요.',
              teacher: '"표의 수만큼 막대를 올려요. 눈금 한 칸이 한 번이에요." 막대를 다 그린 뒤 "가장 긴 막대는 무엇인가요? 그럼 반 규칙은 무엇을 막는 것이어야 할까요?"라고 잇는다.',
              levels: { easy: { showValues: true }, base: {}, challenge: {} },
              items: [
                { prompt: '위험할 뻔한 일을 센 표를 보고 막대그래프를 완성해요.', toolOptions: { type: 'bar', title: '한 주 동안 위험할 뻔한 일', unit: '번', xLabel: '일', yLabel: '횟수', max: 10, scale: 1, data: [['부딪힐 뻔함', 9], ['미끄러질 뻔함', 5], ['공에 맞을 뻔함', 7], ['넘어질 뻔함', 3]], given: [0] }, target: { build: true }, levels: { easy: { toolOptions: { given: [0, 1] } } }, difficulty: 0.15 },
                { prompt: '그래프에서 가장 많이 생긴 일을 골라요.', toolOptions: { type: 'bar', mode: 'read', title: '한 주 동안 위험할 뻔한 일', unit: '번', xLabel: '일', yLabel: '횟수', max: 10, scale: 1, data: [['부딪힐 뻔함', 9], ['미끄러질 뻔함', 5], ['공에 맞을 뻔함', 7], ['넘어질 뻔함', 3]], question: '가장 많이 생긴 일은?', choices: ['부딪힐 뻔함', '미끄러질 뻔함', '공에 맞을 뻔함', '넘어질 뻔함'] }, target: { pick: 0 }, difficulty: 0.1 },
                { prompt: '부딪힐 뻔한 일은 넘어질 뻔한 일보다 몇 번 더 많은지 써요.', toolOptions: { type: 'bar', mode: 'read', title: '한 주 동안 위험할 뻔한 일', unit: '번', xLabel: '일', yLabel: '횟수', max: 10, scale: 1, data: [['부딪힐 뻔함', 9], ['미끄러질 뻔함', 5], ['공에 맞을 뻔함', 7], ['넘어질 뻔함', 3]], question: '두 막대의 차이는 몇 번인가요?' }, target: { value: 6 }, difficulty: 0.2 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 가장 많은 일을 막는 규칙 고르기', minutes: 7, tool: 'mindmap',
              task: '위험할 뻔한 일마다 막는 규칙을 잇고, 반 규칙을 정하는 차례를 세워요.',
              teacher: '"부딪힐 뻔한 일이 가장 많았으니, 반 규칙 하나를 고른다면 무엇일까요?" 모든 규칙을 한꺼번에 정하자는 학생에게 지킬 것이 많으면 하나도 제대로 지키기 어렵다고 말한다.',
              levels: CARD,
              items: [
                { prompt: '위험할 뻔한 일에 그 일을 막는 규칙 카드를 이어요.', toolOptions: { mode: 'match', topic: '이것을 막아요', slots: [{ id: 'bump', label: '부딪힐 뻔함' }, { id: 'slip', label: '미끄러질 뻔함' }, { id: 'hit', label: '공에 맞을 뻔함' }], cards: ['움직일 때 고개를 들어 앞과 옆을 봐요', '활동 전에 바닥 물기를 닦아요', '모둠 사이를 열 걸음 넘게 떨어뜨려요'] }, target: { match: { bump: '움직일 때 고개를 들어 앞과 옆을 봐요', slip: '활동 전에 바닥 물기를 닦아요', hit: '모둠 사이를 열 걸음 넘게 떨어뜨려요' } }, levels: { easy: { state: { at: { '활동 전에 바닥 물기를 닦아요': 1 } } } }, difficulty: 0.15 },
                { prompt: '반 안전 규칙을 정하는 차례대로 카드를 놓아요.', toolOptions: { mode: 'order', cards: ['그 일을 막는 규칙을 하나 골라요', '위험할 뻔한 일을 종류별로 세어요', '규칙을 지키며 다시 활동해 봐요', '가장 많이 생긴 일을 찾아요'] }, target: { order: ['위험할 뻔한 일을 종류별로 세어요', '가장 많이 생긴 일을 찾아요', '그 일을 막는 규칙을 하나 골라요', '규칙을 지키며 다시 활동해 봐요'] }, levels: { easy: { state: { at: { '위험할 뻔한 일을 종류별로 세어요': 0 } } } }, difficulty: 0.2 },
                { prompt: '그래프로 모아서 규칙을 고르면 좋은 점만 골라요.', toolOptions: { mode: 'pick', topic: '그래프로 모으면', cards: ['가장 자주 생기는 위험을 한눈에 봐요', '무엇부터 막을지 정하기 쉬워요', '규칙을 지킨 뒤 줄었는지 견주어 볼 수 있어요', '누가 위험하게 했는지 알 수 있어요'] }, target: { pick: ['가장 자주 생기는 위험을 한눈에 봐요', '무엇부터 막을지 정하기 쉬워요', '규칙을 지킨 뒤 줄었는지 견주어 볼 수 있어요'] }, difficulty: 0.2,
                  conclude: '위험할 뻔한 일을 모아 세면 가장 먼저 막을 일이 보이고, 규칙을 지킨 뒤 줄었는지도 견줄 수 있어요.' },
              ],
            },
            {
              id: 'a3', title: '활동 3. 고른 규칙을 지키며 다시 놀이하기', minutes: 10, tool: 'timer',
              task: '반 규칙("움직일 때 고개를 들어 앞과 옆을 봐요")을 지키며 지난 시간의 부딪힘 피하기 놀이를 다시 해요. 부딪힐 뻔한 순간을 세어 지난번 기록과 견주어요.',
              teacher: '"지난번과 같은 구역, 같은 시간이에요. 바뀐 것은 규칙 하나뿐이에요." 규칙을 칠판 한가운데 크게 써 둔다. 기록이 줄지 않은 학생에게는 규칙을 언제 잊었는지 떠올리게 하고, 규칙이 소용없다고 결론 내리지 않게 한다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '다시 놀이하기 전에 반 규칙과 함께 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['반 규칙을 소리 내어 읽었어요', '지난번과 같은 구역인지 확인했어요', '걷기 빠르기로만 움직여요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '지난번 부딪힐 뻔한 횟수와 오늘 반 규칙을 지키며 놀이한 뒤의 횟수를 적어요.', toolOptions: { fields: [{ label: '지난번(규칙 전)', unit: '번' }, { label: '오늘(규칙 지키며)', unit: '번' }] }, target: { records: true }, levels: { challenge: { toolOptions: { fields: [{ label: '지난번(규칙 전)', unit: '번' }, { label: '오늘(규칙 지키며)', unit: '번' }, { label: '줄어든 횟수(늘었으면 0)', unit: '번' }] } } }, difficulty: 0.15 },
                { prompt: '놀이를 마치고 해낸 것을 점검 목록에 표시해요.', target: { selfCheck: ['움직일 때 고개를 들고 앞과 옆을 보았어요', '부딪힐 뻔한 순간을 세었어요', '지난번 기록과 견주어 보았어요'] }, difficulty: 0.1 },
                FREE('짝과 기록을 견주어 보고, 규칙을 잊은 순간이 있었다면 언제였는지 서로 말한 뒤 표시해요.'),
              ],
            },
          ],
          {
            teacher: '"규칙을 지킨 뒤 부딪힐 뻔한 횟수가 줄어든 사람?" 손을 들게 하고, 줄지 않은 학생의 이야기도 듣는다. 다음 주에도 같은 방법으로 세어 보고 규칙을 바꿀지 정하자고 말한다. 출구 1번을 틀린 학생에게는 가장 긴 막대부터 찾게 한다. 반 규칙 카드를 체육관 문에 붙이며 마친다.',
            exitTicket: [
              { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '옆 반이 한 주 동안 모은 위험할 뻔한 일', unit: '번', xLabel: '일', yLabel: '횟수', max: 10, scale: 1, data: [['부딪힐 뻔함', 4], ['미끄러질 뻔함', 8], ['공에 맞을 뻔함', 2]], question: '옆 반이 가장 먼저 막아야 할 일은?', choices: ['부딪힐 뻔함', '미끄러질 뻔함', '공에 맞을 뻔함'] }, prompt: '옆 반 그래프를 읽고 가장 먼저 막을 일을 골라요.', target: { pick: 1 }, difficulty: 0.15 },
              { type: 'choice', prompt: '옆 반 그래프에 맞게 반 규칙을 하나 고른다면?', options: ['활동 전에 바닥 물기를 닦아요', '공은 굴려서만 보내요', '모둠 사이를 넓혀요'], answer: 0, difficulty: 0.2, explain: '옆 반은 미끄러질 뻔한 일이 가장 많았으니 바닥 물기를 막는 규칙이 먼저예요.' },
              MOOD('그래프로 반 규칙을 골라 지켜 본 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '위험할 뻔한 일 그래프',
          items: [
            { type: 'figure', prompt: '표를 보고 막대그래프를 그리세요.', tool: 'chart', options: { type: 'bar', title: '한 주 동안 위험할 뻔한 일', unit: '번', xLabel: '일', yLabel: '횟수', max: 10, scale: 1, data: [['부딪힐 뻔함', 9], ['미끄러질 뻔함', 5], ['공에 맞을 뻔함', 7], ['넘어질 뻔함', 3]], given: [] }, figures: [{ state: {} }] },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '가장 많이 생긴 일은 ___이에요.', answer: '부딪힐 뻔함' },
            { type: 'table', prompt: '반 규칙을 지키기 전과 뒤의 기록을 쓰세요.', columns: ['때', '부딪힐 뻔한 횟수'], cells: [['규칙 전', ''], ['규칙 지키며', '']] },
            { type: 'short', prompt: '우리 반이 고른 규칙을 쓰고, 그 규칙을 고른 까닭을 쓰세요.' },
          ],
          easy: {
            note: '가장 긴 막대가 가장 많이 생긴 일이에요.',
            items: [
              { type: 'choice', prompt: '막대가 가장 긴 일을 먼저 막아요. 맞나요?', options: ['맞아요', '아니에요'], answer: '맞아요' },
              { type: 'short', prompt: '오늘 부딪힐 뻔한 횟수를 쓰세요.' },
              { type: 'draw', prompt: '우리 반 규칙을 지키는 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '그래프에 막대 두 개가 미리 그려져 있고, 값이 보여요. 카드 한 장이 미리 놓여 있어요.',
          base: '그래프를 완성해 읽고, 규칙을 정하는 차례를 세워요.',
          challenge: '규칙 전후 기록에서 줄어든 횟수를 셈해 적어요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 위험할 뻔한 일은 말하지 않아도 된다고 여긴다 → 모은 쪽지가 있어야 그래프와 규칙이 생긴다는 것을 보여 준다. ② 규칙을 지켰는데 기록이 줄지 않으면 규칙이 소용없다고 여긴다 → 규칙을 잊은 순간을 찾게 하고, 한 번 더 세어 보자고 한다. ③ 쪽지에 친구 이름을 쓴다 → 일과 자리만 쓰게 한다. 그래프 수는 예시이며 반 실제 기록으로 바꾸어 쓴다.',
      }),
      // ───────────────────────── 28 ─────────────────────────
      L(28, {
        title: '학교 안전 지도에 조심할 곳 표시하고 안전 활동 돌아보기',
        objective: '학교 지도에 위험할 뻔한 일이 생긴 곳을 표시하고, 장소·날씨·점검·알리기에서 배운 수칙을 활동 전·중·뒤로 나누어 말할 수 있다.',
        illustration: art('a paper school map with a gym, a field, a playground and a hallway corner, small warning flags pinned on it, children walking along the map route', [
          { motif: 'sun', x: 410, y: 52, s: 0.6 }, { motif: 'house', x: 90, y: 196, s: 0.8 }, { motif: 'hills', y: 216 },
          { motif: 'tree', x: 430, y: 212, s: 0.8 }, { motif: 'flower', x: 200, y: 220 },
          { motif: 'text', x: 240, y: 124, text: '우리 학교 안전 지도', size: 26 },
        ]),
        safety: [OUT, SIGNAL, '안전 지도 따라 걷기는 정해진 길로만 걷고, 다른 반 수업 중인 곳에서는 조용히 지나가요.'],
        stages: stages(
          {
            teacher: '학교 칸 지도를 크게 띄운다. "지금까지 체육관·운동장·놀이터·물가·산길에서 안전을 배웠어요. 우리 학교에서 위험할 뻔한 일이 가장 자주 생기는 곳은 어디일까요?" 복도 모퉁이·체육관 문 앞·운동장 배수구 같은 대답을 받는다. 오늘은 그곳을 지도에 표시해 우리 학교 안전 지도를 만들고, 배운 수칙을 활동 전·중·뒤로 묶어 본다고 알린다.',
            student: '우리 학교에서 위험할 뻔한 일이 자주 생기는 곳을 하나 떠올려 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 학교 지도에 조심할 곳 표시하기', minutes: 8, tool: 'map',
              task: '반 친구들이 쪽지에 적은 위험할 뻔한 곳을 학교 지도에 핀으로 꽂아요.',
              teacher: '"쪽지에는 기준 장소와 방향이 적혀 있어요. 기준 장소부터 찾아요." 지도의 북쪽 화살표가 위를 가리키는지 먼저 확인한다. 꽂은 곳을 실제 학교에서 어디인지 말로 설명하게 한다.',
              levels: { easy: { readout: true }, base: {}, challenge: {} },
              items: [
                { prompt: '쪽지: "체육관 문에서 북쪽으로 한 칸, 복도 모퉁이에서 부딪힐 뻔했어요." 그 자리에 핀을 꽂아요.', toolOptions: { title: '우리 학교', grid: [6, 4], places: [{ name: '체육관', icon: 'house', at: [0, 2] }, { name: '본관', icon: 'school', at: [2, 0] }, { name: '놀이터', icon: 'park', at: [5, 1], legend: '놀이터' }, { name: '운동장', icon: 'field', at: [3, 3], legend: '운동장' }] }, target: { from: '체육관', dir: '북', steps: 1 }, difficulty: 0.15,
                  hints: ['쪽지에 적힌 기준 장소를 지도에서 먼저 찾아요.', '지도 위쪽이 북쪽이에요. 기준 장소에서 그쪽으로 한 칸씩 세어요.', '체육관 칸에서 위로 한 칸 올라간 칸이에요.'] },
                { prompt: '쪽지: "운동장에서 동쪽으로 두 칸, 배수구 앞에서 미끄러질 뻔했어요." 핀을 꽂아요.', toolOptions: { title: '우리 학교', grid: [6, 4], places: [{ name: '체육관', icon: 'house', at: [0, 2] }, { name: '본관', icon: 'school', at: [2, 0] }, { name: '놀이터', icon: 'park', at: [5, 1], legend: '놀이터' }, { name: '운동장', icon: 'field', at: [3, 3], legend: '운동장' }] }, target: { from: '운동장', dir: '동', steps: 2 }, levels: { challenge: { prompt: '쪽지: "운동장에서 북동쪽으로 두 칸, 그네 옆에서 부딪힐 뻔했어요." 핀을 꽂아요.', target: { from: '운동장', dir: '북동', steps: 2 } } }, difficulty: 0.2,
                  hints: ['쪽지에 적힌 기준 장소를 먼저 찾고, 방향을 확인해요.', '동쪽은 오른쪽이에요. 두 방위를 섞은 방향은 대각선으로 한 칸씩 가요.', '기준 칸에서 말한 방향으로 말한 칸 수만큼 옮긴 곳에 핀을 꽂아요.'] },
                { prompt: '쪽지: "본관에서 남쪽으로 두 칸, 화단 돌에 걸려 넘어질 뻔했어요." 핀을 꽂아요.', toolOptions: { title: '우리 학교', grid: [6, 4], places: [{ name: '체육관', icon: 'house', at: [0, 2] }, { name: '본관', icon: 'school', at: [2, 0] }, { name: '놀이터', icon: 'park', at: [5, 1], legend: '놀이터' }, { name: '운동장', icon: 'field', at: [3, 3], legend: '운동장' }] }, target: { from: '본관', dir: '남', steps: 2 }, difficulty: 0.15,
                  hints: ['쪽지의 기준 장소를 지도에서 찾아요.', '남쪽은 지도의 아래쪽이에요.', '본관 칸에서 아래로 두 칸 내려간 칸이에요.'],
                  conclude: '위험할 뻔한 곳을 지도에 모으면 우리 학교에서 조심할 곳이 한눈에 보여요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 배운 수칙을 활동 전·중·뒤로 묶기', minutes: 8, tool: 'mindmap',
              task: '지금까지 배운 안전 수칙 카드를 활동 전·활동 중·활동 뒤에 할 일로 나누고, 상황에 맞는 수칙을 이어요.',
              teacher: '"이 수칙은 활동을 시작하기 전에 하나요, 하는 동안 하나요, 끝난 뒤에 하나요?" 위험할 뻔한 일을 말하는 것을 활동 중에 넣은 학생에게, 놀이를 멈추지 않고 말할 수 있는지 묻고 끝난 뒤 모여서 말한다는 것을 짚는다. 다칠 일이 있으면 바로 멈추고 알리는 것은 언제든 먼저라고 덧붙인다.',
              levels: CARD,
              items: [
                { prompt: '안전 수칙 카드를 활동 전·활동 중·활동 뒤에 할 일로 나누어요.', toolOptions: { topic: '언제 할까?', slots: ['활동 전', '활동 중', '활동 뒤'], cards: ['날씨를 보고 활동할 곳을 정해요', '바닥과 기구를 차례로 살펴요', '정한 수칙을 끝까지 지켜요', '쉬는 시간마다 물을 마셔요', '모여 앉아 위험할 뻔한 일을 말해요'] }, target: { sort: { '활동 전': ['날씨를 보고 활동할 곳을 정해요', '바닥과 기구를 차례로 살펴요'], '활동 중': ['정한 수칙을 끝까지 지켜요', '쉬는 시간마다 물을 마셔요'], '활동 뒤': ['모여 앉아 위험할 뻔한 일을 말해요'] } }, levels: { easy: { state: { at: { '바닥과 기구를 차례로 살펴요': 0 } } } }, difficulty: 0.2,
                  hints: ['카드의 일을 하려면 놀이가 아직 시작하지 않았어야 하는지, 하고 있어야 하는지, 끝났어야 하는지 생각해요.', '살피고 정하는 일은 움직이기 전에, 지키고 쉬는 일은 움직이는 동안에 해요.', '날씨·살피기는 전, 수칙 지키기·물 마시기는 중, 위험할 뻔한 일 말하기는 뒤예요.'] },
                { prompt: '상황에 알맞은 수칙 카드를 이어요.', toolOptions: { mode: 'match', topic: '이럴 때는', slots: [{ id: 'rain', label: '비가 그친 다음 날 운동장 체육' }, { id: 'new', label: '처음 꺼낸 체육관 뜀틀' }, { id: 'stream', label: '계곡 체험학습' }, { id: 'near', label: '부딪힐 뻔했지만 아무도 안 다쳤어요' }], cards: ['물웅덩이를 피해 달릴 길을 정해요', '흔들리거나 찢어진 곳이 없는지 살펴 알려요', '구명조끼를 입고 어른이 지켜보는 곳에만 들어가요', '끝난 뒤 그 순간을 말하고 규칙을 제안해요'] }, target: { match: { rain: '물웅덩이를 피해 달릴 길을 정해요', new: '흔들리거나 찢어진 곳이 없는지 살펴 알려요', stream: '구명조끼를 입고 어른이 지켜보는 곳에만 들어가요', near: '끝난 뒤 그 순간을 말하고 규칙을 제안해요' } }, levels: { easy: { state: { at: { '물웅덩이를 피해 달릴 길을 정해요': 0 } } } }, difficulty: 0.2 },
                { prompt: '안전 활동에서 배운 생각으로 알맞은 것만 골라요.', toolOptions: { mode: 'pick', topic: '안전에서 배운 것', cards: ['장소와 날씨가 바뀌면 수칙도 바뀌어요', '다친 적이 없어도 매번 살펴요', '위험할 뻔한 일도 말해야 막을 수 있어요', '한 번 정한 수칙은 어디서나 똑같아요'] }, target: { pick: ['장소와 날씨가 바뀌면 수칙도 바뀌어요', '다친 적이 없어도 매번 살펴요', '위험할 뻔한 일도 말해야 막을 수 있어요'] }, difficulty: 0.2,
                  conclude: '안전은 활동 전에 살피고, 하는 동안 지키고, 끝난 뒤 돌아보는 세 단계로 이어져요.' },
              ],
            },
            {
              id: 'a3', title: '활동 3. 안전 지도 따라 학교 둘러보기', minutes: 10, tool: 'timer',
              task: '모둠별로 안전 지도에 꽂은 곳 가운데 두 곳을 정해 걸어가 실제로 살펴보고, 그곳에 붙일 안전 문구를 정해요.',
              teacher: '"지도에 꽂은 곳이 실제로 어떤지 눈으로 확인해요." 교사가 모둠마다 갈 곳 두 곳을 정해 주고, 정해진 길로 걸어서 다녀오게 한다. 7분 뒤 모두 체육관(또는 운동장)으로 돌아와 모둠마다 문구 하나를 발표한다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '안전 지도 따라 걷기 전에 모둠과 약속한 것을 눌러 표시해요.', toolOptions: { safety: ['정해진 길로만 걸어요', '모둠과 떨어지지 않아요', '7분 뒤에 돌아와요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '둘러본 곳의 수와 그 가운데 지도와 같이 조심할 것이 있었던 곳의 수를 적어요.', toolOptions: { fields: [{ label: '둘러본 곳', unit: '곳', max: 2 }, { label: '조심할 것이 있었던 곳', unit: '곳', max: 2 }] }, target: { records: true }, difficulty: 0.15 },
                FREE('둘러본 곳 하나에 붙일 안전 문구를 모둠과 한 문장으로 만들어 반 전체에 발표한 뒤 표시해요.'),
              ],
            },
          ],
          {
            teacher: '모둠의 안전 문구를 지도 옆에 붙이고 "다음 단원에서 새로운 곳에서 활동할 때도 쓸 수 있는 수칙은 무엇인가요?"라고 묻는다. 활동 전·중·뒤 세 단계를 학생 말로 다시 말하게 한다. 출구 1번을 틀린 학생에게는 쪽지의 기준 장소부터 찾게 한다. 다음 시간부터는 어려워 보이는 동작에 자신 있게 도전하는 활동을 한다고 알리고 마친다.',
            exitTicket: [
              { type: 'tool', tool: 'map', options: { title: '우리 학교', grid: [6, 4], places: [{ name: '체육관', icon: 'house', at: [0, 2] }, { name: '본관', icon: 'school', at: [2, 0] }, { name: '놀이터', icon: 'park', at: [5, 1], legend: '놀이터' }, { name: '운동장', icon: 'field', at: [3, 3], legend: '운동장' }] }, prompt: '쪽지: "놀이터에서 남쪽으로 두 칸, 철봉 아래 패인 곳에서 넘어질 뻔했어요." 핀을 꽂아요.', target: { from: '놀이터', dir: '남', steps: 2 }, difficulty: 0.15 },
              { type: 'choice', prompt: '활동이 끝난 뒤에 할 일로 알맞은 것은?', options: ['바닥과 기구를 처음 살펴요', '위험할 뻔한 일을 말하고 규칙을 제안해요', '날씨를 보고 활동할 곳을 정해요'], answer: 1, difficulty: 0.15, explain: '살피기와 날씨 보기는 활동 전에, 위험할 뻔한 일 말하기는 활동 뒤에 해요.' },
              MOOD('안전 활동을 모두 돌아본 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '우리 학교 안전 지도',
          items: [
            { type: 'draw', prompt: '우리 학교를 간단히 그리고, 조심할 곳 세 곳에 ✕ 하세요.' },
            { type: 'table', prompt: '배운 수칙을 활동 전·중·뒤로 하나씩 쓰세요.', columns: ['때', '할 일'], cells: [['활동 전', ''], ['활동 중', ''], ['활동 뒤', '']] },
            { type: 'choice', prompt: '비가 그친 다음 날 운동장 체육에서 지킬 수칙에 ○ 하세요.', options: ['물웅덩이를 피해 달릴 길을 정해요', '구명조끼를 입어요', '그네 사슬을 살펴요'], answer: '물웅덩이를 피해 달릴 길을 정해요' },
            { type: 'short', prompt: '우리 모둠이 만든 안전 문구를 쓰세요.' },
            { type: 'short', prompt: '안전 활동에서 가장 기억에 남는 수칙과 그 까닭을 쓰세요.' },
          ],
          easy: {
            note: '전에는 살피고, 하는 동안 지키고, 끝나면 돌아봐요.',
            items: [
              { type: 'choice', prompt: '활동 전에 할 일은?', options: ['바닥과 기구 살피기', '위험할 뻔한 일 말하기'], answer: '바닥과 기구 살피기' },
              { type: 'short', prompt: '우리 학교에서 조심할 곳 하나를 쓰세요.' },
              { type: 'draw', prompt: '안전 문구를 넣은 표지판을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '지도에 핀 자리 글자가 보이고, 카드 한 장이 미리 놓여 있어요. 둘러보기는 한 곳만 가도 돼요.',
          base: '쪽지대로 핀을 꽂고, 수칙을 활동 전·중·뒤로 나누어요.',
          challenge: '두 방위를 섞은 방향으로 핀을 꽂아요. 모둠 문구가 활동 전·중·뒤 가운데 언제의 수칙인지 함께 말해요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 안전 수칙은 어디서나 똑같다고 여긴다 → 상황 잇기에서 장소·날씨마다 다른 수칙을 견주게 한다. ② 위험할 뻔한 일 말하기를 놀이 중에 하려 한다 → 다칠 일은 바로 멈추고 알리되, 위험할 뻔한 일 돌아보기는 끝난 뒤 모여서 한다고 정리한다. ③ 지도 칸과 실제 장소를 잇지 못한다 → 둘러보기에서 지도와 실제를 견주게 한다. 지도 장소는 학교에 맞게 바꾸어 쓴다.',
      }),
      // ───────────────────────── 29 ─────────────────────────
      L(29, {
        title: '어려워 보이는 줄 넘기 동작 고르고 쉬운 단계로 나누기',
        objective: '긴 줄과 고무줄 넘기 동작 가운데 어려워 보이는 것을 골라 그 까닭을 말하고, 높이나 움직임을 낮춘 쉬운 단계부터 차례로 나눌 수 있다.',
        illustration: art('children trying a stretched elastic rope at ankle height while two friends hold it, and a long rope lying still on the floor beside them, with paper steps showing low to high', [
          { motif: 'sun', x: 410, y: 52, s: 0.7 }, { motif: 'cloud', x: 110, y: 48 }, { motif: 'hills', y: 214 },
          { motif: 'star', x: 330, y: 140, s: 0.7 }, { motif: 'flower', x: 70, y: 214 },
          { motif: 'text', x: 240, y: 124, text: '낮은 단계부터 한 칸씩', size: 24 },
        ]),
        safety: [ROPE, SPACE, '고무줄을 잡은 친구는 줄을 손에 감지 않고, 걸리면 바로 놓아요.', STOP],
        stages: stages(
          {
            teacher: '교사가 돌아가는 긴 줄에 바로 뛰어들다 걸리는 모습을 일부러 보인다. "선생님은 이 동작을 못하는 걸까요?" 학생 대답을 들은 뒤, 바닥에 가만히 놓인 줄을 넘고, 좌우로 흔드는 줄을 넘고, 다시 돌아가는 줄에 들어가 보인다. "한 번에 안 되는 동작은 정말 못하는 동작일까요, 단계가 필요한 동작일까요?" 오늘은 어려워 보이는 동작을 고르고 쉬운 단계로 나누는 날이라고 알린다.',
            student: '선생님이 긴 줄에 걸린 모습을 보고, 선생님이 못하는 것인지 생각해 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 어려워 보이는 동작과 그 까닭 말하기', minutes: 8, tool: 'emotion',
              task: '세 가지 줄 넘기 동작이 해 보기 전에 얼마나 어려워 보이는지 눈금에 솔직하게 고르고, 한 번에 안 되었을 때 어떻게 할지 골라요.',
              teacher: '"어려워 보이는 정도는 사람마다 달라요. 정답이 없으니 내 마음 그대로 골라요." 눈금을 고른 뒤 가장 어려워 보이는 동작과 그 까닭(줄이 움직여서, 높아서, 박자를 맞추기 어려워서)을 짝에게 말하게 한다. "나는 못 해"를 고른 학생에게는 선생님이 처음에 걸렸던 장면을 떠올리게 한다.',
              levels: BRANCH,
              items: [
                { prompt: '돌아가는 긴 줄에 들어가 넘기가 해 보기 전에 얼마나 어려워 보이나요? 솔직하게 골라요.', toolOptions: { mode: 'scale', situation: '친구 둘이 긴 줄을 돌리고 있어요. 줄이 돌아가는 사이에 들어가 한 번 넘고 나와야 해요.', feeling: '걱정', steps: 3, scaleLabels: ['쉬워 보여요', '보통이에요', '어려워 보여요'], ask: '얼마나 어려워 보이나요?', after: '어려워 보이는 까닭을 찾으면 그 부분만 쉽게 바꿀 수 있어요.' }, target: { level: 'any' }, difficulty: 0.05 },
                { prompt: '무릎 높이 고무줄 넘기가 해 보기 전에 얼마나 어려워 보이나요? 솔직하게 골라요.', toolOptions: { mode: 'scale', situation: '친구 둘이 고무줄을 무릎 높이로 잡고 있어요. 두 발을 모아 넘어야 해요.', feeling: '걱정', steps: 3, scaleLabels: ['쉬워 보여요', '보통이에요', '어려워 보여요'], ask: '얼마나 어려워 보이나요?', after: '높이를 낮추면 같은 동작도 해 볼 만해져요.' }, target: { level: 'any' }, difficulty: 0.05 },
                { prompt: '친구의 장면을 읽고 어떻게 할지 골라요.', toolOptions: { mode: 'branch', who: '민지', situation: '민지가 돌아가는 긴 줄에 처음 들어가다 줄에 걸렸어요. 민지는 "나는 줄넘기를 못하나 봐."라고 말해요.', ask: '민지는 어떻게 하면 좋을까요?', motif: 'star', choices: [{ id: 'step', text: '가만히 놓인 줄 넘기부터 다시 해 봐요', result: '민지가 쉬운 단계에서 성공하고 다음 단계로 가요', mood: '뿌듯함' }, { id: 'quit', text: '못하는 동작이니 그만둬요', result: '민지는 다음 시간에도 그 동작이 무서워요', mood: '속상함', why: '한 번에 안 된 것은 단계가 필요하다는 뜻이에요.' }, { id: 'again', text: '똑같은 방법으로 바로 열 번 더 뛰어들어요', result: '같은 곳에서 계속 걸려 더 지쳐요', mood: '짜증', why: '같은 방법을 되풀이하기보다 쉬운 단계로 낮춰 보세요.' }] }, target: { choice: 'step' }, levels: { easy: { toolOptions: { choices: [{ id: 'step', text: '가만히 놓인 줄 넘기부터 다시 해 봐요', result: '민지가 쉬운 단계에서 성공하고 다음 단계로 가요', mood: '뿌듯함' }, { id: 'quit', text: '못하는 동작이니 그만둬요', result: '민지는 다음 시간에도 그 동작이 무서워요', mood: '속상함', why: '한 번에 안 된 것은 단계가 필요하다는 뜻이에요.' }] } } }, difficulty: 0.15,
                  conclude: '한 번에 안 되는 동작은 못하는 동작이 아니라, 쉬운 단계부터 올라가야 하는 동작이에요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 쉬운 단계부터 차례로 나누기', minutes: 8, tool: 'mindmap',
              task: '긴 줄 넘기와 고무줄 넘기의 단계 카드를 쉬운 것부터 차례로 놓고, 어려운 까닭에 맞는 쉬운 단계를 이어요.',
              teacher: '"무엇을 낮추면 쉬워질까요? 높이일까요, 줄의 움직임일까요?" 높이를 한꺼번에 두 칸 올리는 차례를 놓은 학생에게 한 칸씩 올려야 다음 단계가 해 볼 만해진다고 말한다.',
              levels: CARD,
              items: [
                { prompt: '긴 줄 넘기 단계 카드를 쉬운 것부터 차례로 놓아요.', toolOptions: { mode: 'order', cards: ['좌우로 흔드는 줄 넘기', '돌아가는 긴 줄에 들어가 한 번 넘고 나오기', '바닥에 가만히 놓인 줄 넘기'] }, target: { order: ['바닥에 가만히 놓인 줄 넘기', '좌우로 흔드는 줄 넘기', '돌아가는 긴 줄에 들어가 한 번 넘고 나오기'] }, levels: { easy: { state: { at: { '바닥에 가만히 놓인 줄 넘기': 0 } } }, challenge: { prompt: '긴 줄 넘기 단계 카드 네 장을 쉬운 것부터 차례로 놓아요.', toolOptions: { cards: ['좌우로 흔드는 줄 넘기', '돌아가는 긴 줄에 들어가 한 번 넘고 나오기', '바닥에 가만히 놓인 줄 넘기', '돌아가는 긴 줄에서 세 번 이어 넘고 나오기'] }, target: { order: ['바닥에 가만히 놓인 줄 넘기', '좌우로 흔드는 줄 넘기', '돌아가는 긴 줄에 들어가 한 번 넘고 나오기', '돌아가는 긴 줄에서 세 번 이어 넘고 나오기'] } } }, difficulty: 0.15,
                  hints: ['줄이 움직이지 않을수록, 넘는 횟수가 적을수록 쉬워요.', '움직이지 않는 줄 → 조금 움직이는 줄 → 돌아가는 줄 차례로 생각해요.', '바닥 줄, 흔드는 줄, 돌아가는 줄 한 번, 돌아가는 줄 여러 번 차례예요.'] },
                { prompt: '어려워 보이는 까닭에 알맞은 쉬운 단계 카드를 이어요.', toolOptions: { mode: 'match', topic: '이렇게 낮춰요', slots: [{ id: 'high', label: '고무줄이 높아서 걸릴 것 같아요' }, { id: 'move', label: '줄이 움직여서 박자를 못 맞추겠어요' }, { id: 'scary', label: '줄에 맞을까 봐 들어가기 무서워요' }], cards: ['고무줄을 발목 높이로 낮춰 넘어요', '줄 돌리는 박자에 맞춰 줄 밖에서 손뼉을 쳐 봐요', '줄을 돌리는 친구 바로 옆에서 들어가는 자리를 먼저 봐요'] }, target: { match: { high: '고무줄을 발목 높이로 낮춰 넘어요', move: '줄 돌리는 박자에 맞춰 줄 밖에서 손뼉을 쳐 봐요', scary: '줄을 돌리는 친구 바로 옆에서 들어가는 자리를 먼저 봐요' } }, levels: { easy: { state: { at: { '고무줄을 발목 높이로 낮춰 넘어요': 0 } } } }, difficulty: 0.2 },
                { prompt: '쉬운 단계부터 하면 달라지는 것만 골라요.', toolOptions: { mode: 'pick', topic: '쉬운 단계부터 하면', cards: ['성공을 먼저 맛보아 자신감이 생겨요', '몸이 동작의 박자와 높이를 익혀요', '다음 단계에서 무엇이 어려운지 알게 돼요', '처음부터 어려운 단계를 하지 않아도 된 것처럼 기록이 똑같아요'] }, target: { pick: ['성공을 먼저 맛보아 자신감이 생겨요', '몸이 동작의 박자와 높이를 익혀요', '다음 단계에서 무엇이 어려운지 알게 돼요'] }, difficulty: 0.2 },
              ],
            },
            {
              id: 'a3', title: '활동 3. 쉬운 두 단계 직접 해 보기', minutes: 10, tool: 'timer',
              task: '모둠에서 줄을 잡는 사람과 넘는 사람을 번갈아 맡아, 긴 줄과 고무줄의 가장 쉬운 두 단계를 다섯 번씩 해 보고 성공한 횟수를 적어요.',
              teacher: '"오늘은 쉬운 두 단계까지만 해요. 높은 단계는 다음 시간에 올라가요." 고무줄을 잡는 학생은 줄을 손가락에 감지 않고 손바닥에 올려 두어 걸리면 바로 놓이게 한다. 성공 횟수가 적어도 괜찮고, 단계를 낮추어 다시 해도 된다고 말한다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '줄 넘기 단계를 해 보기 전에 모둠과 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['고무줄은 손바닥에 올려 잡았어요', '넘는 사람 둘레에 다른 친구가 없어요', '긴 줄은 낮게, 천천히 흔들기로 했어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '쉬운 두 단계를 다섯 번씩 해 보고 성공한 횟수를 적어요.', toolOptions: { fields: [{ label: '바닥에 놓인 긴 줄 넘기', unit: '번', max: 5 }, { label: '좌우로 흔드는 긴 줄 넘기', unit: '번', max: 5 }, { label: '발목 높이 고무줄 넘기', unit: '번', max: 5 }] }, target: { records: true }, difficulty: 0.15 },
                FREE('모둠에서 줄을 잡는 역할과 넘는 역할을 모두 한 번씩 맡아 보고, 내가 다음에 올라갈 단계를 짝에게 말한 뒤 표시해요.'),
              ],
            },
          ],
          {
            teacher: '"처음에 어려워 보였던 동작이 쉬운 단계를 해 본 뒤에도 똑같이 어려워 보이나요?" 몇 학생에게 듣는다. 다음 시간에는 개인 줄넘기도 같은 방법으로 단계를 나누어 본다고 알린다. 출구 1번을 틀린 학생에게는 줄이 얼마나 움직이는지를 기준으로 다시 놓아 보게 한다. 줄을 정리하며 마친다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'order', cards: ['허리 높이 고무줄 넘기', '발목 높이 고무줄 넘기', '무릎 높이 고무줄 넘기'] }, prompt: '고무줄 넘기 단계를 쉬운 것부터 차례로 놓아요.', target: { order: ['발목 높이 고무줄 넘기', '무릎 높이 고무줄 넘기', '허리 높이 고무줄 넘기'] }, difficulty: 0.1 },
              { type: 'choice', prompt: '"한 번에 되지 않는 동작은 내가 못하는 동작이다"라는 말은?', options: ['맞아요', '틀려요. 쉬운 단계부터 올라가면 할 수 있게 돼요'], answer: 1, difficulty: 0.15, explain: '선생님도 처음엔 걸렸어요. 줄의 움직임과 높이를 낮추면 단계를 밟아 올라갈 수 있어요.' },
              MOOD('어려워 보이는 동작을 쉬운 단계로 나누어 본 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '쉬운 단계부터',
          items: [
            { type: 'short', prompt: '오늘 가장 어려워 보였던 동작과 그 까닭을 쓰세요.' },
            { type: 'table', prompt: '긴 줄 넘기를 쉬운 단계부터 세 단계로 나누어 쓰세요.', columns: ['단계', '동작'], cells: [['1단계', ''], ['2단계', ''], ['3단계', '']] },
            { type: 'table', prompt: '오늘 해 본 단계의 기록을 쓰세요.', columns: ['단계', '성공한 횟수(5번 중)'], cells: [['바닥에 놓인 긴 줄', ''], ['좌우로 흔드는 긴 줄', ''], ['발목 높이 고무줄', '']] },
            { type: 'choice', prompt: '고무줄이 높아 걸릴 것 같을 때 쉬운 단계로 알맞은 것에 ○ 하세요.', options: ['고무줄을 발목 높이로 낮춰요', '눈을 감고 넘어요', '더 높이 올려요'], answer: '고무줄을 발목 높이로 낮춰요' },
            { type: 'short', prompt: '다음 시간에 도전할 단계를 쓰세요.' },
          ],
          easy: {
            note: '줄이 가만히 있을수록, 낮을수록 쉬워요.',
            items: [
              { type: 'choice', prompt: '더 쉬운 단계는?', options: ['바닥에 놓인 줄 넘기', '돌아가는 줄 넘기'], answer: '바닥에 놓인 줄 넘기' },
              { type: 'short', prompt: '오늘 성공한 단계 하나를 쓰세요.' },
              { type: 'draw', prompt: '고무줄을 넘는 내 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '장면의 보기가 두 개로 줄고, 첫 단계 카드가 미리 놓여 있어요. 바닥 줄 넘기만 해도 돼요.',
          base: '세 단계를 차례로 놓고, 쉬운 두 단계를 직접 해 봐요.',
          challenge: '네 단계를 차례로 놓고, 보기의 결과는 고른 뒤에만 보여요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 한 번에 되지 않는 동작은 자기가 못하는 동작이라고 여긴다 → 교사가 일부러 걸리는 모습부터 보이고, 단계를 밟아 다시 해 보인다. ② 어려워 보이는 정도를 친구 눈치를 보고 고른다 → 눈금은 정답이 없다고 거듭 말한다. ③ 높이를 한꺼번에 올린다 → 오늘은 쉬운 두 단계까지만 하고 다음 시간에 한 칸씩 올린다. 고무줄은 굵고 부드러운 것을 쓰고, 잡는 학생이 손에 감지 않게 한다.',
      }),
      // ───────────────────────── 30 ─────────────────────────
      L(30, {
        title: '앞으로 줄넘기를 네 단계로 나누어 해 볼 만한 단계 찾기',
        objective: '앞으로 줄넘기가 어려운 까닭을 박자·팔·발로 나누어 찾고, 줄 없이 뛰기부터 이어 넘기까지 네 단계 가운데 내가 해 볼 만한 단계를 근거와 함께 고를 수 있다.',
        illustration: art('a row of children each with a jump rope showing four steps: jumping without a rope, swinging the rope folded in one hand, jumping over once and stopping, and continuous jumping', [
          { motif: 'sun', x: 410, y: 52, s: 0.7 }, { motif: 'cloud', x: 110, y: 48 }, { motif: 'hills', y: 214 },
          { motif: 'star', x: 300, y: 150, s: 0.6 }, { motif: 'leaf', x: 80, y: 214 },
          { motif: 'text', x: 240, y: 124, text: '내 단계는 어디일까?', size: 24 },
        ]),
        safety: [ROPE, SPACE, SHOE, STOP],
        stages: stages(
          {
            teacher: '"줄넘기를 열 번 이어서 넘을 수 있는 사람?" 손을 든 학생과 들지 않은 학생 모두에게 "줄넘기를 할 때 가장 어려운 것이 무엇인가요?"라고 묻는다. 박자가 안 맞는다, 줄이 발에 걸린다, 팔이 아프다는 대답을 칠판에 박자·발·팔 세 칸으로 나누어 적는다. "어려운 까닭이 다르면 시작할 단계도 다를 수 있어요." 오늘은 앞으로 줄넘기를 네 단계로 나누고 내 단계를 찾는다고 알린다.',
            student: '줄넘기를 할 때 나에게 가장 어려운 것이 박자·발·팔 가운데 무엇인지 골라 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 어려운 까닭에 맞는 단계 잇기', minutes: 8, tool: 'mindmap',
              task: '줄넘기가 어려운 까닭 카드에 알맞은 연습 단계를 잇고, 네 단계를 쉬운 것부터 차례로 놓아요.',
              teacher: '"까닭이 박자라면 줄이 없어도 연습할 수 있을까요?" 줄이 발에 걸리는 까닭에 팔 돌리기 연습을 잇는 학생에게, 발에 걸릴 때는 줄을 넘는 순간만 따로 연습하는 것이 맞다고 짚는다.',
              levels: CARD,
              items: [
                { prompt: '줄넘기가 어려운 까닭에 알맞은 연습 단계 카드를 이어요.', toolOptions: { mode: 'match', topic: '이렇게 연습해요', slots: [{ id: 'beat', label: '줄과 뛰는 박자가 안 맞아요' }, { id: 'arm', label: '팔을 크게 돌려서 금방 지쳐요' }, { id: 'foot', label: '줄이 자꾸 발에 걸려요' }], cards: ['줄 없이 손뼉 박자에 맞춰 제자리 뛰기', '줄을 한 손에 모아 손목으로만 돌리기', '줄을 한 번 넘고 멈추기'] }, target: { match: { beat: '줄 없이 손뼉 박자에 맞춰 제자리 뛰기', arm: '줄을 한 손에 모아 손목으로만 돌리기', foot: '줄을 한 번 넘고 멈추기' } }, levels: { easy: { state: { at: { '줄 없이 손뼉 박자에 맞춰 제자리 뛰기': 0 } } } }, difficulty: 0.2 },
                { prompt: '앞으로 줄넘기 단계 카드를 쉬운 것부터 차례로 놓아요.', toolOptions: { mode: 'order', cards: ['줄을 한 번 넘고 멈추기', '줄 없이 손뼉 박자에 맞춰 제자리 뛰기', '열 번 이어 넘기', '줄을 한 손에 모아 손목으로 돌리며 뛰기'] }, target: { order: ['줄 없이 손뼉 박자에 맞춰 제자리 뛰기', '줄을 한 손에 모아 손목으로 돌리며 뛰기', '줄을 한 번 넘고 멈추기', '열 번 이어 넘기'] }, levels: { easy: { state: { at: { '줄 없이 손뼉 박자에 맞춰 제자리 뛰기': 0, '열 번 이어 넘기': 3 } } } }, difficulty: 0.2,
                  hints: ['줄이 없거나 넘지 않을수록 쉬운 단계예요.', '줄 없이 → 줄을 돌리기만 → 한 번 넘기 → 여러 번 넘기 차례로 생각해요.', '박자 뛰기, 손목 돌리며 뛰기, 한 번 넘고 멈추기, 열 번 이어 넘기 차례예요.'] },
                { prompt: '해 볼 만한 단계를 고르는 좋은 근거만 골라요.', toolOptions: { mode: 'pick', topic: '이 단계를 고른 까닭', cards: ['다섯 번 가운데 서너 번은 성공했어요', '바로 아래 단계는 거의 다 성공했어요', '조금만 더 하면 될 것 같은 부분이 보여요', '친구들이 모두 그 단계를 해서요'] }, target: { pick: ['다섯 번 가운데 서너 번은 성공했어요', '바로 아래 단계는 거의 다 성공했어요', '조금만 더 하면 될 것 같은 부분이 보여요'] }, levels: { challenge: { prompt: '해 볼 만한 단계를 고르는 좋은 근거만 골라요. 그럴듯하지만 틀린 카드가 섞여 있어요.', toolOptions: { cards: ['다섯 번 가운데 서너 번은 성공했어요', '바로 아래 단계는 거의 다 성공했어요', '조금만 더 하면 될 것 같은 부분이 보여요', '친구들이 모두 그 단계를 해서요', '가장 높은 단계가 멋있어 보여서요'] } } }, difficulty: 0.2 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 네 단계를 차례로 해 보고 기록하기', minutes: 14, tool: 'timer',
              task: '네 단계를 쉬운 것부터 다섯 번씩 해 보고 성공한 횟수를 적어요. 한 단계에서 두 번 넘게 실패하면 그 아래 단계를 한 번 더 해요.',
              teacher: '"단계를 낮추는 것은 지는 것이 아니라 내 단계를 찾는 거예요." 짝은 서로의 손목·발을 보고 박자를 손뼉으로 쳐 준다. 줄넘기 길이는 두 발로 줄 가운데를 밟고 손잡이가 겨드랑이까지 오게 맞춘다. 교사는 단계마다 짝이 되는 구역을 정해 두고 돌며 본다.',
              levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
              items: [
                { prompt: '줄넘기를 시작하기 전에 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['줄 길이를 겨드랑이까지 맞췄어요', '둘레 두 팔 거리에 친구가 없어요', '신발 끈을 묶었어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '네 단계를 다섯 번씩 해 보고 성공한 횟수를 적어요.', toolOptions: { fields: [{ label: '1단계 박자 뛰기', unit: '번', max: 5 }, { label: '2단계 손목 돌리며 뛰기', unit: '번', max: 5 }, { label: '3단계 한 번 넘고 멈추기', unit: '번', max: 5 }, { label: '4단계 열 번 이어 넘기', unit: '번', max: 5 }] }, target: { records: 3 }, levels: { challenge: { prompt: '네 단계를 다섯 번씩 모두 해 보고 성공한 횟수를 빠짐없이 적어요.', target: { records: true } } }, difficulty: 0.15 },
                { prompt: '단계를 해 보고 해낸 것을 점검 목록에 표시해요.', target: { selfCheck: ['쉬운 단계부터 차례로 해 보았어요', '실패가 이어지면 아래 단계로 내려가 다시 했어요', '내가 해 볼 만한 단계를 하나 골랐어요'] }, difficulty: 0.1 },
                FREE('짝이 줄넘기를 할 때 손뼉으로 박자를 쳐 주고, 짝이 고른 단계와 그 까닭을 들은 뒤 역할을 바꾸어 표시해요.'),
              ],
            },
            {
              id: 'a3', title: '활동 3. 내 단계를 고른 마음 돌아보기', minutes: 4, tool: 'emotion',
              task: '네 단계를 해 본 뒤, 고른 단계에 도전할 자신이 얼마나 생겼는지 눈금에 솔직하게 표시해요.',
              teacher: '"자신감도 단계처럼 조금씩 올라가요. 오늘의 마음을 그대로 골라요." 고른 단계를 돌아보는 시간이므로 다른 친구의 눈금과 견주지 않게 한다.',
              levels: LV,
              items: [
                { prompt: '쉬운 단계부터 해 보기 전과 견주어, 지금 고른 단계에 도전할 자신이 얼마나 있나요?', toolOptions: { mode: 'scale', situation: '네 단계를 쉬운 것부터 차례로 해 보고, 내가 해 볼 만한 단계를 하나 골랐어요.', feeling: '뿌듯함', steps: 3, scaleLabels: ['조금', '보통', '많이'], ask: '도전할 자신은 얼마나 되나요?', after: '오늘 고른 단계에서 다음 시간에 다시 시작해요.' }, target: { level: 'any' }, difficulty: 0.05 },
                { prompt: '처음에 4단계(열 번 이어 넘기)를 보았을 때 얼마나 어려워 보였는지 떠올려 솔직하게 골라요.', toolOptions: { mode: 'scale', situation: '수업을 시작할 때 열 번 이어 넘기를 처음 보았어요.', feeling: '걱정', steps: 3, scaleLabels: ['쉬워 보였어요', '보통이었어요', '어려워 보였어요'], ask: '그때 얼마나 어려워 보였나요?' }, target: { level: 'any' }, difficulty: 0.05 },
                FREE('짝에게 "나는 ○단계부터 해 볼 거야. 왜냐하면…"으로 고른 단계와 근거를 말한 뒤 표시해요.'),
              ],
            },
          ],
          {
            teacher: '"몇 단계를 골랐나요? 그 단계를 고른 근거는요?" 서너 명에게 듣고, 근거가 "친구가 해서"인 학생에게는 아래 단계 기록을 함께 보며 다시 고르게 한다. 출구 1번을 틀린 학생에게는 줄을 넘는 횟수가 늘어나는 차례를 다시 짚는다. 손목과 발목을 털며 마친다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '이렇게 연습해요', slots: [{ id: 'land', label: '넘고 내려설 때 쿵쿵 소리가 크게 나요' }, { id: 'look', label: '줄을 보느라 고개가 자꾸 숙여져요' }], cards: ['발끝으로 가볍게 내려서는 제자리 뛰기', '앞의 표지를 보며 줄 없이 박자 뛰기'] }, prompt: '새로 찾은 어려운 까닭에 알맞은 연습 단계를 이어요.', target: { match: { land: '발끝으로 가볍게 내려서는 제자리 뛰기', look: '앞의 표지를 보며 줄 없이 박자 뛰기' } }, difficulty: 0.2 },
              { type: 'choice', prompt: '준호는 3단계에서 다섯 번 가운데 한 번만 성공했고, 2단계는 다섯 번 모두 성공했어요. 준호가 다음 시간에 시작하기 알맞은 단계는?', options: ['1단계', '3단계', '4단계'], answer: 1, difficulty: 0.25, explain: '아래 단계는 다 성공했으니, 아직 덜 된 3단계에서 다시 시작하면 해 볼 만해요.' },
              MOOD('줄넘기 단계를 나누어 해 본 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '줄넘기 네 단계',
          items: [
            { type: 'table', prompt: '단계마다 성공한 횟수를 쓰세요.', columns: ['단계', '동작', '성공한 횟수(5번 중)'], cells: [['1단계', '박자 뛰기', ''], ['2단계', '손목 돌리며 뛰기', ''], ['3단계', '한 번 넘고 멈추기', ''], ['4단계', '열 번 이어 넘기', '']] },
            { type: 'choice', prompt: '줄이 자꾸 발에 걸릴 때 알맞은 연습에 ○ 하세요.', options: ['줄을 한 번 넘고 멈추기', '팔을 더 크게 돌리기', '더 빨리 돌리기'], answer: '줄을 한 번 넘고 멈추기' },
            { type: 'short', prompt: '나에게 가장 어려운 것(박자·팔·발)과 그 까닭을 쓰세요.' },
            { type: 'short', prompt: '내가 해 볼 만한 단계와 그 단계를 고른 근거를 쓰세요.' },
          ],
          easy: {
            note: '줄 없이 → 줄 돌리기만 → 한 번 넘기 → 여러 번 넘기!',
            items: [
              { type: 'choice', prompt: '가장 쉬운 단계는?', options: ['줄 없이 박자 뛰기', '열 번 이어 넘기'], answer: '줄 없이 박자 뛰기' },
              { type: 'short', prompt: '오늘 성공한 가장 높은 단계를 쓰세요.' },
              { type: 'draw', prompt: '줄넘기를 하는 내 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '첫 카드가 미리 놓여 있고, 맞는 곳에 놓으면 바로 표시돼요. 기록은 해 본 세 단계까지만 적어도 돼요.',
          base: '네 단계를 차례로 해 보고, 세 단계 이상 기록해 내 단계를 골라요.',
          challenge: '네 단계를 모두 기록하고 시간 재기를 더해요. 근거 고르기에 함정 카드가 섞여 있어요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 한 번에 되지 않는 동작은 못하는 동작이라고 여긴다 → 단계를 낮추어 성공한 기록을 보여 주며 "내 단계를 찾은 것"이라고 말한다. ② 친구들이 하는 단계를 따라 고른다 → 아래 단계 기록을 근거로 다시 고르게 한다. ③ 팔을 어깨부터 크게 돌린다 → 줄을 한 손에 모아 손목만 돌리는 단계를 먼저 하게 한다. 줄 길이는 학생 키에 맞추고, 둘레 두 팔 거리를 지킨다.',
      }),
      // ───────────────────────── 31 ─────────────────────────
      L(31, {
        title: '멀리뛰기 기록을 견주어 쉬운 단계부터 하는 근거 찾기',
        objective: '쉬운 단계부터 연습한 모둠과 바로 도전한 모둠의 멀리뛰기 기록 그래프를 견주어, 쉬운 단계부터 하면 무엇이 달라지는지 근거를 들어 말할 수 있다.',
        illustration: art('children doing a standing long jump onto a sand pit with three paper lines, and a small bar chart on a clipboard beside them', [
          { motif: 'sun', x: 410, y: 52, s: 0.7 }, { motif: 'cloud', x: 120, y: 48 }, { motif: 'hills', y: 214 },
          { motif: 'tree', x: 60, y: 210 }, { motif: 'star', x: 330, y: 150, s: 0.6 },
          { motif: 'text', x: 240, y: 124, text: '근거는 기록에 있어요', size: 24 },
        ]),
        safety: ['모래밭(또는 매트)의 돌과 갈퀴를 치운 뒤 뛰어요.', '앞사람이 모래밭에서 나간 뒤 출발해요.', SHOE, STOP],
        stages: stages(
          {
            teacher: '"지난 두 시간 동안 줄 넘기를 쉬운 단계부터 했지요. 그런데 정말 쉬운 단계부터 하는 게 나을까요? 바로 어려운 것을 여러 번 하는 게 더 빠르지 않을까요?" 두 생각을 모두 칠판에 적는다. "생각만으로는 알 수 없어요. 기록을 보고 견주어 봐요." 오늘은 새 동작인 도움닫기 멀리뛰기를 두 방법으로 연습한 모둠의 기록(예시 자료)을 보고 근거를 찾은 뒤, 우리도 쉬운 단계부터 해 본다고 알린다.',
            student: '쉬운 단계부터 하는 것과 바로 어려운 것을 하는 것 가운데 어느 쪽이 나을지 내 생각을 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 두 모둠의 기록 그래프 견주기', minutes: 9, tool: 'chart',
              task: '쉬운 단계부터 연습한 모둠과 바로 도전한 모둠의 멀리뛰기 착지 성공 그래프를 읽고, 근거가 되는 수를 찾아요.',
              teacher: '"두 모둠은 연습한 시간이 같았어요. 다른 것은 연습 방법뿐이에요." 그래프의 수는 설명을 위해 지은 예시라고 알린다. 단계가 올라갈수록 성공 횟수가 줄어드는 그래프를 보고 "그럼 3단계는 못하는 걸까요?"라고 물어, 높은 단계일수록 처음엔 덜 되는 것이 자연스럽다고 짚는다.',
              levels: { easy: { showValues: true }, base: {}, challenge: {} },
              items: [
                { prompt: '두 모둠의 도움닫기 멀리뛰기 착지 성공 그래프에서 성공을 더 많이 한 모둠을 골라요.', toolOptions: { type: 'bar', mode: 'read', title: '도움닫기 멀리뛰기 두 발 착지 성공(모둠 한 사람당 10번 중 평균)', unit: '번', xLabel: '연습 방법', yLabel: '성공 횟수', max: 10, scale: 1, data: [['쉬운 단계부터 연습', 8], ['바로 도전', 4]], question: '성공을 더 많이 한 모둠은?', choices: ['쉬운 단계부터 연습', '바로 도전'] }, target: { pick: 0 }, difficulty: 0.1 },
                { prompt: '같은 그래프에서 두 모둠의 성공 횟수 차이를 써요.', toolOptions: { type: 'bar', mode: 'read', title: '도움닫기 멀리뛰기 두 발 착지 성공(모둠 한 사람당 10번 중 평균)', unit: '번', xLabel: '연습 방법', yLabel: '성공 횟수', max: 10, scale: 1, data: [['쉬운 단계부터 연습', 8], ['바로 도전', 4]], question: '두 막대의 차이는 몇 번인가요?' }, target: { value: 4 }, difficulty: 0.2 },
                { prompt: '한 학생이 단계마다 10번씩 뛴 기록이에요. 단계가 올라갈수록 성공 횟수가 어떻게 되는지 골라요.', toolOptions: { type: 'bar', mode: 'read', title: '준호의 단계별 성공 횟수(10번 중)', unit: '번', xLabel: '단계', yLabel: '성공 횟수', max: 10, scale: 1, data: [['1단계 제자리', 9], ['2단계 세 걸음', 7], ['3단계 다섯 걸음', 5]], question: '단계가 올라갈수록 성공 횟수는?', choices: ['줄어들어요', '늘어나요', '똑같아요'], why: ['', '막대 높이를 왼쪽부터 견주어 봐요.', '막대 높이가 같은지 다시 봐요.'] }, target: { pick: 0 }, difficulty: 0.2,
                  conclude: '높은 단계는 처음에 덜 되는 것이 자연스러워요. 아래 단계에서 몸이 익으면 다음 단계도 성공이 늘어나요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 멀리뛰기 단계와 근거 정리하기', minutes: 7, tool: 'mindmap',
              task: '도움닫기 멀리뛰기 단계를 쉬운 것부터 놓고, 쉬운 단계부터 하는 좋은 점 가운데 그래프가 근거가 되는 것을 골라요.',
              teacher: '"그래프에서 찾은 수를 넣어 말할 수 있는 것만 근거예요." 느낌만으로 고른 학생에게는 그래프의 어느 막대가 그 말을 뒷받침하는지 짚어 보게 한다.',
              levels: CARD,
              items: [
                { prompt: '도움닫기 멀리뛰기 단계 카드를 쉬운 것부터 차례로 놓아요.', toolOptions: { mode: 'order', cards: ['다섯 걸음 도움닫기 뒤 한 발로 굴러 두 발 착지', '두 발 모아 제자리 멀리뛰기', '세 걸음 도움닫기 뒤 한 발로 굴러 두 발 착지'] }, target: { order: ['두 발 모아 제자리 멀리뛰기', '세 걸음 도움닫기 뒤 한 발로 굴러 두 발 착지', '다섯 걸음 도움닫기 뒤 한 발로 굴러 두 발 착지'] }, levels: { easy: { state: { at: { '두 발 모아 제자리 멀리뛰기': 0 } } } }, difficulty: 0.15 },
                { prompt: '두 모둠 그래프가 근거가 되는 말만 골라요.', toolOptions: { mode: 'pick', topic: '그래프가 보여 주는 것', cards: ['쉬운 단계부터 한 모둠이 착지 성공이 4번 더 많았어요', '같은 시간을 연습해도 방법에 따라 성공이 달라졌어요', '바로 도전한 모둠은 모두 재미없어했어요', '쉬운 단계부터 하면 키가 더 커져요'] }, target: { pick: ['쉬운 단계부터 한 모둠이 착지 성공이 4번 더 많았어요', '같은 시간을 연습해도 방법에 따라 성공이 달라졌어요'] }, difficulty: 0.25,
                  hints: ['그래프에 수나 막대로 나와 있는 것만 근거가 될 수 있어요.', '마음이나 키는 이 그래프에 나와 있지 않아요.', '성공 횟수 차이와 연습 방법에 대한 두 카드만 그래프로 보여 줄 수 있어요.'] },
                { prompt: '쉬운 단계부터 하는 까닭에 알맞은 근거 카드를 이어요.', toolOptions: { mode: 'match', topic: '근거', slots: [{ id: 'more', label: '성공이 더 많아져요' }, { id: 'body', label: '몸이 동작을 익혀요' }], cards: ['단계부터 한 모둠이 8번, 바로 도전한 모둠이 4번 성공했어요', '제자리 뛰기에서 익힌 두 발 착지를 도움닫기에서도 썼어요'] }, target: { match: { more: '단계부터 한 모둠이 8번, 바로 도전한 모둠이 4번 성공했어요', body: '제자리 뛰기에서 익힌 두 발 착지를 도움닫기에서도 썼어요' } }, difficulty: 0.2 },
              ],
            },
            {
              id: 'a3', title: '활동 3. 쉬운 두 단계부터 멀리뛰기 해 보기', minutes: 10, tool: 'timer',
              task: '모래밭(또는 매트)에서 제자리 멀리뛰기와 세 걸음 도움닫기 멀리뛰기를 다섯 번씩 해 보고, 두 발로 착지한 횟수를 적어요.',
              teacher: '"멀리 가는 것보다 두 발로 사뿐히 내려서는 것이 먼저예요." 한 사람씩 출발하고, 뛴 사람은 모래밭 옆쪽으로 나와 줄 뒤로 돌아간다. 착지 때 손을 뒤로 짚는 학생에게 팔을 앞으로 뻗으며 무릎을 굽히게 한다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '멀리뛰기를 하기 전에 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['모래밭에 돌과 갈퀴가 없어요', '앞사람이 모래밭에서 나갔어요', '뛴 뒤에는 옆으로 나오기로 했어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '두 단계를 다섯 번씩 뛰고 두 발로 착지한 횟수를 적어요.', toolOptions: { fields: [{ label: '제자리 멀리뛰기', unit: '번', max: 5 }, { label: '세 걸음 도움닫기 멀리뛰기', unit: '번', max: 5 }] }, target: { records: true }, levels: { challenge: { toolOptions: { fields: [{ label: '제자리 멀리뛰기', unit: '번', max: 5 }, { label: '세 걸음 도움닫기 멀리뛰기', unit: '번', max: 5 }, { label: '다섯 걸음 도움닫기 멀리뛰기', unit: '번', max: 5 }] } } }, difficulty: 0.15 },
                FREE('짝이 뛸 때 두 발로 착지했는지 보고 손가락으로 세어 주고, 역할을 바꾸어 해 본 뒤 표시해요.'),
              ],
            },
          ],
          {
            teacher: '처음 칠판에 적은 두 생각으로 돌아간다. "오늘 찾은 근거로 보면 어느 쪽인가요? 수를 넣어 말해 볼까요?" 그래프의 수와 자기 기록으로 말하는 학생을 짚어 칭찬한다. 출구 1번을 틀린 학생에게는 막대 두 개를 손으로 짚어 견주게 한다. 모래를 털고 마친다.',
            exitTicket: [
              { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '긴 줄 넘기 성공(한 사람당 10번 중 평균)', unit: '번', xLabel: '연습 방법', yLabel: '성공 횟수', max: 10, scale: 1, data: [['쉬운 단계부터 연습', 7], ['바로 도전', 3]], question: '쉬운 단계부터 연습한 쪽이 몇 번 더 성공했나요?' }, prompt: '새 기록 그래프를 읽고 차이를 써요.', target: { value: 4 }, difficulty: 0.15 },
              { type: 'choice', prompt: '"쉬운 단계부터 하면 좋다"는 말의 근거로 알맞은 것은?', options: ['단계부터 한 쪽이 성공을 더 많이 했다는 기록', '친구가 그렇게 말했다는 것', '어려운 단계는 멋있지 않다는 느낌'], answer: 0, difficulty: 0.15, explain: '근거는 기록처럼 견주어 볼 수 있는 것이어야 해요.' },
              MOOD('기록을 보고 근거를 찾아본 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '근거는 기록에 있어요',
          items: [
            { type: 'table', prompt: '오늘 멀리뛰기 기록을 쓰세요.', columns: ['단계', '두 발 착지(5번 중)'], cells: [['제자리 멀리뛰기', ''], ['세 걸음 도움닫기', '']] },
            { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '쉬운 단계부터 한 모둠은 8번, 바로 도전한 모둠은 4번 성공했어요. 차이는 ___번이에요.', answer: '4' },
            { type: 'choice', prompt: '근거로 쓸 수 있는 것에 ○ 하세요.', options: ['성공 횟수 기록', '"그냥 그런 것 같아"라는 느낌'], answer: '성공 횟수 기록' },
            { type: 'short', prompt: '쉬운 단계부터 하면 무엇이 달라지는지 근거를 넣어 한 문장으로 쓰세요.' },
          ],
          easy: {
            note: '막대가 더 높은 쪽이 성공을 더 많이 했어요.',
            items: [
              { type: 'choice', prompt: '더 쉬운 단계는?', options: ['제자리 멀리뛰기', '다섯 걸음 도움닫기'], answer: '제자리 멀리뛰기' },
              { type: 'short', prompt: '오늘 두 발로 착지한 횟수를 쓰세요.' },
              { type: 'draw', prompt: '두 발로 사뿐히 착지하는 내 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '그래프 막대 끝에 수가 보이고, 첫 단계 카드가 미리 놓여 있어요. 제자리 멀리뛰기만 해도 돼요.',
          base: '두 그래프를 견주어 근거를 찾고, 쉬운 두 단계를 해 봐요.',
          challenge: '근거가 되는 카드와 되지 않는 카드를 가려내고, 세 번째 단계까지 기록해요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 한 번에 되지 않는 동작은 못하는 동작이라고 여긴다 → 단계가 올라갈수록 성공이 줄어드는 그래프로 "처음엔 덜 되는 것이 자연스럽다"를 보인다. ② 느낌을 근거로 말한다 → "그래프의 어느 막대가 그렇게 말하나요?"로 되묻는다. ③ 멀리 뛰는 것에만 신경 써 착지를 망친다 → 오늘의 기록은 거리보다 두 발 착지라고 정한다. 그래프는 예시 자료이며, 모래밭이 없으면 두꺼운 매트에 테이프 선을 붙여 한다.',
      }),
      // ───────────────────────── 32 ─────────────────────────
      L(32, {
        title: '낮춘 고무줄 높이에서 세 번 넘고 한 칸 올려 다시 넘기',
        objective: '고무줄 높이를 낮춘 단계에서 두 발 모아 세 번 넘어 본 뒤 한 칸 올린 높이에서 다시 넘고, 단계마다 성공한 횟수를 적을 수 있다.',
        illustration: art('two children holding an elastic rope at knee height while a third child jumps over it with both feet together, paper markers showing ankle, knee and thigh heights', [
          { motif: 'sun', x: 410, y: 52, s: 0.7 }, { motif: 'cloud', x: 110, y: 48 }, { motif: 'hills', y: 214 },
          { motif: 'flower', x: 70, y: 216 }, { motif: 'star', x: 340, y: 146, s: 0.7 },
          { motif: 'text', x: 240, y: 124, text: '세 번 넘고, 한 칸 올려요', size: 24 },
        ]),
        safety: ['고무줄을 잡은 친구는 줄을 손에 감지 않고, 걸리면 바로 놓아요.', '매트 위에서 넘고, 넘은 뒤에는 옆으로 비켜 나와요.', SPACE, STOP],
        stages: stages(
          {
            teacher: '고무줄을 허벅지 높이로 들고 묻는다. "처음부터 이 높이로 넘어야 제대로 한 걸까요? 발목 높이에서 넘으면 제대로 한 게 아닐까요?" 학생 생각을 들은 뒤, 높이뛰기 선수도 낮은 높이에서 시작해 한 칸씩 올린다고 말해 준다. 오늘은 내가 고른 낮은 높이에서 세 번 넘고, 한 칸 올려 다시 넘어 성공한 횟수를 적는다고 알린다.',
            student: '발목 높이에서 넘는 것도 제대로 한 것인지 내 생각을 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 두 발 모아 넘는 동작 익히기', minutes: 7, tool: 'mindmap',
              task: '두 발 모아 넘는 동작을 차례로 놓고, 줄에 걸렸을 때 고칠 점을 이어요. 카드 동작을 제자리에서 해 봐요.',
              teacher: '"무릎 굽히고, 팔 흔들며 튀어 오르고, 무릎 굽혀 사뿐히." 세 동작을 말과 함께 제자리에서 해 보게 한다. 한 발씩 따로 넘는 학생에게 두 발을 모아 함께 굴러야 줄을 차지 않는다고 말한다.',
              levels: CARD,
              items: [
                { prompt: '두 발 모아 고무줄 넘기 동작 카드를 하는 차례대로 놓아요.', toolOptions: { mode: 'order', cards: ['팔을 앞으로 흔들며 두 발로 튀어 올라요', '무릎을 굽혀 발 앞쪽으로 사뿐히 내려서요', '줄 앞에 두 발을 모으고 무릎을 굽혀요'] }, target: { order: ['줄 앞에 두 발을 모으고 무릎을 굽혀요', '팔을 앞으로 흔들며 두 발로 튀어 올라요', '무릎을 굽혀 발 앞쪽으로 사뿐히 내려서요'] }, levels: { easy: { state: { at: { '줄 앞에 두 발을 모으고 무릎을 굽혀요': 0 } } } }, difficulty: 0.15 },
                { prompt: '고무줄 넘기에서 생긴 일에 알맞은 고칠 점 카드를 이어요.', toolOptions: { mode: 'match', topic: '이렇게 고쳐요', slots: [{ id: 'toe', label: '발끝이 줄에 걸렸어요' }, { id: 'loud', label: '내려설 때 쿵 소리가 크게 났어요' }, { id: 'one', label: '한 발씩 따로 넘다 줄을 찼어요' }], cards: ['뛰어오를 때 무릎을 가슴 쪽으로 당겨요', '무릎을 굽히며 발 앞쪽으로 내려서요', '두 발을 모아 함께 굴러요'] }, target: { match: { toe: '뛰어오를 때 무릎을 가슴 쪽으로 당겨요', loud: '무릎을 굽히며 발 앞쪽으로 내려서요', one: '두 발을 모아 함께 굴러요' } }, levels: { easy: { state: { at: { '두 발을 모아 함께 굴러요': 2 } } } }, difficulty: 0.2 },
                { prompt: '단계를 올려도 되는 때만 골라요.', toolOptions: { mode: 'pick', topic: '한 칸 올려도 돼요', cards: ['지금 높이에서 세 번 가운데 두 번 넘게 성공했어요', '두 발 모아 넘기 자세가 흔들리지 않아요', '숨이 차지 않고 다시 할 힘이 있어요', '한 번도 넘지 못했지만 친구가 올렸어요'] }, target: { pick: ['지금 높이에서 세 번 가운데 두 번 넘게 성공했어요', '두 발 모아 넘기 자세가 흔들리지 않아요', '숨이 차지 않고 다시 할 힘이 있어요'] }, difficulty: 0.2 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 고른 높이에서 세 번, 한 칸 올려 세 번 넘기', minutes: 15, tool: 'timer',
              task: '모둠에서 높이를 고른 뒤 그 높이에서 세 번 넘고, 한 칸 올린 높이에서 다시 세 번 넘어요. 두 높이의 성공 횟수를 적어요.',
              teacher: '"내 높이는 내가 골라요. 발목·무릎·허벅지 가운데 처음 높이를 정해요." 잡는 두 학생은 줄을 같은 높이로 맞추고, 넘는 학생이 "준비!" 하면 줄을 팽팽하게 둔다. 한 칸 올린 높이에서 세 번 모두 실패한 학생은 처음 높이로 돌아가 한 번 더 성공한 뒤 마치게 한다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '고무줄 높이를 낮은 단계부터 차례로 놓아요.', toolOptions: { cards: ['허벅지 높이', '발목 높이', '무릎 높이'] }, target: { order: ['발목 높이', '무릎 높이', '허벅지 높이'] }, levels: { easy: { state: { order: ['발목 높이', '허벅지 높이', '무릎 높이'] } } }, difficulty: 0.1 },
                { prompt: '고무줄 넘기를 하기 전에 모둠과 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['고무줄은 손바닥에 올려 잡았어요', '넘는 곳 아래에 매트가 있어요', '넘은 뒤 옆으로 비켜 나오기로 했어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '고른 높이에서 세 번, 한 칸 올린 높이에서 세 번 넘고 성공한 횟수를 적어요.', toolOptions: { fields: [{ label: '고른 높이(낮춘 단계)', unit: '번', max: 3 }, { label: '한 칸 올린 높이', unit: '번', max: 3 }] }, target: { records: true }, levels: { challenge: { toolOptions: { fields: [{ label: '고른 높이(낮춘 단계)', unit: '번', max: 3 }, { label: '한 칸 올린 높이', unit: '번', max: 3 }, { label: '두 칸 올린 높이', unit: '번', max: 3 }] } } }, difficulty: 0.15 },
                { prompt: '고무줄 넘기를 마치고 해낸 것을 점검 목록에 표시해요.', target: { selfCheck: ['처음 높이를 스스로 골랐어요', '고른 높이에서 세 번 넘어 보았어요', '한 칸 올린 높이에서 다시 넘어 보았어요', '줄을 잡을 때 손에 감지 않았어요'] }, difficulty: 0.1 },
                FREE('짝이 넘을 때 "무릎 굽히고, 튀어 오르고, 사뿐히"를 말로 불러 주고, 줄을 잡는 역할도 맡아 본 뒤 표시해요.'),
              ],
            },
            {
              id: 'a3', title: '활동 3. 낮춘 단계에 대한 생각 고르기', minutes: 4, tool: 'emotion',
              task: '낮은 단계를 고른 친구의 장면을 읽고 어떻게 할지 골라요.',
              teacher: '"낮은 높이에서 시작한 친구에게 어떤 말을 해 주면 좋을까요?" 놀리는 말을 고른 학생에게 그 말을 들은 친구가 다음에 어떻게 할지 묻는다.',
              levels: BRANCH,
              items: [
                { prompt: '모둠 장면을 읽고 어떻게 할지 골라요.', toolOptions: { mode: 'branch', who: '서연', situation: '서연이가 발목 높이에서 세 번 모두 넘었어요. 옆 친구가 "그건 너무 낮아서 넘은 것도 아니야."라고 말해요.', ask: '서연이는 어떻게 하면 좋을까요?', motif: 'star', choices: [{ id: 'next', text: '"낮춘 단계도 제대로 한 거야." 하고 한 칸 올려 다시 넘어요', result: '서연이가 무릎 높이에서도 두 번 넘어요', mood: '뿌듯함' }, { id: 'jump', text: '화가 나서 바로 허벅지 높이로 올려 넘어요', result: '줄에 걸려 넘어질 뻔해요', mood: '속상함', why: '한 칸씩 올려야 몸이 따라갈 수 있어요.' }, { id: 'stop', text: '창피해서 그만둬요', result: '서연이는 다음 단계를 해 보지 못해요', mood: '속상함', why: '낮춘 단계에서 성공한 것은 창피한 일이 아니에요.' }] }, target: { choice: 'next' }, levels: { easy: { toolOptions: { choices: [{ id: 'next', text: '"낮춘 단계도 제대로 한 거야." 하고 한 칸 올려 다시 넘어요', result: '서연이가 무릎 높이에서도 두 번 넘어요', mood: '뿌듯함' }, { id: 'stop', text: '창피해서 그만둬요', result: '서연이는 다음 단계를 해 보지 못해요', mood: '속상함', why: '낮춘 단계에서 성공한 것은 창피한 일이 아니에요.' }] } } }, difficulty: 0.15 },
                { prompt: '줄을 잡는 장면을 읽고 어떻게 할지 골라요.', toolOptions: { mode: 'branch', who: '도윤', situation: '도윤이가 고무줄을 잡고 있어요. 넘는 친구가 "한 칸 올려 줘."라고 했는데, 아직 지금 높이에서 한 번도 넘지 못했어요.', ask: '도윤이는 어떻게 하면 좋을까요?', motif: 'flower', choices: [{ id: 'stay', text: '지금 높이에서 먼저 성공해 보자고 말해요', result: '친구가 지금 높이에서 넘고 나서 한 칸 올려요', mood: '편안함' }, { id: 'up', text: '친구가 원하니 두 칸 올려 줘요', result: '친구가 줄에 걸려 넘어질 뻔해요', mood: '걱정', why: '지금 높이에서 성공한 뒤에 한 칸씩 올려요.' }] }, target: { choice: 'stay' }, difficulty: 0.15 },
                { prompt: '오늘 한 칸 올린 높이에 도전할 때 얼마나 떨렸나요? 솔직하게 골라요.', toolOptions: { mode: 'scale', situation: '고른 높이에서 세 번 넘은 뒤, 고무줄을 한 칸 올렸어요.', feeling: '걱정', steps: 3, scaleLabels: ['조금', '보통', '많이'], ask: '얼마나 떨렸나요?' }, target: { level: 'any' }, difficulty: 0.05 },
              ],
            },
          ],
          {
            teacher: '"처음 높이와 한 칸 올린 높이에서 성공 횟수가 어떻게 달랐나요?" 몇 학생에게 듣고, 올린 높이에서 성공이 줄어든 것은 당연하다고 말한다. 처음 질문 "발목 높이에서 넘으면 제대로 한 게 아닐까요?"로 돌아가 학생 말로 답하게 한다. 출구 2번을 틀린 학생에게는 서연이 장면을 다시 떠올리게 한다. 고무줄을 정리하고 무릎을 풀며 마친다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '이렇게 고쳐요', slots: [{ id: 'back', label: '내려설 때 몸이 뒤로 넘어갈 것 같아요' }, { id: 'arm', label: '팔이 몸에 붙어 높이 튀어 오르지 못해요' }], cards: ['내려설 때 팔을 앞으로 뻗어요', '뛰어오를 때 두 팔을 앞으로 힘껏 흔들어요'] }, prompt: '새로 생긴 일에 알맞은 고칠 점을 이어요.', target: { match: { back: '내려설 때 팔을 앞으로 뻗어요', arm: '뛰어오를 때 두 팔을 앞으로 힘껏 흔들어요' } }, difficulty: 0.2 },
              { type: 'choice', prompt: '"단계를 낮추면 제대로 한 것이 아니다"라는 말은?', options: ['맞아요', '틀려요. 낮춘 단계에서 성공해야 다음 단계로 갈 수 있어요'], answer: 1, difficulty: 0.15, explain: '낮춘 단계에서 성공한 것도 제대로 한 거예요. 그 성공이 다음 단계의 바탕이 돼요.' },
              MOOD('한 칸 올려 다시 넘어 본 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '세 번 넘고, 한 칸 올려요',
          items: [
            { type: 'table', prompt: '오늘 넘은 기록을 쓰세요.', columns: ['높이', '성공한 횟수(3번 중)'], cells: [['고른 높이( )', ''], ['한 칸 올린 높이( )', '']] },
            { type: 'blank', prompt: '두 발 모아 넘는 차례를 쓰세요.', text: '무릎을 굽혀요 → 팔을 흔들며 ___ 올라요 → 무릎을 굽혀 사뿐히 ___.', answer: '튀어, 내려서요' },
            { type: 'choice', prompt: '발끝이 줄에 걸릴 때 고칠 점에 ○ 하세요.', options: ['무릎을 가슴 쪽으로 당겨요', '한 발씩 넘어요', '눈을 감아요'], answer: '무릎을 가슴 쪽으로 당겨요' },
            { type: 'short', prompt: '낮춘 단계에서 시작한 친구에게 해 줄 말을 쓰세요.' },
          ],
          easy: {
            note: '내 높이는 내가 골라요. 세 번 넘으면 한 칸 올려요.',
            items: [
              { type: 'choice', prompt: '가장 낮은 높이는?', options: ['발목', '허벅지'], answer: '발목' },
              { type: 'short', prompt: '오늘 넘은 가장 높은 높이를 쓰세요.' },
              { type: 'draw', prompt: '두 발 모아 고무줄을 넘는 내 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '첫 카드가 미리 놓여 있고, 장면의 보기가 두 개로 줄어요. 발목 높이에서만 넘어도 돼요.',
          base: '고른 높이에서 세 번, 한 칸 올린 높이에서 세 번 넘어 기록해요.',
          challenge: '두 칸 올린 높이까지 기록하고, 장면 보기의 결과는 고른 뒤에만 보여요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 단계를 낮추면 제대로 한 것이 아니라고 여긴다 → 선수도 낮은 높이부터 올린다는 것을 말하고, 낮춘 단계의 성공을 기록으로 남기게 한다. ② 한꺼번에 두 칸을 올린다 → "세 번 넘고 한 칸"을 칠판에 적어 두고 잡는 학생이 지키게 한다. ③ 고무줄을 손에 감아 잡는다 → 걸렸을 때 넘는 학생이 넘어질 수 있으니 손바닥에 올려 잡게 한다. 실제 넘기는 교구가 판정하지 않으므로 교사가 관찰한다.',
      }),
      // ───────────────────────── 33 ─────────────────────────
      L(33, {
        title: '줄넘기 이어 넘기 횟수를 한 칸씩 올려 도전하기',
        objective: '줄넘기에서 지금 할 수 있는 이어 넘기 횟수로 세 번 해 본 뒤 한 칸 올린 횟수에 다시 도전하고, 쉬는 시간을 넣은 연습 계획대로 기록할 수 있다.',
        illustration: art('children spread out on a school field each skipping rope with small paper number flags 1, 3, 5, 10 showing their chosen step', [
          { motif: 'sun', x: 410, y: 52, s: 0.7 }, { motif: 'cloud', x: 110, y: 48 }, { motif: 'hills', y: 214 },
          { motif: 'tree', x: 60, y: 210 }, { motif: 'star', x: 320, y: 150, s: 0.6 },
          { motif: 'text', x: 240, y: 124, text: '1 → 3 → 5 → 10', size: 26 },
        ]),
        safety: [ROPE, SPACE, SHOE, STOP],
        stages: stages(
          {
            teacher: '"30차시에 고른 내 줄넘기 단계를 기억하나요?" 학생들이 자기 단계를 말하게 한다. "오늘은 이어 넘기 횟수를 단계로 써요. 한 번 넘고 멈추기, 세 번 이어 넘기, 다섯 번, 열 번이에요." 칠판에 1·3·5·10을 계단 모양으로 쓰고, 지금 할 수 있는 칸에서 세 번 해 본 뒤 한 칸 올린다고 알린다. 연습 사이에 쉬는 시간을 넣는 계획도 직접 세운다고 말한다.',
            student: '지난번 내가 고른 줄넘기 단계를 떠올려 짝에게 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 지금 단계에서 한 칸 올린 단계 찾기', minutes: 7, tool: 'mindmap',
              task: '지금 성공한 단계에 알맞은 다음 단계를 잇고, 이어 넘기 횟수 단계를 차례로 놓아요.',
              teacher: '"한 칸 올린다는 것은 바로 다음 계단이에요." 세 번 이어 넘기를 한 학생이 바로 열 번으로 가려 하면 계단 하나를 건너뛰었다고 짚는다.',
              levels: CARD,
              items: [
                { prompt: '지금 성공한 단계에 알맞은 한 칸 올린 단계 카드를 이어요.', toolOptions: { mode: 'match', topic: '한 칸 올리면', slots: [{ id: 's1', label: '한 번 넘고 멈추기를 세 번 다 했어요' }, { id: 's3', label: '세 번 이어 넘기를 세 번 다 했어요' }, { id: 's5', label: '다섯 번 이어 넘기를 세 번 다 했어요' }], cards: ['세 번 이어 넘기', '다섯 번 이어 넘기', '열 번 이어 넘기'] }, target: { match: { s1: '세 번 이어 넘기', s3: '다섯 번 이어 넘기', s5: '열 번 이어 넘기' } }, levels: { easy: { state: { at: { '세 번 이어 넘기': 0 } } } }, difficulty: 0.15 },
                { prompt: '이어 넘기 단계 카드를 쉬운 것부터 차례로 놓아요.', toolOptions: { mode: 'order', cards: ['다섯 번 이어 넘기', '한 번 넘고 멈추기', '열 번 이어 넘기', '세 번 이어 넘기'] }, target: { order: ['한 번 넘고 멈추기', '세 번 이어 넘기', '다섯 번 이어 넘기', '열 번 이어 넘기'] }, levels: { easy: { state: { at: { '한 번 넘고 멈추기': 0 } } } }, difficulty: 0.1 },
                { prompt: '이어 넘기를 늘리는 데 도움이 되는 것만 골라요.', toolOptions: { mode: 'pick', topic: '이어 넘기를 늘리려면', cards: ['줄은 손목으로 작게 돌려요', '발끝으로 낮게 톡톡 뛰어요', '앞의 한 곳을 보고 뛰어요', '높이 뛸수록 더 많이 넘어요'] }, target: { pick: ['줄은 손목으로 작게 돌려요', '발끝으로 낮게 톡톡 뛰어요', '앞의 한 곳을 보고 뛰어요'] }, levels: { challenge: { prompt: '이어 넘기를 늘리는 데 도움이 되는 것만 골라요. 그럴듯하지만 틀린 카드가 섞여 있어요.', toolOptions: { cards: ['줄은 손목으로 작게 돌려요', '발끝으로 낮게 톡톡 뛰어요', '앞의 한 곳을 보고 뛰어요', '높이 뛸수록 더 많이 넘어요', '팔을 어깨부터 크게 돌려요'] } } }, difficulty: 0.2 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 쉬는 시간을 넣어 계획하고 두 단계 도전하기', minutes: 15, tool: 'timer',
              task: '30초 연습·15초 쉬기를 네 번 하도록 타이머를 맞춰요. 앞의 두 번은 지금 단계, 뒤의 두 번은 한 칸 올린 단계를 하고, 단계마다 세 번 해 본 성공 횟수를 적어요.',
              teacher: '"쉬는 15초에는 줄을 접어 손에 쥐고 숨을 골라요." 화면 타이머를 시작하고 모두 같은 신호에 맞춘다. 한 칸 올린 단계에서 계속 걸리는 학생에게 "지금 단계로 한 번 내려가 성공하고 다시 올라와도 돼요."라고 말한다. 둘레 두 팔 거리를 지키는지 돌며 본다.',
              levels: { easy: {}, base: {}, challenge: { showTotal: true, revealAfterCheck: true } },
              items: [
                { prompt: '30초 연습·15초 쉬기를 네 번 하도록 타이머를 맞춰요.', toolOptions: { plan: { work: 20, rest: 5, rounds: 2 }, workStep: 5, restStep: 5 }, target: { plan: { work: 30, rest: 15, rounds: 4 } }, levels: { easy: { state: { plan: { work: 30, rest: 15, rounds: 2 } } }, challenge: { prompt: '30초 연습·15초 쉬기를 네 번 하도록 맞추고, 전체 시간이 몇 초인지 셈해 봐요.', target: { plan: { work: 30, rest: 15, rounds: 4 }, total: 165 } } }, difficulty: 0.2,
                  hints: ['연습 시간, 쉬는 시간, 횟수 세 칸을 하나씩 맞춰요.', '쉬는 시간은 연습과 연습 사이에만 들어가요.', '연습 30초, 쉬기 15초, 4번으로 맞춰요. 전체는 30×4에 15×3을 더해요.'] },
                { prompt: '줄넘기 연습을 하기 전에 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['둘레 두 팔 거리에 친구가 없어요', '줄 길이가 겨드랑이까지 와요', '쉴 때 줄을 접어 쥐기로 했어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '지금 단계와 한 칸 올린 단계를 세 번씩 해 보고 성공한 횟수를 적어요.', toolOptions: { fields: [{ label: '지금 단계', unit: '번', max: 3 }, { label: '한 칸 올린 단계', unit: '번', max: 3 }] }, target: { records: true }, levels: { challenge: { toolOptions: { fields: [{ label: '지금 단계', unit: '번', max: 3 }, { label: '한 칸 올린 단계', unit: '번', max: 3 }, { label: '한 칸 올린 단계에서 가장 많이 이어 넘은 수', unit: '번' }] } } }, difficulty: 0.15 },
                { prompt: '줄넘기 도전을 마치고 해낸 것을 점검 목록에 표시해요.', target: { selfCheck: ['지금 단계에서 세 번 해 보았어요', '한 칸 올린 단계에 다시 도전했어요', '쉬는 시간에 줄을 접어 쥐었어요'] }, difficulty: 0.1 },
                FREE('짝이 줄넘기를 할 때 이어 넘은 수를 소리 내어 세어 주고, 역할을 바꾸어 해 본 뒤 표시해요.'),
              ],
            },
            {
              id: 'a3', title: '활동 3. 한 칸 올린 단계에서 지쳤을 때 고르기', minutes: 4, tool: 'emotion',
              task: '한 칸 올린 단계에서 계속 걸린 친구의 장면을 읽고 어떻게 할지 골라요.',
              teacher: '"단계를 내려가는 것도 계획의 하나예요." 그만두는 보기를 고른 학생에게 지금 단계에서는 이미 성공했다는 것을 떠올리게 한다.',
              levels: BRANCH,
              items: [
                { prompt: '줄넘기 장면을 읽고 어떻게 할지 골라요.', toolOptions: { mode: 'branch', who: '도윤', situation: '도윤이가 다섯 번 이어 넘기에서 세 번 연속 네 번째에 걸렸어요. 숨이 차고 팔이 아파요.', ask: '도윤이는 어떻게 하면 좋을까요?', motif: 'leaf', choices: [{ id: 'rest', text: '쉬는 시간에 숨을 고르고, 세 번 이어 넘기로 한 번 성공한 뒤 다시 해요', result: '도윤이가 다섯 번 이어 넘기에 한 번 성공해요', mood: '뿌듯함' }, { id: 'force', text: '쉬지 않고 계속 다섯 번 이어 넘기를 해요', result: '팔이 더 아파 줄이 자꾸 걸려요', mood: '짜증', why: '지쳤을 때는 쉬고 한 단계 내려가 성공한 뒤 다시 올라와요.' }, { id: 'quit', text: '줄넘기는 나랑 안 맞는다며 그만둬요', result: '도윤이는 다섯 번 이어 넘기를 해 보지 못해요', mood: '속상함', why: '네 번째까지 넘은 것도 늘어난 기록이에요.' }] }, target: { choice: 'rest' }, levels: { easy: { toolOptions: { choices: [{ id: 'rest', text: '쉬는 시간에 숨을 고르고, 세 번 이어 넘기로 한 번 성공한 뒤 다시 해요', result: '도윤이가 다섯 번 이어 넘기에 한 번 성공해요', mood: '뿌듯함' }, { id: 'quit', text: '줄넘기는 나랑 안 맞는다며 그만둬요', result: '도윤이는 다섯 번 이어 넘기를 해 보지 못해요', mood: '속상함', why: '네 번째까지 넘은 것도 늘어난 기록이에요.' }] } } }, difficulty: 0.15 },
                { prompt: '짝을 응원하는 장면을 읽고 어떻게 할지 골라요.', toolOptions: { mode: 'branch', who: '민지', situation: '민지의 짝이 한 번 넘고 멈추기 단계에서 세 번 모두 성공했어요. 다른 친구들은 열 번 이어 넘기를 하고 있어요.', ask: '민지는 짝에게 뭐라고 말할까요?', motif: 'flower', choices: [{ id: 'cheer', text: '"세 번 다 성공했네! 이제 세 번 이어 넘기 해 보자."', result: '짝이 다음 단계에 웃으며 도전해요', mood: '기쁨' }, { id: 'compare', text: '"다른 애들은 열 번 하는데 넌 아직 한 번이야."', result: '짝이 줄을 내려놓고 고개를 숙여요', mood: '속상함', why: '다른 친구와 견주기보다 짝의 지난 단계와 견주어 말해요.' }] }, target: { choice: 'cheer' }, difficulty: 0.15 },
                { prompt: '오늘 한 칸 올린 단계에 다시 도전할 때 내 마음은 얼마나 자신 있었나요? 솔직하게 골라요.', toolOptions: { mode: 'scale', situation: '지금 단계에서 세 번 해 보고 한 칸 올린 단계에 도전했어요.', feeling: '뿌듯함', steps: 3, scaleLabels: ['조금', '보통', '많이'], ask: '얼마나 자신 있었나요?' }, target: { level: 'any' }, difficulty: 0.05 },
              ],
            },
          ],
          {
            teacher: '"한 칸 올린 단계에서 한 번이라도 성공한 사람?" 손을 들게 하고, 성공하지 못한 학생에게는 "몇 번째까지 넘었나요?"라고 물어 그것도 기록이라고 말한다. 다음 시간에는 멀리뛰기에서도 같은 방법으로 도전한다고 알린다. 출구 1번을 틀린 학생에게는 칠판의 1·3·5·10 계단을 짚게 한다. 줄을 접어 정리하며 마친다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '한 칸 올리면', slots: [{ id: 'a', label: '열 번 이어 넘기를 세 번 다 했어요' }, { id: 'b', label: '세 번 이어 넘기를 세 번 다 했어요' }], cards: ['열다섯 번 이어 넘기', '다섯 번 이어 넘기'] }, prompt: '지금 성공한 단계에 알맞은 한 칸 올린 단계를 이어요.', target: { match: { a: '열다섯 번 이어 넘기', b: '다섯 번 이어 넘기' } }, difficulty: 0.15 },
              { type: 'choice', prompt: '20초 연습·10초 쉬기를 3번 하면 쉬는 시간은 모두 몇 초인가요?', options: ['20초', '30초', '60초'], answer: 0, difficulty: 0.25, explain: '쉬기는 연습과 연습 사이에만 들어가 2번이에요. 10초×2=20초예요.' },
              MOOD('이어 넘기 단계를 올려 도전해 본 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '이어 넘기 계단',
          items: [
            { type: 'table', prompt: '오늘 두 단계의 기록을 쓰세요.', columns: ['단계', '무엇을 했나요?', '성공한 횟수(3번 중)'], cells: [['지금 단계', '', ''], ['한 칸 올린 단계', '', '']] },
            { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '이어 넘기 계단: 1번 → ___번 → 5번 → 10번', answer: '3' },
            { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '30초 연습·15초 쉬기를 4번 하면 쉬기는 ___번 들어가요.', answer: '3' },
            { type: 'short', prompt: '한 칸 올린 단계에서 지쳤을 때 어떻게 할지 쓰세요.' },
          ],
          easy: {
            note: '지금 단계에서 세 번 → 한 칸 올려 세 번!',
            items: [
              { type: 'choice', prompt: '세 번 이어 넘기 다음 단계는?', options: ['다섯 번 이어 넘기', '열 번 이어 넘기'], answer: '다섯 번 이어 넘기' },
              { type: 'short', prompt: '오늘 가장 많이 이어 넘은 수를 쓰세요.' },
              { type: 'draw', prompt: '줄넘기 계단을 그리고 내 자리에 ○ 하세요.' },
            ],
          },
        },
        differentiation: {
          easy: '첫 카드가 미리 놓여 있고, 타이머의 연습·쉬기 시간이 이미 맞추어져 있어요. 장면 보기가 두 개로 줄어요.',
          base: '지금 단계에서 세 번, 한 칸 올린 단계에서 세 번 도전하고 계획대로 쉬어요.',
          challenge: '타이머 전체 시간을 셈해 맞추고, 가장 많이 이어 넘은 수까지 적어요. 함정 카드가 섞여 있어요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 단계를 낮추면 제대로 한 것이 아니라고 여긴다 → 지쳤을 때 한 단계 내려가 성공한 뒤 다시 올라오는 것도 계획이라고 말한다. ② 한 칸 대신 두세 칸을 건너뛴다 → 1·3·5·10 계단을 칠판에 두고 바로 다음 칸만 고르게 한다. ③ 쉬는 시간에 줄을 돌리며 장난한다 → 줄을 접어 쥐는 것까지가 쉬기라고 정한다. 실제 줄넘기는 교구가 판정하지 않으므로 짝의 세기와 교사 관찰로 본다.',
      }),
      // ───────────────────────── 34 ─────────────────────────
      L(34, {
        title: '멀리뛰기 착지 선을 골라 세 번 뛰고 한 칸 먼 선에 도전하기',
        objective: '도움닫기 멀리뛰기에서 두 발로 착지할 선을 스스로 골라 세 번 뛰어 본 뒤 한 칸 먼 선에 다시 도전하고, 기록을 보고 다음에 도전할 선을 고를 수 있다.',
        illustration: art('a sand pit with three colored paper lines marked first, second and third, a child landing with both feet past the first line and friends counting', [
          { motif: 'sun', x: 410, y: 52, s: 0.7 }, { motif: 'cloud', x: 120, y: 48 }, { motif: 'hills', y: 214 },
          { motif: 'tree', x: 430, y: 212, s: 0.8 }, { motif: 'star', x: 300, y: 150, s: 0.6 },
          { motif: 'text', x: 240, y: 124, text: '내 선을 골라 뛰어요', size: 24 },
        ]),
        safety: ['모래밭(또는 매트)의 돌과 갈퀴를 치운 뒤 뛰어요.', '앞사람이 모래밭에서 나간 뒤 출발해요.', '구름판(구르는 선)은 미끄럽지 않은지 먼저 밟아 봐요.', STOP],
        stages: stages(
          {
            teacher: '모래밭에 첫째·둘째·셋째 선(한 걸음 반 간격)을 색 줄로 표시해 두었다. "31차시에 쉬운 단계부터 하는 근거를 찾았지요. 오늘은 세 걸음 도움닫기 멀리뛰기에서 내가 두 발로 넘어 착지할 선을 고르고, 세 번 뛴 뒤 한 칸 먼 선에 도전해요." 가장 먼 선만 고르려는 분위기가 있으면 "지금 성공할 수 있는 선이 내 선이에요."라고 말한다.',
            student: '모래밭의 세 선 가운데 내가 두 발로 넘어 착지할 수 있을 것 같은 선을 골라 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 도움닫기 멀리뛰기 동작 차례와 착지 고칠 점', minutes: 7, tool: 'mindmap',
              task: '세 걸음 도움닫기 멀리뛰기 동작을 차례로 놓고, 착지에서 생긴 일에 알맞은 고칠 점을 이어요.',
              teacher: '"구를 때는 한 발, 내려설 때는 두 발이에요." 두 발로 구르는 차례를 놓은 학생에게 달려오다 두 발을 모으면 속도가 멈춘다는 것을 직접 걸어서 보여 준다.',
              levels: CARD,
              items: [
                { prompt: '세 걸음 도움닫기 멀리뛰기 동작 카드를 하는 차례대로 놓아요.', toolOptions: { mode: 'order', cards: ['구르는 선에서 한 발로 힘차게 굴러요', '세 걸음 가볍게 달려와요', '무릎을 굽히며 두 발로 착지해요', '두 팔을 앞으로 뻗으며 몸을 띄워요'] }, target: { order: ['세 걸음 가볍게 달려와요', '구르는 선에서 한 발로 힘차게 굴러요', '두 팔을 앞으로 뻗으며 몸을 띄워요', '무릎을 굽히며 두 발로 착지해요'] }, levels: { easy: { state: { at: { '세 걸음 가볍게 달려와요': 0 } } } }, difficulty: 0.2,
                  hints: ['달리기, 구르기, 날기, 내려서기 네 부분으로 나누어 생각해요.', '구르는 것은 달려온 다음이고, 착지는 맨 마지막이에요.', '달려오기, 한 발 구르기, 팔 뻗으며 날기, 두 발 착지 차례예요.'] },
                { prompt: '착지에서 생긴 일에 알맞은 고칠 점 카드를 이어요.', toolOptions: { mode: 'match', topic: '이렇게 고쳐요', slots: [{ id: 'hand', label: '착지하고 손이 뒤로 짚였어요' }, { id: 'one', label: '한 발로 먼저 내려섰어요' }, { id: 'line', label: '구르는 선을 넘어 밟았어요' }], cards: ['내려설 때 두 팔을 앞으로 뻗어요', '공중에서 두 발을 모아 함께 내려서요', '출발 자리를 반 걸음 뒤로 옮겨요'] }, target: { match: { hand: '내려설 때 두 팔을 앞으로 뻗어요', one: '공중에서 두 발을 모아 함께 내려서요', line: '출발 자리를 반 걸음 뒤로 옮겨요' } }, levels: { easy: { state: { at: { '출발 자리를 반 걸음 뒤로 옮겨요': 2 } } } }, difficulty: 0.2 },
                { prompt: '처음 도전할 선을 고르는 좋은 방법만 골라요.', toolOptions: { mode: 'pick', topic: '내 선 고르기', cards: ['31차시 기록에서 두 발 착지가 잘된 거리를 봐요', '연습으로 한 번 뛰어 보고 닿은 곳 바로 앞 선을 골라요', '가장 먼 선이 멋있어 보여 골라요', '친구가 고른 선을 그대로 따라 골라요'] }, target: { pick: ['31차시 기록에서 두 발 착지가 잘된 거리를 봐요', '연습으로 한 번 뛰어 보고 닿은 곳 바로 앞 선을 골라요'] }, difficulty: 0.2 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 고른 선에서 세 번, 한 칸 먼 선에서 세 번 뛰기', minutes: 15, tool: 'timer',
              task: '고른 선을 두 발로 넘어 착지하기를 세 번 하고, 한 칸 먼 선에 세 번 도전해요. 짝은 두 발이 선을 넘었는지 보고 알려 줘요.',
              teacher: '"선을 넘었는지는 뒤꿈치가 선 너머에 있는지로 봐요." 짝은 모래밭 옆 선 끝에 앉아 본다. 셋째 선을 고른 학생이 셋째 선에서 세 번 다 성공하면, 한 칸 먼 곳에 고깔을 두어 넷째 선으로 쓴다. 뛴 학생은 갈퀴로 모래를 고르고 나온다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '멀리뛰기를 시작하기 전에 모래밭과 둘레를 살핀 것을 눌러 표시해요.', toolOptions: { safety: ['모래밭에 돌과 갈퀴가 없어요', '구르는 선 자리가 미끄럽지 않아요', '보는 짝이 모래밭 옆에 앉았어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '고른 선과 한 칸 먼 선에서 두 발로 넘어 착지한 횟수를 적어요.', toolOptions: { fields: [{ label: '고른 선', unit: '번', max: 3 }, { label: '한 칸 먼 선', unit: '번', max: 3 }] }, target: { records: true }, levels: { challenge: { toolOptions: { fields: [{ label: '고른 선', unit: '번', max: 3 }, { label: '한 칸 먼 선', unit: '번', max: 3 }, { label: '두 칸 먼 선', unit: '번', max: 3 }] } } }, difficulty: 0.15 },
                { prompt: '멀리뛰기를 마치고 해낸 것을 점검 목록에 표시해요.', target: { selfCheck: ['처음 선을 스스로 골랐어요', '고른 선에서 세 번 뛰었어요', '한 칸 먼 선에 다시 도전했어요', '뛴 뒤 모래를 고르고 나왔어요'] }, difficulty: 0.1 },
                FREE('짝이 뛸 때 두 발 뒤꿈치가 선 너머에 있었는지 보고 "넘었어/조금 모자라"로 알려 주고, 역할을 바꾸어 표시해요.'),
              ],
            },
            {
              id: 'a3', title: '활동 3. 기록 보고 다음에 도전할 선 고르기', minutes: 4, tool: 'chart',
              task: '한 친구의 선별 기록 그래프를 읽고, 다음 시간에 도전하기 알맞은 선을 골라요.',
              teacher: '"아래 선은 다 성공했고 위 선은 덜 된 곳, 거기가 다음 도전 자리예요." 이미 세 번 다 성공한 선을 고른 학생에게는 그 선은 이미 해낸 단계라는 것을 짚는다.',
              levels: { easy: { showValues: true }, base: {}, challenge: {} },
              items: [
                { prompt: '서연이의 선별 기록 그래프에서 세 번 모두 성공한 선은 몇 개인지 써요.', toolOptions: { type: 'bar', mode: 'read', title: '서연이가 두 발로 넘어 착지한 횟수(3번 중)', unit: '번', xLabel: '선', yLabel: '성공 횟수', max: 3, scale: 1, data: [['첫째 선', 3], ['둘째 선', 3], ['셋째 선', 1]], question: '세 번 모두 성공한 선은 몇 개인가요?' }, target: { value: 2 }, difficulty: 0.15 },
                { prompt: '같은 그래프를 보고 서연이가 다음 시간에 도전하기 알맞은 선을 골라요.', toolOptions: { type: 'bar', mode: 'read', title: '서연이가 두 발로 넘어 착지한 횟수(3번 중)', unit: '번', xLabel: '선', yLabel: '성공 횟수', max: 3, scale: 1, data: [['첫째 선', 3], ['둘째 선', 3], ['셋째 선', 1]], question: '다음 시간에 도전하기 알맞은 선은?', choices: ['첫째 선', '둘째 선', '셋째 선'], why: ['이미 세 번 다 성공한 선이에요.', '이미 세 번 다 성공한 선이에요.', ''] }, target: { pick: 2 }, difficulty: 0.2 },
                { prompt: '도윤이의 그래프를 보고 다음 시간에 도전하기 알맞은 선을 골라요.', toolOptions: { type: 'bar', mode: 'read', title: '도윤이가 두 발로 넘어 착지한 횟수(3번 중)', unit: '번', xLabel: '선', yLabel: '성공 횟수', max: 3, scale: 1, data: [['첫째 선', 3], ['둘째 선', 0], ['셋째 선', 0]], question: '다음 시간에 도전하기 알맞은 선은?', choices: ['첫째 선', '둘째 선', '셋째 선'], why: ['이미 세 번 다 성공한 선이에요.', '', '둘째 선을 먼저 넘어야 셋째 선이 해 볼 만해요.'] }, target: { pick: 1 }, difficulty: 0.2,
                  conclude: '다 성공한 선 바로 다음 선이 다음 도전 자리예요. 한 칸씩 올라가요.' },
              ],
            },
          ],
          {
            teacher: '"한 칸 먼 선에서 한 번이라도 넘은 사람? 다음에 도전할 선은 어디인가요?" 몇 학생의 선과 까닭을 듣는다. 출구 1번을 틀린 학생에게는 세 번 다 성공한 선을 먼저 찾게 한다. 다음 시간에는 지금까지의 도전 기록을 모아 지난 기록과 견주어 본다고 알린다. 모래를 고르고 마친다.',
            exitTicket: [
              { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '민지가 두 발로 넘어 착지한 횟수(3번 중)', unit: '번', xLabel: '선', yLabel: '성공 횟수', max: 3, scale: 1, data: [['첫째 선', 3], ['둘째 선', 2], ['셋째 선', 0]], question: '민지가 다음 시간에 도전하기 알맞은 선은?', choices: ['첫째 선', '둘째 선', '셋째 선'] }, prompt: '민지의 기록 그래프를 보고 다음에 도전할 선을 골라요.', target: { pick: 1 }, difficulty: 0.2 },
              { type: 'choice', prompt: '도움닫기 멀리뛰기에서 구를 때와 착지할 때 쓰는 발은?', options: ['구를 때 한 발, 착지할 때 두 발', '구를 때 두 발, 착지할 때 한 발', '둘 다 한 발'], answer: 0, difficulty: 0.15, explain: '달려온 힘을 이어 가려면 한 발로 구르고, 몸을 지키려면 두 발로 착지해요.' },
              MOOD('내 선을 골라 멀리뛰기에 도전해 본 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '내 선을 골라 뛰어요',
          items: [
            { type: 'table', prompt: '오늘 기록을 쓰세요.', columns: ['선', '두 발로 넘어 착지(3번 중)'], cells: [['고른 선( )', ''], ['한 칸 먼 선( )', '']] },
            { type: 'blank', prompt: '도움닫기 멀리뛰기 차례를 쓰세요.', text: '세 걸음 달려와요 → ___ 발로 굴러요 → 팔을 앞으로 뻗어요 → ___ 발로 착지해요.', answer: '한, 두' },
            { type: 'choice', prompt: '착지하고 손이 뒤로 짚일 때 고칠 점에 ○ 하세요.', options: ['내려설 때 팔을 앞으로 뻗어요', '한 발로 내려서요', '더 빨리 달려와요'], answer: '내려설 때 팔을 앞으로 뻗어요' },
            { type: 'short', prompt: '다음 시간에 도전할 선과 그 선을 고른 까닭을 쓰세요.' },
          ],
          easy: {
            note: '다 성공한 선 바로 다음 선이 내 다음 도전이에요.',
            items: [
              { type: 'choice', prompt: '착지는 몇 발로 하나요?', options: ['두 발', '한 발'], answer: '두 발' },
              { type: 'short', prompt: '오늘 넘은 가장 먼 선을 쓰세요.' },
              { type: 'draw', prompt: '두 발로 착지하는 내 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '첫 카드가 미리 놓여 있고, 그래프 막대 끝에 수가 보여요. 제자리 멀리뛰기로 선을 골라도 돼요.',
          base: '세 걸음 도움닫기로 고른 선과 한 칸 먼 선에 세 번씩 도전해요.',
          challenge: '두 칸 먼 선까지 기록하고, 기록 그래프로 다음 도전 선을 근거와 함께 골라요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 단계를 낮추면(가까운 선을 고르면) 제대로 한 것이 아니라고 여긴다 → 지금 성공할 수 있는 선이 내 선이라는 것을 기록 그래프로 보여 준다. ② 두 발로 구른다 → 달려오다 두 발을 모으면 멈추게 된다는 것을 걸어서 보여 준다. ③ 착지 때 손이 뒤로 짚여 손목을 다칠 수 있다 → 팔을 앞으로 뻗는 착지를 먼저 제자리에서 연습한다. 선 간격은 학급 수준에 맞게 정하고, 실제 뛰기는 짝과 교사가 관찰한다.',
      }),
      // ───────────────────────── 35 ─────────────────────────
      L(35, {
        title: '오늘 성공 횟수를 지난 기록과 나란히 견주고 다음 단계 고르기',
        objective: '고무줄·줄넘기·멀리뛰기 가운데 하나를 다시 해 오늘 성공한 횟수를 지난 기록과 나란히 적어 견주고, 다음 시간에 도전할 단계를 까닭과 함께 고를 수 있다.',
        illustration: art('a child holding a paper record card with two columns, last time and today, next to a jump rope, an elastic rope and a sand pit line', [
          { motif: 'sun', x: 410, y: 52, s: 0.6 }, { motif: 'cloud', x: 110, y: 48 }, { motif: 'hills', y: 214 },
          { motif: 'star', x: 360, y: 150, s: 0.7 }, { motif: 'pencil', x: 90, y: 200, s: 0.8 },
          { motif: 'text', x: 240, y: 124, text: '지난번과 오늘, 나란히', size: 24 },
        ]),
        safety: [ROPE, SPACE, '고무줄과 멀리뛰기 구역은 서로 열 걸음 넘게 떨어뜨려요.', STOP],
        stages: stages(
          {
            teacher: '32~34차시 활동지를 나누어 준다. "지난 기록이 적힌 칸을 손가락으로 짚어 보세요. 오늘은 같은 단계로 다시 해서 오늘 칸을 채울 거예요." 이어 묻는다. "오늘 기록이 지난번보다 늘지 않으면 어떻게 해야 할까요?" 그만둔다, 단계를 내린다, 다시 한다는 대답을 모두 칠판에 적고, 수업 끝에 다시 보자고 한다.',
            student: '지난 시간 활동지에서 내 기록을 찾아 짝에게 보여 줘요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 지난번과 같은 단계로 다시 해 보기', minutes: 12, tool: 'timer',
              task: '고무줄·줄넘기·멀리뛰기 구역 가운데 하나를 골라, 지난번과 같은 단계에서 세 번 해 보고 성공한 횟수를 지난 기록 옆에 적어요.',
              teacher: '"같은 단계, 같은 횟수로 해야 견줄 수 있어요." 구역마다 지난번과 같은 높이·횟수·선을 표시해 둔다. 기록이 없는 학생은 오늘 첫 세 번을 지난 기록으로, 두 번째 세 번을 오늘 기록으로 쓴다. 교사는 세 구역을 돌며 기록을 짝이 세었는지 본다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '다시 해 보기 전에 고른 구역을 살펴 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['지난번과 같은 단계를 표시해 두었어요', '구역 둘레에 다른 모둠이 없어요', '보는 짝이 정해졌어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '지난번 기록과 오늘 같은 단계에서 세 번 해 본 기록을 나란히 적어요.', toolOptions: { fields: [{ label: '지난번 성공 횟수', unit: '번', max: 3 }, { label: '오늘 성공 횟수', unit: '번', max: 3 }] }, target: { records: true }, levels: { challenge: { toolOptions: { fields: [{ label: '지난번 성공 횟수', unit: '번', max: 3 }, { label: '오늘 성공 횟수', unit: '번', max: 3 }, { label: '한 칸 올린 단계 성공 횟수', unit: '번', max: 3 }] } } }, difficulty: 0.15 },
                { prompt: '다시 해 보고 해낸 것을 점검 목록에 표시해요.', target: { selfCheck: ['지난번과 같은 단계로 했어요', '짝이 성공 횟수를 세어 주었어요', '지난 기록 옆에 오늘 기록을 적었어요'] }, difficulty: 0.1 },
                FREE('짝의 기록을 보고 "지난번보다 ○번 늘었네 / 같네"처럼 수를 넣어 말해 준 뒤 역할을 바꾸어 표시해요.'),
              ],
            },
            {
              id: 'a2', title: '활동 2. 기록 그래프로 늘어난 만큼 읽기', minutes: 8, tool: 'chart',
              task: '친구들의 지난번·오늘 기록 그래프를 읽고 늘어난 횟수를 셈하고, 늘지 않은 기록도 다르게 읽어요.',
              teacher: '"늘지 않은 기록은 실패한 기록일까요?" 같은 단계에서 기록이 같아도 몸이 그 단계에 익어 가는 중이라고 짚는다. 그래프의 수는 예시 자료라고 알린다.',
              levels: { easy: { showValues: true }, base: {}, challenge: {} },
              items: [
                { prompt: '민지의 고무줄 기록 그래프에서 오늘이 지난번보다 몇 번 늘었는지 써요.', toolOptions: { type: 'bar', mode: 'read', title: '민지의 무릎 높이 고무줄 넘기(10번 중)', unit: '번', xLabel: '때', yLabel: '성공 횟수', max: 10, scale: 1, data: [['지난번', 4], ['오늘', 7]], question: '오늘은 지난번보다 몇 번 늘었나요?' }, target: { value: 3 }, difficulty: 0.1 },
                { prompt: '준호의 줄넘기 기록 그래프를 보고 알맞은 말을 골라요.', toolOptions: { type: 'bar', mode: 'read', title: '준호의 세 번 이어 넘기(10번 중)', unit: '번', xLabel: '때', yLabel: '성공 횟수', max: 10, scale: 1, data: [['지난번', 5], ['오늘', 5]], question: '준호의 기록을 알맞게 말한 것은?', choices: ['지난번과 같아요. 같은 단계를 한 번 더 해 볼 만해요', '늘지 않았으니 그만두는 것이 나아요', '오늘 기록이 더 줄었어요'], why: ['', '같은 기록은 몸이 익어 가는 중일 수 있어요. 그만둘 까닭이 되지 않아요.', '두 막대의 높이를 다시 견주어 봐요.'] }, target: { pick: 0 }, difficulty: 0.2 },
                { prompt: '서연이의 멀리뛰기 기록 그래프에서 세 번 잰 기록 가운데 가장 많이 성공한 때를 골라요.', toolOptions: { type: 'bar', mode: 'read', title: '서연이의 둘째 선 착지 성공(10번 중)', unit: '번', xLabel: '때', yLabel: '성공 횟수', max: 10, scale: 1, data: [['첫째 시간', 3], ['둘째 시간', 3], ['오늘', 6]], question: '가장 많이 성공한 때는?', choices: ['첫째 시간', '둘째 시간', '오늘'] }, target: { pick: 2 }, difficulty: 0.15,
                  conclude: '기록이 같은 때가 있어도 이어서 하면 다시 늘어날 수 있어요. 견줄 때는 지난 내 기록과 견주어요.' },
              ],
            },
            {
              id: 'a3', title: '활동 3. 기록을 보고 다음 단계 고르기', minutes: 6, tool: 'emotion',
              task: '친구의 기록 장면을 읽고 다음에 무엇을 할지 고른 뒤, 내 다음 단계를 정해요.',
              teacher: '"다음 단계는 기록이 알려 줘요." 늘지 않아 그만두는 보기를 고른 학생에게 처음 칠판에 적은 세 대답 가운데 무엇이 기록과 맞는지 다시 고르게 한다.',
              levels: BRANCH,
              items: [
                { prompt: '도윤이의 기록 장면을 읽고 다음에 할 일을 골라요.', toolOptions: { mode: 'branch', who: '도윤', situation: '도윤이는 다섯 번 이어 넘기를 지난번에 세 번 중 한 번, 오늘도 세 번 중 한 번 성공했어요.', ask: '도윤이는 다음 시간에 무엇을 하면 좋을까요?', motif: 'leaf', choices: [{ id: 'same', text: '다섯 번 이어 넘기를 한 번 더 해 봐요', result: '다음 시간에 세 번 중 두 번 성공해요', mood: '뿌듯함' }, { id: 'quit', text: '늘지 않았으니 줄넘기를 그만둬요', result: '도윤이의 기록은 그대로 멈춰요', mood: '속상함', why: '늘지 않은 것은 아직 익는 중이라는 뜻이에요. 같은 단계를 더 해 봐요.' }, { id: 'jump', text: '열 번 이어 넘기로 건너뛰어요', result: '줄이 계속 걸려 더 지쳐요', mood: '짜증', why: '지금 단계가 아직 덜 되었으니 한 칸 위로 건너뛰면 어려워요.' }] }, target: { choice: 'same' }, levels: { easy: { toolOptions: { choices: [{ id: 'same', text: '다섯 번 이어 넘기를 한 번 더 해 봐요', result: '다음 시간에 세 번 중 두 번 성공해요', mood: '뿌듯함' }, { id: 'quit', text: '늘지 않았으니 줄넘기를 그만둬요', result: '도윤이의 기록은 그대로 멈춰요', mood: '속상함', why: '늘지 않은 것은 아직 익는 중이라는 뜻이에요. 같은 단계를 더 해 봐요.' }] } } }, difficulty: 0.15 },
                { prompt: '서연이의 기록 장면을 읽고 다음에 할 일을 골라요.', toolOptions: { mode: 'branch', who: '서연', situation: '서연이는 무릎 높이 고무줄을 지난번 세 번 중 두 번, 오늘 세 번 중 세 번 넘었어요.', ask: '서연이는 다음 시간에 무엇을 하면 좋을까요?', motif: 'star', choices: [{ id: 'up', text: '허벅지 높이로 한 칸 올려 도전해요', result: '서연이가 새 높이에서 한 번 넘어요', mood: '신남' }, { id: 'down', text: '발목 높이로 내려가 다시 해요', result: '이미 잘하는 높이라 금방 지루해져요', mood: '걱정', why: '지금 높이를 다 성공했으니 한 칸 올릴 때예요.' }] }, target: { choice: 'up' }, difficulty: 0.15 },
                { prompt: '오늘 기록을 지난번과 견주어 본 내 마음은 어떤가요? 솔직하게 골라요.', toolOptions: { mode: 'scale', situation: '지난번 기록 옆에 오늘 기록을 나란히 적어 보았어요.', feeling: '뿌듯함', steps: 3, scaleLabels: ['조금', '보통', '많이'], ask: '내 기록이 얼마나 뿌듯한가요?' }, target: { level: 'any' }, difficulty: 0.05 },
              ],
            },
          ],
          {
            teacher: '처음 칠판에 적은 세 대답(그만둔다·단계를 내린다·다시 한다)으로 돌아가 "오늘 기록을 보니 어떤 때는 다시 하고, 어떤 때는 올리면 될까요?"라고 묻는다. 다 성공하면 올리고, 같으면 다시 하고, 많이 줄면 한 칸 내린다는 말을 학생 말로 정리한다. 출구 1번을 틀린 학생에게는 지난 기록과 오늘 기록을 손으로 짚어 견주게 한다. 다리를 털며 마친다.',
            exitTicket: [
              { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '준호의 셋째 선 착지 성공(10번 중)', unit: '번', xLabel: '때', yLabel: '성공 횟수', max: 10, scale: 1, data: [['지난번', 2], ['오늘', 6]], question: '오늘은 지난번보다 몇 번 늘었나요?' }, prompt: '새 기록 그래프를 읽고 늘어난 횟수를 써요.', target: { value: 4 }, difficulty: 0.15 },
              { type: 'choice', prompt: '"성공 횟수가 늘지 않으면 그만두는 것이 낫다"는 말은?', options: ['맞아요', '틀려요. 같은 단계를 더 하면 다시 늘 수 있어요'], answer: 1, difficulty: 0.15, explain: '기록이 같은 때도 몸은 익어 가는 중이에요. 같은 단계를 이어서 해 봐요.' },
              MOOD('지난 기록과 오늘 기록을 견주어 본 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '지난번과 오늘',
          items: [
            { type: 'table', prompt: '고른 활동의 기록을 나란히 쓰세요.', columns: ['활동과 단계', '지난번', '오늘', '늘어난 횟수'], cells: [['', '', '', '']] },
            { type: 'choice', prompt: '같은 단계를 세 번 다 성공했을 때 다음에 할 일에 ○ 하세요.', options: ['한 칸 올려 도전해요', '그만둬요', '두 칸 내려가요'], answer: '한 칸 올려 도전해요' },
            { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '지난번 4번, 오늘 7번 성공했으면 ___번 늘었어요.', answer: '3' },
            { type: 'short', prompt: '다음 시간에 도전할 단계와 그 까닭을 쓰세요.' },
          ],
          easy: {
            note: '다 성공하면 올리고, 같으면 한 번 더 해요.',
            items: [
              { type: 'choice', prompt: '기록이 지난번과 같으면?', options: ['같은 단계를 한 번 더 해요', '그만둬요'], answer: '같은 단계를 한 번 더 해요' },
              { type: 'short', prompt: '오늘 성공한 횟수를 쓰세요.' },
              { type: 'draw', prompt: '오늘 다시 해 본 활동을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '그래프 막대 끝에 수가 보이고, 장면 보기가 두 개로 줄어요.',
          base: '같은 단계에서 다시 해 지난 기록과 견주고, 다음 단계를 골라요.',
          challenge: '한 칸 올린 단계 기록까지 적고, 장면 보기의 결과는 고른 뒤에만 보여요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 성공 횟수가 늘지 않으면 그만두는 것이 낫다고 여긴다 → 같은 기록이 이어지다 늘어난 서연이 그래프를 보여 준다. ② 다른 친구의 기록과 견준다 → "지난번 나"와 견주는 말틀을 칠판에 적는다. ③ 지난번과 다른 단계로 해서 견줄 수 없다 → 구역마다 지난번 단계 표시를 두고 같은 단계로 하게 한다. 세 구역을 함께 열 때는 구역 사이를 충분히 띄운다.',
      }),
      // ───────────────────────── 36 ─────────────────────────
      L(36, {
        title: '줄넘기 30초 기록 꺾은선그래프에서 멈춘 구간 읽고 계속할 까닭 찾기',
        objective: '다섯 번 잰 줄넘기 30초 기록을 꺾은선그래프로 나타내 기록이 멈춘 구간을 찾고, 그 뒤 다시 늘어난 것을 근거로 계속 도전할 까닭을 말할 수 있다.',
        illustration: art('a paper line graph on a wall showing jump rope records rising, staying flat for a while, then rising again, with a child pointing at the flat part', [
          { motif: 'star', x: 410, y: 58, s: 0.7 }, { motif: 'cloud', x: 110, y: 48 }, { motif: 'hills', y: 216 },
          { motif: 'pencil', x: 380, y: 196, s: 0.8 }, { motif: 'leaf', x: 80, y: 214 },
          { motif: 'text', x: 240, y: 124, text: '멈춘 다음에도 올라가요', size: 24 },
        ]),
        safety: [ROPE, SPACE, SHOE, STOP],
        stages: stages(
          {
            teacher: '꺾은선그래프 한 장을 보여 준다(예시 자료). 선이 오르다 평평해진 곳을 손으로 가리고 묻는다. "여기까지 보면 이 친구는 줄넘기를 계속해야 할까요, 그만둬야 할까요?" 대답을 들은 뒤 가린 손을 떼어 선이 다시 오르는 것을 보여 준다. "멈춘 구간에서 그만두었다면 이 기록을 볼 수 없었겠지요." 오늘은 이런 그래프를 읽고, 우리도 30초 기록을 재어 본다고 알린다.',
            student: '그래프의 평평한 곳까지만 보고, 이 친구가 계속해야 할지 생각해 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 30초 기록 꺾은선그래프 그리고 읽기', minutes: 9, tool: 'chart',
              task: '준호가 다섯 번 잰 줄넘기 30초 기록 표를 보고 꺾은선그래프를 완성한 뒤, 기록이 멈춘 구간과 다시 늘어난 때를 읽어요.',
              teacher: '"점을 이은 선이 평평하면 기록이 멈춘 거예요." 멈춘 구간을 "실패"라고 말하는 학생에게 그 구간 다음 점을 짚게 한다. 그래프의 수는 예시 자료다.',
              levels: { easy: { showValues: true }, base: {}, challenge: {} },
              items: [
                { prompt: '준호의 줄넘기 30초 기록 표를 보고 꺾은선그래프를 완성해요.', toolOptions: { type: 'line', title: '준호의 줄넘기 30초 기록', unit: '번', xLabel: '잰 때', yLabel: '넘은 횟수', max: 40, scale: 5, data: [['1회', 15], ['2회', 20], ['3회', 20], ['4회', 20], ['5회', 30]], given: [0] }, target: { build: true }, levels: { easy: { toolOptions: { given: [0, 1, 2] } } }, difficulty: 0.2 },
                { prompt: '그래프에서 기록이 멈춰 있던 구간을 골라요.', toolOptions: { type: 'line', mode: 'read', title: '준호의 줄넘기 30초 기록', unit: '번', xLabel: '잰 때', yLabel: '넘은 횟수', max: 40, scale: 5, data: [['1회', 15], ['2회', 20], ['3회', 20], ['4회', 20], ['5회', 30]], question: '기록이 멈춰 있던 구간은?', choices: ['1회~2회', '2회~4회', '4회~5회'] }, target: { pick: 1 }, difficulty: 0.15 },
                { prompt: '멈춘 구간 뒤 5회에는 4회보다 몇 번 더 넘었는지 써요.', toolOptions: { type: 'line', mode: 'read', title: '준호의 줄넘기 30초 기록', unit: '번', xLabel: '잰 때', yLabel: '넘은 횟수', max: 40, scale: 5, data: [['1회', 15], ['2회', 20], ['3회', 20], ['4회', 20], ['5회', 30]], question: '4회와 5회의 차이는 몇 번인가요?' }, target: { value: 10 }, difficulty: 0.2,
                  conclude: '기록이 멈춘 구간이 있어도 이어서 하면 다시 늘 수 있어요. 멈춤은 그만둘 때가 아니라 익어 가는 때예요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 기록이 멈췄을 때 할 일 고르기', minutes: 6, tool: 'mindmap',
              task: '기록이 멈춘 까닭에 알맞은 할 일을 잇고, 멈춘 구간에서 계속할 까닭을 골라요.',
              teacher: '"멈춘 까닭을 찾으면 할 일이 보여요." 까닭과 상관없이 "더 세게 돌린다"만 고르는 학생에게 까닭마다 고칠 곳이 다르다는 것을 짚는다.',
              levels: CARD,
              items: [
                { prompt: '기록이 멈춘 까닭에 알맞은 할 일 카드를 이어요.', toolOptions: { mode: 'match', topic: '멈췄을 때', slots: [{ id: 'tired', label: '20초가 지나면 팔이 지쳐요' }, { id: 'catch', label: '빨리 하려다 줄이 발에 자주 걸려요' }, { id: 'high', label: '너무 높이 뛰어 숨이 금방 차요' }], cards: ['손목만 써서 줄을 작게 돌려요', '빠르기를 조금 낮추고 박자를 고르게 해요', '발끝으로 낮게 톡톡 뛰어요'] }, target: { match: { tired: '손목만 써서 줄을 작게 돌려요', catch: '빠르기를 조금 낮추고 박자를 고르게 해요', high: '발끝으로 낮게 톡톡 뛰어요' } }, levels: { easy: { state: { at: { '발끝으로 낮게 톡톡 뛰어요': 2 } } } }, difficulty: 0.2 },
                { prompt: '기록이 멈춘 구간에서도 계속할 까닭만 골라요.', toolOptions: { mode: 'pick', topic: '계속하는 까닭', cards: ['멈춘 뒤에 다시 늘어난 기록이 있어요', '같은 기록이어도 몸은 박자를 익히고 있어요', '고칠 곳을 하나 찾으면 다시 늘 수 있어요', '기록이 멈추면 원래 줄넘기를 못하는 사람이에요'] }, target: { pick: ['멈춘 뒤에 다시 늘어난 기록이 있어요', '같은 기록이어도 몸은 박자를 익히고 있어요', '고칠 곳을 하나 찾으면 다시 늘 수 있어요'] }, difficulty: 0.15 },
                { prompt: '기록이 멈췄을 때 할 일 카드를 하는 차례대로 놓아요.', toolOptions: { mode: 'order', cards: ['고칠 곳 하나만 바꾸어 다시 재요', '최근 기록 몇 개가 같은지 그래프로 확인해요', '멈춘 까닭을 짝과 찾아요'] }, target: { order: ['최근 기록 몇 개가 같은지 그래프로 확인해요', '멈춘 까닭을 짝과 찾아요', '고칠 곳 하나만 바꾸어 다시 재요'] }, levels: { easy: { state: { at: { '최근 기록 몇 개가 같은지 그래프로 확인해요': 0 } } } }, difficulty: 0.2 },
              ],
            },
            {
              id: 'a3', title: '활동 3. 고칠 곳 하나 바꾸어 30초 기록 재기', minutes: 11, tool: 'timer',
              task: '짝과 번갈아 줄넘기 30초 기록을 재요. 처음 한 번은 하던 대로, 두 번째는 고칠 곳 하나만 바꾸어 재고 두 기록을 적어요.',
              teacher: '"바꾸는 것은 하나만이에요. 둘 셋을 한꺼번에 바꾸면 무엇이 도움이 됐는지 몰라요." 화면 타이머를 시작해 반 전체가 같은 30초에 재고, 짝은 넘은 횟수를 소리 내어 센다. 두 번째 기록이 줄어든 학생에게 "바꾼 것에 아직 익지 않은 거예요. 다음에도 그대로 해 봐요."라고 말한다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '30초 기록을 재기 전에 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['둘레 두 팔 거리에 친구가 없어요', '세어 줄 짝이 앞에 섰어요', '바꿀 곳을 하나만 정했어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '하던 대로 잰 30초 기록과 고칠 곳 하나를 바꾸어 잰 기록을 적어요.', toolOptions: { fields: [{ label: '하던 대로', unit: '번' }, { label: '하나 바꾸어', unit: '번' }] }, target: { records: true }, levels: { challenge: { toolOptions: { fields: [{ label: '하던 대로', unit: '번' }, { label: '하나 바꾸어', unit: '번' }, { label: '두 기록의 차이', unit: '번' }] } } }, difficulty: 0.15 },
                FREE('짝의 30초 기록을 소리 내어 세어 주고, 짝이 무엇을 바꾸었는지 들은 뒤 역할을 바꾸어 표시해요.'),
              ],
            },
          ],
          {
            teacher: '"하나를 바꾼 뒤 기록이 늘어난 사람, 같은 사람, 줄어든 사람?" 세 경우 모두 손을 들게 하고, 줄어든 학생도 바꾼 것에 익는 중이라고 말한다. 처음에 보인 그래프를 다시 보며 "멈춘 구간에서 그만두지 않으면?"을 학생 말로 답하게 한다. 출구 1번을 틀린 학생에게는 선이 평평한 곳을 손가락으로 따라가게 한다. 손목을 풀며 마친다.',
            exitTicket: [
              { type: 'tool', tool: 'chart', options: { type: 'line', mode: 'read', title: '민지의 줄넘기 30초 기록', unit: '번', xLabel: '잰 때', yLabel: '넘은 횟수', max: 40, scale: 5, data: [['1회', 10], ['2회', 15], ['3회', 15], ['4회', 25]], question: '기록이 멈춰 있던 구간은?', choices: ['1회~2회', '2회~3회', '3회~4회'] }, prompt: '새 꺾은선그래프에서 기록이 멈춘 구간을 골라요.', target: { pick: 1 }, difficulty: 0.15 },
              { type: 'choice', prompt: '줄넘기 기록이 세 번 같게 나왔을 때 알맞은 생각은?', options: ['고칠 곳을 하나 찾아 바꾸고 이어서 해요', '나는 줄넘기를 못하니 그만둬요', '한꺼번에 여러 가지를 다 바꿔요'], answer: 0, difficulty: 0.15, explain: '멈춘 구간은 고칠 곳을 찾을 때예요. 하나만 바꾸어야 무엇이 도움이 됐는지 알 수 있어요.' },
              MOOD('멈춘 기록을 다시 살펴본 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '멈춘 다음에도',
          items: [
            { type: 'figure', prompt: '준호의 기록 표를 보고 꺾은선그래프를 그리세요.', tool: 'chart', options: { type: 'line', title: '준호의 줄넘기 30초 기록', unit: '번', xLabel: '잰 때', yLabel: '넘은 횟수', max: 40, scale: 5, data: [['1회', 15], ['2회', 20], ['3회', 20], ['4회', 20], ['5회', 30]], given: [] }, figures: [{ state: {} }] },
            { type: 'table', prompt: '오늘 내 30초 기록을 쓰세요.', columns: ['하던 대로', '하나 바꾸어', '바꾼 것'], cells: [['', '', '']] },
            { type: 'choice', prompt: '20초가 지나면 팔이 지칠 때 바꿀 것에 ○ 하세요.', options: ['손목만 써서 줄을 작게 돌려요', '팔을 더 크게 돌려요', '더 높이 뛰어요'], answer: '손목만 써서 줄을 작게 돌려요' },
            { type: 'short', prompt: '기록이 멈춘 구간에서도 계속해야 하는 까닭을 쓰세요.' },
          ],
          easy: {
            note: '선이 평평하면 멈춘 것, 다시 올라가면 늘어난 거예요.',
            items: [
              { type: 'choice', prompt: '기록이 멈추면?', options: ['고칠 곳 하나를 바꾸어 이어서 해요', '그만둬요'], answer: '고칠 곳 하나를 바꾸어 이어서 해요' },
              { type: 'short', prompt: '오늘 30초 동안 넘은 횟수를 쓰세요.' },
              { type: 'draw', prompt: '올라가다 멈추고 다시 올라가는 선을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '그래프에 점 세 개가 미리 찍혀 있고 값이 보여요. 첫 카드가 미리 놓여 있어요.',
          base: '꺾은선그래프를 완성해 멈춘 구간을 찾고, 하나를 바꾸어 기록을 다시 재요.',
          challenge: '두 기록의 차이를 셈해 적고, 멈춘 까닭과 할 일을 차례로 정해요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 성공 횟수가 늘지 않으면 그만두는 것이 낫다고 여긴다 → 멈춘 구간 뒤 다시 오르는 그래프를 가렸다 보여 준다. ② 한꺼번에 여러 가지를 바꾼다 → "하나만 바꾸기"를 약속으로 정한다. ③ 30초 기록을 남과 견준다 → 기록판은 내 기록끼리만 견주게 한다. 그래프 수는 예시 자료이며, 반 학생 기록은 학생 동의 없이 화면에 띄우지 않는다.',
      }),
      // ───────────────────────── 37 ─────────────────────────
      L(37, {
        title: '세 도전 구역을 돌며 나만의 다음 도전 카드 만들기',
        objective: '고무줄·줄넘기·멀리뛰기 세 구역을 돌며 지금 단계를 다시 확인하고, 기록을 근거로 다음에 도전할 단계와 연습 방법을 담은 도전 카드를 만들 수 있다.',
        illustration: art('three activity stations in a gym with an elastic rope, jump ropes and a mat with lines, and a child writing on a small paper challenge card', [
          { motif: 'star', x: 410, y: 58, s: 0.8 }, { motif: 'house', x: 80, y: 196, s: 0.8 }, { motif: 'hills', y: 220 },
          { motif: 'flower', x: 420, y: 216 }, { motif: 'cloud', x: 140, y: 48 },
          { motif: 'text', x: 240, y: 124, text: '나의 다음 도전', size: 28 },
        ]),
        safety: [ROPE, SPACE, '구역을 옮길 때는 걸어서 가고, 다음 구역 줄 뒤에 서요.', STOP],
        stages: stages(
          {
            teacher: '29차시 첫 시간에 "얼마나 어려워 보이나요?" 눈금에 고른 것을 떠올리게 한다. "그때 어려워 보였던 동작이 지금은 어떤가요?" 몇 학생에게 듣는다. 오늘은 세 구역을 4분씩 돌며 지금 내 단계를 확인하고, 마지막에 다음 도전 카드를 만든다고 알린다. 도전 카드에는 종목·지금 단계·다음 단계·연습 방법 네 가지를 쓴다고 칠판에 적는다.',
            student: '처음에 가장 어려워 보였던 동작이 지금은 어떤지 짝에게 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 세 구역 순환 계획하고 돌기', minutes: 16, tool: 'timer',
              task: '세 구역을 4분씩 돌고 옮기는 데 1분을 쓰도록 타이머를 맞춰요. 구역마다 지금 단계를 세 번 해 보고 성공한 횟수를 적어요.',
              teacher: '"구역마다 지금 내 단계에서 세 번이에요. 더 올리고 싶으면 세 번 다 성공한 뒤에만 올려요." 교사는 세 구역 가운데에 서서 신호를 준다. 1분 옮기는 시간에 물을 마시게 한다. 고무줄과 멀리뛰기 구역 사이는 열 걸음 넘게 띄운다.',
              levels: { easy: {}, base: {}, challenge: { showTotal: true, revealAfterCheck: true } },
              items: [
                { prompt: '세 구역을 4분(240초)씩 돌고 옮기는 시간 1분(60초)을 넣도록 타이머를 맞춰요.', toolOptions: { plan: { work: 120, rest: 30, rounds: 2 }, workStep: 30, restStep: 30 }, target: { plan: { work: 240, rest: 60, rounds: 3 } }, levels: { easy: { state: { plan: { work: 240, rest: 30, rounds: 3 } } }, challenge: { prompt: '세 구역을 4분(240초)씩 돌고 옮기는 시간 1분(60초)을 넣도록 맞추고, 전체 시간이 몇 초인지 셈해 봐요.', target: { plan: { work: 240, rest: 60, rounds: 3 }, total: 840 } } }, difficulty: 0.2,
                  hints: ['구역 시간, 옮기는 시간, 구역 수를 한 칸씩 맞춰요. 4분이 몇 초인지 먼저 셈해요.', '옮기는 시간은 구역과 구역 사이에만 들어가요.', '구역 240초, 옮기기 60초, 3번으로 맞춰요. 전체는 240×3에 60×2를 더해요.'] },
                { prompt: '순환을 시작하기 전에 세 구역을 둘러보고 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['고무줄과 멀리뛰기 구역이 떨어져 있어요', '줄넘기 구역 둘레가 넓어요', '멀리뛰기 매트에 미끄러운 곳이 없어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '구역마다 지금 단계에서 세 번 해 본 성공 횟수를 적어요.', toolOptions: { fields: [{ label: '고무줄 넘기', unit: '번', max: 3 }, { label: '줄넘기 이어 넘기', unit: '번', max: 3 }, { label: '도움닫기 멀리뛰기', unit: '번', max: 3 }] }, target: { records: true }, difficulty: 0.15 },
                FREE('구역마다 짝과 성공 횟수를 서로 세어 주고, 옮기는 1분 동안 물을 마신 뒤 표시해요.'),
              ],
            },
            {
              id: 'a2', title: '활동 2. 도전에서 배운 원리 묶기', minutes: 5, tool: 'mindmap',
              task: '도전 활동에서 배운 생각 카드를 단계 정하기·기록 보기·마음 다루기로 나누어요.',
              teacher: '"이 카드는 무엇을 할 때 쓰는 생각일까요?" 기록과 마음을 헷갈리는 학생에게 수가 들어 있는지를 먼저 보게 한다.',
              levels: CARD,
              items: [
                { prompt: '도전 활동에서 배운 생각 카드를 알맞은 가지로 나누어요.', toolOptions: { topic: '도전에서 배운 것', slots: ['단계 정하기', '기록 보기', '마음 다루기'], cards: ['높이나 횟수를 낮춘 단계부터 해요', '세 번 다 성공하면 한 칸 올려요', '지난번 내 기록과 나란히 견주어요', '기록이 멈춰도 다음 점을 기다려요', '한 번에 안 돼도 못하는 것이 아니에요', '친구와 견주지 않고 어제의 나와 견주어요'] }, target: { sort: { '단계 정하기': ['높이나 횟수를 낮춘 단계부터 해요', '세 번 다 성공하면 한 칸 올려요'], '기록 보기': ['지난번 내 기록과 나란히 견주어요', '기록이 멈춰도 다음 점을 기다려요'], '마음 다루기': ['한 번에 안 돼도 못하는 것이 아니에요', '친구와 견주지 않고 어제의 나와 견주어요'] } }, levels: { easy: { state: { at: { '높이나 횟수를 낮춘 단계부터 해요': 0, '지난번 내 기록과 나란히 견주어요': 1 } } } }, difficulty: 0.25,
                  hints: ['카드가 무엇을 정하는 말인지, 수를 읽는 말인지, 마음에 대한 말인지 먼저 봐요.', '"단계·한 칸"이 들어 있으면 단계 정하기, "기록·점"이 들어 있으면 기록 보기예요.', '못한다는 생각과 견주기에 대한 두 카드가 마음 다루기예요.'] },
                { prompt: '다음 도전 카드에 꼭 들어갈 것만 골라요.', toolOptions: { mode: 'pick', topic: '도전 카드에는', cards: ['도전할 종목', '지금 단계와 다음 단계', '연습할 방법 하나', '다른 친구의 기록'] }, target: { pick: ['도전할 종목', '지금 단계와 다음 단계', '연습할 방법 하나'] }, difficulty: 0.15 },
                { prompt: '기록에 맞는 다음 단계 카드를 이어요.', toolOptions: { mode: 'match', topic: '다음 단계는', slots: [{ id: 'all', label: '무릎 높이 고무줄 3번 중 3번 성공' }, { id: 'half', label: '다섯 번 이어 넘기 3번 중 1번 성공' }, { id: 'none', label: '셋째 선 3번 중 0번, 둘째 선 3번 중 3번 성공' }], cards: ['허벅지 높이 고무줄에 도전해요', '다섯 번 이어 넘기를 한 번 더 해요', '셋째 선에 다시 도전해요'] }, target: { match: { all: '허벅지 높이 고무줄에 도전해요', half: '다섯 번 이어 넘기를 한 번 더 해요', none: '셋째 선에 다시 도전해요' } }, difficulty: 0.25 },
              ],
            },
            {
              id: 'a3', title: '활동 3. 다음 도전 카드 만들고 마음 돌아보기', minutes: 5, tool: 'emotion',
              task: '세 종목 가운데 하나를 골라 활동지에 도전 카드를 쓰고, 도전 단원을 마친 마음을 눈금에 솔직하게 표시해요.',
              teacher: '"도전 카드는 다음 체육 시간이나 쉬는 시간에 내가 쓸 계획이에요." 다음 단계를 너무 높게 쓴 학생에게는 오늘 기록을 근거로 다시 정하게 한다. 눈금은 정답이 없다고 말한다.',
              levels: LV,
              items: [
                { prompt: '29차시에 처음 보았을 때와 견주어, 지금 줄 넘기 동작에 도전할 자신은 얼마나 되나요? 솔직하게 골라요.', toolOptions: { mode: 'scale', situation: '쉬운 단계부터 한 칸씩 올리며 아홉 시간 동안 도전했어요.', feeling: '뿌듯함', steps: 3, scaleLabels: ['조금', '보통', '많이'], ask: '도전할 자신은 얼마나 되나요?', after: '도전 카드에 다음 한 칸을 적어 두면 다음에도 이어 갈 수 있어요.' }, target: { level: 'any' }, difficulty: 0.05 },
                { prompt: '지금 가장 해 보고 싶은 다음 도전은 얼마나 설레나요? 솔직하게 골라요.', toolOptions: { mode: 'scale', situation: '도전 카드에 다음에 도전할 단계를 적었어요.', feeling: '설렘', steps: 3, scaleLabels: ['조금', '보통', '많이'], ask: '얼마나 설레나요?' }, target: { level: 'any' }, difficulty: 0.05 },
                FREE('활동지 도전 카드(종목·지금 단계·다음 단계·연습 방법)를 쓰고 짝에게 읽어 준 뒤 표시해요.'),
              ],
            },
          ],
          {
            teacher: '"도전 카드의 다음 단계는 무엇을 근거로 정했나요?" 서너 명에게 기록과 함께 듣는다. 친구와 견주어 정했다는 학생에게는 오늘 내 기록을 다시 보게 한다. 출구 1번을 틀린 학생에게는 세 번 다 성공했는지부터 보게 한다. 다음 시간부터는 게임에서 규칙을 지키며 최선을 다하는 활동을 한다고 알리고, 줄과 매트를 함께 정리하며 마친다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '다음 단계는', slots: [{ id: 'a', label: '열 번 이어 넘기 3번 중 3번 성공' }, { id: 'b', label: '발목 높이 고무줄 3번 중 2번 성공' }], cards: ['열다섯 번 이어 넘기에 도전해요', '발목 높이 고무줄을 한 번 더 해요'] }, prompt: '새 기록에 맞는 다음 단계를 이어요.', target: { match: { a: '열다섯 번 이어 넘기에 도전해요', b: '발목 높이 고무줄을 한 번 더 해요' } }, difficulty: 0.2 },
              { type: 'choice', prompt: '도전 카드의 다음 단계를 정하는 근거로 가장 알맞은 것은?', options: ['오늘 내 성공 횟수 기록', '친구가 고른 단계', '가장 높은 단계라서'], answer: 0, difficulty: 0.15, explain: '다음 단계는 내 기록을 보고 바로 다음 한 칸으로 정해요.' },
              MOOD('도전 활동을 마친 오늘 마음은 어떤가요?'),
            ],
          },
        ),
        worksheet: {
          title: '나의 다음 도전 카드',
          items: [
            { type: 'table', prompt: '세 구역에서 지금 단계와 성공 횟수를 쓰세요.', columns: ['종목', '지금 단계', '성공한 횟수(3번 중)'], cells: [['고무줄 넘기', '', ''], ['줄넘기 이어 넘기', '', ''], ['도움닫기 멀리뛰기', '', '']] },
            { type: 'table', prompt: '하나를 골라 다음 도전 카드를 쓰세요.', columns: ['종목', '지금 단계', '다음 단계', '연습 방법'], cells: [['', '', '', '']] },
            { type: 'choice', prompt: '세 번 다 성공한 단계 다음에 할 일에 ○ 하세요.', options: ['한 칸 올려요', '두 칸 올려요', '그만둬요'], answer: '한 칸 올려요' },
            { type: 'short', prompt: '도전 활동에서 가장 크게 달라진 내 모습을 쓰세요.' },
          ],
          easy: {
            note: '도전 카드: 무엇을? 지금은? 다음은? 어떻게?',
            items: [
              { type: 'choice', prompt: '다음 단계는 무엇을 보고 정하나요?', options: ['내 기록', '친구의 단계'], answer: '내 기록' },
              { type: 'short', prompt: '내가 고른 다음 도전을 쓰세요.' },
              { type: 'draw', prompt: '다음 도전을 해내는 내 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '타이머의 구역 시간이 이미 맞추어져 있고, 카드 두 장이 미리 놓여 있어요. 두 구역만 돌아도 돼요.',
          base: '세 구역을 돌며 지금 단계를 확인하고, 기록을 근거로 도전 카드를 만들어요.',
          challenge: '타이머 전체 시간을 셈해 맞추고, 전체 시간은 맞힌 뒤에만 보여요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 성공 횟수가 늘지 않으면 그만두는 것이 낫다고 여긴다 → 도전 카드의 "다음 단계"에 같은 단계를 한 번 더 쓰는 것도 계획이라고 말한다. ② 다음 단계를 친구와 견주어 높게 쓴다 → 오늘 기록 칸을 근거로 다시 정하게 한다. ③ 구역을 옮길 때 뛰어간다 → 1분은 걸어서 옮기고 물을 마시기에 넉넉하다는 것을 첫 이동 때 보여 준다. 도전 카드는 교실에 모아 두었다가 다음 학기 체육 시간에 다시 쓴다.',
      }),
      // ───────────────────────── 38 ─────────────────────────
      L(38, {
        title: '규칙 없는 게임과 규칙 있는 게임 견주고 실수와 규칙 어김 가르기',
        objective: '규칙 없이 한 콩주머니 모으기 게임에서 생긴 문제를 두 가지 들고, 게임 장면을 실수와 규칙 어김으로 갈라 그 차이를 말할 수 있다.',
        illustration: art('four teams of children carrying soft bean bags from the center of a gym to their own baskets, one calm and orderly half and one messy half with bumping arrows', [
          { motif: 'star', x: 410, y: 58, s: 0.7 }, { motif: 'house', x: 80, y: 196, s: 0.8 }, { motif: 'hills', y: 220 },
          { motif: 'heart', x: 380, y: 150, s: 0.6 }, { motif: 'cloud', x: 140, y: 48 },
          { motif: 'text', x: 240, y: 124, text: '규칙이 없으면?', size: 28 },
        ]),
        safety: [RULE, SIGNAL, '콩주머니는 들고 걸어서 옮기고, 던지지 않아요.', SPACE],
        stages: stages(
          {
            teacher: '체육관 가운데에 콩주머니 스무 개를 놓고 네 모서리에 모둠 바구니를 둔다. "오늘은 규칙을 하나도 말하지 않고 게임을 해 볼게요. 콩주머니를 많이 모으는 모둠이 이겨요." 1분만 한다고 말하고, 시작 전에 "부딪힘이 생기면 호루라기로 바로 멈춘다"는 안전 신호만 약속한다. 게임 뒤 무슨 일이 있었는지 묻는다고 미리 알려 둔다.',
            student: '규칙 없이 게임을 하면 어떤 일이 생길지 먼저 짐작해 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 규칙 없이 1분, 규칙 넣고 1분 게임하기', minutes: 11, tool: 'timer',
              task: '규칙 없이 1분 동안 콩주머니 모으기를 하고, 모둠이 함께 정한 규칙 세 가지를 넣어 다시 1분 해요. 두 게임에서 부딪힐 뻔한 일과 다툰 일을 세어 적어요.',
              teacher: '규칙 없는 1분이 끝나면 바로 묻는다. "무슨 일이 생겼나요?" 한꺼번에 많이 가져가기, 다른 모둠 바구니에서 빼 오기, 뛰다 부딪힘 같은 대답을 칠판에 적는다. 그 문제를 막을 규칙 세 가지(한 번에 하나씩, 걸어서, 다른 모둠 바구니에 손대지 않기)를 반이 함께 정하고 두 번째 1분을 한다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '게임을 시작하기 전에 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['호루라기가 울리면 바로 멈춰요', '콩주머니는 던지지 않아요', '모둠 바구니 자리를 알아요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '두 게임에서 우리 모둠이 부딪힐 뻔한 일과 다툰 일을 세어 적어요.', toolOptions: { fields: [{ label: '규칙 없이: 부딪힐 뻔한 일', unit: '번' }, { label: '규칙 없이: 다툰 일', unit: '번' }, { label: '규칙 넣고: 부딪힐 뻔한 일', unit: '번' }, { label: '규칙 넣고: 다툰 일', unit: '번' }] }, target: { records: true }, difficulty: 0.15 },
                FREE('모둠에서 규칙 없는 게임과 규칙 넣은 게임이 어떻게 달랐는지 한 사람씩 한 문장으로 말한 뒤 표시해요.'),
              ],
            },
            {
              id: 'a2', title: '활동 2. 규칙이 없을 때 생긴 문제와 실수·규칙 어김 가르기', minutes: 9, tool: 'mindmap',
              task: '규칙이 없을 때 생기는 문제를 고르고, 게임 장면 카드를 실수와 규칙 어김으로 나누어요.',
              teacher: '"하려고 했는데 몸이 따라 주지 않은 것은 실수, 알고도 약속을 지키지 않은 것은 규칙 어김이에요." 공을 놓친 장면을 규칙 어김에 넣은 학생에게 그 친구가 일부러 놓쳤는지 묻는다. 실수는 탓하지 않고 다시 하면 되지만, 규칙 어김은 멈추고 고쳐야 한다고 짚는다.',
              levels: CARD,
              items: [
                { prompt: '규칙이 없을 때 게임에서 생기는 문제만 골라요.', toolOptions: { mode: 'pick', topic: '규칙이 없으면', cards: ['서로 많이 가져가려다 부딪혀요', '누가 이겼는지를 두고 다퉈요', '힘센 친구만 많이 가져가 불공평해요', '게임 시간이 저절로 길어져 더 재미있어요'] }, target: { pick: ['서로 많이 가져가려다 부딪혀요', '누가 이겼는지를 두고 다퉈요', '힘센 친구만 많이 가져가 불공평해요'] }, difficulty: 0.15 },
                { prompt: '게임 장면 카드를 실수와 규칙 어김으로 나누어요.', toolOptions: { topic: '어떤 장면일까?', slots: ['실수', '규칙 어김'], cards: ['옮기다 콩주머니를 떨어뜨렸어요', '잘못 듣고 다른 모둠 바구니에 넣었어요', '알면서 콩주머니를 두 개씩 가져갔어요', '다른 모둠 바구니에서 몰래 빼 왔어요'] }, target: { sort: { '실수': ['옮기다 콩주머니를 떨어뜨렸어요', '잘못 듣고 다른 모둠 바구니에 넣었어요'], '규칙 어김': ['알면서 콩주머니를 두 개씩 가져갔어요', '다른 모둠 바구니에서 몰래 빼 왔어요'] } }, levels: { easy: { state: { at: { '옮기다 콩주머니를 떨어뜨렸어요': 0 } } }, challenge: { prompt: '게임 장면 카드를 실수와 규칙 어김으로 나누어요. 규칙을 잘 지킨 장면 카드는 어느 가지에도 넣지 않아요.', toolOptions: { cards: ['옮기다 콩주머니를 떨어뜨렸어요', '잘못 듣고 다른 모둠 바구니에 넣었어요', '알면서 콩주머니를 두 개씩 가져갔어요', '다른 모둠 바구니에서 몰래 빼 왔어요', '호루라기 소리에 바로 멈췄어요'] } } }, difficulty: 0.2,
                  hints: ['그 친구가 알고도 그렇게 했는지, 하려다 잘 안 된 것인지 생각해요.', '"알면서", "몰래"가 들어간 장면은 약속을 알고도 지키지 않은 거예요.', '떨어뜨린 것과 잘못 들은 것은 실수, 두 개씩 가져간 것과 몰래 빼 온 것은 규칙 어김이에요.'] },
                { prompt: '장면에 알맞은 대처 카드를 이어요.', toolOptions: { mode: 'match', topic: '이럴 때는', slots: [{ id: 'mis', label: '친구가 실수로 콩주머니를 떨어뜨렸어요' }, { id: 'rule', label: '친구가 알면서 두 개씩 가져가요' }], cards: ['"괜찮아, 다시 주워 가자." 하고 기다려 줘요', '"한 번에 하나씩이 규칙이야." 하고 말하고 하나를 되돌려 놓게 해요'] }, target: { match: { mis: '"괜찮아, 다시 주워 가자." 하고 기다려 줘요', rule: '"한 번에 하나씩이 규칙이야." 하고 말하고 하나를 되돌려 놓게 해요' } }, difficulty: 0.15,
                  conclude: '실수는 하려다 잘 안 된 것이라 다시 하면 되고, 규칙 어김은 알고도 약속을 어긴 것이라 멈추고 고쳐야 해요.' },
              ],
            },
            {
              id: 'a3', title: '활동 3. 이기려고 규칙을 어겨도 되는지 고르기', minutes: 6, tool: 'emotion',
              task: '이기고 싶은 마음이 드는 장면을 읽고 어떻게 할지 골라요.',
              teacher: '"조금만 어기면 이길 수 있을 때, 그 승리는 우리 모둠의 실력일까요?" 몰래 어기는 보기를 고른 학생에게 상대 모둠의 마음을 떠올리게 한다.',
              levels: BRANCH,
              items: [
                { prompt: '게임 장면을 읽고 어떻게 할지 골라요.', toolOptions: { mode: 'branch', who: '준호', situation: '콩주머니 하나 차이로 지고 있어요. 10초 남았는데, 두 개를 한꺼번에 들면 이길 수 있어요.', ask: '준호는 어떻게 하면 좋을까요?', motif: 'star', choices: [{ id: 'one', text: '규칙대로 하나만 들고 걸어서 옮겨요', result: '지더라도 끝까지 해낸 모둠이 서로 손뼉을 쳐요', mood: '뿌듯함' }, { id: 'two', text: '한 번만이니까 두 개를 들고 뛰어가요', result: '상대 모둠이 "반칙이야!" 하고 게임이 멈춰요', mood: '화남', why: '이기려고 어기면 게임이 멈추고 상대도 믿지 않게 돼요.' }, { id: 'stop', text: '어차피 질 테니 그만 움직여요', result: '모둠 친구들이 힘이 빠져요', mood: '속상함', why: '마지막까지 최선을 다하는 것도 게임의 약속이에요.' }] }, target: { choice: 'one' }, levels: { easy: { toolOptions: { choices: [{ id: 'one', text: '규칙대로 하나만 들고 걸어서 옮겨요', result: '지더라도 끝까지 해낸 모둠이 서로 손뼉을 쳐요', mood: '뿌듯함' }, { id: 'two', text: '한 번만이니까 두 개를 들고 뛰어가요', result: '상대 모둠이 "반칙이야!" 하고 게임이 멈춰요', mood: '화남', why: '이기려고 어기면 게임이 멈추고 상대도 믿지 않게 돼요.' }] } } }, difficulty: 0.15 },
                { prompt: '모둠 친구의 말을 듣고 어떻게 할지 골라요.', toolOptions: { mode: 'branch', who: '서연', situation: '서연이의 모둠 친구가 "선생님 안 보실 때 저 모둠 바구니에서 하나만 빼 오자."라고 말해요.', ask: '서연이는 어떻게 하면 좋을까요?', motif: 'flower', choices: [{ id: 'no', text: '"그건 규칙 어김이야. 우리 힘으로 모으자."라고 말해요', result: '모둠이 규칙대로 끝까지 모아요', mood: '편안함' }, { id: 'yes', text: '하나쯤은 괜찮다며 같이 빼 와요', result: '상대 모둠이 알아채고 크게 다퉈요', mood: '화남', why: '하나라도 알고 어긴 것은 규칙 어김이에요.' }] }, target: { choice: 'no' }, difficulty: 0.15 },
                { prompt: '오늘 규칙 없는 게임을 할 때 내 마음은 얼마나 불편했나요? 솔직하게 골라요.', toolOptions: { mode: 'scale', situation: '규칙 없이 1분 동안 콩주머니 모으기를 했어요.', feeling: '불안', steps: 3, scaleLabels: ['조금', '보통', '많이'], ask: '얼마나 불편했나요?' }, target: { level: 'any' }, difficulty: 0.05 },
              ],
            },
          ],
          {
            teacher: '두 게임의 기록을 모둠마다 하나씩 듣고 "규칙을 넣자 무엇이 달라졌나요?"라고 묻는다. 규칙은 게임을 덜 재미있게 하는 것이 아니라 모두가 안전하고 공평하게 하는 약속이라는 말이 학생에게서 나오게 기다린다. 출구 1번을 틀린 학생에게는 "알고도 했나요?"를 먼저 묻게 한다. 콩주머니를 하나씩 들고 걸어서 정리하며 마친다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { topic: '어떤 장면일까?', slots: ['실수', '규칙 어김'], cards: ['피구에서 던진 공이 손에서 미끄러져 빗나갔어요', '피구에서 맞았는데 안 맞았다고 우겼어요', '이어달리기에서 바통을 받다 놓쳤어요'] }, prompt: '새 게임 장면을 실수와 규칙 어김으로 나누어요.', target: { sort: { '실수': ['피구에서 던진 공이 손에서 미끄러져 빗나갔어요', '이어달리기에서 바통을 받다 놓쳤어요'], '규칙 어김': ['피구에서 맞았는데 안 맞았다고 우겼어요'] } }, difficulty: 0.15 },
              { type: 'choice', prompt: '"이기기 위해서라면 규칙을 조금 어겨도 된다"는 말은?', options: ['맞아요', '틀려요. 규칙을 어기고 이긴 것은 공평한 승리가 아니에요'], answer: 1, difficulty: 0.15, explain: '규칙은 모두가 같은 조건에서 겨루게 하는 약속이에요. 어기면 게임이 멈추고 믿음이 깨져요.' },
              MOOD('규칙이 있는 게임과 없는 게임을 해 본 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '규칙이 없으면?',
          items: [
            { type: 'table', prompt: '두 게임의 기록을 쓰세요.', columns: ['게임', '부딪힐 뻔한 일', '다툰 일'], cells: [['규칙 없이', '', ''], ['규칙 넣고', '', '']] },
            { type: 'short', prompt: '규칙이 없을 때 생긴 문제 두 가지를 쓰세요.' },
            { type: 'choice', prompt: '규칙 어김인 장면에 ○ 하세요.', options: ['알면서 콩주머니를 두 개 가져갔어요', '옮기다 콩주머니를 떨어뜨렸어요', '잘못 듣고 다른 바구니에 넣었어요'], answer: '알면서 콩주머니를 두 개 가져갔어요' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '하려다 잘 안 된 것은 ___, 알고도 약속을 지키지 않은 것은 규칙 어김이에요.', answer: '실수' },
            { type: 'short', prompt: '이기려고 규칙을 조금 어기면 안 되는 까닭을 쓰세요.' },
          ],
          easy: {
            note: '"알고도 했나요?" 그렇다면 규칙 어김, 아니라면 실수예요.',
            items: [
              { type: 'choice', prompt: '공을 잡다 놓친 것은?', options: ['실수', '규칙 어김'], answer: '실수' },
              { type: 'short', prompt: '오늘 우리 반이 정한 규칙 하나를 쓰세요.' },
              { type: 'draw', prompt: '규칙을 지키며 콩주머니를 옮기는 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드 한 장이 미리 놓여 있고, 맞는 곳에 놓으면 바로 표시돼요. 장면 보기가 두 개로 줄어요.',
          base: '규칙이 없을 때의 문제를 고르고, 장면을 실수와 규칙 어김으로 나누어요.',
          challenge: '규칙을 잘 지킨 장면이 함정 카드로 섞여 있고, 장면 보기의 결과는 고른 뒤에만 보여요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 이기기 위해서라면 규칙을 조금 어겨도 된다고 여긴다 → 규칙을 어기고 이긴 장면에서 게임이 멈추는 결과를 보여 주고 상대 모둠의 마음을 묻는다. ② 실수와 규칙 어김을 가르지 못한다 → "알고도 했나요?" 한 가지 질문으로 가르게 한다. ③ 실수한 친구를 탓한다 → 실수에는 "괜찮아, 다시 하자"라는 말을 쓰게 한다. 규칙 없는 1분은 부딪힘이 생기기 쉬우므로 교사가 호루라기를 손에 들고 바로 멈출 준비를 한다.',
      }),
      // ───────────────────────── 39 ─────────────────────────
      L(39, {
        title: '고깔 맞히기 게임의 규칙마다 지키는 까닭 찾기',
        objective: '공 굴려 고깔 맞히기 게임의 규칙마다 그 규칙이 지키는 것(안전·공평·참여)을 잇고, 이기고 싶은 장면에서도 규칙을 지키는 행동을 고를 수 있다.',
        illustration: art('children rolling soft balls from behind a taped line toward a cluster of paper cones, a friend from the other team counting fallen cones', [
          { motif: 'star', x: 410, y: 58, s: 0.7 }, { motif: 'house', x: 80, y: 196, s: 0.8 }, { motif: 'hills', y: 220 },
          { motif: 'ball', x: 300, y: 200, s: 0.8 }, { motif: 'cloud', x: 140, y: 48 },
          { motif: 'text', x: 240, y: 124, text: '규칙에는 까닭이 있어요', size: 24 },
        ]),
        safety: [BALL, SIGNAL, '공은 굴려서만 보내고, 고깔을 세우러 갈 때는 모든 모둠이 던지기를 멈춘 뒤 가요.', SPACE],
        stages: stages(
          {
            teacher: '고깔 맞히기 게임의 규칙 네 가지를 칠판에 쓴다(던지는 선 밟지 않기, 공은 굴려서만, 모둠원이 돌아가며 한 번씩, 점수는 상대 모둠이 세기). "이 규칙 가운데 하나를 지우면 어떤 일이 생길까요?" 한 규칙씩 손으로 가리며 묻고, 대답을 규칙 옆에 짧게 적는다. 지난 시간에 규칙 없는 게임에서 생긴 일을 떠올리게 한 뒤, 오늘은 규칙마다 무엇을 지켜 주는지 알아보고 게임을 한다고 알린다.',
            student: '칠판의 규칙 하나를 지우면 어떤 일이 생길지 짝과 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 규칙과 그 까닭 잇기', minutes: 8, tool: 'mindmap',
              task: '게임 규칙에 그 규칙을 지키는 까닭을 잇고, 규칙이 지켜 주는 것을 안전·공평·참여로 나누어요.',
              teacher: '"이 규칙이 없으면 누가 가장 먼저 곤란해질까요?" 다친 사람이 생기면 안전, 한쪽만 유리해지면 공평, 몇 명만 하게 되면 참여라고 갈라 준다. 굴려서 보내기를 공평에 넣은 학생에게 공이 높이 튀면 무엇이 위험한지 묻는다.',
              levels: CARD,
              items: [
                { prompt: '게임 규칙에 알맞은 까닭 카드를 이어요.', toolOptions: { mode: 'match', topic: '이 규칙은 왜?', slots: [{ id: 'line', label: '던지는 선을 밟지 않아요' }, { id: 'roll', label: '공은 굴려서만 보내요' }, { id: 'turn', label: '모둠원이 돌아가며 한 번씩 던져요' }, { id: 'count', label: '점수는 상대 모둠이 세어 줘요' }], cards: ['모두 같은 거리에서 던져 공평해요', '공이 튀어 얼굴에 맞지 않아요', '모두가 게임에 참여해요', '점수를 두고 다투지 않아요'] }, target: { match: { line: '모두 같은 거리에서 던져 공평해요', roll: '공이 튀어 얼굴에 맞지 않아요', turn: '모두가 게임에 참여해요', count: '점수를 두고 다투지 않아요' } }, levels: { easy: { state: { at: { '모두가 게임에 참여해요': 2 } } } }, difficulty: 0.2 },
                { prompt: '규칙 카드를 그 규칙이 지켜 주는 것으로 나누어요.', toolOptions: { topic: '무엇을 지켜 줄까?', slots: ['안전', '공평', '참여'], cards: ['고깔을 세우러 갈 때는 모두 던지기를 멈춰요', '모든 모둠이 같은 수의 공으로 해요', '아직 안 던진 친구가 먼저 던져요'] }, target: { sort: { '안전': ['고깔을 세우러 갈 때는 모두 던지기를 멈춰요'], '공평': ['모든 모둠이 같은 수의 공으로 해요'], '참여': ['아직 안 던진 친구가 먼저 던져요'] } }, levels: { easy: { state: { at: { '고깔을 세우러 갈 때는 모두 던지기를 멈춰요': 0 } } } }, difficulty: 0.2,
                  hints: ['규칙이 없으면 다치는지, 한쪽만 유리해지는지, 누가 빠지게 되는지 떠올려요.', '공이 굴러오는 자리에 사람이 있으면 다쳐요. 공 수가 다르면 한쪽만 유리해요.', '멈추기는 안전, 같은 공 수는 공평, 안 던진 친구 먼저는 참여예요.'] },
                { prompt: '규칙을 잘 지키는 모습만 골라요.', toolOptions: { mode: 'pick', topic: '규칙을 지켜요', cards: ['선 뒤에 서서 공을 굴려요', '내 차례가 끝나면 다음 친구에게 공을 건네요', '상대 모둠이 센 점수를 그대로 받아들여요', '고깔이 덜 넘어졌으면 발로 슬쩍 쳐서 넘어뜨려요'] }, target: { pick: ['선 뒤에 서서 공을 굴려요', '내 차례가 끝나면 다음 친구에게 공을 건네요', '상대 모둠이 센 점수를 그대로 받아들여요'] }, difficulty: 0.15,
                  conclude: '규칙마다 안전·공평·참여 가운데 무언가를 지켜 줘요. 그래서 규칙을 지키면 모두가 즐겁게 게임할 수 있어요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 이기고 싶은 장면에서 고르기', minutes: 6, tool: 'emotion',
              task: '이기고 싶은 마음이 드는 게임 장면을 읽고 어떻게 할지 골라요.',
              teacher: '"이길 수 있는 방법과 해도 되는 방법은 같을까요?" 선을 살짝 넘는 보기를 고른 학생에게 상대 모둠도 모두 한 발씩 넘으면 어떻게 될지 묻는다.',
              levels: BRANCH,
              items: [
                { prompt: '고깔 맞히기 장면을 읽고 어떻게 할지 골라요.', toolOptions: { mode: 'branch', who: '민지', situation: '마지막 공이에요. 던지는 선에서 한 발만 앞으로 나가면 고깔을 맞힐 것 같아요.', ask: '민지는 어떻게 하면 좋을까요?', motif: 'star', choices: [{ id: 'line', text: '선 뒤에서 고깔을 잘 보고 굴려요', result: '고깔 두 개가 넘어지고 모두 손뼉을 쳐요', mood: '뿌듯함' }, { id: 'step', text: '아무도 안 볼 때 한 발 나가서 굴려요', result: '상대 모둠이 보고 그 점수는 빼기로 해요', mood: '속상함', why: '한 발이라도 선을 넘으면 같은 거리에서 겨루는 공평함이 깨져요.' }, { id: 'throw', text: '세게 던져서 한꺼번에 많이 넘어뜨려요', result: '공이 튀어 고깔을 세우던 친구 쪽으로 가요', mood: '걱정', why: '굴려서만 보내는 규칙은 다치지 않게 하려는 거예요.' }] }, target: { choice: 'line' }, levels: { easy: { toolOptions: { choices: [{ id: 'line', text: '선 뒤에서 고깔을 잘 보고 굴려요', result: '고깔 두 개가 넘어지고 모두 손뼉을 쳐요', mood: '뿌듯함' }, { id: 'step', text: '아무도 안 볼 때 한 발 나가서 굴려요', result: '상대 모둠이 보고 그 점수는 빼기로 해요', mood: '속상함', why: '한 발이라도 선을 넘으면 같은 거리에서 겨루는 공평함이 깨져요.' }] } } }, difficulty: 0.15 },
                { prompt: '점수를 세는 장면을 읽고 어떻게 할지 골라요.', toolOptions: { mode: 'branch', who: '도윤', situation: '도윤이가 상대 모둠의 점수를 세어 주고 있어요. 상대 모둠이 고깔 다섯 개를 넘어뜨렸는데, 네 개라고 말하면 우리 모둠이 이겨요.', ask: '도윤이는 어떻게 하면 좋을까요?', motif: 'flower', choices: [{ id: 'true', text: '본 그대로 "다섯 개!"라고 말해요', result: '두 모둠이 점수를 믿고 다음 판을 해요', mood: '편안함' }, { id: 'lie', text: '"네 개!"라고 작게 말해요', result: '상대 모둠이 다시 세어 보고 크게 다퉈요', mood: '화남', why: '점수를 바꾸어 말하는 것도 이기려고 규칙을 어긴 거예요.' }] }, target: { choice: 'true' }, difficulty: 0.15 },
                { prompt: '이길 수 있는데 규칙 때문에 참아야 할 때 내 마음은 얼마나 힘든가요? 솔직하게 골라요.', toolOptions: { mode: 'scale', situation: '규칙을 조금만 어기면 이길 수 있는데, 규칙대로 하기로 했어요.', feeling: '속상함', steps: 3, scaleLabels: ['조금', '보통', '많이'], ask: '얼마나 힘든가요?', after: '힘든 마음이 들어도 규칙을 지킨 것은 스스로 자랑스러워해도 돼요.' }, target: { level: 'any' }, difficulty: 0.05 },
              ],
            },
            {
              id: 'a3', title: '활동 3. 규칙을 지키며 고깔 맞히기 게임하기', minutes: 12, tool: 'timer',
              task: '네 규칙을 지키며 모둠끼리 고깔 맞히기 게임을 두 판 해요. 상대 모둠의 점수를 세어 주고, 우리 모둠이 규칙을 지켰는지 스스로 점검해요.',
              teacher: '"점수는 상대 모둠이 세어 주고, 우리는 그대로 받아들여요." 두 모둠이 한 조가 되어 번갈아 굴린다. 고깔을 세우러 갈 때는 교사가 호루라기로 모든 모둠의 던지기를 멈추게 한다. 선을 밟은 장면이 나오면 게임을 멈추지 말고 판이 끝난 뒤 다시 굴리게 한다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '고깔 맞히기를 시작하기 전에 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['던지는 선을 바닥에 붙였어요', '고깔 둘레에 사람이 없어요', '네 규칙을 모둠이 함께 읽었어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '두 판 동안 상대 모둠이 세어 준 우리 모둠 점수를 적어요.', toolOptions: { fields: [{ label: '첫째 판 점수', unit: '점' }, { label: '둘째 판 점수', unit: '점' }] }, target: { records: true }, levels: { challenge: { toolOptions: { fields: [{ label: '첫째 판 점수', unit: '점' }, { label: '둘째 판 점수', unit: '점' }, { label: '두 판 점수 합', unit: '점' }] } } }, difficulty: 0.15 },
                { prompt: '게임을 마치고 우리 모둠이 지킨 것을 점검 목록에 표시해요.', target: { selfCheck: ['던지는 선을 밟지 않았어요', '공은 굴려서만 보냈어요', '모둠원이 모두 한 번씩 던졌어요', '상대 모둠이 센 점수를 받아들였어요'] }, difficulty: 0.1 },
                FREE('상대 모둠의 점수를 본 그대로 세어 주고, 게임이 끝나면 "규칙을 지켜 줘서 고마워."라고 인사한 뒤 표시해요.'),
              ],
            },
          ],
          {
            teacher: '"오늘 규칙을 지키기가 가장 어려웠던 순간은 언제였나요?" 이기고 싶을 때라는 대답이 나오면 그때 어떻게 참았는지 듣는다. 규칙은 안전·공평·참여를 지켜 준다는 것을 학생 말로 다시 정리한다. 출구 1번을 틀린 학생에게는 그 규칙이 없으면 누가 곤란해지는지 묻는다. 공과 고깔을 정리하며 마친다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '이 규칙은 왜?', slots: [{ id: 'soft', label: '피구에서는 부드러운 공만 써요' }, { id: 'same', label: '두 편의 사람 수를 똑같이 맞춰요' }], cards: ['공에 맞아도 아프지 않아요', '어느 편도 유리하지 않게 공평해요'] }, prompt: '새 규칙에 알맞은 까닭을 이어요.', target: { match: { soft: '공에 맞아도 아프지 않아요', same: '어느 편도 유리하지 않게 공평해요' } }, difficulty: 0.15 },
              { type: 'choice', prompt: '고깔을 세 개 넘어뜨렸는데 친구가 "네 개라고 하자"고 해요. 알맞은 행동은?', options: ['본 그대로 세 개라고 말해요', '한 개쯤은 괜찮으니 네 개라고 말해요', '아무 말도 하지 않아요'], answer: 0, difficulty: 0.15, explain: '이기려고 점수를 바꾸는 것도 규칙 어김이에요. 본 그대로 말해야 게임을 믿고 할 수 있어요.' },
              MOOD('규칙을 지키며 게임해 본 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '규칙에는 까닭이 있어요',
          items: [
            { type: 'table', prompt: '규칙마다 지켜 주는 것을 쓰세요.', columns: ['규칙', '지켜 주는 것(안전·공평·참여)'], cells: [['던지는 선을 밟지 않아요', ''], ['공은 굴려서만 보내요', ''], ['모둠원이 돌아가며 한 번씩', '']] },
            { type: 'table', prompt: '게임 점수를 쓰세요.', columns: ['판', '우리 모둠 점수'], cells: [['첫째 판', ''], ['둘째 판', '']] },
            { type: 'choice', prompt: '"점수는 상대 모둠이 센다"는 규칙이 지켜 주는 것에 ○ 하세요.', options: ['점수를 두고 다투지 않게 해요', '공이 빨라지게 해요', '한 사람만 던지게 해요'], answer: '점수를 두고 다투지 않게 해요' },
            { type: 'short', prompt: '이기고 싶을 때도 규칙을 지켜야 하는 까닭을 쓰세요.' },
          ],
          easy: {
            note: '규칙이 없으면 누가 곤란할까? 다치면 안전, 불공평하면 공평, 빠지면 참여!',
            items: [
              { type: 'choice', prompt: '공을 굴려서만 보내는 까닭은?', options: ['다치지 않게', '빨리 끝내려고'], answer: '다치지 않게' },
              { type: 'short', prompt: '오늘 잘 지킨 규칙 하나를 쓰세요.' },
              { type: 'draw', prompt: '선 뒤에서 공을 굴리는 내 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드 한 장이 미리 놓여 있고, 맞는 곳에 놓으면 바로 표시돼요. 장면 보기가 두 개로 줄어요.',
          base: '규칙과 까닭을 잇고, 이기고 싶은 장면에서 고른 뒤 게임해요.',
          challenge: '장면 보기의 결과는 고른 뒤에만 보이고, 두 판 점수를 더해 적어요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 이기기 위해서라면 규칙을 조금 어겨도 된다고 여긴다 → 선을 한 발 넘는 장면에서 상대 모둠도 그렇게 하면 어떻게 될지 묻는다. ② 규칙을 귀찮은 것으로만 여긴다 → 규칙 하나를 지우면 생길 일을 미리 칠판에 적어 둔다. ③ 점수를 두고 다툰다 → 점수는 상대 모둠이 세고 그대로 받아들이는 규칙을 먼저 정한다. 고깔은 가벼운 것, 공은 부드러운 것을 쓴다.',
      }),
      // ───────────────────────── 40 ─────────────────────────
      L(40, {
        title: '패스 게임 규칙을 바꾸어 보고 모두가 참여하는 규칙 정하기',
        objective: '패스 게임에서 몇 사람만 공을 만지는 문제를 찾아 규칙을 바꾸고, 바꾼 규칙으로 게임해 공을 만진 사람 수가 어떻게 달라졌는지 견주어 말할 수 있다.',
        illustration: art('two teams playing a passing game in a gym, with small paper footprints showing every player touching the ball once before a goal', [
          { motif: 'star', x: 410, y: 58, s: 0.7 }, { motif: 'house', x: 80, y: 196, s: 0.8 }, { motif: 'hills', y: 220 },
          { motif: 'ball', x: 260, y: 196, s: 0.8 }, { motif: 'heart', x: 380, y: 150, s: 0.6 },
          { motif: 'text', x: 240, y: 124, text: '규칙을 바꾸면 게임이 달라져요', size: 22 },
        ]),
        safety: [FACE, BALL, RULE, SIGNAL],
        stages: stages(
          {
            teacher: '먼저 "공을 상대 고깔 문 안으로 굴려 넣으면 1점" 규칙 하나만으로 3분 동안 패스 게임을 한다. 게임 뒤 묻는다. "오늘 공을 한 번도 못 만진 사람?" 손을 든 학생 수를 칠판에 적는다. "규칙은 지켰는데 왜 이런 일이 생겼을까요?" 잘하는 친구 몇 명끼리만 패스했다는 대답이 나오면, 오늘은 규칙을 바꾸어 모두가 참여하는 게임을 만들어 본다고 알린다.',
            student: '3분 게임에서 공을 몇 번 만졌는지 세어 보고 손을 들어 답해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 게임 문제에 맞게 바꿀 규칙 고르기', minutes: 8, tool: 'mindmap',
              task: '패스 게임에서 생긴 문제에 알맞게 바꿀 규칙을 잇고, 모두가 참여하게 하는 규칙을 골라요.',
              teacher: '"문제를 없애는 규칙이어야 해요." 공을 잘 못 만지는 친구를 빼자는 생각이 나오면 그 규칙은 문제를 없애는지, 사람을 없애는지 묻는다.',
              levels: CARD,
              items: [
                { prompt: '패스 게임에서 생긴 문제에 알맞게 바꿀 규칙 카드를 이어요.', toolOptions: { mode: 'match', topic: '이렇게 바꿔요', slots: [{ id: 'few', label: '잘하는 몇 명만 공을 만져요' }, { id: 'crowd', label: '모두 공 쪽으로 몰려 부딪혀요' }, { id: 'hold', label: '한 사람이 공을 오래 들고 있어요' }], cards: ['모둠원이 모두 한 번씩 만져야 점수가 나요', '자기 구역을 정해 그 안에서만 움직여요', '공을 받으면 다섯을 세기 전에 패스해요'] }, target: { match: { few: '모둠원이 모두 한 번씩 만져야 점수가 나요', crowd: '자기 구역을 정해 그 안에서만 움직여요', hold: '공을 받으면 다섯을 세기 전에 패스해요' } }, levels: { easy: { state: { at: { '모둠원이 모두 한 번씩 만져야 점수가 나요': 0 } } } }, difficulty: 0.2 },
                { prompt: '모두가 참여하게 하는 규칙만 골라요.', toolOptions: { mode: 'pick', topic: '모두 참여하는 규칙', cards: ['아직 안 만진 친구에게 먼저 패스해요', '골을 넣는 사람을 판마다 바꿔요', '모둠원 모두 한 번씩 만져야 점수가 나요', '가장 잘하는 친구가 공을 계속 몰아요'] }, target: { pick: ['아직 안 만진 친구에게 먼저 패스해요', '골을 넣는 사람을 판마다 바꿔요', '모둠원 모두 한 번씩 만져야 점수가 나요'] }, levels: { challenge: { prompt: '모두가 참여하게 하는 규칙만 골라요. 그럴듯하지만 틀린 카드가 섞여 있어요.', toolOptions: { cards: ['아직 안 만진 친구에게 먼저 패스해요', '골을 넣는 사람을 판마다 바꿔요', '모둠원 모두 한 번씩 만져야 점수가 나요', '가장 잘하는 친구가 공을 계속 몰아요', '공을 못 받는 친구는 수비만 해요'] } } }, difficulty: 0.2 },
                { prompt: '규칙을 바꾸는 차례대로 카드를 놓아요.', toolOptions: { mode: 'order', cards: ['바꾼 규칙으로 게임해 보고 견주어요', '게임에서 생긴 문제를 찾아요', '그 문제를 없애는 규칙을 함께 정해요'] }, target: { order: ['게임에서 생긴 문제를 찾아요', '그 문제를 없애는 규칙을 함께 정해요', '바꾼 규칙으로 게임해 보고 견주어요'] }, levels: { easy: { state: { at: { '게임에서 생긴 문제를 찾아요': 0 } } } }, difficulty: 0.15,
                  conclude: '규칙은 바꿀 수 있어요. 게임의 문제를 찾아 모두가 함께 정하면 더 나은 게임이 돼요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 규칙을 바꾸고 다시 게임하기', minutes: 12, tool: 'timer',
              task: '반이 고른 새 규칙("모둠원이 모두 한 번씩 만져야 점수")을 넣어 3분 동안 다시 게임해요. 우리 모둠에서 공을 만진 사람 수를 바꾸기 전과 견주어 적어요.',
              teacher: '"시간과 공, 고깔 문은 그대로예요. 바뀐 것은 규칙 하나뿐이에요." 공을 만진 친구는 손목에 고무 밴드를 하나 차게 해 세기 쉽게 한다. 공은 굴리거나 가슴 높이로 패스하고, 몸싸움이 생기면 바로 호루라기로 멈춘다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '다시 게임하기 전에 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['새 규칙을 모둠이 함께 소리 내어 읽었어요', '공을 만지면 손목 밴드를 차기로 했어요', '패스는 가슴 높이 아래로 하기로 했어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '우리 모둠에서 공을 만진 사람 수를 규칙을 바꾸기 전과 뒤로 적어요.', toolOptions: { fields: [{ label: '바꾸기 전 공을 만진 사람', unit: '명', max: 6 }, { label: '바꾼 뒤 공을 만진 사람', unit: '명', max: 6 }] }, target: { records: true }, levels: { challenge: { toolOptions: { fields: [{ label: '바꾸기 전 공을 만진 사람', unit: '명', max: 6 }, { label: '바꾼 뒤 공을 만진 사람', unit: '명', max: 6 }, { label: '늘어난 사람 수', unit: '명', max: 6 }] } } }, difficulty: 0.15 },
                { prompt: '바꾼 규칙으로 게임하고 우리 모둠이 해낸 것을 점검 목록에 표시해요.', target: { selfCheck: ['아직 안 만진 친구를 찾아 패스했어요', '모둠원이 모두 공을 만졌어요', '몸싸움 없이 게임했어요'] }, difficulty: 0.1 },
                FREE('공을 만지지 못한 친구가 있으면 그 친구를 불러 패스해 주고, 판이 끝나면 모둠과 손목 밴드 수를 함께 센 뒤 표시해요.'),
              ],
            },
            {
              id: 'a3', title: '활동 3. 규칙을 바꾸기 전과 뒤 그래프 견주기', minutes: 6, tool: 'chart',
              task: '반 전체에서 공을 만진 사람 수를 규칙을 바꾸기 전과 뒤로 나타낸 그래프를 읽어요.',
              teacher: '"바뀐 것이 규칙 하나뿐인데 막대가 이렇게 달라졌어요." 그래프 수는 예시 자료이고, 반 기록으로 바꾸어 써도 된다고 말한다.',
              levels: { easy: { showValues: true }, base: {}, challenge: {} },
              items: [
                { prompt: '그래프에서 공을 만진 사람이 더 많은 때를 골라요.', toolOptions: { type: 'bar', mode: 'read', title: '공을 만진 사람 수(반 24명)', unit: '명', xLabel: '때', yLabel: '사람 수', max: 24, scale: 2, data: [['규칙 바꾸기 전', 14], ['규칙 바꾼 뒤', 24]], question: '공을 만진 사람이 더 많은 때는?', choices: ['규칙 바꾸기 전', '규칙 바꾼 뒤'] }, target: { pick: 1 }, difficulty: 0.1 },
                { prompt: '규칙을 바꾼 뒤 공을 만진 사람이 몇 명 늘었는지 써요.', toolOptions: { type: 'bar', mode: 'read', title: '공을 만진 사람 수(반 24명)', unit: '명', xLabel: '때', yLabel: '사람 수', max: 24, scale: 2, data: [['규칙 바꾸기 전', 14], ['규칙 바꾼 뒤', 24]], question: '몇 명 늘었나요?' }, target: { value: 10 }, difficulty: 0.2 },
                { prompt: '규칙을 바꾸기 전에 공을 한 번도 못 만진 사람은 몇 명인지 써요.', toolOptions: { type: 'bar', mode: 'read', title: '공을 만진 사람 수(반 24명)', unit: '명', xLabel: '때', yLabel: '사람 수', max: 24, scale: 2, data: [['규칙 바꾸기 전', 14], ['규칙 바꾼 뒤', 24]], question: '바꾸기 전 공을 못 만진 사람은 몇 명인가요?' }, target: { value: 10 }, difficulty: 0.25,
                  hints: ['반 전체 사람 수는 그래프 제목에 있어요.', '전체에서 공을 만진 사람을 빼면 못 만진 사람이에요.', '24명에서 14명을 빼요.'] },
              ],
            },
          ],
          {
            teacher: '"규칙을 바꾸었더니 게임이 덜 재미있어졌나요, 더 재미있어졌나요?" 두 대답을 모두 듣고, 이긴 모둠뿐 아니라 모두가 공을 만진 게임이 어땠는지 묻는다. 출구 1번을 틀린 학생에게는 문제를 없애는 규칙인지 사람을 빼는 규칙인지 다시 묻게 한다. 손목 밴드를 거두며 마친다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '이렇게 바꿔요', slots: [{ id: 'hog', label: '피구에서 한 사람이 공을 계속 독차지해요' }, { id: 'out', label: '피구에서 일찍 아웃된 친구가 오래 구경만 해요' }], cards: ['공을 받은 사람은 다음엔 다른 친구에게 던질 기회를 줘요', '아웃된 친구도 바깥에서 공을 받아 던질 수 있게 해요'] }, prompt: '새 게임 문제에 알맞게 바꿀 규칙을 이어요.', target: { match: { hog: '공을 받은 사람은 다음엔 다른 친구에게 던질 기회를 줘요', out: '아웃된 친구도 바깥에서 공을 받아 던질 수 있게 해요' } }, difficulty: 0.2 },
              { type: 'choice', prompt: '게임 규칙을 바꿀 때 가장 먼저 할 일은?', options: ['게임에서 생긴 문제를 찾아요', '이긴 모둠이 혼자 정해요', '규칙을 모두 없애요'], answer: 0, difficulty: 0.15, explain: '문제를 먼저 찾아야 그 문제를 없애는 규칙을 함께 정할 수 있어요.' },
              MOOD('규칙을 바꾸어 다시 게임해 본 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '규칙을 바꾸면',
          items: [
            { type: 'table', prompt: '우리 모둠 기록을 쓰세요.', columns: ['때', '공을 만진 사람 수'], cells: [['규칙 바꾸기 전', ''], ['규칙 바꾼 뒤', '']] },
            { type: 'short', prompt: '오늘 바꾼 규칙과 그 규칙이 없앤 문제를 쓰세요.' },
            { type: 'choice', prompt: '모두가 참여하게 하는 규칙에 ○ 하세요.', options: ['아직 안 만진 친구에게 먼저 패스해요', '잘하는 친구만 공을 몰아요', '공을 못 받는 친구는 빠져요'], answer: '아직 안 만진 친구에게 먼저 패스해요' },
            { type: 'blank', prompt: '규칙을 바꾸는 차례를 쓰세요.', text: '문제 찾기 → 규칙 ___ → 다시 게임하고 견주기', answer: '정하기' },
            { type: 'short', prompt: '우리 모둠 게임에 더하고 싶은 규칙 하나를 쓰세요.' },
          ],
          easy: {
            note: '규칙은 사람을 빼는 것이 아니라 문제를 없애는 거예요.',
            items: [
              { type: 'choice', prompt: '공을 못 만진 친구가 있으면?', options: ['그 친구에게 패스해요', '모른 척해요'], answer: '그 친구에게 패스해요' },
              { type: 'short', prompt: '오늘 공을 몇 번 만졌는지 쓰세요.' },
              { type: 'draw', prompt: '모둠 친구에게 공을 패스하는 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '첫 카드가 미리 놓여 있고, 그래프 막대 끝에 수가 보여요.',
          base: '문제에 맞는 규칙을 잇고, 바꾼 규칙으로 게임해 기록을 견주어요.',
          challenge: '함정 카드가 섞인 규칙 고르기를 하고, 늘어난 사람 수를 셈해 적어요. 전체에서 빼는 문항을 풀어요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 이기기 위해서라면 잘하는 친구만 공을 만져도 된다고 여긴다 → 공을 못 만진 사람 수를 세어 칠판에 남기고 규칙을 바꾼 뒤와 견준다. ② 문제를 없애는 대신 사람을 빼는 규칙을 낸다 → "그 규칙은 문제를 없애나요, 사람을 없애나요?"로 되묻는다. ③ 새 규칙 때문에 게임이 느려졌다고 불평한다 → 한 판 더 해 보고 익숙해진 뒤 다시 이야기한다. 그래프 수는 예시 자료다.',
      }),
      // ───────────────────────── 41 ─────────────────────────
      L(41, {
        title: '모둠이 정한 규칙을 지키며 굴려 차기 게임 끝까지 하기',
        objective: '굴려 차기 게임에서 모둠이 정한 규칙과 차례를 지키며 세 판을 끝까지 하고, 자기 차례가 아닐 때 한 일을 적을 수 있다.',
        illustration: art('a simple kickball game on a school field with four paper bases, a child kicking a rolled ball while teammates wait in a line and cheer', [
          { motif: 'sun', x: 410, y: 52, s: 0.7 }, { motif: 'cloud', x: 100, y: 48 }, { motif: 'hills', y: 214 },
          { motif: 'ball', x: 250, y: 200, s: 0.8 }, { motif: 'tree', x: 430, y: 212, s: 0.8 },
          { motif: 'text', x: 240, y: 124, text: '차례를 지켜 끝까지!', size: 26 },
        ]),
        safety: [BALL, RULE, '달리는 길(누 사이) 안에는 수비가 서지 않아요.', SIGNAL],
        stages: stages(
          {
            teacher: '굴려 차기 게임(간이 발야구) 방법을 보이며 묻는다. "아홉 명이 한 팀이면 한 사람이 공을 차는 동안 나머지 여덟 명은 무엇을 하고 있을까요?" 기다린다는 대답을 받고 "기다리는 시간은 게임에 참여하지 않는 시간일까요?"라고 묻는다. 대답을 칠판에 남긴 채, 오늘은 모둠이 정한 규칙과 차례를 지키며 세 판을 끝까지 하고, 내 차례가 아닐 때 무엇을 했는지 적는다고 알린다.',
            student: '내 차례를 기다리는 동안 무엇을 할 수 있을지 하나 떠올려 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 공격 차례와 기다릴 때 할 일 알기', minutes: 7, tool: 'mindmap',
              task: '굴려 차기 공격 차례의 움직임을 차례로 놓고, 차례가 아닐 때 할 수 있는 일을 골라요.',
              teacher: '"공을 찬 뒤에는 무엇을 하나요? 다음 사람은 어디에 서 있나요?" 기다리는 동안 할 일을 고르지 못하는 학생에게 지금 누가 어느 누에 있는지 말해 보게 한다.',
              levels: CARD,
              items: [
                { prompt: '굴려 차기 공격 차례의 움직임 카드를 하는 차례대로 놓아요.', toolOptions: { mode: 'order', cards: ['찬 뒤 1루로 달려요', '홈에서 굴러오는 공을 기다려요', '굴러온 공을 발로 차요', '다음 사람과 손뼉을 치고 줄 뒤로 가요'] }, target: { order: ['홈에서 굴러오는 공을 기다려요', '굴러온 공을 발로 차요', '찬 뒤 1루로 달려요', '다음 사람과 손뼉을 치고 줄 뒤로 가요'] }, levels: { easy: { state: { at: { '홈에서 굴러오는 공을 기다려요': 0 } } } }, difficulty: 0.15 },
                { prompt: '내 차례가 아닐 때 할 수 있는 일만 골라요.', toolOptions: { mode: 'pick', topic: '기다리는 동안', cards: ['차는 친구 이름을 부르며 응원해요', '누에 있는 친구에게 "달려!"를 알려 줘요', '다음 차례를 위해 몸을 풀며 공을 지켜봐요', '줄에서 빠져나와 다른 놀이를 해요'] }, target: { pick: ['차는 친구 이름을 부르며 응원해요', '누에 있는 친구에게 "달려!"를 알려 줘요', '다음 차례를 위해 몸을 풀며 공을 지켜봐요'] }, difficulty: 0.15 },
                { prompt: '게임 장면에 알맞은 규칙 지키기 카드를 이어요.', toolOptions: { mode: 'match', topic: '이럴 때는', slots: [{ id: 'cut', label: '빨리 차고 싶어 앞사람보다 먼저 나가고 싶어요' }, { id: 'out', label: '아웃이라는 판정이 나왔어요' }, { id: 'path', label: '수비하다 공을 잡으려는데 달리는 친구가 있어요' }], cards: ['줄 순서대로 내 차례를 기다려요', '판정을 받아들이고 줄 뒤로 가요', '달리는 길을 비키고 공만 잡아요'] }, target: { match: { cut: '줄 순서대로 내 차례를 기다려요', out: '판정을 받아들이고 줄 뒤로 가요', path: '달리는 길을 비키고 공만 잡아요' } }, levels: { easy: { state: { at: { '판정을 받아들이고 줄 뒤로 가요': 1 } } } }, difficulty: 0.2,
                  conclude: '차례를 기다리는 동안에도 응원하고, 알려 주고, 준비하면 게임에 참여하고 있는 거예요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 규칙을 지키며 굴려 차기 세 판 하기', minutes: 19, tool: 'timer',
              task: '모둠이 정한 규칙을 확인하고, 4분 게임·1분 쉬기를 세 판 하도록 타이머를 맞춰 끝까지 해요. 판마다 내 차례가 아닐 때 한 일을 기록해요.',
              teacher: '"이기는 것보다 세 판을 규칙대로 끝까지 하는 것이 오늘의 목표예요." 판 사이 1분에 공격과 수비를 바꾸고 물을 마신다. 아웃 판정은 교사가 하고, 판정에 다투는 장면이 나오면 바로 멈추고 판정을 받아들이는 말("알겠어요")을 하게 한다. 공을 차지 않는 학생이 줄에서 무엇을 하는지 돌며 본다.',
              levels: { easy: {}, base: {}, challenge: { showTotal: true, revealAfterCheck: true } },
              items: [
                { prompt: '4분(240초) 게임·1분(60초) 쉬기를 세 판 하도록 타이머를 맞춰요.', toolOptions: { plan: { work: 120, rest: 30, rounds: 2 }, workStep: 30, restStep: 30 }, target: { plan: { work: 240, rest: 60, rounds: 3 } }, levels: { easy: { state: { plan: { work: 240, rest: 60, rounds: 2 } } }, challenge: { prompt: '4분(240초) 게임·1분(60초) 쉬기를 세 판 하도록 맞추고, 쉬는 시간까지 넣은 전체 시간이 몇 초인지 셈해 봐요.', target: { plan: { work: 240, rest: 60, rounds: 3 }, total: 840 } } }, difficulty: 0.2,
                  hints: ['게임 시간, 쉬는 시간, 판 수를 한 칸씩 맞춰요. 4분이 몇 초인지 먼저 셈해요.', '쉬는 시간은 판과 판 사이에만 들어가요.', '게임 240초, 쉬기 60초, 3판이에요. 전체는 240×3에 60×2를 더해요.'] },
                { prompt: '굴려 차기를 시작하기 전에 모둠이 정한 규칙을 확인하고 눌러 표시해요.', toolOptions: { safety: ['공은 굴려서만 보내요', '달리는 길 안에는 수비가 서지 않아요', '줄 순서대로 차요', '판정은 받아들이고 줄 뒤로 가요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '세 판을 하며 끝까지 참여한 판 수와, 차례가 아닐 때 응원하거나 알려 준 횟수를 적어요.', toolOptions: { fields: [{ label: '끝까지 참여한 판', unit: '판', max: 3 }, { label: '기다리며 응원·알려 준 횟수', unit: '번' }] }, target: { records: true }, difficulty: 0.15 },
                { prompt: '게임을 마치고 해낸 것을 점검 목록에 표시해요.', target: { selfCheck: ['줄 순서대로 내 차례를 기다렸어요', '판정을 받아들였어요', '기다리는 동안 응원하거나 알려 주었어요', '세 판을 끝까지 했어요'] }, difficulty: 0.1 },
                FREE('판이 끝날 때마다 모둠 친구 한 명에게 "기다리면서 ○○ 해 줘서 고마워."라고 말한 뒤 표시해요.'),
              ],
            },
          ],
          {
            teacher: '처음 칠판에 남긴 "기다리는 시간은 참여하지 않는 시간일까요?"로 돌아간다. "오늘 내 차례가 아닐 때 무엇을 했나요?" 응원, 알려 주기, 몸 풀기를 학생 말로 모아 적는다. 출구 2번을 틀린 학생에게는 오늘 기록의 응원 횟수를 다시 보게 한다. 공과 누를 정리하며 마친다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '기다리는 동안', cards: ['다음 수비 자리를 미리 확인해요', '친구가 잘 차면 손뼉을 쳐요', '줄에서 친구와 밀치기 장난을 해요'] }, prompt: '차례를 기다리는 동안 할 수 있는 새 일만 골라요.', target: { pick: ['다음 수비 자리를 미리 확인해요', '친구가 잘 차면 손뼉을 쳐요'] }, difficulty: 0.1 },
              { type: 'choice', prompt: '"차례를 기다리는 시간은 게임에 참여하지 않는 시간이다"라는 말은?', options: ['맞아요', '틀려요. 응원하고 알려 주고 준비하는 것도 참여예요'], answer: 1, difficulty: 0.15, explain: '기다리는 동안 응원하고 누에 있는 친구에게 알려 주면 모둠이 함께 게임하는 거예요.' },
              MOOD('규칙과 차례를 지키며 세 판을 끝까지 해 본 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '차례를 지켜 끝까지',
          items: [
            { type: 'table', prompt: '판마다 기록을 쓰세요.', columns: ['판', '끝까지 참여했나요? (○/✕)', '차례가 아닐 때 한 일'], cells: [['1판', '', ''], ['2판', '', ''], ['3판', '', '']] },
            { type: 'blank', prompt: '공격 차례를 쓰세요.', text: '공을 기다려요 → 공을 차요 → ___로 달려요 → 손뼉 치고 줄 뒤로 가요', answer: '1루' },
            { type: 'choice', prompt: '아웃 판정이 나왔을 때 알맞은 행동에 ○ 하세요.', options: ['"알겠어요." 하고 줄 뒤로 가요', '아니라고 끝까지 우겨요', '게임을 그만둬요'], answer: '"알겠어요." 하고 줄 뒤로 가요' },
            { type: 'short', prompt: '차례를 기다리는 동안 게임에 참여하는 방법 두 가지를 쓰세요.' },
          ],
          easy: {
            note: '기다릴 때도 응원하고, 알려 주고, 준비해요.',
            items: [
              { type: 'choice', prompt: '내 차례가 아닐 때는?', options: ['친구를 응원해요', '다른 놀이를 해요'], answer: '친구를 응원해요' },
              { type: 'short', prompt: '오늘 끝까지 한 판 수를 쓰세요.' },
              { type: 'draw', prompt: '줄에서 친구를 응원하는 내 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '첫 카드가 미리 놓여 있고, 맞는 곳에 놓으면 바로 표시돼요. 타이머는 두 판까지 맞추어져 있어 판 수만 고치면 돼요.',
          base: '공격 차례를 세우고, 타이머를 맞추어 세 판을 규칙대로 끝까지 해요.',
          challenge: '타이머 전체 시간을 셈해 맞추고, 전체 시간은 맞힌 뒤에만 보여요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 차례를 기다리는 시간은 게임에 참여하지 않는 시간이라고 여긴다 → 기다리며 응원·알려 준 횟수를 기록하게 한다. ② 판정에 다툰다 → 판정은 교사가 하고 받아들이는 말을 미리 정한다. ③ 수비가 달리는 길에 서서 부딪힌다 → 누 사이 달리는 길을 바닥에 표시하고 수비는 그 밖에 서게 한다. 굴려 차기는 부드러운 공으로 하고, 홈과 1루 사이는 학생 수준에 맞게 정한다.',
      }),
      // ───────────────────────── 42 ─────────────────────────
      L(42, {
        title: '이어달리기에서 차례와 자리를 지키고 기다리며 준비하기',
        objective: '이어달리기에서 바통을 주고받는 차례와 기다리는 자리를 지키고, 기다리는 동안 다음 달리기를 준비하며 모둠 친구와 번갈아 끝까지 참여할 수 있다.',
        illustration: art('a relay race on a school field with children waiting in lanes behind a line, one child handing a paper baton to the next who is reaching back', [
          { motif: 'sun', x: 410, y: 52, s: 0.7 }, { motif: 'cloud', x: 110, y: 48 }, { motif: 'hills', y: 214 },
          { motif: 'tree', x: 60, y: 210 }, { motif: 'flower', x: 420, y: 218 },
          { motif: 'text', x: 240, y: 124, text: '내 자리에서, 내 차례에', size: 24 },
        ]),
        safety: [SHOE, '달리는 줄(레인)을 벗어나 옆 모둠 쪽으로 가지 않아요.', '바통은 손에서 손으로 건네고, 던지지 않아요.', STOP],
        stages: stages(
          {
            teacher: '바통 하나를 들고 두 학생을 불러 일부러 잘못된 주고받기(받는 사람이 출발선 앞에 나와 서 있기, 바통 던지기)를 보인 뒤 묻는다. "무엇이 잘못되었을까요?" 이어 "이어달리기에서 한 사람이 달리는 동안 나머지 세 사람은 무엇을 하고 있어야 할까요?"라고 묻는다. 오늘은 자기 자리와 차례를 지키며 이어달리기를 하고, 기다리는 시간에 할 일을 직접 해 본다고 알린다.',
            student: '선생님과 친구들의 바통 주고받기를 보고 잘못된 곳을 찾아 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 차례일 때와 기다릴 때 할 일 나누기', minutes: 7, tool: 'mindmap',
              task: '이어달리기 행동 카드를 내 차례일 때 할 일과 기다릴 때 할 일로 나누고, 바통 주고받기 차례를 세워요.',
              teacher: '"기다리는 사람도 할 일이 있어요." 응원을 차례일 때 할 일에 넣은 학생에게, 달리는 사람이 응원까지 할 수 있는지 묻는다. 받는 사람이 손을 뒤로 내밀고 앞을 본 채 기다린다는 것을 몸으로 보인다.',
              levels: CARD,
              items: [
                { prompt: '이어달리기 행동 카드를 내 차례일 때와 기다릴 때로 나누어요.', toolOptions: { topic: '이어달리기', slots: ['내 차례일 때', '기다릴 때'], cards: ['내 줄 안에서 힘껏 달려요', '바통을 다음 친구 손에 건네요', '출발선 뒤 내 자리에 서 있어요', '달리는 친구 이름을 부르며 응원해요'] }, target: { sort: { '내 차례일 때': ['내 줄 안에서 힘껏 달려요', '바통을 다음 친구 손에 건네요'], '기다릴 때': ['출발선 뒤 내 자리에 서 있어요', '달리는 친구 이름을 부르며 응원해요'] } }, levels: { easy: { state: { at: { '내 줄 안에서 힘껏 달려요': 0 } } }, challenge: { prompt: '이어달리기 행동 카드를 두 가지로 나누어요. 이어달리기 규칙에 맞지 않는 카드는 어느 가지에도 넣지 않아요.', toolOptions: { cards: ['내 줄 안에서 힘껏 달려요', '바통을 다음 친구 손에 건네요', '출발선 뒤 내 자리에 서 있어요', '달리는 친구 이름을 부르며 응원해요', '빨리 받으려고 출발선 앞으로 나가 기다려요'] } } }, difficulty: 0.15 },
                { prompt: '바통을 주고받는 움직임 카드를 하는 차례대로 놓아요.', toolOptions: { mode: 'order', cards: ['바통을 받으면 앞을 보고 달려 나가요', '받는 사람이 출발선 뒤에서 한 손을 뒤로 내밀어요', '주는 사람이 "받아!" 하며 바통을 손바닥에 올려요'] }, target: { order: ['받는 사람이 출발선 뒤에서 한 손을 뒤로 내밀어요', '주는 사람이 "받아!" 하며 바통을 손바닥에 올려요', '바통을 받으면 앞을 보고 달려 나가요'] }, levels: { easy: { state: { at: { '받는 사람이 출발선 뒤에서 한 손을 뒤로 내밀어요': 0 } } } }, difficulty: 0.15 },
                { prompt: '이어달리기에서 생긴 일에 알맞은 행동 카드를 이어요.', toolOptions: { mode: 'match', topic: '이럴 때는', slots: [{ id: 'drop', label: '바통을 떨어뜨렸어요' }, { id: 'early', label: '다음 친구가 바통을 받기 전에 출발선을 넘었어요' }, { id: 'last', label: '우리 모둠이 꼴찌로 달리고 있어요' }], cards: ['떨어뜨린 사람이 주워서 다시 건네요', '출발선 뒤로 돌아와 다시 받아요', '끝까지 힘껏 달리고 응원해요'] }, target: { match: { drop: '떨어뜨린 사람이 주워서 다시 건네요', early: '출발선 뒤로 돌아와 다시 받아요', last: '끝까지 힘껏 달리고 응원해요' } }, levels: { easy: { state: { at: { '끝까지 힘껏 달리고 응원해요': 2 } } } }, difficulty: 0.2,
                  conclude: '내 차례에는 줄 안에서 힘껏, 기다릴 때는 내 자리에서 응원하고 준비하는 것이 모두 이어달리기예요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 차례와 자리를 지키며 이어달리기 세 번 하기', minutes: 15, tool: 'timer',
              task: '모둠 네 명이 달리는 차례를 정하고, 이어달리기를 세 번 해요. 기다리는 동안 몸을 풀고 응원하며, 바통 주고받기를 바르게 한 횟수를 적어요.',
              teacher: '"달리는 차례는 매번 바꾸어, 모두가 첫째·마지막을 해 봐요." 한 번이 끝날 때마다 모둠이 모여 바통 주고받기를 점검한다. 출발선을 먼저 넘으면 벌칙 대신 돌아와 다시 받게 한다. 꼴찌 모둠이 마지막 주자까지 달리는 동안 다른 모둠이 손뼉으로 응원하게 한다.',
              levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
              items: [
                { prompt: '이어달리기를 시작하기 전에 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['우리 모둠 달리는 줄(레인)을 알아요', '바통은 손에서 손으로 건네기로 했어요', '출발선 뒤 내 자리를 알아요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '세 번 달리며 바통 주고받기를 바르게 한 횟수와 기다리는 동안 응원한 번 수를 적어요.', toolOptions: { fields: [{ label: '바르게 주고받은 횟수', unit: '번', max: 3 }, { label: '기다리며 응원한 번 수', unit: '번', max: 3 }] }, target: { records: true }, levels: { challenge: { toolOptions: { fields: [{ label: '바르게 주고받은 횟수', unit: '번', max: 3 }, { label: '기다리며 응원한 번 수', unit: '번', max: 3 }, { label: '셋째 번 모둠 기록', unit: '초', step: 0.1 }] } } }, difficulty: 0.15 },
                { prompt: '이어달리기를 마치고 해낸 것을 점검 목록에 표시해요.', target: { selfCheck: ['출발선 뒤 내 자리에서 기다렸어요', '바통을 손에서 손으로 건넸어요', '내 차례가 아닐 때 응원했어요', '세 번 모두 끝까지 달렸어요'] }, difficulty: 0.1 },
                FREE('한 번이 끝날 때마다 모둠이 모여 바통 주고받기에서 잘된 점 하나를 말하고, 달리는 차례를 바꾼 뒤 표시해요.'),
              ],
            },
            {
              id: 'a3', title: '활동 3. 차례와 자리 장면에서 고르기', minutes: 4, tool: 'emotion',
              task: '차례와 자리를 지키기 어려운 장면을 읽고 어떻게 할지 골라요.',
              teacher: '"모둠이 이기고 있어도, 지고 있어도 차례와 자리는 같아요." 차례를 바꾸자는 보기를 고른 학생에게 그 친구는 언제 달리게 되는지 묻는다.',
              levels: BRANCH,
              items: [
                { prompt: '이어달리기 장면을 읽고 어떻게 할지 골라요.', toolOptions: { mode: 'branch', who: '민지', situation: '민지네 모둠이 지고 있어요. 모둠 친구가 "달리기 느린 서연이는 빼고 내가 두 번 달릴게."라고 말해요.', ask: '민지는 어떻게 하면 좋을까요?', motif: 'star', choices: [{ id: 'keep', text: '"정한 차례대로 모두 달리자."라고 말해요', result: '모둠 네 명이 모두 달리고 함께 손뼉을 쳐요', mood: '뿌듯함' }, { id: 'agree', text: '이기고 싶어서 그러자고 해요', result: '서연이가 줄에서 혼자 고개를 숙여요', mood: '속상함', why: '정한 차례를 바꾸어 친구를 빼는 것은 모두가 참여하는 규칙을 어기는 거예요.' }] }, target: { choice: 'keep' }, difficulty: 0.15 },
                { prompt: '기다리는 장면을 읽고 어떻게 할지 골라요.', toolOptions: { mode: 'branch', who: '준호', situation: '준호는 넷째 주자예요. 첫째 친구가 달리기 시작했어요.', ask: '준호는 기다리는 동안 무엇을 하면 좋을까요?', motif: 'leaf', choices: [{ id: 'ready', text: '발목을 돌리며 몸을 풀고, 달리는 친구를 응원해요', result: '바통을 받자마자 힘차게 출발해요', mood: '신남' }, { id: 'sit', text: '아직 멀었으니 앉아서 쉬어요', result: '갑자기 바통을 받아 허둥대다 떨어뜨려요', mood: '놀람', why: '기다리는 동안 준비하는 것도 참여예요.' }, { id: 'go', text: '빨리 받으려고 출발선 앞으로 나가 기다려요', result: '바통을 받기 전에 출발선을 넘어 다시 해야 해요', mood: '속상함', why: '받는 자리는 출발선 뒤예요.' }] }, target: { choice: 'ready' }, levels: { easy: { toolOptions: { choices: [{ id: 'ready', text: '발목을 돌리며 몸을 풀고, 달리는 친구를 응원해요', result: '바통을 받자마자 힘차게 출발해요', mood: '신남' }, { id: 'sit', text: '아직 멀었으니 앉아서 쉬어요', result: '갑자기 바통을 받아 허둥대다 떨어뜨려요', mood: '놀람', why: '기다리는 동안 준비하는 것도 참여예요.' }] } } }, difficulty: 0.15 },
                { prompt: '오늘 이어달리기에서 모둠 친구와 함께한 마음은 얼마나 즐거웠나요? 솔직하게 골라요.', toolOptions: { mode: 'scale', situation: '모둠 네 명이 차례를 바꾸어 가며 이어달리기를 세 번 했어요.', feeling: '기쁨', steps: 3, scaleLabels: ['조금', '보통', '많이'], ask: '얼마나 즐거웠나요?' }, target: { level: 'any' }, difficulty: 0.05 },
              ],
            },
          ],
          {
            teacher: '"오늘 기다리는 동안 무엇을 했나요? 그게 모둠에 어떤 도움이 되었나요?" 서너 명에게 듣는다. 지난 시간과 이어서, 기다리는 시간도 참여라는 것을 학생 말로 정리한다. 출구 1번을 틀린 학생에게는 바통을 받는 손과 자리를 몸으로 다시 보여 주게 한다. 천천히 걸으며 숨을 고르고 마친다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { topic: '이어달리기', slots: ['내 차례일 때', '기다릴 때'], cards: ['다음 주자 손바닥에 바통을 올려요', '발목을 돌리며 몸을 풀어요', '마지막 주자가 들어올 때까지 응원해요'] }, prompt: '새 행동 카드를 내 차례일 때와 기다릴 때로 나누어요.', target: { sort: { '내 차례일 때': ['다음 주자 손바닥에 바통을 올려요'], '기다릴 때': ['발목을 돌리며 몸을 풀어요', '마지막 주자가 들어올 때까지 응원해요'] } }, difficulty: 0.15 },
              { type: 'choice', prompt: '이어달리기에서 바통을 받는 사람이 기다리는 자리는?', options: ['출발선 뒤 내 자리', '출발선 앞', '옆 모둠 줄'], answer: 0, difficulty: 0.1, explain: '출발선 뒤에서 손을 뒤로 내밀고 기다려야 바르게 주고받을 수 있어요.' },
              MOOD('차례와 자리를 지키며 이어달리기를 해 본 오늘 마음은 어땠나요?'),
            ],
          },
        ),
        worksheet: {
          title: '내 자리에서, 내 차례에',
          items: [
            { type: 'table', prompt: '세 번 달린 기록을 쓰세요.', columns: ['번', '내 달리는 차례', '바르게 주고받았나요? (○/✕)'], cells: [['첫째', '', ''], ['둘째', '', ''], ['셋째', '', '']] },
            { type: 'blank', prompt: '바통 주고받기 차례를 쓰세요.', text: '받는 사람이 손을 ___로 내밀어요 → 주는 사람이 "받아!" 하며 올려요 → 받으면 앞을 보고 달려요', answer: '뒤' },
            { type: 'choice', prompt: '바통을 떨어뜨렸을 때 알맞은 행동에 ○ 하세요.', options: ['떨어뜨린 사람이 주워 다시 건네요', '받는 사람이 그냥 달려가요', '바통 없이 달려요'], answer: '떨어뜨린 사람이 주워 다시 건네요' },
            { type: 'short', prompt: '차례를 기다리는 동안 내가 한 일과, 그것이 모둠에 도움이 된 점을 쓰세요.' },
          ],
          easy: {
            note: '내 차례에는 줄 안에서 힘껏, 기다릴 때는 출발선 뒤에서 응원과 준비!',
            items: [
              { type: 'choice', prompt: '바통은 어떻게 건네나요?', options: ['손에서 손으로', '던져서'], answer: '손에서 손으로' },
              { type: 'short', prompt: '오늘 내가 달린 차례를 쓰세요.' },
              { type: 'draw', prompt: '바통을 주고받는 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드 한 장이 미리 놓여 있고, 맞는 곳에 놓으면 바로 표시돼요. 장면 보기가 두 개로 줄어요.',
          base: '차례일 때와 기다릴 때 할 일을 나누고, 이어달리기를 세 번 해요.',
          challenge: '규칙에 맞지 않는 함정 카드가 섞여 있고, 시간 재기로 모둠 기록을 적어요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 차례를 기다리는 시간은 게임에 참여하지 않는 시간이라고 여긴다 → 기다리며 몸을 풀고 응원한 횟수를 기록하게 하고, 준비한 주자가 더 힘차게 출발하는 것을 보게 한다. ② 빨리 받으려고 출발선 앞으로 나온다 → 출발선 뒤에 발 모양 표시를 붙여 둔다. ③ 이기려고 달리기 느린 친구를 빼자고 한다 → 정한 차례를 바꾸지 않는 것도 규칙이라고 말한다. 달리는 줄은 넓게 띄우고, 바통은 부드러운 것을 쓴다.',
      }),
      // @@NEXT@@
    ],
  });
})();
