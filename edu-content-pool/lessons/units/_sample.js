/* 단원 파일 형식 예시 — 이 파일은 카탈로그·묶음에 들어가지 않는다(이름이 '_'로 시작).
 * 진짜 단원 파일은 lessons/units/<단원 id>.js 하나에 그 단원의 모든 차시를 담는다(CATALOG_BUILD.md 2절, engine/README.md '단원 파일').
 * 검사: node edu-content-pool/check-unit.mjs _sample --hub http://localhost:8790
 */
PaperLessons.registerUnit({
  id: '_sample', schema: 'edu-unit.v1', catalogUnit: '_sample',
  grade: 1, subject: '수학', unitTitle: '예시 단원. 수 세기와 시계',
  flow: '첫 시간에는 사과를 십칸 판에 놓으며 10까지 세고, 1만큼 더 큰 수와 더 작은 수를 판에서 직접 만들어 봅니다. 둘째 시간에는 같은 "한 칸씩 세기"를 시계로 옮겨, 짧은바늘로 몇 시를 읽고 긴바늘을 6에 놓아 몇 시 30분을 만듭니다. 두 차시 모두 교구로 먼저 해 보고, 출구 질문에서 새 수로 옮겨 쓰는지 확인합니다.',
  // refs: { 3: 'g1-math-count9' } 처럼 이미 있는 차시를 그 번호에 이어 둘 수 있다(그 번호는 lessons에 쓰지 않는다)
  refs: {},
  lessons: [
    {
      id: '_sample-01', schema: 'edu-lesson.v1',
      catalog: { unit: '_sample', lesson: 1 },
      grade: 1, subject: '수학', unitTitle: '예시 단원. 수 세기와 시계',
      title: '십칸 판에 사과를 놓아 10까지 세기',
      objective: '십칸 판에 사과를 놓으며 10까지의 수를 세고, 1만큼 더 큰 수와 1만큼 더 작은 수를 만들 수 있다.',
      standards: ['[2수01-01]'],
      minutes: 40,
      formats: ['chromebook', 'projector', 'print'],
      illustration: {
        prompt: 'Layered paper-cut illustration of a small apple orchard with a wooden basket and ten round apples lined up in two rows, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.',
        scene: { viewBox: [480, 270], layers: [
          { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 120, y: 50 }, { motif: 'hills', y: 204 },
          { motif: 'tree', x: 96, y: 212, s: 1.2 }, { motif: 'tree', x: 384, y: 214, s: 1.1, color: 'mint' },
          { motif: 'apple', x: 80, y: 176, s: 0.4 }, { motif: 'apple', x: 108, y: 168, s: 0.4 }, { motif: 'apple', x: 372, y: 180, s: 0.4 },
          { motif: 'text', x: 240, y: 132, text: '사과를 세어 볼까요?', size: 22 },
        ] },
      },
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '"바구니에 사과가 있어요. 하나씩 칸에 놓으면서 같이 세어 봐요." 시연 단추로 사과가 3개에서 8개까지 들어가는 모습을 보여 준다. 사과를 셀 때 같은 사과를 두 번 세는 학생이 많으니 "놓은 사과는 다시 세지 않아요"라고 짚는다.',
          student: '사과가 몇 개 있는지 같이 세어 봐요.',
          demo: { tool: 'tenframe', options: { item: 'apple', showWord: true }, sequence: [{ count: 3 }, { count: 8 }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 수만큼 사과 놓기', minutes: 13, tool: 'tenframe',
              task: '수만큼 사과를 칸에 놓아요. 윗줄부터 차례로 채워요.',
              teacher: '"윗줄 다섯 칸이 다 차면 몇 개일까요?" 다섯을 먼저 알면 6, 7, 8을 빨리 셀 수 있다고 말해 준다. 9를 놓을 때 10칸을 다 채우는 학생에게 "빈칸이 하나 남아야 해요"라고 짚는다.',
              levels: { easy: { item: 'apple', showWord: true, cellNumbers: true, showGoal: true, revealAfterCheck: true }, base: { item: 'apple', showCount: false }, challenge: { item: 'apple', showCount: false, scatter: true } },
              items: [
                { prompt: '사과 3개를 놓아 보세요.', target: { count: 3 }, difficulty: 0 },
                { prompt: '사과 여섯 개를 놓아 보세요.', target: { count: 6 }, difficulty: 0.1 },
                { prompt: '사과 9개를 놓아 보세요. 빈칸은 몇 개 남을까요?', target: { count: 9 }, difficulty: 0.2,
                  conclude: '10칸 가운데 9칸을 채우면 빈칸이 1개 남아요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 하나 더, 하나 덜', minutes: 13, tool: 'tenframe',
              task: '판에 있는 칩에 하나를 더 놓거나 하나를 빼요. 수가 어떻게 바뀌나요?',
              teacher: '"하나 더 놓으면 1만큼 더 큰 수, 하나 빼면 1만큼 더 작은 수예요." 1만큼 더 작은 수에서 칩을 하나 더 놓는 학생이 있다 — "작은 수는 빼는 쪽이에요"라고 말해 준다.',
              levels: { easy: { item: 'chip', color: 'sky', showWord: true, cellNumbers: true, showGoal: true, revealAfterCheck: true }, base: { item: 'chip', color: 'sky', showCount: false, showGoal: true }, challenge: { item: 'chip', color: 'sky', showCount: false, scatter: true, showGoal: true } },
              items: [
                { prompt: '4보다 1만큼 더 큰 수를 만들어 보세요.', state: { count: 4 }, target: { count: 4, more: 1 }, difficulty: 0.05 },
                { prompt: '6보다 1만큼 더 작은 수를 만들어 보세요.', state: { count: 6 }, target: { count: 6, less: 1 }, difficulty: 0.15 },
                { prompt: '2보다 1만큼 더 큰 수를 만들어 보세요.', state: { count: 2 }, target: { count: 2, more: 1 }, difficulty: 0.1,
                  predict: { q: '하나를 더 놓으면 수는 어떻게 될까요?', options: ['커져요', '작아져요', '그대로예요'], answer: 0 },
                  conclude: '하나를 더 놓으면 1만큼 더 큰 수가 돼요.' },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"8보다 1만큼 더 큰 수는 무엇일까요? 손가락으로 해 볼까요?" 출구 질문 2번을 틀린 학생이 많으면 수 줄에서 오른쪽으로 한 칸 가는 것을 다시 보여 준다.',
          exitTicket: [
            { type: 'tool', tool: 'tenframe', options: { item: 'chip', color: 'mint', showCount: false }, prompt: '칩 8개를 놓아 보세요.', target: { count: 8 }, difficulty: 0.1 },
            { type: 'choice', prompt: '7보다 1만큼 더 큰 수는 무엇인가요?', options: ['6', '8', '9'], answer: 1, difficulty: 0.15, explain: '7에 하나를 더 놓으면 8이에요.' },
            { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
          ],
        },
      ],
      worksheet: {
        title: '10까지 세기',
        items: [
          { type: 'figure', prompt: '사과가 몇 개인지 세어 쓰세요.', tool: 'tenframe', options: { item: 'apple' }, figures: [
            { state: { count: 5 }, caption: '___개' }, { state: { count: 7 }, caption: '___개' }, { state: { count: 10 }, caption: '___개' }], answer: '5개, 7개, 10개' },
          { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '5보다 1만큼 더 큰 수는 ___, 5보다 1만큼 더 작은 수는 ___예요.', answer: '6, 4' },
          { type: 'choice', prompt: '9보다 1만큼 더 작은 수에 ○ 하세요.', options: ['7', '8', '10'], answer: '8' },
          { type: 'draw', prompt: '사과 6개를 그려 보세요.' },
        ],
        easy: {
          note: '사과를 하나씩 손가락으로 짚으며 세어요. 윗줄이 다 차면 다섯이에요.',
          items: [
            { type: 'figure', prompt: '사과가 몇 개인지 세어 쓰세요.', tool: 'tenframe', options: { item: 'apple', cellNumbers: true }, figures: [
              { state: { count: 3 }, caption: '___개' }, { state: { count: 5 }, caption: '___개' }], answer: '3개, 5개' },
            { type: 'draw', prompt: '사과 4개를 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '칸 번호와 목표가 보이고, 수 카드는 확인을 누른 뒤에 보여요.',
        base: '수 카드가 가려져 스스로 세어요.',
        challenge: '칩이 흩어진 칸에 들어가 다섯 묶음으로 셀 수 없어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 같은 사과를 두 번 센다 → 놓은 것은 다시 세지 않는다. ② 1만큼 더 작은 수에서 하나를 더 놓는다 → "작은 수는 빼요". ③ 9와 10을 헷갈린다 → 빈칸이 하나 남는지 본다.',
    },
    {
      id: '_sample-02', schema: 'edu-lesson.v1',
      catalog: { unit: '_sample', lesson: 2 },
      grade: 1, subject: '수학', unitTitle: '예시 단원. 수 세기와 시계',
      title: '시계로 몇 시와 몇 시 30분 만들기',
      objective: '짧은바늘과 긴바늘을 보고 몇 시와 몇 시 30분을 읽고 시계에 나타낼 수 있다.',
      standards: ['[2수03-07]'],
      minutes: 40,
      formats: ['chromebook', 'projector', 'print'],
      illustration: {
        prompt: 'Layered paper-cut illustration of a round paper wall clock above a classroom door with children lining up for lunch, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.',
        scene: { viewBox: [480, 270], layers: [
          { motif: 'sun', x: 400, y: 60, s: 0.8 }, { motif: 'cloud', x: 110, y: 56 }, { motif: 'hills', y: 206 },
          { motif: 'house', x: 130, y: 214 }, { motif: 'tree', x: 350, y: 214 },
          { motif: 'text', x: 240, y: 140, text: '지금 몇 시일까요?', size: 22 },
        ] },
      },
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '"점심은 12시 30분에 먹어요. 시계로 12시 30분은 어떻게 보일까요?" 시연 단추로 3시에서 3시 30분으로 바늘이 가는 모습을 보여 준다. 긴바늘이 반 바퀴 도는 동안 짧은바늘은 3과 4 사이 가운데로 간다는 것을 짚는다.',
          student: '우리가 학교에 오는 시각을 시계에서 찾아봐요.',
          demo: { tool: 'clock', options: { showDigital: true }, sequence: [{ h: 3, m: 0 }, { h: 3, m: 30 }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 몇 시 읽기', minutes: 12, tool: 'clock',
              task: '긴바늘이 12를 가리키면 몇 시예요. 짧은바늘이 가리키는 숫자를 읽어요.',
              teacher: '"긴바늘이 12에 있을 때 짧은바늘이 가리키는 숫자가 몇 시예요." 긴바늘을 보고 시를 읽는 학생에게 "짧은바늘이 시를 알려 줘요"라고 말해 준다.',
              levels: { easy: { hourZone: true }, base: {}, challenge: {} },
              items: [
                { prompt: '시계를 보고 몇 시인지 골라 보세요.', state: { h: 2, m: 0 }, toolOptions: { readOnly: true, choices: ['12시', '2시', '3시'] }, target: { pick: 1, h: 2, m: 0 }, difficulty: 0.05 },
                { prompt: '짧은바늘을 잘 보고 몇 시인지 골라 보세요.', state: { h: 9, m: 0 }, toolOptions: { readOnly: true, choices: ['9시', '12시', '3시'] }, target: { pick: 0, h: 9, m: 0 }, difficulty: 0.1 },
                { prompt: '시계를 보고 몇 시인지 골라 보세요. 두 바늘의 길이를 견주어 봐요.', state: { h: 11, m: 0 }, toolOptions: { readOnly: true, choices: ['12시', '1시', '11시'] }, target: { pick: 2, h: 11, m: 0 }, difficulty: 0.2,
                  conclude: '짧은바늘이 11을 가리키고 긴바늘이 12에 있으면 11시예요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 몇 시 30분 만들기', minutes: 14, tool: 'clock',
              task: '긴바늘을 6에 놓으면 30분이에요. 짧은바늘은 두 숫자 사이 가운데에 와요.',
              teacher: '"4시 30분의 짧은바늘은 4와 5 가운데예요." 짧은바늘을 5에 똑바로 놓는 학생에게 "아직 5시가 되지 않았어요"라고 짚는다.',
              levels: { easy: { minuteStep: 30, independent: true, hourZone: true, showMinuteNumbers: true }, base: { minuteStep: 30 }, challenge: { minuteStep: 5 } },
              items: [
                { prompt: '4시 30분을 만들어 보세요.', target: { h: 4, m: 30 }, state: { h: 12, m: 0 }, difficulty: 0.1 },
                { prompt: '7시를 만들어 보세요.', target: { h: 7, m: 0 }, state: { h: 5, m: 30 }, difficulty: 0.1 },
                { prompt: '10시 30분을 만들어 보세요. 짧은바늘은 어디쯤일까요?', target: { h: 10, m: 30 }, state: { h: 2, m: 0 }, difficulty: 0.2,
                  predict: { q: '10시 30분일 때 짧은바늘은 어디에 있을까요?', options: ['10을 똑바로 가리켜요', '10과 11 사이 가운데', '11을 똑바로 가리켜요'], answer: 1 },
                  conclude: '30분이면 짧은바늘은 두 숫자 사이 가운데에 와요.' },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"8시 30분을 만들 때 긴바늘은 어디에 놓았나요?" 출구 2번을 틀린 학생은 짧은바늘을 8에 똑바로 두었는지 살핀다.',
          exitTicket: [
            { type: 'tool', tool: 'clock', options: { readOnly: true, choices: ['6시 30분', '7시 30분', '6시'] }, state: { h: 6, m: 30 }, prompt: '시계를 보고 몇 시 몇 분인지 고르세요.', target: { pick: 0, h: 6, m: 30 }, difficulty: 0.15 },
            { type: 'tool', tool: 'clock', options: { minuteStep: 30 }, state: { h: 12, m: 0 }, prompt: '8시 30분을 만들어 보세요.', target: { h: 8, m: 30 }, difficulty: 0.15 },
            { type: 'choice', prompt: '3시 30분일 때 긴바늘은 어느 숫자를 가리키나요?', options: ['3', '6', '12'], answer: 1, difficulty: 0.1, explain: '30분이면 긴바늘은 6을 가리켜요.' },
            { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
          ],
        },
      ],
      worksheet: {
        title: '몇 시, 몇 시 30분',
        items: [
          { type: 'figure', prompt: '시계를 보고 몇 시 몇 분인지 쓰세요.', tool: 'clock', figures: [
            { state: { h: 1, m: 0 }, caption: '___시 ___분' }, { state: { h: 5, m: 30 }, caption: '___시 ___분' }, { state: { h: 12, m: 30 }, caption: '___시 ___분' }], answer: '1시, 5시 30분, 12시 30분' },
          { type: 'figure', prompt: '시각에 맞게 바늘을 그려 넣으세요.', tool: 'clock', figures: [
            { options: { hideHands: true }, caption: '2시' }, { options: { hideHands: true }, caption: '9시 30분' }], answer: '2시: 긴바늘 12·짧은바늘 2, 9시 30분: 긴바늘 6·짧은바늘 9와 10 사이' },
          { type: 'choice', prompt: '11시 30분을 바르게 읽은 친구에 ○ 하세요.', options: ['"12시 30분이에요"', '"11시 30분이에요"', '"6시 55분이에요"'], answer: '"11시 30분이에요"' },
          { type: 'short', prompt: '나는 몇 시에 잠자리에 드나요? 시각을 쓰세요.' },
        ],
        easy: {
          note: '긴바늘이 12면 몇 시, 6이면 몇 시 30분이에요.',
          items: [
            { type: 'figure', prompt: '시계를 보고 몇 시인지 쓰세요.', tool: 'clock', options: { showMinuteNumbers: true }, figures: [
              { state: { h: 3, m: 0 }, caption: '___시' }, { state: { h: 8, m: 0 }, caption: '___시' }], answer: '3시, 8시' },
            { type: 'short', prompt: '나는 몇 시에 학교에 오나요?' },
          ],
        },
      },
      differentiation: {
        easy: '짧은바늘이 있어야 할 자리가 연하게 칠해지고, 짧은바늘이 긴바늘을 따라가지 않아요.',
        base: '긴바늘이 30분씩 움직여요.',
        challenge: '긴바늘이 5분씩 움직여 6에 정확히 놓아야 해요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 긴바늘로 시를 읽는다 → 짧은바늘이 시. ② 몇 시 30분에 짧은바늘을 다음 숫자에 똑바로 둔다 → 두 숫자 사이 가운데. ③ 30분을 "3분"으로 읽는다(긴바늘이 6을 가리킴 → 6×5).',
    },
  ],
});
