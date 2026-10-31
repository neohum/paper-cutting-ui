/* 1학년 창체 법정교육 — 다문화 이해 (2차시).
 * 근거: 다문화가족지원법 제5조·같은 법 시행령 제10조의2, 교육부 지침 연 2시간(research-mandatory.md 표).
 * 1학년 범위: 여러 말의 인사, 인사 방법, 먹는 음식·쓰는 말·생김새가 달라도 모두 친구라는 생각. 나라 이름보다 '말'을 앞세워
 * 특정 나라 사람을 한 가지 모습으로 묶지 않는다. 가족 모습은 성평등 단원(g1-cc-gender '여러 가지 모습의 가족')이 다루므로 여기서는 다루지 않는다.
 * 장면·인물은 지은 것이다(가명 한 글자). 반의 다문화 가정 학생을 지목해 예로 들지 않는다. */
(function () {
  const ID = 'g1-cc-multi', GRADE = 1, TITLE = '다문화 이해';
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
    { motif: 'house', x: 96, y: 214, color: 'buttercup', s: 0.9 }, { motif: 'tree', x: 380, y: 214 }, ...extra,
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
    flow: '1학년 다문화 이해 단원은 세계 여러 말의 인사를 따라 하며 반가운 마음은 같다는 것을 느끼고, 먹는 음식·쓰는 말·생김새가 달라도 모두 친구라는 생각을 세우는 2차시입니다. 1차시에는 영어·중국어·일본어·베트남어 인사말을 말과 잇고 새로 온 친구를 반기는 차례를 익힙니다. 2차시에는 "이상해" 같은 말 대신 "신기하다, 알려 줘" 같은 존중하는 말을 고르고, 크레파스 색 이름처럼 생활 속 말을 함께 살핍니다. 근거는 다문화가족지원법 제5조·같은 법 시행령 제10조의2와 교육부 지침 연 2시간입니다. 가족의 여러 모습은 성평등교육(gender) 단원이 다루며, 학교폭력 예방(bully) 단원의 고운 말과 연계해 운영할 수 있습니다(학교 결정).',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '여러 나라 말로 반갑게 인사하기',
        objective: '여러 말의 인사말을 알고, 새로 온 친구를 반갑게 맞이하는 차례를 말할 수 있다.',
        draw: 'paper children from around the world waving and bowing to each other in a circle, with colorful speech bubbles and a soft sun',
        banner: '안녕! 반가워!', extra: [{ motif: 'flower', x: 300, y: 222, color: 'buttercup' }],
        intro: '"아침에 친구를 만나면 뭐라고 인사하나요?" 대답을 듣고(기다릴 반응: "안녕") "다른 말을 쓰는 친구들은 어떻게 인사할까요?"라고 묻는다. "우리말만 진짜 인사예요"라는 반응에는 "말은 달라도 반가운 마음은 같아요"라고 짚는다.',
        student: '내가 아는 인사말을 짝에게 해 봐요.',
        acts: [
          ACT('a1', '활동 1. 인사말과 말 잇기', 14, 'mindmap',
            '"Hello는 어느 말의 인사일까요?" 함께 소리 내어 따라 하게 한다. 1번에서 말과 인사말을 이을 때 발음을 놀리지 않도록 "따라 하기 어려워도 괜찮아요"라고 말한다. 2번은 고개 숙이기·손 흔들기·악수처럼 인사하는 몸짓도 여러 가지라는 점을 짚는다. 3번은 반가운 마음이 같다는 점으로 묶는다.',
            '여러 말의 인사말을 알고 이어요.', [
              MM('말과 그 말의 인사를 이어 보세요. 맞지 않는 카드는 남겨요.', '여러 말 인사', [{ id: 'l1', label: '영어' }, { id: 'l2', label: '중국어' }, { id: 'l3', label: '일본어' }, { id: 'l4', label: '베트남어' }], ['Hello(헬로)', '니하오', '곤니치와', '신짜오', '잘 자'], { l1: 'Hello(헬로)', l2: '니하오', l3: '곤니치와', l4: '신짜오' }, 0.2),
              MP('인사할 때 하는 몸짓만 골라 담아 보세요.', '인사 몸짓', ['고개 숙여요', '손을 흔들어요', '악수해요', '등을 돌려요'], ['고개 숙여요', '손을 흔들어요', '악수해요'], 0.15),
              MS('인사를 받은 마음으로 나누어 보세요.', '인사를 받으면', ['반가워요', '속상해요'], ['"안녕!" 들었어요', '"니하오!" 들었어요', '못 본 척했어요', '"신짜오!" 들었어요'], { '반가워요': ['"안녕!" 들었어요', '"니하오!" 들었어요', '"신짜오!" 들었어요'], '속상해요': ['못 본 척했어요'] }, 0.2,
                { conclude: '인사말은 달라도 반가운 마음은 같아요.' }),
            ]),
          ACT('a2', '활동 2. 새로 온 친구 반기기', 13, 'story',
            '"우리 반에 새 친구가 오면 무엇부터 할까요?" 1번에서 이름 묻기를 먼저 두어도 되는지 물으면 인사가 먼저라는 점을 짚는다. 2번 말풍선은 짝과 주고받게 한다. 3번은 우리말이 서툰 친구에게 천천히 말하고 몸짓으로 알려 주는 차례다.',
            '새 친구를 반기는 차례를 놓고 말풍선을 채워요.', [
              SO('새로 온 친구를 반기는 차례대로 놓아 보세요.', '새 친구가 왔어요', ['먼저', '다음', '마지막'], [C('k1', '반갑게 인사해요', 'sun'), C('k2', '이름을 물어요', 'leaf'), C('k3', '"같이 놀자" 해요', 'flower')], ['k1', 'k2', 'k3'], 0.15),
              SF('새 친구 린에게 할 말을 채워 보세요.', [{ id: 'b1', who: '준', motif: 'sun', label: '처음 만나서 "___"' }, { id: 'b2', who: '준', motif: 'flower', label: '쉬는 시간에 "___"' }], ['반가워!', '같이 놀자', '저리 가', '말이 이상해'], { b1: '반가워!', b2: '같이 놀자' }, 0.2),
              SO('우리말이 서툰 친구에게 알려 주는 차례대로 놓아 보세요.', '화장실을 알려 줘요', ['먼저', '다음', '마지막'], [C('t1', '천천히 말해요', 'leaf'), C('t2', '손으로 가리켜요', 'star'), C('t3', '함께 가 줘요', 'house')], ['t1', 't2', 't3'], 0.25,
                { conclude: '천천히, 몸짓으로, 함께하면 말이 달라도 통해요.' }),
            ]),
        ],
        wrap: '"오늘 배운 인사말 가운데 하나로 짝에게 인사해 볼까요?" 출구 1번에서 인사말을 잘못 이은 학생과 함께 다시 소리 내어 읽는다. 2번은 말이 달라도 반가운 마음은 같다는 점으로 정리한다.',
        exit: [
          XT('mindmap', { mode: 'match', topic: '인사말', slots: [{ id: 'x1', label: '중국어' }, { id: 'x2', label: '베트남어' }], cards: ['니하오', '신짜오', '안녕히 가'] }, '말과 인사말을 이어 보세요.', { match: { x1: '니하오', x2: '신짜오' } }, 0.15),
          XC('말이 다른 친구의 인사를 들으면 어떤 마음일까요?', ['반가운 마음은 같아요', '이상한 인사예요', '대답하지 않아요'], 0, '인사말은 달라도 반가운 마음은 같아요.'),
          XS('새로 온 친구에게 해 주고 싶은 말을 쓰세요.'),
        ],
        wsTitle: '여러 말 인사',
        ws: [
          WT('말과 인사말을 짝지어 쓰세요.', ['말', '인사말'], [['영어', ''], ['중국어', ''], ['일본어', ''], ['베트남어', '']], 'Hello(헬로) / 니하오 / 곤니치와 / 신짜오'),
          WC('인사할 때 하는 몸짓이 아닌 것에 ○ 하세요.', ['손 흔들기', '등 돌리기', '고개 숙이기'], '등 돌리기'),
          WB('빈칸에 알맞은 말을 쓰세요.', '인사말은 달라도 ___ 마음은 같아요.', '반가운'),
          WD('새 친구와 인사하는 모습을 그려 보세요.'),
        ],
        notes: '자주 보이는 어려움: ① 낯선 발음을 우스워한다 → 우리말도 다른 나라 친구에게는 낯설게 들린다는 점을 짚는다. ② 한 말을 쓰는 사람은 모두 같은 모습이라고 여긴다 → 같은 말을 써도 사람마다 다르다고 말한다. 반의 다문화 가정 학생에게 시범을 시키거나 지목하지 않는다.',
      }),

      LESSON(2, {
        title: '"이상해" 대신 "신기하다, 알려 줘" 말하기',
        objective: '먹는 음식·쓰는 말·생김새가 달라도 모두 친구임을 알고, 존중하는 말을 고를 수 있다.',
        draw: 'paper children sharing different lunchboxes at a picnic mat, each box with different colorful food, smiling together',
        banner: '달라도 우리는 친구', extra: [{ motif: 'star', x: 300, y: 96, color: 'rose' }],
        intro: '"친구와 나는 좋아하는 음식이 똑같나요?" 두세 명의 대답을 듣고 "다른 것은 틀린 것이 아니에요"라고 칠판에 쓴다. "나와 다르면 이상해요"라는 반응에는 "친구 눈에는 내가 다르게 보일 수도 있어요"라고 되묻는다.',
        student: '나와 짝이 다른 점을 하나 찾아 말해 봐요.',
        acts: [
          ACT('a1', '활동 1. 존중하는 말과 아픈 말', 14, 'emotion',
            '"이 말을 들은 친구는 어떤 마음일까요?" 1번에서 "냄새 이상해"를 장난으로 여기는 학생에게 듣는 친구의 마음 날씨를 떠올리게 한다. 2번은 궁금할 때 묻는 말을 고른다. 3번은 장면과 마음을 이으며 같은 말이라도 듣는 친구의 마음이 기준이라는 점을 말한다.',
            '말을 존중하는 말과 아픈 말로 나누고 마음을 이어요.', [
              ES('말을 존중하는 말과 아픈 말로 나누어 보세요.', ['존중하는 말', '아픈 말'], ['"신기하다, 알려 줘"', '"냄새 이상해"', '"나도 먹어 봐도 돼?"', '"말이 웃겨"'], { '존중하는 말': ['"신기하다, 알려 줘"', '"나도 먹어 봐도 돼?"'], '아픈 말': ['"냄새 이상해"', '"말이 웃겨"'] }, 0.15),
              EP('친구의 처음 보는 반찬이 궁금해요. 할 말만 골라 담아 보세요.', '궁금할 때 할 말', ['"이건 무슨 반찬이야?"', '"맛이 어때?"', '"이상한 거 먹네"', '"저리 치워"'], ['"이건 무슨 반찬이야?"', '"맛이 어때?"'], 0.2),
              EM('들은 말과 친구의 마음을 이어 보세요. 맞지 않는 카드는 남겨요.', [{ id: 's1', label: '"네 나라 인사 알려 줘!"' }, { id: 's2', label: '"너는 왜 생김새가 달라?"' }, { id: 's3', label: '"같이 그림 그리자."' }], ['기쁨', '속상함', '편안함', '화남'], { s1: '기쁨', s2: '속상함', s3: '편안함' }, 0.25,
                { conclude: '궁금하면 놀리지 말고 "알려 줘" 하고 물어요.' }),
            ]),
          ACT('a2', '활동 2. 이럴 때 어떻게 할까요', 13, 'emotion',
            '"어떤 길을 고르면 모두 웃을까요?" 결과 칸을 읽게 한다. 1번은 우리말이 서툰 친구를 기다려 주는 장면이다. 2번은 크레파스 색 이름 장면이다 — 사람의 피부색은 여러 가지라서 이 색을 "살구색"이라고 부른다고 알려 준다. 3번은 놀이에서 빼는 친구를 보았을 때 함께하자고 말하는 길이다.',
            '장면에서 어떻게 할지 고르고 결과를 봐요.', [
              EB('우리말이 서툰 린이 발표를 천천히 해요.', '린이 앞에 나와 천천히 발표해요. 몇몇 친구가 킥킥 웃어요.', [
                { id: 'wait', text: '조용히 끝까지 들어요', result: '린이 발표를 마치고 웃어요.', mood: '뿌듯함' },
                { id: 'laugh', text: '같이 킥킥 웃어요', result: '린이 고개를 숙이고 말을 멈춰요.', mood: '슬픔', why: '말이 서툴러도 끝까지 들어 줘요.' },
              ], 'wait', 0.15),
              EB('그림 그리던 친구가 "살색 줘" 했어요.', '연한 주황 크레파스를 보고 준이가 "살색 줘" 했어요. 사람마다 피부색은 달라요.', [
                { id: 'name', text: '"살구색 여기 있어" 해요', result: '준이가 "아, 살구색!" 하고 따라 해요.', mood: '편안함' },
                { id: 'only', text: '"맞아, 살은 이 색이야"', result: '피부색이 다른 친구가 서운해해요.', mood: '속상함', why: '사람의 피부색은 여러 가지예요.' },
              ], 'name', 0.2),
              EB('놀이에서 친구를 빼려는 아이가 있어요.', '술래잡기를 하는데 한 아이가 "너는 말이 달라서 안 돼" 해요.', [
                { id: 'with', text: '"같이 하자!" 해요', result: '모두 함께 신나게 놀아요.', mood: '신남' },
                { id: 'quiet', text: '못 들은 척해요', result: '친구가 혼자 놀이를 지켜봐요.', mood: '외로움', why: '말이 달라도 함께 놀 수 있어요.' },
                { id: 'agree', text: '"맞아, 안 돼" 해요', result: '친구가 울면서 돌아서요.', mood: '슬픔', why: '다르다는 까닭으로 빼면 안 돼요.' },
              ], 'with', 0.25, { conclude: '다른 것은 틀린 것이 아니에요. 다름을 반기면 놀이가 더 즐거워요.' }),
            ]),
        ],
        wrap: '"다른 것은 틀린 것이 아니에요"를 함께 따라 말한다. 출구 1번에서 "말이 웃겨"를 존중하는 말에 둔 학생에게 친구 마음을 다시 떠올리게 한다. 2번은 크레파스 색 이름으로 정리한다.',
        exit: [
          XT('emotion', { mode: 'sort', slots: ['존중하는 말', '아픈 말'], cards: ['"알려 줄래?"', '"생김새 웃겨"', '"같이 하자"', '"너랑 안 놀아"'], weather: false }, '말을 존중하는 말과 아픈 말로 나누어 보세요.', { sort: { '존중하는 말': ['"알려 줄래?"', '"같이 하자"'], '아픈 말': ['"생김새 웃겨"', '"너랑 안 놀아"'] } }, 0.15),
          XC('연한 주황 크레파스는 어떻게 부르면 좋을까요?', ['살색', '살구색', '이상한 색'], 1, '사람의 피부색은 여러 가지라서 "살구색"이라고 불러요.'),
          XS('나와 다른 친구에게 해 주고 싶은 존중하는 말을 쓰세요.'),
        ],
        wsTitle: '달라도 친구',
        ws: [
          WT('존중하는 말이면 ○, 아픈 말이면 ×를 쓰세요.', ['말', '○ / ×'], [['"신기하다, 알려 줘"', ''], ['"냄새 이상해"', ''], ['"같이 그림 그리자"', ''], ['"말이 웃겨"', '']], '○, ×, ○, ×'),
          WC('친구의 처음 보는 반찬이 궁금할 때 할 말에 ○ 하세요.', ['"이건 무슨 반찬이야?"', '"저리 치워"', '"이상한 거 먹네"'], '"이건 무슨 반찬이야?"'),
          WB('빈칸에 알맞은 말을 쓰세요.', '다른 것은 ___ 것이 아니에요.', '틀린'),
          WD('서로 다른 친구들이 함께 노는 모습을 그려 보세요.'),
        ],
        notes: '자주 보이는 어려움: ① 다름을 "이상함"으로 말한다 → 궁금하면 묻는 말로 바꾸게 한다. ② 한 친구의 모습을 그 나라 사람 모두의 모습으로 여긴다 → 사람마다 다르다고 짚는다. 반 학생의 가족 배경을 묻거나 발표시키지 않는다.',
      }),
    ],
  });
})();
