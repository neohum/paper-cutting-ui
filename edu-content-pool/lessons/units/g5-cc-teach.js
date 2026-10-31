/* 5학년 창체 법정교육 — 교육활동 존중(침해 예방) (1차시). 근거: 교원의 지위 향상 및 교육활동 보호를 위한 특별법 제24조·시행령 제21조(연 1회 이상 학생 예방교육). 장면·인물은 가상(가명 한 글자).
 */
(function () {
  const G = 5, CODE = 'teach';
  const UNIT = `g${G}-창체-${CODE}`;
  const TITLE = '교육활동 존중(침해 예방)';
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
    flow: '5학년 교육활동 존중 단원은 선생님과 생각이 다를 때 의견을 바르게 전하는 법을 익히는 1차시입니다. 선생님께 하는 욕설·위협·몰래 촬영처럼 교육활동을 해치는 행동과 예의 바른 의견 전달을 카드로 가르고, 억울하거나 불만이 생긴 갈림길에서 때·곳·말투를 골라 의견을 전하는 길을 살펴봅니다. 4학년(수업 시간 배움 지키기)에서 한 걸음 나아가 "다른 생각을 존중하며 말하기"를 다루고, 6학년(온라인에서의 존중)으로 이어집니다. 근거는 「교원의 지위 향상 및 교육활동 보호를 위한 특별법」 제24조·같은 법 시행령 제21조의 학생 대상 교육활동 침해행위 예방교육(연 1회 이상)이며, 모든 장면은 가상 인물로 다룹니다.',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '억울할 때 선생님께 의견을 바르게 전하는 길 고르기',
        objective: '선생님께 하는 욕설·위협·몰래 촬영이 교육활동을 해치는 행동임을 알고, 의견을 알맞은 때와 말투로 전하는 방법을 고를 수 있다.',
        draw: 'a paper child calmly talking with a teacher at a desk after class, a speech bubble with a small heart between them, paper books stacked nearby',
        banner: '다른 생각도 예의 있게', extra: [{ motif: 'flower', x: 300, y: 222, color: 'rose' }],
        intro: {
          teacher: '"선생님 생각과 내 생각이 다를 때, 말해도 될까요?" 두세 명의 대답을 듣고(기다릴 반응: "말해도 돼요", "혼날 것 같아요") 시연 단추로 바르게 전하는 말과 상처 주는 말이 나뉘는 모습을 보여 준다. "화가 나면 소리쳐도 돼요"가 나오면 "소리치면 내 생각이 더 잘 전해질까요?"라고 되묻는다. 오늘은 의견을 존중하는 방법으로 전하는 길을 고른다고 밝힌다.',
          student: '누군가에게 부탁하거나 의견을 말할 때 듣기 좋았던 말투를 짝에게 말해 봅시다.',
          demo: { tool: 'mindmap', options: { topic: '의견 전하기', slots: ['바르게 전해요', '상처를 줘요'], cards: ['수업 뒤 찾아가 말해요', '책상을 치며 따져요'], shuffle: false }, sequence: [{ sort: { '바르게 전해요': ['수업 뒤 찾아가 말해요'], '상처를 줘요': ['책상을 치며 따져요'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 교육활동을 해치는 행동 가려내기', minutes: 13, tool: 'mindmap',
            teacher: '"이 행동은 선생님의 가르치는 일을 어떻게 할까요?" 1번에서 "몰래 찍어서 친구에게만 보여요"를 괜찮다고 여기는 학생에게 "허락 없이 찍힌 내 모습이 돌면 어떨까요?"라고 묻는다. 2번은 위협하는 말·물건 던지기가 선생님을 다치게 하는 침해 행동이라는 점을 짚는다. 3번에서 의견을 말하는 것 자체는 잘못이 아니라는 점을 꼭 말해 준다 — 문제는 의견이 아니라 방법이다.',
            task: '선생님께 하는 행동을 교육활동을 해치는 것과 존중하는 것으로 가려요.',
            levels: LV,
            items: [
              MS('선생님께 하는 행동을 존중과 침해로 나누어 보세요.', '선생님께', ['존중해요', '교육활동 침해'], ['허락 없이 몰래 찍어요', '궁금한 점을 물어요', '수업 중 욕을 해요', '"제 생각은요" 하고 말해요'], { '존중해요': ['궁금한 점을 물어요', '"제 생각은요" 하고 말해요'], '교육활동 침해': ['허락 없이 몰래 찍어요', '수업 중 욕을 해요'] }, 0.15),
              MP('선생님을 다치게 하거나 겁주는 행동만 골라 담아 보세요.', '겁주는 행동', ['물건을 던져요', '"가만 안 둬요" 해요', '고개 숙여 인사해요', '조용히 손을 들어요'], ['물건을 던져요', '"가만 안 둬요" 해요'], 0.2),
              MM('상황과 알맞은 행동을 이어 보세요. 맞지 않는 카드는 남겨요.', '이럴 땐', [{ id: 's1', label: '선생님 설명이 이해되지 않아요.' }, { id: 's2', label: '내 점수가 잘못된 것 같아요.' }, { id: 's3', label: '모둠 정하기가 불공평한 것 같아요.' }], ['손 들고 다시 물어요', '수업 뒤 찾아가 여쭤요', '학급 회의에 의견 내요', '단톡방에 흉봐요'], { s1: '손 들고 다시 물어요', s2: '수업 뒤 찾아가 여쭤요', s3: '학급 회의에 의견 내요' }, 0.25,
                { conclude: '의견을 말하는 것은 잘못이 아니에요. 문제는 의견이 아니라 전하는 방법이에요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 억울한 순간, 존중하며 말하는 길 고르기', minutes: 14, tool: 'emotion',
            teacher: '"이렇게 말하면 선생님은 내 생각을 들어 줄 수 있을까요?" 결과 칸을 읽고 까닭을 말하게 한다. 1번에서 그 자리에서 크게 따지는 보기를 고르는 학생에게 "모두가 보는 앞에서 소리치면 선생님도 친구들도 어떤 마음일까요?"라고 묻는다. 2번은 보호자에게 말해 함께 학교와 이야기하는 것도 바른 길임을 짚는다. 3번에서 친구가 선생님을 찍어 올리자고 할 때 거절하는 것도 존중임을 말해 준다.',
            task: '억울하거나 불만이 생긴 상황에서 어떻게 할지 고르고, 그 결과를 살펴봐요.',
            levels: LVB,
            items: [
              EB('준이는 떠들지 않았는데 주의를 받아 억울해요. 어떻게 할까요?', '모둠에서 다른 친구가 떠들었는데, 선생님이 준이에게 "조용히 하자"고 했어요.', [
                { id: 'shout', text: '그 자리에서 크게 따져요', result: '수업이 멈추고 모두 어색해져요.', mood: '화남', why: '억울해도 소리치면 내 말이 잘 전해지지 않아요.' },
                { id: 'later', text: '수업 뒤 차분히 말씀드려요', result: '선생님이 사정을 듣고 오해가 풀려요.', mood: '안심' },
                { id: 'sulk', text: '하루 종일 대답을 안 해요', result: '오해는 그대로이고 마음만 무거워요.', mood: '속상함', why: '말하지 않으면 선생님은 사정을 알 수 없어요.' }], 'later', 0.15),
              EB('수행평가 결과가 이해되지 않아요. 하는 어떻게 할까요?', '하는 열심히 한 만들기 과제의 점수가 생각보다 낮아서 까닭이 궁금해요.', [
                { id: 'post', text: '단톡방에 선생님 욕을 써요', result: '글이 퍼져 선생님이 상처받고 하도 곤란해져요.', mood: '걱정', why: '뒤에서 흉보는 글은 교육활동을 해쳐요.' },
                { id: 'ask', text: '평가 기준을 여쭤봐요', result: '부족한 점을 알고 다음 과제를 준비해요.', mood: '뿌듯함' },
                { id: 'rip', text: '과제물을 찢어 버려요', result: '까닭도 모른 채 노력만 버려져요.', mood: '슬픔', why: '궁금한 점은 물어보면 풀 수 있어요.' }], 'ask', 0.2),
              EB('친구가 화난 선생님 모습을 찍어 올리자고 해요. 어떻게 할까요?', '선생님이 소란을 멈추라고 크게 말하는 순간, 친구가 몰래 찍어 올리자고 속삭여요.', [
                { id: 'film', text: '재밌겠다며 함께 찍어요', result: '영상이 퍼져 선생님이 큰 상처를 받아요.', mood: '슬픔', why: '허락 없는 촬영과 게시는 교육활동 침해예요.' },
                { id: 'stop', text: '"찍으면 안 돼" 하고 말려요', result: '친구가 휴대전화를 넣고 수업이 이어져요.', mood: '안심' },
                { id: 'watch', text: '내가 안 찍으면 상관없어요', result: '영상이 퍼지는 것을 아무도 막지 못해요.', mood: '걱정', why: '말리는 한마디가 선생님과 친구를 지켜요.' }], 'stop', 0.25,
                { conclude: '알맞은 때와 곳, 예의 바른 말투로 전하면 다른 생각도 존중받아요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 배운 의견 전하기 방법 가운데 써 보고 싶은 것은 무엇인가요?" 출구 1번에서 짝에게만 불평하는 보기를 고른 학생에게 학급 회의처럼 의견을 모으는 자리가 있음을 짚는다. 2번에서 "참고 아무 말도 안 해요"를 고른 학생에게 의견을 말하는 것 자체는 잘못이 아니라고 다시 말해 준다.',
          exit: [
            { type: 'tool', tool: 'emotion', options: { mode: 'branch', situation: '청소 당번 정하는 방식이 불공평하다고 느낀 도가 바꾸자고 하고 싶어요.', choices: [
              { id: 'meet', text: '학급 회의에 의견을 내요', result: '친구들과 선생님이 함께 새 방식을 정해요.', mood: '뿌듯함' },
              { id: 'grumble', text: '짝에게만 불평해요', result: '불만은 커지고 방식은 그대로예요.', mood: '속상함', why: '의견을 모으는 자리에서 말해야 바뀔 수 있어요.' },
              { id: 'refuse', text: '청소를 안 하고 버텨요', result: '친구들이 대신 치우느라 힘들어해요.', mood: '화남', why: '버티기보다 말로 의견을 전해요.' }] }, state: { choice: null }, prompt: '불공평하다고 느낄 때 어떻게 할지 골라 보세요.', target: { choice: 'meet' }, difficulty: 0.15 },
            { type: 'choice', prompt: '선생님과 생각이 다를 때 알맞은 태도는 무엇인가요?', options: ['참고 아무 말도 안 해요', '알맞은 때에 예의 있게 말해요', '친구들 앞에서 크게 따져요'], answer: 1, difficulty: 0.1, explain: '의견은 존중하는 방법으로 전하면 돼요.' },
            { type: 'short', prompt: '선생님께 의견을 전할 때 쓸 첫마디를 한 문장으로 쓰세요.' },
            MOOD,
          ],
        },
        ws: {
          title: '의견을 바르게 전하는 법',
          items: [
            { type: 'table', prompt: '존중하는 행동이면 ○, 교육활동을 해치면 ×를 쓰세요.', columns: ['행동', '○ / ×'], cells: [['평가 기준을 여쭤봐요', ''], ['선생님을 몰래 찍어요', ''], ['학급 회의에 의견 내요', ''], ['선생님께 욕을 해요', '']], answer: '○, ×, ○, ×' },
            { type: 'choice', prompt: '억울하게 주의를 받았을 때 알맞은 행동에 ○ 하세요.', options: ['그 자리에서 소리쳐요', '수업 뒤 차분히 말씀드려요', '대답을 안 해요'], answer: '수업 뒤 차분히 말씀드려요' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '의견을 말하는 것은 잘못이 아니에요. 중요한 것은 전하는 ___이에요.', answer: '방법' },
            { type: 'short', prompt: '친구가 선생님을 몰래 찍자고 할 때 할 말을 쓰세요.' },
          ],
          easy: {
            note: '"이렇게 말하면 상대가 내 말을 들어 줄까?"를 생각해 보세요.',
            items: [
              { type: 'choice', prompt: '예의 바른 말에 ○ 하세요.', options: ['"제 생각은 이래요"', '"그게 말이 돼요?"'], answer: '"제 생각은 이래요"' },
              { type: 'table', prompt: '좋은 행동이면 ○, 아니면 ×를 쓰세요.', columns: ['행동', '○ / ×'], cells: [['궁금한 점을 물어요', ''], ['물건을 던져요', ''], ['차분히 말해요', '']], answer: '○, ×, ○' },
              { type: 'draw', prompt: '선생님과 차분히 이야기하는 모습을 그려 보세요.' },
              { type: 'short', prompt: '억울할 때 마음을 가라앉히는 방법을 쓰세요.' },
            ],
          },
        },
        diff: DIFF('카드는 맞는 칸에 놓으면 바로 알려 주고, 갈림길 결과가 처음부터 보여요.', '"내가 안 찍으면 상관없어요"처럼 그럴듯한 보기를 가려내고, 카드 순서가 섞여 나와요.'),
        notes: '자주 보이는 어려움: ① 선생님께 의견을 말하는 것 자체가 버릇없다고 여긴다 → 의견은 존중받을 권리이고 방법이 중요함을 짚는다. ② 몰래 촬영·뒤에서 흉보는 글을 가벼운 장난으로 여긴다 → 교육활동 침해가 될 수 있고 선생님도 상처받는 사람임을 말한다. ③ 화가 난 순간에 바로 따지는 것을 정직함으로 여긴다 → 알맞은 때·곳·말투를 고르는 연습을 한다. 실제 학급의 갈등 사례를 끌어오지 않는다.',
      }),
    ],
  });
})();
