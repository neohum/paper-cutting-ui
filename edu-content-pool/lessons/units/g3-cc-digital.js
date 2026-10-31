/* 3학년 창체 법정교육 — 인터넷·스마트폰 과의존 예방 (2차시).
 * 근거: 지능정보화 기본법 제54조(초·중·고 학기별 1회 이상 과의존 예방교육)(research-mandatory.md 표).
 * 안전교육 사이버 중독 예방 단원(g3-cc-saf-cyber: 사용 기록 읽기·게임 과몰입·스스로 멈추기·잠·가족 미디어 약속)과 겹치지 않게
 * 1학기는 '자꾸 울리는 알림에 끌려가지 않고 할 일 먼저', 2학기는 '화면 밖 즐거움으로 채우는 한 주 계획'으로 짠다. 특정 시간 수치는 쓰지 않는다.
 * 장면·인물은 지은 것이다(가명 한 글자). */
(function () {
  const ID = 'g3-cc-digital', GRADE = 3, TITLE = '인터넷·스마트폰 과의존 예방';
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
    { motif: 'house', x: 96, y: 214, color: 'sky', s: 0.9 }, { motif: 'tree', x: 380, y: 214 }, ...extra,
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
  const TM = (prompt, axis, slots, cards, match, d, more) => ({ prompt, toolOptions: { mode: 'match', axis, slots, cards }, target: { match }, difficulty: d, ...more });
  const WEEK = [{ id: 'mon', label: '월' }, { id: 'wed', label: '수' }, { id: 'fri', label: '금' }, { id: 'sun', label: '일' }];
  PaperLessons.registerUnit({
    id: ID, schema: 'edu-unit.v1', catalogUnit: UNIT,
    grade: GRADE, subject: '창체', unitTitle: TITLE,
    flow: '3학년 인터넷·스마트폰 과의존 예방 단원은 학기마다 한 번씩 기기가 내 시간과 주의를 끌어가는 방식을 알아차리고 내가 주인이 되는 습관을 세우는 2차시입니다. 1차시(1학기)에는 알림이 올 때마다 기기를 들여다보는 습관이 공부·놀이·대화를 끊는다는 것을 알고, 할 일을 먼저 끝내고 알림은 나중에 보는 쪽을 갈림길에서 고릅니다. 2차시(2학기)에는 운동·독서·만들기·가족 놀이처럼 화면 밖 즐거움을 찾아 요일별로 놓으며 한 주 계획을 세웁니다. 근거는 지능정보화 기본법 제54조(학기별 1회 이상)입니다. 사용 기록·게임 과몰입·잠·가족 미디어 약속은 안전교육 사이버 중독 예방(saf-cyber) 단원이 다루며, 그 단원과 연계해 시수 인정 가능(학교 결정)합니다.',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '알림이 울려도 할 일부터 끝내기',
        objective: '알림이 올 때마다 기기를 보는 습관이 할 일을 끊는다는 것을 알고, 할 일을 먼저 끝내는 방법을 고를 수 있다.',
        draw: 'a paper child finishing homework at a desk while a paper phone with little bell icons rests face down in a basket nearby',
        banner: '알림은 나중에, 할 일 먼저', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }],
        intro: '"\'띵동\' 소리가 나면 바로 기기를 보고 싶었던 적이 있나요?" 손을 들게 한 뒤 "알림은 우리 눈과 마음을 끌어당기도록 만들어져 있어요. 그래서 하던 일이 자꾸 끊겨요"라고 말한다. "금방 보고 오면 괜찮아요"라는 반응에는 "다시 집중하려면 처음부터 생각을 떠올려야 해요"라고 짚는다.',
        student: '공부나 놀이를 하다가 무엇 때문에 멈춘 적이 있는지 짝에게 말해 봐요.',
        acts: [
          ACT('a1', '활동 1. 알림 앞 갈림길', 14, 'emotion',
            '"알림을 바로 보면 하던 일은 어떻게 될까요?" 결과 칸을 읽고 까닭을 말하게 한다. 1번은 숙제하는 중, 2번은 친구와 이야기하는 중, 3번은 저녁 늦게 단체방 알림이 이어지는 장면이다. 3번에서 알림을 잠시 끄거나 기기를 다른 곳에 두는 방법을 함께 떠올린다.',
            '알림이 울릴 때 어떻게 할지 고르고 결과를 봐요.', [
              EB('수학 숙제를 하는데 알림이 울려요.', '준이가 수학 숙제 세 문제 중 한 문제를 풀었어요. 그때 게임 알림이 "띵동" 울려요.', [
                { id: 'later', text: '숙제를 끝내고 봐요', result: '숙제를 빨리 끝내고 마음 편히 쉬어요.', mood: '뿌듯함' },
                { id: 'now', text: '바로 열어 봐요', result: '게임을 하다 숙제를 잊고 늦게까지 붙잡혀요.', mood: '걱정', why: '할 일을 먼저 끝내고 알림은 나중에 봐요.' },
              ], 'later', 0.15),
              EB('친구와 이야기하는데 하나의 기기가 계속 울려요.', '하나가 친구 린과 이야기하는데 하나의 기기에서 알림이 계속 울려요.', [
                { id: 'check', text: '대답하며 계속 확인해요', result: '린이 "내 말 듣고 있어?" 하며 서운해해요.', mood: '속상함', why: '함께 있는 사람과의 대화가 먼저예요.' },
                { id: 'silent', text: '소리를 끄고 린을 봐요', result: '린과 이야기가 이어지고 둘이 크게 웃어요.', mood: '기쁨' },
              ], 'silent', 0.2),
              EB('저녁에 단체방 알림이 끝없이 와요.', '저녁에 반 친구들 단체방에 메시지가 끝없이 올라와요. 린은 책을 읽던 중이에요.', [
                { id: 'off', text: '알림을 잠시 꺼요', result: '책을 다 읽고 나중에 중요한 것만 확인해요.', mood: '편안함' },
                { id: 'all', text: '하나하나 다 읽어요', result: '책은 몇 쪽 못 읽고 머리가 복잡해요.', mood: '짜증', why: '알림을 끄거나 기기를 멀리 두면 집중할 수 있어요.' },
                { id: 'reply', text: '빨리 답하려고 계속 봐요', result: '답만 하다 저녁 시간이 다 지나가요.', mood: '걱정', why: '바로 답하지 않아도 괜찮아요.' },
              ], 'off', 0.25, { conclude: '알림이 울려도 지금 하는 일과 함께 있는 사람이 먼저예요.' }),
            ]),
          ACT('a2', '활동 2. 알림에 끌려가지 않는 방법', 13, 'mindmap',
            '"알림에 끌려가지 않으려면 어떤 방법이 있을까요?" 1번은 방법과 효과를 나눈다. 2번은 할 일을 먼저 끝내는 차례에 쓸 방법을 고른다. 3번은 장면에 알맞은 방법을 이으며, 기기를 보이지 않는 곳에 두는 것만으로도 덜 끌린다는 점을 말한다.',
            '알림에 끌려가지 않는 방법을 나누고 골라요.', [
              MS('행동을 알림에 끌려가는 것과 이겨 내는 것으로 나누어 보세요.', '알림과 나', ['끌려가요', '이겨 내요'], ['울리자마자 열어요', '할 일 뒤에 확인해요', '알림을 잠시 꺼요', '기기를 손에 쥐고 공부해요'], { '끌려가요': ['울리자마자 열어요', '기기를 손에 쥐고 공부해요'], '이겨 내요': ['할 일 뒤에 확인해요', '알림을 잠시 꺼요'] }, 0.15),
              MP('숙제할 때 쓸 방법만 골라 담아 보세요.', '숙제할 때', ['기기를 다른 방에 둬요', '할 일 목록을 써요', '알림 소리를 키워요', '영상 틀어 놓고 해요'], ['기기를 다른 방에 둬요', '할 일 목록을 써요'], 0.2),
              MM('장면과 알맞은 방법을 이어 보세요. 맞지 않는 카드는 남겨요.', '이럴 때 이렇게', [{ id: 's1', label: '책을 읽고 싶어요.' }, { id: 's2', label: '가족과 밥을 먹어요.' }, { id: 's3', label: '단체방이 시끄러워요.' }], ['기기를 엎어 둬요', '식탁 밖에 둬요', '알림을 잠시 꺼요', '바로바로 답해요'], { s1: '기기를 엎어 둬요', s2: '식탁 밖에 둬요', s3: '알림을 잠시 꺼요' }, 0.25,
                { conclude: '알림을 끄고, 멀리 두고, 할 일부터 하면 내가 기기의 주인이 돼요.' }),
            ]),
        ],
        wrap: '"오늘 집에서 써 볼 방법 하나를 골라 볼까요?" 출구 1번에서 바로 여는 쪽을 고른 학생에게 하던 일이 어떻게 되었는지 다시 묻는다. 2번은 바로 답하지 않아도 괜찮다는 점으로 정리한다.',
        exit: [
          XT('emotion', { mode: 'branch', situation: '그림 대회 그림을 그리는데 영상 앱 알림이 와요.', choices: [{ id: 'a', text: '그림을 다 그리고 봐요', result: '멋진 그림을 끝내고 뿌듯해요.', mood: '뿌듯함' }, { id: 'b', text: '바로 영상을 열어요', result: '그림이 반만 남은 채 시간이 다 가요.', mood: '걱정', why: '할 일을 먼저 끝내요.' }] }, '어떻게 하면 좋을까요?', { choice: 'a' }, 0.15),
          XC('단체방에 메시지가 오면 꼭 바로 답해야 할까요?', ['네, 바로 답해야 해요', '아니요, 할 일 뒤에 봐도 돼요', '밤새 기다려야 해요'], 1, '급한 일이 아니면 할 일을 끝내고 확인해도 괜찮아요.'),
          XS('알림에 끌려가지 않기 위해 내가 해 볼 방법을 쓰세요.'),
        ],
        wsTitle: '알림은 나중에',
        ws: [
          WT('알림을 이겨 내는 행동이면 ○, 끌려가는 행동이면 ×를 쓰세요.', ['행동', '○ / ×'], [['울리자마자 열어요', ''], ['알림을 잠시 꺼요', ''], ['할 일 뒤에 확인해요', ''], ['기기를 쥐고 공부해요', '']], '×, ○, ○, ×'),
          WC('숙제할 때 기기를 어디에 두면 좋을까요?', ['손에 쥐고', '책상 위 화면 켜고', '다른 방에'], '다른 방에'),
          WB('빈칸에 알맞은 말을 쓰세요.', '알림이 울려도 ___을 먼저 끝내요.', '할 일'),
          WS('알림 때문에 하던 일이 끊긴 이야기 속 인물에게 해 줄 말을 쓰세요.'),
        ],
        notes: '자주 보이는 어려움: ① 바로 답하지 않으면 친구가 싫어할까 봐 걱정한다 → 바로 답하지 않아도 괜찮다는 반 약속을 함께 정해 볼 수 있다. ② 기기가 없는 학생이 소외감을 느낄 수 있다 → 기기 보유나 사용 시간을 묻지 않고 가상 인물 장면으로만 다룬다.',
      }),

      LESSON(2, {
        title: '화면 밖 즐거움으로 우리 집 한 주 계획 세우기',
        objective: '화면 밖에서 즐길 수 있는 활동을 찾아 한 주 계획에 놓을 수 있다.',
        draw: 'a paper weekly calendar with little scenes on each day: kids riding bikes, reading books, building blocks and playing a board game with family',
        banner: '화면 밖에도 재미가 가득', extra: [{ motif: 'flower', x: 300, y: 222, color: 'buttercup' }],
        intro: '"심심할 때 화면 말고 할 수 있는 일을 몇 개나 떠올릴 수 있나요?" 짝과 십 초 동안 손가락으로 세어 보게 한 뒤 "화면 밖 즐거움이 많을수록 화면에 덜 끌려요"라고 말한다. "화면 말고는 재미있는 게 없어요"라는 반응에는 "오늘 그런 재미를 같이 찾아 볼 거예요"라고 답한다.',
        student: '화면 없이 가장 즐거웠던 놀이나 활동을 짝에게 하나 말해 봐요.',
        acts: [
          ACT('a1', '활동 1. 화면 밖 즐거움 찾기', 14, 'mindmap',
            '"이 활동은 화면이 필요할까요?" 1번에서 화면 밖 활동을 나눈다. 2번은 몸을 움직이는 활동, 마음을 채우는 활동, 함께하는 활동으로 나누어 고르게 한다. 3번에서 날씨나 장소에 따라 고를 수 있는 활동을 잇는다 — 비 오는 날에도 할 수 있는 활동이 있다는 점을 짚는다.',
            '화면 밖 활동을 찾아 나누고 골라요.', [
              MS('활동을 화면이 필요한 것과 화면 밖 활동으로 나누어 보세요.', '즐거운 활동', ['화면 밖 활동', '화면이 필요해요'], ['자전거 타기', '종이접기', '영상 보기', '보드게임', '모바일 게임'], { '화면 밖 활동': ['자전거 타기', '종이접기', '보드게임'], '화면이 필요해요': ['영상 보기', '모바일 게임'] }, 0.15),
              MS('화면 밖 활동을 나누어 보세요.', '어떤 즐거움', ['몸을 움직여요', '가족과 함께해요'], ['줄넘기', '공원 산책', '가족 윷놀이', '함께 요리하기'], { '몸을 움직여요': ['줄넘기', '공원 산책'], '가족과 함께해요': ['가족 윷놀이', '함께 요리하기'] }, 0.2),
              MM('날씨와 장소에 어울리는 활동을 이어 보세요. 맞지 않는 카드는 남겨요.', '언제 무엇을', [{ id: 's1', label: '비 오는 날 집에서' }, { id: 's2', label: '맑은 날 놀이터에서' }, { id: 's3', label: '조용한 저녁에' }], ['블록 만들기', '술래잡기', '책 읽기', '영상 몰아 보기'], { s1: '블록 만들기', s2: '술래잡기', s3: '책 읽기' }, 0.25,
                { conclude: '날씨와 장소가 달라도 화면 밖 즐거움은 늘 있어요.' }),
            ]),
          ACT('a2', '활동 2. 한 주 계획 세우기', 13, 'timeline',
            '"요일마다 어떤 화면 밖 활동을 넣어 볼까요?" 1번은 이야기 속 준이네 한 주 계획을 요일에 맞게 놓는다 — 문장에 나온 요일 단서를 읽게 한다. 2번은 하루 저녁의 차례로, 할 일을 먼저 하고 즐거움을 놓는 순서다. 3번은 하나네 주말 계획 차례다. 계획은 가정마다 다를 수 있다고 말한다.',
            '요일과 차례에 맞게 화면 밖 활동을 놓아요.', [
              TM('준이네 계획을 읽고 요일에 맞게 놓아 보세요. (월: 운동, 수: 도서관, 금: 가족 놀이, 일: 공원)', ['한 주 처음', '한 주 끝'], WEEK, ['줄넘기 연습', '도서관 가기', '가족 보드게임', '공원 자전거'], { mon: '줄넘기 연습', wed: '도서관 가기', fri: '가족 보드게임', sun: '공원 자전거' }, 0.15),
              TO('평일 저녁 차례대로 놓아 보세요.', ['먼저', '나중'], [C('e1', '숙제를 끝내요', 'star'), C('e2', '종이접기를 해요', 'flower'), C('e3', '책을 읽고 자요', 'moon')], ['e1', 'e2', 'e3'], 0.2),
              TO('하나네 주말 계획을 차례대로 놓아 보세요.', ['아침', '저녁'], [C('w1', '아침 산책을 해요', 'sun'), C('w2', '점심 요리를 도와요', 'house'), C('w3', '저녁에 윷놀이해요', 'moon')], ['w1', 'w2', 'w3'], 0.25,
                { conclude: '한 주에 화면 밖 즐거움을 미리 놓아 두면 화면에 덜 끌려요.' }),
            ]),
        ],
        wrap: '"이번 주에 꼭 해 보고 싶은 화면 밖 활동 하나를 정해 볼까요?" 출구 1번에서 영상 보기를 화면 밖 활동에 둔 학생과 함께 다시 본다. 2번은 할 일을 먼저 하는 차례로 정리한다.',
        exit: [
          XT('mindmap', { mode: 'pick', topic: '화면 밖 활동', basket: '화면 밖 활동', cards: ['딱지치기', '그림 그리기', '영상 몰아 보기', '게임 앱'] }, '화면 밖 활동만 골라 담아 보세요.', { pick: ['딱지치기', '그림 그리기'] }, 0.15),
          XC('화면 밖 즐거움을 한 주 계획에 미리 넣으면 무엇이 좋을까요?', ['화면에 덜 끌려요', '숙제를 안 해도 돼요', '잠을 덜 자도 돼요'], 0, '미리 계획한 즐거움이 있으면 화면에 덜 끌려요.'),
          XS('이번 주에 해 볼 화면 밖 활동과 요일을 쓰세요.'),
        ],
        wsTitle: '화면 밖 한 주 계획',
        ws: [
          WT('요일마다 하고 싶은 화면 밖 활동을 쓰세요.', ['요일', '화면 밖 활동'], [['월', ''], ['수', ''], ['금', ''], ['일', '']], '예) 줄넘기 / 도서관 / 가족 보드게임 / 공원 자전거'),
          WC('화면 밖 활동에 ○ 하세요.', ['영상 보기', '종이접기', '모바일 게임'], '종이접기'),
          WB('빈칸에 알맞은 말을 쓰세요.', '비 오는 날에는 집에서 ___ 만들기를 할 수 있어요.', '블록'),
          WD('이번 주 화면 밖 활동 가운데 가장 기대되는 장면을 그려 보세요.'),
        ],
        notes: '자주 보이는 어려움: ① 화면 밖 활동을 "재미없는 것"으로 여긴다 → 학생들이 찾은 놀이를 칠판에 모아 선택지를 넓힌다. ② 가정마다 주말 사정이 다르다 → 계획을 발표시키거나 견주지 않고, 혼자서도 할 수 있는 활동을 함께 넣게 한다.',
      }),
    ],
  });
})();
