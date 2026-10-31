/* 2학년 창체 계기교육 — 기념일 계기교육(기념일당 1차시, 10차시). 저학년: 기념일의 뜻과 예절(태극기·묵념·나눔)을 상황 고르기와 말풍선으로 익힌다.
 * 기념일(달력 순): 3·1절, 과학의 날(4.21), 지구의 날(4.22), 5·18민주화운동 기념일(5.18), 현충일(6.6)·6·25전쟁, 6·10민주항쟁 기념일(6.10), 광복절(8.15), 개천절(10.3), 한글날(10.9), 학생독립운동기념일(11.3).
 * 날짜는 「국경일에 관한 법률」(3·1절·광복절·개천절·한글날)과 「각종 기념일 등에 관한 규정」(과학의 날·5·18·현충일·6·25·6·10·학생독립운동기념일)을 따른다. 지구의 날은 법정기념일이 아닌 세계 환경의 날로 다룬다.
 * 역사 사실은 교육과정·교과서와 국가보훈부·교육부·기념재단 공식 자료에 실린 범위만 쓴다. 정치적 중립: 현재 정당·정치인을 다루지 않고, 특정 국가의 국민 전체를 비난하지 않는다.
 * 독도의 날은 독도교육 단원(g*-cc-dokdo)이 맡는다. 인물 이름은 역사 인물 말고는 가명이다. 전국 단위 시수가 없어 기념일당 1차시는 학교가 정한다. */
