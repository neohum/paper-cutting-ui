/* 6학년 1학기 4. 비와 비율 — 비율을 분수와 소수로 나타내기 */
(function () {
  // 문항에 쓰는 상황들(띠 전체 = 기준량)
  const GLASSES = { baseName: '반 학생 수', base: 25, compareName: '안경 쓴 학생 수', compare: 10, unit: '명' };
  const GIRLS = { baseName: '여학생 수', base: 13, compareName: '남학생 수', compare: 12, unit: '명', other: { name: '전체 학생 수', n: 25 } };
  const JUICE = { baseName: '물의 양', base: 200, compareName: '매실 원액의 양', compare: 50, unit: 'mL' };
  const MILK = { baseName: '반 학생 수', base: 20, compareName: '우유를 좋아하는 학생 수', compare: 12, unit: '명', hideCompare: true };
  const SHOOT = { baseName: '던진 횟수', base: 20, compareName: '들어간 횟수', compare: 7, unit: '번' };
  const BUS = { baseName: '버스 정원', base: 40, compareName: '탄 사람 수', compare: 30, unit: '명' };
  const MARBLE = { baseName: '빨간 구슬 수', base: 9, compareName: '파란 구슬 수', compare: 6, unit: '개', other: { name: '전체 구슬 수', n: 15 } };
  const FRUIT = { baseName: '배의 수', base: 3, compareName: '사과의 수', compare: 6, unit: '개' };
  const BOOKS = { baseName: '학급 문고 전체 권수', base: 50, compareName: '동화책 수', compare: 15, unit: '권' };

  PaperLessons.register({
    id: 'g6-math-ratio',
    schema: 'edu-lesson.v1',
    catalog: { unit: 'g6-수학-1학기-4', lesson: 3 },
    grade: 6, subject: '수학', unitTitle: '4. 비와 비율',
    title: '비율을 분수와 소수로 나타내기',
    objective: '기준량과 비교하는 양을 구분하여 비율을 분수와 소수로 나타낼 수 있다.',
    standards: ['[6수02-02]'],
    minutes: 40,
    formats: ['chromebook', 'projector', 'print'],
    illustration: {
      prompt: 'Layered paper-cut illustration of a group of cheerful paper children in a classroom, a few of them wearing round glasses, standing beside one long paper ribbon divided into equal sections where some sections are colored pink and the rest are cream, no letters or numbers anywhere, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.',
      image: 'img/g6-math-ratio.webp', size: [1200, 800],
      scene: { viewBox: [480, 270], layers: [
        { motif: 'sun', x: 412, y: 56, s: 0.8 }, { motif: 'cloud', x: 110, y: 50 }, { motif: 'cloud', x: 290, y: 36, s: 0.6 },
        { motif: 'hills', y: 208, colors: ['lavender', 'mint', 'rose'] }, { motif: 'house', x: 100, y: 224, color: 'buttercup' },
        { motif: 'tree', x: 380, y: 222 }, { motif: 'flower', x: 250, y: 236 },
        { motif: 'text', x: 240, y: 150, text: '우리 반에서 안경 쓴 친구는 얼마만큼일까요?', size: 20 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"우리 반 25명 가운데 안경 쓴 친구가 10명이에요. 안경 쓴 친구는 반 전체의 얼마만큼일까요?" 앞 차시의 비(10 : 25)를 떠올리게 한 뒤, 시연 단추로 띠 전체(반 학생 수)를 25칸으로 나누고 10칸을 칠하는 모습을 보여 준다. "띠 전체가 되는 양, 비교하는 양을 무엇이라고 했지요?"로 기준량·비교하는 양을 다시 짚는다.',
        student: '띠 전체가 무엇인지, 색칠한 부분이 무엇인지 생각하며 봅시다.',
        demo: { tool: 'ratiobar', options: { scene: GLASSES, labels: 'words' }, sequence: [{ bar: true }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 띠로 기준량과 비교하는 양 나타내기', minutes: 9, tool: 'ratiobar',
            task: '"■에 대한 ▲의 비"에서 ■가 기준량, ▲가 비교하는 양이에요. 띠 전체를 기준량으로 삼고, 비교하는 양만큼 색칠해 봐요.',
            teacher: '"~에 대한"이 붙은 쪽이 기준량이라는 것을 낱말로 짚는다. 2번은 전체 학생 수(25명)를 기준량으로 고르는 학생이 많다 — "여학생 수에 대한"이라는 말을 소리 내어 읽게 한다. 3번은 200칸으로 나눌 수 없으니 한 칸을 몇 mL로 할지 먼저 말하게 한다.',
            levels: { easy: { labels: 'words' }, base: { labels: 'base' }, challenge: { labels: 'none' } },
            items: [
              { prompt: '"반 학생 수에 대한 안경 쓴 학생 수의 비"를 띠로 나타내요. 띠 전체로 삼을 양을 고르고, 띠를 나누어 안경 쓴 학생 수만큼 색칠하세요.', toolOptions: { scene: GLASSES, askBase: true, wholeOrder: [1, 0] }, target: { whole: 0, bar: true }, difficulty: 0.1 },
              { prompt: '남학생 12명, 여학생 13명이에요. "여학생 수에 대한 남학생 수의 비"를 띠로 나타내세요.', toolOptions: { scene: GIRLS, askBase: true, wholeOrder: [2, 1, 0] }, target: { whole: 0, bar: true }, difficulty: 0.25,
                conclude: '"여학생 수에 대한"이므로 기준량은 여학생 수 13명이에요. 전체 학생 수(25명)가 아니에요.' },
              { prompt: '물 200 mL에 매실 원액 50 mL를 섞었어요. "물의 양에 대한 매실 원액의 양의 비"를 띠로 나타내세요. (띠는 40칸까지 나눌 수 있어요.)', toolOptions: { scene: JUICE }, target: { bar: true }, difficulty: 0.25,
                predict: { q: '200칸으로는 나눌 수 없어요. 띠를 몇 칸으로 나누면 좋을까요?', options: ['4칸 (한 칸 50 mL)', '3칸', '7칸'], answer: 0 },
                conclude: '200 mL를 50 mL씩 4칸으로 나누면 1칸이 매실 원액이에요. 50/200과 1/4은 크기가 같은 비율이에요.' },
              { prompt: '더 해 보기: 반 학생 20명 가운데 우유를 좋아하는 학생 수의 비율이 0.6이에요. 띠를 나누어 우유를 좋아하는 학생 수만큼 색칠하세요.', toolOptions: { scene: MILK }, target: { bar: true }, extra: true, difficulty: 0.2,
                conclude: '0.6 = 6/10 = 12/20이므로 20명 가운데 12명이에요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 비율을 분수와 소수로 나타내기', minutes: 11, tool: 'ratiobar',
            task: '비율 = 비교하는 양 ÷ 기준량이에요. 분수로 쓸 때 분모에는 기준량, 분자에는 비교하는 양을 써요. 소수는 분모를 10, 100으로 바꾸거나 나눗셈으로 구해요.',
            teacher: '"10/25를 소수로 바꾸려면 분모를 무엇으로 만들면 좋을까요?" 분모를 100으로 만드는 방법과 나눗셈(10 ÷ 25) 두 가지를 모두 인정한다. 4번은 기준량을 먼저 고르게 해, 전체 구슬 수(15개)를 분모에 쓰는 실수를 드러낸다. 분모와 분자를 바꿔 쓴 학생에게는 "무엇에 대한?"을 다시 묻는다.',
            levels: { easy: { labels: 'words', cut: false }, base: { labels: 'base', cut: false }, challenge: { labels: 'none', cut: false } },
            items: [
              { prompt: '띠를 보고 "반 학생 수에 대한 안경 쓴 학생 수의 비율"을 분수로 나타내세요.', state: { parts: 5, shaded: 2 }, toolOptions: { scene: GLASSES, fraction: true }, target: { fraction: true }, difficulty: 0.25,
                conclude: '띠 5칸 가운데 2칸이니 2/5예요. 한 칸이 5명이라 10/25로 써도 같은 비율이에요.' },
              { prompt: '농구공을 20번 던져 7번 넣었어요. "던진 횟수에 대한 들어간 횟수의 비율"을 분수와 소수로 나타내세요.', state: { parts: 20, shaded: 7 }, toolOptions: { scene: SHOOT, fraction: true, decimal: true }, target: { fraction: true, decimal: true }, difficulty: 0.45 },
              { prompt: '버스 정원은 40명이고 30명이 탔어요. "버스 정원에 대한 탄 사람 수의 비율"을 기약분수와 소수로 나타내세요.', state: { parts: 40, shaded: 30 }, toolOptions: { scene: BUS, fraction: true, decimal: true }, target: { fraction: 'lowest', decimal: true }, difficulty: 0.35 },
              { prompt: '빨간 구슬 9개와 파란 구슬 6개가 있어요. "빨간 구슬 수에 대한 파란 구슬 수의 비율"을 분수로 나타내세요. 먼저 띠 전체로 삼을 양을 고르세요.', toolOptions: { scene: MARBLE, askBase: true, wholeOrder: [2, 1, 0], fraction: true }, target: { whole: 0, fraction: true }, difficulty: 0.3,
                conclude: '"빨간 구슬 수에 대한"이므로 기준량은 9개예요. 6/9 = 2/3이에요.' },
              { prompt: '더 해 보기: 사과 6개와 배 3개가 있어요. "배의 수에 대한 사과의 수의 비율"을 분수와 소수로 나타내세요.', toolOptions: { scene: FRUIT, fraction: true, decimal: true }, target: { fraction: true, decimal: true }, extra: true, difficulty: 0.45,
                conclude: '비교하는 양이 기준량보다 크면 비율은 1보다 커요. 6/3 = 2예요.' },
            ],
          },
          {
            id: 'a3', title: '활동 3. 짝과 우리 반 비율 문제 내기', minutes: 7, tool: 'ratiobar', pair: true,
            task: '우리 반에서 셀 수 있는 것(예: 안경 쓴 친구, 형제가 있는 친구)으로 짝에게 비율 문제를 내고, 짝은 띠로 나타낸 뒤 분수와 소수로 말해 봅시다.',
            teacher: '말하기 틀을 칠판에 적어 둔다. 친구 이름이나 개인 사정이 드러나는 질문(몸무게, 가정 형편 등)은 쓰지 않게 한다.',
            levels: { easy: { labels: 'words' }, base: { labels: 'base' }, challenge: { labels: 'none' } },
            items: [{ difficulty: 0, free: true, talk: true, prompt: '"___에 대한 ___의 비율은 분수로 ___, 소수로 ___이야. 기준량은 ___이야." 틀에 맞춰 번갈아 말한 뒤 "다 했어요"를 누르세요.' }],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"비율을 분수로 쓸 때 분모에는 무엇을 쓰나요? 어떻게 찾나요?" 출구 질문 3번(전체를 분모로 쓰는 실수)과 4번 서술을 보고 다음 차시(백분율) 전에 기준량 찾기를 다시 짚는다.',
        exitTicket: [
          { type: 'choice', prompt: '7 : 10을 바르게 읽지 않은 것은 무엇인가요?', options: ['7 대 10', '10에 대한 7의 비', '7에 대한 10의 비'], answer: 2, difficulty: 0.15, explain: '7 : 10은 "7 대 10", "10에 대한 7의 비", "7의 10에 대한 비"로 읽어요. 기준량은 10이에요.' },
          { type: 'tool', tool: 'ratiobar', options: { scene: BOOKS, cut: false, decimal: true, labels: 'none' }, prompt: '학급 문고 50권 가운데 동화책이 15권이에요. "학급 문고 전체 권수에 대한 동화책 수의 비율"을 소수로 나타내세요.', target: { decimal: true }, difficulty: 0.2, explain: '15/50 = 30/100 = 0.3이에요.' },
          { type: 'choice', prompt: '우리 반은 남학생 14명, 여학생 16명이에요. "여학생 수에 대한 남학생 수의 비율"은 무엇인가요?', options: ['14/30', '14/16', '16/14'], answer: 1, difficulty: 0.25, explain: '"여학생 수에 대한"이므로 기준량은 여학생 수 16명이에요. 전체(30명)가 아니에요. 14/16 = 7/8이에요.' },
          { type: 'short', prompt: '"반 학생 수에 대한 안경 쓴 학생 수의 비율"을 25/10이라고 쓴 친구가 있어요. 무엇을 어떻게 고쳐 주면 좋을지 "기준량"을 넣어 쓰세요.', answer: '분모와 분자가 바뀌었어요. "반 학생 수에 대한"이므로 기준량인 반 학생 수 25를 분모에, 비교하는 양 10을 분자에 써서 10/25(=2/5=0.4)로 고쳐요.' },
          { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '비율을 분수와 소수로',
      items: [
        { type: 'figure', wide: true, prompt: '텃밭 8칸 가운데 3칸에 상추를 심었어요. 띠를 보고 빈칸을 채우세요.', tool: 'ratiobar', options: { scene: { baseName: '텃밭 전체 칸 수', base: 8, compareName: '상추를 심은 칸 수', compare: 3, unit: '칸' }, hideWhole: true }, figures: [
          { state: { parts: 8, shaded: 3 }, caption: '기준량: ________  비교하는 양: ________  비율: 분수 ______ = 소수 ______' }], answer: '기준량: 텃밭 전체 칸 수 8칸, 비교하는 양: 상추를 심은 칸 수 3칸, 비율: 3/8 = 0.375' },
        { type: 'blank', prompt: '알맞은 수를 쓰세요.', text: '9 : 4는 "9 대 ___", "___에 대한 9의 비", "9의 ___에 대한 비"라고 읽어요. 이때 기준량은 ___예요.', answer: '4, 4, 4, 4' },
        { type: 'table', prompt: '비율을 분수와 소수로 나타내세요. ① 반 학생 25명에 대한 안경 쓴 학생 8명의 비율  ② 던진 공 12개에 대한 넣은 공 9개의 비율  ③ 소금물 200 g에 대한 소금 50 g의 비율', columns: ['기준량', '비교하는 양', '비율(분수)', '비율(소수)'], rows: 3, answer: '① 25, 8, 8/25, 0.32 ② 12, 9, 9/12(=3/4), 0.75 ③ 200, 50, 50/200(=1/4), 0.25' },
        { type: 'choice', prompt: '물 300 mL에 포도 원액 60 mL를 섞었어요. "물의 양에 대한 포도 원액의 양의 비율"로 알맞은 것에 ○ 하세요.', options: ['60/360', '60/300', '300/60'], answer: '60/300 (= 1/5 = 0.2)' },
        { type: 'short', prompt: '"~에 대한"이라는 말을 보고 기준량을 찾는 방법을 동생에게 설명하듯이 쓰세요.', answer: '"■에 대한"에서 ■가 기준량이에요. 기준량은 분모에, 나머지(비교하는 양)는 분자에 써요.' },
      ],
      easy: {
        note: '"■에 대한 ▲의 비율"에서 ■는 기준량(분모), ▲는 비교하는 양(분자)이에요. 비율 = ▲ ÷ ■',
        items: [
          { type: 'figure', wide: true, prompt: '텃밭 8칸 가운데 3칸에 상추를 심었어요. 띠를 보고 빈칸을 채우세요.', tool: 'ratiobar', options: { scene: { baseName: '텃밭 전체 칸 수', base: 8, compareName: '상추를 심은 칸 수', compare: 3, unit: '칸' } }, figures: [
            { state: { parts: 8, shaded: 3 }, caption: '비교하는 양(색칠): ___칸   비율 = ___ / 8' }], answer: '3칸, 3/8' },
          { type: 'blank', prompt: '알맞은 수를 쓰세요.', text: '9 : 4는 "9 대 ___", "___에 대한 9의 비"라고 읽어요.', answer: '4, 4' },
          { type: 'table', prompt: '비율을 분수로 나타내세요. ① 반 학생 25명에 대한 안경 쓴 학생 8명  ② 던진 공 12개에 대한 넣은 공 9개', columns: ['기준량(분모)', '비교하는 양(분자)', '비율(분수)'], rows: 2, answer: '① 25, 8, 8/25 ② 12, 9, 9/12' },
          { type: 'short', prompt: '"반 학생 수에 대한 안경 쓴 학생 수의 비율"에서 기준량은 무엇인가요?', answer: '반 학생 수' },
        ],
      },
    },
    differentiation: {
      easy: '띠에 "기준량"과 "비교하는 양" 낱말이 붙고, 한 칸이 몇 명인지 보여요. 힌트에 수를 넣은 나눗셈이 나와요.',
      base: '띠 전체에만 "기준량" 낱말이 붙어요. 기준량을 고르는 문항은 고르기 전까지 띠 이름이 "?"예요.',
      challenge: '띠에 "기준량"·"비교하는 양" 낱말이 없고 힌트에 수가 들어가지 않아요. "~에 대한"만 보고 기준량을 찾아요.',
    },
    teacherNotes: '흔한 오개념: ① 기준량과 비교하는 양을 바꿔 분모·분자를 뒤집는다(10/25를 25/10으로) — "~에 대한"이 붙은 쪽이 기준량이며, 교구가 "분모에는 기준량(무엇에 대한)을 써요"로 짚는다. ② 두 양을 더한 전체를 기준량으로 쓴다(여학생 수에 대한 남학생 수를 12/25로) — 띠 전체로 삼을 양을 고르는 문항에서 드러난다. ③ 비율은 언제나 1보다 작다고 생각한다 — 사과·배 문항(6/3 = 2)으로 다룬다. ④ 분수를 소수로 바꿀 때 분자를 그대로 소수점 아래로 옮긴다(7/20을 0.7로) — 분모를 100으로 만들거나 나눗셈을 하게 한다. ⑤ 약분한 분수와 약분하지 않은 분수의 비율이 다르다고 생각한다 — 10/25와 2/5를 모두 정답으로 받고, 기약분수를 요구할 때만 따로 묻는다. 백분율은 다음 차시에서 다룬다. 우리 반 자료로 문제를 낼 때 개인 사정이 드러나는 질문은 피한다.',
  });
})();
