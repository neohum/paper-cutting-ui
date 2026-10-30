/* 6학년 1학기 음악 2. 감상 — 생활 속 음악의 아름다움을 느끼고 공감하기(1~12차시), 우리나라 음악 국가유산과 국악의 가치 인식하기(13~23차시).
 * 화면 건반으로 들려주는 가락은 이 단원을 위해 새로 지었거나, 저작권이 끝난 곡의 첫머리 몇 음만 옮긴 것이다:
 *   베토벤 '엘리제를 위하여'(1810년경) 첫머리, 파헬벨 '카논' 저음 여덟 음(1680년경, 다장조로 옮김).
 * 감상 곡(교사가 음원으로 들려줌)은 곡 이름만 적었고 모두 작곡가 사후 70년이 지났거나 전통 음악이다:
 *   사티 '짐노페디', 차이콥스키 '꽃의 왈츠', 슈트라우스 2세 '아름답고 푸른 도나우', 종묘제례악·대취타·판소리·풍물(사물놀이)·아리랑(전통). 노랫말은 싣지 않는다.
 * 장단판(janggu)의 칸 틀은 교실에서 치기 좋게 줄여 놓은 것이다: 굿거리는 4박 12칸, 세마치는 3박 9칸(박마다 세 칸). 실제 연주는 음원·국악 선생님으로 확인한다.
 */
