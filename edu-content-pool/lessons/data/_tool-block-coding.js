/* 검사용 차시: 종이 거북이 코딩판(block-coding) 교구의 모든 판정(도착·별 모으기·블록 수·반복·조건·디버깅·따라가기)을 한 차시에서 쓴다.
 * 5학년 2학기 실과 5. 디지털 사회와 인공지능 */
PaperLessons.register({
  id: '_tool-block-coding',
  schema: 'edu-lesson.v1',
  catalog: { unit: 'g5-실과-2학기-5', lesson: 3 },
  grade: 5, subject: '실과', unitTitle: '5. 디지털 사회와 인공지능',
  title: '명령 블록으로 거북이 로봇 길 찾기',
  objective: '거북이 로봇이 목표에 닿도록 명령 블록을 차례대로 놓고, 반복 블록으로 짧게 줄이며, 잘못된 블록을 찾아 고칠 수 있다.',
  standards: ['[6실05-01]'],
  minutes: 40,
  formats: ['chromebook', 'projector', 'print'],
  illustration: {
    prompt: 'Layered paper-cut illustration of a cute paper turtle robot walking on a checkered paper grid toward a flag, with colorful command blocks (arrows and loop brackets) floating above, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.',
    scene: { viewBox: [480, 270], layers: [
      { motif: 'cloud', x: 90, y: 48 }, { motif: 'star', x: 400, y: 60, color: 'sun' }, { motif: 'hills', y: 210 },
      { motif: 'text', x: 240, y: 126, text: '앞으로 · 돌기 · 반복', size: 24 },
    ] },
  },
  stages: [
    {
      id: 'intro', title: '도입', minutes: 6,
      teacher: '"선생님이 로봇이에요. 교실 문까지 가게 명령해 볼까요?" 학생이 말한 명령을 그대로만 움직여, 명령의 차례가 중요하다는 것을 느끼게 한다. 시연 단추로 거북이가 블록을 한 개씩 따라 목표에 가는 모습을 보여 주고, "돌기 블록은 자리를 옮기나요?"를 묻는다.',
      student: '선생님 로봇에게 명령해 보고, 명령의 차례가 바뀌면 어떻게 되는지 이야기해 봅시다.',
      demo: { tool: 'block-coding', options: { cols: 5, rows: 4, start: { x: 0, y: 3, dir: 'E' }, goal: { x: 3, y: 1 } }, sequence: [{ reach: true }] },
    },
    {
      id: 'main', title: '전개', minutes: 26,
      activities: [
        {
          id: 'a1', title: '활동 1. 블록을 차례대로 놓아 목표에 닿기', minutes: 9, tool: 'block-coding',
          teacher: '"거북이 쪽에서 보면 왼쪽은 어디인가요?" 거북이가 아래를 볼 때 왼쪽·오른쪽이 헷갈리는 학생에게 몸을 그 쪽으로 돌려 서 보게 한다. 실행은 몇 번이든 눌러 볼 수 있다고 알려 준다.',
          task: '앞으로·왼쪽으로 돌기·오른쪽으로 돌기 블록을 차례대로 놓아 거북이를 깃발까지 보내요.',
          levels: {
            easy: { cols: 4, rows: 4, blocks: ['fwd', 'left', 'right'] },
            base: { blocks: ['fwd', 'left', 'right'] },
            challenge: { blocks: ['fwd', 'left', 'right', 'rep'] },
          },
          items: [
            { prompt: '거북이를 오른쪽으로 세 칸 보내 깃발에 닿게 해요.', toolOptions: { cols: 5, rows: 3, start: { x: 0, y: 1, dir: 'E' }, goal: { x: 3, y: 1 } }, target: { reach: true }, difficulty: 0.1,
              predict: { q: '앞으로 블록을 몇 개 놓아야 할까요?', options: ['2개', '3개', '4개'] },
              conclude: '앞으로 블록 하나는 바라보는 쪽으로 한 칸이에요.' },
            { prompt: '바위를 피해 돌아서 깃발에 닿게 해요.', toolOptions: { cols: 5, rows: 4, start: { x: 0, y: 3, dir: 'E' }, goal: { x: 4, y: 3 }, rocks: [[2, 3]] }, target: { reach: true }, difficulty: 0.35 },
            { prompt: '별 두 개를 모두 지나서 깃발에 닿게 해요.', toolOptions: { cols: 5, rows: 4, start: { x: 0, y: 3, dir: 'N' }, goal: { x: 4, y: 0 }, stars: [[0, 1], [2, 0]] }, target: { reach: true, stars: true }, difficulty: 0.4 },
          ],
        },
        {
          id: 'a2', title: '활동 2. 반복 블록으로 짧게, 조건 블록으로 똑똑하게', minutes: 9, tool: 'block-coding',
          teacher: '"똑같은 블록이 몇 번 이어지나요? 그 묶음을 반복으로 감싸 볼까요?" 반복 수는 ↑/↓로 바꾼다. 조건 블록 문항에서는 "막히면 오른쪽" 블록 하나로 길이 꺾여도 갈 수 있다는 것을 실행으로 확인하게 한다.',
          task: '반복 블록이나 조건 블록을 써서 블록 수를 줄여 목표에 닿아요.',
          levels: {
            easy: { blocks: ['fwd', 'left', 'right', 'rep'] },
            base: { blocks: ['fwd', 'left', 'right', 'rep', 'if'] },
            challenge: { blocks: ['fwd', 'left', 'right', 'rep', 'if'] },
          },
          items: [
            { prompt: '반복 블록을 써서 블록 3개 이하로 거북이를 오른쪽 끝 깃발까지 보내요.', toolOptions: { cols: 6, rows: 3, start: { x: 0, y: 1, dir: 'E' }, goal: { x: 5, y: 1 }, blocks: ['fwd', 'left', 'right', 'rep'] }, target: { reach: true, use: ['rep'], maxBlocks: 3 }, difficulty: 0.35,
              conclude: '같은 블록이 되풀이되면 반복 블록 하나로 줄일 수 있어요.' },
            { prompt: '계단 길을 반복 블록으로 짧게 만들어 깃발에 닿게 해요. 블록은 6개 이하예요.', toolOptions: { cols: 5, rows: 5, start: { x: 0, y: 4, dir: 'E' }, goal: { x: 3, y: 1 }, blocks: ['fwd', 'left', 'right', 'rep'] }, target: { reach: true, use: ['rep'], maxBlocks: 6 }, difficulty: 0.55 },
            { prompt: '"막히면 오른쪽으로" 조건 블록을 반복 안에 넣어 꺾인 길을 지나 깃발에 닿게 해요.', toolOptions: { cols: 4, rows: 4, start: { x: 0, y: 0, dir: 'E' }, goal: { x: 3, y: 3 }, blocks: ['fwd', 'left', 'right', 'rep', 'if'] }, target: { reach: true, use: ['if'] }, difficulty: 0.6 },
          ],
        },
        {
          id: 'a3', title: '활동 3. 프로그램 따라가기와 오류 고치기', minutes: 8, tool: 'block-coding',
          teacher: '"손가락을 거북이로 삼아 블록 하나씩 따라가 보세요." 따라가기 문항은 칸을 고르기 전에는 실행할 수 없다. 오류 고치기에서는 프로그램을 지우고 새로 짜지 말고 잘못된 블록 하나만 찾아 바꾸게 한다.',
          task: '프로그램을 머릿속으로 따라가 거북이가 멈출 칸을 고르고, 잘못된 블록 하나를 찾아 고쳐요.',
          levels: {
            easy: {},
            base: {},
            challenge: {},
          },
          items: [
            { prompt: '이 프로그램을 따라가면 거북이가 어느 칸에서 멈출까요? 그 칸을 골라요.', toolOptions: { mode: 'trace', cols: 5, rows: 4, start: { x: 0, y: 3, dir: 'E' }, program: ['fwd', 'fwd', 'left', 'fwd', 'fwd', 'right', 'fwd'], revealAfterCheck: true }, target: { end: { x: 3, y: 1 } }, difficulty: 0.45 },
            { prompt: '거북이가 바위에 부딪혀요. 잘못된 블록 하나만 고쳐서 깃발에 닿게 해요.', toolOptions: { cols: 5, rows: 4, start: { x: 0, y: 3, dir: 'E' }, goal: { x: 4, y: 0 }, rocks: [[2, 3], [3, 1]] }, state: { program: ['fwd', 'right', 'fwd', 'fwd', 'fwd', 'right', 'fwd', 'fwd', 'fwd'] }, target: { reach: true, maxEdits: 1 }, difficulty: 0.55 },
          ],
        },
      ],
    },
    {
      id: 'wrapup', title: '정리', minutes: 8,
      teacher: '"반복 블록을 쓰니 무엇이 좋아졌나요?" 블록 수가 줄고 고치기 쉬워진다는 것을 정리한다. 출구 1번에서 왼쪽·오른쪽을 바꾸어 놓은 학생은 다음 시간에 몸으로 돌며 따라가기를 먼저 한다.',
      exitTicket: [
        { type: 'tool', tool: 'block-coding', options: { cols: 4, rows: 4, start: { x: 0, y: 3, dir: 'N' }, goal: { x: 2, y: 1 }, blocks: ['fwd', 'left', 'right', 'rep'] }, prompt: '거북이를 깃발까지 보내는 프로그램을 만드세요.', target: { reach: true }, difficulty: 0.3 },
        { type: 'choice', prompt: '앞으로·앞으로·앞으로·앞으로를 가장 짧게 나타낸 것은 무엇인가요?', options: ['반복 2번 [앞으로]', '반복 4번 [앞으로]', '앞으로·반복 3번'], answer: 1, difficulty: 0.25, explain: '앞으로가 네 번 되풀이되니 반복 4번 안에 앞으로 하나를 넣어요.' },
        { type: 'short', prompt: '오늘 프로그램을 고치면서 찾은 실수와 고친 방법을 쓰세요.' },
        { type: 'mood', prompt: '오늘 코딩 활동은 어땠나요?' },
      ],
    },
  ],
  worksheet: {
    title: '거북이 로봇 길 찾기',
    items: [
      { type: 'figure', prompt: '프로그램을 따라가 거북이가 멈추는 칸에 ○ 하세요.', tool: 'block-coding', options: { mode: 'trace', cols: 5, rows: 4, start: { x: 0, y: 3, dir: 'E' }, program: ['fwd', 'fwd', 'left', 'fwd', 'right', 'fwd'], printProgram: true }, figures: [{ state: {}, caption: '앞으로 → 앞으로 → 왼쪽으로 돌기 → 앞으로 → 오른쪽으로 돌기 → 앞으로' }], answer: '(3, 2)' },
      { type: 'figure', prompt: '거북이가 바위를 피해 깃발에 닿는 길을 화살표로 그리고, 명령을 차례대로 쓰세요.', tool: 'block-coding', options: { cols: 5, rows: 4, start: { x: 0, y: 3, dir: 'E' }, goal: { x: 4, y: 3 }, rocks: [[2, 3]] }, figures: [{ state: { program: [] }, caption: '바위 피해 깃발까지' }], answer: '앞으로, 왼쪽 돌기, 앞으로, 오른쪽 돌기, 앞으로 3, 오른쪽 돌기, 앞으로, 왼쪽 돌기' },
      { type: 'choice', prompt: '같은 명령이 여러 번 되풀이될 때 쓰면 좋은 블록은 무엇인가요?', options: ['반복 블록', '돌기 블록', '조건 블록'], answer: '반복 블록' },
      { type: 'table', prompt: '아래 명령을 반복 블록으로 줄여 쓰세요.', columns: ['처음 명령', '줄인 명령'], cells: [['앞으로 앞으로 앞으로', ''], ['앞으로 왼쪽 앞으로 왼쪽', '']] },
      { type: 'short', prompt: '프로그램에 오류가 있을 때 어떻게 찾았는지 쓰세요.' },
    ],
    easy: {
      note: '손가락을 거북이로 삼아 명령 하나씩 따라가요. 돌기는 자리를 옮기지 않아요.',
      items: [
        { type: 'figure', prompt: '프로그램을 따라가 멈추는 칸에 ○ 하세요.', tool: 'block-coding', options: { mode: 'trace', cols: 4, rows: 3, start: { x: 0, y: 1, dir: 'E' }, program: ['fwd', 'fwd', 'fwd'], printProgram: true }, figures: [{ state: {}, caption: '앞으로 3번' }], answer: '(3, 1)' },
        { type: 'choice', prompt: '돌기 블록을 쓰면 거북이는 어떻게 되나요?', options: ['자리는 그대로, 방향만 바뀌어요', '한 칸 앞으로 가요'], answer: '자리는 그대로, 방향만 바뀌어요' },
        { type: 'short', prompt: '오늘 만든 프로그램의 블록 수를 쓰세요.' },
      ],
    },
  },
  differentiation: {
    easy: '작은 판(4×4)에서 앞으로·돌기 블록만 써요.',
    base: '반복과 조건 블록을 고르개에 넣고, 블록 수 제한 안에서 길을 만들어요.',
    challenge: '같은 판에서 반복과 조건을 섞어 가장 적은 블록으로 길을 만들고, 오류 고치기를 한 번만 바꾸어 해결해요.',
  },
  teacherNotes: '자주 보이는 어려움: ① 거북이가 아래를 볼 때 왼쪽·오른쪽을 화면 기준으로 고른다 → 몸을 거북이 방향으로 돌려 서 보게 한다(교구가 부딪힌 칸과 방향을 알려 준다). ② 돌기 블록이 한 칸 움직인다고 생각한다 → 실행을 천천히 보며 자리를 센다. ③ 반복 안에 넣을 묶음을 잘못 고른다 → 되풀이되는 블록에 손가락을 대고 묶음을 찾는다. ④ 오류 고치기에서 처음부터 새로 짠다 → 부딪힌 곳 바로 앞 블록부터 살핀다. 실행은 상태를 바꾸지 않으므로 몇 번이든 눌러 보게 한다.',
});
