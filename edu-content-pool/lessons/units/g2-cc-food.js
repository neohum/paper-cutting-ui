/* 2학년 창체 법정교육 — 영양·식생활 (2차시).
 * 근거: 학교급식법 제13조(식생활 지도), 식생활교육지원법 제26조, 연 2회 이상(research-mandatory.md 표).
 * 2학년 범위: 아침밥이 필요한 까닭(하루를 시작할 힘), 단 음료·과자 대신 과일·우유·고구마 같은 간식 고르기 / 음식이 식탁에 오기까지의 손길, 먹을 만큼 담기.
 * 영양 수치·특정 하루 권장량은 쓰지 않는다. 1학년 단원(골고루 담기·급식 예절)과 겹치지 않게 짠다. 장면·인물은 지은 것이다(가명 한 글자).
 * 가정 형편에 따라 아침을 못 먹는 학생이 있을 수 있으므로 아침밥을 먹었는지 묻거나 견주지 않는다. */
(function () {
  const ID = 'g2-cc-food', GRADE = 2, TITLE = '영양·식생활';
  const UNIT = `g${GRADE}-창체-${ID.replace(/^g\d+-cc-/, '')}`;
  const base = (n) => ({
    id: `${ID}-${String(n).padStart(2, '0')}`, schema: 'edu-lesson.v1',
    catalog: { unit: UNIT, lesson: n },
    grade: GRADE, subject: '창체', unitTitle: TITLE,
    standards: [],
    minutes: 40,
    formats: ['chromebook', 'projector', 'print'],
  });
  const PROMPT = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const SCENE = (text, extra = []) => ({ viewBox: [480, 270], layers: [
    { motif: 'sun', x: 410, y: 58, s: 0.8 }, { motif: 'cloud', x: 120, y: 52 }, { motif: 'hills', y: 204 },
    { motif: 'house', x: 96, y: 214, color: 'rose', s: 0.9 }, { motif: 'tree', x: 380, y: 214 }, ...extra,
    { motif: 'text', x: 240, y: 140, text, size: 22 },
  ] });
  // 문항 틀: MS 나누기, MM 잇기, MP 고르기(mindmap) / EB 갈림길, ES 나누기, EM 잇기, EP 고르기(emotion) / SO 차례, SF 말풍선(story) / KS 식판 나누기, KP 고르기, KO 차례(kitchen) / TO 시간 띠 차례, TS 시간 띠 나누기(timeline) / WS·WF 낱말 카드(wordcards)
  const MS = (prompt, topic, slots, cards, sort, d, more) => ({ prompt, toolOptions: { topic, slots, cards }, target: { sort }, difficulty: d, ...more });
  const MM = (prompt, topic, slots, cards, match, d, more) => ({ prompt, toolOptions: { mode: 'match', topic, slots, cards }, target: { match }, difficulty: d, ...more });
  const MP = (prompt, topic, cards, pick, d, more) => ({ prompt, toolOptions: { mode: 'pick', topic, basket: topic, cards }, target: { pick }, difficulty: d, ...more });
  const EB = (prompt, situation, choices, choice, d, more) => ({ prompt, toolOptions: { mode: 'branch', situation, choices }, target: { choice }, difficulty: d, ...more });
  const ES = (prompt, slots, cards, sort, d, more) => ({ prompt, toolOptions: { mode: 'sort', slots, cards, weather: false }, target: { sort }, difficulty: d, ...more });
  const EM = (prompt, slots, cards, match, d, more) => ({ prompt, toolOptions: { mode: 'match', slots, cards }, target: { match }, difficulty: d, ...more });
  const EP = (prompt, basket, cards, pick, d, more) => ({ prompt, toolOptions: { mode: 'pick', basket, cards, weather: false }, target: { pick }, difficulty: d, ...more });
  const SO = (prompt, title, slots, cards, order, d, more) => ({ prompt, toolOptions: { title, slots, cards }, target: { order }, difficulty: d, ...more });
  const SF = (prompt, slots, cards, fill, d, more) => ({ prompt, toolOptions: { mode: 'fill', slots, cards }, target: { fill }, difficulty: d, ...more });
  const KS = (prompt, slots, cards, sort, d, more) => ({ prompt, toolOptions: slots ? { slots, groups: false, cards } : { cards }, target: { sort }, difficulty: d, ...more });
  const KP = (prompt, basket, cards, pick, d, more) => ({ prompt, toolOptions: { mode: 'pick', basket, cards }, target: { pick }, difficulty: d, ...more });
  const KO = (prompt, cards, order, d, more) => ({ prompt, toolOptions: { mode: 'order', cards }, target: { order }, difficulty: d, ...more });
  const TO = (prompt, axis, cards, order, d, more) => ({ prompt, toolOptions: { axis, cards }, target: { order }, difficulty: d, ...more });
  const TS = (prompt, axis, slots, cards, sort, d, more) => ({ prompt, toolOptions: { mode: 'sort', axis, slots, cards }, target: { sort }, difficulty: d, ...more });
  const C = (id, text, motif) => ({ id, text, motif });
  const LV = { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } };
  const LVB = { easy: { showBack: true }, base: {}, challenge: {} };
  const ACT = (id, title, minutes, tool, teacher, task, items) => ({
    id, title, minutes, tool, teacher, task, items,
    levels: items.some((it) => it.toolOptions && it.toolOptions.mode === 'branch') ? LVB : LV,
  });
  // 출구: XT 교구, XC 고르기, XS 짧은 글, MOOD 마음
  const XT = (tool, options, prompt, target, d = 0.2) => ({ type: 'tool', tool, options, ...(options.mode === 'branch' ? {} : { state: { at: {} } }), prompt, target, difficulty: d });
  const XC = (prompt, options, answer, explain, d = 0.15) => ({ type: 'choice', prompt, options, answer, difficulty: d, explain });
  const XS = (prompt) => ({ type: 'short', prompt });
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  // 활동지
  const WT = (prompt, columns, cells, answer) => ({ type: 'table', prompt, columns, cells, answer });
  const WC = (prompt, options, answer) => ({ type: 'choice', prompt, options, answer });
  const WB = (prompt, text, answer) => ({ type: 'blank', prompt, text, answer });
  const WS = (prompt) => ({ type: 'short', prompt });
  const WD = (prompt) => ({ type: 'draw', prompt });
  const DIFF = {
    easy: '맞는 칸에 놓은 카드에 초록 테두리가 생기고, 갈림길 문항은 결과가 처음부터 보여요.',
    base: '모든 카드를 놓거나 보기를 고른 뒤 스스로 확인하고 고쳐요.',
    challenge: '카드 순서가 섞여 나오고, 그럴듯하지만 알맞지 않은 보기를 가려내요.',
  };
  // 도입 6 + 전개 27(활동 14+13) + 정리 7 = 40분
  const LESSON = (n, o) => Object.assign(base(n), {
    title: o.title, objective: o.objective,
    illustration: { prompt: PROMPT(o.draw), scene: SCENE(o.banner, o.extra || []) },
    stages: [
      { id: 'intro', title: '도입', minutes: 6, teacher: o.intro, student: o.student },
      { id: 'main', title: '전개', minutes: 27, activities: o.acts },
      { id: 'wrapup', title: '정리', minutes: 7, teacher: o.wrap, exitTicket: [...o.exit, MOOD] },
    ],
    worksheet: { title: o.wsTitle, items: o.ws }, differentiation: o.diff || DIFF, teacherNotes: o.notes,
  });
  PaperLessons.registerUnit({
    id: ID, schema: 'edu-unit.v1', catalogUnit: UNIT,
    grade: GRADE, subject: '창체', unitTitle: TITLE,
    flow: '2학년 영양·식생활 단원은 하루를 여는 아침밥과 몸에 좋은 간식을 고르고, 음식에 담긴 손길을 알아 아껴 먹는 습관을 기르는 2차시입니다. 1차시에는 아침밥이 하루를 시작할 힘을 준다는 것을 알고 아침에 먹기 좋은 음식과 자주 먹을 간식·가끔 먹을 간식을 나눕니다. 2차시에는 음식이 밭과 바다에서 가게와 부엌을 거쳐 식탁에 오기까지의 차례를 놓고, 먹을 만큼 담아 남기지 않는 방법을 익힙니다. 근거는 학교급식법 제13조와 식생활교육지원법 제26조(연 2회 이상)입니다. 1학년의 골고루 먹기·급식 예절을 이어 받으며, 보건교육과 연계해 운영할 수 있습니다(학교 결정).',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '아침밥 차리고 몸에 좋은 간식 고르기',
        objective: '아침밥이 필요한 까닭을 말하고, 자주 먹으면 좋은 간식과 가끔 먹을 간식을 나눌 수 있다.',
        draw: 'a paper breakfast table at sunrise with rice, egg, soup and fruit, and a small snack basket with milk, sweet potato and apple, a child stretching happily',
        banner: '아침밥은 하루의 힘', extra: [{ motif: 'flower', x: 300, y: 222, color: 'buttercup' }],
        intro: '"자동차가 달리려면 무엇이 필요할까요?" 대답을 듣고(기다릴 반응: "기름", "전기") "우리 몸도 아침에 힘을 채워야 공부하고 놀 수 있어요"라고 말한다. "배 안 고프면 안 먹어도 돼요"라는 반응에는 "점심까지 힘이 남아 있을까요?"라고 되묻는다. 학생에게 오늘 아침밥을 먹었는지 묻지 않는다.',
        student: '아침에 먹고 싶은 음식을 하나 떠올려 짝에게 말해 봐요.',
        acts: [
          ACT('a1', '활동 1. 아침밥과 간식 고르기', 14, 'kitchen',
            '"아침에 먹으면 힘이 날 음식은 무엇일까요?" 1번에서 사탕을 아침밥으로 고른 학생에게 "잠깐 달콤하지만 금방 배고파져요"라고 짚는다. 2번은 간식을 자주 먹을 것과 가끔 먹을 것으로 나누는 문항이다 — 과자를 "먹으면 안 되는 것"이 아니라 "가끔"으로 둔다는 점을 말한다. 3번은 목마를 때 고를 것이다.',
            '아침밥과 간식을 고르고 나누어요.', [
              KP('아침밥으로 먹으면 힘이 나는 음식만 골라 담아 보세요.', '아침밥', ['밥', '달걀', '사과', '사탕', '탄산음료'], ['밥', '달걀', '사과'], 0.15),
              KS('간식을 자주 먹을 것과 가끔 먹을 것으로 나누어 보세요.', ['자주 먹어요', '가끔 먹어요'], ['고구마', '우유', '바나나', '과자', '초콜릿', '단 음료'], { '자주 먹어요': ['고구마', '우유', '바나나'], '가끔 먹어요': ['과자', '초콜릿', '단 음료'] }, 0.2),
              KP('운동장에서 놀고 목이 말라요. 마실 것을 골라 담아 보세요.', '목마를 때', ['물', '우유', '탄산음료', '단 음료'], ['물', '우유'], 0.25,
                { conclude: '아침밥으로 힘을 채우고, 간식은 과일·우유처럼 몸에 좋은 것을 자주 골라요.' }),
            ]),
          ACT('a2', '활동 2. 이럴 때 어떻게 할까요', 13, 'emotion',
            '"어떤 길을 고르면 몸이 기뻐할까요?" 결과 칸을 읽게 한다. 1번은 늦잠 잔 아침 장면으로, 간단하게라도 먹는 길을 고른다. 2번은 학교 앞 가게에서 간식을 고르는 장면, 3번은 저녁 먹기 직전 과자를 먹고 싶은 장면이다.',
            '장면에서 어떻게 할지 고르고 결과를 봐요.', [
              EB('늦잠을 자서 시간이 없어요.', '준이가 늦잠을 잤어요. 식탁에 바나나와 우유가 있어요.', [
                { id: 'quick', text: '바나나와 우유를 먹어요', result: '준이가 오전 내내 힘차게 공부해요.', mood: '뿌듯함' },
                { id: 'skip', text: '아무것도 안 먹고 가요', result: '둘째 시간부터 배가 꼬르륵거려요.', mood: '짜증', why: '바쁠 때는 간단하게라도 먹어요.' },
              ], 'quick', 0.15),
              EB('학교 앞 가게에서 간식을 골라요.', '하나가 용돈으로 간식을 사려고 해요. 단 음료와 우유가 함께 보여요.', [
                { id: 'sweet', text: '날마다 단 음료를 사요', result: '이가 시큰하고 밥맛이 없어요.', mood: '걱정', why: '단 음료는 가끔만 마셔요.' },
                { id: 'milk', text: '우유를 골라요', result: '하나가 든든하게 놀이터에서 놀아요.', mood: '기쁨' },
              ], 'milk', 0.2),
              EB('저녁 먹기 바로 전에 과자가 먹고 싶어요.', '린이 배가 고파요. 곧 저녁을 먹을 시간인데 과자가 보여요.', [
                { id: 'wait', text: '조금 참고 저녁을 먹어요', result: '저녁밥을 맛있게 다 먹어요.', mood: '편안함' },
                { id: 'eat', text: '과자 한 봉지를 다 먹어요', result: '배가 불러 저녁을 거의 못 먹어요.', mood: '속상함', why: '밥 먹기 전에는 간식을 참아요.' },
              ], 'wait', 0.25, { conclude: '아침은 꼭, 간식은 알맞게, 밥 먹기 전에는 참아요.' }),
            ]),
        ],
        wrap: '"내일 아침에 먹고 싶은 음식과 오늘 고를 간식을 말해 볼까요?" 출구 1번에서 단 음료를 자주 먹을 것에 둔 학생과 다시 나눈다. 2번은 아침밥이 하루의 힘이라는 점으로 정리한다.',
        exit: [
          XT('kitchen', { slots: ['자주 먹어요', '가끔 먹어요'], groups: false, cards: ['귤', '요구르트', '사탕', '탄산음료'] }, '간식을 자주 먹을 것과 가끔 먹을 것으로 나누어 보세요.', { sort: { '자주 먹어요': ['귤', '요구르트'], '가끔 먹어요': ['사탕', '탄산음료'] } }, 0.15),
          XC('아침밥을 먹으면 무엇이 좋을까요?', ['하루를 시작할 힘이 생겨요', '잠이 더 와요', '점심을 안 먹어도 돼요'], 0, '아침밥은 오전에 공부하고 놀 힘을 줘요.'),
          XS('내가 자주 먹고 싶은 몸에 좋은 간식을 쓰세요.'),
        ],
        wsTitle: '아침밥과 간식',
        ws: [
          WT('간식을 자주 먹으면 ○, 가끔 먹으면 △를 쓰세요.', ['간식', '○ / △'], [['고구마', ''], ['과자', ''], ['우유', ''], ['단 음료', '']], '○, △, ○, △'),
          WC('늦잠 잔 아침에 하면 좋은 일에 ○ 하세요.', ['굶고 가요', '바나나라도 먹어요', '사탕만 먹어요'], '바나나라도 먹어요'),
          WB('빈칸에 알맞은 말을 쓰세요.', '___은 하루를 시작할 힘을 줘요.', '아침밥'),
          WD('내가 차리고 싶은 아침 밥상을 그려 보세요.'),
        ],
        notes: '자주 보이는 어려움: ① 과자·단 음료를 "나쁜 음식"으로만 여기거나 반대로 아무렇지 않게 여긴다 → "가끔 알맞게"로 구별하게 한다. ② 아침을 못 먹는 사정이 있는 학생이 있을 수 있다 → 누가 먹었는지 묻거나 견주지 않고, 간단한 아침 방법을 함께 찾는다.',
      }),

      LESSON(2, {
        title: '밭에서 식탁까지 음식의 여행 따라가기',
        objective: '음식이 식탁에 오기까지 여러 사람의 손길이 있음을 알고, 먹을 만큼 담아 남기지 않을 수 있다.',
        draw: 'a paper path from a green rice field and a fishing boat to a market stall, a kitchen, and finally a family dinner table, with small people helping along the way',
        banner: '고마운 음식의 여행', extra: [{ motif: 'star', x: 300, y: 96, color: 'rose' }],
        intro: '"오늘 먹은 밥은 어디에서 왔을까요?" 대답을 듣고(기다릴 반응: "부엌", "급식실") "그 쌀은 처음에 어디에 있었을까요?"라고 다시 묻는다. 논에서 기르는 분, 옮기는 분, 파는 분, 요리하는 분을 떠올리게 한다. "가게에서 사면 그만이에요"라는 반응에는 "가게에 오기 전에는 누가 있었을까요?"라고 되묻는다.',
        student: '내가 좋아하는 음식이 어디에서 오는지 짝과 함께 떠올려 봐요.',
        acts: [
          ACT('a1', '활동 1. 음식의 여행 차례', 14, 'story',
            '"쌀은 어떤 길을 거쳐 밥이 될까요?" 1번에서 차례를 놓으며 각 단계에서 일하는 분을 말하게 한다. 2번은 생선이 바다에서 식탁에 오는 차례다. 3번 말풍선은 음식을 만들어 주신 분께 할 감사의 말이다.',
            '음식이 식탁에 오는 차례를 놓고 감사 말풍선을 채워요.', [
              SO('쌀이 밥이 되어 식탁에 오는 차례대로 놓아 보세요.', '쌀의 여행', ['먼저', '다음', '그다음', '마지막'], [C('k1', '논에서 벼를 길러요', 'leaf'), C('k2', '가게로 옮겨요', 'house'), C('k3', '부엌에서 밥을 지어요', 'sun'), C('k4', '식탁에서 먹어요', 'flower')], ['k1', 'k2', 'k3', 'k4'], 0.15),
              SO('생선이 식탁에 오는 차례대로 놓아 보세요.', '생선의 여행', ['먼저', '다음', '마지막'], [C('t1', '바다에서 잡아요', 'cloud'), C('t2', '시장에서 팔아요', 'house'), C('t3', '구워서 상에 올려요', 'sun')], ['t1', 't2', 't3'], 0.2),
              SF('하나가 할 감사의 말을 채워 보세요.', [{ id: 'b1', who: '하나', motif: 'flower', label: '급식 선생님께 "___"' }, { id: 'b2', who: '하나', motif: 'leaf', label: '농부께 "___"' }], ['맛있게 먹을게요', '길러 주셔서 고마워요', '이거 싫어요', '많이 주세요'], { b1: '맛있게 먹을게요', b2: '길러 주셔서 고마워요' }, 0.25,
                { conclude: '음식 한 그릇에는 많은 사람의 손길이 담겨 있어요.' }),
            ]),
          ACT('a2', '활동 2. 먹을 만큼 담기', 13, 'kitchen',
            '"음식을 남기지 않으려면 처음에 어떻게 담아야 할까요?" 1번은 음식을 아끼는 행동에만 표시하는 문항이다. 2번은 배가 조금 고플 때 알맞게 담는 양을 고른다 — 모자라면 더 받을 수 있다는 점을 짚는다. 3번은 남은 음식을 다시 쓰는 차례다.',
            '음식을 아끼는 행동을 점검하고 알맞게 골라요.', [
              { prompt: '음식을 아끼는 행동에만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '음식 아끼기', items: [{ id: 'small', text: '먹을 만큼 담아요' }, { id: 'more', text: '모자라면 더 받아요' }, { id: 'waste', text: '많이 담고 남겨요' }, { id: 'taste', text: '한 입씩 맛봐요' }, { id: 'throw', text: '싫은 반찬은 바로 버려요' }] }, target: { checklist: ['small', 'more', 'taste'] }, difficulty: 0.15 },
              KP('배가 조금 고파요. 알맞게 담는 방법만 골라 담아 보세요.', '알맞게 담기', ['밥은 조금 먼저', '반찬은 골고루 조금씩', '산처럼 가득', '좋아하는 것만 잔뜩'], ['밥은 조금 먼저', '반찬은 골고루 조금씩'], 0.2),
              KO('집에서 남은 밥을 아껴 먹는 차례대로 놓아 보세요.', ['남은 밥 덜어 두기', '뚜껑 덮어 넣기', '다음 끼니에 데우기', '맛있게 먹기'], ['남은 밥 덜어 두기', '뚜껑 덮어 넣기', '다음 끼니에 데우기', '맛있게 먹기'], 0.25,
                { conclude: '먹을 만큼 담고, 모자라면 더 받아요. 음식을 아끼면 손길에 보답해요.' }),
            ]),
        ],
        wrap: '"오늘 급식에서 먹을 만큼 담기를 해 볼까요?" 출구 1번에서 차례를 바꾼 학생과 함께 쌀의 여행을 다시 따라간다. 2번은 먹을 만큼 담고 모자라면 더 받는 방법으로 정리한다.',
        exit: [
          XT('story', { title: '사과의 여행', slots: ['먼저', '다음', '마지막'], cards: [C('x1', '과수원에서 길러요', 'tree'), C('x2', '가게에서 팔아요', 'house'), C('x3', '집에서 먹어요', 'flower')] }, '사과가 식탁에 오는 차례를 놓아 보세요.', { order: ['x1', 'x2', 'x3'] }, 0.15),
          XC('음식을 남기지 않으려면 어떻게 담을까요?', ['산처럼 가득', '먹을 만큼 담고 모자라면 더', '좋아하는 것만'], 1, '먹을 만큼 담고 모자라면 더 받아요.'),
          XS('음식을 길러 주신 분께 감사 인사를 쓰세요.'),
        ],
        wsTitle: '음식의 여행',
        ws: [
          WT('쌀이 밥이 되는 차례에 1, 2, 3, 4를 쓰세요.', ['일', '차례'], [['가게로 옮겨요', ''], ['식탁에서 먹어요', ''], ['논에서 벼를 길러요', ''], ['부엌에서 밥을 지어요', '']], '2, 4, 1, 3'),
          WC('음식을 아끼는 행동에 ○ 하세요.', ['많이 담고 남겨요', '먹을 만큼 담아요', '바로 버려요'], '먹을 만큼 담아요'),
          WB('빈칸에 알맞은 말을 쓰세요.', '음식 한 그릇에는 많은 사람의 ___이 담겨 있어요.', '손길'),
          WD('내가 좋아하는 음식이 식탁에 오는 길을 그려 보세요.'),
        ],
        notes: '자주 보이는 어려움: ① 음식은 가게에서 생긴다고 여긴다 → 기르고 옮기고 요리하는 사람을 차례로 짚는다. ② "남기지 않기"를 억지로 다 먹기로 여긴다 → 처음부터 먹을 만큼 담는 것이 먼저라고 말한다. 먹는 양이나 속도로 학생을 견주지 않는다.',
      }),
    ],
  });
})();
