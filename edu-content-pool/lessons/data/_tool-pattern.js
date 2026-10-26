/* 검사용 차시 — 규칙 판(pattern) 교구의 모든 모드(fill·rule·odd·make)와 색·모양·돌리기·늘어나는 무늬·수·글자 조각을 한 차시에서 쓴다. 카탈로그에 싣지 않는다. */
PaperLessons.register({
  id: '_tool-pattern',
  schema: 'edu-lesson.v1',
  catalog: { unit: 'g2-수학-2학기-6', lesson: 3 },
  grade: 2, subject: '수학', unitTitle: '6. 규칙 찾기',
  title: '무늬와 수 배열에서 규칙을 찾고 이어 가기',
  objective: '색·모양·수가 되풀이되거나 늘어나는 규칙을 찾아 다음에 올 것을 알아내고, 자기만의 규칙을 만들 수 있다.',
  standards: ['[2수02-01]', '[2수02-02]'],
  minutes: 40,
  formats: ['chromebook', 'projector', 'print'],
  illustration: {
    prompt: 'Layered paper-cut illustration of a colorful paper bead necklace with repeating hearts and stars hanging across a garden fence, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.',
    scene: { viewBox: [480, 270], layers: [
      { motif: 'sun', x: 404, y: 60, s: 0.8 }, { motif: 'cloud', x: 120, y: 50 }, { motif: 'hills', y: 204 },
      { motif: 'flower', x: 90, y: 214 }, { motif: 'flower', x: 140, y: 214, color: 'sky' }, { motif: 'flower', x: 190, y: 214 }, { motif: 'flower', x: 240, y: 214, color: 'sky' },
      { motif: 'star', x: 330, y: 120 }, { motif: 'star', x: 370, y: 120, color: 'rose' }, { motif: 'star', x: 410, y: 120 },
      { motif: 'text', x: 220, y: 140, text: '다음에는 무엇이 올까요?', size: 22 },
    ] },
  },
  stages: [
    {
      id: 'intro', title: '도입', minutes: 7,
      teacher: '"꽃밭에 분홍 꽃, 파란 꽃, 분홍 꽃, 파란 꽃이 있어요. 다음에는 어떤 꽃을 심을까요?" 그림의 꽃을 함께 짚으며 "분홍, 파랑"을 소리 내어 끊어 읽는다. 바로 앞 것을 따라 하는 것이 아니라 묶음이 되풀이된다는 것을 손뼉 박자(짝, 쿵)로 느끼게 한다.',
      student: '손뼉을 "짝 짝 쿵, 짝 짝 쿵"으로 쳐 보고, 다음 박자를 맞혀 봅시다.',
      demo: { tool: 'pattern', options: { seq: ['circle:rose', 'square:sky', 'circle:rose', 'square:sky', null, null] }, sequence: [{ fill: ['circle:rose', 'square:sky'] }] },
    },
    {
      id: 'main', title: '전개', minutes: 26,
      activities: [
        {
          id: 'a1', title: '활동 1. 무늬에서 다음 조각 찾기', minutes: 10, tool: 'pattern',
          teacher: '"몇 개가 한 묶음으로 되풀이되나요? 손으로 묶음마다 끊어 보세요." 바로 앞 조각을 그대로 따라 놓는 학생이 많다 — 묶음 처음으로 돌아가 다시 읽게 한다. 화살표 돌리기에서는 "몇 번째마다 처음 모양으로 돌아오나요?"를 묻는다.',
          task: '빈칸을 누르고 아래 조각 단추를 눌러 채워요. 빈칸에서 위·아래 방향키로 조각을 바꿀 수도 있어요.',
          levels: { easy: { perRow: 6 }, base: {}, challenge: {} },
          items: [
            { prompt: '분홍 동그라미와 파란 네모가 되풀이돼요. 빈칸 두 곳을 채워 보세요.', toolOptions: { seq: ['circle:rose', 'square:sky', 'circle:rose', 'square:sky', null, null] }, target: { fill: ['circle:rose', 'square:sky'] }, difficulty: 0.05 },
            { prompt: '별 두 개, 하트 하나가 되풀이돼요. 빈칸을 채워 보세요.', toolOptions: { seq: ['star:buttercup', 'star:buttercup', 'heart:rose', 'star:buttercup', null, 'heart:rose', 'star:buttercup', 'star:buttercup', null], palette: ['star:buttercup', 'heart:rose', 'circle:mint'] }, target: { fill: ['star:buttercup', 'heart:rose'] }, difficulty: 0.2, reveal: 'after-check' },
            { prompt: '화살표가 돌아가는 규칙을 찾아 빈칸에 알맞은 화살표를 넣으세요.', toolOptions: { seq: [{ s: 'arrow', c: 'sky' }, { s: 'arrow', c: 'sky', r: 90 }, { s: 'arrow', c: 'sky', r: 180 }, { s: 'arrow', c: 'sky', r: 270 }, { s: 'arrow', c: 'sky' }, null], palette: [{ s: 'arrow', c: 'sky' }, { s: 'arrow', c: 'sky', r: 90 }, { s: 'arrow', c: 'sky', r: 180 }, { s: 'arrow', c: 'sky', r: 270 }] }, target: { fill: [{ s: 'arrow', c: 'sky', r: 90 }] }, difficulty: 0.3,
              predict: { q: '화살표는 어느 쪽으로 돌고 있을까요?', options: ['시계 방향', '시계 반대 방향', '돌지 않아요'] },
              conclude: '화살표가 시계 방향으로 한 번에 직각만큼 돌아요. 네 번 돌면 처음 모양이 돼요.' },
            { prompt: '네모가 늘어나는 규칙을 찾아 빈칸을 채우세요.', toolOptions: { seq: [{ s: 'square', c: 'mint', k: 1 }, { s: 'square', c: 'mint', k: 2 }, { s: 'square', c: 'mint', k: 3 }, null], palette: [{ s: 'square', c: 'mint', k: 3 }, { s: 'square', c: 'mint', k: 4 }, { s: 'square', c: 'mint', k: 5 }] }, target: { fill: [{ s: 'square', c: 'mint', k: 4 }] }, difficulty: 0.15 },
          ],
        },
        {
          id: 'a2', title: '활동 2. 수 배열과 글자에서 규칙 찾기', minutes: 9, tool: 'pattern',
          teacher: '"이웃한 두 수는 얼마씩 차이가 나요?" 수 사이에 작은 화살표를 그려 차이를 적게 한다. 커지는 규칙만 있다고 생각하는 학생에게 50, 45, 40처럼 작아지는 배열도 보여 준다. 틀린 조각 찾기에서는 묶음을 끊어 읽어 어디서 묶음이 깨지는지 찾게 한다.',
          task: '빈칸 아래 칸에 수를 쓰거나, 규칙을 고르거나, 규칙에 맞지 않는 조각을 눌러요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '수 배열의 규칙을 찾아 빈칸에 알맞은 수를 쓰세요.', toolOptions: { seq: [3, 6, 9, null, 15, null] }, target: { fill: [12, 18] }, difficulty: 0.12 },
            { prompt: '작아지는 수 배열이에요. 빈칸에 알맞은 수를 쓰세요.', toolOptions: { seq: [50, 45, 40, null, 30, null] }, target: { fill: [35, 25] }, difficulty: 0.2, reveal: 'after-check' },
            { prompt: '이 수 배열은 어떤 규칙으로 늘어놓았나요?', toolOptions: { mode: 'rule', seq: [5, 10, 15, 20, 25], choices: ['5씩 커져요', '10씩 커져요', '1씩 커져요'], why: ['', '이웃한 두 수의 차이를 다시 세어 보세요.', '5와 10 사이는 1보다 훨씬 커요.'] }, target: { pick: 0 }, difficulty: 0.1 },
            { prompt: '규칙에 맞지 않는 조각을 하나 찾아 눌러 보세요.', toolOptions: { mode: 'odd', seq: ['circle:rose', 'circle:rose', 'triangle:mint', 'circle:rose', 'circle:rose', 'triangle:mint', 'circle:rose', 'triangle:mint', 'triangle:mint'] }, target: { odd: 7 }, difficulty: 0.3,
              conclude: '분홍, 분홍, 초록 묶음이 되풀이되므로 8번째에는 분홍 동그라미가 와야 해요.' },
            { prompt: '글자가 되풀이되는 규칙을 찾아 빈칸에 알맞은 글자를 넣으세요.', toolOptions: { seq: ['가', '나', '나', '가', '나', '나', null] }, target: { fill: ['가'] }, difficulty: 0.1 },
          ],
        },
        {
          id: 'a3', title: '활동 3. 나만의 규칙 만들기', minutes: 7, tool: 'pattern',
          teacher: '"내 규칙을 한 문장으로 말할 수 있나요?" 묶음 없이 마음대로 늘어놓은 학생에게는 처음 몇 개를 한 묶음으로 정하게 한다. 짝 활동에서는 짝이 다음 조각을 맞히면 규칙이 분명하다는 뜻이라고 알려 준다.',
          task: '아래 조각 단추로 칸을 차례로 채워 규칙을 만들어요. 수 배열은 칸에 수를 써요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '세 가지 조각이 차례로 되풀이되는 규칙을 만들어 보세요.', toolOptions: { mode: 'make', palette: ['star:buttercup', 'heart:rose', 'circle:sky'], length: 9 }, target: { rule: 'repeat', period: 3 }, difficulty: 0.2 },
            { prompt: '두 가지 이상의 조각으로 되풀이되는 규칙을 만들어 보세요.', toolOptions: { mode: 'make', palette: ['triangle:peach', 'square:lavender', 'diamond:mint'], length: 8 }, target: { rule: 'repeat', minRepeats: 2, uses: 2 }, difficulty: 0.2 },
            { prompt: '같은 수씩 커지거나 작아지는 수 6개를 만들어 보세요.', toolOptions: { mode: 'make', input: 'number', length: 6, start: 2 }, target: { rule: 'add' }, difficulty: 0.3 },
            { prompt: '규칙 무늬를 만들어 짝에게 보여 주고, 다음 조각을 맞혀 보게 하세요.', toolOptions: { mode: 'make', palette: ['star:buttercup', 'heart:rose', 'circle:sky', 'square:mint'], length: 8 }, free: true },
          ],
        },
      ],
    },
    {
      id: 'wrapup', title: '정리', minutes: 7,
      teacher: '"규칙을 찾을 때 무엇부터 보나요?" 묶음 끊어 읽기와 이웃한 두 수의 차이 보기를 학생 말로 정리한다. 출구 1번을 틀린 학생은 앞 조각 따라 하기를, 2번을 틀린 학생은 수 차이 세기를 다음 시간에 먼저 살핀다.',
      exitTicket: [
        { type: 'tool', tool: 'pattern', options: { seq: ['heart:rose', 'heart:rose', 'star:buttercup', 'heart:rose', 'heart:rose', null] }, prompt: '빈칸에 알맞은 조각을 넣으세요.', target: { fill: ['star:buttercup'] }, difficulty: 0.15 },
        { type: 'tool', tool: 'pattern', options: { seq: [4, 8, 12, null, 20] }, prompt: '빈칸에 알맞은 수를 쓰세요.', target: { fill: [16] }, difficulty: 0.15 },
        { type: 'choice', prompt: '"빨강, 노랑, 노랑"이 되풀이될 때 10번째는 무슨 색일까요?', options: ['빨강', '노랑'], answer: 0, difficulty: 0.35, explain: '세 개씩 한 묶음이므로 10번째는 네 번째 묶음의 첫째, 빨강이에요.' },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
  ],
  worksheet: {
    title: '규칙을 찾아 이어 가기',
    items: [
      { type: 'figure', prompt: '규칙을 찾아 빈칸에 알맞은 모양을 그리세요.', tool: 'pattern', wide: true, figures: [
        { options: { seq: ['circle:rose', 'triangle:mint', 'triangle:mint', 'circle:rose', 'triangle:mint', null, null] }, caption: '' }], answer: '세모, 동그라미' },
      { type: 'figure', prompt: '빈칸에 알맞은 수를 쓰세요.', tool: 'pattern', wide: true, figures: [
        { options: { seq: [7, 14, 21, null, 35, null] }, caption: '' }], answer: '28, 42' },
      { type: 'choice', prompt: '2, 5, 8, 11의 규칙에 ○ 하세요.', options: ['2씩 커져요', '3씩 커져요', '4씩 커져요'], answer: '3씩 커져요' },
      { type: 'short', prompt: '위 1번 무늬의 규칙을 말로 써 보세요.' },
      { type: 'draw', prompt: '두 가지 모양으로 나만의 규칙 무늬를 그려 보세요.' },
    ],
    easy: {
      note: '처음부터 몇 개씩 끊어 읽어 보세요. 같은 묶음이 다시 나오면 그것이 규칙이에요.',
      items: [
        { type: 'figure', prompt: '빈칸에 알맞은 모양을 그리세요.', tool: 'pattern', wide: true, figures: [
          { options: { seq: ['circle:rose', 'square:sky', 'circle:rose', 'square:sky', null] }, caption: '' }], answer: '동그라미' },
        { type: 'figure', prompt: '빈칸에 알맞은 수를 쓰세요.', tool: 'pattern', wide: true, figures: [
          { options: { seq: [2, 4, 6, null, 10] }, caption: '' }], answer: '8' },
        { type: 'choice', prompt: '10, 20, 30, 40의 규칙에 ○ 하세요.', options: ['10씩 커져요', '1씩 커져요'], answer: '10씩 커져요' },
        { type: 'draw', prompt: '동그라미와 네모로 규칙 무늬를 그려 보세요.' },
      ],
    },
  },
  differentiation: {
    easy: '한 줄에 조각이 적게 놓여 크게 보여요. 묶음을 손으로 끊어 읽으며 채워요.',
    base: '무늬와 수 배열의 빈칸을 스스로 채우고, 틀린 조각을 찾아요.',
    challenge: '돌아가는 화살표와 늘어나는 무늬, 작아지는 수 배열에서 규칙을 찾아 말로 설명해요.',
  },
  teacherNotes: '자주 보이는 어려움: ① 바로 앞 조각을 따라 놓는다(분홍, 파랑, 분홍, 파랑 다음에 파랑) → 교구는 "바로 앞 조각을 그대로 따라 했어요"라고 짚는다. ② 수 배열에서 첫 두 수의 차이만 보고 끝까지 확인하지 않는다. ③ 작아지는 규칙도 규칙이라는 것을 모른다. ④ 규칙 만들기에서 묶음 없이 마음대로 늘어놓는다 → 처음 몇 개를 한 묶음으로 정하게 한다. 흑백 활동지에서는 색 대신 무늬 결(점·빗금)로 조각을 구별한다.',
});
