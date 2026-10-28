/* 6학년 영어 1학기 1단원. 듣기(이해) — 듣기·읽기 전략(1~12차시) → 매체 자료(13~23차시) → 노래·이야기·시 감상(24~34차시) → 관점과 문화(35~45차시).
 * 안내 방송·대화·문자·누리집 글·노래 가사·이야기·시는 모두 이 단원을 위해 새로 지은 것이다(교과서 지문을 옮기지 않았다).
 * 예외(저작권이 끝난 작품, 출처를 차시 teacherNotes에 적음): Row, Row, Row Your Boat(전래 동요, 1852년 악보 출판), Hush, Little Baby(미국 전래 자장가),
 *   Christina Rossetti "Who Has Seen the Wind?"(1872), Robert Louis Stevenson "Rain"(1885), 이솝 우화 "The Lion and the Mouse"(쉬운 말로 다시 씀).
 * 듣기 문항(wordcards listen)은 '듣기' 단추를 누를 때만 소리가 난다. 소리가 없는 교실에서는 teacherNotes의 듣기 대본을 교사가 읽어 준다.
 */
(function () {
  const UNIT = 'g6-eng-1-01';
  const CAT = 'g6-영어-1학기-1';
  const U = { grade: 6, subject: '영어', unitTitle: '1. 듣기' };
  const FORMATS = ['chromebook', 'projector', 'print'];
  const S07 = ['[6영01-07]']; const S08 = ['[6영01-08]']; const S09 = ['[6영01-09]']; const S10 = ['[6영01-10]'];
  const PROMPT = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const lesson = (n, std, body) => Object.assign({ id: `${UNIT}-${String(n).padStart(2, '0')}`, schema: 'edu-lesson.v1', catalog: { unit: CAT, lesson: n } }, U, { standards: std, minutes: 40, formats: FORMATS }, body);
  // 벡터 장면: 언덕 + 구름 + 차시마다 다른 모티프 + 글 두 줄
  const SCENE = (t1, t2, motifs) => ({ viewBox: [480, 270], layers: [
    { motif: 'cloud', x: 110, y: 50 }, { motif: 'hills', y: 208 },
  ].concat(motifs || [], [
    { motif: 'text', x: 240, y: 122, text: t1, size: 24 },
    { motif: 'text', x: 240, y: 158, text: t2, size: 18 },
  ]) });
  // 활동 levels: 쉬움 = 맞게 놓으면 초록 테두리·틀리면 까닭과 함께 되돌림, 기본·도전 = 다 놓고 확인
  const EASY = { live: true, instant: true };
  const LV = (base) => ({ easy: Object.assign({}, base, EASY), base: Object.assign({}, base), challenge: Object.assign({}, base) });
  const PICK = (basket) => ({ mode: 'pick', basket, shuffle: false });
  // 듣기: say = 들려줄 말(누를 때만 소리), 카드는 뜻·그림만(영어 글 없음)
  const LISTEN = (say, cards, basket) => ({ mode: 'listen', say, cards, basket: basket || '찾은 정보' });
  const C = (id, text, why) => (why ? { id, text, why } : { id, text });
  // 문항 단계: 쉬움은 keep에 든 카드만(함정 줄이기), 도전은 add 카드를 더함(함정 늘리기)
  const TIER = (cards, keep, add, extra) => {
    const o = {};
    if (keep) o.easy = { toolOptions: { cards: cards.filter((c) => keep.includes(typeof c === 'string' ? c : c.id)) } };
    if (add) o.challenge = { toolOptions: Object.assign({ cards: cards.concat(add) }, extra || {}) };
    else if (extra) o.challenge = { toolOptions: extra };
    return o;
  };
  // 쉬움 단계에서 나누기(sort) 카드를 줄일 때: 줄인 카드에 맞춰 목표도 줄이고, 글도 그 단계 것으로 둔다
  const EZSORT = (prompt, cards, target, keep) => {
    const k = (c) => keep.includes(typeof c === 'string' ? c : c.id);
    const sort = {};
    Object.keys(target.sort).forEach((s) => { sort[s] = target.sort[s].filter((id) => keep.includes(id)); });
    return { prompt, toolOptions: { cards: cards.filter(k) }, target: { sort } };
  };
  // 11차시부터: 카드와 단계(쉬움 keep·도전 add)를 한 번에 — 카드 목록을 두 번 적지 않는다
  const CD = (cards, keep, add, extra, more) => {
    const lv = TIER(cards, keep, add, extra);
    const o = { toolOptions: Object.assign({ cards }, more || {}) };
    if (Object.keys(lv).length) o.levels = lv;
    return o;
  };
  const LI = (say, cards, basket, keep, add, extra) => {
    const lv = TIER(cards, keep, add, extra);
    const o = { toolOptions: LISTEN(say, cards, basket) };
    if (Object.keys(lv).length) o.levels = lv;
    return o;
  };

  PaperLessons.registerUnit({
    id: UNIT, schema: 'edu-unit.v1', catalogUnit: CAT,
    grade: 6, subject: '영어', unitTitle: '1. 듣기',
    flow: '1~12차시는 듣기·읽기 전략이다. 안내 방송·일기 예보·안내문·음성 메시지에서 찾을 정보를 먼저 정하고 그 대목만 잡아 내는 것부터 시작해, 제목·그림·첫 마디로 나올 내용을 예측하며 듣고, 한 번 적은 답을 필요한 대목만 다시 들어 고치는 데까지 간다. 13~23차시는 매체 자료로, 누리집 글·단체 대화방·앱 화면·짧은 영상 대본에서 필요한 부분을 갈무리해 핵심을 간추리고, 자기 수준과 목적에 맞는 자료를 고른 까닭을 말하며 나의 영어 목록을 만든다. 24~34차시는 감상으로, 노래의 되풀이 구절과 분위기, 이야기 인물의 기분과 그 까닭, 짧은 시와 우화에서 마음에 남은 구절을 찾아 자기 생각을 한 문장으로 보탠다. 35~45차시는 관점과 문화로, 같은 일을 다르게 보는 두 사람의 말을 정리하고, 두 나라의 생활을 견주며 낮추어 보는 표현을 고치고, 일상 문화 자료에 존중하는 말로 반응한 뒤 단원 전체를 돌아본다. 단원 내내 "다 알아듣지 못해도 찾을 것을 정하면 들린다"와 "다른 것은 틀린 것이 아니다"를 되풀이한다.',
    refs: {},
    lessons: [
      // ───────────────────────── 1차시 (intro) ─────────────────────────
      lesson(1, S07, {
        title: '찾을 정보를 먼저 정하고 학교 안내 방송 듣기',
        objective: '영어 안내 방송을 듣기 전에 찾을 정보(때·곳·가져올 것)를 정하고, 들으며 그 정보를 골라 낼 수 있다.',
        illustration: {
          prompt: PROMPT('a school hallway with a big loudspeaker on the wall and children holding small notepads, listening carefully with sound waves floating in the air'),
          scene: SCENE('Attention, please!', '찾을 정보를 먼저 정해요', [
            { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'house', x: 390, y: 218, color: 'sky' }, { motif: 'tree', x: 80, y: 214 },
          ]),
        },
        stages: [
          {
            id: 'intro', title: '도입', minutes: 7,
            teacher: '"공항이나 지하철에서 영어 안내 방송을 들어 본 적 있나요? 방송을 처음부터 끝까지 다 알아들었나요?" 대답을 들은 뒤 "Attention, please. The school library will close early today, at two o\'clock."을 한 번 읽어 준다. "도서관이 몇 시에 닫는지만 알면 되는 사람은 어디에 귀를 기울여야 할까요?" two o\'clock을 찾은 학생에게 early, attention을 모두 알았는지 물어, 모르는 낱말이 있어도 찾을 정보는 잡을 수 있음을 보인다. "다 알아들어야 답을 찾을 수 있다"고 말하는 학생에게 "찾을 것을 먼저 정하면 그 대목이 크게 들려요."라고 짚는다.',
            student: '영어 안내 방송을 들을 때 모든 낱말을 다 알아들어야 할까요? 무엇을 먼저 정하면 좋을지 생각해 봐요.',
            demo: { tool: 'wordcards', options: LISTEN('The school library will close early today, at two o\'clock.', [C('t2', '2시'), C('t3', '3시'), C('t10', '10시')], '닫는 시각'), sequence: [{ at: {} }, { at: { t2: 0 } }] },
          },
          {
            id: 'main', title: '전개', minutes: 26,
            activities: [
              {
                id: 'a1', title: '활동 1. 상황에 맞는 "찾을 정보" 정하기', minutes: 11, tool: 'wordcards',
                teacher: '"현장 체험학습 날 아침이에요. 무엇을 챙겨 갈지 알고 싶다면 방송에서 어떤 물음을 들고 들어야 할까요?" 물음 카드를 소리 내어 읽게 한 뒤 고르게 한다. When은 때, Where는 곳, Who는 사람, What ~ bring은 가져올 것을 묻는다는 것을 칠판에 적는다. 궁금한 것을 모두 고르는 학생에게 "지금 상황에서 꼭 필요한 정보만 골라야 귀가 그 대목에 모여요."라고 말해 준다.',
                task: '상황을 읽고, 방송을 듣기 전에 마음속에 들고 있을 물음 카드만 골라요. 물음과 찾을 정보의 종류도 짝 지어요.',
                levels: LV(PICK('들고 들을 물음')),
                items: [
                  { prompt: '현장 체험학습에 무엇을 챙겨 갈지 알고 싶어요. 방송을 듣기 전에 들고 있을 물음 하나를 골라 보세요.',
                    toolOptions: { cards: [C('bring', 'What should we bring?'), C('leave', 'When do we leave?', '떠나는 때는 챙길 물건과 상관이 없어요.'), C('meet', 'Where do we meet?', '모이는 곳은 챙길 물건과 상관이 없어요.')] },
                    target: { pick: ['bring'] }, difficulty: 0.1,
                    hints: ['물음 카드의 첫 낱말과 끝 낱말을 보세요. 무엇을 묻는 물음인지 알면 상황에 맞는 것을 고를 수 있어요.', '고른 카드가 묻는 것이 "챙길 물건"인지 다시 읽어 보세요.', 'bring은 "가져오다"예요. 가져올 것을 묻는 물음을 골라요.'],
                    levels: TIER([C('bring', 'What should we bring?'), C('leave', 'When do we leave?', '떠나는 때는 챙길 물건과 상관이 없어요.'), C('meet', 'Where do we meet?', '모이는 곳은 챙길 물건과 상관이 없어요.')], ['bring', 'leave'], [C('wear', 'What should we wear?', 'wear는 "입다"예요. 입을 옷과 챙길 물건은 다른 정보예요.')]) },
                  { prompt: '체험학습 버스를 놓치지 않으려면 꼭 알아야 할 정보가 두 가지예요. 들고 들을 물음 두 개를 골라 보세요.',
                    toolOptions: { cards: [C('when', 'When does the bus leave?'), C('where', 'Where do we meet?'), C('lunch', 'What is for lunch?', '점심 메뉴를 몰라도 버스는 탈 수 있어요.'), C('guide', 'Who is our guide?', '안내하는 사람을 몰라도 버스는 탈 수 있어요.')] },
                    target: { pick: ['when', 'where'] }, difficulty: 0.2,
                    hints: ['버스를 놓치는 까닭을 떠올려 보세요. 늦게 가거나 엉뚱한 곳에 가면 놓쳐요.', '고른 물음 가운데 몰라도 버스를 탈 수 있는 것이 있는지 보세요.', '때를 묻는 When 물음과 곳을 묻는 Where 물음을 골라요.'],
                    levels: TIER([C('when', 'When does the bus leave?'), C('where', 'Where do we meet?'), C('lunch', 'What is for lunch?', '점심 메뉴를 몰라도 버스는 탈 수 있어요.'), C('guide', 'Who is our guide?', '안내하는 사람을 몰라도 버스는 탈 수 있어요.')], ['when', 'where', 'lunch'], [C('how', 'How long is the trip?', '여행이 얼마나 걸리는지는 버스를 타는 데 꼭 필요하지 않아요.')]) },
                  { prompt: '물음 카드를 읽고, 그 물음으로 찾을 정보의 종류 옆에 놓아 보세요.',
                    toolOptions: { mode: 'match', slots: [{ id: 's1', label: '때(시각·요일)' }, { id: 's2', label: '곳(장소)' }, { id: 's3', label: '사람' }, { id: 's4', label: '가져올 것' }],
                      cards: [C('q1', 'When is the concert?'), C('q2', 'Where is the concert?'), C('q3', 'Who will sing?'), C('q4', 'What should I bring?')] },
                    target: { match: { s1: 'q1', s2: 'q2', s3: 'q3', s4: 'q4' } }, difficulty: 0.15,
                    hints: ['물음의 맨 앞 낱말(묻는 말)을 동그라미 쳐 보세요. 묻는 말이 찾을 정보의 종류를 알려 줘요.', '놓은 카드의 묻는 말을 다시 보세요. When과 Where, Who와 What을 바꿔 놓지 않았나요?', 'When = 때, Where = 곳, Who = 사람, What ~ bring = 가져올 것이에요.'] },
                ],
              },
              {
                id: 'a2', title: '활동 2. 안내 방송 듣고 찾은 정보 고르기', minutes: 15, tool: 'wordcards',
                teacher: '"이번에는 듣기 전에 물음부터 읽어요. 무엇을 찾나요? 요일이에요. 그럼 요일 낱말이 나오는 대목에 귀를 모아요." 듣기 단추는 두 번까지 누르게 한다. 소리가 나지 않는 기기에서는 교사가 대본(teacherNotes)을 보통 빠르기로 두 번 읽어 준다. 모르는 낱말이 나와 멈춘 학생에게 "그 낱말은 찾을 정보가 아니에요. 계속 들어요."라고 말해 준다. 도전 단계에는 지난해 요일이나 바뀌기 전 시각 같은 함정이 들어 있으니 "바뀐 뒤의 정보"를 찾으라고 덧붙인다.',
                task: '물음을 먼저 읽고 찾을 정보를 정해요. 듣기 단추를 눌러 방송을 듣고, 찾은 정보 카드를 바구니에 넣어요.',
                levels: LV({ mode: 'listen', basket: '찾은 정보' }),
                items: [
                  { prompt: '체육 대회는 무슨 요일에 열리나요? 듣기 단추를 누르고 찾은 요일 카드를 골라 보세요.',
                    toolOptions: LISTEN('Good morning, students. Sports Day will be on Friday. Please come to the playground at nine.', [C('mon', '월요일'), C('wed', '수요일'), C('fri', '금요일'), C('sat', '토요일')], '찾은 요일'),
                    target: { listen: 'fri' }, difficulty: 0.15,
                    hints: ['요일 낱말은 모두 -day로 끝나요. -day가 들리는 대목에 귀를 모아요.', '고른 요일이 방송에서 들은 요일과 같은지 한 번 더 들어 보세요.', '"Sports Day will be on ..." 바로 뒤에 나오는 요일을 찾아요.'],
                    levels: Object.assign(TIER([C('mon', '월요일'), C('wed', '수요일'), C('fri', '금요일'), C('sat', '토요일')], ['wed', 'fri', 'sat']),
                      { challenge: { toolOptions: { say: 'Good morning, students. Last year, Sports Day was on Thursday. This year, Sports Day will be on Friday. Please come to the playground at nine.', cards: [C('mon', '월요일'), C('wed', '수요일'), C('thu', '목요일', '목요일은 지난해(last year)의 요일이에요.'), C('fri', '금요일'), C('sat', '토요일')] } } }) },
                  { prompt: '과학 동아리는 어디에서 모이나요? 듣고 찾은 곳 카드를 골라 보세요.',
                    toolOptions: LISTEN('The science club will meet in Room 3 after lunch. Please bring your notebook.', [C('r3', '3번 교실'), C('r5', '5번 교실'), C('music', '음악실'), C('gym', '체육관')], '찾은 곳'),
                    target: { listen: 'r3' }, difficulty: 0.2,
                    hints: ['곳을 알려 주는 말은 in, at 뒤에 자주 와요. in이나 at 뒤를 잘 들어요.', '고른 곳이 방송의 in 뒤에 나온 말과 같은지 다시 들어 보세요.', '"will meet in ..." 뒤에 교실 번호가 나와요.'],
                    levels: Object.assign(TIER([C('r3', '3번 교실'), C('r5', '5번 교실'), C('music', '음악실'), C('gym', '체육관')], ['r3', 'music', 'gym']),
                      { challenge: { toolOptions: { say: 'The science club will not meet in Room 5 today. It will meet in Room 3 after lunch. Please bring your notebook.' } } }) },
                  { prompt: '내일 체험학습에 가져올 것을 모두 골라 보세요. 듣기 단추를 누르세요.',
                    toolOptions: LISTEN('For the field trip tomorrow, please bring a hat and a water bottle. You don\'t need money.', [C('hat', '모자'), C('bottle', '물병'), C('money', '돈', '방송에서 돈은 필요 없다(don\'t need)고 했어요.'), C('umbrella', '우산')], '가져올 것'),
                    target: { listen: ['hat', 'bottle'] }, difficulty: 0.3,
                    hints: ['bring(가져오다) 바로 뒤에 가져올 것이 나와요. don\'t need(필요 없다) 뒤에 나온 것은 빼요.', '고른 카드 가운데 "필요 없다"고 한 것이 있는지, 빠뜨린 것이 있는지 다시 들어 보세요.', 'bring 뒤에 두 가지가 and로 이어져 나와요. 둘 다 골라요.'],
                    levels: TIER([C('hat', '모자'), C('bottle', '물병'), C('money', '돈', '방송에서 돈은 필요 없다(don\'t need)고 했어요.'), C('umbrella', '우산')], ['hat', 'bottle', 'money'], null, { say: 'For the field trip tomorrow, please bring a hat and a water bottle. It will be sunny, so you don\'t need an umbrella. You don\'t need money.' }) },
                  { prompt: '체험학습 버스는 몇 시에 도착하나요? 모르는 낱말이 있어도 시각만 찾아 골라 보세요.',
                    toolOptions: LISTEN('Attention, please. The bus for the field trip is running late. It will arrive at ten fifteen, not ten o\'clock.', [C('t1000', '10시'), C('t1015', '10시 15분'), C('t1050', '10시 50분')], '도착 시각'),
                    target: { listen: 't1015' }, difficulty: 0.3,
                    hints: ['시각은 숫자 낱말로 나와요. 숫자가 두 번 나오면 not(아니다)이 어느 쪽에 붙었는지 들어요.', '고른 시각 앞이나 뒤에 not이 붙어 있지 않았는지 다시 들어 보세요.', '"will arrive at ..." 바로 뒤의 시각이 답이고, not 뒤의 시각은 원래 계획이에요.'],
                    predict: { q: 'running late처럼 모르는 낱말이 있어도 도착 시각을 찾을 수 있을까요?', options: ['못 찾아요', '찾을 수 있어요'], answer: 1 },
                    conclude: '찾을 정보(시각)를 정하고 들으면 모르는 낱말이 있어도 그 대목을 잡을 수 있어요.' },
                ],
              },
            ],
          },
          {
            id: 'wrapup', title: '정리', minutes: 7,
            teacher: '"오늘 방송을 듣기 전에 무엇을 먼저 했나요?" 물음을 먼저 읽고 찾을 정보를 정했다는 말이 나오면 칠판의 "듣기 전: 찾을 것 정하기"에 밑줄을 긋는다. "모든 낱말을 알아들은 사람 손 들어 보세요. 그래도 답을 찾았지요?"라고 말한 뒤 출구 질문을 푼다. 1번을 틀린 학생은 다음 시간 도입에서 대본을 함께 보며 not이 붙은 자리를 짚는다.',
            exitTicket: [
              { type: 'tool', tool: 'wordcards', options: LISTEN('The art room will be closed on Wednesday. Art class will be in the library.', [C('art', '미술실'), C('lib', '도서관'), C('play', '운동장')], '수업 장소'), prompt: '수요일 미술 수업은 어디에서 하나요? 듣고 찾은 곳을 골라 보세요.', target: { listen: 'lib' }, difficulty: 0.25 },
              { type: 'choice', prompt: '영어 안내 방송에서 필요한 정보를 잘 찾는 방법은 무엇일까요?', options: ['처음부터 모든 낱말을 다 알아들으려고 한다', '찾을 정보를 먼저 정하고 그 대목에 귀를 모은다', '방송이 끝난 뒤 친구에게 물어본다'], answer: 1, difficulty: 0.1, explain: '찾을 것을 먼저 정하면 모르는 낱말이 있어도 필요한 대목이 들려요.' },
              { type: 'mood', prompt: '오늘 영어 방송 듣기는 어땠나요?' },
            ],
          },
        ],
        worksheet: {
          title: '안내 방송에서 정보 찾기',
          items: [
            { type: 'table', prompt: '선생님이 읽어 주는 방송을 듣고 찾은 정보와, 그 정보를 들은 대목(영어 낱말)을 쓰세요.', columns: ['찾을 정보', '찾은 정보', '들은 대목'], cells: [['언제 모이나요?', '', ''], ['어디에서 모이나요?', '', ''], ['무엇을 가져오나요?', '', '']], answer: '대본: The book fair is on Thursday. Meet in the gym at one. Bring a pencil. → 목요일 one, 체육관 in the gym, 연필 bring a pencil' },
            { type: 'choice', prompt: 'Where do we meet? 로 찾을 정보는 무엇인가요?', options: ['때', '곳', '사람'], answer: '곳' },
            { type: 'choice', prompt: '"It will start at three, not two." 에서 시작하는 시각은?', options: ['2시', '3시', '2시 3분'], answer: '3시' },
            { type: 'short', prompt: '내일 소풍 안내 방송을 듣는다면, 나는 어떤 정보를 먼저 찾을지 물음 하나를 영어로 쓰세요.' },
          ],
          easy: {
            note: '물음의 첫 낱말이 찾을 정보를 알려 줘요. When = 때, Where = 곳, Who = 사람.',
            items: [
              { type: 'table', prompt: '선생님이 읽어 주는 방송을 듣고 찾은 정보를 쓰세요.', columns: ['찾을 정보', '찾은 정보'], cells: [['언제?', ''], ['어디?', '']], answer: '목요일, 체육관' },
              { type: 'choice', prompt: 'When is the party? 로 찾을 정보는?', options: ['때', '곳'], answer: '때' },
              { type: 'short', prompt: '방송에서 들은 영어 낱말 하나를 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '고르는 카드가 하나 적고, 맞는 카드를 넣으면 초록 테두리가 생기며 틀린 카드는 까닭을 말하고 되돌아와요.',
          base: '카드를 다 고른 뒤 확인을 눌러 스스로 고쳐요.',
          challenge: '물음 카드에 그럴듯한 함정(wear, How long)이 더해지고, 방송에 지난해 요일·바뀌기 전 교실·필요 없는 물건 같은 함정 정보가 섞여 나와요.',
        },
        teacherNotes: '듣기 대본(소리가 없으면 교사가 두 번 읽음): 활동 2 ① Good morning, students. Sports Day will be on Friday. Please come to the playground at nine.(도전: Last year, Sports Day was on Thursday. This year, … Friday.) ② The science club will meet in Room 3 after lunch. Please bring your notebook.(도전: will not meet in Room 5 today. It will meet in Room 3 …) ③ For the field trip tomorrow, please bring a hat and a water bottle. You don\'t need money.(도전: It will be sunny, so you don\'t need an umbrella.) ④ … The bus is running late. It will arrive at ten fifteen, not ten o\'clock. 출구: The art room will be closed on Wednesday. Art class will be in the library. 자주 보이는 어려움: ① 모든 낱말을 알아들어야 한다고 여겨 모르는 낱말에서 멈춘다 → 찾을 정보를 먼저 말로 정하게 한다. ② 처음 들린 숫자·요일을 바로 고른다 → not, last year 같은 말이 붙었는지 듣게 한다. ③ 궁금한 물음을 모두 고른다 → 상황에 꼭 필요한 정보만 고르게 한다.',
      }),

      // ───────────────────────── 2차시 (practice) ─────────────────────────
      lesson(2, S07, {
        title: '일기 예보를 듣고 우리 반 계획 정하기',
        objective: '영어 일기 예보를 듣고 요일별 날씨와 기온 가운데 필요한 정보를 찾아, 그 정보로 계획(날짜·준비물·옷차림)을 고를 수 있다.',
        illustration: {
          prompt: PROMPT('a weather reporter standing beside a big map with sun, cloud, rain and snow symbols, while children plan a picnic with a calendar'),
          scene: SCENE('Weather for the Weekend', '요일과 날씨를 찾아 들어요', [
            { motif: 'sun', x: 400, y: 58, s: 0.9 }, { motif: 'cloud', x: 300, y: 70 }, { motif: 'tree', x: 70, y: 214 }, { motif: 'flower', x: 420, y: 226, color: 'peach' },
          ]),
        },
        stages: [
          {
            id: 'intro', title: '도입', minutes: 6,
            teacher: '"이번 주말에 반 소풍을 간다면 일기 예보에서 무엇을 들어야 할까요?" 요일, 날씨, 기온이 나오면 칠판에 표로 적는다. 지난 시간에 배운 "찾을 정보 먼저 정하기"를 떠올리게 하고 "It will be sunny on Saturday."를 읽어 준 뒤 "토요일 날씨만 찾는 사람은 어떤 낱말을 기다렸다가 들어야 하나요?"라고 묻는다. 예보를 다 알아들어야 날씨를 안다고 말하는 학생에게 날씨 낱말 네 개(sunny, cloudy, rainy, snowy)만 잡아도 충분하다는 것을 보인다.',
            student: '주말 소풍을 계획한다면 일기 예보에서 무엇을 찾아 들어야 할지 말해 봐요.',
            demo: { tool: 'wordcards', options: LISTEN('It will be sunny on Saturday.', [C('sun', '맑음'), C('rain', '비'), C('snow', '눈')], '토요일 날씨'), sequence: [{ at: {} }, { at: { sun: 0 } }] },
          },
          {
            id: 'main', title: '전개', minutes: 27,
            activities: [
              {
                id: 'a1', title: '활동 1. 예보에서 하나만 골라 듣기', minutes: 13, tool: 'wordcards',
                teacher: '"예보에는 여러 요일이 나와요. 물음이 묻는 요일을 손가락으로 짚고, 그 요일이 들릴 때 바로 뒤를 들어요." 기온 문항에서는 "eighteen과 eighty는 끝이 달라요. -teen은 길게 끝을 올려요."라고 두 낱말을 견주어 읽어 준다. 처음 들린 날씨를 고르는 학생에게 그 날씨가 어느 요일 것인지 다시 듣게 한다.',
                task: '물음이 묻는 요일을 먼저 찾아요. 듣기 단추를 눌러 예보를 듣고, 그 요일의 정보 카드만 골라요.',
                levels: LV({ mode: 'listen', basket: '찾은 정보' }),
                items: [
                  { prompt: '일요일 날씨는 어떤가요? 듣고 알맞은 날씨 카드를 골라 보세요.',
                    toolOptions: LISTEN('Here is the weather for the weekend. On Saturday, it will be cloudy. On Sunday, it will rain all day.', [C('sunny', '맑음'), C('cloudy', '흐림', '흐린 날씨는 토요일이에요.'), C('rainy', '비'), C('snowy', '눈')], '일요일 날씨'),
                    target: { listen: 'rainy' }, difficulty: 0.2,
                    hints: ['날씨 낱말 앞에 어느 요일이 나오는지 함께 들어요. 물음이 묻는 요일 뒤가 답이에요.', '고른 날씨가 어느 요일의 날씨였는지 다시 들어 보세요.', 'On Sunday 뒤에 나오는 rain을 찾아요.'],
                    levels: TIER([C('sunny', '맑음'), C('cloudy', '흐림', '흐린 날씨는 토요일이에요.'), C('rainy', '비'), C('snowy', '눈')], ['cloudy', 'rainy', 'sunny']) },
                  { prompt: '토요일 낮 기온은 몇 도인가요? 듣고 알맞은 카드를 골라 보세요.',
                    toolOptions: LISTEN('On Saturday, it will be warm and sunny. The temperature will be eighteen degrees.', [C('d8', '8도'), C('d18', '18도'), C('d80', '80도')], '토요일 기온'),
                    target: { listen: 'd18' }, difficulty: 0.25,
                    hints: ['기온은 degrees(도) 바로 앞에 나와요. 숫자 낱말의 끝소리까지 들어요.', '고른 숫자의 끝이 -teen(길게)인지 -ty(짧게)인지 다시 들어 보세요.', 'eighteen은 끝이 길고 힘이 들어가요. 18도예요.'],
                    levels: TIER([C('d8', '8도'), C('d18', '18도'), C('d80', '80도')], ['d18', 'd80'], [C('d28', '28도')]) },
                  { prompt: '눈이 오는 날은 무슨 요일인가요? 듣고 요일 카드를 골라 보세요.',
                    toolOptions: LISTEN('This week will be very cold. Tuesday will be windy. It will snow on Thursday, so wear warm clothes.', [C('tue', '화요일', '화요일은 바람이 부는 날이에요.'), C('wed', '수요일'), C('thu', '목요일'), C('fri', '금요일')], '눈 오는 요일'),
                    target: { listen: 'thu' }, difficulty: 0.25,
                    hints: ['이번에는 날씨(눈)를 먼저 기다렸다가, 그 날씨 가까이에 나오는 요일을 들어요.', '고른 요일 가까이에 snow가 들렸는지, windy가 들렸는지 다시 들어 보세요.', '"It will snow on ..." 뒤의 요일이 답이에요.'],
                    levels: TIER([C('tue', '화요일', '화요일은 바람이 부는 날이에요.'), C('wed', '수요일'), C('thu', '목요일'), C('fri', '금요일')], ['tue', 'thu', 'fri']) },
                ],
              },
              {
                id: 'a2', title: '활동 2. 예보를 듣고 계획 고르기', minutes: 14, tool: 'wordcards',
                teacher: '"이번에는 들은 정보를 써먹어 볼까요? 비가 오는 날 소풍을 가면 어떻게 될까요?" 예보를 듣고 바로 답이 나오지 않고 한 번 생각해야 하는 문항임을 알려 준다. 고른 까닭을 짝에게 "On ~, it will ~." 꼴로 말하게 한다. 한 요일의 날씨만 듣고 고르는 학생에게 두 요일을 모두 듣고 견주게 한다.',
                task: '예보를 듣고 찾은 정보로 계획을 골라요. 고른 까닭을 짝에게 "On ~, it will ~." 로 말해요.',
                levels: LV({ mode: 'listen', basket: '고른 계획' }),
                items: [
                  { prompt: '반 소풍을 가기 좋은 날은 언제인가요? 예보를 듣고 요일 카드를 골라 보세요.',
                    toolOptions: LISTEN('On Saturday, it will rain all day. On Sunday, it will be sunny and warm.', [C('sat', '토요일', '토요일에는 하루 종일 비가 와요.'), C('sun', '일요일')], '소풍 가는 날'),
                    target: { listen: 'sun' }, difficulty: 0.15,
                    hints: ['두 요일의 날씨를 모두 들은 뒤, 밖에서 놀기 좋은 날씨를 골라요.', '고른 요일의 날씨가 비였는지 맑음이었는지 다시 들어 보세요.', 'Sunday 뒤에 sunny and warm이 나와요.'],
                    levels: TIER([C('sat', '토요일', '토요일에는 하루 종일 비가 와요.'), C('sun', '일요일')], null, [C('fri', '금요일')], { say: 'On Friday, it will be very windy. On Saturday, it will rain all day. On Sunday, it will be sunny and warm.' }) },
                  { prompt: '내일 등굣길에 챙길 것을 골라 보세요. 예보를 듣고 필요한 물건 카드를 고르세요.',
                    toolOptions: LISTEN('Tomorrow morning will be cloudy. In the afternoon, it will rain a lot.', [C('umbrella', '우산'), C('sunglasses', '선글라스', '맑지 않고 비가 오는 날이에요.'), C('fan', '부채', '덥다는 말은 없었어요.')], '챙길 것'),
                    target: { listen: 'umbrella' }, difficulty: 0.2,
                    hints: ['아침과 오후의 날씨를 모두 들어요. 하루 가운데 한 번이라도 필요한 물건을 골라요.', '오후 날씨를 다시 들어 보세요. 아침만 듣고 고르지 않았나요?', 'In the afternoon 뒤에 rain이 나와요. 비가 오면 필요한 것을 골라요.'],
                    levels: TIER([C('umbrella', '우산'), C('sunglasses', '선글라스', '맑지 않고 비가 오는 날이에요.'), C('fan', '부채', '덥다는 말은 없었어요.')], ['umbrella', 'fan'], [C('nothing', '아무것도 필요 없음', '오후에 비가 많이 와요.')]) },
                  { prompt: '토요일 축구 경기에 무엇을 입고 가면 좋을까요? 예보를 듣고 알맞은 옷 카드를 모두 골라 보세요.',
                    toolOptions: LISTEN('On Saturday, it will be sunny but cold. The temperature will be two degrees. It will be very windy.', [C('coat', '두꺼운 외투'), C('gloves', '장갑'), C('shorts', '반바지', '2도에 바람까지 불면 추워요.'), C('raincoat', '비옷', '비 소식은 없었어요.')], '입을 옷'),
                    target: { listen: ['coat', 'gloves'] }, difficulty: 0.35,
                    hints: ['sunny만 듣고 덥다고 여기지 말고, 기온과 바람까지 들어요. 맑아도 추울 수 있어요.', '고른 옷 가운데 2도의 바람 부는 날에 맞지 않는 것이 있는지, 빠뜨린 것이 있는지 보세요.', 'cold, two degrees, windy를 모두 들었다면 따뜻하게 입는 옷 두 가지를 골라요.'],
                    predict: { q: 'sunny(맑음)라는 말이 들리면 꼭 더운 날일까요?', options: ['네, 더워요', '아니요, 기온도 들어야 해요'], answer: 1 },
                    conclude: '맑아도 기온이 2도이고 바람이 불면 추워요. 날씨 낱말 하나보다 필요한 정보를 모두 찾아 들어요.' },
                ],
              },
            ],
          },
          {
            id: 'wrapup', title: '정리', minutes: 7,
            teacher: '"오늘 예보에서 함정은 무엇이었나요?" 다른 요일의 날씨, eighteen과 eighty, 맑지만 추운 날을 학생 말로 정리한다. "물음이 묻는 요일이 나올 때까지 기다렸다가 그 뒤를 들었지요?"라고 확인한 뒤 출구 질문을 푼다. 1번에서 다른 요일의 날씨를 고른 학생은 다음 시간에 요일에 밑줄 긋고 듣기를 한 번 더 한다.',
            exitTicket: [
              { type: 'tool', tool: 'wordcards', options: LISTEN('On Monday, it will be sunny. On Tuesday, it will be cloudy and windy.', [C('sunny', '맑음'), C('cloudy', '흐리고 바람'), C('snowy', '눈')], '화요일 날씨'), prompt: '화요일 날씨는 어떤가요? 듣고 알맞은 카드를 골라 보세요.', target: { listen: 'cloudy' }, difficulty: 0.2 },
              { type: 'choice', prompt: '"It will be sunny but very cold." 를 들었어요. 가장 알맞은 준비는?', options: ['반팔과 반바지', '따뜻한 외투', '우산과 장화'], answer: 1, difficulty: 0.2, explain: '맑지만(sunny) 아주 추워요(very cold). 기온 정보까지 들어야 해요.' },
              { type: 'mood', prompt: '오늘 일기 예보 듣기는 어땠나요?' },
            ],
          },
        ],
        worksheet: {
          title: '일기 예보 듣고 계획하기',
          items: [
            { type: 'table', prompt: '선생님이 읽어 주는 예보를 듣고 요일마다 날씨와 기온을 쓰세요.', columns: ['요일', '날씨', '기온'], cells: [['Friday', '', ''], ['Saturday', '', ''], ['Sunday', '', '']], answer: '대본: On Friday, it will be cloudy, fifteen degrees. On Saturday, it will rain, twelve degrees. On Sunday, it will be sunny, twenty degrees. → 흐림 15도 / 비 12도 / 맑음 20도' },
            { type: 'choice', prompt: '위 예보에서 운동장 놀이를 하기 가장 좋은 날은?', options: ['Friday', 'Saturday', 'Sunday'], answer: 'Sunday' },
            { type: 'choice', prompt: '"fifteen" 과 "fifty" 가운데 15를 나타내는 낱말은?', options: ['fifteen', 'fifty'], answer: 'fifteen' },
            { type: 'short', prompt: '위 예보를 듣고 토요일에 챙길 것을 쓰고, 그 까닭을 "On Saturday, it will ___." 로 쓰세요.' },
          ],
          easy: {
            note: '요일 낱말이 들리면 바로 뒤의 날씨 낱말을 잡아요.',
            items: [
              { type: 'table', prompt: '선생님이 읽어 주는 예보를 듣고 날씨를 쓰세요.', columns: ['요일', '날씨'], cells: [['Saturday', ''], ['Sunday', '']], answer: '비 / 맑음' },
              { type: 'choice', prompt: 'rainy 는 어떤 날씨인가요?', options: ['맑음', '비'], answer: '비' },
              { type: 'short', prompt: '내가 좋아하는 날씨를 영어 낱말로 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '고르는 카드가 하나 적고, 맞게 고르면 초록 테두리가 생기며 틀리게 고르면 까닭을 말하고 되돌려요.',
          base: '예보를 듣고 카드를 고른 뒤 확인을 눌러 스스로 고쳐요.',
          challenge: '28도 같은 비슷한 숫자 카드, "아무것도 필요 없음" 카드가 더해지고, 소풍 날 고르기에는 세 요일의 예보가 나와요.',
        },
        teacherNotes: '듣기 대본: 활동 1 ① Here is the weather for the weekend. On Saturday, it will be cloudy. On Sunday, it will rain all day. ② On Saturday, it will be warm and sunny. The temperature will be eighteen degrees. ③ This week will be very cold. Tuesday will be windy. It will snow on Thursday, so wear warm clothes. 활동 2 ① On Saturday, it will rain all day. On Sunday, it will be sunny and warm.(도전: On Friday, it will be very windy. 을 앞에 더함) ② Tomorrow morning will be cloudy. In the afternoon, it will rain a lot. ③ On Saturday, it will be sunny but cold. The temperature will be two degrees. It will be very windy. 출구: On Monday, it will be sunny. On Tuesday, it will be cloudy and windy. 자주 보이는 어려움: ① 처음 들린 날씨를 고른다 → 물음의 요일에 밑줄을 긋고 그 요일 뒤를 듣게 한다. ② -teen과 -ty를 헷갈린다 → 손뼉으로 강세 자리를 쳐 본다(fif-TEEN, FIF-ty). ③ sunny만 듣고 덥다고 판단한다 → 기온·바람까지 듣고 판단하게 한다.',
      }),
      // ───────────────────────── 3차시 (extend) ─────────────────────────
      lesson(3, S07, {
        title: '안내문에서 답이 든 줄을 찾아 메모로 옮기기',
        objective: '영어 안내문을 처음부터 다 읽지 않고 물음의 답이 든 줄을 찾아 표시하고, 찾은 정보를 메모 칸에 옮길 수 있다.',
        illustration: {
          prompt: PROMPT('a colorful bulletin board with paper notices about a science museum, a swimming pool and a book club, and a child tracing one line with a finger'),
          scene: SCENE('Find the line!', '물음의 답이 든 줄만 찾아요', [
            { motif: 'house', x: 90, y: 216, color: 'buttercup' }, { motif: 'star', x: 400, y: 70, s: 0.7 }, { motif: 'tree', x: 420, y: 214 },
          ]),
        },
        stages: [
          {
            id: 'intro', title: '도입', minutes: 6,
            teacher: '"지난 두 시간은 귀로 정보를 찾았어요. 오늘은 눈으로 찾아요." 박물관 안내문을 화면에 띄우고 "로봇 쇼가 몇 시인지 알려면 이 안내문을 첫 줄부터 끝까지 다 읽어야 할까요?"라고 묻는다. 손가락으로 Robot Show라는 낱말을 찾아 그 줄만 읽어 보이며 "찾을 정보를 정하고, 그 정보와 이어진 낱말(Robot, p.m., won)을 눈으로 훑어요."라고 말한다. 처음부터 한 낱말씩 다 읽는 학생에게 대문자 낱말과 숫자부터 훑게 한다.',
            student: '안내문에서 로봇 쇼 시각을 찾으려면 어느 줄을 보면 될까요? 손가락으로 짚어 봐요.',
            demo: { tool: 'wordcards', options: Object.assign(PICK('답이 든 줄'), { cards: [C('name', 'City Science Museum'), C('hours', 'Hours: 10 a.m. - 6 p.m.'), C('show', 'Robot Show: 3 p.m., 2nd floor')] }), sequence: [{ at: {} }, { at: { show: 0 } }] },
          },
          {
            id: 'main', title: '전개', minutes: 27,
            activities: [
              {
                id: 'a1', title: '활동 1. 물음의 답이 든 줄 고르기', minutes: 13, tool: 'wordcards',
                teacher: '"물음에서 열쇠 낱말을 먼저 찾아요. 입장료라면 Tickets나 won, 몇 층이면 floor가 열쇠예요." 열쇠 낱말을 공책에 적게 한 뒤 안내문 카드를 훑게 한다. 열쇠 낱말과 비슷한 줄을 두 개 고르는 학생에게 "그 줄이 물음에 정말 답을 주나요?"라고 되묻는다. 예를 들어 수영 모자를 판다는 줄은 모자를 꼭 써야 하는지에 답하지 않는다.',
                task: '물음의 열쇠 낱말을 먼저 정하고, 안내문 카드를 훑어 답이 든 줄 하나만 골라요.',
                levels: LV(PICK('답이 든 줄')),
                items: [
                  { prompt: '과학관 안내문이에요. 어린이 입장료를 알려 주는 줄을 골라 보세요.',
                    toolOptions: { cards: ['City Science Museum', 'Open: Tuesday - Sunday', 'Hours: 10 a.m. - 6 p.m.', 'Tickets: Adults 5,000 won, Children 2,000 won', 'Robot Show: 3 p.m., 2nd floor'] },
                    target: { pick: ['Tickets: Adults 5,000 won, Children 2,000 won'] }, difficulty: 0.15,
                    hints: ['입장료는 돈이에요. 돈을 나타내는 낱말(won)이나 표를 뜻하는 낱말이 있는 줄을 훑어요.', '고른 줄에 돈의 단위가 있는지 다시 보세요.', 'Tickets로 시작하는 줄에 Children(어린이) 값이 있어요.'],
                    levels: TIER(['City Science Museum', 'Open: Tuesday - Sunday', 'Hours: 10 a.m. - 6 p.m.', 'Tickets: Adults 5,000 won, Children 2,000 won', 'Robot Show: 3 p.m., 2nd floor'], ['City Science Museum', 'Tickets: Adults 5,000 won, Children 2,000 won', 'Robot Show: 3 p.m., 2nd floor'], [C('Gift Shop: 1st floor, toys from 3,000 won', 'Gift Shop: 1st floor, toys from 3,000 won', '이 줄의 won은 장난감 값이에요. 입장료가 아니에요.')]) },
                  { prompt: '같은 과학관 안내문이에요. 로봇 쇼가 몇 층에서 열리는지 알려 주는 줄을 골라 보세요.',
                    toolOptions: { cards: ['City Science Museum', 'Open: Tuesday - Sunday', 'Hours: 10 a.m. - 6 p.m.', 'Robot Show: 3 p.m., 2nd floor', 'No food or drinks inside'] },
                    target: { pick: ['Robot Show: 3 p.m., 2nd floor'] }, difficulty: 0.15,
                    hints: ['층을 나타내는 낱말 floor를 찾아 훑어요.', '고른 줄에 floor가 들어 있는지 다시 보세요.', 'Robot Show 줄 끝에 몇 층인지 나와요.'],
                    levels: TIER(['City Science Museum', 'Open: Tuesday - Sunday', 'Hours: 10 a.m. - 6 p.m.', 'Robot Show: 3 p.m., 2nd floor', 'No food or drinks inside'], ['Hours: 10 a.m. - 6 p.m.', 'Robot Show: 3 p.m., 2nd floor', 'No food or drinks inside'], [C('Cafe: 3rd floor', 'Cafe: 3rd floor', '이 줄의 floor는 카페가 있는 층이에요.')]) },
                  { prompt: '과학관 안에서 간식을 먹어도 되는지 알려 주는 줄을 골라 보세요.',
                    toolOptions: { cards: ['City Science Museum', 'Hours: 10 a.m. - 6 p.m.', 'Robot Show: 3 p.m., 2nd floor', 'No food or drinks inside', 'Please walk, do not run'] },
                    target: { pick: ['No food or drinks inside'] }, difficulty: 0.2,
                    hints: ['간식은 먹을 것이에요. 먹을 것이나 마실 것을 뜻하는 낱말이 든 줄을 찾아요.', '고른 줄이 "먹는 일"에 대해 말하는지 다시 읽어 보세요.', 'food(음식)와 drinks(음료)가 든 줄이 답이에요.'],
                    levels: TIER(['City Science Museum', 'Hours: 10 a.m. - 6 p.m.', 'Robot Show: 3 p.m., 2nd floor', 'No food or drinks inside', 'Please walk, do not run'], ['City Science Museum', 'No food or drinks inside', 'Please walk, do not run']) },
                  { prompt: '수영장 안내문이에요. 수영 모자를 꼭 써야 하는지 알려 주는 줄을 골라 보세요.',
                    toolOptions: { cards: ['Sunny Swimming Pool', 'Summer Hours: 9 a.m. - 8 p.m.', 'Swim caps are a must', 'Kids lessons: Monday and Wednesday', 'Free parking'] },
                    target: { pick: ['Swim caps are a must'] }, difficulty: 0.25,
                    hints: ['물음의 열쇠는 "모자"와 "꼭"이에요. 모자를 뜻하는 낱말이 든 줄을 찾고, 그 줄이 "꼭"에 답하는지 보세요.', '고른 줄이 모자를 꼭 써야 한다고 말하는지, 다른 것을 말하는지 다시 읽어 보세요.', 'a must는 "꼭 해야 하는 것"이에요. Swim caps로 시작하는 줄이에요.'],
                    levels: TIER(['Sunny Swimming Pool', 'Summer Hours: 9 a.m. - 8 p.m.', 'Swim caps are a must', 'Kids lessons: Monday and Wednesday', 'Free parking'], ['Sunny Swimming Pool', 'Swim caps are a must', 'Free parking'], [C('You can buy swim caps at the shop', 'You can buy swim caps at the shop', '모자를 살 수 있다는 줄이에요. 꼭 써야 하는지는 말하지 않아요.')]) },
                ],
              },
              {
                id: 'a2', title: '활동 2. 찾은 정보를 메모 칸에 옮기기', minutes: 14, tool: 'story',
                teacher: '"이번에는 짧은 안내 글을 읽고 메모를 완성해요. 메모 칸의 이름(Date, Time, Place)이 곧 찾을 정보예요." 글 안에 시각이나 장소가 두 개씩 나오는 함정이 있음을 알리고, 각각이 무엇의 시각·장소인지 밑줄을 긋게 한다. 1:30을 시작 시각으로 고르는 학생에게 12:30 - 1:30에서 어느 쪽이 시작인지 다시 읽게 한다.',
                task: '글을 읽고 메모 칸의 빈칸에 알맞은 정보 카드를 넣어요. 글에 두 번 나오는 정보는 무엇의 정보인지 따져요.',
                levels: LV({ mode: 'fill', title: 'My Memo' }),
                items: [
                  { prompt: '"Book Club: Come and read with us on Saturday at 2 p.m. in Room 101. Bring your favorite book!" 를 읽고 메모를 완성하세요.',
                    toolOptions: { slots: [{ id: 'day', label: 'Day: ___' }, { id: 'time', label: 'Time: ___' }, { id: 'place', label: 'Place: ___' }], cards: ['Saturday', 'Sunday', '2 p.m.', '12 p.m.', 'Room 101', 'Room 110'] },
                    target: { fill: { day: 'Saturday', time: '2 p.m.', place: 'Room 101' } }, difficulty: 0.15,
                    hints: ['메모 칸 이름이 찾을 정보예요. 요일은 -day로, 시각은 p.m.으로, 장소는 Room으로 글에서 찾아요.', '넣은 카드의 숫자가 글의 숫자와 똑같은지 한 글자씩 견주어 보세요.', '글에는 on Saturday, at 2 p.m., in Room 101이 나와요.'],
                    levels: TIER(['Saturday', 'Sunday', '2 p.m.', '12 p.m.', 'Room 101', 'Room 110'], ['Saturday', '2 p.m.', 'Room 101', 'Sunday']) },
                  { prompt: '"Bake Sale! May 9, 12:30 - 1:30, in front of the gym. All money goes to the animal shelter." 를 읽고 메모를 완성하세요.',
                    toolOptions: { slots: [{ id: 'date', label: 'Date: ___' }, { id: 'start', label: 'Starts at: ___' }, { id: 'place', label: 'Place: ___' }],
                      cards: ['May 9', 'May 19', '12:30', C('1:30', '1:30', '1:30은 끝나는 시각이에요.'), 'in front of the gym', C('the animal shelter', 'the animal shelter', '동물 보호소는 모은 돈이 가는 곳이에요. 빵을 파는 곳이 아니에요.')] },
                    target: { fill: { date: 'May 9', start: '12:30', place: 'in front of the gym' } }, difficulty: 0.3,
                    hints: ['시각이 두 개(시작·끝), 장소가 두 개(파는 곳·돈이 가는 곳) 나와요. 메모 칸이 묻는 것이 어느 쪽인지 정하고 넣어요.', '넣은 시각이 시작인지 끝인지, 넣은 장소가 빵을 파는 곳인지 다시 읽어 보세요.', '12:30 - 1:30에서 앞이 시작이에요. 빵은 체육관 앞(in front of the gym)에서 팔아요.'],
                    levels: TIER(['May 9', 'May 19', '12:30', C('1:30', '1:30', '1:30은 끝나는 시각이에요.'), 'in front of the gym', C('the animal shelter', 'the animal shelter', '동물 보호소는 모은 돈이 가는 곳이에요. 빵을 파는 곳이 아니에요.')], ['May 9', '12:30', '1:30', 'in front of the gym']) },
                  { prompt: '"Lost Dog! Name: Coco. Small and white with a red collar. Last seen near Green Park on Monday." 를 읽고 메모를 완성하세요.',
                    toolOptions: { slots: [{ id: 'name', label: 'Name: ___' }, { id: 'color', label: 'Dog\'s color: ___' }, { id: 'where', label: 'Last seen: ___' }],
                      cards: ['Coco', 'white', C('red', 'red', 'red는 목걸이(collar)의 색이에요.'), 'near Green Park', 'Monday'] },
                    target: { fill: { name: 'Coco', color: 'white', where: 'near Green Park' } }, difficulty: 0.3,
                    hints: ['색 낱말이 두 개 나와요. 각 색 낱말 바로 뒤에 무엇이 오는지 보고 개의 색을 정해요.', '넣은 색이 개의 색인지 목걸이의 색인지 다시 읽어 보세요. Last seen에는 요일이 아니라 장소가 와요.', 'Small and white는 개, a red collar는 목걸이예요. 마지막으로 본 곳은 near Green Park예요.'],
                    predict: { q: '글에 red(빨강)가 나오니 개는 빨간색일까요?', options: ['네, 빨간 개예요', '아니요, 무엇의 색인지 봐야 해요'], answer: 1 },
                    conclude: '색 낱말 뒤에 오는 말(collar)까지 읽어야 누구의 색인지 알 수 있어요.' },
                ],
              },
            ],
          },
          {
            id: 'wrapup', title: '정리', minutes: 7,
            teacher: '"오늘 안내문을 첫 줄부터 다 읽은 사람이 있나요? 무엇을 먼저 찾았나요?" 열쇠 낱말(won, floor, food, p.m.)을 정하고 그 줄만 읽었다는 것을 정리한다. "숫자나 색이 두 번 나오면 무엇의 정보인지 따졌지요?"라고 묻고 출구 질문을 푼다. 1번을 틀린 학생은 안내문의 열쇠 낱말에 동그라미 치기를 다음 시간 도입에서 다시 한다.',
            exitTicket: [
              { type: 'tool', tool: 'wordcards', options: { mode: 'pick', basket: '답이 든 줄', shuffle: false, cards: ['Green Town Zoo', 'Open: 9 a.m. - 5 p.m.', 'Panda Talk: 11 a.m., Panda House', 'Feeding the animals is not allowed'] }, prompt: '동물원 안내문이에요. 판다 이야기 시간이 몇 시인지 알려 주는 줄을 골라 보세요.', target: { pick: ['Panda Talk: 11 a.m., Panda House'] }, difficulty: 0.15 },
              { type: 'choice', prompt: '"Concert: 6:00 - 7:30 p.m." 에서 음악회가 시작하는 시각은?', options: ['6:00', '7:30', '6:30'], answer: 0, difficulty: 0.2, explain: '6:00 - 7:30에서 앞이 시작, 뒤가 끝나는 시각이에요.' },
              { type: 'mood', prompt: '오늘 안내문에서 정보 찾기는 어땠나요?' },
            ],
          },
        ],
        worksheet: {
          title: '안내문에서 정보 찾기',
          items: [
            { type: 'short', prompt: '안내문을 읽고, 물음의 답이 든 줄에 밑줄을 그으세요: Art Class for Kids / Every Thursday, 4 - 5 p.m. / Room 7, Community Center / Price: 3,000 won — 물음: 수업은 어디에서 하나요?', answer: 'Room 7, Community Center 에 밑줄' },
            { type: 'table', prompt: '위 안내문을 읽고 메모를 완성하세요.', columns: ['메모', '찾은 정보'], cells: [['Day', ''], ['Time', ''], ['Price', '']], answer: 'Thursday / 4 - 5 p.m. / 3,000 won' },
            { type: 'choice', prompt: '"Last seen near the bakery." 에서 Last seen 다음에 오는 정보는?', options: ['때', '곳', '색'], answer: '곳' },
            { type: 'short', prompt: '안내문에서 정보를 빨리 찾으려면 무엇을 먼저 할지 한 문장으로 쓰세요.' },
          ],
          easy: {
            note: '물음의 열쇠 낱말(won = 돈, floor = 층, p.m. = 시각)을 먼저 찾아요.',
            items: [
              { type: 'short', prompt: '물음의 답이 든 줄에 밑줄을 그으세요: Art Class for Kids / Every Thursday / Room 7 — 물음: 무슨 요일인가요?', answer: 'Every Thursday' },
              { type: 'choice', prompt: '"Price: 3,000 won" 은 무엇을 알려 주나요?', options: ['값', '시각'], answer: '값' },
              { type: 'short', prompt: '안내문에서 찾은 영어 낱말 하나를 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '안내문 줄이 셋으로 줄고, 맞는 줄을 넣으면 초록 테두리가 생기며 틀린 줄은 까닭을 말하고 되돌아와요.',
          base: '안내문 줄을 모두 보고 고른 뒤 확인을 눌러 스스로 고쳐요.',
          challenge: '열쇠 낱말이 같은 함정 줄(장난감 값 won, 카페 floor, 모자를 살 수 있는 곳)이 더해져서, 줄이 정말 물음에 답하는지 따져야 해요.',
        },
        teacherNotes: '이 차시는 읽기로 특정 정보 찾기(훑어 읽기)를 한다. 안내문 카드는 순서를 섞지 않고 실제 안내문 차례대로 보인다. 자주 보이는 어려움: ① 첫 줄부터 한 낱말씩 다 읽는다 → 물음의 열쇠 낱말을 먼저 정하게 한다. ② 열쇠 낱말이 있는 줄이면 무조건 고른다 → "그 줄이 물음에 답을 주나요?"로 되묻는다. ③ 두 번 나오는 숫자·색·장소 가운데 먼저 나온 것을 넣는다 → 각 정보가 무엇의 정보인지 밑줄로 이어 보게 한다. 안내문 속 기관·동물 이름은 모두 지어낸 것이다.',
      }),

      // ───────────────────────── 4차시 (extend) ─────────────────────────
      lesson(4, S07, {
        title: '음성 메시지와 문자에서 약속 정보 찾아 메모하기',
        objective: '친구의 영어 음성 메시지와 문자를 들거나 읽고, 약속에 필요한 정보(무엇을·언제·어디서·챙길 것)를 하나씩 찾아 메모를 완성할 수 있다.',
        illustration: {
          prompt: PROMPT('a child holding a phone with a voice message bubble and a sticky note memo pad, with a movie ticket and a bus stop sign in the background'),
          scene: SCENE('Voice Message', '찾을 정보를 바꿔 다시 들어요', [
            { motif: 'moon', x: 410, y: 60, s: 0.7 }, { motif: 'house', x: 90, y: 216, color: 'lavender' }, { motif: 'star', x: 330, y: 64, s: 0.5 },
          ]),
        },
        stages: [
          {
            id: 'intro', title: '도입', minutes: 6,
            teacher: '"친구가 영어로 음성 메시지를 남겼어요. 한 번 듣고 시각, 장소, 챙길 것을 모두 기억할 수 있을까요?" 대부분 어렵다고 하면 "그래서 오늘은 한 번에 하나씩, 찾을 정보를 바꿔 가며 다시 들어요."라고 말한다. 시연으로 "Let\'s meet at the bus stop."을 들려주고 곳을 고르게 한다. 한 번에 다 잡아야 잘 듣는 것이라고 여기는 학생에게 실제로도 메시지는 여러 번 다시 듣는다는 것을 말해 준다.',
            student: '음성 메시지를 한 번 듣고 시각·장소·챙길 것을 다 기억할 수 있을지 생각해 봐요.',
            demo: { tool: 'wordcards', options: LISTEN('Let\'s meet at the bus stop.', [C('bus', '버스 정류장'), C('park', '공원'), C('school', '학교')], '만나는 곳'), sequence: [{ at: {} }, { at: { bus: 0 } }] },
          },
          {
            id: 'main', title: '전개', minutes: 27,
            activities: [
              {
                id: 'a1', title: '활동 1. 한 메시지를 찾을 정보 바꿔 가며 듣기', minutes: 14, tool: 'wordcards',
                teacher: '"네 문항 모두 같은 메시지예요. 문항마다 찾을 정보만 바뀌어요." 첫 문항 전에 메시지를 한 번 끝까지 들려주고 "무슨 이야기인지 대충 알겠나요?"라고 묻는다. 그다음 문항마다 찾을 정보를 소리 내어 말한 뒤 듣게 한다. 만나는 시각에서 4시 30분(영화 시작)을 고르는 학생에게 "그 시각은 무엇의 시각이었나요?"라고 묻는다.',
                task: '같은 음성 메시지를 문항마다 다시 들어요. 이번 문항에서 찾을 정보 하나에만 귀를 모아 카드를 골라요.',
                levels: LV({ mode: 'listen', basket: '찾은 정보' }),
                items: [
                  { prompt: '톰은 무엇을 하자고 하나요? 듣고 알맞은 카드를 골라 보세요.',
                    toolOptions: LISTEN('Hi, Mina. It\'s Tom. Let\'s go to the movies on Saturday. The movie starts at four thirty. Let\'s meet at the bus stop at four. Don\'t forget your student card!', [C('movie', '영화 보기'), C('bus', '버스 여행', '버스 정류장은 만나는 곳이에요.'), C('study', '함께 공부하기')], '하자는 일'),
                    target: { listen: 'movie' }, difficulty: 0.15,
                    hints: ['Let\'s(~하자) 뒤에 하자는 일이 나와요. 첫 Let\'s를 잘 들어요.', '고른 일이 Let\'s 뒤에 나온 일인지, 만나는 곳인지 다시 들어 보세요.', 'Let\'s go to the movies는 영화 보러 가자는 말이에요.'],
                    levels: TIER([C('movie', '영화 보기'), C('bus', '버스 여행', '버스 정류장은 만나는 곳이에요.'), C('study', '함께 공부하기')], ['movie', 'study']) },
                  { prompt: '같은 메시지예요. 두 사람은 몇 시에 만나나요? 듣고 시각 카드를 골라 보세요.',
                    toolOptions: LISTEN('Hi, Mina. It\'s Tom. Let\'s go to the movies on Saturday. The movie starts at four thirty. Let\'s meet at the bus stop at four. Don\'t forget your student card!', [C('t4', '4시'), C('t430', '4시 30분', '4시 30분은 영화가 시작하는 시각이에요.'), C('t330', '3시 30분')], '만나는 시각'),
                    target: { listen: 't4' }, difficulty: 0.3,
                    hints: ['시각이 두 번 나와요. meet(만나다)와 함께 나오는 시각을 찾아요.', '고른 시각 앞에 starts(시작하다)가 있었는지 meet가 있었는지 다시 들어 보세요.', '"Let\'s meet at the bus stop at four." 의 시각이 만나는 시각이에요.'],
                    levels: TIER([C('t4', '4시'), C('t430', '4시 30분', '4시 30분은 영화가 시작하는 시각이에요.'), C('t330', '3시 30분')], null, [C('t14', '4시 14분')]) },
                  { prompt: '같은 메시지예요. 두 사람은 어디에서 만나나요? 듣고 곳 카드를 골라 보세요.',
                    toolOptions: LISTEN('Hi, Mina. It\'s Tom. Let\'s go to the movies on Saturday. The movie starts at four thirty. Let\'s meet at the bus stop at four. Don\'t forget your student card!', [C('stop', '버스 정류장'), C('theater', '영화관', '영화는 거기서 보지만 만나는 곳은 아니에요.'), C('home', '미나네 집')], '만나는 곳'),
                    target: { listen: 'stop' }, difficulty: 0.25,
                    hints: ['meet 뒤 at이나 in 다음에 곳이 나와요.', '고른 곳이 영화를 보는 곳인지 만나는 곳인지 다시 들어 보세요.', 'meet at the bus stop이 만나는 곳이에요.'],
                    levels: TIER([C('stop', '버스 정류장'), C('theater', '영화관', '영화는 거기서 보지만 만나는 곳은 아니에요.'), C('home', '미나네 집')], ['stop', 'home']) },
                  { prompt: '같은 메시지예요. 미나가 꼭 챙겨야 할 것은 무엇인가요? 듣고 카드를 골라 보세요.',
                    toolOptions: LISTEN('Hi, Mina. It\'s Tom. Let\'s go to the movies on Saturday. The movie starts at four thirty. Let\'s meet at the bus stop at four. Don\'t forget your student card!', [C('card', '학생증'), C('ticket', '영화표'), C('snack', '간식'), C('phone', '휴대 전화')], '챙길 것'),
                    target: { listen: 'card' }, difficulty: 0.25,
                    hints: ['Don\'t forget(잊지 마) 뒤에 챙길 것이 나와요. 메시지 끝부분을 잘 들어요.', '고른 물건이 Don\'t forget 뒤에 나왔는지 다시 들어 보세요.', 'Don\'t forget your student card! 의 student card는 학생증이에요.'],
                    predict: { q: '메시지를 네 번째 듣는 지금, 처음보다 더 잘 들릴까요?', options: ['처음과 같아요', '더 잘 들려요'], answer: 1 },
                    conclude: '찾을 정보를 바꿔 가며 다시 들으면 메시지 전체가 점점 또렷하게 들려요.' },
                ],
              },
              {
                id: 'a2', title: '활동 2. 바뀐 약속 문자 읽고 메모 고치기', minutes: 13, tool: 'story',
                teacher: '"약속이 바뀌었다는 문자가 왔어요. 바뀌기 전 정보와 바뀐 뒤 정보가 함께 나와요." instead(대신에), not, change 같은 낱말 뒤에 바뀐 정보가 온다는 것을 칠판에 적는다. 바뀌기 전 정보를 메모에 넣은 학생에게 "그 정보 앞에 can\'t나 not이 붙어 있지 않나요?"라고 묻는다.',
                task: '친구의 문자를 읽고 메모 빈칸에 바뀐 뒤의 정보 카드를 넣어요.',
                levels: LV({ mode: 'fill', title: 'Our Plan' }),
                items: [
                  { prompt: '"Sorry, I can\'t meet at 3. Can we meet at 5 instead? Let\'s meet at the park, not the library." 를 읽고 메모를 고치세요.',
                    toolOptions: { slots: [{ id: 'time', label: 'Time: ___' }, { id: 'place', label: 'Place: ___' }], cards: [C('5 p.m.', '5 p.m.'), C('3 p.m.', '3 p.m.', '3시에는 만날 수 없다(can\'t)고 했어요.'), 'the park', C('the library', 'the library', 'not the library — 도서관이 아니라고 했어요.')] },
                    target: { fill: { time: '5 p.m.', place: 'the park' } }, difficulty: 0.2,
                    hints: ['can\'t, not 뒤의 정보는 바뀌기 전 정보예요. instead(대신)와 함께 나온 정보를 찾아요.', '넣은 카드 앞에 can\'t나 not이 붙어 있지 않은지 다시 읽어 보세요.', 'meet at 5 instead, meet at the park — 바뀐 시각과 곳이에요.'],
                    levels: TIER([C('5 p.m.', '5 p.m.'), C('3 p.m.', '3 p.m.', '3시에는 만날 수 없다(can\'t)고 했어요.'), 'the park', C('the library', 'the library', 'not the library — 도서관이 아니라고 했어요.')], null, [C('4 p.m.', '4 p.m.'), C('the zoo', 'the zoo')]) },
                  { prompt: '"Our soccer game is on Sunday now, not Saturday. It starts at 10. Bring water, not juice!" 를 읽고 메모를 고치세요.',
                    toolOptions: { slots: [{ id: 'day', label: 'Day: ___' }, { id: 'time', label: 'Starts at: ___' }, { id: 'bring', label: 'Bring: ___' }], cards: ['Sunday', C('Saturday', 'Saturday', 'not Saturday — 토요일이 아니라고 했어요.'), '10 a.m.', '11 a.m.', 'water', C('juice', 'juice', 'not juice — 주스가 아니라고 했어요.')] },
                    target: { fill: { day: 'Sunday', time: '10 a.m.', bring: 'water' } }, difficulty: 0.25,
                    hints: ['not 앞에 있는 것이 바뀐 뒤 정보, not 뒤에 있는 것이 아닌 정보예요.', '넣은 요일과 마실 것이 not 뒤에 있던 것은 아닌지 다시 읽어 보세요.', 'on Sunday now, starts at 10, Bring water — 이 셋을 넣어요.'],
                    levels: TIER(['Sunday', C('Saturday', 'Saturday', 'not Saturday — 토요일이 아니라고 했어요.'), '10 a.m.', '11 a.m.', 'water', C('juice', 'juice', 'not juice — 주스가 아니라고 했어요.')], ['Sunday', 'Saturday', '10 a.m.', 'water']) },
                  { prompt: '"Change of plan! The class party will be in the music room. It will end at 2:30, not 2:00." 를 읽고 메모를 고치세요.',
                    toolOptions: { slots: [{ id: 'place', label: 'Place: ___' }, { id: 'end', label: 'Ends at: ___' }], cards: ['the music room', 'our classroom', '2:30', C('2:00', '2:00', 'not 2:00 — 2시가 아니라고 했어요.')] },
                    target: { fill: { place: 'the music room', end: '2:30' } }, difficulty: 0.25,
                    hints: ['Change of plan(계획 변경)은 바뀐 정보가 온다는 신호예요. 끝나는 시각에서는 not이 어느 쪽에 붙었는지 보세요.', '넣은 시각 앞에 not이 붙어 있지 않은지 다시 읽어 보세요.', 'in the music room, end at 2:30 이 바뀐 정보예요.'],
                    levels: TIER(['the music room', 'our classroom', '2:30', C('2:00', '2:00', 'not 2:00 — 2시가 아니라고 했어요.')], null, [C('3:30', '3:30')]) },
                ],
              },
            ],
          },
          {
            id: 'wrapup', title: '정리', minutes: 7,
            teacher: '"오늘 같은 메시지를 몇 번 들었나요? 네 번째에는 어땠나요?" 다시 들을수록 더 잘 들렸다는 말을 받아 "한 번에 다 잡지 않아도 돼요. 찾을 정보를 바꿔 다시 들으면 돼요."라고 정리한다. 바뀐 정보를 알려 주는 낱말(instead, not, change)을 함께 말해 본 뒤 출구 질문을 푼다.',
            exitTicket: [
              { type: 'tool', tool: 'wordcards', options: LISTEN('Hi, it\'s Jisu. Let\'s play badminton on Sunday at ten. Meet me at the gym, not the park.', [C('gym', '체육관'), C('park', '공원'), C('pool', '수영장')], '만나는 곳'), prompt: '지수는 어디에서 만나자고 하나요? 듣고 곳 카드를 골라 보세요.', target: { listen: 'gym' }, difficulty: 0.25 },
              { type: 'choice', prompt: '"Let\'s meet at 6, not 7." 에서 만나는 시각은?', options: ['6시', '7시', '6시 7분'], answer: 0, difficulty: 0.15, explain: 'not 뒤의 7시는 아닌 시각이에요.' },
              { type: 'mood', prompt: '오늘 메시지 듣고 메모하기는 어땠나요?' },
            ],
          },
        ],
        worksheet: {
          title: '약속 메모 완성하기',
          items: [
            { type: 'table', prompt: '선생님이 읽어 주는 음성 메시지를 듣고 메모를 완성하세요.', columns: ['메모', '찾은 정보'], cells: [['What', ''], ['When', ''], ['Where', ''], ['Bring', '']], answer: '대본: Hi, it\'s Leo. Let\'s go swimming on Friday at three. Meet me at the pool. Bring a towel! → 수영 / 금요일 3시 / 수영장 / 수건' },
            { type: 'choice', prompt: '"Can we meet at the library instead?" 에서 instead가 알려 주는 것은?', options: ['처음 약속 그대로', '약속이 바뀐 것', '약속을 없앤 것'], answer: '약속이 바뀐 것' },
            { type: 'blank', prompt: '"The party is on Friday, not Thursday." → 파티 요일: ___' },
            { type: 'short', prompt: '친구에게 약속을 바꾸는 문자를 영어로 한 줄 쓰세요. (instead 또는 not 을 넣어요)' },
          ],
          easy: {
            note: 'not 뒤의 정보는 "아닌 것"이에요. 메시지는 몇 번이든 다시 들어도 돼요.',
            items: [
              { type: 'table', prompt: '선생님이 읽어 주는 메시지를 듣고 쓰세요.', columns: ['메모', '찾은 정보'], cells: [['When', ''], ['Where', '']], answer: '금요일 3시 / 수영장' },
              { type: 'choice', prompt: '"Meet me at 5, not 4." 에서 만나는 시각은?', options: ['5시', '4시'], answer: '5시' },
              { type: 'short', prompt: '메시지에서 들은 영어 낱말 하나를 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '고르는 카드가 하나 적고, 맞게 넣으면 초록 테두리가 생기며 틀린 카드는 까닭을 말하고 되돌아와요.',
          base: '메시지를 다시 들으며 고른 뒤 확인을 눌러 스스로 고쳐요.',
          challenge: '비슷한 함정 카드(4시 14분, 4 p.m., the zoo, 3:30)가 더해져서 들은·읽은 정보를 끝까지 정확히 견주어야 해요.',
        },
        teacherNotes: '듣기 대본(활동 1의 네 문항은 같은 메시지): Hi, Mina. It\'s Tom. Let\'s go to the movies on Saturday. The movie starts at four thirty. Let\'s meet at the bus stop at four. Don\'t forget your student card! 출구: Hi, it\'s Jisu. Let\'s play badminton on Sunday at ten. Meet me at the gym, not the park. 자주 보이는 어려움: ① 한 번에 모든 정보를 잡으려다 아무것도 못 잡는다 → 문항마다 찾을 정보 하나만 말로 정하게 한다. ② 시각이 둘 나오면 먼저 들린 것을 고른다 → meet와 함께 나온 시각인지 확인하게 한다. ③ not·can\'t 뒤의 옛 정보를 메모한다 → 바뀐 정보 신호 낱말(instead, not, change)에 동그라미를 친다. 메시지 속 이름은 모두 가명이다.',
      }),

      // ───────────────────────── 5차시 (core) ─────────────────────────
      lesson(5, S07, {
        title: '제목과 그림으로 나올 낱말 짐작하고 들으며 확인하기',
        objective: '이야기를 듣기 전에 제목과 그림을 보고 나올 낱말을 짐작하고, 들으며 실제로 나온 낱말을 골라 짐작과 견줄 수 있다.',
        illustration: {
          prompt: PROMPT('a sunny summer beach with sand, big waves, a small crab and a sunscreen bottle, with a book title banner reading A Day at the Beach'),
          scene: SCENE('A Day at the Beach', '듣기 전에 짐작해요', [
            { motif: 'sun', x: 410, y: 56, s: 0.9 }, { motif: 'wave', y: 230 }, { motif: 'bird', x: 300, y: 70 },
          ]),
        },
        stages: [
          {
            id: 'intro', title: '도입', minutes: 7,
            teacher: '"오늘 들을 이야기의 제목은 A Day at the Beach예요. 그림에는 해가 쨍쨍한 여름 바닷가가 있어요. 무슨 낱말이 나올까요?" 학생이 말한 낱말을 칠판에 영어로 적는다(sand, sea, swim…). "듣기 전에 이렇게 짐작하면 무엇이 좋을까요?" 곧바로 듣기부터 하자는 학생이 있으면, 같은 이야기를 짐작 없이 한 번, 짐작 뒤에 한 번 들으면 어느 쪽이 더 잘 들리는지 오늘 견주어 보자고 한다. "짐작이 틀려도 괜찮아요. 들으며 고치면 돼요."',
            student: '제목 A Day at the Beach 와 바닷가 그림을 보고 이야기에 나올 영어 낱말을 짐작해 말해 봐요.',
            demo: { tool: 'wordcards', options: { mode: 'sort', slots: [{ id: 'fit', label: '제목·그림에 어울려요' }, { id: 'no', label: '어울리지 않아요' }], cards: ['sand', 'snowman'] }, sequence: [{ at: {} }, { at: { sand: 0, snowman: 1 } }] },
          },
          {
            id: 'main', title: '전개', minutes: 26,
            activities: [
              {
                id: 'a1', title: '활동 1. 제목과 그림에 어울리는 낱말 짐작하기', minutes: 11, tool: 'wordcards',
                teacher: '"제목과 그림을 보고, 이야기에 나올 만한 낱말과 나오기 어려운 낱말로 나누어요." 낱말 뜻을 모르는 학생에게는 짝과 함께 소리 내어 읽고 뜻을 떠올리게 한다. "이 칸에 넣은 낱말이 꼭 나온다는 뜻은 아니에요. 나올 만하다는 짐작이에요."라고 미리 말해 둔다.',
                task: '제목과 그림 설명을 읽고, 낱말 카드를 "어울려요"와 "어울리지 않아요" 칸으로 나누어요.',
                levels: LV({ mode: 'sort', slots: [{ id: 'fit', label: '제목·그림에 어울려요' }, { id: 'no', label: '어울리지 않아요' }] }),
                items: [
                  { prompt: '제목: A Day at the Beach (그림: 해가 쨍쨍한 여름 바닷가). 낱말 카드를 두 칸으로 나누어 보세요.',
                    toolOptions: { cards: ['sand', 'waves', 'swimsuit', C('snowman', 'snowman', '여름 바닷가 그림에 눈사람은 어울리지 않아요.'), C('ski', 'ski', '스키는 눈 덮인 산에서 타요.')] },
                    target: { sort: { fit: ['sand', 'waves', 'swimsuit'], no: ['snowman', 'ski'] } }, difficulty: 0.1,
                    hints: ['낱말마다 뜻을 떠올리고, 그것을 여름 바닷가 그림 안에 넣어 보세요. 그림에 자연스럽게 들어가면 어울리는 낱말이에요.', '어울리지 않는 칸에 넣은 낱말을 바닷가 그림에 다시 넣어 보세요. 정말 이상한가요?', '모래·파도·수영복은 바닷가에, 눈사람·스키는 겨울 산에 어울려요.'],
                    levels: { easy: EZSORT('제목: A Day at the Beach (그림: 해가 쨍쨍한 여름 바닷가). 낱말 카드 세 장을 두 칸으로 나누어 보세요.', ['sand', 'waves', 'swimsuit', C('snowman', 'snowman', '여름 바닷가 그림에 눈사람은 어울리지 않아요.'), C('ski', 'ski', '스키는 눈 덮인 산에서 타요.')], { sort: { fit: ['sand', 'waves', 'swimsuit'], no: ['snowman', 'ski'] } }, ['sand', 'waves', 'snowman']) } },
                  { prompt: '제목: My Birthday Party (그림: 케이크와 풍선이 있는 거실). 낱말 카드를 두 칸으로 나누어 보세요.',
                    toolOptions: { cards: ['cake', 'candles', 'present', 'balloons', C('homework', 'homework', '숙제는 생일 파티 그림에 어울리지 않아요.'), C('raincoat', 'raincoat', '비옷은 거실 파티 그림에 어울리지 않아요.')] },
                    target: { sort: { fit: ['cake', 'candles', 'present', 'balloons'], no: ['homework', 'raincoat'] } }, difficulty: 0.15,
                    hints: ['생일 파티에서 보거나 하는 것을 떠올려 보세요. 그 장면에 들어가는 낱말이 어울리는 낱말이에요.', '어울린다고 넣은 낱말 가운데 파티 그림에 넣으면 어색한 것이 있는지 보세요.', '케이크·초·선물·풍선은 생일 파티에, 숙제·비옷은 다른 장면에 어울려요.'],
                    levels: { easy: EZSORT('제목: My Birthday Party (그림: 케이크와 풍선이 있는 거실). 낱말 카드 네 장을 두 칸으로 나누어 보세요.', ['cake', 'candles', 'present', 'balloons', C('homework', 'homework', '숙제는 생일 파티 그림에 어울리지 않아요.'), C('raincoat', 'raincoat', '비옷은 거실 파티 그림에 어울리지 않아요.')], { sort: { fit: ['cake', 'candles', 'present', 'balloons'], no: ['homework', 'raincoat'] } }, ['cake', 'present', 'homework', 'raincoat']),
                      challenge: { prompt: '제목: My Birthday Party (그림: 케이크와 풍선이 있는 거실). 카드가 한 장 늘었어요. 두 칸으로 나누어 보세요.', toolOptions: { cards: ['cake', 'candles', 'present', 'balloons', C('homework', 'homework', '숙제는 생일 파티 그림에 어울리지 않아요.'), C('raincoat', 'raincoat', '비옷은 거실 파티 그림에 어울리지 않아요.'), C('dentist', 'dentist', '치과 의사는 생일 파티 그림에 어울리지 않아요.')] }, target: { sort: { fit: ['cake', 'candles', 'present', 'balloons'], no: ['homework', 'raincoat', 'dentist'] } } } } },
                  { prompt: '제목: Camping in the Forest (그림: 밤 숲속의 텐트와 모닥불). 낱말 카드를 두 칸으로 나누어 보세요.',
                    toolOptions: { cards: ['tent', 'campfire', 'flashlight', 'stars', C('elevator', 'elevator', '숲속 캠핑장에는 엘리베이터가 없어요.'), C('subway', 'subway', '지하철은 도시에서 타요.')] },
                    target: { sort: { fit: ['tent', 'campfire', 'flashlight', 'stars'], no: ['elevator', 'subway'] } }, difficulty: 0.2,
                    hints: ['밤 숲속 캠핑에서 쓰거나 보는 것을 떠올려 보세요.', '어울린다고 넣은 낱말이 도시에서만 보는 것은 아닌지 다시 보세요.', '텐트·모닥불·손전등·별은 캠핑에, 엘리베이터·지하철은 도시에 어울려요.'],
                    levels: { easy: EZSORT('제목: Camping in the Forest (그림: 밤 숲속의 텐트와 모닥불). 낱말 카드 세 장을 두 칸으로 나누어 보세요.', ['tent', 'campfire', 'flashlight', 'stars', C('elevator', 'elevator', '숲속 캠핑장에는 엘리베이터가 없어요.'), C('subway', 'subway', '지하철은 도시에서 타요.')], { sort: { fit: ['tent', 'campfire', 'flashlight', 'stars'], no: ['elevator', 'subway'] } }, ['tent', 'campfire', 'subway']) } },
                ],
              },
              {
                id: 'a2', title: '활동 2. 들으며 실제로 나온 낱말 고르기', minutes: 15, tool: 'wordcards',
                teacher: '"방금 짐작한 이야기를 이제 들어 봐요. 실제로 나온 것만 골라요. 짐작했지만 나오지 않은 것도 있을 거예요." 듣기 단추는 두 번까지 누르게 한다. 다 고른 뒤 "짐작한 낱말 가운데 몇 개가 나왔나요? 짐작하지 못한 것은 무엇이었나요?"라고 묻고 공책에 적게 한다. 짐작한 낱말을 들은 것처럼 고르는 학생에게 "짐작과 들은 것은 달라요. 정말 들렸나요?"라고 묻는다.',
                task: '듣기 단추를 눌러 이야기를 듣고, 이야기에 실제로 나온 것의 카드를 모두 골라요. 짐작만 하고 나오지 않은 것은 고르지 않아요.',
                levels: LV({ mode: 'listen', basket: '실제로 나온 것' }),
                items: [
                  { prompt: 'A Day at the Beach 를 들어요. 이야기에 실제로 나온 것을 모두 골라 보세요.',
                    toolOptions: LISTEN('Yesterday my family went to the beach. The sand was hot, so I ran to the water. The waves were big! My sister found a small crab. We forgot our sunscreen, so my nose got red.', [C('sand', '모래'), C('waves', '파도'), C('crab', '게'), C('sunscreen', '선크림'), C('swimsuit', '수영복', '수영복은 짐작했지만 이야기에 나오지 않았어요.'), C('shell', '조개껍데기', '조개껍데기는 이야기에 나오지 않았어요.')], '실제로 나온 것'),
                    target: { listen: ['sand', 'waves', 'crab', 'sunscreen'] }, difficulty: 0.3,
                    hints: ['카드를 먼저 보고 "이 낱말이 들리면 고르자"고 정한 뒤 들어요. 짐작만 하고 안 들린 것은 고르지 않아요.', '고른 카드 가운데 정말 들리지 않은 것이 있는지, 들렸는데 빠뜨린 것이 있는지 한 번 더 들어 보세요.', '이야기에는 sand, waves, crab, sunscreen이 나와요.'],
                    levels: TIER([C('sand', '모래'), C('waves', '파도'), C('crab', '게'), C('sunscreen', '선크림'), C('swimsuit', '수영복', '수영복은 짐작했지만 이야기에 나오지 않았어요.'), C('shell', '조개껍데기', '조개껍데기는 이야기에 나오지 않았어요.')], ['sand', 'waves', 'crab', 'sunscreen', 'swimsuit']),
                    predict: { q: '듣기 전에 짐작한 낱말은 모두 이야기에 나올까요?', options: ['모두 나와요', '나오지 않는 것도 있어요'], answer: 1 },
                    conclude: '짐작이 다 맞지는 않아요. 그래도 짐작한 낱말 덕분에 sand와 waves가 들리자마자 잡혔어요.' },
                  { prompt: 'My Birthday Party 를 들어요. 이야기에 실제로 나온 것을 모두 골라 보세요.',
                    toolOptions: LISTEN('Today is my birthday. Mom made a chocolate cake. I blew out twelve candles. My friends gave me a puzzle and a book. It was the best day!', [C('cake', '케이크'), C('candles', '초'), C('puzzle', '퍼즐'), C('book', '책'), C('balloons', '풍선', '풍선은 짐작했지만 이야기에 나오지 않았어요.'), C('puppy', '강아지', '강아지는 이야기에 나오지 않았어요.')], '실제로 나온 것'),
                    target: { listen: ['cake', 'candles', 'puzzle', 'book'] }, difficulty: 0.3,
                    hints: ['선물이 무엇이었는지는 gave me(나에게 주었다) 뒤에 나와요. 짐작한 풍선이 정말 들리는지도 들어 봐요.', '고른 카드 하나하나가 이야기에서 들렸는지 다시 들어 보세요.', '케이크, 초, 그리고 gave me 뒤의 puzzle과 book이 나와요.'],
                    levels: TIER([C('cake', '케이크'), C('candles', '초'), C('puzzle', '퍼즐'), C('book', '책'), C('balloons', '풍선', '풍선은 짐작했지만 이야기에 나오지 않았어요.'), C('puppy', '강아지', '강아지는 이야기에 나오지 않았어요.')], ['cake', 'candles', 'puzzle', 'book', 'puppy']) },
                  { prompt: 'Camping in the Forest 를 들어요. 이야기에 실제로 나온 것을 모두 골라 보세요.',
                    toolOptions: LISTEN('We set up our tent near a lake. At night, we cooked sausages over the campfire. I saw many stars and heard an owl.', [C('tent', '텐트'), C('campfire', '모닥불'), C('stars', '별'), C('owl', '부엉이'), C('flashlight', '손전등', '손전등은 짐작했지만 이야기에 나오지 않았어요.'), C('bear', '곰', '곰은 이야기에 나오지 않았어요.')], '실제로 나온 것'),
                    target: { listen: ['tent', 'campfire', 'stars', 'owl'] }, difficulty: 0.35,
                    hints: ['짐작하지 못한 낱말도 나올 수 있어요. 카드에 있는 것이 들리는지 하나씩 들어요.', '고른 카드 가운데 짐작만 하고 들리지 않은 것이 있는지 다시 들어 보세요.', '텐트, 모닥불, 별, 그리고 마지막에 들린 owl이 나와요.'],
                    levels: TIER([C('tent', '텐트'), C('campfire', '모닥불'), C('stars', '별'), C('owl', '부엉이'), C('flashlight', '손전등', '손전등은 짐작했지만 이야기에 나오지 않았어요.'), C('bear', '곰', '곰은 이야기에 나오지 않았어요.')], ['tent', 'campfire', 'stars', 'owl', 'bear'], [C('lake', '호수')]) },
                ],
              },
            ],
          },
          {
            id: 'wrapup', title: '정리', minutes: 7,
            teacher: '"짐작하고 들으니 어땠나요? 짐작하지 않고 들었을 때와 무엇이 달랐나요?" 학생 말을 듣고 "짐작한 낱말은 들리자마자 잡혀요. 짐작이 틀려도 들으며 고치면 돼요."라고 정리한다. 도전 단계의 lake처럼 짐작 밖의 낱말이 나와도 놀라지 않아도 된다고 말한 뒤 출구 질문을 푼다.',
            exitTicket: [
              { type: 'tool', tool: 'wordcards', options: { mode: 'sort', slots: [{ id: 'fit', label: '제목·그림에 어울려요' }, { id: 'no', label: '어울리지 않아요' }], cards: ['snow', 'mittens', 'sled', 'sunscreen'] }, prompt: '제목: A Snowy Day (그림: 눈 덮인 마을의 아이들). 낱말 카드를 두 칸으로 나누어 보세요.', target: { sort: { fit: ['snow', 'mittens', 'sled'], no: ['sunscreen'] } }, difficulty: 0.15 },
              { type: 'choice', prompt: '듣기 전에 짐작한 낱말이 이야기에 나오지 않았어요. 어떻게 하면 좋을까요?', options: ['짐작은 쓸모없으니 다음부터 하지 않는다', '들은 내용으로 짐작을 고친다', '들은 것을 무시하고 짐작대로 답한다'], answer: 1, difficulty: 0.1, explain: '짐작은 들을 준비예요. 들으며 맞으면 확인하고, 다르면 고쳐요.' },
              { type: 'mood', prompt: '오늘 짐작하고 듣기는 어땠나요?' },
            ],
          },
        ],
        worksheet: {
          title: '짐작하고 들으며 확인하기',
          items: [
            { type: 'table', prompt: '제목 "A Trip to the Zoo" 와 동물원 그림을 보고 나올 것 같은 영어 낱말 다섯 개를 쓰세요. 선생님이 이야기를 읽어 주면, 실제로 나온 낱말에 ○ 하세요.', columns: ['짐작한 낱말', '나왔나요? (○/×)'], rows: 5, answer: '대본: We went to the zoo by bus. First, we saw a tall giraffe. The monkeys were very noisy. A lion was sleeping under a tree. I bought an ice cream at the gift shop.' },
            { type: 'short', prompt: '짐작하지 못했는데 이야기에 나온 낱말을 쓰세요.' },
            { type: 'choice', prompt: '제목 "Our School Garden" 에 가장 어울리지 않는 낱말은?', options: ['seeds', 'water', 'flowers', 'subway'], answer: 'subway' },
            { type: 'short', prompt: '짐작하고 들었을 때 좋았던 점을 한 문장으로 쓰세요.' },
          ],
          easy: {
            note: '제목과 그림 속에서 볼 수 있는 것을 영어로 떠올려요.',
            items: [
              { type: 'table', prompt: '"A Trip to the Zoo" 에 나올 것 같은 낱말 세 개를 쓰고, 이야기를 들으며 나온 낱말에 ○ 하세요.', columns: ['짐작한 낱말', '○/×'], rows: 3 },
              { type: 'choice', prompt: '동물원 이야기에 어울리는 낱말은?', options: ['giraffe', 'snowman'], answer: 'giraffe' },
              { type: 'short', prompt: '이야기에서 들은 낱말 하나를 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드 수가 줄고, 맞는 칸·카드에 놓으면 초록 테두리가 생기며 틀리면 까닭을 말하고 되돌아와요.',
          base: '나누거나 고른 뒤 확인을 눌러 스스로 고쳐요.',
          challenge: '어울리지 않는 낱말(dentist)과 짐작하지 못한 낱말(lake)이 더해져서, 짐작이 아니라 실제로 들은 것으로 골라야 해요.',
        },
        teacherNotes: '듣기 대본: ① Yesterday my family went to the beach. The sand was hot, so I ran to the water. The waves were big! My sister found a small crab. We forgot our sunscreen, so my nose got red. ② Today is my birthday. Mom made a chocolate cake. I blew out twelve candles. My friends gave me a puzzle and a book. It was the best day! ③ We set up our tent near a lake. At night, we cooked sausages over the campfire. I saw many stars and heard an owl. 활동 1의 "어울려요" 칸은 나올 만하다는 짐작이지, 꼭 나온다는 뜻이 아니다. 어울리지 않는 낱말은 그림(여름·거실·밤 숲)과 분명히 맞지 않는 것만 골랐다. 자주 보이는 어려움: ① 짐작을 시간 낭비로 여겨 곧바로 듣는다 → 짐작한 낱말이 들리는 순간을 손을 들어 표시하게 한다. ② 짐작한 낱말을 들은 것처럼 고른다(swimsuit, balloons) → 들은 것과 짐작한 것을 공책에 두 줄로 나누어 적게 한다. ③ 짐작이 틀리면 실패라고 여긴다 → 짐작은 들을 준비라고 말해 준다.',
      }),

      // ───────────────────────── 6차시 (practice) ─────────────────────────
      lesson(6, S07, {
        title: '대화의 첫 마디로 장소와 다음 말 짐작하기',
        objective: '대화의 첫 마디를 듣고 대화가 일어나는 곳과 이어질 말을 짐작한 뒤, 대화를 끝까지 들으며 짐작을 확인하거나 고칠 수 있다.',
        illustration: {
          prompt: PROMPT('four small scenes side by side: a doctor with a patient, a waiter with a menu, a librarian at a desk and a ticket counter at a train station, each with a speech bubble'),
          scene: SCENE('Can I help you?', '첫 마디로 짐작해요', [
            { motif: 'house', x: 80, y: 216, color: 'peach' }, { motif: 'house', x: 400, y: 216, color: 'mint' }, { motif: 'sun', x: 410, y: 56, s: 0.7 },
          ]),
        },
        stages: [
          {
            id: 'intro', title: '도입', minutes: 6,
            teacher: '"What\'s wrong? 이 말이 들리면 어디일까요?" 병원, 보건실이라는 대답이 나오면 "그다음에는 어떤 말이 이어질까요?"라고 묻는다. "I have a headache." 같은 말을 짐작해 보게 한 뒤, 첫 마디로 장소와 다음 말을 짐작하는 것이 듣기 전 준비가 된다고 말한다. "Can I help you?"처럼 여러 곳에서 쓰는 첫 마디도 있다는 것을 미리 짚는다.',
            student: 'What\'s wrong? 이라는 말이 들리면 어디에서 하는 대화일지, 다음에 어떤 말이 올지 짐작해 봐요.',
            demo: { tool: 'wordcards', options: { mode: 'match', slots: [{ id: 's1', label: 'What\'s wrong?' }], cards: [C('r1', 'I have a headache.'), C('r2', 'It\'s ten dollars.')] }, sequence: [{ at: {} }, { at: { r1: 0 } }] },
          },
          {
            id: 'main', title: '전개', minutes: 27,
            activities: [
              {
                id: 'a1', title: '활동 1. 첫 마디와 이어질 말 짝 짓기', minutes: 13, tool: 'wordcards',
                teacher: '"첫 마디를 소리 내어 읽고, 그 말에 가장 자연스럽게 이어지는 대답을 찾아요." 짝 지은 뒤 짝과 한 줄씩 주고받아 읽게 한다. 첫 마디의 묻는 말(What, Where, How much)과 대답이 맞는지 따지게 하고, 낱말 하나가 같다고 짝 짓는 학생(time—What time is the train?)에게 대답이 물음에 정말 답하는지 묻는다.',
                task: '첫 마디 옆에 이어질 대답 카드를 놓아요. 짝 지은 뒤 짝과 주고받아 읽어요.',
                levels: LV({ mode: 'match' }),
                items: [
                  { prompt: '식당·가게·병원에서 들은 첫 마디예요. 첫 마디마다 이어질 대답을 짝 지어 보세요.',
                    toolOptions: { slots: [{ id: 's1', label: 'Are you ready to order?' }, { id: 's2', label: 'How much is this cap?' }, { id: 's3', label: 'What\'s wrong?' }],
                      cards: [C('r1', 'Yes, I\'d like noodle soup, please.'), C('r2', 'It\'s twelve dollars.'), C('r3', 'I have a sore throat.')] },
                    target: { match: { s1: 'r1', s2: 'r2', s3: 'r3' } }, difficulty: 0.15,
                    hints: ['첫 마디가 무엇을 묻는지(주문, 값, 아픈 곳) 먼저 말해 보고, 그 물음에 답하는 카드를 찾아요.', '짝 지은 대답이 첫 마디의 물음에 정말 답하는지 소리 내어 이어 읽어 보세요.', '주문 → I\'d like…, 값 → dollars, 아픈 곳 → sore throat이에요.'],
                    levels: TIER([C('r1', 'Yes, I\'d like noodle soup, please.'), C('r2', 'It\'s twelve dollars.'), C('r3', 'I have a sore throat.')], null, [C('rx', 'I\'m twelve years old.', '나이를 말하는 대답이에요. 값을 묻는 물음에 맞지 않아요.')]) },
                  { prompt: '길·시각·빌리기를 묻는 첫 마디예요. 첫 마디마다 이어질 대답을 짝 지어 보세요.',
                    toolOptions: { slots: [{ id: 's1', label: 'Where is the post office?' }, { id: 's2', label: 'What time does the train leave?' }, { id: 's3', label: 'Can I borrow this book?' }],
                      cards: [C('r1', 'Go straight and turn left.'), C('r2', 'It leaves at 3:15.'), C('r3', 'Sure. Bring it back in two weeks.')] },
                    target: { match: { s1: 'r1', s2: 'r2', s3: 'r3' } }, difficulty: 0.2,
                    hints: ['Where는 곳·길, What time은 시각, Can I는 해도 되는지 묻는 말이에요. 묻는 말에 맞는 대답을 찾아요.', '짝 지은 대답이 묻는 말(Where, What time, Can I)과 맞는지 다시 보세요.', '길 안내 → Go straight…, 시각 → at 3:15, 빌리기 → Sure…예요.'],
                    levels: TIER([C('r1', 'Go straight and turn left.'), C('r2', 'It leaves at 3:15.'), C('r3', 'Sure. Bring it back in two weeks.')], null, [C('rx', 'It\'s a long book.', '책이 길다는 말은 빌려도 되는지에 대한 대답이 아니에요.')]) },
                  { prompt: '"At the Doctor\'s" 그림(진료실의 의사와 아이)에 어울리는 말을 모두 골라 보세요.',
                    toolOptions: { mode: 'pick', basket: '진료실에서 들을 말', cards: [C('d1', 'What\'s wrong?'), C('d2', 'Take this medicine.'), C('d3', 'Get some rest.'), C('x1', 'Can I try this on?', '옷 가게에서 옷을 입어 볼 때 하는 말이에요.'), C('x2', 'One ticket to Busan, please.', '기차역에서 표를 살 때 하는 말이에요.')] },
                    target: { pick: ['d1', 'd2', 'd3'] }, difficulty: 0.2,
                    hints: ['진료실에서 의사와 환자가 주고받을 말을 떠올려 보세요. 다른 곳에서 하는 말은 빼요.', '고른 말 가운데 옷 가게나 기차역에서 할 말이 섞여 있지 않은지 보세요.', '아픈 곳 묻기, 약 먹기, 쉬기가 진료실의 말이에요.'],
                    levels: TIER([C('d1', 'What\'s wrong?'), C('d2', 'Take this medicine.'), C('d3', 'Get some rest.'), C('x1', 'Can I try this on?', '옷 가게에서 옷을 입어 볼 때 하는 말이에요.'), C('x2', 'One ticket to Busan, please.', '기차역에서 표를 살 때 하는 말이에요.')], ['d1', 'd2', 'd3', 'x1']) },
                ],
              },
              {
                id: 'a2', title: '활동 2. 첫 마디로 짐작하고 끝까지 들으며 장소 확인하기', minutes: 14, tool: 'wordcards',
                teacher: '"문항 글의 첫 마디만 보고 먼저 장소를 짐작해서 예상 단추를 눌러요. 그다음 대화를 끝까지 듣고 진짜 장소를 골라요." Can I help you? 문항에서는 짐작이 빗나간 학생이 많을 것이다. "첫 마디가 여러 곳에서 쓰이는 말이면, 그 뒤 낱말(book, shelf)로 짐작을 고쳐요."라고 말해 준다. 짐작이 틀려서 속상해하는 학생에게 짐작을 고친 것이 오늘의 목표라고 말해 준다.',
                task: '첫 마디로 장소를 짐작해 예상을 고르고, 듣기 단추로 대화를 끝까지 들어 진짜 장소 카드를 골라요.',
                levels: LV({ mode: 'listen', basket: '대화 장소' }),
                items: [
                  { prompt: '첫 마디는 "Next, please. What\'s wrong?" 이에요. 대화를 끝까지 듣고 장소를 골라 보세요.',
                    toolOptions: LISTEN('Next, please. What\'s wrong? — I have a bad cough. — Let me see. Take this medicine three times a day.', [C('clinic', '병원'), C('restaurant', '식당'), C('shop', '옷 가게')], '대화 장소'),
                    target: { listen: 'clinic' }, difficulty: 0.15,
                    hints: ['첫 마디 뒤에 나오는 낱말(아픈 곳, 약)이 장소를 알려 줘요.', '고른 장소에서 medicine(약)이라는 말을 할지 생각해 보세요.', 'cough(기침), medicine(약)이 나오니 병원이에요.'],
                    predict: { q: '첫 마디만 듣고 짐작한 장소는?', options: ['병원', '식당', '옷 가게'], answer: 0 },
                    conclude: '첫 마디로 한 짐작을 뒤의 낱말(cough, medicine)로 확인했어요.',
                    levels: TIER([C('clinic', '병원'), C('restaurant', '식당'), C('shop', '옷 가게')], ['clinic', 'shop'], [C('pharmacy', '약국', '약국에서는 What\'s wrong?을 묻고 진찰하지 않아요. Let me see는 진찰하는 말이에요.')]) },
                  { prompt: '첫 마디는 "Can I help you?" 예요. 대화를 끝까지 듣고 장소를 골라 보세요.',
                    toolOptions: LISTEN('Can I help you? — Yes, I\'m looking for a book about space. — Books about space are on the second shelf. You can borrow three books.', [C('library', '도서관'), C('shop', '옷 가게', 'Can I help you?는 가게에서도 쓰지만 뒤에 borrow(빌리다)가 나와요.'), C('station', '기차역')], '대화 장소'),
                    target: { listen: 'library' }, difficulty: 0.3,
                    hints: ['Can I help you?는 여러 곳에서 써요. 첫 마디가 아니라 뒤에 나오는 낱말로 장소를 정해요.', '고른 장소에서 borrow(빌리다)나 shelf(책꽂이)라는 말을 할지 생각해 보세요.', 'book, shelf, borrow가 나오니 책을 빌리는 곳이에요.'],
                    predict: { q: 'Can I help you? 만 듣고 짐작한 장소는?', options: ['가게', '도서관', '기차역'] },
                    conclude: '첫 마디가 여러 곳에서 쓰이는 말이면 뒤의 낱말(book, borrow)로 짐작을 고쳐요.',
                    levels: TIER([C('library', '도서관'), C('shop', '옷 가게', 'Can I help you?는 가게에서도 쓰지만 뒤에 borrow(빌리다)가 나와요.'), C('station', '기차역')], ['library', 'station'], [C('bookstore', '서점', '서점에서는 책을 사요. borrow(빌리다)가 나오면 빌리는 곳이에요.')]) },
                  { prompt: '첫 마디는 "Next, please." 예요. 대화를 끝까지 듣고 장소를 골라 보세요.',
                    toolOptions: LISTEN('Next, please. — Two tickets to Busan, please. — Here you are. The train leaves from platform four at three o\'clock.', [C('station', '기차역'), C('clinic', '병원', 'Next, please는 병원에서도 쓰지만 뒤에 train(기차)이 나와요.'), C('cinema', '영화관')], '대화 장소'),
                    target: { listen: 'station' }, difficulty: 0.25,
                    hints: ['Next, please는 차례를 부르는 말이라 여러 곳에서 써요. 뒤에 나오는 낱말을 들어요.', '고른 장소에 train(기차)과 platform(타는 곳)이 있는지 생각해 보세요.', 'tickets to Busan, train, platform이 나오니 기차역이에요.'],
                    levels: TIER([C('station', '기차역'), C('clinic', '병원', 'Next, please는 병원에서도 쓰지만 뒤에 train(기차)이 나와요.'), C('cinema', '영화관')], ['station', 'clinic']) },
                  { prompt: '첫 마디는 "Excuse me." 예요. 대화를 끝까지 듣고 장소를 골라 보세요.',
                    toolOptions: LISTEN('Excuse me. Do you have this shirt in a bigger size? — Yes, here is a large. The fitting room is over there.', [C('shop', '옷 가게'), C('library', '도서관'), C('restaurant', '식당')], '대화 장소'),
                    target: { listen: 'shop' }, difficulty: 0.25,
                    hints: ['Excuse me는 어디서나 쓰는 말이에요. 뒤에 나오는 물건과 크기 이야기를 들어요.', '고른 장소에서 size(크기)와 fitting room(탈의실)이라는 말을 할지 생각해 보세요.', 'shirt, bigger size, fitting room이 나오니 옷 가게예요.'],
                    levels: TIER([C('shop', '옷 가게'), C('library', '도서관'), C('restaurant', '식당')], ['shop', 'restaurant']) },
                ],
              },
            ],
          },
          {
            id: 'wrapup', title: '정리', minutes: 7,
            teacher: '"짐작이 맞은 대화와 빗나간 대화가 있었지요? 빗나갔을 때 무엇으로 고쳤나요?" 뒤에 나온 낱말로 고쳤다는 말을 받아 "첫 마디는 짐작을 시작하는 곳, 뒤의 낱말은 확인하는 곳"이라고 칠판에 적는다. 출구 질문을 풀게 하고, 2번을 틀린 학생은 다음 시간에 첫 마디가 여러 곳에서 쓰이는 예를 더 들어 본다.',
            exitTicket: [
              { type: 'tool', tool: 'wordcards', options: LISTEN('Hello. Here is the menu. — Thank you. I\'ll have a cheese pizza and an orange juice, please.', [C('restaurant', '식당'), C('library', '도서관'), C('clinic', '병원')], '대화 장소'), prompt: '대화를 끝까지 듣고, 대화가 일어나는 곳을 골라 보세요.', target: { listen: 'restaurant' }, difficulty: 0.15 },
              { type: 'choice', prompt: '"Can I help you?" 로 시작한 대화의 장소를 알려면 어떻게 해야 할까요?', options: ['첫 마디만 듣고 바로 정한다', '뒤에 나오는 낱말까지 듣고 정한다', '장소는 알 수 없으니 듣지 않는다'], answer: 1, difficulty: 0.15, explain: 'Can I help you?는 가게·도서관·역 어디서나 써요. 뒤의 낱말로 정해요.' },
              { type: 'mood', prompt: '오늘 첫 마디로 짐작하기는 어땠나요?' },
            ],
          },
        ],
        worksheet: {
          title: '첫 마디로 짐작하기',
          items: [
            { type: 'table', prompt: '첫 마디를 읽고 장소를 짐작해 쓰세요. 선생님이 대화를 끝까지 읽어 주면 진짜 장소를 쓰세요.', columns: ['첫 마디', '짐작한 장소', '진짜 장소'], cells: [['What\'s wrong?', '', ''], ['Can I help you?', '', ''], ['Next, please.', '', '']], answer: '대본: ② Can I help you? — I want to send this letter to Jeju. — That will be 2,000 won. → 우체국 / ③ Next, please. — One popcorn and a cola, please. → 영화관 매점 / ① What\'s wrong? — My dog won\'t eat. → 동물 병원' },
            { type: 'choice', prompt: '"How much is it?" 다음에 올 말로 알맞은 것은?', options: ['It\'s five dollars.', 'It\'s five o\'clock.', 'I\'m five.'], answer: 'It\'s five dollars.' },
            { type: 'choice', prompt: '"You can borrow two books." 를 들을 수 있는 곳은?', options: ['식당', '도서관', '옷 가게'], answer: '도서관' },
            { type: 'short', prompt: '짐작이 빗나간 대화 하나를 골라, 어떤 낱말을 듣고 짐작을 고쳤는지 쓰세요.' },
          ],
          easy: {
            note: '첫 마디로 짐작하고, 뒤에 나오는 낱말로 확인해요.',
            items: [
              { type: 'table', prompt: '선생님이 읽어 주는 대화를 듣고 장소를 쓰세요.', columns: ['첫 마디', '진짜 장소'], cells: [['What\'s wrong?', ''], ['Next, please.', '']], answer: '동물 병원 / 영화관 매점' },
              { type: 'choice', prompt: '"What\'s wrong?" 을 자주 듣는 곳은?', options: ['병원', '식당'], answer: '병원' },
              { type: 'short', prompt: '오늘 들은 첫 마디 하나를 영어로 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드 수가 줄고, 맞게 놓으면 초록 테두리가 생기며 틀리면 까닭을 말하고 되돌아와요.',
          base: '짝 짓거나 고른 뒤 확인을 눌러 스스로 고쳐요.',
          challenge: '그럴듯한 함정 대답(I\'m twelve years old., It\'s a long book.)과 비슷한 장소 카드(약국, 서점)가 더해져서 뒤의 낱말까지 정확히 들어야 해요.',
        },
        teacherNotes: '듣기 대본(— 은 말하는 사람이 바뀜): ① Next, please. What\'s wrong? — I have a bad cough. — Let me see. Take this medicine three times a day. ② Can I help you? — Yes, I\'m looking for a book about space. — Books about space are on the second shelf. You can borrow three books. ③ Next, please. — Two tickets to Busan, please. — Here you are. The train leaves from platform four at three o\'clock. ④ Excuse me. Do you have this shirt in a bigger size? — Yes, here is a large. The fitting room is over there. 출구: Hello. Here is the menu. — Thank you. I\'ll have a cheese pizza and an orange juice, please. 활동 2의 예상(predict)은 채점하지 않는다. ②번 첫 마디는 일부러 여러 곳에서 쓰는 말이라 예상 정답을 두지 않았다. 자주 보이는 어려움: ① 듣기 전 짐작을 건너뛰고 바로 듣는다 → 예상 단추를 고르기 전에는 확인이 잠긴다는 것을 이용한다. ② 첫 마디로 정한 장소를 끝까지 고집한다 → 뒤의 낱말을 공책에 적고 장소를 다시 정하게 한다. ③ 낱말 하나가 같다고 짝 짓는다 → 대답이 물음에 정말 답하는지 이어 읽게 한다.',
      }),
      // ───────────────────────── 7차시 (extend) ─────────────────────────
      lesson(7, S07, {
        title: '물음을 먼저 읽고 답의 종류 짐작하며 듣기',
        objective: '듣기 전에 물음을 읽고 답이 어떤 종류(수·때·곳·예/아니요)일지 짐작한 뒤, 사육사의 안내를 들으며 물음에 맞는 답을 고를 수 있다.',
        illustration: {
          prompt: PROMPT('a zookeeper talking to children in front of a bamboo forest where two pandas are eating, with question cards floating above the children'),
          scene: SCENE('Welcome to Panda House', '물음을 먼저 읽어요', [
            { motif: 'tree', x: 70, y: 214 }, { motif: 'tree', x: 420, y: 214 }, { motif: 'leaf', x: 250, y: 226 }, { motif: 'sun', x: 410, y: 56, s: 0.7 },
          ]),
        },
        stages: [
          {
            id: 'intro', title: '도입', minutes: 6,
            teacher: '"How old is the panda? 이 물음의 답은 어떤 모양일까요? 수일까요, 곳일까요?" 수라는 대답이 나오면 "그럼 들을 때 숫자 낱말을 기다리면 되겠네요."라고 말한다. 듣기 평가에도 물음을 먼저 읽을 시간이 있다는 것을 떠올리게 하고, "물음을 먼저 읽으면 무엇을 기다릴지 알 수 있어요."라고 정리한다. 물음 읽기를 건너뛰고 듣기 단추부터 누르는 학생이 많을 수 있으니 오늘은 물음 소리 내어 읽기를 먼저 하자고 약속한다.',
            student: 'How old is the panda? 의 답은 어떤 모양일지 짐작해 봐요. 수일까요, 곳일까요?',
            demo: { tool: 'wordcards', options: { mode: 'sort', slots: [{ id: 'num', label: '수' }, { id: 'place', label: '곳' }], cards: ['How old is the panda?', 'Where is the panda?'] }, sequence: [{ at: {} }, { at: { 'How old is the panda?': 0, 'Where is the panda?': 1 } }] },
          },
          {
            id: 'main', title: '전개', minutes: 27,
            activities: [
              {
                id: 'a1', title: '활동 1. 물음을 답의 종류로 나누기', minutes: 12, tool: 'wordcards',
                teacher: '"물음의 맨 앞 두세 낱말이 답의 모양을 알려 줘요. How many, How old는 수, When, What time은 때, Where는 곳, Can, Is로 시작하면 예/아니요예요." 칠판에 네 칸을 그리고 함께 하나씩 넣어 본다. What으로 시작하면 무조건 물건이라고 여기는 학생에게 What time은 때를 묻는다는 것을 짚는다.',
                task: '물음 카드를 소리 내어 읽고, 답이 어떤 종류일지 짐작해 알맞은 칸에 넣어요.',
                levels: LV({ mode: 'sort', slots: [{ id: 'num', label: '수' }, { id: 'time', label: '때' }, { id: 'place', label: '곳' }, { id: 'yn', label: '예/아니요' }] }),
                items: [
                  { prompt: '동물원 안내를 듣기 전에 읽을 물음들이에요. 답의 종류에 따라 나누어 보세요.',
                    toolOptions: { cards: ['How many pandas are there?', 'When does the zoo close?', 'Where can we eat lunch?', 'Can we feed the animals?'] },
                    target: { sort: { num: ['How many pandas are there?'], time: ['When does the zoo close?'], place: ['Where can we eat lunch?'], yn: ['Can we feed the animals?'] } }, difficulty: 0.15,
                    hints: ['물음의 맨 앞 낱말에 동그라미를 쳐 보세요. 그 낱말이 답의 모양을 알려 줘요.', '넣은 카드의 맨 앞 낱말을 다시 보세요. Can으로 시작하는 물음은 어떤 대답을 바라나요?', 'How many = 수, When = 때, Where = 곳, Can = 예/아니요예요.'] },
                  { prompt: '새 물음들이에요. What으로 시작해도 답의 종류는 다를 수 있어요. 나누어 보세요.',
                    toolOptions: { cards: ['How old is the baby panda?', 'What time is the panda talk?', 'Where is the gift shop?', 'Is the zoo open on Monday?', 'What day is the zoo closed?'] },
                    target: { sort: { num: ['How old is the baby panda?'], time: ['What time is the panda talk?', 'What day is the zoo closed?'], place: ['Where is the gift shop?'], yn: ['Is the zoo open on Monday?'] } }, difficulty: 0.25,
                    hints: ['What 바로 뒤의 낱말까지 함께 읽어요. What 뒤에 무엇이 오는지가 답의 모양을 정해요.', 'What으로 시작한 물음을 넣은 칸을 다시 보세요. What time, What day는 무엇을 묻나요?', 'What time과 What day는 때, How old는 수, Is로 시작하면 예/아니요예요.'],
                    levels: { easy: EZSORT('새 물음 세 개예요. 답의 종류에 따라 나누어 보세요.', ['How old is the baby panda?', 'What time is the panda talk?', 'Where is the gift shop?', 'Is the zoo open on Monday?', 'What day is the zoo closed?'], { sort: { num: ['How old is the baby panda?'], time: ['What time is the panda talk?', 'What day is the zoo closed?'], place: ['Where is the gift shop?'], yn: ['Is the zoo open on Monday?'] } }, ['How old is the baby panda?', 'What time is the panda talk?', 'Where is the gift shop?']) } },
                  { prompt: '물음마다 기다릴 대답의 모양 카드를 짝 지어 보세요.',
                    toolOptions: { mode: 'match', slots: [{ id: 'q1', label: 'How many lions are there?' }, { id: 'q2', label: 'When does the bird show start?' }, { id: 'q3', label: 'Where are the penguins?' }, { id: 'q4', label: 'Can I take photos?' }],
                      cards: [C('a1', 'There are three.'), C('a2', 'It starts at two.'), C('a3', 'Near the main gate.'), C('a4', 'Yes, you can.')] },
                    target: { match: { q1: 'a1', q2: 'a2', q3: 'a3', q4: 'a4' } }, difficulty: 0.2,
                    hints: ['물음이 바라는 답의 모양(수·때·곳·예/아니요)을 먼저 말하고, 그 모양의 대답 카드를 찾아요.', '짝 지은 대답을 물음 뒤에 이어 읽어 보세요. 대답이 물음의 모양과 맞나요?', '수 → There are three., 때 → at two, 곳 → Near the gate, 예/아니요 → Yes, you can.'],
                    levels: TIER([C('a1', 'There are three.'), C('a2', 'It starts at two.'), C('a3', 'Near the main gate.'), C('a4', 'Yes, you can.')], null, [C('ax', 'They are black and white.', '생김새를 말하는 대답이에요. 네 물음 어디에도 맞지 않아요.')]) },
                ],
              },
              {
                id: 'a2', title: '활동 2. 물음을 읽고 사육사 안내 듣기', minutes: 15, tool: 'wordcards',
                teacher: '"듣기 단추를 누르기 전에 물음을 소리 내어 읽고, 답의 모양을 짝에게 말해요. 수라면 숫자 낱말을 기다려요." 네 문항 모두 같은 사육사 안내이고 물음만 바뀐다. 나이 물음에서 12(twelve)를 고르는 학생에게 "12는 무엇과 함께 나온 수였나요?"라고 묻는다. 플래시 물음에서는 don\'t가 들어간 문장이 예/아니요를 알려 준다는 것을 짚는다.',
                task: '물음을 먼저 읽고 답의 모양을 짐작해요. 듣기 단추를 눌러 사육사의 안내를 듣고 알맞은 카드를 골라요.',
                levels: LV({ mode: 'listen', basket: '찾은 답' }),
                items: [
                  { prompt: '물음: How many pandas are there? 듣고 알맞은 카드를 골라 보세요.',
                    toolOptions: LISTEN('Welcome to Panda House. We have two pandas, Bao and Mei. Bao is five years old. Pandas eat bamboo for about twelve hours a day. The panda talk starts at eleven. Please don\'t use the camera flash.', [C('n2', '2마리'), C('n5', '5마리'), C('n12', '12마리')], '찾은 답'),
                    target: { listen: 'n2' }, difficulty: 0.2,
                    hints: ['답의 모양은 수예요. pandas(판다들)와 함께 나오는 숫자 낱말을 기다려요.', '고른 수가 판다의 수인지, 나이나 시간인지 다시 들어 보세요.', 'We have two pandas — 판다는 두 마리예요.'],
                    predict: { q: 'How many ~? 의 답은 어떤 모양일까요?', options: ['수', '곳', '예/아니요'], answer: 0 },
                    conclude: '물음에서 답이 수라는 것을 알았기 때문에 숫자 낱말에 귀를 모을 수 있었어요.' },
                  { prompt: '물음: How old is Bao? 듣고 알맞은 카드를 골라 보세요.',
                    toolOptions: LISTEN('Welcome to Panda House. We have two pandas, Bao and Mei. Bao is five years old. Pandas eat bamboo for about twelve hours a day. The panda talk starts at eleven. Please don\'t use the camera flash.', [C('a5', '5살'), C('a12', '12살', '12는 하루에 대나무를 먹는 시간이에요.'), C('a2', '2살')], '찾은 답'),
                    target: { listen: 'a5' }, difficulty: 0.25,
                    hints: ['나이는 years old(~살)와 함께 나와요. 그 말 바로 앞의 숫자를 들어요.', '고른 수 뒤에 years old가 붙어 있었는지, hours가 붙어 있었는지 다시 들어 보세요.', 'Bao is five years old — 바오는 다섯 살이에요.'],
                    levels: TIER([C('a5', '5살'), C('a12', '12살', '12는 하루에 대나무를 먹는 시간이에요.'), C('a2', '2살')], ['a5', 'a12'], [C('a11', '11살', '11은 이야기 시간이 시작하는 시각이에요.')]) },
                  { prompt: '물음: How long do pandas eat bamboo a day? 듣고 알맞은 카드를 골라 보세요.',
                    toolOptions: LISTEN('Welcome to Panda House. We have two pandas, Bao and Mei. Bao is five years old. Pandas eat bamboo for about twelve hours a day. The panda talk starts at eleven. Please don\'t use the camera flash.', [C('h12', '12시간쯤'), C('h5', '5시간쯤'), C('h2', '2시간쯤')], '찾은 답'),
                    target: { listen: 'h12' }, difficulty: 0.3,
                    hints: ['How long은 "얼마 동안"이에요. hours(시간)와 함께 나오는 수를 기다려요.', '고른 수 뒤에 hours가 붙어 있었는지 다시 들어 보세요.', 'eat bamboo for about twelve hours a day — 하루 12시간쯤이에요.'],
                    levels: TIER([C('h12', '12시간쯤'), C('h5', '5시간쯤'), C('h2', '2시간쯤')], ['h12', 'h5'], [C('h11', '11시간쯤', '11은 이야기 시간이 시작하는 시각이에요.')]) },
                  { prompt: '물음: Can we use the camera flash? 듣고 알맞은 카드를 골라 보세요.',
                    toolOptions: LISTEN('Welcome to Panda House. We have two pandas, Bao and Mei. Bao is five years old. Pandas eat bamboo for about twelve hours a day. The panda talk starts at eleven. Please don\'t use the camera flash.', [C('yes', '예, 써도 돼요'), C('no', '아니요, 쓰면 안 돼요')], '찾은 답'),
                    target: { listen: 'no' }, difficulty: 0.2,
                    hints: ['답의 모양은 예/아니요예요. flash가 나오는 문장에 don\'t(하지 마세요)가 있는지 들어요.', '안내 끝부분을 다시 들어 보세요. Please 뒤에 무슨 말이 붙었나요?', 'Please don\'t use the camera flash — 쓰지 말라는 말이에요.'] },
                ],
              },
            ],
          },
          {
            id: 'wrapup', title: '정리', minutes: 7,
            teacher: '"물음을 먼저 읽었더니 무엇이 달라졌나요?" 무엇을 기다릴지 알았다는 말을 받아 "수를 묻는 물음에는 숫자 낱말, 곳을 묻는 물음에는 in·at·near 뒤를 기다려요."라고 정리한다. 숫자가 여러 개 나오면 무엇과 함께 나온 수인지 따졌던 것을 떠올리게 한 뒤 출구 질문을 푼다.',
            exitTicket: [
              { type: 'tool', tool: 'wordcards', options: LISTEN('The dolphin show is at the Blue Pool. It starts at two, and it is free for everyone.', [C('pool', '블루 풀장'), C('gate', '정문'), C('cafe', '카페')], '찾은 답'), prompt: '물음: Where is the dolphin show? 듣고 알맞은 카드를 골라 보세요.', target: { listen: 'pool' }, difficulty: 0.2 },
              { type: 'choice', prompt: '"What time does the shop open?" 의 답은 어떤 모양일까요?', options: ['수(몇 개)', '때(시각)', '곳'], answer: 1, difficulty: 0.15, explain: 'What time은 시각, 곧 때를 묻는 말이에요.' },
              { type: 'mood', prompt: '오늘 물음 먼저 읽고 듣기는 어땠나요?' },
            ],
          },
        ],
        worksheet: {
          title: '물음 먼저 읽고 듣기',
          items: [
            { type: 'table', prompt: '물음을 읽고 답의 모양(수·때·곳·예/아니요)을 쓰세요. 선생님이 안내를 읽어 주면 답을 쓰세요.', columns: ['물음', '답의 모양', '들은 답'], cells: [['How many giraffes are there?', '', ''], ['When does the zoo open?', '', ''], ['Can we ride the camel?', '', '']], answer: '대본: Good morning! The zoo opens at nine. We have four giraffes. You can ride the camel for 1,000 won. → 수 4마리 / 때 9시 / 예/아니요 예' },
            { type: 'choice', prompt: '"Where is the bird show?" 의 답으로 알맞은 것은?', options: ['At three.', 'Near the lake.', 'Yes, it is.'], answer: 'Near the lake.' },
            { type: 'choice', prompt: '"Bao is five years old. He eats for twelve hours." 에서 바오의 나이는?', options: ['5살', '12살'], answer: '5살' },
            { type: 'short', prompt: '동물원에 간다면 묻고 싶은 물음 하나를 영어로 쓰고, 그 답의 모양을 쓰세요.' },
          ],
          easy: {
            note: 'How many = 수, When = 때, Where = 곳, Can = 예/아니요',
            items: [
              { type: 'table', prompt: '물음을 읽고 답의 모양을 쓰세요.', columns: ['물음', '답의 모양'], cells: [['How many giraffes are there?', ''], ['Where is the gift shop?', '']], answer: '수 / 곳' },
              { type: 'choice', prompt: '"Can I take photos?" 의 답 모양은?', options: ['예/아니요', '수'], answer: '예/아니요' },
              { type: 'short', prompt: '안내에서 들은 숫자 하나를 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '나눌 물음 카드가 세 장으로 줄고, 맞게 넣으면 초록 테두리가 생기며 틀리면 까닭을 말하고 되돌아와요.',
          base: '나누거나 고른 뒤 확인을 눌러 스스로 고쳐요.',
          challenge: '생김새를 말하는 함정 대답과 11살·11시간처럼 안내에 다른 뜻으로 나온 수 카드가 더해져요.',
        },
        teacherNotes: '듣기 대본(활동 2 네 문항 공통): Welcome to Panda House. We have two pandas, Bao and Mei. Bao is five years old. Pandas eat bamboo for about twelve hours a day. The panda talk starts at eleven. Please don\'t use the camera flash. 출구: The dolphin show is at the Blue Pool. It starts at two, and it is free for everyone. 판다가 하루에 대나무를 먹는 시간은 자료마다 10~16시간으로 조금씩 달라 "about twelve hours(12시간쯤)"로 적었다. 자주 보이는 어려움: ① 물음을 읽지 않고 바로 듣는다 → 물음을 소리 내어 읽고 답의 모양을 짝에게 말한 뒤 듣게 한다. ② 들린 숫자를 아무거나 고른다 → years old, hours처럼 수 뒤에 붙은 말을 함께 듣게 한다. ③ What으로 시작하면 모두 물건을 묻는다고 여긴다 → What time, What day를 따로 짚는다.',
      }),

      // ───────────────────────── 8차시 (extend) ─────────────────────────
      lesson(8, S07, {
        title: '이야기를 나누어 들으며 다음 장면 짐작하고 고치기',
        objective: '이야기를 부분마다 끊어 들으며 다음에 일어날 일을 짐작하고, 이어진 부분을 듣고 짐작을 확인하거나 고칠 수 있다.',
        illustration: {
          prompt: PROMPT('a boy searching his room for a missing lunch box on a picnic morning, while his little sister peeks from the kitchen holding a cookie'),
          scene: SCENE('The Missing Lunch Box', '짐작하고, 듣고, 고쳐요', [
            { motif: 'house', x: 100, y: 214, color: 'buttercup' }, { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'flower', x: 400, y: 228, color: 'rose' },
          ]),
        },
        stages: [
          {
            id: 'intro', title: '도입', minutes: 6,
            teacher: '"드라마가 \'다음 이 시간에\'로 끝나면 다음 이야기를 짐작해 보지요? 오늘은 영어 이야기를 네 부분으로 끊어 들으며 짐작 놀이를 해요." 제목 The Missing Lunch Box를 보여 주고 missing이 "없어진"이라는 것을 알려 준 뒤 "도시락이 왜 없어졌을까요?"라고 묻는다. 짐작을 칠판에 적어 두고 "짐작이 틀려도 괜찮아요. 듣고 고치는 것이 오늘 할 일이에요."라고 말한다.',
            student: '제목 The Missing Lunch Box(없어진 도시락)를 보고, 도시락이 왜 없어졌을지 짐작해 말해 봐요.',
            demo: { tool: 'story', options: { mode: 'order', slots: ['처음', '가운데', '끝'], cards: [C('s1', 'Minho is hungry.'), C('s2', 'He looks for his lunch.'), C('s3', 'He finds it!')] }, sequence: [{ at: {} }, { at: { s1: 0, s2: 1, s3: 2 } }] },
          },
          {
            id: 'main', title: '전개', minutes: 27,
            activities: [
              {
                id: 'a1', title: '활동 1. 부분마다 짐작하고 들으며 확인하기', minutes: 15, tool: 'wordcards',
                teacher: '"문항마다 예상 단추로 다음 일을 먼저 짐작해요. 그다음 듣기 단추로 그 부분을 듣고, 들은 내용 카드를 골라요." 예상은 점수에 들어가지 않는다는 것을 알려 준다. 부분이 끝날 때마다 "짐작이 맞았나요? 무엇 때문에 달랐나요?"를 짝과 한 문장씩 말하게 한다. 짐작이 틀린 학생에게 "그래서 다음 부분이 더 궁금해졌지요? 그게 짐작의 힘이에요."라고 말해 준다.',
                task: '부분마다 예상을 먼저 고르고, 듣기 단추로 그 부분을 들은 뒤 실제 내용 카드를 골라요.',
                levels: LV({ mode: 'listen', basket: '들은 내용' }),
                items: [
                  { prompt: '1부분을 들어요. 민호에게 생긴 문제는 무엇인가요?',
                    toolOptions: LISTEN('It was Saturday morning. Minho was ready for the class picnic. He opened his backpack, but his lunch box was not there!', [C('lunch', '도시락이 없다'), C('rain', '비가 와서 소풍이 취소됐다'), C('late', '늦잠을 잤다')], '들은 내용'),
                    target: { listen: 'lunch' }, difficulty: 0.15,
                    hints: ['but(그런데) 뒤에 문제가 나와요. but 뒤를 잘 들어요.', '고른 문제가 이야기에서 정말 들렸는지 다시 들어 보세요.', 'his lunch box was not there — 도시락이 없었어요.'],
                    predict: { q: '제목을 보고, 1부분에서 무슨 일이 생길까요?', options: ['도시락이 없어져요', '도시락을 먹어요', '도시락을 사요'] },
                    conclude: '제목(The Missing Lunch Box)으로 한 짐작을 1부분에서 확인했어요.' },
                  { prompt: '2부분을 들어요. 민호가 도시락을 찾아본 곳을 모두 골라 보세요.',
                    toolOptions: LISTEN('Minho looked under his bed. He looked in his backpack again. No lunch box! He started to feel worried.', [C('bed', '침대 밑'), C('bag', '가방 안'), C('kitchen', '부엌', '부엌은 2부분에서 찾아본 곳이 아니에요.'), C('car', '자동차 안')], '찾아본 곳'),
                    target: { listen: ['bed', 'bag'] }, difficulty: 0.25,
                    hints: ['looked(찾아보았다) 뒤에 곳이 나와요. looked가 몇 번 들리는지 세며 들어요.', '고른 곳이 looked 뒤에 나온 곳인지, 빠뜨린 곳은 없는지 다시 들어 보세요.', 'under his bed, in his backpack — 두 곳이에요.'],
                    predict: { q: '민호는 어디부터 찾아볼까요?', options: ['침대 밑', '부엌', '자동차 안'] },
                    levels: TIER([C('bed', '침대 밑'), C('bag', '가방 안'), C('kitchen', '부엌', '부엌은 2부분에서 찾아본 곳이 아니에요.'), C('car', '자동차 안')], ['bed', 'bag', 'kitchen']) },
                  { prompt: '3부분을 들어요. 도시락을 가지고 있던 사람은 누구인가요?',
                    toolOptions: LISTEN('Then Minho heard a sound from the kitchen. His little sister, Yuna, was holding the lunch box. "I wanted to put a cookie in it for you!" she said.', [C('sister', '여동생 유나'), C('mom', '엄마'), C('dog', '강아지')], '가지고 있던 사람'),
                    target: { listen: 'sister' }, difficulty: 0.2,
                    hints: ['was holding(들고 있었다) 앞에 나오는 사람을 들어요.', '고른 사람이 이야기에서 정말 도시락을 들고 있었는지 다시 들어 보세요.', 'His little sister, Yuna, was holding the lunch box — 여동생이에요.'],
                    predict: { q: '도시락은 누가 가지고 있을까요?', options: ['여동생', '엄마', '강아지'] },
                    levels: TIER([C('sister', '여동생 유나'), C('mom', '엄마'), C('dog', '강아지')], null, [C('friend', '친구 지호', '지호는 이야기에 나오지 않아요.')]) },
                  { prompt: '4부분을 들어요. 이야기는 어떻게 끝나나요?',
                    toolOptions: LISTEN('Minho smiled and said, "Thank you, Yuna!" At the picnic, he shared the cookie with his friends.', [C('share', '친구들과 쿠키를 나눠 먹었다'), C('angry', '동생에게 화를 냈다', '민호는 웃으며 고맙다고 했어요.'), C('home', '소풍에 가지 않았다')], '이야기의 끝'),
                    target: { listen: 'share' }, difficulty: 0.2,
                    hints: ['민호의 말(Thank you)과 소풍에서 한 일(shared)을 들어요.', '고른 끝이 Thank you라고 말한 민호와 어울리는지 다시 들어 보세요.', 'he shared the cookie with his friends — 쿠키를 나눠 먹었어요.'],
                    predict: { q: '도시락을 들고 있던 동생에게 민호는 어떻게 할까요?', options: ['화를 내요', '고마워해요', '모른 척해요'] },
                    conclude: '짐작이 빗나가도 다음 부분을 들으며 고치면 이야기가 더 또렷하게 들려요.' },
                ],
              },
              {
                id: 'a2', title: '활동 2. 단서 문장으로 다음 장면 고르기', minutes: 12, tool: 'wordcards',
                teacher: '"짐작은 아무렇게나 하는 게 아니에요. 앞 문장에 단서가 있어요." 첫 문항을 함께 읽고 dark clouds, umbrella 같은 단서 낱말에 밑줄을 긋는다. 단서와 상관없는 재미있는 장면을 고르는 학생에게 "앞 문장의 어느 낱말이 그 장면을 알려 주나요?"라고 묻는다.',
                task: '앞 장면의 단서 낱말을 찾고, 다음에 올 장면으로 가장 알맞은 문장 카드 하나를 골라요.',
                levels: LV(PICK('다음 장면')),
                items: [
                  { prompt: '앞 장면: "Mia looked at the dark clouds. She took her umbrella." 다음 장면으로 가장 알맞은 것을 골라 보세요.',
                    toolOptions: { cards: [C('rain', 'Soon it started to rain.'), C('snow', 'She built a big snowman.', '눈사람 단서는 앞 장면에 없어요.'), C('beach', 'She put on sunscreen.', '구름이 끼었으니 선크림 단서와 맞지 않아요.')] },
                    target: { pick: ['rain'] }, difficulty: 0.15,
                    hints: ['앞 장면의 단서 낱말 두 개에 밑줄을 그어 보세요. 그 낱말들이 무슨 일을 알려 주나요?', '고른 장면이 dark clouds와 umbrella 두 단서에 모두 맞는지 보세요.', '먹구름과 우산은 비가 온다는 단서예요.'],
                    levels: TIER([C('rain', 'Soon it started to rain.'), C('snow', 'She built a big snowman.', '눈사람 단서는 앞 장면에 없어요.'), C('beach', 'She put on sunscreen.', '구름이 끼었으니 선크림 단서와 맞지 않아요.')], ['rain', 'snow']) },
                  { prompt: '앞 장면: "Jun\'s stomach growled. He looked at the clock. It was twelve." 다음 장면으로 가장 알맞은 것을 골라 보세요.',
                    toolOptions: { cards: [C('lunch', 'He went to eat lunch.'), C('sleep', 'He went to bed.', '열두 시이고 배가 고프다는 단서와 맞지 않아요.'), C('bath', 'He took a bath.', '배고픔 단서와 이어지지 않아요.')] },
                    target: { pick: ['lunch'] }, difficulty: 0.2,
                    hints: ['stomach growled(배에서 꼬르륵 소리가 났다)와 시각이 단서예요.', '고른 장면이 배고픔과 시각 두 단서에 모두 맞는지 보세요.', '열두 시에 배가 고프면 점심을 먹으러 가요.'],
                    levels: TIER([C('lunch', 'He went to eat lunch.'), C('sleep', 'He went to bed.', '열두 시이고 배가 고프다는 단서와 맞지 않아요.'), C('bath', 'He took a bath.', '배고픔 단서와 이어지지 않아요.')], ['lunch', 'sleep'], [C('breakfast', 'He ate breakfast.', '열두 시는 아침을 먹는 때가 아니에요.')]) },
                  { prompt: '앞 장면: "The puppy saw the open door. It wagged its tail and ran outside." 다음 장면으로 가장 알맞은 것을 골라 보세요.',
                    toolOptions: { cards: [C('chase', 'Sora ran after the puppy.'), C('sleep', 'The puppy slept in its bed.', '강아지는 이미 밖으로 뛰어나갔어요.'), C('fish', 'Sora fed the fish.', '강아지가 나간 일과 이어지지 않아요.')] },
                    target: { pick: ['chase'] }, difficulty: 0.25,
                    hints: ['강아지가 마지막에 무엇을 했는지가 단서예요. 그 일 바로 뒤에 일어날 일을 떠올려요.', '고른 장면이 "밖으로 뛰어나간 강아지" 뒤에 바로 올 수 있는지 보세요.', '강아지가 뛰어나가면 주인이 뒤쫓아 가요.'],
                    levels: TIER([C('chase', 'Sora ran after the puppy.'), C('sleep', 'The puppy slept in its bed.', '강아지는 이미 밖으로 뛰어나갔어요.'), C('fish', 'Sora fed the fish.', '강아지가 나간 일과 이어지지 않아요.')], ['chase', 'sleep']) },
                ],
              },
            ],
          },
          {
            id: 'wrapup', title: '정리', minutes: 7,
            teacher: '"오늘 네 번 짐작했어요. 몇 번 맞았나요? 틀린 짐작은 무엇으로 고쳤나요?" 손을 들게 하고, 틀린 짐작이 많았던 학생도 끝까지 이야기를 잘 따라온 것을 칭찬한다. "짐작은 앞의 단서로 하고, 들은 내용으로 고쳐요."라고 칠판에 적은 뒤 출구 질문을 푼다.',
            exitTicket: [
              { type: 'tool', tool: 'wordcards', options: { mode: 'pick', basket: '다음 장면', shuffle: false, cards: [C('cake', 'They sang "Happy Birthday" together.'), C('school', 'They went to school.'), C('swim', 'They went swimming.')] }, prompt: '앞 장면: "Dad lit the candles on the cake. Everyone smiled at Ana." 다음 장면으로 가장 알맞은 것을 골라 보세요.', target: { pick: ['cake'] }, difficulty: 0.15 },
              { type: 'choice', prompt: '이야기를 들으며 한 짐작이 빗나갔어요. 가장 좋은 태도는?', options: ['짐작이 틀렸으니 듣기를 멈춘다', '들은 내용으로 짐작을 고치며 계속 듣는다', '처음 짐작이 맞다고 우긴다'], answer: 1, difficulty: 0.1, explain: '짐작은 듣는 동안 계속 고치는 것이에요.' },
              { type: 'mood', prompt: '오늘 짐작하며 이야기 듣기는 어땠나요?' },
            ],
          },
        ],
        worksheet: {
          title: '짐작하고 고치며 듣기',
          items: [
            { type: 'table', prompt: '선생님이 이야기를 한 부분씩 읽어 줘요. 다음 부분을 듣기 전에 짐작을 쓰고, 들은 뒤 실제로 일어난 일을 쓰세요.', columns: ['부분', '나의 짐작', '실제로 일어난 일'], cells: [['1 → 2', '', ''], ['2 → 3', '', ''], ['3 → 4', '', '']], answer: '대본: ① Leo found a small box in the garden. ② Inside the box, there was an old key. ③ The key opened Grandpa\'s old music box. ④ The music box played Grandpa\'s favorite song, and Grandpa smiled.' },
            { type: 'choice', prompt: '"The sky was dark. Thunder was loud." 다음 장면으로 가장 알맞은 것은?', options: ['It began to rain hard.', 'The sun was very hot.', 'They ate ice cream on the beach.'], answer: 'It began to rain hard.' },
            { type: 'short', prompt: '위 문제에서 다음 장면을 짐작하게 해 준 단서 낱말 두 개를 쓰세요.' },
            { type: 'short', prompt: '오늘 빗나간 짐작 하나와, 무엇을 듣고 고쳤는지 쓰세요.' },
          ],
          easy: {
            note: '앞 문장의 단서 낱말에 밑줄을 긋고 다음 장면을 짐작해요.',
            items: [
              { type: 'table', prompt: '선생님이 읽어 주는 이야기를 듣고 실제로 일어난 일을 쓰세요.', columns: ['부분', '실제로 일어난 일'], cells: [['2', ''], ['4', '']], answer: '상자 안에 오래된 열쇠 / 할아버지가 웃음' },
              { type: 'choice', prompt: '"Tom was very tired." 다음에 올 장면은?', options: ['He went to bed.', 'He ran a race.'], answer: 'He went to bed.' },
              { type: 'short', prompt: '오늘 이야기에서 기억나는 영어 낱말 하나를 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '고를 카드가 줄고, 맞게 고르면 초록 테두리가 생기며 틀리면 까닭을 말하고 되돌아와요.',
          base: '고른 뒤 확인을 눌러 스스로 고쳐요.',
          challenge: '이야기에 나오지 않는 인물(친구 지호)과 시각 단서를 거스르는 함정 장면(He ate breakfast.)이 더해져요.',
        },
        teacherNotes: '이야기 "The Missing Lunch Box"는 이 차시를 위해 지은 것이다. 듣기 대본: ① It was Saturday morning. Minho was ready for the class picnic. He opened his backpack, but his lunch box was not there! ② Minho looked under his bed. He looked in his backpack again. No lunch box! He started to feel worried. ③ Then Minho heard a sound from the kitchen. His little sister, Yuna, was holding the lunch box. "I wanted to put a cookie in it for you!" she said. ④ Minho smiled and said, "Thank you, Yuna!" At the picnic, he shared the cookie with his friends. 활동 1의 예상(predict)은 채점하지 않으며, 짐작은 여러 가지가 될 수 있어 정답을 두지 않았다. 자주 보이는 어려움: ① 짐작이 틀리면 듣기를 포기한다 → 짐작은 고치는 것이라고 말해 준다. ② 단서 없이 재미있는 장면을 고른다 → 앞 문장의 단서 낱말에 밑줄을 긋게 한다. ③ 예상에서 고른 것을 들은 내용으로 착각한다 → 예상과 들은 것을 공책에 두 줄로 적게 한다.',
      }),

      // ───────────────────────── 9차시 (core) ─────────────────────────
      lesson(9, S07, {
        title: '필요한 대목만 다시 들으며 처음 답 고치기',
        objective: '한 번 들은 뒤 확인이 필요한 대목을 골라 다시 듣고, 처음 답과 고친 답을 견주어 무엇이 달라졌는지 말할 수 있다.',
        illustration: {
          prompt: PROMPT('a child wearing headphones pointing at a rewind button on a tablet, with a notebook showing a first answer crossed out and a new answer written beside it'),
          scene: SCENE('Listen again!', '처음 답 → 고친 답', [
            { motif: 'star', x: 410, y: 62, s: 0.6 }, { motif: 'tree', x: 80, y: 214 }, { motif: 'bird', x: 330, y: 74 },
          ]),
        },
        stages: [
          {
            id: 'intro', title: '도입', minutes: 7,
            teacher: '"시험을 볼 때 처음 쓴 답을 고치면 틀린다는 말을 들어 본 적 있나요?" 학생 생각을 들은 뒤 "듣기에서는 다시 듣고 확인할 수 있으면 고치는 게 좋아요. 다만 처음부터 다시 듣지 않고, 확인이 필요한 대목만 골라 들어요."라고 말한다. 공책에 "처음 답 | 다시 들을 대목 | 고친 답" 세 칸을 그리게 한다. 한 번 적은 답은 바꾸면 안 된다고 여기는 학생에게 "다시 들어서 고친 답이 맞는다면, 그건 실수가 아니라 확인이에요."라고 짚는다.',
            student: '한 번 들은 뒤 헷갈리는 답이 있으면 어떻게 할까요? 다시 들어도 될지, 어느 부분을 다시 들을지 생각해 봐요.',
            demo: { tool: 'wordcards', options: Object.assign(PICK('다시 들을 대목'), { cards: [C('c1', 'The art club meets'), C('c2', 'on Tuesday'), C('c3', 'in Room 4.')] }), sequence: [{ at: {} }, { at: { c2: 0 } }] },
          },
          {
            id: 'main', title: '전개', minutes: 26,
            activities: [
              {
                id: 'a1', title: '활동 1. 확인할 대목 고르기', minutes: 11, tool: 'wordcards',
                teacher: '"방송 대본을 조각으로 나눴어요. 내가 헷갈린 정보가 들어 있는 조각만 다시 들으면 돼요." 헷갈린 정보가 무엇인지(요일, 값, 시각과 곳) 먼저 말하게 한 뒤 조각을 고르게 한다. 처음부터 다시 듣겠다며 모든 조각을 고르는 학생에게 "그러면 시간이 오래 걸려요. 헷갈린 정보와 이어진 조각이면 돼요."라고 말해 준다.',
                task: '방송 대본 조각을 읽고, 헷갈린 정보를 확인하려면 다시 들어야 할 조각만 골라요.',
                levels: LV(PICK('다시 들을 대목')),
                items: [
                  { prompt: '모임 요일이 화요일인지 목요일인지 헷갈려요. 다시 들을 대목을 골라 보세요.',
                    toolOptions: { cards: [C('c1', 'Hello, everyone.'), C('c2', 'The drama club will meet'), C('c3', 'on Thursday after school'), C('c4', 'in the music room.')] },
                    target: { pick: ['c3'] }, difficulty: 0.15,
                    hints: ['헷갈린 정보는 요일이에요. 요일 낱말(-day)이 든 조각을 찾아요.', '고른 조각에 요일 낱말이 있는지 다시 읽어 보세요.', 'on Thursday after school 조각에 요일이 있어요.'],
                    levels: TIER([C('c1', 'Hello, everyone.'), C('c2', 'The drama club will meet'), C('c3', 'on Thursday after school'), C('c4', 'in the music room.')], ['c1', 'c3', 'c4']) },
                  { prompt: '학교 바자회에서 공책이 얼마인지 놓쳤어요. 다시 들을 대목을 골라 보세요.',
                    toolOptions: { cards: [C('c1', 'Our school bazaar is on Friday.'), C('c2', 'Pencils are 300 won.'), C('c3', 'Notebooks are 500 won.'), C('c4', 'All money will help children in need.')] },
                    target: { pick: ['c3'] }, difficulty: 0.2,
                    hints: ['헷갈린 정보는 공책의 값이에요. 물건 이름과 won이 함께 있는 조각을 찾아요.', '고른 조각의 물건이 공책(Notebooks)인지 다시 보세요.', 'Notebooks are 500 won 조각이에요.'],
                    levels: TIER([C('c1', 'Our school bazaar is on Friday.'), C('c2', 'Pencils are 300 won.'), C('c3', 'Notebooks are 500 won.'), C('c4', 'All money will help children in need.')], ['c1', 'c3', 'c4'], [C('c5', 'Notebook covers are 200 won.', '공책 표지(cover)의 값이에요. 공책 값이 아니에요.')]) },
                  { prompt: '두 가지가 헷갈려요: 출발 시각과 모이는 곳. 다시 들을 대목을 모두 골라 보세요.',
                    toolOptions: { cards: [C('c1', 'Our field trip is tomorrow.'), C('c2', 'The bus leaves at 8:40.'), C('c3', 'Please meet at the front gate.'), C('c4', 'Wear comfortable shoes.')] },
                    target: { pick: ['c2', 'c3'] }, difficulty: 0.25,
                    hints: ['헷갈린 정보가 두 가지예요. 하나는 시각이 든 조각, 하나는 곳이 든 조각이에요.', '고른 조각이 시각과 곳 두 가지를 모두 담았는지, 필요 없는 조각이 섞였는지 보세요.', 'leaves at 8:40 조각과 meet at the front gate 조각이에요.'],
                    levels: TIER([C('c1', 'Our field trip is tomorrow.'), C('c2', 'The bus leaves at 8:40.'), C('c3', 'Please meet at the front gate.'), C('c4', 'Wear comfortable shoes.')], ['c2', 'c3', 'c4']) },
                ],
              },
              {
                id: 'a2', title: '활동 2. 듣고 맞는 문장 고른 뒤 다시 들어 고치기', minutes: 15, tool: 'wordcards',
                teacher: '"한 번 듣고 맞는 문장을 고른 뒤, 확인을 누르기 전에 헷갈린 문장의 대목에 집중해 한 번 더 들어요. 고친 것이 있으면 공책 \'고친 답\' 칸에 적어요." 다 한 뒤 "처음 답에서 무엇을 고쳤나요?"를 두세 명에게 묻는다. 처음 고른 것을 그대로 두고 다시 듣지 않는 학생에게 듣기 단추를 한 번 더 눌러 보라고 권한다.',
                task: '안내를 한 번 듣고 맞는 문장 카드를 골라요. 헷갈린 문장의 대목에 집중해 다시 듣고 고친 뒤 확인을 눌러요.',
                levels: LV({ mode: 'listen', basket: '맞는 문장' }),
                items: [
                  { prompt: '도서관 안내를 듣고, 들은 내용과 맞는 문장 카드를 모두 골라 보세요.',
                    toolOptions: LISTEN('The library is open from nine to five. You can borrow three books for two weeks. Please be quiet in the reading room.', [C('t1', '도서관은 5시에 문을 닫아요.'), C('t2', '책은 세 권 빌릴 수 있어요.'), C('f1', '책은 3주 동안 빌릴 수 있어요.', '세 권을 2주(two weeks) 동안 빌려요. 3은 권수예요.'), C('f2', '읽기실에서는 이야기해도 돼요.', 'be quiet — 조용히 하라고 했어요.')], '맞는 문장'),
                    target: { listen: ['t1', 't2'] }, difficulty: 0.3,
                    hints: ['카드마다 확인할 정보(시각, 권수, 기간, 규칙)를 정하고, 그 대목을 들을 때 카드와 견주어요.', '고른 카드 가운데 숫자가 바뀐 것(권수와 기간)이 있는지, 그 대목에 집중해 다시 들어 보세요.', '닫는 시각은 five, 권수는 three, 기간은 two weeks, 읽기실은 조용히예요.'],
                    predict: { q: '처음 고른 답을 다시 듣고 바꾸는 것은 좋은 일일까요?', options: ['바꾸면 안 돼요', '확인해서 바꾸면 좋아요'], answer: 1 },
                    conclude: '헷갈린 대목을 다시 들어 확인하고 고치는 것은 실수가 아니라 좋은 듣기예요.',
                    levels: TIER([C('t1', '도서관은 5시에 문을 닫아요.'), C('t2', '책은 세 권 빌릴 수 있어요.'), C('f1', '책은 3주 동안 빌릴 수 있어요.', '세 권을 2주(two weeks) 동안 빌려요. 3은 권수예요.'), C('f2', '읽기실에서는 이야기해도 돼요.', 'be quiet — 조용히 하라고 했어요.')], ['t1', 't2', 'f2']) },
                  { prompt: '급식 안내를 듣고, 들은 내용과 맞는 문장 카드를 모두 골라 보세요.',
                    toolOptions: LISTEN('Today\'s lunch is chicken curry and rice. There is no soup today. For dessert, we have apples, not bananas.', [C('t1', '오늘 점심은 닭고기 카레예요.'), C('t2', '후식은 사과예요.'), C('f1', '오늘은 국이 나와요.', 'There is no soup — 국이 없다고 했어요.'), C('f2', '후식은 바나나예요.', 'apples, not bananas — 바나나가 아니에요.')], '맞는 문장'),
                    target: { listen: ['t1', 't2'] }, difficulty: 0.3,
                    hints: ['no, not이 붙은 대목을 특히 잘 들어요. 그 낱말이 문장의 뜻을 뒤집어요.', '고른 카드 가운데 no나 not 대목과 어긋나는 것이 있는지 그 대목에 집중해 다시 들어 보세요.', '카레는 맞고, 국은 없고(no soup), 후식은 바나나가 아니라 사과예요.'],
                    levels: TIER([C('t1', '오늘 점심은 닭고기 카레예요.'), C('t2', '후식은 사과예요.'), C('f1', '오늘은 국이 나와요.', 'There is no soup — 국이 없다고 했어요.'), C('f2', '후식은 바나나예요.', 'apples, not bananas — 바나나가 아니에요.')], ['t1', 't2', 'f1']) },
                  { prompt: '새 친구 소개를 듣고, 들은 내용과 맞는 문장 카드를 모두 골라 보세요.',
                    toolOptions: LISTEN('This is our new classmate, Ella. She is from Canada. She likes drawing and playing the violin. Her birthday is in October.', [C('t1', '엘라는 캐나다에서 왔어요.'), C('t2', '엘라는 그림 그리기를 좋아해요.'), C('t3', '엘라의 생일은 10월이에요.'), C('f1', '엘라는 피아노를 쳐요.', 'violin(바이올린)을 좋아한다고 했어요.'), C('f2', '엘라의 생일은 8월이에요.', 'October는 10월이에요.')], '맞는 문장'),
                    target: { listen: ['t1', 't2', 't3'] }, difficulty: 0.35,
                    hints: ['카드가 다섯 장이에요. 한 번에 다 견주기 어려우면 카드 두세 장씩 나누어 다시 들어요.', '고른 카드 가운데 악기 이름이나 달 이름이 다른 것이 있는지 그 대목에 집중해 다시 들어 보세요.', '캐나다, 그림 그리기, 10월(October)이 맞아요. 악기는 바이올린이에요.'],
                    levels: TIER([C('t1', '엘라는 캐나다에서 왔어요.'), C('t2', '엘라는 그림 그리기를 좋아해요.'), C('t3', '엘라의 생일은 10월이에요.'), C('f1', '엘라는 피아노를 쳐요.', 'violin(바이올린)을 좋아한다고 했어요.'), C('f2', '엘라의 생일은 8월이에요.', 'October는 10월이에요.')], ['t1', 't2', 't3', 'f1']) },
                ],
              },
            ],
          },
          {
            id: 'wrapup', title: '정리', minutes: 7,
            teacher: '"공책의 \'처음 답\'과 \'고친 답\'을 나란히 보세요. 무엇이 달라졌나요?" 두세 명이 발표하게 한 뒤 "다시 들을 때 처음부터 다 들었나요, 그 대목에 집중했나요?"라고 묻는다. 고친 답이 있는 학생을 칭찬하며 "다시 들어서 고친 답이 맞으면 그건 확인을 잘한 거예요."라고 정리하고 출구 질문을 푼다.',
            exitTicket: [
              { type: 'tool', tool: 'wordcards', options: LISTEN('The swimming class is on Wednesday at four. Bring a towel and a swim cap. Goggles are not needed.', [C('t1', '수영 수업은 수요일이에요.'), C('t2', '수건을 가져와요.'), C('f1', '물안경을 꼭 가져와요.'), C('f2', '수업은 5시에 시작해요.')], '맞는 문장'), prompt: '수영 수업 안내를 듣고, 들은 내용과 맞는 문장 카드를 모두 골라 보세요.', target: { listen: ['t1', 't2'] }, difficulty: 0.3 },
              { type: 'choice', prompt: '안내를 듣고 시각이 헷갈려요. 가장 좋은 방법은?', options: ['처음 쓴 답을 그대로 둔다', '시각이 나오는 대목만 다시 들어 확인한다', '안내 전체를 다섯 번 다시 듣는다'], answer: 1, difficulty: 0.1, explain: '헷갈린 정보가 든 대목을 다시 들으면 빠르고 정확해요.' },
              { type: 'mood', prompt: '오늘 다시 듣고 고치기는 어땠나요?' },
            ],
          },
        ],
        worksheet: {
          title: '처음 답과 고친 답',
          items: [
            { type: 'table', prompt: '선생님이 안내를 한 번 읽어 주면 처음 답을 쓰세요. 헷갈린 대목을 말하면 그 대목만 다시 읽어 줘요. 고친 답을 쓰세요.', columns: ['물음', '처음 답', '다시 들은 대목', '고친 답'], cells: [['언제?', '', '', ''], ['어디?', '', '', ''], ['무엇을 가져오나요?', '', '', '']], answer: '대본: The music festival is on Saturday, May 18. It is in the school garden. Bring a small blanket to sit on. → 5월 18일 토요일 / 학교 정원 / 작은 담요' },
            { type: 'short', prompt: '처음 답과 고친 답이 달랐던 것이 있다면, 왜 처음에 다르게 들었는지 쓰세요.' },
            { type: 'choice', prompt: '"You can borrow three books for two weeks." 에서 빌리는 기간은?', options: ['3주', '2주', '5주'], answer: '2주' },
            { type: 'choice', prompt: '다시 듣기를 가장 잘한 친구는?', options: ['처음 답을 절대 고치지 않은 지호', '헷갈린 대목을 다시 듣고 고친 서아', '아무 생각 없이 계속 다시 들은 하준'], answer: '헷갈린 대목을 다시 듣고 고친 서아' },
          ],
          easy: {
            note: '헷갈린 정보(때·곳·물건)가 든 대목에 집중해 다시 들어요.',
            items: [
              { type: 'table', prompt: '안내를 듣고 처음 답과 고친 답을 쓰세요.', columns: ['물음', '처음 답', '고친 답'], cells: [['언제?', '', ''], ['어디?', '', '']], answer: '5월 18일 토요일 / 학교 정원' },
              { type: 'choice', prompt: '"not bananas" 는 무슨 뜻인가요?', options: ['바나나가 아니에요', '바나나예요'], answer: '바나나가 아니에요' },
              { type: 'short', prompt: '오늘 다시 들어서 고친 것 하나를 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '고를 카드가 줄고, 맞게 고르면 초록 테두리가 생기며 틀리면 까닭을 말하고 되돌아와요.',
          base: '한 번 듣고 고른 뒤, 헷갈린 대목을 다시 듣고 확인을 눌러요.',
          challenge: '공책 표지 값 같은 함정 대목이 더해지고, 맞는 문장 고르기의 카드가 모두 나와 숫자·달·악기를 끝까지 견주어야 해요.',
        },
        teacherNotes: '듣기 대본: ① The library is open from nine to five. You can borrow three books for two weeks. Please be quiet in the reading room. ② Today\'s lunch is chicken curry and rice. There is no soup today. For dessert, we have apples, not bananas. ③ This is our new classmate, Ella. She is from Canada. She likes drawing and playing the violin. Her birthday is in October. 출구: The swimming class is on Wednesday at four. Bring a towel and a swim cap. Goggles are not needed. 화면의 듣기 단추는 글 전체를 처음부터 읽으므로, 학생에게는 "헷갈린 대목이 나올 때 집중"하게 하고, 교사가 읽어 줄 때는 학생이 말한 대목만 다시 읽어 준다. 자주 보이는 어려움: ① 처음 답을 고치면 안 된다고 여긴다 → 공책에 처음 답·고친 답 칸을 나누어 고친 것을 자랑하게 한다. ② 다시 들을 때 무엇을 확인할지 정하지 않는다 → 헷갈린 정보가 든 조각을 먼저 고르게 한다. ③ no, not을 놓친다 → 그 낱말에 손뼉을 치며 듣게 한다.',
      }),

      // ───────────────────────── 10차시 (practice) ─────────────────────────
      lesson(10, S07, {
        title: '헷갈리는 숫자와 can·can\'t 다시 듣고 고치기',
        objective: '-teen과 -ty 숫자, can과 can\'t처럼 헷갈리는 소리를 다시 들어 구별하고, 잘못 적힌 처음 답을 고칠 수 있다.',
        illustration: {
          prompt: PROMPT('two number cards 13 and 30 balanced on a seesaw beside a child with a hand cupped to the ear, and a speech bubble with can and can not'),
          scene: SCENE('thirTEEN or THIRty?', '힘의 자리와 끝소리를 들어요', [
            { motif: 'sun', x: 410, y: 56, s: 0.7 }, { motif: 'house', x: 90, y: 216, color: 'sky' }, { motif: 'flower', x: 380, y: 228, color: 'buttercup' },
          ]),
        },
        stages: [
          {
            id: 'intro', title: '도입', minutes: 6,
            teacher: '"thirteen, thirty. 두 낱말을 들어 보세요. 무엇이 다른가요?" 손뼉으로 힘을 주는 자리를 쳐 보이며 thir-TEEN은 뒤에, THIR-ty는 앞에 힘이 있고 -teen은 끝을 길게 끈다는 것을 들려준다. 이어 "I can swim. I can\'t swim."을 들려주고 can\'t는 끝의 t가 거의 안 들려도 can보다 길고 힘이 들어간다는 것을 견주게 한다. "한 번 듣고 헷갈리면 다시 들어 고쳐요. 지난 시간에 배운 방법이에요."',
            student: 'thirteen 과 thirty 를 들어 보고, 무엇이 다른지 말해 봐요.',
            demo: { tool: 'wordcards', options: LISTEN('thirteen', [C('n13', '13'), C('n30', '30')], '들은 숫자'), sequence: [{ at: {} }, { at: { n13: 0 } }] },
          },
          {
            id: 'main', title: '전개', minutes: 27,
            activities: [
              {
                id: 'a1', title: '활동 1. 메모의 숫자를 다시 듣고 고치기', minutes: 14, tool: 'wordcards',
                teacher: '"바구니에 친구가 처음 들은 답이 들어 있어요. 듣기 단추를 눌러 다시 듣고, 틀렸으면 고쳐요." 처음 답을 그대로 두고 확인을 누르는 학생에게 "다시 들었을 때 힘이 앞에 있었나요, 뒤에 있었나요?"라고 묻는다. 버스 번호나 값처럼 숫자를 잘못 들으면 생기는 일(다른 버스를 탐)을 함께 말해 보며 다시 듣기의 쓸모를 느끼게 한다.',
                task: '바구니에 든 처음 답을 보고, 듣기 단추로 다시 들어요. 틀렸으면 카드를 바꿔 고친 답을 넣어요.',
                levels: LV({ mode: 'listen', basket: '고친 답' }),
                items: [
                  { prompt: '친구는 누나 나이를 30살로 적었어요. 다시 듣고 맞는 나이로 고쳐 보세요.',
                    toolOptions: LISTEN('My sister is thirteen years old. She is in middle school.', [C('n13', '13살'), C('n30', '30살')], '고친 답'),
                    state: { at: { n30: 0 } },
                    target: { listen: 'n13' }, difficulty: 0.2,
                    hints: ['힘이 숫자의 앞에 있는지 뒤에 있는지, 끝소리가 길게 끌리는지 들어요. 중학생이라는 말도 단서예요.', '바구니에 든 카드가 들은 소리와 같은지 다시 들어 보세요. 힘이 뒤에 있었다면 -teen이에요.', 'thir-TEEN은 13이에요. 중학생 나이와도 맞아요.'] },
                  { prompt: '친구는 50번 버스라고 적었어요. 다시 듣고 맞는 버스 번호로 고쳐 보세요.',
                    toolOptions: LISTEN('Take bus number fifteen to the museum. It comes every ten minutes.', [C('b15', '15번 버스'), C('b50', '50번 버스'), C('b10', '10번 버스', '10분마다 온다는 말이에요.')], '고친 답'),
                    state: { at: { b50: 0 } },
                    target: { listen: 'b15' }, difficulty: 0.25,
                    hints: ['bus number 바로 뒤의 숫자를 들어요. 힘이 앞인지 뒤인지 손뼉으로 쳐 보세요.', '바구니에 든 번호의 힘 자리가 들은 소리와 같은지 다시 들어 보세요.', 'fif-TEEN — 힘이 뒤에 있고 끝이 길어요. 15번이에요.'],
                    levels: TIER([C('b15', '15번 버스'), C('b50', '50번 버스'), C('b10', '10번 버스', '10분마다 온다는 말이에요.')], ['b15', 'b50']) },
                  { prompt: '친구는 티셔츠 값을 14달러로 적었어요. 다시 듣고 맞는 값으로 고쳐 보세요.',
                    toolOptions: LISTEN('This T-shirt is forty dollars, but today it is on sale.', [C('d14', '14달러'), C('d40', '40달러'), C('d4', '4달러')], '고친 답'),
                    state: { at: { d14: 0 } },
                    target: { listen: 'd40' }, difficulty: 0.3,
                    hints: ['dollars 바로 앞의 숫자를 들어요. 끝소리가 짧게 끊기는지 길게 끌리는지 들어요.', '바구니에 든 값이 들은 소리와 같은지 다시 들어 보세요. 힘이 앞에 있었다면 -ty예요.', 'FOR-ty — 힘이 앞에 있고 끝이 짧아요. 40달러예요.'],
                    levels: TIER([C('d14', '14달러'), C('d40', '40달러'), C('d4', '4달러')], ['d14', 'd40']) },
                  { prompt: '친구는 학교 버스가 7시 15분에 온다고 적었어요. 다시 듣고 맞는 시각으로 고쳐 보세요.',
                    toolOptions: LISTEN('The school bus comes at seven fifty every morning. Please don\'t be late.', [C('t715', '7시 15분'), C('t750', '7시 50분'), C('t705', '7시 5분')], '고친 답'),
                    state: { at: { t715: 0 } },
                    target: { listen: 't750' }, difficulty: 0.3,
                    hints: ['seven 뒤의 숫자를 들어요. 힘의 자리와 끝소리로 -teen인지 -ty인지 정해요.', '바구니에 든 시각의 숫자가 -teen인지 -ty인지 다시 들어 보세요.', 'FIF-ty — 힘이 앞에 있어요. 7시 50분이에요.'],
                    levels: TIER([C('t715', '7시 15분'), C('t750', '7시 50분'), C('t705', '7시 5분')], ['t715', 't750']),
                    predict: { q: '처음 답이 바구니에 들어 있으면 그대로 두어야 할까요?', options: ['그대로 둬요', '다시 듣고 고쳐요'], answer: 1 },
                    conclude: '처음 답도 다시 들어 확인해요. 힘의 자리와 끝소리로 -teen과 -ty를 가를 수 있어요.' },
                ],
              },
              {
                id: 'a2', title: '활동 2. can과 can\'t 다시 들어 가리기', minutes: 13, tool: 'wordcards',
                teacher: '"can은 짧고 가볍게, can\'t는 길고 힘 있게 들려요. 끝의 t는 잘 안 들릴 수 있어요." 두 문장을 번갈아 읽어 주며 손을 들게 한다(can = 한 손, can\'t = 두 손). 할 수 있는 것을 모두 고르는 문항에서 but 앞뒤로 뜻이 바뀐다는 것을 짚는다.',
                task: '소개를 듣고 그 사람이 할 수 있는 것 카드만 골라요. 헷갈리면 다시 들어 can인지 can\'t인지 가려요.',
                levels: LV({ mode: 'listen', basket: '할 수 있는 것' }),
                items: [
                  { prompt: '준호의 소개를 듣고, 준호가 할 수 있는 것을 모두 골라 보세요.',
                    toolOptions: LISTEN('Hi, I\'m Junho. I can ride a bike, but I can\'t swim. I can play the guitar.', [C('bike', '자전거 타기'), C('guitar', '기타 치기'), C('swim', '수영하기', 'I can\'t swim — 수영은 못 해요.')], '할 수 있는 것'),
                    target: { listen: ['bike', 'guitar'] }, difficulty: 0.25,
                    hints: ['can은 짧고 가볍게, can\'t는 길고 힘 있게 들려요. 문장마다 어느 쪽인지 들어요.', '고른 것 가운데 길고 힘 있는 can\'t와 함께 나온 것이 있는지 다시 들어 보세요.', 'ride a bike와 play the guitar는 can, swim은 can\'t예요.'],
                    levels: TIER([C('bike', '자전거 타기'), C('guitar', '기타 치기'), C('swim', '수영하기', 'I can\'t swim — 수영은 못 해요.')], null, [C('ski', '스키 타기', '스키는 소개에 나오지 않아요.')]) },
                  { prompt: '하린이의 소개를 듣고, 하린이가 할 수 있는 것을 모두 골라 보세요.',
                    toolOptions: LISTEN('My name is Harin. I can\'t cook, but I can bake cookies. I can speak Chinese a little. I can\'t play chess.', [C('bake', '쿠키 굽기'), C('chinese', '중국어 조금 하기'), C('cook', '요리하기', 'I can\'t cook — 요리는 못 해요.'), C('chess', '체스 두기', 'I can\'t play chess — 체스는 못 둬요.')], '할 수 있는 것'),
                    target: { listen: ['bake', 'chinese'] }, difficulty: 0.35,
                    hints: ['but 앞뒤로 뜻이 바뀌어요. 문장마다 can인지 can\'t인지 손가락 하나·둘로 표시하며 들어요.', '고른 것 가운데 can\'t와 함께 나온 것이 있는지 다시 들어 보세요.', 'bake cookies와 speak Chinese가 can이에요. cook과 chess는 can\'t예요.'],
                    levels: TIER([C('bake', '쿠키 굽기'), C('chinese', '중국어 조금 하기'), C('cook', '요리하기', 'I can\'t cook — 요리는 못 해요.'), C('chess', '체스 두기', 'I can\'t play chess — 체스는 못 둬요.')], ['bake', 'chinese', 'cook']) },
                  { prompt: '수영장 안전 안내를 듣고, 수영장에서 해도 되는 것을 모두 골라 보세요.',
                    toolOptions: LISTEN('At the pool, you can use the slide. You can\'t run. You can\'t eat in the water. You can rest on the chairs.', [C('slide', '미끄럼틀 타기'), C('rest', '의자에서 쉬기'), C('run', '뛰어다니기', 'You can\'t run — 뛰면 안 돼요.'), C('eat', '물속에서 먹기', 'You can\'t eat in the water — 물속에서 먹으면 안 돼요.')], '해도 되는 것'),
                    target: { listen: ['slide', 'rest'] }, difficulty: 0.3,
                    hints: ['규칙 안내에서 can은 "해도 돼요", can\'t는 "하면 안 돼요"예요. 문장마다 어느 쪽인지 들어요.', '고른 것 가운데 can\'t 규칙이 있는지 다시 들어 보세요.', 'use the slide와 rest on the chairs가 can이에요.'],
                    levels: TIER([C('slide', '미끄럼틀 타기'), C('rest', '의자에서 쉬기'), C('run', '뛰어다니기', 'You can\'t run — 뛰면 안 돼요.'), C('eat', '물속에서 먹기', 'You can\'t eat in the water — 물속에서 먹으면 안 돼요.')], ['slide', 'rest', 'run']) },
                ],
              },
            ],
          },
          {
            id: 'wrapup', title: '정리', minutes: 7,
            teacher: '"-teen과 -ty는 어떻게 가르나요? can과 can\'t는요?" 학생 말로 "힘의 자리와 끝소리", "길이와 힘"을 정리하고, 손뼉으로 fif-TEEN, FIF-ty를 함께 쳐 본다. "헷갈리면 다시 들어 고쳐요."라고 말한 뒤 출구 질문을 푼다. 출구 1번을 틀린 학생과는 다음 시간 시작 전에 숫자 짝 다섯 개를 짝 듣기로 연습한다.',
            exitTicket: [
              { type: 'tool', tool: 'wordcards', options: LISTEN('My grandfather is seventy years old, and he still plays tennis.', [C('n17', '17살'), C('n70', '70살'), C('n7', '7살')], '들은 나이'), prompt: '할아버지는 몇 살인가요? 듣고 알맞은 카드를 골라 보세요.', target: { listen: 'n70' }, difficulty: 0.25 },
              { type: 'choice', prompt: '"I can\'t dance." 를 들었어요. 무슨 뜻인가요?', options: ['나는 춤을 출 수 있어요', '나는 춤을 못 춰요', '나는 춤을 좋아해요'], answer: 1, difficulty: 0.15, explain: 'can\'t는 할 수 없다는 뜻이에요. can보다 길고 힘 있게 들려요.' },
              { type: 'mood', prompt: '오늘 헷갈리는 소리 다시 듣기는 어땠나요?' },
            ],
          },
        ],
        worksheet: {
          title: '헷갈리는 소리 다시 듣기',
          items: [
            { type: 'table', prompt: '선생님이 읽어 주는 문장을 듣고 처음 답을 쓰세요. 다시 듣고 고친 답을 쓰세요.', columns: ['문장', '처음 답', '고친 답'], cells: [['1번 (나이)', '', ''], ['2번 (값)', '', ''], ['3번 (버스 번호)', '', '']], answer: '대본: ① My cousin is sixteen. ② The cap is sixty dollars. ③ Take bus nineteen. → 16 / 60 / 19' },
            { type: 'choice', prompt: '힘이 뒤에 있고 끝이 길게 끌리는 숫자는?', options: ['fourteen', 'forty'], answer: 'fourteen' },
            { type: 'blank', prompt: '"I can swim, but I can\'t dive." → 할 수 있는 것: ___ / 못 하는 것: ___' },
            { type: 'short', prompt: '내가 할 수 있는 것 하나와 못 하는 것 하나를 can, can\'t 로 쓰세요.' },
          ],
          easy: {
            note: '-teen = 힘이 뒤, 길게 / -ty = 힘이 앞, 짧게. can\'t는 can보다 길고 힘 있게 들려요.',
            items: [
              { type: 'table', prompt: '선생님이 읽어 주는 문장을 듣고 숫자를 쓰세요.', columns: ['문장', '숫자'], cells: [['1번', ''], ['2번', '']], answer: '16 / 60' },
              { type: 'choice', prompt: '13을 영어로 하면?', options: ['thirteen', 'thirty'], answer: 'thirteen' },
              { type: 'short', prompt: '내가 할 수 있는 것 하나를 I can ___. 으로 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '고를 카드가 처음 답과 고친 답 두 장 남짓으로 줄고, 맞게 넣으면 초록 테두리가 생기며 틀리면 까닭을 말하고 되돌아와요.',
          base: '처음 답을 다시 들어 고친 뒤 확인을 눌러요.',
          challenge: '10번·4달러·7시 5분 같은 비슷한 숫자 카드와 소개에 없는 활동(스키 타기) 카드가 남거나 더해져요.',
        },
        teacherNotes: '듣기 대본: 활동 1 ① My sister is thirteen years old. She is in middle school. ② Take bus number fifteen to the museum. It comes every ten minutes. ③ This T-shirt is forty dollars, but today it is on sale. ④ The school bus comes at seven fifty every morning. Please don\'t be late. 활동 2 ① Hi, I\'m Junho. I can ride a bike, but I can\'t swim. I can play the guitar. ② My name is Harin. I can\'t cook, but I can bake cookies. I can speak Chinese a little. I can\'t play chess. ③ At the pool, you can use the slide. You can\'t run. You can\'t eat in the water. You can rest on the chairs. 출구: My grandfather is seventy years old, and he still plays tennis. 활동 1은 바구니에 틀린 처음 답이 들어 있는 상태로 시작한다(처음 답 고치기 연습). 자주 보이는 어려움: ① 처음 답을 고치지 않고 확인을 누른다 → 다시 듣기를 한 번 하고 나서 확인하는 약속을 한다. ② -teen/-ty를 앞소리로만 가른다 → 손뼉으로 힘의 자리를 친다. ③ can\'t의 t가 안 들려 can으로 듣는다 → 소리의 길이와 힘으로 가르게 한다.',
      }),
      // ───────────────────────── 11차시 (extend) ─────────────────────────
      lesson(11, S07, {
        title: '안내 글을 다시 읽고 친구 메모의 틀린 곳 고치기',
        objective: '영어 안내 글을 보고 만든 메모를 글의 해당 대목과 한 줄씩 다시 견주어, 틀린 정보를 찾아 고치고 무엇이 달라졌는지 말할 수 있다.',
        illustration: {
          prompt: PROMPT('a child comparing a colorful school notice board with a small memo pad, using a magnifying glass and a pencil to fix a wrong line'),
          scene: SCENE('Check it again!', '메모와 글을 한 줄씩 견주어요', [
            { motif: 'star', x: 404, y: 60, s: 0.6 }, { motif: 'house', x: 392, y: 218, color: 'peach' }, { motif: 'leaf', x: 84, y: 214 },
          ]),
        },
        stages: [
          {
            id: 'intro', title: '도입', minutes: 7,
            teacher: '"지난 시간에는 들은 것을 다시 들어 고쳤어요. 읽은 글은 어떨까요? 한 번 읽고 메모했으면 끝일까요?" 대답을 들은 뒤 칠판에 "Field Day: May 14"와 친구 메모 "체육 대회: 5월 4일"을 나란히 쓴다. "어디가 다른가요? 이렇게 숫자 한 자리가 빠지면 어떤 일이 생길까요?" 하루 늦게 가거나 열흘 일찍 가는 일을 함께 말해 본다. "한 번 적은 답은 고치면 안 된다"고 말하는 학생에게 "글이 눈앞에 있으면 다시 견주어 고치는 것이 꼼꼼한 읽기예요."라고 짚는다.',
            student: '안내 글을 보고 쓴 메모가 글과 똑같은지 어떻게 확인할 수 있을까요? 한 줄씩 견주는 방법을 생각해 봐요.',
            demo: { tool: 'wordcards', options: Object.assign(PICK('고칠 줄'), { cards: [C('m1', '행사: 체육 대회'), C('m2', '날짜: 5월 4일')] }), sequence: [{ at: {} }, { at: { m2: 0 } }] },
          },
          {
            id: 'main', title: '전개', minutes: 26,
            activities: [
              {
                id: 'a1', title: '활동 1. 메모에서 글과 다른 줄 찾기', minutes: 11, tool: 'wordcards',
                teacher: '"메모 한 줄을 읽고, 글에서 같은 정보가 든 대목을 손가락으로 짚어요. 그리고 두 쪽을 견주어요." 숫자는 한 자리씩, 요일은 이름 끝까지 견주게 한다. 틀린 줄을 하나 찾자마자 확인을 누르는 학생에게 "틀린 줄이 하나라는 말은 없었어요. 남은 줄도 끝까지 견주어 보세요."라고 말한다. Thursday와 Tuesday처럼 앞이 같은 낱말은 끝까지 읽게 한다.',
                task: '안내 글과 친구 메모를 한 줄씩 견주어요. 글과 다른 메모 줄만 골라 바구니에 넣어요.',
                levels: LV(PICK('고칠 줄')),
                items: [
                  Object.assign({ prompt: '"Art Contest: Draw your favorite place. Send it by June 12. Use A4 paper." 메모에서 글과 다른 줄을 골라 보세요.',
                    target: { pick: ['m2'] }, difficulty: 0.15,
                    hints: ['메모 한 줄마다 글에서 같은 정보가 든 대목을 찾아 견주어요. 숫자는 한 자리씩 견주어요.', '고른 줄이 글과 정말 다른지, 고르지 않은 줄 가운데 글과 다른 것은 없는지 다시 읽어 보세요.', 'by June 12는 6월 12일까지예요. 메모의 날짜는 숫자 순서가 바뀌었어요.'] },
                    CD([C('m1', '주제: 내가 좋아하는 곳'), C('m2', '마감: 6월 21일'), C('m3', '종이: A4')], ['m1', 'm2'], [C('m4', '행사: 그림 대회', 'Art Contest는 그림 대회가 맞아요. 고칠 필요가 없어요.')])),
                  Object.assign({ prompt: '"Swimming Lessons: every Tuesday and Thursday, 4 p.m. Bring a swim cap. Ages 10-13." 메모에서 글과 다른 줄을 모두 골라 보세요.',
                    target: { pick: ['m1', 'm4'] }, difficulty: 0.25,
                    hints: ['요일·시각·준비물·나이를 하나씩 글의 대목과 견주어요. 틀린 줄이 하나뿐이라고 여기지 말아요.', '고른 줄 말고도 글과 다른 줄이 남아 있지 않은지, 요일 이름과 나이 숫자를 다시 보세요.', 'Thursday는 목요일이에요. Ages 10-13은 열 살부터 열세 살까지예요.'] },
                    CD([C('m1', '요일: 화요일과 금요일'), C('m2', '시각: 오후 4시'), C('m3', '준비물: 수영모'), C('m4', '나이: 10~30살')], ['m1', 'm2', 'm4'], [C('m5', '배우는 것: 수영', 'Swimming Lessons는 수영 수업이 맞아요.')])),
                  Object.assign({ prompt: '"Movie Night is moved! New date: Friday, May 3. Time: 7 p.m. (not 6 p.m.). Place: the school hall." 고칠 메모 줄을 모두 골라 보세요.',
                    target: { pick: ['m2', 'm4'] }, difficulty: 0.3,
                    hints: ['moved(옮겼다), not(아니다)처럼 바뀐 것을 알리는 낱말을 찾아요. 그 낱말 가까이에 있는 정보를 메모와 견주어요.', '고른 줄 말고도 바뀌기 전 정보가 남은 줄이 있는지, 행사가 없어진 것인지 옮겨진 것인지 다시 읽어 보세요.', '시각은 7 p.m.이고 6 p.m.은 바뀌기 전 시각이에요. moved는 날짜를 옮겼다는 뜻이지 취소가 아니에요.'],
                    predict: { q: '메모를 이미 다 썼다면 그대로 내도 될까요?', options: ['그대로 내요', '다시 견주어 고쳐요'], answer: 1 },
                    conclude: '바뀐 것을 알리는 말(moved, not)이 있으면 메모를 다시 견주어 고쳐야 해요.' },
                    CD([C('m1', '날짜: 5월 3일 금요일'), C('m2', '시각: 오후 6시'), C('m3', '장소: 학교 강당'), C('m4', '영화의 밤은 취소됨')], ['m2', 'm3', 'm4'])),
                ],
              },
              {
                id: 'a2', title: '활동 2. 처음 메모를 고친 메모로 바꾸기', minutes: 15, tool: 'story',
                teacher: '"메모 칸에 처음 넣은 카드가 들어 있어요. 글과 견주어 맞으면 두고, 틀리면 빼고 맞는 카드로 바꿔요." 다 한 뒤 짝에게 "처음에는 ___ 였는데 글을 다시 보니 ___ 이었어." 꼴로 고친 것을 말하게 한다. 모든 카드를 빼고 처음부터 다시 넣는 학생에게 "맞는 칸은 그대로 두어도 돼요. 고칠 칸만 찾아요."라고 말한다. 3:20과 2:30처럼 숫자가 같고 차례가 다른 카드에 주의시킨다.',
                task: '메모 칸에 든 처음 카드를 글과 견주어요. 틀린 칸만 맞는 카드로 바꿔 고친 메모를 만들어요.',
                levels: LV({ mode: 'fill', title: 'My Memo' }),
                items: [
                  Object.assign({ prompt: '"Science Fair: Wednesday, 2:30 p.m., Room 204. Show your project to the class." 처음 메모를 글과 견주어 고쳐 보세요.',
                    state: { at: { Monday: 0, '2:30 p.m.': 1, 240: 2 } },
                    target: { fill: { day: 'Wednesday', time: '2:30 p.m.', room: '204' } }, difficulty: 0.2,
                    hints: ['메모 칸마다 글에서 같은 정보를 찾아 한 자리씩 견주어요. 맞는 칸은 그대로 둬요.', '요일 칸과 교실 번호 칸을 다시 보세요. 숫자 차례가 글과 같은가요?', '글에는 Wednesday와 Room 204가 있어요. 시각 칸은 처음 그대로 맞아요.'] },
                    CD(['Wednesday', 'Monday', '2:30 p.m.', '3:20 p.m.', '204', '240'], ['Wednesday', 'Monday', '2:30 p.m.', '204', '240'], ['2:03 p.m.'], null,
                      { slots: [{ id: 'day', label: 'Day: ___' }, { id: 'time', label: 'Time: ___' }, { id: 'room', label: 'Room: ___' }] })),
                  Object.assign({ prompt: '"Hi, Jina! The picnic is on Saturday at Lake Park. Let\'s meet at 11. Bring some fruit. — Amy" 처음 메모를 고쳐 보세요.',
                    state: { at: { Saturday: 0, 'Lake School': 1, juice: 2 } },
                    target: { fill: { day: 'Saturday', place: 'Lake Park', bring: 'fruit' } }, difficulty: 0.25,
                    hints: ['곳은 at 뒤, 가져올 것은 Bring 뒤에 나와요. 메모 칸과 그 대목을 견주어요.', '장소 칸의 둘째 낱말과 가져올 것 칸이 글과 같은지 다시 읽어 보세요.', 'at Lake Park, Bring some fruit예요. 요일 칸은 그대로 맞아요.'] },
                    CD(['Saturday', 'Sunday', 'Lake Park', 'Lake School', 'fruit', 'juice'], ['Saturday', 'Lake Park', 'Lake School', 'fruit', 'juice'], [C('at 11', 'at 11', '11시는 만나는 시각이에요. 이 메모에는 시각 칸이 없어요.')], null,
                      { slots: [{ id: 'day', label: 'Day: ___' }, { id: 'place', label: 'Place: ___' }, { id: 'bring', label: 'Bring: ___' }] })),
                  Object.assign({ prompt: '"Club Day is on Thursday. Oops! Sorry, it\'s on Friday. Meet in the gym, not in the library." 처음 메모를 고쳐 보세요.',
                    state: { at: { Thursday: 0, 'the library': 1 } },
                    target: { fill: { day: 'Friday', place: 'the gym' } }, difficulty: 0.3,
                    hints: ['Sorry, not처럼 앞말을 고치는 낱말을 찾아요. 그 뒤에 나온 정보가 마지막 정보예요.', '처음 메모의 두 칸이 고치기 전 정보인지 고친 뒤 정보인지 다시 읽어 보세요.', 'Sorry 뒤의 Friday, not 앞의 the gym이 마지막 정보예요.'],
                    predict: { q: '글에 요일이 두 번 나오면 어느 쪽을 메모할까요?', options: ['처음 나온 것', '고친 뒤의 것'], answer: 1 },
                    conclude: 'Sorry나 not 뒤에서 정보가 바뀌면 처음 메모를 고친 뒤의 정보로 바꿔요.' },
                    CD(['Thursday', 'Friday', 'the gym', 'the library'], null, ['Tuesday', 'the classroom'], null,
                      { slots: [{ id: 'day', label: 'Day: ___' }, { id: 'place', label: 'Place: ___' }] })),
                ],
              },
            ],
          },
          {
            id: 'wrapup', title: '정리', minutes: 7,
            teacher: '"메모를 고친 사람 손 들어 보세요. 고쳐서 손해를 본 사람이 있나요?" 고친 내용 두세 가지를 발표하게 하고 칠판에 "한 줄씩 견주기 → 다른 곳만 고치기"를 적는다. "글과 메모를 견줄 때 무엇을 가장 꼼꼼히 봤나요?"라고 묻고 출구 질문을 푼다. 1번을 틀린 학생은 다음 시간 도입 전에 숫자 카드 견주기를 짝과 한 번 더 한다.',
            exitTicket: [
              { type: 'tool', tool: 'wordcards', options: Object.assign(PICK('고칠 줄'), { cards: [C('m1', '요일: 월요일'), C('m2', '시각: 오전 9시'), C('m3', '값: 한 권에 10,000원')] }), prompt: '"Book Sale: Monday, 9 a.m. Books are 1,000 won each." 메모에서 글과 다른 줄을 골라 보세요.', target: { pick: ['m3'] }, difficulty: 0.2 },
              { type: 'choice', prompt: '글을 보고 쓴 메모가 글과 다르다는 것을 알았어요. 가장 좋은 것은?', options: ['한 번 쓴 메모이니 그대로 둔다', '다른 줄만 찾아 글에 맞게 고친다', '메모를 모두 지우고 처음부터 다시 쓴다'], answer: 1, difficulty: 0.1, explain: '한 줄씩 견주어 다른 곳만 고치면 빠르고 정확해요.' },
              { type: 'mood', prompt: '오늘 메모 고치기는 어땠나요?' },
            ],
          },
        ],
        worksheet: {
          title: '메모 다시 견주어 고치기',
          items: [
            { type: 'table', prompt: '"Cooking Class: Saturday, 10 a.m. - 12 p.m. Room 3. Bring an apron. Fee: 3,000 won." 친구 메모를 글과 견주어 고친 메모를 쓰세요.', columns: ['메모 칸', '친구 메모', '고친 메모'], cells: [['요일', '일요일', ''], ['시작 시각', '오전 10시', ''], ['준비물', '앞치마', ''], ['참가비', '300원', '']], answer: '토요일 / 오전 10시(그대로) / 앞치마(그대로) / 3,000원' },
            { type: 'choice', prompt: '"The concert is moved to Friday." 에서 moved의 뜻은?', options: ['취소되었다', '옮겨졌다', '끝났다'], answer: '옮겨졌다' },
            { type: 'blank', prompt: '처음에는 ___ 였는데 글을 다시 보니 ___ 이었어요. (위 표에서 고친 것 하나로 쓰세요)' },
            { type: 'short', prompt: '글과 메모를 견줄 때 내가 꼭 다시 볼 것 두 가지를 쓰세요.' },
          ],
          easy: {
            note: '메모 한 줄 → 글에서 같은 정보 찾기 → 숫자는 한 자리씩 견주기',
            items: [
              { type: 'table', prompt: '"Party: Friday, Room 5" 친구 메모를 글과 견주어 고치세요.', columns: ['메모 칸', '친구 메모', '고친 메모'], cells: [['요일', '목요일', ''], ['교실', '5번', '']], answer: '금요일 / 5번(그대로)' },
              { type: 'choice', prompt: 'Thursday 는 무슨 요일인가요?', options: ['화요일', '목요일'], answer: '목요일' },
              { type: 'short', prompt: '고친 메모 하나를 "처음 ___ → 고친 ___" 으로 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '견줄 메모 줄과 카드가 줄고, 맞게 넣으면 초록 테두리가 생기며 틀리면 까닭을 말하고 되돌아와요.',
          base: '메모를 끝까지 견준 뒤 확인을 눌러 스스로 고쳐요.',
          challenge: '맞는 메모 줄(고치면 안 되는 줄)과 2:03 p.m., Tuesday 같은 비슷한 카드가 더해져 끝까지 견주어야 해요.',
        },
        teacherNotes: '이 차시는 9·10차시의 "다시 듣고 고치기"를 읽기로 옮긴 것이다. 글은 모두 이 단원을 위해 지은 짧은 안내문이다. 활동 2는 메모 칸에 친구의 처음 답이 든 채로 시작한다(맞는 칸도 섞여 있어 다 빼고 다시 넣을 필요가 없다는 것을 겪게 한다). 자주 보이는 어려움: ① 틀린 줄 하나를 찾고 멈춘다 → 메모 줄 수만큼 견주었는지 손가락으로 세게 한다. ② Tuesday/Thursday, 2:30/3:20처럼 앞이나 숫자가 같은 것을 같다고 본다 → 끝 글자까지, 한 자리씩 견주게 한다. ③ moved를 취소로 읽는다 → 옮겼다는 뜻을 칠판에 남긴다. ④ "한 번 쓴 답은 고치면 안 된다" → 고친 답을 칭찬하고 처음 답과 나란히 적게 한다.',
      }),

      // ───────────────────────── 12차시 (extend) ─────────────────────────
      lesson(12, S07, {
        title: '말을 바꾼 대화를 다시 들으며 주문 메모 고치기',
        objective: '말을 바꾸는 대화(Actually, Wait, Sorry)를 다시 들어 마지막에 정한 것을 찾고, 처음 메모에서 고칠 줄을 골라 무엇이 달라졌는지 말할 수 있다.',
        illustration: {
          prompt: PROMPT('a small snack shop counter where a child changes an order while a friendly clerk rewrites a paper memo, with speech bubbles and a crossed-out burger picture'),
          scene: SCENE('Actually, ...', '마지막에 정한 것을 들어요', [
            { motif: 'sun', x: 410, y: 56, s: 0.7 }, { motif: 'house', x: 380, y: 218, color: 'buttercup' }, { motif: 'flower', x: 90, y: 226, color: 'rose' },
          ]),
        },
        stages: [
          {
            id: 'intro', title: '도입', minutes: 6,
            teacher: '"친구와 약속을 정하다가 \'아, 아니다. 그날 말고…\' 하고 말을 바꾼 적 있나요?" 경험을 두세 명에게 듣는다. "영어에서도 Actually, Wait, Sorry, No 같은 말 뒤에서 생각이 바뀌어요."라고 칠판에 네 낱말을 적는다. "A cheeseburger, please. Actually, a chicken burger."를 읽어 주고 "손님은 무엇을 먹게 될까요?"라고 묻는다. 처음 들은 cheeseburger를 말하는 학생이 있으면 "처음 들린 것이 답이 아닐 수 있어요. 바꾸는 말 뒤를 다시 들어요."라고 짚는다.',
            student: '대화에서 사람들이 말을 바꿀 때 어떤 낱말을 쓰는지 찾아봐요. 무엇이 마지막으로 정한 것일까요?',
            demo: { tool: 'wordcards', options: LISTEN('A cheeseburger, please. Actually, a chicken burger.', [C('cheese', '치즈버거'), C('chicken', '치킨버거')], '마지막 주문'), sequence: [{ at: {} }, { at: { chicken: 0 } }] },
          },
          {
            id: 'main', title: '전개', minutes: 27,
            activities: [
              {
                id: 'a1', title: '활동 1. 말을 바꾼 대화에서 마지막에 정한 것 찾기', minutes: 13, tool: 'wordcards',
                teacher: '"한 번 듣고 처음 답을 공책에 적어요. 그다음 Actually, Wait, Sorry가 나온 대목에 집중해 한 번 더 듣고 카드를 골라요." 다 고른 뒤 "처음 답과 고친 답이 같았던 사람? 달랐던 사람?"을 손으로 표시하게 한다. 바꾸기 전 정보를 고르는 학생에게 "그 말 뒤에 어떤 낱말이 왔나요?"라고 묻는다. 소리가 없으면 대본(teacherNotes)을 두 사람 목소리로 읽어 준다.',
                task: '대화를 듣고 처음 답을 공책에 적어요. 말을 바꾸는 낱말 뒤를 다시 듣고, 마지막에 정한 것 카드를 골라요.',
                levels: LV({ mode: 'listen', basket: '마지막에 정한 것' }),
                items: [
                  Object.assign({ prompt: '손님이 마지막에 주문한 것은 무엇인가요? 듣고 카드를 골라 보세요.',
                    target: { listen: 'chicken' }, difficulty: 0.15,
                    hints: ['Actually(사실은) 같은 말 뒤에서 주문이 바뀌어요. 그 뒤를 잘 들어요.', '고른 카드가 바꾸는 말 앞에 나온 것인지 뒤에 나온 것인지 다시 들어 보세요.', 'Actually 뒤에 chicken burger instead(대신)가 나와요.'] },
                    LI('Can I have a cheeseburger, please? Sure. Oh, actually, can I have a chicken burger instead?', [C('cheese', '치즈버거', 'actually 뒤에서 주문을 바꿨어요.'), C('chicken', '치킨버거'), C('fish', '생선버거')], '마지막 주문', ['cheese', 'chicken'], [C('both', '치즈버거와 치킨버거', '하나를 바꾼 것이지 둘 다 시킨 것이 아니에요.')])),
                  Object.assign({ prompt: '두 친구는 몇 시에 만나기로 했나요? 듣고 카드를 골라 보세요.',
                    target: { listen: 't4' }, difficulty: 0.2,
                    hints: ['Wait(잠깐), How about(어때)? 뒤에서 시각이 바뀌어요. 마지막에 둘 다 좋다고 한 시각을 찾아요.', '고른 시각에 두 사람이 모두 좋다고 했는지 다시 들어 보세요.', 'How about at four? 다음에 OK, four is fine.이라고 했어요.'] },
                    LI('Let\'s meet at the bus stop at three. Wait, I have a piano lesson then. How about at four? OK, four is fine.', [C('t3', '3시', '피아노 수업 때문에 바꿨어요.'), C('t4', '4시'), C('t2', '2시')], '만나는 시각', ['t3', 't4'], [C('t5', '5시')])),
                  Object.assign({ prompt: '마술 공연 표는 모두 몇 장을 사나요? 듣고 카드를 골라 보세요.',
                    target: { listen: 'n3' }, difficulty: 0.25,
                    hints: ['Sorry 뒤에서 표의 수가 바뀌어요. 왜 바뀌었는지도 함께 들어요.', '고른 수가 Sorry 앞의 수인지 뒤의 수인지 다시 들어 보세요.', '동생이 함께 와서 Three tickets, please.라고 고쳤어요.'] },
                    LI('I want two tickets for the magic show, please. Oh, sorry. My brother is coming too. Three tickets, please.', [C('n2', '2장', '동생이 와서 표를 늘렸어요.'), C('n3', '3장'), C('n4', '4장')], '표의 수', ['n2', 'n3'])),
                  Object.assign({ prompt: '마지막에 주문한 마실 것을 모두 골라 보세요. 듣기 단추를 누르세요.',
                    target: { listen: ['oj1', 'milk'] }, difficulty: 0.35,
                    hints: ['make that(그걸로 바꿔 줘요) 뒤에 마지막 주문이 다시 나와요. 그 뒤를 처음부터 끝까지 들어요.', '고른 카드의 잔 수가 마지막 주문과 같은지, 빠뜨린 마실 것이 없는지 다시 들어 보세요.', 'make that one orange juice and one milk — 오렌지 주스 한 잔과 우유 한 잔이에요.'],
                    predict: { q: '처음에 들은 주문(오렌지 주스 두 잔)이 답일까요?', options: ['네, 처음 것이 답', '바뀐 것을 들어야 해요'], answer: 1 },
                    conclude: '주문이 바뀌면 바꾸는 말 뒤를 끝까지 다시 들어 마지막 주문을 적어요.' },
                    LI('Two orange juices, please. Hmm, make that one orange juice and one milk.', [C('oj2', '오렌지 주스 2잔', 'make that 뒤에 주문을 바꿨어요.'), C('oj1', '오렌지 주스 1잔'), C('milk', '우유 1잔'), C('water', '물 1잔')], '마지막 주문', ['oj2', 'oj1', 'milk'])),
                ],
              },
              {
                id: 'a2', title: '활동 2. 다시 듣고 처음 메모에서 고칠 줄 고르기', minutes: 14, tool: 'wordcards',
                teacher: '"친구가 처음 듣고 쓴 메모예요. 다시 듣고, 고쳐야 할 줄만 골라요. 맞는 줄은 고르지 않아요." 고른 뒤 공책에 "처음 메모 → 고친 메모"를 두 줄로 쓰게 한다. 모든 줄을 고르는 학생에게 "다시 들었을 때 그대로 나온 줄도 있었나요?"라고 묻는다. 3번은 "취소"와 "장소가 바뀜"이 다르다는 것을 짚는다.',
                task: '듣기 단추로 다시 들으며 처음 메모의 줄을 하나씩 견주어요. 고쳐야 할 줄만 골라 바구니에 넣어요.',
                levels: LV({ mode: 'listen', basket: '고칠 줄' }),
                items: [
                  Object.assign({ prompt: '엄마에게 온 음성 메시지를 다시 듣고, 장보기 메모에서 고칠 줄을 모두 골라 보세요.',
                    target: { listen: ['apple', 'egg'] }, difficulty: 0.25,
                    hints: ['so(그래서), no(없음)가 나오는 대목에서 장보기 목록이 바뀌어요. 메모 줄을 하나씩 그 대목과 견주어요.', '고른 줄 가운데 다시 들어도 그대로인 것이 있는지, 바뀐 줄을 빠뜨리지 않았는지 보세요.', '사과 대신 배(pears)를 사고, 달걀은 오늘 사지 않아요(no eggs). 우유와 빵은 그대로예요.'] },
                    LI('Mom, I\'m at the store. They don\'t have apples, so I\'ll get pears. I\'ll buy milk and bread too. Oh, and no eggs today.', [C('apple', '사과 사기'), C('milk', '우유 사기', '우유는 그대로 사요.'), C('bread', '빵 사기', '빵은 그대로 사요.'), C('egg', '달걀 사기')], '고칠 줄', ['apple', 'milk', 'egg'])),
                  Object.assign({ prompt: '학급 파티 안내를 다시 듣고, 처음 메모에서 고칠 줄을 모두 골라 보세요.',
                    target: { listen: ['fri', 'two'] }, difficulty: 0.3,
                    hints: ['No, wait 뒤에서 무엇이 바뀌는지 들어요. 수를 말하는 대목도 메모와 견주어요.', '고른 줄 말고 수가 다른 줄이 있는지, 시각과 곳은 그대로인지 다시 들어 보세요.', '파티는 목요일(Thursday)이고 과자는 하나(one snack)예요. 1시와 교실은 그대로예요.'] },
                    LI('Our class party is on Friday. No, wait. It\'s on Thursday. It starts at one in our classroom. Please bring one snack.', [C('fri', '요일: 금요일'), C('one', '시각: 오후 1시', '1시는 그대로예요.'), C('room', '곳: 우리 교실', '교실은 그대로예요.'), C('two', '준비물: 과자 두 개')], '고칠 줄', ['fri', 'room', 'two'])),
                  Object.assign({ prompt: '축구 경기 안내를 다시 듣고, 처음 메모에서 고칠 줄을 모두 골라 보세요.',
                    target: { listen: ['park', 'cancel'] }, difficulty: 0.35,
                    hints: ['sorry, so 뒤에서 무엇이 바뀌는지 들어요. 경기를 하는지 안 하는지도 메모와 견주어요.', '고른 줄 말고 "비가 와서 생긴 일"을 잘못 적은 줄이 있는지 다시 들어 보세요.', '경기는 학교 체육관(school gym)에서 그대로 해요. 취소가 아니라 장소만 바뀌었어요. 10시는 그대로예요.'],
                    predict: { q: '비가 온다는 말이 들리면 경기는 꼭 취소일까요?', options: ['네, 취소예요', '끝까지 들어 봐야 해요'], answer: 1 },
                    conclude: '비가 온다는 말만 듣고 취소라고 쓰지 않고, 그 뒤에 바뀐 장소까지 다시 들어 고쳐요.' },
                    LI('The soccer game is at Green Park. Oh, sorry. It\'s raining there, so we will play in the school gym. The game starts at ten.', [C('park', '곳: 그린 공원'), C('ten', '시각: 10시', '10시는 그대로예요.'), C('cancel', '비가 와서 경기 취소')], '고칠 줄', null, [C('ball', '준비물: 축구공', '이 안내에는 준비물 말이 없어서 메모가 맞는지 알 수 없어요. 고칠 줄이 아니에요.')])),
                ],
              },
            ],
          },
          {
            id: 'wrapup', title: '정리', minutes: 7,
            teacher: '"오늘 주문이나 약속을 바꿀 때 어떤 낱말이 나왔나요?" Actually, Wait, Sorry, No, make that을 학생 말로 모은다. "처음 답과 고친 답이 달랐던 문항은 몇 개였나요? 고친 덕분에 무엇을 맞게 했나요?"라고 묻고 출구 질문을 푼다. 출구 1번을 틀린 학생은 다음 시간 전에 바꾸는 말 뒤를 짚으며 대본을 함께 읽는다.',
            exitTicket: [
              { type: 'tool', tool: 'wordcards', options: LISTEN('I\'d like a large pizza, please. Actually, make it a medium one. I\'m not that hungry.', [C('large', '큰 피자'), C('medium', '중간 피자'), C('small', '작은 피자')], '마지막 주문'), prompt: '손님이 마지막에 주문한 피자는 무엇인가요? 듣고 골라 보세요.', target: { listen: 'medium' }, difficulty: 0.25 },
              { type: 'choice', prompt: '"Let\'s go on Monday. Wait, no. Let\'s go on Tuesday." 두 사람은 언제 가나요?', options: ['월요일', '화요일', '월요일과 화요일'], answer: 1, difficulty: 0.15, explain: 'Wait, no 뒤에서 화요일로 바꿨어요.' },
              { type: 'mood', prompt: '오늘 말을 바꾼 대화 다시 듣기는 어땠나요?' },
            ],
          },
        ],
        worksheet: {
          title: '말을 바꾼 대화 다시 듣기',
          items: [
            { type: 'table', prompt: '선생님이 읽어 주는 대화를 듣고 처음 답을 쓰세요. 다시 듣고 고친 답과 바꾸는 말을 쓰세요.', columns: ['물음', '처음 답', '바꾸는 말', '고친 답'], cells: [['무엇을 사나요?', '', '', ''], ['몇 시에 만나나요?', '', '', ''], ['어디에서 만나나요?', '', '', '']], answer: '대본: ① A blue pen, please. Actually, a red one. ② Let\'s meet at five. Wait, six is better. ③ Meet at the park. Sorry, at the library. → 빨간 펜(Actually) / 6시(Wait) / 도서관(Sorry)' },
            { type: 'choice', prompt: '생각이 바뀔 때 쓰는 말이 아닌 것은?', options: ['Actually', 'Wait', 'Thank you'], answer: 'Thank you' },
            { type: 'blank', prompt: '"Two hot dogs, please. Hmm, make that three." → 마지막 주문: 핫도그 ___ 개' },
            { type: 'short', prompt: '내가 친구와 약속을 바꾸는 말을 Actually 나 Wait 로 시작하는 영어 한 문장으로 쓰세요.' },
          ],
          easy: {
            note: 'Actually, Wait, Sorry 뒤가 마지막에 정한 것이에요.',
            items: [
              { type: 'table', prompt: '선생님이 읽어 주는 대화를 듣고 쓰세요.', columns: ['물음', '처음 답', '고친 답'], cells: [['무엇을 사나요?', '', ''], ['몇 시에 만나나요?', '', '']], answer: '파란 펜 → 빨간 펜 / 5시 → 6시' },
              { type: 'choice', prompt: '"Tea, please. Actually, juice." 마지막 주문은?', options: ['차', '주스'], answer: '주스' },
              { type: 'short', prompt: '대화에서 들은 바꾸는 말 하나를 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '고를 카드가 줄고, 맞게 넣으면 초록 테두리가 생기며 틀리면 까닭을 말하고 되돌아와요.',
          base: '한 번 듣고 처음 답을 적은 뒤, 바꾸는 말 뒤를 다시 들어 고르고 확인을 눌러요.',
          challenge: '"둘 다 시킴"·5시 같은 그럴듯한 카드와, 안내에 나오지 않아 고칠 수 없는 메모 줄(축구공)이 더해져요.',
        },
        teacherNotes: '듣기 대본(소리가 없으면 두 사람 목소리로 두 번 읽음): 활동 1 ① Can I have a cheeseburger, please? / Sure. / Oh, actually, can I have a chicken burger instead? ② Let\'s meet at the bus stop at three. / Wait, I have a piano lesson then. How about at four? / OK, four is fine. ③ I want two tickets for the magic show, please. Oh, sorry. My brother is coming too. Three tickets, please. ④ Two orange juices, please. Hmm, make that one orange juice and one milk. 활동 2 ① Mom, I\'m at the store. They don\'t have apples, so I\'ll get pears. I\'ll buy milk and bread too. Oh, and no eggs today. ② Our class party is on Friday. No, wait. It\'s on Thursday. It starts at one in our classroom. Please bring one snack. ③ The soccer game is at Green Park. Oh, sorry. It\'s raining there, so we will play in the school gym. The game starts at ten. 출구: I\'d like a large pizza, please. Actually, make it a medium one. I\'m not that hungry. 자주 보이는 어려움: ① 처음 들린 정보를 답으로 고른다 → 바꾸는 말(Actually, Wait, Sorry, No, make that)에 손을 들게 하고 그 뒤를 다시 듣는다. ② 고칠 줄과 맞는 줄을 모두 고른다 → 메모 줄마다 "그대로/바뀜"을 공책에 적고 고른다. ③ 비가 온다는 말에 바로 취소로 판단한다 → so 뒤의 결과까지 듣게 한다.',
      }),
      // ───────────────────────── 13차시 (core) ─────────────────────────
      lesson(13, S08, {
        title: '동아리 누리집 소개 글에서 필요한 문장 갈무리하기',
        objective: '누리집의 짧은 영어 소개 글에서 내 목적에 필요한 문장을 골라 갈무리하고, 그 내용을 뜻은 같게 내 말로 바꾼 한 문장을 고를 수 있다.',
        illustration: {
          prompt: PROMPT('a tablet screen showing a cheerful school club homepage with a garden photo, and a child highlighting one sentence and saving it to a note card'),
          scene: SCENE('Green Club Homepage', '필요한 문장을 갈무리해요', [
            { motif: 'flower', x: 400, y: 226, color: 'mint' }, { motif: 'leaf', x: 90, y: 214 }, { motif: 'sun', x: 412, y: 56, s: 0.7 },
          ]),
        },
        stages: [
          {
            id: 'intro', title: '도입', minutes: 7,
            teacher: '화면에 짧은 동아리 누리집 글을 5초만 띄웠다가 내린다. "이 동아리는 무슨 요일에 모이나요?" 대부분 답하지 못하면 "화면을 쭉 내려 본 것은 훑어본 것이고, 읽은 것은 아니에요."라고 말한다. "누리집 글에서 필요한 부분을 표시하고 따로 옮겨 두는 것을 갈무리라고 해요. 무엇이 필요한지 먼저 정해야 갈무리할 수 있어요." 칠판에 "목적 정하기 → 필요한 문장 표시 → 내 말로 한 문장"을 적는다.',
            student: '누리집 글을 화면에서 쭉 내려 보기만 하면 다 읽은 것일까요? 필요한 부분을 어떻게 남겨 둘지 생각해 봐요.',
            demo: { tool: 'wordcards', options: Object.assign(PICK('갈무리한 문장'), { cards: [C('w1', 'Welcome to our club!'), C('w2', 'We meet on Fridays.')] }), sequence: [{ at: {} }, { at: { w2: 0 } }] },
          },
          {
            id: 'main', title: '전개', minutes: 26,
            activities: [
              {
                id: 'a1', title: '활동 1. 목적에 필요한 문장만 갈무리하기', minutes: 12, tool: 'wordcards',
                teacher: '"누리집 글을 문장 카드로 나눠 놓았어요. 먼저 내가 알고 싶은 것을 한국어로 말해 보세요. 그다음 그것을 알려 주는 문장만 골라요." 인사말(Welcome, Hello)이나 사진 보기 같은 문장을 고르는 학생에게 "이 문장이 내가 알고 싶은 것을 알려 주나요?"라고 묻는다. 도전 단계의 Monday가 든 함정 문장은 낱말만 같고 묻는 정보가 아니라는 것을 짚는다.',
                task: '목적을 먼저 읽어요. 누리집 문장 카드 가운데 그 목적에 필요한 문장만 골라 갈무리해요.',
                levels: LV(PICK('갈무리한 문장')),
                items: [
                  Object.assign({ prompt: 'Green Club 누리집이에요. 이 동아리가 언제 모이는지 알고 싶어요. 갈무리할 문장을 골라 보세요.',
                    target: { pick: ['g3'] }, difficulty: 0.15,
                    hints: ['"언제"를 알려 주는 낱말(요일, 시각, after, every)이 든 문장을 찾아요.', '고른 문장이 모이는 때를 알려 주는지, 낱말만 비슷한 것은 아닌지 다시 읽어 보세요.', 'We meet every Monday after school. — 모이는 때가 든 문장이에요.'] },
                    CD([C('g1', 'Welcome to the Green Club!'), C('g2', 'We plant flowers and vegetables in the school garden.'), C('g3', 'We meet every Monday after school.'), C('g4', 'Last year, we won a prize for our garden.')], ['g1', 'g3', 'g4'], [C('g5', 'Monday is a busy day for our teachers.', 'Monday가 있지만 동아리가 모이는 때를 알려 주지 않아요.')])),
                  Object.assign({ prompt: 'Robot Club 누리집이에요. 이 동아리가 무엇을 하는지 친구에게 알려 주려고 해요. 갈무리할 문장 두 개를 골라 보세요.',
                    target: { pick: ['r2', 'r3'] }, difficulty: 0.2,
                    hints: ['"하는 일"은 We 다음의 움직임 낱말(build, learn, make)에 나와요. 그 문장들을 찾아요.', '고른 문장이 하는 일인지, 곳이나 인사말은 아닌지 보세요. 하는 일이 하나 더 있지 않은지도 보세요.', 'We build small robots ...와 We also learn simple coding ... 두 문장이에요.'] },
                    CD([C('r1', 'Hello from the Robot Club!'), C('r2', 'We build small robots with blocks.'), C('r3', 'We also learn simple coding on tablets.'), C('r4', 'Our room is next to the library.', '이 문장은 동아리 방의 위치예요. 하는 일이 아니에요.'), C('r5', 'Click here to see more photos.')], ['r1', 'r2', 'r3', 'r4'])),
                  Object.assign({ prompt: '요리 교실 누리집이에요. 내가 들어갈 수 있는지와 무엇을 가져가야 하는지 알고 싶어요. 갈무리할 문장을 모두 골라 보세요.',
                    target: { pick: ['k2', 'k3'] }, difficulty: 0.25,
                    hints: ['목적이 두 가지예요. "누가 들어올 수 있나"와 "가져올 것"을 알려 주는 문장을 하나씩 찾아요.', '고른 문장이 두 목적을 모두 채우는지, 지난 활동 이야기가 섞이지 않았는지 보세요.', 'can join이 든 문장과 Bring이 든 문장이에요.'],
                    predict: { q: '누리집 글을 위에서 아래로 한 번 훑으면 두 정보를 다 기억할까요?', options: ['다 기억해요', '골라 남겨야 해요'], answer: 1 },
                    conclude: '필요한 문장을 골라 갈무리해 두면 훑어보고 잊어버리지 않아요.' },
                    CD([C('k1', 'Cooking Class for Kids'), C('k2', 'Students in grades 5 and 6 can join.'), C('k3', 'Bring an apron and a towel.'), C('k4', 'We made pizza last week. It was yummy!', '지난주 이야기예요. 들어갈 수 있는지, 무엇을 가져올지 알려 주지 않아요.')], ['k2', 'k3', 'k4'], [C('k5', 'Thank you for visiting our page.')])),
                ],
              },
              {
                id: 'a2', title: '활동 2. 갈무리한 문장을 내 말로 한 문장에 옮기기', minutes: 14, tool: 'wordcards',
                teacher: '"갈무리한 문장을 그대로 베끼면 내가 이해했는지 알 수 없어요. 뜻은 같고 말은 바꾼 문장을 골라요." every Monday = on Mondays, build = make처럼 바꿔 쓴 말을 칠판에 짝 지어 적는다. 그대로 베낀 카드를 고르는 학생에게 "뜻은 맞지만 오늘 할 일은 내 말로 바꾸기예요."라고 말한다. 뜻이 달라진 카드는 어느 낱말이 바뀌었는지 짚게 한다.',
                task: '갈무리한 문장을 읽어요. 글을 그대로 옮기지 않고 뜻은 같게 바꾼 문장 카드를 골라요.',
                levels: LV(PICK('내 말로 옮긴 문장')),
                items: [
                  Object.assign({ prompt: '갈무리한 문장: "We meet every Monday after school." 뜻은 같고 말을 바꾼 문장을 골라 보세요.',
                    target: { pick: ['p1'] }, difficulty: 0.2,
                    hints: ['때를 알려 주는 말(every, after)의 뜻이 그대로인지 보고, 글과 낱말이 똑같은 카드는 빼요.', '고른 카드의 때(요일마다, 수업 뒤)가 갈무리한 문장과 같은지 다시 견주어 보세요.', 'every Monday = on Mondays, after school = after classes로 바꾼 문장이에요.'] },
                    CD([C('p1', 'The club meets on Mondays after classes.'), C('p2', 'The club meets on one Monday morning.', 'every Monday는 월요일마다, after school은 수업 뒤예요. 뜻이 달라졌어요.'), C('p3', 'We meet every Monday after school.', '글을 그대로 베꼈어요. 내 말로 바꿔 봐요.')], ['p1', 'p2'])),
                  Object.assign({ prompt: '갈무리한 문장: "We build small robots with blocks. We also learn simple coding on tablets." 두 문장을 한 문장으로 바르게 옮긴 것을 골라 보세요.',
                    target: { pick: ['q1'] }, difficulty: 0.25,
                    hints: ['두 문장의 하는 일 두 가지가 모두 들어 있는지, 없던 말이 더해지지 않았는지 보세요.', '고른 카드의 움직임 낱말이 build, learn과 같은 뜻인지 다시 견주어 보세요.', '로봇을 만들고(make robots) 코딩을 배운다(learn coding)는 문장이에요.'] },
                    CD([C('q1', 'In this club, kids make robots and learn coding.'), C('q2', 'In this club, kids buy robots and tablets.', 'build는 사는 것이 아니라 만드는 거예요.'), C('q3', 'Kids learn coding in the library.', '도서관은 글에 없던 말이고, 로봇 만들기가 빠졌어요.')], ['q1', 'q2'], [C('q4', 'Kids make robots.', '코딩을 배운다는 말이 빠졌어요. 두 문장을 모두 담아요.')])),
                  Object.assign({ prompt: '갈무리한 문장: "Students in grades 5 and 6 can join. Bring an apron and a towel." 내 말로 바르게 옮긴 문장을 골라 보세요.',
                    target: { pick: ['s1'] }, difficulty: 0.3,
                    hints: ['누가 들어올 수 있는지와 가져올 것이 둘 다 들어 있고, 글을 그대로 베끼지 않은 카드를 찾아요.', '고른 카드의 학년과 가져올 것이 글과 같은지 다시 보세요.', 'grades 5 and 6 = fifth and sixth graders, Bring = need로 바꾼 문장이에요.'] },
                    CD([C('s1', 'Fifth and sixth graders can join, and they need an apron and a towel.'), C('s2', 'Only sixth graders can join the class.', '5학년도 들어올 수 있어요. 뜻이 달라졌어요.'), C('s3', 'Students in grades 5 and 6 can join. Bring an apron and a towel.', '글을 그대로 베꼈어요. 내 말로 바꿔 봐요.')], ['s1', 's3'], [C('s4', 'Fifth and sixth graders need an apron, a towel and a cap.', '모자(cap)는 글에 없던 말이에요.')])),
                ],
              },
            ],
          },
          {
            id: 'wrapup', title: '정리', minutes: 7,
            teacher: '"오늘 누리집 글을 갈무리할 때 무엇을 먼저 정했나요?" 목적을 먼저 정했다는 말이 나오면 칠판의 첫 칸에 밑줄을 긋는다. "갈무리한 문장을 내 말로 바꿀 때 무엇을 지켜야 하나요?" 뜻은 같게, 없던 말은 더하지 않기를 학생 말로 정리한 뒤 출구 질문을 푼다. 1번을 틀린 학생은 다음 시간에 목적을 한국어로 먼저 쓰고 고르게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'wordcards', options: Object.assign(PICK('갈무리한 문장'), { cards: [C('e1', 'Welcome to the Music Club!'), C('e2', 'We play the ukulele and sing together.'), C('e3', 'We practice on Wednesdays at lunchtime.'), C('e4', 'See our concert photos below.')] }), prompt: 'Music Club 누리집이에요. 언제 연습하는지 알고 싶어요. 갈무리할 문장을 골라 보세요.', target: { pick: ['e3'] }, difficulty: 0.2 },
              { type: 'choice', prompt: '누리집 글을 화면에서 빠르게 쭉 내려 보았어요. 어떻게 말하는 것이 맞을까요?', options: ['글을 다 읽었다', '훑어보았고 필요한 부분은 아직 갈무리하지 않았다', '글을 내 말로 옮겼다'], answer: 1, difficulty: 0.1, explain: '훑어보기는 읽기의 시작이에요. 필요한 문장을 골라 남겨야 읽은 것이 쌓여요.' },
              { type: 'mood', prompt: '오늘 누리집 글 갈무리하기는 어땠나요?' },
            ],
          },
        ],
        worksheet: {
          title: '누리집 글 갈무리하기',
          items: [
            { type: 'table', prompt: '"Hello! The Book Club reads one story every week. We meet in Room 7 on Tuesdays. New members are welcome." 목적에 맞는 문장을 옮겨 쓰세요.', columns: ['목적', '갈무리한 문장'], cells: [['언제 모이나요?', ''], ['어디에서 모이나요?', ''], ['무엇을 하나요?', '']], answer: 'We meet ... on Tuesdays / in Room 7 / reads one story every week' },
            { type: 'choice', prompt: '"We meet on Tuesdays." 를 내 말로 바르게 옮긴 것은?', options: ['They meet every Tuesday.', 'They meet on one Thursday.', 'We meet on Tuesdays.'], answer: 'They meet every Tuesday.' },
            { type: 'check', prompt: '갈무리할 때 내가 한 것에 표시하세요.', options: ['목적을 먼저 정했다', '필요한 문장만 골랐다', '내 말로 한 문장을 만들었다'] },
            { type: 'short', prompt: '위 Book Club 글을 내 말로 한 문장(영어 또는 한국어)으로 쓰세요.' },
          ],
          easy: {
            note: '목적(언제·어디·무엇) → 그 낱말이 든 문장 고르기 → 뜻은 같게 바꾸기',
            items: [
              { type: 'table', prompt: '"We meet in Room 7 on Tuesdays." 에서 찾아 쓰세요.', columns: ['목적', '찾은 말'], cells: [['언제?', ''], ['어디?', '']], answer: 'on Tuesdays / in Room 7' },
              { type: 'choice', prompt: 'Tuesday 는 무슨 요일인가요?', options: ['화요일', '목요일'], answer: '화요일' },
              { type: 'short', prompt: '이 동아리가 모이는 때를 한국어 한 문장으로 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '고를 문장 카드가 줄고, 맞게 고르면 초록 테두리가 생기며 틀리면 까닭을 말하고 되돌아와요.',
          base: '목적을 정하고 문장을 고른 뒤 확인을 눌러 스스로 고쳐요.',
          challenge: '같은 낱말(Monday)이 든 함정 문장, 한 가지가 빠지거나 없던 말이 더해진 바꿔 쓰기 카드가 더해져요.',
        },
        teacherNotes: '누리집 글은 모두 이 단원을 위해 지은 가상의 동아리 소개 글이다(실제 누리집이 아니다). 학교 정보 화면에 실제 영어 누리집을 띄울 때는 교사가 미리 내용을 확인하고 광고·외부 연결이 없는 쪽을 쓴다. "갈무리"는 필요한 부분을 표시해 따로 옮겨 두는 것(복사·화면 캡처·메모)이라고 처음에 설명한다. 자주 보이는 어려움: ① 화면을 훑고 다 읽었다고 여긴다 → 도입처럼 5초 훑기 뒤 물음 하나로 겪게 한다. ② 인사말·사진 안내 문장까지 갈무리한다 → 목적을 한국어로 먼저 쓰게 한다. ③ 내 말로 옮기기를 그대로 베끼기로 한다 → 같은 뜻 다른 말(every Monday = on Mondays) 짝을 칠판에 모아 둔다.',
      }),

      // ───────────────────────── 14차시 (practice) ─────────────────────────
      lesson(14, S08, {
        title: '박물관 누리집 메뉴에서 방문 정보 찾아 갈무리하기',
        objective: '누리집의 영어 메뉴 이름을 보고 알고 싶은 정보가 있는 곳을 고르고, 그 화면 글에서 방문에 필요한 정보(쉬는 날·표 값·가는 길)를 찾아 메모로 옮길 수 있다.',
        illustration: {
          prompt: PROMPT('a museum website on a laptop with menu tabs for hours, tickets and directions, and a family planning a visit with a small paper memo and a subway map'),
          scene: SCENE('Hours · Tickets · Directions', '메뉴를 골라 정보를 찾아요', [
            { motif: 'house', x: 390, y: 214, color: 'lavender' }, { motif: 'tree', x: 84, y: 214 }, { motif: 'star', x: 410, y: 58, s: 0.55 },
          ]),
        },
        stages: [
          {
            id: 'intro', title: '도입', minutes: 6,
            teacher: '"주말에 과학관에 가려고 해요. 몇 시에 여는지 알려면 누리집 첫 화면을 처음부터 끝까지 읽어야 할까요?" 대답을 들은 뒤 메뉴 이름 Hours, Tickets, Directions를 칠판에 쓰고 뜻을 짐작하게 한다. "메뉴 이름은 그 화면에 무엇이 있는지 알려 주는 제목이에요. 알고 싶은 것에 맞는 메뉴를 먼저 누르면 읽을 글이 짧아져요." 지난 시간의 갈무리를 떠올리게 하고, 오늘은 메뉴 고르기 → 필요한 줄 찾기 → 메모까지 한다고 말한다.',
            student: '누리집에서 필요한 정보를 빨리 찾으려면 어디부터 볼까요? 메뉴 이름이 무엇을 알려 주는지 짐작해 봐요.',
            demo: { tool: 'wordcards', options: { mode: 'match', slots: [{ id: 's1', label: 'When does it open?' }], cards: ['Hours', 'Tickets'] }, sequence: [{ at: {} }, { at: { Hours: 0 } }] },
          },
          {
            id: 'main', title: '전개', minutes: 27,
            activities: [
              {
                id: 'a1', title: '활동 1. 알고 싶은 것과 메뉴 이름 짝 짓기', minutes: 12, tool: 'wordcards',
                teacher: '"물음을 읽고, 그 답이 있을 메뉴 카드를 옆에 놓아요." Directions(가는 길), Rules(지켜야 할 것), Events(행사)처럼 처음 보는 메뉴 이름은 칠판에 뜻을 적어 둔다. 낱말이 비슷해 보이는 메뉴를 고르는 학생에게 "그 메뉴를 누르면 어떤 화면이 나올지 한국어로 말해 보세요."라고 묻는다. 도전 단계의 Gift Shop, Photo Gallery는 어느 물음과도 짝이 아니라는 것을 확인하게 한다.',
                task: '물음마다 그 답이 있을 메뉴 카드를 옆에 놓아요. 메뉴를 누르면 무엇이 나올지 생각하고 놓아요.',
                levels: LV({ mode: 'match' }),
                items: [
                  Object.assign({ prompt: '과학관 누리집이에요. 물음마다 답이 있을 메뉴를 짝 지어 보세요.',
                    target: { match: { s1: 'Hours', s2: 'Tickets', s3: 'Directions' } }, difficulty: 0.15,
                    hints: ['물음의 첫 낱말(When, How much, How)이 무엇을 묻는지 정하고, 그 정보를 담을 화면 이름을 찾아요.', '놓은 메뉴를 누르면 그 물음의 답이 나올지 하나씩 말해 보세요.', 'When = 여는 시간(Hours), How much = 표 값(Tickets), How do I get there = 가는 길(Directions)이에요.'] },
                    CD(['Hours', 'Tickets', 'Directions'], null, [C('Gift Shop', 'Gift Shop', '기념품 가게 화면이에요. 이 물음들의 답은 없어요.')], null,
                      { slots: [{ id: 's1', label: 'When does it open?' }, { id: 's2', label: 'How much is a ticket?' }, { id: 's3', label: 'How do I get there?' }] })),
                  Object.assign({ prompt: '동물원 누리집이에요. 물음마다 답이 있을 메뉴를 짝 지어 보세요.',
                    target: { match: { s1: 'Events', s2: 'Zoo Map', s3: 'Rules' } }, difficulty: 0.2,
                    hints: ['특별한 행사, 지도, 지켜야 할 것을 묻는 물음이에요. 메뉴 이름에서 같은 뜻의 낱말을 찾아요.', '놓은 메뉴 가운데 물음과 뜻이 이어지지 않는 것이 있는지 보세요. 개를 데려와도 되는지는 허락에 관한 물음이에요.', 'special shows = Events, map = Zoo Map, Can I bring my dog? = Rules(규칙)예요.'] },
                    CD(['Events', 'Zoo Map', 'Rules'], null, [C('Photo Gallery', 'Photo Gallery', '사진을 모아 둔 화면이에요. 이 물음들의 답은 없어요.')], null,
                      { slots: [{ id: 's1', label: 'What special shows are there this weekend?' }, { id: 's2', label: 'Where is the panda house?' }, { id: 's3', label: 'Can I bring my dog?' }] })),
                  Object.assign({ prompt: '도서관 누리집이에요. 물음마다 답이 있을 메뉴를 짝 지어 보세요.',
                    target: { match: { s1: 'Borrowing', s2: 'Opening Hours', s3: 'Library Card' } }, difficulty: 0.25,
                    hints: ['물음 속 열쇠 낱말(borrow, open, card)을 찾아 메뉴 이름에 같은 낱말이나 같은 뜻이 있는지 봐요.', '놓은 메뉴의 낱말이 물음의 열쇠 낱말과 이어지는지 하나씩 견주어 보세요.', 'borrow = Borrowing, open on Sunday = Opening Hours, get a library card = Library Card예요.'] },
                    CD(['Borrowing', 'Opening Hours', 'Library Card'], null, [C('Photo Gallery', 'Photo Gallery', '사진을 모아 둔 화면이에요. 이 물음들의 답은 없어요.')], null,
                      { slots: [{ id: 's1', label: 'How many books can I borrow?' }, { id: 's2', label: 'Is it open on Sunday?' }, { id: 's3', label: 'How can I get a card?' }] })),
                ],
              },
              {
                id: 'a2', title: '활동 2. 화면 글에서 방문 정보를 메모로 옮기기', minutes: 15, tool: 'story',
                teacher: '"메뉴를 눌러 나온 화면 글이에요. 메모 칸 이름이 찾을 정보예요." 표 값 문항에서는 "나와 동생의 나이를 먼저 확인하고, 그 나이가 들어가는 줄을 찾아요."라고 말한다. Tue - Sun을 보고 쉬는 날을 일요일로 고르는 학생에게 "Tue부터 Sun까지 여는 거예요. 그러면 빠진 요일은?"이라고 묻는다. 다 한 뒤 짝에게 메모를 보여 주며 "We can go on ___. My ticket is ___." 로 말하게 한다.',
                task: '화면 글을 읽고 메모 칸에 알맞은 카드를 넣어요. 나에게 맞는 줄(나이·요일)을 먼저 찾아요.',
                levels: LV({ mode: 'fill', title: 'Visit Memo' }),
                items: [
                  Object.assign({ prompt: 'Hours 화면: "Open: Tue - Sun, 10 a.m. - 6 p.m. Closed on Mondays." 메모를 완성하세요.',
                    target: { fill: { closed: 'Monday', open: '10 a.m.' } }, difficulty: 0.2,
                    hints: ['Closed(닫음)가 든 줄에서 쉬는 날을, 시간 범위의 앞쪽에서 여는 시각을 찾아요.', '넣은 요일이 여는 날인지 닫는 날인지, 넣은 시각이 여는 시각인지 닫는 시각인지 다시 보세요.', 'Closed on Mondays — 월요일에 쉬어요. 10 a.m. - 6 p.m.의 앞이 여는 시각이에요.'] },
                    CD(['Monday', 'Sunday', '10 a.m.', '6 p.m.'], null, ['Tuesday'], null,
                      { slots: [{ id: 'closed', label: 'Closed on: ___' }, { id: 'open', label: 'Opens at: ___' }] })),
                  Object.assign({ prompt: 'Tickets 화면: "Kids (7-12): 2,000 won. Adults: 5,000 won. Under 7: free." 나는 12살, 동생은 5살이에요. 메모를 완성하세요.',
                    target: { fill: { me: '2,000 won', brother: 'free' } }, difficulty: 0.25,
                    hints: ['나이 범위(7-12, Under 7)를 먼저 보고, 나와 동생의 나이가 어느 줄에 드는지 정해요.', '넣은 값의 줄에 그 사람의 나이가 들어가는지 다시 견주어 보세요. Under 7은 일곱 살보다 어린 사람이에요.', '12살은 Kids (7-12) 줄, 5살은 Under 7 줄이에요.'] },
                    CD(['2,000 won', '5,000 won', 'free'], null, ['7,000 won'], null,
                      { slots: [{ id: 'me', label: 'My ticket (12): ___' }, { id: 'brother', label: 'My brother (5): ___' }] })),
                  Object.assign({ prompt: 'Directions 화면: "Take Subway Line 2 to City Hall Station. Use Exit 4. Walk for 5 minutes." 메모를 완성하세요.',
                    target: { fill: { line: 'Line 2', station: 'City Hall', exit: 'Exit 4' } }, difficulty: 0.3,
                    hints: ['숫자가 여러 번 나와요. 숫자 바로 앞 낱말(Line, Exit, Walk for)로 무엇의 숫자인지 정해요.', '넣은 지하철 노선 번호와 나가는 곳 번호가 바뀌지 않았는지 다시 보세요.', 'Line 2(2호선), City Hall Station(시청역), Exit 4(4번 출구)예요.'],
                    predict: { q: '화면 글에 숫자가 세 개(2, 4, 5)나 나와요. 아무 숫자나 넣어도 될까요?', options: ['아무거나 돼요', '앞 낱말을 봐야 해요'], answer: 1 },
                    conclude: '숫자 바로 앞 낱말(Line, Exit)을 보면 무엇의 숫자인지 알 수 있어요.' },
                    CD(['Line 2', 'Line 4', 'City Hall', 'Exit 4', 'Exit 2'], ['Line 2', 'Line 4', 'City Hall', 'Exit 4'], ['Exit 5'], null,
                      { slots: [{ id: 'line', label: 'Subway: ___' }, { id: 'station', label: 'Station: ___' }, { id: 'exit', label: 'Exit: ___' }] })),
                ],
              },
            ],
          },
          {
            id: 'wrapup', title: '정리', minutes: 7,
            teacher: '"오늘 누리집에서 정보를 빨리 찾은 방법은 무엇이었나요?" 메뉴 이름 먼저 보기, 메모 칸이 찾을 정보, 숫자 앞 낱말 보기를 학생 말로 모은다. 짝의 메모를 보고 "이 메모만 들고 박물관에 갈 수 있을까요? 빠진 정보는?"이라고 묻게 한 뒤 출구 질문을 푼다.',
            exitTicket: [
              { type: 'tool', tool: 'wordcards', options: { mode: 'match', shuffle: false, slots: [{ id: 's1', label: 'Can I eat in the museum?' }, { id: 's2', label: 'How much is it for kids?' }], cards: ['Rules', 'Tickets', 'Hours'] }, prompt: '미술관 누리집이에요. 물음마다 답이 있을 메뉴를 짝 지어 보세요.', target: { match: { s1: 'Rules', s2: 'Tickets' } }, difficulty: 0.2 },
              { type: 'choice', prompt: '"Open: Wed - Mon. Closed on Tuesdays." 이 박물관에 갈 수 없는 날은?', options: ['월요일', '화요일', '수요일'], answer: 1, difficulty: 0.2, explain: 'Closed on Tuesdays — 화요일에 쉬어요.' },
              { type: 'mood', prompt: '오늘 누리집에서 방문 정보 찾기는 어땠나요?' },
            ],
          },
        ],
        worksheet: {
          title: '누리집에서 방문 계획 세우기',
          items: [
            { type: 'table', prompt: '"Hours: Mon - Sat, 9 a.m. - 5 p.m. Closed on Sundays. Tickets: Kids 1,000 won, Adults 3,000 won." 를 읽고 메모하세요.', columns: ['메모 칸', '찾은 정보'], cells: [['쉬는 날', ''], ['문 닫는 시각', ''], ['나의 표 값', '']], answer: '일요일 / 5 p.m. / 1,000원' },
            { type: 'choice', prompt: '지하철로 가는 길을 알고 싶을 때 누를 메뉴는?', options: ['Events', 'Directions', 'Gift Shop'], answer: 'Directions' },
            { type: 'blank', prompt: '"Use Exit 3. Walk for 10 minutes." → 나가는 곳: ___ 번 출구, 걷는 시간: ___ 분' },
            { type: 'short', prompt: '가 보고 싶은 곳의 누리집에서 내가 먼저 누를 메뉴 이름 하나와 그 까닭을 쓰세요.' },
          ],
          easy: {
            note: 'Hours = 여는 시간, Tickets = 표 값, Directions = 가는 길',
            items: [
              { type: 'table', prompt: '"Closed on Sundays. Kids 1,000 won." 에서 찾아 쓰세요.', columns: ['메모 칸', '찾은 정보'], cells: [['쉬는 날', ''], ['어린이 표 값', '']], answer: '일요일 / 1,000원' },
              { type: 'choice', prompt: '표 값을 알고 싶을 때 누를 메뉴는?', options: ['Tickets', 'Hours'], answer: 'Tickets' },
              { type: 'short', prompt: 'Closed 의 뜻을 한국어로 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드가 줄고, 맞게 놓으면 초록 테두리가 생기며 틀리면 까닭을 말하고 되돌아와요.',
          base: '메뉴와 메모를 다 채운 뒤 확인을 눌러 스스로 고쳐요.',
          challenge: '어느 물음과도 짝이 아닌 메뉴(Gift Shop, Photo Gallery)와 Tuesday, 7,000 won, Exit 5 같은 비슷한 카드가 더해져요.',
        },
        teacherNotes: '누리집 화면 글은 모두 이 단원을 위해 지은 가상의 글이다. 실제 기관 누리집을 함께 볼 때는 교사가 미리 화면을 확인하고, 학생이 회원 가입이나 결제 화면으로 넘어가지 않게 한다. 메뉴 이름 뜻: Hours/Opening Hours 여는 시간, Tickets 표 값, Directions 가는 길, Events 행사, Rules 규칙, Borrowing 빌리기, Library Card 도서관 카드. 자주 보이는 어려움: ① 첫 화면 글을 처음부터 다 읽는다 → 메뉴 이름부터 보게 한다. ② Tue - Sun 같은 범위를 쉬는 날로 읽는다 → 여는 날 범위와 Closed 줄을 나누어 읽게 한다. ③ 화면의 숫자를 아무거나 옮긴다 → 숫자 앞 낱말에 동그라미를 친다.',
      }),

      // ───────────────────────── 15차시 (extend) ─────────────────────────
      lesson(15, S08, {
        title: '어린이 온라인 백과에서 동물 정보 갈무리하고 한 문장 카드 만들기',
        objective: '어린이용 온라인 백과의 영어 동물 소개 글에서 내 물음에 답하는 문장을 갈무리하고, 갈무리한 내용을 낱말 덩이로 한 문장 정보 카드로 만들 수 있다.',
        illustration: {
          prompt: PROMPT('a kids online encyclopedia page about sea otters floating and holding hands, with a child making a small fact card from the screen'),
          scene: SCENE('Animal Facts', '물음에 답하는 문장을 찾아요', [
            { motif: 'wave', y: 230 }, { motif: 'moon', x: 410, y: 58, s: 0.6 }, { motif: 'bird', x: 320, y: 78 },
          ]),
        },
        stages: [
          {
            id: 'intro', title: '도입', minutes: 6,
            teacher: '"과학 숙제로 해달을 조사한대요. 백과 누리집에 글이 스무 줄 있어요. 다 베껴 오면 숙제를 잘한 걸까요?" 대답을 들은 뒤 "내 물음을 먼저 정하고, 그 답이 든 문장만 갈무리해요. 그리고 내 말로 짧게 정보 카드를 만들어요."라고 말한다. 칠판에 "내 물음 → 답이 든 문장 → 한 문장 카드"를 적는다. "화면을 쭉 내렸으니 다 읽었다"는 학생에게 물음 하나("해달은 잘 때 어떻게 하나요?")로 확인해 본다.',
            student: '온라인 백과에서 조사할 때 글을 다 베끼면 될까요? 내 물음의 답을 어떻게 찾고 남길지 생각해 봐요.',
            demo: { tool: 'wordcards', options: { mode: 'order', cards: ['Koalas', 'eat leaves.'] }, sequence: [{ at: {} }, { at: { Koalas: 0, 'eat leaves.': 1 } }] },
          },
          {
            id: 'main', title: '전개', minutes: 27,
            activities: [
              {
                id: 'a1', title: '활동 1. 내 물음에 답하는 문장 갈무리하기', minutes: 13, tool: 'wordcards',
                teacher: '"물음을 한국어로 먼저 소리 내어 읽고, 백과 글 카드에서 그 답이 든 문장만 골라요." 재미있는 사실이지만 물음과 상관없는 문장(잘 때 손을 잡아요)을 고르는 학생에게 "재미있지요? 그런데 내 물음의 답인가요?"라고 묻는다. 물음이 두 가지인 문항은 공책에 물음을 ①② 번호로 나누어 쓰게 한다.',
                task: '물음을 먼저 읽어요. 백과 글 문장 카드 가운데 그 물음에 답하는 문장만 골라 갈무리해요.',
                levels: LV(PICK('갈무리한 문장')),
                items: [
                  Object.assign({ prompt: '해달 백과 글이에요. 물음: 해달은 무엇으로 조개껍데기를 깨나요? 답이 든 문장을 골라 보세요.',
                    target: { pick: ['o2'] }, difficulty: 0.15,
                    hints: ['"무엇으로"를 묻는 물음이에요. use(쓰다)나 with(~으로)가 든 문장을 찾아요.', '고른 문장에 조개껍데기(shells)가 나오는지 다시 읽어 보세요.', 'They use rocks to break open shells. — 돌을 써서 깨요.'] },
                    CD([C('o1', 'Sea otters live in the North Pacific Ocean.'), C('o2', 'They use rocks to break open shells.'), C('o3', 'Sea otters have very thick fur.'), C('o4', 'They often hold hands when they sleep.', '재미있는 사실이지만 조개를 깨는 방법이 아니에요.')], ['o1', 'o2', 'o4'])),
                  Object.assign({ prompt: '판다 백과 글이에요. 물음: ① 판다는 주로 무엇을 먹나요? ② 하루에 얼마나 오래 먹나요? 답이 든 문장을 모두 골라 보세요.',
                    target: { pick: ['p2', 'p3'] }, difficulty: 0.25,
                    hints: ['물음이 두 개예요. 먹는 것(eat)과 시간(hours)이 든 문장을 하나씩 찾아요.', '고른 문장이 두 물음에 하나씩 답하는지, 사는 곳 같은 다른 정보가 섞이지 않았는지 보세요.', 'They eat mostly bamboo.와 They spend 10 to 16 hours a day eating.이에요.'] },
                    CD([C('p1', 'Giant pandas live in the mountains of China.'), C('p2', 'They eat mostly bamboo.'), C('p3', 'They spend 10 to 16 hours a day eating.'), C('p4', 'Baby pandas are very small and pink.')], ['p1', 'p2', 'p3'], [C('p5', 'Pandas sleep for a few hours after eating.', '자는 시간이에요. 먹는 시간이 아니에요.')])),
                  Object.assign({ prompt: '황제펭귄 백과 글이에요. 물음: ① 어디에 사나요? ② 날 수 있나요? 답이 든 문장을 모두 골라 보세요.',
                    target: { pick: ['e1', 'e2'] }, difficulty: 0.3,
                    hints: ['사는 곳(live)과 날기(fly)가 든 문장을 하나씩 찾아요.', '고른 문장 가운데 펭귄의 키나 무리 같은 다른 정보가 섞였는지, 빠진 물음은 없는지 보세요.', 'Emperor penguins live in Antarctica.와 They cannot fly, but they swim very well.이에요.'],
                    predict: { q: '"Penguins are birds."(펭귄은 새예요)가 날 수 있는지에 대한 답일까요?', options: ['네, 새는 날아요', '아니요, 답이 아니에요'], answer: 1 },
                    conclude: '새라는 문장만 보고 짐작하지 않고, 물음(날 수 있나요?)에 바로 답하는 문장을 갈무리해요.' },
                    CD([C('e1', 'Emperor penguins live in Antarctica.'), C('e2', 'They cannot fly, but they swim very well.'), C('e3', 'They are the tallest of all penguins.'), C('e4', 'Penguins are birds.', '새라는 사실은 날 수 있는지에 대한 답이 아니에요.')], ['e1', 'e2', 'e4'], [C('e5', 'They live in big groups to keep warm.', 'live가 있지만 사는 곳이 아니라 사는 방법(무리 지어 삶)이에요.')])),
                ],
              },
              {
                id: 'a2', title: '활동 2. 갈무리한 정보로 한 문장 카드 만들기', minutes: 14, tool: 'wordcards',
                teacher: '"갈무리한 문장을 짧은 낱말 덩이로 나눠 놓았어요. 덩이를 차례대로 놓아 정보 카드 한 문장을 만들어요." 문장은 누가 → 무엇을 한다 → 어떻게·얼마나 순서로 놓으면 된다고 칠판에 적는다. 다 만든 뒤 짝에게 소리 내어 읽고, 백과 글과 뜻이 같은지 확인하게 한다. 덩이를 놓는 차례가 헷갈리는 학생에게 "누가 하는 일인지부터 놓아 보세요."라고 말한다.',
                task: '낱말 덩이를 차례대로 놓아 정보 카드 한 문장을 만들어요. 누가 → 무엇을 한다 → 어떻게 순서로 놓아요.',
                levels: { easy: { mode: 'order', live: true, instant: true }, base: { mode: 'order' }, challenge: { mode: 'order' } },
                items: [
                  { prompt: '해달 정보 카드를 만들어요. 낱말 덩이를 차례대로 놓아 한 문장을 만들어 보세요.',
                    toolOptions: { cards: ['Sea otters', 'break shells', 'with rocks.'] },
                    target: { order: ['Sea otters', 'break shells', 'with rocks.'] }, difficulty: 0.15,
                    hints: ['누가(동물 이름) → 무엇을 하나 → 무엇으로 순서로 놓아요. 마침표가 있는 덩이는 끝에 와요.', '놓은 첫 덩이가 하는 사람(동물)인지, 마침표 덩이가 끝에 있는지 보세요.', 'Sea otters → break shells → with rocks.'],
                    levels: { challenge: { prompt: '해달 정보 카드를 만들어요. 낱말 덩이 네 개를 차례대로 놓아 한 문장을 만들어 보세요.', toolOptions: { cards: ['Sea otters', 'break', 'shells', 'with rocks.'] }, target: { order: ['Sea otters', 'break', 'shells', 'with rocks.'] } } } },
                  { prompt: '판다 정보 카드를 만들어요. 낱말 덩이를 차례대로 놓아 한 문장을 만들어 보세요.',
                    toolOptions: { cards: ['Pandas', 'eat bamboo', 'for many hours', 'a day.'] },
                    target: { order: ['Pandas', 'eat bamboo', 'for many hours', 'a day.'] }, difficulty: 0.25,
                    hints: ['누가 → 무엇을 먹나 → 얼마나 오래 순서예요. 마침표 덩이를 끝에 두고 앞으로 채워요.', '"for many hours"와 "a day."의 차례를 다시 보세요. 어느 쪽에 마침표가 있나요?', 'Pandas → eat bamboo → for many hours → a day.'],
                    levels: { challenge: { prompt: '판다 정보 카드를 만들어요. 낱말 덩이 다섯 개를 차례대로 놓아 한 문장을 만들어 보세요.', toolOptions: { cards: ['Pandas', 'eat', 'bamboo', 'for many hours', 'a day.'] }, target: { order: ['Pandas', 'eat', 'bamboo', 'for many hours', 'a day.'] } } } },
                  { prompt: '황제펭귄 정보 카드를 만들어요. 낱말 덩이를 차례대로 놓아 한 문장을 만들어 보세요.',
                    toolOptions: { cards: ['Emperor penguins', 'can\'t fly,', 'but they', 'swim well.'] },
                    target: { order: ['Emperor penguins', 'can\'t fly,', 'but they', 'swim well.'] }, difficulty: 0.3,
                    hints: ['but(그러나)은 서로 반대되는 두 가지 사실을 잇는 말이에요. 쉼표가 붙은 덩이 뒤에 but이 와요.', '놓은 문장에서 but 앞이 못 하는 것, 뒤가 잘하는 것인지 보세요.', 'Emperor penguins → can\'t fly, → but they → swim well.'],
                    predict: { q: '정보 카드를 만들 때 백과 글을 통째로 베끼는 것이 좋을까요?', options: ['통째로 베껴요', '짧게 한 문장으로'], answer: 1 },
                    conclude: '물음에 답하는 정보만 짧은 한 문장으로 만들면 다시 볼 때 바로 알 수 있어요.',
                    levels: { challenge: { prompt: '황제펭귄 정보 카드를 만들어요. 낱말 덩이 다섯 개를 차례대로 놓아 한 문장을 만들어 보세요.', toolOptions: { cards: ['Emperor penguins', 'can\'t fly,', 'but', 'they', 'swim well.'] }, target: { order: ['Emperor penguins', 'can\'t fly,', 'but', 'they', 'swim well.'] } } } },
                ],
              },
            ],
          },
          {
            id: 'wrapup', title: '정리', minutes: 7,
            teacher: '"오늘 만든 정보 카드 세 장을 짝에게 읽어 주세요. 백과 글을 다 베꼈을 때보다 무엇이 좋나요?" 짧다, 물음의 답만 있다, 다시 보기 쉽다는 말을 모은다. "재미있는 사실과 내 물음의 답은 어떻게 다른가요?"라고 묻고 출구 질문을 푼다.',
            exitTicket: [
              { type: 'tool', tool: 'wordcards', options: Object.assign(PICK('갈무리한 문장'), { cards: [C('x1', 'Koalas live in Australia.'), C('x2', 'They sleep up to 20 hours a day.'), C('x3', 'Baby koalas are called joeys.')] }), prompt: '코알라 백과 글이에요. 물음: 코알라는 하루에 얼마나 자나요? 답이 든 문장을 골라 보세요.', target: { pick: ['x2'] }, difficulty: 0.15 },
              { type: 'choice', prompt: '"Camels can live for many days without water." 로 만든 정보 카드로 알맞은 것은?', options: ['Camels need water every hour.', 'Camels can go many days without water.', 'Camels live in the sea.'], answer: 1, difficulty: 0.2, explain: '뜻을 그대로 지키며 짧게 옮긴 문장이에요.' },
              { type: 'mood', prompt: '오늘 온라인 백과 조사하기는 어땠나요?' },
            ],
          },
        ],
        worksheet: {
          title: '온라인 백과로 정보 카드 만들기',
          items: [
            { type: 'table', prompt: '"Dolphins live in groups called pods. They talk with clicks and whistles. They breathe air through a hole on their head." 물음에 답하는 문장을 옮겨 쓰세요.', columns: ['내 물음', '답이 든 문장'], cells: [['돌고래는 어떻게 이야기하나요?', ''], ['돌고래는 어떻게 숨을 쉬나요?', '']], answer: 'They talk with clicks and whistles. / They breathe air through a hole on their head.' },
            { type: 'choice', prompt: '"돌고래는 무리 지어 사나요?" 에 답하는 문장은?', options: ['Dolphins live in groups called pods.', 'They talk with clicks and whistles.'], answer: 'Dolphins live in groups called pods.' },
            { type: 'blank', prompt: '정보 카드: Dolphins ___ with clicks and whistles.' },
            { type: 'short', prompt: '내가 조사하고 싶은 동물과 물음 하나를 쓰세요. (예: 기린 — How tall are giraffes?)' },
          ],
          easy: {
            note: '내 물음 → 물음의 열쇠 낱말(eat, live, sleep)이 든 문장 찾기',
            items: [
              { type: 'table', prompt: '"Dolphins talk with clicks." 에서 찾아 쓰세요.', columns: ['내 물음', '답'], cells: [['어떻게 이야기하나요?', '']], answer: 'with clicks' },
              { type: 'choice', prompt: 'live 의 뜻은?', options: ['살다', '먹다'], answer: '살다' },
              { type: 'choice', prompt: '"돌고래는 무엇으로 이야기하나요?" 의 답이 든 문장은?', options: ['Dolphins talk with clicks.', 'Dolphins live in the sea.'], answer: 'Dolphins talk with clicks.' },
              { type: 'short', prompt: '조사하고 싶은 동물 이름을 영어로 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '고를 문장 카드가 줄고, 놓을 때마다 맞으면 초록 테두리, 틀리면 까닭을 말하고 되돌아와요.',
          base: '물음에 답하는 문장을 고르고, 낱말 덩이를 차례대로 놓은 뒤 확인을 눌러요.',
          challenge: 'live·hours처럼 낱말만 같은 함정 문장이 더해지고, 정보 카드의 낱말 덩이가 더 잘게 나뉘어 차례를 더 따져야 해요.',
        },
        teacherNotes: '동물 정보는 널리 알려진 사실만 썼다: 해달은 북태평양에 살며 돌로 조개껍데기를 깨고 털이 매우 빽빽하며 잘 때 서로 손을 잡기도 한다. 자이언트판다는 중국 산지에 살며 주로 대나무를 먹고 하루 10~16시간쯤 먹는다. 황제펭귄은 남극에 살고 펭귄 가운데 가장 크며 날지 못하지만 헤엄을 잘 친다. 코알라는 하루 최대 20시간쯤 잔다. 글은 모두 이 차시를 위해 지은 짧은 백과풍 문장이다. 자주 보이는 어려움: ① 재미있는 사실을 물음의 답으로 고른다 → "내 물음의 답인가?"를 소리 내어 묻게 한다. ② 물음이 두 개일 때 하나만 찾는다 → 물음에 ①② 번호를 붙인다. ③ 정보 카드를 통째로 베낀다 → 누가 → 무엇을 한다 → 어떻게 틀로 짧게 쓰게 한다.',
      }),

      // ───────────────────────── 16차시 (core) ─────────────────────────
      lesson(16, S08, {
        title: '자막 없이 짧은 영상 내레이션 듣고 핵심 간추리기',
        objective: '짧은 영어 영상의 내레이션을 자막 없이 듣고 핵심 단계·정보 세 가지를 고르며, 영상 전체가 말하려는 것을 한 문장으로 간추린 것을 고를 수 있다.',
        illustration: {
          prompt: PROMPT('a classroom screen playing a short video about folding a paper boat, with the subtitle bar crossed out and children listening and writing three lines in notebooks'),
          scene: SCENE('Subtitles OFF', '귀로 듣고 세 줄로 간추려요', [
            { motif: 'wave', y: 232 }, { motif: 'sun', x: 410, y: 56, s: 0.7 }, { motif: 'cloud', x: 300, y: 64 },
          ]),
        },
        stages: [
          {
            id: 'intro', title: '도입', minutes: 7,
            teacher: '"영어 영상을 볼 때 자막을 켜고 보나요? 자막을 다 읽었으면 영어를 들은 걸까요?" 대답을 들은 뒤 "자막을 읽은 것은 읽기예요. 오늘은 자막 없이 귀로 듣고, 영상의 핵심을 세 줄로 간추려요."라고 말한다. 칠판에 "핵심 = 빼면 영상의 말이 안 되는 것 / 곁가지 = 빼도 되는 것"을 적는다. "종이배 만들기 영상에서 \'내 종이는 파란색이에요\'는 핵심일까요?" 하고 묻는다.',
            student: '자막을 읽으며 본 영상은 영어를 들은 것일까요? 영상에서 꼭 남겨야 할 핵심이 무엇인지 생각해 봐요.',
            demo: { tool: 'wordcards', options: LISTEN('First, fold the paper in half.', [C('fold', '종이를 반으로 접어요'), C('cut', '종이를 잘라요')], '들은 단계'), sequence: [{ at: {} }, { at: { fold: 0 } }] },
          },
          {
            id: 'main', title: '전개', minutes: 26,
            activities: [
              {
                id: 'a1', title: '활동 1. 자막 없이 듣고 핵심 세 가지 고르기', minutes: 14, tool: 'wordcards',
                teacher: '"영상 소리만 들려줄게요. 화면에 자막은 없어요. First, Next, Last나 tip(요령)처럼 핵심을 알려 주는 말에 귀를 모아요." 듣기 단추는 두 번까지 누르게 한다. 곁가지(좋아하는 색, 방이 작다는 말)를 고르는 학생에게 "그 말을 빼면 영상을 보고 따라 할 수 없나요?"라고 묻는다. 소리가 나지 않으면 교사가 대본을 영상 내레이션처럼 읽어 준다.',
                task: '듣기 단추를 눌러 자막 없이 내레이션을 들어요. 영상의 핵심 세 가지 카드만 골라요. 곁가지는 빼요.',
                levels: LV({ mode: 'listen', basket: '핵심 세 가지' }),
                items: [
                  Object.assign({ prompt: '종이배 만들기 영상이에요. 듣고 만드는 단계 세 가지를 골라 보세요.',
                    target: { listen: ['k1', 'k2', 'k3'] }, difficulty: 0.2,
                    hints: ['First, Next, Last 뒤에 단계가 나와요. 그 뒤의 움직임 말(fold, open)을 잡아요.', '고른 카드 가운데 단계가 아닌 말(좋아하는 것)이나 나오지 않은 말이 섞였는지 다시 들어 보세요.', '반으로 접기 → 모서리 접기 → 아래를 펴서 배 모양 만들기, 세 단계예요.'] },
                    LI('Today, I will show you how to make a paper boat. My paper is blue, my favorite color. First, fold the paper in half. Next, fold the corners down. Last, open the bottom and make a boat shape.', [C('k1', '종이를 반으로 접어요'), C('k2', '모서리를 접어 내려요'), C('k3', '아래를 펴서 배 모양을 만들어요'), C('d1', '파란 종이를 좋아해요', '만드는 사람이 좋아하는 색이에요. 만드는 단계가 아니에요.')], '핵심 세 가지', null, [C('d2', '가위로 종이를 잘라요', '영상에 나오지 않은 단계예요.')])),
                  Object.assign({ prompt: '물 아끼기 영상이에요. 듣고 영상이 알려 주는 요령 세 가지를 골라 보세요.',
                    target: { listen: ['w1', 'w2', 'w3'] }, difficulty: 0.25,
                    hints: ['three easy tips(쉬운 요령 셋)라고 미리 말해 줘요. 그 뒤에 이어지는 명령하는 말 세 개를 잡아요.', '고른 카드 가운데 요령이 아닌 말(욕실이 작아요)이 있는지, 빠진 요령은 없는지 다시 들어 보세요.', '이 닦을 때 물 잠그기, 샤워 짧게 하기, 새는 수도꼭지 고치기예요.'] },
                    LI('Do you want to save water? Here are three easy tips. Turn off the water when you brush your teeth. Take short showers. Fix leaky taps. My bathroom is very small, but these tips work in every home.', [C('w1', '이 닦을 때 물을 잠가요'), C('w2', '샤워를 짧게 해요'), C('w3', '새는 수도꼭지를 고쳐요'), C('d1', '욕실은 작아요', '만드는 사람의 욕실 이야기예요. 물 아끼는 요령이 아니에요.')], '핵심 세 가지', null, [C('d2', '물을 많이 마셔요', '영상에 나오지 않은 말이에요.')])),
                  Object.assign({ prompt: '시드니 여행 영상이에요. 듣고 꼭 가 볼 곳 세 곳을 골라 보세요.',
                    target: { listen: ['s1', 's2', 's3'] }, difficulty: 0.3,
                    hints: ['must-see places(꼭 가 볼 곳)라는 말 뒤에 이름 셋이 이어져요. 이름은 대문자로 시작하는 큰 낱말이에요.', '고른 카드 가운데 진행자 소개(이름, 사는 곳)가 섞였는지, 빠뜨린 곳은 없는지 다시 들어 보세요.', '오페라하우스, 본다이 해변, 타롱가 동물원이에요.'],
                    predict: { q: '자막이 없으면 곳 이름 세 개를 잡을 수 있을까요?', options: ['못 잡아요', '잡을 수 있어요'], answer: 1 },
                    conclude: '핵심을 알려 주는 말(must-see places, three tips)을 기다리면 자막 없이도 핵심을 잡을 수 있어요.' },
                    LI('Hi, I\'m Leo, and this is my city, Sydney. I live near the harbor. Here are three must-see places. The Opera House, Bondi Beach, and Taronga Zoo. Come and visit!', [C('s1', '오페라하우스'), C('s2', '본다이 해변'), C('s3', '타롱가 동물원'), C('d1', '레오의 집', '진행자가 사는 곳 소개예요. 꼭 가 볼 곳이 아니에요.')], '핵심 세 곳', null, [C('d2', '에펠탑', '시드니 영상에 나오지 않은 곳이에요.')])),
                ],
              },
              {
                id: 'a2', title: '활동 2. 영상이 말하려는 것을 한 문장으로 간추리기', minutes: 12, tool: 'wordcards',
                teacher: '"이번에는 세 줄보다 더 짧게, 영상 전체가 말하려는 것 한 문장을 골라요. But(그러나) 뒤, Please(해 주세요)가 든 말, important(중요해요)가 든 말이 영상의 핵심일 때가 많아요." 첫 문장만 듣고 고르는 학생에게 "영상 끝까지 들은 뒤에도 그 말이 맞나요?"라고 묻는다. 고른 뒤 공책에 한 문장을 한국어로 적게 한다.',
                task: '자막 없이 끝까지 듣고, 영상 전체가 말하려는 것을 간추린 한 문장 카드를 골라요.',
                levels: LV({ mode: 'listen', basket: '한 문장 간추리기' }),
                items: [
                  Object.assign({ prompt: '박쥐 소개 영상이에요. 끝까지 듣고 영상이 말하려는 것을 골라 보세요.',
                    target: { listen: 'm1' }, difficulty: 0.25,
                    hints: ['But(그러나) 뒤에서 영상이 하고 싶은 말이 나와요. 첫 문장은 많은 사람의 생각일 수 있어요.', '고른 카드가 But 앞의 말인지 뒤의 말인지, 영상에 없는 말을 더했는지 다시 들어 보세요.', 'But bats help us. 뒤에 벌레를 먹고 씨앗을 옮긴다는 까닭이 이어져요.'] },
                    LI('Many people think bats are scary. But bats help us. They eat lots of insects, and some bats carry seeds and help plants grow.', [C('m1', '박쥐는 사람과 자연에 도움을 줘요'), C('m2', '박쥐는 무서운 동물이에요', '많은 사람의 생각으로 먼저 소개했을 뿐이에요. But 뒤를 들어요.'), C('m3', '박쥐는 씨앗만 먹어요', '벌레를 먹고, 씨앗은 옮긴다고 했어요.')], '영상의 핵심', ['m1', 'm2'])),
                  Object.assign({ prompt: '학교 텃밭 영상이에요. 끝까지 듣고 영상이 말하려는 것을 골라 보세요.',
                    target: { listen: 'g1' }, difficulty: 0.25,
                    hints: ['Please(해 주세요)가 든 말이 영상이 바라는 것이에요. 그 앞뒤를 들어요.', '고른 카드가 영상이 바라는 것인지, 곁가지 정보(시각) 하나인지 다시 들어 보세요.', 'Please join the watering team. — 물 주기 모둠에 함께하자는 영상이에요.'] },
                    LI('Our school garden needs help! The plants get thirsty in summer. Please join the watering team. We water the plants every morning at eight thirty.', [C('g1', '여름에 텃밭에 물을 줄 친구를 모아요'), C('g2', '아침 8시 30분이에요', '물 주는 시각은 곁가지 정보예요. 영상이 말하려는 것 전체가 아니에요.'), C('g3', '텃밭의 식물이 모두 죽었어요', '목이 마르다(thirsty)고 했지, 죽었다는 말은 없어요.')], '영상의 핵심', ['g1', 'g3'])),
                  Object.assign({ prompt: '아침밥 영상이에요. 끝까지 듣고 영상이 말하려는 것을 골라 보세요.',
                    target: { listen: 'b1' }, difficulty: 0.3,
                    hints: ['important(중요해요)와 마지막에 하는 부탁(Try not to …)을 함께 들어요.', '고른 카드가 영상 전체의 말인지, 예로 든 음식 하나인지 다시 들어 보세요.', '아침밥은 힘을 주니 거르지 말자(Try not to skip it)는 영상이에요.'],
                    predict: { q: '영상에 바나나와 우유가 나와요. 이 영상은 바나나 이야기일까요?', options: ['바나나 이야기', '아침밥 이야기'], answer: 1 },
                    conclude: '예로 든 것(바나나)보다 영상이 되풀이하고 부탁하는 말(아침밥을 거르지 마요)이 핵심이에요.' },
                    LI('Breakfast is important. It gives you energy for the morning. Even a banana and a glass of milk is a good start. Try not to skip it!', [C('b1', '아침밥은 거르지 않고 먹는 것이 좋아요'), C('b2', '바나나와 우유가 가장 맛있어요', '바나나와 우유는 예로 든 것이에요.'), C('b3', '아침밥은 꼭 많이 먹어야 해요', '바나나 하나도 좋은 시작이라고 했어요. 많이 먹으라는 말은 없어요.')], '영상의 핵심', ['b1', 'b2'])),
                ],
              },
            ],
          },
          {
            id: 'wrapup', title: '정리', minutes: 7,
            teacher: '"자막 없이 들었는데 핵심을 찾은 문항은 몇 개였나요?" 손가락으로 표시하게 한다. "핵심을 알려 주는 신호 말은 무엇이었나요?" First·Next·Last, three tips, must-see, But, Please, important를 모은 뒤 출구 질문을 푼다. 공책에 오늘 영상 하나를 세 줄로 간추린 것을 짝과 바꾸어 읽게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'wordcards', options: LISTEN('Some people think cats don\'t love people. But cats show love in many ways. They follow you and sit next to you.', [C('m1', '고양이도 여러 방법으로 사랑을 보여요'), C('m2', '고양이는 사람을 좋아하지 않아요'), C('m3', '고양이는 늘 혼자 앉아요')], '영상의 핵심'), prompt: '고양이 영상이에요. 끝까지 듣고 영상이 말하려는 것을 골라 보세요.', target: { listen: 'm1' }, difficulty: 0.25 },
              { type: 'choice', prompt: '영어 영상을 자막을 켜고 보며 자막을 다 읽었어요. 어떻게 말하는 것이 맞을까요?', options: ['영어를 다 들었다', '자막을 읽었고, 듣기는 자막을 끄고 다시 확인해야 한다', '영상을 다 만들 수 있다'], answer: 1, difficulty: 0.1, explain: '자막을 읽은 것은 읽기예요. 자막 없이 다시 들어야 들은 만큼을 알 수 있어요.' },
              { type: 'mood', prompt: '오늘 자막 없이 영상 듣기는 어땠나요?' },
            ],
          },
        ],
        worksheet: {
          title: '영상 핵심 세 줄로 간추리기',
          items: [
            { type: 'table', prompt: '선생님이 읽어 주는 영상 내레이션을 자막 없이 듣고 핵심 세 줄을 쓰세요.', columns: ['신호 말', '핵심'], cells: [['First', ''], ['Then', ''], ['Finally', '']], answer: '대본: Let\'s make a fruit salad. I love summer fruit. First, wash the fruit. Then, cut it into small pieces. Finally, mix it with yogurt. → 과일 씻기 / 작게 자르기 / 요구르트와 섞기' },
            { type: 'choice', prompt: '위 영상에서 빼도 되는 곁가지 말은?', options: ['First, wash the fruit.', 'I love summer fruit.', 'Finally, mix it with yogurt.'], answer: 'I love summer fruit.' },
            { type: 'check', prompt: '자막 없이 다시 들었을 때 알아들은 만큼 표시하세요.', options: ['신호 말(First, Then, Finally)을 들었다', '핵심 세 가지를 들었다', '곁가지 말도 들었다'] },
            { type: 'short', prompt: '위 영상이 말하려는 것을 한 문장으로 간추려 쓰세요.' },
          ],
          easy: {
            note: '신호 말(First, Then, Finally, But, Please) 뒤가 핵심이에요.',
            items: [
              { type: 'table', prompt: '선생님이 읽어 주는 내레이션을 듣고 쓰세요.', columns: ['신호 말', '핵심'], cells: [['First', ''], ['Then', '']], answer: '과일 씻기 / 작게 자르기' },
              { type: 'choice', prompt: '"I love summer fruit." 는 핵심일까요, 곁가지일까요?', options: ['핵심', '곁가지'], answer: '곁가지' },
              { type: 'short', prompt: '영상에서 들은 영어 낱말 하나를 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '고를 카드가 줄고, 맞게 넣으면 초록 테두리가 생기며 틀리면 까닭을 말하고 되돌아와요.',
          base: '자막 없이 두 번까지 듣고 카드를 고른 뒤 확인을 눌러요.',
          challenge: '영상에 나오지 않은 단계·곳(가위로 자르기, 에펠탑) 같은 함정 카드가 더해지고, 간추리기 카드가 세 장 모두 남아 끝까지 따져야 해요.',
        },
        teacherNotes: '영상 내레이션은 모두 이 차시를 위해 지은 대본이다(실제 영상을 쓰려면 교사가 미리 길이 2분 안팎, 광고 없는 것을 고르고 자막을 끈다). 듣기 대본: 활동 1 ① Today, I will show you how to make a paper boat. My paper is blue, my favorite color. First, fold the paper in half. Next, fold the corners down. Last, open the bottom and make a boat shape. ② Do you want to save water? Here are three easy tips. Turn off the water when you brush your teeth. Take short showers. Fix leaky taps. My bathroom is very small, but these tips work in every home. ③ Hi, I\'m Leo, and this is my city, Sydney. I live near the harbor. Here are three must-see places. The Opera House, Bondi Beach, and Taronga Zoo. Come and visit! 활동 2 ① Many people think bats are scary. But bats help us. They eat lots of insects, and some bats carry seeds and help plants grow. ② Our school garden needs help! The plants get thirsty in summer. Please join the watering team. We water the plants every morning at eight thirty. ③ Breakfast is important. It gives you energy for the morning. Even a banana and a glass of milk is a good start. Try not to skip it! 출구: Some people think cats don\'t love people. But cats show love in many ways. They follow you and sit next to you. 자주 보이는 어려움: ① 자막을 읽은 것을 들은 것으로 여긴다 → 이 교구의 듣기 카드에는 영어 글이 없어 귀로만 듣는다는 것을 알린다. ② 곁가지(좋아하는 색)를 핵심으로 고른다 → "빼면 따라 할 수 없나?"로 가르게 한다. ③ 첫 문장을 핵심으로 고른다 → But 뒤를 끝까지 듣게 한다.',
      }),
      // ───────────────────────── 17차시 (practice) ─────────────────────────
      lesson(17, S08, {
        title: '앱 화면과 앱 음성 안내에서 필요한 정보 고르기',
        objective: '버스·날씨·걸음 수 앱의 영어 화면에서 목적에 맞는 줄을 고르고, 길 안내·학습·알림 앱의 영어 음성 안내를 듣고 필요한 정보를 고를 수 있다.',
        illustration: {
          prompt: PROMPT('a smartphone with several app screens floating around it — a bus arrival board, a weather forecast and a map with a voice guide arrow — and a child holding the phone at a bus stop'),
          scene: SCENE('Bus 12 → Zoo: 9 min', '앱 화면에서 필요한 줄을 골라요', [
            { motif: 'house', x: 392, y: 216, color: 'sky' }, { motif: 'tree', x: 80, y: 214 }, { motif: 'cloud', x: 320, y: 70 },
          ]),
        },
        stages: [
          {
            id: 'intro', title: '도입', minutes: 6,
            teacher: '"휴대전화 앱 화면에는 글이 짧게 많이 들어 있어요. 버스 앱에서 내가 탈 버스를 어떻게 찾나요?" 경험을 들은 뒤 칠판에 "Bus 7 → City Hall: 3 min"을 쓰고 "→ 뒤는 가는 곳, min은 분이에요."라고 읽는 법을 짚는다. "앱 화면도 처음부터 다 읽지 않아요. 목적에 맞는 줄 하나를 찾아요." 앱의 음성 안내도 영어로 나올 수 있다는 것을 말하고, 지난 시간의 "자막 없이 핵심 잡기"를 떠올리게 한다.',
            student: '앱 화면에서 내가 필요한 줄을 어떻게 빨리 찾을까요? → 와 min 같은 표시가 무엇을 뜻하는지 짐작해 봐요.',
            demo: { tool: 'wordcards', options: Object.assign(PICK('필요한 줄'), { cards: [C('a1', 'Bus 7 → City Hall: 3 min'), C('a2', 'Bus 9 → Park: 5 min')] }), sequence: [{ at: {} }, { at: { a2: 0 } }] },
          },
          {
            id: 'main', title: '전개', minutes: 27,
            activities: [
              {
                id: 'a1', title: '활동 1. 앱 화면에서 목적에 맞는 줄 고르기', minutes: 13, tool: 'wordcards',
                teacher: '"목적을 먼저 읽고, 앱 화면 줄 가운데 그 목적에 맞는 줄만 골라요." 버스 문항에서는 가는 곳과 걸리는 분을 함께 보아야 한다는 것을 짚는다. 가는 곳만 보고 첫 줄을 고르는 학생에게 "동물원에 가는 버스가 두 대예요. 어느 쪽이 더 빨리 오나요?"라고 묻는다. 걸음 수 문항은 "목표"와 "어제"를 나란히 견주어야 답이 된다는 것을 알려 준다.',
                task: '목적을 읽고 앱 화면 줄 카드 가운데 목적에 맞는 줄만 골라요. 숫자와 표시(→, min, °C)를 함께 봐요.',
                levels: LV(PICK('필요한 줄')),
                items: [
                  Object.assign({ prompt: '버스 앱이에요. 동물원에 가장 빨리 가는 버스를 알려 주는 줄을 골라 보세요.',
                    target: { pick: ['b2'] }, difficulty: 0.2,
                    hints: ['먼저 → 뒤의 가는 곳으로 줄을 줄이고, 남은 줄의 min(분)을 견주어요.', '고른 줄이 동물원에 가는 버스인지, 동물원 버스 가운데 더 빨리 오는지 다시 보세요.', 'Zoo로 가는 줄은 Bus 12(9분)와 Bus 7(15분)이에요. 9분이 더 빨라요.'] },
                    CD([C('b1', 'Bus 7 → City Hall: 3 min', '가장 빨리 오지만 시청으로 가는 버스예요.'), C('b2', 'Bus 12 → Zoo: 9 min'), C('b3', 'Bus 7 → Zoo: 15 min', '동물원에 가지만 15분 뒤에 와요.'), C('b4', 'Bus 30 → Airport: 20 min')], ['b1', 'b2', 'b3'])),
                  Object.assign({ prompt: '날씨 앱이에요. 이번 주에 비가 오는 날을 알려 주는 줄을 모두 골라 보세요.',
                    target: { pick: ['w2', 'w4'] }, difficulty: 0.2,
                    hints: ['날씨 낱말만 보고 줄을 골라요. 기온 숫자는 이 목적과 상관없어요.', '고른 줄 말고 비가 오는 날이 더 있는지, cloudy를 비로 보지 않았는지 다시 보세요.', 'rainy가 든 줄은 Tue와 Thu예요.'] },
                    CD([C('w1', 'Mon: sunny, 25°C'), C('w2', 'Tue: rainy, 18°C'), C('w3', 'Wed: cloudy, 21°C', 'cloudy는 흐림이에요. 비가 아니에요.'), C('w4', 'Thu: rainy, 16°C')], null, [C('w5', 'Fri: windy, 19°C', 'windy는 바람이 부는 날이에요.')])),
                  Object.assign({ prompt: '걸음 수 앱이에요. 어제 걸음 수가 목표를 넘었는지 알려면 어느 줄 두 개를 봐야 하나요? 골라 보세요.',
                    target: { pick: ['s2', 's3'] }, difficulty: 0.3,
                    hints: ['"어제"와 "목표"를 견주는 물음이에요. 그 두 낱말이 든 줄을 찾아요.', '고른 줄 가운데 오늘(Today) 줄이 섞였는지, 어제나 목표 줄을 빠뜨렸는지 보세요.', 'Goal: 6,000 steps와 Yesterday: 6,500 steps 줄이에요. 어제는 목표를 넘었어요.'],
                    predict: { q: '이 물음에 답하려면 줄 하나만 보면 될까요?', options: ['하나면 돼요', '두 줄을 견줘요'], answer: 1 },
                    conclude: '"넘었나?"처럼 견주는 물음은 견줄 두 줄을 함께 찾아야 답할 수 있어요.' },
                    CD([C('s1', 'Today: 4,200 steps', '오늘 걸음 수예요. 어제와는 상관없어요.'), C('s2', 'Goal: 6,000 steps'), C('s3', 'Yesterday: 6,500 steps'), C('s4', 'Walk more! You can do it!')], ['s1', 's2', 's3'])),
                ],
              },
              {
                id: 'a2', title: '활동 2. 앱 음성 안내를 듣고 정보 고르기', minutes: 14, tool: 'wordcards',
                teacher: '"이번에는 앱이 소리로 안내해요. 화면에 글이 없으니 귀로 찾을 정보를 정하고 들어요." 길 안내는 turn left, turn right, go straight를 몸으로(왼손·오른손·앞으로) 해 보며 듣게 한다. 학습 앱 문항은 숫자가 여러 개(3, 4, 8, 10) 나오니 "무엇의 숫자인지"를 함께 들으라고 한다. 소리가 나지 않으면 교사가 앱 목소리처럼 또박또박 읽어 준다.',
                task: '물음을 읽고 찾을 정보를 정해요. 듣기 단추로 앱 음성 안내를 듣고 알맞은 카드를 골라요.',
                levels: LV({ mode: 'listen', basket: '찾은 정보' }),
                items: [
                  Object.assign({ prompt: '길 안내 앱이에요. 은행에서 어느 쪽으로 가야 하나요? 듣고 골라 보세요.',
                    target: { listen: 'left' }, difficulty: 0.2,
                    hints: ['bank(은행)라는 낱말 가까이에서 방향 말(left, right, straight)을 잡아요.', '고른 방향이 은행에서 하는 일인지, 그 뒤에 하는 일인지 다시 들어 보세요.', 'turn left at the bank — 은행에서 왼쪽으로 돌아요.'] },
                    LI('In one hundred meters, turn left at the bank. Then go straight for two blocks. The library will be on your right.', [C('left', '왼쪽으로 돌아요'), C('right', '오른쪽으로 돌아요', '오른쪽(right)은 도서관이 있는 쪽이에요.'), C('straight', '곧장 가요', '곧장 가는 것은 은행을 지난 뒤예요.')], '은행에서', ['left', 'right'])),
                  Object.assign({ prompt: '영어 공부 앱이에요. 이번 공부에서 몇 점을 받았나요? 듣고 골라 보세요.',
                    target: { listen: 'score8' }, difficulty: 0.25,
                    hints: ['점수는 out of(~ 가운데)와 함께 나와요. 그 앞뒤 숫자를 들어요.', '고른 숫자가 공부 차례(Lesson) 번호인지 점수인지 다시 들어 보세요.', 'You got eight out of ten. — 10문제 가운데 8개를 맞혔어요.'] },
                    LI('Great job! You finished Lesson three. You got eight out of ten. Your next lesson is Lesson four, Animals.', [C('score8', '10문제 가운데 8개'), C('score3', '10문제 가운데 3개', '3은 마친 공부 차례(Lesson 3) 번호예요.'), C('score4', '10문제 가운데 4개', '4는 다음 공부 차례 번호예요.')], '받은 점수', ['score8', 'score3'])),
                  Object.assign({ prompt: '알림 앱이에요. 치과에 가는 시각과 가져갈 것을 모두 골라 보세요.',
                    target: { listen: ['t330', 'card'] }, difficulty: 0.3,
                    hints: ['찾을 정보가 두 가지예요. at 뒤의 시각과 Don\'t forget(잊지 마요) 뒤의 물건을 들어요.', '고른 카드가 시각 하나와 물건 하나인지, 날짜를 시각으로 고르지 않았는지 다시 들어 보세요.', 'tomorrow at three thirty, Don\'t forget your health card — 3시 30분, 건강 카드예요.'],
                    predict: { q: '알림 소리에 숫자가 하나만 나온다면 그것이 시각일까요?', options: ['꼭 시각이에요', 'at 뒤인지 들어요'], answer: 1 },
                    conclude: '시각은 at 뒤, 챙길 것은 Don\'t forget 뒤에 나와요. 신호 말로 정보를 가려 들어요.' },
                    LI('Reminder. Your dentist appointment is tomorrow at three thirty in the afternoon. Don\'t forget your health card.', [C('t330', '오후 3시 30분'), C('t303', '오후 3시 3분'), C('card', '건강 카드'), C('book', '공책', '공책 이야기는 없었어요.')], '찾은 정보', ['t330', 'card', 'book'], [C('today', '오늘', 'tomorrow는 내일이에요.')])),
                ],
              },
            ],
          },
          {
            id: 'wrapup', title: '정리', minutes: 7,
            teacher: '"앱 화면은 글이 짧은데 왜 헷갈렸을까요?" 가는 곳과 분을 함께 봐야 했던 것, 숫자가 여러 개였던 것을 학생 말로 모은다. "앱 화면을 읽을 때와 앱 소리를 들을 때 모두 처음에 무엇을 했나요?" 목적·찾을 정보 정하기를 다시 확인하고 출구 질문을 푼다.',
            exitTicket: [
              { type: 'tool', tool: 'wordcards', options: Object.assign(PICK('필요한 줄'), { cards: [C('e1', 'Movie A: 2:00 p.m. (Sold out)'), C('e2', 'Movie A: 4:30 p.m.'), C('e3', 'Movie B: 3:00 p.m.')] }), prompt: '영화 앱이에요. 영화 A를 볼 수 있는 시간을 알려 주는 줄을 골라 보세요.', target: { pick: ['e2'] }, difficulty: 0.25 },
              { type: 'choice', prompt: '길 안내 앱이 "Turn right at the park." 라고 말했어요. 어떻게 하나요?', options: ['공원에서 왼쪽으로 돌아요', '공원에서 오른쪽으로 돌아요', '공원에서 멈춰요'], answer: 1, difficulty: 0.15, explain: 'turn right — 오른쪽으로 돌아요.' },
              { type: 'mood', prompt: '오늘 앱 화면과 앱 소리에서 정보 찾기는 어땠나요?' },
            ],
          },
        ],
        worksheet: {
          title: '앱 화면과 앱 소리에서 정보 찾기',
          items: [
            { type: 'table', prompt: '버스 앱 "Bus 5 → Library: 6 min / Bus 21 → Library: 2 min / Bus 21 → Museum: 11 min" 을 보고 쓰세요.', columns: ['물음', '답'], cells: [['도서관에 가장 빨리 가는 버스는?', ''], ['박물관 버스는 몇 분 뒤에 오나요?', '']], answer: 'Bus 21(2분) / 11분' },
            { type: 'choice', prompt: '앱 화면 "Sat: snowy, -2°C" 의 날씨는?', options: ['비', '눈', '맑음'], answer: '눈' },
            { type: 'table', prompt: '선생님이 읽어 주는 길 안내를 듣고 차례대로 쓰세요.', columns: ['차례', '어떻게 가나요?'], cells: [['1', ''], ['2', '']], answer: '대본: Go straight for one block. Then turn right at the school. → 한 블록 곧장 / 학교에서 오른쪽' },
            { type: 'short', prompt: '내가 자주 쓰는 앱 하나를 쓰고, 그 앱 화면에서 가장 먼저 보는 줄이 무엇인지 쓰세요.' },
          ],
          easy: {
            note: '→ 뒤 = 가는 곳, min = 분, left = 왼쪽, right = 오른쪽',
            items: [
              { type: 'table', prompt: '"Bus 5 → Library: 6 min" 을 보고 쓰세요.', columns: ['물음', '답'], cells: [['가는 곳', ''], ['몇 분 뒤', '']], answer: '도서관 / 6분' },
              { type: 'choice', prompt: 'turn left 는 어느 쪽인가요?', options: ['왼쪽', '오른쪽'], answer: '왼쪽' },
              { type: 'short', prompt: '앱 화면에서 본 영어 낱말 하나를 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '고를 줄과 카드가 줄고, 맞게 넣으면 초록 테두리가 생기며 틀리면 까닭을 말하고 되돌아와요.',
          base: '화면 줄을 견주거나 소리를 듣고 고른 뒤 확인을 눌러요.',
          challenge: '바람 부는 날(windy)·오늘(today)처럼 비슷한 함정 카드가 더해지고, 걸음 수 문항처럼 두 줄을 견주어야 하는 문항이 남아요.',
        },
        teacherNotes: '앱 화면과 음성 안내는 모두 이 차시를 위해 지은 가상의 화면이다(실제 앱 이름을 쓰지 않는다). 듣기 대본: 활동 2 ① In one hundred meters, turn left at the bank. Then go straight for two blocks. The library will be on your right. ② Great job! You finished Lesson three. You got eight out of ten. Your next lesson is Lesson four, Animals. ③ Reminder. Your dentist appointment is tomorrow at three thirty in the afternoon. Don\'t forget your health card. 자주 보이는 어려움: ① 가는 곳만 보고 첫 줄을 고른다 → 같은 곳으로 가는 줄을 모두 찾고 분을 견주게 한다. ② cloudy를 비로 읽는다 → 날씨 낱말 카드를 다시 본다. ③ 앱 소리의 숫자를 무엇의 숫자인지 가리지 않는다 → out of, Lesson, at 같은 앞뒤 말을 함께 듣게 한다.',
      }),

      // ───────────────────────── 18차시 (extend) ─────────────────────────
      lesson(18, S08, {
        title: '자막을 끄고 다시 보며 내가 이해한 만큼 확인하기',
        objective: '짧은 영어 영상의 내레이션을 자막 없이 다시 듣고 내용 물음에 답한 뒤, 자막 없이 이해한 정도를 스스로 표시하고 다음에 할 일을 고를 수 있다.',
        illustration: {
          prompt: PROMPT('a child watching a short farm video on a tablet with the subtitle switch turned off, holding a three-step paper meter that shows how much they understood'),
          scene: SCENE('Subtitles OFF — How much?', '이해한 만큼 솔직하게 표시해요', [
            { motif: 'house', x: 392, y: 214, color: 'rose' }, { motif: 'tree', x: 84, y: 214 }, { motif: 'sun', x: 410, y: 56, s: 0.7 },
          ]),
        },
        stages: [
          {
            id: 'intro', title: '도입', minutes: 6,
            teacher: '"지난 시간에 자막 없이 영상을 들었어요. 자막을 켜고 볼 때와 무엇이 달랐나요?" 대답을 들은 뒤 "자막을 끄고 다시 보면 내가 영어로 얼마나 알아듣는지 알 수 있어요. 오늘은 듣고 답한 뒤, 이해한 만큼을 솔직하게 표시해요. 적게 알아들었다고 표시해도 괜찮아요. 그래야 다음에 무엇을 할지 정할 수 있어요."라고 말한다. 칠판에 "듣고 답하기 → 이해한 만큼 표시 → 다음에 할 일"을 적는다.',
            student: '자막을 끄고 영상을 다시 보면 무엇을 알 수 있을까요? 이해한 만큼을 솔직하게 표시하면 무엇이 좋을지 생각해 봐요.',
            demo: { tool: 'wordcards', options: LISTEN('Good morning! Welcome to Sunny Farm.', [C('farm', '농장'), C('zoo', '동물원')], '영상의 곳'), sequence: [{ at: {} }, { at: { farm: 0 } }] },
          },
          {
            id: 'main', title: '전개', minutes: 27,
            activities: [
              {
                id: 'a1', title: '활동 1. 자막 없이 농장 영상 듣고 내용 물음에 답하기', minutes: 15, tool: 'wordcards',
                teacher: '"농장 영상이 세 토막으로 나뉘어 있어요. 토막마다 물음을 먼저 읽고, 자막 없이 들어요." 한 토막을 들은 뒤 바로 공책에 "알아들은 낱말" 세 개를 적게 한다. 소리가 나지 않으면 교사가 대본을 영상처럼 한 번, 다시 한 번 읽어 준다. 모르는 낱말 때문에 포기하려는 학생에게 "물음이 묻는 대목만 잡으면 돼요."라고 말한다.',
                task: '토막마다 물음을 먼저 읽어요. 듣기 단추로 자막 없이 내레이션을 듣고 알맞은 카드를 골라요.',
                levels: LV({ mode: 'listen', basket: '들은 내용' }),
                items: [
                  Object.assign({ prompt: '첫째 토막이에요. 농부가 아침에 가장 먼저 하는 일은 무엇인가요?',
                    target: { listen: 'cow' }, difficulty: 0.2,
                    hints: ['first(가장 먼저)라는 말 뒤를 잘 들어요.', '고른 일이 first 뒤에 나온 일인지, after that(그 뒤) 뒤에 나온 일인지 다시 들어 보세요.', 'First, I milk the cows. — 소의 젖을 짜요.'] },
                    LI('Good morning! Welcome to Sunny Farm. Every morning, I get up at five. First, I milk the cows. After that, I feed the chickens.', [C('cow', '소젖 짜기'), C('chicken', '닭 모이 주기', '닭 모이 주기는 그 뒤(after that)에 해요.'), C('sleep', '늦잠 자기')], '가장 먼저 하는 일', ['cow', 'chicken'], [C('five', '5시에 일어나기', '일어나는 것은 하는 일의 차례가 아니라 일어나는 시각 이야기예요. 물음은 일어난 뒤 가장 먼저 하는 일이에요.')])),
                  Object.assign({ prompt: '둘째 토막이에요. 이 농장의 닭은 하루에 달걀을 몇 개쯤 낳나요?',
                    target: { listen: 'egg200' }, difficulty: 0.25,
                    hints: ['eggs(달걀)라는 낱말 앞의 숫자를 잡아요. 다른 숫자와 헷갈리지 않게 무엇의 숫자인지 들어요.', '고른 숫자가 닭의 수인지 달걀의 수인지 다시 들어 보세요.', 'We have three hundred chickens. They lay about two hundred eggs a day.'] },
                    LI('We have three hundred chickens on our farm. They lay about two hundred eggs a day. We sell the eggs at the market on Saturdays.', [C('egg300', '300개쯤', '300은 닭의 수예요.'), C('egg200', '200개쯤'), C('egg20', '20개쯤')], '하루 달걀', ['egg300', 'egg200'])),
                  Object.assign({ prompt: '셋째 토막이에요. 농부가 농장 일에서 가장 좋아하는 것은 무엇인가요?',
                    target: { listen: 'baby' }, difficulty: 0.3,
                    hints: ['favorite(가장 좋아하는)이나 love(아주 좋아해요)가 든 대목을 들어요. 힘든 일 이야기와 가려 들어요.', '고른 카드가 힘들다고 한 일인지 좋아한다고 한 일인지 다시 들어 보세요.', 'But my favorite part is ... — But 뒤의 아기 동물 돌보기예요.'],
                    predict: { q: '자막 없이 들으면 이 토막을 얼마나 알아들을 수 있을까요?', options: ['거의 못 알아들어요', '물음의 답은 잡아요'], answer: 1 },
                    conclude: '자막이 없어도 물음이 묻는 대목(favorite)을 기다리면 답을 잡을 수 있어요.' },
                    LI('Farm work is hard. Cleaning the barn takes a long time. But my favorite part is taking care of the baby animals. They are so cute!', [C('clean', '헛간 청소', '헛간 청소는 오래 걸린다고 했어요. 좋아한다는 말은 없어요.'), C('baby', '아기 동물 돌보기'), C('market', '시장에서 팔기')], '가장 좋아하는 일', ['clean', 'baby'])),
                ],
              },
              {
                id: 'a2', title: '활동 2. 자막 없이 이해한 만큼 표시하고 다음에 할 일 고르기', minutes: 12, tool: 'emotion',
                teacher: '"방금 세 토막을 자막 없이 들었어요. 이번에는 정답이 없어요. 내가 이해한 만큼을 솔직하게 골라요." 친구와 견주지 말고 자기 공책의 "알아들은 낱말" 칸을 보고 고르게 한다. 셋째 문항은 정답이 있는 문항이라는 것을 알리고, "조금밖에 못 알아들었을 때 가장 도움이 되는 방법"을 고르게 한다. 자막만 켜고 끝내는 보기를 고른 학생에게 "그러면 다음에 자막 없이 들을 때 나아질까요?"라고 묻는다.',
                task: '자막 없이 들은 토막을 떠올리며 이해한 만큼을 솔직하게 골라요. 마지막 문항은 다음에 할 일을 골라요.',
                levels: { easy: { mode: 'scale', steps: 3 }, base: { mode: 'scale', steps: 3 }, challenge: { mode: 'scale', steps: 3 } },
                items: [
                  { prompt: '첫째·둘째 토막을 자막 없이 들었어요. 내가 이해한 만큼을 솔직하게 골라 보세요. 정답은 없어요.',
                    toolOptions: { situation: '농장 영상 첫째·둘째 토막(아침 일, 달걀)을 자막 없이 들었어요.', motif: 'star', ask: '자막 없이 얼마나 알아들었나요?', scaleLabels: ['조금', '절반쯤', '거의 다'] },
                    target: { level: 'any' }, difficulty: 0.05 },
                  { prompt: '셋째 토막을 자막 없이 들었어요. 내가 이해한 만큼을 솔직하게 골라 보세요. 정답은 없어요.',
                    toolOptions: { situation: '농장 영상 셋째 토막(힘든 일과 좋아하는 일)을 자막 없이 들었어요.', motif: 'star', ask: '자막 없이 얼마나 알아들었나요?', scaleLabels: ['조금', '절반쯤', '거의 다'] },
                    target: { level: 'any' }, difficulty: 0.05 },
                  { prompt: '친구 준호는 자막 없이 조금밖에 못 알아들었어요. 다음에 무엇을 하면 가장 도움이 될까요?',
                    toolOptions: { mode: 'branch', who: '준호', situation: '자막을 끄고 농장 영상을 봤는데 조금밖에 못 알아들었어요.', ask: '다음에 무엇을 할까요?',
                      choices: [
                        { id: 'check', text: '자막을 켜고 모르는 부분만 확인한 뒤, 자막을 끄고 다시 들어요', result: '두 번째로 자막 없이 들을 때 더 많이 들려요.', mood: '뿌듯함' },
                        { id: 'read', text: '자막을 켜고 읽기만 하고 끝내요', result: '읽어서 뜻은 알았지만 귀로 들은 것은 그대로예요.', mood: '걱정', why: '자막을 읽은 것은 읽기예요. 다시 자막 없이 들어야 듣기가 나아져요.' },
                        { id: 'hard', text: '더 어려운 영상으로 바꿔요', result: '더 못 알아들어 속상해요.', mood: '속상함', why: '조금밖에 못 알아들었다면 지금 영상을 한 번 더 확인하는 것이 먼저예요.' },
                      ] },
                    target: { choice: 'check' }, difficulty: 0.2,
                    hints: ['자막 없이 듣는 힘이 자라려면 마지막에 무엇을 해야 할지 생각해요.', '고른 방법을 하고 나면 다음에 자막 없이 들을 때 더 잘 들릴지 생각해 보세요.', '모르는 부분만 자막으로 확인하고, 다시 자막 없이 듣는 방법이에요.'] },
                ],
              },
            ],
          },
          {
            id: 'wrapup', title: '정리', minutes: 7,
            teacher: '"자막 없이 들으니 내가 어디까지 알아듣는지 보였나요?" 이해한 만큼은 친구마다 다르고, 적게 표시한 것이 부끄러운 일이 아니라고 말한다. "자막은 언제 켜면 도움이 되고, 언제 끄면 도움이 되나요?"를 짝과 이야기하게 한 뒤 출구 질문을 푼다. 공책에 "다음 영상에서 나는 ___ 하겠다" 한 줄을 쓰게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'wordcards', options: LISTEN('On the farm, we grow corn and potatoes. In autumn, many families come to pick apples.', [C('apple', '사과 따기'), C('corn', '옥수수 팔기'), C('fish', '물고기 잡기')], '가을에 하는 일'), prompt: '농장 영상의 다른 토막이에요. 가을에 많은 가족이 와서 하는 일은 무엇인가요?', target: { listen: 'apple' }, difficulty: 0.25 },
              { type: 'choice', prompt: '자막 없이 들어 보고 내가 이해한 만큼을 표시하는 까닭은?', options: ['친구보다 잘했는지 견주려고', '내가 얼마나 알아듣는지 알고 다음에 할 일을 정하려고', '자막을 다시 보지 않으려고'], answer: 1, difficulty: 0.1, explain: '이해한 만큼을 알아야 다음에 무엇을 다시 들을지 정할 수 있어요.' },
              { type: 'mood', prompt: '오늘 자막 없이 다시 보기는 어땠나요?' },
            ],
          },
        ],
        worksheet: {
          title: '자막 끄고 다시 보기 기록',
          items: [
            { type: 'table', prompt: '선생님이 읽어 주는 영상 내레이션을 자막 없이 듣고 쓰세요.', columns: ['물음', '들은 답', '알아들은 낱말'], cells: [['농장에서 기르는 것은?', '', ''], ['가을에 하는 일은?', '', '']], answer: '대본: On the farm, we grow corn and potatoes. In autumn, many families come to pick apples. → 옥수수와 감자 / 사과 따기' },
            { type: 'check', prompt: '자막 없이 들었을 때 내가 한 것에 표시하세요.', options: ['물음을 먼저 읽었다', '알아들은 낱말을 적었다', '이해한 만큼을 표시했다'] },
            { type: 'choice', prompt: '자막 없이 조금밖에 못 알아들었을 때 가장 좋은 방법은?', options: ['자막을 켜고 읽기만 한다', '모르는 부분만 자막으로 확인하고 다시 자막 없이 듣는다', '영상 보기를 그만둔다'], answer: '모르는 부분만 자막으로 확인하고 다시 자막 없이 듣는다' },
            { type: 'short', prompt: '다음에 영어 영상을 볼 때 나는 자막을 어떻게 쓸지 한 문장으로 쓰세요.' },
          ],
          easy: {
            note: '자막 없이 듣기 → 알아들은 낱말 적기 → 모르는 곳만 자막으로 확인 → 다시 자막 없이',
            items: [
              { type: 'table', prompt: '선생님이 읽어 주는 내레이션을 듣고 쓰세요.', columns: ['물음', '들은 답'], cells: [['가을에 하는 일은?', '']], answer: '사과 따기' },
              { type: 'check', prompt: '오늘 한 것에 표시하세요.', options: ['자막 없이 들었다', '알아들은 낱말을 적었다'] },
              { type: 'short', prompt: '영상에서 알아들은 영어 낱말 하나를 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '고를 카드가 줄고, 맞게 넣으면 초록 테두리가 생기며 틀리면 까닭을 말하고 되돌아와요. 이해한 만큼 표시는 단계와 상관없이 같아요.',
          base: '토막마다 자막 없이 듣고 답한 뒤 이해한 만큼을 표시해요.',
          challenge: '일어나는 시각처럼 물음과 비슷한 함정 카드가 더해져 물음이 묻는 대목을 더 정확히 가려 들어야 해요.',
        },
        teacherNotes: '농장 영상 내레이션은 이 차시를 위해 지은 대본이다. 듣기 대본: ① Good morning! Welcome to Sunny Farm. Every morning, I get up at five. First, I milk the cows. After that, I feed the chickens. ② We have three hundred chickens on our farm. They lay about two hundred eggs a day. We sell the eggs at the market on Saturdays. ③ Farm work is hard. Cleaning the barn takes a long time. But my favorite part is taking care of the baby animals. They are so cute! 출구: On the farm, we grow corn and potatoes. In autumn, many families come to pick apples. 활동 2의 첫째·둘째 문항은 정답이 없는 자기 평가(이해한 만큼 3단계)이다 — 결과 화면에서 "조금"을 고른 학생은 다음 시간 전에 대본을 함께 보며 모르는 낱말 두세 개를 확인하고 다시 듣게 한다. 자주 보이는 어려움: ① 자막을 읽은 것을 들은 것으로 여긴다 → 자막 없이 다시 듣고 이해한 만큼을 견주게 한다. ② 친구를 보고 이해한 만큼을 높게 고른다 → 정답이 없고 점수가 아니라는 것을 알린다. ③ 닭의 수와 달걀의 수를 헷갈린다 → 숫자 뒤의 낱말을 함께 듣게 한다.',
      }),

      // ───────────────────────── 19차시 (extend) ─────────────────────────
      lesson(19, S08, {
        title: '학습 앱 사용 안내를 듣고 읽어 앱 쓰는 차례 정리하기',
        objective: '영어 학습 앱의 음성 사용 안내를 듣고 필요한 단계를 고르며, 앱 도움말 글을 읽고 First·Then·After that·Finally로 이어진 사용 차례를 정리할 수 있다.',
        illustration: {
          prompt: PROMPT('a tablet showing a friendly learning app with a big green start button, headphones and a save icon, while a child follows numbered steps on paper strips'),
          scene: SCENE('First → Then → Finally', '앱 쓰는 차례를 정리해요', [
            { motif: 'star', x: 404, y: 60, s: 0.6 }, { motif: 'leaf', x: 88, y: 214 }, { motif: 'cloud', x: 320, y: 66 },
          ]),
        },
        stages: [
          {
            id: 'intro', title: '도입', minutes: 6,
            teacher: '"새 앱을 처음 열면 어떻게 쓰는지 어떻게 알아내나요?" 이것저것 눌러 본다, 도움말을 본다는 대답을 들은 뒤 "영어 앱에는 영어 사용 안내가 나와요. 안내는 First, Then, After that, Finally 같은 차례 말로 이어져요."라고 칠판에 네 낱말을 순서대로 적는다. "차례 말만 잡아도 무엇을 먼저 할지 알 수 있어요. 지난 시간처럼 핵심만 잡아요."라고 말한다.',
            student: '새 앱을 쓰는 방법을 영어 안내로 알아내려면 어떤 낱말을 잡아야 할까요? 차례를 알려 주는 말을 떠올려 봐요.',
            demo: { tool: 'story', options: { mode: 'order', cards: [C('open', '앱을 열어요'), C('tap', '시작 단추를 눌러요')], slots: ['First', 'Then'] }, sequence: [{ at: {} }, { at: { open: 0, tap: 1 } }] },
          },
          {
            id: 'main', title: '전개', minutes: 27,
            activities: [
              {
                id: 'a1', title: '활동 1. 앱 음성 안내 듣고 필요한 단계 고르기', minutes: 12, tool: 'wordcards',
                teacher: '"학습 앱이 처음 켜질 때 나오는 음성 안내예요. 물음이 묻는 차례 말(처음, 소리 듣기 전, 끝났을 때)을 먼저 정하고 들어요." 물음마다 같은 안내를 다시 듣게 하되, 찾을 정보가 바뀐다는 것을 짚는다. 처음 들린 단계를 고르는 학생에게 "그 단계 앞에 어떤 차례 말이 있었나요?"라고 묻는다.',
                task: '물음이 묻는 차례를 먼저 정해요. 듣기 단추로 앱 음성 안내를 듣고 알맞은 단계 카드를 골라요.',
                levels: LV({ mode: 'listen', basket: '그 차례의 일' }),
                items: [
                  Object.assign({ prompt: '단어 공부 앱이에요. 앱을 켜고 맨 처음 누르는 것은 무엇인가요? 듣고 골라 보세요.',
                    target: { listen: 'start' }, difficulty: 0.15,
                    hints: ['To start(시작하려면)와 First 뒤에 맨 처음 할 일이 나와요.', '고른 카드가 맨 처음 할 일인지, Then 뒤의 일인지 다시 들어 보세요.', 'First, tap the green Start button. — 초록 시작 단추예요.'] },
                    LI('Welcome to Word Fun! First, tap the green Start button. Then, choose your level. After that, put on your headphones and listen to the words. Finally, tap Save.', [C('start', '초록 시작 단추'), C('level', '단계 고르기', '단계 고르기는 Then 뒤, 둘째 일이에요.'), C('save', '저장 단추', 'Save는 마지막(Finally) 일이에요.')], '맨 처음', ['start', 'save'])),
                  Object.assign({ prompt: '같은 앱이에요. 낱말 소리를 듣기 바로 전에 해야 하는 일은 무엇인가요? 듣고 골라 보세요.',
                    target: { listen: 'phones' }, difficulty: 0.2,
                    hints: ['listen(듣다)이라는 낱말이 나오는 대목에 귀를 모으고, 바로 앞에 하라는 일을 잡아요.', '고른 카드가 listen과 같은 문장에 있었는지 다시 들어 보세요.', 'put on your headphones and listen — 헤드폰을 쓰고 들어요.'] },
                    LI('Welcome to Word Fun! First, tap the green Start button. Then, choose your level. After that, put on your headphones and listen to the words. Finally, tap Save.', [C('phones', '헤드폰 쓰기'), C('level', '단계 고르기', '단계 고르기는 헤드폰보다 한 단계 앞이에요.'), C('save', '저장 단추 누르기', '저장은 다 들은 뒤에 해요.')], '듣기 바로 전', null, [C('volume', '소리 크게 하기', '안내에 나오지 않은 일이에요.')])),
                  Object.assign({ prompt: '그림 그리기 앱이에요. 다 그린 뒤 친구에게 보내려면 무엇을 해야 하나요? 듣고 모두 골라 보세요.',
                    target: { listen: ['done', 'share'] }, difficulty: 0.3,
                    hints: ['When you finish(다 마치면) 뒤를 들어요. 그 뒤에 이어지는 일을 모두 잡아요.', '고른 카드가 다 그린 뒤의 일인지, 그리기 전에 하는 일이 섞였는지 다시 들어 보세요.', 'When you finish, tap Done. Then tap Share to send it to a friend.'],
                    predict: { q: '차례 말 없이 처음 들린 일을 하면 될까요?', options: ['처음 들린 일', '차례 말을 들어요'], answer: 1 },
                    conclude: 'When you finish, Then 같은 차례 말을 들으면 무엇을 언제 할지 알 수 있어요.' },
                    LI('Pick a color and draw with your finger. You can undo with the arrow button. When you finish, tap Done. Then tap Share to send it to a friend.', [C('color', '색 고르기', '색 고르기는 그리기 전에 해요.'), C('undo', '화살표로 되돌리기', '되돌리기는 그리다가 쓸 수 있는 일이에요.'), C('done', 'Done 누르기'), C('share', 'Share 누르기')], '다 그린 뒤', ['color', 'done', 'share'])),
                ],
              },
              {
                id: 'a2', title: '활동 2. 앱 도움말 글을 읽고 사용 차례 정리하기', minutes: 15, tool: 'story',
                teacher: '"이번에는 앱 도움말 글을 읽어요. 차례 말(First, Then, After that, Finally)에 동그라미를 치고, 그 뒤의 일을 카드로 찾아 칸에 놓아요." 글에 나온 순서와 칸 이름(차례 말)이 같은지 확인하게 한다. 글에서 먼저 보인 문장을 첫 칸에 놓는 학생에게 "Finally가 앞에 나와도 마지막 일이에요. 차례 말을 보세요."라고 말한다. 3번은 글 순서와 차례 말이 다르게 놓인 함정이다.',
                task: '앱 도움말 글을 읽고 차례 말에 동그라미를 쳐요. 단계 카드를 차례 칸에 맞게 놓아요.',
                levels: { easy: { mode: 'order', live: true, instant: true }, base: { mode: 'order' }, challenge: { mode: 'order' } },
                items: [
                  { prompt: '"Reading Star 도움말: First, pick a book. Then, read it aloud. After that, answer three questions. Finally, get a star!" 차례대로 놓아 보세요.',
                    toolOptions: { slots: ['First', 'Then', 'After that', 'Finally'], cards: [C('book', '책 고르기'), C('read', '소리 내어 읽기'), C('quiz', '물음 세 개에 답하기'), C('star', '별 받기')] },
                    target: { order: ['book', 'read', 'quiz', 'star'] }, difficulty: 0.15,
                    hints: ['칸 이름이 차례 말이에요. 글에서 같은 차례 말을 찾아 그 뒤의 일을 놓아요.', '놓은 카드 가운데 글의 차례 말 뒤에 나온 일과 다른 것이 있는지 보세요.', 'pick a book → read it aloud → answer three questions → get a star예요.'] },
                  { prompt: '"Online Class 도움말: First, turn off your microphone. Then, listen to the teacher. To ask a question, tap the hand button. Finally, say goodbye!" 차례대로 놓아 보세요.',
                    toolOptions: { slots: ['First', 'Then', '물을 때', 'Finally'], cards: [C('mic', '마이크 끄기'), C('listen', '선생님 말 듣기'), C('hand', '손 단추 누르기'), C('bye', '인사하기')] },
                    target: { order: ['mic', 'listen', 'hand', 'bye'] }, difficulty: 0.2,
                    hints: ['To ask a question(물으려면)은 차례 말 대신 "언제"를 알려 주는 말이에요. 칸 이름과 글의 말을 짝 지어요.', '놓은 카드 가운데 마이크와 손 단추의 자리가 바뀌지 않았는지 보세요.', 'turn off your microphone → listen → tap the hand button → say goodbye예요.'],
                    levels: { challenge: { toolOptions: { cards: [C('mic', '마이크 끄기'), C('listen', '선생님 말 듣기'), C('hand', '손 단추 누르기'), C('bye', '인사하기'), C('cam', '카메라 끄기', '도움말에 카메라 이야기는 없어요.')] } } } },
                  { prompt: '"Music Maker 도움말: Finally, tap Play to hear your song. But first, choose an instrument. Then, tap the notes on the screen." 차례대로 놓아 보세요.',
                    toolOptions: { slots: ['첫째', '둘째', '셋째'], cards: [C('inst', '악기 고르기'), C('notes', '화면의 음 누르기'), C('play', 'Play 눌러 듣기')] },
                    target: { order: ['inst', 'notes', 'play'] }, difficulty: 0.3,
                    hints: ['글의 순서와 일의 차례가 다를 수 있어요. 차례 말(first, Then, Finally)을 보고 놓아요.', '첫째 칸의 카드가 글에서 가장 먼저 보인 문장인지, first가 붙은 문장인지 다시 보세요.', 'But first(그래도 먼저) 악기 → Then 음 누르기 → Finally 듣기예요.'],
                    predict: { q: '글에서 가장 먼저 보인 문장이 첫째 할 일일까요?', options: ['네, 첫째예요', '차례 말을 봐야 해요'], answer: 1 },
                    conclude: 'Finally가 글 앞에 나와도 마지막 일이에요. 차례는 글의 자리보다 차례 말이 정해요.',
                    levels: { challenge: { toolOptions: { cards: [C('inst', '악기 고르기'), C('notes', '화면의 음 누르기'), C('play', 'Play 눌러 듣기'), C('save', '노래 저장하기', '도움말에 저장 이야기는 없어요.')] } } } },
                ],
              },
            ],
          },
          {
            id: 'wrapup', title: '정리', minutes: 7,
            teacher: '"오늘 앱 안내에서 차례를 알려 준 말은 무엇이었나요?" First, Then, After that, When you finish, Finally를 칠판에 모은다. "3번처럼 Finally가 앞에 있으면 어떻게 했나요?"라고 물어 차례 말로 정한다는 것을 다시 짚고 출구 질문을 푼다.',
            exitTicket: [
              { type: 'tool', tool: 'wordcards', options: LISTEN('First, take a photo of the plant. Then, tap Search. The app will tell you the name of the plant.', [C('photo', '식물 사진 찍기'), C('search', 'Search 누르기'), C('name', '이름 쓰기')], '맨 처음'), prompt: '식물 이름 찾기 앱이에요. 맨 처음 해야 하는 일은 무엇인가요? 듣고 골라 보세요.', target: { listen: 'photo' }, difficulty: 0.2 },
              { type: 'choice', prompt: '"Finally, tap Send. First, write your message." 에서 먼저 할 일은?', options: ['Send 누르기', '글 쓰기', '둘 다 함께'], answer: 1, difficulty: 0.2, explain: 'First가 붙은 일이 먼저예요. Finally는 글 앞에 있어도 마지막 일이에요.' },
              { type: 'mood', prompt: '오늘 앱 사용 안내 듣고 읽기는 어땠나요?' },
            ],
          },
        ],
        worksheet: {
          title: '앱 쓰는 차례 정리하기',
          items: [
            { type: 'table', prompt: '"Quiz Time 도움말: First, type your nickname. Then, choose a topic. After that, answer ten questions. Finally, check your score." 를 읽고 차례를 쓰세요.', columns: ['차례 말', '할 일'], cells: [['First', ''], ['Then', ''], ['After that', ''], ['Finally', '']], answer: '별명 쓰기 / 주제 고르기 / 물음 열 개 답하기 / 점수 확인하기' },
            { type: 'choice', prompt: '차례를 알려 주는 말이 아닌 것은?', options: ['First', 'Then', 'Hello'], answer: 'Hello' },
            { type: 'blank', prompt: '"When you finish, tap Done." → 다 마치면 ___ 를 눌러요.' },
            { type: 'short', prompt: '내가 잘 아는 앱 하나를 쓰는 차례를 First, Then 을 넣어 영어 두 문장으로 쓰세요.' },
          ],
          easy: {
            note: 'First(먼저) → Then(그다음) → After that(그 뒤) → Finally(마지막)',
            items: [
              { type: 'table', prompt: '"First, type your nickname. Then, choose a topic." 를 읽고 쓰세요.', columns: ['차례 말', '할 일'], cells: [['First', ''], ['Then', '']], answer: '별명 쓰기 / 주제 고르기' },
              { type: 'choice', prompt: 'Finally 의 뜻은?', options: ['먼저', '마지막으로'], answer: '마지막으로' },
              { type: 'short', prompt: '차례 말 하나를 영어로 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '고를 카드가 줄고, 칸에 맞게 놓으면 초록 테두리가 생기며 틀리면 까닭을 말하고 되돌아와요.',
          base: '안내를 듣거나 읽고 단계를 고르거나 놓은 뒤 확인을 눌러요.',
          challenge: '안내에 나오지 않은 단계 카드(소리 크게 하기, 카메라 끄기, 노래 저장하기)가 더해져 카드 칸에 남겨 두어야 해요.',
        },
        teacherNotes: '앱과 도움말은 모두 이 차시를 위해 지은 가상의 앱이다. 듣기 대본: 활동 1 ①② Welcome to Word Fun! First, tap the green Start button. Then, choose your level. After that, put on your headphones and listen to the words. Finally, tap Save. ③ Pick a color and draw with your finger. You can undo with the arrow button. When you finish, tap Done. Then tap Share to send it to a friend. 출구: First, take a photo of the plant. Then, tap Search. The app will tell you the name of the plant. 도전 단계의 차례 칸 문항에는 도움말에 없는 카드가 한 장 더 있어 카드 칸에 남겨 두어야 맞다. 자주 보이는 어려움: ① 처음 들린 일을 맨 처음 일로 고른다 → 차례 말에 손을 들게 한다. ② 글에서 먼저 보인 문장을 첫째로 놓는다 → 차례 말에 동그라미를 친 뒤 놓게 한다. ③ To ask a question처럼 차례 말이 아닌 때 말을 놓친다 → "언제 하는 일인가?"를 묻게 한다.',
      }),

      // ───────────────────────── 20차시 (core) ─────────────────────────
      lesson(20, S08, {
        title: '모르는 낱말 수로 나에게 맞는 영어 자료 고르고 까닭 말하기',
        objective: '한 쪽(한 토막)에서 모르는 낱말 수로 영어 자료가 나에게 쉬운지·알맞은지·어려운지 가르고, 알맞은 자료를 고른 까닭을 영어 한 문장으로 말할 수 있다.',
        illustration: {
          prompt: PROMPT('a cozy school library corner with three English picture books stacked by size, and a child counting unknown words on one page with five raised fingers'),
          scene: SCENE('Just Right for Me', '나에게 알맞은 자료를 골라요', [
            { motif: 'house', x: 390, y: 214, color: 'mint' }, { motif: 'star', x: 410, y: 60, s: 0.55 }, { motif: 'tree', x: 82, y: 214 },
          ]),
        },
        stages: [
          {
            id: 'intro', title: '도입', minutes: 7,
            teacher: '"영어 실력을 빨리 키우려면 가장 어려운 책을 골라야 할까요?" 손을 들게 한 뒤 "모르는 낱말이 너무 많으면 이야기를 따라가지 못해 금방 그만두게 돼요. 너무 쉬우면 새로 배울 것이 없어요."라고 말한다. 칠판에 우리 반 다섯 손가락 약속을 적는다: 한 쪽을 읽으며 모르는 낱말마다 손가락 하나 — 0~1개 쉬움, 2~3개 알맞음, 4개 이상 어려움. "어려운 자료를 고를수록 빨리 는다"는 생각은 오늘 함께 따져 보자고 말한다.',
            student: '영어 실력이 빨리 늘려면 가장 어려운 자료를 골라야 할까요? 나에게 알맞은 자료를 어떻게 알아볼지 생각해 봐요.',
            demo: { tool: 'wordcards', options: { mode: 'sort', slots: ['쉬움', '알맞음', '어려움'], cards: [C('b1', '모르는 낱말 2개')] }, sequence: [{ at: {} }, { at: { b1: 1 } }] },
          },
          {
            id: 'main', title: '전개', minutes: 26,
            activities: [
              {
                id: 'a1', title: '활동 1. 다섯 손가락 약속으로 자료 나누기', minutes: 12, tool: 'wordcards',
                teacher: '"민지가 자료마다 한 쪽(한 토막)을 읽고 모르는 낱말을 세었어요. 우리 반 약속대로 칸에 나눠요: 0~1개 쉬움, 2~3개 알맞음, 4개 이상 어려움." 책 두께나 그림으로 나누는 학생에게 "약속은 모르는 낱말 수로 정했어요. 카드의 수를 보세요."라고 말한다. 도전 단계는 수 대신 "알아들은 문장"으로 적힌 카드가 섞여 있으니 모르는 것이 몇 개인지 먼저 셈하게 한다.',
                task: '자료 카드에 적힌 모르는 낱말 수를 보고, 다섯 손가락 약속(0~1 쉬움, 2~3 알맞음, 4 이상 어려움)대로 칸에 나눠요.',
                levels: LV({ mode: 'sort', slots: ['쉬움', '알맞음', '어려움'] }),
                items: [
                  { prompt: '민지가 그림책 세 권을 한 쪽씩 읽었어요. 다섯 손가락 약속대로 나눠 보세요.',
                    toolOptions: { cards: [C('bk1', '그림책 「My Cat」 — 모르는 낱말 0개'), C('bk2', '그림책 「The Big Storm」 — 모르는 낱말 3개'), C('bk3', '그림책 「Space Trip」 — 모르는 낱말 6개')] },
                    target: { sort: { 쉬움: ['bk1'], 알맞음: ['bk2'], 어려움: ['bk3'] } }, difficulty: 0.1,
                    hints: ['카드마다 모르는 낱말 수를 먼저 찾고, 약속의 세 범위 가운데 어디에 드는지 정해요.', '놓은 카드의 수가 그 칸의 범위(0~1, 2~3, 4 이상)에 드는지 다시 보세요.', '0개는 쉬움, 3개는 알맞음, 6개는 어려움이에요.'] },
                  { prompt: '민지가 영어 자료 다섯 가지를 조금씩 보았어요. 다섯 손가락 약속대로 나눠 보세요.',
                    toolOptions: { cards: [C('m1', '노래 영상 — 모르는 낱말 1개'), C('m2', '과학 잡지 한 쪽 — 모르는 낱말 5개'), C('m3', '만화책 한 쪽 — 모르는 낱말 2개'), C('m4', '동화 오디오 한 토막 — 모르는 낱말 4개'), C('m5', '낱말 앱 한 판 — 모르는 낱말 3개')] },
                    target: { sort: { 쉬움: ['m1'], 알맞음: ['m3', 'm5'], 어려움: ['m2', 'm4'] } }, difficulty: 0.2,
                    hints: ['자료의 종류(노래, 잡지, 만화)가 아니라 모르는 낱말 수로만 나눠요.', '놓은 카드 가운데 4개를 알맞음에, 1개를 알맞음에 넣지 않았는지 범위의 끝을 다시 보세요.', '1개 쉬움, 2개·3개 알맞음, 4개·5개 어려움이에요.'],
                    levels: { easy: EZSORT('민지가 영어 자료 세 가지를 조금씩 보았어요. 다섯 손가락 약속대로 나눠 보세요.', [C('m1', '노래 영상 — 모르는 낱말 1개'), C('m2', '과학 잡지 한 쪽 — 모르는 낱말 5개'), C('m3', '만화책 한 쪽 — 모르는 낱말 2개'), C('m4', '동화 오디오 한 토막 — 모르는 낱말 4개'), C('m5', '낱말 앱 한 판 — 모르는 낱말 3개')], { sort: { 쉬움: ['m1'], 알맞음: ['m3', 'm5'], 어려움: ['m2', 'm4'] } }, ['m1', 'm3', 'm2']) } },
                  { prompt: '준호의 기록이에요. 모르는 낱말 수를 먼저 셈하고 다섯 손가락 약속대로 나눠 보세요.',
                    toolOptions: { cards: [C('j1', '이야기책 한 쪽 — 낱말 50개 가운데 49개를 앎'), C('j2', '여행 영상 한 토막 — 모르는 낱말이 손가락 셋'), C('j3', '동물 백과 한 쪽 — 낱말 40개 가운데 34개를 앎'), C('j4', '퀴즈 앱 한 판 — 모르는 낱말 2개')] },
                    target: { sort: { 쉬움: ['j1'], 알맞음: ['j2', 'j4'], 어려움: ['j3'] } }, difficulty: 0.35,
                    hints: ['"몇 개 가운데 몇 개를 앎"은 빼기로 모르는 낱말 수를 먼저 구해요.', '놓은 카드의 모르는 낱말 수를 다시 셈해 보세요. 아는 낱말 수가 많다고 쉬운 것은 아니에요.', '50−49=1개 쉬움, 손가락 셋=3개 알맞음, 40−34=6개 어려움, 2개 알맞음이에요.'],
                    predict: { q: '아는 낱말이 34개나 되는 동물 백과는 쉬운 자료일까요?', options: ['네, 쉬워요', '모르는 수를 셈해요'], answer: 1 },
                    conclude: '아는 낱말이 많아도 모르는 낱말이 여섯 개면 한 쪽이 어려워요. 모르는 수로 따져요.' },
                ],
              },
              {
                id: 'a2', title: '활동 2. 자료를 고른 까닭 가운데 알맞은 것 고르기', minutes: 14, tool: 'wordcards',
                teacher: '"친구들이 자료를 고른 까닭을 영어로 말했어요. 나에게 맞는 자료를 고른 좋은 까닭만 골라요." 좋은 까닭은 "내 수준(모르는 낱말 수)", "도와주는 것(그림·소리)", "내 목적(관심, 배우고 싶은 것)"에서 나온다고 칠판에 적는다. "가장 어려우니까 빨리 늘 거예요"를 고르는 학생에게 "모르는 낱말이 열 개인 쪽을 끝까지 읽을 수 있을까요?"라고 묻는다. 고른 뒤 짝에게 "I chose ___ because ___." 로 말하게 한다.',
                task: '친구들이 말한 까닭 카드를 읽고, 나에게 알맞은 자료를 고른 좋은 까닭만 골라요.',
                levels: LV(PICK('좋은 까닭')),
                items: [
                  Object.assign({ prompt: '하린이가 그림책을 골랐어요. 나에게 알맞은 자료를 고른 좋은 까닭을 모두 골라 보세요.',
                    target: { pick: ['r1', 'r4'] }, difficulty: 0.2,
                    hints: ['좋은 까닭은 내 수준(모르는 낱말 수)이나 이해를 돕는 것(그림)에서 나와요.', '고른 카드 가운데 겉모양이나 "어려울수록 좋다"는 생각이 섞였는지, 빠진 좋은 까닭은 없는지 보세요.', '아는 낱말이 많고 새 낱말이 몇 개 있다는 까닭, 그림이 이야기를 도와준다는 까닭이에요.'] },
                    CD([C('r1', 'I know most of the words, and I can learn a few new ones.'), C('r2', 'It is the hardest book, so I will get better fastest.', '모르는 낱말이 너무 많으면 끝까지 읽기 어려워요.'), C('r3', 'The cover is shiny and pretty.', '겉모양은 내 수준과 상관없어요.'), C('r4', 'The pictures help me understand the story.')], ['r1', 'r2', 'r4'])),
                  Object.assign({ prompt: '도윤이는 영어 노래 영상을 골랐어요. 좋은 까닭을 모두 골라 보세요.',
                    target: { pick: ['v1', 'v3'] }, difficulty: 0.25,
                    hints: ['내 목적(배우고 싶은 것)과 내 수준에 맞는지가 좋은 까닭이에요.', '고른 카드 가운데 친구 따라 하기나 조회 수 같은 까닭이 섞였는지 보세요.', '발음을 배우고 싶다는 목적, 자막 없이 대부분 알아듣는다는 수준이 좋은 까닭이에요.'] },
                    CD([C('v1', 'I want to learn how to say the words, and the song helps me.'), C('v2', 'My friend chose it, so I chose it too.', '친구에게 맞는 자료가 나에게도 맞는지는 알 수 없어요.'), C('v3', 'I can understand most of it without subtitles.'), C('v4', 'Many people watched it.', '많은 사람이 봤다고 나에게 맞는 것은 아니에요.')], ['v1', 'v2', 'v3'])),
                  Object.assign({ prompt: '서아는 동물 백과 앱을 골랐어요. 좋은 까닭을 모두 골라 보세요.',
                    target: { pick: ['a1', 'a2'] }, difficulty: 0.3,
                    hints: ['관심(좋아하는 것), 수준(모르는 낱말 수), 도움(소리 듣기 같은 기능)에서 나온 까닭을 찾아요.', '고른 카드 가운데 "모르는 낱말이 많을수록 좋다"는 생각이 섞였는지 보세요.', '동물을 좋아한다는 관심, 한 쪽에 모르는 낱말이 두세 개라는 수준이 좋은 까닭이에요.'],
                    predict: { q: '"모르는 낱말이 아주 많아서 골랐어요"는 좋은 까닭일까요?', options: ['좋은 까닭이에요', '아니에요'], answer: 1 },
                    conclude: '어려울수록 좋은 것이 아니라, 모르는 낱말이 조금 있어 배우며 끝까지 읽을 수 있는 자료가 알맞아요.' },
                    CD([C('a1', 'I love animals, so I want to read about them.'), C('a2', 'There are only two or three new words on each page.'), C('a3', 'There are so many new words, so it must be good for me.', '모르는 낱말이 아주 많으면 뜻을 따라가기 어려워요.'), C('a4', 'It was free.', '돈이 들지 않는 것은 내 수준과 상관없어요.')], ['a1', 'a2', 'a3'], [C('a5', 'It has the most pages.', '쪽수가 많다고 나에게 맞는 것은 아니에요.')])),
                ],
              },
            ],
          },
          {
            id: 'wrapup', title: '정리', minutes: 7,
            teacher: '"가장 어려운 자료를 고르면 가장 빨리 늘까요?" 다시 물어 오늘 따져 본 것(모르는 낱말이 너무 많으면 끝까지 못 읽음)을 학생 말로 정리한다. "나에게 알맞은 자료를 고른 까닭을 I chose ___ because ___. 로 짝에게 말해 보세요." 두세 명의 문장을 듣고 출구 질문을 푼다. 다음 시간까지 집이나 도서관에서 영어 자료 하나를 골라 한 쪽의 모르는 낱말 수를 세어 오게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'wordcards', options: { mode: 'sort', shuffle: false, slots: ['쉬움', '알맞음', '어려움'], cards: [C('x1', '동화책 한 쪽 — 모르는 낱말 2개'), C('x2', '신문 기사 한 쪽 — 모르는 낱말 7개'), C('x3', '그림 사전 한 쪽 — 모르는 낱말 0개')] }, prompt: '다섯 손가락 약속(0~1 쉬움, 2~3 알맞음, 4 이상 어려움)대로 나눠 보세요.', target: { sort: { 쉬움: ['x3'], 알맞음: ['x1'], 어려움: ['x2'] } }, difficulty: 0.2 },
              { type: 'choice', prompt: '나에게 알맞은 자료를 고른 까닭으로 가장 좋은 것은?', options: ['It is the hardest one.', 'I know most words, and I can learn some new ones.', 'The book is very thick.'], answer: 1, difficulty: 0.15, explain: '내 수준에 맞고 새로 배울 것도 조금 있는 자료가 알맞아요.' },
              { type: 'mood', prompt: '오늘 나에게 맞는 자료 고르기는 어땠나요?' },
            ],
          },
        ],
        worksheet: {
          title: '나에게 알맞은 자료 고르기',
          items: [
            { type: 'table', prompt: '집이나 도서관의 영어 자료 세 가지를 한 쪽씩 보고 모르는 낱말 수를 세어 쓰세요.', columns: ['자료 이름', '모르는 낱말 수', '쉬움 / 알맞음 / 어려움'], rows: 3 },
            { type: 'choice', prompt: '한 쪽에서 모르는 낱말이 3개인 책은?', options: ['쉬움', '알맞음', '어려움'], answer: '알맞음' },
            { type: 'choice', prompt: '"It is the hardest book, so I will get better fastest." 는 좋은 까닭일까요?', options: ['좋은 까닭이다', '좋은 까닭이 아니다'], answer: '좋은 까닭이 아니다' },
            { type: 'short', prompt: '위 표에서 알맞은 자료 하나를 골라 "I chose ___ because ___." 로 쓰세요.' },
          ],
          easy: {
            note: '다섯 손가락 약속: 모르는 낱말 0~1개 쉬움, 2~3개 알맞음, 4개 이상 어려움',
            items: [
              { type: 'table', prompt: '영어 자료 두 가지를 한 쪽씩 보고 쓰세요.', columns: ['자료 이름', '모르는 낱말 수'], rows: 2 },
              { type: 'choice', prompt: '모르는 낱말이 6개인 쪽은?', options: ['알맞음', '어려움'], answer: '어려움' },
              { type: 'short', prompt: '내가 고른 자료 이름을 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '나눌 자료 카드가 세 장으로 줄고, 맞게 놓으면 초록 테두리가 생기며 틀리면 까닭을 말하고 되돌아와요.',
          base: '다섯 손가락 약속으로 자료를 나누고 좋은 까닭을 고른 뒤 확인을 눌러요.',
          challenge: '모르는 낱말 수를 빼기로 구해야 하는 기록 카드와 "쪽수가 많아서" 같은 함정 까닭 카드가 더해져요.',
        },
        teacherNotes: '다섯 손가락 약속(한 쪽에서 모르는 낱말 0~1개 쉬움, 2~3개 알맞음, 4개 이상 어려움)은 이 차시에서 쓰는 교실 약속으로, 학급에 따라 범위를 바꿔도 된다(바꾸면 활동 1과 출구의 판정도 같이 바꿔야 한다). 자료 이름은 모두 지은 것이다. 자주 보이는 어려움: ① 어려운 자료를 고를수록 빨리 는다고 여긴다 → 모르는 낱말이 아주 많은 쪽을 실제로 한 쪽 읽어 보게 한다. ② 책 두께·자료 종류로 수준을 정한다 → 모르는 낱말 수만 보게 한다. ③ 아는 낱말 수와 모르는 낱말 수를 헷갈린다 → 빼기로 모르는 수를 먼저 쓰게 한다. 다음 시간(21차시)에 가져온 자료 기록을 쓴다.',
      }),
      // ───────────────────────── 21차시 (practice) ─────────────────────────
      lesson(21, S08, {
        title: '배우고 싶은 것에 맞는 영어 매체 고르고 까닭 문장 만들기',
        objective: '배우고 싶은 것(발음·낱말 뜻·이야기 듣기·수준)에 맞는 영어 매체를 고르고, 고른 까닭을 "I chose ___ because ___." 문장으로 만들 수 있다.',
        illustration: {
          prompt: PROMPT('a table with different English learning media — a picture dictionary, a comic book, headphones with an audiobook, and a tablet word app — and children choosing one each with thought bubbles'),
          scene: SCENE('I chose it because ...', '목적에 맞는 매체를 골라요', [
            { motif: 'star', x: 404, y: 60, s: 0.6 }, { motif: 'house', x: 392, y: 216, color: 'buttercup' }, { motif: 'flower', x: 86, y: 226, color: 'lavender' },
          ]),
        },
        stages: [
          {
            id: 'intro', title: '도입', minutes: 6,
            teacher: '"지난 시간에 세어 온 자료를 꺼내 보세요. 몇 개였나요?" 두세 명의 기록을 듣는다. "오늘은 수준에 더해 목적도 생각해요. 발음을 배우고 싶을 때와 낱말 뜻을 알고 싶을 때 같은 자료가 좋을까요?" 칠판에 "목적 → 매체 → 까닭 한 문장"을 적고, "I chose the word app because I want to learn how to say the words." 를 예로 읽어 준다. "어려운 것을 고르면 무조건 좋다"는 생각이 남은 학생이 있는지 손을 들게 해 본다.',
            student: '내가 배우고 싶은 것에 따라 어떤 영어 매체가 도움이 될까요? 고른 까닭을 영어로 어떻게 말할지 생각해 봐요.',
            demo: { tool: 'wordcards', options: { mode: 'match', slots: [{ id: 's1', label: '낱말 뜻을 그림으로 보고 싶어요' }], cards: ['그림 사전', '노래 영상'] }, sequence: [{ at: {} }, { at: { '그림 사전': 0 } }] },
          },
          {
            id: 'main', title: '전개', minutes: 27,
            activities: [
              {
                id: 'a1', title: '활동 1. 배우고 싶은 것과 매체 짝 짓기', minutes: 13, tool: 'wordcards',
                teacher: '"목적 칸을 읽고, 그 목적을 가장 잘 돕는 매체 카드를 놓아요." 매체마다 무엇을 도와주는지(소리, 그림, 이야기, 쉬운 말) 먼저 짝과 말하게 한다. 3번은 지난 시간의 다섯 손가락 약속을 다시 쓰는 문항이라고 알려 준다. 도전 단계의 영어 신문처럼 어느 목적에도 맞지 않는 카드는 남겨 두게 한다.',
                task: '목적 칸을 읽고 그 목적을 가장 잘 돕는 매체 카드를 옆에 놓아요. 맞는 짝이 없는 카드는 남겨 둬요.',
                levels: LV({ mode: 'match' }),
                items: [
                  Object.assign({ prompt: '목적마다 가장 알맞은 매체를 짝 지어 보세요.',
                    target: { match: { s1: 'app', s2: 'dict', s3: 'audio' } }, difficulty: 0.15,
                    hints: ['매체마다 도와주는 것이 달라요. 소리를 들려주는지, 그림을 보여 주는지, 긴 이야기를 들려주는지 따져요.', '놓은 매체가 그 목적(발음, 뜻, 이야기 듣기)을 정말 돕는지 하나씩 말해 보세요.', '발음 = 발음 듣기 낱말 앱, 뜻 = 그림 사전, 잠들기 전 이야기 듣기 = 동화 오디오북이에요.'] },
                    CD([C('app', '발음 듣기가 있는 낱말 앱'), C('dict', '그림 사전'), C('audio', '동화 오디오북')], null, [C('paper', '영어 신문', '어른이 읽는 신문은 이 목적들에 맞지 않아요.')], null,
                      { slots: [{ id: 's1', label: '낱말을 바르게 소리 내는 법을 듣고 따라 하고 싶어요' }, { id: 's2', label: '처음 보는 낱말의 뜻을 그림으로 확인하고 싶어요' }, { id: 's3', label: '잠들기 전에 긴 이야기를 귀로 듣고 싶어요' }] })),
                  Object.assign({ prompt: '목적마다 가장 알맞은 매체를 짝 지어 보세요.',
                    target: { match: { s1: 'comic', s2: 'letter', s3: 'song' } }, difficulty: 0.2,
                    hints: ['"쉽게 웃으며 읽기", "쓰는 법 보기", "노래로 외우기"처럼 목적의 열쇠 말을 찾아 매체와 이어요.', '놓은 매체 가운데 목적의 열쇠 말과 이어지지 않는 것이 있는지 보세요.', '웃으며 읽기 = 영어 만화책, 편지 쓰는 법 = 펜팔 편지 예시글, 노래로 외우기 = 날씨 노래 영상이에요.'] },
                    CD([C('comic', '영어 만화책'), C('letter', '펜팔 편지 예시글'), C('song', '날씨 노래 영상')], null, [C('quiz', '수학 퀴즈 앱', '영어를 배우는 목적에 맞지 않아요.')], null,
                      { slots: [{ id: 's1', label: '그림과 짧은 말로 웃으며 쉽게 읽고 싶어요' }, { id: 's2', label: '외국 친구에게 편지를 쓰는 법을 보고 싶어요' }, { id: 's3', label: '날씨 낱말을 노래로 외우고 싶어요' }] })),
                  Object.assign({ prompt: '목적마다 수준이 알맞은 책을 짝 지어 보세요. (다섯 손가락 약속)',
                    target: { match: { s1: 'easy', s2: 'right', s3: 'hard' } }, difficulty: 0.3,
                    hints: ['목적이 "자신감", "조금씩 배우기", "도움을 받아 도전"이에요. 다섯 손가락 약속의 세 범위와 이어요.', '놓은 책의 모르는 낱말 수가 그 목적과 맞는지 다시 보세요. 혼자 술술 읽으려면 모르는 낱말이 거의 없어야 해요.', '술술 읽기 = 0~1개, 조금씩 배우기 = 2~3개, 선생님과 도전 = 4개 이상이에요.'],
                    predict: { q: '혼자 술술 읽고 싶을 때도 어려운 책이 좋을까요?', options: ['어려운 책이 좋아요', '목적에 따라 달라요'], answer: 1 },
                    conclude: '좋은 자료는 하나로 정해져 있지 않아요. 내 목적과 수준에 맞는 자료가 좋은 자료예요.' },
                    CD([C('easy', '한 쪽에 모르는 낱말 0~1개인 책'), C('right', '한 쪽에 모르는 낱말 2~3개인 책'), C('hard', '한 쪽에 모르는 낱말 4개 이상인 책')], null, null, null,
                      { slots: [{ id: 's1', label: '혼자 술술 읽으며 자신감을 얻고 싶어요' }, { id: 's2', label: '새 낱말을 조금씩 배우며 혼자 읽고 싶어요' }, { id: 's3', label: '선생님과 함께 어려운 낱말을 짚으며 도전하고 싶어요' }] })),
                ],
              },
              {
                id: 'a2', title: '활동 2. 고른 까닭을 영어 문장으로 완성하기', minutes: 14, tool: 'story',
                teacher: '"친구의 상황을 읽고, 말풍선의 빈칸에 알맞은 카드를 넣어 까닭 문장을 만들어요." because 뒤에는 목적이나 수준이 온다는 것을 짚는다. 다 한 뒤 짝과 역할을 나누어 말풍선을 소리 내어 읽게 한다. 매체 이름과 까닭이 서로 맞지 않는 짝(노래 영상인데 그림이 뜻을 보여 준다)을 만든 학생에게 "그 매체가 정말 그것을 해 주나요?"라고 묻는다.',
                task: '친구의 상황을 읽고 말풍선 빈칸에 카드를 넣어 "I chose ___ because ___." 까닭 문장을 만들어요.',
                levels: LV({ mode: 'fill' }),
                items: [
                  Object.assign({ prompt: '지호는 동물 이름을 바르게 소리 내고 싶어서 낱말 앱을 골랐어요. 지호의 말을 완성해 보세요.',
                    target: { fill: { b1: 'word app', b2: 'say' } }, difficulty: 0.2,
                    hints: ['첫 빈칸은 고른 매체, 둘째 빈칸은 배우고 싶은 것이에요. 지호의 상황 글에서 둘을 찾아요.', '넣은 낱말이 지호가 고른 매체와 배우고 싶은 것과 같은지 다시 읽어 보세요.', 'I chose the word app ... learn how to say the words.'] },
                    CD(['word app', 'comic book', 'say', 'draw'], ['word app', 'comic book', 'say'], ['spell'], null,
                      { slots: [{ id: 'b1', who: '지호', motif: 'star', label: 'I chose the ___.' }, { id: 'b2', who: '지호', motif: 'star', label: 'I want to learn how to ___ the words.' }] })),
                  Object.assign({ prompt: '수아는 낱말 뜻을 그림으로 보려고 그림 사전을 골랐어요. 수아의 말을 완성해 보세요.',
                    target: { fill: { b1: 'picture dictionary', b2: 'pictures' } }, difficulty: 0.25,
                    hints: ['수아가 고른 매체와, 그 매체에서 뜻을 보여 주는 것을 찾아 넣어요.', '둘째 빈칸에 넣은 것이 그림 사전이 가진 것인지 다시 보세요.', 'I chose the picture dictionary because the pictures show the meanings.'] },
                    CD(['picture dictionary', 'song video', 'pictures', 'songs'], ['picture dictionary', 'pictures', 'songs'], null, null,
                      { slots: [{ id: 'b1', who: '수아', motif: 'flower', label: 'I chose the ___ because' }, { id: 'b2', who: '수아', motif: 'flower', label: 'the ___ show the meanings of new words.' }] })),
                  Object.assign({ prompt: '민재는 한 쪽에 모르는 낱말이 2개인 책을 골랐어요. 다섯 손가락 약속으로 민재의 말을 완성해 보세요.',
                    target: { fill: { b1: 'two', b2: 'just right' } }, difficulty: 0.3,
                    hints: ['첫 빈칸은 모르는 낱말 수, 둘째 빈칸은 다섯 손가락 약속으로 정한 수준이에요.', '넣은 수가 민재의 책과 같은지, 그 수가 약속의 어느 범위인지 다시 보세요.', '모르는 낱말 two개 → 2~3개 범위 = just right(알맞음)예요.'],
                    predict: { q: '모르는 낱말이 2개인 책은 민재에게 어떤 책일까요?', options: ['너무 쉬워요', '알맞아요', '너무 어려워요'], answer: 1 },
                    conclude: '까닭 문장에 모르는 낱말 수와 수준을 함께 쓰면 왜 골랐는지 또렷해져요.' },
                    CD(['two', 'ten', 'just right', 'too hard'], ['two', 'just right', 'too hard'], ['too easy'], null,
                      { slots: [{ id: 'b1', who: '민재', motif: 'leaf', label: 'There are only ___ new words on a page.' }, { id: 'b2', who: '민재', motif: 'leaf', label: 'So the book is ___ for me.' }] })),
                ],
              },
            ],
          },
          {
            id: 'wrapup', title: '정리', minutes: 7,
            teacher: '"좋은 자료는 하나로 정해져 있을까요?" 목적과 수준에 따라 달라진다는 말을 끌어낸다. 짝에게 지난 시간에 세어 온 자료로 "I chose ___ because ___." 를 말하게 하고 두세 명의 문장을 칠판에 적는다. 그다음 출구 질문을 푼다. 까닭에 "어려워서"만 쓴 학생은 다음 시간 목록 쓰기 때 모르는 낱말 수를 함께 적게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'wordcards', options: { mode: 'match', shuffle: false, slots: [{ id: 's1', label: '영어 노래로 즐겁게 외우고 싶어요' }, { id: 's2', label: '낱말 뜻을 그림으로 확인하고 싶어요' }], cards: ['노래 영상', '그림 사전', '영어 신문'] }, prompt: '목적마다 가장 알맞은 매체를 짝 지어 보세요.', target: { match: { s1: '노래 영상', s2: '그림 사전' } }, difficulty: 0.2 },
              { type: 'choice', prompt: '"I chose the audiobook because ___." 에 가장 알맞은 까닭은?', options: ['I want to practice listening to stories.', 'It is the hardest one.', 'My friend has it.'], answer: 0, difficulty: 0.2, explain: '오디오북은 이야기를 귀로 듣게 도와줘요. 목적과 매체가 맞는 까닭이에요.' },
              { type: 'mood', prompt: '오늘 목적에 맞는 매체 고르기는 어땠나요?' },
            ],
          },
        ],
        worksheet: {
          title: '목적에 맞는 매체와 까닭',
          items: [
            { type: 'table', prompt: '내가 배우고 싶은 것 두 가지를 쓰고, 알맞은 매체와 까닭을 쓰세요.', columns: ['배우고 싶은 것', '고른 매체', '까닭 (I chose ___ because ___.)'], rows: 2 },
            { type: 'choice', prompt: '낱말을 바르게 소리 내는 법을 배우고 싶을 때 가장 알맞은 것은?', options: ['그림만 있는 책', '발음 듣기가 있는 낱말 앱', '영어 신문'], answer: '발음 듣기가 있는 낱말 앱' },
            { type: 'blank', prompt: 'I chose the comic book because it is ___ and fun to read. (쉬운, easy)' },
            { type: 'short', prompt: '"어려운 자료가 언제나 가장 좋다" 는 생각에 대한 내 생각을 한 문장으로 쓰세요.' },
          ],
          easy: {
            note: 'I chose the ___ (매체) because I want to ___ (목적).',
            items: [
              { type: 'table', prompt: '내가 배우고 싶은 것과 고른 매체를 쓰세요.', columns: ['배우고 싶은 것', '고른 매체'], rows: 1 },
              { type: 'choice', prompt: '낱말 뜻을 그림으로 보려면?', options: ['그림 사전', '오디오북'], answer: '그림 사전' },
              { type: 'short', prompt: 'I chose the ___. 에 내가 고른 매체를 넣어 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드가 줄고, 맞게 놓으면 초록 테두리가 생기며 틀리면 까닭을 말하고 되돌아와요.',
          base: '목적과 매체를 짝 짓고 까닭 문장을 완성한 뒤 확인을 눌러요.',
          challenge: '어느 목적에도 맞지 않는 매체(영어 신문, 수학 퀴즈 앱)와 spell, too easy 같은 비슷한 낱말 카드가 더해져요.',
        },
        teacherNotes: '매체 이름은 모두 일반 이름이다(특정 상품·앱 이름을 쓰지 않는다). 20차시의 다섯 손가락 약속을 이어 쓴다. 학생이 세어 온 자료 기록은 22차시의 "나의 영어 목록"으로 옮겨 쓴다. 자주 보이는 어려움: ① 목적과 상관없이 좋아하는 매체만 고른다 → 목적의 열쇠 말(소리, 그림, 노래)을 먼저 동그라미 치게 한다. ② because 뒤에 "어려워서", "친구가 골라서"만 쓴다 → 목적이나 모르는 낱말 수를 넣게 한다. ③ 어려운 자료가 언제나 좋다고 여긴다 → 3번 문항처럼 목적에 따라 알맞은 수준이 다르다는 것을 짚는다.',
      }),

      // ───────────────────────── 22차시 (extend) ─────────────────────────
      lesson(22, S08, {
        title: '나의 영어 읽기·듣기 목록 바르게 쓰고 다음 자료 정하기',
        objective: '읽거나 들은 영어 자료를 제목·날짜·수준·한 줄 생각을 갖춘 목록으로 적고, 목록을 보고 다음에 볼 자료를 까닭과 함께 정할 수 있다.',
        illustration: {
          prompt: PROMPT('a child filling in a colorful reading and listening log notebook with book, song and video stickers, and a small ladder showing levels from easy to just right'),
          scene: SCENE('My English Log', '목록을 쌓아 다음 자료를 정해요', [
            { motif: 'star', x: 408, y: 58, s: 0.6 }, { motif: 'tree', x: 84, y: 214 }, { motif: 'flower', x: 400, y: 226, color: 'peach' },
          ]),
        },
        stages: [
          {
            id: 'intro', title: '도입', minutes: 6,
            teacher: '"지난 두 시간 동안 고른 자료를 어디에 적어 두었나요?" 공책 여기저기에 적었다는 대답을 듣고 "한 곳에 목록으로 쌓으면 내가 얼마나 읽고 들었는지, 다음에 무엇을 볼지 보여요."라고 말한다. 칠판에 목록 칸 네 개(제목 Title, 날짜 Date, 수준 쉬움·알맞음·어려움, 한 줄 생각)를 그린다. "한 칸이라도 비면 나중에 목록을 보고 무엇을 알 수 없을까요?" 하고 칸마다 쓸모를 묻는다.',
            student: '내가 읽고 들은 영어 자료를 목록으로 남기면 무엇이 좋을까요? 목록에 꼭 들어가야 할 칸을 생각해 봐요.',
            demo: { tool: 'wordcards', options: Object.assign(PICK('고칠 줄'), { cards: [C('l1', '「My Cat」 · 5월 2일 · 쉬움 · 고양이가 귀여웠다'), C('l2', '「Space Trip」 · 5월 3일 · 수준 없음 · 어려웠다')] }), sequence: [{ at: {} }, { at: { l2: 0 } }] },
          },
          {
            id: 'main', title: '전개', minutes: 27,
            activities: [
              {
                id: 'a1', title: '활동 1. 빠진 칸이 있는 목록 줄 찾기', minutes: 12, tool: 'wordcards',
                teacher: '"목록 줄마다 네 칸(제목·날짜·수준·한 줄 생각)이 다 있는지 손가락으로 세어요. 빠진 칸이 있는 줄만 골라요." "재미있었다"처럼 생각이 아주 짧아도 칸은 채운 것이라는 기준을 먼저 정해 준다. 줄을 끝까지 읽지 않고 고르는 학생에게 "네 칸을 하나씩 짚어 보세요."라고 말한다.',
                task: '목록 줄마다 제목·날짜·수준·한 줄 생각 네 칸이 다 있는지 세어요. 빠진 칸이 있는 줄만 골라요.',
                levels: LV(PICK('고칠 줄')),
                items: [
                  Object.assign({ prompt: '하린이의 영어 목록이에요. 네 칸 가운데 빠진 칸이 있는 줄을 모두 골라 보세요.',
                    target: { pick: ['h2', 'h3'] }, difficulty: 0.2,
                    hints: ['줄마다 제목(「 」), 날짜, 수준, 한 줄 생각을 차례로 짚어 보세요.', '고른 줄 말고도 칸이 빈 줄이 있는지, 고른 줄은 정말 칸이 비었는지 다시 세어 보세요.', '둘째 줄은 날짜가, 셋째 줄은 한 줄 생각이 빠졌어요.'] },
                    CD([C('h1', '「The Big Storm」 · 5월 6일 · 알맞음 · 바람 소리 낱말이 많았다'), C('h2', '「Weather Song」 · 날짜 없음 · 쉬움 · 따라 부르기 쉬웠다'), C('h3', '「Lost Dog」 · 5월 9일 · 알맞음 · (빈칸)'), C('h4', '「Lunch Time」 · 5월 10일 · 쉬움 · 재미있었다')], ['h1', 'h2', 'h3'])),
                  Object.assign({ prompt: '준호의 영어 목록이에요. 빠진 칸이 있는 줄을 모두 골라 보세요.',
                    target: { pick: ['j1', 'j4'] }, difficulty: 0.25,
                    hints: ['네 칸을 차례로 짚어요. 칸에 "?"나 "(빈칸)"이 있으면 빠진 것이에요.', '고른 줄 말고 수준 칸이 빈 줄이 있는지 다시 보세요.', '첫째 줄은 제목이, 넷째 줄은 수준이 빠졌어요.'] },
                    CD([C('j1', '「 ? 」 · 5월 7일 · 어려움 · 공룡 이름이 길었다'), C('j2', '「Bats Help Us」 · 5월 8일 · 알맞음 · 박쥐가 좋아졌다'), C('j3', '「Paper Boat」 · 5월 9일 · 쉬움 · 따라 만들었다'), C('j4', '「Sunny Farm」 · 5월 11일 · (빈칸) · 달걀이 많았다')], ['j1', 'j2', 'j4'], [C('j5', '「Word Fun」 · 5월 12일 · 알맞음 · 좋았다', '"좋았다"처럼 짧아도 한 줄 생각 칸은 채운 것이에요.')])),
                  Object.assign({ prompt: '서아의 영어 목록이에요. 빠진 칸이 있는 줄을 모두 골라 보세요.',
                    target: { pick: ['s3'] }, difficulty: 0.3,
                    hints: ['짧게 쓴 칸과 빠진 칸은 달라요. 칸에 무엇이라도 쓰여 있으면 채운 것으로 봐요.', '고른 줄 가운데 생각이 짧을 뿐 네 칸이 다 있는 줄이 섞였는지 보세요.', '셋째 줄만 날짜가 빠졌어요. 나머지는 짧아도 네 칸이 다 있어요.'],
                    predict: { q: '"재미있었다" 한마디만 쓴 줄은 칸이 빠진 줄일까요?', options: ['빠진 줄이에요', '채운 줄이에요'], answer: 1 },
                    conclude: '목록은 네 칸이 다 차 있으면 돼요. 짧아도 쓰는 것이 쌓여 나의 기록이 돼요.' },
                    CD([C('s1', '「Koalas」 · 5월 6일 · 쉬움 · 재미있었다'), C('s2', '「Sydney Trip」 · 5월 7일 · 알맞음 · 가 보고 싶다'), C('s3', '「Music Maker」 · ( ) · 알맞음 · 노래를 만들었다'), C('s4', '「Movie Night」 · 5월 9일 · 쉬움 · 짧았다')], ['s1', 's3', 's4'])),
                ],
              },
              {
                id: 'a2', title: '활동 2. 목록을 보고 다음 자료 정하기', minutes: 15, tool: 'emotion',
                teacher: '"목록은 쌓기만 하는 것이 아니에요. 목록을 보면 다음에 무엇을 볼지 정할 수 있어요." 친구의 목록 요약을 읽고 다음 자료를 고르게 한 뒤, 고른 보기의 결과를 읽어 보게 한다. 쉬움만 계속 이어 온 친구에게 "가장 어려운 것"을 고르는 학생에게 "한 계단씩 오르면 어떤 자료일까요?"라고 묻는다. 어려움이 이어진 친구는 한 계단 내려와도 괜찮다는 것을 짚는다.',
                task: '친구의 목록 요약을 읽고 다음에 볼 자료로 가장 알맞은 것을 골라요. 고른 뒤 결과도 읽어요.',
                levels: { easy: { mode: 'branch' }, base: { mode: 'branch' }, challenge: { mode: 'branch' } },
                items: [
                  { prompt: '하린이의 목록에는 "쉬움" 자료만 다섯 개 있어요. 다음에 볼 자료로 가장 알맞은 것을 골라 보세요.',
                    toolOptions: { who: '하린', motif: 'star', situation: '목록 다섯 줄이 모두 "쉬움"이에요. 한 줄 생각은 "쉬웠다", "금방 끝났다"예요.', ask: '다음에는 어떤 자료를 볼까요?',
                      choices: [
                        { id: 'right', text: '한 쪽에 모르는 낱말이 2~3개인 자료', result: '새 낱말을 조금씩 배우며 끝까지 읽어요.', mood: '뿌듯함' },
                        { id: 'same', text: '또 모르는 낱말이 없는 자료', result: '금방 끝나지만 새로 배운 것이 없어요.', mood: '편안함', why: '쉬움만 이어졌다면 한 계단 올라갈 때예요.' },
                        { id: 'hardest', text: '한 쪽에 모르는 낱말이 10개인 자료', result: '첫 쪽에서 막혀 그만두고 싶어져요.', mood: '속상함', why: '한 번에 여러 계단을 뛰면 끝까지 읽기 어려워요.' },
                      ] },
                    target: { choice: 'right' }, difficulty: 0.15,
                    hints: ['목록의 수준 칸이 어떻게 이어졌는지 보고, 한 계단 위가 어디인지 생각해요.', '고른 자료가 한 계단 위인지, 여러 계단 위나 같은 계단인지 다시 보세요.', '쉬움 다음 계단은 알맞음(모르는 낱말 2~3개)이에요.'] },
                  { prompt: '준호의 목록에는 "어려움"이 세 번 이어졌고, 한 줄 생각은 "너무 힘들었다"예요. 다음에 볼 자료로 가장 알맞은 것을 골라 보세요.',
                    toolOptions: { who: '준호', motif: 'cloud', situation: '목록 세 줄이 모두 "어려움"이고 한 줄 생각이 "너무 힘들었다", "끝까지 못 봤다"예요.', ask: '다음에는 어떤 자료를 볼까요?',
                      choices: [
                        { id: 'harder', text: '더 어려운 자료', result: '또 끝까지 못 봐요.', mood: '속상함', why: '힘들어서 끝까지 못 봤다면 더 어려운 것은 도움이 되지 않아요.' },
                        { id: 'right', text: '모르는 낱말이 2~3개인 알맞은 자료', result: '끝까지 보며 새 낱말도 몇 개 배워요.', mood: '뿌듯함' },
                        { id: 'stop', text: '영어 자료 보기를 그만두기', result: '배울 기회가 없어져요.', mood: '슬픔', why: '그만두기보다 알맞은 수준으로 바꾸면 돼요.' },
                      ] },
                    target: { choice: 'right' }, difficulty: 0.2,
                    hints: ['"너무 힘들었다", "끝까지 못 봤다"는 생각이 무엇을 알려 주는지 생각해요.', '고른 자료로 준호가 끝까지 볼 수 있을지 다시 생각해 보세요.', '한 계단 내려온 알맞은 자료를 보면 끝까지 보며 배울 수 있어요.'] },
                  { prompt: '서아의 목록에는 "알맞음" 자료가 이어졌고, 모두 동물 이야기예요. 서아는 "다른 것도 궁금해요."라고 썼어요. 다음 자료로 가장 알맞은 것은?',
                    toolOptions: { who: '서아', motif: 'leaf', situation: '목록 네 줄이 모두 "알맞음"이고 모두 동물 이야기예요. 한 줄 생각: "다른 것도 궁금해요."', ask: '다음에는 어떤 자료를 볼까요?',
                      choices: [
                        { id: 'new', text: '모르는 낱말 2~3개인 우주 이야기', result: '수준은 그대로, 새 주제를 만나 목록이 넓어져요.', mood: '설렘' },
                        { id: 'animal', text: '모르는 낱말 2~3개인 또 다른 동물 이야기', result: '읽을 수는 있지만 서아가 궁금해한 다른 것은 아니에요.', mood: '편안함', why: '서아는 다른 주제가 궁금하다고 썼어요.' },
                        { id: 'hard', text: '모르는 낱말 6개인 우주 이야기', result: '새 주제인데 너무 어려워 끝까지 읽기 힘들어요.', mood: '걱정', why: '수준은 알맞음이 이어지고 있으니 그대로 두고 주제만 바꿔요.' },
                      ] },
                    target: { choice: 'new' }, difficulty: 0.3,
                    hints: ['수준 칸과 한 줄 생각 칸을 함께 봐요. 무엇은 그대로 두고 무엇을 바꾸고 싶어 하나요?', '고른 자료가 서아의 수준과 궁금한 것 두 가지를 모두 맞추는지 다시 보세요.', '수준은 알맞음 그대로, 주제는 동물이 아닌 새 주제(우주)예요.'] },
                ],
              },
            ],
          },
          {
            id: 'wrapup', title: '정리', minutes: 7,
            teacher: '"목록의 네 칸 가운데 다음 자료를 정할 때 가장 도움이 된 칸은 무엇이었나요?" 수준 칸과 한 줄 생각 칸이라는 말이 나오면 칠판에 표시한다. 공책 뒤쪽에 "My English Log" 표를 그리고 지난 시간에 세어 온 자료를 첫 줄로 적게 한 뒤 출구 질문을 푼다. 목록은 단원이 끝날 때까지 이어 쓴다고 알린다.',
            exitTicket: [
              { type: 'tool', tool: 'wordcards', options: Object.assign(PICK('고칠 줄'), { cards: [C('x1', '「Rain Song」 · 5월 13일 · 쉬움 · 비 소리가 좋았다'), C('x2', '「Robot Club」 · 5월 14일 · (빈칸) · 로봇을 만들고 싶다'), C('x3', '「Green Park」 · 5월 15일 · 알맞음 · 공원 지도가 나왔다')] }), prompt: '목록에서 빠진 칸이 있는 줄을 골라 보세요.', target: { pick: ['x2'] }, difficulty: 0.15 },
              { type: 'choice', prompt: '목록에 "쉬움"만 계속 이어졌어요. 다음에는?', options: ['또 쉬운 자료', '한 계단 위, 모르는 낱말 2~3개인 자료', '가장 어려운 자료'], answer: 1, difficulty: 0.15, explain: '한 계단씩 올라가면 배우면서 끝까지 볼 수 있어요.' },
              { type: 'mood', prompt: '오늘 나의 영어 목록 쓰기는 어땠나요?' },
            ],
          },
        ],
        worksheet: {
          title: 'My English Log (나의 영어 목록)',
          items: [
            { type: 'table', prompt: '이번 주에 읽거나 들은 영어 자료를 네 칸을 모두 채워 쓰세요.', columns: ['제목 (Title)', '날짜 (Date)', '수준', '한 줄 생각'], rows: 4 },
            { type: 'choice', prompt: '목록에 꼭 들어가야 하는 칸이 아닌 것은?', options: ['제목', '수준', '책값'], answer: '책값' },
            { type: 'choice', prompt: '"어려움"이 이어지고 "끝까지 못 봤다"고 썼다면 다음에는?', options: ['더 어려운 자료', '알맞은 자료'], answer: '알맞은 자료' },
            { type: 'short', prompt: '내 목록을 보고 다음에 볼 자료와 그 까닭을 한 문장으로 쓰세요.' },
          ],
          easy: {
            note: '목록 네 칸: 제목 · 날짜 · 수준(쉬움·알맞음·어려움) · 한 줄 생각',
            items: [
              { type: 'table', prompt: '읽거나 들은 영어 자료 두 가지를 쓰세요.', columns: ['제목', '날짜', '수준', '한 줄 생각'], rows: 2 },
              { type: 'choice', prompt: '쉬움이 이어졌다면 다음에는?', options: ['알맞은 자료', '가장 어려운 자료'], answer: '알맞은 자료' },
              { type: 'short', prompt: '다음에 보고 싶은 영어 자료를 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '살펴볼 목록 줄이 줄고, 맞게 고르면 초록 테두리가 생기며 틀리면 까닭을 말하고 되돌아와요.',
          base: '목록 줄마다 네 칸을 세어 고르고, 목록 요약을 보고 다음 자료를 정해요.',
          challenge: '"좋았다"처럼 짧지만 채운 줄이 더해져, 짧은 칸과 빠진 칸을 가려야 해요.',
        },
        teacherNotes: '목록 칸은 제목·날짜·수준·한 줄 생각 네 가지로 정했다. "짧게 쓴 칸"은 채운 것으로 본다는 기준을 활동 1 전에 꼭 말한다(도전 단계 함정 카드의 판정 기준이다). 목록 속 자료 이름은 앞 차시에 나온 지은 자료들이다. 학생의 실제 목록은 공책이나 학급 게시판에 이어 쓰고, 45차시 단원 정리에서 다시 본다. 자주 보이는 어려움: ① 목록을 쌓기만 하고 다시 보지 않는다 → 다음 자료를 정할 때 목록을 근거로 말하게 한다. ② 쉬움이 이어지면 가장 어려운 것으로 뛴다 → 한 계단씩 오르기를 말한다. ③ 어려움이 이어지면 그만둔다 → 한 계단 내려와도 된다고 말한다.',
      }),

      // ───────────────────────── 23차시 (extend) ─────────────────────────
      lesson(23, S08, {
        title: '친구의 영어 자료 추천을 듣고 추천 까닭 찾아 알맞은 자료 건네기',
        objective: '친구가 영어로 자료를 추천하는 말을 듣고 because 뒤의 추천 까닭을 찾으며, 친구들의 바람을 읽고 알맞은 자료를 짝 지어 추천할 수 있다.',
        illustration: {
          prompt: PROMPT('two children in a classroom book corner, one recommending an English picture book with a speech bubble saying because, the other listening with a thumbs up'),
          scene: SCENE('You should try this!', '추천 까닭을 들어요', [
            { motif: 'flower', x: 400, y: 226, color: 'rose' }, { motif: 'tree', x: 84, y: 214 }, { motif: 'sun', x: 410, y: 56, s: 0.7 },
          ]),
        },
        stages: [
          {
            id: 'intro', title: '도입', minutes: 6,
            teacher: '"친구가 \'이 책 재미있어!\'라고만 하면 읽고 싶어지나요? 까닭까지 말하면 어떤가요?" 대답을 들은 뒤 "You should try this book because it has funny pictures." 를 읽어 준다. "추천하는 말에서 까닭은 어디에 나왔나요?" because 뒤라는 대답을 칠판에 적는다. "오늘은 친구의 추천을 듣고 까닭을 찾은 뒤, 우리도 친구의 바람에 맞는 자료를 추천해 봐요."',
            student: '친구가 영어 자료를 추천할 때 까닭은 어디에 나올까요? 까닭을 들으면 무엇을 판단할 수 있을지 생각해 봐요.',
            demo: { tool: 'wordcards', options: LISTEN('You should try this book because it has funny pictures.', [C('pic', '그림이 재미있어서'), C('short', '짧아서')], '추천 까닭'), sequence: [{ at: {} }, { at: { pic: 0 } }] },
          },
          {
            id: 'main', title: '전개', minutes: 27,
            activities: [
              {
                id: 'a1', title: '활동 1. 친구의 추천을 듣고 까닭 찾기', minutes: 13, tool: 'wordcards',
                teacher: '"추천하는 말을 들으며 because, so가 들리면 그 뒤를 잡아요." 추천한 자료 이름과 까닭을 헷갈리는 학생에게 "무엇을 추천했는지와 왜 추천했는지는 다른 물음이에요."라고 짚는다. 3번은 까닭이 두 가지라 "and" 뒤도 들어야 한다는 것을 알려 준다. 소리가 없으면 교사가 친구 목소리로 대본을 읽어 준다.',
                task: '친구의 추천을 듣고 because, so 뒤의 추천 까닭 카드를 골라요.',
                levels: LV({ mode: 'listen', basket: '추천 까닭' }),
                items: [
                  Object.assign({ prompt: '민지가 노래 영상을 추천해요. 추천한 까닭은 무엇인가요? 듣고 골라 보세요.',
                    target: { listen: 'easy' }, difficulty: 0.2,
                    hints: ['because 뒤에 까닭이 나와요. 노래 영상이라는 자료 이름과 까닭을 가려 들어요.', '고른 카드가 because 뒤에 나온 말인지 다시 들어 보세요.', 'because the words are easy to follow — 가사를 따라 하기 쉬워서예요.'] },
                    LI('Hi, I\'m Minji. You should watch the Weather Song video because the words are easy to follow. I sing it every morning.', [C('easy', '가사를 따라 하기 쉬워서'), C('morning', '아침마다 불러서', '아침마다 부른다는 것은 민지의 습관이에요. because 뒤의 까닭이 아니에요.'), C('long', '영상이 길어서')], '추천 까닭', ['easy', 'morning'])),
                  Object.assign({ prompt: '도윤이가 만화책을 추천해요. 추천한 까닭은 무엇인가요? 듣고 골라 보세요.',
                    target: { listen: 'laugh' }, difficulty: 0.25,
                    hints: ['so(그래서) 앞이 까닭, 뒤가 결과일 때도 있어요. 추천하는 까닭이 어느 쪽인지 들어요.', '고른 카드가 만화책이 좋은 까닭인지, 도윤이가 한 일인지 다시 들어 보세요.', 'It\'s really funny, so I laughed a lot. — 아주 웃겨서 추천해요.'] },
                    LI('I recommend Space Cat. It\'s a comic book. It\'s really funny, so I laughed a lot. There are only a few new words on each page.', [C('laugh', '아주 웃겨서'), C('cat', '고양이가 나와서', '제목에 고양이가 있지만 추천 까닭으로 말한 것은 아니에요.'), C('hard', '어려운 낱말이 많아서', '새 낱말이 몇 개뿐이라고 했어요.')], '추천 까닭', null, [C('free', '공짜여서', '값 이야기는 없었어요.')])),
                  Object.assign({ prompt: '서아가 동물 백과 앱을 추천해요. 추천한 까닭을 모두 골라 보세요.',
                    target: { listen: ['sound', 'photo'] }, difficulty: 0.3,
                    hints: ['because 뒤에 까닭이 두 가지 and로 이어져요. and 뒤까지 끝까지 들어요.', '고른 카드가 because 뒤의 두 까닭인지, 빠뜨리거나 다른 말이 섞였는지 다시 들어 보세요.', 'because you can hear the animal sounds, and the photos are amazing — 동물 소리와 사진이에요.'],
                    predict: { q: '추천하는 말에 까닭이 꼭 하나만 있을까요?', options: ['하나만 있어요', '여러 개일 수 있어요'], answer: 1 },
                    conclude: 'because 뒤에 and로 이어지면 까닭이 여러 개예요. 끝까지 들어 모두 찾아요.' },
                    LI('You should try the Animal World app because you can hear the animal sounds, and the photos are amazing. I use it on weekends.', [C('sound', '동물 소리를 들을 수 있어서'), C('photo', '사진이 멋져서'), C('weekend', '주말에 써서', '서아가 쓰는 때예요. 추천 까닭이 아니에요.'), C('game', '게임이 많아서')], '추천 까닭', ['sound', 'photo', 'weekend'])),
                ],
              },
              {
                id: 'a2', title: '활동 2. 친구의 바람에 알맞은 자료 추천하기', minutes: 14, tool: 'wordcards',
                teacher: '"이번에는 우리가 추천해요. 친구의 바람 칸을 읽고, 그 바람을 가장 잘 채우는 자료 카드를 놓아요." 자료 카드의 작은 줄(수준·특징)을 함께 읽게 한다. 다 놓은 뒤 짝에게 "You should try ___ because ___." 로 하나를 추천하게 한다. 수준을 보지 않고 재미만 보고 놓는 학생에게 "그 친구가 모르는 낱말이 많으면 힘들다고 했어요. 수준 줄도 보세요."라고 말한다.',
                task: '친구의 바람 칸을 읽고, 수준과 특징이 맞는 자료 카드를 옆에 놓아요.',
                levels: LV({ mode: 'match' }),
                items: [
                  Object.assign({ prompt: '친구들의 바람에 알맞은 자료를 짝 지어 보세요.',
                    target: { match: { s1: 'dino', s2: 'karaoke', s3: 'recipe' } }, difficulty: 0.2,
                    hints: ['바람의 열쇠 말(공룡, 노래, 요리)을 찾아 같은 주제의 자료와 이어요.', '놓은 자료의 주제가 친구의 바람과 같은지 하나씩 말해 보세요.', '공룡 = 공룡 그림책, 노래 = 동요 따라 부르기 영상, 요리 = 쉬운 요리 영상이에요.'] },
                    CD([{ id: 'dino', text: '공룡 그림책', sub: '쉬움 · 그림이 많아요' }, { id: 'karaoke', text: '동요 따라 부르기 영상', sub: '알맞음 · 가사가 나와요' }, { id: 'recipe', text: '쉬운 요리 영상', sub: '알맞음 · 단계가 짧아요' }], null, [{ id: 'news', text: '어린이 뉴스', sub: '어려움 · 주제가 날마다 바뀌어요' }], null,
                      { slots: [{ id: 's1', label: '지호: 공룡을 좋아하고 그림이 많은 책이 좋아요' }, { id: 's2', label: '하린: 영어 노래를 따라 부르고 싶어요' }, { id: 's3', label: '민재: 집에서 따라 할 수 있는 요리를 배우고 싶어요' }] })),
                  Object.assign({ prompt: '친구들의 바람에 알맞은 자료를 짝 지어 보세요. 수준도 함께 봐요.',
                    target: { match: { s1: 'sp1', s2: 'sp2', s3: 'sp3' } }, difficulty: 0.3,
                    hints: ['세 자료의 주제가 모두 우주예요. 이번에는 수준(모르는 낱말 수)으로 친구와 이어요.', '놓은 자료의 수준이 친구가 말한 상태(처음, 조금 배우고 싶음, 도전)와 맞는지 보세요.', '처음 = 쉬움, 새 낱말 조금 = 알맞음, 선생님과 도전 = 어려움 자료예요.'],
                    predict: { q: '주제가 같으면 누구에게나 같은 자료를 추천해도 될까요?', options: ['네, 같아도 돼요', '수준을 봐야 해요'], answer: 1 },
                    conclude: '같은 주제라도 친구의 수준에 맞춰 추천해야 그 친구가 끝까지 볼 수 있어요.' },
                    CD([{ id: 'sp1', text: '우주 그림 사전', sub: '쉬움 · 모르는 낱말 0~1개' }, { id: 'sp2', text: '우주 이야기책', sub: '알맞음 · 모르는 낱말 2~3개' }, { id: 'sp3', text: '우주 과학 잡지', sub: '어려움 · 모르는 낱말 5개 이상' }], null, null, null,
                      { slots: [{ id: 's1', label: '수아: 영어책을 처음 읽어 봐요. 모르는 낱말이 거의 없으면 좋겠어요' }, { id: 's2', label: '도윤: 새 낱말을 조금씩 배우며 혼자 읽고 싶어요' }, { id: 's3', label: '서아: 선생님과 함께 어려운 글에 도전해 보고 싶어요' }] })),
                  Object.assign({ prompt: '친구들의 바람에 알맞은 자료를 짝 지어 보세요. 바람이 두 가지씩이에요.',
                    target: { match: { s1: 'audio', s2: 'comic' } }, difficulty: 0.35,
                    hints: ['바람이 두 가지씩이에요. 주제와 매체(듣기·읽기)를 함께 맞추는 자료를 찾아요.', '놓은 자료가 두 바람을 모두 채우는지, 하나만 채우는지 다시 보세요.', '귀로 듣는 동물 이야기 = 동물 이야기 오디오북, 웃긴 그림과 짧은 글 = 동물 만화책이에요.'] },
                    CD([{ id: 'audio', text: '동물 이야기 오디오북', sub: '알맞음 · 귀로 들어요' }, { id: 'comic', text: '동물 만화책', sub: '쉬움 · 웃긴 그림, 짧은 글' }, { id: 'dict', text: '동물 그림 사전', sub: '쉬움 · 낱말과 그림만 있어요' }], ['audio', 'comic'], null, null,
                      { slots: [{ id: 's1', label: '준호: 동물 이야기를 눈 대신 귀로 듣고 싶어요' }, { id: 's2', label: '하린: 웃긴 그림과 짧은 글로 동물 이야기를 읽고 싶어요' }] })),
                ],
              },
            ],
          },
          {
            id: 'wrapup', title: '정리', minutes: 7,
            teacher: '"오늘 들은 추천 가운데 가장 읽고 싶어진 것은 무엇이었나요? 왜 그랬나요?" 까닭을 들었기 때문이라는 말을 끌어낸다. 짝에게 내 목록에서 자료 하나를 "You should try ___ because ___." 로 추천하게 하고, 들은 친구는 까닭을 되말해 주게 한다. 그 뒤 출구 질문을 푼다.',
            exitTicket: [
              { type: 'tool', tool: 'wordcards', options: LISTEN('You should read Little Robot because the story is short and the ending is surprising.', [C('short', '이야기가 짧고 끝이 놀라워서'), C('robot', '로봇을 갖고 싶어서'), C('long', '이야기가 길어서')], '추천 까닭'), prompt: '친구가 책을 추천해요. 추천한 까닭은 무엇인가요? 듣고 골라 보세요.', target: { listen: 'short' }, difficulty: 0.2 },
              { type: 'choice', prompt: '"I recommend this song because the rhythm is fun." 에서 추천 까닭은?', options: ['노래를 추천해요', '리듬이 재미있어요', '노래가 길어요'], answer: 1, difficulty: 0.15, explain: 'because 뒤의 the rhythm is fun이 까닭이에요.' },
              { type: 'mood', prompt: '오늘 친구에게 자료를 추천하고 추천을 듣는 것은 어땠나요?' },
            ],
          },
        ],
        worksheet: {
          title: '영어 자료 추천하기',
          items: [
            { type: 'table', prompt: '선생님이 읽어 주는 추천 두 가지를 듣고 쓰세요.', columns: ['추천한 자료', '추천 까닭 (because 뒤)'], cells: [['', ''], ['', '']], answer: '대본: ① You should watch Ocean Friends because the fish are so colorful. ② I recommend Jump Rope Rhymes because you can sing and jump together. → 바다 친구들 영상, 물고기가 알록달록해서 / 줄넘기 노래, 노래하며 함께 뛸 수 있어서' },
            { type: 'choice', prompt: '추천 까닭이 나오는 신호 말은?', options: ['because', 'hello', 'today'], answer: 'because' },
            { type: 'blank', prompt: 'You should try ___ because ___. (내 목록의 자료로 쓰세요)' },
            { type: 'short', prompt: '친구가 추천해 준 자료 가운데 보고 싶은 것과 그 까닭을 한 문장으로 쓰세요.' },
          ],
          easy: {
            note: '추천: You should try ___ / 까닭: because ___',
            items: [
              { type: 'table', prompt: '선생님이 읽어 주는 추천을 듣고 쓰세요.', columns: ['추천한 자료', '까닭'], cells: [['', '']], answer: '바다 친구들 영상, 물고기가 알록달록해서' },
              { type: 'choice', prompt: '"because it is funny" 의 까닭은?', options: ['웃겨서', '길어서'], answer: '웃겨서' },
              { type: 'short', prompt: '친구에게 추천하고 싶은 영어 자료 이름을 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드가 줄고, 맞게 놓으면 초록 테두리가 생기며 틀리면 까닭을 말하고 되돌아와요.',
          base: '추천을 듣고 까닭을 찾고, 친구의 바람에 맞는 자료를 짝 지은 뒤 확인을 눌러요.',
          challenge: '"공짜여서"·어린이 뉴스처럼 그럴듯하지만 맞지 않는 카드가 더해져요.',
        },
        teacherNotes: '추천하는 말과 자료 이름은 모두 이 차시를 위해 지은 것이다(Weather Song, Space Cat, Animal World, Little Robot은 가상의 자료). 듣기 대본: 활동 1 ① Hi, I\'m Minji. You should watch the Weather Song video because the words are easy to follow. I sing it every morning. ② I recommend Space Cat. It\'s a comic book. It\'s really funny, so I laughed a lot. There are only a few new words on each page. ③ You should try the Animal World app because you can hear the animal sounds, and the photos are amazing. I use it on weekends. 출구: You should read Little Robot because the story is short and the ending is surprising. 자주 보이는 어려움: ① 추천한 자료와 까닭을 헷갈린다 → "무엇을?"과 "왜?"를 나누어 묻는다. ② because 뒤 첫 까닭만 듣는다 → and 뒤까지 듣게 한다. ③ 친구의 수준을 보지 않고 내가 좋아하는 자료를 추천한다 → 바람 칸의 수준 말을 동그라미 치게 한다.',
      }),

      // ───────────────────────── 24차시 (core) ─────────────────────────
      lesson(24, S09, {
        title: 'Row Your Boat 동요의 되풀이 구절과 분위기 낱말 찾기',
        objective: '전래 동요 Row, Row, Row Your Boat를 들으며 되풀이되는 구절을 찾아 따라 부르고, 노래의 분위기를 나타내는 낱말을 골라 그 까닭을 말할 수 있다.',
        illustration: {
          prompt: PROMPT('children rowing a small wooden boat gently down a calm stream under willow trees, with musical notes floating over the water in a sunny afternoon'),
          scene: SCENE('Row, Row, Row Your Boat', '되풀이 구절을 찾아 불러요', [
            { motif: 'wave', y: 232 }, { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'tree', x: 80, y: 214 }, { motif: 'bird', x: 320, y: 76 },
          ]),
        },
        stages: [
          {
            id: 'intro', title: '도입', minutes: 6,
            teacher: '"노래는 신나게 부르기만 하면 되고 가사 뜻은 몰라도 될까요?" 손을 들게 한 뒤 "오늘은 아주 오래된 영어 전래 동요를 불러요. 가사 낱말 하나가 노래 분위기를 정하기도 해요."라고 말한다. 가사 네 줄(Row, row, row your boat, / Gently down the stream. / Merrily, merrily, merrily, merrily, / Life is but a dream.)을 칠판에 쓰고 한 번 불러 준다(듣기 단추로도 들을 수 있다). "같은 낱말이 되풀이되는 곳이 보이나요?" 하고 묻는다.',
            student: '노래는 즐기기만 하면 되고 가사 뜻은 몰라도 될까요? 영어 노래에서 되풀이되는 낱말을 찾아봐요.',
            demo: { tool: 'wordcards', options: LISTEN('Row, row, row your boat, gently down the stream.', [C('row', 'row (노를 젓다)'), C('fly', 'fly (날다)')], '들은 낱말'), sequence: [{ at: {} }, { at: { row: 0 } }] },
          },
          {
            id: 'main', title: '전개', minutes: 27,
            activities: [
              {
                id: 'a1', title: '활동 1. 되풀이되는 구절 찾고 따라 부르기', minutes: 13, tool: 'wordcards',
                teacher: '"듣기 단추로 노래 가사를 들으며 몇 번 되풀이되는지 손가락으로 세어요." row는 노를 젓다, gently는 부드럽게, merrily는 즐겁게, stream은 시냇물이라고 칠판에 뜻을 적는다. 세기가 헷갈리는 학생에게 칠판 가사에서 그 낱말에 동그라미를 치며 세게 한다. 마지막 문항은 짝과 돌림노래로 불러 보는 활동이다 — 한 사람이 첫 줄을 마치면 다른 사람이 처음부터 시작한다.',
                task: '듣기 단추로 노래를 들으며 되풀이되는 낱말을 세어 알맞은 카드를 골라요. 마지막에는 짝과 돌림노래로 불러요.',
                levels: LV({ mode: 'listen', basket: '찾은 낱말' }),
                items: [
                  Object.assign({ prompt: '노래에서 네 번 이어서 되풀이되는 낱말은 무엇인가요? 듣고 골라 보세요.',
                    target: { listen: 'merrily' }, difficulty: 0.15,
                    hints: ['노래를 들으며 같은 낱말이 쉬지 않고 이어질 때 손가락을 하나씩 접어요.', '고른 낱말이 몇 번 이어졌는지 다시 들으며 세어 보세요.', '셋째 줄에 merrily가 네 번 이어져요.'] },
                    LI('Row, row, row your boat, gently down the stream. Merrily, merrily, merrily, merrily, life is but a dream.', [C('row', 'row (노를 젓다)', 'row는 세 번 이어져요.'), C('merrily', 'merrily (즐겁게)'), C('gently', 'gently (부드럽게)', 'gently는 한 번 나와요.'), C('dream', 'dream (꿈)', 'dream은 한 번 나와요.')], '네 번 되풀이', ['row', 'merrily'])),
                  Object.assign({ prompt: '노래 첫 줄에서 세 번 이어서 되풀이되는 낱말은 무엇인가요? 듣고 골라 보세요.',
                    target: { listen: 'row' }, difficulty: 0.15,
                    hints: ['첫 줄만 들어요. 노래가 시작하자마자 이어지는 낱말을 세어요.', '고른 낱말이 첫 줄에 있었는지, 몇 번이었는지 다시 들어 보세요.', 'Row, row, row your boat — row가 세 번이에요.'] },
                    LI('Row, row, row your boat, gently down the stream.', [C('row', 'row (노를 젓다)'), C('boat', 'boat (배)', 'boat는 한 번 나와요.'), C('stream', 'stream (시냇물)', 'stream은 한 번 나와요.')], '세 번 되풀이', ['row', 'boat'], [C('merrily', 'merrily (즐겁게)', 'merrily는 첫 줄이 아니라 셋째 줄에 나와요.')])),
                  Object.assign({ prompt: '노래에서 배가 어떻게 가는지, 노래하는 마음이 어떤지 알려 주는 낱말 두 개를 골라 보세요.',
                    target: { listen: ['gently', 'merrily'] }, difficulty: 0.25,
                    hints: ['"어떻게"를 알려 주는 낱말은 -ly로 끝날 때가 많아요. -ly로 끝나는 낱말을 들어요.', '고른 낱말이 물건 이름(배, 시냇물)이 아니라 "어떻게"를 알려 주는지 다시 보세요.', 'gently(부드럽게)와 merrily(즐겁게)예요.'] },
                    LI('Row, row, row your boat, gently down the stream. Merrily, merrily, merrily, merrily, life is but a dream.', [C('gently', 'gently (부드럽게)'), C('merrily', 'merrily (즐겁게)'), C('boat', 'boat (배)', 'boat는 물건 이름이에요. 어떻게 가는지 알려 주지 않아요.'), C('stream', 'stream (시냇물)', 'stream은 곳의 이름이에요.')], '분위기 낱말', ['gently', 'merrily', 'boat'])),
                  { prompt: '짝과 돌림노래로 불러요. 한 사람이 첫 줄을 마치면 다른 사람이 처음부터 시작해요. 두 번 돌고 나서 "다 했어요"를 누르세요.', free: true, talk: true },
                ],
              },
              {
                id: 'a2', title: '활동 2. 노래의 분위기와 그 까닭(가사 단서) 말하기', minutes: 14, tool: 'story',
                teacher: '"이 노래의 분위기는 어떤가요? 그렇게 느낀 까닭을 가사 낱말에서 찾아요." 말풍선의 첫 빈칸은 분위기 낱말, 둘째 빈칸은 그 단서가 된 가사 낱말이라고 알려 준다. 분위기만 고르고 단서를 아무 낱말이나 넣는 학생에게 "그 낱말이 정말 그 느낌을 주나요? 뜻을 떠올려 보세요."라고 묻는다. 3번은 다른 사람이 같은 노래를 다르게 느낀 경우인데, 가사 단서가 맞는지로 판단하게 한다.',
                task: '말풍선의 첫 빈칸에 분위기 낱말, 둘째 빈칸에 그 까닭이 된 가사 낱말 카드를 넣어요.',
                levels: LV({ mode: 'fill' }),
                items: [
                  Object.assign({ prompt: '노래의 셋째 줄을 듣고 느낀 분위기와 그 까닭을 완성해 보세요.',
                    target: { fill: { b1: 'cheerful', b2: 'merrily' } }, difficulty: 0.2,
                    hints: ['셋째 줄에 되풀이된 낱말의 뜻을 떠올리고, 그 뜻과 어울리는 분위기 낱말을 골라요.', '넣은 분위기와 가사 단서가 서로 어울리는지 다시 보세요. 단서 낱말이 그 느낌을 주나요?', 'merrily(즐겁게)가 네 번 되풀이되니 cheerful(즐거운)이에요.'] },
                    CD(['cheerful', 'scary', 'merrily', 'boat'], ['cheerful', 'scary', 'merrily'], ['sad'], null,
                      { slots: [{ id: 'b1', who: '하린', motif: 'sun', label: 'The song feels ___' }, { id: 'b2', who: '하린', motif: 'sun', label: 'because of the word "___".' }] })),
                  Object.assign({ prompt: '노래의 첫째·둘째 줄을 듣고 느낀 분위기와 그 까닭을 완성해 보세요.',
                    target: { fill: { b1: 'calm', b2: 'gently' } }, difficulty: 0.25,
                    hints: ['배가 "어떻게" 내려가는지 알려 주는 낱말을 찾고, 그 뜻에 어울리는 분위기를 골라요.', '넣은 단서 낱말이 물건 이름이 아니라 "어떻게"를 알려 주는 낱말인지 보세요.', 'gently(부드럽게) 시냇물을 따라 내려가니 calm(잔잔한)이에요.'] },
                    CD(['calm', 'angry', 'gently', 'stream'], ['calm', 'angry', 'gently'], ['noisy'], null,
                      { slots: [{ id: 'b1', who: '준호', motif: 'leaf', label: 'The first part feels ___' }, { id: 'b2', who: '준호', motif: 'leaf', label: 'because the boat goes "___" down the stream.' }] })),
                  Object.assign({ prompt: '도윤이는 이 노래가 "꿈꾸는 듯하다(dreamy)"고 느꼈어요. 도윤이의 까닭이 될 가사 낱말을 넣어 보세요.',
                    target: { fill: { b1: 'dream' } }, difficulty: 0.3,
                    hints: ['같은 노래도 사람마다 다르게 느낄 수 있어요. 도윤이가 느낀 분위기와 뜻이 이어지는 가사 낱말을 찾아요.', '넣은 낱말이 dreamy와 뜻이 이어지는지 다시 보세요.', '마지막 줄 Life is but a dream의 dream(꿈)이에요.'],
                    predict: { q: '하린이는 "즐겁다", 도윤이는 "꿈꾸는 듯하다"고 느꼈어요. 둘 중 하나는 틀린 걸까요?', options: ['하나는 틀려요', '둘 다 단서가 있어요'], answer: 1 },
                    conclude: '노래의 분위기는 여러 가지로 느낄 수 있어요. 가사 단서를 들어 말하면 내 느낌이 설득력이 있어요.' },
                    CD(['dream', 'row', 'boat'], ['dream', 'boat'], ['your'], null,
                      { slots: [{ id: 'b1', who: '도윤', motif: 'moon', label: 'It feels dreamy because of the word "___".' }] })),
                ],
              },
            ],
          },
          {
            id: 'wrapup', title: '정리', minutes: 7,
            teacher: '"오늘 노래에서 되풀이된 낱말은 무엇이었나요? 그 낱말이 분위기와 어떤 관계가 있었나요?" merrily가 네 번 되풀이되어 즐거운 느낌이 커졌다는 말을 끌어낸다. "가사 뜻을 알고 부르니 처음과 무엇이 달랐나요?"라고 묻는다. 모두 함께 한 번 더 부르고 출구 질문을 푼다.',
            exitTicket: [
              { type: 'tool', tool: 'wordcards', options: LISTEN('Twinkle, twinkle, little star, how I wonder what you are.', [C('twinkle', 'twinkle (반짝반짝)'), C('star', 'star (별)'), C('wonder', 'wonder (궁금하다)')], '되풀이 낱말'), prompt: '다른 전래 동요예요. 첫 줄에서 두 번 이어서 되풀이되는 낱말을 골라 보세요.', target: { listen: 'twinkle' }, difficulty: 0.15 },
              { type: 'choice', prompt: '"Sleep, sleep, softly sleep." 이라는 가사가 되풀이되는 노래의 분위기로 가장 알맞은 것은?', options: ['시끄럽고 신나는', '조용하고 포근한', '무섭고 긴장되는'], answer: 1, difficulty: 0.2, explain: 'sleep(자다), softly(부드럽게)가 되풀이되어 조용하고 포근해요.' },
              { type: 'mood', prompt: '오늘 영어 동요 부르기는 어땠나요?' },
            ],
          },
        ],
        worksheet: {
          title: 'Row, Row, Row Your Boat',
          items: [
            { type: 'table', prompt: '가사에서 되풀이되는 낱말과 횟수를 쓰세요.', columns: ['낱말', '뜻', '몇 번?'], cells: [['row', '', ''], ['merrily', '', '']], answer: '노를 젓다, 3번 / 즐겁게, 4번' },
            { type: 'choice', prompt: '"gently down the stream" 에서 배가 가는 모습은?', options: ['부드럽게', '빠르고 거칠게'], answer: '부드럽게' },
            { type: 'blank', prompt: 'The song feels ___ because of the word "___". (내 느낌과 가사 단서로 쓰세요)' },
            { type: 'short', prompt: '가사 뜻을 알고 노래를 부르니 무엇이 달라졌는지 한 문장으로 쓰세요.' },
          ],
          easy: {
            note: 'row 노를 젓다 · gently 부드럽게 · merrily 즐겁게 · stream 시냇물 · dream 꿈',
            items: [
              { type: 'table', prompt: '되풀이되는 낱말의 횟수를 쓰세요.', columns: ['낱말', '몇 번?'], cells: [['row', ''], ['merrily', '']], answer: '3번 / 4번' },
              { type: 'choice', prompt: 'merrily 의 뜻은?', options: ['즐겁게', '슬프게'], answer: '즐겁게' },
              { type: 'short', prompt: '이 노래의 느낌을 한 낱말로 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '고를 카드가 줄고, 맞게 넣으면 초록 테두리가 생기며 틀리면 까닭을 말하고 되돌아와요.',
          base: '노래를 들으며 되풀이 낱말을 세고, 분위기와 가사 단서를 짝 지은 뒤 확인을 눌러요.',
          challenge: '첫 줄에 없는 merrily, sad·noisy·your 같은 함정 카드가 더해져 줄과 뜻을 함께 따져야 해요.',
        },
        teacherNotes: '저작권: Row, Row, Row Your Boat는 저작권이 끝난 영어권 전래 동요다(1852년 악보로 처음 출판된 것으로 알려져 있다). 가사: Row, row, row your boat, / Gently down the stream. / Merrily, merrily, merrily, merrily, / Life is but a dream. 출구의 Twinkle, Twinkle, Little Star 첫 두 줄도 제인 테일러의 시(1806년)로 저작권이 끝났다. 듣기 단추는 노래가 아니라 가사를 읽어 준다 — 가락은 교사가 불러 준다. 낱말 뜻: row 노를 젓다, gently 부드럽게, merrily 즐겁게, stream 시냇물, life is but a dream 삶은 꿈일 뿐. 자주 보이는 어려움: ① 가사 뜻은 몰라도 된다고 여긴다 → 낱말 뜻을 알고 다시 부르며 달라진 느낌을 말하게 한다. ② 분위기 낱말과 가사 단서를 따로 논다 → "그 낱말이 정말 그 느낌을 주나?"로 잇게 한다. ③ 친구와 느낌이 다르면 한쪽이 틀렸다고 여긴다 → 단서가 있으면 둘 다 될 수 있다고 짚는다.',
      }),
      // ───────────────────────── 25차시 (practice) ─────────────────────────
      lesson(25, S09, {
        title: '자장가 Hush, Little Baby의 이어지는 틀로 새 노랫말 잇기',
        objective: '미국 전래 자장가 Hush, Little Baby를 듣고 앞 줄의 선물이 다음 줄로 이어지는 되풀이 틀을 찾아, 그 틀대로 새 노랫말을 잇고 노래의 분위기를 가사 단서로 말할 수 있다.',
        illustration: {
          prompt: PROMPT('a quiet bedroom at night with a mother singing to a sleeping baby in a cradle, a small mockingbird on the windowsill and stars outside'),
          scene: SCENE('Hush, little baby', '조용히 이어지는 노랫말', [
            { motif: 'moon', x: 410, y: 60, s: 0.8 }, { motif: 'star', x: 330, y: 50, s: 0.5 }, { motif: 'house', x: 390, y: 216, color: 'lavender' }, { motif: 'bird', x: 110, y: 120 },
          ]),
        },
        stages: [
          {
            id: 'intro', title: '도입', minutes: 6,
            teacher: '"아기를 재울 때 부르는 노래는 어떤 목소리로 부를까요?" 대답을 들은 뒤 "오늘은 미국에서 오래전부터 불러 온 자장가를 들어요."라고 말하고 첫 네 줄을 작고 느리게 불러 준다. 칠판에 Hush(쉿), mockingbird(흉내지빠귀, 다른 새소리를 흉내 내는 새), diamond ring(다이아몬드 반지)을 적는다. "지난 시간 노래는 한 낱말이 되풀이됐어요. 이 노래는 무엇이 되풀이될까요? 듣고 찾아봐요."',
            student: '자장가는 어떤 분위기일까요? 이 노래에서 무엇이 되풀이되는지 들으며 찾아봐요.',
            demo: { tool: 'wordcards', options: LISTEN('Hush, little baby, don\'t say a word.', [C('hush', '쉿, 조용히'), C('shout', '크게 소리쳐')], '첫 낱말의 뜻'), sequence: [{ at: {} }, { at: { hush: 0 } }] },
          },
          {
            id: 'main', title: '전개', minutes: 27,
            activities: [
              {
                id: 'a1', title: '활동 1. 노래를 듣고 이어지는 선물 찾기', minutes: 12, tool: 'wordcards',
                teacher: '"엄마가 아기에게 무엇을 사 주겠다고 하는지 들어요. 그리고 그 선물이 다음 줄에서 어떻게 다시 나오는지 들어요." 칠판에 "선물 → And if that 선물 …" 화살표를 그린다. 노래의 don\'t sing은 옛 노랫말이라 오늘날 문법(doesn\'t sing)과 다르다는 것을 짧게 알려 준다. 마지막 문항은 짝과 아기를 재우듯 작고 느리게 불러 보는 활동이다.',
                task: '듣기 단추로 노랫말을 들으며 엄마가 사 주겠다는 선물을 찾아 카드를 골라요. 마지막에는 짝과 작고 느리게 불러요.',
                levels: LV({ mode: 'listen', basket: '찾은 선물' }),
                items: [
                  Object.assign({ prompt: '엄마가 맨 처음 사 주겠다고 한 것은 무엇인가요? 듣고 골라 보세요.',
                    target: { listen: 'bird' }, difficulty: 0.15,
                    hints: ['buy you a(사 줄게) 뒤를 들어요. 맨 처음 나오는 buy you a 뒤예요.', '고른 카드가 첫 번째 buy you a 뒤에 나왔는지 다시 들어 보세요.', 'Mama\'s going to buy you a mockingbird — 흉내지빠귀 새예요.'] },
                    LI('Hush, little baby, don\'t say a word. Mama\'s going to buy you a mockingbird. And if that mockingbird don\'t sing, Mama\'s going to buy you a diamond ring.', [C('bird', '흉내지빠귀 새'), C('ring', '다이아몬드 반지', '반지는 새가 노래하지 않을 때 사 주는 둘째 선물이에요.'), C('word', '낱말 카드', 'don\'t say a word는 "한마디도 하지 마"라는 뜻이에요.')], '맨 처음 선물', ['bird', 'ring'])),
                  Object.assign({ prompt: '흉내지빠귀가 노래하지 않으면 엄마는 무엇을 사 주나요? 듣고 골라 보세요.',
                    target: { listen: 'ring' }, difficulty: 0.2,
                    hints: ['And if that mockingbird(그 새가 만약) 뒤의 일을 들은 다음, 이어지는 buy you a 뒤를 잡아요.', '고른 카드가 새 이야기 다음에 나온 선물인지 다시 들어 보세요.', 'And if that mockingbird don\'t sing, Mama\'s going to buy you a diamond ring.'] },
                    LI('Hush, little baby, don\'t say a word. Mama\'s going to buy you a mockingbird. And if that mockingbird don\'t sing, Mama\'s going to buy you a diamond ring.', [C('bird', '흉내지빠귀 새', '새는 첫 번째 선물이에요.'), C('ring', '다이아몬드 반지'), C('glass', '거울', '거울은 이 두 줄 뒤에 나오는 셋째 선물이에요.')], '둘째 선물', ['bird', 'ring'])),
                  Object.assign({ prompt: '다이아몬드 반지가 놋쇠로 변하면(turns brass) 엄마는 무엇을 사 주나요? 듣고 골라 보세요.',
                    target: { listen: 'glass' }, difficulty: 0.25,
                    hints: ['선물이 다음 줄로 이어지는 틀이에요. And if that diamond ring 뒤를 기다렸다가 buy you a 뒤를 들어요.', '고른 카드가 반지 다음에 나온 선물인지 다시 들어 보세요.', 'And if that diamond ring turns brass, Mama\'s going to buy you a looking glass — 거울이에요.'],
                    predict: { q: '이 노래에서 앞 줄의 선물은 다음 줄에 다시 나올까요?', options: ['다시 안 나와요', '다시 나와요'], answer: 1 },
                    conclude: '앞 줄에서 사 준 선물이 다음 줄 "And if that ___" 에 다시 나오며 노래가 이어져요.' },
                    LI('And if that diamond ring turns brass, Mama\'s going to buy you a looking glass.', [C('ring', '다이아몬드 반지', '반지는 놋쇠로 변한 선물이에요.'), C('glass', '거울'), C('brass', '놋쇠 그릇', 'brass는 반지가 변한 재료예요. 사 주는 선물이 아니에요.')], '셋째 선물', ['ring', 'glass'])),
                  { prompt: '짝과 아기를 재우듯 작고 느리게 첫 네 줄을 불러요. 한 사람이 부르면 다른 사람은 눈을 감고 들어요. 바꾸어 한 번 더 한 뒤 "다 했어요"를 누르세요.', free: true, talk: true },
                ],
              },
              {
                id: 'a2', title: '활동 2. 같은 틀로 새 노랫말 잇고 분위기 말하기', minutes: 15, tool: 'story',
                teacher: '"우리도 같은 틀로 노랫말을 이어 볼까요? 앞 줄에서 사 준 선물이 다음 줄 And if that ___ 에 와야 해요." 1·2번은 새로 지은 이어지는 줄이다. 아무 선물이나 넣는 학생에게 "앞 줄에서 엄마가 사 준 것이 무엇이었나요?"라고 묻는다. 3번은 노래의 분위기와 그 단서를 넣는 문항이다. 다 한 뒤 1·2번 새 노랫말을 같은 가락으로 불러 보게 한다.',
                task: '말풍선 빈칸에 카드를 넣어요. 앞 줄의 선물이 다음 줄에 다시 오도록 이어요.',
                levels: LV({ mode: 'fill' }),
                items: [
                  Object.assign({ prompt: '새 노랫말이에요. "Mama\'s going to buy you a puppy." 다음 줄을 같은 틀로 이어 보세요.',
                    target: { fill: { b1: 'puppy' } }, difficulty: 0.2,
                    hints: ['이 노래는 앞 줄에서 사 준 선물이 다음 줄 And if that ___ 에 다시 와요.', '넣은 카드가 바로 앞 줄에서 사 준 선물인지 다시 보세요.', '앞 줄이 a puppy이니 And if that puppy won\'t play예요.'] },
                    CD(['puppy', 'mockingbird', 'baby'], null, ['kitten'], null,
                      { slots: [{ id: 'b1', who: '엄마', motif: 'moon', label: 'And if that ___ won\'t play,' }] })),
                  Object.assign({ prompt: '새 노랫말이에요. "And if that kitten won\'t purr, Mama\'s going to buy you a teddy bear." 다음 줄을 같은 틀로 이어 보세요.',
                    target: { fill: { b1: 'teddy bear' } }, difficulty: 0.3,
                    hints: ['노래가 이어지는 틀을 떠올려요. 바로 앞 줄에서 엄마가 사 준 것이 다음 줄 And if that ___ 에 와요.', '넣은 카드가 바로 앞 줄의 선물인지, 그보다 앞 줄의 선물(kitten)인지 다시 보세요.', '앞 줄 끝이 a teddy bear이니 And if that teddy bear won\'t stay예요.'] },
                    CD(['teddy bear', 'kitten', 'baby'], ['teddy bear', 'kitten'], ['mockingbird'], null,
                      { slots: [{ id: 'b1', who: '엄마', motif: 'moon', label: 'And if that ___ won\'t stay,' }] })),
                  Object.assign({ prompt: '이 자장가의 분위기와 그 까닭을 완성해 보세요.',
                    target: { fill: { b1: 'quiet', b2: 'Hush' } }, difficulty: 0.25,
                    hints: ['노래의 첫 낱말과, 아기에게 하지 말라고 한 것을 떠올려요. 그 뜻과 어울리는 분위기를 골라요.', '넣은 분위기와 단서 낱말이 서로 어울리는지 보세요. 선물 이름이 분위기의 단서일까요?', 'Hush(쉿)와 don\'t say a word로 조용한(quiet) 분위기예요.'],
                    predict: { q: '선물이 계속 바뀌니 이 노래는 시끄럽고 바쁜 노래일까요?', options: ['시끄러워요', '조용해요'], answer: 1 },
                    conclude: '선물이 바뀌어도 "Hush"와 작고 느린 가락이 자장가의 조용한 분위기를 만들어요.' },
                    CD(['quiet', 'loud', 'Hush', 'diamond'], ['quiet', 'loud', 'Hush'], ['exciting'], null,
                      { slots: [{ id: 'b1', who: '하린', motif: 'star', label: 'This song is ___' }, { id: 'b2', who: '하린', motif: 'star', label: 'because it starts with "___, little baby".' }] })),
                ],
              },
            ],
          },
          {
            id: 'wrapup', title: '정리', minutes: 7,
            teacher: '"지난 시간 노래는 낱말이 되풀이됐고, 오늘 노래는 무엇이 되풀이됐나요?" And if that ___ / Mama\'s going to buy you a ___ 틀이 되풀이되며 선물이 이어졌다는 말을 끌어낸다. 희망하는 짝 두세 쌍이 새 노랫말 두 줄을 불러 보게 한 뒤(한 쌍에 30초) 출구 질문을 푼다.',
            exitTicket: [
              { type: 'tool', tool: 'wordcards', options: LISTEN('Mama\'s going to buy you a little boat. And if that little boat won\'t float, Mama\'s going to buy you a billy goat.', [C('boat', '작은 배'), C('goat', '염소'), C('coat', '외투')], '마지막 선물'), prompt: '새로 이은 노랫말이에요. 작은 배가 뜨지 않으면 엄마는 무엇을 사 주나요?', target: { listen: 'goat' }, difficulty: 0.25 },
              { type: 'choice', prompt: '"Mama\'s going to buy you a drum. And if that ___ won\'t play, …" 빈칸에 알맞은 것은?', options: ['drum', 'baby', 'ring'], answer: 0, difficulty: 0.2, explain: '앞 줄에서 사 준 선물(drum)이 다음 줄에 다시 와요.' },
              { type: 'mood', prompt: '오늘 자장가 듣고 부르기는 어땠나요?' },
            ],
          },
        ],
        worksheet: {
          title: 'Hush, Little Baby — 이어지는 노랫말',
          items: [
            { type: 'table', prompt: '노랫말에서 엄마가 사 주는 선물을 차례대로 쓰세요.', columns: ['차례', '선물 (영어)', '뜻'], cells: [['1', '', ''], ['2', '', ''], ['3', '', '']], answer: 'mockingbird 흉내지빠귀 / diamond ring 다이아몬드 반지 / looking glass 거울' },
            { type: 'blank', prompt: 'Mama\'s going to buy you a ___. And if that ___ won\'t ___, … (내가 고른 선물로 새 노랫말을 쓰세요)' },
            { type: 'choice', prompt: '이 노래의 분위기로 가장 알맞은 것은?', options: ['조용하고 포근한', '시끄럽고 신나는', '무섭고 긴장되는'], answer: '조용하고 포근한' },
            { type: 'short', prompt: '이 노래의 분위기를 그렇게 느낀 까닭을 가사 낱말 하나를 들어 쓰세요.' },
          ],
          easy: {
            note: '틀: Mama\'s going to buy you a 선물. → And if that 선물 …',
            items: [
              { type: 'table', prompt: '엄마가 사 주는 첫째·둘째 선물을 쓰세요.', columns: ['차례', '선물'], cells: [['1', ''], ['2', '']], answer: 'mockingbird / diamond ring' },
              { type: 'choice', prompt: 'Hush 의 뜻은?', options: ['쉿, 조용히', '크게 소리쳐'], answer: '쉿, 조용히' },
              { type: 'short', prompt: '내가 아기에게 사 주고 싶은 선물을 영어 낱말로 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '고를 카드가 줄고, 맞게 넣으면 초록 테두리가 생기며 틀리면 까닭을 말하고 되돌아와요.',
          base: '노래를 듣고 선물을 찾은 뒤, 같은 틀로 노랫말을 잇고 확인을 눌러요.',
          challenge: 'kitten, mockingbird, exciting 같은 그럴듯한 카드가 더해져 틀(바로 앞 줄의 선물)과 분위기 단서를 정확히 따져야 해요.',
        },
        teacherNotes: '저작권: Hush, Little Baby는 저작권이 끝난 미국 전래 자장가다(지은이를 알 수 없고 19세기부터 전해 온다). 이 차시에 쓴 노랫말: Hush, little baby, don\'t say a word, / Mama\'s going to buy you a mockingbird. / And if that mockingbird don\'t sing, / Mama\'s going to buy you a diamond ring. / And if that diamond ring turns brass, / Mama\'s going to buy you a looking glass. (전래 노랫말이라 don\'t sing처럼 오늘날 문법과 다른 곳이 있다.) puppy·kitten·teddy bear·little boat·billy goat로 이은 줄은 이 차시를 위해 지은 것이다. 듣기 단추는 가락 없이 노랫말을 읽어 준다 — 가락은 교사가 작고 느리게 불러 준다. 자주 보이는 어려움: ① 선물 이름과 분위기 단서를 헷갈린다 → 분위기는 Hush, 가락의 빠르기·크기에서 온다는 것을 짚는다. ② 새 노랫말에 바로 앞 줄이 아닌 선물을 넣는다 → 앞 줄에 밑줄을 긋고 화살표로 잇게 한다. ③ 노래는 뜻을 몰라도 된다고 여긴다 → 뜻을 알고 다시 부르며 작고 느리게 부르는 까닭을 말하게 한다.',
      }),

      // ───────────────────────── 26차시 (extend) ─────────────────────────
      lesson(26, S09, {
        title: '분위기가 다른 두 노래를 듣고 가사 단서로 견주기',
        objective: '분위기가 다른 두 노래(신나는 노래·쓸쓸한 노래)를 듣고 되풀이 구절과 분위기 낱말을 찾으며, 새 가사 줄을 분위기에 따라 나눌 수 있다.',
        illustration: {
          prompt: PROMPT('a split scene: on the left children dancing in a sunny park with balloons, on the right a child looking out a rainy window holding a letter, with music notes on both sides'),
          scene: SCENE('Sunny Saturday · Rainy Window', '두 노래의 분위기를 견주어요', [
            { motif: 'sun', x: 120, y: 56, s: 0.8 }, { motif: 'cloud', x: 380, y: 60 }, { motif: 'leaf', x: 400, y: 214 }, { motif: 'flower', x: 90, y: 226, color: 'buttercup' },
          ]),
        },
        stages: [
          {
            id: 'intro', title: '도입', minutes: 6,
            teacher: '"같은 날씨 노래라도 맑은 날 노래와 비 오는 날 노래는 느낌이 어떻게 다를까요?" 대답을 들은 뒤 "오늘은 선생님이 지은 노래 두 곡을 들어요. Sunny Saturday와 Rainy Window예요. 제목만 보고 어떤 분위기일지 먼저 짐작해 봐요."라고 말한다. 짐작을 칠판에 적어 두고, 들은 뒤 가사 단서로 확인하자고 한다. 노래 분위기는 가락뿐 아니라 가사 낱말에도 담긴다는 것을 지난 두 시간의 노래로 떠올리게 한다.',
            student: '제목 Sunny Saturday와 Rainy Window를 보고 두 노래의 분위기를 짐작해 봐요. 무엇을 듣고 확인할 수 있을까요?',
            demo: { tool: 'wordcards', options: LISTEN('Sunny Saturday, let\'s go out and play!', [C('happy', '신나는 노래'), C('lonely', '쓸쓸한 노래')], '분위기'), sequence: [{ at: {} }, { at: { happy: 0 } }] },
          },
          {
            id: 'main', title: '전개', minutes: 27,
            activities: [
              {
                id: 'a1', title: '활동 1. 두 노래의 되풀이 구절과 분위기 낱말 찾기', minutes: 13, tool: 'wordcards',
                teacher: '"노래마다 두 번 들어요. 처음에는 되풀이되는 구절을, 다음에는 분위기를 알려 주는 낱말을 찾아요." Rainy Window의 drip, drop은 빗소리를 흉내 낸 말이라고 알려 준다. 노래 제목만 보고 고르는 학생에게 "가사에서 그 느낌을 주는 낱말이 무엇이었나요?"라고 묻는다. 소리가 없으면 교사가 Sunny Saturday는 빠르고 밝게, Rainy Window는 느리고 작게 읽어 준다.',
                task: '듣기 단추로 노래 가사를 들어요. 되풀이되는 구절이나 분위기를 알려 주는 낱말 카드를 골라요.',
                levels: LV({ mode: 'listen', basket: '찾은 것' }),
                items: [
                  Object.assign({ prompt: 'Sunny Saturday를 듣고 되풀이되는 구절을 골라 보세요.',
                    target: { listen: 'sat' }, difficulty: 0.15,
                    hints: ['노래의 처음과 끝에 같은 말이 나오는지 들어요.', '고른 구절이 두 번 이상 나왔는지 다시 들으며 세어 보세요.', 'Sunny Saturday가 첫 줄과 마지막 줄에 되풀이돼요.'] },
                    LI('Sunny Saturday, let\'s go out and play! Jump and run, have fun, it\'s a happy day! Sunny Saturday, hip, hip, hooray!', [C('sat', 'Sunny Saturday'), C('jump', 'Jump and run', '한 번만 나와요.'), C('day', 'happy day', '한 번만 나와요.')], '되풀이 구절', ['sat', 'jump'])),
                  Object.assign({ prompt: 'Rainy Window를 듣고 이어서 되풀이되는 구절을 골라 보세요.',
                    target: { listen: 'miss' }, difficulty: 0.2,
                    hints: ['같은 말이 쉬지 않고 두 번 이어지는 곳을 들어요.', '고른 구절이 노래에서 몇 번 나왔는지 다시 들으며 세어 보세요.', 'I miss you, I miss you — 두 번 이어서 되풀이돼요.'] },
                    LI('Rain on my window, drip, drop, drip. My best friend moved far away. I miss you, I miss you, every rainy day.', [C('miss', 'I miss you'), C('moved', 'moved far away', '한 번만 나와요.'), C('window', 'Rain on my window', '한 번만 나와요.')], '되풀이 구절', ['miss', 'moved'], [C('drop', 'drip, drop', 'drip, drop 구절은 한 번만 나와요.')])),
                  Object.assign({ prompt: '두 노래 가운데 쓸쓸한 노래에서 그 분위기를 알려 주는 가사를 모두 골라 보세요.',
                    target: { listen: ['far', 'miss'] }, difficulty: 0.3,
                    hints: ['쓸쓸한 노래가 어느 쪽인지 먼저 정하고, 그 노래에서 누군가 떠나거나 보고 싶다는 말을 찾아요.', '고른 가사가 쓸쓸한 노래에 나왔는지, 신나는 노래의 가사가 섞이지 않았는지 다시 들어 보세요.', 'Rainy Window의 moved far away(멀리 이사 갔어)와 I miss you(보고 싶어)예요.'],
                    predict: { q: '비(rain)가 나오면 그 노래는 꼭 쓸쓸할까요?', options: ['꼭 쓸쓸해요', '다른 가사도 들어요'], answer: 1 },
                    conclude: '비라는 낱말보다 친구가 떠났고 보고 싶다는 가사가 쓸쓸한 분위기를 만들어요.' },
                    LI('Sunny Saturday, let\'s go out and play! Jump and run, have fun, it\'s a happy day! Rain on my window, drip, drop, drip. My best friend moved far away. I miss you, I miss you, every rainy day.', [C('far', 'moved far away (멀리 이사 갔어)'), C('miss', 'I miss you (보고 싶어)'), C('fun', 'have fun (즐겁게 놀자)', '신나는 노래의 가사예요.'), C('play', 'go out and play (나가 놀자)', '신나는 노래의 가사예요.')], '쓸쓸한 단서', ['far', 'miss', 'fun'])),
                ],
              },
              {
                id: 'a2', title: '활동 2. 새 가사 줄을 분위기에 따라 나누기', minutes: 14, tool: 'wordcards',
                teacher: '"새 가사 줄 카드예요. 이 줄이 신나는 노래에 어울리는지, 쓸쓸한 노래에 어울리는지 가사 낱말로 정해 나눠요." 줄마다 분위기를 정한 낱말에 손가락을 대고 말하게 한다. 도전 단계에는 어느 분위기도 아닌 줄(버스가 아홉 시에 와요)이 섞여 있으니 카드 칸에 남겨 두라고 한다. 다 나눈 뒤 짝과 신나는 줄은 빠르고 밝게, 쓸쓸한 줄은 느리고 작게 읽어 보게 한다.',
                task: '가사 줄 카드를 읽고 신나는 노래 칸과 쓸쓸한 노래 칸으로 나눠요. 분위기를 정한 낱말을 짚어요.',
                levels: LV({ mode: 'sort', slots: ['신나는 노래', '쓸쓸한 노래'] }),
                items: [
                  Object.assign({ prompt: '가사 줄을 분위기에 따라 나눠 보세요.',
                    target: { sort: { '신나는 노래': ['l1', 'l3'], '쓸쓸한 노래': ['l2', 'l4'] } }, difficulty: 0.15,
                    hints: ['줄마다 기분이나 하는 일을 알려 주는 낱말을 찾아 분위기를 정해요.', '놓은 줄의 낱말이 그 칸의 분위기와 맞는지 다시 읽어 보세요.', 'dance, laugh는 신나는 줄, alone, cry는 쓸쓸한 줄이에요.'] },
                    CD([C('l1', 'Let\'s dance all night!'), C('l2', 'I\'m all alone tonight.'), C('l3', 'We laugh and sing together.'), C('l4', 'I cry when I see your photo.')], null, [C('l5', 'The bus comes at nine.', '기분을 알려 주는 낱말이 없어요. 어느 칸에도 넣지 않아요.')])),
                  { prompt: '가사 줄을 분위기에 따라 나눠 보세요.',
                    toolOptions: { cards: [C('l1', 'Balloons and cake at the party!'), C('l2', 'My room is quiet and empty.'), C('l3', 'I waved goodbye at the station.'), C('l4', 'Jump up high and shout hooray!'), C('l5', 'The stars are so far from me.')] },
                    target: { sort: { '신나는 노래': ['l1', 'l4'], '쓸쓸한 노래': ['l2', 'l3', 'l5'] } }, difficulty: 0.25,
                    hints: ['기분 낱말이 바로 보이지 않으면, 그 줄의 일이 즐거운 일인지 슬픈 일인지 떠올려요.', '놓은 줄 가운데 empty(텅 빈), goodbye 같은 낱말이 든 줄을 신나는 칸에 넣지 않았는지 보세요.', 'party, jump는 신나는 줄, empty, goodbye, far는 쓸쓸한 줄이에요.'],
                    levels: {
                      easy: EZSORT('가사 줄 세 개를 분위기에 따라 나눠 보세요.', [C('l1', 'Balloons and cake at the party!'), C('l2', 'My room is quiet and empty.'), C('l3', 'I waved goodbye at the station.'), C('l4', 'Jump up high and shout hooray!'), C('l5', 'The stars are so far from me.')], { sort: { '신나는 노래': ['l1', 'l4'], '쓸쓸한 노래': ['l2', 'l3', 'l5'] } }, ['l1', 'l3', 'l4']),
                      challenge: { toolOptions: { cards: [C('l1', 'Balloons and cake at the party!'), C('l2', 'My room is quiet and empty.'), C('l3', 'I waved goodbye at the station.'), C('l4', 'Jump up high and shout hooray!'), C('l5', 'The stars are so far from me.'), C('l6', 'Turn left at the bank.', '분위기를 알려 주는 말이 없어요. 어느 칸에도 넣지 않아요.')] } },
                    } },
                  Object.assign({ prompt: '같은 낱말이 다른 분위기에 쓰였어요. 가사 줄을 분위기에 따라 나눠 보세요.',
                    target: { sort: { '신나는 노래': ['r1', 'r3'], '쓸쓸한 노래': ['r2', 'r4'] } }, difficulty: 0.35,
                    hints: ['rain, sun 같은 날씨 낱말만 보지 말고, 그 줄에서 사람이 무엇을 하고 어떤 마음인지 봐요.', '놓은 줄 가운데 날씨 낱말 때문에 칸을 정한 것이 있는지, 사람의 마음 낱말을 다시 보세요.', 'splash and play(첨벙 놀기), smile은 신나는 줄, alone, nobody는 쓸쓸한 줄이에요.'],
                    predict: { q: '"rain"이 들어간 줄은 모두 쓸쓸한 노래 칸에 갈까요?', options: ['모두 쓸쓸해요', '줄마다 달라요'], answer: 1 },
                    conclude: '같은 낱말(rain, sun)도 그 줄의 일과 마음에 따라 신나기도 하고 쓸쓸하기도 해요.' },
                    CD([C('r1', 'We splash and play in the rain!'), C('r2', 'I walk alone in the rain.'), C('r3', 'The sun comes out, and we smile.'), C('r4', 'The sun is out, but nobody calls me.')])),
                ],
              },
            ],
          },
          {
            id: 'wrapup', title: '정리', minutes: 7,
            teacher: '"도입에서 제목으로 짐작한 분위기와 들은 뒤의 분위기가 같았나요?" 칠판의 짐작과 견준다. "분위기를 알려 준 단서는 무엇이었나요?" 기분·일을 알려 주는 가사 낱말이라는 말을 끌어낸다. 반 전체를 두 편으로 나누어 한 편은 Sunny Saturday를 빠르고 밝게, 다른 편은 Rainy Window를 느리고 작게 한 번씩 부르고 출구 질문을 푼다.',
            exitTicket: [
              { type: 'tool', tool: 'wordcards', options: { mode: 'sort', shuffle: false, slots: ['신나는 노래', '쓸쓸한 노래'], cards: [C('x1', 'Let\'s ride our bikes and sing!'), C('x2', 'My old dog is gone now.'), C('x3', 'Clap your hands and stamp your feet!')] }, prompt: '새 가사 줄을 분위기에 따라 나눠 보세요.', target: { sort: { '신나는 노래': ['x1', 'x3'], '쓸쓸한 노래': ['x2'] } }, difficulty: 0.2 },
              { type: 'choice', prompt: '"I miss you" 가 되풀이되는 노래의 분위기로 알맞은 것은?', options: ['신나는', '쓸쓸한', '무서운'], answer: 1, difficulty: 0.15, explain: '보고 싶다는 말이 되풀이되어 쓸쓸한 느낌이 커져요.' },
              { type: 'mood', prompt: '오늘 두 노래 견주기는 어땠나요?' },
            ],
          },
        ],
        worksheet: {
          title: '두 노래 견주기',
          items: [
            { type: 'table', prompt: '두 노래를 견주어 쓰세요.', columns: ['', 'Sunny Saturday', 'Rainy Window'], cells: [['되풀이 구절', '', ''], ['분위기', '', ''], ['분위기 단서 낱말', '', '']], answer: 'Sunny Saturday / I miss you · 신나는 / 쓸쓸한 · play, fun, happy / far away, miss' },
            { type: 'choice', prompt: '"We splash and play in the rain!" 은 어떤 분위기인가요?', options: ['신나는', '쓸쓸한'], answer: '신나는' },
            { type: 'blank', prompt: 'Rainy Window feels ___ because of the words "___".' },
            { type: 'short', prompt: '두 노래 가운데 하나를 골라, 그 분위기에 맞게 부르려면 어떤 빠르기와 목소리로 부를지 쓰세요.' },
          ],
          easy: {
            note: '신나는 말: play, fun, dance, laugh / 쓸쓸한 말: miss, alone, far away, cry',
            items: [
              { type: 'table', prompt: '두 노래의 분위기를 쓰세요.', columns: ['노래', '분위기'], cells: [['Sunny Saturday', ''], ['Rainy Window', '']], answer: '신나는 / 쓸쓸한' },
              { type: 'choice', prompt: '"I\'m all alone." 은 어떤 분위기인가요?', options: ['신나는', '쓸쓸한'], answer: '쓸쓸한' },
              { type: 'short', prompt: '내가 더 좋아하는 노래 제목을 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '고르거나 나눌 카드가 줄고, 맞게 놓으면 초록 테두리가 생기며 틀리면 까닭을 말하고 되돌아와요.',
          base: '두 노래를 듣고 구절과 단서를 찾고, 새 가사 줄을 나눈 뒤 확인을 눌러요.',
          challenge: '어느 분위기도 아닌 줄(The bus comes at nine.)과 한 번만 나오는 구절(drip, drop) 함정 카드가 더해져요.',
        },
        teacherNotes: '두 노래(Sunny Saturday, Rainy Window)의 가사는 이 차시를 위해 지은 것이다. 가락이 없으니 교사가 Sunny Saturday는 빠르고 밝은 가락으로, Rainy Window는 느리고 작은 가락으로 불러 주거나 같은 가사를 그렇게 읽어 준다. 가사: Sunny Saturday, let\'s go out and play! / Jump and run, have fun, it\'s a happy day! / Sunny Saturday, hip, hip, hooray! — Rain on my window, drip, drop, drip. / My best friend moved far away. / I miss you, I miss you, every rainy day. 자주 보이는 어려움: ① 제목·날씨 낱말만으로 분위기를 정한다 → 사람의 일과 마음 낱말을 찾게 한다. ② 분위기가 없는 줄도 어느 칸엔가 넣는다 → 기분·일을 알려 주는 낱말이 있는지 먼저 묻는다. ③ 노래 분위기와 부르는 방법을 따로 생각한다 → 분위기에 맞게 빠르기와 크기를 바꿔 불러 보게 한다.',
      }),

      // ───────────────────────── 27차시 (extend) ─────────────────────────
      lesson(27, S09, {
        title: '노래 분위기와 운을 지키며 가사 한 줄 바꿔 부르기',
        objective: '노래의 분위기를 지키는 낱말을 골라 가사를 바꾸고, 끝소리가 같은 낱말(운)을 맞추어 새 가사 한 줄을 완성해 부를 수 있다.',
        illustration: {
          prompt: PROMPT('children at desks writing new song lyrics on colorful paper strips, with rhyming word pairs like play and day floating as music notes above them'),
          scene: SCENE('play · day / bright · tonight', '분위기와 운을 지켜요', [
            { motif: 'star', x: 408, y: 58, s: 0.6 }, { motif: 'sun', x: 110, y: 120, s: 0.5 }, { motif: 'flower', x: 400, y: 226, color: 'mint' },
          ]),
        },
        stages: [
          {
            id: 'intro', title: '도입', minutes: 6,
            teacher: '"Sunny Saturday의 가사 \'let\'s go out and play\'를 \'let\'s go out and cry\'로 바꾸면 노래가 어떻게 될까요?" 웃음이 나오면 "분위기가 깨졌지요. 가사를 바꿀 때는 분위기를 지켜야 해요."라고 말한다. 이어 "play와 day처럼 끝소리가 같은 낱말을 운(rhyme)이라고 해요. 운이 맞으면 부르기가 쉬워요."라고 칠판에 play — day, bright — night를 적는다. "오늘은 분위기와 운 두 가지를 지키며 가사 한 줄을 바꿔요."',
            student: '노래 가사를 바꿀 때 무엇을 지켜야 노래다움이 남을까요? 끝소리가 같은 낱말을 찾아봐요.',
            demo: { tool: 'wordcards', options: Object.assign(PICK('운이 맞는 낱말'), { cards: [C('day', 'day'), C('night', 'night')] }), sequence: [{ at: {} }, { at: { day: 0 } }] },
          },
          {
            id: 'main', title: '전개', minutes: 27,
            activities: [
              {
                id: 'a1', title: '활동 1. 분위기를 지키는 낱말 고르기', minutes: 11, tool: 'wordcards',
                teacher: '"가사 빈칸에 들어갈 수 있는 낱말 가운데 노래의 분위기를 지키는 것만 골라요. 맞는 것이 여러 개일 수 있어요." 노래 분위기를 먼저 말하게 한 뒤 고르게 한다(신나는 노래, 자장가, 쓸쓸한 노래). 뜻을 모르는 낱말은 카드의 한국어 뜻을 보게 한다. 분위기를 깨는 낱말을 고른 학생에게 "그 낱말을 넣고 노래를 불러 보세요. 같은 노래 같나요?"라고 묻는다.',
                task: '노래의 분위기를 먼저 정해요. 가사 빈칸에 넣었을 때 분위기를 지키는 낱말 카드만 모두 골라요.',
                levels: LV(PICK('분위기를 지키는 낱말')),
                items: [
                  Object.assign({ prompt: '신나는 노래 Sunny Saturday예요. "Let\'s go out and ___!" 분위기를 지키는 낱말을 모두 골라 보세요.',
                    target: { pick: ['dance', 'sing'] }, difficulty: 0.15,
                    hints: ['신나는 노래예요. 밖에 나가 즐겁게 하는 일이 빈칸에 와야 해요.', '고른 낱말을 빈칸에 넣고 불러 보세요. 즐거운 노래 그대로인가요? 빠진 낱말은 없나요?', 'dance(춤추다)와 sing(노래하다)이 신나는 분위기를 지켜요.'] },
                    CD([C('dance', 'dance (춤추다)'), C('sing', 'sing (노래하다)'), C('cry', 'cry (울다)', '울다는 신나는 분위기를 깨요.'), C('worry', 'worry (걱정하다)', '걱정하다는 신나는 분위기를 깨요.')], ['dance', 'sing', 'cry'])),
                  Object.assign({ prompt: '자장가예요. "Hush, little baby, sleep so ___." 분위기를 지키는 낱말을 모두 골라 보세요.',
                    target: { pick: ['softly', 'gently'] }, difficulty: 0.2,
                    hints: ['자장가는 아기를 재우는 노래예요. 잠자는 모습을 "어떻게"로 꾸미는 조용한 낱말을 골라요.', '고른 낱말이 아기를 깨우는 느낌이 아닌지, 조용한 낱말을 빠뜨리지 않았는지 보세요.', 'softly(살며시), gently(부드럽게)가 자장가 분위기를 지켜요.'] },
                    CD([C('softly', 'softly (살며시)'), C('gently', 'gently (부드럽게)'), C('loudly', 'loudly (시끄럽게)', '시끄럽게는 아기를 깨워요.'), C('quickly', 'quickly (빨리빨리)', '빨리빨리는 자장가의 느린 분위기를 깨요.')], ['softly', 'gently', 'loudly'], [C('wildly', 'wildly (사납게)', '사납게는 자장가 분위기를 깨요.')])),
                  Object.assign({ prompt: '쓸쓸한 노래 Rainy Window예요. "I miss you every ___ day." 분위기를 지키는 낱말을 모두 골라 보세요.',
                    target: { pick: ['rainy', 'gray'] }, difficulty: 0.3,
                    hints: ['보고 싶은 마음을 담은 쓸쓸한 노래예요. 그 마음과 어울리는 날의 모습을 골라요.', '고른 낱말이 들뜨고 밝은 날을 말하지 않는지, 어두운 날 낱말을 빠뜨리지 않았는지 보세요.', 'rainy(비 오는), gray(잿빛)가 쓸쓸한 분위기를 지켜요.'],
                    predict: { q: '"I miss you every party day."로 바꾸면 분위기가 그대로일까요?', options: ['그대로예요', '달라져요'], answer: 1 },
                    conclude: '낱말 하나를 바꿔도 노래 분위기가 달라져요. 분위기와 어울리는 낱말을 골라야 노래다움이 남아요.' },
                    CD([C('rainy', 'rainy (비 오는)'), C('gray', 'gray (잿빛)'), C('party', 'party (잔치)', '잔치 날은 들뜬 분위기라 쓸쓸한 노래와 맞지 않아요.'), C('happy', 'happy (행복한)', '행복한 날은 쓸쓸한 분위기를 깨요.')], ['rainy', 'gray', 'happy'])),
                ],
              },
              {
                id: 'a2', title: '활동 2. 분위기와 운을 맞춰 새 가사 줄 완성하기', minutes: 16, tool: 'story',
                teacher: '"이번에는 빈칸이 두 개예요. 하나는 분위기, 하나는 운을 지켜야 해요." 앞 줄의 끝 낱말을 소리 내어 읽고 끝소리가 같은 카드를 찾게 한다(play — day, bright — tonight, sky — cry). 운은 맞지만 분위기를 깨는 낱말, 분위기는 맞지만 운이 안 맞는 낱말이 섞여 있다고 미리 알려 준다. 다 만든 줄은 마지막 문항에서 짝과 가락에 맞춰 불러 본다.',
                task: '노래 줄의 빈칸에 카드를 넣어요. 분위기를 지키고, 앞 줄 끝 낱말과 끝소리가 같도록 맞춰요.',
                levels: LV({ mode: 'fill' }),
                items: [
                  Object.assign({ prompt: '신나는 노래의 새 줄이에요. "Sunny Sunday, let\'s go out and play! Jump and ___, it\'s a happy ___!" 완성해 보세요.',
                    target: { fill: { b1: 'run', b2: 'day' } }, difficulty: 0.2,
                    hints: ['첫 빈칸은 신나게 하는 일, 둘째 빈칸은 앞 줄 끝 낱말 play와 끝소리가 같은 낱말이에요.', '둘째 빈칸 낱말을 play와 이어 소리 내 보세요. 끝소리가 같나요? 첫 빈칸은 신나는 일인가요?', 'Jump and run, it\'s a happy day! — play와 day가 운이 맞아요.'] },
                    CD(['run', 'cry', 'day', 'night'], ['run', 'cry', 'day'], ['week'], null,
                      { slots: [{ id: 'b1', who: '하린', motif: 'sun', label: 'Jump and ___,' }, { id: 'b2', who: '하린', motif: 'sun', label: 'it\'s a happy ___!' }] })),
                  Object.assign({ prompt: '자장가의 새 줄이에요. "Sleep, little bear, the stars are ___. Close your eyes and rest ___." 완성해 보세요.',
                    target: { fill: { b1: 'bright', b2: 'tonight' } }, difficulty: 0.3,
                    hints: ['두 빈칸의 낱말이 서로 끝소리가 같아야 해요. 그리고 조용한 자장가 분위기를 지켜야 해요.', '넣은 두 낱말의 끝소리가 같은지 소리 내어 보세요. 시끄러운 낱말이 섞이지 않았나요?', 'the stars are bright, rest tonight — bright와 tonight가 운이 맞아요.'] },
                    CD(['bright', 'loud', 'tonight', 'today'], ['bright', 'loud', 'tonight'], ['all day'], null,
                      { slots: [{ id: 'b1', who: '엄마 곰', motif: 'moon', label: 'the stars are ___.' }, { id: 'b2', who: '엄마 곰', motif: 'moon', label: 'Close your eyes and rest ___.' }] })),
                  Object.assign({ prompt: '쓸쓸한 노래의 새 줄이에요. "My kite flew away, up in the ___. I miss my kite, and I want to ___." 완성해 보세요.',
                    target: { fill: { b1: 'sky', b2: 'cry' } }, difficulty: 0.35,
                    hints: ['연이 날아간 곳을 첫 빈칸에, 쓸쓸한 마음을 둘째 빈칸에 넣어요. 두 낱말의 끝소리를 맞춰요.', '넣은 두 낱말을 이어 소리 내 보세요. 끝소리가 같고 쓸쓸한 분위기인가요?', 'up in the sky, I want to cry — sky와 cry가 운이 맞아요.'],
                    predict: { q: '"I want to dance"로 쓰면 운과 분위기가 모두 맞을까요?', options: ['모두 맞아요', '둘 다 안 맞아요'], answer: 1 },
                    conclude: 'sky — cry처럼 끝소리를 맞추고, 쓸쓸한 마음 낱말을 넣으면 노래 한 줄이 살아나요.' },
                    CD(['sky', 'shop', 'cry', 'dance'], ['sky', 'cry', 'dance'], ['fly'], null,
                      { slots: [{ id: 'b1', who: '준호', motif: 'cloud', label: 'up in the ___.' }, { id: 'b2', who: '준호', motif: 'cloud', label: 'I miss my kite, and I want to ___.' }] })),
                  { prompt: '짝과 만든 새 줄 가운데 하나를 골라 그 노래의 가락으로 불러요. 분위기에 맞는 빠르기와 크기로 부른 뒤 "다 했어요"를 누르세요.', free: true, talk: true },
                ],
              },
            ],
          },
          {
            id: 'wrapup', title: '정리', minutes: 7,
            teacher: '"가사를 바꿀 때 지킨 두 가지는 무엇이었나요?" 분위기와 운을 칠판에 동그라미 친다. 희망하는 짝 세 쌍만 새 줄을 불러 듣는다(한 쌍에 30초). "운이 맞을 때 부르기가 어땠나요?"라고 물은 뒤 출구 질문을 푼다.',
            exitTicket: [
              { type: 'tool', tool: 'wordcards', options: Object.assign(PICK('운이 맞는 낱말'), { cards: [C('hat', 'hat'), C('dog', 'dog'), C('cup', 'cup')] }), prompt: '"I saw a cat." 다음 줄 끝에 올 낱말이에요. cat과 끝소리가 같은 낱말을 골라 보세요.', target: { pick: ['hat'] }, difficulty: 0.15 },
              { type: 'choice', prompt: '자장가 "Close your eyes and sleep so ___." 에 분위기를 지키는 낱말은?', options: ['tight', 'loud', 'fast'], answer: 0, difficulty: 0.25, explain: 'sleep tight(푹 자)는 조용한 자장가에 어울려요. loud, fast는 분위기를 깨요.' },
              { type: 'mood', prompt: '오늘 가사 바꿔 부르기는 어땠나요?' },
            ],
          },
        ],
        worksheet: {
          title: '분위기와 운을 지켜 가사 바꾸기',
          items: [
            { type: 'table', prompt: '끝소리가 같은 낱말(운)을 짝 지어 쓰세요.', columns: ['낱말', '운이 맞는 낱말'], cells: [['play', ''], ['night', ''], ['sky', ''], ['cat', '']], answer: 'day·way / bright·light / cry·fly / hat·bat (예)' },
            { type: 'choice', prompt: '신나는 노래 "Let\'s go out and ___!" 에 어울리지 않는 낱말은?', options: ['dance', 'sing', 'cry'], answer: 'cry' },
            { type: 'blank', prompt: 'Sunny ___, let\'s go out and play! ___ and run, it\'s a happy day! (내 낱말로 바꿔 쓰세요)' },
            { type: 'short', prompt: '내가 바꾼 가사 한 줄을 쓰고, 분위기를 지키려고 고른 낱말을 쓰세요.' },
          ],
          easy: {
            note: '운 = 끝소리가 같은 낱말: play — day, bright — night, sky — cry',
            items: [
              { type: 'table', prompt: '운이 맞는 낱말을 쓰세요.', columns: ['낱말', '운이 맞는 낱말'], cells: [['play', ''], ['cat', '']], answer: 'day / hat (예)' },
              { type: 'choice', prompt: '자장가에 어울리는 낱말은?', options: ['softly', 'loudly'], answer: 'softly' },
              { type: 'short', prompt: '신나는 노래에 넣고 싶은 영어 낱말 하나를 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '고를 카드가 줄고, 맞게 넣으면 초록 테두리가 생기며 틀리면 까닭을 말하고 되돌아와요.',
          base: '분위기를 지키는 낱말을 고르고, 운을 맞춰 새 줄을 완성한 뒤 확인을 눌러요.',
          challenge: 'week, all day, fly처럼 운이나 분위기 가운데 하나만 맞는 함정 카드가 더해져 두 가지를 모두 따져야 해요.',
        },
        teacherNotes: '바꿔 쓰는 가사는 26차시에 지은 두 노래(Sunny Saturday, Rainy Window)와 25차시 자장가의 틀을 쓴다. 새 줄(Sunny Sunday…, Sleep, little bear…, My kite flew away…)은 이 차시를 위해 지은 것이다. 운(rhyme)은 끝소리가 같은 것이고 철자가 같을 필요는 없다(bright — tonight, sky — cry). 도전 단계의 fly는 sky와 운은 맞지만 둘째 빈칸(쓸쓸한 마음)에 맞지 않고, all day는 자장가 분위기는 지켜도 bright와 운이 맞지 않는다. 자주 보이는 어려움: ① 철자 끝이 같아야 운이라고 여긴다 → 소리 내어 끝소리를 견주게 한다. ② 운만 맞추고 분위기를 깬다 → 넣고 불러 보게 한다. ③ 발표를 모두 시키려 한다 → 희망하는 세 쌍만 듣고 나머지는 짝 안에서 부른다.',
      }),

      // ───────────────────────── 28차시 (core) ─────────────────────────
      lesson(28, S09, {
        title: '이야기 처음·가운데·끝에서 인물의 기분 문장 찾기',
        objective: '짧은 영어 이야기의 처음·가운데·끝에서 인물의 기분이 드러난 문장을 찾아 표시하고, 그 문장의 단서(얼굴·몸·말)로 기분을 고를 수 있다.',
        illustration: {
          prompt: PROMPT('a girl in a windy park chasing a red kite that is flying away, with a friendly boy pointing to a tree, shown as three small story panels'),
          scene: SCENE('Mina\'s Red Kite', '기분이 드러난 문장을 찾아요', [
            { motif: 'tree', x: 380, y: 210 }, { motif: 'cloud', x: 300, y: 64 }, { motif: 'sun', x: 412, y: 56, s: 0.6 }, { motif: 'bird', x: 200, y: 90 },
          ]),
        },
        stages: [
          {
            id: 'intro', title: '도입', minutes: 7,
            teacher: '"이야기 속 인물의 기분은 이야기 어디에 나올까요? 끝에만 나올까요?" 대답을 칠판에 적어 둔다. "기분은 happy, sad 같은 낱말로만 나오지 않아요. smiled(웃었다), tears(눈물)처럼 얼굴이나 몸으로도 보여 줘요."라고 말한다. "She smiled from ear to ear."를 읽고 몸짓으로 보여 준 뒤 "어떤 기분일까요?" 하고 묻는다. 오늘은 미나의 연 이야기에서 처음·가운데·끝마다 기분 문장을 찾자고 한다.',
            student: '이야기 속 인물의 기분은 이야기 어디에 드러날까요? 기분이 낱말 말고 무엇으로 드러나는지 생각해 봐요.',
            demo: { tool: 'wordcards', options: Object.assign(PICK('기분 문장'), { cards: [C('d1', 'She smiled from ear to ear.'), C('d2', 'She went to the park.')] }), sequence: [{ at: {} }, { at: { d1: 0 } }] },
          },
          {
            id: 'main', title: '전개', minutes: 26,
            activities: [
              {
                id: 'a1', title: '활동 1. 기분이 드러난 문장 표시하기', minutes: 13, tool: 'wordcards',
                teacher: '"이야기를 문장 카드로 나눴어요. 일어난 일만 말하는 문장과 인물의 기분이 드러난 문장을 가려요." 기분이 드러난 문장의 단서(smiled, shouted "Wow!", tears, hugged)를 찾으면 칠판에 모은다. 일어난 일(바람이 셌다, 연이 날아갔다)을 기분 문장으로 고르는 학생에게 "그 문장에 미나의 얼굴이나 몸, 말이 나오나요?"라고 묻는다. 3번은 처음부터 끝까지에서 찾게 해 기분이 끝에만 나온다는 생각을 바로잡는다.',
                task: '이야기 문장 카드를 읽고, 일어난 일이 아니라 인물의 기분이 드러난 문장만 골라요.',
                levels: LV(PICK('기분 문장')),
                items: [
                  Object.assign({ prompt: '이야기의 처음이에요. 미나의 기분이 드러난 문장을 모두 골라 보세요.',
                    target: { pick: ['k2', 'k4'] }, difficulty: 0.15,
                    hints: ['미나의 얼굴(웃음)이나 말(외침)이 나오는 문장을 찾아요.', '고른 문장에 미나의 얼굴이나 말이 있는지, 일어난 일만 있는 문장을 고르지 않았는지 보세요.', 'She smiled from ear to ear.와 Mina shouted, "Wow!"가 든 문장이에요.'] },
                    CD([C('k1', 'Grandpa gave Mina a new red kite.', '할아버지가 연을 준 일이에요. 미나의 얼굴·몸·말은 나오지 않아요.'), C('k2', 'She smiled from ear to ear.'), C('k3', 'At the park, the wind was strong.', '바람에 대한 문장이에요. 미나의 기분은 나오지 않아요.'), C('k4', 'The kite flew high, and Mina shouted, "Wow!"')], ['k2', 'k3', 'k4'])),
                  Object.assign({ prompt: '이야기의 가운데예요. 미나의 기분이 드러난 문장을 모두 골라 보세요.',
                    target: { pick: ['m2', 'm4'] }, difficulty: 0.25,
                    hints: ['눈, 목소리처럼 몸이 보여 주는 기분을 찾아요.', '고른 문장 가운데 연이나 줄에 일어난 일만 말하는 문장이 섞였는지 보세요.', 'Mina\'s eyes filled with tears.와 작은 목소리(in a very small voice) 문장이에요.'] },
                    CD([C('m1', 'Suddenly, the string broke.', '줄이 끊어진 일이에요. 미나의 얼굴·몸·말은 나오지 않아요.'), C('m2', 'Mina\'s eyes filled with tears.'), C('m3', 'The kite flew over the trees.', '연이 날아간 일이에요. 기분은 나오지 않아요.'), C('m4', '"My kite ...," she said in a very small voice.')], ['m1', 'm2', 'm4'], [C('m5', 'It was three o\'clock.', '때를 알려 주는 문장이에요.')])),
                  Object.assign({ prompt: '이야기 전체에서 기분이 드러난 문장을 처음·가운데·끝에서 하나씩, 모두 골라 보세요.',
                    target: { pick: ['a1', 'a3', 'a5'] }, difficulty: 0.3,
                    hints: ['기분 문장은 처음, 가운데, 끝 어디에나 있어요. 세 부분에서 하나씩 찾아요.', '고른 문장이 처음·가운데·끝에 하나씩 있는지, 일어난 일 문장이 섞였는지 보세요.', 'smiled(처음), tears(가운데), hugged ... "Thank you so much!"(끝)예요.'],
                    predict: { q: '인물의 기분은 이야기 끝에만 나올까요?', options: ['끝에만 나와요', '어디에나 나와요'], answer: 1 },
                    conclude: '기분은 이야기 처음·가운데·끝 어디에나 드러나요. 끝만 읽으면 기분이 바뀐 길을 놓쳐요.' },
                    CD([C('a1', '(처음) She smiled from ear to ear.'), C('a2', '(처음) Grandpa gave Mina a new red kite.', '할아버지가 연을 준 일이에요. 기분은 나오지 않아요.'), C('a3', '(가운데) Mina\'s eyes filled with tears.'), C('a4', '(끝) A boy helped her get the kite down.', '소년이 도와준 일이에요. 미나의 기분은 나오지 않아요.'), C('a5', '(끝) Mina hugged her kite and said, "Thank you so much!"')], ['a1', 'a3', 'a4', 'a5'])),
                ],
              },
              {
                id: 'a2', title: '활동 2. 기분 문장과 기분 이름 짝 짓기', minutes: 13, tool: 'emotion',
                teacher: '"찾은 기분 문장 옆에 그 기분 이름 카드를 놓아요. 몸과 말이 알려 주는 기분을 떠올려요." 웃음은 기쁨, 눈물은 슬픔처럼 단서를 소리 내어 말하게 한다. 2번은 새 이야기(레오의 축구 경기)다. 경기 전 떨리는 손을 신남으로 고른 학생에게 "경기 전에 손이 떨린다면 어떤 마음일까요?"라고 묻는다.',
                task: '기분 문장을 읽고 그 문장의 단서(얼굴·몸·말)에 맞는 기분 카드를 옆에 놓아요.',
                levels: LV({ mode: 'match' }),
                items: [
                  Object.assign({ prompt: '미나 이야기의 기분 문장이에요. 알맞은 기분 카드를 짝 지어 보세요.',
                    target: { match: { s1: '기쁨', s2: '슬픔', s3: '고마움' } }, difficulty: 0.15,
                    hints: ['문장의 단서(웃음, 눈물, 인사말)가 어떤 마음일 때 나오는지 떠올려요.', '놓은 기분이 그 문장의 단서와 어울리는지 하나씩 소리 내어 말해 보세요.', 'smiled = 기쁨, tears = 슬픔, "Thank you so much!" = 고마움이에요.'] },
                    CD(['기쁨', '슬픔', '고마움'], null, ['화남'], null,
                      { slots: [{ id: 's1', label: 'She smiled from ear to ear.' }, { id: 's2', label: 'Mina\'s eyes filled with tears.' }, { id: 's3', label: 'Mina said, "Thank you so much!"' }] })),
                  Object.assign({ prompt: '레오의 축구 이야기예요. 알맞은 기분 카드를 짝 지어 보세요.',
                    target: { match: { s1: '걱정', s2: '신남', s3: '속상함' } }, difficulty: 0.25,
                    hints: ['몸의 단서(떨리는 손, 펄쩍펄쩍 뛰기, 고개 숙이기)가 언제 나오는지 떠올려요.', '놓은 기분 가운데 몸의 단서와 그 일이 일어난 때에 어울리지 않는 것이 있는지 보세요.', '경기 전 떨리는 손 = 걱정, 골을 넣고 펄쩍 뜀 = 신남, 공을 놓치고 신발만 봄 = 속상함이에요.'] },
                    CD(['걱정', '신남', '속상함'], null, ['고마움'], null,
                      { slots: [{ id: 's1', label: 'Before the game, Leo\'s hands were shaking.' }, { id: 's2', label: 'Leo scored a goal and jumped up and down.' }, { id: 's3', label: 'Later, Leo missed the ball and looked down at his shoes.' }] })),
                  Object.assign({ prompt: '수아의 생일 이야기예요. 알맞은 기분 카드를 짝 지어 보세요.',
                    target: { match: { s1: '외로움', s2: '놀람', s3: '기쁨' } }, difficulty: 0.3,
                    hints: ['문장마다 수아가 처한 일과 몸·말의 단서를 함께 봐요. 기분 낱말이 바로 나오지 않아요.', '놓은 기분이 그 문장의 일(혼자 앉음, 문을 열었더니 외침, 웃음)과 맞는지 다시 보세요.', '혼자 앉고 아무도 인사하지 않음 = 외로움, 문을 열자 모두 "Surprise!" = 놀람, 친구들과 웃고 또 웃음 = 기쁨이에요.'],
                    predict: { q: '기분 낱말(happy, sad)이 없는 문장에서도 기분을 알 수 있을까요?', options: ['알 수 없어요', '단서로 알 수 있어요'], answer: 1 },
                    conclude: '기분 낱말이 없어도 인물이 처한 일과 몸·말의 단서로 기분을 알 수 있어요.' },
                    CD(['외로움', '놀람', '기쁨'], null, ['화남'], null,
                      { slots: [{ id: 's1', label: 'In the morning, Sua sat alone. Nobody said, "Happy birthday."' }, { id: 's2', label: 'She opened the classroom door. Everyone shouted, "Surprise!"' }, { id: 's3', label: 'Sua laughed and laughed with her friends.' }] })),
                ],
              },
            ],
          },
          {
            id: 'wrapup', title: '정리', minutes: 7,
            teacher: '"도입에서 기분은 끝에만 나온다고 말한 사람이 있었지요. 오늘 찾아보니 어땠나요?" 처음·가운데·끝 모두에 있었다는 말을 끌어내고 칠판의 처음 생각 옆에 고친 생각을 적는다. "기분을 알려 준 단서를 세 가지로 묶어 볼까요?" 얼굴, 몸, 말로 정리한 뒤 출구 질문을 푼다.',
            exitTicket: [
              { type: 'tool', tool: 'wordcards', options: Object.assign(PICK('기분 문장'), { cards: [C('x1', 'Tom lost his cap on the bus.'), C('x2', 'He stamped his feet and shouted, "It\'s not fair!"'), C('x3', 'The bus stopped at the zoo.')] }), prompt: '톰의 이야기예요. 톰의 기분이 드러난 문장을 골라 보세요.', target: { pick: ['x2'] }, difficulty: 0.2 },
              { type: 'choice', prompt: '"Her face turned red, and she hid behind her mom." 이 보여 주는 기분은?', options: ['부끄러움', '화남', '신남'], answer: 0, difficulty: 0.25, explain: '얼굴이 빨개지고 엄마 뒤에 숨는 것은 부끄러울 때의 모습이에요.' },
              { type: 'mood', prompt: '오늘 인물의 기분 찾기는 어땠나요?' },
            ],
          },
        ],
        worksheet: {
          title: '인물의 기분이 드러난 문장',
          items: [
            { type: 'table', prompt: '"Jin waited for the bus. It was late, so he looked at his watch again and again. When the bus came, he sighed and smiled." 기분 문장과 기분을 쓰세요.', columns: ['부분', '기분이 드러난 문장', '기분'], cells: [['가운데', '', ''], ['끝', '', '']], answer: 'he looked at his watch again and again — 초조함·걱정 / he sighed and smiled — 안심·기쁨' },
            { type: 'choice', prompt: '기분이 드러나지 않은 문장은?', options: ['Mina\'s eyes filled with tears.', 'The string broke.', 'She smiled from ear to ear.'], answer: 'The string broke.' },
            { type: 'table', prompt: '기분을 알려 주는 단서를 하나씩 쓰세요.', columns: ['얼굴', '몸', '말'], rows: 1 },
            { type: 'short', prompt: '미나 이야기에서 기분이 가장 크게 바뀐 곳은 어디인지 쓰고 그 까닭을 쓰세요.' },
          ],
          easy: {
            note: '기분 단서: 얼굴(smiled, tears) · 몸(jumped, shaking) · 말("Wow!", "Thank you!")',
            items: [
              { type: 'choice', prompt: '"She smiled." 의 기분은?', options: ['기쁨', '슬픔'], answer: '기쁨' },
              { type: 'choice', prompt: '"His eyes filled with tears." 의 기분은?', options: ['신남', '슬픔'], answer: '슬픔' },
              { type: 'choice', prompt: '"He jumped up and down." 의 기분은?', options: ['신남', '외로움'], answer: '신남' },
              { type: 'short', prompt: '미나 이야기에서 기분 문장 하나를 옮겨 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '고를 문장과 기분 카드가 줄고, 맞게 놓으면 초록 테두리가 생기며 틀리면 까닭을 말하고 되돌아와요.',
          base: '기분 문장을 고르고 기분 이름과 짝 지은 뒤 확인을 눌러요.',
          challenge: '때를 알려 주는 문장, 화남·고마움 같은 짝이 없는 기분 카드가 더해져요.',
        },
        teacherNotes: '이야기(Mina\'s Red Kite, 레오의 축구, 수아의 생일, 톰, 진)는 모두 이 차시를 위해 지은 것이다. 미나 이야기 전문: Grandpa gave Mina a new red kite. She smiled from ear to ear. At the park, the wind was strong. The kite flew high, and Mina shouted, "Wow!" Suddenly, the string broke. The kite flew over the trees. Mina\'s eyes filled with tears. "My kite ...," she said in a very small voice. A boy ran to her. "I saw it fall in that tree!" He helped her get the kite down. Mina hugged her kite and said, "Thank you so much!" 판정 기준: 인물의 얼굴·몸·말이 나오는 문장을 "기분이 드러난 문장"으로 본다(일어난 일만 말하는 문장은 아니다). 자주 보이는 어려움: ① 기분은 끝에만 나온다고 여긴다 → 처음·가운데·끝에서 하나씩 찾게 한다. ② 일어난 일(줄이 끊어졌다)을 기분 문장으로 고른다 → "인물의 얼굴·몸·말이 나오나?"로 가른다. ③ 떨리는 손을 신남으로 읽는다 → 그 일이 일어난 때(경기 전)를 함께 보게 한다. 29차시에 그 기분이 생긴 까닭을 앞뒤 문장에서 찾는다.',
      }),

      // ───────────────────────── 29차시 (practice) ─────────────────────────
      lesson(29, S09, {
        title: '인물의 기분이 생긴 까닭을 앞뒤 문장에서 찾기',
        objective: '짧은 영어 이야기를 듣거나 읽고 인물의 기분이 생긴 까닭을 기분 문장의 앞이나 뒤에서 찾아, "He was ___ because ___." 처럼 까닭을 들어 말할 수 있다.',
        illustration: {
          prompt: PROMPT('a boy looking sadly at an ice cream cone dropped on the ground while a small dog licks it, and arrows pointing to what happened before and after'),
          scene: SCENE('Why was Ben upset?', '앞뒤 문장에서 까닭을 찾아요', [
            { motif: 'sun', x: 410, y: 56, s: 0.7 }, { motif: 'tree', x: 82, y: 214 }, { motif: 'house', x: 392, y: 218, color: 'rose' },
          ]),
        },
        stages: [
          {
            id: 'intro', title: '도입', minutes: 6,
            teacher: '"지난 시간에 미나의 눈에 눈물이 고였지요. 미나는 왜 울었나요?" 줄이 끊어져 연이 날아갔다는 대답을 들은 뒤 "그 까닭은 눈물 문장의 앞에 있었어요. 까닭은 앞에 올 때도 있고 뒤에 올 때도 있어요."라고 말한다. 칠판에 "기분 문장 ← 앞 문장 / 뒤 문장 →"을 그린다. "Jisu was so happy. Her grandma came to see her."를 읽고 "까닭은 앞인가요, 뒤인가요?"라고 묻는다.',
            student: '인물이 그런 기분이 든 까닭은 이야기 어디에서 찾을 수 있을까요? 기분 문장의 앞과 뒤를 함께 봐요.',
            demo: { tool: 'wordcards', options: LISTEN('Jisu was so happy. Her grandma came to see her.', [C('grandma', '할머니가 와서'), C('rain', '비가 와서')], '기쁜 까닭'), sequence: [{ at: {} }, { at: { grandma: 0 } }] },
          },
          {
            id: 'main', title: '전개', minutes: 27,
            activities: [
              {
                id: 'a1', title: '활동 1. 이야기를 듣고 기분의 까닭 고르기', minutes: 14, tool: 'wordcards',
                teacher: '"기분 낱말(happy, upset, nervous, brave)이 들리면 손을 들고, 그 앞뒤 문장을 다시 들어 까닭을 찾아요." 이야기에 나오지 않은 까닭을 고르는 학생에게 "그 말이 이야기에 나왔나요? 내 생각을 더한 것은 아닌가요?"라고 묻는다. 3번은 기분이 두 번 바뀌는 이야기라 "어느 기분의 까닭인지"를 먼저 확인하게 한다. 소리가 없으면 교사가 대본을 읽어 준다.',
                task: '물음이 묻는 기분을 먼저 확인해요. 이야기를 듣고 그 기분 문장의 앞뒤에서 까닭 카드를 골라요.',
                levels: LV({ mode: 'listen', basket: '기분의 까닭' }),
                items: [
                  Object.assign({ prompt: '지수는 왜 아주 기뻤나요? 듣고 까닭을 골라 보세요.',
                    target: { listen: 'grandma' }, difficulty: 0.15,
                    hints: ['기분 문장(was so happy)이 맨 앞에 나와요. 그러면 까닭은 그 뒤에서 찾아요.', '고른 까닭이 이야기에 정말 나왔는지, 기분 문장 바로 뒤를 다시 들어 보세요.', 'Her grandma came from Busan to see her. — 할머니가 보러 와서예요.'] },
                    LI('Jisu was so happy. Her grandma came from Busan to see her. They baked cookies together.', [C('grandma', '할머니가 부산에서 보러 와서'), C('cookie', '쿠키를 많이 팔아서', '쿠키를 함께 구웠다고 했지, 팔았다는 말은 없어요.'), C('trip', '부산으로 여행을 가서', '부산에서 온 사람은 할머니예요.')], '기쁜 까닭', ['grandma', 'trip'])),
                  Object.assign({ prompt: '벤은 왜 아주 속상했나요? 듣고 까닭을 골라 보세요.',
                    target: { listen: 'drop' }, difficulty: 0.2,
                    hints: ['이번에는 기분 문장(was very upset)이 맨 끝에 나와요. 까닭은 그 앞에서 찾아요.', '고른 까닭이 기분 문장 앞에 나온 일인지, 이야기에 없는 말인지 다시 들어 보세요.', '아이스크림을 떨어뜨렸고(dropped), 개가 먹었어요(a dog ate it).'] },
                    LI('Ben bought a big ice cream. On his way home, he dropped it on the ground. Then a dog ate it. Ben was very upset.', [C('drop', '아이스크림을 떨어뜨렸고 개가 먹어서'), C('dog', '개가 무서워서', '개가 무섭다는 말은 없어요. 개는 아이스크림을 먹었을 뿐이에요.'), C('buy', '아이스크림을 못 사서', '벤은 큰 아이스크림을 샀어요.')], '속상한 까닭', ['drop', 'dog'], [C('home', '집이 멀어서', '집이 멀다는 말은 없어요.')])),
                  Object.assign({ prompt: '유나는 처음에 떨렸지만 나중에 용기가 났어요. 용기가 난 까닭은 무엇인가요? 듣고 골라 보세요.',
                    target: { listen: 'cheer' }, difficulty: 0.3,
                    hints: ['기분이 두 번 나와요. 물음이 묻는 것은 나중 기분(felt brave)이에요. 그 바로 앞을 들어요.', '고른 까닭이 처음 기분(nervous)의 까닭인지, 나중 기분(brave)의 까닭인지 다시 들어 보세요.', 'But her friends cheered for her, and she felt brave. — 친구들이 응원해서예요.'],
                    predict: { q: '기분이 두 번 바뀌면 까닭도 하나일까요?', options: ['까닭은 하나예요', '기분마다 까닭이 있어요'], answer: 1 },
                    conclude: '기분이 바뀌면 바뀐 기분마다 까닭이 있어요. 물음이 묻는 기분의 앞뒤를 찾아요.' },
                    LI('Yuna was nervous. She had to speak in front of the whole school. But her friends cheered for her, and she felt brave.', [C('speak', '전교생 앞에서 말해야 해서', '이것은 처음에 떨린(nervous) 까닭이에요.'), C('cheer', '친구들이 응원해 줘서'), C('prize', '상을 받아서', '상 이야기는 없었어요.')], '용기가 난 까닭', ['speak', 'cheer'])),
                ],
              },
              {
                id: 'a2', title: '활동 2. 기분과 까닭 짝 지어 문장 만들기', minutes: 13, tool: 'emotion',
                teacher: '"이번에는 이야기를 읽어요. 왼쪽의 기분 문장에, 이야기에서 찾은 까닭 카드를 짝 지어요." 짝 지은 뒤 짝에게 "He was ___ because ___." 로 하나를 말하게 한다. 까닭이 될 만한 일이 여러 개인 이야기는 기분 문장과 가장 가까이에서 이어지는 일을 찾게 한다. 이야기 글은 칠판(또는 화면)에 띄워 두고 함께 읽는다.',
                task: '이야기를 읽고, 왼쪽 기분 문장마다 그 기분이 생긴 까닭 카드를 짝 지어요.',
                levels: LV({ mode: 'match' }),
                items: [
                  Object.assign({ prompt: '"Dami lost her library card. She looked everywhere. She felt worried. Then her teacher found it under a desk. Dami felt relieved." 짝 지어 보세요.',
                    target: { match: { s1: 'lost', s2: 'found' } }, difficulty: 0.2,
                    hints: ['기분 문장 바로 앞에 나온 일을 찾아요. 그 일이 기분을 만들었어요.', '놓은 까닭이 그 기분 문장보다 앞에 일어난 일인지 다시 읽어 보세요.', 'worried ← 카드를 잃어버림, relieved ← 선생님이 찾아 줌이에요.'] },
                    CD([C('lost', 'She lost her library card.'), C('found', 'Her teacher found the card.')], null, [C('desk', 'The desk was very big.', '책상이 크다는 말은 이야기에 없어요.')], null,
                      { slots: [{ id: 's1', label: 'Dami felt worried.' }, { id: 's2', label: 'Dami felt relieved (안심했어요).' }] })),
                  Object.assign({ prompt: '"Leo practiced every day. At the concert, he played without a mistake. He felt proud. But his brother cried during the song, so Leo felt embarrassed." 짝 지어요.',
                    target: { match: { s1: 'played', s2: 'cried' } }, difficulty: 0.25,
                    hints: ['so(그래서)와 But(그런데)은 까닭과 기분을 이어 주는 말이에요. 그 앞뒤를 봐요.', '놓은 까닭이 그 기분과 이어지는지, 다른 기분의 까닭과 바뀌지 않았는지 보세요.', 'proud ← 실수 없이 연주함, embarrassed ← 동생이 노래 중에 울어서예요.'] },
                    CD([C('played', 'He played without a mistake.'), C('cried', 'His little brother cried during the song.'), C('practice', 'He practiced every day.', '날마다 연습한 것은 실수 없이 친 까닭이에요. 기분 문장 바로 앞의 일이 아니에요.')], ['played', 'cried'], null, null,
                      { slots: [{ id: 's1', label: 'Leo felt proud.' }, { id: 's2', label: 'Leo felt embarrassed (창피했어요).' }] })),
                  Object.assign({ prompt: '"Mina and Jun were best friends. Jun moved to another city, and Mina felt lonely. One day, a letter came from Jun. Mina felt happy again." 짝 지어 보세요.',
                    target: { match: { s1: 'moved', s2: 'letter' } }, difficulty: 0.3,
                    hints: ['and, One day처럼 일과 기분을 잇는 말을 찾고, 기분 문장 바로 앞의 일을 봐요.', '놓은 까닭 가운데 두 기분 모두에 앞서 있는 일(친한 친구였음)을 고르지 않았는지 보세요.', 'lonely ← 준이 이사 감, happy again ← 준에게서 편지가 옴이에요.'],
                    predict: { q: '"친한 친구였다"는 문장이 외로운 까닭일까요?', options: ['네, 그래요', '바로 앞 일이 까닭'], answer: 1 },
                    conclude: '이야기 처음의 배경보다 기분 문장 바로 앞에 일어난 일이 그 기분의 까닭이에요.' },
                    CD([C('moved', 'Jun moved to another city.'), C('letter', 'A letter came from Jun.'), C('friends', 'They were best friends.', '친한 친구였다는 것은 이야기의 배경이에요. 외로움을 만든 일은 준이 이사 간 것이에요.')], null, [C('city', 'The city was far away.', '도시가 멀다는 말은 이야기에 없어요.')], null,
                      { slots: [{ id: 's1', label: 'Mina felt lonely.' }, { id: 's2', label: 'Mina felt happy again.' }] })),
                ],
              },
            ],
          },
          {
            id: 'wrapup', title: '정리', minutes: 7,
            teacher: '"오늘 까닭은 기분 문장의 어디에 있었나요?" 앞에도, 뒤에도 있었다는 말을 끌어낸다. "이야기에 없는 까닭을 고르면 어떻게 될까요?" 내 생각을 더하면 이야기와 달라진다는 것을 짚는다. 짝에게 오늘 이야기 하나로 "___ was ___ because ___." 를 말하게 한 뒤 출구 질문을 푼다.',
            exitTicket: [
              { type: 'tool', tool: 'wordcards', options: LISTEN('Tom was angry. His little sister broke his new robot.', [C('robot', '동생이 새 로봇을 망가뜨려서'), C('sister', '동생이 아파서'), C('buy', '로봇을 사서')], '화난 까닭'), prompt: '톰은 왜 화가 났나요? 듣고 까닭을 골라 보세요.', target: { listen: 'robot' }, difficulty: 0.2 },
              { type: 'choice', prompt: '"It snowed a lot, so school was closed. Sora was excited." 소라가 신난 까닭은?', options: ['눈이 와서 학교가 쉬었어요', '학교에 일찍 갔어요', '눈이 그쳤어요'], answer: 0, difficulty: 0.2, explain: '기분 문장 앞의 so로 이어진 일(학교가 쉼)이 까닭이에요.' },
              { type: 'mood', prompt: '오늘 기분의 까닭 찾기는 어땠나요?' },
            ],
          },
        ],
        worksheet: {
          title: '기분과 그 까닭',
          items: [
            { type: 'table', prompt: '"Hana\'s cat was sick, so she felt sad. The next day, the cat ate all its food. Hana felt glad." 기분과 까닭을 쓰세요.', columns: ['기분', '까닭 (앞뒤 문장)'], cells: [['sad', ''], ['glad', '']], answer: '고양이가 아파서 / 고양이가 밥을 다 먹어서' },
            { type: 'choice', prompt: '"Jay felt nervous because he had a test." 까닭이 나오는 신호 말은?', options: ['felt', 'because', 'test'], answer: 'because' },
            { type: 'blank', prompt: 'Ben was upset because ___. (오늘 들은 벤 이야기로 쓰세요)' },
            { type: 'short', prompt: '내가 최근에 기뻤던 일을 "I was happy because ___." 로 쓰세요.' },
          ],
          easy: {
            note: '까닭을 이어 주는 말: because, so, but — 기분 문장의 앞과 뒤를 봐요.',
            items: [
              { type: 'table', prompt: '"Hana\'s cat was sick, so she felt sad." 를 읽고 쓰세요.', columns: ['기분', '까닭'], cells: [['sad', '']], answer: '고양이가 아파서' },
              { type: 'choice', prompt: 'because 의 뜻은?', options: ['왜냐하면 ~이라서', '그리고'], answer: '왜냐하면 ~이라서' },
              { type: 'short', prompt: 'I was happy because ___. 의 빈칸을 한국어로 채워 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '고를 카드가 줄고, 맞게 놓으면 초록 테두리가 생기며 틀리면 까닭을 말하고 되돌아와요.',
          base: '이야기를 듣거나 읽고 기분의 까닭을 고르거나 짝 지은 뒤 확인을 눌러요.',
          challenge: '이야기에 없는 그럴듯한 까닭(집이 멀어서, 도시가 멀어서) 카드가 더해지고, 배경 문장 같은 먼 까닭이 남아요.',
        },
        teacherNotes: '이야기는 모두 이 차시를 위해 지은 것이다. 듣기 대본: 활동 1 ① Jisu was so happy. Her grandma came from Busan to see her. They baked cookies together. ② Ben bought a big ice cream. On his way home, he dropped it on the ground. Then a dog ate it. Ben was very upset. ③ Yuna was nervous. She had to speak in front of the whole school. But her friends cheered for her, and she felt brave. 출구: Tom was angry. His little sister broke his new robot. 낱말: relieved 안심한, proud 뿌듯한, embarrassed 창피한, lonely 외로운. 자주 보이는 어려움: ① 까닭은 늘 기분 문장 앞에만 있다고 여긴다 → 1번처럼 뒤에 오는 경우를 보여 준다. ② 이야기에 없는 까닭을 지어낸다 → "이야기에 그 말이 나왔나?"로 확인한다. ③ 기분이 바뀌는 이야기에서 첫 기분의 까닭을 고른다 → 물음이 묻는 기분에 밑줄을 긋게 한다.',
      }),

      // ───────────────────────── 30차시 (extend) ─────────────────────────
      lesson(30, S09, {
        title: '이솝 우화 사자와 생쥐에서 사자의 기분 변화 따라가기',
        objective: '쉬운 영어로 다시 쓴 이솝 우화 "The Lion and the Mouse"를 듣고 사자의 기분이 바뀐 차례를 정리하며, 기분마다 그 까닭을 이야기에서 찾아 말할 수 있다.',
        illustration: {
          prompt: PROMPT('a big lion caught in a rope net in the jungle while a tiny brave mouse chews the rope, with leaves and vines around them'),
          scene: SCENE('The Lion and the Mouse', '사자의 기분이 어떻게 바뀌었을까요', [
            { motif: 'tree', x: 82, y: 210 }, { motif: 'tree', x: 400, y: 212 }, { motif: 'leaf', x: 240, y: 222 }, { motif: 'sun', x: 410, y: 54, s: 0.6 },
          ]),
        },
        stages: [
          {
            id: 'intro', title: '도입', minutes: 6,
            teacher: '"아주 큰 동물이 아주 작은 동물에게 도움을 받는 이야기를 아나요?" 대답을 들은 뒤 "오늘은 2천 년도 더 전부터 전해 오는 이솝 우화 가운데 하나를 쉬운 영어로 들어요."라고 말한다. 제목 The Lion and the Mouse와 낱말 net(그물), chew(갉다), set free(풀어 주다)를 칠판에 적는다. "사자의 기분은 처음부터 끝까지 같을까요? 들으며 기분이 바뀌는 곳에서 손을 들어 봐요."',
            student: '사자와 생쥐 이야기에서 사자의 기분은 어떻게 바뀔까요? 기분이 바뀌는 곳에서 그 까닭도 찾아봐요.',
            demo: { tool: 'wordcards', options: LISTEN('A lion was sleeping. A little mouse ran over his nose.', [C('sleep', '사자가 자고 있었어요'), C('eat', '사자가 먹고 있었어요')], '이야기의 처음'), sequence: [{ at: {} }, { at: { sleep: 0 } }] },
          },
          {
            id: 'main', title: '전개', minutes: 27,
            activities: [
              {
                id: 'a1', title: '활동 1. 부분마다 사자의 기분과 까닭 찾기', minutes: 14, tool: 'wordcards',
                teacher: '"이야기를 세 부분으로 나누어 들어요. 부분마다 사자가 어떤 기분인지, 왜 그런지 찾아요." 첫 부분을 들은 뒤 "사자는 생쥐가 코 위를 달려서 화가 났어요. 까닭은 기분 문장의 앞에 있었지요?"라고 함께 확인한다. 사자가 생쥐를 비웃는 부분(laughed)을 "기뻐서"로 고르는 학생에게 "How can a little mouse help me? 라는 말에 어떤 마음이 담겼을까요?"라고 묻는다.',
                task: '부분마다 물음을 먼저 읽어요. 듣기 단추로 그 부분을 듣고, 사자의 기분이나 까닭 카드를 골라요.',
                levels: LV({ mode: 'listen', basket: '찾은 것' }),
                items: [
                  Object.assign({ prompt: '첫 부분이에요. 사자는 왜 화가 났나요? 듣고 까닭을 골라 보세요.',
                    target: { listen: 'nose' }, difficulty: 0.15,
                    hints: ['기분 문장(He was angry) 앞에서 사자에게 일어난 일을 찾아요.', '고른 까닭이 사자가 잠에서 깨기 전에 일어난 일인지 다시 들어 보세요.', '작은 생쥐가 자는 사자의 코 위를 달려서(ran over his nose) 깨웠어요.'] },
                    LI('A lion was sleeping. A little mouse ran over his nose. The lion woke up and caught the mouse. He was angry.', [C('nose', '생쥐가 코 위를 달려 잠을 깨워서'), C('hungry', '배가 고파서', '배고프다는 말은 없어요.'), C('hunter', '사냥꾼이 와서', '사냥꾼은 이야기 뒤쪽에 나와요.')], '화난 까닭', ['nose', 'hungry'])),
                  Object.assign({ prompt: '둘째 부분이에요. 생쥐가 "언젠가 도와줄게요"라고 하자 사자는 어떤 마음으로 웃었나요? 듣고 골라 보세요.',
                    target: { listen: 'joke' }, difficulty: 0.25,
                    hints: ['사자가 웃으며 한 말(How can a little mouse help me?)에 담긴 생각을 떠올려요.', '고른 카드가 사자가 한 말과 어울리는지 다시 들어 보세요. 사자는 생쥐가 도울 수 있다고 믿었나요?', '작은 생쥐가 어떻게 돕겠냐며 우습게 여겼어요. 그래도 놓아주었어요.'] },
                    LI('"Please let me go," said the mouse. "Someday I will help you." The lion laughed. "How can a little mouse help me?" But he let the mouse go.', [C('joke', '작은 생쥐가 도울 수 없다고 우습게 여겨서'), C('glad', '생쥐가 도와줘서 고마워서', '생쥐는 아직 사자를 돕지 않았어요.'), C('scared', '생쥐가 무서워서', '사자는 생쥐를 무서워하지 않았어요.')], '사자가 웃은 마음', ['joke', 'glad'])),
                  Object.assign({ prompt: '셋째 부분이에요. 그물에 걸린 사자의 기분은 끝에 어떻게 바뀌었나요? 기분과 그 까닭을 모두 골라 보세요.',
                    target: { listen: ['thank', 'free'] }, difficulty: 0.3,
                    hints: ['기분이 두 번 나와요(scared → 끝의 기분). 물음은 끝의 기분과 그 까닭이에요.', '고른 카드가 처음 기분(무서움)인지 끝의 기분인지, 까닭 카드가 끝의 기분 바로 앞의 일인지 다시 들어 보세요.', '생쥐가 밧줄을 갉아 풀어 줘서(set him free) 사자는 고마웠어요(Thank you, my little friend).'],
                    predict: { q: '이야기 처음에 생쥐를 우습게 여긴 사자가 끝에도 같은 마음일까요?', options: ['같은 마음이에요', '마음이 바뀌어요'], answer: 1 },
                    conclude: '사자의 기분은 화남 → 우습게 여김 → 무서움 → 고마움으로 바뀌었어요. 기분마다 까닭이 있어요.' },
                    LI('Later, the lion got caught in a hunter\'s net. He roared, but he could not get out. He was scared. The mouse heard him. She chewed the ropes and set him free. The lion said, "Thank you, my little friend."', [C('thank', '고마움'), C('free', '생쥐가 밧줄을 갉아 풀어 줘서'), C('scared', '무서움', '무서움은 그물에 걸렸을 때의 기분이에요. 끝의 기분이 아니에요.'), C('net', '그물에 걸려서', '그물에 걸린 것은 무서웠던 까닭이에요.')], '끝의 기분과 까닭', ['thank', 'free', 'scared'])),
                ],
              },
              {
                id: 'a2', title: '활동 2. 사자의 기분이 바뀐 차례 정리하기', minutes: 13, tool: 'story',
                teacher: '"이야기 전체를 떠올리며 사자의 기분 카드를 처음부터 차례대로 놓아요. 카드 아래 작은 줄에 그 까닭이 있어요." 다 놓은 뒤 짝과 한 칸씩 짚으며 "At first, the lion was ___ because ___." 처럼 말하게 한다. 3번은 생쥐의 기분 차례를 놓는 문항이라 인물을 바꾸어 생각해야 한다는 것을 알려 준다.',
                task: '사자(또는 생쥐)의 기분 카드를 이야기의 차례대로 놓아요. 카드 아래의 까닭도 함께 읽어요.',
                levels: { easy: { mode: 'order', live: true, instant: true }, base: { mode: 'order' }, challenge: { mode: 'order' } },
                items: [
                  { prompt: '사자의 기분 세 가지를 이야기의 차례대로 놓아 보세요.',
                    toolOptions: { slots: ['처음', '가운데', '끝'], cards: [{ id: 'angry', text: '화남 (angry)', sub: '생쥐가 잠을 깨워서' }, { id: 'scared', text: '무서움 (scared)', sub: '그물에 걸려서' }, { id: 'thank', text: '고마움 (thankful)', sub: '생쥐가 풀어 줘서' }] },
                    target: { order: ['angry', 'scared', 'thank'] }, difficulty: 0.15,
                    hints: ['카드 아래의 까닭이 이야기에서 언제 일어난 일인지 떠올려 차례를 정해요.', '놓은 카드의 까닭이 이야기의 차례와 맞는지 보세요. 그물은 언제 나왔나요?', '잠을 깨움(화남) → 그물에 걸림(무서움) → 풀려남(고마움)이에요.'] },
                  { prompt: '사자의 기분 네 가지를 이야기의 차례대로 놓아 보세요.',
                    toolOptions: { slots: 4, cards: [{ id: 'angry', text: '화남', sub: '생쥐가 잠을 깨워서' }, { id: 'joke', text: '우습게 여김', sub: '생쥐가 돕겠다고 해서' }, { id: 'scared', text: '무서움', sub: '그물에 걸려서' }, { id: 'thank', text: '고마움', sub: '생쥐가 풀어 줘서' }] },
                    target: { order: ['angry', 'joke', 'scared', 'thank'] }, difficulty: 0.25,
                    hints: ['까닭 줄을 이야기의 세 부분(잠·약속, 그물, 풀려남)에 나누어 놓고 차례를 정해요.', '"우습게 여김"과 "화남"의 차례를 다시 보세요. 생쥐는 잡힌 뒤에 약속했어요.', '화남 → 우습게 여김 → 무서움 → 고마움이에요.'] },
                  { prompt: '이번에는 생쥐의 기분이에요. 생쥐의 기분 세 가지를 이야기의 차례대로 놓아 보세요.',
                    toolOptions: { slots: ['처음', '가운데', '끝'], cards: [{ id: 'fear', text: '무서움', sub: '사자에게 잡혀서' }, { id: 'brave', text: '용감함', sub: '그물에 걸린 사자를 도우러 가서' }, { id: 'proud', text: '뿌듯함', sub: '약속을 지켜서' }] },
                    target: { order: ['fear', 'brave', 'proud'] }, difficulty: 0.3,
                    hints: ['인물이 바뀌었어요. 생쥐에게 일어난 일(잡힘, 도우러 감, 약속 지킴)의 차례를 떠올려요.', '놓은 카드의 까닭 줄이 생쥐 이야기의 차례와 맞는지 보세요.', '잡혀서 무서움 → 도우러 가서 용감함 → 약속을 지켜 뿌듯함이에요.'],
                    predict: { q: '사자와 생쥐는 같은 때에 같은 기분이었을까요?', options: ['같은 기분이에요', '서로 달라요'], answer: 1 },
                    conclude: '같은 일도 인물마다 다른 기분을 만들어요. 사자가 무서울 때 생쥐는 용감했어요.' },
                ],
              },
            ],
          },
          {
            id: 'wrapup', title: '정리', minutes: 7,
            teacher: '"사자는 처음에 생쥐를 우습게 여겼어요. 끝에는 생쥐를 무엇이라고 불렀나요?" my little friend라는 대답을 듣고 "사자의 생각은 어떻게 바뀌었을까요?"라고 묻는다. 이 우화가 전하는 생각(작은 친구도 큰 도움을 줄 수 있다)을 학생 말로 한 문장 듣는다. 그 뒤 출구 질문을 푼다.',
            exitTicket: [
              { type: 'tool', tool: 'wordcards', options: LISTEN('The mouse was scared, but she ran to the lion. She wanted to keep her promise.', [C('promise', '약속을 지키고 싶어서'), C('food', '먹이를 얻고 싶어서'), C('play', '사자와 놀고 싶어서')], '달려간 까닭'), prompt: '생쥐는 무서웠지만 사자에게 달려갔어요. 왜 그랬나요? 듣고 골라 보세요.', target: { listen: 'promise' }, difficulty: 0.2 },
              { type: 'choice', prompt: '이야기 끝에서 사자가 생쥐를 "my little friend"라고 부른 것은 어떤 마음일까요?', options: ['여전히 우습게 여겨요', '고맙고 친구로 여겨요', '화가 나요'], answer: 1, difficulty: 0.2, explain: '도움을 받은 뒤 사자는 생쥐를 고마운 친구로 여기게 되었어요.' },
              { type: 'mood', prompt: '오늘 이솝 우화 듣기는 어땠나요?' },
            ],
          },
        ],
        worksheet: {
          title: 'The Lion and the Mouse — 기분의 길',
          items: [
            { type: 'table', prompt: '사자의 기분과 그 까닭을 차례대로 쓰세요.', columns: ['차례', '사자의 기분', '까닭'], cells: [['1', '화남', ''], ['2', '', '그물에 걸려서'], ['3', '', '']], answer: '생쥐가 잠을 깨워서 / 무서움 / 고마움, 생쥐가 풀어 줘서' },
            { type: 'choice', prompt: '"She chewed the ropes and set him free." 에서 생쥐가 한 일은?', options: ['밧줄을 갉아 풀어 주었다', '사냥꾼을 불렀다', '사자를 깨웠다'], answer: '밧줄을 갉아 풀어 주었다' },
            { type: 'blank', prompt: 'At the end, the lion was ___ because ___.' },
            { type: 'short', prompt: '이 이야기에서 내가 생쥐라면 사자에게 무슨 말을 했을지 영어 한 문장으로 쓰세요.' },
          ],
          easy: {
            note: '사자의 기분: angry 화남 → scared 무서움 → thankful 고마움',
            items: [
              { type: 'table', prompt: '사자의 기분을 차례대로 쓰세요.', columns: ['처음', '가운데', '끝'], cells: [['', '', '']], answer: '화남 / 무서움 / 고마움' },
              { type: 'choice', prompt: 'net 의 뜻은?', options: ['그물', '둥지'], answer: '그물' },
              { type: 'short', prompt: '사자를 도와준 동물의 이름을 영어로 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '고를 카드가 줄고, 칸에 맞게 놓으면 초록 테두리가 생기며 틀리면 까닭을 말하고 되돌아와요.',
          base: '부분마다 듣고 기분과 까닭을 고른 뒤, 기분의 차례를 놓고 확인을 눌러요.',
          challenge: '처음 기분과 끝 기분을 함께 남겨 두어 물음이 묻는 기분을 가려야 하고, 생쥐의 기분 차례까지 따져요.',
        },
        teacherNotes: '저작권: "The Lion and the Mouse"는 이솝 우화(기원전 6세기 무렵부터 전해 옴)로 저작권이 없다. 이 차시의 영어 글은 6학년 수준으로 쉽게 다시 쓴 것이다. 전문: A lion was sleeping. A little mouse ran over his nose. The lion woke up and caught the mouse. He was angry. "Please let me go," said the mouse. "Someday I will help you." The lion laughed. "How can a little mouse help me?" But he let the mouse go. Later, the lion got caught in a hunter\'s net. He roared, but he could not get out. He was scared. The mouse heard him. She chewed the ropes and set him free. The lion said, "Thank you, my little friend." 출구: The mouse was scared, but she ran to the lion. She wanted to keep her promise. 자주 보이는 어려움: ① laughed를 기쁨으로만 읽는다 → 함께 한 말(How can a little mouse help me?)의 뜻을 짚는다. ② 기분이 바뀐 이야기에서 처음 기분만 기억한다 → 부분마다 끊어 듣게 한다. ③ 사자와 생쥐의 기분을 섞는다 → 인물 이름에 밑줄을 긋고 따로 표에 적게 한다.',
      }),

      // ───────────────────────── 31차시 (core) ─────────────────────────
      lesson(31, S09, {
        title: '시 Who Has Seen the Wind?에서 마음에 남은 구절 고르기',
        objective: '크리스티나 로세티의 짧은 시 "Who Has Seen the Wind?"를 읽고 구절의 뜻을 그림과 잇고, 마음에 남은 구절에 자기 생각을 한 문장 보탠 감상과 뜻만 적은 메모를 가를 수 있다.',
        illustration: {
          prompt: PROMPT('tall trees bending their tops and small leaves trembling in an invisible wind, with a child standing on a hill holding a notebook and looking up at the moving branches'),
          scene: SCENE('Who has seen the wind?', '보이지 않는 바람을 느껴요', [
            { motif: 'tree', x: 90, y: 210 }, { motif: 'tree', x: 400, y: 210 }, { motif: 'leaf', x: 250, y: 120 }, { motif: 'cloud', x: 300, y: 60 },
          ]),
        },
        stages: [
          {
            id: 'intro', title: '도입', minutes: 7,
            teacher: '"바람을 눈으로 본 적 있나요?" 못 봤다는 대답과 나뭇잎이 흔들리는 것을 봤다는 대답을 함께 듣는다. "150년쯤 전 영국 시인 크리스티나 로세티도 같은 물음을 시로 썼어요." 시 여덟 줄을 칠판(또는 화면)에 띄우고 천천히 한 번 읽어 준다. "시를 읽을 때 낱말 뜻만 찾고 끝내면 무엇이 빠질까요?" 하고 묻고, 오늘은 마음에 남은 구절에 내 생각을 한 문장 보태는 것까지 한다고 말한다.',
            student: '바람을 눈으로 본 적이 있나요? 시를 읽을 때 낱말 뜻 말고 무엇을 함께 적으면 좋을지 생각해 봐요.',
            demo: { tool: 'wordcards', options: { mode: 'match', slots: [{ id: 's1', label: 'the leaves hang trembling' }], cards: ['나뭇잎이 떨리며 매달려 있어요', '나뭇잎이 땅에 떨어져요'] }, sequence: [{ at: {} }, { at: { '나뭇잎이 떨리며 매달려 있어요': 0 } }] },
          },
          {
            id: 'main', title: '전개', minutes: 26,
            activities: [
              {
                id: 'a1', title: '활동 1. 시의 구절과 그 뜻 잇기', minutes: 11, tool: 'wordcards',
                teacher: '"시의 구절을 소리 내어 읽고, 그 구절이 그리는 장면을 고르세요." trembling(떨리는), bow down their heads(고개를 숙이다), neither ~ nor(~도 ~도 아니다), passing through(지나가다)를 칠판에 적는다. 나무가 정말 고개가 있느냐고 묻는 학생에게 "나무 꼭대기가 숙여지는 모습을 사람이 인사하는 것처럼 그렸어요."라고 말해 준다.',
                task: '시의 구절을 소리 내어 읽고, 그 구절이 그리는 장면 카드를 옆에 놓아요.',
                levels: LV({ mode: 'match' }),
                items: [
                  Object.assign({ prompt: '시의 첫째 연이에요. 구절마다 알맞은 뜻을 짝 지어 보세요.',
                    target: { match: { s1: 'nobody', s2: 'leaves', s3: 'through' } }, difficulty: 0.15,
                    hints: ['칠판의 낱말 뜻(neither ~ nor, trembling, passing through)을 보며 구절의 장면을 떠올려요.', '놓은 뜻이 구절의 낱말과 맞는지 하나씩 다시 읽어 보세요.', 'Neither I nor you = 나도 너도 못 봤어요, leaves hang trembling = 나뭇잎이 떨려요, passing through = 바람이 지나가요.'] },
                    CD([C('nobody', '나도 너도 본 적 없어요'), C('leaves', '나뭇잎이 떨리며 매달려 있어요'), C('through', '바람이 사이로 지나가고 있어요')], null, [C('fall', '나뭇잎이 모두 떨어졌어요', '나뭇잎은 매달려(hang) 있어요.')], null,
                      { slots: [{ id: 's1', label: 'Neither I nor you' }, { id: 's2', label: 'But when the leaves hang trembling,' }, { id: 's3', label: 'The wind is passing through.' }] })),
                  Object.assign({ prompt: '시의 둘째 연이에요. 구절마다 알맞은 뜻을 짝 지어 보세요.',
                    target: { match: { s1: 'who', s2: 'bow', s3: 'by' } }, difficulty: 0.25,
                    hints: ['첫째 연과 둘째 연은 비슷하게 되풀이돼요. 바뀐 낱말(trees, bow down, by)을 찾아 뜻을 정해요.', '놓은 뜻 가운데 첫째 연의 장면(나뭇잎)과 섞인 것이 있는지 보세요.', 'Who has seen the wind? = 누가 바람을 보았나요, trees bow down their heads = 나무가 고개를 숙여요, passing by = 바람이 곁을 지나가요.'] },
                    CD([C('who', '누가 바람을 보았나요?'), C('bow', '나무들이 고개를 숙여요'), C('by', '바람이 곁을 지나가고 있어요')], null, [C('leaves', '나뭇잎이 떨려요', '나뭇잎은 첫째 연의 장면이에요.')], null,
                      { slots: [{ id: 's1', label: 'Who has seen the wind?' }, { id: 's2', label: 'But when the trees bow down their heads,' }, { id: 's3', label: 'The wind is passing by.' }] })),
                  Object.assign({ prompt: '시인이 하고 싶은 말이에요. 물음에 알맞은 답을 짝 지어 보세요.',
                    target: { match: { s1: 'see', s2: 'know' } }, difficulty: 0.3,
                    hints: ['시의 물음(Who has seen the wind?)과 But 뒤의 말을 함께 봐요.', '놓은 답이 시에 나온 말(Neither I nor you, But when …)과 맞는지 보세요.', '바람은 아무도 못 봤지만, 나뭇잎과 나무가 움직이면 바람이 있다는 것을 알 수 있어요.'],
                    predict: { q: '바람이 보이지 않으면 바람이 있는지 알 수 없을까요?', options: ['알 수 없어요', '알 수 있어요'], answer: 1 },
                    conclude: '바람은 보이지 않아도 나뭇잎과 나무가 움직이는 모습으로 바람이 지나가는 것을 알 수 있어요.' },
                    CD([C('see', '아무도 바람을 본 적이 없어요'), C('know', '나뭇잎과 나무가 움직이면 바람이 있는 것을 알아요')], null, [C('never', '바람은 어디에도 없어요', '시는 바람이 지나가고 있다고 말해요.')], null,
                      { slots: [{ id: 's1', label: '바람을 본 사람이 있나요?' }, { id: 's2', label: '그러면 바람이 있는지 어떻게 알 수 있나요?' }] })),
                ],
              },
              {
                id: 'a2', title: '활동 2. 구절 + 내 생각이 담긴 감상 고르기', minutes: 15, tool: 'wordcards',
                teacher: '"친구들이 쓴 감상 메모예요. 마음에 남은 구절을 옮겨 적고, 그 구절에 자기 생각을 한 문장 보탠 메모만 골라요." 뜻만 적은 메모(trembling은 떨린다는 뜻이다)를 고르는 학생에게 "이 메모에는 친구의 생각이나 느낌이 있나요?"라고 묻는다. 구절 없이 느낌만 쓴 메모도 오늘 기준(구절 + 생각)에 맞지 않는다는 것을 짚는다. 골라 본 뒤 공책에 내 감상 한 줄을 같은 기준으로 쓰게 한다.',
                task: '감상 메모를 읽고, 시의 구절을 옮기고 거기에 자기 생각을 보탠 메모만 골라요.',
                levels: LV(PICK('구절 + 내 생각')),
                items: [
                  Object.assign({ prompt: '구절을 옮기고 자기 생각을 한 문장 보탠 감상 메모를 모두 골라 보세요.',
                    target: { pick: ['r1', 'r3'] }, difficulty: 0.2,
                    hints: ['메모마다 두 가지를 찾아요: 따옴표 속 시의 구절, 그리고 "~ 같다", "~ 생각이 났다" 같은 내 생각.', '고른 메모에 구절과 생각이 둘 다 있는지, 뜻만 적은 메모가 섞였는지 보세요.', '나무가 인사하는 것 같다는 메모와, 떨리는 나뭇잎을 보고 추운 날이 떠올랐다는 메모예요.'] },
                    CD([C('r1', '"the trees bow down their heads" — 바람에게 인사하는 것 같아서 웃음이 났다.'), C('r2', 'trembling은 "떨리는"이라는 뜻이다.', '뜻만 적었어요. 내 생각이 없어요.'), C('r3', '"the leaves hang trembling" — 추운 날 떨던 내가 생각났다.'), C('r4', '시가 좋았다.', '어느 구절인지 없어요.')], ['r1', 'r2', 'r3'])),
                  Object.assign({ prompt: '감상 메모 가운데 구절 + 내 생각이 담긴 것을 모두 골라 보세요.',
                    target: { pick: ['q2'] }, difficulty: 0.25,
                    hints: ['구절만 옮긴 메모, 생각만 쓴 메모, 둘 다 있는 메모를 가려요.', '고른 메모에 시의 구절이 따옴표로 옮겨져 있는지, 그 구절에 대한 생각이 있는지 보세요.', '"Neither I nor you"를 옮기고 볼 수 없는 것도 있다는 생각을 보탠 메모 하나예요.'] },
                    CD([C('q1', '"Who has seen the wind?"', '구절만 옮겼어요. 내 생각이 없어요.'), C('q2', '"Neither I nor you" — 눈에 보이지 않아도 있는 것이 많다는 생각이 들었다.'), C('q3', '바람이 부는 날이 좋다.', '시의 구절이 없어요.'), C('q4', 'passing by = 지나가다', '뜻만 적었어요.')], ['q1', 'q2', 'q4'], [C('q5', '"The wind is passing through." — through는 사이로라는 뜻이다.', '구절은 옮겼지만 뜻만 적었어요.')])),
                  Object.assign({ prompt: '감상 메모 가운데 구절 + 내 생각이 담긴 것을 모두 골라 보세요.',
                    target: { pick: ['p1', 'p4'] }, difficulty: 0.3,
                    hints: ['생각은 "~ 같다", "~ 떠올랐다", "~ 궁금하다", "~ 하고 싶다"처럼 나의 말로 나와요.', '고른 메모 가운데 구절의 뜻을 풀기만 한 것이 있는지 다시 보세요.', '나무가 고개 숙이는 구절로 할머니가 떠올랐다는 메모, 바람이 지나가는 구절로 창문을 열고 싶다는 메모예요.'],
                    predict: { q: '"trembling = 떨리는"이라고 뜻을 찾았으면 감상을 다 한 걸까요?', options: ['다 했어요', '내 생각을 보태요'], answer: 1 },
                    conclude: '뜻을 찾는 것은 감상의 시작이에요. 마음에 남은 구절에 내 생각을 한 문장 보태야 감상이 돼요.' },
                    CD([C('p1', '"the trees bow down their heads" — 허리를 굽혀 인사하던 할머니가 떠올랐다.'), C('p2', '"bow down"은 숙이다, "heads"는 머리라는 뜻이다.', '뜻만 풀었어요.'), C('p3', '"leaves hang trembling"은 나뭇잎이 떨린다는 말이다.', '구절의 뜻을 풀었을 뿐 내 생각이 없어요.'), C('p4', '"The wind is passing through." — 창문을 열고 바람이 지나가는 소리를 듣고 싶다.')], ['p1', 'p3', 'p4'])),
                ],
              },
            ],
          },
          {
            id: 'wrapup', title: '정리', minutes: 7,
            teacher: '"오늘 고른 감상 메모에는 무엇과 무엇이 있었나요?" 구절과 내 생각이라는 말을 칠판에 적는다. 공책에 쓴 내 감상 한 줄을 짝과 바꾸어 읽고, 짝의 메모에 구절과 생각이 다 있는지 손가락 두 개로 확인해 주게 한다. 그 뒤 출구 질문을 푼다.',
            exitTicket: [
              { type: 'tool', tool: 'wordcards', options: Object.assign(PICK('구절 + 내 생각'), { cards: [C('x1', '"Who has seen the wind?" — 나도 바람 사진을 찍어 보고 싶어졌다.'), C('x2', 'wind = 바람'), C('x3', '시가 짧았다.')] }), prompt: '구절 + 내 생각이 담긴 감상 메모를 골라 보세요.', target: { pick: ['x1'] }, difficulty: 0.15 },
              { type: 'choice', prompt: '시인이 "Who has seen the wind?"에 내놓은 답은?', options: ['나는 봤다', '나도 너도 못 봤지만 나뭇잎과 나무로 알 수 있다', '바람은 없다'], answer: 1, difficulty: 0.2, explain: '아무도 못 봤지만(Neither I nor you) 나뭇잎이 떨리고 나무가 숙이면 바람이 지나가는 거예요.' },
              { type: 'mood', prompt: '오늘 영어 시 감상하기는 어땠나요?' },
            ],
          },
        ],
        worksheet: {
          title: 'Who Has Seen the Wind? 감상',
          items: [
            { type: 'table', prompt: '시의 구절과 뜻을 쓰세요.', columns: ['구절', '뜻'], cells: [['the leaves hang trembling', ''], ['the trees bow down their heads', ''], ['The wind is passing by.', '']], answer: '나뭇잎이 떨리며 매달려 있다 / 나무들이 고개를 숙인다 / 바람이 곁을 지나간다' },
            { type: 'choice', prompt: '구절 + 내 생각이 담긴 감상은?', options: ['trembling은 떨린다는 뜻이다.', '"the leaves hang trembling" — 추위에 떠는 강아지가 떠올랐다.'], answer: '"the leaves hang trembling" — 추위에 떠는 강아지가 떠올랐다.' },
            { type: 'blank', prompt: '마음에 남은 구절: "___" — 내 생각: ___' },
            { type: 'draw', prompt: '마음에 남은 구절이 그리는 장면을 그리세요.' },
          ],
          easy: {
            note: '감상 = 마음에 남은 구절 옮기기 + 내 생각 한 문장',
            items: [
              { type: 'choice', prompt: 'wind 의 뜻은?', options: ['바람', '나무'], answer: '바람' },
              { type: 'blank', prompt: '마음에 남은 구절: "___"' },
              { type: 'short', prompt: '그 구절을 읽고 떠오른 것을 한 문장으로 쓰세요.' },
              { type: 'draw', prompt: '바람이 부는 장면을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '짝 지을 뜻과 고를 메모가 줄고, 맞게 놓으면 초록 테두리가 생기며 틀리면 까닭을 말하고 되돌아와요.',
          base: '구절의 뜻을 잇고 감상 메모를 고른 뒤 확인을 눌러요.',
          challenge: '구절은 옮겼지만 뜻만 적은 메모, 다른 연의 장면 같은 함정 카드가 더해져요.',
        },
        teacherNotes: '저작권: "Who Has Seen the Wind?"는 크리스티나 로세티(Christina Rossetti)의 시로 1872년 시집 Sing-Song에 실렸으며 저작권이 끝났다. 전문: Who has seen the wind? / Neither I nor you: / But when the leaves hang trembling, / The wind is passing through. // Who has seen the wind? / Neither you nor I: / But when the trees bow down their heads, / The wind is passing by. 감상 메모는 이 차시를 위해 지은 학생 예시다. 판정 기준(활동 2): 시의 구절을 옮겨 적고 그 구절에 대한 자기 생각(떠오른 것·느낌·하고 싶은 것)을 보탠 메모만 "구절 + 내 생각"으로 본다 — 구절만, 생각만, 뜻 풀이만은 아니다. 이 기준을 활동 2 시작 때 칠판에 적어 둔다. 자주 보이는 어려움: ① 낱말 뜻을 찾으면 감상이 끝났다고 여긴다 → 뜻 옆에 "그래서 나는 ___" 칸을 두게 한다. ② 구절 없이 "좋았다"만 쓴다 → 어느 구절이 좋았는지 따옴표로 옮기게 한다.',
      }),

      // ───────────────────────── 32차시 (practice) ─────────────────────────
      lesson(32, S09, {
        title: '스티븐슨의 시 Rain을 듣고 내 감상 한 줄 쓰기',
        objective: '로버트 루이스 스티븐슨의 짧은 시 "Rain"을 듣고 비가 내리는 곳을 찾으며, 친구들의 감상을 "구절 + 생각"과 "뜻만"으로 가른 뒤 내 감상 한 줄을 쓸 수 있다.',
        illustration: {
          prompt: PROMPT('gentle rain falling all around on green fields, round trees, colorful umbrellas in a small town and sailing ships far out at sea, seen from a child\'s window'),
          scene: SCENE('The rain is raining all around', '비가 내리는 곳을 들어요', [
            { motif: 'cloud', x: 300, y: 60 }, { motif: 'wave', y: 232 }, { motif: 'tree', x: 84, y: 210 }, { motif: 'house', x: 392, y: 214, color: 'sky' },
          ]),
        },
        stages: [
          {
            id: 'intro', title: '도입', minutes: 6,
            teacher: '"비가 오는 날 창밖을 보면 비가 어디어디에 내리나요?" 운동장, 우산, 지붕 같은 대답을 칠판에 모은다. "130여 년 전 스코틀랜드 작가 스티븐슨은 어린이를 위한 시집에 비 오는 날을 네 줄로 썼어요. 어디에 비가 내린다고 했는지 들어 봐요." 지난 시간의 감상 기준(구절 + 내 생각)을 다시 떠올리게 하고, 오늘은 내 감상 한 줄까지 쓴다고 말한다.',
            student: '비가 오는 날 비는 어디어디에 내릴까요? 시인은 비가 어디에 내린다고 썼을지 짐작해 봐요.',
            demo: { tool: 'wordcards', options: LISTEN('The rain is raining all around.', [C('all', '사방에'), C('one', '한 곳에만')], '비가 내리는 곳'), sequence: [{ at: {} }, { at: { all: 0 } }] },
          },
          {
            id: 'main', title: '전개', minutes: 27,
            activities: [
              {
                id: 'a1', title: '활동 1. 시를 듣고 비가 내리는 곳 찾기', minutes: 11, tool: 'wordcards',
                teacher: '"시를 들으며 on 뒤에 나오는 곳을 잡아요. 비는 on 무엇 위에 내려요." field(들판), umbrellas(우산들), ships at sea(바다 위의 배)를 칠판에 적는다. 시에 없는 곳(지붕)을 고르는 학생에게 "그 낱말이 시에 들렸나요? 내가 본 비 오는 날과 시가 그린 비 오는 날은 다를 수 있어요."라고 말한다. 3번은 here(여기)와 at sea(먼 바다)처럼 가까운 곳과 먼 곳을 가르는 문항이다.',
                task: '듣기 단추로 시를 들어요. 물음에 맞는 곳 카드를 골라요. 시에 나오지 않은 곳은 고르지 않아요.',
                levels: LV({ mode: 'listen', basket: '비가 내리는 곳' }),
                items: [
                  Object.assign({ prompt: '시의 둘째 줄이에요. 비가 내리는 곳 두 가지를 골라 보세요.',
                    target: { listen: ['field', 'tree'] }, difficulty: 0.15,
                    hints: ['falls on(~ 위에 떨어져요) 뒤에 곳이 and로 이어져 나와요.', '고른 곳이 falls on 뒤에 들렸는지, 시에 없는 곳을 고르지 않았는지 다시 들어 보세요.', 'It falls on field and tree — 들판과 나무예요.'] },
                    LI('The rain is raining all around, it falls on field and tree.', [C('field', '들판'), C('tree', '나무'), C('roof', '지붕', '시에 나오지 않은 곳이에요.')], '비가 내리는 곳', null, [C('river', '강', '시에 나오지 않은 곳이에요.')])),
                  Object.assign({ prompt: '시의 셋째·넷째 줄이에요. 비가 내리는 곳 두 가지를 골라 보세요.',
                    target: { listen: ['umb', 'ship'] }, difficulty: 0.2,
                    hints: ['rains on 뒤와 And on 뒤에 곳이 나와요. 두 대목을 들어요.', '고른 곳이 시에 들린 곳인지, 들판·나무처럼 앞 줄의 곳은 아닌지 보세요.', 'on the umbrellas here, And on the ships at sea — 우산과 바다 위의 배예요.'] },
                    LI('It rains on the umbrellas here, and on the ships at sea.', [C('umb', '여기의 우산들'), C('ship', '바다 위의 배들'), C('field', '들판', '들판은 둘째 줄에 나와요. 지금 들은 줄이 아니에요.')], '비가 내리는 곳', ['umb', 'ship', 'field'], [C('car', '자동차', '시에 나오지 않은 곳이에요.')])),
                  Object.assign({ prompt: '시 전체를 들어요. 시인 가까이(here)가 아니라 멀리 있는 곳을 골라 보세요.',
                    target: { listen: 'ship' }, difficulty: 0.3,
                    hints: ['here(여기)와 at sea(바다에서)를 들어요. 어느 곳이 시인과 먼 곳일까요?', '고른 곳이 here와 함께 나왔는지, at sea와 함께 나왔는지 다시 들어 보세요.', 'the ships at sea — 먼 바다 위의 배예요. 우산은 here(여기)에 있어요.'],
                    predict: { q: '시인은 바다 위의 배를 눈으로 보고 있었을까요?', options: ['눈앞에 보여요', '멀리 떠올렸어요'], answer: 1 },
                    conclude: '시인은 눈앞의 우산에서 먼 바다의 배까지 떠올렸어요. 그래서 비가 "사방에(all around)" 내려요.' },
                    LI('The rain is raining all around, it falls on field and tree. It rains on the umbrellas here, and on the ships at sea.', [C('umb', '우산들', '우산은 here(여기)에 있어요.'), C('ship', '바다 위의 배들'), C('tree', '나무', '나무는 here나 at sea라는 말 없이 나와요.')], '멀리 있는 곳', ['umb', 'ship'])),
                ],
              },
              {
                id: 'a2', title: '활동 2. 감상 메모를 가르고 내 감상 쓰기', minutes: 16, tool: 'wordcards',
                teacher: '"친구들의 감상 메모를 두 칸으로 나눠요: 구절 + 생각이 있는 메모, 뜻만 적은 메모." 지난 시간 기준을 칠판에서 다시 읽는다. 구절 없이 생각만 있는 메모는 도전 단계에서 나오며 어느 칸에도 넣지 않는다고 알려 준다. 마지막 문항에서 공책에 내 감상 한 줄을 쓰고 짝과 바꾸어 기준대로 확인해 준다.',
                task: '감상 메모를 "구절 + 생각" 칸과 "뜻만" 칸으로 나눠요. 마지막에는 내 감상 한 줄을 써요.',
                levels: LV({ mode: 'sort', slots: ['구절 + 생각', '뜻만'] }),
                items: [
                  Object.assign({ prompt: '감상 메모를 두 칸으로 나눠 보세요.',
                    target: { sort: { '구절 + 생각': ['m1', 'm3'], 뜻만: ['m2', 'm4'] } }, difficulty: 0.2,
                    hints: ['메모마다 따옴표 속 구절이 있는지, 그 뒤에 "~ 같다", "~ 떠올랐다" 같은 내 생각이 있는지 봐요.', '놓은 메모 가운데 뜻을 풀었을 뿐인데 생각 칸에 넣은 것이 있는지 보세요.', '배가 젖는다는 생각, 우산이 꽃밭 같다는 생각은 구절 + 생각, field = 들판 같은 풀이는 뜻만이에요.'] },
                    CD([C('m1', '"on the ships at sea" — 바다 위 선원들도 비를 맞고 있을까 걱정됐다.'), C('m2', 'field = 들판, sea = 바다', '뜻만 풀었어요.'), C('m3', '"the umbrellas here" — 알록달록한 우산이 꽃밭처럼 떠올랐다.'), C('m4', '"all around"는 사방에라는 뜻이다.', '구절은 있지만 뜻만 적었어요.')], null, [C('m5', '비 오는 날이 싫다.', '시의 구절이 없어요. 어느 칸에도 넣지 않아요.')])),
                  Object.assign({ prompt: '감상 메모를 두 칸으로 나눠 보세요.',
                    target: { sort: { '구절 + 생각': ['n2', 'n3'], 뜻만: ['n1', 'n4'] } }, difficulty: 0.3,
                    hints: ['생각은 나의 일(떠오른 것, 하고 싶은 것, 궁금한 것)로 나와요. 시의 말을 다시 풀어 쓴 것은 생각이 아니에요.', '놓은 메모 가운데 "비가 나무에 떨어진다는 뜻이다"처럼 풀이만 한 것을 생각 칸에 넣지 않았는지 보세요.', '나도 바다를 보고 싶다, 비가 온 세상을 씻어 주는 것 같다는 구절 + 생각이에요.'],
                    predict: { q: '"비가 나무에 떨어진다는 뜻이다"는 내 생각일까요?', options: ['내 생각이에요', '뜻 풀이예요'], answer: 1 },
                    conclude: '시의 말을 다시 풀어 쓴 것은 뜻 풀이예요. 나에게 떠오른 것을 보태야 내 생각이 돼요.' },
                    CD([C('n1', '"It falls on field and tree" — 비가 들판과 나무에 떨어진다는 뜻이다.', '구절의 뜻을 풀었을 뿐이에요.'), C('n2', '"the ships at sea" — 나도 비 오는 바다를 배에서 보고 싶다.'), C('n3', '"raining all around" — 비가 온 세상을 씻어 주는 것 같다.'), C('n4', 'umbrella = 우산', '뜻만 적었어요.')], null, [C('n5', '나는 비 오는 날 집에 있는 것이 좋다.', '시의 구절이 없어요. 어느 칸에도 넣지 않아요.')])),
                  { prompt: '공책에 시 Rain에서 마음에 남은 구절을 옮기고 내 생각을 한 문장 보태 쓰세요. 짝과 바꾸어 구절과 생각이 다 있는지 확인해 준 뒤 "다 했어요"를 누르세요.', free: true },
                ],
              },
            ],
          },
          {
            id: 'wrapup', title: '정리', minutes: 7,
            teacher: '"짝이 확인해 준 내 감상에 구절과 생각이 둘 다 있었나요?" 손을 들게 한다. 희망하는 학생 세 명만 감상 한 줄을 읽게 하고(한 명에 20초) "같은 시인데 떠오른 것이 모두 달랐지요? 다른 것이 틀린 것은 아니에요."라고 말한다. 그 뒤 출구 질문을 푼다.',
            exitTicket: [
              { type: 'tool', tool: 'wordcards', options: { mode: 'sort', shuffle: false, slots: ['구절 + 생각', '뜻만'], cards: [C('x1', '"on the umbrellas here" — 우리 반 우산꽂이가 떠올랐다.'), C('x2', 'ship = 배'), C('x3', '"all around" — 내 방 창문에도 비가 오는 것 같았다.')] }, prompt: '감상 메모를 두 칸으로 나눠 보세요.', target: { sort: { '구절 + 생각': ['x1', 'x3'], 뜻만: ['x2'] } }, difficulty: 0.2 },
              { type: 'choice', prompt: '시 Rain에 나오지 않는 곳은?', options: ['들판', '우산', '지붕'], answer: 2, difficulty: 0.2, explain: '시에는 field, tree, umbrellas, ships at sea가 나와요. 지붕은 없어요.' },
              { type: 'mood', prompt: '오늘 시를 듣고 감상 쓰기는 어땠나요?' },
            ],
          },
        ],
        worksheet: {
          title: '시 Rain — 내 감상 한 줄',
          items: [
            { type: 'table', prompt: '시를 듣고 비가 내리는 곳을 모두 쓰세요.', columns: ['영어', '뜻'], rows: 4, answer: 'field 들판 / tree 나무 / umbrellas 우산 / ships at sea 바다 위의 배' },
            { type: 'choice', prompt: '"뜻만" 적은 메모는?', options: ['"the ships at sea" — 선원들이 걱정됐다.', 'sea = 바다'], answer: 'sea = 바다' },
            { type: 'blank', prompt: '마음에 남은 구절: "___" — 내 생각: ___' },
            { type: 'draw', prompt: '시인이 떠올린 "비가 사방에 내리는" 장면을 그리세요.' },
          ],
          easy: {
            note: 'field 들판 · tree 나무 · umbrellas 우산 · ships at sea 바다 위의 배',
            items: [
              { type: 'choice', prompt: 'umbrella 의 뜻은?', options: ['우산', '배'], answer: '우산' },
              { type: 'table', prompt: '시에서 비가 내리는 곳 두 가지를 쓰세요.', columns: ['곳'], rows: 2 },
              { type: 'short', prompt: '마음에 남은 구절을 옮겨 쓰세요.' },
              { type: 'draw', prompt: '비가 오는 장면을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '고르거나 나눌 카드가 줄고, 맞게 놓으면 초록 테두리가 생기며 틀리면 까닭을 말하고 되돌아와요.',
          base: '시를 듣고 곳을 찾은 뒤, 감상 메모를 나누고 내 감상을 써요.',
          challenge: '시에 없는 곳(강, 자동차)과 구절 없이 생각만 쓴 메모가 더해져 카드 칸에 남겨 두어야 해요.',
        },
        teacherNotes: '저작권: "Rain"은 로버트 루이스 스티븐슨(Robert Louis Stevenson)의 시로 1885년 시집 A Child\'s Garden of Verses에 실렸으며 저작권이 끝났다. 전문: The rain is raining all around, / It falls on field and tree, / It rains on the umbrellas here, / And on the ships at sea. 감상 메모는 이 차시를 위해 지은 학생 예시다. 판정 기준(활동 2): 따옴표로 옮긴 구절 + 자기 생각이 있으면 "구절 + 생각", 뜻 풀이만 있으면(구절이 있어도) "뜻만", 구절이 없는 메모는 어느 칸에도 넣지 않는다. 자주 보이는 어려움: ① 시에 없는 곳을 내 경험으로 더한다 → 시에 들린 낱말만 고르게 한다. ② 구절의 뜻 풀이를 생각으로 여긴다 → "나에게 떠오른 것인가?"를 묻게 한다. ③ 감상 발표를 모두 하려 한다 → 짝 확인을 먼저 하고 희망자 셋만 듣는다.',
      }),

      // ───────────────────────── 33차시 (extend) ─────────────────────────
      lesson(33, S09, {
        title: '운율 낱말을 듣고 나만의 짧은 시 짓기',
        objective: '끝소리가 같은 낱말(rain–train, sun–fun)을 듣고 가려낸 뒤, 운율이 맞는 낱말로 두 줄 시를 완성하고 시의 분위기에 맞는 제목을 붙일 수 있다.',
        illustration: {
          prompt: PROMPT('a child writing a short poem in a notebook at a desk by the window, with small pictures of a sun, a cat on a mat and a train in the rain floating like thought bubbles'),
          scene: SCENE('rain · train · sun · fun', '끝소리가 같은 낱말로 시를 지어요', [
            { motif: 'sun', x: 410, y: 56, s: 0.7 }, { motif: 'cloud', x: 120, y: 62 }, { motif: 'house', x: 392, y: 216, color: 'sky' },
          ]),
        },
        stages: [
          {
            id: 'intro', title: '도입', minutes: 6,
            teacher: '"지난 시간 시 Rain의 둘째 줄 끝 tree와 넷째 줄 끝 sea를 소리 내어 읽어 볼까요?" 끝소리 /iː/가 같다는 것을 귀로 느끼게 한다. "시에서 줄 끝소리를 맞추는 것을 운율(rhyme)이라고 해요." 칠판에 cat–hat, rain–train을 적고 끝소리에 밑줄을 긋는다. "오늘은 운율 낱말을 듣고 가려낸 다음, 우리가 직접 두 줄 시를 지어요."',
            student: 'tree와 sea, cat과 hat은 무엇이 닮았을까요? 소리 내어 읽어 보고 닮은 곳을 찾아요.',
            demo: { tool: 'wordcards', options: LISTEN('cat, hat', [C('rhyme', '끝소리가 같아요'), C('diff', '끝소리가 달라요')], '들은 두 낱말'), sequence: [{ at: {} }, { at: { rhyme: 0 } }] },
          },
          {
            id: 'main', title: '전개', minutes: 27,
            activities: [
              {
                id: 'a1', title: '활동 1. 끝소리가 같은 낱말 고르기', minutes: 11, tool: 'wordcards',
                teacher: '"듣기 단추를 누르면 낱말 하나가 들려요. 그 낱말과 끝소리가 같은 카드를 모두 골라요." 첫 글자만 같은 낱말(rain–road)을 고르는 학생에게 "앞소리가 같나요, 끝소리가 같나요?"라고 묻는다. 3번은 철자는 달라도 소리가 같은 짝(blue–shoe)이 있어 눈이 아니라 귀로 골라야 한다고 알린다.',
                task: '듣기 단추로 낱말을 들어요. 그 낱말과 끝소리가 같은 카드를 모두 골라요.',
                levels: LV({ mode: 'listen', basket: '끝소리가 같은 낱말' }),
                items: [
                  Object.assign({ prompt: 'rain과 끝소리가 같은 낱말을 모두 골라 보세요.',
                    target: { listen: ['train', 'pain'] }, difficulty: 0.15,
                    hints: ['낱말의 맨 끝 소리를 길게 늘여 말해 보고 같은지 견주어요.', '고른 카드 가운데 앞소리만 같은 낱말이 있는지 소리 내어 다시 읽어 보세요.', 'r-ain, tr-ain, p-ain — 끝이 모두 -ain이에요.'] },
                    LI('rain', [C('train', 'train'), C('pain', 'pain'), C('road', 'road', '앞소리 r만 같아요. 끝소리는 달라요.'), C('run', 'run', '앞소리 r만 같아요.')], '끝소리가 같은 낱말', ['train', 'road'])),
                  Object.assign({ prompt: 'sun과 끝소리가 같은 낱말을 모두 골라 보세요.',
                    target: { listen: ['fun', 'run'] }, difficulty: 0.2,
                    hints: ['sun의 끝 -un을 길게 말해 보고 카드도 같은 끝으로 끝나는지 들어요.', '고른 카드 가운데 s로 시작해서 고른 낱말은 없는지 다시 보세요.', 'f-un, r-un — 끝이 -un이에요. sea와 sky는 앞소리만 같아요.'] },
                    LI('sun', [C('fun', 'fun'), C('run', 'run'), C('sea', 'sea', '앞소리 s만 같아요.'), C('sky', 'sky', '앞소리 s만 같아요.')], '끝소리가 같은 낱말', ['fun', 'sea'], [C('moon', 'moon', '-oon은 -un과 다른 소리예요.')])),
                  Object.assign({ prompt: 'blue와 끝소리가 같은 낱말을 모두 골라 보세요. 철자가 달라도 소리가 같으면 골라요.',
                    target: { listen: ['shoe', 'two'] }, difficulty: 0.3,
                    hints: ['철자는 보지 말고 소리 내어 읽어요. blue의 끝소리 /uː/가 나오는지 들어요.', '고른 카드를 소리 내어 읽어 보세요. 철자 -ue가 같아서 고른 것은 아닌가요?', 'sh-oe, t-wo는 철자는 달라도 /uː/로 끝나요. 같은 -e로 끝나는 blue와 bike는 소리가 달라요.'],
                    predict: { q: '철자가 다르면 운율도 다를까요?', options: ['철자가 다르면 달라요', '소리가 같으면 운율이에요'], answer: 1 },
                    conclude: '운율은 눈이 아니라 귀로 찾아요. 철자가 달라도 끝소리가 같으면 운율 낱말이에요.' },
                    LI('blue', [C('shoe', 'shoe'), C('two', 'two'), C('bike', 'bike', '끝 철자 e는 같지만 소리는 달라요.'), C('black', 'black', '앞소리 bl만 같아요.')], '끝소리가 같은 낱말', ['shoe', 'bike', 'black'])),
                ],
              },
              {
                id: 'a2', title: '활동 2. 운율 낱말로 두 줄 시 완성하고 제목 붙이기', minutes: 16, tool: 'story',
                teacher: '"두 줄 시의 빈칸에 둘째 줄 끝이 첫째 줄 끝과 운율이 맞는 낱말을 넣어요." 운율은 맞지만 뜻이 어울리지 않는 낱말을 넣은 학생에게 "소리는 맞는데 시의 장면과 어울리나요?"라고 묻는다. 3번은 시에 제목 카드를 넣는 문항이다. 다 한 뒤 공책에 나만의 두 줄 시를 지어 짝과 소리 내어 읽게 한다(넷째 문항).',
                task: '시의 빈칸에 운율과 뜻이 모두 맞는 낱말 카드를 넣어요. 마지막에는 나만의 시를 지어요.',
                levels: LV({ mode: 'fill', title: 'My Poem' }),
                items: [
                  Object.assign({ prompt: '"I see a cat. / It sits on a ___." 둘째 줄 끝에 운율과 뜻이 맞는 낱말을 넣어 보세요.',
                    target: { fill: { end: 'mat' } }, difficulty: 0.15,
                    hints: ['첫째 줄 끝 cat과 끝소리가 같으면서, 고양이가 앉을 수 있는 것을 찾아요.', '넣은 낱말이 cat과 끝소리가 같은지, 고양이가 그 위에 앉을 수 있는지 둘 다 보세요.', 'mat(깔개) — cat과 운율이 맞고 앉을 수 있어요.'] },
                    CD([C('mat', 'mat'), C('bed', 'bed', '앉을 수 있지만 cat과 운율이 맞지 않아요.'), C('bat', 'bat', '운율은 맞지만 박쥐 위에 앉지는 않아요.')], ['mat', 'bed'], null, null,
                      { slots: [{ id: 'l1', label: 'I see a cat.' }, { id: 'end', label: 'It sits on a ___.' }] })),
                  Object.assign({ prompt: '"The rain comes down. / I watch the ___ go by. / The sun comes out. / A bird flies in the ___." 두 빈칸을 채워 보세요.',
                    target: { fill: { e1: 'train', e2: 'sky' } }, difficulty: 0.25,
                    hints: ['이 시는 1·2줄이 아니라 줄 사이 낱말끼리 운율을 맞춰요: rain–?, by–?.', '넣은 낱말이 rain, by와 끝소리가 같은지, 장면과 어울리는지 보세요.', 'train(rain과 운율), sky(by와 운율)예요.'] },
                    CD([C('train', 'train'), C('sky', 'sky'), C('car', 'car', '지나갈 수 있지만 rain과 운율이 맞지 않아요.'), C('tree', 'tree', '새가 나는 곳이지만 by와 운율이 맞지 않아요.')], ['train', 'sky', 'car'], [C('pie', 'pie', '운율은 맞지만 새가 파이 안을 날지는 않아요.')], null,
                      { slots: [{ id: 'l1', label: 'The rain comes down.' }, { id: 'e1', label: 'I watch the ___ go by.' }, { id: 'l3', label: 'The sun comes out.' }, { id: 'e2', label: 'A bird flies in the ___.' }] })),
                  Object.assign({ prompt: '"Snow on the hill, / snow on my nose. / I make a snowman / from head to toes." 이 시의 분위기에 맞는 제목을 넣어 보세요.',
                    target: { fill: { title: 'happy' } }, difficulty: 0.3,
                    hints: ['시에 나온 장면(눈, 눈사람 만들기)과 그 장면의 기분을 함께 떠올려요.', '넣은 제목이 시의 장면을 담는지, 시에 없는 일을 말하지는 않는지 보세요.', 'A Happy Snow Day — 눈사람을 만드는 즐거운 날이에요.'],
                    predict: { q: '제목은 시에 나온 낱말만 쓸 수 있을까요?', options: ['시의 낱말만 써요', '장면과 기분을 담아요'], answer: 1 },
                    conclude: '제목은 시의 장면과 분위기를 한눈에 알려 줘요. 시에 없는 일을 제목으로 쓰지 않아요.' },
                    CD([C('happy', 'A Happy Snow Day'), C('summer', 'Hot Summer Beach', '시에는 눈이 나와요. 여름 바다는 없어요.'), C('lost', 'My Lost Snowman', '눈사람을 잃어버린 이야기는 없어요.')], ['happy', 'summer'], null, null,
                      { slots: [{ id: 'title', label: 'Title: ___' }] })),
                  { prompt: '공책에 운율이 맞는 두 줄 시를 짓고 제목을 붙이세요. 짝에게 소리 내어 읽어 주고, 짝이 끝소리가 같은지 확인해 주면 "다 했어요"를 누르세요.', free: true, talk: true },
                ],
              },
            ],
          },
          {
            id: 'wrapup', title: '정리', minutes: 7,
            teacher: '"운율 낱말은 눈으로 찾나요, 귀로 찾나요?" 귀라는 대답을 칠판에 적는다. 희망하는 학생 세 명이 자기 두 줄 시를 읽고, 듣는 학생은 운율 낱말이 들리면 손뼉을 한 번 치게 한다. 운율은 맞지만 뜻이 어색했던 경우가 있었는지 한 명에게 묻는다. 그 뒤 출구 질문을 푼다.',
            exitTicket: [
              { type: 'tool', tool: 'wordcards', options: LISTEN('night', [C('light', 'light'), C('nest', 'nest'), C('note', 'note')], '끝소리가 같은 낱말'), prompt: 'night와 끝소리가 같은 낱말을 골라 보세요.', target: { listen: 'light' }, difficulty: 0.2 },
              { type: 'choice', prompt: '"I like my dog. / We run in the ___." 운율과 뜻이 모두 맞는 낱말은?', options: ['park', 'fog', 'frog'], answer: 1, difficulty: 0.3, explain: 'dog–fog는 끝소리가 같고 안개 속을 달릴 수 있어요. frog도 운율은 맞지만 개구리 안을 달리지는 않아요.' },
              { type: 'mood', prompt: '오늘 나만의 시 짓기는 어땠나요?' },
            ],
          },
        ],
        worksheet: {
          title: '나의 두 줄 시',
          items: [
            { type: 'table', prompt: '낱말과 끝소리가 같은 낱말을 하나씩 쓰세요.', columns: ['낱말', '끝소리가 같은 낱말'], cells: [['cat', ''], ['rain', ''], ['sun', '']], answer: 'hat·mat / train·pain / fun·run (끝소리가 같으면 정답)' },
            { type: 'choice', prompt: 'blue와 운율이 맞는 낱말은?', options: ['bike', 'shoe', 'black'], answer: 'shoe' },
            { type: 'blank', prompt: '제목: ___ / 첫째 줄: ___ / 둘째 줄: ___ (끝소리를 맞추세요)' },
            { type: 'draw', prompt: '내가 지은 시의 장면을 그리세요.' },
          ],
          easy: {
            note: '운율 짝: cat–hat · rain–train · sun–fun · night–light',
            items: [
              { type: 'choice', prompt: 'cat과 끝소리가 같은 낱말은?', options: ['hat', 'cup'], answer: 'hat' },
              { type: 'blank', prompt: 'I see the sun. / It is so ___. (운율이 맞는 낱말)' },
              { type: 'short', prompt: '내 시의 제목을 영어로 쓰세요.' },
              { type: 'draw', prompt: '시의 장면을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '고를 카드가 줄고, 맞게 놓으면 초록 테두리가 생기며 틀리면 까닭을 말하고 되돌아와요.',
          base: '운율 낱말을 듣고 고른 뒤, 두 줄 시의 빈칸과 제목을 채우고 나만의 시를 지어요.',
          challenge: '앞소리만 같은 낱말, 운율은 맞지만 뜻이 어색한 낱말(pie, frog)이 더해져 소리와 뜻을 모두 따져요.',
        },
        teacherNotes: '시와 낱말 목록은 모두 이 차시를 위해 지은 것이다. 듣기 대본: 활동 1 ① rain ② sun ③ blue / 출구 night. 운율 판정 기준: 낱말의 마지막 모음과 그 뒤 소리가 같으면 운율로 본다(철자는 따지지 않는다). 활동 2는 운율과 뜻(장면에 어울림)을 함께 따진다 — 운율만 맞는 카드(bat, pie)는 오답이다. 넷째 문항은 정답이 없는 창작이며 짝 확인으로 마친다. 자주 보이는 어려움: ① 첫 글자가 같은 낱말을 운율로 여긴다 → 끝소리를 길게 늘여 말하게 한다. ② 철자로만 판단한다(blue–bike) → 소리 내어 읽고 판단하게 한다. ③ 소리만 맞추고 뜻이 엉뚱한 시를 짓는다 → "그 장면이 그려지나?"를 묻는다.',
      }),

      // ───────────────────────── 34차시 (extend) ─────────────────────────
      lesson(34, S09, {
        title: '좋아하는 구절과 떠오른 일을 차례대로 말하기',
        objective: '"My favorite line is …" "It reminds me of …" "I feel …" 틀에 맞추어 감상 말하기의 차례를 정리하고, 친구의 감상을 듣고 구절과 떠오른 일을 찾아낼 수 있다.',
        illustration: {
          prompt: PROMPT('two students sitting face to face sharing their favorite lines from a poem book, one speaking with speech bubbles showing a line from the poem, a memory picture and a smiling face in order'),
          scene: SCENE('My favorite line is …', '구절 → 떠오른 일 → 느낌', [
            { motif: 'leaf', x: 90, y: 200 }, { motif: 'star', x: 400, y: 60 }, { motif: 'tree', x: 400, y: 214 },
          ]),
        },
        stages: [
          {
            id: 'intro', title: '도입', minutes: 6,
            teacher: '"지난 두 시간 감상 메모에 들어간 두 가지는 무엇이었나요?" 구절과 내 생각이라는 대답을 듣는다. "오늘은 그것을 영어로 말해요. 말할 때는 차례가 있어요." 칠판에 ① My favorite line is "___." ② It reminds me of ___. ③ I feel ___. 을 적고 교사가 Who Has Seen the Wind?로 한 번 시범을 보인다. 차례가 바뀌면 듣는 사람이 무엇을 헷갈릴지 묻는다.',
            student: '감상을 말할 때 무엇을 먼저 말하면 듣는 사람이 알아듣기 쉬울까요?',
            demo: { tool: 'wordcards', options: LISTEN('My favorite line is "The wind is passing by."', [C('line', '좋아하는 구절'), C('feel', '나의 느낌')], '먼저 말한 것'), sequence: [{ at: {} }, { at: { line: 0 } }] },
          },
          {
            id: 'main', title: '전개', minutes: 27,
            activities: [
              {
                id: 'a1', title: '활동 1. 감상 말하기 문장을 차례대로 놓기', minutes: 12, tool: 'story',
                teacher: '"흩어진 감상 문장을 구절 → 떠오른 일 → 느낌 차례로 놓아요." It reminds me of를 맨 앞에 놓은 학생에게 "무엇이 떠올랐다는 건지, 듣는 사람이 알까요?"라고 묻는다. 3번은 이유 문장(because)이 하나 더 있어 네 칸이다. 다 놓은 뒤 짝에게 그 차례대로 소리 내어 읽어 주게 한다.',
                task: '감상 문장 카드를 구절 → 떠오른 일 → 느낌의 차례로 놓아요.',
                levels: { easy: { mode: 'order', live: true, instant: true }, base: { mode: 'order' }, challenge: { mode: 'order' } },
                items: [
                  { prompt: '시 Rain에 대한 수아의 감상이에요. 차례대로 놓아 보세요.',
                    toolOptions: { slots: ['구절', '떠오른 일', '느낌'], cards: [{ id: 'line', text: 'My favorite line is "the umbrellas here."' }, { id: 'remind', text: 'It reminds me of my yellow umbrella.' }, { id: 'feel', text: 'I feel happy.' }] },
                    target: { order: ['line', 'remind', 'feel'] }, difficulty: 0.15,
                    hints: ['칠판 틀의 ①②③ 첫 낱말(My favorite line, It reminds me, I feel)을 카드에서 찾아요.', '놓은 카드의 첫 낱말이 칸 이름과 맞는지 보세요.', 'My favorite line → It reminds me of → I feel 차례예요.'] },
                  { prompt: '시 Who Has Seen the Wind?에 대한 민호의 감상이에요. 차례대로 놓아 보세요.',
                    toolOptions: { slots: 3, cards: [{ id: 'feel', text: 'I feel calm.', sub: '느낌' }, { id: 'line', text: 'My favorite line is "the leaves hang trembling."' }, { id: 'remind', text: 'It reminds me of a windy day at the beach.' }] },
                    target: { order: ['line', 'remind', 'feel'] }, difficulty: 0.2,
                    hints: ['구절이 먼저 나와야 It(그것)이 무엇을 가리키는지 알 수 있어요.', 'It reminds me of의 It이 가리키는 구절이 그 앞에 놓였는지 보세요.', '구절(leaves) → 떠오른 일(바닷가) → 느낌(calm)이에요.'] },
                  { prompt: '시 Rain에 대한 하준의 감상이에요. 이유 문장까지 네 칸에 차례대로 놓아 보세요.',
                    toolOptions: { slots: ['구절', '떠오른 일', '느낌', '이유'], cards: [{ id: 'line', text: 'My favorite line is "the ships at sea."' }, { id: 'remind', text: 'It reminds me of my trip to Jeju.' }, { id: 'feel', text: 'I feel excited.' }, { id: 'why', text: 'Because I want to ride a big ship again.' }] },
                    target: { order: ['line', 'remind', 'feel', 'why'] }, difficulty: 0.3,
                    hints: ['Because는 앞 문장의 까닭을 말해요. 어느 문장의 까닭인지 찾아 그 뒤에 놓아요.', '이유 카드가 느낌 바로 뒤에 놓였는지, 신나는 까닭과 이어지는지 보세요.', '구절 → 제주 여행 → excited → Because I want to ride a big ship again이에요.'],
                    predict: { q: 'Because 문장은 어느 문장 뒤에 와야 할까요?', options: ['맨 앞', '느낌 바로 뒤'], answer: 1 },
                    conclude: 'Because 문장은 느낌의 까닭이라 느낌 바로 뒤에 와요. 감상에 이유를 보태면 더 또렷해져요.' },
                ],
              },
              {
                id: 'a2', title: '활동 2. 친구의 감상을 듣고 구절과 떠오른 일 찾기', minutes: 15, tool: 'wordcards',
                teacher: '"친구의 감상 말하기를 들어요. 친구가 고른 구절과, 그 구절로 떠오른 일을 찾아요." 듣는 동안 공책에 구절·떠오른 일·느낌 세 칸을 그려 적게 한다. 시에 있는 다른 구절을 고르는 학생에게 "친구가 favorite line이라고 말한 구절이 그것이었나요?"라고 묻는다. 끝나면 짝끼리 자기 감상을 틀대로 30초씩 말하게 한다(넷째 문항).',
                task: '친구의 감상을 듣고 물음에 맞는 카드를 골라요.',
                levels: LV({ mode: 'listen', basket: '찾은 것' }),
                items: [
                  Object.assign({ prompt: '지호의 감상을 들어요. 지호가 좋아하는 구절은 무엇인가요?',
                    target: { listen: 'bow' }, difficulty: 0.15,
                    hints: ['My favorite line is 바로 뒤에 나오는 구절을 들어요.', '고른 구절이 favorite line 뒤에 들렸는지, 시의 다른 구절은 아닌지 다시 들어 보세요.', 'My favorite line is "the trees bow down their heads."'] },
                    LI('My favorite line is "the trees bow down their heads." It reminds me of my grandpa. He always bows to his neighbors. I feel warm.', [C('bow', '"the trees bow down their heads"'), C('leaves', '"the leaves hang trembling"', '시에 있는 구절이지만 지호가 고른 구절은 아니에요.'), C('who', '"Who has seen the wind?"', '지호가 고른 구절이 아니에요.')], '좋아하는 구절', ['bow', 'leaves'])),
                  Object.assign({ prompt: '지호의 감상을 다시 들어요. 그 구절로 지호에게 떠오른 일은 무엇인가요?',
                    target: { listen: 'grandpa' }, difficulty: 0.2,
                    hints: ['It reminds me of 바로 뒤를 들어요. 그 뒤 문장은 떠오른 사람을 더 설명해요.', '고른 카드가 reminds me of 뒤에 나온 것인지, 느낌(I feel)과 섞이지 않았는지 보세요.', 'It reminds me of my grandpa. He always bows to his neighbors.'] },
                    LI('My favorite line is "the trees bow down their heads." It reminds me of my grandpa. He always bows to his neighbors. I feel warm.', [C('grandpa', '이웃에게 늘 인사하는 할아버지'), C('tree', '나무를 심던 날', '나무 심기 이야기는 없어요.'), C('warm', '따뜻한 날씨', 'warm은 지호의 느낌이에요. 날씨 이야기가 아니에요.')], '떠오른 일', ['grandpa', 'warm'])),
                  Object.assign({ prompt: '예나의 감상을 들어요. 예나가 신이 난 까닭은 무엇인가요?',
                    target: { listen: 'sail' }, difficulty: 0.3,
                    hints: ['I feel 뒤의 느낌을 잡고, 그 뒤 because 다음을 들어요.', '고른 까닭이 because 뒤에 나온 것인지, 떠오른 일(reminds me of)과 섞이지 않았는지 보세요.', 'because I want to sail on the sea someday — 언젠가 바다에서 배를 타고 싶어서예요.'],
                    predict: { q: '떠오른 일과 느낌의 까닭은 늘 같을까요?', options: ['늘 같아요', '다를 수 있어요'], answer: 1 },
                    conclude: '떠오른 일(reminds me of)과 느낌의 까닭(because)은 다를 수 있어요. 각각 따로 들어요.' },
                    LI('My favorite line is "on the ships at sea." It reminds me of a picture book about pirates. I feel excited because I want to sail on the sea someday.', [C('sail', '언젠가 바다에서 배를 타고 싶어서'), C('pirate', '해적 그림책', '이것은 떠오른 일이에요. 신이 난 까닭은 because 뒤에 있어요.'), C('rain', '비가 좋아서', '비가 좋다는 말은 없어요.')], '신이 난 까닭', ['sail', 'pirate'])),
                  { prompt: '짝에게 내가 좋아하는 시의 구절로 감상을 말하세요(My favorite line is … It reminds me of … I feel …). 짝이 세 가지를 다 들었다고 확인해 주면 "다 했어요"를 누르세요.', free: true, talk: true },
                ],
              },
            ],
          },
          {
            id: 'wrapup', title: '정리', minutes: 7,
            teacher: '"짝의 감상에서 구절, 떠오른 일, 느낌을 다 들었나요?" 손가락 세 개로 확인하게 한다. 희망하는 학생 두 명의 감상을 듣고, 차례대로 말하니 무엇이 좋았는지 한 명에게 묻는다. 그 뒤 출구 질문을 푼다.',
            exitTicket: [
              { type: 'tool', tool: 'wordcards', options: LISTEN('My favorite line is "The rain is raining all around." It reminds me of the rainy sports day. I feel a little sad.', [C('sports', '비 오던 운동회 날'), C('rain', '"The rain is raining all around."'), C('sad', '조금 슬퍼요')], '떠오른 일'), prompt: '감상을 듣고, 그 구절로 떠오른 일을 골라 보세요.', target: { listen: 'sports' }, difficulty: 0.2 },
              { type: 'choice', prompt: '감상 말하기에서 맨 먼저 말하면 좋은 것은?', options: ['I feel …', 'It reminds me of …', 'My favorite line is …'], answer: 2, difficulty: 0.15, explain: '구절을 먼저 말해야 듣는 사람이 무엇이 떠올랐는지 따라올 수 있어요.' },
              { type: 'mood', prompt: '오늘 영어로 감상 말하기는 어땠나요?' },
            ],
          },
        ],
        worksheet: {
          title: '나의 감상 말하기 틀',
          items: [
            { type: 'table', prompt: '내 감상을 틀에 맞추어 쓰세요.', columns: ['차례', '영어 문장'], cells: [['구절', 'My favorite line is "___."'], ['떠오른 일', 'It reminds me of ___.'], ['느낌', 'I feel ___.']] },
            { type: 'choice', prompt: '"It reminds me of my grandpa." 에서 It이 가리키는 것은?', options: ['앞에서 말한 구절', '할아버지', '느낌'], answer: '앞에서 말한 구절' },
            { type: 'blank', prompt: 'I feel ___ because ___.' },
            { type: 'short', prompt: '짝의 감상에서 들은 구절과 떠오른 일을 한국어로 쓰세요.' },
          ],
          easy: {
            note: '① My favorite line is "…" ② It reminds me of … ③ I feel …',
            items: [
              { type: 'blank', prompt: 'My favorite line is "___."' },
              { type: 'blank', prompt: 'It reminds me of ___. (한국어로 써도 좋아요)' },
              { type: 'choice', prompt: '느낌을 말하는 문장은?', options: ['I feel happy.', 'It reminds me of my dog.'], answer: 'I feel happy.' },
            ],
          },
        },
        differentiation: {
          easy: '칸 이름이 보이고, 맞게 놓으면 초록 테두리가 생기며 틀리면 까닭을 말하고 되돌아와요.',
          base: '감상 문장을 차례대로 놓고, 친구의 감상을 듣고 구절과 떠오른 일을 고른 뒤 확인을 눌러요.',
          challenge: '이유(because) 문장이 더해진 네 칸 차례와, 떠오른 일과 느낌의 까닭을 가려 듣는 카드가 남아요.',
        },
        teacherNotes: '감상 예시는 모두 이 차시를 위해 지은 것이며, 인용한 구절은 로세티 "Who Has Seen the Wind?"(1872)와 스티븐슨 "Rain"(1885)의 공유 저작물에서 왔다. 듣기 대본: 활동 2 ①② My favorite line is "the trees bow down their heads." It reminds me of my grandpa. He always bows to his neighbors. I feel warm. ③ My favorite line is "on the ships at sea." It reminds me of a picture book about pirates. I feel excited because I want to sail on the sea someday. 출구: My favorite line is "The rain is raining all around." It reminds me of the rainy sports day. I feel a little sad. 자주 보이는 어려움: ① It reminds me of를 맨 앞에 쓴다 → It이 가리키는 것을 묻는다. ② warm 같은 느낌 낱말을 떠오른 일로 고른다 → I feel 뒤인지 reminds me of 뒤인지 확인한다.',
      }),

      // ───────────────────────── 35차시 (core) ─────────────────────────
      lesson(35, S10, {
        title: '비 오는 날 현장학습, 두 친구의 다른 생각 듣기',
        objective: '같은 일(비 오는 날의 현장학습)에 대한 두 친구의 대화를 듣고, 각자의 생각과 그 까닭을 가려내며, 생각이 달라도 둘 다 까닭이 있다는 것을 말할 수 있다.',
        illustration: {
          prompt: PROMPT('two classmates standing under a school entrance roof on a rainy morning, one smiling with rain boots and an umbrella, the other looking worried at the clouds, with a bus waiting'),
          scene: SCENE('It\'s raining on our field trip day!', '같은 비, 다른 생각', [
            { motif: 'cloud', x: 300, y: 60 }, { motif: 'tree', x: 82, y: 212 }, { motif: 'house', x: 392, y: 216, color: 'sky' },
          ]),
        },
        stages: [
          {
            id: 'intro', title: '도입', minutes: 6,
            teacher: '"현장학습 날 아침에 비가 온다면 어떤 생각이 들까요?" 아쉽다, 오히려 좋다는 대답을 칠판 양쪽에 나누어 적는다. "같은 비인데 생각이 갈렸지요. 누가 맞을까요?" 둘 다 까닭이 있다는 말이 나오면 동그라미를 친다. "오늘은 비 오는 날 현장학습을 두고 이야기하는 두 친구의 대화를 듣고, 각자의 생각과 그 까닭을 찾아요." I think …, because …, In my opinion …을 칠판에 적는다.',
            student: '현장학습 날 비가 오면 어떤 생각이 들까요? 친구는 나와 다르게 생각할 수 있을까요?',
            demo: { tool: 'wordcards', options: LISTEN('I think the rain is fun. We can jump in puddles!', [C('fun', '비가 재미있다'), C('bad', '비가 싫다')], 'Amy의 생각'), sequence: [{ at: {} }, { at: { fun: 0 } }] },
          },
          {
            id: 'main', title: '전개', minutes: 27,
            activities: [
              {
                id: 'a1', title: '활동 1. 두 친구의 생각과 까닭 듣기', minutes: 13, tool: 'wordcards',
                teacher: '"대화를 듣고 물음이 묻는 사람(Amy 또는 Ben)의 말만 골라 들어요." 첫 문항 전에 I think, because 뒤에 생각과 까닭이 온다는 것을 다시 짚는다. 두 사람의 말을 섞어 고르는 학생에게 "그 말은 누가 했나요?"라고 묻는다. 대화 대본을 화면에 띄우지 말고 소리로만 듣게 하고, 소리가 없으면 교사가 두 목소리로 읽는다.',
                task: '대화를 들어요. 물음이 묻는 사람의 생각이나 까닭 카드를 골라요.',
                levels: LV({ mode: 'listen', basket: '들은 것' }),
                items: [
                  Object.assign({ prompt: 'Ben은 비 오는 날 현장학습을 어떻게 생각하나요? 듣고 골라 보세요.',
                    target: { listen: 'cancel' }, difficulty: 0.15,
                    hints: ['Ben이 말하는 대목에서 I think 바로 뒤를 들어요.', '고른 생각이 Ben이 한 말인지, Amy가 한 말인지 다시 들어 보세요.', 'Ben: I think we should cancel the trip. — 취소해야 한다고 생각해요.'] },
                    LI('Amy: It\'s raining! I think the trip will be more fun. Ben: Really? I think we should cancel the trip.', [C('cancel', '현장학습을 취소해야 한다'), C('fun', '더 재미있을 것이다', 'Amy의 생각이에요.'), C('later', '오후에 가면 된다', '이런 말은 없어요.')], 'Ben의 생각', ['cancel', 'fun'])),
                  Object.assign({ prompt: 'Ben이 그렇게 생각하는 까닭은 무엇인가요? 듣고 모두 골라 보세요.',
                    target: { listen: ['wet', 'slip'] }, difficulty: 0.25,
                    hints: ['Ben의 because 뒤를 들어요. 까닭이 and로 두 개 이어져요.', '고른 까닭이 Ben의 because 뒤에 들렸는지, Amy의 까닭과 섞이지 않았는지 보세요.', 'because our clothes will get wet and the path will be slippery — 옷이 젖고 길이 미끄러워서예요.'] },
                    LI('Ben: I think we should cancel the trip because our clothes will get wet and the path will be slippery. Amy: But we can wear raincoats!', [C('wet', '옷이 젖을 것이다'), C('slip', '길이 미끄러울 것이다'), C('coat', '비옷을 입을 수 있다', 'Amy가 한 말이에요.')], 'Ben의 까닭', null, [C('cold', '감기에 걸릴 것이다', '감기 이야기는 없어요.')])),
                  Object.assign({ prompt: 'Amy가 비 오는 날 현장학습이 더 좋다고 하는 까닭은 무엇인가요? 듣고 모두 골라 보세요.',
                    target: { listen: ['frog', 'quiet'] }, difficulty: 0.3,
                    hints: ['Amy의 because와 Also(또) 뒤를 들어요. 까닭이 두 문장으로 나와요.', '고른 까닭이 Amy가 한 말인지, Ben의 걱정(wet, slippery)은 아닌지 다시 들어 보세요.', '비 오는 날에만 개구리와 달팽이를 볼 수 있고, 숲이 조용해서예요.'],
                    predict: { q: '두 사람 가운데 한 사람만 까닭이 있을까요?', options: ['한 사람만 있어요', '둘 다 까닭이 있어요'], answer: 1 },
                    conclude: '생각이 반대여도 Amy와 Ben은 둘 다 까닭이 있어요. 까닭을 들으면 친구의 생각이 이해돼요.' },
                    LI('Amy: I like rainy days because we can see frogs and snails. They only come out in the rain. Also, the forest will be quiet. Ben: Hmm, that sounds interesting.', [C('frog', '개구리와 달팽이를 볼 수 있다'), C('quiet', '숲이 조용할 것이다'), C('wet', '옷이 젖는다', 'Ben의 걱정이에요.'), C('bus', '버스가 빨리 간다', '버스 이야기는 없어요.')], 'Amy의 까닭', ['frog', 'quiet', 'wet'])),
                ],
              },
              {
                id: 'a2', title: '활동 2. 누구의 생각인지 나누기', minutes: 14, tool: 'wordcards',
                teacher: '"대화에서 나온 말을 Amy의 생각 칸과 Ben의 생각 칸으로 나눠요." 둘 다 동의한 말(선생님께 여쭈어 보자)이 나오는 문항이 있어 "어느 칸에도 넣지 않아도 되는 카드도 있어요."라고 알려 준다. 다 나눈 뒤 "나는 누구 생각에 더 가까운가요? 까닭은?"을 짝과 한 문장씩 말하게 한다.',
                task: '대화에서 나온 말 카드를 누구의 생각인지 두 칸으로 나눠요.',
                levels: LV({ mode: 'sort', slots: ['Amy', 'Ben'] }),
                items: [
                  Object.assign({ prompt: '대화에서 나온 말을 누가 했는지 나눠 보세요.',
                    target: { sort: { Amy: ['a1', 'a2'], Ben: ['b1', 'b2'] } }, difficulty: 0.2,
                    hints: ['활동 1에서 들은 Amy의 까닭(개구리, 조용한 숲)과 Ben의 까닭(젖음, 미끄러움)을 떠올려요.', '놓은 카드 가운데 Amy의 칸에 걱정하는 말이 들어가지 않았는지 보세요.', 'Amy: 더 재미있다, 개구리를 볼 수 있다 / Ben: 취소하자, 길이 미끄럽다.'] },
                    CD([C('a1', '비 오는 날이 더 재미있을 거야.'), C('a2', '개구리와 달팽이를 볼 수 있어.'), C('b1', '현장학습을 취소해야 해.'), C('b2', '길이 미끄러울 거야.')], ['a1', 'b1'])),
                  Object.assign({ prompt: '대화의 뒷부분이에요. 누가 한 말인지 나눠 보세요. 둘이 함께 한 말은 남겨 두어요.',
                    target: { sort: { Amy: ['a3'], Ben: ['b3'] } }, difficulty: 0.3,
                    hints: ['뒷부분에서 Amy는 비옷 이야기를, Ben은 실내 활동 이야기를 했어요. 마지막에 둘이 함께 정한 일도 있어요.', '둘이 함께 정한 말(선생님께 여쭈어 보자)을 한 사람의 칸에 넣지 않았는지 보세요.', 'Amy: 비옷과 장화를 신으면 돼 / Ben: 박물관처럼 실내로 가면 좋겠어 / 함께: 선생님께 여쭈어 보자.'],
                    predict: { q: '생각이 다른 두 친구가 함께 정한 것이 있을까요?', options: ['있을 수 없어요', '있을 수 있어요'], answer: 1 },
                    conclude: '생각이 달라도 서로 까닭을 들으면 함께 정할 수 있는 방법(선생님께 여쭈어 보기)을 찾을 수 있어요.' },
                    CD([C('a3', '비옷과 장화를 신으면 괜찮아.'), C('b3', '박물관처럼 실내로 가면 좋겠어.'), C('both', '선생님께 여쭈어 보자.', '둘이 함께 한 말이에요. 어느 칸에도 넣지 않아요.')], null, [C('none', '현장학습은 원래 재미없어.', '두 사람 모두 이런 말을 하지 않았어요.')])),
                  { prompt: '나는 Amy와 Ben 가운데 누구의 생각에 더 가까운지 "I agree with ___ because ___." 로 짝에게 말하세요. 짝의 까닭도 듣고 "다 했어요"를 누르세요.', free: true, talk: true },
                ],
              },
            ],
          },
          {
            id: 'wrapup', title: '정리', minutes: 7,
            teacher: '"Amy와 Ben 가운데 틀린 사람이 있었나요?" 둘 다 까닭이 있었다는 말을 끌어낸다. 내 짝은 누구 편이었는지, 짝의 까닭을 듣고 생각이 조금이라도 바뀐 학생이 있는지 손을 들게 한다. 그 뒤 출구 질문을 푼다.',
            exitTicket: [
              { type: 'tool', tool: 'wordcards', options: LISTEN('Mina: I think the field trip should be on a sunny day because we can have lunch outside.', [C('lunch', '밖에서 점심을 먹을 수 있어서'), C('rain', '비가 좋아서'), C('bus', '버스가 커서')], 'Mina의 까닭'), prompt: '미나가 맑은 날 현장학습을 가자고 하는 까닭은 무엇인가요?', target: { listen: 'lunch' }, difficulty: 0.2 },
              { type: 'choice', prompt: '친구의 생각이 나와 다를 때 먼저 할 일로 알맞은 것은?', options: ['친구의 까닭을 끝까지 들어요', '친구가 틀렸다고 말해요', '대화를 그만해요'], answer: 0, difficulty: 0.1, explain: '까닭을 들어야 친구의 생각을 이해하고 함께 정할 수 있어요.' },
              { type: 'mood', prompt: '오늘 두 친구의 다른 생각을 들어 보니 어땠나요?' },
            ],
          },
        ],
        worksheet: {
          title: '비 오는 날 현장학습 — 두 생각',
          items: [
            { type: 'table', prompt: '두 친구의 생각과 까닭을 쓰세요.', columns: ['이름', '생각', '까닭'], cells: [['Amy', '', ''], ['Ben', '', '']], answer: 'Amy: 더 재미있다 / 개구리·달팽이, 조용한 숲 · Ben: 취소하자 / 옷이 젖고 길이 미끄럽다' },
            { type: 'choice', prompt: '두 친구가 함께 정한 것은?', options: ['선생님께 여쭈어 보기', '현장학습 취소', '비옷 사기'], answer: '선생님께 여쭈어 보기' },
            { type: 'blank', prompt: 'I agree with ___ because ___.' },
            { type: 'short', prompt: '내 생각과 다른 친구에게 해 줄 수 있는 말을 영어 한 문장으로 쓰세요.' },
          ],
          easy: {
            note: 'I think … (생각) · because … (까닭) · I agree with … (~와 같은 생각이에요)',
            items: [
              { type: 'table', prompt: '두 친구의 생각을 쓰세요.', columns: ['Amy', 'Ben'], cells: [['', '']], answer: '더 재미있다 / 취소하자' },
              { type: 'choice', prompt: 'because 뒤에 오는 것은?', options: ['까닭', '이름'], answer: '까닭' },
              { type: 'short', prompt: '나는 누구의 생각에 더 가까운지 이름을 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '고르거나 나눌 카드가 줄고, 맞게 놓으면 초록 테두리가 생기며 틀리면 까닭을 말하고 되돌아와요.',
          base: '대화를 듣고 두 친구의 생각과 까닭을 고른 뒤, 누구의 말인지 나누어요.',
          challenge: '대화에 없는 그럴듯한 까닭(감기)과 둘이 함께 한 말, 아무도 하지 않은 말이 더해져 칸 밖에 남겨 두어야 해요.',
        },
        teacherNotes: '대화는 이 차시를 위해 지은 것이다. 듣기 대본: ① Amy: It\'s raining! I think the trip will be more fun. Ben: Really? I think we should cancel the trip. ② Ben: I think we should cancel the trip because our clothes will get wet and the path will be slippery. Amy: But we can wear raincoats! ③ Amy: I like rainy days because we can see frogs and snails. They only come out in the rain. Also, the forest will be quiet. Ben: Hmm, that sounds interesting. (활동 2 뒷부분: Amy — We can wear raincoats and rain boots. Ben — Maybe we can go somewhere inside, like a museum. Both — Let\'s ask our teacher.) 출구: Mina: I think the field trip should be on a sunny day because we can have lunch outside. 이 차시의 초점은 누가 옳은지 가리는 것이 아니라 관점과 까닭을 듣는 것이다. 자주 보이는 어려움: ① 두 사람의 말을 섞는다 → 이름이 들리면 손을 바꾸어 들게 한다. ② 내 생각과 다른 쪽을 "틀렸다"고 한다 → 그 사람의 까닭을 먼저 말하게 한다.',
      }),

      // ───────────────────────── 36차시 (practice) ─────────────────────────
      lesson(36, S10, {
        title: '찬반 토론을 듣고 의견과 근거 가려내기',
        objective: '"교실에 반려 식물을 두자" 같은 쉬운 찬반 토론을 듣고 찬성과 반대 의견을 가려내며, 각 의견을 받치는 근거를 찾아 말할 수 있다.',
        illustration: {
          prompt: PROMPT('a friendly class debate with two small groups of students at desks facing each other, a green potted plant on the teacher\'s desk in the middle and a whiteboard with a thumbs up and thumbs down'),
          scene: SCENE('Should we have a class plant?', '찬성과 반대, 그리고 근거', [
            { motif: 'leaf', x: 240, y: 200 }, { motif: 'sun', x: 410, y: 56, s: 0.6 }, { motif: 'house', x: 90, y: 216, color: 'rose' },
          ]),
        },
        stages: [
          {
            id: 'intro', title: '도입', minutes: 6,
            teacher: '"우리 교실에 화분을 하나 두면 어떨까요?" 손을 들어 찬성·반대를 묻고 까닭을 한두 명 듣는다. "토론에서는 의견(찬성/반대)과 그 의견을 받치는 근거를 함께 말해요." 칠판에 I agree. / I disagree. / One reason is … / Also, … 를 적는다. "오늘은 반 친구들의 짧은 토론을 듣고 의견과 근거를 가려내요."',
            student: '교실에 화분을 두는 것에 찬성하나요, 반대하나요? 그렇게 생각하는 까닭도 하나 떠올려 봐요.',
            demo: { tool: 'wordcards', options: LISTEN('I agree. Plants make the air fresh.', [C('agree', '찬성'), C('disagree', '반대')], '이 친구의 의견'), sequence: [{ at: {} }, { at: { agree: 0 } }] },
          },
          {
            id: 'main', title: '전개', minutes: 27,
            activities: [
              {
                id: 'a1', title: '활동 1. 토론 발언을 찬성과 반대로 나누기', minutes: 13, tool: 'wordcards',
                teacher: '"토론에서 나온 발언 카드를 찬성과 반대로 나눠요. I agree, I disagree 같은 신호 말을 찾아요." 신호 말이 없는 발언은 내용으로 판단하게 한다. 근거 없이 의견만 있는 발언이나 주제와 상관없는 발언이 섞인 도전 문항에서는 "이 말이 화분을 두자는 쪽을 돕나요, 막나요?"라고 묻는다.',
                task: '토론 발언 카드를 읽고 찬성 칸과 반대 칸으로 나눠요.',
                levels: LV({ mode: 'sort', slots: ['찬성', '반대'] }),
                items: [
                  Object.assign({ prompt: '"교실에 화분을 두자" 토론의 발언이에요. 찬성과 반대로 나눠 보세요.',
                    target: { sort: { 찬성: ['p1', 'p2'], 반대: ['c1', 'c2'] } }, difficulty: 0.15,
                    hints: ['I agree / I disagree, 또는 좋은 점 / 걱정되는 점을 말하는지 봐요.', '놓은 카드 가운데 걱정을 말하는 발언이 찬성 칸에 들어가지 않았는지 보세요.', '공기가 맑아진다·돌보며 책임감을 배운다는 찬성, 방학에 돌볼 사람이 없다·벌레가 생긴다는 반대예요.'] },
                    CD([C('p1', 'I agree. Plants make the air fresh.'), C('p2', 'We can learn to be responsible.'), C('c1', 'I disagree. No one can water it during vacation.'), C('c2', 'Bugs might come to the plant.')], ['p1', 'c1'])),
                  Object.assign({ prompt: '"점심시간을 10분 늘리자" 토론의 발언이에요. 찬성과 반대로 나눠 보세요.',
                    target: { sort: { 찬성: ['p1', 'p2'], 반대: ['c1', 'c2'] } }, difficulty: 0.25,
                    hints: ['점심시간이 늘어서 좋아지는 점인지, 그 때문에 생기는 문제인지 봐요.', '신호 말이 없는 발언도 그 내용이 어느 쪽을 돕는지 다시 보세요.', '천천히 먹을 수 있다·놀 시간이 생긴다는 찬성, 집에 늦게 간다·수업 시간이 줄어든다는 반대예요.'] },
                    CD([C('p1', 'We can eat slowly and stay healthy.'), C('p2', 'We will have more time to play.'), C('c1', 'School will end later, so we will go home late.'), C('c2', 'I disagree. We will have less class time.')], ['p1', 'c1'], [C('x1', 'I like pizza for lunch.', '좋아하는 음식 이야기예요. 점심시간 길이와는 상관없어요.')])),
                  Object.assign({ prompt: '"숙제를 없애자" 토론의 발언이에요. 근거가 있는 발언만 찬성과 반대로 나눠 보세요. 근거가 없는 발언은 남겨 두어요.',
                    target: { sort: { 찬성: ['p1'], 반대: ['c1'] } }, difficulty: 0.35,
                    hints: ['의견만 있는 발언(I agree.)과 의견을 받치는 까닭이 있는 발언을 가려요.', '놓은 카드에 because나 까닭이 담긴 문장이 있는지 보세요. "그냥 싫어요"는 근거일까요?', '찬성: 가족과 보낼 시간이 늘어서 / 반대: 배운 것을 집에서 다시 익힐 수 있어서.'],
                    predict: { q: '"I just don\'t like homework."는 근거일까요?', options: ['근거예요', '느낌일 뿐이에요'], answer: 1 },
                    conclude: '근거는 다른 사람도 고개를 끄덕일 수 있는 까닭이에요. 그냥 좋다·싫다는 근거가 되기 어려워요.' },
                    CD([C('p1', 'I agree because we can spend more time with our families.'), C('c1', 'I disagree because homework helps us review what we learned.'), C('n1', 'I just don\'t like homework.', '근거 없이 느낌만 말했어요.'), C('n2', 'I agree.', '의견만 있고 근거가 없어요.')], null, [C('n3', 'My brother is in middle school.', '토론 주제와 상관없는 말이에요.')])),
                ],
              },
              {
                id: 'a2', title: '활동 2. 토론을 듣고 근거 찾기', minutes: 14, tool: 'wordcards',
                teacher: '"이번에는 토론을 소리로 들어요. 물음이 묻는 쪽(찬성 또는 반대)의 근거를 골라요." One reason is, Also, because 뒤에 근거가 온다는 것을 칠판에서 다시 짚는다. 반대쪽 근거를 고른 학생에게 "그 말을 한 사람은 I agree라고 했나요, I disagree라고 했나요?"라고 묻는다.',
                task: '토론을 듣고 물음이 묻는 쪽의 근거 카드를 골라요.',
                levels: LV({ mode: 'listen', basket: '찾은 근거' }),
                items: [
                  Object.assign({ prompt: '"교실에 반려 물고기를 기르자" 토론이에요. 찬성 쪽의 근거를 골라 보세요.',
                    target: { listen: 'calm' }, difficulty: 0.2,
                    hints: ['I agree 바로 뒤, One reason is 뒤를 들어요.', '고른 근거를 말한 사람이 I agree라고 했는지 다시 들어 보세요.', 'Watching fish makes us feel calm. — 물고기를 보면 마음이 차분해져요.'] },
                    LI('Jun: I agree. One reason is that watching fish makes us feel calm. Sora: I disagree. Cleaning the fish tank is hard work.', [C('calm', '물고기를 보면 마음이 차분해진다'), C('clean', '어항 청소가 힘들다', '이것은 반대 쪽(Sora)의 근거예요.'), C('cute', '물고기가 귀엽다', '이런 말은 없어요.')], '찬성 근거', ['calm', 'clean'])),
                  Object.assign({ prompt: '같은 토론의 뒷부분이에요. 반대 쪽의 근거를 모두 골라 보세요.',
                    target: { listen: ['tank', 'die'] }, difficulty: 0.25,
                    hints: ['I disagree를 말한 사람의 Also 앞뒤를 모두 들어요. 근거가 두 개예요.', '고른 근거 가운데 찬성 쪽(관찰, 책임감)의 말이 섞이지 않았는지 보세요.', '어항 청소가 힘들고, 주말에 먹이를 못 주면 물고기가 죽을 수 있어서예요.'] },
                    LI('Sora: I disagree. Cleaning the tank is hard work. Also, the fish might die if no one feeds them on weekends. Jun: But we can learn to take care of animals.', [C('tank', '어항 청소가 힘들다'), C('die', '주말에 먹이를 못 주면 죽을 수 있다'), C('learn', '동물 돌보기를 배울 수 있다', '찬성 쪽(Jun)의 근거예요.')], '반대 근거', null, [C('cost', '물고기가 비싸다', '값 이야기는 없어요.')])),
                  Object.assign({ prompt: '마지막 발언이에요. 지수는 어느 쪽 의견이고, 근거는 무엇인가요? 둘 다 골라 보세요.',
                    target: { listen: ['dis', 'allergy'] }, difficulty: 0.35,
                    hints: ['처음에 칭찬하는 말이 나오지만 But 뒤가 지수의 진짜 의견이에요.', '고른 의견이 But 앞의 말인지 뒤의 말인지, 근거가 지수 자신의 말인지 다시 들어 보세요.', 'But I disagree … because some of us have allergies — 반대, 알레르기가 있는 친구가 있어서예요.'],
                    predict: { q: '"That\'s a good idea, but …"라고 말한 사람은 찬성일까요?', options: ['찬성이에요', 'but 뒤를 들어야 해요'], answer: 1 },
                    conclude: '상대 의견을 먼저 인정하고 But 뒤에 자기 의견을 말할 수 있어요. 진짜 의견은 But 뒤에 있어요.' },
                    LI('Jisu: Having a class pet is a nice idea. But I disagree because some of us have allergies to animals.', [C('dis', '반대'), C('agr', '찬성', 'nice idea는 상대를 인정한 말이에요. 지수의 의견은 But 뒤에 있어요.'), C('allergy', '동물 알레르기가 있는 친구가 있어서'), C('nice', '좋은 생각이어서', '이것은 상대를 인정한 말이지 근거가 아니에요.')], '지수의 의견과 근거', ['dis', 'agr', 'allergy'])),
                ],
              },
            ],
          },
          {
            id: 'wrapup', title: '정리', minutes: 7,
            teacher: '"근거와 그냥 좋다·싫다는 무엇이 달랐나요?" 다른 사람도 고개를 끄덕일 수 있는 까닭이라는 말을 끌어낸다. 지수처럼 상대 의견을 먼저 인정하고 말하면 어떤 느낌이 드는지 한 명에게 묻는다. 그 뒤 출구 질문을 푼다.',
            exitTicket: [
              { type: 'tool', tool: 'wordcards', options: { mode: 'sort', shuffle: false, slots: ['찬성', '반대'], cards: [C('x1', 'I agree because a garden gives us fresh vegetables.'), C('x2', 'I disagree because weeding takes a lot of time.')] }, prompt: '"학교 텃밭을 만들자" 토론이에요. 찬성과 반대로 나눠 보세요.', target: { sort: { 찬성: ['x1'], 반대: ['x2'] } }, difficulty: 0.15 },
              { type: 'choice', prompt: '근거가 있는 발언은?', options: ['I agree.', 'I disagree because the room is too small.', 'I don\'t know.'], answer: 1, difficulty: 0.15, explain: 'because 뒤에 교실이 좁다는 까닭이 있어요.' },
              { type: 'mood', prompt: '오늘 토론 듣기는 어땠나요?' },
            ],
          },
        ],
        worksheet: {
          title: '토론 듣기 — 의견과 근거',
          items: [
            { type: 'table', prompt: '"교실에 반려 물고기를 기르자" 토론에서 들은 근거를 쓰세요.', columns: ['찬성 근거', '반대 근거'], rows: 2, answer: '마음이 차분해진다, 동물 돌보기를 배운다 / 어항 청소가 힘들다, 주말에 먹이를 못 준다' },
            { type: 'choice', prompt: '"It\'s a nice idea, but I disagree." 이 사람의 의견은?', options: ['찬성', '반대'], answer: '반대' },
            { type: 'blank', prompt: 'I ___ (agree / disagree) because ___.' },
            { type: 'short', prompt: '"그냥 싫어요"가 근거가 되기 어려운 까닭을 한 문장으로 쓰세요.' },
          ],
          easy: {
            note: 'I agree 찬성 · I disagree 반대 · because / One reason is 뒤에 근거',
            items: [
              { type: 'choice', prompt: 'I disagree 의 뜻은?', options: ['반대해요', '찬성해요'], answer: '반대해요' },
              { type: 'table', prompt: '교실에 화분을 두는 것에 대한 내 의견을 쓰세요.', columns: ['찬성 / 반대', '까닭'], cells: [['', '']] },
              { type: 'short', prompt: '친구의 근거 하나를 한국어로 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '나누거나 고를 카드가 줄고, 맞게 놓으면 초록 테두리가 생기며 틀리면 까닭을 말하고 되돌아와요.',
          base: '토론 발언을 찬반으로 나누고, 토론을 듣고 근거를 고른 뒤 확인을 눌러요.',
          challenge: '근거 없는 발언, 주제와 상관없는 발언, 상대를 인정한 뒤 반대하는 발언이 섞여 근거를 가려야 해요.',
        },
        teacherNotes: '토론 발언은 모두 이 차시를 위해 지은 것이다. 듣기 대본: ① Jun: I agree. One reason is that watching fish makes us feel calm. Sora: I disagree. Cleaning the fish tank is hard work. ② Sora: I disagree. Cleaning the tank is hard work. Also, the fish might die if no one feeds them on weekends. Jun: But we can learn to take care of animals. ③ Jisu: Having a class pet is a nice idea. But I disagree because some of us have allergies to animals. 판정 기준(활동 1 도전): 의견에 까닭(because, One reason is …)이 붙은 발언만 근거가 있는 발언으로 본다. 주제는 학생이 쉽게 생각을 갖는 학교생활로 골랐고 정답이 있는 것은 "누가 무엇을 말했는가"뿐이다 — 어느 쪽이 옳은지는 묻지 않는다. 자주 보이는 어려움: ① nice idea를 듣고 찬성으로 여긴다 → but 뒤를 다시 듣게 한다. ② 의견만 있는 발언을 근거로 여긴다 → "왜?"를 붙여 물어 보게 한다.',
      }),

      // ───────────────────────── 37차시 (practice) ─────────────────────────
      lesson(37, S10, {
        title: '세 친구의 주말 계획 제안을 듣고 함께 정하기',
        objective: '세 친구가 주말 계획을 두고 서로 다른 제안을 하는 대화를 듣고, 각 제안과 그 까닭을 가려내며, 모두의 생각을 살린 계획을 고를 수 있다.',
        illustration: {
          prompt: PROMPT('three friends sitting on a park bench with a map and a calendar, each pointing to a different picture: a bike, a library book and a picnic basket, smiling and talking'),
          scene: SCENE('What should we do on Saturday?', '세 친구, 세 가지 제안', [
            { motif: 'tree', x: 82, y: 212 }, { motif: 'sun', x: 410, y: 56, s: 0.6 }, { motif: 'leaf', x: 300, y: 210 },
          ]),
        },
        stages: [
          {
            id: 'intro', title: '도입', minutes: 6,
            teacher: '"친구 세 명이 주말에 함께 놀기로 했는데 하고 싶은 것이 다 달라요. 어떻게 정하면 좋을까요?" 다수결, 가위바위보, 섞어서 하기 같은 대답을 듣는다. "오늘은 세 친구의 대화를 듣고 각자의 제안과 까닭을 찾은 뒤, 모두의 생각을 살린 계획을 골라요." 칠판에 How about …? / Why don\'t we …? / Let\'s … 를 적고 제안하는 말이라는 것을 짚는다.',
            student: '친구들과 하고 싶은 것이 다 다를 때 어떻게 정하면 모두 즐거울까요?',
            demo: { tool: 'wordcards', options: LISTEN('How about riding bikes by the river?', [C('bike', '자전거 타기'), C('swim', '수영하기')], '제안'), sequence: [{ at: {} }, { at: { bike: 0 } }] },
          },
          {
            id: 'main', title: '전개', minutes: 27,
            activities: [
              {
                id: 'a1', title: '활동 1. 세 친구의 제안과 까닭 듣기', minutes: 13, tool: 'wordcards',
                teacher: '"대화를 듣고 물음이 묻는 친구의 제안이나 까닭을 골라요. How about, Why don\'t we, Let\'s 뒤에 제안이 와요." 세 명의 말을 섞는 학생에게 공책에 이름 세 칸을 그리고 들으며 적게 한다. 3번은 제안을 받아들이며 바꾸는 말(Okay, but …)을 듣는 문항이다.',
                task: '대화를 들어요. 물음이 묻는 친구의 제안이나 까닭 카드를 골라요.',
                levels: LV({ mode: 'listen', basket: '들은 것' }),
                items: [
                  Object.assign({ prompt: 'Eric, Hana, Dan은 각각 무엇을 제안했나요? 듣고 Hana의 제안을 골라 보세요.',
                    target: { listen: 'library' }, difficulty: 0.15,
                    hints: ['Hana의 이름 뒤에 나오는 Why don\'t we 뒤를 들어요.', '고른 제안이 Hana가 한 말인지, Eric이나 Dan이 한 말인지 다시 들어 보세요.', 'Hana: Why don\'t we go to the library? — 도서관에 가자고 했어요.'] },
                    LI('Eric: How about riding bikes by the river? Hana: Why don\'t we go to the library? Dan: Let\'s have a picnic in the park!', [C('library', '도서관 가기'), C('bike', '강가에서 자전거 타기', 'Eric의 제안이에요.'), C('picnic', '공원에서 소풍', 'Dan의 제안이에요.')], 'Hana의 제안', ['library', 'bike'])),
                  Object.assign({ prompt: '세 친구가 자기 제안을 고른 까닭을 말해요. Dan의 까닭을 골라 보세요.',
                    target: { listen: 'cook' }, difficulty: 0.25,
                    hints: ['Dan의 because 뒤를 들어요. Dan은 무엇을 만들었다고 했나요?', '고른 까닭이 Dan의 말인지, 다른 친구(날씨, 새 책)의 까닭과 섞이지 않았는지 보세요.', 'because I learned to make sandwiches — 샌드위치 만드는 법을 배워서예요.'] },
                    LI('Eric: The weather will be great, so I want to be outside. Hana: A new comic book came out, and I want to read it. Dan: I want a picnic because I learned to make sandwiches!', [C('cook', '샌드위치 만드는 법을 배워서'), C('weather', '날씨가 좋을 것이라서', 'Eric의 까닭이에요.'), C('book', '새 만화책이 나와서', 'Hana의 까닭이에요.')], 'Dan의 까닭', ['cook', 'weather'], [C('hungry', '배가 고파서', '이런 말은 없어요.')])),
                  Object.assign({ prompt: '대화의 끝이에요. 세 친구가 마지막에 함께 정한 계획은 무엇인가요? 듣고 골라 보세요.',
                    target: { listen: 'mix' }, difficulty: 0.35,
                    hints: ['Okay, but … 처럼 받아들이며 바꾸는 말이 이어지고, 마지막에 So 뒤에서 정리해요.', '고른 계획이 대화 중간에 나온 제안 하나인지, 마지막 So 뒤에서 정리한 계획인지 다시 들어 보세요.', '아침에 자전거를 타고 공원에서 샌드위치를 먹은 뒤 오후에 도서관에 가요.'],
                    predict: { q: '세 친구는 한 사람의 제안만 고르게 될까요?', options: ['하나만 골라요', '섞어서 정할 수 있어요'], answer: 1 },
                    conclude: '서로의 까닭을 들으면 한 사람의 제안만 고르지 않고 모두의 생각을 살리는 계획을 세울 수 있어요.' },
                    LI('Eric: Okay, but can we ride bikes in the morning? Dan: Sure! Then we can eat my sandwiches in the park. Hana: And the library is next to the park. So, bikes in the morning, a picnic for lunch, and the library in the afternoon!', [C('mix', '아침 자전거 → 공원 점심 소풍 → 오후 도서관'), C('bike', '하루 종일 자전거 타기', '자전거는 아침에만 타기로 했어요.'), C('lib', '도서관만 가기', '도서관은 오후 계획의 하나예요.')], '함께 정한 계획', ['mix', 'bike'])),
                ],
              },
              {
                id: 'a2', title: '활동 2. 모두의 생각을 살린 계획 고르기', minutes: 14, tool: 'emotion',
                teacher: '"이번에는 다른 친구들의 이야기예요. 상황을 읽고 모두의 까닭을 살린 방법을 골라요. 고른 뒤 결과도 읽어요." 다수결을 고른 학생에게 "그러면 진 친구의 까닭은 어떻게 되나요?"라고 묻는다. 정답은 모두의 까닭을 살린 방법이라는 것이 판정 기준임을 칠판에 적어 둔다.',
                task: '상황을 읽고 모든 친구의 까닭을 살린 방법을 골라요. 고른 뒤 결과도 읽어요.',
                levels: { easy: { mode: 'branch' }, base: { mode: 'branch' }, challenge: { mode: 'branch' } },
                items: [
                  { prompt: '두 친구가 학급 파티 음식을 두고 생각이 달라요. 두 친구의 까닭을 모두 살린 방법을 골라 보세요.',
                    toolOptions: { who: '유리와 태오', motif: 'star', situation: '유리: "피자가 좋아. 모두 좋아하니까." 태오: "과일이 좋아. 건강에 좋으니까."', ask: '어떻게 정할까요?',
                      choices: [
                        { id: 'both', text: '피자와 과일을 조금씩 함께 준비해요', result: '모두 좋아하는 음식도 있고 건강한 음식도 있어요.', mood: '뿌듯함' },
                        { id: 'pizza', text: '많은 친구가 좋아하니 피자만 준비해요', result: '태오의 까닭(건강)은 빠졌어요.', mood: '아쉬움', why: '한쪽 까닭만 살린 방법이에요.' },
                        { id: 'none', text: '싸우지 않게 음식은 준비하지 않아요', result: '파티가 심심해져요.', mood: '슬픔', why: '두 친구의 까닭이 모두 빠졌어요.' },
                      ] },
                    target: { choice: 'both' }, difficulty: 0.15,
                    hints: ['두 친구의 까닭(모두 좋아함, 건강)을 먼저 적고 보기마다 살아 있는지 봐요.', '고른 방법에서 두 까닭이 모두 살아 있는지 다시 보세요.', '피자와 과일을 함께 준비하면 두 까닭이 모두 살아요.'] },
                  { prompt: '세 친구가 모둠 발표 방법을 두고 생각이 달라요. 세 친구의 까닭을 모두 살린 방법을 골라 보세요.',
                    toolOptions: { who: '모둠 친구들', motif: 'leaf', situation: '지민: "그림이 좋아. 한눈에 보이니까." 도윤: "영상이 좋아. 소리도 넣을 수 있으니까." 서아: "나는 말하기가 떨려서 앞에 서기 어려워."', ask: '어떻게 발표할까요?',
                      choices: [
                        { id: 'video', text: '영상만 만들어 틀어요', result: '지민이의 그림이 빠지고, 지민이가 아쉬워해요.', mood: '아쉬움', why: '지민이의 까닭(한눈에 보이는 그림)이 빠졌어요.' },
                        { id: 'mix', text: '그림을 넣은 영상을 만들고, 서아는 영상 속 목소리를 녹음해요', result: '그림도 보이고 소리도 있고, 서아는 앞에 서지 않아도 돼요.', mood: '뿌듯함' },
                        { id: 'speech', text: '세 명이 차례로 앞에서 말해요', result: '서아가 너무 떨려서 말을 잇지 못해요.', mood: '걱정', why: '서아의 까닭(앞에 서기 어려움)을 살리지 못했어요.' },
                      ] },
                    target: { choice: 'mix' }, difficulty: 0.25,
                    hints: ['세 친구의 까닭(한눈에 보임, 소리, 앞에 서기 어려움)을 하나씩 확인해요.', '고른 방법에서 빠진 친구의 까닭이 없는지 다시 보세요.', '그림을 넣은 영상에 서아가 목소리를 녹음하면 세 까닭이 모두 살아요.'] },
                  { prompt: '두 친구가 쉬는 시간 놀이를 두고 생각이 달라요. 두 친구의 까닭을 모두 살린 방법을 골라 보세요.',
                    toolOptions: { who: '하윤과 민재', motif: 'sun', situation: '하윤: "피구를 하자. 몸을 움직이고 싶어." 민재: "나는 발목을 다쳐서 오늘은 뛸 수 없어. 그래도 같이 놀고 싶어."', ask: '어떻게 놀까요?',
                      choices: [
                        { id: 'dodge', text: '민재는 구경하고 하윤이만 피구를 해요', result: '민재는 같이 놀지 못해 쓸쓸해요.', mood: '쓸쓸함', why: '민재의 까닭(같이 놀고 싶음)이 빠졌어요.' },
                        { id: 'board', text: '둘 다 앉아서 보드게임만 해요', result: '민재는 좋지만 하윤이는 몸을 움직이지 못해 아쉬워요.', mood: '아쉬움', why: '하윤이의 까닭(몸을 움직이고 싶음)이 빠졌어요.' },
                        { id: 'judge', text: '하윤이는 피구를 하고, 민재는 심판을 맡아 함께 놀아요', result: '하윤이는 뛰고, 민재는 앉아서도 함께 놀아요.', mood: '뿌듯함' },
                      ] },
                    target: { choice: 'judge' }, difficulty: 0.35,
                    hints: ['민재가 원하는 것은 "쉬기"만이 아니라 "같이 놀기"라는 것을 놓치지 말아요.', '고른 방법에서 하윤이는 몸을 움직이는지, 민재는 뛰지 않으면서 함께 노는지 둘 다 보세요.', '민재가 심판을 맡으면 뛰지 않고도 함께 놀고, 하윤이는 피구를 해요.'],
                    predict: { q: '발목을 다친 민재에게는 쉬는 것만이 답일까요?', options: ['쉬기만 해요', '함께할 방법이 있어요'], answer: 1 },
                    conclude: '까닭을 끝까지 들으면(같이 놀고 싶어) 한 사람이 빠지지 않는 방법을 찾을 수 있어요.' },
                ],
              },
            ],
          },
          {
            id: 'wrapup', title: '정리', minutes: 7,
            teacher: '"Eric, Hana, Dan은 왜 한 사람의 제안만 고르지 않았을까요?" 서로의 까닭을 들었기 때문이라는 말을 끌어낸다. 다수결이 좋은 때와, 모두의 까닭을 살려 섞는 것이 좋은 때를 한 명씩 듣는다(정답을 정하지 않는다). 그 뒤 출구 질문을 푼다.',
            exitTicket: [
              { type: 'tool', tool: 'wordcards', options: LISTEN('Yuna: Why don\'t we make a poster? Minho: How about a short video? Yuna: Okay, let\'s make a video with our posters in it!', [C('both', '포스터를 넣은 영상'), C('poster', '포스터만'), C('song', '노래 부르기')], '함께 정한 것'), prompt: '두 친구가 마지막에 함께 정한 것은 무엇인가요?', target: { listen: 'both' }, difficulty: 0.25 },
              { type: 'choice', prompt: '제안하는 말이 아닌 것은?', options: ['How about …?', 'Why don\'t we …?', 'I was tired.'], answer: 2, difficulty: 0.15, explain: 'I was tired는 내 상태를 말해요. 나머지 둘은 제안하는 말이에요.' },
              { type: 'mood', prompt: '오늘 친구들과 함께 정하는 대화 듣기는 어땠나요?' },
            ],
          },
        ],
        worksheet: {
          title: '세 친구의 주말 계획',
          items: [
            { type: 'table', prompt: '세 친구의 제안과 까닭을 쓰세요.', columns: ['이름', '제안', '까닭'], cells: [['Eric', '', ''], ['Hana', '', ''], ['Dan', '', '']], answer: '자전거 / 날씨가 좋아서 · 도서관 / 새 만화책 · 소풍 / 샌드위치를 배워서' },
            { type: 'choice', prompt: '세 친구가 정한 계획에서 오후에 하는 일은?', options: ['도서관 가기', '자전거 타기', '소풍'], answer: '도서관 가기' },
            { type: 'blank', prompt: 'How about ___ ? (내가 친구들에게 하고 싶은 주말 제안)' },
            { type: 'short', prompt: '친구와 생각이 다를 때 모두의 까닭을 살리는 방법을 하나 쓰세요.' },
          ],
          easy: {
            note: '제안하는 말: How about …? · Why don\'t we …? · Let\'s …',
            items: [
              { type: 'table', prompt: '세 친구의 제안을 쓰세요.', columns: ['Eric', 'Hana', 'Dan'], cells: [['', '', '']], answer: '자전거 / 도서관 / 소풍' },
              { type: 'choice', prompt: '"Let\'s have a picnic." 의 뜻은?', options: ['소풍 가자', '소풍 갔어'], answer: '소풍 가자' },
              { type: 'short', prompt: '내가 하고 싶은 주말 계획을 한국어로 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '고를 카드가 줄고, 맞게 놓으면 초록 테두리가 생기며 틀리면 까닭을 말하고 되돌아와요.',
          base: '세 친구의 제안과 까닭을 듣고 고른 뒤, 모두의 까닭을 살린 방법을 골라요.',
          challenge: '대화 중간의 제안과 마지막 정리를 가려 들어야 하고, 한 사람의 까닭이 숨은 상황(같이 놀고 싶음)을 따져요.',
        },
        teacherNotes: '대화와 상황은 모두 이 차시를 위해 지은 것이다. 듣기 대본: ① Eric: How about riding bikes by the river? Hana: Why don\'t we go to the library? Dan: Let\'s have a picnic in the park! ② Eric: The weather will be great, so I want to be outside. Hana: A new comic book came out, and I want to read it. Dan: I want a picnic because I learned to make sandwiches! ③ Eric: Okay, but can we ride bikes in the morning? Dan: Sure! Then we can eat my sandwiches in the park. Hana: And the library is next to the park. So, bikes in the morning, a picnic for lunch, and the library in the afternoon! 출구: Yuna: Why don\'t we make a poster? Minho: How about a short video? Yuna: Okay, let\'s make a video with our posters in it! 판정 기준(활동 2): 상황에 나온 모든 사람의 까닭을 살린 보기 하나만 정답이다. 정리 단계의 다수결 이야기는 정답을 정하지 않는 열린 질문이다. 자주 보이는 어려움: ① 세 사람의 말을 섞는다 → 이름 칸 메모를 쓰게 한다. ② 대화 중간의 제안을 마지막 계획으로 고른다 → So 뒤를 다시 듣게 한다.',
      }),
      // @@NEXT@@
    ],
  });
})();
