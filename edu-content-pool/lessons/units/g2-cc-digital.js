/* 2학년 창체 법정교육 — 인터넷·스마트폰 과의존 예방 (2차시).
 * 근거: 지능정보화 기본법 제54조(초·중·고 학기별 1회 이상 과의존 예방교육)(research-mandatory.md 표).
 * 안전교육 사이버 중독 예방 단원(g2-cc-saf-cyber: 하루 속 화면 시간·과몰입 신호·아쉬운 마음·광고 결제 창·습관 점검)과 겹치지 않게
 * 1학기는 '기기를 두는 자리'(식탁·잠자리·공부 자리에 두지 않기, 정해진 충전 자리), 2학기는 '친구와 놀 때 화면 내려놓기'로 짠다.
 * 1학년 단원(자동재생 멈추기·밥 먹을 때 얼굴 보기)과도 겹치지 않게 한다. 특정 시간 수치는 쓰지 않는다. 장면·인물은 지은 것이다(가명 한 글자). */
(function () {
  const ID = 'g2-cc-digital', GRADE = 2, TITLE = '인터넷·스마트폰 과의존 예방';
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
  PaperLessons.registerUnit({
    id: ID, schema: 'edu-unit.v1', catalogUnit: UNIT,
    grade: GRADE, subject: '창체', unitTitle: TITLE,
    flow: '2학년 인터넷·스마트폰 과의존 예방 단원은 학기마다 한 번씩 기기가 내 생활 깊숙이 들어오지 않게 막는 방법을 익히는 2차시입니다. 1차시(1학기)에는 기기를 둘 자리와 두지 않을 자리를 나누고, 잠자기 전 기기를 정해진 충전 자리에 두는 차례를 익힙니다. 2차시(2학기)에는 친구와 함께 있을 때 화면만 보면 생기는 일을 알아보고 화면을 내려놓고 함께 노는 쪽을 고릅니다. 근거는 지능정보화 기본법 제54조(학기별 1회 이상)입니다. 화면 시간·과몰입 신호·광고 창은 안전교육 사이버 중독 예방(saf-cyber) 단원이 다루며, 그 단원과 연계해 시수 인정 가능(학교 결정)합니다.',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '기기 자리를 정하고 잠자리에서 멀리 두기',
        objective: '기기를 두지 않을 자리와 둘 자리를 나누고, 잠자기 전 기기를 정해진 자리에 둘 수 있다.',
        draw: 'a paper living room with a small charging shelf holding a tablet, and a paper child sleeping peacefully in a bedroom with no screens, under a soft moon',
        banner: '기기는 제자리에', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }],
        intro: '"우리 집에서 신발은 어디에 두나요?" 대답을 듣고(기다릴 반응: "신발장") "기기도 놓아두는 자리를 정하면 덜 끌려다녀요"라고 말한다. "옆에 두면 편해요"라는 반응에는 "옆에 있으면 자꾸 손이 가지 않을까요?"라고 되묻는다.',
        student: '우리 집에서 기기를 어디에 두면 좋을지 짝에게 말해 봐요.',
        acts: [
          ACT('a1', '활동 1. 둘 자리와 두지 않을 자리', 14, 'mindmap',
            '"이곳에 기기가 있으면 어떤 일이 생길까요?" 1번에서 베개 옆을 둘 자리로 고른 학생에게 "불이 반짝이거나 소리가 나면 잠이 깰 수 있어요"라고 짚는다. 2번은 숙제할 때 기기를 어디에 둘지 고른다. 3번은 장소와 알맞은 자리를 이으며 "멀리 두면 마음도 편해요"라고 말한다.',
            '기기를 둘 자리와 두지 않을 자리를 나누어요.', [
              MS('기기를 둘 자리와 두지 않을 자리로 나누어 보세요.', '기기 자리', ['둘 자리', '두지 않을 자리'], ['거실 충전 자리', '정해진 선반', '베개 옆', '밥 먹는 식탁'], { '둘 자리': ['거실 충전 자리', '정해진 선반'], '두지 않을 자리': ['베개 옆', '밥 먹는 식탁'] }, 0.15),
              MP('숙제할 때 기기를 어떻게 둘지 골라 담아 보세요.', '숙제할 때', ['다른 방에 둬요', '화면을 엎어 둬요', '책 옆에 켜 둬요', '손에 쥐고 해요'], ['다른 방에 둬요', '화면을 엎어 둬요'], 0.2),
              MM('때와 기기 자리를 이어 보세요. 맞지 않는 카드는 남겨요.', '이때는 여기', [{ id: 's1', label: '잠잘 때' }, { id: 's2', label: '밥 먹을 때' }, { id: 's3', label: '집에 돌아왔을 때' }], ['방 밖 충전 자리', '식탁에서 먼 곳', '정해진 선반', '이불 속'], { s1: '방 밖 충전 자리', s2: '식탁에서 먼 곳', s3: '정해진 선반' }, 0.25,
                { conclude: '기기를 제자리에 두면 손이 덜 가고 마음이 편해요.' }),
            ]),
          ACT('a2', '활동 2. 잠자기 전 기기 재우기', 13, 'story',
            '"나보다 기기를 먼저 재워 볼까요?" 1번은 잠자기 전 기기를 충전 자리에 두는 차례다. 2번은 밤에 기기 소리가 날 때의 차례로, 일어나 확인하지 않고 그대로 둔다는 점을 짚는다. 3번 말풍선은 짝과 주고받으며 읽는다.',
            '잠자기 전 기기를 두는 차례를 놓고 말풍선을 채워요.', [
              SO('잠자기 전 할 일을 차례대로 놓아 보세요.', '기기 재우기', ['먼저', '다음', '마지막'], [C('k1', '기기를 꺼요', 'moon'), C('k2', '충전 자리에 둬요', 'house'), C('k3', '내 방에서 잠자요', 'star')], ['k1', 'k2', 'k3'], 0.15),
              SO('아침에 일어났을 때 할 일을 차례대로 놓아 보세요.', '아침 차례', ['먼저', '다음', '마지막'], [C('t1', '세수하고 옷 입어요', 'sun'), C('t2', '아침밥을 먹어요', 'flower'), C('t3', '가방을 챙겨요', 'leaf')], ['t1', 't2', 't3'], 0.2),
              SF('하나가 할 말을 채워 보세요.', [{ id: 'b1', who: '하나', motif: 'moon', label: '잠자기 전 기기에게 "___"' }, { id: 'b2', who: '하나', motif: 'house', label: '동생에게 "___"' }], ['너도 잘 자', '기기는 거실에 두자', '이불 속에서 보자', '조금만 더 할래'], { b1: '너도 잘 자', b2: '기기는 거실에 두자' }, 0.25,
                { conclude: '잠자리에는 기기 대신 나만 누워요.' }),
            ]),
        ],
        wrap: '"오늘 밤 우리 집 기기는 어디에서 잘까요?" 출구 1번에서 베개 옆을 고른 학생에게 잠을 깨우는 불빛과 소리를 다시 떠올리게 한다. 2번은 숙제할 때 기기를 멀리 두는 점으로 정리한다.',
        exit: [
          XT('mindmap', { topic: '기기 자리', slots: ['둘 자리', '두지 않을 자리'], cards: ['거실 선반', '충전 자리', '이불 속', '식탁 위'] }, '기기를 둘 자리와 두지 않을 자리로 나누어 보세요.', { sort: { '둘 자리': ['거실 선반', '충전 자리'], '두지 않을 자리': ['이불 속', '식탁 위'] } }, 0.15),
          XC('숙제할 때 기기는 어디에 두면 좋을까요?', ['책 옆에 켜 둬요', '다른 방에 둬요', '손에 쥐어요'], 1, '멀리 두면 숙제에 마음을 모을 수 있어요.'),
          XS('우리 집 기기 자리로 좋은 곳을 한 가지 쓰세요.'),
        ],
        wsTitle: '기기는 제자리에',
        ws: [
          WT('기기를 두어도 되면 ○, 아니면 ×를 쓰세요.', ['자리', '○ / ×'], [['거실 충전 자리', ''], ['베개 옆', ''], ['정해진 선반', ''], ['밥 먹는 식탁', '']], '○, ×, ○, ×'),
          WC('잠자기 전 기기를 어떻게 할까요?', ['이불 속에 둬요', '충전 자리에 둬요', '베개 옆에 켜 둬요'], '충전 자리에 둬요'),
          WB('빈칸에 알맞은 말을 쓰세요.', '기기를 ___에 두면 손이 덜 가요.', '제자리'),
          WD('우리 집 기기 자리를 그려 보세요.'),
        ],
        notes: '자주 보이는 어려움: ① 가까이 두어도 안 보면 된다고 여긴다 → 눈에 보이면 손이 간다는 점을 짚는다. ② 집마다 방 구조와 기기가 다르다 → 가진 기기나 집 구조를 묻지 않고 "우리 집에서 할 수 있는 자리"를 스스로 생각하게 한다.',
      }),

      LESSON(2, {
        title: '친구와 놀 때 화면 내려놓고 함께 놀기',
        objective: '친구와 함께 있을 때 화면만 보면 생기는 일을 알고, 화면을 내려놓고 함께 노는 쪽을 고를 수 있다.',
        draw: 'paper children playing hopscotch together in a park while a paper tablet rests closed on a bench, under a bright sun',
        banner: '화면 내리고 함께 놀아요', extra: [{ motif: 'flower', x: 300, y: 222, color: 'rose' }],
        intro: '"친구와 만났는데 친구가 화면만 보고 있으면 어떤 마음일까요?" 두세 명의 대답을 듣고 "함께 있어도 혼자인 것 같을 수 있어요"라고 말한다. "같이 화면 보면 되잖아요"라는 반응에는 "그때 우리는 서로 얼굴을 보고 있을까요?"라고 되묻는다.',
        student: '친구와 화면 없이 하는 놀이 중 가장 좋아하는 것을 짝에게 말해 봐요.',
        acts: [
          ACT('a1', '활동 1. 장면과 마음 잇기', 14, 'emotion',
            '"이때 친구의 마음 날씨는 어떨까요?" 1번에서 친구가 화면만 보는 장면에 기쁨을 놓은 학생에게 "말을 걸어도 대답이 없으면요?"라고 묻는다. 2번은 함께 놀 때 할 일을 고른다. 3번은 모습을 나누며 화면을 내려놓으면 놀이가 더 즐겁다는 점을 말한다.',
            '장면과 마음을 잇고 놀이 모습을 나누어요.', [
              EM('장면과 친구의 마음을 이어 보세요. 맞지 않는 카드는 남겨요.', [{ id: 's1', label: '놀러 왔는데 친구가 게임만 해요.' }, { id: 's2', label: '함께 줄넘기를 했어요.' }, { id: 's3', label: '말을 걸었는데 화면만 봐요.' }], ['외로움', '신남', '속상함', '무서움'], { s1: '외로움', s2: '신남', s3: '속상함' }, 0.15),
              EP('친구와 함께 놀 때 할 일만 골라 담아 보세요.', '함께 놀 때', ['기기를 가방에 넣어요', '놀이를 같이 정해요', '혼자 게임해요', '영상만 봐요'], ['기기를 가방에 넣어요', '놀이를 같이 정해요'], 0.2),
              ES('놀이 모습을 나누어 보세요.', ['함께 놀아요', '따로 있어요'], ['보드게임을 해요', '술래잡기를 해요', '각자 화면을 봐요', '이어폰만 껴요'], { '함께 놀아요': ['보드게임을 해요', '술래잡기를 해요'], '따로 있어요': ['각자 화면을 봐요', '이어폰만 껴요'] }, 0.25,
                { conclude: '화면을 내려놓으면 친구와 진짜로 함께 놀 수 있어요.' }),
            ]),
          ACT('a2', '활동 2. 이럴 때 어떻게 할까요', 13, 'emotion',
            '"어떤 길을 고르면 둘 다 웃을까요?" 결과 칸을 읽게 한다. 1번은 친구 집에 놀러 간 장면, 2번은 생일잔치에서 영상만 보려는 장면, 3번은 놀이터에서 친구가 계속 게임만 할 때 함께 놀자고 말하는 장면이다.',
            '장면에서 어떻게 할지 고르고 결과를 봐요.', [
              EB('친구 집에 놀러 갔어요.', '준이가 하나 집에 놀러 갔어요. 하나가 "게임 각자 할까?" 해요.', [
                { id: 'play', text: '"블록 놀이 같이 하자" 해요', result: '둘이 함께 큰 성을 만들며 웃어요.', mood: '신남' },
                { id: 'each', text: '"그래" 하고 각자 게임해요', result: '둘이 한마디도 안 하고 시간이 가요.', mood: '외로움', why: '함께 있을 때는 함께 하는 놀이를 골라요.' },
              ], 'play', 0.15),
              EB('생일잔치에서 영상을 틀려고 해요.', '린의 생일잔치에 친구들이 모였어요. 한 친구가 "영상 보자" 해요.', [
                { id: 'video', text: '모두 영상만 봐요', result: '잔치가 조용하고 이야기를 못 나눠요.', mood: '속상함', why: '모였을 때는 함께하는 놀이가 더 즐거워요.' },
                { id: 'game', text: '"수건돌리기 하자!" 해요', result: '모두 깔깔 웃으며 잔치를 즐겨요.', mood: '기쁨' },
              ], 'game', 0.2),
              EB('놀이터에서 친구가 계속 게임만 해요.', '놀이터에서 만난 친구가 벤치에 앉아 게임만 하고 있어요.', [
                { id: 'ask', text: '"그네 같이 탈래?" 물어요', result: '친구가 기기를 넣고 함께 그네를 타요.', mood: '신남' },
                { id: 'grab', text: '기기를 확 빼앗아요', result: '친구가 화가 나서 다퉈요.', mood: '화남', why: '빼앗지 말고 함께 놀자고 말해요.' },
                { id: 'leave', text: '말없이 혼자 놀아요', result: '둘 다 따로 놀다 집에 가요.', mood: '외로움', why: '먼저 함께 놀자고 말해 봐요.' },
              ], 'ask', 0.25, { conclude: '친구와 있을 때는 화면을 내려놓고 함께 놀자고 말해요.' }),
            ]),
        ],
        wrap: '"이번 주에 친구와 화면 없이 해 볼 놀이는 무엇인가요?" 출구 1번에서 각자 화면 보기를 고른 학생에게 함께 있어도 혼자일 수 있다는 점을 다시 짚는다. 2번은 빼앗지 않고 말로 권하는 점으로 정리한다.',
        exit: [
          XT('emotion', { mode: 'pick', basket: '함께 놀 때', cards: ['기기를 가방에 넣어요', '같이 놀이를 정해요', '각자 화면 봐요', '혼자 게임해요'], weather: false }, '친구와 함께 놀 때 할 일만 골라 담아 보세요.', { pick: ['기기를 가방에 넣어요', '같이 놀이를 정해요'] }, 0.15),
          XC('친구가 게임만 하고 있으면 어떻게 할까요?', ['기기를 빼앗아요', '"같이 놀자" 물어요', '화를 내요'], 1, '빼앗지 말고 함께 놀자고 말해요.'),
          XS('친구와 화면 없이 하고 싶은 놀이를 쓰세요.'),
        ],
        wsTitle: '함께 놀아요',
        ws: [
          WT('함께 노는 모습이면 ○, 따로 있는 모습이면 ×를 쓰세요.', ['모습', '○ / ×'], [['보드게임을 해요', ''], ['각자 화면을 봐요', ''], ['술래잡기를 해요', ''], ['이어폰만 껴요', '']], '○, ×, ○, ×'),
          WC('생일잔치에서 하면 더 즐거운 일에 ○ 하세요.', ['영상만 보기', '수건돌리기', '각자 게임'], '수건돌리기'),
          WB('빈칸에 알맞은 말을 쓰세요.', '친구와 있을 때는 화면을 ___ 함께 놀아요.', '내려놓고'),
          WD('친구와 화면 없이 노는 모습을 그려 보세요.'),
        ],
        notes: '자주 보이는 어려움: ① 같이 화면을 보면 함께 노는 것이라고 여긴다 → 서로 얼굴을 보고 말을 나누는지를 기준으로 삼게 한다. ② 친구의 기기를 빼앗아 해결하려 한다 → 말로 권하는 길을 연습한다. 가진 기기나 게임 종류를 묻거나 견주지 않는다.',
      }),
    ],
  });
})();
