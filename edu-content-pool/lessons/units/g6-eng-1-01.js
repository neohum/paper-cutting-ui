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
      // @@NEXT@@
    ],
  });
})();
