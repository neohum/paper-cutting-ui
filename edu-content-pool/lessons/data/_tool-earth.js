/* 검사용 차시: 태양·지구·달(earth) 교구의 모든 모드(spin·orbit·moon·shadow·planets·ask)를 한 차시에서 쓴다. 6학년 1학기 4. 지구의 운동 */
PaperLessons.register({
  id: '_tool-earth',
  schema: 'edu-lesson.v1',
  catalog: { unit: 'g6-과학-1학기-4', lesson: 1 },
  grade: 6, subject: '과학', unitTitle: '4. 지구의 운동',
  title: '종이 태양계로 낮과 밤, 계절 별자리, 달 모양 알아보기',
  objective: '지구의 자전과 공전, 달의 모양 변화를 모형으로 나타내어 낮과 밤·계절 별자리·달의 위상이 생기는 까닭을 설명할 수 있다.',
  standards: ['[6과12-01]', '[6과12-02]'],
  minutes: 40,
  formats: ['chromebook', 'projector', 'print'],
  illustration: {
    prompt: 'Layered paper-cut illustration of a paper sun, a small blue earth on a dotted orbit and a crescent moon among paper stars, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.',
    scene: { viewBox: [480, 270], background: '#2E2A45', layers: [
      { motif: 'sun', x: 90, y: 120 }, { motif: 'moon', x: 380, y: 70, s: 0.8 }, { motif: 'star', x: 300, y: 40 }, { motif: 'star', x: 440, y: 150 }, { motif: 'star', x: 200, y: 60 },
      { motif: 'text', x: 280, y: 220, text: '왜 낮과 밤이 바뀔까요?', size: 22, fill: '#FFF9E8' },
    ] },
  },
  stages: [
    {
      id: 'intro', title: '도입', minutes: 6,
      teacher: '"해가 동쪽에서 떠서 서쪽으로 지는 것은 해가 움직여서일까요, 우리가 움직여서일까요?" 시연 단추로 지구가 시계 반대 방향으로 돌며 우리나라가 빛을 받는 쪽에서 못 받는 쪽으로 넘어가는 모습을 보여 준다. 태양은 가만히 있다는 것을 짚는다.',
      student: '그림 속 태양과 달을 보고, 오늘 아침 해가 어느 쪽에서 떴는지 이야기해 봅시다.',
      demo: { tool: 'earth', options: { mode: 'spin', start: { hour: 6 } }, sequence: [{ hour: 12 }, { hour: 0 }] },
    },
    {
      id: 'main', title: '전개', minutes: 27,
      activities: [
        {
          id: 'a1', title: '활동 1. 지구를 돌려 낮과 밤 만들기', minutes: 9, tool: 'earth', options: { mode: 'spin' },
          teacher: '"지구가 한 바퀴 도는 데 걸리는 시간은? 그동안 우리나라는 몇 번 낮이 될까요?" 해 뜰 무렵을 해 질 무렵과 바꿔 고르는 학생에게 지구가 도는 방향(시계 반대 방향)을 손가락으로 따라가게 한다.',
          task: '지구를 끌어 돌리거나 방향키로 한 시간씩 돌려 우리나라의 때를 맞춰요.',
          levels: { easy: { readout: true }, base: {}, challenge: { showSides: false } },
          items: [
            { prompt: '우리나라가 밤이 되도록 지구를 돌려 보세요.', state: { hour: 12 }, target: { time: '밤' }, difficulty: 0.1,
              predict: { q: '우리나라가 밤이 되려면 어느 쪽에 있어야 할까요?', options: ['태양 쪽', '태양 반대쪽', '아무 데나'] },
              conclude: '태양 빛을 받지 못하는 쪽에 있으면 밤이에요.' },
            { prompt: '우리나라가 해 뜰 무렵이 되도록 지구를 돌려 보세요.', state: { hour: 0 }, target: { phase: '해 뜰 무렵' }, difficulty: 0.25 },
            { prompt: '우리나라가 낮 12시가 되도록 지구를 돌려 보세요.', state: { hour: 20 }, target: { hour: 12 }, difficulty: 0.15 },
            { prompt: '우리나라가 오후 3시가 되도록 지구를 돌려 보세요. 시각은 확인한 뒤에 보여요.', state: { hour: 8 }, toolOptions: { readout: true }, target: { hour: 15 }, difficulty: 0.3, reveal: 'after-check' },
          ],
        },
        {
          id: 'a2', title: '활동 2. 계절 별자리와 달 모양', minutes: 9, tool: 'earth', options: { mode: 'orbit' },
          teacher: '"여름밤에 오리온자리를 볼 수 없는 까닭은?" 오리온자리가 태양 쪽에 있을 때는 낮에 떠 있어 보이지 않음을 짚는다. 달 문항에서 상현달과 하현달을 바꾸는 학생이 많다. 음력 7~8일은 오른쪽 반이 밝다고 짚는다.',
          task: '지구를 계절 자리로 옮기고, 날짜 카드를 눌러 달 모양을 골라요.',
          levels: { easy: { seasonNames: true, readout: true }, base: {}, challenge: { seasonNames: false } },
          items: [
            { prompt: '지구를 여름 자리로 옮겨 보세요.', state: { season: '겨울' }, target: { season: '여름' }, difficulty: 0.1 },
            { prompt: '한밤에 오리온자리가 잘 보이는 자리로 지구를 옮겨 보세요.', state: { season: '여름' }, target: { night: '오리온자리' }, difficulty: 0.3,
              predict: { q: '오리온자리가 잘 보이려면 별자리가 지구의 어느 쪽에 있어야 할까요?', options: ['태양과 같은 쪽', '태양 반대쪽(밤 쪽)'] },
              conclude: '밤에는 태양 반대쪽 하늘이 보여요. 그래서 계절마다 보이는 별자리가 달라요.' },
            { prompt: '날짜 카드를 눌러 음력 날짜에 맞는 달 모양을 골라 보세요.', toolOptions: { mode: 'moon', days: [3, 7, 15] }, target: { moon: 'auto' }, difficulty: 0.2 },
            { prompt: '보름이 지난 뒤의 달 모양을 골라 보세요.', toolOptions: { mode: 'moon', days: [22, 27] }, target: { moon: 'auto' }, difficulty: 0.3,
              conclude: '보름 뒤에는 오른쪽부터 어두워져 하현달, 그믐달이 돼요.' },
          ],
        },
        {
          id: 'a3', title: '활동 3. 그림자 길이와 행성 차례', minutes: 9, tool: 'earth', options: { mode: 'shadow' },
          teacher: '"태양이 높이 뜨면 그림자는 길어질까요, 짧아질까요?" 태양을 직접 옮기며 고도와 그림자 길이가 반대로 변한다는 것을 찾게 한다. 행성 차례에서는 지구가 셋째라는 것을 기준으로 앞뒤를 맞추게 한다.',
          task: '태양을 끌거나 방향키로 옮겨 그림자를 보고, 행성 카드를 차례대로 놓아요.',
          levels: { easy: { readout: true }, base: {}, challenge: { showGrid: false } },
          items: [
            { prompt: '막대 그림자가 가장 짧아지도록 태양을 옮겨 보세요. 고도와 길이는 확인한 뒤에 보여요.', state: { alt: 30 }, toolOptions: { readout: true }, target: { shortest: true }, difficulty: 0.15, reveal: 'after-check',
              predict: { q: '그림자가 가장 짧을 때 태양은 어디에 있을까요?', options: ['가장 높은 곳', '가장 낮은 곳'] },
              conclude: '태양 고도가 높을수록 그림자는 짧아져요.' },
            { prompt: '막대 그림자가 가장 길어지도록 태양을 옮겨 보세요.', state: { alt: 50 }, target: { longest: true }, difficulty: 0.15 },
            { prompt: '하루 동안 태양이 움직여요. 태양이 남쪽 하늘에서 가장 높이 뜬 때로 옮겨 보세요.', toolOptions: { hours: { rise: 6, set: 18, top: 60 }, readout: true }, state: { hour: 8 }, target: { noon: true }, difficulty: 0.2 },
            { prompt: '태양에서 가까운 차례대로 행성 카드를 놓아 보세요.', toolOptions: { mode: 'planets', planets: ['수성', '금성', '지구', '화성'] }, target: { order: ['수성', '금성', '지구', '화성'] }, difficulty: 0.15 },
            { prompt: '그림을 보고 고르세요. 이 달은 음력 며칠 무렵일까요?', toolOptions: { mode: 'moon', days: [15], readOnly: true, dayLabel: '오늘 밤', ask: { q: '음력 며칠 무렵?', choices: ['음력 2~3일', '음력 15일', '음력 27일'], why: ['음력 2~3일에는 오른쪽이 가늘게 밝은 초승달이에요.', null, '음력 27일 무렵에는 왼쪽이 가늘게 밝은 그믐달이에요.'] } }, state: { moon: { 15: '보름달' } }, target: { pick: 1 }, difficulty: 0.15 },
          ],
        },
      ],
    },
    {
      id: 'wrapup', title: '정리', minutes: 7,
      teacher: '"지구가 하루에 한 바퀴 돌아서 생기는 것과, 일 년에 태양을 한 바퀴 돌아서 생기는 것을 하나씩 말해 볼까요?" 출구 질문에서 자전과 공전을 바꿔 쓴 학생은 다음 시간에 모형으로 다시 짚는다.',
      exitTicket: [
        { type: 'tool', tool: 'earth', options: { mode: 'spin' }, state: { hour: 0 }, prompt: '우리나라가 낮이 되도록 지구를 돌리세요.', target: { time: '낮' }, difficulty: 0.15 },
        { type: 'tool', tool: 'earth', options: { mode: 'moon', days: [8, 23] }, prompt: '두 날짜의 달 모양을 고르세요.', target: { moon: 'auto' }, difficulty: 0.25 },
        { type: 'choice', prompt: '계절에 따라 밤하늘에 보이는 별자리가 달라지는 까닭은?', options: ['지구가 자전하기 때문에', '지구가 공전하기 때문에', '별자리가 움직이기 때문에'], answer: 1, difficulty: 0.2, explain: '지구가 태양 둘레를 돌면서 밤 쪽이 향하는 하늘이 바뀌어요.' },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
  ],
  worksheet: {
    title: '종이 태양계 관찰 기록',
    items: [
      { type: 'figure', prompt: '그림에서 우리나라는 낮인가요, 밤인가요? 까닭도 쓰세요.', tool: 'earth', options: { mode: 'spin', showArrow: true }, figures: [{ state: { hour: 0 }, caption: '(        )' }, { state: { hour: 12 }, caption: '(        )' }], answer: '밤(빛을 못 받는 쪽), 낮(빛을 받는 쪽)' },
      { type: 'figure', prompt: '달 모양의 이름을 쓰세요.', tool: 'earth', options: { mode: 'moon', days: [3, 15, 27], printShapes: true, dayLabel: '{d}' }, figures: [{ state: { moon: { 3: '초승달', 15: '보름달', 27: '그믐달' } }, caption: '음력 3일, 15일, 27일' }], wide: true, answer: '초승달, 보름달, 그믐달' },
      { type: 'figure', prompt: '태양 고도가 높아지면 그림자 길이는 어떻게 되나요?', tool: 'earth', options: { mode: 'shadow' }, figures: [{ state: { alt: 30 }, caption: '태양 고도 30°' }, { state: { alt: 60 }, caption: '태양 고도 60°' }], answer: '짧아진다' },
      { type: 'table', prompt: '계절과 한밤에 잘 보이는 별자리를 쓰세요.', columns: ['계절', '별자리'], cells: [['여름', ''], ['겨울', '']] },
      { type: 'short', prompt: '자전과 공전으로 생기는 일을 하나씩 쓰세요.' },
    ],
    easy: {
      note: '태양 빛을 받는 쪽이 낮, 못 받는 쪽이 밤이에요. 달은 오른쪽부터 차올라요.',
      items: [
        { type: 'figure', prompt: '우리나라는 낮인가요, 밤인가요?', tool: 'earth', options: { mode: 'spin' }, figures: [{ state: { hour: 12 }, caption: '(        )' }], answer: '낮' },
        { type: 'choice', prompt: '그림자가 가장 짧은 때는?', options: ['태양이 가장 높을 때', '태양이 가장 낮을 때'], answer: '태양이 가장 높을 때' },
        { type: 'short', prompt: '오늘 밤 달을 보고 모양을 그려 보세요.' },
      ],
    },
  },
  differentiation: {
    easy: '시각·계절·고도와 그림자 길이 글자가 바로 보여 조작 결과를 곧바로 확인해요.',
    base: '글자 없이 모형의 모양(빛을 받는 쪽, 별자리 자리, 그림자 끝)을 보고 판단해요.',
    challenge: '빛을 받는 쪽 글자, 계절 자리 이름, 그림자 눈금이 사라져 모형만 보고 판단해요.',
  },
  teacherNotes: '자주 보이는 어려움: ① 태양이 지구 둘레를 돈다고 생각한다 → 태양은 가만히 있고 지구가 돈다는 것을 시연으로 짚는다. ② 해 뜰 무렵과 해 질 무렵을 바꾼다 → 지구가 도는 방향을 따라 어두운 쪽에서 밝은 쪽으로 넘어가는 경계가 해 뜰 무렵이다. ③ 별자리가 태양 쪽에 있을 때 잘 보인다고 생각한다 → 밤에는 태양 반대쪽 하늘이 보인다. ④ 상현달과 하현달을 바꾼다. ⑤ 태양이 높을수록 그림자가 길다고 생각한다.',
});
