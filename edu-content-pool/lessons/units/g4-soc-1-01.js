/* 4학년 1학기 사회 1. 지도로 만나는 우리 지역 — 단원 파일 (차시 2는 이미 있는 g4-social-map)
 * 모든 지도는 지어낸 칸 지도다(실제 주소·실제 통계 없음). 지도 위쪽이 북쪽이고, 방위를 묻는 장소는 칸이 곧게(또는 대각선으로) 떨어지게 놓았다.
 * 가람도(도) ⊃ 솔빛군 ⊃ 샘골면 ⊃ 햇살마을 처럼 차시 9~12의 지역은 서로 이어진다.
 */
(function () {
  const BASE = { schema: 'edu-lesson.v1', grade: 4, subject: '사회', unitTitle: '1. 지도로 만나는 우리 지역', minutes: 40, formats: ['chromebook', 'projector', 'print'] };
  const L = (n, o) => Object.assign({ id: `g4-soc-1-01-${String(n).padStart(2, '0')}`, catalog: { unit: 'g4-사회-1학기-1', lesson: n } }, BASE, o);
  const ILL = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const S1 = ['[4사05-01]']; const S2 = ['[4사05-02]'];
  const W = (o, more) => Object.assign({}, o, more || {});

  // ---- 지도들 ----
  // 1차시: 햇살마을 — 강이 마을을 가로지르고 큰길 두 개가 학교에서 만난다
  const HAETSAL = {
    grid: [6, 4],
    places: [
      { name: '학교', icon: 'school', at: [2, 2] }, { name: '도서관', icon: 'library', at: [2, 0] }, { name: '공원', icon: 'park', at: [4, 0] },
      { name: '소방서', icon: 'fire', at: [0, 0] }, { name: '시장', icon: 'market', at: [0, 2] }, { name: '병원', icon: 'hospital', at: [5, 2] },
      { name: '우체국', icon: 'post', at: [1, 3] }, { name: '기차역', icon: 'station', at: [4, 3] },
    ],
    rivers: [[[0, 1], [5, 1]]],
    roads: [[[0, 2], [5, 2]], [[2, 0], [2, 3]]],
  };
  // 3차시: 같은 학교를 조금 줄인 지도(한 칸 100m)와 많이 줄인 지도(한 칸 2km)
  const NEAR = {
    grid: [6, 4], title: '학교 둘레 지도', scale: { cell: 100, unit: 'm' },
    places: [
      { name: '학교', icon: 'school', at: [1, 1] }, { name: '아파트', icon: 'apartment', at: [4, 0] }, { name: '공원', icon: 'park', at: [0, 3] },
      { name: '시장', icon: 'market', at: [3, 3] }, { name: '병원', icon: 'hospital', at: [5, 3] }, { name: '도서관', icon: 'library', at: [5, 1] },
    ],
    roads: [[[0, 1], [5, 1]], [[1, 0], [1, 3]], [[1, 3], [5, 3]]],
  };
  const WIDE = {
    grid: [7, 5], title: '시 전체 지도', scale: { cell: 2, unit: 'km' },
    places: [
      { name: '시청', icon: 'office', at: [3, 2] }, { name: '기차역', icon: 'station', at: [0, 2] }, { name: '공항', icon: 'airport', at: [6, 0] },
      { name: '항구', icon: 'port', at: [6, 4] }, { name: '학교', icon: 'school', at: [2, 3] }, { name: '산', icon: 'mountain', at: [1, 0] },
      { name: '버스 터미널', icon: 'bus', at: [4, 2] },
    ],
    sea: [[6, 2], [6, 3]],
    roads: [[[0, 2], [5, 2]], [[3, 0], [3, 4]]],
  };
  // 4차시: 물빛마을 — 강 남서쪽에 논이 모이고(넷 가운데 셋), 학교 북동쪽에 과수원 둘, 공장 하나(기호를 세면 마을의 모습이 보인다)
  const MULBIT = {
    grid: [7, 4],
    places: [
      { name: '학교', icon: 'school', at: [3, 1] }, { name: '논', icon: 'field', at: [1, 3] }, { name: '과수원', icon: 'orchard', at: [5, 0] },
      { name: '논', icon: 'field', at: [0, 3] }, { name: '논', icon: 'field', at: [2, 3] }, { name: '논', icon: 'field', at: [0, 1] }, { name: '과수원', icon: 'orchard', at: [4, 0] },
      { name: '공장', icon: 'factory', at: [6, 3] }, { name: '다리', icon: 'bridge', at: [3, 2] }, { name: '절', icon: 'temple', at: [0, 0] },
      { name: '마을 석탑', icon: 'heritage', at: [2, 0] }, { name: '버스 터미널', icon: 'bus', at: [6, 1] }, { name: '우체국', icon: 'post', at: [3, 3] },
    ],
    rivers: [[[0, 2], [6, 2]]],
    roads: [[[3, 0], [3, 3]], [[3, 1], [6, 1]]],
  };
  // 4차시 활동 3: 같은 모양 기호가 다른 뜻인 지도(범례가 약속을 정한다)
  const BOMNARU = {
    grid: [6, 4], title: '봄나루 마을',
    places: [
      { name: '마을 회관', icon: 'office', at: [2, 1] }, { name: '수목원', icon: 'park', at: [5, 0] }, { name: '버스 정류장', icon: 'dot', at: [4, 3] },
      { name: '보건소', icon: 'hospital', at: [0, 3] }, { name: '경로당', icon: 'house', at: [0, 0] },
    ],
    meanings: { office: '마을 회관', park: '수목원', dot: '버스 정류장', hospital: '보건소', house: '경로당' },
    roads: [[[0, 1], [5, 1]], [[4, 1], [4, 3]]],
  };
  // 5차시: 바람골 — 영상지도처럼 땅의 색으로만 본 모습과, 기호로 그린 일반 지도
  const BARAM_PHOTO = {
    grid: [7, 4], title: '영상지도로 본 바람골', names: false, regionNames: false, legend: false,
    regions: [
      { name: '숲', color: 'mint', cells: [[0, 0], [1, 0], [0, 1], [1, 1], [0, 2]] },
      { name: '논밭', color: 'buttercup', cells: [[2, 0], [3, 0], [2, 1], [3, 1], [1, 2], [2, 2], [3, 2], [0, 3], [1, 3], [2, 3], [3, 3]] },
      { name: '마을', color: 'peach', cells: [[4, 0], [5, 0], [4, 1], [5, 1], [4, 2]] },
      { name: '모래사장', color: 'cream', cells: [[5, 2], [4, 3], [5, 3]] },
    ],
    sea: [[6, 0], [6, 1], [6, 2], [6, 3]],
    rivers: [[[3, 1], [3, 2], [3, 3]]],
  };
  const BARAM_MAP = {
    grid: [7, 4], title: '일반 지도로 본 바람골',
    places: [
      { name: '숲', icon: 'forest', at: [0, 1] }, { name: '논', icon: 'field', at: [2, 2] }, { name: '과수원', icon: 'orchard', at: [2, 0] },
      { name: '학교', icon: 'school', at: [5, 1] }, { name: '우체국', icon: 'post', at: [4, 0] }, { name: '다리', icon: 'bridge', at: [3, 2] },
      { name: '해수욕장', icon: 'beach', at: [5, 2] }, { name: '등대', icon: 'lighthouse', at: [5, 3] },
    ],
    sea: [[6, 0], [6, 1], [6, 2], [6, 3]],
    rivers: [[[3, 1], [3, 2], [3, 3]]],
    roads: [[[2, 1], [5, 1]]],
  };

  // 6차시: 푸른초등학교 1층 — 교실·도서실·교무실이 줄지어 있고 장소끼리 곧게(또는 대각선으로) 떨어져 있다
  const SCHOOL = {
    grid: [6, 4], title: '푸른초등학교 1층',
    places: [
      { name: '4학년 1반', icon: 'house', at: [0, 0] }, { name: '도서실', icon: 'library', at: [3, 0] }, { name: '교무실', icon: 'office', at: [5, 0] },
      { name: '보건실', icon: 'hospital', at: [0, 3] }, { name: '급식실', icon: 'market', at: [3, 3] }, { name: '운동장', icon: 'park', at: [5, 3] },
    ],
    meanings: { house: '교실', library: '도서실', office: '교무실', hospital: '보건실', market: '급식실', park: '운동장' },
  };
  // 7차시: 별빛동네 — 친구들의 길 안내 글을 따라가 본다
  const BYEOLBIT = {
    grid: [7, 5], title: '별빛동네',
    places: [
      { name: '우리 집', icon: 'house', at: [0, 4] }, { name: '학교', icon: 'school', at: [3, 2] }, { name: '도서관', icon: 'library', at: [6, 2] },
      { name: '우체국', icon: 'post', at: [3, 0] }, { name: '공원', icon: 'park', at: [1, 0] }, { name: '시장', icon: 'market', at: [6, 4] },
      { name: '경찰서', icon: 'police', at: [0, 2] }, { name: '소방서', icon: 'fire', at: [5, 0] },
    ],
    roads: [[[0, 2], [6, 2]], [[3, 0], [3, 4]], [[0, 4], [6, 4]]],
  };
  // 8차시: 학교 바깥 마당 — 한 칸 = 10걸음, 북쪽 화살표가 오른쪽을 가리키는 지도로도 쓴다
  const YARD = {
    grid: [6, 4], title: '푸른초등학교 마당', scale: { cell: 10, unit: '걸음' },
    places: [
      { name: '본관', icon: 'school', at: [0, 1] }, { name: '정문', icon: 'dot', at: [0, 3] }, { name: '체육관', icon: 'office', at: [5, 1] },
      { name: '텃밭', icon: 'field', at: [2, 0] }, { name: '놀이터', icon: 'park', at: [5, 3] }, { name: '급식실', icon: 'market', at: [3, 3] },
    ],
    meanings: { school: '본관', dot: '정문', office: '체육관', field: '텃밭', park: '놀이터', market: '급식실' },
  };

  // 9·11·12차시: 가람도 — 시 셋, 군 셋. 도청에서 각 시청·군청이 곧은 방위(또는 대각선)에 있다
  const GARAM_REGIONS = [
    { name: '나래시', color: 'peach', cells: [[1, 1], [0, 0], [1, 0], [0, 1]], value: 32 },
    { name: '솔빛군', color: 'mint', cells: [[2, 0], [3, 0], [2, 1], [3, 1]], value: 4 },
    { name: '한별시', color: 'lavender', cells: [[4, 0], [5, 0], [4, 1], [5, 1], [5, 2]], value: 18 },
    { name: '들꽃군', color: 'buttercup', cells: [[1, 3], [0, 2], [1, 2], [0, 3]], value: 6 },
    { name: '가람시', color: 'sky', cells: [[3, 3], [2, 2], [3, 2], [4, 2], [2, 3], [4, 3]], value: 45 },
    { name: '은빛군', color: 'rose', cells: [[0, 4], [1, 4], [2, 4], [3, 4], [4, 4], [5, 3], [5, 4]], value: 9 },
  ];
  const GARAM = {
    grid: [6, 5], title: '가람도', regions: GARAM_REGIONS,
    places: [
      { name: '도청', icon: 'capital', at: [3, 2] }, { name: '나래시청', icon: 'office', at: [1, 0] }, { name: '솔빛군청', icon: 'office', at: [3, 0] },
      { name: '한별시청', icon: 'office', at: [5, 0] }, { name: '들꽃군청', icon: 'office', at: [1, 2] }, { name: '은빛군청', icon: 'office', at: [5, 4] },
    ],
    meanings: { capital: '도청', office: '시청·군청' },
  };
  // 11차시: 인구 단계 구분 지도(인구 = 만 명, 지어낸 값)
  const GARAM_POP = { grid: [6, 5], title: '가람도 지역별 인구(만 명)', regions: GARAM_REGIONS, choropleth: true, unit: '만 명', legend: false };
  // 10차시: 솔빛군의 읍·면 — 군청은 솔빛읍에 있다
  const SOLBIT = {
    grid: [6, 4], title: '솔빛군',
    regions: [
      { name: '샘골면', color: 'peach', cells: [[0, 0], [1, 0], [0, 1]] },
      { name: '봉우리면', color: 'mint', cells: [[2, 0], [3, 0], [4, 0], [5, 0]] },
      { name: '솔빛읍', color: 'sky', cells: [[1, 1], [2, 1], [3, 1], [2, 2]] },
      { name: '강가면', color: 'lavender', cells: [[4, 1], [5, 1], [3, 2], [4, 2], [5, 2]] },
      { name: '들녘면', color: 'buttercup', cells: [[0, 2], [1, 2], [0, 3], [1, 3], [2, 3]] },
      { name: '달내면', color: 'rose', cells: [[3, 3], [4, 3], [5, 3]] },
    ],
    places: [{ name: '군청', icon: 'office', at: [2, 2] }],
    meanings: { office: '군청' },
  };
  // 11·12차시 그래프 자료(지어낸 값)
  const POP_DATA = [['나래시', 32], ['솔빛군', 4], ['한별시', 18], ['들꽃군', 6], ['가람시', 45], ['은빛군', 9]];
  const AREA_DATA = [['나래시', 4], ['솔빛군', 4], ['한별시', 5], ['들꽃군', 4], ['가람시', 6], ['은빛군', 7]];
  const DEUL_TEMP = [['1월', 3], ['3월', 7], ['5월', 18], ['7월', 26], ['9월', 22], ['11월', 9]];
  const HANBYEOL_TEMP = [['1월', 1], ['3월', 6], ['5월', 16], ['7월', 24], ['9월', 19], ['11월', 7]];

  // 13차시: 산들마을 — 북서쪽 높은봉에서 남동쪽 바다로 갈수록 낮아지고, 강이 그 비탈을 따라 바다로 흐른다
  const SANDEUL = {
    grid: [7, 5], title: '산들마을', mode: 'terrain',
    heights: [
      [4, 3, 2, 1, 1, 0, -1],
      [3, 3, 1, 1, 0, 0, -1],
      [2, 2, 1, 0, 0, 0, -1],
      [1, 1, 0, 0, 0, -1, -1],
      [1, 0, 0, 0, -1, -1, -1],
    ],
    rivers: [[[3, 0], [3, 1], [3, 2], [4, 2], [4, 3]]],
    places: [
      { name: '높은봉', icon: 'mountain', at: [0, 0] }, { name: '숲', icon: 'forest', at: [1, 1] }, { name: '과수원', icon: 'orchard', at: [2, 1] },
      { name: '논', icon: 'field', at: [3, 3] }, { name: '마을', icon: 'house', at: [2, 3] }, { name: '항구', icon: 'port', at: [5, 2] },
      { name: '해수욕장', icon: 'beach', at: [3, 4] },
    ],
  };
  // 15차시: 누리시 — 단원 정리용 새 지도(한 칸 200m)
  const NURI = {
    grid: [7, 5], title: '누리시', scale: { cell: 200, unit: 'm' },
    places: [
      { name: '시청', icon: 'office', at: [3, 2] }, { name: '기차역', icon: 'station', at: [0, 2] }, { name: '박물관', icon: 'museum', at: [3, 0] },
      { name: '시장', icon: 'market', at: [6, 2] }, { name: '공원', icon: 'park', at: [1, 4] }, { name: '병원', icon: 'hospital', at: [5, 4] },
      { name: '도서관', icon: 'library', at: [1, 0] },
    ],
    rivers: [[[0, 3], [6, 3]]],
    roads: [[[0, 2], [6, 2]], [[3, 0], [3, 4]]],
  };

  PaperLessons.registerUnit({
    id: 'g4-soc-1-01', schema: 'edu-unit.v1', catalogUnit: 'g4-사회-1학기-1',
    grade: 4, subject: '사회', unitTitle: '1. 지도로 만나는 우리 지역',
    flow: '앞 여덟 차시는 지도를 읽는 약속을 쌓습니다: 그림과 지도를 견주며 방위표·기호·범례·축척을 처음 만나고(1), 방위와 범례를 익힌 뒤(2), 축척으로 실제 거리를 구해 줄인 정도가 다른 두 지도를 견주고(3), 범례로 기호를 읽고(4), 영상지도와 일반 지도를 견줍니다(5). 6~8차시에는 그 약속으로 직접 길을 안내하고, 친구의 안내 글을 따라가 고치며, 걸음 수와 돌아간 방위표까지 써서 학교 안내문을 만듭니다. 9~10차시는 지어낸 가람도 지도에서 우리 시·군과 읍·면의 자리와 이웃 지역을 방위로 말하고, 11~13차시는 인구·넓이·기온 자료와 땅의 높낮이를 지도·그래프로 읽어 지역의 특징을 문장으로 옮깁니다. 14차시에 누리집·통계에서 자료를 찾아 출처를 적는 법을 익히고, 15차시에 다른 지역 친구에게 보낼 우리 지역 안내 카드로 단원을 묶어 스스로 점검합니다.',
    refs: { 2: 'g4-social-map' },
    lessons: [
      // ───────────────────────── 1차시 ─────────────────────────
      L(1, {
        title: '그림과 지도를 견주며 지도의 약속 찾기',
        objective: '지도에서 방위표·기호와 범례·축척을 찾아 각각이 무엇을 알려 주는지 말할 수 있다.',
        standards: S1,
        illustration: {
          prompt: ILL('a side view of a tiny village with houses, trees and hills, and a child beside it holding a folded paper map of the same village'),
          scene: { viewBox: [480, 270], layers: [
            { motif: 'cloud', x: 100, y: 52 }, { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'hills', y: 204 },
            { motif: 'house', x: 150, y: 220 }, { motif: 'house', x: 330, y: 222, color: 'sky', s: 0.85 }, { motif: 'tree', x: 250, y: 214 },
            { motif: 'bird', x: 220, y: 84 },
            { motif: 'text', x: 240, y: 140, text: '옆에서 본 햇살마을 — 지도와 무엇이 다를까요?', size: 18 },
          ] },
        },
        stages: [
          {
            id: 'intro', title: '도입', minutes: 6,
            teacher: '도입 그림(옆에서 본 햇살마을)과 시연 지도(위에서 내려다본 햇살마을)를 번갈아 보여 주며 묻는다. "학교에서 병원까지 얼마나 먼지 알 수 있는 것은 어느 쪽일까요?" 그림은 건물 모양이 보이지만 자리와 거리를 재기 어렵다는 반응을 기다린다. 시연 단추로 학교와 병원에 차례로 핀이 꽂히는 모습을 보여 준 뒤 "지도는 땅을 위에서 내려다보고 줄여서 약속한 기호로 그린 그림"이라고 정리한다.',
            student: '그림과 지도를 견주어 보고, 지도에서만 알 수 있는 것을 하나씩 말해 봅시다.',
            demo: { tool: 'map', options: HAETSAL, sequence: [{ place: '학교' }, { place: '병원' }] },
          },
          {
            id: 'main', title: '전개', minutes: 25,
            activities: [
              {
                id: 'a1', title: '활동 1. 햇살마을 지도에서 장소 찾기', minutes: 12, tool: 'map', options: HAETSAL,
                task: '핀을 끌거나 지도의 칸을 눌러 꽂아요. 이름이 없는 지도에서는 오른쪽 범례에서 기호 모양을 먼저 찾아요.',
                teacher: '"범례는 지도의 약속표예요. 기호를 모르면 어디를 볼까요?" 이름이 지워진 2번에서 기호 모양만 보고 짐작하는 학생에게 범례를 손가락으로 짚게 한다. 4번에서는 지도에 방위표가 없을 때 보통 위쪽을 북쪽으로 본다는 것을 짚는다. "지도의 위쪽이 내가 바라보는 앞쪽"이라는 생각이 나오면 교실에서 몸을 돌려도 북쪽은 그대로라는 것을 보여 준다.',
                levels: { easy: { names: true, readout: true }, base: { names: true }, challenge: { names: false } },
                items: [
                  { prompt: '햇살마을 지도에서 도서관을 찾아 핀을 꽂아 보세요.', target: { place: '도서관' }, difficulty: 0.05 },
                  { prompt: '이 지도에는 이름이 없어요. 범례에서 기차역 기호를 찾은 뒤, 지도에서 기차역에 핀을 꽂아 보세요.', toolOptions: { names: false }, target: { place: '기차역' }, difficulty: 0.15,
                    conclude: '이름이 없어도 범례로 기호의 뜻을 알면 장소를 찾을 수 있어요.' },
                  { prompt: '마을을 가로질러 흐르는 강이 지나는 칸 하나에 핀을 꽂아 보세요.', target: { river: true }, difficulty: 0.1 },
                  { prompt: '학교에서 북쪽으로 두 칸 간 곳에 핀을 꽂아 보세요.', state: { pin: [2, 2] }, target: { from: '학교', dir: '북', steps: 2 }, difficulty: 0.2,
                    predict: { q: '방위표가 따로 없으면 북쪽은 어디일까요?', options: ['지도의 위쪽', '내가 보는 앞쪽', '지도의 아래쪽'], answer: 0 },
                    conclude: '북쪽 화살표가 위를 가리키는 지도에서는 위쪽이 북쪽이에요. 내가 몸을 돌려도 지도의 북쪽은 바뀌지 않아요.' },
                ],
              },
              {
                id: 'a2', title: '활동 2. 무엇을 보면 알 수 있을까?', minutes: 13, tool: 'map', options: W(HAETSAL, { readOnly: true }),
                task: '지도를 보고 질문에 답하려면 지도의 어느 약속을 봐야 하는지 아래 보기에서 골라요.',
                teacher: '"방향을 알려 주는 것, 기호의 뜻을 알려 주는 것, 얼마나 줄였는지 알려 주는 것은 각각 무엇일까요?" 칠판에 방위표·범례·축척 세 낱말을 쓰고, 학생이 고를 때마다 지도 오른쪽 띠에서 그 부분을 가리키게 한다. 4번은 북쪽 화살표가 오른쪽을 가리키는 지도다. "위쪽은 언제나 북쪽"이라고 답한 학생에게 화살표 쪽으로 몸을 돌려 서게 하고 왼팔이 가리키는 쪽을 묻는다.',
                levels: { easy: { names: true }, base: { names: true }, challenge: { names: false } },
                items: [
                  { prompt: '학교에서 병원까지 실제로 몇 m인지 알려면 지도에서 무엇을 봐야 할까요?', toolOptions: { scale: { cell: 100, unit: 'm' }, ask: { choices: ['방위표', '범례', '축척'], why: ['방위표는 방향을 알려 줘요. 거리는 다른 곳을 봐요.', '범례는 기호의 뜻을 알려 줘요.', null] } }, target: { pick: 2 }, difficulty: 0.1 },
                  { prompt: '지도에서 봉투 모양 기호가 무엇인지 알려면 어디를 봐야 할까요?', toolOptions: { ask: { choices: ['범례', '축척', '지도 제목'], why: [null, '축척은 줄인 정도를 알려 줘요.', '지도 제목은 무엇을 그린 지도인지 알려 줘요.'] } }, target: { pick: 0 }, difficulty: 0.08 },
                  { prompt: '시장이 학교의 어느 쪽에 있는지 말하려면 무엇이 필요할까요?', toolOptions: { ask: { choices: ['축척', '방위표', '범례'], why: ['축척으로는 거리를 알 수 있어요. 방향은요?', null, '범례로는 기호의 뜻을 알 수 있어요.'] } }, target: { pick: 1 }, difficulty: 0.1 },
                  { prompt: '이 지도는 북쪽 화살표가 오른쪽을 가리켜요. 이 지도의 위쪽은 어느 방위일까요?', toolOptions: { north: 90, ask: { choices: ['북쪽', '서쪽', '동쪽'], why: ['위쪽이 언제나 북쪽은 아니에요. 왼쪽 위 북쪽 화살표를 보세요.', null, '북쪽을 바라보고 섰을 때 동쪽은 오른팔 쪽이에요.'] } }, target: { pick: 1 }, difficulty: 0.3,
                    predict: { q: '북쪽 화살표가 오른쪽을 가리키면 위쪽은?', options: ['북쪽', '서쪽', '동쪽'], answer: 1 },
                    conclude: '북쪽을 보고 서면 왼쪽이 서쪽이에요. 화살표가 오른쪽이면 지도의 위쪽은 서쪽이 돼요.' },
                ],
              },
            ],
          },
          {
            id: 'wrapup', title: '정리', minutes: 9,
            teacher: '"오늘 찾은 지도의 약속 세 가지는 무엇이고, 각각 무엇을 알려 주나요?" 방위표-방향, 범례-기호의 뜻, 축척-줄인 정도를 짝지어 말하게 한다. 출구 1번을 기호 모양만 보고 짐작해 틀린 학생이 많으면 다음 시간 시작에 범례를 먼저 읽는 습관을 다시 짚는다.',
            exitTicket: [
              { type: 'tool', tool: 'map', options: W(HAETSAL, { names: false }), prompt: '이름 없는 햇살마을 지도에서 우체국을 찾아 핀을 꽂으세요.', target: { place: '우체국' }, difficulty: 0.15 },
              { type: 'choice', prompt: '땅을 실제보다 얼마나 줄여 그렸는지 알려 주는 것은 무엇인가요?', options: ['방위표', '축척', '기호'], answer: 1, difficulty: 0.1, explain: '축척은 실제 거리를 지도에 얼마나 줄여 나타냈는지 알려 줘요.' },
              { type: 'choice', prompt: '도입에서 본 옆모습 마을 그림과 견주어 지도가 좋은 점은 무엇인가요?', options: ['위에서 내려다봐서 장소의 자리와 거리를 알 수 있어요', '건물 색을 실제와 똑같이 알 수 있어요', '사람들의 얼굴을 볼 수 있어요'], answer: 0, difficulty: 0.1, explain: '지도는 위에서 내려다보고 줄여 그려서 자리·방향·거리를 알 수 있어요.' },
              { type: 'mood', prompt: '오늘 지도 공부는 어땠나요?' },
            ],
          },
        ],
        worksheet: {
          title: '지도의 약속 찾기',
          items: [
            { type: 'figure', prompt: '햇살마을 지도에서 북쪽 화살표, 범례, 축척을 찾아 ○ 하세요.', tool: 'map', options: W(HAETSAL, { scale: { cell: 100, unit: 'm' } }), figures: [{ caption: '햇살마을 지도' }], answer: '왼쪽 위 북쪽 화살표, 오른쪽 범례, 오른쪽 아래 축척(한 칸 100m)' },
            { type: 'table', prompt: '지도의 약속이 알려 주는 것을 쓰세요.', columns: ['지도의 약속', '알려 주는 것'], cells: [['방위표', ''], ['범례', ''], ['축척', '']], answer: '방위표: 방향(방위), 범례: 기호의 뜻, 축척: 실제보다 줄인 정도(실제 거리)' },
            { type: 'blank', prompt: '햇살마을 지도를 보고 빈칸에 알맞은 장소를 쓰세요.', text: '학교에서 북쪽으로 두 칸 가면 ___이 있고, 학교에서 동쪽 끝에는 ___이 있어요.', answer: '도서관, 병원' },
            { type: 'choice', prompt: '방위표가 없는 지도에서 북쪽은 보통 어디인가요?', options: ['지도의 위쪽', '지도의 아래쪽', '내가 바라보는 앞쪽'], answer: '지도의 위쪽' },
            { type: 'short', prompt: '도입에서 본 옆모습 마을 그림과 햇살마을 지도의 다른 점을 한 가지 쓰세요.', answer: '예: 그림은 옆에서 본 모습이라 건물 모양이 보이고, 지도는 위에서 내려다보고 기호로 그려 자리와 거리를 알 수 있어요.' },
          ],
          easy: {
            note: '방위표는 방향, 범례는 기호의 뜻, 축척은 줄인 정도를 알려 줘요.',
            items: [
              { type: 'figure', prompt: '햇살마을 지도에서 범례를 찾아 ○ 하세요.', tool: 'map', options: HAETSAL, figures: [{ caption: '햇살마을 지도' }], answer: '지도 오른쪽의 기호 목록' },
              { type: 'choice', prompt: '기호의 뜻을 모아 놓은 것에 ○ 하세요.', options: ['방위표', '범례', '축척'], answer: '범례' },
              { type: 'blank', prompt: '지도를 보고 빈칸을 채우세요.', text: '학교의 북쪽에는 ___이 있어요.', answer: '도서관' },
              { type: 'short', prompt: '지도에서 찾고 싶은 우리 동네 장소 하나를 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '장소 이름이 늘 보이고, 핀이 꽂힌 곳의 이름이 글자로 나와요.',
          base: '이름이 보이는 지도로 시작하고, 2번처럼 이름 없는 지도에서는 범례를 써요.',
          challenge: '지도에 장소 이름이 없어서 모든 장소를 범례의 기호로 찾아요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 지도의 위쪽을 "내가 바라보는 앞쪽"으로 여긴다 → 몸을 돌려도 지도 속 북쪽은 바뀌지 않음을 교실에서 보여 준다. ② 기호를 범례 없이 모양으로만 짐작한다 → 이름 없는 지도에서 범례부터 짚게 한다. ③ 방위표·범례·축척의 이름과 하는 일을 섞는다 → 칠판에 세 낱말과 "방향·뜻·거리"를 짝지어 남겨 둔다.',
      }),
      // ───────────────────────── 3차시 ─────────────────────────
      L(3, {
        title: '축척으로 거리 구하고 줄인 정도가 다른 지도 견주기',
        objective: '축척을 읽어 지도 위 거리를 실제 거리로 바꾸고, 줄인 정도가 다른 두 지도에 담긴 내용의 차이를 말할 수 있다.',
        standards: S1,
        illustration: {
          prompt: ILL('two paper maps of the same town side by side, one zoomed in on a school with a playground and one zoomed out showing the whole city with an airport and a harbor'),
          scene: { viewBox: [480, 270], layers: [
            { motif: 'cloud', x: 120, y: 50 }, { motif: 'sun', x: 400, y: 58, s: 0.8 }, { motif: 'hills', y: 206 },
            { motif: 'house', x: 110, y: 222 }, { motif: 'tree', x: 170, y: 216 }, { motif: 'mountain', x: 330, y: 214, s: 0.8 }, { motif: 'wave', x: 420, y: 230 },
            { motif: 'text', x: 240, y: 140, text: '한 칸은 실제로 얼마일까요?', size: 22 },
          ] },
        },
        stages: [
          {
            id: 'intro', title: '도입', minutes: 5,
            teacher: '"교실 바닥 타일 한 장이 지도에서 한 칸이라면, 운동장 끝까지는 몇 칸일까요?" 지도는 실제 땅을 똑같은 비율로 줄인 것이라 줄인 정도(축척)를 알면 실제 거리를 거꾸로 구할 수 있다고 말한다. 시연 단추로 학교에서 시장까지 칸을 따라가는 거리를 보여 준다. 칸을 셀 때 출발한 칸까지 세는 실수를 미리 짚는다.',
            student: '지도에서 한 칸이 실제로 100m라면, 세 칸은 몇 m일지 생각해 봅시다.',
            demo: { tool: 'map', options: W(NEAR, { mode: 'scale', showCells: true }), sequence: [{ from: '학교', to: '시장' }] },
          },
          {
            id: 'main', title: '전개', minutes: 28,
            activities: [
              {
                id: 'a1', title: '활동 1. 학교 둘레 지도에서 거리 구하기', minutes: 11, tool: 'map', options: W(NEAR, { mode: 'scale' }),
                task: '보라색 점선 길을 따라 건너간 칸 수를 세고, 축척의 한 칸 거리를 곱해 거리를 넣어요. +·− 단추나 방향키를 써요.',
                teacher: '"출발한 칸도 셀까요?" 건너간 칸만 센다는 것을 손가락으로 짚어 보인다. 칸 수만 넣고 거리로 바꾸지 않은 학생에게 "한 칸이 실제로는 몇 m였나요?"라고 묻는다. 기본 단계는 단추 한 번에 50m씩 늘어서, 칸 수를 그대로 누르면 거리가 맞지 않는다.',
                levels: { easy: { showCells: true }, base: { distStep: 50 }, challenge: { distStep: 50, names: false } },
                items: [
                  { prompt: '학교에서 병원까지 길을 따라간 거리는 몇 m인가요?', target: { from: '학교', to: '병원' }, difficulty: 0.15 },
                  { prompt: '아파트에서 공원까지 길을 따라간 거리는 몇 m인가요?', target: { from: '아파트', to: '공원' }, difficulty: 0.2, reveal: 'after-check',
                    conclude: '건너간 칸이 7칸이고 한 칸이 100m이니 700m예요.' },
                  { prompt: '도서관에서 시장까지 길을 따라간 거리는 몇 m인가요?', target: { from: '도서관', to: '시장' }, difficulty: 0.2,
                    predict: { q: '칸 수를 세면 몇 칸쯤일까요?', options: ['2칸', '4칸', '6칸'], answer: 1 } },
                ],
              },
              {
                id: 'a2', title: '활동 2. 시 전체 지도에서 거리 구하기', minutes: 9, tool: 'map', options: W(WIDE, { mode: 'scale' }),
                task: '이번 지도는 한 칸이 2km예요. 길을 따라 칸을 세고 2km씩 곱해 거리를 넣어요.',
                teacher: '"앞 지도는 한 칸이 100m였는데 이 지도는 2km예요. 같은 한 칸인데 왜 다를까요?" 많이 줄인 지도일수록 한 칸이 나타내는 실제 거리가 길다는 반응을 끌어낸다. 1km=1000m를 떠올리게 하고, 칸 수를 그대로 km로 쓰는 학생에게 축척 막대를 다시 읽게 한다.',
                levels: { easy: { showCells: true }, base: { distStep: 1 }, challenge: { distStep: 1, names: false } },
                items: [
                  { prompt: '기차역에서 시청까지 길을 따라간 거리는 몇 km인가요?', target: { from: '기차역', to: '시청' }, difficulty: 0.15 },
                  { prompt: '시청에서 항구까지 길을 따라간 거리는 몇 km인가요?', target: { from: '시청', to: '항구' }, difficulty: 0.25 },
                  { prompt: '학교에서 공항까지 길을 따라간 거리는 몇 km인가요?', target: { from: '학교', to: '공항' }, difficulty: 0.3, reveal: 'after-check',
                    conclude: '7칸 × 2km = 14km예요. 한 칸이 크게 줄어든 지도라 몇 칸만 가도 아주 멀어요.' },
                ],
              },
              {
                id: 'a3', title: '활동 3. 어느 지도를 쓸까?', minutes: 8, tool: 'map', options: W(NEAR, { readOnly: true }),
                task: '두 지도를 견주어 질문에 알맞은 답을 아래 보기에서 골라요.',
                teacher: '"놀이터를 찾을 때와 공항 가는 길을 볼 때, 같은 지도를 쓸까요?" 조금 줄인 지도는 좁은 곳을 자세히, 많이 줄인 지도는 넓은 곳을 간단히 보여 준다는 것을 학생 말로 정리하게 한다. 많이 줄인 지도에 작은 장소가 빠진 것을 "지도가 틀렸다"고 말하는 학생에게 그릴 자리가 모자라 줄였다는 것을 짚는다.',
                levels: { easy: { names: true }, base: { names: true }, challenge: { names: false } },
                items: [
                  { prompt: '학교 둘레 지도는 한 칸이 100m, 시 전체 지도는 한 칸이 2km예요. 실제 땅을 더 많이 줄인 지도는 무엇인가요?', toolOptions: { ask: { choices: ['학교 둘레 지도', '시 전체 지도', '둘이 같아요'], why: ['한 칸에 담긴 실제 거리가 더 긴 쪽이 더 많이 줄인 지도예요.', null, '한 칸이 나타내는 실제 거리가 달라요.'] } }, target: { pick: 1 }, difficulty: 0.25 },
                  { prompt: '시 전체 지도에는 학교 둘레의 아파트와 시장이 없어요. 왜 그럴까요?', toolOptions: W(WIDE, { readOnly: true, ask: { choices: ['많이 줄여서 작은 곳은 빼고 그려서', '아파트와 시장이 없어져서', '지도를 잘못 그려서'], why: [null, '실제로 없어진 것이 아니에요. 줄인 정도를 생각해요.', '틀린 지도가 아니에요. 많이 줄이면 그릴 자리가 모자라요.'] } }), target: { pick: 0 }, difficulty: 0.2 },
                  { prompt: '집에서 가장 가까운 공원을 찾으려고 해요. 어느 지도가 알맞을까요?', toolOptions: { ask: { choices: ['학교 둘레 지도(조금 줄인 지도)', '시 전체 지도(많이 줄인 지도)'], why: [null, '많이 줄인 지도에는 작은 공원이 잘 나오지 않아요.'] } }, target: { pick: 0 }, difficulty: 0.15 },
                  { prompt: '다른 도시에 사는 친구에게 우리 시의 공항과 항구 자리를 알려 주려고 해요. 어느 지도가 알맞을까요?', toolOptions: W(WIDE, { readOnly: true, ask: { choices: ['학교 둘레 지도', '시 전체 지도'], why: ['학교 둘레 지도에는 공항과 항구가 나오지 않아요.', null] } }), target: { pick: 1 }, difficulty: 0.15 },
                ],
              },
            ],
          },
          {
            id: 'wrapup', title: '정리', minutes: 7,
            teacher: '"한 칸이 500m인 지도에서 세 칸이면 몇 m일까요?" 손으로 세 번 더하는 몸짓을 하며 답하게 한다. 출구 2번에서 칸 수만 쓴 학생이 많으면 다음 차시 시작 때 축척 막대를 다시 읽는다.',
            exitTicket: [
              { type: 'tool', tool: 'map', options: W(NEAR, { mode: 'scale', distStep: 50 }), prompt: '학교 둘레 지도에서 학교부터 공원까지 길을 따라간 거리를 넣으세요.', target: { from: '학교', to: '공원' }, difficulty: 0.15 },
              { type: 'choice', prompt: '축척이 "한 칸 = 500m"인 지도에서 4칸 떨어진 두 곳의 실제 거리는?', options: ['4m', '500m', '2000m'], answer: 2, difficulty: 0.2, explain: '500m를 네 번 더하면 2000m(2km)예요.' },
              { type: 'choice', prompt: '우리 동네 놀이터와 문구점을 자세히 보려면 어떤 지도가 알맞을까요?', options: ['조금 줄인 지도', '많이 줄인 지도', '세계 지도'], answer: 0, difficulty: 0.1, explain: '조금 줄인 지도일수록 좁은 곳을 자세히 보여 줘요.' },
              { type: 'mood', prompt: '오늘 거리 구하기는 어땠나요?' },
            ],
          },
        ],
        worksheet: {
          title: '축척으로 거리 구하기',
          items: [
            { type: 'figure', prompt: '학교 둘레 지도를 보고 표의 거리를 구하세요.', tool: 'map', options: W(NEAR, { mode: 'scale' }), figures: [{ caption: '학교 둘레 지도 (한 칸 100m)' }], answer: '학교→병원 600m, 학교→시장 400m' },
            { type: 'table', prompt: '길을 따라 건너간 칸 수와 실제 거리를 쓰세요.', columns: ['출발 → 도착', '칸 수', '실제 거리'], cells: [['학교 → 병원', '', ''], ['학교 → 시장', '', ''], ['아파트 → 도서관', '', '']], answer: '6칸 600m, 4칸 400m, 2칸 200m' },
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '한 칸이 2km인 지도에서 5칸은 ___km예요. 한 칸이 100m인 지도에서 5칸은 ___m예요.', answer: '10, 500' },
            { type: 'choice', prompt: '더 많이 줄인 지도에 대한 설명으로 알맞은 것에 ○ 하세요.', options: ['넓은 곳을 간단히 보여 줘요', '좁은 곳을 자세히 보여 줘요', '작은 가게까지 모두 나와요'], answer: '넓은 곳을 간단히 보여 줘요' },
            { type: 'short', prompt: '우리 집에서 학교까지 거리를 알려면 어떤 지도를 쓰면 좋을지, 그 까닭과 함께 쓰세요.' },
          ],
          easy: {
            note: '출발한 칸은 세지 않아요. 건너간 칸 수 × 한 칸의 거리 = 실제 거리.',
            items: [
              { type: 'figure', prompt: '길 위 칸 번호를 보고 학교에서 시장까지 몇 칸인지 세세요.', tool: 'map', options: W(NEAR, { mode: 'scale', showCells: true, from: '학교', to: '시장' }), figures: [{ caption: '학교 둘레 지도 (한 칸 100m)' }], answer: '4칸, 400m' },
              { type: 'blank', prompt: '빈칸을 채우세요.', text: '한 칸이 100m이면 3칸은 ___m예요.', answer: '300' },
              { type: 'choice', prompt: '동네 놀이터를 자세히 보려면 어느 지도가 좋을까요?', options: ['조금 줄인 지도', '많이 줄인 지도'], answer: '조금 줄인 지도' },
              { type: 'short', prompt: '집에서 학교까지 몇 분쯤 걸리는지 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '길 위 칸에 1·2·3 번호가 붙어 칸을 세기 쉽고, 단추 한 번에 한 칸 거리만큼 늘어나요.',
          base: '단추 한 번에 50m(또는 1km)씩 늘어서 칸 수와 축척을 곱해 거리를 넣어야 해요.',
          challenge: '지도에 장소 이름이 없어 범례로 출발·도착을 찾고, 곱셈으로 거리를 구해요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 출발한 칸까지 세어 한 칸이 많아진다 → 건너간 칸만 센다. ② 칸 수만 쓰고 축척을 곱하지 않는다 → "한 칸은 실제로 얼마?"를 묻는다. ③ km와 m를 섞는다(2km를 2m로) → 축척 막대의 단위를 소리 내어 읽게 한다. ④ 많이 줄인 지도에 작은 장소가 빠진 것을 잘못 그린 지도로 여긴다 → 줄인 정도에 따라 담는 내용이 다르다.',
      }),
      // ───────────────────────── 4차시 ─────────────────────────
      L(4, {
        title: '범례로 기호의 뜻을 밝히며 물빛마을 지도 읽기',
        objective: '지도의 기호를 범례와 짝지어 뜻을 밝히고, 그 뜻을 이용해 지도에서 장소를 찾을 수 있다.',
        standards: S1,
        illustration: {
          prompt: ILL('a quiet countryside village map with rice paddies, an apple orchard, a small factory, a stone pagoda and a bridge over a river, with a legend card pinned at the side'),
          scene: { viewBox: [480, 270], layers: [
            { motif: 'cloud', x: 110, y: 50 }, { motif: 'sun', x: 400, y: 56, s: 0.8 }, { motif: 'mountain', x: 90, y: 206, s: 0.8 }, { motif: 'hills', y: 206 },
            { motif: 'tree', x: 200, y: 214 }, { motif: 'house', x: 300, y: 222, color: 'buttercup' }, { motif: 'flower', x: 380, y: 224 },
            { motif: 'text', x: 240, y: 140, text: '이 기호는 무슨 뜻일까요?', size: 22 },
          ] },
        },
        stages: [
          {
            id: 'intro', title: '도입', minutes: 5,
            teacher: '십자 모양 기호 하나만 칠판에 그리고 묻는다. "이 기호는 무엇일까요?" 병원, 약국, 보건소 같은 여러 답을 기다린 뒤 "그럼 누가 정답을 정할까요?"라고 되묻는다. 지도마다 범례에 약속이 적혀 있고, 그 약속을 먼저 읽어야 한다는 것을 짚는다. 시연 단추로 이름 없는 물빛마을 지도에서 범례를 보고 과수원과 공장을 찾는 모습을 보여 준다.',
            student: '기호의 뜻은 누가 정할까요? 범례를 먼저 읽는 까닭을 생각해 봅시다.',
            demo: { tool: 'map', options: W(MULBIT, { names: false }), sequence: [{ place: '과수원' }, { place: '공장' }] },
          },
          {
            id: 'main', title: '전개', minutes: 27,
            activities: [
              {
                id: 'a1', title: '활동 1. 범례로 기호를 세어 물빛마을의 모습 읽기', minutes: 8, tool: 'map', options: MULBIT,
                task: '지도에 이름이 없어요. 범례에서 기호의 뜻을 먼저 읽고, 지도에서 같은 기호를 찾아 세어 마을이 어떤 곳인지 알아봐요.',
                teacher: '"범례에서 먼저 찾고, 그다음 지도에서 찾아요." 순서를 소리 내어 말하게 한다. 1번은 공장 하나를 찾는 몸풀기다. 2번에서 "논 기호가 몇 개고, 어디에 모여 있나요?"라고 묻고, 손가락으로 하나씩 짚으며 세게 한다. 4번에서 "기호를 세어 보니 이 마을 사람들은 무슨 일을 많이 할까요?"라고 물어 논·과수원이 많으면 농사를 많이 짓는 마을이라는 반응을 기다린다. 공장이 하나 있다고 "공장 마을"이라고 답하면 공장 기호와 논 기호의 수를 견주게 한다.',
                levels: { easy: { names: true, readout: true }, base: { names: false }, challenge: { names: false } },
                items: [
                  { prompt: '범례에서 공장 기호를 찾고, 지도의 공장에 핀을 꽂아 보세요.', target: { place: '공장' }, difficulty: 0.1 },
                  { prompt: '범례에서 논 기호를 찾아 지도에서 모두 세어 보세요. 논이 가장 많이 모여 있는 곳은 학교의 어느 쪽인가요?', toolOptions: { readOnly: true, ask: { choices: ['북동쪽', '남서쪽', '동쪽'], why: ['그쪽에는 둥근 열매 모양 기호가 있어요. 범례에서 그 기호의 뜻을 보세요.', null, '동쪽에는 버스 터미널이 있어요. 논 기호를 다시 찾아요.'] } }, target: { pick: 1 }, difficulty: 0.2,
                    levels: { challenge: { prompt: '범례에서 논 기호를 찾아 지도에서 모두 세어 보세요. 논 기호는 몇 개인가요?', toolOptions: { readOnly: true, ask: { choices: ['1개', '3개', '4개'], why: ['하나만 찾았어요. 강 남쪽을 끝까지 살펴보세요.', '한 곳을 빠뜨렸어요. 강 북쪽 서쪽 끝도 살펴보세요.', null] } }, target: { pick: 2 } } } },
                  { prompt: '범례에서 과수원 기호를 찾아 보세요. 과수원은 학교의 어느 쪽에 모여 있나요?', toolOptions: { readOnly: true, ask: { choices: ['북동쪽', '남서쪽', '남동쪽'], why: [null, '그쪽의 기호는 범례에서 무엇이었나요? 둥근 열매 모양을 다시 찾아요.', '그쪽에는 공장이 있어요.'] } }, target: { pick: 0 }, difficulty: 0.2 },
                  { prompt: '기호를 세어 보니 물빛마을은 어떤 곳일까요?', toolOptions: { readOnly: true, ask: { choices: ['논과 과수원이 많아 농사를 많이 짓는 마을', '공장이 많아 물건을 많이 만드는 마을', '바다가 가까워 고기잡이를 많이 하는 마을'], why: [null, '공장 기호는 몇 개였나요? 논 기호의 수와 견주어 보세요.', '범례에 바다나 항구 기호가 있나요?'] } }, target: { pick: 0 }, difficulty: 0.25,
                    predict: { q: '기호의 수를 세면 마을에 대해 무엇을 알 수 있을까요?', options: ['마을 사람들이 많이 하는 일', '마을 사람들의 이름'], answer: 0 },
                    conclude: '범례로 기호의 뜻을 읽고 그 수를 세면, 그 마을이 어떤 곳인지 말할 수 있어요.' },
                ],
              },
              {
                id: 'a2', title: '활동 2. 지도를 보고 범례 완성하기', minutes: 6, tool: 'map', options: W(MULBIT, { mode: 'legend', names: true }),
                task: '이번에는 지도에 이름이 있고 범례가 비어 있어요. 지도에서 기호 옆 이름을 읽고, 범례 빈칸을 눌러 알맞은 뜻을 골라요.',
                teacher: '"범례를 만드는 사람이 되어 볼까요?" 지도에서 같은 기호를 찾아 옆 이름을 읽으면 범례를 채울 수 있다는 것을 보여 준다. 석탑 기호에는 이름 대신 "문화유산"이라는 묶음 이름을 쓴다는 것을 짚는다(석탑은 문화유산 가운데 하나). 도전 단계는 헷갈리는 뜻 카드가 더 섞여 나온다.',
                levels: { easy: { names: true }, base: { names: true }, challenge: { names: true, extra: ['시장', '경찰서'] } },
                items: [
                  { prompt: '논, 과수원, 공장, 절, 다리 기호의 뜻을 범례 빈칸에 알맞게 골라 넣어 보세요.', toolOptions: { legendIcons: ['field', 'orchard', 'factory', 'temple', 'bridge'] }, target: { legend: { field: '논', orchard: '과수원', factory: '공장', temple: '절', bridge: '다리' } }, difficulty: 0.15,
                    levels: { easy: { toolOptions: { legendIcons: ['field', 'orchard', 'factory'] }, prompt: '논, 과수원, 공장 기호의 뜻을 범례 빈칸에 알맞게 골라 넣어 보세요.', target: { legend: { field: '논', orchard: '과수원', factory: '공장' } } } } },
                  { prompt: '학교, 우체국, 버스 터미널, 석탑 기호의 뜻을 범례에 넣어 보세요. 석탑은 어떤 묶음에 들어갈까요?', toolOptions: { legendIcons: ['school', 'post', 'bus', 'heritage'] }, target: { legend: { school: '학교', post: '우체국', bus: '버스 터미널', heritage: '문화유산' } }, difficulty: 0.2,
                    conclude: '석탑처럼 옛날부터 내려온 소중한 것은 범례에서 "문화유산" 기호로 묶어 나타내요.' },
                  { prompt: '이번에는 이름이 없는 지도예요. 방금 채운 범례를 보고 문화유산 기호에 핀을 꽂아 보세요.', toolOptions: { mode: 'pin', names: false }, target: { place: '마을 석탑' }, difficulty: 0.15 },
                ],
              },
              {
                id: 'a3', title: '활동 3. 같은 모양, 다른 약속', minutes: 13, tool: 'map', options: W(BOMNARU, { names: false }),
                task: '봄나루 마을 지도는 범례의 약속이 앞 지도와 달라요. 범례를 꼭 다시 읽고 답해요.',
                teacher: '"3차시 시 전체 지도에서 두 겹 동그라미는 시청이었어요. 이 지도에서도 시청일까요?" 앞 지도의 약속을 그대로 가져와 시청이라고 고르는 학생이 많다. 그럴 때 교구의 피드백을 소리 내어 읽게 하고, 지도를 바꾸면 범례부터 다시 읽는다는 규칙을 칠판에 적는다. 3번은 봄나루 마을의 범례를 직접 만드는 문항이다. 보기에 시청·공원·병원처럼 다른 지도의 뜻이 섞여 있으니, 기호 모양이 아니라 이 지도의 이름을 읽고 고르게 한다. 5번에서 "햇살마을의 십자는 병원, 봄나루 마을의 십자는 보건소예요. 누가 정했을까요?"라고 물어 지도를 만든 사람이 범례로 약속을 정한다는 것을 정리한다.',
                levels: { easy: { names: false }, base: { names: false }, challenge: { names: false } },
                items: [
                  { prompt: '이 지도의 범례를 보세요. 두 겹 동그라미 기호는 무엇을 뜻하나요?', toolOptions: { readOnly: true, ask: { choices: ['시청', '마을 회관', '우체국'], why: ['다른 지도에서는 시청이었지만, 이 지도의 범례를 다시 읽어요.', null, '봉투 모양이 아니에요. 범례를 다시 보세요.'] } }, target: { pick: 1 }, difficulty: 0.2,
                    predict: { q: '앞 지도와 같은 모양이면 뜻도 같을까요?', options: ['같아요', '범례를 봐야 알아요'], answer: 1 },
                    conclude: '같은 모양이라도 지도마다 약속이 다를 수 있어요. 지도를 바꾸면 범례부터 읽어요.' },
                  { prompt: '나무 모양 기호는 이 지도에서 무엇을 뜻하나요?', toolOptions: { readOnly: true, ask: { choices: ['공원', '수목원', '숲'], why: ['다른 지도에서는 공원이었어요. 이 지도의 범례는요?', null, '숲 기호는 뾰족한 나무 두 그루예요. 범례를 보세요.'] } }, target: { pick: 1 }, difficulty: 0.2 },
                  { prompt: '지도의 이름을 읽고, 봄나루 마을의 약속대로 범례 빈칸을 채워 보세요. 다른 지도의 뜻에 속지 마세요.', toolOptions: { mode: 'legend', names: true, legendIcons: ['office', 'park', 'hospital', 'house'], extra: ['시청', '공원', '병원', '집'] }, target: { legend: { office: '마을 회관', park: '수목원', hospital: '보건소', house: '경로당' } }, difficulty: 0.25,
                    levels: { easy: { prompt: '지도의 이름을 읽고, 봄나루 마을의 약속대로 범례 빈칸을 채워 보세요.', toolOptions: { mode: 'legend', names: true, legendIcons: ['office', 'park'], extra: ['시청', '공원'] }, target: { legend: { office: '마을 회관', park: '수목원' } } } } },
                  { prompt: '범례를 보고 버스 정류장을 찾아 핀을 꽂아 보세요.', target: { place: '버스 정류장' }, difficulty: 0.15 },
                  { prompt: '십자 모양 기호가 햇살마을 지도에서는 병원, 봄나루 마을 지도에서는 보건소예요. 왜 뜻이 다를까요?', toolOptions: { readOnly: true, ask: { choices: ['지도를 만든 사람이 범례에 서로 다르게 약속해서', '한 지도가 기호를 잘못 그려서', '병원과 보건소는 같은 곳이라서'], why: [null, '두 지도 모두 범례에 약속을 적었어요. 잘못 그린 것이 아니에요.', '병원과 보건소는 하는 일이 달라요. 범례가 뜻을 정해요.'] } }, target: { pick: 0 }, difficulty: 0.25,
                    conclude: '기호의 뜻은 모양이 아니라 그 지도의 범례가 정해요. 새 지도를 보면 범례부터 읽어요.' },
                ],
              },
            ],
          },
          {
            id: 'wrapup', title: '정리', minutes: 8,
            teacher: '"새 지도를 받으면 가장 먼저 무엇을 볼까요?" 범례를 먼저 읽는다는 답을 기다린다. 출구 2번(같은 모양 다른 뜻)을 틀린 학생이 많으면 봄나루 마을 범례를 화면에 다시 띄워 함께 읽는다.',
            exitTicket: [
              { type: 'tool', tool: 'map', options: W(MULBIT, { names: false }), prompt: '이름 없는 물빛마을 지도에서 범례를 보고 다리에 핀을 꽂으세요.', target: { place: '다리' }, difficulty: 0.12 },
              { type: 'choice', prompt: '처음 보는 지도에서 기호의 뜻을 알려면 어떻게 해야 하나요?', options: ['모양을 보고 짐작해요', '그 지도의 범례를 읽어요', '전에 본 지도의 뜻을 써요'], answer: 1, difficulty: 0.1, explain: '같은 모양이라도 지도마다 뜻이 다를 수 있어서, 그 지도의 범례를 읽어야 해요.' },
              { type: 'choice', prompt: '논 기호가 지도에 많이 있는 곳은 어떤 곳일까요?', options: ['벼농사를 많이 짓는 곳', '공장이 많은 곳', '바다가 가까운 곳'], answer: 0, difficulty: 0.15, explain: '논은 벼를 기르는 땅이라, 논 기호가 많으면 벼농사를 많이 짓는 곳이에요.' },
              { type: 'mood', prompt: '오늘 범례 읽기는 어땠나요?' },
            ],
          },
        ],
        worksheet: {
          title: '범례로 기호 읽기',
          items: [
            { type: 'figure', prompt: '범례 빈칸에 기호의 뜻을 쓰세요.', tool: 'map', options: W(MULBIT, { mode: 'legend', names: true, legendIcons: ['field', 'orchard', 'factory', 'temple', 'bridge'] }), figures: [{ caption: '물빛마을 지도 (범례 채우기)' }], answer: '논, 과수원, 공장, 절, 다리' },
            { type: 'figure', prompt: '이름 없는 지도에서 학교와 우체국을 찾아 ○ 하고, 그 사이에 있는 시설을 쓰세요. 논 기호에는 모두 √ 하세요.', tool: 'map', options: W(MULBIT, { names: false }), figures: [{ caption: '물빛마을 지도 (이름 없음)' }], answer: '학교와 우체국 사이에 다리가 있다. 논 기호 4개(강 남쪽 3개, 강 북쪽 서쪽 끝 1개)' },
            { type: 'choice', prompt: '봄나루 마을 지도에서 두 겹 동그라미 기호의 뜻에 ○ 하세요.', options: ['시청', '마을 회관', '우체국'], answer: '마을 회관' },
            { type: 'table', prompt: '2번 지도에서 범례를 보고 기호를 세어 표를 채우세요.', columns: ['기호의 뜻', '개수', '모여 있는 곳(학교의 어느 쪽)'], cells: [['논', '', ''], ['과수원', '', ''], ['공장', '', '']], answer: '논 4개 남서쪽, 과수원 2개 북동쪽, 공장 1개 남동쪽' },
            { type: 'short', prompt: '위 표를 보고 물빛마을이 어떤 곳인지 두 문장으로 쓰세요.', answer: '예: 물빛마을에는 논과 과수원이 많아요. 그래서 농사를 많이 짓는 마을이에요.' },
          ],
          easy: {
            note: '범례 → 지도 순서로 봐요. 범례에서 모양을 먼저 찾고, 지도에서 같은 모양을 찾아요.',
            items: [
              { type: 'figure', prompt: '범례 빈칸에 기호의 뜻을 쓰세요.', tool: 'map', options: W(MULBIT, { mode: 'legend', names: true, legendIcons: ['field', 'orchard', 'factory'] }), figures: [{ caption: '물빛마을 지도 (범례 채우기)' }], answer: '논, 과수원, 공장' },
              { type: 'choice', prompt: '기호의 뜻을 알려면 어디를 봐야 할까요?', options: ['범례', '축척', '지도 제목'], answer: '범례' },
              { type: 'blank', prompt: '빈칸을 채우세요.', text: '같은 모양 기호라도 지도마다 뜻이 다를 수 있으니 ___를 먼저 읽어요.', answer: '범례' },
              { type: 'draw', prompt: '우리 학교를 나타낼 나만의 기호를 그려 보세요.' },
            ],
          },
        },
        differentiation: {
          easy: '활동 1에서 지도에 이름이 보이고 핀 자리 이름이 글자로 나와요. 활동 2와 활동 3의 범례 만들기는 기호를 몇 개만 채워요.',
          base: '이름 없는 지도에서 범례만 보고 기호를 찾아 세고, 같은 모양 다른 뜻을 견주어요.',
          challenge: '활동 1에서 논 기호의 수를 정확히 세어야 하고, 활동 2에 헷갈리는 뜻(시장·경찰서)이 더 섞여요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 범례를 보지 않고 기호 모양만 보고 뜻을 짐작한다(십자 = 병원이라고만 생각) → 지도를 바꾸면 범례부터 읽게 한다. ② 앞 지도의 약속을 새 지도에 그대로 쓴다 → 봄나루 마을처럼 같은 모양 다른 뜻을 직접 겪게 한다. ③ 석탑·성터를 문화유산 묶음과 잇지 못한다 → 범례는 비슷한 것을 한 기호로 묶기도 한다고 알려 준다.',
      }),
      // ───────────────────────── 5차시 ─────────────────────────
      L(5, {
        title: '영상지도와 일반 지도에서 같은 곳 찾아 견주기',
        objective: '영상지도와 일반 지도에서 같은 곳을 찾아 보고, 두 지도가 각각 더 잘 보여 주는 것을 말할 수 있다.',
        standards: S1,
        illustration: {
          prompt: ILL('a tablet screen showing an aerial photo of a seaside village with green forest, yellow rice fields and a sandy beach, next to a paper map of the same village drawn with simple symbols'),
          scene: { viewBox: [480, 270], layers: [
            { motif: 'cloud', x: 120, y: 48 }, { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'hills', y: 206 },
            { motif: 'tree', x: 90, y: 214 }, { motif: 'house', x: 260, y: 222, color: 'peach' }, { motif: 'wave', x: 400, y: 232 },
            { motif: 'text', x: 240, y: 140, text: '하늘 사진과 지도, 무엇이 다를까요?', size: 22 },
          ] },
        },
        stages: [
          {
            id: 'intro', title: '도입', minutes: 5,
            teacher: '디지털 지도의 위성(영상) 보기와 일반 지도 보기를 번갈아 띄우며 묻는다. "같은 곳인데 무엇이 다르게 보이나요?" 영상지도는 실제 색과 모습이, 일반 지도는 기호와 이름이 보인다는 반응을 기다린다. 시연 단추로 영상지도처럼 색만 있는 바람골 지도에서 숲과 바다를 찾는 모습을 보여 준다.',
            student: '하늘에서 찍은 사진 같은 지도와 기호로 그린 지도를 견주어 봅시다.',
            demo: { tool: 'map', options: BARAM_PHOTO, sequence: [{ region: '숲' }, { sea: true }] },
          },
          {
            id: 'main', title: '전개', minutes: 27,
            activities: [
              {
                id: 'a1', title: '활동 1. 영상지도에서 땅의 모습 찾기', minutes: 9, tool: 'map', options: BARAM_PHOTO,
                task: '영상지도는 땅을 하늘에서 찍은 실제 색으로 보여 줘요. 문제에 나온 색과 모습을 찾아 핀을 꽂아요.',
                teacher: '"초록이 짙게 모인 곳은 무엇일까요? 노랗게 네모난 칸이 모인 곳은요?" 색이 같은 곳을 한 덩어리로 묶어 보게 한다. 영상지도에는 범례와 이름이 없어 색과 모양으로 짐작해야 한다는 점, 그래서 건물의 쓰임은 알기 어렵다는 점을 짚는다.',
                levels: { easy: { regionNames: true }, base: {}, challenge: {} },
                items: [
                  { prompt: '나무가 빽빽해 초록빛으로 보이는 숲 한 칸에 핀을 꽂아 보세요.', target: { region: '숲' }, difficulty: 0.08, hints: ['영상지도는 땅의 실제 색을 보여 줘요. 색이 같은 칸끼리 한 덩어리로 묶어 봐요.'] },
                  { prompt: '파란 물결이 넘실대는 바다 한 칸에 핀을 꽂아 보세요.', target: { sea: true }, difficulty: 0.05, hints: ['물결 무늬가 있는 파란 칸을 찾아요.'] },
                  { prompt: '지붕이 모여 살구색으로 보이는 마을 한 칸에 핀을 꽂아 보세요.', target: { region: '마을' }, difficulty: 0.12, hints: ['집 지붕이 모이면 하늘에서 어떤 색 덩어리로 보일지 생각해요.'] },
                  { prompt: '바다와 마을 사이, 모래가 펼쳐진 모래사장 한 칸에 핀을 꽂아 보세요.', target: { region: '모래사장' }, difficulty: 0.2, hints: ['바다와 맞닿은 땅 가운데 마을도 논밭도 아닌 칸을 찾아요.'],
                    levels: { challenge: { prompt: '강물이 흐르는 칸 하나에 핀을 꽂아 보세요. 바다와 헷갈리지 않게 가늘고 긴 물줄기를 찾아요.', target: { river: true } } } },
                ],
              },
              {
                id: 'a2', title: '활동 2. 일반 지도에서 같은 곳 찾기', minutes: 9, tool: 'map', options: W(BARAM_MAP, { names: false }),
                task: '같은 바람골을 기호로 그린 일반 지도예요. 영상지도에서는 잘 안 보이던 시설을 범례로 찾아 핀을 꽂아요.',
                teacher: '"영상지도에서는 다리가 보였나요? 마을 속 학교는요?" 작은 시설은 사진에서 찾기 어렵지만 일반 지도에서는 기호와 범례로 바로 찾을 수 있다는 것을 끌어낸다. 영상지도의 모래사장 자리와 일반 지도의 해수욕장 기호가 같은 곳임을 두 화면을 번갈아 보며 짚는다.',
                levels: { easy: { names: true }, base: { names: false }, challenge: { names: false } },
                items: [
                  { prompt: '영상지도의 모래사장에는 어떤 시설이 있을까요? 범례에서 해수욕장 기호를 찾아 핀을 꽂아 보세요.', target: { place: '해수욕장' }, difficulty: 0.12 },
                  { prompt: '영상지도에서는 강 위 다리가 너무 작았어요. 일반 지도에서 다리를 찾아 핀을 꽂아 보세요.', target: { place: '다리' }, difficulty: 0.12 },
                  { prompt: '영상지도의 마을 안에 있는 학교를 일반 지도에서 찾아 핀을 꽂아 보세요.', target: { place: '학교' }, difficulty: 0.1 },
                  { prompt: '바닷가 끝에서 밤에 불빛으로 배를 안내하는 시설을 범례에서 찾아 핀을 꽂아 보세요.', target: { place: '등대' }, difficulty: 0.2,
                    conclude: '일반 지도는 사진에서 잘 보이지 않는 시설도 기호로 또렷하게 보여 줘요.' },
                ],
              },
              {
                id: 'a3', title: '활동 3. 두 지도는 무엇이 다를까?', minutes: 9, tool: 'map', options: W(BARAM_MAP, { readOnly: true }),
                task: '두 지도를 견주어 보기에서 알맞은 답을 고르고, 마지막에는 짝과 진짜 디지털 지도로 우리 학교를 찾아봐요.',
                teacher: '"숲이 얼마나 넓은지 보려면 어느 지도? 우체국 자리를 보려면 어느 지도?" 쓰임에 따라 알맞은 지도가 다르다는 것을 정리한다. 마지막 짝 활동은 교사 화면(또는 크롬북)의 디지털 지도에서 우리 학교를 검색해 영상 보기와 일반 보기를 번갈아 보게 한다.',
                levels: { easy: { names: true }, base: { names: true }, challenge: { names: false } },
                items: [
                  { prompt: '영상지도로 더 잘 알 수 있는 것은 무엇인가요?', toolOptions: W(BARAM_PHOTO, { readOnly: true, ask: { choices: ['논밭과 숲의 실제 색과 넓이', '학교와 우체국의 이름', '등대를 뜻하는 기호'], why: [null, '영상지도에는 이름이 적혀 있지 않아요.', '영상지도에는 기호와 범례가 없어요.'] } }), target: { pick: 0 }, difficulty: 0.15 },
                  { prompt: '일반 지도로 더 잘 알 수 있는 것은 무엇인가요?', toolOptions: { ask: { choices: ['지붕의 실제 색깔', '학교·다리 같은 시설의 자리와 뜻', '바닷물의 실제 색'], why: ['실제 색은 영상지도가 더 잘 보여 줘요.', null, '실제 색은 영상지도가 더 잘 보여 줘요.'] } }, target: { pick: 1 }, difficulty: 0.15 },
                  { prompt: '종이 지도로는 할 수 없고 디지털 지도로만 할 수 있는 것은 무엇인가요?', toolOptions: { ask: { choices: ['손가락으로 넓혀 크게 보기', '방위표로 방위 읽기', '범례로 기호 뜻 알기'], why: [null, '종이 지도에도 방위표가 있어요.', '종이 지도에도 범례가 있어요.'] } }, target: { pick: 0 }, difficulty: 0.2 },
                  { prompt: '짝과 디지털 지도에서 우리 학교를 찾아, 영상 보기와 일반 보기에서 각각 더 잘 보이는 것을 하나씩 말한 뒤 "다 했어요"를 누르세요.', toolOptions: { readOnly: false }, free: true, talk: true, difficulty: 0 },
                ],
              },
            ],
          },
          {
            id: 'wrapup', title: '정리', minutes: 8,
            teacher: '"영상지도는 ○○을, 일반 지도는 ○○을 더 잘 보여 줘요." 빈칸을 채워 말하게 한다. 출구 2번에서 영상지도에도 이름과 기호가 있다고 답한 학생이 많으면 디지털 지도의 영상 보기 화면을 다시 띄워 함께 살펴본다.',
            exitTicket: [
              { type: 'tool', tool: 'map', options: BARAM_PHOTO, prompt: '영상지도에서 노랗게 펼쳐진 논밭 한 칸에 핀을 꽂으세요.', target: { region: '논밭' }, difficulty: 0.1 },
              { type: 'choice', prompt: '영상지도에 대한 설명으로 알맞은 것은 무엇인가요?', options: ['땅을 하늘에서 찍은 실제 모습을 보여 줘요', '모든 건물에 이름과 기호가 붙어 있어요', '방위와 거리를 알 수 없어요'], answer: 0, difficulty: 0.15, explain: '영상지도는 하늘에서 찍은 모습이라 실제 색과 모양이 보이지만, 이름과 기호는 따로 없어요.' },
              { type: 'choice', prompt: '우리 동네 우체국이 어디 있는지 빨리 찾으려면 어느 지도가 좋을까요?', options: ['영상지도', '일반 지도'], answer: 1, difficulty: 0.1, explain: '일반 지도는 우체국 기호와 이름으로 자리를 바로 보여 줘요.' },
              { type: 'mood', prompt: '오늘 두 지도 견주기는 어땠나요?' },
            ],
          },
        ],
        worksheet: {
          title: '영상지도와 일반 지도 견주기',
          items: [
            { type: 'figure', prompt: '두 지도에서 같은 곳을 찾아 같은 번호를 쓰세요. (① 숲 ② 해수욕장 ③ 다리)', tool: 'map', options: BARAM_MAP, figures: [{ options: W(BARAM_PHOTO, { places: [], roads: [] }), caption: '영상지도로 본 바람골' }, { caption: '일반 지도로 본 바람골' }], answer: '숲은 왼쪽 위, 해수욕장은 모래사장 자리, 다리는 강 가운데' },
            { type: 'table', prompt: '두 지도가 더 잘 보여 주는 것을 쓰세요.', columns: ['영상지도', '일반 지도'], rows: 2, answer: '영상지도: 실제 색·숲과 논밭의 넓이 / 일반 지도: 시설의 이름·기호·자리' },
            { type: 'choice', prompt: '영상지도에서 찾기 어려운 것에 ○ 하세요.', options: ['넓은 숲', '바다', '마을 속 우체국'], answer: '마을 속 우체국' },
            { type: 'short', prompt: '우리 학교를 디지털 지도에서 찾을 때 영상 보기와 일반 보기 가운데 무엇을 먼저 쓰고 싶은지, 까닭과 함께 쓰세요.' },
          ],
          easy: {
            note: '영상지도 = 하늘에서 찍은 실제 모습, 일반 지도 = 기호와 이름으로 그린 지도.',
            items: [
              { type: 'figure', prompt: '일반 지도에서 해수욕장과 다리를 찾아 ○ 하세요.', tool: 'map', options: BARAM_MAP, figures: [{ caption: '일반 지도로 본 바람골' }], answer: '해수욕장: 바닷가, 다리: 강 위' },
              { type: 'choice', prompt: '실제 색이 보이는 지도에 ○ 하세요.', options: ['영상지도', '일반 지도'], answer: '영상지도' },
              { type: 'choice', prompt: '시설의 이름이 보이는 지도에 ○ 하세요.', options: ['영상지도', '일반 지도'], answer: '일반 지도' },
              { type: 'draw', prompt: '하늘에서 내려다본 우리 학교 운동장의 모습을 그려 보세요.' },
            ],
          },
        },
        differentiation: {
          easy: '영상지도에 땅의 이름(숲·논밭·마을)이 보이고, 일반 지도에 시설 이름이 보여요.',
          base: '영상지도는 색으로만, 일반 지도는 범례로만 찾아요.',
          challenge: '활동 1 마지막 문항에서 바다와 헷갈리는 강물을 찾고, 활동 3은 이름 없는 지도로 답해요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 영상지도에도 이름과 기호가 다 있다고 여긴다(디지털 지도는 영상 위에 이름을 겹쳐 보여 주기도 함) → 겹친 글자를 끈 영상 보기와 견주어 보여 준다. ② 같은 곳을 두 지도에서 잇지 못한다 → 바다·강처럼 큰 것부터 맞춰 기준을 잡게 한다. ③ 바다와 강을 헷갈린다 → 강은 가늘고 길게, 바다는 넓게 펼쳐진다.',
      }),
      // ───────────────────────── 6차시 ─────────────────────────
      L(6, {
        title: '방위와 칸 수로 학교 안 길 안내하기',
        objective: '출발 장소에서 방위와 칸 수를 써서 목적지까지 가는 길을 안내하고, 안내를 따라 목적지를 찾을 수 있다.',
        standards: S1,
        illustration: {
          prompt: ILL('a school floor plan seen from above with classrooms, a library, a nurse office and a cafeteria, and a dotted path of footprints leading out to the playground'),
          scene: { viewBox: [480, 270], layers: [
            { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 110, y: 52 }, { motif: 'hills', y: 206 },
            { motif: 'house', x: 150, y: 222, color: 'buttercup' }, { motif: 'tree', x: 300, y: 214 }, { motif: 'flower', x: 360, y: 226 },
            { motif: 'text', x: 240, y: 140, text: '동쪽으로 세 칸, 남쪽으로 두 칸!', size: 22 },
          ] },
        },
        stages: [
          {
            id: 'intro', title: '도입', minutes: 5,
            teacher: '한 학생을 교실 앞에 세우고 "오른쪽으로 세 걸음 가요"라고 말한 뒤, 학생을 뒤로 돌려 같은 말을 다시 한다. "같은 말인데 왜 다른 곳에 갔을까요?" 오른쪽·왼쪽은 서 있는 방향에 따라 바뀌지만 동서남북은 바뀌지 않는다는 반응을 기다린다. 시연 단추로 학교 1층 지도에서 보건실에 있던 핀이 동쪽으로 세 칸 가 급식실에 닿는 모습을 보여 준다.',
            student: '"오른쪽으로 가요" 대신 무엇이라고 말하면 누구나 같은 곳에 닿을까요?',
            demo: { tool: 'map', options: SCHOOL, sequence: [{ place: '보건실' }, { from: '보건실', dir: '동', steps: 3 }] },
          },
          {
            id: 'main', title: '전개', minutes: 27,
            activities: [
              {
                id: 'a1', title: '활동 1. 한 방위로 몇 칸 가기', minutes: 8, tool: 'map', options: SCHOOL,
                task: '핀이 출발 장소에 있어요. 문제의 방위로 몇 칸 갔는지 세며 핀을 옮겨요. 방향키로 한 칸씩 옮겨도 돼요.',
                teacher: '"북쪽 화살표부터 찾아요. 북쪽을 보고 서면 오른팔이 동쪽이에요." 출발한 칸을 첫째 칸으로 세는 학생에게 한 칸 건너갈 때마다 하나씩 센다는 것을 손가락으로 보여 준다. 4번 남동쪽은 남쪽과 동쪽 사이로 비스듬히 간다는 것을 짚는다.',
                levels: { easy: { readout: true }, base: {}, challenge: { names: false } },
                items: [
                  { prompt: '보건실에서 동쪽으로 세 칸 간 곳에 핀을 꽂아 보세요.', state: { pin: [0, 3] }, target: { from: '보건실', dir: '동', steps: 3 }, difficulty: 0.08 },
                  { prompt: '교무실에서 남쪽으로 세 칸 간 곳에 핀을 꽂아 보세요.', state: { pin: [5, 0] }, target: { from: '교무실', dir: '남', steps: 3 }, difficulty: 0.1 },
                  { prompt: '도서실에서 서쪽으로 세 칸 간 곳에 핀을 꽂아 보세요.', state: { pin: [3, 0] }, target: { from: '도서실', dir: '서', steps: 3 }, difficulty: 0.12 },
                  { prompt: '4학년 1반에서 남동쪽으로 세 칸 간 곳에 핀을 꽂아 보세요.', state: { pin: [0, 0] }, target: { from: '4학년 1반', dir: '남동', steps: 3 }, difficulty: 0.2,
                    predict: { q: '남동쪽은 지도에서 어느 쪽일까요?', options: ['오른쪽 아래', '왼쪽 아래', '오른쪽 위'], answer: 0 },
                    conclude: '남동쪽은 남쪽과 동쪽 사이예요. 위쪽이 북쪽인 지도에서는 오른쪽 아래로 비스듬히 가요.' },
                ],
              },
              {
                id: 'a2', title: '활동 2. 두 번 꺾어 가는 길 따라가기', minutes: 10, tool: 'map', options: SCHOOL,
                task: '안내 글을 차례대로 따라 핀을 옮겨요. 먼저 말한 방위로 간 뒤, 그 자리에서 다음 방위로 가요.',
                teacher: '"첫 번째로 간 곳이 두 번째 출발 장소예요." 두 안내를 모두 처음 장소에서 따로 세는 학생이 있으면, 핀을 한 번 멈춰 놓고 다음 안내를 읽게 한다. 마지막 문항은 북쪽 화살표가 아래를 가리키는 지도다. 화면 위쪽으로 핀을 옮기는 학생에게 "북쪽 화살표는 어디를 가리키나요?"라고 묻는다.',
                levels: { easy: { readout: true }, base: {}, challenge: { names: false } },
                items: [
                  { prompt: '4학년 1반에서 동쪽으로 다섯 칸, 이어서 남쪽으로 세 칸 가면 닿는 곳에 핀을 꽂아 보세요.', state: { pin: [0, 0] }, target: { at: [5, 3] }, difficulty: 0.15 },
                  { prompt: '운동장에서 서쪽으로 두 칸, 이어서 북쪽으로 세 칸 가면 닿는 곳에 핀을 꽂아 보세요.', state: { pin: [5, 3] }, target: { at: [3, 0] }, difficulty: 0.2 },
                  { prompt: '보건실에서 북쪽으로 세 칸, 이어서 동쪽으로 다섯 칸 가면 닿는 곳에 핀을 꽂아 보세요.', state: { pin: [0, 3] }, target: { at: [5, 0] }, difficulty: 0.2, reveal: 'after-check', toolOptions: { readout: true } },
                  { prompt: '이 지도는 북쪽 화살표가 아래를 가리켜요. 도서실에서 북쪽으로 세 칸 간 곳에 핀을 꽂아 보세요.', toolOptions: { north: 180 }, state: { pin: [3, 0] }, target: { from: '도서실', dir: '북', steps: 3 }, difficulty: 0.35,
                    predict: { q: '이 지도에서 북쪽은 화면의 어느 쪽일까요?', options: ['위쪽', '아래쪽', '오른쪽'], answer: 1 },
                    conclude: '방위는 화면의 위아래가 아니라 북쪽 화살표를 따라요. 화살표가 아래면 아래쪽이 북쪽이에요.' },
                ],
              },
              {
                id: 'a3', title: '활동 3. 안내에 쓸 방위 고르기', minutes: 9, tool: 'map', options: W(SCHOOL, { mode: 'compass' }),
                task: '출발 장소에 서서 도착 장소를 바라본다고 생각하고, 아래 방위 단추에서 알맞은 방위를 골라요.',
                teacher: '"출발에서 도착을 봐요. 거꾸로 보면 반대 방위가 돼요." 보건실에서 본 도서실(북동)과 도서실에서 본 보건실(남서)을 칠판에 나란히 적어 반대 방위를 짚는다. 안내 글에는 꼭 "어디에서" 출발하는지를 넣게 한다.',
                levels: { easy: { readout: true }, base: {}, challenge: { names: false } },
                items: [
                  { prompt: '4학년 1반에서 보면 보건실은 어느 방위에 있나요?', target: { from: '4학년 1반', to: '보건실' }, difficulty: 0.08 },
                  { prompt: '보건실에서 보면 도서실은 어느 방위에 있나요?', target: { from: '보건실', to: '도서실' }, difficulty: 0.2,
                    conclude: '보건실에서 오른쪽 위로 비스듬히 있으니 북동쪽이에요. 거꾸로 도서실에서 보면 보건실은 남서쪽이에요.' },
                  { prompt: '운동장에서 보면 보건실은 어느 방위에 있나요?', target: { from: '운동장', to: '보건실' }, difficulty: 0.12 },
                  { prompt: '교무실에서 보면 운동장은 어느 방위에 있나요?', target: { from: '교무실', to: '운동장' }, difficulty: 0.12 },
                ],
              },
            ],
          },
          {
            id: 'wrapup', title: '정리', minutes: 8,
            teacher: '"길 안내에 꼭 들어가야 할 세 가지는 무엇일까요?" 출발 장소, 방위, 몇 칸(몇 걸음)이라는 답을 칠판에 적는다. 출구 1번에서 두 번째 안내를 처음 장소에서 센 학생이 많으면 다음 시간에 친구 안내 글 따라가기를 하며 다시 짚는다.',
            exitTicket: [
              { type: 'tool', tool: 'map', options: SCHOOL, state: { pin: [5, 0] }, prompt: '교무실에서 서쪽으로 두 칸, 이어서 남쪽으로 세 칸 가면 닿는 곳에 핀을 꽂으세요.', target: { at: [3, 3] }, difficulty: 0.2 },
              { type: 'tool', tool: 'map', options: W(SCHOOL, { mode: 'compass' }), prompt: '급식실에서 보면 4학년 1반은 어느 방위에 있는지 고르세요.', target: { from: '급식실', to: '4학년 1반' }, difficulty: 0.2 },
              { type: 'choice', prompt: '누구나 같은 곳에 닿을 수 있는 안내 글은 무엇인가요?', options: ['"교실에서 오른쪽으로 쭉 가요."', '"교실에서 남쪽으로 세 칸 가요."', '"교실에서 조금만 가요."'], answer: 1, difficulty: 0.1, explain: '출발 장소, 방위, 칸 수가 모두 들어 있어야 누구나 같은 곳에 닿아요.' },
              { type: 'mood', prompt: '오늘 길 안내는 어땠나요?' },
            ],
          },
        ],
        worksheet: {
          title: '방위로 길 안내하기',
          items: [
            { type: 'figure', prompt: '학교 1층 지도를 보고 표를 채우세요.', tool: 'map', options: SCHOOL, figures: [{ caption: '푸른초등학교 1층' }], answer: '아래 표 답 참고' },
            { type: 'table', prompt: '출발과 안내를 보고 닿는 곳을 쓰세요.', columns: ['출발', '안내', '닿는 곳'], cells: [['보건실', '동쪽으로 3칸', ''], ['교무실', '남쪽으로 3칸', ''], ['4학년 1반', '동쪽으로 3칸, 남쪽으로 3칸', '']], answer: '급식실, 운동장, 급식실' },
            { type: 'blank', prompt: '안내 글의 빈칸에 방위를 쓰세요.', text: '운동장에서 ___쪽으로 다섯 칸 가면 보건실이에요. 보건실에서 ___쪽으로 세 칸 가면 4학년 1반이에요.', answer: '서, 북' },
            { type: 'choice', prompt: '보건실에서 볼 때 도서실은 북동쪽이에요. 도서실에서 볼 때 보건실은 어느 쪽인가요?', options: ['북동', '남서', '남동', '북서'], answer: '남서' },
            { type: 'short', prompt: '우리 교실에서 보건실까지 가는 길을 방위와 걸음 수를 넣어 안내 글로 쓰세요.' },
          ],
          easy: {
            note: '북쪽을 보고 서면 오른팔이 동쪽, 왼팔이 서쪽, 등 뒤가 남쪽이에요.',
            items: [
              { type: 'figure', prompt: '학교 1층 지도를 보고 표를 채우세요.', tool: 'map', options: SCHOOL, figures: [{ caption: '푸른초등학교 1층' }], answer: '아래 표 답 참고' },
              { type: 'table', prompt: '출발과 안내를 보고 닿는 곳을 쓰세요.', columns: ['출발', '안내', '닿는 곳'], cells: [['보건실', '동쪽으로 3칸', ''], ['도서실', '서쪽으로 3칸', '']], answer: '급식실, 4학년 1반' },
              { type: 'choice', prompt: '"오른쪽으로 가요"보다 정확한 말에 ○ 하세요.', options: ['동쪽으로 가요', '저쪽으로 가요'], answer: '동쪽으로 가요' },
              { type: 'short', prompt: '우리 교실에서 화장실까지 가는 길을 방위를 넣어 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '핀이 있는 곳의 이름이 글자로 보여 한 칸씩 옮길 때마다 확인할 수 있어요.',
          base: '핀이 있는 곳은 확인한 뒤에만 알 수 있어요. 두 번 꺾는 길에서 중간 장소를 스스로 기억해요.',
          challenge: '지도에 장소 이름이 없어서 범례로 출발 장소를 찾은 뒤 안내를 따라가요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 오른쪽·왼쪽으로만 안내하고 방위를 쓰지 않는다 → 도입처럼 몸을 돌려 같은 말이 다른 곳에 닿는 것을 겪게 한다. ② 출발한 칸을 첫째 칸으로 센다 → 건너간 칸만 센다. ③ 두 번 꺾는 안내에서 두 번째 안내도 처음 장소에서 센다 → 첫 번째로 닿은 곳에 핀을 멈춰 두게 한다. ④ 북쪽 화살표가 돌아간 지도에서 화면 위쪽을 북쪽으로 읽는다.',
      }),
      // ───────────────────────── 7차시 ─────────────────────────
      L(7, {
        title: '친구의 길 안내 글을 따라가 보고 고치기',
        objective: '친구가 쓴 길 안내 글을 따라 목적지를 찾고, 틀린 방위나 빠진 정보를 찾아 안내 글을 고칠 수 있다.',
        standards: S1,
        illustration: {
          prompt: ILL('two children in a small neighborhood, one reading a handwritten direction note and the other pointing along a street toward a library, with a compass rose drawn on the note'),
          scene: { viewBox: [480, 270], layers: [
            { motif: 'cloud', x: 120, y: 50 }, { motif: 'sun', x: 410, y: 58, s: 0.8 }, { motif: 'hills', y: 206 },
            { motif: 'house', x: 110, y: 222 }, { motif: 'house', x: 210, y: 224, color: 'sky', s: 0.85 }, { motif: 'tree', x: 330, y: 214 }, { motif: 'star', x: 420, y: 120, color: 'buttercup' },
            { motif: 'text', x: 240, y: 140, text: '이 안내대로 가면 어디에 닿을까?', size: 22 },
          ] },
        },
        stages: [
          {
            id: 'intro', title: '도입', minutes: 5,
            teacher: '칠판에 "학교에서 쭉 가다가 오른쪽으로 가면 도서관이 있어"라는 안내 글을 적고 묻는다. "이 글만 보고 도서관을 찾을 수 있을까요? 무엇이 빠졌나요?" 방위와 칸 수가 없다는 반응을 기다린다. 시연 단추로 우리 집에서 북쪽으로 두 칸, 동쪽으로 세 칸 가면 학교에 닿는 모습을 보여 준다.',
            student: '친구가 쓴 안내 글대로 가면 정말 그곳에 닿는지 따라가 봅시다.',
            demo: { tool: 'map', options: BYEOLBIT, sequence: [{ place: '우리 집' }, { at: [0, 2] }, { at: [3, 2] }] },
          },
          {
            id: 'main', title: '전개', minutes: 27,
            activities: [
              {
                id: 'a1', title: '활동 1. 안내대로 가 보고 틀린 곳 찾기', minutes: 10, tool: 'map', options: BYEOLBIT,
                task: '친구의 안내 글대로 핀을 옮겨 정말 닿는 곳에 꽂아요. 친구가 말한 곳과 다르면, 안내 글에서 틀린 곳(방위·칸 수·출발 장소)을 아래 보기에서 골라요. 틀린 곳은 한 군데예요.',
                teacher: '"친구 말을 믿기 전에 먼저 따라가 봐요. 정말 그곳에 닿았나요?" 안내 글에서 출발 장소, 방위, 칸 수에 밑줄을 긋고 핀을 옮기게 한다. 친구가 말한 곳에 바로 핀을 꽂는 학생에게는 "안내대로 가면 어디에 닿았나요?"라고 되묻는다. 3번은 방위와 칸 수가 맞는데 출발 장소가 틀린 글이다. "방위와 칸 수를 그대로 두고, 출발 장소를 바꾸면 우체국에 닿는 곳이 있을까요?"라고 물어 학교를 찾게 한다. 4번은 두 번 꺾는 글에서 두 번째 방위만 틀렸다.',
                levels: { easy: { readout: true }, base: {}, challenge: { names: false } },
                items: [
                  { prompt: '민지의 안내: "우리 집에서 북쪽으로 두 칸, 이어서 동쪽으로 두 칸 가면 학교예요." 안내대로 가서 닿는 곳에 핀을 꽂고, 틀린 곳을 고르세요.', state: { pin: [0, 4] }, toolOptions: { ask: { choices: ['방위', '칸 수', '출발 장소'], why: ['민지는 북쪽으로 두 칸 갔어요. 그 뒤에 몇 칸 갔는지 다시 세어 보세요.', null, '우리 집에서 출발하는 것은 맞아요.'] } }, target: { at: [2, 2], pick: 1 }, difficulty: 0.15,
                    predict: { q: '친구가 쓴 안내 글은 늘 맞을까요?', options: ['따라가 봐야 알아요', '친구가 썼으니 맞아요'], answer: 0 },
                    conclude: '학교 바로 서쪽 칸에서 멈췄어요. 동쪽으로 세 칸이라고 고쳐야 학교에 닿아요.' },
                  { prompt: '준호의 안내: "학교에서 서쪽으로 세 칸 가면 도서관이에요." 안내대로 가서 닿는 곳에 핀을 꽂고, 틀린 곳을 고르세요.', state: { pin: [3, 2] }, toolOptions: { ask: { choices: ['방위', '칸 수', '출발 장소'], why: [null, '세 칸 가면 학교에서 도서관까지의 칸 수와 같아요. 가는 쪽을 보세요.', '학교에서 출발하는 것은 맞아요.'] } }, target: { at: [0, 2], pick: 0 }, difficulty: 0.15 },
                  { prompt: '서연의 안내: "도서관에서 북쪽으로 두 칸 가면 우체국이에요." 안내대로 가서 닿는 곳에 핀을 꽂고, 틀린 곳을 고르세요.', state: { pin: [6, 2] }, toolOptions: { ask: { choices: ['방위', '칸 수', '출발 장소'], why: ['북쪽으로 두 칸이 그대로 맞는 출발 장소가 있는지 먼저 찾아보세요.', '두 칸이 그대로 맞는 출발 장소가 있는지 먼저 찾아보세요.', null] } }, target: { at: [6, 0], pick: 2 }, difficulty: 0.3,
                    conclude: '학교에서 북쪽으로 두 칸 가면 우체국이에요. 서연은 출발 장소를 잘못 썼어요.' },
                  { prompt: '도윤의 안내: "경찰서에서 동쪽으로 여섯 칸, 이어서 북쪽으로 두 칸 가면 시장이에요." 안내대로 가서 닿는 곳에 핀을 꽂고, 틀린 곳을 고르세요.', state: { pin: [0, 2] }, toolOptions: { ask: { choices: ['방위', '칸 수', '출발 장소'], why: [null, '여섯 칸 가면 도서관이에요. 거기서 어느 쪽으로 가야 시장인가요?', '경찰서에서 출발하는 것은 맞아요.'] } }, target: { at: [6, 0], pick: 0 }, difficulty: 0.25 },
                ],
              },
              {
                id: 'a2', title: '활동 2. 칸 수와 방위를 바르게 고치기', minutes: 9, tool: 'map', options: BYEOLBIT,
                task: '친구 글에서 틀린 곳이 정해져 있어요. 1·2번은 핀으로 친구가 말한 곳까지 가 보며 칸을 세어 바른 칸 수를 고르고, 3·4번은 출발 장소에서 도착 장소를 보고 바른 방위를 골라요.',
                teacher: '"몇 칸으로 고쳐야 할까요? 머리로 세지 말고 핀을 한 칸씩 옮기며 세어 봐요." 출발한 칸까지 세어 한 칸 많게 고르는 학생에게 건너간 칸만 센다는 것을 다시 보여 준다. 3·4번에서 방위를 고를 때는 출발 장소에 손가락을 먼저 올려놓게 한다. 4번처럼 출발과 도착을 거꾸로 보고 쓴 실수가 나오면 "누가 어디에 서 있나요?"라고 묻는다.',
                levels: { easy: { readout: true }, base: {}, challenge: { names: false } },
                items: [
                  { prompt: '하준의 안내: "공원에서 동쪽으로 세 칸 가면 소방서예요." 핀을 소방서까지 옮기며 세어 보고, 몇 칸으로 고쳐야 할지 고르세요.', state: { pin: [1, 0] }, toolOptions: { ask: { choices: ['두 칸', '세 칸', '네 칸'], why: ['더 가야 소방서예요. 핀을 한 칸씩 옮기며 세어요.', '세 칸 가면 소방서 바로 앞 빈칸이에요.', null] } }, target: { place: '소방서', pick: 2 }, difficulty: 0.15,
                    conclude: '안내대로 가서 닿은 곳이 다르면, 칸을 한 칸씩 다시 세어 칸 수를 고쳐요.' },
                  { prompt: '예린의 안내: "시장에서 서쪽으로 여섯 칸, 이어서 북쪽으로 네 칸 가면 경찰서예요." 핀을 경찰서까지 옮기며 세어 보고, 두 번째 칸 수를 몇 칸으로 고쳐야 할지 고르세요.', state: { pin: [6, 4] }, toolOptions: { ask: { choices: ['두 칸', '세 칸', '네 칸'], why: [null, '우리 집에서 북쪽으로 한 칸씩 세어 보세요. 경찰서는 더 가까워요.', '네 칸 가면 지도 맨 위 빈칸이에요.'] } }, target: { place: '경찰서', pick: 0 }, difficulty: 0.22 },
                  { prompt: '지호의 안내: "소방서에서 남동쪽으로 가면 학교예요." 소방서에서 본 학교의 바른 방위를 골라 고치세요.', toolOptions: { mode: 'compass' }, target: { from: '소방서', to: '학교' }, difficulty: 0.25 },
                  { prompt: '하린의 안내: "시장에서 남쪽으로 두 칸 가면 도서관이에요." 시장에서 본 도서관의 바른 방위를 골라 고치세요.', toolOptions: { mode: 'compass' }, target: { from: '시장', to: '도서관' }, difficulty: 0.15,
                    conclude: '도서관에서 보면 시장이 남쪽이에요. 하린은 출발과 도착을 거꾸로 봤어요.' },
                ],
              },
              {
                id: 'a3', title: '활동 3. 좋은 안내 글의 조건', minutes: 8, tool: 'map', options: W(BYEOLBIT, { readOnly: true }),
                task: '별빛동네 지도를 보며 더 좋은 안내 글을 골라요.',
                teacher: '"좋은 안내 글에는 무엇이 있을까요?" 출발 장소, 방위, 칸 수(걸음 수), 닿는 곳의 이름을 학생 말로 모은다. 2번에서 "오른쪽"이 헷갈리는 까닭을 짝끼리 몸을 마주 보고 서서 확인하게 한다.',
                levels: { easy: { names: true }, base: { names: true }, challenge: { names: false } },
                items: [
                  { prompt: '학교에서 도서관 가는 길을 안내한 글 가운데 가장 따라가기 쉬운 것은 무엇인가요?', toolOptions: { ask: { choices: ['"학교에서 동쪽으로 세 칸 가면 도서관이에요."', '"학교에서 오른쪽으로 쭉 가요."', '"학교 근처에 도서관이 있어요."'], why: [null, '오른쪽은 서 있는 방향에 따라 바뀌어요.', '얼마나, 어느 쪽으로 가는지 알 수 없어요.'] } }, target: { pick: 0 }, difficulty: 0.08 },
                  { prompt: '"오른쪽으로 가요"라는 안내가 헷갈리는 까닭은 무엇인가요?', toolOptions: { ask: { choices: ['서 있는 방향에 따라 오른쪽이 바뀌어서', '오른쪽이라는 말이 어려워서', '길이 너무 멀어서'], why: [null, '말이 어려운 것이 아니에요. 친구와 마주 보고 서 보세요.', '거리와는 상관없어요.'] } }, target: { pick: 0 }, difficulty: 0.1 },
                  { prompt: '"동쪽으로 가요."라는 안내에 무엇을 더하면 더 정확할까요?', toolOptions: { ask: { choices: ['출발 장소와 몇 칸 가는지', '좋아하는 색깔', '그날의 날씨'], why: [null, '색깔은 길을 찾는 데 도움이 되지 않아요.', '날씨는 길을 찾는 데 도움이 되지 않아요.'] } }, target: { pick: 0 }, difficulty: 0.1 },
                ],
              },
            ],
          },
          {
            id: 'wrapup', title: '정리', minutes: 8,
            teacher: '"오늘 고친 안내 글에서 가장 많이 틀린 것은 무엇이었나요?" 칸 수를 잘못 센 실수, 방위를 바꿔 쓴 실수, 출발 장소를 잘못 쓴 실수를 칠판에 나누어 적는다. 출구 1번은 지도 없이 글만 고치는 문항이라, 출발과 도착을 바꿔 쓰면 방위도 반대가 된다는 것을 스스로 떠올려야 한다. 각자 우리 집에서 학교까지의 안내 글을 한 문장 써 보고 짝과 바꿔 따라가 보게 한다.',
            exitTicket: [
              { type: 'short', prompt: '별빛동네에서 도서관은 학교에서 동쪽으로 세 칸 떨어져 있어요. 친구가 "도서관에서 동쪽으로 세 칸 가면 학교예요."라고 썼어요. 바르게 고쳐 쓰세요.', answer: '도서관에서 서쪽으로 세 칸 가면 학교예요.', difficulty: 0.25 },
              { type: 'tool', tool: 'map', options: W(BYEOLBIT, { mode: 'compass' }), prompt: '"학교에서 남서쪽에 소방서"라는 글을 고치려고 해요. 학교에서 본 소방서의 바른 방위를 고르세요.', target: { from: '학교', to: '소방서' }, difficulty: 0.25 },
              { type: 'short', prompt: '우리 집(또는 아는 곳)에서 학교까지 가는 길을 출발 장소·방위·걸음 수를 넣어 한 문장으로 쓰세요.', answer: '학생마다 다름 — 출발 장소, 방위, 걸음 수(또는 거리)가 모두 들어갔는지 본다', difficulty: 0.2 },
              { type: 'mood', prompt: '오늘 안내 글 고치기는 어땠나요?' },
            ],
          },
        ],
        worksheet: {
          title: '길 안내 글 고치기',
          items: [
            { type: 'figure', prompt: '별빛동네 지도를 보고 아래 안내 글을 고치세요.', tool: 'map', options: BYEOLBIT, figures: [{ caption: '별빛동네' }], answer: '아래 문항 답 참고' },
            { type: 'table', prompt: '지도에서 안내대로 따라가 보고, 틀린 곳을 쓴 뒤 바르게 고쳐 쓰세요.', columns: ['친구의 안내 글', '틀린 곳(방위·칸 수·출발 장소)', '고친 안내 글'], cells: [['우체국에서 북쪽으로 두 칸 가면 학교', '', ''], ['공원에서 서쪽으로 네 칸 가면 소방서', '', ''], ['우리 집에서 동쪽으로 다섯 칸 가면 시장', '', '']], answer: '방위 — 우체국에서 남쪽으로 두 칸, 방위 — 공원에서 동쪽으로 네 칸, 칸 수 — 우리 집에서 동쪽으로 여섯 칸' },
            { type: 'blank', prompt: '안내 글을 읽고 닿는 곳을 쓰세요.', text: '우리 집에서 북쪽으로 두 칸, 이어서 동쪽으로 세 칸 가면 ___에 닿아요.', answer: '학교' },
            { type: 'choice', prompt: '좋은 안내 글에 꼭 들어가야 하는 것이 아닌 것에 ○ 하세요.', options: ['출발 장소', '방위', '칸 수(걸음 수)', '내가 좋아하는 색'], answer: '내가 좋아하는 색' },
            { type: 'short', prompt: '짝이 쓴 안내 글을 따라가 본 뒤, 고칠 점을 한 가지 쓰세요.' },
          ],
          easy: {
            note: '안내 글에서 출발 장소, 방위, 칸 수에 밑줄을 그어 보세요.',
            items: [
              { type: 'figure', prompt: '별빛동네 지도를 보고 아래 문제를 풀어요.', tool: 'map', options: BYEOLBIT, figures: [{ caption: '별빛동네' }], answer: '아래 문항 답 참고' },
              { type: 'blank', prompt: '바른 방위를 쓰세요.', text: '학교에서 도서관은 ___쪽에 있어요.', answer: '동' },
              { type: 'choice', prompt: '더 좋은 안내 글에 ○ 하세요.', options: ['학교에서 동쪽으로 세 칸', '학교에서 오른쪽으로 쭉'], answer: '학교에서 동쪽으로 세 칸' },
              { type: 'short', prompt: '우리 교실에서 운동장까지 가는 길을 방위를 넣어 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '핀이 있는 곳의 이름이 보여 안내를 따라가며 닿은 곳을 바로 확인할 수 있어요.',
          base: '안내를 따라 스스로 칸을 세어 닿은 곳을 찾고, 틀린 곳(방위·칸 수·출발 장소)을 골라 고쳐요.',
          challenge: '지도에 장소 이름이 없어 범례로 출발·도착 장소를 찾아요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 오른쪽·왼쪽으로만 안내하고 방위를 쓰지 않는다 → 짝과 마주 보고 서서 "오른쪽"이 서로 다른 것을 확인한다. ② 출발과 도착을 바꿔 반대 방위를 쓴다 → 출발 장소에 손가락을 먼저 올린다. ③ 고친 안내 글에도 출발 장소를 빠뜨린다 → 출발·방위·칸 수 세 칸 점검표로 스스로 확인하게 한다. ④ 친구가 말한 도착 장소에 바로 핀을 꽂는다 → 안내대로 먼저 따라가 보고, 닿은 곳과 친구 말을 견주게 한다.',
      }),
      // ───────────────────────── 8차시 ─────────────────────────
      L(8, {
        title: '걸음 수와 방위로 학교 마당 안내문 만들기',
        objective: '축척을 걸음 수로 바꾸어 거리를 구하고, 북쪽이 위가 아닌 지도에서도 방위표를 맞춰 학교 마당의 길을 안내할 수 있다.',
        standards: S1,
        illustration: {
          prompt: ILL('a school yard seen from above with a main building, a gym, a vegetable garden and a playground, with children counting footsteps along a dotted path and a compass rose tilted sideways'),
          scene: { viewBox: [480, 270], layers: [
            { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 120, y: 50 }, { motif: 'hills', y: 206 },
            { motif: 'house', x: 120, y: 222, color: 'buttercup' }, { motif: 'tree', x: 230, y: 214 }, { motif: 'flower', x: 300, y: 226 }, { motif: 'leaf', x: 360, y: 220 },
            { motif: 'text', x: 240, y: 140, text: '정문에서 놀이터까지 몇 걸음?', size: 22 },
          ] },
        },
        stages: [
          {
            id: 'intro', title: '도입', minutes: 5,
            teacher: '"우리 반 한 걸음은 얼마쯤일까요?" 교실 앞에서 열 걸음을 걸어 보게 한 뒤, 지도 한 칸이 10걸음이라면 축척을 걸음 수로 쓸 수 있다고 말한다. 이어서 북쪽 화살표가 오른쪽을 가리키는 마당 지도를 띄우고 "이 지도의 위쪽도 북쪽일까요?"라고 묻는다. 시연 단추로 정문에서 놀이터까지의 걸음 수를 보여 준다.',
            student: '지도 한 칸이 10걸음이라면, 정문에서 놀이터까지는 몇 걸음일지 어림해 봅시다.',
            demo: { tool: 'map', options: W(YARD, { mode: 'scale', showCells: true }), sequence: [{ from: '정문', to: '놀이터' }] },
          },
          {
            id: 'main', title: '전개', minutes: 27,
            activities: [
              {
                id: 'a1', title: '활동 1. 걸음 수 구하기', minutes: 9, tool: 'map', options: W(YARD, { mode: 'scale' }),
                task: '보라색 점선 길을 따라 건너간 칸 수를 세고, 한 칸 = 10걸음을 곱해 걸음 수를 넣어요.',
                teacher: '"한 칸에 10걸음이면 세 칸은요?" 10씩 뛰어 세기로 답하게 한다. 기본 단계는 단추 한 번에 5걸음씩 늘어서 칸 수와 축척을 곱해야 맞는다. 사람마다 한 걸음 길이가 달라 걸음 수는 어림값이라는 것도 짚는다.',
                levels: { easy: { showCells: true }, base: { distStep: 5 }, challenge: { distStep: 5, names: false } },
                items: [
                  { prompt: '정문에서 놀이터까지 길을 따라가면 몇 걸음인가요?', target: { from: '정문', to: '놀이터' }, difficulty: 0.1 },
                  { prompt: '본관에서 체육관까지 길을 따라가면 몇 걸음인가요?', target: { from: '본관', to: '체육관' }, difficulty: 0.12 },
                  { prompt: '텃밭에서 급식실까지 길을 따라가면 몇 걸음인가요?', target: { from: '텃밭', to: '급식실' }, difficulty: 0.18, reveal: 'after-check',
                    conclude: '동쪽으로 1칸, 남쪽으로 3칸, 모두 4칸이니 40걸음이에요.' },
                ],
              },
              {
                id: 'a2', title: '활동 2. 돌아간 지도에 방위표 맞추기', minutes: 10, tool: 'map', options: W(YARD, { mode: 'compass', north: 90 }),
                task: '이 마당 지도는 북쪽 화살표가 오른쪽을 가리켜요. 방위표를 돌려 빨간 바늘을 북쪽 화살표에 맞춘 뒤 방위를 골라요.',
                teacher: '"지도를 들고 몸을 돌려 북쪽 화살표가 앞을 보게 해 볼까요?" 지도를 실제 방향에 맞추면 읽기 쉽다는 것을 몸으로 보여 준다. 방위표를 돌리지 않고 위쪽을 북쪽으로 읽은 학생에게 교구의 피드백을 소리 내어 읽게 한다.',
                levels: { easy: { roseStart: 90 }, base: {}, challenge: { names: false } },
                items: [
                  { prompt: '방위표를 지도의 북쪽에 맞추고, 정문에서 본 놀이터의 방위를 골라 보세요.', target: { align: true, from: '정문', to: '놀이터' }, difficulty: 0.2,
                    predict: { q: '정문에서 놀이터는 화면의 오른쪽이에요. 방위는?', options: ['동쪽', '북쪽', '남쪽'], answer: 1 },
                    conclude: '북쪽 화살표가 오른쪽을 가리키니 화면의 오른쪽이 북쪽이에요.' },
                  { prompt: '방위표를 지도의 북쪽에 맞추고, 본관에서 본 정문의 방위를 골라 보세요.', target: { align: true, from: '본관', to: '정문' }, difficulty: 0.3 },
                  { prompt: '방위표를 지도의 북쪽에 맞추고, 급식실에서 본 체육관의 방위를 골라 보세요.', target: { align: true, from: '급식실', to: '체육관' }, difficulty: 0.35, reveal: 'after-check' },
                ],
              },
              {
                id: 'a3', title: '활동 3. 걸음 수 안내 따라가기', minutes: 8, tool: 'map', options: W(YARD, { north: 90 }),
                task: '북쪽 화살표가 오른쪽인 마당 지도에서 걸음 수 안내를 따라 핀을 옮겨요. 10걸음이 한 칸이에요.',
                teacher: '"20걸음이면 몇 칸일까요?" 걸음 수를 칸 수로 바꾼 뒤 방위표를 보고 옮기게 한다. 마지막 짝 활동은 실제 학교 마당 한 곳을 정해 방위와 걸음 수로 안내문을 쓰고, 다음 체육 시간이나 쉬는 시간에 짝이 따라가 보게 한다.',
                levels: { easy: { readout: true }, base: {}, challenge: { names: false } },
                items: [
                  { prompt: '놀이터에서 서쪽으로 20걸음 간 곳에 핀을 꽂아 보세요.', state: { pin: [5, 3] }, target: { from: '놀이터', dir: '서', steps: 2 }, difficulty: 0.25 },
                  { prompt: '체육관에서 남쪽으로 50걸음 간 곳에 핀을 꽂아 보세요.', state: { pin: [5, 1] }, target: { from: '체육관', dir: '남', steps: 5 }, difficulty: 0.3 },
                  { prompt: '정문에서 서쪽으로 20걸음 간 곳에 핀을 꽂아 보세요.', state: { pin: [0, 3] }, target: { from: '정문', dir: '서', steps: 2 }, difficulty: 0.3 },
                  { prompt: '짝과 우리 학교 마당의 한 곳을 정해 방위와 걸음 수로 안내문을 쓰고, 서로 바꿔 읽은 뒤 "다 했어요"를 누르세요.', free: true, talk: true, difficulty: 0 },
                ],
              },
            ],
          },
          {
            id: 'wrapup', title: '정리', minutes: 8,
            teacher: '"지도의 위쪽이 북쪽이 아닐 때 가장 먼저 무엇을 하나요?" 방위표를 북쪽 화살표에 맞춘다는 답을 기다린다. 걸음 수 안내문을 실제 마당에서 따라가 볼 날을 정하고, 닿지 못하면 안내문의 어느 부분을 고칠지 미리 생각해 두게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'map', options: W(YARD, { mode: 'compass', north: 90 }), prompt: '방위표를 지도 북쪽에 맞추고, 놀이터에서 본 체육관의 방위를 고르세요.', target: { align: true, from: '놀이터', to: '체육관' }, difficulty: 0.3 },
              { type: 'choice', prompt: '한 칸이 10걸음인 지도에서 6칸 떨어진 곳까지는 몇 걸음일까요?', options: ['6걸음', '16걸음', '60걸음'], answer: 2, difficulty: 0.1, explain: '10걸음씩 6번이니 60걸음이에요.' },
              { type: 'choice', prompt: '북쪽 화살표가 오른쪽을 가리키는 지도에서 화면 아래쪽은 어느 방위인가요?', options: ['남쪽', '동쪽', '서쪽'], answer: 1, difficulty: 0.3, explain: '오른쪽(북쪽)을 보고 서면 오른팔 쪽인 화면 아래가 동쪽이에요.' },
              { type: 'mood', prompt: '오늘 안내문 만들기는 어땠나요?' },
            ],
          },
        ],
        worksheet: {
          title: '걸음 수와 방위로 안내하기',
          items: [
            { type: 'figure', prompt: '마당 지도를 보고 정문에서 놀이터, 본관에서 체육관까지 걸음 수를 쓰세요.', tool: 'map', options: W(YARD, { mode: 'scale' }), figures: [{ caption: '푸른초등학교 마당 (한 칸 10걸음)' }], answer: '50걸음, 50걸음' },
            { type: 'figure', prompt: '북쪽 화살표가 오른쪽을 가리키는 지도예요. 북쪽 화살표를 보고 지도의 위·아래·왼쪽·오른쪽 가장자리 옆에 방위를 쓰세요.', tool: 'map', options: W(YARD, { north: 90 }), figures: [{ caption: '돌아간 마당 지도' }], answer: '위 서, 아래 동, 왼쪽 남, 오른쪽 북' },
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '한 칸이 10걸음이면 40걸음은 ___칸이에요. 북쪽이 오른쪽인 지도에서 화면 위쪽은 ___쪽이에요.', answer: '4, 서' },
            { type: 'table', prompt: '우리 학교 마당 안내문을 써 보세요.', columns: ['출발', '방위', '걸음 수', '닿는 곳'], rows: 2, answer: '학생마다 다름 — 짝이 따라가 닿았는지 확인' },
          ],
          easy: {
            note: '10걸음 = 한 칸. 북쪽 화살표가 오른쪽이면 지도를 돌려 화살표가 위로 오게 들고 읽어요.',
            items: [
              { type: 'figure', prompt: '칸 번호를 보고 정문에서 놀이터까지 몇 칸인지 세세요.', tool: 'map', options: W(YARD, { mode: 'scale', showCells: true, from: '정문', to: '놀이터' }), figures: [{ caption: '푸른초등학교 마당 (한 칸 10걸음)' }], answer: '5칸, 50걸음' },
              { type: 'blank', prompt: '빈칸을 채우세요.', text: '한 칸이 10걸음이면 3칸은 ___걸음이에요.', answer: '30' },
              { type: 'choice', prompt: '북쪽 화살표가 오른쪽을 가리키면 화면 오른쪽은?', options: ['북쪽', '동쪽'], answer: '북쪽' },
              { type: 'short', prompt: '우리 교실에서 정문까지 몇 걸음쯤일지 어림해 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '길 위 칸에 번호가 붙고, 방위표가 처음부터 지도 북쪽에 맞춰져 있어요.',
          base: '걸음 수를 5걸음씩 넣어 곱셈으로 구하고, 방위표를 직접 돌려 맞춰요.',
          challenge: '장소 이름이 없는 지도에서 범례로 장소를 찾고, 대각선 방위까지 판단해요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 지도의 위쪽을 언제나 북쪽(또는 내 앞쪽)으로 읽는다 → 방위표를 북쪽 화살표에 먼저 맞춘다. ② 걸음 수를 칸 수로 바꾸지 못한다(20걸음 = 20칸) → 10걸음이 한 칸임을 칠판에 적어 둔다. ③ 사람마다 걸음 길이가 달라 실제로 따라가면 조금 어긋난다 → 걸음 수 안내는 어림이라 닿는 곳의 이름을 함께 쓰게 한다.',
      }),
      // ───────────────────────── 9차시 ─────────────────────────
      L(9, {
        title: '가람도 지도에서 시·군의 자리와 이웃 찾기',
        objective: '도 지도에서 한 지역이 어디에 있는지 찾고, 맞닿은 이웃 지역과 방위를 써서 그 자리를 설명할 수 있다.',
        standards: S2,
        illustration: {
          prompt: ILL('a province map made of colorful paper pieces fitted together like a puzzle, each piece a city or county with a small town hall, and a star marking the provincial office in the middle'),
          scene: { viewBox: [480, 270], layers: [
            { motif: 'cloud', x: 110, y: 50 }, { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'mountain', x: 110, y: 206, s: 0.8 }, { motif: 'hills', y: 206 },
            { motif: 'house', x: 250, y: 222, color: 'sky' }, { motif: 'star', x: 250, y: 110, color: 'buttercup' }, { motif: 'tree', x: 350, y: 214 },
            { motif: 'text', x: 240, y: 150, text: '우리 지역은 어디쯤 있을까요?', size: 22 },
          ] },
        },
        stages: [
          {
            id: 'intro', title: '도입', minutes: 5,
            teacher: '"우리 학교 주소를 큰 곳부터 말해 볼까요?" 도(또는 특별시·광역시), 시·군·구, 읍·면·동 차례로 말하게 하고, 우리 지역이 더 큰 지역에 속해 있다는 것을 짚는다. 오늘은 지어낸 가람도 지도로 연습한 뒤 우리 지역에 옮겨 본다고 알린다. 시연 단추로 도청이 있는 가람시와 북동쪽 한별시에 차례로 핀이 꽂히는 모습을 보여 준다.',
            student: '우리 학교 주소에 나오는 지역 이름을 큰 곳부터 차례로 말해 봅시다.',
            demo: { tool: 'map', options: GARAM, sequence: [{ region: '가람시' }, { region: '한별시' }] },
          },
          {
            id: 'main', title: '전개', minutes: 27,
            activities: [
              {
                id: 'a1', title: '활동 1. 가람도에서 시·군 찾기', minutes: 9, tool: 'map', options: GARAM,
                task: '굵은 경계선 하나 안쪽이 시 또는 군 하나예요. 문제에 맞는 지역 안의 칸에 핀을 꽂아요.',
                teacher: '"굵은 선이 지역과 지역의 경계예요." 경계선에 걸쳐 핀을 꽂는 학생에게 칸 하나가 어느 지역에 들어 있는지 색으로 보게 한다. 2번은 도청에 손가락을 올리고 북동쪽으로 비스듬히 따라가게 한다.',
                levels: { easy: { readout: true }, base: {}, challenge: { regionNames: false } },
                items: [
                  { prompt: '가람도 지도에서 솔빛군을 찾아 그 안에 핀을 꽂아 보세요.', target: { region: '솔빛군' }, difficulty: 0.05, toolOptions: { regionNames: true } },
                  { prompt: '도청에서 북동쪽으로 곧장 가면 나오는 시의 칸 하나에 핀을 꽂아 보세요.', state: { pin: [3, 2] }, target: { from: '도청', dir: '북동' }, difficulty: 0.15 },
                  { prompt: '도청에서 서쪽으로 두 칸 가면 있는 군청에 핀을 꽂아 보세요.', state: { pin: [3, 2] }, target: { from: '도청', dir: '서', steps: 2 }, difficulty: 0.15 },
                  { prompt: '가람도의 북서쪽 끝에 있는 시를 찾아 그 안에 핀을 꽂아 보세요.', target: { region: '나래시' }, difficulty: 0.18,
                    conclude: '지도의 왼쪽 위가 북서쪽이에요. 나래시는 가람도의 북서쪽 끝에 있어요.' },
                ],
              },
              {
                id: 'a2', title: '활동 2. 맞닿은 이웃 지역 찾기', minutes: 9, tool: 'map', options: W(GARAM, { readOnly: true }),
                task: '두 지역이 경계선을 함께 쓰면 "맞닿았다"고 해요. 모서리 점 하나만 닿은 것은 맞닿은 것이 아니에요. 지도를 보고 답을 골라요.',
                teacher: '"맞닿았다는 것은 경계선을 함께 쓴다는 뜻이에요." 나래시와 가람시처럼 모서리 한 점만 닿은 곳을 이웃이라고 말하는 학생에게 경계선을 손가락으로 따라가 보게 한다. 지역의 크기로 자리를 짐작하지 말고 방위와 이웃으로 말하게 한다.',
                levels: { easy: { readout: true }, base: {}, challenge: { regionNames: false } },
                items: [
                  { prompt: '가람시와 맞닿지 않은 곳은 어디인가요?', toolOptions: { regionNames: true, ask: { choices: ['솔빛군', '나래시', '은빛군'], why: ['솔빛군은 가람시 북쪽에서 경계선을 함께 써요.', null, '은빛군은 가람시 남쪽에서 경계선을 함께 써요.'] } }, target: { pick: 1 }, difficulty: 0.2,
                    predict: { q: '모서리 한 점만 닿아도 맞닿은 것일까요?', options: ['맞닿은 거예요', '아니에요'], answer: 1 },
                    conclude: '나래시와 가람시는 모서리 한 점만 닿아요. 경계선을 함께 써야 맞닿은 이웃이에요.' },
                  { prompt: '나래시와 맞닿은 두 지역은 어디인가요?', toolOptions: { regionNames: true, ask: { choices: ['솔빛군과 들꽃군', '한별시와 은빛군', '가람시와 한별시'], why: [null, '나래시는 가람도의 북서쪽 끝이라 두 곳과 멀어요.', '가람시와는 모서리 한 점만 닿아요.'] } }, target: { pick: 0 }, difficulty: 0.15 },
                  { prompt: '한별시와 맞닿은 지역을 모두 고른 것은 무엇인가요?', toolOptions: { regionNames: true, ask: { choices: ['솔빛군, 가람시, 은빛군', '나래시, 들꽃군', '솔빛군, 나래시'], why: [null, '두 곳은 가람도의 서쪽에 있어요.', '나래시와 한별시 사이에는 솔빛군이 있어요.'] } }, target: { pick: 0 }, difficulty: 0.25 },
                  { prompt: '은빛군은 가람도의 어느 쪽에 있나요?', toolOptions: { ask: { choices: ['북쪽', '남쪽', '서쪽'], why: ['은빛군은 지도의 아래쪽에 있어요.', null, '서쪽 끝에는 들꽃군이 있어요.'] } }, target: { pick: 1 }, difficulty: 0.1 },
                ],
              },
              {
                id: 'a3', title: '활동 3. 도청에서 본 시청·군청의 방위', minutes: 9, tool: 'map', options: W(GARAM, { mode: 'compass' }),
                task: '도청에 서서 문제의 시청·군청 쪽을 바라본다고 생각하고, 아래 방위 단추에서 알맞은 방위를 골라요.',
                teacher: '"가람시는 가람도의 가운데에 있어요. 나래시는 도청에서 보면 어느 쪽일까요?" 가운데 장소를 기준으로 둘레 지역의 방위를 말하면 우리 지역의 자리를 설명할 수 있다는 것을 정리한다.',
                levels: { easy: { readout: true }, base: {}, challenge: { regionNames: false } },
                items: [
                  { prompt: '도청에서 보면 나래시청은 어느 방위에 있나요?', target: { from: '도청', to: '나래시청' }, difficulty: 0.2 },
                  { prompt: '도청에서 보면 은빛군청은 어느 방위에 있나요?', target: { from: '도청', to: '은빛군청' }, difficulty: 0.18 },
                  { prompt: '도청에서 보면 한별시청은 어느 방위에 있나요?', target: { from: '도청', to: '한별시청' }, difficulty: 0.2,
                    conclude: '가운데에 있는 도청을 기준으로 방위를 말하면 각 지역이 가람도의 어디쯤인지 설명할 수 있어요.' },
                ],
              },
            ],
          },
          {
            id: 'wrapup', title: '정리', minutes: 8,
            teacher: '"들꽃군을 처음 듣는 친구에게 자리를 설명해 볼까요?" "가람도의 서쪽에 있고, 나래시·가람시·은빛군과 맞닿아 있어요"처럼 방위와 이웃을 함께 말하게 한다. 이어서 교사가 준비한 우리 시·도 행정 지도를 띄워 우리 지역과 맞닿은 지역을 함께 찾고 출구 3번을 쓰게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'map', options: W(GARAM, { mode: 'compass' }), prompt: '도청에서 보면 들꽃군청은 어느 방위에 있는지 고르세요.', target: { from: '도청', to: '들꽃군청' }, difficulty: 0.12 },
              { type: 'choice', prompt: '들꽃군과 맞닿은 지역이 아닌 곳은 어디인가요?', options: ['나래시', '가람시', '한별시'], answer: 2, difficulty: 0.2, explain: '한별시는 가람도의 동쪽에 있어 들꽃군과 경계선을 함께 쓰지 않아요.' },
              { type: 'short', prompt: '우리 지역은 어느 시·도에 속하나요? 우리 지역과 맞닿은 지역 하나를 방위와 함께 쓰세요.', answer: '학생마다 다름 — 속한 시·도 이름, 맞닿은 지역 이름, 방위가 들어갔는지 본다', difficulty: 0.25 },
              { type: 'mood', prompt: '오늘 지역 찾기는 어땠나요?' },
            ],
          },
        ],
        worksheet: {
          title: '시·군의 자리와 이웃',
          items: [
            { type: 'figure', prompt: '가람도 지도를 보고 아래 물음에 답하세요.', tool: 'map', options: GARAM, figures: [{ caption: '가람도' }], answer: '아래 문항 답 참고' },
            { type: 'table', prompt: '지역마다 맞닿은 이웃 지역을 쓰세요.', columns: ['지역', '맞닿은 이웃 지역'], cells: [['나래시', ''], ['은빛군', ''], ['가람시', '']], answer: '나래시: 솔빛군·들꽃군 / 은빛군: 들꽃군·가람시·한별시 / 가람시: 솔빛군·한별시·들꽃군·은빛군' },
            { type: 'blank', prompt: '도청에서 본 방위를 쓰세요.', text: '도청에서 나래시청은 ___쪽, 은빛군청은 ___쪽, 한별시청은 ___쪽에 있어요.', answer: '북서, 남동, 북동' },
            { type: 'choice', prompt: '모서리 한 점만 닿은 두 지역에 ○ 하세요.', options: ['나래시와 가람시', '나래시와 솔빛군', '가람시와 은빛군'], answer: '나래시와 가람시' },
            { type: 'short', prompt: '우리 지역의 자리를 방위와 이웃 지역을 넣어 두 문장으로 설명하세요.' },
          ],
          easy: {
            note: '굵은 경계선을 함께 쓰면 맞닿은 이웃이에요. 모서리 한 점만 닿으면 이웃이 아니에요.',
            items: [
              { type: 'figure', prompt: '가람도 지도에서 나래시를 찾아 색칠하세요.', tool: 'map', options: GARAM, figures: [{ caption: '가람도' }], answer: '왼쪽 위 네 칸' },
              { type: 'choice', prompt: '나래시와 맞닿은 곳에 ○ 하세요.', options: ['솔빛군', '한별시'], answer: '솔빛군' },
              { type: 'blank', prompt: '빈칸을 채우세요.', text: '도청에서 은빛군청은 ___쪽에 있어요.', answer: '남동' },
              { type: 'short', prompt: '우리 학교는 어느 시·도에 있는지 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '핀이 있는 곳이 글자로 보이고, 지역 이름이 늘 보여요.',
          base: '지역 이름을 보며 경계선과 방위로 판단해요.',
          challenge: '지역 이름을 가린 지도에서 시청·군청 이름과 방위로 지역을 찾아요(이름이 꼭 필요한 문항만 이름이 보여요).',
        },
        teacherNotes: '자주 보이는 어려움: ① 지역의 자리를 지도에 크게 그려진 정도로 판단한다(넓은 은빛군이 가운데라고 여김) → 자리는 방위와 이웃으로 말한다. ② 모서리 한 점만 닿은 곳을 이웃이라고 한다 → 경계선을 함께 쓰는지 손가락으로 따라간다. ③ 우리 지역이 어느 시·도에 속하는지 모른다 → 학교 주소를 큰 곳부터 읽게 한다. 가람도는 지어낸 지도이므로, 정리 때 실제 우리 시·도 행정 지도로 한 번 옮겨 보는 것이 이 차시의 마무리다.',
      }),
      // ───────────────────────── 10차시 ─────────────────────────
      L(10, {
        title: '솔빛군의 읍·면 자리를 방위로 설명하기',
        objective: '군 지도에서 읍·면의 자리를 방위와 이웃으로 설명하고, 도·시·군·읍·면이 서로 어떻게 포함되는지 차례로 말할 수 있다.',
        standards: S2,
        illustration: {
          prompt: ILL('a county map cut from paper with six townships around a central town hall, mountains in the north and rice fields in the south, nested inside a bigger province outline'),
          scene: { viewBox: [480, 270], layers: [
            { motif: 'cloud', x: 120, y: 50 }, { motif: 'mountain', x: 150, y: 206, s: 0.9 }, { motif: 'mountain', x: 230, y: 210, s: 0.6, color: 'mint' }, { motif: 'hills', y: 206 },
            { motif: 'house', x: 330, y: 222, color: 'sky' }, { motif: 'flower', x: 400, y: 226 },
            { motif: 'text', x: 240, y: 140, text: '도 안에 군, 군 안에 읍·면', size: 22 },
          ] },
        },
        stages: [
          {
            id: 'intro', title: '도입', minutes: 5,
            teacher: '크기가 다른 상자 세 개를 겹쳐 넣어 보이며 "가람도 안에 솔빛군, 솔빛군 안에 샘골면이 들어 있어요"라고 말한다. "샘골면은 가람도에도 속할까요?" 큰 지역 안에 작은 지역이 들어 있다는 반응을 기다린다. 시연 단추로 솔빛군 지도에서 군청이 있는 솔빛읍과 북쪽 봉우리면에 핀이 꽂히는 모습을 보여 준다.',
            student: '우리 집 주소에서 가장 큰 지역과 가장 작은 지역은 무엇일까요?',
            demo: { tool: 'map', options: SOLBIT, sequence: [{ region: '솔빛읍' }, { region: '봉우리면' }] },
          },
          {
            id: 'main', title: '전개', minutes: 27,
            activities: [
              {
                id: 'a1', title: '활동 1. 솔빛군의 읍·면 찾기', minutes: 9, tool: 'map', options: SOLBIT,
                task: '군청을 기준으로 방위와 칸 수를 따라가거나, 설명에 맞는 읍·면 안쪽 칸에 핀을 꽂아요.',
                teacher: '"군청이 있는 곳이 솔빛읍이에요. 군청에서 출발해 볼까요?" 2번은 솔빛읍과 경계선을 함께 쓰지 않는 면을 찾는 문제다. 이웃을 하나씩 지워 가며 남는 면을 찾게 한다.',
                levels: { easy: { readout: true }, base: {}, challenge: { regionNames: false } },
                items: [
                  { prompt: '군청에서 남쪽으로 한 칸 가면 나오는 면에 핀을 꽂아 보세요.', state: { pin: [2, 2] }, target: { from: '군청', dir: '남', steps: 1 }, difficulty: 0.1 },
                  { prompt: '군청이 있는 솔빛읍과 맞닿지 않은 면을 찾아 그 안에 핀을 꽂아 보세요.', target: { region: '달내면' }, toolOptions: { regionNames: true }, difficulty: 0.3,
                    predict: { q: '솔빛읍과 맞닿지 않은 면은 몇 개일까요?', options: ['없어요', '1개', '3개'], answer: 1 },
                    conclude: '달내면은 솔빛읍과 모서리 한 점만 닿아요. 나머지 네 면은 모두 솔빛읍과 경계선을 함께 써요.' },
                  { prompt: '군청에서 북쪽으로 두 칸 가면 나오는 면에 핀을 꽂아 보세요.', state: { pin: [2, 2] }, target: { from: '군청', dir: '북', steps: 2 }, difficulty: 0.08 },
                  { prompt: '솔빛군의 북서쪽 끝에 있는 면을 찾아 그 안에 핀을 꽂아 보세요.', target: { region: '샘골면' }, toolOptions: { regionNames: true }, difficulty: 0.15 },
                ],
              },
              {
                id: 'a2', title: '활동 2. 크기가 아니라 방위와 이웃으로', minutes: 8, tool: 'map', options: W(SOLBIT, { readOnly: true }),
                task: '읍·면의 자리를 바르게 설명한 것을 골라요. 넓게 그려진 정도가 아니라 방위와 이웃을 봐요.',
                teacher: '"강가면이 크게 그려졌다고 솔빛군의 가운데일까요?" 땅이 넓으면 지도에서 크게 보일 뿐, 자리는 방위와 이웃으로 말한다는 것을 짚는다. 3번은 같은 군을 크게 그린 지도와 작게 그린 지도를 떠올리게 하고, 줄인 정도가 달라도 방위는 같다는 것을 3차시와 이어 준다.',
                levels: { easy: { readout: true }, base: {}, challenge: { regionNames: false } },
                items: [
                  { prompt: '달내면의 자리를 바르게 설명한 것은 무엇인가요?', toolOptions: { regionNames: true, ask: { choices: ['솔빛군의 남동쪽에 있고 강가면·들녘면과 맞닿아 있어요', '가장 작으니 솔빛군의 한가운데에 있어요', '칸이 세 개라서 세 번째 자리에 있어요'], why: [null, '크기로 자리를 정할 수 없어요. 달내면은 지도의 어느 쪽에 있나요?', '칸 수는 넓이를 알려 줄 뿐, 자리를 알려 주지 않아요.'] } }, target: { pick: 0 }, difficulty: 0.15 },
                  { prompt: '강가면이 지도에서 크게 보이는 까닭은 무엇인가요?', toolOptions: { regionNames: true, ask: { choices: ['실제 땅이 넓어서 칸을 많이 차지해서', '솔빛군에서 가장 중요한 면이라서', '군청이 있는 곳이라서'], why: [null, '지도에서 크기는 중요한 정도가 아니라 넓이를 나타내요.', '군청은 솔빛읍에 있어요.'] } }, target: { pick: 0 }, difficulty: 0.15 },
                  { prompt: '솔빛군을 두 배로 크게 그린 지도가 있어요. 그 지도에서 군청에서 본 강가면의 방위는 어떻게 될까요?', toolOptions: { ask: { choices: ['이 지도와 같아요', '크게 그리면 방위가 바뀌어요', '크게 그리면 방위를 알 수 없어요'], why: [null, '크기만 바뀌고 장소끼리의 자리는 그대로예요.', '방위표만 있으면 방위를 알 수 있어요.'] } }, target: { pick: 0 }, difficulty: 0.25 },
                ],
              },
              {
                id: 'a3', title: '활동 3. 큰 지역과 작은 지역', minutes: 10, tool: 'mindmap',
                task: '도·시·군·읍·면이 서로 어떻게 들어 있는지 카드를 옮겨 정리해요.',
                teacher: '"솔빛군은 시·군 칸, 샘골면은 읍·면 칸이에요." 경상북도처럼 실제 도 이름도 함께 나누어 우리나라 행정구역과 이어 준다. 3번에서 다른 군의 이름(나래시·은빛군)을 솔빛군 안에 넣는 학생에게 9차시 가람도 지도를 다시 보여 준다.',
                levels: { easy: { live: true }, base: {}, challenge: { shuffle: true } },
                items: [
                  { prompt: '넓은 지역부터 좁은 지역 차례로 카드를 놓아 보세요.', toolOptions: { mode: 'order', topic: '포함 관계', cards: ['가람도', '솔빛군', '샘골면', '햇살마을'], slots: [{ id: 'o1', label: '가장 넓은 곳' }, { id: 'o2', label: '둘째' }, { id: 'o3', label: '셋째' }, { id: 'o4', label: '가장 좁은 곳' }] }, target: { order: ['가람도', '솔빛군', '샘골면', '햇살마을'] }, difficulty: 0.12 },
                  { prompt: '지역 이름 카드를 도, 시·군, 읍·면 가지로 나누어 보세요.', toolOptions: { topic: '행정구역 나누기', slots: ['도', '시·군', '읍·면'], cards: ['경상북도', '가람도', '나래시', '솔빛군', '샘골면', '솔빛읍'] }, target: { sort: { 도: ['경상북도', '가람도'], '시·군': ['나래시', '솔빛군'], '읍·면': ['샘골면', '솔빛읍'] } }, difficulty: 0.2,
                    conclude: '이름 끝의 "도·시·군·읍·면"을 보면 어느 크기의 지역인지 알 수 있어요.' },
                  { prompt: '솔빛군 안에 있는 곳만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '솔빛군 안', cards: ['샘골면', '솔빛읍', '달내면', '나래시', '은빛군'] }, target: { pick: ['샘골면', '솔빛읍', '달내면'] }, difficulty: 0.2 },
                ],
              },
            ],
          },
          {
            id: 'wrapup', title: '정리', minutes: 8,
            teacher: '"우리 학교 주소를 가장 큰 곳부터 말하고, 우리 동네가 시·군의 어느 쪽인지 말해 볼까요?" 크기로 자리를 말하는 학생에게 방위와 이웃으로 다시 말하게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'map', options: SOLBIT, state: { pin: [2, 2] }, prompt: '군청에서 동쪽으로 두 칸 가면 나오는 면에 핀을 꽂으세요.', target: { from: '군청', dir: '동', steps: 2 }, difficulty: 0.12 },
              { type: 'choice', prompt: '"샘골면"이 속한 군과 도를 차례로 바르게 쓴 것은 무엇인가요?', options: ['솔빛군 → 가람도', '가람도 → 솔빛군', '나래시 → 가람도'], answer: 0, difficulty: 0.2, explain: '샘골면은 솔빛군에 속하고, 솔빛군은 가람도에 속해요.' },
              { type: 'choice', prompt: '어떤 지역의 자리를 설명하는 가장 좋은 방법은 무엇인가요?', options: ['넓이가 얼마나 큰지 말해요', '방위와 맞닿은 이웃을 말해요', '이름의 글자 수를 말해요'], answer: 1, difficulty: 0.1, explain: '자리는 기준 장소에서의 방위와 맞닿은 이웃 지역으로 설명해요.' },
              { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
            ],
          },
        ],
        worksheet: {
          title: '읍·면의 자리 설명하기',
          items: [
            { type: 'figure', prompt: '솔빛군 지도를 보고 군청이 있는 읍에 ○, 그 읍과 맞닿지 않은 면에 △ 하세요.', tool: 'map', options: SOLBIT, figures: [{ caption: '솔빛군' }], answer: '○ 솔빛읍, △ 달내면' },
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '군청에서 북쪽 두 칸에는 ___면, 남쪽 한 칸에는 ___면, 동쪽 두 칸에는 ___면이 있어요.', answer: '봉우리, 들녘, 강가' },
            { type: 'table', prompt: '주소를 큰 곳부터 나누어 쓰세요.', columns: ['도(특별시·광역시)', '시·군·구', '읍·면·동'], cells: [['가람도', '솔빛군', '샘골면'], ['', '', '']], answer: '둘째 줄은 우리 학교 주소 — 학생마다 다름' },
            { type: 'choice', prompt: '강가면이 지도에서 크게 보이는 까닭에 ○ 하세요.', options: ['땅이 넓어서', '가장 중요해서', '사람이 많아서'], answer: '땅이 넓어서' },
            { type: 'short', prompt: '달내면을 처음 들은 친구에게 방위와 이웃을 넣어 자리를 설명하세요.' },
          ],
          easy: {
            note: '큰 곳부터: 도 → 시·군 → 읍·면 → 마을. 자리는 방위와 이웃으로 말해요.',
            items: [
              { type: 'figure', prompt: '솔빛군 지도에서 군청이 있는 읍에 ○ 하세요.', tool: 'map', options: SOLBIT, figures: [{ caption: '솔빛군' }], answer: '솔빛읍' },
              { type: 'blank', prompt: '빈칸을 채우세요.', text: '군청에서 북쪽으로 두 칸 가면 ___면이에요.', answer: '봉우리' },
              { type: 'choice', prompt: '더 넓은 지역에 ○ 하세요.', options: ['솔빛군', '샘골면'], answer: '솔빛군' },
              { type: 'short', prompt: '우리 학교가 있는 시·군·구 이름을 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '핀이 있는 곳의 이름이 보이고, 카드를 맞는 칸에 놓으면 초록 테두리가 생겨요.',
          base: '방위와 이웃으로 스스로 판단하고 카드를 나누어요.',
          challenge: '읍·면 이름을 가린 지도에서 군청을 기준으로 방위를 세어 찾아요(이름이 꼭 필요한 문항만 이름이 보여요).',
        },
        teacherNotes: '자주 보이는 어려움: ① 넓게 그려진 지역을 가운데이거나 중요한 곳으로 여긴다 → 크기는 넓이, 자리는 방위와 이웃. ② 도·시·군·읍·면의 포함 관계를 거꾸로 놓는다 → 상자 겹치기와 주소 읽기로 다시 짚는다. ③ 같은 지역을 크게 그리면 방위도 바뀐다고 여긴다 → 3차시의 줄인 정도와 이어 준다. 우리 지역이 특별시·광역시라면 구·동으로 바꾸어 말하게 한다.',
      }),
      // ───────────────────────── 11차시 ─────────────────────────
      L(11, {
        title: '인구와 넓이 자료로 가람도의 지역 견주기',
        objective: '인구와 넓이 자료를 지도·표·막대그래프로 읽어 두 지역을 견주고, 자료로 알 수 있는 사실과 생각을 구별할 수 있다.',
        standards: S2,
        illustration: {
          prompt: ILL('a province map where each city is shaded lighter or darker by how many people live there, with tiny paper people standing on the darker pieces and a bar chart beside the map'),
          scene: { viewBox: [480, 270], layers: [
            { motif: 'cloud', x: 110, y: 50 }, { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'hills', y: 206 },
            { motif: 'house', x: 130, y: 222 }, { motif: 'house', x: 170, y: 224, color: 'sky', s: 0.8 }, { motif: 'house', x: 210, y: 222, color: 'peach', s: 0.9 }, { motif: 'tree', x: 350, y: 214 },
            { motif: 'text', x: 240, y: 140, text: '어느 지역에 사람이 많이 살까요?', size: 22 },
          ] },
        },
        stages: [
          {
            id: 'intro', title: '도입', minutes: 5,
            teacher: '"가람도에서 사람이 가장 많이 사는 곳은 어디일까요? 어떻게 알 수 있을까요?" 짐작만으로는 알 수 없고 자료(인구 수)를 봐야 한다는 반응을 기다린다. 시연 단추로 색이 진할수록 인구가 많은 지도에서 가장 진한 가람시에 핀이 꽂히는 모습을 보여 준다. 자료의 수는 지어낸 것이고, 실제 우리 지역 자료는 14차시에 찾는다고 알린다.',
            student: '지도의 색이 진한 곳과 옅은 곳은 무엇이 다를지 생각해 봅시다.',
            demo: { tool: 'map', options: W(GARAM_POP, { regionValues: true }), sequence: [{ most: true }] },
          },
          {
            id: 'main', title: '전개', minutes: 27,
            activities: [
              {
                id: 'a1', title: '활동 1. 인구 지도 읽기', minutes: 9, tool: 'map', options: GARAM_POP,
                task: '색이 진할수록 인구가 많은 지역이에요. 진하기 범례와 지역 옆의 수를 보고 답해요.',
                teacher: '"색이 진할수록 무엇이 많다는 뜻일까요?" 범례를 먼저 읽게 한다. 진하기가 같은 칸끼리는 지역 옆의 수로 견주어야 한다는 것을 짚는다. 4번은 10만 명보다 적은 지역을 하나씩 손가락으로 세게 한다.',
                levels: { easy: { regionValues: true }, base: { regionValues: true }, challenge: { regionValues: false } },
                items: [
                  { prompt: '인구가 가장 많은 지역 안에 핀을 꽂아 보세요.', target: { most: true }, difficulty: 0.1 },
                  { prompt: '인구가 가장 적은 지역 안에 핀을 꽂아 보세요.', toolOptions: { regionValues: true }, target: { least: true }, difficulty: 0.15 },
                  { prompt: '나래시와 은빛군 가운데 인구가 더 많은 곳은 어디인가요?', toolOptions: { readOnly: true, regionValues: true, ask: { choices: ['나래시', '은빛군'], why: [null, '은빛군은 넓지만 인구 수는 9만 명이에요.'] } }, target: { pick: 0 }, difficulty: 0.1,
                    predict: { q: '더 넓은 지역에 사람이 더 많이 살까요?', options: ['그래요', '꼭 그렇지는 않아요'], answer: 1 },
                    conclude: '은빛군은 칸이 가장 많아 넓지만 인구는 나래시보다 적어요. 넓다고 사람이 많은 것은 아니에요.' },
                  { prompt: '인구가 10만 명보다 적은 지역은 몇 곳인가요?', toolOptions: { readOnly: true, regionValues: true, ask: { choices: ['2곳', '3곳', '4곳'], why: ['솔빛군·들꽃군 말고 하나가 더 있어요.', null, '한별시는 18만 명이에요.'] } }, target: { pick: 1 }, difficulty: 0.2 },
                ],
              },
              {
                id: 'a2', title: '활동 2. 표를 막대그래프로', minutes: 9, tool: 'chart',
                task: '표의 수를 보고 막대를 올리거나, 막대그래프를 읽고 답해요. 막대에 Tab으로 가서 ↑·↓로도 바꿀 수 있어요.',
                teacher: '"표와 막대그래프 가운데 어느 쪽이 크고 작음을 한눈에 보여 줄까요?" 1번에서 지도 칸 수가 넓이를 나타낸다는 것을 짚고(칸 하나는 넓이가 같은 땅), 은빛군이 가장 넓다는 것을 그래프로 확인하게 한다. 3번은 눈금 한 칸이 얼마인지 먼저 읽게 한다.',
                levels: { easy: { showValues: true }, base: {}, challenge: {} },
                items: [
                  { prompt: '지역별 넓이(지도 칸 수) 표를 보고 막대그래프를 완성해 보세요.', toolOptions: { type: 'bar', title: '가람도 지역별 넓이', data: AREA_DATA, unit: '칸', xLabel: '지역', yLabel: '칸 수', given: [0] }, target: { build: true }, difficulty: 0.15,
                    levels: { easy: { toolOptions: { given: [0, 1, 2] } }, challenge: { toolOptions: { given: [] } } } },
                  { prompt: '인구 막대그래프를 보고, 인구가 두 번째로 많은 지역을 골라 보세요.', toolOptions: { type: 'bar', mode: 'read', title: '가람도 지역별 인구', data: POP_DATA, unit: '만 명', scale: 5, xLabel: '지역', choices: ['나래시', '한별시', '가람시'], why: ['', '한별시보다 긴 막대가 둘 있어요.', '가람시는 가장 긴 막대예요.'], explain: '가장 긴 막대는 가람시(45만 명), 두 번째는 나래시(32만 명)예요.' }, target: { pick: 0 }, difficulty: 0.15 },
                  { prompt: '인구 막대그래프를 보고 가람시의 인구가 몇 만 명인지 쓰세요.', toolOptions: { type: 'bar', mode: 'read', title: '가람도 지역별 인구', data: POP_DATA, unit: '만 명', scale: 5, xLabel: '지역', question: '가람시의 인구는 몇 만 명인가요?' }, target: { value: 45 }, difficulty: 0.2 },
                ],
              },
              {
                id: 'a3', title: '활동 3. 사실일까, 생각일까?', minutes: 9, tool: 'mindmap',
                task: '카드의 문장을 자료로 확인할 수 있는 사실과, 자료만으로는 알 수 없는 생각으로 나누어요.',
                teacher: '"인구가 많은 가람시가 가장 좋은 곳일까요?" 인구가 많은 것은 자료로 알 수 있는 사실이지만 "좋은 곳"은 사람마다 다른 생각이라는 것을 짚는다. 은빛군은 사람이 적어 살기 나쁘다는 카드를 사실로 놓는 학생에게 "자료 어디에 그렇게 쓰여 있나요?"라고 묻는다.',
                levels: { easy: { live: true }, base: {}, challenge: {} },
                items: [
                  { prompt: '문장 카드를 사실과 생각 가지로 나누어 보세요.', toolOptions: { topic: '가람도 자료', slots: ['자료로 알 수 있는 사실', '자료만으로는 알 수 없는 생각'], cards: ['가람시 인구는 45만 명이에요', '은빛군이 가장 넓어요', '인구가 많은 가람시가 가장 좋아요', '은빛군은 사람이 적어 살기 나빠요'] }, target: { sort: { '자료로 알 수 있는 사실': ['가람시 인구는 45만 명이에요', '은빛군이 가장 넓어요'], '자료만으로는 알 수 없는 생각': ['인구가 많은 가람시가 가장 좋아요', '은빛군은 사람이 적어 살기 나빠요'] } }, difficulty: 0.2,
                    levels: { challenge: { prompt: '문장 카드 여섯 장을 사실과 생각 가지로 나누어 보세요.', toolOptions: { cards: ['가람시 인구는 45만 명이에요', '은빛군이 가장 넓어요', '인구가 많은 가람시가 가장 좋아요', '은빛군은 사람이 적어 살기 나빠요', '한별시 인구는 18만 명이에요', '은빛군에 가면 누구나 즐거워요'] }, target: { sort: { '자료로 알 수 있는 사실': ['가람시 인구는 45만 명이에요', '은빛군이 가장 넓어요', '한별시 인구는 18만 명이에요'], '자료만으로는 알 수 없는 생각': ['인구가 많은 가람시가 가장 좋아요', '은빛군은 사람이 적어 살기 나빠요', '은빛군에 가면 누구나 즐거워요'] } } } },
                    conclude: '인구가 많다는 것은 사실이지만, 그래서 더 좋은 지역인지는 사람마다 다른 생각이에요.' },
                  { prompt: '자료로 확인할 수 있는 문장만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '자료로 확인', cards: ['한별시 인구는 들꽃군의 세 배예요', '솔빛군은 인구가 가장 적어요', '나래시 사람들은 모두 부자예요', '들꽃군이 가장 아름다워요'] }, target: { pick: ['한별시 인구는 들꽃군의 세 배예요', '솔빛군은 인구가 가장 적어요'] }, difficulty: 0.25,
                    levels: { easy: { toolOptions: { cards: ['한별시 인구는 들꽃군의 세 배예요', '솔빛군은 인구가 가장 적어요', '들꽃군이 가장 아름다워요'] } }, challenge: { prompt: '자료로 확인할 수 있는 문장만 모두 골라 바구니에 넣어 보세요. 세 장이에요.', toolOptions: { cards: ['한별시 인구는 들꽃군의 세 배예요', '솔빛군은 인구가 가장 적어요', '나래시 사람들은 모두 부자예요', '들꽃군이 가장 아름다워요', '가람시는 인구가 가장 많아요', '가람시는 너무 복잡해서 살기 싫어요'] }, target: { pick: ['한별시 인구는 들꽃군의 세 배예요', '솔빛군은 인구가 가장 적어요', '가람시는 인구가 가장 많아요'] } } } },
                  { prompt: '두 지역을 견준 문장과 그 근거 자료를 이어 보세요.', toolOptions: { mode: 'match', topic: '견주기와 근거', slots: [{ id: 'm1', label: '은빛군은 한별시보다 넓어요' }, { id: 'm2', label: '나래시는 은빛군보다 인구가 많아요' }], cards: ['칸 수: 은빛군 7칸, 한별시 5칸', '인구: 나래시 32만, 은빛군 9만', '은빛군은 들꽃군과 맞닿아 있어요'] }, target: { match: { m1: '칸 수: 은빛군 7칸, 한별시 5칸', m2: '인구: 나래시 32만, 은빛군 9만' } }, difficulty: 0.2,
                    levels: { challenge: { toolOptions: { cards: ['칸 수: 은빛군 7칸, 한별시 5칸', '인구: 나래시 32만, 은빛군 9만', '은빛군은 들꽃군과 맞닿아 있어요', '나래시가 은빛군보다 살기 좋아요'] } } } },
                ],
              },
            ],
          },
          {
            id: 'wrapup', title: '정리', minutes: 8,
            teacher: '"인구가 많은 지역과 넓은 지역은 늘 같을까요?" 은빛군과 나래시를 예로 다시 견주게 한다. 출구 2번을 "사실"로 고른 학생이 많으면 다음 시간 소개 문장을 쓸 때 사실과 생각을 다시 나누어 본다.',
            exitTicket: [
              { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '가람도 지역별 넓이', data: AREA_DATA, unit: '칸', xLabel: '지역', choices: ['한별시', '은빛군', '가람시'], why: ['한별시보다 긴 막대가 있어요.', '', '가람시는 6칸이에요.'], explain: '은빛군 막대가 7칸으로 가장 길어요.' }, prompt: '넓이 막대그래프를 보고 가장 넓은 지역을 고르세요.', target: { pick: 1 }, difficulty: 0.1 },
              { type: 'choice', prompt: '"인구가 많은 지역이 더 좋은 지역이에요."는 자료로 알 수 있는 사실인가요?', options: ['사실이에요', '사람마다 다른 생각이에요'], answer: 1, difficulty: 0.15, explain: '인구 수는 자료로 알 수 있지만, 어느 곳이 더 좋은지는 사람마다 다르게 생각해요.' },
              { type: 'choice', prompt: '한별시(18만 명)와 들꽃군(6만 명)의 인구를 바르게 견준 것은?', options: ['한별시가 12만 명 더 많아요', '들꽃군이 더 많아요', '두 곳이 같아요'], answer: 0, difficulty: 0.2, explain: '18만 명 − 6만 명 = 12만 명이니 한별시가 12만 명 더 많아요.' },
              { type: 'mood', prompt: '오늘 자료 읽기는 어땠나요?' },
            ],
          },
        ],
        worksheet: {
          title: '인구와 넓이 자료 견주기',
          items: [
            { type: 'figure', prompt: '인구 지도를 보고 가장 진한 지역과 가장 옅은 지역을 쓰세요.', tool: 'map', options: W(GARAM_POP, { regionValues: true }), figures: [{ caption: '가람도 지역별 인구(만 명)' }], answer: '가장 진한 곳 가람시, 옅은 곳 솔빛군·들꽃군·은빛군(가장 적은 곳 솔빛군)' },
            { type: 'table', prompt: '두 지역의 자료를 표로 정리하세요.', columns: ['지역', '인구(만 명)', '넓이(칸)'], cells: [['나래시', '', ''], ['은빛군', '', '']], answer: '나래시 32·4, 은빛군 9·7' },
            { type: 'blank', prompt: '표를 보고 빈칸을 채우세요.', text: '은빛군은 나래시보다 넓이가 ___지만, 인구는 ___요.', answer: '넓, 적어' },
            { type: 'choice', prompt: '자료로 알 수 있는 사실에 ○ 하세요.', options: ['가람시는 인구가 가장 많아요', '가람시가 가장 살기 좋아요', '은빛군 사람들은 외로워요'], answer: '가람시는 인구가 가장 많아요' },
            { type: 'short', prompt: '두 지역을 자료로 견준 문장을 하나 쓰세요.' },
          ],
          easy: {
            note: '색이 진할수록 인구가 많아요. 사실은 자료에 쓰여 있는 것, 생각은 사람마다 다른 것.',
            items: [
              { type: 'figure', prompt: '인구 지도에서 가장 진한 지역을 찾아 ○ 하세요.', tool: 'map', options: W(GARAM_POP, { regionValues: true }), figures: [{ caption: '가람도 지역별 인구(만 명)' }], answer: '가람시' },
              { type: 'choice', prompt: '더 넓은 지역에 ○ 하세요.', options: ['은빛군(7칸)', '나래시(4칸)'], answer: '은빛군(7칸)' },
              { type: 'choice', prompt: '사실에 ○ 하세요.', options: ['가람시 인구는 45만 명이에요', '가람시가 가장 멋져요'], answer: '가람시 인구는 45만 명이에요' },
              { type: 'short', prompt: '우리 반에서 가장 많은 친구가 좋아하는 과목을 어떻게 알 수 있을지 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '지도에 인구 수가 보이고, 그래프 막대에 값이 보이며, 카드를 맞게 놓으면 초록 테두리가 생겨요.',
          base: '인구 지도는 수와 진하기를 함께, 그래프는 눈금을 읽어 답해요.',
          challenge: '활동 1 첫 문항은 수 없이 진하기 범례만 보고, 활동 2 첫 문항은 미리 그려 둔 막대 없이 모두 그려요. 활동 3에는 사실·생각 카드가 더 섞여 나와요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 인구가 많은 지역이 언제나 더 좋은 지역이라고 견주어 말한다 → 사실과 생각을 나누는 활동 3. ② 넓은 지역에 사람이 많이 산다고 여긴다 → 은빛군(넓지만 인구 적음)과 나래시를 견준다. ③ 막대그래프 눈금 한 칸을 1로 읽는다 → 눈금 한 칸이 5만 명임을 먼저 읽게 한다. 이 차시의 수는 모두 지어낸 것임을 학생에게 말해 준다.',
      }),
      // ───────────────────────── 12차시 ─────────────────────────
      L(12, {
        title: '기온 그래프를 읽고 들꽃군 소개 문장 쓰기',
        objective: '기온 막대그래프와 지도에서 지역의 특징을 찾아, 자료로 뒷받침되는 지역 소개 문장으로 옮겨 쓸 수 있다.',
        standards: S2,
        illustration: {
          prompt: ILL('a child writing a postcard about a county with wildflower fields, next to a bar chart of monthly temperatures with a sun above the tallest summer bar'),
          scene: { viewBox: [480, 270], layers: [
            { motif: 'sun', x: 400, y: 58, s: 0.9 }, { motif: 'cloud', x: 120, y: 52 }, { motif: 'hills', y: 206 },
            { motif: 'flower', x: 120, y: 224 }, { motif: 'flower', x: 160, y: 228, color: 'lavender' }, { motif: 'flower', x: 200, y: 224, color: 'buttercup' }, { motif: 'house', x: 330, y: 222 },
            { motif: 'text', x: 240, y: 140, text: '들꽃군을 소개합니다', size: 22 },
          ] },
        },
        stages: [
          {
            id: 'intro', title: '도입', minutes: 5,
            teacher: '"다른 지역 친구에게 우리 지역을 소개한다면 무엇을 말해 주고 싶나요?" 자리, 날씨, 사람 수 같은 답을 모은 뒤, 오늘은 자료에서 찾은 사실로만 소개 문장을 쓴다고 알린다. 시연 단추로 들꽃군 월별 기온 막대그래프를 보여 주며 가장 긴 막대가 어느 달인지 함께 찾는다.',
            student: '들꽃군의 기온 그래프에서 가장 더운 달과 가장 추운 달을 찾아봅시다.',
            demo: { tool: 'chart', options: { type: 'bar', title: '들꽃군 월별 평균 기온', data: DEUL_TEMP, unit: '°C', scale: 2, xLabel: '달', yLabel: '기온', showValues: true, showTable: false }, sequence: [{ build: true }] },
          },
          {
            id: 'main', title: '전개', minutes: 27,
            activities: [
              {
                id: 'a1', title: '활동 1. 기온 그래프 읽고 그리기', minutes: 10, tool: 'chart',
                task: '막대그래프를 읽고 답하거나, 표를 보고 막대를 올려 그래프를 완성해요. 눈금 한 칸이 몇 °C인지 먼저 읽어요.',
                teacher: '"눈금 한 칸은 몇 °C인가요?" 먼저 읽게 한 뒤 답하게 한다. 3번은 이웃한 두 막대의 차이를 하나씩 견주어야 한다. 4번은 한별시 그래프를 완성한 뒤 들꽃군과 견주어 "한별시가 조금 더 서늘하다"는 특징을 찾게 한다.',
                levels: { easy: { showValues: true }, base: {}, challenge: {} },
                items: [
                  { prompt: '들꽃군에서 평균 기온이 가장 높은 달을 골라 보세요.', toolOptions: { type: 'bar', mode: 'read', title: '들꽃군 월별 평균 기온', data: DEUL_TEMP, unit: '°C', scale: 2, xLabel: '달', choices: ['5월', '7월', '9월'], why: ['5월보다 긴 막대가 있어요.', '', '9월 막대는 7월보다 짧아요.'], explain: '7월 막대가 26°C로 가장 길어요.' }, target: { pick: 1 }, difficulty: 0.08 },
                  { prompt: '들꽃군의 5월 평균 기온은 몇 °C인지 쓰세요.', toolOptions: { type: 'bar', mode: 'read', title: '들꽃군 월별 평균 기온', data: DEUL_TEMP, unit: '°C', scale: 2, xLabel: '달', question: '5월 평균 기온은 몇 °C인가요?' }, target: { value: 18 }, difficulty: 0.15 },
                  { prompt: '기온이 가장 많이 오른 때는 언제인가요?', toolOptions: { type: 'bar', mode: 'read', title: '들꽃군 월별 평균 기온', data: DEUL_TEMP, unit: '°C', scale: 2, xLabel: '달', choices: ['1월 → 3월', '3월 → 5월', '5월 → 7월'], why: ['4°C 올랐어요. 더 많이 오른 때가 있어요.', '', '8°C 올랐어요. 더 많이 오른 때가 있어요.'], explain: '3월 7°C에서 5월 18°C로 11°C나 올랐어요.' }, target: { pick: 1 }, difficulty: 0.3,
                    predict: { q: '봄과 여름 가운데 언제 기온이 더 많이 오를까요?', options: ['봄(3월→5월)', '여름(5월→7월)'], answer: 0 } },
                  { prompt: '한별시 월별 평균 기온 표를 보고 막대그래프를 완성해 보세요.', toolOptions: { type: 'bar', title: '한별시 월별 평균 기온', data: HANBYEOL_TEMP, unit: '°C', scale: 2, xLabel: '달', yLabel: '기온', given: [0, 1] }, target: { build: true }, difficulty: 0.2,
                    levels: { easy: { toolOptions: { given: [0, 1, 2, 3] } }, challenge: { toolOptions: { given: [] } } },
                    conclude: '한별시는 달마다 들꽃군보다 기온이 조금 낮아요. 두 지역을 견주면 특징이 더 잘 보여요.' },
                ],
              },
              {
                id: 'a2', title: '활동 2. 자료를 소개 문장으로', minutes: 9, tool: 'story',
                task: '말풍선 빈칸에 알맞은 낱말 카드를 넣어 들꽃군 소개 문장을 완성해요. 지도(9차시 가람도)와 그래프를 근거로 골라요.',
                teacher: '"이 문장의 근거는 어느 자료에 있나요?" 카드를 넣을 때마다 지도인지 그래프인지 말하게 한다. 3번의 "한별시보다 여름 기온이 조금 ___"은 활동 1의 두 그래프를 견주어야 한다.',
                levels: { easy: { live: true }, base: {}, challenge: {} },
                items: [
                  { prompt: '들꽃군의 자리와 날씨를 소개하는 문장을 완성해 보세요.', toolOptions: { mode: 'fill', cards: ['서', '동', '7월', '1월'], slots: [{ id: 'b1', who: '민지', motif: 'flower', label: '들꽃군은 가람도의 ___쪽에 있어요.' }, { id: 'b2', who: '민지', motif: 'sun', label: '가장 더운 달은 ___이에요.' }] }, target: { fill: { b1: '서', b2: '7월' } }, difficulty: 0.15,
                    levels: { challenge: { toolOptions: { cards: ['서', '동', '북', '7월', '1월', '3월'] } } } },
                  { prompt: '들꽃군의 인구와 이웃을 소개하는 문장을 완성해 보세요.', toolOptions: { mode: 'fill', cards: ['적어요', '많아요', '맞닿아', '떨어져'], slots: [{ id: 'c1', who: '준호', motif: 'house', label: '들꽃군 인구는 한별시보다 ___.' }, { id: 'c2', who: '준호', motif: 'tree', label: '들꽃군은 은빛군과 ___ 있어요.' }] }, target: { fill: { c1: '적어요', c2: '맞닿아' } }, difficulty: 0.2,
                    levels: { challenge: { toolOptions: { cards: ['적어요', '많아요', '같아요', '맞닿아', '떨어져'] } } } },
                  { prompt: '두 그래프를 견주어 기온을 소개하는 문장을 완성해 보세요.', toolOptions: { mode: 'fill', cards: ['올라요', '내려가요', '낮아요', '높아요'], slots: [{ id: 'd1', who: '서연', motif: 'sun', label: '들꽃군은 1월부터 7월까지 기온이 계속 ___.' }, { id: 'd2', who: '서연', motif: 'cloud', label: '한별시는 들꽃군보다 여름 기온이 조금 ___.' }] }, target: { fill: { d1: '올라요', d2: '낮아요' } }, difficulty: 0.25,
                    levels: { challenge: { toolOptions: { cards: ['올라요', '내려가요', '그대로예요', '낮아요', '높아요', '같아요'] } } },
                    conclude: '두 지역의 자료를 견주면 "조금 더 서늘해요"처럼 특징을 또렷하게 말할 수 있어요.' },
                ],
              },
              {
                id: 'a3', title: '활동 3. 소개 카드에 넣을 문장 고르기', minutes: 8, tool: 'mindmap',
                task: '들꽃군 소개 카드에 넣을 문장을 골라요. 자료로 뒷받침되는 문장만 넣어요.',
                teacher: '"사람들이 모두 친절하다는 것은 어느 자료로 알 수 있나요?" 근거 없는 칭찬이나 짐작은 소개 카드에서 빼게 한다. 3번은 자료마다 알려 주는 것이 다르다는 것을 지도와 그래프로 나누어 보게 한다.',
                levels: { easy: { live: true }, base: {}, challenge: {} },
                items: [
                  { prompt: '자료로 뒷받침되는 소개 문장만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '들꽃군 소개 카드', cards: ['7월 평균 기온은 26°C예요', '가람도의 서쪽에 있어요', '날씨가 좋아 모두가 행복해요', '사람들이 모두 친절해요', '은빛군과 맞닿아 있어요'] }, target: { pick: ['7월 평균 기온은 26°C예요', '가람도의 서쪽에 있어요', '은빛군과 맞닿아 있어요'] }, difficulty: 0.2,
                    levels: { easy: { prompt: '자료로 뒷받침되는 소개 문장 두 장을 골라 바구니에 넣어 보세요.', toolOptions: { cards: ['7월 평균 기온은 26°C예요', '가람도의 서쪽에 있어요', '날씨가 좋아 모두가 행복해요'] }, target: { pick: ['7월 평균 기온은 26°C예요', '가람도의 서쪽에 있어요'] } }, challenge: { prompt: '자료로 뒷받침되는 소개 문장만 모두 골라 바구니에 넣어 보세요. 네 장이에요.', toolOptions: { cards: ['7월 평균 기온은 26°C예요', '가람도의 서쪽에 있어요', '날씨가 좋아 모두가 행복해요', '사람들이 모두 친절해요', '은빛군과 맞닿아 있어요', '가람도에서 가장 살기 좋은 곳이에요', '1월 평균 기온은 3°C예요'] }, target: { pick: ['7월 평균 기온은 26°C예요', '가람도의 서쪽에 있어요', '은빛군과 맞닿아 있어요', '1월 평균 기온은 3°C예요'] } } } },
                  { prompt: '알고 싶은 것을 어느 자료에서 찾을 수 있는지 나누어 보세요.', toolOptions: { topic: '어느 자료에서?', slots: ['지도', '기온 그래프'], cards: ['맞닿은 이웃 지역', '지역이 있는 방위', '달마다 바뀌는 기온', '가장 추운 달'] }, target: { sort: { 지도: ['맞닿은 이웃 지역', '지역이 있는 방위'], '기온 그래프': ['달마다 바뀌는 기온', '가장 추운 달'] } }, difficulty: 0.15,
                    levels: { challenge: { prompt: '알고 싶은 것을 어느 자료에서 찾을 수 있는지 나누어 보세요. 두 자료 어디에도 없는 것은 그대로 두세요.', toolOptions: { cards: ['맞닿은 이웃 지역', '지역이 있는 방위', '달마다 바뀌는 기온', '가장 추운 달', '들꽃 축제 날짜'] } } } },
                  { prompt: '소개 문장을 쓰는 차례대로 카드를 놓아 보세요.', toolOptions: { mode: 'order', topic: '소개 글 쓰기', cards: ['자료를 모아요', '자료에서 특징을 찾아요', '특징을 문장으로 써요', '친구와 읽고 고쳐요'] }, target: { order: ['자료를 모아요', '자료에서 특징을 찾아요', '특징을 문장으로 써요', '친구와 읽고 고쳐요'] }, difficulty: 0.1,
                    levels: { challenge: { prompt: '소개 문장을 쓰는 차례대로 카드를 놓아 보세요. 차례에 들어가지 않는 카드가 하나 있어요.', toolOptions: { slots: 4, cards: ['자료를 모아요', '자료에서 특징을 찾아요', '특징을 문장으로 써요', '친구와 읽고 고쳐요', '자료 없이 생각나는 대로 써요'] } } } },
                ],
              },
            ],
          },
          {
            id: 'wrapup', title: '정리', minutes: 8,
            teacher: '"오늘 쓴 소개 문장 가운데 근거 자료를 말할 수 있는 문장에 밑줄을 그어 볼까요?" 짝과 바꿔 읽고 근거가 없는 문장을 찾아 주게 한다. 출구 3번에 쓴 문장은 15차시 안내 카드에 다시 쓴다고 알린다.',
            exitTicket: [
              { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '한별시 월별 평균 기온', data: HANBYEOL_TEMP, unit: '°C', scale: 2, xLabel: '달', choices: ['1월', '3월', '11월'], why: ['', '3월 막대는 1월보다 길어요.', '11월 막대는 1월보다 길어요.'], explain: '1월 막대가 1°C로 가장 짧아요.' }, prompt: '한별시에서 평균 기온이 가장 낮은 달을 고르세요.', target: { pick: 0 }, difficulty: 0.1 },
              { type: 'choice', prompt: '지역 소개 카드에 넣기 알맞은 문장은 무엇인가요?', options: ['들꽃군은 가람도의 서쪽에 있어요', '들꽃군이 세상에서 가장 멋져요', '들꽃군 사람들은 모두 꽃을 좋아해요'], answer: 0, difficulty: 0.1, explain: '지도로 확인할 수 있는 사실이에요. 나머지는 자료로 알 수 없는 생각이에요.' },
              { type: 'short', prompt: '들꽃군 그래프나 지도에서 찾은 특징 하나를 소개 문장으로 쓰세요.', answer: '예: 들꽃군은 7월 평균 기온이 26°C로 가장 더워요. — 자료에서 찾은 사실인지 본다', difficulty: 0.2 },
              { type: 'mood', prompt: '오늘 소개 문장 쓰기는 어땠나요?' },
            ],
          },
        ],
        worksheet: {
          title: '자료로 지역 소개하기',
          items: [
            { type: 'figure', prompt: '들꽃군 기온 그래프를 보고 가장 더운 달과 가장 추운 달을 쓰세요.', tool: 'chart', options: { type: 'bar', mode: 'read', title: '들꽃군 월별 평균 기온', data: DEUL_TEMP, unit: '°C', scale: 2, xLabel: '달' }, figures: [{ caption: '들꽃군 월별 평균 기온' }], answer: '가장 더운 달 7월(26°C), 가장 추운 달 1월(3°C)' },
            { type: 'table', prompt: '두 지역의 기온을 견주어 표를 채우세요.', columns: ['달', '들꽃군(°C)', '한별시(°C)', '더 따뜻한 곳'], cells: [['1월', '3', '1', ''], ['7월', '26', '24', '']], answer: '두 달 모두 들꽃군' },
            { type: 'blank', prompt: '자료를 보고 소개 문장을 완성하세요.', text: '들꽃군은 가람도의 ___쪽에 있고, 가장 더운 달은 ___이에요.', answer: '서, 7월' },
            { type: 'choice', prompt: '자료로 뒷받침되는 문장에 ○ 하세요.', options: ['들꽃군 5월 평균 기온은 18°C예요', '들꽃군은 언제나 날씨가 좋아요', '들꽃군 사람들은 모두 친절해요'], answer: '들꽃군 5월 평균 기온은 18°C예요' },
            { type: 'short', prompt: '우리 지역을 소개하는 문장을 자료를 근거로 하나 쓰고, 어느 자료에서 찾았는지 쓰세요.' },
          ],
          easy: {
            note: '가장 긴 막대 = 가장 높은 기온. 소개 문장은 자료에서 찾은 사실로 써요.',
            items: [
              { type: 'figure', prompt: '그래프에서 가장 긴 막대에 ○ 하세요.', tool: 'chart', options: { type: 'bar', mode: 'read', title: '들꽃군 월별 평균 기온', data: DEUL_TEMP, unit: '°C', scale: 2, xLabel: '달' }, figures: [{ caption: '들꽃군 월별 평균 기온' }], answer: '7월' },
              { type: 'blank', prompt: '빈칸을 채우세요.', text: '들꽃군에서 가장 더운 달은 ___이에요.', answer: '7월' },
              { type: 'choice', prompt: '자료로 알 수 있는 것에 ○ 하세요.', options: ['7월 기온', '사람들의 마음'], answer: '7월 기온' },
              { type: 'short', prompt: '우리 지역의 좋은 점 하나를 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '막대 끝에 기온 값이 보이고, 카드를 맞게 놓으면 초록 테두리가 생겨요.',
          base: '눈금을 읽어 값을 구하고, 지도·그래프를 근거로 낱말을 골라요.',
          challenge: '한별시 그래프를 처음부터 모두 그리고, 활동 2·3에서 헷갈리는 낱말·문장 카드와 차례에 들어가지 않는 카드를 골라내요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 자료에 없는 칭찬·짐작을 소개 문장에 넣는다 → "근거는 어느 자료?"를 늘 묻는다. ② 막대그래프 눈금 한 칸(2°C)을 1°C로 읽는다. ③ 차이를 견줄 때 막대 길이만 보고 수를 빼지 않는다 → 이웃한 두 달의 차이를 표에 적어 보게 한다. 기온 자료는 지어낸 값이며 실제 우리 지역 기온은 기상청 누리집에서 찾을 수 있다고 알려 준다.',
      }),
      // ───────────────────────── 13차시 ─────────────────────────
      L(13, {
        title: '땅의 높낮이와 물길로 땅의 쓰임 읽기',
        objective: '지도의 높이 층(등고선)과 강·바다를 읽어 땅의 높낮이를 말하고, 땅의 모습과 땅의 쓰임을 까닭과 함께 이을 수 있다.',
        standards: S2,
        illustration: {
          prompt: ILL('a stacked paper terrain model of a valley, with a tall green peak in one corner, terraced orchards on the slopes, rice paddies along a winding river and a small harbor where the river meets the sea'),
          scene: { viewBox: [480, 270], layers: [
            { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 200, y: 48 }, { motif: 'mountain', x: 90, y: 210, s: 1.1 }, { motif: 'mountain', x: 170, y: 214, s: 0.7, color: 'mint' },
            { motif: 'hills', y: 210 }, { motif: 'tree', x: 250, y: 216 }, { motif: 'house', x: 320, y: 224, color: 'peach' }, { motif: 'wave', x: 420, y: 234 },
            { motif: 'text', x: 240, y: 140, text: '높은 곳과 낮은 곳에는 무엇이 있을까요?', size: 20 },
          ] },
        },
        stages: [
          {
            id: 'intro', title: '도입', minutes: 5,
            teacher: '두꺼운 종이를 크기 순서로 몇 장 겹쳐 쌓아 산 모형을 보여 주며 "위에서 내려다보면 어떻게 보일까요?"라고 묻는다. 종이 가장자리 선이 여러 겹 겹친 곳이 높은 곳이라는 반응을 기다린다. 시연 단추로 산들마을 지도에서 가장 높은 높은봉과 강이 흐르는 칸에 핀이 꽂히는 모습을 보여 준다.',
            student: '종이를 겹겹이 쌓은 산을 위에서 보면 어떤 무늬가 보일지 생각해 봅시다.',
            demo: { tool: 'map', options: SANDEUL, sequence: [{ highest: true }, { river: true }] },
          },
          {
            id: 'main', title: '전개', minutes: 27,
            activities: [
              {
                id: 'a1', title: '활동 1. 높이 층으로 땅의 높낮이 찾기', minutes: 9, tool: 'map', options: SANDEUL,
                task: '종이 층이 많이 쌓이고 색이 진할수록 높은 땅이에요. 오른쪽 높이 범례를 보고 알맞은 칸에 핀을 꽂아요.',
                teacher: '"층이 몇 장 쌓였는지 세어 보세요." 높이 범례의 색과 지도의 색을 견주게 한다. 도전 단계는 색 없이 등고선만 보이므로, 선이 여러 겹 둘러싼 안쪽일수록 높다는 것을 짚는다. 강과 바다를 헷갈리는 학생에게 강은 가늘고 길게 이어진다는 것을 보여 준다.',
                levels: { easy: { names: true }, base: {}, challenge: { terrainView: 'contour' } },
                items: [
                  { prompt: '산들마을에서 가장 높은 곳에 핀을 꽂아 보세요.', target: { highest: true }, difficulty: 0.1 },
                  { prompt: '높이 범례에서 "산"으로 나타낸 높이의 칸 하나를 찾아 핀을 꽂아 보세요.', target: { height: 2 }, difficulty: 0.2,
                    predict: { q: '"산" 높이의 칸은 어디쯤 많을까요?', options: ['높은봉 둘레', '바닷가'], answer: 0 } },
                  { prompt: '높은 곳에서 바다로 흘러가는 강이 지나는 칸 하나에 핀을 꽂아 보세요.', target: { river: true }, difficulty: 0.1 },
                  { prompt: '등고선만 있는 지도예요. "높은 산" 높이의 칸 하나에 핀을 꽂아 보세요.', toolOptions: { terrainView: 'contour' }, target: { height: 3 }, difficulty: 0.3,
                    conclude: '등고선이 여러 겹 둘러싼 안쪽일수록 높아요. 색이 없어도 선을 세면 높이를 알 수 있어요.' },
                ],
              },
              {
                id: 'a2', title: '활동 2. 높낮이와 물길 읽기', minutes: 9, tool: 'map', options: W(SANDEUL, { readOnly: true }),
                task: '높이 범례와 강·바다를 보고 알맞은 답을 아래 보기에서 골라요.',
                teacher: '"강물은 높은 곳에서 낮은 곳으로 흘러요. 그럼 이 강은 어디서 어디로 흐를까요?" 지도에서 강의 처음과 끝의 높이를 견주게 한다. 4번은 등고선만 있는 지도다. 선이 촘촘하게 겹친 곳이 높고 가파르다는 것을 짚는다.',
                levels: { easy: { names: true }, base: {}, challenge: { terrainView: 'contour' } },
                items: [
                  { prompt: '산들마을의 강물은 어느 쪽으로 흐를까요?', toolOptions: { ask: { choices: ['높은 북쪽에서 낮은 남동쪽 바다로', '바다에서 높은 산 쪽으로', '흐르지 않고 고여 있어요'], why: [null, '물은 낮은 곳에서 높은 곳으로 거슬러 흐르지 않아요.', '강은 높은 곳에서 낮은 곳으로 흘러요.'] } }, target: { pick: 0 }, difficulty: 0.15 },
                  { prompt: '마을이 있는 땅은 높이 범례에서 무엇으로 나타냈나요?', toolOptions: { names: true, ask: { choices: ['낮은 땅', '언덕', '높은 산'], why: [null, '마을 칸에는 층이 쌓여 있지 않아요.', '높은 산은 높은봉 둘레예요.'] } }, target: { pick: 0 }, difficulty: 0.15 },
                  { prompt: '높은봉에서 바다 쪽으로 갈수록 땅의 높이는 어떻게 되나요?', toolOptions: { ask: { choices: ['점점 낮아져요', '점점 높아져요', '높이가 모두 같아요'], why: [null, '바다 쪽 칸의 층 수를 세어 보세요.', '칸마다 쌓인 층 수가 달라요.'] } }, target: { pick: 0 }, difficulty: 0.1 },
                  { prompt: '등고선만 있는 지도에서 선이 여러 겹 모인 곳은 어떤 곳인가요?', toolOptions: { terrainView: 'contour', ask: { choices: ['높은 곳', '바다', '평평한 들'], why: [null, '바다에는 등고선이 없어요.', '평평한 들에는 등고선이 거의 없어요.'] } }, target: { pick: 0 }, difficulty: 0.2 },
                ],
              },
              {
                id: 'a3', title: '활동 3. 땅의 모습과 쓰임 잇기', minutes: 9, tool: 'mindmap',
                task: '땅의 모습에 따라 사람들이 땅을 어떻게 쓰는지 카드를 나누고, 그 까닭과 이어요.',
                teacher: '"논은 왜 산꼭대기가 아니라 강가에 있을까요?" 물을 대기 쉽고 평평하다는 까닭을 끌어낸다. 2번에서 까닭을 고를 때 지도에서 그 자리의 높이와 물길을 다시 짚게 한다. 땅의 쓰임은 지역마다 다를 수 있어, 우리 지역 지도에서 같은 관계를 찾아보는 것으로 이어 간다.',
                levels: { easy: { live: true }, base: {}, challenge: {} },
                items: [
                  { prompt: '산들마을의 땅 쓰임 카드를 땅의 모습 가지로 나누어 보세요.', toolOptions: { topic: '산들마을의 땅', slots: ['높은 산', '언덕', '강가 낮은 땅', '바닷가'], cards: ['숲', '과수원', '논', '항구', '해수욕장'] }, target: { sort: { '높은 산': ['숲'], 언덕: ['과수원'], '강가 낮은 땅': ['논'], 바닷가: ['항구', '해수욕장'] } }, difficulty: 0.2,
                    levels: { challenge: { prompt: '산들마을의 땅 쓰임 카드를 땅의 모습 가지로 나누어 보세요. 마을이 있는 땅의 높이도 지도에서 확인해요.', toolOptions: { cards: ['숲', '과수원', '논', '마을', '항구', '해수욕장'] }, target: { sort: { '높은 산': ['숲'], 언덕: ['과수원'], '강가 낮은 땅': ['논', '마을'], 바닷가: ['항구', '해수욕장'] } } } } },
                  { prompt: '땅의 쓰임과 그 까닭을 이어 보세요.', toolOptions: { mode: 'match', topic: '왜 거기에?', slots: [{ id: 'r1', label: '논이 강가에 많아요' }, { id: 'r2', label: '항구가 바닷가에 있어요' }, { id: 'r3', label: '높은 산에는 숲이 많아요' }], cards: ['물을 대기 쉽고 땅이 평평해서', '배가 드나들 수 있어서', '비탈이 가팔라 논밭을 만들기 어려워서', '사람이 가장 많이 살아서'] }, target: { match: { r1: '물을 대기 쉽고 땅이 평평해서', r2: '배가 드나들 수 있어서', r3: '비탈이 가팔라 논밭을 만들기 어려워서' } }, difficulty: 0.25,
                    levels: { challenge: { toolOptions: { cards: ['물을 대기 쉽고 땅이 평평해서', '배가 드나들 수 있어서', '비탈이 가팔라 논밭을 만들기 어려워서', '사람이 가장 많이 살아서', '바람이 많이 불어서'] } } },
                    conclude: '사람들은 땅의 높낮이와 물길에 맞추어 땅을 써요.' },
                  { prompt: '높은 산에서 하기에 알맞은 일만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '높은 산에서', cards: ['나무를 가꾸고 숲을 지켜요', '등산로를 만들어요', '벼농사를 지어요', '배를 대어요'] }, target: { pick: ['나무를 가꾸고 숲을 지켜요', '등산로를 만들어요'] }, difficulty: 0.15,
                    levels: { challenge: { toolOptions: { cards: ['나무를 가꾸고 숲을 지켜요', '등산로를 만들어요', '벼농사를 지어요', '배를 대어요', '큰 공장을 많이 지어요'] } } } },
                ],
              },
            ],
          },
          {
            id: 'wrapup', title: '정리', minutes: 8,
            teacher: '"우리 지역에서 가장 높은 곳은 어디이고, 그 둘레는 어떻게 쓰이나요?" 교사가 준비한 우리 지역 지형 지도(또는 디지털 지도의 지형 보기)를 함께 보며 산·강·들을 찾는다. 출구 2번에서 강이 바다에서 산으로 흐른다고 답한 학생이 많으면 높이 층을 다시 세어 보게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'map', options: W(SANDEUL, { terrainView: 'contour' }), prompt: '등고선만 있는 산들마을 지도에서 가장 높은 곳에 핀을 꽂으세요.', target: { highest: true }, difficulty: 0.2 },
              { type: 'choice', prompt: '강물은 보통 어떻게 흐르나요?', options: ['높은 곳에서 낮은 곳으로', '낮은 곳에서 높은 곳으로', '바다에서 산으로'], answer: 0, difficulty: 0.1, explain: '물은 높은 곳에서 낮은 곳으로 흘러 결국 바다에 닿아요.' },
              { type: 'choice', prompt: '벼농사를 짓는 논이 많기 알맞은 곳은 어디인가요?', options: ['강가의 낮고 평평한 땅', '가파른 산꼭대기', '바닷속'], answer: 0, difficulty: 0.1, explain: '논에는 물이 많이 필요해서 물을 대기 쉬운 강가의 평평한 땅이 알맞아요.' },
              { type: 'mood', prompt: '오늘 땅의 모습 읽기는 어땠나요?' },
            ],
          },
        ],
        worksheet: {
          title: '땅의 높낮이와 쓰임',
          items: [
            { type: 'figure', prompt: '산들마을 지도에서 가장 높은 곳에 ○, 강이 바다와 만나는 곳에 △ 하세요.', tool: 'map', options: SANDEUL, figures: [{ caption: '산들마을 (점이 많을수록 높은 땅)' }], answer: '○ 높은봉(북서쪽 끝), △ 남동쪽 바닷가' },
            { type: 'figure', prompt: '등고선만 있는 지도에서 높은 곳일수록 진하게 색칠하세요.', tool: 'map', options: W(SANDEUL, { terrainView: 'contour', names: false }), figures: [{ caption: '등고선으로 본 산들마을' }], answer: '북서쪽으로 갈수록 진하게' },
            { type: 'table', prompt: '땅의 모습과 쓰임, 그 까닭을 쓰세요.', columns: ['땅의 모습', '쓰임', '까닭'], cells: [['강가 낮은 땅', '논', ''], ['바닷가', '', ''], ['언덕', '', '']], answer: '논: 물을 대기 쉽고 평평해서 / 바닷가: 항구·해수욕장, 배가 드나들 수 있어서 / 언덕: 과수원, 비탈에서도 나무를 기를 수 있어서' },
            { type: 'choice', prompt: '등고선이 여러 겹 모인 곳에 대한 설명에 ○ 하세요.', options: ['높은 곳이에요', '바다예요', '평평한 들이에요'], answer: '높은 곳이에요' },
            { type: 'short', prompt: '우리 지역의 산이나 강 하나를 골라, 그 둘레 땅이 어떻게 쓰이는지 쓰세요.' },
          ],
          easy: {
            note: '층(점)이 많을수록 높은 땅이에요. 강물은 높은 곳에서 낮은 곳으로 흘러요.',
            items: [
              { type: 'figure', prompt: '산들마을 지도에서 가장 높은 곳에 ○ 하세요.', tool: 'map', options: SANDEUL, figures: [{ caption: '산들마을 (점이 많을수록 높은 땅)' }], answer: '높은봉' },
              { type: 'choice', prompt: '논이 많은 곳에 ○ 하세요.', options: ['강가 낮은 땅', '높은 산'], answer: '강가 낮은 땅' },
              { type: 'choice', prompt: '항구가 있는 곳에 ○ 하세요.', options: ['바닷가', '산꼭대기'], answer: '바닷가' },
              { type: 'draw', prompt: '산에서 바다까지 흐르는 강을 그려 보세요.' },
            ],
          },
        },
        differentiation: {
          easy: '장소 이름이 보이고, 높이를 색 층으로 보며, 카드를 맞게 놓으면 초록 테두리가 생겨요.',
          base: '높이 범례와 색 층을 견주어 높낮이를 찾아요.',
          challenge: '색 없이 등고선만 보고 높이를 읽고, 활동 3에서는 마을 카드까지 땅의 높이로 나누며 헷갈리는 까닭·일 카드를 골라내요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 넓게 칠해진 곳을 높은 곳으로 여긴다 → 넓이가 아니라 층(등고선) 수로 높이를 읽는다. ② 강이 바다에서 산으로 흐른다고 여긴다 → 강의 처음과 끝의 높이를 견준다. ③ 땅의 쓰임을 까닭 없이 외운다 → "왜 거기에?"를 늘 묻고, 물·평평함·바다 같은 조건과 잇게 한다. 산들마을은 지어낸 지도이고, 땅의 쓰임은 지역마다 다를 수 있다는 점도 함께 말한다.',
      }),
      // ───────────────────────── 14차시 ─────────────────────────
      L(14, {
        title: '누리집과 통계에서 지역 자료를 찾고 출처 적기',
        objective: '알고 싶은 지역 정보에 맞는 누리집·통계·디지털 지도를 고르고, 찾은 자료에 출처를 함께 적을 수 있다.',
        standards: S2,
        illustration: {
          prompt: ILL('two children at a laptop browsing a county website and a statistics chart, writing small source notes on index cards clipped beside the screen'),
          scene: { viewBox: [480, 270], layers: [
            { motif: 'cloud', x: 120, y: 50 }, { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'hills', y: 206 },
            { motif: 'house', x: 140, y: 222, color: 'lavender' }, { motif: 'tree', x: 250, y: 214 }, { motif: 'star', x: 360, y: 110, color: 'buttercup' },
            { motif: 'text', x: 240, y: 140, text: '이 자료는 어디에서 찾았나요?', size: 22 },
          ] },
        },
        stages: [
          {
            id: 'intro', title: '도입', minutes: 5,
            teacher: '칠판에 "들꽃군 인구는 6만 명"과 "들꽃군 인구는 6만 명(출처: 들꽃군청 누리집, 2026년 10월)" 두 줄을 적고 묻는다. "어느 쪽을 더 믿을 수 있을까요? 왜 그럴까요?" 어디서 가져왔는지 알면 다시 확인할 수 있다는 반응을 기다린다. 시연 단추로 알고 싶은 것을 찾을 곳별로 나누는 모습을 보여 준다.',
            student: '우리 지역에 대해 알고 싶은 것 한 가지와, 그것을 어디에서 찾을 수 있을지 생각해 봅시다.',
            demo: { tool: 'mindmap', options: { topic: '어디서 찾을까?', slots: ['시·군청 누리집', '통계 누리집'], cards: ['우리 군 축제 날짜', '여러 해 인구 변화'] }, sequence: [{ sort: { '시·군청 누리집': ['우리 군 축제 날짜'], '통계 누리집': ['여러 해 인구 변화'] } }] },
          },
          {
            id: 'main', title: '전개', minutes: 27,
            activities: [
              {
                id: 'a1', title: '활동 1. 어디에서 찾을까?', minutes: 9, tool: 'mindmap',
                task: '알고 싶은 정보 카드를 그 정보를 가장 잘 찾을 수 있는 곳으로 옮겨요.',
                teacher: '"축제 날짜는 누가 정해서 알릴까요?" 시·군청이 직접 알리는 소식은 시·군청 누리집, 여러 해 수를 견주는 표는 통계 누리집, 길과 걸리는 시간은 디지털 지도라는 것을 정리한다. 3번에서 누가 썼는지 모르는 글을 고르는 학생에게 "이 글을 쓴 사람을 확인할 수 있나요?"라고 묻는다.',
                levels: { easy: { live: true }, base: {}, challenge: {} },
                items: [
                  { prompt: '알고 싶은 정보 카드를 찾을 곳 가지로 나누어 보세요.', toolOptions: { topic: '어디서 찾을까?', slots: ['시·군청 누리집', '통계 누리집', '디지털 지도'], cards: ['우리 군 축제 날짜와 장소', '우리 군 문화유산 소개', '여러 해 인구 변화 표', '시·군별 인구 비교 표', '학교에서 박물관 가는 길', '공원까지 걸리는 시간'] }, target: { sort: { '시·군청 누리집': ['우리 군 축제 날짜와 장소', '우리 군 문화유산 소개'], '통계 누리집': ['여러 해 인구 변화 표', '시·군별 인구 비교 표'], '디지털 지도': ['학교에서 박물관 가는 길', '공원까지 걸리는 시간'] } }, difficulty: 0.2,
                    levels: { challenge: { prompt: '알고 싶은 정보 카드를 찾을 곳 가지로 나누어 보세요. 믿을 만한 곳이 아닌 카드는 그대로 두세요.', toolOptions: { cards: ['우리 군 축제 날짜와 장소', '우리 군 문화유산 소개', '여러 해 인구 변화 표', '시·군별 인구 비교 표', '학교에서 박물관 가는 길', '공원까지 걸리는 시간', '누가 썼는지 모르는 블로그 글', 'SNS에 떠도는 축제 소문'] } } } },
                  { prompt: '궁금한 질문과 그 답을 찾기 알맞은 곳을 이어 보세요.', toolOptions: { mode: 'match', topic: '질문과 찾을 곳', slots: [{ id: 'q1', label: '우리 군 축제는 언제 열릴까?' }, { id: 'q2', label: '10년 동안 인구는 어떻게 바뀌었을까?' }, { id: 'q3', label: '박물관까지 몇 분 걸릴까?' }], cards: ['시·군청 누리집', '통계 누리집', '디지털 지도 길찾기'] }, target: { match: { q1: '시·군청 누리집', q2: '통계 누리집', q3: '디지털 지도 길찾기' } }, difficulty: 0.15,
                    levels: { challenge: { toolOptions: { cards: ['시·군청 누리집', '통계 누리집', '디지털 지도 길찾기', '친구에게 들은 소문'] } } } },
                  { prompt: '지역 자료를 찾을 때 믿을 만한 곳만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '믿을 만한 곳', cards: ['시·군청 누리집', '국가 통계 누리집', '기상청 누리집', '누가 썼는지 모르는 글', '친구가 들었다는 소문'] }, target: { pick: ['시·군청 누리집', '국가 통계 누리집', '기상청 누리집'] }, difficulty: 0.15,
                    levels: { easy: { prompt: '지역 자료를 찾을 때 믿을 만한 곳 두 곳을 골라 바구니에 넣어 보세요.', toolOptions: { cards: ['시·군청 누리집', '국가 통계 누리집', '누가 썼는지 모르는 글'] }, target: { pick: ['시·군청 누리집', '국가 통계 누리집'] } }, challenge: { toolOptions: { cards: ['시·군청 누리집', '국가 통계 누리집', '기상청 누리집', '누가 썼는지 모르는 글', '친구가 들었다는 소문', '글쓴이를 알 수 없는 블로그 글'] } } },
                    conclude: '누가 만들었는지 분명하고 다시 확인할 수 있는 곳의 자료를 써요.' },
                ],
              },
              {
                id: 'a2', title: '활동 2. 출처를 적어요', minutes: 9, tool: 'mindmap',
                task: '자료 카드 아래 작은 줄이 출처예요. 출처가 바르게 적힌 자료를 고르고, 자료와 알맞은 출처를 이어요.',
                teacher: '"출처에는 무엇이 들어가야 할까요?" 어느 누리집(기관)인지와 언제 찾았는지가 들어가야 한다는 것을 정리한다. "인터넷"이라고만 쓴 것은 다시 찾아갈 수 없어 부족하다는 것을 짚는다. 자료를 옮겨 적기만 하고 출처를 빼먹는 것이 가장 흔한 실수라고 미리 알려 준다.',
                levels: { easy: { live: true }, base: {}, challenge: {} },
                items: [
                  { prompt: '출처가 바르게 적힌 자료 카드만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '안내 카드에 쓸 자료', cards: [{ id: 's1', text: '들꽃군 인구 6만 명', sub: '출처: 들꽃군청 누리집' }, { id: 's2', text: '들꽃군 인구 6만 명', sub: '출처 없음' }, { id: 's3', text: '7월 평균 26°C', sub: '출처: 기상청 누리집' }, { id: 's4', text: '축제는 10월', sub: '친구에게 들음' }] }, target: { pick: ['s1', 's3'] }, difficulty: 0.15,
                    levels: { challenge: { toolOptions: { cards: [{ id: 's1', text: '들꽃군 인구 6만 명', sub: '출처: 들꽃군청 누리집' }, { id: 's2', text: '들꽃군 인구 6만 명', sub: '출처 없음' }, { id: 's3', text: '7월 평균 26°C', sub: '출처: 기상청 누리집' }, { id: 's4', text: '축제는 10월', sub: '친구에게 들음' }, { id: 's5', text: '박물관은 9시에 열어요', sub: '출처: 인터넷' }] } } },
                    predict: { q: '같은 6만 명인데 어느 카드가 더 믿을 만할까요?', options: ['출처가 있는 카드', '둘이 같아요'], answer: 0 } },
                  { prompt: '출처로 알맞은 것과 부족한 것으로 나누어 보세요.', toolOptions: { topic: '출처 점검', slots: ['출처로 알맞아요', '출처로 부족해요'], cards: ['들꽃군청 누리집, 2026년 10월', '국가 통계 누리집의 인구 표', '인터넷', '어디선가 봤어요'] }, target: { sort: { '출처로 알맞아요': ['들꽃군청 누리집, 2026년 10월', '국가 통계 누리집의 인구 표'], '출처로 부족해요': ['인터넷', '어디선가 봤어요'] } }, difficulty: 0.2,
                    levels: { challenge: { prompt: '출처 카드 여섯 장을 알맞은 것과 부족한 것으로 나누어 보세요.', toolOptions: { cards: ['들꽃군청 누리집, 2026년 10월', '국가 통계 누리집의 인구 표', '인터넷', '어디선가 봤어요', '기상청 누리집, 2026년 10월', '글쓴이를 모르는 블로그'] }, target: { sort: { '출처로 알맞아요': ['들꽃군청 누리집, 2026년 10월', '국가 통계 누리집의 인구 표', '기상청 누리집, 2026년 10월'], '출처로 부족해요': ['인터넷', '어디선가 봤어요', '글쓴이를 모르는 블로그'] } } } } },
                  { prompt: '자료와 그 자료를 찾기 가장 알맞은 출처를 이어 보세요.', toolOptions: { mode: 'match', topic: '자료와 출처', slots: [{ id: 'k1', label: '들꽃군 7월 평균 기온 26°C' }, { id: 'k2', label: '가람도 시·군별 인구 표' }, { id: 'k3', label: '들꽃 축제 10월에 열림' }], cards: ['기상청 누리집', '국가 통계 누리집', '들꽃군청 누리집 축제 안내'] }, target: { match: { k1: '기상청 누리집', k2: '국가 통계 누리집', k3: '들꽃군청 누리집 축제 안내' } }, difficulty: 0.2,
                    levels: { challenge: { toolOptions: { cards: ['기상청 누리집', '국가 통계 누리집', '들꽃군청 누리집 축제 안내', '친구의 말'] } } } },
                ],
              },
              {
                id: 'a3', title: '활동 3. 자료 조사 차례와 갈무리', minutes: 9, tool: 'story',
                task: '자료를 조사하는 차례대로 장면 카드를 놓고, 갈무리 메모의 빈칸에 알맞은 카드를 넣어요.',
                teacher: '"궁금한 것을 정하지 않고 누리집부터 열면 어떻게 될까요?" 찾을 것이 분명해야 필요한 자료만 갈무리할 수 있다는 것을 짚는다. 2·3번에서 출처 칸에 "내 생각"이나 "친구 말"을 넣는 학생에게 다시 찾아갈 수 있는 곳인지 묻는다. 이어서 15차시 안내 카드에 넣을 자료 하나를 실제 우리 시·군청 누리집에서 함께 찾아본다.',
                levels: { easy: { live: true }, base: {}, challenge: {} },
                items: [
                  { prompt: '지역 자료를 조사하는 차례대로 장면 카드를 놓아 보세요.', toolOptions: { cards: [{ id: 'q', text: '궁금한 것 정하기', motif: 'star' }, { id: 'f', text: '누리집에서 찾기', motif: 'house' }, { id: 's', text: '필요한 자료 갈무리', motif: 'leaf' }, { id: 'w', text: '출처 적기', motif: 'flower' }, { id: 'c', text: '안내 카드 만들기', motif: 'sun' }] }, target: { order: ['q', 'f', 's', 'w', 'c'] }, difficulty: 0.15,
                    levels: { challenge: { prompt: '지역 자료를 조사하는 차례대로 장면 카드를 놓아 보세요. 차례에 들어가지 않는 카드가 하나 있어요.', toolOptions: { slots: 5, cards: [{ id: 'q', text: '궁금한 것 정하기', motif: 'star' }, { id: 'f', text: '누리집에서 찾기', motif: 'house' }, { id: 's', text: '필요한 자료 갈무리', motif: 'leaf' }, { id: 'w', text: '출처 적기', motif: 'flower' }, { id: 'c', text: '안내 카드 만들기', motif: 'sun' }, { id: 'x', text: '출처는 빼고 옮겨 적기', motif: 'cloud' }] } } } },
                  { prompt: '갈무리 메모의 빈칸에 알맞은 카드를 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['들꽃군청 누리집', '내 생각', '2026년 10월', '언젠가'], slots: [{ id: 'f1', who: '민지', motif: 'house', label: '인구 자료는 ___에서 찾았어요.' }, { id: 'f2', who: '민지', motif: 'sun', label: '자료를 찾은 때는 ___이에요.' }] }, target: { fill: { f1: '들꽃군청 누리집', f2: '2026년 10월' } }, difficulty: 0.15,
                    levels: { challenge: { toolOptions: { cards: ['들꽃군청 누리집', '내 생각', '인터넷', '2026년 10월', '언젠가', '어제쯤'] } } } },
                  { prompt: '안내 카드 문장의 빈칸을 자료와 출처로 채워 보세요.', toolOptions: { mode: 'fill', cards: ['26°C', '아주 더워요', '기상청 누리집', '짝꿍의 말'], slots: [{ id: 'g1', who: '준호', motif: 'sun', label: '들꽃군 7월 평균 기온은 ___예요.' }, { id: 'g2', who: '준호', motif: 'cloud', label: '(출처: ___)' }] }, target: { fill: { g1: '26°C', g2: '기상청 누리집' } }, difficulty: 0.2,
                    levels: { challenge: { toolOptions: { cards: ['26°C', '아주 더워요', '조금 더워요', '기상청 누리집', '짝꿍의 말', '인터넷'] } } },
                    conclude: '안내 카드에는 자료의 수와 함께 출처를 적어, 읽는 사람이 다시 확인할 수 있게 해요.' },
                ],
              },
            ],
          },
          {
            id: 'wrapup', title: '정리', minutes: 8,
            teacher: '"오늘 찾은 자료에 출처를 적었나요? 출처에는 어느 곳과 언제가 들어가나요?" 짝의 갈무리 메모를 서로 바꾸어 출처가 빠진 곳을 찾아 주게 한다. 다음 시간에 이 자료로 안내 카드를 만든다고 알린다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '출처가 바른 자료', cards: [{ id: 'e1', text: '우리 시 인구', sub: '출처: 시청 누리집, 2026년' }, { id: 'e2', text: '우리 시 인구', sub: '출처: 인터넷' }, { id: 'e3', text: '공원 개수', sub: '출처: 시청 누리집 공원 안내' }] }, prompt: '출처가 바르게 적힌 자료 카드만 고르세요.', target: { pick: ['e1', 'e3'] }, difficulty: 0.15 },
              { type: 'choice', prompt: '우리 지역의 여러 해 인구 변화를 알고 싶을 때 가장 알맞은 곳은 어디인가요?', options: ['통계 누리집', '디지털 지도 길찾기', '친구에게 물어보기'], answer: 0, difficulty: 0.1, explain: '여러 해의 인구 수를 표로 견주어 보려면 통계 누리집이 알맞아요.' },
              { type: 'short', prompt: '내가 찾고 싶은 우리 지역 자료 하나와, 그 자료를 찾을 누리집 이름을 쓰세요.', answer: '학생마다 다름 — 자료와 알맞은 누리집(기관)을 짝지었는지 본다', difficulty: 0.2 },
              { type: 'mood', prompt: '오늘 자료 찾기는 어땠나요?' },
            ],
          },
        ],
        worksheet: {
          title: '자료 찾기와 출처 적기',
          items: [
            { type: 'table', prompt: '알고 싶은 것과 찾을 곳을 짝지어 쓰세요.', columns: ['알고 싶은 것', '찾을 곳'], cells: [['우리 군 축제 날짜', ''], ['여러 해 인구 변화', ''], ['도서관까지 가는 길', '']], answer: '시·군청 누리집, 통계 누리집, 디지털 지도' },
            { type: 'choice', prompt: '출처로 가장 알맞은 것에 ○ 하세요.', options: ['인터넷', '들꽃군청 누리집, 2026년 10월', '어디선가 봤어요'], answer: '들꽃군청 누리집, 2026년 10월' },
            { type: 'blank', prompt: '갈무리 메모를 완성하세요.', text: '자료: 들꽃군 7월 평균 기온 26°C / 출처: ___ / 찾은 때: ___', answer: '기상청 누리집, 찾은 날짜(예: 2026년 10월)' },
            { type: 'short', prompt: '자료에 출처를 적어야 하는 까닭을 쓰세요.' },
            { type: 'table', prompt: '우리 지역 자료 하나를 찾아 갈무리하세요.', columns: ['자료 내용', '출처(누리집)', '찾은 날'], rows: 1, answer: '학생마다 다름' },
          ],
          easy: {
            note: '출처 = 어디에서 + 언제 찾았는지. "인터넷"만 쓰면 다시 찾을 수 없어요.',
            items: [
              { type: 'choice', prompt: '축제 날짜를 찾을 곳에 ○ 하세요.', options: ['시·군청 누리집', '디지털 지도'], answer: '시·군청 누리집' },
              { type: 'choice', prompt: '출처가 있는 자료에 ○ 하세요.', options: ['인구 6만 명(들꽃군청 누리집)', '인구 6만 명'], answer: '인구 6만 명(들꽃군청 누리집)' },
              { type: 'blank', prompt: '빈칸을 채우세요.', text: '자료를 옮겨 적을 때는 ___도 함께 적어요.', answer: '출처' },
              { type: 'short', prompt: '우리 지역에 대해 알고 싶은 것 하나를 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 맞는 곳에 놓으면 초록 테두리가 생겨 바로 확인할 수 있어요.',
          base: '찾을 곳과 출처를 스스로 판단해 카드를 옮겨요.',
          challenge: '활동마다 헷갈리는 카드(블로그 글·소문·"인터넷" 출처, 차례에 들어가지 않는 장면)가 더 섞여 나와 골라내야 하고, 활동지에서 실제 우리 지역 자료 하나를 찾아 출처까지 갈무리해요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 자료를 찾아 옮기기만 하고 어느 누리집에서 가져왔는지 적지 않는다 → 갈무리 메모에 출처 칸을 늘 둔다. ② "인터넷"을 출처로 쓴다 → 기관 이름과 찾은 때를 쓰게 한다. ③ 누가 썼는지 모르는 글이나 소문을 자료로 쓴다 → 다시 확인할 수 있는 곳인지 묻는다. 실제 누리집을 열 때는 교사가 주소를 미리 정해 주고, 학생 개인정보를 입력하지 않게 한다.',
      }),
      // ───────────────────────── 15차시 ─────────────────────────
      L(15, {
        title: '지도와 자료로 우리 지역 안내 카드 만들고 점검하기',
        objective: '지도의 약속과 지역 자료를 이용해 우리 지역을 소개하는 안내 카드를 만들고, 단원에서 배운 것을 스스로 점검할 수 있다.',
        standards: ['[4사05-01]', '[4사05-02]'],
        illustration: {
          prompt: ILL('a handmade postcard-style local guide card with a small map, a compass rose, a tiny bar chart and a source note, being handed from one child to a friend from another town'),
          scene: { viewBox: [480, 270], layers: [
            { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 120, y: 50 }, { motif: 'hills', y: 206 },
            { motif: 'house', x: 120, y: 222 }, { motif: 'tree', x: 200, y: 214 }, { motif: 'bird', x: 300, y: 90 }, { motif: 'star', x: 380, y: 120, color: 'buttercup' },
            { motif: 'text', x: 240, y: 140, text: '우리 지역을 소개합니다', size: 22 },
          ] },
        },
        stages: [
          {
            id: 'intro', title: '도입', minutes: 5,
            teacher: '"다른 지역에 사는 친구가 우리 지역에 놀러 온대요. 무엇을 알려 주면 좋을까요?" 자리, 가 볼 곳, 날씨, 가는 길 같은 답을 모으고, 이 단원에서 배운 지도와 자료로 안내 카드를 만든다고 알린다. 시연 단추로 누리시 지도에서 시청과 박물관에 핀이 꽂히는 모습을 보여 주며 "박물관은 시청의 어느 쪽이었죠?"라고 묻는다.',
            student: '이 단원에서 배운 지도의 약속과 자료 가운데, 안내 카드에 꼭 쓰고 싶은 것을 골라 봅시다.',
            demo: { tool: 'map', options: NURI, sequence: [{ place: '시청' }, { place: '박물관' }] },
          },
          {
            id: 'main', title: '전개', minutes: 27,
            activities: [
              {
                id: 'a1', title: '활동 1. 배운 낱말 묶기', minutes: 6, tool: 'mindmap',
                task: '단원에서 배운 낱말과 하는 일을 잇고, 자리를 설명하는 말을 골라요.',
                teacher: '"방위표·범례·축척·등고선은 각각 무엇을 알려 주나요?" 1번을 틀린 학생은 해당 차시(1·3·4·13차시) 활동지를 다시 보게 한다. 2번에서 "오른쪽"을 고르는 학생에게 6차시의 몸 돌리기를 떠올리게 한다.',
                levels: { easy: { live: true }, base: {}, challenge: {} },
                items: [
                  { prompt: '지도의 약속과 그것이 알려 주는 것을 이어 보세요.', toolOptions: { mode: 'match', topic: '지도의 약속', slots: [{ id: 'e1', label: '방위표' }, { id: 'e2', label: '범례' }, { id: 'e3', label: '축척' }, { id: 'e4', label: '등고선' }], cards: ['방향을 알려 줘요', '기호의 뜻을 알려 줘요', '실제보다 줄인 정도를 알려 줘요', '땅의 높낮이를 알려 줘요'] }, target: { match: { e1: '방향을 알려 줘요', e2: '기호의 뜻을 알려 줘요', e3: '실제보다 줄인 정도를 알려 줘요', e4: '땅의 높낮이를 알려 줘요' } }, difficulty: 0.15,
                    levels: { challenge: { toolOptions: { cards: ['방향을 알려 줘요', '기호의 뜻을 알려 줘요', '실제보다 줄인 정도를 알려 줘요', '땅의 높낮이를 알려 줘요', '건물의 실제 색을 알려 줘요'] } } } },
                  { prompt: '지역의 자리를 정확하게 설명하는 말만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '자리 설명', cards: ['도청에서 남쪽으로 두 칸', '북동쪽', '맞닿은 이웃 지역', '오른쪽으로 쭉', '저기 멀리'] }, target: { pick: ['도청에서 남쪽으로 두 칸', '북동쪽', '맞닿은 이웃 지역'] }, difficulty: 0.15,
                    levels: { challenge: { toolOptions: { cards: ['도청에서 남쪽으로 두 칸', '북동쪽', '맞닿은 이웃 지역', '오른쪽으로 쭉', '저기 멀리', '가까운 데'] } } } },
                  { prompt: '단원에서 배운 낱말을 두 가지로 나누어 보세요.', toolOptions: { topic: '단원 낱말', slots: ['지도를 읽는 약속', '지역을 알려 주는 자료'], cards: ['방위표', '범례', '축척', '인구 그래프', '기온 그래프', '시·군청 누리집'] }, target: { sort: { '지도를 읽는 약속': ['방위표', '범례', '축척'], '지역을 알려 주는 자료': ['인구 그래프', '기온 그래프', '시·군청 누리집'] } }, difficulty: 0.15,
                    levels: { challenge: { toolOptions: { cards: ['방위표', '범례', '축척', '등고선', '인구 그래프', '기온 그래프', '시·군청 누리집'] }, target: { sort: { '지도를 읽는 약속': ['방위표', '범례', '축척', '등고선'], '지역을 알려 주는 자료': ['인구 그래프', '기온 그래프', '시·군청 누리집'] } }, prompt: '단원에서 배운 낱말을 두 가지로 나누어 보세요. 등고선도 잊지 마세요.' } } },
                ],
              },
              {
                id: 'a2', title: '활동 2. 누리시 지도 종합 점검', minutes: 9, tool: 'map', options: NURI,
                task: '처음 보는 누리시 지도로 방위·범례·축척을 모두 써 봐요. 문항마다 하는 일이 달라요.',
                teacher: '"새 지도를 받으면 무엇부터 볼까요?" 제목, 북쪽 화살표, 범례, 축척 차례로 손가락으로 짚게 한다. 문항마다 틀린 학생 수를 보고, 많이 틀린 약속은 정리 시간에 한 번 더 함께 푼다.',
                levels: { easy: { names: true, showCells: true }, base: {}, challenge: { names: false } },
                items: [
                  { prompt: '시청에서 북쪽으로 두 칸 간 곳에 핀을 꽂아 보세요.', state: { pin: [3, 2] }, target: { from: '시청', dir: '북', steps: 2 }, difficulty: 0.1 },
                  { prompt: '시청에서 보면 병원은 어느 방위에 있는지 골라 보세요.', toolOptions: { mode: 'compass' }, target: { from: '시청', to: '병원' }, difficulty: 0.15 },
                  { prompt: '축척을 보고 기차역에서 시장까지 길을 따라간 거리를 넣어 보세요.', toolOptions: { mode: 'scale', distStep: 100 }, target: { from: '기차역', to: '시장' }, difficulty: 0.25,
                    levels: { easy: { toolOptions: { distStep: 200 } } } },
                  { prompt: '범례가 비어 있어요. 지도에서 기호 옆 이름을 읽고 범례 빈칸을 채워 보세요.', toolOptions: { mode: 'legend', names: true, legendIcons: ['museum', 'station', 'market', 'hospital'] }, target: { legend: { museum: '박물관', station: '기차역', market: '시장', hospital: '병원' } }, difficulty: 0.25,
                    levels: { challenge: { prompt: '이름이 없는 지도예요. 범례를 보고 박물관을 찾아 핀을 꽂아 보세요.', toolOptions: { mode: 'pin', names: false }, target: { place: '박물관' } } },
                    conclude: '기호의 뜻은 모양으로 짐작하지 않고, 이름이나 범례로 확인해요.' },
                ],
              },
              {
                id: 'a3', title: '활동 3. 우리 지역 안내 카드', minutes: 12, tool: 'mindmap',
                task: '안내 카드에 넣을 내용을 고르고 문장과 근거 자료를 이은 뒤, 짝과 함께 활동지에 우리 지역 안내 카드를 만들고 점검표로 서로 확인해요.',
                teacher: '"안내 카드에 우리 집 주소와 전화번호를 넣어도 될까요?" 개인정보는 넣지 않는다는 것을 짚는다. 1·2번은 4분 안에 끝내고, 3번 짝 활동에 8분을 쓴다. 활동지의 안내 카드 칸에 자리 설명 한 문장(방위·이웃 지역)과 자료 한 가지와 출처(14차시 갈무리 메모)를 먼저 쓰고, 그림 지도는 방위표와 범례가 들어간 간단한 밑그림까지만 그리게 한다. 마지막 2분에 짝이 점검표(방위표·범례·자리 설명·자료와 출처)로 확인해 준다.',
                levels: { easy: { live: true }, base: {}, challenge: {} },
                items: [
                  { prompt: '다른 지역 친구에게 보낼 안내 카드에 넣을 내용만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '안내 카드', cards: ['우리 지역이 속한 시·도와 방위', '맞닿은 이웃 지역', '자료와 그 출처', '근거 없는 자랑', '우리 집 주소와 전화번호'] }, target: { pick: ['우리 지역이 속한 시·도와 방위', '맞닿은 이웃 지역', '자료와 그 출처'] }, difficulty: 0.15,
                    levels: { challenge: { toolOptions: { cards: ['우리 지역이 속한 시·도와 방위', '맞닿은 이웃 지역', '자료와 그 출처', '근거 없는 자랑', '우리 집 주소와 전화번호', '우리 반 친구들 이름'] } } } },
                                    { prompt: '안내 카드의 문장과 그 근거 자료를 이어 보세요.', toolOptions: { mode: 'match', topic: '문장과 근거', slots: [{ id: 'p1', label: '우리 군은 도의 서쪽에 있어요' }, { id: 'p2', label: '7월에 가장 더워요' }, { id: 'p3', label: '시청에서 박물관까지 400m예요' }], cards: ['도 행정 지도', '기온 그래프', '축척이 있는 지도'] }, target: { match: { p1: '도 행정 지도', p2: '기온 그래프', p3: '축척이 있는 지도' } }, difficulty: 0.2,
                    levels: { challenge: { toolOptions: { cards: ['도 행정 지도', '기온 그래프', '축척이 있는 지도', '친구에게 들은 말'] } } } },
                  { prompt: '짝과 함께 활동지에 우리 지역 안내 카드를 만들고, 점검표로 서로 확인한 뒤 "다 했어요"를 누르세요.', toolOptions: { mode: 'pick', topic: '안내 카드 점검', cards: ['방위표', '범례', '자리 설명', '자료와 출처'] }, free: true, talk: true, difficulty: 0 },
                ],
              },
            ],
          },
          {
            id: 'wrapup', title: '정리', minutes: 8,
            teacher: '"이 단원에서 가장 자신 있는 것과 더 연습하고 싶은 것은 무엇인가요?" 출구 3번에 쓰게 하고 몇 명의 안내 카드를 전자칠판에 띄워 방위표·범례·출처가 있는지 함께 점검한다. 출구 1·2번 결과로 다시 짚을 약속(방위·축척)을 정해 다음 단원 시작 때 5분 복습한다.',
            exitTicket: [
              { type: 'tool', tool: 'map', options: W(NURI, { mode: 'compass' }), prompt: '누리시 지도에서 시청에서 본 공원의 방위를 고르세요.', target: { from: '시청', to: '공원' }, difficulty: 0.15 },
              { type: 'choice', prompt: '한 칸이 200m인 누리시 지도에서 시청에서 박물관까지는 두 칸이에요. 실제 거리는?', options: ['2m', '200m', '400m'], answer: 2, difficulty: 0.15, explain: '200m씩 두 칸이니 400m예요.' },
              { type: 'short', prompt: '이 단원에서 가장 자신 있는 것 하나와 더 연습하고 싶은 것 하나를 쓰세요.', answer: '학생마다 다름 — 지도의 약속·자리 설명·자료와 출처 가운데 무엇을 골랐는지 보고 다음 지도에 반영한다', difficulty: 0.1 },
              { type: 'mood', prompt: '이 단원 공부는 어땠나요?' },
            ],
          },
        ],
        worksheet: {
          title: '우리 지역 안내 카드',
          items: [
            { type: 'figure', prompt: '누리시 지도를 보고 시청의 북쪽·동쪽에 있는 곳과 시청에서 기차역까지의 거리를 쓰세요.', tool: 'map', options: NURI, figures: [{ caption: '누리시 (한 칸 200m)' }], answer: '북쪽 박물관, 동쪽 시장, 기차역까지 600m' },
            { type: 'draw', prompt: '안내 카드: 우리 지역 그림 지도를 그리고 방위표와 범례를 넣으세요.' },
            { type: 'short', prompt: '안내 카드: 우리 지역의 자리를 방위와 맞닿은 이웃 지역을 넣어 한 문장으로 쓰세요.' },
            { type: 'table', prompt: '안내 카드: 우리 지역 자료 하나와 출처를 쓰세요.', columns: ['자료', '출처'], rows: 1, answer: '학생마다 다름 — 14차시에 찾은 자료' },
            { type: 'table', prompt: '짝의 안내 카드를 점검하세요(○ 또는 △).', columns: ['방위표', '범례', '자리 설명', '자료와 출처'], rows: 1, answer: '짝마다 다름' },
          ],
          easy: {
            note: '안내 카드 = 그림 지도(방위표·범례) + 자리 설명 + 자료와 출처. 우리 집 주소·전화번호는 넣지 않아요.',
            items: [
              { type: 'figure', prompt: '누리시 지도에서 시청의 북쪽에 있는 곳을 쓰세요.', tool: 'map', options: NURI, figures: [{ caption: '누리시' }], answer: '박물관' },
              { type: 'draw', prompt: '우리 학교 둘레를 그리고 방위표(북쪽 화살표)를 넣으세요.' },
              { type: 'blank', prompt: '빈칸을 채우세요.', text: '우리 학교는 ___(시·도)에 있어요.', answer: '학생마다 다름' },
              { type: 'choice', prompt: '안내 카드에 넣지 않는 것에 ○ 하세요.', options: ['우리 집 전화번호', '방위표'], answer: '우리 집 전화번호' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 맞게 놓으면 초록 테두리가 생기고, 누리시 지도에 이름과 칸 번호가 보이며 거리는 200m씩 넣어요.',
          base: '누리시 지도에서 방위·범례·축척을 스스로 쓰고, 거리는 100m씩 넣어 곱셈으로 구해요.',
          challenge: '누리시 지도에 장소 이름이 없어 범례로 장소를 찾아 풀고(범례 문항은 범례를 보고 박물관 찾기로 바뀌어요), 활동 1·3에 헷갈리는 카드가 더 섞여요.',
        },
        teacherNotes: '단원 정리 점검: ① 방위 — 오른쪽·왼쪽 대신 방위를 쓰는가, 북쪽 화살표를 먼저 보는가. ② 범례 — 기호를 범례로 확인하는가. ③ 축척 — 건너간 칸 수 × 한 칸 거리로 구하는가. ④ 자리 설명 — 크기가 아니라 방위와 이웃으로 말하는가. ⑤ 자료 — 사실과 생각을 나누고 출처를 적는가. 안내 카드에 학생의 집 주소·전화번호 같은 개인정보를 넣지 않게 한다. 수업 시간에는 자리 설명·자료와 출처·지도 밑그림까지 하고, 그림 지도를 색칠하고 다듬는 일은 과제로 이어 가도 된다.',
      }),
    ],
  });
})();
