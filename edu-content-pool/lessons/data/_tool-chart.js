/* 검사용 차시 — 그래프 판(chart) 교구의 모든 모드(build·read)와 다섯 가지 그래프(그림·막대·꺾은선·띠·원)를 한 차시에서 쓴다. 카탈로그에 싣지 않는다. */
(function () {
  const SPORTS = [['축구', 12], ['줄넘기', 8], ['수영', 10], ['배구', 6]];
  const TEMP = [['9시', 14], ['10시', 16], ['11시', 19], ['12시', 21], ['1시', 22]];
PaperLessons.register({
  id: '_tool-chart',
  schema: 'edu-lesson.v1',
  catalog: { unit: 'g6-수학-1학기-5', lesson: 4 },
  grade: 6, subject: '수학', unitTitle: '5. 여러 가지 그래프',
  title: '자료 표로 여러 가지 그래프를 그리고 읽기',
  objective: '자료 표를 보고 그림·막대·꺾은선·띠·원그래프를 완성하고, 그래프를 읽어 자료의 특징을 말할 수 있다.',
  standards: ['[6수04-02]', '[6수04-03]'],
  minutes: 40,
  formats: ['chromebook', 'projector', 'print'],
  illustration: {
    prompt: 'Layered paper-cut illustration of a school bulletin board with a paper bar chart, a pie chart and a line chart pinned beside a small weather vane, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.',
    scene: { viewBox: [480, 270], layers: [
      { motif: 'cloud', x: 100, y: 50 }, { motif: 'sun', x: 410, y: 58, s: 0.7 }, { motif: 'hills', y: 206 },
      { motif: 'house', x: 110, y: 214, color: 'lavender' }, { motif: 'tree', x: 240, y: 214 }, { motif: 'house', x: 370, y: 216, color: 'buttercup' },
      { motif: 'text', x: 240, y: 140, text: '어떤 그래프가 알맞을까요?', size: 22 },
    ] },
  },
  stages: [
    {
      id: 'intro', title: '도입', minutes: 6,
      teacher: '"우리 반이 좋아하는 운동을 조사했어요. 표로 보는 것과 그래프로 보는 것은 무엇이 다를까요?" 시연 단추로 막대가 하나씩 올라가는 모습을 보여 준다. 세로 눈금 한 칸이 2명이라는 것을 먼저 짚고, "막대 끝이 눈금 사이에 오면 어떻게 읽을까요?"를 묻는다.',
      student: '우리 반에서 조사해 보고 싶은 것(좋아하는 과일, 등교 방법)을 하나 정해 봅시다.',
      demo: { tool: 'chart', options: { type: 'bar', data: SPORTS, unit: '명', scale: 2, xLabel: '운동', yLabel: '학생 수', title: '좋아하는 운동', showValues: true, showTable: false }, sequence: [{ build: true }] },
    },
    {
      id: 'main', title: '전개', minutes: 27,
      activities: [
        {
          id: 'a1', title: '활동 1. 표를 보고 그림·막대·꺾은선그래프 완성하기', minutes: 10, tool: 'chart',
          teacher: '"눈금 한 칸은 몇 명이에요? 10명을 나타내려면 몇 칸 올려요?" 칸 수를 그대로 값으로 그리는 학생에게는 눈금 숫자를 손가락으로 따라 읽게 한다. 그림그래프에서 작은 그림을 10개 넘게 그리는 학생에게는 큰 그림 하나로 바꿀 수 있다고 알려 준다.',
          task: '막대·점을 끌거나 눌러 높이를 맞추고, 그림그래프는 줄을 고른 뒤 그림을 더하거나 빼요. 아래 −/+와 방향키로도 할 수 있어요.',
          levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            { prompt: '마을별 사과 생산량 표를 보고 그림그래프를 완성하세요.', toolOptions: { type: 'picture', title: '마을별 사과 생산량', data: [['가 마을', 32], ['나 마을', 15], ['다 마을', 24]], unit: '상자', xLabel: '마을', yLabel: '생산량', icons: [{ value: 10, name: '10상자' }, { value: 1, name: '1상자' }], given: [0] }, target: { build: true }, difficulty: 0.15 },
            { prompt: '좋아하는 운동 표를 보고 막대그래프를 완성하세요.', toolOptions: { type: 'bar', title: '좋아하는 운동', data: SPORTS, unit: '명', scale: 2, xLabel: '운동', yLabel: '학생 수', given: [0] }, target: { build: true }, difficulty: 0.2, reveal: 'after-check' },
            { prompt: '하루 기온 표를 보고 꺾은선그래프를 완성하세요.', toolOptions: { type: 'line', title: '하루 기온 변화', data: TEMP, unit: '°C', from: 10, scale: 2, step: 1, xLabel: '시각', yLabel: '기온', given: [0, 1] }, target: { build: true }, difficulty: 0.25,
              predict: { q: '기온이 가장 많이 오른 때는 언제일까요?', options: ['9시~10시', '10시~11시', '12시~1시'] },
              conclude: '선이 가장 가파르게 올라간 10시~11시에 기온이 가장 많이 올랐어요.' },
          ],
        },
        {
          id: 'a2', title: '활동 2. 띠그래프와 원그래프 그리기', minutes: 9, tool: 'chart',
          teacher: '"띠 전체가 100%예요. 눈금 한 칸은 몇 %예요?" 큰 순서가 아니라 표의 차례대로 나누는 것을 짚는다. 두 항목의 크기를 바꿔 그린 학생에게는 항목 이름과 백분율을 한 쌍씩 짚게 한다. 다 그린 뒤 백분율을 모두 더하면 100인지 확인한다.',
          task: '아래에서 항목을 고르고 −/+로 그 항목의 백분율만큼 띠(원)를 나누어요.',
          levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            { prompt: '등교 방법 표를 보고 띠그래프를 완성하세요.', toolOptions: { type: 'band', title: '등교 방법', data: [['걸어서', 45], ['버스', 30], ['자전거', 15], ['기타', 10]], xLabel: '등교 방법' }, target: { build: true }, difficulty: 0.2 },
            { prompt: '좋아하는 간식 표를 보고 원그래프를 완성하세요.', toolOptions: { type: 'circle', title: '좋아하는 간식', data: [['떡볶이', 35], ['김밥', 25], ['과일', 20], ['빵', 20]], xLabel: '간식' }, target: { build: true }, difficulty: 0.25, reveal: 'after-check',
              conclude: '원그래프 눈금 한 칸은 5%예요. 떡볶이 35%는 7칸이에요.' },
            { prompt: '더 해 보기: 좋아하는 과일 표를 보고 가로 막대그래프를 완성하세요.', toolOptions: { type: 'bar', horizontal: true, title: '좋아하는 과일', data: [['사과', 7], ['배', 4], ['귤', 9]], unit: '명', xLabel: '과일', yLabel: '학생 수' }, target: { build: true }, extra: true, difficulty: 0.2 },
          ],
        },
        {
          id: 'a3', title: '활동 3. 그래프를 읽고 답하기', minutes: 8, tool: 'chart',
          teacher: '"이 질문에 답하려면 그래프의 어디를 보아야 할까요?" 비율그래프에서 몇 배인지 물으면 백분율끼리 나누는 것을 짚는다. 그래프에서 읽은 수를 표에 옮길 때 눈금 칸 수를 쓰는 실수가 있으면 눈금 한 칸의 크기를 다시 묻는다.',
          task: '그래프를 보고 알맞은 답을 고르거나, 수를 쓰거나, 표의 빈칸을 채워요.',
          levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            { prompt: '가장 많은 학생이 좋아하는 운동은 무엇인가요?', toolOptions: { type: 'bar', mode: 'read', title: '좋아하는 운동', data: SPORTS, unit: '명', scale: 2, xLabel: '운동', choices: ['축구', '수영', '배구'], why: ['', '수영 막대는 축구 막대보다 낮아요.', '배구 막대가 가장 낮아요.'], explain: '축구 막대가 12명으로 가장 높아요.' }, target: { pick: 0 }, difficulty: 0.08 },
            { prompt: '11시의 기온은 몇 °C인가요?', toolOptions: { type: 'line', mode: 'read', title: '하루 기온 변화', data: TEMP, unit: '°C', from: 10, scale: 2, xLabel: '시각', question: '11시의 기온은 몇 °C인가요?' }, target: { value: 19 }, difficulty: 0.25 },
            { prompt: '떡볶이를 좋아하는 학생은 빵을 좋아하는 학생의 몇 배인가요?', toolOptions: { type: 'circle', mode: 'read', title: '좋아하는 간식', data: [['떡볶이', 40], ['김밥', 25], ['과일', 15], ['빵', 20]], choices: ['1.5배', '2배', '4배'], explain: '떡볶이 40% ÷ 빵 20% = 2배예요.' }, target: { pick: 1 }, difficulty: 0.3 },
            { prompt: '그림그래프를 보고 표의 빈칸을 채우세요.', toolOptions: { type: 'picture', mode: 'read', title: '마을별 감자 생산량', data: [['가', 32], ['나', 15], ['다', 41]], unit: '상자', xLabel: '마을', yLabel: '생산량', icons: [{ value: 10, name: '10상자' }, { value: 1, name: '1상자' }], tableBlanks: [0, 1, 2] }, target: { table: true }, difficulty: 0.15 },
          ],
        },
      ],
    },
    {
      id: 'wrapup', title: '정리', minutes: 7,
      teacher: '"시간에 따라 변하는 것은 어떤 그래프가 알맞아요? 전체에 대한 부분의 비율은요?" 그래프마다 잘 보이는 것을 학생 말로 정리한다. 출구 1번을 틀린 학생은 띠그래프의 백분율 읽기를, 2번을 틀린 학생은 눈금 한 칸의 크기를 다음 시간에 먼저 살핀다.',
      exitTicket: [
        { type: 'tool', tool: 'chart', options: { type: 'band', mode: 'read', title: '반별 재활용품', data: [['종이', 40], ['플라스틱', 35], ['캔', 25]], choices: ['종이', '플라스틱', '캔'], question: '가장 적게 모인 것은 무엇인가요?' }, prompt: '띠그래프를 보고 가장 적게 모인 것을 고르세요.', target: { pick: 2 }, difficulty: 0.12 },
        { type: 'tool', tool: 'chart', options: { type: 'bar', title: '모둠별 책 수', data: [['1모둠', 9], ['2모둠', 6], ['3모둠', 11]], unit: '권', xLabel: '모둠', yLabel: '책 수', given: [0] }, prompt: '표를 보고 막대그래프를 완성하세요.', target: { build: true }, difficulty: 0.2 },
        { type: 'choice', prompt: '전체에 대한 각 부분의 비율을 나타내기에 알맞은 그래프는 무엇인가요?', options: ['꺾은선그래프', '원그래프', '그림그래프'], answer: 1, difficulty: 0.15, explain: '원그래프와 띠그래프는 전체를 100%로 보고 각 부분이 차지하는 비율을 보여 줘요.' },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
  ],
  worksheet: {
    title: '여러 가지 그래프',
    items: [
      { type: 'figure', prompt: '막대그래프를 보고 표의 빈칸을 채우세요.', tool: 'chart', wide: true, figures: [
        { options: { type: 'bar', mode: 'read', title: '좋아하는 운동', data: SPORTS, unit: '명', scale: 2, xLabel: '운동', yLabel: '학생 수', tableBlanks: [0, 1, 2, 3] }, caption: '' }], answer: '12, 8, 10, 6' },
      { type: 'figure', prompt: '표를 보고 띠그래프를 완성하세요.', tool: 'chart', wide: true, figures: [
        { options: { type: 'band', title: '등교 방법', data: [['걸어서', 45], ['버스', 30], ['자전거', 15], ['기타', 10]], xLabel: '등교 방법', given: [0] }, caption: '' }], answer: '버스 30%(6칸), 자전거 15%(3칸), 기타 10%(2칸)' },
      { type: 'table', prompt: '우리 반이 좋아하는 계절을 조사해 표로 정리하세요.', columns: ['계절', '봄', '여름', '가을', '겨울', '합계'], cells: [['학생 수(명)', '', '', '', '', '']] },
      { type: 'choice', prompt: '하루 동안의 기온 변화를 나타내기에 가장 알맞은 그래프에 ○ 하세요.', options: ['그림그래프', '꺾은선그래프', '원그래프'], answer: '꺾은선그래프' },
      { type: 'short', prompt: '3번 표를 어떤 그래프로 나타내면 좋을지 쓰고, 까닭을 써 보세요.' },
    ],
    easy: {
      note: '먼저 눈금 한 칸(그림 하나)이 얼마인지 읽어요. 띠그래프와 원그래프는 전체가 100%예요.',
      items: [
        { type: 'figure', prompt: '막대그래프를 보고 표의 빈칸을 채우세요.', tool: 'chart', wide: true, figures: [
          { options: { type: 'bar', mode: 'read', title: '좋아하는 과일', data: [['사과', 7], ['배', 4], ['귤', 9]], unit: '명', xLabel: '과일', yLabel: '학생 수', tableBlanks: [0, 1, 2] }, caption: '' }], answer: '7, 4, 9' },
        { type: 'figure', prompt: '그림그래프를 보고 가 마을은 몇 상자인지 쓰세요.', tool: 'chart', wide: true, figures: [
          { options: { type: 'picture', mode: 'read', title: '마을별 사과 생산량', data: [['가 마을', 23], ['나 마을', 15]], unit: '상자', icons: [{ value: 10, name: '10상자' }, { value: 1, name: '1상자' }] }, caption: '가 마을: ____상자' }], answer: '23상자' },
        { type: 'choice', prompt: '띠그래프 전체는 몇 %인가요?', options: ['10%', '100%'], answer: '100%' },
        { type: 'short', prompt: '막대그래프에서 가장 높은 막대는 무엇을 뜻하나요?' },
      ],
    },
  },
  differentiation: {
    easy: '막대 끝·점·조각 위에 지금 값이 보여요. 표의 수와 견주며 맞춰요.',
    base: '값이 보이지 않아요. 눈금 한 칸의 크기를 알아내어 그래프를 그려요.',
    challenge: '가로 막대그래프(더 해 보기)까지 그리고, 그래프마다 잘 보이는 것을 말로 설명해요.',
  },
  teacherNotes: '자주 보이는 어려움: ① 눈금 한 칸이 2명인데 칸 수를 값으로 그린다(12명을 12칸) → 교구는 "칸 수가 아니라 눈금이 나타내는 수를 읽어요"라고 짚는다. ② 그림그래프에서 큰 그림과 작은 그림의 단위를 바꿔 센다(32상자를 큰 그림 2개, 작은 그림 3개). ③ 띠·원그래프에서 두 항목의 자리를 바꾸거나 합계를 100%로 맞추지 않는다. ④ 꺾은선그래프의 물결선 아래 생략된 눈금을 0부터로 읽는다. 조사 자료에는 학생 이름을 쓰지 않고 수만 모은다.',
});
})();
