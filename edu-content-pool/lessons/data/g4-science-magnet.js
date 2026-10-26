/* 4학년 1학기 과학 1. 자석의 이용 — 자석의 극, 극끼리의 힘, 나침반 바늘 (예상 → 관찰 → 정리)
 * 실물 실험에서는 자석이 약하거나 철제 책상 때문에 결과가 흔들린다. 디지털 실험대로 같은 결과를 되풀이해 보고 실물로 확인한다.
 */
PaperLessons.register({
  id: 'g4-science-magnet',
  schema: 'edu-lesson.v1',
  catalog: { unit: 'g4-과학-1학기-1', lesson: 4 },
  grade: 4, subject: '과학', unitTitle: '1. 자석의 이용',
  title: '자석의 극과 나침반 바늘',
  objective: '자석의 두 극이 서로 끌어당기거나 밀어내는 것을 관찰하고, 나침반 바늘이 가리키는 방향을 자석의 극으로 설명할 수 있다.',
  standards: ['[4과09-01]', '[4과09-02]', '[4과09-03]'],
  minutes: 40,
  formats: ['chromebook', 'projector', 'print'],
  safety: [
    '자석을 휴대 전화, 컴퓨터, 카드 가까이에 두지 않아요.',
    '센 자석끼리 갑자기 붙으면 손가락이 끼일 수 있어요. 천천히 가까이 가져가요.',
    '자석을 떨어뜨리거나 두드리지 않아요. 깨지거나 힘이 약해져요.',
  ],
  illustration: {
    prompt: "Layered paper-cut illustration of a red and blue paper bar magnet on a classroom table with tiny paper clips clinging only to its two ends, a second red and blue bar magnet nearby, and iron filings forming curved lines between the two ends of the first magnet, no compass, no words or letters anywhere, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.",
    image: 'img/g4-science-magnet.webp', size: [1200, 800],
    scene: { viewBox: [480, 270], layers: [
      { motif: 'sun', x: 410, y: 58, s: 0.8 }, { motif: 'cloud', x: 110, y: 50 }, { motif: 'cloud', x: 300, y: 38, s: 0.7 },
      { motif: 'hills', y: 206, colors: ['sky', 'mint', 'lavender'] },
      { motif: 'star', x: 200, y: 104, color: 'rose' }, { motif: 'star', x: 280, y: 104, color: 'sky' },
      { motif: 'house', x: 90, y: 222, color: 'buttercup' }, { motif: 'tree', x: 400, y: 216, s: 0.85 },
      { motif: 'text', x: 240, y: 156, text: '자석의 두 극을 찾아요', size: 22 },
    ] },
  },
  stages: [
    {
      id: 'intro', title: '도입', minutes: 6,
      teacher: '"막대자석을 클립 더미에 넣었다 꺼내면 클립은 어디에 많이 붙을까요?" 먼저 예상하게 한 뒤 실제로 보여 준다(양 끝에 많이 붙는다 → 자석의 극). 이어서 시연 단추로 자석을 나침반 가까이 가져가면 바늘이 돌아가는 모습을 보여 주고 "바늘은 왜 돌아갈까요?"를 오늘의 질문으로 남긴다.',
      student: '막대자석에서 클립이 가장 많이 붙는 곳은 어디일까요? 먼저 예상해 보고 선생님 실험을 보세요.',
      demo: { tool: 'magnet', options: { mode: 'compass' }, sequence: [{ needle: '동' }] },
    },
    {
      id: 'main', title: '전개', minutes: 28,
      activities: [
        {
          id: 'a1', title: '활동 1. 자석끼리 가까이 가져가기', minutes: 8, tool: 'magnet',
          options: { mode: 'poles' },
          task: '자석 나를 끌어 자석 가의 끝에 대어 봅시다. 먼저 어떻게 될지 예상하고, 끝에 대 본 뒤 결과를 확인해요.',
          teacher: '"같은 극끼리, 다른 극끼리 가까이 가져가면 어떻게 될까요?" 예상과 결과를 견주게 하고, 끝나면 실제 막대자석 두 개로 같은 실험을 해 본다(손가락 끼임 주의).',
          levels: {
            easy: { showWords: true },
            base: { showWords: false },
            challenge: { showWords: false },
          },
          items: [
            { prompt: '자석 나의 S극을 자석 가의 N극에 대어 보세요.', target: { attract: true }, difficulty: 0.1,
              predict: { q: 'N극과 S극을 가까이 하면 어떻게 될까요?', options: ['끌어당겨요', '밀어내요', '아무 일도 없어요'], answer: 0 } },
            { prompt: '이번에는 자석 나를 뒤집어, 나의 N극을 가의 N극에 대어 보세요.', target: { repel: true }, difficulty: 0.16,
              predict: { q: 'N극과 N극을 가까이 하면 어떻게 될까요?', options: ['끌어당겨요', '밀어내요', '아무 일도 없어요'], answer: 1 },
              conclude: '같은 극끼리는 서로 밀어내고, 다른 극끼리는 서로 끌어당겨요.' },
            { extra: true, prompt: '자석 가의 S극(왼쪽 끝)에서도 붙는지 알아보세요. 나를 가의 S극에 붙여 보세요.', target: { attract: true }, difficulty: 0.2 },
          ],
        },
        {
          id: 'a2', title: '활동 2. 나침반 바늘과 자석', minutes: 11, tool: 'magnet',
          options: { mode: 'compass' },
          task: '자석을 치우거나 옮기며 나침반 바늘의 N극(빨강)이 어느 쪽을 가리키는지 살펴봅시다. 화면 위쪽이 북쪽이에요.',
          teacher: '"자석이 없을 때 나침반 바늘의 N극은 어디를 가리키나요? 자석을 가까이 하면?" 바늘도 작은 자석이라 자석의 극에 끌리거나 밀린다는 것을 활동 1과 이어서 설명하게 한다. 지구도 큰 자석처럼 작용해 바늘 N극이 북쪽을 가리킨다는 것은 정리 단계에서 짚는다.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '자석을 치우고 나침반 바늘을 살펴보세요.', target: { away: true }, difficulty: 0.08,
              predict: { q: '자석을 치우면 나침반 바늘의 N극은 어디를 가리킬까요?', options: ['모두 북쪽', '나침반마다 달라요', '모두 남쪽'], answer: 0 },
              conclude: '자석이 없으면 나침반 바늘의 N극은 늘 북쪽을 가리켜요.' },
            { prompt: '나침반 1의 바늘 N극이 동쪽을 가리키게 자석을 놓아 보세요.', state: { magnet: { x: 220, y: 162, r: 90 } }, target: { needle: '동', compass: 0 }, difficulty: 0.26,
              predict: { q: '바늘 N극을 동쪽으로 돌리려면 나침반의 동쪽에 자석의 어느 극을 두어야 할까요?', options: ['N극', 'S극'], answer: 1 },
              conclude: '나침반 바늘도 자석이라 바늘 N극은 자석의 S극에 끌려가요.' },
            { prompt: '나침반 4의 바늘 N극이 서쪽을 가리키게 자석을 놓아 보세요.', state: { magnet: { x: 220, y: 162, r: 90 } }, target: { needle: '서', compass: 3 }, difficulty: 0.28 },
            { extra: true, prompt: '나침반 2의 바늘 N극이 남쪽을 가리키게 자석을 놓아 보세요.', state: { magnet: { x: 220, y: 162, r: 0 } }, target: { needle: '남', compass: 1 }, difficulty: 0.2 },
          ],
        },
        {
          id: 'a3', title: '활동 3. 극 표시가 지워진 자석', minutes: 9, tool: 'magnet', pair: true,
          options: { mode: 'hidden' },
          task: '색과 글자가 지워진 자석이 있어요. 나침반을 양 끝에 대어 보고, 어느 끝이 N극인지 알아내 봅시다.',
          teacher: '"나침반으로 자석의 극을 알아낼 수 있을까요?" 짝과 한 사람은 나침반을 옮기고 한 사람은 바늘의 어느 극이 끝을 향하는지 말한다. 끝나면 실제 극 표시를 가린 자석과 나침반으로 확인한다.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '나침반을 자석 끝에 대어 보고, N극인 끝을 고르세요.', toolOptions: { hiddenN: 'ㄱ' }, target: { nEnd: 'ㄱ' }, difficulty: 0.24,
              predict: { q: '자석의 N극에 나침반을 대면 바늘의 어느 극이 끌려올까요?', options: ['바늘 N극(빨강)', '바늘 S극(파랑)'], answer: 1 } },
            { prompt: '다른 자석이에요. 나침반으로 N극인 끝을 찾아 고르세요.', toolOptions: { hiddenN: 'ㄴ' }, target: { nEnd: 'ㄴ' }, difficulty: 0.24,
              conclude: '나침반 바늘의 S극이 끌려가는 쪽이 자석의 N극이에요. 나침반으로 자석의 극을 알 수 있어요.' },
          ],
        },
      ],
    },
    {
      id: 'wrapup', title: '정리', minutes: 6,
      teacher: '"오늘 예상과 결과가 달랐던 것은 무엇이었나요?" 나침반 바늘의 N극이 북쪽을 가리키는 것은 바늘이 자석이고 지구가 큰 자석처럼 작용하기 때문이라는 것을 짚는다. 출구 질문에서 "N극은 N극에 끌린다"고 답한 학생을 확인한다.',
      exitTicket: [
        { type: 'tool', tool: 'magnet', options: { mode: 'compass', compasses: [[220, 92]] }, state: { magnet: { x: 220, y: 220, r: 0 } }, prompt: '나침반 바늘의 N극이 서쪽을 가리키게 자석을 놓아 보세요.', target: { needle: '서', compass: 0 }, difficulty: 0.3 },
        { type: 'choice', prompt: '막대자석 두 개의 S극끼리 가까이 가져가면 어떻게 될까요?', options: ['서로 끌어당겨요', '서로 밀어내요', '아무 일도 없어요'], answer: 1, difficulty: 0.15,
          explain: '같은 극끼리는 서로 밀어내요. S극과 S극도 같은 극이에요.' },
        { type: 'choice', prompt: '나침반 바늘을 자석의 N극 가까이에 두었어요. 바늘의 어느 쪽이 자석을 향할까요?', options: ['바늘의 N극', '바늘의 S극', '바늘이 움직이지 않아요'], answer: 1, difficulty: 0.24,
          explain: '나침반 바늘도 자석이에요. 자석의 N극에는 다른 극인 바늘의 S극이 끌려가요.' },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
  ],
  worksheet: {
    title: '자석의 극과 나침반 바늘',
    items: [
      { type: 'figure', prompt: '자석 둘레에 놓은 나침반입니다(검게 칠한 쪽이 바늘의 N극). 자석의 양 끝 중 N극인 쪽에 "N", S극인 쪽에 "S"를 쓰세요.', tool: 'magnet', options: { mode: 'compass', labels: false }, figures: [
        { state: { magnet: { x: 220, y: 162, r: 0 } }, caption: '왼쪽 끝 (     )   오른쪽 끝 (     )' }], answer: '왼쪽 끝 S, 오른쪽 끝 N' },
      { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '자석에서 철로 된 물체가 많이 붙는 양 끝을 자석의 ___이라고 합니다. 같은 극끼리는 서로 ___고, 다른 극끼리는 서로 ___습니다.', answer: '극, 밀어내, 끌어당기' },
      { type: 'table', prompt: '오늘 한 실험의 예상과 결과를 정리해 보세요.', columns: ['한 일', '나의 예상', '관찰한 결과'], rows: 3, answer: '학생마다 다름. 같은 극은 밀어내고 다른 극은 끌어당긴다, 자석이 없으면 바늘 N극은 북쪽을 가리킨다를 썼는지 확인' },
      { type: 'check', prompt: '옳은 것을 모두 골라 □에 ✓표 하세요.', options: ['나침반 바늘도 자석이다', '자석의 N극끼리는 끌어당긴다', '자석이 없으면 나침반 바늘의 N극은 북쪽을 가리킨다', '자석의 가운데에 철 클립이 가장 많이 붙는다'], answer: '나침반 바늘도 자석이다, 자석이 없으면 나침반 바늘의 N극은 북쪽을 가리킨다' },
      { type: 'short', prompt: '극 표시가 지워진 자석의 N극을 나침반으로 찾는 방법을 써 보세요.', answer: '나침반을 자석의 한쪽 끝에 가까이 대었을 때 바늘의 S극이 끌려오면 그 끝이 N극이다.' },
    ],
    easy: { note: '자석의 극: 클립이 많이 붙는 양 끝(N극, S극). 같은 극끼리(N과 N, S와 S)는 밀어내고, 다른 극끼리(N과 S)는 끌어당겨요. 나침반 바늘도 자석이라 바늘 N극은 자석의 S극에 끌려가요.' },
  },
  differentiation: {
    easy: '자석끼리 대었을 때 "끌어당겨 붙었어요/밀어냈어요" 글자가 함께 나와요.',
    challenge: '글자 없이 움직임만 보고 판단하고, 추가 문항에서 자석 가의 반대쪽 극과 나침반 2(남쪽)까지 다뤄요.',
  },
  teacherNotes: '오개념 1) 자석의 가운데가 가장 세다 — 도입의 클립 실험으로 양 끝(극)이 가장 세다는 것을 본다. 2) 나침반 바늘의 N극은 자석의 N극에 끌린다 — 바늘도 자석이므로 다른 극에 끌린다(활동 2의 2번, 출구 질문 3번). 3) 나침반은 언제나 북쪽만 가리킨다 — 가까이 자석이 있으면 바늘이 자석 쪽으로 돈다. 디지털 실험대는 극끼리의 힘을 단순하게 그린 것이므로(지구 자기장은 화면 위쪽 북쪽으로 늘 같다), 실제 자석과 나침반으로 꼭 확인한다. 철제 책상 위에서는 나침반이 흔들리니 나무 책상이나 책 위에서 실험한다.',
});
