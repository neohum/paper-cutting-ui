/* 6학년 창체 법정교육 — 인터넷·스마트폰 과의존 예방 (2차시). 근거: 지능정보화 기본법 제54조(학기별 1회 이상). g6-cc-saf-cyber 차시와 겹치지 않게 AI 챗봇 의존·학급 캠페인에 초점. 장면·인물은 가상(가명 한 글자).
 */
(function () {
  const G = 6, CODE = 'digital';
  const UNIT = `g${G}-창체-${CODE}`;
  const TITLE = '인터넷·스마트폰 과의존 예방';
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
    flow: '6학년 인터넷·스마트폰 과의존 예방 단원은 새로운 디지털 도구에 기대는 습관을 스스로 점검하고, 배운 것을 학급 캠페인으로 나누는 2차시입니다. 1차시에는 숙제·고민·대화를 AI 챗봇에 모두 맡기는 의존을 알아차리고, 스스로 할 일과 도움받아도 되는 일, 믿는 사람에게 털어놓아야 할 일을 가릅니다. 2차시에는 과의존 예방 캠페인의 주제·문구·실천 차례를 정하고 동생과 가족에게 알리는 계획을 세웁니다. 근거는 지능정보화 기본법 제54조(학기별 1회 이상)이며, 숏폼·게임 과몰입·도박성 게임·조절 도구·과의존 친구 돕기는 같은 학년 사이버 중독 예방(g6-cc-saf-cyber) 단원이 다루므로 되풀이하지 않고, 사이버 중독 예방(g6-cc-saf-cyber) 단원과 연계해 시수 인정 가능(학교 결정)합니다. 4학년(잠·함께 있는 시간), 5학년(심심함·답장 압박)에서 이어지는 단원입니다.',
    refs: {},
    lessons: [
      // ───────────────────────────── 1차시
      LESSON(1, {
        title: 'AI 챗봇에 맡길 일과 스스로 할 일 가르기',
        objective: '숙제·고민·대화를 AI 챗봇에 모두 맡기는 의존을 알아차리고, 스스로 할 일·도움받아도 되는 일·믿는 사람에게 말할 일을 가를 수 있다.',
        draw: 'a paper child at a desk with a notebook and pencil, a friendly paper robot on a tablet offering a small hint card, and a teacher figure waving nearby',
        banner: '생각은 내가 먼저', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }],
        intro: {
          teacher: '"독후감을 AI 챗봇이 대신 써 주면 내 생각은 얼마나 자랄까요?" 두세 명의 대답을 듣고(기다릴 반응: "안 자라요", "빨리 끝나서 좋아요") 시연 단추로 스스로 할 일과 도움받아도 되는 일이 나뉘는 모습을 보여 준다. "어차피 AI가 더 잘 써요"가 나오면 "운동을 대신 해 주는 로봇이 있다면 내 근육은 자랄까요?"라고 되묻는다. 오늘은 AI 챗봇을 쓸 때 기대는 습관을 점검하고 쓸 일과 스스로 할 일을 가른다고 밝힌다. AI 챗봇 이용 연령·약관은 서비스마다 다르므로 보호자·선생님과 함께 쓴다는 원칙을 먼저 말한다.',
          student: 'AI 챗봇이나 검색이 도움이 되었던 일과 오히려 아쉬웠던 일을 짝에게 하나씩 말해 봅시다(가상 인물 이야기로 해도 돼요).',
          demo: { tool: 'mindmap', options: { topic: 'AI 챗봇 쓰기', slots: ['스스로 해요', '도움받아도 돼요'], cards: ['독후감 내 생각 쓰기', '모르는 낱말 뜻 찾기'], shuffle: false }, sequence: [{ sort: { '스스로 해요': ['독후감 내 생각 쓰기'], '도움받아도 돼요': ['모르는 낱말 뜻 찾기'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 스스로 할 일과 도움받을 일 나누기', minutes: 13, tool: 'mindmap',
            teacher: '"이 일을 AI 챗봇에 맡기면 무엇을 잃을까요?" 1번에서 내 생각·내 경험이 담겨야 하는 일은 스스로 해야 한다는 기준을 세운다. 2번에서 챗봇의 답이 틀릴 수 있어 확인이 필요하다는 점을 짚는다. 3번에서 깊은 고민이나 힘든 마음은 챗봇이 아니라 믿는 사람(보호자·선생님·Wee클래스)에게 말해야 한다는 점을 분명히 한다.',
            task: 'AI 챗봇 쓰기 상황을 스스로 할 일과 도움받아도 되는 일로 나누고, 믿는 사람에게 말할 일을 골라요.',
            levels: LV,
            items: [
              MS('상황을 스스로 할 일과 도움받아도 되는 일로 나누어 보세요.', '누가 할까', ['스스로 해요', '도움받아도 돼요'], ['수학 문제 풀이 과정', '영어 낱말 발음 듣기', '일기에 내 마음 쓰기', '조사할 자료 찾기 시작'], { '스스로 해요': ['수학 문제 풀이 과정', '일기에 내 마음 쓰기'], '도움받아도 돼요': ['영어 낱말 발음 듣기', '조사할 자료 찾기 시작'] }, 0.15),
              MS('AI 챗봇을 쓰는 태도를 건강한 것과 기대는 것으로 나누어 보세요.', '쓰는 태도', ['건강하게 써요', '지나치게 기대요'], ['답을 책으로 확인해요', '힌트만 묻고 내가 풀어요', '답을 그대로 베껴요', '생각하기 전에 먼저 물어요'], { '건강하게 써요': ['답을 책으로 확인해요', '힌트만 묻고 내가 풀어요'], '지나치게 기대요': ['답을 그대로 베껴요', '생각하기 전에 먼저 물어요'] }, 0.2),
              MP('AI 챗봇보다 믿는 사람에게 말해야 할 일만 골라 담아 보세요.', '사람에게 말할 일', ['친구 문제로 너무 힘들어요', '몸이 계속 아파요', '공룡 이름이 궁금해요', '그림 색 조합 추천'], ['친구 문제로 너무 힘들어요', '몸이 계속 아파요'], 0.25,
                { conclude: '내 생각이 담길 일은 스스로, 확인이 필요한 일은 도움받고, 힘든 마음은 믿는 사람에게 말해요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 챗봇에 기대는 갈림길에서 고르기', minutes: 14, tool: 'emotion',
            teacher: '"이렇게 하면 나에게 어떤 일이 생길까요?" 결과 칸을 읽고 까닭을 말하게 한다. 1번에서 과제를 통째로 맡기면 내 실력도, 정직함도 잃는다는 점을 짚는다. 2번에서 밤늦게까지 챗봇과 대화하느라 잠과 친구 관계가 줄어드는 것도 과의존 신호임을 말한다. 3번은 챗봇에 이름·학교 같은 개인정보를 넣지 않는 원칙을 함께 말해 본다.',
            task: 'AI 챗봇을 쓰는 상황에서 어떻게 할지 고르고, 그 결과를 살펴봐요.',
            levels: LVB,
            items: [
              EB('준이가 내일까지 낼 독서 감상문을 아직 시작하지 못했어요. 어떻게 할까요?', '준이는 내일까지 낼 독서 감상문을 미루다가 밤이 되었고, 챗봇에 "대신 써 줘"라고 치려 해요.', [
                { id: 'copy', text: '챗봇이 쓴 글을 그대로 내요', result: '선생님이 질문하자 아무 대답도 못 해 당황해요.', mood: '부끄러움', why: '대신 쓴 글에는 내 생각이 없고 정직하지 않아요.' },
                { id: 'outline', text: '느낀 점을 먼저 적고 맞춤법만 확인해요', result: '조금 늦게 끝났지만 내 생각이 담긴 글이 돼요.', mood: '뿌듯함' },
                { id: 'skip', text: '그냥 내지 않기로 해요', result: '배울 기회도 놓치고 마음도 불편해요.', mood: '걱정', why: '내가 할 수 있는 만큼 스스로 해 보는 것이 먼저예요.' }], 'outline', 0.15),
              EB('하는 요즘 밤마다 챗봇과 몇 시간씩 대화해요. 어떻게 할까요?', '하는 요즘 친구보다 챗봇과 이야기하는 게 편해서 밤마다 몇 시간씩 대화하다 늦게 자요.', [
                { id: 'more', text: '편하니까 계속 밤에 대화해요', result: '잠이 줄고 친구와 이야기하는 일도 줄어요.', mood: '피곤함', why: '잠과 사람 관계가 줄어드는 것은 과의존 신호예요.' },
                { id: 'limit', text: '시간을 정하고 친구와 이야기를 늘려요', result: '잠이 돌아오고 친구와도 다시 가까워져요.', mood: '편안함' },
                { id: 'hide', text: '보호자 몰래 이불 속에서 해요', result: '더 늦게 자고 보호자와 갈등이 생겨요.', mood: '불안', why: '숨기기보다 보호자와 함께 사용 약속을 정해요.' }], 'limit', 0.2),
              EB('챗봇이 더 잘 도와주겠다며 이름과 학교를 물어요. 서는 어떻게 할까요?', '숙제를 묻던 서에게 챗봇 화면이 "더 정확히 도우려면 이름과 학교를 알려 줘"라고 떠요.', [
                { id: 'give', text: '이름과 학교를 그대로 적어요', result: '내 개인정보가 어디에 쓰일지 알 수 없게 돼요.', mood: '불안', why: '챗봇에도 이름·학교·연락처 같은 개인정보는 넣지 않아요.' },
                { id: 'no', text: '개인정보 없이 질문만 다시 해요', result: '숙제 도움은 그대로 받고 내 정보는 지켜요.', mood: '안심' },
                { id: 'friend', text: '친구 이름을 대신 적어요', result: '친구의 개인정보가 함부로 쓰이게 돼요.', mood: '걱정', why: '다른 사람의 개인정보도 넣지 않아요.' }], 'no', 0.25,
                { conclude: 'AI 챗봇은 생각을 돕는 도구로, 시간을 정해, 개인정보 없이 써요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"AI 챗봇을 쓸 때 나만의 원칙 하나를 정한다면 무엇인가요?" 두세 명의 원칙을 칠판에 적는다(예: 생각 먼저, 확인하기, 개인정보 넣지 않기, 시간 정하기). 출구 1번에서 "답을 그대로 베끼기"를 건강한 쪽에 놓은 학생에게 내 실력과 정직함을 다시 묻는다. 2번에서 "힘든 고민도 챗봇에게만"을 고른 학생에게는 믿는 사람에게 말해야 한다는 점을 짚는다.',
          exit: [
            { type: 'tool', tool: 'mindmap', options: { topic: '챗봇 쓰는 습관', slots: ['건강해요', '기대요'], cards: ['내 생각 먼저 써 보기', '숙제를 통째로 맡기기', '답이 맞는지 확인하기', '밤새 챗봇과 대화하기'] }, state: { at: {} }, prompt: 'AI 챗봇을 쓰는 습관을 건강한 것과 기대는 것으로 나누어 보세요.',
              target: { sort: { '건강해요': ['내 생각 먼저 써 보기', '답이 맞는지 확인하기'], '기대요': ['숙제를 통째로 맡기기', '밤새 챗봇과 대화하기'] } }, difficulty: 0.2 },
            { type: 'choice', prompt: '마음이 너무 힘든 고민이 생겼을 때 알맞은 행동은 무엇인가요?', options: ['챗봇에게만 털어놓아요', '보호자·선생님 같은 믿는 사람에게 말해요', '아무에게도 말하지 않아요'], answer: 1, difficulty: 0.1, explain: '힘든 마음은 나를 실제로 도와줄 수 있는 믿는 사람에게 말해요.' },
            { type: 'short', prompt: 'AI 챗봇을 쓸 때 지킬 나만의 원칙을 한 문장으로 쓰세요.' },
            MOOD,
          ],
        },
        ws: {
          title: 'AI 챗봇, 생각을 돕는 도구로',
          items: [
            { type: 'table', prompt: '스스로 할 일이면 ○, 도움받아도 되는 일이면 △를 쓰세요.', columns: ['일', '○ / △'], cells: [['일기에 내 마음 쓰기', ''], ['낱말 발음 듣기', ''], ['수학 풀이 과정', ''], ['자료 찾기 시작', '']], answer: '○, △, ○, △' },
            { type: 'choice', prompt: '챗봇이 이름과 학교를 물을 때 알맞은 행동에 ○ 하세요.', options: ['그대로 적어요', '개인정보 없이 질문만 해요', '친구 이름을 적어요'], answer: '개인정보 없이 질문만 해요' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '챗봇의 답은 틀릴 수 있으니 책이나 믿을 만한 자료로 ___해요.', answer: '확인' },
            { type: 'short', prompt: '챗봇보다 믿는 사람에게 말해야 할 일을 두 가지 쓰세요.' },
          ],
          easy: {
            note: '"이 일에 내 생각이 들어가야 할까?"를 떠올려 보세요.',
            items: [
              { type: 'choice', prompt: '스스로 할 일에 ○ 하세요.', options: ['일기 쓰기', '발음 듣기'], answer: '일기 쓰기' },
              { type: 'table', prompt: '좋은 습관이면 ○, 아니면 ×를 쓰세요.', columns: ['습관', '○ / ×'], cells: [['답 확인하기', ''], ['통째로 베끼기', ''], ['시간 정하기', '']], answer: '○, ×, ○' },
              { type: 'draw', prompt: '스스로 생각하며 공부하는 내 모습을 그려 보세요.' },
              { type: 'short', prompt: '챗봇에 넣지 않을 정보를 하나 쓰세요.' },
            ],
          },
        },
        diff: DIFF('카드는 맞는 칸에 놓으면 바로 알려 주고, 갈림길 결과가 처음부터 보여요.', '"힌트만 묻기"와 "통째로 맡기기"처럼 가까운 보기를 가려내고, 카드 순서가 섞여 나와요.'),
        notes: '자주 보이는 어려움: ① AI가 더 잘하니 맡겨도 된다고 여긴다 → 내 생각과 실력이 자라지 않고 정직하지 않다는 점을 짚는다. ② 챗봇의 답을 그대로 믿는다 → 틀릴 수 있어 확인이 필요함을 말한다. ③ 힘든 고민을 챗봇에게만 털어놓는다 → 믿는 사람(보호자·선생님·Wee클래스)에게 말해야 함을 분명히 한다. AI 챗봇 서비스마다 이용 연령과 약관이 다르므로 특정 서비스를 권하지 않고, 학생의 실제 사용 기록을 공개적으로 묻지 않는다.',
      }),

      // ───────────────────────────── 2차시
      LESSON(2, {
        title: '과의존 예방 학급 캠페인 꾸리기',
        objective: '인터넷·스마트폰 과의존 예방 캠페인의 주제와 문구를 고르고, 동생·가족에게 알리는 실천 차례를 정할 수 있다.',
        draw: 'paper children holding colorful campaign signs with a phone and a heart, walking through a paper school hallway with younger students cheering',
        banner: '디지털 균형 캠페인', extra: [{ motif: 'flower', x: 300, y: 222, color: 'peach' }],
        intro: {
          teacher: '"4학년부터 배운 과의존 예방 가운데 동생들에게 꼭 알려 주고 싶은 것은 무엇인가요?" 두세 명의 대답을 듣고(기다릴 반응: "잠들기 전 화면 끄기", "함께 있을 땐 내려놓기") 시연 단추로 캠페인 문구가 좋은 문구와 아쉬운 문구로 나뉘는 모습을 보여 준다. "스마트폰은 나쁘다고만 하면 돼요"가 나오면 "무조건 쓰지 말라는 말을 들으면 지킬 마음이 생길까요?"라고 되묻는다. 오늘은 우리 반 디지털 균형 캠페인을 꾸린다고 밝힌다.',
          student: '동생이나 가족에게 알려 주고 싶은 디지털 습관을 짝에게 한 가지 말해 봅시다.',
          demo: { tool: 'story', options: { cards: [{ id: 'topic', text: '캠페인 주제를 정해요', motif: 'star' }, { id: 'slogan', text: '알릴 문구를 만들어요', motif: 'sun' }], slots: ['먼저', '다음'], shuffle: false }, sequence: [{ order: ['topic', 'slogan'] }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 좋은 캠페인 문구 고르기', minutes: 13, tool: 'mindmap',
            teacher: '"이 문구를 보면 무엇을 하면 되는지 바로 알 수 있을까요?" 1번에서 겁주는 문구보다 할 행동이 보이는 문구가 더 지키기 쉽다는 점을 짚는다. 2번은 캠페인을 볼 사람에 맞는 문구를 잇게 한다. 3번은 사실이 확인되지 않은 숫자나 과장된 말을 쓰지 않는다는 원칙을 짚는다.',
            task: '캠페인 문구를 좋은 것과 아쉬운 것으로 나누고, 볼 사람에 맞는 문구를 이어요.',
            levels: LV,
            items: [
              MS('캠페인 문구를 좋은 문구와 아쉬운 문구로 나누어 보세요.', '문구 고르기', ['좋은 문구', '아쉬운 문구'], ['밥 먹을 땐 폰은 바구니에', '스마트폰은 무조건 나빠', '잠들기 전 화면 끄기', '폰 보면 바보 된다'], { '좋은 문구': ['밥 먹을 땐 폰은 바구니에', '잠들기 전 화면 끄기'], '아쉬운 문구': ['스마트폰은 무조건 나빠', '폰 보면 바보 된다'] }, 0.15),
              MM('캠페인을 볼 사람과 알맞은 문구를 이어 보세요. 맞지 않는 카드는 남겨요.', '누구에게 알릴까', [{ id: 's1', label: '1·2학년 동생들' }, { id: 's2', label: '우리 가족' }, { id: 's3', label: '같은 반 친구들' }], ['화면 끄고 같이 놀자!', '저녁엔 폰 쉬는 시간', '숙제는 생각 먼저', '폰 없으면 못 살아'], { s1: '화면 끄고 같이 놀자!', s2: '저녁엔 폰 쉬는 시간', s3: '숙제는 생각 먼저' }, 0.2),
              MP('캠페인을 만들 때 지킬 원칙만 골라 담아 보세요.', '캠페인 원칙', ['할 행동이 보이게', '확인된 사실만 쓰기', '겁주는 말 쓰기', '모르는 숫자 지어내기'], ['할 행동이 보이게', '확인된 사실만 쓰기'], 0.25,
                { conclude: '좋은 캠페인 문구는 겁주기보다 할 행동을 알려 주고, 확인된 사실만 담아요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 캠페인 실천 차례 정하기', minutes: 14, tool: 'story',
            teacher: '"캠페인을 하려면 무엇부터 해야 할까요?" 1번에서 주제를 정하기 전에 문구부터 만들면 내용이 흩어진다는 점을 짚는다. 2번은 동생 반에 알릴 때의 차례로, 선생님께 먼저 허락을 받는 단계를 빼먹지 않게 한다. 3번은 가족과 함께 실천하는 이야기로, 캠페인이 내 생활부터 바뀌는 데서 시작한다는 점을 정리한다.',
            task: '과의존 예방 캠페인을 꾸리고 알리는 차례를 놓아요.',
            levels: LV,
            items: [
              SO('학급 캠페인을 꾸리는 차례를 놓아 보세요.', '캠페인 꾸리기', ['먼저', '다음', '그다음', '마지막'], [{ id: 'a', text: '알리고 싶은 주제를 정해요', motif: 'star' }, { id: 'b', text: '할 행동이 보이는 문구를 써요', motif: 'sun' }, { id: 'c', text: '포스터와 발표를 준비해요', motif: 'leaf' }, { id: 'd', text: '알린 뒤 반응을 모아요', motif: 'flower' }], ['a', 'b', 'c', 'd'], 0.15),
              SO('동생 반에 캠페인을 알리는 차례를 놓아 보세요.', '동생 반에 알리기', ['먼저', '다음', '마지막'], [{ id: 'e', text: '담임 선생님께 허락받아요', motif: 'house' }, { id: 'f', text: '쉬운 말로 짧게 알려요', motif: 'sun' }, { id: 'g', text: '함께 약속 스티커를 붙여요', motif: 'star' }], ['e', 'f', 'g'], 0.2),
              SO('캠페인을 우리 집에서 먼저 실천한 도의 이야기를 차례대로 놓아 보세요.', '도의 우리 집 실천', ['처음', '다음', '그다음', '끝'], [{ id: 'h', text: '가족에게 캠페인을 소개해요', motif: 'house' }, { id: 'i', text: '저녁 폰 쉬는 시간을 정해요', motif: 'cloud' }, { id: 'j', text: '보드게임으로 함께 놀아요', motif: 'leaf' }, { id: 'k', text: '한 주 실천을 돌아봐요', motif: 'star' }], ['h', 'i', 'j', 'k'], 0.25,
                { conclude: '캠페인은 주제·문구·준비·알리기 차례로 꾸리고, 내 생활에서 먼저 실천할 때 힘이 생겨요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"우리 반 캠페인 문구 하나를 함께 정해 볼까요?" 두세 개를 칠판에 적고 손을 들어 고른다. 출구 1번에서 허락받기를 빼먹은 학생에게 다른 반에 갈 때의 예절을 짚는다. 2번에서 "겁주는 문구가 효과적"을 고른 학생에게 할 행동이 보이는 문구와 견주게 한다. 4·5·6학년에서 배운 과의존 예방을 한 번 더 묶어 말해 준다.',
          exit: [
            { type: 'tool', tool: 'story', options: { title: '복도 포스터 붙이기', slots: ['먼저', '다음', '마지막'], cards: [{ id: 'x1', text: '붙일 곳을 허락받아요', motif: 'house' }, { id: 'x2', text: '포스터를 붙여요', motif: 'sun' }, { id: 'x3', text: '본 친구 반응을 들어요', motif: 'flower' }] }, state: { order: [] }, prompt: '복도에 캠페인 포스터를 붙이는 차례를 놓아 보세요.', target: { order: ['x1', 'x2', 'x3'] }, difficulty: 0.15 },
            { type: 'choice', prompt: '과의존 예방 캠페인 문구로 가장 알맞은 것은 무엇인가요?', options: ['폰 보면 바보 된다', '잠들기 전 화면 끄기', '스마트폰은 무조건 나빠'], answer: 1, difficulty: 0.1, explain: '겁주는 말보다 할 행동이 보이는 문구가 지키기 쉬워요.' },
            { type: 'short', prompt: '우리 반 디지털 균형 캠페인 문구를 한 문장으로 만들어 쓰세요.' },
            MOOD,
          ],
        },
        ws: {
          title: '디지털 균형 캠페인 계획서',
          items: [
            { type: 'table', prompt: '캠페인 계획을 채우세요.', columns: ['항목', '우리 반 계획'], cells: [['주제', ''], ['문구', ''], ['알릴 사람', ''], ['알리는 방법', '']], answer: '예: 잠들기 전 화면 끄기 / 화면 끄고 꿈나라로 / 1·2학년 동생 / 포스터와 짧은 발표' },
            { type: 'choice', prompt: '좋은 캠페인 문구에 ○ 하세요.', options: ['폰 보면 바보 된다', '밥 먹을 땐 폰은 바구니에', '폰 없으면 못 살아'], answer: '밥 먹을 땐 폰은 바구니에' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '캠페인에는 겁주는 말보다 할 ___이 보이는 문구를 써요.', answer: '행동' },
            { type: 'short', prompt: '캠페인을 우리 집에서 먼저 실천할 방법을 쓰세요.' },
          ],
          easy: {
            note: '"동생이 보면 무엇을 하면 될지 알까?"를 떠올려 보세요.',
            items: [
              { type: 'choice', prompt: '좋은 문구에 ○ 하세요.', options: ['화면 끄고 같이 놀자', '폰은 나빠'], answer: '화면 끄고 같이 놀자' },
              { type: 'table', prompt: '캠페인 원칙이면 ○, 아니면 ×를 쓰세요.', columns: ['원칙', '○ / ×'], cells: [['사실만 쓰기', ''], ['겁주기', ''], ['쉬운 말 쓰기', '']], answer: '○, ×, ○' },
              { type: 'draw', prompt: '캠페인 포스터를 그려 보세요.' },
              { type: 'short', prompt: '동생에게 알려 줄 습관을 쓰세요.' },
            ],
          },
        },
        diff: DIFF('카드와 차례는 맞는 자리에 놓으면 바로 알려 줘요. 4·5학년 때 배운 내용을 먼저 떠올려요.', '겁주는 문구와 할 행동이 보이는 문구를 가려내고, 카드 순서가 섞여 나와요.'),
        notes: '자주 보이는 어려움: ① 무조건 쓰지 말라는 문구가 효과적이라 여긴다 → 할 행동이 보이는 문구와 견준다. ② 근거 없는 숫자나 과장된 말을 쓴다 → 확인된 사실만 쓰는 원칙을 짚는다. ③ 캠페인을 남에게 알리는 일로만 여긴다 → 내 생활에서 먼저 실천해야 힘이 생긴다는 점을 말한다. 다른 반에 알릴 때는 담임 선생님 간 협의를 거치고, 가정 실천은 강요하지 않는다.',
      }),
    ],
  });
})();
