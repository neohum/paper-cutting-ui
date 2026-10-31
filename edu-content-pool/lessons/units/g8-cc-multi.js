/* 중2 창체 법정교육 — 다문화 이해 (2차시). 근거: 다문화가족지원법 제5조·시행령 제10조의2, 교육부 지침 연 2시간.
 * 문화 이해 태도(자문화 중심주의·문화 사대주의·문화 상대주의)는 중학교 사회 교육과정의 낱말을 쓴다. 특정 국가·종교의 관습을 평가하지 않고 가상의 예만 든다. 장면·인물은 가명. */
(function () {
  const G = 8; const CODE = 'multi';
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
    { motif: 'house', x: 96, y: 214, color: 'lavender', s: 0.9 }, { motif: 'tree', x: 380, y: 214 }, ...extra,
    { motif: 'text', x: 240, y: 140, text, size: 22 },
  ] });
  // 활동 문항 — 한 활동은 교구 하나로만 돈다(mindmap: MS·MM·MP / emotion: EB·ES / story: SO)
  const MS = (prompt, topic, slots, cards, sort, d, more) => ({ prompt, toolOptions: { mode: 'sort', topic, slots, cards }, target: { sort }, difficulty: d, ...more });
  const MM = (prompt, topic, slots, cards, match, d, more) => ({ prompt, toolOptions: { mode: 'match', topic, slots, cards }, target: { match }, difficulty: d, ...more });
  const MP = (prompt, topic, cards, pick, d, more) => ({ prompt, toolOptions: { mode: 'pick', topic, basket: topic, cards }, target: { pick }, difficulty: d, ...more });
  const EB = (prompt, situation, choices, choice, d, more) => ({ prompt, toolOptions: { mode: 'branch', situation, choices }, target: { choice }, difficulty: d, ...more });
  const ES = (prompt, situation, feeling, level, d, more) => ({ prompt, toolOptions: { mode: 'scale', situation, feeling }, target: { level }, difficulty: d, ...more });
  const SO = (prompt, title, slots, cards, order, d, more) => ({ prompt, toolOptions: { mode: 'order', title, slots, cards }, target: { order }, difficulty: d, ...more });
  const C = (id, text, motif) => ({ id, text, motif });
  const TALK = (prompt) => ({ prompt, free: true, talk: true, difficulty: 0 });
  const LV = { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } };
  const LVB = { easy: { showBack: true }, base: {}, challenge: {} };
  // 출구 질문
  const XS = (prompt, topic, slots, cards, sort, d = 0.2) => ({ type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic, slots, cards }, state: { at: {} }, prompt, target: { sort }, difficulty: d });
  const XB = (prompt, situation, choices, choice, d = 0.2) => ({ type: 'tool', tool: 'emotion', options: { mode: 'branch', situation, choices }, state: { choice: null }, prompt, target: { choice }, difficulty: d });
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
    flow: '1학년에서 고정관념·편견·차별을 구별하고 존중하는 첫마디를 익힌 학생들이 2학년에서는 말의 영향과 존중의 기준을 따집니다. 1차시에는 별명·흉내·단톡방 농담처럼 "의도는 장난"이었던 말이 받는 사람에게 차별로 남는 까닭을 의도와 영향으로 나누어 봅니다. 2차시에는 문화의 다양성은 존중하되 인권을 침해하는 행동은 어떤 문화에서도 허용되지 않는다는 기준을 세우고, 자문화 중심주의·문화 사대주의·문화 상대주의를 사례에 적용합니다. 3학년(혐오 표현과 세계시민 행동)으로 이어집니다.',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '장난이라던 말의 의도와 영향 나누어 보기',
        objective: '별명·흉내·농담이 의도와 상관없이 차별로 남는 까닭을 의도와 영향으로 나누어 말하고, 존중하는 말로 바꿀 수 있다.',
        draw: 'a paper speech bubble cracking into pieces between two students, one holding a heart-shaped patch to fix it',
        banner: '의도보다 영향', extra: [{ motif: 'star', x: 300, y: 96, color: 'lavender' }],
        intro: {
          teacher: '"\'장난이었어\'라는 말로 상처가 사라질까요?" 대답을 듣고(기다릴 반응: "아니요", "더 기분 나빠요") 시연으로 말 카드를 나눈다. "웃자고 한 말에 죽자고 덤비면 안 되죠"라는 말이 나오면 "같은 말을 매일 듣는 사람에게도 웃자고 한 말일까요?"라고 되묻는다. 오늘은 말의 의도와 영향을 나누어 본다고 밝힌다.',
          student: '농담으로 한 말이 상대에게 다르게 받아들여질 수 있는 예를 가상으로 하나 들어 짝에게 말해 봅시다.',
          demo: DEMO('말의 무게', ['의도', '영향'], ['웃기려고 했어', '반에서 겉도는 느낌'], { '의도': ['웃기려고 했어'], '영향': ['반에서 겉도는 느낌'] }),
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 의도와 영향 나누기', minutes: 13, tool: 'mindmap',
            teacher: '"말한 사람은 어떤 생각이었고, 들은 사람에게는 무엇이 남았을까요?" 차별인지 판단할 때는 말한 사람의 의도만이 아니라 받은 사람에게 남은 영향도 함께 본다는 점을 짚는다. "다문화"라는 낱말을 사람을 부르는 말("야, 다문화")로 쓰면 친구를 집단 이름으로만 부르게 된다는 점을 말해 준다.',
            task: '장면 카드에서 말한 사람의 의도와 받은 사람에게 남은 영향을 나누어요.',
            levels: LV,
            items: [
              MS('별명 장면의 카드를 두 가지로 나누어 보세요.', '별명 장면', ['말한 사람의 의도', '받은 사람의 영향'], ['친해지려고 붙였어', '부를 때마다 움츠러들어', '다들 웃어서 괜찮은 줄', '이름 대신 출신으로 불려'], { '말한 사람의 의도': ['친해지려고 붙였어', '다들 웃어서 괜찮은 줄'], '받은 사람의 영향': ['부를 때마다 움츠러들어', '이름 대신 출신으로 불려'] }, 0.2),
              MM('말과 받은 사람에게 남는 영향을 이어 보세요. 맞지 않는 카드는 남겨요.', '남는 영향', [{ id: 'i1', label: '"야, 다문화" 하고 부르기' }, { id: 'i2', label: '부모님 발음 흉내 내기' }, { id: 'i3', label: '피부색으로 농담하기' }], ['이름이 지워진 느낌', '가족이 놀림받는 느낌', '몸이 웃음거리가 된 느낌', '더 친해진 느낌'], { i1: '이름이 지워진 느낌', i2: '가족이 놀림받는 느낌', i3: '몸이 웃음거리가 된 느낌' }, 0.25),
              MP('차별인지 판단할 때 함께 볼 것만 골라 담아 보세요.', '판단할 때 볼 것', ['받은 사람에게 남은 영향', '되풀이되는지', '말한 사람이 웃었는지만', '다수가 괜찮다고 했는지만'], ['받은 사람에게 남은 영향', '되풀이되는지'], 0.3,
                { conclude: '의도는 말한 사람의 것이지만, 영향은 받은 사람에게 남아요. 차별은 영향으로 판단해요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 말을 바꾸고 분위기 바꾸기', minutes: 14, tool: 'mindmap',
            teacher: '"말을 바꾸면 무엇이 달라질까요?" 이름을 부르는 것이 존중의 시작이라는 점을 짚는다. 내가 그런 말을 했다는 것을 알게 되었을 때 "몰랐어, 미안해. 앞으로 안 할게"처럼 사과하는 말도 연습한다. 3번은 모둠에서 말로 나눈다.',
            task: '차별로 남는 말을 존중하는 말로 바꾸고, 그런 말을 들었을 때 분위기를 바꾸는 행동을 골라요.',
            levels: LV,
            items: [
              MM('바꿀 말과 바꾼 말을 이어 보세요. 맞지 않는 카드는 남겨요.', '말 바꾸기', [{ id: 'w1', label: '야, 다문화!' }, { id: 'w2', label: '외국 사람처럼 생겼다' }, { id: 'w3', label: '장난인데 왜 정색해?' }], ['이름을 불러요', '외모 이야기는 하지 않아요', '불편했다면 미안해', '원래 그렇잖아'], { w1: '이름을 불러요', w2: '외모 이야기는 하지 않아요', w3: '불편했다면 미안해' }, 0.25),
              MS('농담 장면에서의 행동을 두 가지로 나누어 보세요.', '농담 장면에서', ['분위기를 바꿔요', '분위기를 키워요'], ['"그 말은 좀 아니다" 말해요', '친구 이름을 불러 화제를 돌려요', '흉내를 따라 해요', '단톡방에 퍼 날라요'], { '분위기를 바꿔요': ['"그 말은 좀 아니다" 말해요', '친구 이름을 불러 화제를 돌려요'], '분위기를 키워요': ['흉내를 따라 해요', '단톡방에 퍼 날라요'] }, 0.3,
                { conclude: '이름 부르기, 짧은 한마디, 사과 — 작은 말이 반의 분위기를 바꿔요.' }),
              TALK('모둠에서 "출신·외모로 부르지 않는 우리 반 약속" 한 문장을 정해 말하고 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"내가 무심코 한 말이 누군가에게 상처였다는 걸 알게 되면 무엇을 할 건가요?" 출구 1번에서 "다들 웃었다"를 판단 근거로 고른 학생에게는 웃음은 다수의 반응일 뿐 받은 사람의 영향이 아니라는 점을 다시 짚는다.',
          exit: [
            XS('카드를 나누어 보세요.', '의도와 영향', ['말한 사람의 의도', '받은 사람의 영향'], ['재밌으라고 했어', '학교 오기가 싫어졌어', '별 뜻 없었어', '가족까지 부끄러워졌어'], { '말한 사람의 의도': ['재밌으라고 했어', '별 뜻 없었어'], '받은 사람의 영향': ['학교 오기가 싫어졌어', '가족까지 부끄러워졌어'] }),
            XC('"장난이었어"라는 말에 대한 생각으로 알맞은 것은 무엇인가요?', ['장난이면 차별이 아니다', '받은 사람에게 남은 영향을 함께 봐야 한다', '다수가 웃었으면 괜찮다'], 1, '차별인지는 의도만이 아니라 받은 사람에게 남은 영향으로 판단해요.'),
            XT('내 말이 상처였다는 걸 알았을 때 건넬 사과의 말을 한 문장으로 쓰세요.'),
            MOOD,
          ],
        },
        ws: {
          title: '의도보다 영향',
          items: [
            { type: 'table', prompt: '말과 받은 사람의 영향을 쓰세요.', columns: ['말', '받은 사람의 영향'], cells: [['"야, 다문화"', ''], ['부모님 발음 흉내', ''], ['피부색 농담', '']], answer: '이름이 지워진 느낌, 가족이 놀림받는 느낌, 몸이 웃음거리가 된 느낌' },
            { type: 'choice', prompt: '농담 장면에서 분위기를 바꾸는 행동에 ○ 하세요.', options: ['흉내를 따라 한다', '친구 이름을 불러 화제를 돌린다', '단톡방에 퍼 나른다'], answer: '친구 이름을 불러 화제를 돌린다' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '차별인지는 말한 사람의 의도보다 받은 사람에게 남은 ___으로 판단해요.', answer: '영향' },
            { type: 'short', prompt: '"웃자고 한 말에 왜 정색해?"라는 말에 답하는 글을 두 문장으로 쓰세요.' },
          ],
        },
        notes: '자주 보이는 어려움: ① 의도가 나쁘지 않으면 괜찮다고 여긴다 → 의도와 영향을 나누어 보게 한다. ② 다수가 웃으면 괜찮다고 여긴다 → 웃음은 받은 사람의 마음을 대신하지 않는다는 점을 짚는다. ③ 반에서 실제로 쓰이는 별명을 꺼내 공개하지 않는다 — 장면은 모두 가상이다.',
      }),

      LESSON(2, {
        title: '존중할 문화 차이와 지킬 인권의 선 긋기',
        objective: '문화의 다양성을 존중하는 태도와 인권을 침해하는 행동을 가려내고, 문화를 바라보는 세 가지 태도를 사례에 적용할 수 있다.',
        draw: 'a paper world map with many different greeting gestures drawn around it and a strong line labelled human rights beneath',
        banner: '다름은 존중, 인권은 지켜요', extra: [{ motif: 'leaf', x: 300, y: 222 }],
        intro: {
          teacher: '"손으로 밥을 먹는 문화, 젓가락을 쓰는 문화, 포크를 쓰는 문화 중 가장 앞선 것은 무엇일까요?" 대답을 듣고(기다릴 반응: "다 다르지 앞선 건 없어요") 시연으로 사례 카드를 나눈다. "문화니까 무엇이든 존중해야 해요"라는 말이 나오면 "아이를 학교에 못 가게 하는 것도 문화라면 존중해야 할까요?"라고 되묻는다. 오늘은 존중할 차이와 지켜야 할 선을 함께 찾는다고 밝힌다.',
          student: '다른 나라나 지역에서 우리와 다르게 하는 일상 습관 하나를 떠올려 짝에게 말해 봅시다.',
          demo: DEMO('문화와 인권', ['존중할 차이', '지킬 인권'], ['다른 인사 방식', '모든 아이가 배울 권리'], { '존중할 차이': ['다른 인사 방식'], '지킬 인권': ['모든 아이가 배울 권리'] }),
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 문화를 바라보는 태도 알아보기', minutes: 13, tool: 'mindmap',
            teacher: '"우리 문화만 옳다고 보는 태도와 다른 문화만 멋있다고 보는 태도는 무엇이 같을까요?" 둘 다 문화를 그 사회의 맥락에서 보지 않는다는 점을 짚는다. 문화 상대주의는 그 사회의 환경과 역사 속에서 문화를 이해하는 태도라고 정리한다. "문화 상대주의면 무엇이든 괜찮다"는 오해는 활동 2에서 다룬다고 예고한다.',
            task: '문화를 바라보는 세 가지 태도와 사례를 잇고 나누어요.',
            levels: LV,
            items: [
              MM('태도와 뜻을 이어 보세요. 맞지 않는 카드는 남겨요.', '세 가지 태도', [{ id: 't1', label: '자문화 중심주의' }, { id: 't2', label: '문화 사대주의' }, { id: 't3', label: '문화 상대주의' }], ['우리 문화만 우월하다고 봐요', '다른 문화만 우월하다고 봐요', '그 사회의 맥락에서 이해해요', '문화를 모두 하나로 만들어요'], { t1: '우리 문화만 우월하다고 봐요', t2: '다른 문화만 우월하다고 봐요', t3: '그 사회의 맥락에서 이해해요' }, 0.2),
              MS('말을 세 가지 태도로 나누어 보세요.', '어떤 태도일까', ['자문화 중심주의', '문화 사대주의', '문화 상대주의'], ['손으로 먹다니 미개해', '우리 음식은 촌스러워', '덥고 습한 곳이라 그렇게 먹는구나', '우리 명절만 진짜 명절이야'], { '자문화 중심주의': ['손으로 먹다니 미개해', '우리 명절만 진짜 명절이야'], '문화 사대주의': ['우리 음식은 촌스러워'], '문화 상대주의': ['덥고 습한 곳이라 그렇게 먹는구나'] }, 0.25),
              MP('문화 상대주의에 맞는 행동만 골라 담아 보세요.', '맥락으로 이해하기', ['낯선 음식의 유래를 찾아봐요', '그 지역 날씨와 함께 생각해요', '낯서니까 이상하다고 말해요', '외국 것이면 무조건 따라 해요'], ['낯선 음식의 유래를 찾아봐요', '그 지역 날씨와 함께 생각해요'], 0.3,
                { conclude: '문화에는 앞서고 뒤처진 것이 아니라, 그 사회의 환경과 역사가 담겨 있어요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 존중할 차이와 지킬 인권 가르기', minutes: 14, tool: 'mindmap',
            teacher: '"문화 상대주의에도 선이 있을까요?" 사람의 생명·안전·배울 권리·평등을 해치는 행동은 어떤 문화라는 이름으로도 정당화되지 않는다는 점(보편 윤리, 인권)을 짚는다. 이 기준은 다른 나라만이 아니라 우리 사회의 관습에도 똑같이 적용된다는 점을 말해 준다. 특정 나라 이름을 붙이지 않고 가상의 예로만 이야기한다.',
            task: '사례를 존중할 문화 차이와 인권을 지켜야 할 일로 나누고, 그 기준을 말해요.',
            levels: LV,
            items: [
              MS('사례를 두 가지로 나누어 보세요.', '문화일까 인권일까', ['존중할 차이', '인권을 지켜야 해요'], ['고개 숙여 인사하는 방식', '종교에 따라 먹지 않는 음식', '여자아이는 학교에 못 가게 함', '아이에게 위험한 일을 시킴'], { '존중할 차이': ['고개 숙여 인사하는 방식', '종교에 따라 먹지 않는 음식'], '인권을 지켜야 해요': ['여자아이는 학교에 못 가게 함', '아이에게 위험한 일을 시킴'] }, 0.25),
              MS('우리 사회의 일도 나누어 보세요.', '우리 사회에서도', ['존중할 차이', '인권을 지켜야 해요'], ['명절 차례를 지내는 방식', '집안 어른을 부르는 말', '나이 어리다고 의견을 무시함', '출신 지역으로 채용을 거절함'], { '존중할 차이': ['명절 차례를 지내는 방식', '집안 어른을 부르는 말'], '인권을 지켜야 해요': ['나이 어리다고 의견을 무시함', '출신 지역으로 채용을 거절함'] }, 0.3,
                { conclude: '생활 방식의 다름은 존중하고, 사람의 생명·안전·배움·평등을 해치는 일은 어디서든 멈춰요.' }),
              TALK('모둠에서 "존중할 차이와 지킬 인권을 가르는 우리만의 질문 하나"를 정해 말하고 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"문화를 존중한다는 것과 무엇이든 괜찮다고 하는 것은 어떻게 다른가요?" 출구 1번에서 인권 침해를 문화 차이로 둔 학생에게는 "누군가의 생명·안전·배움·평등을 해치나요?"라는 질문을 다시 던진다.',
          exit: [
            XS('사례를 나누어 보세요.', '어느 쪽일까', ['존중할 차이', '인권을 지켜야 해요'], ['명절 음식이 지역마다 달라요', '피부색으로 식당 입장을 막아요', '인사할 때 손을 모아요', '장애가 있다고 학교에 못 오게 해요'], { '존중할 차이': ['명절 음식이 지역마다 달라요', '인사할 때 손을 모아요'], '인권을 지켜야 해요': ['피부색으로 식당 입장을 막아요', '장애가 있다고 학교에 못 오게 해요'] }),
            XC('"낯선 음식을 그 지역의 기후와 함께 이해한다"는 어떤 태도인가요?', ['자문화 중심주의', '문화 사대주의', '문화 상대주의'], 2, '그 사회의 맥락에서 문화를 이해하는 것이 문화 상대주의예요.'),
            XT('문화 상대주의에도 선이 필요한 까닭을 한 문장으로 쓰세요.'),
          ],
        },
        ws: {
          title: '다름은 존중, 인권은 지켜요',
          items: [
            { type: 'table', prompt: '태도의 뜻을 쓰세요.', columns: ['태도', '뜻'], cells: [['자문화 중심주의', ''], ['문화 사대주의', ''], ['문화 상대주의', '']], answer: '우리 문화만 우월, 다른 문화만 우월, 그 사회의 맥락에서 이해' },
            { type: 'choice', prompt: '어떤 문화라도 허용되지 않는 것에 ○ 하세요.', options: ['다른 인사 방식', '아이에게 위험한 일을 시키기', '다른 명절 음식'], answer: '아이에게 위험한 일을 시키기' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '문화의 다름은 존중하되 사람의 ___을 해치는 일은 멈춰요.', answer: '인권' },
            { type: 'short', prompt: '우리 사회의 관습 가운데 인권의 눈으로 다시 볼 것 하나를 골라 까닭을 쓰세요.' },
          ],
        },
        notes: '자주 보이는 어려움: ① 문화 상대주의를 "무엇이든 괜찮다"로 이해한다 → 생명·안전·배움·평등이라는 선을 함께 세운다. ② 인권 문제를 "다른 나라 이야기"로만 본다 → 우리 사회의 관습에도 같은 기준을 적용하게 한다. ③ 특정 국가·종교를 예로 들어 평가하지 않는다.',
      }),
    ],
  });
})();
