/* 4학년 창체 계기교육 — 기념일 계기교육(기념일당 1차시, 10차시). 중학년: 인물의 행동과 사건의 까닭·결과를 이야기 순서와 연표로 잇는다.
 * 기념일(달력 순): 3·1절, 과학의 날(4.21), 지구의 날(4.22), 5·18민주화운동 기념일(5.18), 현충일(6.6)·6·25전쟁, 6·10민주항쟁 기념일(6.10), 광복절(8.15), 개천절(10.3), 한글날(10.9), 학생독립운동기념일(11.3).
 * 날짜는 「국경일에 관한 법률」(3·1절·광복절·개천절·한글날)과 「각종 기념일 등에 관한 규정」(과학의 날·5·18·현충일·6·25·6·10·학생독립운동기념일)을 따른다. 지구의 날은 법정기념일이 아닌 세계 환경의 날로 다룬다.
 * 역사 사실은 교육과정·교과서와 국가보훈부·교육부·기념재단 공식 자료에 실린 범위만 쓴다. 정치적 중립: 현재 정당·정치인을 다루지 않고, 특정 국가의 국민 전체를 비난하지 않는다.
 * 독도의 날은 독도교육 단원(g*-cc-dokdo)이 맡는다. 인물 이름은 역사 인물 말고는 가명이다. 전국 단위 시수가 없어 기념일당 1차시는 학교가 정한다. */
