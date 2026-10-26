/* 검사용 차시: 전기 회로판(circuit) 교구의 모든 조각(도선·전구·전지·스위치·전자석)과 판정(불 켜기·직렬·병렬·전지 잇기·전자석 세기·극·ask)을 한 차시에서 쓴다. 6학년 2학기 3. 전기의 이용 */
PaperLessons.register({
  id: '_tool-circuit',
  schema: 'edu-lesson.v1',
  catalog: { unit: 'g6-과학-2학기-3', lesson: 1 },
  grade: 6, subject: '과학', unitTitle: '3. 전기의 이용',
  title: '종이 회로판으로 전구에 불 켜고 전자석 만들기',
  objective: '전지·전구·스위치·도선으로 회로를 꾸며 전구의 직렬연결과 병렬연결을 비교하고, 전자석의 세기와 극을 바꾸는 방법을 설명할 수 있다.',
  standards: ['[6과15-01]', '[6과15-02]', '[6과15-03]'],
  minutes: 40,
  formats: ['chromebook', 'projector', 'print'],
  illustration: {
    prompt: 'Layered paper-cut illustration of a paper battery, a glowing paper light bulb and a coiled paper wire around a nail holding tiny paper clips, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.',
    scene: { viewBox: [480, 270], background: '#EDF7FA', layers: [
      { motif: 'sun', x: 110, y: 110, s: 0.7 }, { motif: 'star', x: 380, y: 60 }, { motif: 'star', x: 420, y: 140, s: 0.7 },
      { motif: 'text', x: 260, y: 220, text: '전구에 불을 켜 볼까요?', size: 22, fill: '#3D352E' },
    ] },
  },
  stages: [
    {
      id: 'intro', title: '도입', minutes: 6,
      teacher: '"손전등 속에서 전기는 어떤 길로 다닐까요?" 시연 단추로 전지·전구·도선을 하나씩 놓아 고리가 닫히는 순간 전구가 켜지는 모습을 보여 준다. 길이 한 곳이라도 끊기면 꺼진다는 것을 짚는다.',
      student: '집에서 스위치를 누르면 불이 켜지는 물건을 하나씩 말해 봅시다.',
      demo: { tool: 'circuit', options: { grid: [3, 2] }, sequence: [{ lit: 'all' }] },
    },
    {
      id: 'main', title: '전개', minutes: 27,
      activities: [
        {
          id: 'a1', title: '활동 1. 끊긴 길을 이어 불 켜기', minutes: 8, tool: 'circuit', options: { grid: [4, 3], lock: true },
          teacher: '"전지의 (+)극에서 나온 전기가 다시 (−)극으로 돌아오나요?" 전구 한쪽 끝만 도선에 잇는 학생에게 손가락으로 길을 따라가게 한다. 도선만으로 전지 두 극을 잇는 합선은 위험하다는 것을 꼭 짚는다.',
          task: '조각함에서 도선을 골라 빈칸을 눌러 이어요. 연보라 바탕 위의 부품은 고정이에요.',
          levels: { easy: { readout: true }, base: {}, challenge: { glow: true, stock: { bulb: 1, battery: 1, switch: 1, coil: 0 } } },
          items: [
            { prompt: '빈칸에 도선을 놓아 전구에 불을 켜 보세요.', state: { parts: { 'v0-0': 'bat-', 'h1-0': 'bulb', 'h0-0': 'wire', 'h2-0': 'wire', 'v3-0': 'wire' } }, target: { lit: 'all' }, difficulty: 0.1,
              predict: { q: '전구에 불이 켜지려면 길이 어떻게 되어야 할까요?', options: ['한 곳이 끊겨도 된다', '끊김 없이 이어져야 한다'] },
              conclude: '전지·전구·도선이 끊김 없이 이어져 고리가 되면 전구에 불이 켜져요.' },
            { prompt: '스위치를 넣은 회로예요. 전구에 불이 켜지게 해 보세요.', state: { parts: { 'v0-0': 'bat-', 'h1-0': 'bulb', 'h0-0': 'wire', 'h2-0': 'wire', 'v3-0': 'wire', 'v3-1': 'wire', 'h2-2': 'sw0', 'h1-2': 'wire', 'h0-2': 'wire', 'v0-1': 'wire' } }, target: { lit: 'all', switch: 'closed' }, difficulty: 0.1 },
            { prompt: '전구에 불이 켜지지 않게 회로를 끊어 보세요.', state: { parts: { 'v0-0': 'bat-', 'h1-0': 'bulb', 'h0-0': 'wire', 'h2-0': 'wire', 'v3-0': 'wire', 'v3-1': 'wire', 'h2-2': 'wire', 'h1-2': 'wire', 'h0-2': 'wire', 'v0-1': 'wire' } }, toolOptions: { lock: ['v0-0', 'h1-0'] }, target: { lit: 0 }, difficulty: 0.15 },
            { prompt: '빈 회로판에 전지·전구·도선을 놓아 처음부터 회로를 꾸며 보세요. 켜졌는지는 확인한 뒤에 보여요.', toolOptions: { readout: true, lock: false, grid: [3, 2] }, state: { parts: {} }, target: { lit: 'all' }, difficulty: 0.3, reveal: 'after-check' },
          ],
        },
        {
          id: 'a2', title: '활동 2. 전구의 직렬연결과 병렬연결', minutes: 10, tool: 'circuit', options: { grid: [4, 3], stock: { bulb: 2, battery: 2, switch: 1, coil: 0 } },
          teacher: '"전구 하나를 빼면 다른 전구는 어떻게 될까요?" 직렬은 한 줄, 병렬은 갈라진 길이라는 것을 판 위에서 손가락으로 따라가게 한다. 병렬이 더 밝다는 것을 집의 전등이 병렬인 까닭과 잇는다.',
          task: '조각함에서 부품을 골라 칸에 놓아요. 같은 부품을 다시 누르면 빠지고, 전지는 방향이 바뀌어요.',
          levels: { easy: { readout: true }, base: {}, challenge: { readout: false } },
          items: [
            { prompt: '전구 2개를 한 줄로 이어(직렬연결) 모두 켜 보세요.', state: { parts: { 'v0-0': 'bat-' } }, target: { lit: 'all', bulbs: 2, connection: 'series' }, difficulty: 0.25,
              predict: { q: '전구 2개를 한 줄로 이으면 전구 1개일 때보다 밝을까요?', options: ['더 밝다', '더 어둡다', '같다'] },
              conclude: '전구를 직렬로 이으면 전구 하나를 뺄 때 다른 전구도 꺼지고, 밝기는 어두워져요.' },
            { prompt: '전구 2개가 갈라진 길에 따로 이어지게(병렬연결) 모두 켜 보세요.', state: { parts: { 'v0-0': 'bat-' } }, target: { lit: 'all', bulbs: 2, connection: 'parallel' }, difficulty: 0.4,
              conclude: '병렬로 이으면 전구 하나를 빼도 다른 전구는 켜져 있어요.' },
            { prompt: '전지 2개를 한 줄로 이어(직렬연결) 전구를 더 밝게 켜 보세요.', state: { parts: { 'h1-0': 'bulb' } }, target: { lit: 'all', batteries: 2, batteryLink: 'series' }, difficulty: 0.35 },
            { prompt: '그림을 보고 고르세요. 왼쪽 전구를 빼면 오른쪽 전구는 어떻게 될까요?', toolOptions: { readOnly: true, ask: { q: '오른쪽 전구는?', choices: ['꺼진다', '켜져 있다'], why: ['두 전구가 갈라진 길에 따로 이어져 있어서 하나를 빼도 다른 길로 전기가 흘러요.', null] } }, state: { parts: { 'h0-0': 'wire', 'h1-0': 'wire', 'h0-2': 'wire', 'h1-2': 'wire', 'v0-0': 'bat-', 'v0-1': 'wire', 'v1-0': 'bulb', 'v1-1': 'wire', 'v2-0': 'bulb', 'v2-1': 'wire' } }, target: { pick: 1 }, difficulty: 0.2 },
          ],
        },
        {
          id: 'a3', title: '활동 3. 전자석 만들기', minutes: 9, tool: 'circuit', options: { grid: [4, 3], parts: ['wire', 'battery', 'coil', 'switch'], stock: { bulb: 0, battery: 2, switch: 1, coil: 1 } },
          teacher: '"전자석이 영구 자석과 다른 점은?" 스위치를 열면 클립이 떨어지는 것, 전지를 직렬로 더 이으면 클립이 더 많이 붙는 것, 전지 방향을 바꾸면 N극과 S극이 바뀌는 것을 차례로 찾게 한다.',
          task: '전자석 조각(못에 감은 에나멜선)을 회로에 넣어 클립이 붙는지 봐요.',
          levels: { easy: { readout: true }, base: {}, challenge: { readout: false } },
          items: [
            { prompt: '전자석에 전기가 흐르도록 회로를 이어 클립을 붙여 보세요.', state: { parts: { 'v0-0': 'bat-', 'h1-0': 'coil' } }, target: { magnet: true }, difficulty: 0.15 },
            { prompt: '클립이 더 많이 붙는 센 전자석을 만들어 보세요. 클립 수는 확인한 뒤에 보여요.', state: { parts: { 'v0-0': 'bat-', 'h1-0': 'coil', 'h0-0': 'wire', 'h2-0': 'wire', 'v3-0': 'wire', 'v3-1': 'wire', 'h2-2': 'wire', 'h1-2': 'wire', 'h0-2': 'wire', 'v0-1': 'wire' } }, toolOptions: { readout: true }, target: { magnet: true, strong: true }, difficulty: 0.35, reveal: 'after-check',
              predict: { q: '전자석을 더 세게 하려면?', options: ['전지를 직렬로 더 잇는다', '도선을 더 길게 한다'] },
              conclude: '전지를 직렬로 더 이으면 센 전기가 흘러 전자석이 세져요.' },
            { prompt: '전자석의 오른쪽 끝이 N극이 되도록 회로를 바꿔 보세요.', state: { parts: { 'v0-0': 'bat+', 'h1-0': 'coil', 'h0-0': 'wire', 'h2-0': 'wire', 'v3-0': 'wire', 'v3-1': 'wire', 'h2-2': 'wire', 'h1-2': 'wire', 'h0-2': 'wire', 'v0-1': 'wire' } }, target: { magnet: true, coilN: 'right' }, difficulty: 0.3 },
            { prompt: '스위치를 열어 전자석에서 클립이 떨어지게 해 보세요.', state: { parts: { 'v0-0': 'bat-', 'h1-0': 'coil', 'h0-0': 'wire', 'h2-0': 'wire', 'v3-0': 'wire', 'v3-1': 'wire', 'h2-2': 'sw1', 'h1-2': 'wire', 'h0-2': 'wire', 'v0-1': 'wire' } }, toolOptions: { lock: true }, target: { magnet: false, switch: 'open' }, difficulty: 0.1 },
            { prompt: '그림을 보고 고르세요. 이 전자석의 극을 바꾸려면 어떻게 해야 할까요?', toolOptions: { readOnly: true, ask: { q: '극을 바꾸려면?', choices: ['전지를 하나 더 직렬로 잇는다', '전지의 방향을 바꾼다', '스위치를 연다'], why: ['전지를 더 이으면 전자석이 세질 뿐 극은 그대로예요.', null, '스위치를 열면 전기가 끊겨 자석의 성질이 없어져요.'] } }, state: { parts: { 'v0-0': 'bat-', 'h1-0': 'coil', 'h0-0': 'wire', 'h2-0': 'wire', 'v3-0': 'wire', 'v3-1': 'wire', 'h2-2': 'wire', 'h1-2': 'wire', 'h0-2': 'wire', 'v0-1': 'wire' } }, target: { pick: 1 }, difficulty: 0.25 },
          ],
        },
      ],
    },
    {
      id: 'wrapup', title: '정리', minutes: 7,
      teacher: '"우리 집 전등은 직렬일까요, 병렬일까요? 그렇게 생각한 까닭은?" 출구 질문에서 직렬과 병렬을 바꿔 고른 학생은 다음 시간에 회로판으로 전구를 하나씩 빼 보게 한다.',
      exitTicket: [
        { type: 'tool', tool: 'circuit', options: { grid: [4, 2], lock: true }, state: { parts: { 'v0-0': 'bat-', 'h1-0': 'bulb', 'h0-0': 'wire' } }, prompt: '빈칸에 도선을 이어 전구를 켜세요.', target: { lit: 'all' }, difficulty: 0.15 },
        { type: 'choice', prompt: '전구 하나를 빼도 다른 전구가 켜져 있는 연결은?', options: ['직렬연결', '병렬연결'], answer: 1, difficulty: 0.2, explain: '병렬연결은 전구마다 따로 길이 있어서 하나를 빼도 다른 길로 전기가 흘러요.' },
        { type: 'choice', prompt: '전자석의 극을 바꾸는 방법은?', options: ['전지의 방향을 바꾼다', '클립을 더 가까이 둔다', '전구를 하나 더 넣는다'], answer: 0, difficulty: 0.25, explain: '전기가 흐르는 방향이 바뀌면 전자석의 N극과 S극도 바뀌어요.' },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
  ],
  worksheet: {
    title: '종이 회로판 관찰 기록',
    items: [
      { type: 'figure', prompt: '두 회로에서 전구가 어떻게 이어졌는지 쓰세요.', tool: 'circuit', options: { grid: [4, 3] }, figures: [
        { state: { parts: { 'v0-0': 'bat-', 'h0-0': 'bulb', 'h1-0': 'bulb', 'h2-0': 'wire', 'v3-0': 'wire', 'v3-1': 'wire', 'h2-2': 'wire', 'h1-2': 'wire', 'h0-2': 'wire', 'v0-1': 'wire' } }, caption: '(          )연결' },
        { state: { parts: { 'h0-0': 'wire', 'h1-0': 'wire', 'h0-2': 'wire', 'h1-2': 'wire', 'v0-0': 'bat-', 'v0-1': 'wire', 'v1-0': 'bulb', 'v1-1': 'wire', 'v2-0': 'bulb', 'v2-1': 'wire' } }, caption: '(          )연결' },
      ], answer: '직렬, 병렬' },
      { type: 'figure', prompt: '전구에 불이 켜지지 않는 까닭을 쓰세요.', tool: 'circuit', options: { grid: [3, 2] }, figures: [{ state: { parts: { 'v0-0': 'bat-', 'h0-0': 'bulb', 'h1-0': 'wire', 'v2-0': 'wire', 'h1-1': 'wire' } }, caption: '끊긴 곳을 찾아 표시하세요.' }], answer: '아래쪽 왼쪽 칸이 비어 있어 길이 끊겼다' },
      { type: 'table', prompt: '전자석을 바꾸었을 때 생기는 일을 쓰세요.', columns: ['바꾼 것', '생기는 일'], cells: [['전지를 직렬로 하나 더', ''], ['전지의 방향', '']] },
      { type: 'short', prompt: '우리 생활에서 전자석을 쓰는 물건을 하나 쓰세요.' },
    ],
    easy: {
      note: '전지의 (+)극에서 나온 전기가 끊김 없이 (−)극으로 돌아와야 전구에 불이 켜져요.',
      items: [
        { type: 'figure', prompt: '전구에 불이 켜질까요? (○, ×)', tool: 'circuit', options: { grid: [3, 2] }, figures: [{ state: { parts: { 'v0-0': 'bat-', 'h0-0': 'bulb', 'h1-0': 'wire', 'v2-0': 'wire', 'h1-1': 'wire', 'h0-1': 'wire' } }, caption: '(    )' }], answer: '○' },
        { type: 'choice', prompt: '전구 하나를 빼도 다른 전구가 켜지는 연결은?', options: ['직렬연결', '병렬연결'], answer: '병렬연결' },
        { type: 'short', prompt: '전자석이 영구 자석과 다른 점을 하나 쓰세요.' },
      ],
    },
  },
  differentiation: {
    easy: '켜진 전구 수와 붙은 클립 수가 글자로 바로 보여 회로를 바꾼 결과를 곧바로 확인해요.',
    base: '글자 없이 전구의 빛과 클립을 보고 판단해요.',
    challenge: '쓸 수 있는 부품 수가 줄어 꼭 필요한 부품만 골라 회로를 꾸며요.',
  },
  teacherNotes: '자주 보이는 어려움: ① 전구의 한쪽 끝만 이어도 켜진다고 생각한다 → 전구의 두 끝이 모두 길에 이어져야 한다. ② 도선으로만 전지 두 극을 잇는다(합선) → 위험하다는 것을 꼭 짚는다. ③ 직렬과 병렬을 모양(가로·세로)으로 구분한다 → 전구 하나를 빼 보는 것으로 구분하게 한다. ④ 전지를 반대로 이어 두 전지가 서로 막는다. ⑤ 전자석의 세기와 극을 바꾸는 방법을 섞는다.',
});
