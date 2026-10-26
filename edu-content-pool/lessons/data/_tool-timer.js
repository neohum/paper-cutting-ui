/* 검사용 차시: 체육 활동판(timer) 교구의 모든 칸(안전 점검·순서 카드·구간 타이머·전체 시간·기록판·스스로 점검)을 한 차시에서 쓴다.
 * 5학년 1학기 체육 1. 운동 */
PaperLessons.register({
  id: '_tool-timer',
  schema: 'edu-lesson.v1',
  catalog: { unit: 'g5-체육-1학기-1', lesson: 2 },
  grade: 5, subject: '체육', unitTitle: '1. 운동',
  title: '구간 운동 계획 세우고 내 기록 재기',
  objective: '안전을 확인하고 준비·본·정리 운동의 차례를 세운 뒤, 운동과 쉬기를 되풀이하는 구간 운동을 계획하고 내 기록을 재어 적을 수 있다.',
  standards: ['[6체01-01]'],
  minutes: 40,
  formats: ['chromebook', 'projector', 'print'],
  illustration: {
    prompt: 'Layered paper-cut illustration of children doing jumping jacks and stretching on a sunny school field with a large paper stopwatch and a round interval timer, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.',
    scene: { viewBox: [480, 270], layers: [
      { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 90, y: 50 }, { motif: 'hills', y: 206 },
      { motif: 'tree', x: 60, y: 200 }, { motif: 'tree', x: 430, y: 206, s: 0.8 },
      { motif: 'text', x: 240, y: 132, text: '운동 30초 · 쉬기 10초', size: 24 },
    ] },
  },
  safety: [
    '활동 전에 운동장이나 강당 바닥에 돌·물기가 없는지 살펴요.',
    '친구와 팔을 벌려 닿지 않을 만큼 떨어져 서요.',
    '숨이 너무 차거나 어지러우면 바로 멈추고 선생님께 말해요.',
  ],
  stages: [
    {
      id: 'intro', title: '도입', minutes: 6,
      teacher: '"달리기를 하기 전에 무엇부터 할까요?" 학생 답을 받아 시연 단추로 준비운동·본운동·정리운동 카드가 제자리를 찾는 모습을 보여 준다. "왜 준비운동을 먼저 할까요?"를 묻고 근육과 관절을 데우는 까닭을 짚는다. 안전 약속 세 가지를 함께 읽는다.',
      student: '운동하기 전과 뒤에 하는 일을 떠올리고, 안전 약속을 함께 읽어 봅시다.',
      demo: { tool: 'timer', options: { cards: ['본운동', '정리운동', '준비운동'] }, sequence: [{ order: ['준비운동', '본운동', '정리운동'] }] },
    },
    {
      id: 'main', title: '전개', minutes: 26,
      activities: [
        {
          id: 'a1', title: '활동 1. 안전 점검하고 운동 차례 세우기', minutes: 7, tool: 'timer',
          teacher: '"눈으로 확인한 것만 눌러요." 실제로 둘레를 살펴본 뒤 표시하게 한다. 순서 카드에서 본운동을 맨 앞에 두는 학생에게 "몸이 차가울 때 바로 세게 달리면 어떻게 될까요?"를 묻는다.',
          task: '활동하기 전에 안전을 점검하고, 운동 카드를 하는 차례대로 놓아요.',
          levels: {
            easy: {},
            base: {},
            challenge: {},
          },
          items: [
            { prompt: '운동장에 나가기 전에 안전 점검 목록을 하나씩 확인하고 눌러 표시해요.', toolOptions: { safety: ['바닥에 돌이나 물기가 없어요', '친구와 팔 간격만큼 떨어졌어요', '신발 끈을 단단히 묶었어요'] }, target: { safety: true }, difficulty: 0.1,
              predict: { q: '안전 점검은 언제 하는 것이 좋을까요?', options: ['운동하기 전', '운동하는 중', '운동이 끝난 뒤'] },
              conclude: '안전 점검은 몸을 움직이기 전에 해요.' },
            { prompt: '세 운동 카드를 하는 차례대로 놓아요.', toolOptions: { cards: ['본운동', '정리운동', '준비운동'] }, target: { order: ['준비운동', '본운동', '정리운동'] }, difficulty: 0.2 },
            { prompt: '물 마시기 카드까지 넣어 차례를 세워요. 물은 본운동을 마친 뒤 정리운동 전에 마셔요.', toolOptions: { cards: ['정리운동', '물 마시기', '준비운동', '본운동'] }, target: { order: ['준비운동', '본운동', '물 마시기', '정리운동'] }, difficulty: 0.35 },
          ],
        },
        {
          id: 'a2', title: '활동 2. 구간 운동 타이머 맞추기', minutes: 10, tool: 'timer',
          teacher: '"운동 몇 초, 쉬기 몇 초, 몇 번인가요?" 문제에서 세 수에 밑줄을 긋게 한다. 전체 시간 문항에서는 "마지막 번에도 쉬나요?"를 물어 쉬는 횟수가 하나 적다는 것을 그림으로 확인한다. 타이머는 시작을 눌러야 돌고, 신호음은 켤 때만 난다.',
          task: '운동 시간·쉬는 시간·되풀이 횟수를 맞추어 구간 운동을 계획해요.',
          levels: {
            easy: { workStep: 10, restStep: 10, showTotal: true },
            base: { showTotal: true },
            challenge: { showTotal: false },
          },
          items: [
            { prompt: '제자리 뛰기를 30초 하고 10초 쉬기를 4번 되풀이하도록 타이머를 맞춰요.', toolOptions: { plan: { work: 20, rest: 20, rounds: 2 } }, target: { plan: { work: 30, rest: 10, rounds: 4 } }, difficulty: 0.25,
              conclude: '운동·쉬기·횟수 세 수를 맞추면 구간 운동 계획이 돼요.' },
            { prompt: '팔 벌려 뛰기를 20초 하고 20초 쉬기를 3번 하도록 맞춰요.', toolOptions: { plan: { work: 30, rest: 10, rounds: 3 } }, target: { plan: { work: 20, rest: 20, rounds: 3 } }, difficulty: 0.25 },
            { prompt: '운동을 40초씩 하고 쉬기는 20초씩 해서, 전체 시간이 2분 40초(160초)가 되도록 횟수를 맞춰요.', toolOptions: { plan: { work: 40, rest: 20, rounds: 2 }, showTotal: true, revealAfterCheck: true }, target: { plan: { work: 40, rest: 20 }, total: 160 }, difficulty: 0.55 },
          ],
        },
        {
          id: 'a3', title: '활동 3. 내 기록 재어 적고 점검하기', minutes: 9, tool: 'timer',
          teacher: '"한 번 잴 때마다 바로 적어요." 짝이 시간 재기를 누르고 다른 짝이 운동한 뒤 바꾼다. 남과 견주지 말고 내 1회와 2회를 견주게 한다. 스스로 점검은 정말 한 것만 표시하게 한다.',
          task: '짝과 번갈아 운동하며 기록을 재어 칸에 적고, 오늘 활동을 스스로 점검해요.',
          levels: {
            easy: {},
            base: {},
            challenge: { stopwatch: true },
          },
          items: [
            { prompt: '30초 동안 줄넘기를 한 횟수를 두 번 재어 칸에 적어요.', toolOptions: { fields: ['1회', '2회'], unit: '회' }, target: { records: true }, difficulty: 0.2 },
            { prompt: '보기 표의 오래 매달리기 기록(12.5초, 14초)을 칸에 그대로 옮겨 적어요.', toolOptions: { fields: [{ label: '1회', unit: '초', step: 0.5 }, { label: '2회', unit: '초', step: 0.5 }] }, target: { records: [12.5, 14] }, difficulty: 0.3 },
            { prompt: '오늘 활동을 돌아보고 해낸 것을 점검 목록에 표시해요.', target: { selfCheck: ['준비운동을 빠짐없이 했어요', '계획한 횟수만큼 운동했어요', '숨이 찰 때 쉬는 시간을 지켰어요'] }, difficulty: 0.1 },
          ],
        },
      ],
    },
    {
      id: 'wrapup', title: '정리', minutes: 8,
      teacher: '"오늘 내 1회와 2회 기록은 어떻게 달랐나요?" 남과 견주지 않고 나의 변화를 말하게 한다. 정리운동을 함께 하며 출구 1번에서 운동과 쉬기를 바꾸어 넣은 학생은 다음 시간에 계획 카드를 소리 내어 읽게 한다.',
      exitTicket: [
        { type: 'tool', tool: 'timer', options: { plan: { work: 10, rest: 10, rounds: 2 } }, prompt: '25초 운동하고 5초 쉬기를 3번 하도록 타이머를 맞추세요.', target: { plan: { work: 25, rest: 5, rounds: 3 } }, difficulty: 0.25 },
        { type: 'choice', prompt: '운동을 마친 뒤 가장 먼저 해야 할 것은 무엇인가요?', options: ['바로 앉아 쉬기', '정리운동 하기', '물을 많이 한꺼번에 마시기'], answer: 1, difficulty: 0.2, explain: '정리운동으로 몸을 천천히 식혀야 다치지 않아요.' },
        { type: 'short', prompt: '내 기록을 더 늘리려면 무엇을 연습하면 좋을지 한 줄로 쓰세요.' },
        { type: 'mood', prompt: '오늘 체육 활동은 어땠나요?' },
      ],
    },
  ],
  worksheet: {
    title: '구간 운동 계획과 내 기록',
    items: [
      { type: 'figure', prompt: '구간 운동 계획표를 보고, 전체 운동 시간을 구하세요.', tool: 'timer', options: { plan: { work: 30, rest: 10, rounds: 4 } }, figures: [{ state: { plan: { work: 30, rest: 10, rounds: 4 } }, caption: '운동 30초 · 쉬기 10초 · 4번' }], answer: '30×4 + 10×3 = 150초(2분 30초)' },
      { type: 'figure', prompt: '운동 카드에 차례대로 1, 2, 3을 쓰세요.', tool: 'timer', options: { cards: ['본운동', '정리운동', '준비운동'] }, figures: [{ state: { order: ['본운동', '정리운동', '준비운동'] }, caption: '차례 번호 쓰기' }], answer: '준비운동 1, 본운동 2, 정리운동 3' },
      { type: 'table', prompt: '내 기록을 적고, 1회와 2회 가운데 더 나은 기록에 ○ 하세요.', columns: ['종목', '1회', '2회'], cells: [['30초 줄넘기(회)', '', ''], ['오래 매달리기(초)', '', '']] },
      { type: 'check', prompt: '운동 전에 확인한 안전 약속에 ✓ 하세요.', options: ['바닥에 돌·물기가 없어요', '친구와 떨어져 섰어요', '신발 끈을 묶었어요'] },
      { type: 'short', prompt: '구간 운동에서 쉬는 시간이 왜 필요한지 쓰세요.' },
    ],
    easy: {
      note: '운동 시간을 횟수만큼 더하고, 쉬는 시간은 한 번 적게 더해요.',
      items: [
        { type: 'figure', prompt: '계획표를 보고 운동을 몇 번 하는지 쓰세요.', tool: 'timer', options: { plan: { work: 20, rest: 10, rounds: 3 } }, figures: [{ state: { plan: { work: 20, rest: 10, rounds: 3 } }, caption: '운동 20초 · 쉬기 10초' }], answer: '3번' },
        { type: 'choice', prompt: '가장 먼저 하는 운동에 ○ 하세요.', options: ['준비운동', '본운동', '정리운동'], answer: '준비운동' },
        { type: 'short', prompt: '오늘 내 줄넘기 기록을 쓰세요.' },
      ],
    },
  },
  differentiation: {
    easy: '타이머 시간을 10초씩 올리고 내려 맞추기 쉬워요.',
    base: '타이머 시간을 5초씩 맞추고, 전체 시간을 화면에서 확인해요.',
    challenge: '전체 시간이 화면에 보이지 않아 스스로 셈해서 계획을 확인하고, 기록판의 시간 재기로 직접 기록을 재요.',
  },
  teacherNotes: '자주 보이는 어려움: ① 운동 시간과 쉬는 시간을 바꾸어 넣는다 → 문제를 소리 내어 읽고 "먼저 운동, 그다음 쉬기"를 짚는다(교구가 "운동 시간과 쉬는 시간이 바뀌었어요"라고 답한다). ② 전체 시간에서 마지막 쉬기까지 더한다 → 구간 그림에서 쉬기 칸을 센다. ③ 본운동부터 시작하려 한다 → 몸을 데우는 까닭을 말로 정리한다. ④ 친구 기록과 견준다 → 나의 1회·2회 변화만 말하게 한다. 실제 운동량은 교구가 판정하지 않으므로 교사가 관찰한다. 신호음은 판의 단추로 켤 때만 나고, 타이머는 시작을 눌러야 돈다.',
});
