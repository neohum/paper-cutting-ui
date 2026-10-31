/* 2학년 창체 안전교육 — 재난안전. 근거: 「학교 안전교육 실시 기준 등에 관한 고시」 별표 2 초등 재난안전.
 * (화재의 원인·대피, 화상 대처, 자연 재난과 안전한 행동, 재난 유형별 대비 훈련 — 화재·지진 대피 훈련 2종) 장면·인물은 이 단원을 위해 지은 것이다(가명). */
(function () {
  const ID = 'g2-cc-saf-disaster';
  const UNIT = 'g2-창체-saf-disaster';
  const TITLE = '재난안전';
  const GRADE = 2;
  const two = (n) => String(n).padStart(2, '0');
  const base = (n) => ({
    id: `${ID}-${two(n)}`, schema: 'edu-lesson.v1', catalog: { unit: UNIT, lesson: n },
    grade: GRADE, subject: '창체', unitTitle: TITLE, standards: [], minutes: 40,
    formats: ['chromebook', 'projector', 'print'],
  });
  const PROMPT = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const SCENE = (text, extra = []) => ({ viewBox: [480, 270], layers: [
    { motif: 'sun', x: 410, y: 58, s: 0.8 }, { motif: 'cloud', x: 120, y: 52 }, { motif: 'hills', y: 204 },
    { motif: 'house', x: 96, y: 214, color: 'mint', s: 0.9 }, { motif: 'tree', x: 380, y: 214 }, ...extra,
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
    flow: '2학년 재난안전은 1학년에서 익힌 "알리고 따라 나가기"에 차례와 까닭을 더하는 단원입니다. 1차시에는 집 안에서 불이 날 수 있는 곳(문어발 콘센트·가스레인지·난로 옆 물건)을 찾고, 2차시는 학교 화재 대피 훈련과 묶어 초록 비상구 표지를 따라 승강기가 아닌 계단으로 나가는 길을 연습합니다. 3차시에는 옷에 불이 붙었을 때 멈추고 엎드려 구르기, 데었을 때 흐르는 시원한 물로 식히기 차례를 익힙니다. 4차시는 학교 지진 대피 훈련과 묶어 교실에서 운동장까지 가는 차례를 연습하고, 5~6차시에는 여름(장마·태풍·폭염)과 겨울(대설·한파·미세먼지·황사) 재난의 행동을 나눕니다. 2·4차시는 학교 연간 재난 대비 훈련(유형을 달리해 연 2종 이상)과 같은 날 운영하면 좋습니다.',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '집 안 화재 원인 찾아 고치기',
        objective: '집 안에서 불이 날 수 있는 곳을 찾고, 고치는 방법을 말할 수 있다.',
        draw: 'a cozy paper living room with an overloaded power strip, a heater beside a hanging towel, and a child pointing at them with a magnifying glass',
        banner: '우리 집 불씨 찾기', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }],
        intro: {
          teacher: '"콘센트 하나에 플러그를 여러 개 꽂아 두면 어떻게 될까요?" 대답을 듣고(기다릴 반응: "뜨거워져요", "불이 날 수 있어요") 시연 단추로 집 안 장면 카드가 나뉘는 모습을 보여 준다. "전기는 불이랑 상관없어요"가 나오면 "전선이 뜨거워지면 무엇이 탈 수 있을까요?"라고 되묻는다.',
          student: '우리 집에서 뜨거워지는 물건을 하나 떠올려 짝에게 말해 봐요.',
          demo: { tool: 'mindmap', options: { topic: '집 안 불씨', slots: ['불이 날 수 있어요', '괜찮아요'], cards: ['문어발 콘센트', '정리된 책장'], shuffle: false }, sequence: [{ sort: { '불이 날 수 있어요': ['문어발 콘센트'], '괜찮아요': ['정리된 책장'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 불이 날 수 있는 곳 찾기', tool: 'mindmap',
            teacher: '"이 장면에서 불이 날 수 있을까요? 까닭도 말해 봐요." 난로 옆 빨래·가스레인지 옆 행주처럼 탈 것이 가까이 있으면 위험하다는 것을 짚는다. 플러그를 줄을 잡아당겨 뽑는 습관도 전선을 상하게 한다고 말한다.',
            task: '집 안 장면을 불이 날 수 있는 것과 괜찮은 것으로 나누어요.',
            levels: LV,
            items: [
              MS('거실 장면을 나누어 보세요.', '거실', ['불이 날 수 있어요', '괜찮아요'], ['난로 옆에 빨래를 널어요', '플러그를 빼 둬요', '전선을 줄로 잡아당겨요', '창문을 열어 환기해요'], { '불이 날 수 있어요': ['난로 옆에 빨래를 널어요', '전선을 줄로 잡아당겨요'], '괜찮아요': ['플러그를 빼 둬요', '창문을 열어 환기해요'] }, 0.15),
              MS('부엌 장면을 나누어 보세요.', '부엌', ['불이 날 수 있어요', '괜찮아요'], ['불 옆에 행주를 둬요', '요리 끝나면 불을 꺼요', '불을 켜 두고 나가요', '어른이 요리를 지켜봐요'], { '불이 날 수 있어요': ['불 옆에 행주를 둬요', '불을 켜 두고 나가요'], '괜찮아요': ['요리 끝나면 불을 꺼요', '어른이 요리를 지켜봐요'] }, 0.2),
              MP('불이 날 수 있는 곳만 골라 담아요.', '집 안 불씨', ['플러그가 여러 개 꽂힌 콘센트', '물컵이 놓인 식탁', '이불 위 전기장판을 켜 둔 채', '정리된 신발장'], ['플러그가 여러 개 꽂힌 콘센트', '이불 위 전기장판을 켜 둔 채'], 0.25,
                { conclude: '전기·가스·난로 곁에 탈 것이 있거나 켜 둔 채 두면 불이 날 수 있어요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 고치는 방법', tool: 'mindmap',
            teacher: '"찾은 위험을 어떻게 고칠까요?" 위험과 고칠 방법을 잇는다. 어린이가 직접 전기 기구를 고치지 않고 어른에게 알린다는 것을 짚는다. 집에 가서 가족과 함께 점검표를 써 보자고 말해 준다.',
            task: '위험과 고치는 방법을 이어요.',
            levels: LV,
            items: [
              MM('위험과 고칠 방법을 이어요. 맞지 않는 카드는 남겨요.', '고치는 방법', [{ id: 'r1', label: '문어발 콘센트' }, { id: 'r2', label: '난로 옆 빨래' }, { id: 'r3', label: '켜 둔 가스레인지' }], ['안 쓰는 플러그를 빼요', '빨래를 멀리 옮겨요', '어른에게 꺼 달라고 해요', '더 꽂아요'], { r1: '안 쓰는 플러그를 빼요', r2: '빨래를 멀리 옮겨요', r3: '어른에게 꺼 달라고 해요' }, 0.2),
              MP('어린이가 할 수 있는 불조심만 골라 담아요.', '내가 할 일', ['위험을 보면 어른께 알려요', '전선을 직접 고쳐요', '난로 곁에서 놀지 않아요', '가스 밸브를 돌려 봐요'], ['위험을 보면 어른께 알려요', '난로 곁에서 놀지 않아요'], 0.2),
              MS('물건 다루는 모습을 나누어 보세요.', '물건 다루기', ['바르게', '고쳐요'], ['플러그 머리를 잡고 빼요', '젖은 손으로 콘센트 만지기', '다 쓴 기구는 전원 끄기', '전선 위에 무거운 짐 두기'], { '바르게': ['플러그 머리를 잡고 빼요', '다 쓴 기구는 전원 끄기'], '고쳐요': ['젖은 손으로 콘센트 만지기', '전선 위에 무거운 짐 두기'] }, 0.25,
                { conclude: '위험을 찾으면 어른과 함께 고치고, 나는 불씨 곁에서 놀지 않아요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 찾은 불씨 가운데 우리 집에도 있을 것 같은 것은 무엇인가요?" 가족과 함께 해 볼 점검을 한 가지씩 말하게 한다.',
          exit: [
            { type: 'choice', prompt: '난로 옆에 빨래가 걸려 있어요. 어떻게 할까요?', options: ['어른과 멀리 옮겨요', '그대로 둬요', '난로를 더 세게 켜요'], answer: 0, difficulty: 0.15, explain: '탈 것은 난로에서 멀리 둬요.' },
            { type: 'choice', prompt: '플러그를 뺄 때 바른 방법은?', options: ['플러그 머리를 잡아요', '줄을 잡아당겨요', '발로 차요'], answer: 0, difficulty: 0.15, explain: '줄을 당기면 전선이 상해 불이 날 수 있어요.' },
            { type: 'short', prompt: '우리 집에서 가족과 점검할 곳 하나를 쓰세요.' },
            MOOD,
          ],
        },
        wsTitle: '우리 집 불씨 점검표',
        ws: [
          { type: 'check', prompt: '가족과 함께 점검하고 ✔ 하세요.', options: ['콘센트에 플러그가 너무 많지 않아요', '난로 옆에 탈 것이 없어요', '요리할 때 어른이 지켜봐요', '안 쓰는 기구는 꺼 둬요'] },
          { type: 'table', prompt: '위험과 고칠 방법을 쓰세요.', columns: ['위험', '고칠 방법'], cells: [['문어발 콘센트', ''], ['불 옆 행주', ''], ['켜 둔 전기장판', '']], answer: '예) 안 쓰는 플러그 빼기 / 행주 멀리 두기 / 끄기' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '전기 기구가 이상하면 직접 고치지 않고 ___에게 알려요.', answer: '어른' },
          { type: 'draw', prompt: '불씨를 고친 우리 집 모습을 그려요.' },
        ],
        notes: '자주 보이는 어려움: ① 전기와 불을 잇지 못한다 → 뜨거워진 전선이 탈 것에 불을 붙일 수 있음을 짚는다. ② 직접 고치려 한다 → 어른에게 알린다. ③ 점검표를 숙제로 부담스러워한다 → 가족과 함께 하는 활동으로 안내한다.',
      }),

      LESSON(2, {
        title: '비상구 표지 따라 계단으로 나가는 화재 대피 훈련',
        objective: '화재 대피 훈련에서 비상구 표지를 따라 승강기가 아닌 계단으로 나갈 수 있다.',
        draw: 'children following green paper exit signs with running figures down a stairwell, while an elevator door shows a crossed-out sign',
        banner: '초록 표지 따라 계단으로', extra: [{ motif: 'leaf', x: 300, y: 222, color: 'mint' }],
        intro: {
          teacher: '"초록색 바탕에 달리는 사람이 그려진 표지를 본 적 있나요?" 대답을 듣고(기다릴 반응: "복도에서 봤어요") "비상구 표지예요. 불이 나면 이 표지를 따라가면 밖으로 나갈 수 있어요"라고 말한다. 오늘은 실제 화재 대피 훈련 전에 길을 익히고, 훈련 뒤 돌아본다고 알린다. 시연 단추로 대피 차례 카드가 놓이는 모습을 보여 준다.',
          student: '우리 교실에서 가장 가까운 비상구가 어느 쪽인지 짝과 손으로 가리켜 봐요.',
          demo: { tool: 'story', options: { cards: [{ id: 'd1', text: '비상구 표지를 찾아요', motif: 'leaf' }, { id: 'd2', text: '계단으로 가요', motif: 'tree' }], slots: ['먼저', '다음'], shuffle: false }, sequence: [{ order: ['d1', 'd2'] }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 훈련 전 대피 길', tool: 'story',
            teacher: '"불이 나면 승강기를 타면 빠를까요?" 승강기는 불이 나면 멈추거나 연기가 들어올 수 있어 계단으로 간다고 짚는다. 차례를 놓은 뒤 교실 밖 비상구 표지를 함께 찾아본다. 훈련 경보 신호와 운동장 모이는 곳을 미리 알린다.',
            task: '화재 대피 길을 차례대로 놓아요.',
            levels: LV,
            items: [
              SO('3층 교실에서 대피하는 차례로 놓아요.', '3층에서 대피', ['먼저', '다음', '그다음', '마지막'], [{ id: 'e1', text: '경보 듣고 멈춰요', motif: 'sun' }, { id: 'e2', text: '비상구 표지를 따라요', motif: 'leaf' }, { id: 'e3', text: '계단으로 내려가요', motif: 'tree' }, { id: 'e4', text: '운동장에 모여요', motif: 'flower' }], ['e1', 'e2', 'e3', 'e4'], 0.2),
              SO('승강기 앞에서 차례대로 놓아요.', '승강기 앞', ['먼저', '다음', '마지막'], [{ id: 'v1', text: '승강기를 타지 않아요', motif: 'house' }, { id: 'v2', text: '옆 계단을 찾아요', motif: 'tree' }, { id: 'v3', text: '손잡이 잡고 내려가요', motif: 'leaf' }], ['v1', 'v2', 'v3'], 0.25),
              SO('계단에서 차례대로 놓아요.', '계단에서', ['먼저', '다음', '마지막'], [{ id: 's1', text: '한 줄로 서요', motif: 'flower' }, { id: 's2', text: '뛰지 않고 걸어요', motif: 'leaf' }, { id: 's3', text: '1층 밖으로 나가요', motif: 'sun' }], ['s1', 's2', 's3'], 0.25,
                { conclude: '불이 나면 초록 비상구 표지를 따라 계단으로, 승강기는 타지 않아요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 훈련 뒤 돌아보기', tool: 'story',
            teacher: '"훈련에서 비상구 표지를 찾았나요? 길이 막혔다면 어떻게 할까요?" 한쪽 길이 연기로 막히면 다른 비상구로 간다는 것을 짚는다. 대피하다 물건을 떨어뜨려도 줍지 않고 나간다고 말한다.',
            task: '훈련 중 생길 수 있는 일의 차례를 놓아요.',
            levels: LV,
            items: [
              SO('가던 계단에 연기가 보여요. 차례대로 놓아요.', '길이 막혔어요', ['먼저', '다음', '마지막'], [{ id: 'b1', text: '멈춰요', motif: 'sun' }, { id: 'b2', text: '선생님께 알려요', motif: 'house' }, { id: 'b3', text: '다른 비상구로 가요', motif: 'leaf' }], ['b1', 'b2', 'b3'], 0.3),
              SO('실내화가 벗겨졌어요. 차례대로 놓아요.', '실내화가 벗겨졌어요', ['먼저', '다음', '마지막'], [{ id: 'k1', text: '줍지 않아요', motif: 'cloud' }, { id: 'k2', text: '줄을 따라 계속 가요', motif: 'leaf' }, { id: 'k3', text: '밖에서 선생님께 말해요', motif: 'house' }], ['k1', 'k2', 'k3'], 0.3),
              SO('훈련을 마치고 차례대로 놓아요.', '훈련을 마치고', ['먼저', '다음', '마지막'], [{ id: 'z1', text: '인원을 확인해요', motif: 'flower' }, { id: 'z2', text: '잘한 점을 말해요', motif: 'star' }, { id: 'z3', text: '고칠 점을 정해요', motif: 'sun' }], ['z1', 'z2', 'z3'], 0.25,
                { conclude: '길이 막히면 다른 비상구로, 물건은 줍지 않고, 훈련 뒤 고칠 점을 정해요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"우리 교실에서 가장 가까운 비상구와 두 번째로 가까운 비상구는 어디였나요?" 출구 1번에서 승강기를 고른 학생에게 까닭을 다시 짚는다.',
          exit: [
            { type: 'choice', prompt: '불이 났을 때 높은 층에서 내려가는 방법은?', options: ['계단', '승강기', '창문으로 뛰기'], answer: 0, difficulty: 0.15, explain: '불이 나면 승강기가 멈출 수 있어 계단으로 가요.' },
            { type: 'choice', prompt: '비상구 표지의 색은?', options: ['초록', '빨강', '보라'], answer: 0, difficulty: 0.1, explain: '초록 바탕에 달리는 사람 그림이에요.' },
            { type: 'short', prompt: '대피 길이 연기로 막히면 어떻게 할지 쓰세요.' },
            MOOD,
          ],
        },
        wsTitle: '비상구 따라 계단으로',
        ws: [
          { type: 'table', prompt: '대피 차례에 맞게 1~4를 쓰세요.', columns: ['할 일', '차례'], cells: [['계단으로 내려가요', ''], ['경보 듣고 멈춰요', ''], ['운동장에 모여요', ''], ['비상구 표지를 따라요', '']], answer: '3, 1, 4, 2' },
          { type: 'choice', prompt: '불이 났을 때 타지 않는 것에 ○ 하세요.', options: ['승강기', '계단', '비상구'], answer: '승강기' },
          { type: 'draw', prompt: '우리 교실에서 비상구까지 가는 길을 그려요.' },
          { type: 'short', prompt: '대피할 때 떨어뜨린 물건을 줍지 않는 까닭을 쓰세요.' },
        ],
        notes: '훈련 운영: 화재 경보 → 교사가 대피로 확인·선도 → 비상구 표지·계단 이용 → 운동장 집결 → 인원 확인(학교 재난 대비 훈련 계획에 맞춘다, 연 2종 이상 중 화재). 자주 보이는 어려움: ① 승강기가 빠르다고 여긴다 → 멈추거나 연기가 들어올 수 있다. ② 비상구 표지를 모른다 → 훈련 전 함께 찾는다. ③ 떨어뜨린 물건을 줍는다 → 몸만 나간다.',
      }),

      LESSON(3, {
        title: '옷에 불이 붙거나 데었을 때 차례 익히기',
        objective: '옷에 불이 붙었을 때와 데었을 때 할 일을 차례대로 말할 수 있다.',
        draw: 'a child demonstrating stop, drop and roll on a soft paper mat, and another child cooling a hand under a paper faucet',
        banner: '멈추고, 엎드리고, 굴러요', extra: [{ motif: 'wave', x: 300, y: 222, color: 'sky' }],
        intro: {
          teacher: '"옷에 불이 붙으면 뛰어야 할까요?" 대답을 듣고(기다릴 반응: "뛰어요"가 많다) "뛰면 바람 때문에 불이 더 커져요. 멈추고, 엎드려 얼굴을 가리고, 굴러서 꺼요"라고 말한다. 다 함께 매트 위에서 동작을 흉내 낸다. 시연 단추로 차례 카드가 놓이는 모습을 보여 준다.',
          student: '"멈추고, 엎드리고, 굴러요"를 짝과 함께 말해 봐요.',
          demo: { tool: 'story', options: { cards: [{ id: 'd1', text: '그 자리에 멈춰요', motif: 'sun' }, { id: 'd2', text: '엎드려요', motif: 'leaf' }], slots: ['먼저', '다음'], shuffle: false }, sequence: [{ order: ['d1', 'd2'] }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 옷에 불이 붙으면', tool: 'story',
            teacher: '"엎드릴 때 손은 어디에 둘까요?" 손으로 얼굴을 가려 얼굴을 지킨다는 것을 짚는다. 친구 옷에 불이 붙으면 담요·두꺼운 옷으로 덮어 주고 어른을 부른다고 말한다. 동작 연습은 매트 위에서 천천히 한다.',
            task: '옷에 불이 붙었을 때 할 일을 차례대로 놓아요.',
            levels: LV,
            items: [
              SO('옷에 불이 붙었어요. 차례대로 놓아요.', '옷에 불이 붙으면', ['먼저', '다음', '마지막'], [{ id: 'r1', text: '그 자리에 멈춰요', motif: 'sun' }, { id: 'r2', text: '엎드려 얼굴을 가려요', motif: 'leaf' }, { id: 'r3', text: '이리저리 굴러요', motif: 'wave' }], ['r1', 'r2', 'r3'], 0.15),
              SO('친구 옷에 불이 붙었어요. 차례대로 놓아요.', '친구를 도와요', ['먼저', '다음', '마지막'], [{ id: 'h1', text: '"멈춰! 굴러!" 외쳐요', motif: 'star' }, { id: 'h2', text: '담요로 덮어 줘요', motif: 'cloud' }, { id: 'h3', text: '어른을 불러요', motif: 'house' }], ['h1', 'h2', 'h3'], 0.25),
              SO('불이 꺼진 뒤 차례대로 놓아요.', '불이 꺼진 뒤', ['먼저', '다음', '마지막'], [{ id: 'a1', text: '어른에게 알려요', motif: 'house' }, { id: 'a2', text: '데인 곳을 물로 식혀요', motif: 'wave' }, { id: 'a3', text: '병원에 가요', motif: 'flower' }], ['a1', 'a2', 'a3'], 0.25,
                { conclude: '옷에 불이 붙으면 뛰지 말고 멈추고, 엎드려 얼굴을 가리고, 굴러요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 데었을 때', tool: 'story',
            teacher: '"데었을 때 가장 먼저 할 일은 무엇일까요?" 흐르는 시원한 물로 식히고 어른에게 알린다는 것을 짚는다. 된장·치약·얼음을 바로 대는 방법은 하지 않는다고 말한다(자세한 처치는 응급처치 단원에서 다시 익힌다).',
            task: '데었을 때 할 일을 차례대로 놓아요.',
            levels: LV,
            items: [
              SO('뜨거운 물에 손이 데었어요. 차례대로 놓아요.', '손이 데었어요', ['먼저', '다음', '마지막'], [{ id: 'b1', text: '뜨거운 것에서 떨어져요', motif: 'sun' }, { id: 'b2', text: '흐르는 물로 식혀요', motif: 'wave' }, { id: 'b3', text: '어른에게 보여요', motif: 'house' }], ['b1', 'b2', 'b3'], 0.2),
              SO('다리미에 팔이 닿았어요. 차례대로 놓아요.', '팔이 데었어요', ['먼저', '다음', '마지막'], [{ id: 'c1', text: '어른을 불러요', motif: 'house' }, { id: 'c2', text: '시원한 물로 식혀요', motif: 'wave' }, { id: 'c3', text: '아무것도 바르지 않아요', motif: 'leaf' }], ['c1', 'c2', 'c3'], 0.25),
              SO('뜨거운 것을 쓰기 전 차례대로 놓아요.', '데지 않으려면', ['먼저', '다음', '마지막'], [{ id: 'p1', text: '어른에게 물어요', motif: 'house' }, { id: 'p2', text: '장갑을 껴요', motif: 'leaf' }, { id: 'p3', text: '천천히 다뤄요', motif: 'flower' }], ['p1', 'p2', 'p3'], 0.25,
                { conclude: '데면 뜨거운 것에서 떨어져 흐르는 물로 식히고, 어른에게 알려요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 배운 두 가지 차례를 몸으로 다시 해 볼까요?" 출구 1번에서 뛰는 보기를 고른 학생에게 까닭을 다시 짚는다.',
          exit: [
            { type: 'choice', prompt: '옷에 불이 붙으면 먼저 어떻게 할까요?', options: ['그 자리에 멈춰요', '빨리 뛰어요', '옷을 흔들어요'], answer: 0, difficulty: 0.15, explain: '뛰면 불이 더 커져요. 멈추고 엎드려 굴러요.' },
            { type: 'choice', prompt: '데었을 때 바른 행동은?', options: ['흐르는 시원한 물로 식혀요', '치약을 발라요', '그냥 놀아요'], answer: 0, difficulty: 0.15, explain: '흐르는 시원한 물로 식히고 어른에게 알려요.' },
            MOOD,
          ],
        },
        wsTitle: '옷에 불이 붙으면, 데었을 때',
        ws: [
          { type: 'table', prompt: '옷에 불이 붙었을 때 차례에 맞게 1~3을 쓰세요.', columns: ['할 일', '차례'], cells: [['굴러요', ''], ['멈춰요', ''], ['엎드려 얼굴을 가려요', '']], answer: '3, 1, 2' },
          { type: 'choice', prompt: '데었을 때 하지 않을 일에 ○ 하세요.', options: ['된장을 발라요', '물로 식혀요', '어른에게 알려요'], answer: '된장을 발라요' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '옷에 불이 붙으면 멈추고, 엎드리고, ___요.', answer: '굴러' },
          { type: 'draw', prompt: '멈추고 엎드려 구르는 모습을 그려요.' },
        ],
        notes: '근거: 소방청 화재 안전 안내(옷에 불이 붙으면 멈추고·엎드리고·구르기, 화상은 흐르는 시원한 물로 식히기). 자주 보이는 어려움: ① 불이 붙으면 뛴다 → 바람 때문에 불이 커진다. ② 엎드릴 때 얼굴을 가리지 않는다 → 손으로 얼굴을 가린다. ③ 민간요법을 바른다 → 아무것도 바르지 않는다. 동작 연습은 매트 위에서 천천히, 실제 불은 쓰지 않는다.',
      }),

      LESSON(4, {
        title: '지진 대피 훈련 — 교실에서 운동장까지 차례대로',
        objective: '지진 대피 훈련에서 교실·복도·계단·운동장으로 이어지는 대피 차례를 지킬 수 있다.',
        draw: 'a cross-section paper school: children under desks upstairs, then walking down stairs with bags over heads, then sitting in the middle of a playground',
        banner: '교실 → 계단 → 운동장', extra: [{ motif: 'tree', x: 300, y: 214, color: 'mint' }],
        intro: {
          teacher: '"1학년 때 지진이 나면 책상 아래로 들어간다고 배웠지요. 그다음에는 어떻게 했나요?" 대답을 듣고(기다릴 반응: "운동장으로 나가요") "오늘은 교실에서 운동장까지 가는 길을 장소마다 차례로 익혀요"라고 말한다. 실제 지진 대피 훈련 전에 차례를 익히고 훈련 뒤 돌아본다고 알린다. 시연 단추로 차례 카드가 놓이는 모습을 보여 준다.',
          student: '우리 교실에서 운동장까지 가는 길에 무엇을 지나는지 짝에게 말해 봐요.',
          demo: { tool: 'story', options: { cards: [{ id: 'd1', text: '책상 아래에 있어요', motif: 'house' }, { id: 'd2', text: '복도로 나가요', motif: 'leaf' }], slots: ['먼저', '다음'], shuffle: false }, sequence: [{ order: ['d1', 'd2'] }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 장소마다 차례', tool: 'story',
            teacher: '"흔들림이 멈추면 선생님이 문을 열고 나갈 길을 확인해요. 그다음 우리는 무엇을 할까요?" 교실 → 복도 → 계단 → 운동장 차례를 놓는다. 복도에서 창문 쪽으로 붙어 걷지 않는다는 것, 계단에서 앞 친구를 밀지 않는다는 것을 짚는다. 훈련 신호와 운동장 집결 장소를 알린다.',
            task: '교실에서 운동장까지 대피 차례를 놓아요.',
            levels: LV,
            items: [
              SO('교실에서 운동장까지 차례대로 놓아요.', '대피 길', ['교실', '복도', '계단', '운동장'], [{ id: 'e1', text: '멈출 때까지 책상 아래', motif: 'house' }, { id: 'e2', text: '창문 반대쪽으로 걸어요', motif: 'leaf' }, { id: 'e3', text: '손잡이 잡고 내려가요', motif: 'tree' }, { id: 'e4', text: '가운데에 앉아요', motif: 'sun' }], ['e1', 'e2', 'e3', 'e4'], 0.2),
              SO('흔들림이 멈춘 교실에서 차례대로 놓아요.', '교실에서', ['먼저', '다음', '마지막'], [{ id: 'c1', text: '선생님 말씀을 들어요', motif: 'house' }, { id: 'c2', text: '가방으로 머리를 가려요', motif: 'leaf' }, { id: 'c3', text: '줄 서서 나가요', motif: 'flower' }], ['c1', 'c2', 'c3'], 0.25),
              SO('계단을 내려갈 때 차례대로 놓아요.', '계단에서', ['먼저', '다음', '마지막'], [{ id: 's1', text: '앞 친구와 거리를 둬요', motif: 'flower' }, { id: 's2', text: '손잡이를 잡아요', motif: 'tree' }, { id: 's3', text: '한 칸씩 내려가요', motif: 'leaf' }], ['s1', 's2', 's3'], 0.25,
                { conclude: '교실·복도·계단·운동장마다 지킬 것을 차례대로 지키면 안전하게 모일 수 있어요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 훈련 뒤 돌아보기', tool: 'story',
            teacher: '"훈련에서 운동장에 다 모이기까지 무엇이 잘 됐고, 무엇이 어려웠나요?" 쉬는 시간·화장실처럼 선생님과 떨어져 있을 때도 같은 차례로 나와 우리 반을 찾아간다고 짚는다.',
            task: '선생님과 떨어져 있을 때의 차례를 놓아요.',
            levels: LV,
            items: [
              SO('화장실에 있을 때 흔들려요. 차례대로 놓아요.', '화장실에서', ['먼저', '다음', '마지막'], [{ id: 'w1', text: '팔로 머리를 감싸요', motif: 'leaf' }, { id: 'w2', text: '멈추면 밖으로 나가요', motif: 'tree' }, { id: 'w3', text: '운동장에서 반을 찾아요', motif: 'flower' }], ['w1', 'w2', 'w3'], 0.3),
              SO('쉬는 시간 복도에서 흔들려요. 차례대로 놓아요.', '쉬는 시간에', ['먼저', '다음', '마지막'], [{ id: 'b1', text: '창문에서 떨어져 앉아요', motif: 'leaf' }, { id: 'b2', text: '가까운 선생님을 따라요', motif: 'house' }, { id: 'b3', text: '우리 반 줄에 서요', motif: 'flower' }], ['b1', 'b2', 'b3'], 0.3),
              SO('운동장에 모인 뒤 차례대로 놓아요.', '모인 뒤', ['먼저', '다음', '마지막'], [{ id: 'g1', text: '선생님께 왔다고 말해요', motif: 'house' }, { id: 'g2', text: '자리를 지켜요', motif: 'flower' }, { id: 'g3', text: '안내 방송을 들어요', motif: 'sun' }], ['g1', 'g2', 'g3'], 0.25,
                { conclude: '선생님과 떨어져 있어도 같은 차례로 나와 우리 반을 찾아가요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"훈련에서 가장 잘 지킨 차례는 무엇이었나요?" 출구 1번에서 창문 쪽을 고른 학생에게 다시 짚는다.',
          exit: [
            { type: 'choice', prompt: '지진 뒤 복도를 걸을 때 어느 쪽으로 걸을까요?', options: ['창문 반대쪽', '창문 바로 옆', '가운데에서 뛰기'], answer: 0, difficulty: 0.2, explain: '유리창이 깨질 수 있어 떨어져 걸어요.' },
            { type: 'choice', prompt: '화장실에 있을 때 흔들리면 처음 할 일은?', options: ['팔로 머리를 감싸요', '반으로 뛰어가요', '문을 잠가요'], answer: 0, difficulty: 0.2, explain: '흔들리는 동안은 머리를 지키며 기다려요.' },
            MOOD,
          ],
        },
        wsTitle: '교실에서 운동장까지',
        ws: [
          { type: 'table', prompt: '장소마다 지킬 것을 쓰세요.', columns: ['장소', '지킬 것'], cells: [['교실', ''], ['복도', ''], ['계단', ''], ['운동장', '']], answer: '예) 책상 아래 / 창문 반대쪽 / 손잡이 / 가운데' },
          { type: 'choice', prompt: '운동장에 모인 뒤 할 일에 ○ 하세요.', options: ['선생님께 왔다고 말해요', '집에 가요', '교실로 들어가요'], answer: '선생님께 왔다고 말해요' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '계단에서는 ___를 잡고 한 칸씩 내려가요.', answer: '손잡이' },
          { type: 'draw', prompt: '우리 교실에서 운동장까지 대피 길을 그려요.' },
        ],
        notes: '훈련 운영: 지진 경보 → 책상 아래 대기 → 흔들림 멈춤 신호·교사 출구 확인 → 머리 보호·계단 대피 → 운동장 가운데 집결 → 인원 확인(학교 재난 대비 훈련 계획, 연 2종 이상 중 지진). 쉬는 시간 훈련을 함께 해 보면 좋다. 자주 보이는 어려움: ① 복도에서 창문 쪽으로 걷는다. ② 선생님과 떨어지면 어쩔 줄 모른다 → 가까운 선생님을 따르고 반을 찾아간다.',
      }),

      LESSON(5, {
        title: '장마·태풍·무더위 날 행동 고르기',
        objective: '장마·태풍·폭염 때 냇가·바닷가에 가지 않고 시원하게 지내는 행동을 고를 수 있다.',
        draw: 'a child watching heavy rain from inside a paper house window, a closed window on a windy day, and a child resting in the shade with a water bottle',
        banner: '여름 재난, 이렇게 지켜요', extra: [{ motif: 'wave', x: 300, y: 222, color: 'sky' }],
        intro: {
          teacher: '"태풍이 온다는 소식이 있는 날 바닷가에 파도 구경을 가도 될까요?" 대답을 듣고(기다릴 반응: "안 돼요, 파도에 휩쓸려요") 시연 단추로 갈림길 보기가 고르는 모습을 보여 준다. "멀리서 보면 괜찮아요"가 나오면 "큰 파도는 생각보다 멀리까지 와요"라고 말한다.',
          student: '여름에 비가 많이 오거나 아주 더웠던 날 어떻게 지냈는지 짝에게 말해 봐요.',
          demo: { tool: 'emotion', options: { mode: 'branch', situation: '태풍이 와요.', choices: [{ id: 'home', text: '집 안에 있어요', result: '안전해요.', mood: '편안함' }, { id: 'sea', text: '바닷가에 가요', result: '파도가 위험해요.', mood: '무서움' }] }, sequence: [{ choice: 'home' }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 장마와 태풍', tool: 'emotion',
            teacher: '"이렇게 하면 어떻게 될까요?" 결과를 함께 읽는다. 물이 고인 길·맨홀 뚜껑 위를 걷는 보기를 고른 학생에게 "물속이 안 보여 빠질 수 있어요"라고 짚는다. 태풍 때 창문 가까이에 서지 않는다는 것도 말한다.',
            task: '장마·태풍 장면에서 어떻게 할지 골라요.',
            levels: LVB,
            items: [
              EB('장마로 냇물이 불었어요. 어떻게 할까요?', '며칠째 비가 와서 동네 냇물이 크게 불었어요.', [
                { id: 'look', text: '다리 위에서 구경해요', result: '물이 넘쳐 위험해요.', mood: '무서움', why: '불어난 냇물 가까이 가지 않아요.' },
                { id: 'stay', text: '냇가에 가지 않고 집에 있어요', result: '안전하게 지내요.', mood: '편안함' },
                { id: 'stone', text: '돌을 던지며 놀아요', result: '미끄러질 수 있어요.', mood: '걱정', why: '물가는 미끄러워요.' }], 'stay', 0.15),
              EB('물이 고인 길을 지나야 해요. 어떻게 할까요?', '학교 가는 길에 빗물이 무릎까지 고였어요.', [
                { id: 'walk', text: '그냥 첨벙첨벙 걸어요', result: '물속 구멍에 빠질 수 있어요.', mood: '걱정', why: '물속은 보이지 않아요.' },
                { id: 'around', text: '어른과 다른 길로 돌아가요', result: '안전하게 학교에 가요.', mood: '안심' },
                { id: 'run', text: '빨리 뛰어서 지나가요', result: '미끄러져 넘어져요.', mood: '속상함', why: '물 고인 길은 피해요.' }], 'around', 0.2),
              EB('태풍으로 바람이 세요. 어떻게 할까요?', '태풍이 와서 창문이 덜컹거려요.', [
                { id: 'window', text: '창문에 붙어 밖을 봐요', result: '유리가 깨지면 다칠 수 있어요.', mood: '무서움', why: '창문에서 떨어져 있어요.' },
                { id: 'inside', text: '창문에서 떨어진 방 안에 있어요', result: '안전하게 태풍을 기다려요.', mood: '편안함' },
                { id: 'kite', text: '밖에서 연을 날려요', result: '날아온 물건에 다칠 수 있어요.', mood: '걱정', why: '태풍 때는 밖에 나가지 않아요.' }], 'inside', 0.2,
                { conclude: '장마·태풍 때는 물가와 바깥을 피하고, 집 안에서 창문과 떨어져 있어요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 무더위', tool: 'emotion',
            teacher: '"아주 더운 날 운동장에서 놀고 싶을 때는 어떻게 할까요?" 한낮을 피하고 그늘·물을 챙긴다는 것을 짚는다. 차 안에 혼자 있으면 매우 위험하니 어른이 잠깐 내려도 함께 내린다고 말한다.',
            task: '무더운 날 장면에서 어떻게 할지 골라요.',
            levels: LVB,
            items: [
              EB('한낮에 축구를 하고 싶어요. 어떻게 할까요?', '아주 더운 날 점심 무렵 축구를 하고 싶어요.', [
                { id: 'noon', text: '물 없이 한낮에 오래 뛰어요', result: '어지럽고 쓰러질 수 있어요.', mood: '불안', why: '한낮에는 오래 뛰지 않아요.' },
                { id: 'shade', text: '그늘에서 쉬고 시원할 때 해요', result: '건강하게 놀아요.', mood: '기쁨' },
                { id: 'hat', text: '모자 없이 해를 바라봐요', result: '머리가 뜨거워져요.', mood: '걱정', why: '모자를 쓰고 그늘을 찾아요.' }], 'shade', 0.2),
              EB('주차한 차에서 어른이 잠깐 내린대요. 어떻게 할까요?', '더운 날 주차장에서 어른이 잠깐 가게에 다녀온대요.', [
                { id: 'alone', text: '차 안에서 혼자 기다려요', result: '차 안이 금방 아주 뜨거워져요.', mood: '불안', why: '더운 날 차 안에 혼자 있지 않아요.' },
                { id: 'with', text: '어른과 함께 내려요', result: '더위를 피해 안전해요.', mood: '안심' },
                { id: 'sleep', text: '창문을 닫고 잠을 자요', result: '숨이 막힐 수 있어요.', mood: '무서움', why: '혼자 남지 않아요.' }], 'with', 0.25),
              EB('친구가 더위에 어지럽대요. 어떻게 할까요?', '운동장에서 친구가 더워서 어지럽다고 해요.', [
                { id: 'help', text: '그늘로 데려가고 선생님께 알려요', result: '친구가 쉬고 나아져요.', mood: '안심' },
                { id: 'keep', text: '조금만 더 놀자고 해요', result: '친구가 더 힘들어져요.', mood: '걱정', why: '어지러우면 바로 쉬어요.' },
                { id: 'leave', text: '혼자 두고 가요', result: '친구가 혼자 힘들어해요.', mood: '속상함', why: '어른에게 알려요.' }], 'help', 0.25,
                { conclude: '무더위에는 한낮을 피하고, 그늘과 물을 챙기고, 차 안에 혼자 있지 않아요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"여름 재난 때 지킬 약속을 하나씩 말해 볼까요?" 출구 1번에서 다리 위 구경을 고른 학생에게 다시 짚는다.',
          exit: [
            { type: 'choice', prompt: '비가 많이 와 냇물이 불었을 때 바른 행동은?', options: ['냇가에 가지 않아요', '가까이 가서 봐요', '물놀이해요'], answer: 0, difficulty: 0.1, explain: '불어난 냇물은 매우 위험해요.' },
            { type: 'choice', prompt: '더운 날 차에서 어른이 내리면?', options: ['함께 내려요', '혼자 기다려요', '창문을 닫고 자요'], answer: 0, difficulty: 0.2, explain: '더운 날 차 안은 금방 뜨거워져요.' },
            MOOD,
          ],
        },
        wsTitle: '여름 재난 안전',
        ws: [
          { type: 'table', prompt: '안전하면 ○, 위험하면 ×를 쓰세요.', columns: ['행동', '○ / ×'], cells: [['태풍 때 창문에서 떨어져요', ''], ['불어난 냇물을 구경해요', ''], ['더운 날 그늘에서 쉬어요', ''], ['차 안에 혼자 있어요', '']], answer: '○, ×, ○, ×' },
          { type: 'choice', prompt: '물이 고인 길을 만나면 어떻게 할까요?', options: ['다른 길로 돌아가요', '첨벙첨벙 걸어요', '뛰어가요'], answer: '다른 길로 돌아가요' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '무더운 날에는 ___낮에 오래 뛰지 않아요.', answer: '한' },
          { type: 'draw', prompt: '태풍 오는 날 집 안에서 안전하게 지내는 모습을 그려요.' },
        ],
        notes: '근거: 행정안전부 자연재난 국민행동요령(호우·태풍·폭염). 자주 보이는 어려움: ① 불어난 물·파도를 구경한다 → 물가에 가지 않는다. ② 물 고인 길을 그냥 걷는다 → 물속이 보이지 않아 돌아간다. ③ 차 안에 혼자 남는다 → 함께 내린다.',
      }),

      LESSON(6, {
        title: '눈·한파·미세먼지 날 지킬 행동 나누기',
        objective: '대설·한파·미세먼지·황사 때 지킬 행동을 나눌 수 있다.',
        draw: 'a child in a warm scarf and boots walking carefully on a snowy paper path, and another child wearing a mask under a hazy sky',
        banner: '겨울과 먼지 날 안전', extra: [{ motif: 'snow', x: 300, y: 96, color: 'lavender' }],
        intro: {
          teacher: '"하늘이 뿌옇고 미세먼지가 아주 나쁜 날 밖에서 오래 뛰어놀아도 될까요?" 대답을 듣고(기다릴 반응: "마스크를 써요", "안에서 놀아요") 시연 단추로 행동 카드가 나뉘는 모습을 보여 준다. "먼지는 안 보이니까 괜찮아요"가 나오면 "아주 작아서 코와 목으로 들어갈 수 있어요"라고 말한다.',
          student: '아주 춥거나 먼지가 많은 날 어떻게 지냈는지 짝에게 말해 봐요.',
          demo: { tool: 'mindmap', options: { topic: '미세먼지 나쁜 날', slots: ['좋아요', '안 좋아요'], cards: ['마스크를 써요', '밖에서 오래 뛰어요'], shuffle: false }, sequence: [{ sort: { '좋아요': ['마스크를 써요'], '안 좋아요': ['밖에서 오래 뛰어요'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 눈과 추위', tool: 'mindmap',
            teacher: '"눈길·빙판길은 어떻게 걸어야 할까요?" 주머니에 손을 넣고 걸으면 넘어질 때 손을 짚지 못한다고 짚는다. 추운 날 얇게 한 벌보다 여러 겹 입는 것이 따뜻하다는 것을 말한다. 지붕 끝 고드름 아래를 피한다.',
            task: '눈 오는 날·추운 날 행동을 나누고 이어요.',
            levels: LV,
            items: [
              MS('빙판길 행동을 나누어 보세요.', '빙판길', ['좋아요', '안 좋아요'], ['보폭을 줄여 천천히 걸어요', '미끄럼 타듯 달려요', '손을 빼고 걸어요', '휴대전화 보며 걸어요'], { '좋아요': ['보폭을 줄여 천천히 걸어요', '손을 빼고 걸어요'], '안 좋아요': ['미끄럼 타듯 달려요', '휴대전화 보며 걸어요'] }, 0.15),
              MS('아주 추운 날 행동을 나누어 보세요.', '한파', ['좋아요', '안 좋아요'], ['옷을 여러 겹 입어요', '얇은 옷 한 벌만 입어요', '목도리·장갑을 해요', '젖은 옷을 그대로 입어요'], { '좋아요': ['옷을 여러 겹 입어요', '목도리·장갑을 해요'], '안 좋아요': ['얇은 옷 한 벌만 입어요', '젖은 옷을 그대로 입어요'] }, 0.2),
              MP('눈 많이 온 날 피할 곳만 골라 담아요.', '피할 곳', ['고드름 달린 지붕 아래', '눈 쌓인 비탈길', '따뜻한 교실', '치운 인도'], ['고드름 달린 지붕 아래', '눈 쌓인 비탈길'], 0.2,
                { conclude: '눈·추위에는 천천히 걷고, 따뜻하게 입고, 고드름·비탈길을 피해요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 미세먼지와 황사', tool: 'mindmap',
            teacher: '"미세먼지가 나쁜 날 집에 와서 무엇부터 할까요?" 손 씻기·세수를 짚는다. 마스크는 코와 입을 모두 덮어야 한다고 보여 준다. 미세먼지 나쁨 소식은 어른과 함께 날씨 알림으로 본다고 말해 준다.',
            task: '미세먼지·황사 날 행동을 나누고 이어요.',
            levels: LV,
            items: [
              MS('미세먼지 나쁜 날 행동을 나누어 보세요.', '먼지 나쁜 날', ['좋아요', '안 좋아요'], ['바깥 놀이를 줄여요', '창문을 오래 열어 둬요', '코와 입을 다 덮는 마스크', '마스크를 턱에 걸쳐요'], { '좋아요': ['바깥 놀이를 줄여요', '코와 입을 다 덮는 마스크'], '안 좋아요': ['창문을 오래 열어 둬요', '마스크를 턱에 걸쳐요'] }, 0.2),
              MM('때와 할 일을 이어요. 맞지 않는 카드는 남겨요.', '언제 무엇을', [{ id: 't1', label: '밖에 나가기 전' }, { id: 't2', label: '집에 돌아와서' }, { id: 't3', label: '목이 칼칼할 때' }], ['날씨 알림을 확인해요', '손을 씻고 세수해요', '물을 마시고 쉬어요', '밖에서 더 놀아요'], { t1: '날씨 알림을 확인해요', t2: '손을 씻고 세수해요', t3: '물을 마시고 쉬어요' }, 0.25),
              MS('재난과 준비물을 나누어 보세요.', '준비물', ['추운 날', '먼지 나쁜 날'], ['두꺼운 외투', '먼지 막는 마스크', '털장갑', '손 씻을 비누'], { '추운 날': ['두꺼운 외투', '털장갑'], '먼지 나쁜 날': ['먼지 막는 마스크', '손 씻을 비누'] }, 0.25,
                { conclude: '미세먼지·황사 날은 바깥 활동을 줄이고, 마스크를 바르게 쓰고, 돌아오면 씻어요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"겨울 아침 등굣길에 가장 조심할 것은 무엇일까요?" 출구 1번에서 주머니 보기를 고른 학생에게 까닭을 다시 짚는다.',
          exit: [
            { type: 'choice', prompt: '빙판길을 걸을 때 손은 어떻게 할까요?', options: ['주머니에서 빼요', '주머니에 넣어요', '머리 위로 들어요'], answer: 0, difficulty: 0.15, explain: '넘어질 때 손으로 짚을 수 있어야 해요.' },
            { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '먼지 나쁜 날', basket: '먼지 나쁜 날', cards: ['돌아와 손을 씻어요', '창문을 활짝 열어요', '마스크로 코까지 덮어요', '운동장에서 오래 놀아요'] }, state: { at: {} }, prompt: '미세먼지가 아주 나쁜 날 바른 행동만 골라 담아요.', target: { pick: ['돌아와 손을 씻어요', '마스크로 코까지 덮어요'] }, difficulty: 0.2 },
            MOOD,
          ],
        },
        wsTitle: '겨울과 미세먼지 날 안전',
        ws: [
          { type: 'table', prompt: '날씨에 맞는 행동을 쓰세요.', columns: ['날씨', '할 일'], cells: [['많은 눈', ''], ['아주 추움', ''], ['미세먼지 나쁨', '']], answer: '예) 천천히 걷기 / 여러 겹 입기 / 마스크·바깥 놀이 줄이기' },
          { type: 'choice', prompt: '마스크를 바르게 쓴 모습에 ○ 하세요.', options: ['코와 입을 다 덮어요', '턱에 걸쳐요', '입만 덮어요'], answer: '코와 입을 다 덮어요' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '미세먼지 나쁜 날 집에 오면 손을 ___고 세수해요.', answer: '씻' },
          { type: 'draw', prompt: '눈 오는 날 따뜻하게 입고 천천히 걷는 모습을 그려요.' },
        ],
        notes: '근거: 행정안전부 국민행동요령(대설·한파·미세먼지·황사). 자주 보이는 어려움: ① 주머니에 손을 넣고 걷는다 → 손을 뺀다. ② 마스크를 턱에 걸친다 → 코와 입을 다 덮는다. ③ 먼지는 안 보이니 괜찮다고 여긴다 → 아주 작아 몸에 들어온다고 짚는다.',
      }),
    ],
  });
})();
