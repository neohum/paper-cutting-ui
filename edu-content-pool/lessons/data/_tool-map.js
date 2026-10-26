/* 검사용 차시: 종이 지도(map) 교구의 모든 모드(pin·terrain·compass·legend·scale·ask)를 한 차시에서 쓴다. 4학년 1학기 1. 지도로 만나는 우리 지역 */
(function () {
  // 가상의 '종이 마을' — 학교를 가운데에 두어 여덟 방위가 칸으로 딱 떨어진다(실제 주소 없음)
  const TOWN = {
    grid: [6, 4],
    places: [
      { name: '학교', icon: 'school', at: [2, 1] }, { name: '우체국', icon: 'post', at: [0, 1] }, { name: '병원', icon: 'hospital', at: [4, 1] },
      { name: '도서관', icon: 'library', at: [2, 3] }, { name: '기차역', icon: 'station', at: [4, 3] }, { name: '공원', icon: 'park', at: [0, 3] },
      { name: '경찰서', icon: 'police', at: [3, 0] }, { name: '시청', icon: 'office', at: [1, 0] }, { name: '시장', icon: 'market', at: [5, 0] },
    ],
    roads: [[[0, 1], [5, 1]], [[2, 0], [2, 3]]],
    rivers: [[[0, 2], [5, 2]]],
  };
  const HILLS = [[0, 1, 2, 3, 1, 0], [0, 1, 2, 2, 1, 0], [0, 0, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0]];
  const LEGEND5 = ['school', 'hospital', 'post', 'police', 'library'];

  PaperLessons.register({
    id: '_tool-map',
    schema: 'edu-lesson.v1',
    catalog: { unit: 'g4-사회-1학기-1', lesson: 1 },
    grade: 4, subject: '사회', unitTitle: '1. 지도로 만나는 우리 지역',
    title: '종이 마을 지도에서 방위·기호·축척 읽기',
    objective: '지도의 방위표·기호와 범례·축척을 이용하여 장소의 위치와 거리를 말할 수 있다.',
    standards: ['[4사05-01]'],
    minutes: 40,
    formats: ['chromebook', 'projector', 'print'],
    illustration: {
      prompt: 'Layered paper-cut illustration of a small paper village map with a school, a hospital, a winding river and a compass rose, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.',
      scene: { viewBox: [480, 270], layers: [
        { motif: 'cloud', x: 110, y: 50 }, { motif: 'sun', x: 410, y: 58, s: 0.8 }, { motif: 'hills', y: 196 },
        { motif: 'house', x: 120, y: 214 }, { motif: 'house', x: 340, y: 216, color: 'sky', s: 0.85 }, { motif: 'tree', x: 230, y: 212 },
        { motif: 'text', x: 240, y: 140, text: '학교에서 병원은 어느 쪽일까요?', size: 22 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"우리 학교에서 도서관에 가려면 어느 쪽으로 가야 할까요? 오른쪽, 왼쪽으로만 말하면 친구가 반대편에 서 있을 때 헷갈려요." 시연 단추로 핀이 학교에 꽂혔다가 동쪽으로 두 칸 옮겨 가는 모습을 보여 준다. 오른쪽·왼쪽은 보는 사람마다 바뀌지만 동·서·남·북은 바뀌지 않는다는 점을 짚는다.',
        student: '그림 속 마을에서 학교와 병원을 찾아보고, 두 곳이 어떤 자리에 있는지 말해 봅시다.',
        demo: { tool: 'map', options: TOWN, sequence: [{ place: '학교' }, { from: '학교', dir: '동', steps: 2 }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 방위로 장소 찾아 핀 꽂기', minutes: 9, tool: 'map', options: TOWN,
            teacher: '"지도의 위쪽이 늘 북쪽일까요? 왼쪽 위의 북쪽 화살표를 먼저 찾아요." 남쪽으로 가라는데 북쪽으로 간 학생에게는 방위표에서 북의 맞은편이 남임을 손으로 짚게 한다. 몇 칸 갔는지 셀 때 출발한 칸은 세지 않는다는 것도 함께 짚는다.',
            task: '핀을 끌거나 지도의 칸을 눌러 꽂아요. 방향키로도 한 칸씩 옮길 수 있어요.',
            levels: {
              easy: { names: true, readout: true },
              base: { names: true },
              challenge: { names: false },
            },
            items: [
              { prompt: '도서관을 찾아 핀을 꽂아 보세요.', state: { pin: null }, target: { place: '도서관' }, difficulty: 0.05 },
              { prompt: '학교에서 동쪽으로 두 칸 간 곳에 핀을 꽂아 보세요.', state: { pin: [2, 1] }, target: { from: '학교', dir: '동', steps: 2 }, difficulty: 0.15,
                predict: { q: '동쪽은 지도에서 어느 쪽일까요?', options: ['오른쪽', '왼쪽', '위쪽'] },
                conclude: '북쪽 화살표가 위를 가리키는 지도에서 동쪽은 오른쪽이에요.' },
              { prompt: '학교에서 남쪽으로 두 칸 간 곳에 핀을 꽂아 보세요.', state: { pin: [2, 1] }, target: { from: '학교', dir: '남', steps: 2 }, difficulty: 0.15 },
              { prompt: '공원에서 북쪽으로 두 칸 간 곳에 핀을 꽂아 보세요. 핀이 어디에 있는지는 확인한 뒤에 보여요.', state: { pin: [0, 3] }, toolOptions: { readout: true }, target: { from: '공원', dir: '북', steps: 2 }, difficulty: 0.2, reveal: 'after-check' },
              { prompt: '더 해 보기: 기차역에서 북서쪽으로 곧장 가면 만나는 곳 하나에 핀을 꽂아 보세요.', state: { pin: [4, 3] }, target: { from: '기차역', dir: '북서' }, extra: true, difficulty: 0.3,
                conclude: '북서쪽은 북쪽과 서쪽 사이, 지도에서 왼쪽 위로 비스듬한 쪽이에요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 방위표를 돌려 방위 읽기', minutes: 9, tool: 'map', options: Object.assign({ mode: 'compass' }, TOWN),
            teacher: '"출발한 곳에 내가 서 있다고 생각하고, 도착할 곳을 바라봐요." 학교에서 본 병원과 병원에서 본 학교가 반대 방위라는 것을 짚는다. 마지막 문항은 북쪽 화살표가 오른쪽을 가리키는 지도라, 위쪽을 북쪽이라고 읽은 학생이 많다. 방위표를 먼저 돌려 맞추게 한다.',
            task: '출발과 도착 장소를 보고 방위 단추를 골라요. 방위표는 끌거나 방향키로 돌릴 수 있어요.',
            levels: {
              easy: { names: true },
              base: { names: true },
              challenge: { names: false },
            },
            items: [
              { prompt: '학교에서 보면 병원은 어느 방위에 있나요?', toolOptions: { from: '학교', to: '병원' }, target: { from: '학교', to: '병원' }, difficulty: 0.1 },
              { prompt: '학교에서 보면 기차역은 어느 방위에 있나요?', target: { from: '학교', to: '기차역' }, difficulty: 0.2,
                predict: { q: '기차역은 학교의 오른쪽 아래에 있어요. 무엇이라고 부를까요?', options: ['남동', '북동', '남서'] },
                conclude: '남쪽과 동쪽 사이를 남동이라고 해요.' },
              { prompt: '학교에서 보면 시청은 어느 방위에 있나요?', target: { from: '학교', to: '시청' }, difficulty: 0.2 },
              { prompt: '이 지도는 북쪽 화살표가 오른쪽을 가리켜요. 방위표를 돌려 맞추고, 학교에서 본 병원의 방위를 고르세요.', toolOptions: { north: 90 }, target: { align: true, from: '학교', to: '병원' }, difficulty: 0.35,
                conclude: '북쪽 화살표가 오른쪽을 가리키면 오른쪽이 북쪽이에요. 위쪽이 늘 북쪽은 아니에요.' },
            ],
          },
          {
            id: 'a3', title: '활동 3. 기호·범례, 축척, 땅의 높이', minutes: 9, tool: 'map', options: TOWN,
            teacher: '"범례는 지도의 약속이에요. 십자 모양은 무엇을 뜻할까요?" 축척 문항에서 칸 수만 쓰고 거리로 바꾸지 않은 학생에게 "한 칸이 실제로는 몇 m일까요?"를 묻는다. 높이 문항에서는 층이 많이 쌓일수록 높다는 것을 등고선과 이어 준다.',
            task: '범례 빈칸을 눌러 뜻을 고르고, 축척으로 거리를 구하고, 가장 높은 곳을 찾아요.',
            levels: {
              easy: { showCells: true },
              base: {},
              challenge: { terrainView: 'contour' },
            },
            items: [
              { prompt: '범례의 빈칸을 눌러 기호의 뜻을 알맞게 골라 보세요.', toolOptions: { mode: 'legend', names: false, legendIcons: LEGEND5 }, target: { legend: { school: '학교', hospital: '병원', post: '우체국', police: '경찰서', library: '도서관' } }, difficulty: 0.15 },
              { prompt: '축척을 보고 학교에서 도서관까지 길을 따라간 거리를 넣어 보세요.', toolOptions: { mode: 'scale', scale: { cell: 200, unit: 'm' }, from: '학교', to: '도서관' }, target: { from: '학교', to: '도서관' }, difficulty: 0.2, reveal: 'after-check',
                conclude: '두 칸이고 한 칸이 200m이니 400m예요.' },
              { prompt: '축척을 보고 우체국에서 기차역까지 길을 따라간 거리를 넣어 보세요.', toolOptions: { mode: 'scale', scale: { cell: 200, unit: 'm' }, from: '우체국', to: '기차역' }, target: { from: '우체국', to: '기차역' }, difficulty: 0.3 },
              { prompt: '마을 뒤 언덕에서 가장 높은 곳에 핀을 꽂아 보세요.', toolOptions: { mode: 'terrain', heights: HILLS }, target: { highest: true }, difficulty: 0.2,
                predict: { q: '가장 높은 곳은 어떻게 보일까요?', options: ['층이 가장 많이 쌓인 곳', '가장 넓은 곳', '강과 가까운 곳'] },
                conclude: '땅이 높을수록 종이 층(등고선)이 많이 겹쳐요.' },
              { prompt: '지도를 보고 고르세요. 학교에서 가장 가까운 곳은 어디인가요?', toolOptions: { readOnly: true, ask: { q: '학교와 가장 가까운 곳', choices: ['경찰서', '공원', '기차역'], why: [null, '공원은 학교에서 대각선으로 두 칸 떨어져 있어요.', '기차역은 학교에서 대각선으로 두 칸 떨어져 있어요.'] } }, target: { pick: 0 }, difficulty: 0.15 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"병원에서 학교를 보면 어느 방위일까요? 학교에서 병원을 본 것과 무엇이 다를까요?" 출구 질문 결과에서 2번(반대 방위)을 틀린 학생이 많으면 출발과 도착을 바꿔 다시 짚는다. 다음 시간에는 우리 고장 지도에 같은 약속을 적용한다.',
        exitTicket: [
          { type: 'tool', tool: 'map', options: TOWN, state: { pin: [2, 3] }, prompt: '도서관에서 북쪽으로 한 칸 간 곳에 핀을 꽂으세요.', target: { from: '도서관', dir: '북', steps: 1 }, difficulty: 0.15 },
          { type: 'tool', tool: 'map', options: Object.assign({ mode: 'compass' }, TOWN), prompt: '병원에서 보면 학교는 어느 방위에 있나요?', target: { from: '병원', to: '학교' }, difficulty: 0.2 },
          { type: 'choice', prompt: '축척이 "한 칸 = 500m"인 지도에서 세 칸 떨어진 두 곳의 실제 거리는?', options: ['3m', '500m', '1500m'], answer: 2, difficulty: 0.2, explain: '한 칸이 500m이니 세 칸은 500m를 세 번 더한 1500m예요.' },
          { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '종이 마을 지도 읽기',
      items: [
        { type: 'figure', prompt: '지도를 보고 학교에서 동·서·남쪽으로 곧장 가면 있는 곳을 쓰세요.', tool: 'map', options: TOWN, figures: [{ caption: '종이 마을 지도' }], answer: '동: 병원, 서: 우체국, 남: 도서관' },
        { type: 'figure', prompt: '범례 빈칸에 기호의 뜻을 쓰세요.', tool: 'map', options: Object.assign({}, TOWN, { mode: 'legend', names: false, legendIcons: LEGEND5 }), figures: [{ caption: '범례 채우기' }], answer: '학교, 병원, 우체국, 경찰서, 도서관' },
        { type: 'table', prompt: '출발과 도착을 보고 방위를 쓰세요.', columns: ['출발', '도착', '방위'], cells: [['학교', '병원', ''], ['학교', '기차역', ''], ['병원', '학교', '']] },
        { type: 'choice', prompt: '지도의 북쪽 화살표가 오른쪽을 가리키면 지도의 위쪽은 어느 방위인가요?', options: ['북', '서', '동'], answer: '서' },
        { type: 'short', prompt: '우리 집에서 학교까지 가는 길을 방위를 넣어 한 문장으로 쓰세요.' },
      ],
      easy: {
        note: '왼쪽 위 북쪽 화살표를 먼저 찾아요. 북쪽의 맞은편은 남쪽, 북쪽을 보고 오른쪽이 동쪽이에요.',
        items: [
          { type: 'figure', prompt: '지도를 보고 학교의 동쪽과 남쪽에 있는 곳을 쓰세요.', tool: 'map', options: TOWN, figures: [{ caption: '종이 마을 지도' }], answer: '동: 병원, 남: 도서관' },
          { type: 'choice', prompt: '지도에서 십자 모양 기호는 무엇을 뜻하나요?', options: ['병원', '학교', '공원'], answer: '병원' },
          { type: 'short', prompt: '우리 학교에서 가까운 곳 하나를 방위를 넣어 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '활동 1에서 핀이 있는 곳 이름이 바로 보이고, 활동 3 축척 문항에서 길 위 칸에 1·2·3 번호가 붙어 칸을 세기 쉬워요.',
      base: '장소 이름과 기호를 함께 보며 방위·거리를 구해요.',
      challenge: '지도에 장소 이름이 없어 범례의 기호로 장소를 찾고, 높이는 색 층 대신 등고선만 보고 찾아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 지도의 위쪽을 늘 북쪽으로 읽는다 → 북쪽 화살표가 오른쪽을 가리키는 문항(활동 2의 4번)에서 교구가 "위쪽을 북쪽이라고 읽었어요"라고 짚는다. ② 출발과 도착을 바꿔 반대 방위를 고른다 → 출발 장소에 서서 도착을 바라보게 한다. ③ 축척에서 칸 수만 세고 거리로 바꾸지 않는다, 출발한 칸까지 센다 → 건너간 칸만 세고 한 칸의 거리를 곱한다. ④ 기호를 모양이 아닌 색으로만 기억한다 → 흑백 활동지에서도 모양으로 찾게 한다.',
  });
})();
