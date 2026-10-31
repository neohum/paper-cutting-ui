/* 고1 창체 법정교육 — 다문화 이해 (2차시). 근거: 다문화가족지원법 제5조·시행령 제10조의2, 교육부 지침 연 2시간. 미디어 속 이주민 묘사의 고정관념 읽기와 차별 목격 시 개입을 다룬다. 실제 방송·광고·인물은 쓰지 않고 가상 장면으로만 다룬다.
 * 장면·인물은 이 단원을 위해 직접 지은 것이다(가명). 학생 자신의 경험을 털어놓게 하는 문항은 두지 않는다. */
(function () {
  const G = 10; const CODE = 'multi';
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
    flow: '고1 다문화 이해 단원은 고정관념이 어디서 만들어지고 어떻게 차별로 이어지는지를 미디어와 일상 장면으로 살핍니다. 1차시에는 가상의 광고·예능·뉴스 장면에서 이주민을 한 가지 모습으로만 그리는 표현과 다양한 삶을 보여 주는 표현을 가리고, 고정관념 → 편견 → 차별로 이어지는 흐름을 확인합니다. 2차시에는 버스·아르바이트·온라인처럼 고등학생이 마주칠 장면에서 출신을 이유로 한 차별을 목격했을 때 나의 안전을 지키며 개입하는 행동을 갈림길로 고릅니다. 중학교에서 배운 고정관념·혐오 표현 구별을 미디어 읽기와 행동으로 넓힙니다.',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '가상 미디어 장면에서 고정관념을 찾아 다시 쓰기',
        objective: '미디어 속 이주민 묘사에서 고정관념을 강화하는 표현과 다양성을 보여 주는 표현을 구별하고, 고정관념이 차별로 이어지는 흐름을 설명할 수 있다.',
        draw: 'a paper-cut television and newspaper with diverse people stepping out of the screen, each different in clothes and work',
        banner: '미디어 속 고정관념', extra: [{ motif: 'star', x: 330, y: 100, color: 'buttercup', s: 0.6 }],
        intro: {
          teacher: '"드라마나 예능에서 이주민은 주로 어떤 역할로 나오나요?" 대답을 듣고(기다릴 반응: "어눌하게 말하는 역할이요", "식당 일 하는 사람이요") 칠판에 적는다. "실제로 그런 사람이 많으니 사실 아닌가요?"라는 말에는 "한 가지 모습만 계속 보여 주면, 그 밖의 모습은 어떻게 될까요?"라고 되묻는다. 시연으로 표현을 나누고, 오늘은 미디어 속 모습을 가려 읽는다고 밝힌다.',
          student: '미디어에서 어떤 집단이 늘 같은 모습으로만 나온다고 느낀 가상 예를 짝과 하나 말해 봅시다.',
          demo: DEMO('미디어 속 표현', ['고정관념 강화', '다양성 보여 주기'], ['서툰 말투만 웃음거리로', '의사·학생·요리사로 고루'], { '고정관념 강화': ['서툰 말투만 웃음거리로'], '다양성 보여 주기': ['의사·학생·요리사로 고루'] }),
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 미디어 표현을 가려 읽기', minutes: 14, tool: 'mindmap',
            teacher: '"이 장면을 매일 본 사람은 이주민을 어떻게 생각하게 될까요?" 한 장면이 아니라 반복이 고정관념을 만든다는 점을 짚는다. 2번에서 "나라 이름으로 사건을 부르는 뉴스 제목"을 다양성 쪽에 두는 학생에게 "한 사람의 일을 나라 이름으로 부르면 그 나라 사람 모두는 어떻게 보일까요?"라고 묻는다. 특정 방송·나라를 비난하지 않고 표현 방식에 집중한다.',
            task: '가상의 미디어 장면을 고정관념을 강화하는 표현과 다양성을 보여 주는 표현으로 나누어요.',
            levels: LV,
            items: [
              MS('가상 예능·드라마 장면을 두 가지로 나누어 보세요.', '예능·드라마 속 모습', ['고정관념 강화', '다양성 보여 주기'], ['외국인 억양만 흉내 내 웃겨요', '피부색으로 별명을 붙여요', '이주 2세가 주인공인 성장담', '여러 직업의 이주민이 나와요'], { '고정관념 강화': ['외국인 억양만 흉내 내 웃겨요', '피부색으로 별명을 붙여요'], '다양성 보여 주기': ['이주 2세가 주인공인 성장담', '여러 직업의 이주민이 나와요'] }, 0.2),
              MS('가상 뉴스 제목을 두 가지로 나누어 보세요.', '뉴스 제목 읽기', ['고정관념 강화', '사실 중심'], ['"○○국 출신 또 사고"', '"외국인 늘어 불안"', '"30대 남성 교통사고"', '"이주민 상인회 축제 열어"'], { '고정관념 강화': ['"○○국 출신 또 사고"', '"외국인 늘어 불안"'], '사실 중심': ['"30대 남성 교통사고"', '"이주민 상인회 축제 열어"'] }, 0.3),
              MM('고정관념 표현과 다시 쓴 표현을 이어 보세요. 맞지 않는 카드는 남겨요.', '다시 쓰기', [{ id: 'w1', label: '다문화 가정 아이는 한국말이 서툴다' }, { id: 'w2', label: '이주민은 일자리를 빼앗는다' }, { id: 'w3', label: '그 나라 사람들은 다 그래' }], ['한국어 실력은 사람마다 달라요', '일자리 문제는 원인이 여러 가지', '한 사람으로 전체를 판단 않기', '다문화 가정은 다 비슷해요'], { w1: '한국어 실력은 사람마다 달라요', w2: '일자리 문제는 원인이 여러 가지', w3: '한 사람으로 전체를 판단 않기' }, 0.3,
                { conclude: '한 가지 모습의 반복이 고정관념을 만들어요. 사실을 중심으로, 사람을 한 사람으로 보여 주는 표현이 필요해요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 고정관념이 차별로 이어지는 흐름 잇기', minutes: 13, tool: 'mindmap',
            teacher: '"생각만 하는 것과 행동으로 옮기는 것은 어떻게 다를까요?" 고정관념(머릿속 일반화) → 편견(좋고 싫음의 감정) → 차별(불이익을 주는 행동)의 흐름을 칠판에 그린다. 2번에서 "아르바이트 면접에서 출신만 듣고 떨어뜨리기"를 편견에 넣는 학생에게 "실제로 불이익을 준 행동인가요?"라고 묻는다. 3번은 짝과 말로 나눈다.',
            task: '고정관념·편견·차별을 구별하고, 흐름을 끊는 방법을 골라요.',
            levels: LV,
            items: [
              MS('장면을 고정관념·편견·차별로 나누어 보세요.', '생각에서 행동으로', ['고정관념', '편견', '차별'], ['"그 나라 사람은 게을러"', '"다 똑같이 생겼어"', '옆자리에 앉기 싫어해요', '말 걸면 괜히 불편해요', '출신만 듣고 면접 탈락', '피부색 이유로 가게 거절'], { '고정관념': ['"그 나라 사람은 게을러"', '"다 똑같이 생겼어"'], '편견': ['옆자리에 앉기 싫어해요', '말 걸면 괜히 불편해요'], '차별': ['출신만 듣고 면접 탈락', '피부색 이유로 가게 거절'] }, 0.35),
              MP('고정관념이 차별로 번지는 흐름을 끊는 행동만 골라 담아 보세요.', '흐름 끊기', ['일반화 말에 "다 그렇진 않아"', '직접 만나 이야기 나누기', '출처를 확인하고 공유하기', '자극적 영상 퍼뜨리기'], ['일반화 말에 "다 그렇진 않아"', '직접 만나 이야기 나누기', '출처를 확인하고 공유하기'], 0.25,
                { conclude: '고정관념을 알아차리고 사람을 직접 만나 볼 때 편견과 차별로 번지는 흐름을 끊을 수 있어요.' }),
              TALK('짝과 함께 활동 1의 가상 장면 하나를 골라 고정관념 없이 다시 쓴 장면을 말하고 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 이후 영상을 볼 때 무엇을 한 번 더 생각하게 될까요?" 출구 1번에서 면접 탈락을 편견에 넣은 학생에게는 불이익을 준 행동이 차별이라는 점을 다시 짚는다. 미디어를 즐기되 가려 읽는 눈을 갖자는 말로 마무리한다.',
          exit: [
            XS('장면을 두 가지로 나누어 보세요.', '편견일까 차별일까', ['편견', '차별'], ['괜히 불편한 마음', '가까이 가기 싫은 마음', '출신으로 방 계약 거절', '억양 이유로 승진 제외'], { '편견': ['괜히 불편한 마음', '가까이 가기 싫은 마음'], '차별': ['출신으로 방 계약 거절', '억양 이유로 승진 제외'] }),
            XC('미디어의 고정관념을 줄이는 표현으로 가장 알맞은 것은?', ['웃음을 위해 억양을 흉내 낸다', '사건 기사 제목에 출신 나라를 강조한다', '다양한 삶과 직업을 사실 중심으로 보여 준다'], 2, '다양한 모습을 사실 중심으로 보여 줄 때 고정관념이 줄어요.'),
            XT('고정관념 → 편견 → 차별의 흐름을 끊기 위해 내가 할 수 있는 일을 한 문장으로 쓰세요.'),
          ],
        },
        ws: {
          title: '미디어 속 이주민 모습 읽기',
          items: [
            { type: 'table', prompt: '세 개념의 뜻과 예를 쓰세요.', columns: ['개념', '뜻', '예'], cells: [['고정관념', '', ''], ['편견', '', ''], ['차별', '', '']], answer: '머릿속 일반화·"그 나라 사람은 다 그래" / 좋고 싫음의 감정·괜히 불편함 / 불이익을 주는 행동·출신으로 면접 탈락' },
            { type: 'choice', prompt: '고정관념을 강화하는 표현에 ○ 하세요.', options: ['여러 직업의 이주민 등장', '억양만 흉내 내 웃기기', '사실 중심 기사 제목'], answer: '억양만 흉내 내 웃기기' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '한 가지 모습의 ___이 고정관념을 만든다.', answer: '반복' },
            { type: 'short', prompt: '가상 예능 장면 하나를 고정관념 없이 다시 써 보세요.' },
          ],
        },
        notes: '자주 보이는 어려움: ① "실제로 그런 사람도 있다"며 반복 묘사를 정당화한다 → 한 모습의 반복이 다른 모습을 지운다는 점을 짚는다. ② 고정관념·편견·차별을 섞어 쓴다 → 생각·감정·행동으로 구별한다. ③ 학급의 이주배경 학생을 예로 들거나 주목시키지 않는다 — 장면은 모두 가상이다.',
      }),
      LESSON(2, {
        title: '차별을 목격한 순간 안전하게 개입하는 행동 고르기',
        objective: '일상에서 출신·피부색·언어를 이유로 한 차별을 목격했을 때 나의 안전을 지키며 개입하는 방법을 구별하고 알맞은 행동을 고를 수 있다.',
        draw: 'a paper-cut bus interior where one passenger stands beside another to show support, with soft light through the windows',
        banner: '곁에 서는 용기', extra: [{ motif: 'flower', x: 300, y: 222, color: 'rose' }],
        intro: {
          teacher: '"버스에서 누군가 외국인 승객에게 \'너희 나라로 가라\'고 소리친다면, 주변 사람들은 보통 어떻게 할까요?" 대답을 듣고(기다릴 반응: "모른 척해요", "무서워서 못 나서요") 그 마음이 자연스럽다고 받아 준다. "나섰다가 나도 위험해지면요?"라는 걱정에는 "맞서 싸우는 것만 개입일까요? 곁에 서거나 도움을 부르는 것도 개입이 아닐까요?"라고 되묻는다. 오늘은 안전한 개입 방법을 고른다고 밝힌다.',
          student: '누군가 곤란할 때 옆 사람이 해 준 작은 행동 가운데 힘이 되었을 법한 것을 짝과 하나 말해 봅시다.',
          demo: DEMO('목격자의 행동', ['안전한 개입', '방관·동조'], ['피해자 곁에 가서 서요', '휴대폰으로 웃으며 찍어요'], { '안전한 개입': ['피해자 곁에 가서 서요'], '방관·동조': ['휴대폰으로 웃으며 찍어요'] }),
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 안전한 개입 방법 알기', minutes: 12, tool: 'mindmap',
            teacher: '"직접 맞서기 어렵다면 어떤 방법이 있을까요?" 주의 돌리기(말 걸기), 도움 요청(기사·직원·112), 곁에 서기, 나중에 피해자에게 괜찮은지 묻기 같은 방법을 정리한다. 1번에서 "가해자와 몸싸움"을 개입에 넣는 학생에게 "내가 다치면 누가 피해자를 도울 수 있을까요?"라고 묻는다. 위협·폭력이 있으면 112에 신고하는 것이 먼저라는 점을 짚는다.',
            task: '차별을 목격했을 때의 행동을 안전한 개입과 위험하거나 방관하는 행동으로 나누고 이어요.',
            levels: LV,
            items: [
              MS('목격자의 행동을 두 가지로 나누어 보세요.', '목격자의 행동', ['안전한 개입', '위험하거나 방관'], ['버스 기사님께 알려요', '피해자에게 말을 걸어요', '가해자와 몸싸움해요', '못 본 척 이어폰을 껴요'], { '안전한 개입': ['버스 기사님께 알려요', '피해자에게 말을 걸어요'], '위험하거나 방관': ['가해자와 몸싸움해요', '못 본 척 이어폰을 껴요'] }, 0.2),
              MM('개입 방법과 그 예를 이어 보세요. 맞지 않는 카드는 남겨요.', '개입의 방법', [{ id: 'i1', label: '주의 돌리기' }, { id: 'i2', label: '도움 부르기' }, { id: 'i3', label: '나중에 살피기' }], ['"혹시 길 아세요?" 말 걸기', '직원·기사·112에 알리기', '"괜찮으세요?" 묻기', '가해자에게 욕하기'], { i1: '"혹시 길 아세요?" 말 걸기', i2: '직원·기사·112에 알리기', i3: '"괜찮으세요?" 묻기' }, 0.25),
              MP('위협이나 폭력이 있을 때 먼저 할 일만 골라 담아 보세요.', '위급할 때', ['112에 신고해요', '주변 어른에게 알려요', '안전한 거리를 지켜요', '혼자 막아서요'], ['112에 신고해요', '주변 어른에게 알려요', '안전한 거리를 지켜요'], 0.25,
                { conclude: '개입은 맞서 싸우는 것만이 아니에요. 주의 돌리기·도움 부르기·곁에 서기·나중에 살피기 모두 힘이 돼요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 차별 목격 갈림길에서 고르기', minutes: 15, tool: 'emotion',
            teacher: '"이 행동을 하면 피해를 입은 사람은 어떤 마음일까요?" 결과 칸을 읽고 피해자의 입장에서 말하게 한다. 2번 아르바이트 장면에서 "사장님이니 어쩔 수 없다"는 학생에게 출신을 이유로 한 차별은 누구에게도 허용되지 않으며, 일터의 문제는 믿을 만한 어른·기관과 의논할 수 있다는 점을 짚는다. 온라인 장면에서는 퍼뜨리지 않고 신고하는 길을 강조한다.',
            task: '차별을 목격한 장면에서 안전하고 알맞은 행동을 골라요.',
            levels: LVB,
            items: [
              EB('어떻게 할까요?', '버스에서 한 승객이 외국인 승객에게 "너희 나라로 가라"고 소리쳐요.', [{ id: 'join', text: '분위기에 맞춰 같이 째려봐요', result: '외국인 승객이 더 위축돼요', mood: '속상함', why: '동조는 차별에 힘을 실어 줘요.' }, { id: 'near', text: '곁에 서서 "괜찮으세요?" 묻고 기사님께 알려요', result: '승객이 안심하고 소란이 멈춰요', mood: '안심' }, { id: 'film', text: '영상을 찍어 SNS에 올려요', result: '피해자 얼굴까지 퍼져요', mood: '걱정', why: '피해자의 동의 없는 영상은 또 다른 피해가 돼요.' }], 'near', 0.2),
              EB('어떻게 할까요?', '편의점 아르바이트 중 손님이 외국인 동료에게 "말 못 알아듣는 사람 말고 다른 사람"이라고 해요.', [{ id: 'quiet', text: '손님 말대로 동료를 들어가게 해요', result: '동료가 하루 내내 위축돼요', mood: '속상함', why: '출신을 이유로 한 차별에 따르면 차별이 굳어져요.' }, { id: 'serve', text: '"이분이 도와드릴 거예요" 하고 곁에서 함께해요', result: '손님이 더 말하지 않고 계산해요', mood: '평온' }], 'serve', 0.25),
              EB('무엇을 할까요?', '학급 단톡방에 이주민을 조롱하는 짤이 올라와 다들 웃는 이모티콘을 달아요.', [{ id: 'emoji', text: '나도 웃는 이모티콘을 달아요', result: '조롱 짤이 계속 올라와요', mood: '걱정', why: '반응은 조롱을 더 부추겨요.' }, { id: 'say', text: '"이건 좀 불편해" 쓰고 신고해요', result: '몇몇이 동의하고 짤이 지워져요', mood: '안심' }, { id: 'leave', text: '말없이 단톡방을 나가요', result: '짤은 그대로 남아요', mood: '걱정', why: '나가면 나는 편하지만 조롱은 계속될 수 있어요.' }], 'say', 0.3,
                { conclude: '차별 앞에서 침묵하지 않되, 나의 안전을 지키는 방법으로 피해자 곁에 서요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 고른 행동 가운데 가장 해 볼 수 있을 것 같은 것은 무엇인가요?" 출구 1번에서 영상을 찍어 올리는 보기를 고른 학생에게는 피해자의 동의가 먼저라는 점을 다시 짚는다. 차별을 직접 겪었다면 담임·상담 선생님께 도움을 청할 수 있다고 말해 준다.',
          exit: [
            XB('어떻게 할까요?', '식당에서 한 손님이 옆 테이블 외국인 가족을 향해 큰 소리로 불평해요.', [{ id: 'staff', text: '직원에게 조용히 알려요', result: '직원이 상황을 정리해요', mood: '안심' }, { id: 'fight', text: '손님에게 소리치며 맞서요', result: '말다툼이 커져요', mood: '화남', why: '내 안전을 지키는 방법으로 도움을 불러요.' }], 'staff'),
            XC('차별을 목격했을 때 안전한 개입으로 가장 알맞은 것은?', ['가해자와 몸싸움을 한다', '피해자 곁에 서고 직원·기사 등에게 도움을 청한다', '영상을 찍어 바로 올린다'], 1, '곁에 서고 도움을 부르는 것이 안전하고 힘 있는 개입이에요.'),
            XT('차별을 목격한 뒤 피해를 입은 사람에게 건넬 말을 한 문장으로 쓰세요.'),
          ],
        },
        ws: {
          title: '차별을 목격한 순간의 선택',
          items: [
            { type: 'table', prompt: '개입 방법과 예를 쓰세요.', columns: ['방법', '예'], cells: [['주의 돌리기', ''], ['도움 부르기', ''], ['곁에 서기', ''], ['나중에 살피기', '']], answer: '말 걸기 / 직원·기사·112 / 피해자 옆에 서기 / "괜찮으세요?"' },
            { type: 'choice', prompt: '위협이나 폭력이 있을 때 먼저 할 일에 ○ 하세요.', options: ['혼자 막아서기', '112 신고', '영상 찍기'], answer: '112 신고' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '피해자의 ___ 없는 영상 공유는 또 다른 피해가 될 수 있다.', answer: '동의' },
            { type: 'short', prompt: '차별 앞에서 침묵하지 않기 위해 내가 할 수 있는 행동 두 가지를 쓰세요.' },
          ],
        },
        notes: '자주 보이는 어려움: ① 개입을 맞서 싸우는 것으로만 여겨 포기한다 → 안전한 개입 방법을 여러 가지 보여 준다. ② 증거를 위해 영상을 올리려 한다 → 피해자 동의와 신고 경로를 짚는다. ③ 학생의 차별 피해 경험을 묻지 않는다 — 장면은 모두 가상이다.',
      }),
    ],
  });
})();