(function () {
  const GRADE = 4;
  const ID = `g${GRADE}-cc-days`;
  const UNIT = `g${GRADE}-창체-days`;
  const TITLE = '기념일 계기교육 — 사건의 까닭과 결과';
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
    flow: '4학년 기념일 계기교육은 3학년에 놓은 사건의 차례 위에 "왜 그런 일이 일어났고, 그 뒤에 무엇이 바뀌었나"를 잇는 10차시입니다(기념일당 1차시). 3·1절에는 유관순의 삶을 이야기 차례로 놓고 3·1운동 뒤 임시 정부 수립으로 이어진 결과를 보며, 6·10민주항쟁 기념일에는 1987년의 흐름과 선거의 네 가지 원칙, 광복절에는 나라 안팎의 독립운동과 광복절 노래, 학생독립운동기념일에는 학생들이 요구한 것과 오늘 학생의 권리·책임을 다룹니다. 현충일·6·25전쟁에서는 가상의 피란 가족 이야기로 전쟁이 남긴 아픔과 기억하는 노력을 나누고, 5·18민주화운동 기념일에는 기록이 남은 까닭과 근거 없는 소문을 확인하는 태도를 익힙니다. 과학의 날에는 탐구 과정과 과학자의 태도, 지구의 날에는 기후 변화의 원인과 결과, 개천절에는 단군 이야기의 낱말 뜻과 고조선의 유물, 한글날에는 한글이 걸어온 길과 다듬은 우리말을 다루며, 기념일 계기교육은 전국 단위 시수가 없어 기념일당 1차시 편성과 운영 시기는 학교가 정합니다(학교 계기교육 계획과 절차를 따름). 사회(지역의 역사·민주주의), 과학(탐구), 국어 단원과 연계할 수 있고(시수 인정은 학교 결정), 독도의 날은 독도교육 단원이 맡습니다.',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '유관순의 삶을 이야기 차례로 놓고 3·1운동이 낳은 결과 잇기',
        objective: '유관순의 활동을 차례대로 말하고, 3·1운동이 대한민국 임시 정부 수립으로 이어졌음을 설명할 수 있다.',
        draw: 'a young student in a hanbok holding a paper flag at a crowded market, paper hills behind',
        banner: '유관순과 3·1운동', extra: [{ motif: 'flower', x: 150, y: 214, color: 'rose', s: 0.6 }],
        intro: {
          teacher: '"3학년 때 지도에서 천안을 찾았지요. 천안 아우내 장터에서 만세 운동을 이끈 사람은 누구였나요?" 대답을 듣고(기다릴 반응: "유관순이요") 유관순은 이화학당 학생으로 서울의 만세 운동에 참여하고, 고향으로 내려가 만세 운동을 이끌었다고 알린다. 시연 단추로 두 장면을 놓는다. "유관순 혼자 만세를 불렀어요?"라는 질문에는 "고향의 많은 사람과 함께였어요"라고 답한다.',
          student: '유관순에 대해 알고 있는 것 하나를 짝에게 말해 봐요.',
          demo: DM('story', { slots: ['처음', '다음'], cards: [{ id: 'school', text: '이화학당 학생', motif: 'house' }, { id: 'seoul', text: '서울 만세 운동 참여', motif: 'flower' }] }, { order: ['school', 'seoul'] }),
        },
        acts: [
          {
            title: '활동 1. 유관순의 삶 차례대로 놓기', tool: 'story',
            teacher: '"학교가 문을 닫은 뒤 유관순은 어디로 갔을까요?" 장면마다 \'그래서\'로 이어 말하게 한다. 아우내 장터 만세를 서울 만세보다 앞에 두는 학생에게는 서울에서 먼저 만세 운동을 겪었다는 점을 짚는다.',
            task: '유관순의 활동을 차례대로 놓아요.',
            items: [
              SO('유관순의 삶을 차례대로 놓아 보세요.', '유관순 이야기', ['1', '2', '3', '4'], [{ id: 'seoul', text: '서울 만세에 참여', motif: 'flower' }, { id: 'home', text: '고향 천안으로 감', motif: 'house' }, { id: 'aunae', text: '아우내 장터 만세', motif: 'sun' }, { id: 'prison', text: '서대문 형무소에 갇힘', motif: 'moon' }], ['seoul', 'home', 'aunae', 'prison'], 0.3),
              SO('아우내 장터 만세 운동의 차례를 놓아 보세요.', '아우내 장터', ['처음', '가운데', '끝'], [{ id: 'flag', text: '태극기를 몰래 만듦', motif: 'leaf' }, { id: 'gather', text: '장날 사람들이 모임', motif: 'house' }, { id: 'shout', text: '함께 만세를 부름', motif: 'sun' }], ['flag', 'gather', 'shout'], 0.25),
              SF('유관순의 마음을 짐작해 채워 보세요.', ['나라를 되찾고', '혼자 편하게', '조용히 숨어'], [{ id: 'b1', who: '유관순', motif: 'star', label: '___ 싶어요.' }], { b1: '나라를 되찾고' }, 0.15),
            ],
          },
          {
            title: '활동 2. 3·1운동이 낳은 결과 시간 띠에 잇기', tool: 'timeline',
            teacher: '"3·1운동 뒤에 사람들은 무엇을 세웠을까요?" 나라를 되찾을 때까지 독립운동을 이끌 대한민국 임시 정부가 1919년 4월 세워졌다고 알린다. 임시 정부를 광복 뒤에 두는 학생에게는 \'임시\'의 뜻을 묻는다.',
            task: '3·1운동과 그 뒤에 일어난 일을 차례대로 놓고 이어요.',
            items: [
              TO('3·1운동과 그 뒤의 일을 차례대로 놓아 보세요.', [{ id: 'mansei', text: '3·1운동', big: '1919.3' }, { id: 'gov', text: '임시 정부 수립', big: '1919.4' }, { id: 'lib', text: '광복', big: '1945' }], ['mansei', 'gov', 'lib'], 0.25),
              TS('3·1운동 앞과 뒤에 있었던 일로 나누어 보세요.', ['3·1운동 전', '3·1운동 뒤'], ['나라를 빼앗김', '임시 정부 수립', '학생독립운동'], { '3·1운동 전': ['나라를 빼앗김'], '3·1운동 뒤': ['임시 정부 수립', '학생독립운동'] }, 0.3),
              TM('때와 그때의 일을 이어 보세요. 맞지 않는 카드는 남겨요.', [{ id: 'm3', label: '1919년 3월' }, { id: 'm4', label: '1919년 4월' }], ['3·1운동', '대한민국 임시 정부 수립', '6·25전쟁'], { m3: '3·1운동', m4: '대한민국 임시 정부 수립' }, 0.3,
                { conclude: '3·1운동으로 모인 독립의 뜻이 한 달 뒤 대한민국 임시 정부 수립으로 이어졌어요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"3·1운동이 없었다면 임시 정부는 세워졌을까요?" 출구 1번에서 임시 정부를 3·1운동 앞에 둔 학생에게는 3월과 4월을 견주게 한다.',
          exit: [
            XC('timeline', { cards: [{ id: 'gov', text: '임시 정부 수립' }, { id: 'aunae', text: '아우내 장터 만세' }, { id: 'tapgol', text: '탑골공원 만세' }], axis: ['먼저', '나중'] }, '세 사건을 일어난 차례대로 놓아 보세요.', { order: ['tapgol', 'aunae', 'gov'] }, 0.3),
            CH('3·1운동 뒤 독립운동을 이끌려고 세운 것은 무엇인가요?', ['대한민국 임시 정부', '조선 총독부'], 0, '3·1운동 뒤 1919년 4월 대한민국 임시 정부가 세워졌어요.'),
            MOOD,
          ],
        },
        wsTitle: '유관순과 3·1운동',
        ws: [
          { type: 'table', prompt: '유관순의 활동을 차례대로 쓰세요.', columns: ['차례', '한 일'], cells: [['1', ''], ['2', ''], ['3', '']], answer: '서울 만세 운동 참여 / 고향 천안으로 내려감 / 아우내 장터 만세 운동을 이끎' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '3·1운동 뒤 1919년 4월에 대한민국 ___ 정부가 세워졌다.', answer: '임시' },
          { type: 'choice', prompt: '유관순이 만세 운동을 이끈 곳에 ○ 하세요.', options: ['아우내 장터', '하얼빈역'], answer: '아우내 장터' },
          { type: 'short', prompt: '3·1운동이 우리 역사에 남긴 결과를 한 문장으로 써 보세요.' },
        ],
        notes: '자주 보이는 어려움: ① 유관순 혼자 만세를 불렀다고 여긴다 → 장날 모인 많은 사람이 함께했다고 짚는다. ② 3·1운동과 임시 정부의 차례를 바꾼다 → 3월과 4월로 나누어 말하게 한다. 형무소의 고문 장면 같은 자극적 묘사는 하지 않는다.',
      }),

      LESSON(2, {
        title: '탐구하는 차례 놓고 과학자의 태도 가려내기',
        objective: '과학의 날에 탐구하는 과정을 차례대로 말하고, 과학자에게 필요한 태도를 가려낼 수 있다.',
        draw: 'children with paper goggles recording results in notebooks beside paper beakers and plants',
        banner: '과학자처럼 탐구해요', extra: [{ motif: 'star', x: 150, y: 100, color: 'buttercup', s: 0.6 }],
        intro: {
          teacher: '"과학자는 궁금한 것이 생기면 바로 답을 정할까요?" 대답을 듣고(기다릴 반응: "실험해요", "찾아봐요") 과학자는 예상하고 실험해 보고 결과를 기록한 뒤 결론을 낸다고 알린다. 4월 21일 과학의 날, 4월 과학의 달에 우리도 과학자처럼 탐구해 보자고 말한다. 시연 단추로 \'궁금한 점\' 다음에 \'예상하기\'를 놓는다.',
          student: '실험해 본 경험이 있으면 짝에게 말해 봐요.',
          demo: DM('story', { slots: ['처음', '다음'], cards: [{ id: 'q', text: '궁금한 점 정하기', motif: 'star' }, { id: 'guess', text: '결과 예상하기', motif: 'sun' }] }, { order: ['q', 'guess'] }),
        },
        acts: [
          {
            title: '활동 1. 탐구하는 차례 놓기', tool: 'story',
            teacher: '"결론은 언제 낼 수 있을까요?" 실험 전에 결론을 쓰는 학생에게는 "실험 결과를 보기 전에 결론을 알 수 있을까요?"라고 묻는다. 예상이 틀려도 괜찮고, 그것도 알게 된 것이라고 말해 준다.',
            task: '탐구하는 과정을 차례대로 놓아요.',
            items: [
              SO('탐구하는 과정을 차례대로 놓아 보세요.', '탐구 과정', ['1', '2', '3', '4'], [{ id: 'q', text: '궁금한 점 정하기', motif: 'star' }, { id: 'guess', text: '결과 예상하기', motif: 'sun' }, { id: 'test', text: '실험하고 기록하기', motif: 'leaf' }, { id: 'end', text: '결론 내리기', motif: 'flower' }], ['q', 'guess', 'test', 'end'], 0.25),
              SO('식물 탐구 이야기를 차례대로 놓아 보세요.', '빛과 식물', ['1', '2', '3', '4'], [{ id: 'q', text: '빛이 없으면 어떻게 될까', motif: 'sun' }, { id: 'guess', text: '시들 거라고 예상', motif: 'cloud' }, { id: 'test', text: '상자 안과 밖에 둠', motif: 'house' }, { id: 'end', text: '빛이 필요하다고 결론', motif: 'leaf' }], ['q', 'guess', 'test', 'end'], 0.3),
              SF('예상이 틀린 친구의 말을 채워 보세요.', ['새로 알게 됐어', '실험을 숨기자', '결과를 바꾸자'], [{ id: 'b1', who: '다온', motif: 'star', label: '예상과 달랐지만 ___.' }], { b1: '새로 알게 됐어' }, 0.2),
            ],
          },
          {
            title: '활동 2. 과학자의 태도 가려내기', tool: 'mindmap',
            teacher: '"결과가 마음에 안 들면 바꿔 적어도 될까요?" 정직하게 기록하는 것이 과학의 기본이라고 강조한다. 한 번에 포기하는 카드를 태도로 고르는 학생에게는 여러 번 해 보는 까닭을 묻는다.',
            task: '과학자에게 필요한 태도를 가려내요.',
            items: [
              MS('태도를 과학자다운 것과 아닌 것으로 나누어 보세요.', '과학자의 태도', ['과학자다워요', '아니에요'], ['결과를 정직하게 적기', '여러 번 해 보기', '결과를 바꿔 적기', '한 번 해 보고 포기'], { '과학자다워요': ['결과를 정직하게 적기', '여러 번 해 보기'], '아니에요': ['결과를 바꿔 적기', '한 번 해 보고 포기'] }, 0.25),
              MP('실험할 때 지켜야 할 것만 골라 담아 보세요.', '실험 약속', ['보안경 쓰기', '선생님 안내 따르기', '약품 맛보기', '마음대로 섞기'], ['보안경 쓰기', '선생님 안내 따르기'], 0.2),
              MP('과학의 날과 관련 있는 말을 골라 보세요.', '과학의 날', ['4월 21일', '4월은 과학의 달', '10월 9일', '나라를 세운 날'], ['4월 21일', '4월은 과학의 달'], 0.2),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 배운 탐구 차례로 우리 반이 궁금한 것을 하나 정해 볼까요?" 출구 1번에서 결론을 실험 앞에 둔 학생에게는 증거가 먼저라는 점을 다시 말한다.',
          exit: [
            XC('story', { title: '얼음 탐구', slots: ['1', '2', '3'], cards: [{ id: 'guess', text: '소금이 빨리 녹일 것', motif: 'sun' }, { id: 'test', text: '두 얼음을 견줘 봄', motif: 'snow' }, { id: 'end', text: '결과로 결론 내림', motif: 'leaf' }] }, '얼음 탐구 장면을 차례대로 놓아 보세요.', { order: ['guess', 'test', 'end'] }, 0.25),
            CH('실험 결과가 예상과 다를 때 알맞은 태도는 무엇인가요?', ['있는 그대로 기록한다', '예상에 맞게 고친다'], 0, '과학자는 결과를 정직하게 기록하고 다시 생각해요.'),
            MOOD,
          ],
        },
        wsTitle: '과학자처럼 탐구해요',
        ws: [
          { type: 'blank', prompt: '탐구 과정을 채우세요.', text: '궁금한 점 → ___ → 실험·기록 → 결론', answer: '예상하기' },
          { type: 'choice', prompt: '과학자다운 태도에 ○ 하세요.', options: ['정직하게 기록하기', '결과 바꿔 적기'], answer: '정직하게 기록하기' },
          { type: 'short', prompt: '내가 탐구해 보고 싶은 궁금한 점을 한 가지 써 보세요.' },
          { type: 'short', prompt: '그 궁금한 점의 결과를 예상해 써 보세요.' },
        ],
        notes: '자주 보이는 어려움: ① 예상이 틀리면 실패라고 여긴다 → 예상이 틀린 것도 알게 된 것이라고 말한다. ② 결과를 예상에 맞추어 적는다 → 정직한 기록이 과학의 기본임을 강조한다.',
      }),

      LESSON(3, {
        title: '기후 변화의 원인과 결과 잇고 지구의 날이 퍼진 차례 놓기',
        objective: '지구의 날에 기후 변화의 원인과 결과를 잇고, 지구의 날이 시작되어 세계로 퍼진 차례를 말할 수 있다.',
        draw: 'a paper earth with a thermometer, melting paper ice and a growing paper forest',
        banner: '원인과 결과로 보는 지구', extra: [{ motif: 'leaf', x: 150, y: 200, color: 'mint', s: 0.6 }],
        intro: {
          teacher: '"요즘 여름이 더 더워졌다는 말을 들어 본 적 있나요?" 대답을 듣고(기다릴 반응: "네", "에어컨을 많이 틀어요") 석탄·석유 같은 연료를 많이 쓰면 지구의 평균 기온이 오르는 기후 변화가 생긴다고 알린다. 시연 단추로 원인 카드와 결과 카드를 잇는다. "날씨와 기후는 같아요"라는 말이 나오면 "오늘 비가 오는 것은 날씨, 오랜 기간의 평균 모습은 기후예요"라고 말한다.',
          student: '더위나 추위 때문에 힘들었던 경험을 짝에게 말해 봐요.',
          demo: DM('mindmap', { mode: 'match', topic: '원인과 결과', slots: [{ id: 'f', label: '연료를 많이 씀' }], cards: ['지구 기온이 오름', '눈이 더 많이 옴'] }, { match: { f: '지구 기온이 오름' } }),
        },
        acts: [
          {
            title: '활동 1. 원인과 결과 잇기', tool: 'mindmap',
            teacher: '"이 일이 생기면 그다음에 무슨 일이 일어날까요?" 원인 쪽 글을 먼저 읽게 한다. 숲이 늘어나는 것을 기온이 오르는 원인으로 잇는 학생에게는 나무가 이산화탄소를 흡수한다는 점을 짚는다.',
            task: '기후 변화의 원인과 결과를 잇고 나누어요.',
            items: [
              MM('원인과 그 결과를 이어 보세요.', '그러면 어떻게 될까', [{ id: 'fuel', label: '석탄·석유를 많이 씀' }, { id: 'ice', label: '빙하가 녹음' }, { id: 'tree', label: '숲이 줄어듦' }], ['기온이 올라감', '바닷물 높이가 올라감', '흡수하는 탄소가 줄어듦', '눈이 많아짐'], { fuel: '기온이 올라감', ice: '바닷물 높이가 올라감', tree: '흡수하는 탄소가 줄어듦' }, 0.35),
              MS('행동을 기후 변화를 늦추는 일과 빠르게 하는 일로 나누어 보세요.', '기후 변화', ['늦춰요', '빠르게 해요'], ['나무 심기', '대중교통 타기', '가까운 길 자동차', '빈방 냉방 켜 두기'], { '늦춰요': ['나무 심기', '대중교통 타기'], '빠르게 해요': ['가까운 길 자동차', '빈방 냉방 켜 두기'] }, 0.25),
              MP('기후 변화로 생길 수 있는 일만 골라 담아 보세요.', '기후 변화의 결과', ['폭염이 잦아짐', '바닷물 높이 상승', '지구가 멈춤', '바다가 사라짐'], ['폭염이 잦아짐', '바닷물 높이 상승'], 0.3),
            ],
          },
          {
            title: '활동 2. 지구의 날이 퍼진 차례 놓기', tool: 'timeline',
            teacher: '"지구의 날은 처음부터 세계가 함께했을까요?" 1970년 미국에서 시작되어 세계 여러 나라로 퍼졌다고 알린다. 우리나라 법으로 정한 기념일은 아니지만 많은 학교와 기관이 함께한다고 덧붙인다.',
            task: '지구의 날과 관련된 일을 차례대로 놓아요.',
            items: [
              TO('지구의 날이 퍼진 차례를 놓아 보세요.', [{ id: 'us', text: '미국에서 시작', big: '1970' }, { id: 'world', text: '세계 여러 나라로', motif: 'mountain' }, { id: 'us2', text: '오늘 우리 학교 활동', motif: 'star' }], ['us', 'world', 'us2'], 0.25),
              CO('4월의 두 날을 날짜 차례로 놓아 보세요.', [{ id: 'earth', text: '지구의 날', big: '22일' }, { id: 'sci', text: '과학의 날', big: '21일' }], ['sci', 'earth'], 0.15),
              TO('우리 반 지구의 날 계획을 차례대로 놓아 보세요.', [{ id: 'find', text: '교실 낭비 찾기', motif: 'star' }, { id: 'plan', text: '실천 약속 정하기', motif: 'leaf' }, { id: 'do', text: '한 주 실천하기', motif: 'sun' }, { id: 'check', text: '함께 점검하기', motif: 'flower' }], ['find', 'plan', 'do', 'check'], 0.25),
            ],
          },
        ],
        wrap: {
          teacher: '"원인을 줄이면 결과도 줄어들까요?" 출구 1번에서 결과를 원인 칸에 잇는 학생에게는 \'그래서\'를 넣어 소리 내어 읽게 한다.',
          exit: [
            XC('mindmap', { mode: 'match', topic: '원인 찾기', slots: [{ id: 'r1', label: '기온이 올라감' }, { id: 'r2', label: '숲의 탄소 흡수 감소' }], cards: ['석유를 많이 태움', '나무를 많이 베어 냄', '비가 내림'] }, '결과에 알맞은 원인을 이어 보세요.', { match: { r1: '석유를 많이 태움', r2: '나무를 많이 베어 냄' } }, 0.3),
            CH('지구의 날은 언제인가요?', ['4월 22일', '6월 5일'], 0, '지구의 날은 4월 22일이에요. 6월 5일은 환경의 날이에요.'),
            MOOD,
          ],
        },
        wsTitle: '원인과 결과로 보는 지구',
        ws: [
          { type: 'table', prompt: '원인과 결과를 쓰세요.', columns: ['원인', '결과'], cells: [['석탄·석유를 많이 씀', ''], ['빙하가 녹음', ''], ['숲이 줄어듦', '']], answer: '기온이 올라감 / 바닷물 높이가 올라감 / 흡수하는 탄소가 줄어듦' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '지구의 날은 ___년 미국에서 시작되었다.', answer: '1970' },
          { type: 'choice', prompt: '기후 변화를 늦추는 행동에 ○ 하세요.', options: ['대중교통 타기', '빈방 냉방 켜 두기'], answer: '대중교통 타기' },
          { type: 'short', prompt: '우리 반이 지구의 날에 실천할 약속을 써 보세요.' },
        ],
        notes: '자주 보이는 어려움: ① 날씨와 기후를 헷갈린다 → 하루의 모습과 오랜 기간의 평균으로 나눈다. ② 기후 변화를 무서운 일로만 받아들인다 → 늦출 수 있는 행동에 집중한다. 지구의 날은 법정기념일이 아니다.',
      }),

      LESSON(4, {
        title: '5·18 기록이 남은 까닭 찾고 근거 없는 소문에 대처하는 길 고르기',
        objective: '5·18민주화운동의 기록이 남고 세계기록유산이 된 까닭을 말하고, 근거 없는 소문을 들었을 때 공식 자료로 확인하는 방법을 고를 수 있다.',
        draw: 'paper notebooks, photos and newspapers stacked in a memorial archive with soft light',
        banner: '기록으로 기억해요', extra: [{ motif: 'flower', x: 150, y: 210, color: 'peach', s: 0.6 }],
        intro: {
          teacher: '"오래전 일을 지금 우리가 어떻게 알 수 있을까요?" 대답을 듣고(기다릴 반응: "책이요", "사진이요") 5·18민주화운동 때 시민·기자들이 남긴 일기·사진·기사 같은 기록이 모여 2011년 유네스코 세계기록유산이 되었다고 알린다. 시연 단추로 \'사진\' 카드를 \'기록\' 칸에 넣는다.',
          student: '오늘 일을 나중에 기억하려면 무엇을 남기면 좋을지 짝에게 말해 봐요.',
          demo: DM('mindmap', { mode: 'sort', topic: '무엇일까', slots: ['기록', '기념 장소'], cards: ['그때 찍은 사진', '국립5·18민주묘지'] }, { sort: { '기록': ['그때 찍은 사진'], '기념 장소': ['국립5·18민주묘지'] } }),
        },
        acts: [
          {
            title: '활동 1. 기록과 기념 장소 나누기', tool: 'mindmap',
            teacher: '"기록은 왜 남겨야 할까요?" 기록은 일이 있었다는 증거가 되고, 다음 세대가 배울 수 있게 해 준다고 정리한다. 기념 장소를 기록으로 넣는 학생에게는 그곳은 기억하고 추모하는 곳이라고 구별해 준다.',
            task: '기록과 기념 장소를 나누고, 기록을 남긴 까닭을 골라요.',
            items: [
              MS('5·18과 관련된 것을 기록과 기념 장소로 나누어 보세요.', '무엇일까', ['기록', '기념 장소'], ['시민이 쓴 일기', '그때의 신문 기사', '국립5·18민주묘지', '5·18 기록관'], { '기록': ['시민이 쓴 일기', '그때의 신문 기사'], '기념 장소': ['국립5·18민주묘지', '5·18 기록관'] }, 0.3),
              MP('기록을 남기는 까닭만 골라 담아 보세요.', '기록하는 까닭', ['있었던 일의 증거', '다음 세대가 배움', '잊어버리려고', '꾸며 내려고'], ['있었던 일의 증거', '다음 세대가 배움'], 0.25),
              MP('5·18 기록물에 대한 사실을 골라 보세요.', '5·18 기록물', ['세계기록유산 등재', '2011년 등재', '1950년 기록', '한글 창제 기록'], ['세계기록유산 등재', '2011년 등재'], 0.3),
            ],
          },
          {
            title: '활동 2. 근거 없는 소문에 대처하는 길 고르기', tool: 'emotion',
            teacher: '"이 말이 사실인지 어떻게 알 수 있을까요?" 결과를 함께 읽는다. 공식 기관(국가보훈부, 5·18기념재단, 국립5·18민주묘지 등)의 자료로 확인하는 습관을 강조한다. 소문을 퍼뜨린 친구를 비난하는 보기를 고르는 학생에게는 함께 확인해 보자고 말하는 길이 낫다고 말한다.',
            task: '소문을 들었을 때 어떻게 할지 고르고 결과를 봐요.',
            items: [
              EB('영상에서 5·18에 대한 이상한 말을 들었어요. 어떻게 할까요?', '출처를 모르는 짧은 영상에서 5·18에 대해 처음 듣는 말이 나와요.', [
                { id: 'check', text: '공식 기관 자료로 확인해요', result: '사실과 다른 말이라는 것을 알게 돼요.', mood: '편안함' },
                { id: 'share', text: '재밌어서 바로 퍼뜨려요', result: '틀린 말이 여러 사람에게 퍼져요.', mood: '걱정', why: '확인 없이 퍼뜨리면 잘못된 말을 돕게 돼요.' }], 'check', 0.2),
              EB('친구가 들은 소문을 사실처럼 말해요. 어떻게 할까요?', '친구가 "이건 다 지어낸 얘기래"라고 말해요.', [
                { id: 'together', text: '"같이 자료를 찾아보자" 말해요', result: '함께 기록관 누리집에서 사실을 확인해요.', mood: '뿌듯함' },
                { id: 'mock', text: '"너 바보야?" 하고 놀려요', result: '친구가 화가 나서 대화가 끝나요.', mood: '화남', why: '놀리면 함께 사실을 확인할 수 없어요.' }], 'together', 0.25),
              EB('5·18 조사 숙제를 해요. 어떤 자료를 쓸까요?', '5·18에 대해 조사해 발표하려고 해요.', [
                { id: 'official', text: '기념재단·기록관 자료를 써요', result: '믿을 수 있는 근거로 발표해요.', mood: '뿌듯함' },
                { id: 'anon', text: '익명 댓글을 옮겨 적어요', result: '근거를 물으면 답하지 못해요.', mood: '불안', why: '출처가 없는 글은 근거가 되지 못해요.' }], 'official', 0.2),
            ],
          },
        ],
        wrap: {
          teacher: '"5·18을 바르게 기억하려면 무엇이 필요할까요?" 출구 1번에서 익명 게시글을 담은 학생에게는 누가 썼는지 알 수 없는 글은 확인할 수 없다는 점을 짚는다.',
          exit: [
            XC('mindmap', { mode: 'pick', topic: '믿을 만한 자료', basket: '믿을 만한 자료', cards: ['5·18기념재단 자료', '5·18 기록관 누리집', '출처 없는 영상', '익명 게시글'] }, '5·18을 조사할 때 믿을 만한 자료만 골라 담아 보세요.', { pick: ['5·18기념재단 자료', '5·18 기록관 누리집'] }, 0.2),
            CH('5·18민주화운동 기록물은 무엇으로 지정되었나요?', ['유네스코 세계기록유산', '국경일'], 0, '5·18 기록물은 2011년 유네스코 세계기록유산에 올랐어요.'),
            MOOD,
          ],
        },
        wsTitle: '기록으로 기억해요',
        ws: [
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '5·18 기록물은 ___년 유네스코 세계기록유산이 되었다.', answer: '2011' },
          { type: 'choice', prompt: '믿을 만한 자료에 ○ 하세요.', options: ['기념재단 자료', '출처 없는 영상'], answer: '기념재단 자료' },
          { type: 'short', prompt: '기록을 남기는 까닭을 한 가지 써 보세요.' },
          { type: 'short', prompt: '소문을 들었을 때 내가 할 일을 순서대로 써 보세요.' },
        ],
        notes: '자주 보이는 어려움: ① 영상·댓글을 그대로 믿는다 → 공식 기관 자료로 확인하는 차례를 익힌다. ② 소문을 말한 친구를 공격한다 → 함께 확인하자고 말하는 길을 고르게 한다. 현재 정당·정치인 이야기는 다루지 않는다.',
      }),

      LESSON(5, {
        title: '피란 가족 이야기 차례 놓고 전쟁의 아픔과 기억하는 노력 나누기',
        objective: '6·25전쟁 때 피란을 떠난 가족의 이야기를 차례대로 말하고, 전쟁이 남긴 아픔과 그것을 기억하고 평화를 지키려는 노력을 나눌 수 있다.',
        draw: 'a paper family walking south with bundles on a winding road, paper mountains and a distant harbor',
        banner: '피란길 이야기', extra: [{ motif: 'flower', x: 150, y: 210, color: 'cream', s: 0.6 }],
        intro: {
          teacher: '"전쟁이 나면 사람들은 어떻게 될까요?" 대답을 듣고(기다릴 반응: "피해요", "다쳐요") 6·25전쟁 때 많은 사람이 집을 떠나 피란을 가야 했고, 가족과 헤어진 이산가족도 생겼다고 알린다. 오늘 이야기의 가족은 그때 모습을 떠올리기 위해 지은 가상의 가족이라고 밝힌다. 시연 단추로 두 장면을 놓는다.',
          student: '가족과 잠깐 떨어져 있었을 때 마음을 짝에게 말해 봐요.',
          demo: DM('story', { slots: ['처음', '다음'], cards: [{ id: 'news', text: '전쟁 소식을 들어요', motif: 'cloud' }, { id: 'pack', text: '짐을 싸요', motif: 'house' }] }, { order: ['news', 'pack'] }),
        },
        acts: [
          {
            title: '활동 1. 피란 가족 이야기 차례 놓기', tool: 'story',
            teacher: '"가족은 어디로 피란을 갔을까요?" 3학년 때 찾은 부산을 떠올리게 한다. 가족을 다시 만나는 장면을 피란 앞에 두는 학생에게는 무엇 때문에 헤어졌는지 묻는다.',
            task: '가상의 피란 가족 이야기를 차례대로 놓아요.',
            items: [
              SO('가상의 피란 가족 이야기를 차례대로 놓아 보세요.', '봄이네 피란길', ['1', '2', '3', '4'], [{ id: 'news', text: '전쟁 소식에 놀라요', motif: 'cloud' }, { id: 'walk', text: '남쪽으로 걸어가요', motif: 'mountain' }, { id: 'busan', text: '부산 피란촌에 살아요', motif: 'house' }, { id: 'find', text: '헤어진 삼촌을 찾아요', motif: 'star' }], ['news', 'walk', 'busan', 'find'], 0.3),
              SO('피란촌 학교 이야기를 차례대로 놓아 보세요.', '천막 학교', ['처음', '가운데', '끝'], [{ id: 'none', text: '학교 건물이 없어요', motif: 'cloud' }, { id: 'tent', text: '천막에서 공부해요', motif: 'house' }, { id: 'hope', text: '꿈을 놓지 않아요', motif: 'sun' }], ['none', 'tent', 'hope'], 0.25),
              SF('헤어진 가족을 그리는 말을 채워 보세요.', ['다시 만나고', '잊고', '모른 척하고'], [{ id: 'b1', who: '봄이', motif: 'moon', label: '삼촌을 꼭 ___ 싶어요.' }], { b1: '다시 만나고' }, 0.15),
            ],
          },
          {
            title: '활동 2. 전쟁이 남긴 것과 기억하는 노력 나누기', tool: 'mindmap',
            teacher: '"전쟁이 끝난 뒤에도 남은 아픔은 무엇일까요?" 현충일 추모, 유엔 참전국을 기억하는 일, 이산가족 찾기처럼 기억하고 평화를 지키려는 노력을 함께 나눈다.',
            task: '전쟁이 남긴 아픔과 기억하는 노력을 나누고 골라요.',
            items: [
              MS('카드를 전쟁이 남긴 아픔과 기억하는 노력으로 나누어 보세요.', '전쟁 뒤', ['전쟁이 남긴 아픔', '기억하는 노력'], ['이산가족', '부서진 집과 학교', '현충일 추모', '이산가족 찾기'], { '전쟁이 남긴 아픔': ['이산가족', '부서진 집과 학교'], '기억하는 노력': ['현충일 추모', '이산가족 찾기'] }, 0.3),
              MP('현충일에 기억하는 분들을 골라 담아 보세요.', '현충일', ['나라를 지키다 희생한 분', '독립운동가', '운동선수', '만화 주인공'], ['나라를 지키다 희생한 분', '독립운동가'], 0.3,
                { conclude: '현충일에는 순국선열(독립운동가)과 호국영령(나라를 지키다 희생한 분)을 함께 기려요.' }),
              MP('평화를 지키는 생활 속 행동을 골라 보세요.', '평화 지키기', ['다툼을 말로 풀기', '다른 생각 존중하기', '힘으로 이기기', '편 갈라 따돌리기'], ['다툼을 말로 풀기', '다른 생각 존중하기'], 0.2),
            ],
          },
        ],
        wrap: {
          teacher: '"봄이네 이야기를 듣고 현충일의 뜻을 어떻게 말할 수 있을까요?" 출구 1번에서 \'편 가르기\'를 평화 노력으로 고르는 학생에게는 다툼을 키우는 행동이라고 짚는다.',
          exit: [
            XC('mindmap', { mode: 'sort', topic: '이것은 무엇일까', slots: ['전쟁이 남긴 아픔', '기억하는 노력'], cards: ['피란민의 고생', '전쟁기념관 방문', '가족과 헤어짐', '참전 용사께 감사 편지'] }, '카드를 전쟁이 남긴 아픔과 기억하는 노력으로 다시 나누어 보세요.', { sort: { '전쟁이 남긴 아픔': ['피란민의 고생', '가족과 헤어짐'], '기억하는 노력': ['전쟁기념관 방문', '참전 용사께 감사 편지'] } }, 0.25),
            CH('6·25전쟁으로 가족과 헤어져 소식을 모르게 된 사람들을 무엇이라 하나요?', ['이산가족', '독립운동가'], 0, '전쟁과 분단으로 헤어진 가족을 이산가족이라고 해요.'),
            MOOD,
          ],
        },
        wsTitle: '피란길 이야기',
        ws: [
          { type: 'choice', prompt: '전쟁이 남긴 아픔에 ○ 하세요.', options: ['이산가족', '현충일 추모'], answer: '이산가족' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '6·25전쟁은 1950년 6월 25일에 시작되어 ___년 7월 정전 협정을 맺었다.', answer: '1953' },
          { type: 'short', prompt: '봄이에게 위로의 말을 한 문장으로 써 보세요.' },
          { type: 'short', prompt: '평화를 지키기 위해 우리 반에서 할 수 있는 일을 써 보세요.' },
        ],
        notes: '자주 보이는 어려움: ① 전쟁을 영화처럼 흥미 위주로 본다 → 피란민·이산가족의 삶에 초점을 둔다. ② 가상 인물을 실제 인물로 여긴다 → 이야기 속 가족은 지어낸 인물이라고 밝힌다. 북한 주민 전체를 미워하는 말은 전쟁과 사람을 나누어 바로잡는다.',
      }),

      LESSON(6, {
        title: '선거의 네 가지 원칙 잇고 1987년 6월 이후 바뀐 차례 놓기',
        objective: '6·10민주항쟁 기념일에 선거의 네 가지 원칙을 알고, 1987년 6월 이후 대통령 직접 선거로 바뀐 차례를 말할 수 있다.',
        draw: 'four paper ballot cards with simple icons arranged around a ballot box, paper confetti',
        banner: '선거의 원칙', extra: [{ motif: 'star', x: 150, y: 100, color: 'sky', s: 0.6 }],
        intro: {
          teacher: '"3학년 때 1987년 6월 시민들이 바란 것이 무엇이었는지 기억하나요?" 대답을 듣고(기다릴 반응: "대통령 직접 선거요") 오늘날 선거는 보통·평등·직접·비밀 네 가지 원칙을 지킨다고 알린다. 시연 단추로 \'비밀 선거\'를 \'누구를 뽑았는지 몰라요\'에 잇는다.',
          student: '반장 선거에서 지켜야 할 약속을 하나 짝에게 말해 봐요.',
          demo: DM('mindmap', { mode: 'match', topic: '선거의 원칙', slots: [{ id: 's', label: '비밀 선거' }], cards: ['누구를 뽑았는지 몰라요', '한 사람이 두 표'] }, { match: { s: '누구를 뽑았는지 몰라요' } }),
        },
        acts: [
          {
            title: '활동 1. 선거의 네 가지 원칙 잇기', tool: 'mindmap',
            teacher: '"평등 선거는 무엇이 같다는 뜻일까요?" 원칙마다 반 선거에 빗대어 말하게 한다. 직접 선거와 보통 선거를 헷갈리는 학생에게는 \'누가 투표하나\'와 \'어떻게 투표하나\'로 나누어 묻는다.',
            task: '선거의 원칙과 뜻을 잇고, 원칙을 어긴 경우를 골라요.',
            items: [
              MM('선거의 원칙과 뜻을 이어 보세요.', '원칙의 뜻', [{ id: 'bo', label: '보통 선거' }, { id: 'pyeong', label: '평등 선거' }, { id: 'jik', label: '직접 선거' }, { id: 'bi', label: '비밀 선거' }], ['나이 되면 누구나 투표', '한 사람 한 표', '내가 직접 투표', '누구 뽑았는지 비밀'], { bo: '나이 되면 누구나 투표', pyeong: '한 사람 한 표', jik: '내가 직접 투표', bi: '누구 뽑았는지 비밀' }, 0.35),
              MS('반 선거 장면을 원칙을 지킨 것과 어긴 것으로 나누어 보세요.', '반 선거 장면', ['지켰어요', '어겼어요'], ['칸막이 안에서 쓰기', '모두 한 장씩 받기', '친구 표 대신 넣기', '두 장 받아 넣기'], { '지켰어요': ['칸막이 안에서 쓰기', '모두 한 장씩 받기'], '어겼어요': ['친구 표 대신 넣기', '두 장 받아 넣기'] }, 0.3),
              MP('비밀 선거를 어긴 장면만 골라 담아 보세요.', '비밀 선거', ['표를 보여 달라고 함', '쓰는 걸 엿봄', '혼자 칸막이에서 씀', '접어서 넣음'], ['표를 보여 달라고 함', '쓰는 걸 엿봄'], 0.3),
            ],
          },
          {
            title: '활동 2. 1987년 6월 이후 바뀐 차례 놓기', tool: 'timeline',
            teacher: '"헌법이 바뀐 다음에는 무엇을 했을까요?" 6월 시민들의 요구가 받아들여진 뒤 헌법을 고치고 그해 12월 국민이 직접 대통령을 뽑았다는 흐름을 짚는다.',
            task: '1987년 6월 이후의 일을 차례대로 놓아요.',
            items: [
              TO('1987년의 일을 차례대로 놓아 보세요.', [{ id: 'rally', text: '6월 10일 국민 대회', motif: 'sun' }, { id: 'accept', text: '직선제 수용 발표', motif: 'star' }, { id: 'law', text: '헌법 개정', motif: 'leaf' }, { id: 'vote', text: '대통령 직접 선거', motif: 'flower' }], ['rally', 'accept', 'law', 'vote'], 0.3),
              TS('대통령을 뽑는 방법을 1987년 앞과 뒤로 나누어 보세요.', ['1987년 개헌 전', '1987년 개헌 뒤'], ['대표들이 대신 뽑음', '국민이 직접 뽑음'], { '1987년 개헌 전': ['대표들이 대신 뽑음'], '1987년 개헌 뒤': ['국민이 직접 뽑음'] }, 0.3),
              CO('6월의 기념일을 날짜 차례로 놓아 보세요.', [{ id: 'd10', text: '6·10민주항쟁 기념일', big: '10일' }, { id: 'd6', text: '현충일', big: '6일' }, { id: 'd25', text: '6·25전쟁일', big: '25일' }], ['d6', 'd10', 'd25'], 0.2),
            ],
          },
        ],
        wrap: {
          teacher: '"네 가지 원칙 가운데 하나라도 빠지면 어떻게 될까요?" 출구 1번에서 평등 선거를 \'누구나 투표\'에 잇는 학생에게는 \'몇 표씩인가\'를 다시 묻는다.',
          exit: [
            XC('mindmap', { mode: 'match', topic: '이 장면은 어느 원칙', slots: [{ id: 'a', label: '모두 한 표씩 받아요' }, { id: 'b', label: '칸막이 안에서 써요' }], cards: ['평등 선거', '비밀 선거', '간접 선거'] }, '장면과 지킨 원칙을 이어 보세요.', { match: { a: '평등 선거', b: '비밀 선거' } }, 0.3),
            CH('1987년 6월 민주항쟁 뒤 바뀐 것은 무엇인가요?', ['대통령 직접 선거', '국경일 날짜'], 0, '6월 민주항쟁 뒤 헌법이 바뀌어 국민이 대통령을 직접 뽑게 되었어요.'),
            MOOD,
          ],
        },
        wsTitle: '선거의 원칙',
        ws: [
          { type: 'table', prompt: '선거의 원칙과 뜻을 쓰세요.', columns: ['원칙', '뜻'], cells: [['보통 선거', ''], ['평등 선거', ''], ['직접 선거', ''], ['비밀 선거', '']], answer: '일정 나이가 되면 누구나 / 한 사람 한 표 / 본인이 직접 / 누구를 뽑았는지 비밀' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '1987년 6월 민주항쟁 뒤 대통령을 국민이 ___ 뽑게 되었다.', answer: '직접' },
          { type: 'choice', prompt: '비밀 선거를 지킨 장면에 ○ 하세요.', options: ['칸막이 안에서 쓰기', '표 보여 주기'], answer: '칸막이 안에서 쓰기' },
          { type: 'short', prompt: '우리 반 선거에서 꼭 지킬 원칙과 까닭을 써 보세요.' },
        ],
        notes: '자주 보이는 어려움: ① 보통 선거와 평등 선거를 헷갈린다 → \'누가 투표하나\'(보통)와 \'몇 표인가\'(평등)로 나눈다. ② 6월 민주항쟁을 하루의 일로 여긴다 → 6월 한 달의 흐름과 그 뒤 개헌까지 이어서 본다. 현재 정당·정치인 이야기는 다루지 않는다.',
      }),

      LESSON(7, {
        title: '나라 안팎의 독립운동 나누고 광복절 노래 가사 채우기',
        objective: '광복절에 나라 안과 나라 밖에서 펼친 독립운동을 나누고, 광복절 노래에 담긴 기쁨과 다짐을 말할 수 있다.',
        draw: 'a paper map split between a homeland village and distant cities with tiny paper flags rising toward a sun',
        banner: '나라 안팎의 독립운동', extra: [{ motif: 'sun', x: 150, y: 96, color: 'buttercup', s: 0.6 }],
        intro: {
          teacher: '"독립운동은 우리나라 안에서만 했을까요?" 대답을 듣고(기다릴 반응: "아니요, 다른 나라에서도요") 나라 안에서는 만세 운동·학생 운동·우리말 지키기가, 나라 밖에서는 임시 정부·한국광복군·의거가 이어졌다고 알린다. 시연 단추로 두 카드를 나눈다.',
          student: '광복절에 우리 집에서 하는 일을 짝에게 말해 봐요.',
          demo: DM('mindmap', { mode: 'sort', topic: '어디에서', slots: ['나라 안', '나라 밖'], cards: ['3·1운동', '한국광복군'] }, { sort: { '나라 안': ['3·1운동'], '나라 밖': ['한국광복군'] } }),
        },
        acts: [
          {
            title: '활동 1. 나라 안팎의 독립운동 나누기', tool: 'mindmap',
            teacher: '"임시 정부는 어디에 세워졌을까요?" 중국 상하이에 처음 세워졌다는 점을 짚는다. 조선어학회의 우리말 사전 만들기도 나라를 지키려는 독립운동의 하나였다고 알려 준다.',
            task: '독립운동을 펼친 곳에 따라 나누고 골라요.',
            items: [
              MS('독립운동을 나라 안과 나라 밖으로 나누어 보세요.', '어디에서', ['나라 안', '나라 밖'], ['아우내 장터 만세', '광주 학생 운동', '상하이 임시 정부', '하얼빈 의거'], { '나라 안': ['아우내 장터 만세', '광주 학생 운동'], '나라 밖': ['상하이 임시 정부', '하얼빈 의거'] }, 0.3),
              MP('우리말과 글을 지키려 한 활동을 골라 담아 보세요.', '우리말 지키기', ['우리말 사전 만들기', '한글 가르치기', '측우기 만들기', '고인돌 세우기'], ['우리말 사전 만들기', '한글 가르치기'], 0.3),
              MM('독립운동 단체·무리와 한 일을 이어 보세요.', '한 일', [{ id: 'gov', label: '대한민국 임시 정부' }, { id: 'army', label: '한국광복군' }], ['독립운동을 이끎', '군대를 만들어 싸움', '훈민정음 반포'], { gov: '독립운동을 이끎', army: '군대를 만들어 싸움' }, 0.3),
            ],
          },
          {
            title: '활동 2. 광복절 노래 가사 채우기', tool: 'story',
            teacher: '"광복을 맞은 사람들은 어떤 마음이었을까요?" 광복절 노래 첫 소절을 함께 읽는다. \'흙 다시 만져 보자\'라는 말에 다시 찾은 땅을 반가워하는 마음이 담겼다고 짚는다.',
            task: '광복절 노래 가사와 광복을 맞은 사람의 말을 채워요.',
            items: [
              SF('광복절 노래 첫 소절을 채워 보세요.', ['흙', '돌', '꽃'], [{ id: 'b1', who: '노래', motif: 'leaf', label: '___ 다시 만져 보자 바닷물도 춤을 춘다.' }], { b1: '흙' }, 0.25),
              SF('광복절 노래 끝 소절을 채워 보세요.', ['지키세', '잊으세', '버리세'], [{ id: 'b1', who: '노래', motif: 'sun', label: '길이길이 ___.' }], { b1: '지키세' }, 0.2),
              SF('광복을 맞은 독립운동가의 말을 채워 보세요.', ['함께 지켜 갑시다', '이제 그만둡시다', '잊어버립시다'], [{ id: 'b1', who: '독립운동가', motif: 'star', label: '되찾은 나라를 ___.' }], { b1: '함께 지켜 갑시다' }, 0.2),
            ],
          },
        ],
        wrap: {
          teacher: '"광복절 노래의 \'길이길이 지키세\'는 누구에게 하는 다짐일까요?" 출구 1번에서 임시 정부를 나라 안 칸에 넣은 학생에게는 상하이가 중국의 도시라고 다시 짚는다.',
          exit: [
            XC('mindmap', { mode: 'sort', topic: '어디에서 했을까', slots: ['나라 안', '나라 밖'], cards: ['탑골공원 만세', '조선어학회 활동', '한국광복군 창설', '훙커우 공원 의거'] }, '독립운동을 나라 안과 나라 밖으로 다시 나누어 보세요.', { sort: { '나라 안': ['탑골공원 만세', '조선어학회 활동'], '나라 밖': ['한국광복군 창설', '훙커우 공원 의거'] } }, 0.3),
            CH('대한민국 임시 정부가 처음 세워진 곳은 어디인가요?', ['중국 상하이', '서울'], 0, '대한민국 임시 정부는 1919년 중국 상하이에 세워졌어요.'),
            MOOD,
          ],
        },
        wsTitle: '나라 안팎의 독립운동',
        ws: [
          { type: 'table', prompt: '독립운동을 나라 안과 밖으로 나누어 쓰세요.', columns: ['나라 안', '나라 밖'], cells: [['', ''], ['', '']], answer: '나라 안: 3·1운동, 학생독립운동, 우리말 사전 만들기 / 나라 밖: 임시 정부, 한국광복군, 하얼빈 의거' },
          { type: 'blank', prompt: '광복절 노래를 채우세요.', text: '흙 다시 만져 보자 ___도 춤을 춘다.', answer: '바닷물' },
          { type: 'choice', prompt: '군대를 만들어 독립을 위해 싸운 무리에 ○ 하세요.', options: ['한국광복군', '조선어학회'], answer: '한국광복군' },
          { type: 'short', prompt: '광복절에 독립운동가께 드리고 싶은 말을 써 보세요.' },
        ],
        notes: '자주 보이는 어려움: ① 독립운동을 싸움으로만 여긴다 → 우리말 지키기·교육·외교도 독립운동이었다고 넓혀 준다. ② 임시 정부가 서울에 있었다고 여긴다 → 상하이에서 시작해 나라 밖에서 활동했다고 짚는다.',
      }),

      LESSON(8, {
        title: '단군 이야기의 낱말 뜻 잇고 고조선의 유물 나누기',
        objective: '개천절에 단군 이야기에 나오는 낱말의 뜻을 알고, 고조선 때의 유물을 다른 시대의 것과 구별할 수 있다.',
        draw: 'paper dolmen stones and a bronze dagger shape in front of misty paper mountains',
        banner: '고조선을 찾아서', extra: [{ motif: 'mountain', x: 150, y: 196, color: 'mint', s: 0.6 }],
        intro: {
          teacher: '"단군 이야기에서 환웅은 누구와 함께 내려왔을까요?" 대답을 듣고(기다릴 반응: "모르겠어요", "신하들이요") 바람·비·구름을 다스리는 풍백·우사·운사와 함께 내려왔다고 전해진다고 알린다. 시연 단추로 \'풍백\'을 \'바람\'에 잇는다. 개천절(10월 3일)은 고조선을 세운 것을 기념하는 국경일이라고 덧붙인다.',
          student: '단군 이야기에서 기억나는 낱말 하나를 짝에게 말해 봐요.',
          demo: DM('mindmap', { mode: 'match', topic: '낱말 뜻', slots: [{ id: 'p', label: '풍백' }], cards: ['바람', '비'] }, { match: { p: '바람' } }),
        },
        acts: [
          {
            title: '활동 1. 단군 이야기 낱말 뜻 잇기', tool: 'mindmap',
            teacher: '"우사의 \'우\'는 비 우(雨) 자예요. 무엇을 다스렸을까요?" 낱말 뜻을 하나씩 확인한다. 웅녀를 \'호랑이\'에 잇는 학생에게는 끝까지 참은 동물이 누구였는지 묻는다.',
            task: '단군 이야기 속 낱말과 뜻을 이어요.',
            items: [
              MM('단군 이야기 속 낱말과 뜻을 이어 보세요.', '낱말 뜻', [{ id: 'pung', label: '풍백' }, { id: 'u', label: '우사' }, { id: 'un', label: '운사' }], ['바람', '비', '구름', '눈'], { pung: '바람', u: '비', un: '구름' }, 0.3),
              MM('단군 이야기 속 말과 뜻을 이어 보세요. 맞지 않는 카드는 남겨요.', '말의 뜻', [{ id: 'hong', label: '홍익인간' }, { id: 'ungnyeo', label: '웅녀' }, { id: 'asadal', label: '아사달' }], ['널리 사람을 이롭게', '사람이 된 곰', '고조선의 도읍', '하늘의 궁궐'], { hong: '널리 사람을 이롭게', ungnyeo: '사람이 된 곰', asadal: '고조선의 도읍' }, 0.35),
              MP('단군 이야기가 실려 전해지는 옛 책을 골라 담아 보세요.', '옛 책', ['삼국유사', '제왕운기', '훈민정음 해례본', '동의보감'], ['삼국유사', '제왕운기'], 0.4),
            ],
          },
          {
            title: '활동 2. 고조선의 유물 나누기', tool: 'timeline',
            teacher: '"고인돌은 무엇에 쓰였을까요?" 고인돌은 힘 있는 사람의 무덤이고, 비파형 동검은 청동으로 만든 칼이라고 알려 준다. 이 유물들이 나온 곳을 보면 고조선의 문화가 퍼진 범위를 짐작할 수 있다고 덧붙인다.',
            task: '유물을 고조선과 조선으로 나누고, 나라의 차례를 놓아요.',
            items: [
              TS('유물을 만든 때에 따라 나누어 보세요.', ['고조선', '조선'], ['고인돌', '비파형 동검', '측우기', '앙부일구'], { '고조선': ['고인돌', '비파형 동검'], '조선': ['측우기', '앙부일구'] }, 0.3),
              TO('나라와 유물을 옛날부터 차례대로 놓아 보세요.', [{ id: 'dol', text: '고인돌(고조선)', motif: 'mountain' }, { id: 'cheom', text: '첨성대(신라)', motif: 'star' }, { id: 'rain', text: '측우기(조선)', motif: 'cloud' }], ['dol', 'cheom', 'rain'], 0.3),
              TM('유물과 쓰임을 이어 보세요. 맞지 않는 카드는 남겨요.', [{ id: 'dol', label: '고인돌' }, { id: 'sword', label: '비파형 동검' }], ['힘 있는 사람의 무덤', '청동으로 만든 칼', '비의 양 재기'], { dol: '힘 있는 사람의 무덤', sword: '청동으로 만든 칼' }, 0.35),
            ],
          },
        ],
        wrap: {
          teacher: '"고인돌이 많이 남은 것을 보면 고조선 사람들에 대해 무엇을 짐작할 수 있을까요?" 출구 1번에서 운사를 \'비\'에 잇는 학생에게는 \'운\'은 구름 운(雲)이라고 짚는다.',
          exit: [
            XC('mindmap', { mode: 'match', topic: '무엇을 다스렸을까', slots: [{ id: 'cloud', label: '구름' }, { id: 'rain', label: '비' }], cards: ['운사', '우사', '단군왕검'] }, '다스린 것에 알맞은 이름을 이어 보세요.', { match: { cloud: '운사', rain: '우사' } }, 0.3),
            CH('고조선 때의 유물은 무엇인가요?', ['고인돌', '측우기'], 0, '고인돌과 비파형 동검은 고조선 때의 대표 유물이에요.'),
            MOOD,
          ],
        },
        wsTitle: '고조선을 찾아서',
        ws: [
          { type: 'table', prompt: '낱말과 뜻을 쓰세요.', columns: ['낱말', '뜻'], cells: [['풍백', ''], ['우사', ''], ['운사', ''], ['홍익인간', '']], answer: '바람 / 비 / 구름 / 널리 사람을 이롭게 함' },
          { type: 'choice', prompt: '고조선의 유물에 ○ 하세요.', options: ['비파형 동검', '앙부일구'], answer: '비파형 동검' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '개천절은 ___월 3일, 고조선을 세운 것을 기념하는 국경일이다.', answer: '10' },
          { type: 'short', prompt: '환웅이 바람·비·구름을 다스리는 신하와 함께 왔다는 이야기에서 짐작할 수 있는 것을 써 보세요.' },
        ],
        notes: '자주 보이는 어려움: ① 풍백·우사·운사를 사람 이름으로만 외운다 → 한자 뜻(바람·비·구름)으로 풀어 준다. ② 고인돌과 조선 유물을 섞는다 → 시간 띠의 앞과 뒤로 나눈다. 단군 이야기는 『삼국유사』 등에 실려 전해 오는 건국 이야기임을 밝힌다.',
      }),

      LESSON(9, {
        title: '한글이 걸어온 길을 시간 띠에 놓고 다듬은 우리말 잇기',
        objective: '한글날에 훈민정음 창제부터 세계기록유산 등재까지 한글이 걸어온 길을 차례로 놓고, 외래어를 다듬은 우리말로 바꿀 수 있다.',
        draw: 'a paper book of Hunminjeongeum open on a desk with paper letters flying toward a modern screen',
        banner: '한글이 걸어온 길', extra: [{ motif: 'leaf', x: 150, y: 206, color: 'buttercup', s: 0.6 }],
        intro: {
          teacher: '"한글날은 처음부터 \'한글날\'이라는 이름이었을까요?" 대답을 듣고(기다릴 반응: "네", "몰라요") 1926년 처음 \'가갸날\'이라는 이름으로 기념하기 시작했고 뒤에 한글날로 이름이 바뀌었다고 알린다. 시연 단추로 창제와 반포 카드를 놓는다.',
          student: '외국말인데 우리가 자주 쓰는 낱말을 하나 짝에게 말해 봐요.',
          demo: DM('timeline', { cards: [{ id: 'make', text: '훈민정음 창제', big: '1443' }, { id: 'pub', text: '훈민정음 반포', big: '1446' }], axis: ['옛날', '오늘날'] }, { order: ['make', 'pub'] }),
        },
        acts: [
          {
            title: '활동 1. 한글이 걸어온 길 놓기', tool: 'timeline',
            teacher: '"훈민정음 해례본이 세계기록유산이 된 것은 언제일까요?" 연도의 수를 견주며 놓게 한다. 가갸날을 창제 앞에 두는 학생에게는 한글이 있어야 한글을 기념할 수 있다는 점을 짚는다.',
            task: '한글과 관련된 일을 차례대로 놓고 연도와 이어요.',
            items: [
              TO('한글이 걸어온 길을 차례대로 놓아 보세요.', [{ id: 'make', text: '훈민정음 창제', big: '1443' }, { id: 'pub', text: '훈민정음 반포', big: '1446' }, { id: 'gagya', text: '가갸날 기념 시작', big: '1926' }, { id: 'unesco', text: '해례본 세계기록유산', big: '1997' }], ['make', 'pub', 'gagya', 'unesco'], 0.3),
              TM('연도와 그해의 일을 이어 보세요. 맞지 않는 카드는 남겨요.', [{ id: 'y1926', label: '1926년' }, { id: 'y1997', label: '1997년' }], ['가갸날 기념 시작', '해례본 세계기록유산', '측우기 제작'], { y1926: '가갸날 기념 시작', y1997: '해례본 세계기록유산' }, 0.3),
              TS('일어난 때를 조선과 오늘날 가까운 때로 나누어 보세요.', ['조선 세종 때', '1900년대 이후'], ['훈민정음 창제', '훈민정음 반포', '가갸날', '세계기록유산 등재'], { '조선 세종 때': ['훈민정음 창제', '훈민정음 반포'], '1900년대 이후': ['가갸날', '세계기록유산 등재'] }, 0.3),
            ],
          },
          {
            title: '활동 2. 다듬은 우리말 잇기', tool: 'mindmap',
            teacher: '"홈페이지를 우리말로 무엇이라고 할까요?" 국립국어원이 외래어를 쉬운 우리말로 다듬어 알리고 있다고 소개한다. 다듬은 말이 어색하다는 학생에게는 "자주 쓰면 익숙해져요. 누구나 알아듣기 쉬운 것이 장점이에요"라고 말한다.',
            task: '외래어와 다듬은 우리말을 잇고 골라요.',
            items: [
              MM('외래어와 다듬은 우리말을 이어 보세요.', '다듬은 말', [{ id: 'home', label: '홈페이지' }, { id: 'net', label: '네티즌' }, { id: 'reply', label: '리플' }], ['누리집', '누리꾼', '댓글', '손전화'], { home: '누리집', net: '누리꾼', reply: '댓글' }, 0.3),
              MP('우리말로만 된 낱말을 골라 담아 보세요.', '우리말', ['누리집', '댓글', '홈페이지', '리플'], ['누리집', '댓글'], 0.2),
              MS('낱말을 외래어와 다듬은 우리말로 나누어 보세요.', '어떤 말일까', ['외래어', '다듬은 우리말'], ['네티즌', '홈페이지', '누리꾼', '누리집'], { '외래어': ['네티즌', '홈페이지'], '다듬은 우리말': ['누리꾼', '누리집'] }, 0.25),
            ],
          },
        ],
        wrap: {
          teacher: '"한글날에 우리 반이 함께 바꾸어 쓸 우리말 하나를 정해 볼까요?" 출구 1번에서 반포를 창제 앞에 둔 학생에게는 \'만든 뒤에 알린다\'는 차례를 다시 말한다.',
          exit: [
            XC('timeline', { cards: [{ id: 'unesco', text: '세계기록유산 등재' }, { id: 'pub', text: '훈민정음 반포' }, { id: 'gagya', text: '가갸날 시작' }], axis: ['옛날', '오늘날'] }, '세 가지 일을 일어난 차례대로 놓아 보세요.', { order: ['pub', 'gagya', 'unesco'] }, 0.25),
            CH('"리플"을 다듬은 우리말은 무엇인가요?', ['댓글', '누리집'], 0, '리플은 댓글, 홈페이지는 누리집으로 다듬었어요.'),
            MOOD,
          ],
        },
        wsTitle: '한글이 걸어온 길',
        ws: [
          { type: 'table', prompt: '한글이 걸어온 길을 정리하세요.', columns: ['연도', '일'], cells: [['1443', ''], ['1446', ''], ['1926', ''], ['1997', '']], answer: '훈민정음 창제 / 훈민정음 반포 / 가갸날 기념 시작 / 훈민정음 해례본 세계기록유산 등재' },
          { type: 'choice', prompt: '"네티즌"을 다듬은 말에 ○ 하세요.', options: ['누리꾼', '누리집'], answer: '누리꾼' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '한글날은 처음에 "___날"이라고 불렸다.', answer: '가갸' },
          { type: 'short', prompt: '자주 쓰는 외래어 하나를 골라 우리말로 바꾸어 보세요.' },
        ],
        notes: '자주 보이는 어려움: ① 한글날이 1446년부터 있었다고 여긴다 → 기념은 1926년 가갸날에서 시작되었다고 짚는다. ② 외래어를 모두 나쁜 말로 여긴다 → 누구나 알아듣기 쉬운 말을 고르는 것이 목표라고 정리한다.',
      }),

      LESSON(10, {
        title: '1929년 학생들의 요구 나누고 오늘 학생의 권리와 책임 고르기',
        objective: '1929년 학생독립운동에서 학생들이 요구한 것을 알고, 오늘날 학생으로서 권리를 누리고 책임을 다하는 행동을 고를 수 있다.',
        draw: 'students holding paper signs in an old street, and modern students holding a class meeting',
        banner: '학생들이 바란 것', extra: [{ motif: 'leaf', x: 150, y: 206, color: 'peach', s: 0.6 }],
        intro: {
          teacher: '"1929년 광주의 학생들은 무엇을 외쳤을까요?" 대답을 듣고(기다릴 반응: "차별하지 마라", "독립 만세") 학생들이 우리 학생에 대한 차별을 멈추라고, 식민지 교육을 그만두라고, 그리고 조선 독립을 외쳤다고 알린다. 시연 단추로 \'차별을 멈춰라\'를 \'학생들이 바란 것\'에 넣는다.',
          student: '학교에서 학생이 누려야 할 것 하나를 짝에게 말해 봐요.',
          demo: DM('mindmap', { mode: 'sort', topic: '1929년', slots: ['학생들이 바란 것', '아니에요'], cards: ['차별을 멈춰라', '시험을 없애라'] }, { sort: { '학생들이 바란 것': ['차별을 멈춰라'], '아니에요': ['시험을 없애라'] } }),
        },
        acts: [
          {
            title: '활동 1. 1929년 학생들의 요구 나누기', tool: 'mindmap',
            teacher: '"학생들은 왜 이런 것을 바랐을까요?" 요구마다 그때의 상황(차별, 우리 역사·말을 배우기 어려움)을 짧게 말해 준다. 오늘날 바람(급식 메뉴 등)을 1929년 칸에 넣는 학생에게는 때를 다시 보게 한다.',
            task: '1929년 학생들이 요구한 것을 가려내고 골라요.',
            items: [
              MS('1929년 학생들이 요구한 것과 아닌 것을 나누어 보세요.', '1929년 학생들', ['요구했어요', '아니에요'], ['학생 차별 반대', '식민지 교육 반대', '급식 메뉴 바꾸기', '방학 늘리기'], { '요구했어요': ['학생 차별 반대', '식민지 교육 반대'], '아니에요': ['급식 메뉴 바꾸기', '방학 늘리기'] }, 0.3),
              MP('학생독립운동에 대한 사실을 골라 담아 보세요.', '학생독립운동', ['1929년 광주에서 시작', '전국 학교로 퍼짐', '1919년 서울에서 시작', '한 학교에서만 일어남'], ['1929년 광주에서 시작', '전국 학교로 퍼짐'], 0.3),
              MM('기념일과 그날의 주인공을 이어 보세요.', '그날의 주인공', [{ id: 'm1', label: '3·1절' }, { id: 'n3', label: '학생독립운동기념일' }], ['온 겨레의 만세 운동', '차별에 맞선 학생들', '나라를 세운 단군'], { m1: '온 겨레의 만세 운동', n3: '차별에 맞선 학생들' }, 0.3),
            ],
          },
          {
            title: '활동 2. 오늘 학생의 권리와 책임 고르기', tool: 'emotion',
            teacher: '"권리를 누리는 것과 책임을 다하는 것은 함께 갈까요?" 결과를 읽고 까닭을 말하게 한다. 1929년 학생들이 바란 \'차별 없는 학교\'가 오늘 우리 교실에서 어떻게 이어지는지 생각하게 한다.',
            task: '학교생활 상황에서 어떻게 할지 고르고 결과를 봐요.',
            items: [
              EB('학급 회의에서 하고 싶은 말이 있어요. 어떻게 할까요?', '학급 회의에서 놀이 시간 규칙을 정해요. 나는 다른 생각이 있어요.', [
                { id: 'speak', text: '손을 들고 까닭과 함께 말해요', result: '반 친구들이 내 생각도 함께 따져 봐요.', mood: '뿌듯함' },
                { id: 'later', text: '말 안 하고 뒤에서 불평해요', result: '내 생각은 회의에 들어가지 못해요.', mood: '속상함', why: '의견을 말하는 것은 학생의 권리예요.' }], 'speak', 0.2),
              EB('전학 온 친구를 사투리로 놀려요. 어떻게 할까요?', '다른 지역에서 전학 온 친구의 말투를 몇몇이 흉내 내며 웃어요.', [
                { id: 'stop', text: '"말투로 놀리면 차별이야" 말해요', result: '친구들이 놀림을 멈추고 사과해요.', mood: '편안함' },
                { id: 'laugh', text: '같이 흉내 내며 웃어요', result: '전학 온 친구가 학교 오기를 싫어해요.', mood: '슬픔', why: '말투나 출신으로 놀리는 것은 차별이에요.' }], 'stop', 0.2),
              EB('회의에서 정한 규칙이 내 마음과 달라요. 어떻게 할까요?', '투표로 정한 청소 당번 규칙이 내 생각과 달라요.', [
                { id: 'keep', text: '규칙을 지키고 다음 회의에서 의견 내요', result: '반이 질서 있게 돌아가고 규칙도 다시 다룰 수 있어요.', mood: '편안함' },
                { id: 'break', text: '나만 안 지켜요', result: '다른 친구들이 내 몫까지 청소해요.', mood: '미안함', why: '함께 정한 규칙을 지키는 것은 책임이에요.' }], 'keep', 0.25),
            ],
          },
        ],
        wrap: {
          teacher: '"1929년 학생들에게 오늘 우리 반의 모습을 편지로 전한다면 무엇을 쓸까요?" 출구 1번에서 \'뒤에서 불평하기\'를 고른 학생에게는 의견을 말할 자리와 방법을 다시 떠올리게 한다. 1년 동안의 기념일을 시간 띠로 다시 짚으며 마친다.',
          exit: [
            XC('mindmap', { mode: 'sort', topic: '권리와 책임', slots: ['권리', '책임'], cards: ['차별 없이 배우기', '의견 말하기', '정한 규칙 지키기', '친구 존중하기'] }, '학생의 권리와 책임으로 나누어 보세요.', { sort: { '권리': ['차별 없이 배우기', '의견 말하기'], '책임': ['정한 규칙 지키기', '친구 존중하기'] } }, 0.3),
            CH('1929년 학생들이 맞선 것은 무엇인가요?', ['학생 차별과 식민지 교육', '전쟁과 피란'], 0, '학생들은 우리 학생 차별과 식민지 교육에 맞섰어요.'),
            MOOD,
          ],
        },
        wsTitle: '학생들이 바란 것',
        ws: [
          { type: 'choice', prompt: '1929년 학생들이 요구한 것에 ○ 하세요.', options: ['학생 차별 반대', '방학 늘리기'], answer: '학생 차별 반대' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '학생독립운동은 ___년 광주에서 시작되어 전국으로 퍼졌다.', answer: '1929' },
          { type: 'table', prompt: '학생의 권리와 책임을 하나씩 쓰세요.', columns: ['권리', '책임'], cells: [['', '']], answer: '예) 의견 말하기 / 정한 규칙 지키기' },
          { type: 'short', prompt: '우리 교실에서 차별을 없애기 위해 할 수 있는 일을 써 보세요.' },
        ],
        notes: '자주 보이는 어려움: ① 권리를 하고 싶은 대로 하는 것으로 여긴다 → 책임과 짝지어 말하게 한다. ② 학생독립운동을 오늘과 상관없는 일로 여긴다 → 차별 없는 학교라는 바람이 오늘 교실에서 이어진다는 점을 잇는다. 학생의 피해 경험을 털어놓게 하지 않는다.',
      }),
    ],
  });

})();
