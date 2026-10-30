/* 6학년 실과 3. 기술적 문제해결과 혁신 — 수송 기술의 의미와 발달(1~4차시) → 친환경 수송 시제품(5~8차시).
 * 성취기준은 units-index 단원 목록의 [6실03-04](수송 기술의 의미와 발달)·[6실03-05](친환경 수송 시제품)만 쓴다.
 */
(function () {
  const U = { catalog: 'g6-실과-1학기-3', grade: 6, subject: '실과', unitTitle: '3. 기술적 문제해결과 혁신' };
  const PROMPT = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const head = (n, title, objective, standards) => ({
    id: `g6-prac-1-03-${String(n).padStart(2, '0')}`, schema: 'edu-lesson.v1',
    catalog: { unit: U.catalog, lesson: n },
    grade: U.grade, subject: U.subject, unitTitle: U.unitTitle,
    title, objective, standards, minutes: 40, formats: ['chromebook', 'projector', 'print'],
  });
  const LV = { easy: { live: true, instant: true }, base: {}, challenge: {} };
  const MOOD = { type: 'mood', prompt: '오늘 공부는 어땠나요?' };
  // 차시 하나를 같은 틀(도입 6 · 전개 9×3 · 정리 7)로 편다. 내용은 차시마다 c 에 있다.
  const mk = (n, c) => Object.assign(head(n, c.title, c.obj, c.std), {
    illustration: { prompt: PROMPT(c.pic), scene: { viewBox: [480, 270], layers: c.layers } },
    stages: [
      Object.assign({ id: 'intro', title: '도입', minutes: 6, teacher: c.intro[0], student: c.intro[1] }, c.demo ? { demo: c.demo } : {}),
      { id: 'main', title: '전개', minutes: 27, activities: c.acts.map((a, i) => Object.assign({ id: `a${i + 1}`, minutes: 9, levels: LV }, a)) },
      { id: 'wrapup', title: '정리', minutes: 7, teacher: c.wrap, exitTicket: [...c.exit, MOOD] },
    ],
    worksheet: { title: c.wsTitle, items: c.ws, easy: { note: c.easyNote, items: c.wsEasy } },
    differentiation: c.diff, teacherNotes: c.notes,
  }, c.safety ? { safety: c.safety } : {});
  const L = [];

  // ───────────────────────── 1차시 (intro) 수송: 땅·물·하늘 ─────────────────────────
  L.push(mk(1, {
    title: '땅길·뱃길·하늘길로 탈것 나누어 보기',
    obj: '수송이 사람과 물건을 한 곳에서 다른 곳으로 옮기는 일임을 알고, 탈것을 땅·물·하늘 길로 나누어 쓰임을 예로 들 수 있다.',
    std: ['[6실03-04]'],
    pic: 'a harbor town where a train, a cargo ship and an airplane carry people and boxes across land, sea and sky',
    layers: [
      { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 120, y: 48 }, { motif: 'bird', x: 300, y: 70 },
      { motif: 'hills', y: 200 }, { motif: 'wave', y: 236 }, { motif: 'house', x: 90, y: 206, s: 0.8 },
      { motif: 'text', x: 240, y: 130, text: '누가 무엇을 어디로 옮길까요?', size: 22 },
    ],
    intro: [
      '"오늘 아침 집에서 학교까지 몸이 어떻게 옮겨 왔나요? 걷기, 버스, 자동차 중 손을 들어 봐요." 곧이어 "급식 재료나 택배 상자는 어떻게 우리 곁까지 왔을까요?"라고 묻는다. 사람이 타는 것만 수송이라고 여기는 학생에게는 \'물건도 옮긴다\'는 점을 짚고, 이 단원이 탈것의 발달부터 친환경 시제품 만들기까지 이어진다고 알린다.',
      '오늘 아침 내가 쓴 탈것과, 우리 집에 온 물건이 타고 온 탈것을 하나씩 떠올려 짝과 말해 봅시다.',
    ],
    demo: { tool: 'mindmap', options: { topic: '탈것의 길', slots: ['땅', '물'], cards: ['버스', '여객선'], shuffle: false }, sequence: [{ sort: { 땅: ['버스'], 물: ['여객선'] } }] },
    acts: [
      {
        title: '활동 1. 수송하는 일 가려내기', tool: 'mindmap',
        teacher: '"수송은 사람이나 물건을 한 곳에서 다른 곳으로 옮기는 일이에요. 운동장에서 제자리 뛰기는 어디로 옮겼나요?" 몸이 움직이기만 하고 자리가 바뀌지 않는 카드를 고른 학생에게는 \'어디에서 어디로\'를 되묻는다. 짐 옮기기가 수송이 아니라고 생각하는 학생에게는 택배 상자를 예로 든다.',
        task: '수송에 해당하는 카드만 골라요. 수송은 사람이나 물건을 한 곳에서 다른 곳으로 옮기는 일이에요.',
        items: [
          { prompt: '수송에 해당하는 일만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '수송', basket: '수송하는 일', cards: ['트럭으로 택배 상자를 나르기', '지하철로 출근하기', '컨테이너선으로 자동차 싣기', '운동장에서 제자리 뛰기', '거울 보며 머리 빗기'] }, hints: ['사람이나 물건이 한 곳에서 다른 곳으로 자리를 옮기는 일인지 따져 보아요.'], target: { pick: ['트럭으로 택배 상자를 나르기', '지하철로 출근하기', '컨테이너선으로 자동차 싣기'] }, difficulty: 0.1 },
          { prompt: '사람을 옮기는 것과 물건을 옮기는 것으로 나누어 보세요.', toolOptions: { topic: '수송 대상', slots: ['사람을 옮겨요', '물건을 옮겨요'], cards: ['여객기', '시외버스', '화물열차', '택배 트럭', '유조선'] }, hints: ['그 탈것에 타는 것이 사람인지, 상자나 기름 같은 짐인지 떠올려 나누어요.'], target: { sort: { '사람을 옮겨요': ['여객기', '시외버스'], '물건을 옮겨요': ['화물열차', '택배 트럭', '유조선'] } }, difficulty: 0.15 },
          { prompt: '탈것마다 하는 일을 한 장씩 이어 보세요.', toolOptions: { mode: 'match', topic: '탈것의 쓰임', slots: [{ id: 'ship', label: '컨테이너선' }, { id: 'heli', label: '구급 헬리콥터' }, { id: 'ktx', label: '고속열차' }], cards: ['무거운 짐을 바다 건너 한꺼번에 실어요', '급한 환자를 빨리 병원으로 옮겨요', '도시 사이 많은 사람을 땅 위로 빠르게 옮겨요', '집 안의 먼지를 빨아들여요'] }, hints: ['탈것의 이름에서 어떤 길을 가는지, 무엇을 싣는지 짐작해 이어요. 탈것이 아닌 일은 남겨요.'], target: { match: { ship: '무거운 짐을 바다 건너 한꺼번에 실어요', heli: '급한 환자를 빨리 병원으로 옮겨요', ktx: '도시 사이 많은 사람을 땅 위로 빠르게 옮겨요' } }, difficulty: 0.2 },
        ],
      },
      {
        title: '활동 2. 땅·물·하늘 길로 탈것 나누기', tool: 'mindmap',
        teacher: '"기차는 땅 위의 길만 달릴까요, 물 위도 달릴까요?" 철길·뱃길·하늘길 이름을 칠판에 적고 탈것을 길에 붙인다. 수륙양용 버스처럼 두 길을 가는 탈것이 있어도 \'주로 어디를 가는지\'로 나눈다고 약속한다. 헬리콥터를 땅에 앉는다는 까닭으로 땅 길에 넣는 학생에게는 \'움직이는 동안 어디에 떠 있나요?\'라고 묻는다.',
        task: '탈것 카드를 달리는 길에 따라 땅·물·하늘 가지에 나누어 넣어요.',
        items: [
          { prompt: '탈것을 땅·물·하늘 길로 나누어 보세요.', toolOptions: { topic: '탈것의 길', slots: ['땅', '물', '하늘'], cards: ['지하철', '자전거', '여객선', '화물선', '여객기', '헬리콥터'] }, hints: ['그 탈것이 움직이는 동안 바퀴가 닿는 곳, 물 위, 공중 가운데 어디인지 떠올려요.'], target: { sort: { 땅: ['지하철', '자전거'], 물: ['여객선', '화물선'], 하늘: ['여객기', '헬리콥터'] } }, difficulty: 0.15 },
          { prompt: '길 이름과 그 길을 달리는 탈것을 이어 보세요.', toolOptions: { mode: 'match', topic: '길과 탈것', slots: [{ id: 'rail', label: '철길' }, { id: 'sea', label: '뱃길' }, { id: 'sky', label: '하늘길' }], cards: ['전동차', '쾌속선', '열기구', '자동차 운반선'] }, hints: ['철길은 쇠 길 위를 달리고, 뱃길은 물 위, 하늘길은 공중을 지나요. 한 길에 알맞은 카드가 둘일 수도 있어요.'], target: { match: { rail: '전동차', sea: ['쾌속선', '자동차 운반선'], sky: '열기구' } }, difficulty: 0.2 },
          { prompt: '두 가지 길이 필요한 여행의 차례를 놓아 보세요.', toolOptions: { mode: 'order', topic: '외국 친구 만나러 가기', cards: ['걸어서 지하철역으로 가기', '지하철로 공항까지 가기', '비행기로 바다 건너기', '택시로 친구 집에 닿기'] }, hints: ['집에서 출발해 먼저 가까운 탈것을 타고, 먼 길의 탈것으로 갈아타는 흐름을 떠올려요.'], target: { order: ['걸어서 지하철역으로 가기', '지하철로 공항까지 가기', '비행기로 바다 건너기', '택시로 친구 집에 닿기'] }, difficulty: 0.25 },
        ],
      },
      {
        title: '활동 3. 알맞은 탈것은 상황이 정해요', tool: 'mindmap',
        teacher: '"가장 빠른 탈것이 늘 가장 좋은 탈것일까요?" 100m 떨어진 가게에 비행기를 타고 가는 장면을 말해 보게 한다. 짧은 길은 걷기, 먼 길은 빠른 탈것, 무거운 짐은 많이 싣는 탈것이 알맞다는 말을 학생이 직접 하게 한다. \'빠르면 좋다\'는 생각은 거리와 짐을 함께 보게 해서 고친다.',
        task: '상황을 읽고 알맞은 탈것을 이어 보거나, 걷는 것이 더 알맞은 상황만 골라요.',
        items: [
          { prompt: '상황마다 알맞은 수송 방법을 한 장씩 이어 보세요.', toolOptions: { mode: 'match', topic: '알맞은 방법', slots: [{ id: 'near', label: '학교 앞 문방구까지 200m' }, { id: 'far', label: '제주에서 서울까지 급히' }, { id: 'cars', label: '자동차 천 대를 외국으로' }], cards: ['걸어서 가요', '비행기를 타요', '자동차 운반선에 실어요', '헬리콥터를 불러요'] }, hints: ['거리가 먼지 가까운지, 사람인지 큰 짐인지 보고 알맞은 방법을 한 가지씩 골라요.'], target: { match: { near: '걸어서 가요', far: '비행기를 타요', cars: '자동차 운반선에 실어요' } }, difficulty: 0.2 },
          { prompt: '빠른 탈것보다 걷는 것이 더 알맞은 상황만 골라 보세요.', toolOptions: { mode: 'pick', topic: '걷기가 알맞은 때', basket: '걷는 것이 알맞아요', cards: ['집 앞 편의점까지 100m', '바다 건너 외국 친구 만나기', '학교 정문 앞 횡단보도 건너기', '냉장고를 새집으로 옮기기'] }, hints: ['아주 가까운 거리에서 짐이 없다면 탈것을 기다리는 시간이 더 걸리는지 생각해 보아요.'], target: { pick: ['집 앞 편의점까지 100m', '학교 정문 앞 횡단보도 건너기'] }, difficulty: 0.2,
            predict: { q: '가장 빠른 탈것은 언제나 가장 알맞은 선택일까요?', options: ['그래요', '아니에요', '잘 모르겠어요'], answer: 1 },
            conclude: '거리와 짐에 따라 알맞은 수송 방법이 달라요. 빠르다고 늘 좋은 것은 아니에요.' },
          { prompt: '탈것을 빠르게 이동할 때와 많이 실을 때로 나누어 보세요.', toolOptions: { topic: '탈것의 장점', slots: ['빨라요', '많이 실어요'], cards: ['제트 여객기', '구급 헬리콥터', '화물열차', '컨테이너선'] }, hints: ['사람이나 환자를 서둘러 옮기는 탈것인지, 무거운 짐을 한꺼번에 나르는 탈것인지 가려요.'], target: { sort: { 빨라요: ['제트 여객기', '구급 헬리콥터'], '많이 실어요': ['화물열차', '컨테이너선'] } }, difficulty: 0.25 },
        ],
      },
    ],
    wrap: '"오늘 처음 안 사실 하나와, 가까운 곳에는 걷는 것이 알맞은 까닭을 한 문장으로 말해 볼까요?" 출구 3번에서 비행기를 고른 학생에게는 \'200m를 가는 데 공항까지 얼마나 걸리나요?\'라고 되묻는다. 다음 시간에는 탈것이 옛날부터 어떻게 달라져 왔는지 순서대로 알아본다고 예고한다.',
    exit: [
      { type: 'tool', tool: 'mindmap', options: { topic: '탈것의 길', slots: ['땅', '물', '하늘'], cards: ['시내버스', '유람선', '드론 택배'] }, prompt: '탈것을 땅·물·하늘 길로 나누어 보세요.', target: { sort: { 땅: ['시내버스'], 물: ['유람선'], 하늘: ['드론 택배'] } }, difficulty: 0.1 },
      { type: 'choice', prompt: '다음 가운데 수송에 해당하는 것은 무엇인가요?', options: ['공을 던져 점수 내기', '화물차로 과일을 시장에 나르기', '교실에서 노래 부르기'], answer: 1, difficulty: 0.15, explain: '과일이 한 곳에서 다른 곳으로 옮겨졌으므로 수송이에요.' },
      { type: 'short', prompt: '가까운 곳에는 걷는 것이 알맞은 까닭 하나를 쓰세요.' },
    ],
    wsTitle: '우리 둘레의 수송 찾기',
    ws: [
      { type: 'figure', wide: true, prompt: '가지마다 알맞은 탈것을 두 가지씩 써 넣으세요.', tool: 'mindmap', figures: [{ options: { topic: '탈것의 길', printCards: false, slots: ['땅', '물', '하늘'], cards: ['보기'] }, caption: '' }], answer: '예: 땅 — 버스·기차 / 물 — 여객선·화물선 / 하늘 — 비행기·헬리콥터' },
      { type: 'choice', prompt: '사람이 아니라 물건을 옮기는 탈것에 ○ 하세요.', options: ['여객기', '화물열차', '시외버스'], answer: '화물열차' },
      { type: 'table', prompt: '우리 집에 온 물건 하나가 어떤 길로 왔는지 쓰세요.', columns: ['물건', '타고 온 탈것', '길(땅·물·하늘)'], rows: 2 },
      { type: 'short', prompt: '빠른 탈것보다 걷는 것이 더 알맞았던 경험을 쓰세요.' },
    ],
    easyNote: '수송은 사람이나 물건을 한 곳에서 다른 곳으로 옮기는 일이에요. 탈것이 가는 길을 떠올려요.',
    wsEasy: [
      { type: 'choice', prompt: '하늘길을 가는 탈것에 ○ 하세요.', options: ['자전거', '여객기'], answer: '여객기' },
      { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '택배 트럭은 사람이 아니라 ___을 옮겨요.', answer: '물건' },
      { type: 'short', prompt: '오늘 아침에 쓴 탈것을 쓰세요.' },
    ],
    diff: {
      easy: '알맞은 가지에 놓으면 초록 테두리가 생기고, 틀리게 놓으면 까닭을 말해 주고 되돌아와요.',
      base: '모두 놓은 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '이어 보기에 헷갈리는 카드(헬리콥터를 불러요 등)가 한 장씩 더 나와요.',
    },
    notes: '자주 보이는 어려움: ① 사람이 타는 것만 수송으로 여긴다 → 택배·급식 재료 같은 물건 수송을 함께 든다. ② 수송이면 빠를수록 좋다고 말한다 → 거리와 짐을 같이 보게 한다. ③ 헬리콥터·수륙양용처럼 경계가 애매한 탈것에서 막힌다 → \'주로 어디를 가는가\'로 나눈다고 약속한다.',
  }));

  // ───────────────────────── 2차시 (practice) 탈것의 발달 순서 ─────────────────────────
  L.push(mk(2, {
    title: '옛날 탈것부터 오늘 탈것까지 순서대로 늘어놓기',
    obj: '땅·물·하늘 길 탈것이 달라져 온 순서를 늘어놓고, 탈것을 움직이는 힘이 무엇으로 바뀌어 왔는지 설명할 수 있다.',
    std: ['[6실03-04]'],
    pic: 'a long paper-cut timeline road with an ox cart, a steam train, a car and a jet plane lined up from old days to today',
    layers: [
      { motif: 'sun', x: 60, y: 54, s: 0.7 }, { motif: 'cloud', x: 330, y: 46 }, { motif: 'hills', y: 204 },
      { motif: 'tree', x: 70, y: 212 }, { motif: 'mountain', x: 250, y: 214 }, { motif: 'star', x: 420, y: 70, s: 0.6 },
      { motif: 'text', x: 240, y: 128, text: '옛날 → 오늘날', size: 24 },
    ],
    intro: [
      '"할머니의 할머니가 먼 장터에 갈 때는 무엇을 타고 갔을까요?" 소달구지, 말, 가마 같은 대답을 칠판 왼쪽에 적고, 오른쪽에는 오늘 우리가 타는 탈것을 적는다. "왼쪽에서 오른쪽으로 가는 동안 무엇이 달라졌나요?"라고 물어 속도·크기·힘의 원천을 떠올리게 한다. \'새것이 옛것을 모두 없앴다\'고 생각하는 학생에게는 자전거와 마차 이야기를 들려준다.',
      '옛날 탈것 하나와 오늘날 탈것 하나를 떠올려, 달라진 점을 한 가지 말해 봅시다.',
    ],
    acts: [
      {
        title: '활동 1. 땅·물·하늘 탈것의 차례 놓기', tool: 'timeline',
        teacher: '"먼저 만들어진 탈것은 왼쪽, 나중에 나온 탈것은 오른쪽이에요." 증기 기관차를 자동차보다 뒤에 놓는 학생에게 "연료를 태워 증기로 바퀴를 돌렸어요. 가솔린 엔진은 그다음에 나왔지요."라고 말해 준다. 물과 하늘 길도 같은 방식으로 늘어놓아 보게 한다.',
        task: '카드를 옛날부터 오늘날까지 차례대로 놓아요. 왼쪽이 옛날이에요.',
        levels: { easy: { live: true, instant: true, axis: ['옛날', '오늘날'] }, base: { axis: ['옛날', '오늘날'] }, challenge: { axis: ['옛날', '오늘날'] } },
        items: [
          { prompt: '땅 위 탈것을 옛날부터 오늘날까지 놓아 보세요.', toolOptions: { mode: 'order', cards: ['가마', '소달구지', '증기 기관차', '자동차', '고속열차'] }, hints: ['사람이 메던 것, 동물이 끌던 것, 기계가 달리는 것의 차례로 생각해 보아요.'], target: { order: ['가마', '소달구지', '증기 기관차', '자동차', '고속열차'] }, difficulty: 0.15 },
          { prompt: '물 위 탈것을 옛날부터 오늘날까지 놓아 보세요.', toolOptions: { mode: 'order', cards: ['통나무배', '돛단배', '증기선', '컨테이너선'] }, hints: ['노를 젓던 배, 바람을 쓰던 배, 기계로 가는 배의 차례를 떠올려요.'], target: { order: ['통나무배', '돛단배', '증기선', '컨테이너선'] }, difficulty: 0.2 },
          { prompt: '하늘 위 탈것을 옛날부터 오늘날까지 놓아 보세요.', toolOptions: { mode: 'order', cards: ['열기구', '프로펠러 비행기', '제트 여객기', '우주 왕복선'] }, hints: ['바람에 떠다니던 것에서 엔진 힘으로 나는 것으로, 점점 높고 빠르게 가는 차례예요.'], target: { order: ['열기구', '프로펠러 비행기', '제트 여객기', '우주 왕복선'] }, difficulty: 0.25 },
        ],
      },
      {
        title: '활동 2. 탈것을 움직이는 힘 나누기', tool: 'mindmap',
        teacher: '"소달구지는 무엇의 힘으로 갈까요? 전기 열차는요?" 탈것마다 \'힘의 원천\'을 말하게 한다. 전기 자동차를 \'연료를 안 쓰므로 힘이 없다\'고 보는 학생에게 전기가 어디서 오는지 묻는다. 힘의 원천이 사람·동물에서 연료와 전기로 옮겨 왔음을 학생이 말로 정리한다.',
        task: '탈것을 움직이는 힘이 무엇인지 보고 알맞은 가지에 넣어요.',
        items: [
          { prompt: '탈것을 움직이는 힘에 따라 나누어 보세요.', toolOptions: { topic: '움직이는 힘', slots: ['사람·동물의 힘', '연료를 태운 힘', '전기의 힘'], cards: ['가마', '말', '증기 기관차', '경유 버스', '전기 열차', '전기 자동차'] }, hints: ['끌거나 메는 것은 몸의 힘, 불을 때거나 기름을 태우는 것은 연료, 전선이나 전지에서 받는 것은 전기예요.'], target: { sort: { '사람·동물의 힘': ['가마', '말'], '연료를 태운 힘': ['증기 기관차', '경유 버스'], '전기의 힘': ['전기 열차', '전기 자동차'] } }, difficulty: 0.2 },
          { prompt: '옛 탈것과 같은 일을 하는 오늘의 탈것을 이어 보세요.', toolOptions: { mode: 'match', topic: '같은 일, 달라진 모습', slots: [{ id: 'cart', label: '소달구지' }, { id: 'sail', label: '돛단배' }, { id: 'palanquin', label: '가마' }], cards: ['화물 트럭', '여객선', '승용차', '자전거'] }, hints: ['옛 탈것이 하던 일(짐 나르기, 사람 태우기)을 오늘날 어떤 탈것이 맡고 있는지 찾아요.'], target: { match: { cart: '화물 트럭', sail: '여객선', palanquin: '승용차' } }, difficulty: 0.25 },
          { prompt: '탈것이 발달하면서 좋아진 점만 골라 보세요.', toolOptions: { mode: 'pick', topic: '발달해서 좋아진 점', basket: '좋아진 점', cards: ['먼 곳까지 하루 만에 가요', '한 번에 더 많은 짐을 실어요', '길에서 시끄러운 소리가 사라졌어요', '더 많은 사람이 편하게 타요'] }, hints: ['시간, 짐의 양, 타는 사람 수에서 좋아진 것을 따져 보고, 오히려 줄지 않은 것은 남겨요.'], target: { pick: ['먼 곳까지 하루 만에 가요', '한 번에 더 많은 짐을 실어요', '더 많은 사람이 편하게 타요'] }, difficulty: 0.25 },
        ],
      },
      {
        title: '활동 3. 달라진 점과 새로 생긴 걱정 가르기', tool: 'mindmap',
        teacher: '"탈것이 빨라지고 많아지니 좋은 점만 생겼을까요?" 매연, 소음, 교통 혼잡, 사고를 짚게 한다. 문제를 말한 학생에게는 "그 문제를 줄이려고 어떤 기술이 나왔는지 아나요?"라고 되물어 다음 시간의 생각을 이끈다. 문제가 생겼으니 발달이 나빴다고 결론짓지 않도록 짚는다.',
        task: '탈것이 발달해 \'좋아졌어요\'와 \'걱정이 생겼어요\' 가지로 카드를 나누어요.',
        items: [
          { prompt: '탈것의 발달이 가져온 일을 좋은 점과 걱정으로 나누어 보세요.', toolOptions: { topic: '탈것의 발달', slots: ['좋아졌어요', '걱정이 생겼어요'], cards: ['택배가 하루 만에 와요', '먼 고향도 쉽게 가요', '매연이 늘어요', '출근길 도로가 막혀요'] }, hints: ['우리 생활을 편하게 해 준 것인지, 사람과 환경에 부담을 준 것인지 가려 보아요.'], target: { sort: { 좋아졌어요: ['택배가 하루 만에 와요', '먼 고향도 쉽게 가요'], '걱정이 생겼어요': ['매연이 늘어요', '출근길 도로가 막혀요'] } }, difficulty: 0.2 },
          { prompt: '걱정과 그것을 줄이려는 기술을 짝지어 보세요.', toolOptions: { mode: 'match', topic: '걱정 줄이기', slots: [{ id: 'smoke', label: '매연이 많아요' }, { id: 'jam', label: '도로가 막혀요' }, { id: 'noise', label: '소리가 시끄러워요' }], cards: ['전기 자동차', '지하철과 버스 전용 차선', '소음 막는 방음벽', '더 큰 자동차'] }, hints: ['걱정을 먼저 읽고, 그 걱정을 직접 줄이는 방법이 무엇인지 생각해 이어요. 걱정을 더 키울 카드는 남겨요.'], target: { match: { smoke: '전기 자동차', jam: '지하철과 버스 전용 차선', noise: '소음 막는 방음벽' } }, difficulty: 0.25 },
          { prompt: '탈것의 발달 이야기에 맞는 문장만 골라 보세요.', toolOptions: { mode: 'pick', topic: '발달 이야기', basket: '맞는 문장', cards: ['새 탈것이 나와도 옛 탈것은 쓰임이 남아 있어요', '발달하면 문제는 저절로 사라져요', '문제를 풀려는 새 기술이 또 나와요'] }, hints: ['새 기술이 문제를 만들기도 하고 풀기도 한다는 점을 생각해서 골라요.'], target: { pick: ['새 탈것이 나와도 옛 탈것은 쓰임이 남아 있어요', '문제를 풀려는 새 기술이 또 나와요'] }, difficulty: 0.3,
            predict: { q: '탈것이 발달하면 모든 문제가 저절로 사라질까요?', options: ['그래요', '아니에요', '잘 모르겠어요'], answer: 1 },
            conclude: '새 기술은 문제를 풀기도 하고 새 문제를 만들기도 해요. 그래서 문제를 찾고 다시 고치는 일이 이어져요.' },
        ],
      },
    ],
    wrap: '"오늘 늘어놓은 탈것 가운데 하나를 골라, 무엇의 힘으로 가는지 말해 볼까요?" 출구 1번에서 전기 열차를 연료 칸에 넣은 학생에게는 \'전기가 어디에서 오나요?\'라고 되묻는다. 다음 시간에는 우리 집에서 학교까지 가는 길에서 시간·비용·환경을 견주어 본다고 예고한다.',
    exit: [
      { type: 'tool', tool: 'timeline', options: { mode: 'order', axis: ['옛날', '오늘날'], cards: ['뗏목', '증기선', '쾌속선'] }, prompt: '물 위 탈것을 옛날부터 오늘날까지 놓아 보세요.', target: { order: ['뗏목', '증기선', '쾌속선'] }, difficulty: 0.1 },
      { type: 'choice', prompt: '증기 기관차를 움직인 힘은 무엇인가요?', options: ['사람의 힘', '석탄을 태워 만든 증기의 힘', '전선의 전기'], answer: 1, difficulty: 0.15, explain: '석탄을 태워 물을 끓이면 증기가 나와 바퀴를 움직여요.' },
      { type: 'short', prompt: '탈것이 발달하며 생긴 걱정 하나와 그것을 줄이는 방법을 쓰세요.' },
    ],
    wsTitle: '탈것이 걸어온 길',
    ws: [
      { type: 'figure', wide: true, prompt: '탈것 카드를 옛날부터 오늘날까지 번호를 매겨 보세요.', tool: 'timeline', figures: [{ options: { mode: 'order', axis: ['옛날', '오늘날'], slots: 4, printCards: false, cards: ['보기'] }, caption: '' }], answer: '예: 가마 → 마차 → 증기 기관차 → 고속열차' },
      { type: 'choice', prompt: '탈것이 발달해 새로 생긴 걱정에 ○ 하세요.', options: ['먼 곳에 빨리 가요', '매연이 늘어요', '짐을 많이 날라요'], answer: '매연이 늘어요' },
      { type: 'table', prompt: '옛 탈것과 오늘날 탈것을 견주어 쓰세요.', columns: ['하는 일', '옛날 탈것', '오늘날 탈것'], cells: [['짐 나르기', '', ''], ['바다 건너기', '', ''], ['', '', '']] },
      { type: 'short', prompt: '탈것이 발달하지 않았다면 우리 생활에서 달라졌을 점을 쓰세요.' },
    ],
    easyNote: '왼쪽은 옛날, 오른쪽은 오늘날이에요. 사람이 움직이다가 기계가 움직이는 차례를 떠올려요.',
    wsEasy: [
      { type: 'choice', prompt: '더 옛날 탈것에 ○ 하세요.', options: ['소달구지', '고속열차'], answer: '소달구지' },
      { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '전기 열차는 ___의 힘으로 달려요.', answer: '전기' },
      { type: 'short', prompt: '내가 타 본 탈것을 하나 쓰세요.' },
    ],
    diff: {
      easy: '차례에 맞게 놓으면 초록 테두리가 생기고, 틀리게 놓으면 까닭을 말해 주고 되돌아와요.',
      base: '모두 놓은 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '발달 이야기 고르기에서 ‘발달하면 문제는 저절로 사라져요’ 같은 그럴듯한 틀린 문장을 가려내야 해요.',
    },
    notes: '자주 보이는 어려움: ① 증기 기관차와 자동차의 앞뒤를 헷갈린다 → 연료와 엔진 이야기로 차례를 짚는다. ② 새 탈것이 나오면 옛것은 없어졌다고 생각한다 → 자전거·마차가 지금도 쓰이는 예를 든다. ③ 발달을 좋은 점만으로 말한다 → 매연·소음·혼잡도 함께 말하게 한다.',
  }));

  // ───────────────────────── 3차시 (core) 등굣길 견주기 ─────────────────────────
  L.push(mk(3, {
    title: '세 가지 등굣길의 시간·값·환경 견주기',
    obj: '같은 거리를 가는 세 가지 방법의 걸린 시간과 드는 값을 읽고, 시간·비용·환경 면으로 나누어 견줄 수 있다.',
    std: ['[6실03-04]'],
    pic: 'a child at a crossroad choosing between walking, a green city bus and a car on the way to school',
    layers: [
      { motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'cloud', x: 100, y: 52 }, { motif: 'hills', y: 206 },
      { motif: 'house', x: 80, y: 214, s: 0.8 }, { motif: 'tree', x: 210, y: 216 }, { motif: 'house', x: 390, y: 214, color: 'sky' },
      { motif: 'text', x: 240, y: 126, text: '걷기 · 버스 · 자동차', size: 24 },
    ],
    intro: [
      '"집에서 학교까지 가는 방법을 세 가지 말해 볼까요? 가장 좋은 방법은 무엇일까요?" 학생이 \'빠른 것\'이라고 답하면 "빠른 것이 늘 가장 좋은 선택일까요? 돈은요? 공기는요?"라고 되묻는다. 오늘은 시간·비용·환경, 세 가지 잣대로 견주는 연습을 한다고 알린다. 시간만 견주고 끝내는 습관을 짚는다.',
      '집에서 학교까지 가는 방법 세 가지를 떠올리고, 어느 쪽이 가장 빠를지 예상해 봅시다.',
    ],
    acts: [
      {
        title: '활동 1. 걸린 시간 막대그래프 읽기', tool: 'chart',
        teacher: '"막대가 길수록 시간이 오래 걸렸어요. 가장 짧은 막대는 무엇일까요?" 눈금 한 칸이 몇 분인지 먼저 읽게 한다. 막대가 길수록 빠르다고 읽는 학생에게는 세로 축 이름을 다시 소리 내어 읽게 한다.',
        task: '막대그래프를 보고 걸린 시간을 읽어요. 막대가 길수록 오래 걸린 거예요.',
        levels: { easy: { showValues: true }, base: {}, challenge: {} },
        items: [
          { prompt: '민지네 집에서 학교까지 가는 데 가장 오래 걸린 방법은 무엇인가요?', toolOptions: { type: 'bar', mode: 'read', title: '민지의 등굣길 걸린 시간', data: [['걷기', 18], ['버스', 12], ['자가용', 9]], unit: '분', xLabel: '방법', yLabel: '걸린 시간', scale: 3, question: '가장 오래 걸린 방법은?', choices: ['걷기', '버스', '자가용'] }, hints: ['막대가 가장 긴 것이 시간이 가장 많이 걸린 것이에요.'], target: { pick: 0 }, difficulty: 0.1 },
          { prompt: '준호가 자전거로 가는 데 걸린 시간은 몇 분인가요?', toolOptions: { type: 'bar', mode: 'read', title: '준호의 등굣길 걸린 시간', data: [['걷기', 25], ['자전거', 10], ['버스', 15]], unit: '분', xLabel: '방법', yLabel: '걸린 시간', scale: 5, max: 30 }, hints: ['막대 끝이 닿는 눈금을 읽어 수를 써요. 눈금 한 칸의 크기를 먼저 확인해요.'], target: { value: 10 }, difficulty: 0.15 },
          { prompt: '버스는 걷기보다 몇 분 덜 걸렸나요?', toolOptions: { type: 'bar', mode: 'read', title: '서윤의 등굣길 걸린 시간', data: [['걷기', 20], ['버스', 8], ['택시', 6]], unit: '분', xLabel: '방법', yLabel: '걸린 시간', scale: 2, max: 20 }, hints: ['두 막대가 닿는 눈금을 각각 읽고, 둘의 차를 계산해요.'], target: { value: 12 }, difficulty: 0.25 },
        ],
      },
      {
        title: '활동 2. 시간·비용·환경으로 나누어 견주기', tool: 'mindmap',
        teacher: '"버스가 걷기보다 빨랐다면 그것으로 끝일까요? 한 번 타는 데 얼마가 드나요? 공기에는요?" 한 장씩 카드를 소리 내어 읽고 어느 잣대인지 가리게 한다. 환경 카드에서 \'걸어도 배기가스가 나온다\'고 답하는 학생에게는 몸으로 가는 것과 연료를 태우는 것의 차이를 묻는다.',
        task: '카드를 읽고 어떤 잣대로 견준 말인지 시간·비용·환경 가지에 나누어요.',
        items: [
          { prompt: '견준 말이 어떤 잣대인지 나누어 보세요.', toolOptions: { topic: '등굣길 견주기', slots: ['시간', '비용', '환경'], cards: ['버스가 걷기보다 6분 빨라요', '버스는 한 번에 1,500원이 들어요', '자가용은 배기가스가 많이 나와요', '걷기는 아무 돈도 들지 않아요', '자전거가 버스보다 2분 빨라요', '걷기는 공기를 더럽히지 않아요'] }, hints: ['몇 분인지 말하면 시간, 돈 이야기면 비용, 공기·연료 이야기면 환경 잣대예요.'], target: { sort: { 시간: ['버스가 걷기보다 6분 빨라요', '자전거가 버스보다 2분 빨라요'], 비용: ['버스는 한 번에 1,500원이 들어요', '걷기는 아무 돈도 들지 않아요'], 환경: ['자가용은 배기가스가 많이 나와요', '걷기는 공기를 더럽히지 않아요'] } }, difficulty: 0.2 },
          { prompt: '방법마다 환경에 주는 부담을 한 장씩 이어 보세요.', toolOptions: { mode: 'match', topic: '환경 부담', slots: [{ id: 'walk', label: '걷기' }, { id: 'bus', label: '시내버스' }, { id: 'car', label: '혼자 타는 자가용' }], cards: ['연료를 쓰지 않아요', '여러 명이 타서 한 사람당 연료가 적어요', '한 사람이 타고도 연료를 많이 써요', '전기를 만들 필요가 없어요'] }, hints: ['연료를 쓰는지, 몇 명이 나누어 타는지 따져서 이어요. 맞지 않는 카드는 남겨요.'], target: { match: { walk: '연료를 쓰지 않아요', bus: '여러 명이 타서 한 사람당 연료가 적어요', car: '한 사람이 타고도 연료를 많이 써요' } }, difficulty: 0.25 },
          { prompt: '등굣길을 고를 때 견주어야 할 것만 골라 보세요.', toolOptions: { mode: 'pick', topic: '견줄 것', basket: '견줄 것', cards: ['걸리는 시간', '드는 돈', '공기에 주는 영향', '친구가 쓰는 방법'] }, hints: ['방법의 좋고 나쁨을 가를 수 있는 사실인지, 남이 따라 하는 것인지 구분해요.'], target: { pick: ['걸리는 시간', '드는 돈', '공기에 주는 영향'] }, difficulty: 0.2 },
        ],
      },
      {
        title: '활동 3. 용돈과 교통비 계산하기', tool: 'economy',
        teacher: '"버스 한 번이 1,500원이면 왕복은 얼마일까요?" 직접 계산하게 한 뒤 예산 안에서 고르게 한다. 돈이 적게 드는 것만 고르는 학생에게는 시간도 함께 보게 한다. 예산을 넘으면 어떤 선택을 줄일지 이야기하게 한다.',
        task: '교통비를 계산하거나, 정해진 돈 안에서 알맞게 골라요.',
        levels: { easy: { showTotal: true }, base: {}, challenge: {} },
        items: [
          { prompt: '버스 한 번이 1,200원이에요. 천 원짜리와 동전으로 값을 내 보세요.', toolOptions: { mode: 'pay', item: { text: '버스 한 번', price: 1200 }, coins: [100, 500, 1000] }, hints: ['1,000원 하나로 시작하고 모자란 값은 동전으로 채워 맞춰요.'], target: { pay: 1200 }, difficulty: 0.15 },
          { prompt: '버스 왕복은 얼마일까요? 한 번 1,350원이에요.', toolOptions: { mode: 'pay', item: { text: '버스 왕복', price: 2700 }, coins: [50, 100, 500, 1000] }, hints: ['한 번 값에 두 번을 곱한 금액이에요. 큰 돈부터 놓고 작은 돈으로 맞추어요.'], target: { pay: 2700, fewest: true }, difficulty: 0.25 },
          { prompt: '한 주 교통비 8,000원 안에서 알맞은 방법만 골라 보세요.', toolOptions: { mode: 'budget', budget: 8000, items: [{ id: 'bus5', text: '버스 5일 왕복', price: 6750 }, { id: 'taxi', text: '택시 3번', price: 9000 }, { id: 'bike', text: '자전거 자물쇠', price: 3000 }, { id: 'walk', text: '걷기', price: 0 }] }, hints: ['고른 값이 예산을 넘지 않고, 하루 교통을 해결하는 방법이 들어 있는지 살펴요.'], target: { budget: { max: 8000, must: ['bus5'], not: ['taxi'] } }, difficulty: 0.3 },
        ],
      },
    ],
    wrap: '"오늘 세 가지 잣대로 견주어 보니, 가장 빠른 방법이 가장 좋은 방법이었나요?" 출구 3번에서 시간만 쓴 학생에게는 \'돈과 공기는 어땠나요?\'라고 되묻는다. 다음 시간에는 사흘 동안 직접 기록한 표로 더 나은 길을 골라 근거를 말한다고 예고한다.',
    exit: [
      { type: 'tool', tool: 'mindmap', options: { topic: '견주기', slots: ['시간', '비용', '환경'], cards: ['지하철은 15분 걸려요', '지하철은 1,400원이에요', '지하철은 전기로 달려요'] }, prompt: '견준 말을 시간·비용·환경으로 나누어 보세요.', target: { sort: { 시간: ['지하철은 15분 걸려요'], 비용: ['지하철은 1,400원이에요'], 환경: ['지하철은 전기로 달려요'] } }, difficulty: 0.1 },
      { type: 'choice', prompt: '가장 빠른 방법이 가장 좋은 선택이 아닐 수도 있는 까닭은 무엇인가요?', options: ['시간 말고 돈과 환경도 살펴야 해서', '빠른 것은 늘 위험해서', '친구가 싫어해서'], answer: 0, difficulty: 0.15, explain: '시간·비용·환경을 함께 견주어야 알맞은 선택을 할 수 있어요.' },
      { type: 'short', prompt: '내가 가장 중요하게 보는 잣대(시간·비용·환경)와 그 까닭을 쓰세요.' },
    ],
    wsTitle: '등굣길 견주기 표',
    ws: [
      { type: 'figure', wide: true, prompt: '그래프를 보고 가장 빨리 가는 방법에 ○ 하고 시간을 쓰세요.', tool: 'chart', figures: [{ options: { type: 'bar', mode: 'read', data: [['걷기', 16], ['버스', 10], ['자전거', 8]], unit: '분', yLabel: '시간', title: '하늘의 등굣길', scale: 16, max: 16 }, caption: '가장 빠른 방법: (          ) (   )분' }], answer: '자전거, 8분' },
      { type: 'choice', prompt: '비용에 해당하는 말에 ○ 하세요.', options: ['10분 걸려요', '한 번에 1,500원이 들어요', '공기를 더럽혀요'], answer: '한 번에 1,500원이 들어요' },
      { type: 'table', prompt: '내 등굣길 방법을 시간·비용·환경으로 견주세요.', columns: ['방법', '시간', '비용', '환경'], rows: 3 },
      { type: 'short', prompt: '시간이 조금 더 걸려도 이 방법이 더 알맞다고 생각하는 까닭을 쓰세요.' },
    ],
    easyNote: '시간은 몇 분, 비용은 몇 원, 환경은 공기와 연료를 말해요.',
    wsEasy: [
      { type: 'choice', prompt: '돈 이야기인 것에 ○ 하세요.', options: ['5분 걸려요', '1,000원이 들어요'], answer: '1,000원이 들어요' },
      { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '걷기는 연료를 ___ 않아서 공기를 깨끗하게 지켜요.', answer: '쓰지' },
      { type: 'short', prompt: '내가 오늘 쓴 등굣길 방법을 쓰세요.' },
    ],
    diff: {
      easy: '막대 끝에 값이 보이고, 알맞은 가지에 놓으면 초록 테두리가 생겨요.',
      base: '값을 읽고 모두 놓은 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '두 막대의 차를 구하고, 예산 안에서 꼭 필요한 방법을 골라야 해요.',
    },
    notes: '자주 보이는 어려움: ① 시간만 견주고 비용과 환경은 세지 않는다 → 세 잣대 표를 먼저 그려 둔다. ② 막대가 길수록 빠르다고 읽는다 → 세로 축 이름을 읽게 한다. ③ 걷기도 환경에 부담을 준다고 한다 → 연료를 태우는지로 구분하게 한다. 실제 교통비는 지역마다 다르므로 문제의 값은 연습용이다.',
  }));

  // ───────────────────────── 4차시 (practice) 사흘 기록 ─────────────────────────
  L.push(mk(4, {
    title: '사흘 기록표로 더 나은 등굣길 골라 말하기',
    obj: '사흘 동안 쓴 탈것과 걸린 시간 기록을 그래프로 나타내고, 시간·비용·환경을 견주어 더 나은 길을 근거와 함께 말할 수 있다.',
    std: ['[6실03-04]'],
    pic: 'a child filling in a three-day travel record table on a desk beside a school bag and a small bus model',
    layers: [
      { motif: 'sun', x: 62, y: 56, s: 0.7 }, { motif: 'cloud', x: 330, y: 48 }, { motif: 'hills', y: 208 },
      { motif: 'house', x: 110, y: 216 }, { motif: 'star', x: 330, y: 90, s: 0.6 }, { motif: 'tree', x: 380, y: 216 },
      { motif: 'text', x: 240, y: 136, text: '월 · 화 · 수 기록', size: 24 },
    ],
    intro: [
      '"지난 사흘 동안 집에서 학교까지 어떻게 왔는지 떠올려 볼까요? 걸린 시간도 기억나나요?" 기억에 의지하면 틀리기 쉬우니 \'기록\'이 필요하다고 말해 준다. 오늘은 가상의 사흘 기록을 읽고 고르는 연습을 한 뒤, 집에서 직접 사흘을 기록하는 과제를 낸다. 하루만 보고 결론을 내리는 학생에게는 날씨가 달랐을 수도 있음을 짚는다.',
      '지난 사흘 중 하루를 떠올려, 그날 탈것과 걸린 시간을 짝에게 말해 봅시다.',
    ],
    acts: [
      {
        title: '활동 1. 기록한 시간으로 막대그래프 그리기', tool: 'chart',
        teacher: '"표의 숫자를 눈에 보이는 막대로 바꾸면 무엇이 좋을까요?" 막대 하나를 먼저 눌러 눈금을 올려 보게 한다. 눈금을 한 칸 잘못 읽은 학생에게는 표의 수와 막대 끝 눈금을 손가락으로 같이 짚게 한다.',
        task: '표의 수를 보고 막대를 눌러 알맞은 높이로 맞추어요.',
        levels: { easy: { showValues: true }, base: {}, challenge: {} },
        items: [
          { prompt: '표를 보고 사흘 동안 걸린 시간을 막대로 나타내 보세요.', toolOptions: { type: 'bar', mode: 'build', title: '하준이의 등굣길 시간', data: [['월', 14], ['화', 10], ['수', 12]], unit: '분', xLabel: '요일', yLabel: '걸린 시간', scale: 2, max: 16, given: [0] }, hints: ['표에 적힌 수만큼 막대 끝이 눈금에 닿게 맞춰요. 이미 그려진 막대를 기준으로 삼아도 좋아요.'], target: { build: true }, difficulty: 0.15 },
          { prompt: '방법별 평균 시간을 표에서 막대로 나타내 보세요.', toolOptions: { type: 'bar', mode: 'build', title: '방법별 평균 시간', data: [['걷기', 20], ['버스', 12], ['자전거', 8]], unit: '분', xLabel: '방법', yLabel: '평균 시간', scale: 4, max: 24 }, hints: ['표의 평균 시간을 한 방법씩 읽고 막대를 누를 때마다 눈금이 올라가는 것을 보며 맞춰요.'], target: { build: true }, difficulty: 0.2 },
          { prompt: '비가 온 날과 맑은 날의 버스 시간을 막대로 나타내 보세요.', toolOptions: { type: 'bar', mode: 'build', title: '날씨에 따른 버스 시간', data: [['맑은 날', 11], ['비 온 날', 17]], unit: '분', xLabel: '날씨', yLabel: '시간', scale: 1, max: 20, step: 1 }, hints: ['두 날의 시간이 얼마나 다른지 눈으로 보이게 막대 높이를 정확히 맞춰요.'], target: { build: true }, difficulty: 0.25 },
        ],
      },
      {
        title: '활동 2. 꺾은선그래프에서 변화 읽기', tool: 'chart',
        teacher: '"점이 올라가면 걸린 시간이 늘어난 거예요. 어느 날이 가장 높나요?" 눈금 시작이 0이 아닐 때는 물결선을 짚어 준다. 선이 올라가면 빨라진다고 읽는 학생에게는 세로 축 이름을 다시 읽게 한다.',
        task: '꺾은선그래프에서 점을 읽고 물음에 답해요.',
        levels: { easy: { showValues: true }, base: {}, challenge: {} },
        items: [
          { prompt: '사흘 중 걸린 시간이 가장 짧은 날은 언제인가요?', toolOptions: { type: 'line', mode: 'read', title: '지아의 버스 시간', data: [['월', 15], ['화', 11], ['수', 13]], unit: '분', xLabel: '요일', yLabel: '걸린 시간', scale: 2, from: 8, max: 16, question: '가장 짧은 날은?', choices: ['월', '화', '수'] }, hints: ['점의 높이가 낮을수록 시간이 짧아요. 세로 축 이름을 먼저 확인해요.'], target: { pick: 1 }, difficulty: 0.15 },
          { prompt: '화요일 점이 가리키는 시간은 몇 분인가요?', toolOptions: { type: 'line', mode: 'read', title: '도윤이의 자전거 시간', data: [['월', 9], ['화', 7], ['수', 8], ['목', 6]], unit: '분', xLabel: '요일', yLabel: '걸린 시간', scale: 1, from: 4, max: 10 }, hints: ['화요일 점에서 옆으로 가 눈금을 읽어요. 눈금이 4부터 시작한다는 것도 확인해요.'], target: { value: 7 }, difficulty: 0.2 },
          { prompt: '월요일에서 수요일까지 시간은 몇 분 줄었나요?', toolOptions: { type: 'line', mode: 'read', title: '가은이의 걷기 시간', data: [['월', 22], ['화', 20], ['수', 17]], unit: '분', xLabel: '요일', yLabel: '걸린 시간', scale: 2, from: 14, max: 24 }, hints: ['월요일과 수요일 점의 값을 각각 읽고, 큰 수에서 작은 수를 빼요.'], target: { value: 5 }, difficulty: 0.3 },
        ],
      },
      {
        title: '활동 3. 기록을 근거로 더 나은 길 고르기', tool: 'mindmap',
        teacher: '"기록이 이렇게 나왔어요. 버스와 자전거 중 어느 쪽이 더 낫다고 말할 수 있을까요? 근거는요?" 한 가지 사실만으로 정하지 말고 기록과 시간·비용·환경을 함께 연결하게 한다. \'그냥 이게 좋아요\'라고 답하는 학생에게는 기록의 어느 줄이 그 생각을 받쳐 주는지 묻는다.',
        task: '기록 카드를 읽고 근거를 이어 보거나, 더 나은 길을 골라요.',
        items: [
          { prompt: '기록 카드가 어떤 결론을 받쳐 주는지 이어 보세요.', toolOptions: { mode: 'match', topic: '근거와 결론', slots: [{ id: 'fast', label: '자전거가 더 빨라요' }, { id: 'cheap', label: '걷기가 값이 싸요' }, { id: 'clean', label: '지하철이 공기에 부담이 적어요' }], cards: ['사흘 모두 자전거가 8분 이하였어요', '걷기는 돈이 한 푼도 들지 않았어요', '지하철은 많은 사람이 한꺼번에 타요', '버스는 비 오는 날 늦었어요'] }, hints: ['결론을 읽고, 기록의 어느 사실이 그 말을 받쳐 주는지 짝을 지어요. 맞지 않는 카드는 남겨요.'], target: { match: { fast: '사흘 모두 자전거가 8분 이하였어요', cheap: '걷기는 돈이 한 푼도 들지 않았어요', clean: '지하철은 많은 사람이 한꺼번에 타요' } }, difficulty: 0.25 },
          { prompt: '기록을 한 가지 잣대로만 보고 정하면 생길 수 있는 문제를 골라 보세요.', toolOptions: { mode: 'pick', topic: '잘못된 선택', basket: '생길 수 있는 문제', cards: ['시간이 짧아도 돈이 많이 들 수 있어요', '값이 싸도 위험하거나 힘들 수 있어요', '기록이 많을수록 틀려요', '공기에 부담이 큰 방법을 고를 수 있어요'] }, hints: ['한 잣대만 보면 나머지 잣대에서 손해를 보는 경우가 있는지 생각해 보아요.'], target: { pick: ['시간이 짧아도 돈이 많이 들 수 있어요', '값이 싸도 위험하거나 힘들 수 있어요', '공기에 부담이 큰 방법을 고를 수 있어요'] }, difficulty: 0.25 },
          { prompt: '더 나은 길을 정하는 차례대로 카드를 놓아 보세요.', toolOptions: { mode: 'order', topic: '고르는 차례', cards: ['사흘 동안 탈것과 시간 기록하기', '기록을 표와 그래프로 나타내기', '시간·비용·환경으로 견주기', '근거를 들어 더 나은 길 정하기'] }, hints: ['먼저 사실을 모으고, 눈에 보이게 정리한 뒤, 견주고, 마지막에 결정하는 흐름이에요.'], target: { order: ['사흘 동안 탈것과 시간 기록하기', '기록을 표와 그래프로 나타내기', '시간·비용·환경으로 견주기', '근거를 들어 더 나은 길 정하기'] }, difficulty: 0.3,
            predict: { q: '하루 기록만으로 더 나은 길을 정해도 될까요?', options: ['충분해요', '며칠 더 기록하면 더 믿을 수 있어요', '잘 모르겠어요'], answer: 1 },
            conclude: '날씨나 사정에 따라 하루는 다를 수 있어요. 여러 날 기록해야 더 믿을 수 있어요.' },
        ],
      },
    ],
    wrap: '"오늘 기록으로 더 나은 길을 하나 골라 근거 한 가지와 함께 말해 볼까요?" 출구 2번에서 한 가지 잣대만 고른 학생에게는 \'다른 두 잣대에서는 어땠나요?\'라고 묻는다. 과제로 집에서 사흘 동안 탈것과 걸린 시간을 기록해 오게 하고, 다음 시간부터 친환경 탈것의 시제품을 만들기 위해 탈것의 부분을 살펴본다고 예고한다.',
    exit: [
      { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '서현이의 하굣길', data: [['걷기', 15], ['자전거', 9], ['버스', 11]], unit: '분', scale: 3, max: 15, question: '가장 빨리 간 방법은?', choices: ['걷기', '자전거', '버스'] }, prompt: '막대그래프를 보고 가장 빨리 간 방법을 골라 보세요.', target: { pick: 1 }, difficulty: 0.1 },
      { type: 'choice', prompt: '더 나은 길을 믿을 만하게 고르는 방법은 무엇인가요?', options: ['한 번만 타 보고 정해요', '여러 날 기록하고 견주어요', '친구를 따라 정해요'], answer: 1, difficulty: 0.15, explain: '여러 날의 기록을 견주어야 우연한 차이를 줄일 수 있어요.' },
      { type: 'short', prompt: '내가 고른 더 나은 길과 그 근거를 한 문장으로 쓰세요.' },
    ],
    wsTitle: '사흘 등굣길 기록표',
    ws: [
      { type: 'table', prompt: '사흘 동안의 등굣길을 기록하세요.', columns: ['요일', '탈것', '걸린 시간(분)', '날씨'], rows: 3 },
      { type: 'figure', wide: true, prompt: '꺾은선을 보고 시간이 가장 짧은 날에 ○ 하세요.', tool: 'chart', figures: [{ options: { type: 'line', mode: 'read', data: [['월', 12], ['화', 9], ['수', 11]], unit: '분', yLabel: '시간', title: '수민이의 등굣길', scale: 6, from: 6, max: 12 }, caption: '가장 짧은 날: (   )요일' }], answer: '화요일' },
      { type: 'choice', prompt: '근거로 알맞은 말에 ○ 하세요.', options: ['버스가 더 멋져요', '사흘 모두 버스가 10분 이하였어요', '친구가 버스를 타요'], answer: '사흘 모두 버스가 10분 이하였어요' },
      { type: 'short', prompt: '기록을 보고 내가 고른 더 나은 길과 근거를 쓰세요.' },
    ],
    easyNote: '표의 수를 그래프에서 찾고, 가장 짧은 날을 골라요.',
    wsEasy: [
      { type: 'table', prompt: '오늘 등굣길을 기록하세요.', columns: ['탈것', '걸린 시간(분)'], rows: 1 },
      { type: 'choice', prompt: '시간이 더 짧은 방법에 ○ 하세요.', options: ['9분 걸린 자전거', '15분 걸린 걷기'], answer: '9분 걸린 자전거' },
      { type: 'short', prompt: '기록이 필요한 까닭을 쓰세요.' },
    ],
    diff: {
      easy: '막대 끝 숫자가 보이고, 맞게 놓으면 초록 테두리가 생겨요.',
      base: '표의 수를 보고 직접 맞춘 뒤 확인을 눌러요.',
      challenge: '꺾은선그래프의 눈금이 0이 아닌 값에서 시작하고, 값의 차를 직접 계산해야 해요.',
    },
    notes: '자주 보이는 어려움: ① 표의 수와 막대 눈금을 한 칸 어긋나게 읽는다 → 손가락으로 같이 짚는다. ② 하루 기록으로 결론을 낸다 → 날씨·사정이 다를 수 있음을 짚는다. ③ 근거 없이 취향으로 고른다 → 기록의 어느 줄이 받쳐 주는지 묻는다. 집에서 하는 기록 과제는 가족의 일정에 부담이 되지 않게 안내한다.',
  }));

  // ───────────────────────── 5차시 (core) 탈것의 부분 ─────────────────────────
  L.push(mk(5, {
    title: '탈것의 움직임·방향·멈춤 맡은 부분 찾기',
    obj: '탈것을 움직이고 방향을 바꾸고 멈추게 하는 부분으로 나누어 이름을 붙이고, 힘이 전해지는 차례를 말할 수 있다.',
    std: ['[6실03-05]'],
    pic: 'a toy car taken apart on a table showing wheels, a small motor, a steering part and a brake piece',
    layers: [
      { motif: 'sun', x: 420, y: 54, s: 0.7 }, { motif: 'cloud', x: 90, y: 48 }, { motif: 'hills', y: 208 },
      { motif: 'star', x: 220, y: 70, s: 0.6 }, { motif: 'flower', x: 90, y: 218 }, { motif: 'tree', x: 400, y: 216 },
      { motif: 'text', x: 240, y: 132, text: '움직여요 · 돌아요 · 멈춰요', size: 22 },
    ],
    intro: [
      '장난감 자동차나 자전거 사진을 보여 주고 "이 탈것이 앞으로 가려면 무엇이 필요할까요? 오른쪽으로 돌려면요? 멈추려면요?"라고 묻는다. 학생이 말하는 부분을 칠판에 세 갈래(움직임·방향·멈춤)로 모은다. 한 부분이 한 가지 일만 한다고 생각하는 학생에게는 바퀴가 움직임과 멈춤에 모두 관여함을 짚는다.',
      '내가 아는 탈것 하나를 골라, 움직이게 하는 부분과 멈추게 하는 부분을 한 가지씩 말해 봅시다.',
    ],
    acts: [
      {
        title: '활동 1. 부분이 맡은 일 이어 보기', tool: 'mindmap',
        teacher: '"핸들을 돌리면 무엇이 달라지나요? 브레이크를 잡으면 바퀴는 어떻게 되나요?" 부분의 이름과 하는 일을 한 번 더 말로 이어 보게 한다. 모터가 방향도 바꾼다고 말하는 학생에게는 \'모터는 힘을, 핸들은 방향을\'이라고 구분해 준다.',
        task: '일에 알맞은 부분 이름을 한 장씩 이어요.',
        items: [
          { prompt: '자동차에서 맡은 일에 알맞은 부분을 이어 보세요.', toolOptions: { mode: 'match', topic: '자동차의 부분', slots: [{ id: 'go', label: '움직이게 해요' }, { id: 'turn', label: '방향을 바꿔요' }, { id: 'stop', label: '멈추게 해요' }], cards: ['모터', '핸들', '브레이크', '거울'] }, hints: ['힘을 만드는 것, 바퀴의 방향을 바꾸는 것, 속도를 줄이는 것이 각각 무엇인지 떠올려요. 일을 맡지 않은 카드는 남겨요.'], target: { match: { go: '모터', turn: '핸들', stop: '브레이크' } }, difficulty: 0.15 },
          { prompt: '자전거에서 맡은 일에 알맞은 부분을 이어 보세요.', toolOptions: { mode: 'match', topic: '자전거의 부분', slots: [{ id: 'go', label: '움직이게 해요' }, { id: 'turn', label: '방향을 바꿔요' }, { id: 'stop', label: '멈추게 해요' }], cards: ['페달과 체인', '손잡이', '손 브레이크', '안장'] }, hints: ['발로 돌려 힘을 전하는 것, 손으로 방향을 잡는 것, 속도를 줄이는 것을 구분해요.'], target: { match: { go: '페달과 체인', turn: '손잡이', stop: '손 브레이크' } }, difficulty: 0.2 },
          { prompt: '배에서 맡은 일에 알맞은 부분을 이어 보세요.', toolOptions: { mode: 'match', topic: '배의 부분', slots: [{ id: 'go', label: '앞으로 나아가요' }, { id: 'turn', label: '방향을 바꿔요' }, { id: 'stop', label: '한자리에 머물러요' }], cards: ['프로펠러', '키', '닻', '구명조끼'] }, hints: ['물을 밀어 앞으로 가게 하는 것, 방향을 잡는 것, 바닥에 내려 붙잡는 것을 떠올려요.'], target: { match: { go: '프로펠러', turn: '키', stop: '닻' } }, difficulty: 0.25 },
        ],
      },
      {
        title: '활동 2. 부분을 세 갈래로 나누기', tool: 'mindmap',
        teacher: '"장난감 자동차를 분해했더니 부품이 이렇게 나왔어요. 하나씩 어디에 넣을까요?" 부품을 만지듯 하나씩 말로 읽고 갈래에 넣게 한다. 건전지는 힘을 \'만드는\' 곳이 아니라 \'저장\'한다는 점, 바퀴는 방향과도 얽힌다는 점을 짚는다.',
        task: '부품 카드를 움직임·방향·멈춤 가지에 나누어 넣어요.',
        items: [
          { prompt: '장난감 자동차 부품을 맡은 일에 따라 나누어 보세요.', toolOptions: { topic: '장난감 자동차', slots: ['움직임', '방향', '멈춤'], cards: ['모터', '건전지', '핸들 막대', '앞바퀴 축', '브레이크 패드', '스위치'] }, hints: ['힘을 내거나 전하는 것, 바퀴를 꺾는 것, 속도를 줄이는 것으로 나누어요. 힘의 길에 놓인 것은 모두 움직임 쪽이에요.'], target: { sort: { 움직임: ['모터', '건전지', '스위치'], 방향: ['핸들 막대', '앞바퀴 축'], 멈춤: ['브레이크 패드'] } }, difficulty: 0.2 },
          { prompt: '자전거 부분을 맡은 일에 따라 나누어 보세요.', toolOptions: { topic: '자전거', slots: ['움직임', '방향', '멈춤'], cards: ['페달', '체인', '손잡이', '앞 포크', '브레이크 줄', '고무 패드'] }, hints: ['발의 힘을 바퀴까지 전하는 것, 앞바퀴를 꺾는 것, 줄을 당겨 바퀴를 잡는 것으로 나누어요.'], target: { sort: { 움직임: ['페달', '체인'], 방향: ['손잡이', '앞 포크'], 멈춤: ['브레이크 줄', '고무 패드'] } }, difficulty: 0.25 },
          { prompt: '움직임을 맡은 부분만 골라 보세요.', toolOptions: { mode: 'pick', topic: '움직임을 맡은 부분', basket: '움직임을 맡았어요', cards: ['태양광 전지', '모터', '바퀴 축', '핸들', '브레이크'] }, hints: ['빛이나 전기를 받아 바퀴를 돌리는 데 쓰이는 부분을 모두 찾아요.'], target: { pick: ['태양광 전지', '모터', '바퀴 축'] }, difficulty: 0.25 },
        ],
      },
      {
        title: '활동 3. 힘이 전해지는 차례 놓기', tool: 'mindmap',
        teacher: '"발로 페달을 밟으면 바퀴가 돌기까지 어떤 부분을 거칠까요?" 손가락으로 힘의 길을 따라가게 한다. 체인을 건너뛰고 페달에서 바퀴로 바로 간다고 말하는 학생에게는 \'페달과 뒷바퀴가 떨어져 있어요\'라고 짚는다.',
        task: '힘이 처음 생기는 곳부터 바퀴까지 차례대로 놓아요.',
        items: [
          { prompt: '자전거에서 힘이 전해지는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', topic: '자전거의 힘', cards: ['다리의 힘', '페달', '체인', '뒷바퀴'] }, hints: ['힘이 처음 생기는 곳에서 가장 마지막에 땅과 닿는 곳까지의 흐름을 떠올려요.'], target: { order: ['다리의 힘', '페달', '체인', '뒷바퀴'] }, difficulty: 0.2 },
          { prompt: '전기 자동차에서 힘이 전해지는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', topic: '전기 자동차의 힘', cards: ['배터리', '전선', '모터', '바퀴 축', '바퀴'] }, hints: ['전기가 저장된 곳에서 전선을 지나 힘으로 바뀌고 바퀴로 가는 흐름이에요.'], target: { order: ['배터리', '전선', '모터', '바퀴 축', '바퀴'] }, difficulty: 0.25 },
          { prompt: '태양광 장난감 자동차에서 힘이 전해지는 차례를 놓아 보세요.', toolOptions: { mode: 'order', topic: '태양광 장난감 자동차', cards: ['햇빛', '태양광 전지', '모터', '기어', '바퀴'] }, hints: ['빛을 받아 전기를 만들고, 그 전기가 모터를 돌려 바퀴까지 가는 흐름을 따라가 보아요.'], target: { order: ['햇빛', '태양광 전지', '모터', '기어', '바퀴'] }, difficulty: 0.3 },
        ],
      },
    ],
    wrap: '"오늘 탈것 하나를 골라 움직임·방향·멈춤을 맡은 부분을 한 가지씩 말해 볼까요?" 출구 1번에서 핸들을 움직임 칸에 넣은 학생에게는 \'핸들을 돌리면 속도가 달라지나요, 가는 방향이 달라지나요?\'라고 묻는다. 다음 시간에는 햇빛 같은 친환경 에너지로 가는 탈것이 어떤 점이 좋고 어떤 한계가 있는지 알아본다고 예고한다.',
    exit: [
      { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '킥보드의 부분', slots: [{ id: 'turn', label: '방향을 바꿔요' }, { id: 'stop', label: '멈추게 해요' }], cards: ['손잡이', '뒷바퀴 브레이크', '발판'] }, prompt: '킥보드에서 맡은 일에 알맞은 부분을 이어 보세요.', target: { match: { turn: '손잡이', stop: '뒷바퀴 브레이크' } }, difficulty: 0.1 },
      { type: 'choice', prompt: '자전거에서 페달의 힘을 뒷바퀴로 전해 주는 부분은 무엇인가요?', options: ['안장', '체인', '거울'], answer: 1, difficulty: 0.15, explain: '체인이 페달의 움직임을 뒷바퀴로 이어 줘요.' },
      { type: 'short', prompt: '내가 아는 탈것의 부분 하나와 그것이 맡은 일을 쓰세요.' },
    ],
    wsTitle: '탈것의 부분 알아보기',
    ws: [
      { type: 'figure', wide: true, prompt: '가지마다 장난감 자동차의 부분을 한 가지씩 써 넣으세요.', tool: 'mindmap', figures: [{ options: { topic: '장난감 자동차', printCards: false, slots: ['움직임', '방향', '멈춤'], cards: ['보기'] }, caption: '' }], answer: '예: 움직임 — 모터 / 방향 — 핸들 막대 / 멈춤 — 브레이크' },
      { type: 'choice', prompt: '방향을 바꾸는 부분에 ○ 하세요.', options: ['모터', '핸들', '건전지'], answer: '핸들' },
      { type: 'table', prompt: '탈것마다 부분을 쓰세요.', columns: ['탈것', '움직임', '방향', '멈춤'], cells: [['자전거', '', '', ''], ['배', '', '', ''], ['', '', '', '']] },
      { type: 'short', prompt: '자동차에 브레이크가 없다면 어떤 일이 생길지 쓰세요.' },
    ],
    easyNote: '움직임은 힘, 방향은 꺾기, 멈춤은 속도 줄이기예요.',
    wsEasy: [
      { type: 'choice', prompt: '멈추게 하는 부분에 ○ 하세요.', options: ['브레이크', '모터'], answer: '브레이크' },
      { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '자전거에서 방향을 잡는 부분은 ___이에요.', answer: '손잡이' },
      { type: 'short', prompt: '내가 아는 탈것의 부분 하나를 쓰세요.' },
    ],
    diff: {
      easy: '알맞은 곳에 놓으면 초록 테두리가 생기고, 틀리게 놓으면 까닭을 말해 주고 되돌아와요.',
      base: '모두 놓은 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '부품이 여섯 개 이상 나오고, 힘이 전해지는 차례의 칸이 다섯 개까지 늘어요.',
    },
    notes: '자주 보이는 어려움: ① 건전지·스위치를 어느 갈래에 넣을지 헷갈린다 → \'힘을 내고 전하는 길\'로 본다. ② 핸들이 속도를 바꾼다고 말한다 → 방향과 속도를 나누어 묻는다. ③ 힘의 전달 순서에서 중간 부분(체인·기어)을 건너뛴다 → 손으로 따라가게 한다.',
  }));

  // ───────────────────────── 6차시 (practice) 친환경 에너지의 장점과 한계 ─────────────────────────
  L.push(mk(6, {
    title: '햇빛·전기·수소 탈것의 좋은 점과 한계 가리기',
    obj: '친환경 에너지로 가는 탈것의 좋은 점과 한계를 각각 들고, 조건에 따라 알맞게 쓰이는 때를 가릴 수 있다.',
    std: ['[6실03-05]'],
    pic: 'a solar powered toy car, an electric bus and a hydrogen train under a bright sky with a cloud covering part of the sun',
    layers: [
      { motif: 'sun', x: 400, y: 56, s: 0.9 }, { motif: 'cloud', x: 340, y: 70, s: 0.8 }, { motif: 'cloud', x: 100, y: 46 },
      { motif: 'hills', y: 208 }, { motif: 'leaf', x: 90, y: 214, s: 0.8 }, { motif: 'tree', x: 250, y: 216 }, { motif: 'house', x: 170, y: 218, color: 'sky', s: 0.8 },
      { motif: 'text', x: 240, y: 132, text: '맑으면 좋고, 흐리면?', size: 24 },
    ],
    intro: [
      '"햇빛으로 달리는 자동차가 있다면 비 오는 날에는 어떻게 될까요?" 학생의 예상을 들은 뒤 맑은 날·구름 낀 날·밤을 칠판에 적는다. 오늘은 친환경 에너지 탈것이 좋은 점도 있고 한계도 있음을 사례로 가려 본다. \'친환경이면 어디서나 잘 간다\'고 믿는 학생에게는 조건이 필요함을 짚는다.',
      '햇빛이나 전기로 가는 탈것의 좋은 점 하나와 어려울 것 같은 점 하나를 짝과 말해 봅시다.',
    ],
    acts: [
      {
        title: '활동 1. 태양광 탈것의 좋은 점과 한계 나누기', tool: 'mindmap',
        teacher: '"태양광 자동차가 연료를 안 쓰는 건 좋은 점이죠. 그럼 밤에는요?" 카드를 읽고 \'좋은 점\'과 \'한계\' 중 어디에 속하는지 근거와 함께 말하게 한다. 한계를 \'나쁜 점\'으로만 보는 학생에게 \'한계를 알아야 고칠 수 있다\'고 말해 준다.',
        task: '카드를 읽고 좋은 점과 한계 가지에 나누어 넣어요.',
        items: [
          { prompt: '태양광으로 달리는 탈것의 좋은 점과 한계를 나누어 보세요.', toolOptions: { topic: '태양광 탈것', slots: ['좋은 점', '한계'], cards: ['연료 값이 들지 않아요', '달리는 동안 배기가스가 없어요', '흐린 날에는 힘이 약해져요', '밤에는 전지를 채울 수 없어요'] }, hints: ['쓸수록 이로운 점은 좋은 점, 어떤 조건에서 잘 안 되는 점은 한계로 나누어요.'], target: { sort: { '좋은 점': ['연료 값이 들지 않아요', '달리는 동안 배기가스가 없어요'], 한계: ['흐린 날에는 힘이 약해져요', '밤에는 전지를 채울 수 없어요'] } }, difficulty: 0.2 },
          { prompt: '전기 자동차의 좋은 점과 한계를 나누어 보세요.', toolOptions: { topic: '전기 자동차', slots: ['좋은 점', '한계'], cards: ['소리가 조용해요', '움직이는 동안 매연이 없어요', '충전하는 데 시간이 걸려요', '충전소가 없는 곳은 멀리 가기 어려워요'] }, hints: ['타는 사람과 환경에 이로운 점인지, 쓰는 데 불편이나 제약이 되는 점인지 가려요.'], target: { sort: { '좋은 점': ['소리가 조용해요', '움직이는 동안 매연이 없어요'], 한계: ['충전하는 데 시간이 걸려요', '충전소가 없는 곳은 멀리 가기 어려워요'] } }, difficulty: 0.25 },
          { prompt: '바람의 힘을 쓰는 돛단배에 대해 맞는 말만 골라 보세요.', toolOptions: { mode: 'pick', topic: '돛단배', basket: '맞는 말', cards: ['연료 없이 나아갈 수 있어요', '바람이 없으면 속도가 줄어요', '바람과 반대쪽으로 아주 빠르게 가요', '날씨에 따라 가는 시간이 달라져요'] }, hints: ['바람이 기계처럼 늘 정해진 힘을 주는지 생각해 보고, 날씨의 영향을 받는 말과 연료 이야기를 찾아요.'], target: { pick: ['연료 없이 나아갈 수 있어요', '바람이 없으면 속도가 줄어요', '날씨에 따라 가는 시간이 달라져요'] }, difficulty: 0.3 },
        ],
      },
      {
        title: '활동 2. 에너지와 알맞은 탈것 짝 짓기', tool: 'mindmap',
        teacher: '"전기, 햇빛, 수소 중 어떤 에너지가 어떤 탈것에 잘 쓰일까요?" 에너지 이름과 탈것 사례를 이어 보게 한다. 수소 열차의 연료 전지가 \'수소를 태워서\' 움직인다고 오해하는 학생에게는 전기를 만드는 방식이 다르다는 점을 그림으로 짚어 준다.',
        task: '에너지 이름에 알맞은 탈것 사례를 한 장씩 이어요.',
        items: [
          { prompt: '친환경 에너지와 그 에너지를 쓰는 탈것을 이어 보세요.', toolOptions: { mode: 'match', topic: '에너지와 탈것', slots: [{ id: 'sun', label: '햇빛' }, { id: 'elec', label: '충전한 전기' }, { id: 'h2', label: '수소' }], cards: ['태양광 장난감 자동차', '전기 시내버스', '수소 연료 전지 열차', '경유 화물차'] }, hints: ['에너지를 어디에서 얻는지 생각하고, 친환경 에너지를 쓰지 않는 카드는 남겨요.'], target: { match: { sun: '태양광 장난감 자동차', elec: '전기 시내버스', h2: '수소 연료 전지 열차' } }, difficulty: 0.2 },
          { prompt: '친환경 탈것으로 보기 어려운 것만 골라 보세요.', toolOptions: { mode: 'pick', topic: '친환경이 아닌 것', basket: '친환경으로 보기 어려워요', cards: ['석탄으로 가는 옛 증기선', '자전거', '전기 열차', '경유를 태우는 낡은 버스'] }, hints: ['타는 동안 연료를 태워 매연을 많이 내는지 살펴 골라요.'], target: { pick: ['석탄으로 가는 옛 증기선', '경유를 태우는 낡은 버스'] }, difficulty: 0.2 },
          { prompt: '친환경 에너지가 쓰이는 방식을 차례대로 놓아 보세요.', toolOptions: { mode: 'order', topic: '전기 버스가 달리기까지', cards: ['발전소에서 전기 만들기', '충전소에서 배터리 채우기', '모터가 바퀴 돌리기', '버스가 승객을 태우고 달리기'] }, hints: ['전기가 만들어지는 곳에서 시작해, 버스 안의 장치를 거쳐 도로에서 쓰이는 흐름이에요.'], target: { order: ['발전소에서 전기 만들기', '충전소에서 배터리 채우기', '모터가 바퀴 돌리기', '버스가 승객을 태우고 달리기'] }, difficulty: 0.25 },
        ],
      },
      {
        title: '활동 3. 조건에 알맞게 쓰기', tool: 'mindmap',
        teacher: '"구름이 많이 낀 낮에 태양광 자동차를 달리게 하면 어떻게 될까요?" 조건을 바꾸면 결과가 어떻게 달라지는지 예상하고, 그 예상을 모둠이 확인하게 한다. \'친환경이면 늘 잘 간다\'는 생각을 \'조건을 맞추거나 다른 방법을 보태야 한다\'로 고친다.',
        task: '조건을 읽고 알맞은 경우만 고르거나 나누어요.',
        items: [
          { prompt: '태양광 장난감 자동차가 잘 달리는 때만 골라 보세요.', toolOptions: { mode: 'pick', topic: '잘 달리는 때', basket: '잘 달려요', cards: ['햇빛이 쨍쨍한 한낮', '구름이 가득한 저녁', '해가 진 밤', '밝은 교실 창가'] }, hints: ['전지에 빛이 얼마나 닿는지 생각하고, 빛이 충분한 조건을 모두 찾아요.'], target: { pick: ['햇빛이 쨍쨍한 한낮', '밝은 교실 창가'] }, difficulty: 0.2,
            predict: { q: '친환경 에너지를 쓰면 어떤 때든 똑같이 잘 달릴까요?', options: ['그래요', '조건에 따라 달라요', '잘 모르겠어요'], answer: 1 },
            conclude: '친환경 에너지도 조건이 맞아야 잘 쓰여요. 한계를 알면 다른 방법을 함께 쓸 수 있어요.' },
          { prompt: '한계를 줄이는 방법과 알맞은 한계를 이어 보세요.', toolOptions: { mode: 'match', topic: '한계 줄이기', slots: [{ id: 'dark', label: '밤에는 햇빛이 없어요' }, { id: 'slow', label: '충전이 오래 걸려요' }, { id: 'far', label: '충전소가 멀어요' }], cards: ['낮에 모은 전기를 배터리에 담아 둬요', '빠른 충전기를 늘려요', '충전소를 도로 곳곳에 세워요', '더 무거운 배터리를 달아요'] }, hints: ['한계를 먼저 읽고, 그 어려움을 직접 줄이는 방법을 골라요. 더 큰 불편을 만드는 카드는 남겨요.'], target: { match: { dark: '낮에 모은 전기를 배터리에 담아 둬요', slow: '빠른 충전기를 늘려요', far: '충전소를 도로 곳곳에 세워요' } }, difficulty: 0.3 },
          { prompt: '상황에 알맞게 탈것의 에너지를 나누어 보세요.', toolOptions: { topic: '알맞은 에너지', slots: ['햇빛이 알맞아요', '전기 충전이 알맞아요'], cards: ['해가 잘 드는 학교 옥상 운반 로봇', '매일 같은 길을 도는 시내버스', '햇볕이 오래 드는 공원 놀이 열차', '충전소가 가까운 택배 전기 트럭'] }, hints: ['햇빛을 늘 받을 수 있는 환경인지, 정해진 길을 돌며 충전할 수 있는 환경인지 보고 나누어요.'], target: { sort: { '햇빛이 알맞아요': ['해가 잘 드는 학교 옥상 운반 로봇', '햇볕이 오래 드는 공원 놀이 열차'], '전기 충전이 알맞아요': ['매일 같은 길을 도는 시내버스', '충전소가 가까운 택배 전기 트럭'] } }, difficulty: 0.3 },
        ],
      },
    ],
    wrap: '"친환경 에너지 탈것의 좋은 점 하나와 한계 하나를 말하고, 한계를 줄이는 방법을 한 가지 덧붙여 볼까요?" 출구 3번에서 한계를 \'쓸모없다\'로 쓴 학생에게는 한계를 고쳐 갈 방법이 있는지 묻는다. 다음 시간에는 태양광 전지를 붙인 시제품을 순서에 따라 만든다고 알리고, 가위·접착제 안전 약속을 예고한다.',
    exit: [
      { type: 'tool', tool: 'mindmap', options: { topic: '태양광 탈것', slots: ['좋은 점', '한계'], cards: ['연료를 사지 않아도 돼요', '그늘에서는 힘이 약해요'] }, prompt: '태양광 탈것의 말을 좋은 점과 한계로 나누어 보세요.', target: { sort: { '좋은 점': ['연료를 사지 않아도 돼요'], 한계: ['그늘에서는 힘이 약해요'] } }, difficulty: 0.1 },
      { type: 'choice', prompt: '흐린 날에도 태양광 탈것을 쓰려면 어떻게 하면 좋을까요?', options: ['낮에 모은 전기를 배터리에 담아 둬요', '전지를 뒤집어 붙여요', '탈것을 아예 쓰지 않아요'], answer: 0, difficulty: 0.15, explain: '모아 둔 전기를 쓰면 흐린 날에도 움직일 수 있어요.' },
      { type: 'short', prompt: '친환경 에너지 탈것의 한계 하나와 그것을 줄이는 방법을 쓰세요.' },
    ],
    wsTitle: '친환경 탈것 좋은 점·한계표',
    ws: [
      { type: 'figure', wide: true, prompt: '가지마다 태양광 탈것의 좋은 점과 한계를 한 가지씩 써 넣으세요.', tool: 'mindmap', figures: [{ options: { topic: '태양광 탈것', printCards: false, slots: ['좋은 점', '한계'], cards: ['보기'] }, caption: '' }], answer: '예: 좋은 점 — 연료 값이 들지 않아요 / 한계 — 흐린 날 힘이 약해져요' },
      { type: 'choice', prompt: '태양광 장난감 자동차가 가장 잘 달릴 때에 ○ 하세요.', options: ['해가 진 밤', '햇빛이 쨍쨍한 한낮', '구름이 가득한 저녁'], answer: '햇빛이 쨍쨍한 한낮' },
      { type: 'table', prompt: '에너지마다 좋은 점과 한계를 쓰세요.', columns: ['에너지', '좋은 점', '한계'], cells: [['햇빛', '', ''], ['전기', '', ''], ['수소', '', '']] },
      { type: 'short', prompt: '내가 사는 곳에서 친환경 탈것이 쓰인다면 어떤 한계를 먼저 풀어야 할지 쓰세요.' },
    ],
    easyNote: '좋은 점은 이로운 것, 한계는 잘 안 되는 때예요.',
    wsEasy: [
      { type: 'choice', prompt: '한계에 해당하는 것에 ○ 하세요.', options: ['연료를 안 써요', '밤에는 햇빛이 없어요'], answer: '밤에는 햇빛이 없어요' },
      { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '태양광 자동차는 ___이 있어야 잘 달려요.', answer: '햇빛' },
      { type: 'short', prompt: '친환경 탈것의 좋은 점 하나를 쓰세요.' },
    ],
    diff: {
      easy: '알맞은 가지에 놓으면 초록 테두리가 생기고, 틀리게 놓으면 까닭을 말해 주고 되돌아와요.',
      base: '모두 놓은 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '돛단배 고르기에서 \'바람과 반대쪽으로 아주 빠르게 가요\' 같은 그럴듯한 틀린 말이 함께 나와요.',
    },
    notes: '자주 보이는 어려움: ① 친환경이면 조건과 상관없이 잘 간다고 믿는다 → 맑은 날과 밤을 견주어 보게 한다. ② 한계를 나쁜 점으로만 본다 → 한계를 알아야 고칠 수 있다고 말한다. ③ 수소·전기의 에너지원을 헷갈린다 → 전기를 어떻게 얻는지 그림으로 확인한다.',
  }));

  // ───────────────────────── 7차시 (core) 태양광 시제품 조립 ─────────────────────────
  L.push(mk(7, {
    title: '태양광 시제품을 점검하고 순서대로 조립하기',
    obj: '태양광 전지를 붙인 시제품을 만들기 전에 재료와 도구를 점검하고, 조립 차례를 정해 움직임이 약할 때 연결을 확인할 수 있다.',
    std: ['[6실03-05]'],
    pic: 'a student desk with a small solar panel, a tiny motor, wheels, scissors with a safety cap and a tidy parts tray',
    layers: [
      { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 110, y: 48 }, { motif: 'hills', y: 208 },
      { motif: 'star', x: 250, y: 70, s: 0.6 }, { motif: 'house', x: 90, y: 216, s: 0.8 }, { motif: 'tree', x: 390, y: 216 },
      { motif: 'text', x: 240, y: 132, text: '점검하고 만들고 시험해요', size: 22 },
    ],
    safety: ['가위와 칼은 사용 뒤 바로 덮개를 닫고, 칼날 쪽을 나에게 향하지 않아요.', '접착제는 환기가 되는 곳에서 조금만 쓰고, 눈과 입에 닿지 않게 해요. 닿으면 바로 선생님께 말해요.', '전선 끝이나 전지 단자는 입에 넣거나 서로 맞대 단락시키지 않아요.', '모터가 돌 때는 손가락을 바퀴에 대지 않아요.'],
    intro: [
      '"오늘은 우리가 직접 태양광 시제품을 만들어 볼 거예요. 만들기 전에 가장 먼저 할 일은 무엇일까요?" 재료·도구가 빠졌는지 점검하고, 안전 약속을 읽는 일을 칠판에 적는다. "바로 붙이기부터 시작하면 어떻게 될까요?"라고 물어 순서를 지키는 까닭을 말하게 한다. 한 번 움직이지 않으면 부품이 불량이라고 생각하는 학생에게는 \'연결 상태를 먼저 봐요\'라고 말해 준다.',
      '내가 만들 시제품을 그려 보며, 필요한 재료와 도구를 세 가지 이상 떠올려 봅시다.',
    ],
    acts: [
      {
        title: '활동 1. 만들기 전 재료와 안전 점검', tool: 'kitchen',
        teacher: '"가위를 쓰기 전에 무엇을 확인해야 하나요?" 점검표를 한 줄씩 소리 내어 읽게 한다. \'재료는 만들다가 부족하면 가져와요\'라는 학생에게는 만들다 멈추면 어떤 문제가 생기는지 묻는다. 안전 점검은 \'나를 지키는 일\'임을 알려 준다.',
        task: '해야 할 점검에만 표시해요. 만드는 도중에는 점검할 틈이 없어요.',
        levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '시제품을 만들기 전에 해야 할 점검에만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '만들기 전 점검', items: [{ id: 'parts', text: '재료가 모두 있는지 세어 봐요' }, { id: 'tools', text: '가위·접착제가 알맞은 크기인지 봐요' }, { id: 'space', text: '책상 위를 정리해요' }, { id: 'play', text: '모터를 먼저 던져 봐요' }, { id: 'rush', text: '설명서는 읽지 않고 시작해요' }] }, hints: ['재료·도구·자리를 미리 갖추는 일인지, 위험하거나 건너뛰는 일인지 가려서 표시해요.'], target: { checklist: ['parts', 'tools', 'space'] }, difficulty: 0.15 },
          { prompt: '가위와 접착제를 쓸 때 지킬 약속에만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '도구 안전 약속', items: [{ id: 'cap', text: '다 쓰면 가위 덮개를 닫아요' }, { id: 'edge', text: '칼날을 나에게 향하지 않아요' }, { id: 'air', text: '접착제는 환기가 되는 곳에서 조금만 써요' }, { id: 'pass', text: '가위는 날을 잡고 던져 줘요' }, { id: 'eye', text: '접착제 묻은 손으로 눈을 비벼요' }] }, hints: ['다치거나 아프지 않게 지키는 습관인지, 위험한 행동인지 따져서 표시해요.'], target: { checklist: ['cap', 'edge', 'air'] }, difficulty: 0.2 },
          { prompt: '전지와 전선을 다룰 때 알맞은 행동에만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '전기 부품 다루기', items: [{ id: 'dry', text: '손이 마른 상태에서 만져요' }, { id: 'short', text: '전선 두 끝을 서로 맞대 봐요' }, { id: 'out', text: '쓰지 않을 때는 전지를 빼 둬요' }, { id: 'mouth', text: '전지를 입에 물어 봐요' }] }, hints: ['전기 부품은 젖지 않게, 서로 합쳐지지 않게, 입에 넣지 않게 다루는 것을 떠올려요.'], target: { checklist: ['dry', 'out'] }, difficulty: 0.25 },
        ],
      },
      {
        title: '활동 2. 조립 차례 정하기', tool: 'kitchen',
        teacher: '"바퀴를 달기 전에 몸체를 만들어야 할까요, 아니면 바퀴부터 붙일까요?" 앞뒤 관계를 소리 내어 설명하게 한다. 모터를 먼저 붙이고 몸체를 나중에 만드는 학생에게는 \'모터를 어디에 붙이나요?\'라고 묻는다.',
        task: '시제품을 만드는 차례대로 카드를 놓아요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          { prompt: '태양광 시제품을 만드는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['몸체 판 자르기', '바퀴 축 끼우기', '모터와 기어 붙이기', '태양광 전지 연결하기', '밝은 곳에서 움직임 보기'] }, hints: ['모양을 먼저 만들고, 움직이는 부분을 단 뒤, 전기를 연결하고, 마지막에 시험해 보는 흐름이에요.'], target: { order: ['몸체 판 자르기', '바퀴 축 끼우기', '모터와 기어 붙이기', '태양광 전지 연결하기', '밝은 곳에서 움직임 보기'] }, difficulty: 0.2 },
          { prompt: '전선을 연결하는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['전선 끝 피복 조금 벗기기', '모터 단자에 감기', '테이프로 고정하기', '전지에 이어 연결 확인하기'] }, hints: ['전선을 준비하고, 부품에 이은 뒤, 단단히 붙이고, 마지막으로 이어졌는지 보는 차례예요.'], target: { order: ['전선 끝 피복 조금 벗기기', '모터 단자에 감기', '테이프로 고정하기', '전지에 이어 연결 확인하기'] }, difficulty: 0.25 },
          { prompt: '정리하는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['전지를 빼 두기', '남은 재료 상자에 담기', '가위와 접착제 제자리에 놓기', '손 씻기'] }, hints: ['전기를 끄는 일, 재료를 치우는 일, 도구를 돌려놓는 일 다음에 손을 씻는 흐름이에요.'], target: { order: ['전지를 빼 두기', '남은 재료 상자에 담기', '가위와 접착제 제자리에 놓기', '손 씻기'] }, difficulty: 0.25 },
        ],
      },
      {
        title: '활동 3. 움직이지 않을 때 연결 확인하기', tool: 'mindmap',
        teacher: '"모터가 돌지 않아요. 부품이 고장 났을까요? 먼저 무엇부터 살펴볼까요?" 연결·전지 방향·접촉을 하나씩 확인하게 한다. 곧바로 새 모터를 달라는 학생에게는 \'전선이 벌어졌는지 먼저 봐요\'라고 말해 준다.',
        task: '증상과 먼저 살펴볼 곳을 한 장씩 이어요.',
        items: [
          { prompt: '증상과 먼저 확인할 곳을 이어 보세요.', toolOptions: { mode: 'match', topic: '움직이지 않아요', slots: [{ id: 'still', label: '모터가 전혀 안 돌아요' }, { id: 'weak', label: '모터가 아주 느리게 돌아요' }, { id: 'one', label: '한쪽 바퀴만 돌아요' }], cards: ['전선이 이어졌는지 살펴요', '전지에 빛이 충분히 닿는지 봐요', '바퀴 축이 걸리지 않는지 봐요', '모터를 버려요'] }, hints: ['증상을 읽고, 그 증상이 가장 먼저 가리키는 원인을 한 곳씩 정해요. 문제를 건너뛰는 카드는 남겨요.'], target: { match: { still: '전선이 이어졌는지 살펴요', weak: '전지에 빛이 충분히 닿는지 봐요', one: '바퀴 축이 걸리지 않는지 봐요' } }, difficulty: 0.25 },
          { prompt: '먼저 살펴볼 곳이 맞는 것만 골라 보세요.', toolOptions: { mode: 'pick', topic: '먼저 살펴볼 곳', basket: '먼저 살펴요', cards: ['전선이 느슨하지 않은지', '단자에 전선이 닿는지', '모터를 새것으로 바꾸기', '친구 작품과 바꾸기'] }, hints: ['부품을 바꾸기 전에 연결과 접촉부터 살펴보는 습관을 떠올려요.'], target: { pick: ['전선이 느슨하지 않은지', '단자에 전선이 닿는지'] }, difficulty: 0.25 },
          { prompt: '움직임이 약한 까닭을 원인별로 나누어 보세요.', toolOptions: { topic: '움직임이 약한 까닭', slots: ['빛이 부족해서', '연결이 헐거워서', '무게가 무거워서'], cards: ['창가에서 멀리 떨어진 자리', '그늘이 진 책상', '전선 감은 곳이 풀렸어요', '단자에 전선이 안 닿아요', '장식을 너무 많이 붙였어요', '바퀴가 마찰로 뻑뻑해요'] }, hints: ['빛이 닿는 정도, 전기가 흐르는 길, 시제품의 무게 가운데 어디가 어긋났는지로 나누어요.'], target: { sort: { '빛이 부족해서': ['창가에서 멀리 떨어진 자리', '그늘이 진 책상'], '연결이 헐거워서': ['전선 감은 곳이 풀렸어요', '단자에 전선이 안 닿아요'], '무게가 무거워서': ['장식을 너무 많이 붙였어요', '바퀴가 마찰로 뻑뻑해요'] } }, difficulty: 0.3 },
        ],
      },
    ],
    wrap: '"오늘 만든 시제품이 안 움직인다면, 가장 먼저 어디를 확인할지 말해 볼까요?" 출구 2번에서 부품을 바꾼다고 고른 학생에게는 \'연결부터 보면 왜 좋은가요?\'라고 묻는다. 다음 시간에는 만든 시제품을 시험해 기록하고, 약한 곳을 찾아 고친 뒤 다시 시험한다고 예고한다.',
    exit: [
      { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '조립 중 안전', items: [{ id: 'cap', text: '다 쓴 가위는 덮개를 닫아요' }, { id: 'run', text: '돌아가는 바퀴를 손으로 잡아요' }, { id: 'air', text: '접착제는 환기가 잘되는 곳에서 써요' }] }, prompt: '안전하게 하는 행동에만 표시해 보세요.', target: { checklist: ['cap', 'air'] }, difficulty: 0.1 },
      { type: 'choice', prompt: '시제품이 움직이지 않을 때 가장 먼저 할 일은 무엇인가요?', options: ['연결이 이어졌는지 살펴봐요', '부품을 모두 새것으로 바꿔요', '그만두고 새로 만들어요'], answer: 0, difficulty: 0.15, explain: '연결 상태를 살피면 원인을 쉽게 좁힐 수 있어요.' },
      { type: 'short', prompt: '조립할 때 가장 조심해야 한다고 생각한 안전 약속 하나를 쓰세요.' },
    ],
    wsTitle: '시제품 조립 계획',
    ws: [
      { type: 'table', prompt: '내가 만들 시제품의 재료와 도구를 점검하세요.', columns: ['재료·도구', '있어요', '더 필요해요'], cells: [['태양광 전지', '', ''], ['모터', '', ''], ['가위', '', ''], ['', '', '']] },
      { type: 'figure', wide: true, prompt: '조립 차례를 번호로 써 넣으세요.', tool: 'kitchen', figures: [{ options: { mode: 'order', slots: 5, printCards: false, cards: ['보기'] }, caption: '' }], answer: '예: 몸체 → 바퀴 → 모터 → 전지 → 시험' },
      { type: 'choice', prompt: '안전한 행동에 ○ 하세요.', options: ['돌아가는 바퀴를 손으로 잡기', '접착제를 환기가 되는 곳에서 조금만 쓰기', '가위를 던져 주기'], answer: '접착제를 환기가 되는 곳에서 조금만 쓰기' },
      { type: 'short', prompt: '시제품이 움직이지 않을 때 내가 확인할 순서를 쓰세요.' },
    ],
    easyNote: '만들기 전에 재료와 도구를 점검하고, 안전 약속을 지켜요.',
    wsEasy: [
      { type: 'choice', prompt: '만들기 전에 하는 일에 ○ 하세요.', options: ['재료를 세어 봐요', '가위를 던져요'], answer: '재료를 세어 봐요' },
      { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '시제품이 안 움직이면 ___이 이어졌는지 먼저 봐요.', answer: '전선' },
      { type: 'short', prompt: '내가 지킬 안전 약속 하나를 쓰세요.' },
    ],
    diff: {
      easy: '점검 칸에서 알맞은 것을 고르면 초록 테두리가 생기고, 틀리게 고르면 까닭이 나와요.',
      base: '점검과 순서를 모두 놓은 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '움직임이 약한 까닭 나누기에서 원인이 여섯 가지로 늘어 비슷한 것끼리 가려내야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 점검 없이 바로 붙이기부터 한다 → 재료·도구·자리 점검표를 먼저 확인하게 한다. ② 한 번 안 움직이면 부품을 바꾸려 한다 → 전선·접촉·빛의 세기를 차례로 살피게 한다. ③ 안전 약속을 형식으로만 읽는다 → 약속 하나마다 \'어기면 어떤 일이 생길까?\'를 묻는다. 접착제·가위는 학교 기준에 맞는 도구를 쓰고, 학생 곁에서 지도한다.',
  }));

  // ───────────────────────── 8차시 (wrap) 시험·고치기와 단원 정리 ─────────────────────────
  L.push(mk(8, {
    title: '시험 결과로 시제품 고치고 단원 돌아보기',
    obj: '시제품의 시험 결과를 기록해 약한 까닭을 찾아 고치고, 수송의 발달에서 친환경 시제품까지의 학습을 문제 해결의 흐름으로 정리할 수 있다.',
    std: ['[6실03-04]', '[6실03-05]'],
    pic: 'a classroom test track where a small solar toy car runs under a lamp while students note results on cards',
    layers: [
      { motif: 'sun', x: 62, y: 54, s: 0.7 }, { motif: 'cloud', x: 330, y: 48 }, { motif: 'hills', y: 208 },
      { motif: 'star', x: 420, y: 72, s: 0.6 }, { motif: 'flower', x: 110, y: 218 }, { motif: 'tree', x: 380, y: 216 },
      { motif: 'text', x: 240, y: 132, text: '시험하고 고쳐서 더 낫게', size: 22 },
    ],
    safety: ['시험할 때는 전등과 모터에 손을 대지 않고, 달리는 시제품 앞으로 얼굴을 내밀지 않아요.', '고칠 때는 전지를 먼저 빼고, 가위와 접착제는 다시 안전 약속을 지켜 써요.'],
    intro: [
      '"우리가 만든 시제품이 교실 바닥에서 잘 달리면 끝일까요, 아니면 더 나아질 수 있을까요?" 시험 결과를 기록하는 표를 보여 주고, 약한 곳을 찾아 고친 뒤 다시 시험하는 흐름을 한 장의 그림으로 정리한다. 단원 전체를 \'문제 찾기 → 시제품 → 시험 → 고치기\'로 돌아본다고 알린다. \'한 번에 완벽하게 만들어야 한다\'는 부담을 느끼는 학생에게는 고쳐 가는 과정이 기술의 핵심임을 짚는다.',
      '지난 시간에 만든 시제품이 어떻게 움직였는지 떠올려, 가장 약했던 부분을 한 가지 말해 봅시다.',
    ],
    acts: [
      {
        title: '활동 1. 시험하고 고치는 차례 정하기', tool: 'timeline',
        teacher: '"시험을 했더니 기울어 달렸어요. 바로 고치면 될까요?" 기록 → 까닭 찾기 → 한 군데 고치기 → 다시 시험하기의 차례를 말하게 한다. 한꺼번에 여러 군데를 고치는 학생에게는 \'무엇이 효과였는지 알 수 있나요?\'라고 묻는다.',
        task: '시험하고 고치는 일을 먼저 한 일부터 차례대로 놓아요.',
        levels: { easy: { live: true, instant: true, axis: ['먼저', '나중'] }, base: { axis: ['먼저', '나중'] }, challenge: { axis: ['먼저', '나중'] } },
        items: [
          { prompt: '시험한 뒤 고치는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['시험 결과 기록하기', '약한 까닭 찾기', '한 군데만 고치기', '다시 시험해 견주기'] }, hints: ['사실을 적고, 까닭을 따지고, 한 가지를 바꾼 뒤, 앞뒤를 견주는 흐름이에요.'], target: { order: ['시험 결과 기록하기', '약한 까닭 찾기', '한 군데만 고치기', '다시 시험해 견주기'] }, difficulty: 0.2 },
          { prompt: '문제 해결이 이어지는 차례를 놓아 보세요.', toolOptions: { mode: 'order', cards: ['불편한 점 찾기', '해결 방법 생각하기', '시제품 만들기', '써 보고 고치기'] }, hints: ['문제를 먼저 알고, 해결 방법을 생각하고, 만들고, 써 보고 고치는 순서예요.'], target: { order: ['불편한 점 찾기', '해결 방법 생각하기', '시제품 만들기', '써 보고 고치기'] }, difficulty: 0.25 },
          { prompt: '시제품의 속도를 시험하는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['출발선과 도착선 표시하기', '같은 밝기로 불 켜기', '출발해서 도착까지 시간 재기', '결과를 표에 적기'] }, hints: ['조건을 먼저 맞추고, 같은 방법으로 재고, 마지막에 기록하는 흐름이에요.'], target: { order: ['출발선과 도착선 표시하기', '같은 밝기로 불 켜기', '출발해서 도착까지 시간 재기', '결과를 표에 적기'] }, difficulty: 0.25 },
        ],
      },
      {
        title: '활동 2. 약한 까닭과 고치는 방법 짝 짓기', tool: 'mindmap',
        teacher: '"시제품이 자꾸 오른쪽으로 쏠려요. 무엇을 고쳐 볼까요?" 증상과 까닭, 고치는 방법을 한 줄로 이어 보게 한다. 증상만 말하고 까닭을 찾지 않으면 어떤 고침이 알맞은지 알 수 없음을 짚는다.',
        task: '증상에 알맞은 고치는 방법을 한 장씩 이어요.',
        items: [
          { prompt: '시험에서 나온 증상과 고치는 방법을 이어 보세요.', toolOptions: { mode: 'match', topic: '시험 결과', slots: [{ id: 'right', label: '오른쪽으로 쏠려요' }, { id: 'slow', label: '너무 느려요' }, { id: 'stuck', label: '중간에 멈춰요' }], cards: ['양쪽 바퀴 높이를 맞춰요', '무거운 장식을 떼어 줘요', '전선을 단단히 다시 이어요', '바퀴를 더 작게 갈아요'] }, hints: ['증상을 보고 가장 먼저 의심할 곳을 하나 정해요. 문제를 더 키울 방법은 남겨요.'], target: { match: { right: '양쪽 바퀴 높이를 맞춰요', slow: '무거운 장식을 떼어 줘요', stuck: '전선을 단단히 다시 이어요' } }, difficulty: 0.25 },
          { prompt: '한 번에 하나씩 고쳐야 하는 까닭만 골라 보세요.', toolOptions: { mode: 'pick', topic: '하나씩 고치는 까닭', basket: '맞는 까닭', cards: ['무엇이 효과였는지 알 수 있어요', '다시 원인을 찾기 쉬워요', '여러 곳을 한꺼번에 고쳐야 빨라요', '고칠 필요가 없어요'] }, hints: ['한 가지씩 바꾸면 결과를 비교해 원인을 알 수 있는지 생각해 보아요.'], target: { pick: ['무엇이 효과였는지 알 수 있어요', '다시 원인을 찾기 쉬워요'] }, difficulty: 0.25 },
          { prompt: '고친 뒤의 변화를 좋아진 것과 그대로인 것으로 나누어 보세요.', toolOptions: { topic: '고친 뒤', slots: ['좋아졌어요', '그대로예요'], cards: ['똑바로 달려요', '속도가 빨라졌어요', '여전히 흐린 날은 약해요', '배터리가 없으면 밤에는 못 가요'] }, hints: ['고쳐서 바로 달라진 점과 조건 때문에 남은 점을 가려 나누어요.'], target: { sort: { 좋아졌어요: ['똑바로 달려요', '속도가 빨라졌어요'], 그대로예요: ['여전히 흐린 날은 약해요', '배터리가 없으면 밤에는 못 가요'] } }, difficulty: 0.3 },
        ],
      },
      {
        title: '활동 3. 단원 돌아보며 묶기', tool: 'mindmap',
        teacher: '"이 단원에서 배운 것들은 서로 어떻게 이어질까요?" 수송의 발달, 등굣길 견주기, 친환경 에너지, 시제품 만들기를 \'문제 찾기·견주기·만들기·고치기\' 가지에 붙여 보게 한다. 잘한 점뿐 아니라 아쉬운 점도 말하게 해 다음 목표로 이어 준다.',
        task: '단원에서 한 일을 알맞은 가지에 나누어요.',
        items: [
          { prompt: '이 단원에서 한 일을 알맞은 가지에 나누어 보세요.', toolOptions: { topic: '수송 기술 단원', slots: ['알아보기', '견주어 고르기', '만들어 고치기'], cards: ['탈것의 발달 순서 늘어놓기', '땅·물·하늘 길 나누기', '등굣길 시간·비용·환경 견주기', '친환경 에너지의 한계 가리기', '태양광 시제품 조립하기', '시험하고 다시 고치기'] }, hints: ['정보를 모으고 이해하는 일, 기준으로 견주어 정하는 일, 직접 만들고 바꾸는 일로 나누어요.'], target: { sort: { 알아보기: ['탈것의 발달 순서 늘어놓기', '땅·물·하늘 길 나누기'], '견주어 고르기': ['등굣길 시간·비용·환경 견주기', '친환경 에너지의 한계 가리기'], '만들어 고치기': ['태양광 시제품 조립하기', '시험하고 다시 고치기'] } }, difficulty: 0.25 },
          { prompt: '이 단원에서 배운 생각으로 맞는 것만 골라 보세요.', toolOptions: { mode: 'pick', topic: '배운 생각', basket: '맞는 생각', cards: ['알맞은 탈것은 상황에 따라 달라요', '기술은 문제를 풀지만 새 문제도 만들어요', '친환경 에너지도 조건이 필요해요', '한 번에 완벽하면 고칠 필요가 없어요'] }, hints: ['단원에서 사례로 본 것과 시험·고침 경험에 비추어 맞는 말을 모두 찾아요.'], target: { pick: ['알맞은 탈것은 상황에 따라 달라요', '기술은 문제를 풀지만 새 문제도 만들어요', '친환경 에너지도 조건이 필요해요'] }, difficulty: 0.3 },
          { prompt: '문제에서 시제품까지 이어지는 말을 짝 지어 보세요.', toolOptions: { mode: 'match', topic: '문제 해결 연결', slots: [{ id: 'p', label: '문제 찾기' }, { id: 'c', label: '견주어 고르기' }, { id: 'm', label: '만들기' }, { id: 'f', label: '고치기' }], cards: ['등굣길이 오래 걸려요', '시간·비용·환경으로 견주어요', '태양광 시제품을 조립해요', '시험 결과를 보고 연결을 고쳐요'] }, hints: ['생활에서 문제를 찾는 일에서 시작해, 정하고, 만들고, 다시 고치는 흐름에 맞게 짝 지어요.'], target: { match: { p: '등굣길이 오래 걸려요', c: '시간·비용·환경으로 견주어요', m: '태양광 시제품을 조립해요', f: '시험 결과를 보고 연결을 고쳐요' } }, difficulty: 0.3 },
        ],
      },
    ],
    wrap: '"이 단원에서 가장 도움이 된 활동 한 가지와 다음에 더 해 보고 싶은 것 한 가지를 말해 볼까요?" 출구 3번에서 \'잘 못했어요\'만 쓴 학생에게는 \'어디를 고치면 더 나아질까?\'를 물어 다음 목표로 바꾸게 한다. 자기 평가의 \'아직이에요\'는 꾸중이 아니라 다음 목표로 다룬다고 말해 준다.',
    exit: [
      { type: 'tool', tool: 'timeline', options: { mode: 'order', axis: ['먼저', '나중'], cards: ['시험하기', '약한 곳 찾기', '고치기'] }, prompt: '시험하고 고치는 차례를 놓아 보세요.', target: { order: ['시험하기', '약한 곳 찾기', '고치기'] }, difficulty: 0.1 },
      { type: 'choice', prompt: '시제품을 고칠 때 가장 알맞은 방법은 무엇인가요?', options: ['한꺼번에 여러 곳을 모두 바꿔요', '까닭을 찾아 한 군데씩 고쳐요', '고치지 않고 다시 만들어요'], answer: 1, difficulty: 0.15, explain: '한 군데씩 고쳐야 무엇이 효과였는지 알 수 있어요.' },
      { type: 'short', prompt: '이 단원에서 가장 뿌듯했던 일과 더 해 보고 싶은 일을 쓰세요.' },
    ],
    wsTitle: '시험·고침 기록과 단원 자기 평가',
    ws: [
      { type: 'table', prompt: '시험 결과와 고친 점을 기록하세요.', columns: ['시험', '결과(시간·움직임)', '고친 점'], rows: 2 },
      { type: 'table', prompt: '자기 평가: 알맞은 칸에 ○ 하세요.', columns: ['나는', '잘해요', '아직이에요'], cells: [['탈것을 길에 따라 나눌 수 있어요', '', ''], ['시간·비용·환경으로 견줄 수 있어요', '', ''], ['시제품을 조립하고 고칠 수 있어요', '', '']] },
      { type: 'choice', prompt: '시험 뒤에 가장 먼저 할 일에 ○ 하세요.', options: ['결과를 기록해요', '시제품을 버려요', '친구 것을 베껴요'], answer: '결과를 기록해요' },
      { type: 'short', prompt: '내가 더 낫게 만들고 싶은 탈것과 그 방법을 쓰세요.' },
    ],
    easyNote: '시험하고, 까닭을 찾고, 한 군데씩 고쳐요.',
    wsEasy: [
      { type: 'choice', prompt: '고치기 전에 할 일에 ○ 하세요.', options: ['약한 까닭 찾기', '시제품 던지기'], answer: '약한 까닭 찾기' },
      { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '시제품은 한 군데씩 ___ 효과를 알 수 있어요.', answer: '고쳐야' },
      { type: 'short', prompt: '이 단원에서 새로 안 것을 한 가지 쓰세요.' },
    ],
    diff: {
      easy: '알맞은 칸에 놓으면 초록 테두리가 생기고, 틀리게 놓으면 까닭을 말해 주고 되돌아와요.',
      base: '모두 놓은 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '단원 정리 잇기에서 문제 찾기부터 고치기까지 네 단계가 모두 나와요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 시험 결과를 기록하지 않고 느낌으로 고친다 → 시간·움직임을 표에 적게 한다. ② 한꺼번에 여러 곳을 고친다 → 한 번에 한 가지만 바꾸어 견주게 한다. ③ 자기 평가에서 낮은 칸을 부끄러워한다 → \'아직이에요\'는 다음 목표임을 안내한다. 시험 때 전등과 모터 근처 안전을 함께 살핀다.',
  }));


  PaperLessons.registerUnit({
    id: 'g6-prac-1-03', schema: 'edu-unit.v1', catalogUnit: U.catalog,
    grade: U.grade, subject: U.subject, unitTitle: U.unitTitle,
    flow: '1~4차시는 수송이다: 사람과 물건을 옮기는 일을 땅·물·하늘 길로 나누고 탈것이 옛날부터 오늘까지 어떻게 달라져 왔는지 차례와 힘의 원천으로 살핀 뒤, 같은 등굣길을 걷기·버스·자가용으로 견주어 시간·비용·환경으로 나누고 사흘 기록 그래프를 근거로 더 나은 길을 고른다. 5~8차시는 친환경 시제품이다: 탈것을 움직임·방향·멈춤 부분으로 나누고 힘이 전해지는 길을 따라가며, 태양광·전기·수소 탈것의 좋은 점과 한계를 조건에 맞추어 가린 다음, 재료·안전 점검과 조립 차례를 정해 태양광 시제품을 만들고 시험 결과로 고쳐 본다. 앞 차시에서 개념을 잡고 뒤 차시에서 내 생활과 시제품에 옮기며, 마지막 차시에서 문제 찾기·견주기·만들기·고치기로 단원을 묶는다.',
    refs: {},
    lessons: L,
  });
})();
