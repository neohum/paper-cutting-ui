/* 1학년 창체 법정교육 — 영양·식생활 (2차시).
 * 근거: 학교급식법 제13조(식생활 지도), 식생활교육지원법 제26조, 연 2회 이상(research-mandatory.md 표).
 * 1학년 범위: 여러 가지 음식을 골고루 먹기(밥·고기·생선·달걀·채소·과일·우유를 쉬운 묶음으로), 급식 시간 예절과 감사.
 * 영양 수치는 쓰지 않는다. 손 씻기 차례는 생활안전·응급처치 단원이 다루므로 급식 예절의 한 단계로만 짚는다.
 * 알레르기·종교·건강 때문에 못 먹는 음식이 있을 수 있음을 존중한다. 장면·인물은 지은 것이다(가명 한 글자). */
(function () {
  const ID = 'g1-cc-food', GRADE = 1, TITLE = '영양·식생활';
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
    flow: '1학년 영양·식생활 단원은 급식을 처음 먹는 1학년이 여러 가지 음식을 골고루 먹고 바른 예절로 즐겁게 먹는 습관을 세우는 2차시입니다. 1차시에는 밥·빵, 고기·생선·달걀, 채소, 과일, 우유 묶음으로 음식을 나누어 골고루 담은 식판을 꾸미고, 싫어하는 음식에 한 입 도전하는 말을 익힙니다. 2차시에는 급식 받기부터 정리까지의 차례와 감사 인사, 먹을 만큼 받아 남기지 않는 약속을 익힙니다. 근거는 학교급식법 제13조와 식생활교육지원법 제26조(연 2회 이상)입니다. 알레르기 등으로 못 먹는 음식이 있는 친구를 존중하도록 짚으며, 보건교육과 연계해 운영할 수 있습니다(학교 결정).',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '내 식판에 여러 가지 음식 골고루 담기',
        objective: '음식을 몇 가지 묶음으로 나누고, 여러 묶음의 음식을 골고루 먹어야 함을 말할 수 있다.',
        draw: 'a paper school lunch tray filled with rice, soup, fish, spinach, an apple and a carton of milk, with a smiling child holding a spoon',
        banner: '골고루 먹어요', extra: [{ motif: 'flower', x: 300, y: 222, color: 'buttercup' }],
        intro: '"오늘 급식에 어떤 음식이 나왔나요?" 두세 명의 대답을 듣고 "음식마다 우리 몸에서 하는 일이 달라서 골고루 먹어야 해요"라고 말한다. "좋아하는 것만 많이 먹으면 돼요"라는 반응에는 "자동차도 여러 부품이 있어야 잘 굴러가요"라고 비유한다.',
        student: '내가 좋아하는 음식과 조금 싫은 음식을 하나씩 떠올려 봐요.',
        acts: [
          ACT('a1', '활동 1. 음식 묶음으로 나누기', 14, 'kitchen',
            '"달걀은 어느 묶음에 들어갈까요?" 1번에서 묶음 이름을 함께 읽고 카드를 놓게 한다. 2번은 빠진 묶음을 찾아 채우는 문항이다 — 채소가 빠진 식판에서 무엇을 더하면 좋을지 묻는다. 3번은 간식도 여러 가지를 고를 수 있다는 점을 말한다.',
            '음식을 묶음으로 나누고 빠진 음식을 채워요.', [
              KS('음식을 알맞은 묶음에 나누어 보세요.', ['밥·빵', '고기·생선·달걀', '채소', '과일', '우유'], ['밥', '생선', '시금치', '사과', '우유'], { '밥·빵': ['밥'], '고기·생선·달걀': ['생선'], '채소': ['시금치'], '과일': ['사과'], '우유': ['우유'] }, 0.15),
              KS('음식을 알맞은 묶음에 나누어 보세요.', ['밥·빵', '고기·생선·달걀', '채소', '과일', '우유'], ['빵', '달걀', '당근', '귤', '치즈'], { '밥·빵': ['빵'], '고기·생선·달걀': ['달걀'], '채소': ['당근'], '과일': ['귤'], '우유': ['치즈'] }, 0.2),
              KP('준이 식판에 밥·고기·우유만 있어요. 채소와 과일을 골라 담아 보세요.', '더 담을 음식', ['오이', '딸기', '설탕', '버터'], ['오이', '딸기'], 0.25,
                { conclude: '여러 묶음의 음식을 골고루 먹으면 몸이 튼튼해져요.' }),
            ]),
          ACT('a2', '활동 2. 싫어하는 음식에 한 입 도전', 13, 'story',
            '"싫어하는 음식이 나오면 어떻게 할까요?" 1번은 한 입 도전하는 차례다. 2번 말풍선에서 "맛없어!" 대신 할 말을 고른다. 3번은 알레르기 때문에 못 먹는 친구 장면이다 — "편식이야"라고 놀리지 않고 존중한다는 점을 짚는다.',
            '한 입 도전하는 차례를 놓고 말풍선을 채워요.', [
              SO('싫어하는 음식에 도전하는 차례대로 놓아 보세요.', '한 입 도전', ['먼저', '다음', '마지막'], [C('k1', '색과 냄새를 살펴요', 'leaf'), C('k2', '작게 한 입 먹어요', 'star'), C('k3', '꼭꼭 씹어 맛봐요', 'sun')], ['k1', 'k2', 'k3'], 0.15),
              SF('하나가 할 말을 채워 보세요.', [{ id: 'b1', who: '하나', motif: 'leaf', label: '처음 보는 반찬에 "___"' }, { id: 'b2', who: '하나', motif: 'star', label: '먹어 본 뒤 "___"' }], ['한 입 먹어 볼게', '생각보다 괜찮네', '으, 맛없어', '안 먹을래'], { b1: '한 입 먹어 볼게', b2: '생각보다 괜찮네' }, 0.2),
              SF('땅콩을 못 먹는 친구에게 할 말을 채워 보세요.', [{ id: 'c1', who: '린', motif: 'flower', label: '친구가 땅콩을 빼면 "___"' }, { id: 'c2', who: '린', motif: 'house', label: '간식을 나눌 때 "___"' }], ['그렇구나, 괜찮아', '이건 땅콩 없어', '편식쟁이!', '한 번만 먹어 봐'], { c1: '그렇구나, 괜찮아', c2: '이건 땅콩 없어' }, 0.25,
                { conclude: '싫은 음식은 한 입 도전하고, 못 먹는 친구는 존중해요.' }),
            ]),
        ],
        wrap: '"오늘 급식에서 한 입 도전해 볼 음식은 무엇인가요?" 출구 1번에서 묶음을 헷갈린 학생과 함께 카드를 다시 본다. 2번은 못 먹는 친구를 존중하는 점으로 정리한다.',
        exit: [
          XT('kitchen', { slots: ['밥·빵', '채소', '과일'], groups: false, cards: ['국수', '오이', '바나나'] }, '음식을 알맞은 묶음에 나누어 보세요.', { sort: { '밥·빵': ['국수'], '채소': ['오이'], '과일': ['바나나'] } }, 0.15),
          XC('알레르기 때문에 음식을 못 먹는 친구에게 어떻게 할까요?', ['"편식쟁이" 놀려요', '억지로 먹여요', '"괜찮아" 하고 존중해요'], 2, '몸에 맞지 않는 음식은 먹지 않아도 돼요.'),
          XS('한 입 도전해 보고 싶은 음식을 쓰세요.'),
        ],
        wsTitle: '골고루 먹어요',
        ws: [
          WT('음식이 들어갈 묶음을 쓰세요.', ['음식', '묶음'], [['밥', ''], ['달걀', ''], ['시금치', ''], ['사과', '']], '밥·빵 / 고기·생선·달걀 / 채소 / 과일'),
          WC('채소가 빠진 식판에 더 담을 음식에 ○ 하세요.', ['설탕', '오이', '버터'], '오이'),
          WB('빈칸에 알맞은 말을 쓰세요.', '여러 가지 음식을 ___ 먹으면 몸이 튼튼해져요.', '골고루'),
          WD('여러 가지 음식을 골고루 담은 내 식판을 그려 보세요.'),
        ],
        notes: '자주 보이는 어려움: ① 좋아하는 음식만 먹어도 된다고 여긴다 → 음식마다 하는 일이 다르다는 점을 짚는다. ② 못 먹는 친구를 편식한다고 놀린다 → 알레르기처럼 몸에 맞지 않는 음식이 있다는 점을 알린다. 학생의 체중이나 먹는 양을 견주지 않는다.',
      }),

      LESSON(2, {
        title: '급식 받기부터 정리까지 바른 예절 지키기',
        objective: '급식 시간의 차례와 예절을 알고, 감사하는 마음으로 먹을 만큼 받아 먹을 수 있다.',
        draw: 'paper children lining up with lunch trays in a school cafeteria, a cook smiling behind the counter, and a child bowing with folded hands',
        banner: '잘 먹겠습니다!', extra: [{ motif: 'star', x: 300, y: 96, color: 'rose' }],
        intro: '"급식을 먹기 전에 무슨 인사를 하나요?" 대답을 듣고(기다릴 반응: "잘 먹겠습니다") "이 인사는 누구에게 하는 걸까요?"라고 묻는다. 음식을 만들어 주신 분, 재료를 길러 주신 분을 떠올리게 한다. "남기면 버리면 돼요"라는 반응에는 "버려진 음식은 어디로 갈까요?"라고 되묻는다.',
        student: '급식 시간에 내가 잘 지키는 예절을 짝에게 하나 말해 봐요.',
        acts: [
          ACT('a1', '활동 1. 급식 시간 차례 놓기', 14, 'story',
            '"급식 시간에 무엇부터 할까요?" 1번에서 손 씻기를 맨 앞에 두는 까닭을 묻는다. 2번은 먹는 동안의 예절 차례다 — 꼭꼭 씹고, 입에 음식이 있을 때는 말하지 않는다는 점을 짚는다. 3번 말풍선은 감사 인사를 함께 소리 내어 읽는다.',
            '급식 시간 차례를 놓고 인사 말풍선을 채워요.', [
              SO('급식 시간 차례대로 놓아 보세요.', '급식 시간', ['먼저', '다음', '그다음', '마지막'], [C('k1', '손을 씻어요', 'leaf'), C('k2', '줄 서서 받아요', 'house'), C('k3', '"잘 먹겠습니다"', 'sun'), C('k4', '식판을 정리해요', 'star')], ['k1', 'k2', 'k3', 'k4'], 0.15),
              SO('먹는 동안 지킬 일을 차례대로 놓아 보세요.', '맛있게 먹어요', ['먼저', '다음', '마지막'], [C('t1', '바르게 앉아요', 'tree'), C('t2', '꼭꼭 씹어 먹어요', 'flower'), C('t3', '다 삼키고 말해요', 'leaf')], ['t1', 't2', 't3'], 0.2),
              SF('감사 인사를 채워 보세요.', [{ id: 'b1', who: '준', motif: 'sun', label: '먹기 전에 "___"' }, { id: 'b2', who: '준', motif: 'flower', label: '다 먹고 나서 "___"' }], ['잘 먹겠습니다', '잘 먹었습니다', '빨리 줘요', '이거 싫어'], { b1: '잘 먹겠습니다', b2: '잘 먹었습니다' }, 0.25,
                { conclude: '감사 인사로 시작하고 감사 인사로 마쳐요.' }),
            ]),
          ACT('a2', '활동 2. 급식 예절 점검하기', 13, 'kitchen',
            '"오늘 급식 시간에 한 일에 표시해 볼까요?" 1번은 바른 예절만 표시하는 문항이다 — "음식으로 장난쳐요"에 표시한 학생에게 까닭을 묻는다. 2번은 남기지 않기 위해 할 일을 고른다. 3번은 정리 차례다.',
            '급식 예절을 점검하고 정리 차례를 놓아요.', [
              { prompt: '급식 시간 바른 예절에만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '급식 예절', items: [{ id: 'line', text: '줄을 서서 차례를 지켜요' }, { id: 'chew', text: '꼭꼭 씹어 먹어요' }, { id: 'play', text: '음식으로 장난쳐요' }, { id: 'thanks', text: '감사 인사를 해요' }, { id: 'run', text: '식판 들고 뛰어요' }] }, target: { checklist: ['line', 'chew', 'thanks'] }, difficulty: 0.15 },
              KP('음식을 남기지 않으려면 어떻게 할까요? 알맞은 것만 골라 담아 보세요.', '남기지 않기', ['먹을 만큼 받아요', '한 입씩 맛봐요', '많이 받고 버려요', '반찬을 바닥에 둬요'], ['먹을 만큼 받아요', '한 입씩 맛봐요'], 0.2),
              KO('다 먹은 식판을 정리하는 차례대로 놓아 보세요.', ['남은 음식 모으기', '수저 넣기', '식판 놓기', '입 닦기'], ['남은 음식 모으기', '수저 넣기', '식판 놓기', '입 닦기'], 0.25,
                { conclude: '먹을 만큼 받고, 깨끗이 정리하면 모두 기분 좋은 급식 시간이 돼요.' }),
            ]),
        ],
        wrap: '"오늘 급식 시간에 꼭 지킬 예절 하나를 정해 볼까요?" 출구 1번에서 차례를 바꾼 학생과 함께 손 씻기부터 다시 본다. 2번은 먹을 만큼 받는 약속으로 정리한다.',
        exit: [
          XT('story', { title: '급식 시간', slots: ['먼저', '다음', '마지막'], cards: [C('x1', '손을 씻어요', 'leaf'), C('x2', '"잘 먹겠습니다"', 'sun'), C('x3', '"잘 먹었습니다"', 'flower')] }, '급식 시간 차례를 놓아 보세요.', { order: ['x1', 'x2', 'x3'] }, 0.15),
          XC('음식을 남기지 않으려면 어떻게 할까요?', ['많이 받아요', '먹을 만큼 받아요', '친구에게 줘요'], 1, '먹을 만큼 받으면 버리는 음식이 줄어요.'),
          XS('급식을 만들어 주신 분께 하고 싶은 말을 쓰세요.'),
        ],
        wsTitle: '급식 예절',
        ws: [
          WT('급식 시간 차례에 1, 2, 3, 4를 쓰세요.', ['할 일', '차례'], [['줄 서서 받아요', ''], ['식판을 정리해요', ''], ['손을 씻어요', ''], ['"잘 먹겠습니다"', '']], '2, 4, 1, 3'),
          WC('바른 급식 예절에 ○ 하세요.', ['식판 들고 뛰어요', '꼭꼭 씹어 먹어요', '음식으로 장난쳐요'], '꼭꼭 씹어 먹어요'),
          WB('빈칸에 알맞은 말을 쓰세요.', '음식을 남기지 않으려면 먹을 ___ 받아요.', '만큼'),
          WS('급식을 만들어 주신 분께 감사 편지를 한 줄 쓰세요.'),
        ],
        notes: '자주 보이는 어려움: ① "다 먹어야 해요"를 억지로 먹는 것으로 여긴다 → 먹을 만큼 받는 것이 먼저라고 짚는다. ② 감사 인사를 습관처럼 말한다 → 음식이 오기까지 애쓴 분들을 떠올리게 한다. 먹는 속도나 양으로 학생을 견주지 않는다.',
      }),
    ],
  });
})();
