/* 4학년 창체 안전교육 — 재난안전. 근거: 「학교 안전교육 실시 기준 등에 관한 고시」 별표 2 초등 재난안전.
 * (화재의 원인·대피요령, 화상 대처 요령, 자연 재난과 안전한 행동, 폭발 위협 대처, 재난 유형별 대비 훈련 — 화재·지진 대피 훈련 2종) 장면·인물은 이 단원을 위해 지은 것이다(가명). */
(function () {
  const ID = 'g4-cc-saf-disaster';
  const UNIT = 'g4-창체-saf-disaster';
  const TITLE = '재난안전';
  const GRADE = 4;
  const two = (n) => String(n).padStart(2, '0');
  const base = (n) => ({
    id: `${ID}-${two(n)}`, schema: 'edu-lesson.v1', catalog: { unit: UNIT, lesson: n },
    grade: GRADE, subject: '창체', unitTitle: TITLE, standards: [], minutes: 40,
    formats: ['chromebook', 'projector', 'print'],
  });
  const PROMPT = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const SCENE = (text, extra = []) => ({ viewBox: [480, 270], layers: [
    { motif: 'sun', x: 410, y: 58, s: 0.8 }, { motif: 'cloud', x: 120, y: 52 }, { motif: 'hills', y: 204 },
    { motif: 'house', x: 96, y: 214, color: 'lavender', s: 0.9 }, { motif: 'tree', x: 380, y: 214 }, ...extra,
    { motif: 'text', x: 240, y: 140, text, size: 22 },
  ] });
  const MS = (prompt, topic, slots, cards, sort, d, more) => ({ prompt, toolOptions: { mode: 'sort', topic, slots, cards }, target: { sort }, difficulty: d, ...more });
  const MM = (prompt, topic, slots, cards, match, d, more) => ({ prompt, toolOptions: { mode: 'match', topic, slots, cards }, target: { match }, difficulty: d, ...more });
  const MP = (prompt, topic, cards, pick, d, more) => ({ prompt, toolOptions: { mode: 'pick', topic, basket: topic, cards }, target: { pick }, difficulty: d, ...more });
  const EB = (prompt, situation, choices, choice, d, more) => ({ prompt, toolOptions: { mode: 'branch', situation, choices }, target: { choice }, difficulty: d, ...more });
  const SO = (prompt, title, slots, cards, order, d, more) => ({ prompt, toolOptions: { title, slots, cards }, target: { order }, difficulty: d, ...more });
  const LV = { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } };
  const LVB = { easy: { showBack: true }, base: {}, challenge: {} };
  const DIFF = {
    easy: '카드를 놓거나 보기를 고르면 맞는지 바로 알려 주고, 갈림길 문항은 결과가 처음부터 보여요.',
    base: '모두 마친 뒤 확인을 눌러 스스로 고쳐요.',
    challenge: '카드 순서가 섞여 나오고, 그럴듯하지만 위험한 보기를 가려내요.',
  };
  // 도입 6 + 전개 27(14+13) + 정리 7 = 40분
  const LESSON = (n, o) => Object.assign(base(n), {
    title: o.title, objective: o.objective,
    illustration: { prompt: PROMPT(o.draw), scene: SCENE(o.banner, o.extra) },
    stages: [
      { id: 'intro', title: '도입', minutes: 6, teacher: o.intro.teacher, student: o.intro.student, demo: o.intro.demo },
      { id: 'main', title: '전개', minutes: 27, activities: o.acts.map((a, i) => ({ minutes: i === 0 ? 14 : 13, ...a })) },
      { id: 'wrapup', title: '정리', minutes: 7, teacher: o.wrap.teacher, exitTicket: o.wrap.exit },
    ],
    worksheet: { title: o.wsTitle, items: o.ws }, differentiation: o.diff || DIFF, teacherNotes: o.notes,
  });
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };

  PaperLessons.registerUnit({
    id: ID, schema: 'edu-unit.v1', catalogUnit: UNIT,
    grade: GRADE, subject: '창체', unitTitle: TITLE,
    flow: '4학년 재난안전은 "왜 그렇게 해야 하는가"라는 원리와 경로를 다루는 단원입니다. 1차시에는 탈 것·산소·열이 만나야 불이 붙는다는 원리로 화재 예방과 불 끄기 방법을 나누고, 2차시는 학교 화재 대피 훈련 전에 학교 지도에서 가까운 비상구·다른 대피로·대피 장소를 찾아 경로를 정합니다. 3차시에는 화상의 응급 대처 순서를 익히고, 4차시는 학교 지진 대피 훈련과 묶어 건물 밖(길·상가 앞)에서 지진이 났을 때 담장·유리창·간판을 피해 넓은 곳으로 가는 판단을 합니다. 5차시에는 산사태 징후와 대설·한파 대비를, 6차시에는 가스 냄새가 날 때의 행동을 판단합니다. 2·4차시는 학교 연간 재난 대비 훈련(유형을 달리해 연 2종 이상)과 같은 날 운영하면 좋고, 과학 「불과 연소」 학습 전이라면 불의 조건은 생활 예로만 다룹니다.',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '불이 붙는 세 조건으로 예방과 끄기 나누기',
        objective: '탈 것·산소·열이 만나야 불이 붙는다는 것을 알고, 조건별 예방과 불 끄기 방법을 나눌 수 있다.',
        draw: 'a paper triangle with three corners labeled by icons of wood, air swirls, and a flame, with a child pointing to the middle',
        banner: '탈 것·산소·열', extra: [{ motif: 'star', x: 300, y: 96, color: 'lavender' }],
        intro: {
          teacher: '"촛불에 유리컵을 덮으면 어떻게 될까요?" 대답을 듣고(기다릴 반응: "꺼져요") "공기 속 산소가 없어지면 불이 꺼져요. 불은 탈 것·산소·열 세 가지가 모두 있어야 붙어요"라고 말한다. 시연 단추로 조건 카드가 나뉘는 모습을 보여 준다(실제 촛불 실험은 하지 않고 그림으로 보여 준다).',
          student: '불이 붙으려면 무엇이 필요할지 짝과 하나씩 말해 봐요.',
          demo: { tool: 'mindmap', options: { topic: '불의 조건', slots: ['탈 것', '열'], cards: ['종이', '성냥 불꽃'], shuffle: false }, sequence: [{ sort: { '탈 것': ['종이'], '열': ['성냥 불꽃'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 세 조건 찾기', tool: 'mindmap',
            teacher: '"이 장면에서 탈 것은 무엇이고 열은 무엇일까요?" 카드를 조건별로 나눈다. 산소는 눈에 안 보이지만 공기 속에 늘 있다는 것을 짚는다. 셋 가운데 하나만 없애도 불을 막을 수 있다는 것으로 이어 간다.',
            task: '불이 붙는 세 조건으로 카드를 나누어요.',
            levels: LV,
            items: [
              MS('카드를 불의 조건으로 나누어 보세요.', '불의 조건', ['탈 것', '열'], ['커튼', '뜨거운 난로', '휴지', '전선의 열'], { '탈 것': ['커튼', '휴지'], '열': ['뜨거운 난로', '전선의 열'] }, 0.2),
              MS('카드를 불의 조건으로 나누어 보세요.', '부엌의 조건', ['탈 것', '열'], ['식용유', '가스 불꽃', '행주', '달궈진 프라이팬'], { '탈 것': ['식용유', '행주'], '열': ['가스 불꽃', '달궈진 프라이팬'] }, 0.25),
              MP('불이 붙지 않게 막는 방법만 골라 담아요.', '불 막기', ['난로 옆 커튼을 치워요', '휴지를 난로 위에 둬요', '다 쓴 기구 전원을 꺼요', '전선을 이불로 덮어요'], ['난로 옆 커튼을 치워요', '다 쓴 기구 전원을 꺼요'], 0.25,
                { conclude: '탈 것·산소·열 가운데 하나만 없애도 불은 붙지 않아요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 조건과 불 끄기', tool: 'mindmap',
            teacher: '"물을 뿌리면 어느 조건을 없애는 걸까요?" 물은 열을 낮추고, 덮개는 산소를 막고, 탈 것을 치우면 탈 것을 없앤다고 짚는다. 식용유 불에 물을 부으면 기름이 튀어 더 위험하다는 것을 꼭 말한다. 어린이는 불을 끄기보다 알리고 대피하는 것이 먼저다.',
            task: '불 끄기 방법과 없애는 조건을 이어요.',
            levels: LV,
            items: [
              MM('불 끄기 방법과 없애는 조건을 이어요. 맞지 않는 카드는 남겨요.', '불 끄기 원리', [{ id: 'x1', label: '물을 뿌려요' }, { id: 'x2', label: '젖은 담요로 덮어요' }, { id: 'x3', label: '가스 밸브를 잠가요' }], ['열을 낮춰요', '산소를 막아요', '탈 것을 없애요', '불을 키워요'], { x1: '열을 낮춰요', x2: '산소를 막아요', x3: '탈 것을 없애요' }, 0.3),
              MS('불 앞의 행동을 나누어 보세요.', '불이 났을 때', ['바른 행동', '위험한 행동'], ['어린이는 알리고 대피해요', '기름 불에 물을 부어요', '어른이 소화기를 써요', '불을 부채로 부쳐요'], { '바른 행동': ['어린이는 알리고 대피해요', '어른이 소화기를 써요'], '위험한 행동': ['기름 불에 물을 부어요', '불을 부채로 부쳐요'] }, 0.3),
              MM('예방 방법과 없애는 조건을 이어요. 맞지 않는 카드는 남겨요.', '예방 원리', [{ id: 'y1', label: '난로 옆을 비워요' }, { id: 'y2', label: '전원을 꺼요' }, { id: 'y3', label: '냄비 뚜껑을 덮어 둬요' }], ['탈 것을 없애요', '열을 없애요', '산소를 막아요', '바람을 넣어요'], { y1: '탈 것을 없애요', y2: '열을 없애요', y3: '산소를 막아요' }, 0.3,
                { conclude: '예방도 불 끄기도 세 조건 가운데 하나를 없애는 원리예요. 어린이는 알리고 대피가 먼저예요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"부채로 불을 부치면 왜 더 커질까요?" (기다릴 반응: "산소가 더 들어가서요") 출구 1번에서 물을 고른 학생에게 기름 불은 다르다는 것을 다시 짚는다.',
          exit: [
            { type: 'choice', prompt: '프라이팬 기름에 불이 붙었을 때 하면 안 되는 것은?', options: ['물을 부어요', '어른에게 알려요', '밖으로 대피해요'], answer: 0, difficulty: 0.25, explain: '기름 불에 물을 부으면 기름이 튀어 불이 번져요.' },
            { type: 'choice', prompt: '불이 붙는 세 조건이 아닌 것은?', options: ['물', '탈 것', '열'], answer: 0, difficulty: 0.2, explain: '세 조건은 탈 것·산소·열이에요.' },
            { type: 'short', prompt: '난로 옆 커튼을 치우는 것은 어느 조건을 없애는 것인지 쓰세요.' },
            MOOD,
          ],
        },
        wsTitle: '불이 붙는 세 조건',
        ws: [
          { type: 'table', prompt: '불 끄기·예방 방법이 없애는 조건을 쓰세요.', columns: ['방법', '없애는 조건'], cells: [['물을 뿌려요', ''], ['젖은 담요로 덮어요', ''], ['난로 옆을 비워요', ''], ['전원을 꺼요', '']], answer: '열 / 산소 / 탈 것 / 열' },
          { type: 'choice', prompt: '불이 났을 때 어린이가 먼저 할 일에 ○ 하세요.', options: ['알리고 대피해요', '직접 불을 꺼요', '구경해요'], answer: '알리고 대피해요' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '불은 탈 것·___·열이 모두 있어야 붙어요.', answer: '산소' },
          { type: 'short', prompt: '우리 집에서 탈 것과 열이 가까이 있는 곳을 하나 찾아 쓰세요.' },
        ],
        notes: '자주 보이는 어려움: ① 물로 모든 불을 끌 수 있다고 여긴다 → 기름 불은 물을 부으면 번진다. ② 산소를 조건으로 떠올리지 못한다 → 덮으면 꺼지는 예로 잇는다. ③ 원리를 알면 직접 꺼도 된다고 여긴다 → 어린이는 알리고 대피가 먼저다. 실제 불 실험은 하지 않는다.',
      }),

      LESSON(2, {
        title: '학교 지도에서 대피 경로 정하고 화재 대피 훈련하기',
        objective: '학교 지도에서 가까운 비상구와 다른 대피로, 대피 장소를 찾아 화재 대피 경로를 정할 수 있다.',
        draw: 'a paper school floor map with arrows from a classroom to two exits and a playground gathering spot, with children tracing the route',
        banner: '두 갈래 대피 길', extra: [{ motif: 'leaf', x: 300, y: 222, color: 'mint' }],
        intro: {
          teacher: '"우리 교실에서 나가는 길이 하나만 있다면, 그 길에 연기가 차면 어떻게 될까요?" 대답을 듣고(기다릴 반응: "다른 길로 가요") "그래서 대피 길은 두 갈래를 알아 둬야 해요"라고 말한다. 오늘은 지도에서 대피 경로를 정하고 화재 대피 훈련에서 실제로 걸어 본다고 알린다. 지도는 북쪽이 위라는 것을 짚는다.',
          student: '우리 교실에서 나갈 수 있는 길이 몇 갈래인지 짝과 세어 봐요.',
          demo: { tool: 'map', options: { title: '본보기 층', places: [{ name: '교실', icon: 'school', at: [1, 1] }, { name: '비상구', icon: 'dot', at: [0, 1] }] }, sequence: [{ place: '비상구' }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 지도에서 대피 경로 찾기', tool: 'map',
            teacher: '"교실에서 칸을 세어 보면 어느 비상구가 더 가까울까요?" 1번은 가까운 비상구, 2번은 그 길이 막혔을 때 다른 비상구, 3번은 대피 장소를 고른다. 대피 장소는 건물에서 떨어진 넓은 곳이라는 것을 짚는다. 활동 뒤 실제 우리 학교 대피 경로도를 함께 본다.',
            task: '학교 지도를 보고 대피 경로를 찾아 핀을 꽂거나 골라요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '4학년 교실에서 가장 가까운 비상구에 핀을 꽂아요.', toolOptions: { title: '우리 학교 2층', places: [{ name: '4학년 교실', icon: 'school', at: [1, 2] }, { name: '서쪽 비상구', icon: 'dot', at: [0, 2] }, { name: '동쪽 비상구', icon: 'dot', at: [5, 1] }, { name: '도서관', icon: 'library', at: [3, 0] }] }, target: { place: '서쪽 비상구' }, difficulty: 0.2 },
              { prompt: '서쪽 비상구 쪽에 연기가 찼어요. 다른 비상구에 핀을 꽂아요.', toolOptions: { title: '우리 학교 2층', places: [{ name: '4학년 교실', icon: 'school', at: [1, 2] }, { name: '서쪽 비상구', icon: 'dot', at: [0, 2] }, { name: '동쪽 비상구', icon: 'dot', at: [5, 1] }, { name: '과학실', icon: 'house', at: [3, 3] }] }, target: { place: '동쪽 비상구' }, difficulty: 0.25 },
              { prompt: '건물 밖으로 나왔어요. 지도를 보고 모일 곳을 골라요.', toolOptions: { title: '학교 바깥', readOnly: true, places: [{ name: '본관', icon: 'school', at: [1, 1] }, { name: '운동장 가운데', icon: 'park', at: [4, 2] }, { name: '주차장', icon: 'dot', at: [0, 3] }, { name: '급식실 뒤', icon: 'house', at: [2, 0] }], ask: { q: '화재 때 모이기 알맞은 곳은?', choices: ['운동장 가운데', '주차장', '급식실 뒤'], why: [null, '차가 드나들어 위험해요.', '건물 바로 옆이라 연기가 올 수 있어요.'] } }, target: { pick: 0 }, difficulty: 0.25,
                conclude: '대피 길은 두 갈래를 알아 두고, 건물에서 떨어진 넓은 곳에 모여요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 훈련과 돌아보기', tool: 'map',
            teacher: '"오늘 훈련에서는 서쪽 비상구가 막혔다고 가정하고 동쪽으로 가 볼게요." 훈련 경보 → 교사 선도·대피로 확인 → 운동장 집결 → 인원 확인 순으로 진행한다. 훈련 뒤 지도에서 실제로 걸은 길을 다시 찾아본다.',
            task: '훈련에서 걸은 길을 지도에서 찾아 핀을 꽂아요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '동쪽 비상구로 나와 북쪽으로 한 칸 가면 계단이 있어요. 계단 칸에 핀을 꽂아요.', toolOptions: { title: '훈련 길', places: [{ name: '4학년 교실', icon: 'school', at: [1, 2] }, { name: '동쪽 비상구', icon: 'dot', at: [4, 2] }, { name: '보건실', icon: 'hospital', at: [2, 0] }] }, target: { from: '동쪽 비상구', dir: '북', steps: 1 }, difficulty: 0.3 },
              { prompt: '훈련 중 친구가 줄에서 떨어졌어요. 선생님이 계신 곳(인원 확인 장소)에 핀을 꽂아요.', toolOptions: { title: '운동장', places: [{ name: '인원 확인 장소', icon: 'park', at: [3, 2] }, { name: '축구 골대', icon: 'dot', at: [5, 0] }, { name: '정문', icon: 'dot', at: [0, 3] }] }, target: { place: '인원 확인 장소' }, difficulty: 0.2 },
              { prompt: '훈련을 돌아봐요. 다음 훈련에서 고칠 점으로 알맞은 것을 골라요.', toolOptions: { title: '훈련 돌아보기', readOnly: true, places: [{ name: '4학년 교실', icon: 'school', at: [1, 2] }, { name: '동쪽 비상구', icon: 'dot', at: [4, 2] }], ask: { q: '다음 훈련에서 고칠 점은?', choices: ['두 번째 대피 길도 미리 걸어 봐요', '가장 빨리 뛰어서 나가요', '가방을 꼭 챙겨요'], why: [null, '뛰면 넘어져 다칠 수 있어요.', '대피할 때는 몸만 나가요.'] } }, target: { pick: 0 }, difficulty: 0.25,
                conclude: '지도로 길을 정하고 훈련으로 걸어 보면 진짜 상황에서 길을 잃지 않아요.' },
            ],
          },
        ],
        wrap: {
          teacher: '"우리 교실의 첫 번째 대피 길과 두 번째 대피 길을 말해 볼까요?" 출구 1번에서 주차장을 고른 학생에게 까닭을 다시 짚는다.',
          exit: [
            { type: 'tool', tool: 'map', options: { title: '우리 학교 3층', places: [{ name: '음악실', icon: 'school', at: [4, 1] }, { name: '북쪽 비상구', icon: 'dot', at: [4, 0] }, { name: '남쪽 비상구', icon: 'dot', at: [1, 3] }] }, prompt: '음악실에서 가장 가까운 비상구에 핀을 꽂아요.', target: { place: '북쪽 비상구' }, difficulty: 0.2 },
            { type: 'choice', prompt: '대피 길을 두 갈래 알아 두는 까닭은?', options: ['한 길이 막혀도 나갈 수 있어서', '걷기 운동을 하려고', '친구와 놀려고'], answer: 0, difficulty: 0.15, explain: '한 길에 연기가 차도 다른 길로 나가요.' },
            { type: 'short', prompt: '우리 교실의 두 번째 대피 길을 한 문장으로 쓰세요.' },
            MOOD,
          ],
        },
        wsTitle: '우리 반 대피 경로',
        ws: [
          { type: 'table', prompt: '우리 교실 대피 경로를 쓰세요.', columns: ['구분', '길'], cells: [['첫 번째 대피 길', ''], ['두 번째 대피 길', ''], ['모이는 곳', '']] },
          { type: 'choice', prompt: '모이기 알맞은 곳에 ○ 하세요.', options: ['운동장 가운데', '주차장', '건물 바로 옆'], answer: '운동장 가운데' },
          { type: 'draw', prompt: '우리 층 지도를 간단히 그리고 두 갈래 대피 길을 화살표로 그려요.' },
          { type: 'short', prompt: '오늘 훈련에서 잘한 점과 고칠 점을 쓰세요.' },
        ],
        notes: '훈련 운영: 대피로 하나가 막힌 상황을 가정한 화재 대피 훈련 — 경보 → 교사 대피로 확인 → 두 번째 대피로 이동 → 운동장 집결 → 인원 확인(학교 재난 대비 훈련, 연 2종 이상 중 화재). 지도는 가상 학교이므로 활동 뒤 실제 우리 학교 대피 경로도를 함께 본다. 자주 보이는 어려움: ① 대피 길을 하나만 안다. ② 주차장·건물 옆에 모인다.',
      }),

      LESSON(3, {
        title: '화상 응급 대처 순서 놓고 까닭 말하기',
        objective: '데었을 때 식히기·옷을 억지로 떼지 않기·물집 지키기·덮고 병원 가기 순서를 까닭과 함께 말할 수 있다.',
        draw: 'a child cooling a forearm under a paper faucet, a clean cloth ready beside them, and an adult removing a wristwatch gently',
        banner: '식히고, 지키고, 덮어요', extra: [{ motif: 'wave', x: 300, y: 222, color: 'sky' }],
        intro: {
          teacher: '"화재에서는 몸이 데는 화상도 생길 수 있어요. 데었을 때 가장 먼저 할 일은 무엇일까요?" 대답을 듣고(기다릴 반응: "물로 식혀요") "흐르는 시원한 물로 충분히 식혀요. 그다음에도 할 일이 있어요"라고 말한다. 시연 단추로 순서 카드가 놓이는 모습을 보여 준다. "빨리 연고부터 발라요"가 나오면 "열이 남아 있으면 피부 속까지 계속 다쳐요"라고 짚는다.',
          student: '데었을 때 할 일을 아는 대로 짝에게 말해 봐요.',
          demo: { tool: 'story', options: { cards: [{ id: 'd1', text: '뜨거운 것에서 떨어져요', motif: 'sun' }, { id: 'd2', text: '흐르는 물로 식혀요', motif: 'wave' }], slots: ['먼저', '다음'], shuffle: false }, sequence: [{ order: ['d1', 'd2'] }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 화상 대처 순서', tool: 'story',
            teacher: '"반지·시계는 왜 빨리 빼야 할까요?" 데인 곳이 부어오르면 빠지지 않게 되기 때문이라고 짚는다. 옷이 피부에 달라붙었으면 억지로 떼지 않고 옷 위로 식힌다. 넓게 데었거나 얼굴·손을 데었으면 어른이 119·병원을 정한다.',
            task: '화상 대처 순서를 놓아요.',
            levels: LV,
            items: [
              SO('팔을 데었을 때 순서대로 놓아요.', '화상 대처', ['1', '2', '3', '4'], [{ id: 'b1', text: '뜨거운 것에서 떨어져요', motif: 'sun' }, { id: 'b2', text: '흐르는 물로 식혀요', motif: 'wave' }, { id: 'b3', text: '시계·반지를 빼요', motif: 'star' }, { id: 'b4', text: '깨끗한 천으로 덮어요', motif: 'cloud' }], ['b1', 'b2', 'b3', 'b4'], 0.25),
              SO('옷이 피부에 붙었을 때 순서대로 놓아요.', '옷이 붙었어요', ['먼저', '다음', '마지막'], [{ id: 'c1', text: '옷을 떼지 않아요', motif: 'leaf' }, { id: 'c2', text: '옷 위로 물을 흘려요', motif: 'wave' }, { id: 'c3', text: '어른이 병원에 알려요', motif: 'house' }], ['c1', 'c2', 'c3'], 0.3),
              SO('넓게 데었을 때 순서대로 놓아요.', '넓게 데었어요', ['먼저', '다음', '마지막'], [{ id: 'w1', text: '어른과 119를 불러요', motif: 'house' }, { id: 'w2', text: '시원한 물로 식혀요', motif: 'wave' }, { id: 'w3', text: '담요로 몸을 감싸요', motif: 'cloud' }], ['w1', 'w2', 'w3'], 0.3,
                { conclude: '떨어지고 → 식히고 → 장신구를 빼고 → 깨끗이 덮고, 크게 데면 119예요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 하지 말아야 할 것', tool: 'story',
            teacher: '"민간요법이 왜 위험할까요?" 된장·소주·치약은 균을 넣거나 피부를 더 상하게 할 수 있다고 짚는다. 얼음을 바로 대면 피부가 또 다친다. 물집은 터뜨리지 않는다.',
            task: '잘못된 대처를 바로잡는 순서를 놓아요.',
            levels: LV,
            items: [
              SO('친구가 된장을 바르려 해요. 순서대로 놓아요.', '바로잡기', ['먼저', '다음', '마지막'], [{ id: 'r1', text: '"바르지 마" 말려요', motif: 'star' }, { id: 'r2', text: '물로 식히게 해요', motif: 'wave' }, { id: 'r3', text: '어른에게 알려요', motif: 'house' }], ['r1', 'r2', 'r3'], 0.25),
              SO('물집이 생겼을 때 순서대로 놓아요.', '물집', ['먼저', '다음', '마지막'], [{ id: 'q1', text: '터뜨리지 않아요', motif: 'leaf' }, { id: 'q2', text: '깨끗이 덮어요', motif: 'cloud' }, { id: 'q3', text: '병원에서 치료해요', motif: 'flower' }], ['q1', 'q2', 'q3'], 0.3),
              SO('얼음밖에 없을 때 순서대로 놓아요.', '얼음뿐이에요', ['먼저', '다음', '마지막'], [{ id: 'i1', text: '얼음을 바로 대지 않아요', motif: 'snow' }, { id: 'i2', text: '흐르는 물을 찾아요', motif: 'wave' }, { id: 'i3', text: '어른에게 알려요', motif: 'house' }], ['i1', 'i2', 'i3'], 0.3,
                { conclude: '화상에는 아무것도 바르지 않고, 얼음 대신 흐르는 물로, 물집은 지켜요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 배운 순서를 손가락으로 세며 말해 볼까요?" 출구 2번에서 연고부터 고른 학생에게 식히기가 먼저라는 것을 다시 짚는다.',
          exit: [
            { type: 'choice', prompt: '데인 손에 반지를 끼고 있어요. 언제 뺄까요?', options: ['부어오르기 전에 빨리', '다 나은 뒤에', '빼지 않아요'], answer: 0, difficulty: 0.25, explain: '부으면 빠지지 않아 빨리 빼요.' },
            { type: 'choice', prompt: '데었을 때 가장 먼저 할 일은?', options: ['흐르는 물로 식혀요', '연고를 발라요', '얼음을 대요'], answer: 0, difficulty: 0.2, explain: '열이 남아 있으면 계속 다쳐요. 먼저 식혀요.' },
            { type: 'short', prompt: '옷이 피부에 달라붙었을 때 억지로 떼지 않는 까닭을 쓰세요.' },
            MOOD,
          ],
        },
        wsTitle: '화상 응급 대처',
        ws: [
          { type: 'table', prompt: '화상 대처 순서에 맞게 1~4를 쓰세요.', columns: ['할 일', '차례'], cells: [['깨끗한 천으로 덮어요', ''], ['흐르는 물로 식혀요', ''], ['뜨거운 것에서 떨어져요', ''], ['시계·반지를 빼요', '']], answer: '4, 2, 1, 3' },
          { type: 'table', prompt: '하지 말아야 할 것과 까닭을 쓰세요.', columns: ['하지 말 것', '까닭'], cells: [['된장 바르기', ''], ['얼음 바로 대기', ''], ['물집 터뜨리기', '']], answer: '균이 들어감 / 피부가 또 다침 / 덧남' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '넓게 데었으면 어른과 ___를 불러요.', answer: '119' },
          { type: 'short', prompt: '가족에게 알려 줄 화상 대처 방법 하나를 쓰세요.' },
        ],
        notes: '근거: 소방청·질병관리청 화상 응급처치 안내(흐르는 시원한 물로 식히기, 장신구 제거, 달라붙은 옷 떼지 않기, 물집 보존, 민간요법 금지). 식히는 시간은 숫자로 쓰지 않았다. 자주 보이는 어려움: ① 연고부터 바른다. ② 얼음을 바로 댄다. ③ 달라붙은 옷을 뗀다.',
      }),

      LESSON(4, {
        title: '건물 밖에서 지진이 나면 — 대피 훈련과 판단',
        objective: '길·상가 앞처럼 건물 밖에서 지진이 났을 때 담장·유리창·간판을 피해 넓은 곳으로 가는 판단을 하고 대피 훈련에서 지킬 수 있다.',
        draw: 'children on a paper street moving away from a tall sign and glass storefront toward an open park, holding bags over their heads',
        banner: '간판·유리·담장을 피해요', extra: [{ motif: 'tree', x: 300, y: 214, color: 'mint' }],
        intro: {
          teacher: '"학교 밖 상가 앞을 걷다가 땅이 흔들리면 가게 안으로 뛰어 들어가야 할까요?" 대답을 듣고(기다릴 반응: "넓은 곳으로 가요") "건물 밖에서는 떨어지는 간판·유리 조각이 위험해요. 가방으로 머리를 감싸고 넓은 곳으로 가요"라고 말한다. 오늘은 학교 지진 대피 훈련을 하교 길 상황으로 가정해 연습한다고 알린다. 시연 단추로 갈림길 보기가 고르는 모습을 보여 준다.',
          student: '학교 가는 길에 지진이 나면 피할 넓은 곳이 어디일지 짝에게 말해 봐요.',
          demo: { tool: 'emotion', options: { mode: 'branch', situation: '길에서 흔들려요.', choices: [{ id: 'open', text: '넓은 곳으로 가요', result: '떨어지는 것을 피해요.', mood: '안심' }, { id: 'wall', text: '담장에 기대요', result: '담장이 무너질 수 있어요.', mood: '무서움' }] }, sequence: [{ choice: 'open' }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 건물 밖 지진 판단', tool: 'emotion',
            teacher: '"이 보기를 고르면 무엇이 위험할까요?" 결과를 함께 읽고 까닭을 말하게 한다. 흔들리는 동안 무리하게 이동하지 말고 그 자리에서 머리를 지키다가, 멈추면 넓은 곳으로 간다고 짚는다. 계단·좁은 골목도 피한다.',
            task: '건물 밖 지진 장면에서 어떻게 할지 골라요.',
            levels: LVB,
            items: [
              EB('상가 앞을 걷는데 흔들려요. 어떻게 할까요?', '하굣길 상가 앞을 걷는데 땅이 크게 흔들려요.', [
                { id: 'shop', text: '가게 유리문 안으로 뛰어들어요', result: '유리가 깨져 다칠 수 있어요.', mood: '무서움', why: '흔들릴 때 유리 가까이 가지 않아요.' },
                { id: 'cover', text: '가방으로 머리를 감싸고 간판에서 멀어져요', result: '떨어지는 것을 피해 안전해요.', mood: '안심' },
                { id: 'stand', text: '간판 아래에 서서 기다려요', result: '간판이 떨어질 수 있어요.', mood: '걱정', why: '간판 아래는 피해요.' }], 'cover', 0.2),
              EB('담장 옆 골목에서 흔들려요. 어떻게 할까요?', '좁은 골목, 오래된 담장 옆을 걷다가 흔들려요.', [
                { id: 'lean', text: '담장에 기대 몸을 지탱해요', result: '담장이 무너질 수 있어요.', mood: '무서움', why: '담장에서 떨어져요.' },
                { id: 'away', text: '담장에서 떨어져 머리를 감싸고 낮게 앉아요', result: '무너지는 것을 피해요.', mood: '안심' },
                { id: 'run', text: '흔들리는 중에 골목을 달려요', result: '넘어지고 떨어진 물건에 다쳐요.', mood: '걱정', why: '흔들리는 동안 달리지 않아요.' }], 'away', 0.25),
              EB('흔들림이 멈췄어요. 어디로 갈까요?', '흔들림이 멈추고 사람들이 웅성거려요.', [
                { id: 'park', text: '가까운 공원·운동장 같은 넓은 곳', result: '건물에서 떨어져 안전하게 기다려요.', mood: '편안함' },
                { id: 'elevator', text: '아파트 승강기를 타고 집에 가요', result: '승강기가 멈출 수 있어요.', mood: '불안', why: '지진 뒤 승강기는 타지 않아요.' },
                { id: 'look', text: '무너진 곳을 구경하러 가요', result: '다시 흔들리면 위험해요.', mood: '걱정', why: '위험한 곳에 가까이 가지 않아요.' }], 'park', 0.25,
                { conclude: '건물 밖에서는 간판·유리·담장을 피하고, 멈추면 넓은 곳으로 가요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 대피 훈련 돌아보기', tool: 'emotion',
            teacher: '"오늘 훈련은 체육 시간 운동장·현관 앞에 있다고 가정했어요. 어떻게 했나요?" 훈련 신호 → 그 자리 몸 보호 → 멈춤 신호 → 운동장 가운데 집결 → 인원 확인 순으로 진행한다. 훈련 뒤 장면을 판단하며 돌아본다.',
            task: '훈련을 떠올리며 어떻게 할지 골라요.',
            levels: LVB,
            items: [
              EB('현관 앞 유리문 옆에서 흔들려요. 어떻게 할까요?', '훈련에서 현관 앞 큰 유리문 옆에 있었어요.', [
                { id: 'glass', text: '유리문을 잡고 버텨요', result: '유리가 깨지면 다쳐요.', mood: '무서움', why: '유리에서 멀어져요.' },
                { id: 'move', text: '유리에서 떨어져 머리를 감싸요', result: '안전하게 멈출 때까지 기다려요.', mood: '안심' },
                { id: 'in', text: '건물 안으로 뛰어 들어가요', result: '흔들리는 중 넘어질 수 있어요.', mood: '걱정', why: '흔들리는 동안은 뛰지 않아요.' }], 'move', 0.25),
              EB('운동장에서 친구가 골대 옆으로 가요. 어떻게 할까요?', '훈련 중 친구가 골대 옆에 앉으려 해요.', [
                { id: 'call', text: '"가운데로 가자" 하고 함께 가요', result: '둘 다 안전한 곳에 모여요.', mood: '뿌듯함' },
                { id: 'same', text: '나도 골대 옆에 앉아요', result: '골대가 넘어질 수 있어요.', mood: '걱정', why: '넘어질 수 있는 것에서 떨어져요.' },
                { id: 'ignore', text: '모른 척해요', result: '친구가 위험할 수 있어요.', mood: '불안', why: '친구에게도 알려 줘요.' }], 'call', 0.25),
              EB('훈련이 끝나고 고칠 점을 정해요. 무엇이 좋을까요?', '훈련을 마치고 반에서 고칠 점을 정해요.', [
                { id: 'route', text: '하굣길의 넓은 곳을 미리 정해요', result: '진짜 지진 때 바로 갈 수 있어요.', mood: '뿌듯함' },
                { id: 'skip', text: '다음엔 훈련하지 말아요', result: '진짜 상황에서 당황해요.', mood: '걱정', why: '훈련이 몸에 익어야 해요.' },
                { id: 'fast', text: '흔들릴 때 가장 빨리 뛰어요', result: '넘어져 다칠 수 있어요.', mood: '불안', why: '흔들리는 동안은 머리를 지켜요.' }], 'route', 0.2,
                { conclude: '훈련에서 익힌 판단을 하굣길에도 쓰도록 넓은 곳을 미리 정해 둬요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"우리 하굣길에서 지진이 나면 갈 넓은 곳을 하나 정해 볼까요?" 출구 1번에서 가게 안을 고른 학생과 유리 위험을 다시 짚는다.',
          exit: [
            { type: 'choice', prompt: '길에서 흔들릴 때 피해야 할 곳은?', options: ['간판 아래', '넓은 공원', '운동장 가운데'], answer: 0, difficulty: 0.2, explain: '간판이 떨어질 수 있어요.' },
            { type: 'tool', tool: 'emotion', options: { mode: 'branch', situation: '놀이터에서 흔들림이 멈췄어요.', choices: [{ id: 'mid', text: '넓은 가운데에서 기다려요', result: '안전하게 어른을 기다려요.', mood: '안심' }, { id: 'fence', text: '높은 담장 옆으로 가요', result: '담장이 무너질 수 있어요.', mood: '걱정' }, { id: 'lift', text: '승강기로 집에 가요', result: '승강기가 멈출 수 있어요.', mood: '불안' }] }, state: { choice: null }, prompt: '놀이터에서 흔들림이 멈춘 뒤 어떻게 할지 골라요.', target: { choice: 'mid' }, difficulty: 0.2 },
            { type: 'short', prompt: '하굣길에서 지진이 나면 갈 넓은 곳과 피할 곳을 쓰세요.' },
            MOOD,
          ],
        },
        wsTitle: '건물 밖 지진 대피',
        ws: [
          { type: 'table', prompt: '건물 밖에서 피할 것과 까닭을 쓰세요.', columns: ['피할 것', '까닭'], cells: [['간판', ''], ['유리창', ''], ['담장', '']], answer: '떨어짐 / 깨짐 / 무너짐' },
          { type: 'choice', prompt: '흔들림이 멈춘 뒤 갈 곳에 ○ 하세요.', options: ['넓은 공원', '좁은 골목', '승강기'], answer: '넓은 공원' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '흔들리는 동안은 ___으로 머리를 감싸고 기다려요.', answer: '가방(팔)' },
          { type: 'short', prompt: '오늘 지진 대피 훈련에서 고칠 점을 하나 쓰세요.' },
        ],
        notes: '훈련 운영: 바깥 활동 중 지진을 가정한 대피 훈련 — 경보 → 그 자리 머리 보호 → 멈춤 신호 → 운동장 가운데 집결 → 인원 확인(학교 재난 대비 훈련, 연 2종 이상 중 지진). 근거: 행정안전부 지진 국민행동요령(건물 밖에서는 간판·유리·담장을 피해 넓은 곳으로). 자주 보이는 어려움: ① 가게 안으로 뛰어든다. ② 담장에 기댄다. ③ 지진 뒤 승강기를 탄다.',
      }),

      LESSON(5, {
        title: '산사태 징후 알아차리고 대설·한파 대비하기',
        objective: '산사태 징후를 알아차리고, 대설·한파 때 할 일을 재난별로 나눌 수 있다.',
        draw: 'a paper hillside with small stones rolling and a tilted tree, a family shoveling snow in front of a house, and a child in layered warm clothes',
        banner: '징후를 보면 바로 피해요', extra: [{ motif: 'mountain', x: 300, y: 214, color: 'peach' }],
        intro: {
          teacher: '"비가 많이 온 뒤 산비탈에서 작은 돌이 자꾸 굴러떨어져요. 무엇을 알려 주는 걸까요?" 대답을 듣고(기다릴 반응: "무너질 것 같아요") "산사태가 나기 전에는 이런 징후가 보일 수 있어요. 징후를 보면 바로 피하고 알려요"라고 말한다. 시연 단추로 카드가 나뉘는 모습을 보여 준다.',
          student: '겨울에 눈이 많이 오거나 아주 추웠던 날 가족이 무엇을 준비했는지 짝에게 말해 봐요.',
          demo: { tool: 'mindmap', options: { topic: '산비탈', slots: ['산사태 징후', '보통 모습'], cards: ['돌이 자꾸 굴러요', '새가 지저귀어요'], shuffle: false }, sequence: [{ sort: { '산사태 징후': ['돌이 자꾸 굴러요'], '보통 모습': ['새가 지저귀어요'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 산사태 징후', tool: 'mindmap',
            teacher: '"이 모습은 산사태 징후일까요?" 비탈에서 흙·돌이 떨어지기, 나무가 기울기, 비탈에서 물이 솟거나 흐르던 물이 갑자기 멈추기, 땅이 갈라지기를 징후로 짚는다. 징후를 보면 비탈 반대쪽 높은 곳으로 피하고 어른·119에 알린다.',
            task: '산비탈 모습을 징후와 보통 모습으로 나누고, 징후 때 할 일을 이어요.',
            levels: LV,
            items: [
              MS('산비탈 모습을 나누어 보세요.', '산사태 징후', ['징후예요', '보통 모습'], ['나무가 한쪽으로 기울어요', '꽃이 피었어요', '비탈에서 흙탕물이 솟아요', '다람쥐가 뛰어요'], { '징후예요': ['나무가 한쪽으로 기울어요', '비탈에서 흙탕물이 솟아요'], '보통 모습': ['꽃이 피었어요', '다람쥐가 뛰어요'] }, 0.2),
              MP('산사태 징후만 골라 담아요.', '징후 찾기', ['땅에 금이 갔어요', '흐르던 물이 갑자기 멈춰요', '바람이 시원해요', '하늘이 맑아요'], ['땅에 금이 갔어요', '흐르던 물이 갑자기 멈춰요'], 0.3),
              MM('상황과 할 일을 이어요. 맞지 않는 카드는 남겨요.', '징후를 보면', [{ id: 'm1', label: '비탈에서 돌이 굴러요' }, { id: 'm2', label: '산 아래 집에 있어요' }, { id: 'm3', label: '산사태 소식을 들었어요' }], ['비탈에서 먼 곳으로 피해요', '어른과 대피소로 가요', '산에 가지 않아요', '가까이 가서 봐요'], { m1: '비탈에서 먼 곳으로 피해요', m2: '어른과 대피소로 가요', m3: '산에 가지 않아요' }, 0.3,
                { conclude: '산사태 징후를 보면 비탈에서 멀리 피하고 바로 어른·119에 알려요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 대설과 한파 대비', tool: 'mindmap',
            teacher: '"대설과 한파 때 할 일이 같을까요, 다를까요?" 재난별로 나눈다. 눈을 치울 때는 무리하지 않고, 지붕 위 눈은 어른도 올라가지 않고 전문가에게 맡긴다고 짚는다. 한파 때 수도가 얼지 않게 하는 것은 어른과 함께 한다.',
            task: '대설·한파 때 할 일을 재난별로 나누어요.',
            levels: LV,
            items: [
              MS('할 일을 재난별로 나누어 보세요.', '겨울 재난', ['대설', '한파'], ['집 앞 눈을 조금씩 치워요', '수도관을 헌 옷으로 감싸요', '미끄럼 방지 신발', '옷을 여러 겹 입어요'], { '대설': ['집 앞 눈을 조금씩 치워요', '미끄럼 방지 신발'], '한파': ['수도관을 헌 옷으로 감싸요', '옷을 여러 겹 입어요'] }, 0.25),
              MS('겨울 행동을 나누어 보세요.', '겨울 행동', ['안전해요', '위험해요'], ['눈 쌓인 지붕에 올라가요', '외출 전 날씨 알림을 봐요', '얼음 언 저수지에서 놀아요', '손발이 차면 실내로 가요'], { '안전해요': ['외출 전 날씨 알림을 봐요', '손발이 차면 실내로 가요'], '위험해요': ['눈 쌓인 지붕에 올라가요', '얼음 언 저수지에서 놀아요'] }, 0.25),
              MP('대설 특보 때 미리 할 일만 골라 담아요.', '미리 준비', ['외출을 줄여요', '썰매 타러 산에 가요', '비상 먹을거리를 챙겨요', '자전거로 멀리 가요'], ['외출을 줄여요', '비상 먹을거리를 챙겨요'], 0.25,
                { conclude: '대설엔 눈길·지붕 위험을, 한파엔 몸과 수도관이 어는 것을 미리 막아요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 배운 징후 가운데 가장 기억할 것은 무엇인가요?" 출구 2번에서 저수지 얼음을 고른 학생에게 얼음 두께를 눈으로 알 수 없다는 것을 짚는다.',
          exit: [
            { type: 'choice', prompt: '산사태 징후가 아닌 것은?', options: ['꽃이 활짝 피었어요', '나무가 기울어요', '땅에 금이 갔어요'], answer: 0, difficulty: 0.2, explain: '기울어짐·갈라짐·흙탕물이 징후예요.' },
            { type: 'choice', prompt: '한파 때 안전한 행동은?', options: ['옷을 여러 겹 입어요', '언 저수지에서 놀아요', '얇게 입고 오래 놀아요'], answer: 0, difficulty: 0.15, explain: '여러 겹 입어 몸을 따뜻하게 해요.' },
            { type: 'short', prompt: '산사태 징후를 보았을 때 할 일을 쓰세요.' },
            MOOD,
          ],
        },
        wsTitle: '산사태·대설·한파',
        ws: [
          { type: 'table', prompt: '산사태 징후를 세 가지 쓰세요.', columns: ['번호', '징후'], cells: [['1', ''], ['2', ''], ['3', '']], answer: '예) 돌·흙이 떨어짐 / 나무가 기울어짐 / 땅이 갈라짐(흙탕물이 솟음)' },
          { type: 'table', prompt: '재난별 할 일을 쓰세요.', columns: ['재난', '할 일'], cells: [['대설', ''], ['한파', '']], answer: '예) 눈 치우기·외출 줄이기 / 여러 겹 입기·수도관 감싸기' },
          { type: 'choice', prompt: '눈 쌓인 지붕에 대해 바른 것에 ○ 하세요.', options: ['올라가지 않아요', '올라가 치워요', '미끄럼을 타요'], answer: '올라가지 않아요' },
          { type: 'short', prompt: '언 저수지에서 놀면 안 되는 까닭을 쓰세요.' },
        ],
        notes: '근거: 행정안전부·산림청 산사태 국민행동요령(징후: 낙석·나무 기울어짐·지면 균열·비탈의 물 솟음/멈춤), 대설·한파 국민행동요령. 자주 보이는 어려움: ① 징후를 구경하러 간다 → 바로 피한다. ② 대설과 한파의 할 일을 섞는다 → 재난별로 나눈다.',
      }),

      LESSON(6, {
        title: '가스 냄새가 날 때 해야 할 일 판단하기',
        objective: '가스 냄새가 나면 불·전기 스위치를 쓰지 않고 창문을 열어 밖에서 알리는 행동을 고를 수 있다.',
        draw: 'a child opening a paper kitchen window while keeping hands away from a light switch, with a crossed-out lighter icon and an adult outside on the phone',
        banner: '켜지 말고, 열고, 나가서 알려요', extra: [{ motif: 'cloud', x: 300, y: 96, color: 'sky' }],
        intro: {
          teacher: '"집에 들어왔는데 이상한 가스 냄새가 나요. 어두워서 전등 스위치를 켜도 될까요?" 대답을 듣고(기다릴 반응: "안 돼요"/"켜요"가 섞인다) "스위치를 켤 때 작은 불꽃이 생길 수 있어 가스가 폭발할 수 있어요"라고 말한다. 시연 단추로 갈림길 보기가 고르는 모습을 보여 준다. 사고 장면을 자세히 묘사하지 않는다.',
          student: '가스 냄새는 어떤 냄새일지, 맡으면 어떻게 할지 짝에게 말해 봐요.',
          demo: { tool: 'emotion', options: { mode: 'branch', situation: '가스 냄새가 나요.', choices: [{ id: 'open', text: '창문을 열어요', result: '가스가 빠져요.', mood: '안심' }, { id: 'switch', text: '전등을 켜요', result: '불꽃이 생길 수 있어요.', mood: '무서움' }] }, sequence: [{ choice: 'open' }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 가스 냄새가 나면', tool: 'emotion',
            teacher: '"이 보기를 고르면 무슨 일이 생길 수 있을까요?" 결과를 읽고 까닭을 말하게 한다. 휴대전화·초인종·라이터도 불꽃이 될 수 있으니 집 안에서 쓰지 않고 밖에 나가 알린다고 짚는다. 가스 밸브 잠그기는 어른이 한다.',
            task: '가스 냄새가 나는 장면에서 어떻게 할지 골라요.',
            levels: LVB,
            items: [
              EB('집에 들어오니 가스 냄새가 나요. 어떻게 할까요?', '학교에서 돌아와 현관문을 여니 가스 냄새가 나요.', [
                { id: 'light', text: '어두워서 전등을 켜요', result: '스위치 불꽃이 위험할 수 있어요.', mood: '무서움', why: '전기 스위치를 만지지 않아요.' },
                { id: 'window', text: '스위치는 그대로, 창문을 열고 밖으로 나가요', result: '가스가 빠지고 안전한 곳에 있어요.', mood: '안심' },
                { id: 'cook', text: '라면을 끓이려고 불을 켜요', result: '불을 켜면 매우 위험해요.', mood: '무서움', why: '불은 절대 켜지 않아요.' }], 'window', 0.2),
              EB('밖으로 나왔어요. 어떻게 알릴까요?', '집 밖 복도로 나왔는데 집에 어른이 없어요.', [
                { id: 'inside', text: '다시 들어가 집 전화로 걸어요', result: '집 안에서 불꽃이 생길 수 있어요.', mood: '걱정', why: '알리는 것은 밖에서 해요.' },
                { id: 'outside', text: '집에서 떨어진 곳에서 어른·119에 알려요', result: '어른과 전문가가 안전하게 처리해요.', mood: '안심' },
                { id: 'wait', text: '아무에게도 말하지 않고 기다려요', result: '가스가 계속 새요.', mood: '불안', why: '바로 알려야 해요.' }], 'outside', 0.25),
              EB('학교 과학실에서 가스 냄새가 나요. 어떻게 할까요?', '과학실에 들어가니 가스 냄새가 나요.', [
                { id: 'tell', text: '아무것도 켜지 않고 나와 선생님께 알려요', result: '선생님이 밸브를 잠그고 환기해요.', mood: '안심' },
                { id: 'find', text: '냄새 나는 곳을 찾아 만져 봐요', result: '가스 기구를 잘못 건드릴 수 있어요.', mood: '걱정', why: '직접 찾지 말고 알려요.' },
                { id: 'fan', text: '환풍기 스위치를 켜요', result: '스위치 불꽃이 생길 수 있어요.', mood: '무서움', why: '전기 스위치를 쓰지 않아요.' }], 'tell', 0.25,
                { conclude: '가스 냄새가 나면 불·스위치는 그대로 두고, 창문을 열고, 밖에서 알려요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 가스 안전 습관', tool: 'emotion',
            teacher: '"가스가 새지 않게 평소에 무엇을 할까요?" 요리를 마치면 어른이 밸브를 잠그고, 휴대용 가스레인지 위에 큰 냄비를 올리지 않는 것 등을 짚는다. 부탄가스 통을 불 가까이 두거나 장난감처럼 쓰지 않는다.',
            task: '가스 안전 습관 장면에서 어떻게 할지 골라요.',
            levels: LVB,
            items: [
              EB('캠핑에서 가스통이 난로 옆에 있어요. 어떻게 할까요?', '캠핑장에서 휴대용 가스통이 난로 바로 옆에 놓여 있어요.', [
                { id: 'tell', text: '어른에게 알려 멀리 옮겨요', result: '뜨거워져 터지는 일을 막아요.', mood: '안심' },
                { id: 'kick', text: '발로 밀어 치워요', result: '통이 굴러 위험할 수 있어요.', mood: '걱정', why: '가스통은 어른이 옮겨요.' },
                { id: 'leave', text: '그대로 둬요', result: '통이 뜨거워질 수 있어요.', mood: '불안', why: '가스통은 불·열에서 멀리 둬요.' }], 'tell', 0.25),
              EB('다 쓴 부탄가스 통이 있어요. 어떻게 할까요?', '다 쓴 부탄가스 통이 쓰레기통 옆에 있어요.', [
                { id: 'play', text: '굴리며 놀아요', result: '남은 가스가 위험할 수 있어요.', mood: '걱정', why: '가스통은 장난감이 아니에요.' },
                { id: 'adult', text: '어른에게 맡겨 바르게 버려요', result: '안전하게 처리해요.', mood: '편안함' },
                { id: 'fire', text: '불에 넣어 태워요', result: '터질 수 있어 매우 위험해요.', mood: '무서움', why: '가스통은 불에 넣지 않아요.' }], 'adult', 0.25),
              EB('요리가 끝났어요. 어떻게 할까요?', '어른과 함께 요리를 마쳤어요.', [
                { id: 'valve', text: '어른이 불을 끄고 밸브를 잠그게 도와요', result: '가스가 새지 않아요.', mood: '뿌듯함' },
                { id: 'on', text: '불만 끄고 그냥 나가요', result: '밸브가 열려 있을 수 있어요.', mood: '걱정', why: '밸브까지 잠가요.' },
                { id: 'later', text: '내일 정리해요', result: '밤새 위험이 남아요.', mood: '불안', why: '바로 정리해요.' }], 'valve', 0.2,
                { conclude: '가스통은 불에서 멀리, 장난감처럼 쓰지 않고, 다 쓰면 밸브를 잠가요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"가스 냄새가 나면? 켜지 말고, 열고, 나가서 알려요." 다 함께 말해 본다. 출구 1번에서 전등을 고른 학생과 불꽃 까닭을 다시 짚는다.',
          exit: [
            { type: 'choice', prompt: '가스 냄새가 날 때 하지 않을 일은?', options: ['전등 스위치를 켜요', '창문을 열어요', '밖에서 알려요'], answer: 0, difficulty: 0.2, explain: '스위치를 켤 때 작은 불꽃이 생길 수 있어요.' },
            { type: 'choice', prompt: '가스가 샌다고 알릴 때 어디서 알릴까요?', options: ['집 밖 떨어진 곳', '가스 냄새 나는 부엌', '가스레인지 앞'], answer: 0, difficulty: 0.2, explain: '휴대전화도 집 밖에서 써요.' },
            { type: 'short', prompt: '가스 냄새가 날 때 할 일 세 가지를 차례대로 쓰세요.' },
            MOOD,
          ],
        },
        wsTitle: '가스 냄새가 날 때',
        ws: [
          { type: 'table', prompt: '안전하면 ○, 위험하면 ×를 쓰세요.', columns: ['행동', '○ / ×'], cells: [['창문을 열어요', ''], ['전등을 켜요', ''], ['밖에서 119에 알려요', ''], ['라이터를 켜 봐요', '']], answer: '○, ×, ○, ×' },
          { type: 'choice', prompt: '가스통을 두는 곳으로 알맞은 것에 ○ 하세요.', options: ['불과 먼 곳', '난로 옆', '햇볕 드는 차 안'], answer: '불과 먼 곳' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '가스 냄새가 나면 불·스위치는 그대로 두고, ___을 열고, 밖에서 알려요.', answer: '창문' },
          { type: 'short', prompt: '가스 밸브는 누가 잠가야 하는지와 까닭을 쓰세요.' },
        ],
        notes: '근거: 행정안전부 가스 사고 국민행동요령(가스 누출 시 불꽃·전기 스위치 사용 금지, 창문 열어 환기, 밸브 잠금, 밖에서 신고). 자주 보이는 어려움: ① 스위치가 위험한 줄 모른다. ② 집 안에서 전화한다. ③ 냄새 나는 곳을 직접 찾는다. 폭발 장면을 자세히 묘사하지 않는다.',
      }),
    ],
  });
})();
