/* 5학년 창체 안전교육 — 응급처치. 근거: 「학교 안전교육 실시 기준 등에 관한 고시」 별표 2 초등 응급처치.
 * (심폐소생술 및 자동제세동기의 사용법 알기, 119 신고·조치) 장면·인물은 이 단원을 위해 지은 것이다(가명). */
(function () {
  const ID = 'g5-cc-saf-firstaid';
  const UNIT = 'g5-창체-saf-firstaid';
  const TITLE = '응급처치';
  const GRADE = 5;
  const two = (n) => String(n).padStart(2, '0');
  const base = (n) => ({
    id: `${ID}-${two(n)}`, schema: 'edu-lesson.v1', catalog: { unit: UNIT, lesson: n },
    grade: GRADE, subject: '창체', unitTitle: TITLE, standards: [], minutes: 40,
    formats: ['chromebook', 'projector', 'print'],
  });
  const PROMPT = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const SCENE = (text, extra = []) => ({ viewBox: [480, 270], layers: [
    { motif: 'sun', x: 410, y: 58, s: 0.8 }, { motif: 'cloud', x: 120, y: 52 }, { motif: 'hills', y: 204 },
    { motif: 'house', x: 96, y: 214, color: 'rose', s: 0.9 }, { motif: 'tree', x: 380, y: 214 }, ...extra,
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
    flow: '5학년 응급처치는 갑자기 쓰러진 사람을 보았을 때 생명을 잇는 심폐소생술의 단계와 자동심장충격기를 쓰는 차례를 익히는 단원입니다. 1차시에는 대한심폐소생협회 일반인 지침의 순서(반응 확인 → 주변 사람을 지목해 119 신고와 자동심장충격기 요청 → 호흡 확인 → 가슴압박)를 차례로 놓고, 단계마다 하는 말과 행동을 잇습니다. 2차시에는 학교·역 지도에서 자동심장충격기가 있는 곳을 찾고, 전원 켜기부터 다시 가슴압박까지 사용 차례를 익힙니다. 가슴압박은 실제 사람에게 하지 않고 실습용 마네킹이나 흉내 동작으로만 연습하며, 119 상담원의 안내를 따르면 누구나 도울 수 있다는 자신감을 기르는 데 초점을 둡니다. 보건 단원(초5 보건교육 17차시)과 연계해 운영할 수 있습니다(시수 인정은 학교 결정).',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '쓰러진 사람 앞에서 심폐소생술 단계 놓기',
        objective: '심폐소생술의 단계를 차례대로 말하고, 단계마다 할 말과 행동을 이을 수 있다.',
        draw: 'a child kneeling beside a paper training manikin with hands stacked on its chest, while another child points and calls on a paper phone',
        banner: '확인, 신고, 압박', extra: [{ motif: 'star', x: 300, y: 96, color: 'rose' }],
        intro: {
          teacher: '"공원에서 어른이 갑자기 쓰러져 움직이지 않아요. 우리가 할 수 있는 일이 있을까요?" 대답을 듣고(기다릴 반응: "119에 전화해요", "어른을 불러요") "119에 전화하면 상담원이 무엇을 할지 알려 줘요. 오늘은 그 순서를 미리 익혀요"라고 말한다. 시연 단추로 첫 두 단계 카드가 놓이는 모습을 보여 준다. "어린이는 아무것도 못 해요"가 나오면 "신고하고 자동심장충격기를 가져오는 것도 생명을 구하는 일이에요"라고 짚는다.',
          student: '쓰러진 사람을 보면 어떤 마음이 들까요? 그래도 할 수 있는 일을 하나 짝에게 말해 봐요.',
          demo: { tool: 'story', options: { cards: [{ id: 'd1', text: '어깨 두드리며 불러요', motif: 'sun' }, { id: 'd2', text: '119 신고를 부탁해요', motif: 'house' }], slots: ['먼저', '다음'], shuffle: false }, sequence: [{ order: ['d1', 'd2'] }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 심폐소생술 단계 차례', tool: 'story',
            teacher: '"쓰러진 사람에게 다가가기 전에 먼저 둘레가 안전한지 살펴요." 반응 확인 → 119·자동심장충격기 요청 → 호흡 확인 → 가슴압박 차례를 놓게 한다. 호흡 확인을 맨 앞에 두는 학생에게 "먼저 불러서 반응이 있는지 봐야 해요"라고 짚는다. "여러분, 119 불러 주세요"처럼 여럿에게 말하면 아무도 하지 않을 수 있어 "빨간 옷 입은 분, 119에 신고해 주세요"처럼 한 사람을 정해 부탁한다는 것을 꼭 말한다.',
            task: '심폐소생술 단계를 차례대로 놓아요.',
            levels: LV,
            items: [
              SO('쓰러진 사람을 보았을 때 단계를 차례대로 놓아요.', '심폐소생술 단계', ['1단계', '2단계', '3단계', '4단계'], [{ id: 'c1', text: '어깨 두드려 반응 확인', motif: 'sun' }, { id: 'c2', text: '119·충격기 요청', motif: 'house' }, { id: 'c3', text: '숨 쉬는지 확인', motif: 'cloud' }, { id: 'c4', text: '가슴압박 시작', motif: 'star' }], ['c1', 'c2', 'c3', 'c4'], 0.2),
              SO('다가가기 전후 차례를 놓아요.', '먼저 살피기', ['먼저', '다음', '마지막'], [{ id: 's1', text: '둘레가 안전한지 봐요', motif: 'tree' }, { id: 's2', text: '"괜찮으세요?" 불러요', motif: 'sun' }, { id: 's3', text: '반응 없으면 도움 요청', motif: 'house' }], ['s1', 's2', 's3'], 0.25),
              MP('도움을 부탁할 때 알맞은 말만 골라 담아요.', '부탁하는 말', ['파란 옷 입은 분, 119에 신고해 주세요', '누가 좀 해 주세요', '안경 쓴 분, 충격기를 가져다주세요', '저는 모르겠어요'], ['파란 옷 입은 분, 119에 신고해 주세요', '안경 쓴 분, 충격기를 가져다주세요'], 0.3,
                { conclude: '반응 확인 → 한 사람을 정해 119·자동심장충격기 부탁 → 호흡 확인 → 가슴압박 순서예요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 단계마다 할 말과 행동', tool: 'mindmap',
            teacher: '"숨을 쉬는지 볼 때는 어디를 볼까요?" 가슴과 배가 오르내리는지 본다고 짚는다. 가슴압박은 가슴 가운데를 깍지 낀 두 손으로 팔을 펴고 누르며, 성인은 약 5cm 깊이로 1분에 100~120번 빠르기로 누른다고 말한다(마네킹·흉내로만 연습). 가슴압박을 하다 멈추면 안 되는 까닭과, 지치면 다른 사람과 바꾼다는 것을 함께 짚는다. 119 상담원이 끊지 말라고 하면 휴대전화를 스피커로 켜고 안내를 따른다.',
            task: '단계와 할 말·행동을 잇고, 바른 가슴압박을 골라요.',
            levels: LV,
            items: [
              MM('단계와 할 일을 이어요. 맞지 않는 카드는 남겨요.', '단계마다 할 일', [{ id: 'k1', label: '반응 확인' }, { id: 'k2', label: '호흡 확인' }, { id: 'k3', label: '가슴압박' }], ['"괜찮으세요?" 하고 불러요', '가슴이 오르내리는지 봐요', '가슴 가운데를 세게 눌러요', '물을 먹여요'], { k1: '"괜찮으세요?" 하고 불러요', k2: '가슴이 오르내리는지 봐요', k3: '가슴 가운데를 세게 눌러요' }, 0.2),
              MS('가슴압박 모습을 나누어 보세요.', '가슴압박', ['바른 자세', '고칠 자세'], ['깍지 낀 손바닥으로 눌러요', '팔꿈치를 굽혀 눌러요', '팔을 곧게 펴서 눌러요', '배 위를 눌러요'], { '바른 자세': ['깍지 낀 손바닥으로 눌러요', '팔을 곧게 펴서 눌러요'], '고칠 자세': ['팔꿈치를 굽혀 눌러요', '배 위를 눌러요'] }, 0.25),
              MS('신고 뒤 행동을 나누어 보세요.', '신고 뒤', ['해요', '안 해요'], ['상담원 안내를 따라요', '바로 전화를 끊어요', '스피커로 켜 두어요', '구경만 해요'], { '해요': ['상담원 안내를 따라요', '스피커로 켜 두어요'], '안 해요': ['바로 전화를 끊어요', '구경만 해요'] }, 0.25,
                { conclude: '119 상담원의 안내를 들으며, 구급대가 올 때까지 가슴압박을 멈추지 않아요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 익힌 네 단계를 손가락을 꼽으며 말해 볼까요? 확인, 부탁, 호흡, 압박." 실습용 마네킹이 있으면 몇 명이 나와 자세만 보여 준다(친구 몸에 누르지 않는다). 출구 1번에서 "누가 좀 해 주세요"를 고른 학생에게 한 사람을 정하는 까닭을 다시 묻는다.',
          exit: [
            { type: 'choice', prompt: '쓰러진 사람을 보고 가장 먼저 할 일은?', options: ['어깨를 두드리며 불러 반응을 봐요', '바로 가슴을 눌러요', '물을 먹여요'], answer: 0, difficulty: 0.15, explain: '둘레를 살핀 뒤 먼저 반응을 확인해요.' },
            { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '바른 부탁', basket: '바른 부탁', cards: ['모자 쓴 분, 119 불러 주세요', '아무나 신고해 주세요', '노란 가방 학생, 충격기 가져와요', '다들 도와주세요'] }, state: { at: {} }, prompt: '119와 자동심장충격기를 부탁하는 바른 말만 골라 담아요.', target: { pick: ['모자 쓴 분, 119 불러 주세요', '노란 가방 학생, 충격기 가져와요'] }, difficulty: 0.25 },
            { type: 'short', prompt: '가슴압박을 하다 지치면 어떻게 해야 하는지 한 문장으로 쓰세요.' },
            MOOD,
          ],
        },
        wsTitle: '심폐소생술 단계',
        ws: [
          { type: 'table', prompt: '심폐소생술 단계에 맞게 1~4를 쓰세요.', columns: ['하는 일', '차례'], cells: [['숨 쉬는지 확인해요', ''], ['가슴압박을 해요', ''], ['어깨를 두드려 불러요', ''], ['119·충격기를 부탁해요', '']], answer: '3, 4, 1, 2' },
          { type: 'choice', prompt: '가슴압박 위치로 알맞은 곳에 ○ 하세요.', options: ['가슴 가운데', '배꼽 아래', '목'], answer: '가슴 가운데' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '도움을 부탁할 때는 "여러분"이 아니라 ___ 사람을 정해서 말해요.', answer: '한' },
          { type: 'short', prompt: '119 상담원과 통화할 때 전화를 바로 끊지 않는 까닭을 쓰세요.' },
        ],
        notes: '근거: 대한심폐소생협회 일반인 심폐소생술 지침(반응 확인 → 119 신고·자동심장충격기 요청 → 호흡 확인 → 가슴압박, 성인 약 5cm·분당 100~120회). 자주 보이는 어려움: ① 호흡부터 확인한다 → 반응 확인이 먼저다. ② "여러분 도와주세요"라고 말한다 → 한 사람을 지목해 부탁한다. ③ 팔꿈치를 굽혀 누른다 → 팔을 펴고 몸무게를 실어 누른다. 실습은 마네킹·흉내로만 하고 친구 몸에 누르지 않는다. 쓰러진 가족을 본 경험을 말하게 하지 않는다.',
      }),

      LESSON(2, {
        title: '지도에서 자동심장충격기 찾고 쓰는 차례 놓기',
        objective: '지도에서 자동심장충격기가 있는 곳을 찾고, 자동심장충격기를 쓰는 차례를 말할 수 있다.',
        draw: 'a green paper box with a heart and lightning mark mounted on a school hallway wall, with children pointing to it on a paper floor map',
        banner: '어디 있지? 어떻게 쓰지?', extra: [{ motif: 'flower', x: 300, y: 222, color: 'mint' }],
        intro: {
          teacher: '"우리 학교 자동심장충격기는 어디에 있을까요?" 대답을 듣고(기다릴 반응: "보건실", "모르겠어요") "쓰러진 사람을 볼 때 찾으면 늦어요. 미리 알아 두어야 해요"라고 말한다. 자동심장충격기는 하트와 번개 모양 그림이 있는 상자에 들어 있고, 역·공항·큰 건물 같은 곳에 놓여 있다고 짚는다. 시연 단추로 사용 차례 첫 두 카드가 놓이는 모습을 보여 준다. "어린이가 만지면 고장 나요"가 나오면 "기계가 목소리로 할 일을 알려 줘요"라고 되묻는다.',
          student: '학교나 역에서 하트와 번개 그림이 있는 상자를 본 적이 있나요? 어디였는지 짝에게 말해 봐요.',
          demo: { tool: 'story', options: { cards: [{ id: 'd1', text: '전원을 켜요', motif: 'sun' }, { id: 'd2', text: '패드를 붙여요', motif: 'leaf' }], slots: ['먼저', '다음'], shuffle: false }, sequence: [{ order: ['d1', 'd2'] }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 지도에서 자동심장충격기 찾기', tool: 'map',
            teacher: '"지도에서 보건실을 먼저 찾고, 동쪽으로 한 칸 옮겨 볼까요?" 지도의 북쪽 화살표가 위쪽이라는 것을 먼저 짚는다. 2번은 이름 대신 기호만 있으니 범례에서 기호 뜻을 읽게 한다. 3번은 쓰러진 사람 곁에 남아 가슴압박을 하는 사람과 자동심장충격기를 가지러 가는 사람을 나눈다는 것을 함께 말한다. 활동 뒤 실제 우리 학교 자동심장충격기 위치를 교사가 알려 준다(학교마다 다르다).',
            task: '지도를 읽고 자동심장충격기가 있는 곳에 핀을 꽂거나 골라요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '자동심장충격기는 보건실에서 동쪽으로 한 칸 떨어진 복도에 있어요. 그 칸에 핀을 꽂아요.', toolOptions: { title: '우리 학교 1층', places: [{ name: '현관', icon: 'dot', at: [0, 3] }, { name: '보건실', icon: 'hospital', at: [2, 1] }, { name: '도서관', icon: 'library', at: [4, 2] }, { name: '행정실', icon: 'office', at: [1, 2] }] }, target: { from: '보건실', dir: '동', steps: 1 }, difficulty: 0.2 },
              { prompt: '역 지도에서 범례를 읽고 자동심장충격기 기호가 있는 칸에 핀을 꽂아요.', toolOptions: { title: '기차역', names: false, places: [{ name: '매표소', icon: 'station', at: [1, 1], legend: '매표소' }, { name: '자동심장충격기', icon: 'hospital', at: [4, 2], legend: '자동심장충격기' }, { name: '버스 타는 곳', icon: 'bus', at: [3, 0], legend: '버스 타는 곳' }, { name: '공원', icon: 'park', at: [0, 3], legend: '광장' }] }, target: { place: '자동심장충격기' }, difficulty: 0.3 },
              { prompt: '운동장에서 사람이 쓰러졌어요. 지도를 보고 자동심장충격기를 가지러 갈 곳을 골라요.', toolOptions: { title: '우리 학교', readOnly: true, places: [{ name: '운동장', icon: 'park', at: [1, 1] }, { name: '체육관', icon: 'house', at: [2, 1] }, { name: '도서관', icon: 'library', at: [5, 3] }, { name: '급식실', icon: 'apartment', at: [5, 0] }], ask: { q: '자동심장충격기는 체육관 입구에 있어요. 어디로 갈까요?', choices: ['체육관', '도서관', '급식실'], why: [null, '도서관에는 자동심장충격기가 없다고 했어요.', '급식실에는 자동심장충격기가 없다고 했어요.'] } }, target: { pick: 0 }, difficulty: 0.25,
                conclude: '쓰러진 사람을 보기 전에 미리 자동심장충격기 위치를 알아 두면 빨리 가져올 수 있어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 자동심장충격기 쓰는 차례', tool: 'story',
            teacher: '"자동심장충격기를 열면 기계가 목소리로 할 일을 알려 줘요. 무엇부터 할까요?" 전원 켜기 → 패드 붙이기 → 분석하는 동안 떨어지기 → 충격 버튼 → 바로 가슴압박 차례를 놓게 한다. 충격 버튼을 누를 때 아무도 몸에 닿지 않아야 한다는 것을 꼭 짚는다. "충격을 주면 끝나요"라는 오개념이 많다 — "충격 뒤에는 곧바로 가슴압박을 다시 해요"라고 말한다. 패드는 그림에 나온 자리에 붙인다.',
            task: '자동심장충격기 쓰는 차례를 놓고 바른 행동을 골라요.',
            levels: LV,
            items: [
              SO('자동심장충격기를 쓰는 차례로 놓아요.', '자동심장충격기', ['1', '2', '3', '4', '5'], [{ id: 'a1', text: '전원을 켜요', motif: 'sun' }, { id: 'a2', text: '그림대로 패드를 붙여요', motif: 'leaf' }, { id: 'a3', text: '분석 중엔 떨어져요', motif: 'cloud' }, { id: 'a4', text: '충격 버튼을 눌러요', motif: 'star' }, { id: 'a5', text: '바로 가슴압박을 해요', motif: 'flower' }], ['a1', 'a2', 'a3', 'a4', 'a5'], 0.3),
              MS('자동심장충격기를 쓸 때 행동을 나누어 보세요.', '쓸 때', ['해요', '안 해요'], ['기계 목소리를 따라 해요', '분석할 때 몸을 만져요', '충격 전에 모두 떨어져요', '충격 뒤 가만히 기다려요'], { '해요': ['기계 목소리를 따라 해요', '충격 전에 모두 떨어져요'], '안 해요': ['분석할 때 몸을 만져요', '충격 뒤 가만히 기다려요'] }, 0.25),
              MP('자동심장충격기가 있는 곳을 알리는 표시만 골라 담아요.', '찾는 표시', ['하트와 번개 그림', '자동심장충격기 글자', '물방울 그림', '자전거 그림'], ['하트와 번개 그림', '자동심장충격기 글자'], 0.2,
                { conclude: '전원을 켜면 기계가 알려 주는 대로 하고, 충격 뒤에는 바로 가슴압박을 이어 가요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"쉬는 시간에 우리 학교 자동심장충격기가 어디 있는지 직접 확인해 볼까요?" 출구 2번에서 "충격 뒤 기다려요"를 고른 학생에게 가슴압박을 바로 다시 하는 까닭을 다시 짚는다.',
          exit: [
            { type: 'tool', tool: 'map', options: { title: '우리 동네', places: [{ name: '아파트', icon: 'apartment', at: [0, 0] }, { name: '지하철역', icon: 'station', at: [3, 2] }, { name: '공원', icon: 'park', at: [5, 1] }] }, prompt: '자동심장충격기는 지하철역에서 북쪽으로 한 칸에 있어요. 그 칸에 핀을 꽂아요.', target: { from: '지하철역', dir: '북', steps: 1 }, difficulty: 0.25 },
            { type: 'choice', prompt: '자동심장충격기가 충격을 준 뒤 할 일은?', options: ['바로 가슴압박을 다시 해요', '패드를 떼요', '전원을 꺼요'], answer: 0, difficulty: 0.25, explain: '충격 뒤 곧바로 가슴압박을 이어 가요.' },
            { type: 'short', prompt: '충격 버튼을 누르기 전에 모두 떨어져야 하는 까닭을 쓰세요.' },
            MOOD,
          ],
        },
        wsTitle: '자동심장충격기 찾고 쓰기',
        ws: [
          { type: 'table', prompt: '자동심장충격기 쓰는 차례에 맞게 1~5를 쓰세요.', columns: ['하는 일', '차례'], cells: [['패드를 붙여요', ''], ['가슴압박을 다시 해요', ''], ['전원을 켜요', ''], ['충격 버튼을 눌러요', ''], ['분석 중엔 떨어져요', '']], answer: '2, 5, 1, 4, 3' },
          { type: 'choice', prompt: '자동심장충격기 상자에 그려진 그림에 ○ 하세요.', options: ['하트와 번개', '자동차', '물방울'], answer: '하트와 번개' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '자동심장충격기는 전원을 켜면 ___가 할 일을 알려 줘요.', answer: '기계(목소리)' },
          { type: 'short', prompt: '우리 학교에서 자동심장충격기가 있는 곳을 쓰고, 가는 길을 한 문장으로 쓰세요.' },
        ],
        notes: '근거: 대한심폐소생협회 일반인 지침의 자동심장충격기 사용 순서(전원 → 패드 → 분석 중 접촉 금지 → 제세동 → 즉시 가슴압박 재개). 활동 1의 지도는 가상 학교·역이므로 활동 뒤 실제 우리 학교 설치 위치를 꼭 알려 준다. 자주 보이는 어려움: ① 충격 뒤 멈춘다 → 바로 가슴압박을 이어 간다. ② 분석·충격 때 몸을 만진다 → 모두 떨어진 것을 확인한다. ③ 어린이는 쓰면 안 된다고 여긴다 → 기계 안내를 따르면 된다는 것을 짚는다. 실습은 교육용 훈련기·그림으로만 한다.',
      }),
    ],
  });
})();
