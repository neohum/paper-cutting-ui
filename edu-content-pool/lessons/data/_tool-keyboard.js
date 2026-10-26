/* 검사용 차시: 종이 건반(keyboard) 교구의 모든 모드(melody 따라 치기·가락 짓기, rhythm 따라 놓기·박 맞추기, janggu 장단, 자기 점검)를 한 차시에서 쓴다.
 * 3학년 1학기 음악 1. 연주 */
PaperLessons.register({
  id: '_tool-keyboard',
  schema: 'edu-lesson.v1',
  catalog: { unit: 'g3-음악-1학기-1', lesson: 5 },
  grade: 3, subject: '음악', unitTitle: '1. 연주',
  title: '종이 건반으로 가락 따라 치고 장단 놓기',
  objective: '들려 준 가락과 리듬을 듣고 건반과 리듬 블록으로 따라 나타내고, 박에 맞게 짧은 가락과 장단을 지을 수 있다.',
  standards: ['[4음01-01]'],
  minutes: 40,
  formats: ['chromebook', 'projector', 'print'],
  illustration: {
    prompt: 'Layered paper-cut illustration of children playing a paper piano and a small janggu drum under musical notes floating like leaves, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.',
    scene: { viewBox: [480, 270], layers: [
      { motif: 'cloud', x: 110, y: 52 }, { motif: 'sun', x: 404, y: 58, s: 0.8 }, { motif: 'hills', y: 200 },
      { motif: 'tree', x: 70, y: 212 }, { motif: 'flower', x: 400, y: 222 }, { motif: 'bird', x: 250, y: 84 },
      { motif: 'text', x: 240, y: 150, text: '듣고, 따라 치고, 지어 봐요', size: 22 },
    ] },
  },
  stages: [
    {
      id: 'intro', title: '도입', minutes: 6,
      teacher: '"선생님이 치는 가락을 잘 들어 보세요. 소리가 올라가나요, 내려가나요?" 시연 단추로 \'솔 솔 라 라 솔\'을 들려준 뒤 손을 위아래로 움직이며 높낮이를 짚는다. 건반은 오른쪽으로 갈수록 높은 소리라는 것을 확인하고, 계이름을 보지 않고 귀로 먼저 찾아보자고 한다.',
      student: '선생님이 치는 가락을 듣고 손으로 소리의 높낮이를 그려 봅시다.',
      demo: { tool: 'keyboard', options: { from: '도', to: '높은도', melody: ['솔', '솔', '라', '라', '솔'] }, sequence: [{ notes: ['솔', '솔', '라', '라', '솔'] }] },
    },
    {
      id: 'main', title: '전개', minutes: 26,
      activities: [
        {
          id: 'a1', title: '활동 1. 가락 듣고 따라 치기', minutes: 10, tool: 'keyboard',
          teacher: '"가락 듣기를 눌러 한 번 듣고, 첫 음부터 하나씩 따라 쳐요." 같은 음이 두 번 이어지는 곳(솔 솔)에서 한 번만 치는 학생이 많다. "소리가 몇 번 났는지 손가락으로 세어 보자"고 하고, 틀린 학생은 높은 쪽·낮은 쪽만 먼저 말하게 한다.',
          task: '가락 듣기를 누르고, 들은 가락을 건반으로 똑같이 쳐 봅시다. 오른쪽 건반일수록 높은 소리예요.',
          levels: {
            easy: { from: '도', to: '높은도', names: 'solfa' },
            base: { from: '도', to: '높은도', names: 'solfa' },
            challenge: { from: '도', to: '높은도', names: 'solfa', black: true },
          },
          items: [
            { prompt: '가락 듣기를 누르고 들은 세 음을 차례로 쳐 보세요.', toolOptions: { melody: ['도', '레', '미'] }, target: { notes: ['도', '레', '미'] }, difficulty: 0.1,
              conclude: '오른쪽으로 한 칸씩 가면 소리가 한 계단씩 높아져요.' },
            { prompt: '가락을 듣고 따라 쳐 보세요. 같은 음이 두 번 나와요.', toolOptions: { melody: ['솔', '솔', '라', '라', '솔'] }, target: { notes: ['솔', '솔', '라', '라', '솔'] }, difficulty: 0.2,
              predict: { q: '이 가락의 마지막 음은 처음 음과 비교하면 어떨까요?', options: ['더 높아요', '같아요', '더 낮아요'] },
              conclude: '같은 음이 이어질 때는 같은 건반을 두 번 쳐요.' },
            { prompt: '계이름을 가리고 들어요. 들은 가락을 쳐 보세요.', toolOptions: { melody: ['미', '레', '도', '레', '미'] }, target: { notes: ['미', '레', '도', '레', '미'] }, reveal: 'after-check', difficulty: 0.3 },
            { prompt: '도로 끝나는 네 음 가락을 지어 보세요.', target: { compose: { length: 4, endOn: '도' } }, difficulty: 0.2,
              conclude: '도로 끝나면 가락이 끝난 느낌이 나요.' },
            { prompt: '더 해 보기: 솔로 시작해 도로 끝나는 다섯 음 가락을 지어요.', target: { compose: { length: 5, startOn: '솔', endOn: '도' } }, extra: true, difficulty: 0.3 },
          ],
        },
        {
          id: 'a2', title: '활동 2. 리듬 블록으로 박 맞추기', minutes: 8, tool: 'keyboard',
          teacher: '"4분음표는 한 박, 8분음표는 반 박, 2분음표는 두 박이에요. 손뼉으로 쳐 볼까요?" 8분음표 두 개가 한 박인 것을 "따-따"로 함께 말하게 한다. 2분음표를 마디 끝에 놓아 마디줄을 넘기는 학생에게는 마디마다 박을 손가락으로 세게 한다.',
          task: '리듬을 듣고 블록으로 놓거나, 한 마디가 4박이 되도록 블록을 골라 놓아요. 블록 아래 박 수를 보세요.',
          levels: {
            easy: { mode: 'rhythm', meter: 4, measures: 2, blocks: ['q', 'e', 'h', 'qr'], showBeats: true },
            base: { mode: 'rhythm', meter: 4, measures: 2, blocks: ['q', 'e', 'h', 'qr'] },
            challenge: { mode: 'rhythm', meter: 4, measures: 2, blocks: ['q', 'e', 'h', 'qr', 'er', 'dh'] },
          },
          items: [
            { prompt: '리듬 듣기를 누르고 들은 리듬을 블록으로 놓아 보세요.', toolOptions: { pattern: ['q', 'q', 'e', 'e', 'q'] }, target: { rhythm: ['q', 'q', 'e', 'e', 'q'] }, difficulty: 0.2 },
            { prompt: '두 마디가 모두 4박이 되도록 블록을 놓아 보세요.', target: { beats: true }, reveal: 'after-check', difficulty: 0.2,
              conclude: '마디마다 박을 더해 4가 되면 박이 맞아요.' },
            { prompt: '8분음표와 쉼표를 하나씩 꼭 넣어 두 마디를 4박으로 채워요.', target: { beats: true, use: ['e'], rests: 1 }, difficulty: 0.35 },
          ],
        },
        {
          id: 'a3', title: '활동 3. 장구 장단 놓고 내 가락 점검하기', minutes: 8, tool: 'keyboard',
          teacher: '"덩은 두 손을 함께, 쿵은 북편(왼손), 덕은 채편(오른손)이에요." 무릎을 장구처럼 치며 세마치 장단을 먼저 몸으로 익힌다. 굵은 금은 한 박의 시작이다. 지은 가락을 짝에게 들려준 학생만 점검 목록을 표시하게 한다.',
          task: '장단 듣기를 누르고 박 칸마다 구음을 넣어요. 마지막에는 내가 지은 가락을 점검해요.',
          levels: {
            easy: { mode: 'janggu', beats: 9, group: 3, jangdan: '세마치', strokes: ['덩', '쿵', '덕'] },
            base: { mode: 'janggu', beats: 9, group: 3, jangdan: '세마치', strokes: ['덩', '쿵', '덕', '기덕'] },
            challenge: { mode: 'janggu', beats: 9, group: 3, jangdan: '세마치' },
          },
          items: [
            { prompt: '세마치 장단을 듣고 아홉 칸에 구음을 넣어 보세요.', toolOptions: { pattern: ['덩', '', '', '덩', '', '덕', '쿵', '덕', ''] }, target: { strokes: ['덩', '', '', '덩', '', '덕', '쿵', '덕', ''] }, difficulty: 0.3 },
            { prompt: '첫 박을 덩으로 바꾼 장단을 듣고 놓아 보세요.', toolOptions: { pattern: ['덩', '', '덕', '쿵', '', '덕', '쿵', '덕', ''] }, target: { strokes: ['덩', '', '덕', '쿵', '', '덕', '쿵', '덕', ''] }, difficulty: 0.35 },
            { prompt: '건반으로 내 가락을 짓고, 해낸 것을 점검 목록에 표시해요.', toolOptions: { mode: 'melody', from: '도', to: '높은도' }, target: { selfCheck: ['네 음 넘게 지었어요', '지은 가락을 두 번 쳐 보았어요', '짝에게 들려주었어요'], minNotes: 4 }, difficulty: 0.1 },
          ],
        },
      ],
    },
    {
      id: 'wrapup', title: '정리', minutes: 8,
      teacher: '"오늘 들은 가락은 어떻게 움직였나요?" 출구 질문 1번(따라 치기)에서 같은 음을 한 번만 친 학생, 2번(8분음표 박)을 틀린 학생은 다음 시간에 손뼉 치기부터 다시 한다.',
      exitTicket: [
        { type: 'tool', tool: 'keyboard', options: { from: '도', to: '높은도', melody: ['미', '미', '솔', '미'] }, prompt: '가락을 듣고 건반으로 따라 쳐 보세요.', target: { notes: ['미', '미', '솔', '미'] }, difficulty: 0.2 },
        { type: 'choice', prompt: '8분음표 두 개를 합치면 몇 박인가요?', options: ['반 박', '한 박', '두 박'], answer: 1, difficulty: 0.2, explain: '8분음표 하나는 반 박이라서 두 개를 합치면 한 박이에요.' },
        { type: 'tool', tool: 'keyboard', options: { mode: 'rhythm', meter: 3, measures: 2, blocks: ['q', 'h', 'qr'] }, prompt: '한 마디가 3박인 두 마디를 블록으로 채워 보세요.', target: { beats: true }, difficulty: 0.3 },
        { type: 'mood', prompt: '오늘 음악 활동은 어땠나요?' },
      ],
    },
  ],
  worksheet: {
    title: '가락과 리듬',
    items: [
      { type: 'figure', prompt: '건반 아래 빈칸에 계이름을 쓰세요.', tool: 'keyboard', options: { from: '도', to: '높은도' }, figures: [{ caption: '도 레 미 … 높은도' }], answer: '도 레 미 파 솔 라 시 높은도' },
      { type: 'figure', prompt: '마디마다 몇 박인지 세어 쓰세요. 4박이 아닌 마디에 ○ 하세요.', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 2 }, figures: [{ state: { rhythm: ['q', 'e', 'e', 'h', 'q', 'q', 'qr', 'e'] }, caption: '첫째 마디 ___박, 둘째 마디 ___박' }], answer: '첫째 마디 4박, 둘째 마디 3박 반(○)' },
      { type: 'choice', prompt: '두 손으로 장구의 북편과 채편을 함께 치는 소리는 무엇인가요?', options: ['쿵', '덕', '덩', '기덕'], answer: '덩' },
      { type: 'table', prompt: '음표와 쉼표의 박 수를 쓰세요.', columns: ['음표·쉼표', '몇 박'], cells: [['4분음표', ''], ['8분음표', ''], ['2분음표', ''], ['4분쉼표', '']] },
      { type: 'short', prompt: '내가 지은 네 음 가락을 계이름으로 쓰고, 어떤 느낌인지 한 줄로 쓰세요.' },
    ],
    easy: {
      note: '오른쪽 건반일수록 높은 소리예요. 4분음표는 한 박, 8분음표는 반 박, 2분음표는 두 박이에요.',
      items: [
        { type: 'figure', prompt: '건반 아래에 계이름을 따라 쓰세요.', tool: 'keyboard', options: { from: '도', to: '높은도', printNames: true }, figures: [{ caption: '도 레 미 파 솔 라 시 높은도' }] },
        { type: 'table', prompt: '박 수를 쓰세요.', columns: ['음표', '몇 박'], cells: [['4분음표', ''], ['2분음표', '']] },
        { type: 'short', prompt: '오늘 쳐 본 가락 가운데 좋았던 것을 쓰세요.' },
      ],
    },
  },
  differentiation: {
    easy: '활동 2에서 마디마다 지금 몇 박인지 보여요. 장단 붓이 덩·쿵·덕 세 가지만 나와요.',
    base: '계이름을 켜고 끌 수 있고, 리듬 블록은 4분음표·8분음표·2분음표·4분쉼표를 써요.',
    challenge: '검은건반이 보이고, 리듬 블록에 8분쉼표와 점2분음표가 더 나와요. 기덕·더러러 붓도 쓸 수 있어요.',
  },
  teacherNotes: '자주 보이는 어려움: ① 같은 음이 이어질 때 한 번만 친다 → 소리 난 횟수를 손가락으로 센다. ② 높낮이를 반대로 찾는다 → 오른쪽이 높은 소리, 손을 올리며 찾게 한다. ③ 8분음표를 한 박으로 센다 → "따-따"가 한 박. ④ 2분음표를 마디 끝에 놓아 마디줄을 넘긴다 → 교구가 그 마디를 빨갛게 보이고 "마디줄을 넘어갔어요"라고 답한다. ⑤ 덩과 쿵을 헷갈린다 → 덩은 두 손, 쿵은 왼손 하나. 소리는 학생이 누를 때만 난다(자동 재생 없음).',
});
