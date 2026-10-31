/* 고3 창체 법정교육 — 다문화 이해 (2차시). 근거: 다문화가족지원법 제5조·시행령 제10조의2, 교육부 지침 연 2시간. 기숙사·공동생활의 문화 차이 조율과 차별 구제 경로(국가인권위원회 진정 등)를 다룬다. 기관 전화번호는 적지 않는다.
 * 장면·인물은 이 단원을 위해 직접 지은 것이다(가명). 학생 자신의 경험을 털어놓게 하는 문항은 두지 않는다. */
(function () {
  const G = 12; const CODE = 'multi';
  const UNIT = `g${G}-창체-${CODE}`;
  const TITLE = '다문화 이해';
  const base = (n) => ({
    id: `g${G}-cc-${CODE}-${String(n).padStart(2, '0')}`, schema: 'edu-lesson.v1',
    catalog: { unit: UNIT, lesson: n },
    grade: G, subject: '창체', unitTitle: TITLE,
    standards: [],
    minutes: 40,
    formats: ['chromebook', 'projector', 'print'],
  });
  const PROMPT = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const SCENE = (text, extra = []) => ({ viewBox: [480, 270], layers: [
    { motif: 'sun', x: 410, y: 58, s: 0.8 }, { motif: 'cloud', x: 120, y: 52 }, { motif: 'hills', y: 204 },
    { motif: 'house', x: 96, y: 214, color: 'buttercup', s: 0.9 }, { motif: 'tree', x: 380, y: 214 }, ...extra,
    { motif: 'text', x: 240, y: 140, text, size: 22 },
  ] });
  // 활동 문항 — 한 활동은 교구 하나로만 돈다(mindmap: MS·MM·MP / emotion: EB·ES / story: SO)
  const MS = (prompt, topic, slots, cards, sort, d, more) => ({ prompt, toolOptions: { mode: 'sort', topic, slots, cards }, target: { sort }, difficulty: d, ...more });
  const MM = (prompt, topic, slots, cards, match, d, more) => ({ prompt, toolOptions: { mode: 'match', topic, slots, cards }, target: { match }, difficulty: d, ...more });
  const MP = (prompt, topic, cards, pick, d, more) => ({ prompt, toolOptions: { mode: 'pick', topic, basket: topic, cards }, target: { pick }, difficulty: d, ...more });
  const EB = (prompt, situation, choices, choice, d, more) => ({ prompt, toolOptions: { mode: 'branch', situation, choices }, target: { choice }, difficulty: d, ...more });
  const ES = (prompt, situation, feeling, level, d, more) => ({ prompt, toolOptions: { mode: 'scale', situation, feeling }, target: { level }, difficulty: d, ...more });
  const SO = (prompt, title, slots, cards, order, d, more) => ({ prompt, toolOptions: { mode: 'order', title, slots, cards }, target: { order }, difficulty: d, ...more });
  const SF = (prompt, title, slots, cards, fill, d, more) => ({ prompt, toolOptions: { mode: 'fill', title, slots, cards }, target: { fill }, difficulty: d, ...more });
  const C = (id, text, motif) => ({ id, text, motif });
  const TALK = (prompt) => ({ prompt, free: true, talk: true, difficulty: 0 });
  const LV = { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } };
  const LVB = { easy: { showBack: true }, base: {}, challenge: {} };
  // 출구 질문
  const XS = (prompt, topic, slots, cards, sort, d = 0.2) => ({ type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic, slots, cards }, state: { at: {} }, prompt, target: { sort }, difficulty: d });
  const XB = (prompt, situation, choices, choice, d = 0.2) => ({ type: 'tool', tool: 'emotion', options: { mode: 'branch', situation, choices }, state: { choice: null }, prompt, target: { choice }, difficulty: d });
  const XM = (prompt, topic, slots, cards, match, d = 0.2) => ({ type: 'tool', tool: 'mindmap', options: { mode: 'match', topic, slots, cards }, state: { at: {} }, prompt, target: { match }, difficulty: d });
  const XO = (prompt, title, slots, cards, order, d = 0.2) => ({ type: 'tool', tool: 'story', options: { mode: 'order', title, slots, cards }, state: { at: {} }, prompt, target: { order }, difficulty: d });
  const XC = (prompt, options, answer, explain, d = 0.2) => ({ type: 'choice', prompt, options, answer, difficulty: d, explain });
  const XT = (prompt) => ({ type: 'short', prompt });
  const MOOD = { type: 'mood', prompt: '오늘 수업을 마친 내 마음은 어떤가요?' };
  // 도입 시연
  const DEMO = (topic, slots, cards, sort) => ({ tool: 'mindmap', options: { mode: 'sort', topic, slots, cards, shuffle: false }, sequence: [{ sort }] });
  const DIFF = {
    easy: '맞는 칸에 놓은 카드에 초록 테두리가 생기고, 갈림길 문항은 결과 칸이 처음부터 보여요.',
    base: '모든 카드를 놓은 뒤 확인을 눌러 스스로 고쳐요.',
    challenge: '카드 순서가 섞여 나오고, 그럴듯하지만 맞지 않는 보기를 근거를 들어 가려내요.',
  };
  // 도입 6 + 전개 27 + 정리 7 = 40분
  const LESSON = (n, o) => Object.assign(base(n), {
    title: o.title, objective: o.objective,
    illustration: { prompt: PROMPT(o.draw), scene: SCENE(o.banner, o.extra) },
    stages: [
      { id: 'intro', title: '도입', minutes: 6, teacher: o.intro.teacher, student: o.intro.student, demo: o.intro.demo },
      { id: 'main', title: '전개', minutes: 27, activities: o.acts },
      { id: 'wrapup', title: '정리', minutes: 7, teacher: o.wrap.teacher, exitTicket: o.wrap.exit },
    ],
    worksheet: o.ws, differentiation: o.diff || DIFF, teacherNotes: o.notes,
  });

  PaperLessons.registerUnit({
    id: `g${G}-cc-${CODE}`, schema: 'edu-unit.v1', catalogUnit: UNIT,
    grade: G, subject: '창체', unitTitle: TITLE,
    flow: '졸업 뒤 대학 기숙사·일터·지역에서 다양한 배경의 사람과 함께 살아갈 고3을 위한 마지막 다문화 이해 단원입니다. 1차시에는 종교·식문화·생활 리듬이 다른 가상의 룸메이트와 지내는 장면에서, 문화 차이를 존중하면서도 서로의 생활을 조율하는 대화를 갈림길로 고릅니다. 2차시에는 출신·국적·피부색을 이유로 한 차별을 겪거나 보았을 때 학교·일터·국가인권위원회·경찰 등 상황에 맞는 구제 경로와 증거를 남기는 방법을 정리합니다. 고1의 고정관념 읽기, 고2의 노동 인권을 이어 성인 시민으로서의 공존과 권리 구제로 마무리합니다.',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '문화가 다른 룸메이트와 생활 규칙 조율하기',
        objective: '종교·식문화·생활 리듬이 다른 사람과 공동생활을 할 때 문화 차이를 존중하면서 서로의 생활을 조율하는 대화와 행동을 고를 수 있다.',
        draw: 'a cozy paper-cut dormitory room shared by two students, one praying on a mat and one reading, with a shared rules note on the wall',
        banner: '다르게, 함께 살기', extra: [{ motif: 'moon', x: 80, y: 90, s: 0.7 }],
        intro: {
          teacher: '"대학 기숙사에서 처음 만난 룸메이트가 나와 종교도, 먹는 음식도, 잠드는 시간도 다르다면 어떤 일이 생길까요?" 대답을 듣고(기다릴 반응: "불편할 것 같아요", "재밌을 것 같아요") 둘 다 자연스러운 마음이라고 받아 준다. "다르면 그냥 참아야 하나요?"라는 물음에는 "존중은 무조건 참는 걸까요, 서로 이야기해 맞춰 가는 걸까요?"라고 되묻는다. 오늘은 존중과 조율을 함께 연습한다고 밝힌다.',
          student: '누군가와 함께 지낼 때 꼭 지키고 싶은 생활 규칙 하나를 짝과 말해 봅시다.',
          demo: DEMO('공동생활의 대화', ['존중하며 조율해요', '무시하거나 강요해요'], ['기도 시간을 물어 맞춰요', '"여긴 한국이니 따라 해"'], { '존중하며 조율해요': ['기도 시간을 물어 맞춰요'], '무시하거나 강요해요': ['"여긴 한국이니 따라 해"'] }),
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 룸메이트 갈림길에서 대화 고르기', minutes: 15, tool: 'emotion',
            teacher: '"이 말을 들은 룸메이트는 어떤 마음일까요?" 결과 칸을 읽으며 존중과 조율이 함께 이뤄지는지 살피게 한다. 2번에서 "음식 냄새가 싫으니 그 음식은 먹지 말라고 한다"를 고른 학생에게 "그 음식이 룸메이트에게 어떤 의미일지 생각해 볼까요? 금지 대신 환기·장소를 함께 정할 수는 없을까요?"라고 묻는다. 문화를 존중한다는 것이 내 생활을 모두 포기하는 것이 아님도 함께 짚는다.',
            task: '문화가 다른 룸메이트와 지내는 장면에서 존중하며 조율하는 선택을 골라요.',
            levels: LVB,
            items: [
              EB('어떻게 할까요?', '룸메이트 아민이 정해진 시간마다 방에서 기도를 해요. 나는 그 시간에 친구와 통화하곤 했어요.', [{ id: 'ignore', text: '신경 쓰지 않고 크게 통화해요', result: '아민이 말없이 불편해해요', mood: '속상함', why: '상대의 중요한 시간을 모른 척하면 관계가 멀어져요.' }, { id: 'ask', text: '기도 시간을 물어 그때는 밖에서 통화해요', result: '아민이 고마워하며 내 공부 시간도 물어요', mood: '고마움' }, { id: 'complain', text: '"방에서 그러지 마"라고 말해요', result: '아민이 상처받아요', mood: '속상함', why: '종교 생활을 금지하는 말은 존중이 아니에요.' }], 'ask', 0.2),
              EB('어떻게 이야기할까요?', '룸메이트 링이 고향 음식을 자주 해 먹는데, 나는 그 냄새가 익숙하지 않아요.', [{ id: 'ban', text: '"그 음식 먹지 마"라고 해요', result: '링이 고향 음식을 숨겨 먹어요', mood: '속상함', why: '금지보다 함께 방법을 정하는 쪽이 존중이에요.' }, { id: 'talk', text: '환기와 조리 장소를 함께 정하자고 해요', result: '둘 다 편한 규칙이 생겨요', mood: '평온' }], 'talk', 0.25),
              EB('어떻게 할까요?', '룸메이트 사라는 종교 때문에 돼지고기를 먹지 않아요. 기숙사 친구들이 단체 회식 메뉴를 정해요.', [{ id: 'menu', text: '사라도 먹을 메뉴가 있는지 함께 살펴요', result: '모두 즐겁게 회식해요', mood: '기쁨' }, { id: 'alone', text: '"너만 다른 데 가"라고 해요', result: '사라가 혼자 남아요', mood: '속상함', why: '함께하는 자리에서 한 사람만 빼면 소외가 돼요.' }, { id: 'force', text: '"한 번쯤은 괜찮잖아" 권해요', result: '사라가 곤란해해요', mood: '걱정', why: '신념에 따른 식생활을 강요하지 않아요.' }], 'menu', 0.3,
                { conclude: '존중은 무조건 참는 것도, 내 방식을 강요하는 것도 아니에요. 묻고, 듣고, 함께 규칙을 정하는 거예요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 공동생활 규칙 정하기', minutes: 12, tool: 'mindmap',
            teacher: '"좋은 규칙의 조건은 무엇일까요?" 한쪽만 바뀌는 규칙과 둘 다 조금씩 맞추는 규칙을 비교하게 한다. 2번에서 "다수의 방식을 따른다"를 공정한 규칙으로 넣는 학생에게 "다수가 정하면 소수의 신념은 어떻게 될까요?"라고 묻는다. 3번은 짝과 말로 나눈다.',
            task: '공동생활 규칙을 공정한 것과 한쪽에 치우친 것으로 나누고, 상황에 맞는 조율 방법을 이어요.',
            levels: LV,
            items: [
              MS('규칙을 두 가지로 나누어 보세요.', '공동생활 규칙', ['서로 맞춘 규칙', '한쪽에 치우친 규칙'], ['조용한 시간을 함께 정해요', '공용 공간 사용표를 만들어요', '다수 방식만 따라요', '내 생활 방식에 맞춰요'], { '서로 맞춘 규칙': ['조용한 시간을 함께 정해요', '공용 공간 사용표를 만들어요'], '한쪽에 치우친 규칙': ['다수 방식만 따라요', '내 생활 방식에 맞춰요'] }, 0.25),
              MM('생활 차이와 조율 방법을 이어 보세요. 맞지 않는 카드는 남겨요.', '조율 방법', [{ id: 'c1', label: '잠드는 시간이 달라요' }, { id: 'c2', label: '명절·축일이 달라요' }, { id: 'c3', label: '청소 기준이 달라요' }], ['조명·소리 시간 정하기', '서로의 날을 미리 알리기', '청소 당번표 만들기', '먼저 화내기'], { c1: '조명·소리 시간 정하기', c2: '서로의 날을 미리 알리기', c3: '청소 당번표 만들기' }, 0.25,
                { conclude: '차이를 미리 말하고 함께 규칙을 정하면 다름은 갈등보다 배움이 돼요.' }),
              TALK('짝과 함께 문화가 다른 룸메이트와 첫날 나눌 대화 한 가지를 정해 말하고 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 연습한 대화는 룸메이트뿐 아니라 어디에서 쓸 수 있을까요?" 출구 1번에서 강요하는 보기를 고른 학생에게는 신념에 따른 생활을 존중하는 것이 공존의 기본이라는 점을 다시 짚는다. 문화 차이로 생긴 갈등이 괴롭힘으로 번지면 기숙사·학교 상담 창구에 도움을 청할 수 있다고 말해 준다.',
          exit: [
            XB('어떻게 할까요?', '룸메이트가 금식 기간이라 낮에 음식을 먹지 않아요. 나는 방에서 간식을 먹고 싶어요.', [{ id: 'care', text: '어떻게 하면 편할지 물어보고 맞춰요', result: '서로 편한 방법을 찾아요', mood: '평온' }, { id: 'eat', text: '신경 쓰지 않고 마음대로 먹어요', result: '룸메이트가 힘들어해요', mood: '걱정', why: '물어보는 것만으로도 존중을 전할 수 있어요.' }], 'care'),
            XC('문화가 다른 사람과 공동생활을 할 때 가장 알맞은 태도는?', ['내 방식을 따르게 한다', '무조건 참고 말하지 않는다', '서로의 차이를 묻고 함께 규칙을 정한다'], 2, '묻고 함께 정하는 것이 존중과 조율을 함께 지키는 방법이에요.'),
            XT('문화가 다른 룸메이트에게 처음 건넬 말을 한 문장으로 쓰세요.'),
          ],
        },
        ws: {
          title: '다른 문화의 룸메이트와 살기',
          items: [
            { type: 'table', prompt: '생활 차이와 조율 방법을 쓰세요.', columns: ['생활 차이', '조율 방법'], cells: [['기도·예배 시간', ''], ['음식 냄새', ''], ['잠드는 시간', '']], answer: '시간을 물어 맞추기 / 환기·조리 장소 정하기 / 조명·소리 시간 정하기' },
            { type: 'choice', prompt: '서로 맞춘 규칙에 ○ 하세요.', options: ['다수 방식만 따르기', '조용한 시간 함께 정하기', '내 방식대로 하기'], answer: '조용한 시간 함께 정하기' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '존중은 무조건 참는 것이 아니라 묻고 함께 ___을 정하는 것이다.', answer: '규칙' },
            { type: 'short', prompt: '공동생활에서 내가 지킬 존중의 약속 두 가지를 쓰세요.' },
          ],
        },
        notes: '자주 보이는 어려움: ① 존중을 무조건 참는 것으로 여긴다 → 조율의 대화를 함께 연습한다. ② "여기는 한국이니 따라야 한다"는 생각 → 신념에 따른 생활은 존중하되 공용 생활은 함께 정한다는 점을 짚는다. ③ 특정 종교를 평가하지 않는다 — 인물과 장면은 모두 가상이다.',
      }),
      LESSON(2, {
        title: '출신을 이유로 한 차별을 겪었을 때 구제 경로 찾기',
        objective: '출신·국적·피부색을 이유로 한 차별을 겪거나 보았을 때 상황에 맞는 구제 기관과 절차를 고르고, 기록을 남기는 방법을 말할 수 있다.',
        draw: 'paper-cut signposts pointing to a school, an office, a police box and a human rights building, with a person holding a notebook',
        banner: '권리를 지키는 길', extra: [{ motif: 'star', x: 330, y: 100, color: 'buttercup', s: 0.6 }],
        intro: {
          teacher: '"차별을 겪었는데 \'원래 그래\' 하고 넘어가면 어떻게 될까요?" 대답을 듣고(기다릴 반응: "또 그럴 것 같아요", "어디에 말해야 할지 몰라요") 차별은 권리 침해이고 구제받을 길이 있다는 점을 짚는다. "신고하면 일이 커질까 봐 무서워요"라는 걱정에는 "상담부터 받아 볼 수 있는 곳도 있어요. 어떤 길이 있는지 먼저 알아 둘까요?"라고 답한다. 오늘은 상황에 맞는 길을 찾아본다고 밝힌다.',
          student: '어려운 일이 생겼을 때 "어디에 물어봐야 할지" 몰라 막막했던 가상 장면을 짝과 하나 말해 봅시다.',
          demo: DEMO('차별을 겪었을 때', ['권리를 지키는 행동', '혼자 삼키는 행동'], ['날짜와 내용을 기록해요', '아무에게도 말하지 않아요'], { '권리를 지키는 행동': ['날짜와 내용을 기록해요'], '혼자 삼키는 행동': ['아무에게도 말하지 않아요'] }),
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 상황과 구제 경로 잇기', minutes: 14, tool: 'mindmap',
            teacher: '"이 상황에서는 어디에 도움을 청하는 것이 가장 빠를까요?" 학교 안의 일은 담임·상담 선생님, 위협·폭력은 112, 공공기관·일터·서비스에서의 차별은 국가인권위원회에 진정할 수 있다는 점을 정리한다. 1번에서 폭행 위협을 국가인권위원회에 잇는 학생에게 "지금 위험한 상황이라면 무엇이 먼저일까요?"라고 묻는다. 한 기관만 정답이 아니라 상황과 급한 정도에 따라 길이 다르다는 점을 짚는다.',
            task: '차별 상황과 알맞은 구제 경로를 잇고, 구제 기관을 골라요.',
            levels: LV,
            items: [
              MM('차별 상황과 먼저 찾을 곳을 이어 보세요. 맞지 않는 카드는 남겨요.', '상황별 구제 경로', [{ id: 'q1', label: '길에서 출신 이유로 폭행 위협' }, { id: 'q2', label: '반 친구들이 피부색으로 놀림' }, { id: 'q3', label: '가게가 국적 이유로 출입 거절' }], ['112에 신고하기', '담임·상담 선생님께 알리기', '국가인권위원회에 진정하기', '참고 잊어버리기'], { q1: '112에 신고하기', q2: '담임·상담 선생님께 알리기', q3: '국가인권위원회에 진정하기' }, 0.3),
              MP('차별을 겪었을 때 도움을 청할 수 있는 곳만 골라 담아 보세요.', '도움을 청할 곳', ['국가인권위원회', '학교 상담실', '경찰(112)', '익명 커뮤니티 폭로'], ['국가인권위원회', '학교 상담실', '경찰(112)'], 0.25),
              MS('구제 경로에 대한 생각을 맞는 것과 틀린 것으로 나누어 보세요.', '구제 경로에 대한 생각', ['맞는 생각', '틀린 생각'], ['상담부터 받아 볼 수 있어요', '외국인도 진정할 수 있어요', '증거 없으면 말도 못 해요', '참는 게 어른스러워요'], { '맞는 생각': ['상담부터 받아 볼 수 있어요', '외국인도 진정할 수 있어요'], '틀린 생각': ['증거 없으면 말도 못 해요', '참는 게 어른스러워요'] }, 0.3,
                { conclude: '차별은 참아야 할 일이 아니라 구제받을 수 있는 권리 침해예요. 급하면 112, 학교 일은 학교, 차별 진정은 국가인권위원회로.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 기록 남기고 함께 도움 청하기', minutes: 13, tool: 'mindmap',
            teacher: '"나중에 도움을 청할 때 무엇이 있으면 좋을까요?" 날짜·장소·내용·본 사람 같은 기록이 도움을 받는 데 쓰인다는 점을 짚는다. 2번에서 "가해자 얼굴을 찍어 SNS에 올리기"를 기록으로 넣는 학생에게 "기록은 도움을 청하려는 것이고, 퍼뜨리면 나도 다툼에 휘말릴 수 있어요"라고 바로잡는다. 3번은 짝과 말로 나눈다.',
            task: '차별을 겪었을 때 남길 기록과 함께 도움을 청하는 행동을 골라요.',
            levels: LV,
            items: [
              MP('차별을 겪었을 때 남겨 두면 좋은 기록만 골라 담아 보세요.', '남길 기록', ['날짜와 장소', '들은 말과 행동', '함께 본 사람', '가해자 신상 공개 글'], ['날짜와 장소', '들은 말과 행동', '함께 본 사람'], 0.25),
              MS('행동을 두 가지로 나누어 보세요.', '도움을 청하는 행동', ['도움을 청하는 행동', '일을 키우는 행동'], ['믿는 어른과 기관에 함께 가요', '기록을 정리해 상담받아요', '가해자를 찍어 SNS에 올려요', '똑같이 욕으로 갚아요'], { '도움을 청하는 행동': ['믿는 어른과 기관에 함께 가요', '기록을 정리해 상담받아요'], '일을 키우는 행동': ['가해자를 찍어 SNS에 올려요', '똑같이 욕으로 갚아요'] }, 0.3,
                { conclude: '기록을 남기고 믿는 어른·기관과 함께 움직이면 내 권리를 안전하게 지킬 수 있어요.' }),
              TALK('짝과 함께 차별을 겪은 친구에게 "같이 가 줄게"와 함께 건넬 말 한 가지를 정해 말하고 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"졸업 뒤 학교 밖에서 차별을 겪거나 본다면 가장 먼저 무엇을 떠올리겠어요?" 출구 1번에서 SNS 폭로를 도움 청하기로 고른 학생에게는 기록과 폭로의 차이를 다시 짚는다. 이 수업이 누군가의 실제 일을 떠올리게 했다면 상담실이 열려 있다고 말해 준다.',
          exit: [
            XM('상황과 먼저 찾을 곳을 이어 보세요. 맞지 않는 카드는 남겨요.', '구제 경로 다시 보기', [{ id: 'e1', label: '지금 위협을 받고 있어요' }, { id: 'e2', label: '학교에서 출신으로 놀림받아요' }], ['112', '담임·상담 선생님', '참고 넘기기'], { e1: '112', e2: '담임·상담 선생님' }),
            XC('차별을 겪은 뒤 도움을 청할 때 도움이 되는 것은?', ['날짜·장소·내용을 적은 기록', '가해자 신상을 올린 글', '똑같이 되갚은 일'], 0, '기록은 도움을 받을 때 중요한 근거가 돼요.'),
            XT('차별을 겪은 친구에게 함께 찾아갈 수 있는 곳과 건넬 말을 한 문장으로 쓰세요.'),
          ],
        },
        ws: {
          title: '차별을 겪었을 때의 구제 경로',
          items: [
            { type: 'table', prompt: '상황에 맞는 구제 경로를 쓰세요.', columns: ['상황', '찾을 곳'], cells: [['폭행 위협', ''], ['학교에서의 놀림', ''], ['가게·기관의 차별', '']], answer: '112 / 담임·상담 선생님 / 국가인권위원회 진정' },
            { type: 'choice', prompt: '남겨 두면 좋은 기록에 ○ 하세요.', options: ['가해자 신상 공개', '날짜와 들은 말', '되갚은 욕'], answer: '날짜와 들은 말' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '차별은 참아야 할 일이 아니라 ___받을 수 있는 권리 침해이다.', answer: '구제' },
            { type: 'short', prompt: '차별을 겪은 친구를 도울 때 내가 할 수 있는 일 두 가지를 쓰세요.' },
          ],
        },
        notes: '자주 보이는 어려움: ① 차별을 참는 것이 성숙하다고 여긴다 → 권리 침해이며 구제 경로가 있음을 짚는다. ② 기록과 SNS 폭로를 섞는다 → 기록은 도움 요청의 근거임을 분명히 한다. ③ 학생의 실제 차별 경험을 묻지 않는다. 국가인권위원회의 구체 진정 요건·기한은 기관 안내를 따르며 이 차시에서 단정하지 않는다.',
      }),
    ],
  });
})();
