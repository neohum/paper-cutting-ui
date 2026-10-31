/* 6학년 창체 법정교육 — 장애인식개선 (2차시). 근거: 장애인복지법 제25조·시행령 제16조(매년 1회 이상·1시간 이상), 범교과 기준 연 2시간. 보편적 설계와 통합학급 모둠 조정, 장면·인물은 가상(가명 한 글자).
 */
(function () {
  const G = 6, CODE = 'disab';
  const UNIT = `g${G}-창체-${CODE}`;
  const TITLE = '장애인식개선';
  const base = (n) => ({
    id: `g${G}-cc-${CODE}-0${n}`, schema: 'edu-lesson.v1',
    catalog: { unit: UNIT, lesson: n },
    grade: G, subject: '창체', unitTitle: TITLE,
    standards: [],
    minutes: 40,
    formats: ['chromebook', 'projector', 'print'],
  });
  const PROMPT = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const SCENE = (text, extra = []) => ({ viewBox: [480, 270], layers: [
    { motif: 'sun', x: 410, y: 58, s: 0.8 }, { motif: 'cloud', x: 120, y: 52 }, { motif: 'hills', y: 204 },
    { motif: 'house', x: 96, y: 214, color: 'sky', s: 0.9 }, { motif: 'tree', x: 380, y: 214 }, ...extra,
    { motif: 'text', x: 240, y: 140, text, size: 22 },
  ] });
  const MS = (prompt, topic, slots, cards, sort, d, more) => ({ prompt, toolOptions: { topic, slots, cards }, target: { sort }, difficulty: d, ...more });
  const MM = (prompt, topic, slots, cards, match, d, more) => ({ prompt, toolOptions: { mode: 'match', topic, slots, cards }, target: { match }, difficulty: d, ...more });
  const MP = (prompt, topic, cards, pick, d, more) => ({ prompt, toolOptions: { mode: 'pick', topic, basket: topic, cards }, target: { pick }, difficulty: d, ...more });
  const EB = (prompt, situation, choices, choice, d, more) => ({ prompt, toolOptions: { mode: 'branch', situation, choices }, target: { choice }, difficulty: d, ...more });
  const EM = (prompt, slots, cards, match, d, more) => ({ prompt, toolOptions: { mode: 'match', slots, cards }, target: { match }, difficulty: d, ...more });
  const ES = (prompt, slots, cards, sort, d, more) => ({ prompt, toolOptions: { mode: 'sort', slots, cards, weather: false }, target: { sort }, difficulty: d, ...more });
  const EP = (prompt, basket, cards, pick, d, more) => ({ prompt, toolOptions: { mode: 'pick', basket, cards, weather: false }, target: { pick }, difficulty: d, ...more });
  const SO = (prompt, title, slots, cards, order, d, more) => ({ prompt, toolOptions: { title, slots, cards }, target: { order }, difficulty: d, ...more });
  const SF = (prompt, slots, cards, fill, d, more) => ({ prompt, toolOptions: { mode: 'fill', slots, cards }, target: { fill }, difficulty: d, ...more });
  const LV = { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } };
  const LVB = { easy: { showBack: true }, base: {}, challenge: {} };
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  // 도입 6 + 전개 27 + 정리 7 = 40분
  const LESSON = (n, o) => Object.assign(base(n), {
    title: o.title, objective: o.objective,
    illustration: { prompt: PROMPT(o.draw), scene: SCENE(o.banner, o.extra) },
    stages: [
      { id: 'intro', title: '도입', minutes: 6, teacher: o.intro.teacher, student: o.intro.student, demo: o.intro.demo },
      { id: 'main', title: '전개', minutes: 27, activities: o.acts },
      { id: 'wrapup', title: '정리', minutes: 7, teacher: o.wrap.teacher, exitTicket: o.wrap.exit },
    ],
    worksheet: o.ws, differentiation: o.diff, teacherNotes: o.notes,
  });
  const DIFF = (easy, challenge) => ({ easy, base: '모든 카드를 놓거나 보기를 고른 뒤 확인을 눌러 스스로 고쳐요.', challenge });

  PaperLessons.registerUnit({
    id: `g${G}-cc-${CODE}`, schema: 'edu-unit.v1', catalogUnit: UNIT,
    grade: G, subject: '창체', unitTitle: TITLE,
    flow: '6학년 장애인식개선 단원은 "불편함은 사람이 아니라 환경에서 생긴다"는 관점으로 설계와 규칙을 바꾸어 보는 2차시입니다. 1차시에는 누구나 쓰기 편한 보편적 설계(유니버설 디자인)의 사례를 찾아 장애인만이 아니라 노인·어린이·유모차를 미는 사람 등 모두에게 이로운 까닭을 따집니다. 2차시에는 통합학급 모둠 활동에서 모두가 참여하도록 역할과 규칙을 조정하는 갈림길과 차례를 연습합니다. 근거는 장애인복지법 제25조·시행령 제16조(매년 1회 이상·1시간 이상)와 범교과 기준 시수 연 2시간입니다. 4학년(장애는 다름, 먼저 묻고 돕기), 5학년(차별하는 말 바꾸기, 편의시설)에서 이어지며, 반의 특정 학생을 예로 들지 않습니다.',
    refs: {},
    lessons: [
      // ───────────────────────────── 1차시
      LESSON(1, {
        title: '보편적 설계 사례 찾아 모두에게 좋은 까닭 따지기',
        objective: '보편적 설계(유니버설 디자인)의 사례를 찾고, 그 설계가 장애인뿐 아니라 여러 사람에게 이로운 까닭을 설명할 수 있다.',
        draw: 'a paper town street with a gentle ramp, an automatic door, a low-floor bus and wide sidewalk used by a wheelchair user, an elderly person and a parent with a stroller',
        banner: '모두를 위한 설계', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }],
        intro: {
          teacher: '"버스 바닥이 낮아 계단 없이 탈 수 있다면 누가 편할까요?" 두세 명의 대답을 듣고(기다릴 반응: "휠체어 탄 사람이요", "할머니요", "유모차요") 시연 단추로 모두에게 편한 설계와 일부에게만 편한 설계가 나뉘는 모습을 보여 준다. "장애인만을 위한 시설이에요"가 나오면 "무거운 짐을 든 날, 다리를 다친 날의 나는 어떨까요?"라고 되묻는다. 오늘은 모두를 위한 설계를 찾아 그 까닭을 따진다고 밝힌다.',
          student: '우리 학교나 동네에서 누구나 쓰기 편하게 만든 물건이나 시설을 짝에게 한 가지 말해 봅시다.',
          demo: { tool: 'mindmap', options: { topic: '어떤 설계일까', slots: ['모두에게 편해요', '일부만 편해요'], cards: ['자동문', '높은 계단만 있는 입구'], shuffle: false }, sequence: [{ sort: { '모두에게 편해요': ['자동문'], '일부만 편해요': ['높은 계단만 있는 입구'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 보편적 설계 사례 가려내기', minutes: 13, tool: 'mindmap',
            teacher: '"이 설계는 누구에게 편할까요?" 1번에서 손잡이를 돌리는 문고리와 누르는 막대형 손잡이를 견주어 손에 힘이 약한 사람·짐을 든 사람을 떠올리게 한다. 2번에서 그림 안내 표지는 글을 읽기 어려운 어린이·외국인에게도 도움이 된다는 점을 짚는다. 3번은 보편적 설계의 원칙(누구나, 쉽게, 안전하게)을 고르게 한다.',
            task: '설계 사례를 모두에게 편한 것과 일부에게만 편한 것으로 나누고, 보편적 설계의 원칙을 골라요.',
            levels: LV,
            items: [
              MS('설계를 모두에게 편한 것과 일부에게만 편한 것으로 나누어 보세요.', '설계 견주기', ['모두에게 편해요', '일부만 편해요'], ['누르는 막대형 손잡이', '돌려야 하는 동그란 문고리', '바닥이 낮은 버스', '계단만 있는 육교'], { '모두에게 편해요': ['누르는 막대형 손잡이', '바닥이 낮은 버스'], '일부만 편해요': ['돌려야 하는 동그란 문고리', '계단만 있는 육교'] }, 0.15),
              MM('보편적 설계와 그 설계로 편해지는 사람들을 이어 보세요. 맞지 않는 카드는 남겨요.', '누가 편해질까', [{ id: 's1', label: '그림으로 된 안내 표지' }, { id: 's2', label: '턱이 없는 출입구' }, { id: 's3', label: '자막이 있는 영상' }], ['글이 낯선 어린이·외국인', '휠체어·유모차·여행 가방', '듣기 어려운 사람·시끄러운 곳', '키가 큰 사람만'], { s1: '글이 낯선 어린이·외국인', s2: '휠체어·유모차·여행 가방', s3: '듣기 어려운 사람·시끄러운 곳' }, 0.25),
              MP('보편적 설계가 지키려는 원칙만 골라 담아 보세요.', '보편적 설계의 원칙', ['누구나 쓸 수 있어요', '쉽게 알 수 있어요', '특별한 사람만 써요', '익숙한 사람만 알아요'], ['누구나 쓸 수 있어요', '쉽게 알 수 있어요'], 0.2,
                { conclude: '보편적 설계는 처음부터 누구나 쉽고 안전하게 쓰도록 만들어 모두에게 이로워요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 우리 학교를 모두를 위한 설계로 바꾸기', minutes: 14, tool: 'mindmap',
            teacher: '"우리 학교의 이 장소를 어떻게 바꾸면 누구나 편할까요?" 1번에서 불편한 장소와 바꿀 방법을 잇게 한다. 2번에서 "따로 만든 특별 통로"보다 처음부터 모두가 같이 쓰는 길이 더 나은 까닭(구분하지 않음)을 짚는다. 3번은 설계뿐 아니라 사람들의 행동(점자블록 위 물건 두지 않기 등)도 함께 바뀌어야 한다는 점을 말해 준다.',
            task: '학교의 불편한 곳과 바꿀 방법을 잇고, 모두를 위한 학교를 만드는 생각을 골라요.',
            levels: LV,
            items: [
              MM('학교의 불편한 곳과 모두를 위한 설계 방법을 이어 보세요. 맞지 않는 카드는 남겨요.', '학교 바꾸기', [{ id: 's1', label: '현관에 계단만 있어요.' }, { id: 's2', label: '교실 번호가 작은 글씨뿐이에요.' }, { id: 's3', label: '급식실 안내가 말로만 나와요.' }], ['완만한 경사로 놓기', '큰 글씨·그림·점자 표지', '화면 자막 함께 띄우기', '계단에 그림 붙이기'], { s1: '완만한 경사로 놓기', s2: '큰 글씨·그림·점자 표지', s3: '화면 자막 함께 띄우기' }, 0.2),
              MS('모두를 위한 생각과 구분하는 생각으로 나누어 보세요.', '어떤 생각일까', ['모두를 위한 생각', '구분하는 생각'], ['처음부터 함께 쓰는 길', '장애인은 뒷문으로', '누구나 누르는 버튼', '필요한 사람만 따로'], { '모두를 위한 생각': ['처음부터 함께 쓰는 길', '누구나 누르는 버튼'], '구분하는 생각': ['장애인은 뒷문으로', '필요한 사람만 따로'] }, 0.25),
              MP('설계와 함께 우리가 지켜야 할 행동만 골라 담아 보세요.', '함께 지킬 행동', ['경사로 앞 비워 두기', '엘리베이터 양보하기', '점자블록 위 자전거', '장애인 주차칸 잠깐 쓰기'], ['경사로 앞 비워 두기', '엘리베이터 양보하기'], 0.2,
                { conclude: '좋은 설계와 배려하는 행동이 함께할 때 모두가 편한 학교가 돼요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 찾은 보편적 설계 가운데 우리 학교에 가장 먼저 있었으면 하는 것은 무엇인가요?" 출구 1번에서 "장애인용 따로 출입구"를 모두를 위한 설계로 놓은 학생에게 처음부터 함께 쓰는 길과 견주게 한다. 2번에서 "장애인만 이롭다"를 고른 학생에게 노인·어린이·짐을 든 사람을 다시 떠올리게 한다.',
          exit: [
            { type: 'tool', tool: 'mindmap', options: { topic: '보편적 설계일까', slots: ['보편적 설계', '아니에요'], cards: ['음성이 나오는 승강기', '높이 조절 세면대', '좁은 회전문만 있음', '글씨만 빽빽한 안내판'] }, state: { at: {} }, prompt: '시설을 보편적 설계인 것과 아닌 것으로 나누어 보세요.',
              target: { sort: { '보편적 설계': ['음성이 나오는 승강기', '높이 조절 세면대'], '아니에요': ['좁은 회전문만 있음', '글씨만 빽빽한 안내판'] } }, difficulty: 0.2 },
            { type: 'choice', prompt: '보편적 설계에 대한 설명으로 알맞은 것은 무엇인가요?', options: ['장애인만을 위해 따로 만든 설계', '처음부터 누구나 쉽게 쓰도록 만든 설계', '보기에만 멋진 설계'], answer: 1, difficulty: 0.1, explain: '보편적 설계는 처음부터 누구나 쉽고 안전하게 쓰도록 만든 설계예요.' },
            { type: 'short', prompt: '우리 학교에서 보편적 설계로 바꾸고 싶은 곳과 방법을 한 문장으로 쓰세요.' },
            MOOD,
          ],
        },
        ws: {
          title: '모두를 위한 설계 찾기',
          items: [
            { type: 'table', prompt: '설계로 편해지는 사람을 두 가지 이상 쓰세요.', columns: ['설계', '편해지는 사람'], cells: [['바닥이 낮은 버스', ''], ['그림 안내 표지', ''], ['자막이 있는 영상', ''], ['턱이 없는 출입구', '']], answer: '휠체어·노인·유모차 / 어린이·외국인 / 듣기 어려운 사람·시끄러운 곳의 사람 / 휠체어·유모차·여행 가방' },
            { type: 'choice', prompt: '보편적 설계에 가까운 것에 ○ 하세요.', options: ['계단만 있는 육교', '누르는 막대형 손잡이', '돌리는 동그란 문고리'], answer: '누르는 막대형 손잡이' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '보편적 설계는 처음부터 ___나 쉽고 안전하게 쓰도록 만든 설계예요.', answer: '누구' },
            { type: 'short', prompt: '설계와 함께 우리가 지켜야 할 배려 행동을 두 가지 쓰세요.' },
          ],
          easy: {
            note: '"짐을 든 날의 나도 편할까?"를 떠올려 보세요.',
            items: [
              { type: 'choice', prompt: '누구나 편한 것에 ○ 하세요.', options: ['경사로', '계단만'], answer: '경사로' },
              { type: 'table', prompt: '모두에게 편하면 ○, 아니면 ×를 쓰세요.', columns: ['시설', '○ / ×'], cells: [['자동문', ''], ['좁은 회전문만', ''], ['그림 표지', '']], answer: '○, ×, ○' },
              { type: 'draw', prompt: '누구나 편한 학교 입구를 그려 보세요.' },
              { type: 'short', prompt: '우리 학교에 있으면 좋을 시설을 쓰세요.' },
            ],
          },
        },
        diff: DIFF('카드는 맞는 칸에 놓으면 바로 알려 줘요. 사진 자료를 먼저 함께 살펴봐요.', '"필요한 사람만 따로"처럼 구분하는 생각을 가려내고, 카드 순서가 섞여 나와요.'),
        notes: '자주 보이는 어려움: ① 편의시설을 장애인만을 위한 것으로 여긴다 → 노인·어린이·짐을 든 사람 등 모두에게 이롭다는 점을 짚는다. ② 따로 만든 특별 통로를 좋은 해결로 여긴다 → 처음부터 함께 쓰는 설계와 견주어 구분의 문제를 말한다. ③ 설계만 바꾸면 끝이라고 여긴다 → 경사로 앞 비우기 같은 행동도 함께 필요함을 알린다. 반의 장애 학생을 예로 들거나 지목하지 않는다.',
      }),

      // ───────────────────────────── 2차시
      LESSON(2, {
        title: '모두 참여하는 모둠 활동으로 규칙 조정하기',
        objective: '통합학급 모둠 활동에서 모두가 참여하도록 역할과 규칙을 조정하는 방법을 고르고, 공정한 조정의 까닭을 말할 수 있다.',
        draw: 'a paper classroom group table where children with different abilities share roles, one pointing at a picture card, one writing, one using a tablet, all smiling',
        banner: '모두가 함께하는 모둠', extra: [{ motif: 'leaf', x: 300, y: 222 }],
        intro: {
          teacher: '"모둠 활동에서 모두가 똑같은 일을 똑같은 방법으로 하는 것이 꼭 공정할까요?" 두세 명의 대답을 듣고(기다릴 반응: "똑같아야 공정해요", "잘하는 걸 나누면 돼요") 시연 단추로 참여를 넓히는 조정과 참여를 막는 조정이 나뉘는 모습을 보여 준다. "규칙을 바꾸면 봐주는 거예요"가 나오면 "안경을 쓰고 시험 보는 것도 봐주는 것일까요?"라고 되묻는다. 오늘은 모두 참여하는 모둠을 만드는 방법을 고른다고 밝힌다.',
          student: '모둠 활동에서 내가 잘하는 역할을 짝에게 한 가지 말해 봅시다.',
          demo: { tool: 'mindmap', options: { topic: '모둠 조정', slots: ['참여를 넓혀요', '참여를 막아요'], cards: ['그림 카드로 의견 내기', '빨리 못 하면 빼기'], shuffle: false }, sequence: [{ sort: { '참여를 넓혀요': ['그림 카드로 의견 내기'], '참여를 막아요': ['빨리 못 하면 빼기'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 모둠 활동의 갈림길에서 고르기', minutes: 14, tool: 'emotion',
            teacher: '"이렇게 정하면 모둠 모두가 참여할 수 있을까요?" 결과 칸을 읽고 까닭을 말하게 한다. 1번에서 "시간이 없으니 우리끼리"를 고르는 학생에게 결과물보다 함께하는 과정이 모둠 활동의 목적임을 짚는다. 2번에서 휠체어를 타는 친구를 위해 놀이 규칙을 바꾸는 것은 봐주기가 아니라 모두가 같은 출발선에 서게 하는 조정임을 말한다. 3번은 친구에게 묻고 함께 정하는 것이 조정의 시작이라는 점을 강조한다.',
            task: '통합학급 모둠 활동에서 어떻게 조정할지 고르고, 그 결과를 살펴봐요.',
            levels: LVB,
            items: [
              EB('발표 준비 시간이 빠듯해요. 말을 천천히 하는 친구가 있는 모둠은 어떻게 할까요?', '모둠 발표 준비 시간이 10분 남았는데, 모둠에는 말을 천천히 하는 친구 도가 있어요.', [
                { id: 'exclude', text: '시간 없으니 우리끼리 해요', result: '도는 아무 역할도 없이 앉아만 있어요.', mood: '외로움', why: '모둠 활동은 모두가 함께하는 과정이 목적이에요.' },
                { id: 'role', text: '도가 잘하는 그림 자료를 맡겨요', result: '도의 그림 덕분에 발표가 더 쉬워져요.', mood: '뿌듯함' },
                { id: 'rush', text: '도에게 빨리 말하라고 재촉해요', result: '도가 긴장해 더 말하기 어려워해요.', mood: '불안', why: '재촉보다 잘하는 방법으로 참여하게 해요.' }], 'role', 0.15),
              EB('체육 시간 피구에 휠체어를 타는 친구가 함께해요. 규칙을 어떻게 할까요?', '체육 시간에 반 전체가 피구를 하는데, 휠체어를 타는 친구 하도 함께하고 싶어 해요.', [
                { id: 'watch', text: '하는 점수 기록만 해요', result: '하는 함께 뛰고 싶었는데 구경만 해요.', mood: '서운함', why: '규칙을 바꾸면 함께 뛸 수 있어요.' },
                { id: 'adjust', text: '굴리는 공 규칙을 함께 정해요', result: '모두가 새 규칙으로 신나게 경기해요.', mood: '즐거움' },
                { id: 'same', text: '규칙은 그대로, 알아서 해요', result: '하는 공을 피하기 어려워 금방 나가요.', mood: '속상함', why: '같은 규칙이 모두에게 같은 기회는 아니에요.' }], 'adjust', 0.2),
              EB('모둠에서 친구를 위해 방법을 바꾸려는데 정작 그 친구에게 묻지 않았어요. 어떻게 할까요?', '모둠 친구들이 보는 것이 불편한 친구 서를 위해 활동 방법을 바꾸자고 의논 중인데, 서에게는 묻지 않았어요.', [
                { id: 'decide', text: '우리가 좋다고 생각한 대로 정해요', result: '서에게는 오히려 불편한 방법이 돼요.', mood: '불편함', why: '조정은 당사자에게 먼저 묻고 함께 정해요.' },
                { id: 'ask', text: '서에게 편한 방법을 묻고 함께 정해요', result: '서가 음성 자료를 제안해 모두 함께 활동해요.', mood: '고마움' },
                { id: 'skip', text: '어려우니 서는 쉬게 해요', result: '서는 모둠에서 밀려난 느낌이 들어요.', mood: '외로움', why: '빼는 것은 배려가 아니라 배제예요.' }], 'ask', 0.25,
                { conclude: '당사자에게 묻고 역할과 규칙을 함께 조정하면 모두가 참여하는 모둠이 돼요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 모두 참여하는 모둠 규칙 만드는 차례', minutes: 13, tool: 'story',
            teacher: '"모둠 규칙을 조정할 때 무엇부터 할까요?" 1번에서 "묻기"를 빼먹으면 조정이 오히려 불편을 만들 수 있음을 짚는다. 2번은 역할 나누기 차례다. 3번은 조정한 뒤에도 잘 되는지 다시 묻고 고치는 과정이 필요함을 말해 준다.',
            task: '모두가 참여하는 모둠 규칙을 만드는 차례를 놓아요.',
            levels: LV,
            items: [
              SO('모둠 규칙을 조정하는 차례를 놓아 보세요.', '규칙 조정하기', ['먼저', '다음', '그다음', '마지막'], [{ id: 'a', text: '어려운 점을 함께 찾아요', motif: 'cloud' }, { id: 'b', text: '당사자에게 편한 방법을 물어요', motif: 'sun' }, { id: 'c', text: '모두 동의하는 규칙을 정해요', motif: 'leaf' }, { id: 'd', text: '해 보고 다시 고쳐요', motif: 'star' }], ['a', 'b', 'c', 'd'], 0.15),
              SO('모둠 역할을 나누는 차례를 놓아 보세요.', '역할 나누기', ['먼저', '다음', '마지막'], [{ id: 'e', text: '해야 할 일을 적어요', motif: 'leaf' }, { id: 'f', text: '저마다 잘하는 것을 나눠요', motif: 'flower' }, { id: 'g', text: '서로 맞는 역할을 맡아요', motif: 'sun' }], ['e', 'f', 'g'], 0.2),
              SO('모둠이 규칙을 고쳐 가며 함께 해낸 이야기를 차례대로 놓아 보세요.', '우리 모둠 이야기', ['처음', '다음', '그다음', '끝'], [{ id: 'h', text: '한 친구가 활동에서 소외돼요', motif: 'cloud' }, { id: 'i', text: '그 친구에게 편한 방법을 물어요', motif: 'sun' }, { id: 'j', text: '역할과 규칙을 바꿔요', motif: 'leaf' }, { id: 'k', text: '모두 함께 발표를 마쳐요', motif: 'star' }], ['h', 'i', 'j', 'k'], 0.25,
                { conclude: '어려움을 찾고, 묻고, 함께 정하고, 해 보고 고치면 모두가 참여할 수 있어요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"규칙을 바꾸는 것은 봐주는 것일까요, 같은 기회를 주는 것일까요?" 두세 명의 생각을 듣는다. 출구 1번에서 "빼 주기"를 배려로 고른 학생에게 배려와 배제의 차이를 짚는다. 2번에서 "똑같은 규칙이 늘 공정하다"를 고른 학생에게 안경 비유를 다시 떠올리게 한다.',
          exit: [
            { type: 'tool', tool: 'emotion', options: { mode: 'branch', situation: '모둠 보고서를 쓰는데, 손으로 글씨 쓰기가 어려운 친구가 있어요.', choices: [
              { id: 'ask', text: '말로 의견 내기나 타자 치기를 제안해요', result: '친구가 편한 방법으로 의견을 보태 보고서가 풍성해져요.', mood: '뿌듯함' },
              { id: 'exempt', text: '쓰기 어려우니 빼 줘요', result: '친구는 모둠에서 밀려난 느낌이 들어요.', mood: '외로움', why: '빼는 것은 배려가 아니라 배제예요.' },
              { id: 'same', text: '똑같이 손으로 쓰라고 해요', result: '친구가 힘들어하고 시간 안에 못 끝내요.', mood: '속상함', why: '방법을 바꾸면 같은 몫을 할 수 있어요.' }] }, state: { choice: null }, prompt: '손으로 글씨 쓰기가 어려운 친구와 모둠 보고서를 쓸 때 어떻게 할지 골라 보세요.', target: { choice: 'ask' }, difficulty: 0.15 },
            { type: 'choice', prompt: '통합학급에서 규칙을 조정하는 것에 대한 설명으로 알맞은 것은 무엇인가요?', options: ['봐주는 것이라 불공정해요', '모두가 같은 기회를 갖게 하는 거예요', '어려운 친구를 빼는 거예요'], answer: 1, difficulty: 0.1, explain: '조정은 모두가 같은 출발선에서 참여하도록 돕는 거예요.' },
            { type: 'short', prompt: '우리 반 모둠 활동에서 모두가 참여하도록 바꾸고 싶은 규칙을 한 문장으로 쓰세요.' },
            MOOD,
          ],
        },
        ws: {
          title: '모두 참여하는 모둠 활동',
          items: [
            { type: 'table', prompt: '참여를 넓히는 조정이면 ○, 막는 조정이면 ×를 쓰세요.', columns: ['조정', '○ / ×'], cells: [['그림 카드로 의견 내기', ''], ['빨리 못 하면 빼기', ''], ['굴리는 공 규칙', ''], ['묻지 않고 대신 정하기', '']], answer: '○, ×, ○, ×' },
            { type: 'choice', prompt: '친구를 위해 방법을 바꿀 때 가장 먼저 할 일에 ○ 하세요.', options: ['우리끼리 정해요', '그 친구에게 편한 방법을 물어요', '친구를 쉬게 해요'], answer: '그 친구에게 편한 방법을 물어요' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '어려운 친구를 활동에서 빼는 것은 배려가 아니라 ___예요.', answer: '배제' },
            { type: 'short', prompt: '내가 모둠에서 맡고 싶은 역할과 그 까닭을 쓰세요.' },
          ],
          easy: {
            note: '"모두가 함께하려면 무엇을 바꿀까?"를 떠올려 보세요.',
            items: [
              { type: 'choice', prompt: '함께하는 방법에 ○ 하세요.', options: ['편한 방법 묻기', '빼 주기'], answer: '편한 방법 묻기' },
              { type: 'table', prompt: '좋은 조정이면 ○, 아니면 ×를 쓰세요.', columns: ['조정', '○ / ×'], cells: [['역할 나누기', ''], ['재촉하기', ''], ['규칙 함께 정하기', '']], answer: '○, ×, ○' },
              { type: 'draw', prompt: '모둠 친구들이 역할을 나눠 활동하는 모습을 그려 보세요.' },
              { type: 'short', prompt: '내가 잘하는 모둠 역할을 쓰세요.' },
            ],
          },
        },
        diff: DIFF('갈림길 결과가 처음부터 보이고, 차례 카드는 맞는 자리에 놓으면 바로 알려 줘요.', '"쉬게 해요"처럼 배려처럼 보이는 배제를 가려내고, 카드 순서가 섞여 나와요.'),
        notes: '자주 보이는 어려움: ① 똑같은 규칙만이 공정하다고 여긴다 → 같은 기회를 주는 조정(안경 비유)과 견준다. ② 활동에서 빼 주는 것을 배려로 여긴다 → 배려와 배제를 구별하게 한다. ③ 당사자에게 묻지 않고 대신 정한다 → 묻고 함께 정하는 것이 먼저임을 짚는다. 반의 장애 학생을 예로 들거나 그 학생의 어려움을 공개적으로 말하지 않는다.',
      }),
    ],
  });
})();
