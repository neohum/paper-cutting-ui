/* 4학년 창체 안전교육 — 응급처치. 근거: 「학교 안전교육 실시 기준 등에 관한 고시」 별표 2 초등 응급처치.
 * (응급상황 알기·도움 요청하기, 일상생활 속 응급처치) 장면·인물은 이 단원을 위해 지은 것이다(가명). */
(function () {
  const ID = 'g4-cc-saf-firstaid';
  const UNIT = 'g4-창체-saf-firstaid';
  const TITLE = '응급처치';
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
    flow: '4학년 응급처치는 목에 음식이 걸린 사람, 벌에 쏘인 사람, 더위에 쓰러진 사람처럼 빨리 알아차려야 하는 응급 상황의 신호를 읽고 도움을 부르는 단원입니다. 1차시에는 목을 감싸 쥐는 신호를 알아보고, 기침을 할 수 있을 때와 없을 때 무엇을 할지 갈림길에서 고르며, 먹을 때 지킬 예방 습관을 나눕니다. 2차시에는 벌에 쏘였을 때와 더위로 쓰러진 사람을 볼 때 돕는 차례를 놓고, 119를 불러야 하는 위험 신호를 가려냅니다. 4학년은 직접 치료하기보다 "알아차리고, 알리고, 어른이 올 때까지 곁을 지키는" 데 초점을 두며, 배 밀어내기 같은 처치는 어른이 하는 방법으로만 이해합니다. 보건 수업과 묶어 운영할 수 있습니다(시수 인정은 학교 결정).',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '목에 걸렸다는 신호 읽고 도움 부르기',
        objective: '목에 음식이 걸렸을 때의 신호를 알아보고, 기침 여부에 따라 알맞게 도움을 부를 수 있다.',
        draw: 'a child at a lunch table holding their throat with both hands while a friend raises a hand to call a teacher, with paper food trays',
        banner: '목을 감싸면 위험 신호', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }],
        intro: {
          teacher: '"급식 시간에 친구가 갑자기 두 손으로 목을 감싸 쥐고 말을 못 해요. 무슨 일일까요?" 대답을 듣고(기다릴 반응: "목에 뭐가 걸렸어요") 시연 단추로 신호 카드가 나뉘는 모습을 보여 준다. "등을 세게 때려 줘요"가 나오면 "기침을 할 수 있는지 먼저 살펴볼까요?"라고 되묻는다. 오늘은 위험 신호를 읽고 도움을 부르는 법을 익힌다고 밝힌다.',
          student: '먹을 때 목이 막힐 뻔한 적이 있나요? 그때 어떻게 했는지 짝에게 말해 봐요.',
          demo: { tool: 'mindmap', options: { topic: '목에 걸렸어요', slots: ['위험 신호', '괜찮은 모습'], cards: ['두 손으로 목을 감싸요', '웃으며 이야기해요'], shuffle: false }, sequence: [{ sort: { '위험 신호': ['두 손으로 목을 감싸요'], '괜찮은 모습': ['웃으며 이야기해요'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 기침할 수 있나, 없나', tool: 'emotion',
            teacher: '"친구가 콜록콜록 기침을 세게 하고 있다면 어떻게 할까요?" 기침을 할 수 있으면 스스로 뱉어 내도록 기침하게 두고 곁에서 지켜본다고 짚는다. 기침도 말도 못 하면 바로 어른과 119를 불러야 한다 — "어른은 배 밀어내기라는 방법으로 도와요. 우리는 어른을 부르는 일이 가장 중요해요"라고 말한다. 물을 먹이려는 학생에게 "막힌 곳에 물이 들어가면 더 막힐 수 있어요"라고 짚는다.',
            task: '목에 무언가 걸린 장면에서 어떻게 할지 골라요.',
            levels: LVB,
            items: [
              EB('친구가 사탕이 걸려 세게 기침해요. 어떻게 할까요?', '쉬는 시간에 친구가 사탕을 먹다 콜록콜록 세게 기침해요.', [
                { id: 'cough', text: '기침하게 두고 곁에서 지켜봐요', result: '친구가 기침으로 사탕을 뱉어 내요.', mood: '안심' },
                { id: 'water', text: '물을 억지로 먹여요', result: '물이 들어가 더 숨 막혀 해요.', mood: '불안', why: '기침할 때 물을 먹이지 않아요.' },
                { id: 'leave', text: '괜찮겠지 하고 자리를 떠나요', result: '혼자 남은 친구가 무서워해요.', mood: '걱정', why: '나아질 때까지 곁에서 지켜봐요.' }], 'cough', 0.2),
              EB('친구가 목을 감싸고 소리도 기침도 못 내요. 어떻게 할까요?', '급식 시간에 친구가 두 손으로 목을 감싸고 말도 기침도 못 해요.', [
                { id: 'call', text: '"선생님! 119!" 크게 외쳐 어른을 불러요', result: '선생님이 바로 와서 응급처치를 해요.', mood: '안심' },
                { id: 'finger', text: '손가락을 입에 넣어 빼요', result: '더 깊이 밀려 들어갈 수 있어요.', mood: '걱정', why: '입에 손을 넣지 말고 어른을 불러요.' },
                { id: 'wait', text: '조금 기다려 봐요', result: '그사이 숨 쉬기가 더 힘들어져요.', mood: '불안', why: '기침도 말도 못 하면 바로 도움을 불러요.' }], 'call', 0.25),
              EB('내 목에 떡이 걸려 말이 안 나와요. 어떻게 알릴까요?', '집에서 떡을 먹다 목이 막혀 말이 나오지 않아요.', [
                { id: 'room', text: '방에 혼자 들어가요', result: '아무도 알아채지 못해요.', mood: '무서움', why: '혼자 있지 말고 사람 곁으로 가요.' },
                { id: 'sign', text: '어른에게 가서 목을 감싸 신호를 보내요', result: '어른이 알아차리고 바로 도와줘요.', mood: '안심' },
                { id: 'jump', text: '제자리에서 뛰어 봐요', result: '나아지지 않고 힘만 빠져요.', mood: '걱정', why: '어른에게 신호를 보내는 것이 먼저예요.' }], 'sign', 0.3,
                { conclude: '기침을 하면 지켜보고, 기침도 말도 못 하면 바로 어른과 119를 불러요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 신호 알기와 예방 습관', tool: 'mindmap',
            teacher: '"목에 걸리지 않게 하려면 먹을 때 어떻게 하면 좋을까요?" 사탕을 입에 문 채 뛰거나 누워서 먹는 습관을 짚는다. 작은 조각으로 천천히 씹어 먹는 것이 예방이라고 말한다. 동생에게 작은 장난감·구슬을 주지 않는 것도 예방임을 덧붙인다.',
            task: '위험 신호를 나누고, 먹을 때 지킬 습관을 골라요.',
            levels: LV,
            items: [
              MS('모습을 두 가지로 나누어 보세요.', '숨 막힘 신호', ['위험 신호', '괜찮은 모습'], ['얼굴이 파래져요', '크게 웃어요', '말을 하지 못해요', '물을 마셔요'], { '위험 신호': ['얼굴이 파래져요', '말을 하지 못해요'], '괜찮은 모습': ['크게 웃어요', '물을 마셔요'] }, 0.2),
              MP('먹을 때 지킬 안전 습관만 골라 담아요.', '먹을 때 습관', ['작게 잘라 천천히 씹어요', '사탕 물고 뛰어요', '앉아서 먹어요', '누워서 과자를 먹어요'], ['작게 잘라 천천히 씹어요', '앉아서 먹어요'], 0.2),
              MM('장면과 알맞은 행동을 이어요. 맞지 않는 카드는 남겨요.', '이럴 땐', [{ id: 'e1', label: '친구가 세게 기침해요' }, { id: 'e2', label: '목 감싸고 말을 못 해요' }, { id: 'e3', label: '동생이 구슬을 입에 넣어요' }], ['기침하게 두고 지켜봐요', '어른과 119를 불러요', '뱉게 하고 치워 둬요', '등을 마구 때려요'], { e1: '기침하게 두고 지켜봐요', e2: '어른과 119를 불러요', e3: '뱉게 하고 치워 둬요' }, 0.3,
                { conclude: '신호를 빨리 알아채고 알리는 것, 그리고 미리 막는 습관이 생명을 지켜요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"목에 걸렸다는 신호를 몸으로 보여 줄까요?" 다 같이 두 손으로 목을 감싸는 신호를 해 보고, "이 신호를 보면 어떻게 한다고 했지요?"라고 묻는다. 출구 1번에서 "물을 먹여요"를 고른 학생에게 까닭을 다시 짚는다.',
          exit: [
            { type: 'choice', prompt: '친구가 기침도 말도 못 하고 목을 감싸요. 먼저 할 일은?', options: ['물을 먹여요', '어른과 119를 불러요', '기다려요'], answer: 1, difficulty: 0.15, explain: '기침도 말도 못 하면 바로 도움을 불러요.' },
            { type: 'choice', prompt: '목에 걸리는 일을 막는 습관은 무엇인가요?', options: ['뛰면서 먹어요', '작게 잘라 천천히 씹어요', '한입에 크게 먹어요'], answer: 1, difficulty: 0.1, explain: '작게, 천천히, 앉아서 먹어요.' },
            { type: 'short', prompt: '기침을 세게 하는 친구에게 물을 먹이지 않는 까닭을 쓰세요.' },
            MOOD,
          ],
        },
        wsTitle: '목에 걸렸을 때',
        ws: [
          { type: 'table', prompt: '장면에 맞는 행동을 쓰세요.', columns: ['장면', '할 일'], cells: [['친구가 세게 기침해요', ''], ['목 감싸고 말을 못 해요', ''], ['동생이 구슬을 물었어요', '']], answer: '예) 기침하게 두고 지켜봐요 / 어른과 119를 불러요 / 뱉게 하고 치워요' },
          { type: 'choice', prompt: '목에 걸렸다는 신호에 ○ 하세요.', options: ['두 손으로 목을 감싸요', '손을 흔들어요', '박수를 쳐요'], answer: '두 손으로 목을 감싸요' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '먹을 때는 ___아서, 작게 잘라 ___히 씹어요.', answer: '앉, 천천' },
          { type: 'short', prompt: '목이 막혔는데 혼자 방에 들어가면 안 되는 까닭을 쓰세요.' },
        ],
        notes: '자주 보이는 어려움: ① 기침하는 사람에게 물을 먹이거나 등을 마구 때린다 → 기침할 수 있으면 기침하게 두고 지켜본다. ② 손가락을 입에 넣어 빼려 한다 → 더 깊이 밀려 들어갈 수 있다. ③ 배 밀어내기를 친구에게 해 보려 한다 → 초등학생은 실제로 하지 않고 어른을 부른다. 실습은 신호 흉내까지만 한다.',
      }),

      LESSON(2, {
        title: '벌 쏘임·더위로 쓰러진 사람 돕는 차례 놓기',
        objective: '벌에 쏘였을 때와 더위로 쓰러진 사람을 볼 때 돕는 차례를 말하고, 119를 불러야 할 신호를 고를 수 있다.',
        draw: 'children moving a tired child into the shade of a big paper tree, fanning with a paper fan, with a bee flying away in the distance',
        banner: '그늘로, 시원하게, 알리기', extra: [{ motif: 'sun', x: 300, y: 96, color: 'peach' }],
        intro: {
          teacher: '"아주 더운 날 운동장에서 친구가 어지럽다며 주저앉았어요. 무엇부터 해야 할까요?" 대답을 듣고(기다릴 반응: "그늘로 데려가요", "선생님께 알려요") 시연 단추로 돕는 차례 카드가 놓이는 모습을 보여 준다. "물을 마구 먹여요"가 나오면 "정신이 흐린 사람이 물을 마시면 어떻게 될까요?"라고 되묻는다.',
          student: '아주 더운 날이나 벌을 만났을 때 조심했던 일을 짝에게 말해 봐요.',
          demo: { tool: 'story', options: { cards: [{ id: 'd1', text: '어른을 불러요', motif: 'house' }, { id: 'd2', text: '그늘로 옮겨요', motif: 'tree' }], slots: ['먼저', '다음'], shuffle: false }, sequence: [{ order: ['d1', 'd2'] }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 벌에 쏘였을 때', tool: 'story',
            teacher: '"벌이 가까이 오면 팔을 휘저어야 할까요?" 휘저으면 벌이 더 놀라 쏠 수 있으니 몸을 낮추고 천천히 그 자리를 벗어난다고 짚는다. 쏘였을 때 침을 손톱으로 짜내려는 학생에게 "꽉 짜면 독이 더 들어갈 수 있어요. 어른이 카드처럼 납작한 것으로 긁어 빼요"라고 말한다. 숨쉬기 힘들거나 얼굴·입술이 부으면 바로 119라는 것을 꼭 짚는다.',
            task: '벌을 만나거나 쏘였을 때 할 일을 차례대로 놓아요.',
            levels: LV,
            items: [
              SO('벌에 쏘였을 때 차례대로 놓아요.', '벌에 쏘였어요', ['먼저', '다음', '그다음', '마지막'], [{ id: 'b1', text: '그 자리를 벗어나요', motif: 'tree' }, { id: 'b2', text: '어른에게 알려요', motif: 'house' }, { id: 'b3', text: '어른이 침을 긁어 빼요', motif: 'leaf' }, { id: 'b4', text: '쏘인 곳을 차갑게 해요', motif: 'snow' }], ['b1', 'b2', 'b3', 'b4'], 0.2),
              MS('벌을 만났을 때 행동을 나누어 보세요.', '벌을 만나면', ['안전해요', '위험해요'], ['몸을 낮추고 천천히 피해요', '팔을 마구 휘저어요', '벌집을 막대로 찔러요', '그 자리를 조용히 떠나요'], { '안전해요': ['몸을 낮추고 천천히 피해요', '그 자리를 조용히 떠나요'], '위험해요': ['팔을 마구 휘저어요', '벌집을 막대로 찔러요'] }, 0.2),
              MP('벌에 쏘인 뒤 바로 119를 불러야 할 신호만 골라요.', '119 신호', ['숨쉬기가 힘들어요', '쏘인 곳이 조금 따가워요', '얼굴과 입술이 부어요', '쏘인 곳이 살짝 빨개요'], ['숨쉬기가 힘들어요', '얼굴과 입술이 부어요'], 0.3,
                { conclude: '벌에 쏘이면 피하고 알리고 차갑게 하며, 숨이 차거나 얼굴이 부으면 바로 119예요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 더위로 쓰러진 사람 돕기', tool: 'story',
            teacher: '"쓰러진 친구에게 가장 먼저 해 줄 일은 무엇일까요?" 어른·119를 부르고 그늘로 옮기고 시원하게 하는 차례를 놓게 한다. 정신이 흐린 사람에게 물을 먹이려는 학생에게 "삼키지 못해 숨이 막힐 수 있어요. 정신이 또렷할 때만 물을 줘요"라고 짚는다. 더위를 막는 습관(물 자주 마시기, 모자, 한낮 쉬기)도 함께 말한다.',
            task: '더위로 지친 사람을 돕는 차례를 놓고 행동을 나누어요.',
            levels: LV,
            items: [
              SO('더위로 쓰러진 친구를 돕는 차례로 놓아요.', '더위로 쓰러졌어요', ['먼저', '다음', '그다음', '마지막'], [{ id: 'h1', text: '어른과 119를 불러요', motif: 'house' }, { id: 'h2', text: '그늘로 옮겨요', motif: 'tree' }, { id: 'h3', text: '옷을 느슨하게 해요', motif: 'leaf' }, { id: 'h4', text: '젖은 수건으로 식혀요', motif: 'wave' }], ['h1', 'h2', 'h3', 'h4'], 0.25),
              MS('더위로 지친 사람을 도울 때 행동을 나누어 보세요.', '더위 응급처치', ['해요', '안 해요'], ['부채로 바람을 보내요', '정신 흐린 친구에게 물을 부어 먹여요', '시원한 곳에 눕혀요', '햇볕 아래 그대로 둬요'], { '해요': ['부채로 바람을 보내요', '시원한 곳에 눕혀요'], '안 해요': ['정신 흐린 친구에게 물을 부어 먹여요', '햇볕 아래 그대로 둬요'] }, 0.25),
              MP('더위를 막는 습관만 골라 담아요.', '더위 막기', ['물을 자주 마셔요', '한낮에 오래 뛰어요', '모자를 써요', '목마를 때까지 참아요'], ['물을 자주 마셔요', '모자를 써요'], 0.2,
                { conclude: '더위로 쓰러지면 알리고, 그늘로 옮기고, 시원하게 해요. 미리 물을 자주 마셔요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 배운 두 가지 상황에서 똑같이 가장 먼저 한 일은 무엇이었나요?" (기다릴 반응: "어른에게 알려요") 출구 2번에서 물을 먹이는 보기를 고른 학생에게 정신이 또렷한지 먼저 본다는 것을 다시 짚는다.',
          exit: [
            { type: 'choice', prompt: '벌이 내 쪽으로 날아와요. 알맞은 행동은?', options: ['팔을 휘저어요', '몸을 낮추고 천천히 피해요', '소리 지르며 뛰어요'], answer: 1, difficulty: 0.15, explain: '휘저으면 벌이 놀라 쏠 수 있어요.' },
            { type: 'choice', prompt: '더위로 쓰러져 정신이 흐린 친구에게 하지 않을 일은?', options: ['그늘로 옮겨요', '억지로 물을 먹여요', '어른을 불러요'], answer: 1, difficulty: 0.25, explain: '정신이 흐리면 물을 먹이지 않고 119를 불러요.' },
            { type: 'short', prompt: '여름날 운동장에서 더위를 막기 위해 내가 할 일을 한 문장으로 쓰세요.' },
            MOOD,
          ],
        },
        wsTitle: '벌 쏘임과 더위 응급처치',
        ws: [
          { type: 'table', prompt: '더위로 쓰러진 사람을 돕는 차례에 맞게 1~4를 쓰세요.', columns: ['하는 일', '차례'], cells: [['그늘로 옮겨요', ''], ['젖은 수건으로 식혀요', ''], ['어른과 119를 불러요', ''], ['옷을 느슨하게 해요', '']], answer: '2, 4, 1, 3' },
          { type: 'choice', prompt: '벌에 쏘인 뒤 바로 119를 부를 신호에 ○ 하세요.', options: ['숨쉬기가 힘들어요', '조금 따가워요', '살짝 빨개요'], answer: '숨쉬기가 힘들어요' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '벌을 만나면 팔을 휘젓지 않고 몸을 ___추고 천천히 피해요.', answer: '낮' },
          { type: 'short', prompt: '더위로 쓰러진 사람을 그늘로 옮기는 까닭을 쓰세요.' },
        ],
        notes: '자주 보이는 어려움: ① 벌을 쫓으려 팔을 휘두른다 → 몸을 낮추고 천천히 피한다. ② 벌침을 손톱으로 짜낸다 → 어른이 납작한 것으로 긁어 뺀다. ③ 정신이 흐린 사람에게 물을 먹인다 → 의식이 또렷할 때만 준다. ④ 숨이 차거나 얼굴이 붓는 신호를 가볍게 본다 → 바로 119를 부른다.',
      }),
    ],
  });
})();
