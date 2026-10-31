/* 4학년 창체 법정교육 — 교육활동 존중(침해 예방) (1차시). 근거: 교원의 지위 향상 및 교육활동 보호를 위한 특별법 제24조·시행령 제21조(연 1회 이상). 장면·인물은 가상(가명 한 글자).
 */
(function () {
  const G = 4, CODE = 'teach';
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
    flow: '4학년 교육활동 존중 단원은 수업 시간을 "모두의 배움을 지키는 시간"으로 바라보는 1차시입니다. 수업을 방해하는 행동과 선생님·친구의 배움을 지키는 행동을 교실 장면 카드로 가르고, 수업 중 생긴 갈림길에서 존중하는 선택과 그 결과를 살펴본 뒤 우리 반 수업 약속을 세웁니다. 근거는 「교원의 지위 향상 및 교육활동 보호를 위한 특별법」 제24조·같은 법 시행령 제21조의 학생 대상 교육활동 침해행위 예방교육(연 1회 이상)이며, 학생을 잘잘못으로 지목하지 않고 가상 인물 장면으로만 다룹니다. 5학년(선생님께 의견 바르게 전하기)·6학년(온라인에서의 존중) 단원으로 이어집니다.',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '수업 장면 카드로 배움을 지키는 행동 가르기',
        objective: '수업을 방해하는 행동과 선생님·친구의 배움을 지키는 행동을 구별하고, 수업 중 갈림길에서 존중하는 행동을 고를 수 있다.',
        draw: 'a paper classroom where a teacher points to a paper chalkboard while children raise hands and listen, small paper stars floating above the desks',
        banner: '모두의 배움을 지켜요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }],
        intro: {
          teacher: '"수업 시간은 누구의 시간일까요?" 두세 명의 대답을 듣고(기다릴 반응: "선생님 시간이요", "우리 모두의 시간이요") 시연 단추로 배움을 지키는 행동과 방해하는 행동이 나뉘는 모습을 보여 준다. "나 혼자 떠드는 건 괜찮아요"가 나오면 "한 사람이 떠들면 몇 명의 배움이 멈출까요?"라고 되묻는다. 오늘은 선생님과 친구 모두의 배움을 지키는 행동을 고른다고 밝힌다.',
          student: '수업이 잘 될 때 우리 반은 어떤 모습인지 짝에게 한 가지 말해 봅시다.',
          demo: { tool: 'mindmap', options: { topic: '수업 시간', slots: ['배움을 지켜요', '배움을 방해해요'], cards: ['손 들고 말해요', '큰 소리로 끼어들어요'], shuffle: false }, sequence: [{ sort: { '배움을 지켜요': ['손 들고 말해요'], '배움을 방해해요': ['큰 소리로 끼어들어요'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 배움을 지키는 행동과 방해하는 행동 나누기', minutes: 13, tool: 'mindmap',
            teacher: '"이 행동을 하면 선생님과 친구들의 배움은 어떻게 될까요?" 카드를 놓을 때마다 누구의 배움이 멈추는지 말하게 한다. 2번에서 "선생님 말을 흉내 내요"를 장난으로 놓는 학생에게 "흉내를 들은 선생님 마음은 어떨까요?"라고 묻는다. 3번은 선생님께 하는 무례한 말도 교육활동을 해치는 행동이라는 점을 짚되, 특정 학생을 떠올리게 하지 않는다.',
            task: '수업 장면 카드를 배움을 지키는 행동과 방해하는 행동으로 나누어요.',
            levels: LV,
            items: [
              MS('수업 시간의 행동을 배움을 지키는 것과 방해하는 것으로 나누어 보세요.', '수업 시간', ['배움을 지켜요', '배움을 방해해요'], ['말하는 사람을 봐요', '친구 의자를 툭툭 차요', '질문은 손 들고 해요', '돌아다니며 장난쳐요'], { '배움을 지켜요': ['말하는 사람을 봐요', '질문은 손 들고 해요'], '배움을 방해해요': ['친구 의자를 툭툭 차요', '돌아다니며 장난쳐요'] }, 0.1),
              MS('선생님을 존중하는 행동과 존중하지 않는 행동으로 나누어 보세요.', '선생님께', ['존중해요', '존중하지 않아요'], ['선생님 말을 흉내 내요', '인사를 먼저 해요', '지시를 끝까지 들어요', '대답 대신 비웃어요'], { '존중해요': ['인사를 먼저 해요', '지시를 끝까지 들어요'], '존중하지 않아요': ['선생님 말을 흉내 내요', '대답 대신 비웃어요'] }, 0.2),
              MP('선생님과 친구의 배움을 해치는 행동만 골라 담아 보세요.', '배움을 해치는 행동', ['선생님께 욕을 해요', '수업 중 게임을 켜요', '모둠 친구를 도와요', '준비물을 챙겨 와요'], ['선생님께 욕을 해요', '수업 중 게임을 켜요'], 0.25,
                { conclude: '수업은 선생님과 친구 모두의 배움이 함께 자라는 시간이에요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 수업 중 갈림길에서 존중하는 길 고르기', minutes: 14, tool: 'emotion',
            teacher: '"이렇게 하면 수업과 선생님 마음은 어떻게 될까요?" 결과 칸을 소리 내어 읽게 한다. 1번에서 지적을 받았을 때 "나만 혼났다"며 큰 소리로 따지는 보기를 고르는 학생에게, 억울할 때도 수업이 끝난 뒤 차분히 말할 수 있다는 것을 짚는다. 3번은 친구가 선생님을 놀리자고 할 때 거절하는 것도 배움을 지키는 용기라는 점을 말해 준다.',
            task: '수업 중에 생긴 상황에서 어떻게 할지 고르고, 그 결과를 살펴봐요.',
            levels: LVB,
            items: [
              EB('수업 중 떠들다 선생님께 주의를 받았어요. 준이는 어떻게 할까요?', '모둠 친구와 떠들던 준이에게 선생님이 "지금은 발표를 들을 시간이에요"라고 말했어요.', [
                { id: 'ok', text: '"네" 하고 발표를 들어요', result: '발표가 이어지고 준이도 내용을 알게 돼요.', mood: '편안함' },
                { id: 'shout', text: '"왜 나만요!" 하고 소리쳐요', result: '수업이 멈추고 모두 불편해져요.', mood: '화남', why: '억울하면 수업이 끝난 뒤 차분히 말할 수 있어요.' },
                { id: 'mock', text: '선생님 말투를 따라 해요', result: '선생님과 친구들이 상처받고 수업이 늦어져요.', mood: '속상함', why: '흉내는 선생님을 존중하지 않는 행동이에요.' }], 'ok', 0.15),
              EB('발표하는 친구가 말을 더듬어요. 하는 어떻게 할까요?', '하의 짝이 앞에 나와 발표하다가 긴장해서 말을 자꾸 더듬어요.', [
                { id: 'laugh', text: '킥킥 웃으며 따라 해요', result: '짝이 발표를 멈추고 얼굴이 빨개져요.', mood: '부끄러움', why: '친구의 배움을 방해하고 마음을 다치게 해요.' },
                { id: 'wait', text: '조용히 기다리며 들어요', result: '짝이 숨을 고르고 발표를 끝마쳐요.', mood: '뿌듯함' },
                { id: 'talk', text: '옆 친구와 딴 이야기해요', result: '짝도 듣는 친구도 집중하지 못해요.', mood: '걱정', why: '들어 주는 것도 수업에 참여하는 방법이에요.' }], 'wait', 0.2),
              EB('친구가 선생님 몰래 놀리는 쪽지를 돌리자고 해요. 어떻게 할까요?', '쉬는 시간에 친구가 선생님을 놀리는 그림 쪽지를 반에 돌리자고 해요.', [
                { id: 'join', text: '재밌겠다며 같이 그려요', result: '쪽지를 본 선생님이 크게 상처받아요.', mood: '슬픔', why: '놀리는 쪽지는 선생님의 마음과 교육활동을 해쳐요.' },
                { id: 'no', text: '"그건 안 돼" 하고 거절해요', result: '친구도 멈추고 쪽지는 돌지 않아요.', mood: '안심' },
                { id: 'pass', text: '나는 안 그리고 전해만 줘요', result: '쪽지가 퍼져 더 많은 사람이 보게 돼요.', mood: '걱정', why: '전해 주는 것도 놀림을 키우는 일이에요.' }], 'no', 0.25,
                { conclude: '선생님과 친구를 존중하는 선택이 모두의 배움을 지켜요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘부터 우리 반 수업에서 꼭 지킬 약속 하나는 무엇일까요?" 두세 명의 약속을 칠판에 적는다. 출구 1번에서 모둠 친구 의견을 끊는 보기를 고른 학생에게 끝까지 듣는 것이 배움을 지키는 일임을 짚는다. 2번에서 "선생님이 안 볼 때는 괜찮다"를 고른 학생에게는 존중은 보는 사람이 있을 때만 하는 것이 아니라고 말해 준다.',
          exit: [
            { type: 'tool', tool: 'emotion', options: { mode: 'branch', situation: '모둠 토의 중 친구가 의견을 말하는데, 도는 자기 생각이 더 좋다며 말을 끊고 싶어요.', choices: [
              { id: 'listen', text: '끝까지 듣고 내 생각을 말해요', result: '두 의견을 모아 더 좋은 답이 나와요.', mood: '뿌듯함' },
              { id: 'cut', text: '말을 끊고 내 말부터 해요', result: '친구가 입을 닫고 토의가 멈춰요.', mood: '속상함', why: '끝까지 듣는 것이 친구의 배움을 지키는 일이에요.' },
              { id: 'ignore', text: '듣는 척하고 딴짓해요', result: '모둠 활동에서 도의 몫이 빠져요.', mood: '걱정', why: '딴짓은 내 배움과 모둠의 배움을 함께 멈춰요.' }] }, state: { choice: null }, prompt: '모둠 토의에서 어떻게 할지 골라 보세요.', target: { choice: 'listen' }, difficulty: 0.15 },
            { type: 'choice', prompt: '선생님을 존중하는 행동에 대한 설명으로 알맞은 것은 무엇인가요?', options: ['선생님이 볼 때만 바르게 해요', '언제나 예의 바르게 말하고 들어요', '친구들이 하면 따라 해도 돼요'], answer: 1, difficulty: 0.1, explain: '존중은 보는 사람이 없어도 지키는 약속이에요.' },
            { type: 'short', prompt: '친구의 배움을 지키기 위해 내가 할 행동을 한 문장으로 쓰세요.' },
            MOOD,
          ],
        },
        ws: {
          title: '모두의 배움을 지키는 수업 약속',
          items: [
            { type: 'table', prompt: '배움을 지키는 행동이면 ○, 방해하는 행동이면 ×를 쓰세요.', columns: ['행동', '○ / ×'], cells: [['손 들고 질문해요', ''], ['선생님 말투를 흉내 내요', ''], ['발표를 조용히 들어요', ''], ['수업 중 게임을 해요', '']], answer: '○, ×, ○, ×' },
            { type: 'choice', prompt: '주의를 받았을 때 알맞은 행동에 ○ 하세요.', options: ['큰 소리로 따져요', '"네" 하고 다시 집중해요', '선생님을 흉내 내요'], answer: '"네" 하고 다시 집중해요' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '수업은 선생님과 친구 모두의 ___이 자라는 시간이에요.', answer: '배움' },
            { type: 'short', prompt: '우리 반 수업 약속을 하나 만들어 쓰세요.' },
          ],
          easy: {
            note: '"이렇게 하면 친구가 잘 배울 수 있을까?"를 떠올려 보세요.',
            items: [
              { type: 'choice', prompt: '수업을 돕는 행동에 ○ 하세요.', options: ['말하는 사람을 봐요', '돌아다니며 장난쳐요'], answer: '말하는 사람을 봐요' },
              { type: 'table', prompt: '좋은 행동이면 ○, 아니면 ×를 쓰세요.', columns: ['행동', '○ / ×'], cells: [['인사를 해요', ''], ['욕을 해요', ''], ['끝까지 들어요', '']], answer: '○, ×, ○' },
              { type: 'draw', prompt: '모두가 열심히 배우는 우리 반 모습을 그려 보세요.' },
              { type: 'short', prompt: '선생님께 드리고 싶은 고마운 말을 쓰세요.' },
            ],
          },
        },
        diff: DIFF('카드는 맞는 칸에 놓으면 바로 알려 주고, 갈림길 결과가 처음부터 보여요.', '"전해만 줘요"처럼 그럴듯한 보기를 가려내고, 카드 순서가 섞여 나와요.'),
        notes: '자주 보이는 어려움: ① 수업 방해를 나 혼자의 일로 여긴다 → 한 사람의 행동이 모두의 배움을 멈춘다는 점을 짚는다. ② 선생님 흉내·놀리는 쪽지를 장난으로 여긴다 → 선생님도 마음을 다치는 사람이며 교육활동을 해치는 행동임을 말한다. ③ 억울함을 그 자리에서 소리치는 것으로 푼다 → 수업 뒤 차분히 말하는 방법을 알려 준다. 실제 반 학생의 사례를 들지 않고 가상 인물로만 다룬다.',
      }),
    ],
  });
})();
