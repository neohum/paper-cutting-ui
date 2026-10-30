/* 4학년 1학기 미술 1. 미적 체험 — 감각으로 대상을 살피기(1~12차시), 생활 속 미술의 역할 찾기(13~23차시).
 * 같은 꼴이 되풀이되는 칸(차시 머리·그림 문장 틀)만 아래 도우미로 만들고, 차시 내용은 모두 그대로 적는다.
 */
(function () {
  'use strict';
  const UNIT = 'g4-미술-1학기-1';
  const TITLE = '1. 미적 체험';
  const S3 = '[4미01-03]';
  const S4 = '[4미01-04]';
  const art = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const scene = (layers) => ({ viewBox: [480, 270], layers });
  const lesson = (n, std, body) => Object.assign({
    id: `g4-art-1-01-${String(n).padStart(2, '0')}`, schema: 'edu-lesson.v1',
    catalog: { unit: UNIT, lesson: n }, grade: 4, subject: '미술', unitTitle: TITLE,
    standards: [std], minutes: 40, formats: ['chromebook', 'projector', 'print'],
  }, body);
  const lessons = [];

  // ───────────── 1차시 (도입) ─────────────
  lessons.push(lesson(1, S3, {
    title: '솔방울을 눈·손·코·귀로 살피고 처음 생각과 견주기',
    objective: '대상을 눈·손·코·귀로 살펴 찾은 특징을 감각별로 나누고, 미리 알던 모습과 살펴 알게 된 모습을 구별해 말할 수 있다.',
    illustration: {
      prompt: art('a curious child holding a pine cone next to an orange, a seashell and a dry leaf on a wooden table'),
      scene: scene([
        { motif: 'sun', x: 410, y: 58, s: 0.8 }, { motif: 'cloud', x: 110, y: 52 }, { motif: 'hills', y: 206 },
        { motif: 'tree', x: 80, y: 214, s: 1.1 }, { motif: 'leaf', x: 360, y: 200, r: 20 }, { motif: 'leaf', x: 400, y: 214, r: -30, color: 'buttercup' },
        { motif: 'text', x: 240, y: 140, text: '눈·손·코·귀로 살펴봐요', size: 22 },
      ]),
    },
    safety: ['보자기 속 물건은 짝이 손에 쥐여 줄 때만 만지고, 입에 넣거나 세게 쥐지 않아요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 7,
        teacher: '"보자기 속에 물건이 하나 있어요. 보지 말고 손으로만 만져 보세요. 무엇일까요?" 두세 명이 만진 느낌(울퉁불퉁해요, 가벼워요, 끝이 따끔해요)을 말하게 한 뒤 솔방울을 꺼낸다. "솔방울을 그린다면 어떻게 그릴래요?" 학생이 떠올린 모습(갈색 세모 덩어리)을 칠판에 먼저 그려 둔다. "다 아는 물건이니 자세히 볼 필요가 없다"는 생각이 맞는지 오늘 확인해 보자고 연다. "맛은 관찰할 때 함부로 보지 않아요. 오늘은 눈·손·코·귀 네 감각으로 살펴요." 시연 단추로 솔방울을 살핀 카드가 감각 가지로 들어가는 모습을 보여 준다.',
        student: '보자기 속 물건을 만져 보고, 어떤 느낌인지 낱말 하나로 말해 봅시다.',
        demo: { tool: 'mindmap', options: { topic: '솔방울', slots: ['눈', '손', '코', '귀'], cards: [{ id: 'd1', text: '비늘 끝은 진한 갈색, 안쪽은 밝은 갈색이에요' }, { id: 'd2', text: '비늘 끝이 거칠어요' }, { id: 'd3', text: '나무 진 냄새가 나요' }, { id: 'd4', text: '비비면 바스락 소리가 나요' }] }, sequence: [{ sort: { 눈: ['d1'], 손: ['d2'], 코: ['d3'], 귀: ['d4'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 25,
        activities: [
          {
            id: 'a1', title: '활동 1. 감각마다 찾은 특징 나누기', minutes: 9, tool: 'mindmap',
            teacher: '"이 카드는 눈으로 알았을까요, 손으로 알았을까요? 카드 말을 다시 읽어 보세요. 색·빛깔·반짝임처럼 눈을 감으면 알 수 없는 것은 눈, 눈을 감고 만져도 알 수 있는 것(거칠기·무게·말랑함)은 손이에요." 냄새는 코, 소리는 귀라는 기준까지 먼저 세운다. 모양은 눈으로도 보이지만 만져서도 알 수 있으니, 오늘 카드에서는 색·빛깔·반짝임만 눈 가지에 둔다고 짚는다. 도전 단계의 "겨울 과일이에요" 같은 카드는 감각으로 살핀 것이 아니라 미리 알던 지식이라 어느 가지에도 넣지 않는다고 짚는다.',
            task: '물건을 살핀 카드를 읽고, 어느 감각으로 알아낸 것인지 가지에 나누어 넣어요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '귤을 살핀 카드를 눈·손·코 가지에 나누어 넣어 보세요.',
                toolOptions: { topic: '귤', slots: ['눈', '손', '코'], cards: [{ id: 'g1', text: '껍질이 반질반질 윤이 나 보여요' }, { id: 'g2', text: '꼭지 둘레가 조금 초록빛이에요' }, { id: 'g3', text: '껍질이 오톨도톨해요' }, { id: 'g4', text: '누르면 말랑하게 들어가요' }, { id: 'g5', text: '까면 새콤한 냄새가 나요' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'g1', text: '껍질이 반질반질 윤이 나 보여요' }, { id: 'g2', text: '꼭지 둘레가 조금 초록빛이에요' }, { id: 'g3', text: '껍질이 오톨도톨해요' }, { id: 'g4', text: '누르면 말랑하게 들어가요' }, { id: 'g5', text: '까면 새콤한 냄새가 나요' }, { id: 'gx', text: '귤은 겨울 과일이에요' }] } } },
                hints: ['색·빛깔·반짝임처럼 눈으로만 알 수 있는지, 눈을 감고 만져도 알 수 있는지 카드 말을 다시 읽어요.'],
                target: { sort: { 눈: ['g1', 'g2'], 손: ['g3', 'g4'], 코: ['g5'] } }, difficulty: 0.15 },
              { prompt: '조개껍데기를 살핀 카드를 눈·손·귀 가지에 나누어 넣어 보세요.',
                toolOptions: { topic: '조개껍데기', slots: ['눈', '손', '귀'], cards: [{ id: 'j1', text: '안쪽이 무지갯빛으로 반짝여요' }, { id: 'j2', text: '안쪽은 하얗고 바깥은 갈색이에요' }, { id: 'j3', text: '바깥은 까끌, 안쪽은 매끈해요' }, { id: 'j4', text: '생각보다 가벼워요' }, { id: 'j5', text: '두 개를 부딪치면 딸깍 소리가 나요' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'j1', text: '안쪽이 무지갯빛으로 반짝여요' }, { id: 'j2', text: '안쪽은 하얗고 바깥은 갈색이에요' }, { id: 'j3', text: '바깥은 까끌, 안쪽은 매끈해요' }, { id: 'j4', text: '생각보다 가벼워요' }, { id: 'j5', text: '두 개를 부딪치면 딸깍 소리가 나요' }, { id: 'jx', text: '조개는 바다에 살아요' }] } } },
                hints: ['눈을 감고 만져 보는 장면을 떠올려요. 그래도 알 수 있으면 손, 알 수 없으면 눈이에요.'],
                target: { sort: { 눈: ['j1', 'j2'], 손: ['j3', 'j4'], 귀: ['j5'] } }, difficulty: 0.2 },
              { prompt: '마른 나뭇잎을 살핀 카드를 네 감각 가지에 나누어 넣어 보세요.',
                toolOptions: { topic: '마른 나뭇잎', slots: ['눈', '손', '코', '귀'], cards: [{ id: 'n1', text: '잎맥이 잎보다 연한 색으로 보여요' }, { id: 'n2', text: '가장자리가 붉게 물들었어요' }, { id: 'n3', text: '바삭하고 가벼워요' }, { id: 'n4', text: '흙냄새 같은 냄새가 나요' }, { id: 'n5', text: '밟으면 바스락 소리가 나요' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'n1', text: '잎맥이 잎보다 연한 색으로 보여요' }, { id: 'n2', text: '가장자리가 붉게 물들었어요' }, { id: 'n3', text: '바삭하고 가벼워요' }, { id: 'n4', text: '흙냄새 같은 냄새가 나요' }, { id: 'n5', text: '밟으면 바스락 소리가 나요' }, { id: 'nx', text: '가을이면 잎이 떨어져요' }] } } },
                hints: ['카드마다 "보여요·색"인지, "만지면·무게"인지, 냄새·소리인지 낱말을 찾아 읽어요.'],
                target: { sort: { 눈: ['n1', 'n2'], 손: ['n3'], 코: ['n4'], 귀: ['n5'] } }, difficulty: 0.25,
                predict: { q: '마른 나뭇잎에서 귀로 찾을 수 있는 특징이 있을까요?', options: ['있어요', '없어요', '잘 모르겠어요'], answer: 0 },
                conclude: '눈으로만 보면 놓치는 특징도 손·코·귀로 살피면 찾을 수 있어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 미리 알던 모습과 살펴 알게 된 모습', minutes: 9, tool: 'mindmap',
            teacher: '"누구나 그 물건 이름만 듣고도 말할 수 있는 것은 미리 알던 모습이에요. 자세히 들여다봐야 보이는 것은 살펴 알게 된 모습이에요." 사과 카드를 하나씩 소리 내어 읽고, "꼭지 둘레가 움푹 파여 있다는 것을 그리기 전에도 알았나요?"라고 묻는다. "미리 알던 것으로 충분하다"고 말하는 학생에게는 칠판의 처음 그림과 견주어 무엇이 더해졌는지 세어 보게 한다.',
            task: '카드를 읽고, 누구나 떠올리는 대강의 모습인지 자세히 살펴야 알 수 있는 모습인지 나누어요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '사과를 그리기 전에 쓴 말과 자세히 본 뒤 쓴 말을 나누어 보세요.',
                toolOptions: { topic: '사과', slots: [{ id: 'before', label: '미리 알던 모습' }, { id: 'after', label: '살펴 알게 된 모습' }], cards: [{ id: 'p1', text: '빨갛고 둥글어요' }, { id: 'p2', text: '꼭지가 있어요' }, { id: 'p3', text: '꼭지 둘레가 움푹 파여 있어요' }, { id: 'p4', text: '빨강 사이로 노란 줄무늬가 보여요' }, { id: 'p5', text: '밑에 작은 별 모양 자국이 있어요' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'p1', text: '빨갛고 둥글어요' }, { id: 'p2', text: '꼭지가 있어요' }, { id: 'p3', text: '꼭지 둘레가 움푹 파여 있어요' }, { id: 'p4', text: '빨강 사이로 노란 줄무늬가 보여요' }, { id: 'p5', text: '밑에 작은 별 모양 자국이 있어요' }, { id: 'px', text: '사과는 맛있어요' }] } } },
                target: { sort: { before: ['p1', 'p2'], after: ['p3', 'p4', 'p5'] } }, difficulty: 0.2,
                predict: { q: '잘 아는 사과도 자세히 보면 새로 찾을 것이 있을까요?', options: ['거의 없어요', '몇 가지 있어요', '아주 많아요'] },
                conclude: '잘 아는 물건도 자세히 살피면 미리 알던 것보다 더 많은 모습이 보여요.' },
              { prompt: '운동화를 보고 쓴 말을 미리 알던 모습과 살펴 알게 된 모습으로 나누어 보세요.',
                toolOptions: { topic: '운동화', slots: [{ id: 'before', label: '미리 알던 모습' }, { id: 'after', label: '살펴 알게 된 모습' }], cards: [{ id: 's1', text: '앞쪽이 둥글어요' }, { id: 's2', text: '끈이 있어요' }, { id: 's3', text: '밑창에 물결 모양 홈이 있어요' }, { id: 's4', text: '끈 구멍마다 둥근 고리가 있어요' }, { id: 's5', text: '뒤꿈치 쪽 밑창이 더 두꺼워요' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 's1', text: '앞쪽이 둥글어요' }, { id: 's2', text: '끈이 있어요' }, { id: 's3', text: '밑창에 물결 모양 홈이 있어요' }, { id: 's4', text: '끈 구멍마다 둥근 고리가 있어요' }, { id: 's5', text: '뒤꿈치 쪽 밑창이 더 두꺼워요' }, { id: 'sx', text: '운동화는 달리기에 좋아요' }] } } },
                hints: ['물건 이름만 듣고도 누구나 말할 수 있는 말인지, 들여다봐야 쓸 수 있는 말인지 따져요.'],
                target: { sort: { before: ['s1', 's2'], after: ['s3', 's4', 's5'] } }, difficulty: 0.2 },
              { prompt: '내 손을 보고 쓴 말을 미리 알던 모습과 살펴 알게 된 모습으로 나누어 보세요.',
                toolOptions: { topic: '내 손', slots: [{ id: 'before', label: '미리 알던 모습' }, { id: 'after', label: '살펴 알게 된 모습' }], cards: [{ id: 'h1', text: '손가락이 다섯 개예요' }, { id: 'h2', text: '손톱이 있어요' }, { id: 'h3', text: '손가락 마디마다 가로 주름이 있어요' }, { id: 'h4', text: '손톱 아래에 하얀 반달이 있어요' }, { id: 'h5', text: '손바닥 손금이 짝과 달라요' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'h1', text: '손가락이 다섯 개예요' }, { id: 'h2', text: '손톱이 있어요' }, { id: 'h3', text: '손가락 마디마다 가로 주름이 있어요' }, { id: 'h4', text: '손톱 아래에 하얀 반달이 있어요' }, { id: 'h5', text: '손바닥 손금이 짝과 달라요' }, { id: 'hx', text: '손으로 글씨를 써요' }] } } },
                target: { sort: { before: ['h1', 'h2'], after: ['h3', 'h4', 'h5'] } }, difficulty: 0.25 },
            ],
          },
          {
            id: 'a3', title: '활동 3. 모둠 물건을 직접 살펴 마인드맵 채우기 (짝 활동)', minutes: 7, tool: 'mindmap', pair: true,
            teacher: '준비물: 모둠마다 솔방울과 귤을 하나씩 둔다(없으면 지우개·연필). "카드는 다 남이 쓴 말이었어요. 이제 내 눈·손·코·귀로 직접 찾아요." 2분은 눈으로만, 2분은 눈을 감고 만지고 냄새 맡고 흔들어 보게 한다. 활동지 1번 마인드맵에 쓰게 하고, "빨갛다"처럼 미리 알던 말만 쓴 학생에게는 "가까이 대고 다시 보면 어떤 색이 섞여 있나요?"라고 묻는다. 입에 넣지 않게 지켜본다.',
            task: '모둠 물건을 눈으로 보고, 눈을 감고 만지고 냄새 맡고 흔들어 살펴요. 찾은 것을 활동지 1번 마인드맵에 써요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              { prompt: '모둠 물건을 눈으로만 2분 살펴, 색·빛깔에서 찾은 것 두 가지를 활동지 눈 가지에 쓰고 "다 했어요"를 누르세요.', toolOptions: { topic: '모둠 물건', slots: ['눈', '손', '코', '귀'], cards: [{ id: 'q1', text: '색' }, { id: 'q2', text: '빛깔' }, { id: 'q3', text: '반짝임' }] }, free: true, talk: true, difficulty: 0 },
              { prompt: '눈을 감고 만지고, 냄새 맡고, 흔들어 소리를 들어 손·코·귀 가지를 채운 뒤 "다 했어요"를 누르세요.', toolOptions: { topic: '모둠 물건', slots: ['눈', '손', '코', '귀'], cards: [{ id: 'q1', text: '거칠기' }, { id: 'q2', text: '무게' }, { id: 'q3', text: '냄새' }, { id: 'q4', text: '소리' }] }, free: true, talk: true, difficulty: 0 },
              { prompt: '짝과 마인드맵을 바꿔 읽고, 짝이 찾았는데 나는 못 찾은 특징 하나를 말한 뒤 "다 했어요"를 누르세요.', toolOptions: { topic: '짝이 찾은 것', slots: ['눈', '손', '코', '귀'], cards: [{ id: 'q1', text: '짝만 찾은 것' }] }, free: true, talk: true, difficulty: 0 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"처음 칠판에 그린 솔방울과 지금 우리가 아는 솔방울은 무엇이 달라졌나요?" 학생 말을 처음 그림 옆에 덧붙여 적는다. 출구 1번에서 "깎은 끝 나무 색"을 손 가지에 넣은 학생은 눈을 감고도 알 수 있는지 다시 묻는다. 2번에서 "한 번 보면 다 안다"를 고른 학생이 많으면 다음 시간 시작에 사과 카드를 다시 꺼낸다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '연필', slots: ['눈', '손', '코'], cards: [{ id: 'e1', text: '깎은 끝 나무 색이 겉 색과 달라요' }, { id: 'e2', text: '모서리가 손가락에 각지게 닿아요' }, { id: 'e3', text: '깎으면 나무 냄새가 나요' }] }, prompt: '연필을 살핀 카드를 알맞은 감각 가지에 넣어 보세요.', target: { sort: { 눈: ['e1'], 손: ['e2'], 코: ['e3'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '"솔방울은 다 아는 물건이라 자세히 볼 필요가 없어."라는 말에 대한 생각으로 알맞은 것은?', options: ['맞아요. 한 번 보면 다 알 수 있어요.', '아는 물건도 자세히 살피면 새로 찾을 것이 있어요.', '그림을 잘 그리는 사람만 살피면 돼요.'], answer: 1, difficulty: 0.15, explain: '오늘 사과·운동화·손처럼 잘 아는 것도 자세히 살피니 새로운 모습이 보였어요.' },
          { type: 'mood', prompt: '오늘 감각으로 살펴보기는 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '여러 감각으로 살펴보기',
      items: [
        { type: 'figure', wide: true, prompt: '모둠 물건(솔방울·귤 등)을 직접 살펴 가운데에 이름을 쓰고, 가지마다 그 감각으로 찾은 특징을 쓰세요.', tool: 'mindmap', figures: [{ options: { topic: '모둠 물건', printCards: false, slots: ['눈', '손', '코', '귀'], cards: ['보기'] }, caption: '' }], answer: '예: 귤 — 눈: 꼭지 둘레만 초록빛이에요 / 손: 껍질이 오톨도톨해요 / 코: 새콤한 냄새 / 귀: 껍질을 까면 사각 소리' },
        { type: 'table', prompt: '같은 물건을 그리기 전 생각과 자세히 본 뒤 알게 된 것을 쓰세요.', columns: ['미리 알던 모습', '자세히 살펴 알게 된 모습'], cells: [['사과는 빨갛고 둥글다', ''], ['', ''], ['', '']] },
        { type: 'choice', prompt: '귀로 살펴 알게 된 특징에 ○ 하세요.', options: ['껍질이 오톨도톨해요', '비비면 바스락 소리가 나요', '새콤한 냄새가 나요', '노란 줄무늬가 있어요'], answer: '비비면 바스락 소리가 나요' },
        { type: 'draw', prompt: '오늘 살핀 물건에서 새로 찾은 모습 하나를 크게 그리세요.' },
      ],
      easy: {
        note: '색·빛깔처럼 눈을 감으면 알 수 없는 것은 눈이에요. 눈을 감고 만져서 알면 손, 냄새로 알면 코, 소리로 알면 귀예요.',
        items: [
          { type: 'figure', wide: true, prompt: '가지마다 그 감각으로 찾은 특징을 한 가지씩 쓰세요.', tool: 'mindmap', figures: [{ options: { topic: '내가 고른 물건', printCards: false, slots: ['눈', '손'], cards: ['보기'] }, caption: '' }], answer: '예: 눈 — 파란색이에요 / 손 — 매끈해요' },
          { type: 'choice', prompt: '손으로 살펴 알게 된 특징에 ○ 하세요.', options: ['껍질이 오톨도톨해요', '새콤한 냄새가 나요'], answer: '껍질이 오톨도톨해요' },
          { type: 'draw', prompt: '오늘 살핀 물건을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 맞는 가지에 놓으면 초록 테두리가 생기고, 틀린 가지에 놓으면 까닭을 말하고 되돌아와요.',
      base: '스스로 카드를 모두 나눈 뒤 확인해요.',
      challenge: '감각으로 살핀 것이 아닌 카드("겨울 과일이에요", "맛있어요")가 섞여 있어, 그 카드는 가지에 넣지 않고 남겨야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 다 아는 물건이라 자세히 볼 필요가 없다고 여긴다 → 도입의 처음 그림과 정리의 덧붙인 말을 견주어 보여 준다. ② 색·빛깔 카드를 손 가지에 넣거나, 모양 카드를 무조건 눈에 넣는다 → "눈을 감고 만져도 알 수 있나요?"로 가른다. 알 수 있으면 손, 색·빛깔·반짝임처럼 알 수 없으면 눈이다. ③ "맛있어요, 겨울 과일" 같은 지식·느낌을 관찰로 여긴다 → 지금 감각으로 알아낸 것만 관찰이다. 준비물: 모둠마다 솔방울·귤 같은 실물 하나씩(활동 3에서 직접 살핀다). 구하지 못하면 지우개·연필처럼 교실 물건으로 바꾼다.',
  }));

  // ───────────── 2차시 (연습) ─────────────
  lessons.push(lesson(2, S3, {
    title: '같은 해바라기를 친구는 어떻게 보았는지 견주기',
    objective: '같은 대상을 보고 친구들이 찾은 특징이 색·모양·질감 가운데 무엇인지 짚어 견주고, 내가 본 특징을 색종이 조각으로 나타낼 수 있다.',
    illustration: {
      prompt: art('three children looking at the same tall sunflower from different sides in a small garden'),
      scene: scene([
        { motif: 'sun', x: 400, y: 56, s: 0.9 }, { motif: 'cloud', x: 120, y: 50 }, { motif: 'hills', y: 208 },
        { motif: 'flower', x: 150, y: 220, color: 'buttercup', s: 1.3 }, { motif: 'flower', x: 330, y: 224, color: 'buttercup' },
        { motif: 'bird', x: 250, y: 84 }, { motif: 'text', x: 240, y: 146, text: '같은 꽃, 다르게 보았어요', size: 22 },
      ]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 7,
        teacher: '해바라기 사진 한 장을 띄우고 "이 꽃에서 가장 먼저 눈에 들어온 것을 낱말 하나로 써 보세요."라고 한다. 붙임쪽지를 모아 칠판에 붙이면 "노랗다", "씨가 많다", "크다", "털"처럼 갈린다. "같은 꽃인데 왜 다르게 썼을까요?" 친구와 다르게 본 것은 틀린 것이 아니라 살핀 점이 다른 것이라고 짚는다. 시연 단추로 해바라기를 색종이 조각으로 꾸미는 모습을 보여 준다.',
        student: '해바라기 사진에서 가장 먼저 눈에 들어온 것을 낱말 하나로 써 봅시다.',
        demo: { tool: 'collage', options: { shapes: ['circle', 'leaf'], colors: ['갈색', '노랑', '초록'] }, sequence: [{ has: [{ shape: 'circle', color: '갈색', size: 'l', n: 1 }, { shape: 'leaf', color: '노랑', min: 4 }] }] },
      },
      {
        id: 'main', title: '전개', minutes: 25,
        activities: [
          {
            id: 'a1', title: '활동 1. 친구가 무엇을 살폈는지 잇기', minutes: 12, tool: 'mindmap',
            teacher: '"민지는 무엇을 보고 이 말을 했을까요? 색일까요, 무늬일까요?" 친구 말에서 단서가 되는 낱말(빙글빙글, 짙은 갈색, 까끌까끌)에 밑줄을 긋게 한다. "꽃의 이름" 카드를 고르는 학생에게는 이름은 살핀 것이 아니라 미리 아는 것이라고 짚는다.',
            task: '같은 대상을 보고 친구들이 한 말을 읽고, 친구가 무엇을 살폈는지 카드를 이어요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              { prompt: '같은 해바라기를 보고 친구들이 한 말이에요. 친구가 살핀 점 카드를 이어 보세요.',
                toolOptions: { mode: 'match', topic: '같은 해바라기', slots: [{ id: 'm1', label: '씨가 빙글빙글 박혀 있어' }, { id: 'm2', label: '꽃잎은 노랑, 가운데는 갈색' }, { id: 'm3', label: '줄기가 까끌까끌해' }], cards: [{ id: 'pat', text: '무늬' }, { id: 'col', text: '색' }, { id: 'tex', text: '만진 느낌' }, { id: 'nm', text: '꽃의 이름' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'pat', text: '무늬' }, { id: 'col', text: '색' }, { id: 'tex', text: '만진 느낌' }, { id: 'nm', text: '꽃의 이름' }, { id: 'snd', text: '소리' }] } } },
                hints: ['친구 말에서 단서가 되는 낱말(빙글빙글, 색 이름, 까끌까끌)을 찾고, 그 낱말이 무엇을 살핀 말인지 생각해요.'],
                target: { match: { m1: 'pat', m2: 'col', m3: 'tex' } }, difficulty: 0.2 },
              { prompt: '같은 고양이를 보고 친구들이 한 말이에요. 친구가 살핀 점 카드를 이어 보세요.',
                toolOptions: { mode: 'match', topic: '같은 고양이', slots: [{ id: 'c1', label: '귀 안쪽이 분홍빛이야' }, { id: 'c2', label: '꼬리 세우고 천천히 걸어' }, { id: 'c3', label: '수염이 길게 뻗었어' }], cards: [{ id: 'col', text: '색' }, { id: 'mov', text: '움직임' }, { id: 'shp', text: '모양' }, { id: 'snd', text: '소리' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'col', text: '색' }, { id: 'mov', text: '움직임' }, { id: 'shp', text: '모양' }, { id: 'snd', text: '소리' }, { id: 'sml', text: '냄새' }] } } },
                target: { match: { c1: 'col', c2: 'mov', c3: 'shp' } }, difficulty: 0.2 },
              { prompt: '비 오는 날 같은 창문을 보고 한 말이에요. 친구가 살핀 점 카드를 이어 보세요.',
                toolOptions: { mode: 'match', topic: '비 오는 날 창문', slots: [{ id: 'w1', label: '빗물 자국이 구불구불해' }, { id: 'w2', label: '물방울에 불빛이 반짝' }, { id: 'w3', label: '유리가 차갑고 미끄러워' }], cards: [{ id: 'ln', text: '선' }, { id: 'lt', text: '빛' }, { id: 'tex', text: '만진 느낌' }, { id: 'sml', text: '냄새' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'ln', text: '선' }, { id: 'lt', text: '빛' }, { id: 'tex', text: '만진 느낌' }, { id: 'sml', text: '냄새' }, { id: 'snd', text: '소리' }] } } },
                target: { match: { w1: 'ln', w2: 'lt', w3: 'tex' } }, difficulty: 0.3,
                predict: { q: '세 친구 가운데 틀리게 본 친구가 있을까요?', options: ['있어요', '없어요'], answer: 1 },
                conclude: '세 친구 모두 맞게 보았어요. 살핀 점이 달라서 말이 달랐던 거예요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 내가 본 특징을 색종이로 나타내기', minutes: 13, tool: 'collage',
            teacher: '"민지처럼 씨의 무늬를 본 사람은 가운데를 크게, 준호처럼 색을 본 사람은 갈색과 노랑의 차이가 잘 보이게 만들어요." 무당벌레 문항에서 점을 등 밖에 따로 붙이는 학생에게 "점은 등 위에 있지요? 겹쳐 붙여요"라고 말한다. 마지막 문항은 짝에게 무엇을 나타냈는지 말한 뒤에만 점검을 표시하게 한다.',
            task: '모양·색·크기를 골라 붙이고, 끌어서 옮겨요. 내가 살핀 특징이 잘 보이게 나타내요.',
            levels: {
              easy: { shapes: ['circle', 'leaf', 'triangle', 'square'], colors: ['빨강', '노랑', '갈색', '검정', '초록'], sizes: ['s', 'm', 'l'] },
              base: { shapes: ['circle', 'leaf', 'triangle', 'square', 'semi', 'star'], colors: ['빨강', '주황', '노랑', '초록', '파랑', '갈색', '검정', '하양'] },
              challenge: {},
            },
            items: [
              { prompt: '해바라기를 만들어요. 가운데에 크게 갈색 동그라미 하나, 둘레에 노란 나뭇잎 꽃잎을 여섯 장 이상 붙여요.', target: { has: [{ shape: 'circle', color: '갈색', size: 'l', n: 1 }, { shape: 'leaf', color: '노랑', min: 6 }] }, difficulty: 0.2,
                levels: { challenge: { prompt: '씨가 박힌 해바라기를 만들어요. 큰 갈색 동그라미 위에 작은 노랑 동그라미 씨를 셋 이상 겹치고, 둘레에 노랑 나뭇잎 꽃잎을 여덟 장 이상 붙여요.', target: { has: [{ shape: 'circle', color: '갈색', size: 'l', n: 1 }, { shape: 'circle', color: '노랑', size: 's', min: 3 }, { shape: 'leaf', color: '노랑', min: 8 }], overlap: 3 } } } },
              { prompt: '무당벌레 등을 만들어요. 크게 빨간 동그라미 하나 위에 작은 검은 동그라미 점을 네 개 이상 겹쳐 붙여요.', target: { has: [{ shape: 'circle', color: '빨강', size: 'l', n: 1 }, { shape: 'circle', color: '검정', size: 's', min: 4 }], overlap: 4 }, difficulty: 0.3,
                levels: { challenge: { prompt: '머리 달린 무당벌레를 만들어요. 큰 빨강 동그라미 등에 작은 검정 점을 여섯 개 이상 겹치고, 보통 검정 반원 머리 하나를 등에 겹쳐 붙여요.', target: { has: [{ shape: 'circle', color: '빨강', size: 'l', n: 1 }, { shape: 'circle', color: '검정', size: 's', min: 6 }, { shape: 'semi', color: '검정', size: 'm', n: 1 }], overlap: 6 } } } },
              { prompt: '친구와 다르게 본 나만의 특징 하나를 골라 조각으로 크게 나타내고 점검해요.', target: { selfCheck: ['내가 살핀 특징 하나를 골랐어요', '그 특징이 잘 보이게 크게 붙였어요', '짝에게 무엇을 나타냈는지 말했어요'], minPieces: 3 }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝은 무엇을 크게 나타냈나요? 나와 같은 것을 보았나요, 다른 것을 보았나요?" 두세 쌍의 작품을 띄워 서로 다르게 본 점을 말하게 한다. 출구 2번에서 "한 사람만 맞다"를 고른 학생에게는 오늘 세 친구가 모두 맞았던 창문 문항을 떠올리게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '같은 은행나무', slots: [{ id: 't1', label: '잎이 부채처럼 생겼어' }, { id: 't2', label: '잎 사이로 햇빛이 반짝여' }], cards: [{ id: 'shp', text: '모양' }, { id: 'lt', text: '빛' }, { id: 'snd', text: '소리' }] }, prompt: '같은 은행나무를 보고 친구들이 한 말과 살핀 점 카드를 이어 보세요.', target: { match: { t1: 'shp', t2: 'lt' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '같은 꽃을 보고 친구가 나와 다른 점을 말했어요. 알맞은 생각은?', options: ['둘 중 한 사람은 틀렸어요.', '살핀 점이 달라서 서로 다른 것을 찾았어요.', '친구 말을 따라 내 생각을 지워요.'], answer: 1, difficulty: 0.15, explain: '같은 대상도 색·모양·느낌 가운데 무엇을 살폈는지에 따라 다르게 보여요.' },
          { type: 'mood', prompt: '친구와 견주어 보니 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '같은 대상, 다르게 보기',
      items: [
        { type: 'table', prompt: '같은 대상을 보고 친구와 내가 찾은 것을 살핀 점마다 쓰세요.', columns: ['살핀 점', '친구가 찾은 것', '내가 찾은 것'], cells: [['색', '', ''], ['모양', '', ''], ['만진 느낌', '', '']] },
        { type: 'figure', wide: true, prompt: '해바라기 꽃잎을 더 그려 넣고, 씨가 박힌 무늬를 가운데에 그리세요.', tool: 'collage', options: { printColors: false }, figures: [{ state: { pieces: [{ shape: 'circle', color: '갈색', size: 'l', x: 280, y: 200, r: 0 }, { shape: 'leaf', color: '노랑', size: 'm', x: 280, y: 100, r: 0 }, { shape: 'leaf', color: '노랑', size: 'm', x: 380, y: 200, r: 90 }] }, caption: '해바라기 완성하기' }], answer: '꽃잎이 가운데 둘레를 돌며 붙고, 씨는 빙글빙글 도는 무늬' },
        { type: 'choice', prompt: '"꼬리를 세우고 천천히 걸어"는 무엇을 살핀 말인가요?', options: ['색', '움직임', '냄새', '소리'], answer: '움직임' },
        { type: 'short', prompt: '친구와 내가 다르게 본 점을 한 가지 쓰고, 왜 다르게 보았을지 쓰세요.' },
      ],
      easy: {
        note: '친구 말에서 색 낱말(노랑, 갈색)이 있으면 색, 움직이는 말(걸어, 날아)이 있으면 움직임이에요.',
        items: [
          { type: 'table', prompt: '친구와 내가 찾은 것을 쓰세요.', columns: ['살핀 점', '내가 찾은 것'], cells: [['색', ''], ['모양', '']] },
          { type: 'choice', prompt: '"귀 안쪽이 분홍빛이야"는 무엇을 살핀 말인가요?', options: ['색', '소리'], answer: '색' },
          { type: 'draw', prompt: '내가 본 해바라기의 특징 하나를 크게 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞게 이은 카드에 초록 테두리가 생겨요. 색종이 고르개는 모양 네 가지, 색 다섯 가지예요.',
      base: '스스로 이은 뒤 확인해요. 고르개는 모양 여섯 가지, 색 여덟 가지예요.',
      challenge: '이을 수 없는 카드가 하나 더 섞여 있어요. 색종이는 모든 모양·색 가운데 골라, 씨가 박힌 해바라기·머리 달린 무당벌레처럼 조각과 겹침이 더 많은 작품을 만들어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 친구와 다르게 보면 누군가 틀렸다고 여긴다 → 살핀 점(색·모양·질감·움직임·빛)이 달랐을 뿐임을 표로 보여 준다. ② 대상의 이름이나 아는 지식을 살핀 점으로 고른다. ③ 무당벌레 점을 등 밖에 따로 붙인다 → 겹쳐 붙여야 등 위의 점이 된다. 작품은 결과에 그대로 남으니 교사 화면에서 서로 다르게 나타낸 작품을 골라 정리 때 띄운다.',
  }));

  // ───────────── 3차시 (확장) ─────────────
  lessons.push(lesson(3, S3, {
    title: '눈을 가리고 만진 느낌을 모양으로 나타내기',
    objective: '눈을 가리고 만지거나 들은 대상의 느낌을 말로 설명하고, 따가운·폭신한 느낌을 알맞은 모양 조각으로 나타낼 수 있다.',
    illustration: {
      prompt: art('a blindfolded child gently touching a chestnut burr, a cotton ball and a smooth pebble on a tray'),
      scene: scene([
        { motif: 'moon', x: 410, y: 58, s: 0.7 }, { motif: 'cloud', x: 120, y: 52 }, { motif: 'hills', y: 210 },
        { motif: 'star', x: 330, y: 80, s: 0.6 }, { motif: 'tree', x: 400, y: 216 }, { motif: 'leaf', x: 90, y: 214, r: 15 },
        { motif: 'text', x: 240, y: 146, text: '만져 보고 들어 봐요', size: 22 },
      ]),
    },
    safety: ['눈을 가린 친구에게는 짝이 물건을 손바닥에 올려 주고, 밤송이처럼 뾰족한 것은 장갑을 끼고 살짝만 만져요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 7,
        teacher: '"눈을 감으면 무엇으로 물건을 알아낼 수 있을까요?" 한 학생의 눈을 가리고 솜을 손바닥에 올려 준 뒤 "어떤 느낌인지 낱말 세 개로 말해 볼까요?"라고 묻는다. "부드러워요"에서 멈추면 "얼마나? 무엇처럼?"으로 더 자세히 말하게 한다. 이어 "폭신한 느낌을 그림으로 그린다면 뾰족하게 그릴까요, 둥글게 그릴까요?" 모양이 느낌을 전한다는 것을 연다. 시연 단추로 세모 조각이 모여 따가운 느낌이 되는 모습을 보여 준다.',
        student: '눈을 감고 만진 물건의 느낌을 낱말 세 개로 말해 봅시다.',
        demo: { tool: 'collage', options: { shapes: ['triangle', 'circle'], colors: ['갈색', '초록'] }, sequence: [{ has: [{ shape: 'triangle', min: 4 }] }] },
      },
      {
        id: 'main', title: '전개', minutes: 25,
        activities: [
          {
            id: 'a1', title: '활동 1. 느낌을 듣고 물건 알아맞히기', minutes: 8, tool: 'mindmap',
            teacher: '"따끔하다는 말은 어느 물건을 알려 주나요?" 설명 낱말 가운데 물건을 가르는 단서(따끔, 폭신, 묵직, 바스락)를 찾게 한다. 모양만 보고 고르는 학생에게는 "눈을 가렸으니 모양이 아니라 느낌과 소리로 골라요"라고 짚는다.',
            task: '눈을 가린 친구가 말한 느낌을 읽고, 무엇을 만지거나 들었는지 물건 카드를 이어요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              { prompt: '눈을 가리고 만진 느낌을 읽고 알맞은 물건을 이어 보세요.',
                toolOptions: { mode: 'match', topic: '만져서 맞히기', slots: [{ id: 'f1', label: '가시가 빽빽해 따끔해요' }, { id: 'f2', label: '폭신하고 쏙 들어가요' }, { id: 'f3', label: '차갑고 매끈하며 묵직해요' }], cards: [{ id: 'bam', text: '밤송이' }, { id: 'som', text: '솜' }, { id: 'dol', text: '조약돌' }, { id: 'ji', text: '지우개' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'bam', text: '밤송이' }, { id: 'som', text: '솜' }, { id: 'dol', text: '조약돌' }, { id: 'ji', text: '지우개' }, { id: 'sw', text: '수세미' }] } } },
                hints: ['모양은 볼 수 없어요. 느낌 낱말(따끔, 폭신, 묵직) 가운데 물건을 가르는 단서를 먼저 찾아요.'],
                target: { match: { f1: 'bam', f2: 'som', f3: 'dol' } }, difficulty: 0.15 },
              { prompt: '이번에는 다른 물건이에요. 느낌을 읽고 알맞은 물건을 이어 보세요.',
                toolOptions: { mode: 'match', topic: '만져서 맞히기', slots: [{ id: 'f1', label: '쥐면 바삭 부서져요' }, { id: 'f2', label: '눌러도 다시 올라와요' }, { id: 'f3', label: '울퉁불퉁 단단해요' }], cards: [{ id: 'yp', text: '마른 잎' }, { id: 'sp', text: '스펀지' }, { id: 'hd', text: '호두' }, { id: 'pc', text: '연필' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'yp', text: '마른 잎' }, { id: 'sp', text: '스펀지' }, { id: 'hd', text: '호두' }, { id: 'pc', text: '연필' }, { id: 'jy', text: '종이' }] } } },
                target: { match: { f1: 'yp', f2: 'sp', f3: 'hd' } }, difficulty: 0.25 },
              { prompt: '눈을 가리고 들은 소리를 읽고 알맞은 물건을 이어 보세요.',
                toolOptions: { mode: 'match', topic: '들어서 맞히기', slots: [{ id: 'f1', label: '두드리면 둥둥 낮게 울려요' }, { id: 'f2', label: '흔들면 차르르 소리 나요' }, { id: 'f3', label: '구기면 바스락 소리 나요' }], cards: [{ id: 'box', text: '빈 상자' }, { id: 'ssal', text: '쌀이 든 통' }, { id: 'news', text: '신문지' }, { id: 'som', text: '솜' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'box', text: '빈 상자' }, { id: 'ssal', text: '쌀이 든 통' }, { id: 'news', text: '신문지' }, { id: 'som', text: '솜' }, { id: 'bell', text: '작은 방울' }] } } },
                hints: ['소리 낱말(둥둥, 차르르, 바스락)을 소리 내어 읽고, 어떤 물건에서 그런 소리가 날지 떠올려요.'],
                target: { match: { f1: 'box', f2: 'ssal', f3: 'news' } }, difficulty: 0.25,
                predict: { q: '솜은 어떤 소리로 알아맞힐 수 있을까요?', options: ['큰 소리가 나요', '거의 소리가 없어요', '딸랑 소리가 나요'], answer: 1 },
                conclude: '소리가 거의 없는 것도 특징이에요. 솜은 소리보다 만진 느낌으로 알아요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 느낌을 모양 조각으로 나타내기', minutes: 10, tool: 'collage',
            teacher: '"따가운 느낌을 동그라미로 나타내면 어떤가요? 세모로 나타내면요?" 같은 갈색으로 동그라미 판과 세모 판을 함께 보여 주고 어느 쪽이 따가워 보이는지 손을 들게 한다. 뾰족한 모양은 거칠고 따가운 느낌, 둥근 모양은 부드럽고 폭신한 느낌을 준다는 것을 짚는다. 마지막 문항은 손으로 만져 본 실제 물건 하나를 골라 만들게 한다.',
            task: '만진 느낌에 어울리는 모양을 골라 붙여요. 뾰족한지 둥근지, 겹치는지 떨어지는지 생각해요.',
            levels: {
              easy: { shapes: ['circle', 'triangle', 'square', 'star'], colors: ['갈색', '초록', '하양', '노랑', '파랑'], sizes: ['m', 'l'] },
              base: { shapes: ['circle', 'triangle', 'square', 'star', 'semi', 'leaf'] },
              challenge: {},
            },
            items: [
              { prompt: '밤송이의 따가운 느낌을 세모 조각 다섯 개 이상으로 나타내요.', target: { has: [{ shape: 'triangle', min: 5 }] }, difficulty: 0.15,
                hints: ['뾰족한 모양과 둥근 모양 가운데 어느 쪽이 손끝을 찌를 것 같은지 떠올려요.'],
                levels: { challenge: { prompt: '밤송이 전체를 만들어요. 큰 갈색 동그라미 하나 둘레에 세모 가시를 여덟 개 이상 붙이고, 가시 네 개 이상은 동그라미에 겹쳐요.', target: { has: [{ shape: 'circle', color: '갈색', size: 'l', n: 1 }, { shape: 'triangle', min: 8 }], overlap: 4 } } },
                predict: { q: '따가운 느낌에 더 어울리는 모양은 무엇일까요?', options: ['뾰족한 세모', '둥근 동그라미'], answer: 0 },
                conclude: '뾰족한 모양은 따갑고 거친 느낌, 둥근 모양은 부드러운 느낌을 줘요.' },
              { prompt: '솜의 폭신한 느낌을 동그라미 네 개 이상을 서로 겹쳐 나타내요. 겹친 곳이 세 군데 이상이 되게 해요.', target: { has: [{ shape: 'circle', min: 4 }], overlap: 3 }, difficulty: 0.25,
                levels: { challenge: { prompt: '구름처럼 부푼 솜을 만들어요. 하양 동그라미 여섯 개 이상을 크기를 섞어 서로 겹치고, 겹친 곳이 다섯 군데 이상이 되게 해요.', target: { has: [{ shape: 'circle', color: '하양', min: 6 }], overlap: 5 } } } },
              { prompt: '내가 만져 본 물건 하나를 골라, 그 느낌이 드러나게 조각으로 나타내고 점검해요.', target: { selfCheck: ['느낌에 어울리는 모양을 골랐어요', '느낌에 어울리는 색을 골랐어요', '작품에 느낌을 담은 제목을 붙였어요'], minPieces: 4 }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a3', title: '활동 3. 주머니 속 물건을 만지고 느낌 낱말 쓰기 (짝 활동)', minutes: 7, tool: 'mindmap', pair: true,
            teacher: '준비물: 모둠마다 천 주머니 하나에 솜·수세미·조약돌·마른 잎을 넣어 둔다(밤송이는 장갑과 함께 교사 책상에만). "카드 속 친구 말이 아니라 내 손이 알려 주는 말을 써요." 한 사람이 눈을 감고 주머니에 손을 넣어 만지면 짝이 활동지 1번 표에 그 말을 받아 적는다. "부드러워요"에서 멈추면 "얼마나? 무엇처럼?"으로 한 번 더 묻는다.',
            task: '짝과 번갈아 눈을 감고 주머니 속 물건을 만져요. 느낌 낱말을 세 개씩 말하고, 짝이 활동지에 받아 적어요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              { prompt: '눈을 감고 주머니 속 물건 하나를 만져, 느낌 낱말 세 개를 짝에게 말한 뒤 "다 했어요"를 누르세요.', toolOptions: { mode: 'match', topic: '주머니 속 물건', slots: [{ id: 'f1', label: '첫째 낱말' }, { id: 'f2', label: '둘째 낱말' }, { id: 'f3', label: '셋째 낱말' }], cards: [{ id: 'q1', text: '따끔' }, { id: 'q2', text: '폭신' }, { id: 'q3', text: '묵직' }, { id: 'q4', text: '바삭' }] }, free: true, talk: true, difficulty: 0 },
              { prompt: '역할을 바꾸어 짝이 만진 느낌을 활동지 1번 표에 받아 적은 뒤 "다 했어요"를 누르세요.', toolOptions: { mode: 'match', topic: '짝이 만진 물건', slots: [{ id: 'f1', label: '만진 느낌' }, { id: 'f2', label: '들린 소리' }], cards: [{ id: 'q1', text: '거칠어요' }, { id: 'q2', text: '매끈해요' }, { id: 'q3', text: '소리 없음' }] }, free: true, talk: true, difficulty: 0 },
              { prompt: '눈을 뜨고 물건을 꺼내 본 뒤, 눈으로 볼 때와 만질 때 다르게 안 점 하나를 짝과 말하고 "다 했어요"를 누르세요.', toolOptions: { mode: 'match', topic: '꺼내 본 물건', slots: [{ id: 'f1', label: '만져서 안 것' }, { id: 'f2', label: '보고 안 것' }], cards: [{ id: 'q1', text: '느낌' }, { id: 'q2', text: '색' }] }, free: true, talk: true, difficulty: 0 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"같은 솜인데 친구는 어떤 모양을 골랐나요?" 둥근 모양을 고른 작품과 다른 모양을 고른 작품을 견주어 왜 그렇게 골랐는지 말하게 한다. 출구 1번에서 별 대신 동그라미를 붙인 학생은 다음 시간 시작에 밤송이 사진과 함께 다시 본다.',
        exitTicket: [
          { type: 'tool', tool: 'collage', options: { shapes: ['circle', 'star', 'square'], colors: ['초록', '노랑', '갈색'] }, prompt: '선인장 가시의 따끔한 느낌을 별 조각 세 개 이상으로 나타내 보세요.', target: { has: [{ shape: 'star', min: 3 }] }, difficulty: 0.15 },
          { type: 'choice', prompt: '부드럽고 폭신한 느낌에 가장 어울리는 모양은 무엇인가요?', options: ['뾰족한 세모', '둥근 동그라미', '각진 네모'], answer: 1, difficulty: 0.1, explain: '둥근 모양은 모서리가 없어 부드럽고 폭신한 느낌을 줘요.' },
          { type: 'short', prompt: '눈을 가리고 만진 물건 하나의 느낌을 낱말 세 개로 쓰세요.' },
        ],
      },
    ],
    worksheet: {
      title: '만진 느낌을 모양으로',
      items: [
        { type: 'table', prompt: '눈을 가리고 만지거나 들은 물건의 느낌을 쓰세요.', columns: ['물건', '만진 느낌', '들린 소리'], cells: [['솜', '', ''], ['', '', ''], ['', '', '']] },
        { type: 'choice', prompt: '"가시가 빽빽하고 손끝이 따끔해요"는 어느 물건일까요?', options: ['솜', '밤송이', '조약돌', '스펀지'], answer: '밤송이' },
        { type: 'figure', wide: true, prompt: '아래 조각들이 주는 느낌을 그림 밑에 쓰세요.', tool: 'collage', options: { printColors: false }, figures: [
          { state: { pieces: [{ shape: 'triangle', color: '갈색', size: 'm', x: 220, y: 200, r: 0 }, { shape: 'triangle', color: '갈색', size: 'm', x: 280, y: 160, r: 45 }, { shape: 'triangle', color: '갈색', size: 'm', x: 340, y: 200, r: 90 }] }, caption: '느낌: ________' },
          { state: { pieces: [{ shape: 'circle', color: '하양', size: 'l', x: 240, y: 200, r: 0 }, { shape: 'circle', color: '하양', size: 'l', x: 320, y: 200, r: 0 }, { shape: 'circle', color: '하양', size: 'm', x: 280, y: 160, r: 0 }] }, caption: '느낌: ________' }], answer: '따가워요(거칠어요), 폭신해요(부드러워요)' },
        { type: 'draw', prompt: '조약돌의 매끈하고 단단한 느낌을 모양으로 그리세요.' },
      ],
      easy: {
        note: '뾰족한 모양은 따가운 느낌, 둥근 모양은 부드러운 느낌이에요.',
        items: [
          { type: 'choice', prompt: '"폭신하고 손가락이 쏙 들어가요"는 어느 물건일까요?', options: ['솜', '조약돌'], answer: '솜' },
          { type: 'choice', prompt: '따가운 느낌에 어울리는 모양에 ○ 하세요.', options: ['세모', '동그라미'], answer: '세모' },
          { type: 'draw', prompt: '솜의 폭신한 느낌을 모양으로 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞게 이은 카드에 초록 테두리가 생기고, 색종이는 모양 네 가지·크기 두 가지만 나와요.',
      base: '이을 수 없는 물건 카드가 하나 섞여 있고, 모양 여섯 가지를 써요.',
      challenge: '이을 수 없는 물건 카드가 둘 섞여 있어요. 색종이는 모든 모양 가운데 골라, 가시 여덟 개 넘게 박힌 밤송이·여섯 덩이가 겹친 솜처럼 조각과 겹침이 더 많은 작품을 만들어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① "부드러워요"처럼 한 낱말로 끝낸다 → "얼마나? 무엇처럼?"으로 비유를 이끈다. ② 느낌과 모양을 잇지 못하고 좋아하는 모양만 고른다 → 같은 색으로 세모 판과 동그라미 판을 견주어 보인다. ③ 눈을 가린 활동에서 모양을 몰래 보고 맞힌다 → 소리 문항으로 귀에 집중하게 한다. 준비물: 모둠마다 천 주머니 하나와 솜·수세미·조약돌·마른 잎(활동 3). 실제 밤송이 대신 칫솔·수세미를 써도 따가운 느낌을 줄 수 있다.',
  }));

  // ───────────── 4차시 (확장) ─────────────
  lessons.push(lesson(4, S3, {
    title: '가까이서 본 무늬와 멀리서 본 모양 견주기',
    objective: '같은 대상을 가까이와 멀리서 살펴 보이는 특징이 어떻게 달라지는지 나누어 말하고, 가까이서 찾은 되풀이 무늬를 조각으로 나타낼 수 있다.',
    illustration: {
      prompt: art('a child looking through a paper magnifying glass at tree bark while a whole round tree stands far away on a hill'),
      scene: scene([
        { motif: 'sun', x: 404, y: 60, s: 0.8 }, { motif: 'cloud', x: 120, y: 54 }, { motif: 'mountain', x: 360, y: 200, s: 0.9 },
        { motif: 'hills', y: 214 }, { motif: 'tree', x: 110, y: 220, s: 1.3 }, { motif: 'tree', x: 300, y: 214, s: 0.6 },
        { motif: 'text', x: 240, y: 140, text: '가까이 보면, 멀리서 보면', size: 22 },
      ]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 7,
        teacher: '창밖의 나무를 가리키며 "저 나무는 어떤 모양인가요?"라고 묻는다. "둥근 초록 덩어리요"가 나오면, 화분이나 나뭇가지를 가까이 가져와 "가까이 보니 무엇이 새로 보이나요?"라고 묻는다. "멀리서 본 둥근 덩어리 안에 이렇게 많은 잎맥이 숨어 있었네요." 같은 대상도 보는 거리에 따라 보이는 것이 달라진다는 것을 짚는다. 시연 단추로 벽돌 두 장이 한 묶음으로 되풀이되는 무늬를 보여 준다.',
        student: '창밖의 나무와 교실 안 나뭇가지를 견주어, 무엇이 다르게 보이는지 말해 봅시다.',
        demo: { tool: 'collage', options: { shapes: ['rect'], colors: ['빨강', '갈색'] }, sequence: [{ repeat: { times: 3, unit: 2 }, has: [{ shape: 'rect', color: '빨강', min: 3 }, { shape: 'rect', color: '갈색', min: 3 }] }] },
      },
      {
        id: 'main', title: '전개', minutes: 25,
        activities: [
          {
            id: 'a1', title: '활동 1. 가까이서 보면, 멀리서 보면', minutes: 9, tool: 'mindmap',
            teacher: '"이 카드는 운동장 끝에서도 보일까요, 코앞에 대야 보일까요?" 손을 쭉 뻗어 멀리 두고 보는 몸짓과 얼굴 가까이 대고 보는 몸짓을 함께 해 보게 한다. 멀리서는 전체 모양과 큰 색 덩어리가, 가까이서는 결·무늬·작은 부분이 보인다는 기준을 세운다. "나무는 해마다 자라요"는 보이는 모습이 아니라 아는 사실이라 넣지 않는다.',
            task: '카드를 읽고, 멀리서 보아도 보이는 것인지 가까이 다가가야 보이는 것인지 나누어요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '나무를 살핀 카드를 가까이서 보면과 멀리서 보면으로 나누어 보세요.',
                toolOptions: { topic: '나무', slots: [{ id: 'near', label: '가까이서 보면' }, { id: 'far', label: '멀리서 보면' }], cards: [{ id: 't1', text: '둥근 초록 덩어리 같아요' }, { id: 't2', text: '줄기가 한 줄의 선 같아요' }, { id: 't3', text: '껍질이 거북 등처럼 갈라졌어요' }, { id: 't4', text: '잎마다 잎맥이 보여요' }, { id: 't5', text: '줄기에 개미가 기어가요' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 't1', text: '둥근 초록 덩어리 같아요' }, { id: 't2', text: '줄기가 한 줄의 선 같아요' }, { id: 't3', text: '껍질이 거북 등처럼 갈라졌어요' }, { id: 't4', text: '잎마다 잎맥이 보여요' }, { id: 't5', text: '줄기에 개미가 기어가요' }, { id: 'tx', text: '나무는 해마다 자라요' }] } } },
                hints: ['운동장 끝에 서서 보아도 보이는지, 코앞에 대야 보이는지 카드마다 떠올려요.'],
                target: { sort: { near: ['t3', 't4', 't5'], far: ['t1', 't2'] } }, difficulty: 0.2 },
              { prompt: '벽돌담을 살핀 카드를 가까이서 보면과 멀리서 보면으로 나누어 보세요.',
                toolOptions: { topic: '벽돌담', slots: [{ id: 'near', label: '가까이서 보면' }, { id: 'far', label: '멀리서 보면' }], cards: [{ id: 'b1', text: '빨간 벽 한 면처럼 보여요' }, { id: 'b2', text: '창문이 몇 개인지 보여요' }, { id: 'b3', text: '벽돌 사이에 회색 줄이 있어요' }, { id: 'b4', text: '벽돌이 한 줄씩 엇갈려 쌓였어요' }, { id: 'b5', text: '벽돌 겉에 작은 구멍이 있어요' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'b1', text: '빨간 벽 한 면처럼 보여요' }, { id: 'b2', text: '창문이 몇 개인지 보여요' }, { id: 'b3', text: '벽돌 사이에 회색 줄이 있어요' }, { id: 'b4', text: '벽돌이 한 줄씩 엇갈려 쌓였어요' }, { id: 'b5', text: '벽돌 겉에 작은 구멍이 있어요' }, { id: 'bx', text: '벽돌은 흙을 구워 만들어요' }] } } },
                hints: ['전체 모양·큰 색 덩어리는 어느 거리에서, 결·작은 구멍은 어느 거리에서 보이는지 따져요.'],
                target: { sort: { near: ['b3', 'b4', 'b5'], far: ['b1', 'b2'] } }, difficulty: 0.25 },
              { prompt: '모래밭을 살핀 카드를 가까이서 보면과 멀리서 보면으로 나누어 보세요.',
                toolOptions: { topic: '모래밭', slots: [{ id: 'near', label: '가까이서 보면' }, { id: 'far', label: '멀리서 보면' }], cards: [{ id: 'r1', text: '누런 땅 한 면 같아요' }, { id: 'r2', text: '발자국이 길게 이어져 보여요' }, { id: 'r3', text: '알갱이 색이 여러 가지예요' }, { id: 'r4', text: '반짝이는 알갱이가 섞여 있어요' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'r1', text: '누런 땅 한 면 같아요' }, { id: 'r2', text: '발자국이 길게 이어져 보여요' }, { id: 'r3', text: '알갱이 색이 여러 가지예요' }, { id: 'r4', text: '반짝이는 알갱이가 섞여 있어요' }, { id: 'rx', text: '모래는 돌이 부서진 거예요' }] } } },
                target: { sort: { near: ['r3', 'r4'], far: ['r1', 'r2'] } }, difficulty: 0.3,
                predict: { q: '멀리서 한 가지 색으로 보이는 모래는 가까이서도 한 가지 색일까요?', options: ['한 가지 색이에요', '여러 색이 섞여 있어요'], answer: 1 },
                conclude: '멀리서는 섞인 색이 한 가지로 보이고, 가까이 다가가야 알갱이마다 다른 색이 보여요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 가까이서 찾은 되풀이 무늬 만들기', minutes: 9, tool: 'collage',
            teacher: '"벽돌담을 가까이서 보면 무엇이 되풀이되나요? 한 묶음을 손가락으로 감싸 볼까요?" 묶음을 먼저 정하고 같은 차례로 이어 붙이게 한다. 비늘 문항은 위에서 아래로 쌓는다는 것을 짚는다. 마지막 문항에서 "멀리서 보면 어떻게 보일까요?"를 짝에게 말하게 하여 오늘의 두 거리를 잇는다.',
            task: '가까이서 찾은 무늬를 떠올려, 한 묶음을 정하고 똑같은 차례로 되풀이해 붙여요.',
            levels: {
              easy: { shapes: ['rect', 'semi', 'circle', 'square'], colors: ['빨강', '갈색', '파랑', '하양', '초록'], sizes: ['m'] },
              base: { shapes: ['rect', 'semi', 'circle', 'square', 'triangle', 'leaf'], colors: ['빨강', '주황', '노랑', '초록', '파랑', '갈색', '검정', '하양'] },
              challenge: {},
            },
            items: [
              { prompt: '벽돌담 무늬를 만들어요. 빨간 긴 네모와 갈색 긴 네모를 한 묶음으로, 왼쪽에서 오른쪽으로 세 번 이상 되풀이해요.', target: { repeat: { times: 3, unit: 2 }, has: [{ shape: 'rect', color: '빨강', min: 3 }, { shape: 'rect', color: '갈색', min: 3 }] }, difficulty: 0.25,
                hints: ['맨 앞 몇 조각이 한 묶음인지 손가락으로 감싸 정하고, 그 차례 그대로 이어 붙여요.'],
                levels: { challenge: { prompt: '줄눈이 보이는 벽돌담을 만들어요. 빨강·갈색·하양 긴 네모 세 조각을 한 묶음으로, 왼쪽에서 오른쪽으로 세 번 이상 되풀이해요.', target: { repeat: { times: 3, unit: 3 }, has: [{ shape: 'rect', color: '빨강', min: 3 }, { shape: 'rect', color: '갈색', min: 3 }, { shape: 'rect', color: '하양', min: 3 }] } } } },
              { prompt: '물고기 비늘 무늬를 만들어요. 파랑 반원과 하양 반원을 한 묶음으로, 위에서 아래로 세 번 이상 되풀이해요.', target: { repeat: { times: 3, unit: 2, axis: 'y' }, has: [{ shape: 'semi', color: '파랑', min: 3 }, { shape: 'semi', color: '하양', min: 3 }] }, difficulty: 0.3,
                levels: { challenge: { prompt: '빛나는 물고기 비늘을 만들어요. 파랑·하양·초록 반원 세 조각을 한 묶음으로, 위에서 아래로 세 번 이상 되풀이해요.', target: { repeat: { times: 3, unit: 3, axis: 'y' }, has: [{ shape: 'semi', color: '파랑', min: 3 }, { shape: 'semi', color: '하양', min: 3 }, { shape: 'semi', color: '초록', min: 3 }] } } } },
              { prompt: '가까이서 살핀 나만의 무늬(옷감, 실내화 밑창 등)를 되풀이 무늬로 만들고 점검해요.', target: { repeat: { times: 3 }, selfCheck: ['가까이서 살핀 무늬를 하나 골랐어요', '같은 묶음이 되풀이되게 붙였어요', '멀리서 보면 어떻게 보일지 짝에게 말했어요'], minPieces: 6 }, difficulty: 0.2 },
            ],
          },
          {
            id: 'a3', title: '활동 3. 교실 물건을 두 거리에서 직접 보기 (짝 활동)', minutes: 7, tool: 'mindmap', pair: true,
            teacher: '준비물: 모둠마다 무늬가 있는 실물 하나(실내화, 옷감 조각, 무늬 있는 공책 표지)와 종이 돋보기 틀. "카드가 아니라 내 눈으로 두 거리를 견줘요." 한 사람이 물건을 교실 뒤 벽에 대고 들고, 짝은 교실 앞에서 본 것을 먼저 쓴 뒤 다가가 코앞에서 본 것을 쓴다. "멀리서는 안 보였는데 가까이서 보인 것"을 꼭 하나 찾게 한다.',
            task: '짝이 든 물건을 교실 앞에서 한 번, 코앞에서 한 번 보고 활동지 1번 표에 써요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              { prompt: '짝이 교실 뒤에서 든 물건을 교실 앞에서 보고, 보이는 것 하나를 활동지 "멀리서 보면" 칸에 쓴 뒤 "다 했어요"를 누르세요.', toolOptions: { topic: '모둠 물건', slots: [{ id: 'near', label: '가까이서 보면' }, { id: 'far', label: '멀리서 보면' }], cards: [{ id: 'q1', text: '전체 모양' }, { id: 'q2', text: '큰 색 덩어리' }] }, free: true, talk: true, difficulty: 0 },
              { prompt: '다가가 종이 돋보기 틀로 코앞에서 보고, 멀리서는 안 보이던 것 두 가지를 "가까이서 보면" 칸에 쓴 뒤 "다 했어요"를 누르세요.', toolOptions: { topic: '모둠 물건', slots: [{ id: 'near', label: '가까이서 보면' }, { id: 'far', label: '멀리서 보면' }], cards: [{ id: 'q1', text: '결' }, { id: 'q2', text: '작은 무늬' }, { id: 'q3', text: '작은 구멍' }] }, free: true, talk: true, difficulty: 0 },
              { prompt: '역할을 바꾸어 다른 물건으로 한 번 더 살피고, 둘이 찾은 것을 견주어 말한 뒤 "다 했어요"를 누르세요.', toolOptions: { topic: '짝의 물건', slots: [{ id: 'near', label: '가까이서 보면' }, { id: 'far', label: '멀리서 보면' }], cards: [{ id: 'q1', text: '짝이 찾은 것' }] }, free: true, talk: true, difficulty: 0 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"멀리서 보면 무늬가 어떻게 보일까요?" 학생 작품 하나를 화면에서 작게 줄여 보여 주고, 무늬가 한 덩어리 색처럼 보이는 것을 확인한다. 출구 1번에서 "끝이 뾰족한 풀잎"을 멀리서 보면에 넣은 학생에게는 운동장 끝에서 풀잎 끝이 보이는지 되묻는다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '잔디밭', slots: [{ id: 'near', label: '가까이서 보면' }, { id: 'far', label: '멀리서 보면' }], cards: [{ id: 'e1', text: '초록 융단처럼 고르게 보여요' }, { id: 'e2', text: '풀잎마다 끝이 뾰족해요' }, { id: 'e3', text: '풀 사이에 작은 꽃이 숨어 있어요' }] }, prompt: '잔디밭을 살핀 카드를 가까이서 보면과 멀리서 보면으로 나누어 보세요.', target: { sort: { near: ['e2', 'e3'], far: ['e1'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '멀리서는 잘 보이지 않고 가까이 다가가야 보이는 것은 무엇인가요?', options: ['산의 전체 모양', '나뭇잎의 잎맥', '건물의 높이'], answer: 1, difficulty: 0.15, explain: '잎맥처럼 작은 무늬는 가까이 다가가야 보여요. 전체 모양과 높이는 멀리서 더 잘 보여요.' },
          { type: 'mood', prompt: '오늘 가까이·멀리 살펴보기는 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '가까이서, 멀리서',
      items: [
        { type: 'table', prompt: '같은 대상을 멀리서 볼 때와 가까이서 볼 때 보이는 것을 쓰세요.', columns: ['대상', '멀리서 보면', '가까이서 보면'], cells: [['나무', '', ''], ['우리 학교 건물', '', ''], ['', '', '']] },
        { type: 'figure', wide: true, prompt: '되풀이되는 묶음을 ○로 묶고, 다음에 올 두 조각을 그리세요.', tool: 'collage', options: { printColors: false }, figures: [{ state: { pieces: [{ shape: 'rect', color: '빨강', size: 'm', x: 80, y: 200, r: 0 }, { shape: 'rect', color: '갈색', size: 'm', x: 160, y: 200, r: 0 }, { shape: 'rect', color: '빨강', size: 'm', x: 240, y: 200, r: 0 }, { shape: 'rect', color: '갈색', size: 'm', x: 320, y: 200, r: 0 }] }, caption: '빨강 · 갈색 · 빨강 · 갈색 · …' }], answer: '빨강 긴 네모, 갈색 긴 네모' },
        { type: 'choice', prompt: '멀리서 보아야 더 잘 보이는 것에 ○ 하세요.', options: ['산의 전체 모양', '모래 알갱이의 색', '나무껍질의 갈라진 무늬', '개미의 다리'], answer: '산의 전체 모양' },
        { type: 'draw', prompt: '동그란 돋보기 칸 안에, 가까이서 본 무늬 하나를 크게 그리세요.' },
      ],
      easy: {
        note: '운동장 끝에서도 보이면 멀리서, 코앞에 대야 보이면 가까이서예요.',
        items: [
          { type: 'table', prompt: '나무를 멀리서 볼 때와 가까이서 볼 때를 쓰세요.', columns: ['멀리서 보면', '가까이서 보면'], cells: [['', '']] },
          { type: 'choice', prompt: '가까이 다가가야 보이는 것에 ○ 하세요.', options: ['나뭇잎의 잎맥', '산의 모양'], answer: '나뭇잎의 잎맥' },
          { type: 'draw', prompt: '가까이서 본 무늬 하나를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 맞는 칸에 놓으면 초록 테두리가 생기고, 색종이는 보통 크기 한 가지만 써서 되풀이 차례에 집중해요.',
      base: '스스로 나눈 뒤 확인하고, 모양 여섯 가지·색 여덟 가지로 무늬를 만들어요.',
      challenge: '보이는 모습이 아닌 지식 카드가 섞여 있어 남겨야 해요. 무늬는 두 조각이 아니라 세 조각을 한 묶음으로 정해 되풀이해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 아는 사실("나무는 자라요")을 본 모습으로 여긴다. ② 멀리서 본 한 가지 색을 그 대상의 색 전부로 여긴다 → 모래·잔디처럼 가까이서 여러 색이 섞인 예를 보인다. ③ 되풀이 무늬에서 묶음 차례를 중간에 바꾼다 → 묶음을 손가락으로 감싸 견주게 한다. 돋보기가 있으면 모둠마다 하나씩 주어 나무껍질·천 조각을 실제로 보게 한다.',
  }));

  // ───────────── 5차시 (핵심) ─────────────
  lessons.push(lesson(5, S3, {
    title: '컵을 위·옆·아래에서 살펴 모습 나타내기',
    objective: '물건을 위·옆·아래에서 살펴 방향마다 다르게 보이는 모습을 말하고, 한 방향에서 본 모습을 색종이 조각으로 나타낼 수 있다.',
    illustration: {
      prompt: art('a mug, a party hat and a plastic bottle each shown from the top, the side and the bottom in three neat rows'),
      scene: scene([
        { motif: 'sun', x: 410, y: 56, s: 0.7 }, { motif: 'cloud', x: 100, y: 48 }, { motif: 'hills', y: 212 },
        { motif: 'house', x: 120, y: 218, s: 0.9 }, { motif: 'tree', x: 380, y: 218 },
        { motif: 'text', x: 240, y: 140, text: '위에서, 옆에서, 아래에서', size: 22 },
      ]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '머그컵을 학생 눈높이에서 들고 "이 컵을 그려 보세요."라고 하면 대부분 옆모습을 그린다. 컵을 머리 위로 들어 바닥을 보여 주고, 다시 책상에 내려 위에서 들여다보게 한다. "같은 컵인데 무슨 모양으로 보였나요?" 옆에서는 네모, 위에서는 겹친 동그라미, 아래에서는 꽉 찬 동그라미. "한쪽에서 본 모습이 컵의 전부일까요?"로 오늘의 질문을 연다. 시연 단추로 위에서 본 컵을 조각으로 만드는 모습을 보여 준다.',
        student: '선생님이 든 컵을 위·옆·아래에서 보고, 각각 어떤 모양으로 보이는지 말해 봅시다.',
        demo: { tool: 'collage', options: { shapes: ['circle'], colors: ['하양', '파랑'] }, sequence: [{ has: [{ shape: 'circle', size: 'l', n: 1 }, { shape: 'circle', size: 'm', n: 1 }], overlap: 1 }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 방향마다 보이는 모습 잇기', minutes: 9, tool: 'mindmap',
            teacher: '"위에서 내려다보면 컵의 입구와 안쪽 바닥이 함께 보여요. 그래서 동그라미가 두 겹이에요." 실제 컵이나 페트병을 모둠마다 돌려 보게 하고 카드를 고른다. 옆모습만 떠올려 모든 방향을 같은 모양으로 고르는 학생에게 물건을 직접 머리 위로 들어 보게 한다.',
            task: '물건을 위·옆·아래에서 보았을 때의 모습 카드를 알맞은 방향과 이어요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              { prompt: '머그컵을 세 방향에서 본 모습이에요. 방향과 모습 카드를 이어 보세요.',
                toolOptions: { mode: 'match', topic: '머그컵', slots: [{ id: 'top', label: '위에서 보면' }, { id: 'side', label: '옆에서 보면' }, { id: 'bot', label: '아래에서 보면' }], cards: [{ id: 'c1', text: '동그라미 안에 동그라미가 또 보여요' }, { id: 'c2', text: '네모 옆에 손잡이 고리가 붙어 보여요' }, { id: 'c3', text: '꽉 찬 동그라미 하나만 보여요' }, { id: 'cx', text: '세모 세 개가 보여요' }] },
                hints: ['물건을 머리 위로 들어 올려다보면 아래, 책상에 놓고 내려다보면 위, 눈높이에서 보면 옆이에요.'],
                target: { match: { top: 'c1', side: 'c2', bot: 'c3' } }, difficulty: 0.2,
                predict: { q: '위에서 본 컵과 옆에서 본 컵은 같은 모양일까요?', options: ['같아요', '달라요'], answer: 1 },
                conclude: '한 방향에서 본 모습은 물건의 한 부분이에요. 방향을 바꾸면 다른 모양이 보여요.' },
              { prompt: '생일 고깔모자를 세 방향에서 본 모습이에요. 방향과 모습 카드를 이어 보세요.',
                toolOptions: { mode: 'match', topic: '고깔모자', slots: [{ id: 'top', label: '위에서 보면' }, { id: 'side', label: '옆에서 보면' }, { id: 'bot', label: '아래에서 보면' }], cards: [{ id: 'k1', text: '동그라미 가운데에 뾰족한 점이 있어요' }, { id: 'k2', text: '세모처럼 보여요' }, { id: 'k3', text: '속이 빈 동그란 구멍이 보여요' }, { id: 'kx', text: '긴 네모가 보여요' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'k1', text: '동그라미 가운데에 뾰족한 점이 있어요' }, { id: 'k2', text: '세모처럼 보여요' }, { id: 'k3', text: '속이 빈 동그란 구멍이 보여요' }, { id: 'kx', text: '긴 네모가 보여요' }, { id: 'ky', text: '꽉 찬 네모가 보여요' }] } } },
                hints: ['고깔모자를 쓴 친구를 떠올려요. 내려다볼 때, 마주 볼 때, 모자를 벗겨 안을 올려다볼 때 무엇이 보일까요?'],
                target: { match: { top: 'k1', side: 'k2', bot: 'k3' } }, difficulty: 0.25 },
              { prompt: '물이 든 페트병을 세 방향에서 본 모습이에요. 방향과 모습 카드를 이어 보세요.',
                toolOptions: { mode: 'match', topic: '페트병', slots: [{ id: 'top', label: '위에서 보면' }, { id: 'side', label: '옆에서 보면' }, { id: 'bot', label: '아래에서 보면' }], cards: [{ id: 'b1', text: '가운데에 작은 뚜껑 동그라미가 보여요' }, { id: 'b2', text: '길쭉하고 위로 갈수록 좁아져요' }, { id: 'b3', text: '바닥에 꽃잎 모양 홈이 보여요' }, { id: 'bx', text: '네모 안에 세모가 보여요' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'b1', text: '가운데에 작은 뚜껑 동그라미가 보여요' }, { id: 'b2', text: '길쭉하고 위로 갈수록 좁아져요' }, { id: 'b3', text: '바닥에 꽃잎 모양 홈이 보여요' }, { id: 'bx', text: '네모 안에 세모가 보여요' }, { id: 'by', text: '둥근 테두리만 보여요' }] } } },
                target: { match: { top: 'b1', side: 'b2', bot: 'b3' } }, difficulty: 0.3 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 한 방향에서 본 모습 만들기', minutes: 10, tool: 'collage',
            teacher: '"위에서 본 컵은 동그라미가 몇 개였나요? 큰 것과 작은 것이 어떻게 놓였나요?" 겹쳐 놓기를 떠올리게 한다. 옆에서 본 머그컵에서 손잡이를 컵 가운데에 붙이는 학생에게는 실제 컵을 옆에서 보며 손잡이가 몸통 밖으로 나와 있는지 확인하게 한다. 문항마다 만든 뒤 "이건 어느 방향에서 본 모습이에요"라고 짝에게 말하게 한다.',
            task: '문제에서 말한 방향에서 본 모습을 떠올리고, 그 모양대로 조각을 골라 놓아요.',
            levels: {
              easy: { shapes: ['circle', 'square', 'semi', 'triangle', 'star'], colors: ['하양', '파랑', '노랑', '빨강', '초록'], sizes: ['s', 'm', 'l'] },
              base: { shapes: ['circle', 'square', 'semi', 'triangle', 'star', 'rect', 'leaf'] },
              challenge: {},
            },
            items: [
              { prompt: '위에서 본 컵을 만들어요. 큰 동그라미 하나 위에 보통 동그라미 하나를 겹쳐 놓아요.', target: { has: [{ shape: 'circle', size: 'l', n: 1 }, { shape: 'circle', size: 'm', n: 1 }], overlap: 1, pieces: { n: 2 } }, difficulty: 0.15,
                hints: ['컵을 책상에 놓고 내려다볼 때 입구와 안쪽 바닥이 어떻게 겹쳐 보였는지 떠올려요.'],
                levels: { challenge: { prompt: '위에서 본 머그컵을 만들어요. 큰 동그라미 위에 보통 동그라미를 겹치고, 몸통 밖에 손잡이가 될 작은 반원 하나를 붙여 세 조각만 써요.', target: { has: [{ shape: 'circle', size: 'l', n: 1 }, { shape: 'circle', size: 'm', n: 1 }, { shape: 'semi', size: 's', n: 1 }], overlap: 1, pieces: { n: 3 } } } } },
              { prompt: '옆에서 본 머그컵을 만들어요. 큰 네모 하나와 손잡이가 될 작은 반원 하나만 써요.', target: { has: [{ shape: 'square', size: 'l', n: 1 }, { shape: 'semi', size: 's', n: 1 }], pieces: { n: 2 } }, difficulty: 0.2,
                levels: { challenge: { prompt: '김이 나는 머그컵을 옆에서 본 모습으로 만들어요. 큰 네모 하나, 작은 반원 손잡이 하나, 작은 나뭇잎 김 두 개, 모두 네 조각만 써요.', target: { has: [{ shape: 'square', size: 'l', n: 1 }, { shape: 'semi', size: 's', n: 1 }, { shape: 'leaf', size: 's', n: 2 }], pieces: { n: 4 } } } } },
              { prompt: '옆에서 본 고깔모자를 만들어요. 큰 세모 하나를 놓고 꼭대기에 작은 별 하나를 겹쳐요.', target: { has: [{ shape: 'triangle', size: 'l', n: 1 }, { shape: 'star', size: 's', n: 1 }], overlap: 1, pieces: { n: 2 } }, difficulty: 0.2,
                levels: { challenge: { prompt: '위에서 내려다본 고깔모자를 만들어요. 큰 동그라미 가운데에 작은 별 꼭지를 겹치고, 테두리에 작은 동그라미 방울 셋을 붙여 다섯 조각만 써요.', target: { has: [{ shape: 'circle', size: 'l', n: 1 }, { shape: 'star', size: 's', n: 1 }, { shape: 'circle', size: 's', n: 3 }], overlap: 1, pieces: { n: 5 } } } } },
            ],
          },
          {
            id: 'a3', title: '활동 3. 모둠 물건을 세 방향에서 직접 보고 그리기 (짝 활동)', minutes: 7, tool: 'mindmap', pair: true,
            teacher: '준비물: 모둠마다 머그컵 하나와 필통 하나. "카드 속 컵 말고 우리 모둠 컵을 직접 봐요." 한 사람이 컵을 책상 위, 눈높이, 머리 위로 차례로 들어 주고 짝이 활동지 1번 표에 방향마다 본 모양을 그린다. 옆모습만 세 번 그리는 학생에게는 "지금 컵 바닥이 보이나요?"라고 묻는다.',
            task: '짝이 컵과 필통을 위·옆·아래로 돌려 보여 주면, 방향마다 본 모양을 활동지 1번 표에 그려요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              { prompt: '짝이 책상에 놓은 컵을 내려다보고, 위에서 본 모양을 활동지 표에 그린 뒤 "다 했어요"를 누르세요.', toolOptions: { mode: 'match', topic: '모둠 컵', slots: [{ id: 'top', label: '위에서 보면' }, { id: 'side', label: '옆에서 보면' }, { id: 'bot', label: '아래에서 보면' }], cards: [{ id: 'q1', text: '내가 본 모양' }] }, free: true, talk: true, difficulty: 0 },
              { prompt: '짝이 컵을 눈높이와 머리 위로 들어 주면, 옆과 아래에서 본 모양을 표에 그린 뒤 "다 했어요"를 누르세요.', toolOptions: { mode: 'match', topic: '모둠 컵', slots: [{ id: 'top', label: '위에서 보면' }, { id: 'side', label: '옆에서 보면' }, { id: 'bot', label: '아래에서 보면' }], cards: [{ id: 'q1', text: '옆 모양' }, { id: 'q2', text: '아래 모양' }] }, free: true, talk: true, difficulty: 0 },
              { prompt: '역할을 바꾸어 필통을 세 방향에서 보고, 컵과 가장 다르게 보인 방향을 짝에게 말한 뒤 "다 했어요"를 누르세요.', toolOptions: { mode: 'match', topic: '모둠 필통', slots: [{ id: 'top', label: '위에서 보면' }, { id: 'side', label: '옆에서 보면' }, { id: 'bot', label: '아래에서 보면' }], cards: [{ id: 'q1', text: '가장 다른 방향' }] }, free: true, talk: true, difficulty: 0 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"휴지심을 위에서 보면 어떤 모양일까요? 옆에서 보면요?" 실제 휴지심을 돌려 보여 주며 출구 질문으로 옮긴다. 출구 2번에서 "한 방향이면 충분하다"를 고른 학생에게는 오늘 컵의 세 모습을 다시 띄워 보여 준다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '휴지심', slots: [{ id: 'top', label: '위에서 보면' }, { id: 'side', label: '옆에서 보면' }], cards: [{ id: 'e1', text: '가운데가 뚫린 동그란 고리예요' }, { id: 'e2', text: '긴 네모처럼 보여요' }, { id: 'e3', text: '별 모양이에요' }] }, prompt: '휴지심을 두 방향에서 본 모습이에요. 방향과 모습 카드를 이어 보세요.', target: { match: { top: 'e1', side: 'e2' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '물건을 그리기 전에 여러 방향에서 살펴보면 좋은 까닭은 무엇인가요?', options: ['한 방향에서 본 모습이 물건의 전부라서', '방향마다 다른 모습이 보여 물건을 더 잘 알 수 있어서', '그림을 빨리 끝낼 수 있어서'], answer: 1, difficulty: 0.15, explain: '컵도 위·옆·아래에서 다른 모양으로 보였어요. 여러 방향에서 보면 물건을 더 잘 알게 돼요.' },
          { type: 'short', prompt: '내 필통을 위에서 본 모습과 옆에서 본 모습을 각각 한 문장으로 쓰세요.' },
        ],
      },
    ],
    worksheet: {
      title: '위·옆·아래에서 보기',
      items: [
        { type: 'table', prompt: '물건을 위·옆·아래에서 본 모습을 쓰거나 그리세요.', columns: ['물건', '위에서', '옆에서', '아래에서'], cells: [['컵', '', '', ''], ['필통', '', '', ''], ['', '', '', '']] },
        { type: 'figure', prompt: '이 그림은 컵을 어느 방향에서 본 모습일까요? 그림 밑에 쓰세요.', tool: 'collage', figures: [{ state: { pieces: [{ shape: 'circle', color: '하양', size: 'l', x: 280, y: 200, r: 0 }, { shape: 'circle', color: '파랑', size: 'm', x: 280, y: 200, r: 0 }] }, caption: '_____에서 본 모습' }], answer: '위에서 본 모습(입구와 안쪽 바닥이 겹쳐 보여요)' },
        { type: 'choice', prompt: '옆에서 보면 세모처럼 보이는 물건에 ○ 하세요.', options: ['고깔모자', '머그컵', '공', '휴지심'], answer: '고깔모자' },
        { type: 'draw', prompt: '내 물건 하나를 골라 위에서 본 모습과 옆에서 본 모습을 나란히 그리세요.' },
      ],
      easy: {
        note: '물건을 머리 위로 들면 아래, 책상에 놓고 내려다보면 위, 눈높이에서 보면 옆이에요.',
        items: [
          { type: 'table', prompt: '컵을 두 방향에서 본 모습을 그리세요.', columns: ['위에서', '옆에서'], cells: [['', '']] },
          { type: 'choice', prompt: '옆에서 보면 세모처럼 보이는 것에 ○ 하세요.', options: ['고깔모자', '공'], answer: '고깔모자' },
          { type: 'draw', prompt: '내 필통을 위에서 본 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞게 이은 카드에 초록 테두리가 생기고, 색종이 모양은 다섯 가지만 나와요.',
      base: '스스로 이은 뒤 확인하고, 모양 일곱 가지 가운데에서 골라요.',
      challenge: '헷갈리는 모습 카드가 더 섞여 있어요. 조각은 모든 모양 가운데 골라, 손잡이 달린 컵을 위에서 본 모습처럼 한 방향에서 보이는 부분을 더 많이 담아 정해진 수만큼만 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 한 방향에서 본 모습이 물건의 전부라고 여긴다 → 실제 물건을 위·옆·아래로 돌려 보게 한다. ② 위에서 본 컵을 동그라미 하나로만 나타낸다 → 입구와 안쪽 바닥이 함께 보인다. ③ 옆모습에 보이지 않는 부분(뒤쪽 손잡이)까지 그린다 → 지금 보이는 것만 그리는 연습. 모둠마다 컵·고깔·페트병을 하나씩 두고 돌려 보게 하면 카드 고르기가 쉬워진다.',
  }));

  // ───────────── 6차시 (연습) ─────────────
  lessons.push(lesson(6, S3, {
    title: '돌멩이를 돌려 가며 새로 찾은 점 세 가지 적기',
    objective: '물건을 돌려 가며 여러 방향에서 살펴 한 방향에서는 알 수 없던 점을 세 가지 이상 찾고, 그 가운데 하나를 골라 크게 나타낼 수 있다.',
    illustration: {
      prompt: art('a child turning a striped river stone in both hands beside a small pile of pebbles and a sketchbook'),
      scene: scene([
        { motif: 'cloud', x: 110, y: 50 }, { motif: 'sun', x: 404, y: 58, s: 0.8 }, { motif: 'hills', y: 206 },
        { motif: 'wave', y: 236 }, { motif: 'tree', x: 400, y: 210, s: 0.9 },
        { motif: 'text', x: 240, y: 140, text: '돌려 보면 새로 보여요', size: 22 },
      ]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 7,
        teacher: '모둠마다 돌멩이 하나를 주고 "위에서만 보고 돌멩이의 특징을 한 가지 말해 보세요."라고 한다. 이어 "이제 돌멩이를 돌려 보세요. 위에서 볼 때는 몰랐던 것을 찾은 모둠?" 흙 자국, 하얀 줄, 납작한 면 같은 발견을 칠판의 "돌려서 찾은 것" 칸에 적는다. 위에서 본 것과 돌려서 찾은 것의 개수를 견주어, 한 방향만 보면 놓치는 것이 많다는 것을 짚는다. 시연 단추로 돌멩이의 하얀 줄을 크게 나타낸 조각 작품을 보여 준다.',
        student: '돌멩이를 위에서만 보고 한 가지, 돌려 보고 또 한 가지 찾아 말해 봅시다.',
        demo: { tool: 'collage', options: { shapes: ['circle', 'rect'], colors: ['갈색', '하양'] }, sequence: [{ has: [{ shape: 'circle', color: '갈색', size: 'l', n: 1 }, { shape: 'rect', color: '하양', min: 2 }], overlap: 2 }] },
      },
      {
        id: 'main', title: '전개', minutes: 25,
        activities: [
          {
            id: 'a1', title: '활동 1. 돌려 보아야 알 수 있는 것 고르기', minutes: 9, tool: 'mindmap',
            teacher: '"민지는 위에서만 보았어요. 민지가 이미 본 것은 바구니에 넣지 않아요." 문항 글에 적힌 "이미 본 모습"에 밑줄을 긋게 한 뒤 카드마다 "돌려야 보이나요?"를 묻는다. 이미 본 것까지 다 넣는 학생에게는 바구니 이름을 소리 내어 읽게 한다.',
            task: '친구가 한 방향에서 이미 본 모습을 읽고, 물건을 돌려 보아야 새로 알 수 있는 카드만 바구니에 넣어요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '민지는 돌멩이를 위에서만 보고 "둥글고 회색이에요"라고 했어요. 돌려 보아야 새로 알 수 있는 것만 고르세요.',
                toolOptions: { mode: 'pick', topic: '돌려 보아야 아는 것', cards: [{ id: 'd1', text: '아래쪽에 흙이 묻어 있어요' }, { id: 'd2', text: '옆면에 하얀 줄이 한 바퀴 돌아요' }, { id: 'd3', text: '한쪽이 납작하게 깎였어요' }, { id: 'd4', text: '위가 둥글어요' }, { id: 'd5', text: '회색이에요' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'd1', text: '아래쪽에 흙이 묻어 있어요' }, { id: 'd2', text: '옆면에 하얀 줄이 한 바퀴 돌아요' }, { id: 'd3', text: '한쪽이 납작하게 깎였어요' }, { id: 'd4', text: '위가 둥글어요' }, { id: 'd5', text: '회색이에요' }, { id: 'd6', text: '돌멩이는 아주 오래되었어요' }] } } },
                hints: ['문항 글 속 친구가 이미 본 모습은 빼요. 남은 카드마다 "돌려야 보이나요?"를 물어요.'],
                target: { pick: ['d1', 'd2', 'd3'] }, difficulty: 0.2 },
              { prompt: '준호는 솔방울을 위에서만 보고 "비늘이 빙글빙글 돌아요"라고 했어요. 돌려 보아야 새로 알 수 있는 것만 고르세요.',
                toolOptions: { mode: 'pick', topic: '돌려 보아야 아는 것', cards: [{ id: 's1', text: '아래 끝에 짧은 꼭지가 붙어 있어요' }, { id: 's2', text: '옆에서 보면 비늘이 층층이 겹쳤어요' }, { id: 's3', text: '비늘 안쪽이 더 진한 갈색이에요' }, { id: 's4', text: '비늘이 빙글빙글 돌아요' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 's1', text: '아래 끝에 짧은 꼭지가 붙어 있어요' }, { id: 's2', text: '옆에서 보면 비늘이 층층이 겹쳤어요' }, { id: 's3', text: '비늘 안쪽이 더 진한 갈색이에요' }, { id: 's4', text: '비늘이 빙글빙글 돌아요' }, { id: 's5', text: '소나무에서 떨어졌어요' }] } } },
                target: { pick: ['s1', 's2', 's3'] }, difficulty: 0.25 },
              { prompt: '서연이는 장난감 자동차를 앞에서만 보고 "동그란 불빛이 둘이에요"라고 했어요. 돌려 보아야 알 수 있는 것만 고르세요.',
                toolOptions: { mode: 'pick', topic: '돌려 보아야 아는 것', cards: [{ id: 'v1', text: '옆면에 문 손잡이가 그려져 있어요' }, { id: 'v2', text: '바닥에 바퀴를 잇는 막대가 있어요' }, { id: 'v3', text: '뒤에 번호판 스티커가 있어요' }, { id: 'v4', text: '앞에 동그란 불빛이 둘이에요' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'v1', text: '옆면에 문 손잡이가 그려져 있어요' }, { id: 'v2', text: '바닥에 바퀴를 잇는 막대가 있어요' }, { id: 'v3', text: '뒤에 번호판 스티커가 있어요' }, { id: 'v4', text: '앞에 동그란 불빛이 둘이에요' }, { id: 'v5', text: '자동차는 빨리 달려요' }] } } },
                target: { pick: ['v1', 'v2', 'v3'] }, difficulty: 0.25,
                predict: { q: '한 방향에서 본 모습만으로 이 자동차를 다 알 수 있을까요?', options: ['다 알 수 있어요', '모르는 것이 남아요'], answer: 1 },
                conclude: '앞모습만으로는 옆·뒤·바닥의 모습을 알 수 없어요. 돌려 보아야 물건을 더 많이 알 수 있어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 찾은 점 하나를 크게 나타내기', minutes: 9, tool: 'collage',
            teacher: '"찾은 점 세 가지 가운데 친구들이 가장 놀랄 만한 것 하나만 골라 크게 나타내요." 돌멩이 전체를 작게 여러 개 붙이는 학생에게는 "하나만, 화면 가득"을 다시 말해 준다. 솔방울 비늘 문항에서는 반원을 조금씩 겹쳐야 층층이 쌓인 모습이 된다는 것을 짚는다.',
            task: '돌려 보며 찾은 점 가운데 하나를 골라, 그 부분이 잘 보이게 크게 나타내요.',
            levels: {
              easy: { shapes: ['circle', 'rect', 'semi', 'square'], colors: ['갈색', '하양', '검정', '노랑', '초록'], sizes: ['m', 'l'] },
              base: { shapes: ['circle', 'rect', 'semi', 'square', 'triangle', 'leaf'] },
              challenge: {},
            },
            items: [
              { prompt: '돌멩이 옆면의 하얀 줄을 크게 나타내요. 크게 갈색 동그라미 하나 위에 하양 긴 네모 두 개 이상을 겹쳐요.', target: { has: [{ shape: 'circle', color: '갈색', size: 'l', n: 1 }, { shape: 'rect', color: '하양', min: 2 }], overlap: 2 }, difficulty: 0.2,
                hints: ['돌멩이 전체를 여러 개 붙이지 말고, 찾은 한 부분이 화면 가운데에 크게 보이게 겹쳐요.'],
                levels: { challenge: { prompt: '하얀 줄과 아래쪽 흙 자국을 함께 크게 나타내요. 큰 갈색 동그라미 위에 하양 긴 네모 셋 이상, 작은 검정 동그라미 둘 이상을 겹쳐요.', target: { has: [{ shape: 'circle', color: '갈색', size: 'l', n: 1 }, { shape: 'rect', color: '하양', min: 3 }, { shape: 'circle', color: '검정', size: 's', min: 2 }], overlap: 4 } } } },
              { prompt: '옆에서 본 솔방울 비늘이 층층이 겹친 모습을 나타내요. 갈색 반원 네 개 이상을 서로 겹쳐 쌓아요.', target: { has: [{ shape: 'semi', color: '갈색', min: 4 }], overlap: 3 }, difficulty: 0.3,
                levels: { challenge: { prompt: '옆에서 본 솔방울을 꼭지까지 나타내요. 갈색 반원 여섯 개 이상을 층층이 겹쳐 쌓고, 아래 끝에 작은 갈색 긴 네모 꼭지 하나를 붙여요.', target: { has: [{ shape: 'semi', color: '갈색', min: 6 }, { shape: 'rect', color: '갈색', size: 's', n: 1 }], overlap: 5 } } } },
              { prompt: '내 돌멩이(또는 내 물건)를 돌려 보며 찾은 점 하나를 골라 크게 나타내고 점검해요.', target: { selfCheck: ['돌려 보며 새로 찾은 점을 세 가지 적었어요', '그 가운데 하나만 골랐어요', '고른 점이 잘 보이게 크게 붙였어요'], minPieces: 3 }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a3', title: '활동 3. 모둠 돌멩이를 돌려 보며 새로 찾은 점 세 가지 쓰기 (짝 활동)', minutes: 7, tool: 'mindmap', pair: true,
            teacher: '준비물: 모둠마다 운동장에서 주워 씻어 둔 돌멩이 하나(줄무늬·흠이 있는 것). "도입에서 위에서 본 것 말고, 이제 돌려서만 보이는 것을 찾아요." 짝끼리 돌멩이를 넘겨 가며 옆·아래를 살피고 활동지 1번 표에 방향마다 한 가지씩 쓴다. "회색이에요"처럼 위에서 이미 본 것을 쓰면 "그건 돌리기 전에도 보였지요?"라고 되묻는다.',
            task: '모둠 돌멩이를 짝과 번갈아 돌려 보며, 위에서는 몰랐던 점을 방향마다 하나씩 활동지 1번 표에 써요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              { prompt: '돌멩이를 옆으로 돌려 보고, 위에서는 몰랐던 점 하나를 활동지 "옆" 칸에 쓴 뒤 "다 했어요"를 누르세요.', toolOptions: { mode: 'pick', topic: '돌려서 찾은 것', cards: [{ id: 'q1', text: '줄무늬' }, { id: 'q2', text: '흠' }, { id: 'q3', text: '납작한 면' }] }, free: true, talk: true, difficulty: 0 },
              { prompt: '돌멩이를 뒤집어 아래를 보고, 새로 찾은 점 하나를 "아래" 칸에 쓴 뒤 "다 했어요"를 누르세요.', toolOptions: { mode: 'pick', topic: '돌려서 찾은 것', cards: [{ id: 'q1', text: '흙 자국' }, { id: 'q2', text: '색 차이' }, { id: 'q3', text: '구멍' }] }, free: true, talk: true, difficulty: 0 },
              { prompt: '짝이 찾은 점과 견주어 셋째 점을 하나 더 찾아 쓰고, 크게 나타낼 하나에 ○ 한 뒤 "다 했어요"를 누르세요.', toolOptions: { mode: 'pick', topic: '크게 나타낼 점', cards: [{ id: 'q1', text: '내가 고른 점' }] }, free: true, talk: true, difficulty: 0 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"위에서만 보았을 때와 돌려 본 뒤, 내가 아는 돌멩이가 어떻게 달라졌나요?" 활동지 표의 세 칸을 채운 학생 두세 명의 발견을 듣는다. 출구 1번에서 "앞면 글자 띠"까지 고른 학생에게는 이미 본 모습은 새로 찾은 것이 아니라고 짚는다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '돌려 보아야 아는 것', cards: [{ id: 'e1', text: '뒷면 모서리가 닳아 둥글어요' }, { id: 'e2', text: '옆면에 연필 자국이 있어요' }, { id: 'e3', text: '앞면에 글자 띠가 감싸 있어요' }] }, prompt: '지우개를 앞면에서만 보고 "글자 띠가 감싸 있어요"라고 했어요. 돌려 보아야 알 수 있는 것만 고르세요.', target: { pick: ['e1', 'e2'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '물건을 한 방향에서만 본 친구에게 해 줄 말로 알맞은 것은?', options: ['그 모습이 물건의 전부야.', '돌려 보면 몰랐던 모습을 더 찾을 수 있어.', '보지 말고 이름만 알면 돼.'], answer: 1, difficulty: 0.1, explain: '돌멩이·솔방울·자동차 모두 돌려 보니 새로 찾은 점이 있었어요.' },
          { type: 'mood', prompt: '오늘 돌려 보며 찾기는 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '돌려 보며 새로 찾기',
      items: [
        { type: 'table', prompt: '내 돌멩이(또는 물건)를 돌려 보며 방향마다 새로 찾은 점을 쓰세요.', columns: ['방향', '새로 찾은 점'], cells: [['위', ''], ['옆', ''], ['아래', '']] },
        { type: 'choice', prompt: '돌멩이를 위에서만 보았을 때 알 수 없는 것에 ○ 하세요.', options: ['위가 둥글어요', '아래쪽에 흙이 묻어 있어요', '위에서 보면 회색이에요'], answer: '아래쪽에 흙이 묻어 있어요' },
        { type: 'draw', prompt: '찾은 점 가운데 하나를 골라 칸을 가득 채우도록 크게 그리세요.' },
        { type: 'short', prompt: '그 점을 고른 까닭을 쓰세요.' },
      ],
      easy: {
        note: '물건을 손에 들고 한 바퀴 돌리며, 위·옆·아래를 한 번씩 봐요.',
        items: [
          { type: 'table', prompt: '돌려 보며 새로 찾은 점을 쓰세요.', columns: ['방향', '새로 찾은 점'], cells: [['옆', ''], ['아래', '']] },
          { type: 'choice', prompt: '돌려 보아야 알 수 있는 것에 ○ 하세요.', options: ['아래쪽에 흙이 묻어 있어요', '위가 둥글어요'], answer: '아래쪽에 흙이 묻어 있어요' },
          { type: 'draw', prompt: '찾은 점 하나를 크게 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 카드를 넣으면 초록 테두리가, 틀린 카드는 까닭과 함께 되돌아와요. 색종이는 큰 크기·보통 크기만 나와요.',
      base: '스스로 고른 뒤 확인하고, 모양 여섯 가지로 나타내요.',
      challenge: '보이는 모습이 아닌 지식 카드가 더 섞여 있어요. 조각 작품은 하얀 줄과 흙 자국, 비늘과 꼭지처럼 돌려서 찾은 점 두 가지를 함께 담아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 한 방향에서 본 모습이 물건의 전부라고 여긴다 → 위에서 본 것과 돌려서 찾은 것의 개수를 칠판에 견주어 적는다. ② 이미 본 모습을 새로 찾은 것으로 다시 고른다. ③ 하나를 골라 크게 그리라고 했는데 전체를 작게 그린다 → "하나만, 화면 가득". 돌멩이는 운동장에서 미리 주워 씻어 두고, 줄무늬나 흠이 있는 것을 고르면 발견이 많다.',
  }));

  // ───────────── 7차시 (확장) ─────────────
  lessons.push(lesson(7, S3, {
    title: '앞모습과 옆모습을 견주어 대칭인 쪽 찾기',
    objective: '대상을 앞·옆·뒤에서 살펴 앞모습은 왼쪽과 오른쪽이 거의 같고 옆모습은 다르다는 것을 찾아 말하고, 앞에서 본 얼굴을 대칭이 되게 나타낼 수 있다.',
    illustration: {
      prompt: art('a cat and an owl shown from the front and from the side, with a dotted folding line down the middle of the front faces'),
      scene: scene([
        { motif: 'moon', x: 406, y: 56, s: 0.8 }, { motif: 'star', x: 330, y: 74, s: 0.5 }, { motif: 'cloud', x: 110, y: 52 },
        { motif: 'hills', y: 210 }, { motif: 'tree', x: 90, y: 216, s: 1.1 }, { motif: 'bird', x: 220, y: 90 },
        { motif: 'text', x: 240, y: 146, text: '앞모습과 옆모습', size: 22 },
      ]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 7,
        teacher: '"짝의 얼굴을 앞에서 보세요. 가운데 코를 기준으로 왼쪽과 오른쪽이 어떤가요?" 이어 짝이 옆으로 돌아앉게 하고 "이번에는요? 눈이 몇 개 보이나요?" 앞모습은 양쪽이 거의 같고, 옆모습은 눈 하나·귀 하나만 보이며 코가 튀어나와 보인다는 것을 짚는다. 사람 얼굴이 완전히 똑같지는 않으니 "거의 같다"고 말한다. 시연 단추로 고양이 앞얼굴의 오른쪽 반을 채우는 모습을 보여 준다.',
        student: '짝의 얼굴을 앞에서 한 번, 옆에서 한 번 보고 무엇이 다른지 말해 봅시다.',
        demo: { tool: 'collage', options: { readOnly: true }, sequence: [{ symmetry: 'vertical', has: [{ shape: 'triangle', min: 2 }] }] },
      },
      {
        id: 'main', title: '전개', minutes: 25,
        activities: [
          {
            id: 'a1', title: '활동 1. 앞·옆·뒤에서 본 모습 나누기', minutes: 11, tool: 'mindmap',
            teacher: '"옆에서 보면 눈이 몇 개 보일까요? 짝 얼굴로 확인해 봐요." 카드를 실제로 짝을 보며 고르게 한다. 뒤에서 본 모습 칸을 비워 두는 학생에게는 짝이 뒤로 돌아앉았을 때 무엇이 보이는지 다시 살피게 한다.',
            task: '카드를 읽고, 앞에서·옆에서·뒤에서 본 모습 가운데 어느 것인지 나누어요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '고양이를 살핀 카드를 앞·옆·뒤에서 본 모습으로 나누어 보세요.',
                toolOptions: { topic: '고양이', slots: [{ id: 'f', label: '앞에서 보면' }, { id: 's', label: '옆에서 보면' }, { id: 'b', label: '뒤에서 보면' }], cards: [{ id: 'c1', text: '두 눈과 두 귀가 다 보여요' }, { id: 'c2', text: '코를 가운데 두고 양쪽이 같아요' }, { id: 'c3', text: '눈이 하나만 보여요' }, { id: 'c4', text: '코와 입이 앞으로 나와 보여요' }, { id: 'c5', text: '눈은 안 보이고 꼬리가 보여요' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'c1', text: '두 눈과 두 귀가 다 보여요' }, { id: 'c2', text: '코를 가운데 두고 양쪽이 같아요' }, { id: 'c3', text: '눈이 하나만 보여요' }, { id: 'c4', text: '코와 입이 앞으로 나와 보여요' }, { id: 'c5', text: '눈은 안 보이고 꼬리가 보여요' }, { id: 'cx', text: '고양이는 생선을 좋아해요' }] } } },
                hints: ['짝 얼굴로 확인해요. 눈과 귀가 몇 개 보이는지, 무엇이 튀어나와 보이는지 세어 보면 방향을 알 수 있어요.'],
                target: { sort: { f: ['c1', 'c2'], s: ['c3', 'c4'], b: ['c5'] } }, difficulty: 0.2,
                predict: { q: '고양이를 옆에서 보면 눈이 몇 개 보일까요?', options: ['하나', '둘', '하나도 안 보여요'], answer: 0 },
                conclude: '앞에서는 양쪽이 다 보여 거의 대칭이고, 옆에서는 한쪽만 보여요.' },
              { prompt: '짝의 머리를 살핀 카드를 앞·옆·뒤에서 본 모습으로 나누어 보세요.',
                toolOptions: { topic: '짝의 머리', slots: [{ id: 'f', label: '앞에서 보면' }, { id: 's', label: '옆에서 보면' }, { id: 'b', label: '뒤에서 보면' }], cards: [{ id: 'h1', text: '두 눈썹이 다 보여요' }, { id: 'h2', text: '귀가 하나 보여요' }, { id: 'h3', text: '코가 얼마나 높은지 보여요' }, { id: 'h4', text: '뒤통수 머리카락만 보여요' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'h1', text: '두 눈썹이 다 보여요' }, { id: 'h2', text: '귀가 하나 보여요' }, { id: 'h3', text: '코가 얼마나 높은지 보여요' }, { id: 'h4', text: '뒤통수 머리카락만 보여요' }, { id: 'hx', text: '짝은 웃음이 많아요' }] } } },
                target: { sort: { f: ['h1'], s: ['h2', 'h3'], b: ['h4'] } }, difficulty: 0.2 },
              { prompt: '버스를 살핀 카드를 앞·옆·뒤에서 본 모습으로 나누어 보세요.',
                toolOptions: { topic: '버스', slots: [{ id: 'f', label: '앞에서 보면' }, { id: 's', label: '옆에서 보면' }, { id: 'b', label: '뒤에서 보면' }], cards: [{ id: 'u1', text: '넓은 앞유리와 불빛 두 개' }, { id: 'u2', text: '창문이 길게 줄지어 있어요' }, { id: 'u3', text: '바퀴가 두 개 보여요' }, { id: 'u4', text: '뒷유리 아래에 번호판이 있어요' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'u1', text: '넓은 앞유리와 불빛 두 개' }, { id: 'u2', text: '창문이 길게 줄지어 있어요' }, { id: 'u3', text: '바퀴가 두 개 보여요' }, { id: 'u4', text: '뒷유리 아래에 번호판이 있어요' }, { id: 'ux', text: '버스는 사람을 태워요' }] } } },
                target: { sort: { f: ['u1'], s: ['u2', 'u3'], b: ['u4'] } }, difficulty: 0.25 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 앞에서 본 얼굴을 대칭으로 만들기', minutes: 14, tool: 'collage',
            teacher: '"접는 선이 코가 있는 자리예요. 왼쪽 귀가 접는 선에서 몇 칸 떨어져 있나요? 오른쪽 귀도 같은 칸만큼 떨어져야 해요." 판의 점을 세게 한다. 물고기 문항에서는 "옆모습은 대칭이 아니어도 돼요"라고 말해, 앞모습과 옆모습의 차이를 직접 만들어 보게 한다.',
            task: '앞에서 본 얼굴은 접는 선 양쪽이 같게, 옆에서 본 모습은 보이는 대로 조각을 놓아요.',
            levels: {
              easy: { shapes: ['circle', 'triangle', 'square', 'heart', 'leaf'], colors: ['노랑', '주황', '검정', '분홍', '하양'], sizes: ['s', 'm', 'l'] },
              base: { shapes: ['circle', 'triangle', 'square', 'heart', 'leaf', 'semi'] },
              challenge: { guide: false },
            },
            items: [
              { prompt: '앞에서 본 고양이 얼굴의 왼쪽 반을 보고, 오른쪽 귀와 눈을 놓아 대칭으로 완성해요.', state: { pieces: [{ shape: 'circle', color: '노랑', size: 'l', x: 280, y: 220, r: 0 }, { shape: 'triangle', color: '노랑', size: 'm', x: 220, y: 140, r: 0 }, { shape: 'circle', color: '검정', size: 's', x: 240, y: 200, r: 0 }] }, target: { symmetry: 'vertical' }, difficulty: 0.25,
                hints: ['얼굴 가운데(코 자리)에서 왼쪽 조각까지 몇 칸인지 세고, 오른쪽에도 같은 칸만큼 떨어뜨려 놓아요.'],
                levels: { challenge: { prompt: '접는 선 없이 해요. 왼쪽 귀만 있는 고양이 얼굴에 두 눈, 오른쪽 귀, 가운데 코를 더해 조각 여섯 개 이상으로 대칭 얼굴을 완성해요.', state: { pieces: [{ shape: 'circle', color: '노랑', size: 'l', x: 280, y: 220, r: 0 }, { shape: 'triangle', color: '노랑', size: 'm', x: 220, y: 140, r: 0 }] }, target: { symmetry: 'vertical', pieces: { min: 6 } } } } },
              { prompt: '앞에서 본 집을 대칭으로 완성해요. 왼쪽 창문의 짝을 놓고 조각을 다섯 개 이상 써요.', state: { pieces: [{ shape: 'triangle', color: '빨강', size: 'l', x: 280, y: 120, r: 0 }, { shape: 'square', color: '주황', size: 'l', x: 280, y: 260, r: 0 }, { shape: 'square', color: '하양', size: 's', x: 200, y: 240, r: 0 }] }, target: { symmetry: 'vertical', pieces: { min: 5 } }, difficulty: 0.3,
                levels: { challenge: { prompt: '접는 선 없이 앞에서 본 집을 대칭으로 완성해요. 창문 짝을 놓고, 지붕 양쪽에 짝을 이룬 꾸밈까지 더해 조각을 일곱 개 이상 써요.', target: { symmetry: 'vertical', pieces: { min: 7 } } } } },
              { prompt: '옆에서 본 물고기를 만들어요. 몸통은 큰 나뭇잎 하나, 꼬리는 세모 하나, 눈은 몸통 위에 겹친 작은 동그라미 하나예요.', target: { has: [{ shape: 'leaf', size: 'l', n: 1 }, { shape: 'triangle', n: 1 }, { shape: 'circle', size: 's', n: 1 }], overlap: 1 }, difficulty: 0.25,
                levels: { challenge: { prompt: '옆에서 본 물고기를 지느러미까지 만들어요. 큰 나뭇잎 몸통, 세모 꼬리와 세모 지느러미 둘(세모 모두 셋), 몸통에 겹친 작은 동그라미 눈 하나예요.', target: { has: [{ shape: 'leaf', size: 'l', n: 1 }, { shape: 'triangle', n: 3 }, { shape: 'circle', size: 's', n: 1 }], overlap: 1 } } },
                conclude: '옆모습은 왼쪽과 오른쪽이 달라요. 앞모습에서만 양쪽이 거의 같아요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"앞에서 본 얼굴과 옆에서 본 얼굴 가운데 접는 선으로 접으면 양쪽이 겹치는 것은 어느 쪽인가요?" 학생 작품을 띄워 접는 선을 그어 보인다. 출구 1번에서 부엉이 귀를 같은 쪽으로 기울여 놓은 학생은 거울에 비친 방향을 손바닥 두 개로 다시 느껴 보게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'collage', options: { shapes: ['circle', 'triangle', 'heart'], colors: ['갈색', '하양', '검정', '노랑'] }, state: { pieces: [{ shape: 'circle', color: '갈색', size: 'l', x: 280, y: 220, r: 0 }, { shape: 'circle', color: '하양', size: 'm', x: 220, y: 180, r: 0 }, { shape: 'triangle', color: '갈색', size: 's', x: 220, y: 100, r: 0 }] }, prompt: '앞에서 본 부엉이 얼굴의 왼쪽 반이에요. 오른쪽 눈과 귀를 놓아 대칭으로 완성해 보세요.', target: { symmetry: 'vertical' }, difficulty: 0.2 },
          { type: 'choice', prompt: '왼쪽과 오른쪽이 거의 같게 보이는 것은 어느 방향에서 본 얼굴인가요?', options: ['앞에서 본 얼굴', '옆에서 본 얼굴', '뒤에서 본 얼굴'], answer: 0, difficulty: 0.1, explain: '앞에서 보면 코를 가운데 두고 두 눈과 두 귀가 양쪽에 같게 보여요.' },
          { type: 'mood', prompt: '오늘 앞모습·옆모습 견주기는 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '앞모습과 옆모습',
      items: [
        { type: 'figure', wide: true, prompt: '접는 선을 기준으로 고양이 얼굴의 나머지 반쪽을 그리세요.', tool: 'collage', options: { guide: 'vertical', printColors: false }, figures: [{ state: { pieces: [{ shape: 'circle', color: '노랑', size: 'l', x: 280, y: 220, r: 0 }, { shape: 'triangle', color: '노랑', size: 'm', x: 220, y: 140, r: 0 }, { shape: 'circle', color: '검정', size: 's', x: 240, y: 200, r: 0 }] }, caption: '앞에서 본 고양이 완성하기' }], answer: '오른쪽 귀(340, 140)와 오른쪽 눈(320, 200)이 접는 선에서 같은 거리' },
        { type: 'table', prompt: '짝의 얼굴을 앞과 옆에서 보고 보이는 것을 쓰세요.', columns: ['방향', '보이는 눈의 수', '보이는 귀의 수', '눈에 띄는 점'], cells: [['앞', '', '', ''], ['옆', '', '', '']] },
        { type: 'choice', prompt: '버스를 옆에서 본 모습에 ○ 하세요.', options: ['넓은 앞유리와 불빛 두 개', '창문이 길게 줄지어 있어요', '뒷유리 아래 번호판'], answer: '창문이 길게 줄지어 있어요' },
        { type: 'draw', prompt: '좋아하는 동물 하나를 앞에서 본 모습과 옆에서 본 모습으로 나란히 그리세요.' },
      ],
      easy: {
        note: '앞모습은 코를 가운데 두고 양쪽이 같아요. 옆모습은 한쪽만 보여요.',
        items: [
          { type: 'figure', wide: true, prompt: '나머지 반쪽 얼굴을 그리세요.', tool: 'collage', options: { guide: 'vertical', printColors: false }, figures: [{ state: { pieces: [{ shape: 'circle', color: '노랑', size: 'l', x: 280, y: 220, r: 0 }, { shape: 'circle', color: '검정', size: 's', x: 240, y: 200, r: 0 }] }, caption: '반쪽 완성하기' }] },
          { type: 'choice', prompt: '옆에서 본 고양이는 눈이 몇 개 보이나요?', options: ['하나', '둘'], answer: '하나' },
          { type: 'draw', prompt: '좋아하는 동물을 앞에서 본 모습으로 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 맞는 칸에 놓으면 초록 테두리가 생기고, 색종이는 모양 다섯 가지·색 다섯 가지예요.',
      base: '스스로 나눈 뒤 확인하고, 모양 여섯 가지를 써요.',
      challenge: '보이는 모습이 아닌 카드가 섞여 있어요. 대칭 작품은 접는 선이 보이지 않아 칸을 세어 짝 자리를 찾고, 귀 하나만 있는 얼굴·지느러미 달린 물고기처럼 더 많은 조각을 놓아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 옆모습에도 두 눈을 그린다 → 짝을 옆으로 앉혀 직접 센다. ② 대칭에서 짝 조각을 접는 선에서 다른 거리에 놓는다 → 점을 센다. ③ 사람 얼굴이 완전히 똑같다고 여긴다 → "거의 같다"로 말하고, 짝 얼굴에서 다른 점(가르마, 점) 하나를 찾게 한다. 학생 얼굴 사진을 찍어 쓰지 않는다(개인정보) — 짝을 직접 보거나 동물 그림으로 한다.',
  }));

  // ───────────── 8차시 (확장) ─────────────
  lessons.push(lesson(8, S3, {
    title: '찾은 특징 하나를 골라 화면 가득 크게 나타내기',
    objective: '대상에서 찾은 특징 가운데 자세히 살핀 한 부분을 골라 화면을 가득 채우도록 크게 나타내고, 그 부분을 고른 까닭을 말할 수 있다.',
    illustration: {
      prompt: art('a giant close-up of a strawberry with seeds and a butterfly wing pattern filling a paper frame'),
      scene: scene([
        { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 110, y: 50 }, { motif: 'hills', y: 210 },
        { motif: 'flower', x: 120, y: 222, color: 'rose', s: 1.4 }, { motif: 'leaf', x: 360, y: 210, r: 30, s: 1.3 },
        { motif: 'text', x: 240, y: 140, text: '하나만, 크게!', size: 24 },
      ]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 7,
        teacher: '딸기 한 알 사진과, 딸기 씨 부분을 화면 가득 키운 사진을 나란히 보여 준다. "두 그림 가운데 딸기 씨가 어떻게 박혀 있는지 더 잘 보이는 것은?" 크게 키운 그림을 고르면, "한 부분만 골라 크게 나타내면 다른 사람에게 그 특징을 또렷하게 보여 줄 수 있어요."라고 짚는다. 전체를 작게 여러 번 그리는 것과 한 부분을 크게 그리는 것의 차이를 오늘 해 보자고 연다. 시연 단추로 딸기를 크게 키운 조각 작품을 보여 준다.',
        student: '두 딸기 그림을 견주어, 씨의 모습이 더 잘 보이는 쪽과 그 까닭을 말해 봅시다.',
        demo: { tool: 'collage', options: { shapes: ['heart', 'circle'], colors: ['빨강', '노랑'] }, sequence: [{ has: [{ shape: 'heart', color: '빨강', size: 'l', n: 1 }, { shape: 'circle', color: '노랑', size: 's', min: 3 }], overlap: 3 }] },
      },
      {
        id: 'main', title: '전개', minutes: 25,
        activities: [
          {
            id: 'a1', title: '활동 1. 크게 나타낼 한 부분 고르기', minutes: 11, tool: 'mindmap',
            teacher: '"딸기 전체는 한 부분일까요? 빨간 과일이라는 말은 특징일까요?" 크게 나타낼 것은 대상 전체나 이름이 아니라 자세히 살핀 한 부분이라는 기준을 세운다. 전체를 고르는 학생에게 "그것을 화면 가득 그리면 무엇이 더 잘 보이나요?"라고 묻는다.',
            task: '대상 전체나 이름이 아니라, 자세히 살펴야 보이는 한 부분 카드만 바구니에 넣어요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '딸기에서 크게 나타낼 만한, 자세히 살핀 한 부분 카드만 고르세요.',
                toolOptions: { mode: 'pick', topic: '크게 나타낼 한 부분', cards: [{ id: 'd1', text: '겉에 박힌 작은 씨' }, { id: 'd2', text: '꼭지의 뾰족한 초록 잎' }, { id: 'd3', text: '딸기 한 알 전체' }, { id: 'd4', text: '빨간 과일' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'd1', text: '겉에 박힌 작은 씨' }, { id: 'd2', text: '꼭지의 뾰족한 초록 잎' }, { id: 'd3', text: '딸기 한 알 전체' }, { id: 'd4', text: '빨간 과일' }, { id: 'd5', text: '바구니에 담긴 딸기들' }] } } },
                hints: ['카드마다 "이것을 화면 가득 그리면 자세히 살핀 무늬나 모양이 보이나요?"를 물어요. 전체·이름은 빼요.'],
                target: { pick: ['d1', 'd2'] }, difficulty: 0.2 },
              { prompt: '나비에서 크게 나타낼 만한, 자세히 살핀 한 부분 카드만 고르세요.',
                toolOptions: { mode: 'pick', topic: '크게 나타낼 한 부분', cards: [{ id: 'n1', text: '더듬이 끝의 둥근 혹' }, { id: 'n2', text: '날개 가장자리의 점무늬' }, { id: 'n3', text: '나비 한 마리 전체' }, { id: 'n4', text: '날아다니는 곤충' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'n1', text: '더듬이 끝의 둥근 혹' }, { id: 'n2', text: '날개 가장자리의 점무늬' }, { id: 'n3', text: '나비 한 마리 전체' }, { id: 'n4', text: '날아다니는 곤충' }, { id: 'n5', text: '꽃밭에 앉은 나비 세 마리' }] } } },
                target: { pick: ['n1', 'n2'] }, difficulty: 0.25 },
              { prompt: '자전거에서 크게 나타낼 만한, 자세히 살핀 한 부분 카드만 고르세요.',
                toolOptions: { mode: 'pick', topic: '크게 나타낼 한 부분', cards: [{ id: 'j1', text: '체인의 작은 고리들' }, { id: 'j2', text: '바퀴살이 가운데로 모이는 모양' }, { id: 'j3', text: '자전거 한 대 전체' }, { id: 'j4', text: '타고 다니는 것' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'j1', text: '체인의 작은 고리들' }, { id: 'j2', text: '바퀴살이 가운데로 모이는 모양' }, { id: 'j3', text: '자전거 한 대 전체' }, { id: 'j4', text: '타고 다니는 것' }, { id: 'j5', text: '공원에 세워 둔 자전거들' }] } } },
                target: { pick: ['j1', 'j2'] }, difficulty: 0.25,
                predict: { q: '자전거 전체를 그릴 때와 바퀴살만 크게 그릴 때, 바퀴살이 더 잘 보이는 것은?', options: ['전체를 그릴 때', '바퀴살만 크게 그릴 때'], answer: 1 },
                conclude: '한 부분만 골라 크게 나타내면 그 부분의 모양과 무늬가 또렷하게 보여요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 고른 부분을 화면 가득 나타내기', minutes: 14, tool: 'collage',
            teacher: '"작은 조각을 여러 군데 흩어 놓지 말고, 큰 조각으로 화면을 채운 다음 그 위에 무늬를 얹어요." 바퀴살 문항에서는 긴 네모를 돌려 가운데로 모이게 놓아 보게 한다. 마지막 문항은 짝에게 왜 그 부분을 골랐는지 말한 뒤 점검한다.',
            task: '고른 한 부분이 판을 가득 채우도록 큰 조각을 먼저 놓고, 그 위에 무늬 조각을 겹쳐요.',
            levels: {
              easy: { shapes: ['heart', 'circle', 'rect', 'leaf'], colors: ['빨강', '노랑', '초록', '갈색', '검정'], sizes: ['s', 'l'] },
              base: { shapes: ['heart', 'circle', 'rect', 'leaf', 'semi', 'star'] },
              challenge: {},
            },
            items: [
              { prompt: '딸기를 아주 가까이서 본 것처럼 나타내요. 크게 빨간 하트 하나 위에 작은 노랑 동그라미 씨를 다섯 개 이상 겹쳐요.', target: { has: [{ shape: 'heart', color: '빨강', size: 'l', n: 1 }, { shape: 'circle', color: '노랑', size: 's', min: 5 }], overlap: 5 }, difficulty: 0.25,
                hints: ['큰 조각 하나로 판을 먼저 채우고, 작은 무늬 조각은 그 큰 조각 위에 옮겨 겹쳐요.'],
                levels: { challenge: { prompt: '딸기 끝을 아주 가까이서 본 것처럼 나타내요. 큰 빨강 하트 위에 작은 노랑 씨를 여덟 개 이상, 꼭지 자리에 초록 나뭇잎을 세 장 이상 겹쳐요.', target: { has: [{ shape: 'heart', color: '빨강', size: 'l', n: 1 }, { shape: 'circle', color: '노랑', size: 's', min: 8 }, { shape: 'leaf', color: '초록', min: 3 }], overlap: 6 } } } },
              { prompt: '바퀴살 모양을 크게 나타내요. 큰 동그라미 하나 위에 긴 네모 네 개 이상을 겹쳐 놓아요.', target: { has: [{ shape: 'circle', size: 'l', n: 1 }, { shape: 'rect', min: 4 }], overlap: 4 }, difficulty: 0.3,
                levels: { challenge: { prompt: '바퀴 한가운데를 크게 나타내요. 큰 동그라미 위에 긴 네모 바퀴살을 여섯 개 이상 겹치고, 가운데에 작은 동그라미 축 하나를 얹어요.', target: { has: [{ shape: 'circle', size: 'l', n: 1 }, { shape: 'rect', min: 6 }, { shape: 'circle', size: 's', n: 1 }], overlap: 4 } } } },
              { prompt: '내가 고른 대상의 한 부분을 화면 가득 크게 나타내고 점검해요.', target: { selfCheck: ['대상 전체가 아니라 한 부분만 골랐어요', '큰 조각으로 화면을 가득 채웠어요', '그 부분을 고른 까닭을 짝에게 말했어요'], minPieces: 4 }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"친구 작품을 보고 무엇의 어느 부분인지 맞혀 볼까요?" 두세 작품을 띄워 다른 학생이 맞히게 하고, 맞히기 쉬웠던 작품은 무엇이 또렷했는지 말하게 한다. 출구 1번에서 잎맥 조각을 잎 밖에 둔 학생에게는 무늬는 큰 조각 위에 겹쳐야 한다고 짚는다.',
        exitTicket: [
          { type: 'tool', tool: 'collage', options: { shapes: ['leaf', 'rect', 'circle'], colors: ['초록', '갈색', '노랑'] }, prompt: '나뭇잎 한 장을 크게 나타내 보세요. 큰 초록 나뭇잎 하나 위에 갈색 긴 네모 잎맥을 세 개 이상 겹쳐요.', target: { has: [{ shape: 'leaf', color: '초록', size: 'l', n: 1 }, { shape: 'rect', color: '갈색', min: 3 }], overlap: 3 }, difficulty: 0.2 },
          { type: 'choice', prompt: '고양이에서 크게 나타낼 한 부분으로 알맞은 것은?', options: ['고양이 한 마리 전체', '귀 안쪽의 가는 털', '동물'], answer: 1, difficulty: 0.15, explain: '귀 안쪽의 가는 털처럼 자세히 살핀 한 부분을 크게 나타내면 그 특징이 또렷해져요.' },
          { type: 'mood', prompt: '오늘 크게 나타내기는 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '하나만, 크게',
      items: [
        { type: 'table', prompt: '대상마다 크게 나타낼 한 부분과 그 까닭을 쓰세요.', columns: ['대상', '크게 나타낼 한 부분', '고른 까닭'], cells: [['딸기', '', ''], ['운동화', '', ''], ['', '', '']] },
        { type: 'choice', prompt: '나비에서 크게 나타낼 한 부분으로 알맞은 것에 ○ 하세요.', options: ['나비 한 마리 전체', '더듬이 끝의 둥근 혹', '날아다니는 곤충', '꽃밭의 나비들'], answer: '더듬이 끝의 둥근 혹' },
        { type: 'draw', prompt: '고른 한 부분을 칸을 가득 채우도록 크게 그리세요.' },
        { type: 'short', prompt: '크게 그려 보니 새로 보인 것을 한 가지 쓰세요.' },
      ],
      easy: {
        note: '"그 물건 전체"가 아니라 "그 물건의 한 부분"을 골라요.',
        items: [
          { type: 'choice', prompt: '딸기의 한 부분에 ○ 하세요.', options: ['겉에 박힌 씨', '딸기 한 알 전체'], answer: '겉에 박힌 씨' },
          { type: 'table', prompt: '크게 나타낼 한 부분을 쓰세요.', columns: ['대상', '한 부분'], cells: [['딸기', ''], ['', '']] },
          { type: 'draw', prompt: '고른 한 부분을 크게 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 카드에 초록 테두리가 생기고, 색종이는 작은 크기와 큰 크기만 있어 크게·작게를 바로 견줘요.',
      base: '스스로 고른 뒤 확인하고, 모양 여섯 가지를 써요.',
      challenge: '대상 여럿을 담은 카드가 더 섞여 있어요. 크게 나타낼 때는 씨와 꼭지, 바퀴살과 축처럼 한 부분 안의 무늬를 두 가지 넘게 겹쳐 담아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 크게 나타내라고 하면 대상 전체를 크게 그린다 → "한 부분"을 먼저 손가락으로 짚게 한다. ② 대상의 이름이나 종류(빨간 과일, 곤충)를 특징으로 여긴다. ③ 작은 조각을 판 여기저기에 흩어 놓아 무엇인지 알아보기 어렵다 → 큰 조각 위에 겹친다. 5~8차시에서 찾은 점들을 모아 9차시 "살피기 전과 뒤" 돌아보기로 넘어간다.',
  }));

  // ───────────── 9차시 (핵심) ─────────────
  lessons.push(lesson(9, S3, {
    title: '살피기 전과 뒤에 달라진 내 생각 말하기',
    objective: '살핀 뒤 달라진 생각이 어떤 살피기 방법(가까이·뒤집어·오래·소리 듣기) 덕분인지 잇고, "처음에는 ~라고 생각했는데 살펴보니 ~"의 틀로 달라진 생각을 말할 수 있다.',
    illustration: {
      prompt: art('a child holding two sketches of the same leaf, a plain green blob on the left and a detailed veined leaf on the right'),
      scene: scene([
        { motif: 'sun', x: 406, y: 58, s: 0.8 }, { motif: 'cloud', x: 120, y: 52 }, { motif: 'hills', y: 210 },
        { motif: 'leaf', x: 140, y: 196, s: 1.4, r: -20 }, { motif: 'leaf', x: 340, y: 196, s: 1.4, r: 20, color: 'buttercup' },
        { motif: 'text', x: 240, y: 132, text: '처음에는… 살펴보니…', size: 22 },
      ]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 7,
        teacher: '1차시에 칠판에 그렸던 "처음 솔방울" 그림(또는 사진)을 다시 띄운다. "그때 우리는 솔방울을 이렇게 생각했어요. 지금은 어떻게 생각하나요?" 학생 말을 "처음에는 ~라고 생각했는데, 살펴보니 ~"의 틀로 다시 말해 준다. "자세히 살펴도 처음 생각은 그대로"라고 말하는 학생이 있으면, 처음 그림에 없던 것이 몇 가지 늘었는지 함께 센다. 시연 단추로 나뭇잎 카드가 "살피기 전·살핀 뒤"로 나뉘는 모습을 보여 준다.',
        student: '1차시의 처음 솔방울 그림을 보고, 지금 내 생각과 무엇이 달라졌는지 말해 봅시다.',
        demo: { tool: 'mindmap', options: { topic: '솔방울', slots: [{ id: 'before', label: '살피기 전 생각' }, { id: 'after', label: '살핀 뒤 생각' }], cards: [{ id: 'd1', text: '갈색 세모 덩어리야' }, { id: 'd2', text: '비늘이 빙글빙글 돌며 쌓였어' }] }, sequence: [{ sort: { before: ['d1'], after: ['d2'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 25,
        activities: [
          {
            id: 'a1', title: '활동 1. 생각을 바꾼 살피기 방법 잇기', minutes: 12, tool: 'mindmap',
            teacher: '"민지는 처음에 나뭇잎이 그냥 초록이라고 했어요. 무엇을 해 보고 생각이 바뀌었을까요?" 살핀 뒤 생각마다 그 생각을 가져다준 방법(가까이 대고 보기, 뒤집어 보기, 오래 지켜보기, 소리 듣기)을 찾게 한다. 1~8차시에 해 본 방법을 칠판에 먼저 모아 둔다. "이름 알아보기"처럼 살피지 않고 아는 방법을 고르는 학생에게는 "그 방법으로 이 모습이 눈에 보였을까요?"라고 묻는다. 개미 문항에서는 몸이 세 부분(머리·가슴·배)이라는 것을 그림에서 손가락으로 짚게 한다.',
            task: '친구가 살핀 뒤 바뀐 생각을 읽고, 그 생각을 알게 해 준 살피기 방법 카드를 이어요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              { prompt: '민지가 나뭇잎을 살핀 뒤 바뀐 생각이에요. 생각마다 그것을 알게 해 준 살피기 방법을 이어 보세요.',
                toolOptions: { mode: 'match', topic: '나뭇잎', slots: [{ id: 'l1', label: '한 잎에도 연두와 진초록이 섞였어' }, { id: 'l2', label: '잎 뒷면은 앞면보다 색이 연해' }, { id: 'l3', label: '마른 잎은 바스락 소리가 나' }], cards: [{ id: 'near', text: '눈 가까이 대고 보기' }, { id: 'flip', text: '뒤집어 보기' }, { id: 'ear', text: '구기며 소리 듣기' }, { id: 'name', text: '이름 알아보기' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'near', text: '눈 가까이 대고 보기' }, { id: 'flip', text: '뒤집어 보기' }, { id: 'ear', text: '구기며 소리 듣기' }, { id: 'name', text: '이름 알아보기' }, { id: 'far', text: '멀리서 보기' }] } } },
                hints: ['그 생각은 눈을 가까이 댔을 때, 뒤집었을 때, 소리를 들었을 때 가운데 언제 알 수 있었을지 떠올려요.'],
                target: { match: { l1: 'near', l2: 'flip', l3: 'ear' } }, difficulty: 0.2,
                conclude: '생각이 바뀐 데에는 까닭이 있어요. 새 방법으로 살펴서 새 모습을 찾았기 때문이에요.' },
              { prompt: '준호가 개미를 살핀 뒤 바뀐 생각이에요. 생각마다 그것을 알게 해 준 살피기 방법을 이어 보세요.',
                toolOptions: { mode: 'match', topic: '개미', slots: [{ id: 'a1', label: '몸이 세 부분으로 나뉘어 있어' }, { id: 'a2', label: '줄을 지어 같은 길로 오가' }, { id: 'a3', label: '다리가 몸 아래로 굽어 있어' }], cards: [{ id: 'zoom', text: '돋보기로 가까이 보기' }, { id: 'wait', text: '한자리에서 오래 지켜보기' }, { id: 'side', text: '눈높이를 낮춰 옆에서 보기' }, { id: 'book', text: '책에서 이름 찾기' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'zoom', text: '돋보기로 가까이 보기' }, { id: 'wait', text: '한자리에서 오래 지켜보기' }, { id: 'side', text: '눈높이를 낮춰 옆에서 보기' }, { id: 'book', text: '책에서 이름 찾기' }, { id: 'touch', text: '손으로 집어 보기' }] } } },
                target: { match: { a1: 'zoom', a2: 'wait', a3: 'side' } }, difficulty: 0.25 },
              { prompt: '서연이가 구름을 살핀 뒤 바뀐 생각이에요. 생각마다 그것을 알게 해 준 살피기 방법을 이어 보세요.',
                toolOptions: { mode: 'match', topic: '구름', slots: [{ id: 'k1', label: '보고 있는 사이 모양이 천천히 바뀌어' }, { id: 'k2', label: '해가 비치는 쪽이 더 하얘' }, { id: 'k3', label: '산 너머까지 구름이 길게 이어져' }], cards: [{ id: 'wait', text: '한자리에서 오래 지켜보기' }, { id: 'cmp', text: '해 쪽과 반대쪽 견주어 보기' }, { id: 'wide', text: '높은 곳에서 멀리 넓게 보기' }, { id: 'touch', text: '손으로 만져 보기' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'wait', text: '한자리에서 오래 지켜보기' }, { id: 'cmp', text: '해 쪽과 반대쪽 견주어 보기' }, { id: 'wide', text: '높은 곳에서 멀리 넓게 보기' }, { id: 'touch', text: '손으로 만져 보기' }, { id: 'near', text: '눈 가까이 대고 보기' }] } } },
                target: { match: { k1: 'wait', k2: 'cmp', k3: 'wide' } }, difficulty: 0.3,
                predict: { q: '구름을 손으로 만져서 알 수 있는 것이 있을까요?', options: ['있어요', '없어요'], answer: 1 } },
            ],
          },
          {
            id: 'a2', title: '활동 2. "처음에는 ~, 살펴보니 ~" 문장 만들기', minutes: 13, tool: 'story',
            teacher: '"앞 말풍선에는 처음 생각, 뒤 말풍선에는 살펴보고 알게 된 것을 넣어요." 두 말풍선을 이어 소리 내어 읽게 한다. 개미 문항에서 "두 부분으로"를 고른 학생에게는 개미 그림을 보며 머리·가슴·배를 손가락으로 짚게 한다. 마지막 문항은 6차시의 돌멩이를 떠올려 자기 경험과 견주게 한다.',
            task: '말풍선의 빈칸에 알맞은 말 카드를 넣어 "처음에는 ~, 살펴보니 ~" 문장을 완성해요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              { prompt: '민지가 나뭇잎을 살핀 뒤 한 말이에요. 두 말풍선을 완성해 보세요.',
                toolOptions: { mode: 'fill', cards: ['그냥 초록이라고', '연두와 진초록이', '빨강과 파랑이'], slots: [{ id: 'b1', who: '민지', motif: 'leaf', label: '처음에는 나뭇잎이 ___ 생각했어.' }, { id: 'b2', who: '민지', motif: 'leaf', label: '살펴보니 한 잎에 ___ 섞여 있었어.' }] },
                target: { fill: { b1: '그냥 초록이라고', b2: '연두와 진초록이' } }, difficulty: 0.15 },
              { prompt: '준호가 개미를 살핀 뒤 한 말이에요. 두 말풍선을 완성해 보세요.',
                toolOptions: { mode: 'fill', cards: ['검은 점이라고', '세 부분으로', '두 부분으로'], slots: [{ id: 'b1', who: '준호', motif: 'leaf', label: '처음에는 개미가 그냥 ___ 생각했어.' }, { id: 'b2', who: '준호', motif: 'leaf', label: '살펴보니 몸이 ___ 나뉘어 있었어.' }] },
                hints: ['앞 말풍선에는 뭉뚱그린 처음 생각, 뒤 말풍선에는 개미 그림에서 손가락으로 짚어 센 것을 넣어요.'],
                target: { fill: { b1: '검은 점이라고', b2: '세 부분으로' } }, difficulty: 0.25 },
              { prompt: '6차시에 돌멩이를 살핀 도윤이의 말이에요. 두 말풍선을 완성해 보세요.',
                toolOptions: { mode: 'fill', cards: ['다 똑같다고', '저마다 다른', '모두 같은'], slots: [{ id: 'b1', who: '도윤', motif: 'mountain', label: '처음에는 돌멩이가 ___ 생각했어.' }, { id: 'b2', who: '도윤', motif: 'mountain', label: '돌려 보니 줄무늬와 흠이 ___ 모양이었어.' }] },
                levels: { challenge: { toolOptions: { cards: ['다 똑같다고', '저마다 다른', '모두 같은', '살필 필요 없다고'] } } },
                target: { fill: { b1: '다 똑같다고', b2: '저마다 다른' } }, difficulty: 0.25,
                predict: { q: '자세히 살펴본 뒤 처음 생각이 달라질 수 있을까요?', options: ['달라질 수 있어요', '절대 달라지지 않아요'], answer: 0 },
                conclude: '살펴보면 처음 생각이 바뀌거나 새 생각이 더해져요. 그것이 살피는 까닭이에요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 내 문장 하나를 말해 볼까요? 처음에는 ~라고 생각했는데, 살펴보니 ~." 서너 명이 말하게 하고 "처음 생각이 틀렸다"가 아니라 "더 알게 되었다"라고 바꾸어 말해 준다. 출구 2번에서 "달라지지 않는다"를 고른 학생에게는 오늘 나뭇잎 카드를 다시 보여 준다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '달팽이', slots: [{ id: 'e1', label: '더듬이 끝에 까만 눈이 있어' }, { id: 'e2', label: '지나간 자리에 반짝이는 길이 남아' }], cards: [{ id: 'zoom', text: '돋보기로 가까이 보기' }, { id: 'wait', text: '기어간 뒤까지 오래 지켜보기' }, { id: 'name', text: '이름 알아보기' }] }, prompt: '하윤이가 달팽이를 살핀 뒤 바뀐 생각이에요. 생각마다 알게 해 준 살피기 방법을 이어 보세요.', target: { match: { e1: 'zoom', e2: 'wait' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '"자세히 살펴봐도 처음 생각은 달라지지 않아."라는 말에 대한 생각으로 알맞은 것은?', options: ['맞아요. 처음 생각이 늘 맞아요.', '살펴보면 새로 알게 되어 생각이 달라질 수 있어요.', '살피면 생각이 헷갈리니 살피지 않아요.'], answer: 1, difficulty: 0.15, explain: '나뭇잎·개미·구름 모두 살펴본 뒤 처음 생각에 새 생각이 더해졌어요.' },
          { type: 'short', prompt: '오늘 살핀 것 하나로 "처음에는 ~라고 생각했는데, 살펴보니 ~." 문장을 쓰세요.' },
        ],
      },
    ],
    worksheet: {
      title: '처음에는, 살펴보니',
      items: [
        { type: 'table', prompt: '이 단원에서 살핀 것을 골라 처음 생각과 살핀 뒤 생각을 쓰세요.', columns: ['살핀 것', '처음 생각', '살핀 뒤 생각'], cells: [['솔방울', '', ''], ['돌멩이', '', ''], ['', '', '']] },
        { type: 'blank', prompt: '빈칸을 채워 문장을 완성하세요.', text: '처음에는 ___라고 생각했는데, 살펴보니 ___.', answer: '예: 나뭇잎이 그냥 초록이라고 / 한 잎에 연두와 진초록이 섞여 있었다' },
        { type: 'choice', prompt: '살핀 뒤 생각에 ○ 하세요.', options: ['개미는 다 똑같아', '개미 다리는 여섯 개야', '개미는 그냥 검은 점이야', '구름은 늘 하얘'], answer: '개미 다리는 여섯 개야' },
        { type: 'draw', prompt: '같은 대상을 왼쪽에는 살피기 전 생각대로, 오른쪽에는 살핀 뒤 알게 된 대로 그리세요.' },
      ],
      easy: {
        note: '"그냥, 다, 늘"이 들어간 말은 살피기 전 생각일 때가 많아요.',
        items: [
          { type: 'table', prompt: '처음 생각과 살핀 뒤 생각을 쓰세요.', columns: ['처음 생각', '살핀 뒤 생각'], cells: [['나뭇잎은 그냥 초록이야', '']] },
          { type: 'choice', prompt: '살핀 뒤 생각에 ○ 하세요.', options: ['개미 다리는 여섯 개야', '개미는 다 똑같아'], answer: '개미 다리는 여섯 개야' },
          { type: 'draw', prompt: '살핀 뒤 알게 된 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 맞는 칸에 놓으면 초록 테두리가 생기고 틀리면 까닭과 함께 되돌아와요. 말풍선도 맞으면 바로 표시돼요.',
      base: '스스로 나누고 채운 뒤 확인해요.',
      challenge: '살피기 방법 카드가 하나 더 섞여 있고("멀리서 보기", "손으로 집어 보기"), 마지막 말풍선에도 헷갈리는 말 카드가 더 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 자세히 살펴도 처음 생각은 달라지지 않는다고 여긴다 → 1차시 처음 그림과 지금 생각을 나란히 놓는다. ② 처음 생각을 "틀린 생각"으로 여겨 말하기를 꺼린다 → "더 알게 되었다"로 바꿔 말해 준다. ③ 생각이 왜 바뀌었는지 물으면 "그냥요"라고 한다 → 1~8차시에 해 본 살피기 방법(가까이, 뒤집어, 돌려, 오래, 소리 듣기)을 칠판에 모아 두고 고르게 한다. 개미는 머리·가슴·배 세 부분, 다리 여섯 개다(교과서 수준 사실).',
  }));

  // ───────────── 10차시 (연습) ─────────────
  lessons.push(lesson(10, S3, {
    title: '"다 똑같아"라는 친구에게 살핀 경험으로 답하기',
    objective: '"살펴도 달라지지 않는다"는 친구의 말에 직접 살펴 생각이 달라진 경험을 근거로 들어 알맞게 답하고, 생각이 바뀐 차례를 말할 수 있다.',
    illustration: {
      prompt: art('two children sitting by a stream comparing pebbles, one pointing at a white stripe on a stone with a surprised smile'),
      scene: scene([
        { motif: 'sun', x: 404, y: 56, s: 0.8 }, { motif: 'cloud', x: 110, y: 50 }, { motif: 'hills', y: 204 },
        { motif: 'wave', y: 234 }, { motif: 'tree', x: 90, y: 210 }, { motif: 'flower', x: 380, y: 216, color: 'sky' },
        { motif: 'text', x: 240, y: 136, text: '같이 살펴볼래?', size: 22 },
      ]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 7,
        teacher: '"어떤 친구가 \'돌멩이는 다 똑같아서 살필 필요 없어\'라고 했어요. 여러분은 뭐라고 말해 줄래요?" 두세 명의 대답을 듣고, "그냥 아니야"보다 "내 돌멩이에는 하얀 줄이 있었어"처럼 내가 살핀 경험을 근거로 말할 때 친구 마음이 움직인다는 것을 짚는다. 친구를 탓하는 말은 친구가 더 살피기 싫게 만든다는 것도 함께 말한다. 시연 단추로 생각이 바뀐 차례 카드를 놓는 모습을 보여 준다.',
        student: '"다 똑같아서 살필 필요 없어"라고 말하는 친구에게 무엇이라고 말해 줄지 생각해 봅시다.',
        demo: { tool: 'story', options: { cards: [{ id: 'o1', text: '"갈색 덩어리야"', motif: 'tree' }, { id: 'o2', text: '돌려 보고 만져 봐요', motif: 'leaf' }, { id: 'o3', text: '"비늘이 돌며 쌓였네!"', motif: 'star' }], slots: ['처음', '가운데', '끝'] }, sequence: [{ order: ['o1', 'o2', 'o3'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 25,
        activities: [
          {
            id: 'a1', title: '활동 1. 친구에게 어떻게 말할까', minutes: 12, tool: 'emotion',
            teacher: '"이 말을 들은 친구는 어떤 마음일까요? 그다음에 무엇을 할까요?" 보기마다 결과를 상상하게 한다. 맞장구만 치는 보기("맞아, 다 똑같아")는 둘 다 새로 알게 되는 것이 없고, 탓하는 보기는 친구가 속상해 더 살피지 않는다는 것을 짚는다. 근거가 들어간 보기의 공통점(내가 살핀 것 + 같이 해 보자)을 칠판에 적는다.',
            task: '친구의 말을 읽고, 살핀 경험을 근거로 들어 함께 살펴보게 하는 말을 골라요.',
            levels: { easy: {}, base: { revealAfterCheck: true }, challenge: { revealAfterCheck: true } },
            items: [
              { prompt: '준호가 "돌멩이는 다 똑같아서 살필 필요 없어."라고 해요. 어떻게 말하면 좋을까요?',
                toolOptions: { mode: 'branch', who: '준호', situation: '"돌멩이는 다 똑같아서 살필 필요 없어."', choices: [
                  { id: 'show', text: '내 돌엔 하얀 줄이 있었어. 같이 돌려 볼래?', result: '준호가 돌을 돌려 보다가 자기 돌의 흠을 찾았어요', mood: '신남' },
                  { id: 'agree', text: '맞아, 돌멩이는 다 똑같아.', result: '둘 다 새로 알게 된 것이 없어요', mood: '걱정', why: '맞장구만 치면 둘 다 새로 알게 되는 것이 없어요.' },
                  { id: 'blame', text: '너는 잘 몰라서 그래.', result: '준호가 속상해서 살피기 싫어졌어요', mood: '속상함', why: '탓하는 말을 들은 친구는 더 살피기 싫어져요.' }] },
                levels: { challenge: { toolOptions: { choices: [
                  { id: 'show', text: '내 돌엔 하얀 줄이 있었어. 같이 돌려 볼래?', result: '준호가 돌을 돌려 보다가 자기 돌의 흠을 찾았어요', mood: '신남' },
                  { id: 'agree', text: '맞아, 돌멩이는 다 똑같아.', result: '둘 다 새로 알게 된 것이 없어요', mood: '걱정', why: '맞장구만 치면 둘 다 새로 알게 되는 것이 없어요.' },
                  { id: 'blame', text: '너는 잘 몰라서 그래.', result: '준호가 속상해서 살피기 싫어졌어요', mood: '속상함', why: '탓하는 말을 들은 친구는 더 살피기 싫어져요.' },
                  { id: 'vague', text: '아니야, 다 달라.', result: '준호가 무엇이 다른지 몰라 고개를 갸웃해요', mood: '걱정', why: '무엇이 다른지 근거가 없으면 친구가 알 수 없어요.' }] } } },
                hints: ['보기마다 그 말을 들은 친구가 다음에 무엇을 할지 떠올려요. 내가 직접 살핀 것이 들어 있는 말인가요?'],
                target: { choice: 'show' }, difficulty: 0.15 },
              { prompt: '서연이가 "구름은 하얗다고 이미 알아. 또 볼 필요 없어."라고 해요. 어떻게 말하면 좋을까요?',
                toolOptions: { mode: 'branch', who: '서연', situation: '"구름은 하얗다고 이미 알아. 또 볼 필요 없어."', choices: [
                  { id: 'same', text: '그래, 구름은 늘 하얘.', result: '둘 다 하늘을 보지 않았어요', mood: '걱정', why: '이미 안다고 멈추면 새로 알게 되는 것이 없어요.' },
                  { id: 'look', text: '가운데가 회색인 구름도 봤어. 지금 같이 볼래?', result: '서연이가 창밖을 보고 "정말 가운데가 어둡네!" 해요', mood: '놀람' },
                  { id: 'skip', text: '하늘은 안 봐도 돼.', result: '서연이가 구름을 살필 기회를 놓쳤어요', mood: '걱정', why: '살필 기회를 함께 놓치게 돼요.' }] },
                target: { choice: 'look' }, difficulty: 0.2,
                predict: { q: '"이미 안다"는 대상도 다시 살피면 새로 알게 될까요?', options: ['새로 알게 돼요', '알 것이 없어요'], answer: 0 },
                conclude: '이미 안다고 여긴 것도 다시 살피면 새로 보이는 것이 있어요.' },
              { prompt: '도윤이가 관찰 일기에 "살펴봤는데 처음 생각과 똑같았어요."라고만 썼어요. 어떻게 말하면 좋을까요?',
                toolOptions: { mode: 'branch', who: '도윤', situation: '"살펴봤는데 처음 생각과 똑같았어요."', choices: [
                  { id: 'done', text: '처음 생각이 맞았으니 끝이야.', result: '일기에 새로 안 것이 하나도 없어요', mood: '걱정', why: '작은 차이도 찾아 적으면 일기가 자라요.' },
                  { id: 'copy', text: '내 일기를 그대로 베껴 써.', result: '도윤이가 살핀 것이 일기에 없어요', mood: '속상함', why: '내가 직접 살핀 것을 적어야 해요.' },
                  { id: 'small', text: '처음 생각에 더해진 작은 것도 찾아 적어 보자.', result: '도윤이가 "잎 뒷면이 연해요"를 덧붙였어요', mood: '뿌듯함' }] },
                levels: { challenge: { toolOptions: { choices: [
                  { id: 'done', text: '처음 생각이 맞았으니 끝이야.', result: '일기에 새로 안 것이 하나도 없어요', mood: '걱정', why: '작은 차이도 찾아 적으면 일기가 자라요.' },
                  { id: 'copy', text: '내 일기를 그대로 베껴 써.', result: '도윤이가 살핀 것이 일기에 없어요', mood: '속상함', why: '내가 직접 살핀 것을 적어야 해요.' },
                  { id: 'small', text: '처음 생각에 더해진 작은 것도 찾아 적어 보자.', result: '도윤이가 "잎 뒷면이 연해요"를 덧붙였어요', mood: '뿌듯함' },
                  { id: 'more', text: '더 크게 다시 그려 봐.', result: '그림은 커졌지만 새로 안 것은 없어요', mood: '걱정', why: '크게 그리기 전에 먼저 새로 찾은 점이 있어야 해요.' }] } } },
                target: { choice: 'small' }, difficulty: 0.25 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 생각이 바뀐 차례 놓기', minutes: 13, tool: 'story',
            teacher: '"생각은 어떤 차례로 바뀌었을까요? 처음 생각 → 살피기 → 새로 찾기 → 바뀐 생각." 이 네 칸 틀을 칠판에 그려 두고 카드를 놓게 한다. "새로 찾기"를 "살피기"보다 앞에 놓는 학생에게 "찾으려면 먼저 무엇을 해야 할까요?"라고 묻는다.',
            task: '친구의 생각이 바뀐 이야기 카드를 처음부터 끝까지 차례대로 놓아요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              { prompt: '준호의 생각이 바뀐 차례대로 이야기 카드를 놓아 보세요.',
                toolOptions: { cards: [{ id: 'j1', text: '"돌은 다 똑같아"', motif: 'mountain' }, { id: 'j2', text: '돌을 돌려 위·옆·아래를 봐요', motif: 'sun' }, { id: 'j3', text: '옆면의 흠을 찾아요', motif: 'star' }, { id: 'j4', text: '"돌마다 생김새가 달라"', motif: 'flower' }], slots: 4 },
                levels: { challenge: { prompt: '준호의 생각이 바뀐 차례대로 이야기 카드를 놓아 보세요. 들어가지 않는 카드도 있어요.', toolOptions: { cards: [{ id: 'j1', text: '"돌은 다 똑같아"', motif: 'mountain' }, { id: 'j2', text: '돌을 돌려 위·옆·아래를 봐요', motif: 'sun' }, { id: 'j3', text: '옆면의 흠을 찾아요', motif: 'star' }, { id: 'j4', text: '"돌마다 생김새가 달라"', motif: 'flower' }, { id: 'jx', text: '돌을 모아 탑을 쌓아요', motif: 'house' }] } } },
                hints: ['처음 생각 다음에는 무엇을 해야 새 것을 찾을 수 있을까요? 행동 카드를 먼저 찾아요.'],
                target: { order: ['j1', 'j2', 'j3', 'j4'] }, difficulty: 0.15 },
              { prompt: '서연이의 생각이 바뀐 차례대로 이야기 카드를 놓아 보세요.',
                toolOptions: { cards: [{ id: 's1', text: '"구름은 늘 하얘"', motif: 'cloud' }, { id: 's2', text: '창밖 구름을 오래 봐요', motif: 'sun' }, { id: 's3', text: '가운데가 회색인 것을 찾아요', motif: 'star' }, { id: 's4', text: '"구름 색도 여러 가지야"', motif: 'cloud' }], slots: 4 },
                levels: { challenge: { prompt: '서연이의 생각이 바뀐 차례대로 이야기 카드를 놓아 보세요. 들어가지 않는 카드도 있어요.', toolOptions: { cards: [{ id: 's1', text: '"구름은 늘 하얘"', motif: 'cloud' }, { id: 's2', text: '창밖 구름을 오래 봐요', motif: 'sun' }, { id: 's3', text: '가운데가 회색인 것을 찾아요', motif: 'star' }, { id: 's4', text: '"구름 색도 여러 가지야"', motif: 'cloud' }, { id: 'sx', text: '"구름 그림은 어려워"', motif: 'moon' }] } } },
                target: { order: ['s1', 's2', 's3', 's4'] }, difficulty: 0.2 },
              { prompt: '하윤이의 생각이 바뀐 차례대로 이야기 카드를 놓아 보세요. 들어가지 않는 카드도 있어요.',
                toolOptions: { cards: [{ id: 'h1', text: '"귤껍질은 매끈해"', motif: 'sun' }, { id: 'h2', text: '눈을 감고 껍질을 만져 봐요', motif: 'leaf' }, { id: 'h3', text: '오톨도톨한 점을 느껴요', motif: 'star' }, { id: 'h4', text: '"귤껍질은 오톨도톨해"', motif: 'flower' }, { id: 'hx', text: '귤을 먹어요', motif: 'tree' }], slots: 4 },
                levels: { challenge: { toolOptions: { cards: [{ id: 'h1', text: '"귤껍질은 매끈해"', motif: 'sun' }, { id: 'h2', text: '눈을 감고 껍질을 만져 봐요', motif: 'leaf' }, { id: 'h3', text: '오톨도톨한 점을 느껴요', motif: 'star' }, { id: 'h4', text: '"귤껍질은 오톨도톨해"', motif: 'flower' }, { id: 'hx', text: '귤을 먹어요', motif: 'tree' }, { id: 'hy', text: '"귤은 겨울 과일이야"', motif: 'snow' }] } } },
                target: { order: ['h1', 'h2', 'h3', 'h4'] }, difficulty: 0.3,
                conclude: '처음 생각 → 살피기 → 새로 찾기 → 바뀐 생각. 살피는 일이 생각을 바꿔요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"친구에게 말할 때 가장 힘이 있었던 말은 무엇이 들어간 말이었나요?" "내가 살핀 것"과 "같이 해 보자"를 다시 짚는다. 출구 1번에서 "아니야, 다 달라"를 고른 학생은 근거(무엇이 다른지)를 한 낱말 더 붙여 말하게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'branch', who: '지아', situation: '"꽃은 다 예쁘기만 하지 뭐. 볼 것 없어."', choices: [
            { id: 'look', text: '해바라기 씨는 빙글빙글 박혀 있었어. 같이 볼래?', result: '지아가 꽃 가운데를 들여다봐요', mood: '신남' },
            { id: 'agree', text: '응, 꽃은 다 예쁘기만 해.', result: '둘 다 새로 안 것이 없어요', mood: '걱정', why: '맞장구만 치면 새로 알게 되는 것이 없어요.' },
            { id: 'vague', text: '아니야, 다 달라.', result: '지아가 무엇이 다른지 몰라요', mood: '걱정', why: '무엇이 다른지 근거를 말해 줘야 해요.' }] }, prompt: '지아가 "꽃은 다 예쁘기만 하지 뭐."라고 해요. 어떻게 말하면 좋을지 골라 보세요.', target: { choice: 'look' }, difficulty: 0.15 },
          { type: 'choice', prompt: '친구의 생각을 바꾸는 데 가장 힘이 있는 말은 무엇이 들어간 말인가요?', options: ['친구를 탓하는 말', '내가 직접 살핀 경험', '"그냥 아니야"라는 말'], answer: 1, difficulty: 0.1, explain: '내가 살펴 찾은 것을 근거로 말하면 친구도 직접 살펴보고 싶어져요.' },
          { type: 'mood', prompt: '오늘 친구에게 말하기는 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '살핀 경험으로 말하기',
      items: [
        { type: 'table', prompt: '친구의 말에 내가 해 줄 말과 그 근거가 된 내 경험을 쓰세요.', columns: ['친구의 말', '내가 해 줄 말', '근거가 된 내 경험'], cells: [['돌멩이는 다 똑같아', '', ''], ['구름은 늘 하얘', '', '']] },
        { type: 'choice', prompt: '살핀 경험을 근거로 든 말에 ○ 하세요.', options: ['너는 잘 몰라서 그래.', '맞아, 다 똑같아.', '내 귤껍질은 오톨도톨했어. 만져 볼래?', '아니야, 다 달라.'], answer: '내 귤껍질은 오톨도톨했어. 만져 볼래?' },
        { type: 'blank', prompt: '생각이 바뀐 차례를 채우세요.', text: '처음 생각 → ___ → 새로 찾기 → ___', answer: '살피기, 바뀐 생각' },
        { type: 'short', prompt: '이 단원에서 내 생각이 가장 많이 바뀐 대상은 무엇이고, 어떻게 바뀌었는지 쓰세요.' },
      ],
      easy: {
        note: '좋은 말 = 내가 살핀 것 + "같이 해 볼래?"',
        items: [
          { type: 'choice', prompt: '살핀 경험을 근거로 든 말에 ○ 하세요.', options: ['내 돌엔 하얀 줄이 있었어. 같이 볼래?', '맞아, 다 똑같아.'], answer: '내 돌엔 하얀 줄이 있었어. 같이 볼래?' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '처음 생각 → ___ → 새로 찾기 → 바뀐 생각', answer: '살피기' },
          { type: 'short', prompt: '살펴보고 생각이 바뀐 대상을 하나 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '보기를 고르면 그 결과(친구의 마음과 행동)가 바로 보여, 견주어 보고 고를 수 있어요. 차례 카드는 맞는 자리에 놓으면 초록 테두리가 생겨요.',
      base: '결과는 맞힌 뒤에만 보여 스스로 결과를 떠올리고 골라요.',
      challenge: '근거 없이 반대만 하는 말처럼 그럴듯한 보기가 하나 더 있고, 결과는 맞힌 뒤에만 보여요. 차례 놓기에는 이야기에 들어가지 않는 카드가 섞여 있어 빼고 놓아야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 자세히 살펴도 처음 생각은 달라지지 않는다고 여긴다 → 생각이 바뀐 차례 네 칸을 학생 자신의 경험으로 채우게 한다. ② 반대 말을 하면 된다고 여겨 근거 없이 "아니야"라고만 말한다 → 무엇이 다른지 한 낱말 더. ③ 친구 생각을 "틀렸다"고 탓한다 → 결과 카드의 마음을 함께 읽는다. 활동지는 단원 뒤쪽(23차시)의 자기 평가에 다시 쓴다.',
  }));

  // ───────────── 11차시 (확장) ─────────────
  lessons.push(lesson(11, S3, {
    title: '다음에 살펴볼 대상을 고르고 관찰 계획 세우기',
    objective: '다음에 자세히 살펴보고 싶은 대상을 고르고, 어떤 감각과 방향으로 살필지와 지킬 안전 약속을 담아 관찰 계획을 세울 수 있다.',
    illustration: {
      prompt: art('a child writing an observation plan in a notebook while looking at a spider web with dew drops, rain on a window and a bar of soap'),
      scene: scene([
        { motif: 'cloud', x: 120, y: 54 }, { motif: 'cloud', x: 330, y: 44, s: 0.7 }, { motif: 'snow', x: 200, y: 84, s: 0.5 },
        { motif: 'hills', y: 210 }, { motif: 'tree', x: 400, y: 216 }, { motif: 'flower', x: 90, y: 220, color: 'lavender' },
        { motif: 'text', x: 240, y: 146, text: '다음엔 무엇을 살펴볼까?', size: 22 },
      ]),
    },
    safety: ['관찰할 때 모르는 것은 맛보지 않고, 거미줄·벌레는 손대지 않고 눈으로만 봐요.', '비누를 만진 뒤에는 손을 씻고, 눈을 비비지 않아요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"이 단원에서 솔방울, 돌멩이, 나뭇잎을 살폈어요. 다음에 꼭 자세히 살펴보고 싶은 것이 있나요?" 학생들이 말한 대상을 칠판에 모은다. "빗소리를 살피려면 눈이 좋을까요, 귀가 좋을까요?" 대상마다 알맞은 감각이 다르다는 것을 짚는다. "거미줄을 손으로 만져 볼까요?" 하고 물어, 관찰에는 안전 약속도 들어가야 한다는 것을 연다. 시연 단추로 빗소리와 알맞은 살필 방법 카드가 이어지는 모습을 보여 준다.',
        student: '다음에 자세히 살펴보고 싶은 것을 하나 떠올려 말해 봅시다.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '살필 방법', slots: [{ id: 'd1', label: '빗소리' }], cards: [{ id: 'm1', text: '눈을 감고 귀로 들어요' }, { id: 'm2', text: '맛을 봐요' }] }, sequence: [{ match: { d1: 'm1' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 대상에 알맞은 살필 방법 잇기', minutes: 13, tool: 'mindmap',
            teacher: '"이 대상의 가장 큰 특징은 소리일까요, 냄새일까요, 모양일까요?" 대상마다 특징이 잘 드러나는 감각을 고르게 한다. "맛을 봐요" 카드를 고르는 학생에게는 관찰에서 모르는 것은 맛보지 않는다는 약속을 짚는다. 이름만 찾아보는 것은 살피는 것이 아니라는 것도 함께 말한다.',
            task: '살펴볼 대상마다 특징이 가장 잘 드러나는 살필 방법 카드를 이어요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              { prompt: '세 대상에 가장 알맞은 살필 방법 카드를 이어 보세요.',
                toolOptions: { mode: 'match', topic: '살필 방법', slots: [{ id: 'o1', label: '빗소리' }, { id: 'o2', label: '비누' }, { id: 'o3', label: '이슬 맺힌 거미줄' }], cards: [{ id: 'm1', text: '눈을 감고 귀로 들어요' }, { id: 'm2', text: '코로 맡고 손으로 미끄러움을 느껴요' }, { id: 'm3', text: '손대지 않고 가까이서 눈으로 봐요' }, { id: 'mx', text: '맛을 봐요' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'm1', text: '눈을 감고 귀로 들어요' }, { id: 'm2', text: '코로 맡고 손으로 미끄러움을 느껴요' }, { id: 'm3', text: '손대지 않고 가까이서 눈으로 봐요' }, { id: 'mx', text: '맛을 봐요' }, { id: 'my', text: '손가락으로 톡 건드려 봐요' }] } } },
                hints: ['대상마다 "무엇으로 가장 잘 알 수 있을까? 다치거나 망가지지 않을까?"를 함께 따져요.'],
                target: { match: { o1: 'm1', o2: 'm2', o3: 'm3' } }, difficulty: 0.15 },
              { prompt: '다른 세 대상에 가장 알맞은 살필 방법 카드를 이어 보세요.',
                toolOptions: { mode: 'match', topic: '살필 방법', slots: [{ id: 'o1', label: '친구 운동화 밑창' }, { id: 'o2', label: '시냇물' }, { id: 'o3', label: '바람' }], cards: [{ id: 'm1', text: '뒤집어 아래에서 무늬를 봐요' }, { id: 'm2', text: '물소리를 듣고 물결을 봐요' }, { id: 'm3', text: '흔들리는 잎을 보고 볼로 느껴요' }, { id: 'mx', text: '이름만 찾아봐요' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'm1', text: '뒤집어 아래에서 무늬를 봐요' }, { id: 'm2', text: '물소리를 듣고 물결을 봐요' }, { id: 'm3', text: '흔들리는 잎을 보고 볼로 느껴요' }, { id: 'mx', text: '이름만 찾아봐요' }, { id: 'my', text: '멀리서 한 번만 봐요' }] } } },
                target: { match: { o1: 'm1', o2: 'm2', o3: 'm3' } }, difficulty: 0.25,
                predict: { q: '바람은 눈에 보이지 않아요. 바람도 살펴볼 수 있을까요?', options: ['살펴볼 수 있어요', '살펴볼 수 없어요'], answer: 0 },
                conclude: '바람처럼 보이지 않는 것도 흔들리는 잎과 피부의 느낌으로 살필 수 있어요.' },
              { prompt: '또 다른 세 대상에 가장 알맞은 살필 방법 카드를 이어 보세요.',
                toolOptions: { mode: 'match', topic: '살필 방법', slots: [{ id: 'o1', label: '내 필통' }, { id: 'o2', label: '귤 껍질' }, { id: 'o3', label: '종소리' }], cards: [{ id: 'm1', text: '위·옆·아래로 돌려 봐요' }, { id: 'm2', text: '손끝으로 결을 느끼고 냄새를 맡아요' }, { id: 'm3', text: '울림이 언제 사라지는지 들어요' }, { id: 'mx', text: '맛을 봐요' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'm1', text: '위·옆·아래로 돌려 봐요' }, { id: 'm2', text: '손끝으로 결을 느끼고 냄새를 맡아요' }, { id: 'm3', text: '울림이 언제 사라지는지 들어요' }, { id: 'mx', text: '맛을 봐요' }, { id: 'my', text: '이름만 찾아봐요' }] } } },
                target: { match: { o1: 'm1', o2: 'm2', o3: 'm3' } }, difficulty: 0.25 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 관찰 계획에 넣을 약속 고르기', minutes: 13, tool: 'kitchen',
            teacher: '"이 계획대로 하면 대상도 지키고 나도 안전할까요?" 목록을 하나씩 읽으며 "넣을까, 뺄까?"를 묻는다. 거미줄을 막대로 찔러 보거나 비를 맞으러 나가는 것처럼 대상이나 몸을 해치는 방법은 빼야 한다는 것을 짚는다. 고른 뒤 짝과 "왜 뺐는지"를 한 문장씩 말하게 한다.',
            task: '관찰 계획에 넣으면 좋은 약속만 골라 표시해요. 대상이나 내 몸을 해치는 것은 빼요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '거미줄 관찰 계획에 넣을 약속만 골라 표시하세요.',
                toolOptions: { mode: 'checklist', title: '거미줄 관찰 계획', items: [{ id: 'w1', text: '손대지 않고 눈으로만 봐요' }, { id: 'w2', text: '거미가 놀라지 않게 조용히 봐요' }, { id: 'w3', text: '이슬 맺힌 아침에 다시 봐요' }, { id: 'w4', text: '막대로 찔러 봐요' }] },
                levels: { challenge: { toolOptions: { items: [{ id: 'w1', text: '손대지 않고 눈으로만 봐요' }, { id: 'w2', text: '거미가 놀라지 않게 조용히 봐요' }, { id: 'w3', text: '이슬 맺힌 아침에 다시 봐요' }, { id: 'w4', text: '막대로 찔러 봐요' }, { id: 'w5', text: '거미줄을 떼어 집에 가져가요' }, { id: 'w6', text: '본 것을 그림으로 남겨요' }] }, prompt: '거미줄 관찰 계획에 넣을 약속만 골라 표시하세요. 그림으로 남기는 것도 생각해요.', target: { checklist: ['w1', 'w2', 'w3', 'w6'] } } },
                target: { checklist: ['w1', 'w2', 'w3'] }, difficulty: 0.15 },
              { prompt: '빗소리 관찰 계획에 넣을 약속만 골라 표시하세요.',
                toolOptions: { mode: 'checklist', title: '빗소리 관찰 계획', items: [{ id: 'r1', text: '창가에서 눈을 감고 들어요' }, { id: 'r2', text: '들린 소리를 흉내 말로 적어요' }, { id: 'r3', text: '비가 그친 뒤의 소리와 견주어요' }, { id: 'r4', text: '우산 없이 나가 비를 맞아요' }] },
                levels: { challenge: { toolOptions: { items: [{ id: 'r1', text: '창가에서 눈을 감고 들어요' }, { id: 'r2', text: '들린 소리를 흉내 말로 적어요' }, { id: 'r3', text: '비가 그친 뒤의 소리와 견주어요' }, { id: 'r4', text: '우산 없이 나가 비를 맞아요' }, { id: 'r5', text: '창문을 활짝 열고 몸을 내밀어요' }] } } },
                hints: ['약속마다 "이대로 하면 내 몸이 젖거나 다치지 않을까?"를 물어요.'],
                target: { checklist: ['r1', 'r2', 'r3'] }, difficulty: 0.2 },
              { prompt: '비누 관찰 계획에 넣을 약속만 골라 표시하세요.',
                toolOptions: { mode: 'checklist', title: '비누 관찰 계획', items: [{ id: 's1', text: '코로 냄새를 맡아요' }, { id: 's2', text: '물에 적셔 미끄러움을 느껴요' }, { id: 's3', text: '다 살핀 뒤 손을 씻어요' }, { id: 's4', text: '맛을 봐요' }, { id: 's5', text: '거품 묻은 손으로 눈을 비벼요' }] },
                levels: { challenge: { toolOptions: { items: [{ id: 's1', text: '코로 냄새를 맡아요' }, { id: 's2', text: '물에 적셔 미끄러움을 느껴요' }, { id: 's3', text: '다 살핀 뒤 손을 씻어요' }, { id: 's4', text: '맛을 봐요' }, { id: 's5', text: '거품 묻은 손으로 눈을 비벼요' }, { id: 's6', text: '친구 얼굴에 거품을 묻혀요' }] } } },
                target: { checklist: ['s1', 's2', 's3'] }, difficulty: 0.2,
                conclude: '좋은 관찰 계획에는 살필 감각과 방법, 그리고 나와 대상을 지키는 약속이 함께 들어가요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"내 관찰 계획 표를 짝에게 읽어 주세요. 짝은 빠진 약속이 없는지 들어 주세요." 계획 표 네 칸(대상·감각·방향·안전 약속)이 모두 찼는지 확인한다. 출구 1번에서 "맛을 봐요"를 고른 학생과는 안전 약속을 한 번 더 함께 읽는다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '살필 방법', slots: [{ id: 'o1', label: '솔잎' }, { id: 'o2', label: '교실 시계 소리' }], cards: [{ id: 'm1', text: '손끝으로 뾰족함을 살짝 느껴요' }, { id: 'm2', text: '조용할 때 귀 기울여 들어요' }, { id: 'mx', text: '맛을 봐요' }] }, prompt: '두 대상에 가장 알맞은 살필 방법 카드를 이어 보세요.', target: { match: { o1: 'm1', o2: 'm2' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '관찰 계획에 꼭 들어가야 하는 것이 아닌 것은?', options: ['살필 대상', '쓸 감각과 살필 방향', '지킬 안전 약속', '내가 좋아하는 색'], answer: 3, difficulty: 0.15, explain: '관찰 계획에는 대상, 감각과 방향, 안전 약속이 들어가요.' },
          { type: 'short', prompt: '다음에 살펴보고 싶은 대상과, 그것을 고른 까닭을 쓰세요.' },
        ],
      },
    ],
    worksheet: {
      title: '나의 관찰 계획',
      items: [
        { type: 'table', prompt: '다음에 살펴볼 대상으로 관찰 계획을 세우세요.', columns: ['살필 대상', '쓸 감각', '살필 방향·거리', '안전 약속'], cells: [['', '', '', ''], ['', '', '', '']] },
        { type: 'choice', prompt: '이슬 맺힌 거미줄을 살피는 방법으로 알맞은 것에 ○ 하세요.', options: ['막대로 찔러 봐요', '손대지 않고 가까이서 눈으로 봐요', '떼어서 집에 가져가요', '맛을 봐요'], answer: '손대지 않고 가까이서 눈으로 봐요' },
        { type: 'check', prompt: '내 관찰 계획에 들어간 것에 ✓ 하세요.', options: ['살필 대상', '쓸 감각', '살필 방향이나 거리', '안전 약속'] },
        { type: 'short', prompt: '계획대로 살펴보면 무엇을 새로 알게 될 것 같은지 쓰세요.' },
      ],
      easy: {
        note: '계획 = 무엇을 + 어떤 감각으로 + 어떻게 안전하게',
        items: [
          { type: 'table', prompt: '관찰 계획을 쓰세요.', columns: ['살필 대상', '쓸 감각', '안전 약속'], cells: [['', '', '']] },
          { type: 'choice', prompt: '빗소리를 살피는 데 알맞은 감각에 ○ 하세요.', options: ['귀', '혀'], answer: '귀' },
          { type: 'short', prompt: '다음에 살펴보고 싶은 것을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞게 이은 카드에 초록 테두리가 생기고, 약속 목록은 네 개뿐이에요.',
      base: '스스로 잇고 고른 뒤 확인해요.',
      challenge: '헷갈리는 방법 카드와 약속이 더 섞여 있고, 거미줄 계획에는 "그림으로 남기기"까지 넣어야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 모든 대상을 눈으로만 살피려 한다 → 대상의 가장 큰 특징(소리·냄새·결)을 먼저 묻는다. ② 이름을 찾아보는 것을 살피는 것으로 여긴다. ③ 관찰 중 안전(맛보기, 생물 건드리기, 비누 거품)을 놓친다 → 계획 표에 안전 약속 칸을 꼭 채운다. 세운 계획은 집이나 쉬는 시간에 실제로 해 보고 12차시 감상 활동에 가져오게 한다.',
  }));

  // ───────────── 12차시 (확장) ─────────────
  lessons.push(lesson(12, S3, {
    title: '친구의 관찰 작품을 보고 구체적으로 말해 주기',
    objective: '친구의 관찰 작품에서 자세히 살핀 부분을 찾아 "어디가, 어떻게"가 드러나게 구체적으로 말해 주고, 더 살펴볼 점을 하나 제안할 수 있다.',
    illustration: {
      prompt: art('children walking around a classroom gallery of observation drawings of pine cones, strawberries and cats, pointing at details and talking'),
      scene: scene([
        { motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'cloud', x: 100, y: 50 }, { motif: 'hills', y: 214 },
        { motif: 'house', x: 240, y: 222, s: 1.2 }, { motif: 'star', x: 120, y: 120, s: 0.6 }, { motif: 'star', x: 360, y: 120, s: 0.6 },
        { motif: 'text', x: 240, y: 92, text: '어디가, 어떻게 좋아?', size: 22 },
      ]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 7,
        teacher: '한 학생의 관찰 작품(허락을 받아)을 띄우고 두 가지 말을 들려준다. "예쁘다." 그리고 "솔방울 비늘이 층층이 겹친 모습이 잘 보여서 진짜 만져질 것 같아." "어느 말을 들었을 때 다음에 무엇을 더 잘하면 될지 알 수 있나요?" 구체적인 말에는 "어디가(부분) + 어떻게(까닭)"가 들어 있다는 것을 칠판에 적는다. 시연 단추로 구체적인 감상 말 카드만 바구니에 담기는 모습을 보여 준다.',
        student: '"예쁘다"와 "비늘이 층층이 겹친 모습이 잘 보여"를 들으면 어떤 차이가 있는지 말해 봅시다.',
        demo: { tool: 'mindmap', options: { mode: 'pick', topic: '구체적인 감상 말', cards: [{ id: 'd1', text: '비늘이 층층이 겹친 모습이 잘 보여' }, { id: 'd2', text: '예쁘다' }] }, sequence: [{ pick: ['d1'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 25,
        activities: [
          {
            id: 'a1', title: '활동 1. 구체적인 감상 말 고르기', minutes: 12, tool: 'mindmap',
            teacher: '"이 말에 \'어디가\'가 있나요? \'어떻게\'가 있나요?" 카드마다 두 가지를 손가락 두 개로 세어 보게 한다. "잘했어, 예뻐"도 나쁜 말은 아니지만 무엇을 잘했는지 알 수 없다고 짚는다. 작품과 상관없는 말(그린 사람 칭찬, 다른 작품 이야기)은 감상이 아니라는 것도 말한다.',
            task: '친구 작품을 보고 한 말 가운데, 어느 부분이 어떻게 좋은지 드러난 말만 바구니에 넣어요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '친구의 솔방울 관찰 작품을 보고 한 말이에요. 구체적인 감상 말만 고르세요.',
                toolOptions: { mode: 'pick', topic: '구체적인 감상 말', cards: [{ id: 'p1', text: '비늘 끝이 뾰족하게 표현돼 따가워 보여' }, { id: 'p2', text: '아래 꼭지까지 있어 돌려 본 게 느껴져' }, { id: 'p3', text: '예쁘다' }, { id: 'p4', text: '잘했어' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'p1', text: '비늘 끝이 뾰족하게 표현돼 따가워 보여' }, { id: 'p2', text: '아래 꼭지까지 있어 돌려 본 게 느껴져' }, { id: 'p3', text: '예쁘다' }, { id: 'p4', text: '잘했어' }, { id: 'p5', text: '솔방울 줍느라 힘들었겠다' }] } } },
                hints: ['카드마다 손가락 두 개로 세어 봐요. 작품의 "어디가"와 "어떻게"가 둘 다 들어 있나요?'],
                target: { pick: ['p1', 'p2'] }, difficulty: 0.15 },
              { prompt: '친구의 딸기 확대 작품을 보고 한 말이에요. 구체적인 감상 말만 고르세요.',
                toolOptions: { mode: 'pick', topic: '구체적인 감상 말', cards: [{ id: 's1', text: '씨가 겉에 박힌 모습이 커서 잘 보여' }, { id: 's2', text: '빨강 위 노란 씨가 눈에 확 띄어' }, { id: 's3', text: '멋있다' }, { id: 's4', text: '너는 그림을 늘 잘 그려' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 's1', text: '씨가 겉에 박힌 모습이 커서 잘 보여' }, { id: 's2', text: '빨강 위 노란 씨가 눈에 확 띄어' }, { id: 's3', text: '멋있다' }, { id: 's4', text: '너는 그림을 늘 잘 그려' }, { id: 's5', text: '딸기가 먹고 싶어' }] } } },
                target: { pick: ['s1', 's2'] }, difficulty: 0.2 },
              { prompt: '친구의 고양이 앞모습 작품을 보고 한 말이에요. 구체적인 감상 말만 고르세요.',
                toolOptions: { mode: 'pick', topic: '구체적인 감상 말', cards: [{ id: 'c1', text: '두 귀가 코에서 같은 거리라 반듯해 보여' }, { id: 'c2', text: '눈을 크게 붙여 놀란 표정 같아' }, { id: 'c3', text: '귀엽다' }, { id: 'c4', text: '우리 집 고양이가 더 귀여워' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'c1', text: '두 귀가 코에서 같은 거리라 반듯해 보여' }, { id: 'c2', text: '눈을 크게 붙여 놀란 표정 같아' }, { id: 'c3', text: '귀엽다' }, { id: 'c4', text: '우리 집 고양이가 더 귀여워' }, { id: 'c5', text: '좋아' }] } } },
                target: { pick: ['c1', 'c2'] }, difficulty: 0.25,
                predict: { q: '"귀엽다"라는 말을 들은 친구는 다음에 무엇을 더 잘하면 될지 알 수 있을까요?', options: ['알 수 있어요', '알기 어려워요'], answer: 1 },
                conclude: '"어디가, 어떻게"가 들어간 말을 들어야 친구가 잘한 점과 다음에 할 일을 알 수 있어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 칭찬과 제안을 말풍선에 넣기', minutes: 13, tool: 'story',
            teacher: '"칭찬 말풍선에는 잘 살핀 부분을, 제안 말풍선에는 더 살펴보면 좋을 점을 넣어요." 제안은 "~도 살펴보면 어때?"처럼 묻는 말로 하면 친구가 기분 좋게 받아들인다는 것을 짚는다. 고른 말풍선을 짝 작품에 실제로 말해 보게 한다.',
            task: '친구 작품을 보고, 칭찬 말풍선과 제안 말풍선의 빈칸에 알맞은 말 카드를 넣어요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              { prompt: '친구의 솔방울 작품에 할 칭찬과 제안을 완성해 보세요.',
                toolOptions: { mode: 'fill', cards: ['비늘이 겹친', '옆에서 본 모습', '예쁜'], slots: [{ id: 'b1', who: '민지', motif: 'star', label: '___ 모습이 층층이 잘 보여.' }, { id: 'b2', who: '민지', motif: 'leaf', label: '___도 살펴보면 어때?' }] },
                levels: { challenge: { toolOptions: { cards: ['비늘이 겹친', '옆에서 본 모습', '예쁜', '네 솜씨'] } } },
                hints: ['칭찬 칸에는 작품에서 잘 살핀 부분, 제안 칸에는 아직 살피지 않은 방향이나 부분이 들어가요.'],
                target: { fill: { b1: '비늘이 겹친', b2: '옆에서 본 모습' } }, difficulty: 0.2 },
              { prompt: '친구의 해바라기 작품에 할 칭찬과 제안을 완성해 보세요.',
                toolOptions: { mode: 'fill', cards: ['씨가 빙글빙글 박힌', '줄기의 털', '멋진'], slots: [{ id: 'b1', who: '준호', motif: 'star', label: '___ 무늬가 가운데에 또렷해.' }, { id: 'b2', who: '준호', motif: 'flower', label: '___도 만져 보고 나타내면 어때?' }] },
                levels: { challenge: { toolOptions: { cards: ['씨가 빙글빙글 박힌', '줄기의 털', '멋진', '해바라기 이름'] } } },
                target: { fill: { b1: '씨가 빙글빙글 박힌', b2: '줄기의 털' } }, difficulty: 0.25 },
              { prompt: '친구의 마른 나뭇잎 작품에 할 칭찬과 제안을 완성해 보세요.',
                toolOptions: { mode: 'fill', cards: ['잎맥이 가지처럼 뻗은', '잎 뒷면의 색', '좋은'], slots: [{ id: 'b1', who: '서연', motif: 'star', label: '___ 모습이 자세해서 진짜 같아.' }, { id: 'b2', who: '서연', motif: 'leaf', label: '___도 견주어 보면 어때?' }] },
                levels: { challenge: { toolOptions: { cards: ['잎맥이 가지처럼 뻗은', '잎 뒷면의 색', '좋은', '다른 친구 그림'] } } },
                target: { fill: { b1: '잎맥이 가지처럼 뻗은', b2: '잎 뒷면의 색' } }, difficulty: 0.3,
                conclude: '칭찬은 잘 살핀 부분을, 제안은 더 살펴볼 점을 구체적으로 말해요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 친구에게 들은 말 가운데 가장 도움이 된 말은 무엇인가요? 왜 도움이 되었나요?" 서너 명이 말하게 한다. 이로써 감각으로 살피기(1~12차시)를 마치고, 다음 시간부터 이 살피는 힘으로 생활 속 미술을 찾아 나선다고 예고한다. 출구 1번에서 "좋아요"를 함께 고른 학생에게는 "어디가?"를, "다음엔 더 잘해 봐"를 고른 학생에게는 "무엇을 더 살펴보라는 말인가요?"를 다시 묻는다. 구체적인 제안은 더 살펴볼 부분이 들어간 말이다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '구체적인 감상 말', cards: [{ id: 'e1', text: '잎맥이 가늘게 퍼진 모습이 또렷해' }, { id: 'e2', text: '뒷면 색도 견주어 보면 어때?' }, { id: 'e3', text: '좋아요' }, { id: 'e4', text: '다음엔 더 잘해 봐' }] }, prompt: '친구의 나뭇잎 작품을 보고 한 말이에요. 구체적인 칭찬이나 제안만 고르세요.', target: { pick: ['e1', 'e2'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '구체적인 감상 말에 꼭 들어가는 두 가지는 무엇인가요?', options: ['어디가 + 어떻게', '누가 + 언제', '얼마나 + 몇 개'], answer: 0, difficulty: 0.1, explain: '작품의 어느 부분이(어디가) 어떻게 좋은지 말하면 구체적인 감상이 돼요.' },
          { type: 'mood', prompt: '오늘 친구 작품 감상하기는 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '구체적으로 말해 주기',
      items: [
        { type: 'table', prompt: '친구 작품 두 개를 보고 쓰세요.', columns: ['친구 작품', '잘 살핀 부분(어디가)', '어떻게 좋은지', '더 살펴볼 점'], cells: [['', '', '', ''], ['', '', '', '']] },
        { type: 'choice', prompt: '구체적인 감상 말에 ○ 하세요.', options: ['예쁘다', '잘했어', '두 귀가 같은 거리라 반듯해 보여', '귀엽다'], answer: '두 귀가 같은 거리라 반듯해 보여' },
        { type: 'blank', prompt: '칭찬과 제안 문장을 완성하세요.', text: '___ 모습이 잘 보여. ___도 살펴보면 어때?', answer: '예: 비늘이 겹친 / 옆에서 본 모습' },
        { type: 'short', prompt: '친구에게 들은 말 가운데 가장 도움이 된 말과 그 까닭을 쓰세요.' },
      ],
      easy: {
        note: '구체적인 말 = 어디가 + 어떻게',
        items: [
          { type: 'choice', prompt: '구체적인 감상 말에 ○ 하세요.', options: ['씨가 커서 잘 보여', '멋있다'], answer: '씨가 커서 잘 보여' },
          { type: 'table', prompt: '친구 작품을 보고 쓰세요.', columns: ['어디가', '어떻게 좋은지'], cells: [['', '']] },
          { type: 'short', prompt: '친구에게 해 줄 칭찬을 한 문장으로 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 카드를 넣으면 초록 테두리가, 막연한 말은 까닭과 함께 되돌아와요.',
      base: '스스로 고르고 채운 뒤 확인해요.',
      challenge: '작품과 상관없는 말이 더 섞여 있어, 감상과 잡담을 가려야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① "예쁘다, 잘했다"로 끝낸다 → "어디가? 어떻게?"를 되묻는다. ② 작품이 아니라 그린 사람이나 자기 경험을 말한다 → 작품 속 부분을 손가락으로 짚으며 말하게 한다. ③ 제안을 지적으로 받아들여 속상해한다 → "~도 살펴보면 어때?"처럼 묻는 말로 한다. 친구 작품을 띄울 때는 미리 허락을 받고, 이름 대신 작품 번호로 부른다.',
  }));

  // ───────────── 13차시 (핵심) ─────────────
  lessons.push(lesson(13, S4, {
    title: '교실과 복도에서 숨은 생활 속 미술 찾기',
    objective: '교실·복도·길거리의 물건과 표시에서 사람이 색과 모양을 생각해 만든 미술을 찾고, 그 미술이 하는 일을 근거를 들어 말할 수 있다.',
    illustration: {
      prompt: art('a school hallway with a green emergency exit sign, a red fire extinguisher, restroom pictograms and a colorful notice board'),
      scene: scene([
        { motif: 'sun', x: 410, y: 56, s: 0.7 }, { motif: 'cloud', x: 110, y: 50 }, { motif: 'hills', y: 214 },
        { motif: 'house', x: 150, y: 222, s: 1.2 }, { motif: 'house', x: 340, y: 222, color: 'sky' }, { motif: 'tree', x: 430, y: 220, s: 0.8 },
        { motif: 'text', x: 240, y: 118, text: '미술은 어디에 있을까?', size: 22 },
      ]),
    },
    safety: ['복도를 둘러볼 때는 뛰지 않고, 다른 반 수업을 방해하지 않게 조용히 걸어요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 7,
        teacher: '"미술은 어디에 있을까요?" 대부분 "미술관, 그림"이라고 답한다. 비상구 표시 사진을 띄우고 "이 초록 표시도 누군가 색과 모양을 정해서 만들었어요. 이것도 미술일까요?"라고 묻는다. 손을 들게 한 뒤, 사람이 색과 모양을 생각해 만든 것이면 생활 속에서 일하는 미술이라고 정리한다. 앞 단원에서 기른 "자세히 살피기"로 오늘은 교실과 복도에 숨은 미술을 찾자고 연다. 시연 단추로 교실에서 찾은 미술 카드만 바구니에 담기는 모습을 보여 준다.',
        student: '지금 교실에서 누군가 색이나 모양을 생각해 만든 것을 하나 찾아 가리켜 봅시다.',
        demo: { tool: 'mindmap', options: { mode: 'pick', topic: '생활 속 미술', cards: [{ id: 'd1', text: '칠판 위 급훈 글씨 꾸밈' }, { id: 'd2', text: '창밖의 하늘' }] }, sequence: [{ pick: ['d1'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 25,
        activities: [
          {
            id: 'a1', title: '활동 1. 사람이 만든 생활 속 미술 고르기', minutes: 9, tool: 'mindmap',
            teacher: '"하늘의 구름은 누가 색과 모양을 정했나요?" 자연이 만든 것과 사람이 생각해 만든 것을 가르는 기준을 세운다. 도전 단계에서 "미술관에 걸린 그림"을 빼는 학생에게는 "그것도 미술이에요. 미술관에도, 생활 곳곳에도 있어요"라고 짚어, 미술관 그림만 미술이라는 생각과 미술관 그림은 미술이 아니라는 생각을 함께 바로잡는다.',
            task: '사람이 색과 모양을 생각해 만든 것만 바구니에 넣어요. 자연이 만든 것은 남겨요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '교실에서 찾은 것 가운데, 사람이 색과 모양을 생각해 만든 생활 속 미술만 고르세요.',
                toolOptions: { mode: 'pick', topic: '생활 속 미술', cards: [{ id: 'c1', text: '비상구 표시 그림' }, { id: 'c2', text: '우유갑의 그림과 글씨' }, { id: 'c3', text: '시간표의 과목별 색 칸' }, { id: 'c4', text: '창밖 하늘의 구름' }, { id: 'c5', text: '운동장의 흙' }] },
                levels: { challenge: { prompt: '교실과 미술관에서 찾은 것 가운데 사람이 색과 모양을 생각해 만든 미술을 모두 고르세요.', toolOptions: { cards: [{ id: 'c1', text: '비상구 표시 그림' }, { id: 'c2', text: '우유갑의 그림과 글씨' }, { id: 'c3', text: '시간표의 과목별 색 칸' }, { id: 'c4', text: '창밖 하늘의 구름' }, { id: 'c5', text: '운동장의 흙' }, { id: 'c6', text: '미술관에 걸린 그림' }] }, target: { pick: ['c1', 'c2', 'c3', 'c6'] } } },
                target: { pick: ['c1', 'c2', 'c3'] }, difficulty: 0.15,
                predict: { q: '비상구 표시도 미술이라고 할 수 있을까요?', options: ['미술이에요', '미술이 아니에요'], answer: 0 },
                conclude: '사람이 색과 모양을 생각해 만든 것이면 생활 속에서 일하는 미술이에요.' },
              { prompt: '복도에서 찾은 것 가운데, 사람이 색과 모양을 생각해 만든 생활 속 미술만 고르세요.',
                toolOptions: { mode: 'pick', topic: '생활 속 미술', cards: [{ id: 'h1', text: '화장실 문의 남녀 그림' }, { id: 'h2', text: '계단 끝의 노란 줄' }, { id: 'h3', text: '소화기의 빨간 몸통' }, { id: 'h4', text: '복도에 들어온 햇빛' }, { id: 'h5', text: '창틀에 쌓인 먼지' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'h1', text: '화장실 문의 남녀 그림' }, { id: 'h2', text: '계단 끝의 노란 줄' }, { id: 'h3', text: '소화기의 빨간 몸통' }, { id: 'h4', text: '복도에 들어온 햇빛' }, { id: 'h5', text: '창틀에 쌓인 먼지' }, { id: 'h6', text: '화분에 핀 꽃' }] } } },
                hints: ['카드마다 "누가 이 색과 모양을 정했나요?"를 물어요. 사람이면 넣고, 자연이 만든 것은 남겨요.'],
                target: { pick: ['h1', 'h2', 'h3'] }, difficulty: 0.2 },
              { prompt: '학교 앞 길에서 찾은 것 가운데, 사람이 색과 모양을 생각해 만든 생활 속 미술만 고르세요.',
                toolOptions: { mode: 'pick', topic: '생활 속 미술', cards: [{ id: 'r1', text: '횡단보도의 흰 줄무늬' }, { id: 'r2', text: '버스 정류장 노선도' }, { id: 'r3', text: '가게 간판 글씨' }, { id: 'r4', text: '바람에 날리는 낙엽' }, { id: 'r5', text: '비 온 뒤 물웅덩이' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'r1', text: '횡단보도의 흰 줄무늬' }, { id: 'r2', text: '버스 정류장 노선도' }, { id: 'r3', text: '가게 간판 글씨' }, { id: 'r4', text: '바람에 날리는 낙엽' }, { id: 'r5', text: '비 온 뒤 물웅덩이' }, { id: 'r6', text: '저녁노을' }] } } },
                target: { pick: ['r1', 'r2', 'r3'] }, difficulty: 0.2 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 생활 속 미술이 하는 일 잇기', minutes: 9, tool: 'mindmap',
            teacher: '"왜 비상구 표시는 초록 바탕에 달리는 사람 그림일까요? 글자로만 쓰면 어떨까요?" 색과 모양마다 까닭(근거)을 말하게 한다. "그냥 예쁘게 하려고"를 고르는 학생에게는 "예쁘게만 하려면 왜 하필 그 색이었을까요?"라고 되묻는다. 하는 일에는 알려 주기, 눈에 띄게 하기, 쓰기 편하게 하기처럼 여러 가지가 있다는 것을 예고한다.',
            task: '생활 속 미술의 색과 모양이 하는 일을 읽고, 알맞은 까닭 카드를 이어요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              { prompt: '복도의 생활 속 미술이 하는 일을 이어 보세요.',
                toolOptions: { mode: 'match', topic: '하는 일', slots: [{ id: 's1', label: '비상구 표시의 달리는 사람' }, { id: 's2', label: '소화기: 빨간 몸통' }, { id: 's3', label: '화장실 문: 남녀 그림' }], cards: [{ id: 'j1', text: '불이 나면 나가는 길을 알려 줘요' }, { id: 'j2', text: '눈에 잘 띄어 급할 때 빨리 찾아요' }, { id: 'j3', text: '글을 몰라도 그림으로 알 수 있어요' }, { id: 'jx', text: '그냥 예쁘게만 꾸며요' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'j1', text: '불이 나면 나가는 길을 알려 줘요' }, { id: 'j2', text: '눈에 잘 띄어 급할 때 빨리 찾아요' }, { id: 'j3', text: '글을 몰라도 그림으로 알 수 있어요' }, { id: 'jx', text: '그냥 예쁘게만 꾸며요' }, { id: 'jy', text: '복도를 넓어 보이게 해요' }] } } },
                hints: ['"이 미술이 없으면 무엇이 불편할까?"를 떠올리고, 그 불편을 막아 주는 까닭 카드를 찾아요.'],
                target: { match: { s1: 'j1', s2: 'j2', s3: 'j3' } }, difficulty: 0.2 },
              { prompt: '교실의 생활 속 미술이 하는 일을 이어 보세요.',
                toolOptions: { mode: 'match', topic: '하는 일', slots: [{ id: 's1', label: '계단 끝의 노란 줄' }, { id: 's2', label: '우유갑의 소 그림' }, { id: 's3', label: '시간표의 과목별 색 칸' }], cards: [{ id: 'j1', text: '계단 끝이 잘 보여 넘어지지 않게 해요' }, { id: 'j2', text: '무엇이 들었는지 한눈에 알려 줘요' }, { id: 'j3', text: '과목을 색으로 빨리 찾게 해요' }, { id: 'jx', text: '아무 일도 하지 않아요' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'j1', text: '계단 끝이 잘 보여 넘어지지 않게 해요' }, { id: 'j2', text: '무엇이 들었는지 한눈에 알려 줘요' }, { id: 'j3', text: '과목을 색으로 빨리 찾게 해요' }, { id: 'jx', text: '아무 일도 하지 않아요' }, { id: 'jy', text: '미술 시간에만 쓰여요' }] } } },
                target: { match: { s1: 'j1', s2: 'j2', s3: 'j3' } }, difficulty: 0.25 },
              { prompt: '길거리의 생활 속 미술이 하는 일을 이어 보세요.',
                toolOptions: { mode: 'match', topic: '하는 일', slots: [{ id: 's1', label: '횡단보도의 흰 줄무늬' }, { id: 's2', label: '가게 간판의 큰 글씨' }, { id: 's3', label: '노선도의 노선별 색 선' }], cards: [{ id: 'j1', text: '건너는 곳을 멀리서도 알아보게 해요' }, { id: 'j2', text: '무슨 가게인지 알리고 눈길을 끌어요' }, { id: 'j3', text: '노선을 색으로 갈라 길을 찾게 해요' }, { id: 'jx', text: '길을 어둡게 해요' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'j1', text: '건너는 곳을 멀리서도 알아보게 해요' }, { id: 'j2', text: '무슨 가게인지 알리고 눈길을 끌어요' }, { id: 'j3', text: '노선을 색으로 갈라 길을 찾게 해요' }, { id: 'jx', text: '길을 어둡게 해요' }, { id: 'jy', text: '차가 더 빨리 달리게 해요' }] } } },
                target: { match: { s1: 'j1', s2: 'j2', s3: 'j3' } }, difficulty: 0.25,
                conclude: '생활 속 미술은 길을 알려 주고, 눈에 띄게 하고, 쓰기 쉽게 하는 등 여러 가지 일을 해요.' },
            ],
          },
          {
            id: 'a3', title: '활동 3. 교실·복도를 둘러보며 생활 속 미술 세 가지 찾기 (짝 활동)', minutes: 7, tool: 'mindmap', pair: true,
            teacher: '준비물: 활동지 1번 표와 연필. 짝끼리 5분 동안 교실 안과 우리 반 앞 복도만 둘러보게 한다(다른 반 문 앞은 가지 않는다). "카드에 없던 것을 찾아요. 비상구 표시·소화기는 이미 나왔으니 빼고요." 찾은 것마다 눈에 띈 색이나 모양과 하는 일을 쓰게 하고, "예뻐서"만 쓴 학생에게는 "그 색이 아니면 무엇이 불편할까요?"라고 묻는다. 돌아와서 두 쌍이 찾은 것을 말하게 한다.',
            task: '짝과 교실·복도를 5분 동안 조용히 둘러보며, 카드에 없던 생활 속 미술 세 가지를 찾아 활동지 1번 표에 써요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              { prompt: '교실 안에서 사람이 색과 모양을 생각해 만든 것 하나를 찾아 표의 교실 칸에 쓴 뒤 "다 했어요"를 누르세요.', toolOptions: { mode: 'pick', topic: '우리가 찾은 미술', cards: [{ id: 'q1', text: '교실에서 찾은 것' }] }, free: true, talk: true, difficulty: 0 },
              { prompt: '우리 반 앞 복도에서 하나 더 찾아, 눈에 띈 색이나 모양과 하는 일을 쓴 뒤 "다 했어요"를 누르세요.', toolOptions: { mode: 'pick', topic: '우리가 찾은 미술', cards: [{ id: 'q1', text: '복도에서 찾은 것' }] }, free: true, talk: true, difficulty: 0 },
              { prompt: '자리로 돌아와 하나를 더 떠올려 쓰고, 짝에게 그 미술이 없으면 무엇이 불편할지 말한 뒤 "다 했어요"를 누르세요.', toolOptions: { mode: 'pick', topic: '우리가 찾은 미술', cards: [{ id: 'q1', text: '셋째로 찾은 것' }] }, free: true, talk: true, difficulty: 0 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"미술은 미술관에만 있을까요?" 오늘 찾은 카드들을 다시 띄워 손을 들게 한다. 출구 2번에서 "미술관 그림만"을 고른 학생이 있으면, 다음 시간 표지판 활동 전에 교실에서 한 가지씩 더 찾아오게 한다. 집에서 생활 속 미술 하나를 찾아 하는 일과 함께 적어 오는 것을 과제로 준다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '생활 속 미술', cards: [{ id: 'e1', text: '급식실 식단표의 음식 그림' }, { id: 'e2', text: '신발장 칸의 번호 스티커' }, { id: 'e3', text: '바람에 흔들리는 나뭇가지' }] }, prompt: '급식실과 현관에서 찾은 것 가운데 사람이 색과 모양을 생각해 만든 미술만 고르세요.', target: { pick: ['e1', 'e2'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '"미술은 미술관에 걸린 그림만을 말해."에 대한 생각으로 알맞은 것은?', options: ['맞아요. 미술관 밖에는 미술이 없어요.', '표지판·포장지처럼 생활 곳곳에도 미술이 있어요.', '미술관 그림은 미술이 아니에요.'], answer: 1, difficulty: 0.15, explain: '미술관 그림도 미술이고, 비상구 표시·간판·우유갑 그림처럼 생활 곳곳에서 일하는 미술도 있어요.' },
          { type: 'short', prompt: '우리 집에서 찾은 생활 속 미술 하나와 그것이 하는 일을 쓰세요.' },
        ],
      },
    ],
    worksheet: {
      title: '숨은 생활 속 미술 찾기',
      items: [
        { type: 'table', prompt: '교실·복도·길에서 찾은 생활 속 미술을 쓰세요.', columns: ['찾은 곳', '물건이나 표시', '눈에 띈 색이나 모양', '하는 일'], cells: [['교실', '', '', ''], ['복도', '', '', ''], ['길', '', '', '']] },
        { type: 'choice', prompt: '사람이 색과 모양을 생각해 만든 것이 아닌 것에 ○ 하세요.', options: ['비상구 표시', '우유갑 그림', '하늘의 구름', '가게 간판'], answer: '하늘의 구름' },
        { type: 'short', prompt: '소화기 몸통이 빨간 까닭을 쓰세요.' },
        { type: 'draw', prompt: '오늘 찾은 생활 속 미술 하나를 그리고, 하는 일을 옆에 쓰세요.' },
      ],
      easy: {
        note: '누군가 색과 모양을 생각해서 만들었으면 생활 속 미술이에요.',
        items: [
          { type: 'table', prompt: '교실에서 찾은 생활 속 미술을 쓰세요.', columns: ['물건이나 표시', '하는 일'], cells: [['', ''], ['', '']] },
          { type: 'choice', prompt: '생활 속 미술에 ○ 하세요.', options: ['비상구 표시', '하늘의 구름'], answer: '비상구 표시' },
          { type: 'draw', prompt: '찾은 생활 속 미술 하나를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 카드에 초록 테두리가, 틀린 카드는 까닭과 함께 되돌아와요.',
      base: '스스로 고르고 이은 뒤 확인해요.',
      challenge: '"미술관 그림"과 "저녁노을" 같은 헷갈리는 카드가 섞여, 미술관 그림도 미술이라는 것까지 가려야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 미술은 미술관에 걸린 그림만이라고 여긴다 → 비상구 표시처럼 매일 보는 것부터 묻는다. ② 반대로 자연(구름, 노을)도 생활 속 미술로 넣는다 → "누가 색과 모양을 정했나요?" ③ 하는 일을 "예쁘게"로만 말한다 → "왜 하필 그 색일까요?"로 근거를 묻는다. 비상구 유도 표시는 초록 바탕에 흰 사람 그림, 소화기는 빨간색이 일반적이다. 사진을 찍으러 다닐 때 다른 반 수업을 방해하지 않게 조용히 다닌다.',
  }));

  // ───────────── 14차시 (연습) ─────────────
  lessons.push(lesson(14, S4, {
    title: '표지판의 색과 모양이 알려 주는 뜻 찾기',
    objective: '표지판의 색과 모양(빨간 테두리 동그라미·노란 세모·파란 동그라미)이 알려 주는 뜻을 구별하고, 밝은 색과 어두운 색의 대비로 눈에 잘 띄는 표지를 꾸밀 수 있다.',
    illustration: {
      prompt: art('a quiet street corner with a yellow triangle caution sign, a red-bordered circle prohibition sign and a blue circle bicycle sign'),
      scene: scene([
        { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 120, y: 52 }, { motif: 'hills', y: 214 },
        { motif: 'house', x: 100, y: 222 }, { motif: 'tree', x: 380, y: 218 }, { motif: 'bird', x: 260, y: 80 },
        { motif: 'text', x: 240, y: 140, text: '색과 모양이 말해요', size: 22 },
      ]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 7,
        teacher: '자전거 그림이 들어간 표지 두 장(빨간 테두리 동그라미, 파란 동그라미)을 나란히 띄운다. "둘 다 자전거 그림인데 뜻이 같을까요?" 예상을 듣고, 빨간 테두리 동그라미는 "하지 마세요(자전거 통행 금지)", 파란 동그라미는 "이렇게 하세요(자전거 전용)"라고 알려 준다. 노란 세모는 "조심하세요"라는 것도 덧붙인다. 글을 읽기 전에 색과 모양만으로 뜻을 먼저 알게 하는 것이 표지판 미술의 일이라고 짚는다. 시연 단추로 노란 세모에 검은 조각을 얹어 눈에 띄는 표지를 만드는 모습을 보여 준다.',
        student: '자전거 그림이 들어간 두 표지판을 보고, 뜻이 같을지 다를지 예상해 봅시다.',
        demo: { tool: 'collage', options: { shapes: ['triangle', 'circle'], colors: ['노랑', '검정'] }, sequence: [{ has: [{ shape: 'triangle', color: '노랑', size: 'l', n: 1 }], contrast: 'light-dark' }] },
      },
      {
        id: 'main', title: '전개', minutes: 25,
        activities: [
          {
            id: 'a1', title: '활동 1. 색과 모양으로 표지 뜻 나누기', minutes: 12, tool: 'mindmap',
            teacher: '"그림보다 먼저 테두리 색과 모양을 보세요. 빨간 테두리 동그라미, 노란 세모, 파란 동그라미 가운데 무엇인가요?" 그림(자전거, 사람)만 보고 나누는 학생에게 같은 그림이 서로 다른 칸에 들어간다는 것을 보여 준다. 진입 금지처럼 빨간 바탕 동그라미도 "하지 마세요"라는 것을 짚는다.',
            task: '표지판의 테두리 색과 모양을 보고, 하지 마세요·조심하세요·이렇게 하세요 가운데 어느 뜻인지 나누어요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '표지판 카드를 색과 모양이 알려 주는 뜻에 따라 나누어 보세요.',
                toolOptions: { topic: '표지판의 뜻', slots: [{ id: 'no', label: '하지 마세요' }, { id: 'care', label: '조심하세요' }, { id: 'do', label: '이렇게 하세요' }], cards: [{ id: 'n1', text: '빨간 테두리 동그라미 안 자전거' }, { id: 'n2', text: '노란 세모 안 뛰어가는 어린이' }, { id: 'n3', text: '파란 동그라미 안 자전거' }, { id: 'n4', text: '빨간 테두리 동그라미 안 걷는 사람' }] },
                hints: ['그림(자전거, 사람)보다 테두리 색과 모양을 먼저 보세요. 같은 그림이라도 테두리가 다르면 뜻이 달라요.'],
                target: { sort: { no: ['n1', 'n4'], care: ['n2'], do: ['n3'] } }, difficulty: 0.2,
                predict: { q: '같은 자전거 그림인데 테두리 색과 모양이 다르면 뜻도 다를까요?', options: ['뜻이 같아요', '뜻이 달라요'], answer: 1 },
                conclude: '같은 그림이라도 빨간 테두리 동그라미는 "하지 마세요", 파란 동그라미는 "이렇게 하세요"예요.' },
              { prompt: '다른 표지판 카드도 색과 모양이 알려 주는 뜻에 따라 나누어 보세요.',
                toolOptions: { topic: '표지판의 뜻', slots: [{ id: 'no', label: '하지 마세요' }, { id: 'care', label: '조심하세요' }, { id: 'do', label: '이렇게 하세요' }], cards: [{ id: 'm1', text: '노란 세모 안 미끄러지는 자동차' }, { id: 'm2', text: '파란 동그라미 안 걷는 사람' }, { id: 'm3', text: '빨간 동그라미 안 흰 가로 막대' }, { id: 'm4', text: '노란 세모 안 공사하는 사람' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'm1', text: '노란 세모 안 미끄러지는 자동차' }, { id: 'm2', text: '파란 동그라미 안 걷는 사람' }, { id: 'm3', text: '빨간 동그라미 안 흰 가로 막대' }, { id: 'm4', text: '노란 세모 안 공사하는 사람' }, { id: 'mx', text: '빵집 간판의 빵 그림' }] } } },
                target: { sort: { no: ['m3'], care: ['m1', 'm4'], do: ['m2'] } }, difficulty: 0.25 },
              { prompt: '화살표가 든 표지판 카드를 색과 모양이 알려 주는 뜻에 따라 나누어 보세요.',
                toolOptions: { topic: '표지판의 뜻', slots: [{ id: 'no', label: '하지 마세요' }, { id: 'care', label: '조심하세요' }, { id: 'do', label: '이렇게 하세요' }], cards: [{ id: 'k1', text: '파란 동그라미 안 오른쪽 화살표' }, { id: 'k2', text: '빨간 테두리 동그라미 안 빗금 친 화살표' }, { id: 'k3', text: '노란 세모 안 떨어지는 돌' }, { id: 'k4', text: '빨간 테두리 동그라미 안 손수레' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'k1', text: '파란 동그라미 안 오른쪽 화살표' }, { id: 'k2', text: '빨간 테두리 동그라미 안 빗금 친 화살표' }, { id: 'k3', text: '노란 세모 안 떨어지는 돌' }, { id: 'k4', text: '빨간 테두리 동그라미 안 손수레' }, { id: 'kx', text: '가게 앞 꽃무늬 현수막' }] } } },
                target: { sort: { no: ['k2', 'k4'], care: ['k3'], do: ['k1'] } }, difficulty: 0.3 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 눈에 잘 띄는 표지 꾸미기', minutes: 13, tool: 'collage',
            teacher: '"노란 바탕에 하얀 그림을 놓으면 잘 보일까요, 검은 그림을 놓으면 잘 보일까요?" 두 판을 띄워 견주게 한다. 밝은 색과 어두운 색이 맞닿으면 멀리서도 또렷하다는 것을 짚는다. 비상구 표시 문항에서는 초록 바탕 위 하얀 사람 그림이 어두운 복도에서도 잘 보인다는 것을 말한다.',
            task: '표지의 뜻이 멀리서도 잘 보이게, 바탕과 그림 조각의 색을 골라 겹쳐 붙여요.',
            levels: {
              easy: { shapes: ['triangle', 'circle', 'square', 'rect'], colors: ['노랑', '검정', '빨강', '하양', '초록'], sizes: ['s', 'm', 'l'] },
              base: { shapes: ['triangle', 'circle', 'square', 'rect', 'star', 'leaf'], colors: ['빨강', '주황', '노랑', '초록', '파랑', '갈색', '검정', '하양'] },
              challenge: {},
            },
            items: [
              { prompt: '"조심하세요" 표지를 꾸며요. 큰 노랑 세모 하나 위에 검정 조각을 겹쳐, 밝은 색과 어두운 색이 맞닿게 해요.', target: { has: [{ shape: 'triangle', color: '노랑', size: 'l', n: 1 }, { color: '검정', min: 1 }], contrast: 'light-dark', overlap: 1 }, difficulty: 0.2,
                hints: ['바탕이 밝은 색이면 그림은 어두운 색으로 골라야 멀리서도 또렷해요. 두 조각이 맞닿게 겹쳐요.'],
                levels: { challenge: { prompt: '"조심하세요" 표지를 단순하게 꾸며요. 큰 노랑 세모 위에 검정 조각 두 개를 겹쳐 밝고 어두운 색이 맞닿게 하고, 조각은 네 개까지만 써요.', target: { has: [{ shape: 'triangle', color: '노랑', size: 'l', n: 1 }, { color: '검정', min: 2 }], contrast: 'light-dark', overlap: 1, pieces: { max: 4 } } } } },
              { prompt: '"하지 마세요" 표지를 꾸며요. 큰 빨강 동그라미 위에 보통 하양 동그라미를 겹치고, 그 위에 검정 조각을 하나 이상 얹어요.', target: { has: [{ shape: 'circle', color: '빨강', size: 'l', n: 1 }, { shape: 'circle', color: '하양', size: 'm', n: 1 }, { color: '검정', min: 1 }], overlap: 2 }, difficulty: 0.3,
                levels: { challenge: { prompt: '"하지 마세요" 표지를 빗금까지 꾸며요. 큰 빨강 동그라미 위에 보통 하양 동그라미를 겹치고, 그 위에 검정 조각을 두 개 이상 얹어요.', target: { has: [{ shape: 'circle', color: '빨강', size: 'l', n: 1 }, { shape: 'circle', color: '하양', size: 'm', n: 1 }, { color: '검정', min: 2 }], overlap: 3 } } } },
              { prompt: '비상구 표시를 꾸며요. 큰 초록 네모 하나 위에 하양 조각을 두 개 이상 겹쳐 사람 모양을 나타내요.', target: { has: [{ shape: 'square', color: '초록', size: 'l', n: 1 }, { color: '하양', min: 2 }], overlap: 2 }, difficulty: 0.25,
                levels: { challenge: { prompt: '비상구 표시를 화살표까지 꾸며요. 큰 초록 네모 위에 하양 조각 셋 이상으로 달리는 사람을, 하양 세모 하나로 나가는 쪽 화살표를 겹쳐요.', target: { has: [{ shape: 'square', color: '초록', size: 'l', n: 1 }, { color: '하양', min: 4 }, { shape: 'triangle', color: '하양', min: 1 }], overlap: 3 } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"표지판을 처음 볼 때 그림보다 먼저 무엇을 보면 되나요?" 테두리 색과 모양이라는 답을 이끈다. 출구 1번에서 그림만 보고 나눈 학생에게는 오늘 자전거 표지 두 장을 다시 보여 준다. 길에서 표지판을 볼 때는 멈춰 선 안전한 곳에서 보라고 말한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '표지판의 뜻', slots: [{ id: 'no', label: '하지 마세요' }, { id: 'care', label: '조심하세요' }, { id: 'do', label: '이렇게 하세요' }], cards: [{ id: 'e1', text: '노란 세모 안 뛰는 사슴' }, { id: 'e2', text: '파란 동그라미 안 왼쪽 화살표' }, { id: 'e3', text: '빨간 테두리 동그라미 안 자동차' }] }, prompt: '새 표지판 카드를 색과 모양이 알려 주는 뜻에 따라 나누어 보세요.', target: { sort: { no: ['e3'], care: ['e1'], do: ['e2'] } }, difficulty: 0.2 },
          { type: 'choice', prompt: '노란 세모 표지판이 알려 주는 뜻은 무엇인가요?', options: ['조심하세요', '하지 마세요', '이렇게 하세요'], answer: 0, difficulty: 0.1, explain: '노란 세모는 앞에 위험이 있으니 조심하라는 표지예요.' },
          { type: 'mood', prompt: '오늘 표지판 살펴보기는 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '표지판의 색과 모양',
      items: [
        { type: 'table', prompt: '표지판의 색과 모양이 알려 주는 뜻을 쓰세요.', columns: ['색과 모양', '알려 주는 뜻', '본 적 있는 표지'], cells: [['빨간 테두리 동그라미', '', ''], ['노란 세모', '', ''], ['파란 동그라미', '', '']] },
        { type: 'figure', prompt: '이 표지를 멀리서도 잘 보이게 하려면 가운데 조각을 무슨 색으로 칠할지 쓰세요.', tool: 'collage', figures: [{ state: { pieces: [{ shape: 'triangle', color: '노랑', size: 'l', x: 280, y: 200, r: 0 }, { shape: 'circle', color: '하양', size: 's', x: 280, y: 220, r: 0 }] }, caption: '가운데 조각의 색: ______' }], answer: '검정처럼 어두운 색(노랑과 대비가 커요)' },
        { type: 'choice', prompt: '"이렇게 하세요"를 알려 주는 표지에 ○ 하세요.', options: ['빨간 테두리 동그라미 안 자전거', '노란 세모 안 자전거', '파란 동그라미 안 자전거'], answer: '파란 동그라미 안 자전거' },
        { type: 'draw', prompt: '우리 교실에 필요한 표지 하나를 정해, 알맞은 색과 모양으로 그리세요.' },
      ],
      easy: {
        note: '빨간 테두리 동그라미 = 하지 마세요, 노란 세모 = 조심하세요, 파란 동그라미 = 이렇게 하세요.',
        items: [
          { type: 'table', prompt: '뜻을 쓰세요.', columns: ['색과 모양', '뜻'], cells: [['노란 세모', ''], ['파란 동그라미', '']] },
          { type: 'choice', prompt: '"조심하세요" 표지에 ○ 하세요.', options: ['노란 세모', '파란 동그라미'], answer: '노란 세모' },
          { type: 'draw', prompt: '"조심하세요" 표지를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생기고, 색종이는 다섯 색만 나와요.',
      base: '스스로 나눈 뒤 확인하고, 여덟 색 가운데 대비가 큰 색을 골라요.',
      challenge: '표지판이 아닌 카드가 섞여 있어 남겨야 해요. 표지는 조각 수를 네 개로 줄여 단순하게 하거나, 빗금·화살표까지 더해 뜻을 더 또렷하게 꾸며요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 표지 안의 그림만 보고 뜻을 정한다 → 같은 그림, 다른 테두리 표지를 나란히 보인다. ② 빨강은 모두 "조심"이라고 여긴다 → 노란 세모(주의)와 빨간 테두리 동그라미(금지)를 구별한다. ③ 밝은 바탕에 밝은 그림을 놓아 잘 보이지 않는다. 우리나라 도로 표지는 주의 표지(노란 바탕 세모), 규제 표지(빨간 테두리 동그라미 — 진입 금지는 빨간 바탕), 지시 표지(파란 바탕)로 나뉜다. 표지판을 찾으러 학교 밖에 나가지 않고 사진으로 한다.',
  }));

  // ───────────── 15차시 (확장) ─────────────
  lessons.push(lesson(15, S4, {
    title: '손잡이 모양과 물건 색이 쓰는 사람을 돕는 까닭 찾기',
    objective: '생활용품의 모양(손잡이·구멍·홈·굽은 곳)과 색이 쓰는 사람을 어떻게 돕는지 근거를 들어 설명할 수 있다.',
    illustration: {
      prompt: art('everyday objects on a kitchen table: scissors with round finger holes, a mug with a handle, a curved umbrella handle and color-coded toothbrushes'),
      scene: scene([
        { motif: 'sun', x: 410, y: 56, s: 0.7 }, { motif: 'cloud', x: 120, y: 52 }, { motif: 'hills', y: 214 },
        { motif: 'house', x: 240, y: 222, s: 1.3, color: 'peach' }, { motif: 'flower', x: 90, y: 222 }, { motif: 'tree', x: 400, y: 220 },
        { motif: 'text', x: 240, y: 110, text: '왜 이런 모양일까?', size: 22 },
      ]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 7,
        teacher: '가위를 들어 보이며 "손잡이에 왜 동그란 구멍이 있을까요? 구멍이 없고 막대만 있으면 어떨까요?"라고 묻는다. 몇몇 학생이 손가락을 넣는 몸짓을 하게 한다. 물건의 모양을 정하는 것도 미술(디자인)이 하는 일이며, 예쁘게 하는 것뿐 아니라 쓰기 편하게 하는 일도 한다는 것을 짚는다. 색도 마찬가지로 수도꼭지의 빨강·파랑처럼 무언가를 알려 준다고 덧붙인다. 시연 단추로 가위 구멍과 하는 일 카드가 이어지는 모습을 보여 준다.',
        student: '가위 손잡이에 구멍이 없다면 어떻게 될지 손으로 흉내 내며 말해 봅시다.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '모양이 하는 일', slots: [{ id: 'd1', label: '가위 손잡이의 둥근 구멍' }], cards: [{ id: 'j1', text: '손가락을 넣어 단단히 쥐어요' }, { id: 'j2', text: '보기 좋게만 붙였어요' }] }, sequence: [{ match: { d1: 'j1' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 25,
        activities: [
          {
            id: 'a1', title: '활동 1. 모양이 하는 일 잇기', minutes: 13, tool: 'mindmap',
            teacher: '"이 모양이 없다면 쓸 때 무엇이 불편할까요?" 모양을 하나씩 없다고 상상하게 해 까닭을 찾게 한다. 연필이 육각형인 까닭을 모르는 학생에게 둥근 연필과 육각 연필을 책상에 놓고 살짝 밀어 보게 한다. "보기 좋게만" 카드를 고르는 학생에게는 모양에는 쓰는 사람을 돕는 까닭이 숨어 있다고 짚는다.',
            task: '물건의 모양이 쓰는 사람을 어떻게 돕는지 읽고, 알맞은 까닭 카드를 이어요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              { prompt: '세 물건의 모양이 하는 일을 이어 보세요.',
                toolOptions: { mode: 'match', topic: '모양이 하는 일', slots: [{ id: 's1', label: '가위 손잡이의 둥근 구멍' }, { id: 's2', label: '머그컵의 고리 손잡이' }, { id: 's3', label: '우산 손잡이의 굽은 끝' }], cards: [{ id: 'j1', text: '손가락을 넣어 단단히 쥐게 해요' }, { id: 'j2', text: '뜨거운 컵을 손 데지 않게 들어요' }, { id: 'j3', text: '팔에 걸거나 손에 잘 잡혀요' }, { id: 'jx', text: '보기 좋게만 붙였어요' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'j1', text: '손가락을 넣어 단단히 쥐게 해요' }, { id: 'j2', text: '뜨거운 컵을 손 데지 않게 들어요' }, { id: 'j3', text: '팔에 걸거나 손에 잘 잡혀요' }, { id: 'jx', text: '보기 좋게만 붙였어요' }, { id: 'jy', text: '물건을 더 비싸 보이게 해요' }] } } },
                hints: ['그 모양이 없다고 생각해 봐요. 손으로 쓸 때 무엇이 불편해질까요?'],
                target: { match: { s1: 'j1', s2: 'j2', s3: 'j3' } }, difficulty: 0.15,
                predict: { q: '가위 손잡이가 구멍 없는 막대라면 어떨까요?', options: ['더 쓰기 편해요', '쥐기 어려워요'], answer: 1 },
                conclude: '모양에는 쓰는 사람을 돕는 까닭이 있어요. 모양을 정하는 것도 미술(디자인)이 하는 일이에요.' },
              { prompt: '다른 세 물건의 모양이 하는 일을 이어 보세요.',
                toolOptions: { mode: 'match', topic: '모양이 하는 일', slots: [{ id: 's1', label: '칫솔 손잡이의 고무 돌기' }, { id: 's2', label: '병뚜껑 옆의 세로 홈' }, { id: 's3', label: '연필의 육각형 모양' }], cards: [{ id: 'j1', text: '젖은 손에서도 미끄러지지 않아요' }, { id: 'j2', text: '돌려 열 때 손가락이 덜 미끄러져요' }, { id: 'j3', text: '책상에서 굴러떨어지지 않아요' }, { id: 'jx', text: '보기 좋게만 붙였어요' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'j1', text: '젖은 손에서도 미끄러지지 않아요' }, { id: 'j2', text: '돌려 열 때 손가락이 덜 미끄러져요' }, { id: 'j3', text: '책상에서 굴러떨어지지 않아요' }, { id: 'jx', text: '보기 좋게만 붙였어요' }, { id: 'jy', text: '글씨가 더 진하게 써져요' }] } } },
                target: { match: { s1: 'j1', s2: 'j2', s3: 'j3' } }, difficulty: 0.25 },
              { prompt: '학교 안 물건의 모양이 하는 일을 이어 보세요.',
                toolOptions: { mode: 'match', topic: '모양이 하는 일', slots: [{ id: 's1', label: '의자 등받이의 굽은 모양' }, { id: 's2', label: '계단 손잡이의 둥근 막대' }, { id: 's3', label: '눌러서 여는 막대 문손잡이' }], cards: [{ id: 'j1', text: '허리를 편하게 기대게 해요' }, { id: 'j2', text: '손에 꼭 쥐어 넘어지지 않게 해요' }, { id: 'j3', text: '손이 불편해도 눌러서 열 수 있어요' }, { id: 'jx', text: '교실을 어둡게 해요' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'j1', text: '허리를 편하게 기대게 해요' }, { id: 'j2', text: '손에 꼭 쥐어 넘어지지 않게 해요' }, { id: 'j3', text: '손이 불편해도 눌러서 열 수 있어요' }, { id: 'jx', text: '교실을 어둡게 해요' }, { id: 'jy', text: '무겁게 만들어요' }] } } },
                target: { match: { s1: 'j1', s2: 'j2', s3: 'j3' } }, difficulty: 0.3 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 색이 하는 일 잇기', minutes: 12, tool: 'mindmap',
            teacher: '"수도꼭지에 빨강과 파랑이 없으면 어떤 일이 생길까요?" 색이 알려 주기, 눈에 띄게 하기, 기분 만들기처럼 여러 일을 한다는 것을 짚는다. 병원 대기실처럼 기분을 만드는 색은 느낌이라 사람마다 조금 다를 수 있지만, 많은 사람이 차분하다고 느끼는 까닭(연한 하늘색은 차가운 색)을 함께 말한다.',
            task: '색이 쓰인 곳을 읽고, 그 색이 하는 일 카드를 이어요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              { prompt: '집 안에서 색이 하는 일을 이어 보세요.',
                toolOptions: { mode: 'match', topic: '색이 하는 일', slots: [{ id: 's1', label: '가족마다 다른 색 칫솔' }, { id: 's2', label: '수도꼭지의 빨강·파랑 표시' }, { id: 's3', label: '분리수거함의 색과 그림' }], cards: [{ id: 'j1', text: '내 것을 빨리 찾게 해요' }, { id: 'j2', text: '뜨거운 물과 찬물을 알려 줘요' }, { id: 'j3', text: '무엇을 어디에 넣을지 알려 줘요' }, { id: 'jx', text: '물을 더 시원하게 해요' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'j1', text: '내 것을 빨리 찾게 해요' }, { id: 'j2', text: '뜨거운 물과 찬물을 알려 줘요' }, { id: 'j3', text: '무엇을 어디에 넣을지 알려 줘요' }, { id: 'jx', text: '물을 더 시원하게 해요' }, { id: 'jy', text: '칫솔을 더 튼튼하게 해요' }] } } },
                hints: ['"이 색이 모두 같은 색이면 무엇이 헷갈릴까?"를 떠올려 하는 일을 찾아요.'],
                target: { match: { s1: 'j1', s2: 'j2', s3: 'j3' } }, difficulty: 0.2 },
              { prompt: '동네에서 색이 하는 일을 이어 보세요.',
                toolOptions: { mode: 'match', topic: '색이 하는 일', slots: [{ id: 's1', label: '놀이터 미끄럼틀의 밝은 색' }, { id: 's2', label: '병원의 하늘색 벽' }, { id: 's3', label: '공사장 노랑·검정 줄' }], cards: [{ id: 'j1', text: '눈에 잘 띄고 신나는 느낌을 줘요' }, { id: 'j2', text: '차분하고 편안한 느낌을 줘요' }, { id: 'j3', text: '위험한 곳을 눈에 띄게 알려요' }, { id: 'jx', text: '밤을 더 어둡게 해요' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'j1', text: '눈에 잘 띄고 신나는 느낌을 줘요' }, { id: 'j2', text: '차분하고 편안한 느낌을 줘요' }, { id: 'j3', text: '위험한 곳을 눈에 띄게 알려요' }, { id: 'jx', text: '밤을 더 어둡게 해요' }, { id: 'jy', text: '벽을 더 단단하게 해요' }] } } },
                target: { match: { s1: 'j1', s2: 'j2', s3: 'j3' } }, difficulty: 0.25 },
              { prompt: '길과 잔칫날에 색이 하는 일을 이어 보세요.',
                toolOptions: { mode: 'match', topic: '색이 하는 일', slots: [{ id: 's1', label: '지하철 노선도의 노선별 색' }, { id: 's2', label: '신호등의 빨간불·초록불' }, { id: 's3', label: '케이크의 알록달록 장식' }], cards: [{ id: 'j1', text: '탈 노선을 색으로 찾게 해요' }, { id: 'j2', text: '멈출 때와 건널 때를 알려 줘요' }, { id: 'j3', text: '즐거운 날을 꾸며 기분을 좋게 해요' }, { id: 'jx', text: '아무 뜻이 없어요' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'j1', text: '탈 노선을 색으로 찾게 해요' }, { id: 'j2', text: '멈출 때와 건널 때를 알려 줘요' }, { id: 'j3', text: '즐거운 날을 꾸며 기분을 좋게 해요' }, { id: 'jx', text: '아무 뜻이 없어요' }, { id: 'jy', text: '케이크를 더 달게 해요' }] } } },
                target: { match: { s1: 'j1', s2: 'j2', s3: 'j3' } }, difficulty: 0.3,
                conclude: '색은 알려 주고, 눈에 띄게 하고, 기분을 만들어요. 예쁘게 하는 일은 그 가운데 하나예요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"내 필통이나 물병에서 쓰기 편하게 돕는 모양을 하나 찾아볼까요?" 두세 명이 찾은 것과 까닭을 말하게 한다. 출구 1번에서 소방차의 빨간색을 "예쁘게"로 이은 학생에게는 길에서 소방차를 볼 때 무엇을 해야 하는지(길 비켜 주기) 함께 떠올린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '모양과 색이 하는 일', slots: [{ id: 's1', label: '물병 뚜껑의 오돌토돌 홈' }, { id: 's2', label: '소방차의 빨간색' }], cards: [{ id: 'j1', text: '잡고 돌리기 쉽게 해요' }, { id: 'j2', text: '멀리서도 눈에 띄어 길을 비키게 해요' }, { id: 'jx', text: '예쁘게만 보여요' }] }, prompt: '물건의 모양과 색이 하는 일을 이어 보세요.', target: { match: { s1: 'j1', s2: 'j2' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '생활용품의 모양을 정하는 미술(디자인)이 하는 일로 가장 알맞은 것은?', options: ['보기 좋게만 해요', '쓰는 사람이 편하고 안전하게 쓰도록 도와요', '물건을 무겁게 해요'], answer: 1, difficulty: 0.15, explain: '손잡이·구멍·홈처럼 모양은 쓰는 사람을 돕는 까닭이 있어요.' },
          { type: 'mood', prompt: '오늘 모양과 색의 까닭 찾기는 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '모양과 색이 돕는 까닭',
      items: [
        { type: 'table', prompt: '내 물건에서 모양이나 색이 쓰는 사람을 돕는 곳을 찾아 쓰세요.', columns: ['물건', '모양이나 색', '쓰는 사람을 어떻게 돕나요'], cells: [['가위', '둥근 구멍', ''], ['', '', ''], ['', '', '']] },
        { type: 'choice', prompt: '연필이 육각형인 까닭으로 알맞은 것에 ○ 하세요.', options: ['보기 좋아서', '책상에서 굴러떨어지지 않게', '더 빨리 닳게', '무겁게 하려고'], answer: '책상에서 굴러떨어지지 않게' },
        { type: 'draw', prompt: '쓰기 불편한 물건 하나를 골라, 더 편하게 쓸 수 있는 손잡이나 모양을 새로 그리세요.' },
        { type: 'short', prompt: '내가 그린 모양이 쓰는 사람을 어떻게 돕는지 쓰세요.' },
      ],
      easy: {
        note: '"이 모양이 없다면 무엇이 불편할까?"를 생각해 봐요.',
        items: [
          { type: 'table', prompt: '모양이 돕는 까닭을 쓰세요.', columns: ['모양', '돕는 까닭'], cells: [['가위의 둥근 구멍', ''], ['컵의 손잡이', '']] },
          { type: 'choice', prompt: '수도꼭지의 빨강이 알려 주는 것에 ○ 하세요.', options: ['뜨거운 물', '찬물'], answer: '뜨거운 물' },
          { type: 'draw', prompt: '편하게 쓸 수 있는 컵 손잡이를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞게 이은 카드에 초록 테두리가 생겨요.',
      base: '스스로 이은 뒤 확인해요.',
      challenge: '그럴듯한 까닭 카드가 하나 더 섞여 있어 모양·색과 정말 이어지는 까닭을 가려야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 모양과 색은 보기 좋게 하려고 정한다고만 여긴다 → "없다면 무엇이 불편할까?"로 상상하게 한다. ② 기분을 만드는 색을 모두 같은 느낌으로 정답처럼 말한다 → 많은 사람이 그렇게 느끼는 까닭(따뜻한 색·차가운 색)을 함께 말하고 사람마다 다를 수 있음을 인정한다. ③ 물건 자체(가위)와 그 모양(구멍)을 구별하지 못한다. 실물 가위를 돌려 볼 때는 날을 닫고 손잡이 쪽으로 건넨다.',
  }));

  // ───────────── 16차시 (확장) ─────────────
  lessons.push(lesson(16, S4, {
    title: '포장지와 벽지 무늬에서 되풀이 규칙 찾기',
    objective: '포장지·벽지·옷감 무늬에서 되풀이되는 묶음을 찾아 빈칸과 규칙을 어긴 조각을 가려내고, 물건을 꾸미는 되풀이 무늬를 직접 만들 수 있다.',
    illustration: {
      prompt: art('a gift box wrapped in paper with repeating stars and hearts beside a roll of patterned wallpaper and a striped scarf'),
      scene: scene([
        { motif: 'star', x: 90, y: 70, s: 0.6 }, { motif: 'star', x: 390, y: 70, s: 0.6 }, { motif: 'cloud', x: 240, y: 50 },
        { motif: 'hills', y: 214 }, { motif: 'flower', x: 120, y: 222, color: 'rose' }, { motif: 'flower', x: 180, y: 222, color: 'sky' },
        { motif: 'flower', x: 300, y: 222, color: 'rose' }, { motif: 'flower', x: 360, y: 222, color: 'sky' },
        { motif: 'text', x: 240, y: 140, text: '되풀이가 꾸며 줘요', size: 22 },
      ]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '선물 포장지(또는 사진)를 펼쳐 보이며 "이 포장지에서 똑같이 되풀이되는 묶음을 찾아 손가락으로 감싸 볼까요?"라고 한다. 묶음이 찾아지면 "되풀이 무늬는 무슨 일을 할까요? 비상구 표시처럼 길을 알려 주나요?" 물어, 꾸며 주어 보는 사람의 기분을 좋게 하는 것도 생활 속 미술이 하는 일이라고 짚는다. 4차시에 가까이서 찾은 벽돌 무늬를 떠올려, 이번에는 꾸미는 쪽에서 무늬를 살핀다고 잇는다. 시연 단추로 별과 하트가 되풀이되는 띠를 만드는 모습을 보여 준다.',
        student: '포장지에서 되풀이되는 묶음 하나를 찾아 손가락으로 감싸 봅시다.',
        demo: { tool: 'collage', options: { shapes: ['star', 'heart'], colors: ['노랑', '분홍'] }, sequence: [{ repeat: { times: 3, unit: 2 }, has: [{ shape: 'star', min: 3 }, { shape: 'heart', min: 3 }] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 무늬의 되풀이 묶음 찾기', minutes: 12, tool: 'pattern',
            teacher: '"묶음이 몇 조각인지 먼저 세어 보세요. 두 조각? 세 조각?" 맨 앞부터 묶음을 손가락으로 감싸며 빈칸까지 따라가게 한다. 규칙을 어긴 조각 찾기에서는 모양만 보고 색을 놓치는 학생이 많으니, 모양과 색을 함께 말하며 짚게 한다.',
            task: '무늬에서 되풀이되는 묶음을 찾아, 빈칸에 알맞은 조각을 넣거나 규칙을 어긴 조각을 골라요.',
            levels: { easy: {}, base: { revealAfterCheck: true }, challenge: { revealAfterCheck: true } },
            items: [
              { prompt: '선물 포장지 무늬예요. 되풀이 묶음을 찾아 빈칸 두 곳에 알맞은 조각을 넣으세요.',
                toolOptions: { seq: ['star:buttercup', 'heart:rose', 'star:buttercup', 'heart:rose', 'star:buttercup', null, 'star:buttercup', null] },
                levels: { challenge: { prompt: '선물 포장지 무늬예요. 세 조각 묶음을 찾아 빈칸 두 곳에 알맞은 조각을 넣으세요.', toolOptions: { seq: ['star:buttercup', 'heart:rose', 'heart:rose', 'star:buttercup', 'heart:rose', null, 'star:buttercup', null, 'heart:rose'] }, target: { fill: ['heart:rose', 'heart:rose'] } } },
                target: { fill: ['heart:rose', 'heart:rose'] }, difficulty: 0.15 },
              { prompt: '벽지 무늬예요. 세 조각 묶음을 찾아 빈칸 두 곳에 알맞은 조각을 넣으세요.',
                toolOptions: { seq: ['diamond:mint', 'circle:cream', 'circle:cream', 'diamond:mint', 'circle:cream', null, null, 'circle:cream', 'circle:cream'], palette: ['diamond:mint', 'circle:cream', 'diamond:sky'] },
                hints: ['맨 앞부터 똑같은 차례가 다시 시작되는 곳을 찾아, 한 묶음이 몇 조각인지 먼저 세어요.'],
                target: { fill: ['circle:cream', 'diamond:mint'] }, difficulty: 0.25,
                predict: { q: '이 벽지 무늬의 한 묶음은 몇 조각일까요?', options: ['두 조각', '세 조각', '네 조각'], answer: 1 },
                conclude: '마름모 하나와 동그라미 둘, 세 조각이 한 묶음으로 되풀이돼요.' },
              { prompt: '옷감 무늬예요. 규칙을 어긴 조각 하나를 찾아 고르세요.',
                toolOptions: { mode: 'odd', seq: ['hexagon:lavender', 'square:peach', 'hexagon:lavender', 'square:peach', 'hexagon:lavender', 'square:sky', 'hexagon:lavender', 'square:peach'] },
                target: { odd: 5 }, difficulty: 0.2 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 물건을 꾸미는 되풀이 무늬 만들기', minutes: 14, tool: 'collage',
            teacher: '"무늬를 쓸 물건을 먼저 정해요. 필통에 쓸 무늬와 생일 포장지에 쓸 무늬는 같을까요?" 쓸 곳에 따라 고르는 색과 모양이 달라진다는 것을 짚는다. 묶음 차례를 중간에 바꾸는 학생에게는 묶음을 손가락으로 감싸 견주게 한다.',
            task: '꾸밀 물건을 떠올리며 한 묶음을 정하고, 같은 차례로 되풀이해 무늬를 만들어요.',
            levels: {
              easy: { shapes: ['star', 'heart', 'circle', 'square'], colors: ['노랑', '분홍', '파랑', '초록', '보라'], sizes: ['m'] },
              base: { shapes: ['star', 'heart', 'circle', 'square', 'triangle', 'leaf', 'diamond'] },
              challenge: {},
            },
            items: [
              { prompt: '선물 포장지 띠를 만들어요. 별과 하트 두 조각을 한 묶음으로, 왼쪽에서 오른쪽으로 네 번 이상 되풀이해요.', target: { repeat: { times: 4, unit: 2 }, has: [{ shape: 'star', min: 4 }, { shape: 'heart', min: 4 }] }, difficulty: 0.25,
                hints: ['쓸 묶음을 먼저 판 왼쪽에 놓고, 그 묶음을 손가락으로 감싼 채 같은 차례로 이어 붙여요.'],
                levels: { challenge: { prompt: '생일 포장지 띠를 만들어요. 별·하트·동그라미 세 조각을 한 묶음으로, 왼쪽에서 오른쪽으로 세 번 이상 되풀이해요.', target: { repeat: { times: 3, unit: 3 }, has: [{ shape: 'star', min: 3 }, { shape: 'heart', min: 3 }, { shape: 'circle', min: 3 }] } } } },
              { prompt: '벽지 무늬를 만들어요. 세 조각을 한 묶음으로, 위에서 아래로 세 번 이상 되풀이해요.', target: { repeat: { times: 3, unit: 3, axis: 'y' } }, difficulty: 0.3,
                levels: { challenge: { prompt: '벽지 띠 무늬를 만들어요. 네 조각을 한 묶음으로 정해, 왼쪽에서 오른쪽으로 세 번 이상 되풀이해요.', target: { repeat: { times: 3, unit: 4 } } } } },
              { prompt: '내 필통이나 공책 표지를 꾸밀 되풀이 무늬를 만들고 점검해요.', target: { repeat: { times: 3 }, selfCheck: ['꾸밀 물건을 정했어요', '한 묶음을 정해 같은 차례로 되풀이했어요', '무늬가 물건을 어떻게 꾸며 주는지 말했어요'], minPieces: 6 }, difficulty: 0.15 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 만든 무늬는 어떤 물건을 꾸며 주나요? 그 무늬를 보면 어떤 기분이 드나요?" 두세 작품을 띄워 말하게 한다. 출구 2번에서 "길을 알려 줘요"를 고른 학생에게는 포장지 무늬와 비상구 표시가 하는 일을 나란히 견주게 한다. 다음 시간에는 지금까지 찾은 생활 속 미술을 하는 일에 따라 나눈다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'pattern', options: { seq: ['heart:rose', 'circle:buttercup', 'circle:buttercup', 'heart:rose', 'circle:buttercup', null, 'heart:rose'] }, prompt: '손수건 무늬예요. 되풀이 묶음을 찾아 빈칸에 알맞은 조각을 넣으세요.', target: { fill: ['circle:buttercup'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '포장지의 되풀이 무늬가 하는 일로 가장 알맞은 것은?', options: ['선물을 꾸며 받는 사람의 기분을 좋게 해요', '길을 알려 줘요', '불이 났을 때 알려 줘요'], answer: 0, difficulty: 0.1, explain: '포장지 무늬는 물건을 꾸며 주는 생활 속 미술이에요.' },
          { type: 'mood', prompt: '오늘 무늬 찾기와 만들기는 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '되풀이 무늬',
      items: [
        { type: 'figure', wide: true, prompt: '되풀이 묶음을 ○로 묶고, 빈칸에 알맞은 조각을 그리세요.', tool: 'pattern', figures: [{ options: { seq: ['star:buttercup', 'heart:rose', 'heart:rose', 'star:buttercup', 'heart:rose', null, 'star:buttercup', null, null] }, caption: '빈칸 세 곳 채우기' }], answer: '하트, 하트, 하트' },
        { type: 'table', prompt: '집이나 학교에서 찾은 되풀이 무늬를 쓰세요.', columns: ['찾은 곳', '한 묶음', '무늬가 하는 일'], cells: [['포장지', '', ''], ['', '', ''], ['', '', '']] },
        { type: 'choice', prompt: '되풀이 무늬로 꾸민 것이 아닌 것에 ○ 하세요.', options: ['줄무늬 목도리', '꽃무늬 벽지', '비상구 표시', '별무늬 포장지'], answer: '비상구 표시' },
        { type: 'draw', prompt: '내 필통을 꾸밀 되풀이 무늬를 띠 모양으로 그리세요.' },
      ],
      easy: {
        note: '맨 앞부터 손가락으로 묶음을 감싸며, 몇 조각마다 되풀이되는지 세어요.',
        items: [
          { type: 'figure', prompt: '빈칸에 알맞은 조각을 그리세요.', tool: 'pattern', figures: [{ options: { seq: ['star:buttercup', 'heart:rose', 'star:buttercup', 'heart:rose', null] }, caption: '빈칸 채우기' }], answer: '별' },
          { type: 'choice', prompt: '포장지 무늬가 하는 일에 ○ 하세요.', options: ['꾸며 줘요', '길을 알려 줘요'], answer: '꾸며 줘요' },
          { type: 'draw', prompt: '두 조각 묶음 무늬를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '무늬판에서 틀린 칸이 바로 표시되고, 색종이는 보통 크기 한 가지만 써요.',
      base: '맞힌 뒤에만 어느 칸이 맞았는지 보여, 스스로 규칙을 따져요.',
      challenge: '포장지 무늬 찾기가 세 조각 묶음으로 바뀌어요. 직접 만드는 무늬도 묶음이 한 조각씩 길어져(세 조각·네 조각) 차례를 더 오래 지켜야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 묶음 길이를 잘못 세어(두 조각으로 보고) 빈칸을 채운다 → 손가락으로 묶음을 감싸 견준다. ② 규칙을 어긴 조각에서 모양만 보고 색을 놓친다. ③ 예쁘게 꾸미는 것만 미술의 역할이라고 여기거나, 반대로 꾸미기는 미술의 일이 아니라고 여긴다 → 꾸미기도 여러 역할 가운데 하나다. 13~16차시에서 찾은 미술을 17차시에 갈래로 나누므로 카드와 활동지를 모아 둔다.',
  }));

  // ───────────── 17차시 (핵심) ─────────────
  lessons.push(lesson(17, S4, {
    title: '찾은 생활 속 미술을 하는 일에 따라 갈래로 나누기',
    objective: '찾은 생활 속 미술을 "알려 주는 미술·꾸며 주는 미술·쓰기 편하게 돕는 미술"처럼 하는 일에 따라 나누고, 예쁘게 하는 일 말고도 여러 역할이 있음을 말할 수 있다.',
    illustration: {
      prompt: art('children sorting paper photo cards of signs, patterned wrapping paper and handles into three labeled baskets on a classroom floor'),
      scene: scene([
        { motif: 'sun', x: 410, y: 56, s: 0.7 }, { motif: 'cloud', x: 110, y: 50 }, { motif: 'hills', y: 214 },
        { motif: 'house', x: 110, y: 222, s: 0.8 }, { motif: 'flower', x: 240, y: 222, color: 'peach' }, { motif: 'tree', x: 370, y: 218 },
        { motif: 'text', x: 240, y: 132, text: '무슨 일을 하나요?', size: 22 },
      ]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '13~16차시에 찾은 생활 속 미술 사진 카드를 칠판에 한꺼번에 붙인다. "이렇게 많은데, 비슷한 것끼리 묶으려면 무엇을 기준으로 할까요?" 학생 의견(색, 있는 곳, 하는 일)을 듣고, 오늘은 "하는 일"로 나눠 보자고 정한다. "생활 속 미술은 모두 예쁘게 하려고 있는 걸까요?"라고 물어 오늘 확인할 질문으로 남긴다. 시연 단추로 비상구 표시와 포장지 무늬가 서로 다른 가지로 들어가는 모습을 보여 준다.',
        student: '지금까지 찾은 생활 속 미술을 비슷한 것끼리 묶는다면 무엇을 기준으로 할지 말해 봅시다.',
        demo: { tool: 'mindmap', options: { topic: '하는 일', slots: [{ id: 'info', label: '알려 주는 미술' }, { id: 'deco', label: '꾸며 주는 미술' }], cards: [{ id: 'd1', text: '비상구 표시' }, { id: 'd2', text: '포장지 무늬' }] }, sequence: [{ sort: { info: ['d1'], deco: ['d2'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 하는 일에 따라 세 갈래로 나누기', minutes: 14, tool: 'mindmap',
            teacher: '"이 미술이 없다면 무엇이 불편하거나 위험할까요? 길을 잃는다면 알려 주는 미술, 덜 즐겁다면 꾸며 주는 미술, 쓰기 불편하다면 쓰기 편하게 돕는 미술이에요." 판단 질문을 칠판에 적어 두고 카드마다 묻게 한다. 도전 단계의 무지개처럼 사람이 만들지 않은 것은 어느 갈래에도 넣지 않는다.',
            task: '생활 속 미술 카드를 하는 일에 따라 알려 주는·꾸며 주는·쓰기 편하게 돕는 미술로 나누어요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '학교에서 찾은 생활 속 미술을 하는 일에 따라 세 갈래로 나누어 보세요.',
                toolOptions: { topic: '하는 일', slots: [{ id: 'info', label: '알려 주는 미술' }, { id: 'deco', label: '꾸며 주는 미술' }, { id: 'use', label: '쓰기 편하게 돕는 미술' }], cards: [{ id: 'a1', text: '비상구 표시' }, { id: 'a2', text: '화장실 남녀 그림' }, { id: 'a3', text: '게시판 테두리 장식' }, { id: 'a4', text: '교실 커튼 꽃무늬' }, { id: 'a5', text: '가위 손잡이 구멍' }, { id: 'a6', text: '의자 등받이 굽은 모양' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'a1', text: '비상구 표시' }, { id: 'a2', text: '화장실 남녀 그림' }, { id: 'a3', text: '게시판 테두리 장식' }, { id: 'a4', text: '교실 커튼 꽃무늬' }, { id: 'a5', text: '가위 손잡이 구멍' }, { id: 'a6', text: '의자 등받이 굽은 모양' }, { id: 'ax', text: '운동장 나무 그늘' }] } } },
                hints: ['카드마다 "이 미술이 없으면 길을 잃나요, 덜 즐겁나요, 쓰기 불편한가요?"를 물어 갈래를 정해요.'],
                target: { sort: { info: ['a1', 'a2'], deco: ['a3', 'a4'], use: ['a5', 'a6'] } }, difficulty: 0.2,
                predict: { q: '생활 속 미술은 모두 예쁘게 꾸미는 일만 할까요?', options: ['꾸미는 일만 해요', '여러 가지 일을 해요'], answer: 1 },
                conclude: '생활 속 미술은 알려 주고, 꾸며 주고, 쓰기 편하게 도와요. 예쁘게 하는 일은 그 가운데 하나예요.' },
              { prompt: '집과 동네에서 찾은 생활 속 미술을 하는 일에 따라 세 갈래로 나누어 보세요.',
                toolOptions: { topic: '하는 일', slots: [{ id: 'info', label: '알려 주는 미술' }, { id: 'deco', label: '꾸며 주는 미술' }, { id: 'use', label: '쓰기 편하게 돕는 미술' }], cards: [{ id: 'b1', text: '분리수거함 그림' }, { id: 'b2', text: '지도의 학교 기호' }, { id: 'b3', text: '접시 가장자리 무늬' }, { id: 'b4', text: '생일 케이크 장식' }, { id: 'b5', text: '물뿌리개의 긴 주둥이' }, { id: 'b6', text: '계단 손잡이 둥근 막대' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'b1', text: '분리수거함 그림' }, { id: 'b2', text: '지도의 학교 기호' }, { id: 'b3', text: '접시 가장자리 무늬' }, { id: 'b4', text: '생일 케이크 장식' }, { id: 'b5', text: '물뿌리개의 긴 주둥이' }, { id: 'b6', text: '계단 손잡이 둥근 막대' }, { id: 'bx', text: '뒷산의 단풍' }] } } },
                target: { sort: { info: ['b1', 'b2'], deco: ['b3', 'b4'], use: ['b5', 'b6'] } }, difficulty: 0.25 },
              { prompt: '여러 곳에서 찾은 생활 속 미술을 하는 일에 따라 세 갈래로 나누어 보세요.',
                toolOptions: { topic: '하는 일', slots: [{ id: 'info', label: '알려 주는 미술' }, { id: 'deco', label: '꾸며 주는 미술' }, { id: 'use', label: '쓰기 편하게 돕는 미술' }], cards: [{ id: 'c1', text: '수도꼭지 빨강·파랑 표시' }, { id: 'c2', text: '신호등 불빛 색' }, { id: 'c3', text: '공책 표지 그림' }, { id: 'c4', text: '병뚜껑 옆 세로 홈' }, { id: 'c5', text: '연필 육각형 모양' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'c1', text: '수도꼭지 빨강·파랑 표시' }, { id: 'c2', text: '신호등 불빛 색' }, { id: 'c3', text: '공책 표지 그림' }, { id: 'c4', text: '병뚜껑 옆 세로 홈' }, { id: 'c5', text: '연필 육각형 모양' }, { id: 'cx', text: '비 갠 하늘의 무지개' }] } } },
                target: { sort: { info: ['c1', 'c2'], deco: ['c3'], use: ['c4', 'c5'] } }, difficulty: 0.3 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 꾸미는 일 말고 다른 일을 하는 미술 고르기', minutes: 12, tool: 'mindmap',
            teacher: '"이 미술이 빠지면 덜 예쁘기만 할까요, 아니면 위험하거나 불편해질까요?" 꾸미는 일만 하는 것과 다른 일도 하는 것을 가르게 한다. 소화기의 빨강처럼 눈에 띄는 색은 예뻐 보일 수도 있지만 하는 일은 급할 때 찾게 하는 것이라고 짚는다.',
            task: '예쁘게 꾸미는 일 말고 다른 일(알려 주기, 쓰기 편하게 하기)을 하는 미술만 바구니에 넣어요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '꾸미는 일 말고 다른 일을 하는 생활 속 미술만 고르세요.',
                toolOptions: { mode: 'pick', topic: '꾸미기 말고 다른 일', cards: [{ id: 'p1', text: '비상구 표시' }, { id: 'p2', text: '소화기의 빨강' }, { id: 'p3', text: '가위 손잡이 구멍' }, { id: 'p4', text: '벽지 꽃무늬' }, { id: 'p5', text: '머리핀 리본 장식' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'p1', text: '비상구 표시' }, { id: 'p2', text: '소화기의 빨강' }, { id: 'p3', text: '가위 손잡이 구멍' }, { id: 'p4', text: '벽지 꽃무늬' }, { id: 'p5', text: '머리핀 리본 장식' }, { id: 'p6', text: '필통에 붙인 별 스티커' }] } } },
                hints: ['이 미술이 빠지면 덜 예쁘기만 한가요, 아니면 위험하거나 불편해지나요? 위험·불편이면 넣어요.'],
                target: { pick: ['p1', 'p2', 'p3'] }, difficulty: 0.2 },
              { prompt: '꾸미는 일 말고 다른 일을 하는 생활 속 미술만 고르세요. 새 카드예요.',
                toolOptions: { mode: 'pick', topic: '꾸미기 말고 다른 일', cards: [{ id: 'q1', text: '횡단보도 흰 줄무늬' }, { id: 'q2', text: '칫솔 손잡이 고무 돌기' }, { id: 'q3', text: '선물 포장 리본' }, { id: 'q4', text: '크리스마스 트리 장식' }, { id: 'q5', text: '노선도 색 선' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'q1', text: '횡단보도 흰 줄무늬' }, { id: 'q2', text: '칫솔 손잡이 고무 돌기' }, { id: 'q3', text: '선물 포장 리본' }, { id: 'q4', text: '크리스마스 트리 장식' }, { id: 'q5', text: '노선도 색 선' }, { id: 'q6', text: '현관의 꽃 그림 액자' }] } } },
                target: { pick: ['q1', 'q2', 'q5'] }, difficulty: 0.25 },
              { prompt: '예쁘게 보이면서 다른 일도 함께 하는 미술만 고르세요.',
                toolOptions: { mode: 'pick', topic: '꾸미면서 다른 일도', cards: [{ id: 'r1', text: '알록달록한 놀이터 미끄럼틀(눈에 잘 띄어요)' }, { id: 'r2', text: '과목별 색을 칠한 예쁜 시간표' }, { id: 'r3', text: '그냥 붙인 반짝이 스티커' }, { id: 'r4', text: '창문에 붙인 눈송이 장식' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'r1', text: '알록달록한 놀이터 미끄럼틀(눈에 잘 띄어요)' }, { id: 'r2', text: '과목별 색을 칠한 예쁜 시간표' }, { id: 'r3', text: '그냥 붙인 반짝이 스티커' }, { id: 'r4', text: '창문에 붙인 눈송이 장식' }, { id: 'r5', text: '꽃무늬 손수건' }] } } },
                target: { pick: ['r1', 'r2'] }, difficulty: 0.3,
                conclude: '한 미술이 꾸미면서 알려 주기도 해요. 하는 일이 하나만 있는 것은 아니에요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"처음 질문으로 돌아가 볼까요? 생활 속 미술은 모두 예쁘게 하려고 있나요?" 세 갈래에 들어간 카드 수를 세어 칠판에 적어 두고, 다음 시간에 갈래 이름을 더 알맞게 붙여 게시판을 꾸민다고 예고한다. 출구 1번에서 숟가락을 꾸며 주는 미술에 넣은 학생에게는 오목한 모양이 없다면 무엇이 불편한지 묻는다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '하는 일', slots: [{ id: 'info', label: '알려 주는 미술' }, { id: 'deco', label: '꾸며 주는 미술' }, { id: 'use', label: '쓰기 편하게 돕는 미술' }], cards: [{ id: 'e1', text: '도서관 책 등의 분류 색 띠' }, { id: 'e2', text: '식탁보 체크무늬' }, { id: 'e3', text: '숟가락의 오목한 모양' }] }, prompt: '새 카드를 하는 일에 따라 세 갈래로 나누어 보세요.', target: { sort: { info: ['e1'], deco: ['e2'], use: ['e3'] } }, difficulty: 0.2 },
          { type: 'choice', prompt: '"생활 속 미술은 예쁘게 보이게 하는 일만 해."에 대한 생각으로 알맞은 것은?', options: ['맞아요. 꾸미는 일만 해요.', '알려 주기, 쓰기 편하게 하기처럼 여러 일을 해요.', '생활 속 미술은 아무 일도 하지 않아요.'], answer: 1, difficulty: 0.15, explain: '비상구 표시는 알려 주고, 가위 구멍은 쓰기 편하게 도와요. 꾸미기는 여러 일 가운데 하나예요.' },
          { type: 'mood', prompt: '오늘 갈래 나누기는 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '하는 일에 따라 나누기',
      items: [
        { type: 'figure', wide: true, prompt: '가지마다 내가 찾은 생활 속 미술을 두 가지씩 써 넣으세요.', tool: 'mindmap', figures: [{ options: { topic: '생활 속 미술', printCards: false, slots: ['알려 주는 미술', '꾸며 주는 미술', '쓰기 편하게 돕는 미술'], cards: ['보기'] }, caption: '' }], answer: '예: 알려 주는 — 비상구 표시, 노선도 / 꾸며 주는 — 포장지 무늬, 케이크 장식 / 쓰기 편하게 — 가위 구멍, 의자 등받이' },
        { type: 'choice', prompt: '쓰기 편하게 돕는 미술에 ○ 하세요.', options: ['포장지 무늬', '비상구 표시', '칫솔 손잡이 고무 돌기', '벽지 꽃무늬'], answer: '칫솔 손잡이 고무 돌기' },
        { type: 'short', prompt: '소화기의 빨간색은 꾸며 주는 미술일까요? 내 생각과 까닭을 쓰세요.' },
        { type: 'draw', prompt: '세 갈래 가운데 하나를 골라, 그 갈래에 들어갈 생활 속 미술을 그리세요.' },
      ],
      easy: {
        note: '이 미술이 없다면? 길을 잃는다 → 알려 주는, 덜 즐겁다 → 꾸며 주는, 쓰기 불편하다 → 쓰기 편하게 돕는.',
        items: [
          { type: 'figure', wide: true, prompt: '가지마다 생활 속 미술을 하나씩 써 넣으세요.', tool: 'mindmap', figures: [{ options: { topic: '생활 속 미술', printCards: false, slots: ['알려 주는 미술', '꾸며 주는 미술'], cards: ['보기'] }, caption: '' }], answer: '예: 비상구 표시 / 포장지 무늬' },
          { type: 'choice', prompt: '알려 주는 미술에 ○ 하세요.', options: ['비상구 표시', '포장지 무늬'], answer: '비상구 표시' },
          { type: 'draw', prompt: '꾸며 주는 미술 하나를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 가지에 놓으면 초록 테두리가 생기고, 틀리면 까닭과 함께 되돌아와요.',
      base: '스스로 나누고 고른 뒤 확인해요.',
      challenge: '사람이 만들지 않은 카드(무지개)와 꾸미기만 하는 카드가 더 섞여 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 예쁘게 보이는 것만 미술의 역할이라고 여긴다 → "이 미술이 없다면?" 질문으로 하는 일을 찾는다. ② 한 미술이 한 가지 일만 한다고 여긴다 → 예쁜 시간표처럼 꾸미면서 알려 주는 예를 보인다(2활동 3번). ③ 사람이 만들지 않은 자연물을 넣는다. 오늘 나눈 카드는 18차시 게시판 만들기에 그대로 쓴다.',
  }));

  // ───────────── 18차시 (연습) ─────────────
  lessons.push(lesson(18, S4, {
    title: '갈래 이름을 정해 생활 속 미술 게시판 꾸미기',
    objective: '나눈 갈래에 속한 것들의 공통된 일이 드러나는 이름을 붙이고, 게시판 머리를 색 대비와 되풀이로 눈에 띄게 꾸밀 수 있다.',
    illustration: {
      prompt: art('a classroom bulletin board with three labeled sections of art-in-daily-life cards and a bright repeating paper border'),
      scene: scene([
        { motif: 'sun', x: 410, y: 56, s: 0.7 }, { motif: 'cloud', x: 120, y: 50 }, { motif: 'hills', y: 214 },
        { motif: 'star', x: 140, y: 110, s: 0.6 }, { motif: 'star', x: 340, y: 110, s: 0.6 }, { motif: 'flower', x: 240, y: 222, color: 'buttercup' },
        { motif: 'text', x: 240, y: 156, text: '우리 반 생활 속 미술 게시판', size: 20 },
      ]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '지난 시간에 나눈 세 묶음을 칠판에 다시 붙이고, 첫 묶음 위에 "그림"이라는 이름표를 붙여 본다. "비상구 표시, 화장실 그림, 노선도. 이 묶음 이름이 \'그림\'이면 무엇을 하는 묶음인지 알 수 있나요?" 이름에는 속한 것들이 함께 하는 일이 드러나야 한다는 것을 짚는다. 게시판은 멀리서도 이름이 잘 보여야 하니 13~16차시에 배운 색 대비와 되풀이를 쓰자고 잇는다. 시연 단추로 빨강·초록 보색이 되풀이되는 테두리를 만드는 모습을 보여 준다.',
        student: '"그림"이라는 묶음 이름을 보고, 무엇을 하는 묶음인지 알 수 있는지 말해 봅시다.',
        demo: { tool: 'collage', options: { shapes: ['circle', 'square'], colors: ['빨강', '초록'] }, sequence: [{ contrast: 'complement', repeat: { times: 3, unit: 2 } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 묶음에 알맞은 갈래 이름 잇기', minutes: 12, tool: 'mindmap',
            teacher: '"세 가지가 모두 함께 하는 일은 무엇인가요? 그 일을 이름에 넣어요." "빨간 것"처럼 겉모습 하나로 지은 이름은 무엇을 하는지 알려 주지 못한다고 짚는다. "예쁜 그림"처럼 너무 넓은 이름도 다른 묶음과 구별되지 않는다는 것을 함께 말한다.',
            task: '묶음에 속한 생활 속 미술을 읽고, 함께 하는 일이 드러나는 갈래 이름 카드를 이어요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              { prompt: '세 묶음에 하는 일이 드러나는 갈래 이름을 이어 보세요.',
                toolOptions: { mode: 'match', topic: '갈래 이름 붙이기', slots: [{ id: 'g1', label: '비상구·화장실 그림·노선도' }, { id: 'g2', label: '포장지·케이크 장식·커튼' }, { id: 'g3', label: '가위 구멍·등받이·손잡이' }], cards: [{ id: 'n1', text: '길과 장소를 알려 주는 미술' }, { id: 'n2', text: '기분 좋게 꾸며 주는 미술' }, { id: 'n3', text: '몸에 맞게 쓰기 편한 미술' }, { id: 'nx', text: '예쁜 그림' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'n1', text: '길과 장소를 알려 주는 미술' }, { id: 'n2', text: '기분 좋게 꾸며 주는 미술' }, { id: 'n3', text: '몸에 맞게 쓰기 편한 미술' }, { id: 'nx', text: '예쁜 그림' }, { id: 'ny', text: '동그란 것들' }] } } },
                hints: ['묶음 속 세 가지가 모두 함께 하는 일을 먼저 한마디로 말해 보고, 그 일이 들어간 이름을 찾아요.'],
                target: { match: { g1: 'n1', g2: 'n2', g3: 'n3' } }, difficulty: 0.2 },
              { prompt: '새 두 묶음에 하는 일이 드러나는 갈래 이름을 이어 보세요.',
                toolOptions: { mode: 'match', topic: '갈래 이름 붙이기', slots: [{ id: 'g1', label: '소화기 빨강·공사장 줄무늬' }, { id: 'g2', label: '칫솔 색·시간표 색·노선 색' }], cards: [{ id: 'n1', text: '위험을 눈에 띄게 하는 미술' }, { id: 'n2', text: '색으로 구별하게 하는 미술' }, { id: 'nx', text: '빨간 것' }, { id: 'ny', text: '여러 가지 색' }] },
                target: { match: { g1: 'n1', g2: 'n2' } }, difficulty: 0.25,
                predict: { q: '첫 묶음 이름을 "빨간 것"으로 하면 하는 일을 알 수 있을까요?', options: ['알 수 있어요', '알기 어려워요'], answer: 1 },
                conclude: '갈래 이름에는 겉모습보다 속한 것들이 함께 하는 일을 넣어요.' },
              { prompt: '분위기를 만드는 두 묶음에 알맞은 갈래 이름을 이어 보세요.',
                toolOptions: { mode: 'match', topic: '갈래 이름 붙이기', slots: [{ id: 'g1', label: '병원 하늘색 벽·나무 책장' }, { id: 'g2', label: '밝은 미끄럼틀·만국기' }], cards: [{ id: 'n1', text: '마음을 차분하게 하는 미술' }, { id: 'n2', text: '신나는 기분을 만드는 미술' }, { id: 'nx', text: '색이 있는 것' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'n1', text: '마음을 차분하게 하는 미술' }, { id: 'n2', text: '신나는 기분을 만드는 미술' }, { id: 'nx', text: '색이 있는 것' }, { id: 'ny', text: '학교에 있는 것' }] } } },
                target: { match: { g1: 'n1', g2: 'n2' } }, difficulty: 0.3 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 게시판 머리를 눈에 띄게 꾸미기', minutes: 14, tool: 'collage',
            teacher: '"게시판 머리가 교실 뒤에서도 보이려면 어떤 색 짝이 좋을까요?" 14차시의 대비를 떠올리게 한다. 테두리는 같은 묶음을 되풀이하면 정돈되어 보인다는 것을 짚는다. 마지막 문항에서는 꾸밈이 카드를 가리지 않는지(꾸밈은 내용을 돕는 것) 짝과 확인하게 한다.',
            task: '게시판의 테두리와 이름표 자리를 색 대비와 되풀이로 멀리서도 눈에 띄게 꾸며요.',
            levels: {
              easy: { shapes: ['circle', 'square', 'rect', 'star'], colors: ['빨강', '초록', '노랑', '보라', '하양'], sizes: ['m', 'l'] },
              base: { shapes: ['circle', 'square', 'rect', 'star', 'triangle', 'heart'] },
              challenge: {},
            },
            items: [
              { prompt: '게시판 테두리를 만들어요. 빨강과 초록처럼 보색인 두 조각을 맞대어 한 묶음으로, 세 번 이상 되풀이해요.', target: { contrast: 'complement', repeat: { times: 3, unit: 2 } }, difficulty: 0.25,
                hints: ['서로 반대되는 색 짝(빨강과 무엇? 노랑과 무엇?)을 먼저 정해 맞대고, 그 묶음을 이어 붙여요.'],
                levels: { challenge: { prompt: '테두리를 더 화려하게 만들어요. 네 조각을 한 묶음으로 정하되 그 안에 보색 짝이 맞닿게 넣고, 세 번 이상 되풀이해요.', target: { contrast: 'complement', repeat: { times: 3, unit: 4 } } } } },
              { prompt: '갈래 이름표 자리를 만들어요. 큰 노랑 네모 위에 보라 긴 네모를 겹쳐 밝은 색과 어두운 색이 맞닿게 해요.', target: { has: [{ shape: 'square', color: '노랑', size: 'l', n: 1 }, { shape: 'rect', color: '보라', min: 1 }], contrast: 'light-dark', overlap: 1 }, difficulty: 0.25,
                levels: { challenge: { prompt: '이름표 자리를 꾸며요. 큰 노랑 네모 위에 보라 긴 네모 두 개 이상과 작은 보라 별 두 개 이상을 겹쳐, 밝은 색과 어두운 색이 맞닿게 해요.', target: { has: [{ shape: 'square', color: '노랑', size: 'l', n: 1 }, { shape: 'rect', color: '보라', min: 2 }, { shape: 'star', color: '보라', size: 's', min: 2 }], contrast: 'light-dark', overlap: 3 } } } },
              { prompt: '우리 모둠 게시판 머리를 꾸미고 점검해요.', target: { selfCheck: ['갈래 이름이 하는 일을 말해 줘요', '멀리서도 눈에 띄게 색을 골랐어요', '꾸밈이 카드를 가리지 않아요'], minPieces: 5 }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"교실 뒤에 서서 우리 게시판을 볼까요? 어느 모둠 이름표가 가장 잘 보이나요? 왜 그럴까요?" 실제 게시판(또는 화면)을 멀리서 보고 말하게 한다. 출구 1번에서 "좋은 것"을 고른 학생에게는 그 이름으로 묶음이 하는 일을 알 수 있는지 묻는다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '갈래 이름 붙이기', slots: [{ id: 'g1', label: '표지판·지도 기호·안내도' }], cards: [{ id: 'n1', text: '길과 장소를 알려 주는 미술' }, { id: 'nx', text: '좋은 것' }, { id: 'ny', text: '종이로 만든 것' }] }, prompt: '이 묶음에 하는 일이 드러나는 갈래 이름을 이어 보세요.', target: { match: { g1: 'n1' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '좋은 갈래 이름은 어떤 이름인가요?', options: ['속한 것들의 색 하나를 쓴 이름', '속한 것들이 함께 하는 일이 드러나는 이름', '가장 짧은 이름'], answer: 1, difficulty: 0.15, explain: '이름만 보고도 그 묶음이 무슨 일을 하는지 알 수 있어야 해요.' },
          { type: 'mood', prompt: '오늘 게시판 꾸미기는 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '갈래 이름과 게시판',
      items: [
        { type: 'table', prompt: '우리 모둠이 나눈 갈래의 이름과 그렇게 정한 까닭을 쓰세요.', columns: ['갈래 이름', '속한 생활 속 미술', '이름을 그렇게 정한 까닭'], cells: [['', '', ''], ['', '', ''], ['', '', '']] },
        { type: 'choice', prompt: '"소화기 빨강, 공사장 노랑·검정 줄"에 가장 알맞은 갈래 이름에 ○ 하세요.', options: ['빨간 것', '위험을 눈에 띄게 하는 미술', '예쁜 그림', '학교에 있는 것'], answer: '위험을 눈에 띄게 하는 미술' },
        { type: 'draw', prompt: '우리 모둠 게시판 머리를 색 대비와 되풀이 테두리를 써서 설계해 그리세요.' },
        { type: 'short', prompt: '게시판 머리에서 어떤 색 짝을 골랐는지, 그 까닭을 쓰세요.' },
      ],
      easy: {
        note: '이름 = 속한 것들이 함께 하는 일 + "미술"',
        items: [
          { type: 'table', prompt: '갈래 이름을 쓰세요.', columns: ['속한 것', '갈래 이름'], cells: [['비상구 표시, 노선도', ''], ['포장지 무늬, 케이크 장식', '']] },
          { type: 'choice', prompt: '더 알맞은 이름에 ○ 하세요.', options: ['빨간 것', '위험을 알리는 미술'], answer: '위험을 알리는 미술' },
          { type: 'draw', prompt: '게시판 머리를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞게 이은 이름에 초록 테두리가 생기고, 색종이는 대비 짝(빨강·초록, 노랑·보라)이 들어 있는 다섯 색만 나와요.',
      base: '스스로 이은 뒤 확인하고, 모든 색 가운데 대비 짝을 찾아요.',
      challenge: '그럴듯한 이름 카드가 더 섞여 있어요. 테두리는 보색 짝을 넣은 네 조각 묶음으로, 이름표는 조각을 더 겹쳐 꾸며요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 겉모습 하나(빨간 것, 동그란 것)로 이름을 짓는다 → "그 이름으로 하는 일을 알 수 있나요?" ② 너무 넓은 이름(좋은 것, 예쁜 그림)을 짓는다. ③ 게시판 꾸밈이 카드를 가리거나 너무 화려해 내용이 안 보인다 → 꾸밈은 내용을 돕는 것. 모둠 게시판은 21~22차시 견주기·고치기에 다시 쓰니 떼지 않는다.',
  }));

  // ───────────── 19차시 (확장) ─────────────
  lessons.push(lesson(19, S4, {
    title: '우리 반이 찾은 미술을 그림그래프로 읽고 새 갈래 만들기',
    objective: '우리 반이 모은 생활 속 미술의 갈래별 수를 그림그래프에서 읽어 적게 찾은 갈래를 찾고, 세 갈래에 들지 않는 미술로 새 갈래(기분을 만드는 미술)를 만들어 더 찾을 수 있다.',
    illustration: {
      prompt: art('a paper picture graph with big and small circle stickers on a classroom wall showing how many art-in-daily-life examples each group found, with children adding new cards'),
      scene: scene([
        { motif: 'sun', x: 410, y: 56, s: 0.7 }, { motif: 'cloud', x: 110, y: 50 }, { motif: 'hills', y: 214 },
        { motif: 'tree', x: 90, y: 218 }, { motif: 'flower', x: 400, y: 222, color: 'lavender' },
        { motif: 'text', x: 240, y: 140, text: '어느 갈래가 적을까?', size: 22 },
      ]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '17·18차시 게시판의 카드 수를 세 갈래마다 함께 세어 칠판 표에 적는다(예: 알려 주기 9, 꾸며 주기 12, 쓰기 편하게 4). 3학년 때 배운 그림그래프처럼 큰 동그라미는 10개, 작은 동그라미는 1개로 나타낸다. "어느 갈래를 가장 적게 찾았나요? 정말 생활에 적은 걸까요, 우리가 덜 찾은 걸까요?" 이어 게시판에서 "병원 대기실 하늘색 벽" 카드를 들고 묻는다. "이 카드는 세 갈래 어디에 들어갈까요? 알려 주나요, 물건을 꾸미나요, 쓰기 편하게 하나요?" 어디에도 딱 맞지 않는다는 말이 나오면, 오늘은 새 갈래를 하나 만들자고 연다. 시연 단추로 표가 그림그래프로 바뀌는 모습을 보여 준다.',
        student: '세 갈래 가운데 가장 적게 찾은 갈래를 말하고, 세 갈래 어디에도 안 들어가는 카드가 있는지 찾아봅시다.',
        demo: { tool: 'chart', options: { type: 'picture', title: '우리 반이 찾은 생활 속 미술', data: [['알려 주기', 9], ['꾸며 주기', 12], ['쓰기 편하게', 4]], unit: '개', xLabel: '하는 일', yLabel: '찾은 수', icons: [{ value: 10, name: '10개' }, { value: 1, name: '1개' }], showTable: true }, sequence: [{ build: true }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 그림그래프로 갈래별 수 읽기', minutes: 6, tool: 'chart',
            teacher: '"큰 동그라미 하나는 10개, 작은 동그라미 하나는 1개예요. 큰 것부터 세어요." 3학년에 배운 그림그래프 읽기만 짧게 쓰고, 수 계산은 하지 않는다. 다 읽은 뒤 "쓰기 편하게 돕는 미술이 적은 까닭은 무엇일까요?"라고 물어, 손잡이·홈처럼 작아서 눈에 덜 띄는 미술은 자세히 살펴야 찾을 수 있다는 것을 1~12차시의 살피기와 잇는다.',
            task: '우리 반이 찾은 세 갈래의 수를 그림그래프에서 읽고, 가장 적게 찾은 갈래를 찾아요.',
            levels: { easy: { icons: [{ value: 10, name: '10개' }, { value: 1, name: '1개' }], showValues: true }, base: { icons: [{ value: 10, name: '10개' }, { value: 1, name: '1개' }] }, challenge: { icons: [{ value: 5, name: '5개' }, { value: 1, name: '1개' }] } },
            items: [
              { prompt: '그림그래프를 읽고 표의 빈칸에 갈래마다 찾은 수를 쓰세요.',
                toolOptions: { type: 'picture', mode: 'read', title: '우리 반이 찾은 생활 속 미술', data: [['알려 주기', 9], ['꾸며 주기', 12], ['쓰기 편하게', 4]], unit: '개', xLabel: '하는 일', yLabel: '찾은 수', tableBlanks: [0, 1, 2] },
                hints: ['큰 그림이 하나에 몇 개인지 그래프 아래를 먼저 보고, 큰 그림부터 세어 작은 그림 수를 더해요.'],
                target: { table: true }, difficulty: 0.15 },
              { prompt: '그림그래프에서 가장 적게 찾은 갈래는 무엇인가요?',
                toolOptions: { type: 'picture', mode: 'read', title: '우리 반이 찾은 생활 속 미술', data: [['알려 주기', 9], ['꾸며 주기', 12], ['쓰기 편하게', 4]], unit: '개', xLabel: '하는 일', choices: ['알려 주기', '꾸며 주기', '쓰기 편하게'], question: '가장 적게 찾은 갈래는?', why: ['알려 주기보다 그림이 더 적은 줄이 있어요.', '꾸며 주기는 큰 그림이 있어 가장 많아요.', ''], explain: '쓰기 편하게는 작은 그림 4개뿐이라 가장 적어요.' },
                target: { pick: 2 }, difficulty: 0.15,
                predict: { q: '가장 적게 찾은 갈래는 생활에 정말 적은 걸까요?', options: ['정말 적어요', '눈에 덜 띄어 덜 찾았을 수 있어요'], answer: 1 },
                conclude: '손잡이·홈처럼 작아서 눈에 덜 띄는 미술은 자세히 살펴야 찾을 수 있어요.' },
              { prompt: '그림그래프에서 가장 많이 찾은 갈래는 무엇인가요?',
                toolOptions: { type: 'picture', mode: 'read', title: '우리 반이 찾은 생활 속 미술', data: [['알려 주기', 9], ['꾸며 주기', 12], ['쓰기 편하게', 4]], unit: '개', xLabel: '하는 일', choices: ['알려 주기', '꾸며 주기', '쓰기 편하게'], question: '가장 많이 찾은 갈래는?', why: ['작은 그림이 많아도 큰 그림 하나가 더 많은 수예요.', '', '그림이 가장 적은 줄이에요.'], explain: '큰 그림이 몇 개를 나타내는지 먼저 보면, 꾸며 주기가 12개로 가장 많아요.' },
                target: { pick: 1 }, difficulty: 0.2 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 네 갈래로 다시 나누어 빠진 곳 채우기', minutes: 12, tool: 'mindmap',
            teacher: '도입에서 세 갈래 어디에도 들지 않던 "병원 하늘색 벽" 카드를 칠판 넷째 칸에 붙이고 "이 칸 이름을 무엇으로 할까요?"라고 묻는다. 학생 말을 모아 "기분을 만드는 미술"로 정한다. "기분을 만드는 미술은 물건의 겉을 꾸미는 것이 아니라, 그곳에 있는 사람의 마음(차분함, 신남)을 만드는 거예요." 카드의 괄호 속 단서를 읽게 한다. 꾸며 주는 미술과 헷갈리는 카드는 "무엇을 위해?"를 물어 가른다.',
            task: '새로 찾은 생활 속 미술을 알려 주는·꾸며 주는·쓰기 편하게 돕는·기분을 만드는 미술 네 갈래로 나누어요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '새로 찾은 생활 속 미술을 네 갈래로 나누어 보세요.',
                toolOptions: { topic: '네 갈래', slots: [{ id: 'info', label: '알려 주는' }, { id: 'deco', label: '꾸며 주는' }, { id: 'use', label: '쓰기 편하게' }, { id: 'mood', label: '기분을 만드는' }], cards: [{ id: 'a1', text: '엘리베이터 층 버튼 숫자' }, { id: 'a2', text: '꽃무늬 우산' }, { id: 'a3', text: '고무장갑 손바닥 돌기' }, { id: 'a4', text: '병원 대기실 하늘색 벽(차분해요)' }, { id: 'a5', text: '운동회 날 만국기(신나요)' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'a1', text: '엘리베이터 층 버튼 숫자' }, { id: 'a2', text: '꽃무늬 우산' }, { id: 'a3', text: '고무장갑 손바닥 돌기' }, { id: 'a4', text: '병원 대기실 하늘색 벽(차분해요)' }, { id: 'a5', text: '운동회 날 만국기(신나요)' }, { id: 'ax', text: '저녁 하늘의 붉은 노을' }] } } },
                hints: ['물건의 겉을 꾸미나요, 그곳에 있는 사람의 마음을 만드나요? 괄호 속 단서 낱말을 먼저 읽어요.'],
                target: { sort: { info: ['a1'], deco: ['a2'], use: ['a3'], mood: ['a4', 'a5'] } }, difficulty: 0.25 },
              { prompt: '또 새로 찾은 생활 속 미술을 네 갈래로 나누어 보세요.',
                toolOptions: { topic: '네 갈래', slots: [{ id: 'info', label: '알려 주는' }, { id: 'deco', label: '꾸며 주는' }, { id: 'use', label: '쓰기 편하게' }, { id: 'mood', label: '기분을 만드는' }], cards: [{ id: 'b1', text: '박물관 안내도' }, { id: 'b2', text: '한복 소매의 색동 줄무늬' }, { id: 'b3', text: '아기 숟가락의 굽은 손잡이' }, { id: 'b4', text: '침실의 은은한 노란 조명(편안해요)' }, { id: 'b5', text: '가방 어깨끈의 넓은 패드' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'b1', text: '박물관 안내도' }, { id: 'b2', text: '한복 소매의 색동 줄무늬' }, { id: 'b3', text: '아기 숟가락의 굽은 손잡이' }, { id: 'b4', text: '침실의 은은한 노란 조명(편안해요)' }, { id: 'b5', text: '가방 어깨끈의 넓은 패드' }, { id: 'bx', text: '숲속 새소리' }] } } },
                target: { sort: { info: ['b1'], deco: ['b2'], use: ['b3', 'b5'], mood: ['b4'] } }, difficulty: 0.3 },
              { prompt: '마지막 새 카드도 네 갈래로 나누어 보세요.',
                toolOptions: { topic: '네 갈래', slots: [{ id: 'info', label: '알려 주는' }, { id: 'deco', label: '꾸며 주는' }, { id: 'use', label: '쓰기 편하게' }, { id: 'mood', label: '기분을 만드는' }], cards: [{ id: 'c1', text: '물놀이장 안전 수칙 그림' }, { id: 'c2', text: '음식점 메뉴판 사진' }, { id: 'c3', text: '쿠션에 수놓은 무늬' }, { id: 'c4', text: '놀이공원 입구의 알록달록한 문(설레요)' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'c1', text: '물놀이장 안전 수칙 그림' }, { id: 'c2', text: '음식점 메뉴판 사진' }, { id: 'c3', text: '쿠션에 수놓은 무늬' }, { id: 'c4', text: '놀이공원 입구의 알록달록한 문(설레요)' }, { id: 'cx', text: '바닷가의 파도' }] } } },
                target: { sort: { info: ['c1', 'c2'], deco: ['c3'], mood: ['c4'] } }, difficulty: 0.3,
                conclude: '갈래를 하나 더 만들면 전에는 안 보이던 미술이 보여요. 갈래는 우리가 더 알맞게 바꿀 수 있어요.' },
            ],
          },
          {
            id: 'a3', title: '활동 3. 적게 찾은 갈래를 교실에서 더 찾기 (짝 활동)', minutes: 8, tool: 'mindmap', pair: true,
            teacher: '준비물: 활동지 2번 표. "그래프에서 적게 찾은 쓰기 편하게 돕는 미술과, 오늘 새로 만든 기분을 만드는 미술을 교실 안에서 직접 찾아요." 짝끼리 교실 안 물건을 만져 보고 둘러보게 한다(가위 손잡이, 연필 모양, 창가 화분 받침, 교실 커튼 색 등). 찾은 것은 붙임쪽지에 써서 게시판 해당 칸에 붙이게 하고, 마지막에 칸마다 몇 장이 늘었는지 함께 센다.',
            task: '짝과 교실 안을 살펴, 적게 찾은 갈래와 새 갈래에 들어갈 생활 속 미술을 찾아 활동지 2번 표와 게시판에 더해요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              { prompt: '교실 물건을 만져 보며 쓰기 편하게 돕는 미술 하나를 찾아 활동지 표에 쓴 뒤 "다 했어요"를 누르세요.', toolOptions: { topic: '더 찾은 미술', slots: [{ id: 'use', label: '쓰기 편하게' }, { id: 'mood', label: '기분을 만드는' }], cards: [{ id: 'q1', text: '손잡이' }, { id: 'q2', text: '홈' }, { id: 'q3', text: '굽은 모양' }] }, free: true, talk: true, difficulty: 0 },
              { prompt: '교실을 둘러보며 기분을 만드는 미술 하나를 찾아 표에 쓰고, 어떤 기분이 드는지 짝에게 말한 뒤 "다 했어요"를 누르세요.', toolOptions: { topic: '더 찾은 미술', slots: [{ id: 'use', label: '쓰기 편하게' }, { id: 'mood', label: '기분을 만드는' }], cards: [{ id: 'q1', text: '차분해요' }, { id: 'q2', text: '신나요' }] }, free: true, talk: true, difficulty: 0 },
              { prompt: '찾은 것을 붙임쪽지에 써서 게시판 알맞은 칸에 붙이고 "다 했어요"를 누르세요.', toolOptions: { topic: '게시판에 더하기', slots: [{ id: 'use', label: '쓰기 편하게' }, { id: 'mood', label: '기분을 만드는' }], cards: [{ id: 'q1', text: '붙임쪽지' }] }, free: true, talk: true, difficulty: 0 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝 활동으로 쓰기 편하게 칸과 기분을 만드는 칸에 몇 장이 늘었나요?" 늘어난 수를 세어 그림그래프에 작은 동그라미로 더해 붙인다. 쉬는 시간에도 적게 찾은 갈래를 하나씩 더 찾아 붙이기로 약속한다. 출구 1번에서 그림이 가장 많은 줄을 고른 학생에게는 "더 찾아야 할" 갈래는 그림이 가장 적은 줄이라는 것을 짚는다.',
        exitTicket: [
          { type: 'tool', tool: 'chart', options: { type: 'picture', mode: 'read', title: '2반이 찾은 생활 속 미술', data: [['알려 주기', 7], ['꾸며 주기', 6], ['쓰기 편하게', 8], ['기분 만들기', 2]], unit: '개', xLabel: '하는 일', icons: [{ value: 5, name: '5개' }, { value: 1, name: '1개' }], choices: ['알려 주기', '꾸며 주기', '쓰기 편하게', '기분 만들기'], question: '2반이 더 찾아야 할 갈래는?', explain: '기분 만들기는 작은 그림 2개뿐이라 가장 적어요.' }, prompt: '2반의 그림그래프(큰 그림 5개, 작은 그림 1개)를 보고 더 찾아야 할 갈래를 고르세요.', target: { pick: 3 }, difficulty: 0.15 },
          { type: 'choice', prompt: '"기분을 만드는 미술"에 들어갈 것은?', options: ['버스 노선도', '병원 대기실의 하늘색 벽', '가위 손잡이 구멍'], answer: 1, difficulty: 0.15, explain: '하늘색 벽은 기다리는 사람의 마음을 차분하게 해요.' },
          { type: 'short', prompt: '우리 반이 적게 찾은 갈래에 들어갈 생활 속 미술을 하나 더 찾아 쓰세요.' },
        ],
      },
    ],
    worksheet: {
      title: '갈래별로 몇 개 찾았나',
      items: [
        { type: 'table', prompt: '그림그래프를 읽고 갈래마다 큰 그림(10개)과 작은 그림(1개) 수를 세어 찾은 수를 쓰세요.', columns: ['갈래','큰 그림(10개)','작은 그림(1개)','찾은 수'], cells: [['알려 주기','0개','9개',''],['꾸며 주기','1개','2개',''],['쓰기 편하게','0개','4개','']], answer: '알려 주기 9개, 꾸며 주기 12개, 쓰기 편하게 4개' },
        { type: 'table', prompt: '세 갈래에 더 찾은 것과, 세 갈래 어디에도 들지 않아 새 갈래에 넣은 것을 쓰세요.', columns: ['갈래', '더 찾은 수', '대표 예'], cells: [['알려 주는', '', ''], ['꾸며 주는', '', ''], ['쓰기 편하게', '', ''], ['새 갈래: 기분을 만드는', '', '']] },
        { type: 'choice', prompt: '쓰기 편하게 돕는 미술을 적게 찾은 까닭으로 알맞은 것에 ○ 하세요.', options: ['생활에 하나도 없어서', '손잡이·홈처럼 작아 눈에 덜 띄어서', '미술이 아니어서'], answer: '손잡이·홈처럼 작아 눈에 덜 띄어서' },
        { type: 'short', prompt: '적게 찾은 갈래의 미술을 더 찾으려면 어디를 어떻게 살펴볼지 쓰세요.' },
      ],
      easy: {
        note: '큰 그림 하나는 10개, 작은 그림 하나는 1개예요. 그림이 가장 적은 줄이 가장 적게 찾은 갈래예요.',
        items: [
          { type: 'table', prompt: '찾은 수를 쓰세요.', columns: ['갈래', '찾은 수'], cells: [['알려 주는', ''], ['꾸며 주는', ''], ['쓰기 편하게', '']] },
          { type: 'choice', prompt: '기분을 만드는 미술에 ○ 하세요.', options: ['병원 하늘색 벽', '버스 노선도'], answer: '병원 하늘색 벽' },
          { type: 'short', prompt: '더 찾고 싶은 생활 속 미술을 하나 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '그림그래프 줄 끝에 수가 보이고, 카드를 맞는 칸에 놓으면 바로 표시돼요.',
      base: '큰 그림 10개·작은 그림 1개를 스스로 세어 읽고, 카드를 나눈 뒤 확인해요.',
      challenge: '큰 그림이 5개를 나타내는 그림그래프를 읽고, 사람이 만들지 않은 카드(노을, 새소리, 파도)가 섞여 있어 남겨야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 적게 찾은 갈래를 "생활에 적은 것"으로 여긴다 → 눈에 덜 띄는 것은 자세히 살펴야 보인다(1~12차시 살피기). ② 기분을 만드는 미술과 꾸며 주는 미술을 헷갈린다 → "물건의 겉을 꾸미나, 그곳 사람의 마음을 만드나?" ③ 그림그래프에서 큰 그림과 작은 그림을 같은 수로 센다 → 그래프 아래 그림 단위를 먼저 읽게 한다. 그래프는 3학년에서 배운 그림그래프 읽기만 쓰고, 막대그래프·수 계산은 수학 시간에 맡긴다. 갈래를 하나 더 만드는 것 자체가 21차시 "나누는 방법은 하나가 아니다"로 이어진다.',
  }));

  // ───────────── 20차시 (확장) ─────────────
  lessons.push(lesson(20, S4, {
    title: '우리 학교에 필요한 안내 그림 꾸미기',
    objective: '글 없이 그림만으로 뜻을 알리는 안내 그림의 특징(단순한 모양·뚜렷한 색 대비)을 찾고, 우리 학교에 필요한 안내 그림을 만들 수 있다.',
    illustration: {
      prompt: art('a set of simple school pictograms for hand washing, quiet library and stairs up, cut from bold contrasting paper'),
      scene: scene([
        { motif: 'sun', x: 410, y: 56, s: 0.7 }, { motif: 'cloud', x: 110, y: 50 }, { motif: 'hills', y: 214 },
        { motif: 'house', x: 240, y: 222, s: 1.3 }, { motif: 'star', x: 130, y: 120, s: 0.5 }, { motif: 'star', x: 350, y: 120, s: 0.5 },
        { motif: 'text', x: 240, y: 92, text: '글 없이도 알 수 있어요', size: 22 },
      ]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '글자 없이 그림만 있는 안내 그림(손 씻기, 조용히, 계단) 세 장을 띄우고 "이 그림들은 무엇을 알려 줄까요? 글자가 없는데 어떻게 알았나요?"라고 묻는다. 한글을 아직 모르는 동생이나 다른 나라에서 온 친구도 알 수 있다는 것이 안내 그림의 힘이라고 짚는다. 이어 복잡하게 그린 안내 그림 한 장을 보여 주고 "이것은 멀리서 알아보기 쉬울까요?"라고 물어, 단순한 모양과 뚜렷한 색이 필요하다는 것을 연다. 시연 단추로 좋은 안내 그림의 특징 카드를 고르는 모습을 보여 준다.',
        student: '글자 없는 안내 그림 세 장을 보고, 무엇을 알려 주는지 맞혀 봅시다.',
        demo: { tool: 'mindmap', options: { mode: 'pick', topic: '좋은 안내 그림', cards: [{ id: 'd1', text: '모양이 단순해요' }, { id: 'd2', text: '아주 자세하고 복잡해요' }] }, sequence: [{ pick: ['d1'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 좋은 안내 그림 살펴보기', minutes: 12, tool: 'mindmap',
            teacher: '"멀리서 1초만 보고도 알 수 있으려면?" 단순한 모양, 바탕과 그림의 뚜렷한 색 차이, 누구나 아는 그림이라는 세 가지를 칠판에 적는다. 뜻 잇기에서는 그림 속 단서(물방울, 입에 댄 손가락, 화살표)를 찾게 한다. 만드는 차례에서는 마지막에 친구에게 보여 뜻이 통하는지 묻는 단계가 왜 필요한지 묻는다.',
            task: '좋은 안내 그림의 특징을 고르고, 그림이 알려 주는 뜻을 잇고, 만드는 차례를 놓아요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '멀리서도 뜻이 잘 통하는 안내 그림의 특징만 고르세요.',
                toolOptions: { mode: 'pick', topic: '좋은 안내 그림', cards: [{ id: 'p1', text: '글을 몰라도 뜻을 알 수 있어요' }, { id: 'p2', text: '모양이 단순해요' }, { id: 'p3', text: '바탕과 그림 색이 뚜렷이 달라요' }, { id: 'p4', text: '아주 자세하고 복잡하게 그려요' }, { id: 'p5', text: '비슷한 색끼리 겹쳐요' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'p1', text: '글을 몰라도 뜻을 알 수 있어요' }, { id: 'p2', text: '모양이 단순해요' }, { id: 'p3', text: '바탕과 그림 색이 뚜렷이 달라요' }, { id: 'p4', text: '아주 자세하고 복잡하게 그려요' }, { id: 'p5', text: '비슷한 색끼리 겹쳐요' }, { id: 'p6', text: '긴 설명 글을 함께 써요' }] } } },
                hints: ['교실 뒤 끝에서 이 그림을 본다고 생각해요. 그래도 뜻이 한눈에 통하게 돕는 특징인가요?'],
                target: { pick: ['p1', 'p2', 'p3'] }, difficulty: 0.15 },
              { prompt: '안내 그림과 그 그림이 알려 주는 뜻을 이어 보세요.',
                toolOptions: { mode: 'match', topic: '안내 그림의 뜻', slots: [{ id: 's1', label: '수도꼭지·물방울·두 손' }, { id: 's2', label: '책과 입에 댄 손가락' }, { id: 's3', label: '계단 그림과 위쪽 화살표' }], cards: [{ id: 'j1', text: '손을 씻는 곳이에요' }, { id: 'j2', text: '도서관에서는 조용히 해요' }, { id: 'j3', text: '계단으로 올라가요' }, { id: 'jx', text: '뛰어도 돼요' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'j1', text: '손을 씻는 곳이에요' }, { id: 'j2', text: '도서관에서는 조용히 해요' }, { id: 'j3', text: '계단으로 올라가요' }, { id: 'jx', text: '뛰어도 돼요' }, { id: 'jy', text: '책을 사는 곳이에요' }] } } },
                target: { match: { s1: 'j1', s2: 'j2', s3: 'j3' } }, difficulty: 0.2,
                predict: { q: '글자가 없어도 그림만으로 뜻을 알 수 있을까요?', options: ['알 수 있어요', '알 수 없어요'], answer: 0 },
                conclude: '누구나 아는 단순한 그림을 쓰면 글자 없이도 뜻이 통해요.' },
              { prompt: '안내 그림을 만드는 차례대로 카드를 놓아 보세요.',
                toolOptions: { mode: 'order', cards: [{ id: 'o1', text: '필요한 곳과 알릴 뜻 정하기' }, { id: 'o2', text: '단순한 모양으로 그림 고르기' }, { id: 'o3', text: '눈에 띄는 색 짝 정하기' }, { id: 'o4', text: '친구에게 보여 뜻이 통하는지 묻기' }], slots: 4 },
                levels: { challenge: { toolOptions: { cards: [{ id: 'o1', text: '필요한 곳과 알릴 뜻 정하기' }, { id: 'o2', text: '단순한 모양으로 그림 고르기' }, { id: 'o3', text: '눈에 띄는 색 짝 정하기' }, { id: 'o4', text: '친구에게 보여 뜻이 통하는지 묻기' }, { id: 'ox', text: '글자를 아주 많이 써 넣기' }] } } },
                target: { order: ['o1', 'o2', 'o3', 'o4'] }, difficulty: 0.2 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 우리 학교 안내 그림 만들기', minutes: 14, tool: 'collage',
            teacher: '"조각을 몇 개만 써도 뜻이 통하나요? 조각이 많을수록 좋을까요?" 꼭 필요한 조각만 남기게 한다. 조용히 해요 문항에서 노랑 바탕에 하양 조각을 놓는 학생에게는 교실 뒤에서 보게 하여 대비를 다시 고르게 한다. 마지막 문항은 짝이 뜻을 맞혀야 점검을 표시한다.',
            task: '꼭 필요한 조각만 골라 단순하게, 바탕과 그림의 색이 뚜렷이 다르게 안내 그림을 만들어요.',
            levels: {
              easy: { shapes: ['circle', 'square', 'leaf', 'rect', 'triangle'], colors: ['파랑', '하양', '노랑', '보라', '검정'], sizes: ['s', 'm', 'l'] },
              base: { shapes: ['circle', 'square', 'leaf', 'rect', 'triangle', 'semi', 'heart'] },
              challenge: {},
            },
            items: [
              { prompt: '손 씻는 곳 안내 그림을 만들어요. 큰 파랑 네모 바탕 위에 하양 나뭇잎 물방울을 두 개 이상 겹쳐요.', target: { has: [{ shape: 'square', color: '파랑', size: 'l', n: 1 }, { shape: 'leaf', color: '하양', min: 2 }], overlap: 2 }, difficulty: 0.2,
                levels: { challenge: { prompt: '손 씻는 곳 안내 그림을 손까지 만들어요. 큰 파랑 네모 위에 하양 나뭇잎 물방울 셋 이상, 하양 반원 손 둘 이상을 겹치고, 조각은 일곱 개까지만 써요.', target: { has: [{ shape: 'square', color: '파랑', size: 'l', n: 1 }, { shape: 'leaf', color: '하양', min: 3 }, { shape: 'semi', color: '하양', min: 2 }], overlap: 3, pieces: { max: 7 } } } } },
              { prompt: '"조용히 해요" 안내 그림을 만들어요. 큰 노랑 동그라미 하나에 검정·보라·갈색 같은 어두운 색 조각을 맞대고, 조각은 네 개까지만 써요.', target: { has: [{ shape: 'circle', color: '노랑', size: 'l', n: 1 }], contrast: 'light-dark', pieces: { max: 4 } }, difficulty: 0.3,
                hints: ['바탕이 밝은 색이면, 맞댈 조각은 어두운 색이어야 교실 뒤에서도 또렷해요. 빨강·파랑은 중간 밝기예요.'],
                levels: { challenge: { prompt: '"조용히 해요"에 입에 댄 손가락까지 넣어요. 큰 노랑 동그라미에 검정·보라·갈색 같은 어두운 조각을 맞대고, 하양 긴 네모 손가락 하나를 겹쳐 다섯 조각까지만 써요.', target: { has: [{ shape: 'circle', color: '노랑', size: 'l', n: 1 }, { shape: 'rect', color: '하양', n: 1 }], contrast: 'light-dark', overlap: 1, pieces: { max: 5 } } } } },
              { prompt: '우리 학교에 필요한 안내 그림을 하나 정해 만들고 점검해요.', target: { selfCheck: ['글 없이 그림만으로 뜻을 나타냈어요', '모양을 단순하게 골랐어요', '바탕과 그림의 색이 뚜렷이 달라요', '짝이 뜻을 맞혔어요'], minPieces: 3 }, difficulty: 0.15 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"친구의 안내 그림을 1초만 보고 뜻을 맞혀 볼까요?" 두세 작품을 짧게 띄우고 맞히게 한다. 맞히기 어려웠던 작품은 무엇을 빼거나 바꾸면 좋을지 함께 말한다. 출구 2번에서 "멋있어 보여서"를 고른 학생에게는 글을 모르는 동생을 떠올리게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '안내 그림의 뜻', slots: [{ id: 's1', label: '포크와 숟가락 그림' }, { id: 's2', label: '불꽃과 문으로 뛰는 사람' }], cards: [{ id: 'j1', text: '밥 먹는 곳이에요' }, { id: 'j2', text: '불이 나면 이쪽으로 피해요' }, { id: 'jx', text: '조용히 해요' }] }, prompt: '안내 그림과 알려 주는 뜻을 이어 보세요.', target: { match: { s1: 'j1', s2: 'j2' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '안내 그림에서 글 대신 그림을 쓰는 까닭으로 가장 알맞은 것은?', options: ['멋있어 보여서', '글을 모르는 사람이나 다른 나라 사람도 알 수 있어서', '글씨 쓰기가 귀찮아서'], answer: 1, difficulty: 0.1, explain: '그림은 글을 모르는 동생이나 다른 말을 쓰는 사람도 한눈에 알아볼 수 있어요.' },
          { type: 'mood', prompt: '오늘 안내 그림 만들기는 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '우리 학교 안내 그림',
      items: [
        { type: 'table', prompt: '우리 학교에 안내 그림이 필요한 곳을 찾아 계획을 쓰세요.', columns: ['필요한 곳', '알릴 뜻', '쓸 그림', '바탕 색과 그림 색'], cells: [['급식실 앞', '', '', ''], ['', '', '', '']] },
        { type: 'check', prompt: '내 안내 그림을 점검하고 해낸 것에 ✓ 하세요.', options: ['글 없이 뜻이 통해요', '모양이 단순해요', '바탕과 그림 색이 뚜렷이 달라요', '친구가 뜻을 맞혔어요'] },
        { type: 'choice', prompt: '멀리서 가장 잘 보이는 색 짝에 ○ 하세요.', options: ['노랑 바탕에 하양 그림', '노랑 바탕에 검정 그림', '분홍 바탕에 빨강 그림'], answer: '노랑 바탕에 검정 그림' },
        { type: 'draw', prompt: '계획한 안내 그림을 단순한 모양으로 크게 그리세요.' },
      ],
      easy: {
        note: '좋은 안내 그림 = 글 없이 + 단순한 모양 + 뚜렷한 색 차이',
        items: [
          { type: 'choice', prompt: '좋은 안내 그림의 특징에 ○ 하세요.', options: ['모양이 단순해요', '아주 복잡해요'], answer: '모양이 단순해요' },
          { type: 'table', prompt: '안내 그림 계획을 쓰세요.', columns: ['필요한 곳', '알릴 뜻'], cells: [['', '']] },
          { type: 'draw', prompt: '안내 그림을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 카드에 초록 테두리가 생기고, 색종이는 대비 짝이 든 다섯 색만 나와요.',
      base: '스스로 고른 뒤 확인하고, 일곱 가지 모양 가운데 꼭 필요한 것만 골라요.',
      challenge: '만드는 차례에 끼어든 카드가 있어요. 안내 그림은 물방울과 손, 조용히 하라는 손가락처럼 뜻을 더 담되 정해진 조각 수 안에서 단순하게 만들어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 안내 그림을 자세하고 복잡하게 그린다 → "1초만 보고 알 수 있나요?" ② 바탕과 그림을 비슷한 밝기로 골라 멀리서 안 보인다 → 교실 뒤에서 보게 한다. ③ 글자를 함께 써야 안심한다 → 글을 모르는 동생을 떠올리게 한다. 완성 작품은 실제로 그 자리에 붙여 보고 21차시에 효과를 이야기한다(붙일 때는 담당 선생님께 허락을 받는다).',
  }));

  // ───────────── 21차시 (핵심) ─────────────
  lessons.push(lesson(21, S4, {
    title: '같은 카드를 다른 기준으로 나눈 친구와 견주기',
    objective: '같은 생활 속 미술을 친구가 다른 기준(있는 곳·하는 일·쓰는 때)으로 나눈 것을 견주어 어떤 점이 다른지 말하고, 기준이 달라도 맞을 수 있음을 설명할 수 있다.',
    illustration: {
      prompt: art('two children comparing the same set of paper cards sorted into different groups on two desks, nodding and pointing at labels'),
      scene: scene([
        { motif: 'sun', x: 410, y: 56, s: 0.7 }, { motif: 'cloud', x: 120, y: 50 }, { motif: 'hills', y: 214 },
        { motif: 'tree', x: 100, y: 218 }, { motif: 'tree', x: 380, y: 218, color: 'mint' },
        { motif: 'text', x: 240, y: 140, text: '기준이 다르면 갈래도 달라요', size: 20 },
      ]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '두 모둠의 게시판을 나란히 띄운다. 한 모둠은 "하는 일"로, 다른 모둠은 "있는 곳(학교 안·학교 밖)"으로 나누었다. "두 모둠 가운데 누가 틀렸을까요?" 대답을 듣고 "둘 다 맞아요. 나누는 기준이 달랐을 뿐이에요."라고 짚는다. "갈래를 나누는 방법은 하나뿐일까요?"를 오늘의 질문으로 남긴다. 시연 단추로 같은 카드가 "있는 곳" 기준으로 나뉘는 모습을 보여 준다.',
        student: '두 모둠의 게시판을 보고, 무엇을 기준으로 나누었는지 찾아 말해 봅시다.',
        demo: { tool: 'mindmap', options: { topic: '있는 곳', slots: [{ id: 'in', label: '학교 안' }, { id: 'out', label: '학교 밖 길' }], cards: [{ id: 'd1', text: '교실 비상구 표시' }, { id: 'd2', text: '학교 앞 횡단보도' }] }, sequence: [{ sort: { in: ['d1'], out: ['d2'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 같은 카드, 다른 기준으로 나누기', minutes: 13, tool: 'mindmap',
            teacher: '"이번 문항의 기준은 무엇인가요? 기준을 먼저 소리 내어 읽고 나눠요." 세 문항에 같은 카드 여섯 장이 나오지만 기준이 바뀌면 갈래도 바뀐다는 것을 직접 겪게 한다. 앞 문항의 갈래를 그대로 옮기는 학생에게는 가지 이름을 다시 읽게 한다.',
            task: '같은 생활 속 미술 카드를 문항마다 주어진 기준에 따라 나누어요. 기준이 바뀌면 갈래도 바뀌어요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '기준은 "있는 곳"이에요. 카드를 학교 안과 학교 밖 길로 나누어 보세요.',
                toolOptions: { topic: '기준: 있는 곳', slots: [{ id: 'in', label: '학교 안' }, { id: 'out', label: '학교 밖 길' }], cards: [{ id: 'x1', text: '교실 비상구 표시' }, { id: 'x2', text: '복도 소화기의 빨강' }, { id: 'x3', text: '교실 게시판 테두리' }, { id: 'x4', text: '정류장 버스 노선도' }, { id: 'x5', text: '학교 앞 횡단보도' }, { id: 'x6', text: '교실 창문 눈송이 장식' }] },
                levels: { challenge: { prompt: '기준은 "있는 곳"이에요. 학교 안과 학교 밖 길로 나누되, 어느 쪽에도 없는 카드 하나는 남겨 두세요.', toolOptions: { cards: [{ id: 'x1', text: '교실 비상구 표시' }, { id: 'x2', text: '복도 소화기의 빨강' }, { id: 'x3', text: '교실 게시판 테두리' }, { id: 'x4', text: '정류장 버스 노선도' }, { id: 'x5', text: '학교 앞 횡단보도' }, { id: 'x6', text: '교실 창문 눈송이 장식' }, { id: 'x7', text: '우리 집 거실 달력 그림' }] } } },
                hints: ['그 미술을 보려면 교문 밖으로 나가야 하나요? 이번에는 있는 곳 하나만 따져요.'],
                target: { sort: { in: ['x1', 'x2', 'x3', 'x6'], out: ['x4', 'x5'] } }, difficulty: 0.15 },
              { prompt: '같은 카드를 이번에는 "하는 일" 기준으로 알려 주는 미술과 꾸며 주는 미술로 나누어 보세요.',
                toolOptions: { topic: '기준: 하는 일', slots: [{ id: 'info', label: '알려 주는 미술' }, { id: 'deco', label: '꾸며 주는 미술' }], cards: [{ id: 'x1', text: '교실 비상구 표시' }, { id: 'x2', text: '복도 소화기의 빨강' }, { id: 'x3', text: '교실 게시판 테두리' }, { id: 'x4', text: '정류장 버스 노선도' }, { id: 'x5', text: '학교 앞 횡단보도' }, { id: 'x6', text: '교실 창문 눈송이 장식' }] },
                levels: { challenge: { prompt: '같은 카드를 "하는 일" 기준으로 알려 주는 미술과 꾸며 주는 미술로 나누어 보세요. 쓰기 편하게 돕는 카드 하나는 어느 쪽에도 넣지 않아요.', toolOptions: { cards: [{ id: 'x1', text: '교실 비상구 표시' }, { id: 'x2', text: '복도 소화기의 빨강' }, { id: 'x3', text: '교실 게시판 테두리' }, { id: 'x4', text: '정류장 버스 노선도' }, { id: 'x5', text: '학교 앞 횡단보도' }, { id: 'x6', text: '교실 창문 눈송이 장식' }, { id: 'x7', text: '가위 손잡이 구멍 모양' }] } } },
                target: { sort: { info: ['x1', 'x2', 'x4', 'x5'], deco: ['x3', 'x6'] } }, difficulty: 0.25,
                predict: { q: '기준을 바꾸면 갈래도 달라질까요?', options: ['그대로예요', '달라져요'], answer: 1 },
                conclude: '같은 것도 기준에 따라 여러 가지로 나눌 수 있어요. 나누는 방법은 하나뿐이 아니에요.' },
              { prompt: '같은 카드를 "언제 쓰나요" 기준으로 급할 때 찾는 것과 날마다 보는 것으로 나누어 보세요.',
                toolOptions: { topic: '기준: 쓰는 때', slots: [{ id: 'urgent', label: '급할 때 찾는 것' }, { id: 'daily', label: '날마다 보는 것' }], cards: [{ id: 'x1', text: '교실 비상구 표시' }, { id: 'x2', text: '복도 소화기의 빨강' }, { id: 'x3', text: '교실 게시판 테두리' }, { id: 'x4', text: '정류장 버스 노선도' }, { id: 'x5', text: '학교 앞 횡단보도' }, { id: 'x6', text: '교실 창문 눈송이 장식' }] },
                levels: { challenge: { prompt: '같은 카드를 "언제 쓰나요" 기준으로 급할 때 찾는 것과 날마다 보는 것으로 나누어 보세요. 일 년에 한 번 쓰는 카드는 남겨 두세요.', toolOptions: { cards: [{ id: 'x1', text: '교실 비상구 표시' }, { id: 'x2', text: '복도 소화기의 빨강' }, { id: 'x3', text: '교실 게시판 테두리' }, { id: 'x4', text: '정류장 버스 노선도' }, { id: 'x5', text: '학교 앞 횡단보도' }, { id: 'x6', text: '교실 창문 눈송이 장식' }, { id: 'x7', text: '운동회 날 다는 만국기' }] } } },
                target: { sort: { urgent: ['x1', 'x2'], daily: ['x3', 'x4', 'x5', 'x6'] } }, difficulty: 0.3 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 나와 다르게 나눈 친구에게 말하기', minutes: 13, tool: 'emotion',
            teacher: '"기준이 달라서 다른 것과, 같은 기준인데 잘못 넣은 것은 다르게 말해야 해요." 앞의 경우에는 서로의 기준을 말해 주고, 뒤의 경우에는 그 미술이 하는 일을 함께 다시 따져 보자고 말하게 한다. 탓하거나 무조건 따르는 보기의 결과를 함께 읽는다.',
            task: '친구와 갈래가 달랐던 상황을 읽고, 기준을 견주어 함께 더 나아지는 말을 골라요.',
            levels: { easy: {}, base: { revealAfterCheck: true }, challenge: { revealAfterCheck: true } },
            items: [
              { prompt: '민지는 "있는 곳", 나는 "하는 일"로 나누었어요. 민지가 "네가 틀렸어"라고 해요. 어떻게 말할까요?',
                toolOptions: { mode: 'branch', who: '민지', situation: '"네 갈래는 나랑 달라. 네가 틀렸어."', choices: [
                  { id: 'base', text: '나는 하는 일로 나눴어. 기준이 달라서 그래. 네 기준도 들려줘.', result: '민지가 자기 기준을 말하고, 둘 다 두 가지 방법을 알게 됐어요', mood: '뿌듯함' },
                  { id: 'give', text: '응, 내가 틀렸나 봐. 다 지울게.', result: '맞게 나눈 내 갈래가 사라졌어요', mood: '속상함', why: '기준이 달라도 맞을 수 있어요. 무조건 지울 필요는 없어요.' },
                  { id: 'fight', text: '아니야, 네가 틀렸어!', result: '둘이 다투느라 아무도 새로 배우지 못했어요', mood: '화남', why: '서로 탓하면 기준을 견줄 수 없어요.' }] },
                hints: ['기준이 다른 것은 틀린 것이 아니에요. 서로의 기준을 들려주고 들어 보는 말을 찾아요.'],
                target: { choice: 'base' }, difficulty: 0.2 },
              { prompt: '같은 "하는 일" 기준인데, 준호가 소화기 빨강을 꾸며 주는 미술에 넣었어요. 어떻게 말할까요?',
                toolOptions: { mode: 'branch', who: '준호', situation: '"소화기 빨강은 예쁘니까 꾸며 주는 미술이야."', choices: [
                  { id: 'ok', text: '그래, 네 맘대로 해.', result: '준호가 소화기가 하는 일을 생각해 보지 못했어요', mood: '걱정', why: '같은 기준이면 하는 일을 함께 따져 볼 수 있어요.' },
                  { id: 'think', text: '빨강이 급할 때 무슨 일을 하는지 같이 생각해 볼까?', result: '준호가 "눈에 띄어 빨리 찾게 하는구나!" 하고 옮겼어요', mood: '기쁨' },
                  { id: 'laugh', text: '그것도 몰라?', result: '준호가 부끄러워 말을 멈췄어요', mood: '속상함', why: '놀리는 말은 친구가 생각을 멈추게 해요.' }] },
                target: { choice: 'think' }, difficulty: 0.25,
                predict: { q: '같은 기준인데 다르게 넣었다면, 기준이 다른 경우와 같게 말해도 될까요?', options: ['같게 말해요', '하는 일을 함께 따져 봐요'], answer: 1 } },
              { prompt: '모둠 게시판을 나누는데 두 가지 방법이 나왔어요. 어떻게 하면 좋을까요?',
                toolOptions: { mode: 'branch', who: '모둠', situation: '"하는 일로 나누자" vs "있는 곳으로 나누자"', choices: [
                  { id: 'loud', text: '목소리 큰 친구 방법으로 해요.', result: '다른 친구들은 왜 그 방법인지 몰라요', mood: '걱정', why: '까닭 없이 정하면 모두가 이해하지 못해요.' },
                  { id: 'drop', text: '하나는 틀렸으니 버려요.', result: '좋은 생각 하나를 잃었어요', mood: '속상함', why: '두 방법 모두 맞을 수 있어요.' },
                  { id: 'compare', text: '두 방법을 견주어 게시판 목적에 더 맞는 것을 골라요.', result: '"생활 속 미술이 하는 일 알리기"라는 목적에 맞춰 하는 일로 정했어요', mood: '뿌듯함' }] },
                levels: { challenge: { toolOptions: { choices: [
                  { id: 'loud', text: '목소리 큰 친구 방법으로 해요.', result: '다른 친구들은 왜 그 방법인지 몰라요', mood: '걱정', why: '까닭 없이 정하면 모두가 이해하지 못해요.' },
                  { id: 'drop', text: '하나는 틀렸으니 버려요.', result: '좋은 생각 하나를 잃었어요', mood: '속상함', why: '두 방법 모두 맞을 수 있어요.' },
                  { id: 'compare', text: '두 방법을 견주어 게시판 목적에 더 맞는 것을 골라요.', result: '"생활 속 미술이 하는 일 알리기"라는 목적에 맞춰 하는 일로 정했어요', mood: '뿌듯함' },
                  { id: 'vote', text: '까닭은 듣지 말고 바로 손을 들어 정해요.', result: '정해졌지만 왜 그 방법인지 아무도 몰라요', mood: '걱정', why: '정하기 전에 두 기준의 좋은 점을 먼저 들어 봐요.' }] } } },
                target: { choice: 'compare' }, difficulty: 0.3,
                conclude: '기준이 여러 가지일 때는 견주어 보고, 쓰려는 목적에 더 맞는 기준을 골라요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"갈래를 나누는 방법은 하나뿐일까요?" 오늘 같은 카드 여섯 장이 세 가지로 나뉜 것을 다시 보여 준다. 출구 2번에서 "하나뿐"을 고른 학생에게는 자기 필통 속 물건을 색으로, 쓰임으로 두 번 나눠 보게 한다. 다음 시간에는 우리 모둠 갈래 이름을 더 알맞게 고친다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '기준: 하는 일', slots: [{ id: 'info', label: '알려 주는 미술' }, { id: 'deco', label: '꾸며 주는 미술' }], cards: [{ id: 'e1', text: '급식실 식단표 그림' }, { id: 'e2', text: '강당 무대 커튼 무늬' }, { id: 'e3', text: '화장실 문의 남녀 그림' }] }, prompt: '새 카드를 "하는 일" 기준으로 나누어 보세요.', target: { sort: { info: ['e1', 'e3'], deco: ['e2'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '"갈래를 나누는 방법은 하나뿐이야."에 대한 생각으로 알맞은 것은?', options: ['맞아요. 정답은 하나예요.', '기준에 따라 여러 가지로 나눌 수 있어요.', '나누지 않는 것이 좋아요.'], answer: 1, difficulty: 0.1, explain: '같은 카드도 있는 곳·하는 일·쓰는 때처럼 기준을 바꾸면 다르게 나뉘어요.' },
          { type: 'mood', prompt: '오늘 친구와 견주어 보니 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '기준이 다르면',
      items: [
        { type: 'table', prompt: '같은 생활 속 미술을 두 가지 기준으로 나누어 쓰세요.', columns: ['기준', '갈래 1', '갈래 2'], cells: [['있는 곳', '학교 안: ', '학교 밖: '], ['하는 일', '알려 주는: ', '꾸며 주는: ']] },
        { type: 'choice', prompt: '친구가 다른 기준으로 나누었을 때 할 말로 알맞은 것에 ○ 하세요.', options: ['네가 틀렸어.', '내 기준은 하는 일이야. 네 기준은 뭐야?', '내가 다 지울게.'], answer: '내 기준은 하는 일이야. 네 기준은 뭐야?' },
        { type: 'short', prompt: '내 갈래와 친구 갈래가 어떻게 달랐는지, 왜 달랐는지 쓰세요.' },
        { type: 'short', prompt: '우리 게시판에는 어떤 기준이 더 알맞은지 까닭과 함께 쓰세요.' },
      ],
      easy: {
        note: '먼저 "무엇을 기준으로 나눴어?"를 물어봐요.',
        items: [
          { type: 'table', prompt: '두 기준으로 나누어 쓰세요.', columns: ['기준', '나눈 것'], cells: [['있는 곳', ''], ['하는 일', '']] },
          { type: 'choice', prompt: '알맞은 말에 ○ 하세요.', options: ['네 기준은 뭐야?', '네가 틀렸어.'], answer: '네 기준은 뭐야?' },
          { type: 'short', prompt: '친구와 다르게 나눈 것을 하나 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드가 맞는 칸에 놓이면 바로 표시되고, 말 고르기는 결과가 바로 보여 견주어 골라요.',
      base: '스스로 나눈 뒤 확인하고, 말의 결과는 맞힌 뒤에만 보여요.',
      challenge: '나누기 문항마다 어느 갈래에도 들지 않는 카드가 하나 섞여 있고, 모둠 상황에 그럴듯한 보기가 하나 더 있으며, 결과는 맞힌 뒤에만 보여요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 갈래를 나누는 방법은 하나뿐이라고 여겨 친구 갈래를 틀렸다고 한다 → 같은 카드를 세 기준으로 나눈 활동 1을 다시 보여 준다. ② "기준이 달라서 다른 것"과 "같은 기준인데 잘못 넣은 것"을 구별하지 못한다 → 먼저 기준을 묻는다. ③ 다른 의견이 나오면 무조건 따르거나 다툰다 → 목적에 비추어 고른다. 소화기 빨강은 "하는 일" 기준에서는 알려 주는(눈에 띄게 하는) 미술이다.',
  }));

  // ───────────── 22차시 (연습) ─────────────
  lessons.push(lesson(22, S4, {
    title: '갈래 이름을 더 알맞게 고쳐 쓰기',
    objective: '갈래 이름이 속한 것들의 공통된 일을 드러내는지 살펴, 겉모습으로 지은 이름을 하는 일이 드러나는 이름으로 고치고 그 까닭을 말할 수 있다.',
    illustration: {
      prompt: art('a child crossing out a paper label that says red things and pinning a new label on a bulletin board section with signs and fire extinguishers'),
      scene: scene([
        { motif: 'sun', x: 410, y: 56, s: 0.7 }, { motif: 'cloud', x: 110, y: 50 }, { motif: 'hills', y: 214 },
        { motif: 'flower', x: 110, y: 222, color: 'rose' }, { motif: 'tree', x: 380, y: 218 },
        { motif: 'text', x: 240, y: 140, text: '이름을 다시 지어 봐요', size: 22 },
      ]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '한 모둠의 게시판 이름표 "빨간 것"을 가리키며 "여기에는 소화기, 금지 표지, 비상벨이 있어요. 셋이 함께 하는 일은 무엇인가요?" 학생들이 "위험을 알려 줘요"라고 하면, 그 말을 새 이름표에 써서 옆에 붙인다. "어느 이름이 이 묶음을 더 잘 알려 주나요?" 고친 이름이 더 낫다는 것을 겉모습과 하는 일의 차이로 짚는다. 시연 단추로 "빨간 것" 묶음에 더 알맞은 이름 카드가 이어지는 모습을 보여 준다.',
        student: '"빨간 것"이라는 이름표와 "위험을 알리는 미술"이라는 이름표 가운데 무엇이 더 알맞은지 말해 봅시다.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '이름 고치기', slots: [{ id: 'd1', label: '"빨간 것": 소화기·비상벨' }], cards: [{ id: 'n1', text: '위험을 알리는 미술' }, { id: 'n2', text: '빨갛고 예쁜 것' }] }, sequence: [{ match: { d1: 'n1' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 고치기 전 이름과 더 알맞은 이름 잇기', minutes: 12, tool: 'mindmap',
            teacher: '"따옴표 속 이름은 고치기 전 이름이에요. 뒤에 적힌 것들이 함께 하는 일을 찾아 새 이름을 골라요." 겉모습(색, 재료, 있는 곳)만 바꾼 이름 카드는 고른 이유를 물어 다시 생각하게 한다. 18차시에서 배운 "이름 = 함께 하는 일 + 미술"을 떠올린다.',
            task: '고치기 전 이름과 속한 생활 속 미술을 읽고, 함께 하는 일이 드러나는 더 알맞은 이름 카드를 이어요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              { prompt: '두 묶음의 이름을 더 알맞게 고쳐 보세요.',
                toolOptions: { mode: 'match', topic: '이름 고치기', slots: [{ id: 'g1', label: '"빨간 것": 소화기·비상벨' }, { id: 'g2', label: '"예쁜 것": 포장지·커튼' }], cards: [{ id: 'n1', text: '위험을 알리는 미술' }, { id: 'n2', text: '기분 좋게 꾸며 주는 미술' }, { id: 'nx', text: '빨갛고 예쁜 것' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'n1', text: '위험을 알리는 미술' }, { id: 'n2', text: '기분 좋게 꾸며 주는 미술' }, { id: 'nx', text: '빨갛고 예쁜 것' }, { id: 'ny', text: '종이와 천으로 만든 것' }] } } },
                hints: ['물건들의 색이나 재료 말고, 그 물건들이 함께 해 주는 일을 먼저 말해 보고 그 일이 들어간 이름을 골라요.'],
                target: { match: { g1: 'n1', g2: 'n2' } }, difficulty: 0.2 },
              { prompt: '다른 두 묶음의 이름을 더 알맞게 고쳐 보세요.',
                toolOptions: { mode: 'match', topic: '이름 고치기', slots: [{ id: 'g1', label: '"그림": 화장실·분리수거 그림' }, { id: 'g2', label: '"물건": 가위 구멍·손잡이' }], cards: [{ id: 'n1', text: '글 없이 뜻을 알려 주는 미술' }, { id: 'n2', text: '몸에 맞게 쓰기 편한 미술' }, { id: 'nx', text: '학교 물건' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'n1', text: '글 없이 뜻을 알려 주는 미술' }, { id: 'n2', text: '몸에 맞게 쓰기 편한 미술' }, { id: 'nx', text: '학교 물건' }, { id: 'ny', text: '그림이 있는 것' }] } } },
                target: { match: { g1: 'n1', g2: 'n2' } }, difficulty: 0.25,
                predict: { q: '"그림"이라는 이름을 고치면 무엇을 넣어야 할까요?', options: ['그림의 색', '그림이 함께 하는 일'], answer: 1 },
                conclude: '갈래 이름에 함께 하는 일을 넣으면, 이름만 보고도 그 묶음을 알 수 있어요.' },
              { prompt: '또 다른 두 묶음의 이름을 더 알맞게 고쳐 보세요.',
                toolOptions: { mode: 'match', topic: '이름 고치기', slots: [{ id: 'g1', label: '"색깔": 노선 색·칫솔 색' }, { id: 'g2', label: '"벽": 병원·도서관 벽' }], cards: [{ id: 'n1', text: '색으로 구별하게 하는 미술' }, { id: 'n2', text: '마음을 차분하게 하는 미술' }, { id: 'nx', text: '색깔 있는 벽' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'n1', text: '색으로 구별하게 하는 미술' }, { id: 'n2', text: '마음을 차분하게 하는 미술' }, { id: 'nx', text: '색깔 있는 벽' }, { id: 'ny', text: '여러 가지 색' }] } } },
                target: { match: { g1: 'n1', g2: 'n2' } }, difficulty: 0.3 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 고친 까닭을 말풍선에 쓰기', minutes: 14, tool: 'story',
            teacher: '"처음 이름 → 고친 이름 → 고친 까닭" 세 칸을 이어 읽으면 친구에게 설명하는 말이 돼요. 까닭 말풍선에 "더 예뻐서"를 넣는 학생에게는 "이름이 예쁜 것보다 무엇이 중요했나요?"라고 묻는다. 마지막 문항은 우리 모둠 게시판 이름을 떠올려 말해 보게 한다.',
            task: '처음 이름, 고친 이름, 고친 까닭 말풍선의 빈칸에 알맞은 카드를 넣어요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              { prompt: '"빨간 것"을 고친 서연이의 설명을 완성해 보세요.',
                toolOptions: { mode: 'fill', cards: ['빨간 것', '위험을 알리는 미술', '위험을 알려 주는', '예쁘게 꾸미는'], slots: [{ id: 'b1', who: '서연', motif: 'star', label: '처음 이름은 "___"이었어.' }, { id: 'b2', who: '서연', motif: 'star', label: '"___"로 고쳤어.' }, { id: 'b3', who: '서연', motif: 'star', label: '모두 ___ 일을 하니까.' }] },
                levels: { challenge: { toolOptions: { cards: ['빨간 것', '위험을 알리는 미술', '위험을 알려 주는', '예쁘게 꾸미는', '빨갛고 둥근 미술'] } } },
                hints: ['고친 이름과 까닭에는 같은 일이 들어가요. 겉모습을 말하는 카드는 처음 이름 자리에만 어울려요.'],
                target: { fill: { b1: '빨간 것', b2: '위험을 알리는 미술', b3: '위험을 알려 주는' } }, difficulty: 0.2 },
              { prompt: '"예쁜 것"을 고친 도윤이의 설명을 완성해 보세요.',
                toolOptions: { mode: 'fill', cards: ['예쁜 것', '기분 좋게 꾸며 주는 미술', '물건을 꾸며 기분을 좋게 하는', '길을 알려 주는'], slots: [{ id: 'b1', who: '도윤', motif: 'flower', label: '처음 이름은 "___"이었어.' }, { id: 'b2', who: '도윤', motif: 'flower', label: '"___"로 고쳤어.' }, { id: 'b3', who: '도윤', motif: 'flower', label: '모두 ___ 일을 하니까.' }] },
                levels: { challenge: { toolOptions: { cards: ['예쁜 것', '기분 좋게 꾸며 주는 미술', '물건을 꾸며 기분을 좋게 하는', '길을 알려 주는', '반짝이는 포장 미술'] } } },
                target: { fill: { b1: '예쁜 것', b2: '기분 좋게 꾸며 주는 미술', b3: '물건을 꾸며 기분을 좋게 하는' } }, difficulty: 0.25 },
              { prompt: '"물건"을 고친 지아의 설명을 완성해 보세요.',
                toolOptions: { mode: 'fill', cards: ['물건', '몸에 맞게 쓰기 편한 미술', '손과 몸을 편하게 돕는', '눈에 띄게 하는'], slots: [{ id: 'b1', who: '지아', motif: 'leaf', label: '처음 이름은 "___"이었어.' }, { id: 'b2', who: '지아', motif: 'leaf', label: '"___"로 고쳤어.' }, { id: 'b3', who: '지아', motif: 'leaf', label: '모두 ___ 일을 하니까.' }] },
                levels: { challenge: { toolOptions: { cards: ['물건', '몸에 맞게 쓰기 편한 미술', '손과 몸을 편하게 돕는', '눈에 띄게 하는', '더 예쁘게 보이는'] } } },
                target: { fill: { b1: '물건', b2: '몸에 맞게 쓰기 편한 미술', b3: '손과 몸을 편하게 돕는' } }, difficulty: 0.3,
                conclude: '이름을 고칠 때는 "처음 이름 → 고친 이름 → 함께 하는 일(까닭)"으로 말해요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"우리 모둠 게시판에서 고치고 싶은 이름이 있나요?" 모둠마다 하나를 골라 새 이름표로 바꿔 붙이고, 고친 까닭을 한 문장으로 말하게 한다. 출구 1번에서 "초록색 미술"을 고른 학생에게는 비상구 표시와 초록 신호등이 함께 하는 일을 묻는다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '이름 고치기', slots: [{ id: 'g1', label: '"초록": 비상구·초록불' }], cards: [{ id: 'n1', text: '안전하게 가는 길을 알려 주는 미술' }, { id: 'nx', text: '초록색 미술' }, { id: 'ny', text: '예쁜 미술' }] }, prompt: '"초록" 묶음의 이름을 더 알맞게 고쳐 보세요.', target: { match: { g1: 'n1' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '갈래 이름을 고칠 때 가장 먼저 살펴볼 것은?', options: ['속한 것들이 함께 하는 일', '속한 것들의 크기', '이름 글자 수'], answer: 0, difficulty: 0.1, explain: '함께 하는 일이 이름에 드러나야 이름만 보고도 묶음을 알 수 있어요.' },
          { type: 'mood', prompt: '오늘 이름 고치기는 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '갈래 이름 고치기',
      items: [
        { type: 'table', prompt: '우리 모둠 갈래 이름 가운데 하나를 골라 고쳐 쓰세요.', columns: ['처음 이름', '속한 것', '고친 이름', '고친 까닭'], cells: [['', '', '', ''], ['', '', '', '']] },
        { type: 'choice', prompt: '"동그란 것: 시계, 단추, 접시"처럼 겉모습으로 지은 이름의 아쉬운 점에 ○ 하세요.', options: ['너무 길어요', '무슨 일을 하는 묶음인지 알 수 없어요', '글자가 어려워요'], answer: '무슨 일을 하는 묶음인지 알 수 없어요' },
        { type: 'blank', prompt: '빈칸을 채워 고친 까닭을 쓰세요.', text: '처음 이름은 "___"이었는데, "___"로 고쳤어요. 모두 ___ 일을 하기 때문이에요.', answer: '예: 빨간 것 / 위험을 알리는 미술 / 위험을 알려 주는' },
        { type: 'short', prompt: '친구 모둠의 갈래 이름 가운데 잘 지은 이름 하나와 그 까닭을 쓰세요.' },
      ],
      easy: {
        note: '고친 이름 = 함께 하는 일 + "미술"',
        items: [
          { type: 'choice', prompt: '"빨간 것"을 고친 이름으로 알맞은 것에 ○ 하세요.', options: ['위험을 알리는 미술', '빨갛고 예쁜 것'], answer: '위험을 알리는 미술' },
          { type: 'table', prompt: '이름을 고쳐 쓰세요.', columns: ['처음 이름', '고친 이름'], cells: [['예쁜 것', '']] },
          { type: 'short', prompt: '고친 까닭을 한 문장으로 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞게 이은 이름과 말풍선에 초록 테두리가 생겨요.',
      base: '스스로 잇고 채운 뒤 확인해요.',
      challenge: '이름 잇기와 말풍선 모두에 겉모습만 바꾼 그럴듯한 카드가 더 섞여 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 겉모습(색·모양·있는 곳)으로 지은 이름을 그대로 둔다 → "셋이 함께 하는 일은?" ② 고친 이름이 너무 길어진다 → 함께 하는 일 + "미술"로 줄인다. ③ 고친 까닭을 "더 예뻐서"로 말한다. 갈래 이름에 정답이 하나뿐인 것은 아니다 — 하는 일이 드러나면 학생마다 다른 이름도 받아 준다(21차시 "나누는 방법은 여러 가지"와 같은 생각).',
  }));

  // ───────────── 23차시 (단원 정리) ─────────────
  lessons.push(lesson(23, S4, {
    title: '단원을 돌아보며 살피는 힘과 생활 속 미술 정리하기',
    objective: '단원에서 배운 감각으로 살피기와 생활 속 미술의 역할을 묶어 말하고, 바른 생각을 가려내며 스스로 얼마나 해냈는지 평가할 수 있다.',
    illustration: {
      prompt: art('a classroom wall showing the whole unit journey: a pine cone under a magnifying glass, signs, wrapping patterns and pictograms connected by a paper path'),
      scene: scene([
        { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 110, y: 50 }, { motif: 'hills', y: 214 },
        { motif: 'tree', x: 80, y: 218 }, { motif: 'leaf', x: 160, y: 200, r: -20 }, { motif: 'house', x: 300, y: 222 }, { motif: 'star', x: 400, y: 150, s: 0.6 },
        { motif: 'text', x: 240, y: 122, text: '살피고, 찾고, 나누었어요', size: 22 },
      ]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '1차시의 "처음 솔방울" 그림과 18차시 모둠 게시판 사진을 나란히 띄운다. "우리는 이 단원에서 무엇을 했나요? 앞쪽은 무엇을 배웠고, 뒤쪽은 무엇을 배웠나요?" 앞은 감각과 방향으로 자세히 살피기, 뒤는 그 힘으로 생활 속 미술을 찾고 나누기였다는 것을 학생 말로 정리한다. "자세히 살피는 힘이 생활 속 미술을 찾는 데 어떻게 쓰였나요?"라고 물어 두 부분을 잇는다. 시연 단추로 단원 활동 카드가 두 갈래로 나뉘는 모습을 보여 준다.',
        student: '1차시의 처음 그림과 우리 반 게시판을 보고, 이 단원에서 무엇을 했는지 말해 봅시다.',
        demo: { tool: 'mindmap', options: { topic: '미적 체험', slots: [{ id: 'see', label: '감각으로 살피기' }, { id: 'life', label: '생활 속 미술 찾기' }], cards: [{ id: 'd1', text: '솔방울을 손으로 만져 봐요' }, { id: 'd2', text: '비상구 표시가 하는 일 찾기' }] }, sequence: [{ sort: { see: ['d1'], life: ['d2'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 배운 것 묶고 바른 생각 가려내기', minutes: 13, tool: 'mindmap',
            teacher: '"이 활동은 단원의 앞쪽(살피기)일까요, 뒤쪽(생활 속 미술)일까요?" 활동을 떠올리며 나누게 한다. 상황 잇기에서는 배운 방법을 새 상황에 옮겨 쓰는지 본다. 바른 생각 고르기는 단원 내내 짚은 생각들(아는 것도 다시 살핀다, 한 방향이 전부가 아니다, 미술은 미술관에만 있지 않다, 예쁜 것만이 역할이 아니다, 나누는 방법은 여럿)을 한 번에 묶는 문항이다.',
            task: '단원에서 한 활동을 두 갈래로 나누고, 상황에 알맞은 방법을 잇고, 바른 생각만 골라요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '이 단원에서 한 활동을 두 갈래로 나누어 보세요.',
                toolOptions: { topic: '미적 체험', slots: [{ id: 'see', label: '감각으로 살피기' }, { id: 'life', label: '생활 속 미술 찾기' }], cards: [{ id: 'u1', text: '눈·손·코·귀로 살펴요' }, { id: 'u2', text: '위·옆·아래로 돌려 봐요' }, { id: 'u3', text: '처음 생각과 견주어요' }, { id: 'u4', text: '표지판 색과 모양의 뜻 찾기' }, { id: 'u5', text: '하는 일에 따라 갈래 나누기' }, { id: 'u6', text: '학교 안내 그림 꾸미기' }] },
                levels: { challenge: { prompt: '이 단원에서 한 활동을 두 갈래로 나누어 보세요. 이 단원에서 하지 않은 활동 카드 하나는 남겨 두세요.', toolOptions: { cards: [{ id: 'u1', text: '눈·손·코·귀로 살펴요' }, { id: 'u2', text: '위·옆·아래로 돌려 봐요' }, { id: 'u3', text: '처음 생각과 견주어요' }, { id: 'u4', text: '표지판 색과 모양의 뜻 찾기' }, { id: 'u5', text: '하는 일에 따라 갈래 나누기' }, { id: 'u6', text: '학교 안내 그림 꾸미기' }, { id: 'u7', text: '물감 번지기로 하늘 그리기' }] } } },
                hints: ['대상을 자세히 보고 만지는 활동인가요, 생활 속 미술이 하는 일을 찾고 쓰는 활동인가요?'],
                target: { sort: { see: ['u1', 'u2', 'u3'], life: ['u4', 'u5', 'u6'] } }, difficulty: 0.15 },
              { prompt: '새 상황마다 이 단원에서 배운 알맞은 방법을 이어 보세요.',
                toolOptions: { mode: 'match', topic: '배운 것 옮겨 쓰기', slots: [{ id: 's1', label: '처음 보는 열매 그리기' }, { id: 's2', label: '복도 "뛰지 마세요" 안내' }, { id: 's3', label: '친구 갈래가 나와 달라요' }], cards: [{ id: 'm1', text: '여러 감각과 방향으로 살펴요' }, { id: 'm2', text: '단순한 모양과 뚜렷한 색으로 안내 그림을 만들어요' }, { id: 'm3', text: '서로 기준을 묻고 견주어요' }, { id: 'mx', text: '이름만 찾아보고 끝내요' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'm1', text: '여러 감각과 방향으로 살펴요' }, { id: 'm2', text: '단순한 모양과 뚜렷한 색으로 안내 그림을 만들어요' }, { id: 'm3', text: '서로 기준을 묻고 견주어요' }, { id: 'mx', text: '이름만 찾아보고 끝내요' }, { id: 'my', text: '아주 자세하고 복잡하게 그려요' }] } } },
                hints: ['상황마다 무엇을 해야 하는지 먼저 말해 봐요. 그리기 전에는 살피기, 안내에는 알아보기 쉬움, 다른 갈래에는 기준이 떠올라요.'],
                target: { match: { s1: 'm1', s2: 'm2', s3: 'm3' } }, difficulty: 0.25 },
              { prompt: '이 단원에서 알게 된 바른 생각만 고르세요.',
                toolOptions: { mode: 'pick', topic: '바른 생각', cards: [{ id: 'r1', text: '아는 물건도 자세히 살피면 새로 보여요' }, { id: 'r2', text: '미술은 생활 곳곳에서 일을 해요' }, { id: 'r3', text: '갈래는 기준에 따라 여러 가지예요' }, { id: 'r4', text: '미술은 미술관 그림뿐이에요' }, { id: 'r5', text: '한 방향에서 본 모습이 전부예요' }, { id: 'r6', text: '예쁜 것만 미술의 역할이에요' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'r1', text: '아는 물건도 자세히 살피면 새로 보여요' }, { id: 'r2', text: '미술은 생활 곳곳에서 일을 해요' }, { id: 'r3', text: '갈래는 기준에 따라 여러 가지예요' }, { id: 'r4', text: '미술은 미술관 그림뿐이에요' }, { id: 'r5', text: '한 방향에서 본 모습이 전부예요' }, { id: 'r6', text: '예쁜 것만 미술의 역할이에요' }, { id: 'r7', text: '한 번 살핀 것은 다시 볼 필요가 없어요' }] } } },
                target: { pick: ['r1', 'r2', 'r3'] }, difficulty: 0.25,
                predict: { q: '단원을 시작할 때 내 생각 가운데 바뀐 것이 있을까요?', options: ['바뀐 것이 있어요', '하나도 없어요'] },
                conclude: '자세히 살피는 힘으로 생활 속 미술을 찾고, 기준을 세워 나누었어요. 처음 생각보다 더 많이 알게 되었어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 단원 마무리 작품 만들고 스스로 점검하기', minutes: 13, tool: 'collage',
            teacher: '"단원에서 가장 기억에 남는 것 하나를 골라 마무리 작품으로 만들어요." 첫 문항은 대칭(7차시)과 밝고 어두운 대비(20차시)를 한 이름표에 함께 써 보는 문항이다. 점검 목록은 정말 해낸 것만 표시하도록 하고, 짝에게 작품을 설명한 뒤 표시하게 한다. 교사 화면에서 점검 결과를 보고 더 해 볼 학생을 다음 단원 첫 시간에 챙긴다.',
            task: '배운 조형 방법을 써서 마무리 작품을 만들고, 해낸 것을 스스로 점검해요.',
            levels: {
              easy: { shapes: ['circle', 'square', 'rect', 'star', 'heart', 'leaf'], colors: ['노랑', '보라', '빨강', '초록', '파랑', '하양', '검정'], sizes: ['m', 'l'] },
              base: {},
              challenge: {},
            },
            items: [
              { prompt: '교실 문 이름표를 왼쪽과 오른쪽이 똑같게 만들어요. 하양·노랑 같은 밝은 색 조각과 검정·보라 같은 어두운 색 조각을 맞대고, 조각은 여섯 개 이상 써요.', target: { symmetry: 'vertical', contrast: 'light-dark', pieces: { min: 6 } }, difficulty: 0.25,
                hints: ['가운데 세로 선을 접는다고 생각해요. 한쪽에 놓은 조각마다 반대쪽 같은 자리에 같은 조각이 있나요? 밝은 조각 옆에 어두운 조각이 닿아 있나요?'],
                levels: { challenge: { prompt: '접는 선 없이 교실 문 이름표를 왼쪽과 오른쪽이 똑같게 만들어요. 큰 하양 네모 바탕 위에 검정·보라 같은 어두운 색 조각을 맞대고, 조각은 여덟 개 이상 써요.', toolOptions: { guide: false }, target: { symmetry: 'vertical', contrast: 'light-dark', has: [{ shape: 'square', color: '하양', size: 'l', n: 1 }], pieces: { min: 8 } } } } },
              { prompt: '이 단원에서 가장 자세히 살핀 대상의 한 부분을 화면 가득 나타내고 점검해요.', target: { selfCheck: ['여러 감각이나 방향으로 살핀 대상을 골랐어요', '한 부분을 크게 나타냈어요', '처음 생각과 달라진 점을 말할 수 있어요'], minPieces: 4 }, difficulty: 0.15,
                levels: { challenge: { prompt: '이 단원에서 가장 자세히 살핀 대상의 한 부분을 화면 가득 나타내요. 조각을 여섯 개 이상 써서 결이나 무늬까지 담고 점검해요.', target: { selfCheck: ['여러 감각이나 방향으로 살핀 대상을 골랐어요', '한 부분을 크게 나타냈어요', '결이나 무늬처럼 자세히 본 것을 조각으로 담았어요', '처음 생각과 달라진 점을 말할 수 있어요'], minPieces: 6 } } } },
              { prompt: '우리 학교에 있으면 좋을 생활 속 미술 하나를 만들고 점검해요.', target: { selfCheck: ['알려 주기·꾸며 주기·쓰기 편하게 가운데 하는 일을 정했어요', '하는 일이 드러나게 색과 모양을 골랐어요', '짝이 하는 일을 맞혔어요'], minPieces: 3 }, difficulty: 0.15,
                levels: { challenge: { prompt: '우리 학교에 있으면 좋을 생활 속 미술 하나를 만들되, 하는 일 두 가지를 함께 담고 점검해요.', target: { selfCheck: ['하는 일 두 가지를 정했어요', '두 일이 모두 드러나게 색과 모양을 골랐어요', '대비나 되풀이 가운데 하나를 썼어요', '짝이 두 가지 일을 모두 맞혔어요'], minPieces: 5 } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"이 단원을 시작할 때와 지금, 나는 무엇이 달라졌나요?" 활동지 자기 평가 표를 채운 뒤 두세 명이 말하게 한다. 출구 1번에서 "자연물도 모두 미술"을 함께 고른 학생에게는 13차시의 기준(사람이 색과 모양을 생각해 만든 것)을 다시 짚는다. 다음 단원(표현)에서는 오늘 살핀 것과 찾은 미술을 바탕으로 직접 표현한다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '바른 생각', cards: [{ id: 'e1', text: '같은 대상도 친구마다 다르게 볼 수 있어요' }, { id: 'e2', text: '표지판의 색과 모양에는 뜻이 있어요' }, { id: 'e3', text: '자연물도 모두 생활 속 미술이에요' }] }, prompt: '새 카드에서 바른 생각만 골라 보세요.', target: { pick: ['e1', 'e2'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '생활 속 미술이 하는 일이 아닌 것은 무엇인가요?', options: ['길과 위험을 알려 줘요', '물건을 꾸며 기분을 좋게 해요', '물건을 쓰기 편하게 도와요', '사람을 미술관에만 가게 해요'], answer: 3, difficulty: 0.15, explain: '생활 속 미술은 알려 주고, 꾸며 주고, 쓰기 편하게 도와요. 미술은 미술관 밖 생활 곳곳에 있어요.' },
          { type: 'short', prompt: '이 단원에서 내가 가장 많이 자란 점 한 가지와, 다음에 더 해 보고 싶은 것을 쓰세요.' },
          { type: 'mood', prompt: '1단원 미적 체험을 마친 내 마음은 어떤가요?' },
        ],
      },
    ],
    worksheet: {
      title: '1단원 돌아보기',
      items: [
        { type: 'table', prompt: '할 수 있게 된 것마다 내 모습에 ○ 하세요.', columns: ['할 수 있게 된 것', '잘해요', '보통이에요', '더 해 볼래요'], cells: [['여러 감각과 방향으로 대상을 살펴요', '', '', ''], ['처음 생각과 살핀 뒤 생각을 견주어 말해요', '', '', ''], ['생활 속 미술이 하는 일을 근거를 들어 말해요', '', '', ''], ['기준을 세워 갈래를 나누고 이름을 붙여요', '', '', '']] },
        { type: 'choice', prompt: '바른 생각에 ○ 하세요.', options: ['미술은 미술관 그림뿐이에요', '한 방향에서 본 모습이 전부예요', '아는 물건도 자세히 살피면 새로 보여요', '갈래 나누는 방법은 하나뿐이에요'], answer: '아는 물건도 자세히 살피면 새로 보여요' },
        { type: 'short', prompt: '자세히 살피는 힘이 생활 속 미술을 찾는 데 어떻게 도움이 되었는지 쓰세요.' },
        { type: 'draw', prompt: '이 단원에서 가장 기억에 남는 장면 하나를 그리고 제목을 붙이세요.' },
      ],
      easy: {
        note: '앞쪽 = 감각으로 살피기, 뒤쪽 = 생활 속 미술 찾기',
        items: [
          { type: 'table', prompt: '내 모습에 ○ 하세요.', columns: ['할 수 있게 된 것', '잘해요', '더 해 볼래요'], cells: [['여러 감각으로 살펴요', '', ''], ['생활 속 미술을 찾아요', '', '']] },
          { type: 'choice', prompt: '바른 생각에 ○ 하세요.', options: ['미술은 생활 곳곳에 있어요', '미술은 미술관에만 있어요'], answer: '미술은 생활 곳곳에 있어요' },
          { type: 'draw', prompt: '가장 기억에 남는 장면을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 맞는 칸에 놓으면 바로 표시되고, 색종이는 대비 짝이 든 일곱 색과 두 크기만 나와요.',
      base: '스스로 나누고 고른 뒤 확인하고, 모든 모양과 색으로 작품을 만들어요.',
      challenge: '이 단원과 관계없는 활동 카드와 헷갈리는 생각 카드가 더 섞여 있고, 이름표는 접는 선 없이 하양 바탕 위에 대칭과 대비를 함께 써서 만들며, 마무리 작품은 조각과 점검 항목이 더 많아요.',
    },
    teacherNotes: '이 단원의 오개념을 한 번에 점검한다: ① 아는 물건은 살필 필요가 없다 ② 한 방향 모습이 전부다 ③ 살펴도 생각은 그대로다 ④ 미술은 미술관 그림뿐이다 ⑤ 예쁜 것만 미술의 역할이다 ⑥ 갈래 나누는 방법은 하나뿐이다. 활동 1의 3번(바른 생각 고르기)과 출구 1번의 결과로 아직 남은 오개념을 학생별로 확인하고, 자기 평가 표의 "더 해 볼래요"와 견주어 다음 단원 첫 시간에 짧게 다시 다룬다.',
  }));


  PaperLessons.registerUnit({
    id: 'g4-art-1-01', schema: 'edu-unit.v1', catalogUnit: UNIT,
    grade: 4, subject: '미술', unitTitle: TITLE,
    flow: '앞의 열두 차시는 감각으로 대상을 살피는 힘을 쌓습니다. 1~4차시는 눈·손·코·귀로 살펴 미리 알던 모습과 새로 알게 된 모습을 가르고, 친구와 다르게 본 점·만진 느낌·보는 거리에 따라 달라지는 모습을 찾습니다. 5~8차시는 위·옆·아래처럼 여러 방향에서 살펴 찾은 점을 적고 하나를 골라 크게 나타내며, 9~12차시는 살피기 전과 뒤에 달라진 생각을 말하고 다음에 살필 대상을 고릅니다. 뒤의 열한 차시는 같은 살피는 힘을 생활로 넓혀, 13~16차시에서 표지판·생활용품·무늬 속 미술이 하는 일을 찾고 근거를 댑니다. 17~20차시는 찾은 미술을 갈래로 나누어 이름을 붙이고 학교 안내 그림을 직접 꾸미며, 21~23차시는 친구의 갈래와 견주어 이름을 고치고 단원 전체를 스스로 돌아봅니다.',
    refs: {},
    lessons,
  });
})();
