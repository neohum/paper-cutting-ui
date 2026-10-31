/* 고3 창체 법정교육 — 장애인식개선 (2차시). 근거: 장애인복지법 제25조·시행령 제16조(매년 1회·1시간 이상), 범교과 기준 연 2시간. 이동권·생활 시설 접근성과 장애인 당사자의 자기결정·참여를 다룬다. 제도별 수치(보급률 등)는 쓰지 않는다.
 * 장면·인물은 이 단원을 위해 직접 지은 것이다(가명). 학생 자신의 경험을 털어놓게 하는 문항은 두지 않는다. */
(function () {
  const G = 12; const CODE = 'disab';
  const UNIT = `g${G}-창체-${CODE}`;
  const TITLE = '장애인식개선';
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
    flow: '고3 장애인식개선 단원은 성인 시민으로서 장애인의 권리를 생활 전체에서 바라보는 것으로 마무리합니다. 1차시에는 이동(저상버스·승강기·장애인 콜택시)과 생활 시설(무인 주문기·은행·병원)의 접근성을 살펴, 이동과 정보 이용이 편의가 아니라 학교·일·여가로 가는 권리의 출발점이라는 점을 확인합니다. 2차시에는 "우리에 관한 일을 우리 없이 정하지 말라"는 장애인 당사자 운동의 원칙에 따라, 학교 행사·동아리·여행을 계획할 때 장애가 있는 사람의 뜻을 묻고 함께 결정하는 행동을 갈림길로 고릅니다. 고1의 사회적 관점, 고2의 일터와 정보 접근성을 이어 시민의 책임으로 묶습니다.',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '이동과 생활 시설의 장벽을 권리의 눈으로 보기',
        objective: '저상버스·승강기·무인 주문기 같은 이동과 생활 시설의 접근성이 장애인의 교육·일·여가로 이어지는 권리임을 설명하고, 생활 속 장벽과 개선 방법을 찾을 수 있다.',
        draw: 'a paper-cut city street with a low-floor bus extending a ramp, an elevator at a subway entrance and a kiosk with a lowered screen',
        banner: '갈 수 있어야 할 수 있다', extra: [{ motif: 'bird', x: 340, y: 96 }],
        intro: {
          teacher: '"버스를 탈 수 없다면, 그 사람은 무엇을 함께 잃게 될까요?" 대답을 듣고(기다릴 반응: "학교요", "일자리요", "친구 만나기요") 칠판에 줄줄이 적는다. "이동은 편의일 뿐 권리까지는 아니지 않나요?"라는 말에는 "이동하지 못하면 교육받을 권리, 일할 권리는 어떻게 될까요?"라고 되묻는다. 시연으로 시설을 나누고, 오늘은 이동과 생활의 장벽을 권리의 눈으로 본다고 밝힌다.',
          student: '버스나 지하철을 이용할 때 누군가에게는 장벽이 될 수 있는 것 하나를 짝과 말해 봅시다.',
          demo: DEMO('이동 시설', ['접근성을 높여요', '장벽이 돼요'], ['경사판이 나오는 저상버스', '계단만 있는 지하철 출구'], { '접근성을 높여요': ['경사판이 나오는 저상버스'], '장벽이 돼요': ['계단만 있는 지하철 출구'] }),
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 이동이 막히면 함께 막히는 권리 잇기', minutes: 13, tool: 'mindmap',
            teacher: '"이 장벽 때문에 어떤 권리가 함께 막힐까요?" 이동권이 다른 권리로 가는 출발점이라는 점을 잇게 한다. 2번에서 무인 주문기를 장벽으로 보지 못하는 학생에게 "화면이 높고 소리 안내가 없다면 휠체어를 쓰거나 화면을 보기 어려운 사람은 어떻게 주문할까요?"라고 묻는다. 수치나 보급률은 다루지 않고 원리에 집중한다.',
            task: '이동·생활의 장벽과 그것 때문에 함께 막히는 권리를 잇고, 장벽을 찾아요.',
            levels: LV,
            items: [
              MM('장벽과 함께 막히는 권리를 이어 보세요. 맞지 않는 카드는 남겨요.', '장벽과 권리', [{ id: 'r1', label: '통학 버스에 탈 수 없어요' }, { id: 'r2', label: '회사 건물에 승강기가 없어요' }, { id: 'r3', label: '공연장에 휠체어석이 없어요' }], ['교육받을 권리', '일할 권리', '문화를 누릴 권리', '아무 권리도 아님'], { r1: '교육받을 권리', r2: '일할 권리', r3: '문화를 누릴 권리' }, 0.25),
              MS('생활 시설을 두 가지로 나누어 보세요.', '생활 시설 살피기', ['접근성을 높여요', '장벽이 돼요'], ['음성 안내가 되는 주문기', '낮은 높이의 은행 창구', '화면만 높은 무인 주문기', '턱 높은 병원 입구'], { '접근성을 높여요': ['음성 안내가 되는 주문기', '낮은 높이의 은행 창구'], '장벽이 돼요': ['화면만 높은 무인 주문기', '턱 높은 병원 입구'] }, 0.25),
              MP('이동 접근성을 높이는 시설만 골라 담아 보세요.', '이동을 돕는 시설', ['저상버스', '역 승강기', '음성 안내 신호등', '계단만 있는 육교'], ['저상버스', '역 승강기', '음성 안내 신호등'], 0.2,
                { conclude: '이동과 시설 이용은 편의가 아니라 교육·일·문화로 가는 권리의 출발점이에요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 생활 장벽에 대한 생각 가르기', minutes: 14, tool: 'mindmap',
            teacher: '"이 말에 담긴 생각은 장벽을 없애는 쪽일까요, 그대로 두는 쪽일까요?" 장애인 이동권 요구를 "불편을 끼친다"로만 보는 생각과, 모두의 이동을 넓힌다는 생각을 비교하게 한다. 2번에서 "도와줄 사람이 있으면 시설은 필요 없다"를 맞는 생각으로 넣는 학생에게 "누군가의 도움을 기다려야만 외출할 수 있다면 자유롭게 다니는 걸까요?"라고 묻는다. 특정 시위·단체를 평가하지 않는다. 3번은 짝과 말로 나눈다.',
            task: '생활 장벽에 관한 생각을 나누고, 시민으로서 할 수 있는 일을 골라요.',
            levels: LV,
            items: [
              MS('생각을 두 가지로 나누어 보세요.', '장벽에 대한 생각', ['장벽을 없애는 생각', '장벽을 두는 생각'], ['스스로 다닐 수 있어야 해요', '모두의 이동이 편해져요', '도와줄 사람 있으면 돼요', '소수라 비용이 아까워요'], { '장벽을 없애는 생각': ['스스로 다닐 수 있어야 해요', '모두의 이동이 편해져요'], '장벽을 두는 생각': ['도와줄 사람 있으면 돼요', '소수라 비용이 아까워요'] }, 0.3),
              MP('시민으로서 생활 장벽을 줄이는 데 할 수 있는 일만 골라 담아 보세요.', '시민이 할 수 있는 일', ['장벽을 발견하면 민원 내기', '점자블록 위 물건 치우기', '엘리베이터 양보하기', '장애인 주차 구역 잠깐 쓰기'], ['장벽을 발견하면 민원 내기', '점자블록 위 물건 치우기', '엘리베이터 양보하기'], 0.25,
                { conclude: '시설을 만드는 것은 제도의 몫이지만, 장벽을 알아차리고 지키는 것은 시민 모두의 몫이에요.' }),
              TALK('짝과 함께 등하굣길에서 찾을 수 있는 장벽 하나와 시민으로서 할 수 있는 일을 정해 말하고 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"졸업 뒤 내가 사는 동네에서 장벽을 발견하면 어떻게 하겠어요?" 출구 1번에서 육교를 이동을 돕는 시설로 넣은 학생에게는 계단만 있는 시설이 누구에게 장벽인지 다시 짚는다. 이동권은 모든 사람의 자유로운 삶과 이어져 있다는 말로 마무리한다.',
          exit: [
            XS('시설을 두 가지로 나누어 보세요.', '이동과 생활 시설', ['접근성을 높여요', '장벽이 돼요'], ['경사판 있는 버스', '점자 표기 승강기 버튼', '계단만 있는 출구', '화면만 높은 주문기'], { '접근성을 높여요': ['경사판 있는 버스', '점자 표기 승강기 버튼'], '장벽이 돼요': ['계단만 있는 출구', '화면만 높은 주문기'] }),
            XC('이동권을 권리로 보는 까닭으로 가장 알맞은 것은?', ['이동이 막히면 교육·일·문화의 권리도 막히기 때문', '버스 회사의 이익을 위해서', '장애인만 쓰는 시설이라서'], 0, '이동권은 다른 권리로 가는 출발점이에요.'),
            XT('생활 속에서 발견한 장벽 하나와 그것을 줄이는 방법을 한 문장으로 쓰세요.'),
          ],
        },
        ws: {
          title: '이동권과 생활 속 장벽',
          items: [
            { type: 'table', prompt: '장벽과 함께 막히는 권리를 쓰세요.', columns: ['장벽', '막히는 권리'], cells: [['통학 버스를 탈 수 없음', ''], ['회사에 승강기가 없음', ''], ['공연장에 휠체어석이 없음', '']], answer: '교육받을 권리 / 일할 권리 / 문화를 누릴 권리' },
            { type: 'choice', prompt: '접근성을 높이는 시설에 ○ 하세요.', options: ['턱 높은 입구', '음성 안내 주문기', '계단만 있는 육교'], answer: '음성 안내 주문기' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '이동권은 교육·일·문화로 가는 권리의 ___이다.', answer: '출발점' },
            { type: 'short', prompt: '시민으로서 생활 장벽을 줄이기 위해 할 수 있는 일 두 가지를 쓰세요.' },
          ],
        },
        notes: '자주 보이는 어려움: ① 이동을 개인의 불편으로만 본다 → 다른 권리와 이어지는 출발점임을 짚는다. ② 도움을 줄 사람이 있으면 된다고 여긴다 → 스스로 다닐 자유를 생각하게 한다. ③ 특정 시위·단체·정책을 평가하지 않고, 저상버스 보급률 같은 수치는 쓰지 않는다.',
      }),
      LESSON(2, {
        title: '장애가 있는 친구와 함께 계획을 정하는 행동 고르기',
        objective: '장애인 당사자의 자기결정과 참여 원칙을 설명하고, 행사·동아리·여행을 계획할 때 장애가 있는 사람의 뜻을 묻고 함께 결정하는 행동을 고를 수 있다.',
        draw: 'a paper-cut round table where students, one using a wheelchair and one using sign language, plan a trip together over a map',
        banner: '함께 정해요', extra: [{ motif: 'flower', x: 300, y: 222, color: 'rose' }],
        intro: {
          teacher: '"친구를 배려한다며 친구가 갈 곳과 할 일을 대신 정해 주면, 그건 배려일까요?" 대답을 듣고(기다릴 반응: "배려 맞아요", "물어봐야죠") 장애인 당사자 운동이 내건 "우리에 관한 일을 우리 없이 정하지 말라"는 말을 소개한다. "물어보면 오히려 부담 주는 거 아니에요?"라는 걱정에는 "묻지 않고 정하는 것과 물어서 정하는 것 중 누가 결정의 주인일까요?"라고 되묻는다. 오늘은 함께 정하는 행동을 고른다고 밝힌다.',
          student: '누군가 내 일을 대신 정해 버려서 서운했을 법한 가상 장면을 짝과 하나 말해 봅시다.',
          demo: DEMO('계획을 정하는 방식', ['함께 정해요', '대신 정해요'], ['원하는 활동을 물어요', '힘들 테니 빠지라고 해요'], { '함께 정해요': ['원하는 활동을 물어요'], '대신 정해요': ['힘들 테니 빠지라고 해요'] }),
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 계획 갈림길에서 함께 정하는 행동 고르기', minutes: 15, tool: 'emotion',
            teacher: '"이 결정의 주인은 누구일까요?" 결과 칸을 읽으며 당사자가 결정에서 빠졌는지, 함께했는지를 살피게 한다. 1번에서 "힘들 테니 빼 주자"를 고른 학생에게 "그 친구가 가고 싶어 한다면요? 먼저 물어보는 것이 순서 아닐까요?"라고 묻는다. 묻는다는 것이 장애에 대해 꼬치꼬치 캐묻는 것이 아니라, 원하는 것과 필요한 것을 묻는 것임을 짚는다.',
            task: '장애가 있는 친구와 함께 계획을 세우는 장면에서 알맞은 행동을 골라요.',
            levels: LVB,
            items: [
              EB('어떻게 할까요?', '졸업 여행 장소를 정하는데, 휠체어를 쓰는 친구 서진이도 함께 가요.', [{ id: 'exclude', text: '"힘들 테니 넌 쉬어" 하고 빼요', result: '서진이가 혼자 남아 서운해해요', mood: '속상함', why: '배려라도 본인의 뜻을 묻지 않으면 배제가 돼요.' }, { id: 'together', text: '서진이와 함께 접근 가능한 곳을 찾아 정해요', result: '모두 즐거운 여행 계획이 나와요', mood: '기쁨' }, { id: 'decide', text: '우리가 알아서 쉬운 곳으로 정해요', result: '서진이가 원하는 곳은 빠져요', mood: '걱정', why: '대신 정하면 결정의 주인이 바뀌어요.' }], 'together', 0.2),
              EB('무엇을 먼저 할까요?', '동아리 공연에 수어를 쓰는 친구 하람이가 참여하고 싶어 해요.', [{ id: 'ask', text: '하람이가 맡고 싶은 역할을 물어요', result: '하람이가 수어 공연 무대를 제안해요', mood: '기쁨' }, { id: 'back', text: '무대 뒤 정리만 맡겨요', result: '하람이가 하고 싶은 일을 못 해요', mood: '속상함', why: '역할은 짐작보다 본인의 뜻으로 정해요.' }], 'ask', 0.25),
              EB('어떻게 할까요?', '체육대회 종목을 정하는데 시각장애가 있는 친구 은재도 참여해요.', [{ id: 'adapt', text: '은재와 함께 소리 공 경기 같은 방법을 찾아요', result: '반 전체가 새 경기를 즐겨요', mood: '기쁨' }, { id: 'watch', text: '은재는 응원만 하자고 해요', result: '은재가 구경꾼이 돼요', mood: '속상함', why: '참여 방법을 함께 찾으면 모두 선수가 될 수 있어요.' }, { id: 'pity', text: '은재 몫까지 우리가 대신 해 줘요', result: '은재가 해 볼 기회를 잃어요', mood: '걱정', why: '대신 해 주는 것은 기회를 빼앗는 것일 수 있어요.' }], 'adapt', 0.3,
                { conclude: '배려의 출발은 대신 정하기가 아니라 묻고 함께 정하기예요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 자기결정을 존중하는 말 고르기', minutes: 12, tool: 'mindmap',
            teacher: '"이 말은 결정을 누구에게 맡기고 있나요?" 당사자에게 결정을 돌려주는 말과 빼앗는 말을 구별하게 한다. 2번에서 "다 너를 위해서야"를 존중하는 말에 넣는 학생에게 "그 말 뒤에 친구가 선택할 자리가 남아 있나요?"라고 묻는다. 3번은 짝과 말로 나눈다.',
            task: '자기결정을 존중하는 말과 빼앗는 말을 가르고 고쳐 말해요.',
            levels: LV,
            items: [
              MS('말을 두 가지로 나누어 보세요.', '결정을 대하는 말', ['결정을 돌려주는 말', '결정을 빼앗는 말'], ['어떻게 하고 싶어?', '필요한 게 있으면 말해 줘', '넌 그냥 앉아 있어', '다 너를 위해서야'], { '결정을 돌려주는 말': ['어떻게 하고 싶어?', '필요한 게 있으면 말해 줘'], '결정을 빼앗는 말': ['넌 그냥 앉아 있어', '다 너를 위해서야'] }, 0.25),
              MM('빼앗는 말과 돌려주는 말로 고쳐 이어 보세요. 맞지 않는 카드는 남겨요.', '고쳐 말하기', [{ id: 'k1', label: '넌 못 하니까 빠져' }, { id: 'k2', label: '내가 대신 골라 줄게' }, { id: 'k3', label: '도와줄게 (말없이 휠체어 밀기)' }], ['어떤 방법이면 함께할 수 있을까?', '네가 고르면 같이 찾아볼게', '도움이 필요한지 먼저 물을게', '조용히 따라오기만 해'], { k1: '어떤 방법이면 함께할 수 있을까?', k2: '네가 고르면 같이 찾아볼게', k3: '도움이 필요한지 먼저 물을게' }, 0.3,
                { conclude: '장애가 있는 사람도 자기 삶의 결정권자예요. 묻고, 듣고, 함께 방법을 찾아요.' }),
              TALK('짝과 함께 장애가 있는 친구와 학급 행사를 계획할 때 처음 건넬 말 한 가지를 정해 말하고 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"초·중·고에서 배운 장애인식개선 가운데 졸업 뒤에도 가져갈 한 가지는 무엇인가요?" 출구 1번에서 "응원만 하자"를 고른 학생에게는 참여 방법을 함께 찾는 것이 존중이라는 점을 다시 짚는다. "우리에 관한 일을 우리 없이 정하지 말라"는 말을 다시 읽으며 마무리한다.',
          exit: [
            XB('어떻게 할까요?', '학급 소풍 일정을 짜는데 다리를 다쳐 목발을 쓰는 친구가 있어요.', [{ id: 'plan', text: '친구에게 무리 없는 일정을 물어 함께 짜요', result: '모두 무리 없이 소풍을 즐겨요', mood: '기쁨' }, { id: 'drop', text: '친구는 이번엔 빠지라고 해요', result: '친구가 혼자 남아요', mood: '속상함', why: '빼기 전에 함께할 방법을 먼저 물어요.' }], 'plan'),
            XC('장애인 당사자의 자기결정을 존중하는 태도로 가장 알맞은 것은?', ['배려하는 마음으로 대신 정해 준다', '원하는 것과 필요한 것을 묻고 함께 정한다', '어려운 일은 처음부터 빼 준다'], 1, '결정의 주인은 당사자예요. 묻고 함께 정해요.'),
            XT('"우리에 관한 일을 우리 없이 정하지 말라"는 말의 뜻을 내 말로 한 문장으로 쓰세요.'),
          ],
        },
        ws: {
          title: '당사자와 함께 결정하기',
          items: [
            { type: 'table', prompt: '결정을 빼앗는 말을 돌려주는 말로 고쳐 쓰세요.', columns: ['빼앗는 말', '돌려주는 말'], cells: [['넌 못 하니까 빠져', ''], ['내가 대신 골라 줄게', ''], ['그냥 앉아 있어', '']], answer: '어떤 방법이면 함께할 수 있을까? / 네가 고르면 같이 찾아볼게 / 어떻게 하고 싶어?' },
            { type: 'choice', prompt: '자기결정을 존중하는 말에 ○ 하세요.', options: ['다 너를 위해서야', '어떻게 하고 싶어?', '넌 응원만 해'], answer: '어떻게 하고 싶어?' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '배려의 출발은 대신 정하기가 아니라 묻고 ___ 정하기이다.', answer: '함께' },
            { type: 'short', prompt: '장애가 있는 친구와 함께 행사를 계획할 때 지킬 원칙 두 가지를 쓰세요.' },
          ],
        },
        notes: '자주 보이는 어려움: ① 대신 정해 주는 것을 배려로 여긴다 → 결정의 주인이 누구인지 묻게 한다. ② 묻는 것을 장애에 대해 캐묻는 것으로 오해한다 → 원하는 것과 필요한 것을 묻는 것임을 짚는다. ③ 학급의 장애 학생을 예로 들지 않는다 — 인물과 장면은 모두 가상이다.',
      }),
    ],
  });
})();
