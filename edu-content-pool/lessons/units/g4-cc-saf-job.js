/* 4학년 창체 안전교육 — 직업안전. 근거: 「학교 안전교육 실시 기준 등에 관한 고시」 별표 2 초등 직업안전.
 * (일터에서 발생하는 산업 재해를 알기) 장면·인물은 이 단원을 위해 지은 것이다(가명). */
(function () {
  const ID = 'g4-cc-saf-job';
  const UNIT = 'g4-창체-saf-job';
  const TITLE = '직업안전';
  const GRADE = 4;
  const two = (n) => String(n).padStart(2, '0');
  const base = (n) => ({
    id: `${ID}-${two(n)}`, schema: 'edu-lesson.v1', catalog: { unit: UNIT, lesson: n },
    grade: GRADE, subject: '창체', unitTitle: TITLE, standards: [], minutes: 40,
    formats: ['chromebook', 'projector', 'print'],
  });
  const PROMPT = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const SCENE = (text, extra = []) => ({ viewBox: [480, 270], layers: [
    { motif: 'sun', x: 410, y: 58, s: 0.8 }, { motif: 'cloud', x: 120, y: 52 }, { motif: 'hills', y: 204 },
    { motif: 'house', x: 96, y: 214, color: 'lavender', s: 0.9 }, { motif: 'tree', x: 380, y: 214 }, ...extra,
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
    flow: '4학년 직업안전은 직업마다 위험이 다르고 그에 맞는 보호구가 있다는 것, 그리고 일터에서 일어나는 사고(산업 재해)의 모습을 알아보는 단원입니다. 1차시에는 여러 직업의 일하는 장면에서 위험을 찾고, 위험과 보호구를 까닭과 함께 잇습니다. 2차시에는 넘어짐·떨어짐·끼임·부딪힘 같은 산업 재해의 모습을 장면 카드로 나누고, 사고를 막는 방법(정리정돈·안전 난간·덮개·보호구)을 잇습니다. 1~3학년에서 익힌 안전 도구·표지·시설을 "왜 그 직업에 그 보호구가 필요한가"라는 까닭으로 묶어 내는 데 초점을 둡니다. 진로 교육 활동과 묶어 운영할 수 있습니다(시수 인정은 학교 결정).',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '직업의 위험 찾고 보호구 까닭 잇기',
        objective: '여러 직업의 일하는 장면에서 위험을 찾고, 그 위험을 막는 보호구를 까닭과 함께 이을 수 있다.',
        draw: 'a welder with a paper face shield, a farmer wearing a mask beside crops, and a delivery worker lifting a box with bent knees',
        banner: '위험이 다르면 보호구도 달라요', extra: [{ motif: 'star', x: 300, y: 96, color: 'lavender' }],
        intro: {
          teacher: '"용접하는 사람은 왜 얼굴 전체를 가리는 가면을 쓸까요?" 대답을 듣고(기다릴 반응: "불꽃이 튀어서요", "눈이 부셔서요") "센 빛과 불꽃에서 눈과 얼굴을 지켜요. 직업마다 위험이 다르니 보호구도 달라요"라고 말한다. 시연 단추로 위험과 보호구가 이어지는 모습을 보여 준다.',
          student: '가족이나 이웃이 하는 일 가운데 조심해야 하는 일을 하나 떠올려 짝에게 말해 봐요(이름은 말하지 않아요).',
          demo: { tool: 'mindmap', options: { mode: 'match', topic: '보호구', slots: [{ id: 'd1', label: '튀는 불꽃' }], cards: ['용접 가면', '앞치마'], shuffle: false }, sequence: [{ match: { d1: '용접 가면' } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 직업과 위험', tool: 'mindmap',
            teacher: '"이 일을 하는 사람에게 가장 큰 위험은 무엇일까요?" 직업과 위험을 잇게 한다. 사무실 일은 위험이 없다고 여기는 학생에게 "오래 앉아 화면을 보면 몸 어디가 아플까요?"라고 물어 위험의 종류가 다양하다는 것을 짚는다.',
            task: '직업과 그 일의 위험을 이어요.',
            levels: LV,
            items: [
              MM('직업과 위험을 이어요. 맞지 않는 카드는 남겨요.', '직업의 위험', [{ id: 'j1', label: '용접하는 사람' }, { id: 'j2', label: '농약 치는 농부' }, { id: 'j3', label: '택배 기사' }], ['센 빛과 튀는 불꽃', '몸에 해로운 약품', '무거운 상자에 허리', '너무 조용해요'], { j1: '센 빛과 튀는 불꽃', j2: '몸에 해로운 약품', j3: '무거운 상자에 허리' }, 0.2),
              MM('직업과 위험을 이어요. 맞지 않는 카드는 남겨요.', '또 다른 직업', [{ id: 'k1', label: '높은 건물 유리 청소' }, { id: 'k2', label: '도로 청소' }, { id: 'k3', label: '오래 앉아 컴퓨터 일' }], ['높은 곳에서 떨어짐', '지나가는 차', '목·허리·눈 피로', '배가 고파요'], { k1: '높은 곳에서 떨어짐', k2: '지나가는 차', k3: '목·허리·눈 피로' }, 0.25),
              MS('위험을 종류에 따라 나누어 보세요.', '위험의 종류', ['다치는 사고', '몸이 병들어요'], ['사다리에서 떨어져요', '먼지를 오래 마셔요', '기계에 손이 끼어요', '큰 소음을 오래 들어요'], { '다치는 사고': ['사다리에서 떨어져요', '기계에 손이 끼어요'], '몸이 병들어요': ['먼지를 오래 마셔요', '큰 소음을 오래 들어요'] }, 0.3,
                { conclude: '일터의 위험에는 갑자기 다치는 사고와 오래 일하며 몸이 병드는 것이 있어요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 위험과 보호구', tool: 'mindmap',
            teacher: '"이 위험에는 어떤 보호구가 맞을까요? 까닭도 말해 봐요." 귀마개·방진 마스크·안전대(높은 곳에서 몸을 묶는 줄)처럼 처음 듣는 보호구는 그림으로 설명한다. 보호구는 맞는 크기로 바르게 써야 효과가 있다는 것을 짚는다.',
            task: '위험과 알맞은 보호구를 잇고, 바르게 쓰는 모습을 골라요.',
            levels: LV,
            items: [
              MM('위험과 보호구를 이어요. 맞지 않는 카드는 남겨요.', '보호구 잇기', [{ id: 'h1', label: '큰 소음' }, { id: 'h2', label: '날리는 먼지' }, { id: 'h3', label: '높은 곳 작업' }], ['귀마개', '방진 마스크', '몸을 묶는 안전대', '선풍기'], { h1: '귀마개', h2: '방진 마스크', h3: '몸을 묶는 안전대' }, 0.25),
              MP('보호구를 바르게 쓴 모습만 골라 담아요.', '바르게 쓰기', ['안전모 턱끈을 매요', '마스크를 턱에 걸쳐요', '내 손에 맞는 장갑을 껴요', '안전화 뒤꿈치를 꺾어 신어요'], ['안전모 턱끈을 매요', '내 손에 맞는 장갑을 껴요'], 0.25),
              MM('보호구와 지키는 곳을 이어요. 맞지 않는 카드는 남겨요.', '어디를 지킬까', [{ id: 'b1', label: '보호 안경' }, { id: 'b2', label: '안전화' }, { id: 'b3', label: '귀마개' }], ['눈', '발', '귀', '머리카락 색'], { b1: '눈', b2: '발', b3: '귀' }, 0.2,
                { conclude: '위험에 맞는 보호구를, 맞는 크기로, 바르게 써야 몸을 지켜요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"우리가 실과·과학 시간에 쓰는 보호구는 무엇이 있을까요?" (기다릴 반응: "보안경", "장갑") 출구 1번에서 헷갈린 학생에게 위험과 보호구를 다시 잇게 한다.',
          exit: [
            { type: 'choice', prompt: '큰 소음 속에서 일하는 사람에게 필요한 보호구는?', options: ['귀마개', '앞치마', '장화'], answer: 0, difficulty: 0.15, explain: '귀마개가 소음에서 귀를 지켜요.' },
            { type: 'choice', prompt: '보호구를 쓰는 바른 방법은?', options: ['맞는 크기로 바르게 써요', '헐렁하게 걸쳐요', '더울 때는 벗어요'], answer: 0, difficulty: 0.2, explain: '바르게 써야 보호구가 제 역할을 해요.' },
            { type: 'short', prompt: '내가 관심 있는 직업 하나와 그 직업에 필요한 보호구를 쓰세요.' },
            MOOD,
          ],
        },
        wsTitle: '직업의 위험과 보호구',
        ws: [
          { type: 'table', prompt: '직업의 위험과 보호구를 쓰세요.', columns: ['직업', '위험', '보호구'], cells: [['용접하는 사람', '', ''], ['농약 치는 농부', '', ''], ['높은 곳 청소', '', '']], answer: '예) 불꽃·빛-용접 가면 / 약품-마스크·장갑 / 떨어짐-안전대·안전모' },
          { type: 'choice', prompt: '먼지가 많은 곳에서 쓰는 보호구에 ○ 하세요.', options: ['방진 마스크', '귀마개', '안전화'], answer: '방진 마스크' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '보호구는 맞는 ___로 바르게 써야 해요.', answer: '크기' },
          { type: 'short', prompt: '일터의 위험 두 가지(다치는 사고, 몸이 병드는 것)의 예를 하나씩 쓰세요.' },
        ],
        notes: '자주 보이는 어려움: ① 사무 일에는 위험이 없다고 여긴다 → 오래 앉아 일하면 생기는 몸의 피로도 위험임을 짚는다. ② 보호구를 걸치기만 해도 된다고 여긴다 → 맞는 크기로 바르게 쓴다. ③ 가족의 직업을 묻는 활동에서 이름·직장을 말하게 하지 않는다.',
      }),

      LESSON(2, {
        title: '산업 재해 장면 나누고 막는 방법 잇기',
        objective: '넘어짐·떨어짐·끼임·부딪힘 같은 산업 재해의 모습을 구별하고, 막는 방법을 이을 수 있다.',
        draw: 'a paper factory floor with a machine guard cover, a railing on a high platform, and a clean walkway with a yellow line',
        banner: '사고는 막을 수 있어요', extra: [{ motif: 'leaf', x: 300, y: 222, color: 'mint' }],
        intro: {
          teacher: '"일하다가 다치는 것을 산업 재해라고 해요. 일터에서 가장 많이 일어날 것 같은 사고는 무엇일까요?" 대답을 듣고(기다릴 반응: "떨어지는 것", "넘어지는 것") 시연 단추로 사고 카드가 나뉘는 모습을 보여 준다. "사고는 운이 나빠서 생겨요"가 나오면 "막을 방법이 있었는지 오늘 찾아볼까요?"라고 되묻는다.',
          student: '일하다 다치지 않으려면 무엇이 필요할지 짝에게 한 가지 말해 봐요.',
          demo: { tool: 'mindmap', options: { topic: '산업 재해', slots: ['떨어짐', '넘어짐'], cards: ['사다리에서 미끄러져요', '젖은 바닥에서 미끄러져요'], shuffle: false }, sequence: [{ sort: { '떨어짐': ['사다리에서 미끄러져요'], '넘어짐': ['젖은 바닥에서 미끄러져요'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 산업 재해 모습 나누기', tool: 'mindmap',
            teacher: '"이 장면은 어떤 사고일까요?" 높은 곳에서 아래로는 떨어짐, 같은 바닥에서는 넘어짐, 기계 사이에 끼면 끼임, 움직이는 물건·차에 부딪히면 부딪힘이라고 짚는다. 실제 사고 사례의 피해를 자세히 말하지 않고 "어떻게 막을 수 있었을까"로 이어 간다.',
            task: '일터 사고 장면을 종류별로 나누어요.',
            levels: LV,
            items: [
              MS('사고 장면을 나누어 보세요.', '사고의 종류', ['떨어짐', '넘어짐'], ['지붕 위에서 발을 헛디뎌요', '바닥 전선에 걸려요', '높은 발판에서 미끄러져요', '기름 묻은 바닥을 밟아요'], { '떨어짐': ['지붕 위에서 발을 헛디뎌요', '높은 발판에서 미끄러져요'], '넘어짐': ['바닥 전선에 걸려요', '기름 묻은 바닥을 밟아요'] }, 0.2),
              MS('사고 장면을 나누어 보세요.', '사고의 종류', ['끼임', '부딪힘'], ['돌아가는 기계에 장갑이 말려요', '후진하는 지게차와 닿아요', '문틈에 손가락이 끼어요', '매달린 짐이 흔들려 닿아요'], { '끼임': ['돌아가는 기계에 장갑이 말려요', '문틈에 손가락이 끼어요'], '부딪힘': ['후진하는 지게차와 닿아요', '매달린 짐이 흔들려 닿아요'] }, 0.25),
              MP('일터 사고를 키우는 행동만 골라 담아요.', '사고를 부르는 행동', ['서두르다 보호구를 빼요', '정해진 길로만 다녀요', '기계를 켠 채 손을 넣어요', '작업 전 둘레를 살펴요'], ['서두르다 보호구를 빼요', '기계를 켠 채 손을 넣어요'], 0.25,
                { conclude: '일터 사고는 떨어짐·넘어짐·끼임·부딪힘처럼 모습이 있고, 서두름이 사고를 키워요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 사고를 막는 방법', tool: 'mindmap',
            teacher: '"이 사고는 무엇으로 막을 수 있을까요?" 시설(난간·덮개)·정리정돈·약속(기계 멈추고 작업)·보호구로 나누어 말하게 한다. 보호구만 있으면 된다고 여기는 학생에게 "보호구는 마지막 방패예요. 위험을 먼저 없애는 것이 더 좋아요"라고 짚는다.',
            task: '사고와 막는 방법을 이어요.',
            levels: LV,
            items: [
              MM('사고와 막는 방법을 이어요. 맞지 않는 카드는 남겨요.', '막는 방법', [{ id: 'p1', label: '떨어짐' }, { id: 'p2', label: '넘어짐' }, { id: 'p3', label: '끼임' }], ['안전 난간을 설치해요', '바닥을 닦고 정리해요', '기계에 덮개를 씌워요', '노래를 크게 틀어요'], { p1: '안전 난간을 설치해요', p2: '바닥을 닦고 정리해요', p3: '기계에 덮개를 씌워요' }, 0.2),
              MM('사고와 막는 방법을 이어요. 맞지 않는 카드는 남겨요.', '또 막는 방법', [{ id: 'q1', label: '지게차와 부딪힘' }, { id: 'q2', label: '기계 수리 중 끼임' }, { id: 'q3', label: '떨어지는 공구' }], ['사람 다니는 길을 따로 정해요', '기계를 끄고 고쳐요', '안전모를 써요', '더 빨리 일해요'], { q1: '사람 다니는 길을 따로 정해요', q2: '기계를 끄고 고쳐요', q3: '안전모를 써요' }, 0.3),
              MS('막는 방법을 나누어 보세요.', '어떤 방법일까', ['시설로 막기', '약속으로 막기'], ['기계 덮개 달기', '작업 전 기계 멈추기', '미끄럼 방지 바닥', '정해진 길로 다니기'], { '시설로 막기': ['기계 덮개 달기', '미끄럼 방지 바닥'], '약속으로 막기': ['작업 전 기계 멈추기', '정해진 길로 다니기'] }, 0.3,
                { conclude: '일터 사고는 시설·약속·보호구를 함께 갖추면 막을 수 있어요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"사고는 운이 나빠서 생긴다는 생각, 오늘 공부한 뒤에는 어떻게 바뀌었나요?" 출구 2번에서 "더 빨리 일해요"를 고른 학생에게 서두름이 사고를 키운다는 것을 다시 짚는다.',
          exit: [
            { type: 'choice', prompt: '높은 발판에서 떨어지는 사고를 막는 시설은?', options: ['안전 난간', '화분', '게시판'], answer: 0, difficulty: 0.15, explain: '안전 난간이 떨어짐을 막아요.' },
            { type: 'tool', tool: 'mindmap', options: { topic: '공장에서', slots: ['사고를 막아요', '사고를 불러요'], cards: ['기계를 멈추고 청소해요', '덮개를 열고 일해요', '바닥 기름을 바로 닦아요', '통로에 짐을 쌓아요'] }, state: { at: {} }, prompt: '공장 장면을 사고를 막는 것과 부르는 것으로 나누어요.', target: { sort: { '사고를 막아요': ['기계를 멈추고 청소해요', '바닥 기름을 바로 닦아요'], '사고를 불러요': ['덮개를 열고 일해요', '통로에 짐을 쌓아요'] } }, difficulty: 0.25 },
            { type: 'short', prompt: '보호구보다 위험을 먼저 없애는 것이 좋은 까닭을 쓰세요.' },
            MOOD,
          ],
        },
        wsTitle: '산업 재해와 막는 방법',
        ws: [
          { type: 'table', prompt: '사고 종류와 막는 방법을 쓰세요.', columns: ['사고', '막는 방법'], cells: [['떨어짐', ''], ['넘어짐', ''], ['끼임', ''], ['부딪힘', '']], answer: '예) 안전 난간 / 정리정돈·바닥 닦기 / 덮개·기계 멈춤 / 사람 길 따로' },
          { type: 'choice', prompt: '기계를 고칠 때 먼저 할 일에 ○ 하세요.', options: ['기계를 꺼요', '켠 채로 손을 넣어요', '빨리 해요'], answer: '기계를 꺼요' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '일하다가 다치는 것을 산업 ___라고 해요.', answer: '재해' },
          { type: 'short', prompt: '우리 교실에서 넘어짐 사고를 막는 방법을 하나 쓰세요.' },
        ],
        notes: '자주 보이는 어려움: ① 사고를 운으로 여긴다 → 막는 방법(시설·약속·보호구)을 찾게 한다. ② 보호구만 있으면 된다고 여긴다 → 위험을 먼저 없애는 것이 우선임을 짚는다. ③ 실제 사고 사례의 피해를 자세히 다루지 않는다 — 공포보다 예방에 초점을 둔다.',
      }),
    ],
  });
})();
