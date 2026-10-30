/* 3학년 1학기 음악 2. 감상 — 기초 음악 요소 탐색(1~10차시), 다양한 음악에서 특징 발견(11~20차시), 음악의 분위기와 쓰임(21~29차시).
 * 화면 교구의 가락·리듬은 모두 이 단원을 위해 새로 지은 것이다. 교사가 들려주는 감상곡은 작곡가가 세상을 떠난 지 오래되어 저작권이 끝난 곡
 * (생상스 「동물의 사육제」, 그리그 「페르 귄트 모음곡」, 하이든 「놀람 교향곡」, 비발디 「사계」, 브람스 「자장가」)과 전통 음악(「수제천」, 「대취타」,
 * 민요 「도라지 타령」·「새야 새야」, 사물놀이)만 고른다. 음원은 학교가 이용허락을 받은 것을 쓰고, 노랫말은 싣지 않는다.
 * 세마치장단(덩 - - 덩 - 덕 쿵 덕 -)은 전통 장단이다. 학생 이름 예시(민지·준호·서아·지우)는 가명이다.
 */
(function () {
  const ILL = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const U = 'g3-음악-1학기-2';
  const head = (n, standards) => ({
    id: `g3-mus-1-02-${String(n).padStart(2, '0')}`, schema: 'edu-lesson.v1', catalog: { unit: U, lesson: n },
    grade: 3, subject: '음악', unitTitle: '2. 감상', standards, minutes: 40, formats: ['chromebook', 'projector', 'print'],
  });
  const S1 = ['[4음02-01]'];
  const S2 = ['[4음02-02]'];
  const S3 = ['[4음02-03]'];
  // 교구 단계 옵션(차시마다 새 객체)
  const mel = (from = '도', to = '높은도') => ({
    easy: { from, to, names: 'solfa', showWhileListening: true },
    base: { from, to, names: 'solfa' },
    challenge: { from, to, names: 'none', nameToggle: false },
  });
  const rhy = (meter, measures) => ({
    easy: { mode: 'rhythm', meter, measures, blocks: ['q', 'e', 'h', 'qr'], showBeats: true },
    base: { mode: 'rhythm', meter, measures, blocks: ['q', 'e', 'h', 'qr'] },
    challenge: { mode: 'rhythm', meter, measures, blocks: ['q', 'e', 'h', 'qr', 'dh', 'er', 'hr'] },
  });
  const cardsLv = () => ({ easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } });
  const ruleLv = () => ({ easy: { perRow: 6 }, base: { perRow: 8 }, challenge: { perRow: 8, revealAfterCheck: true } });
  const MOVE_SAFE = ['팔을 벌려 친구와 부딪히지 않을 만큼 떨어져 서요.', '악기는 정해진 자리에서만 치고, 친구 귀 가까이에서 치지 않아요.'];

  const lessons = [];

  // ───────────────────────── 1차시 (도입) ─────────────────────────
  lessons.push(Object.assign(head(1, S1), {
    title: '소리 탐정: 높낮이·빠르기·세기 찾아 나누기',
    objective: '여러 소리와 짧은 가락을 듣고 높고 낮음, 빠르고 느림, 세고 여림을 구별하여 소리 카드를 알맞은 묶음에 나눌 수 있다.',
    illustration: {
      prompt: ILL('a child detective with a big paper magnifying glass listening to a bird, a drum and a ticking clock, with sound waves drawn as paper ribbons'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 110, y: 50 }, { motif: 'hills', y: 208 },
        { motif: 'bird', x: 220, y: 84 }, { motif: 'tree', x: 70, y: 214 }, { motif: 'house', x: 410, y: 216 },
        { motif: 'text', x: 240, y: 150, text: '귀를 열고 소리 탐정!', size: 24 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"이번 단원은 음악을 귀 기울여 듣는 ‘감상’ 단원이에요. 먼저 눈을 감고 30초 동안 교실 밖 소리를 들어 볼까요?" 새소리·자동차·발소리 같은 대답을 칠판에 적는다. "새소리는 높았나요, 낮았나요? 자동차는 빨리 지나갔나요?" 하고 묻는다. 시연 단추로 ‘도’와 ‘높은도’를 들려준 뒤 "높은 소리와 큰 소리는 같은 걸까요?" 하고 물어, 높낮이와 세기는 다른 것임을 짚는다.',
        student: '눈을 감고 교실 밖 소리를 들어 봅시다. 어떤 소리가 높고, 어떤 소리가 크게 들리나요?',
        demo: { tool: 'keyboard', options: { from: '도', to: '높은도' }, sequence: [{ notes: ['도'] }, { notes: ['도', '높은도'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 소리 카드를 요소 묶음에 나누기', minutes: 13, tool: 'mindmap',
            teacher: '"카드마다 소리가 ‘어떻게’ 들리는지 알려 주는 낱말을 찾아보세요. 가늘다·굵다인가요, 빠르다·느리다인가요, 크다·작다인가요?" 카드를 소리 내어 읽고 그 소리를 입으로 잠깐 흉내 낸 뒤 넣게 한다. ‘천둥처럼 쾅 커요’를 높낮이에 넣는 학생에게 "크다는 높다와 같은 말일까요? 작게 높은 소리도 있지요?"라고 묻는다.',
            task: '카드를 읽고 그 소리를 입으로 흉내 내 본 뒤, 소리의 무엇이 들리는지에 따라 묶음에 넣어요. 소리와 상관없는 카드는 카드 칸에 남겨요.',
            levels: cardsLv(),
            items: [
              { prompt: '소리 카드를 높고 낮음, 빠르고 느림, 세고 여림 묶음으로 나누어 보세요.', toolOptions: { topic: '소리의 무엇이 들리나요?', slots: ['높고 낮음', '빠르고 느림', '세고 여림'], cards: ['모기 소리처럼 가늘고 높아요', '큰북처럼 굵고 낮게 울려요', '거북이 걸음처럼 느릿느릿해요', '천둥처럼 쾅 커요'] }, target: { sort: { '높고 낮음': ['모기 소리처럼 가늘고 높아요', '큰북처럼 굵고 낮게 울려요'], '빠르고 느림': ['거북이 걸음처럼 느릿느릿해요'], '세고 여림': ['천둥처럼 쾅 커요'] } }, difficulty: 0.1,
                hints: ['카드에서 소리가 어떻게 들리는지 알려 주는 낱말(가늘다·굵다, 빠르다·느리다, 크다·작다)을 먼저 찾고, 그 낱말이 말하는 묶음에 넣어요.', '지금 넣은 카드 가운데 낱말과 묶음이 어긋난 것이 있어요. 카드의 ‘크다·작다’ 낱말은 소리의 세기를 말해요.', '가늘고 높은 소리와 굵고 낮은 소리는 높낮이, 느릿느릿은 빠르기, 쾅 큰 소리는 세기 묶음이에요.'],
                levels: { challenge: { toolOptions: { cards: ['모기 소리처럼 가늘고 높아요', '큰북처럼 굵고 낮게 울려요', '거북이 걸음처럼 느릿느릿해요', '천둥처럼 쾅 커요', '노래 제목이 길어요'] } } } },
              { prompt: '이번 소리 카드도 세 묶음으로 나누어 보세요.', toolOptions: { topic: '소리의 무엇이 들리나요?', slots: ['높고 낮음', '빠르고 느림', '세고 여림'], cards: ['참새가 짹짹 빠르게 울어요', '속삭이듯 작게 말해요', '종이 높게 땡 울려요', '아기를 재우며 천천히 토닥여요'] }, target: { sort: { '높고 낮음': ['종이 높게 땡 울려요'], '빠르고 느림': ['참새가 짹짹 빠르게 울어요', '아기를 재우며 천천히 토닥여요'], '세고 여림': ['속삭이듯 작게 말해요'] } }, difficulty: 0.2,
                hints: ['카드마다 소리가 ‘어떻게’ 들리는지 알려 주는 낱말에 밑줄을 긋는다고 생각하고, 그 낱말에 맞는 묶음을 골라요.', '빠르게·천천히는 빠르기, 작게·크게는 세기, 높게·낮게는 높낮이예요. 넣은 카드의 낱말을 다시 읽어 보세요.', '빠르게 우는 참새와 천천히 토닥이는 손은 빠르기, 속삭이는 작은 소리는 세기, 높게 울리는 종은 높낮이예요.'] },
              { prompt: '‘점점’ 바뀌는 소리예요. 무엇이 바뀌는지 보고 묶음에 나누어 보세요.', toolOptions: { topic: '무엇이 바뀌나요?', slots: ['높고 낮음', '빠르고 느림', '세고 여림'], cards: ['휘파람이 점점 높아져요', '박수 소리가 점점 작아져요', '기차가 점점 빨라져요', '북소리가 점점 커져요'] }, target: { sort: { '높고 낮음': ['휘파람이 점점 높아져요'], '빠르고 느림': ['기차가 점점 빨라져요'], '세고 여림': ['박수 소리가 점점 작아져요', '북소리가 점점 커져요'] } }, reveal: 'after-check', difficulty: 0.3,
                predict: { q: '소리가 ‘커지는’ 것과 ‘높아지는’ 것은 같을까요?', options: ['같아요', '달라요'], answer: 1 },
                conclude: '커지고 작아지는 것은 세기, 높아지고 낮아지는 것은 높낮이예요. 둘은 따로 바뀔 수 있어요.',
                hints: ['카드에서 ‘점점’ 다음에 오는 낱말이 소리의 무엇을 말하는지 보세요.', '커지다·작아지다는 높낮이가 아니라 세기예요. 넣은 카드를 다시 읽어 보세요.', '높아지는 휘파람은 높낮이, 빨라지는 기차는 빠르기, 작아지는 박수와 커지는 북소리는 세기 묶음이에요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 높은 음·낮은 음 듣고 따라 치기', minutes: 13, tool: 'keyboard',
            teacher: '"가락 듣기를 누르고 들은 음을 차례로 쳐요. 높아지면 손을 위로, 낮아지면 아래로 움직이며 들어 보세요." 건반은 오른쪽으로 갈수록 높은 소리라는 것을 확인한다. 소리가 크게 들렸다고 오른쪽 건반을 누르는 학생에게 "건반을 세게 누르면 높아질까요? 같은 건반을 세게, 살살 눌러 볼까요?" 하고 직접 해 보게 한다.',
            task: '가락 듣기를 누르고 손 높이로 따라가며 들은 뒤, 같은 가락을 건반으로 쳐요. 오른쪽 건반일수록 높은 소리예요.',
            levels: mel(),
            items: [
              { prompt: '가락 듣기를 누르고 두 음을 차례로 쳐 보세요. 둘째 음은 높을까요, 낮을까요?', toolOptions: { melody: ['도', '솔'] }, target: { notes: ['도', '솔'] }, difficulty: 0.1,
                predict: { q: '둘째 음은 첫째 음보다 어떨까요?', options: ['높아요', '낮아요'], answer: 0 },
                conclude: '건반에서 오른쪽에 있는 음일수록 높은 소리가 나요.' },
              { prompt: '이번에는 높은 음에서 시작하는 세 음 가락이에요. 손을 내리며 듣고 따라 쳐 보세요.', toolOptions: { melody: ['높은도', '미', '도'] }, target: { notes: ['높은도', '미', '도'] }, difficulty: 0.2 },
              { prompt: '같은 음이 두 번씩 나오는 가락이에요. 소리가 몇 번 나는지 세며 듣고 쳐 보세요.', toolOptions: { melody: ['솔', '솔', '미', '미', '도'] }, target: { notes: ['솔', '솔', '미', '미', '도'] }, reveal: 'after-check', difficulty: 0.3 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 소리를 들으며 찾은 세 가지는 무엇이었나요?" 높낮이·빠르기·세기를 손가락 셋으로 짚으며 말하게 한다. 출구 2번에서 높낮이와 세기를 하나로 묶은 학생에게는 다음 시간 첫머리에 같은 건반을 세게·살살 쳐 보는 것부터 다시 한다.',
        exitTicket: [
          { type: 'tool', tool: 'keyboard', options: { from: '도', to: '높은도', melody: ['미', '솔', '레'] }, prompt: '가락 듣기를 누르고 들은 세 음을 건반으로 따라 쳐 보세요.', target: { notes: ['미', '솔', '레'] }, difficulty: 0.2 },
          { type: 'choice', prompt: '피아노 오른쪽 끝 건반을 아주 살살 눌렀어요. 어떤 소리가 날까요?', options: ['높고 여린 소리', '낮고 센 소리', '높고 센 소리'], answer: 0, difficulty: 0.25, explain: '오른쪽 건반이라 높고, 살살 눌러서 여린 소리예요. 높낮이와 세기는 따로 정해져요.' },
          { type: 'mood', prompt: '소리 탐정이 되어 귀 기울여 들어 보니 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '소리 탐정 기록장',
      items: [
        { type: 'table', prompt: '들은 소리를 쓰고, 해당하는 칸에 ○ 하세요.', columns: ['들은 소리', '높아요', '낮아요', '빨라요', '느려요', '세요', '여려요'], rows: 3 },
        { type: 'choice', prompt: '‘소리가 커졌어요’는 소리의 무엇이 바뀐 것인가요?', options: ['높낮이', '빠르기', '세기'], answer: '세기' },
        { type: 'figure', prompt: '건반에서 가장 높은 소리가 나는 건반에 ○, 가장 낮은 소리가 나는 건반에 △ 하세요.', tool: 'keyboard', options: { from: '도', to: '높은도' }, figures: [{ caption: '' }], answer: '오른쪽 끝(높은도)에 ○, 왼쪽 끝(도)에 △' },
        { type: 'short', prompt: '높은 소리와 큰 소리는 어떻게 다른지 예를 들어 쓰세요.' },
      ],
      easy: {
        note: '높다·낮다 = 높낮이, 빠르다·느리다 = 빠르기, 크다·작다(세다·여리다) = 세기.',
        items: [
          { type: 'choice', prompt: '모기 소리는 어떤 소리인가요?', options: ['높은 소리', '낮은 소리'], answer: '높은 소리' },
          { type: 'choice', prompt: '거북이 걸음처럼 느릿느릿한 것은 무엇과 관계있나요?', options: ['빠르기', '세기'], answer: '빠르기' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '건반은 ___쪽으로 갈수록 높은 소리가 나요.', answer: '오른' },
          { type: 'draw', prompt: '오늘 들은 소리 가운데 하나를 그리고, 높은지 낮은지 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞게 넣은 카드에 초록 테두리가 보이고 틀린 칸에 넣으면 되돌아와요. 가락을 듣는 동안 건반이 빛나요.',
      base: '카드를 모두 넣은 뒤 스스로 확인하고, 계이름을 켜고 끌 수 있어요.',
      challenge: '소리와 상관없는 함정 카드가 하나 섞여 있고, 계이름 없는 건반에서 귀로만 찾아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 높은 소리와 큰 소리를 같은 것으로 여긴다 → 같은 건반을 세게·살살 눌러 들려준다. ② 같은 음이 이어질 때 한 번만 친다 → 소리 난 횟수를 손가락으로 센다. ③ 소리를 흉내 내지 않고 낱말만 보고 넣는다 → 카드를 읽을 때마다 입으로 소리를 내게 한다. 소리는 학생이 누를 때만 난다. 이어폰이 없으면 짝끼리 한 대씩 번갈아 쓴다.',
  }));

  // ───────────────────────── 2차시 (연습) ─────────────────────────
  lessons.push(Object.assign(head(2, S1), {
    title: '되풀이되는 리듬 꼴 찾아 손뼉으로 치기',
    objective: '가락이나 손뼉 소리를 듣고 되풀이되는 리듬 꼴을 찾아 리듬 블록과 손뼉으로 나타내고, 노랫말이 같아도 리듬은 다를 수 있음을 말할 수 있다.',
    illustration: {
      prompt: ILL('rows of paper hands clapping in repeating groups, with matching paper rhythm blocks lined up like train cars'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'cloud', x: 120, y: 54 }, { motif: 'cloud', x: 360, y: 44, s: 0.8 }, { motif: 'hills', y: 208 },
        { motif: 'star', x: 90, y: 120, s: 0.6 }, { motif: 'star', x: 390, y: 120, s: 0.6 }, { motif: 'tree', x: 420, y: 214 },
        { motif: 'text', x: 240, y: 150, text: '따 따 따따 따 — 또 나왔다!', size: 22 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"선생님이 손뼉을 칠게요. 똑같은 꼴이 몇 번 나오는지 세어 보세요." ‘따 따 따따 따’를 세 번 치고 넷째에는 ‘따- 따 따’를 친다. "몇 번 똑같았나요? 어디서 달라졌나요?" 세 번이라는 대답을 기다린다. 이어서 같은 노랫말 ‘우리 반 친구’를 두 가지 리듬으로 말해 보이고 "말이 같으면 리듬도 늘 같을까요?" 하고 물어 둔다.',
        student: '선생님 손뼉을 듣고 똑같은 꼴이 몇 번 나오는지 세어 봅시다.',
        demo: { tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 2 }, sequence: [{ rhythm: ['q', 'q', 'e', 'e', 'q'] }, { rhythm: ['q', 'q', 'e', 'e', 'q', 'q', 'q', 'e', 'e', 'q'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 들은 리듬을 블록으로 놓고 되풀이 찾기', minutes: 13, tool: 'keyboard',
            teacher: '"리듬 듣기를 누르고 먼저 무릎으로 따라 친 다음 블록을 놓아요. 첫째 마디와 둘째 마디가 같은 꼴인지 보세요." 8분음표 두 개는 ‘따따’로 한 박이라는 것을 함께 말한다. 둘째 마디가 첫째 마디와 같다고 미리 짐작해 그대로 놓는 학생에게 "끝까지 들어 보았나요? 마지막 소리가 길었나요, 짧았나요?"를 묻는다.',
            task: '리듬 듣기를 누르고 무릎으로 따라 친 뒤, 들은 리듬을 블록으로 놓아요. 두 마디가 같은 꼴인지도 살펴요.',
            levels: rhy(4, 2),
            items: [
              { prompt: '리듬 듣기를 누르고 블록으로 놓아 보세요. 두 마디가 같은 꼴일까요?', toolOptions: { pattern: ['q', 'q', 'h', 'q', 'q', 'h'] }, target: { rhythm: ['q', 'q', 'h', 'q', 'q', 'h'] }, difficulty: 0.1,
                predict: { q: '두 마디의 리듬은 어떨까요?', options: ['같아요', '달라요'], answer: 0 },
                conclude: '같은 리듬 꼴이 되풀이되면 음악이 귀에 쏙 들어와요.' },
              { prompt: '짧은 소리 둘로 시작하는 꼴이 되풀이돼요. 듣고 블록으로 놓아 보세요.', toolOptions: { pattern: ['e', 'e', 'q', 'q', 'q', 'e', 'e', 'q', 'q', 'q'] }, target: { rhythm: ['e', 'e', 'q', 'q', 'q', 'e', 'e', 'q', 'q', 'q'] }, difficulty: 0.2 },
              { prompt: '첫 박은 같지만 둘째 마디 끝이 달라지는 리듬이에요. 끝까지 듣고 놓아 보세요.', toolOptions: { pattern: ['q', 'e', 'e', 'q', 'q', 'q', 'e', 'e', 'h'] }, target: { rhythm: ['q', 'e', 'e', 'q', 'q', 'q', 'e', 'e', 'h'] }, reveal: 'after-check', difficulty: 0.3 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 손뼉 말 줄에서 되풀이 꼴 찾기', minutes: 13, tool: 'pattern',
            teacher: '"‘따’는 짧은 손뼉 하나, ‘따따’는 빠른 손뼉 둘, ‘따-’는 길게 끄는 손뼉이에요. 줄을 소리 내어 읽으며 손뼉으로 쳐 보세요." 읽기만 하고 치지 않는 학생이 많다. 반드시 치면서 읽게 하고, 세 조각씩 끊어 읽으면 꼴이 잘 보인다고 알려 준다.',
            task: '손뼉 말 줄을 소리 내어 읽으며 손뼉으로 쳐 보고, 되풀이되는 꼴에 맞지 않는 조각·빈칸·규칙을 찾아요.',
            levels: { easy: { perRow: 3 }, base: { perRow: 6 }, challenge: { perRow: 9, revealAfterCheck: true } },
            items: [
              { prompt: '‘따 따따 따-’ 꼴이 되풀이되는 줄이에요. 꼴에 맞지 않는 조각을 하나 찾아 눌러 보세요.', toolOptions: { mode: 'odd', seq: ['따', '따따', '따-', '따', '따따', '따-', '따', '따', '따-'] }, target: { odd: 7 }, difficulty: 0.15,
                hints: ['줄을 손뼉으로 치며 읽고, 처음 세 조각과 같은 차례로 다음 세 조각이 오는지 묶음마다 견주어 보세요.', '마지막 묶음을 처음 묶음과 한 조각씩 나란히 놓고 견주어 보세요.', '마지막 묶음의 가운데 조각이 짧은 손뼉 하나예요. 빠른 손뼉 둘이어야 해요.'] },
              { prompt: '되풀이되는 손뼉 꼴을 찾아 빈칸 두 곳을 채워 보세요.', toolOptions: { seq: ['따따', '따', '따-', '따따', '따', null, '따따', null, '따-'], palette: ['따', '따따', '따-'] }, target: { fill: ['따-', '따'] }, difficulty: 0.2,
                hints: ['줄을 손뼉으로 치며 읽고, 처음 몇 조각이 한 꼴로 되풀이되는지 찾아요.', '빈칸 자리가 꼴의 몇째 조각인지 세어 보세요. 묶음마다 같은 자리에는 같은 조각이 와요.', '꼴은 ‘따따 따 따-’예요. 첫 빈칸은 꼴의 끝, 둘째 빈칸은 꼴의 가운데 자리예요.'] },
              { prompt: '이 손뼉 줄은 어떤 꼴이 되풀이되나요? 알맞은 것을 골라 보세요.', toolOptions: { mode: 'rule', seq: ['따-', '따', '따', '따-', '따', '따', '따-', '따', '따'], choices: ['긴 손뼉 하나에 짧은 손뼉 둘이 되풀이돼요', '짧은 손뼉 둘에 빠른 손뼉 둘이 되풀이돼요', '되풀이되는 꼴이 없어요'], why: ['', '이 줄에는 빠른 손뼉(따따)이 없어요.', '세 조각씩 끊어 읽어 보세요.'] }, target: { pick: 0 }, difficulty: 0.25,
                hints: ['줄을 손뼉으로 치며 읽고, 같은 차례로 다시 시작하는 곳을 찾아 꼴의 길이를 정해요.', '꼴 안에 긴 손뼉·짧은 손뼉·빠른 손뼉이 각각 몇 개 있는지 세어 보세요.', '‘따- 따 따’가 세 번 나와요. 긴 손뼉 하나 뒤에 짧은 손뼉 둘이에요.'] },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"되풀이되는 꼴을 찾을 때 어떻게 하니까 쉬웠나요?" 끊어 읽기·치면서 읽기 같은 방법을 모은다. 도입에서 물어 둔 ‘노랫말이 같으면 리듬도 같을까’를 짝과 직접 말해 보며 확인하게 한다. 출구 2번을 틀린 학생과는 같은 말을 두 가지 리듬으로 다시 말해 본다.',
        exitTicket: [
          { type: 'tool', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 2, blocks: ['q', 'e', 'h', 'qr'], pattern: ['h', 'q', 'q', 'h', 'q', 'q'] }, prompt: '리듬 듣기를 누르고 들은 리듬을 블록으로 놓아 보세요.', target: { rhythm: ['h', 'q', 'q', 'h', 'q', 'q'] }, difficulty: 0.2 },
          { type: 'choice', prompt: '두 줄의 노랫말이 똑같아요. 두 줄의 리듬도 늘 같을까요?', options: ['네, 노랫말이 같으면 리듬도 늘 같아요', '아니요, 노랫말이 같아도 리듬은 다를 수 있어요', '노랫말이 있으면 리듬이 없어요'], answer: 1, difficulty: 0.2, explain: '같은 말도 길게·짧게 다르게 부를 수 있어서 리듬은 귀로 들어 보아야 알아요.' },
          { type: 'mood', prompt: '되풀이되는 리듬을 찾아보니 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '되풀이 리듬 찾기',
      items: [
        { type: 'figure', prompt: '두 마디 리듬을 손뼉으로 쳐 보고, 두 마디가 같으면 ○, 다르면 ✕ 하세요.', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 2 }, figures: [{ state: { rhythm: ['q', 'e', 'e', 'h', 'q', 'e', 'e', 'h'] }, caption: '같다( ) 다르다( )' }], answer: '같다(○)' },
        { type: 'figure', prompt: '되풀이되는 꼴을 찾아 빈칸에 알맞은 손뼉 말을 쓰세요.', tool: 'pattern', wide: true, figures: [{ options: { seq: ['따', '따', '따따', '따', '따', null, '따', null, '따따'] }, caption: '' }], answer: '따따, 따' },
        { type: 'choice', prompt: '노랫말이 같은 두 줄의 리듬에 대한 바른 말에 ○ 하세요.', options: ['늘 같아요', '다를 수 있어서 들어 보아야 알아요', '리듬이 없어요'], answer: '다를 수 있어서 들어 보아야 알아요' },
        { type: 'short', prompt: '되풀이되는 리듬 꼴을 찾을 때 쓴 나만의 방법을 쓰세요.' },
      ],
      easy: {
        note: '따 = 짧은 손뼉 하나(1박), 따따 = 빠른 손뼉 둘(1박), 따- = 길게 끄는 손뼉(2박).',
        items: [
          { type: 'choice', prompt: '‘따 따따 / 따 따따 / 따 따따’에서 되풀이되는 꼴은?', options: ['따 따따', '따- 따'], answer: '따 따따' },
          { type: 'figure', prompt: '빈칸에 알맞은 손뼉 말을 쓰세요.', tool: 'pattern', wide: true, figures: [{ options: { seq: ['따-', '따', '따-', '따', '따-', null] }, caption: '' }], answer: '따' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '8분음표 두 개는 ‘___’로 말하고 한 박이에요.', answer: '따따' },
          { type: 'draw', prompt: '오늘 친 리듬 하나를 짧은 소리는 점, 긴 소리는 선으로 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '리듬 블록 아래에 마디마다 박 수가 보이고, 손뼉 말 줄이 세 조각씩 한 줄에 놓여 꼴이 바로 보여요.',
      base: '손뼉 말 줄이 여섯 조각씩 놓여 꼴의 길이를 스스로 찾아요.',
      challenge: '손뼉 말 줄이 한 줄로 이어지고 틀린 칸을 알려 주지 않아요. 리듬 블록에 8분쉼표·2분쉼표가 더 나와요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 첫 마디만 듣고 둘째 마디를 짐작해 놓는다 → 끝까지 들은 뒤에만 블록을 놓게 한다. ② 따따(8분음표 둘)를 두 박으로 센다 → "따따"를 한 박 안에 빠르게 말하며 무릎을 한 번 친다. ③ 노랫말이 같으면 리듬도 같다고 여긴다 → 같은 말을 길게·짧게 두 가지로 말해 보인다. 손뼉 말 ‘따·따따·따-’는 이 단원에서 리듬을 말로 읽기 위해 쓰는 약속이다.',
  }));

  // ───────────────────────── 3차시 (확장) ─────────────────────────
  lessons.push(Object.assign(head(3, S1), {
    title: '가락이 가장 높아지고 낮아지는 자리 짚기',
    objective: '가락을 듣고 따라 치며 가장 높은 음과 가장 낮은 음, 높은 소리에서 낮은 소리로 바뀌는 자리를 찾아 몇째 음인지 말할 수 있다.',
    illustration: {
      prompt: ILL('a paper mountain path with musical notes climbing to the peak and sliding down into a valley, a child pointing at the highest note'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'mountain', x: 240, y: 208, s: 1.2 }, { motif: 'sun', x: 410, y: 60, s: 0.7 }, { motif: 'hills', y: 216 },
        { motif: 'star', x: 240, y: 70, s: 0.6 }, { motif: 'flower', x: 80, y: 224 }, { motif: 'cloud', x: 100, y: 60 },
        { motif: 'text', x: 240, y: 160, text: '어디가 꼭대기일까?', size: 22 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"산에 오르면 꼭대기가 있고, 내려가면 골짜기가 있지요. 가락에도 꼭대기가 있어요." 시연 단추로 ‘도 미 솔 미 도’를 들려주며 손으로 산 모양을 그린다. "꼭대기 음은 몇째 음이었나요?" 셋째라는 대답을 기다린다. 마지막 음이 꼭대기라고 답하는 학생에게는 끝까지 손 높이를 따라가며 다시 듣게 한다.',
        student: '선생님이 들려주는 가락을 듣고 손으로 산 모양을 그려 봅시다. 꼭대기는 어디일까요?',
        demo: { tool: 'keyboard', options: { from: '도', to: '높은도' }, sequence: [{ notes: ['도', '미', '솔'] }, { notes: ['도', '미', '솔', '미', '도'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 꼭대기와 골짜기가 있는 가락 따라 치기', minutes: 13, tool: 'keyboard',
            teacher: '"가락 듣기를 누르고 손으로 산 모양을 그리며 들어요. 그다음 건반으로 쳐요." 친 뒤에는 짝에게 "꼭대기는 몇째 음이야?" 하고 묻게 한다. 높은 음을 크게 쳐야 한다고 여기는 학생에게 1차시에 한 것처럼 높은 음을 살살 눌러 들려주며 "높아도 여릴 수 있지요?"라고 묻는다.',
            task: '가락 듣기를 누르고 손 높이로 따라가며 들은 뒤, 건반으로 쳐요. 친 다음 꼭대기 음이 몇째 음인지 짝에게 말해요.',
            levels: mel(),
            items: [
              { prompt: '가락 듣기를 누르고 따라 쳐 보세요. 넷째 음까지 올라갔다가 내려와요.', toolOptions: { melody: ['도', '미', '솔', '높은도', '솔'] }, target: { notes: ['도', '미', '솔', '높은도', '솔'] }, difficulty: 0.15 },
              { prompt: '골짜기가 있는 가락이에요. 듣고 따라 쳐 보세요.', toolOptions: { melody: ['솔', '미', '도', '미', '솔'] }, target: { notes: ['솔', '미', '도', '미', '솔'] }, difficulty: 0.2,
                predict: { q: '이 가락에서 가장 낮은 음은 어디쯤일까요?', options: ['처음', '가운데', '끝'], answer: 1 },
                conclude: '내려갔다 올라오는 가락은 가운데에 골짜기(가장 낮은 음)가 있어요.' },
              { prompt: '천천히 오르다 내려오는 여덟 음 가락이에요. 듣고 따라 쳐 보세요.', toolOptions: { melody: ['미', '미', '파', '솔', '솔', '파', '미', '레'] }, target: { notes: ['미', '미', '파', '솔', '솔', '파', '미', '레'] }, reveal: 'after-check', difficulty: 0.3 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 계이름 줄에서 꼭대기·골짜기 짚기', minutes: 14, tool: 'pattern',
            teacher: '"계이름 줄을 손가락으로 짚으며 노래해 보세요. 손이 가장 높이 올라간 음은 몇째인가요?" 칠판에 도부터 높은도까지 계단을 그려 두고 짚게 한다. 순서를 셀 때 첫 음을 ‘영째’로 세거나 하나를 건너뛰는 학생이 있으니 손가락을 하나씩 접으며 세게 한다.',
            task: '계이름 줄을 노래하듯 읽으며 손 높이로 따라가 보고, 질문에 맞는 자리를 골라요.',
            levels: ruleLv(),
            items: [
              { prompt: '이 가락에서 가장 높은 음은 몇째 음인가요?', toolOptions: { mode: 'rule', seq: ['도', '레', '미', '솔', '미'], question: '가장 높은 음은 몇째 음인가요?', choices: ['셋째 음', '넷째 음', '다섯째 음'], why: ['셋째 음 다음에 한 번 더 올라가요.', '', '마지막 음은 바로 앞 음보다 내려왔어요.'] }, target: { pick: 1 }, difficulty: 0.15,
                hints: ['계이름 줄을 손 높이로 따라가며 읽고, 손이 가장 높이 올라간 자리를 찾아요. 도레미 계단에서 위에 있을수록 높은 음이에요.', '고른 자리 다음 음이 더 높은지 낮은지 견주어 보세요.', '도·레·미·솔·미 가운데 솔이 가장 높아요. 솔은 앞에서부터 넷째 음이에요.'] },
              { prompt: '이 가락에서 가장 낮은 음은 몇째 음인가요?', toolOptions: { mode: 'rule', seq: ['솔', '미', '도', '레', '미', '솔'], question: '가장 낮은 음은 몇째 음인가요?', choices: ['둘째 음', '셋째 음', '여섯째 음'], why: ['둘째 음 다음에 한 번 더 내려가요.', '', '마지막 음은 다시 올라온 음이에요.'] }, target: { pick: 1 }, difficulty: 0.2,
                hints: ['계이름 줄을 손 높이로 따라가며 읽고, 손이 가장 낮게 내려간 자리를 찾아요.', '고른 자리의 앞뒤 음과 견주어 보세요. 가장 낮은 음은 앞뒤 음보다 모두 낮아요.', '솔·미·도·레·미·솔 가운데 도가 가장 낮아요. 도는 앞에서부터 셋째 음이에요.'] },
              { prompt: '높은 소리에서 낮은 소리로 처음 바뀌는 곳은 어디인가요?', toolOptions: { mode: 'rule', seq: ['도', '미', '솔', '미', '도', '솔', '높은도'], question: '처음으로 내려가는 곳은 어디인가요?', choices: ['셋째 음에서 넷째 음으로', '다섯째 음에서 여섯째 음으로', '여섯째 음에서 일곱째 음으로'], why: ['', '그곳은 올라가는 곳이에요.', '그곳은 올라가는 곳이에요.'] }, target: { pick: 0 }, difficulty: 0.3,
                hints: ['앞에서부터 두 음씩 견주며 올라가는지 내려가는지 손으로 나타내고, 처음 손이 내려가는 곳을 찾아요.', '고른 곳의 두 음을 계단에서 찾아보세요. 뒤의 음이 더 아래 계단에 있어야 내려가는 곳이에요.', '도→미→솔로 올라간 뒤 솔→미에서 처음 내려가요. 솔은 셋째, 미는 넷째 음이에요.'] },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"가락의 꼭대기를 찾을 때 무엇을 했나요?" 손 높이 따라가기, 계단에서 찾기 같은 방법을 말하게 한다. 출구 1번을 틀린 학생은 계이름 줄을 계단 그림 위에 하나씩 짚어 보게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'pattern', options: { mode: 'rule', seq: ['라', '솔', '미', '솔', '높은도'], question: '가장 높은 음은 몇째 음인가요?', choices: ['첫째 음', '넷째 음', '다섯째 음'] }, prompt: '이 가락에서 가장 높은 음은 몇째 음인지 골라 보세요.', target: { pick: 2 }, difficulty: 0.2 },
          { type: 'choice', prompt: '‘솔 라 솔 미 레 도’ 가락에서 가장 낮은 음은 어디에 있나요?', options: ['처음', '가운데', '끝'], answer: 2, difficulty: 0.2, explain: '솔에서 시작해 라로 한 번 오른 뒤 계속 내려와 마지막 도가 가장 낮아요.' },
          { type: 'mood', prompt: '가락의 꼭대기와 골짜기를 찾아보니 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '가락의 꼭대기와 골짜기',
      items: [
        { type: 'table', prompt: '가락마다 가장 높은 음과 가장 낮은 음이 몇째 음인지 쓰세요.', columns: ['가락', '가장 높은 음', '가장 낮은 음'], cells: [['도 레 미 솔 미', '', ''], ['솔 미 도 레 미', '', ''], ['미 파 솔 높은도 라', '', '']] },
        { type: 'draw', prompt: '‘도 미 솔 미 도’ 가락을 산 모양 선으로 그리고 꼭대기에 ★ 하세요.' },
        { type: 'choice', prompt: '처음으로 내려가는 곳이 있는 가락에 ○ 하세요(셋째 음에서 넷째 음으로).', options: ['도 레 미 파', '도 미 솔 미', '솔 솔 솔 솔'], answer: '도 미 솔 미' },
        { type: 'short', prompt: '가락에서 가장 높은 음을 찾는 나만의 방법을 쓰세요.' },
      ],
      easy: {
        note: '도 → 레 → 미 → 파 → 솔 → 라 → 시 → 높은도 차례로 높아져요.',
        items: [
          { type: 'choice', prompt: '도와 솔 가운데 더 높은 음은?', options: ['도', '솔'], answer: '솔' },
          { type: 'choice', prompt: '‘도 미 솔’ 가락은 어떻게 움직이나요?', options: ['올라가요', '내려가요'], answer: '올라가요' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '‘솔 미 도’에서 가장 낮은 음은 ___예요.', answer: '도' },
          { type: 'draw', prompt: '‘솔 미 도 미 솔’ 가락을 골짜기 모양 선으로 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '가락을 듣는 동안 건반이 빛나고, 계이름 줄이 짧게 끊어져 보여요.',
      base: '계이름을 켜고 끌 수 있고, 계이름 줄 여덟 조각을 한 줄로 봐요.',
      challenge: '계이름 없는 건반에서 귀로만 따라 치고, 틀린 까닭은 확인 전에 알려 주지 않아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 마지막 음을 꼭대기로 여긴다 → 끝까지 손 높이를 따라간다. ② 몇째 음인지 셀 때 하나를 건너뛴다 → 손가락을 하나씩 접으며 센다. ③ 높은 음을 세게 친다 → 높은 음도 살살 칠 수 있다는 것을 들려준다. 칠판에 계이름 계단을 늘 그려 두면 다음 차시에도 쓸 수 있다.',
  }));

  // ───────────────────────── 4차시 (확장) ─────────────────────────
  lessons.push(Object.assign(head(4, S1), {
    title: '점점 빨라지고 세지는 곡 흐름 따라가기',
    objective: '감상곡을 듣고 빠르기와 셈여림이 바뀌는 차례를 카드로 놓고, 빠르기를 나타내는 말과 셈여림을 나타내는 말을 구별할 수 있다.',
    illustration: {
      prompt: ILL('a paper cave in the mountains where small trolls tiptoe at first and then dance faster and faster, music notes growing bigger'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'mountain', x: 150, y: 206, s: 1.1 }, { motif: 'mountain', x: 340, y: 210 }, { motif: 'moon', x: 410, y: 58, s: 0.7 },
        { motif: 'star', x: 90, y: 54, s: 0.5 }, { motif: 'hills', y: 216 }, { motif: 'tree', x: 430, y: 220 },
        { motif: 'text', x: 240, y: 140, text: '살금살금 → 쿵쾅쿵쾅!', size: 24 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"오늘 들을 곡은 그리그의 「페르 귄트 모음곡」 가운데 ‘산왕의 궁전에서’예요. 끝까지 들으며 손가락으로 책상을 따라 두드려 보세요." 곡의 처음 1분을 들려준다. "처음과 끝이 어떻게 달라졌나요?" 빨라졌다, 커졌다는 대답을 칠판의 두 칸(빠르기·셈여림)에 나누어 적는다. "빨라진 것과 커진 것은 같은 걸까요?" 하고 물어 둔다.',
        student: '곡을 들으며 손가락으로 책상을 살살 두드려 봅시다. 처음과 끝이 어떻게 달라지나요?',
        demo: { tool: 'story', options: { mode: 'order', cards: ['느리고 여리게 시작해요', '빠르고 세게 끝나요'], shuffle: false }, sequence: [{ order: ['느리고 여리게 시작해요', '빠르고 세게 끝나요'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 곡이 바뀌는 차례대로 카드 놓기', minutes: 13, tool: 'story',
            teacher: '"곡을 다시 들으며 바뀌는 곳에서 손을 들어 보세요. 카드는 들은 차례대로 놓아요." 곡을 한 번 더 들려주고 놓게 한다. 하이든 「놀람 교향곡」 2악장은 처음 30초만 들려준다. 갑자기 큰 소리에 놀라 웃는 학생에게 "작곡가가 일부러 그렇게 만들었어요. 왜 그랬을까요?"를 묻고, 여리게 이어지다 갑자기 세게 바뀌는 것이 이 곡의 재미라고 짚는다.',
            task: '곡을 들으며 바뀌는 곳에서 손을 들고, 들은 차례대로 카드를 놓아요.',
            levels: cardsLv(),
            items: [
              { prompt: '‘산왕의 궁전에서’를 들은 차례대로 카드를 놓아 보세요.', toolOptions: { cards: ['같은 가락이 조금씩 빨라지고 커져요', '아주 빠르고 세게 몰아쳐 끝나요', '낮은 악기가 느리고 여리게 시작해요'] }, target: { order: ['낮은 악기가 느리고 여리게 시작해요', '같은 가락이 조금씩 빨라지고 커져요', '아주 빠르고 세게 몰아쳐 끝나요'] }, difficulty: 0.15,
                hints: ['곡이 처음에 어떻게 시작해서 끝에 어떻게 되었는지 떠올리고, 그 사이에 바뀌어 가는 모습을 가운데에 놓아요.', '지금 놓은 차례대로 읽어 보세요. 곡이 점점 빨라지고 커지는 차례가 되나요?', '느리고 여린 시작 → 조금씩 빨라지고 커짐 → 아주 빠르고 센 끝 차례예요.'] },
              { prompt: '「놀람 교향곡」 2악장 처음 부분을 들은 차례대로 놓아 보세요.', toolOptions: { cards: ['갑자기 아주 세게 쾅 울려요', '여린 가락이 조용히 이어져요', '다시 가락이 이어져요'] }, target: { order: ['여린 가락이 조용히 이어져요', '갑자기 아주 세게 쾅 울려요', '다시 가락이 이어져요'] }, difficulty: 0.2,
                predict: { q: '여린 가락 다음에 어떤 소리가 올까요?', options: ['더 여린 소리', '갑자기 센 소리'], answer: 1 },
                conclude: '작곡가는 여린 소리 뒤에 갑자기 센 소리를 넣어 듣는 사람을 놀라게 했어요.',
                hints: ['곡을 듣다가 깜짝 놀란 곳을 떠올리고, 그 앞과 뒤에 무엇이 들렸는지 차례로 놓아요.', '놀란 곳 앞에 어떤 소리가 있었는지 다시 떠올려 보세요. 조용했나요, 시끄러웠나요?', '조용한 여린 가락 → 갑자기 쾅 → 다시 가락이 이어지는 차례예요.'] },
              { prompt: '‘산왕의 궁전에서’에서 되풀이되는 동안 바뀐 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '바뀐 것', cards: ['빠르기', '셈여림', '노랫말', '곡 이름'] }, target: { pick: ['빠르기', '셈여림'] }, reveal: 'after-check', difficulty: 0.3,
                hints: ['같은 가락이 되풀이될 때 처음과 끝에 무엇이 달라졌는지 떠올려요. 이 곡에 노랫말이 있었는지도 생각해요.', '고른 카드가 정말 곡에서 들린 것인지 보세요. 이 곡은 악기로만 연주해요.', '가락은 같고, 점점 빨라지고(빠르기) 점점 커져요(셈여림). 노랫말은 없어요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 빠르기 말과 셈여림 말 나누기', minutes: 13, tool: 'mindmap',
            teacher: '"빠르기 말은 ‘얼마나 빨리’, 셈여림 말은 ‘얼마나 크게’를 알려 줘요." 낱말마다 손뼉을 그 말대로 쳐 보게 한다. ‘점점 세게’를 빠르기에 넣는 학생에게 "손뼉을 점점 세게 치면 손이 빨라져야 하나요?" 하고 직접 쳐 보게 한다. 셈여림표 p·f와 점점 세게 기호(<)도 손뼉으로 나타내 본다.',
            task: '낱말 카드를 그 말대로 손뼉으로 쳐 본 뒤, 빠르기 말과 셈여림 말로 나누거나 기호와 뜻을 이어요.',
            levels: cardsLv(),
            items: [
              { prompt: '낱말 카드를 빠르기 말과 셈여림 말로 나누어 보세요.', toolOptions: { topic: '음악 낱말', slots: ['빠르기', '셈여림'], cards: ['느리게', '점점 빠르게', '여리게', '갑자기 세게', '점점 여리게', '빠르게'] }, target: { sort: { 빠르기: ['느리게', '점점 빠르게', '빠르게'], 셈여림: ['여리게', '갑자기 세게', '점점 여리게'] } }, difficulty: 0.15 },
              { prompt: '셈여림 기호와 뜻을 이어 보세요.', toolOptions: { mode: 'match', topic: '셈여림 기호', slots: [{ id: 'p', label: 'p' }, { id: 'f', label: 'f' }, { id: 'cr', label: '<' }], cards: ['여리게', '세게', '점점 세게'] }, target: { match: { p: '여리게', f: '세게', cr: '점점 세게' } }, difficulty: 0.2,
                hints: ['기호마다 그 기호를 보고 손뼉을 어떻게 칠지 떠올려요. 벌어지는 모양은 점점 바뀌는 것을 나타내요.', '이은 카드 가운데 바뀌는 모습과 그대로인 모습이 섞였어요. 벌어지는 기호는 소리가 커져 가는 모양이에요.', 'p는 여리게, f는 세게, 오른쪽으로 벌어지는 <는 점점 세게예요.'],
                levels: { challenge: { toolOptions: { cards: ['여리게', '세게', '점점 세게', '점점 빠르게'] } } } },
              { prompt: '빠르기를 나타내는 말만 골라 보세요.', toolOptions: { mode: 'pick', topic: '빠르기 말', basket: '빠르기 말', cards: ['천천히', '빠르게', '높게', '세게', '점점 느리게'] }, target: { pick: ['천천히', '빠르게', '점점 느리게'] }, reveal: 'after-check', difficulty: 0.25,
                predict: { q: '‘높게’는 빠르기 말일까요?', options: ['네', '아니요'], answer: 1 },
                conclude: '높게·낮게는 높낮이, 세게·여리게는 셈여림, 빠르게·느리게만 빠르기 말이에요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 들은 두 곡은 각각 무엇이 바뀌어서 재미있었나요?" 짝과 한 곡씩 나누어 말하게 한다. 출구 2번에서 빠르기와 셈여림을 하나로 고른 학생에게는 느리면서 세게, 빠르면서 여리게 손뼉을 쳐 보게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '음악 낱말', slots: ['빠르기', '셈여림'], cards: ['점점 느리게', '세게', '천천히', '점점 세게'] }, prompt: '낱말 카드를 빠르기 말과 셈여림 말로 나누어 보세요.', target: { sort: { 빠르기: ['점점 느리게', '천천히'], 셈여림: ['세게', '점점 세게'] } }, difficulty: 0.2 },
          { type: 'choice', prompt: '음악이 느리면서 아주 세게 들려요. 맞는 말은 무엇인가요?', options: ['느리면 늘 여리게 들려요', '빠르기와 셈여림은 따로 바뀔 수 있어요', '세게 들리면 빠른 음악이에요'], answer: 1, difficulty: 0.25, explain: '빠르기는 얼마나 빨리, 셈여림은 얼마나 크게라서 서로 따로 정해져요.' },
          { type: 'mood', prompt: '곡이 바뀌는 곳을 찾으며 들어 보니 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '곡의 흐름 따라가기',
      items: [
        { type: 'table', prompt: '‘산왕의 궁전에서’의 처음과 끝을 쓰세요.', columns: ['', '빠르기', '셈여림'], cells: [['처음', '', ''], ['끝', '', '']] },
        { type: 'choice', prompt: '‘점점 세게’를 나타내는 기호에 ○ 하세요.', options: ['p', '<', '>'], answer: '<' },
        { type: 'table', prompt: '낱말을 알맞은 칸에 나누어 쓰세요: 빠르게, 여리게, 천천히, 세게', columns: ['빠르기 말', '셈여림 말'], rows: 2 },
        { type: 'short', prompt: '「놀람 교향곡」에서 깜짝 놀란 곳은 어디였고, 왜 놀랐는지 쓰세요.' },
      ],
      easy: {
        note: '빠르기 = 얼마나 빨리(빠르게·느리게), 셈여림 = 얼마나 크게(세게·여리게). p는 여리게, f는 세게.',
        items: [
          { type: 'choice', prompt: '‘산왕의 궁전에서’는 끝에서 어떻게 되나요?', options: ['빠르고 세게', '느리고 여리게'], answer: '빠르고 세게' },
          { type: 'choice', prompt: 'f의 뜻은?', options: ['세게', '여리게'], answer: '세게' },
          { type: 'choice', prompt: '‘천천히’는 무엇을 나타내는 말인가요?', options: ['빠르기', '셈여림'], answer: '빠르기' },
          { type: 'draw', prompt: '곡이 점점 커지는 모습을 그림으로 나타내 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞게 놓은 카드에 초록 테두리가 보이고, 틀린 칸에 놓으면 까닭을 말하며 되돌아와요.',
      base: '카드를 다 놓은 뒤 스스로 확인해요.',
      challenge: '카드가 섞여 나오고, 기호 잇기에 함정 카드가 하나 더 있어요. 고르기 문항은 맞힌 뒤에야 테두리가 보여요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 빨라지면 커지는 것이라 여긴다 → 빠르고 여린 손뼉, 느리고 센 손뼉을 해 본다. ② 곡의 바뀌는 곳을 듣지 않고 카드 글만 보고 놓는다 → 바뀌는 곳에서 손을 들게 하고 교사가 확인한다. ③ <와 >를 헷갈린다 → 입을 벌리는 쪽으로 소리가 커진다고 알려 준다. 감상곡은 처음 1분, 「놀람 교향곡」은 처음 30초 정도만 들려줘도 충분하다.',
  }));

  // ───────────────────────── 5차시 (핵심) ─────────────────────────
  lessons.push(Object.assign(head(5, S1), {
    title: '들은 리듬을 목소리와 작은 타악기로 따라 내기',
    objective: '들은 리듬을 리듬 블록으로 놓고 목소리와 작은 타악기로 따라 낸 뒤, 같은 리듬과 높낮이를 몸짓이나 그림 가운데 하나로도 나타낼 수 있다.',
    safety: MOVE_SAFE,
    illustration: {
      prompt: ILL('children with paper tambourines, castanets and triangles copying a rhythm, speech bubbles saying ta ta titi ta'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 110, y: 50 }, { motif: 'hills', y: 208 },
        { motif: 'star', x: 150, y: 110, s: 0.5 }, { motif: 'star', x: 330, y: 110, s: 0.5 }, { motif: 'flower', x: 410, y: 222 },
        { motif: 'text', x: 240, y: 155, text: '듣고, 말하고, 쳐 봐요', size: 23 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"지난 시간까지 귀로 리듬과 높낮이를 찾았어요. 오늘은 찾은 것을 소리로 내 볼 거예요." 교사가 탬버린으로 ‘따 따 따따 따’를 치고 학생들이 ‘따 따 따따 따’로 말하며 따라 한다. 이어서 "목소리나 악기로 잘 못 내면 리듬을 못 찾은 걸까요?" 하고 묻고, 그림이나 몸짓으로 나타내도 찾은 것이라고 짚는다.',
        student: '선생님 탬버린 소리를 듣고 ‘따·따따’ 말로 따라 해 봅시다.',
        demo: { tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 1 }, sequence: [{ rhythm: ['q', 'q', 'e', 'e', 'q'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 리듬 듣고 블록 놓은 뒤 악기로 치기', minutes: 15, tool: 'keyboard',
            teacher: '"리듬 듣기를 누르고 ‘따·따따’로 말하며 들은 뒤 블록을 놓아요. 놓은 다음에는 모둠 악기로 쳐 봐요." 탬버린·캐스터네츠·리듬 막대를 모둠에 하나씩 나누어 준다. 악기를 받자마자 마구 치는 학생에게 "악기는 무릎 위에 두고, 내 차례에만 쳐요"라고 약속을 다시 말한다. 쉼표 자리에서도 박을 세게 한다.',
            task: '리듬 듣기를 누르고 말로 따라 한 뒤 블록을 놓아요. 놓은 리듬을 모둠 악기로 쳐 보고, 마지막에는 내 리듬을 지어 짝과 번갈아 쳐요.',
            levels: rhy(4, 2),
            items: [
              { prompt: '리듬 듣기를 누르고 ‘따·따따’로 따라 말한 뒤 블록으로 놓아 보세요.', toolOptions: { pattern: ['q', 'q', 'e', 'e', 'q', 'q', 'q', 'e', 'e', 'q'] }, target: { rhythm: ['q', 'q', 'e', 'e', 'q', 'q', 'q', 'e', 'e', 'q'] }, difficulty: 0.15 },
              { prompt: '쉬는 박이 있는 리듬이에요. 듣고 블록으로 놓은 뒤 쉼표에서 악기를 멈춰 보세요.', toolOptions: { pattern: ['q', 'qr', 'q', 'qr', 'e', 'e', 'e', 'e', 'h'] }, target: { rhythm: ['q', 'qr', 'q', 'qr', 'e', 'e', 'e', 'e', 'h'] }, difficulty: 0.25,
                predict: { q: '쉼표 자리에서 악기는 어떻게 할까요?', options: ['한 번 쳐요', '멈춰요'], answer: 1 },
                conclude: '쉼표에서는 악기를 멈추지만 박은 마음속으로 계속 세어요.' },
              { prompt: '탬버린으로 칠 내 리듬을 두 마디 지어 놓고, 목소리와 악기로 짝과 번갈아 쳐 본 뒤 점검해요.', target: { beats: true, selfCheck: ['내 리듬을 ‘따·따따’ 말로 먼저 말해 보았어요', '짝과 번갈아 악기로 두 번 쳤어요', '쉼표나 긴 소리를 바르게 나타냈어요'] }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 같은 요소를 다른 방법으로 나타내기', minutes: 12, tool: 'mindmap',
            teacher: '"같은 리듬도 목소리로, 몸짓으로, 그림으로 나타낼 수 있어요. 카드마다 어떤 방법인지 살펴보세요." 카드를 하나씩 실제로 해 보게 한다. 소리를 잘 내지 못해 속상해하는 학생에게 "그림으로 바르게 나타냈다면 리듬을 찾은 거예요"라고 말해 준다.',
            task: '카드를 실제로 해 본 뒤, 같은 요소를 나타낸 방법끼리 잇거나, 요소를 찾았다고 말할 수 있는 모습을 골라요.',
            levels: cardsLv(),
            items: [
              { prompt: '‘따 따 따따 따’ 리듬을 나타낸 방법과 알맞은 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '리듬 나타내기', slots: [{ id: 'v', label: '목소리로' }, { id: 'b', label: '몸짓으로' }, { id: 'd', label: '그림으로' }], cards: ['‘따 따 따따 따’ 하고 말해요', '짧은 소리마다 무릎을 톡 쳐요', '짧은 소리는 점, 빠른 소리는 작은 점 둘로 그려요'] }, target: { match: { v: '‘따 따 따따 따’ 하고 말해요', b: '짧은 소리마다 무릎을 톡 쳐요', d: '짧은 소리는 점, 빠른 소리는 작은 점 둘로 그려요' } }, difficulty: 0.15,
                hints: ['카드마다 입으로 하는지, 몸을 움직이는지, 종이에 그리는지 보고 이어요.', '이은 카드를 실제로 해 보세요. 그 방법이 왼쪽 말과 같은가요?', '말하는 카드는 목소리, 무릎 치는 카드는 몸짓, 점을 그리는 카드는 그림이에요.'] },
              { prompt: '‘도 미 솔’ 높낮이를 나타낸 방법과 알맞은 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '높낮이 나타내기', slots: [{ id: 'v', label: '목소리로' }, { id: 'b', label: '몸짓으로' }, { id: 'd', label: '그림으로' }], cards: ['‘라라라’로 점점 높게 불러요', '무릎 → 어깨 → 머리 위로 손을 올려요', '점 세 개를 계단처럼 위로 찍어요'] }, target: { match: { v: '‘라라라’로 점점 높게 불러요', b: '무릎 → 어깨 → 머리 위로 손을 올려요', d: '점 세 개를 계단처럼 위로 찍어요' } }, difficulty: 0.2,
                hints: ['카드마다 입으로 하는지, 몸을 움직이는지, 종이에 그리는지 보고 이어요.', '이은 카드를 실제로 해 보세요. 그 방법이 왼쪽 말과 같은가요?', '부르는 카드는 목소리, 손을 올리는 카드는 몸짓, 점을 찍는 카드는 그림이에요.'] },
              { prompt: '소리로 잘 내지 못해도 ‘요소를 찾았다’고 말할 수 있는 모습만 골라 보세요.', toolOptions: { mode: 'pick', topic: '요소를 찾았나요?', basket: '찾았다고 말할 수 있어요', cards: ['리듬을 점과 선으로 바르게 그렸어요', '높아지는 곳에서 손을 올렸어요', '아무 때나 손뼉을 쳤어요', '곡 이름만 말했어요'] }, target: { pick: ['리듬을 점과 선으로 바르게 그렸어요', '높아지는 곳에서 손을 올렸어요'] }, reveal: 'after-check', difficulty: 0.25,
                predict: { q: '소리로 못 내면 요소를 못 찾은 걸까요?', options: ['네', '아니요'], answer: 1 },
                conclude: '그림이나 몸짓으로 바르게 나타내도 요소를 찾은 거예요.',
                hints: ['카드마다 그 친구가 들은 리듬이나 높낮이를 정말 알고 있어야 할 수 있는 일인지 따져 보세요.', '고른 카드 가운데 음악을 듣지 않아도 할 수 있는 일이 있는지 보세요.', '바르게 그린 리듬과 높아지는 곳에서 올린 손은 요소를 들어야 할 수 있어요. 아무 때나 친 손뼉과 곡 이름은 아니에요.'] },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 리듬을 몇 가지 방법으로 나타냈나요?" 말·블록·악기·몸짓·그림을 함께 세어 본다. 두 모둠이 지은 리듬을 악기로 들려주고, 듣는 모둠은 그 리듬을 몸짓으로 따라 한다. 출구 2번을 틀린 학생에게는 그림으로 나타낸 리듬을 칭찬해 준다.',
        exitTicket: [
          { type: 'tool', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 2, blocks: ['q', 'e', 'h', 'qr'], pattern: ['e', 'e', 'q', 'h', 'q', 'qr', 'h'] }, prompt: '리듬 듣기를 누르고 들은 리듬을 블록으로 놓아 보세요.', target: { rhythm: ['e', 'e', 'q', 'h', 'q', 'qr', 'h'] }, difficulty: 0.25 },
          { type: 'choice', prompt: '준호는 목소리로 리듬을 잘 못 냈지만, 그림으로는 바르게 그렸어요. 준호는 리듬을 찾은 걸까요?', options: ['아니요, 소리로 못 냈으니까요', '네, 그림으로 바르게 나타냈으니까요', '알 수 없어요'], answer: 1, difficulty: 0.2, explain: '소리, 몸짓, 그림 가운데 어떤 방법으로든 바르게 나타내면 요소를 찾은 거예요.' },
          { type: 'mood', prompt: '악기로 리듬을 쳐 보니 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '리듬을 여러 방법으로',
      items: [
        { type: 'figure', prompt: '이 리듬을 ‘따·따따·따-’ 말로 아래에 쓰세요.', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 1 }, figures: [{ state: { rhythm: ['q', 'e', 'e', 'h'] }, caption: '' }], answer: '따 따따 따-' },
        { type: 'draw', prompt: '같은 리듬(따 따따 따-)을 점과 선으로 그려 보세요.' },
        { type: 'table', prompt: '오늘 쓴 악기와 그 소리를 흉내 낸 말을 쓰세요.', columns: ['악기', '소리 흉내 말'], cells: [['탬버린', ''], ['캐스터네츠', ''], ['리듬 막대', '']] },
        { type: 'short', prompt: '소리로 잘 내지 못한 친구에게 어떤 방법을 알려 주고 싶은지 쓰세요.' },
      ],
      easy: {
        note: '따 = 1박, 따따 = 빠른 소리 둘(1박), 따- = 긴 소리(2박), 쉼표 = 멈춤(1박).',
        items: [
          { type: 'choice', prompt: '쉼표 자리에서는?', options: ['악기를 멈춰요', '세게 쳐요'], answer: '악기를 멈춰요' },
          { type: 'choice', prompt: '리듬을 그림으로 나타내면 리듬을 찾은 걸까요?', options: ['네', '아니요'], answer: '네' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '긴 소리 ‘따-’는 ___박이에요.', answer: '2' },
          { type: 'draw', prompt: '오늘 친 악기를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '리듬 블록 아래에 박 수가 보이고, 맞게 이은 카드에 초록 테두리가 보여요.',
      base: '박 수와 카드를 스스로 확인해요.',
      challenge: '리듬 블록에 8분쉼표·2분쉼표·점2분음표가 더 나오고, 고르기 문항은 맞힌 뒤에야 테두리가 보여요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 악기를 받자마자 마구 친다 → 무릎 위에 두는 약속을 먼저 정한다. ② 쉼표에서 박을 건너뛴다 → 악기를 든 채 마음속으로 "쉬고"를 센다. ③ 소리를 잘 못 내 속상해한다 → 그림·몸짓도 같은 값어치의 표현이라고 말해 준다. 악기가 모자라면 연필 두 자루·책상 두드리기로 대신한다.',
  }));

  // ───────────────────────── 6차시 (연습) ─────────────────────────
  lessons.push(Object.assign(head(6, S1), {
    title: '가락의 높낮이를 손 계단과 그림 악보로 나타내기',
    objective: '가락을 듣고 따라 친 뒤, 음과 음 사이가 올라가는지·내려가는지·그대로인지를 손 계단과 낱말 줄(그림 악보)로 나타낼 수 있다.',
    illustration: {
      prompt: ILL('a child moving a hand up and down paper stairs while colorful note shapes climb and descend beside the steps'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'sun', x: 410, y: 56, s: 0.7 }, { motif: 'cloud', x: 120, y: 54 }, { motif: 'hills', y: 210 },
        { motif: 'leaf', x: 120, y: 190, s: 0.6 }, { motif: 'leaf', x: 180, y: 160, s: 0.6 }, { motif: 'leaf', x: 240, y: 130, s: 0.6 },
        { motif: 'text', x: 300, y: 80, text: '올라 · 내려 · 그대로', size: 22 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"손을 계단이라고 생각해 보세요. 배꼽은 도, 가슴은 미, 어깨는 솔, 머리 위는 높은도예요." 교사가 ‘도 미 솔 미 도’를 부르며 손을 움직여 보인다. "같은 음이 두 번 나오면 손은 어떻게 할까요?" 그대로 둔다는 대답을 기다린다. 손을 마구 흔드는 학생에게는 한 음에 한 번만 멈추게 한다.',
        student: '선생님을 따라 손 계단으로 ‘도 미 솔 미 도’를 나타내 봅시다.',
        demo: { tool: 'keyboard', options: { from: '도', to: '높은도' }, sequence: [{ notes: ['도', '미', '솔'] }, { notes: ['도', '미', '솔', '미', '도'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 가락 듣고 손 계단으로 따라 하기', minutes: 13, tool: 'keyboard',
            teacher: '"가락 듣기를 누르고 먼저 손 계단으로 따라 한 다음 건반으로 쳐요." 짝 활동에서는 한 사람이 건반을 치고, 다른 사람이 눈을 감고 손 계단으로 따라 한다. 손 높이가 맞지 않아도 "올라가는지 내려가는지만 맞으면 잘 들은 거예요"라고 말해 준다.',
            task: '가락 듣기를 누르고 손 계단으로 따라 한 뒤 건반으로 쳐요. 마지막에는 짝이 친 가락을 눈을 감고 손 계단으로 나타내요.',
            levels: mel(),
            items: [
              { prompt: '가락 듣기를 누르고 손 계단으로 따라 한 뒤 건반으로 쳐 보세요.', toolOptions: { melody: ['도', '레', '미', '도', '미'] }, target: { notes: ['도', '레', '미', '도', '미'] }, difficulty: 0.15 },
              { prompt: '높은 음과 낮은 음을 오가는 가락이에요. 손을 크게 움직이며 듣고 쳐 보세요.', toolOptions: { melody: ['솔', '미', '솔', '미', '도'] }, target: { notes: ['솔', '미', '솔', '미', '도'] }, difficulty: 0.2 },
              { prompt: '한 계단씩 내려오는 여섯 음 가락이에요. 듣고 쳐 보세요.', toolOptions: { melody: ['라', '솔', '파', '미', '레', '도'] }, target: { notes: ['라', '솔', '파', '미', '레', '도'] }, reveal: 'after-check', difficulty: 0.25 },
              { prompt: '짝이 건반으로 친 가락을 눈을 감고 듣고 손 계단으로 나타내요. 서로 바꾸어 해요.', free: true, talk: true, difficulty: 0.2 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 음과 음 사이를 낱말 줄로 그리기', minutes: 14, tool: 'pattern',
            teacher: '"음과 음 사이마다 손이 올라갔으면 ‘올라’, 내려갔으면 ‘내려’, 그대로면 ‘그대로’예요. 다섯 음이면 사이는 몇 개일까요?" 네 개라는 대답을 기다린다. 음 수만큼 낱말을 넣으려는 학생에게 손가락 다섯 개를 펴고 손가락 사이를 세어 보게 한다.',
            task: '문항의 가락을 손 계단으로 노래한 뒤, 음과 음 사이마다 올라·내려·그대로를 골라 빈칸을 채워요.',
            levels: ruleLv(),
            items: [
              { prompt: '‘도 미 솔 솔 미’ 가락이에요. 음과 음 사이를 낱말 줄로 나타내도록 빈칸을 채워 보세요.', toolOptions: { seq: ['올라', '올라', null, null], palette: ['올라', '내려', '그대로'] }, target: { fill: ['그대로', '내려'] }, difficulty: 0.15,
                hints: ['가락을 손 계단으로 노래하며 두 음씩 견주어 보세요. 손이 위로 가는지, 아래로 가는지, 멈추는지 보세요.', '빈칸은 셋째 음과 넷째 음 사이, 넷째 음과 다섯째 음 사이예요. 두 음이 같은 음인지 보세요.', '솔에서 솔은 같은 음이라 그대로, 솔에서 미는 아래 계단이라 내려예요.'] },
              { prompt: '‘솔 파 미 미 레 도’ 가락이에요. 빈칸을 채워 낱말 줄을 완성해 보세요.', toolOptions: { seq: ['내려', null, '그대로', null, '내려'], palette: ['올라', '내려', '그대로'] }, target: { fill: ['내려', '내려'] }, difficulty: 0.2,
                hints: ['가락을 손 계단으로 노래하며 두 음씩 견주어 보세요. 첫 빈칸은 둘째 음과 셋째 음 사이예요.', '도레미 계단에서 두 음의 자리를 찾아보세요. 뒤의 음이 아래 계단이면 내려예요.', '파에서 미, 미에서 레는 모두 한 계단 아래라서 둘 다 내려예요.'] },
              { prompt: '‘도 솔 미 미 높은도’ 가락이에요. 빈칸 세 곳을 채워 보세요.', toolOptions: { seq: [null, null, '그대로', null], palette: ['올라', '내려', '그대로'] }, target: { fill: ['올라', '내려', '올라'] }, difficulty: 0.3,
                predict: { q: '이 가락에서 손은 몇 번 올라갈까요?', options: ['한 번', '두 번', '세 번'], answer: 1 },
                conclude: '뛰어 오르는 곳도 한 계단씩 오르는 곳도 모두 ‘올라’예요. 낱말 줄은 방향을 보여 줘요.',
                hints: ['가락을 손 계단으로 노래하며 두 음씩 견주어 보세요. 음이 다섯이면 사이는 넷이에요.', '첫 빈칸은 도와 솔 사이, 둘째 빈칸은 솔과 미 사이예요. 계단에서 위인지 아래인지 보세요.', '도→솔은 올라, 솔→미는 내려, 미→미는 그대로, 미→높은도는 올라예요.'] },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"손 계단과 낱말 줄은 무엇이 같았나요?" 둘 다 가락이 움직이는 방향을 보여 준다는 대답을 기다린다. 짝과 서로 낱말 줄을 하나씩 보여 주고 상대가 손 계단으로 노래해 보게 한다. 출구 1번에서 빈칸 수를 음 수로 착각한 학생과는 손가락 사이를 다시 센다.',
        exitTicket: [
          { type: 'tool', tool: 'pattern', options: { seq: [null, '내려', '내려', null], palette: ['올라', '내려', '그대로'] }, prompt: '‘미 솔 미 레 레’ 가락이에요. 빈칸을 채워 낱말 줄을 완성해 보세요.', target: { fill: ['올라', '그대로'] }, difficulty: 0.25 },
          { type: 'choice', prompt: '‘도 레 미 파 솔’ 가락을 손 계단으로 나타내면 손은 어떻게 움직일까요?', options: ['한 계단씩 올라가요', '크게 뛰어 내려가요', '한자리에 그대로 있어요'], answer: 0, difficulty: 0.15, explain: '도부터 솔까지 바로 위 음으로 한 계단씩 올라가요.' },
          { type: 'mood', prompt: '손 계단으로 가락을 나타내 보니 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '손 계단과 낱말 줄',
      items: [
        { type: 'table', prompt: '가락의 음과 음 사이를 올라·내려·그대로로 쓰세요.', columns: ['가락', '1–2', '2–3', '3–4', '4–5'], cells: [['도 레 레 미 도', '', '', '', ''], ['솔 솔 미 도 미', '', '', '', '']] },
        { type: 'figure', prompt: '건반 아래 빈칸에 계이름을 쓰고, ‘솔 미 도’를 차례로 짚어 화살표로 이으세요.', tool: 'keyboard', options: { from: '도', to: '높은도' }, figures: [{ caption: '' }], answer: '도 레 미 파 솔 라 시 높은도 / 솔→미→도 왼쪽으로 화살표' },
        { type: 'draw', prompt: '‘도 미 솔 솔 미 도’를 손 계단 그림(점과 선)으로 그려 보세요.' },
        { type: 'short', prompt: '짝이 친 가락을 손 계단으로 따라 할 때 어려웠던 점을 쓰세요.' },
      ],
      easy: {
        note: '손이 위로 = 올라, 아래로 = 내려, 멈춤 = 그대로. 음이 다섯 개면 사이는 네 개예요.',
        items: [
          { type: 'choice', prompt: '도에서 미로 가면?', options: ['올라', '내려'], answer: '올라' },
          { type: 'choice', prompt: '솔에서 솔로 가면?', options: ['그대로', '올라'], answer: '그대로' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '‘솔 미 도’는 ___, ___ 이에요.', answer: '내려, 내려' },
          { type: 'draw', prompt: '‘도 레 미’를 계단 모양으로 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '가락을 듣는 동안 건반이 빛나고, 낱말 줄이 짧게 끊어져 보여요.',
      base: '계이름을 켜고 끌 수 있고, 낱말 줄을 한 줄로 봐요.',
      challenge: '계이름 없는 건반에서 귀로만 따라 치고, 틀린 빈칸을 확인 전에 알려 주지 않아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 음 수만큼 낱말을 넣으려 한다 → 손가락 사이를 센다. ② 뛰어 오르는 곳을 ‘올라’가 아니라고 여긴다 → 크게든 작게든 위로 가면 올라라고 정리한다. ③ 손 계단이 점점 위로만 간다 → 기준 자리(배꼽 = 도)를 다시 짚는다. 짝 활동에서 눈을 감고 따라 하면 귀로만 듣는 연습이 된다.',
  }));

  // ───────────────────────── 7차시 (확장) ─────────────────────────
  lessons.push(Object.assign(head(7, S1), {
    title: '한 요소를 몸짓과 그림 중 골라 나타내 보이기',
    objective: '빠르기·셈여림·높낮이 가운데 한 요소를 골라 몸짓이나 그림 가운데 하나로 나타내고, 짝이 지은 가락을 그 방법으로 표현할 수 있다.',
    safety: MOVE_SAFE,
    illustration: {
      prompt: ILL('one child drawing growing circles on paper while another child tiptoes and stretches arms high, both listening to music notes'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'cloud', x: 110, y: 52 }, { motif: 'sun', x: 404, y: 58, s: 0.8 }, { motif: 'hills', y: 208 },
        { motif: 'flower', x: 80, y: 224 }, { motif: 'tree', x: 420, y: 216 }, { motif: 'star', x: 240, y: 90, s: 0.6 },
        { motif: 'text', x: 240, y: 150, text: '몸짓으로? 그림으로?', size: 23 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"‘점점 세게’를 몸으로 나타내 볼까요? 이번에는 종이에 그림으로 나타내 볼까요?" 몇 명이 몸짓과 그림을 칠판 앞에서 보여 준다. "둘 다 같은 것을 나타냈나요?" 방법은 달라도 같은 요소를 나타냈다는 것을 짚고, 오늘은 내가 잘 나타낼 수 있는 방법을 스스로 골라 보자고 한다.',
        student: '‘점점 세게’를 몸짓으로 한 번, 손가락으로 허공에 그림으로 한 번 나타내 봅시다.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '점점 세게', slots: [{ id: 'm', label: '몸짓' }, { id: 'g', label: '그림' }], cards: ['몸을 점점 크게 펴요', '점점 굵어지는 선'], shuffle: false }, sequence: [{ match: { m: '몸을 점점 크게 펴요', g: '점점 굵어지는 선' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 요소에 어울리는 몸짓·그림 잇기', minutes: 13, tool: 'mindmap',
            teacher: '"이 몸짓이나 그림은 음악의 무엇을 닮았나요?" 카드마다 몸으로 하거나 허공에 그려 보고 잇게 한다. ‘띄엄띄엄 놓인 큰 점’을 세기로 여기는 학생에게 "점과 점 사이가 멀면 소리가 자주 날까요, 드물게 날까요?" 하고 묻는다.',
            task: '카드를 몸으로 해 보거나 허공에 그려 본 뒤, 음악 요소에 어울리는 몸짓·그림을 잇거나 골라요.',
            levels: cardsLv(),
            items: [
              { prompt: '음악 요소와 어울리는 몸짓을 이어 보세요.', toolOptions: { mode: 'match', topic: '몸짓으로', slots: [{ id: 'f', label: '빠르게' }, { id: 'p', label: '여리게' }, { id: 'd', label: '가락이 내려가요' }], cards: ['발끝으로 종종걸음', '손을 작게 오므려 흔들어요', '팔을 천천히 아래로 내려요'] }, target: { match: { f: '발끝으로 종종걸음', p: '손을 작게 오므려 흔들어요', d: '팔을 천천히 아래로 내려요' } }, difficulty: 0.15,
                hints: ['카드의 몸짓을 직접 해 보고, 그 몸짓이 빠르기·크기·높이 가운데 무엇을 닮았는지 생각해요.', '이은 카드 가운데 몸짓이 닮은 것과 왼쪽 말이 다른 것이 있어요. 몸이 움직이는 방향과 크기와 빠르기를 따로 보세요.', '종종걸음은 빠르기, 작게 오므린 손은 여린 소리, 아래로 내리는 팔은 내려가는 가락이에요.'],
                levels: { challenge: { toolOptions: { cards: ['발끝으로 종종걸음', '손을 작게 오므려 흔들어요', '팔을 천천히 아래로 내려요', '두 팔을 머리 위로 쭉 뻗어요'] } } } },
              { prompt: '음악 요소와 어울리는 그림을 이어 보세요.', toolOptions: { mode: 'match', topic: '그림으로', slots: [{ id: 'c', label: '점점 세게' }, { id: 's', label: '느리게' }, { id: 'h', label: '높은 소리' }], cards: ['점점 굵어지는 선', '띄엄띄엄 놓인 점', '종이 위쪽에 찍은 점'] }, target: { match: { c: '점점 굵어지는 선', s: '띄엄띄엄 놓인 점', h: '종이 위쪽에 찍은 점' } }, difficulty: 0.2,
                hints: ['그림에서 굵기·사이·위아래 자리 가운데 무엇이 달라지는지 보고, 음악의 무엇과 닮았는지 생각해요.', '이은 그림 가운데 굵기와 사이와 자리를 섞은 것이 있어요. 굵기는 소리 크기, 위아래는 높이를 닮았어요.', '굵어지는 선은 점점 세게, 사이가 먼 점은 느리게, 위쪽 점은 높은 소리예요.'] },
              { prompt: '‘점점 빠르게’를 나타낸 것만 골라 보세요.', toolOptions: { mode: 'pick', topic: '점점 빠르게', basket: '점점 빠르게', cards: ['발자국 사이가 점점 좁아지는 그림', '처음엔 천천히, 갈수록 빨리 치는 손뼉', '점점 커지는 동그라미', '팔을 점점 높이 올리기'] }, target: { pick: ['발자국 사이가 점점 좁아지는 그림', '처음엔 천천히, 갈수록 빨리 치는 손뼉'] }, reveal: 'after-check', difficulty: 0.3,
                predict: { q: '‘점점 커지는 동그라미’는 무엇을 닮았을까요?', options: ['빠르기', '셈여림', '높낮이'], answer: 1 },
                conclude: '빠르기는 사이가 좁아지거나 동작이 잦아지는 것, 셈여림은 크기, 높낮이는 위아래로 나타내요.',
                hints: ['카드마다 무엇이 ‘점점’ 바뀌는지 보세요. 잦아지는 것인지, 커지는 것인지, 높아지는 것인지 따져요.', '고른 카드 가운데 크기나 높이가 바뀌는 것이 섞여 있는지 보세요.', '좁아지는 발자국과 점점 빨리 치는 손뼉만 빠르기예요. 커지는 동그라미는 셈여림, 높이 올리는 팔은 높낮이예요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 가락을 짓고 짝은 내가 고른 방법으로 나타내기', minutes: 14, tool: 'keyboard',
            teacher: '"가락을 지은 사람은 짝에게 쳐 주고, 짝은 몸짓이나 그림 가운데 하나를 골라 나타내요." 활동 전에 서로 팔 간격만큼 떨어져 서게 한다. 짝이 몸짓을 고르지 않고 그림을 골라도 괜찮다는 것, 어느 방법이든 가락의 높낮이가 보이면 된다는 것을 말해 준다.',
            task: '가락을 듣고 따라 치거나 규칙에 맞게 지어요. 지은 가락을 짝에게 쳐 주면 짝은 몸짓이나 그림 가운데 하나로 나타내요.',
            levels: mel(),
            items: [
              { prompt: '가락 듣기를 누르고 따라 쳐 보세요. 친 뒤 이 가락을 몸짓이나 그림 가운데 하나로 나타내요.', toolOptions: { melody: ['도', '레', '미', '솔', '높은도'] }, target: { notes: ['도', '레', '미', '솔', '높은도'] }, difficulty: 0.15 },
              { prompt: '도로 시작해 도로 끝나는 다섯 음 가락을 지어요. 가운데에 가장 높은 음을 넣어요.', target: { compose: { length: 5, startOn: '도', endOn: '도' }, selfCheck: ['셋째 음을 가장 높은 음으로 지었어요', '지은 가락을 두 번 쳐 보았어요'] }, difficulty: 0.25 },
              { prompt: '지은 가락을 짝에게 쳐 주고, 짝이 나타낸 몸짓이나 그림을 본 뒤 점검해요.', target: { selfCheck: ['짝에게 내 가락을 쳐 주었어요', '짝이 몸짓이나 그림 가운데 하나를 골라 나타냈어요', '짝의 표현에서 가장 높은 음 자리를 찾았어요'] }, difficulty: 0.15 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 나는 몸짓과 그림 가운데 무엇을 골랐나요? 왜 그 방법을 골랐나요?" 몇 명의 까닭을 듣는다. 출구 2번에서 ‘굵어지는 선’을 빠르기로 고른 학생에게는 선을 따라 손뼉을 점점 세게 쳐 보게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '나타내기', slots: [{ id: 'a', label: '느리게' }, { id: 'b', label: '가락이 올라가요' }], cards: ['아주 천천히 한 걸음씩 걸어요', '손을 무릎에서 머리 위로 올려요'] }, prompt: '음악 요소와 어울리는 몸짓을 이어 보세요.', target: { match: { a: '아주 천천히 한 걸음씩 걸어요', b: '손을 무릎에서 머리 위로 올려요' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '점점 굵어지는 선 그림은 음악의 무엇을 나타낸 것일까요?', options: ['점점 빠르게', '점점 세게', '점점 높게'], answer: 1, difficulty: 0.25, explain: '선이 굵어지는 것은 소리가 커지는 모습을 닮아 셈여림을 나타내요.' },
          { type: 'mood', prompt: '내가 고른 방법으로 나타내 보니 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '몸짓과 그림으로 나타내기',
      items: [
        { type: 'table', prompt: '요소마다 어울리는 몸짓과 그림을 쓰세요.', columns: ['요소', '몸짓', '그림'], cells: [['빠르게', '', ''], ['여리게', '', ''], ['가락이 올라가요', '', '']] },
        { type: 'choice', prompt: '‘느리게’를 그림으로 나타낸 것에 ○ 하세요.', options: ['다닥다닥 붙은 점', '띄엄띄엄 놓인 점', '점점 굵어지는 선'], answer: '띄엄띄엄 놓인 점' },
        { type: 'draw', prompt: '내가 지은 다섯 음 가락을 그림으로 나타내 보세요.' },
        { type: 'short', prompt: '몸짓과 그림 가운데 나에게 더 쉬운 방법은 무엇이고 왜 그런지 쓰세요.' },
      ],
      easy: {
        note: '빠르기 = 걸음 빠르기·점 사이, 셈여림 = 크기·굵기, 높낮이 = 위아래.',
        items: [
          { type: 'choice', prompt: '‘여리게’에 어울리는 몸짓은?', options: ['손을 작게 흔들어요', '쿵쿵 발을 굴러요'], answer: '손을 작게 흔들어요' },
          { type: 'choice', prompt: '높은 소리는 종이의 어디에 그릴까요?', options: ['위쪽', '아래쪽'], answer: '위쪽' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '‘빠르게’는 발끝으로 ___걸음을 해요.', answer: '종종' },
          { type: 'draw', prompt: '‘점점 세게’를 그림으로 나타내 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞게 이은 카드에 초록 테두리가 보이고, 가락을 듣는 동안 건반이 빛나요.',
      base: '카드를 스스로 확인하고, 계이름을 켜고 끌 수 있어요.',
      challenge: '몸짓 잇기에 함정 카드가 하나 더 있고, 고르기 문항은 맞힌 뒤에야 테두리가 보여요. 건반은 계이름 없이 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 크기와 빠르기를 섞어 나타낸다 → ‘점점 세게’를 같은 빠르기로 손뼉 쳐 보게 한다. ② 그림이 예쁜지에만 신경 쓴다 → 그림에서 요소가 보이는지를 기준으로 삼는다. ③ 몸짓이 커져 부딪힌다 → 팔 간격을 먼저 잰다. 표현 방법을 고를 때는 학생이 스스로 고르게 하고, 고른 까닭을 한 문장으로 말하게 한다.',
  }));

  // ───────────────────────── 8차시 (핵심) ─────────────────────────
  lessons.push(Object.assign(head(8, S1), {
    title: '친구가 나타낸 리듬과 내 방법 견주어 보기',
    objective: '친구가 그림·몸짓·목소리로 나타낸 리듬을 리듬 블록으로 옮겨 내 방법과 견주고, 같은 점과 다른 점을 나누어 말할 수 있다.',
    illustration: {
      prompt: ILL('two children side by side, one holding a paper drawing of dots and lines and the other clapping, with a bridge of rhythm blocks between them'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'cloud', x: 120, y: 54 }, { motif: 'sun', x: 404, y: 58, s: 0.7 }, { motif: 'hills', y: 210 },
        { motif: 'house', x: 90, y: 214 }, { motif: 'house', x: 390, y: 214 }, { motif: 'bird', x: 240, y: 92 },
        { motif: 'text', x: 240, y: 150, text: '너는 그림, 나는 손뼉', size: 23 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"지난 시간에 같은 가락을 몸짓으로, 그림으로 나타냈지요. 친구가 나와 다르게 나타냈을 때 어떤 생각이 들었나요?" ‘틀렸다고 생각했다’는 대답이 나오면 칠판에 적어 둔다. "다르게 나타낸 것과 틀리게 나타낸 것은 같을까요? 오늘은 친구 방법을 내 방법으로 옮겨 보며 알아봐요."',
        student: '친구가 나와 다르게 나타냈을 때 어떤 생각이 들었는지 떠올려 봅시다.',
        demo: { tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 1 }, sequence: [{ rhythm: ['q', 'e', 'e', 'h'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 친구의 표현을 리듬 블록으로 옮기기', minutes: 14, tool: 'keyboard',
            teacher: '"민지는 그림으로, 준호는 몸짓으로, 서아는 목소리로 리듬을 나타냈어요. 이것을 블록으로 옮기면 무엇이 보일까요?" 표현 방법의 약속(●=따, ●●=따따, ━=따-)을 칠판에 적어 둔다. 옮긴 뒤에는 리듬 듣기로 들어 보고 친구 표현과 같은지 확인하게 한다. 그림이 서툴러 보인다고 웃는 학생에게 "리듬이 맞게 옮겨지나요?"를 묻는다.',
            task: '친구가 나타낸 리듬을 약속에 따라 읽고 블록으로 옮겨요. 옮긴 뒤 리듬 듣기로 들어 보며 맞는지 확인해요.',
            levels: rhy(4, 2),
            items: [
              { prompt: '민지는 ‘● ●● ━ / ● ● ● ●’로 그렸어요(●=따, ●●=따따, ━=따-). 블록으로 옮겨 보세요.', toolOptions: { pattern: ['q', 'e', 'e', 'h', 'q', 'q', 'q', 'q'] }, target: { rhythm: ['q', 'e', 'e', 'h', 'q', 'q', 'q', 'q'] }, difficulty: 0.15 },
              { prompt: '준호는 ‘무릎, 손뼉손뼉, 무릎, 무릎 / 팔 길게 뻗기, 무릎, 무릎’으로 나타냈어요(무릎=따). 블록으로 옮겨 보세요.', toolOptions: { pattern: ['q', 'e', 'e', 'q', 'q', 'h', 'q', 'q'] }, target: { rhythm: ['q', 'e', 'e', 'q', 'q', 'h', 'q', 'q'] }, difficulty: 0.25,
                hints: ['몸짓마다 짧은 소리인지, 빠른 소리 둘인지, 긴 소리인지 먼저 정하고 차례대로 블록을 놓아요. 손뼉손뼉은 빠른 소리 둘이에요.', '마디마다 박 수를 세어 보세요. 팔을 길게 뻗은 것은 소리를 길게 끈 것이에요.', '첫 마디는 따·따따·따·따, 둘째 마디는 따-·따·따예요.'] },
              { prompt: '서아는 ‘따- 따 따 / 따따 따따 따-’ 하고 말했어요. 블록으로 옮겨 보세요.', toolOptions: { pattern: ['h', 'q', 'q', 'e', 'e', 'e', 'e', 'h'] }, target: { rhythm: ['h', 'q', 'q', 'e', 'e', 'e', 'e', 'h'] }, reveal: 'after-check', difficulty: 0.3,
                conclude: '그림·몸짓·목소리로 다르게 나타내도 블록으로 옮기면 같은 리듬인지 견줄 수 있어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 같은 점과 다른 점 나누어 말하기', minutes: 13, tool: 'emotion',
            teacher: '"민지 그림과 준호 몸짓은 같은 리듬이었어요. 무엇이 같고 무엇이 다른가요?" 다른 점을 말할 때는 ‘좋다·나쁘다’가 아니라 ‘무엇으로·어떻게’를 말하게 한다. ‘민지 그림은 예쁘지 않다’처럼 평가하는 말을 고르는 학생에게 "그 말은 다른 점을 말한 걸까요, 마음에 드는지를 말한 걸까요?"라고 묻는다.',
            task: '두 친구의 표현을 견준 카드를 같은 점·다른 점으로 나누거나, 다른 점을 바르게 말한 카드를 골라요.',
            levels: cardsLv(),
            items: [
              { prompt: '민지(그림)와 준호(몸짓)의 표현을 견준 카드를 같은 점과 다른 점으로 나누어 보세요.', toolOptions: { mode: 'sort', topic: '민지와 준호', slots: ['같은 점', '다른 점'], cards: ['둘 다 같은 리듬을 나타냈어요', '둘 다 긴 소리를 길게 나타냈어요', '민지는 종이에, 준호는 몸으로 나타냈어요', '준호 표현은 소리가 나고 민지 그림은 소리가 없어요'] }, target: { sort: { '같은 점': ['둘 다 같은 리듬을 나타냈어요', '둘 다 긴 소리를 길게 나타냈어요'], '다른 점': ['민지는 종이에, 준호는 몸으로 나타냈어요', '준호 표현은 소리가 나고 민지 그림은 소리가 없어요'] } }, difficulty: 0.2,
                hints: ['카드에 ‘둘 다’가 있으면 두 친구에게 똑같은 것, ‘○○는 …, ○○는 …’이면 두 친구가 다른 것이에요.', '넣은 카드를 다시 읽어 보세요. 두 친구를 하나로 묶어 말한 카드인지, 나누어 말한 카드인지 보세요.', '‘둘 다’로 시작하는 두 카드는 같은 점, 종이와 몸·소리 있음과 없음을 말한 두 카드는 다른 점이에요.'] },
              { prompt: '친구가 나와 다르게 나타냈어요. 어떻게 하면 좋을까요?', toolOptions: { mode: 'branch', situation: '나는 리듬을 손뼉으로 쳤는데, 짝은 같은 리듬을 점과 선으로 그렸어요.', choices: [{ id: 'wrong', text: '손뼉이 아니니 틀렸다고 말해요', result: '짝이 속상해하고, 같은 리듬이라는 것을 놓쳐요.', mood: '속상함', why: '방법이 다른 것과 리듬이 틀린 것은 달라요.' }, { id: 'ask', text: '그림을 읽어 달라고 하고 내 손뼉과 견주어요', result: '같은 리듬을 다르게 나타냈다는 것을 함께 알아요.', mood: '뿌듯함' }, { id: 'copy', text: '짝의 그림을 그대로 따라 그려요', result: '내 방법은 사라지고 견줄 것이 없어요.', mood: '걱정', why: '견주려면 두 방법이 모두 있어야 해요.' }] }, target: { choice: 'ask' }, difficulty: 0.15 },
              { prompt: '다른 점을 바르게 말한 카드만 골라 보세요.', toolOptions: { mode: 'pick', topic: '다른 점 말하기', basket: '바르게 말했어요', cards: ['민지는 점으로, 나는 선으로 그렸어요', '민지 그림은 예쁘지 않아요', '나는 손뼉으로, 준호는 발 구르기로 나타냈어요', '내 것이 더 좋아요'] }, target: { pick: ['민지는 점으로, 나는 선으로 그렸어요', '나는 손뼉으로, 준호는 발 구르기로 나타냈어요'] }, reveal: 'after-check', difficulty: 0.25,
                predict: { q: '‘내 것이 더 좋아요’는 다른 점을 말한 걸까요?', options: ['네', '아니요'], answer: 1 },
                conclude: '다른 점은 ‘무엇으로·어떻게’ 나타냈는지를 말하는 거예요. 좋고 나쁨을 말하는 것과 달라요.',
                hints: ['카드가 ‘무엇으로·어떻게’ 나타냈는지를 말하는지, ‘좋다·예쁘다’ 같은 마음을 말하는지 가려요.', '고른 카드 가운데 마음에 드는지를 말한 카드가 있는지 보세요.', '점과 선, 손뼉과 발 구르기처럼 방법을 말한 두 카드만 다른 점이에요.'] },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝과 내가 나타낸 방법에서 다른 점 하나를 ‘나는 ○○로, 짝은 ○○로’ 꼴로 말해 보세요." 몇 짝이 발표한다. 출구 2번에서 ‘틀렸다’를 고른 학생과는 그 친구의 표현을 블록으로 함께 옮겨 본다.',
        exitTicket: [
          { type: 'tool', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 2, blocks: ['q', 'e', 'h', 'qr'], pattern: ['e', 'e', 'q', 'q', 'q', 'h', 'h'] }, prompt: '지우는 ‘●● ● ● ● / ━ ━’로 그렸어요(●=따, ●●=따따, ━=따-). 블록으로 옮겨 보세요.', target: { rhythm: ['e', 'e', 'q', 'q', 'q', 'h', 'h'] }, difficulty: 0.25 },
          { type: 'choice', prompt: '나는 리듬을 목소리로, 친구는 같은 리듬을 몸짓으로 나타냈어요. 맞는 말은?', options: ['친구가 틀렸어요', '방법은 다르지만 같은 리듬이에요', '내가 틀렸어요'], answer: 1, difficulty: 0.15, explain: '나타내는 방법이 달라도 리듬이 같으면 둘 다 바르게 나타낸 거예요.' },
          { type: 'mood', prompt: '친구의 방법과 내 방법을 견주어 보니 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '친구와 견주어 보기',
      items: [
        { type: 'table', prompt: '짝과 내가 리듬을 나타낸 방법을 쓰고 견주어 보세요.', columns: ['', '나', '짝'], cells: [['나타낸 방법', '', ''], ['긴 소리는 어떻게', '', ''], ['쉼표는 어떻게', '', '']] },
        { type: 'figure', prompt: '이 리듬을 점(●)과 선(━)으로 그려 아래에 쓰세요.', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 1 }, figures: [{ state: { rhythm: ['h', 'q', 'q'] }, caption: '' }], answer: '━ ● ●' },
        { type: 'choice', prompt: '다른 점을 바르게 말한 것에 ○ 하세요.', options: ['짝 그림이 더 예뻐요', '나는 손뼉으로, 짝은 그림으로 나타냈어요', '내가 더 잘했어요'], answer: '나는 손뼉으로, 짝은 그림으로 나타냈어요' },
        { type: 'short', prompt: '짝의 방법에서 따라 해 보고 싶은 점을 쓰세요.' },
      ],
      easy: {
        note: '● = 따(1박), ●● = 따따(1박), ━ = 따-(2박). 다른 점은 ‘무엇으로·어떻게’를 말해요.',
        items: [
          { type: 'choice', prompt: '● ●● ━ 를 말로 하면?', options: ['따 따따 따-', '따- 따 따'], answer: '따 따따 따-' },
          { type: 'choice', prompt: '친구가 나와 다르게 나타냈어요. 어떻게 할까요?', options: ['어떻게 했는지 물어봐요', '틀렸다고 말해요'], answer: '어떻게 했는지 물어봐요' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '나는 ___으로, 짝은 ___으로 나타냈어요.', answer: '(예) 손뼉, 그림' },
          { type: 'draw', prompt: '짝이 나타낸 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '리듬 블록 아래에 마디마다 박 수가 보이고, 맞게 넣은 카드에 초록 테두리가 보여요.',
      base: '박 수와 카드를 스스로 확인해요.',
      challenge: '리듬 블록에 8분쉼표·2분쉼표가 더 나오고, 고르기 문항은 맞힌 뒤에야 테두리가 보여요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 방법이 다르면 틀렸다고 여긴다 → 블록으로 옮겨 같은 리듬임을 보여 준다. ② 다른 점을 말하라고 하면 ‘더 잘했다’처럼 평가한다 → ‘나는 ○○로, 짝은 ○○로’ 틀을 준다. ③ 표현 약속(●·●●·━)을 헷갈린다 → 칠판에 늘 붙여 둔다. 활동 1의 친구 표현은 실제 학급 학생 작품으로 바꾸어 써도 좋다(이름은 가리고).',
  }));

  // ───────────────────────── 9차시 (연습) ─────────────────────────
  lessons.push(Object.assign(head(9, S1), {
    title: '다시 들으며 처음에 놓친 요소 찾아 보태기',
    objective: '같은 가락과 곡을 두 번 이상 들으며 처음에 놓친 요소를 하나 찾아 기록에 보태고, 다시 듣는 차례를 말할 수 있다.',
    illustration: {
      prompt: ILL('a child listening with a paper ear trumpet in a forest while a cuckoo bird sings, a notebook with new notes being added'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'tree', x: 80, y: 214 }, { motif: 'tree', x: 400, y: 216 }, { motif: 'bird', x: 300, y: 90 },
        { motif: 'cloud', x: 160, y: 50 }, { motif: 'hills', y: 214 }, { motif: 'leaf', x: 220, y: 180, s: 0.6 },
        { motif: 'text', x: 240, y: 150, text: '한 번 더 들으면 또 들려요', size: 22 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"생상스의 「동물의 사육제」 가운데 ‘숲속의 뻐꾸기’를 들어 볼게요. 들리는 것을 하나만 적어 보세요." 처음 듣고 적은 것을 몇 명 말하게 한다. "한 번 들었으니 이제 다 찾았을까요?" 하고 물은 뒤, 다른 요소 하나를 정해 다시 들으면 새것이 들린다는 것을 오늘 해 보자고 한다.',
        student: '곡을 듣고 들리는 것을 하나만 적어 봅시다. 한 번 들으면 다 찾을 수 있을까요?',
        demo: { tool: 'keyboard', options: { from: '도', to: '높은도' }, sequence: [{ notes: ['솔', '미'] }, { notes: ['솔', '미', '솔', '미'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 두 번 들으며 가락 끝까지 따라 치기', minutes: 13, tool: 'keyboard',
            teacher: '"첫 번째 들을 때는 높낮이만, 두 번째 들을 때는 끝이 어떻게 되는지에 귀 기울여요." 같은 가락을 두 번 듣게 하고, 두 번째에 새로 들린 것을 짝에게 말하게 한다. 첫 번째 친 것이 맞았다고 둘째 문항을 듣지 않고 치는 학생에게 "끝까지 들어 보았나요?"를 묻는다.',
            task: '가락 듣기를 누르고 따라 쳐요. 같은 가락을 다시 들을 때는 처음에 살피지 않은 곳에 귀 기울여요.',
            levels: mel(),
            items: [
              { prompt: '첫 번째 듣기예요. 뻐꾸기처럼 두 음이 되풀이되는 가락을 듣고 따라 쳐 보세요.', toolOptions: { melody: ['솔', '미', '솔', '미'] }, target: { notes: ['솔', '미', '솔', '미'] }, difficulty: 0.1 },
              { prompt: '두 번째 듣기예요. 같은 가락 뒤에 무엇이 더 붙었는지 끝까지 듣고 쳐 보세요.', toolOptions: { melody: ['솔', '미', '솔', '미', '파', '레', '도'] }, target: { notes: ['솔', '미', '솔', '미', '파', '레', '도'] }, difficulty: 0.25,
                predict: { q: '두 번째로 들을 때 새로 들리는 것이 있을까요?', options: ['없어요', '있어요'], answer: 1 },
                conclude: '처음 들을 때 놓친 끝부분이 다시 들으니 들렸어요. 다시 들으면 새것을 찾을 수 있어요.' },
              { prompt: '처음과 끝이 같은 음인 긴 가락이에요. 시작 음과 끝 음에 귀 기울여 듣고 쳐 보세요.', toolOptions: { melody: ['미', '솔', '라', '솔', '미', '레', '미'] }, target: { notes: ['미', '솔', '라', '솔', '미', '레', '미'] }, reveal: 'after-check', difficulty: 0.3 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 다시 듣고 기록에 보탤 것 찾기', minutes: 14, tool: 'emotion',
            teacher: '"‘숲속의 뻐꾸기’를 한 번 더 들려줄게요. 이번에는 처음에 적지 않은 요소 하나만 정해 들어요." 곡을 다시 들려준 뒤 고르게 한다. ‘노랫말로 뻐꾸기라고 말해요’를 고르는 학생에게 "이 곡에 사람 목소리가 나왔나요? 다시 들어 볼까요?" 하고 곡의 그 부분을 한 번 더 들려준다.',
            task: '곡을 다시 듣고 실제로 들리는 것만 고르거나, 다시 듣는 차례를 놓아요.',
            levels: cardsLv(),
            items: [
              { prompt: '‘숲속의 뻐꾸기’를 다시 들으면 보탤 수 있는 것, 곧 실제로 들리는 것만 골라 보세요.', toolOptions: { mode: 'pick', topic: '숲속의 뻐꾸기', basket: '기록에 보태요', cards: ['두 음이 뻐꾹뻐꾹 되풀이돼요', '피아노가 조용히 화음을 쳐요', '노랫말로 뻐꾸기라고 말해요', '큰북을 세게 쳐요'] }, target: { pick: ['두 음이 뻐꾹뻐꾹 되풀이돼요', '피아노가 조용히 화음을 쳐요'] }, difficulty: 0.2,
                hints: ['곡을 다시 들으며 카드에 적힌 소리가 정말 들리는지 하나씩 확인해요. 들리지 않는 소리는 고르지 않아요.', '고른 카드 가운데 이 곡에 없는 소리가 있어요. 사람 목소리와 북소리가 들렸는지 떠올려 보세요.', '이 곡은 클라리넷이 두 음을 되풀이하고 피아노가 조용히 화음을 쳐요. 노랫말과 큰북은 없어요.'] },
              { prompt: '한 번 듣고 다 찾았다는 친구가 있어요. 어떻게 하면 좋을까요?', toolOptions: { mode: 'branch', situation: '준호가 곡을 한 번 듣고 “느려요” 하나만 적은 뒤, 다 찾았다며 다시 듣지 않으려고 해요.', choices: [{ id: 'stop', text: '다 찾았으니 그만 들어요', result: '두 음이 되풀이되는 것도, 피아노 소리도 놓쳐요.', mood: '걱정', why: '한 번에 모든 요소가 들리지는 않아요.' }, { id: 'again', text: '다른 요소 하나를 정해 다시 들어요', result: '두 음이 되풀이되는 것을 새로 찾아 기록에 보태요.', mood: '뿌듯함' }] }, target: { choice: 'again' }, difficulty: 0.15 },
              { prompt: '곡을 다시 들으며 놓친 요소를 찾는 차례대로 카드를 놓아 보세요.', toolOptions: { mode: 'order', topic: '다시 듣기', cards: ['그 요소에만 귀 기울여 다시 들어요', '처음 들으며 찾은 것을 적어요', '찾은 것을 기록에 보태요', '아직 살피지 않은 요소를 하나 정해요'] }, target: { order: ['처음 들으며 찾은 것을 적어요', '아직 살피지 않은 요소를 하나 정해요', '그 요소에만 귀 기울여 다시 들어요', '찾은 것을 기록에 보태요'] }, reveal: 'after-check', difficulty: 0.25,
                hints: ['처음 듣고 한 일이 먼저, 새로 들은 것을 적는 일이 마지막이에요. 그 사이에 무엇을 해야 다시 들을 수 있을지 생각해요.', '다시 듣기 전에 무엇에 귀 기울일지 정했는지 보세요.', '처음 적기 → 살필 요소 정하기 → 그것만 들으며 다시 듣기 → 기록에 보태기 차례예요.'] },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"다시 들었을 때 새로 찾은 것을 하나씩 말해 볼까요?" 칠판의 첫 기록 옆에 다른 색 분필로 보탠다. 출구 2번에서 ‘한 번 들으면 다 들린다’를 고른 학생에게는 오늘 칠판 기록이 늘어난 모습을 보여 준다.',
        exitTicket: [
          { type: 'tool', tool: 'keyboard', options: { from: '도', to: '높은도', melody: ['라', '솔', '라', '솔', '미', '도'] }, prompt: '가락 듣기를 누르고 끝까지 들은 뒤 따라 쳐 보세요.', target: { notes: ['라', '솔', '라', '솔', '미', '도'] }, difficulty: 0.25 },
          { type: 'choice', prompt: '곡을 한 번 듣고 요소 하나를 찾았어요. 다음에 할 일로 가장 좋은 것은?', options: ['다 찾았으니 끝내요', '살피지 않은 요소를 정해 다시 들어요', '친구 기록을 그대로 베껴요'], answer: 1, difficulty: 0.15, explain: '한 번에 다 들리지 않아요. 살필 요소를 정해 다시 들으면 새것이 들려요.' },
          { type: 'mood', prompt: '다시 들으며 새것을 찾아보니 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '다시 듣기 기록',
      items: [
        { type: 'table', prompt: '‘숲속의 뻐꾸기’를 들을 때마다 찾은 것을 쓰세요.', columns: ['들은 차례', '귀 기울인 요소', '찾은 것'], cells: [['첫 번째', '', ''], ['두 번째', '', ''], ['세 번째', '', '']] },
        { type: 'choice', prompt: '‘숲속의 뻐꾸기’에서 들리지 않는 소리에 ○ 하세요.', options: ['두 음이 되풀이되는 소리', '피아노 소리', '사람이 부르는 노랫말'], answer: '사람이 부르는 노랫말' },
        { type: 'blank', prompt: '빈칸을 채우세요.', text: '다시 듣기 전에 살필 ___를 하나 정해요.', answer: '요소' },
        { type: 'short', prompt: '두 번째 들을 때 새로 찾은 것과, 처음에 놓친 까닭을 쓰세요.' },
      ],
      easy: {
        note: '한 번 듣기 → 살필 것 하나 정하기 → 다시 듣기 → 기록에 보태기.',
        items: [
          { type: 'choice', prompt: '한 번 들으면 다 들릴까요?', options: ['아니요', '네'], answer: '아니요' },
          { type: 'choice', prompt: '뻐꾸기 소리는 몇 음이 되풀이되나요?', options: ['두 음', '다섯 음'], answer: '두 음' },
          { type: 'short', prompt: '처음 들을 때 찾은 것을 쓰세요.' },
          { type: 'short', prompt: '다시 들을 때 찾은 것을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '가락을 듣는 동안 건반이 빛나고, 맞게 고른 카드에 초록 테두리가 보여요.',
      base: '계이름을 켜고 끌 수 있고, 카드를 스스로 확인해요.',
      challenge: '계이름 없는 건반에서 귀로만 따라 치고, 차례 놓기는 맞힌 뒤에야 테두리가 보여요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 한 번 들은 것이 전부라고 여긴다 → 칠판 기록이 다시 들을 때마다 늘어나는 것을 보여 준다. ② 다시 들을 때도 같은 것만 듣는다 → 살필 요소 하나를 먼저 정해 손가락으로 짚게 한다. ③ 곡에 없는 소리를 상상해서 적는다 → 그 부분을 다시 들려주고 정말 들리는지 확인한다. ‘숲속의 뻐꾸기’는 2분 남짓이라 두세 번 들려줄 수 있다.',
  }));

  // ───────────────────────── 10차시 (확장) ─────────────────────────
  lessons.push(Object.assign(head(10, S1), {
    title: '우리 반 요소 그래프 보고 코끼리 곡 다시 듣기',
    objective: '우리 반이 찾은 요소를 막대그래프로 읽어 가장 덜 찾은 요소를 정하고, 그 요소에 귀 기울여 곡을 다시 들으며 3박 리듬을 찾아 나타낼 수 있다.',
    safety: MOVE_SAFE,
    illustration: {
      prompt: ILL('a heavy paper elephant dancing a slow waltz next to a big bar chart made of paper strips'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'sun', x: 410, y: 56, s: 0.7 }, { motif: 'cloud', x: 110, y: 52 }, { motif: 'hills', y: 210 },
        { motif: 'tree', x: 70, y: 214 }, { motif: 'flower', x: 420, y: 224 }, { motif: 'star', x: 240, y: 86, s: 0.6 },
        { motif: 'text', x: 240, y: 150, text: '쿵 짝 짝, 코끼리 춤', size: 23 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"지난 시간 우리 반은 생상스의 ‘코끼리’를 듣고 찾은 요소를 붙임쪽지로 붙였어요. 그것을 그래프로 만들었어요." 그래프를 보여 주며 "가장 많이 찾은 것과 가장 덜 찾은 것은 무엇일까요?" 묻는다. "덜 찾은 요소는 곡에 없는 걸까요, 우리가 덜 귀 기울인 걸까요?" 하고 물어, 다시 들을 까닭을 만든다.',
        student: '우리 반 그래프에서 가장 높은 막대와 가장 낮은 막대를 찾아봅시다.',
        demo: { tool: 'chart', options: { type: 'bar', title: '우리 반이 찾은 요소', data: [['높낮이', 18], ['빠르기', 15]], unit: '명', xLabel: '요소', yLabel: '학생 수' }, sequence: [{ values: [18, null] }, { values: [18, 15] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 요소 그래프에서 다시 들을 요소 정하기', minutes: 12, tool: 'chart',
            teacher: '"그래프를 보면 우리 반이 어느 요소에 덜 귀 기울였는지 알 수 있어요." 막대 끝에서 눈금까지 손가락으로 따라가며 읽게 한다. 낮은 막대를 ‘곡에 없는 요소’로 여기는 학생에게 "이 곡이 셋씩 묶여 춤추는 곡이라는 것을 들은 친구가 몇 명이었나요? 다시 들어 볼까요?"라고 묻는다.',
            task: '우리 반 그래프를 읽고, 가장 덜 찾은 요소와 막대 사이의 차이를 알아봐요.',
            levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
            items: [
              { prompt: '우리 반이 ‘코끼리’에서 찾은 요소 그래프예요. 가장 덜 찾은 요소는 무엇인가요?', toolOptions: { type: 'bar', mode: 'read', title: '우리 반이 찾은 요소', data: [['높낮이', 18], ['빠르기', 15], ['셈여림', 7], ['3박 리듬', 4]], unit: '명', xLabel: '요소', choices: ['빠르기', '셈여림', '3박 리듬'], why: ['빠르기 막대는 꽤 높아요.', '셈여림보다 더 낮은 막대가 있어요.', ''], explain: '3박 리듬 막대가 4명으로 가장 낮아요.' }, target: { pick: 2 }, difficulty: 0.15,
                predict: { q: '가장 낮은 막대의 요소는 곡에 없는 걸까요?', options: ['곡에 없어요', '덜 귀 기울였어요'], answer: 1 },
                conclude: '낮은 막대는 곡에 없는 것이 아니라 우리가 덜 귀 기울인 요소예요. 다시 들어 볼 까닭이 돼요.' },
              { prompt: '높낮이를 찾은 학생은 셈여림을 찾은 학생보다 몇 명 더 많은가요?', toolOptions: { type: 'bar', mode: 'read', title: '우리 반이 찾은 요소', data: [['높낮이', 18], ['빠르기', 15], ['셈여림', 7], ['3박 리듬', 4]], unit: '명', xLabel: '요소', question: '높낮이는 셈여림보다 몇 명 더 많은가요?' }, target: { value: 11 }, difficulty: 0.3 },
              { prompt: '다시 들은 뒤 3박 리듬을 찾은 학생이 4명에서 16명이 되었어요. 빈 막대를 채워 보세요.', toolOptions: { type: 'bar', title: '다시 들은 뒤', data: [['처음', 4], ['다시 들은 뒤', 16]], unit: '명', xLabel: '들은 차례', yLabel: '3박 리듬을 찾은 학생', given: [0] }, target: { build: true }, difficulty: 0.2 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 코끼리 춤곡의 3박 리듬 찾아 몸으로 치기', minutes: 15, tool: 'keyboard',
            teacher: '"이제 ‘코끼리’를 다시 들으며 셋씩 묶이는 박을 찾아봐요. 첫 박은 발을 쿵, 둘째·셋째 박은 손뼉을 짝 짝." 곡을 들으며 함께 쳐 본다. 3박을 넷씩 세는 학생에게는 "쿵 짝 짝"을 소리 내어 말하며 치게 한다. 리듬을 놓은 뒤에는 코끼리처럼 무겁게 걸으며 쳐 본다.',
            task: '리듬 듣기를 누르고 ‘쿵 짝 짝’으로 따라 친 뒤 3박 리듬을 블록으로 놓아요. 마지막에는 코끼리 춤 리듬을 지어 몸으로 쳐요.',
            levels: rhy(3, 2),
            items: [
              { prompt: '3박 리듬을 듣고 블록으로 놓아 보세요. 첫 박에 발을 쿵 굴러요.', toolOptions: { pattern: ['q', 'q', 'q', 'q', 'q', 'q'] }, target: { rhythm: ['q', 'q', 'q', 'q', 'q', 'q'] }, difficulty: 0.15 },
              { prompt: '첫 박이 길게 울리는 3박 리듬이에요. 듣고 블록으로 놓아 보세요.', toolOptions: { pattern: ['h', 'q', 'h', 'q'] }, target: { rhythm: ['h', 'q', 'h', 'q'] }, reveal: 'after-check', difficulty: 0.25 },
              { prompt: '코끼리 춤 리듬을 지어요. 두 마디를 3박씩 채우고 2분음표를 넣은 뒤, 몸으로 쳐 보고 점검해요.', target: { beats: true, use: ['h'], selfCheck: ['첫 박마다 발을 쿵 굴렀어요', '코끼리처럼 무겁게 걸으며 쳐 보았어요'] }, difficulty: 0.25 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"그래프에서 낮았던 요소를 다시 들어 보니 어땠나요?" 다시 들은 뒤 찾은 학생 수를 손을 들어 세어 본다. 이것으로 1~10차시의 ‘요소 탐색’을 마친다고 알리고, 다음 시간부터는 여러 나라·여러 종류의 음악을 견주어 듣는다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '2반이 찾은 요소', data: [['높낮이', 12], ['빠르기', 3], ['셈여림', 9]], unit: '명', xLabel: '요소', choices: ['높낮이', '빠르기', '셈여림'] }, prompt: '2반이 다시 들으며 가장 귀 기울여야 할 요소는 무엇인가요? 가장 낮은 막대를 골라 보세요.', target: { pick: 1 }, difficulty: 0.2 },
          { type: 'choice', prompt: '3박 리듬 곡에서 박을 세는 바른 방법은?', options: ['쿵 짝 / 쿵 짝', '쿵 짝 짝 / 쿵 짝 짝', '쿵 짝 짝 짝 / 쿵 짝 짝 짝'], answer: 1, difficulty: 0.15, explain: '3박은 센박 하나와 여린박 둘, 셋씩 묶어 세요.' },
          { type: 'mood', prompt: '요소 탐색 열 시간을 마친 내 마음은 어떤가요?' },
        ],
      },
    ],
    worksheet: {
      title: '요소 그래프와 3박 리듬',
      items: [
        { type: 'table', prompt: '우리 반이 찾은 요소의 학생 수를 보고, 가장 덜 찾은 요소의 마지막 칸에 ○ 하세요.', columns: ['항목', '들은 학생 수', '○'], cells: [['높낮이', '18명', ''], ['빠르기', '15명', ''], ['셈여림', '7명', ''], ['3박 리듬', '4명', '']], answer: '3박 리듬' },
        { type: 'figure', prompt: '마디마다 몇 박인지 세어 쓰세요.', tool: 'keyboard', options: { mode: 'rhythm', meter: 3, measures: 2 }, figures: [{ state: { rhythm: ['h', 'q', 'q', 'q', 'q'] }, caption: '첫째 마디 ___박, 둘째 마디 ___박' }], answer: '3박, 3박' },
        { type: 'choice', prompt: '그래프의 낮은 막대가 알려 주는 것에 ○ 하세요.', options: ['곡에 없는 요소', '우리가 덜 귀 기울인 요소', '어려운 곡'], answer: '우리가 덜 귀 기울인 요소' },
        { type: 'short', prompt: '1~10차시에 찾은 요소 가운데 가장 잘 들리게 된 것을 쓰세요.' },
      ],
      easy: {
        note: '높은 막대 = 많이 찾은 요소, 낮은 막대 = 다시 들어 볼 요소. 3박 = 쿵 짝 짝.',
        items: [
          { type: 'choice', prompt: '가장 낮은 막대의 요소는 어떻게 할까요?', options: ['다시 들어 봐요', '그냥 지나가요'], answer: '다시 들어 봐요' },
          { type: 'choice', prompt: '3박은 어떻게 세나요?', options: ['쿵 짝 짝', '쿵 짝'], answer: '쿵 짝 짝' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '‘코끼리’는 ___박으로 춤추는 곡이에요.', answer: '3' },
          { type: 'draw', prompt: '코끼리가 춤추는 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '막대 끝에 값이 보이고, 리듬 블록 아래에 마디마다 박 수가 보여요.',
      base: '눈금을 스스로 읽고, 박 수를 스스로 세어요.',
      challenge: '막대 값이 확인한 뒤에야 보이고, 리듬 블록에 8분쉼표·2분쉼표·점2분음표가 더 나와요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 낮은 막대를 ‘곡에 없는 요소’로 여긴다 → 다시 들으면 막대가 높아지는 것을 보여 준다. ② 3박을 넷씩 센다 → "쿵 짝 짝"을 소리 내어 말하며 친다. ③ 막대 끝과 눈금을 잘못 잇는다 → 자를 대고 따라간다. 그래프 수는 예시이다. 지난 시간 학급 붙임쪽지를 세어 실제 수로 바꾸어 써도 좋다. ‘코끼리’는 콘트라베이스가 무겁게 연주하는 3박 춤곡이다.',
  }));

  // ───────────────────────── 11차시 (핵심) ─────────────────────────
  lessons.push(Object.assign(head(11, S2), {
    title: '「수제천」과 「사계」 봄을 듣고 특징 견주기',
    objective: '국악곡 「수제천」과 서양 음악 「사계」 중 ‘봄’을 듣고 두드러진 특징을 각각 두 가지씩 찾아, 같은 점과 다른 점으로 나누어 정리할 수 있다.',
    illustration: {
      prompt: ILL('a Korean royal court ensemble with long paper flutes on one side and a violinist among spring birds and blossoms on the other side'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'house', x: 100, y: 212 }, { motif: 'mountain', x: 150, y: 206 }, { motif: 'flower', x: 360, y: 222 },
        { motif: 'bird', x: 380, y: 90 }, { motif: 'bird', x: 330, y: 70 }, { motif: 'hills', y: 214 },
        { motif: 'text', x: 240, y: 145, text: '느리게 길게 · 밝게 빠르게', size: 22 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"오늘은 아주 오래된 두 곡을 들어요. 하나는 우리나라 궁중에서 연주하던 「수제천」, 하나는 이탈리아의 비발디가 지은 「사계」 중 ‘봄’이에요." 두 곡을 1분씩 들려준다. "두 곡이 어떻게 달랐나요?" 대답을 듣고 "빠른 곡은 신나고 느린 곡은 슬프다, 이렇게 한 가지로만 말해도 될까요? 악기 소리는 어땠나요?" 하고 물어, 특징을 두 가지 넘게 찾아보자고 한다.',
        student: '두 곡을 들으며 가장 먼저 귀에 들어온 것을 하나씩 떠올려 봅시다.',
        demo: { tool: 'mindmap', options: { topic: '두 곡', slots: ['수제천', '봄'], cards: ['아주 느려요', '밝고 빨라요'], shuffle: false }, sequence: [{ sort: { 수제천: ['아주 느려요'], 봄: ['밝고 빨라요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 두 곡의 특징 나누고 같은 점·다른 점 정리하기', minutes: 14, tool: 'mindmap',
            teacher: '"카드의 특징이 어느 곡에서 들렸나요? 기억나지 않으면 손을 드세요. 그 부분을 다시 들려줄게요." 두 곡을 한 번 더 들려준다. 같은 점을 찾기 어려워하는 학생에게 "두 곡 모두 사람이 노래했나요?"를 묻는다. ‘빠르다’ 하나만 적고 멈추는 학생에게는 악기 소리와 가락의 길이도 들어 보게 한다.',
            task: '두 곡을 다시 들으며 특징 카드를 곡별로 나누고, 두 곡의 같은 점과 다른 점을 나누어요.',
            levels: cardsLv(),
            items: [
              { prompt: '특징 카드를 들린 곡에 나누어 넣어 보세요.', toolOptions: { topic: '두 곡의 특징', slots: ['수제천', '봄'], cards: ['아주 느리고 소리를 길게 끌어요', '피리·대금 같은 국악기 소리가 나요', '바이올린이 새소리를 흉내 내요', '밝고 빠르게 움직여요'] }, target: { sort: { 수제천: ['아주 느리고 소리를 길게 끌어요', '피리·대금 같은 국악기 소리가 나요'], 봄: ['바이올린이 새소리를 흉내 내요', '밝고 빠르게 움직여요'] } }, difficulty: 0.15,
                hints: ['두 곡을 떠올리며 카드마다 빠르기와 악기 소리가 어느 곡과 닮았는지 따져 보세요.', '넣은 카드의 악기가 그 곡에서 정말 들렸는지 보세요. 국악기와 서양 악기를 가려요.', '「수제천」은 느리고 길게 끄는 국악기 소리, ‘봄’은 밝고 빠른 바이올린 소리예요.'],
                levels: { challenge: { toolOptions: { cards: ['아주 느리고 소리를 길게 끌어요', '피리·대금 같은 국악기 소리가 나요', '바이올린이 새소리를 흉내 내요', '밝고 빠르게 움직여요', '사람이 노랫말을 불러요'] } } } },
              { prompt: '두 곡을 견준 카드를 같은 점과 다른 점으로 나누어 보세요.', toolOptions: { topic: '수제천과 봄', slots: ['같은 점', '다른 점'], cards: ['둘 다 노랫말 없이 악기로만 연주해요', '둘 다 여러 악기가 함께 연주해요', '쓰는 악기의 종류가 달라요', '한 곡은 느리고 한 곡은 빨라요'] }, target: { sort: { '같은 점': ['둘 다 노랫말 없이 악기로만 연주해요', '둘 다 여러 악기가 함께 연주해요'], '다른 점': ['쓰는 악기의 종류가 달라요', '한 곡은 느리고 한 곡은 빨라요'] } }, difficulty: 0.2,
                hints: ['카드가 두 곡을 하나로 묶어 말하는지(둘 다), 나누어 말하는지(한 곡은 …, 한 곡은 …) 보세요.', '넣은 카드를 다시 읽어 보세요. 두 곡에 모두 맞는 말인지, 한 곡에만 맞는 말인지요.', '‘둘 다’로 시작하는 두 카드는 같은 점, 악기 종류와 빠르기가 다르다는 두 카드는 다른 점이에요.'] },
              { prompt: '‘봄’의 특징으로 알맞은 것만 골라 보세요.', toolOptions: { mode: 'pick', topic: '‘봄’', basket: '‘봄’의 특징', cards: ['바이올린 소리가 두드러져요', '같은 가락이 여러 번 돌아와요', '장구 소리가 장단을 쳐요', '노랫말로 봄을 노래해요'] }, target: { pick: ['바이올린 소리가 두드러져요', '같은 가락이 여러 번 돌아와요'] }, reveal: 'after-check', difficulty: 0.3,
                predict: { q: '‘봄’의 특징은 ‘빠르다’ 하나뿐일까요?', options: ['하나뿐이에요', '더 있어요'], answer: 1 },
                conclude: '빠르기 말고도 악기 소리, 되풀이되는 가락처럼 여러 특징이 함께 들려요.',
                hints: ['‘봄’을 다시 떠올리며 카드의 소리가 정말 그 곡에서 들렸는지 하나씩 따져요.', '고른 카드 가운데 이 곡에 없는 악기나 목소리가 있는지 보세요.', '‘봄’은 바이올린이 두드러지고, 처음 가락이 여러 번 돌아와요. 장구와 노랫말은 없어요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 길게 끄는 가락과 새소리 가락 따라 치기', minutes: 12, tool: 'keyboard',
            teacher: '"「수제천」처럼 느리게 길게 끄는 가락과 ‘봄’처럼 빠르게 지저귀는 가락을 건반으로 들어 봐요." 같은 건반이라도 빠르기에 따라 느낌이 달라진다는 것을 짚는다. 느린 가락을 빨리 쳐 버리는 학생에게 "소리가 끝날 때까지 기다렸다가 다음 건반을 눌러요"라고 말한다.',
            task: '가락 듣기를 누르고 들은 가락을 따라 쳐요. 느린 가락은 소리가 끝날 때까지 기다렸다 치고, 빠른 가락은 가볍게 쳐요.',
            levels: mel(),
            items: [
              { prompt: '「수제천」처럼 느리게 길게 끄는 가락이에요. 가락 듣기를 누르고 따라 쳐 보세요.', toolOptions: { melody: ['미', '솔', '라', '솔'], tempo: 40 }, target: { notes: ['미', '솔', '라', '솔'] }, difficulty: 0.15 },
              { prompt: '‘봄’의 새소리처럼 빠르게 지저귀는 가락이에요. 듣고 따라 쳐 보세요.', toolOptions: { melody: ['솔', '라', '솔', '라', '솔', '높은도'], tempo: 160 }, target: { notes: ['솔', '라', '솔', '라', '솔', '높은도'] }, difficulty: 0.25,
                predict: { q: '빠르게 들려준 가락은 따라 치기가 어떨까요?', options: ['더 쉬워요', '더 어려워요', '같아요'] },
                conclude: '빠르게 지나가는 가락은 두세 번 들으며 차례를 기억하면 따라 칠 수 있어요.' },
              { prompt: '느린 가락과 빠른 가락이 이어지는 일곱 음이에요. 끝까지 듣고 따라 쳐 보세요.', toolOptions: { melody: ['라', '솔', '미', '솔', '라', '솔', '라'], tempo: 90 }, target: { notes: ['라', '솔', '미', '솔', '라', '솔', '라'] }, reveal: 'after-check', difficulty: 0.3 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"두 곡의 특징을 하나씩 말해 볼까요? ‘빠르다’ 말고 다른 특징으로요." 악기·가락·빠르기를 고루 모은다. 출구 2번에서 ‘빠른 곡은 모두 신난다’를 고른 학생에게는 「산왕의 궁전에서」의 끝부분을 떠올리게 하고 "빠른데 신나기만 했나요?"를 묻는다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '두 곡의 특징', slots: ['수제천', '봄'], cards: ['궁중에서 연주하던 음악이에요', '바이올린이 앞장서 연주해요', '한 음을 오래 끌며 천천히 흘러가요'] }, prompt: '특징 카드를 들린 곡에 나누어 넣어 보세요.', target: { sort: { 수제천: ['궁중에서 연주하던 음악이에요', '한 음을 오래 끌며 천천히 흘러가요'], 봄: ['바이올린이 앞장서 연주해요'] } }, difficulty: 0.2 },
          { type: 'choice', prompt: '곡의 특징을 적는 방법으로 가장 알맞은 것은?', options: ['빠르니까 ‘신나는 곡’ 하나만 적어요', '빠르기, 악기 소리처럼 두 가지 넘게 찾아 적어요', '곡 이름만 적어요'], answer: 1, difficulty: 0.2, explain: '한 곡에도 여러 특징이 함께 들려요. 빠르기만 보고 하나로 묶지 않아요.' },
          { type: 'mood', prompt: '오래된 두 곡을 들어 보니 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '두 곡 견주기 표',
      items: [
        { type: 'table', prompt: '두 곡의 특징을 두 가지씩 쓰세요.', columns: ['', '특징 1', '특징 2'], cells: [['수제천', '', ''], ['사계 중 봄', '', '']] },
        { type: 'table', prompt: '두 곡의 같은 점과 다른 점을 쓰세요.', columns: ['같은 점', '다른 점'], rows: 2 },
        { type: 'choice', prompt: '「수제천」에서 들리는 악기에 ○ 하세요.', options: ['피리', '바이올린', '전자 기타'], answer: '피리' },
        { type: 'short', prompt: '두 곡 가운데 다시 듣고 싶은 곡과 그 까닭을 특징을 넣어 쓰세요.' },
      ],
      easy: {
        note: '「수제천」 = 우리 궁중 음악(느리게, 길게, 피리·대금), ‘봄’ = 비발디(밝게, 빠르게, 바이올린).',
        items: [
          { type: 'choice', prompt: '더 느린 곡은?', options: ['수제천', '봄'], answer: '수제천' },
          { type: 'choice', prompt: '바이올린 소리가 두드러지는 곡은?', options: ['봄', '수제천'], answer: '봄' },
          { type: 'choice', prompt: '두 곡의 같은 점은?', options: ['둘 다 노랫말이 없어요', '둘 다 장구를 쳐요'], answer: '둘 다 노랫말이 없어요' },
          { type: 'draw', prompt: '두 곡 가운데 하나를 듣고 떠오른 장면을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞게 넣은 카드에 초록 테두리가 보이고, 가락을 듣는 동안 건반이 빛나요.',
      base: '카드를 스스로 확인하고, 계이름을 켜고 끌 수 있어요.',
      challenge: '노랫말 함정 카드가 하나 섞여 있고, 계이름 없는 건반에서 귀로만 따라 쳐요.',
    },
    teacherNotes: '자주 보이는 어려움: ① ‘빠르다·느리다’ 하나로만 특징을 적는다 → 악기 소리, 되풀이되는 가락도 들어 보게 한다. ② 빠른 곡은 신나는 곡이라고 묶는다 → 빠르기와 느낌은 따로라고 짚는다. ③ 같은 점을 찾지 못한다 → 노랫말·악기 수처럼 두 곡을 함께 물어본다. 「수제천」은 아주 긴 곡이라 처음 1~2분만 들려준다.',
  }));

  // ───────────────────────── 12차시 (연습) ─────────────────────────
  lessons.push(Object.assign(head(12, S2), {
    title: '악기 소리로 동물 곡과 악기 가려 듣기',
    objective: '국악기와 서양 악기를 소리 내는 방법과 소리로 구별하고, 「동물의 사육제」의 여러 곡에서 동물을 나타낸 악기와 소리 특징을 찾아 이을 수 있다.',
    illustration: {
      prompt: ILL('a parade of paper animals, a lion, an elephant, a swan and a kangaroo, each walking beside the instrument that plays its music'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 110, y: 52 }, { motif: 'hills', y: 210 },
        { motif: 'tree', x: 70, y: 214 }, { motif: 'bird', x: 250, y: 84 }, { motif: 'flower', x: 400, y: 224 },
        { motif: 'text', x: 240, y: 150, text: '이 소리는 무슨 악기?', size: 23 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"목소리만 듣고도 누구인지 알 수 있지요? 악기도 저마다 목소리가 있어요. 이것을 음색이라고 해요." 가야금과 바이올린 소리를 10초씩 들려주고 "줄을 뜯는 소리일까요, 문지르는 소리일까요?"를 묻는다. 둘 다 줄이 있는 악기지만 소리 내는 방법이 달라 소리도 다르다는 것을 짚는다.',
        student: '두 악기 소리를 듣고, 줄을 뜯는 소리인지 문지르는 소리인지 맞혀 봅시다.',
        demo: { tool: 'mindmap', options: { topic: '악기', slots: ['국악기', '서양 악기'], cards: ['가야금', '바이올린'], shuffle: false }, sequence: [{ sort: { 국악기: ['가야금'], '서양 악기': ['바이올린'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 국악기·서양 악기 나누고 소리 내는 법 잇기', minutes: 12, tool: 'mindmap',
            teacher: '"악기 사진과 소리를 함께 보고 들어요. 이 악기는 어느 나라에서 오래 써 온 악기일까요?" 소리 내는 법을 이을 때는 손으로 뜯기·불기·치기·문지르기 흉내를 내 보게 한다. 대금과 플루트가 둘 다 옆으로 분다는 것을 알아챈 학생을 칭찬하고, 생김새와 소리가 다르다는 것을 들려준다.',
            task: '악기 소리를 듣고 국악기와 서양 악기로 나누거나, 손으로 흉내 내 보며 악기와 소리 내는 법을 이어요.',
            levels: cardsLv(),
            items: [
              { prompt: '악기 카드를 국악기와 서양 악기로 나누어 보세요.', toolOptions: { topic: '악기', slots: ['국악기', '서양 악기'], cards: ['가야금', '해금', '바이올린', '플루트'] }, target: { sort: { 국악기: ['가야금', '해금'], '서양 악기': ['바이올린', '플루트'] } }, difficulty: 0.1 },
              { prompt: '이번 악기 카드도 국악기와 서양 악기로 나누어 보세요.', toolOptions: { topic: '악기', slots: ['국악기', '서양 악기'], cards: ['거문고', '피리', '첼로', '트럼펫', '장구'] }, target: { sort: { 국악기: ['거문고', '피리', '장구'], '서양 악기': ['첼로', '트럼펫'] } }, difficulty: 0.2 },
              { prompt: '국악기와 소리 내는 법을 이어 보세요.', toolOptions: { mode: 'match', topic: '소리 내는 법', slots: [{ id: 'g', label: '가야금' }, { id: 'd', label: '대금' }, { id: 'j', label: '장구' }, { id: 'h', label: '해금' }], cards: ['줄을 손가락으로 뜯어요', '옆으로 들고 불어요', '채와 손으로 쳐요', '활로 줄을 문질러요'] }, target: { match: { g: '줄을 손가락으로 뜯어요', d: '옆으로 들고 불어요', j: '채와 손으로 쳐요', h: '활로 줄을 문질러요' } }, reveal: 'after-check', difficulty: 0.3,
                hints: ['악기마다 줄이 있는지, 입으로 부는지, 두드리는지 먼저 떠올리고 이어요. 줄이 있는 악기는 뜯는지 문지르는지도 생각해요.', '이은 카드 가운데 줄이 있는 두 악기의 소리 내는 법이 바뀌었는지 보세요.', '가야금은 뜯고, 대금은 옆으로 불고, 장구는 채와 손으로 치고, 해금은 활로 문질러요.'],
                levels: { challenge: { toolOptions: { cards: ['줄을 손가락으로 뜯어요', '옆으로 들고 불어요', '채와 손으로 쳐요', '활로 줄을 문질러요', '건반을 눌러요'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 「동물의 사육제」 동물과 악기 소리 잇기', minutes: 15, tool: 'mindmap',
            teacher: '"생상스는 동물마다 어울리는 악기를 골라 곡을 지었어요. 곡을 20초씩 들려줄 테니 어떤 악기 소리가 동물처럼 들리는지 찾아보세요." 곡 이름은 들려준 뒤에 알려 준다. 코끼리를 ‘큰 동물이니 큰 소리’라고만 말하는 학생에게 "소리가 큰 것과 낮은 것은 같을까요?"라고 1차시에 한 것을 떠올리게 한다.',
            task: '곡을 20초씩 듣고, 동물을 나타낸 악기 소리와 특징을 이어요. 마지막에는 악기를 낮은 소리 악기와 높은 소리 악기로 나누어요.',
            levels: cardsLv(),
            items: [
              { prompt: '동물과 그 동물을 나타낸 소리를 이어 보세요.', toolOptions: { mode: 'match', topic: '동물의 사육제', slots: [{ id: 'l', label: '사자왕의 행진' }, { id: 'e', label: '코끼리' }, { id: 'c', label: '숲속의 뻐꾸기' }], cards: ['피아노와 현악기가 으르렁거리듯 울려요', '콘트라베이스가 낮고 무겁게 춤춰요', '클라리넷이 두 음을 되풀이해요'] }, target: { match: { l: '피아노와 현악기가 으르렁거리듯 울려요', e: '콘트라베이스가 낮고 무겁게 춤춰요', c: '클라리넷이 두 음을 되풀이해요' } }, difficulty: 0.15,
                hints: ['곡을 들으며 동물의 몸 크기·움직임·울음소리 가운데 무엇을 악기가 흉내 냈는지 생각하고 이어요.', '이은 카드 가운데 울음소리를 흉내 낸 것과 무거운 몸을 흉내 낸 것이 바뀌었는지 보세요.', '사자는 으르렁거리는 피아노와 현악기, 코끼리는 낮고 무거운 콘트라베이스, 뻐꾸기는 두 음을 되풀이하는 클라리넷이에요.'] },
              { prompt: '다른 동물 곡도 이어 보세요.', toolOptions: { mode: 'match', topic: '동물의 사육제', slots: [{ id: 's', label: '백조' }, { id: 't', label: '거북' }, { id: 'k', label: '캥거루' }], cards: ['첼로가 부드럽고 길게 노래해요', '현악기가 빠른 춤 가락을 아주 느리게 연주해요', '피아노가 깡충깡충 뛰듯 짧게 울려요'] }, target: { match: { s: '첼로가 부드럽고 길게 노래해요', t: '현악기가 빠른 춤 가락을 아주 느리게 연주해요', k: '피아노가 깡충깡충 뛰듯 짧게 울려요' } }, difficulty: 0.25,
                predict: { q: '느릿느릿한 거북은 어떤 빠르기로 연주할까요?', options: ['아주 빠르게', '아주 느리게'], answer: 1 },
                conclude: '작곡가는 동물의 움직임에 맞춰 악기와 빠르기를 골랐어요.',
                hints: ['곡을 들으며 동물이 움직이는 모습(미끄러지듯, 느릿느릿, 깡충깡충)이 어떤 소리로 나타났는지 생각하고 이어요.', '이은 카드 가운데 빠르기가 동물의 움직임과 맞지 않는 것이 있는지 보세요.', '백조는 부드러운 첼로, 거북은 아주 느린 현악기, 캥거루는 깡충 뛰는 짧은 피아노 소리예요.'] },
              { prompt: '악기를 낮은 소리를 내는 악기와 높은 소리를 내는 악기로 나누어 보세요.', toolOptions: { topic: '악기의 높낮이', slots: ['낮은 소리', '높은 소리'], cards: ['콘트라베이스', '튜바', '플루트', '피콜로'] }, target: { sort: { '낮은 소리': ['콘트라베이스', '튜바'], '높은 소리': ['플루트', '피콜로'] } }, reveal: 'after-check', difficulty: 0.3,
                hints: ['악기의 크기를 떠올려 보세요. 같은 종류 악기라면 대체로 클수록 낮은 소리가 나요.', '넣은 카드 가운데 몸집이 아주 큰 악기가 높은 소리 칸에 있는지 보세요.', '콘트라베이스와 튜바는 크고 낮은 소리, 플루트와 피콜로는 작고 높은 소리예요.'] },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 들은 동물 곡 가운데 악기 소리가 동물과 가장 닮았다고 느낀 것은 무엇인가요? 그 악기 소리가 어땠는지 넣어 말해 보세요." 출구 2번을 틀린 학생에게는 콘트라베이스와 피콜로 소리를 한 번 더 들려준다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '악기', slots: ['국악기', '서양 악기'], cards: ['대금', '아쟁', '클라리넷', '콘트라베이스'] }, prompt: '악기 카드를 국악기와 서양 악기로 나누어 보세요.', target: { sort: { 국악기: ['대금', '아쟁'], '서양 악기': ['클라리넷', '콘트라베이스'] } }, difficulty: 0.2 },
          { type: 'choice', prompt: '무거운 동물을 나타내려면 어떤 악기 소리가 가장 어울릴까요?', options: ['높고 가벼운 피콜로', '낮고 굵은 콘트라베이스', '짧게 뜯는 가야금 높은 줄'], answer: 1, difficulty: 0.2, explain: '낮고 굵은 소리가 무겁고 큰 몸을 닮았어요.' },
          { type: 'mood', prompt: '동물 곡을 들으며 악기 소리를 찾아보니 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '악기의 목소리',
      items: [
        { type: 'table', prompt: '악기마다 국악기·서양 악기와 소리 내는 법을 쓰세요.', columns: ['악기', '국악기 / 서양 악기', '소리 내는 법'], cells: [['가야금', '', ''], ['플루트', '', ''], ['해금', '', ''], ['트럼펫', '', '']] },
        { type: 'table', prompt: '동물 곡과 악기를 쓰세요.', columns: ['동물 곡', '악기', '소리 특징'], cells: [['코끼리', '', ''], ['백조', '', ''], ['숲속의 뻐꾸기', '', '']] },
        { type: 'choice', prompt: '높은 소리를 내는 악기에 ○ 하세요.', options: ['튜바', '피콜로', '콘트라베이스'], answer: '피콜로' },
        { type: 'short', prompt: '내가 동물 곡을 짓는다면 어떤 동물을 어떤 악기로 나타낼지 까닭과 함께 쓰세요.' },
      ],
      easy: {
        note: '국악기: 가야금·거문고·대금·피리·해금·장구. 서양 악기: 바이올린·첼로·플루트·트럼펫·피아노.',
        items: [
          { type: 'choice', prompt: '가야금은?', options: ['국악기', '서양 악기'], answer: '국악기' },
          { type: 'choice', prompt: '코끼리를 나타낸 소리는?', options: ['낮고 무거운 소리', '높고 가벼운 소리'], answer: '낮고 무거운 소리' },
          { type: 'choice', prompt: '해금은 어떻게 소리를 낼까요?', options: ['활로 줄을 문질러요', '입으로 불어요'], answer: '활로 줄을 문질러요' },
          { type: 'draw', prompt: '좋아하는 동물 곡의 동물과 악기를 함께 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞게 넣은 카드에 초록 테두리가 보이고, 틀린 칸에 놓으면 되돌아와요.',
      base: '카드를 스스로 확인해요.',
      challenge: '소리 내는 법 잇기에 함정 카드가 하나 더 있고, 높낮이 나누기는 맞힌 뒤에야 테두리가 보여요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 큰 소리와 낮은 소리를 같게 여긴다 → 콘트라베이스를 여리게 연주하는 부분을 들려준다. ② 곡 이름만 보고 짐작한다 → 곡을 먼저 들려주고 이름은 뒤에 알려 준다. ③ 대금과 플루트를 헷갈린다 → 둘 다 옆으로 불지만 대금은 대나무로 만들고 떨리는 소리가 난다고 들려준다. 악기 사진과 소리는 국립국악원 등 공공 누리집의 자료를 쓴다.',
  }));

  // ───────────────────────── 13차시 (확장) ─────────────────────────
  lessons.push(Object.assign(head(13, S2), {
    title: '같은 가락이 바뀌는 「작은 별 변주곡」 듣기',
    objective: '같은 가락을 빠르기와 꾸밈을 바꾸어 들어 보고, 모차르트 「작은 별 변주곡」에서 그대로인 것과 바뀐 것을 나누며, 빠르기와 분위기를 따로 말할 수 있다.',
    illustration: {
      prompt: ILL('one paper star repeated in a row, each copy decorated differently with ribbons, dots and swirls, above a small piano'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'star', x: 90, y: 90, s: 0.8 }, { motif: 'star', x: 190, y: 80, s: 0.8 }, { motif: 'star', x: 290, y: 90, s: 0.8 }, { motif: 'star', x: 390, y: 80, s: 0.8 },
        { motif: 'moon', x: 430, y: 40, s: 0.5 }, { motif: 'hills', y: 214 },
        { motif: 'text', x: 240, y: 160, text: '같은 별, 다른 옷', size: 24 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"이 가락을 아나요?" 시연 단추로 ‘도 도 솔 솔 라 라 솔’을 들려준다. 많은 학생이 안다고 답한다. "모차르트는 이 가락으로 옷을 열두 번 갈아입힌 곡을 지었어요. 「작은 별 변주곡」이에요." 주제와 첫째 변주를 30초씩 들려주고 "무엇이 그대로이고 무엇이 바뀌었나요?"를 묻는다.',
        student: '알고 있는 가락이 어떻게 바뀌는지 들어 봅시다. 그대로인 것은 무엇일까요?',
        demo: { tool: 'keyboard', options: { from: '도', to: '높은도' }, sequence: [{ notes: ['도', '도', '솔', '솔'] }, { notes: ['도', '도', '솔', '솔', '라', '라', '솔'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 빠르기와 꾸밈을 바꾼 가락 따라 치기', minutes: 13, tool: 'keyboard',
            teacher: '"같은 가락을 느리게, 빠르게, 꾸며서 들려줄게요. 계이름 차례도 바뀔까요?" 빠르게 들은 가락을 다른 가락이라고 여기는 학생에게 계이름 줄을 칠판에 적어 견주게 한다. 꾸민 가락에서는 원래 가락의 음(도·솔·라)이 어디에 숨어 있는지 찾아보게 한다.',
            task: '가락 듣기를 누르고 따라 쳐요. 빠르기가 바뀌거나 음이 더해져도 원래 가락이 어디 있는지 찾아요.',
            levels: mel(),
            items: [
              { prompt: '느리게 들려주는 가락이에요. 가락 듣기를 누르고 따라 쳐 보세요.', toolOptions: { melody: ['도', '도', '솔', '솔', '라', '라', '솔'], tempo: 66 }, target: { notes: ['도', '도', '솔', '솔', '라', '라', '솔'] }, difficulty: 0.1 },
              { prompt: '같은 가락을 아주 빠르게 들려줘요. 계이름 차례가 바뀌었는지 생각하며 따라 쳐 보세요.', toolOptions: { melody: ['도', '도', '솔', '솔', '라', '라', '솔'], tempo: 168 }, target: { notes: ['도', '도', '솔', '솔', '라', '라', '솔'] }, difficulty: 0.2,
                predict: { q: '빠르게 들려주면 계이름 차례도 바뀔까요?', options: ['바뀌어요', '그대로예요'], answer: 1 },
                conclude: '빠르기만 바뀌고 계이름 차례는 그대로예요. 그래서 같은 가락으로 들려요.' },
              { prompt: '원래 가락 사이사이에 음을 더해 꾸민 가락이에요. 듣고 따라 쳐 보세요.', toolOptions: { melody: ['도', '레', '도', '솔', '라', '솔', '라', '시', '라', '솔'] }, target: { notes: ['도', '레', '도', '솔', '라', '솔', '라', '시', '라', '솔'] }, reveal: 'after-check', difficulty: 0.35 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 그대로인 것과 바뀐 것 나누기', minutes: 14, tool: 'mindmap',
            teacher: '"변주곡은 원래 가락의 큰 줄기는 남기고 옷만 바꾸는 곡이에요." 여덟째 변주(어두운 느낌)를 들려준 뒤 "빠르기만 보고 분위기를 말할 수 있을까요?"를 묻는다. ‘빠르면 신나는 곡’이라고 묶는 학생에게 빠르기 칸과 분위기 칸을 따로 채워 보게 한다.',
            task: '변주곡을 들으며 그대로인 것과 바뀐 것을 나누고, 빠르기를 말하는 카드와 분위기를 말하는 카드를 따로 나누어요.',
            levels: cardsLv(),
            items: [
              { prompt: '건반으로 같은 가락을 빠르게 쳤어요. 그대로인 것과 바뀐 것으로 나누어 보세요.', toolOptions: { topic: '빠르게 친 가락', slots: ['그대로', '바뀜'], cards: ['계이름 차례', '음의 수', '빠르기', '한 음이 울리는 길이'] }, target: { sort: { 그대로: ['계이름 차례', '음의 수'], 바뀜: ['빠르기', '한 음이 울리는 길이'] } }, difficulty: 0.2,
                hints: ['활동 1에서 느리게 친 가락과 빠르게 친 가락을 떠올려, 카드마다 두 번이 같았는지 견주어요.', '넣은 카드 가운데 활동 1에서 실제로 달라지지 않은 것이 있는지 보세요. 친 건반을 세어 보세요.', '계이름 차례와 음의 수는 같았고, 빠르기와 한 음이 울리는 길이는 달라졌어요.'] },
              { prompt: '「작은 별 변주곡」의 주제와 첫째 변주를 견주어 그대로인 것과 바뀐 것으로 나누어 보세요.', toolOptions: { topic: '주제와 첫째 변주', slots: ['그대로', '바뀜'], cards: ['원래 가락의 큰 줄기', '피아노로 연주해요', '빠른 음표로 꾸민 모양', '한 박에 들어가는 음의 수'] }, target: { sort: { 그대로: ['원래 가락의 큰 줄기', '피아노로 연주해요'], 바뀜: ['빠른 음표로 꾸민 모양', '한 박에 들어가는 음의 수'] } }, difficulty: 0.25,
                hints: ['주제와 첫째 변주를 떠올려, 카드마다 두 부분이 같았는지 견주어요. 악기와 가락의 큰 줄기도 따져요.', '넣은 카드 가운데 두 부분 모두 같은 것이 있는지 다시 보세요.', '큰 줄기와 피아노는 같았고, 빠른 음표로 꾸민 모양과 한 박에 든 음의 수는 달라졌어요.'] },
              { prompt: '카드를 빠르기를 말하는 것과 분위기를 말하는 것으로 나누어 보세요.', toolOptions: { topic: '빠르기와 분위기', slots: ['빠르기', '분위기'], cards: ['빠르게 연주해요', '느리게 연주해요', '밝은 느낌이에요', '어두운 느낌이에요'] }, target: { sort: { 빠르기: ['빠르게 연주해요', '느리게 연주해요'], 분위기: ['밝은 느낌이에요', '어두운 느낌이에요'] } }, reveal: 'after-check', difficulty: 0.2,
                predict: { q: '빠른 곡은 모두 신나는 곡일까요?', options: ['네', '아니요'], answer: 1 },
                conclude: '빠르기와 분위기는 따로 말해요. 빠른 곡도 어두울 수 있고, 느린 곡도 밝을 수 있어요.',
                hints: ['카드가 ‘얼마나 빨리’를 말하는지, ‘어떤 느낌’을 말하는지 가려요.', '넣은 카드 가운데 느낌을 말한 카드가 다른 칸에 있는지 보세요.', '빠르게·느리게 연주한다는 카드는 빠르기, 밝은·어두운 느낌 카드는 분위기예요.'] },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"「작은 별 변주곡」에서 끝까지 그대로였던 것은 무엇이었나요?" 원래 가락의 큰 줄기라는 대답을 기다린다. 마음에 든 변주 하나를 골라 그 변주에서 바뀐 것을 짝에게 말하게 한다. 출구 2번을 틀린 학생에게는 빠르기 칸과 분위기 칸을 나누어 다시 쓰게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'keyboard', options: { from: '도', to: '높은도', melody: ['파', '파', '미', '미', '레', '레', '도'], tempo: 150 }, prompt: '가락 듣기를 누르고 빠르게 들려주는 가락을 따라 쳐 보세요.', target: { notes: ['파', '파', '미', '미', '레', '레', '도'] }, difficulty: 0.25 },
          { type: 'choice', prompt: '어떤 곡이 아주 빠르게 연주돼요. 이 곡의 분위기는 어떨까요?', options: ['빠르니까 반드시 신나요', '빠르기만으로는 알 수 없고 다른 요소도 들어 봐야 해요', '빠르면 반드시 무서워요'], answer: 1, difficulty: 0.25, explain: '빠르기와 분위기는 따로예요. 악기 소리·높낮이·셈여림도 함께 들어 봐야 해요.' },
          { type: 'mood', prompt: '같은 가락이 옷을 갈아입는 곡을 들어 보니 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '변주곡 견주기',
      items: [
        { type: 'table', prompt: '주제와 마음에 든 변주를 견주어 쓰세요.', columns: ['', '빠르기', '분위기', '바뀐 것'], cells: [['주제', '', '', ''], ['변주(  번째)', '', '', '']] },
        { type: 'choice', prompt: '변주곡에서 끝까지 그대로인 것에 ○ 하세요.', options: ['원래 가락의 큰 줄기', '빠르기', '꾸밈 음의 수'], answer: '원래 가락의 큰 줄기' },
        { type: 'blank', prompt: '빈칸을 채우세요.', text: '같은 가락을 빠르게 치면 ___는 바뀌지만 계이름 ___는 그대로예요.', answer: '빠르기, 차례' },
        { type: 'short', prompt: '내가 ‘작은 별’ 가락을 변주한다면 무엇을 바꾸고 싶은지 쓰세요.' },
      ],
      easy: {
        note: '변주곡 = 원래 가락은 남기고 빠르기·꾸밈·느낌을 바꾼 곡.',
        items: [
          { type: 'choice', prompt: '같은 가락을 빠르게 치면 계이름 차례는?', options: ['그대로예요', '바뀌어요'], answer: '그대로예요' },
          { type: 'choice', prompt: '‘밝은 느낌’은 무엇을 말하나요?', options: ['분위기', '빠르기'], answer: '분위기' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '「작은 별 변주곡」을 지은 사람은 ___예요.', answer: '모차르트' },
          { type: 'draw', prompt: '별 하나에 내가 입히고 싶은 옷을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '가락을 듣는 동안 건반이 빛나고, 맞게 넣은 카드에 초록 테두리가 보여요.',
      base: '계이름을 켜고 끌 수 있고, 카드를 스스로 확인해요.',
      challenge: '계이름 없는 건반에서 귀로만 따라 치고, 빠르기·분위기 나누기는 맞힌 뒤에야 테두리가 보여요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 빨라지면 다른 가락이라고 여긴다 → 계이름 줄을 나란히 적어 견준다. ② 꾸민 가락에서 원래 가락을 찾지 못한다 → 원래 가락의 음에 동그라미를 친다. ③ 빠르기와 분위기를 하나로 말한다 → 표의 칸을 나누어 쓴다. ‘작은 별’ 가락은 프랑스 옛 노래 가락으로 저작권이 없다. 노랫말은 부르지 않고 ‘라라라’로 부른다.',
  }));

  // ───────────────────────── 14차시 (핵심) ─────────────────────────
  lessons.push(Object.assign(head(14, S2), {
    title: '동물 곡의 특징 대목만 골라 소리로 흉내 내기',
    objective: '「동물의 사육제」에서 특징이 가장 잘 드러나는 대목 하나를 골라 그 부분만 건반·목소리로 흉내 내고, 그 특징을 짚는 소개 말을 고를 수 있다.',
    safety: MOVE_SAFE,
    illustration: {
      prompt: ILL('children on a small paper stage imitating an elephant with low notes and a kangaroo with jumping notes, a spotlight on one small part of a music score'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'star', x: 240, y: 50, s: 0.8 }, { motif: 'cloud', x: 110, y: 56 }, { motif: 'hills', y: 210 },
        { motif: 'tree', x: 70, y: 214 }, { motif: 'house', x: 410, y: 214 }, { motif: 'flower', x: 330, y: 224 },
        { motif: 'text', x: 240, y: 150, text: '여기! 이 부분만 흉내 내요', size: 22 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"친구에게 ‘코끼리’ 곡을 소개한다면 곡 전체를 다 흉내 낼까요?" 다 하겠다는 대답이 나오면 "2분짜리 곡을 다 흉내 내면 친구가 무엇이 특징인지 알 수 있을까요?" 하고 묻는다. 교사가 ‘코끼리’의 낮은 첫 가락만 목소리로 흉내 내 보이고 "이 부분만 들어도 코끼리 같지요? 특징이 드러나는 한 대목을 골라요"라고 짚는다.',
        student: '선생님이 흉내 내는 짧은 대목을 듣고 어떤 동물 곡인지 맞혀 봅시다.',
        demo: { tool: 'keyboard', options: { from: '낮은솔', to: '높은도' }, sequence: [{ notes: ['낮은솔', '낮은라'] }, { notes: ['낮은솔', '낮은라', '낮은시', '도'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 특징 대목을 건반과 목소리로 흉내 내기', minutes: 14, tool: 'keyboard',
            teacher: '"코끼리는 낮은 건반으로 무겁게, 캥거루는 뛰어오르는 가락으로 가볍게 쳐요." 건반을 친 뒤에는 같은 대목을 ‘음음음’ 목소리로도 흉내 내게 한다. 모둠 흉내에서 한 사람이 곡 전체를 흉내 내려고 하면 "특징이 가장 잘 들리는 네 음만 골라요"라고 범위를 줄여 준다.',
            task: '동물 곡의 특징 대목을 듣고 건반으로 따라 친 뒤 목소리로도 흉내 내요. 마지막에는 모둠이 고른 대목을 흉내 내 보여 줘요.',
            levels: mel('낮은솔', '높은도'),
            items: [
              { prompt: '‘코끼리’처럼 낮은 음에서 무겁게 움직이는 가락이에요. 듣고 따라 쳐 보세요.', toolOptions: { melody: ['낮은솔', '낮은라', '낮은시', '도', '낮은솔'] }, target: { notes: ['낮은솔', '낮은라', '낮은시', '도', '낮은솔'] }, difficulty: 0.2 },
              { prompt: '‘캥거루’처럼 깡충 뛰어오르는 가락이에요. 듣고 따라 쳐 보세요.', toolOptions: { melody: ['도', '솔', '미', '높은도', '솔'], tempo: 132 }, target: { notes: ['도', '솔', '미', '높은도', '솔'] }, difficulty: 0.25,
                predict: { q: '캥거루 가락은 건반에서 어떻게 움직일까요?', options: ['한 칸씩 차례로', '여러 칸을 건너뛰며'], answer: 1 },
                conclude: '여러 칸을 건너뛰는 가락이 깡충 뛰는 모습을 닮았어요.' },
              { prompt: '내가 고른 동물을 흉내 내는 네 음 가락을 지어요. 그 동물의 특징이 드러나게 해요.', target: { compose: { length: 4 }, selfCheck: ['동물의 특징(크기·움직임·울음) 하나를 정했어요', '그 특징에 맞게 높은 음이나 낮은 음을 골랐어요'] }, difficulty: 0.25 },
              { prompt: '모둠이 고른 대목 하나를 목소리나 작은 악기로 흉내 내 보여 주고, 다른 모둠이 어떤 동물 곡인지 맞혀요.', free: true, talk: true, difficulty: 0.2 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 특징을 짚는 소개 말 고르기', minutes: 13, tool: 'mindmap',
            teacher: '"소개 말을 들은 친구가 곡에서 그 부분을 찾아 들을 수 있어야 좋은 소개 말이에요." ‘이 곡은 좋은 곡이에요’를 고르는 학생에게 "이 말을 듣고 곡의 어디를 들으면 되나요?"를 묻는다. 소개하는 차례를 놓은 뒤에는 그 차례대로 모둠 소개를 연습하게 한다.',
            task: '특징 하나를 짚은 소개 말을 고르고, 특징과 흉내 낼 대목을 이은 뒤, 소개하는 차례를 놓아요.',
            levels: cardsLv(),
            items: [
              { prompt: '특징 하나를 짚어 소개한 말만 골라 보세요.', toolOptions: { mode: 'pick', topic: '곡 소개 말', basket: '특징을 짚었어요', cards: ['이 곡은 끝에서 갑자기 아주 세게 쾅 울려요', '이 곡은 좋은 곡이에요', '이 곡은 처음부터 끝까지 이런저런 소리가 나요', '이 곡은 두 음이 뻐꾹뻐꾹 되풀이돼요'] }, target: { pick: ['이 곡은 끝에서 갑자기 아주 세게 쾅 울려요', '이 곡은 두 음이 뻐꾹뻐꾹 되풀이돼요'] }, difficulty: 0.15,
                hints: ['소개 말을 들은 친구가 곡의 어느 부분을 들으면 되는지 알 수 있는지 따져 보세요.', '고른 말 가운데 곡 전체를 뭉뚱그리거나 좋고 나쁨만 말한 것이 있는지 보세요.', '갑자기 세게 울리는 곳, 두 음이 되풀이되는 곳처럼 들을 자리를 알려 주는 두 말이에요.'] },
              { prompt: '짚을 특징과 흉내 낼 대목을 이어 보세요.', toolOptions: { mode: 'match', topic: '흉내 낼 대목', slots: [{ id: 'low', label: '낮고 무거운 소리' }, { id: 'two', label: '두 음 되풀이' }, { id: 'bang', label: '갑자기 센 소리' }], cards: ['‘코끼리’의 첫 가락', '‘숲속의 뻐꾸기’의 클라리넷', '「놀람 교향곡」 2악장의 쾅 하는 곳'] }, target: { match: { low: '‘코끼리’의 첫 가락', two: '‘숲속의 뻐꾸기’의 클라리넷', bang: '「놀람 교향곡」 2악장의 쾅 하는 곳' } }, difficulty: 0.2,
                hints: ['앞 차시에 들은 곡들을 떠올리고, 특징이 가장 뚜렷하게 들리던 자리를 이어요.', '이은 대목 가운데 그 특징이 들리지 않는 곳이 있는지 다시 떠올려 보세요.', '낮고 무거운 소리는 ‘코끼리’ 첫 가락, 두 음 되풀이는 뻐꾸기 클라리넷, 갑자기 센 소리는 「놀람 교향곡」의 쾅 하는 곳이에요.'] },
              { prompt: '모둠 앞에서 곡을 소개하는 차례대로 카드를 놓아 보세요.', toolOptions: { mode: 'order', topic: '소개 차례', cards: ['그 대목만 소리로 흉내 내요', '곡 이름을 말해요', '친구들이 곡에서 그 대목을 찾아 들어요', '짚을 특징 하나를 말해요'] }, target: { order: ['곡 이름을 말해요', '짚을 특징 하나를 말해요', '그 대목만 소리로 흉내 내요', '친구들이 곡에서 그 대목을 찾아 들어요'] }, reveal: 'after-check', difficulty: 0.25,
                hints: ['듣는 친구가 무엇을 먼저 알아야 다음 말을 알아들을지 생각하며 놓아요. 친구들이 직접 듣는 일은 소개가 끝난 뒤예요.', '흉내를 내기 전에 무엇을 흉내 낼지 말했는지 보세요.', '곡 이름 → 특징 하나 → 그 대목 흉내 → 친구들이 곡에서 찾아 듣기 차례예요.'] },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 흉내 낸 대목 가운데 다른 모둠이 가장 빨리 맞힌 것은 무엇이었나요? 왜 빨리 맞혔을까요?" 특징이 뚜렷한 대목이었기 때문이라는 대답을 기다린다. 다음 시간에는 우리 음악의 특징을 흉내 낸다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'keyboard', options: { from: '낮은솔', to: '높은도', melody: ['높은도', '솔', '높은도', '솔'] }, prompt: '높은 음과 낮은 음을 오가는 흉내 가락을 듣고 따라 쳐 보세요.', target: { notes: ['높은도', '솔', '높은도', '솔'] }, difficulty: 0.2 },
          { type: 'choice', prompt: '‘백조’를 친구에게 소개할 때 가장 좋은 말은?', options: ['정말 멋진 곡이에요', '첼로가 부드럽고 길게 노래하는 곳을 들어 보세요', '처음부터 끝까지 다 들어 보세요'], answer: 1, difficulty: 0.2, explain: '특징 하나와 들을 자리를 알려 주면 친구가 찾아 들을 수 있어요.' },
          { type: 'mood', prompt: '동물 곡을 흉내 내 보니 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '특징 대목 흉내 내기',
      items: [
        { type: 'table', prompt: '우리 모둠이 고른 곡과 대목을 쓰세요.', columns: ['곡 이름', '짚을 특징', '흉내 낼 대목', '흉내 낼 방법'], rows: 1 },
        { type: 'choice', prompt: '특징을 짚은 소개 말에 ○ 하세요.', options: ['재미있는 곡이에요', '낮은 콘트라베이스가 무겁게 춤추는 곳이 있어요', '곡이 길어요'], answer: '낮은 콘트라베이스가 무겁게 춤추는 곳이 있어요' },
        { type: 'figure', prompt: '건반에서 코끼리 흉내에 쓸 낮은 음 세 개에 ○ 하세요.', tool: 'keyboard', options: { from: '낮은솔', to: '높은도' }, figures: [{ caption: '' }], answer: '왼쪽(낮은 쪽) 건반 세 개' },
        { type: 'short', prompt: '우리 모둠 소개 말을 ‘곡 이름 → 특징 하나 → 들을 대목’ 차례로 쓰세요.' },
      ],
      easy: {
        note: '좋은 소개 말 = 특징 하나 + 들을 자리. 곡 전체가 아니라 한 대목만 흉내 내요.',
        items: [
          { type: 'choice', prompt: '코끼리 흉내에 어울리는 건반은?', options: ['낮은 쪽 건반', '높은 쪽 건반'], answer: '낮은 쪽 건반' },
          { type: 'choice', prompt: '흉내는 곡의 어디를 낼까요?', options: ['특징이 드러나는 한 대목', '곡 전체'], answer: '특징이 드러나는 한 대목' },
          { type: 'short', prompt: '내가 흉내 낸 동물을 쓰세요.' },
          { type: 'draw', prompt: '내가 흉내 낸 동물을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '가락을 듣는 동안 건반이 빛나고, 맞게 고른 카드에 초록 테두리가 보여요.',
      base: '계이름을 켜고 끌 수 있고, 카드를 스스로 확인해요.',
      challenge: '계이름 없는 건반에서 귀로만 따라 치고, 소개 차례 놓기는 맞힌 뒤에야 테두리가 보여요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 곡 전체를 흉내 내려 한다 → 네 음, 10초처럼 범위를 정해 준다. ② 소개 말이 ‘좋다·재미있다’로 끝난다 → ‘어디를 들으면 되는지’를 넣게 한다. ③ 흉내 소리가 너무 크다 → 특징이 여린 소리면 흉내도 여리게 한다. 모둠 흉내 맞히기는 모둠(6개)마다 1분 안에 끝내 활동 1 안에 모두 돌 수 있게 한다.',
  }));

  // ───────────────────────── 15차시 (연습) ─────────────────────────
  lessons.push(Object.assign(head(15, S2), {
    title: '세마치장단 무릎으로 치며 「도라지 타령」 느끼기',
    objective: '민요 「도라지 타령」을 들으며 세 박씩 묶인 세마치장단을 무릎장단으로 치고 장단 칸에 구음을 놓아, 우리 민요의 특징을 서양 노래와 견주어 말할 수 있다.',
    illustration: {
      prompt: ILL('children sitting in a circle patting their knees beside a paper janggu drum, with bellflower blossoms drifting around them'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'flower', x: 90, y: 220 }, { motif: 'flower', x: 400, y: 222 }, { motif: 'mountain', x: 330, y: 206 },
        { motif: 'sun', x: 410, y: 58, s: 0.7 }, { motif: 'hills', y: 214 }, { motif: 'house', x: 150, y: 214 },
        { motif: 'text', x: 240, y: 140, text: '덩 - - 덩 - 덕 쿵 덕 -', size: 22 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"이 민요를 들어 본 적이 있나요? 「도라지 타령」이에요. 들으며 무릎을 쳐 보세요. 몇 번씩 묶이는 것 같나요?" 노래를 들려주며 교사가 세마치장단을 무릎으로 친다. 셋씩 묶인다는 대답을 기다린 뒤 "덩은 두 무릎 함께, 쿵은 왼 무릎, 덕은 오른 무릎이에요"라고 알려 준다. 「작은 별」 가락을 쳐 보이며 "이 노래는 몇씩 묶이나요?" 하고 견주게 한다.',
        student: '「도라지 타령」을 들으며 선생님을 따라 무릎을 쳐 봅시다. 몇 번씩 묶이나요?',
        demo: { tool: 'keyboard', options: { mode: 'janggu', beats: 9, group: 3, jangdan: '세마치' }, sequence: [{ strokes: ['덩', '', '', '', '', '', '', '', ''] }, { strokes: ['덩', '', '', '덩', '', '덕', '쿵', '덕', ''] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 세마치 칸에 구음 놓고 무릎으로 치기', minutes: 14, tool: 'keyboard',
            teacher: '"장단 듣기를 누르고 무릎으로 먼저 친 다음 칸에 구음을 놓아요. 굵은 금이 한 박이 시작되는 곳이에요." 덩과 쿵을 헷갈리는 학생에게 "손이 몇 개 움직였나요?"를 묻는다. 칸에 다 놓은 뒤에는 모둠이 무릎장단을 치고 한 사람이 「도라지 타령」 첫 줄을 ‘라라라’로 불러 장단에 맞춰 본다.',
            task: '장단 듣기를 누르고 무릎으로 따라 친 뒤, 칸에 구음을 넣어요. 마지막에는 모둠이 무릎장단에 맞춰 노래 첫 줄을 불러요.',
            levels: {
              easy: { mode: 'janggu', beats: 9, group: 3, jangdan: '세마치', strokes: ['덩', '쿵', '덕'] },
              base: { mode: 'janggu', beats: 9, group: 3, jangdan: '세마치', strokes: ['덩', '쿵', '덕', '기덕'] },
              challenge: { mode: 'janggu', beats: 9, group: 3, jangdan: '세마치' },
            },
            items: [
              { prompt: '세 박의 첫 칸에만 덩을 치는 장단이에요. 듣고 칸에 놓아 보세요.', toolOptions: { pattern: ['덩', '', '', '덩', '', '', '덩', '', ''] }, target: { strokes: ['덩', '', '', '덩', '', '', '덩', '', ''] }, difficulty: 0.1 },
              { prompt: '「도라지 타령」에 치는 세마치장단 한 장단이에요. 듣고 아홉 칸에 놓아 보세요.', toolOptions: { pattern: ['덩', '', '', '덩', '', '덕', '쿵', '덕', ''] }, target: { strokes: ['덩', '', '', '덩', '', '덕', '쿵', '덕', ''] }, difficulty: 0.3,
                predict: { q: '세마치장단 한 장단에서 덕은 몇 번 나올까요?', options: ['한 번', '두 번', '세 번'], answer: 1 },
                conclude: '세마치장단은 덩 두 번, 덕 두 번, 쿵 한 번이 세 박 안에 놓여요.' },
              { prompt: '셋째 박의 쿵을 덩으로 바꾼 장단이에요. 듣고 칸에 놓아 보세요.', toolOptions: { pattern: ['덩', '', '', '덩', '', '덕', '덩', '덕', ''] }, target: { strokes: ['덩', '', '', '덩', '', '덕', '덩', '덕', ''] }, reveal: 'after-check', difficulty: 0.3 },
              { prompt: '모둠이 무릎장단을 치고 한 사람이 「도라지 타령」 첫 줄을 ‘라라라’로 불러 장단에 맞춰 봐요. 돌아가며 해요.', free: true, talk: true, difficulty: 0.25 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 민요와 서양 노래의 특징 견주기', minutes: 12, tool: 'mindmap',
            teacher: '"「도라지 타령」과 「작은 별」은 둘 다 노래예요. 무엇이 다른가요?" 무릎을 쳐 보며 셋씩 묶이는지, 둘씩 묶이는지 확인하게 한다. ‘덕은 손뼉’이라고 고르는 학생에게는 무릎장단에서 오른 무릎이 장구의 채편을 대신한다는 것을 보여 준다.',
            task: '두 노래의 특징 카드를 나누고, 무릎장단을 바르게 치는 모습과 장단에 맞춰 부르는 바른 모습을 골라요.',
            levels: cardsLv(),
            items: [
              { prompt: '특징 카드를 두 노래에 나누어 넣어 보세요.', toolOptions: { topic: '두 노래', slots: ['도라지 타령', '작은 별'], cards: ['세 박씩 묶인 장단에 맞춰 불러요', '장구로 장단을 쳐요', '같은 음을 두 번씩 이어 불러요', '두 박씩 고르게 셀 수 있어요'] }, target: { sort: { '도라지 타령': ['세 박씩 묶인 장단에 맞춰 불러요', '장구로 장단을 쳐요'], '작은 별': ['같은 음을 두 번씩 이어 불러요', '두 박씩 고르게 셀 수 있어요'] } }, difficulty: 0.2,
                hints: ['두 노래를 무릎으로 쳐 보며 몇 박씩 묶이는지, 어떤 악기가 어울리는지 떠올려 나누어요.', '넣은 카드 가운데 박이 묶이는 수가 그 노래와 맞지 않는 것이 있는지 보세요.', '세 박 장단과 장구는 「도라지 타령」, 같은 음 두 번씩과 두 박씩 세기는 「작은 별」이에요.'] },
              { prompt: '세마치장단을 무릎으로 칠 때 바른 것만 골라 보세요.', toolOptions: { mode: 'pick', topic: '무릎장단', basket: '바르게 쳐요', cards: ['덩은 두 무릎을 함께 쳐요', '쿵은 왼 무릎을 쳐요', '덕은 손뼉을 쳐요', '덩은 발을 굴러요'] }, target: { pick: ['덩은 두 무릎을 함께 쳐요', '쿵은 왼 무릎을 쳐요'] }, difficulty: 0.2,
                hints: ['무릎장단은 장구의 두 편을 두 무릎이 대신해요. 구음마다 장구의 어느 편을 치는지 떠올려요.', '고른 카드 가운데 무릎이 아닌 곳을 치는 것이 있는지 보세요.', '덩은 두 무릎 함께, 쿵은 왼 무릎, 덕은 오른 무릎이에요. 손뼉과 발은 쓰지 않아요.'] },
              { prompt: '장단에 맞춰 노래할 때 바른 모습만 골라 보세요.', toolOptions: { mode: 'pick', topic: '장단에 맞춰 부르기', basket: '바른 모습', cards: ['장단의 첫 덩에 노래 첫 소리를 맞춰요', '장단 끝 쉬는 칸에서도 박을 세어요', '장구를 크게 칠수록 잘한 거예요', '장단을 멈추고 노래만 빨리 불러요'] }, target: { pick: ['장단의 첫 덩에 노래 첫 소리를 맞춰요', '장단 끝 쉬는 칸에서도 박을 세어요'] }, reveal: 'after-check', difficulty: 0.25,
                hints: ['노래와 장단이 함께 가려면 무엇을 맞추어야 하는지 생각하며 골라요.', '고른 카드 가운데 장단과 노래를 따로 떼어 놓는 모습이 있는지 보세요.', '첫 덩에 노래를 맞추고 쉬는 칸에서도 박을 세는 두 모습이 바른 모습이에요.'] },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"「도라지 타령」을 다 함께 무릎장단에 맞춰 ‘라라라’로 한 번 불러 볼까요?" 장단 끝 쉬는 칸을 건너뛰어 빨라지는 학생이 많으니 "쉬고"를 입 모양으로 하게 한다. 출구 2번을 틀린 학생과는 두 노래를 무릎으로 번갈아 쳐 본다.',
        exitTicket: [
          { type: 'tool', tool: 'keyboard', options: { mode: 'janggu', beats: 9, group: 3, jangdan: '세마치', strokes: ['덩', '쿵', '덕'], pattern: ['덩', '', '', '쿵', '', '', '쿵', '', ''] }, prompt: '장단 듣기를 누르고 들은 장단을 칸에 놓아 보세요.', target: { strokes: ['덩', '', '', '쿵', '', '', '쿵', '', ''] }, difficulty: 0.2 },
          { type: 'choice', prompt: '「도라지 타령」의 특징으로 알맞은 것은?', options: ['세 박씩 묶인 장단에 맞춰 불러요', '두 박씩 걸어가듯 불러요', '장단 없이 불러요'], answer: 0, difficulty: 0.15, explain: '「도라지 타령」은 세 박씩 묶인 세마치장단에 맞춰 불러요.' },
          { type: 'mood', prompt: '무릎장단에 맞춰 민요를 불러 보니 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '세마치장단과 민요',
      items: [
        { type: 'figure', prompt: '빈칸에 들어갈 구음을 쓰세요.', tool: 'keyboard', wide: true, options: { mode: 'janggu', beats: 9, group: 3, jangdan: '세마치' }, figures: [{ state: { strokes: ['덩', '', '', '', '', '덕', '', '덕', ''] }, caption: '넷째 칸 ___, 일곱째 칸 ___' }], answer: '넷째 칸 덩, 일곱째 칸 쿵' },
        { type: 'table', prompt: '두 노래를 견주어 쓰세요.', columns: ['', '몇 박씩 묶이나요', '어울리는 악기'], cells: [['도라지 타령', '', ''], ['작은 별', '', '']] },
        { type: 'choice', prompt: '무릎장단에서 ‘덕’을 치는 곳에 ○ 하세요.', options: ['두 무릎 함께', '왼 무릎', '오른 무릎'], answer: '오른 무릎' },
        { type: 'short', prompt: '무릎장단에 맞춰 노래할 때 가장 어려웠던 곳과 그 까닭을 쓰세요.' },
      ],
      easy: {
        note: '덩 = 두 무릎 함께, 쿵 = 왼 무릎, 덕 = 오른 무릎. 세마치는 세 박이에요.',
        items: [
          { type: 'figure', prompt: '세마치장단을 손가락으로 짚으며 읽어 보세요.', tool: 'keyboard', wide: true, options: { mode: 'janggu', beats: 9, group: 3, jangdan: '세마치' }, figures: [{ state: { strokes: ['덩', '', '', '덩', '', '덕', '쿵', '덕', ''] }, caption: '쿵은 몇 번? ___번' }], answer: '1번' },
          { type: 'choice', prompt: '두 무릎을 함께 치는 구음은?', options: ['덩', '쿵'], answer: '덩' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '「도라지 타령」은 ___박씩 묶인 장단에 맞춰 불러요.', answer: '세' },
          { type: 'draw', prompt: '도라지꽃을 그리고, 그 옆에 덩 쿵 덕을 써 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '구음 붓이 덩·쿵·덕 셋만 나오고, 맞게 넣은 카드에 초록 테두리가 보여요.',
      base: '기덕 붓이 더 나오고, 카드를 스스로 확인해요.',
      challenge: '더러러까지 모든 붓이 나오고, 바른 모습 고르기는 맞힌 뒤에야 테두리가 보여요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 덩과 쿵을 헷갈린다 → 덩은 두 손, 쿵은 왼손 하나. ② 장단 끝 쉬는 칸을 건너뛰어 노래가 빨라진다 → "쉬고"를 입 모양으로. ③ 「작은 별」도 셋씩 세려 한다 → 두 노래를 번갈아 무릎으로 쳐서 견준다. 「도라지 타령」은 전래 민요로 저작권이 없다. 노랫말 대신 ‘라라라’로 부르게 하면 장단에 더 집중한다.',
  }));

  // ───────────────────────── 16차시 (확장) ─────────────────────────
  lessons.push(Object.assign(head(16, S2), {
    title: '특징을 알리는 소개 말 만들어 모둠 앞에서 발표하기',
    objective: '들은 곡의 특징 하나와 들을 대목을 넣은 짧은 소개 말을 완성하고, 발표 시간을 계획하여 모둠 앞에서 흉내와 함께 발표할 수 있다.',
    illustration: {
      prompt: ILL('a small group of children presenting in front of classmates with a paper speech bubble and a paper music note sign, others listening with hands on ears'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'star', x: 90, y: 60, s: 0.6 }, { motif: 'star', x: 390, y: 60, s: 0.6 }, { motif: 'cloud', x: 240, y: 44 },
        { motif: 'hills', y: 212 }, { motif: 'house', x: 100, y: 214 }, { motif: 'tree', x: 420, y: 216 },
        { motif: 'text', x: 240, y: 150, text: '이 곡은요, 여기를 들어 보세요!', size: 21 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"14차시에 흉내 낸 대목을 오늘은 소개 말과 함께 발표해요. 좋은 소개 말에는 무엇이 들어가야 할까요?" 곡 이름, 특징 하나, 들을 곳이라는 대답을 칠판에 세 칸으로 적는다. "‘정말 좋은 곡이에요’는 어느 칸에 들어갈까요?" 하고 물어, 좋고 나쁨은 특징이 아니라는 것을 짚는다.',
        student: '좋은 소개 말에 꼭 들어갈 것 세 가지를 떠올려 봅시다.',
        demo: { tool: 'story', options: { mode: 'fill', cards: ['「수제천」'], slots: [{ id: 'n', who: '모둠', label: '우리가 소개할 곡은 ___이에요.' }] }, sequence: [{ fill: { n: '「수제천」' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 빈칸을 채워 소개 말 완성하기', minutes: 13, tool: 'story',
            teacher: '"말풍선의 빈칸에 알맞은 카드를 넣어 소개 말을 완성해요. 특징 칸에는 ‘~해요’로 끝나는 카드, 들을 곳 칸에는 ‘~곳’으로 끝나는 카드가 들어가요." 다 넣은 뒤 소리 내어 읽게 한다. ‘정말 좋은 곡이에요’를 특징 칸에 넣는 학생에게 "이 말을 듣고 곡의 무엇이 다른 곡과 다른지 알 수 있나요?"를 묻는다.',
            task: '말풍선의 빈칸에 알맞은 카드를 넣어 소개 말을 완성하고, 완성한 소개 말을 소리 내어 읽어요.',
            levels: cardsLv(),
            items: [
              { prompt: '「수제천」 소개 말의 빈칸을 채워 보세요.', toolOptions: { mode: 'fill', cards: ['「수제천」', '아주 느리고 소리를 길게 끌어요', '피리 소리가 길게 이어지는 곳'], slots: [{ id: 'n', who: '모둠', label: '소개할 곡은 ___이에요.' }, { id: 'f', who: '모둠', label: '이 곡은 ___.' }, { id: 'p', who: '모둠', label: '___을 들어 보세요.' }] }, target: { fill: { n: '「수제천」', f: '아주 느리고 소리를 길게 끌어요', p: '피리 소리가 길게 이어지는 곳' } }, difficulty: 0.1,
                hints: ['말풍선마다 곡 이름·특징·들을 곳 가운데 무엇이 들어갈 자리인지 먼저 정하고, 카드의 끝말이 그 자리에 어울리는지 보세요.', '넣은 카드를 소리 내어 읽어 보세요. 문장이 어색한 칸이 있나요?', '곡 이름 칸에 「수제천」, 특징 칸에 느리고 길게 끄는 카드, 들을 곳 칸에 피리 소리 카드예요.'] },
              { prompt: '‘봄’ 소개 말의 빈칸을 채워 보세요.', toolOptions: { mode: 'fill', cards: ['‘봄’', '바이올린이 새소리를 흉내 내요', '처음 가락이 다시 돌아오는 곳'], slots: [{ id: 'n', who: '모둠', label: '소개할 곡은 ___이에요.' }, { id: 'f', who: '모둠', label: '이 곡은 ___.' }, { id: 'p', who: '모둠', label: '___을 들어 보세요.' }] }, target: { fill: { n: '‘봄’', f: '바이올린이 새소리를 흉내 내요', p: '처음 가락이 다시 돌아오는 곳' } }, difficulty: 0.15,
                hints: ['말풍선마다 곡 이름·특징·들을 곳 가운데 무엇이 들어갈 자리인지 먼저 정하고, 카드의 끝말이 그 자리에 어울리는지 보세요.', '넣은 카드를 소리 내어 읽어 보세요. 문장이 어색한 칸이 있나요?', '곡 이름 칸에 ‘봄’, 특징 칸에 새소리를 흉내 내는 카드, 들을 곳 칸에 가락이 돌아오는 곳 카드예요.'] },
              { prompt: '‘거북’ 소개 말이에요. 특징을 짚는 카드만 골라 빈칸을 채워 보세요.', toolOptions: { mode: 'fill', cards: ['‘거북’', '빠른 춤 가락을 아주 느리게 연주해요', '현악기가 느릿느릿 시작하는 곳', '정말 좋은 곡이에요'], slots: [{ id: 'n', who: '모둠', label: '소개할 곡은 ___이에요.' }, { id: 'f', who: '모둠', label: '짚을 특징: 이 곡은 ___.' }, { id: 'p', who: '모둠', label: '___을 들어 보세요.' }] }, target: { fill: { n: '‘거북’', f: '빠른 춤 가락을 아주 느리게 연주해요', p: '현악기가 느릿느릿 시작하는 곳' } }, reveal: 'after-check', difficulty: 0.3,
                predict: { q: '‘정말 좋은 곡이에요’는 특징일까요?', options: ['네', '아니요'], answer: 1 },
                conclude: '좋다·싫다는 내 마음이고, 특징은 곡에서 들리는 소리예요. 소개 말에는 특징을 넣어요.',
                hints: ['특징 칸에는 곡에서 실제로 들리는 소리를 말한 카드가 들어가요. 내 마음을 말한 카드는 남겨요.', '특징 칸에 넣은 카드가 곡의 소리를 말하는지, 좋고 나쁨을 말하는지 보세요.', '특징 칸에는 빠른 춤 가락을 느리게 연주한다는 카드가 들어가고, ‘정말 좋은 곡이에요’는 남겨요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 발표 시간 계획하고 모둠 앞에서 발표하기', minutes: 14, tool: 'timer',
            teacher: '"여섯 모둠이 1분씩 발표하고, 모둠 사이에 30초씩 자리를 바꿔요. 타이머를 맞춰 볼까요?" 계획을 맞춘 뒤 발표 준비 차례를 놓고, 실제로 발표한다. 발표 중에 곡 전체를 설명하려는 모둠이 있으면 1분 신호에 맞춰 "특징 하나만!"이라고 짚는다. 발표가 끝난 뒤에만 점검 목록을 표시하게 한다.',
            task: '발표 시간을 타이머로 계획하고 준비 차례를 놓은 뒤, 모둠 앞에서 발표해요. 발표가 끝나면 점검 목록을 표시해요.',
            levels: { easy: { title: '모둠 소개 발표', workStep: 30, restStep: 30 }, base: { title: '모둠 소개 발표', workStep: 10, restStep: 10 }, challenge: { title: '모둠 소개 발표', workStep: 5, restStep: 5 } },
            items: [
              { prompt: '여섯 모둠이 1분(60초)씩 발표하고, 사이에 30초씩 자리를 바꿔요. 타이머를 맞춰 보세요.', toolOptions: { plan: { work: 30, rest: 10, rounds: 4 } }, target: { plan: { work: 60, rest: 30, rounds: 6 } }, difficulty: 0.15 },
              { prompt: '발표를 준비하는 차례대로 카드를 놓아 보세요.', toolOptions: { cards: ['모둠 앞에서 발표해요', '짚을 특징 하나를 정해요', '친구 질문에 답해요', '소개 말을 써요'] }, target: { order: ['짚을 특징 하나를 정해요', '소개 말을 써요', '모둠 앞에서 발표해요', '친구 질문에 답해요'] }, difficulty: 0.2,
                hints: ['소개 말을 쓰려면 무엇이 먼저 정해져 있어야 하는지, 친구 질문은 언제 받을 수 있는지 생각하며 놓아요.', '발표하기 전에 해야 할 일이 모두 앞에 있는지 보세요.', '특징 정하기 → 소개 말 쓰기 → 발표하기 → 질문에 답하기 차례예요.'] },
              { prompt: '발표를 마친 뒤, 우리 모둠이 해낸 것을 점검 목록에 표시해요.', target: { selfCheck: ['특징 하나만 짚어 말했어요', '그 대목을 소리로 흉내 냈어요', '1분 안에 발표를 마쳤어요'] }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"다른 모둠 발표를 듣고 곡에서 그 대목을 찾아 들을 수 있었나요?" 손을 들어 보게 한다. 다음 시간에는 특징을 살려 우리 흉내 곡을 짓는다고 알린다. 출구 2번에서 ‘좋은 곡’을 고른 학생에게는 오늘 소개 말의 특징 칸을 다시 읽게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { mode: 'fill', cards: ['‘코끼리’', '콘트라베이스가 낮고 무겁게 춤춰요', '낮은 가락이 처음 나오는 곳'], slots: [{ id: 'n', who: '모둠', label: '소개할 곡은 ___예요.' }, { id: 'f', who: '모둠', label: '이 곡은 ___.' }, { id: 'p', who: '모둠', label: '___을 들어 보세요.' }] }, prompt: '‘코끼리’ 소개 말의 빈칸을 채워 보세요.', target: { fill: { n: '‘코끼리’', f: '콘트라베이스가 낮고 무겁게 춤춰요', p: '낮은 가락이 처음 나오는 곳' } }, difficulty: 0.2 },
          { type: 'choice', prompt: '소개 말의 ‘특징’ 칸에 가장 알맞은 것은?', options: ['정말 좋은 곡이에요', '첼로가 부드럽게 길게 노래해요', '모두 들어 보세요'], answer: 1, difficulty: 0.15, explain: '특징은 곡에서 들리는 소리를 말해요. 첼로 소리가 그 곡에서 들리는 특징이에요.' },
          { type: 'mood', prompt: '모둠 앞에서 발표해 보니 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '우리 모둠 소개 말',
      items: [
        { type: 'table', prompt: '우리 모둠 소개 말을 칸에 맞게 쓰세요.', columns: ['곡 이름', '짚을 특징', '들을 곳'], rows: 1 },
        { type: 'choice', prompt: '소개 말에 넣지 않아도 되는 것에 ○ 하세요.', options: ['곡 이름', '특징 하나', '곡이 좋은지 싫은지'], answer: '곡이 좋은지 싫은지' },
        { type: 'table', prompt: '다른 모둠 발표를 듣고 쓰세요.', columns: ['모둠', '곡 이름', '짚은 특징'], rows: 3 },
        { type: 'short', prompt: '다른 모둠 발표 가운데 곡에서 그 대목을 가장 잘 찾아 들을 수 있었던 것과 그 까닭을 쓰세요.' },
      ],
      easy: {
        note: '소개 말 = 곡 이름 + 특징 하나 + 들을 곳.',
        items: [
          { type: 'choice', prompt: '특징으로 알맞은 것은?', options: ['피리 소리가 길게 이어져요', '정말 좋아요'], answer: '피리 소리가 길게 이어져요' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '소개할 곡은 ___이에요.', answer: '(예) 「수제천」' },
          { type: 'short', prompt: '우리 모둠이 짚은 특징을 쓰세요.' },
          { type: 'draw', prompt: '발표하는 우리 모둠의 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞게 넣은 카드에 초록 테두리가 보이고, 타이머 값이 30초씩 바뀌어 맞추기 쉬워요.',
      base: '카드를 스스로 확인하고, 타이머 값이 10초씩 바뀌어요.',
      challenge: '특징이 아닌 함정 카드가 섞여 있고 맞힌 뒤에야 테두리가 보여요. 타이머 값은 5초씩 바뀌어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 특징 칸에 ‘좋다·재미있다’를 쓴다 → ‘곡에서 들리는 소리’인지 묻는다. ② 발표가 길어진다 → 1분 타이머를 칠판 화면에 띄운다. ③ 듣는 모둠이 딴짓을 한다 → 발표마다 듣는 모둠이 활동지 표에 짚은 특징을 적게 한다. 여섯 모둠 발표와 자리 바꾸기는 모두 8분 30초로, 활동 2 시간 안에 들어간다.',
  }));

  // ───────────────────────── 17차시 (확장) ─────────────────────────
  lessons.push(Object.assign(head(17, S2), {
    title: '「대취타」와 사물놀이 특징 살려 흉내 리듬 짓기',
    objective: '「대취타」와 사물놀이의 특징을 견주어 찾고, 한 곡의 특징이 드러나게 긴 음표나 짧은 음표를 골라 두 마디 흉내 리듬을 지어 연주할 수 있다.',
    safety: MOVE_SAFE,
    illustration: {
      prompt: ILL('a Korean royal procession band with long horns and big drums marching on one side, and four farmers playing gong, drum and janggu in a lively circle on the other side'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 120, y: 54 }, { motif: 'mountain', x: 200, y: 206 },
        { motif: 'hills', y: 214 }, { motif: 'house', x: 90, y: 214 }, { motif: 'tree', x: 420, y: 216 },
        { motif: 'text', x: 240, y: 145, text: '당당하게 · 흥겹게', size: 24 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"두 곡을 30초씩 들어 볼게요. 하나는 임금님의 행차 때 연주하던 「대취타」, 하나는 꽹과리·징·장구·북으로 치는 사물놀이예요." 들려준 뒤 "어느 곡이 걸어가는 것 같고, 어느 곡이 뛰어노는 것 같나요?"를 묻는다. 두 곡 모두 북과 징 소리가 나지만 빠르기와 쓰임이 다르다는 것을 짚는다.',
        student: '두 곡을 듣고, 걸어가는 것 같은 곡과 뛰어노는 것 같은 곡을 찾아봅시다.',
        demo: { tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 1 }, sequence: [{ rhythm: ['h', 'h'] }, { rhythm: ['e', 'e', 'e', 'e', 'q', 'q'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 두 곡의 특징 견주고 악기 잇기', minutes: 12, tool: 'mindmap',
            teacher: '"두 곡에서 들린 악기와 빠르기를 떠올려 나누어 보세요." 「대취타」에 북과 징이 있다고 사물놀이와 같다고 여기는 학생에게 "태평소 같은 부는 악기가 사물놀이에도 있었나요?"를 묻는다. 사물놀이 악기 비유는 옛사람들이 지은 말이라고 소개한다.',
            task: '두 곡을 떠올리며 특징 카드를 나누고, 사물놀이 악기와 옛사람들이 견준 자연을 이어요.',
            levels: cardsLv(),
            items: [
              { prompt: '특징 카드를 두 곡에 나누어 넣어 보세요.', toolOptions: { topic: '두 곡', slots: ['대취타', '사물놀이'], cards: ['태평소·나발 같은 부는 악기가 함께 울려요', '느리고 당당하게 걸어가듯 연주해요', '꽹과리·징·장구·북 네 악기로 연주해요', '점점 빨라지며 흥겹게 몰아쳐요'] }, target: { sort: { 대취타: ['태평소·나발 같은 부는 악기가 함께 울려요', '느리고 당당하게 걸어가듯 연주해요'], 사물놀이: ['꽹과리·징·장구·북 네 악기로 연주해요', '점점 빨라지며 흥겹게 몰아쳐요'] } }, difficulty: 0.2,
                hints: ['두 곡을 떠올리며 부는 악기가 들렸는지, 빠르기가 어땠는지 견주어 나누어요.', '넣은 카드 가운데 부는 악기가 없는 곡에 부는 악기 카드가 들어갔는지 보세요.', '부는 악기와 느리고 당당한 걸음은 「대취타」, 네 악기와 점점 빨라지는 흥은 사물놀이예요.'] },
              { prompt: '사물놀이 악기와 옛사람들이 견준 자연을 이어 보세요.', toolOptions: { mode: 'match', topic: '사물놀이', slots: [{ id: 'kk', label: '꽹과리' }, { id: 'jg', label: '징' }, { id: 'jj', label: '장구' }, { id: 'bk', label: '북' }], cards: ['천둥·번개', '바람', '비', '구름'] }, target: { match: { kk: '천둥·번개', jg: '바람', jj: '비', bk: '구름' } }, difficulty: 0.25,
                hints: ['악기 소리를 떠올려 보세요. 날카롭게 번쩍이는 소리, 길게 퍼지는 소리, 빗방울처럼 잦은 소리, 묵직하게 깔리는 소리가 어느 악기인지 생각해요.', '이은 카드 가운데 길게 퍼지는 소리와 잦게 떨어지는 소리가 바뀌었는지 보세요.', '꽹과리는 천둥·번개, 징은 바람, 장구는 비, 북은 구름이에요.'] },
              { prompt: '흉내 리듬에 곡의 특징이 드러나게 하는 방법만 골라 보세요.', toolOptions: { mode: 'pick', topic: '흉내 리듬 짓기', basket: '특징이 드러나요', cards: ['느리고 당당한 곡은 긴 음표를 많이 써요', '빠르고 흥겨운 곡은 짧은 음표를 많이 써요', '곡 이름을 크게 외쳐요', '아무 블록이나 많이 놓아요'] }, target: { pick: ['느리고 당당한 곡은 긴 음표를 많이 써요', '빠르고 흥겨운 곡은 짧은 음표를 많이 써요'] }, reveal: 'after-check', difficulty: 0.25,
                hints: ['리듬 블록으로 바꿀 수 있는 것이 무엇인지 떠올려 보세요. 블록의 길이가 곡의 빠르기 느낌을 만들어요.', '고른 카드 가운데 리듬과 상관없는 것이 있는지 보세요.', '긴 음표는 느리고 당당하게, 짧은 음표는 빠르고 흥겹게 들려요. 곡 이름 외치기와 아무 블록은 아니에요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 두 곡을 흉내 내는 리듬 짓고 연주하기', minutes: 15, tool: 'keyboard',
            teacher: '"「대취타」 흉내는 긴 음표로 느리고 당당하게, 사물놀이 흉내는 짧은 음표로 잘게 쪼개요." 지은 리듬은 모둠 악기(북 대신 책상, 징 대신 손바닥 비비기)로 쳐 본다. 지은 뒤 다른 모둠이 어느 곡 흉내인지 맞히게 한다. 맞히지 못하면 "긴 음표와 짧은 음표 가운데 무엇을 더 썼나요?"를 묻는다.',
            task: '리듬을 듣고 놓거나, 한 곡의 특징이 드러나게 두 마디 흉내 리듬을 지어요. 지은 리듬은 모둠 악기로 쳐 보고 다른 모둠이 맞혀요.',
            levels: rhy(4, 2),
            items: [
              { prompt: '「대취타」처럼 걸어가는 행진 리듬이에요. 듣고 블록으로 놓아 보세요.', toolOptions: { pattern: ['h', 'h', 'q', 'q', 'h'], tempo: 66 }, target: { rhythm: ['h', 'h', 'q', 'q', 'h'] }, difficulty: 0.15 },
              { prompt: '「대취타」 흉내 리듬을 지어요. 두 마디를 4박씩 채우고 2분음표를 꼭 넣어요.', target: { beats: true, use: ['h'], selfCheck: ['느리고 당당하게 쳐 보았어요', '긴 음표를 짧은 음표보다 많이 썼어요'] }, difficulty: 0.25 },
              { prompt: '사물놀이 흉내 리듬을 지어요. 두 마디를 4박씩 채우고 8분음표를 꼭 넣어요.', target: { beats: true, use: ['e'], selfCheck: ['빠르고 흥겹게 쳐 보았어요', '짧은 음표를 긴 음표보다 많이 썼어요'] }, difficulty: 0.25 },
              { prompt: '지은 리듬 하나를 모둠 악기로 쳐 주고, 다른 모둠이 어느 곡 흉내인지 맞혀요.', free: true, talk: true, difficulty: 0.2 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"다른 모둠이 우리 흉내 리듬을 맞혔나요? 무엇 때문에 맞혔을까요?" 긴 음표·짧은 음표 때문이라는 대답을 기다린다. 출구 2번을 틀린 학생에게는 2분음표와 8분음표를 번갈아 손뼉으로 쳐 보게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '두 곡', slots: ['대취타', '사물놀이'], cards: ['임금님 행차에 연주하던 음악이에요', '꽹과리가 앞장서 이끌어요', '부는 악기가 길게 울려요'] }, prompt: '특징 카드를 두 곡에 나누어 넣어 보세요.', target: { sort: { 대취타: ['임금님 행차에 연주하던 음악이에요', '부는 악기가 길게 울려요'], 사물놀이: ['꽹과리가 앞장서 이끌어요'] } }, difficulty: 0.2 },
          { type: 'choice', prompt: '빠르고 흥겨운 사물놀이를 흉내 내려면 어떤 음표를 많이 쓰면 좋을까요?', options: ['2분음표', '8분음표', '온음표'], answer: 1, difficulty: 0.2, explain: '짧은 8분음표를 많이 쓰면 잘게 쪼개진 빠른 리듬이 되어 흥겨워져요.' },
          { type: 'mood', prompt: '흉내 리듬을 지어 연주해 보니 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '흉내 리듬 짓기',
      items: [
        { type: 'table', prompt: '두 곡의 특징을 쓰세요.', columns: ['', '악기', '빠르기', '쓰임'], cells: [['대취타', '', '', ''], ['사물놀이', '', '', '']] },
        { type: 'figure', prompt: '이 리듬은 어느 곡 흉내에 더 어울리는지 쓰세요.', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 2 }, figures: [{ state: { rhythm: ['e', 'e', 'e', 'e', 'q', 'q', 'e', 'e', 'e', 'e', 'h'] }, caption: '어울리는 곡: ________' }], answer: '사물놀이(짧은 음표가 많아요)' },
        { type: 'choice', prompt: '사물놀이에서 ‘바람’에 견주는 악기에 ○ 하세요.', options: ['꽹과리', '징', '북'], answer: '징' },
        { type: 'short', prompt: '우리 모둠이 지은 흉내 리듬을 ‘따·따따·따-’로 쓰고, 어느 곡의 어떤 특징을 살렸는지 쓰세요.' },
      ],
      easy: {
        note: '「대취타」 = 느리고 당당하게(긴 음표), 사물놀이 = 빠르고 흥겹게(짧은 음표).',
        items: [
          { type: 'choice', prompt: '임금님 행차에 연주하던 음악은?', options: ['대취타', '사물놀이'], answer: '대취타' },
          { type: 'choice', prompt: '사물놀이 악기가 아닌 것은?', options: ['태평소', '꽹과리'], answer: '태평소' },
          { type: 'choice', prompt: '느리고 당당한 흉내에 어울리는 음표는?', options: ['긴 음표', '짧은 음표'], answer: '긴 음표' },
          { type: 'draw', prompt: '사물놀이 네 악기 가운데 하나를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞게 넣은 카드에 초록 테두리가 보이고, 리듬 블록 아래에 박 수가 보여요.',
      base: '카드와 박 수를 스스로 확인해요.',
      challenge: '카드가 섞여 나오고, 리듬 블록에 8분쉼표·2분쉼표·점2분음표가 더 나와요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 북·징이 있으니 두 곡이 같다고 여긴다 → 부는 악기와 빠르기를 견준다. ② 흉내 리듬에 블록을 아무렇게나 많이 놓는다 → 긴 음표와 짧은 음표 가운데 무엇을 더 쓸지 먼저 정한다. ③ 모둠 악기 소리가 너무 크다 → 책상은 손가락 끝으로 친다. 「대취타」와 사물놀이는 전통 음악으로 저작권이 없지만, 음원은 학교가 이용허락을 받은 것을 쓴다.',
  }));

  // ───────────────────────── 18차시 (핵심) ─────────────────────────
  lessons.push(Object.assign(head(18, S2), {
    title: '친구 발표에서 새 특징 골라 곡에서 확인하기',
    objective: '다른 모둠 발표에서 새로 알게 된 특징을 고르고, 곡을 다시 들어 실제로 들리는 것만 내 특징 표에 보탤 수 있다.',
    illustration: {
      prompt: ILL('a child holding a paper checklist and a magnifying glass, listening to music from a speaker while classmates share ideas in speech bubbles'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'cloud', x: 120, y: 52 }, { motif: 'cloud', x: 360, y: 46, s: 0.8 }, { motif: 'hills', y: 210 },
        { motif: 'house', x: 90, y: 214 }, { motif: 'star', x: 240, y: 90, s: 0.6 }, { motif: 'flower', x: 410, y: 224 },
        { motif: 'text', x: 240, y: 150, text: '친구 말, 귀로 확인!', size: 23 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"16차시에 다른 모둠 발표에서 새로 알게 된 특징이 있었지요? 친구가 말했으면 그대로 내 표에 적어도 될까요?" 대답을 듣고 "친구도 잘못 들을 수 있어요. 곡에서 정말 들리는지 확인해야 내 것이 돼요"라고 짚는다. 오늘은 친구 말을 곡에서 확인하는 연습을 한다고 알린다.',
        student: '친구가 말한 특징을 그대로 믿어도 될지 생각해 봅시다.',
        demo: { tool: 'mindmap', options: { mode: 'pick', topic: '코끼리', basket: '곡에서 들려요', cards: ['낮은 소리가 나요', '노랫말이 있어요'] }, sequence: [{ pick: ['낮은 소리가 나요'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 친구 말 가운데 곡에서 들리는 것 고르기', minutes: 14, tool: 'mindmap',
            teacher: '"모둠 발표에서 나온 말이에요. 곡을 다시 들려줄 테니 정말 들리는 것만 골라요." 곡마다 30초씩 다시 들려준다. ‘친구가 말했으니까’ 다 고르는 학생에게 "트럼펫 소리가 들렸나요? 다시 들어 볼까요?"를 묻는다. 확인하는 차례를 놓은 뒤 그 차례대로 자기 표에 보태게 한다.',
            task: '곡을 다시 들으며 친구 말 가운데 실제로 들리는 것만 고르고, 친구 말을 내 표에 보태는 차례를 놓아요.',
            levels: cardsLv(),
            items: [
              { prompt: '‘코끼리’ 모둠이 말한 특징이에요. 곡을 다시 듣고 실제로 들리는 것만 골라 보세요.', toolOptions: { mode: 'pick', topic: '‘코끼리’', basket: '곡에서 들려요', cards: ['낮은 소리가 무겁게 나요', '셋씩 묶이는 춤곡이에요', '트럼펫이 크게 울려요', '노랫말이 있어요'] }, target: { pick: ['낮은 소리가 무겁게 나요', '셋씩 묶이는 춤곡이에요'] }, difficulty: 0.15,
                hints: ['곡을 다시 들으며 카드에 적힌 소리가 정말 들리는지 하나씩 확인해요. 친구가 말했다는 것만으로 고르지 않아요.', '고른 카드 가운데 곡에서 들리지 않는 악기나 목소리가 있는지 보세요.', '‘코끼리’는 콘트라베이스가 낮고 무겁게 연주하는 3박 춤곡이에요. 트럼펫과 노랫말은 없어요.'] },
              { prompt: '‘봄’ 모둠이 말한 특징이에요. 곡을 다시 듣고 실제로 들리는 것만 골라 보세요.', toolOptions: { mode: 'pick', topic: '‘봄’', basket: '곡에서 들려요', cards: ['새소리를 흉내 내는 곳이 있어요', '처음 가락이 다시 돌아와요', '가야금이 연주해요', '처음부터 끝까지 아주 느려요'] }, target: { pick: ['새소리를 흉내 내는 곳이 있어요', '처음 가락이 다시 돌아와요'] }, difficulty: 0.2,
                hints: ['곡을 다시 들으며 카드에 적힌 소리가 정말 들리는지 하나씩 확인해요.', '고른 카드 가운데 이 곡의 악기나 빠르기와 맞지 않는 것이 있는지 보세요.', '‘봄’에는 새소리 흉내와 다시 돌아오는 가락이 있어요. 가야금은 없고, 곡은 밝고 빨라요.'] },
              { prompt: '친구 말을 내 특징 표에 보태는 차례대로 카드를 놓아 보세요.', toolOptions: { mode: 'order', topic: '확인하고 보태기', cards: ['실제로 들리면 내 표에 보태요', '친구 발표에서 새 특징을 하나 골라요', '그 특징에 귀 기울여 곡을 다시 들어요'] }, target: { order: ['친구 발표에서 새 특징을 하나 골라요', '그 특징에 귀 기울여 곡을 다시 들어요', '실제로 들리면 내 표에 보태요'] }, reveal: 'after-check', difficulty: 0.2,
                predict: { q: '친구가 말한 특징은 바로 표에 적어도 될까요?', options: ['네, 바로 적어요', '아니요, 들어 보고 적어요'], answer: 1 },
                conclude: '친구 말은 곡에서 직접 확인한 뒤에야 내 표에 보태요.',
                hints: ['표에 적기 전에 무엇을 해야 그 말이 맞는지 알 수 있을지 생각하며 놓아요.', '곡을 다시 듣는 일이 표에 보태는 일보다 앞에 있는지 보세요.', '새 특징 고르기 → 그 특징에 귀 기울여 다시 듣기 → 들리면 보태기 차례예요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 친구 말과 내 귀가 다를 때 어떻게 할까', minutes: 13, tool: 'emotion',
            teacher: '"친구 말과 내가 들은 것이 다를 때가 있어요. 어떻게 하면 좋을까요?" 상황을 읽고 고른 뒤 까닭을 말하게 한다. 마지막 문항은 정답이 없는 마음 눈금이니, 새로 알게 된 것이 많든 적든 솔직하게 고르라고 말해 준다.',
            task: '친구 말과 내가 들은 것이 다른 상황을 읽고 어떻게 할지 고르고, 친구 발표에서 새로 알게 된 것이 얼마나 되는지 눈금으로 나타내요.',
            levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
            items: [
              { prompt: '친구가 「놀람 교향곡」 2악장을 처음부터 끝까지 세게 연주한다고 했어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '서아 모둠이 “「놀람 교향곡」 2악장은 처음부터 끝까지 세게 연주해요”라고 발표했어요.', choices: [{ id: 'copy', text: '서아가 말했으니 그대로 표에 적어요', result: '여리게 이어지다 갑자기 세지는 이 곡의 재미를 놓쳐요.', mood: '걱정', why: '친구 말도 곡에서 확인해야 해요.' }, { id: 'listen', text: '곡을 다시 들으며 셈여림을 확인해요', result: '여린 가락 뒤에 갑자기 세게 울리는 곳이 있다는 것을 찾아요.', mood: '뿌듯함' }, { id: 'laugh', text: '틀렸다고 웃어요', result: '서아가 속상해하고, 함께 확인할 기회를 놓쳐요.', mood: '속상함', why: '틀린 말도 함께 들으며 바로잡을 수 있어요.' }] }, target: { choice: 'listen' }, difficulty: 0.15 },
              { prompt: '내가 들은 것과 짝이 들은 것이 달라요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '나는 ‘백조’에서 첼로 소리를 들었는데, 짝은 바이올린 소리라고 해요.', choices: [{ id: 'fight', text: '내가 맞다고 끝까지 우겨요', result: '둘 다 기분이 상하고, 누구 말이 맞는지 모른 채 끝나요.', mood: '화남', why: '우기기보다 함께 들어 보는 것이 빨라요.' }, { id: 'together', text: '그 대목을 함께 다시 듣고 악기 사진과 견주어요', result: '함께 듣고 첼로라는 것을 확인해요.', mood: '편안함' }] }, target: { choice: 'together' }, difficulty: 0.2 },
              { prompt: '오늘 친구 발표에서 새로 알게 된 특징이 얼마나 되나요? 솔직하게 눈금을 골라 보세요.', toolOptions: { mode: 'scale', situation: '친구 발표를 듣고 곡에서 확인해 내 표에 보탰어요.', feeling: '뿌듯함', steps: 3, scaleLabels: ['조금', '보통', '많이'], ask: '새로 알게 된 것은 얼마나 되나요?' }, target: { level: 'any' }, difficulty: 0.05 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 친구 말 가운데 곡에서 확인하고 내 표에 보탠 것을 하나씩 말해 볼까요?" 확인하지 못한 특징은 표에 물음표로 남겨 두고 다음 시간에 다시 듣는다고 알린다. 출구 2번에서 ‘바로 적는다’를 고른 학생에게는 오늘 고르지 않은 카드(트럼펫·가야금)를 다시 보여 준다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '「수제천」', basket: '곡에서 들려요', cards: ['피리 소리가 길게 이어져요', '아주 느리게 흘러가요', '바이올린이 앞장서요'] }, prompt: '친구들이 말한 「수제천」의 특징이에요. 곡에서 실제로 들리는 것만 골라 보세요.', target: { pick: ['피리 소리가 길게 이어져요', '아주 느리게 흘러가요'] }, difficulty: 0.2 },
          { type: 'choice', prompt: '친구가 발표한 특징을 내 표에 보태려면 먼저 무엇을 할까요?', options: ['바로 적어요', '곡을 다시 들어 정말 들리는지 확인해요', '선생님께 정답을 물어요'], answer: 1, difficulty: 0.15, explain: '친구 말도 곡에서 직접 들어 확인해야 내 것이 돼요.' },
          { type: 'mood', prompt: '친구 말을 곡에서 확인해 보니 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '친구 말 확인 표',
      items: [
        { type: 'table', prompt: '친구 발표에서 새로 알게 된 특징을 쓰고, 다시 들은 결과에 ○·✕ 하세요.', columns: ['곡 이름', '친구가 말한 특징', '들렸어요(○/✕)'], rows: 3 },
        { type: 'choice', prompt: '‘코끼리’에서 들리지 않는 것에 ○ 하세요.', options: ['낮고 무거운 소리', '3박 춤곡', '트럼펫 소리'], answer: '트럼펫 소리' },
        { type: 'blank', prompt: '빈칸을 채우세요.', text: '친구 말은 곡을 다시 ___ 확인한 뒤 표에 보태요.', answer: '들어' },
        { type: 'short', prompt: '친구와 내가 다르게 들었을 때 어떻게 할지 쓰세요.' },
      ],
      easy: {
        note: '친구 말 → 다시 듣기 → 들리면 ○ 하고 보태기, 안 들리면 ✕.',
        items: [
          { type: 'choice', prompt: '친구가 말한 특징은?', options: ['다시 듣고 확인해요', '그대로 적어요'], answer: '다시 듣고 확인해요' },
          { type: 'choice', prompt: '‘코끼리’에 노랫말이 있나요?', options: ['없어요', '있어요'], answer: '없어요' },
          { type: 'short', prompt: '오늘 확인해서 보탠 특징을 하나 쓰세요.' },
          { type: 'draw', prompt: '친구와 함께 곡을 다시 듣는 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞게 고른 카드에 초록 테두리가 보이고, 상황마다 고른 뒤 결과가 바로 보여요.',
      base: '카드를 스스로 확인하고, 상황마다 결과를 보며 까닭을 말해요.',
      challenge: '카드가 섞여 나오고, 차례 놓기와 상황의 결과는 맞힌 뒤에야 보여요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 친구가 말했으니 맞다고 보고 곡에서 확인하지 않는다 → 곡에 없는 특징 카드를 일부러 섞어 다시 듣게 한다. ② 친구 말이 틀리면 놀린다 → ‘함께 다시 듣기’를 약속으로 정한다. ③ 마음 눈금을 남에게 보이려고 크게 고른다 → 눈금은 정답이 없고 점수가 아니라고 말해 준다. 다시 들려줄 대목은 30초 안팎으로 미리 정해 둔다.',
  }));

  // ───────────────────────── 19차시 (연습) ─────────────────────────
  lessons.push(Object.assign(head(19, S2), {
    title: '가락을 다시 듣고 친구 말이 맞는지 표시하기',
    objective: '가락을 듣고 따라 친 뒤, 그 가락에 대한 친구의 말이 맞는지 계이름 줄에서 확인하여 맞음·틀림과 그 까닭을 고를 수 있다.',
    illustration: {
      prompt: ILL('a paper keyboard with a row of note cards above it and a child marking check and cross symbols on a paper list next to friends speech bubbles'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'sun', x: 410, y: 56, s: 0.7 }, { motif: 'cloud', x: 110, y: 52 }, { motif: 'hills', y: 210 },
        { motif: 'leaf', x: 160, y: 120, s: 0.6 }, { motif: 'leaf', x: 320, y: 120, s: 0.6 }, { motif: 'tree', x: 420, y: 216 },
        { motif: 'text', x: 240, y: 160, text: '정말 그럴까? 들어 보자', size: 22 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"준호가 이 가락을 듣고 ‘계속 올라간다’고 했어요." 시연 단추로 ‘도 레 미 레 파 솔’을 들려준다. "정말 계속 올라갔나요?" 대답이 갈리면 "그럼 어떻게 확인할 수 있을까요?" 하고 묻고, 따라 쳐 보고 계이름 줄을 살피면 확인할 수 있다고 알려 준다.',
        student: '준호의 말이 맞는지 가락을 들으며 손 높이로 따라가 봅시다.',
        demo: { tool: 'keyboard', options: { from: '도', to: '높은도' }, sequence: [{ notes: ['도', '레', '미'] }, { notes: ['도', '레', '미', '레', '파', '솔'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 친구가 말한 가락 듣고 따라 치기', minutes: 12, tool: 'keyboard',
            teacher: '"활동 2에서 친구 말을 확인할 가락이에요. 들은 대로 정확히 쳐 두어야 확인할 수 있어요." 친 뒤에 손 높이로 다시 따라가 보게 한다. 같은 음을 한 번만 치는 학생에게 "소리가 몇 번 났나요?"를 묻는다.',
            task: '가락 듣기를 누르고 따라 쳐요. 친 뒤 손 높이로 다시 따라가며 올라가는 곳·내려가는 곳·같은 음을 찾아 둬요.',
            levels: mel(),
            items: [
              { prompt: '준호가 ‘계속 올라간다’고 한 가락이에요. 듣고 따라 쳐 보세요.', toolOptions: { melody: ['도', '레', '미', '레', '파', '솔'] }, target: { notes: ['도', '레', '미', '레', '파', '솔'] }, difficulty: 0.15 },
              { prompt: '서아가 ‘같은 음이 두 번씩 이어진다’고 한 가락이에요. 듣고 따라 쳐 보세요.', toolOptions: { melody: ['솔', '솔', '미', '미', '도'] }, target: { notes: ['솔', '솔', '미', '미', '도'] }, difficulty: 0.2 },
              { prompt: '지우가 ‘가장 높은 음이 가운데에 있다’고 한 가락이에요. 듣고 따라 쳐 보세요.', toolOptions: { melody: ['도', '미', '솔', '높은도', '솔', '미', '도'] }, target: { notes: ['도', '미', '솔', '높은도', '솔', '미', '도'] }, reveal: 'after-check', difficulty: 0.25 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 계이름 줄에서 친구 말 확인하기', minutes: 15, tool: 'pattern',
            teacher: '"활동 1에서 친 가락이 계이름 줄로 나와 있어요. 친구 말이 맞는지 손가락으로 짚으며 확인해요." 친구 말이 ‘거의 맞는’ 경우도 있다는 것을 알려 준다. 틀렸다고 고른 학생에게는 "어디가 틀렸는지 짚을 수 있나요?" 하고 그 자리를 손가락으로 가리키게 한다.',
            task: '계이름 줄을 손가락으로 짚으며 노래하고, 친구 말이 맞는지와 그 까닭을 골라요.',
            levels: ruleLv(),
            items: [
              { prompt: '준호는 “이 가락은 계속 올라가요”라고 했어요. 맞는지 골라 보세요.', toolOptions: { mode: 'rule', seq: ['도', '레', '미', '레', '파', '솔'], question: '준호 말이 맞나요?', choices: ['맞아요, 끝까지 올라가요', '아니에요, 중간에 한 번 내려가요', '아니에요, 같은 음만 나와요'], why: ['넷째 음을 셋째 음과 견주어 보세요.', '', '음이 계속 바뀌고 있어요.'] }, target: { pick: 1 }, difficulty: 0.15,
                hints: ['계이름 줄을 손 높이로 따라가며 두 음씩 견주어요. 한 번이라도 손이 내려가면 ‘계속 올라간다’는 맞지 않아요.', '셋째 음과 넷째 음을 도레미 계단에서 찾아 견주어 보세요.', '미에서 레로 한 번 내려가요. 그래서 준호 말은 맞지 않아요.'] },
              { prompt: '서아는 “같은 음이 두 번씩 이어져요”라고 했어요. 맞는지 골라 보세요.', toolOptions: { mode: 'rule', seq: ['솔', '솔', '미', '미', '도'], question: '서아 말이 맞나요?', choices: ['모두 맞아요, 끝까지 두 번씩이에요', '거의 맞지만 마지막 음은 한 번만 나와요', '틀려요, 같은 음이 하나도 없어요'], why: ['마지막 음이 몇 번 나오는지 세어 보세요.', '', '앞의 두 음을 견주어 보세요.'] }, target: { pick: 1 }, difficulty: 0.25,
                hints: ['계이름 줄을 짚으며 같은 음이 몇 번씩 이어지는지 묶어 세어요. 끝까지 빠짐없이 세어요.', '마지막 묶음을 앞의 묶음과 견주어 보세요.', '솔 솔, 미 미는 두 번씩이지만 마지막 도는 한 번만 나와요.'] },
              { prompt: '지우는 “가장 높은 음이 가운데에 있어요”라고 했어요. 맞는지 골라 보세요.', toolOptions: { mode: 'rule', seq: ['도', '미', '솔', '높은도', '솔', '미', '도'], question: '지우 말이 맞나요?', choices: ['맞아요, 가운데 음이 가장 높아요', '아니에요, 처음 음이 가장 높아요', '아니에요, 마지막 음이 가장 높아요'], why: ['', '처음 음은 가장 낮은 음 가운데 하나예요.', '마지막 음은 처음 음과 같아요.'] }, target: { pick: 0 }, difficulty: 0.25,
                hints: ['계이름 줄에서 가장 높은 음을 찾고, 그 음이 줄의 몇째 자리인지 세어 가운데인지 보세요.', '고른 까닭의 자리에 있는 음이 정말 가장 높은지 계단에서 견주어 보세요.', '일곱 음 가운데 넷째 높은도가 가장 높고, 넷째는 한가운데예요. 지우 말이 맞아요.'] },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 친구 말 세 개 가운데 맞은 것과 틀린 것, 거의 맞은 것은 무엇이었나요?" ‘거의 맞다’도 다시 들어야 알 수 있다는 것을 짚는다. 출구 1번에서 끝까지 세지 않은 학생에게는 줄을 손가락으로 하나씩 짚게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'pattern', options: { mode: 'rule', seq: ['라', '솔', '미', '레', '도'], question: '민지 말이 맞나요?', choices: ['맞아요, 끝까지 내려가요', '아니에요, 중간에 올라가요', '아니에요, 같은 음이 있어요'] }, prompt: '민지는 “이 가락은 끝까지 내려가요”라고 했어요. 맞는지 골라 보세요.', target: { pick: 0 }, difficulty: 0.15 },
          { type: 'choice', prompt: '친구 말이 맞는지 알아보는 가장 좋은 방법은?', options: ['목소리가 큰 친구 말을 믿어요', '가락을 다시 듣고 계이름 줄을 짚어 봐요', '많은 친구가 고른 것을 따라요'], answer: 1, difficulty: 0.15, explain: '직접 다시 듣고 짚어 보아야 맞는지 알 수 있어요.' },
          { type: 'mood', prompt: '친구 말을 직접 확인해 보니 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '친구 말 확인하기',
      items: [
        { type: 'table', prompt: '친구 말을 확인하고 ○(맞음)·△(거의 맞음)·✕(틀림)를 쓰세요.', columns: ['가락', '친구 말', '확인'], cells: [['도 레 미 레 파 솔', '계속 올라가요', ''], ['솔 솔 미 미 도', '같은 음이 두 번씩 이어져요', ''], ['도 미 솔 높은도 솔 미 도', '가장 높은 음이 가운데에 있어요', '']] },
        { type: 'choice', prompt: '‘미 미 미 레 도’에 맞는 말에 ○ 하세요.', options: ['같은 음으로 시작해 내려가요', '계속 올라가요', '같은 음만 나와요'], answer: '같은 음으로 시작해 내려가요' },
        { type: 'draw', prompt: '‘도 레 미 레 파 솔’ 가락선을 그리고, 내려가는 곳에 ✕ 하세요.' },
        { type: 'short', prompt: '친구 말이 틀렸을 때 어떻게 알려 주면 좋을지 쓰세요.' },
      ],
      easy: {
        note: '계이름 줄을 손가락으로 짚으며 노래하면 올라가는 곳·내려가는 곳이 보여요.',
        items: [
          { type: 'choice', prompt: '‘도 레 미’는?', options: ['올라가요', '내려가요'], answer: '올라가요' },
          { type: 'choice', prompt: '‘솔 솔’은?', options: ['같은 음이에요', '다른 음이에요'], answer: '같은 음이에요' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '‘도 미 솔 미 도’에서 가장 높은 음은 ___예요.', answer: '솔' },
          { type: 'short', prompt: '오늘 확인한 친구 말 가운데 하나를 쓰고, 맞았는지 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '가락을 듣는 동안 건반이 빛나고, 계이름 줄이 짧게 끊어져 보여요.',
      base: '계이름을 켜고 끌 수 있고, 계이름 줄을 한 줄로 봐요.',
      challenge: '계이름 없는 건반에서 귀로만 따라 치고, 틀린 까닭은 확인 전에 알려 주지 않아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 처음 몇 음만 보고 판단한다 → 끝까지 손가락으로 짚게 한다. ② ‘거의 맞음’을 맞음이나 틀림으로만 나눈다 → 어디까지 맞고 어디가 다른지 말하게 한다. ③ 친구 말이 틀렸다고 놀린다 → ‘○○ 자리가 달라요’처럼 자리를 짚어 말하는 틀을 준다. 친구 이름은 모두 가명이다.',
  }));

  // ───────────────────────── 20차시 (확장) ─────────────────────────
  lessons.push(Object.assign(head(20, S2), {
    title: '우리 반 특징 확인 그래프로 2부 묶어 정리하기',
    objective: '우리 반이 곡에서 확인한 특징을 막대그래프로 읽어 표에서 지울 특징을 찾고, 11~19차시에 들은 곡과 특징을 묶어 정리할 수 있다.',
    illustration: {
      prompt: ILL('a paper bar chart with music note stickers next to a table of songs, and children placing the last sticker on a board'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'star', x: 420, y: 54, s: 0.8 }, { motif: 'cloud', x: 100, y: 52 }, { motif: 'hills', y: 214 },
        { motif: 'house', x: 90, y: 214 }, { motif: 'tree', x: 400, y: 216 }, { motif: 'flower', x: 250, y: 224 },
        { motif: 'text', x: 240, y: 140, text: '들어서 확인한 우리 반 표', size: 22 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"지난 시간 ‘봄’에서 친구들이 말한 특징을 다시 들으며 확인했지요. 몇 명이 들었다고 표시했는지 그래프로 만들었어요." 그래프를 보여 주고 "아무도 들었다고 표시하지 않은 특징은 어떻게 해야 할까요?"를 묻는다. 표에서 지운다는 대답을 기다린다.',
        student: '우리 반 그래프에서 가장 많은 친구가 확인한 특징을 찾아봅시다.',
        demo: { tool: 'chart', options: { type: 'bar', title: '‘봄’ 특징 확인', data: [['바이올린', 22], ['새소리 흉내', 20]], unit: '명', xLabel: '특징', yLabel: '들었어요' }, sequence: [{ values: [22, null] }, { values: [22, 20] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 특징 확인 그래프 읽기', minutes: 12, tool: 'chart',
            teacher: '"막대가 높을수록 많은 친구가 곡에서 직접 들은 특징이에요. 막대가 0인 특징은 무엇을 뜻할까요?" 곡에 없는 특징이었을 수 있다는 것을 짚고, 표에서 지우기 전에 한 번 더 들어 본다. 막대 높이를 ‘좋아하는 친구 수’로 읽는 학생에게 그래프 제목과 세로 축 이름을 다시 읽게 한다.',
            task: '우리 반 특징 확인 그래프를 읽고, 표에서 지울 특징과 막대 사이의 차이를 알아봐요.',
            levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
            items: [
              { prompt: '‘봄’ 특징을 곡에서 들었다고 표시한 학생 수예요. 표에서 지워야 할 특징은 무엇인가요?', toolOptions: { type: 'bar', mode: 'read', title: '‘봄’ 특징 확인', data: [['바이올린', 22], ['새소리 흉내', 20], ['가락이 돌아옴', 14], ['가야금', 0]], unit: '명', xLabel: '특징', choices: ['새소리 흉내', '가락이 돌아옴', '가야금'], why: ['많은 친구가 들었어요.', '14명이 들었어요.', ''], explain: '가야금은 아무도 듣지 못했어요. 곡에 없는 특징이에요.' }, target: { pick: 2 }, difficulty: 0.15,
                predict: { q: '아무도 듣지 못한 특징은 어떻게 할까요?', options: ['그대로 둬요', '한 번 더 듣고 지워요'], answer: 1 },
                conclude: '곡에서 아무도 확인하지 못한 특징은 한 번 더 들어 보고 표에서 지워요.' },
              { prompt: '바이올린을 확인한 학생은 가락이 돌아오는 것을 확인한 학생보다 몇 명 더 많은가요?', toolOptions: { type: 'bar', mode: 'read', title: '‘봄’ 특징 확인', data: [['바이올린', 22], ['새소리 흉내', 20], ['가락이 돌아옴', 14], ['가야금', 0]], unit: '명', xLabel: '특징', question: '바이올린은 가락이 돌아옴보다 몇 명 더 많은가요?' }, target: { value: 8 }, difficulty: 0.3 },
              { prompt: '‘코끼리’ 특징 확인 결과예요(낮은 소리 21명, 3박 춤곡 16명, 트럼펫 0명). 빈 막대를 채워 보세요.', toolOptions: { type: 'bar', title: '‘코끼리’ 특징 확인', data: [['낮은 소리', 21], ['3박 춤곡', 16], ['트럼펫', 0]], unit: '명', xLabel: '특징', yLabel: '들었어요', given: [0] }, target: { build: true }, difficulty: 0.2 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 들은 곡과 특징 묶어 정리하기', minutes: 15, tool: 'mindmap',
            teacher: '"11차시부터 들은 곡을 떠올려 볼까요? 수제천, 봄, 동물의 사육제, 작은 별 변주곡, 도라지 타령, 대취타, 사물놀이." 칠판에 적고 국악과 서양 음악으로 나누게 한다. 곡과 특징을 이을 때 기억나지 않는 곡은 10초씩 다시 들려준다.',
            task: '들은 곡을 국악과 서양 음악으로 나누고, 곡과 특징을 이은 뒤, 특징을 바르게 찾는 습관을 골라요.',
            levels: cardsLv(),
            items: [
              { prompt: '들은 곡을 국악과 서양 음악으로 나누어 보세요.', toolOptions: { topic: '들은 곡', slots: ['국악', '서양 음악'], cards: ['수제천', '도라지 타령', '대취타', '사계 중 봄', '작은 별 변주곡', '동물의 사육제'] }, target: { sort: { 국악: ['수제천', '도라지 타령', '대취타'], '서양 음악': ['사계 중 봄', '작은 별 변주곡', '동물의 사육제'] } }, difficulty: 0.15 },
              { prompt: '곡과 그 곡의 특징을 이어 보세요.', toolOptions: { mode: 'match', topic: '곡과 특징', slots: [{ id: 'sj', label: '수제천' }, { id: 'tw', label: '작은 별 변주곡' }, { id: 'dr', label: '도라지 타령' }, { id: 'dc', label: '대취타' }], cards: ['아주 느리고 길게 끄는 궁중 음악', '같은 가락이 여러 모양으로 바뀌어요', '세마치장단에 맞춰 부르는 민요', '임금님 행차 때 연주한 행진 음악'] }, target: { match: { sj: '아주 느리고 길게 끄는 궁중 음악', tw: '같은 가락이 여러 모양으로 바뀌어요', dr: '세마치장단에 맞춰 부르는 민요', dc: '임금님 행차 때 연주한 행진 음악' } }, difficulty: 0.25,
                hints: ['곡마다 그 곡을 들은 차시에 무엇을 했는지 떠올리며 이어요(따라 친 가락, 무릎장단, 흉내 리듬).', '이은 카드 가운데 궁중 음악과 행진 음악이 바뀌었는지 보세요.', '수제천은 느린 궁중 음악, 작은 별 변주곡은 바뀌는 가락, 도라지 타령은 세마치 민요, 대취타는 행진 음악이에요.'] },
              { prompt: '곡의 특징을 바르게 찾는 습관만 골라 보세요.', toolOptions: { mode: 'pick', topic: '특징 찾기 습관', basket: '좋은 습관', cards: ['특징을 두 가지 넘게 찾아요', '친구 말은 곡에서 다시 듣고 확인해요', '빠른 곡은 모두 신나는 곡이라고 적어요', '한 번 듣고 다 찾았다고 끝내요'] }, target: { pick: ['특징을 두 가지 넘게 찾아요', '친구 말은 곡에서 다시 듣고 확인해요'] }, reveal: 'after-check', difficulty: 0.2,
                hints: ['11~19차시에 고친 생각들을 떠올리며, 곡을 더 잘 듣게 해 주는 습관을 골라요.', '고른 카드 가운데 우리가 고쳐 온 생각이 섞여 있는지 보세요.', '특징을 두 가지 넘게 찾기와 친구 말을 다시 들어 확인하기가 좋은 습관이에요.'] },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"11~20차시에 들은 곡 가운데 다시 듣고 싶은 곡과 그 특징 하나를 말해 볼까요?" 몇 명이 말한다. 다음 시간부터는 음악의 분위기와 쓰임을 이야기한다고 예고한다. 출구 1번을 틀린 학생과는 막대 끝을 눈금까지 손가락으로 따라가 본다.',
        exitTicket: [
          { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '‘수제천’ 특징 확인', data: [['느려요', 23], ['피리 소리', 18], ['바이올린', 0]], unit: '명', xLabel: '특징', choices: ['느려요', '피리 소리', '바이올린'] }, prompt: '‘수제천’ 특징 확인 그래프예요. 표에서 지워야 할 특징을 골라 보세요.', target: { pick: 2 }, difficulty: 0.15 },
          { type: 'choice', prompt: '「도라지 타령」은 어느 갈래의 음악인가요?', options: ['국악', '서양 음악'], answer: 0, difficulty: 0.1, explain: '「도라지 타령」은 세마치장단에 맞춰 부르는 우리 민요예요.' },
          { type: 'mood', prompt: '여러 나라 음악을 견주어 들은 2부를 마친 내 마음은 어떤가요?' },
        ],
      },
    ],
    worksheet: {
      title: '2부 정리: 여러 음악의 특징',
      items: [
        { type: 'table', prompt: '들은 곡과 특징을 쓰세요.', columns: ['곡 이름', '국악 / 서양 음악', '특징'], cells: [['수제천', '', ''], ['사계 중 봄', '', ''], ['도라지 타령', '', ''], ['작은 별 변주곡', '', '']] },
        { type: 'table', prompt: '‘코끼리’ 특징 확인 결과를 보고, 표에서 지워야 할 특징의 마지막 칸에 ✕ 하세요.', columns: ['항목', '들은 학생 수', '✕'], cells: [['낮은 소리', '21명', ''], ['3박 춤곡', '16명', ''], ['트럼펫', '0명', '']], answer: '트럼펫' },
        { type: 'choice', prompt: '좋은 듣기 습관에 ○ 하세요.', options: ['한 번 듣고 끝내요', '살필 요소를 정해 다시 들어요', '친구 말을 그대로 적어요'], answer: '살필 요소를 정해 다시 들어요' },
        { type: 'short', prompt: '2부에서 들은 곡 가운데 가족에게 들려주고 싶은 곡과 그 특징을 쓰세요.' },
      ],
      easy: {
        note: '국악: 수제천·도라지 타령·대취타. 서양 음악: 봄·작은 별 변주곡·동물의 사육제.',
        items: [
          { type: 'choice', prompt: '「수제천」은?', options: ['국악', '서양 음악'], answer: '국악' },
          { type: 'choice', prompt: '0명이 들은 특징은?', options: ['표에서 지워요', '그대로 둬요'], answer: '표에서 지워요' },
          { type: 'short', prompt: '가장 좋았던 곡을 쓰세요.' },
          { type: 'draw', prompt: '가장 좋았던 곡을 듣고 떠오른 장면을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '막대 끝에 값이 보이고, 맞게 넣은 카드에 초록 테두리가 보여요.',
      base: '눈금과 카드를 스스로 확인해요.',
      challenge: '막대 값이 확인한 뒤에야 보이고, 카드가 섞여 나와요. 습관 고르기는 맞힌 뒤에야 테두리가 보여요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 막대 높이를 ‘좋아하는 친구 수’로 읽는다 → 제목과 세로 축 이름을 먼저 읽는다. ② 0인 막대를 그리지 못한다 → 0도 값이라는 것을 알려 준다. ③ 곡 이름과 특징이 섞인다 → 칠판 곡 목록 옆에 차시마다 한 일을 적어 둔다. 그래프 수는 예시이므로 실제 학급의 확인 결과로 바꾸어 써도 좋다.',
  }));

  // ───────────────────────── 21차시 (핵심) ─────────────────────────
  lessons.push(Object.assign(head(21, S3), {
    title: '「아침 기분」과 「산왕의 궁전」 분위기 견주고 까닭 찾기',
    objective: '노랫말이 없는 두 곡을 듣고 분위기를 말한 뒤, 그 분위기를 만든 빠르기·셈여림·악기 소리를 찾아 까닭으로 말할 수 있다.',
    safety: MOVE_SAFE,
    illustration: {
      prompt: ILL('a calm sunrise over green hills with a flute player on one side, and a dark mountain cave with tiptoeing trolls on the other side'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'sun', x: 100, y: 70, s: 0.9 }, { motif: 'cloud', x: 230, y: 50 }, { motif: 'mountain', x: 360, y: 206 },
        { motif: 'hills', y: 214 }, { motif: 'tree', x: 70, y: 216 }, { motif: 'bird', x: 180, y: 96 },
        { motif: 'text', x: 240, y: 150, text: '노랫말 없이도 기분이 달라요', size: 21 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"오늘 들을 두 곡에는 노랫말이 하나도 없어요. 그런데도 듣고 나면 기분이 달라질까요?" 「아침 기분」 첫 부분과 「산왕의 궁전」 첫 부분을 30초씩 들려준다. "두 곡을 들을 때 기분이 같았나요?" 하고 묻고, 노랫말이 없어도 분위기가 다르게 느껴진다는 대답을 칠판에 적는다. "그럼 무엇이 분위기를 만들었을까요?"로 활동을 연다.',
        student: '노랫말이 없는 두 곡을 듣고, 듣는 동안 기분이 어땠는지 떠올려 봅시다.',
        demo: { tool: 'keyboard', options: { from: '낮은솔', to: '높은도' }, sequence: [{ notes: ['솔', '미', '레', '도'] }, { notes: ['낮은라', '낮은시', '도', '레', '미'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 두 곡의 첫 가락 따라 치고 몸으로 느끼기', minutes: 12, tool: 'keyboard',
            teacher: '"두 곡의 첫 가락을 따라 쳐 봐요. 「아침 기분」은 높은 쪽에서 천천히, 「산왕의 궁전」은 낮은 쪽에서 살금살금 시작해요." 따라 친 뒤, 「산왕의 궁전」을 들으며 제자리에서 살금살금 걷다가 곡이 빨라지면 발걸음도 빨라지게 한다. 걸음이 곡보다 먼저 빨라지는 학생에게 "곡이 정말 빨라졌나요? 다시 귀 기울여 봐요"라고 말한다.',
            task: '두 곡의 첫 가락을 듣고 따라 친 뒤, 「산왕의 궁전」에 맞춰 제자리에서 걸어요. 곡이 빨라지는 만큼만 걸음을 빠르게 해요.',
            levels: mel('낮은솔', '높은도'),
            items: [
              { prompt: '「아침 기분」 첫 가락이에요. 가락 듣기를 누르고 따라 쳐 보세요.', toolOptions: { melody: ['솔', '미', '레', '도', '레', '미'], tempo: 72 }, target: { notes: ['솔', '미', '레', '도', '레', '미'] }, difficulty: 0.15 },
              { prompt: '「산왕의 궁전」 첫 가락이에요. 낮은 쪽에서 시작해요. 듣고 따라 쳐 보세요.', toolOptions: { melody: ['낮은라', '낮은시', '도', '레', '미', '도', '미'], tempo: 96 }, target: { notes: ['낮은라', '낮은시', '도', '레', '미', '도', '미'] }, difficulty: 0.25 },
              { prompt: '곡 끝 무렵처럼 같은 가락을 아주 빠르게 들려줘요. 듣고 따라 쳐 보세요.', toolOptions: { melody: ['낮은라', '낮은시', '도', '레', '미', '도', '미'], tempo: 170 }, target: { notes: ['낮은라', '낮은시', '도', '레', '미', '도', '미'] }, reveal: 'after-check', difficulty: 0.35 },
              { prompt: '「산왕의 궁전」을 들으며 제자리에서 살금살금 걷다가, 곡이 빨라지고 세지는 만큼 걸음을 바꾸어요.', free: true, talk: true, doneLabel: '다 걸었어요', difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 분위기를 만든 까닭 찾기', minutes: 15, tool: 'mindmap',
            teacher: '"「아침 기분」은 상쾌하고, 「산왕의 궁전」은 조마조마하다는 친구가 많았어요. 노랫말이 없는데 왜 그렇게 느꼈을까요?" ‘노랫말이 밝아서’라고 말하는 학생에게 "이 곡에 노랫말이 있었나요?" 하고 되묻는다. 까닭은 빠르기·셈여림·악기 소리처럼 귀로 들은 것으로 말하게 한다.',
            task: '두 곡에서 들린 것을 나누고, 분위기와 그 까닭을 이은 뒤, 분위기를 만드는 것만 골라요.',
            levels: cardsLv(),
            items: [
              { prompt: '들린 것을 두 곡에 나누어 넣어 보세요.', toolOptions: { topic: '두 곡에서 들린 것', slots: ['아침 기분', '산왕의 궁전'], cards: ['플루트가 부드럽게 노래해요', '가락이 천천히 높게 퍼져요', '낮은 악기가 살금살금 시작해요', '점점 빨라지고 세져요'] }, target: { sort: { '아침 기분': ['플루트가 부드럽게 노래해요', '가락이 천천히 높게 퍼져요'], '산왕의 궁전': ['낮은 악기가 살금살금 시작해요', '점점 빨라지고 세져요'] } }, difficulty: 0.15,
                hints: ['두 곡의 첫 가락을 떠올려 보세요. 어느 곡이 높은 쪽에서, 어느 곡이 낮은 쪽에서 시작했는지 견주어요.', '넣은 카드 가운데 끝으로 갈수록 바뀌는 소리를 말한 카드가 어느 곡에 들어갔는지 보세요.', '플루트와 천천히 높게 퍼지는 가락은 「아침 기분」, 낮게 살금살금 시작해 점점 빨라지고 세지는 것은 「산왕의 궁전」이에요.'] },
              { prompt: '분위기와 그 분위기를 만든 까닭을 이어 보세요.', toolOptions: { mode: 'match', topic: '분위기와 까닭', slots: [{ id: 'calm', label: '상쾌하고 평화로워요' }, { id: 'tense', label: '조마조마해요' }, { id: 'wild', label: '정신없이 쫓기는 것 같아요' }], cards: ['높은 가락이 부드럽고 느리게 흘러요', '낮은 소리가 여리게 살금살금 걸어요', '아주 빠르고 세게 몰아쳐요'] }, target: { match: { calm: '높은 가락이 부드럽고 느리게 흘러요', tense: '낮은 소리가 여리게 살금살금 걸어요', wild: '아주 빠르고 세게 몰아쳐요' } }, difficulty: 0.25,
                hints: ['분위기마다 그 기분이 들 때의 빠르기와 셈여림을 떠올려 보세요. 마음이 편할 때와 쫓길 때의 걸음은 어떻게 다른가요?', '이은 카드 가운데 여리게 걷는 소리와 세게 몰아치는 소리가 바뀌었는지 보세요.', '평화로움은 부드럽고 느린 높은 가락, 조마조마함은 여린 살금살금, 쫓기는 느낌은 빠르고 센 소리예요.'] },
              { prompt: '이 두 곡의 분위기를 만든 것만 골라 보세요.', toolOptions: { mode: 'pick', topic: '분위기를 만든 것', basket: '분위기를 만들어요', cards: ['빠르기', '셈여림', '악기 소리', '노랫말', '곡 제목의 글자 수'] }, target: { pick: ['빠르기', '셈여림', '악기 소리'] }, reveal: 'after-check', difficulty: 0.25,
                predict: { q: '노랫말이 없는 곡도 분위기가 있을까요?', options: ['없어요', '있어요'], answer: 1 },
                conclude: '분위기는 노랫말만으로 생기지 않아요. 빠르기·셈여림·악기 소리가 분위기를 만들어요.',
                hints: ['두 곡에서 귀로 들을 수 있었던 것만 떠올려 보세요. 이 곡에 없는 것은 분위기를 만들 수 없어요.', '고른 카드 가운데 이 두 곡에 없던 것이나, 소리가 아닌 것이 있는지 보세요.', '빠르기·셈여림·악기 소리를 골라요. 두 곡에는 노랫말이 없고, 제목 글자 수는 소리가 아니에요.'] },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 두 곡의 분위기가 다르게 느껴진 까닭을 한 사람이 하나씩 말해 볼까요? 단, 귀로 들은 것으로 말해요." 몇 명이 말한다. 다음 시간에는 같은 가락의 빠르기와 높낮이를 바꾸어 분위기가 바뀌는지 알아본다고 알린다. 출구 2번에서 ‘노랫말’을 고른 학생에게는 오늘 들은 두 곡에 노랫말이 있었는지 떠올리게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '「산왕의 궁전」이 조마조마한 까닭', basket: '까닭이에요', cards: ['낮은 소리로 살금살금 시작해요', '점점 빨라지고 세져요', '노랫말이 무서워요'] }, prompt: '「산왕의 궁전」이 조마조마하게 느껴지는 까닭만 골라 보세요.', target: { pick: ['낮은 소리로 살금살금 시작해요', '점점 빨라지고 세져요'] }, difficulty: 0.2 },
          { type: 'choice', prompt: '노랫말이 없는 곡의 분위기는 무엇으로 생길까요?', options: ['곡 제목으로만 생겨요', '빠르기·셈여림·악기 소리로 생겨요', '분위기가 생기지 않아요'], answer: 1, difficulty: 0.15, explain: '노랫말이 없어도 빠르기, 셈여림, 악기 소리가 분위기를 만들어요.' },
          { type: 'mood', prompt: '두 곡 가운데 하나를 들을 때의 내 마음은 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '분위기와 그 까닭',
      items: [
        { type: 'table', prompt: '두 곡의 분위기와 그렇게 느낀 까닭을 쓰세요.', columns: ['곡 이름', '분위기', '까닭(빠르기·셈여림·악기)'], cells: [['아침 기분', '', ''], ['산왕의 궁전', '', '']] },
        { type: 'choice', prompt: '「아침 기분」이 평화롭게 느껴지는 까닭에 ○ 하세요.', options: ['노랫말이 밝아서', '높은 가락이 부드럽고 느리게 흘러서', '아주 세게 몰아쳐서'], answer: '높은 가락이 부드럽고 느리게 흘러서' },
        { type: 'draw', prompt: '「산왕의 궁전」이 점점 빨라지고 세지는 모습을 선이나 그림으로 나타내세요.' },
        { type: 'short', prompt: '노랫말이 없는 곡에도 분위기가 있는 까닭을 쓰세요.' },
      ],
      easy: {
        note: '분위기를 만드는 것: 빠르기, 셈여림(세게·여리게), 악기 소리.',
        items: [
          { type: 'choice', prompt: '「아침 기분」은?', options: ['평화로워요', '조마조마해요'], answer: '평화로워요' },
          { type: 'choice', prompt: '「산왕의 궁전」은 끝으로 갈수록?', options: ['빨라져요', '느려져요'], answer: '빨라져요' },
          { type: 'choice', prompt: '두 곡에 노랫말이 있나요?', options: ['없어요', '있어요'], answer: '없어요' },
          { type: 'draw', prompt: '「아침 기분」을 듣고 떠오른 장면을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '가락을 듣는 동안 건반이 빛나고, 맞게 넣은 카드에 초록 테두리가 보여요.',
      base: '계이름을 켜고 끌 수 있고, 카드를 스스로 확인해요.',
      challenge: '계이름 없는 건반에서 귀로만 따라 치고, 카드가 섞여 나와요. 고르기는 맞힌 뒤에야 테두리가 보여요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 분위기의 까닭을 ‘노랫말’이나 ‘제목’에서 찾는다 → 노랫말이 없는 곡이라는 것을 다시 짚고 귀로 들은 것을 묻는다. ② ‘무서워요’처럼 기분만 말하고 까닭을 말하지 못한다 → ‘빠르기는? 세기는? 악기는?’ 세 물음을 칠판에 붙인다. ③ 걸음 활동에서 뛰어다닌다 → 제자리 걸음 약속을 먼저 한다. 「산왕의 궁전」은 끝으로 갈수록 크게 울리므로 음량을 미리 줄여 둔다.',
  }));

  // ───────────────────────── 22차시 (연습) ─────────────────────────
  lessons.push(Object.assign(head(22, S3), {
    title: '같은 가락을 빠르기·높낮이 바꿔 치며 분위기 바꾸기',
    objective: '같은 가락을 빠르기와 높낮이를 바꾸어 치고 들으며, 무엇을 바꾸면 분위기가 어떻게 달라지는지 말할 수 있다.',
    safety: MOVE_SAFE,
    illustration: {
      prompt: ILL('one paper melody ribbon splitting into two paths, one going up into a bright sunny sky with dancing children and one going down into a quiet blue night'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'sun', x: 100, y: 64, s: 0.8 }, { motif: 'moon', x: 390, y: 64 }, { motif: 'star', x: 330, y: 90, s: 0.5 },
        { motif: 'hills', y: 214 }, { motif: 'house', x: 240, y: 214 }, { motif: 'tree', x: 420, y: 216 },
        { motif: 'text', x: 240, y: 150, text: '같은 가락, 다른 기분', size: 24 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"이 가락을 두 번 들려줄게요. 같은 가락일까요, 다른 가락일까요?" 같은 가락을 아주 느리게 한 번, 아주 빠르게 한 번 들려준다. 대부분 ‘같은 가락’이라고 하면 "그럼 기분도 같았나요?"를 묻는다. 같은 가락이라도 빠르기만 바꾸면 분위기가 달라진다는 것을 오늘 직접 쳐 보며 알아본다고 알린다.',
        student: '같은 가락을 두 번 듣고, 두 번의 기분이 같았는지 말해 봅시다.',
        demo: { tool: 'keyboard', options: { from: '낮은솔', to: '높은도', tempo: 60 }, sequence: [{ notes: ['도', '미', '솔'] }, { notes: ['도', '미', '솔', '미', '도'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 같은 가락을 바꾸어 치고 걸어 보기', minutes: 14, tool: 'keyboard',
            teacher: '"‘도 미 솔 미 도’ 가락을 빠르기와 높낮이를 바꾸어 들려줄게요. 따라 친 뒤 그 빠르기로 제자리에서 걸어 보세요." 걷고 나서 "어느 쪽이 무겁고, 어느 쪽이 들떴나요?"를 묻는다. 계이름이 바뀌었다고 여기는 학생에게 첫 두 가락의 계이름 줄을 나란히 보여 준다.',
            task: '같은 가락을 빠르기와 높낮이를 바꾸어 듣고 따라 친 뒤, 그 빠르기로 제자리에서 걸어 보며 기분이 어떻게 다른지 느껴요.',
            levels: mel('낮은솔', '높은도'),
            items: [
              { prompt: '‘도 미 솔 미 도’를 아주 느리게 들려줘요. 듣고 따라 쳐 보세요.', toolOptions: { melody: ['도', '미', '솔', '미', '도'], tempo: 56 }, target: { notes: ['도', '미', '솔', '미', '도'] }, difficulty: 0.1 },
              { prompt: '같은 가락을 아주 빠르게 들려줘요. 계이름이 바뀌었는지 생각하며 따라 쳐 보세요.', toolOptions: { melody: ['도', '미', '솔', '미', '도'], tempo: 176 }, target: { notes: ['도', '미', '솔', '미', '도'] }, difficulty: 0.2 },
              { prompt: '같은 모양의 가락을 낮은 쪽으로 옮겨 느리게 들려줘요. 듣고 따라 쳐 보세요.', toolOptions: { melody: ['낮은솔', '낮은시', '레', '낮은시', '낮은솔'], tempo: 60 }, target: { notes: ['낮은솔', '낮은시', '레', '낮은시', '낮은솔'] }, reveal: 'after-check', difficulty: 0.3 },
              { prompt: '느린 가락에는 무겁게, 빠른 가락에는 가볍게 제자리에서 걸어 보고, 어느 쪽이 더 들떴는지 짝과 말해요.', free: true, talk: true, doneLabel: '다 걸었어요', difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 무엇을 바꾸면 분위기가 바뀔까', minutes: 13, tool: 'mindmap',
            teacher: '"같은 가락인데 기분이 달라졌지요? 바꾼 것과 분위기를 이어 보세요." 이은 뒤 "가락의 계이름은 그대로였는데 무엇이 바뀌었나요?"를 묻는다. 건반 색이나 치는 사람을 고르는 학생에게는 눈을 감고 들어도 그 차이가 들리는지 묻는다.',
            task: '바꾼 방법과 달라진 분위기를 잇고, 분위기를 바꾸는 것만 골라요.',
            levels: cardsLv(),
            items: [
              { prompt: '같은 가락을 이렇게 바꾸었어요. 바꾼 방법과 분위기를 이어 보세요.', toolOptions: { mode: 'match', topic: '바꾼 방법과 분위기', slots: [{ id: 'slowlow', label: '느리고 낮게' }, { id: 'fasthigh', label: '빠르고 높게' }, { id: 'slowsoft', label: '느리고 여리게' }, { id: 'stepstrong', label: '세게 또박또박 걷듯이' }], cards: ['무겁고 어두워요', '밝고 들떠요', '포근하고 잔잔해요', '씩씩하고 당당해요'] }, target: { match: { slowlow: '무겁고 어두워요', fasthigh: '밝고 들떠요', slowsoft: '포근하고 잔잔해요', stepstrong: '씩씩하고 당당해요' } }, difficulty: 0.25,
                hints: ['활동 1에서 걸어 본 느낌을 떠올려요. 느릴 때와 빠를 때, 낮을 때와 높을 때 몸이 어땠는지 견주어요.', '이은 카드 가운데 ‘느리게’가 들어간 두 칸이 서로 바뀌었는지 보세요. 낮게와 여리게는 느낌이 달라요.', '느리고 낮게는 무겁고 어둡게, 빠르고 높게는 밝고 들뜨게, 느리고 여리게는 포근하게, 세게 또박또박은 씩씩하게 들려요.'] },
              { prompt: '같은 가락의 분위기를 바꾸는 것만 골라 보세요.', toolOptions: { mode: 'pick', topic: '분위기를 바꾸는 것', basket: '분위기가 바뀌어요', cards: ['빠르기를 바꿔요', '높낮이를 옮겨요', '셈여림을 바꿔요', '건반 색을 바꿔요', '치는 사람 이름을 바꿔요'] }, target: { pick: ['빠르기를 바꿔요', '높낮이를 옮겨요', '셈여림을 바꿔요'] }, reveal: 'after-check', difficulty: 0.2,
                predict: { q: '계이름이 같은 가락이면 분위기도 늘 같을까요?', options: ['네, 같아요', '아니요, 달라질 수 있어요'], answer: 1 },
                conclude: '계이름이 같아도 빠르기·높낮이·셈여림을 바꾸면 분위기가 달라져요.',
                hints: ['눈을 감고 들어도 차이가 들리는 것만 분위기를 바꿀 수 있어요. 카드마다 소리가 바뀌는지 생각해요.', '고른 카드 가운데 소리는 그대로이고 눈으로만 보이는 것이 있는지 보세요.', '빠르기, 높낮이, 셈여림을 골라요. 건반 색과 이름은 소리를 바꾸지 않아요.'] },
              { prompt: '‘도 미 솔 미 도’를 자장가처럼 바꾸려면 어떻게 칠지 알맞은 것만 골라 보세요.', toolOptions: { mode: 'pick', topic: '자장가로 바꾸기', basket: '자장가처럼 쳐요', cards: ['느리게 쳐요', '여리게 쳐요', '빠르게 쳐요', '세게 또박또박 쳐요'] }, target: { pick: ['느리게 쳐요', '여리게 쳐요'] }, difficulty: 0.15,
                hints: ['아기를 재울 때 엄마가 어떻게 움직이고 어떻게 말하는지 떠올려, 그 모습과 닮은 치는 방법을 골라요.', '고른 카드 가운데 아기를 깨울 것 같은 방법이 있는지 보세요.', '느리게, 여리게 치면 자장가처럼 들려요. 빠르거나 센 소리는 잠을 깨워요.'] },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"자장가를 만든다면 이 가락을 어떻게 바꾸면 좋을까요?" 짝과 이야기하게 한 뒤 몇 명이 말한다. 다음 시간에는 우리 국악 곡들의 분위기를 견주어 듣는다고 알린다. 출구 2번에서 ‘같아요’를 고른 학생과는 오늘 친 두 빠르기로 다시 걸어 본다.',
        exitTicket: [
          { type: 'tool', tool: 'keyboard', options: { from: '도', to: '높은도', melody: ['솔', '미', '도', '미', '솔'], tempo: 168 }, prompt: '가락 듣기를 누르고 빠르게 들려주는 가락을 따라 쳐 보세요.', target: { notes: ['솔', '미', '도', '미', '솔'] }, difficulty: 0.2 },
          { type: 'choice', prompt: '같은 가락을 아주 느리고 낮게 치면 분위기가 어떻게 될까요?', options: ['밝고 들떠요', '무겁고 어두워요', '아무것도 바뀌지 않아요'], answer: 1, difficulty: 0.2, explain: '느리고 낮게 치면 무겁고 어두운 분위기가 돼요.' },
          { type: 'mood', prompt: '같은 가락으로 분위기를 바꾸어 보니 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '같은 가락, 다른 분위기',
      items: [
        { type: 'table', prompt: '‘도 미 솔 미 도’를 바꾸어 들은 뒤 분위기를 쓰세요.', columns: ['바꾼 방법', '분위기'], cells: [['아주 느리게', ''], ['아주 빠르게', ''], ['낮은 쪽으로 옮겨서', '']] },
        { type: 'choice', prompt: '분위기를 바꾸지 않는 것에 ○ 하세요.', options: ['빠르기', '셈여림', '건반 색'], answer: '건반 색' },
        { type: 'blank', prompt: '빈칸을 채우세요.', text: '계이름이 같아도 ___를 바꾸면 분위기가 달라져요.', answer: '(예) 빠르기' },
        { type: 'short', prompt: '이 가락으로 자장가를 만든다면 어떻게 바꿀지 쓰세요.' },
      ],
      easy: {
        note: '느리게·낮게 → 무겁게, 빠르게·높게 → 밝게.',
        items: [
          { type: 'choice', prompt: '빠르고 높게 치면?', options: ['밝아요', '무거워요'], answer: '밝아요' },
          { type: 'choice', prompt: '느리고 여리게 치면?', options: ['포근해요', '들떠요'], answer: '포근해요' },
          { type: 'choice', prompt: '빠르게 쳐도 계이름은?', options: ['같아요', '바뀌어요'], answer: '같아요' },
          { type: 'draw', prompt: '느린 가락과 빠른 가락을 걸음으로 나타낸 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '가락을 듣는 동안 건반이 빛나고, 맞게 이은 카드에 초록 테두리가 보여요.',
      base: '계이름을 켜고 끌 수 있고, 카드를 스스로 확인해요.',
      challenge: '계이름 없는 건반에서 귀로만 따라 치고, 카드가 섞여 나와요. 고르기는 맞힌 뒤에야 테두리가 보여요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 빠르게 들으면 다른 가락이라고 여긴다 → 계이름 줄을 나란히 놓고 견준다. ② ‘낮게’와 ‘여리게’를 같은 것으로 여긴다 → 낮지만 세게, 높지만 여리게 쳐서 들려준다. ③ 걸음이 뜀박질이 된다 → 빠른 가락은 발끝으로 가볍게 걷기로 약속한다. 낮은 쪽 가락은 오른손 엄지가 닿지 않으면 두 손으로 쳐도 된다.',
  }));

  // ───────────────────────── 23차시 (확장) ─────────────────────────
  lessons.push(Object.assign(head(23, S3), {
    title: '국악 세 곡의 분위기 견주고 리듬으로 흉내 내기',
    objective: '「수제천」, 사물놀이, 「새야 새야」를 듣고 분위기를 견주어 말하며, 한 곡의 분위기가 드러나게 리듬을 골라 치거나 지을 수 있다.',
    safety: MOVE_SAFE,
    illustration: {
      prompt: ILL('three paper panels: a stately royal court ensemble, a lively circle of farmers drumming, and a lonely bird on a branch over a quiet field'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'cloud', x: 90, y: 52 }, { motif: 'sun', x: 240, y: 58, s: 0.7 }, { motif: 'bird', x: 390, y: 90 },
        { motif: 'hills', y: 214 }, { motif: 'house', x: 90, y: 214 }, { motif: 'tree', x: 400, y: 216 },
        { motif: 'text', x: 240, y: 150, text: '국악도 분위기가 여러 가지', size: 22 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"국악은 모두 느리고 비슷하다고 생각하는 친구가 있어요. 정말 그럴까요?" 세 곡을 20초씩 이어서 들려준다. "세 곡이 같은 분위기였나요?" 하고 묻고, 엄숙함·흥겨움·구슬픔처럼 학생이 말한 낱말을 칠판에 세 칸으로 적는다.',
        student: '국악 세 곡을 이어 듣고, 곡마다 어떤 기분이 드는지 말해 봅시다.',
        demo: { tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 1 }, sequence: [{ rhythm: ['h', 'h'] }, { rhythm: ['e', 'e', 'e', 'e', 'e', 'e', 'q'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 세 곡의 분위기와 까닭 나누기', minutes: 12, tool: 'mindmap',
            teacher: '"세 곡에 분위기 카드와 까닭 카드를 하나씩 넣어요." 곡마다 15초씩 다시 들려준다. ‘국악이니까 다 엄숙하다’며 한 곳에 몰아넣는 학생에게 "사물놀이를 들을 때도 엄숙했나요? 몸이 어땠나요?"를 묻는다.',
            task: '세 곡을 다시 들으며 분위기 카드와 그 까닭 카드를 알맞은 곡에 넣고, 국악에 대해 맞는 말만 골라요.',
            levels: cardsLv(),
            items: [
              { prompt: '분위기 카드와 까닭 카드를 세 곡에 나누어 넣어 보세요.', toolOptions: { topic: '국악 세 곡', slots: ['수제천', '사물놀이', '새야 새야'], cards: ['엄숙하고 장엄해요', '아주 느리고 소리를 길게 끌어요', '흥겹고 들썩여요', '꽹과리가 빠르게 몰아쳐요', '구슬프고 애틋해요', '느린 가락이 흐느끼듯 낮게 이어져요'] }, target: { sort: { 수제천: ['엄숙하고 장엄해요', '아주 느리고 소리를 길게 끌어요'], 사물놀이: ['흥겹고 들썩여요', '꽹과리가 빠르게 몰아쳐요'], '새야 새야': ['구슬프고 애틋해요', '느린 가락이 흐느끼듯 낮게 이어져요'] } }, difficulty: 0.3,
                hints: ['먼저 곡마다 빠른지 느린지를 정하고, 느린 두 곡은 소리가 길게 끌리는지 낮게 흐느끼는지로 나누어요.', '넣은 카드 가운데 느린 곡에 빠른 소리를 말한 카드가 들어갔는지 보세요.', '「수제천」은 엄숙함과 길게 끄는 소리, 사물놀이는 흥겨움과 꽹과리, 「새야 새야」는 구슬픔과 흐느끼는 가락이에요.'] },
              { prompt: '국악에 대해 바르게 말한 것만 골라 보세요.', toolOptions: { mode: 'pick', topic: '국악의 분위기', basket: '바른 말이에요', cards: ['국악도 곡마다 분위기가 달라요', '빠르고 흥겨운 국악도 있어요', '국악은 모두 느리고 엄숙해요', '국악은 모두 슬퍼요'] }, target: { pick: ['국악도 곡마다 분위기가 달라요', '빠르고 흥겨운 국악도 있어요'] }, reveal: 'after-check', difficulty: 0.2,
                predict: { q: '국악은 모두 같은 분위기일까요?', options: ['네, 같아요', '아니요, 달라요'], answer: 1 },
                conclude: '국악도 곡마다 빠르기와 악기가 달라서 엄숙하기도, 흥겹기도, 구슬프기도 해요.',
                hints: ['오늘 들은 세 곡을 떠올리며, ‘모두’라는 말이 정말 세 곡 모두에 맞는지 견주어 보세요.', '고른 카드 가운데 세 곡 가운데 하나라도 맞지 않는 말이 있는지 보세요.', '곡마다 분위기가 다르다는 카드와 흥겨운 국악도 있다는 카드가 맞아요. 사물놀이는 느리지도 슬프지도 않아요.'] },
              { prompt: '「수제천」이 엄숙하게 느껴지는 까닭만 골라 보세요.', toolOptions: { mode: 'pick', topic: '「수제천」이 엄숙한 까닭', basket: '까닭이에요', cards: ['아주 느리게 흘러가요', '소리를 길게 끌어요', '꽹과리가 빠르게 몰아쳐요', '노랫말이 엄숙해요'] }, target: { pick: ['아주 느리게 흘러가요', '소리를 길게 끌어요'] }, difficulty: 0.2,
                hints: ['「수제천」을 떠올리며 곡에서 실제로 들린 소리만 까닭으로 골라요.', '고른 카드 가운데 이 곡에 없는 악기나, 이 곡에 없는 것이 있는지 보세요.', '아주 느린 빠르기와 길게 끄는 소리가 까닭이에요. 꽹과리는 사물놀이 악기이고, 「수제천」은 노랫말 없는 기악곡이에요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 분위기에 맞는 리듬 치고 짓기', minutes: 15, tool: 'keyboard',
            teacher: '"「수제천」처럼 엄숙한 리듬은 긴 음표로 느리게, 사물놀이처럼 흥겨운 리듬은 짧은 음표로 빠르게 쳐요." 리듬을 놓은 뒤 무릎장단으로 쳐 본다. 지은 리듬을 짝이 듣고 어느 곡 흉내인지 맞히게 하고, 맞히지 못하면 "긴 음표와 짧은 음표 가운데 무엇을 더 썼나요?"를 묻는다.',
            task: '리듬을 듣고 블록으로 놓은 뒤 무릎장단으로 쳐요. 「새야 새야」처럼 구슬픈 리듬을 지어 짝에게 들려주고 맞혀 보게 해요.',
            levels: rhy(4, 2),
            items: [
              { prompt: '「수제천」처럼 엄숙하고 느린 리듬이에요. 듣고 블록으로 놓아 보세요.', toolOptions: { pattern: ['h', 'h', 'h', 'q', 'qr'], tempo: 50 }, target: { rhythm: ['h', 'h', 'h', 'q', 'qr'] }, difficulty: 0.15 },
              { prompt: '사물놀이처럼 흥겨운 리듬이에요. 듣고 블록으로 놓아 보세요.', toolOptions: { pattern: ['e', 'e', 'e', 'e', 'q', 'q', 'e', 'e', 'e', 'e', 'e', 'e', 'q'], tempo: 132 }, target: { rhythm: ['e', 'e', 'e', 'e', 'q', 'q', 'e', 'e', 'e', 'e', 'e', 'e', 'q'] }, difficulty: 0.3 },
              { prompt: '「새야 새야」처럼 구슬픈 리듬을 지어요. 두 마디를 4박씩 채우고 2분음표와 쉼표를 꼭 넣어요.', target: { beats: true, use: ['h', 'qr'], selfCheck: ['느리고 여리게 쳐 보았어요', '쉼표에서 숨을 쉬듯 멈추었어요'] }, difficulty: 0.25 },
              { prompt: '지은 리듬을 무릎장단으로 짝에게 들려주고, 짝이 어느 곡 흉내인지 맞혀요.', free: true, talk: true, difficulty: 0.15 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"세 곡 가운데 가장 마음에 남는 곡과 그 분위기를 말해 볼까요?" 몇 명이 말하게 하고, 국악에도 여러 분위기가 있다는 것을 학생 말로 정리하게 한다. 다음 시간에는 곡의 분위기를 몸짓과 그림으로 나타낸다고 알린다. 출구 2번을 틀린 학생에게는 사물놀이를 10초 다시 들려준다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '국악 두 곡', slots: ['수제천', '사물놀이'], cards: ['궁중에서 연주하던 엄숙한 음악이에요', '장구가 잘게 쪼개 흥을 돋워요', '피리가 길게 소리를 끌어요'] }, prompt: '카드를 두 곡에 나누어 넣어 보세요.', target: { sort: { 수제천: ['궁중에서 연주하던 엄숙한 음악이에요', '피리가 길게 소리를 끌어요'], 사물놀이: ['장구가 잘게 쪼개 흥을 돋워요'] } }, difficulty: 0.2 },
          { type: 'choice', prompt: '사물놀이의 분위기로 알맞은 것은?', options: ['구슬프고 애틋해요', '흥겹고 들썩여요', '엄숙하고 고요해요'], answer: 1, difficulty: 0.15, explain: '꽹과리와 장구가 빠르게 몰아쳐 흥겹고 들썩이는 분위기예요.' },
          { type: 'mood', prompt: '국악 세 곡을 견주어 들어 보니 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '국악 세 곡의 분위기',
      items: [
        { type: 'table', prompt: '세 곡의 분위기와 까닭을 쓰세요.', columns: ['곡 이름', '분위기', '까닭'], cells: [['수제천', '', ''], ['사물놀이', '', ''], ['새야 새야', '', '']] },
        { type: 'figure', prompt: '이 리듬은 어느 곡 흉내에 더 어울리는지 쓰세요.', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 2 }, figures: [{ state: { rhythm: ['h', 'h', 'h', 'q', 'qr'] }, caption: '어울리는 곡: ________' }], answer: '수제천(긴 음표로 느리고 엄숙해요)' },
        { type: 'choice', prompt: '맞는 말에 ○ 하세요.', options: ['국악은 모두 느려요', '국악도 곡마다 분위기가 달라요', '국악은 모두 슬퍼요'], answer: '국악도 곡마다 분위기가 달라요' },
        { type: 'short', prompt: '내가 지은 구슬픈 리듬을 ‘따·따따·따-’로 쓰고, 어떻게 쳤는지 쓰세요.' },
      ],
      easy: {
        note: '「수제천」 = 엄숙, 사물놀이 = 흥겨움, 「새야 새야」 = 구슬픔.',
        items: [
          { type: 'choice', prompt: '흥겨운 곡은?', options: ['사물놀이', '수제천'], answer: '사물놀이' },
          { type: 'choice', prompt: '「수제천」은?', options: ['느려요', '빨라요'], answer: '느려요' },
          { type: 'choice', prompt: '국악은 모두 같은 분위기인가요?', options: ['아니요', '네'], answer: '아니요' },
          { type: 'draw', prompt: '세 곡 가운데 하나를 듣고 떠오른 장면을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞게 넣은 카드에 초록 테두리가 보이고, 리듬 블록 아래에 박 수가 보여요.',
      base: '카드와 박 수를 스스로 확인해요.',
      challenge: '카드가 섞여 나오고, 리듬 블록에 8분쉼표·2분쉼표·점2분음표가 더 나와요.',
    },
    teacherNotes: '자주 보이는 어려움: ① ‘국악은 느리다’는 생각으로 사물놀이 카드까지 엄숙 쪽에 넣는다 → 사물놀이를 들으며 몸이 어떻게 움직였는지 묻는다. ② 구슬픈 리듬에 짧은 음표만 쓴다 → 쉼표를 넣고 여리게 쳐 보게 한다. ③ 무릎장단 소리가 너무 크다 → 손바닥을 둥글게 오므려 친다. 「새야 새야」는 노랫말을 싣지 않고 가락만 들려준다.',
  }));

  // ───────────────────────── 24차시 (핵심) ─────────────────────────
  lessons.push(Object.assign(head(24, S3), {
    title: '곡의 분위기를 가락과 몸짓으로 나타내기',
    objective: '곡의 분위기에 맞게 짧은 가락을 짓고, 그 분위기를 만든 요소가 드러나는 몸짓을 골라 나타낼 수 있다.',
    safety: MOVE_SAFE,
    illustration: {
      prompt: ILL('children stretching arms like a rising sun, swaying gently like a lullaby and marching with knees high, with paper music notes floating around them'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'sun', x: 410, y: 60, s: 0.8 }, { motif: 'moon', x: 80, y: 60 }, { motif: 'cloud', x: 240, y: 46 },
        { motif: 'hills', y: 214 }, { motif: 'flower', x: 150, y: 224 }, { motif: 'tree', x: 400, y: 216 },
        { motif: 'text', x: 240, y: 150, text: '소리를 몸으로, 몸을 소리로', size: 22 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"브람스의 「자장가」를 들으며 몸을 움직여 볼까요? 아무렇게나 움직이지 말고 곡의 빠르기와 세기를 따라가요." 30초 들려준 뒤 "왜 천천히 흔들었나요?"를 묻는다. 곡이 느리고 여려서라는 대답을 기다려, 표현은 마음대로 하되 곡에서 들은 것을 담아야 한다고 짚는다.',
        student: '「자장가」를 들으며 곡의 빠르기와 세기에 맞춰 몸을 움직여 봅시다.',
        demo: { tool: 'keyboard', options: { from: '도', to: '높은도' }, sequence: [{ notes: ['도', '레', '미'] }, { notes: ['도', '레', '미', '솔', '높은도'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 분위기에 맞는 가락 짓기', minutes: 14, tool: 'keyboard',
            teacher: '"밝은 아침 가락은 높은 쪽으로 올라가게, 조용한 밤 가락은 낮은 쪽으로 내려오게 지어 봐요." 지은 가락을 두 번 쳐 보고 짝에게 들려주게 한다. 밤 가락을 빠르고 세게 치는 학생에게 "이렇게 치면 잠이 올까요?"를 묻는다.',
            task: '조건에 맞게 다섯 음 가락을 짓고 두 번 쳐 본 뒤, 짝에게 들려주며 어떤 분위기인지 맞혀 보게 해요.',
            levels: mel(),
            items: [
              { prompt: '밝은 아침 가락을 지어요. 도로 시작해 높은도로 끝나는 다섯 음 가락이에요.', target: { compose: { length: 5, startOn: '도', endOn: '높은도' }, selfCheck: ['가락이 높은 쪽으로 올라가게 지었어요', '조금 빠르고 밝게 쳐 보았어요'] }, difficulty: 0.2 },
              { prompt: '조용한 밤 가락을 지어요. 솔로 시작해 도로 끝나는 다섯 음 가락이에요.', target: { compose: { length: 5, startOn: '솔', endOn: '도' }, selfCheck: ['가락이 낮은 쪽으로 내려오게 지었어요', '느리고 여리게 쳐 보았어요'] }, difficulty: 0.2 },
              { prompt: '지은 가락 하나를 짝에게 쳐 주고, 짝이 아침 가락인지 밤 가락인지 맞혀요. 맞힌 까닭도 말해요.', free: true, talk: true, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 곡에 어울리는 몸짓 고르고 해 보기', minutes: 13, tool: 'mindmap',
            teacher: '"곡마다 어울리는 몸짓을 이어 보고, 그 몸짓이 곡의 무엇을 담았는지 말해요." 이은 몸짓을 실제로 해 보게 한다. ‘멋있어서’ 고른 학생에게 "그 몸짓의 빠르기가 곡과 같나요?"를 묻는다.',
            task: '곡과 어울리는 몸짓을 잇고 실제로 해 본 뒤, 분위기를 잘 나타낸 몸짓의 까닭만 골라요.',
            levels: cardsLv(),
            items: [
              { prompt: '곡과 어울리는 몸짓을 이어 보세요.', toolOptions: { mode: 'match', topic: '곡과 몸짓', slots: [{ id: 'lull', label: '브람스 「자장가」' }, { id: 'morn', label: '「아침 기분」' }, { id: 'hall', label: '「산왕의 궁전」' }, { id: 'dch', label: '「대취타」' }], cards: ['팔을 천천히 좌우로 흔들어요', '팔을 해처럼 천천히 위로 펼쳐요', '살금살금 걷다가 점점 빨리 걸어요', '무릎을 높이 들며 당당하게 걸어요'] }, target: { match: { lull: '팔을 천천히 좌우로 흔들어요', morn: '팔을 해처럼 천천히 위로 펼쳐요', hall: '살금살금 걷다가 점점 빨리 걸어요', dch: '무릎을 높이 들며 당당하게 걸어요' } }, difficulty: 0.25,
                hints: ['곡마다 빠르기가 그대로인지 바뀌는지, 가락이 높아지는지, 걸어가는 곡인지 떠올려 몸짓의 움직임과 견주어요.', '이은 카드 가운데 ‘천천히’가 들어간 두 몸짓이 바뀌었는지 보세요. 흔드는 것과 위로 펼치는 것은 달라요.', '「자장가」는 천천히 흔들기, 「아침 기분」은 위로 펼치기, 「산왕의 궁전」은 점점 빨라지는 걸음, 「대취타」는 당당한 걸음이에요.'] },
              { prompt: '친구 몸짓이 분위기를 잘 나타냈다고 말할 수 있는 까닭만 골라 보세요.', toolOptions: { mode: 'pick', topic: '잘 나타낸 몸짓', basket: '잘 나타냈어요', cards: ['곡이 빨라질 때 몸짓도 빨라졌어요', '곡이 여릴 때 몸짓도 작아졌어요', '가장 크게 뛰었어요', '옷이 멋있었어요'] }, target: { pick: ['곡이 빨라질 때 몸짓도 빨라졌어요', '곡이 여릴 때 몸짓도 작아졌어요'] }, reveal: 'after-check', difficulty: 0.2,
                predict: { q: '분위기 표현은 곡과 상관없이 마음대로 해도 될까요?', options: ['네, 마음대로 해요', '아니요, 곡에서 들은 것을 담아요'], answer: 1 },
                conclude: '표현 방법은 여러 가지여도, 곡의 빠르기·셈여림·높낮이를 담아야 분위기가 전해져요.',
                hints: ['몸짓이 곡의 소리와 함께 바뀌었는지를 기준으로 카드를 하나씩 살펴보세요.', '고른 카드 가운데 곡의 소리와 상관없는 것이 있는지 보세요.', '빨라질 때 빨라지고 여릴 때 작아진 몸짓이 곡을 담았어요. 크게 뛴 것과 옷은 곡과 상관없어요.'] },
              { prompt: '곡의 분위기를 몸짓으로 나타내는 차례대로 카드를 놓아 보세요.', toolOptions: { mode: 'order', topic: '몸짓 만들기', cards: ['그 요소에 맞는 몸짓을 정해요', '곡을 듣고 분위기를 말해요', '곡에 맞춰 몸짓을 해요', '분위기를 만든 요소를 찾아요'] }, target: { order: ['곡을 듣고 분위기를 말해요', '분위기를 만든 요소를 찾아요', '그 요소에 맞는 몸짓을 정해요', '곡에 맞춰 몸짓을 해요'] }, difficulty: 0.2,
                hints: ['몸짓을 정하려면 먼저 무엇을 알아야 하는지 거꾸로 생각해 보며 놓아요.', '요소를 찾는 일이 몸짓을 정하는 일보다 앞에 있는지 보세요.', '분위기 말하기 → 요소 찾기 → 몸짓 정하기 → 몸짓 하기 차례예요.'] },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 지은 가락이나 몸짓 가운데 곡의 무엇을 담았는지 말할 수 있는 사람?" 두세 명이 발표하며 그 가락이나 몸짓을 보여 준다. 다음 시간에는 곡이 어디에 쓰이면 어울릴지 이야기한다고 알린다. 출구 2번을 틀린 학생과는 「자장가」를 다시 들으며 팔을 흔들어 본다.',
        exitTicket: [
          { type: 'tool', tool: 'keyboard', options: { from: '도', to: '높은도' }, prompt: '밝은 가락을 지어요. 미로 시작해 높은도로 끝나는 네 음 가락이에요.', target: { compose: { length: 4, startOn: '미', endOn: '높은도' } }, difficulty: 0.2 },
          { type: 'choice', prompt: '「자장가」에 가장 어울리는 몸짓은?', options: ['무릎을 높이 들며 걸어요', '팔을 천천히 좌우로 흔들어요', '빠르게 손뼉을 쳐요'], answer: 1, difficulty: 0.1, explain: '「자장가」는 느리고 여려서 천천히 흔드는 몸짓이 어울려요.' },
          { type: 'mood', prompt: '분위기를 가락과 몸짓으로 나타내 보니 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '분위기를 가락과 몸짓으로',
      items: [
        { type: 'table', prompt: '내가 지은 가락의 계이름을 쓰세요.', columns: ['분위기', '계이름(다섯 음)', '어떻게 쳤나요'], cells: [['밝은 아침', '', ''], ['조용한 밤', '', '']] },
        { type: 'choice', prompt: '「산왕의 궁전」에 어울리는 몸짓에 ○ 하세요.', options: ['살금살금 걷다가 점점 빨리 걸어요', '팔을 천천히 흔들어요', '가만히 서 있어요'], answer: '살금살금 걷다가 점점 빨리 걸어요' },
        { type: 'draw', prompt: '내가 고른 곡에 어울리는 몸짓을 그리고, 곡의 무엇을 담았는지 쓰세요.' },
        { type: 'short', prompt: '친구의 표현 가운데 곡을 잘 담은 것과 그 까닭을 쓰세요.' },
      ],
      easy: {
        note: '밝은 가락 = 올라가게, 조용한 가락 = 내려오게, 느리고 여리게.',
        items: [
          { type: 'choice', prompt: '밝은 아침 가락은?', options: ['올라가요', '내려와요'], answer: '올라가요' },
          { type: 'choice', prompt: '「자장가」 몸짓은?', options: ['천천히 흔들어요', '빨리 뛰어요'], answer: '천천히 흔들어요' },
          { type: 'short', prompt: '내가 지은 가락의 계이름을 쓰세요.' },
          { type: 'draw', prompt: '「아침 기분」에 어울리는 몸짓을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '건반에 계이름이 보이고, 맞게 이은 카드에 초록 테두리가 보여요.',
      base: '계이름을 켜고 끌 수 있고, 카드를 스스로 확인해요.',
      challenge: '계이름 없는 건반에서 가락을 짓고, 카드가 섞여 나와요. 고르기는 맞힌 뒤에야 테두리가 보여요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 몸짓을 곡과 상관없이 재미있게만 한다 → ‘빠르기가 같나요?’를 묻는다. ② 밤 가락을 세게 친다 → 건반을 손가락 끝으로 살짝 누르게 한다. ③ 짝에게 들려주기를 부끄러워한다 → 짝끼리 마주 보지 않고 나란히 앉아 들려주게 한다. 몸짓 활동은 책상 사이 통로에서 제자리로 한다.',
  }));

  // ───────────────────────── 25차시 (연습) ─────────────────────────
  lessons.push(Object.assign(head(25, S3), {
    title: '곡이 어울리는 때와 곳 찾고 행사 리듬 짓기',
    objective: '들은 곡이 어울리는 때와 곳을 분위기를 까닭으로 들어 짝짓고, 쓰일 곳에 어울리는 리듬을 지어 연주할 수 있다.',
    safety: MOVE_SAFE,
    illustration: {
      prompt: ILL('a school day timeline made of paper: morning broadcast speaker, sports day entrance parade, and a child sleeping at night with a music box'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'sun', x: 90, y: 60, s: 0.8 }, { motif: 'moon', x: 400, y: 60 }, { motif: 'cloud', x: 240, y: 48 },
        { motif: 'hills', y: 214 }, { motif: 'house', x: 100, y: 214 }, { motif: 'tree', x: 400, y: 216 },
        { motif: 'text', x: 240, y: 150, text: '이 곡은 언제 들으면 좋을까?', size: 22 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"운동회 입장할 때 「자장가」가 나오면 어떨까요?" 웃음이 나면 "왜 어색할까요?" 하고 묻는다. 곡의 분위기와 쓰이는 때·곳이 어울려야 한다는 것을 짚는다. 이어서 "슬픈 곡은 슬픈 날에만 써야 할까요?"를 물어 생각을 칠판에 적어 두고, 오늘 활동 끝에 다시 본다고 알린다.',
        student: '들었던 곡 가운데 아침에 듣고 싶은 곡과 잠들기 전에 듣고 싶은 곡을 떠올려 봅시다.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '곡과 쓰임', slots: [{ id: 'l', label: '「자장가」' }], cards: ['잠들기 전'] }, sequence: [{ match: { l: '잠들기 전' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 곡과 어울리는 때·곳 짝짓기', minutes: 12, tool: 'mindmap',
            teacher: '"곡과 어울리는 때·곳을 잇고, 왜 어울리는지 분위기로 말해요." 이은 뒤 짝에게 까닭을 말하게 한다. 「새야 새야」를 ‘슬픈 날’에만 이으려는 학생에게 "조용히 옛이야기를 떠올리는 시간에는 어울리지 않을까요?"를 묻는다.',
            task: '곡과 어울리는 때·곳을 이은 뒤, 쓰임을 고른 까닭으로 알맞은 것만 골라요.',
            levels: cardsLv(),
            items: [
              { prompt: '곡과 어울리는 때·곳을 이어 보세요.', toolOptions: { mode: 'match', topic: '곡과 쓰임', slots: [{ id: 'lull', label: '「자장가」' }, { id: 'dch', label: '「대취타」' }, { id: 'morn', label: '「아침 기분」' }, { id: 'hall', label: '「산왕의 궁전」' }], cards: ['잠들기 전', '운동회 입장', '아침 방송', '숨바꼭질 연극 장면'] }, target: { match: { lull: '잠들기 전', dch: '운동회 입장', morn: '아침 방송', hall: '숨바꼭질 연극 장면' } }, difficulty: 0.2,
                hints: ['곡마다 분위기를 먼저 한 낱말로 떠올리고, 그 분위기가 필요한 때·곳을 찾아요.', '이은 카드 가운데 조마조마한 곡과 당당한 곡의 자리가 바뀌었는지 보세요.', '「자장가」는 잠들기 전, 「대취타」는 운동회 입장, 「아침 기분」은 아침 방송, 「산왕의 궁전」은 숨바꼭질 장면이에요.'] },
              { prompt: '「대취타」를 운동회 입장에 쓰자고 한 까닭으로 알맞은 것만 골라 보세요.', toolOptions: { mode: 'pick', topic: '운동회 입장 곡', basket: '알맞은 까닭', cards: ['걸어가듯 당당한 박이 있어요', '큰북과 부는 악기가 힘차게 울려요', '곡이 오래되었어요', '내가 좋아하는 곡이에요'] }, target: { pick: ['걸어가듯 당당한 박이 있어요', '큰북과 부는 악기가 힘차게 울려요'] }, reveal: 'after-check', difficulty: 0.25,
                hints: ['입장할 때 필요한 것은 발을 맞추어 걷는 일이에요. 그 일을 도와주는 곡의 소리를 찾아요.', '고른 카드 가운데 곡의 소리가 아닌 것이 있는지 보세요.', '당당한 박과 힘찬 악기 소리가 까닭이에요. 오래된 곡이나 내 취향은 쓰임의 까닭이 아니에요.'] },
              { prompt: '구슬픈 「새야 새야」가 어울리는 때·곳만 골라 보세요.', toolOptions: { mode: 'pick', topic: '「새야 새야」의 쓰임', basket: '어울려요', cards: ['옛이야기를 조용히 떠올리는 시간', '그리운 사람을 생각하는 연극 장면', '운동회 이어달리기', '신나는 생일 축하'] }, target: { pick: ['옛이야기를 조용히 떠올리는 시간', '그리운 사람을 생각하는 연극 장면'] }, difficulty: 0.25,
                predict: { q: '구슬픈 곡은 슬픈 날에만 쓸까요?', options: ['네, 슬픈 날에만 써요', '아니요, 조용히 생각하는 때에도 어울려요'], answer: 1 },
                conclude: '구슬픈 곡은 슬픈 날뿐 아니라 조용히 무엇을 떠올리는 때에도 어울려요.',
                hints: ['느리고 여린 곡이 함께해 주면 좋은 시간을 떠올려 보세요. 꼭 슬픈 일이 아니어도 돼요.', '고른 카드 가운데 빠르고 신나는 소리가 필요한 때가 섞였는지 보세요.', '옛이야기를 떠올리는 시간과 그리운 사람을 생각하는 장면이 어울려요. 이어달리기와 생일 축하는 신나는 곡이 필요해요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 쓰일 곳에 맞는 리듬 짓고 연주하기', minutes: 15, tool: 'keyboard',
            teacher: '"운동회 입장 리듬은 걷는 발에 맞게 4분음표로 또박또박, 자장가 리듬은 2분음표로 느리게 지어요." 지은 리듬을 모둠이 손뼉이나 무릎으로 친다. 다른 모둠이 어디에 쓰일 리듬인지 맞히게 하고, 맞히지 못하면 "어떤 음표를 많이 썼나요?"를 묻는다.',
            task: '쓰일 곳을 정하고 그에 맞는 두 마디 리듬을 지어요. 모둠이 손뼉이나 무릎으로 치고, 다른 모둠이 어디에 쓰일 리듬인지 맞혀요.',
            levels: rhy(4, 2),
            items: [
              { prompt: '운동회 입장 리듬을 지어요. 두 마디를 4박씩 채우고 4분음표를 꼭 넣어요.', target: { beats: true, use: ['q'], selfCheck: ['걷는 발에 맞게 또박또박 쳤어요', '세게 힘차게 쳐 보았어요'] }, difficulty: 0.2 },
              { prompt: '잠들기 전 자장가 리듬을 지어요. 두 마디를 4박씩 채우고 2분음표를 꼭 넣어요.', target: { beats: true, use: ['h'], selfCheck: ['느리고 여리게 쳐 보았어요', '긴 음표를 많이 썼어요'] }, difficulty: 0.2 },
              { prompt: '지은 리듬 하나를 모둠이 함께 치고, 다른 모둠이 어디에 쓰일 리듬인지 맞혀요.', free: true, talk: true, difficulty: 0.15 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"도입에서 ‘슬픈 곡은 슬픈 날에만’이라고 적은 생각을 다시 볼까요? 지금은 어떻게 생각하나요?" 생각이 바뀐 학생의 말을 듣는다. 다음 시간에는 쓰일 곳에 맞는 배경 음악을 짓는다고 알린다. 출구 1번을 틀린 학생에게는 곡의 분위기 낱말을 먼저 말하게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '곡과 쓰임', slots: [{ id: 'sj', label: '「수제천」' }, { id: 'sm', label: '사물놀이' }], cards: ['엄숙한 개회식', '흥겨운 마을 잔치'] }, prompt: '곡과 어울리는 때·곳을 이어 보세요.', target: { match: { sj: '엄숙한 개회식', sm: '흥겨운 마을 잔치' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '곡을 쓸 곳을 정할 때 가장 먼저 살필 것은?', options: ['곡이 만들어진 해', '곡의 분위기', '곡 제목의 길이'], answer: 1, difficulty: 0.15, explain: '곡의 분위기가 쓰일 때·곳의 분위기와 어울려야 해요.' },
          { type: 'mood', prompt: '곡의 쓰임을 정하고 리듬을 지어 보니 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '이 곡은 언제, 어디에?',
      items: [
        { type: 'table', prompt: '곡과 어울리는 때·곳, 그 까닭을 쓰세요.', columns: ['곡 이름', '어울리는 때·곳', '까닭(분위기)'], cells: [['자장가', '', ''], ['대취타', '', ''], ['아침 기분', '', '']] },
        { type: 'choice', prompt: '운동회 이어달리기에 어울리는 곡에 ○ 하세요.', options: ['「자장가」', '빠르고 힘찬 곡', '「새야 새야」'], answer: '빠르고 힘찬 곡' },
        { type: 'short', prompt: '구슬픈 곡이 어울리는 때를 슬픈 날 말고 하나 더 쓰세요.' },
        { type: 'short', prompt: '우리 모둠이 지은 리듬을 ‘따·따따·따-’로 쓰고, 어디에 쓰일 리듬인지 쓰세요.' },
      ],
      easy: {
        note: '쓰임 고르기: 곡의 분위기 ↔ 때·곳의 분위기.',
        items: [
          { type: 'choice', prompt: '잠들기 전에 어울리는 곡은?', options: ['「자장가」', '「대취타」'], answer: '「자장가」' },
          { type: 'choice', prompt: '운동회 입장에 어울리는 리듬은?', options: ['또박또박 걷는 리듬', '아주 느린 리듬'], answer: '또박또박 걷는 리듬' },
          { type: 'short', prompt: '아침에 듣고 싶은 곡을 쓰세요.' },
          { type: 'draw', prompt: '그 곡이 흘러나오는 아침 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞게 이은 카드에 초록 테두리가 보이고, 리듬 블록 아래에 박 수가 보여요.',
      base: '카드와 박 수를 스스로 확인해요.',
      challenge: '카드가 섞여 나오고, 리듬 블록에 8분쉼표·2분쉼표·점2분음표가 더 나와요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 쓰임의 까닭으로 ‘좋아해서’를 든다 → 곡의 분위기 낱말로 다시 말하게 한다. ② 구슬픈 곡은 슬픈 날에만 쓴다고 여긴다 → 조용히 무엇을 떠올리는 장면을 예로 든다. ③ 리듬 연주가 서로 맞지 않는다 → 모둠장이 ‘하나 둘 셋 넷’을 세고 시작한다. 실제 학교 행사(운동회·졸업식) 일정과 이어 이야기하면 좋다.',
  }));

  // ───────────────────────── 26차시 (확장) ─────────────────────────
  lessons.push(Object.assign(head(26, S3), {
    title: '연극 장면에 어울리는 배경 가락 짓고 장면과 함께 들려주기',
    objective: '연극 장면의 분위기에 맞는 빠르기·높낮이·셈여림을 정하고, 배경 가락을 지어 장면 대사와 함께 연주할 수 있다.',
    safety: MOVE_SAFE,
    illustration: {
      prompt: ILL('a small paper puppet theater with a forest stage, one child reading lines with a script and another child playing a paper keyboard softly beside the stage'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'moon', x: 410, y: 60 }, { motif: 'star', x: 340, y: 86, s: 0.5 }, { motif: 'cloud', x: 110, y: 52 },
        { motif: 'hills', y: 214 }, { motif: 'tree', x: 80, y: 216 }, { motif: 'tree', x: 400, y: 216 },
        { motif: 'text', x: 240, y: 150, text: '장면에 소리를 입혀요', size: 23 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"같은 대사를 두 번 읽을게요. 한 번은 「산왕의 궁전」 첫 부분을 작게 틀고, 한 번은 「아침 기분」을 작게 틀고 읽어요." 「동굴 앞에 섰다」라는 대사를 두 번 읽는다. "어느 쪽이 더 조마조마했나요? 음악은 왜 크지 않게 틀었을까요?"를 묻고, 배경 음악은 장면 분위기를 돕되 대사를 덮지 않는다는 것을 짚는다.',
        student: '같은 대사가 배경 음악에 따라 어떻게 다르게 느껴지는지 들어 봅시다.',
        demo: { tool: 'keyboard', options: { from: '낮은솔', to: '높은도', tempo: 72 }, sequence: [{ notes: ['낮은솔', '낮은라'] }, { notes: ['낮은솔', '낮은라', '낮은솔', '낮은라', '도'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 장면에 맞는 배경 음악 계획하기', minutes: 12, tool: 'mindmap',
            teacher: '"우리 모둠 연극은 두 장면이에요. ‘깜깜한 동굴 탐험’과 ‘숲속 아침 산책’. 장면마다 어떤 소리가 어울릴지 나누어 보세요." 나눈 뒤 배경 음악을 정할 때 살필 것을 고르게 한다. ‘가장 크게 치기’를 고른 학생에게는 도입의 대사를 떠올리게 한다.',
            task: '두 장면에 어울리는 소리 계획을 나누고, 배경 음악을 정할 때 살필 것을 고른 뒤, 배경 가락을 만드는 차례를 놓아요.',
            levels: cardsLv(),
            items: [
              { prompt: '소리 계획 카드를 두 장면에 나누어 넣어 보세요.', toolOptions: { topic: '연극 두 장면', slots: ['동굴 탐험', '아침 산책'], cards: ['낮은 음으로 살금살금', '조금씩 빨라지게', '높은 음으로 밝게', '느긋하고 가벼운 걸음 빠르기로'] }, target: { sort: { '동굴 탐험': ['낮은 음으로 살금살금', '조금씩 빨라지게'], '아침 산책': ['높은 음으로 밝게', '느긋하고 가벼운 걸음 빠르기로'] } }, difficulty: 0.15,
                hints: ['21차시에 들은 두 곡을 떠올려 보세요. 조마조마한 곡과 상쾌한 곡은 어디에서 시작했고, 빠르기가 어떻게 흘렀나요?', '넣은 카드 가운데 밝은 장면에 낮고 살금살금한 소리가 들어갔는지 보세요.', '동굴 탐험은 낮은 음과 점점 빨라지기, 아침 산책은 높고 밝은 음과 느긋한 걸음 빠르기예요.'] },
              { prompt: '배경 음악을 정할 때 살필 것만 골라 보세요.', toolOptions: { mode: 'pick', topic: '배경 음악 정하기', basket: '살펴요', cards: ['장면의 분위기와 어울리나요', '대사가 잘 들리게 여린가요', '가장 크게 칠 수 있나요', '내가 아는 노래인가요'] }, target: { pick: ['장면의 분위기와 어울리나요', '대사가 잘 들리게 여린가요'] }, reveal: 'after-check', difficulty: 0.2,
                predict: { q: '배경 음악은 클수록 좋을까요?', options: ['네, 클수록 좋아요', '아니요, 대사가 들리게 해요'], answer: 1 },
                conclude: '배경 음악은 장면 분위기를 돕되, 대사를 덮지 않게 여리게 연주해요.',
                hints: ['도입에서 들은 대사와 음악을 떠올리며, 장면을 보는 사람에게 도움이 되는 것을 골라요.', '고른 카드 가운데 장면이 아니라 나를 위한 것이 있는지 보세요.', '분위기가 어울리는지와 대사가 들리게 여린지를 살펴요. 가장 크게 치기와 아는 노래는 장면과 상관없어요.'] },
              { prompt: '배경 가락을 만드는 차례대로 카드를 놓아 보세요.', toolOptions: { mode: 'order', topic: '배경 가락 만들기', cards: ['가락을 지어요', '장면 분위기를 정해요', '대사와 함께 연주해요', '빠르기·높낮이·셈여림을 정해요'] }, target: { order: ['장면 분위기를 정해요', '빠르기·높낮이·셈여림을 정해요', '가락을 지어요', '대사와 함께 연주해요'] }, difficulty: 0.2,
                hints: ['가락을 짓기 전에 무엇이 정해져 있어야 하는지 거꾸로 생각해 보며 놓아요.', '분위기를 정하는 일이 요소를 정하는 일보다 앞에 있는지 보세요.', '분위기 정하기 → 요소 정하기 → 가락 짓기 → 대사와 함께 연주하기 차례예요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 배경 가락 짓고 장면과 함께 연주하기', minutes: 15, tool: 'keyboard',
            teacher: '"계획대로 두 장면의 배경 가락을 지어요. 동굴 탐험은 낮은솔에서, 아침 산책은 미에서 시작해요." 지은 뒤 모둠에서 한 사람은 대사를 읽고 한 사람은 가락을 여리게 친다. 가락이 대사를 덮으면 "대사가 들렸나요?"를 묻고 다시 해 보게 한다.',
            task: '두 장면의 배경 가락을 조건에 맞게 지은 뒤, 모둠에서 한 사람은 대사를 읽고 한 사람은 가락을 여리게 쳐요.',
            levels: mel('낮은솔', '높은도'),
            items: [
              { prompt: '동굴 탐험 배경 가락을 지어요. 낮은솔로 시작하는 다섯 음 가락이에요.', target: { compose: { length: 5, startOn: '낮은솔' }, selfCheck: ['낮은 음을 많이 써서 지었어요', '여리게 살금살금 쳐 보았어요'] }, difficulty: 0.2 },
              { prompt: '아침 산책 배경 가락을 지어요. 미로 시작해 높은도로 끝나는 다섯 음 가락이에요.', target: { compose: { length: 5, startOn: '미', endOn: '높은도' }, selfCheck: ['가락이 높은 쪽으로 올라가게 지었어요', '가벼운 걸음 빠르기로 쳐 보았어요'] }, difficulty: 0.2 },
              { prompt: '모둠에서 한 사람은 대사를 읽고 한 사람은 배경 가락을 여리게 쳐요. 대사가 잘 들렸는지 서로 말해요.', free: true, talk: true, difficulty: 0.2 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"두 모둠이 장면과 배경 가락을 함께 들려줄게요. 듣는 친구들은 어느 장면인지 맞혀 보세요." 발표 뒤 "무엇을 듣고 그 장면이라고 알았나요?"를 묻는다. 다음 시간에는 같은 곡을 듣고 느낌이 다른 친구와 까닭을 견주어 본다고 알린다. 출구 2번을 틀린 학생에게는 도입의 두 번 읽은 대사를 다시 떠올리게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '연극 두 장면', slots: ['생일잔치', '잠드는 밤'], cards: ['빠르고 밝게', '느리고 여리게', '높은 음으로 통통 튀게'] }, prompt: '소리 계획 카드를 두 장면에 나누어 넣어 보세요.', target: { sort: { 생일잔치: ['빠르고 밝게', '높은 음으로 통통 튀게'], '잠드는 밤': ['느리고 여리게'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '배경 음악을 연주할 때 알맞은 셈여림은?', options: ['대사가 들리게 여리게', '대사보다 크게', '아주 세게 쾅쾅'], answer: 0, difficulty: 0.15, explain: '배경 음악은 장면을 도와야 하니 대사가 잘 들리게 여리게 연주해요.' },
          { type: 'mood', prompt: '장면에 배경 가락을 입혀 보니 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '우리 모둠 배경 음악 계획',
      items: [
        { type: 'table', prompt: '두 장면의 배경 음악 계획을 쓰세요.', columns: ['장면', '빠르기', '높낮이', '셈여림'], cells: [['동굴 탐험', '', '', ''], ['아침 산책', '', '', '']] },
        { type: 'short', prompt: '내가 지은 동굴 탐험 가락의 계이름을 쓰세요.' },
        { type: 'choice', prompt: '배경 음악을 정할 때 살필 것에 ○ 하세요.', options: ['가장 크게 칠 수 있나요', '장면 분위기와 어울리나요', '노래 제목이 긴가요'], answer: '장면 분위기와 어울리나요' },
        { type: 'short', prompt: '다른 모둠의 배경 가락을 듣고 어느 장면인지 알 수 있었던 까닭을 쓰세요.' },
      ],
      easy: {
        note: '무서운 장면 = 낮게·살금살금, 밝은 장면 = 높게·가볍게. 배경 음악은 여리게.',
        items: [
          { type: 'choice', prompt: '동굴 탐험 가락은?', options: ['낮은 음으로', '높은 음으로'], answer: '낮은 음으로' },
          { type: 'choice', prompt: '배경 음악은?', options: ['여리게', '아주 세게'], answer: '여리게' },
          { type: 'short', prompt: '내가 지은 가락의 계이름을 쓰세요.' },
          { type: 'draw', prompt: '우리 모둠 연극 장면을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '건반에 계이름이 보이고, 맞게 넣은 카드에 초록 테두리가 보여요.',
      base: '계이름을 켜고 끌 수 있고, 카드를 스스로 확인해요.',
      challenge: '계이름 없는 건반에서 가락을 짓고, 카드가 섞여 나와요. 살필 것 고르기는 맞힌 뒤에야 테두리가 보여요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 배경 가락을 세게 쳐서 대사를 덮는다 → 대사 읽는 친구가 들리는지 손을 들어 알리게 한다. ② 장면과 상관없이 아는 노래를 친다 → 계획표의 빠르기·높낮이·셈여림 칸을 먼저 채우게 한다. ③ 연극 대사가 길어진다 → 대사는 한 문장으로 정한다. 낮은솔이 없는 실물 건반을 쓰면 솔로 시작해 낮은 쪽으로 내려가게 바꾸어도 된다.',
  }));

  // ───────────────────────── 27차시 (핵심) ─────────────────────────
  lessons.push(Object.assign(head(27, S3), {
    title: '같은 곡에 느낌이 다른 친구와 까닭 견주어 듣기',
    objective: '같은 곡을 듣고 친구와 느낌이 다를 때, 그 까닭을 곡의 요소와 내가 겪은 일로 나누어 말하고 서로의 느낌을 존중할 수 있다.',
    illustration: {
      prompt: ILL('two children sitting back to back listening to the same music box, one with a calm blue cloud thought bubble and the other with a warm yellow sun thought bubble'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'cloud', x: 120, y: 58 }, { motif: 'sun', x: 370, y: 62, s: 0.8 }, { motif: 'hills', y: 214 },
        { motif: 'flower', x: 150, y: 224 }, { motif: 'flower', x: 330, y: 224 }, { motif: 'tree', x: 420, y: 216 },
        { motif: 'text', x: 240, y: 150, text: '느낌은 달라도 괜찮아요', size: 23 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"브람스의 「자장가」를 듣고 느낌을 한 낱말로 써 보세요." 30초 들려준 뒤 몇 명의 낱말을 칠판에 적는다. ‘포근해요’와 ‘쓸쓸해요’처럼 다른 낱말이 나오면 "둘 가운데 한 사람은 틀린 걸까요?"를 묻는다. 대답을 듣고 오늘은 느낌이 다를 때 까닭을 견주어 본다고 알린다.',
        student: '「자장가」를 듣고 떠오른 느낌을 한 낱말로 써 봅시다.',
        demo: { tool: 'keyboard', options: { from: '도', to: '높은도', tempo: 66 }, sequence: [{ notes: ['미', '미', '솔'] }, { notes: ['미', '미', '솔', '미', '미', '솔'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 「자장가」 첫 가락 치고 느낌 나누기', minutes: 12, tool: 'keyboard',
            teacher: '"「자장가」 첫 가락을 따라 쳐 봐요. 다 친 뒤에는 짝에게 내 느낌 낱말과 그렇게 느낀 까닭을 하나씩 말해요." 까닭을 ‘그냥’이라고 하는 학생에게 "빠르기는 어땠나요? 이 가락을 들으면 떠오르는 일이 있나요?"를 묻는다.',
            task: '「자장가」 첫 가락을 듣고 따라 친 뒤, 짝에게 내 느낌 낱말과 그 까닭을 말해요.',
            levels: mel(),
            items: [
              { prompt: '「자장가」 첫 가락이에요. 가락 듣기를 누르고 따라 쳐 보세요.', toolOptions: { melody: ['미', '미', '솔', '미', '미', '솔'], tempo: 66 }, target: { notes: ['미', '미', '솔', '미', '미', '솔'] }, difficulty: 0.15 },
              { prompt: '이어지는 가락이에요. 높은도까지 올라갔다가 내려와요. 듣고 따라 쳐 보세요.', toolOptions: { melody: ['미', '솔', '높은도', '시', '라', '라', '솔'], tempo: 66 }, target: { notes: ['미', '솔', '높은도', '시', '라', '라', '솔'] }, difficulty: 0.3 },
              { prompt: '친 가락을 들으며 짝에게 내 느낌 낱말과 그렇게 느낀 까닭을 하나씩 말해요.', free: true, talk: true, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 느낌이 다른 까닭 나누고 존중하기', minutes: 15, tool: 'emotion',
            teacher: '"친구들이 말한 까닭을 모았어요. 곡에서 들리는 것과 내가 겪은 일로 나누어 볼까요?" 나눈 뒤 "곡의 요소는 같은데 왜 느낌이 다를 수 있을까요?"를 묻고, 겪은 일이 사람마다 달라서라는 대답을 기다린다. 마지막 눈금은 정답이 없으니 솔직하게 고르라고 말해 준다.',
            task: '느낌의 까닭을 두 묶음으로 나누고, 느낌이 다른 친구에게 어떻게 할지 고른 뒤, 내 마음을 눈금으로 나타내요.',
            levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
            items: [
              { prompt: '친구들이 말한 느낌의 까닭을 두 묶음으로 나누어 보세요.', toolOptions: { mode: 'sort', topic: '느낌의 까닭', slots: ['곡에서 들려요', '내가 겪은 일이에요'], cards: ['빠르기가 느려요', '여리게 연주해요', '할머니가 불러 주시던 때가 떠올라요', '이사 와서 혼자 자던 밤이 생각나요'] }, target: { sort: { '곡에서 들려요': ['빠르기가 느려요', '여리게 연주해요'], '내가 겪은 일이에요': ['할머니가 불러 주시던 때가 떠올라요', '이사 와서 혼자 자던 밤이 생각나요'] } }, difficulty: 0.2,
                hints: ['카드마다 곡을 처음 듣는 사람도 똑같이 들을 수 있는 것인지, 그 사람만 떠올릴 수 있는 것인지 생각해요.', '넣은 카드 가운데 ‘떠올라요’, ‘생각나요’로 끝나는 카드가 어디에 들어갔는지 보세요.', '느린 빠르기와 여린 셈여림은 곡에서 들리는 것, 할머니와 이사 온 밤은 내가 겪은 일이에요.'] },
              { prompt: '짝은 「자장가」가 쓸쓸하다고 하고, 나는 포근하다고 했어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '같은 「자장가」를 듣고, 나는 ‘포근해요’, 짝은 ‘쓸쓸해요’라고 썼어요.', choices: [{ id: 'wrong', text: '짝이 틀렸다고 고쳐 줘요', result: '짝이 속상해하고, 자기 느낌을 말하지 않게 돼요.', mood: '속상함', why: '느낌은 사람마다 달라서 틀린 느낌은 없어요.' }, { id: 'why', text: '짝에게 그렇게 느낀 까닭을 물어보고 내 까닭도 말해요', result: '짝은 혼자 자던 밤이, 나는 할머니가 떠올랐다는 것을 알게 돼요.', mood: '편안함' }, { id: 'same', text: '내 느낌을 짝에게 맞추어 바꿔요', result: '내 느낌을 말하지 못해 아쉬워요.', mood: '아쉬움', why: '내 느낌도 그대로 말해도 괜찮아요.' }] }, target: { choice: 'why' }, difficulty: 0.15 },
              { prompt: '느낌이 다른 친구에게 알맞게 말한 것만 골라 보세요.', toolOptions: { mode: 'pick', topic: '느낌 나누기', basket: '알맞은 말', cards: ['너는 왜 그렇게 느꼈어?', '나는 느린 빠르기 때문에 포근했어', '그건 틀린 느낌이야', '내 느낌이 맞아'] }, target: { pick: ['너는 왜 그렇게 느꼈어?', '나는 느린 빠르기 때문에 포근했어'] }, reveal: 'after-check', difficulty: 0.2,
                predict: { q: '같은 곡을 듣고 느낌이 다르면 한 사람은 틀린 걸까요?', options: ['네, 한 사람은 틀려요', '아니요, 둘 다 괜찮아요'], answer: 1 },
                conclude: '느낌은 사람마다 다를 수 있어요. 까닭을 묻고 내 까닭을 말하면 서로를 알게 돼요.',
                hints: ['친구가 더 말하고 싶어지게 하는 말과, 말을 멈추게 하는 말이 어느 쪽인지 생각해요.', '고른 카드 가운데 친구 느낌을 틀렸다고 하는 말이 있는지 보세요.', '까닭을 묻는 말과 내 까닭을 말하는 말이 알맞아요. 틀렸다거나 내가 맞다는 말은 아니에요.'] },
              { prompt: '오늘 느낌이 다른 친구의 까닭을 들으며 얼마나 잘 받아들였나요? 솔직하게 눈금을 골라 보세요.', toolOptions: { mode: 'scale', situation: '같은 곡을 듣고 나와 느낌이 다른 친구의 까닭을 들었어요.', feeling: '편안함', steps: 3, scaleLabels: ['조금', '보통', '많이'], ask: '친구의 다른 느낌을 얼마나 잘 받아들였나요?' }, target: { level: 'any' }, difficulty: 0.05 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 나와 느낌이 다른 친구의 까닭 가운데 기억에 남는 것을 말해 볼까요?" 두세 명이 말하게 한다. 다음 시간에는 지금까지 들은 곡 하나로 감상 보고서를 쓴다고 알린다. 출구 1번을 틀린 학생에게는 카드를 처음 듣는 사람도 들을 수 있는지 다시 묻는다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'sort', topic: '느낌의 까닭', slots: ['곡에서 들려요', '내가 겪은 일이에요'], cards: ['첼로 소리가 낮아요', '바닷가에 갔던 날이 생각나요', '가락이 천천히 흘러요'] }, prompt: '‘백조’를 듣고 친구들이 말한 까닭을 두 묶음으로 나누어 보세요.', target: { sort: { '곡에서 들려요': ['첼로 소리가 낮아요', '가락이 천천히 흘러요'], '내가 겪은 일이에요': ['바닷가에 갔던 날이 생각나요'] } }, difficulty: 0.2 },
          { type: 'choice', prompt: '같은 곡을 듣고 친구와 느낌이 다를 때 알맞은 생각은?', options: ['한 사람은 틀렸어요', '느낌은 다를 수 있으니 까닭을 들어 봐요', '선생님께 누가 맞는지 물어요'], answer: 1, difficulty: 0.15, explain: '느낌은 사람마다 다를 수 있어요. 까닭을 들어 보면 서로를 알게 돼요.' },
          { type: 'mood', prompt: '친구와 느낌을 나누어 보니 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '느낌이 달라도 괜찮아',
      items: [
        { type: 'table', prompt: '「자장가」를 듣고 나와 짝의 느낌과 까닭을 쓰세요.', columns: ['', '느낌 낱말', '곡에서 들린 까닭', '겪은 일 까닭'], cells: [['나', '', '', ''], ['짝', '', '', '']] },
        { type: 'choice', prompt: '‘곡에서 들리는 까닭’에 ○ 하세요.', options: ['소풍 간 날이 생각나요', '셈여림이 여려요', '동생이 떠올라요'], answer: '셈여림이 여려요' },
        { type: 'short', prompt: '느낌이 다른 친구에게 해 줄 말을 쓰세요.' },
        { type: 'short', prompt: '짝의 까닭을 듣고 새롭게 들린 것이 있다면 쓰세요.' },
      ],
      easy: {
        note: '까닭은 두 가지: 곡에서 들리는 것(빠르기·셈여림·악기)과 내가 겪은 일.',
        items: [
          { type: 'choice', prompt: '느낌이 다르면?', options: ['둘 다 괜찮아요', '한 사람은 틀려요'], answer: '둘 다 괜찮아요' },
          { type: 'choice', prompt: '곡에서 들리는 까닭은?', options: ['빠르기가 느려요', '할머니가 생각나요'], answer: '빠르기가 느려요' },
          { type: 'short', prompt: '「자장가」를 듣고 든 내 느낌을 한 낱말로 쓰세요.' },
          { type: 'draw', prompt: '「자장가」를 듣고 떠오른 장면을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '가락을 듣는 동안 건반이 빛나고, 상황마다 고른 뒤 결과가 바로 보여요.',
      base: '계이름을 켜고 끌 수 있고, 상황마다 결과를 보며 까닭을 말해요.',
      challenge: '계이름 없는 건반에서 귀로만 따라 치고, 고르기와 상황의 결과는 맞힌 뒤에야 보여요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 다른 느낌을 틀렸다고 말한다 → ‘틀린 느낌은 없다’를 약속으로 정한다. ② 까닭을 ‘그냥’이라고 한다 → ‘빠르기는? 떠오르는 일은?’ 두 물음을 준다. ③ 겪은 일을 말하다가 사적인 이야기가 길어진다 → 한 문장으로 말하게 하고, 말하고 싶지 않으면 곡의 요소만 말해도 된다고 알려 준다. 마음 눈금은 점수가 아니며 결과를 공개하지 않는다.',
  }));

  // ───────────────────────── 28차시 (연습) ─────────────────────────
  lessons.push(Object.assign(head(28, S3), {
    title: '감상 보고서 차례대로 쓰고 들을 대목 들려주며 나누기',
    objective: '감상 보고서에 들어갈 내용을 차례대로 정리하고, 한 곡의 보고서를 완성해 그 곡의 들을 대목을 손뼉이나 건반으로 들려주며 발표할 수 있다.',
    illustration: {
      prompt: ILL('a child holding up a paper listening report with music note stickers, while clapping hands, and classmates listening on a reading rug'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'star', x: 90, y: 60, s: 0.7 }, { motif: 'cloud', x: 250, y: 48 }, { motif: 'sun', x: 410, y: 60, s: 0.7 },
        { motif: 'hills', y: 214 }, { motif: 'house', x: 90, y: 214 }, { motif: 'tree', x: 410, y: 216 },
        { motif: 'text', x: 240, y: 150, text: '나의 감상 보고서', size: 25 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"감상 보고서에는 무엇을 쓰면 좋을까요? 지금까지 곡을 들으며 한 일을 떠올려 보세요." 곡 이름, 들린 요소, 분위기, 쓰임, 내 느낌이 나오면 칠판에 적는다. "‘재미있었다’ 한 줄만 쓰면 보고서를 읽은 친구가 그 곡을 알 수 있을까요?"를 물어, 들린 것을 함께 써야 한다는 것을 짚는다.',
        student: '감상 보고서에 들어가야 할 것을 떠올려 봅시다.',
        demo: { tool: 'story', options: { mode: 'order', cards: ['곡 이름', '들린 요소'], shuffle: false }, sequence: [{ order: ['곡 이름', '들린 요소'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 보고서 차례 정하고 빈칸 채우기', minutes: 13, tool: 'story',
            teacher: '"보고서는 읽는 사람이 곡을 처음 만나는 차례로 써요. 곡 이름부터, 내 느낌은 맨 끝에." 차례를 놓은 뒤 ‘봄’ 보고서의 빈칸을 채우게 한다. 느낌 칸에 들린 요소를 넣는 학생에게 "이건 곡에서 들리는 것인가요, 내 마음인가요?"를 묻는다.',
            task: '감상 보고서의 차례대로 카드를 놓고, 보고서 빈칸에 알맞은 카드를 넣어 완성해요.',
            levels: cardsLv(),
            items: [
              { prompt: '감상 보고서에 쓸 내용을 차례대로 놓아 보세요.', toolOptions: { cards: ['어울리는 쓰임', '곡 이름', '내 느낌과 그 까닭', '들린 요소', '곡의 분위기'] }, target: { order: ['곡 이름', '들린 요소', '곡의 분위기', '어울리는 쓰임', '내 느낌과 그 까닭'] }, difficulty: 0.2,
                hints: ['읽는 사람이 곡을 처음 만난다고 생각해요. 무엇을 알아야 다음 것을 이해할 수 있는지 차례를 떠올려요.', '분위기를 말하기 전에 그 까닭이 될 것이 앞에 있는지, 내 느낌이 맨 끝에 있는지 보세요.', '곡 이름 → 들린 요소 → 분위기 → 쓰임 → 내 느낌과 까닭 차례예요.'] },
              { prompt: '‘봄’ 감상 보고서의 빈칸을 채워 보세요.', toolOptions: { mode: 'fill', cards: ['바이올린이 새소리를 흉내 내요', '밝고 상쾌해요', '봄 소풍 가는 버스 안'], slots: [{ id: 'el', who: '보고서', label: '들린 요소: ___.' }, { id: 'md', who: '보고서', label: '분위기: ___.' }, { id: 'use', who: '보고서', label: '어울리는 곳: ___.' }] }, target: { fill: { el: '바이올린이 새소리를 흉내 내요', md: '밝고 상쾌해요', use: '봄 소풍 가는 버스 안' } }, difficulty: 0.2,
                hints: ['칸 이름을 먼저 읽고, 카드가 소리를 말하는지, 기분을 말하는지, 장소를 말하는지 견주어 넣어요.', '넣은 카드를 칸 이름과 함께 소리 내어 읽어 보세요. 어색한 칸이 있나요?', '들린 요소에 바이올린 새소리, 분위기에 밝고 상쾌함, 어울리는 곳에 소풍 버스 안이 들어가요.'] },
              { prompt: '‘코끼리’ 감상 보고서예요. 칸에 맞는 카드만 골라 빈칸을 채워 보세요.', toolOptions: { mode: 'fill', cards: ['콘트라베이스가 낮게 3박으로 춤춰요', '느긋하고 익살스러워요', '동물원 소개 영상', '재미있었어요'], slots: [{ id: 'el', who: '보고서', label: '들린 요소: ___.' }, { id: 'md', who: '보고서', label: '분위기: ___.' }, { id: 'use', who: '보고서', label: '어울리는 곳: ___.' }] }, target: { fill: { el: '콘트라베이스가 낮게 3박으로 춤춰요', md: '느긋하고 익살스러워요', use: '동물원 소개 영상' } }, reveal: 'after-check', difficulty: 0.3,
                hints: ['칸마다 곡에서 들리는 것, 곡이 주는 기분, 쓰일 곳 가운데 무엇이 들어갈지 정하고, 어느 칸에도 맞지 않는 카드는 남겨요.', '남긴 카드가 들린 요소나 분위기를 말하는지, 내 생각만 말하는지 보세요.', '들린 요소에 콘트라베이스 3박, 분위기에 느긋하고 익살스러움, 어울리는 곳에 동물원 영상이에요. ‘재미있었어요’는 남겨요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 들을 대목 들려주며 보고서 발표하기', minutes: 14, tool: 'keyboard',
            teacher: '"보고서를 발표할 때 그 곡의 들을 대목을 손뼉이나 건반으로 들려주면 친구들이 더 잘 알아들어요." ‘코끼리’의 3박 리듬을 놓아 본 뒤, 내 보고서 곡의 리듬을 지어 발표 때 친다. 리듬이 곡과 다르면 "그 곡은 몇 박씩 묶였나요?"를 묻는다.',
            task: '들을 대목 리듬을 듣고 놓아 본 뒤, 내 보고서 곡의 들을 대목 리듬을 지어요. 보고서를 발표하며 그 리듬을 손뼉으로 들려줘요.',
            levels: rhy(3, 2),
            items: [
              { prompt: '‘코끼리’ 보고서에 넣을 3박 춤 리듬이에요. 듣고 블록으로 놓아 보세요.', toolOptions: { pattern: ['h', 'q', 'q', 'q', 'q'], tempo: 100 }, target: { rhythm: ['h', 'q', 'q', 'q', 'q'] }, difficulty: 0.2 },
              { prompt: '내 보고서 곡의 들을 대목 리듬을 지어요. 두 마디를 3박씩 채워요.', target: { beats: true, selfCheck: ['고른 곡의 빠르기에 맞게 쳐 보았어요', '셋씩 묶어 세며 쳤어요'] }, difficulty: 0.25 },
              { prompt: '보고서를 발표하며 지은 리듬을 손뼉으로 들려줘요. 듣는 친구는 들을 대목이 잘 전해졌는지 말해 줘요.', free: true, talk: true, difficulty: 0.2 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"친구 보고서를 듣고 나도 들어 보고 싶어진 곡이 있나요? 무엇 때문에 그런가요?" 두세 명이 말한다. 다음 시간에는 단원 전체를 돌아보며 마무리한다고 알린다. 출구 2번에서 ‘재미있었어요’를 고른 학생에게는 오늘 채운 보고서의 들린 요소 칸을 다시 읽게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { cards: ['곡의 분위기', '곡 이름', '들린 요소'] }, prompt: '감상 보고서의 앞부분을 차례대로 놓아 보세요.', target: { order: ['곡 이름', '들린 요소', '곡의 분위기'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '보고서의 ‘들린 요소’ 칸에 알맞은 것은?', options: ['재미있었어요', '피리 소리가 길게 이어져요', '또 듣고 싶어요'], answer: 1, difficulty: 0.15, explain: '들린 요소 칸에는 곡에서 실제로 들린 소리를 써요.' },
          { type: 'mood', prompt: '감상 보고서를 쓰고 발표해 보니 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '나의 감상 보고서',
      items: [
        { type: 'table', prompt: '한 곡을 골라 감상 보고서를 쓰세요.', columns: ['곡 이름', '들린 요소', '분위기', '어울리는 쓰임', '내 느낌과 까닭'], rows: 1 },
        { type: 'short', prompt: '들을 대목의 리듬을 ‘따·따따·따-’로 쓰세요.' },
        { type: 'choice', prompt: '보고서 맨 끝에 쓸 것에 ○ 하세요.', options: ['곡 이름', '내 느낌과 까닭', '들린 요소'], answer: '내 느낌과 까닭' },
        { type: 'short', prompt: '친구 보고서를 듣고 나도 들어 보고 싶어진 곡과 그 까닭을 쓰세요.' },
      ],
      easy: {
        note: '보고서 차례: 곡 이름 → 들린 요소 → 분위기 → 쓰임 → 내 느낌.',
        items: [
          { type: 'short', prompt: '내가 고른 곡 이름을 쓰세요.' },
          { type: 'choice', prompt: '들린 요소는?', options: ['피리 소리가 길어요', '재미있어요'], answer: '피리 소리가 길어요' },
          { type: 'short', prompt: '그 곡의 분위기를 한 낱말로 쓰세요.' },
          { type: 'draw', prompt: '그 곡이 어울리는 곳을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞게 넣은 카드에 초록 테두리가 보이고, 리듬 블록 아래에 박 수가 보여요.',
      base: '카드와 박 수를 스스로 확인해요.',
      challenge: '보고서에 맞지 않는 카드가 섞여 있고 맞힌 뒤에야 테두리가 보여요. 리듬 블록이 더 나와요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 보고서를 ‘재미있었다’로만 채운다 → 들린 요소 칸을 먼저 쓰게 한다. ② 분위기와 느낌을 같은 것으로 여긴다 → 분위기는 곡이 주는 기분, 느낌은 내가 겪은 일까지 담은 것이라고 구별해 준다. ③ 발표 리듬이 곡과 맞지 않는다 → 곡을 10초 다시 들려주고 박을 세게 한다. 완성한 보고서는 교실 뒤 게시판에 붙여 서로 읽게 한다.',
  }));

  // ───────────────────────── 29차시 (마무리) ─────────────────────────
  lessons.push(Object.assign(head(29, S3), {
    title: '감상 단원 돌아보며 다시 듣고 싶은 곡 골라 다음 감상 계획하기',
    objective: '단원에서 한 활동을 세 부분으로 묶어 돌아보고, 기억에 남는 가락을 다시 쳐 본 뒤, 나의 감상 습관을 스스로 평가하고 다음 감상 계획을 세울 수 있다.',
    illustration: {
      prompt: ILL('a paper path with three stepping stones labeled with music notes leading to a treasure chest of instruments, children looking back along the path happily'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 110, y: 52 }, { motif: 'star', x: 260, y: 80, s: 0.6 },
        { motif: 'hills', y: 214 }, { motif: 'house', x: 90, y: 214 }, { motif: 'tree', x: 400, y: 216 },
        { motif: 'text', x: 240, y: 150, text: '귀 기울여 걸어온 길', size: 24 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"이번 단원에서 우리는 곡을 들으며 세 가지 일을 했어요. 처음엔 소리의 요소를 찾았고, 다음엔 여러 나라 음악의 특징을 견주었고, 마지막엔 분위기와 쓰임을 이야기했어요." 세 부분을 칠판에 적는다. "곡을 한 번 듣고 다 안다고 생각했던 적이 있나요? 지금은 어떻게 듣나요?"를 물어 처음과 지금의 듣는 방법을 견주게 한다.',
        student: '이번 단원에서 들은 곡 가운데 가장 기억에 남는 곡을 떠올려 봅시다.',
        demo: { tool: 'mindmap', options: { topic: '감상 단원', slots: ['요소 찾기', '분위기와 쓰임'], cards: ['높낮이 따라가기', '쓰일 곳 짝짓기'] }, sequence: [{ sort: { '요소 찾기': ['높낮이 따라가기'] } }, { sort: { '요소 찾기': ['높낮이 따라가기'], '분위기와 쓰임': ['쓰일 곳 짝짓기'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 단원 활동 세 부분으로 묶기', minutes: 9, tool: 'mindmap',
            teacher: '"단원에서 한 활동 카드를 세 부분으로 묶어 보세요." 헷갈리는 카드는 그 활동을 한 날의 곡을 떠올리게 한다. 묶은 뒤 "세 부분 가운데 어느 부분이 가장 어려웠나요?"를 짝과 이야기하게 한다.',
            task: '단원에서 한 활동 카드를 세 부분으로 묶어요.',
            levels: cardsLv(),
            items: [
              { prompt: '단원에서 한 활동 카드를 세 부분으로 묶어 보세요.', toolOptions: { topic: '감상 단원', slots: ['요소 찾기', '여러 음악의 특징', '분위기와 쓰임'], cards: ['가락의 꼭대기와 골짜기 찾기', '되풀이 리듬 꼴 찾기', '국악기와 서양 악기 나누기', '변주곡에서 바뀐 것 찾기', '쓰일 곳과 곡 짝짓기', '장면 배경 가락 짓기'] }, target: { sort: { '요소 찾기': ['가락의 꼭대기와 골짜기 찾기', '되풀이 리듬 꼴 찾기'], '여러 음악의 특징': ['국악기와 서양 악기 나누기', '변주곡에서 바뀐 것 찾기'], '분위기와 쓰임': ['쓰일 곳과 곡 짝짓기', '장면 배경 가락 짓기'] } }, difficulty: 0.25,
                hints: ['카드마다 그 활동이 소리 하나하나를 살핀 것인지, 곡과 곡을 견준 것인지, 곡을 어디에 쓸지 생각한 것인지 나누어요.', '넣은 카드 가운데 곡을 견준 활동이 요소 찾기에 들어갔는지 보세요.', '꼭대기·되풀이 리듬은 요소 찾기, 악기 나누기·변주곡은 여러 음악의 특징, 쓰일 곳·배경 가락은 분위기와 쓰임이에요.'] },
              { prompt: '처음보다 지금 더 잘하게 된 듣기 방법만 골라 보세요.', toolOptions: { mode: 'pick', topic: '달라진 듣기', basket: '좋은 듣기 방법', cards: ['살필 요소를 정하고 다시 들어요', '분위기의 까닭을 들린 소리로 말해요', '한 번 듣고 다 안다고 끝내요', '친구 말은 확인 없이 그대로 적어요'] }, target: { pick: ['살필 요소를 정하고 다시 들어요', '분위기의 까닭을 들린 소리로 말해요'] }, reveal: 'after-check', difficulty: 0.2,
                hints: ['단원에서 여러 번 고쳐 온 생각들을 떠올리며, 곡을 더 잘 듣게 해 주는 방법을 골라요.', '고른 카드 가운데 우리가 고쳐 온 생각이 섞였는지 보세요.', '요소를 정해 다시 듣기와 분위기의 까닭을 들린 소리로 말하기가 좋은 방법이에요.'] },
              { prompt: '다음 감상을 계획하는 차례대로 카드를 놓아 보세요.', toolOptions: { mode: 'order', topic: '다음 감상 계획', cards: ['들은 것을 감상 보고서에 써요', '듣고 싶은 곡을 정해요', '살필 요소를 하나 정해요', '그 요소에 귀 기울여 들어요'] }, target: { order: ['듣고 싶은 곡을 정해요', '살필 요소를 하나 정해요', '그 요소에 귀 기울여 들어요', '들은 것을 감상 보고서에 써요'] }, difficulty: 0.2,
                hints: ['곡을 듣기 전에 정할 것과 들은 뒤에 할 일을 나누어 생각하며 놓아요.', '살필 요소를 정하는 일이 듣는 일보다 앞에 있는지 보세요.', '곡 정하기 → 살필 요소 정하기 → 귀 기울여 듣기 → 보고서 쓰기 차례예요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 기억에 남는 가락 다시 쳐 보기', minutes: 10, tool: 'keyboard',
            teacher: '"단원에서 들은 가락을 다시 들려줄게요. 어느 곡의 가락인지 떠올리며 따라 쳐 보세요." 친 뒤 곡 이름을 말하게 한다. 마지막에는 가장 기억에 남는 곡의 가락을 모둠이 함께 허밍하거나 건반으로 쳐 본다.',
            task: '단원에서 들은 가락을 듣고 따라 친 뒤 곡 이름을 말해요. 가장 기억에 남는 곡의 가락을 모둠이 함께 허밍하거나 쳐요.',
            levels: mel('낮은솔', '높은도'),
            items: [
              { prompt: '21차시에 들은 상쾌한 아침 곡의 첫 가락이에요. 따라 친 뒤 곡 이름을 말해 보세요.', toolOptions: { melody: ['솔', '미', '레', '도', '레', '미'], tempo: 80 }, target: { notes: ['솔', '미', '레', '도', '레', '미'] }, difficulty: 0.15 },
              { prompt: '13차시에 여러 모양으로 바뀌던 변주곡의 첫 가락이에요. 따라 친 뒤 곡 이름을 말해 보세요.', toolOptions: { melody: ['도', '도', '솔', '솔', '라', '라', '솔'], tempo: 100 }, target: { notes: ['도', '도', '솔', '솔', '라', '라', '솔'] }, difficulty: 0.15 },
              { prompt: '27차시에 느낌을 나눈 곡의 이어지는 가락이에요. 따라 친 뒤 곡 이름을 말해 보세요.', toolOptions: { melody: ['미', '솔', '높은도', '시', '라', '라', '솔'], tempo: 72 }, target: { notes: ['미', '솔', '높은도', '시', '라', '라', '솔'] }, reveal: 'after-check', difficulty: 0.3 },
              { prompt: '모둠에서 가장 기억에 남는 곡을 하나 정해, 그 가락을 함께 허밍하거나 건반으로 쳐 보세요.', free: true, talk: true, difficulty: 0.15 },
            ],
          },
          {
            id: 'a3', title: '활동 3. 나의 감상 습관 돌아보기', minutes: 8, tool: 'emotion',
            teacher: '"이번 눈금들은 정답이 없어요. 점수도 아니에요. 단원을 하며 내가 어땠는지 솔직하게 골라 보세요." 고른 뒤 원하는 학생만 까닭을 말하게 한다. 낮게 고른 학생에게는 다음 감상에서 해 볼 작은 방법 하나를 함께 정한다.',
            task: '단원을 하며 나의 감상 습관이 어땠는지 눈금으로 솔직하게 나타내요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '곡을 들을 때 살필 요소를 정하고 다시 들었나요? 솔직하게 눈금을 골라 보세요.', toolOptions: { mode: 'scale', situation: '이번 단원에서 여러 곡을 다시 들으며 요소를 찾았어요.', feeling: '뿌듯함', steps: 3, scaleLabels: ['가끔', '자주', '거의 늘'], ask: '살필 요소를 정하고 다시 들었나요?' }, target: { level: 'any' }, difficulty: 0.05 },
              { prompt: '분위기를 말할 때 그 까닭을 들린 소리로 말했나요? 솔직하게 눈금을 골라 보세요.', toolOptions: { mode: 'scale', situation: '곡의 분위기와 그 까닭을 친구들과 나누었어요.', feeling: '편안함', steps: 3, scaleLabels: ['가끔', '자주', '거의 늘'], ask: '까닭을 들린 소리로 말했나요?' }, target: { level: 'any' }, difficulty: 0.05 },
              { prompt: '나와 느낌이 다른 친구의 말을 끝까지 들었나요? 솔직하게 눈금을 골라 보세요.', toolOptions: { mode: 'scale', situation: '같은 곡을 듣고 친구와 느낌을 나누었어요.', feeling: '편안함', steps: 3, scaleLabels: ['가끔', '자주', '거의 늘'], ask: '다른 느낌을 끝까지 들었나요?' }, target: { level: 'any' }, difficulty: 0.05 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"다음에 집에서 들어 보고 싶은 곡과, 그 곡에서 살필 요소 하나를 정해 짝에게 말해 보세요." 몇 명의 계획을 듣는다. 출구 문항을 푼 뒤, 이번 단원의 감상 보고서를 모아 학급 감상 문집으로 묶는다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '감상 단원', slots: ['요소 찾기', '분위기와 쓰임'], cards: ['빠르기·셈여림 말 나누기', '운동회 곡 고르기', '높은 음·낮은 음 따라 치기'] }, prompt: '활동 카드를 두 부분으로 묶어 보세요.', target: { sort: { '요소 찾기': ['빠르기·셈여림 말 나누기', '높은 음·낮은 음 따라 치기'], '분위기와 쓰임': ['운동회 곡 고르기'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '처음 듣는 곡을 잘 감상하는 방법으로 가장 알맞은 것은?', options: ['한 번 듣고 좋은지 싫은지만 말해요', '살필 요소를 정해 다시 듣고 들린 것으로 말해요', '제목만 보고 분위기를 정해요'], answer: 1, difficulty: 0.15, explain: '요소를 정해 다시 듣고 들린 것으로 말하면 곡을 더 깊이 알 수 있어요.' },
          { type: 'tool', tool: 'keyboard', options: { from: '도', to: '높은도', melody: ['솔', '솔', '미', '미', '도'], tempo: 96 }, prompt: '가락 듣기를 누르고 들은 가락을 따라 쳐 보세요.', target: { notes: ['솔', '솔', '미', '미', '도'] }, difficulty: 0.15 },
          { type: 'mood', prompt: '감상 단원을 마친 내 마음은 어떤가요?' },
        ],
      },
    ],
    worksheet: {
      title: '감상 단원 돌아보기',
      items: [
        { type: 'table', prompt: '단원 세 부분에서 기억에 남는 곡과 한 일을 쓰세요.', columns: ['부분', '기억에 남는 곡', '한 일'], cells: [['요소 찾기', '', ''], ['여러 음악의 특징', '', ''], ['분위기와 쓰임', '', '']] },
        { type: 'choice', prompt: '좋은 감상 방법에 ○ 하세요.', options: ['제목만 보고 분위기를 정해요', '살필 요소를 정해 다시 들어요', '한 번 듣고 끝내요'], answer: '살필 요소를 정해 다시 들어요' },
        { type: 'table', prompt: '다음 감상 계획을 쓰세요.', columns: ['듣고 싶은 곡', '살필 요소', '언제 들을까'], rows: 1 },
        { type: 'short', prompt: '이번 단원에서 내 듣는 방법이 어떻게 달라졌는지 쓰세요.' },
      ],
      easy: {
        note: '세 부분: 요소 찾기 → 여러 음악의 특징 → 분위기와 쓰임.',
        items: [
          { type: 'short', prompt: '가장 기억에 남는 곡을 쓰세요.' },
          { type: 'choice', prompt: '좋은 감상 방법은?', options: ['다시 들어요', '한 번만 들어요'], answer: '다시 들어요' },
          { type: 'short', prompt: '다음에 듣고 싶은 곡을 쓰세요.' },
          { type: 'draw', prompt: '가장 기억에 남는 곡을 듣고 떠오른 장면을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞게 넣은 카드에 초록 테두리가 보이고, 가락을 듣는 동안 건반이 빛나요.',
      base: '카드를 스스로 확인하고, 계이름을 켜고 끌 수 있어요.',
      challenge: '카드가 섞여 나오고, 계이름 없는 건반에서 귀로만 따라 쳐요. 고르기는 맞힌 뒤에야 테두리가 보여요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 활동 카드를 어느 부분에 넣을지 모른다 → 칠판에 차시별 곡 목록을 다시 붙인다. ② 가락은 쳤지만 곡 이름을 떠올리지 못한다 → 곡의 첫 10초를 들려준다. ③ 자기 평가를 남과 견준다 → 눈금은 점수가 아니고 공개하지 않는다고 알려 준다. 학급 감상 문집은 학생 이름 대신 번호나 별명으로 엮어도 된다.',
  }));

  PaperLessons.registerUnit({
    id: 'g3-mus-1-02', schema: 'edu-unit.v1', catalogUnit: U,
    grade: 3, subject: '음악', unitTitle: '2. 감상',
    flow: '1~10차시에는 짧은 가락과 리듬을 따라 치고 몸으로 나타내며 높낮이·빠르기·셈여림·리듬 꼴 같은 기초 음악 요소를 하나씩 귀로 찾는다. 11~20차시에는 「수제천」과 ‘봄’, 「동물의 사육제」, 변주곡, 「도라지 타령」, 「대취타」와 사물놀이를 견주어 들으며 곡마다 다른 특징을 찾고, 소개 말과 흉내 리듬으로 친구들 앞에 발표한다. 친구가 말한 특징은 곡을 다시 들어 확인한 뒤에야 내 표에 보태고, 그 결과를 그래프로 묶어 정리한다. 21~29차시에는 노랫말 없는 곡에서도 빠르기·셈여림·악기 소리가 분위기를 만든다는 것을 알고, 분위기에 맞는 가락·몸짓·배경 음악을 지으며 곡이 어울리는 때와 곳을 찾는다. 마지막에는 느낌이 다른 친구와 까닭을 견주고 감상 보고서를 써 나눈 뒤, 단원을 돌아보며 다음 감상 계획을 세운다.',
    refs: {},
    lessons,
  });
})();
