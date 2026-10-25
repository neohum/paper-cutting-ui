/* 5학년 2학기 수학 5. 직육면체와 정육면체 — 정육면체의 전개도 */
PaperLessons.register({
  id: 'g5-math-cuboid',
  schema: 'edu-lesson.v1',
  catalog: { unit: 'g5-수학-2학기-5', lesson: 5 },
  grade: 5, subject: '수학', unitTitle: '5. 직육면체와 정육면체',
  title: '정육면체의 전개도 알아보기',
  objective: '정육면체의 전개도를 이해하고, 전개도를 접었을 때 서로 마주 보는 면을 찾을 수 있다.',
  standards: ['[6수03-03]', '[6수03-04]'],
  minutes: 40,
  formats: ['chromebook', 'projector', 'print'],
  illustration: {
    prompt: "Layered paper-cut illustration of a pastel paper cube gently unfolding into a cross-shaped net on a craft table with scissors and colored paper squares, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.",
    image: "img/g5-math-cuboid.webp", size: [1200, 800],
    scene: { viewBox: [480, 270], layers: [
      { motif: 'sun', x: 410, y: 62, s: 0.8 }, { motif: 'cloud', x: 110, y: 54 }, { motif: 'cloud', x: 270, y: 36, s: 0.7 },
      { motif: 'hills', y: 210, colors: ['lavender', 'sky', 'buttercup'] },
      { motif: 'flower', x: 60, y: 226 },
      { motif: 'flower', x: 420, y: 232, color: 'lavender' },
      { motif: 'star', x: 150, y: 110, color: 'peach' },
      { motif: 'star', x: 340, y: 120, color: 'mint' },
      { motif: 'text', x: 240, y: 158, text: '펼치면 전개도, 접으면 정육면체!', size: 22 },
    ] },
  },
  stages: [
    {
      id: 'intro', title: '도입', minutes: 5,
      teacher: '주사위 상자를 모서리를 따라 잘라 펼친 모습을 상상하게 한 뒤 "어떤 모양이 나올까요?"라고 묻는다. 시연 단추로 십자 모양과 계단 모양 전개도가 접혀 정육면체가 되는 모습을 보여 준다.',
      student: '정육면체 상자를 펼치면 어떤 모양이 될지 상상해 봅시다.',
      demo: { tool: 'cubenet', options: {}, sequence: [
        { cells: { ㄱ: [1, 0], ㄴ: [0, 1], ㄷ: [1, 1], ㄹ: [2, 1], ㅁ: [3, 1], ㅂ: [1, 2] } },
        { cells: { ㄱ: [0, 0], ㄴ: [1, 0], ㄷ: [1, 1], ㄹ: [2, 1], ㅁ: [3, 1], ㅂ: [3, 2] } },
      ] },
    },
    {
      id: 'main', title: '전개', minutes: 28,
      activities: [
        {
          id: 'a1', title: '활동 1. 정육면체의 전개도 만들기', minutes: 12, tool: 'cubenet',
          task: '정사각형 6장을 끌어서 모눈에 놓아요. 정육면체의 전개도(정육면체를 펼친 모양)를 만들고, 접기를 눌러 확인해요.',
          teacher: '"정사각형 6개를 이어 붙이기만 하면 언제나 정육면체가 될까요?" 한 줄로 놓은 처음 모양을 접어 보게 해 겹치는 면이 생기는 것을 먼저 확인한다. 2번 문항은 네 면 줄이 미리 놓여 있고, 1번에서 많이 만드는 십자(+) 모양은 받지 않는다.',
          levels: {
            // 쉬움: 처음 배치를 한 줄 6칸 대신 '네 면 줄의 같은 쪽에 두 면'(한 칸만 옮기면 전개도)으로 둔다
            easy: { showStatus: true, revealPairs: true, start: { ㄱ: [0, 0], ㄴ: [0, 1], ㄷ: [1, 1], ㄹ: [2, 1], ㅁ: [3, 1], ㅂ: [2, 0] } },
            base: { revealPairs: true },
            challenge: { allowFold: false },
          },
          items: [
            { prompt: '정육면체의 전개도를 하나 만들어 보세요.', target: { valid: true }, difficulty: 0.12 },
            // 네 면 줄을 미리 놓아 조작 부담(방향키 13번 이상)을 줄이고, 1번과 같은 십자를 다시 내는 것을 막는다
            { prompt: '네 면이 한 줄로 놓여 있어요. 남은 두 면을 붙여 십자(+) 모양이 아닌 전개도를 만들어 보세요.', state: { cells: { ㄱ: [0, 3], ㄴ: [1, 1], ㄷ: [2, 1], ㄹ: [3, 1], ㅁ: [4, 1], ㅂ: [5, 3] } }, target: { valid: true, line4: true, notCross: true }, difficulty: 0.15 },
            { prompt: '네 면이 한 줄로 이어진 곳이 없는 정육면체의 전개도를 만들어 보세요.', target: { valid: true, line4: false }, difficulty: 0.2 },
          ],
        },
        {
          id: 'a2', title: '활동 2. 마주 보는 면 찾기', minutes: 10, tool: 'cubenet',
          options: { paint: true, locked: true },
          task: '전개도를 접었을 때 서로 마주 보는 면을 찾아 같은 색으로 칠해 봅시다.',
          teacher: '"면 ㄱ과 변이 맞닿은 면은 접으면 어디로 갈까요?" 맞닿은 면은 옆면이 되고, 마주 보는 면은 맞닿지 않는다는 점을 접기로 확인하게 한다.',
          levels: {
            // 쉬움: 세 쌍 칠하기에서 맞게 칠한 짝 수(예: 2 / 3)를 보여 준다
            easy: { allowFold: true, showStatus: true },
            base: { allowFold: true },
            challenge: { allowFold: false },
          },
          items: [
            { prompt: '면 ㄱ과 마주 보는 면을 찾아 면 ㄱ과 같은 분홍색으로 칠하세요.', state: { cells: { ㄱ: [1, 0], ㄴ: [0, 1], ㄷ: [1, 1], ㄹ: [2, 1], ㅁ: [3, 1], ㅂ: [1, 2] }, paint: { ㄱ: 'rose' } }, target: { opposite: ['ㄱ', 'ㅂ'] }, difficulty: 0.05 },
            { prompt: '면 ㄷ과 마주 보는 면을 찾아 면 ㄷ과 같은 연두색으로 칠하세요.', state: { cells: { ㄱ: [0, 0], ㄴ: [1, 0], ㄷ: [1, 1], ㄹ: [2, 1], ㅁ: [3, 1], ㅂ: [3, 2] }, paint: { ㄷ: 'mint' } }, target: { opposite: ['ㄷ', 'ㅁ'] }, difficulty: 0.1 },
            { prompt: '마주 보는 면끼리 같은 색이 되도록 세 가지 색으로 여섯 면을 모두 칠하세요.', state: { cells: { ㄱ: [0, 0], ㄴ: [1, 0], ㄷ: [1, 1], ㄹ: [2, 1], ㅁ: [3, 1], ㅂ: [3, 2] } }, target: { pairs: true }, difficulty: 0.25 },
          ],
        },
        {
          id: 'a3', title: '활동 3. 짝과 다른 전개도 찾기', minutes: 6, tool: 'cubenet', pair: true,
          task: '짝과 서로 다른 모양의 정육면체 전개도를 만들어 보고, 돌리거나 뒤집으면 같은 모양인지 이야기해 봅시다.',
          teacher: '반 전체가 찾은 전개도를 칠판에 모아, 돌리거나 뒤집어 같은 것을 하나로 묶으면 모두 11가지임을 알려 준다(모두 외울 필요는 없음).',
          levels: {
            easy: { showStatus: true, revealPairs: true },
            base: { revealPairs: true },
            challenge: { allowFold: false },
          },
          items: [{ prompt: '짝과 다른 전개도를 만들고 접어서 확인한 뒤 "다 했어요"를 누르세요.', free: true, difficulty: 0 }],
        },
      ],
    },
    {
      id: 'wrapup', title: '정리', minutes: 7,
      teacher: '"정사각형 6개를 이어 붙였는데 전개도가 아닌 경우는 언제였나요?"(한 줄에 5개 이상, 2×2로 4개가 모인 경우, 네 면 줄의 같은 쪽에 두 면이 붙은 경우 등) 출구 질문에서 마주 보는 면을 틀린 학생에게는 접기로 다시 확인하게 한다.',
      exitTicket: [
        { type: 'choice', prompt: '정육면체의 전개도에서 한 면과 마주 보는 면은 몇 개인가요?', options: ['1개', '2개', '4개'], answer: 0, difficulty: 0.05, explain: '정육면체에서 한 면과 마주 보는 면은 꼭 하나예요. 나머지 네 면은 그 면과 수직으로 만나는 옆면이에요.' },
        { type: 'tool', tool: 'cubenet', options: { showStatus: false }, prompt: '정육면체의 전개도를 하나 만들어 보세요.', target: { valid: true }, difficulty: 0.15 },
        { type: 'choice', prompt: '정육면체의 전개도를 접었을 때 면 ㄱ과 변이 맞닿아 있던 면은 면 ㄱ과 어떤 관계인가요?', options: ['마주 보는 면', '면 ㄱ과 수직으로 만나는 면', '면 ㄱ과 같은 면'], answer: 1, difficulty: 0.15, explain: '전개도에서 변이 맞닿은 두 면은 접으면 모서리에서 만나므로 서로 수직이에요. 마주 보는 면끼리는 전개도에서 맞닿지 않아요.' },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
  ],
  worksheet: {
    title: '정육면체의 전개도',
    items: [
      { type: 'figure', prompt: '정육면체의 전개도인 것에 ○표, 아닌 것에 ×표 하세요.', tool: 'cubenet', options: { cols: 5, rows: 3 }, figures: [
        { state: { cells: { ㄱ: [0, 0], ㄴ: [1, 0], ㄷ: [2, 0], ㄹ: [2, 1], ㅁ: [3, 1], ㅂ: [4, 1] } }, caption: '가 (      )' },
        { state: { cells: { ㄱ: [0, 0], ㄴ: [1, 0], ㄷ: [0, 1], ㄹ: [1, 1], ㅁ: [2, 1], ㅂ: [3, 1] } }, caption: '나 (      )' },
        { state: { cells: { ㄱ: [1, 0], ㄴ: [0, 1], ㄷ: [1, 1], ㄹ: [2, 1], ㅁ: [3, 1], ㅂ: [3, 2] } }, caption: '다 (      )' }], answer: '가 ○, 나 × (2×2로 모인 네 면이 있어 겹침), 다 ○' },
      { type: 'figure', prompt: '전개도를 접어 정육면체를 만들었을 때 물음에 답하세요.', tool: 'cubenet', options: { cols: 4, rows: 3 }, figures: [
        { state: { cells: { ㄱ: [0, 0], ㄴ: [1, 0], ㄷ: [1, 1], ㄹ: [2, 1], ㅁ: [3, 1], ㅂ: [3, 2] } }, caption: '' }] },
      { type: 'blank', prompt: '위 전개도에서 마주 보는 면을 쓰세요.', text: '면 ㄱ과 마주 보는 면: 면 ___   면 ㄷ과 마주 보는 면: 면 ___   면 ㄴ과 마주 보는 면: 면 ___', answer: 'ㄹ, ㅁ, ㅂ' },
      { type: 'draw', prompt: '모눈 위에 1번에 없는 모양의 정육면체 전개도를 하나 그려 보세요.', answer: '예: 십자(+) 모양, 계단 모양(2-2-2) 등 11가지 전개도 가운데 가·다와 돌리거나 뒤집어 겹치지 않는 것' },
    ],
    easy: { note: '변으로 맞닿은 면은 옆면이 되고, 한 줄로 놓인 세 면의 양 끝 면은 마주 보아요.' },
  },
  differentiation: {
    easy: '이어진 면의 수와 겹치기 쉬운 모양(한 줄 다섯 면, 2×2) 주의가 화면에 나오고, 처음 배치가 한 칸만 옮기면 되는 모양이에요. 색칠하기에서는 맞게 칠한 짝 수가 보여요.',
    challenge: '접기 단추 없이 머릿속으로 접어 보고 판단해요.',
  },
  teacherNotes: '오개념 1) 정사각형 6개가 변으로 이어지기만 하면 모두 전개도라고 여긴다 — 한 줄에 5개 이상 있거나 2×2로 4개가 모이면 접었을 때 겹친다는 것을 접기로 직접 보게 한다. 2) 변이 맞닿은 면을 마주 보는 면으로 고른다 — 맞닿은 면은 접으면 수직으로 만나는 옆면이 되고, 마주 보는 면끼리는 전개도에서 서로 맞닿지 않는다. 3) 돌리거나 뒤집은 모양을 다른 전개도로 센다 — 돌리거나 뒤집어 포개어지면 같은 전개도이며 서로 다른 정육면체 전개도는 11가지다. 4) 전개도를 그릴 때 잘린 모서리는 실선, 접히는 모서리는 점선으로 그린다는 약속을 활동지 그리기 문항에서 확인한다.',
});
