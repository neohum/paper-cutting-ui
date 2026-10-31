/* 3학년 창체 안전교육 — 응급처치. 근거: 「학교 안전교육 실시 기준 등에 관한 고시」 별표 2 초등 응급처치.
 * (상처의 종류와 응급처치, 일상생활 속 응급처치) 장면·인물은 이 단원을 위해 지은 것이다(가명). */
(function () {
  const ID = 'g3-cc-saf-firstaid';
  const UNIT = 'g3-창체-saf-firstaid';
  const TITLE = '응급처치';
  const GRADE = 3;
  const two = (n) => String(n).padStart(2, '0');
  const base = (n) => ({
    id: `${ID}-${two(n)}`, schema: 'edu-lesson.v1', catalog: { unit: UNIT, lesson: n },
    grade: GRADE, subject: '창체', unitTitle: TITLE, standards: [], minutes: 40,
    formats: ['chromebook', 'projector', 'print'],
  });
  const PROMPT = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const SCENE = (text, extra = []) => ({ viewBox: [480, 270], layers: [
    { motif: 'sun', x: 410, y: 58, s: 0.8 }, { motif: 'cloud', x: 120, y: 52 }, { motif: 'hills', y: 204 },
    { motif: 'house', x: 96, y: 214, color: 'peach', s: 0.9 }, { motif: 'tree', x: 380, y: 214 }, ...extra,
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
    flow: '3학년 응급처치는 상처의 종류를 구별하고 긁힘·베임·데임·삠처럼 생활에서 자주 겪는 일을 어른과 함께 바르게 돌보는 순서를 익히는 단원입니다. 1차시에는 상처 장면을 종류별로 나누고, 손 씻기 → 상처 씻기 → 깨끗한 거즈로 누르기 → 어른에게 알리기 차례를 놓습니다. 2차시에는 데었을 때와 삐었을 때의 갈림길 장면에서 행동을 고르고, 된장·치약 바르기 같은 잘못된 민간요법을 가려냅니다. 1~2학년의 "알리기"를 바탕으로 3학년은 "까닭을 알고 돕기"까지 나아가되, 큰 상처는 언제나 어른·119에 맡긴다는 선을 지킵니다. 보건 수업과 묶어 운영할 수 있습니다(시수 인정은 학교 결정).',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '상처 종류 나누고 돌보는 차례 놓기',
        objective: '긁힘·베임·찔림 같은 상처를 구별하고, 상처를 씻고 눌러 돌보는 차례를 말할 수 있다.',
        draw: 'a child washing a small scrape on an arm under running water while an adult holds clean gauze and a bandage box',
        banner: '씻고, 누르고, 알려요', extra: [{ motif: 'leaf', x: 300, y: 222, color: 'mint' }],
        intro: {
          teacher: '"넘어져서 까진 상처와 종이에 베인 상처는 똑같을까요?" 대답을 듣고(기다릴 반응: "까진 건 넓고, 베인 건 길쭉해요") 시연 단추로 상처 카드가 나뉘는 모습을 보여 준다. "피가 나면 휴지로 문질러요"가 나오면 "문지르면 상처가 어떻게 될까요?"라고 되묻는다. 오늘은 상처를 구별하고 돌보는 차례를 익힌다고 밝힌다.',
          student: '작은 상처가 났을 때 어른이 어떻게 돌봐 주었는지 짝에게 말해 봐요.',
          demo: { tool: 'mindmap', options: { topic: '상처 종류', slots: ['긁힘', '베임'], cards: ['넘어져 무릎이 까졌어요', '종이에 손가락을 베었어요'], shuffle: false }, sequence: [{ sort: { '긁힘': ['넘어져 무릎이 까졌어요'], '베임': ['종이에 손가락을 베었어요'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 상처 종류 나누기', tool: 'mindmap',
            teacher: '"어떻게 다쳐서 생긴 상처인지 먼저 생각해 볼까요?" 넘어져 쓸린 것은 긁힘, 날카로운 것에 갈라진 것은 베임, 뾰족한 것이 들어간 것은 찔림이라고 짚는다. 멍을 상처가 아니라고 여기는 학생에게 "부딪혀 피부 속에서 피가 났어요"라고 말해 준다. 찔린 가시·유리가 깊이 박히면 스스로 빼지 말고 어른에게 보인다는 것을 꼭 덧붙인다.',
            task: '다친 장면을 상처 종류별로 나누어요.',
            levels: LV,
            items: [
              MS('장면을 상처 종류로 나누어 보세요.', '어떤 상처일까', ['긁힘', '베임'], ['미끄럼틀에서 팔이 쓸렸어요', '칼에 손가락이 베었어요', '자전거에서 넘어져 까졌어요', '종이 끝에 손이 베었어요'], { '긁힘': ['미끄럼틀에서 팔이 쓸렸어요', '자전거에서 넘어져 까졌어요'], '베임': ['칼에 손가락이 베었어요', '종이 끝에 손이 베었어요'] }, 0.15),
              MS('장면을 상처 종류로 나누어 보세요.', '찔림과 멍', ['찔림', '멍'], ['나무 가시가 박혔어요', '책상에 정강이를 부딪쳤어요', '압정에 발을 찔렸어요', '문에 팔을 쾅 부딪쳤어요'], { '찔림': ['나무 가시가 박혔어요', '압정에 발을 찔렸어요'], '멍': ['책상에 정강이를 부딪쳤어요', '문에 팔을 쾅 부딪쳤어요'] }, 0.2),
              MM('상처와 먼저 할 일을 이어요. 맞지 않는 카드는 남겨요.', '먼저 할 일', [{ id: 'k1', label: '무릎이 까졌어요' }, { id: 'k2', label: '손가락 베여 피가 나요' }, { id: 'k3', label: '가시가 깊이 박혔어요' }], ['흐르는 물로 씻어요', '깨끗한 거즈로 꾹 눌러요', '빼지 말고 어른에게 보여요', '입으로 빨아요'], { k1: '흐르는 물로 씻어요', k2: '깨끗한 거즈로 꾹 눌러요', k3: '빼지 말고 어른에게 보여요' }, 0.3,
                { conclude: '상처마다 먼저 할 일이 달라요. 깊은 상처는 어른에게 맡겨요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 상처 돌보는 차례', tool: 'story',
            teacher: '"상처를 만지기 전에 가장 먼저 무엇을 할까요?" 돕는 사람도 손을 씻어야 균이 들어가지 않는다는 것을 짚는다. 피 나는 곳을 휴지로 문지르는 학생에게 "문지르지 말고 깨끗한 거즈로 꾹 눌러요"라고 보여 준다. 피가 멈추지 않거나 상처가 깊으면 어른이 병원·119를 정한다는 것을 덧붙인다.',
            task: '상처를 돌보는 차례를 놓아요.',
            levels: LV,
            items: [
              SO('까진 상처를 돌보는 차례대로 놓아요.', '까진 상처', ['먼저', '다음', '그다음', '마지막'], [{ id: 'c1', text: '내 손을 비누로 씻어요', motif: 'cloud' }, { id: 'c2', text: '상처를 흐르는 물로 씻어요', motif: 'wave' }, { id: 'c3', text: '깨끗한 거즈로 톡톡 말려요', motif: 'leaf' }, { id: 'c4', text: '어른과 밴드를 붙여요', motif: 'star' }], ['c1', 'c2', 'c3', 'c4'], 0.15),
              SO('피 나는 베인 상처 돌보는 차례로 놓아요.', '피가 나요', ['먼저', '다음', '마지막'], [{ id: 'b1', text: '깨끗한 거즈를 대요', motif: 'leaf' }, { id: 'b2', text: '손으로 꾹 눌러요', motif: 'sun' }, { id: 'b3', text: '멈추지 않으면 어른께', motif: 'house' }], ['b1', 'b2', 'b3'], 0.25),
              MS('상처 돌보기 모습을 나누어 보세요.', '상처 돌보기', ['잘했어요', '고쳐요'], ['거즈로 꾹 눌러요', '휴지로 박박 문질러요', '돕기 전 손을 씻어요', '흙 묻은 채 밴드를 붙여요'], { '잘했어요': ['거즈로 꾹 눌러요', '돕기 전 손을 씻어요'], '고쳐요': ['휴지로 박박 문질러요', '흙 묻은 채 밴드를 붙여요'] }, 0.25,
                { conclude: '손 씻기 → 상처 씻기 → 누르기 → 어른에게 알리기 차례를 지켜요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 배운 차례를 손가락으로 세어 말해 볼까요? 씻고, 씻고, 누르고, 알려요." 출구 1번에서 "휴지로 문질러요"를 고른 학생에게 누르는 까닭을 다시 묻는다.',
          exit: [
            { type: 'choice', prompt: '베인 손가락에서 피가 나요. 알맞은 행동은?', options: ['깨끗한 거즈로 눌러요', '휴지로 문질러요', '입으로 빨아요'], answer: 0, difficulty: 0.15, explain: '깨끗한 거즈로 꾹 누르면 피가 멈추는 데 도움이 돼요.' },
            { type: 'choice', prompt: '다친 친구를 돕기 전에 내가 먼저 할 일은?', options: ['손을 씻어요', '사진을 찍어요', '그냥 만져요'], answer: 0, difficulty: 0.2, explain: '돕는 사람 손이 깨끗해야 균이 들어가지 않아요.' },
            { type: 'short', prompt: '가시가 깊이 박혔을 때 스스로 빼지 않는 까닭을 한 문장으로 쓰세요.' },
            MOOD,
          ],
        },
        wsTitle: '상처 알고 돌보기',
        ws: [
          { type: 'table', prompt: '장면에 맞는 상처 이름을 쓰세요.', columns: ['장면', '상처 이름'], cells: [['넘어져 무릎이 까졌어요', ''], ['종이에 손이 베였어요', ''], ['압정에 찔렸어요', ''], ['책상에 부딪혔어요', '']], answer: '긁힘, 베임, 찔림, 멍' },
          { type: 'table', prompt: '까진 상처 돌보는 차례에 맞게 1~4를 쓰세요.', columns: ['하는 일', '차례'], cells: [['상처를 물로 씻어요', ''], ['어른과 밴드를 붙여요', ''], ['내 손을 씻어요', ''], ['거즈로 말려요', '']], answer: '2, 4, 1, 3' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '피가 나면 깨끗한 ___로 꾹 눌러요.', answer: '거즈' },
          { type: 'short', prompt: '상처를 휴지로 문지르면 안 되는 까닭을 쓰세요.' },
        ],
        notes: '자주 보이는 어려움: ① 피 나는 곳을 문지른다 → 깨끗한 거즈로 눌러 지혈한다. ② 박힌 가시·유리를 스스로 뺀다 → 깊이 박힌 것은 어른에게 맡긴다. ③ 돕는 사람의 손 씻기를 빠뜨린다 → 손 씻기를 차례 맨 앞에 둔다. 칼 같은 날카로운 도구는 장면 카드로만 다루고 실제로 쓰지 않는다.',
      }),

      LESSON(2, {
        title: '데었을 때·삐었을 때 바른 돌봄 고르기',
        objective: '데었을 때와 삐었을 때 알맞은 응급처치를 고르고, 잘못된 민간요법을 가려낼 수 있다.',
        draw: 'a child cooling a red hand under a running paper faucet while another child rests an ankle on a pillow with a wrapped cold pack',
        banner: '식히고, 쉬게 해요', extra: [{ motif: 'snow', x: 300, y: 96, color: 'sky' }],
        intro: {
          teacher: '"뜨거운 컵에 손이 데었을 때 된장이나 치약을 바르면 좋을까요?" 대답을 듣고(기다릴 반응: "할머니가 그렇게 했어요") "그런 것을 바르면 상처에 균이 들어갈 수 있어요. 흐르는 시원한 물로 식혀요"라고 짚는다. 시연 단추로 데었을 때 카드가 나뉘는 모습을 보여 준다.',
          student: '집에서 뜨거운 것에 조심해야 하는 곳은 어디인지 짝에게 말해 봐요.',
          demo: { tool: 'mindmap', options: { topic: '데었을 때', slots: ['해요', '안 해요'], cards: ['흐르는 물로 식혀요', '된장을 발라요'], shuffle: false }, sequence: [{ sort: { '해요': ['흐르는 물로 식혀요'], '안 해요': ['된장을 발라요'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 갈림길에서 고르기', tool: 'emotion',
            teacher: '"고른 대로 하면 어떻게 될까요?" 결과를 소리 내어 읽게 한다. 얼음을 직접 대는 보기를 고른 학생에게 "얼음이 바로 닿으면 피부가 또 다칠 수 있어요"라고 짚는다. 물집을 터뜨리고 싶어 하는 학생이 많다 — "물집은 상처를 지키는 덮개예요"라고 말해 준다. 삔 발목으로 계속 걷는 보기를 고른 학생에게는 쉬게 하는 까닭을 묻는다. 넓게 데었거나 많이 부으면 어른이 병원·119를 정한다.',
            task: '데거나 삔 장면에서 어떻게 할지 골라요.',
            levels: LVB,
            items: [
              EB('뜨거운 국물이 손등에 튀었어요. 어떻게 할까요?', '점심시간에 뜨거운 국물이 손등에 튀어 따가워요.', [
                { id: 'water', text: '흐르는 시원한 물로 식혀요', result: '따가움이 줄고 더 깊이 다치지 않아요.', mood: '안심' },
                { id: 'ice', text: '얼음을 손등에 바로 대요', result: '피부가 차가워서 또 다칠 수 있어요.', mood: '걱정', why: '얼음을 바로 대지 않고 흐르는 물로 식혀요.' },
                { id: 'paste', text: '치약을 듬뿍 발라요', result: '상처에 균이 들어갈 수 있어요.', mood: '불안', why: '아무것도 바르지 말고 식혀요.' }], 'water', 0.15),
              EB('데인 곳에 물집이 생겼어요. 어떻게 할까요?', '데인 손가락에 작은 물집이 생겼어요.', [
                { id: 'pop', text: '바늘로 터뜨려요', result: '균이 들어가 덧날 수 있어요.', mood: '걱정', why: '물집은 터뜨리지 않아요.' },
                { id: 'keep', text: '터뜨리지 않고 어른에게 보여요', result: '어른이 깨끗하게 덮어 줘요.', mood: '편안함' },
                { id: 'peel', text: '껍질을 벗겨 내요', result: '아프고 상처가 커져요.', mood: '속상함', why: '물집 껍질이 상처를 지켜 줘요.' }], 'keep', 0.2),
              EB('줄넘기하다 발목을 삐었어요. 어떻게 할까요?', '줄넘기를 하다 발목이 꺾여 붓고 아파요.', [
                { id: 'walk', text: '참고 계속 뛰어요', result: '발목이 더 붓고 아파요.', mood: '속상함', why: '삔 곳은 움직이지 않고 쉬게 해요.' },
                { id: 'rest', text: '앉아 쉬며 어른께 알리고 차갑게 해요', result: '붓기가 덜하고 덜 아파요.', mood: '안심' },
                { id: 'rub', text: '세게 주물러요', result: '더 아프고 부을 수 있어요.', mood: '걱정', why: '삔 곳을 세게 주무르지 않아요.' }], 'rest', 0.25,
                { conclude: '데면 흐르는 물로 식히고, 삐면 쉬게 하고 차갑게 하며 어른에게 알려요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 바른 돌봄과 잘못된 돌봄', tool: 'mindmap',
            teacher: '"이 방법은 어디서 들었나요? 정말 몸에 좋을까요?" 집에서 들은 민간요법을 말하는 학생을 탓하지 않고 "예전에는 그렇게 알았지만 지금은 이렇게 해요"라고 말한다. 얼음주머니는 수건에 싸서 대야 한다는 것을 짚는다.',
            task: '데었을 때·삐었을 때 바른 돌봄을 나누고 이어요.',
            levels: LV,
            items: [
              MS('데었을 때 돌봄을 나누어 보세요.', '데었을 때', ['바른 돌봄', '잘못된 돌봄'], ['반지·시계를 먼저 빼요', '된장을 발라요', '흐르는 물로 식혀요', '물집을 터뜨려요'], { '바른 돌봄': ['반지·시계를 먼저 빼요', '흐르는 물로 식혀요'], '잘못된 돌봄': ['된장을 발라요', '물집을 터뜨려요'] }, 0.2),
              MS('삐었을 때 돌봄을 나누어 보세요.', '삐었을 때', ['바른 돌봄', '잘못된 돌봄'], ['움직이지 않고 쉬어요', '아파도 계속 뛰어요', '수건 싼 얼음주머니를 대요', '세게 주물러요'], { '바른 돌봄': ['움직이지 않고 쉬어요', '수건 싼 얼음주머니를 대요'], '잘못된 돌봄': ['아파도 계속 뛰어요', '세게 주물러요'] }, 0.2),
              MM('장면과 알맞은 돌봄을 이어요. 맞지 않는 카드는 남겨요.', '어떻게 돌볼까', [{ id: 'm1', label: '다리미에 손이 닿았어요' }, { id: 'm2', label: '손목을 삐어 부었어요' }, { id: 'm3', label: '넓게 데어 많이 아파요' }], ['흐르는 물로 식혀요', '쉬게 하고 차갑게 해요', '어른이 병원·119에 알려요', '버터를 발라요'], { m1: '흐르는 물로 식혀요', m2: '쉬게 하고 차갑게 해요', m3: '어른이 병원·119에 알려요' }, 0.3,
                { conclude: '들은 방법보다 바른 응급처치를 먼저 하고, 크게 다치면 어른·119에 알려요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 배운 것 가운데 집에 가서 가족에게 알려 줄 것 한 가지는 무엇인가요?" 출구 1번에서 "얼음을 바로 대요"를 고른 학생에게 수건에 싸는 까닭을 다시 짚는다.',
          exit: [
            { type: 'choice', prompt: '라면 냄비에 손이 데었어요. 먼저 할 일은?', options: ['흐르는 시원한 물로 식혀요', '얼음을 바로 대요', '치약을 발라요'], answer: 0, difficulty: 0.15, explain: '데면 흐르는 시원한 물로 식혀요.' },
            { type: 'choice', prompt: '축구를 하다 발목을 삐었어요. 알맞은 행동은?', options: ['계속 뛰어요', '쉬면서 차갑게 해요', '세게 주물러요'], answer: 1, difficulty: 0.15, explain: '삔 곳은 쉬게 하고 차갑게 해요.' },
            { type: 'short', prompt: '물집을 터뜨리면 안 되는 까닭을 한 문장으로 쓰세요.' },
            MOOD,
          ],
        },
        wsTitle: '데었을 때·삐었을 때',
        ws: [
          { type: 'table', prompt: '바른 돌봄이면 ○, 잘못된 돌봄이면 ×를 쓰세요.', columns: ['돌봄', '○ / ×'], cells: [['흐르는 물로 식혀요', ''], ['된장을 발라요', ''], ['삔 곳을 쉬게 해요', ''], ['물집을 터뜨려요', '']], answer: '○, ×, ○, ×' },
          { type: 'choice', prompt: '얼음주머니를 댈 때 알맞은 방법에 ○ 하세요.', options: ['수건에 싸서 대요', '피부에 바로 대요', '얼음을 문질러요'], answer: '수건에 싸서 대요' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '데었을 때는 흐르는 시원한 ___로 식혀요.', answer: '물' },
          { type: 'short', prompt: '부엌에서 데지 않으려면 어떤 약속을 지킬지 쓰세요.' },
        ],
        notes: '자주 보이는 어려움: ① 된장·치약·버터 같은 민간요법을 바른다 → 아무것도 바르지 않고 흐르는 물로 식힌다(가정에서 들은 말은 탓하지 않는다). ② 얼음을 바로 댄다 → 수건에 싸서 댄다. ③ 물집을 터뜨린다 → 그대로 두고 어른에게 보인다. ④ 삔 곳을 주무르거나 계속 쓴다 → 쉬게 하고 차갑게 한다.',
      }),
    ],
  });
})();