(function () {
  const GRADE = 2;
  const ID = `g${GRADE}-cc-days`;
  const UNIT = `g${GRADE}-창체-days`;
  const TITLE = '기념일 계기교육 — 기념일을 바르게 기념해요';
  const two = (n) => String(n).padStart(2, '0');
  const base = (n) => ({
    id: `${ID}-${two(n)}`, schema: 'edu-lesson.v1', catalog: { unit: UNIT, lesson: n },
    grade: GRADE, subject: '창체', unitTitle: TITLE, standards: [], minutes: 40,
    formats: ['chromebook', 'projector', 'print'],
  });
  const PROMPT = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const SCENE = (text, extra = []) => ({ viewBox: [480, 270], layers: [
    { motif: 'sun', x: 410, y: 58, s: 0.8 }, { motif: 'cloud', x: 110, y: 52 }, { motif: 'hills', y: 204 },
    { motif: 'tree', x: 80, y: 210 }, { motif: 'house', x: 390, y: 214, color: 'buttercup', s: 0.85 }, ...extra,
    { motif: 'text', x: 240, y: 132, text, size: 22 },
  ] });
  // 카드 교구 문항 틀
  const MS = (prompt, topic, slots, cards, sort, d, more) => ({ prompt, toolOptions: { mode: 'sort', topic, slots, cards }, target: { sort }, difficulty: d, ...more });
  const MM = (prompt, topic, slots, cards, match, d, more) => ({ prompt, toolOptions: { mode: 'match', topic, slots, cards }, target: { match }, difficulty: d, ...more });
  const MP = (prompt, topic, cards, pick, d, more) => ({ prompt, toolOptions: { mode: 'pick', topic, basket: topic, cards }, target: { pick }, difficulty: d, ...more });
  const EB = (prompt, situation, choices, choice, d, more) => ({ prompt, toolOptions: { mode: 'branch', situation, choices }, target: { choice }, difficulty: d, ...more });
  const SO = (prompt, title, slots, cards, order, d, more) => ({ prompt, toolOptions: { title, slots, cards }, target: { order }, difficulty: d, ...more });
  const SF = (prompt, cards, slots, fill, d, more) => ({ prompt, toolOptions: { mode: 'fill', cards, slots }, target: { fill }, difficulty: d, ...more });
  const TO = (prompt, cards, order, d, more) => ({ prompt, toolOptions: { cards, axis: ['옛날', '오늘날'] }, target: { order }, difficulty: d, ...more });
  const TM = (prompt, slots, cards, match, d, more) => ({ prompt, toolOptions: { mode: 'match', slots, cards, axis: ['옛날', '오늘날'] }, target: { match }, difficulty: d, ...more });
  const TS = (prompt, slots, cards, sort, d, more) => ({ prompt, toolOptions: { mode: 'sort', slots, cards, axis: ['옛날', '오늘날'] }, target: { sort }, difficulty: d, ...more });
  // 달력 띠(1월 → 12월) — 기념일을 날짜 차례로 놓는다
  const CO = (prompt, cards, order, d, more) => ({ prompt, toolOptions: { cards, axis: ['1월', '12월'] }, target: { order }, difficulty: d, ...more });
  // 우리나라 칸 지도(한반도를 6×9 칸으로 줄인 그림 — 칸 자리는 위치 관계만 살린다)
  const KOR_LAND = [[1, 0], [2, 0], [3, 0], [4, 0], [1, 1], [2, 1], [3, 1], [4, 1], [1, 2], [2, 2], [3, 2], [4, 2],
    [1, 3], [2, 3], [3, 3], [1, 4], [2, 4], [3, 4], [1, 5], [2, 5], [3, 5], [1, 6], [2, 6], [3, 6], [1, 7], [2, 7], [3, 7]];
  const KOR_SEA = [[0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8], [4, 3], [4, 4], [4, 5], [4, 6], [4, 7], [4, 8],
    [5, 2], [5, 3], [5, 4], [5, 5], [5, 6], [5, 7], [5, 8], [1, 8], [2, 8], [3, 8]];
  const KOR = (places, more) => Object.assign({ grid: [6, 9], title: '우리나라 칸 지도', regions: [{ name: '우리나라 땅', cells: KOR_LAND, color: 'mint' }], regionNames: false, sea: KOR_SEA, places }, more || {});
  const P = {
    seoul: { name: '서울', icon: 'capital', at: [2, 5] }, incheon: { name: '인천', icon: 'port', at: [1, 5] },
    cheonan: { name: '천안', icon: 'heritage', at: [2, 6] }, daegu: { name: '대구', icon: 'city', at: [3, 6] },
    gwangju: { name: '광주', icon: 'city', at: [1, 7] }, busan: { name: '부산', icon: 'port', at: [3, 7] },
    jeju: { name: '제주도', icon: 'island', at: [1, 8] }, pyongyang: { name: '평양', icon: 'city', at: [1, 3] },
    baekdu: { name: '백두산', icon: 'mountain', at: [2, 0] }, gangneung: { name: '강릉', icon: 'city', at: [3, 4] },
    panmun: { name: '판문점', icon: 'dot', at: [2, 4] },
  };
  const DJ = { name: '대전', icon: 'city', at: [2, 6] };
  // 활동지 전용 작은 지도(6×4) — 9줄 지도는 인쇄 글자가 작다
  const KORW_LAND = [[1, 0], [2, 0], [3, 0], [1, 1], [2, 1], [3, 1], [1, 2], [2, 2], [3, 2], [2, 3], [3, 3], [1, 3]];
  const KORW_SEA = [[0, 1], [0, 2], [0, 3], [4, 0], [4, 1], [4, 2], [4, 3], [5, 0], [5, 1], [5, 2], [5, 3]];
  const KORW = (places, more) => Object.assign({ grid: [6, 4], regions: [{ name: '우리나라 땅', cells: KORW_LAND, color: 'mint' }], regionNames: false, sea: KORW_SEA, places }, more || {});
  const PW = {
    seoul: { name: '서울', icon: 'capital', at: [2, 1] }, cheonan: { name: '천안', icon: 'heritage', at: [2, 2] },
    gwangju: { name: '광주', icon: 'city', at: [1, 3] }, busan: { name: '부산', icon: 'port', at: [3, 3] },
    incheon: { name: '인천', icon: 'port', at: [1, 1] },
  };
  const MI = (prompt, toolOptions, target, d, more) => ({ prompt, toolOptions, target, difficulty: d, ...more });
  const MQ = (prompt, toolOptions, q, choices, pick, d, more) => ({ prompt, toolOptions: Object.assign({}, toolOptions, { readOnly: true, ask: { q, choices } }), target: { pick }, difficulty: d, ...more });
  const LV = { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } };
  const LVB = { easy: { showBack: true }, base: {}, challenge: {} };
  const MAP_LV = { easy: { names: true, readout: true }, base: {}, challenge: {} };
  const DIFF = {
    easy: '카드를 놓거나 보기를 고르면 맞는지 바로 알려 주고, 갈림길 문항은 결과가 처음부터 보여요.',
    base: '모두 마친 뒤 확인을 눌러 스스로 고쳐요.',
    challenge: '카드 순서가 섞여 나오고, 그럴듯하지만 틀린 카드를 가려내요.',
  };
  // 도입 6 + 전개 27(14+13) + 정리 7 = 40분
  const LESSON = (n, o) => Object.assign(base(n), {
    title: o.title, objective: o.objective,
    illustration: { prompt: PROMPT(o.draw), scene: SCENE(o.banner, o.extra) },
    stages: [
      { id: 'intro', title: '도입', minutes: 6, teacher: o.intro.teacher, student: o.intro.student, demo: o.intro.demo },
      { id: 'main', title: '전개', minutes: 27, activities: o.acts.map((a, i) => ({ id: `a${i + 1}`, minutes: i === 0 ? 14 : 13, levels: a.tool === 'map' ? MAP_LV : a.tool === 'emotion' ? LVB : LV, ...a })) },
      { id: 'wrapup', title: '정리', minutes: 7, teacher: o.wrap.teacher, exitTicket: o.wrap.exit },
    ],
    worksheet: { title: o.wsTitle, items: o.ws }, differentiation: o.diff || DIFF, teacherNotes: o.notes,
  });
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  const XC = (tool, options, prompt, target, d) => Object.assign({ type: 'tool', tool, options }, tool === 'map' || options.mode === 'branch' ? {} : { state: { at: {} } }, { prompt, target, difficulty: d });
  const CH = (prompt, options, answer, explain, d) => ({ type: 'choice', prompt, options, answer, difficulty: d || 0.15, explain });
  // 짧은 데모 틀
  const DM = (tool, options, step) => ({ tool, options: Object.assign({ shuffle: false }, options), sequence: [step] });

  PaperLessons.registerUnit({
    id: ID, schema: 'edu-unit.v1', catalogUnit: UNIT,
    grade: GRADE, subject: '창체', unitTitle: TITLE,
    flow: '2학년 기념일 계기교육은 1학년에 만난 기념일 열 개를 "어떻게 바르게 기념할까?"로 한 걸음 더 들어가는 10차시입니다(기념일당 1차시). 3·1절에는 태극기의 모양과 뜻, 광복절에는 국경일과 현충일의 태극기 다는 방법, 현충일에는 사이렌이 울릴 때의 예절, 5·18민주화운동 기념일에는 기억하고 추모하는 방법과 광주의 위치, 6·10민주항쟁 기념일에는 반 대표를 뽑는 투표의 차례를 익힙니다. 과학의 날에는 측우기·해시계 같은 옛 과학 물건, 지구의 날에는 분리배출, 개천절에는 "널리 사람을 이롭게 하라"는 홍익인간, 한글날에는 하늘·땅·사람을 본뜬 모음, 학생독립운동기념일에는 차별에 함께 맞선 학생들의 이야기를 다룹니다. 기념일 계기교육은 전국 단위 시수가 정해져 있지 않으므로 기념일당 1차시 편성과 운영 시기는 학교가 정합니다(학교 계기교육 계획과 절차를 따름). 통합교과 「우리나라」·「나」, 국어(한글), 안전한 생활 단원과 연계해 운영할 수 있고(시수 인정은 학교 결정), 독도의 날은 독도교육 단원이 맡습니다.',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '태극기의 바탕·태극·네 괘 뜻 잇고 3·1절 노래 채우기',
        objective: '태극기의 흰 바탕·태극 무늬·네 괘가 뜻하는 것을 알고, 3·1절 노래의 낱말을 채울 수 있다.',
        draw: 'a large paper Korean flag on a classroom wall with children pointing to its parts',
        banner: '태극기를 알아요', extra: [{ motif: 'star', x: 150, y: 100, color: 'sky', s: 0.6 }],
        intro: {
          teacher: '"3·1절에 들었던 태극기, 가운데 동그라미는 무슨 색이었나요?" 대답을 듣고(기다릴 반응: "빨강, 파랑이요") 시연 단추로 태극 무늬 카드가 제자리에 놓이는 모습을 보여 준다. "검은 막대는 그냥 꾸민 거예요"라는 말이 나오면 "네 귀퉁이의 괘에도 하늘·땅·물·불이라는 뜻이 있어요"라고 알려 준다.',
          student: '태극기에서 기억나는 모양 하나를 짝에게 말해 봐요.',
          demo: DM('mindmap', { mode: 'match', topic: '태극기', slots: [{ id: 'c', label: '가운데 동그라미' }], cards: ['태극 무늬', '네 괘'] }, { match: { c: '태극 무늬' } }),
        },
        acts: [
          {
            title: '활동 1. 태극기 부분과 뜻 잇기', tool: 'mindmap',
            teacher: '"흰 바탕은 무엇을 뜻할까요?" 하나씩 이으며 태극기 그림을 함께 본다. 괘의 이름(건·곤·감·리)은 외우지 않아도 되고, 하늘·땅·물·불 네 가지만 기억하자고 말한다. 초록·노랑을 태극기 색으로 고르는 학생에게는 태극기 그림을 다시 보게 한다.',
            task: '태극기의 부분과 뜻을 잇고, 태극기의 색을 골라요.',
            items: [
              MM('태극기의 부분과 그 자리를 이어 보세요.', '태극기 부분', [{ id: 'bg', label: '흰색' }, { id: 'mid', label: '가운데' }, { id: 'edge', label: '네 귀퉁이' }], ['바탕', '태극 무늬', '네 괘', '별 무늬'], { bg: '바탕', mid: '태극 무늬', edge: '네 괘' }, 0.2),
              MP('태극기에 쓰인 색만 골라 담아 보세요.', '태극기 색', ['빨강', '파랑', '초록', '노랑'], ['빨강', '파랑'], 0.1),
              MP('네 괘가 뜻하는 것만 골라 보세요.', '네 괘의 뜻', ['하늘', '땅', '자동차', '사탕'], ['하늘', '땅'], 0.2,
                { conclude: '네 괘는 하늘·땅·물·불을 뜻해요. 흰 바탕은 밝음과 평화를 사랑하는 마음을 담았어요.' }),
            ],
          },
          {
            title: '활동 2. 3·1절 노래 낱말 채우기', tool: 'story',
            teacher: '"3·1절 노래를 들어 본 적 있나요?" 노래 첫 부분을 함께 읽고 빈칸을 채운다. \'기미년\'은 1919년을 옛날 방식으로 부르는 말이라고 알려 준다. 빈칸을 채운 뒤 한 소절씩 따라 불러 본다.',
            task: '3·1절 노래 가사의 빈칸을 채워요.',
            items: [
              SF('3·1절 노래 첫 줄을 채워 보세요.', ['정오', '저녁', '새벽'], [{ id: 'b1', who: '노래', motif: 'sun', label: '기미년 삼월 일일 ___.' }], { b1: '정오' }, 0.25),
              SF('3·1절 노래 둘째 줄을 채워 보세요.', ['만세', '안녕', '잘 자'], [{ id: 'b1', who: '노래', motif: 'flower', label: '터지자 밀물 같은 대한 독립 ___.' }], { b1: '만세' }, 0.15),
              SF('3·1절에 태극기를 다는 친구의 말을 채워 보세요.', ['기억해요', '잊어요', '버려요'], [{ id: 'b1', who: '윤', motif: 'house', label: '만세를 부른 날을 ___.' }], { b1: '기억해요' }, 0.1),
            ],
          },
        ],
        wrap: {
          teacher: '"태극기를 그린다면 무엇부터 그릴까요?" 출구 1번에서 네 괘를 가운데에 둔 학생에게는 태극기 그림을 다시 보여 주고 귀퉁이를 짚게 한다.',
          exit: [
            XC('mindmap', { mode: 'match', topic: '어디에 있을까', slots: [{ id: 'mid', label: '태극기 가운데' }, { id: 'edge', label: '태극기 귀퉁이' }], cards: ['빨강·파랑 태극', '검은 네 괘', '노란 별'] }, '태극기의 자리에 알맞은 무늬를 이어 보세요.', { match: { mid: '빨강·파랑 태극', edge: '검은 네 괘' } }, 0.2),
            CH('태극기의 바탕색은 무엇인가요?', ['흰색', '검은색'], 0, '태극기는 흰 바탕에 태극 무늬와 네 괘가 있어요.'),
            MOOD,
          ],
        },
        wsTitle: '태극기를 알아요',
        ws: [
          { type: 'choice', prompt: '태극기 가운데 무늬에 ○ 하세요.', options: ['태극 무늬', '별 무늬'], answer: '태극 무늬' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '네 괘는 하늘·땅·___·불을 뜻해요.', answer: '물' },
          { type: 'draw', prompt: '태극기를 바르게 그려 보세요.' },
          { type: 'short', prompt: '태극기를 바르게 대하는 방법을 한 가지 써 보세요.' },
        ],
        notes: '자주 보이는 어려움: ① 네 괘를 꾸밈으로만 여긴다 → 하늘·땅·물·불 네 낱말로 기억하게 한다. ② 태극의 빨강·파랑 위치를 바꾸어 그린다 → 태극기 그림을 보고 위쪽이 빨강임을 확인하게 한다. ③ 노래 가사의 옛말(기미년)을 어려워한다 → 1919년이라는 뜻만 알면 된다고 말해 준다.',
      }),

      LESSON(2, {
        title: '측우기·해시계가 하던 일 잇고 옛날과 오늘날 물건 나누기',
        objective: '과학의 날에 측우기·해시계 같은 옛 과학 물건이 하던 일을 알고, 오늘날 같은 일을 하는 물건과 견줄 수 있다.',
        draw: 'an old paper rain gauge and a bowl-shaped sundial beside a modern paper clock and umbrella',
        banner: '옛날의 과학', extra: [{ motif: 'cloud', x: 160, y: 96, color: 'sky', s: 0.6 }],
        intro: {
          teacher: '"옛날에는 비가 얼마나 왔는지 어떻게 알았을까요?" 대답을 듣고(기다릴 반응: "몰라요", "눈으로 봐요") 조선 세종 때 빗물을 받아 양을 재는 측우기를 만들었다고 알린다. 시연 단추로 측우기 카드를 \'비의 양 재기\'에 잇는다. "옛날 사람은 과학을 몰랐어요"라는 말이 나오면 "옛날에도 궁금한 것을 재고 기록한 과학이 있었어요"라고 말한다.',
          student: '시계가 없다면 지금이 몇 시인지 어떻게 알 수 있을까요? 짝에게 말해 봐요.',
          demo: DM('mindmap', { mode: 'match', topic: '옛 과학', slots: [{ id: 'r', label: '비의 양 재기' }], cards: ['측우기', '해시계'] }, { match: { r: '측우기' } }),
        },
        acts: [
          {
            title: '활동 1. 옛 과학 물건이 하던 일 잇기', tool: 'mindmap',
            teacher: '"해시계는 무엇으로 시각을 알려 줄까요?" 그림자가 움직인다는 점을 손전등으로 보여 준다. 측우기를 \'시각 알기\'에 잇는 학생에게는 "측우기에는 무엇이 담길까요?"라고 묻는다.',
            task: '옛 과학 물건과 하던 일을 잇고 골라요.',
            items: [
              MM('옛 과학 물건과 하던 일을 이어 보세요.', '하던 일', [{ id: 'rain', label: '측우기' }, { id: 'sun', label: '해시계' }], ['비의 양을 재요', '그림자로 시각을 알아요', '음식을 차갑게 해요'], { rain: '비의 양을 재요', sun: '그림자로 시각을 알아요' }, 0.15),
              MP('해시계로 시각을 알 때 꼭 필요한 것을 골라 보세요.', '해시계', ['햇빛', '그림자', '빗물', '바람'], ['햇빛', '그림자'], 0.2),
              MP('조선 세종 때 만든 과학 물건을 골라 보세요.', '세종 때 과학', ['측우기', '해시계', '스마트폰', '텔레비전'], ['측우기', '해시계'], 0.15),
            ],
          },
          {
            title: '활동 2. 옛날과 오늘날 물건 나누기', tool: 'timeline',
            teacher: '"오늘날에는 무엇으로 비의 양과 시각을 알까요?" 시간 띠의 왼쪽이 옛날, 오른쪽이 오늘날이라고 알려 준다. 둘 다 같은 일을 한다는 점을 짚는다.',
            task: '물건 카드를 옛날과 오늘날로 나누거나 차례대로 놓아요.',
            items: [
              TS('물건을 옛날과 오늘날로 나누어 보세요.', ['옛날', '오늘날'], ['측우기', '해시계', '전자시계', '일기 예보 앱'], { '옛날': ['측우기', '해시계'], '오늘날': ['전자시계', '일기 예보 앱'] }, 0.15),
              TO('시각을 아는 물건을 옛날부터 차례대로 놓아 보세요.', [{ id: 'sun', text: '해시계', motif: 'sun' }, { id: 'wall', text: '태엽 벽시계', motif: 'house' }, { id: 'phone', text: '스마트폰 시계', motif: 'star' }], ['sun', 'wall', 'phone'], 0.2),
              TS('비와 날씨를 아는 방법을 옛날과 오늘날로 나누어 보세요.', ['옛날', '오늘날'], ['빗물을 그릇에 받아 재기', '기상 위성 사진', '하늘 보고 짐작하기', '날씨 방송'], { '옛날': ['빗물을 그릇에 받아 재기', '하늘 보고 짐작하기'], '오늘날': ['기상 위성 사진', '날씨 방송'] }, 0.25),
            ],
          },
        ],
        wrap: {
          teacher: '"옛날 사람들은 왜 비의 양을 재었을까요?" 농사에 비가 중요했다는 점을 말해 준다. 출구 1번에서 해시계를 오늘날 칸에 둔 학생에게는 그림자를 쓰던 옛 방법임을 다시 짚는다.',
          exit: [
            XC('timeline', { mode: 'sort', slots: ['옛날', '오늘날'], cards: ['측우기로 재기', '자동 우량계로 재기'], axis: ['옛날', '오늘날'] }, '비의 양을 재는 방법을 옛날과 오늘날로 나누어 보세요.', { sort: { '옛날': ['측우기로 재기'], '오늘날': ['자동 우량계로 재기'] } }, 0.2),
            CH('측우기는 무엇을 재는 물건인가요?', ['비의 양', '바람의 세기'], 0, '측우기는 빗물을 받아 비의 양을 재요.'),
            MOOD,
          ],
        },
        wsTitle: '옛날의 과학',
        ws: [
          { type: 'choice', prompt: '그림자로 시각을 알려 주는 물건에 ○ 하세요.', options: ['해시계', '측우기'], answer: '해시계' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '측우기는 ___의 양을 재는 물건이에요.', answer: '비' },
          { type: 'draw', prompt: '오늘날 시각을 알려 주는 물건을 그려 보세요.' },
          { type: 'short', prompt: '과학의 날에 만들어 보고 싶은 물건을 써 보세요.' },
        ],
        notes: '자주 보이는 어려움: ① 옛날에는 과학이 없었다고 여긴다 → 측우기·해시계처럼 재고 기록한 과학을 보여 준다. ② 해시계가 밤에도 쓰인다고 여긴다 → 햇빛과 그림자가 있어야 한다는 점을 손전등으로 보여 준다.',
      }),

      LESSON(3, {
        title: '재활용품 종류별로 나누고 페트병 내놓는 차례 놓기',
        objective: '지구의 날에 재활용품을 종류별로 나누고, 바르게 내놓는 차례를 말할 수 있다.',
        draw: 'paper recycling bins in different colors with children sorting bottles, cans and paper',
        banner: '바르게 나누어 버려요', extra: [{ motif: 'leaf', x: 150, y: 204, color: 'mint', s: 0.7 }],
        intro: {
          teacher: '"다 마신 우유갑과 빈 캔은 같은 통에 넣을까요?" 대답을 듣고(기다릴 반응: "아니요", "몰라요") 지구의 날(4월 22일)에 쓰레기를 종류별로 나누어 버리면 다시 쓸 수 있는 자원이 된다고 알린다. 시연 단추로 캔을 \'캔\' 칸에 넣는다.',
          student: '집에서 분리배출을 도와 본 적이 있나요? 짝에게 말해 봐요.',
          demo: DM('mindmap', { mode: 'sort', topic: '분리배출', slots: ['종이', '캔'], cards: ['신문지', '음료수 캔'] }, { sort: { '종이': ['신문지'], '캔': ['음료수 캔'] } }),
        },
        acts: [
          {
            title: '활동 1. 재활용품 종류별로 나누기', tool: 'mindmap',
            teacher: '"이것은 무엇으로 만들었을까요?" 물건을 만든 재료를 먼저 말하게 한다. 휴지를 종이 칸에 넣는 학생에게는 "쓴 휴지는 젖고 더러워져서 일반 쓰레기예요"라고 짚는다.',
            task: '재활용품을 종류별로 나누고 골라요.',
            items: [
              MS('물건을 종이·플라스틱·캔으로 나누어 보세요.', '분리배출', ['종이', '플라스틱', '캔'], ['상자', '공책', '생수병', '요구르트병', '참치 캔', '음료수 캔'], { '종이': ['상자', '공책'], '플라스틱': ['생수병', '요구르트병'], '캔': ['참치 캔', '음료수 캔'] }, 0.25),
              MP('재활용할 수 없는 것만 골라 담아 보세요.', '일반 쓰레기', ['쓴 휴지', '깨진 컵 조각', '깨끗한 상자', '빈 캔'], ['쓴 휴지', '깨진 컵 조각'], 0.25),
              MP('분리배출 전에 하면 좋은 일을 골라 보세요.', '내놓기 전에', ['내용물 비우기', '물로 헹구기', '음식 넣어 두기', '모두 한 통에 넣기'], ['내용물 비우기', '물로 헹구기'], 0.2),
            ],
          },
          {
            title: '활동 2. 바르게 내놓는 차례 놓기', tool: 'story',
            teacher: '"페트병은 그냥 버리면 될까요?" 차례를 놓은 뒤 실제 빈 병으로 함께 해 본다. 라벨 떼기를 빠뜨리는 학생에게는 "병에 붙은 종이·비닐은 재료가 달라요"라고 말한다.',
            task: '재활용품을 바르게 내놓는 장면을 차례대로 놓아요.',
            items: [
              SO('투명 페트병을 내놓는 차례를 놓아 보세요.', '페트병 내놓기', ['처음', '가운데', '끝'], [{ id: 'empty', text: '비우고 헹궈요', motif: 'wave' }, { id: 'label', text: '라벨을 떼요', motif: 'leaf' }, { id: 'crush', text: '찌그러뜨려 내놓아요', motif: 'star' }], ['empty', 'label', 'crush'], 0.25),
              SO('상자를 내놓는 차례를 놓아 보세요.', '상자 내놓기', ['처음', '가운데', '끝'], [{ id: 'tape', text: '테이프를 떼요', motif: 'leaf' }, { id: 'flat', text: '납작하게 펴요', motif: 'house' }, { id: 'tie', text: '묶어서 내놓아요', motif: 'star' }], ['tape', 'flat', 'tie'], 0.25),
              SF('분리배출을 하는 친구의 말을 채워 보세요.', ['다시 쓸 수 있어요', '없어져요', '더러워져요'], [{ id: 'b1', who: '은', motif: 'leaf', label: '잘 나누면 ___.' }], { b1: '다시 쓸 수 있어요' }, 0.1),
            ],
          },
        ],
        wrap: {
          teacher: '"우리 교실 분리배출 통은 어디에 있나요?" 출구 1번에서 캔을 플라스틱 칸에 넣은 학생에게는 두드려 소리를 들어 보게 한다.',
          exit: [
            XC('mindmap', { mode: 'sort', topic: '교실 분리배출', slots: ['종이', '캔'], cards: ['다 쓴 공책', '주스 캔', '색종이 상자', '사이다 캔'] }, '교실에서 나온 재활용품을 나누어 보세요.', { sort: { '종이': ['다 쓴 공책', '색종이 상자'], '캔': ['주스 캔', '사이다 캔'] } }, 0.2),
            CH('페트병을 내놓기 전에 할 일은 무엇인가요?', ['비우고 라벨 떼기', '음료를 남겨 두기'], 0, '내용물을 비우고 헹군 뒤 라벨을 떼어 내놓아요.'),
            MOOD,
          ],
        },
        wsTitle: '바르게 나누어 버려요',
        ws: [
          { type: 'choice', prompt: '종이로 내놓는 것에 ○ 하세요.', options: ['상자', '생수병'], answer: '상자' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '페트병은 ___을 떼고 내놓아요.', answer: '라벨' },
          { type: 'short', prompt: '우리 집에서 분리배출할 때 내가 도울 일을 써 보세요.' },
          { type: 'draw', prompt: '분리배출 통에 알맞게 넣는 모습을 그려 보세요.' },
        ],
        notes: '자주 보이는 어려움: ① 더러운 것도 재활용된다고 여긴다 → 비우고 헹구는 까닭을 말해 준다. ② 재료가 섞인 물건을 한 칸에 넣는다 → 라벨·테이프처럼 다른 재료는 떼어 낸다. 지역마다 배출 방법이 조금 다를 수 있으니 학교·지역 안내를 따른다.',
      }),

      LESSON(4, {
        title: '추모하는 장면 차례 놓고 지도에서 광주 찾기',
        objective: '5·18민주화운동 기념일을 기억하고 추모하는 방법을 알고, 지도에서 광주를 찾을 수 있다.',
        draw: 'children placing white paper flowers in front of a quiet memorial under a May sky',
        banner: '기억하고 추모해요', extra: [{ motif: 'flower', x: 150, y: 210, color: 'cream', s: 0.7 }],
        intro: {
          teacher: '"슬프게 세상을 떠난 분들을 기억할 때 우리는 무엇을 할까요?" 대답을 듣고(기다릴 반응: "꽃을 놓아요", "기도해요") 5월 18일은 1980년 광주에서 민주주의를 바라다 희생된 시민들을 기억하고 추모하는 날이라고 알린다. 시연 단추로 \'꽃 들기\' 다음에 \'꽃 놓기\'를 놓는다. 무서운 장면을 묻는 학생에게는 "오늘은 기억하는 방법을 배워요"라고 말해 준다.',
          student: '고마운 분을 기억할 때 하는 일을 짝에게 말해 봐요.',
          demo: DM('story', { slots: ['처음', '다음'], cards: [{ id: 'hold', text: '꽃을 들어요', motif: 'flower' }, { id: 'put', text: '꽃을 놓아요', motif: 'leaf' }] }, { order: ['hold', 'put'] }),
        },
        acts: [
          {
            title: '활동 1. 추모하는 장면 차례대로 놓기', tool: 'story',
            teacher: '"추모하는 곳에서는 어떻게 움직일까요?" 장면을 놓고 실제로 몸으로 해 본다. 웃으며 뛰는 장면을 넣는 학생에게는 "조용히 마음을 모으는 곳이에요"라고 말한다.',
            task: '추모하는 장면을 차례대로 놓고, 어울리는 행동을 골라요.',
            items: [
              SO('추모하는 장면을 차례대로 놓아 보세요.', '추모하기', ['처음', '가운데', '끝'], [{ id: 'flower', text: '꽃을 한 송이 들어요', motif: 'flower' }, { id: 'put', text: '꽃을 조용히 놓아요', motif: 'leaf' }, { id: 'bow', text: '고개 숙여 묵념해요', motif: 'moon' }], ['flower', 'put', 'bow'], 0.15),
              SO('5월 18일 이야기 시간의 차례를 놓아 보세요.', '이야기 시간', ['처음', '가운데', '끝'], [{ id: 'listen', text: '선생님 이야기 들어요', motif: 'star' }, { id: 'think', text: '그분들을 떠올려요', motif: 'star' }, { id: 'write', text: '기억의 말을 써요', motif: 'leaf' }], ['listen', 'think', 'write'], 0.2),
              SF('기억하는 마음을 담은 말을 채워 보세요.', ['기억할게요', '잊을게요', '몰라요'], [{ id: 'b1', who: '라온', motif: 'flower', label: '광주의 시민들을 ___.' }], { b1: '기억할게요' }, 0.1),
            ],
          },
          {
            title: '활동 2. 지도에서 광주 찾기', tool: 'map',
            teacher: '"광주는 우리나라 어느 쪽에 있을까요?" 지도 위쪽이 북쪽이라고 먼저 알려 준다. 부산에 꽂는 학생에게는 "부산은 오른쪽 아래, 광주는 왼쪽 아래예요"라고 짚는다.',
            task: '우리나라 칸 지도에서 말하는 곳에 핀을 꽂아요.',
            items: [
              MI('5·18민주화운동이 일어난 광주에 핀을 꽂아 보세요.', KOR([P.seoul, P.gwangju, P.busan, P.jeju]), { place: '광주' }, 0.15),
              MI('우리나라 수도 서울에 핀을 꽂아 보세요.', KOR([P.seoul, P.gwangju, P.busan, P.gangneung]), { place: '서울' }, 0.1),
              MQ('지도를 보고 물음에 답해 보세요.', KOR([P.seoul, P.gwangju, P.busan]), '광주는 서울에서 어느 쪽에 있나요?', ['북쪽(위)', '남쪽(아래)'], 1, 0.2),
            ],
          },
        ],
        wrap: {
          teacher: '"5월 18일, 나는 어떻게 그분들을 기억할까요?" 출구 1번에서 꽃 놓기 전에 묵념을 둔 학생에게는 순서는 학교 추모식 안내를 따르면 되고, 마음을 모으는 것이 가장 중요하다고 말한다.',
          exit: [
            XC('mindmap', { mode: 'pick', topic: '추모할 때', basket: '추모할 때', cards: ['조용히 걷기', '고개 숙여 묵념', '큰 소리로 장난', '뛰어다니기'] }, '추모할 때 어울리는 행동만 골라 담아 보세요.', { pick: ['조용히 걷기', '고개 숙여 묵념'] }, 0.1),
            CH('5·18민주화운동이 일어난 도시는 어디인가요?', ['광주', '강릉'], 0, '5·18민주화운동은 1980년 5월 광주에서 일어났어요.'),
            MOOD,
          ],
        },
        wsTitle: '기억하고 추모해요',
        ws: [
          { type: 'figure', wide: true, prompt: '지도에서 광주를 찾아 ○ 하세요.', tool: 'map', figures: [{ options: KORW([PW.seoul, PW.gwangju, PW.busan]), caption: '우리나라 칸 지도' }], answer: '왼쪽 아래(남서쪽) 광주' },
          { type: 'choice', prompt: '추모할 때 어울리는 행동에 ○ 하세요.', options: ['조용히 묵념하기', '크게 떠들기'], answer: '조용히 묵념하기' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '5·18민주화운동 기념일은 ___월 ___일이에요.', answer: '5, 18' },
          { type: 'short', prompt: '광주의 시민들을 기억하는 말을 한 문장 써 보세요.' },
        ],
        notes: '자주 보이는 어려움: ① 추모를 슬픈 일로만 여겨 불안해한다 → 기억하는 방법에 집중하고 무서운 장면은 쓰지 않는다. ② 지도에서 동서를 헷갈린다 → 서울을 먼저 찾고 아래쪽에서 왼쪽·오른쪽을 가르게 한다. 학교 계기교육 계획과 교육청 안내 자료 범위를 따른다.',
      }),

      LESSON(5, {
        title: '현충일 사이렌이 울릴 때 할 일 고르고 감사 편지 채우기',
        objective: '현충일에 사이렌이 울리거나 추모 장소에 갔을 때 지킬 예절을 고르고, 감사의 마음을 글로 나타낼 수 있다.',
        draw: 'a quiet park at ten in the morning with families pausing and a paper flag lowered on its pole',
        banner: '현충일 예절', extra: [{ motif: 'flower', x: 150, y: 210, color: 'cream', s: 0.7 }],
        intro: {
          teacher: '"현충일 아침 10시에 놀이터에서 놀고 있는데 사이렌이 울려요. 어떻게 할까요?" 대답을 듣고(기다릴 반응: "멈춰요", "계속 놀아요") 1학년 때 배운 묵념을 떠올리게 한다. 시연 단추로 \'멈추고 묵념해요\' 보기를 고른다. "집 안에 있으면 안 해도 돼요"라는 말이 나오면 "어디에 있든 1분 동안 마음을 모을 수 있어요"라고 말한다.',
          student: '현충일에 가족과 한 일을 하나 짝에게 말해 봐요.',
          demo: DM('emotion', { mode: 'branch', situation: '현충일 10시, 사이렌이 울려요.', choices: [{ id: 'stop', text: '멈추고 묵념해요', result: '1분 동안 고마운 분을 떠올려요.', mood: '편안함' }, { id: 'run', text: '계속 뛰어놀아요', result: '묵념하는 사람들이 놀라요.', mood: '걱정' }] }, { choice: 'stop' }),
        },
        acts: [
          {
            title: '활동 1. 현충일 예절 갈림길 고르기', tool: 'emotion',
            teacher: '"이 상황에서 바른 예절은 무엇일까요?" 결과를 함께 읽고 까닭을 말하게 한다. 현충원처럼 나라를 위해 희생한 분들이 잠든 곳에서는 조용히 걷는다고 알려 준다.',
            task: '현충일 상황에서 어떻게 할지 고르고 결과를 봐요.',
            items: [
              EB('놀이터에서 사이렌이 울렸어요. 어떻게 할까요?', '현충일 아침 10시, 친구와 그네를 타는데 사이렌이 울려요.', [
                { id: 'pause', text: '그네에서 내려 묵념해요', result: '친구와 함께 1분 동안 마음을 모아요.', mood: '편안함' },
                { id: 'swing', text: '더 높이 그네를 타요', result: '둘레 사람들이 묵념에 집중하지 못해요.', mood: '걱정', why: '사이렌이 울리면 하던 일을 멈추고 묵념해요.' }], 'pause', 0.1),
              EB('현충원에 갔는데 동생이 뛰어다녀요. 어떻게 할까요?', '가족과 현충원에 갔어요. 동생이 비석 사이를 뛰어다녀요.', [
                { id: 'tell', text: '"여기서는 조용히 걸어" 알려 줘요', result: '동생이 손을 잡고 조용히 걸어요.', mood: '뿌듯함' },
                { id: 'chase', text: '같이 뛰며 술래잡기해요', result: '다른 참배객이 불편해해요.', mood: '부끄러움', why: '추모하는 곳에서는 조용히 걸어요.' }], 'tell', 0.15),
              EB('현충일에 태극기를 달아요. 어떻게 달까요?', '현충일 아침, 아빠와 태극기를 달려고 해요.', [
                { id: 'half', text: '깃면을 조금 내려 달아요', result: '슬픔을 함께하는 조기가 돼요.', mood: '편안함' },
                { id: 'top', text: '맨 위에 붙여 달아요', result: '기쁜 날처럼 보여요.', mood: '걱정', why: '현충일에는 깃면을 내려 다는 조기를 달아요.' }], 'half', 0.25),
            ],
          },
          {
            title: '활동 2. 감사 편지 빈칸 채우기', tool: 'story',
            teacher: '"나라를 지킨 분들께 편지를 쓴다면 무엇이라고 쓸까요?" 빈칸을 채운 뒤 한 문장씩 읽는다. 편지에는 고마운 까닭이 들어가면 좋다고 말해 준다.',
            task: '감사 편지의 빈칸에 알맞은 말을 넣어요.',
            items: [
              SF('감사 편지 첫 줄을 채워 보세요.', ['지켜 주셔서', '놀아 주셔서', '혼내 주셔서'], [{ id: 'b1', who: '편지', motif: 'flower', label: '우리나라를 ___ 고맙습니다.' }], { b1: '지켜 주셔서' }, 0.1),
              SF('감사 편지 둘째 줄을 채워 보세요.', ['잊지 않을게요', '모를게요', '그만할게요'], [{ id: 'b1', who: '편지', motif: 'star', label: '그 마음을 ___.' }], { b1: '잊지 않을게요' }, 0.15),
              SF('편지 끝에 쓰는 다짐을 채워 보세요.', ['서로 아끼는', '싸우는', '혼자만 아는'], [{ id: 'b1', who: '편지', motif: 'sun', label: '___ 어린이가 될게요.' }], { b1: '서로 아끼는' }, 0.15),
            ],
          },
        ],
        wrap: {
          teacher: '"올해 현충일 10시에 나는 어디에서 무엇을 하고 있을까요? 그때 어떻게 할까요?" 출구 1번에서 계속 노는 보기를 고른 학생에게는 1분이면 된다는 점을 다시 말해 준다.',
          exit: [
            XC('emotion', { mode: 'branch', situation: '현충일 10시, 집에서 만화를 보는데 사이렌이 들려요.', choices: [{ id: 'mute', text: '화면을 멈추고 묵념해요', result: '1분 동안 고마운 분을 떠올려요.', mood: '편안함' }, { id: 'watch', text: '소리를 키워 계속 봐요', result: '묵념할 때를 놓쳐요.', mood: '걱정' }] }, '집에서 사이렌이 들릴 때 할 일을 골라 보세요.', { choice: 'mute' }, 0.1),
            CH('현충일에 태극기는 어떻게 다나요?', ['깃면을 내려 달아요', '깃봉에 붙여 달아요'], 0, '현충일에는 깃면을 깃면 너비만큼 내려 다는 조기를 달아요.'),
            MOOD,
          ],
        },
        wsTitle: '현충일 예절',
        ws: [
          { type: 'choice', prompt: '사이렌이 울릴 때 할 일에 ○ 하세요.', options: ['멈추고 묵념하기', '계속 뛰기'], answer: '멈추고 묵념하기' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '현충일에는 태극기를 ___ 달아요.', answer: '내려(조기로)' },
          { type: 'short', prompt: '나라를 지킨 분들께 감사 편지를 한 줄 써 보세요.' },
          { type: 'draw', prompt: '현충일에 조기를 단 우리 집을 그려 보세요.' },
        ],
        notes: '자주 보이는 어려움: ① 묵념을 학교에서만 하는 것으로 여긴다 → 어디에 있든 1분 동안 마음을 모을 수 있다고 말한다. ② 국경일과 현충일 태극기를 똑같이 단다 → 현충일은 조기(깃면 너비만큼 내림)라고 짚는다.',
      }),

      LESSON(6, {
        title: '반 대표를 뽑는 투표의 차례 놓고 투표 약속 고르기',
        objective: '6·10민주항쟁 기념일에 국민이 대표를 직접 뽑는 일의 뜻을 알고, 반 대표를 뽑는 투표의 차례와 약속을 말할 수 있다.',
        draw: 'children dropping folded paper ballots into a paper box, a chalkboard with tally marks',
        banner: '내 손으로 뽑아요', extra: [{ motif: 'star', x: 150, y: 100, color: 'buttercup', s: 0.6 }],
        intro: {
          teacher: '"우리 반 대표를 선생님이 그냥 정하면 어떨까요?" 대답을 듣고(기다릴 반응: "우리가 뽑고 싶어요") 1987년 6월, 많은 시민이 \'나라의 대표인 대통령을 국민이 직접 뽑자\'고 목소리를 냈고 그 일을 6월 10일에 기억한다고 알린다. 시연 단추로 \'후보 말 듣기\' 다음에 \'투표하기\'를 놓는다.',
          student: '투표를 해 본 적이 있나요? 무엇을 뽑았는지 짝에게 말해 봐요.',
          demo: DM('story', { slots: ['처음', '다음'], cards: [{ id: 'hear', text: '후보 말 듣기', motif: 'star' }, { id: 'vote', text: '투표하기', motif: 'sun' }] }, { order: ['hear', 'vote'] }),
        },
        acts: [
          {
            title: '활동 1. 투표하는 차례 놓기', tool: 'story',
            teacher: '"표를 넣기 전에 무엇을 해야 할까요?" 표를 세는 장면을 앞에 놓는 학생에게는 "아직 아무도 표를 안 넣었는데 무엇을 셀까요?"라고 묻는다. 결과를 따르는 일도 투표의 한 부분이라고 강조한다.',
            task: '투표하는 장면을 차례대로 놓아요.',
            items: [
              SO('반 대표 뽑는 차례를 놓아 보세요.', '반 대표 뽑기', ['1', '2', '3', '4'], [{ id: 'hear', text: '후보 다짐 듣기', motif: 'star' }, { id: 'write', text: '혼자 몰래 쓰기', motif: 'leaf' }, { id: 'box', text: '투표함에 넣기', motif: 'house' }, { id: 'count', text: '함께 표 세기', motif: 'sun' }], ['hear', 'write', 'box', 'count'], 0.25),
              SO('투표가 끝난 뒤의 차례를 놓아 보세요.', '투표가 끝나면', ['처음', '가운데', '끝'], [{ id: 'count', text: '표를 세요', motif: 'star' }, { id: 'tell', text: '결과를 알려요', motif: 'sun' }, { id: 'help', text: '뽑힌 대표를 도와요', motif: 'flower' }], ['count', 'tell', 'help'], 0.2),
              SF('결과를 받아들이는 친구의 말을 채워 보세요.', ['축하해, 함께할게', '다시 해', '난 몰라'], [{ id: 'b1', who: '찬', motif: 'flower', label: '내가 뽑은 친구는 아니지만 ___.' }], { b1: '축하해, 함께할게' }, 0.2),
            ],
          },
          {
            title: '활동 2. 투표 약속 고르기', tool: 'mindmap',
            teacher: '"친구 표를 대신 써 주면 어떨까요?" 한 사람이 한 표씩, 아무도 보지 않게 혼자 쓰는 것이 공정한 투표라고 알려 준다. 친구에게 누구를 뽑을지 물어보는 카드를 고르는 학생에게는 "그러면 마음대로 고르기 어려워요"라고 짚는다.',
            task: '공정한 투표 약속을 고르고 나누어요.',
            items: [
              MP('공정한 투표 약속만 골라 담아 보세요.', '투표 약속', ['한 사람이 한 표', '혼자 몰래 쓰기', '두 장 넣기', '친구 표 대신 쓰기'], ['한 사람이 한 표', '혼자 몰래 쓰기'], 0.2),
              MS('투표할 때 지킬 일과 하면 안 될 일로 나누어 보세요.', '투표할 때', ['지켜요', '안 돼요'], ['후보 다짐 잘 듣기', '내 생각대로 고르기', '사탕 주고 뽑아 달라기', '남의 표 훔쳐보기'], { '지켜요': ['후보 다짐 잘 듣기', '내 생각대로 고르기'], '안 돼요': ['사탕 주고 뽑아 달라기', '남의 표 훔쳐보기'] }, 0.25),
              MP('후보가 할 만한 좋은 다짐을 골라 보세요.', '후보 다짐', ['친구 말을 잘 들을게요', '교실을 깨끗이 할게요', '나만 편하게 할게요', '숙제를 없앨게요'], ['친구 말을 잘 들을게요', '교실을 깨끗이 할게요'], 0.25),
            ],
          },
        ],
        wrap: {
          teacher: '"6월 10일을 기억하며, 내 손으로 뽑는 일이 왜 소중할까요?" 출구 1번에서 표 세기를 앞에 둔 학생에게는 투표함에 넣는 장면을 다시 떠올리게 한다.',
          exit: [
            XC('story', { title: '모둠장 뽑기', slots: ['처음', '가운데', '끝'], cards: [{ id: 'write', text: '이름을 몰래 써요', motif: 'leaf' }, { id: 'drop', text: '상자에 넣어요', motif: 'house' }, { id: 'count', text: '표를 세어요', motif: 'star' }] }, '모둠장 뽑는 장면을 차례대로 놓아 보세요.', { order: ['write', 'drop', 'count'] }, 0.2),
            CH('1987년 6월에 시민들이 바란 것은 무엇인가요?', ['대통령을 국민이 직접 뽑기', '학교를 쉬기'], 0, '시민들은 대통령을 국민이 직접 뽑는 직선제를 바랐어요.'),
            MOOD,
          ],
        },
        wsTitle: '내 손으로 뽑아요',
        ws: [
          { type: 'choice', prompt: '공정한 투표에 ○ 하세요.', options: ['혼자 몰래 쓰기', '친구 표 대신 쓰기'], answer: '혼자 몰래 쓰기' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '투표는 한 사람이 ___ 표씩 해요.', answer: '한' },
          { type: 'short', prompt: '내가 반 대표가 된다면 할 다짐을 써 보세요.' },
          { type: 'draw', prompt: '우리 반이 투표하는 모습을 그려 보세요.' },
        ],
        notes: '자주 보이는 어려움: ① 투표를 인기 투표로만 여긴다 → 후보의 다짐을 듣고 고르는 차례를 강조한다. ② 결과에 따르지 않는다 → 함께 정한 결과를 함께 지키는 것이 투표의 마무리라고 말한다. 현재 정당·정치인 이야기는 다루지 않는다.',
      }),

      LESSON(7, {
        title: '국경일과 현충일 태극기 다는 법 견주고 국경일 달력 순서 놓기',
        objective: '광복절 같은 국경일과 현충일에 태극기를 다는 방법을 구별하고, 다섯 국경일을 고를 수 있다.',
        draw: 'two paper houses side by side, one flag at the top of the pole and one flag lowered, under summer sky',
        banner: '광복절 태극기', extra: [{ motif: 'sun', x: 150, y: 96, color: 'buttercup', s: 0.6 }],
        intro: {
          teacher: '"광복절과 현충일에 태극기를 똑같이 달까요?" 대답을 듣고(기다릴 반응: "똑같아요", "현충일은 내려요") 광복절처럼 기쁜 국경일에는 깃봉 바로 아래에 붙여 달고, 슬픔을 함께하는 현충일에는 깃면 너비만큼 내려 단다고 알린다. 시연 단추로 \'광복절\'을 \'붙여 달아요\'에 잇는다.',
          student: '우리 집이나 아파트에 태극기가 걸린 날을 짝에게 말해 봐요.',
          demo: DM('mindmap', { mode: 'match', topic: '태극기 다는 법', slots: [{ id: 'up', label: '깃봉에 붙여 달아요' }], cards: ['광복절', '현충일'] }, { match: { up: '광복절' } }),
        },
        acts: [
          {
            title: '활동 1. 태극기 다는 법 견주기', tool: 'mindmap',
            teacher: '"이날은 기쁜 날일까요, 슬픔을 함께하는 날일까요?" 날마다 뜻을 먼저 말한 뒤 칸에 넣게 한다. 현충일을 국경일로 고르는 학생에게는 현충일은 국경일이 아니라 기념일이라고 짚는다.',
            task: '날을 태극기 다는 방법에 따라 나누고, 국경일을 골라요.',
            items: [
              MS('날을 태극기 다는 방법에 따라 나누어 보세요.', '태극기 다는 법', ['붙여 달아요', '내려 달아요(조기)'], ['광복절', '3·1절', '개천절', '현충일'], { '붙여 달아요': ['광복절', '3·1절', '개천절'], '내려 달아요(조기)': ['현충일'] }, 0.25),
              MP('국경일만 골라 담아 보세요.', '국경일', ['광복절', '한글날', '어린이날', '현충일'], ['광복절', '한글날'], 0.3,
                { conclude: '국경일은 3·1절, 제헌절, 광복절, 개천절, 한글날 다섯 날이에요.' }),
              MM('날과 그날 태극기 모습을 이어 보세요.', '태극기 모습', [{ id: 'k', label: '광복절' }, { id: 'h', label: '현충일' }], ['깃봉 바로 아래', '깃면 너비만큼 아래', '땅에 내려놓기'], { k: '깃봉 바로 아래', h: '깃면 너비만큼 아래' }, 0.25),
            ],
          },
          {
            title: '활동 2. 국경일 달력 차례로 놓기', tool: 'timeline',
            teacher: '"1월부터 12월까지 달력을 넘기면 어느 국경일이 먼저 나올까요?" 띠 왼쪽이 1월, 오른쪽이 12월이라고 알려 준다. 개천절과 한글날은 둘 다 10월이라 날짜를 견주게 한다.',
            task: '국경일과 기념일을 달력 차례대로 놓아요.',
            items: [
              CO('국경일을 달력 차례대로 놓아 보세요.', [{ id: 'm1', text: '3·1절', big: '3월' }, { id: 'lib', text: '광복절', big: '8월' }, { id: 'hg', text: '한글날', big: '10월' }], ['m1', 'lib', 'hg'], 0.15),
              CO('10월의 두 국경일을 차례대로 놓아 보세요.', [{ id: 'hg', text: '한글날(9일)', motif: 'leaf' }, { id: 'gc', text: '개천절(3일)', motif: 'mountain' }], ['gc', 'hg'], 0.25),
              CO('태극기를 다는 날을 달력 차례대로 놓아 보세요.', [{ id: 'hc', text: '현충일', big: '6월' }, { id: 'm1', text: '3·1절', big: '3월' }, { id: 'gc', text: '개천절', big: '10월' }, { id: 'lib', text: '광복절', big: '8월' }], ['m1', 'hc', 'lib', 'gc'], 0.3),
            ],
          },
        ],
        wrap: {
          teacher: '"8월 15일 아침, 우리 집 태극기는 어떻게 달까요?" 출구 1번에서 광복절을 조기 칸에 넣은 학생에게는 광복절은 나라를 되찾은 기쁜 날이라는 점을 다시 말한다.',
          exit: [
            XC('mindmap', { mode: 'match', topic: '이날은 어떻게', slots: [{ id: 'a', label: '8월 15일' }, { id: 'b', label: '6월 6일' }], cards: ['깃봉에 붙여 달기', '깃면 내려 달기'] }, '날짜와 태극기 다는 방법을 이어 보세요.', { match: { a: '깃봉에 붙여 달기', b: '깃면 내려 달기' } }, 0.2),
            CH('다음 중 국경일은 무엇인가요?', ['개천절', '현충일'], 0, '개천절은 국경일이고, 현충일은 나라를 위해 희생한 분들을 기리는 기념일이에요.'),
            MOOD,
          ],
        },
        wsTitle: '광복절 태극기',
        ws: [
          { type: 'choice', prompt: '광복절 태극기 다는 법에 ○ 하세요.', options: ['깃봉에 붙여 달기', '내려 달기'], answer: '깃봉에 붙여 달기' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '광복절은 ___월 ___일이에요.', answer: '8, 15' },
          { type: 'draw', prompt: '광복절 아침 태극기를 단 우리 집을 그려 보세요.' },
          { type: 'short', prompt: '국경일 다섯 가운데 아는 날을 써 보세요.' },
        ],
        notes: '자주 보이는 어려움: ① 현충일을 국경일로 여긴다 → 국경일은 다섯 날(3·1절·제헌절·광복절·개천절·한글날)이라고 정리한다. ② 조기를 기쁜 날에도 단다 → 날의 뜻(기쁨·추모)을 먼저 말하게 한다.',
      }),

      LESSON(8, {
        title: '홍익인간의 뜻 알고 모두를 이롭게 하는 행동 나누기',
        objective: '개천절에 단군 이야기 속 "널리 사람을 이롭게 하라"는 뜻을 알고, 모두를 이롭게 하는 행동을 고를 수 있다.',
        draw: 'a paper sky opening over mountains with children helping each other in a village below',
        banner: '널리 사람을 이롭게', extra: [{ motif: 'mountain', x: 150, y: 196, color: 'mint', s: 0.6 }],
        intro: {
          teacher: '"단군 이야기에서 환웅은 왜 땅으로 내려왔을까요?" 대답을 듣고(기다릴 반응: "사람들을 도우려고요") 환웅이 \'널리 사람을 이롭게 하려고\' 내려왔다고 전해지며, 이 뜻을 홍익인간이라고 한다고 알린다. 시연 단추로 \'친구 돕기\' 카드를 \'모두에게 좋아요\'에 넣는다.',
          student: '내가 한 일로 여러 사람이 좋았던 적이 있나요? 짝에게 말해 봐요.',
          demo: DM('mindmap', { mode: 'sort', topic: '이로운 일', slots: ['모두에게 좋아요', '나만 좋아요'], cards: ['친구 돕기', '혼자 다 먹기'] }, { sort: { '모두에게 좋아요': ['친구 돕기'], '나만 좋아요': ['혼자 다 먹기'] } }),
        },
        acts: [
          {
            title: '활동 1. 단군 이야기 말풍선 채우기', tool: 'story',
            teacher: '"환웅이 곰에게 무엇을 주었나요?" 1학년 때 들은 이야기를 떠올리며 말풍선을 채운다. 백 일을 \'열흘\'로 고르는 학생에게는 아주 오래 참아야 했다는 점을 짚는다.',
            task: '단군 이야기 속 말풍선의 빈칸을 채워요.',
            items: [
              SF('환웅의 말을 채워 보세요.', ['이롭게', '힘들게', '심심하게'], [{ id: 'b1', who: '환웅', motif: 'cloud', label: '널리 사람을 ___ 하리라.' }], { b1: '이롭게' }, 0.15),
              SF('환웅이 곰과 호랑이에게 한 말을 채워 보세요.', ['쑥과 마늘', '사탕과 빵', '물과 꽃'], [{ id: 'b1', who: '환웅', motif: 'leaf', label: '___을 먹고 햇빛을 보지 마라.' }], { b1: '쑥과 마늘' }, 0.15),
              SF('곰이 참아야 했던 날을 채워 보세요.', ['백 일', '하루', '한 시간'], [{ id: 'b1', who: '곰', motif: 'mountain', label: '___ 동안 굴에서 참을게요.' }], { b1: '백 일' }, 0.2),
            ],
          },
          {
            title: '활동 2. 모두를 이롭게 하는 행동 나누기', tool: 'mindmap',
            teacher: '"이 행동은 나만 좋을까요, 모두에게 좋을까요?" 카드마다 누가 좋아지는지 말하게 한다. 혼자 하는 좋은 습관(이 닦기)도 결국 모두에게 좋다는 의견이 나오면 까닭을 들어 보고 인정해 준다.',
            task: '행동을 모두에게 이로운 일과 나만 좋은 일로 나누어요.',
            items: [
              MS('행동을 두 가지로 나누어 보세요.', '누구에게 좋을까', ['모두에게 좋아요', '나만 좋아요'], ['복도 휴지 줍기', '놀이 기구 차례 지키기', '간식 혼자 다 먹기', '공 혼자만 쓰기'], { '모두에게 좋아요': ['복도 휴지 줍기', '놀이 기구 차례 지키기'], '나만 좋아요': ['간식 혼자 다 먹기', '공 혼자만 쓰기'] }, 0.2),
              MP('우리 반을 이롭게 하는 일만 골라 담아 보세요.', '우리 반을 위해', ['책꽂이 정리하기', '모르는 친구 돕기', '교실에서 뛰기', '친구 물건 숨기기'], ['책꽂이 정리하기', '모르는 친구 돕기'], 0.15),
              MP('개천절에 맞는 말을 골라 보세요.', '개천절', ['홍익인간', '하늘이 열린 날', '나라를 되찾은 날', '글자를 만든 날'], ['홍익인간', '하늘이 열린 날'], 0.25),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 집에 가서 가족을 이롭게 할 일 하나는 무엇인가요?" 출구 1번에서 \'혼자 쓰기\'를 담은 학생에게는 함께 쓰면 누가 더 좋아지는지 묻는다.',
          exit: [
            XC('mindmap', { mode: 'pick', topic: '가족을 이롭게', basket: '가족을 이롭게', cards: ['신발 정리하기', '수저 놓기 돕기', '리모컨 혼자 쓰기', '방 어지르기'] }, '가족을 이롭게 하는 일만 골라 담아 보세요.', { pick: ['신발 정리하기', '수저 놓기 돕기'] }, 0.1),
            CH('"홍익인간"은 무슨 뜻인가요?', ['널리 사람을 이롭게', '혼자 힘을 기르기'], 0, '홍익인간은 널리 사람을 이롭게 한다는 뜻이에요.'),
            MOOD,
          ],
        },
        wsTitle: '널리 사람을 이롭게',
        ws: [
          { type: 'choice', prompt: '모두를 이롭게 하는 행동에 ○ 하세요.', options: ['휴지 줍기', '혼자 다 먹기'], answer: '휴지 줍기' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '홍익인간은 널리 사람을 ___ 한다는 뜻이에요.', answer: '이롭게' },
          { type: 'short', prompt: '우리 반을 이롭게 할 나의 일을 써 보세요.' },
          { type: 'draw', prompt: '모두를 이롭게 하는 모습을 그려 보세요.' },
        ],
        notes: '자주 보이는 어려움: ① 홍익인간을 어려운 말로만 외운다 → "모두에게 좋은 일"로 바꾸어 말하게 한다. ② 단군 이야기를 그대로 사실로 여긴다 → 오래 전해 오는 나라 세운 이야기라고 알려 준다.',
      }),

      LESSON(9, {
        title: '하늘·땅·사람을 본뜬 모음 잇고 바른 우리말 채우기',
        objective: '한글날에 모음의 기본 글자가 하늘·땅·사람을 본떴음을 알고, 바른 우리말을 골라 쓸 수 있다.',
        draw: 'a paper sun dot, a flat ground line and a standing person shape forming Korean vowels',
        banner: '하늘·땅·사람', extra: [{ motif: 'sun', x: 150, y: 96, color: 'buttercup', s: 0.6 }],
        intro: {
          teacher: '"ㅏ는 어떤 모양들이 모여 생겼을까요?" 대답을 듣고(기다릴 반응: "막대랑 점이요") 세종대왕이 모음을 만들 때 둥근 하늘(·), 평평한 땅(ㅡ), 서 있는 사람(ㅣ)을 본떴다고 알린다. 시연 단추로 \'ㅡ\' 카드를 \'땅\'에 잇는다.',
          student: '하늘·땅·사람 모양을 손으로 만들어 짝에게 보여 줘요.',
          demo: DM('mindmap', { mode: 'match', topic: '모음의 모양', slots: [{ id: 'g', label: '평평한 땅' }], cards: ['ㅡ', 'ㅣ'] }, { match: { g: 'ㅡ' } }),
        },
        acts: [
          {
            title: '활동 1. 모음 기본 글자와 뜻 잇기', tool: 'mindmap',
            teacher: '"서 있는 사람 모양은 어느 글자일까요?" 몸으로 글자를 만들어 본다. ㅣ와 ㅡ를 바꾸어 잇는 학생에게는 누워 있는 것과 서 있는 것을 몸으로 견주게 한다.',
            task: '모음 기본 글자와 본뜬 것을 잇고, 모음을 골라요.',
            items: [
              MM('모음 기본 글자와 본뜬 것을 이어 보세요.', '본뜬 것', [{ id: 'sky', label: '둥근 하늘' }, { id: 'land', label: '평평한 땅' }, { id: 'man', label: '서 있는 사람' }], ['·', 'ㅡ', 'ㅣ', 'ㅁ'], { sky: '·', land: 'ㅡ', man: 'ㅣ' }, 0.25),
              MP('ㅣ와 ·를 더해 만든 모음만 골라 담아 보세요.', 'ㅣ와 · 더하기', ['ㅏ', 'ㅓ', 'ㅗ', 'ㄱ'], ['ㅏ', 'ㅓ'], 0.3),
              MS('글자를 모음과 자음으로 나누어 보세요.', '한글 글자', ['모음', '자음'], ['ㅜ', 'ㅑ', 'ㄷ', 'ㅂ'], { '모음': ['ㅜ', 'ㅑ'], '자음': ['ㄷ', 'ㅂ'] }, 0.2),
            ],
          },
          {
            title: '활동 2. 바른 우리말 채우기', tool: 'story',
            teacher: '"한글날에는 한글을 바르게 쓰는 마음도 기념해요." 줄임말을 고르는 학생에게는 "친구끼리는 알아도 할머니는 알아들으실까요?"라고 묻는다.',
            task: '말풍선에 바른 우리말을 넣어요.',
            items: [
              SF('선생님께 드리는 인사를 채워 보세요.', ['안녕하세요', '안냐세요', '하이'], [{ id: 'b1', who: '봄', motif: 'sun', label: '선생님, ___.' }], { b1: '안녕하세요' }, 0.1),
              SF('친구에게 고마운 마음을 채워 보세요.', ['고마워', 'ㄱㅁ', '땡큐'], [{ id: 'b1', who: '별', motif: 'star', label: '도와줘서 정말 ___.' }], { b1: '고마워' }, 0.15),
              SF('할머니께 드리는 말을 채워 보세요.', ['맛있게 드세요', '맛점', '냠냠하삼'], [{ id: 'b1', who: '봄', motif: 'house', label: '할머니, 진지 ___.' }], { b1: '맛있게 드세요' }, 0.2),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 집에서 바른 우리말로 하고 싶은 말은 무엇인가요?" 출구 1번에서 ㅗ를 ㅣ에서 만든 글자로 담은 학생에게는 ㅗ는 ㅡ 위에 ·가 올라간 모양이라고 짚는다.',
          exit: [
            XC('mindmap', { mode: 'pick', topic: 'ㅡ와 · 더하기', basket: 'ㅡ와 · 더하기', cards: ['ㅗ', 'ㅜ', 'ㅏ', 'ㅅ'] }, 'ㅡ와 ·를 더해 만든 모음만 골라 담아 보세요.', { pick: ['ㅗ', 'ㅜ'] }, 0.3),
            CH('모음 ㅡ는 무엇을 본떴나요?', ['평평한 땅', '둥근 하늘'], 0, 'ㅡ는 평평한 땅, ·는 둥근 하늘, ㅣ는 서 있는 사람을 본떴어요.'),
            MOOD,
          ],
        },
        wsTitle: '하늘·땅·사람',
        ws: [
          { type: 'choice', prompt: '서 있는 사람을 본뜬 글자에 ○ 하세요.', options: ['ㅣ', 'ㅡ'], answer: 'ㅣ' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '한글날은 ___월 ___일이에요.', answer: '10, 9' },
          { type: 'short', prompt: '줄임말 대신 쓰고 싶은 바른 우리말을 하나 써 보세요.' },
          { type: 'draw', prompt: '하늘·땅·사람 모양으로 모음을 만들어 그려 보세요.' },
        ],
        notes: '자주 보이는 어려움: ① ㅣ와 ㅡ의 뜻을 바꾼다 → 몸으로 서고 눕기를 해 보게 한다. ② 줄임말을 나쁜 말로만 여긴다 → 듣는 사람이 알아듣기 쉬운 말을 고르는 것이 바른 말이라고 정리한다.',
      }),

      LESSON(10, {
        title: '차별에 함께 맞선 학생들 이야기 차례 놓고 공평한 행동 나누기',
        objective: '학생독립운동기념일에 1929년 학생들이 차별에 함께 맞선 이야기를 차례대로 말하고, 공평한 행동을 고를 수 있다.',
        draw: 'old-style paper train beside autumn trees and students standing together with paper banners',
        banner: '함께 맞선 학생들', extra: [{ motif: 'leaf', x: 150, y: 206, color: 'peach', s: 0.7 }],
        intro: {
          teacher: '"친구 한 명만 계속 다르게 대하면 어떤 마음일까요?" 대답을 듣고(기다릴 반응: "속상해요", "억울해요") 1929년, 기차로 학교에 다니던 우리 학생들이 부당한 일을 당하자 광주의 학생들이 함께 "옳지 않다"고 나섰고, 11월 3일에 그 일을 기억한다고 알린다. 시연 단추로 이야기 첫 장면을 놓는다.',
          student: '모두에게 똑같이 해 주어서 좋았던 일을 짝에게 말해 봐요.',
          demo: DM('story', { slots: ['처음', '다음'], cards: [{ id: 'train', text: '학생들이 기차로 학교 가요', motif: 'house' }, { id: 'unfair', text: '부당한 일이 생겨요', motif: 'cloud' }] }, { order: ['train', 'unfair'] }),
        },
        acts: [
          {
            title: '활동 1. 학생들 이야기 차례대로 놓기', tool: 'story',
            teacher: '"부당한 일이 생긴 뒤 학생들은 어떻게 했나요?" 장면을 놓은 뒤 소리 내어 읽는다. 학생들이 혼자가 아니라 함께 나섰다는 점, 다른 학교 학생들도 뜻을 같이했다는 점을 강조한다.',
            task: '1929년 학생들 이야기 장면을 차례대로 놓아요.',
            items: [
              SO('1929년 학생들 이야기를 차례대로 놓아 보세요.', '학생들 이야기', ['처음', '가운데', '끝'], [{ id: 'train', text: '기차역에서 부당한 일', motif: 'cloud' }, { id: 'gwangju', text: '광주 학생들이 나서요', motif: 'sun' }, { id: 'all', text: '여러 곳 학생이 함께해요', motif: 'star' }], ['train', 'gwangju', 'all'], 0.2),
              SO('교실에서 함께 바로잡는 이야기를 차례대로 놓아 보세요.', '우리 반 이야기', ['처음', '가운데', '끝'], [{ id: 'left', text: '한 친구만 놀이에서 빠져요', motif: 'cloud' }, { id: 'say', text: '"같이 하자" 말해요', motif: 'sun' }, { id: 'play', text: '모두 함께 놀아요', motif: 'flower' }], ['left', 'say', 'play'], 0.15),
              SF('학생들이 외친 마음을 채워 보세요.', ['옳지 않아요', '좋아요', '괜찮아요'], [{ id: 'b1', who: '학생들', motif: 'star', label: '차별은 ___!' }], { b1: '옳지 않아요' }, 0.15),
            ],
          },
          {
            title: '활동 2. 공평한 행동 나누기', tool: 'mindmap',
            teacher: '"이 행동은 모두를 똑같이 대할까요?" 카드마다 누가 속상할지 떠올리게 한다. \'키 큰 친구만 뽑기\'를 공평하다고 여기는 학생에게는 뽑히지 못한 친구의 마음을 묻는다.',
            task: '행동을 공평한 일과 차별하는 일로 나누어요.',
            items: [
              MS('행동을 공평한 일과 차별하는 일로 나누어 보세요.', '공평할까', ['공평해요', '차별해요'], ['돌아가며 역할 맡기', '모두에게 같은 규칙', '사는 곳으로 놀리기', '한 친구만 빼고 놀기'], { '공평해요': ['돌아가며 역할 맡기', '모두에게 같은 규칙'], '차별해요': ['사는 곳으로 놀리기', '한 친구만 빼고 놀기'] }, 0.2),
              MP('차별을 보았을 때 할 수 있는 일을 골라 담아 보세요.', '차별을 보면', ['"그건 옳지 않아" 말하기', '선생님께 알리기', '같이 놀리기', '못 본 척하기'], ['"그건 옳지 않아" 말하기', '선생님께 알리기'], 0.15),
              MP('11월 3일에 기억하는 사람들을 골라 보세요.', '기억하는 사람', ['1929년 학생들', '차별에 맞선 학생들', '만화 주인공', '운동선수'], ['1929년 학생들', '차별에 맞선 학생들'], 0.15),
            ],
          },
        ],
        wrap: {
          teacher: '"올해 만난 기념일 열 개 가운데 가장 기억에 남는 날은 무엇인가요?" 출구 1번에서 순서를 바꾼 학생에게는 무엇이 먼저 일어나 학생들이 나섰는지 묻는다.',
          exit: [
            XC('story', { title: '11월 3일', slots: ['처음', '가운데', '끝'], cards: [{ id: 'hurt', text: '학생이 부당한 일을 겪어요', motif: 'cloud' }, { id: 'stand', text: '친구들이 함께 나서요', motif: 'sun' }, { id: 'remember', text: '오늘 그날을 기억해요', motif: 'star' }] }, '11월 3일 이야기를 차례대로 놓아 보세요.', { order: ['hurt', 'stand', 'remember'] }, 0.15),
            CH('1929년 학생들이 옳지 않다고 한 것은 무엇인가요?', ['차별', '급식'], 0, '학생들은 우리 학생을 차별하고 부당하게 대하는 것에 맞섰어요.'),
            MOOD,
          ],
        },
        wsTitle: '함께 맞선 학생들',
        ws: [
          { type: 'choice', prompt: '공평한 행동에 ○ 하세요.', options: ['돌아가며 역할 맡기', '한 친구만 빼기'], answer: '돌아가며 역할 맡기' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '학생독립운동기념일은 ___월 ___일이에요.', answer: '11, 3' },
          { type: 'short', prompt: '차별을 보았을 때 할 말을 써 보세요.' },
          { type: 'draw', prompt: '모두가 함께 노는 우리 반을 그려 보세요.' },
        ],
        notes: '자주 보이는 어려움: ① 차별을 "장난"으로 넘긴다 → 받는 사람의 마음을 먼저 떠올리게 한다. ② 맞서는 것을 싸움으로 여긴다 → 바르게 말하기·어른께 알리기를 맞서는 방법으로 정리한다. 학생의 피해 경험을 털어놓게 하지 않고, 어려울 때 담임·상담 선생님께 알리는 길을 안내한다.',
      }),
    ],
  });

})();