(function () {
  const ILL = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const U = 'g6-음악-1학기-2';
  const head = (n, standards) => ({
    id: `g6-mus-1-02-${String(n).padStart(2, '0')}`, schema: 'edu-lesson.v1', catalog: { unit: U, lesson: n },
    grade: 6, subject: '음악', unitTitle: '2. 감상', standards, minutes: 40, formats: ['chromebook', 'projector', 'print'],
  });
  const S4 = ['[6음02-04]'];
  const S5 = ['[6음02-05]'];
  const SC = [
    (t) => [{ motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 110, y: 52 }, { motif: 'hills', y: 206 }, { motif: 'bird', x: 210, y: 86 }, { motif: 'tree', x: 70, y: 214 }, { motif: 'flower', x: 400, y: 224 }, { motif: 'text', x: 240, y: 150, text: t, size: 22 }],
    (t) => [{ motif: 'moon', x: 400, y: 58, s: 0.8 }, { motif: 'star', x: 90, y: 60, s: 0.6 }, { motif: 'star', x: 330, y: 40, s: 0.5 }, { motif: 'mountain', x: 120, y: 214 }, { motif: 'house', x: 380, y: 216 }, { motif: 'wave', y: 236 }, { motif: 'text', x: 240, y: 150, text: t, size: 22 }],
    (t) => [{ motif: 'cloud', x: 120, y: 56 }, { motif: 'cloud', x: 360, y: 44, s: 0.8 }, { motif: 'hills', y: 208 }, { motif: 'house', x: 110, y: 214, color: 'buttercup' }, { motif: 'leaf', x: 300, y: 216 }, { motif: 'star', x: 420, y: 120, s: 0.6 }, { motif: 'text', x: 240, y: 150, text: t, size: 22 }],
  ];
  const scene = (k, t) => ({ viewBox: [480, 270], layers: SC[k % 3](t) });
  const mel = (from = '도', to = '높은도') => ({
    easy: { from, to, names: 'solfa', showWhileListening: true },
    base: { from, to, names: 'solfa' },
    challenge: { from, to, names: 'none', nameToggle: false, black: true },
  });
  const rhy = (meter, measures) => ({
    easy: { mode: 'rhythm', meter, measures, blocks: ['q', 'e', 'h', 'qr'], showBeats: true },
    base: { mode: 'rhythm', meter, measures, blocks: ['q', 'e', 'h', 'qr', 'dh'] },
    challenge: { mode: 'rhythm', meter, measures, blocks: ['q', 'e', 'h', 'qr', 'dh', 'er', 'hr'] },
  });
  const jang = (name, beats) => ({
    easy: { mode: 'janggu', beats, group: 3, jangdan: name, strokes: ['덩', '쿵', '덕'] },
    base: { mode: 'janggu', beats, group: 3, jangdan: name, strokes: ['덩', '쿵', '덕', '기덕'] },
    challenge: { mode: 'janggu', beats, group: 3, jangdan: name, strokes: ['덩', '쿵', '덕', '기덕', '더러러'] },
  });
  const cardsLv = () => ({ easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } });
  const scaleLv = () => ({ easy: { mode: 'scale', steps: 3 }, base: { mode: 'scale', steps: 3 }, challenge: { mode: 'scale', steps: 5 } });
  const MOOD = (p) => ({ type: 'mood', prompt: p });
  // 차시 하나를 같은 틀로 조립한다: 도입 6분·전개 26분·정리 8분
  const L = (n, std, d) => Object.assign(head(n, std), {
    title: d.title, objective: d.objective,
    illustration: { prompt: ILL(d.ill), scene: scene(n, d.sceneText) },
    stages: [
      Object.assign({ id: 'intro', title: '도입', minutes: 6, teacher: d.intro.teacher, student: d.intro.student }, d.intro.demo ? { demo: d.intro.demo } : {}),
      { id: 'main', title: '전개', minutes: 26, activities: d.acts },
      { id: 'wrapup', title: '정리', minutes: 8, teacher: d.wrap.teacher, exitTicket: d.wrap.exit },
    ],
    worksheet: { title: d.ws.title, items: d.ws.items, easy: { note: d.ws.note, items: d.ws.easy } },
    differentiation: d.diff, teacherNotes: d.notes,
  });
  const lessons = [];

  // ───────────────────────── 1차시 (도입) ─────────────────────────
  lessons.push(L(1, S4, {
    title: '하루 동안 들린 소리를 쓰임별로 나누기',
    objective: '하루 동안 만나는 음악과 소리 신호를 알리기·쉬게 하기·신나게 하기 같은 쓰임으로 나누고, 알림음 가락을 따라 칠 수 있다.',
    ill: 'a child walking through a day with paper music notes floating from a bus stop, a cafe, a school bell and a playground',
    sceneText: '하루 속 음악',
    intro: {
      teacher: '"오늘 아침에 눈을 떠서 교실에 올 때까지, 음악이나 소리 신호를 몇 번 들었나요?" 알람, 버스 안내, 학교 종처럼 떠오르는 대로 칠판에 적는다. "음악은 음악회에서만 듣는 거예요"라고 말하는 학생에게 "엘리베이터 도착음도 가락이에요. 가락이 붙은 소리를 모두 찾아봐요"라고 되묻는다.',
      student: '오늘 아침부터 지금까지 들은 음악이나 소리 신호를 떠올려 봅시다. 언제, 어디서 들었나요?',
      demo: { tool: 'keyboard', options: { from: '도', to: '높은도', tempo: 96 }, sequence: [{ notes: ['미', '솔', '높은도'] }, { notes: ['높은도', '솔', '미'] }] },
    },
    acts: [
      {
        id: 'a1', title: '활동 1. 들린 소리의 쓰임 나누기', minutes: 12, tool: 'mindmap',
        teacher: '"같은 음악도 쓰임이 달라요. 이 소리는 무엇을 하려고 만든 걸까요?" 카드 글을 소리 내어 읽게 한다. 소리를 크기만으로 나누는 학생에게는 "크게 울려도 쉬라고 만든 소리가 있을까요?"로 되묻고, 소리가 하는 일을 기준으로 나누게 한다.',
        task: '카드에 적힌 소리를 읽고, 그 소리가 하는 일에 맞는 칸으로 나누어요.',
        levels: cardsLv(),
        items: [
          { prompt: '하루에 만나는 소리를 하는 일에 따라 세 칸으로 나누어 보세요.', toolOptions: { topic: '소리의 쓰임', slots: ['알려 줘요', '쉬게 해 줘요', '신나게 해 줘요'], cards: ['버스가 도착했다는 안내 소리', '수업 끝을 알리는 종 가락', '잠들기 전에 듣는 느린 자장가', '카페의 조용한 배경 음악', '체육 시간 달리기 음악', '운동회 응원 박수 리듬'] }, target: { sort: { '알려 줘요': ['버스가 도착했다는 안내 소리', '수업 끝을 알리는 종 가락'], '쉬게 해 줘요': ['잠들기 전에 듣는 느린 자장가', '카페의 조용한 배경 음악'], '신나게 해 줘요': ['체육 시간 달리기 음악', '운동회 응원 박수 리듬'] } }, difficulty: 0.15,
            hints: ['카드마다 이 소리가 없으면 무엇이 불편할지 생각해 보세요. 그 불편을 풀어 주는 일이 소리의 쓰임이에요.', '알려 주는 소리와 신나게 하는 소리를 서로 바꾸지 않았는지 보세요. 신호는 정보를, 응원은 기운을 줘요.', '안내·종은 알려 주고, 자장가·조용한 배경 음악은 쉬게 하고, 달리기·응원 리듬은 신나게 해요.'],
            levels: { challenge: { toolOptions: { cards: ['버스가 도착했다는 안내 소리', '수업 끝을 알리는 종 가락', '잠들기 전에 듣는 느린 자장가', '카페의 조용한 배경 음악', '체육 시간 달리기 음악', '운동회 응원 박수 리듬', '교실 책상 끄는 소리'] } } } },
          { prompt: '병원과 아침 장면의 소리예요. 두 칸으로 나누어 보세요.', toolOptions: { topic: '마음에 하는 일', slots: ['마음을 편하게 해요', '정신을 깨워요'], cards: ['병원 대기실에 흐르는 잔잔한 피아노', '도서관 쉼터의 조용한 연주', '아침 기상 알람 음악', '달리기 출발을 알리는 신호 음악'] }, target: { sort: { '마음을 편하게 해요': ['병원 대기실에 흐르는 잔잔한 피아노', '도서관 쉼터의 조용한 연주'], '정신을 깨워요': ['아침 기상 알람 음악', '달리기 출발을 알리는 신호 음악'] } }, difficulty: 0.2,
            levels: { challenge: { toolOptions: { cards: ['병원 대기실에 흐르는 잔잔한 피아노', '도서관 쉼터의 조용한 연주', '아침 기상 알람 음악', '달리기 출발을 알리는 신호 음악', '공사장 드릴 소리'] } } } },
          { prompt: '장소 분위기를 만드는 소리와 신호를 주는 소리로 나누어 보세요.', toolOptions: { topic: '분위기와 신호', slots: ['분위기를 만들어요', '신호를 줘요'], cards: ['영화 무서운 장면의 낮고 느린 소리', '놀이공원 퍼레이드 음악', '지하철 문 닫힘 알림 소리', '쓰레기 수거차가 다가오는 음악'] }, target: { sort: { '분위기를 만들어요': ['영화 무서운 장면의 낮고 느린 소리', '놀이공원 퍼레이드 음악'], '신호를 줘요': ['지하철 문 닫힘 알림 소리', '쓰레기 수거차가 다가오는 음악'] } }, difficulty: 0.3,
            levels: { challenge: { toolOptions: { cards: ['영화 무서운 장면의 낮고 느린 소리', '놀이공원 퍼레이드 음악', '지하철 문 닫힘 알림 소리', '쓰레기 수거차가 다가오는 음악', '비 오는 소리'] } } } },
        ],
      },
      {
        id: 'a2', title: '활동 2. 알림음 가락 듣고 따라 치기', minutes: 14, tool: 'keyboard',
        teacher: '"알림음은 짧아도 높아지는지 낮아지는지로 마음이 달라져요. 가락 듣기를 누르고 건반으로 따라 쳐 봐요." 소리는 학생이 누를 때만 난다. 올라가는 가락을 \'도착했어요\', 내려가는 가락을 \'끝났어요\'로 느끼는지 묻고, 느낌과 방향을 연결해 말하게 한다. 높고 낮음을 소리의 크기로 헷갈리는 학생에게는 목소리로 같은 가락을 불러 높이와 크기를 가르게 한다.',
        task: '가락 듣기를 누르고 들은 알림음을 건반으로 따라 쳐요. 소리가 올라가는지 내려가는지도 귀로 찾아요.',
        levels: mel(),
        items: [
          { prompt: '도착을 알리는 짧은 알림음이에요. 가락 듣기를 누르고 따라 쳐 보세요.', toolOptions: { melody: ['미', '솔', '높은도'], tempo: 96 }, target: { notes: ['미', '솔', '높은도'] }, difficulty: 0.1 },
          { prompt: '끝을 알리는 알림음이에요. 가락 듣기를 누르고 따라 쳐 보세요.', toolOptions: { melody: ['높은도', '솔', '미', '도'], tempo: 96 }, target: { notes: ['높은도', '솔', '미', '도'] }, difficulty: 0.2,
            predict: { q: '가락이 아래로 내려가면 어떤 느낌일까요?', options: ['끝나는 느낌', '시작하는 느낌', '잘 모르겠어요'], answer: 0 },
            conclude: '가락이 아래로 내려가면 끝나는 느낌이 들어요. 가락의 방향이 알림음의 뜻을 바꿔요.' },
          { prompt: '다섯 음 알림음이에요. 듣고 따라 친 뒤 올라간 곳이 몇 군데인지 세어 보세요.', toolOptions: { melody: ['솔', '미', '레', '미', '솔'], tempo: 108 }, target: { notes: ['솔', '미', '레', '미', '솔'] }, reveal: 'after-check', difficulty: 0.3,
            conclude: '내려갔다가 다시 올라가는 가락이라 무엇인가 이어질 것 같은 느낌이 나요.' },
        ],
      },
    ],
    wrap: {
      teacher: '"오늘 들은 소리 가운데 쓰임이 두 가지로 겹치는 소리도 있었나요?" 두 학생에게 사례를 말하게 한다. 출구 2번에서 \'소리가 크면 신호\'를 고른 학생은 다음 시간 첫머리에 작은 소리로 울리는 알림음과 큰 소리로 울리는 자장가를 비교해 들려준다.',
      exit: [
        { type: 'tool', tool: 'keyboard', options: { from: '도', to: '높은도', melody: ['도', '미', '솔', '미'], tempo: 100 }, prompt: '문이 열린다는 알림음을 듣고 건반으로 따라 쳐 보세요.', target: { notes: ['도', '미', '솔', '미'] }, difficulty: 0.2 },
        { type: 'choice', prompt: '학교 종 가락은 어떤 쓰임이 가장 클까요?', options: ['소리 크기로 기운을 북돋아요', '수업 시작과 끝을 알려 줘요', '조용히 쉬게 해 줘요'], answer: 1, difficulty: 0.2, explain: '종 가락은 때를 알리려고 만든 소리예요. 쓰임은 소리가 하는 일로 찾아요.' },
        MOOD('내 하루 속 음악을 찾아보니 어땠나요?'),
      ],
    },
    ws: {
      title: '내 하루의 소리 지도',
      note: '알려 주는 소리, 쉬게 하는 소리, 신나게 하는 소리로 쓰임을 나누어요. 가락이 올라가면 시작, 내려가면 끝 느낌이에요.',
      items: [
        { type: 'table', prompt: '오늘 하루 들은 소리 세 가지를 쓰고 쓰임에 ○ 하세요.', columns: ['들은 곳', '소리', '쓰임(알림·쉼·신남)'], rows: 3 },
        { type: 'figure', prompt: '선생님이 두 번 들려주는 알림음을 듣고 계이름을 쓰세요.', wide: true, tool: 'keyboard', options: { from: '도', to: '높은도', printNames: true, printBoxes: 3 }, figures: [{ caption: '가락은 올라가나요, 내려가나요? ( 올라가요 · 내려가요 )' }], answer: '미 솔 높은도 — 올라가요' },
        { type: 'choice', prompt: '병원 대기실에 잔잔한 피아노가 흐르는 까닭에 ○ 하세요.', options: ['마음을 편하게 하려고', '빨리 걷게 하려고', '시간을 알리려고'], answer: '마음을 편하게 하려고' },
        { type: 'short', prompt: '내가 가장 자주 만나는 생활 속 소리와 그 소리가 하는 일을 쓰세요.' },
      ],
      easy: [
        { type: 'choice', prompt: '수업 끝을 알리는 종 가락의 쓰임에 ○ 하세요.', options: ['알려 줘요', '재워 줘요'], answer: '알려 줘요' },
        { type: 'choice', prompt: '자장가의 쓰임에 ○ 하세요.', options: ['쉬게 해 줘요', '달리게 해 줘요'], answer: '쉬게 해 줘요' },
        { type: 'table', prompt: '소리와 쓰임을 이어 쓰세요.', columns: ['소리', '쓰임'], cells: [['버스 안내', ''], ['응원 리듬', '']] },
        { type: 'short', prompt: '오늘 들은 소리 하나를 쓰세요.' },
      ],
    },
    diff: {
      easy: '카드를 맞는 칸에 놓으면 초록 테두리가 보이고, 가락을 듣는 동안 건반이 빛나요.',
      base: '카드를 스스로 나누고 확인해요. 계이름을 켜고 끌 수 있어요.',
      challenge: '쓰임에 맞지 않는 함정 카드가 한 장 더 있고, 계이름 없이 검은건반까지 있는 건반에서 귀로만 찾아요.',
    },
    notes: '자주 보이는 어려움: ① 음악은 음악회나 노래만이라고 여긴다 → 알림음·신호음에도 가락이 있음을 보여 준다. ② 소리 크기로 쓰임을 정한다 → 소리가 하는 일을 기준으로 다시 나누게 한다. ③ 올라가는 가락과 큰 소리를 헷갈린다 → 목소리로 높이와 크기를 따로 바꾸어 들려준다. 소리는 학생이 누를 때만 난다.',
  }));

  // ───────────────────────── 2차시 (연습) ─────────────────────────
  lessons.push(L(2, S4, {
    title: '같은 가락을 느리게·빠르게 들려주고 어울리는 장소 고르기',
    objective: '같은 가락을 빠르기와 셈여림만 바꾸어 들으며 느낌이 달라지는 것을 알고, 어울리는 생활 장소를 까닭과 함께 고를 수 있다.',
    ill: 'a paper cafe with calm musical notes and a paper playground with bouncing notes sharing the same tune',
    sceneText: '장소마다 어울리는 소리',
    intro: {
      teacher: '"같은 가락을 아주 느리게, 아주 빠르게 들려줄게요. 어느 쪽이 도서관에 어울릴까요?" 시연 단추로 두 번 들려주고 손을 들어 고르게 한다. "가락이 달라서 느낌이 달라졌어요"라고 하는 학생에게 "음은 그대로이고 빠르기만 달랐어요. 그래도 느낌이 달라졌죠?"라고 짚는다.',
      student: '같은 가락을 느리게 한 번, 빠르게 한 번 듣습니다. 어느 쪽이 도서관에, 어느 쪽이 운동장에 어울리나요?',
      demo: { tool: 'keyboard', options: { from: '도', to: '높은도', tempo: 60 }, sequence: [{ notes: ['도', '미', '솔', '미', '도'] }, { notes: ['도', '미', '솔', '미', '도'] }] },
    },
    acts: [
      {
        id: 'a1', title: '활동 1. 빠르기를 달리해 가락 따라 치기', minutes: 13, tool: 'keyboard',
        teacher: '"가락 듣기를 눌러서 먼저 빠르기만 귀로 재 보세요. 그다음 건반으로 쳐요." 느린 가락과 빠른 가락의 음이 같다는 것을 두 번째 문항에서 확인시킨다. 빠르면 음이 달라졌다고 느끼는 학생에게는 같은 음을 손가락으로 짚으며 노래 부르게 한다.',
        task: '가락 듣기를 누르고 들은 가락을 따라 쳐요. 느린 가락과 빠른 가락의 음을 견주어요.',
        levels: mel(),
        items: [
          { prompt: '아주 느린 가락이에요. 가락 듣기를 누르고 따라 쳐 보세요.', toolOptions: { melody: ['도', '미', '솔', '미', '도'], tempo: 60 }, target: { notes: ['도', '미', '솔', '미', '도'] }, difficulty: 0.1 },
          { prompt: '같은 가락을 아주 빠르게 들려줘요. 듣고 따라 쳐 보세요.', toolOptions: { melody: ['도', '미', '솔', '미', '도'], tempo: 152 }, target: { notes: ['도', '미', '솔', '미', '도'] }, difficulty: 0.2,
            predict: { q: '빠르게 들려주면 음의 차례가 바뀔까요?', options: ['음도 바뀌어요', '음은 그대로예요', '잘 모르겠어요'], answer: 1 },
            conclude: '음의 차례는 그대로인데 빠르기만 달라지니 느낌이 크게 달라졌어요.' },
          { prompt: '이번에는 빠르기가 같은데 한 음이 달라요. 듣고 따라 친 뒤 달라진 음을 찾아보세요.', toolOptions: { melody: ['도', '미', '솔', '레', '도'], tempo: 96 }, target: { notes: ['도', '미', '솔', '레', '도'] }, reveal: 'after-check', difficulty: 0.3,
            conclude: '넷째 음이 미에서 레로 바뀌었어요. 이번에 바뀐 것은 빠르기가 아니라 가락이에요.' },
        ],
      },
      {
        id: 'a2', title: '활동 2. 가락의 느낌과 어울리는 장소 잇기', minutes: 13, tool: 'mindmap',
        teacher: '"소리의 빠르기와 크기를 근거로 장소를 골라 보세요. 그냥 좋아서가 아니라 \'느리고 여려서\'처럼 까닭을 말해요." 장소 카드마다 까닭을 한 번씩 말하게 한다. 느린 소리면 무조건 슬픈 소리라고 하는 학생에게는 \'느리고 편안한\' 소리가 있음을 자장가로 보여 준다.',
        task: '들려주는 소리의 모습을 읽고, 어울리는 장소를 하나씩 이어요.',
        levels: cardsLv(),
        items: [
          { prompt: '소리의 모습과 어울리는 장소를 이어 보세요.', toolOptions: { mode: 'match', topic: '어울리는 곳', slots: [{ id: 'p1', label: '아주 느리고 여리게 이어지는 가락' }, { id: 'p2', label: '빠르고 힘차게 뛰는 가락' }, { id: 'p3', label: '보통 빠르기로 또박또박한 가락' }], cards: ['도서관 쉼터', '운동장 달리기', '횡단보도 신호'] }, target: { match: { p1: '도서관 쉼터', p2: '운동장 달리기', p3: '횡단보도 신호' } }, difficulty: 0.15,
            hints: ['가락이 빠른지 느린지, 센지 여린지를 먼저 읽고 그 장소에서 사람들이 어떻게 움직이는지 떠올려요.', '조용히 있어야 하는 곳과 몸을 움직이는 곳을 서로 바꾸지 않았는지 보세요.', '느리고 여린 가락은 도서관 쉼터, 빠르고 힘찬 가락은 달리기, 또박또박한 가락은 신호에 어울려요.'],
            levels: { challenge: { toolOptions: { cards: ['도서관 쉼터', '운동장 달리기', '횡단보도 신호', '시끄러운 공사장'] } } } },
          { prompt: '이번에는 시간대와 장소를 이어 보세요.', toolOptions: { mode: 'match', topic: '시간과 장소', slots: [{ id: 'q1', label: '밤에 잠들기 전 켜 두는 소리' }, { id: 'q2', label: '아침 등굣길에 힘을 주는 소리' }, { id: 'q3', label: '저녁 식당에서 조용히 깔리는 소리' }], cards: ['느리고 포근한 가락', '밝고 씩씩한 박자', '여리고 잔잔한 배경 음악'] }, target: { match: { q1: '느리고 포근한 가락', q2: '밝고 씩씩한 박자', q3: '여리고 잔잔한 배경 음악' } }, difficulty: 0.25,
            levels: { challenge: { toolOptions: { cards: ['느리고 포근한 가락', '밝고 씩씩한 박자', '여리고 잔잔한 배경 음악', '아주 크고 빠른 박자'] } } } },
          { prompt: '같은 가락을 장소에 맞게 어떻게 바꿀지 이어 보세요.', toolOptions: { mode: 'match', topic: '바꾸는 방법', slots: [{ id: 'r1', label: '병원 대기실에서 틀 때' }, { id: 'r2', label: '운동회에서 틀 때' }, { id: 'r3', label: '잠자리에서 들려줄 때' }], cards: ['여리고 느리게', '세고 빠르게', '아주 여리고 아주 느리게'] }, target: { match: { r1: '여리고 느리게', r2: '세고 빠르게', r3: '아주 여리고 아주 느리게' } }, difficulty: 0.3,
            levels: { challenge: { toolOptions: { cards: ['여리고 느리게', '세고 빠르게', '아주 여리고 아주 느리게', '아주 세고 아주 느리게'] } } } },
        ],
      },
    ],
    wrap: {
      teacher: '"같은 가락인데 장소마다 다르게 틀어야 하는 까닭을 한 문장으로 말해 볼까요?" 두 학생에게 \'빠르기와 크기가 ○○라서\' 틀로 말하게 한다. 출구 2번에서 \'가락을 바꿔야 한다\'를 고른 학생은 같은 가락을 두 속도로 다시 들려주고 음이 같은지 손가락으로 짚게 한다.',
      exit: [
        { type: 'tool', tool: 'keyboard', options: { from: '도', to: '높은도', melody: ['솔', '미', '도', '미', '솔'], tempo: 140 }, prompt: '빠르게 들려주는 가락을 듣고 건반으로 따라 쳐 보세요.', target: { notes: ['솔', '미', '도', '미', '솔'] }, difficulty: 0.25 },
        { type: 'choice', prompt: '같은 가락을 장소에 맞추려고 바꾼다면 무엇만 바꾸면 될까요?', options: ['빠르기와 크기', '가락 전체', '곡 이름'], answer: 0, difficulty: 0.2, explain: '음의 차례는 그대로 두고 빠르기와 크기만 바꾸어도 장소에 어울리는 느낌이 돼요.' },
        MOOD('같은 가락이 다르게 들리는 걸 알아보니 어땠나요?'),
      ],
    },
    ws: {
      title: '느리게 빠르게 장소 고르기',
      note: '느리고 여린 소리는 쉬는 곳에, 빠르고 센 소리는 몸을 움직이는 곳에 어울려요.',
      items: [
        { type: 'table', prompt: '같은 가락을 두 가지로 들려줄 때, 어울리는 곳과 까닭을 쓰세요.', columns: ['들려준 모습', '어울리는 곳', '까닭'], cells: [['아주 느리고 여리게', '', ''], ['아주 빠르고 세게', '', '']] },
        { type: 'figure', prompt: '선생님이 느리게 한 번, 빠르게 한 번 들려주는 가락의 계이름을 쓰세요.', wide: true, tool: 'keyboard', options: { from: '도', to: '높은도', printNames: true, printBoxes: 5 }, figures: [{ caption: '두 번 모두 음의 차례가 같았나요? ( 같다 · 다르다 )' }], answer: '도 미 솔 미 도 — 같다' },
        { type: 'choice', prompt: '병원 대기실에 어울리게 가락을 바꾸는 방법에 ○ 하세요.', options: ['여리고 느리게', '세고 빠르게'], answer: '여리고 느리게' },
        { type: 'short', prompt: '우리 집이나 학교에서 소리를 더 여리게 또는 느리게 바꾸면 좋은 곳과 까닭을 쓰세요.' },
      ],
      easy: [
        { type: 'choice', prompt: '도서관에 어울리는 소리에 ○ 하세요.', options: ['여리고 느린 소리', '세고 빠른 소리'], answer: '여리고 느린 소리' },
        { type: 'choice', prompt: '운동회에 어울리는 소리에 ○ 하세요.', options: ['빠르고 힘찬 소리', '아주 느리고 여린 소리'], answer: '빠르고 힘찬 소리' },
        { type: 'table', prompt: '장소와 어울리는 소리 모습을 쓰세요.', columns: ['장소', '소리 모습'], cells: [['잠자리', ''], ['달리기', '']] },
        { type: 'short', prompt: '오늘 들은 가락 가운데 더 마음에 든 쪽에 ○ 하고 까닭을 쓰세요.' },
      ],
    },
    diff: {
      easy: '카드를 놓으면 맞는지 바로 보여요. 가락을 들을 때 건반이 빛나요.',
      base: '카드를 스스로 잇고 확인해요. 계이름을 켜고 끌 수 있어요.',
      challenge: '장소와 어울리지 않는 함정 카드가 섞이고 건반 이름이 보이지 않아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 느리면 모두 슬프다고 여긴다 → 느리고 포근한 자장가를 들려주어 느림과 슬픔을 떼어 보게 한다. ② 가락을 바꾸어야 느낌이 달라진다고 생각한다 → 같은 음으로 빠르기만 바꾼 두 소리를 견주게 한다. ③ 장소를 고른 까닭 없이 취향만 말한다 → 빠르기·크기 낱말을 넣어 한 문장으로 말하게 한다. 소리는 학생이 누를 때만 난다.',
  }));

  // ───────────────────────── 3차시 (확장) ─────────────────────────
  const melHi = () => ({
    easy: { from: '솔', to: '높은미', black: true, names: 'solfa', showWhileListening: true },
    base: { from: '솔', to: '높은미', black: true, names: 'solfa' },
    challenge: { from: '솔', to: '높은미', black: true, names: 'none', nameToggle: false },
  });
  lessons.push(L(3, S4, {
    title: '‘엘리제를 위하여’ 첫머리를 따라 치며 되풀이 찾기',
    objective: '옛 피아노곡 ‘엘리제를 위하여’의 첫머리를 따라 치며 되풀이되는 가락 모양을 찾고, 생활 속 신호음으로도 쓰이는 까닭을 말할 수 있다.',
    ill: 'a paper piano with two black keys glowing while small paper notes bounce back and forth between them above a quiet street',
    sceneText: '되풀이되는 가락',
    intro: {
      teacher: '"길에서 이 가락을 들어 본 친구 있나요?" 음원으로 첫머리 10초를 들려주고 어디서 들었는지 말하게 한다. "처음 듣는 가락이라 모르겠어요"라는 학생에게는 "짧은 가락이 계속 왔다 갔다 하지요? 그 모양을 찾아봐요"라고 방향을 준다. 이 곡은 약 200년 전에 쓰인 피아노곡이고 지금은 저작권이 끝났음을 알려 준다.',
      student: '짧은 가락이 왔다 갔다 하는 피아노곡을 들어 봅시다. 어디서 들어 본 적이 있나요?',
      demo: { tool: 'keyboard', options: { from: '솔', to: '높은미', black: true, tempo: 100 }, sequence: [{ notes: ['높은미', '높은레#', '높은미', '높은레#', '높은미'] }] },
    },
    acts: [
      {
        id: 'a1', title: '활동 1. 첫머리 가락 따라 치기', minutes: 14, tool: 'keyboard',
        teacher: '"검은건반 하나가 나와요. 흰건반과 사이에 있는 음이에요." 가락 듣기를 먼저 누르게 한다. 검은건반이 어렵다는 학생에게는 \'레\'와 \'미\' 사이에 있는 건반을 손가락으로 짚어 주고, 첫 두 음만 번갈아 쳐 보게 한다. 마지막 문항은 같은 모양을 세 번 되풀이하니 귀로 몇 번 되풀이했는지 세게 한다.',
        task: '가락 듣기를 누르고 들은 가락을 따라 쳐요. 검은건반은 건반 위쪽에 있어요.',
        levels: melHi(),
        items: [
          { prompt: '다섯 음 첫머리예요. 가락 듣기를 누르고 따라 쳐 보세요.', toolOptions: { melody: ['높은미', '높은레#', '높은미', '높은레#', '높은미'], tempo: 100 }, target: { notes: ['높은미', '높은레#', '높은미', '높은레#', '높은미'] }, difficulty: 0.2 },
          { prompt: '이어지는 아홉 음이에요. 가락 듣기를 누르고 끝까지 따라 쳐 보세요.', toolOptions: { melody: ['높은미', '높은레#', '높은미', '높은레#', '높은미', '시', '높은레', '높은도', '라'], tempo: 104 }, target: { notes: ['높은미', '높은레#', '높은미', '높은레#', '높은미', '시', '높은레', '높은도', '라'] }, difficulty: 0.3,
            predict: { q: '이 가락의 앞부분에서 같은 모양이 되풀이될까요?', options: ['되풀이돼요', '되풀이되지 않아요', '잘 모르겠어요'], answer: 0 },
            conclude: '앞의 두 음 모양이 왔다 갔다 되풀이되고, 뒤로 가면서 아래로 내려와요.' },
          { prompt: '같은 모양을 세 번 되풀이하도록 바꾼 가락이에요. 듣고 따라 치며 몇 번 되풀이되는지 세어 보세요.', toolOptions: { melody: ['높은미', '높은레#', '높은미', '높은레#', '높은미', '높은레#', '높은미'], tempo: 100 }, target: { notes: ['높은미', '높은레#', '높은미', '높은레#', '높은미', '높은레#', '높은미'] }, reveal: 'after-check', difficulty: 0.35,
            conclude: '두 음이 번갈아 나오는 모양이 되풀이되면 귀에 오래 남아요. 그래서 신호음에도 잘 쓰여요.' },
        ],
      },
      {
        id: 'a2', title: '활동 2. 되풀이되는 가락 모양의 빈칸 채우기', minutes: 12, tool: 'pattern',
        teacher: '"가락 이름을 줄줄이 적어 놓고 비어 있는 곳을 찾아봐요. 앞에서 되풀이된 모양이 힌트예요." 빈칸 바로 앞 두 칸을 소리 내어 읽게 한다. 빈칸에 마음대로 들어가도 된다고 여기는 학생에게는 "되풀이되는 모양이 깨지면 귀에 어떻게 들릴까요?"라고 묻는다.',
        task: '가락 이름이 쭉 놓여 있어요. 되풀이되는 모양을 찾아 빈칸에 알맞은 음 이름을 넣어요.',
        levels: { easy: { mode: 'fill', perRow: 5 }, base: { mode: 'fill', perRow: 5 }, challenge: { mode: 'fill', perRow: 5 } },
        items: [
          { prompt: '가락 이름이 놓여 있어요. 빈칸에 들어갈 음을 채워 보세요.', toolOptions: { seq: ['미', '레#', '미', '레#', null, '시', '레', '도', '라'], palette: ['미', '레#', '시'] }, target: { fill: ['미'] }, difficulty: 0.15 },
          { prompt: '이번에는 둘째 칸이 비었어요. 되풀이되는 모양을 떠올려 채워 보세요.', toolOptions: { seq: ['미', null, '미', '레#', '미', '시', '레', '도', '라'], palette: ['미', '레#', '시'] }, target: { fill: ['레#'] }, difficulty: 0.25 },
          { prompt: '빈칸이 두 군데예요. 되풀이되는 모양과 뒤 가락을 살펴 채워 보세요.', toolOptions: { seq: [null, '레#', '미', '레#', '미', null, '레', '도', '라'], palette: ['미', '레#', '시'] }, target: { fill: ['미', '시'] }, difficulty: 0.35 },
        ],
      },
    ],
    wrap: {
      teacher: '"되풀이되는 짧은 가락은 왜 귀에 오래 남을까요?" 두 학생에게 말하게 한다. 출구 2번에서 \'매번 다른 가락이라서\'를 고른 학생은 다음 시간 첫머리에 첫머리 두 음을 번갈아 치며 같은 모양이 돌아오는 것을 다시 들려준다.',
      exit: [
        { type: 'tool', tool: 'pattern', options: { mode: 'fill', perRow: 4, seq: ['미', '레#', '미', null, '미', '레#', '미', '레#'], palette: ['미', '레#', '시'] }, prompt: '되풀이되는 가락 이름의 빈칸을 채워 보세요.', target: { fill: ['레#'] }, difficulty: 0.2 },
        { type: 'choice', prompt: '짧은 가락이 되풀이되면 어떤 점이 좋을까요?', options: ['귀에 오래 남아 알아듣기 쉬워요', '곡이 아주 길어져요', '악기가 늘어나요'], answer: 0, difficulty: 0.2, explain: '같은 모양이 돌아오면 기억하기 쉬워서 신호음으로도 쓰기 알맞아요.' },
        MOOD('되풀이되는 가락을 찾아보니 어땠나요?'),
      ],
    },
    ws: {
      title: '되풀이되는 가락 찾기',
      note: '짧은 가락 모양이 계속 돌아오면 그것이 되풀이예요. 되풀이되면 귀에 오래 남아요.',
      items: [
        { type: 'figure', prompt: '선생님이 들려주는 첫머리 다섯 음을 듣고 빈칸에 계이름을 쓰세요.', wide: true, tool: 'keyboard', options: { from: '솔', to: '높은미', black: true, printNames: true, printBoxes: 5 }, figures: [{ caption: '두 음이 번갈아 나오는 곳에 ○ 하세요.' }], answer: '미 레# 미 레# 미' },
        { type: 'table', prompt: '이 가락이 어디에서 쓰이면 어울릴지 쓰고 까닭을 쓰세요.', columns: ['쓰이는 곳', '까닭'], rows: 2 },
        { type: 'choice', prompt: '되풀이되는 가락의 좋은 점에 ○ 하세요.', options: ['귀에 오래 남아요', '음이 계속 바뀌어요', '소리가 작아져요'], answer: '귀에 오래 남아요' },
        { type: 'short', prompt: '내가 알고 있는 되풀이되는 알림음이나 노래를 하나 쓰세요.' },
      ],
      easy: [
        { type: 'choice', prompt: '같은 가락 모양이 계속 돌아오는 것을 무엇이라 할까요?', options: ['되풀이', '끝맺음'], answer: '되풀이' },
        { type: 'choice', prompt: '되풀이되는 가락은 귀에 어떨까요?', options: ['오래 남아요', '금방 잊어요'], answer: '오래 남아요' },
        { type: 'table', prompt: '들은 가락에서 되풀이되는 두 음을 쓰세요.', columns: ['첫째 음', '둘째 음'], rows: 1 },
        { type: 'short', prompt: '이 가락을 들으면 떠오르는 장면을 쓰세요.' },
      ],
    },
    diff: {
      easy: '가락을 듣는 동안 건반이 빛나고 계이름이 보여요. 빈칸 보기는 세 개예요.',
      base: '귀로 듣고 건반에서 음을 찾아요. 계이름을 켜고 끌 수 있어요.',
      challenge: '계이름 없이 검은건반이 있는 건반에서 귀로만 찾아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 검은건반 위치를 모른다 → 검은건반은 흰건반 사이 위쪽에 있고 \'#\'을 붙여 읽는다고 알려 준다. ② 되풀이를 같은 소리가 계속 나는 것으로 안다 → 두 음이 번갈아 돌아오는 모양도 되풀이임을 짚는다. ③ 곡 이름을 모르면 감상할 수 없다고 여긴다 → 이름이 아니라 들리는 모양을 찾는 것이 감상임을 말해 준다. 소리는 학생이 누를 때만 난다.',
  }));

  // ───────────────────────── 4차시 (확장) ─────────────────────────
  lessons.push(L(4, S4, {
    title: '‘카논’ 저음 여덟 음을 치고 되풀이 위에 쌓이는 소리 알기',
    objective: '‘카논’의 저음 여덟 음을 따라 치며 같은 저음이 되풀이되고 그 위에 소리가 쌓여 편안하고 풍성한 느낌이 나는 것을 말할 수 있다.',
    ill: 'eight stepping stones in a paper garden with colorful paper ribbons stacking above them like layered melodies',
    sceneText: '쌓이는 소리',
    intro: {
      teacher: '"카페나 영상 배경음악에서 차분하게 이어지는 곡을 들어 본 적 있나요?" 음원으로 카논의 앞부분을 20초 들려준다. "계속 같은 소리가 들려요"라는 말이 나오면 "맨 아래 저음이 되풀이되고 그 위에 가락이 하나씩 얹혀요"라고 정리한다. 저음이 가락의 전부라고 오해하는 학생에게는 낮은 소리와 위의 소리를 번갈아 들려준다.',
      student: '차분한 곡의 맨 아래에서 계속 되풀이되는 소리를 찾아봅시다. 위에는 어떤 소리가 얹히나요?',
      demo: { tool: 'keyboard', options: { from: '도', to: '높은도', tempo: 84 }, sequence: [{ notes: ['도', '솔', '라', '미'] }, { notes: ['도', '솔', '라', '미', '파', '도', '파', '솔'] }] },
    },
    acts: [
      {
        id: 'a1', title: '활동 1. 여덟 음 저음 따라 치기', minutes: 13, tool: 'keyboard',
        teacher: '"앞의 네 음이 먼저 오고 뒤의 네 음이 이어져요. 나눠서 쳐 봅시다." 네 음씩 끊어 연습하게 한다. 여덟 음을 한꺼번에 들으면 놓치는 학생에게는 가락 듣기를 몇 번이고 다시 눌러도 된다고 말한다. 마지막 문항에서 같은 저음이 돌아오는 것을 확인하면 "되풀이돼도 지루하지 않은 까닭은 위에 새 소리가 얹혀서예요"라고 말해 준다.',
        task: '가락 듣기를 누르고 들은 저음을 건반으로 따라 쳐요. 뒤에는 처음 가락이 다시 돌아와요.',
        levels: mel(),
        items: [
          { prompt: '앞의 네 음이에요. 가락 듣기를 누르고 따라 쳐 보세요.', toolOptions: { melody: ['도', '솔', '라', '미'], tempo: 84 }, target: { notes: ['도', '솔', '라', '미'] }, difficulty: 0.15 },
          { prompt: '여덟 음 저음 전체예요. 가락 듣기를 누르고 따라 쳐 보세요.', toolOptions: { melody: ['도', '솔', '라', '미', '파', '도', '파', '솔'], tempo: 84 }, target: { notes: ['도', '솔', '라', '미', '파', '도', '파', '솔'] }, difficulty: 0.25 },
          { prompt: '저음이 한 번 더 돌아와요. 열두 음을 듣고 따라 친 뒤 되풀이된 곳을 찾아보세요.', toolOptions: { melody: ['도', '솔', '라', '미', '파', '도', '파', '솔', '도', '솔', '라', '미'], tempo: 92 }, target: { notes: ['도', '솔', '라', '미', '파', '도', '파', '솔', '도', '솔', '라', '미'] }, reveal: 'after-check', difficulty: 0.35,
            predict: { q: '여덟 음 다음에는 무엇이 올까요?', options: ['처음 네 음이 다시 와요', '전혀 새로운 가락이 와요', '잘 모르겠어요'], answer: 0 },
            conclude: '같은 저음이 되풀이되고 그 위에 소리가 쌓이면 편안하면서도 풍성하게 들려요.' },
        ],
      },
      {
        id: 'a2', title: '활동 2. 곡의 느낌 설명 문장 채우기', minutes: 13, tool: 'story',
        teacher: '"들은 느낌을 \'좋아요\' 한마디로 끝내지 말고, 무엇이 그런 느낌을 줬는지 문장으로 써 봐요." 빈칸 문장을 소리 내어 읽고 카드를 놓게 한다. \'느낌\'과 \'까닭\'을 섞는 학생에게는 앞 칸은 들은 소리, 뒤 칸은 마음이라고 짚어 준다.',
        task: '곡의 느낌을 설명하는 문장의 빈칸에 알맞은 낱말 카드를 놓아요.',
        levels: cardsLv(),
        items: [
          { prompt: '카논을 들은 느낌을 설명하는 문장을 낱말 카드로 완성해 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 's1', label: '같은 저음이 되풀이되어 ___ 느낌이 나요.' }, { id: 's2', label: '위에 소리가 쌓여 ___ 들려요.' }], cards: [{ id: 'w1', text: '안정되고 편안한' }, { id: 'w2', text: '풍성하게' }] }, target: { fill: { s1: 'w1', s2: 'w2' } }, difficulty: 0.15,
            hints: ['빈칸 앞의 말이 들은 소리인지 마음인지 먼저 읽고, 그에 어울리는 낱말을 골라요.', '되풀이가 주는 느낌과 쌓이는 소리가 주는 느낌을 서로 바꾸지 않았는지 읽어 보세요.', '같은 소리가 돌아오면 안정되고 편안하고, 소리가 겹치면 풍성하게 들려요.'],
            levels: { challenge: { toolOptions: { cards: [{ id: 'w1', text: '안정되고 편안한' }, { id: 'w2', text: '풍성하게' }, { id: 'w3', text: '갑자기 끊어져' }, { id: 'w4', text: '어수선하게' }] } } } },
          { prompt: '카논이 어울리는 곳을 설명하는 문장을 완성해 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 's3', label: '차분하고 ___ 곡이라 카페에 어울려요.' }, { id: 's4', label: '빠르기가 ___ 달리기 응원에는 맞지 않아요.' }], cards: [{ id: 'x1', text: '잔잔한' }, { id: 'x2', text: '느려서' }] }, target: { fill: { s3: 'x1', s4: 'x2' } }, difficulty: 0.25,
            levels: { challenge: { toolOptions: { cards: [{ id: 'x1', text: '잔잔한' }, { id: 'x2', text: '느려서' }, { id: 'x3', text: '빨라서' }, { id: 'x4', text: '시끄러운' }] } } } },
          { prompt: '내 감상을 말하는 차례대로 카드를 놓아 보세요.', toolOptions: { slots: ['먼저', '다음', '마지막'], cards: [{ id: 'k1', text: '들은 소리를 말해요', motif: 'bird' }, { id: 'k2', text: '그 소리에서 받은 느낌을 말해요', motif: 'flower' }, { id: 'k3', text: '어울리는 장소를 말해요', motif: 'house' }] }, target: { order: ['k1', 'k2', 'k3'] }, difficulty: 0.3,
            levels: { challenge: { toolOptions: { slots: ['먼저', '다음', '마지막'], cards: [{ id: 'k1', text: '들은 소리를 말해요', motif: 'bird' }, { id: 'k2', text: '그 소리에서 받은 느낌을 말해요', motif: 'flower' }, { id: 'k3', text: '어울리는 장소를 말해요', motif: 'house' }, { id: 'k4', text: '친구 생각을 따라 말해요', motif: 'cloud' }] } } } },
        ],
      },
    ],
    wrap: {
      teacher: '"같은 저음이 돌아오는데 왜 지루하지 않았을까요?" 두 학생에게 \'위에 ○○이 얹혀서\'로 말하게 한다. 출구 2번에서 \'저음이 매번 바뀌어서\'를 고른 학생은 다음 시간 첫머리에 저음 네 음만 두 번 연속 쳐 들려주고 같은 소리가 돌아왔는지 묻는다.',
      exit: [
        { type: 'tool', tool: 'keyboard', options: { from: '도', to: '높은도', melody: ['파', '도', '파', '솔'], tempo: 88 }, prompt: '저음의 뒷부분 네 음을 듣고 건반으로 따라 쳐 보세요.', target: { notes: ['파', '도', '파', '솔'] }, difficulty: 0.25 },
        { type: 'choice', prompt: '같은 저음이 계속 되풀이될 때 느낌으로 알맞은 것은 무엇인가요?', options: ['안정되고 편안해요', '갑자기 놀라요', '서로 싸우는 듯해요'], answer: 0, difficulty: 0.2, explain: '같은 소리가 돌아오면 마음이 놓이고 편안해져요. 위에 쌓이는 소리는 풍성함을 더해요.' },
        MOOD('저음 위에 쌓이는 소리를 들어 보니 어땠나요?'),
      ],
    },
    ws: {
      title: '저음과 쌓이는 소리',
      note: '맨 아래 낮은 소리가 되풀이되면 편안하고, 그 위에 소리가 쌓이면 풍성해요.',
      items: [
        { type: 'figure', prompt: '선생님이 들려주는 저음 앞 네 음을 듣고 계이름을 쓰세요.', wide: true, tool: 'keyboard', options: { from: '도', to: '높은도', printNames: true, printBoxes: 4 }, figures: [{ caption: '뒤에 같은 네 음이 다시 돌아오나요? ( 와요 · 안 와요 )' }], answer: '도 솔 라 미 — 와요' },
        { type: 'table', prompt: '곡을 듣고 소리와 느낌을 쓰세요.', columns: ['들은 소리', '받은 느낌'], rows: 2 },
        { type: 'choice', prompt: '같은 저음이 되풀이되고 위에 소리가 쌓일 때 알맞은 느낌에 ○ 하세요.', options: ['편안하고 풍성해요', '어수선하고 거칠어요'], answer: '편안하고 풍성해요' },
        { type: 'short', prompt: '이 곡이 어울리는 장소 하나와 까닭을 쓰세요.' },
      ],
      easy: [
        { type: 'choice', prompt: '곡의 맨 아래에서 되풀이되는 것은 무엇인가요?', options: ['낮은 소리', '높은 소리'], answer: '낮은 소리' },
        { type: 'choice', prompt: '소리가 위로 쌓이면 어떻게 들릴까요?', options: ['풍성하게', '비어 보이게'], answer: '풍성하게' },
        { type: 'table', prompt: '곡의 느낌 한 낱말을 쓰세요.', columns: ['곡', '느낌'], rows: 1 },
        { type: 'short', prompt: '오늘 들은 곡이 어울리는 곳을 쓰세요.' },
      ],
    },
    diff: {
      easy: '네 음씩 나누어 치고 건반이 빛나요. 카드는 두 장만 있어요.',
      base: '여덟 음 전체를 듣고 따라 쳐요. 문장 카드는 스스로 골라요.',
      challenge: '열두 음을 계이름 없이 치고, 함정 낱말 카드가 섞여 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 같은 소리가 돌아오면 재미없다고만 여긴다 → 위에 새 소리가 얹혀 느낌이 달라지는 것을 들려 준다. ② 느낌과 소리를 한 말로 섞는다 → \'들은 소리\'와 \'받은 느낌\'을 두 칸으로 나누어 말하게 한다. ③ 어울리는 곳을 고른 까닭을 말하지 못한다 → 빠르기와 크기 낱말을 쓰게 한다. 소리는 학생이 누를 때만 난다.',
  }));

  // ───────────────────────── 5차시 (핵심) ─────────────────────────
  lessons.push(L(5, S4, {
    title: '아침 알림음을 직접 지어 쳐 보기',
    objective: '알려 주고 싶은 뜻에 맞게 가락의 방향과 빠르기를 정해 짧은 알림음을 지어 칠 수 있다.',
    ill: 'a paper alarm clock whose bell rings out a short rising ribbon of notes over a sunrise bedroom',
    sceneText: '나만의 알림음',
    intro: {
      teacher: '"휴대전화 알람 소리를 직접 고른 친구 있나요? 왜 그 소리를 골랐나요?" 두세 명이 이유를 말하게 한다. "그냥 좋아서요"에는 "높게 올라가는 소리인가요, 천천히 울리는 소리인가요?"로 소리의 모습을 묻는다. 오늘은 알려 줄 뜻을 먼저 정하고 가락을 지어 본다고 알린다.',
      student: '아침에 나를 깨워 주는 알림음을 직접 지어 봅니다. 어떤 소리면 기분 좋게 일어날 수 있을까요?',
      demo: { tool: 'keyboard', options: { from: '도', to: '높은도', tempo: 100 }, sequence: [{ notes: ['도', '미', '솔', '높은도'] }] },
    },
    acts: [
      {
        id: 'a1', title: '활동 1. 뜻에 맞는 알림음 짓기', minutes: 14, tool: 'keyboard',
        teacher: '"알려 줄 뜻이 먼저, 음은 그다음이에요. 올라가는 느낌인지 내려가는 느낌인지부터 정해요." 짓기 전에 몇 음으로 지을지 말하게 한다. 마음대로 아무 음이나 누르는 학생에게 "누르고 나서 소리를 한 번 더 듣고, 알리려던 뜻에 맞는지 귀로 확인해요"라고 짚는다.',
        task: '정해진 조건에 맞게 알림음을 지어요. 지은 뒤 두 번 쳐서 뜻에 맞는지 들어요.',
        levels: mel(),
        items: [
          { prompt: '일어나라고 알리는 소리예요. 도에서 시작해 높은도로 끝나는 네 음 알림음을 지어 보세요.', target: { compose: { length: 4, startOn: '도', endOn: '높은도' } }, difficulty: 0.15 },
          { prompt: '오늘 일이 끝났다고 알리는 소리예요. 솔로 시작해 도로 끝나는 다섯 음 알림음을 지어 보세요.', target: { compose: { length: 5, startOn: '솔', endOn: '도' } }, difficulty: 0.2 },
          { prompt: '도·미·솔 세 음만 써서 여섯 음 알림음을 지어 보세요. 한 음을 두 번 써도 돼요.', target: { compose: { length: 6, only: ['도', '미', '솔'] } }, difficulty: 0.3 },
          { prompt: '내가 정한 뜻의 알림음 네 음을 짓고, 두 번 쳐 본 뒤 해낸 것을 표시해요.', target: { compose: { length: 4 }, selfCheck: ['알리려는 뜻을 먼저 정하고 지었어요', '지은 알림음을 두 번 쳐 보았어요', '짝이 무슨 뜻인지 맞혀 보았어요'] }, difficulty: 0.2 },
        ],
      },
      {
        id: 'a2', title: '활동 2. 알림음 설계서 완성하기', minutes: 12, tool: 'story',
        teacher: '"방금 지은 알림음을 설명서로 남겨요. 뜻에 따라 가락의 방향과 빠르기가 어떻게 달라지나요?" 빈칸 문장을 읽고 카드를 놓게 한다. 올라가는 가락과 끝나는 느낌을 연결하는 학생에게는 활동 1의 두 번째 문항을 다시 쳐 소리의 방향을 확인시킨다.',
        task: '알림음 설계서의 빈칸에 알맞은 낱말 카드를 놓고, 마지막에는 짓는 차례를 놓아요.',
        levels: cardsLv(),
        items: [
          { prompt: '도착이나 시작을 알리는 알림음의 설계서를 완성해 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 's1', label: '시작을 알리는 소리는 가락이 ___ 짜요.' }, { id: 's2', label: '조용한 곳의 알림음은 ___ 쳐요.' }], cards: [{ id: 'w1', text: '올라가게' }, { id: 'w2', text: '여리게' }] }, target: { fill: { s1: 'w1', s2: 'w2' } }, difficulty: 0.15,
            hints: ['빈칸 문장이 가락의 방향을 묻는지 소리 크기를 묻는지 먼저 가려요.', '방향 낱말과 크기 낱말을 서로 바꾸지 않았는지 문장을 읽어 보세요.', '시작은 올라가는 가락으로, 조용한 곳에서는 여리게 치는 쪽이 어울려요.'],
            levels: { challenge: { toolOptions: { cards: [{ id: 'w1', text: '올라가게' }, { id: 'w2', text: '여리게' }, { id: 'w3', text: '내려가게' }, { id: 'w4', text: '아주 세게' }] } } } },
          { prompt: '끝이나 급한 일을 알리는 알림음의 설계서를 완성해 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 's3', label: '끝을 알리는 소리는 가락이 ___ 짜요.' }, { id: 's4', label: '급한 일을 알리는 소리는 ___ 쳐요.' }], cards: [{ id: 'x1', text: '내려가게' }, { id: 'x2', text: '빠르고 세게' }] }, target: { fill: { s3: 'x1', s4: 'x2' } }, difficulty: 0.25,
            levels: { challenge: { toolOptions: { cards: [{ id: 'x1', text: '내려가게' }, { id: 'x2', text: '빠르고 세게' }, { id: 'x3', text: '올라가게' }, { id: 'x4', text: '느리고 여리게' }] } } } },
          { prompt: '알림음을 짓는 차례대로 카드를 놓아 보세요.', toolOptions: { slots: ['먼저', '다음', '마지막'], cards: [{ id: 'k1', text: '무엇을 알릴지 정해요', motif: 'star' }, { id: 'k2', text: '음 수와 방향을 정해 건반으로 지어요', motif: 'flower' }, { id: 'k3', text: '쳐 보고 뜻에 맞게 고쳐요', motif: 'sun' }] }, target: { order: ['k1', 'k2', 'k3'] }, difficulty: 0.25,
            levels: { challenge: { toolOptions: { slots: ['먼저', '다음', '마지막'], cards: [{ id: 'k1', text: '무엇을 알릴지 정해요', motif: 'star' }, { id: 'k2', text: '음 수와 방향을 정해 건반으로 지어요', motif: 'flower' }, { id: 'k3', text: '쳐 보고 뜻에 맞게 고쳐요', motif: 'sun' }, { id: 'k4', text: '친구 것을 그대로 베껴요', motif: 'cloud' }] } } } },
        ],
      },
    ],
    wrap: {
      teacher: '"내 알림음의 뜻을 짝이 맞혔나요? 못 맞혔다면 무엇을 고치면 될까요?" 두 모둠에게 발표시킨다. 출구 2번에서 \'뜻과 상관없이 아무 음이나\'를 고른 학생은 다음 시간 첫머리에 뜻이 정해진 두 소리를 비교해 들려주고 어느 쪽이 알맞은지 묻는다.',
      exit: [
        { type: 'tool', tool: 'keyboard', options: { from: '도', to: '높은도', black: false }, prompt: '“문을 닫아 주세요”를 알리는 소리예요. 도에서 시작해 솔로 끝나는 세 음 알림음을 지어 보세요.', target: { compose: { length: 3, startOn: '도', endOn: '솔' } }, difficulty: 0.2 },
        { type: 'choice', prompt: '알림음을 지을 때 가장 먼저 해야 할 일은 무엇일까요?', options: ['알리려는 뜻을 정해요', '아무 건반이나 눌러요', '가장 센 소리를 골라요'], answer: 0, difficulty: 0.2, explain: '뜻을 먼저 정해야 가락의 방향과 빠르기를 거기에 맞게 고를 수 있어요.' },
        MOOD('내 알림음을 지어 보니 어땠나요?'),
      ],
    },
    ws: {
      title: '내 알림음 설계서',
      note: '시작은 올라가는 가락, 끝은 내려가는 가락, 조용한 곳은 여리게예요.',
      items: [
        { type: 'figure', prompt: '내가 지은 알림음의 계이름을 빈칸에 쓰세요.', wide: true, tool: 'keyboard', options: { from: '도', to: '높은도', printNames: true, printBoxes: 5 }, figures: [{ caption: '가락은 올라가나요, 내려가나요? ( 올라가요 · 내려가요 )' }], answer: '학생이 지은 가락과 방향이 맞으면 정답' },
        { type: 'table', prompt: '알림음 설계서를 채우세요.', columns: ['알릴 뜻', '가락 방향', '빠르기·크기'], rows: 2 },
        { type: 'choice', prompt: '끝났다고 알리는 소리에 어울리는 가락에 ○ 하세요.', options: ['아래로 내려가는 가락', '계속 올라가는 가락'], answer: '아래로 내려가는 가락' },
        { type: 'short', prompt: '내 알림음을 듣는 사람이 어떤 마음이 되기를 바라는지 쓰세요.' },
      ],
      easy: [
        { type: 'choice', prompt: '시작을 알리는 소리에 어울리는 가락에 ○ 하세요.', options: ['올라가는 가락', '내려가는 가락'], answer: '올라가는 가락' },
        { type: 'choice', prompt: '조용한 곳의 알림음은 어떻게 쳐야 할까요?', options: ['여리게', '아주 세게'], answer: '여리게' },
        { type: 'table', prompt: '뜻과 가락 방향을 이어 쓰세요.', columns: ['알릴 뜻', '가락 방향'], cells: [['일어나요', ''], ['다 끝났어요', '']] },
        { type: 'short', prompt: '내가 지은 알림음의 뜻을 쓰세요.' },
      ],
    },
    diff: {
      easy: '가락을 짓는 동안 건반 이름이 보이고 카드는 두 장만 있어요.',
      base: '조건을 읽고 스스로 짓고 설계서 카드를 놓아요.',
      challenge: '건반 이름 없이 지어요. 설계서 카드에 함정 카드가 섞여 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 뜻을 정하지 않고 건반만 누른다 → 짓기 전에 말로 먼저 뜻을 말하게 한다. ② 올라가는 가락을 세게 치는 것과 같다고 여긴다 → 높이와 크기를 따로 바꾸어 쳐 보게 한다. ③ 친구 것과 같아야 한다고 걱정한다 → 정답이 하나가 아니라 뜻에 맞으면 된다고 말해 준다. 소리는 학생이 누를 때만 난다.',
  }));

  // ───────────────────────── 6차시 (연습) ─────────────────────────
  lessons.push(L(6, S4, {
    title: '박수 신호 리듬을 블록으로 놓고 짓기',
    objective: '생활 속 신호에 쓰이는 짧은 리듬을 듣고 블록으로 놓은 뒤, 한 마디를 4박으로 채워 나만의 신호 리듬을 지을 수 있다.',
    ill: 'a group of children clapping a short rhythm at a school gate while paper note blocks line up in a row above them',
    sceneText: '박수 신호 리듬',
    intro: {
      teacher: '"축구장 응원단이 손뼉으로 짧은 리듬을 치는 걸 본 적 있나요? 한 번만 들어도 따라 칠 수 있었지요?" 시연 단추로 짧은 리듬을 들려주고 손뼉으로 따라 치게 한다. "빠르게 치면 어려워요"라는 학생에게 "한 박은 같은 속도로 걸어요. 박은 발로 구르고 리듬은 손으로 쳐 봐요"라고 말해 준다.',
      student: '짧은 박수 리듬을 듣고 손뼉으로 따라 쳐 봅시다. 한 박은 걸음처럼 같은 속도로 가요.',
      demo: { tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 2 }, sequence: [{ rhythm: ['q', 'q', 'h'] }, { rhythm: ['q', 'q', 'h', 'q', 'q', 'q', 'qr'] }] },
    },
    acts: [
      {
        id: 'a1', title: '활동 1. 들은 신호 리듬 블록으로 놓기', minutes: 14, tool: 'keyboard',
        teacher: '"리듬 듣기를 누르고 손뼉으로 먼저 따라 친 뒤 블록을 놓아요. 한 마디는 4박이에요." 마디마다 박 수를 손가락으로 세게 한다. 쉼표를 \'아무것도 안 하는 칸\'이라고 여기는 학생에게는 쉼표 박에서 손을 펴서 앞으로 내밀며 \'쉬는 박\'을 세게 한다.',
        task: '리듬 듣기를 누르고 손뼉으로 따라 친 뒤, 들은 리듬을 블록으로 놓아요. 한 마디는 4박이에요.',
        levels: rhy(4, 2),
        items: [
          { prompt: '응원단의 첫째 신호예요. 듣고 블록으로 놓아 보세요.', toolOptions: { pattern: ['q', 'q', 'h', 'q', 'q', 'q', 'qr'] }, target: { rhythm: ['q', 'q', 'h', 'q', 'q', 'q', 'qr'] }, difficulty: 0.15 },
          { prompt: '둘째 신호예요. 빠른 소리가 섞여 있어요. 듣고 블록으로 놓아 보세요.', toolOptions: { pattern: ['e', 'e', 'e', 'e', 'q', 'q', 'h', 'q', 'qr'] }, target: { rhythm: ['e', 'e', 'e', 'e', 'q', 'q', 'h', 'q', 'qr'] }, difficulty: 0.3,
            predict: { q: '빠른 블록(8분음표)은 두 개가 모이면 몇 박일까요?', options: ['한 박이에요', '두 박이에요', '잘 모르겠어요'], answer: 0 },
            conclude: '8분음표 두 개가 합쳐 한 박이 돼요. 그래서 빠른 소리가 있어도 한 마디는 4박이에요.' },
          { prompt: '셋째 신호예요. 쉬는 곳을 귀로 찾아 블록으로 놓아 보세요.', toolOptions: { pattern: ['h', 'q', 'q', 'q', 'q', 'h'] }, target: { rhythm: ['h', 'q', 'q', 'q', 'q', 'h'] }, reveal: 'after-check', difficulty: 0.3 },
        ],
      },
      {
        id: 'a2', title: '활동 2. 한 마디 4박 채워 신호 리듬 짓기', minutes: 12, tool: 'keyboard',
        teacher: '"조건을 하나씩 지키면서 두 마디를 모두 4박으로 채워요. 블록이 모자라거나 넘치면 마디 박 수가 틀려요." 완성한 뒤 손뼉으로 쳐 보게 한다. 쉼표를 빼고 박 수만 맞추는 학생에게는 조건에 쉼표가 있는지 다시 읽게 한다.',
        task: '조건에 맞게 두 마디를 4박씩 채워 신호 리듬을 지어요. 지은 뒤 손뼉으로 쳐 봐요.',
        levels: rhy(4, 2),
        items: [
          { prompt: '8분음표를 꼭 한 번 이상 넣어 두 마디를 4박씩 채워 보세요.', target: { beats: true, use: ['e'] }, difficulty: 0.2 },
          { prompt: '쉼표를 하나 이상 넣어 두 마디를 4박씩 채워 보세요.', target: { beats: true, rests: 1 }, difficulty: 0.25 },
          { prompt: '2분음표를 꼭 한 번 이상 넣어 두 마디를 4박씩 채워 보세요.', target: { beats: true, use: ['h'] }, difficulty: 0.25 },
          { prompt: '나만의 신호 리듬을 짓고 두 번 손뼉으로 친 뒤 해낸 것을 표시해요.', target: { beats: true, selfCheck: ['두 마디를 4박씩 채웠어요', '손뼉으로 두 번 쳐 보았어요', '짝이 같은 신호인지 따라 쳐 보았어요'] }, difficulty: 0.2 },
        ],
      },
    ],
    wrap: {
      teacher: '"신호로 쓰는 리듬이 쉽게 따라 칠 수 있어야 하는 까닭은 무엇일까요?" 두 학생에게 말하게 한다. 출구 2번에서 한 마디를 5박으로 센 학생은 다음 시간 첫머리에 발로 박을 구르며 블록 합을 함께 센다.',
      exit: [
        { type: 'tool', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 2, blocks: ['q', 'e', 'h', 'qr'], pattern: ['q', 'e', 'e', 'q', 'q', 'h', 'q', 'q'] }, prompt: '새 신호 리듬을 듣고 블록으로 놓아 보세요.', target: { rhythm: ['q', 'e', 'e', 'q', 'q', 'h', 'q', 'q'] }, difficulty: 0.25 },
        { type: 'choice', prompt: '4박 한 마디에 4분음표 두 개와 2분음표 한 개를 놓았어요. 모두 몇 박일까요?', options: ['4박이에요', '3박이에요', '5박이에요'], answer: 0, difficulty: 0.2, explain: '4분음표는 1박씩 2박, 2분음표는 2박이라 모두 4박이에요.' },
        MOOD('신호 리듬을 짓고 쳐 보니 어땠나요?'),
      ],
    },
    ws: {
      title: '신호 리듬 한 마디 채우기',
      note: '4분음표는 1박, 8분음표 둘은 1박, 2분음표는 2박, 쉼표도 박 수를 가져요.',
      items: [
        { type: 'figure', prompt: '리듬을 보고 마디마다 몇 박인지 쓰세요.', wide: true, tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 2 }, figures: [{ state: { rhythm: ['q', 'q', 'e', 'e', 'q', 'h', 'q', 'qr'] }, caption: '첫째 마디 ___박, 둘째 마디 ___박' }], answer: '첫째 마디 4박, 둘째 마디 4박' },
        { type: 'table', prompt: '내가 지은 신호 리듬을 블록 이름으로 적고 마디 박 수를 쓰세요.', columns: ['마디', '블록 이름', '박 수'], cells: [['첫째', '', ''], ['둘째', '', '']] },
        { type: 'choice', prompt: '쉼표에 대해 맞는 말에 ○ 하세요.', options: ['쉬는 박도 박 수를 가져요', '쉼표는 박 수가 없어요'], answer: '쉬는 박도 박 수를 가져요' },
        { type: 'short', prompt: '내가 지은 신호 리듬을 어디에서 쓰면 좋을지 쓰세요.' },
      ],
      easy: [
        { type: 'choice', prompt: '4분음표는 몇 박일까요?', options: ['1박', '2박'], answer: '1박' },
        { type: 'choice', prompt: '8분음표 두 개는 모두 몇 박일까요?', options: ['1박', '4박'], answer: '1박' },
        { type: 'table', prompt: '박 수를 쓰세요.', columns: ['블록', '박 수'], cells: [['2분음표', ''], ['4분쉼표', '']] },
        { type: 'short', prompt: '오늘 친 리듬 가운데 가장 재미있었던 것을 쓰세요.' },
      ],
    },
    diff: {
      easy: '마디마다 지금 박 수가 보이고 8분음표가 두 개씩 놓여요.',
      base: '박 수를 스스로 세며 블록을 놓아요.',
      challenge: '점2분음표와 8분쉼표까지 블록이 늘어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 한 마디를 소리 개수로 센다 → 블록마다 박 수를 말하며 더하게 한다. ② 8분음표를 빠른 박이라 여긴다 → 박은 같은 속도이고 한 박이 쪼개진 것임을 발 구르기로 보여 준다. ③ 쉼표 박을 빠뜨린다 → 쉼표에서 손을 펴 쉬는 박을 세게 한다. 소리는 학생이 누를 때만 난다.',
  }));

  // ───────────────────────── 7차시 (확장) ─────────────────────────
  lessons.push(L(7, S4, {
    title: '도서관·운동장·잠자리에 맞는 배경 가락 짓고 고르기',
    objective: '장소와 쓰임에 어울리게 음 높이와 빠르기를 정해 짧은 배경 가락을 짓고, 가락을 고른 까닭을 말할 수 있다.',
    ill: 'a paper library, playground and bedroom side by side with a different small ribbon of musical notes floating above each',
    sceneText: '장소에 맞는 가락',
    intro: {
      teacher: '"같은 학교인데 도서관과 운동장은 흐르는 음악이 다르면 좋겠지요? 어떻게 다를까요?" 빠르기, 크기, 높이를 낱말로 말하게 한다. "도서관은 음악이 없는 게 좋아요"라고 하는 학생에게는 "쉬는 곳이나 로비처럼 음악이 도움이 되는 곳도 있어요. 어떤 곳일까요?"라고 되묻는다.',
      student: '도서관, 운동장, 잠자리에 틀 배경 가락을 지어 봅니다. 장소마다 어떻게 달라야 할까요?',
      demo: { tool: 'keyboard', options: { from: '도', to: '높은도', tempo: 60 }, sequence: [{ notes: ['도', '미', '솔', '미', '도'] }] },
    },
    acts: [
      {
        id: 'a1', title: '활동 1. 장소에 맞는 가락 짓기', minutes: 14, tool: 'keyboard',
        teacher: '"장소를 먼저 떠올리고 그곳에서 사람들이 어떻게 움직이는지 말한 뒤 지어요." 지은 가락을 장소에 맞는 빠르기로 쳐 보게 한다. 모든 장소에 같은 가락을 짓는 학생에게는 "운동장에서 쉬는 사람도 쉬는 소리를 듣고 싶을까요?"라고 묻는다.',
        task: '정해진 조건에 맞게 장소별 배경 가락을 지어요. 지은 뒤 장소에 맞는 빠르기로 쳐 봐요.',
        levels: mel(),
        items: [
          { prompt: '도서관 쉼터에 틀 가락이에요. 도·레·미·솔·라 다섯 음만 써서 도로 끝나는 여섯 음 가락을 지어 보세요.', target: { compose: { length: 6, endOn: '도', only: ['도', '레', '미', '솔', '라'] } }, difficulty: 0.2 },
          { prompt: '운동장에서 달리기 전에 틀 가락이에요. 도로 시작해 높은도로 끝나는 여덟 음 가락을 지어 보세요.', target: { compose: { length: 8, startOn: '도', endOn: '높은도' } }, difficulty: 0.25 },
          { prompt: '잠들기 전에 들려줄 가락이에요. 솔로 시작해 도로 끝나는 다섯 음 가락을 도·레·미·솔로만 지어 보세요.', target: { compose: { length: 5, startOn: '솔', endOn: '도', only: ['도', '레', '미', '솔'] } }, difficulty: 0.3 },
          { prompt: '내가 고른 장소의 가락을 짓고, 빠르기를 정해 쳐 본 뒤 해낸 것을 표시해요.', target: { compose: { length: 6 }, selfCheck: ['장소를 먼저 정했어요', '장소에 맞게 빠르기를 정해 쳤어요', '왜 그 빠르기인지 말할 수 있어요'] }, difficulty: 0.2 },
        ],
      },
      {
        id: 'a2', title: '활동 2. 장소에 알맞은 가락 고르기', minutes: 12, tool: 'emotion',
        teacher: '"친구가 가락을 고르려고 해요. 어떤 가락이 어울릴지 까닭과 함께 골라 봐요." 고른 뒤 나오는 결과 글을 소리 내어 읽게 한다. 틀린 보기를 골랐을 때는 \'그 가락이 나쁜 가락\'이 아니라 \'그 장소에 안 어울리는 가락\'이라고 짚는다.',
        task: '상황을 읽고 장소에 가장 알맞은 가락을 골라요. 고른 뒤 나오는 결과를 읽어요.',
        levels: { easy: { mode: 'branch' }, base: { mode: 'branch' }, challenge: { mode: 'branch' } },
        items: [
          { prompt: '민지가 도서관 쉼터에 틀 가락을 고르려 해요. 어느 가락이 알맞을까요?', toolOptions: { situation: '민지는 도서관 쉼터에서 책을 읽는 친구들을 위해 가락을 골라요.', ask: '어떤 가락을 틀면 좋을까요?', choices: [{ id: 'a', text: '아주 빠르고 센 가락', result: '책 읽던 친구들이 집중하기 어려워 자리를 떠났어요.', mood: '걱정', why: '도서관은 조용히 집중하는 곳이에요. 빠르고 센 가락은 어울리지 않아요.' }, { id: 'b', text: '느리고 여린 가락', result: '친구들이 편안하게 책을 읽을 수 있었어요.', mood: '편안함' }] }, target: { choice: 'b' }, difficulty: 0.15 },
          { prompt: '준호가 운동장 달리기에 틀 가락을 고르려 해요. 어느 가락이 알맞을까요?', toolOptions: { situation: '준호는 체육 시간 달리기에 쓸 가락을 골라요.', ask: '어떤 가락을 틀면 좋을까요?', choices: [{ id: 'a', text: '느리고 아주 여린 가락', result: '친구들이 달릴 힘이 나지 않았어요.', mood: '걱정', why: '달리기에는 힘차게 몸을 움직이게 하는 가락이 필요해요.' }, { id: 'b', text: '빠르고 힘찬 가락', result: '친구들이 박에 맞춰 신나게 달렸어요.', mood: '신남' }] }, target: { choice: 'b' }, difficulty: 0.2 },
          { prompt: '병원에서 무서워하는 아이에게 틀 가락을 고르려 해요. 어느 가락이 알맞을까요?', toolOptions: { situation: '병원 대기실에서 한 아이가 주사를 무서워하고 있어요.', ask: '어떤 가락을 틀면 좋을까요?', choices: [{ id: 'a', text: '갑자기 크게 울리는 가락', result: '아이가 더 놀라서 울음을 터뜨렸어요.', mood: '무서움', why: '갑자기 커지는 소리는 놀라게 해요. 편안함이 필요한 곳이에요.' }, { id: 'b', text: '느리고 포근한 가락', result: '아이가 숨을 크게 쉬며 마음이 풀렸어요.', mood: '편안함' }, { id: 'c', text: '아주 빠르고 높은 가락', result: '아이가 더 긴장했어요.', mood: '걱정', why: '빠르고 높은 소리는 긴장을 키워요.' }] }, target: { choice: 'b' }, difficulty: 0.25 },
        ],
      },
    ],
    wrap: {
      teacher: '"장소에 맞는 가락을 고를 때 꼭 살필 것 두 가지는 무엇이었나요?" 두 학생에게 빠르기와 크기 낱말을 넣어 말하게 한다. 출구 2번에서 \'좋아하는 가락이면 어디서나\'를 고른 학생은 다음 시간 첫머리에 같은 가락을 두 장소에서 틀 때 사람들의 반응이 어떨지 말해 보게 한다.',
      exit: [
        { type: 'tool', tool: 'keyboard', options: { from: '도', to: '높은도' }, prompt: '아기를 재우는 방에 틀 가락이에요. 솔로 시작해 도로 끝나는 네 음 가락을 지어 보세요.', target: { compose: { length: 4, startOn: '솔', endOn: '도' } }, difficulty: 0.25 },
        { type: 'choice', prompt: '배경 가락을 고를 때 가장 먼저 살필 것은 무엇일까요?', options: ['그 장소에서 사람들이 하는 일', '내가 가장 좋아하는 가락', '가장 센 소리'], answer: 0, difficulty: 0.2, explain: '장소와 하는 일을 먼저 생각해야 가락의 빠르기와 크기를 맞게 고를 수 있어요.' },
        MOOD('장소에 맞는 가락을 지어 보니 어땠나요?'),
      ],
    },
    ws: {
      title: '장소에 맞는 배경 가락',
      note: '쉬는 곳은 느리고 여리게, 움직이는 곳은 빠르고 힘차게 어울려요.',
      items: [
        { type: 'table', prompt: '장소와 어울리는 가락 모습을 쓰세요.', columns: ['장소', '빠르기', '크기'], cells: [['도서관 쉼터', '', ''], ['운동장', '', ''], ['잠자리', '', '']] },
        { type: 'figure', prompt: '내가 지은 도서관용 가락의 계이름을 쓰세요.', wide: true, tool: 'keyboard', options: { from: '도', to: '높은도', printNames: true, printBoxes: 6 }, figures: [{ caption: '느린가요, 빠른가요? ( 느려요 · 빨라요 )' }], answer: '학생이 지은 가락 — 느려요' },
        { type: 'choice', prompt: '병원 대기실에 알맞은 가락에 ○ 하세요.', options: ['느리고 포근한 가락', '갑자기 크게 울리는 가락'], answer: '느리고 포근한 가락' },
        { type: 'short', prompt: '내 방에 어울리는 배경 가락을 말로 설명해 보세요.' },
      ],
      easy: [
        { type: 'choice', prompt: '달리기에 알맞은 가락에 ○ 하세요.', options: ['빠르고 힘찬 가락', '느리고 여린 가락'], answer: '빠르고 힘찬 가락' },
        { type: 'choice', prompt: '도서관에 알맞은 가락에 ○ 하세요.', options: ['여린 가락', '센 가락'], answer: '여린 가락' },
        { type: 'table', prompt: '장소와 가락 모습을 이어 쓰세요.', columns: ['장소', '가락 모습'], cells: [['잠자리', ''], ['운동장', '']] },
        { type: 'short', prompt: '지은 가락이 어울리는 장소를 쓰세요.' },
      ],
    },
    diff: {
      easy: '보기가 두 개이고 고르면 바로 결과가 나와요. 가락을 지을 때 건반 이름이 보여요.',
      base: '상황을 읽고 가락을 고르고 스스로 지어요.',
      challenge: '건반 이름 없이 짓고, 병원 장면은 보기가 세 개예요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 좋아하는 가락이면 어디서나 어울린다고 여긴다 → 장소에서 사람들이 하는 일을 먼저 말하게 한다. ② 틀린 보기를 나쁜 가락으로 단정한다 → 가락이 아니라 장소에 안 맞는 것임을 짚는다. ③ 빠르기와 높이를 헷갈린다 → 목소리로 따로 바꾸어 들려준다. 소리는 학생이 누를 때만 난다.',
  }));

  // ───────────────────────── 8차시 (확장) ─────────────────────────
  lessons.push(L(8, S4, {
    title: '심장·빗방울·발걸음 소리를 리듬 블록으로 옮기기',
    objective: '생활 속 소리의 규칙적인 박과 쪼개진 박을 듣고 리듬 블록으로 옮기며, 규칙적인 소리와 들쑥날쑥한 소리를 구별할 수 있다.',
    ill: 'a paper heart, a rain cloud and a pair of walking shoes each sending a different row of rhythm blocks across a quiet city night',
    sceneText: '생활 소리 리듬',
    intro: {
      teacher: '"조용히 눈을 감고 내 심장 소리나 손목 맥박을 찾아봐요. 어떤 박자로 뛰나요?" 손목에 손가락을 대게 하고 한 박씩 세어 보게 한다. "소리가 일정하지 않아요"라는 말에는 "빠르게 뛴 뒤에는 다르지요. 쉬고 있을 때 박이 일정한지 다시 느껴 봐요"라고 짚는다.',
      student: '손목이나 가슴에 손을 대고 내 심장이 뛰는 소리를 세어 봅시다. 박이 일정한가요?',
      demo: { tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 2 }, sequence: [{ rhythm: ['q', 'qr', 'q', 'qr'] }, { rhythm: ['q', 'qr', 'q', 'qr', 'q', 'qr', 'q', 'qr'] }] },
    },
    acts: [
      {
        id: 'a1', title: '활동 1. 생활 소리 리듬으로 옮기기', minutes: 14, tool: 'keyboard',
        teacher: '"소리를 들으면서 한 박마다 발을 굴러요. 어디가 소리 나는 박이고 어디가 쉬는 박인지 찾아요." 심장 소리는 소리 한 번과 쉼이 번갈아 온다고 말한다. 소리 개수만 세는 학생에게는 쉬는 박도 한 칸을 차지한다는 것을 손을 펴서 보여 준다.',
        task: '리듬 듣기를 누르고 손뼉으로 따라 친 뒤, 생활 소리를 블록으로 놓아요. 한 마디는 4박이에요.',
        levels: rhy(4, 2),
        items: [
          { prompt: '심장 뛰는 소리예요. 소리와 쉼이 번갈아 와요. 듣고 블록으로 놓아 보세요.', toolOptions: { pattern: ['q', 'qr', 'q', 'qr', 'q', 'qr', 'q', 'qr'] }, target: { rhythm: ['q', 'qr', 'q', 'qr', 'q', 'qr', 'q', 'qr'] }, difficulty: 0.15 },
          { prompt: '유리창에 빗방울이 떨어지는 소리예요. 빠른 소리가 섞여 있어요. 듣고 블록으로 놓아 보세요.', toolOptions: { pattern: ['e', 'e', 'q', 'e', 'e', 'q', 'q', 'q', 'h'] }, target: { rhythm: ['e', 'e', 'q', 'e', 'e', 'q', 'q', 'q', 'h'] }, difficulty: 0.3,
            predict: { q: '빗방울 소리에는 같은 모양이 되풀이될까요?', options: ['되풀이돼요', '되풀이되지 않아요', '잘 모르겠어요'], answer: 0 },
            conclude: '빠른 두 소리와 한 소리가 번갈아 되풀이돼요. 되풀이를 찾으면 리듬을 쉽게 옮겨요.' },
          { prompt: '학교 복도에서 걷는 발걸음 소리예요. 소리의 길고 짧음을 귀로 찾아 블록으로 놓아 보세요.', toolOptions: { pattern: ['e', 'e', 'q', 'e', 'e', 'q', 'h', 'h'] }, target: { rhythm: ['e', 'e', 'q', 'e', 'e', 'q', 'h', 'h'] }, reveal: 'after-check', difficulty: 0.35 },
        ],
      },
      {
        id: 'a2', title: '활동 2. 규칙적인 소리와 들쑥날쑥한 소리 나누기', minutes: 12, tool: 'mindmap',
        teacher: '"박이 규칙적으로 돌아오는 소리와 그렇지 않은 소리를 나눠 봐요. 규칙적이면 음악으로 옮기기 쉬워요." 카드 글을 읽고 한 가지씩 시험해 보게 한다. 시계는 규칙적이고 사람 말소리는 들쑥날쑥하다고 판단하지 못하면 손뼉으로 똑같이 쳐 보게 한다.',
        task: '생활 소리 카드를 읽고, 박이 규칙적인지 들쑥날쑥한지로 나누어요.',
        levels: cardsLv(),
        items: [
          { prompt: '생활 소리를 박이 규칙적인지로 나누어 보세요.', toolOptions: { topic: '박의 모습', slots: ['규칙적이에요', '들쑥날쑥해요'], cards: ['시계 초침 소리', '메트로놈 소리', '사람이 급히 달려가는 발소리', '사람들이 웅성거리는 소리'] }, target: { sort: { '규칙적이에요': ['시계 초침 소리', '메트로놈 소리'], '들쑥날쑥해요': ['사람이 급히 달려가는 발소리', '사람들이 웅성거리는 소리'] } }, difficulty: 0.2,
            levels: { challenge: { toolOptions: { cards: ['시계 초침 소리', '메트로놈 소리', '사람이 급히 달려가는 발소리', '사람들이 웅성거리는 소리', '잠잘 때 쉬는 숨소리'] } } } },
          { prompt: '자연과 집 안 소리도 나누어 보세요.', toolOptions: { topic: '자연과 집 소리', slots: ['규칙적이에요', '들쑥날쑥해요'], cards: ['밤 개구리의 일정한 울음', '창가 풍경의 센 바람 소리', '조용한 방 시계 소리', '빗줄기가 거세지는 소리'] }, target: { sort: { '규칙적이에요': ['밤 개구리의 일정한 울음', '조용한 방 시계 소리'], '들쑥날쑥해요': ['창가 풍경의 센 바람 소리', '빗줄기가 거세지는 소리'] } }, difficulty: 0.25,
            levels: { challenge: { toolOptions: { cards: ['밤 개구리의 일정한 울음', '창가 풍경의 센 바람 소리', '조용한 방 시계 소리', '빗줄기가 거세지는 소리', '아침 새소리'] } } } },
          { prompt: '규칙적인 소리를 음악에 쓰면 좋은 점과 어려운 점으로 나누어 보세요.', toolOptions: { topic: '규칙적인 박', slots: ['좋은 점', '어려운 점'], cards: ['따라 치기 쉬워요', '여럿이 맞추기 쉬워요', '너무 되풀이되면 지루할 수 있어요', '변화를 주지 않으면 심심해요'] }, target: { sort: { '좋은 점': ['따라 치기 쉬워요', '여럿이 맞추기 쉬워요'], '어려운 점': ['너무 되풀이되면 지루할 수 있어요', '변화를 주지 않으면 심심해요'] } }, difficulty: 0.3,
            levels: { challenge: { toolOptions: { cards: ['따라 치기 쉬워요', '여럿이 맞추기 쉬워요', '너무 되풀이되면 지루할 수 있어요', '변화를 주지 않으면 심심해요', '소리가 커져요'] } } } },
        ],
      },
    ],
    wrap: {
      teacher: '"규칙적인 소리를 음악으로 옮기면 좋은 점과 지루해질 수 있는 점을 하나씩 말해 볼까요?" 두 학생에게 말하게 한다. 출구 2번에서 \'모든 소리가 규칙적\'을 고른 학생은 다음 시간 첫머리에 사람들이 웅성거리는 소리를 손뼉으로 따라 치게 해 들쑥날쑥함을 느끼게 한다.',
      exit: [
        { type: 'tool', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 2, blocks: ['q', 'e', 'h', 'qr'], pattern: ['q', 'q', 'q', 'q', 'e', 'e', 'q', 'h'] }, prompt: '시곗바늘 소리를 옮긴 리듬을 듣고 블록으로 놓아 보세요.', target: { rhythm: ['q', 'q', 'q', 'q', 'e', 'e', 'q', 'h'] }, difficulty: 0.25 },
        { type: 'choice', prompt: '메트로놈 소리는 어떤 소리일까요?', options: ['박이 규칙적으로 돌아와요', '박이 들쑥날쑥해요', '소리 없이 쉬기만 해요'], answer: 0, difficulty: 0.2, explain: '메트로놈은 같은 박을 같은 간격으로 내요. 그래서 박을 맞추는 데 쓰여요.' },
        MOOD('생활 소리를 리듬으로 옮겨 보니 어땠나요?'),
      ],
    },
    ws: {
      title: '생활 소리 리듬 일기',
      note: '규칙적인 소리는 박이 같은 간격으로 돌아오고, 쉼표도 박을 차지해요.',
      items: [
        { type: 'figure', prompt: '심장 소리를 리듬으로 옮긴 것이에요. 마디마다 몇 박인지 쓰세요.', wide: true, tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 2 }, figures: [{ state: { rhythm: ['q', 'qr', 'q', 'qr', 'q', 'qr', 'q', 'qr'] }, caption: '첫째 마디 ___박, 둘째 마디 ___박' }], answer: '첫째 마디 4박, 둘째 마디 4박' },
        { type: 'table', prompt: '생활 소리를 규칙적인지 아닌지로 나누어 쓰세요.', columns: ['소리', '규칙적인가요?'], cells: [['시계 초침', ''], ['급히 뛰는 발소리', '']] },
        { type: 'choice', prompt: '음악에서 규칙적인 박이 좋은 까닭에 ○ 하세요.', options: ['여럿이 맞추기 쉬워요', '소리가 작아져요'], answer: '여럿이 맞추기 쉬워요' },
        { type: 'short', prompt: '오늘 집에서 찾은 규칙적인 소리와 그 박을 쓰세요.' },
      ],
      easy: [
        { type: 'choice', prompt: '시계 초침 소리의 박은 어떤가요?', options: ['규칙적이에요', '들쑥날쑥해요'], answer: '규칙적이에요' },
        { type: 'choice', prompt: '심장 소리 리듬에서 쉬는 칸에 쓰는 블록은 무엇일까요?', options: ['쉼표', '2분음표'], answer: '쉼표' },
        { type: 'table', prompt: '소리 모습을 쓰세요.', columns: ['소리', '규칙적(○)/아님(×)'], cells: [['메트로놈', ''], ['웅성거림', '']] },
        { type: 'short', prompt: '오늘 들은 소리 가운데 리듬으로 옮기고 싶은 것을 쓰세요.' },
      ],
    },
    diff: {
      easy: '마디마다 지금 박 수가 보이고, 카드를 놓으면 맞는지 바로 보여요.',
      base: '소리를 듣고 스스로 블록을 놓고 카드를 나누어요.',
      challenge: '블록 종류가 늘고, 카드에 함정이 한 장 더 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 쉼표 박을 빼고 센다 → 쉬는 박에서도 발을 굴러 박을 이어 간다. ② 규칙적인 소리를 모두 똑같은 소리라고 본다 → 소리 높이는 달라도 박 간격이 같으면 규칙적임을 짚는다. ③ 규칙적이면 항상 좋은 음악이라 여긴다 → 변화가 필요한 때도 있음을 말해 준다. 소리는 학생이 누를 때만 난다.',
  }));

  // ───────────────────────── 9차시 (핵심) ─────────────────────────
  lessons.push(L(9, S4, {
    title: '내가 고른 생활 음악을 소리 근거로 소개하기',
    objective: '내가 고른 생활 속 음악의 소리 특징과 받은 느낌을 연결하여 소개 문장으로 말하고, 친구 소개에 얼마나 공감했는지 돌아볼 수 있다.',
    ill: 'a child holding up a paper record sleeve while three small paper listeners lean in with glowing hearts',
    sceneText: '내가 고른 음악',
    intro: {
      teacher: '"여러분이 요즘 자주 듣는 음악이나 소리가 있나요? 한 가지만 떠올려 보세요." 곡 이름 대신 \'언제, 어디서 듣는 소리\'로 말해도 된다고 알린다. "그냥 좋아요"라는 소개에는 "빠르기나 소리 크기 가운데 어떤 점이 좋았나요?"로 되묻는다. 오늘은 느낌을 소리 근거와 함께 소개해 본다고 알린다.',
      student: '요즘 자주 듣는 음악이나 소리 하나를 떠올려 봅시다. 어떤 점이 마음에 들었나요?',
    },
    acts: [
      {
        id: 'a1', title: '활동 1. 곡 소개 문장 완성하기', minutes: 13, tool: 'story',
        teacher: '"소개는 소리 한 가지와 느낌 한 가지가 짝이 되어야 해요." 빈칸 문장을 읽고 카드를 놓게 한다. 곡 이름과 어디서 쓰였는지만 말하는 학생에게는 "이 곡을 들으면 몸이나 마음이 어떻게 되나요?"라고 묻는다. 곡의 음원은 교사가 수업 흐름에 맞게 짧게 들려주고, 노랫말이 있는 곡은 고르지 않는다.',
        task: '곡을 소개하는 문장의 빈칸에 알맞은 낱말 카드를 놓아요.',
        levels: cardsLv(),
        items: [
          { prompt: '‘엘리제를 위하여’를 소개하는 문장을 낱말 카드로 완성해 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 's1', label: '짧은 가락이 ___ 되풀이돼서 귀에 남아요.' }, { id: 's2', label: '그래서 ___ 알리는 소리로도 쓰여요.' }], cards: [{ id: 'w1', text: '여러 번' }, { id: 'w2', text: '오는 때를' }] }, target: { fill: { s1: 'w1', s2: 'w2' } }, difficulty: 0.15,
            hints: ['빈칸 앞뒤를 읽고 소리의 특징을 말하는 칸과 쓰임을 말하는 칸을 가려요.', '특징과 쓰임을 서로 바꾸어 놓지 않았는지 문장을 소리 내어 읽어 보세요.', '되풀이 횟수가 특징이고, 신호음은 때를 알리는 쓰임이에요.'],
            levels: { challenge: { toolOptions: { cards: [{ id: 'w1', text: '여러 번' }, { id: 'w2', text: '오는 때를' }, { id: 'w3', text: '한 번만' }, { id: 'w4', text: '싸우는 일을' }] } } } },
          { prompt: '사티 ‘짐노페디’를 소개하는 문장을 낱말 카드로 완성해 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 's3', label: '느리고 ___ 소리라서 마음이 가라앉아요.' }, { id: 's4', label: '그래서 ___ 때 들으면 어울려요.' }], cards: [{ id: 'x1', text: '여린' }, { id: 'x2', text: '쉬고 싶은' }] }, target: { fill: { s3: 'x1', s4: 'x2' } }, difficulty: 0.25,
            levels: { challenge: { toolOptions: { cards: [{ id: 'x1', text: '여린' }, { id: 'x2', text: '쉬고 싶은' }, { id: 'x3', text: '아주 센' }, { id: 'x4', text: '달리는' }] } } } },
          { prompt: '차이콥스키 ‘꽃의 왈츠’를 소개하는 문장을 낱말 카드로 완성해 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 's5', label: '발레 ___에 나오는 곡이에요.' }, { id: 's6', label: '셋씩 묶어 도는 느낌이라 몸이 ___ 느낌이 나요.' }], cards: [{ id: 'y1', text: '호두까기 인형' }, { id: 'y2', text: '빙글빙글 도는' }] }, target: { fill: { s5: 'y1', s6: 'y2' } }, difficulty: 0.3,
            levels: { challenge: { toolOptions: { cards: [{ id: 'y1', text: '호두까기 인형' }, { id: 'y2', text: '빙글빙글 도는' }, { id: 'y3', text: '백조의 호수' }, { id: 'y4', text: '꼼짝 않는' }] } } } },
        ],
      },
      {
        id: 'a2', title: '활동 2. 친구 소개에 닿은 마음 돌아보기', minutes: 13, tool: 'emotion',
        teacher: '"친구의 소개를 들으니 내 마음이 얼마나 움직였나요? 정답은 없어요." 고른 뒤 이유를 한 줄 쓰게 한다. 낮게 고른 학생을 나무라지 않고 어떤 말이 더 있었으면 닿았을지 묻는다. 높게만 고르는 학생에게는 구체적인 근거를 하나 말하게 한다.',
        task: '친구의 소개를 들은 내 마음을 솔직하게 골라요. 정답은 없어요.',
        levels: scaleLv(),
        items: [
          { prompt: '친구가 소리 근거를 들어 곡을 소개했어요. 내 마음에 얼마나 닿았는지 골라 보세요. 정답은 없어요.', toolOptions: { situation: '친구가 소리의 빠르기와 크기를 들어 곡을 소개했어요.', feeling: '편안함', ask: '친구의 소개가 내 마음에 얼마나 닿았나요?' }, target: { level: 'any' }, difficulty: 0.05 },
          { prompt: '내가 곡을 소개할 때 소리 근거를 들어 말할 자신이 얼마나 있는지 골라 보세요. 정답은 없어요.', toolOptions: { situation: '내가 고른 곡을 반 친구들 앞에서 소개해요.', feeling: '뿌듯함', ask: '소리 근거를 들어 소개할 자신이 얼마나 있나요?' }, target: { level: 'any' }, difficulty: 0.05 },
          { prompt: '고른 까닭을 활동지에 한 줄 쓰고 짝과 바꾸어 읽은 뒤 "다 했어요"를 누르세요.', free: true, talk: true, difficulty: 0 },
        ],
      },
    ],
    wrap: {
      teacher: '"소리 근거와 느낌을 짝지어 소개하니 어떤 점이 달랐나요?" 두 학생에게 말하게 한다. 출구 2번에서 \'곡 이름만 말하면 소개\'를 고른 학생은 다음 시간 첫머리에 곡 이름만 말한 소개와 소리 근거를 넣은 소개를 나란히 들려주고 어느 쪽이 더 닿는지 묻는다.',
      exit: [
        { type: 'tool', tool: 'story', options: { mode: 'fill', slots: [{ id: 'e1', label: '아주 느리고 ___ 소리라서 잠들기 좋아요.' }], cards: [{ id: 'z1', text: '여린' }, { id: 'z2', text: '센' }] }, prompt: '자장가를 소개하는 문장의 빈칸에 알맞은 낱말을 놓아 보세요.', target: { fill: { e1: 'z1' } }, difficulty: 0.15 },
        { type: 'choice', prompt: '곡 소개에 꼭 들어가면 좋은 것은 무엇인가요?', options: ['소리의 특징과 받은 느낌', '곡 이름만', '친구가 싫어하는 이유'], answer: 0, difficulty: 0.2, explain: '소리 근거와 느낌이 짝이 되어야 듣는 사람이 곡을 떠올릴 수 있어요.' },
        MOOD('내가 고른 음악을 소개해 보니 어땠나요?'),
      ],
    },
    ws: {
      title: '내 음악 소개 카드',
      note: '소개는 곡 이름, 소리 특징 한 가지, 받은 느낌 한 가지를 짝지어 써요.',
      items: [
        { type: 'table', prompt: '내가 고른 음악을 소개하는 카드를 채우세요.', columns: ['곡(또는 소리)', '소리 특징', '받은 느낌'], rows: 2 },
        { type: 'choice', prompt: '좋은 소개 문장에 ○ 하세요.', options: ['느리고 여려서 마음이 편안해요', '그냥 좋아요'], answer: '느리고 여려서 마음이 편안해요' },
        { type: 'short', prompt: '친구의 소개에서 가장 마음에 닿은 말을 쓰고 까닭을 쓰세요.' },
        { type: 'draw', prompt: '내가 고른 음악을 들을 때 떠오르는 장면을 그려 보세요.' },
      ],
      easy: [
        { type: 'choice', prompt: '소개에 넣으면 좋은 것에 ○ 하세요.', options: ['소리 특징', '곡 길이만'], answer: '소리 특징' },
        { type: 'choice', prompt: '자장가의 소리 특징에 ○ 하세요.', options: ['느리고 여려요', '빠르고 세요'], answer: '느리고 여려요' },
        { type: 'table', prompt: '곡과 느낌을 쓰세요.', columns: ['곡', '느낌'], rows: 1 },
        { type: 'short', prompt: '내가 고른 음악의 이름을 쓰세요.' },
      ],
    },
    diff: {
      easy: '카드는 두 장이고 놓으면 맞는지 바로 보여요. 마음 눈금은 세 칸이에요.',
      base: '문장을 스스로 완성하고 마음 눈금을 골라요.',
      challenge: '함정 낱말이 섞이고 마음 눈금은 다섯 칸이에요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 곡 이름만 소개한다 → 소리 한 가지와 느낌 한 가지를 짝지어 말하게 한다. ② 친구가 고른 곡이 싫으면 소개를 듣지 않는다 → 곡이 아니라 소개 방법에 공감하는 것임을 알려 준다. ③ 마음 눈금을 높게만 고른다 → 구체적인 근거를 하나 말하게 한다. 돌아보기는 정답이 없고 개인 평가에 쓰지 않는다.',
  }));

  // ───────────────────────── 10차시 (연습) ─────────────────────────
  lessons.push(L(10, S4, {
    title: '친구가 지은 가락을 듣고 공감하는 말 고르기',
    objective: '친구가 지은 가락을 따라 치며 들은 느낌을 말하고, 상대를 존중하는 공감의 말을 골라 쓸 수 있다.',
    ill: 'two children facing each other across a paper keyboard while heart shaped notes pass between them',
    sceneText: '공감하는 말',
    intro: {
      teacher: '"친구가 지은 가락을 들려주었는데 \'이상해\'라고 말하면 친구 기분이 어떨까요?" 손을 들어 느낌을 말하게 한다. "솔직하게 말한 건데 왜 안 돼요?"라는 학생에게는 "솔직한 것과 상처 주는 것은 달라요. 어떤 말로 같은 생각을 전할 수 있을까요?"로 되묻는다.',
      student: '친구가 지은 가락을 듣고 내 느낌을 말해 줄 때, 어떤 말이 친구 마음에 닿을까요?',
    },
    acts: [
      {
        id: 'a1', title: '활동 1. 친구의 가락을 따라 치며 들은 느낌 찾기', minutes: 12, tool: 'keyboard',
        teacher: '"친구가 만든 가락이라 생각하고 끝까지 들은 뒤 따라 쳐요. 들은 소리부터 말해 봐요." 따라 치기가 어려워 포기하려는 학생에게는 가락 듣기를 몇 번이든 눌러도 된다고 말한다. 음이 달라도 틀린 가락이 아니라 친구의 가락임을 짚는다.',
        task: '친구가 지은 가락을 듣고 따라 쳐요. 들은 소리의 특징을 하나씩 찾아요.',
        levels: mel(),
        items: [
          { prompt: '민지가 지은 가락이에요. 가락 듣기를 누르고 따라 쳐 보세요.', toolOptions: { melody: ['미', '솔', '라', '솔', '미'], tempo: 88 }, target: { notes: ['미', '솔', '라', '솔', '미'] }, difficulty: 0.15 },
          { prompt: '준호가 지은 가락이에요. 아래로 내려가는 가락이에요. 듣고 따라 쳐 보세요.', toolOptions: { melody: ['높은도', '라', '솔', '미', '도'], tempo: 80 }, target: { notes: ['높은도', '라', '솔', '미', '도'] }, difficulty: 0.25,
            predict: { q: '이 가락을 들으면 어떤 느낌이 날까요?', options: ['차분히 가라앉는 느낌', '신나게 뛰는 느낌', '잘 모르겠어요'], answer: 0 },
            conclude: '아래로 천천히 내려가는 가락은 차분하고 가라앉는 느낌을 줘요. 느낌은 사람마다 조금씩 달라도 돼요.' },
          { prompt: '서연이 지은 가락이에요. 듣고 따라 친 뒤 어느 음에서 가락이 가장 높았는지 찾아보세요.', toolOptions: { melody: ['도', '솔', '높은도', '라', '솔'], tempo: 96 }, target: { notes: ['도', '솔', '높은도', '라', '솔'] }, reveal: 'after-check', difficulty: 0.3,
            conclude: '셋째 음에서 가장 높이 올라갔어요. 가장 높은 곳을 찾아 말하면 느낌을 소리 근거와 함께 전할 수 있어요.' },
        ],
      },
      {
        id: 'a2', title: '활동 2. 공감하는 말 고르기', minutes: 14, tool: 'emotion',
        teacher: '"친구의 가락을 듣고 내가 한 말이 친구 마음에 어떻게 닿을까요? 말을 골라 결과를 봐요." 결과 글을 소리 내어 읽게 한다. 틀린 보기를 \'나쁜 말\'이라 몰아붙이지 않고 \'소리 근거 없이 평가만 한 말\'임을 짚는다. 친구에게 직접 말해 보게 하며 말투도 함께 살핀다.',
        task: '상황을 읽고 친구에게 어떤 말을 하면 좋을지 골라요. 고른 뒤 나오는 결과를 읽어요.',
        levels: { easy: { mode: 'branch' }, base: { mode: 'branch' }, challenge: { mode: 'branch' } },
        items: [
          { prompt: '민지가 지은 가락을 듣고 준호가 말해요. 어느 말이 알맞을까요?', toolOptions: { situation: '민지가 새로 지은 가락을 들려주었어요. 준호는 처음 듣는 가락이 조금 낯설어요.', who: '준호', ask: '어떻게 말하면 좋을까요?', choices: [{ id: 'a', text: '이상해. 별로야.', result: '민지가 풀이 죽어 다시는 가락을 들려주지 않았어요.', mood: '슬픔', why: '소리 근거 없이 평가만 하면 상대 마음이 다쳐요.' }, { id: 'b', text: '처음엔 낯설었는데 끝에서 내려오는 소리가 포근했어.', result: '민지가 웃으며 다음 가락도 들려주었어요.', mood: '기쁨' }] }, target: { choice: 'b' }, difficulty: 0.15 },
          { prompt: '서연이 지은 빠른 가락을 듣고 준호가 말해요. 어느 말이 알맞을까요?', toolOptions: { situation: '서연이 아주 빠르고 높은 가락을 들려주었어요. 준호는 너무 빨라서 따라가기 어려웠어요.', who: '준호', ask: '어떻게 말하면 좋을까요?', choices: [{ id: 'a', text: '너무 빨라서 못 듣겠어. 틀렸어.', result: '서연이 자기 가락이 틀렸다고 생각해 속상해했어요.', mood: '속상함', why: '빠른 가락이 틀린 가락은 아니에요. 내 느낌을 말해야 해요.' }, { id: 'b', text: '나는 빨라서 따라가기 조금 어려웠는데, 신나는 느낌은 알겠어.', result: '서연이 빠르기를 조금 늦춰 다시 들려주었어요.', mood: '고마움' }, { id: 'c', text: '아무 말도 안 할래.', result: '서연이 친구 마음을 알 수 없어 답답해했어요.', mood: '걱정', why: '말하지 않으면 공감이 전해지지 않아요.' }] }, target: { choice: 'b' }, difficulty: 0.25 },
          { prompt: '친구가 내 가락을 듣고 이렇게 말했어요. 내가 어떻게 답하면 좋을까요?', toolOptions: { situation: '친구가 내 가락을 듣고 \'조금 심심했어\'라고 솔직히 말해 주었어요.', ask: '내가 어떻게 답하면 좋을까요?', choices: [{ id: 'a', text: '네가 뭘 안다고 그래?', result: '친구가 입을 다물어 서로 어색해졌어요.', mood: '화남', why: '솔직한 말을 받아들이지 않으면 대화가 끊겨요.' }, { id: 'b', text: '어느 부분이 심심했는지 알려 줄래? 고쳐 볼게.', result: '친구가 구체적인 부분을 알려 주어 가락이 더 좋아졌어요.', mood: '뿌듯함' }] }, target: { choice: 'b' }, difficulty: 0.3 },
        ],
      },
    ],
    wrap: {
      teacher: '"공감하는 말에 꼭 들어가면 좋은 것은 무엇이었나요?" 두 학생에게 \'소리 근거\'와 \'내 느낌\'을 넣어 한 문장씩 말하게 한다. 출구 2번에서 \'솔직하면 평가만 해도 된다\'를 고른 학생은 다음 시간 첫머리에 같은 상황의 두 말을 비교해 읽고 친구 기분을 말하게 한다.',
      exit: [
        { type: 'tool', tool: 'keyboard', options: { from: '도', to: '높은도', melody: ['솔', '라', '솔', '미', '도'], tempo: 92 }, prompt: '친구가 지은 가락을 듣고 건반으로 따라 쳐 보세요.', target: { notes: ['솔', '라', '솔', '미', '도'] }, difficulty: 0.25 },
        { type: 'choice', prompt: '친구 가락에 공감하는 말로 알맞은 것은 무엇인가요?', options: ['끝에서 내려오는 소리가 포근했어', '이상해서 다시 만들어', '아무 느낌 없어'], answer: 0, difficulty: 0.2, explain: '소리 근거와 내 느낌을 함께 말하면 상대도 받아들이기 쉬워요.' },
        MOOD('친구 가락에 공감하는 말을 골라 보니 어땠나요?'),
      ],
    },
    ws: {
      title: '공감하는 말 카드',
      note: '공감하는 말에는 들은 소리와 내 느낌이 함께 들어가요.',
      items: [
        { type: 'table', prompt: '친구 가락을 듣고 공감하는 말을 쓰세요.', columns: ['들은 소리', '내 느낌', '친구에게 할 말'], rows: 2 },
        { type: 'figure', prompt: '친구가 들려준 가락을 듣고 계이름을 쓰세요.', wide: true, tool: 'keyboard', options: { from: '도', to: '높은도', printNames: true, printBoxes: 5 }, figures: [{ caption: '가장 높은 음에 ○ 하세요.' }], answer: '미 솔 라 솔 미 — 라' },
        { type: 'choice', prompt: '공감하는 말에 ○ 하세요.', options: ['처음엔 낯설었지만 끝이 포근했어', '이상해서 못 듣겠어'], answer: '처음엔 낯설었지만 끝이 포근했어' },
        { type: 'short', prompt: '친구의 가락에 해 주고 싶은 말을 소리 근거를 넣어 쓰세요.' },
      ],
      easy: [
        { type: 'choice', prompt: '친구에게 말할 때 알맞은 것에 ○ 하세요.', options: ['소리 근거와 내 느낌', '이상하다는 말만'], answer: '소리 근거와 내 느낌' },
        { type: 'choice', prompt: '친구 가락이 낯설 때 알맞은 말에 ○ 하세요.', options: ['처음엔 낯설었어', '틀렸어'], answer: '처음엔 낯설었어' },
        { type: 'table', prompt: '들은 소리와 느낌을 쓰세요.', columns: ['들은 소리', '느낌'], rows: 1 },
        { type: 'short', prompt: '오늘 친구에게 해 준 좋은 말을 쓰세요.' },
      ],
    },
    diff: {
      easy: '보기가 두 개이고 고르면 바로 결과가 나와요. 가락을 듣는 동안 건반이 빛나요.',
      base: '상황을 읽고 알맞은 말을 고르고 가락을 따라 쳐요.',
      challenge: '보기가 세 개인 상황이 있고 건반 이름이 보이지 않아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 솔직함을 평가만 하는 것으로 안다 → 소리 근거와 내 느낌을 넣는 틀을 알려 준다. ② 다른 느낌이면 틀린 것으로 여긴다 → 같은 가락도 사람마다 느낌이 다름을 말해 준다. ③ 말하기를 부끄러워한다 → 문장 틀을 주고 짝에게 먼저 말해 보게 한다. 소리는 학생이 누를 때만 난다.',
  }));

  // ───────────────────────── 11차시 (확장) ─────────────────────────
  lessons.push(L(11, S4, {
    title: '막연한 감상 문장을 소리 근거로 고쳐 쓰기',
    objective: '막연한 감상 문장과 구체적인 감상 문장을 가려내고, 같은 곡을 다시 들으며 새로 들린 소리를 찾아 근거 있는 문장으로 고칠 수 있다.',
    ill: 'a paper pencil turning a blurry cloud shaped sentence into a clear sentence with a music note and a heart',
    sceneText: '근거가 있는 감상',
    intro: {
      teacher: '"그냥 좋았어요"와 "느리고 여린 소리가 마음을 가라앉혔어요" 가운데 곡이 더 잘 떠오르는 말은 무엇일까요? 손을 들어 보세요." 두 말을 칠판에 적고 차이를 말하게 한다. "그냥 좋은 걸 어떻게 설명해요?"라는 학생에게는 "좋았던 순간의 소리를 하나만 떠올려 봐요. 빠르기, 크기, 높이 가운데 하나예요"라고 말해 준다.',
      student: '‘그냥 좋았어요’라는 말로는 곡이 잘 떠오르지 않아요. 어떤 말을 덧붙이면 좋을까요?',
    },
    acts: [
      {
        id: 'a1', title: '활동 1. 구체적인 감상과 막연한 감상 나누기', minutes: 13, tool: 'mindmap',
        teacher: '"소리 이름이 하나라도 들어 있으면 구체적인 문장이에요." 카드를 소리 내어 읽고 나누게 한다. \'신나요\'만 있는 문장도 구체적이라 여기는 학생에게는 "무슨 소리 때문에 신났는지 알 수 있나요?"라고 되묻는다.',
        task: '감상 문장 카드를 읽고, 소리 근거가 있는 문장과 없는 문장으로 나누어요.',
        levels: cardsLv(),
        items: [
          { prompt: '감상 문장을 소리 근거가 있는지로 나누어 보세요.', toolOptions: { topic: '감상 문장', slots: ['소리 근거가 있어요', '막연해요'], cards: ['빠른 박이 이어져 달리고 싶었어요', '그냥 좋았어요', '여린 소리가 천천히 이어져 졸렸어요', '재미있었어요'] }, target: { sort: { '소리 근거가 있어요': ['빠른 박이 이어져 달리고 싶었어요', '여린 소리가 천천히 이어져 졸렸어요'], '막연해요': ['그냥 좋았어요', '재미있었어요'] } }, difficulty: 0.2,
            hints: ['문장마다 소리 낱말(빠르기, 크기, 높이 등)이 들어 있는지 찾아 밑줄을 그어 보세요.', '소리 낱말 없이 느낌만 쓴 문장을 구체적인 쪽에 넣지 않았는지 보세요.', '빠른 박과 여린 소리가 있는 문장이 근거 있는 문장이에요.'],
            levels: { challenge: { toolOptions: { cards: ['빠른 박이 이어져 달리고 싶었어요', '그냥 좋았어요', '여린 소리가 천천히 이어져 졸렸어요', '재미있었어요', '높은 소리가 하늘로 올라가는 듯했어요'] } } } },
          { prompt: '이번에는 곡을 설명하는 문장을 나누어 보세요.', toolOptions: { topic: '곡 설명', slots: ['소리 근거가 있어요', '막연해요'], cards: ['저음이 되풀이돼서 마음이 놓였어요', '좋은 곡이에요', '박이 셋씩 묶여 빙글 도는 듯했어요', '유명해서 들었어요'] }, target: { sort: { '소리 근거가 있어요': ['저음이 되풀이돼서 마음이 놓였어요', '박이 셋씩 묶여 빙글 도는 듯했어요'], '막연해요': ['좋은 곡이에요', '유명해서 들었어요'] } }, difficulty: 0.25,
            levels: { challenge: { toolOptions: { cards: ['저음이 되풀이돼서 마음이 놓였어요', '좋은 곡이에요', '박이 셋씩 묶여 빙글 도는 듯했어요', '유명해서 들었어요', '소리가 커졌다 작아졌다 숨 쉬는 것 같았어요'] } } } },
          { prompt: '문장을 고치는 방법을 알맞게 나누어 보세요.', toolOptions: { topic: '문장 고치기', slots: ['덧붙이면 좋아요', '덧붙이지 않아도 돼요'], cards: ['어떤 소리 때문인지', '빠르기나 크기', '곡을 만든 사람의 나이', '친구 생각 그대로 베끼기'] }, target: { sort: { '덧붙이면 좋아요': ['어떤 소리 때문인지', '빠르기나 크기'], '덧붙이지 않아도 돼요': ['곡을 만든 사람의 나이', '친구 생각 그대로 베끼기'] } }, difficulty: 0.3,
            levels: { challenge: { toolOptions: { cards: ['어떤 소리 때문인지', '빠르기나 크기', '곡을 만든 사람의 나이', '친구 생각 그대로 베끼기', '높이가 바뀌는 곳'] } } } },
        ],
      },
      {
        id: 'a2', title: '활동 2. 다시 들으며 새로 들린 소리 찾기', minutes: 13, tool: 'keyboard',
        teacher: '"같은 가락도 두 번째 들으면 처음에 못 들은 소리가 들려요. 가락 듣기를 눌러 두 번 들어 보세요." 처음 들을 때와 다시 들을 때 무엇이 새로 들렸는지 말하게 한다. 한 번 듣고 다 들었다고 하는 학생에게는 가락 속 한 음이 바뀐 것을 찾게 해 다시 듣기의 쓸모를 보여 준다.',
        task: '가락을 두 번 듣고 따라 쳐요. 두 번째에 새로 들린 소리를 찾아요.',
        levels: mel(),
        items: [
          { prompt: '짧은 가락이에요. 가락 듣기를 눌러 두 번 듣고 따라 쳐 보세요.', toolOptions: { melody: ['도', '레', '미', '레', '도'], tempo: 84 }, target: { notes: ['도', '레', '미', '레', '도'] }, difficulty: 0.15 },
          { prompt: '이번 가락은 가운데가 높이 올라가요. 두 번 듣고 따라 쳐 보세요.', toolOptions: { melody: ['미', '솔', '높은도', '솔', '미'], tempo: 90 }, target: { notes: ['미', '솔', '높은도', '솔', '미'] }, difficulty: 0.25,
            predict: { q: '다시 들으면 처음에 못 들은 소리가 들릴까요?', options: ['들릴 수 있어요', '똑같이 들려요', '잘 모르겠어요'], answer: 0 },
            conclude: '다시 들으면 처음에 지나친 높이의 변화나 쉬는 곳이 더 잘 들려요. 그래서 감상 문장도 더 구체적이 돼요.' },
          { prompt: '두 번 들으면 알 수 있는 가락이에요. 따라 친 뒤 한 번 들을 때 놓치기 쉬운 곳을 찾아보세요.', toolOptions: { melody: ['솔', '솔', '라', '솔', '높은도', '시'], tempo: 100 }, target: { notes: ['솔', '솔', '라', '솔', '높은도', '시'] }, reveal: 'after-check', difficulty: 0.35,
            conclude: '끝에서 높은도와 시 사이의 작은 움직임은 다시 들어야 잘 들려요.' },
        ],
      },
    ],
    wrap: {
      teacher: '"한 번 더 들으면 문장이 어떻게 달라지나요?" 두 학생에게 \'처음에는 ○○, 다시 들으니 ○○\' 틀로 말하게 한다. 출구 2번에서 \'한 번 들으면 충분\'을 고른 학생은 다음 시간 첫머리에 같은 가락을 두 번 들려주고 새로 들린 소리를 찾게 한다.',
      exit: [
        { type: 'tool', tool: 'keyboard', options: { from: '도', to: '높은도', melody: ['레', '미', '솔', '미', '레'], tempo: 96 }, prompt: '짧은 가락을 듣고 건반으로 따라 쳐 보세요.', target: { notes: ['레', '미', '솔', '미', '레'] }, difficulty: 0.25 },
        { type: 'choice', prompt: '감상 문장을 구체적으로 고치는 방법은 무엇인가요?', options: ['소리의 이름을 한 가지 덧붙여요', '느낌 낱말을 모두 지워요', '곡 이름만 써요'], answer: 0, difficulty: 0.2, explain: '빠르기, 크기, 높이처럼 소리 이름을 덧붙이면 문장이 구체적이 돼요.' },
        MOOD('내 감상 문장을 고쳐 보니 어땠나요?'),
      ],
    },
    ws: {
      title: '감상 문장 고쳐 쓰기',
      note: '막연한 느낌 문장에 소리 이름(빠르기·크기·높이)을 덧붙이면 구체적이 돼요.',
      items: [
        { type: 'table', prompt: '막연한 감상 문장을 소리 근거가 있게 고쳐 쓰세요.', columns: ['처음 문장', '고친 문장'], cells: [['그냥 좋았어요', ''], ['재미있었어요', '']] },
        { type: 'figure', prompt: '두 번 들려주는 가락의 계이름을 쓰세요.', wide: true, tool: 'keyboard', options: { from: '도', to: '높은도', printNames: true, printBoxes: 5 }, figures: [{ caption: '두 번째에 새로 들린 소리를 한 가지 쓰세요: ' }], answer: '미 솔 높은도 솔 미' },
        { type: 'choice', prompt: '구체적인 감상 문장에 ○ 하세요.', options: ['높은 소리가 하늘로 올라가는 듯했어요', '좋은 곡이에요'], answer: '높은 소리가 하늘로 올라가는 듯했어요' },
        { type: 'short', prompt: '오늘 들은 곡에 대한 내 감상을 소리 근거를 넣어 한 문장으로 쓰세요.' },
      ],
      easy: [
        { type: 'choice', prompt: '막연한 문장에 ○ 하세요.', options: ['그냥 좋았어요', '빠른 박이 신났어요'], answer: '그냥 좋았어요' },
        { type: 'choice', prompt: '문장에 덧붙이면 좋은 것에 ○ 하세요.', options: ['소리 이름', '친구 이름'], answer: '소리 이름' },
        { type: 'table', prompt: '고친 문장을 쓰세요.', columns: ['처음', '고친 문장'], cells: [['재미있었어요', '']] },
        { type: 'short', prompt: '오늘 곡에서 들린 소리 한 가지를 쓰세요.' },
      ],
    },
    diff: {
      easy: '카드가 네 장이고 놓으면 맞는지 바로 보여요. 가락을 들으면 건반이 빛나요.',
      base: '카드를 스스로 나누고 가락을 두 번 들어 따라 쳐요.',
      challenge: '함정 카드가 한 장 더 있고 건반 이름이 보이지 않아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 느낌 낱말(신나요, 좋아요)이 곧 구체적이라고 여긴다 → 느낌과 소리 이름을 두 칸으로 나누어 쓰게 한다. ② 다시 들어도 같다고 한다 → 한 음이 바뀐 두 가락을 들려주어 차이를 찾게 한다. ③ 친구 문장을 그대로 베낀다 → 내가 들은 소리를 먼저 쓰게 한다. 소리는 학생이 누를 때만 난다.',
  }));

  // ───────────────────────── 12차시 (확장) ─────────────────────────
  lessons.push(L(12, S4, {
    title: '하루 음악 일기를 시간 차례로 세우고 한 장면 짓기',
    objective: '하루 동안 만난 음악을 시간 차례로 정리해 음악 일기로 나타내고, 그중 한 장면의 소리를 세 음 가락으로 지어 소개할 수 있다.',
    ill: 'a long paper timeline across a day from sunrise to moonlight with a small music note hanging at each stop',
    sceneText: '하루 음악 일기',
    intro: {
      teacher: '"어제 하루 가운데 음악이나 소리 신호가 있었던 순간을 세 군데 떠올려 보세요. 어느 때가 가장 마음에 남았나요?" 한두 명이 말하게 한다. 시간 순서가 헷갈리는 학생에게는 "일어나서 밥 먹고 학교에 가고 집에 오는 흐름으로 떠올려 봐요"라고 말해 준다.',
      student: '하루 동안 음악이나 소리 신호를 만난 순간을 시간 차례로 떠올려 봅시다. 가장 마음에 남은 때는 언제인가요?',
    },
    acts: [
      {
        id: 'a1', title: '활동 1. 하루 음악을 시간 차례로 세우기', minutes: 13, tool: 'timeline',
        teacher: '"일어난 때부터 잠드는 때까지 시간 차례대로 카드를 놓아요." 카드를 읽고 먼저 일어난 일을 말하게 한다. 낮과 저녁을 섞는 학생에게는 해의 모습을 그려 보게 한다.',
        task: '하루 동안 만난 음악 카드를 일어난 시간 차례대로 놓아요.',
        levels: cardsLv(),
        items: [
          { prompt: '민지의 하루 음악 일기예요. 시간 차례대로 놓아 보세요.', toolOptions: { axis: ['아침', '밤'], slots: 4, cards: [{ id: 'm1', text: '아침 알람 음악' }, { id: 'm2', text: '등굣길 버스 안내음' }, { id: 'm3', text: '체육 시간 달리기 음악' }, { id: 'm4', text: '잠들기 전 자장가' }] }, target: { order: ['m1', 'm2', 'm3', 'm4'] }, difficulty: 0.2,
            hints: ['아침에 일어나서 밤에 잠들기까지 하루가 흐르는 길을 떠올려요.', '체육 시간과 잠들기 전 소리를 서로 바꾸어 놓지 않았는지 보세요.', '알람 → 버스 → 체육 → 자장가 차례예요.'],
            levels: { challenge: { toolOptions: { slots: 5, cards: [{ id: 'm1', text: '아침 알람 음악' }, { id: 'm2', text: '등굣길 버스 안내음' }, { id: 'm3', text: '체육 시간 달리기 음악' }, { id: 'm4', text: '잠들기 전 자장가' }, { id: 'm5', text: '점심시간 방송 음악' }] }, target: { order: ['m1', 'm2', 'm5', 'm3', 'm4'] }, prompt: '민지의 하루 음악 일기예요. 점심시간 방송까지 시간 차례대로 놓아 보세요.' } } },
          { prompt: '준호의 주말 음악 일기예요. 시간 차례대로 놓아 보세요.', toolOptions: { axis: ['아침', '밤'], slots: 4, cards: [{ id: 'n1', text: '늦잠 자고 라디오 소리' }, { id: 'n2', text: '마트의 배경 음악' }, { id: 'n3', text: '공원 산책 중 거리 연주' }, { id: 'n4', text: '저녁 식탁 위 잔잔한 음악' }] }, target: { order: ['n1', 'n2', 'n3', 'n4'] }, difficulty: 0.25 },
          { prompt: '서연이 쓴 일기 가운데 순서가 섞인 부분이에요. 시간 차례대로 놓아 보세요.', toolOptions: { axis: ['먼저', '나중'], slots: 3, cards: [{ id: 'o1', text: '학교 종이 울렸어요' }, { id: 'o2', text: '쉬는 시간 노랫소리가 들렸어요' }, { id: 'o3', text: '하교 방송 음악이 흘렀어요' }] }, target: { order: ['o1', 'o2', 'o3'] }, difficulty: 0.25 },
        ],
      },
      {
        id: 'a2', title: '활동 2. 한 장면의 소리를 세 음 가락으로 짓기', minutes: 13, tool: 'keyboard',
        teacher: '"일기에서 가장 마음에 남은 장면의 소리를 세 음으로 줄여 지어 봐요. 올라가는지 내려가는지 먼저 정해요." 지은 가락을 장면과 함께 짝에게 들려주게 한다. 음을 너무 많이 넣어 세 음을 넘기는 학생에게는 가장 중요한 소리만 남기라고 말한다.',
        task: '조건에 맞게 세 음 가락을 지어요. 지은 뒤 장면과 함께 짝에게 소개해요.',
        levels: mel(),
        items: [
          { prompt: '아침 알람의 장면이에요. 도로 시작해 솔로 끝나는 세 음 가락을 지어 보세요.', target: { compose: { length: 3, startOn: '도', endOn: '솔' } }, difficulty: 0.15 },
          { prompt: '자장가의 장면이에요. 솔로 시작해 도로 끝나는 세 음 가락을 지어 보세요.', target: { compose: { length: 3, startOn: '솔', endOn: '도' } }, difficulty: 0.2 },
          { prompt: '달리기의 장면이에요. 도·미·솔 세 음만 써서 여섯 음 가락을 지어 보세요.', target: { compose: { length: 6, only: ['도', '미', '솔'] } }, difficulty: 0.3 },
          { prompt: '내 일기의 한 장면을 짓고, 짝에게 소개한 뒤 해낸 것을 표시해요.', target: { compose: { length: 3 }, selfCheck: ['장면에 맞게 높낮이를 정했어요', '지은 가락을 두 번 쳐 보았어요', '짝에게 장면과 함께 소개했어요'] }, difficulty: 0.2 },
        ],
      },
    ],
    wrap: {
      teacher: '"하루를 소리로 돌아보니 어떤 점이 새로웠나요?" 두 학생에게 말하게 한다. 출구 2번에서 \'일기에는 시간이 필요 없다\'를 고른 학생은 다음 시간 첫머리에 일기 카드를 섞어 주고 순서를 잡을 때 무엇을 보고 정하는지 말해 보게 한다.',
      exit: [
        { type: 'tool', tool: 'timeline', options: { axis: ['먼저', '나중'], slots: 3, cards: [{ id: 'z1', text: '아침 알람 음악' }, { id: 'z2', text: '점심 방송 음악' }, { id: 'z3', text: '자기 전 자장가' }] }, prompt: '세 소리를 하루 시간 차례대로 놓아 보세요.', target: { order: ['z1', 'z2', 'z3'] }, difficulty: 0.2 },
        { type: 'choice', prompt: '음악 일기에 시간을 함께 쓰면 좋은 까닭은 무엇일까요?', options: ['하루 흐름과 음악 쓰임을 볼 수 있어요', '글자가 길어져요', '음악이 사라져요'], answer: 0, difficulty: 0.2, explain: '시간 차례로 쓰면 때마다 음악이 어떤 일을 하는지 한눈에 보여요.' },
        MOOD('하루 음악 일기를 써 보니 어땠나요?'),
      ],
    },
    ws: {
      title: '내 하루 음악 일기',
      note: '아침, 낮, 저녁, 밤의 흐름으로 소리를 떠올려 차례대로 써요.',
      items: [
        { type: 'table', prompt: '하루 동안 만난 음악 세 가지를 시간 차례로 쓰세요.', columns: ['때', '들은 곳', '소리'], rows: 3 },
        { type: 'figure', prompt: '내가 지은 장면 가락의 계이름을 쓰세요.', wide: true, tool: 'keyboard', options: { from: '도', to: '높은도', printNames: true, printBoxes: 3 }, figures: [{ caption: '어느 장면의 소리인가요? ' }], answer: '학생이 지은 가락과 장면이 맞으면 정답' },
        { type: 'choice', prompt: '하루 음악 일기에 알맞은 순서에 ○ 하세요.', options: ['알람 → 학교 종 → 자장가', '자장가 → 알람 → 학교 종'], answer: '알람 → 학교 종 → 자장가' },
        { type: 'short', prompt: '내일 하루 동안 꼭 귀 기울여 듣고 싶은 소리 하나와 까닭을 쓰세요.' },
      ],
      easy: [
        { type: 'choice', prompt: '하루에서 가장 먼저 만나는 소리에 ○ 하세요.', options: ['아침 알람', '자장가'], answer: '아침 알람' },
        { type: 'choice', prompt: '하루 가장 마지막에 만나는 소리에 ○ 하세요.', options: ['자장가', '점심 방송'], answer: '자장가' },
        { type: 'table', prompt: '때와 소리를 쓰세요.', columns: ['때', '소리'], cells: [['아침', ''], ['밤', '']] },
        { type: 'short', prompt: '오늘 만난 소리 한 가지를 쓰세요.' },
      ],
    },
    diff: {
      easy: '카드가 네 장이고 놓으면 맞는지 바로 보여요. 가락을 지을 때 건반 이름이 보여요.',
      base: '시간 차례를 스스로 정하고 장면 가락을 지어요.',
      challenge: '카드가 다섯 장으로 늘고 건반 이름이 보이지 않아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 시간 순서를 소리 크기 순서로 놓는다 → 하루 흐름(해의 모습)으로 다시 놓게 한다. ② 세 음 가락이 너무 짧다고 포기한다 → 짧을수록 가락의 방향이 또렷함을 보여 준다. ③ 일기에 개인정보를 적는다 → 이름·주소 대신 장소와 소리만 쓰게 한다. 소리는 학생이 누를 때만 난다.',
  }));

  // ───────────────────────── 13차시 (핵심) ─────────────────────────
  const SEMACHI = ['덩', '', '', '덩', '', '덕', '쿵', '덕', ''];
  lessons.push(L(13, S5, {
    title: '국악 갈래 이름과 하는 일 잇고 세마치 장단 놓기',
    objective: '판소리·풍물·종묘제례악·대취타의 이름과 하는 일을 이어 말하고, 세마치 장단을 장단판에 놓아 국악이 지켜 온 우리 음악임을 설명할 수 있다.',
    ill: 'a paper janggu drum, a small gong and a folded fan arranged like a stage above an old tiled roof gate',
    sceneText: '우리 국악 만나기',
    intro: {
      teacher: '"국악이라는 말을 들어 본 적 있나요? 어떤 소리가 떠오르나요?" 가야금, 장구, 판소리 등 떠오르는 대로 칠판에 적는다. "국악은 옛날 노래라서 지금은 안 써요"라는 학생에게는 "지금도 공연장과 마당에서 연주되고, 나라에서 지켜 전하려고 국가유산으로 정한 음악도 있어요"라고 알려 준다.',
      student: '국악이라는 말에서 떠오르는 악기나 소리를 말해 봅시다. 어디서 들어 보았나요?',
      demo: { tool: 'keyboard', options: { mode: 'janggu', beats: 9, group: 3, jangdan: '세마치', strokes: ['덩', '쿵', '덕'] }, sequence: [{ strokes: ['덩', '', '', '덩', '', '', '', '', ''] }] },
    },
    acts: [
      {
        id: 'a1', title: '활동 1. 국악 갈래와 설명 잇기', minutes: 13, tool: 'mindmap',
        teacher: '"갈래 이름을 듣고 누가, 어디서, 무엇으로 하는 음악인지 설명에 이어요." 카드 글을 소리 내어 읽게 한다. 판소리를 노래만 하는 음악으로 아는 학생에게는 "소리꾼은 소리와 말과 몸짓을 함께 써요. 북 치는 고수는 장단을 맞춰요"라고 짚는다.',
        task: '국악 이름에 알맞은 설명이나 하는 일, 연주 때와 곳 카드를 이어요.',
        levels: cardsLv(),
        items: [
          { prompt: '국악 갈래 이름과 설명을 이어 보세요.', toolOptions: { mode: 'match', topic: '국악 갈래', slots: [{ id: 'g1', label: '판소리' }, { id: 'g2', label: '종묘제례악' }, { id: 'g3', label: '풍물(사물놀이)' }], cards: ['한 사람이 소리·말·몸짓으로 긴 이야기를 들려줘요', '종묘에서 제사를 지낼 때 연주하는 음악이에요', '꽹과리·징·장구·북을 치며 신나게 노는 음악이에요'] }, target: { match: { g1: '한 사람이 소리·말·몸짓으로 긴 이야기를 들려줘요', g2: '종묘에서 제사를 지낼 때 연주하는 음악이에요', g3: '꽹과리·징·장구·북을 치며 신나게 노는 음악이에요' } }, difficulty: 0.15,
            hints: ['갈래 이름 안에 힌트가 있어요. 소리, 제례, 풍물 같은 낱말이 어떤 일과 이어지는지 떠올려요.', '제사 음악과 신나게 노는 음악을 서로 바꾸어 이어 놓지 않았는지 보세요.', '판소리는 이야기를 들려주고, 종묘제례악은 제사에서, 풍물은 신나게 노는 자리에서 연주해요.'],
            levels: { challenge: { toolOptions: { cards: ['한 사람이 소리·말·몸짓으로 긴 이야기를 들려줘요', '종묘에서 제사를 지낼 때 연주하는 음악이에요', '꽹과리·징·장구·북을 치며 신나게 노는 음악이에요', '합창단이 화음을 맞춰 노래해요'] } } } },
          { prompt: '판소리와 풍물에서 누가 어떤 일을 하는지 이어 보세요.', toolOptions: { mode: 'match', topic: '사람의 일', slots: [{ id: 'h1', label: '판소리의 소리꾼' }, { id: 'h2', label: '판소리의 고수' }, { id: 'h3', label: '풍물의 꽹과리' }], cards: ['소리와 말과 몸짓으로 이야기를 이끌어요', '북을 치며 장단을 맞추고 추임새를 넣어요', '높고 날카로운 쇠소리로 흥을 이끌어요'] }, target: { match: { h1: '소리와 말과 몸짓으로 이야기를 이끌어요', h2: '북을 치며 장단을 맞추고 추임새를 넣어요', h3: '높고 날카로운 쇠소리로 흥을 이끌어요' } }, difficulty: 0.25,
            levels: { challenge: { toolOptions: { cards: ['소리와 말과 몸짓으로 이야기를 이끌어요', '북을 치며 장단을 맞추고 추임새를 넣어요', '높고 날카로운 쇠소리로 흥을 이끌어요', '건반으로 화음을 깔아 줘요'] } } } },
          { prompt: '갈래마다 연주하는 때와 곳을 이어 보세요.', toolOptions: { mode: 'match', topic: '때와 곳', slots: [{ id: 'j1', label: '판소리' }, { id: 'j2', label: '종묘제례악' }, { id: 'j3', label: '대취타' }], cards: ['마당이나 공연장에서 이야기를 들려줄 때', '종묘에서 제사를 지낼 때', '걸으며 행진하는 때'] }, target: { match: { j1: '마당이나 공연장에서 이야기를 들려줄 때', j2: '종묘에서 제사를 지낼 때', j3: '걸으며 행진하는 때' } }, difficulty: 0.3,
            levels: { challenge: { toolOptions: { cards: ['마당이나 공연장에서 이야기를 들려줄 때', '종묘에서 제사를 지낼 때', '걸으며 행진하는 때', '교실에서 시험을 볼 때'] } } } },
        ],
      },
      {
        id: 'a2', title: '활동 2. 세마치 장단 장단판에 놓기', minutes: 13, tool: 'keyboard',
        teacher: '"장단 듣기를 누르고 굵은 금으로 나뉜 세 묶음을 하나씩 귀로 찾아요." 놓은 뒤에는 무릎을 쳐 보게 한다. 쉼 칸에서 소리를 빼먹는 학생에게는 마음속으로 \'쉬고\'를 말하게 한다. 칸 틀은 교실용으로 줄인 것이라 실제 연주는 음원과 선생님 시범으로 확인한다고 알린다.',
        task: '장단 듣기를 누르고 들은 세마치 장단을 아홉 칸 장단판에 놓아요.',
        levels: jang('세마치', 9),
        items: [
          { prompt: '앞 두 묶음이 놓여 있어요. 장단 듣기를 누르고 셋째 묶음을 채워 보세요.', toolOptions: { pattern: SEMACHI }, state: { strokes: ['덩', '', '', '덩', '', '덕', '', '', ''] }, target: { strokes: SEMACHI }, difficulty: 0.15 },
          { prompt: '장단 듣기를 누르고 세마치 장단 아홉 칸을 처음부터 놓아 보세요.', toolOptions: { pattern: SEMACHI }, target: { strokes: SEMACHI }, difficulty: 0.3 },
          { prompt: '세 칸 묶음을 지켜 나만의 장단을 놓고 무릎으로 쳐 본 뒤 해낸 것을 표시해요.', target: { selfCheck: ['묶음마다 세 칸을 지켰어요', '내가 놓은 장단을 무릎으로 두 번 쳤어요', '짝에게 구음으로 들려주었어요'], minNotes: 3 }, difficulty: 0.25 },
        ],
      },
    ],
    wrap: {
      teacher: '"오늘 만난 국악 갈래 가운데 하나를 골라 어디서 연주하는 음악인지 말해 볼까요?" 두 학생에게 말하게 한다. 출구 2번에서 \'국악은 옛날에만 쓰이는 노래\'를 고른 학생은 다음 시간 첫머리에 지금도 공연장과 마당에서 연주된다는 사례를 들려준다.',
      exit: [
        { type: 'tool', tool: 'keyboard', options: { mode: 'janggu', beats: 3, group: 3, strokes: ['덩', '쿵', '덕'], pattern: ['쿵', '덕', ''] }, prompt: '장단 듣기를 누르고 세마치 셋째 묶음 세 칸을 놓아 보세요.', target: { strokes: ['쿵', '덕', ''] }, difficulty: 0.2 },
        { type: 'choice', prompt: '종묘제례악은 어떤 때에 연주하는 음악일까요?', options: ['종묘에서 제사를 지낼 때', '운동회 달리기 때', '교실 수업 시작 때'], answer: 0, difficulty: 0.2, explain: '종묘제례악은 종묘에서 제사를 지낼 때 연주하는 음악이에요.' },
        MOOD('우리 국악 갈래를 알아보니 어땠나요?'),
      ],
    },
    ws: {
      title: '국악 갈래 카드',
      note: '판소리는 이야기, 종묘제례악은 제사, 풍물은 신나게 노는 음악, 대취타는 행진 음악이에요.',
      items: [
        { type: 'table', prompt: '국악 갈래 이름과 하는 일을 이어 쓰세요.', columns: ['갈래', '하는 일(때·곳)'], cells: [['판소리', ''], ['종묘제례악', ''], ['풍물', ''], ['대취타', '']] },
        { type: 'figure', prompt: '세마치 장단의 칸 틀이에요. 선생님이 들려주는 장단을 듣고 칸에 구음을 쓰세요.', wide: true, tool: 'keyboard', options: { mode: 'janggu', beats: 9, group: 3, jangdan: '세마치', strokes: ['덩', '쿵', '덕'] }, figures: [{ state: { strokes: SEMACHI }, caption: '굵은 금 사이는 몇 묶음인가요? ___ 묶음' }], answer: '세 묶음' },
        { type: 'choice', prompt: '판소리에서 북을 치며 장단을 맞추는 사람에 ○ 하세요.', options: ['소리꾼', '고수'], answer: '고수' },
        { type: 'short', prompt: '내가 들어 본 국악 소리와 그 소리를 들었을 때의 느낌을 쓰세요.' },
      ],
      easy: [
        { type: 'choice', prompt: '제사를 지낼 때 연주하는 음악에 ○ 하세요.', options: ['종묘제례악', '판소리'], answer: '종묘제례악' },
        { type: 'choice', prompt: '신나게 노는 음악에 ○ 하세요.', options: ['풍물', '종묘제례악'], answer: '풍물' },
        { type: 'table', prompt: '갈래와 하는 일을 쓰세요.', columns: ['갈래', '하는 일'], cells: [['판소리', ''], ['대취타', '']] },
        { type: 'short', prompt: '오늘 알게 된 국악 이름 하나를 쓰세요.' },
      ],
    },
    diff: {
      easy: '카드를 놓으면 맞는지 바로 보여요. 장단판은 여섯 칸이고 붓은 세 가지예요.',
      base: '카드를 스스로 잇고 아홉 칸 장단판에 놓아요.',
      challenge: '함정 카드가 한 장 더 있고 장단 붓이 다섯 가지예요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 국악은 옛날 노래라서 지금은 안 쓴다고 여긴다 → 공연장과 마당에서 지금도 연주되는 것을 알려 준다. ② 판소리를 노래 한 가지로만 안다 → 소리, 말, 몸짓, 북 장단이 함께 있음을 짚는다. ③ 세 칸 묶음 속 쉼을 놓친다 → 쉼 칸에서 마음속으로 센다. 장단판의 칸 틀은 교실용으로 줄인 것이다. 소리는 학생이 누를 때만 난다.',
  }));

  // ───────────────────────── 14차시 (연습) ─────────────────────────
  lessons.push(L(14, S5, {
    title: '판소리의 소리·아니리·발림을 구별하고 북 장단 놓기',
    objective: '판소리에서 소리·아니리·발림이 각각 하는 일을 구별하고, 고수가 치는 북 장단을 3박 리듬 블록으로 놓아 볼 수 있다.',
    ill: 'a paper storyteller with an open fan and a drummer with a small barrel drum sitting together on a straw mat stage',
    sceneText: '소리꾼과 고수',
    intro: {
      teacher: '"혼자서 몇 시간 동안 이야기를 들려주는 공연이 있어요. 한 사람이 어떻게 이야기를 이어 갈 수 있을까요?" 학생 생각을 듣고 판소리를 소개한다. "판소리는 노래만 부르는 거죠?"라는 학생에게는 "노래 부분은 소리, 말로 이어 가는 부분은 아니리, 몸짓은 발림이에요"라고 구별해 준다.',
      student: '한 사람이 오랫동안 이야기를 들려주는 공연을 상상해 봅시다. 어떻게 하면 지루하지 않을까요?',
    },
    acts: [
      {
        id: 'a1', title: '활동 1. 소리·아니리·발림 하는 일 잇기', minutes: 13, tool: 'mindmap',
        teacher: '"소리는 노래, 아니리는 말, 발림은 몸짓이에요. 손으로 직접 해 보며 이어요." 부채 대신 종이를 펴고 발림을 흉내 내게 한다. 소리와 아니리를 모두 노래로 아는 학생에게는 "이야기를 말로 풀어 주는 때와 높낮이 있게 노래하는 때가 번갈아 와요"라고 짚는다.',
        task: '판소리의 소리·아니리·발림과 고수·추임새를 알맞은 설명에 이어요.',
        levels: cardsLv(),
        items: [
          { prompt: '판소리의 세 가지 표현과 하는 일을 이어 보세요.', toolOptions: { mode: 'match', topic: '판소리 표현', slots: [{ id: 'p1', label: '소리' }, { id: 'p2', label: '아니리' }, { id: 'p3', label: '발림' }], cards: ['높낮이를 붙여 노래해요', '이야기를 말로 풀어 줘요', '몸짓과 부채로 모습을 보여 줘요'] }, target: { match: { p1: '높낮이를 붙여 노래해요', p2: '이야기를 말로 풀어 줘요', p3: '몸짓과 부채로 모습을 보여 줘요' } }, difficulty: 0.15,
            hints: ['소리, 말, 몸짓 가운데 이름이 어떤 것과 가장 가까운지 먼저 떠올려요.', '말로 하는 것과 노래로 하는 것을 서로 바꾸어 이어 놓지 않았는지 보세요.', '소리는 노래, 아니리는 말, 발림은 몸짓이에요.'],
            levels: { challenge: { toolOptions: { cards: ['높낮이를 붙여 노래해요', '이야기를 말로 풀어 줘요', '몸짓과 부채로 모습을 보여 줘요', '건반으로 가락을 쳐요'] } } } },
          { prompt: '판소리 무대의 사람과 하는 일을 이어 보세요.', toolOptions: { mode: 'match', topic: '판소리 무대', slots: [{ id: 'q1', label: '소리꾼' }, { id: 'q2', label: '고수' }, { id: 'q3', label: '구경하는 사람' }], cards: ['이야기를 소리·말·몸짓으로 끌어가요', '북 장단으로 박자를 잡아 줘요', '“얼쑤” 같은 추임새로 흥을 돋워요'] }, target: { match: { q1: '이야기를 소리·말·몸짓으로 끌어가요', q2: '북 장단으로 박자를 잡아 줘요', q3: '“얼쑤” 같은 추임새로 흥을 돋워요' } }, difficulty: 0.25,
            levels: { challenge: { toolOptions: { cards: ['이야기를 소리·말·몸짓으로 끌어가요', '북 장단으로 박자를 잡아 줘요', '“얼쑤” 같은 추임새로 흥을 돋워요', '악보를 읽어 줘요'] } } } },
          { prompt: '판소리가 오래 이어질 수 있는 까닭을 나누어 보세요.', toolOptions: { topic: '이어 가는 힘', slots: ['이야기를 이어 가는 것', '이야기와 관계없는 것'], cards: ['소리와 말을 번갈아 써요', '북 장단과 추임새가 힘을 줘요', '건물 높이를 재요', '교통 신호를 알려 줘요'] }, target: { sort: { '이야기를 이어 가는 것': ['소리와 말을 번갈아 써요', '북 장단과 추임새가 힘을 줘요'], '이야기와 관계없는 것': ['건물 높이를 재요', '교통 신호를 알려 줘요'] } }, difficulty: 0.3,
            levels: { challenge: { toolOptions: { cards: ['소리와 말을 번갈아 써요', '북 장단과 추임새가 힘을 줘요', '건물 높이를 재요', '교통 신호를 알려 줘요', '몸짓으로 장면을 보여 줘요'] } } } },
        ],
      },
      {
        id: 'a2', title: '활동 2. 고수 북 장단 3박 리듬으로 놓기', minutes: 13, tool: 'keyboard',
        teacher: '"고수의 북은 소리꾼이 숨 쉴 곳과 힘줄 곳을 알려 줘요. 한 마디가 3박인 리듬을 들어요." 마디마다 박을 세게 한다. 3박 마디를 4박으로 세는 학생에게는 \'하나·둘·셋\'을 소리 내어 세며 블록 합을 맞추게 한다.',
        task: '리듬 듣기를 누르고 들은 북 장단을 블록으로 놓아요. 한 마디는 3박이에요.',
        levels: rhy(3, 2),
        items: [
          { prompt: '고수의 첫째 장단이에요. 듣고 블록으로 놓아 보세요.', toolOptions: { pattern: ['h', 'q', 'q', 'q', 'q'] }, target: { rhythm: ['h', 'q', 'q', 'q', 'q'] }, difficulty: 0.15 },
          { prompt: '고수의 둘째 장단이에요. 빠른 소리가 섞여 있어요. 듣고 블록으로 놓아 보세요.', toolOptions: { pattern: ['q', 'h', 'q', 'e', 'e', 'q'] }, target: { rhythm: ['q', 'h', 'q', 'e', 'e', 'q'] }, difficulty: 0.3,
            predict: { q: '한 마디가 3박이면 블록 합이 몇 박이어야 할까요?', options: ['3박', '4박', '잘 모르겠어요'], answer: 0 },
            conclude: '마디가 3박이면 블록 합도 3박이어야 해요. 4분음표 하나와 2분음표 하나를 합쳐도 3박이에요.' },
          { prompt: '고수의 셋째 장단이에요. 쉬는 곳을 귀로 찾아 블록으로 놓아 보세요.', toolOptions: { pattern: ['q', 'qr', 'q', 'h', 'q'] }, target: { rhythm: ['q', 'qr', 'q', 'h', 'q'] }, reveal: 'after-check', difficulty: 0.3 },
        ],
      },
    ],
    wrap: {
      teacher: '"판소리에서 소리꾼, 고수, 구경하는 사람은 각각 무엇을 하나요?" 세 학생이 한 사람씩 맡아 한 문장으로 말하게 한다. 출구 2번에서 \'아니리는 노래\'를 고른 학생은 다음 시간 첫머리에 말로 이어 가는 대목과 노래로 이어 가는 대목을 비교해 들려준다.',
      exit: [
        { type: 'tool', tool: 'keyboard', options: { mode: 'rhythm', meter: 3, measures: 2, blocks: ['q', 'e', 'h', 'qr'], pattern: ['h', 'q', 'q', 'e', 'e', 'q'] }, prompt: '고수의 새 장단을 듣고 블록으로 놓아 보세요.', target: { rhythm: ['h', 'q', 'q', 'e', 'e', 'q'] }, difficulty: 0.25 },
        { type: 'choice', prompt: '판소리에서 말로 이야기를 이어 가는 부분을 무엇이라 할까요?', options: ['아니리', '소리', '발림'], answer: 0, difficulty: 0.2, explain: '말로 이야기를 풀어 가는 부분은 아니리, 노래는 소리, 몸짓은 발림이에요.' },
        MOOD('판소리 이야기를 알아보니 어땠나요?'),
      ],
    },
    ws: {
      title: '판소리 무대 그림 카드',
      note: '소리는 노래, 아니리는 말, 발림은 몸짓이에요. 고수는 북으로 장단을 맞춰요.',
      items: [
        { type: 'table', prompt: '판소리의 표현과 하는 일을 쓰세요.', columns: ['표현', '하는 일'], cells: [['소리', ''], ['아니리', ''], ['발림', '']] },
        { type: 'figure', prompt: '고수의 북 장단을 옮긴 리듬이에요. 마디마다 몇 박인지 쓰세요.', wide: true, tool: 'keyboard', options: { mode: 'rhythm', meter: 3, measures: 2 }, figures: [{ state: { rhythm: ['h', 'q', 'q', 'e', 'e', 'q'] }, caption: '첫째 마디 ___박, 둘째 마디 ___박' }], answer: '첫째 마디 3박, 둘째 마디 3박' },
        { type: 'choice', prompt: '“얼쑤” 같은 추임새를 하는 사람에 ○ 하세요.', options: ['고수와 구경하는 사람', '소리꾼만'], answer: '고수와 구경하는 사람' },
        { type: 'draw', prompt: '판소리 무대에서 소리꾼과 고수가 앉은 모습을 그려 보세요.' },
      ],
      easy: [
        { type: 'choice', prompt: '판소리에서 몸짓을 무엇이라 할까요?', options: ['발림', '아니리'], answer: '발림' },
        { type: 'choice', prompt: '북을 치며 장단을 맞추는 사람에 ○ 하세요.', options: ['고수', '구경꾼'], answer: '고수' },
        { type: 'table', prompt: '표현과 뜻을 쓰세요.', columns: ['표현', '뜻'], cells: [['아니리', '']] },
        { type: 'short', prompt: '오늘 알게 된 판소리 낱말 하나를 쓰세요.' },
      ],
    },
    diff: {
      easy: '카드를 놓으면 맞는지 바로 보여요. 마디마다 지금 박 수가 보여요.',
      base: '카드를 스스로 잇고 확인해요.',
      challenge: '함정 카드가 한 장 더 있고 8분쉼표·2분쉼표 블록까지 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 소리와 아니리를 모두 노래로 본다 → 말로 이야기를 푸는 대목을 짧게 읽어 들려준다. ② 고수가 반주만 하는 사람이라고 여긴다 → 장단과 추임새로 공연을 함께 끌어감을 짚는다. ③ 3박 마디를 4박으로 센다 → 하나·둘·셋을 소리 내어 센다. 소리는 학생이 누를 때만 난다.',
  }));

  // ───────────────────────── 15차시 (확장) ─────────────────────────
  lessons.push(L(15, S5, {
    title: '꽹과리·징·장구·북 소리를 구별하고 풍물 장단 놓기',
    objective: '풍물에 쓰이는 꽹과리·징·장구·북의 소리 특징을 구별하여 말하고, 짧은 풍물 장단을 장단판에 놓을 수 있다.',
    ill: 'four paper instruments a small gong, a large gong, an hourglass drum and a barrel drum standing in a ring with colorful ribbons',
    sceneText: '풍물 네 가지 소리',
    intro: {
      teacher: '"명절이나 축제에서 쇠소리와 북소리가 크게 울리는 걸 본 적 있나요?" 경험을 두세 명이 말하게 한다. 네 악기가 모두 비슷한 소리라고 생각하는 학생에게는 "높고 날카로운 소리, 크게 퍼지는 소리, 묵직한 소리가 서로 달라요. 하나씩 귀로 비교해 봐요"라고 말해 준다.',
      student: '풍물에 쓰이는 악기 네 가지 이름을 아는 대로 말해 봅시다. 어떤 소리가 나나요?',
    },
    acts: [
      {
        id: 'a1', title: '활동 1. 풍물 악기와 소리 특징 잇기', minutes: 13, tool: 'mindmap',
        teacher: '"악기 이름과 소리 특징을 이어요. 이름에 \'쇠\'가 들어간 것과 가죽으로 만든 것을 나누면 쉬워요." 카드를 읽고 짝에게 먼저 말해 보게 한다. 징을 꽹과리와 같은 소리로 여기는 학생에게는 크기가 다르고 울림이 길다는 점을 짚는다.',
        task: '풍물 악기 이름과 알맞은 소리 특징 카드를 이어요.',
        levels: cardsLv(),
        items: [
          { prompt: '풍물 악기 이름과 소리 특징을 이어 보세요.', toolOptions: { mode: 'match', topic: '풍물 악기', slots: [{ id: 'a1', label: '꽹과리' }, { id: 'a2', label: '징' }, { id: 'a3', label: '북' }], cards: ['작고 높은 쇠소리가 날카롭게 울려요', '크고 낮은 쇠소리가 길게 울려요', '가죽 소리가 묵직하게 깊이 울려요'] }, target: { match: { a1: '작고 높은 쇠소리가 날카롭게 울려요', a2: '크고 낮은 쇠소리가 길게 울려요', a3: '가죽 소리가 묵직하게 깊이 울려요' } }, difficulty: 0.15,
            hints: ['쇠로 만든 악기와 가죽으로 만든 악기를 먼저 나누고, 쇠 악기는 크기로 구별해요.', '작은 쇠 악기와 큰 쇠 악기를 서로 바꾸어 이어 놓지 않았는지 보세요.', '꽹과리는 작고 높게, 징은 크고 낮게 길게, 북은 묵직하게 울려요.'],
            levels: { challenge: { toolOptions: { cards: ['작고 높은 쇠소리가 날카롭게 울려요', '크고 낮은 쇠소리가 길게 울려요', '가죽 소리가 묵직하게 깊이 울려요', '줄을 뜯어 맑은 소리를 내요'] } } } },
          { prompt: '장구의 두 면과 소리를 이어 보세요.', toolOptions: { mode: 'match', topic: '장구', slots: [{ id: 'b1', label: '장구의 북편(왼쪽)' }, { id: 'b2', label: '장구의 채편(오른쪽)' }, { id: 'b3', label: '두 손으로 함께 칠 때' }], cards: ['낮고 깊은 소리가 나요', '높고 또렷한 소리가 나요', '두 소리가 한꺼번에 나요'] }, target: { match: { b1: '낮고 깊은 소리가 나요', b2: '높고 또렷한 소리가 나요', b3: '두 소리가 한꺼번에 나요' } }, difficulty: 0.25,
            levels: { challenge: { toolOptions: { cards: ['낮고 깊은 소리가 나요', '높고 또렷한 소리가 나요', '두 소리가 한꺼번에 나요', '소리가 나지 않아요'] } } } },
          { prompt: '풍물을 칠 때 어울리는 모습을 나누어 보세요.', toolOptions: { topic: '풍물의 모습', slots: ['풍물에 어울려요', '풍물과 거리가 멀어요'], cards: ['여럿이 함께 걸으며 쳐요', '신나게 어깨를 들썩여요', '조용히 앉아 책만 읽어요', '혼자 아주 작은 소리만 내요'] }, target: { sort: { '풍물에 어울려요': ['여럿이 함께 걸으며 쳐요', '신나게 어깨를 들썩여요'], '풍물과 거리가 멀어요': ['조용히 앉아 책만 읽어요', '혼자 아주 작은 소리만 내요'] } }, difficulty: 0.3,
            levels: { challenge: { toolOptions: { cards: ['여럿이 함께 걸으며 쳐요', '신나게 어깨를 들썩여요', '조용히 앉아 책만 읽어요', '혼자 아주 작은 소리만 내요', '마당에서 둥글게 돌며 쳐요'] } } } },
        ],
      },
      {
        id: 'a2', title: '활동 2. 풍물 장단 여섯 칸 놓기', minutes: 13, tool: 'keyboard',
        teacher: '"장구 치는 흉내를 내며 구음을 말해 봐요. 덩은 두 손, 쿵은 왼손, 덕은 오른손이에요." 무릎을 쳐 보게 한 뒤 장단판에 놓게 한다. 쿵과 덕의 손을 바꾸는 학생에게는 손을 번갈아 들어 다시 말하게 한다. 칸 틀은 교실용으로 줄인 것이라고 알린다.',
        task: '장단 듣기를 누르고 들은 풍물 장단을 여섯 칸 장단판에 놓아요.',
        levels: jang('풍물 틀', 6),
        items: [
          { prompt: '장단 듣기를 누르고 첫째 풍물 장단 여섯 칸을 놓아 보세요.', toolOptions: { pattern: ['덩', '', '쿵', '덩', '', '덕'] }, target: { strokes: ['덩', '', '쿵', '덩', '', '덕'] }, difficulty: 0.2 },
          { prompt: '앞 세 칸이 놓여 있어요. 장단 듣기를 누르고 둘째 묶음을 채워 보세요.', toolOptions: { pattern: ['덩', '덕', '', '쿵', '', '덩'] }, state: { strokes: ['덩', '덕', '', '', '', ''] }, target: { strokes: ['덩', '덕', '', '쿵', '', '덩'] }, difficulty: 0.25 },
          { prompt: '내가 지은 여섯 칸 풍물 장단을 놓고 무릎으로 쳐 본 뒤 해낸 것을 표시해요.', target: { selfCheck: ['세 칸씩 두 묶음을 지켰어요', '쉼 칸에서 쉬었어요', '짝과 함께 두 번 쳐 보았어요'], minNotes: 2 }, difficulty: 0.2 },
        ],
      },
    ],
    wrap: {
      teacher: '"네 악기를 소리의 높낮이와 길이로 비교해 말해 볼까요?" 두 학생이 악기 하나씩 맡아 말하게 한다. 출구 2번에서 \'징은 꽹과리처럼 높고 날카롭다\'를 고른 학생은 다음 시간 첫머리에 두 악기 소리를 이어 들려주고 크기와 울림을 비교하게 한다.',
      exit: [
        { type: 'tool', tool: 'keyboard', options: { mode: 'janggu', beats: 3, group: 3, strokes: ['덩', '쿵', '덕'], pattern: ['덩', '', '덕'] }, prompt: '장단 듣기를 누르고 풍물 첫 묶음 세 칸을 놓아 보세요.', target: { strokes: ['덩', '', '덕'] }, difficulty: 0.2 },
        { type: 'choice', prompt: '징의 소리 특징으로 알맞은 것은 무엇인가요?', options: ['크고 낮은 소리가 길게 울려요', '작고 높은 소리가 날카로워요', '줄을 뜯어 맑게 울려요'], answer: 0, difficulty: 0.2, explain: '징은 크고 낮은 쇠소리가 길게 울려 퍼져요.' },
        MOOD('풍물 악기 소리를 구별해 보니 어땠나요?'),
      ],
    },
    ws: {
      title: '풍물 네 가지 소리',
      note: '꽹과리는 작고 높게, 징은 크고 길게, 장구는 두 면 소리, 북은 묵직한 소리예요.',
      items: [
        { type: 'table', prompt: '풍물 악기와 소리 특징을 쓰세요.', columns: ['악기', '소리 특징'], cells: [['꽹과리', ''], ['징', ''], ['장구', ''], ['북', '']] },
        { type: 'figure', prompt: '풍물 장단 여섯 칸이에요. 칸마다 구음을 읽고 쉼 칸에 ○ 하세요.', wide: true, tool: 'keyboard', options: { mode: 'janggu', beats: 6, group: 3, jangdan: '풍물 틀', strokes: ['덩', '쿵', '덕'] }, figures: [{ state: { strokes: ['덩', '', '쿵', '덩', '', '덕'] }, caption: '쉼 칸은 모두 몇 개인가요? ___개' }], answer: '두 개' },
        { type: 'choice', prompt: '장구에서 높고 또렷한 소리가 나는 쪽에 ○ 하세요.', options: ['채편', '북편'], answer: '채편' },
        { type: 'short', prompt: '풍물 소리를 들으면 떠오르는 장면과 느낌을 쓰세요.' },
      ],
      easy: [
        { type: 'choice', prompt: '크고 낮은 쇠 악기에 ○ 하세요.', options: ['징', '꽹과리'], answer: '징' },
        { type: 'choice', prompt: '작고 높은 쇠 악기에 ○ 하세요.', options: ['꽹과리', '북'], answer: '꽹과리' },
        { type: 'table', prompt: '악기와 소리를 쓰세요.', columns: ['악기', '소리'], cells: [['북', '']] },
        { type: 'short', prompt: '가장 마음에 든 악기와 까닭을 쓰세요.' },
      ],
    },
    diff: {
      easy: '카드를 놓으면 맞는지 바로 보여요. 장단 붓은 세 가지예요.',
      base: '카드를 스스로 잇고 여섯 칸 장단판에 놓아요.',
      challenge: '함정 카드가 한 장 더 있고 장단 붓이 다섯 가지예요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 꽹과리와 징을 같은 악기로 본다 → 크기와 울림 길이를 나란히 비교한다. ② 장구의 두 면 소리를 구별하지 못한다 → 북편은 낮고 채편은 높다고 짚는다. ③ 쉼 칸을 건너뛴다 → 쉼에서 손을 멈추고 마음속으로 센다. 장단 칸 틀은 교실용으로 줄인 것이다. 소리는 학생이 누를 때만 난다.',
  }));

  // ───────────────────────── 16차시 (확장) ─────────────────────────
  lessons.push(L(16, S5, {
    title: '종묘제례악과 대취타가 쓰이는 때 알아보고 느린 가락 치기',
    objective: '종묘제례악과 대취타가 쓰이던 때와 곳을 나누고, 느린 가락과 행진 가락의 느낌 차이를 건반으로 쳐 보며 설명할 수 있다.',
    ill: 'an old paper gate with a slow procession of musicians carrying long horns and banners under a pale moon',
    sceneText: '제사와 행진의 음악',
    intro: {
      teacher: '"나라의 큰 행사에 쓰던 음악은 어떤 모습이었을까요? 빠르고 시끄러웠을까요, 느리고 엄숙했을까요?" 손을 들어 의견을 모은다. "옛날 음악은 다 지루해요"라는 학생에게는 "제사와 행진처럼 쓰임이 달라서 빠르기와 크기도 달라요. 쓰임을 따라 들으면 재미있어요"라고 말해 준다.',
      student: '나라의 큰 행사에서 쓰던 음악은 어떤 모습이었을까요? 빠르기와 크기를 생각해 봅시다.',
    },
    acts: [
      {
        id: 'a1', title: '활동 1. 연주하는 때에 따라 나누기', minutes: 13, tool: 'story',
        teacher: '"종묘제례악은 제사, 대취타는 행진, 풍물은 마당 놀이에 써요. 쓰임에 따라 카드를 나눠요." 카드를 읽고 어느 칸이 어울리는지 까닭을 말하게 한다. 대취타를 제사 음악으로 넣는 학생에게는 \'걸으며 연주\'하는 모습을 그려 보게 한다. 음원은 교사가 짧게 들려준다.',
        task: '국악 카드를 연주하는 때에 따라 알맞은 칸으로 나누어요.',
        levels: cardsLv(),
        items: [
          { prompt: '국악 카드를 연주하는 때에 따라 세 칸으로 나누어 보세요.', toolOptions: { mode: 'sort', slots: ['제사', '행진', '놀이'], cards: [{ id: 'c1', text: '종묘제례악', motif: 'moon' }, { id: 'c2', text: '대취타', motif: 'sun' }, { id: 'c3', text: '풍물', motif: 'flower' }] }, target: { sort: { 제사: ['c1'], 행진: ['c2'], 놀이: ['c3'] } }, difficulty: 0.2,
            hints: ['제사, 행진, 놀이가 각각 어떤 모습인지 떠올리고 이름과 이어 보세요.', '제사 음악과 놀이 음악을 서로 바꾸어 넣지 않았는지 보세요.', '종묘제례악은 제사, 대취타는 걸으며 행진, 풍물은 신나게 노는 때에 쓰여요.'],
            levels: { challenge: { toolOptions: { cards: [{ id: 'c1', text: '종묘제례악', motif: 'moon' }, { id: 'c2', text: '대취타', motif: 'sun' }, { id: 'c3', text: '풍물', motif: 'flower' }, { id: 'c4', text: '교실 시험 종', motif: 'house' }] } } } },
          { prompt: '느낌을 설명하는 카드를 어울리는 음악 칸에 나누어 보세요.', toolOptions: { mode: 'sort', slots: ['종묘제례악', '대취타'], cards: [{ id: 'd1', text: '느리고 엄숙해요' }, { id: 'd2', text: '걸음에 맞춰 힘차요' }, { id: 'd3', text: '여럿이 조용히 이어 가요' }, { id: 'd4', text: '기다란 나팔 소리가 멀리 퍼져요' }] }, target: { sort: { 종묘제례악: ['d1', 'd3'], 대취타: ['d2', 'd4'] } }, difficulty: 0.25,
            levels: { challenge: { toolOptions: { cards: [{ id: 'd1', text: '느리고 엄숙해요' }, { id: 'd2', text: '걸음에 맞춰 힘차요' }, { id: 'd3', text: '여럿이 조용히 이어 가요' }, { id: 'd4', text: '기다란 나팔 소리가 멀리 퍼져요' }, { id: 'd5', text: '빠르게 춤을 추듯 뛰어요' }] } } } },
          { prompt: '두 음악이 오늘날에도 이어지는 모습을 나누어 보세요.', toolOptions: { mode: 'sort', slots: ['지금도 해요', '지금은 하지 않아요'], cards: [{ id: 'e1', text: '전해 오는 소리를 배우는 사람이 있어요' }, { id: 'e2', text: '행사에서 옛 모습으로 보여 줘요' }, { id: 'e3', text: '아무도 모르게 사라졌어요' }, { id: 'e4', text: '기록이 없어 아무도 못 불러요' }] }, target: { sort: { '지금도 해요': ['e1', 'e2'], '지금은 하지 않아요': ['e3', 'e4'] } }, difficulty: 0.3,
            levels: { challenge: { toolOptions: { cards: [{ id: 'e1', text: '전해 오는 소리를 배우는 사람이 있어요' }, { id: 'e2', text: '행사에서 옛 모습으로 보여 줘요' }, { id: 'e3', text: '아무도 모르게 사라졌어요' }, { id: 'e4', text: '기록이 없어 아무도 못 불러요' }, { id: 'e5', text: '학교에서 소개해요' }] } } } },
        ],
      },
      {
        id: 'a2', title: '활동 2. 느린 가락과 행진 가락 따라 치기', minutes: 13, tool: 'keyboard',
        teacher: '"새로 지은 가락이에요. 도·레·미·솔·라 다섯 음만 쓰면 국악 같은 느낌이 나요." 느린 가락과 걷는 빠르기의 가락을 비교해 들려주고 어울리는 쓰임을 묻는다. 음이 몇 개인지 세다가 놓치는 학생에게는 한 음씩 끊어 따라 치게 한다.',
        task: '새로 지은 두 가락을 듣고 따라 쳐요. 어느 쓰임에 어울리는지도 귀로 찾아요.',
        levels: mel(),
        items: [
          { prompt: '느리고 엄숙한 가락이에요. 가락 듣기를 누르고 따라 쳐 보세요.', toolOptions: { melody: ['도', '레', '미', '솔', '미'], tempo: 56 }, target: { notes: ['도', '레', '미', '솔', '미'] }, difficulty: 0.15 },
          { prompt: '걸음에 맞춘 힘찬 가락이에요. 가락 듣기를 누르고 따라 쳐 보세요.', toolOptions: { melody: ['솔', '솔', '라', '솔', '미', '레'], tempo: 112 }, target: { notes: ['솔', '솔', '라', '솔', '미', '레'] }, difficulty: 0.25,
            predict: { q: '이 가락은 제사와 행진 가운데 어디에 어울릴까요?', options: ['제사', '행진', '잘 모르겠어요'], answer: 1 },
            conclude: '걸음에 맞는 빠르기라 행진에 어울려요. 쓰임에 따라 같은 다섯 음도 느낌이 달라져요.' },
          { prompt: '다섯 음으로 만든 긴 가락이에요. 듣고 따라 친 뒤 같은 음이 되풀이되는 곳을 찾아보세요.', toolOptions: { melody: ['미', '솔', '라', '솔', '미', '솔', '라', '솔'], tempo: 72 }, target: { notes: ['미', '솔', '라', '솔', '미', '솔', '라', '솔'] }, reveal: 'after-check', difficulty: 0.35,
            conclude: '솔 라 솔이 되풀이되는 모양이 있어요. 짧은 모양이 되풀이되면 국악 가락도 귀에 남아요.' },
        ],
      },
    ],
    wrap: {
      teacher: '"종묘제례악과 대취타가 쓰이는 때가 달라서 어떤 점이 다르게 들렸나요?" 두 학생에게 빠르기와 크기 낱말을 넣어 말하게 한다. 출구 2번에서 \'두 음악은 똑같이 빠르다\'를 고른 학생은 다음 시간 첫머리에 두 가락을 이어 들려주고 빠르기를 손으로 쳐 견주게 한다.',
      exit: [
        { type: 'tool', tool: 'story', options: { mode: 'sort', slots: ['제사', '행진'], cards: [{ id: 'z1', text: '종묘제례악' }, { id: 'z2', text: '대취타' }] }, prompt: '두 음악이 쓰이는 때에 맞게 나누어 보세요.', target: { sort: { 제사: ['z1'], 행진: ['z2'] } }, difficulty: 0.15 },
        { type: 'choice', prompt: '대취타는 어떤 모습의 음악일까요?', options: ['걸으며 행진하는 음악', '앉아서만 듣는 자장가', '교실 종소리'], answer: 0, difficulty: 0.2, explain: '대취타는 걸으며 행진할 때 연주하던 음악이에요.' },
        MOOD('국악이 쓰이는 때를 알아보니 어땠나요?'),
      ],
    },
    ws: {
      title: '제사와 행진의 음악',
      note: '종묘제례악은 제사에서 느리고 엄숙하게, 대취타는 행진에서 힘차게 쓰여요.',
      items: [
        { type: 'table', prompt: '두 음악의 쓰임과 느낌을 쓰세요.', columns: ['음악', '쓰이는 때', '느낌'], cells: [['종묘제례악', '', ''], ['대취타', '', '']] },
        { type: 'figure', prompt: '새로 지은 느린 가락이에요. 듣고 계이름을 쓰세요.', wide: true, tool: 'keyboard', options: { from: '도', to: '높은도', printNames: true, printBoxes: 5 }, figures: [{ caption: '제사와 행진 가운데 어울리는 곳에 ○ 하세요.' }], answer: '도 레 미 솔 미 — 제사' },
        { type: 'choice', prompt: '느리고 엄숙한 음악이 어울리는 때에 ○ 하세요.', options: ['제사', '달리기'], answer: '제사' },
        { type: 'short', prompt: '옛 음악을 지금도 전하려면 어떤 일이 필요한지 내 생각을 쓰세요.' },
      ],
      easy: [
        { type: 'choice', prompt: '걸으며 행진하는 음악에 ○ 하세요.', options: ['대취타', '종묘제례악'], answer: '대취타' },
        { type: 'choice', prompt: '제사에서 연주하는 음악에 ○ 하세요.', options: ['종묘제례악', '풍물'], answer: '종묘제례악' },
        { type: 'table', prompt: '음악과 쓰임을 쓰세요.', columns: ['음악', '쓰임'], cells: [['대취타', '']] },
        { type: 'short', prompt: '들어 보고 싶은 국악 이름을 쓰세요.' },
      ],
    },
    diff: {
      easy: '카드를 놓으면 맞는지 바로 보여요. 가락을 들을 때 건반이 빛나요.',
      base: '카드를 스스로 나누고 가락을 듣고 따라 쳐요.',
      challenge: '함정 카드가 한 장 더 있고 건반 이름이 보이지 않아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 국악을 모두 느린 음악으로 안다 → 풍물과 대취타처럼 힘찬 음악도 있음을 들려준다. ② 대취타와 종묘제례악의 쓰임을 섞는다 → 걸으며 행진하는 모습과 제사 모습을 그려 보게 한다. ③ 다섯 음 가락이 낯설어 쳐 보지 않는다 → 한 음씩 끊어 연습한다. 소리는 학생이 누를 때만 난다. 곡의 음원은 교사가 짧게 들려준다.',
  }));

  // ───────────────────────── 17차시 (핵심) ─────────────────────────
  const GUT = ['덩', '', '덕', '쿵', '', '덕', '덩', '', '덕', '쿵', '', ''];
  lessons.push(L(17, S5, {
    title: '굿거리 장단 열두 칸을 장단판에 놓고 무릎으로 치기',
    objective: '세 칸씩 네 묶음으로 이루어진 굿거리 장단을 장단판에 놓고 무릎으로 쳐 보며 장단의 묶음 구조를 설명할 수 있다.',
    ill: 'a paper janggu drum on a stand with twelve round dots on the floor grouped in fours for children to step on',
    sceneText: '굿거리 장단 열두 칸',
    intro: {
      teacher: '"장구 장단은 몇 칸을 한 번에 세는지 알면 쉬워져요. 오늘은 열두 칸이에요." 무릎을 세 칸마다 크게 치며 네 번 세어 보인다. "열두 칸을 한꺼번에 어떻게 외워요?"라는 학생에게는 "세 칸씩 네 묶음으로 나누면 한 묶음만 외우면 돼요"라고 알려 준다.',
      student: '열두 칸 장단을 세 칸씩 묶어 볼 거예요. 한 묶음은 몇 칸이고 모두 몇 묶음일까요?',
      demo: { tool: 'keyboard', options: { mode: 'janggu', beats: 12, group: 3, jangdan: '굿거리', strokes: ['덩', '쿵', '덕'] }, sequence: [{ strokes: ['덩', '', '덕', '', '', '', '', '', '', '', '', ''] }] },
    },
    acts: [
      {
        id: 'a1', title: '활동 1. 굿거리 열두 칸 놓기', minutes: 14, tool: 'keyboard',
        teacher: '"장단 듣기를 누르고 굵은 금마다 한 묶음씩 귀를 기울여요. 묶음 하나를 놓고 무릎으로 쳐 보세요." 칸이 많아 놓치는 학생에게는 묶음 하나만 듣고 놓게 한다. 칸 틀은 교실용으로 줄인 것이니 실제 연주는 음원과 시범으로 확인한다고 알린다.',
        task: '장단 듣기를 누르고 들은 굿거리 장단을 열두 칸 장단판에 놓아요. 굵은 금이 묶음 사이예요.',
        levels: jang('굿거리', 12),
        items: [
          { prompt: '앞 세 묶음이 놓여 있어요. 장단 듣기를 누르고 마지막 묶음을 채워 보세요.', toolOptions: { pattern: GUT }, state: { strokes: ['덩', '', '덕', '쿵', '', '덕', '덩', '', '덕', '', '', ''] }, target: { strokes: GUT }, difficulty: 0.15 },
          { prompt: '앞 두 묶음이 놓여 있어요. 장단 듣기를 누르고 나머지 두 묶음을 채워 보세요.', toolOptions: { pattern: GUT }, state: { strokes: ['덩', '', '덕', '쿵', '', '덕', '', '', '', '', '', ''] }, target: { strokes: GUT }, difficulty: 0.25 },
          { prompt: '장단 듣기를 누르고 굿거리 열두 칸을 처음부터 놓아 보세요.', toolOptions: { pattern: GUT }, target: { strokes: GUT }, reveal: 'after-check', difficulty: 0.35 },
          { prompt: '세 칸씩 네 묶음을 지켜 나만의 굿거리 변주를 놓고 쳐 본 뒤 해낸 것을 표시해요.', target: { selfCheck: ['세 칸씩 네 묶음을 지켰어요', '쉼 칸에서 쉬었어요', '무릎으로 두 번 쳐 보았어요'], minNotes: 4 }, difficulty: 0.25 },
        ],
      },
      {
        id: 'a2', title: '활동 2. 굿거리와 세마치 묶음 견주기', minutes: 12, tool: 'mindmap',
        teacher: '"굿거리는 세 칸 묶음이 네 개, 세마치는 세 묶음이에요. 장단마다 묶음 수가 달라요." 카드를 읽고 칸 수를 손가락으로 세게 한다. 묶음 수와 칸 수를 섞는 학생에게는 \'한 묶음은 세 칸\'을 곱하며 세어 보게 한다.',
        task: '굿거리와 세마치의 묶음 수와 칸 수 카드를 알맞은 칸으로 나누어요.',
        levels: cardsLv(),
        items: [
          { prompt: '카드를 굿거리와 세마치로 나누어 보세요.', toolOptions: { topic: '장단 묶음 수', slots: ['굿거리', '세마치'], cards: ['세 칸씩 네 묶음', '세 칸씩 세 묶음', '모두 열두 칸', '모두 아홉 칸'] }, target: { sort: { 굿거리: ['세 칸씩 네 묶음', '모두 열두 칸'], 세마치: ['세 칸씩 세 묶음', '모두 아홉 칸'] } }, difficulty: 0.2,
            hints: ['한 묶음이 세 칸이므로 묶음 수에 3을 곱하면 모두 몇 칸인지 알 수 있어요.', '네 묶음과 세 묶음의 칸 수를 서로 바꾸어 넣지 않았는지 보세요.', '네 묶음은 열두 칸이라 굿거리, 세 묶음은 아홉 칸이라 세마치예요.'],
            levels: { challenge: { toolOptions: { cards: ['세 칸씩 네 묶음', '세 칸씩 세 묶음', '모두 열두 칸', '모두 아홉 칸', '세 칸씩 다섯 묶음'] } } } },
          { prompt: '장단판을 읽는 방법을 소리 나는 칸과 쉬는 칸으로 나누어 보세요.', toolOptions: { topic: '장단판 읽기', slots: ['소리 내는 칸', '쉬는 칸'], cards: ['덩이 적힌 칸', '덕이 적힌 칸', '쿵이 적힌 칸', '아무것도 없는 빈칸'] }, target: { sort: { '소리 내는 칸': ['덩이 적힌 칸', '덕이 적힌 칸', '쿵이 적힌 칸'], '쉬는 칸': ['아무것도 없는 빈칸'] } }, difficulty: 0.25,
            levels: { challenge: { toolOptions: { cards: ['덩이 적힌 칸', '덕이 적힌 칸', '쿵이 적힌 칸', '아무것도 없는 빈칸', '굵은 금이 그어진 곳'] } } } },
          { prompt: '장단을 칠 때 해야 할 일을 알맞게 나누어 보세요.', toolOptions: { topic: '장단 연습', slots: ['도움이 돼요', '도움이 안 돼요'], cards: ['묶음마다 나누어 연습해요', '쉼 칸에서도 마음속으로 세어요', '한 번에 열두 칸을 빠르게만 쳐요', '쉼 칸은 건너뛰어요'] }, target: { sort: { '도움이 돼요': ['묶음마다 나누어 연습해요', '쉼 칸에서도 마음속으로 세어요'], '도움이 안 돼요': ['한 번에 열두 칸을 빠르게만 쳐요', '쉼 칸은 건너뛰어요'] } }, difficulty: 0.3,
            levels: { challenge: { toolOptions: { cards: ['묶음마다 나누어 연습해요', '쉼 칸에서도 마음속으로 세어요', '한 번에 열두 칸을 빠르게만 쳐요', '쉼 칸은 건너뛰어요', '느리게 시작해요'] } } } },
        ],
      },
    ],
    wrap: {
      teacher: '"굿거리 장단을 외우는 가장 쉬운 방법은 무엇이었나요?" 두 학생에게 \'세 칸 묶음\'을 넣어 말하게 한다. 출구 2번에서 \'굿거리는 세 묶음\'을 고른 학생은 다음 시간 첫머리에 열두 칸을 손가락으로 세 칸씩 묶어 함께 센다.',
      exit: [
        { type: 'tool', tool: 'keyboard', options: { mode: 'janggu', beats: 3, group: 3, strokes: ['덩', '쿵', '덕'], pattern: ['쿵', '', '덕'] }, prompt: '장단 듣기를 누르고 굿거리 둘째 묶음 세 칸을 놓아 보세요.', target: { strokes: ['쿵', '', '덕'] }, difficulty: 0.2 },
        { type: 'choice', prompt: '굿거리 장단은 세 칸씩 몇 묶음일까요?', options: ['네 묶음', '세 묶음', '두 묶음'], answer: 0, difficulty: 0.2, explain: '굿거리는 세 칸씩 네 묶음, 모두 열두 칸이에요.' },
        MOOD('굿거리 장단을 놓고 쳐 보니 어땠나요?'),
      ],
    },
    ws: {
      title: '굿거리 열두 칸',
      note: '굿거리는 세 칸씩 네 묶음, 모두 열두 칸이에요. 빈칸은 쉬는 칸이에요.',
      items: [
        { type: 'figure', prompt: '굿거리 장단판이에요. 쉬는 칸의 수를 세어 쓰세요.', wide: true, tool: 'keyboard', options: { mode: 'janggu', beats: 12, group: 3, jangdan: '굿거리', strokes: ['덩', '쿵', '덕'] }, figures: [{ state: { strokes: GUT }, caption: '쉬는 칸은 모두 ___개' }], answer: '다섯 개' },
        { type: 'table', prompt: '장단 이름과 묶음 수, 칸 수를 쓰세요.', columns: ['장단', '묶음 수', '모두 몇 칸'], cells: [['굿거리', '', ''], ['세마치', '', '']] },
        { type: 'choice', prompt: '장단을 쉽게 외우는 방법에 ○ 하세요.', options: ['묶음마다 나누어 연습해요', '한꺼번에 빠르게 외워요'], answer: '묶음마다 나누어 연습해요' },
        { type: 'short', prompt: '굿거리 장단을 치면서 든 느낌을 한 문장으로 쓰세요.' },
      ],
      easy: [
        { type: 'choice', prompt: '굿거리는 세 칸씩 몇 묶음일까요?', options: ['네 묶음', '세 묶음'], answer: '네 묶음' },
        { type: 'choice', prompt: '빈칸의 뜻에 ○ 하세요.', options: ['쉬는 칸', '두 번 치는 칸'], answer: '쉬는 칸' },
        { type: 'table', prompt: '굿거리의 묶음 수와 칸 수를 쓰세요.', columns: ['묶음 수', '칸 수'], rows: 1 },
        { type: 'short', prompt: '장단을 칠 때 가장 어려웠던 곳을 쓰세요.' },
      ],
    },
    diff: {
      easy: '앞 묶음이 놓여 있고 장단 붓은 세 가지예요. 카드를 놓으면 맞는지 바로 보여요.',
      base: '열두 칸을 스스로 놓고 카드를 나눠요.',
      challenge: '장단 붓이 다섯 가지이고 카드에 함정이 한 장 더 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 열두 칸을 한꺼번에 외우려 한다 → 세 칸 묶음 하나씩 나누어 연습하게 한다. ② 쉬는 칸을 건너뛴다 → 쉼에서도 마음속으로 세게 한다. ③ 묶음 수와 칸 수를 섞는다 → 세 칸 곱하기 묶음 수로 확인하게 한다. 칸 틀은 교실용으로 줄인 것이다. 소리는 학생이 누를 때만 난다.',
  }));

  // ───────────────────────── 18차시 (연습) ─────────────────────────
  lessons.push(L(18, S5, {
    title: '세마치와 굿거리를 번갈아 치며 묶음 세기',
    objective: '세마치와 굿거리를 번갈아 장단판에 놓으며 묶음 수와 칸 수의 차이를 설명하고, 장단 설명 문장을 완성할 수 있다.',
    ill: 'two paper rows of dots one with nine dots and one with twelve dots linked by a ribbon above a small drum',
    sceneText: '세마치와 굿거리',
    intro: {
      teacher: '"세마치와 굿거리를 번갈아 치면 어떤 점이 달라질까요?" 무릎으로 세 묶음과 네 묶음을 번갈아 쳐 보인다. "둘 다 세 칸씩이라 똑같아요"라는 학생에게는 "한 묶음은 같지만 묶음이 몇 번 되풀이되는지가 달라요. 한 번 더 세어 봐요"라고 짚는다.',
      student: '세마치와 굿거리를 무릎으로 번갈아 쳐 봅시다. 어느 장단이 더 길게 이어지나요?',
    },
    acts: [
      {
        id: 'a1', title: '활동 1. 두 장단 번갈아 장단판에 놓기', minutes: 14, tool: 'keyboard',
        teacher: '"먼저 몇 칸짜리 장단인지 보고 놓아요. 칸 수가 다르면 장단판도 달라져요." 장단판 칸 수가 문항마다 다름을 확인하게 한다. 세마치를 열두 칸으로 놓으려는 학생에게는 묶음 수를 먼저 세게 한다.',
        task: '장단 듣기를 누르고 들은 장단을 장단판에 놓아요. 문항마다 칸 수가 달라요.',
        levels: jang('세마치', 9),
        items: [
          { prompt: '세마치예요. 첫 묶음이 비어 있어요. 장단 듣기를 누르고 채워 보세요.', toolOptions: { pattern: SEMACHI }, state: { strokes: ['', '', '', '덩', '', '덕', '쿵', '덕', ''] }, target: { strokes: SEMACHI }, difficulty: 0.15 },
          { prompt: '굿거리예요. 열두 칸을 듣고 앞 두 묶음만 놓아 보세요.', toolOptions: { beats: 12, jangdan: '굿거리', pattern: GUT }, state: { strokes: ['', '', '', '', '', '', '덩', '', '덕', '쿵', '', ''] }, target: { strokes: GUT }, difficulty: 0.25 },
          { prompt: '세마치예요. 가운데 묶음이 비어 있어요. 장단 듣기를 누르고 채워 보세요.', toolOptions: { pattern: SEMACHI }, state: { strokes: ['덩', '', '', '', '', '', '쿵', '덕', ''] }, target: { strokes: SEMACHI }, difficulty: 0.3 },
        ],
      },
      {
        id: 'a2', title: '활동 2. 장단 설명 문장 완성하기', minutes: 12, tool: 'story',
        teacher: '"장단을 소개하는 문장을 완성해요. 숫자 낱말은 직접 세어 확인해요." 빈칸 문장을 소리 내어 읽게 한다. 묶음과 칸을 같은 말로 쓰는 학생에게는 \'묶음은 칸 세 개씩\'이라고 되짚는다.',
        task: '장단 설명 문장의 빈칸에 알맞은 낱말 카드를 놓고, 마지막에는 장단 연습 차례를 놓아요.',
        levels: cardsLv(),
        items: [
          { prompt: '두 장단의 묶음 수를 설명하는 문장을 완성해 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 's1', label: '세마치는 한 장단이 ___ 묶음이에요.' }, { id: 's2', label: '굿거리는 한 장단이 ___ 묶음이에요.' }], cards: [{ id: 'w1', text: '세' }, { id: 'w2', text: '네' }] }, target: { fill: { s1: 'w1', s2: 'w2' } }, difficulty: 0.15,
            hints: ['장단판에서 굵은 금으로 나뉜 묶음을 직접 세어 보고 알맞은 수를 찾아요.', '세마치와 굿거리의 묶음 수를 서로 바꾸어 넣지 않았는지 보세요.', '세마치는 세 묶음, 굿거리는 네 묶음이에요.'],
            levels: { challenge: { toolOptions: { cards: [{ id: 'w1', text: '세' }, { id: 'w2', text: '네' }, { id: 'w3', text: '두' }, { id: 'w4', text: '다섯' }] } } } },
          { prompt: '두 장단의 칸 수를 설명하는 문장을 완성해 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 's3', label: '한 묶음은 ___ 칸이에요.' }, { id: 's4', label: '굿거리는 모두 ___ 칸이에요.' }], cards: [{ id: 'x1', text: '세' }, { id: 'x2', text: '열두' }] }, target: { fill: { s3: 'x1', s4: 'x2' } }, difficulty: 0.25,
            levels: { challenge: { toolOptions: { cards: [{ id: 'x1', text: '세' }, { id: 'x2', text: '열두' }, { id: 'x3', text: '아홉' }, { id: 'x4', text: '여섯' }] } } } },
          { prompt: '새 장단을 연습하는 차례대로 카드를 놓아 보세요.', toolOptions: { slots: ['먼저', '다음', '마지막'], cards: [{ id: 'k1', text: '묶음 수를 세어요', motif: 'star' }, { id: 'k2', text: '묶음마다 장단판에 놓아요', motif: 'flower' }, { id: 'k3', text: '무릎으로 이어서 쳐요', motif: 'sun' }] }, target: { order: ['k1', 'k2', 'k3'] }, difficulty: 0.3,
            levels: { challenge: { toolOptions: { slots: ['먼저', '다음', '마지막'], cards: [{ id: 'k1', text: '묶음 수를 세어요', motif: 'star' }, { id: 'k2', text: '묶음마다 장단판에 놓아요', motif: 'flower' }, { id: 'k3', text: '무릎으로 이어서 쳐요', motif: 'sun' }, { id: 'k4', text: '쉼 칸은 지워요', motif: 'cloud' }] } } } },
        ],
      },
    ],
    wrap: {
      teacher: '"두 장단을 번갈아 칠 때 가장 먼저 세어 볼 것은 무엇인가요?" 두 학생에게 말하게 한다. 출구 2번에서 \'칸 수는 같다\'를 고른 학생은 다음 시간 첫머리에 두 장단판을 나란히 놓고 칸을 하나씩 세어 보게 한다.',
      exit: [
        { type: 'tool', tool: 'keyboard', options: { mode: 'janggu', beats: 3, group: 3, strokes: ['덩', '쿵', '덕'], pattern: ['덩', '', '덕'] }, prompt: '장단 듣기를 누르고 굿거리 첫 묶음 세 칸을 놓아 보세요.', target: { strokes: ['덩', '', '덕'] }, difficulty: 0.15 },
        { type: 'choice', prompt: '세마치와 굿거리 가운데 칸이 더 많은 장단은 무엇일까요?', options: ['굿거리', '세마치', '둘이 같아요'], answer: 0, difficulty: 0.2, explain: '굿거리는 열두 칸이고 세마치는 아홉 칸이에요.' },
        MOOD('두 장단을 견주어 보니 어땠나요?'),
      ],
    },
    ws: {
      title: '두 장단 견주기',
      note: '세마치는 세 묶음 아홉 칸, 굿거리는 네 묶음 열두 칸이에요.',
      items: [
        { type: 'table', prompt: '두 장단의 같은 점과 다른 점을 쓰세요.', columns: ['항목', '세마치', '굿거리'], cells: [['묶음 수', '', ''], ['모두 몇 칸', '', ''], ['한 묶음 칸 수', '', '']] },
        { type: 'figure', prompt: '세마치 장단판이에요. 묶음 수를 세어 쓰세요.', wide: true, tool: 'keyboard', options: { mode: 'janggu', beats: 9, group: 3, jangdan: '세마치', strokes: ['덩', '쿵', '덕'] }, figures: [{ state: { strokes: SEMACHI }, caption: '묶음은 모두 ___개' }], answer: '세 개' },
        { type: 'choice', prompt: '굿거리의 한 묶음 칸 수에 ○ 하세요.', options: ['세 칸', '네 칸'], answer: '세 칸' },
        { type: 'short', prompt: '두 장단 가운데 더 치기 쉬운 것과 까닭을 쓰세요.' },
      ],
      easy: [
        { type: 'choice', prompt: '세마치의 묶음 수에 ○ 하세요.', options: ['세 묶음', '네 묶음'], answer: '세 묶음' },
        { type: 'choice', prompt: '굿거리의 묶음 수에 ○ 하세요.', options: ['네 묶음', '세 묶음'], answer: '네 묶음' },
        { type: 'table', prompt: '장단과 칸 수를 쓰세요.', columns: ['장단', '칸 수'], cells: [['세마치', '']] },
        { type: 'short', prompt: '오늘 두 장단을 쳐 본 느낌을 쓰세요.' },
      ],
    },
    diff: {
      easy: '비어 있는 곳이 적고 장단 붓은 세 가지예요. 카드를 놓으면 맞는지 바로 보여요.',
      base: '비어 있는 묶음을 스스로 채우고 문장 카드를 놓아요.',
      challenge: '장단 붓이 다섯 가지이고 함정 낱말 카드가 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 묶음 수와 칸 수를 섞는다 → 한 묶음은 세 칸, 묶음 수는 굵은 금으로 센다고 짚는다. ② 장단마다 장단판 칸 수가 다름을 놓친다 → 문항마다 장단판을 먼저 보게 한다. ③ 쉬는 칸을 지우려 한다 → 쉼도 장단의 일부임을 알려 준다. 칸 틀은 교실용으로 줄인 것이다. 소리는 학생이 누를 때만 난다.',
  }));

  // ───────────────────────── 19차시 (확장) ─────────────────────────
  lessons.push(L(19, S5, {
    title: '다섯 음만 써서 국악 느낌 가락 짓기',
    objective: '도·레·미·솔·라 다섯 음만 써서 짧은 가락을 짓고, 다섯 음 가락에 어울리는 짓는 방법을 골라 설명할 수 있다.',
    ill: 'five round paper stepping stones in a row each a different pastel color with a small paper bird walking across them',
    sceneText: '다섯 음 가락',
    intro: {
      teacher: '"건반에서 도·레·미·솔·라 다섯 음만 쓰면 어떤 느낌이 날까요?" 시연 단추로 다섯 음 가락을 들려주고 느낌을 말하게 한다. "파와 시는 왜 빼요?"라는 학생에게는 "일곱 음 가운데 다섯 음만 고르면 맑고 소박한 느낌이 나요. 직접 비교해 봐요"라고 말해 준다.',
      student: '다섯 음만으로 만든 가락을 들어 봅시다. 일곱 음으로 만든 가락과 느낌이 어떻게 다른가요?',
      demo: { tool: 'keyboard', options: { from: '도', to: '높은도', tempo: 72 }, sequence: [{ notes: ['도', '레', '미', '솔', '라', '솔'] }] },
    },
    acts: [
      {
        id: 'a1', title: '활동 1. 다섯 음으로 가락 짓기', minutes: 14, tool: 'keyboard',
        teacher: '"파와 시는 피하고 도·레·미·솔·라만 눌러요. 처음과 끝을 정하고 가운데를 채워 봐요." 지은 가락을 느리게 쳐서 소박한 느낌이 나는지 귀로 확인하게 한다. 마지막 음을 아무 음으로 끝내는 학생에게는 \'끝난 느낌\'이 나는지 다시 들려준다.',
        task: '조건에 맞게 다섯 음만 써서 가락을 지어요. 지은 뒤 느리게 쳐서 느낌을 들어요.',
        levels: mel(),
        items: [
          { prompt: '다섯 음만 써서 여섯 음 가락을 지어 보세요. 도로 끝나요.', target: { compose: { length: 6, endOn: '도', only: ['도', '레', '미', '솔', '라'] } }, difficulty: 0.2 },
          { prompt: '다섯 음만 써서 솔로 시작해 미로 끝나는 일곱 음 가락을 지어 보세요.', target: { compose: { length: 7, startOn: '솔', endOn: '미', only: ['도', '레', '미', '솔', '라'] } }, difficulty: 0.3 },
          { prompt: '다섯 음만 써서 라로 시작해 솔로 끝나는 다섯 음 가락을 지어 보세요.', target: { compose: { length: 5, startOn: '라', endOn: '솔', only: ['도', '레', '미', '솔', '라'] } }, difficulty: 0.25 },
          { prompt: '내가 지은 다섯 음 가락을 느리게 쳐 본 뒤 해낸 것을 표시해요.', target: { compose: { length: 6, only: ['도', '레', '미', '솔', '라'] }, selfCheck: ['다섯 음만 썼어요', '느리게 쳐서 소박한 느낌을 들었어요', '짝에게 가락을 들려주었어요'] }, difficulty: 0.2 },
        ],
      },
      {
        id: 'a2', title: '활동 2. 다섯 음 가락 짓는 방법 고르기', minutes: 12, tool: 'mindmap',
        teacher: '"다섯 음에 속하는 음은 몇 개이고 어떤 것일까요? 카드를 골라 보세요." 건반 위 음 이름 순서를 손가락으로 짚게 한다. 음 이름이 헷갈리는 학생에게는 \'도 레 미 파 솔 라 시\'를 노래로 부르게 한 뒤 파와 시를 빼 보게 한다.',
        task: '카드를 읽고 문제에 알맞은 카드만 골라 바구니에 담아요.',
        levels: cardsLv(),
        items: [
          { prompt: '다섯 음 가락에 쓰는 음만 골라 담아 보세요.', toolOptions: { mode: 'pick', topic: '다섯 음 가락', basket: '쓰는 음', cards: ['도', '레', '미', '파', '솔', '라', '시'] }, target: { pick: ['도', '레', '미', '솔', '라'] }, difficulty: 0.2,
            hints: ['일곱 음 이름을 도부터 차례로 읽고, 이번 가락에서 뺀다고 한 음이 무엇인지 떠올려요.', '파와 시를 담지 않았는지, 다섯 음을 모두 담았는지 세어 보세요.', '파와 시를 뺀 도·레·미·솔·라가 다섯 음이에요.'] },
          { prompt: '다섯 음 가락을 소박하고 부드럽게 짓는 방법만 골라 담아 보세요.', toolOptions: { mode: 'pick', topic: '짓는 방법', basket: '알맞은 방법', cards: ['다섯 음만 써요', '한 음을 길게 늘여요', '음과 음 사이를 매끄럽게 이어요', '모든 음을 빠르게 한 번씩만 눌러요', '계속 소리를 아주 세게 내요'] }, target: { pick: ['다섯 음만 써요', '한 음을 길게 늘여요', '음과 음 사이를 매끄럽게 이어요'] }, difficulty: 0.25 },
          { prompt: '다섯 음만 쓴 가락의 음 차례만 골라 담아 보세요.', toolOptions: { mode: 'pick', topic: '다섯 음 차례', basket: '다섯 음만 쓴 가락', cards: ['도 레 미 솔 라 솔', '도 파 미 시 라', '솔 라 솔 미 레 도', '레 미 파 솔 라'] }, target: { pick: ['도 레 미 솔 라 솔', '솔 라 솔 미 레 도'] }, difficulty: 0.3 },
        ],
      },
    ],
    wrap: {
      teacher: '"다섯 음으로만 가락을 지으니 어떤 점이 달랐나요?" 두 학생에게 \'소박하다\' \'맑다\' 같은 낱말을 넣어 말하게 한다. 출구 2번에서 \'다섯 음에 파와 시가 들어 있다\'를 고른 학생은 다음 시간 첫머리에 건반에서 다섯 음만 짚으며 다시 노래 부르게 한다.',
      exit: [
        { type: 'tool', tool: 'keyboard', options: { from: '도', to: '높은도' }, prompt: '도·레·미·솔·라 다섯 음만 써서 솔로 끝나는 네 음 가락을 지어 보세요.', target: { compose: { length: 4, endOn: '솔', only: ['도', '레', '미', '솔', '라'] } }, difficulty: 0.25 },
        { type: 'choice', prompt: '다섯 음 가락에서 쓰지 않는 음은 무엇일까요?', options: ['파와 시', '도와 레', '미와 솔'], answer: 0, difficulty: 0.2, explain: '도·레·미·솔·라 다섯 음만 쓰고 파와 시는 쓰지 않아요.' },
        MOOD('다섯 음 가락을 지어 보니 어땠나요?'),
      ],
    },
    ws: {
      title: '다섯 음 가락 짓기',
      note: '다섯 음은 도·레·미·솔·라예요. 파와 시는 쓰지 않아요.',
      items: [
        { type: 'figure', prompt: '다섯 음만 써서 지은 가락을 계이름으로 쓰세요.', wide: true, tool: 'keyboard', options: { from: '도', to: '높은도', printNames: true, printBoxes: 6 }, figures: [{ caption: '파나 시가 들어 있나요? ( 있다 · 없다 )' }], answer: '학생이 지은 가락 — 없다' },
        { type: 'table', prompt: '일곱 음 이름을 쓰고 쓰지 않는 음에 ×를 하세요.', columns: ['음 이름', '다섯 음에 쓰나요?(○ ×)'], cells: [['파', ''], ['시', ''], ['솔', '']] },
        { type: 'choice', prompt: '다섯 음 가락의 느낌에 ○ 하세요.', options: ['소박하고 맑아요', '아주 복잡해요'], answer: '소박하고 맑아요' },
        { type: 'short', prompt: '내가 지은 다섯 음 가락이 어떤 때에 어울릴지 쓰세요.' },
      ],
      easy: [
        { type: 'choice', prompt: '다섯 음에 들어 있는 음에 ○ 하세요.', options: ['솔', '시'], answer: '솔' },
        { type: 'choice', prompt: '다섯 음에 들어 있지 않은 음에 ○ 하세요.', options: ['파', '라'], answer: '파' },
        { type: 'table', prompt: '다섯 음을 차례로 쓰세요.', columns: ['첫째', '둘째', '셋째', '넷째', '다섯째'], rows: 1 },
        { type: 'short', prompt: '지은 가락의 첫 음과 끝 음을 쓰세요.' },
      ],
    },
    diff: {
      easy: '건반 이름이 보이고 가락을 지을 때 건반이 빛나요. 카드는 많지 않아요.',
      base: '조건을 읽고 스스로 짓고 카드를 골라요.',
      challenge: '건반 이름이 보이지 않고 카드에 함정이 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 파와 시를 다섯 음에 넣는다 → 도 레 미 파 솔 라 시를 부르며 두 음을 빼 보게 한다. ② 다섯 음이면 모두 한 번씩만 써야 한다고 여긴다 → 같은 음을 여러 번 써도 됨을 말해 준다. ③ 가락의 끝을 정하지 못한다 → 끝낼 음을 먼저 정하게 한다. 소리는 학생이 누를 때만 난다.',
  }));

  // ───────────────────────── 20차시 (확장) ─────────────────────────
  const GUT2 = ['덩', '', '', '쿵', '덕', '', '덩', '', '', '쿵', '덕', ''];
  lessons.push(L(20, S5, {
    title: '굿거리 장단에 나만의 변주를 짓고 모둠 연주 차례 정하기',
    objective: '굿거리의 세 칸 묶음을 지키며 한 장단을 새로 짓고, 모둠이 함께 연주하는 차례를 정해 소개할 수 있다.',
    ill: 'a group of paper children sitting in a circle each holding a small drum while a long paper ribbon connects their rhythms',
    sceneText: '모둠이 함께 치는 장단',
    intro: {
      teacher: '"같은 장단이라도 사람마다 조금씩 다르게 칠 때가 있어요. 어떻게 다르게 칠 수 있을까요?" 쉼 칸을 하나 바꾸어 치는 것을 시범으로 보인다. "바꾸면 틀린 거예요"라는 학생에게는 "세 칸 묶음을 지키면 새로운 변주가 돼요"라고 알려 준다.',
      student: '세 칸 묶음을 지키면서 장단을 조금 바꾸어 칠 수 있을까요? 어떻게 바꾸면 좋을까요?',
    },
    acts: [
      {
        id: 'a1', title: '활동 1. 굿거리 변주 놓고 짓기', minutes: 14, tool: 'keyboard',
        teacher: '"앞 문항은 들은 장단을 놓는 거예요. 마지막 문항은 내가 지어요. 묶음마다 세 칸이라는 약속만 지켜요." 지은 뒤에는 모둠에서 한 사람씩 소리 내어 구음으로 읽게 한다. 칸 수가 맞지 않으면 굵은 금 사이를 손가락으로 세어 고치게 한다. 칸 틀은 교실용으로 줄인 것이다.',
        task: '장단 듣기를 누르고 들은 굿거리 변주를 놓은 뒤, 내가 지은 변주를 장단판에 놓아요.',
        levels: jang('굿거리', 12),
        items: [
          { prompt: '앞 두 묶음이 놓여 있어요. 장단 듣기를 누르고 뒤 두 묶음을 채워 보세요.', toolOptions: { pattern: GUT2 }, state: { strokes: ['덩', '', '', '쿵', '덕', '', '', '', '', '', '', ''] }, target: { strokes: GUT2 }, difficulty: 0.2 },
          { prompt: '장단 듣기를 누르고 둘째 변주 열두 칸을 처음부터 놓아 보세요.', toolOptions: { pattern: GUT2 }, target: { strokes: GUT2 }, difficulty: 0.35 },
          { prompt: '내가 지은 굿거리 변주를 놓고 구음으로 읽은 뒤 해낸 것을 표시해요.', target: { selfCheck: ['세 칸씩 네 묶음을 지켰어요', '구음으로 소리 내어 읽었어요', '모둠과 한 번씩 번갈아 쳐 보았어요'], minNotes: 4 }, difficulty: 0.25 },
        ],
      },
      {
        id: 'a2', title: '활동 2. 모둠 연주 차례와 소개 문장 정하기', minutes: 12, tool: 'story',
        teacher: '"모둠이 함께 칠 때 누가 먼저, 어떻게 이어 갈지 순서를 정해요." 카드를 읽고 차례를 말하게 한다. 한 사람만 연주하고 나머지는 구경만 하는 모둠에게는 모두 한 번씩 치도록 차례를 다시 짜게 한다.',
        task: '모둠 연주 차례를 놓고, 소개 문장의 빈칸에 알맞은 낱말 카드를 놓아요.',
        levels: cardsLv(),
        items: [
          { prompt: '모둠 연주 차례대로 카드를 놓아 보세요.', toolOptions: { slots: ['먼저', '다음', '마지막'], cards: [{ id: 'k1', text: '모두 함께 같은 박으로 쳐요', motif: 'sun' }, { id: 'k2', text: '한 사람씩 변주를 쳐요', motif: 'flower' }, { id: 'k3', text: '같은 장단으로 함께 마무리해요', motif: 'moon' }] }, target: { order: ['k1', 'k2', 'k3'] }, difficulty: 0.2,
            hints: ['처음에는 박을 맞추고, 가운데는 개인이 하고, 끝은 다시 함께하는 흐름을 떠올려요.', '마무리를 맨 앞에 놓지 않았는지 보세요.', '함께 박 맞추기 → 한 사람씩 변주 → 함께 마무리 차례예요.'],
            levels: { challenge: { toolOptions: { slots: ['먼저', '다음', '마지막'], cards: [{ id: 'k1', text: '모두 함께 같은 박으로 쳐요', motif: 'sun' }, { id: 'k2', text: '한 사람씩 변주를 쳐요', motif: 'flower' }, { id: 'k3', text: '같은 장단으로 함께 마무리해요', motif: 'moon' }, { id: 'k4', text: '한 사람만 계속 쳐요', motif: 'cloud' }] } } } },
          { prompt: '모둠 소개 문장을 낱말 카드로 완성해 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 's1', label: '우리 모둠은 세 칸씩 ___ 묶음을 지켰어요.' }, { id: 's2', label: '변주는 ___ 칸을 바꾸어 만들었어요.' }], cards: [{ id: 'w1', text: '네' }, { id: 'w2', text: '쉬는' }] }, target: { fill: { s1: 'w1', s2: 'w2' } }, difficulty: 0.25,
            levels: { challenge: { toolOptions: { cards: [{ id: 'w1', text: '네' }, { id: 'w2', text: '쉬는' }, { id: 'w3', text: '세' }, { id: 'w4', text: '모든' }] } } } },
          { prompt: '연주를 마친 뒤 모둠이 돌아볼 말을 나누어 보세요.', toolOptions: { mode: 'sort', slots: ['잘한 점', '더 해 볼 점'], cards: [{ id: 'a1', text: '박을 끝까지 맞추었어요' }, { id: 'a2', text: '쉬는 칸에서도 모두 쉬었어요' }, { id: 'a3', text: '구음을 빠르게 읽다 틀렸어요' }, { id: 'a4', text: '차례를 늦게 이어 갔어요' }] }, target: { sort: { '잘한 점': ['a1', 'a2'], '더 해 볼 점': ['a3', 'a4'] } }, difficulty: 0.3,
            levels: { challenge: { toolOptions: { cards: [{ id: 'a1', text: '박을 끝까지 맞추었어요' }, { id: 'a2', text: '쉬는 칸에서도 모두 쉬었어요' }, { id: 'a3', text: '구음을 빠르게 읽다 틀렸어요' }, { id: 'a4', text: '차례를 늦게 이어 갔어요' }, { id: 'a5', text: '모두 한 번씩 연주했어요' }] } } } },
        ],
      },
    ],
    wrap: {
      teacher: '"장단 변주를 지을 때 꼭 지킨 약속은 무엇이었나요?" 두 모둠에게 말하게 한다. 출구 2번에서 \'바꾸면 장단이 아니다\'를 고른 학생은 다음 시간 첫머리에 쉼 칸 하나만 바꾼 두 장단을 이어 들려주고 묶음이 유지되는지 짚게 한다.',
      exit: [
        { type: 'tool', tool: 'keyboard', options: { mode: 'janggu', beats: 3, group: 3, strokes: ['덩', '쿵', '덕'], pattern: ['쿵', '덕', ''] }, prompt: '장단 듣기를 누르고 굿거리 변주의 둘째 묶음 세 칸을 놓아 보세요.', target: { strokes: ['쿵', '덕', ''] }, difficulty: 0.2 },
        { type: 'choice', prompt: '굿거리 변주를 지을 때 꼭 지킬 것은 무엇일까요?', options: ['세 칸 묶음', '소리 크기만', '악기 수'], answer: 0, difficulty: 0.2, explain: '세 칸 묶음을 지키면 장단의 틀이 유지되어 변주가 돼요.' },
        MOOD('모둠과 함께 변주를 쳐 보니 어땠나요?'),
      ],
    },
    ws: {
      title: '굿거리 변주 설계도',
      note: '변주는 세 칸 묶음을 지키며 쉬는 칸이나 소리를 조금 바꾸는 거예요.',
      items: [
        { type: 'figure', prompt: '굿거리 변주 장단판이에요. 쉬는 칸에 ○ 하세요.', wide: true, tool: 'keyboard', options: { mode: 'janggu', beats: 12, group: 3, jangdan: '굿거리', strokes: ['덩', '쿵', '덕'] }, figures: [{ state: { strokes: GUT2 }, caption: '쉬는 칸은 모두 ___개' }], answer: '여섯 개' },
        { type: 'table', prompt: '우리 모둠의 변주를 설명하세요.', columns: ['항목', '쓰기'], cells: [['지킨 약속', ''], ['바꾼 곳', ''], ['연주 차례', '']] },
        { type: 'choice', prompt: '변주에서 바꾸어도 되는 것에 ○ 하세요.', options: ['쉬는 칸과 소리 칸', '세 칸 묶음 구조'], answer: '쉬는 칸과 소리 칸' },
        { type: 'short', prompt: '모둠 연주에서 가장 신나는 순간과 까닭을 쓰세요.' },
      ],
      easy: [
        { type: 'choice', prompt: '변주에서 지켜야 하는 것에 ○ 하세요.', options: ['세 칸 묶음', '소리를 안 내기'], answer: '세 칸 묶음' },
        { type: 'choice', prompt: '모둠 연주의 마무리에 알맞은 것에 ○ 하세요.', options: ['함께 같은 장단', '혼자 계속'], answer: '함께 같은 장단' },
        { type: 'table', prompt: '지킨 약속을 쓰세요.', columns: ['약속'], rows: 1 },
        { type: 'short', prompt: '우리 모둠 연주의 좋았던 점을 쓰세요.' },
      ],
    },
    diff: {
      easy: '앞쪽 묶음이 놓여 있고 장단 붓은 세 가지예요. 카드를 놓으면 맞는지 바로 보여요.',
      base: '장단을 스스로 놓고 모둠 카드를 정해요.',
      challenge: '장단 붓이 다섯 가지이고 함정 카드가 한 장 더 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 변주를 틀린 장단으로 여긴다 → 세 칸 묶음을 지키면 새로운 변주임을 보여 준다. ② 모둠에서 한 사람만 연주한다 → 모두 한 번씩 치도록 차례를 다시 짠다. ③ 구음을 빠르게 읽다가 쉼 칸을 지운다 → 쉼에서 한 박을 쉬고 읽게 한다. 칸 틀은 교실용으로 줄인 것이다. 소리는 학생이 누를 때만 난다.',
  }));

  // ───────────────────────── 21차시 (핵심) ─────────────────────────
  lessons.push(L(21, S5, {
    title: '우리 음악을 국가유산으로 지켜 전하는 까닭 찾기',
    objective: '국악이 국가유산으로 지켜지고 전해지는 까닭과 우리가 할 수 있는 일을 구별하여 말하고, 국악에 대한 내 마음을 돌아볼 수 있다.',
    ill: 'a paper hand gently passing a small glowing janggu drum to a younger paper hand across a bridge of musical notes',
    sceneText: '지켜 전하는 우리 음악',
    intro: {
      teacher: '"할머니에게 배운 노래나 놀이가 있나요? 그것을 내가 다음 사람에게 전한다면 어떤 마음일까요?" 두세 명의 경험을 듣는다. "옛날 것은 새것으로 바꾸면 되잖아요"라는 학생에게는 "한 번 사라지면 다시 찾기 어려운 소리와 장단이 있어서 나라에서 국가유산으로 정해 지켜요"라고 말해 준다.',
      student: '어른에게 배운 노래나 놀이가 있나요? 그것을 다음 사람에게 전하고 싶은 마음이 드나요?',
    },
    acts: [
      {
        id: 'a1', title: '활동 1. 지켜 전해야 하는 까닭과 방법 가르기', minutes: 14, tool: 'mindmap',
        teacher: '"국가유산은 나라가 정해 지키고 전하는 소중한 것이에요. 국악은 소리라서 배우는 사람이 없으면 사라질 수 있어요." 카드를 읽고 까닭과 방법을 구별하게 한다. 지키는 일은 어른만 할 수 있다고 여기는 학생에게는 학교에서 배우고 소개하는 일도 지키는 일임을 짚는다.',
        task: '카드를 읽고 지켜 전하는 까닭과 우리가 할 수 있는 일로 나누어요.',
        levels: cardsLv(),
        items: [
          { prompt: '국악을 지켜 전해야 하는 까닭과 그렇지 않은 말로 나누어 보세요.', toolOptions: { topic: '지켜 전하는 까닭', slots: ['까닭이에요', '까닭이 아니에요'], cards: ['배우는 사람이 없으면 소리가 사라질 수 있어요', '우리 조상의 생각과 삶이 담겨 있어요', '새로운 것은 모두 쓸모없어요', '남에게 보여 주려고만 해요'] }, target: { sort: { '까닭이에요': ['배우는 사람이 없으면 소리가 사라질 수 있어요', '우리 조상의 생각과 삶이 담겨 있어요'], '까닭이 아니에요': ['새로운 것은 모두 쓸모없어요', '남에게 보여 주려고만 해요'] } }, difficulty: 0.2,
            hints: ['소리가 어떻게 이어지는지, 그 안에 무엇이 담겨 있는지 떠올리며 카드를 읽어요.', '새것을 미워하는 말을 까닭에 넣지 않았는지 보세요.', '소리를 배우는 사람이 있어야 이어지고, 조상의 삶이 담겨 있어 소중해요.'],
            levels: { challenge: { toolOptions: { cards: ['배우는 사람이 없으면 소리가 사라질 수 있어요', '우리 조상의 생각과 삶이 담겨 있어요', '새로운 것은 모두 쓸모없어요', '남에게 보여 주려고만 해요', '여러 세대가 함께 즐기며 이어져요'] } } } },
          { prompt: '지키는 일을 하는 사람과 하는 일을 이어 보세요.', toolOptions: { mode: 'match', topic: '지키는 사람', slots: [{ id: 'p1', label: '소리를 배우고 이어 가는 사람' }, { id: 'p2', label: '학교와 선생님' }, { id: 'p3', label: '우리 학생' }], cards: ['다음 사람에게 소리와 장단을 가르쳐요', '배우고 체험할 기회를 마련해 줘요', '국악을 듣고 소중함을 알며 소개해요'] }, target: { match: { p1: '다음 사람에게 소리와 장단을 가르쳐요', p2: '배우고 체험할 기회를 마련해 줘요', p3: '국악을 듣고 소중함을 알며 소개해요' } }, difficulty: 0.25,
            levels: { challenge: { toolOptions: { cards: ['다음 사람에게 소리와 장단을 가르쳐요', '배우고 체험할 기회를 마련해 줘요', '국악을 듣고 소중함을 알며 소개해요', '악기를 부수어 버려요'] } } } },
          { prompt: '내가 지금 할 수 있는 일과 어른이 해야 하는 일로 나누어 보세요.', toolOptions: { topic: '지키는 방법', slots: ['내가 할 수 있어요', '어른이 해야 해요'], cards: ['국악을 들어 보고 느낌을 말해요', '친구에게 국악을 소개해요', '악기를 크게 고쳐서 새로 만들어요', '나라의 문화 정책을 정해요'] }, target: { sort: { '내가 할 수 있어요': ['국악을 들어 보고 느낌을 말해요', '친구에게 국악을 소개해요'], '어른이 해야 해요': ['악기를 크게 고쳐서 새로 만들어요', '나라의 문화 정책을 정해요'] } }, difficulty: 0.3,
            levels: { challenge: { toolOptions: { cards: ['국악을 들어 보고 느낌을 말해요', '친구에게 국악을 소개해요', '악기를 크게 고쳐서 새로 만들어요', '나라의 문화 정책을 정해요', '장단을 직접 쳐 보아요'] } } } },
        ],
      },
      {
        id: 'a2', title: '활동 2. 국악에 대한 내 마음 돌아보기', minutes: 12, tool: 'emotion',
        teacher: '"국악을 듣고 알아 가면서 내 마음이 어떻게 달라졌나요? 정답은 없어요." 고른 뒤 한 줄로 이유를 쓰게 한다. 낮게 고른 학생을 나무라지 않고 어떤 점이 어려웠는지 묻는다. 높게만 고르는 학생에게는 근거를 한 가지 말하게 한다.',
        task: '국악에 대한 내 마음을 솔직하게 골라요. 정답은 없어요.',
        levels: scaleLv(),
        items: [
          { prompt: '국악을 지켜 전해야 한다는 생각이 내 마음에 얼마나 와닿는지 골라 보세요. 정답은 없어요.', toolOptions: { situation: '국악이 사라지지 않게 지켜 전해야 한다는 이야기를 들었어요.', feeling: '뿌듯함', ask: '지켜 전해야 한다는 생각이 얼마나 와닿나요?' }, target: { level: 'any' }, difficulty: 0.05 },
          { prompt: '국악을 친구에게 소개할 자신이 얼마나 있는지 골라 보세요. 정답은 없어요.', toolOptions: { situation: '친구에게 오늘 들은 국악을 소개해요.', feeling: '편안함', ask: '친구에게 소개할 자신이 얼마나 있나요?' }, target: { level: 'any' }, difficulty: 0.05 },
          { prompt: '국악에 대한 내 마음을 고른 까닭을 활동지에 한 줄 쓰고 짝과 나눈 뒤 "다 했어요"를 누르세요.', free: true, talk: true, difficulty: 0 },
        ],
      },
    ],
    wrap: {
      teacher: '"국악을 지켜 전하는 일에 내가 할 수 있는 것 한 가지만 말해 볼까요?" 두 학생에게 말하게 한다. 출구 2번에서 \'어른만 할 수 있다\'를 고른 학생은 다음 시간 첫머리에 학교에서 배우고 소개하는 일도 국악을 지키는 일임을 한 번 더 이야기한다.',
      exit: [
        { type: 'tool', tool: 'mindmap', options: { topic: '내가 할 수 있는 일', slots: ['내가 할 수 있어요', '어른이 해야 해요'], cards: ['국악을 들어 보고 친구에게 말해요', '문화 정책을 정해요'] }, prompt: '내가 지금 할 수 있는 일과 어른이 해야 하는 일로 나누어 보세요.', target: { sort: { '내가 할 수 있어요': ['국악을 들어 보고 친구에게 말해요'], '어른이 해야 해요': ['문화 정책을 정해요'] } }, difficulty: 0.2 },
        { type: 'choice', prompt: '국악을 국가유산으로 지켜 전하는 까닭으로 알맞은 것은 무엇일까요?', options: ['배우는 사람이 없으면 소리가 사라질 수 있어서', '새것을 없애려고', '남에게 자랑하려고만'], answer: 0, difficulty: 0.2, explain: '소리와 장단은 배우는 사람이 있어야 이어지기 때문에 지켜 전해야 해요.' },
        MOOD('국악이 지켜 전해지는 까닭을 알아보니 어땠나요?'),
      ],
    },
    ws: {
      title: '국악 지킴이 카드',
      note: '국가유산은 나라가 정해 지키고 전하는 소중한 것이에요. 소리는 배우는 사람이 있어야 이어져요.',
      items: [
        { type: 'table', prompt: '국악을 지켜 전하는 까닭과 내가 할 수 있는 일을 쓰세요.', columns: ['까닭', '내가 할 수 있는 일'], rows: 3 },
        { type: 'choice', prompt: '국가유산의 뜻에 알맞은 것에 ○ 하세요.', options: ['나라가 정해 지키고 전하는 소중한 것', '값싸게 사고파는 물건'], answer: '나라가 정해 지키고 전하는 소중한 것' },
        { type: 'short', prompt: '내가 친구에게 소개하고 싶은 국악 이름과 까닭을 쓰세요.' },
        { type: 'draw', prompt: '국악을 다음 사람에게 전해 주는 장면을 그려 보세요.' },
      ],
      easy: [
        { type: 'choice', prompt: '국악이 이어지려면 필요한 것에 ○ 하세요.', options: ['배우는 사람', '소리 없는 악기'], answer: '배우는 사람' },
        { type: 'choice', prompt: '내가 할 수 있는 일에 ○ 하세요.', options: ['국악 들어 보기', '악기 부수기'], answer: '국악 들어 보기' },
        { type: 'table', prompt: '지키는 일 한 가지를 쓰세요.', columns: ['지키는 일'], rows: 1 },
        { type: 'short', prompt: '오늘 가장 마음에 남은 말을 쓰세요.' },
      ],
    },
    diff: {
      easy: '카드가 적고 놓으면 맞는지 바로 보여요. 마음 눈금은 세 칸이에요.',
      base: '카드를 스스로 나누고 마음 눈금을 골라요.',
      challenge: '함정 카드가 한 장 더 있고 마음 눈금은 다섯 칸이에요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 옛것은 지금 쓸모없다고 여긴다 → 소리는 한 번 사라지면 되살리기 어려움을 보여 준다. ② 지키는 일을 어른만 하는 것으로 안다 → 학생이 할 수 있는 들어 보기·소개하기를 짚는다. ③ 마음 눈금을 높게만 고른다 → 구체적인 근거를 한 가지 말하게 한다. 돌아보기는 정답이 없고 개인 평가에 쓰지 않는다.',
  }));

  // ───────────────────────── 22차시 (연습) ─────────────────────────
  lessons.push(L(22, S5, {
    title: '국악 소개 카드 문장을 짜고 5음 가락으로 인사 짓기',
    objective: '국악 소개 카드의 문장을 소리 근거와 쓰임을 넣어 짜 보고, 다섯 음 가락으로 소개 인사 가락을 지을 수 있다.',
    ill: 'a paper card showing a drum, a fan and five colored notes pinned to a bulletin board in a school hallway',
    sceneText: '국악 소개 카드',
    intro: {
      teacher: '"복도에 국악 소개 카드를 붙인다면 지나가던 친구가 어떤 글에 멈춰 설까요?" 두세 명이 말하게 한다. "그냥 멋있다고만 쓰면 돼요"라는 학생에게는 "소리의 모습이나 쓰이는 때가 들어가야 친구가 궁금해해요"라고 말해 준다.',
      student: '복도에 붙일 국악 소개 카드를 만들어 봅시다. 어떤 글이 친구의 눈길을 끌까요?',
    },
    acts: [
      {
        id: 'a1', title: '활동 1. 소개 카드 문장 완성하고 차례 정하기', minutes: 13, tool: 'story',
        teacher: '"소개 카드에는 이름, 소리 모습, 쓰이는 때가 들어가요. 빈칸을 채우면서 읽어 봐요." 문장을 소리 내어 읽게 한다. 이름만 쓰고 끝내는 학생에게는 \'이 소리를 들으면 어떤 모습이 떠올라요?\'라고 묻는다.',
        task: '소개 카드의 빈칸에 알맞은 낱말 카드를 놓고, 마지막에는 카드 차례를 놓아요.',
        levels: cardsLv(),
        items: [
          { prompt: '판소리 소개 카드의 문장을 완성해 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 's1', label: '판소리는 ___가 소리와 말과 몸짓으로 이야기를 들려줘요.' }, { id: 's2', label: '북을 치는 ___가 장단을 맞춰요.' }], cards: [{ id: 'w1', text: '소리꾼' }, { id: 'w2', text: '고수' }] }, target: { fill: { s1: 'w1', s2: 'w2' } }, difficulty: 0.15,
            hints: ['이야기를 하는 사람과 북을 치는 사람이 누구인지 먼저 떠올려요.', '두 사람의 일을 서로 바꾸어 놓지 않았는지 문장을 읽어 보세요.', '이야기를 이끄는 사람은 소리꾼, 북으로 장단을 맞추는 사람은 고수예요.'],
            levels: { challenge: { toolOptions: { cards: [{ id: 'w1', text: '소리꾼' }, { id: 'w2', text: '고수' }, { id: 'w3', text: '지휘자' }, { id: 'w4', text: '구경꾼' }] } } } },
          { prompt: '풍물 소개 카드의 문장을 완성해 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 's3', label: '풍물은 ___ 악기를 치며 신나게 노는 음악이에요.' }, { id: 's4', label: '높고 날카로운 쇠소리는 ___이 내요.' }], cards: [{ id: 'x1', text: '꽹과리·징·장구·북' }, { id: 'x2', text: '꽹과리' }] }, target: { fill: { s3: 'x1', s4: 'x2' } }, difficulty: 0.25,
            levels: { challenge: { toolOptions: { cards: [{ id: 'x1', text: '꽹과리·징·장구·북' }, { id: 'x2', text: '꽹과리' }, { id: 'x3', text: '가야금' }, { id: 'x4', text: '징' }] } } } },
          { prompt: '소개 카드를 읽는 차례대로 카드를 놓아 보세요.', toolOptions: { slots: ['먼저', '다음', '마지막'], cards: [{ id: 'k1', text: '이름을 말해요', motif: 'star' }, { id: 'k2', text: '소리 모습과 쓰이는 때를 말해요', motif: 'flower' }, { id: 'k3', text: '내가 느낀 점으로 마무리해요', motif: 'sun' }] }, target: { order: ['k1', 'k2', 'k3'] }, difficulty: 0.25,
            levels: { challenge: { toolOptions: { slots: ['먼저', '다음', '마지막'], cards: [{ id: 'k1', text: '이름을 말해요', motif: 'star' }, { id: 'k2', text: '소리 모습과 쓰이는 때를 말해요', motif: 'flower' }, { id: 'k3', text: '내가 느낀 점으로 마무리해요', motif: 'sun' }, { id: 'k4', text: '마지막에 이름을 지워요', motif: 'cloud' }] } } } },
        ],
      },
      {
        id: 'a2', title: '활동 2. 다섯 음 가락으로 소개 인사 짓기', minutes: 13, tool: 'keyboard',
        teacher: '"카드를 읽기 전에 들려줄 짧은 인사 가락을 다섯 음으로 지어 봐요." 지은 가락을 소개 카드와 함께 짝에게 들려주게 한다. 파나 시를 누른 학생에게는 건반 이름을 보고 다섯 음만 남기게 한다.',
        task: '소개 인사 가락을 다섯 음으로 지어요. 지은 뒤 카드와 함께 소개해요.',
        levels: mel(),
        items: [
          { prompt: '소개 인사 가락이에요. 도·레·미·솔·라 다섯 음만 써서 도로 끝나는 다섯 음 가락을 지어 보세요.', target: { compose: { length: 5, endOn: '도', only: ['도', '레', '미', '솔', '라'] } }, difficulty: 0.2 },
          { prompt: '판소리 소개 인사 가락이에요. 솔로 시작하는 여섯 음 가락을 다섯 음만 써서 지어 보세요.', target: { compose: { length: 6, startOn: '솔', only: ['도', '레', '미', '솔', '라'] } }, difficulty: 0.25 },
          { prompt: '풍물 소개 인사 가락이에요. 미로 시작해 솔로 끝나는 여섯 음 가락을 다섯 음만 써서 지어 보세요.', target: { compose: { length: 6, startOn: '미', endOn: '솔', only: ['도', '레', '미', '솔', '라'] } }, difficulty: 0.3 },
          { prompt: '내 소개 인사 가락을 짓고 카드와 함께 소개한 뒤 해낸 것을 표시해요.', target: { compose: { length: 5, only: ['도', '레', '미', '솔', '라'] }, selfCheck: ['다섯 음만 썼어요', '카드를 읽기 전에 가락을 들려주었어요', '짝이 어떤 국악 소개인지 떠올렸어요'] }, difficulty: 0.2 },
        ],
      },
    ],
    wrap: {
      teacher: '"소개 카드에 꼭 넣어야 할 세 가지는 무엇이었나요?" 두 학생에게 말하게 한다. 출구 2번에서 \'이름만 쓰면 충분하다\'를 고른 학생은 다음 시간 첫머리에 이름만 쓴 카드와 소리 모습을 넣은 카드를 비교해 읽어 준다.',
      exit: [
        { type: 'tool', tool: 'story', options: { slots: 3, cards: [{ id: 'z1', text: '이름을 말해요' }, { id: 'z2', text: '소리 모습을 말해요' }, { id: 'z3', text: '느낀 점을 말해요' }] }, prompt: '소개 카드를 읽는 차례대로 놓아 보세요.', target: { order: ['z1', 'z2', 'z3'] }, difficulty: 0.15 },
        { type: 'choice', prompt: '국악 소개 카드에 꼭 들어가면 좋은 것은 무엇인가요?', options: ['이름, 소리 모습, 쓰이는 때', '이름만', '친구 이름'], answer: 0, difficulty: 0.2, explain: '소리 모습과 쓰이는 때가 들어가야 읽는 사람이 국악을 떠올릴 수 있어요.' },
        MOOD('국악 소개 카드를 만들어 보니 어땠나요?'),
      ],
    },
    ws: {
      title: '국악 소개 카드',
      note: '소개 카드에는 이름, 소리 모습, 쓰이는 때, 내 느낌을 넣어요.',
      items: [
        { type: 'table', prompt: '내가 고른 국악의 소개 카드를 채우세요.', columns: ['항목', '쓰기'], cells: [['이름', ''], ['소리 모습', ''], ['쓰이는 때', ''], ['내 느낌', '']] },
        { type: 'figure', prompt: '소개 인사 가락의 계이름을 쓰세요.', wide: true, tool: 'keyboard', options: { from: '도', to: '높은도', printNames: true, printBoxes: 5 }, figures: [{ caption: '파나 시가 들어 있나요? ( 있다 · 없다 )' }], answer: '학생이 지은 가락 — 없다' },
        { type: 'choice', prompt: '소개 카드의 첫머리에 알맞은 것에 ○ 하세요.', options: ['국악의 이름', '친구의 점수'], answer: '국악의 이름' },
        { type: 'short', prompt: '소개 카드를 읽을 친구에게 해 주고 싶은 말을 쓰세요.' },
      ],
      easy: [
        { type: 'choice', prompt: '소개 카드에 들어가야 하는 것에 ○ 하세요.', options: ['이름과 소리 모습', '점수만'], answer: '이름과 소리 모습' },
        { type: 'choice', prompt: '이야기를 이끄는 판소리의 사람에 ○ 하세요.', options: ['소리꾼', '고수'], answer: '소리꾼' },
        { type: 'table', prompt: '소개할 국악과 소리 모습을 쓰세요.', columns: ['국악', '소리 모습'], rows: 1 },
        { type: 'short', prompt: '소개 카드에 쓰고 싶은 국악 이름을 쓰세요.' },
      ],
    },
    diff: {
      easy: '카드가 적고 놓으면 맞는지 바로 보여요. 건반 이름이 보이고 건반이 빛나요.',
      base: '문장을 스스로 완성하고 가락을 짓고 확인해요.',
      challenge: '함정 카드가 섞이고 건반 이름이 보이지 않아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 카드에 이름만 쓰고 끝낸다 → 소리 모습과 쓰이는 때를 한 줄씩 덧붙이게 한다. ② 판소리의 소리꾼과 고수를 섞는다 → 이야기를 이끄는 사람과 북을 치는 사람으로 짚는다. ③ 다섯 음에 파·시를 섞는다 → 건반 이름을 켜고 두 음을 빼게 한다. 소리는 학생이 누를 때만 난다.',
  }));

  // ───────────────────────── 23차시 (정리) ─────────────────────────
  lessons.push(L(23, S5, {
    title: '생활 속 음악과 국악을 묶어 단원 돌아보기',
    objective: '이 단원에서 배운 생활 속 음악 감상과 국악 감상의 내용을 한데 묶어 나누고, 내 감상 방법과 국악에 대한 마음을 스스로 돌아볼 수 있다.',
    ill: 'a paper scrapbook opened to a page with a small alarm bell on one side and a janggu drum on the other tied together with a ribbon',
    sceneText: '단원 돌아보기',
    intro: {
      teacher: '"이 단원에서 가장 기억에 남는 소리는 무엇인가요? 생활 속 음악이어도 좋고 국악이어도 좋아요." 세 명 정도가 말하게 한다. "다 잊어버렸어요"라는 학생에게는 "알림음 짓기나 장단판 놓기 같은 활동을 떠올려 봐요"라고 말해 준다.',
      student: '이 단원에서 가장 기억에 남는 소리나 활동은 무엇인가요? 왜 기억에 남았나요?',
    },
    acts: [
      {
        id: 'a1', title: '활동 1. 배운 것 묶어 나누기', minutes: 14, tool: 'mindmap',
        teacher: '"오늘은 배운 것을 두 갈래로 묶어 봐요. 생활 속 음악과 국악이에요." 카드를 읽고 어느 갈래에 속하는지 까닭을 말하게 한다. 생활 속 음악과 국악이 서로 다른 세계라고 여기는 학생에게는 "리듬과 장단, 되풀이는 둘 다에서 나와요"라고 이어 준다.',
        task: '카드를 읽고 생활 속 음악과 국악으로 나누어요. 마지막에는 둘에 모두 쓰이는 것을 골라요.',
        levels: cardsLv(),
        items: [
          { prompt: '배운 활동을 생활 속 음악과 국악으로 나누어 보세요.', toolOptions: { topic: '배운 활동', slots: ['생활 속 음악', '국악'], cards: ['아침 알림음 짓기', '박수 신호 리듬 놓기', '세마치 장단 놓기', '다섯 음 가락 짓기'] }, target: { sort: { '생활 속 음악': ['아침 알림음 짓기', '박수 신호 리듬 놓기'], '국악': ['세마치 장단 놓기', '다섯 음 가락 짓기'] } }, difficulty: 0.2,
            hints: ['카드마다 어떤 시간에 한 활동인지 떠올려 보세요.', '장단판과 다섯 음 가락이 어느 갈래에서 나왔는지 다시 보세요.', '알림음과 박수 신호는 생활 속 음악, 장단판과 다섯 음 가락은 국악이에요.'],
            levels: { challenge: { toolOptions: { cards: ['아침 알림음 짓기', '박수 신호 리듬 놓기', '세마치 장단 놓기', '다섯 음 가락 짓기', '굿거리 변주 짓기'] } } } },
          { prompt: '배운 낱말을 두 갈래로 나누어 보세요.', toolOptions: { topic: '배운 낱말', slots: ['생활 속 음악 낱말', '국악 낱말'], cards: ['알림음', '배경 음악', '판소리', '대취타'] }, target: { sort: { '생활 속 음악 낱말': ['알림음', '배경 음악'], '국악 낱말': ['판소리', '대취타'] } }, difficulty: 0.25,
            levels: { challenge: { toolOptions: { cards: ['알림음', '배경 음악', '판소리', '대취타', '자장가'] } } } },
          { prompt: '두 갈래에 모두 쓰이는 감상 방법만 골라 담아 보세요.', toolOptions: { mode: 'pick', topic: '모두에 쓰이는 방법', basket: '두 갈래 모두', cards: ['소리의 특징을 근거로 말해요', '다시 들으며 새로 들린 소리를 찾아요', '친구 감상을 존중하며 공감해요', '곡 이름만 외워요', '소리를 모두 지워 버려요'] }, target: { pick: ['소리의 특징을 근거로 말해요', '다시 들으며 새로 들린 소리를 찾아요', '친구 감상을 존중하며 공감해요'] }, difficulty: 0.3 },
        ],
      },
      {
        id: 'a2', title: '활동 2. 단원 마치며 내 마음 돌아보기', minutes: 12, tool: 'emotion',
        teacher: '"이 단원을 마친 지금 내 모습을 솔직하게 골라요. 정답은 없고 점수에 들어가지 않아요." 고른 뒤 이유를 한 줄 쓰게 한다. 낮게 고른 학생에게는 어느 활동이 어려웠는지 묻고 다음 단원 전에 다시 해 볼 활동을 정한다. 높게만 고르는 학생에게는 근거를 한 가지 말하게 한다.',
        task: '단원을 마친 내 모습을 솔직하게 골라요. 정답은 없어요.',
        levels: scaleLv(),
        items: [
          { prompt: '소리의 특징을 근거로 감상 소감을 말할 수 있는지 솔직하게 골라 보세요. 정답은 없어요.', toolOptions: { situation: '새로운 곡을 듣고 소리 근거를 들어 소감을 말해요.', feeling: '뿌듯함', ask: '소리 근거를 들어 소감을 얼마나 말할 수 있나요?' }, target: { level: 'any' }, difficulty: 0.05 },
          { prompt: '국악의 가치를 친구에게 설명할 수 있는지 솔직하게 골라 보세요. 정답은 없어요.', toolOptions: { situation: '친구가 국악이 왜 소중한지 물어봤어요.', feeling: '편안함', ask: '국악의 가치를 얼마나 설명할 수 있나요?' }, target: { level: 'any' }, difficulty: 0.05 },
          { prompt: '단원을 마친 내 마음을 고른 까닭을 활동지에 한 줄 쓰고 짝과 나눈 뒤 "다 했어요"를 누르세요.', free: true, talk: true, difficulty: 0 },
        ],
      },
    ],
    wrap: {
      teacher: '"이 단원에서 배운 방법 가운데 앞으로 음악을 들을 때 가장 쓰고 싶은 것은 무엇인가요?" 두 학생에게 말하게 한다. 출구 2번에서 \'곡 이름만 외우면 된다\'를 고른 학생은 다음 단원 시작 전에 소리 근거를 넣은 감상 문장을 한 번 더 써 보게 한다.',
      exit: [
        { type: 'tool', tool: 'keyboard', options: { from: '도', to: '높은도', melody: ['도', '레', '미', '솔', '라'], tempo: 88 }, prompt: '다섯 음 가락을 듣고 건반으로 따라 쳐 보세요.', target: { notes: ['도', '레', '미', '솔', '라'] }, difficulty: 0.2 },
        { type: 'choice', prompt: '감상할 때 소감을 말하는 좋은 방법은 무엇인가요?', options: ['소리의 특징을 근거로 말해요', '곡 이름만 말해요', '친구 말만 따라 해요'], answer: 0, difficulty: 0.2, explain: '소리 근거와 느낌을 짝지어 말하면 듣는 사람이 곡을 떠올릴 수 있어요.' },
        MOOD('감상 단원을 마친 내 마음은 어떤가요?'),
      ],
    },
    ws: {
      title: '감상 단원 돌아보기',
      note: '이 단원은 생활 속 음악과 국악을 소리 근거로 감상하고 소개하는 방법을 배웠어요.',
      items: [
        { type: 'table', prompt: '이 단원에서 배운 것을 두 갈래로 쓰세요.', columns: ['생활 속 음악', '국악'], rows: 3 },
        { type: 'choice', prompt: '감상 소감을 말하는 좋은 방법에 ○ 하세요.', options: ['소리 근거와 느낌을 함께 말해요', '곡 이름만 말해요'], answer: '소리 근거와 느낌을 함께 말해요' },
        { type: 'short', prompt: '앞으로 음악을 들을 때 가장 쓰고 싶은 방법과 까닭을 쓰세요.' },
        { type: 'draw', prompt: '이 단원에서 가장 기억에 남는 소리의 장면을 그려 보세요.' },
      ],
      easy: [
        { type: 'choice', prompt: '국악에 속하는 것에 ○ 하세요.', options: ['판소리', '아침 알람'], answer: '판소리' },
        { type: 'choice', prompt: '감상할 때 쓰면 좋은 방법에 ○ 하세요.', options: ['소리 근거 말하기', '곡 이름 외우기'], answer: '소리 근거 말하기' },
        { type: 'table', prompt: '기억에 남는 소리와 까닭을 쓰세요.', columns: ['소리', '까닭'], rows: 1 },
        { type: 'short', prompt: '단원을 마친 느낌을 쓰세요.' },
      ],
    },
    diff: {
      easy: '카드가 적고 놓으면 맞는지 바로 보여요. 마음 눈금은 세 칸이에요.',
      base: '카드를 스스로 묶고 마음 눈금을 골라요.',
      challenge: '함정 카드가 한 장 더 있고 마음 눈금은 다섯 칸이에요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 생활 속 음악과 국악을 전혀 다른 것으로 본다 → 리듬·되풀이·장단처럼 둘에 모두 쓰이는 것을 짚는다. ② 곡 이름 외우기가 감상이라고 여긴다 → 소리 근거와 느낌을 짝지어 말하게 한다. ③ 마음 눈금을 높게만 고른다 → 구체적인 근거를 하나 말하게 한다. 돌아보기는 정답이 없으며 개인 평가에 쓰지 않고 수업 계획에만 쓴다. 학생 개인정보는 활동지에 쓰지 않는다.',
  }));

  PaperLessons.registerUnit({
    id: 'g6-mus-1-02', schema: 'edu-unit.v1', catalogUnit: U,
    grade: 6, subject: '음악', unitTitle: '2. 감상',
    flow: '앞의 열두 차시는 생활 속 음악입니다: 하루 동안 들리는 소리를 쓰임별로 나누고 빠르기·크기가 장소에 어울리는 까닭을 찾으며, 옛 피아노곡 첫머리와 되풀이되는 저음을 따라 쳐 되풀이의 힘을 느낍니다(1~4차시). 이어서 알림음·신호 리듬·장소별 배경 가락·생활 소리 리듬을 직접 지어 느낌을 소리로 나타내고(5~8차시), 내가 고른 음악을 소리 근거로 소개하고 친구 감상에 공감하며 막연한 문장을 고쳐 하루 음악 일기로 묶습니다(9~12차시). 뒤의 열한 차시는 국악입니다: 판소리·풍물·종묘제례악·대취타의 이름과 하는 일, 세마치 장단판을 알아보고 쓰이는 때를 견주며(13~16차시), 굿거리 열두 칸을 치고 두 장단을 견주어 다섯 음 가락과 모둠 변주를 짓습니다(17~20차시). 마지막으로 국악을 국가유산으로 지켜 전하는 까닭과 내가 할 수 있는 일을 찾아 소개 카드를 만들고, 두 갈래를 묶어 단원을 돌아봅니다(21~23차시).',
    refs: {},
    lessons,
  });
})();
