/* 6학년 1학기 4. 지구의 운동 — 지구의 자전과 낮과 밤 */
PaperLessons.register({
  id: 'g6-science-earth',
  schema: 'edu-lesson.v1',
  catalog: { unit: 'g6-과학-1학기-4', lesson: 2 },
  grade: 6, subject: '과학', unitTitle: '4. 지구의 운동',
  title: '지구의 자전과 낮과 밤',
  objective: '지구가 자전축을 중심으로 서쪽에서 동쪽으로 하루에 한 바퀴씩 자전하여 낮과 밤이 생긴다는 것을 설명할 수 있다.',
  standards: ['[6과12-01]'],
  minutes: 40,
  formats: ['chromebook', 'projector', 'print'],
  safety: [
    '태양은 맨눈·망원경·쌍안경으로 절대 직접 보지 않고, 선생님이 정한 방법(그림자 관찰 등)으로만 관찰해요.',
    '지구본 실험의 전등은 뜨거우니 만지지 말고, 친구 눈에 비추지 않아요.',
  ],
  illustration: {
    prompt: 'Layered paper-cut illustration of a smiling paper Earth spinning beside a warm glowing sun, with one half bright with daytime houses and the other half in a starry night, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.',
    scene: { viewBox: [480, 270], background: '#EDE7F4', layers: [
      { motif: 'sun', x: 80, y: 80, s: 1.1 }, { motif: 'cloud', x: 200, y: 60, s: 0.7 },
      { motif: 'moon', x: 400, y: 64, s: 0.8 }, { motif: 'star', x: 330, y: 44, color: 'cream' }, { motif: 'star', x: 450, y: 120 },
      { motif: 'hills', y: 206, colors: ['mint', 'lavender', 'sky'] }, { motif: 'house', x: 130, y: 224 }, { motif: 'house', x: 370, y: 226, color: 'lavender', s: 0.8 },
      { motif: 'tree', x: 250, y: 222 }, { motif: 'text', x: 240, y: 150, text: '왜 낮과 밤이 생길까요?', size: 22 },
    ] },
  },
  stages: [
    {
      id: 'intro', title: '도입', minutes: 7,
      teacher: '"아침에 동쪽에서 뜬 해가 저녁에 서쪽으로 져요. 정말 태양이 지구 둘레를 하루에 한 바퀴 도는 걸까요?" 학생 생각을 들은 뒤, 시연 단추로 지구가 돌면서 우리나라가 저녁과 밤을 맞는 모습을 보여 준다. 태양은 절대 직접 보지 않는다는 약속을 먼저 확인한다.',
      student: '하루 동안 해의 위치가 어떻게 바뀌는지 떠올리고, 낮과 밤이 생기는 까닭을 예상해 봅시다.',
      demo: { tool: 'earthspin', options: { readout: 'full', showSides: true }, sequence: [{ phase: '해 질 무렵' }, { time: '밤' }] },
    },
    {
      id: 'main', title: '전개', minutes: 26,
      activities: [
        {
          id: 'a1', title: '활동 1. 우리나라는 지금 낮일까, 밤일까?', minutes: 10, tool: 'earthspin',
          task: '북극 위에서 내려다본 지구예요. 지구를 서쪽에서 동쪽(시계 반대 방향)으로 돌려 우리나라가 원하는 때가 되게 해 봅시다. 해 질 무렵(저녁)과 해 뜰 무렵(아침)은 낮과 밤의 경계예요. 무렵은 \'그때쯤\'이라는 뜻이에요. 키보드로는 → 키를 누르면 시간이 앞으로 가요.',
          teacher: '"태양 빛을 받는 쪽과 받지 못하는 쪽은 각각 언제일까요?" 태양은 움직이지 않고 지구만 돈다는 것, 그림자 쪽으로 들어가는 경계가 해 질 무렵이라는 것을 짚는다. 교구는 경계에 걸친 저녁(17~19시)·아침(5~7시)을 밤·낮으로 채점하지 않는다. "밤이 되게"는 그림자 쪽 안으로 더 들어가야(20시 이후) 정답이다.',
          levels: { easy: { step: 45, readout: 'full', showSides: true }, base: { step: 15, readout: 'phase' }, challenge: { step: 15, readout: 'none' } },
          items: [
            { prompt: '지금 우리나라는 낮이에요. 지구를 돌려 우리나라가 밤이 되게 해 보세요. 해 질 무렵(저녁)을 지나 그림자 쪽 안으로 들어가야 해요.', state: { hour: 12 }, target: { time: '밤' }, difficulty: 0.1 },
            { prompt: '우리나라가 해 뜰 무렵(아침)이 되게 지구를 돌려 보세요.', state: { hour: 21 }, target: { phase: '해 뜰 무렵' }, difficulty: 0.15 },
            { prompt: '우리나라가 해 질 무렵(저녁)이 되게 지구를 돌려 보세요.', state: { hour: 8 }, target: { phase: '해 질 무렵' }, difficulty: 0.15 },
          ],
        },
        {
          id: 'a2', title: '활동 2. 하루 동안 지구 돌려 보기', minutes: 10, tool: 'earthspin',
          task: '자전은 지구가 스스로 한 바퀴 도는 것으로 하루(24시간)가 걸려요. 공전은 지구가 태양 둘레를 한 바퀴 도는 것으로 1년이 걸려요. 지구가 자전할 때 한 칸(15°)이 1시간이에요. 시간이 흐르는 만큼 지구를 돌려 봅시다.',
          teacher: '"지구가 한 바퀴 도는 동안 우리나라에 낮과 밤이 몇 번씩 찾아왔나요?" 자전 주기(하루)와 공전 주기(1년)를 헷갈리지 않게 구분한다. 기본 단계는 시각 숫자를 보여 주지 않으므로 "몇 칸 돌려야 할까?"(시간 × 15°)를 먼저 말하게 한다.',
          levels: { easy: { step: 15, readout: 'full', showSides: true, showStart: true }, base: { step: 15, readout: 'phase', showStart: true }, challenge: { step: 15, readout: 'none' } },
          items: [
            { prompt: '아침 6시부터 지구를 하루(24시간) 동안 돌려 보세요. 우리나라는 어디로 돌아오나요?', state: { hour: 6 }, target: { elapsed: 24 }, difficulty: 0.05 },
            { prompt: '저녁 6시부터 12시간 동안 지구를 돌려 보세요. 그때 우리나라는 언제일까요?', state: { hour: 18 }, target: { elapsed: 12 }, difficulty: 0.15 },
            { prompt: '밤 9시예요. 다음 날 낮 12시가 되게 지구를 돌려 보세요.', state: { hour: 21 }, target: { hour: 12 }, difficulty: 0.25 },
          ],
        },
        {
          id: 'a3', title: '활동 3. 짝과 낮과 밤 설명하기', minutes: 6, tool: 'earthspin', pair: true,
          task: '짝에게 시각을 말해 주고, 짝은 그 시각이 되게 지구를 돌린 뒤 그때 낮인지 밤인지 까닭과 함께 설명해 봅시다.',
          levels: { easy: { step: 45, readout: 'full', showSides: true }, base: { step: 15, readout: 'phase' }, challenge: { step: 15, readout: 'none' } },
          items: [{ difficulty: 0, prompt: '짝과 번갈아 설명한 뒤 "다 했어요"를 누르세요.', free: true }],
        },
      ],
    },
    {
      id: 'wrapup', title: '정리', minutes: 7,
      teacher: '"태양이 동쪽에서 떠서 서쪽으로 지는 것처럼 보이는 까닭은 무엇일까요?" 지구가 서쪽에서 동쪽으로 자전하기 때문에 태양이 반대 방향(동→서)으로 움직이는 것처럼 보인다는 것을 정리한다.',
      exitTicket: [
        { type: 'choice', prompt: '낮과 밤이 생기는 까닭으로 알맞은 것은 무엇인가요?', options: ['태양이 지구 둘레를 하루에 한 바퀴씩 돌기 때문', '지구가 하루에 한 바퀴씩 자전하기 때문', '지구가 1년에 한 바퀴씩 공전하기 때문'], answer: 1, difficulty: 0.1, explain: '지구가 하루에 한 바퀴 스스로 도는 자전 때문에 태양 빛을 받는 쪽(낮)과 받지 못하는 쪽(밤)이 바뀌어요. 공전은 1년에 한 번 태양 둘레를 도는 것이에요.' },
        { type: 'choice', prompt: '지구가 자전하는 방향은 어느 쪽인가요?', options: ['동쪽에서 서쪽', '서쪽에서 동쪽', '북쪽에서 남쪽'], answer: 1, difficulty: 0.15, explain: '지구는 서쪽에서 동쪽으로 자전해요. 그래서 태양은 반대로 동쪽에서 떠서 서쪽으로 지는 것처럼 보여요.' },
        { type: 'tool', tool: 'earthspin', options: { step: 15, readout: 'none', start: { hour: 9 } }, prompt: '오전 9시예요. 지구를 돌려 우리나라가 밤이 되게 해 보세요.', target: { time: '밤' }, difficulty: 0.15, explain: '해 질 무렵(저녁)을 지나 우리나라가 태양 빛을 받지 못하는 쪽 안으로 들어가야 밤이에요.' },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
  ],
  worksheet: {
    title: '지구의 자전과 낮과 밤',
    items: [
      { type: 'figure', prompt: '북극 위에서 내려다본 지구예요. 우리나라는 낮, 밤, 해 뜰 무렵, 해 질 무렵 가운데 언제인지 쓰세요.', tool: 'earthspin', figures: [
        { state: { hour: 12 }, caption: '우리나라: (          )' },
        { state: { hour: 18 }, caption: '우리나라: (          )' },
        { state: { hour: 0 }, caption: '우리나라: (          )' }], answer: '낮, 해 질 무렵(저녁), 밤' },
      { type: 'blank', prompt: '알맞은 말을 쓰세요.', text: '지구는 자전축을 중심으로 ___쪽에서 ___쪽으로 하루에 한 바퀴씩 돌아요. 이것을 지구의 ___(이)라고 해요.', answer: '서, 동, 자전' },
      { type: 'choice', prompt: '태양이 동쪽에서 떠서 서쪽으로 지는 것처럼 보이는 까닭은 무엇인가요?', options: ['태양이 지구 둘레를 돌기 때문', '지구가 서쪽에서 동쪽으로 자전하기 때문', '구름이 태양을 움직이기 때문'], answer: '② 지구가 서쪽에서 동쪽으로 자전하기 때문' },
      { type: 'short', prompt: '우리나라가 낮일 때 지구 반대편 나라는 낮일까요, 밤일까요? 까닭도 쓰세요.', answer: '밤 — 지구 반대편은 태양 빛을 받지 못하는 쪽에 있기 때문이에요.' },
    ],
    easy: { note: '햇빛을 받는 쪽은 낮, 못 받는 쪽은 밤이에요. 지구는 서→동으로 돌아요.' },
  },
  differentiation: {
    easy: '지구가 3시간(45°)씩 돌아가고, 낮인 쪽·밤인 쪽 글자와 우리나라의 때·시각, 처음 자리 표시가 보여요.',
    base: '1시간(15°)씩 돌아가고 우리나라의 때(낮·밤·아침·저녁)만 보여요. 시각 숫자는 없어서 몇 칸 돌릴지 시간 × 15°로 생각해요.',
    challenge: '1시간(15°)씩 돌아가고 때를 알려 주는 글자가 없어요. 그림자만 보고 판단해요.',
  },
  teacherNotes: '흔한 오개념: ① 태양이 하루에 한 바퀴씩 지구 둘레를 돌아 낮과 밤이 생긴다고 생각한다 — 태양은 그대로 있고 지구가 자전하기 때문이며, 태양이 동→서로 움직이는 것은 겉보기 운동이다. 교구에서 태양은 움직이지 않고, 지구를 반대(시계 방향)로 돌리면 되돌아가며 방향을 알려 준다. ② 자전(하루에 한 바퀴)과 공전(1년에 한 바퀴)을 혼동한다 — 활동 2 과제문에서 두 낱말을 먼저 풀이한다. ③ 지구가 동쪽에서 서쪽으로 돈다고 생각한다 — 북극 위에서 보면 시계 반대 방향(서→동)이다. ④ 지구의 한쪽이 늘 낮이라고 생각한다. 지구본과 전등으로 실험할 때 전등은 뜨거우니 만지지 않게 하고, 실제 태양은 어떤 도구로도 직접 보지 않게 지도한다.',
});
