/* 2학년 2학기 4. 시각과 시간 — 단원 파일(차시 11개 가운데 2차시는 기존 차시 g2-math-clock).
 * 흐름: 바늘의 역할(1) → 몇 시 몇 분 읽기·만들기(2, 기존) → 짧은바늘 자리·숫자 표기와 짝짓기(3) → 몇 시 몇 분 전·하루 일과(4)
 *      → 1시간 = 60분, 시각과 시간(5) → 시간 띠에 걸린 시간 나타내기(6) → 몇 분 ↔ 몇 시간 몇 분 바꾸기(7) → 걸린 시간 구하기(8)
 *      → 하루·오전 오후·1주일(9) → 달마다 날수·기간 표시(10) → 며칠 뒤·알맞은 단위·단원 정리(11).
 */
PaperLessons.registerUnit({
  id: 'g2-math-2-04', schema: 'edu-unit.v1', catalogUnit: 'g2-수학-2학기-4',
  grade: 2, subject: '수학', unitTitle: '4. 시각과 시간',
  flow: '1학년 때 배운 몇 시·몇 시 30분에서 출발해, 첫 시간에 짧은바늘은 시, 긴바늘은 분을 나타내고 긴바늘의 숫자 한 칸이 5분임을 5씩 뛰어 세며 확인합니다. 2차시(기존 차시)에서 5분·1분 단위로 읽고 만든 뒤, 3·4차시에서 분이 지난 만큼 짧은바늘이 두 숫자 사이 어디에 있는지 찾고 디지털 표기와 짝지으며, "몇 시 몇 분 전"과 하루 일과로 생활에 옮깁니다. 5~8차시는 긴바늘 한 바퀴가 60분 = 1시간임을 알고, 걸린 시간을 시간 띠에 화살표로 나타내고 "몇 분"과 "몇 시간 몇 분"으로 바꾸어 쓴 다음, 시작·끝 시각으로 걸린 시간을 구합니다. 9~11차시는 하루 24시간(오전·오후), 1주일 7일, 달마다 다른 날수, 1년 12개월을 달력으로 확인하고, 며칠 뒤·몇 주 뒤 날짜 찾기와 알맞은 시간 단위 고르기로 단원을 정리합니다.',
  refs: { 2: 'g2-math-clock' },
  lessons: [
    // ───────────────────────────── 1차시 (intro) ─────────────────────────────
    {
      id: 'g2-math-2-04-01', schema: 'edu-lesson.v1',
      catalog: { unit: 'g2-수학-2학기-4', lesson: 1 },
      grade: 2, subject: '수학', unitTitle: '4. 시각과 시간',
      title: '긴바늘과 짧은바늘이 하는 일 알아보기',
      objective: '짧은바늘은 시, 긴바늘은 분을 나타냄을 구분하고, 긴바늘이 가리키는 숫자를 5씩 세어 몇 분인지 말할 수 있다.',
      standards: ['[2수03-07]'],
      minutes: 40,
      formats: ['chromebook', 'projector', 'print'],
      illustration: {
        prompt: 'Layered paper-cut illustration of a big round paper clock on a classroom wall with a long mint minute hand and a short lavender hour hand, and small children pointing at the numbers, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.',
        scene: { viewBox: [480, 270], layers: [
          { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 110, y: 52 }, { motif: 'hills', y: 206 },
          { motif: 'house', x: 120, y: 214 }, { motif: 'tree', x: 370, y: 216 }, { motif: 'bird', x: 250, y: 80 },
          { motif: 'text', x: 240, y: 142, text: '긴바늘과 짧은바늘', size: 22 },
        ] },
      },
      stages: [
        {
          id: 'intro', title: '도입', minutes: 7,
          teacher: '"1학년 때 몇 시와 몇 시 30분을 배웠지요? 지금 시계는 몇 시일까요?" 시연 단추로 3시에서 3시 30분, 3시 15분으로 가는 모습을 보여 준다. "긴바늘이 6에 있으면 30분이었는데, 3에 있으면 몇 분일까요?" 하고 묻고, "3분이요"라는 대답이 나오면 그대로 칠판에 적어 두었다가 활동 2에서 5씩 세어 보며 고쳐 쓰게 한다.',
          student: '교실 시계를 보고 두 바늘이 어떻게 다른지 말해 봐요.',
          demo: { tool: 'clock', options: { showMinuteNumbers: true, showDigital: true }, sequence: [{ h: 3, m: 0 }, { h: 3, m: 30 }, { h: 3, m: 15 }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 몇 시, 몇 시 30분 떠올리기', minutes: 8, tool: 'clock',
              task: '짧은바늘이 시를 알려 줘요. 긴바늘이 12에 있으면 몇 시, 6에 있으면 몇 시 30분이에요.',
              teacher: '"두 바늘 가운데 어느 바늘이 더 짧아요? 그 바늘이 가리키는 숫자가 몇 시예요." 10시 30분을 6시 50분으로 고르는 학생은 두 바늘을 바꿔 읽은 것이다 — 손가락으로 두 바늘의 길이를 재어 보게 한다.',
              levels: { easy: { hourZone: true, showMinuteNumbers: true, minuteStep: 30, independent: true }, base: { minuteStep: 30 }, challenge: { minuteStep: 5 } },
              items: [
                { prompt: '시계를 보고 몇 시인지 골라 보세요.', state: { h: 4, m: 0 }, toolOptions: { readOnly: true, choices: ['12시 4분', '4시', '5시'] }, target: { pick: 1, h: 4, m: 0 }, difficulty: 0.05 },
                { prompt: '시계를 보고 몇 시 몇 분인지 골라 보세요. 바늘 길이를 견주어 봐요.', state: { h: 10, m: 30 }, toolOptions: { readOnly: true, choices: ['6시 50분', '11시 30분', '10시 30분'] }, target: { pick: 2, h: 10, m: 30 }, difficulty: 0.15,
                  conclude: '짧은바늘이 10과 11 사이, 긴바늘이 6이면 10시 30분이에요.' },
                { prompt: '쉬는 시간이 끝나는 1시 30분을 만들어 보세요.', state: { h: 12, m: 0 }, target: { h: 1, m: 30 }, difficulty: 0.1 },
                { prompt: '저녁을 먹는 6시를 만들어 보세요.', state: { h: 3, m: 30 }, target: { h: 6, m: 0 }, difficulty: 0.08 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 긴바늘 숫자 한 칸은 5분', minutes: 9, tool: 'numberline',
              task: '긴바늘이 숫자 한 칸을 가면 5분이 지나요. 수직선에서 5씩 뛰어 세어 몇 분인지 알아봐요.',
              teacher: '"긴바늘이 12에서 1까지 가면 작은 눈금이 몇 칸이에요? 다섯 칸, 5분이에요." 화살표 하나가 숫자 한 칸이라고 짚는다. 긴바늘이 3에 있을 때 "3분"이라고 하는 학생에게 화살표를 세 번 그리게 하고 도착한 수를 읽게 한다.',
              levels: {
                easy: { mode: 'jump', min: 0, max: 60, step: 5, labels: 'major', fixedFrom: 0, showValue: true },
                base: { mode: 'jump', min: 0, max: 60, step: 5, labels: 'major', fixedFrom: 0 },
                challenge: { mode: 'jump', min: 0, max: 60, step: 5, sub: 5, labels: 'major', fixedFrom: 0, hopSize: 1 },
              },
              items: [
                { prompt: '긴바늘이 12에서 3까지 갔어요. 5씩 3번 뛰어 세어 보세요.', target: { from: 0, size: 5, count: 3 }, difficulty: 0.08,
                  predict: { q: '긴바늘이 3을 가리키면 몇 분일까요?', options: ['3분', '15분', '30분'], answer: 1 },
                  conclude: '숫자 한 칸이 5분이라서 긴바늘이 3을 가리키면 15분이에요.' },
                { prompt: '긴바늘이 12에서 8까지 갔어요. 5씩 뛰어 세어 보세요.', target: { from: 0, size: 5, count: 8 }, difficulty: 0.12 },
                { prompt: '5씩 뛰어 세어 45분에 닿아 보세요. 긴바늘은 어느 숫자에 있을까요?', target: { from: 0, size: 5, end: 45 }, difficulty: 0.18,
                  conclude: '5씩 9번 뛰면 45분이에요. 긴바늘은 9를 가리켜요.' },
                { prompt: '긴바늘이 12에서 출발해 한 바퀴를 돌았어요. 5씩 12번 뛰어 세어 보세요.', target: { from: 0, size: 5, count: 12 }, difficulty: 0.2,
                  conclude: '긴바늘이 한 바퀴 돌면 60분이에요. 다시 12로 돌아와요.' },
              ],
            },
            {
              id: 'a3', title: '활동 3. 짧은바늘은 시, 긴바늘은 분', minutes: 9, tool: 'clock',
              task: '짧은바늘로 시를 먼저 읽고, 긴바늘은 12부터 5분씩 세어 몇 분인지 읽어요.',
              teacher: '"짧은바늘이 2와 3 사이에 있어요. 몇 시라고 읽을까요?" 지나온 숫자를 읽는다고 짚는다. 긴바늘 숫자를 그대로 읽어 "2시 4분"을 고른 학생에게는 "숫자 한 칸은 몇 분이었지요?"라고 활동 2의 화살표를 떠올리게 한다.',
              levels: { easy: { hourZone: true, showMinuteNumbers: true }, base: {}, challenge: { showMinuteMarks: false } },
              items: [
                { prompt: '시계를 보고 몇 시 몇 분인지 골라 보세요.', state: { h: 2, m: 20 }, toolOptions: { readOnly: true, choices: ['2시 4분', '2시 20분', '4시 10분'] }, target: { pick: 1, h: 2, m: 20 }, difficulty: 0.1 },
                { prompt: '시계를 보고 몇 시 몇 분인지 골라 보세요. 짧은바늘부터 봐요.', state: { h: 5, m: 40 }, toolOptions: { readOnly: true, choices: ['6시 40분', '5시 40분', '5시 8분'] }, target: { pick: 1, h: 5, m: 40 }, difficulty: 0.18,
                  predict: { q: '짧은바늘이 6에 더 가까워요. 몇 시일까요?', options: ['5시', '6시'], answer: 0 },
                  conclude: '짧은바늘이 6에 가까워도 6에 닿기 전이면 5시예요.' },
                { prompt: '시계를 보고 몇 시 몇 분인지 골라 보세요.', state: { h: 9, m: 10 }, toolOptions: { readOnly: true, choices: ['9시 2분', '2시 45분', '9시 10분'] }, target: { pick: 2, h: 9, m: 10 }, difficulty: 0.12 },
                { prompt: '더 해 보기: 시계를 보고 몇 시 몇 분인지 골라 보세요.', state: { h: 12, m: 55 }, toolOptions: { readOnly: true, choices: ['1시 55분', '12시 55분', '11시 0분'] }, target: { pick: 1, h: 12, m: 55 }, extra: true, difficulty: 0.25 },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 7,
          teacher: '"짧은바늘은 무엇을, 긴바늘은 무엇을 알려 주나요?" 짝에게 손으로 바늘을 가리키며 말하게 한다. 출구 2번을 틀린 학생은 긴바늘 숫자를 그대로 분으로 읽는지 다음 시간(2차시)에 먼저 살핀다.',
          exitTicket: [
            { type: 'tool', tool: 'clock', options: { readOnly: true, choices: ['8시 25분', '5시 40분', '8시 5분'] }, state: { h: 8, m: 25 }, prompt: '시계를 보고 몇 시 몇 분인지 고르세요.', target: { pick: 0, h: 8, m: 25 }, difficulty: 0.12 },
            { type: 'choice', prompt: '긴바늘이 7을 가리키면 몇 분인가요?', options: ['7분', '35분', '70분'], answer: 1, difficulty: 0.12, explain: '숫자 한 칸이 5분이라서 5, 10, 15, 20, 25, 30, 35 — 35분이에요.' },
            { type: 'choice', prompt: '시를 알려 주는 바늘은 무엇인가요?', options: ['긴바늘', '짧은바늘'], answer: 1, difficulty: 0.05, explain: '짧은바늘이 시, 긴바늘이 분을 알려 줘요.' },
            { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
          ],
        },
      ],
      worksheet: {
        title: '긴바늘과 짧은바늘',
        items: [
          { type: 'figure', prompt: '시계를 보고 몇 시 몇 분인지 쓰세요.', tool: 'clock', figures: [
            { state: { h: 7, m: 0 }, caption: '___시 ___분' }, { state: { h: 3, m: 15 }, caption: '___시 ___분' }, { state: { h: 11, m: 35 }, caption: '___시 ___분' }], answer: '7시, 3시 15분, 11시 35분' },
          { type: 'table', prompt: '긴바늘이 가리키는 숫자를 보고 몇 분인지 쓰세요.', columns: ['긴바늘 숫자', '1', '2', '4', '6', '10'], cells: [['몇 분', '5분', '', '', '', '']], answer: '10분, 20분, 30분, 50분' },
          { type: 'choice', prompt: '4시 20분을 바르게 읽은 친구에 ○ 하세요.', options: ['"4시 4분이에요"', '"4시 20분이에요"', '"5시 20분이에요"'], answer: '"4시 20분이에요"' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '시를 나타내는 바늘은 ______, 분을 나타내는 바늘은 ______이에요.', answer: '짧은바늘, 긴바늘' },
          { type: 'short', prompt: '긴바늘이 3을 가리킬 때 왜 3분이 아닌지 써 보세요.' },
        ],
        easy: {
          note: '긴바늘이 숫자 한 칸을 가면 5분이에요. 12에서부터 5, 10, 15… 하고 세어요.',
          items: [
            { type: 'figure', prompt: '시계를 보고 몇 시 몇 분인지 쓰세요.', tool: 'clock', options: { showMinuteNumbers: true }, figures: [
              { state: { h: 7, m: 0 }, caption: '___시' }, { state: { h: 3, m: 15 }, caption: '___시 ___분' }], answer: '7시, 3시 15분' },
            { type: 'table', prompt: '빈칸에 몇 분인지 쓰세요.', columns: ['긴바늘 숫자', '1', '2', '3'], cells: [['몇 분', '5분', '', '']], answer: '10분, 15분' },
            { type: 'choice', prompt: '분을 나타내는 바늘에 ○ 하세요.', options: ['긴바늘', '짧은바늘'], answer: '긴바늘' },
            { type: 'draw', prompt: '우리 교실 시계를 그리고 긴바늘과 짧은바늘에 이름을 써 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '시계 바깥에 5·10·15…가 보이고 짧은바늘이 있어야 할 자리가 연하게 칠해져요. 수직선 도착점에 수가 보여요.',
        base: '바깥 분 숫자 없이 숫자 한 칸을 5분씩 세어 읽어요.',
        challenge: '수직선 화살표 크기를 1부터 스스로 5로 바꾸고, 작은 눈금이 없는 시계로 12시 55분처럼 헷갈리는 시각까지 읽어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 짧은바늘이 두 숫자 사이에 있을 때 뒤쪽 숫자를 읽어 한 시간 늦게 말한다(5시 40분 → 6시 40분) → 짧은바늘은 지나온 숫자를 읽는다. ② 긴바늘이 가리키는 숫자를 그대로 분으로 읽는다(2시 20분 → 2시 4분) → 숫자 한 칸은 5분, 수직선 화살표로 확인. ③ 두 바늘을 바꿔 읽는다 → 길이를 먼저 견준다. 1분 단위 읽기는 2차시(g2-math-clock)에서 이어서 한다.',
    },
    // ───────────────────────────── 3차시 (core · representation) ─────────────────────────────
    {
      id: 'g2-math-2-04-03', schema: 'edu-lesson.v1',
      catalog: { unit: 'g2-수학-2학기-4', lesson: 3 },
      grade: 2, subject: '수학', unitTitle: '4. 시각과 시간',
      title: '짧은바늘 자리 찾고 숫자 시계와 짝짓기',
      objective: '주어진 시각에서 짧은바늘이 두 숫자 사이 어디쯤 있는지 골라 말하고, 디지털 시계의 숫자와 같은 시각을 짝지을 수 있다.',
      standards: ['[2수03-07]'],
      minutes: 40,
      formats: ['chromebook', 'projector', 'print'],
      illustration: {
        prompt: 'Layered paper-cut illustration of a paper analog clock and a small digital clock side by side on a bedside table near a window at night, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.',
        scene: { viewBox: [480, 270], layers: [
          { motif: 'moon', x: 400, y: 58, s: 0.8 }, { motif: 'star', x: 320, y: 40, s: 0.5 }, { motif: 'star', x: 90, y: 60, s: 0.5 }, { motif: 'hills', y: 210 },
          { motif: 'house', x: 130, y: 216 }, { motif: 'tree', x: 360, y: 218, color: 'mint' },
          { motif: 'text', x: 240, y: 140, text: '9:40은 몇 시 몇 분?', size: 22 },
        ] },
      },
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '"전자레인지나 휴대폰에 9:40이라고 써 있어요. 바늘 시계로는 어떻게 보일까요?" 시연 단추로 9시에서 9시 40분까지 바늘이 도는 모습을 보여 주며 짧은바늘이 9에서 10 쪽으로 조금씩 움직이는 것을 짚는다. "40분 동안 짧은바늘이 가만히 있었나요?" 하고 묻는다.',
          student: '집에 있는 숫자 시계(디지털 시계)를 떠올려 봐요. 어디에 있나요?',
          demo: { tool: 'clock', options: { showDigital: true }, sequence: [{ h: 9, m: 0 }, { h: 9, m: 40 }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 긴바늘을 돌리며 짧은바늘 따라가 보기', minutes: 9, tool: 'clock',
              task: '긴바늘을 돌리면 짧은바늘도 조금씩 따라 움직여요. 짧은바늘이 어느 두 숫자 사이로 가는지 지켜보며 시각을 만들어요.',
              teacher: '"9시 40분이면 짧은바늘은 9에 있을까요, 10에 있을까요, 그 사이 어디쯤일까요?" 예상을 고르게 한 뒤 긴바늘을 천천히 돌리며 짧은바늘이 9에서 10 쪽으로 움직이는 것을 지켜보게 한다. 교구는 짧은바늘을 분에 맞춰 저절로 옮겨 주므로, 학생이 정할 것은 "몇 시를 지났는가"다 — 6시 50분을 7시로 만드는 학생에게 "아직 7시가 되지 않았어요"라고 짚는다. 손으로 짧은바늘 자리를 그리는 연습은 활동지 1번(바늘 그리기)을 수업 중 짝 활동으로 하고, 서로 "왜 거기에 그렸는지" 한 문장으로 말하게 한다.',
              levels: {
                easy: { minuteStep: 5, independent: true, hourZone: true, showMinuteNumbers: true },
                base: { minuteStep: 5 },
                challenge: { minuteStep: 1 },
              },
              items: [
                { prompt: '9시 40분을 만들어 보세요. 짧은바늘은 어디쯤일까요?', state: { h: 12, m: 0 }, target: { h: 9, m: 40 }, difficulty: 0.12, reveal: 'after-check',
                  predict: { q: '9시 40분의 짧은바늘은 어디에 있을까요?', options: ['9에 똑바로', '9와 10 사이, 10에 가까이', '10에 똑바로'], answer: 1 },
                  conclude: '40분이 지나서 짧은바늘은 9와 10 사이, 10에 더 가까운 곳에 있어요.' },
                { prompt: '6시 50분을 만들어 보세요. 짧은바늘이 7을 지났나요?', state: { h: 3, m: 0 }, target: { h: 6, m: 50 }, difficulty: 0.15, reveal: 'after-check',
                  levels: { challenge: { prompt: '6시 53분을 만들어 보세요. 작은 눈금도 세어요.', target: { h: 6, m: 53 } } } },
                { prompt: '12시 25분을 만들어 보세요. 12 다음 숫자는 무엇일까요?', state: { h: 4, m: 0 }, target: { h: 12, m: 25 }, difficulty: 0.15, reveal: 'after-check',
                  conclude: '12시 25분의 짧은바늘은 12와 1 사이에 있어요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 숫자 시계와 같은 시각 짝짓기', minutes: 9, tool: 'mindmap',
              task: '숫자 시계의 "9:05"는 앞의 수가 시, 뒤의 수가 분이에요. 같은 시각을 말로 쓴 카드를 이어요.',
              teacher: '"7:05에서 앞의 7은 무엇이고, 뒤의 05는 무엇일까요?" 05를 50분으로 읽는 학생이 있다 — "0이 앞에 있으면 5분, 뒤에 있으면 50분"이라고 두 카드를 나란히 놓고 견주게 한다. 다 이은 뒤 한 장을 골라 칠판 시계에 바늘로 나타내 보게 한다.',
              levels: {
                easy: { mode: 'match', topic: '같은 시각', live: true },
                base: { mode: 'match', topic: '같은 시각' },
                challenge: { mode: 'match', topic: '같은 시각' },
              },
              items: [
                { prompt: '숫자 시계와 같은 시각 카드를 이어 보세요.', toolOptions: { slots: [{ id: 's705', label: '7:05' }, { id: 's750', label: '7:50' }], cards: [{ id: 'c705', text: '7시 5분' }, { id: 'c750', text: '7시 50분' }, { id: 'c507', text: '5시 7분' }] }, target: { match: { s705: 'c705', s750: 'c750' } }, difficulty: 0.12,
                  hints: ['숫자 시계는 ":" 앞의 수가 시, 뒤의 수가 분이에요. 앞에 0이 붙은 분은 어떻게 읽는지 생각해요.', '두 숫자 시계는 시가 같아요. 분 자리의 0이 앞에 있는지 뒤에 있는지 견주어 봐요.', '7:05는 7시 5분, 7:50은 7시 50분이에요. 5시 7분은 시와 분을 바꿔 읽은 카드예요.'],
                  conclude: '숫자 시계는 앞이 시, 뒤가 분이에요. 05는 5분, 50은 50분이에요.' },
                { prompt: '숫자 시계와 같은 시각 카드를 이어 보세요.', toolOptions: { slots: [{ id: 's1030', label: '10:30' }, { id: 's315', label: '3:15' }, { id: 's1210', label: '12:10' }], cards: [{ id: 'c1030', text: '10시 30분' }, { id: 'c315', text: '3시 15분' }, { id: 'c1210', text: '12시 10분' }, { id: 'c303', text: '3시 3분' }] }, target: { match: { s1030: 'c1030', s315: 'c315', s1210: 'c1210' } }, difficulty: 0.15,
                  hints: ['":" 앞의 수를 먼저 읽어 몇 시인지 정하고, 뒤의 두 자리 수를 그대로 분으로 읽어요.', '분 자리가 두 자리 수인지 다시 봐요. 15를 1과 5로 나누어 읽지 않아요.', '10:30은 10시 30분, 3:15는 3시 15분, 12:10은 12시 10분이에요.'] },
                { prompt: '같은 시각을 이어 보세요. 바늘로 말한 카드도 있어요.', toolOptions: { slots: [{ id: 's845', label: '8:45' }, { id: 's420', label: '4:20' }], cards: [{ id: 'c845', text: '짧은바늘 8과 9 사이, 긴바늘 9' }, { id: 'c420', text: '짧은바늘 4와 5 사이, 긴바늘 4' }, { id: 'cx', text: '짧은바늘 9, 긴바늘 8' }] }, target: { match: { s845: 'c845', s420: 'c420' } }, difficulty: 0.25,
                  hints: ['분을 긴바늘 숫자로 바꾸려면 5씩 세어 봐요. 짧은바늘은 지나온 숫자와 다음 숫자 사이에 있어요.', '긴바늘이 가리키는 숫자까지 5씩 센 만큼이 분이에요. 짧은바늘이 숫자에 똑바로 있는 카드는 정각일 때만 맞아요.', '45분은 긴바늘 9, 20분은 긴바늘 4예요. 짧은바늘은 8과 9 사이, 4와 5 사이에 있어요.'],
                  conclude: '8시 45분은 긴바늘이 9, 짧은바늘이 8과 9 사이예요. 긴바늘은 12부터 5씩 세어 45분이에요.' },
                { prompt: '더 해 보기: 숫자 시계와 같은 시각을 이어 보세요. 시와 분을 바꿔 읽은 카드가 있어요.', toolOptions: { slots: [{ id: 's1155', label: '11:55' }, { id: 's210', label: '2:10' }, { id: 's635', label: '6:35' }], cards: [{ id: 'f1155', text: '12시 5분 전' }, { id: 'f210', text: '짧은바늘 2와 3 사이, 긴바늘 2' }, { id: 'f635', text: '6시 35분' }, { id: 'fx', text: '10시 2분' }] }, target: { match: { s1155: 'f1155', s210: 'f210', s635: 'f635' } }, extra: true, difficulty: 0.3,
                  hints: ['숫자 시계를 먼저 "몇 시 몇 분"으로 읽고, 그 시각을 다른 말(몇 분 전, 바늘 자리)로 바꾸어 견주어요.', '"몇 분 전" 카드는 정각까지 남은 분을 세어요. 바늘 카드는 긴바늘 숫자를 5씩 세어 분으로 바꾸어요.', '11시 55분은 12시까지 5분 남아 12시 5분 전, 2시 10분은 긴바늘 2, 6시 35분은 그대로예요.'] },
              ],
            },
            {
              id: 'a3', title: '활동 3. 짧은바늘 자리 고르기', minutes: 8, tool: 'mindmap',
              task: '짧은바늘은 분이 지난 만큼 다음 숫자 쪽으로 가요. 30분 전에는 앞 숫자에, 30분 뒤에는 다음 숫자에 더 가까워요.',
              teacher: '"10시 45분이에요. 짧은바늘이 10에 똑바로 있을까요?" 카드를 고른 뒤 칠판 시계의 짧은바늘을 직접 옮겨 보이며 확인한다. "10시 45분이니까 짧은바늘은 11 쪽"이라고 말하지만 11에 똑바로 놓는 학생이 있다 — "11에 똑바로면 몇 시일까요?"라고 되묻는다. 30분은 두 숫자의 한가운데라는 것을 기준으로 삼게 한다.',
              levels: {
                easy: { mode: 'pick', topic: '짧은바늘 자리', live: true },
                base: { mode: 'pick', topic: '짧은바늘 자리' },
                challenge: { mode: 'pick', topic: '짧은바늘 자리' },
              },
              items: [
                { prompt: '10시 45분일 때 짧은바늘 자리를 바르게 말한 카드를 골라 보세요.', toolOptions: { basket: '바른 자리', cards: [{ id: 'h1', text: '10에 똑바로' }, { id: 'h2', text: '10과 11 사이, 11에 가까이' }, { id: 'h3', text: '11에 똑바로' }, { id: 'h4', text: '10과 11 사이, 10에 가까이' }] }, target: { pick: ['h2'] }, difficulty: 0.15,
                  hints: ['짧은바늘은 1시간 동안 숫자 한 칸을 가요. 몇 분이 지났는지 보고 30분보다 많은지 생각해요.', '45분은 30분보다 많아요. 앞 숫자와 다음 숫자 가운데 어디에 더 가까울까요?', '45분이 지나서 짧은바늘은 10과 11 사이, 11에 더 가까운 곳에 있어요.'],
                  predict: { q: '10시 45분의 짧은바늘은 11에 닿았을까요?', options: ['닿았어요', '아직이에요'], answer: 1 },
                  conclude: '11에 닿으면 11시예요. 10시 45분은 아직 11시가 되기 전이라 11에 가깝지만 닿지 않아요.' },
                { prompt: '두 시각의 짧은바늘 자리를 이어 보세요.', toolOptions: { mode: 'match', slots: [{ id: 't805', label: '8시 5분' }, { id: 't850', label: '8시 50분' }], cards: [{ id: 'j1', text: '8과 9 사이, 8에 가까이' }, { id: 'j2', text: '8과 9 사이, 9에 가까이' }, { id: 'j3', text: '9에 똑바로' }] }, target: { match: { t805: 'j1', t850: 'j2' } }, difficulty: 0.2,
                  hints: ['두 시각은 시가 같아요. 분이 적으면 앞 숫자 쪽, 분이 많으면 다음 숫자 쪽이에요.', '5분과 50분 가운데 30분보다 많은 것은 어느 쪽일까요? 숫자에 똑바로 있는 카드는 정각일 때만 맞아요.', '8시 5분은 8에 가까이, 8시 50분은 9에 가까이 있어요. 둘 다 8과 9 사이예요.'] },
                { prompt: '12시 40분일 때 짧은바늘 자리를 바르게 말한 카드를 골라 보세요.', toolOptions: { basket: '바른 자리', cards: [{ id: 'k1', text: '12와 1 사이, 1에 가까이' }, { id: 'k2', text: '12와 1 사이, 12에 가까이' }, { id: 'k3', text: '11과 12 사이' }, { id: 'k4', text: '1에 똑바로' }] }, target: { pick: ['k1'] }, difficulty: 0.25,
                  hints: ['시계에서 12 다음 숫자가 무엇인지 먼저 떠올려요. 그다음 지난 분이 30분보다 많은지 봐요.', '12시를 지났으니 짧은바늘은 12와 그다음 숫자 사이에 있어요. 40분은 30분보다 많아요.', '12 다음은 1이에요. 40분이 지나서 짧은바늘은 12와 1 사이, 1에 가까운 곳에 있어요.'],
                  conclude: '12시 40분의 짧은바늘은 12와 1 사이, 1에 가까워요. 12 다음은 1이에요.' },
                { prompt: '더 해 보기: 세 시각의 짧은바늘 자리를 이어 보세요.', toolOptions: { mode: 'match', slots: [{ id: 'u410', label: '4시 10분' }, { id: 'u430', label: '4시 30분' }, { id: 'u455', label: '4시 55분' }], cards: [{ id: 'v1', text: '4와 5 사이, 4에 가까이' }, { id: 'v2', text: '4와 5 한가운데' }, { id: 'v3', text: '4와 5 사이, 5에 아주 가까이' }, { id: 'v4', text: '5에 똑바로' }] }, target: { match: { u410: 'v1', u430: 'v2', u455: 'v3' } }, extra: true, difficulty: 0.3,
                  hints: ['30분은 두 숫자의 한가운데예요. 지난 분이 30분보다 적은지, 같은지, 많은지 견주어요.', '세 시각 모두 4시와 5시 사이예요. 분이 많을수록 다음 숫자에 더 가까워요.', '4시 10분은 4에 가까이, 4시 30분은 한가운데, 4시 55분은 5에 아주 가까이 있어요.'] },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"3시 50분을 그릴 때 짧은바늘을 3에 똑바로 그린 친구와 4에 가깝게 그린 친구가 있어요. 누가 맞을까요? 왜 그렇게 생각해요?" 출구 1번(만들기)을 틀린 학생의 시계를 모아 짧은바늘 자리를 함께 살핀다.',
          exitTicket: [
            { type: 'tool', tool: 'clock', options: { minuteStep: 5 }, state: { h: 12, m: 0 }, prompt: '3시 50분을 만들어 보세요.', target: { h: 3, m: 50 }, difficulty: 0.15 },
            { type: 'choice', prompt: '숫자 시계에 1:35라고 써 있어요. 몇 시 몇 분인가요?', options: ['1시 35분', '3시 15분', '1시 3분'], answer: 0, difficulty: 0.1, explain: '앞의 1이 시, 뒤의 35가 분이에요.' },
            { type: 'short', prompt: '5시 45분을 시계에 그릴 때 짧은바늘을 어디에 그려야 할까요? 까닭도 쓰세요.' },
            { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
          ],
        },
      ],
      worksheet: {
        title: '시각을 시계에 나타내기',
        items: [
          { type: 'figure', prompt: '시각에 맞게 짧은바늘과 긴바늘을 그려 넣으세요.', tool: 'clock', figures: [
            { options: { hideHands: true }, caption: '9시 40분' }, { options: { hideHands: true }, caption: '2시 15분' }, { options: { hideHands: true }, caption: '12시 50분' }], answer: '9시 40분: 긴바늘 8, 짧은바늘 9와 10 사이(10 가까이) / 2시 15분: 긴바늘 3, 짧은바늘 2와 3 사이(2 가까이) / 12시 50분: 긴바늘 10, 짧은바늘 12와 1 사이(1 가까이)' },
          { type: 'table', prompt: '숫자 시계를 보고 몇 시 몇 분인지 쓰세요.', columns: ['숫자 시계', '몇 시 몇 분'], cells: [['6:05', ''], ['6:50', ''], ['11:25', '']], answer: '6시 5분, 6시 50분, 11시 25분' },
          { type: 'choice', prompt: '7시 45분을 바르게 그린 친구의 말에 ○ 하세요.', options: ['"짧은바늘을 7에 똑바로 그렸어요"', '"짧은바늘을 7과 8 사이, 8에 가깝게 그렸어요"', '"짧은바늘을 9에 그렸어요"'], answer: '"짧은바늘을 7과 8 사이, 8에 가깝게 그렸어요"' },
          { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '4시 30분을 숫자 시계로 쓰면 ___:___ 이에요.', answer: '4:30' },
        ],
        easy: {
          note: '긴바늘을 먼저 그려요. 짧은바늘은 분이 지난 만큼 다음 숫자 쪽으로 조금 옮겨 그려요.',
          items: [
            { type: 'figure', prompt: '시각에 맞게 두 바늘을 그려 넣으세요.', tool: 'clock', options: { showMinuteNumbers: true }, figures: [
              { options: { hideHands: true, showMinuteNumbers: true }, caption: '2시 30분' }, { options: { hideHands: true, showMinuteNumbers: true }, caption: '5시 15분' }], answer: '2시 30분: 긴바늘 6, 짧은바늘 2와 3 가운데 / 5시 15분: 긴바늘 3, 짧은바늘 5와 6 사이' },
            { type: 'table', prompt: '숫자 시계를 보고 몇 시 몇 분인지 쓰세요.', columns: ['숫자 시계', '몇 시 몇 분'], cells: [['8:10', ''], ['3:30', '']], answer: '8시 10분, 3시 30분' },
            { type: 'choice', prompt: '7:05와 같은 시각에 ○ 하세요.', options: ['7시 5분', '7시 50분'], answer: '7시 5분' },
            { type: 'short', prompt: '내가 좋아하는 시각을 하나 쓰고 숫자 시계 모양으로도 써 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '긴바늘이 5분씩 움직이고 짧은바늘이 따로 움직여요. 짧은바늘이 있어야 할 두 숫자 사이가 칠해지고, 맞힌 카드는 바로 초록 테두리가 생겨요.',
        base: '긴바늘이 5분씩 움직이고 짧은바늘이 긴바늘을 따라가요. 맞힌 뒤에야 숫자 시각이 보여요.',
        challenge: '긴바늘이 1분씩 움직이고 6시 53분처럼 작은 눈금까지 세요. 더 해 보기로 "몇 분 전"·바늘 자리로 말한 카드 짝짓기와 4시 10분·30분·55분의 짧은바늘 자리 견주기가 나와요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 짧은바늘을 숫자에 똑바로 그려 분이 지난 만큼 옮기지 않는다(9시 40분의 짧은바늘을 9에) → "40분 동안 짧은바늘도 움직였어요". ② 반대로 다음 숫자에 붙여 한 시간 늦은 시각이 된다. ③ 숫자 시계의 05를 50분으로 읽는다 → 0의 자리를 견준다. 출구 3번(서술)은 "분이 지났으니 다음 숫자 쪽으로" 같은 까닭이 있는지 본다.',
    },
    // ───────────────────────────── 4차시 (core · application) ─────────────────────────────
    {
      id: 'g2-math-2-04-04', schema: 'edu-lesson.v1',
      catalog: { unit: 'g2-수학-2학기-4', lesson: 4 },
      grade: 2, subject: '수학', unitTitle: '4. 시각과 시간',
      title: '몇 시 몇 분 전으로 말하고 하루 일과 시각 읽기',
      objective: '시계를 보고 "몇 시 몇 분 전"으로 바꾸어 말하고, 하루 일과의 시각을 읽어 일이 일어나는 차례를 정할 수 있다.',
      standards: ['[2수03-07]'],
      minutes: 40,
      formats: ['chromebook', 'projector', 'print'],
      illustration: {
        prompt: 'Layered paper-cut illustration of a child walking to a school gate in the morning while a big paper clock on the school building shows almost nine o\'clock, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.',
        scene: { viewBox: [480, 270], layers: [
          { motif: 'sun', x: 90, y: 60, s: 0.8 }, { motif: 'cloud', x: 330, y: 48 }, { motif: 'hills', y: 208 },
          { motif: 'house', x: 360, y: 214, s: 1.2, color: 'buttercup' }, { motif: 'tree', x: 120, y: 216 }, { motif: 'flower', x: 220, y: 226 },
          { motif: 'text', x: 240, y: 136, text: '9시 5분 전이에요!', size: 22 },
        ] },
      },
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '"수업은 9시에 시작해요. 지금 8시 55분이에요. 9시가 되려면 몇 분 더 있어야 할까요?" 시연 단추로 8시 55분에서 9시로 가는 모습을 보여 주고 긴바늘이 11에서 12까지 5분 가는 것을 손가락으로 따라가게 한다. "그래서 8시 55분을 9시 5분 전이라고도 말해요."',
          student: '"5분 전이야!"라는 말을 언제 들어 봤는지 이야기해 봐요.',
          demo: { tool: 'clock', options: { showMinuteNumbers: true, showDigital: true }, sequence: [{ h: 8, m: 55 }, { h: 9, m: 0 }] },
        },
        {
          id: 'main', title: '전개', minutes: 27,
          activities: [
            {
              id: 'a1', title: '활동 1. 몇 시 몇 분 전 만들기', minutes: 10, tool: 'clock',
              task: '"4시 10분 전"은 4시가 되기 10분 전이에요. 긴바늘을 12에서 거꾸로 세어 놓고, 짧은바늘은 아직 4에 닿지 않게 놓아요.',
              teacher: '"4시 10분 전은 4시가 지났을까요, 아직일까요?" 4시 10분 전을 4시 50분으로 만드는 학생이 많다 — 짧은바늘이 4를 지났는지 보게 한다. 긴바늘은 12에서 거꾸로 "5분, 10분" 하고 센다.',
              levels: {
                easy: { minuteStep: 5, showMinuteNumbers: true, hourZone: true, independent: true },
                base: { minuteStep: 5 },
                challenge: { minuteStep: 5 },
              },
              items: [
                { prompt: '4시 10분 전을 만들어 보세요.', state: { h: 12, m: 0 }, target: { h: 3, m: 50 }, difficulty: 0.15, reveal: 'after-check',
                  predict: { q: '4시 10분 전은 몇 시 몇 분일까요?', options: ['3시 50분', '4시 10분', '4시 50분'], answer: 0 },
                  conclude: '4시가 되기 10분 전이라 3시 50분이에요. 짧은바늘은 아직 4에 닿지 않았어요.' },
                { prompt: '8시 5분 전을 만들어 보세요.', state: { h: 2, m: 0 }, target: { h: 7, m: 55 }, difficulty: 0.15, reveal: 'after-check' },
                { prompt: '1시 15분 전을 만들어 보세요.', state: { h: 5, m: 0 }, target: { h: 12, m: 45 }, difficulty: 0.2, reveal: 'after-check',
                  conclude: '1시 15분 전은 12시 45분이에요. 1 앞의 숫자는 12예요.' },
                { prompt: '더 해 보기: 10시 20분 전을 만들어 보세요.', state: { h: 6, m: 0 }, target: { h: 9, m: 40 }, extra: true, difficulty: 0.25, reveal: 'after-check' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 시계로 지금 할 일 찾기', minutes: 8, tool: 'clock',
              task: '시계를 보고 몇 시 몇 분인지 고른 뒤, 시간표와 견주어 지금 무엇을 할 때인지 생각해요.',
              teacher: '칠판에 시간표를 붙인다: 1교시 9시 0분~9시 40분, 2교시 9시 50분~10시 30분, 점심 12시 10분, 수업 끝 2시 40분. "지금 시계가 9시 45분이에요. 2교시를 시작했을까요?" 맞힌 뒤에는 "몇 분 뒤에 시작해요?"를 묻는다.',
              levels: { easy: { hourZone: true, showMinuteNumbers: true }, base: {}, challenge: {} },
              items: [
                { prompt: '2교시는 9시 50분에 시작해요. 지금 몇 시 몇 분인지 골라 보세요.', state: { h: 9, m: 45 }, toolOptions: { readOnly: true, choices: ['10시 45분', '9시 45분', '9시 9분'] }, target: { pick: 1, h: 9, m: 45 }, difficulty: 0.12,
                  conclude: '지금은 9시 45분이라 2교시 시작까지 5분 남았어요. 쉬는 시간이에요.' },
                { prompt: '급식실 시계예요. 몇 시 몇 분인지 골라 보세요.', state: { h: 12, m: 20 }, toolOptions: { readOnly: true, choices: ['12시 20분', '1시 20분', '12시 4분'] }, target: { pick: 0, h: 12, m: 20 }, difficulty: 0.12,
                  levels: { challenge: { prompt: '급식실 시계예요. 작은 눈금까지 세어 몇 시 몇 분인지 골라 보세요.', state: { h: 12, m: 23 }, toolOptions: { choices: ['1시 23분', '12시 4분', '12시 23분'] }, target: { pick: 2, h: 12, m: 23 } } } },
                { prompt: '수업은 2시 40분에 끝나요. 지금 몇 시 몇 분인지 골라 보세요.', state: { h: 2, m: 55 }, toolOptions: { readOnly: true, choices: ['3시 55분', '2시 55분', '11시 15분'] }, target: { pick: 1, h: 2, m: 55 }, difficulty: 0.2,
                  conclude: '2시 55분은 3시 5분 전이에요. 수업은 벌써 끝났어요.' },
              ],
            },
            {
              id: 'a3', title: '활동 3. 하루 일과를 시각 차례로 놓기', minutes: 9, tool: 'story',
              task: '카드에 적힌 시각을 읽고, 먼저 하는 일부터 차례대로 칸에 놓아요.',
              teacher: '"12시 10분과 1시 중에 무엇이 먼저예요?" 12가 1보다 큰 수라서 12시를 나중에 놓는 학생이 있다 — 시계에서 12 다음이 1이라는 것을 짚는다. "몇 분 전" 카드는 몇 시 몇 분으로 바꾸어 카드 옆에 적게 한다.',
              levels: {
                easy: { live: true },
                base: {},
                challenge: {},
              },
              items: [
                { prompt: '아침에 하는 일을 시각 차례대로 놓아 보세요.', toolOptions: { slots: 4, cards: [
                  { id: 'w1', text: '일어나요', sub: '7시 20분', motif: 'sun' }, { id: 'w2', text: '아침 먹어요', sub: '7시 45분', motif: 'house' },
                  { id: 'w3', text: '학교 도착', sub: '8시 40분', motif: 'tree' }, { id: 'w4', text: '1교시 시작', sub: '9시', motif: 'star' }] },
                  target: { order: ['w1', 'w2', 'w3', 'w4'] }, difficulty: 0.08,
                  hints: ['카드 아래 시각을 읽어요. 시가 작은 것이 먼저이고, 시가 같으면 분이 작은 것이 먼저예요.', '두 카드씩 견주어 봐요. 7시대 카드가 둘이면 분을 견주어 차례를 정해요.', '7시 20분 → 7시 45분 → 8시 40분 → 9시 차례예요.'] },
                { prompt: '점심 뒤에 하는 일을 시각 차례대로 놓아 보세요. 12 다음은 1이에요.', toolOptions: { slots: 4, cards: [
                  { id: 'p1', text: '점심 먹어요', sub: '12시 10분', motif: 'house' }, { id: 'p2', text: '5교시 시작', sub: '1시', motif: 'star' },
                  { id: 'p3', text: '집에 가요', sub: '2시 40분', motif: 'tree' }, { id: 'p4', text: '피아노 학원', sub: '3시 50분', motif: 'flower' }] },
                  target: { order: ['p1', 'p2', 'p3', 'p4'] }, difficulty: 0.15,
                  hints: ['시계에서 12 다음에 오는 숫자를 떠올려요. 점심때는 12시가 지나면 다시 작은 수로 시작해요.', '12시대 카드를 맨 뒤에 놓지 않았나요? 낮 12시 다음이 1시, 2시, 3시예요.', '12시 10분 → 1시 → 2시 40분 → 3시 50분 차례예요.'],
                  predict: { q: '12시 10분과 1시 가운데 무엇이 먼저일까요?', options: ['12시 10분', '1시'], answer: 0 },
                  conclude: '시계에서 12 다음이 1이라서 12시 10분이 1시보다 먼저예요.' },
                { prompt: '저녁에 하는 일을 차례대로 놓아 보세요. "몇 분 전"을 몇 시 몇 분으로 바꾸어 봐요.', toolOptions: { slots: 4, cards: [
                  { id: 'e1', text: '저녁 먹어요', sub: '6시 10분 전', motif: 'house' }, { id: 'e2', text: '숙제해요', sub: '6시 30분', motif: 'leaf' },
                  { id: 'e3', text: '씻어요', sub: '8시 15분 전', motif: 'cloud' }, { id: 'e4', text: '잠자요', sub: '9시 5분 전', motif: 'moon' }] },
                  target: { order: ['e1', 'e2', 'e3', 'e4'] }, difficulty: 0.25,
                  hints: ['"몇 시 몇 분 전" 카드는 먼저 몇 시 몇 분으로 바꾸어 카드 옆에 적은 뒤 견주어요.', '"전"은 그 시각이 되기 전이에요. 6시 10분 전은 6시보다 이른 시각이에요.', '6시 10분 전은 5시 50분, 8시 15분 전은 7시 45분, 9시 5분 전은 8시 55분이에요. 숙제(6시 30분)는 둘째예요.'],
                  conclude: '6시 10분 전은 5시 50분, 8시 15분 전은 7시 45분, 9시 5분 전은 8시 55분이에요.' },
                { prompt: '더 해 보기: 토요일에 하는 일을 차례대로 놓아 보세요. 카드가 다섯 장이에요.', toolOptions: { slots: 5, cards: [
                  { id: 'z1', text: '도서관 가요', sub: '10시 20분 전', motif: 'house' }, { id: 'z2', text: '책 빌려요', sub: '10시 5분', motif: 'star' },
                  { id: 'z3', text: '점심 먹어요', sub: '12시 30분', motif: 'sun' }, { id: 'z4', text: '자전거 타요', sub: '2시 15분 전', motif: 'tree' }, { id: 'z5', text: '간식 먹어요', sub: '3시 10분', motif: 'flower' }] },
                  target: { order: ['z1', 'z2', 'z3', 'z4', 'z5'] }, extra: true, difficulty: 0.3,
                  hints: ['"몇 분 전" 카드를 몇 시 몇 분으로 바꾼 뒤, 낮 12시 다음이 1시라는 것을 떠올려 차례를 정해요.', '"전" 카드가 그 시각보다 이른지 다시 봐요. 12시대 카드를 맨 뒤로 보내지 않았나요?', '10시 20분 전은 9시 40분, 2시 15분 전은 1시 45분이에요. 9시 40분 → 10시 5분 → 12시 30분 → 1시 45분 → 3시 10분이에요.'] },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 7,
          teacher: '"11시 45분을 몇 시 몇 분 전이라고 말할 수 있을까요?" 12시까지 긴바늘이 몇 칸 남았는지 세게 한다. 출구 1번에서 6시 50분을 만든 학생은 "전"을 "후"로 생각한 것이니 다음 시간 전에 한 번 더 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'clock', options: { minuteStep: 5 }, state: { h: 12, m: 0 }, prompt: '6시 10분 전을 만들어 보세요.', target: { h: 5, m: 50 }, difficulty: 0.18 },
            { type: 'choice', prompt: '11시 45분은 몇 시 몇 분 전인가요?', options: ['11시 15분 전', '12시 15분 전', '12시 45분 전'], answer: 1, difficulty: 0.2, explain: '11시 45분에서 15분이 지나면 12시예요. 그래서 12시 15분 전이에요.' },
            { type: 'short', prompt: '내가 오늘 학교가 끝나고 처음 하는 일과 그 시각을 쓰세요.' },
            { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
          ],
        },
      ],
      worksheet: {
        title: '몇 시 몇 분 전',
        items: [
          { type: 'figure', prompt: '시계를 보고 몇 시 몇 분인지 쓰고, 몇 시 몇 분 전으로도 쓰세요.', tool: 'clock', figures: [
            { state: { h: 2, m: 55 }, caption: '___시 ___분 = ___시 ___분 전' }, { state: { h: 6, m: 50 }, caption: '___시 ___분 = ___시 ___분 전' }, { state: { h: 11, m: 45 }, caption: '___시 ___분 = ___시 ___분 전' }], answer: '2시 55분 = 3시 5분 전, 6시 50분 = 7시 10분 전, 11시 45분 = 12시 15분 전' },
          { type: 'figure', prompt: '시각에 맞게 두 바늘을 그려 넣으세요.', tool: 'clock', figures: [
            { options: { hideHands: true }, caption: '5시 10분 전' }, { options: { hideHands: true }, caption: '10시 5분 전' }], answer: '5시 10분 전 = 4시 50분(긴바늘 10, 짧은바늘 4와 5 사이), 10시 5분 전 = 9시 55분(긴바늘 11, 짧은바늘 9와 10 사이)' },
          { type: 'table', prompt: '나의 하루 일과를 시각과 함께 쓰세요.', columns: ['하는 일', '시각'], cells: [['일어나기', ''], ['학교 도착', ''], ['잠자기', '']], answer: '예: 7시 20분, 8시 40분, 9시 30분' },
          { type: 'choice', prompt: '7시 15분 전과 같은 시각에 ○ 하세요.', options: ['7시 15분', '6시 45분', '7시 45분'], answer: '6시 45분' },
        ],
        easy: {
          note: '"몇 시 몇 분 전"은 그 시각이 되기 전이에요. 긴바늘을 12에서 거꾸로 5분씩 세어요.',
          items: [
            { type: 'figure', prompt: '시계를 보고 몇 시 몇 분인지 쓰세요.', tool: 'clock', options: { showMinuteNumbers: true }, figures: [
              { state: { h: 2, m: 55 }, caption: '___시 ___분' }, { state: { h: 8, m: 50 }, caption: '___시 ___분' }], answer: '2시 55분, 8시 50분' },
            { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '2시 55분은 ___시 5분 전이에요. 8시 50분은 9시 ___분 전이에요.', answer: '3, 10' },
            { type: 'table', prompt: '나의 하루 일과 시각을 쓰세요.', columns: ['하는 일', '시각'], cells: [['일어나기', ''], ['잠자기', '']], answer: '예: 7시 20분, 9시 30분' },
            { type: 'choice', prompt: '3시 5분 전에 ○ 하세요.', options: ['2시 55분', '3시 5분'], answer: '2시 55분' },
          ],
        },
      },
      differentiation: {
        easy: '바깥에 5분 숫자가 보이고 짧은바늘이 있어야 할 자리가 칠해져요. 일과 카드는 맞는 칸에 놓으면 바로 초록 테두리가 생겨요.',
        base: '긴바늘이 5분씩 움직이고, 맞힌 뒤에야 숫자 시각이 보여요.',
        challenge: '10시 20분 전처럼 더 많이 거꾸로 세는 문항, 작은 눈금까지 세는 12시 23분 읽기, "몇 분 전"이 섞인 다섯 장 일과 카드까지 해요.',
      },
      teacherNotes: '자주 보이는 어려움: ① "4시 10분 전"을 4시 50분으로 만든다(전·후 혼동) → 그 시각이 되기 "전"이니 짧은바늘은 아직 4에 닿지 않는다. ② 긴바늘을 거꾸로 셀 때 12에서 한 칸 덜 간다. ③ 12시와 1시의 차례를 수의 크기로 판단한다 → 시계에서 12 다음이 1. ④ 2시 55분을 3시 55분으로 읽는다(짧은바늘이 3에 가까움) → 지나온 숫자를 읽는다.',
    },
    // ───────────────────────────── 5차시 (core · concept, 1시간 = 60분) ─────────────────────────────
    {
      id: 'g2-math-2-04-05', schema: 'edu-lesson.v1',
      catalog: { unit: 'g2-수학-2학기-4', lesson: 5 },
      grade: 2, subject: '수학', unitTitle: '4. 시각과 시간',
      title: '긴바늘 한 바퀴로 1시간 알아보고 시각과 시간 구별하기',
      objective: '긴바늘이 한 바퀴 도는 60분이 1시간임을 시계 눈금으로 설명하고, "시각"과 "시간"을 구별하여 쓸 수 있다.',
      standards: ['[2수03-08]'],
      minutes: 40,
      formats: ['chromebook', 'projector', 'print'],
      illustration: {
        prompt: 'Layered paper-cut illustration of children playing in a park while a paper clock on a pole shows the long hand making one full turn with a curved arrow around the face, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.',
        scene: { viewBox: [480, 270], layers: [
          { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 120, y: 54 }, { motif: 'hills', y: 206 },
          { motif: 'tree', x: 90, y: 214 }, { motif: 'tree', x: 390, y: 216, color: 'mint' }, { motif: 'flower', x: 180, y: 228 }, { motif: 'flower', x: 300, y: 228, color: 'rose' },
          { motif: 'text', x: 240, y: 138, text: '한 바퀴는 60분', size: 22 },
        ] },
      },
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '"민지는 2시에 놀이터에 가서 3시에 집에 왔어요. 놀이터에 얼마 동안 있었을까요?" 시연 단추로 2시에서 3시까지 바늘이 도는 모습을 보여 준다. "긴바늘은 몇 바퀴 돌았어요? 짧은바늘은 몇 칸 갔어요?" 긴바늘 한 바퀴 동안 짧은바늘이 숫자 한 칸 가는 것을 짚는다.',
          student: '"2시"와 "2시간"은 무엇이 다를까요? 생각을 말해 봐요.',
          demo: { tool: 'clock', options: { showMinuteNumbers: true, showDigital: true }, sequence: [{ h: 2, m: 0 }, { h: 3, m: 0 }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 긴바늘을 한 바퀴 돌려 1시간 뒤 만들기', minutes: 9, tool: 'clock',
              task: '긴바늘을 12에서 시작해 한 바퀴 돌리면 짧은바늘이 숫자 한 칸 가요. 1시간 뒤 시각을 만들어요.',
              teacher: '"긴바늘이 한 바퀴 도는 동안 작은 눈금 몇 칸을 지났을까요? 60칸, 60분이에요." 긴바늘만 한 바퀴 돌리고 짧은바늘이 따라 움직이는 것을 지켜보게 한다. 짧은바늘을 한 바퀴 돌리는 학생에게는 "1시간 동안 짧은바늘은 숫자 한 칸만 가요"라고 짚는다.',
              levels: {
                easy: { minuteStep: 5, showMinuteNumbers: true },
                base: { minuteStep: 5 },
                challenge: { minuteStep: 1 },
              },
              items: [
                { prompt: '지금은 2시예요. 1시간 뒤 시각을 만들어 보세요.', state: { h: 2, m: 0 }, target: { h: 3, m: 0 }, difficulty: 0.08,
                  predict: { q: '긴바늘이 한 바퀴 돌면 짧은바늘은 어떻게 될까요?', options: ['숫자 한 칸 가요', '한 바퀴 돌아요', '그대로예요'], answer: 0 },
                  conclude: '긴바늘이 한 바퀴(60분) 돌면 짧은바늘은 숫자 한 칸 가요. 60분은 1시간이에요.' },
                { prompt: '지금은 9시 20분이에요. 1시간 뒤 시각을 만들어 보세요.', state: { h: 9, m: 20 }, target: { h: 10, m: 20 }, difficulty: 0.12 },
                { prompt: '지금은 11시 40분이에요. 1시간 뒤 시각을 만들어 보세요.', state: { h: 11, m: 40 }, target: { h: 12, m: 40 }, difficulty: 0.18,
                  conclude: '1시간 뒤에는 긴바늘이 제자리로 돌아오고, 시만 1 커져요. 11 다음은 12예요.' },
                { prompt: '더 해 보기: 지금은 5시 10분이에요. 2시간 뒤 시각을 만들어 보세요.', state: { h: 5, m: 10 }, target: { h: 7, m: 10 }, extra: true, difficulty: 0.2 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 시간 띠에서 60분 세기', minutes: 8, tool: 'numberline',
              task: '시간 띠의 한 칸은 10분이에요. 화살표로 뛰어 세며 60분이 몇 번인지 알아봐요.',
              teacher: '"10분씩 몇 번 가야 60분이 될까요?" 손가락 여섯 개를 펴며 함께 센다. 둘째 문항에서는 한 번에 뛰는 크기를 60으로 키워 "60분 = 1시간"을 화살표 한 개로 보이게 한다.',
              levels: {
                easy: { mode: 'jump', min: 0, max: 120, step: 10, fixedFrom: 0, showValue: true },
                base: { mode: 'jump', min: 0, max: 120, step: 10, fixedFrom: 0 },
                challenge: { mode: 'jump', min: 0, max: 120, step: 10, fixedFrom: 0, labels: 'ends' },
              },
              items: [
                { prompt: '10분씩 뛰어 60분까지 가 보세요. 몇 번 뛰었나요?', target: { from: 0, size: 10, end: 60 }, difficulty: 0.08,
                  conclude: '10분씩 6번 뛰면 60분이에요. 60분은 1시간이에요.' },
                { prompt: '한 번에 1시간(60분)씩 2번 뛰어 보세요.', target: { from: 0, size: 60, count: 2 }, difficulty: 0.15,
                  predict: { q: '2시간은 몇 분일까요?', options: ['20분', '100분', '120분'], answer: 2 },
                  conclude: '1시간이 2번이면 2시간, 60분이 2번이면 120분이에요.' },
                { prompt: '30분씩 뛰어 1시간이 되게 해 보세요.', target: { from: 0, size: 30, end: 60 }, difficulty: 0.15,
                  conclude: '30분이 2번이면 60분, 1시간이에요.' },
              ],
            },
            {
              id: 'a3', title: '활동 3. 시각일까, 시간일까', minutes: 9, tool: 'mindmap',
              task: '"언제"를 말하면 시각, "얼마 동안"을 말하면 시간이에요. 카드를 알맞은 가지에 넣어요.',
              teacher: '"3시에 만나요"와 "3시간 동안 놀아요"를 소리 내어 읽고 "언제?"와 "얼마 동안?" 중 어느 질문에 대답하는지 묻는다. "2시 동안 놀았어요"처럼 시각을 시간으로 쓰는 실수가 흔하다 — 마지막 문항에서 바르게 쓴 문장만 고르게 한다.',
              levels: {
                easy: { topic: '시각과 시간', live: true },
                base: { topic: '시각과 시간' },
                challenge: { topic: '시각과 시간' },
              },
              items: [
                { prompt: '언제인지 말하면 시각, 얼마 동안인지 말하면 시간이에요. 나누어 보세요.', toolOptions: { mode: 'sort', slots: [{ id: 'gak', label: '시각(언제)' }, { id: 'gan', label: '시간(얼마 동안)' }], cards: [
                  { id: 'k1', text: '3시에 만나요' }, { id: 'k2', text: '9시 10분에 시작해요' }, { id: 'n1', text: '3시간 동안 놀았어요' }, { id: 'n2', text: '40분 동안 책을 읽었어요' }] },
                  target: { sort: { gak: ['k1', 'k2'], gan: ['n1', 'n2'] } }, difficulty: 0.1,
                  hints: ['카드마다 "언제?"와 "얼마 동안?"을 붙여 소리 내어 읽어 봐요. 어느 질문의 대답인지 생각해요.', '"동안"이라는 말이 있는 카드는 얼마나 오래인지 말하고 있어요. 그 카드가 어느 가지에 있는지 다시 봐요.', '"3시에", "9시 10분에"는 언제를 말해서 시각, "3시간 동안", "40분 동안"은 얼마 동안이라 시간이에요.'] },
                { prompt: '이번에는 섞인 카드예요. 시각과 시간으로 나누어 보세요.', toolOptions: { mode: 'sort', slots: [{ id: 'gak', label: '시각(언제)' }, { id: 'gan', label: '시간(얼마 동안)' }], cards: [
                  { id: 'k3', text: '8시 40분에 학교에 와요' }, { id: 'n3', text: '잠을 9시간 잤어요' }, { id: 'n4', text: '줄넘기를 10분 했어요' }, { id: 'k4', text: '영화가 2시 30분에 끝나요' }, { id: 'n5', text: '1시간 동안 그림을 그려요' }] },
                  target: { sort: { gak: ['k3', 'k4'], gan: ['n3', 'n4', 'n5'] } }, difficulty: 0.18,
                  hints: ['"동안"이라는 말이 없어도 얼마나 오래 했는지 말하는 카드가 있어요. "언제?"와 "얼마 동안?"을 붙여 읽어요.', '"~시간 잤어요", "~분 했어요"처럼 "시간"이나 "분"만 있고 "에"가 없으면 얼마 동안을 말하는지 살펴봐요.', '8시 40분에 오고 2시 30분에 끝나는 것은 시각, 9시간 잔 것·10분 한 것·1시간 동안 그린 것은 시간이에요.'] },
                { prompt: '바르게 쓴 문장만 골라 보세요.', toolOptions: { mode: 'pick', basket: '바른 문장', cards: [
                  { id: 'r1', text: '2시간 동안 놀았어요' }, { id: 'x1', text: '2시 동안 놀았어요' }, { id: 'r2', text: '1시에 점심을 먹어요' }, { id: 'x2', text: '1시간에 점심을 먹어요' }] },
                  target: { pick: ['r1', 'r2'] }, difficulty: 0.25,
                  hints: ['문장마다 "언제?"를 말하는지 "얼마 동안?"을 말하는지 먼저 정하고, 그에 맞는 말을 썼는지 봐요.', '"동안" 앞에는 얼마나 오래인지가 와야 하고, "에" 앞에는 언제인지가 와야 해요. 고른 카드를 다시 읽어 봐요.', '"2시간 동안 놀았어요"와 "1시에 점심을 먹어요"가 바른 문장이에요. "2시 동안", "1시간에 점심"은 어색해요.'],
                  conclude: '"얼마 동안"에는 시간(2시간), "언제"에는 시각(1시)을 써요.' },
                { prompt: '더 해 보기: 빈칸에 들어갈 말이 시각인지 시간인지 나누어 보세요.', toolOptions: { mode: 'sort', slots: [{ id: 'gak', label: '시각(언제)' }, { id: 'gan', label: '시간(얼마 동안)' }], cards: [
                  { id: 'k6', text: '버스가 ○에 와요' }, { id: 'n6', text: '버스를 ○ 기다렸어요' }, { id: 'k7', text: '○에 잠자리에 들어요' }, { id: 'n7', text: '수영장에서 ○ 놀았어요' }, { id: 'n8', text: '○ 걸려서 도착했어요' }] },
                  target: { sort: { gak: ['k6', 'k7'], gan: ['n6', 'n7', 'n8'] } }, extra: true, difficulty: 0.3,
                  hints: ['○에 "3시"와 "3시간"을 차례로 넣어 읽어 보고, 어느 말이 자연스러운지 들어요.', '○ 뒤에 "에"가 붙으면 언제를 말해요. "기다렸어요", "걸려서"는 얼마나 오래인지를 물어요.', '"○에 와요", "○에 잠자리에"는 시각, "○ 기다렸어요", "○ 놀았어요", "○ 걸려서"는 시간이에요.'] },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"1시간은 몇 분이에요? 시계의 어디를 보고 알 수 있어요?" 긴바늘 한 바퀴와 작은 눈금 60칸을 학생 말로 정리한다. 출구 3번을 틀린 학생에게는 "언제?"와 "얼마 동안?" 질문을 붙여 다시 읽게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'clock', options: { minuteStep: 5 }, state: { h: 4, m: 30 }, prompt: '지금은 4시 30분이에요. 1시간 뒤 시각을 만들어 보세요.', target: { h: 5, m: 30 }, difficulty: 0.15 },
            { type: 'choice', prompt: '1시간은 몇 분인가요?', options: ['10분', '60분', '100분'], answer: 1, difficulty: 0.08, explain: '긴바늘이 한 바퀴 돌면 작은 눈금 60칸, 60분이에요.' },
            { type: 'choice', prompt: '시간을 바르게 쓴 문장은 무엇인가요?', options: ['4시 동안 공부했어요', '4시간 동안 공부했어요', '4시간에 만나요'], answer: 1, difficulty: 0.15, explain: '얼마 동안인지 말할 때는 "4시간"처럼 시간을 써요.' },
            { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
          ],
        },
      ],
      worksheet: {
        title: '1시간 = 60분',
        items: [
          { type: 'figure', prompt: '두 시계를 보고 걸린 시간을 쓰세요.', tool: 'clock', figures: [
            { state: { h: 3, m: 0 }, caption: '시작' }, { state: { h: 4, m: 0 }, caption: '끝 → ___시간 = ___분' }], answer: '1시간 = 60분' },
          { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '1시간 = ___분, 2시간 = ___분, 30분이 2번이면 ___시간이에요.', answer: '60, 120, 1' },
          { type: 'table', prompt: '문장을 읽고 시각이면 "시각", 시간이면 "시간"이라고 쓰세요.', columns: ['문장', '시각/시간'], cells: [['10시에 학교에 가요', ''], ['30분 동안 산책했어요', ''], ['2시간 동안 영화를 봤어요', '']], answer: '시각, 시간, 시간' },
          { type: 'choice', prompt: '긴바늘이 한 바퀴 돌 때 짧은바늘은 어떻게 되나요?', options: ['한 바퀴 돌아요', '숫자 한 칸 가요', '움직이지 않아요'], answer: '숫자 한 칸 가요' },
          { type: 'short', prompt: '"시각"과 "시간"을 하나씩 넣어 내 하루를 두 문장으로 쓰세요.' },
        ],
        easy: {
          note: '긴바늘이 한 바퀴 돌면 60분, 1시간이에요. "언제?"면 시각, "얼마 동안?"이면 시간이에요.',
          items: [
            { type: 'figure', prompt: '두 시계를 보고 빈칸을 채우세요.', tool: 'clock', options: { showMinuteNumbers: true }, figures: [
              { state: { h: 3, m: 0 }, caption: '시작' }, { state: { h: 4, m: 0 }, caption: '끝 → ___시간' }], answer: '1시간' },
            { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '1시간 = ___분', answer: '60' },
            { type: 'choice', prompt: '"얼마 동안"을 말한 문장에 ○ 하세요.', options: ['1시간 동안 놀았어요', '1시에 놀았어요'], answer: '1시간 동안 놀았어요' },
            { type: 'short', prompt: '1시간 동안 하고 싶은 일을 쓰세요.' },
          ],
        },
      },
      differentiation: {
        easy: '바깥에 5분 숫자가 보이고, 시간 띠 도착점에 수가 보여요. 알맞은 가지에 놓은 카드는 바로 초록 테두리가 생겨요.',
        base: '시간 띠에 10분마다 수가 적혀 있어요. 시각·시간 문장을 스스로 나누어요.',
        challenge: '긴바늘이 1분씩 움직이고, 시간 띠에는 양 끝 수만 있어 칸을 세어야 해요. 2시간 뒤 시각과 ○에 시각·시간을 넣어 보는 문장 나누기가 더 나와요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 시각과 시간을 같은 말로 여긴다("2시 동안 놀았다") → "언제?"·"얼마 동안?" 질문을 붙여 읽는다. ② 1시간 뒤를 만들 때 짧은바늘을 한 바퀴 돌린다 → 긴바늘 한 바퀴, 짧은바늘 숫자 한 칸. ③ 1시간을 100분으로 안다(10씩 세는 수의 버릇) → 시간 띠에서 60에서 한 시간이 끝남을 본다.',
    },
    // ───────────────────────────── 6차시 (core · representation) ─────────────────────────────
    {
      id: 'g2-math-2-04-06', schema: 'edu-lesson.v1',
      catalog: { unit: 'g2-수학-2학기-4', lesson: 6 },
      grade: 2, subject: '수학', unitTitle: '4. 시각과 시간',
      title: '시간 띠에 화살표로 걸린 시간 나타내기',
      objective: '걸린 시간을 시간 띠에 화살표로 나타내고, 같은 시간을 "몇 분"과 "몇 시간 몇 분"으로 바꾸어 쓸 수 있다.',
      standards: ['[2수03-08]'],
      minutes: 40,
      formats: ['chromebook', 'projector', 'print'],
      illustration: {
        prompt: 'Layered paper-cut illustration of a long paper ribbon marked in equal sections like a time strip, with a curved arrow jumping along it above a library with stacks of books, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.',
        scene: { viewBox: [480, 270], layers: [
          { motif: 'sun', x: 404, y: 58, s: 0.7 }, { motif: 'cloud', x: 110, y: 54 }, { motif: 'hills', y: 208 },
          { motif: 'house', x: 240, y: 216, s: 1.2, color: 'sky' }, { motif: 'tree', x: 90, y: 218 }, { motif: 'tree', x: 390, y: 218 },
          { motif: 'text', x: 240, y: 132, text: '80분은 몇 시간 몇 분?', size: 22 },
        ] },
      },
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '"준호는 도서관에서 80분 동안 책을 읽었어요. 1시간보다 길까요, 짧을까요?" 시연 단추로 시간 띠에 10분짜리 화살표가 8개 생기는 모습을 보여 주고, 60에서 멈추어 "여기까지가 1시간이에요. 남은 것은?" 하고 묻는다. "8시간"이나 "1시간 80분"이라는 대답이 나오면 칠판에 적어 두고 활동 2에서 바로잡는다.',
          student: '내가 1시간보다 오래 한 일을 떠올려 봐요.',
          demo: { tool: 'numberline', options: { mode: 'jump', min: 0, max: 120, step: 10, fixedFrom: 0, showValue: true }, sequence: [{ from: 0, size: 10, count: 8 }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 걸린 시간을 화살표로 그리기', minutes: 9, tool: 'numberline',
              task: '시간 띠의 한 칸은 10분이에요. 한 번에 뛰는 크기를 정하고 화살표를 그려 걸린 시간만큼 가요.',
              teacher: '"1시간 10분이면 60분 화살표 하나와 10분 화살표 하나로 그릴 수 있을까요?" 크기를 60으로 바꾸어 한 번, 다시 10으로 바꾸어 한 번 뛰는 방법을 보여 준다. 1시간 10분을 시간 띠의 1과 10에서 찾는 학생에게 "이 띠의 수는 분이에요"라고 짚는다.',
              levels: {
                easy: { mode: 'jump', min: 0, max: 120, step: 10, fixedFrom: 0, showValue: true },
                base: { mode: 'jump', min: 0, max: 120, step: 10, fixedFrom: 0 },
                challenge: { mode: 'jump', min: 0, max: 120, step: 10, fixedFrom: 0, labels: 'ends' },
              },
              items: [
                { prompt: '줄넘기 연습을 80분 했어요. 0에서 출발해 화살표로 나타내 보세요.', target: { from: 0, end: 80 }, difficulty: 0.1,
                  predict: { q: '80분은 1시간보다 길까요?', options: ['길어요', '짧아요', '같아요'], answer: 0 },
                  conclude: '80분은 60분과 20분이에요. 그래서 1시간 20분이에요.' },
                { prompt: '도서관에 1시간 10분 있었어요. 시간 띠에 화살표로 나타내 보세요.', target: { from: 0, end: 70 }, difficulty: 0.15,
                  conclude: '1시간 10분은 60분과 10분, 모두 70분이에요.' },
                { prompt: '미술관 구경을 1시간 40분 했어요. 화살표로 나타내 보세요.', target: { from: 0, end: 100 }, difficulty: 0.18 },
                { prompt: '더 해 보기: 1시간 50분을 화살표 두 개로만 나타내 보세요.', target: { from: 0, end: 110 }, extra: true, difficulty: 0.25,
                  conclude: '60분 화살표 하나와 50분 화살표 하나면 1시간 50분이에요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 가 점까지 흐른 시간 읽기', minutes: 8, tool: 'numberline',
              task: '가 점까지 몇 분인지 세고, 그 시간을 "몇 시간 몇 분"으로 바꾼 것을 골라요.',
              teacher: '"가 점이 80에 있으면 80분이에요. 60분을 1시간으로 바꾸면 몇 분이 남아요?" "8시간"을 고른 학생에게는 "8시간이면 밤새 잠을 자는 만큼이에요"라고 크기를 떠올리게 한다. "1시간 80분"을 고른 학생에게는 1시간을 빼고 남은 분을 다시 세게 한다.',
              levels: {
                easy: { mode: 'read', min: 0, max: 120, step: 10, showValue: true, question: '가 점까지 흐른 시간을 고르세요.' },
                base: { mode: 'read', min: 0, max: 120, step: 10, question: '가 점까지 흐른 시간을 고르세요.' },
                challenge: { mode: 'read', min: 0, max: 120, step: 10, sub: 2, labels: 'ends', question: '가 점까지 흐른 시간을 고르세요.' },
              },
              items: [
                { prompt: '가 점은 0에서 80분 간 곳이에요. 몇 시간 몇 분인지 골라 보세요.', toolOptions: { marks: [80], choices: ['1시간 20분', '8시간', '1시간 80분'], why: ['', '8시간은 밤에 자는 만큼 긴 시간이에요. 띠의 수는 분이에요.', '60분은 1시간으로 바꾸었으니 남은 분만 써요.'] }, target: { pick: 0 }, difficulty: 0.1 },
                { prompt: '가 점까지 흐른 시간을 몇 시간 몇 분으로 골라 보세요.', toolOptions: { marks: [90], choices: ['9시간', '1시간 30분', '1시간 9분'], why: ['띠의 수는 분이에요. 90분이 몇 시간 몇 분인지 생각해요.', '', '90분에서 60분을 빼면 남는 분을 다시 세어 봐요.'] }, target: { pick: 1 }, difficulty: 0.15 },
                { prompt: '가 점까지 흐른 시간을 골라 보세요.', toolOptions: { marks: [110], choices: ['1시간 10분', '11시간', '1시간 50분'], why: ['10분만 남는 것은 70분이에요. 가 점이 어디 있는지 다시 봐요.', '띠의 수는 분이에요.', ''] }, target: { pick: 2 }, difficulty: 0.2,
                  conclude: '110분은 60분과 50분, 1시간 50분이에요.' },
              ],
            },
            {
              id: 'a3', title: '활동 3. 분과 시간 바꾸어 쓰기', minutes: 9, tool: 'story',
              task: '말풍선의 빈칸에 알맞은 수 카드를 넣어요. 1시간 = 60분을 떠올려요.',
              teacher: '"100분은 60분과 몇 분일까요?" 수 카드를 넣은 뒤 소리 내어 문장을 읽게 한다. 1시간 5분을 15분이나 105분으로 바꾸는 학생에게 "1시간은 100분이 아니라 60분"이라고 짚는다.',
              levels: { easy: { mode: 'fill', live: true }, base: { mode: 'fill' }, challenge: { mode: 'fill' } },
              items: [
                { prompt: '빈칸에 알맞은 수를 넣어 보세요.', toolOptions: { cards: [
                  { id: '60', text: '60', why: '긴바늘이 한 바퀴 도는 동안 작은 눈금이 몇 칸인지 다시 떠올려요.' }, { id: '20', text: '20', why: '1시간만큼을 떼어 낸 뒤 남은 분을 다시 세어 봐요.' },
                  { id: '80', text: '80', why: '80분은 1시간보다 길어요. 1시간을 떼어 내면 남는 분은 80보다 작아요.' }, { id: '100', text: '100', why: '1시간은 100분이 아니에요. 시계 한 바퀴의 눈금 수를 떠올려요.' }],
                  slots: [{ id: 'b1', who: '민지', motif: 'sun', label: '1시간은 ___분이야.' }, { id: 'b2', who: '준호', motif: 'tree', label: '80분은 1시간 ___분이야.' }] }, target: { fill: { b1: '60', b2: '20' } }, difficulty: 0.1,
                  hints: ['1시간은 긴바늘이 한 바퀴 도는 동안이에요. 작은 눈금이 몇 칸인지 떠올려요.', '80분에서 1시간만큼을 먼저 떼어 내고 남은 분을 세어요.', '60분이 1시간이에요. 80분은 60분과 20분이에요.'] },
                { prompt: '시간을 분으로 바꾸어 빈칸에 넣어 보세요.', toolOptions: { cards: [
                  { id: '90', text: '90', why: '1시간을 분으로 바꾼 뒤 30분을 더했는지 다시 봐요.' }, { id: '130', text: '130', why: '1시간을 100분으로 센 것 같아요. 1시간은 시계 한 바퀴, 60분이에요.' },
                  { id: '120', text: '120', why: '1시간이 몇 번인지 세고, 그만큼 60분을 더했는지 다시 봐요.' }, { id: '200', text: '200', why: '1시간을 100분으로 센 것 같아요. 60분이 2번이면 몇 분일까요?' }],
                  slots: [{ id: 'b1', who: '민지', motif: 'flower', label: '1시간 30분은 ___분이야.' }, { id: 'b2', who: '준호', motif: 'leaf', label: '2시간은 ___분이야.' }] }, target: { fill: { b1: '90', b2: '120' } }, difficulty: 0.18,
                  hints: ['시간을 분으로 바꿀 때는 1시간마다 60분씩 세어요. 남은 분은 그대로 더해요.', '1시간을 100분으로 세지 않았나요? 시간 띠에서 60이 1시간이에요.', '1시간 30분은 60분과 30분이라 90분, 2시간은 60분이 2번이라 120분이에요.'],
                  conclude: '1시간 30분은 60분과 30분이라 90분, 2시간은 60분이 2번이라 120분이에요.' },
                { prompt: '빈칸에 알맞은 수를 넣어 보세요.', toolOptions: { cards: [
                  { id: '40', text: '40', why: '100분에서 1시간만큼 떼어 내고 남은 분을 다시 세어 봐요.' }, { id: '0', text: '0', why: '1시간을 100분으로 센 것 같아요. 1시간은 60분이에요.' },
                  { id: '65', text: '65', why: '1시간을 분으로 바꾼 뒤 5분을 더했는지 다시 봐요.' }, { id: '105', text: '105', why: '1시간을 100분으로 센 것 같아요. 1시간은 60분이에요.' }],
                  slots: [{ id: 'b1', who: '민지', motif: 'star', label: '100분은 1시간 ___분이야.' }, { id: 'b2', who: '준호', motif: 'cloud', label: '1시간 5분은 ___분이야.' }] }, target: { fill: { b1: '40', b2: '65' } }, difficulty: 0.25,
                  hints: ['1시간이 몇 분인지 먼저 떠올리고, 그만큼을 떼어 내거나 더해요. 1시간은 100분이 아니에요.', '100분에서 떼어 낼 1시간은 몇 분인지, 1시간 5분에서 1시간은 몇 분으로 바꾸는지 다시 봐요.', '100분은 60분과 40분이라 1시간 40분, 1시간 5분은 60분과 5분이라 65분이에요.'] },
                { prompt: '더 해 보기: 빈칸에 알맞은 수를 넣어 보세요. 1시간을 100분으로 세면 틀려요.', toolOptions: { cards: [
                  { id: '45', text: '45', why: '105분에서 1시간만큼 떼어 내고 남은 분을 다시 세어 봐요.' }, { id: '155', text: '155', why: '2시간을 분으로 바꾼 뒤 35분을 더했는지 다시 봐요.' },
                  { id: '5', text: '5', why: '1시간을 100분으로 센 것 같아요. 1시간은 60분이에요.' }, { id: '235', text: '235', why: '2시간을 200분으로 센 것 같아요. 60분이 2번이면 몇 분일까요?' }],
                  slots: [{ id: 'b1', who: '민지', motif: 'moon', label: '105분은 1시간 ___분이야.' }, { id: 'b2', who: '준호', motif: 'bird', label: '2시간 35분은 ___분이야.' }] }, target: { fill: { b1: '45', b2: '155' } }, extra: true, difficulty: 0.32,
                  hints: ['1시간마다 60분이에요. 분을 시간으로 바꿀 때는 60분씩 떼어 내고, 시간을 분으로 바꿀 때는 60분씩 더해요.', '105분에서 1시간을 떼어 내면 몇 분이 남는지, 2시간은 몇 분인지 하나씩 다시 세어 봐요.', '105분은 60분과 45분이라 1시간 45분, 2시간 35분은 120분과 35분이라 155분이에요.'] },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"80분을 8시간이라고 쓴 친구에게 무엇이라고 말해 줄까요?" 학생 말로 "60분이 1시간"을 넣어 고쳐 말하게 한다. 출구 1번을 틀린 학생은 시간 띠의 수가 분이라는 것을 아는지 다음 시간 전에 살핀다.',
          exitTicket: [
            { type: 'tool', tool: 'numberline', options: { mode: 'jump', min: 0, max: 120, step: 10, fixedFrom: 0 }, prompt: '1시간 30분을 시간 띠에 화살표로 나타내 보세요.', target: { from: 0, end: 90 }, difficulty: 0.15 },
            { type: 'choice', prompt: '70분은 몇 시간 몇 분인가요?', options: ['7시간', '1시간 10분', '1시간 70분'], answer: 1, difficulty: 0.15, explain: '70분은 60분과 10분이라 1시간 10분이에요.' },
            { type: 'short', prompt: '85분은 몇 시간 몇 분인지 쓰고, 어떻게 알았는지 쓰세요.' },
            { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
          ],
        },
      ],
      worksheet: {
        title: '시간 띠와 걸린 시간',
        items: [
          { type: 'figure', prompt: '화살표를 보고 걸린 시간을 두 가지로 쓰세요.', tool: 'numberline', wide: true, figures: [
            { options: { mode: 'jump', min: 0, max: 120, step: 10, fixedFrom: 0 }, state: { from: 0, hops: [60, 30] }, caption: '___분 = ___시간 ___분' }], answer: '90분 = 1시간 30분' },
          { type: 'figure', prompt: '1시간 20분을 시간 띠에 화살표로 그리세요.', tool: 'numberline', wide: true, figures: [
            { options: { mode: 'jump', min: 0, max: 120, step: 10 }, caption: '1시간 20분' }], answer: '0에서 80까지 화살표(60 + 20)' },
          { type: 'table', prompt: '빈칸을 채우세요.', columns: ['몇 분', '몇 시간 몇 분'], cells: [['75분', ''], ['', '1시간 45분'], ['120분', '']], answer: '1시간 15분, 105분, 2시간' },
          { type: 'choice', prompt: '100분과 같은 시간에 ○ 하세요.', options: ['10시간', '1시간 40분', '1시간 100분'], answer: '1시간 40분' },
        ],
        easy: {
          note: '시간 띠의 수는 분이에요. 60분까지가 1시간이고, 그 뒤에 남은 분을 세어요.',
          items: [
            { type: 'figure', prompt: '화살표를 보고 빈칸을 채우세요.', tool: 'numberline', wide: true, figures: [
              { options: { mode: 'jump', min: 0, max: 120, step: 10, fixedFrom: 0, labels: 'all' }, state: { from: 0, hops: [60, 10] }, caption: '___분 = 1시간 ___분' }], answer: '70분 = 1시간 10분' },
            { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '1시간 = ___분, 80분 = 1시간 ___분', answer: '60, 20' },
            { type: 'choice', prompt: '90분과 같은 시간에 ○ 하세요.', options: ['9시간', '1시간 30분'], answer: '1시간 30분' },
            { type: 'short', prompt: '1시간보다 오래 걸리는 일을 하나 쓰세요.' },
          ],
        },
      },
      differentiation: {
        easy: '시간 띠의 모든 눈금에 수가 있고 도착점에 수가 보여요. 수 카드는 맞는 빈칸에 넣으면 바로 초록 테두리가 생겨요.',
        base: '10분마다 수가 적힌 시간 띠로 화살표를 그리고 읽어요.',
        challenge: '시간 띠에 양 끝 수만 있어 칸을 세어야 하고, 읽기 띠는 5분 눈금까지 있어요. 1시간 50분을 화살표 두 개로만 나타내고, 105분·2시간 35분 바꾸기까지 해요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 80분을 "8시간"이나 "1시간 80분"으로 쓴다 → 60분을 1시간으로 바꾸고 남은 분만 쓴다. ② 1시간을 100분으로 계산한다(1시간 5분 → 105분) → 시간 띠의 60을 짚는다. ③ 시간 띠의 수(분)를 시각으로 읽는다 → "이 띠는 흐른 분을 세는 띠"라고 처음에 정한다.',
    },
    // ───────────────────────────── 7차시 (practice · representation) ─────────────────────────────
    {
      id: 'g2-math-2-04-07', schema: 'edu-lesson.v1',
      catalog: { unit: 'g2-수학-2학기-4', lesson: 7 },
      grade: 2, subject: '수학', unitTitle: '4. 시각과 시간',
      title: '시계를 돌려 끝난 시각 만들고 같은 시간끼리 잇기',
      objective: '시작 시각에서 걸린 시간만큼 긴바늘을 돌려 끝난 시각을 나타내고, 같은 시간을 "몇 분"과 "몇 시간 몇 분"으로 짝지을 수 있다.',
      standards: ['[2수03-08]'],
      minutes: 40,
      formats: ['chromebook', 'projector', 'print'],
      illustration: {
        prompt: 'Layered paper-cut illustration of a family car driving along a winding road over green hills toward a grandmother\'s house, with a paper clock floating in the sky, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.',
        scene: { viewBox: [480, 270], layers: [
          { motif: 'sun', x: 80, y: 60, s: 0.8 }, { motif: 'cloud', x: 300, y: 48 }, { motif: 'mountain', x: 240, y: 200 }, { motif: 'hills', y: 214 },
          { motif: 'house', x: 400, y: 220, color: 'peach' }, { motif: 'tree', x: 90, y: 220 },
          { motif: 'text', x: 240, y: 120, text: '언제 도착할까요?', size: 22 },
        ] },
      },
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '"할머니 댁까지 1시간 20분 걸려요. 2시 30분에 출발하면 몇 시 몇 분에 도착할까요?" 시연 단추로 2시 30분에서 3시 50분까지 바늘이 도는 모습을 보여 주며 "긴바늘이 한 바퀴 돌고, 4칸을 더 갔어요"라고 함께 센다. 지난 시간의 시간 띠와 견주어 "시계에서는 한 바퀴가 60분"이라고 잇는다.',
          student: '가족과 멀리 가 본 곳까지 얼마나 걸렸는지 말해 봐요.',
          demo: { tool: 'clock', options: { showMinuteNumbers: true, showDigital: true }, sequence: [{ h: 2, m: 30 }, { h: 3, m: 50 }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 걸린 시간만큼 긴바늘 돌리기', minutes: 13, tool: 'clock',
              task: '시작 시각에서 긴바늘을 걸린 시간만큼 돌려요. 60분이면 한 바퀴, 10분이면 숫자 2칸이에요.',
              teacher: '"40분 동안이면 긴바늘을 숫자 몇 칸 돌려야 할까요?" 10시 40분에서 40분 뒤를 만들 때 긴바늘이 12를 지나면 짧은바늘도 11을 지나간다는 것을 짚는다. 11시 20분을 10시 20분으로 만드는 학생에게 "긴바늘이 12를 지나면 시가 하나 커져요"라고 말해 준다.',
              levels: {
                easy: { minuteStep: 5, showMinuteNumbers: true },
                base: { minuteStep: 5 },
                challenge: { minuteStep: 1 },
              },
              items: [
                { prompt: '1시에 놀이를 시작해 50분 동안 놀았어요. 끝난 시각을 만들어 보세요.', state: { h: 1, m: 0 }, target: { h: 1, m: 50 }, difficulty: 0.08 },
                { prompt: '10시 40분에 시작한 미술 시간이 40분 동안 이어졌어요. 끝난 시각을 만들어 보세요.', state: { h: 10, m: 40 }, target: { h: 11, m: 20 }, difficulty: 0.2,
                  predict: { q: '끝날 때 짧은바늘은 11을 지났을까요?', options: ['지났어요', '아직이에요'], answer: 0 },
                  conclude: '긴바늘이 12를 지나면 시가 하나 커져요. 그래서 끝난 시각은 11시를 지나요.',
                  levels: { challenge: { prompt: '10시 40분에 시작한 미술 시간이 45분 동안 이어졌어요. 끝난 시각을 만들어 보세요.', target: { h: 11, m: 25 } } } },
                { prompt: '2시 30분에 출발해 1시간 20분 걸려 도착했어요. 도착한 시각을 만들어 보세요.', state: { h: 2, m: 30 }, target: { h: 3, m: 50 }, difficulty: 0.2 },
                { prompt: '더 해 보기: 8시 50분에 출발해 80분 뒤에 도착했어요. 도착 시각을 만들어 보세요.', state: { h: 8, m: 50 }, target: { h: 10, m: 10 }, extra: true, difficulty: 0.3,
                  conclude: '80분은 1시간 20분이에요. 9시 50분에서 20분 더 가면 10시 10분이에요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 같은 시간끼리 잇기', minutes: 13, tool: 'mindmap',
              task: '가지에 적힌 시간과 같은 시간 카드를 이어요. 남는 카드도 있어요.',
              teacher: '"125분에서 60분을 두 번 떼어 내면 몇 분이 남아요?" 남는 카드(1시간 25분, 1시간 45분)는 1시간을 100분으로 셌을 때 나오는 답이라는 것을 짝에게 말하게 한다. 4시간을 400분으로 생각하는 학생에게 60분짜리 화살표를 네 번 그리게 한다. 칠판에 "60, 120, 180, 240"을 적어 두고 몇 시간인지 셀 때 쓰게 한다.',
              levels: {
                easy: { mode: 'match', topic: '같은 시간', live: true },
                base: { mode: 'match', topic: '같은 시간' },
                challenge: { mode: 'match', topic: '같은 시간' },
              },
              items: [
                { prompt: '가지에 적힌 시간과 같은 카드를 이어 보세요.', toolOptions: { slots: [{ id: 's125', label: '125분' }, { id: 's1h55', label: '1시간 55분' }, { id: 's2h20', label: '2시간 20분' }], cards: [{ id: 'c1', text: '2시간 5분' }, { id: 'c2', text: '115분' }, { id: 'c3', text: '140분' }, { id: 'cx', text: '1시간 25분', why: '1시간을 100분으로 센 답이에요. 125분에서 60분씩 떼어 내 봐요.' }] }, target: { match: { s125: 'c1', s1h55: 'c2', s2h20: 'c3' } }, difficulty: 0.15,
                  hints: ['분을 시간으로 바꿀 때는 60분씩 떼어 내고, 시간을 분으로 바꿀 때는 1시간마다 60분씩 더해요.', '1시간을 100분으로 세지 않았나요? 떼어 낸 60분이 몇 번인지, 남은 분이 몇 분인지 다시 세어요.', '125분은 120분과 5분이라 2시간 5분, 1시간 55분은 60분과 55분이라 115분, 2시간 20분은 140분이에요.'] },
                { prompt: '같은 시간끼리 이어 보세요.', toolOptions: { slots: [{ id: 's145', label: '145분' }, { id: 's3h10', label: '3시간 10분' }, { id: 's2h50', label: '2시간 50분' }], cards: [{ id: 'd1', text: '2시간 25분' }, { id: 'd2', text: '190분' }, { id: 'd3', text: '170분' }, { id: 'dx', text: '1시간 45분', why: '1시간을 100분으로 센 답이에요. 145분에는 60분이 몇 번 들어갈까요?' }] }, target: { match: { s145: 'd1', s3h10: 'd2', s2h50: 'd3' } }, difficulty: 0.22,
                  hints: ['"60, 120, 180"처럼 60씩 뛰어 센 수를 먼저 적어 두고, 가지의 시간이 그 사이 어디인지 찾아요.', '145분은 120분보다 많고 180분보다 적어요. 몇 시간과 몇 분으로 나뉠지 다시 생각해요.', '145분은 120분과 25분이라 2시간 25분, 3시간 10분은 180분과 10분이라 190분, 2시간 50분은 170분이에요.'],
                  conclude: '145분은 60분이 2번(120분)과 25분이라 2시간 25분이에요.' },
                { prompt: '긴 시간도 바꾸어 이어 보세요.', toolOptions: { slots: [{ id: 's4h', label: '4시간' }, { id: 's210', label: '210분' }], cards: [{ id: 'e1', text: '240분' }, { id: 'e2', text: '3시간 30분' }, { id: 'ex', text: '400분', why: '1시간을 100분으로 센 답이에요. 60분이 4번이면 몇 분일까요?' }] }, target: { match: { s4h: 'e1', s210: 'e2' } }, difficulty: 0.28,
                  hints: ['1시간은 60분이에요. 몇 시간인지 셀 때는 60씩 뛰어 세어요.', '4시간을 분으로 바꿀 때 60을 네 번 더했는지 다시 봐요. 210분에는 60분이 몇 번 들어가는지 세어요.', '4시간은 60분이 4번이라 240분이에요. 210분은 180분과 30분이라 3시간 30분이에요.'],
                  conclude: '4시간은 60분이 4번이라 240분이에요. 210분은 180분과 30분이라 3시간 30분이에요.' },
                { prompt: '더 해 보기: 같은 시간끼리 이어 보세요. 남는 카드가 두 장이에요.', toolOptions: { slots: [{ id: 's200', label: '200분' }, { id: 's2h55', label: '2시간 55분' }, { id: 's3h45', label: '3시간 45분' }], cards: [{ id: 'f1', text: '3시간 20분' }, { id: 'f2', text: '175분' }, { id: 'f3', text: '225분' }, { id: 'fx', text: '2시간', why: '1시간을 100분으로 센 답이에요. 200분에는 60분이 몇 번 들어갈까요?' }, { id: 'fy', text: '345분', why: '3시간을 300분으로 센 답이에요. 3시간은 180분이에요.' }] }, target: { match: { s200: 'f1', s2h55: 'f2', s3h45: 'f3' } }, extra: true, difficulty: 0.34,
                  hints: ['60씩 뛰어 센 수(60, 120, 180, 240)를 적어 두고, 가지의 시간과 가장 가까운 수부터 찾아요.', '200분은 180분보다 얼마나 많을까요? 3시간 45분은 180분에 몇 분을 더하나요?', '200분은 180분과 20분이라 3시간 20분, 2시간 55분은 175분, 3시간 45분은 225분이에요.'] },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"3시 40분에 시작해서 50분 동안 했어요. 끝난 시각을 만들 때 긴바늘은 어디를 지나가요?" 12를 지나면 시가 하나 커지는 것을 다시 말하게 한다. 출구 1번에서 3시 30분을 만든 학생은 12를 지나며 시를 올리지 않은 것이다.',
          exitTicket: [
            { type: 'tool', tool: 'clock', options: { minuteStep: 5 }, state: { h: 3, m: 40 }, prompt: '3시 40분에 시작해 50분 동안 했어요. 끝난 시각을 만들어 보세요.', target: { h: 4, m: 30 }, difficulty: 0.2 },
            { type: 'choice', prompt: '1시간 35분은 몇 분인가요?', options: ['135분', '95분', '75분'], answer: 1, difficulty: 0.18, explain: '1시간은 60분이에요. 60분과 35분을 더하면 95분이에요.' },
            { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
          ],
        },
      ],
      worksheet: {
        title: '끝난 시각과 같은 시간',
        items: [
          { type: 'figure', prompt: '시작한 시각을 보고, 걸린 시간만큼 지난 끝난 시각을 쓰세요.', tool: 'clock', figures: [
            { state: { h: 4, m: 10 }, caption: '30분 뒤 → ___시 ___분' }, { state: { h: 9, m: 45 }, caption: '20분 뒤 → ___시 ___분' }, { state: { h: 1, m: 20 }, caption: '1시간 10분 뒤 → ___시 ___분' }], answer: '4시 40분, 10시 5분, 2시 30분' },
          { type: 'figure', prompt: '6시 50분에서 40분 뒤 시각을 시계에 그리세요.', tool: 'clock', figures: [
            { options: { hideHands: true }, caption: '___시 ___분' }], answer: '7시 30분(긴바늘 6, 짧은바늘 7과 8 가운데)' },
          { type: 'table', prompt: '같은 시간이 되게 빈칸을 채우세요.', columns: ['몇 분', '몇 시간 몇 분'], cells: [['165분', ''], ['', '2시간 40분'], ['180분', '']], answer: '2시간 45분, 160분, 3시간' },
          { type: 'choice', prompt: '150분과 같은 시간에 ○ 하세요.', options: ['1시간 50분', '2시간 30분', '15시간'], answer: '2시간 30분' },
        ],
        easy: {
          note: '긴바늘이 숫자 한 칸을 가면 5분, 한 바퀴를 돌면 60분이에요. 12를 지나면 시가 하나 커져요.',
          items: [
            { type: 'figure', prompt: '걸린 시간만큼 지난 시각을 쓰세요.', tool: 'clock', options: { showMinuteNumbers: true }, figures: [
              { state: { h: 4, m: 10 }, caption: '30분 뒤 → ___시 ___분' }, { state: { h: 2, m: 0 }, caption: '1시간 뒤 → ___시' }], answer: '4시 40분, 3시' },
            { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '135분 = 2시간 ___분, 3시간 = ___분', answer: '15, 180' },
            { type: 'choice', prompt: '2시간 10분과 같은 시간에 ○ 하세요.', options: ['130분', '210분'], answer: '130분' },
            { type: 'short', prompt: '30분 동안 할 수 있는 일을 하나 쓰세요.' },
          ],
        },
      },
      differentiation: {
        easy: '시계 바깥에 5분 숫자가 보여 긴바늘을 돌린 만큼 셀 수 있어요. 맞게 이은 카드는 바로 초록 테두리가 생겨요.',
        base: '긴바늘이 5분씩 움직이고, 같은 시간 카드를 스스로 찾아요.',
        challenge: '긴바늘이 1분씩 움직이고, 45분 동안처럼 작은 눈금까지 돌려야 하는 문항이 나와요. 200분·3시간 45분처럼 3시간이 넘는 시간 짝짓기도 더 해요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 긴바늘이 12를 지날 때 시를 올리지 않는다(10시 40분 + 40분 → 10시 20분) → 12를 지나면 짧은바늘도 다음 숫자를 지난다. ② 1시간을 100분으로 생각해 125분을 "1시간 25분"처럼 바꾼다 → 60, 120, 180… 60씩 뛰어 센 수를 적어 두고 쓴다. ③ 4시간을 400분으로 바꾼다 → 60분이 4번. 6차시의 시간 띠와 오늘의 시계를 나란히 보여 "한 바퀴 = 60칸 = 60분"을 잇는다.',
    },
    // ───────────────────────────── 8차시 (core · application) ─────────────────────────────
    {
      id: 'g2-math-2-04-08', schema: 'edu-lesson.v1',
      catalog: { unit: 'g2-수학-2학기-4', lesson: 8 },
      grade: 2, subject: '수학', unitTitle: '4. 시각과 시간',
      title: '시작과 끝 시각으로 걸린 시간 구하기',
      objective: '시작한 시각과 끝난 시각을 비교하여 걸린 시간을 구하고, 걸린 시간으로 시작한 시각을 거꾸로 찾을 수 있다.',
      standards: ['[2수03-08]'],
      minutes: 40,
      formats: ['chromebook', 'projector', 'print'],
      illustration: {
        prompt: 'Layered paper-cut illustration of a small outdoor swimming pool and a performance stage in a town festival, with two paper clocks showing a start time and an end time hanging on a string of flags, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.',
        scene: { viewBox: [480, 270], layers: [
          { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 120, y: 50 }, { motif: 'hills', y: 206 }, { motif: 'wave', y: 230 },
          { motif: 'house', x: 110, y: 212, color: 'lavender' }, { motif: 'tree', x: 380, y: 212 },
          { motif: 'text', x: 240, y: 132, text: '얼마나 걸렸을까요?', size: 22 },
        ] },
      },
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '"버스가 9시 40분에 출발해서 10시 20분에 도착했어요. 숫자끼리 빼면 10 빼기 9는 1, 20 빼기 40은…?" 학생들이 막히는 것을 함께 본다. 시연 단추로 시간 띠에 10시까지 20분, 10시부터 20분을 화살표로 그려 "시각을 바로 빼지 않고, 정각까지 먼저 가 보면 쉬워요"라고 짚는다.',
          student: '시작한 시각과 끝난 시각을 알면 걸린 시간을 어떻게 알 수 있을까요?',
          demo: { tool: 'numberline', options: { mode: 'jump', min: 0, max: 120, step: 10, fixedFrom: 0, showValue: true }, sequence: [{ from: 0, size: 20, count: 2 }] },
        },
        {
          id: 'main', title: '전개', minutes: 27,
          activities: [
            {
              id: 'a1', title: '활동 1. 시간 띠로 걸린 시간 세기', minutes: 14, tool: 'numberline',
              task: '시간 띠의 0을 시작 시각으로 생각해요. 정각까지 먼저 뛰고, 남은 만큼 더 뛰어 끝난 시각까지 가요.',
              teacher: '"2시 50분에서 3시까지는 몇 분이에요? 그다음 3시에서 4시 10분까지는요?" 숫자끼리 빼다가 분이 모자라 막히는 학생에게 정각을 징검다리로 쓰게 한다. 화살표를 다 그린 뒤 "모두 몇 분, 몇 시간 몇 분"을 두 가지로 말하게 한다.',
              levels: {
                easy: { mode: 'jump', min: 0, max: 120, step: 10, fixedFrom: 0, showValue: true },
                base: { mode: 'jump', min: 0, max: 120, step: 10, fixedFrom: 0 },
                challenge: { mode: 'jump', min: 0, max: 120, step: 10, fixedFrom: 0, labels: 'ends' },
              },
              items: [
                { prompt: '수영을 2시 10분에 시작해 3시 30분에 끝냈어요. 걸린 시간만큼 화살표를 그려 보세요.', target: { from: 0, end: 80 }, difficulty: 0.12,
                  conclude: '2시 10분에서 3시 10분까지 1시간, 20분 더 가서 1시간 20분이에요.' },
                { prompt: '버스가 9시 40분에 출발해 10시 20분에 도착했어요. 걸린 시간만큼 화살표를 그려 보세요.', target: { from: 0, end: 40 }, difficulty: 0.2,
                  predict: { q: '걸린 시간은 얼마일까요?', options: ['1시간 20분', '40분', '20분'], answer: 1 },
                  conclude: '10시까지 20분, 10시부터 20분 — 모두 40분이에요.' },
                { prompt: '공연이 1시 50분에 시작해 3시 10분에 끝났어요. 걸린 시간만큼 화살표를 그려 보세요.', target: { from: 0, end: 80 }, difficulty: 0.25,
                  conclude: '2시까지 10분, 2시에서 3시까지 60분, 3시부터 10분 — 모두 80분, 1시간 20분이에요.' },
                { prompt: '더 해 보기: 독서 캠프가 10시 30분에 시작해 12시 15분에 끝났어요. 화살표로 나타내 보세요.', toolOptions: { sub: 2 }, target: { from: 0, end: 105 }, extra: true, difficulty: 0.3,
                  conclude: '11시 30분까지 60분, 12시까지 30분, 12시 15분까지 15분 — 모두 105분, 1시간 45분이에요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 시작한 시각 거꾸로 찾기', minutes: 13, tool: 'clock',
              task: '끝난 시각에서 걸린 시간만큼 긴바늘을 거꾸로 돌려 시작한 시각을 만들어요.',
              teacher: '"끝난 시각에서 시작한 시각으로 가려면 바늘을 어느 쪽으로 돌려야 할까요?" 바늘을 앞으로 돌려 더 늦은 시각을 만드는 학생이 있다 — "시작은 끝보다 먼저예요"라고 짚는다. 긴바늘이 12를 거꾸로 지나면 시가 하나 작아진다.',
              levels: {
                easy: { minuteStep: 5, showMinuteNumbers: true },
                base: { minuteStep: 5 },
                challenge: { minuteStep: 1 },
              },
              items: [
                { prompt: '축구를 1시간 동안 하고 5시 10분에 끝냈어요. 시작한 시각을 만들어 보세요.', state: { h: 5, m: 10 }, target: { h: 4, m: 10 }, difficulty: 0.12,
                  levels: { challenge: { prompt: '축구를 1시간 동안 하고 4시 23분에 끝냈어요. 시작한 시각을 만들어 보세요.', state: { h: 4, m: 23 }, target: { h: 3, m: 23 } } } },
                { prompt: '점심시간 40분이 1시에 끝났어요. 점심시간이 시작한 시각을 만들어 보세요.', state: { h: 1, m: 0 }, target: { h: 12, m: 20 }, difficulty: 0.2,
                  predict: { q: '긴바늘을 어느 쪽으로 돌려야 할까요?', options: ['시계 방향(앞으로)', '거꾸로(뒤로)'], answer: 1 },
                  conclude: '1시에서 40분 거꾸로 가면 12시 20분이에요. 12를 거꾸로 지나면 시가 하나 작아져요.' },
                { prompt: '영화가 1시간 30분 동안 하고 4시 20분에 끝났어요. 영화가 시작한 시각을 만들어 보세요.', state: { h: 4, m: 20 }, target: { h: 2, m: 50 }, difficulty: 0.28,
                  conclude: '4시 20분에서 1시간 거꾸로 가면 3시 20분, 30분 더 거꾸로 가면 2시 50분이에요.' },
                { prompt: '더 해 보기: 그림 그리기를 45분 동안 하고 2시 10분에 끝냈어요. 시작한 시각을 만들어 보세요.', state: { h: 2, m: 10 }, target: { h: 1, m: 25 }, extra: true, difficulty: 0.3,
                  conclude: '2시 10분에서 10분 거꾸로 가면 2시, 35분 더 거꾸로 가면 1시 25분이에요.' },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 7,
          teacher: '"3시 50분에 시작해서 5시 10분에 끝났어요. 어떻게 세면 쉬울까요?" 정각을 징검다리로 쓰는 방법을 학생 말로 정리한다. 출구 1번에서 "2시간 40분"을 고른 학생은 숫자끼리 빼려다 막힌 것이니 시간 띠로 다시 세어 보게 한다.',
          exitTicket: [
            { type: 'choice', prompt: '3시 50분에 시작해 5시 10분에 끝났어요. 걸린 시간은 얼마인가요?', options: ['2시간 40분', '1시간 20분', '2시간 20분'], answer: 1, difficulty: 0.25, explain: '4시까지 10분, 5시까지 60분, 5시 10분까지 10분 — 모두 80분, 1시간 20분이에요.' },
            { type: 'tool', tool: 'numberline', options: { mode: 'jump', min: 0, max: 120, step: 10, fixedFrom: 0 }, prompt: '6시 30분부터 7시 20분까지 걸린 시간만큼 화살표를 그려 보세요.', target: { from: 0, end: 50 }, difficulty: 0.2 },
            { type: 'short', prompt: '2시 40분부터 4시까지 걸린 시간을 어떻게 세었는지 쓰세요.' },
            { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
          ],
        },
      ],
      worksheet: {
        title: '걸린 시간 구하기',
        items: [
          { type: 'figure', prompt: '두 시계를 보고 걸린 시간을 쓰세요.', tool: 'clock', figures: [
            { state: { h: 8, m: 50 }, caption: '시작' }, { state: { h: 9, m: 30 }, caption: '끝 → 걸린 시간 ___분' }], answer: '40분' },
          { type: 'figure', prompt: '시간 띠에 걸린 시간만큼 화살표를 그리고 빈칸을 채우세요. (11시 20분 → 12시 50분)', tool: 'numberline', wide: true, figures: [
            { options: { mode: 'jump', min: 0, max: 120, step: 10 }, caption: '___분 = ___시간 ___분' }], answer: '90분 = 1시간 30분' },
          { type: 'table', prompt: '걸린 시간을 쓰세요.', columns: ['한 일', '시작', '끝', '걸린 시간'], cells: [['숙제', '4시 20분', '5시', ''], ['산책', '6시 40분', '7시 50분', ''], ['그림 그리기', '1시 30분', '3시', '']], answer: '40분, 1시간 10분, 1시간 30분' },
          { type: 'blank', prompt: '빈칸에 알맞은 시각을 쓰세요.', text: '30분 동안 청소를 하고 11시 10분에 끝냈어요. 청소를 시작한 시각은 ___시 ___분이에요.', answer: '10시 40분' },
          { type: 'short', prompt: '내가 오늘 한 일 하나의 시작 시각과 끝난 시각을 쓰고, 걸린 시간을 구하세요.' },
        ],
        easy: {
          note: '정각(긴바늘이 12)까지 먼저 세고, 남은 분을 더해요.',
          items: [
            { type: 'figure', prompt: '두 시계를 보고 걸린 시간을 쓰세요.', tool: 'clock', options: { showMinuteNumbers: true }, figures: [
              { state: { h: 3, m: 0 }, caption: '시작' }, { state: { h: 3, m: 40 }, caption: '끝 → ___분' }], answer: '40분' },
            { type: 'table', prompt: '걸린 시간을 쓰세요.', columns: ['시작', '끝', '걸린 시간'], cells: [['2시', '3시', ''], ['4시 30분', '5시', '']], answer: '1시간, 30분' },
            { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '9시 50분에서 10시까지는 ___분이에요.', answer: '10' },
            { type: 'short', prompt: '내가 잠을 잔 시각과 일어난 시각을 쓰세요.' },
          ],
        },
      },
      differentiation: {
        easy: '시간 띠의 도착점에 수가 보이고, 시계 바깥에 5분 숫자가 있어 거꾸로 셀 때 도움이 돼요.',
        base: '10분마다 수가 적힌 시간 띠로 걸린 시간을 세고, 5분씩 움직이는 시계로 시작 시각을 찾아요.',
        challenge: '시간 띠에 양 끝 수만 있고, 1시간 45분처럼 5분 눈금까지 세는 문항이 나와요. 시계는 1분씩 움직여 4시 23분처럼 작은 눈금이 있는 끝난 시각에서 거꾸로 세어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 시각의 숫자끼리만 빼려다가 분이 모자라면(10시 20분 − 9시 40분) 구하지 못하거나 "1시간 20분"이라고 쓴다 → 정각을 징검다리로 센다. ② 걸린 시간 "80분"을 "1시간 80분"으로 쓴다. ③ 시작 시각을 찾을 때 바늘을 앞으로 돌린다 → 시작은 끝보다 먼저. ④ 12시를 거꾸로 지날 때 시를 줄이지 않는다(1시 − 40분 → 1시 20분).',
    },
    // ───────────────────────────── 9차시 (core · concept, 하루·주일) ─────────────────────────────
    {
      id: 'g2-math-2-04-09', schema: 'edu-lesson.v1',
      catalog: { unit: 'g2-수학-2학기-4', lesson: 9 },
      grade: 2, subject: '수학', unitTitle: '4. 시각과 시간',
      title: '오전과 오후로 하루 나누고 1주일 날수 세기',
      objective: '하루는 24시간이고 오전과 오후로 나뉨을 알고, 달력의 칸을 세어 1주일이 7일임을 말하며 1일·1주일·1개월의 길이를 비교할 수 있다.',
      standards: ['[2수03-09]'],
      minutes: 40,
      formats: ['chromebook', 'projector', 'print'],
      illustration: {
        prompt: 'Layered paper-cut illustration of a paper wall calendar with seven columns hanging beside a window showing the sun on one side and the moon on the other, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.',
        scene: { viewBox: [480, 270], layers: [
          { motif: 'sun', x: 90, y: 64, s: 0.9 }, { motif: 'moon', x: 400, y: 64, s: 0.8 }, { motif: 'star', x: 340, y: 40, s: 0.5 }, { motif: 'hills', y: 208 },
          { motif: 'house', x: 240, y: 216 }, { motif: 'tree', x: 110, y: 218 }, { motif: 'tree', x: 380, y: 218, color: 'mint' },
          { motif: 'text', x: 240, y: 136, text: '오전과 오후', size: 22 },
        ] },
      },
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '"아침 9시에 1교시를 해요. 밤 9시에는 무엇을 할까요? 둘 다 9시인데 어떻게 구별할까요?" 시연 단추로 6시에서 12시까지 바늘이 도는 모습을 보여 주며 "짧은바늘은 하루에 두 바퀴 돌아요. 밤 12시부터 낮 12시까지가 오전, 낮 12시부터 밤 12시까지가 오후예요"라고 말한다. 짧은바늘 한 바퀴가 12시간이니 하루는 몇 시간인지 묻는다.',
          student: '오늘 아침 9시와 오늘 밤 9시에 나는 무엇을 하는지 말해 봐요.',
          demo: { tool: 'clock', options: { showDigital: true }, sequence: [{ h: 6, m: 0 }, { h: 12, m: 0 }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 오전에 하는 일, 오후에 하는 일', minutes: 9, tool: 'timeline',
              task: '밤 12시부터 낮 12시까지는 오전, 낮 12시부터 밤 12시까지는 오후예요. 카드를 알맞은 칸에 넣어요.',
              teacher: '"9시에 1교시, 9시 30분에 잠자요. 둘 다 오전일까요?" 같은 숫자라도 낮인지 밤인지 생각하게 한다. 마지막 문항의 "밤 1시"를 오후에 넣는 학생이 많다 — 밤 12시가 지나면 새 하루의 오전이 시작된다고 짚는다.',
              levels: {
                easy: { mode: 'sort', axis: ['밤 12시', '밤 12시'], live: true },
                base: { mode: 'sort', axis: ['밤 12시', '밤 12시'] },
                challenge: { mode: 'sort', axis: ['밤 12시', '밤 12시'] },
              },
              items: [
                { prompt: '하는 일을 오전과 오후로 나누어 보세요.', toolOptions: { slots: [{ id: 'am', label: '오전', sub: '밤 12시~낮 12시' }, { id: 'pm', label: '오후', sub: '낮 12시~밤 12시' }], cards: [
                  { id: 'a', text: '일어나요', sub: '7시', motif: 'sun' }, { id: 'b', text: '1교시', sub: '9시', motif: 'tree' }, { id: 'c', text: '저녁 먹어요', sub: '6시', motif: 'house' }, { id: 'd', text: '잠자요', sub: '9시 30분', motif: 'moon' }] },
                  target: { sort: { am: ['a', 'b'], pm: ['c', 'd'] } }, difficulty: 0.1,
                  hints: ['그 일을 낮에 하는지 밤에 하는지, 아침인지 저녁인지 먼저 떠올려요. 낮 12시가 오전과 오후를 가르는 때예요.', '같은 숫자 시각이라도 아침에 하는 일과 저녁에 하는 일은 다른 칸이에요. 1교시와 잠자기를 견주어 봐요.', '아침 7시에 일어나고 9시에 1교시를 하니 오전, 저녁 6시와 밤 9시 30분은 오후예요.'] },
                { prompt: '하는 일을 오전과 오후로 나누어 보세요. 낮 12시가 지났나요?', toolOptions: { slots: [{ id: 'am', label: '오전', sub: '밤 12시~낮 12시' }, { id: 'pm', label: '오후', sub: '낮 12시~밤 12시' }], cards: [
                  { id: 'e', text: '점심 먹어요', sub: '12시 20분', motif: 'house' }, { id: 'f', text: '아침 먹어요', sub: '7시 40분', motif: 'sun' }, { id: 'g', text: '집에 와요', sub: '2시 30분', motif: 'tree' }, { id: 'h', text: '학교 가요', sub: '8시 20분', motif: 'flower' }, { id: 'i', text: '공원 가요', sub: '4시', motif: 'leaf' }] },
                  target: { sort: { am: ['f', 'h'], pm: ['e', 'g', 'i'] } }, difficulty: 0.18,
                  hints: ['낮 12시를 지났는지 먼저 따져요. 점심을 먹은 뒤의 일은 모두 낮 12시가 지난 뒤예요.', '12시 20분은 낮 12시를 지났을까요? 2시 30분, 4시가 새벽인지 낮인지도 생각해요.', '아침 먹기(7시 40분)와 학교 가기(8시 20분)는 오전, 점심(12시 20분)·집에 오기·공원은 오후예요.'] },
                { prompt: '밤과 새벽에 있는 일도 나누어 보세요.', toolOptions: { slots: [{ id: 'am', label: '오전', sub: '밤 12시~낮 12시' }, { id: 'pm', label: '오후', sub: '낮 12시~밤 12시' }], cards: [
                  { id: 'j', text: '깊이 잠들어요', sub: '밤 1시', motif: 'moon' }, { id: 'k', text: '간식 먹어요', sub: '3시', motif: 'flower' }, { id: 'l', text: '해가 떠요', sub: '6시', motif: 'sun' }, { id: 'm', text: '밤 기차가 와요', sub: '11시', motif: 'star' }] },
                  target: { sort: { am: ['j', 'l'], pm: ['k', 'm'] } }, difficulty: 0.28,
                  hints: ['밤 12시가 지나면 새 하루가 시작돼요. 그 일이 밤 12시 전인지 뒤인지 생각해요.', '깊이 잠든 밤과 해가 뜨는 새벽은 밤 12시가 지난 뒤예요. 간식과 밤 기차는 낮 12시 뒤일까요?', '밤 1시와 새벽 6시는 오전, 낮 3시 간식과 밤 11시 기차는 오후예요.'],
                  predict: { q: '밤 1시는 오전일까요, 오후일까요?', options: ['오전', '오후'], answer: 0 },
                  conclude: '밤 12시가 지나면 새 하루가 시작돼요. 그래서 밤 1시는 오전이에요.' },
                { prompt: '더 해 보기: 낮 12시와 밤 12시 가까이의 일도 나누어 보세요.', toolOptions: { slots: [{ id: 'am', label: '오전', sub: '밤 12시~낮 12시' }, { id: 'pm', label: '오후', sub: '낮 12시~밤 12시' }], cards: [
                  { id: 'n', text: '4교시 끝나요', sub: '11시 50분', motif: 'tree' }, { id: 'o', text: '점심 먹어요', sub: '12시 10분', motif: 'house' }, { id: 'q', text: '새벽 신문이 와요', sub: '5시', motif: 'bird' }, { id: 'r', text: '별을 봐요', sub: '밤 10시', motif: 'star' }, { id: 't', text: '새해 불꽃을 봐요', sub: '밤 12시 10분', motif: 'moon' }] },
                  target: { sort: { am: ['n', 'q', 't'], pm: ['o', 'r'] } }, extra: true, difficulty: 0.34,
                  hints: ['낮 12시와 밤 12시, 두 때를 기준으로 그 일이 어느 쪽에 있는지 생각해요.', '낮 12시 조금 전과 조금 뒤는 다른 칸이에요. 밤 12시를 막 지난 일은 새 하루의 일이에요.', '11시 50분 4교시·새벽 5시·밤 12시 10분은 오전, 12시 10분 점심과 밤 10시는 오후예요.'] },
              ],
            },
            {
              id: 'a2', title: '활동 2. 달력 한 줄은 1주일', minutes: 9, tool: 'multiply',
              task: '달력의 한 줄은 일요일부터 토요일까지 7칸이에요. 배열판에 7칸씩 줄을 만들어 며칠인지 세어요.',
              teacher: '교실 달력을 가리키며 "일, 월, 화, 수, 목, 금, 토 — 몇 칸이에요?" 함께 센다. "2주일은 달력의 몇 줄일까요?" 2주일을 9일(7+2)로 말하는 학생에게 "2주일은 7일이 2번"이라고 줄 두 개를 짚게 한다.',
              levels: {
                easy: { mode: 'array', maxRows: 5, maxCols: 7, shape: 'square', color: 'sky', showCounts: true, showTotal: true },
                base: { mode: 'array', maxRows: 5, maxCols: 7, shape: 'square', color: 'sky', showCounts: true },
                challenge: { mode: 'array', maxRows: 5, maxCols: 7, shape: 'square', color: 'sky', showCounts: false },
              },
              items: [
                { prompt: '1주일은 달력의 한 줄이에요. 7칸 한 줄을 만들어 보세요.', state: { rows: 1, cols: 1 }, target: { rows: 1, cols: 7 }, difficulty: 0.05 },
                { prompt: '2주일은 며칠일까요? 7칸씩 2줄을 만들어 보세요.', state: { rows: 1, cols: 1 }, target: { rows: 2, cols: 7 }, difficulty: 0.12,
                  predict: { q: '2주일은 며칠일까요?', options: ['9일', '14일', '27일'], answer: 1 },
                  conclude: '2주일은 7일이 2번이라 14일이에요.' },
                { prompt: '3주일을 배열판에 만들고 모두 며칠인지 쓰세요.', state: { rows: 1, cols: 1 }, target: { rows: 3, cols: 7, total: true }, difficulty: 0.2,
                  conclude: '3주일은 7일씩 3줄, 21일이에요.' },
                { prompt: '더 해 보기: 4주일을 만들고 모두 며칠인지 쓰세요.', state: { rows: 1, cols: 1 }, target: { rows: 4, cols: 7, total: true }, extra: true, difficulty: 0.25 },
              ],
            },
            {
              id: 'a3', title: '활동 3. 짧은 시간부터 긴 시간까지', minutes: 8, tool: 'timeline',
              task: '시간의 길이를 생각해 짧은 것부터 차례대로 띠에 놓아요.',
              teacher: '"1주일과 1개월 가운데 무엇이 더 길까요? 달력의 어디를 보면 알 수 있어요?" 한 줄(1주일)과 한 장(1개월)을 견주게 한다. 숫자가 같은 1이라 길이도 같다고 생각하는 학생에게 카드 아래 작은 글(24시간, 7일)을 읽게 한다.',
              levels: {
                easy: { mode: 'order', axis: ['짧아요', '길어요'], live: true },
                base: { mode: 'order', axis: ['짧아요', '길어요'] },
                challenge: { mode: 'order', axis: ['짧아요', '길어요'] },
              },
              items: [
                { prompt: '짧은 시간부터 차례대로 놓아 보세요.', toolOptions: { cards: [{ id: 't1', text: '1시간', sub: '60분' }, { id: 't2', text: '1일', sub: '24시간' }, { id: 't3', text: '1주일', sub: '7일' }] }, target: { order: ['t1', 't2', 't3'] }, difficulty: 0.08,
                  hints: ['카드 아래 작은 글을 읽고, 그 안에 다른 카드가 몇 번 들어가는지 생각해요.', '1일 안에 1시간이 24번 들어가요. 어느 쪽이 더 길까요?', '1시간 → 1일(24시간) → 1주일(7일) 순서예요.'] },
                { prompt: '짧은 시간부터 차례대로 놓아 보세요.', toolOptions: { cards: [{ id: 'u1', text: '1분' }, { id: 'u2', text: '1일' }, { id: 'u3', text: '1개월' }, { id: 'u4', text: '1주일' }] }, target: { order: ['u1', 'u2', 'u4', 'u3'] }, difficulty: 0.18,
                  hints: ['교실 달력을 떠올려요. 칸 하나, 줄 하나, 한 장이 각각 어떤 시간인지 생각해요.', '1주일은 달력 한 줄, 1개월은 달력 한 장이에요. 한 장 안에 줄이 여러 개 있어요.', '1분 → 1일 → 1주일 → 1개월 순서예요. 1개월은 달력 한 장이라 1주일보다 길어요.'],
                  predict: { q: '1주일과 1개월 가운데 더 긴 것은?', options: ['1주일', '1개월'], answer: 1 },
                  conclude: '1개월은 달력 한 장, 1주일은 달력 한 줄이라서 1개월이 더 길어요.' },
                { prompt: '짧은 시간부터 차례대로 놓아 보세요.', toolOptions: { cards: [{ id: 'v1', text: '1년' }, { id: 'v2', text: '1시간' }, { id: 'v3', text: '1주일' }, { id: 'v4', text: '1분' }, { id: 'v5', text: '1개월' }] }, target: { order: ['v4', 'v2', 'v3', 'v5', 'v1'] }, difficulty: 0.25,
                  hints: ['가장 짧은 것과 가장 긴 것을 먼저 찾아 양 끝에 놓고, 나머지를 그 사이에 놓아요.', '시계로 재는 시간(분·시간)과 달력으로 재는 시간(주일·개월·년)을 먼저 나누어 봐요.', '1분 → 1시간 → 1주일 → 1개월 → 1년 순서예요. 1년은 12개월이에요.'] },
                { prompt: '더 해 보기: 짧은 시간부터 차례대로 놓아 보세요. 숫자가 큰 것이 꼭 긴 것은 아니에요.', toolOptions: { cards: [{ id: 'w1', text: '30분' }, { id: 'w2', text: '1시간' }, { id: 'w3', text: '100분' }, { id: 'w4', text: '1일' }, { id: 'w5', text: '2주일' }] }, target: { order: ['w1', 'w2', 'w3', 'w4', 'w5'] }, extra: true, difficulty: 0.32,
                  hints: ['단위가 다르면 같은 단위로 바꾸어 견주어요. 분과 시간이 섞이면 1시간을 분으로 바꾸어 봐요.', '1시간은 몇 분이었지요? 100분과 1시간 가운데 어느 쪽이 더 긴지 다시 견주어요.', '30분 → 1시간(60분) → 100분 → 1일 → 2주일 순서예요.'],
                  conclude: '1시간은 60분이라 100분보다 짧아요. 단위가 다르면 같은 단위로 바꾸어 견주어요.' },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"하루는 몇 시간이에요? 짧은바늘이 몇 바퀴 돌아요?" 오전 12시간과 오후 12시간을 손가락으로 나누어 보이게 한다. 출구 2번을 틀린 학생에게는 교실 달력에서 한 줄을 다시 세게 한다.',
          exitTicket: [
            { type: 'choice', prompt: '하루는 몇 시간인가요?', options: ['12시간', '24시간', '60시간'], answer: 1, difficulty: 0.15, explain: '오전 12시간과 오후 12시간을 더하면 24시간이에요.' },
            { type: 'choice', prompt: '1주일은 며칠인가요?', options: ['5일', '7일', '10일'], answer: 1, difficulty: 0.08, explain: '달력의 한 줄은 일요일부터 토요일까지 7칸이에요.' },
            { type: 'choice', prompt: '밤 9시는 오전일까요, 오후일까요?', options: ['오전', '오후'], answer: 1, difficulty: 0.15, explain: '낮 12시부터 밤 12시까지가 오후예요.' },
            { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
          ],
        },
      ],
      worksheet: {
        title: '하루와 1주일',
        items: [
          { type: 'table', prompt: '하는 일의 시각에 "오전"이나 "오후"를 쓰세요.', columns: ['하는 일', '시각', '오전/오후'], cells: [['일어나기', '7시', ''], ['점심 먹기', '12시 30분', ''], ['잠자기', '9시', '']], answer: '오전, 오후, 오후' },
          { type: 'figure', prompt: '배열을 보고 며칠인지 쓰세요. (한 줄이 1주일이에요)', tool: 'multiply', figures: [
            { options: { mode: 'array', lock: true, showCounts: false, shape: 'square', maxRows: 4, maxCols: 7 }, state: { rows: 2, cols: 7 }, caption: '___주일 = ___일' },
            { options: { mode: 'array', lock: true, showCounts: false, shape: 'square', maxRows: 4, maxCols: 7 }, state: { rows: 3, cols: 7 }, caption: '___주일 = ___일' }], answer: '2주일 = 14일, 3주일 = 21일' },
          { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '하루는 ___시간이에요. 오전은 ___시간, 오후는 ___시간이에요.', answer: '24, 12, 12' },
          { type: 'choice', prompt: '가장 긴 시간에 ○ 하세요.', options: ['1주일', '1일', '1개월', '1시간'], answer: '1개월' },
          { type: 'short', prompt: '이번 주 일요일부터 토요일까지 내가 할 일을 하나씩 떠올려 1주일 계획을 쓰세요.' },
        ],
        easy: {
          note: '밤 12시부터 낮 12시까지는 오전, 낮 12시부터 밤 12시까지는 오후예요. 달력 한 줄은 7일이에요.',
          items: [
            { type: 'table', prompt: '오전이나 오후를 쓰세요.', columns: ['하는 일', '오전/오후'], cells: [['아침 먹기', ''], ['저녁 먹기', '']], answer: '오전, 오후' },
            { type: 'figure', prompt: '칸을 세어 며칠인지 쓰세요.', tool: 'multiply', figures: [
              { options: { mode: 'array', lock: true, showCounts: true, shape: 'square', maxRows: 3, maxCols: 7 }, state: { rows: 2, cols: 7 }, caption: '2주일 = ___일' }], answer: '14일' },
            { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '1주일은 ___일이에요.', answer: '7' },
            { type: 'choice', prompt: '더 긴 시간에 ○ 하세요.', options: ['1일', '1주일'], answer: '1주일' },
          ],
        },
      },
      differentiation: {
        easy: '알맞은 칸에 놓은 카드는 바로 초록 테두리가 생기고, 배열판에 몇 줄·몇 칸·모두 몇 칸이 보여요.',
        base: '배열판에 몇 줄·몇 칸만 보이고, 모두 며칠인지는 스스로 세어요.',
        challenge: '배열판에 줄·칸 수가 보이지 않고, 4주일 만들기, 낮 12시·밤 12시 가까운 일 나누기, 100분과 1시간처럼 단위가 섞인 시간 줄 세우기까지 해요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 밤 1시·새벽 시각을 오후로 넣는다 → 밤 12시에 새 하루(오전)가 시작된다. ② 하루를 12시간으로 안다(시계 한 바퀴) → 짧은바늘은 하루에 두 바퀴. ③ 2주일을 9일(7+2)로 계산한다 → 7일이 2번. ④ 1일·1주일·1개월이 모두 "1"이라 같은 길이로 여긴다 → 달력의 칸·줄·장으로 견준다.',
    },
    // ───────────────────────────── 10차시 (core · representation, 달력) ─────────────────────────────
    {
      id: 'g2-math-2-04-10', schema: 'edu-lesson.v1',
      catalog: { unit: 'g2-수학-2학기-4', lesson: 10 },
      grade: 2, subject: '수학', unitTitle: '4. 시각과 시간',
      title: '달마다 날수를 정리하고 달력에 기간 나타내기',
      objective: '달마다 날수가 다름을 표로 정리하고, 달력에 표시한 기간이 며칠이며 몇 주일인지 바르게 나타낼 수 있다.',
      standards: ['[2수03-09]'],
      minutes: 40,
      formats: ['chromebook', 'projector', 'print'],
      illustration: {
        prompt: 'Layered paper-cut illustration of twelve small paper calendar pages hanging on a string like flags across a classroom, some pages with colored blocks marking a school event, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.',
        scene: { viewBox: [480, 270], layers: [
          { motif: 'sun', x: 410, y: 56, s: 0.7 }, { motif: 'cloud', x: 110, y: 50 }, { motif: 'hills', y: 210 },
          { motif: 'leaf', x: 140, y: 196, color: 'peach' }, { motif: 'snow', x: 340, y: 196 }, { motif: 'flower', x: 240, y: 226 },
          { motif: 'text', x: 240, y: 132, text: '이 달은 며칠까지?', size: 22 },
        ] },
      },
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '"이번 달 달력의 마지막 날은 며칠이에요? 지난달도 그랬을까요?" 교실 달력 두 장을 나란히 보여 준다. 주먹을 쥐고 손가락 뼈마디(튀어나온 곳 = 31일, 들어간 곳 = 30일, 2월만 28일이나 29일)로 1월부터 세는 방법을 함께 해 본다. 모든 달을 30일이라고 말하는 학생이 있으면 7월과 8월이 둘 다 31일인 것을 짚는다.',
          student: '내 생일이 있는 달은 며칠까지 있는지 달력에서 찾아봐요.',
          demo: { tool: 'multiply', options: { mode: 'array', showCounts: true, showTotal: true, shape: 'square', color: 'sky', maxRows: 5, maxCols: 7 }, sequence: [{ rows: 1, cols: 7 }, { rows: 2, cols: 7 }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 달마다 날수 나누기', minutes: 9, tool: 'mindmap',
              task: '주먹 뼈마디로 세거나 달력을 보고, 달을 날수가 같은 가지에 넣어요.',
              teacher: '"7월과 8월은 뼈마디로 세면 어떻게 돼요?" 한 주먹이 끝나면 다시 처음 마디에서 시작해 8월도 31일이라는 것을 보여 준다. 2월을 30일 가지에 넣는 학생에게 "2월은 가장 짧은 달"이라고 짚는다.',
              levels: {
                easy: { topic: '달마다 날수', live: true },
                base: { topic: '달마다 날수' },
                challenge: { topic: '달마다 날수' },
              },
              items: [
                { prompt: '1월부터 6월까지 날수가 같은 가지에 넣어 보세요.', toolOptions: { mode: 'sort', slots: [{ id: 'd31', label: '31일' }, { id: 'd30', label: '30일' }, { id: 'd28', label: '28일 또는 29일' }], cards: [
                  { id: 'm1', text: '1월' }, { id: 'm2', text: '2월' }, { id: 'm3', text: '3월' }, { id: 'm4', text: '4월' }, { id: 'm5', text: '5월' }, { id: 'm6', text: '6월' }] },
                  target: { sort: { d31: ['m1', 'm3', 'm5'], d30: ['m4', 'm6'], d28: ['m2'] } }, difficulty: 0.15,
                  hints: ['주먹을 쥐고 첫 뼈마디부터 1월, 들어간 곳 2월… 하고 세어요. 튀어나온 곳은 31일, 들어간 곳은 30일이에요.', '2월은 들어간 곳이지만 30일보다 짧아요. 튀어나온 곳과 들어간 곳을 다시 짚으며 세어 봐요.', '1월·3월·5월은 31일, 4월·6월은 30일, 2월은 28일 또는 29일이에요.'] },
                { prompt: '7월부터 12월까지 날수가 같은 가지에 넣어 보세요.', toolOptions: { mode: 'sort', slots: [{ id: 'd31', label: '31일' }, { id: 'd30', label: '30일' }], cards: [
                  { id: 'm7', text: '7월' }, { id: 'm8', text: '8월' }, { id: 'm9', text: '9월' }, { id: 'm10', text: '10월' }, { id: 'm11', text: '11월' }, { id: 'm12', text: '12월' }] },
                  target: { sort: { d31: ['m7', 'm8', 'm10', 'm12'], d30: ['m9', 'm11'] } }, difficulty: 0.22,
                  hints: ['주먹 뼈마디로 1월부터 세어요. 한 주먹 끝(마지막 뼈마디)까지 가면 다음 달은 다시 첫 뼈마디에서 세어요.', '한 주먹 끝의 달과 다시 첫 뼈마디에서 센 달은 둘 다 튀어나온 곳이에요. 그 두 달을 다시 봐요.', '7월은 주먹 끝, 8월은 다시 첫 뼈마디라 둘 다 31일이에요. 9월·11월은 30일, 10월·12월은 31일이에요.'],
                  predict: { q: '7월과 8월은 날수가 같을까요?', options: ['같아요', '달라요'], answer: 0 },
                  conclude: '7월과 8월은 둘 다 31일이에요. 한 해 안에서 이어진 두 달이 모두 31일인 것은 7월과 8월뿐이에요.' },
                { prompt: '31일까지 있는 달만 골라 보세요.', toolOptions: { mode: 'pick', basket: '31일인 달', cards: [{ id: 'q2', text: '2월' }, { id: 'q7', text: '7월' }, { id: 'q8', text: '8월' }, { id: 'q9', text: '9월' }, { id: 'q11', text: '11월' }, { id: 'q12', text: '12월' }] }, target: { pick: ['q7', 'q8', 'q12'] }, difficulty: 0.22,
                  hints: ['카드마다 주먹 뼈마디로 세어 튀어나온 곳인지 확인하고, 튀어나온 곳의 달만 골라요.', '고른 달 가운데 들어간 곳의 달이 있는지, 빠뜨린 튀어나온 곳의 달이 없는지 다시 세어 봐요.', '7월·8월·12월이 31일이에요. 2월은 28일, 9월·11월은 30일이에요.'] },
                { prompt: '더 해 보기: 열두 달 가운데 31일까지 있는 달을 모두 골라 보세요.', toolOptions: { mode: 'pick', basket: '31일인 달', cards: [{ id: 'y1', text: '1월' }, { id: 'y2', text: '2월' }, { id: 'y3', text: '3월' }, { id: 'y4', text: '4월' }, { id: 'y5', text: '5월' }, { id: 'y6', text: '6월' }, { id: 'y7', text: '7월' }, { id: 'y8', text: '8월' }, { id: 'y9', text: '9월' }, { id: 'y10', text: '10월' }, { id: 'y11', text: '11월' }, { id: 'y12', text: '12월' }] }, target: { pick: ['y1', 'y3', 'y5', 'y7', 'y8', 'y10', 'y12'] }, extra: true, difficulty: 0.3,
                  hints: ['주먹 뼈마디로 1월부터 12월까지 차례대로 세며, 튀어나온 곳에 오는 달을 골라요.', '한 주먹이 끝난 뒤 다시 첫 뼈마디에서 세는 달을 빠뜨리지 않았는지 봐요.', '1월·3월·5월·7월·8월·10월·12월, 모두 일곱 달이 31일이에요.'],
                  conclude: '열두 달 가운데 31일인 달은 일곱 달이에요. 나머지는 30일이고 2월만 28일이나 29일이에요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 칠한 기간은 며칠일까', minutes: 9, tool: 'mindmap',
              task: '달력에 칠한 기간이 며칠인지 칸을 세어 알맞은 카드를 이어요. 첫날도 칠한 칸이에요.',
              teacher: '칠판 달력에 3월 2일부터 8일까지 색칠하고 "칸이 몇 개예요?" 함께 센다. 8에서 2를 빼 6일이라고 하는 학생이 많다 — 칠한 칸 수와 날수가 같아야 한다고 짚고, 첫날 칸을 손가락으로 가리키게 한다. 달이 바뀌는 문항은 7월이 31일까지인 것을 먼저 떠올리게 한다.',
              levels: {
                easy: { mode: 'match', topic: '칠한 기간', live: true },
                base: { mode: 'match', topic: '칠한 기간' },
                challenge: { mode: 'match', topic: '칠한 기간' },
              },
              items: [
                { prompt: '칠한 기간과 날수를 이어 보세요.', toolOptions: { slots: [{ id: 'p1', label: '3월 2일~3월 8일' }, { id: 'p2', label: '5월 1일~5월 14일' }], cards: [{ id: 'g7', text: '7일(1주일)' }, { id: 'g14', text: '14일(2주일)' }, { id: 'g6', text: '6일' }, { id: 'g13', text: '13일' }] }, target: { match: { p1: 'g7', p2: 'g14' } }, difficulty: 0.15,
                  hints: ['달력에서 첫날부터 끝날까지 한 칸씩 손가락으로 짚으며 세어요. 첫날 칸도 칠한 칸이에요.', '끝 날짜에서 첫 날짜를 빼기만 했나요? 그러면 첫날 칸이 빠져요. 하나를 더해야 하는지 생각해요.', '2일부터 8일까지는 7칸이라 7일, 1일부터 14일까지는 14칸이라 14일이에요.'],
                  predict: { q: '3월 2일부터 8일까지 칠하면 몇 칸일까요?', options: ['6칸', '7칸'], answer: 1 },
                  conclude: '2일부터 8일까지 칠하면 7칸, 7일이에요. 빼기만 하면 첫날이 빠져요.' },
                { prompt: '칠한 기간과 날수를 이어 보세요.', toolOptions: { slots: [{ id: 'p3', label: '10월 3일~10월 5일' }, { id: 'p4', label: '12월 20일~12월 31일' }], cards: [{ id: 'h3', text: '3일' }, { id: 'h2', text: '2일' }, { id: 'h12', text: '12일' }, { id: 'h11', text: '11일' }] }, target: { match: { p3: 'h3', p4: 'h12' } }, difficulty: 0.2,
                  hints: ['칠한 칸 수가 날수예요. 첫날과 끝날을 둘 다 넣어 세어요.', '빼기로 구한 수는 칠한 칸보다 하나 적어요. 남는 카드 가운데 하루 모자란 카드가 있어요.', '3일부터 5일까지는 3, 4, 5로 3일, 20일부터 31일까지는 12일이에요.'] },
                { prompt: '달이 바뀌는 기간이에요. 알맞은 날수를 이어 보세요.', toolOptions: { slots: [{ id: 'p5', label: '7월 25일~8월 7일' }], cards: [{ id: 'k14', text: '14일(2주일)' }, { id: 'k13', text: '13일' }, { id: 'k18', text: '18일' }] }, target: { match: { p5: 'k14' } }, difficulty: 0.3,
                  hints: ['달이 바뀌면 앞 달의 마지막 날까지 먼저 세고, 다음 달 1일부터 다시 세어 더해요.', '앞 달이 며칠까지 있는지 주먹 뼈마디로 확인했나요? 30일까지로 세면 하루가 모자라요.', '7월은 31일까지 있어요. 25일부터 31일까지 7일, 8월 1일부터 7일까지 7일, 모두 14일이에요.'],
                  conclude: '7월 25일부터 31일까지 7일, 8월 1일부터 7일까지 7일 — 모두 14일이에요.' },
                { prompt: '더 해 보기: 두 기간 모두 달이 바뀌어요. 알맞은 날수를 이어 보세요.', toolOptions: { slots: [{ id: 'p6', label: '8월 28일~9월 3일' }, { id: 'p7', label: '6월 25일~7월 8일' }], cards: [{ id: 'm7d', text: '7일(1주일)' }, { id: 'm14d', text: '14일(2주일)' }, { id: 'm6d', text: '6일' }, { id: 'm15d', text: '15일' }] }, target: { match: { p6: 'm7d', p7: 'm14d' } }, extra: true, difficulty: 0.35,
                  hints: ['앞 달이 며칠까지 있는지 먼저 정하고, 앞 달의 남은 날과 다음 달의 날을 따로 세어 더해요.', '8월과 6월은 각각 며칠까지 있나요? 두 달의 마지막 날이 다르면 남은 날수도 달라요.', '8월은 31일까지라 28일~31일 4일과 9월 3일 — 7일, 6월은 30일까지라 25일~30일 6일과 7월 8일 — 14일이에요.'] },
              ],
            },
            {
              id: 'a3', title: '활동 3. 시간 단위 정리표 만들기', minutes: 8, tool: 'story',
              task: '말풍선의 빈칸에 알맞은 수 카드를 넣어 시간 단위 사이의 관계를 정리해요.',
              teacher: '칠판에 "1분 → 1시간 → 1일 → 1주일 → 1개월 → 1년" 화살표 표를 그려 두고, 학생이 넣은 수를 화살표 위에 적는다. 1년을 365라고 말하는 학생이 있으면 "날수로 세면 365일쯤이고, 달로 세면 12개월"이라고 두 가지를 구별해 준다.',
              levels: { easy: { mode: 'fill', live: true }, base: { mode: 'fill' }, challenge: { mode: 'fill' } },
              items: [
                { prompt: '빈칸에 알맞은 수를 넣어 보세요.', toolOptions: { cards: [
                  { id: '7', text: '7', why: '달력 한 줄의 칸 수와 한 해의 달 수를 다시 떠올려요.' }, { id: '12', text: '12', why: '달력 한 줄의 칸 수와 한 해의 달 수를 다시 떠올려요.' }, { id: '10', text: '10', why: '1주일은 일요일부터 토요일까지예요. 요일을 세어 봐요.' }, { id: '30', text: '30', why: '30은 한 달의 날수에 가까워요. 빈칸 앞의 단위를 다시 읽어요.' }], slots: [{ id: 'b1', who: '민지', motif: 'sun', label: '1주일은 ___일이야.' }, { id: 'b2', who: '준호', motif: 'snow', label: '1년은 ___개월이야.' }] }, target: { fill: { b1: '7', b2: '12' } }, difficulty: 0.1,
                  hints: ['교실 달력을 떠올려요. 한 줄에 칸이 몇 개인지, 한 해에 달력이 몇 장인지 생각해요.', '1주일은 달력 한 줄, 1년은 1월부터 12월까지예요. 두 빈칸에 넣은 수를 바꿔 넣지 않았는지 봐요.', '1주일은 일요일부터 토요일까지 7일, 1년은 12개월이에요.'] },
                { prompt: '빈칸에 알맞은 수를 넣어 보세요.', toolOptions: { cards: [
                  { id: '24', text: '24', why: '하루와 2주일 가운데 어느 문장에 맞는 수인지 다시 읽어요.' }, { id: '14', text: '14', why: '하루와 2주일 가운데 어느 문장에 맞는 수인지 다시 읽어요.' }, { id: '12', text: '12', why: '12시간은 오전이나 오후 한쪽만이에요. 하루는 둘을 합쳐요.' }, { id: '9', text: '9', why: '2주일은 7일과 2일이 아니라 7일이 2번이에요.' }], slots: [{ id: 'b1', who: '민지', motif: 'moon', label: '하루는 ___시간이야.' }, { id: 'b2', who: '준호', motif: 'leaf', label: '2주일은 ___일이야.' }] }, target: { fill: { b1: '24', b2: '14' } }, difficulty: 0.18,
                  hints: ['하루는 오전과 오후를 합친 것이에요. 2주일은 1주일이 몇 번인지 생각해요.', '오전도 12시간, 오후도 12시간이에요. 2주일은 7일을 두 번 더해요.', '하루는 12시간과 12시간이라 24시간, 2주일은 7일이 2번이라 14일이에요.'] },
                { prompt: '빈칸에 알맞은 수를 넣어 보세요.', toolOptions: { cards: [
                  { id: '21', text: '21', why: '3주일과 2년 가운데 어느 문장에 맞는 수인지 다시 읽어요.' }, { id: '24', text: '24', why: '3주일과 2년 가운데 어느 문장에 맞는 수인지 다시 읽어요.' }, { id: '10', text: '10', why: '3주일은 7과 3을 더한 것이 아니라 7일이 3번이에요.' }, { id: '14', text: '14', why: '14는 7이 2번이에요. 주일 수와 개월 수를 다시 세어요.' }], slots: [{ id: 'b1', who: '민지', motif: 'flower', label: '3주일은 ___일이야.' }, { id: 'b2', who: '준호', motif: 'star', label: '2년은 ___개월이야.' }] }, target: { fill: { b1: '21', b2: '24' } }, difficulty: 0.25,
                  hints: ['몇 주일은 7일씩, 몇 년은 12개월씩 뛰어 세어요.', '3주일은 7을 세 번, 2년은 12를 두 번 더해요. 넣은 수가 맞는지 다시 더해 봐요.', '3주일은 7일이 3번이라 21일, 2년은 12개월이 2번이라 24개월이에요.'],
                  conclude: '3주일은 7일이 3번이라 21일, 2년은 12개월이 2번이라 24개월이에요.' },
                { prompt: '더 해 보기: 빈칸에 알맞은 수를 넣어 보세요.', toolOptions: { cards: [
                  { id: '28', text: '28', why: '1주일이 7일이에요. 7을 네 번 더했는지 다시 봐요.' }, { id: '36', text: '36', why: '1년이 12개월이에요. 12를 세 번 더했는지 다시 봐요.' },
                  { id: '11', text: '11', why: '4주일은 1주일이 4번이에요. 7과 4를 더하기만 한 것은 아닌지 봐요.' }, { id: '15', text: '15', why: '3년은 1년이 3번이에요. 12와 3을 더하기만 한 것은 아닌지 봐요.' }],
                  slots: [{ id: 'b1', who: '민지', motif: 'sun', label: '4주일은 ___일이야.' }, { id: 'b2', who: '준호', motif: 'tree', label: '3년은 ___개월이야.' }] }, target: { fill: { b1: '28', b2: '36' } }, extra: true, difficulty: 0.32,
                  hints: ['몇 주일은 7일씩, 몇 년은 12개월씩 그 수만큼 뛰어 세어요. 단위의 수와 그냥 더하지 않아요.', '4주일은 7일이 몇 번인지, 3년은 12개월이 몇 번인지 다시 세어요.', '4주일은 7, 14, 21, 28로 28일, 3년은 12, 24, 36으로 36개월이에요.'] },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"4월 10일부터 16일까지 칠했어요. 16 빼기 10은 6인데, 왜 7일일까요?" 칸을 손가락으로 짚으며 세게 한다. 출구 1번을 틀린 학생은 주먹 뼈마디 세기를 다음 시간 시작에 한 번 더 한다.',
          exitTicket: [
            { type: 'choice', prompt: '6월은 며칠까지 있나요?', options: ['30일', '31일', '28일'], answer: 0, difficulty: 0.18, explain: '6월은 30일까지 있어요. 주먹 뼈마디로 세면 들어간 곳이에요.' },
            { type: 'choice', prompt: '4월 10일부터 4월 16일까지는 며칠인가요?', options: ['6일', '7일', '8일'], answer: 1, difficulty: 0.2, explain: '10, 11, 12, 13, 14, 15, 16 — 칠하면 7칸, 7일이에요.' },
            { type: 'short', prompt: '내 생일이 있는 달은 며칠까지 있는지 쓰세요.' },
            { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
          ],
        },
      ],
      worksheet: {
        title: '달마다 날수와 기간',
        items: [
          { type: 'table', prompt: '달마다 날수를 쓰세요.', columns: ['달', '1월', '2월', '3월', '4월', '5월', '6월'], cells: [['날수', '31일', '', '', '', '', '']], answer: '28일(29일), 31일, 30일, 31일, 30일' },
          { type: 'table', prompt: '달마다 날수를 쓰세요.', columns: ['달', '7월', '8월', '9월', '10월', '11월', '12월'], cells: [['날수', '', '', '', '', '', '']], answer: '31일, 31일, 30일, 31일, 30일, 31일' },
          { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '9월 5일부터 9월 18일까지 달력에 칠하면 ___칸이고, ___일 = ___주일이에요.', answer: '14, 14, 2' },
          { type: 'choice', prompt: '2월 26일부터 3월 4일까지(2월은 28일까지)는 며칠인가요?', options: ['6일', '7일', '8일'], answer: '7일' },
          { type: 'draw', prompt: '이번 달 달력을 그리고, 우리 반 행사 기간을 색칠한 뒤 며칠인지 쓰세요.' },
        ],
        easy: {
          note: '주먹 뼈마디의 튀어나온 곳은 31일, 들어간 곳은 30일, 2월은 28일이나 29일이에요. 기간은 칠한 칸을 하나씩 세어요.',
          items: [
            { type: 'table', prompt: '달마다 날수를 쓰세요.', columns: ['달', '1월', '2월', '3월', '4월'], cells: [['날수', '31일', '', '', '']], answer: '28일(29일), 31일, 30일' },
            { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '5월 1일부터 5월 7일까지 칠하면 ___칸, ___일이에요.', answer: '7, 7' },
            { type: 'choice', prompt: '31일까지 있는 달에 ○ 하세요.', options: ['7월', '9월'], answer: '7월' },
            { type: 'short', prompt: '내 생일은 몇 월인지 쓰고, 그 달이 며칠까지 있는지 쓰세요.' },
          ],
        },
      },
      differentiation: {
        easy: '알맞게 놓은 카드는 바로 초록 테두리가 생겨요. 주먹 뼈마디 세기를 짝과 함께 하며 날수를 찾아요.',
        base: '날수를 스스로 떠올려 나누고, 기간의 칸을 세어 날수를 찾아요.',
        challenge: '더 해 보기로 열두 달 가운데 31일인 달을 모두 고르고, 8월→9월·6월→7월처럼 달이 바뀌는 두 기간의 날수, 4주일·3년을 날수·개월 수로 바꾸기까지 해요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 모든 달을 30일로 여긴다 → 주먹 뼈마디, 7·8월이 모두 31일. ② 기간의 날수를 끝 날짜 − 첫 날짜로 구해 하루가 모자란다(2일~8일 → 6일) → 칠한 칸 수와 날수가 같아야 한다. ③ 달이 바뀌는 기간에서 앞 달의 마지막 날을 30일로 센다. ④ 1년을 "365"로만 기억해 개월 수와 섞는다 → 1년 = 12개월.',
    },
    // ───────────────────────────── 11차시 (wrap · application) ─────────────────────────────
    {
      id: 'g2-math-2-04-11', schema: 'edu-lesson.v1',
      catalog: { unit: 'g2-수학-2학기-4', lesson: 11 },
      grade: 2, subject: '수학', unitTitle: '4. 시각과 시간',
      title: '달력에서 며칠 뒤 찾고 알맞은 시간 단위로 계획 세우기',
      objective: '달력에서 며칠 뒤·몇 주일 뒤 날짜를 찾고, 생활 계획에 알맞은 시간 단위를 골라 쓰며, 단원에서 배운 시각과 시간을 스스로 점검할 수 있다.',
      standards: ['[2수03-07]', '[2수03-08]', '[2수03-09]'],
      minutes: 40,
      formats: ['chromebook', 'projector', 'print'],
      illustration: {
        prompt: 'Layered paper-cut illustration of a child planning a summer vacation at a desk with a paper calendar, a round clock and a small notebook, with a sunny window and a garden outside, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.',
        scene: { viewBox: [480, 270], layers: [
          { motif: 'sun', x: 404, y: 58, s: 0.9 }, { motif: 'cloud', x: 120, y: 52 }, { motif: 'hills', y: 208 },
          { motif: 'house', x: 120, y: 216 }, { motif: 'flower', x: 300, y: 228 }, { motif: 'flower', x: 340, y: 230, color: 'rose' }, { motif: 'tree', x: 400, y: 218 },
          { motif: 'text', x: 240, y: 136, text: '2주일 뒤는 며칠?', size: 22 },
        ] },
      },
      stages: [
        {
          id: 'intro', title: '도입', minutes: 5,
          teacher: '"오늘이 5일이고 현장 체험 학습은 2주일 뒤예요. 며칠일까요?" 달력에서 5일을 짚고 손가락으로 한 줄 아래(7일 뒤)로 두 번 내려간다. 오늘(5일)을 첫째 날로 세어 18일이라고 하는 학생이 있으면 "오늘은 세지 않고, 내일부터 하루"라고 짚는다. 시연 단추로 수직선 달력에서 5일부터 7일씩 두 번 뛰는 모습을 보여 준다.',
          student: '앞으로 2주일 동안 하고 싶은 일을 떠올려 봐요.',
          demo: { tool: 'numberline', options: { mode: 'jump', min: 1, max: 31, step: 7, sub: 7, fixedFrom: 5, hopSize: 7, showValue: true }, sequence: [{ from: 5, size: 7, count: 2 }] },
        },
        {
          id: 'main', title: '전개', minutes: 27,
          activities: [
            {
              id: 'a1', title: '활동 1. 달력 줄에서 며칠 뒤 찾기', minutes: 10, tool: 'numberline',
              task: '이 줄은 한 달의 날짜예요. 큰 눈금 사이가 7일(1주일)이에요. 출발한 날은 세지 않고 뛰어 세어요.',
              teacher: '"1주일 뒤는 달력에서 바로 아래 칸이에요. 수직선에서는 7칸 뛰기예요." 화살표는 처음에 1칸씩 뛰어요. "한 칸씩 열네 번 뛸 수도 있지만, 뛰는 크기를 7로 바꾸면 1주일을 한 번에 뛸 수 있어요"라고 크기 단추를 보여 준다. 10일 뒤처럼 7일씩으로 딱 떨어지지 않는 문항은 7일과 3일로 나누어 뛰어도 된다. 다 뛴 뒤 "도착한 날이 며칠이에요?"라고 꼭 날짜로 말하게 한다. 도착한 날에서 하루가 어긋난 학생에게는 출발한 날을 1로 셌는지 묻는다.',
              levels: {
                easy: { mode: 'jump', min: 1, max: 31, step: 7, sub: 7, showValue: true },
                base: { mode: 'jump', min: 1, max: 31, step: 7, sub: 7 },
                challenge: { mode: 'jump', min: 1, max: 31, step: 7, sub: 7, labels: 'ends' },
              },
              items: [
                { prompt: '오늘은 5일이에요. 2주일 뒤 날짜까지 뛰어 보세요.', toolOptions: { fixedFrom: 5 }, target: { from: 5, end: 19 }, difficulty: 0.12,
                  hints: ['1주일은 달력 한 줄, 7일이에요. 오늘은 세지 않고 내일부터 하루로 세어요.', '2주일은 7일이 2번이에요. 뛰는 크기를 1주일로 바꾸면 세기 쉬워요. 출발한 날을 하루로 세지 않았는지 봐요.', '5일에서 7일 뛰면 12일, 7일 더 뛰면 19일이에요.'],
                  predict: { q: '5일에서 2주일 뒤는 며칠일까요?', options: ['18일', '19일', '12일'], answer: 1 },
                  conclude: '5일에서 7일씩 2번 뛰면 19일이에요. 오늘은 세지 않아요.' },
                { prompt: '3일에서 3주일 뒤 날짜까지 뛰어 보세요.', toolOptions: { fixedFrom: 3 }, target: { from: 3, end: 24 }, difficulty: 0.18,
                  hints: ['몇 주일 뒤는 1주일(7일)씩 그 수만큼 뛰어요. 출발한 날은 세지 않아요.', '3주일은 7일이 3번이에요. 화살표가 몇 개인지, 하나마다 7칸인지 다시 봐요.', '3일에서 7일씩 세 번 뛰면 10일, 17일, 24일이에요.'] },
                { prompt: '12일에 강낭콩을 심었어요. 10일 뒤에 싹이 났어요. 싹이 난 날까지 뛰어 보세요.', toolOptions: { fixedFrom: 12 }, target: { from: 12, end: 22 }, difficulty: 0.22,
                  conclude: '12일에서 10일 뒤는 22일이에요. 7일 뛰고 3일 더 뛰어도 돼요.' },
                { prompt: '더 해 보기: 생일이 27일이에요. 생일 4일 전에 초대장을 보내요. 그날까지 거꾸로 뛰어 보세요.', toolOptions: { fixedFrom: 27 }, target: { from: 27, end: 23 }, extra: true, difficulty: 0.25 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 알맞은 시간 단위 고르기', minutes: 9, tool: 'mindmap',
              task: '그 일이 얼마나 걸리는지 생각해 알맞은 시간 단위 가지에 넣어요.',
              teacher: '"라면이 익는 데 3시간 걸릴까요, 3분 걸릴까요?" 단위를 바꾸어 말해 보며 어색한 말을 웃으며 찾게 한다. 마지막 문항은 바르게 쓴 계획만 고른다 — "양치를 3시간"처럼 단위가 어색한 문장을 고른 학생에게 직접 해 보면 얼마나 걸리는지 묻는다.',
              levels: {
                easy: { topic: '얼마나 걸릴까', live: true },
                base: { topic: '얼마나 걸릴까' },
                challenge: { topic: '얼마나 걸릴까' },
              },
              items: [
                { prompt: '걸리는 시간에 알맞은 단위 가지에 넣어 보세요.', toolOptions: { mode: 'sort', slots: [{ id: 'mi', label: '분' }, { id: 'hr', label: '시간' }], cards: [
                  { id: 'r1', text: '라면이 익는 동안' }, { id: 'r2', text: '양치질하는 동안' }, { id: 'r3', text: '밤에 자는 동안' }, { id: 'r4', text: '학교에 있는 동안' }] },
                  target: { sort: { mi: ['r1', 'r2'], hr: ['r3', 'r4'] } }, difficulty: 0.1,
                  hints: ['그 일을 직접 할 때 시계의 긴바늘이 조금 움직이는지, 짧은바늘까지 여러 칸 움직이는지 떠올려요.', '"3분 동안", "3시간 동안"을 카드 뒤에 차례로 붙여 읽어 보고 어색한 쪽을 찾아요.', '라면이 익는 동안과 양치질하는 동안은 몇 분, 밤에 자는 동안과 학교에 있는 동안은 몇 시간이에요.'] },
                { prompt: '더 긴 시간이에요. 알맞은 단위 가지에 넣어 보세요.', toolOptions: { mode: 'sort', slots: [{ id: 'dy', label: '일' }, { id: 'mo', label: '개월' }, { id: 'yr', label: '년' }], cards: [
                  { id: 's1', text: '주말 가족 여행' }, { id: 's2', text: '1학기 동안' }, { id: 's3', text: '초등학교에 다니는 동안' }, { id: 's4', text: '사계절이 한 번 지나는 동안' }] },
                  target: { sort: { dy: ['s1'], mo: ['s2'], yr: ['s3', 's4'] } }, difficulty: 0.2,
                  hints: ['달력을 떠올려요. 며칠이면 달력 몇 칸, 몇 개월이면 달력 몇 장, 몇 년이면 달력이 몇 번 바뀌는지 생각해요.', '주말은 토요일과 일요일이에요. 1학기는 달력을 몇 장 넘기는지, 사계절은 한 해와 견주어 봐요.', '주말 여행은 2일쯤이라 일, 1학기는 몇 달 동안이라 개월, 초등학교 6년과 사계절 한 번(1년)은 년이에요.'],
                  conclude: '1학기는 3월부터 몇 달 동안이라 개월, 초등학교는 6년, 사계절이 한 번 지나면 1년이에요.' },
                { prompt: '알맞은 단위로 쓴 계획만 골라 보세요.', toolOptions: { mode: 'pick', basket: '바른 계획', cards: [
                  { id: 'o1', text: '줄넘기를 10분 해요' }, { id: 'x1', text: '양치를 3시간 해요' }, { id: 'o2', text: '방학이 1개월 남았어요' }, { id: 'x2', text: '라면을 2주일 끓여요' }, { id: 'o3', text: '잠을 9시간 자요' }] },
                  target: { pick: ['o1', 'o2', 'o3'] }, difficulty: 0.22,
                  hints: ['카드마다 소리 내어 읽고, 정말 그만큼 걸리는지 내가 해 본 일과 견주어 봐요.', '고른 카드 가운데 단위가 너무 길거나 짧은 것이 있는지 봐요. 양치질과 라면은 얼마나 걸렸나요?', '줄넘기 10분, 방학 1개월, 잠 9시간은 알맞아요. 양치 3시간, 라면 2주일은 단위가 어색해요.'] },
                { prompt: '더 해 보기: 걸리는 시간에 알맞은 단위 가지에 넣어 보세요. 가지가 네 개예요.', toolOptions: { mode: 'sort', slots: [{ id: 'mi', label: '분' }, { id: 'hr', label: '시간' }, { id: 'dy', label: '일' }, { id: 'yr', label: '년' }], cards: [
                  { id: 't1', text: '손톱을 깎는 동안' }, { id: 't2', text: '영화 한 편을 보는 동안' }, { id: 't3', text: '설날 연휴 동안' }, { id: 't4', text: '아기가 태어나 첫 돌이 될 때까지' }, { id: 't5', text: '운동장 한 바퀴를 걷는 동안' }] },
                  target: { sort: { mi: ['t1', 't5'], hr: ['t2'], dy: ['t3'], yr: ['t4'] } }, extra: true, difficulty: 0.32,
                  hints: ['작은 단위부터 차례로 붙여 읽어 봐요. "3분", "3시간", "3일", "3년" 가운데 가장 자연스러운 말을 찾아요.', '연휴는 달력의 몇 칸인지, 첫 돌은 태어난 날부터 달력이 몇 번 바뀌는 때인지 생각해요.', '손톱 깎기와 운동장 한 바퀴는 분, 영화는 시간(2시간쯤), 설날 연휴는 일(3일쯤), 첫 돌까지는 1년이에요.'] },
              ],
            },
            {
              id: 'a3', title: '활동 3. 단원 되짚기: 시계 문제', minutes: 8, tool: 'clock',
              task: '이 단원에서 배운 것을 모두 써요. 짧은바늘·긴바늘 읽기, 몇 분 전, 걸린 시간을 떠올려요.',
              teacher: '세 문항이 각각 1·2차시(읽기), 4차시(몇 분 전), 7·8차시(걸린 시간)와 이어진다고 말해 준다. 틀린 문항이 있으면 그 차시 공책을 펴 보게 하고, 활동지 자기 점검표에 △를 표시하게 한다.',
              levels: {
                easy: { minuteStep: 5, showMinuteNumbers: true, hourZone: true },
                base: { minuteStep: 5 },
                challenge: { minuteStep: 1 },
              },
              items: [
                { prompt: '시계를 보고 몇 시 몇 분인지 골라 보세요.', state: { h: 7, m: 38 }, toolOptions: { readOnly: true, choices: ['8시 38분', '7시 38분', '7시 43분'] }, target: { pick: 1, h: 7, m: 38 }, difficulty: 0.15 },
                { prompt: '3시 20분 전을 만들어 보세요.', state: { h: 12, m: 0 }, target: { h: 2, m: 40 }, difficulty: 0.2, reveal: 'after-check' },
                { prompt: '이어달리기가 10시 50분에 시작해 25분 걸렸어요. 끝난 시각을 만들어 보세요.', state: { h: 10, m: 50 }, target: { h: 11, m: 15 }, difficulty: 0.25,
                  conclude: '11시까지 10분, 15분 더 가서 11시 15분이에요.' },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"이 단원에서 가장 자신 있는 것과 아직 헷갈리는 것은 무엇이에요?" 활동지 자기 점검표를 채우게 하고, 손을 들어 △가 많은 항목을 알아본 뒤 다음 복습 시간에 짝 활동으로 다시 한다. 출구 1번에서 15일을 만든 학생은 출발한 날을 하루로 센 것이다.',
          exitTicket: [
            { type: 'tool', tool: 'numberline', options: { mode: 'jump', min: 1, max: 31, step: 7, sub: 7, fixedFrom: 9 }, prompt: '9일에서 1주일 뒤 날짜까지 뛰어 보세요.', target: { from: 9, end: 16 }, difficulty: 0.12 },
            { type: 'choice', prompt: '학교 수업 한 시간은 40○ 동안이에요. ○에 알맞은 단위는?', options: ['분', '시간', '일'], answer: 0, difficulty: 0.1, explain: '수업 한 시간은 40분이에요. 40시간이면 이틀 가까이 걸려요.' },
            { type: 'short', prompt: '이 단원에서 아직 헷갈리는 것을 하나 쓰세요.' },
            { type: 'mood', prompt: '시각과 시간 단원 공부는 어땠나요?' },
          ],
        },
      ],
      worksheet: {
        title: '시각과 시간 정리',
        items: [
          { type: 'figure', prompt: '시계를 보고 몇 시 몇 분인지 쓰세요.', tool: 'clock', figures: [
            { state: { h: 4, m: 52 }, caption: '___시 ___분' }, { state: { h: 12, m: 15 }, caption: '___시 ___분' }], answer: '4시 52분, 12시 15분' },
          { type: 'table', prompt: '빈칸을 채우세요.', columns: ['단위', '같은 시간'], cells: [['1시간', '___분'], ['1일', '___시간'], ['1주일', '___일'], ['1년', '___개월']], answer: '60분, 24시간, 7일, 12개월' },
          { type: 'figure', prompt: '6일에서 2주일 뒤까지 화살표를 그리고 날짜를 쓰세요.', tool: 'numberline', wide: true, figures: [
            { options: { mode: 'jump', min: 1, max: 31, step: 7, sub: 7 }, caption: '2주일 뒤는 ___일' }], answer: '20일' },
          { type: 'choice', prompt: '"잠을 9○ 자요"의 ○에 알맞은 단위에 ○ 하세요.', options: ['분', '시간', '일'], answer: '시간' },
          { type: 'table', prompt: '자기 점검: 할 수 있으면 ○, 조금 헷갈리면 △를 쓰세요.', columns: ['나는 이것을 할 수 있어요', '○/△'], cells: [['몇 시 몇 분을 1분 단위까지 읽어요', ''], ['걸린 시간을 몇 시간 몇 분으로 구해요', ''], ['달력에서 며칠 뒤 날짜를 찾아요', '']], answer: '스스로 표시' },
        ],
        easy: {
          note: '1시간 = 60분, 하루 = 24시간, 1주일 = 7일, 1년 = 12개월. 며칠 뒤를 셀 때 오늘은 세지 않아요.',
          items: [
            { type: 'figure', prompt: '시계를 보고 몇 시 몇 분인지 쓰세요.', tool: 'clock', options: { showMinuteNumbers: true }, figures: [
              { state: { h: 4, m: 50 }, caption: '___시 ___분' }, { state: { h: 12, m: 15 }, caption: '___시 ___분' }], answer: '4시 50분, 12시 15분' },
            { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '1시간 = ___분, 1주일 = ___일', answer: '60, 7' },
            { type: 'choice', prompt: '5일에서 1주일 뒤는 며칠인가요?', options: ['11일', '12일'], answer: '12일' },
            { type: 'table', prompt: '자기 점검: 할 수 있으면 ○, 헷갈리면 △를 쓰세요.', columns: ['나는 이것을 할 수 있어요', '○/△'], cells: [['시계를 읽어요', ''], ['1시간이 60분인 것을 알아요', '']], answer: '스스로 표시' },
          ],
        },
      },
      differentiation: {
        easy: '수직선 달력의 도착점에 날짜가 보이고, 알맞은 가지에 놓은 카드는 바로 초록 테두리가 생겨요. 시계는 5분 숫자와 짧은바늘 자리가 보여요.',
        base: '7일마다 날짜가 적힌 줄에서 뛰어 세고, 시계는 5분씩 움직여요.',
        challenge: '수직선 달력에 양 끝 날짜만 있어 칸을 세어야 하고, 시계는 1분씩 움직여요. 생일 4일 전처럼 거꾸로 세는 문항과 분·시간·일·년 네 가지로 나누는 문항이 더 나와요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 며칠 뒤를 셀 때 오늘을 첫째 날로 세어 하루 어긋난다(5일의 2주일 뒤 → 18일) → 출발한 날은 세지 않는다. ② 알맞은 단위를 고를 때 수만 보고 단위의 크기를 떠올리지 못한다 → 몸으로 해 보거나 "3시간 양치"처럼 소리 내어 어색함을 찾는다. ③ 단원 되짚기에서 틀린 문항은 해당 차시(1·2·4·7·8차시)로 돌아가 다시 본다.',
    },
  ],
});
