/* 6학년 실과 1. 인간 발달과 주도적 삶 — 진로(1~4차시) → 옷차림(5~8차시) → 가정일(9~12차시).
 * 성취기준은 units-index의 단원 목록([6실01-05] 옷, [6실01-06] 가정일, [6실01-07] 진로)에서 차시 주제에 맞는 것만 적는다.
 */
(function () {
  const U = { catalog: 'g6-실과-1학기-1', grade: 6, subject: '실과', unitTitle: '1. 인간 발달과 주도적 삶' };
  const PROMPT = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const head = (n, title, objective, standards) => ({
    id: `g6-prac-1-01-${String(n).padStart(2, '0')}`, schema: 'edu-lesson.v1',
    catalog: { unit: U.catalog, lesson: n },
    grade: U.grade, subject: U.subject, unitTitle: U.unitTitle,
    title, objective, standards, minutes: 40, formats: ['chromebook', 'projector', 'print'],
  });
  const L = [];

  // ───────────────────────── 1차시 (intro) 진로: 둘레의 직업 찾기 ─────────────────────────
  L.push(Object.assign(head(1, '등굣길과 학교에서 만난 직업으로 직업 그물 만들기',
    '둘레에서 일하는 사람을 찾아 직업인지 가리고, 직업이 일하는 사람과 사회에 하는 일을 나누어 사례를 들 수 있다.', ['[6실01-07]']), {
    illustration: {
      prompt: PROMPT('a small town street at morning with a bus driver, a librarian, a street cleaner and a baker each at work around a school gate'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'sun', x: 410, y: 58, s: 0.8 }, { motif: 'cloud', x: 110, y: 50 }, { motif: 'hills', y: 206 },
        { motif: 'house', x: 90, y: 214 }, { motif: 'house', x: 200, y: 218, color: 'buttercup', s: 0.8 }, { motif: 'tree', x: 300, y: 214 },
        { motif: 'house', x: 390, y: 216, color: 'sky', s: 0.9 }, { motif: 'bird', x: 250, y: 84 },
        { motif: 'text', x: 240, y: 140, text: '오늘 아침 누구의 일을 만났나요?', size: 22 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"오늘 아침 집을 나와 이 자리에 앉기까지 몇 사람의 일 덕분이었을까요?" 버스 기사, 학교 보안관, 영양사처럼 떠오르는 대로 말하게 하고 칠판에 적는다. 시연 단추로 카드가 \'학교에서\'·\'길에서\' 가지에 열리는 모습을 보여 준 뒤 "이 단원에서는 일과 나, 옷차림, 집안일을 차례로 살펴 내 삶을 스스로 이끄는 힘을 기를 거예요."라고 단원 전체를 알린다. 텔레비전에 나오는 직업만 말하는 학생이 많으면 "어제 만난 사람 가운데 텔레비전에 나오지 않는 사람은요?"로 넓힌다.',
        student: '오늘 아침 등굣길에 일하는 모습을 본 사람을 세 명 떠올려 짝과 말해 봅시다.',
        demo: { tool: 'mindmap', options: { topic: '등굣길의 일', slots: ['학교에서', '길에서'], cards: ['학교 보안관', '버스 기사'], shuffle: false }, sequence: [{ sort: { 학교에서: ['학교 보안관'], 길에서: ['버스 기사'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 직업과 직업이 아닌 일 가리기', minutes: 9, tool: 'mindmap',
            teacher: '"돈을 받고 꾸준히 하는 일을 직업이라고 해요. 교통 봉사는 값진 일이지만 돈을 받나요?" 봉사·취미·숙제를 직업 바구니에 넣은 학생에게 \'돈을 받는지, 꾸준히 하는지\' 두 물음을 차례로 묻게 한다. 일터 나누기에서는 같은 병원에도 의사 말고 여러 직업이 있음을 짚는다.',
            task: '카드를 읽고 직업만 고르거나, 일하는 곳 가지에 나누어 넣어요. 직업은 돈을 받고 꾸준히 하는 일이에요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '등굣길에 만난 일 가운데 직업만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '직업', cards: ['버스 기사', '학교 보안관', '편의점 점원', '아침 산책하는 이웃', '숙제하는 형'] }, hints: ['돈을 받나요? 꾸준히 하나요? 두 물음에 모두 ‘네’라고 답할 수 있는 카드만 골라요.'], target: { pick: ['버스 기사', '학교 보안관', '편의점 점원'] }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['버스 기사', '학교 보안관', '편의점 점원', '아침 산책하는 이웃', '숙제하는 형', '교통 봉사하는 이웃'] } } } },
              { prompt: '직업 카드를 일하는 곳 가지에 나누어 넣어 보세요.', toolOptions: { topic: '일하는 곳', slots: ['학교에서', '병원에서', '길과 공원에서'], cards: ['영양사', '사서 교사', '간호사', '방사선사', '환경미화원', '조경사'] }, hints: ['그 사람이 날마다 일하러 가는 건물이나 장소를 떠올리고, 같은 곳 가지에 넣어요.'], target: { sort: { 학교에서: ['영양사', '사서 교사'], 병원에서: ['간호사', '방사선사'], '길과 공원에서': ['환경미화원', '조경사'] } }, difficulty: 0.2 },
              { prompt: '이웃이 아침마다 교통 봉사를 해요. 직업 바구니에 넣을까요?', toolOptions: { mode: 'pick', topic: '직업', cards: ['교통 봉사', '택시 기사', '어린이집 교사', '주말 등산'] }, hints: ['돈을 받나요? 꾸준히 하나요? 두 물음에 모두 ‘네’라고 답할 수 있는 카드만 골라요.'], target: { pick: ['택시 기사', '어린이집 교사'] }, difficulty: 0.25,
                predict: { q: '교통 봉사는 직업일까요?', options: ['직업이에요', '직업이 아니에요', '잘 모르겠어요'], answer: 1 },
                conclude: '봉사는 값진 일이지만 돈을 받지 않으므로 직업은 아니에요. 직업은 돈을 받고 꾸준히 하는 일이에요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 직업이 나와 사회에 하는 일 나누기', minutes: 9, tool: 'mindmap',
            teacher: '"버스 기사가 일을 하면 버스 기사 자신에게는 무엇이 좋을까요? 우리에게는요?" 두 가지를 나누어 말하게 한다. \'월급을 받아요\'만 떠올리는 학생에게 보람, 실력이 느는 것도 일하는 사람에게 돌아오는 것임을 짚고, 사회 쪽 카드는 \'누가 도움을 받나요?\'로 확인하게 한다.',
            task: '가운데 직업을 읽고, 카드를 \'일하는 사람에게\'와 \'사회에\' 가지로 나누어요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '버스 기사의 일이 누구에게 무엇을 주는지 나누어 보세요.', toolOptions: { topic: '버스 기사', slots: ['일하는 사람에게', '사회에'], cards: ['월급으로 생활해요', '운전 실력이 늘어요', '학생이 학교에 와요', '어르신이 병원에 가요'] }, hints: ['그 일 덕분에 좋은 것이 일하는 사람 자신에게 돌아오는지, 다른 사람이 도움을 받는지 따져 나누어요.'], target: { sort: { '일하는 사람에게': ['월급으로 생활해요', '운전 실력이 늘어요'], 사회에: ['학생이 학교에 와요', '어르신이 병원에 가요'] } }, difficulty: 0.15 },
              { prompt: '사서의 일이 누구에게 무엇을 주는지 나누어 보세요.', toolOptions: { topic: '사서', slots: ['일하는 사람에게', '사회에'], cards: ['책을 골라 주며 보람을 느껴요', '일한 만큼 돈을 벌어요', '누구나 책을 빌려 읽어요', '숙제 자료를 쉽게 찾아요'] }, hints: ['그 일 덕분에 좋은 것이 일하는 사람 자신에게 돌아오는지, 다른 사람이 도움을 받는지 따져 나누어요.'], target: { sort: { '일하는 사람에게': ['책을 골라 주며 보람을 느껴요', '일한 만큼 돈을 벌어요'], 사회에: ['누구나 책을 빌려 읽어요', '숙제 자료를 쉽게 찾아요'] } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['책을 골라 주며 보람을 느껴요', '일한 만큼 돈을 벌어요', '누구나 책을 빌려 읽어요', '숙제 자료를 쉽게 찾아요', '책을 모두 외워야 해요'] } } } },
              { prompt: '직업마다 사회에 하는 일을 한 장씩 이어 보세요.', toolOptions: { mode: 'match', topic: '사회에 하는 일', slots: [{ id: 'farm', label: '농부' }, { id: 'dev', label: '프로그래머' }, { id: 'box', label: '택배 기사' }], cards: ['먹을 쌀을 길러요', '앱을 만들어 생활을 도와요', '물건을 집까지 날라요', '상을 받아 유명해져요'] }, hints: ['직업 이름을 읽고, 그 직업 덕분에 우리가 무엇을 얻는지 떠올려 이어요. 일하는 사람만 좋은 카드는 남겨요.'], target: { match: { farm: '먹을 쌀을 길러요', dev: '앱을 만들어 생활을 도와요', box: '물건을 집까지 날라요' } }, difficulty: 0.2 },
            ],
          },
          {
            id: 'a3', title: '활동 3. 처음 듣는 직업으로 그물 넓히기', minutes: 9, tool: 'mindmap',
            teacher: '"벽지를 새로 바르는 사람을 무엇이라고 부를까요?" 처음 듣는 이름이 나와도 하는 일을 읽으면 짐작할 수 있다고 말해 준다. "이름을 처음 들었다고 직업이 아닌 것은 아니에요."라고 짚고, 오늘 처음 안 직업을 공책 여백에 적게 한다.',
            task: '하는 일을 읽고 직업 이름을 잇거나, 조건에 맞는 직업만 골라요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '하는 일을 읽고 알맞은 직업 이름을 이어 보세요.', toolOptions: { mode: 'match', topic: '이런 직업도 있어요', slots: [{ id: 'w', label: '벽지를 새로 발라요' }, { id: 'f', label: '숲에서 나무와 새를 소개해요' }, { id: 's', label: '공연 소리를 알맞게 맞춰요' }], cards: ['도배사', '숲 해설가', '음향 감독'] }, hints: ['하는 일에 나오는 낱말이 직업 이름 속 어느 글자와 이어지는지 찾아 짝 지어요.'], target: { match: { w: '도배사', f: '숲 해설가', s: '음향 감독' } }, difficulty: 0.2 },
              { prompt: '사람을 돌보고 돕는 직업만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '돌보고 돕는 직업', cards: ['요양 보호사', '언어 재활사', '보육 교사', '건축가', '음향 감독'] }, hints: ['그 직업이 일하는 시간 대부분을 사람 곁에서 돌보거나 돕는 데 쓰는지 따져 골라요.'], target: { pick: ['요양 보호사', '언어 재활사', '보육 교사'] }, difficulty: 0.25 },
              { prompt: '카드 가운데 직업을 모두 골라 보세요. 처음 듣는 이름도 있어요.', toolOptions: { mode: 'pick', topic: '직업', cards: ['제과 기능장', '지하철 기관사', '수어 통역사', '친구와 축구하기', '내 방 정리하기'] }, hints: ['이름이 낯설어도 돈을 받는지, 꾸준히 하는지 두 물음으로 가려요.'], target: { pick: ['제과 기능장', '지하철 기관사', '수어 통역사'] }, difficulty: 0.3,
                levels: { challenge: { toolOptions: { cards: ['제과 기능장', '지하철 기관사', '수어 통역사', '친구와 축구하기', '내 방 정리하기', '동네 공원 줍깅 봉사'] } } },
                predict: { q: '이름을 처음 듣는 일도 직업일 수 있을까요?', options: ['그럴 수 있어요', '아니에요', '잘 모르겠어요'], answer: 0 },
                conclude: '우리가 잘 모르는 직업도 많아요. 돈을 받고 꾸준히 하며 누군가를 돕는다면 직업이에요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"오늘 처음 안 직업 하나를 말하고, 그 직업이 사회에 하는 일을 한 문장으로 말해 볼까요?" 출구 1번에서 취미 카드를 고른 학생은 \'돈을 받는지, 꾸준히 하는지\'를 다시 묻는다. 다음 시간에는 이 직업들 가운데 나에게 맞는 일을 찾기 위해 먼저 나를 알아본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '직업', cards: ['제빵사', '집배원', '저녁 먹기', '줄넘기 연습'] }, prompt: '직업만 바구니에 넣어 보세요.', target: { pick: ['제빵사', '집배원'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '환경미화원이 사회에 하는 일로 알맞은 것은 무엇인가요?', options: ['월급을 받아 생활해요', '거리를 깨끗하게 해 모두가 건강해요', '일을 하며 체력이 좋아져요'], answer: 1, difficulty: 0.15, explain: '월급과 체력은 일하는 사람에게 돌아오는 것이고, 깨끗한 거리는 사회에 하는 일이에요.' },
          { type: 'short', prompt: '오늘 처음 안 직업 하나와 그 직업이 사회에 하는 일을 쓰세요.' },
          { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '우리 둘레의 직업 그물',
      items: [
        { type: 'figure', wide: true, prompt: '가지마다 그곳에서 일하는 직업을 두 가지씩 써 넣으세요.', tool: 'mindmap', figures: [{ options: { topic: '우리 동네 직업', printCards: false, slots: ['학교', '병원', '가게', '길과 공원'], cards: ['보기'] }, caption: '' }], answer: '예: 학교 — 영양사·사서 교사 / 병원 — 간호사·방사선사' },
        { type: 'choice', prompt: '직업인 것에 ○ 하세요.', options: ['주말에 낚시하기', '수어 통역사', '친구 숙제 도와주기'], answer: '수어 통역사' },
        { type: 'table', prompt: '직업이 하는 일을 나누어 쓰세요.', columns: ['직업', '일하는 사람에게', '사회에'], cells: [['택배 기사', '', ''], ['사서', '', ''], ['', '', '']] },
        { type: 'short', prompt: '텔레비전에는 잘 나오지 않지만 우리 생활에 꼭 필요한 직업 하나를 쓰고, 그 까닭을 쓰세요.' },
      ],
      easy: {
        note: '직업은 돈을 받고 꾸준히 하는 일이에요. 그 일 덕분에 누가 도움을 받는지 떠올려요.',
        items: [
          { type: 'figure', wide: true, prompt: '가지마다 그곳에서 일하는 직업을 하나씩 써 넣으세요.', tool: 'mindmap', figures: [{ options: { topic: '우리 동네 직업', printCards: false, slots: ['학교', '병원'], cards: ['보기'] }, caption: '' }], answer: '예: 학교 — 영양사 / 병원 — 간호사' },
          { type: 'choice', prompt: '직업인 것에 ○ 하세요.', options: ['버스 기사', '줄넘기 연습'], answer: '버스 기사' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '택배 기사는 주문한 물건을 ___까지 날라 줘요.', answer: '집' },
          { type: 'short', prompt: '오늘 아침에 만난 직업 하나를 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '알맞은 바구니·가지에 넣으면 초록 테두리가 생기고, 틀리게 넣으면 까닭을 말해 주고 되돌아와요.',
      base: '모두 넣은 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '직업 고르기·사서 나누기·처음 듣는 직업 고르기에 헷갈리는 카드(교통 봉사, 책을 모두 외워야 해요, 동네 공원 줍깅 봉사)가 한 장씩 더 나와요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 잘 알려진 직업(의사·연예인·운동선수)만 직업으로 여겨 둘레의 일을 빼 놓는다 → 등굣길·학교 안의 일부터 찾게 한다. ② 봉사·취미·숙제도 직업으로 고른다 → \'돈을 받는지, 꾸준히 하는지\' 두 물음으로 가린다. ③ 직업이 사회에 하는 일을 \'돈을 번다\'로만 말한다 → 그 일 덕분에 도움받는 사람을 떠올리게 한다.',
  }));

  // ───────────────────────── 2차시 (practice) 진로: 흥미·적성·성격 ─────────────────────────
  L.push(Object.assign(head(2, '물음을 만들어 나의 흥미·적성·성격 알아보기',
    '흥미·적성·성격을 가르는 물음을 만들고, 자신과 친구의 답을 세 갈래로 나누어 말할 수 있다.', ['[6실01-07]']), {
    illustration: {
      prompt: PROMPT('a child looking into a big paper mirror that shows three glowing bubbles for likes, strengths and personality, with question marks floating around'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'moon', x: 410, y: 58, s: 0.7 }, { motif: 'star', x: 90, y: 60 }, { motif: 'star', x: 170, y: 40, color: 'rose', s: 0.7 },
        { motif: 'hills', y: 210 }, { motif: 'tree', x: 80, y: 216 }, { motif: 'flower', x: 400, y: 226 },
        { motif: 'text', x: 240, y: 130, text: '좋아하는 것? 잘하는 것? 나의 모습?', size: 21 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"좋아하는 일과 잘하는 일은 언제나 같을까요?" 두세 명에게 예를 들게 한다(축구를 좋아하지만 달리기는 느려요). 시연 단추로 \'노래를 들으면 신나요\'가 흥미, \'줄넘기를 오래 해요\'가 적성 가지에 들어가는 모습을 보여 준다. 흥미는 좋아하는 것, 적성은 잘하거나 빨리 느는 것, 성격은 나의 행동 모습이라고 판서한다.',
        student: '내가 좋아하는 일 하나와 잘하는 일 하나를 떠올려 봅시다. 둘이 같나요?',
        demo: { tool: 'mindmap', options: { topic: '나', slots: ['흥미', '적성'], cards: ['노래를 들으면 신나요', '줄넘기를 오래 해요'], shuffle: false }, sequence: [{ sort: { 흥미: ['노래를 들으면 신나요'], 적성: ['줄넘기를 오래 해요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 흥미·적성·성격 가지에 나누기', minutes: 9, tool: 'mindmap',
            teacher: '"\'즐겨 해요\', \'기다려져요\'는 마음이 끌린다는 말이에요. \'빨리, 정확히\'는 무엇을 말하나요?" 문장의 끝말에서 단서를 찾게 한다. 성격 카드를 흥미에 넣는 학생에게 "이것은 좋아하는 활동인가요, 내가 어떻게 행동하는 사람인가요?"라고 되묻는다.',
            task: '문장을 읽고 흥미(좋아해요)·적성(잘해요)·성격(나의 모습) 가지에 나누어 넣어요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '문장을 흥미와 적성 가지로 나누어 보세요.', toolOptions: { topic: '나를 알아보기', slots: [{ id: '흥미', label: '흥미', sub: '좋아해요' }, { id: '적성', label: '적성', sub: '잘해요' }], cards: ['만들기 시간이 기다려져요', '종이접기를 빠르고 정확히 해요', '동물 영상을 즐겨 봐요', '수 계산 실수가 적어요'] }, hints: ['문장 끝이 좋아해요·기다려져요처럼 마음이 끌리는 말인지, 빠르고 정확하다는 솜씨 말인지 봐요.'], target: { sort: { 흥미: ['만들기 시간이 기다려져요', '동물 영상을 즐겨 봐요'], 적성: ['종이접기를 빠르고 정확히 해요', '수 계산 실수가 적어요'] } }, difficulty: 0.15 },
              { prompt: '문장을 흥미·적성·성격 세 가지로 나누어 보세요.', toolOptions: { topic: '나를 알아보기', slots: [{ id: '흥미', label: '흥미', sub: '좋아해요' }, { id: '적성', label: '적성', sub: '잘해요' }, { id: '성격', label: '성격', sub: '나의 모습' }], cards: ['요리 영상을 즐겨 봐요', '과학 시간이 가장 즐거워요', '들은 노래를 바로 따라 불러요', '글을 짧고 분명하게 써요', '처음 본 친구와 금방 친해져요', '혼자 조용히 하는 일이 편해요'] }, hints: ['문장 끝이 좋아해요·기다려져요인지(마음이 끌림), 잘해요·빨라요인지(솜씨), 행동하는 모습인지 봐요. 나를 알려 주지 않는 문장은 남겨요.'], target: { sort: { 흥미: ['요리 영상을 즐겨 봐요', '과학 시간이 가장 즐거워요'], 적성: ['들은 노래를 바로 따라 불러요', '글을 짧고 분명하게 써요'], 성격: ['처음 본 친구와 금방 친해져요', '혼자 조용히 하는 일이 편해요'] } }, difficulty: 0.3,
                levels: { challenge: { toolOptions: { cards: ['요리 영상을 즐겨 봐요', '과학 시간이 가장 즐거워요', '들은 노래를 바로 따라 불러요', '글을 짧고 분명하게 써요', '처음 본 친구와 금방 친해져요', '혼자 조용히 하는 일이 편해요', '어제 피자를 먹었어요'] } } } },
              { prompt: '민지가 한 말을 세 가지로 나누어 보세요.', toolOptions: { topic: '민지의 답', slots: [{ id: '흥미', label: '흥미', sub: '좋아해요' }, { id: '적성', label: '적성', sub: '잘해요' }, { id: '성격', label: '성격', sub: '나의 모습' }], cards: ['그림은 몇 시간도 그려요', '반 포스터를 늘 맡아요', '계획표부터 짜고 움직여요', '친구 말을 끝까지 들어요'] }, hints: ['문장 끝이 좋아해요·기다려져요인지(마음이 끌림), 잘해요·빨라요인지(솜씨), 행동하는 모습인지 봐요. 나를 알려 주지 않는 문장은 남겨요.'], target: { sort: { 흥미: ['그림은 몇 시간도 그려요'], 적성: ['반 포스터를 늘 맡아요'], 성격: ['계획표부터 짜고 움직여요', '친구 말을 끝까지 들어요'] } }, difficulty: 0.3,
                predict: { q: '\'반 포스터를 늘 맡아요\'는 무엇을 알려 줄까요?', options: ['흥미', '적성', '성격'], answer: 1 },
                conclude: '친구들이 자꾸 맡기는 일은 내가 잘하는 일(적성)을 알려 주는 단서예요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 나를 알아보는 물음 만들기', minutes: 9, tool: 'mindmap',
            teacher: '"흥미를 알아보려면 어떤 물음을 해야 할까요? \'무엇을 좋아해?\' 말고 더 잘 드러나는 물음은요?" 물음 카드를 갈래에 잇게 한 뒤, 같은 틀로 자기 물음을 하나씩 만들어 공책에 적게 한다. \'인기 있는 직업은?\'처럼 나와 상관없는 물음을 고른 학생에게 "이 답이 나에 대해 무엇을 알려 주나요?"라고 묻는다.',
            task: '가지마다 그 갈래를 알아보기에 알맞은 물음 카드를 한 장씩 이어요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '흥미·적성·성격을 알아보는 물음을 하나씩 이어 보세요.', toolOptions: { mode: 'match', topic: '나에게 묻기', slots: [{ id: 'i', label: '흥미' }, { id: 'a', label: '적성' }, { id: 'p', label: '성격' }], cards: ['시간 가는 줄 모르는 일은?', '친구들이 나에게 부탁하는 일은?', '여럿과 혼자, 어느 쪽이 편해?', '요즘 인기 있는 직업은?'] }, hints: ['물음의 답이 내가 좋아하는 것, 남보다 잘하는 것, 내가 행동하는 방식 가운데 무엇을 알려 줄지 따져 이어요.'], target: { match: { i: '시간 가는 줄 모르는 일은?', a: '친구들이 나에게 부탁하는 일은?', p: '여럿과 혼자, 어느 쪽이 편해?' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['시간 가는 줄 모르는 일은?', '친구들이 나에게 부탁하는 일은?', '여럿과 혼자, 어느 쪽이 편해?', '요즘 인기 있는 직업은?', '친구가 좋아하는 색은?'] } } } },
              { prompt: '다른 물음 카드로 한 번 더 이어 보세요.', toolOptions: { mode: 'match', topic: '나에게 묻기', slots: [{ id: 'i', label: '흥미' }, { id: 'a', label: '적성' }, { id: 'p', label: '성격' }], cards: ['쉬는 날 먼저 하고 싶은 일은?', '칭찬을 가장 자주 듣는 일은?', '계획을 세워 하나, 그때그때 하나?', '친구는 어떤 직업을 원해?'] }, hints: ['물음의 답이 내가 좋아하는 것, 남보다 잘하는 것, 내가 행동하는 방식 가운데 무엇을 알려 줄지 따져 이어요.'], target: { match: { i: '쉬는 날 먼저 하고 싶은 일은?', a: '칭찬을 가장 자주 듣는 일은?', p: '계획을 세워 하나, 그때그때 하나?' } }, difficulty: 0.25 },
              { prompt: '나를 알아보는 차례대로 카드를 놓아 보세요.', toolOptions: { mode: 'order', cards: ['갈래별 물음 만들기', '물음에 내 답 적기', '답에서 공통점 찾기', '어울리는 일 떠올리기'] }, hints: ['물음이 있어야 답을 쓰고, 답이 모여야 나의 모습이 보인다는 흐름을 떠올려요.'], target: { order: ['갈래별 물음 만들기', '물음에 내 답 적기', '답에서 공통점 찾기', '어울리는 일 떠올리기'] }, difficulty: 0.2 },
            ],
          },
          {
            id: 'a3', title: '활동 3. 나를 알아보는 좋은 방법 고르기', minutes: 9, tool: 'emotion',
            teacher: '"흥미 검사 결과가 한 번 나오면 그것으로 꿈이 정해질까요?" 검사는 참고 자료이고, 직접 해 본 경험과 둘레 사람의 말을 함께 살펴야 함을 짚는다. 친구 꿈을 그대로 따라 하겠다는 학생에게는 "친구의 흥미와 내 흥미가 같나요?"라고 묻는다.',
            task: '상황을 읽고 어떻게 할지 고르거나, 나를 알아보는 좋은 방법만 골라요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '나를 알아보는 좋은 방법만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '나를 알아보는 방법', weather: false, cards: ['여러 활동을 직접 해 보기', '가족에게 내 장점 묻기', '진로 흥미 검사 해 보기', '인기 순위로 꿈 정하기', '친구 꿈을 그대로 따르기'] }, hints: ['그 방법이 나의 흥미·적성을 직접 알려 주는지, 다른 사람의 기준을 그대로 따르는 것인지 따져 골라요.'], target: { pick: ['여러 활동을 직접 해 보기', '가족에게 내 장점 묻기', '진로 흥미 검사 해 보기'] }, difficulty: 0.15,
                levels: { easy: { toolOptions: { live: true, instant: true } }, challenge: { toolOptions: { cards: ['여러 활동을 직접 해 보기', '가족에게 내 장점 묻기', '진로 흥미 검사 해 보기', '인기 순위로 꿈 정하기', '친구 꿈을 그대로 따르기', '하루 만에 꿈 정하기'] } } } },
              { prompt: '준호는 검사 결과와 친구들 꿈이 달라 고민이에요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '준호', situation: '흥미 검사에서 \'탐구형\'이 나왔어요. 그런데 친구들은 다 같이 유튜버가 되자고 해요.', feeling: '걱정', choices: [
                { id: 'mix', text: '검사 결과와 내가 해 본 일을 함께 살펴요', result: '실험 동아리를 해 보며 내 흥미를 확인해요.', mood: '뿌듯함' },
                { id: 'follow', text: '친구들처럼 유튜버로 정해요', result: '나는 왜 그 일을 하는지 모르게 돼요.', mood: '걱정', why: '친구의 흥미와 내 흥미가 같은지 먼저 따져 봐요.' },
                { id: 'only', text: '검사 결과만 보고 바로 직업을 정해요', result: '해 보지도 않은 일로 꿈이 굳어져요.', mood: '걱정', why: '검사는 참고 자료예요. 직접 해 본 경험도 함께 봐요.' }] }, target: { choice: 'mix' }, difficulty: 0.2 },
              { prompt: '민지는 잘하는 일과 좋아하는 일이 달라요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '민지', situation: '수학 문제는 잘 풀지만 그림 그리기가 훨씬 좋아요. 무엇을 보고 진로를 찾을지 고민돼요.', choices: [
                { id: 'both', text: '둘을 함께 쓰는 일을 찾아봐요', result: '그림과 계산을 함께 쓰는 디자인·건축 일을 알게 돼요.', mood: '신남' },
                { id: 'math', text: '좋아하는 마음은 접고 잘하는 것만 봐요', result: '하기 싫은 마음이 점점 커져요.', mood: '속상함', why: '흥미도 진로를 찾는 중요한 단서예요.' },
                { id: 'none', text: '아직 어리니 생각하지 않아요', result: '나를 알아볼 기회를 놓쳐요.', mood: '걱정', why: '지금부터 조금씩 알아 가면 더 넓게 고를 수 있어요.' }] }, target: { choice: 'both' }, difficulty: 0.25,
                levels: { challenge: { toolOptions: { revealAfterCheck: true } } },
                conclude: '흥미와 적성이 다를 때는 둘을 함께 살릴 수 있는 일을 찾아보면 선택지가 넓어져요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"오늘 만든 물음 가운데 나에 대해 가장 많이 알려 준 물음은 무엇이었나요?" 두세 명이 발표하게 한다. 출구 1번에서 성격 문장을 흥미로 넣은 학생은 \'좋아하는 활동인지, 행동하는 모습인지\'를 다시 묻는다. 다음 시간에는 오늘 찾은 나의 모습에 맞는 관심 직업 두 가지를 조사한다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '준호의 답', slots: [{ id: '흥미', label: '흥미', sub: '좋아해요' }, { id: '성격', label: '성격', sub: '나의 모습' }], cards: ['블록 쌓기는 몇 시간도 해요', '약속 시간을 꼭 지켜요'] }, prompt: '준호의 답을 흥미와 성격 가지에 나누어 보세요.', target: { sort: { 흥미: ['블록 쌓기는 몇 시간도 해요'], 성격: ['약속 시간을 꼭 지켜요'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '\'반에서 줄넘기 기록이 늘 가장 좋아요.\'는 무엇을 알려 주나요?', options: ['흥미', '적성', '성격'], answer: 1, difficulty: 0.2, explain: '다른 사람보다 잘하는 일은 적성을 알려 주는 단서예요.' },
          { type: 'short', prompt: '나를 알아보는 물음 하나를 만들고, 그 물음에 대한 내 답을 쓰세요.' },
          { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '나를 알아보는 물음',
      items: [
        { type: 'table', prompt: '갈래마다 물음을 하나씩 만들고 내 답을 쓰세요.', columns: ['갈래', '내가 만든 물음', '나의 답'], cells: [['흥미', '', ''], ['적성', '', ''], ['성격', '', '']] },
        { type: 'choice', prompt: '적성을 알아보는 물음에 ○ 하세요.', options: ['쉬는 날 하고 싶은 일은?', '칭찬을 자주 듣는 일은?', '친구가 원하는 직업은?'], answer: '칭찬을 자주 듣는 일은?' },
        { type: 'figure', wide: true, prompt: '가지마다 나에 대한 문장을 하나씩 써 넣으세요.', tool: 'mindmap', figures: [{ options: { topic: '나', printCards: false, slots: ['흥미', '적성', '성격'], cards: ['보기'] }, caption: '' }], answer: '예: 흥미 — 동물 영상을 즐겨 봐요 / 적성 — 계산이 빨라요 / 성격 — 계획을 세워요' },
        { type: 'short', prompt: '흥미와 적성이 다를 때 진로를 어떻게 찾으면 좋을지 내 생각을 쓰세요.' },
      ],
      easy: {
        note: '흥미 = 좋아하는 것, 적성 = 잘하는 것, 성격 = 나의 행동 모습이에요.',
        items: [
          { type: 'blank', prompt: '나에 대해 빈칸을 채우세요.', text: '나는 ___을(를) 좋아하고, ___을(를) 잘해요.', answer: '예: 그림 그리기, 계산' },
          { type: 'choice', prompt: '흥미를 알아보는 물음에 ○ 하세요.', options: ['시간 가는 줄 모르는 일은?', '친구가 원하는 직업은?'], answer: '시간 가는 줄 모르는 일은?' },
          { type: 'choice', prompt: '성격을 말하는 문장에 ○ 하세요.', options: ['계획표부터 짜고 움직여요', '종이접기를 빨리 해요'], answer: '계획표부터 짜고 움직여요' },
          { type: 'short', prompt: '친구들이 나에게 자주 부탁하는 일을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '가지 이름 아래에 \'좋아해요·잘해요·나의 모습\'이 보이고, 맞게 넣으면 초록 테두리, 틀리면 까닭이 나와요.',
      base: '모두 넣은 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '세 갈래 나누기·물음 잇기·방법 고르기에 헷갈리는 카드(어제 피자를 먹었어요, 친구가 좋아하는 색은?, 하루 만에 꿈 정하기)가 한 장씩 더 나와 남겨야 해요. 민지의 상황은 맞게 골라야 결과가 보여요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 흥미와 적성을 같은 것으로 여긴다 → \'좋아해요\'와 \'잘해요\'를 문장 끝말로 가르게 한다. ② 성격 문장을 흥미에 넣는다 → 활동 이름이 아니라 행동하는 모습인지 묻는다. ③ 검사 한 번이나 친구 꿈으로 진로를 정한다 → 직접 해 본 경험·둘레 사람의 말·검사를 함께 본다.',
  }));

  // ───────────────────────── 3차시 (core) 진로: 관심 직업 조사 ─────────────────────────
  L.push(Object.assign(head(3, '관심 직업 두 가지를 조사해 하는 일과 준비 정리하기',
    '직업 소개 자료를 읽고 관심 직업의 하는 일과 필요한 준비를 나누어 표로 정리하고, 성별·나이에 대한 고정 관념을 가려낼 수 있다.', ['[6실01-07]']), {
    illustration: {
      prompt: PROMPT('two open paper folders on a desk, one showing a veterinarian with a puppy and one showing a weather forecaster with clouds, with a magnifying glass and sticky notes'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'cloud', x: 120, y: 56 }, { motif: 'sun', x: 400, y: 60, s: 0.8 }, { motif: 'hills', y: 208 },
        { motif: 'house', x: 110, y: 216 }, { motif: 'tree', x: 370, y: 214 }, { motif: 'bird', x: 280, y: 90 },
        { motif: 'text', x: 240, y: 140, text: '그 직업은 무슨 일을 할까요?', size: 22 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"수의사가 되려면 동물을 좋아하기만 하면 될까요?" 대답을 듣고, 시연 단추로 \'아픈 동물을 진찰해요\'는 하는 일, \'수의학을 공부해요\'는 필요한 준비 가지에 들어가는 모습을 보여 준다. 지난 시간에 찾은 나의 흥미·적성을 떠올려 관심 직업 두 가지를 공책에 적게 한다.',
        student: '지난 시간에 찾은 나의 흥미와 적성에 어울리는 직업 두 가지를 적어 봅시다.',
        demo: { tool: 'mindmap', options: { topic: '수의사', slots: ['하는 일', '필요한 준비'], cards: ['아픈 동물을 진찰해요', '수의학을 공부해요'], shuffle: false }, sequence: [{ sort: { '하는 일': ['아픈 동물을 진찰해요'], '필요한 준비': ['수의학을 공부해요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 소개 자료에서 하는 일과 준비 나누기', minutes: 10, tool: 'mindmap',
            teacher: '"\'~해요\'로 끝나는 일과 \'~을 따요, ~을 공부해요\'로 끝나는 준비를 나누어 볼까요?" 수의사는 대학에서 수의학을 6년 공부하고 국가 시험으로 면허를 따야 한다는 것을 짚는다. \'키가 커야 해요\'를 준비로 넣은 학생에게 "그 직업을 하는 데 정말 필요한 조건인가요?"라고 묻는다.',
            task: '가운데 직업 이름을 읽고, 카드를 하는 일과 필요한 준비 가지로 나누어요. 상관없는 카드는 남겨요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '수의사 소개 카드를 하는 일과 필요한 준비로 나누어 보세요.', toolOptions: { topic: '수의사', slots: ['하는 일', '필요한 준비'], cards: ['아픈 동물을 진찰해요', '예방 주사를 놓아요', '대학에서 수의학을 6년 공부해요', '수의사 면허를 따요'] }, hints: ['그 직업에 들어가서 날마다 하는 일인지, 그 일을 하려고 미리 배우거나 따는 것인지 문장 끝을 봐요. 일과 상관없는 조건은 남겨요.'], target: { sort: { '하는 일': ['아픈 동물을 진찰해요', '예방 주사를 놓아요'], '필요한 준비': ['대학에서 수의학을 6년 공부해요', '수의사 면허를 따요'] } }, difficulty: 0.15 },
              { prompt: '기상 예보관 소개 카드를 나누어 보세요.', toolOptions: { topic: '기상 예보관', slots: ['하는 일', '필요한 준비'], cards: ['날씨 자료를 분석해요', '내일 날씨를 알려요', '대학에서 대기 과학을 공부해요', '수학·과학을 꾸준히 익혀요'] }, hints: ['그 직업에 들어가서 날마다 하는 일인지, 그 일을 하려고 미리 배우거나 따는 것인지 문장 끝을 봐요. 일과 상관없는 조건은 남겨요.'], target: { sort: { '하는 일': ['날씨 자료를 분석해요', '내일 날씨를 알려요'], '필요한 준비': ['대학에서 대기 과학을 공부해요', '수학·과학을 꾸준히 익혀요'] } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['날씨 자료를 분석해요', '내일 날씨를 알려요', '대학에서 대기 과학을 공부해요', '수학·과학을 꾸준히 익혀요', '남자여야 해요'] } } } },
              { prompt: '제빵사 소개 카드를 나누어 보세요. 상관없는 카드는 남겨요.', toolOptions: { topic: '제빵사', slots: ['하는 일', '필요한 준비'], cards: ['빵과 과자를 만들어요', '새 메뉴를 개발해요', '제빵 기능사 자격을 따요', '위생 교육을 받아요', '키가 커야 해요'] }, hints: ['그 직업에 들어가서 날마다 하는 일인지, 그 일을 하려고 미리 배우거나 따는 것인지 문장 끝을 봐요. 일과 상관없는 조건은 남겨요.'], target: { sort: { '하는 일': ['빵과 과자를 만들어요', '새 메뉴를 개발해요'], '필요한 준비': ['제빵 기능사 자격을 따요', '위생 교육을 받아요'] } }, difficulty: 0.3,
                predict: { q: '\'키가 커야 해요\'는 어디에 넣을까요?', options: ['하는 일', '필요한 준비', '어디에도 넣지 않아요'], answer: 2 },
                conclude: '그 직업에 정말 필요한 준비만 넣어요. 키나 성별처럼 일과 상관없는 조건은 준비가 아니에요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 지금 할 수 있는 준비 잇기', minutes: 9, tool: 'mindmap',
            teacher: '"어른이 되어야만 준비할 수 있을까요? 6학년인 지금 할 수 있는 일은요?" 직업마다 지금 해 볼 수 있는 준비를 잇게 한다. \'유명해질 때까지 기다리기\'처럼 할 일이 없는 카드를 고른 학생에게 "그 카드에는 내가 하는 일이 들어 있나요?"라고 묻는다.',
            task: '가지의 직업마다 6학년인 지금 해 볼 수 있는 준비 카드를 한 장씩 이어요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '두 직업에 지금 할 수 있는 준비를 이어 보세요.', toolOptions: { mode: 'match', topic: '지금 할 수 있는 준비', slots: [{ id: 'toon', label: '웹툰 작가' }, { id: 'dev', label: '프로그래머' }], cards: ['날마다 네 칸 만화 그리기', '블록 코딩으로 게임 만들기', '유명해질 때까지 기다리기'] }, hints: ['카드에 지금 내가 직접 할 행동이 들어 있는지, 그 행동이 그 직업이 하는 일과 닮았는지 따져 이어요.'], target: { match: { toon: '날마다 네 칸 만화 그리기', dev: '블록 코딩으로 게임 만들기' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['날마다 네 칸 만화 그리기', '블록 코딩으로 게임 만들기', '유명해질 때까지 기다리기', '인기 웹툰 구경만 하기'] } } } },
              { prompt: '다른 두 직업에 지금 할 수 있는 준비를 이어 보세요.', toolOptions: { mode: 'match', topic: '지금 할 수 있는 준비', slots: [{ id: 'nurse', label: '간호사' }, { id: 'reporter', label: '기자' }], cards: ['응급 처치 교실 참여하기', '학급 신문에 기사 쓰기', '드라마로만 직업 알아보기'] }, hints: ['카드에 지금 내가 직접 할 행동이 들어 있는지, 그 행동이 그 직업이 하는 일과 닮았는지 따져 이어요.'], target: { match: { nurse: '응급 처치 교실 참여하기', reporter: '학급 신문에 기사 쓰기' } }, difficulty: 0.2 },
              { prompt: '세 직업에 지금 할 수 있는 준비를 이어 보세요.', toolOptions: { mode: 'match', topic: '지금 할 수 있는 준비', slots: [{ id: 'arch', label: '건축가' }, { id: 'keeper', label: '동물 사육사' }, { id: 'chef', label: '요리사' }], cards: ['블록으로 집 모형 만들기', '반려동물 돌봄 일지 쓰기', '가족과 샐러드 만들기', '키가 크도록 기다리기'] }, hints: ['카드에 지금 내가 직접 할 행동이 들어 있는지, 그 행동이 그 직업이 하는 일과 닮았는지 따져 이어요.'], target: { match: { arch: '블록으로 집 모형 만들기', keeper: '반려동물 돌봄 일지 쓰기', chef: '가족과 샐러드 만들기' } }, difficulty: 0.25 },
            ],
          },
          {
            id: 'a3', title: '활동 3. 고정 관념 없이 직업 바라보기', minutes: 8, tool: 'emotion',
            teacher: '"남자 간호사, 여자 비행기 조종사를 본 적 있나요?" 실제로 두 직업 모두 성별과 상관없이 일하고 있음을 말해 준다. \'성별이나 나이에 따라 할 수 있는 직업이 정해져 있다\'는 생각을 고정 관념이라 부르고, 그 말을 들었을 때 어떻게 할지 고르게 한다.',
            task: '상황을 읽고 어떻게 할지 고르거나, 고정 관념이 담긴 말만 골라요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '준호의 꿈을 듣고 친구가 웃었어요. 준호는 어떻게 하면 좋을까요?', toolOptions: { mode: 'branch', who: '준호', situation: '간호사가 되고 싶다고 하자 친구가 "남자가 무슨 간호사야?" 하고 웃었어요.', feeling: '속상함', choices: [
                { id: 'say', text: '간호사는 누구나 할 수 있다고 말해요', result: '친구도 남자 간호사가 많다는 것을 알게 돼요.', mood: '뿌듯함' },
                { id: 'quit', text: '부끄러워서 꿈을 바꿔요', result: '좋아하던 꿈을 잃어요.', mood: '슬픔', why: '성별은 직업을 고르는 조건이 아니에요.' },
                { id: 'laugh', text: '친구를 따라 같이 웃어요', result: '내 마음과 다른 말을 하게 돼요.', mood: '속상함', why: '내 꿈을 스스로 지키는 말을 떠올려 봐요.' }] }, target: { choice: 'say' }, difficulty: 0.15 },
              { prompt: '민지는 조종사가 꿈이에요. 이모의 말을 듣고 어떻게 할까요?', toolOptions: { mode: 'branch', who: '민지', situation: '비행기 조종사가 꿈이라고 하자 이모가 "여자는 승무원이 낫지." 하셨어요.', choices: [
                { id: 'find', text: '조종사가 되는 준비를 찾아 이모께 말씀드려요', result: '이모가 민지의 꿈을 응원해 주세요.', mood: '기쁨' },
                { id: 'change', text: '이모 말대로 꿈을 승무원으로 바꿔요', result: '내가 원하던 일은 해 보지도 못해요.', mood: '속상함', why: '어른의 말도 고정 관념일 수 있어요.' },
                { id: 'angry', text: '이모에게 화를 내요', result: '이야기를 더 나누기 어려워져요.', mood: '화남', why: '내 생각을 차분히 말하는 방법을 골라 봐요.' }] }, target: { choice: 'find' }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { revealAfterCheck: true } } } },
              { prompt: '고정 관념이 담긴 말만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '고정 관념이 담긴 말', weather: false, cards: ['여자는 과학자가 어려워', '나이 들면 새 일을 못 해', '남자는 보육 교사를 못 해', '관심 있는 일을 준비하자'] }, hints: ['성별이나 나이 때문에 할 수 있는 일이 정해진다고 말하는 카드인지 따져 골라요.'], target: { pick: ['여자는 과학자가 어려워', '나이 들면 새 일을 못 해', '남자는 보육 교사를 못 해'] }, difficulty: 0.2,
                levels: { easy: { toolOptions: { live: true, instant: true } }, challenge: { toolOptions: { cards: ['여자는 과학자가 어려워', '나이 들면 새 일을 못 해', '남자는 보육 교사를 못 해', '관심 있는 일을 준비하자', '여자 소방관도 많아'] } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"내 관심 직업 두 가지의 하는 일과 필요한 준비를 표에 한 줄씩 채웠나요?" 활동지 1번 표를 짝과 바꿔 읽게 한다. 출구 2번을 틀린 학생에게는 \'성별이나 나이가 그 일을 하는 데 꼭 필요한 조건인지\'를 다시 묻는다. 다음 시간에는 이 표를 바탕으로 올해 해 볼 일을 정한다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '드론 조종사', slots: ['하는 일', '필요한 준비'], cards: ['드론으로 다리 안전을 살펴요', '드론 조종 자격을 따요'] }, prompt: '드론 조종사 카드를 하는 일과 필요한 준비로 나누어 보세요.', target: { sort: { '하는 일': ['드론으로 다리 안전을 살펴요'], '필요한 준비': ['드론 조종 자격을 따요'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '직업에 대한 생각으로 알맞은 것은 무엇인가요?', options: ['요리사는 남자가 하는 일이에요', '흥미와 적성에 맞으면 누구나 준비할 수 있어요', '어른이 되기 전에는 준비할 것이 없어요'], answer: 1, difficulty: 0.15, explain: '직업은 성별이나 나이가 아니라 흥미·적성과 준비로 고를 수 있어요.' },
          { type: 'short', prompt: '내 관심 직업 하나와 지금 할 수 있는 준비 하나를 쓰세요.' },
          { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '관심 직업 조사표',
      items: [
        { type: 'table', prompt: '관심 직업 두 가지를 조사해 표를 채우세요.', columns: ['관심 직업', '하는 일', '필요한 준비', '지금 할 수 있는 일'], rows: 2 },
        { type: 'figure', wide: true, prompt: '관심 직업 하나를 가운데에 쓰고, 가지마다 알맞은 내용을 써 넣으세요.', tool: 'mindmap', figures: [{ options: { topic: '(관심 직업)', printCards: false, slots: ['하는 일', '필요한 준비'], cards: ['보기'] }, caption: '' }], answer: '예: 수의사 — 아픈 동물을 진찰해요 / 수의학을 6년 공부해요' },
        { type: 'choice', prompt: '고정 관념이 담긴 말에 ○ 하세요.', options: ['관심 있는 일을 알아보자', '남자는 보육 교사를 못 해', '준비를 꾸준히 하자'], answer: '남자는 보육 교사를 못 해' },
        { type: 'short', prompt: '"여자는 과학자가 어려워"라는 말을 들은 친구에게 해 줄 말을 쓰세요.' },
      ],
      easy: {
        note: '하는 일은 \'~해요\', 필요한 준비는 \'~을 공부해요, ~을 따요\'로 끝나는 경우가 많아요.',
        items: [
          { type: 'table', prompt: '관심 직업 하나를 조사해 표를 채우세요.', columns: ['관심 직업', '하는 일', '필요한 준비'], rows: 1 },
          { type: 'choice', prompt: '수의사가 하는 일에 ○ 하세요.', options: ['아픈 동물을 진찰해요', '수의학을 공부해요'], answer: '아픈 동물을 진찰해요' },
          { type: 'choice', prompt: '고정 관념이 담긴 말에 ○ 하세요.', options: ['여자는 과학자가 어려워', '누구나 준비할 수 있어'], answer: '여자는 과학자가 어려워' },
          { type: 'short', prompt: '내 관심 직업을 위해 지금 할 수 있는 일 하나를 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 가지에 넣으면 초록 테두리, 틀리면 까닭이 나와요. 고정 관념 고르기도 바로 알려 줘요.',
      base: '모두 넣은 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '기상 예보관 카드에 \'남자여야 해요\', 준비 잇기에 \'인기 웹툰 구경만 하기\', 고정 관념 고르기에 성별이 나오지만 고정 관념이 아닌 말이 더 나와요. 민지의 상황은 맞게 골라야 결과가 보여요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 하는 일과 필요한 준비를 섞는다 → 문장 끝말(~해요 / ~을 공부해요·따요)로 가르게 한다. ② 성별·나이·키처럼 일과 상관없는 조건을 준비로 여긴다 → "그 일을 하는 데 정말 필요한가요?"로 따진다. ③ 지금은 준비할 것이 없다고 여긴다 → 체험·기록·동아리처럼 6학년이 할 수 있는 일을 찾게 한다. 사실 확인: 수의사는 수의학 6년 과정 뒤 국가 시험으로 면허를 받는다.',
  }));

  // ───────────────────────── 4차시 (practice) 진로: 진로 계획서 ─────────────────────────
  L.push(Object.assign(head(4, '올해 해 볼 일을 정해 진로 계획서 쓰기',
    '관심 직업 조사표를 바탕으로 언제·무엇을·얼마나 할지 담은 실천 계획을 고르고 고쳐 진로 계획서에 실행 시기까지 적을 수 있다.', ['[6실01-07]']), {
    illustration: {
      prompt: PROMPT('a paper calendar wall with twelve months, colorful stickers marking a career fair in May and a museum visit in summer, and a child pinning a plan card'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'sun', x: 90, y: 60, s: 0.8 }, { motif: 'cloud', x: 360, y: 50 }, { motif: 'hills', y: 206 },
        { motif: 'flower', x: 80, y: 224 }, { motif: 'leaf', x: 180, y: 222 }, { motif: 'snow', x: 300, y: 222, s: 0.8 }, { motif: 'tree', x: 400, y: 214 },
        { motif: 'text', x: 240, y: 136, text: '언제, 무엇을, 얼마나?', size: 24 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"\'열심히 노력한다\'는 계획일까요? 다음 주 월요일에 이 계획을 지켰는지 알 수 있을까요?" 학생 대답을 듣고 계획에는 언제·무엇을·얼마나가 있어야 지켰는지 돌아볼 수 있다고 짚는다. 시연 단추로 진로 계획을 세우는 차례가 놓이는 모습을 보여 준다.',
        student: '지난 시간 조사표에서 내가 지금 할 수 있는 일을 다시 읽어 봅시다.',
        demo: { tool: 'kitchen', options: { mode: 'order', cards: ['나를 알아보기', '관심 직업 조사하기', '올해 할 일 정하기', '해 보고 돌아보기'], shuffle: false }, sequence: [{ order: ['나를 알아보기', '관심 직업 조사하기', '올해 할 일 정하기', '해 보고 돌아보기'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 실천할 수 있는 계획 고르기', minutes: 9, tool: 'kitchen',
            teacher: '"이 계획을 일주일 뒤에 지켰는지 확인할 수 있나요?" 카드마다 언제·무엇을·얼마나가 있는지 손가락으로 짚게 한다. \'언젠가 유명해지기\'처럼 바람만 담긴 카드를 고른 학생에게 "이번 주에 무엇을 하면 되나요?"라고 묻는다.',
            task: '카드를 읽고 언제·무엇을·얼마나가 분명해 바로 실천할 수 있는 계획만 바구니에 넣어요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '사진 기자가 꿈인 준호의 계획 가운데 실천할 수 있는 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '실천할 수 있는 계획', cards: ['매주 토요일 사진 5장 찍기', '열심히 노력하기', '3월에 직업 책 2권 읽기', '언젠가 유명해지기'] }, hints: ['일주일 뒤 지켰는지 확인할 수 있게 언제·무엇을·얼마나가 들어 있는지 카드마다 짚어 봐요.'], target: { pick: ['매주 토요일 사진 5장 찍기', '3월에 직업 책 2권 읽기'] }, difficulty: 0.15 },
              { prompt: '프로그래머가 꿈인 민지의 계획 가운데 실천할 수 있는 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '실천할 수 있는 계획', cards: ['코딩을 잘하게 되기', '월·목 30분 블록 코딩', '여름 방학 코딩 캠프 1번', '좋은 컴퓨터 갖기'] }, hints: ['일주일 뒤 지켰는지 확인할 수 있게 언제·무엇을·얼마나가 들어 있는지 카드마다 짚어 봐요.'], target: { pick: ['월·목 30분 블록 코딩', '여름 방학 코딩 캠프 1번'] }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['코딩을 잘하게 되기', '월·목 30분 블록 코딩', '여름 방학 코딩 캠프 1번', '좋은 컴퓨터 갖기', '시간 날 때 코딩하기'] } } } },
              { prompt: '진로 계획을 세우는 차례대로 카드를 놓아 보세요.', toolOptions: { mode: 'order', cards: ['나를 알아보기', '관심 직업 조사하기', '올해 할 일과 시기 정하기', '실천하며 기록하기', '돌아보고 고치기'] }, hints: ['먼저 나를 알고, 직업을 알아본 뒤 계획하고, 해 본 다음 마지막에 돌아본다는 흐름을 떠올려요.'], target: { order: ['나를 알아보기', '관심 직업 조사하기', '올해 할 일과 시기 정하기', '실천하며 기록하기', '돌아보고 고치기'] }, difficulty: 0.2,
                predict: { q: '계획을 실천한 뒤에도 할 일이 있을까요?', options: ['없어요', '돌아보고 고쳐요', '잘 모르겠어요'], answer: 1 },
                conclude: '계획은 한 번 쓰고 끝나지 않아요. 실천하며 기록하고 돌아보며 고쳐 가요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 막연한 계획을 분명하게 고치기', minutes: 9, tool: 'kitchen',
            teacher: '"\'책을 많이 읽자\'에 무엇을 더하면 지켰는지 알 수 있을까요?" 왼쪽의 막연한 계획 옆에 언제·얼마나가 더해진 카드를 잇게 한다. 고친 뒤에도 \'시간 날 때\'가 남은 카드를 고른 학생에게 "시간이 나지 않으면 어떻게 되나요?"라고 묻는다.',
            task: '왼쪽의 막연한 계획마다 언제·무엇을·얼마나가 분명해진 고친 계획 카드를 이어요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '막연한 계획 옆에 고친 계획을 이어 보세요.', toolOptions: { mode: 'match', slots: [{ id: 'book', label: '책을 많이 읽자' }, { id: 'run', label: '운동을 하자' }], cards: ['한 달에 직업 책 2권', '월·수·금 줄넘기 200번', '시간 날 때 뭔가 하기'] }, hints: ['막연한 계획에 요일·때(언제)와 횟수·시간(얼마나)이 더해진 카드를 찾아 이어요.'], target: { match: { book: '한 달에 직업 책 2권', run: '월·수·금 줄넘기 200번' } }, difficulty: 0.15 },
              { prompt: '다른 계획들도 분명하게 고친 카드와 이어 보세요.', toolOptions: { mode: 'match', slots: [{ id: 'draw', label: '그림 실력을 키우자' }, { id: 'eng', label: '영어를 잘하자' }, { id: 'news', label: '세상 일을 알자' }], cards: ['날마다 10분 따라 그리기', '저녁마다 영어 낱말 5개', '주말마다 어린이 신문 읽기', '나중에 학원 다니기'] }, hints: ['막연한 계획에 요일·때(언제)와 횟수·시간(얼마나)이 더해진 카드를 찾아 이어요.'], target: { match: { draw: '날마다 10분 따라 그리기', eng: '저녁마다 영어 낱말 5개', news: '주말마다 어린이 신문 읽기' } }, difficulty: 0.25,
                levels: { challenge: { toolOptions: { cards: ['날마다 10분 따라 그리기', '저녁마다 영어 낱말 5개', '주말마다 어린이 신문 읽기', '나중에 학원 다니기', '틈틈이 조금씩 그리기'] } } } },
              { prompt: '좋은 진로 계획서에 꼭 들어갈 것에만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '좋은 계획서 점검', items: [{ id: 'when', text: '언제 할지 적었어요' }, { id: 'what', text: '무엇을 할지 적었어요' }, { id: 'much', text: '얼마나 할지 적었어요' }, { id: 'friend', text: '친구와 같은 꿈으로 적었어요' }, { id: 'review', text: '돌아볼 날을 정했어요' }] }, target: { checklist: ['when', 'what', 'much', 'review'] }, difficulty: 0.2 },
            ],
          },
          {
            id: 'a3', title: '활동 3. 실행 시기 정하기', minutes: 9, tool: 'kitchen',
            teacher: '"진로 체험 축제가 5월에만 열리면 그 계획은 언제 칸에 놓아야 할까요?" 문항에 적힌 조건을 먼저 밑줄 긋게 한 뒤 시기 칸에 놓게 한다. 모든 계획을 3월에 몰아넣는 학생에게는 "한 달에 다 할 수 있나요?"라고 묻는다.',
            task: '문항에 적힌 조건을 읽고 계획 카드를 알맞은 실행 시기 칸에 놓아요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '축제는 5월, 병원 체험은 방학, 돌아보기는 학년 끝이에요. 시기에 놓아 보세요.', toolOptions: { mode: 'match', slots: [{ id: 'm3', label: '3월' }, { id: 'm5', label: '5월' }, { id: 'sum', label: '여름 방학' }, { id: 'm12', label: '12월' }], cards: ['직업 책 읽기 시작', '진로 축제 수의사 체험', '동물 병원 견학', '한 해 계획 돌아보기'] }, hints: ['문항에 적힌 때가 있는 계획부터 그 칸에 놓고, 남은 칸에는 언제든 시작할 수 있는 계획을 놓아요. 때가 없는 카드는 남겨요.'], target: { match: { m3: '직업 책 읽기 시작', m5: '진로 축제 수의사 체험', sum: '동물 병원 견학', m12: '한 해 계획 돌아보기' } }, difficulty: 0.25,
                levels: { challenge: { toolOptions: { cards: ['직업 책 읽기 시작', '진로 축제 수의사 체험', '동물 병원 견학', '한 해 계획 돌아보기', '시간 날 때 견학하기'] } } } },
              { prompt: '박물관 교실은 겨울 방학, 학교 대회는 10월이에요. 시기에 놓아 보세요.', toolOptions: { mode: 'match', slots: [{ id: 'm4', label: '4월' }, { id: 'm10', label: '10월' }, { id: 'win', label: '겨울 방학' }], cards: ['과학 동아리 들기', '학교 발명 대회 나가기', '박물관 역사 교실 듣기', '나중에 생각하기'] }, hints: ['문항에 적힌 때가 있는 계획부터 그 칸에 놓고, 남은 칸에는 언제든 시작할 수 있는 계획을 놓아요. 때가 없는 카드는 남겨요.'], target: { match: { m4: '과학 동아리 들기', m10: '학교 발명 대회 나가기', win: '박물관 역사 교실 듣기' } }, difficulty: 0.25 },
              { prompt: '실행 시기를 정할 때 살펴볼 것에만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '시기를 정할 때 살펴볼 것', items: [{ id: 'event', text: '행사가 열리는 때' }, { id: 'time', text: '내가 쓸 수 있는 시간' }, { id: 'with', text: '함께할 가족의 일정' }, { id: 'friend', text: '친구가 고른 시기' }, { id: 'all', text: '모두 3월에 몰아 하기' }] }, target: { checklist: ['event', 'time', 'with'] }, difficulty: 0.2 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"내 계획서에서 이번 주에 바로 할 수 있는 일 하나에 별표를 해 볼까요?" 두세 명이 발표하게 한다. 출구 1번에서 막연한 카드를 고른 학생은 \'언제·얼마나\'를 더해 고쳐 쓰게 한다. 계획서는 교실 뒤에 붙여 두고 학기 말에 돌아본다고 알린다. 다음 시간부터는 옷차림을 스스로 고르는 힘을 기른다.',
        exitTicket: [
          { type: 'tool', tool: 'kitchen', options: { mode: 'pick', basket: '실천할 수 있는 계획', cards: ['매주 수요일 동물 일지 쓰기', '동물을 사랑하기', '6월에 수목원 해설 듣기', '꿈을 꼭 이루기'] }, prompt: '실천할 수 있는 계획만 바구니에 넣어 보세요.', target: { pick: ['매주 수요일 동물 일지 쓰기', '6월에 수목원 해설 듣기'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '\'노래 연습을 하자\'를 분명하게 고친 것은 무엇인가요?', options: ['노래를 잘하자', '화·목 저녁 20분 노래 연습', '언젠가 가수 되기'], answer: 1, difficulty: 0.15, explain: '언제(화·목 저녁)와 얼마나(20분)가 들어 있어야 지켰는지 알 수 있어요.' },
          { type: 'short', prompt: '이번 주에 바로 할 진로 계획 하나를 언제·무엇을·얼마나가 들어가게 쓰세요.' },
          { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '나의 진로 계획서',
      items: [
        { type: 'blank', prompt: '나의 관심 직업을 쓰세요.', text: '나의 관심 직업은 ___와(과) ___예요.', answer: '예: 수의사, 사진 기자' },
        { type: 'table', prompt: '올해 해 볼 일을 언제·무엇을·얼마나가 들어가게 쓰세요.', columns: ['언제', '무엇을', '얼마나', '했어요 ✓'], rows: 4 },
        { type: 'choice', prompt: '실천할 수 있는 계획에 ○ 하세요.', options: ['열심히 노력하기', '매주 금요일 직업 영상 1편 보기', '언젠가 유명해지기'], answer: '매주 금요일 직업 영상 1편 보기' },
        { type: 'short', prompt: '\'운동을 하자\'를 언제·얼마나가 들어가게 고쳐 쓰세요.' },
      ],
      easy: {
        note: '계획에는 언제(요일·달)와 얼마나(시간·횟수)를 꼭 넣어요.',
        items: [
          { type: 'blank', prompt: '나의 관심 직업을 쓰세요.', text: '나의 관심 직업은 ___예요.', answer: '예: 수의사' },
          { type: 'table', prompt: '올해 해 볼 일 두 가지를 쓰세요.', columns: ['언제', '무엇을', '얼마나'], rows: 2 },
          { type: 'choice', prompt: '실천할 수 있는 계획에 ○ 하세요.', options: ['월요일마다 책 1권 읽기', '책을 많이 읽기'], answer: '월요일마다 책 1권 읽기' },
          { type: 'short', prompt: '이번 주에 할 일 하나를 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞게 놓으면 초록 테두리, 틀리게 놓으면 까닭을 말해 주고 되돌아와요.',
      base: '모두 놓은 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '민지의 계획 고르기(시간 날 때 코딩하기)·계획 고치기(틈틈이 조금씩 그리기)·시기 정하기(시간 날 때 견학하기)에 그럴듯하지만 막연한 카드가 한 장씩 더 나와요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 바람(유명해지기·잘하게 되기)을 계획으로 여긴다 → 이번 주에 할 행동이 있는지 묻는다. ② 언제·얼마나를 빼고 쓴다 → 일주일 뒤 지켰는지 확인할 수 있는지 따지게 한다. ③ 친구와 같은 꿈·같은 계획을 쓴다 → 지난 두 차시의 흥미·적성 기록과 조사표로 돌아가게 한다. ④ 행사·체험 시기를 따지지 않고 모두 3월에 몰아 쓴다.',
  }));

  // ───────────────────────── 5차시 (core) 옷: 옷의 기능 ─────────────────────────
  L.push(Object.assign(head(5, '옷이 하는 일을 보호·활동·표현으로 나누기',
    '옷이 하는 일을 몸 보호·활동 편의·자기 표현으로 나누어 예를 들고, 같은 옷이라도 때와 장소에 따라 알맞음이 달라지는 경우를 말할 수 있다.', ['[6실01-05]']), {
    illustration: {
      prompt: PROMPT('a paper wardrobe opened wide showing a winter coat, a swimsuit, a raincoat, a class team T-shirt and a traditional hanbok hanging side by side'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'snow', x: 80, y: 60, s: 0.8 }, { motif: 'sun', x: 400, y: 58, s: 0.8 }, { motif: 'cloud', x: 240, y: 46, s: 0.8 },
        { motif: 'hills', y: 208 }, { motif: 'house', x: 120, y: 216 }, { motif: 'tree', x: 360, y: 214 },
        { motif: 'text', x: 240, y: 138, text: '옷은 무슨 일을 할까요?', size: 22 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"겨울에 패딩을 입는 까닭과 결혼식에 단정한 옷을 입는 까닭은 같을까요?" 두 까닭이 다르다는 말이 나오면, 시연 단추로 카드가 몸 보호·활동 편의·자기 표현 가지에 열리는 모습을 보여 준다. 진로 계획에서 나를 알아본 것처럼 옷차림도 스스로 고를 수 있어야 한다고 앞 차시와 잇는다.',
        student: '오늘 내가 입고 온 옷을 고른 까닭을 하나 떠올려 봅시다.',
        demo: { tool: 'mindmap', options: { topic: '옷이 하는 일', slots: ['몸 보호', '활동 편의', '자기 표현'], cards: ['패딩으로 몸을 따뜻하게', '체육복으로 편하게 뛰기', '반 티로 우리 반 나타내기'], shuffle: false }, sequence: [{ sort: { '몸 보호': ['패딩으로 몸을 따뜻하게'], '활동 편의': ['체육복으로 편하게 뛰기'], '자기 표현': ['반 티로 우리 반 나타내기'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 옷이 하는 일 세 갈래로 나누기', minutes: 10, tool: 'mindmap',
            teacher: '"이 옷이 없으면 무엇이 곤란해지나요? 몸이 다치나요, 움직이기 어렵나요, 나를 나타내기 어렵나요?" 세 물음으로 갈래를 정하게 한다. 예쁜 옷·비싼 운동화를 몸 보호 바구니에 넣는 학생에게 "보기 좋은 것과 몸을 지키는 것은 같은가요?"라고 짚는다.',
            task: '카드를 읽고 옷이 하는 일 갈래에 나누어 넣어요. 몸 보호·활동 편의·자기 표현 가운데 가장 앞선 일을 골라요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '옷이 하는 일을 몸 보호와 활동 편의로 나누어 보세요.', toolOptions: { topic: '옷이 하는 일', slots: ['몸 보호', '활동 편의'], cards: ['털모자로 귀를 따뜻하게', '긴소매로 햇볕을 막아요', '늘어나는 체육복으로 뛰어요', '주머니 조끼에 도구를 넣어요'] }, hints: ['이 옷이 없으면 다치나요, 움직이기 어렵나요, 나를 나타내기 어렵나요? 가장 먼저 곤란해지는 것으로 정해요.'], target: { sort: { '몸 보호': ['털모자로 귀를 따뜻하게', '긴소매로 햇볕을 막아요'], '활동 편의': ['늘어나는 체육복으로 뛰어요', '주머니 조끼에 도구를 넣어요'] } }, difficulty: 0.15 },
              { prompt: '옷이 하는 일을 세 갈래로 나누어 보세요.', toolOptions: { topic: '옷이 하는 일', slots: ['몸 보호', '활동 편의', '자기 표현'], cards: ['비옷으로 비를 막아요', '무릎 보호대로 덜 다쳐요', '수영복으로 물속에서 편히', '고무줄 바지로 앉기 편해요', '반 티로 우리 반을 나타내요', '조문 때 어두운 옷으로 예의를'] }, hints: ['이 옷이 없으면 다치나요, 움직이기 어렵나요, 나를 나타내기 어렵나요? 가장 먼저 곤란해지는 것으로 정해요.'], target: { sort: { '몸 보호': ['비옷으로 비를 막아요', '무릎 보호대로 덜 다쳐요'], '활동 편의': ['수영복으로 물속에서 편히', '고무줄 바지로 앉기 편해요'], '자기 표현': ['반 티로 우리 반을 나타내요', '조문 때 어두운 옷으로 예의를'] } }, difficulty: 0.3,
                levels: { challenge: { toolOptions: { cards: ['비옷으로 비를 막아요', '무릎 보호대로 덜 다쳐요', '수영복으로 물속에서 편히', '고무줄 바지로 앉기 편해요', '반 티로 우리 반을 나타내요', '조문 때 어두운 옷으로 예의를', '옷값이 비쌀수록 좋아요'] } } } },
              { prompt: '몸을 보호하는 옷차림만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '몸을 보호하는 옷차림', cards: ['자전거 탈 때 헬멧', '햇볕 아래 챙 넓은 모자', '반짝이 머리띠', '유명 상표 운동화', '겨울 장갑'] }, hints: ['보기 좋은지 말고, 그 옷차림이 무엇(추위·햇볕·부딪힘)을 막아 주는지 따져 골라요.'], target: { pick: ['자전거 탈 때 헬멧', '햇볕 아래 챙 넓은 모자', '겨울 장갑'] }, difficulty: 0.2,
                predict: { q: '비싸고 멋진 운동화는 몸을 더 잘 지켜 줄까요?', options: ['그래요', '꼭 그렇지 않아요', '잘 모르겠어요'], answer: 1 },
                conclude: '보기 좋거나 비싼 옷이 몸을 지켜 주는 것은 아니에요. 그 옷이 무엇을 막아 주는지 살펴요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 같은 옷, 다른 자리', minutes: 9, tool: 'mindmap',
            teacher: '"슬리퍼는 좋은 신발일까요, 나쁜 신발일까요?" \'어디에서 신느냐에 따라 다르다\'는 대답을 끌어낸다. 같은 옷도 때와 장소에 따라 알맞음이 달라진다고 짚고, 알맞지 않은 자리에는 까닭(미끄러짐·끼임·더위)을 말하게 한다.',
            task: '가운데 옷을 읽고, 그 옷을 입기에 알맞은 자리와 알맞지 않은 자리로 카드를 나누어요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '슬리퍼를 신기에 알맞은 자리와 알맞지 않은 자리로 나누어 보세요.', toolOptions: { topic: '슬리퍼', slots: ['알맞아요', '알맞지 않아요'], cards: ['집 거실', '수영장 탈의실', '과학실 실험 시간', '운동장 체육 시간'] }, hints: ['그 자리에서 무엇을 하는지 떠올리고, 그 옷을 입으면 미끄러지거나 걸리거나 너무 덥지 않은지 따져 나누어요.'], target: { sort: { 알맞아요: ['집 거실', '수영장 탈의실'], '알맞지 않아요': ['과학실 실험 시간', '운동장 체육 시간'] } }, difficulty: 0.15,
                predict: { q: '슬리퍼는 언제나 알맞은 신발일까요?', options: ['언제나 알맞아요', '자리에 따라 달라요', '잘 모르겠어요'], answer: 1 },
                conclude: '같은 신발도 어디서 무엇을 하느냐에 따라 알맞음이 달라져요.' },
              { prompt: '긴 치마를 입기에 알맞은 자리와 알맞지 않은 자리로 나누어 보세요.', toolOptions: { topic: '긴 치마', slots: ['알맞아요', '알맞지 않아요'], cards: ['가족 결혼식', '피아노 발표회', '자전거 타기', '뜀틀 넘기'] }, hints: ['그 자리에서 무엇을 하는지 떠올리고, 그 옷을 입으면 미끄러지거나 걸리거나 너무 덥지 않은지 따져 나누어요.'], target: { sort: { 알맞아요: ['가족 결혼식', '피아노 발표회'], '알맞지 않아요': ['자전거 타기', '뜀틀 넘기'] } }, difficulty: 0.2 },
              { prompt: '두꺼운 패딩을 입기에 알맞은 자리와 알맞지 않은 자리로 나누어 보세요.', toolOptions: { topic: '두꺼운 패딩', slots: ['알맞아요', '알맞지 않아요'], cards: ['1월 등굣길', '겨울 스키장', '여름 바닷가', '체육관 피구 시합'] }, hints: ['그 자리에서 무엇을 하는지 떠올리고, 그 옷을 입으면 미끄러지거나 걸리거나 너무 덥지 않은지 따져 나누어요.'], target: { sort: { 알맞아요: ['1월 등굣길', '겨울 스키장'], '알맞지 않아요': ['여름 바닷가', '체육관 피구 시합'] } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['1월 등굣길', '겨울 스키장', '여름 바닷가', '체육관 피구 시합', '난방된 교실 수업'] } } } },
            ],
          },
          {
            id: 'a3', title: '활동 3. 보기만 좋은 옷차림 가려내기', minutes: 8, tool: 'emotion',
            teacher: '"내일 텃밭에서 흙을 만지며 모종을 심어요. 새로 산 흰 옷을 입고 싶다면?" 고른 옷차림의 결과를 읽게 한다. 결과 칸의 \'다칠 수 있어요\', \'더러워져요\'를 짚으며 옷은 보기 좋기 전에 안전과 위생부터 살핀다고 정리한다.',
            task: '상황을 읽고 알맞은 옷차림을 고르거나, 보기는 좋지만 안전을 놓친 옷차림만 골라요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '내일 텃밭에서 모종을 심어요. 어떤 옷차림을 고를까요?', toolOptions: { mode: 'branch', situation: '내일 학교 텃밭에서 흙을 만지며 모종을 심어요.', choices: [
                { id: 'gym', text: '긴소매 체육복과 운동화', result: '흙이 묻어도 걱정 없이 일해요.', mood: '편안함' },
                { id: 'white', text: '새로 산 흰 원피스', result: '흙이 묻을까 봐 제대로 앉지 못해요.', mood: '걱정', why: '보기 좋은 옷이 그 일에 알맞은지 따져 봐요.' },
                { id: 'slip', text: '반바지와 슬리퍼', result: '모종삽에 발등을 긁혀요.', mood: '속상함', why: '발과 다리를 지켜 주는지 살펴봐요.' }] }, target: { choice: 'gym' }, difficulty: 0.15 },
              { prompt: '사촌 언니 결혼식에 가요. 어떤 옷차림을 고를까요?', toolOptions: { mode: 'branch', situation: '이번 주말 사촌 언니 결혼식에 가족과 함께 가요.', choices: [
                { id: 'neat', text: '깨끗하고 단정한 셔츠와 바지', result: '축하하는 마음이 옷차림에도 드러나요.', mood: '기쁨' },
                { id: 'mud', text: '어제 입은 흙 묻은 체육복', result: '축하 자리에 어울리지 않아 보여요.', mood: '부끄러움', why: '행사의 뜻을 옷으로 나타내는 일도 옷의 기능이에요.' },
                { id: 'pj', text: '편한 잠옷 바지', result: '예의를 갖추지 않은 것처럼 보여요.', mood: '부끄러움', why: '편하기만 한 옷이 그 자리에 맞는지 생각해 봐요.' }] }, target: { choice: 'neat' }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { revealAfterCheck: true } } } },
              { prompt: '보기는 좋지만 안전을 놓친 옷차림만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '안전을 놓친 옷차림', weather: false, cards: ['굽 높은 샌들로 등산하기', '긴 끈 달린 옷으로 미끄럼틀', '운동화 신고 운동장 놀이', '모자 쓰고 햇볕 아래 걷기'] }, hints: ['그 옷차림으로 그 활동을 하면 넘어지거나 걸리거나 끼일 수 있는지 따져 골라요.'], target: { pick: ['굽 높은 샌들로 등산하기', '긴 끈 달린 옷으로 미끄럼틀'] }, difficulty: 0.2,
                levels: { easy: { toolOptions: { live: true, instant: true } }, challenge: { toolOptions: { cards: ['굽 높은 샌들로 등산하기', '긴 끈 달린 옷으로 미끄럼틀', '운동화 신고 운동장 놀이', '모자 쓰고 햇볕 아래 걷기', '반짝이 운동화로 달리기'] } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"오늘 입고 온 옷은 세 가지 일 가운데 무엇을 가장 잘하고 있나요?" 짝과 한 문장씩 말하게 한다. 출구 2번을 틀린 학생에게는 같은 옷을 다른 자리에 입었을 때를 다시 떠올리게 한다. 다음 시간에는 운동장·과학실·행사장 세 장면의 옷차림을 직접 골라 본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '옷이 하는 일', slots: ['몸 보호', '활동 편의', '자기 표현'], cards: ['목도리로 목을 따뜻하게', '발레복으로 동작을 편하게', '교복으로 우리 학교를 나타내요'] }, prompt: '카드를 옷이 하는 일 갈래에 나누어 보세요.', target: { sort: { '몸 보호': ['목도리로 목을 따뜻하게'], '활동 편의': ['발레복으로 동작을 편하게'], '자기 표현': ['교복으로 우리 학교를 나타내요'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '수영복에 대해 바르게 말한 것은 무엇인가요?', options: ['언제 어디서나 알맞은 옷이에요', '수영장에서는 알맞지만 교실 수업에는 알맞지 않아요', '보기 좋으면 어디서든 입어도 돼요'], answer: 1, difficulty: 0.15, explain: '같은 옷도 때와 장소에 따라 알맞음이 달라져요.' },
          { type: 'short', prompt: '오늘 입은 옷 하나를 골라 그 옷이 하는 일과 까닭을 쓰세요.' },
          { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '옷이 하는 일',
      items: [
        { type: 'figure', wide: true, prompt: '가지마다 알맞은 옷이나 옷차림을 두 가지씩 써 넣으세요.', tool: 'mindmap', figures: [{ options: { topic: '옷이 하는 일', printCards: false, slots: ['몸 보호', '활동 편의', '자기 표현'], cards: ['보기'] }, caption: '' }], answer: '예: 몸 보호 — 비옷·헬멧 / 활동 편의 — 체육복·수영복 / 자기 표현 — 반 티·단정한 옷' },
        { type: 'table', prompt: '옷이 하는 일과 그 까닭을 쓰세요.', columns: ['옷', '하는 일', '까닭'], cells: [['비옷', '', ''], ['수영복', '', ''], ['반 티셔츠', '', '']] },
        { type: 'choice', prompt: '슬리퍼가 알맞지 않은 자리에 ○ 하세요.', options: ['집 거실', '운동장 체육 시간', '수영장 탈의실'], answer: '운동장 체육 시간' },
        { type: 'short', prompt: '"옷은 보기 좋으면 된다"는 말에 대한 내 생각을 까닭과 함께 쓰세요.' },
      ],
      easy: {
        note: '그 옷이 없으면 무엇이 곤란한지 떠올려요. 다쳐요 → 몸 보호, 움직이기 힘들어요 → 활동 편의, 나를 나타내기 어려워요 → 자기 표현.',
        items: [
          { type: 'table', prompt: '옷이 하는 일을 쓰세요.', columns: ['옷', '하는 일'], cells: [['비옷', ''], ['체육복', ''], ['반 티셔츠', '']] },
          { type: 'choice', prompt: '몸을 보호하는 옷차림에 ○ 하세요.', options: ['자전거 헬멧', '반짝이 머리띠'], answer: '자전거 헬멧' },
          { type: 'choice', prompt: '긴 치마가 알맞지 않은 자리에 ○ 하세요.', options: ['결혼식', '자전거 타기'], answer: '자전거 타기' },
          { type: 'short', prompt: '오늘 입은 옷 하나와 그 옷이 하는 일을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 가지에 넣으면 초록 테두리, 틀리면 까닭이 나와요. 안전을 놓친 옷차림 고르기도 바로 알려 줘요.',
      base: '모두 넣은 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '세 갈래 나누기에 \'옷값이 비쌀수록 좋아요\', 패딩 나누기에 \'난방된 교실 수업\', 안전 고르기에 \'반짝이 운동화로 달리기\'가 더 나와 까닭을 따져야 해요. 결혼식 상황은 맞게 골라야 결과가 보여요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 옷은 보기 좋으면 된다고 여겨 안전·위생을 살피지 않는다 → \'그 옷이 무엇을 막아 주나요?\'로 묻는다. ② 한 옷은 늘 좋은 옷이거나 늘 나쁜 옷이라고 여긴다 → 같은 옷을 다른 자리에 놓아 보게 한다. ③ 예절을 지키는 옷(조문·결혼식)을 몸 보호로 넣는다 → 사람들에게 마음과 예의를 나타내는 일이므로 자기 표현(사회적 표현)이다.',
  }));

  // ───────────────────────── 6차시 (practice) 옷: 세 장면 옷차림 ─────────────────────────
  L.push(Object.assign(head(6, '운동장·과학실·행사장 옷차림 고르고 까닭 밝히기',
    '운동장·과학실·행사장처럼 서로 다른 장면에 알맞은 옷차림을 고르고, 몸 보호·활동 편의·자기 표현 가운데 무엇을 앞세웠는지 밝힐 수 있다.', ['[6실01-05]']), {
    illustration: {
      prompt: PROMPT('three paper stages side by side: a sunny playground with a child in sportswear, a science room with a child in a lab coat and goggles, and a graduation hall with a child in neat clothes'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'sun', x: 80, y: 56, s: 0.8 }, { motif: 'cloud', x: 250, y: 46, s: 0.8 }, { motif: 'star', x: 410, y: 58 },
        { motif: 'hills', y: 208 }, { motif: 'tree', x: 80, y: 216 }, { motif: 'house', x: 240, y: 218, color: 'sky' }, { motif: 'house', x: 400, y: 216, color: 'lavender', s: 0.9 },
        { motif: 'text', x: 240, y: 140, text: '어디에서 무엇을 하나요?', size: 22 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"하루에 운동장 피구, 과학실 실험, 졸업식 연습이 다 있다면 옷을 몇 번 갈아입어야 할까요?" 웃음이 나오면 "갈아입지 않아도 되도록 무엇을 더하면 좋을까요?"로 잇는다. 시연 단추로 운동화·실험복·단정한 옷이 세 장면 칸에 놓이는 모습을 보여 준다.',
        student: '지난 시간에 배운 옷이 하는 일 세 가지를 짝에게 말해 봅시다.',
        demo: { tool: 'kitchen', options: { slots: ['운동장', '과학실', '졸업식'], cards: ['운동화', '실험복', '단정한 옷'], shuffle: false }, sequence: [{ sort: { 운동장: ['운동화'], 과학실: ['실험복'], 졸업식: ['단정한 옷'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 장면마다 알맞은 옷차림 담기', minutes: 10, tool: 'kitchen',
            teacher: '"그 장면에서 무엇을 하나요? 그 일을 하는 데 무엇이 필요한가요?" 장면 이름보다 그곳에서 하는 일을 먼저 말하게 한다. 단정한 구두를 운동장 칸에 놓는 학생에게는 "구두를 신고 피구를 하면 어떻게 될까요?"라고 묻고, 실험복을 멋으로 고른 학생에게는 무엇을 막아 주는 옷인지 다시 묻는다.',
            task: '장면 칸마다 알맞은 옷차림 카드를 두 장씩 담아요. 어느 칸에도 맞지 않는 카드는 남겨요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '운동장·과학실·졸업식에 알맞은 옷차림을 담아 보세요.', toolOptions: { slots: ['운동장 피구', '과학실 실험', '졸업식'], cards: ['운동화', '체육복', '실험복', '보안경', '깔끔한 셔츠', '단정한 구두'] }, hints: ['그 장면에서 무엇을 하는지 먼저 말하고, 그 일을 할 때 몸을 지키거나 편하게 해 주는 것, 자리에 맞게 단정한 것을 골라요.'], target: { sort: { '운동장 피구': ['운동화', '체육복'], '과학실 실험': ['실험복', '보안경'], 졸업식: ['깔끔한 셔츠', '단정한 구두'] } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['운동화', '체육복', '실험복', '보안경', '깔끔한 셔츠', '단정한 구두', '슬리퍼'] } } } },
              { prompt: '비 오는 등굣길·바닷가 체험·발표회에 알맞은 옷차림을 담아 보세요.', toolOptions: { slots: ['비 오는 등굣길', '바닷가 체험', '도서관 발표회'], cards: ['우비', '장화', '래시가드', '챙 넓은 모자', '단정한 옷', '깨끗한 실내화'] }, hints: ['그 장면에서 무엇을 하는지 먼저 말하고, 그 일을 할 때 몸을 지키거나 편하게 해 주는 것, 자리에 맞게 단정한 것을 골라요.'], target: { sort: { '비 오는 등굣길': ['우비', '장화'], '바닷가 체험': ['래시가드', '챙 넓은 모자'], '도서관 발표회': ['단정한 옷', '깨끗한 실내화'] } }, difficulty: 0.2 },
              { prompt: '눈썰매장·김장 돕기·합창 대회에 알맞은 옷차림을 담아 보세요.', toolOptions: { slots: ['눈썰매장', '김장 돕기', '합창 대회'], cards: ['방수 장갑', '두꺼운 패딩', '고무장갑', '앞치마', '반 단체 티', '깔끔한 바지', '얇은 샌들'] }, hints: ['그 장면에서 무엇을 하는지 먼저 말하고, 그 일을 할 때 몸을 지키거나 편하게 해 주는 것, 자리에 맞게 단정한 것을 골라요.'], target: { sort: { 눈썰매장: ['방수 장갑', '두꺼운 패딩'], '김장 돕기': ['고무장갑', '앞치마'], '합창 대회': ['반 단체 티', '깔끔한 바지'] } }, difficulty: 0.3,
                predict: { q: '얇은 샌들은 어느 칸에 넣을까요?', options: ['눈썰매장', '김장 돕기', '어디에도 넣지 않아요'], answer: 2 },
                conclude: '세 장면 모두 발을 지키거나 단정해야 해서 얇은 샌들은 알맞지 않아요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 무엇을 앞세웠는지 밝히기', minutes: 9, tool: 'mindmap',
            teacher: '"과학실에서 실험복을 입는 가장 큰 까닭은 멋일까요, 몸을 지키는 것일까요?" 장면마다 앞세운 기능을 잇게 한다. 두 가지 기능이 다 떠오른다는 학생에게는 "그중 없으면 가장 곤란한 것은?"을 물어 하나를 고르게 한다.',
            task: '가지마다 쓰인 옷차림을 읽고, 그 옷차림이 가장 앞세운 기능 카드를 이어요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '세 장면의 옷차림이 앞세운 기능을 이어 보세요.', toolOptions: { mode: 'match', topic: '앞세운 기능', slots: [{ id: 'lab', label: '과학실에서 실험복' }, { id: 'gym', label: '운동장에서 체육복' }, { id: 'grad', label: '졸업식에 단정한 옷' }], cards: ['몸 보호', '활동 편의', '자기 표현'] }, hints: ['그 옷차림이 없으면 가장 곤란해지는 것이 다치는 것인지, 움직이기 어려운 것인지, 우리를 나타내기 어려운 것인지 따져 이어요.'], target: { match: { lab: '몸 보호', gym: '활동 편의', grad: '자기 표현' } }, difficulty: 0.15 },
              { prompt: '다른 세 장면의 옷차림이 앞세운 기능을 이어 보세요.', toolOptions: { mode: 'match', topic: '앞세운 기능', slots: [{ id: 'sea', label: '바닷가에서 햇볕을 막는 래시가드' }, { id: 'team', label: '반 대항전에 반 티' }, { id: 'farm', label: '텃밭에서 고무줄 바지' }], cards: ['몸 보호', '활동 편의', '자기 표현'] }, hints: ['그 옷차림이 없으면 가장 곤란해지는 것이 다치는 것인지, 움직이기 어려운 것인지, 우리를 나타내기 어려운 것인지 따져 이어요.'], target: { match: { sea: '몸 보호', team: '자기 표현', farm: '활동 편의' } }, difficulty: 0.25,
                levels: { challenge: { toolOptions: { cards: ['몸 보호', '활동 편의', '자기 표현', '유행 따르기'] } } } },
              { prompt: '몸 보호를 가장 앞세운 옷차림만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '몸 보호를 앞세운 옷차림', cards: ['자전거 헬멧', '김장 때 고무장갑', '겨울 목도리', '학예회 무대 의상', '반 대항전 반 티'] }, hints: ['그 옷차림이 없으면 몸이 다치거나 아플 수 있는지 따져 골라요. 나를 나타내는 옷은 남겨요.'], target: { pick: ['자전거 헬멧', '김장 때 고무장갑', '겨울 목도리'] }, difficulty: 0.25 },
            ],
          },
          {
            id: 'a3', title: '활동 3. 장면별 옷차림 점검표', minutes: 8, tool: 'kitchen',
            teacher: '"과학실에 들어가기 전, 친구 옷차림에서 무엇을 살펴봐야 할까요?" 점검표에 표시한 뒤 짝의 옷차림을 서로 살피게 한다. \'새 옷이라 자랑해요\'처럼 안전과 상관없는 항목에 표시한 학생에게 "이것을 하지 않으면 무엇이 위험해지나요?"라고 묻는다.',
            task: '점검표를 읽고 그 장면에 들어가기 전에 꼭 살필 항목에만 표시해요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '과학실 실험 전에 살필 옷차림에만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '과학실 들어가기 전', items: [{ id: 'hair', text: '긴 머리를 묶어요' }, { id: 'sleeve', text: '넓은 소매를 걷어요' }, { id: 'coat', text: '실험복 단추를 잠가요' }, { id: 'show', text: '새 옷을 친구에게 자랑해요' }] }, target: { checklist: ['hair', 'sleeve', 'coat'] }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { items: [{ id: 'hair', text: '긴 머리를 묶어요' }, { id: 'sleeve', text: '넓은 소매를 걷어요' }, { id: 'coat', text: '실험복 단추를 잠가요' }, { id: 'show', text: '새 옷을 친구에게 자랑해요' }, { id: 'goggle', text: '보안경을 머리 위에 올려 둬요' }] } } } },
              { prompt: '졸업식에 가기 전에 살필 옷차림에만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '졸업식 가기 전', items: [{ id: 'clean', text: '옷이 깨끗하고 구김이 적어요' }, { id: 'shoes', text: '신발이 깨끗해요' }, { id: 'pj', text: '잠옷 바지를 입어요' }, { id: 'cap', text: '모자를 쓴 채로 들어가요' }, { id: 'tidy', text: '단추와 지퍼를 잠가요' }] }, target: { checklist: ['clean', 'shoes', 'tidy'] }, difficulty: 0.2,
                levels: { easy: { toolOptions: { items: [{ id: 'clean', text: '옷이 깨끗하고 구김이 적어요' }, { id: 'shoes', text: '신발이 깨끗해요' }, { id: 'pj', text: '잠옷 바지를 입어요' }, { id: 'tidy', text: '단추와 지퍼를 잠가요' }] } } } },
              { prompt: '운동장 체육 시간 전에 살필 옷차림에만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '체육 시간 전', items: [{ id: 'lace', text: '운동화 끈을 단단히 묶어요' }, { id: 'neck', text: '목걸이를 빼 둬요' }, { id: 'sweat', text: '땀이 잘 마르는 옷을 입어요' }, { id: 'slip', text: '슬리퍼를 신어요' }, { id: 'jeans', text: '뻣뻣한 청바지를 입어요' }] }, target: { checklist: ['lace', 'neck', 'sweat'] }, difficulty: 0.2,
                levels: { easy: { toolOptions: { items: [{ id: 'lace', text: '운동화 끈을 단단히 묶어요' }, { id: 'neck', text: '목걸이를 빼 둬요' }, { id: 'sweat', text: '땀이 잘 마르는 옷을 입어요' }, { id: 'slip', text: '슬리퍼를 신어요' }] } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"세 장면에서 앞세운 기능이 왜 달랐을까요?" \'그곳에서 하는 일이 달라서\'라는 말을 끌어낸다. 출구 1번을 틀린 학생에게는 장면에서 하는 일을 먼저 말하게 한다. 다음 시간에는 내일 일정에 맞추어 실제로 입을 옷차림을 계획한다고 예고하고, 일정표를 챙겨 오게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'kitchen', options: { slots: ['요리 실습', '숲 체험'], cards: ['앞치마', '머릿수건', '등산화', '긴바지'], hint1: '그 장면에서 무엇을 하는지 먼저 말하고, 그 일을 할 때 몸을 지켜 주는 것을 골라요.' }, prompt: '요리 실습과 숲 체험에 알맞은 옷차림을 담아 보세요.', target: { sort: { '요리 실습': ['앞치마', '머릿수건'], '숲 체험': ['등산화', '긴바지'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '숲 체험에 긴바지를 입는 것은 무엇을 가장 앞세운 것인가요?', options: ['몸 보호', '자기 표현', '유행 따르기'], answer: 0, difficulty: 0.15, explain: '긴바지는 풀에 쓸리거나 벌레에 물리는 것을 막아 몸을 보호해요.' },
          { type: 'short', prompt: '우리 반 현장 체험 학습에 알맞은 옷차림을 쓰고, 무엇을 앞세웠는지 쓰세요.' },
          { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '장면별 옷차림',
      items: [
        { type: 'figure', wide: true, prompt: '장면 칸마다 알맞은 옷차림을 두 가지씩 써 넣으세요.', tool: 'kitchen', figures: [{ options: { slots: ['운동장', '과학실', '행사장'], cards: ['보기'], printCards: false }, caption: '' }], answer: '예: 운동장 — 운동화·체육복 / 과학실 — 실험복·보안경 / 행사장 — 단정한 옷·깨끗한 신발' },
        { type: 'table', prompt: '장면마다 고른 옷차림과 앞세운 기능을 쓰세요.', columns: ['장면', '옷차림', '앞세운 기능'], cells: [['운동장 피구', '', ''], ['과학실 실험', '', ''], ['졸업식', '', '']] },
        { type: 'choice', prompt: '과학실 실험 전에 하지 않아도 되는 것에 ○ 하세요.', options: ['긴 머리 묶기', '넓은 소매 걷기', '새 옷 자랑하기'], answer: '새 옷 자랑하기' },
        { type: 'short', prompt: '같은 체육복이 졸업식에는 알맞지 않은 까닭을 쓰세요.' },
      ],
      easy: {
        note: '먼저 그 장면에서 무엇을 하는지 떠올려요. 뛰어요, 실험해요, 축하해요.',
        items: [
          { type: 'table', prompt: '장면에 알맞은 옷차림을 쓰세요.', columns: ['장면', '옷차림'], cells: [['운동장', ''], ['과학실', ''], ['졸업식', '']] },
          { type: 'choice', prompt: '운동장 피구에 알맞은 신발에 ○ 하세요.', options: ['운동화', '구두'], answer: '운동화' },
          { type: 'choice', prompt: '과학실 실험에 알맞은 옷에 ○ 하세요.', options: ['실험복', '잠옷'], answer: '실험복' },
          { type: 'short', prompt: '졸업식에 입고 싶은 옷을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 넣으면 초록 테두리, 틀리면 까닭이 나와요.',
      base: '모두 담은 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '첫 장면 담기에 \'슬리퍼\', 기능 잇기에 \'유행 따르기\', 과학실 점검표에 \'보안경을 머리 위에 올려 둬요\'처럼 그럴듯한 오답이 한 장씩 더 나와요. (쉬움은 점검표 항목이 하나 적어요.)',
    },
    teacherNotes: '자주 보이는 어려움: ① 장면 이름만 보고 옷을 고른다 → 그곳에서 하는 일을 먼저 말하게 한다. ② 한 옷차림이 여러 기능을 한다며 고르지 못한다 → \'없으면 가장 곤란한 것\'으로 하나를 고른다. ③ 행사장 옷차림을 \'비싼 옷\'으로 여긴다 → 깨끗하고 단정한 것이 예의를 나타낸다고 짚는다.',
  }));

  // ───────────────────────── 7차시 (core) 옷: 내일 옷차림 계획 ─────────────────────────
  L.push(Object.assign(head(7, '내일 일정표를 보고 옷차림 계획 세우기',
    '다음 날의 날씨와 일정(실험·실습·운동)을 함께 살펴 옷차림을 계획하고, 고른 까닭을 말할 수 있다.', ['[6실01-05]']), {
    safety: ['가열 실험이나 요리 실습이 있는 날에는 긴 머리를 묶고, 펄럭이는 소매나 긴 끈이 달린 옷을 피해요.', '실습 날에는 발등을 덮는 신발을 신어요. 슬리퍼는 뜨거운 물이나 떨어진 물건에 다칠 수 있어요.'],
    illustration: {
      prompt: PROMPT('a bedroom at night with a paper weather card and a school timetable pinned above a chair where tomorrow\'s clothes are neatly laid out'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'moon', x: 400, y: 58, s: 0.8 }, { motif: 'star', x: 90, y: 50 }, { motif: 'star', x: 300, y: 40, s: 0.6, color: 'buttercup' },
        { motif: 'hills', y: 210 }, { motif: 'house', x: 150, y: 214 }, { motif: 'tree', x: 360, y: 214 },
        { motif: 'text', x: 240, y: 140, text: '내일은 무엇을 입을까요?', size: 22 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '칠판에 내일 일정을 적는다: "맑음, 아침 8°C·낮 19°C / 2교시 실과 샌드위치 만들기 / 5교시 체육 피구". "날씨만 보면 무엇을 입을까요? 일정까지 보면 무엇이 더 필요할까요?" 날씨만 말하는 학생이 많으면 "샌드위치를 만들 때 소매가 넓으면?"으로 일정의 안전을 끌어낸다. 시연 단추로 옷차림 계획 차례를 보여 준다.',
        student: '내일 시간표에서 몸을 많이 움직이거나 손을 쓰는 시간이 언제인지 찾아봅시다.',
        demo: { tool: 'kitchen', options: { mode: 'order', cards: ['일정 확인하기', '날씨 확인하기', '활동마다 필요한 것 적기', '옷 고르기', '전날 밤 챙겨 두기'], shuffle: false }, sequence: [{ order: ['일정 확인하기', '날씨 확인하기', '활동마다 필요한 것 적기', '옷 고르기', '전날 밤 챙겨 두기'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 날씨와 일정으로 챙길 것 고르기', minutes: 10, tool: 'kitchen',
            teacher: '"아침 8°C, 낮 19°C면 하루에 몇 도나 달라지나요?" 일교차가 크면 벗기 쉬운 겉옷이 필요함을 짚는다. 비 오는 날 문항에서 우산만 고르고 실험 준비를 빠뜨린 학생에게 "날씨만 보면 무엇을 놓치나요?"라고 묻는다.',
            task: '문항에 적힌 날씨와 일정을 읽고, 내일 챙길 옷차림에만 표시해요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '아침 8°C·낮 19°C이고 5교시에 피구를 해요. 챙길 것에만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '내일 챙길 옷차림', items: [{ id: 'jacket', text: '벗기 쉬운 얇은 겉옷' }, { id: 'shoes', text: '끈 묶은 운동화' }, { id: 'tee', text: '땀이 잘 마르는 티셔츠' }, { id: 'coat', text: '두꺼운 털 코트' }, { id: 'heel', text: '굽 높은 구두' }] }, hints: ['날씨에 필요한 것과 일정의 활동에 필요한 것을 따로 찾아, 둘 다 챙기도록 표시해요.'], target: { checklist: ['jacket', 'shoes', 'tee'] }, difficulty: 0.15 },
              { prompt: '비가 오고 2교시에 알코올램프 가열 실험을 해요. 챙길 것에만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '내일 챙길 옷차림', items: [{ id: 'rain', text: '우산과 장화' }, { id: 'band', text: '긴 머리 묶을 끈' }, { id: 'coat', text: '실험복' }, { id: 'wide', text: '소매가 넓게 펄럭이는 옷' }, { id: 'sandal', text: '발가락이 드러난 샌들' }] }, hints: ['날씨에 필요한 것과 일정의 활동에 필요한 것을 따로 찾아, 둘 다 챙기도록 표시해요.'], target: { checklist: ['rain', 'band', 'coat'] }, difficulty: 0.25,
                levels: { easy: { toolOptions: { items: [{ id: 'rain', text: '우산과 장화' }, { id: 'band', text: '긴 머리 묶을 끈' }, { id: 'coat', text: '실험복' }, { id: 'wide', text: '소매가 넓게 펄럭이는 옷' }] } } },
                predict: { q: '날씨만 보고 옷을 고르면 무엇을 놓치기 쉬울까요?', options: ['비 대비', '실험 안전', '잘 모르겠어요'], answer: 1 },
                conclude: '날씨뿐 아니라 실험·실습처럼 안전이 걸린 일정까지 살펴야 옷차림 계획이 완성돼요.' },
              { prompt: '눈이 오고 3교시에 실과 김밥 만들기를 해요. 챙길 것에만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '내일 챙길 옷차림', items: [{ id: 'boots', text: '미끄럼이 덜한 겨울 신발' }, { id: 'gloves', text: '장갑과 목도리' }, { id: 'apron', text: '앞치마와 머릿수건' }, { id: 'ring', text: '반짝이 반지와 팔찌' }, { id: 'thin', text: '얇은 반팔만 입기' }] }, hints: ['날씨에 필요한 것과 일정의 활동에 필요한 것을 따로 찾아, 둘 다 챙기도록 표시해요.'], target: { checklist: ['boots', 'gloves', 'apron'] }, difficulty: 0.25,
                levels: { challenge: { toolOptions: { items: [{ id: 'boots', text: '미끄럼이 덜한 겨울 신발' }, { id: 'gloves', text: '장갑과 목도리' }, { id: 'apron', text: '앞치마와 머릿수건' }, { id: 'ring', text: '반짝이 반지와 팔찌' }, { id: 'thin', text: '얇은 반팔만 입기' }, { id: 'wind', text: '얇은 바람막이만 걸치기' }] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 일정마다 살필 점 잇기', minutes: 9, tool: 'kitchen',
            teacher: '"줄넘기를 하는 날 무엇부터 살펴야 할까요?" 일정 옆에 살필 점을 잇게 한다. 장신구 카드를 잇는 학생에게 "그 일정에서 장신구가 어떤 도움을 주나요, 어떤 위험이 있나요?"라고 묻는다.',
            task: '왼쪽 일정마다 옷차림에서 살필 점 카드를 하나씩 이어요. 어디에도 맞지 않는 카드는 남겨요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '일정마다 옷차림에서 살필 점을 이어 보세요.', toolOptions: { mode: 'match', slots: [{ id: 'cook', label: '실과 샌드위치 만들기' }, { id: 'heat', label: '과학 가열 실험' }, { id: 'rope', label: '체육 줄넘기' }], cards: ['앞치마와 머릿수건', '머리 묶고 소매 걷기', '끈 묶은 운동화', '반짝이는 장신구'] }, hints: ['일정에서 무엇을 하는지 떠올리고, 그때 다치거나 불편하지 않게 해 주는 옷차림을 이어요.'], target: { match: { cook: '앞치마와 머릿수건', heat: '머리 묶고 소매 걷기', rope: '끈 묶은 운동화' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['앞치마와 머릿수건', '머리 묶고 소매 걷기', '끈 묶은 운동화', '반짝이는 장신구', '헐렁한 넓은 소매 옷'] } } } },
              { prompt: '다른 일정마다 옷차림에서 살필 점을 이어 보세요.', toolOptions: { mode: 'match', slots: [{ id: 'forest', label: '숲 탐방 체험' }, { id: 'mc', label: '학예회 사회 맡기' }, { id: 'swim', label: '생존 수영 수업' }], cards: ['긴바지와 모자', '단정한 옷', '수영복과 수모', '두꺼운 털 코트'] }, hints: ['일정에서 무엇을 하는지 떠올리고, 그때 다치거나 불편하지 않게 해 주는 옷차림을 이어요.'], target: { match: { forest: '긴바지와 모자', mc: '단정한 옷', swim: '수영복과 수모' } }, difficulty: 0.2 },
              { prompt: '세 일정마다 옷차림에서 살필 점을 이어 보세요.', toolOptions: { mode: 'match', slots: [{ id: 'paint', label: '물감으로 벽화 그리기' }, { id: 'snow', label: '눈 오는 날 등교' }, { id: 'lib', label: '도서관 봉사' }], cards: ['더러워져도 되는 옷과 토시', '미끄럼이 덜한 신발', '조용한 실내화', '새로 산 흰옷'] }, hints: ['일정에서 무엇을 하는지 떠올리고, 그때 다치거나 불편하지 않게 해 주는 옷차림을 이어요.'], target: { match: { paint: '더러워져도 되는 옷과 토시', snow: '미끄럼이 덜한 신발', lib: '조용한 실내화' } }, difficulty: 0.25 },
            ],
          },
          {
            id: 'a3', title: '활동 3. 친구의 옷차림 계획 고쳐 주기', minutes: 8, tool: 'emotion',
            teacher: '"민지는 덥다며 민소매와 슬리퍼를 골랐어요. 날씨만 보면 괜찮을까요? 일정까지 보면요?" 결과 칸을 읽고 친구에게 해 줄 말을 고르게 한다. 그 뒤 내 일정표로 내일 옷차림 계획을 공책에 쓰고, 고른 까닭을 한 줄씩 붙이게 한다.',
            task: '친구의 옷차림 계획을 읽고 고칠 방법을 고르거나, 옷차림에 안전을 더 살필 일정만 골라요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '내일 실과 시간에 떡볶이를 만들어요. 민지의 계획을 어떻게 고칠까요?', toolOptions: { mode: 'branch', who: '민지', situation: '날이 덥다며 민소매와 슬리퍼를 골랐어요. 내일 실과 시간에 떡볶이를 만들어요.', choices: [
                { id: 'fix', text: '앞치마를 더하고 운동화를 신어요', result: '뜨거운 국물이 튀어도 발과 옷을 지켜요.', mood: '편안함' },
                { id: 'keep', text: '더우니까 그대로 입어요', result: '국물이 튀어 발등을 데일 수 있어요.', mood: '걱정', why: '날씨 말고 실습 일정도 살펴봐요.' },
                { id: 'coat', text: '두꺼운 겉옷을 더 입어요', result: '덥고 움직이기 불편해요.', mood: '짜증', why: '실습에 정말 필요한 것이 무엇인지 따져 봐요.' }] }, target: { choice: 'fix' }, difficulty: 0.15 },
              { prompt: '아침은 쌀쌀하고 오후에 체육 대회가 있어요. 준호의 계획을 어떻게 고칠까요?', toolOptions: { mode: 'branch', who: '준호', situation: '아침은 쌀쌀하고 오후에 운동장 체육 대회가 있어요. 준호는 반팔 티셔츠만 골랐어요.', choices: [
                { id: 'layer', text: '반팔 위에 벗기 쉬운 겉옷을 입어요', result: '아침엔 따뜻하고 대회 땐 벗고 뛰어요.', mood: '편안함' },
                { id: 'thick', text: '두꺼운 패딩만 입어요', result: '대회 때 땀이 나고 몸이 무거워요.', mood: '짜증', why: '하루 동안 기온이 어떻게 바뀌는지 떠올려 봐요.' },
                { id: 'same', text: '반팔만 입고 가요', result: '아침 등굣길에 몸이 떨려요.', mood: '속상함', why: '아침 기온도 함께 살펴봐요.' }] }, target: { choice: 'layer' }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { revealAfterCheck: true } } },
                conclude: '하루 기온 차가 크면 겹쳐 입고 활동에 맞게 벗어요.' },
              { prompt: '옷차림에서 안전을 더 살필 일정만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '안전을 더 살필 일정', weather: false, cards: ['과학실 가열 실험', '실과 볶음밥 만들기', '운동장 피구', '교실 독서 시간', '음악 감상'] }, hints: ['불이나 뜨거운 것을 다루거나 몸을 많이 움직여서, 옷차림 때문에 다칠 수 있는 일정인지 따져 골라요.'], target: { pick: ['과학실 가열 실험', '실과 볶음밥 만들기', '운동장 피구'] }, difficulty: 0.2,
                levels: { easy: { toolOptions: { live: true, instant: true } }, challenge: { toolOptions: { cards: ['과학실 가열 실험', '실과 볶음밥 만들기', '운동장 피구', '교실 독서 시간', '음악 감상', '컴퓨터실 타자 연습'] } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"내일 옷차림 계획에 날씨 말고 무엇을 더 넣었나요?" 두세 명의 계획을 읽게 한다. 출구 2번을 틀린 학생은 날씨만 보고 정했는지 살핀다. 오늘 밤 계획대로 옷을 챙겨 두고 내일 실제로 입어 본 뒤 불편했던 점을 적어 오게 한다 — 다음 시간에 그 기록으로 계획을 고친다.',
        exitTicket: [
          { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '내일 챙길 옷차림', items: [{ id: 'hat', text: '챙 넓은 모자' }, { id: 'water', text: '물에 젖어도 되는 신발' }, { id: 'apron', text: '앞치마' }, { id: 'boots', text: '털 부츠' }] }, prompt: '내일은 덥고 맑으며 오후에 계곡 물놀이 체험을 해요. 챙길 것에만 표시해 보세요.', target: { checklist: ['hat', 'water'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '옷차림 계획을 가장 잘 세운 친구는 누구인가요?', options: ['날씨만 보고 정한 친구', '날씨와 일정의 활동을 함께 본 친구', '좋아하는 색만 보고 정한 친구'], answer: 1, difficulty: 0.15, explain: '날씨와 함께 실험·실습·운동 같은 일정의 안전과 편의를 살펴야 해요.' },
          { type: 'short', prompt: '내일 옷차림 계획을 쓰고, 그렇게 고른 까닭을 일정과 이어 쓰세요.' },
          { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '내일 옷차림 계획표',
      items: [
        { type: 'table', prompt: '내일 일정과 날씨를 보고 옷차림 계획표를 채우세요.', columns: ['일정·날씨', '살필 점', '고른 옷차림'], cells: [['날씨: ', '', ''], ['', '', ''], ['', '', '']] },
        { type: 'figure', wide: true, prompt: '가열 실험이 있는 날 챙길 것에 ✓ 하세요.', tool: 'kitchen', figures: [{ options: { mode: 'checklist', items: ['긴 머리 묶을 끈', '펄럭이는 넓은 소매 옷', '실험복', '발가락이 드러난 샌들'] }, caption: '' }], answer: '머리끈 · 실험복' },
        { type: 'choice', prompt: '아침 7°C, 낮 20°C인 날에 알맞은 옷차림에 ○ 하세요.', options: ['반팔만 입기', '반팔 위에 벗기 쉬운 겉옷', '두꺼운 패딩만 입기'], answer: '반팔 위에 벗기 쉬운 겉옷' },
        { type: 'short', prompt: '내일 옷을 실제로 입어 본 뒤 불편했던 점을 적어 오세요(다음 시간에 써요).' },
      ],
      easy: {
        note: '먼저 날씨를 보고, 다음에 시간표에서 실험·요리·운동 시간을 찾아요.',
        items: [
          { type: 'table', prompt: '내일 옷차림을 계획하세요.', columns: ['날씨', '중요한 일정', '입을 옷'], rows: 1 },
          { type: 'choice', prompt: '요리 실습 날 챙길 것에 ○ 하세요.', options: ['앞치마', '반짝이 팔찌'], answer: '앞치마' },
          { type: 'choice', prompt: '비 오는 날 챙길 것에 ○ 하세요.', options: ['우산', '선글라스'], answer: '우산' },
          { type: 'short', prompt: '내일 입을 신발과 그 까닭을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '일정 잇기와 안전 일정 고르기에서 맞게 놓으면 초록 테두리, 틀리면 까닭이 나와요.',
      base: '모두 놓은 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '눈 오는 날 점검표에 \'얇은 바람막이만 걸치기\', 일정 잇기에 \'헐렁한 넓은 소매 옷\', 안전 일정 고르기에 \'컴퓨터실 타자 연습\'이 더 나와요. 준호의 상황은 맞게 골라야 결과가 보여요. (쉬움은 가열 실험 점검표 항목이 하나 적어요.)',
    },
    teacherNotes: '자주 보이는 어려움: ① 날씨만 보고 정하며 실험·조리처럼 안전이 걸린 활동은 고려하지 않는다 → 시간표에서 손을 쓰거나 몸을 많이 움직이는 시간을 먼저 찾게 한다. ② 일교차를 생각하지 않고 아침 기온이나 낮 기온 하나만 본다 → 벗기 쉬운 겉옷으로 겹쳐 입기. ③ 계획을 쓰고 까닭을 빼먹는다 → 옷차림마다 \'왜냐하면 ○교시에 ~를 하니까\'를 붙이게 한다. 다음 차시는 학생이 실제로 입어 본 기록으로 시작하므로 며칠 뒤에 하는 것이 좋다. 7·8차시를 연속 블록으로 하면 8차시를 활동 속 준호·민지의 기록으로 시작하고, 내 기록은 다음 주에 견주게 한다.',
  }));

  // ───────────────────────── 8차시 (practice) 옷: 입어 보고 고치기 ─────────────────────────
  L.push(Object.assign(head(8, '입어 본 뒤 불편했던 점으로 옷차림 계획 고쳐 쓰기',
    '계획대로 입어 본 뒤 불편했던 점과 그 까닭(날씨·활동·옷 상태)을 찾고, 기록을 근거로 다음 옷차림 계획을 고쳐 쓸 수 있다.', ['[6실01-05]']), {
    illustration: {
      prompt: PROMPT('a child writing in a paper diary beside a coat rack, with small notes saying too cold, too tight and sleeve too long pinned to the clothes'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'cloud', x: 100, y: 52 }, { motif: 'sun', x: 400, y: 60, s: 0.7 }, { motif: 'leaf', x: 250, y: 60, s: 0.8 },
        { motif: 'hills', y: 208 }, { motif: 'house', x: 130, y: 216 }, { motif: 'tree', x: 360, y: 214 },
        { motif: 'text', x: 240, y: 140, text: '어디가 불편했나요?', size: 22 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"지난 시간 계획대로 입어 보니 어땠나요? 불편했던 순간이 있었나요?" 적어 온 기록을 두세 명 읽게 하고(기록이 없는 학생은 짝과 함께 준호의 기록을 본다), 불편함에는 까닭이 있다고 짚는다(추웠다 → 날씨, 뛰기 힘들었다 → 활동, 단추가 떨어졌다 → 옷 상태). 시연 단추로 \'아침에 추웠어요\'가 \'얇은 겉옷 더하기\'로 고쳐지는 모습을 보여 준다.',
        student: '어제 입은 옷에서 불편했던 점 하나를 떠올려 짝에게 말해 봅시다.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '고친 계획', slots: [{ id: 'cold', label: '아침에 추웠어요' }], cards: ['얇은 겉옷 더하기'], shuffle: false }, sequence: [{ match: { cold: '얇은 겉옷 더하기' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 불편했던 까닭 찾기', minutes: 9, tool: 'mindmap',
            teacher: '"청바지가 뻣뻣해 피구가 힘들었다면 옷이 잘못된 걸까요, 그 활동에 맞지 않았던 걸까요?" 까닭을 날씨·활동·옷 상태로 나누게 한다. 소매가 짧아진 것을 날씨로 넣은 학생에게 "기온 때문인가요, 내 몸이 자라서인가요?"라고 묻는다.',
            task: '불편했던 일 카드를 읽고 그 까닭 가지(날씨·활동·옷 상태)에 나누어 넣어요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '불편했던 일을 까닭에 따라 나누어 보세요.', toolOptions: { topic: '불편했던 까닭', slots: ['날씨', '활동', '옷 상태'], cards: ['아침엔 춥고 낮엔 땀이 났어요', '청바지가 뻣뻣해 뛰기 힘들었어요', '소매가 짧아져 팔목이 시렸어요'] }, hints: ['불편했던 까닭이 기온·비·바람 때문인지, 그날 한 일 때문인지, 옷이 작아지거나 망가져서인지 따져요. 옷과 상관없는 일은 남겨요.'], target: { sort: { 날씨: ['아침엔 춥고 낮엔 땀이 났어요'], 활동: ['청바지가 뻣뻣해 뛰기 힘들었어요'], '옷 상태': ['소매가 짧아져 팔목이 시렸어요'] } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['아침엔 춥고 낮엔 땀이 났어요', '청바지가 뻣뻣해 뛰기 힘들었어요', '소매가 짧아져 팔목이 시렸어요', '숙제를 깜빡해 속상했어요'] } } } },
              { prompt: '다른 친구들의 기록도 까닭에 따라 나누어 보세요.', toolOptions: { topic: '불편했던 까닭', slots: ['날씨', '활동', '옷 상태'], cards: ['비에 운동화가 젖었어요', '실습 때 긴 소매가 내려왔어요', '단추가 떨어져 겉옷이 벌어졌어요', '바람에 얇은 옷이 추웠어요', '치마라 철봉을 못 했어요', '바지 고무줄이 늘어났어요'] }, hints: ['불편했던 까닭이 기온·비·바람 때문인지, 그날 한 일 때문인지, 옷이 작아지거나 망가져서인지 따져요. 옷과 상관없는 일은 남겨요.'], target: { sort: { 날씨: ['비에 운동화가 젖었어요', '바람에 얇은 옷이 추웠어요'], 활동: ['실습 때 긴 소매가 내려왔어요', '치마라 철봉을 못 했어요'], '옷 상태': ['단추가 떨어져 겉옷이 벌어졌어요', '바지 고무줄이 늘어났어요'] } }, difficulty: 0.3 },
              { prompt: '고칠 수 있는 불편함만 바구니에 넣어 보세요. 옷 탓이 아닌 것은 남겨요.', toolOptions: { mode: 'pick', topic: '옷차림으로 고칠 불편함', cards: ['운동화가 젖어 발이 시렸어요', '목이 꽉 껴서 답답했어요', '친구와 다퉈 속상했어요', '숙제를 깜빡했어요'] }, hints: ['옷을 바꾸거나 더 챙기면 사라지는 불편함인지 따져 골라요.'], target: { pick: ['운동화가 젖어 발이 시렸어요', '목이 꽉 껴서 답답했어요'] }, difficulty: 0.2,
                predict: { q: '\'친구와 다퉈 속상했어요\'를 옷차림으로 고칠 수 있을까요?', options: ['고칠 수 있어요', '옷과 상관없어요', '잘 모르겠어요'], answer: 1 },
                conclude: '옷차림 기록에서는 옷 때문에 생긴 불편함만 골라 다음 계획에 써요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 불편함에 맞게 계획 고치기', minutes: 9, tool: 'mindmap',
            teacher: '"아침에 추웠다면 두꺼운 패딩을 입을까요? 낮에는 어땠나요?" 불편함 옆에 고친 계획을 잇게 한다. 불편함과 상관없는 고침(색만 바꾸기)을 고른 학생에게 "그렇게 바꾸면 그 불편함이 사라지나요?"라고 묻는다.',
            task: '가지의 불편했던 점마다 그 불편함을 없애는 고친 계획 카드를 이어요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '불편했던 점마다 고친 계획을 이어 보세요.', toolOptions: { mode: 'match', topic: '고친 계획', slots: [{ id: 'temp', label: '아침엔 춥고 낮엔 더웠어요' }, { id: 'jeans', label: '청바지로 뛰기 힘들었어요' }], cards: ['얇은 옷을 겹쳐 입기', '체육 날은 늘어나는 바지', '옷 색만 바꾸기'] }, hints: ['불편했던 까닭을 먼저 말하고, 그 까닭을 없애 주는 고침을 찾아 이어요. 불편함과 상관없는 고침은 남겨요.'], target: { match: { temp: '얇은 옷을 겹쳐 입기', jeans: '체육 날은 늘어나는 바지' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['얇은 옷을 겹쳐 입기', '체육 날은 늘어나는 바지', '옷 색만 바꾸기', '두꺼운 패딩 하나만 입기'] } } } },
              { prompt: '다른 불편함에도 고친 계획을 이어 보세요.', toolOptions: { mode: 'match', topic: '고친 계획', slots: [{ id: 'wet', label: '비에 운동화가 젖었어요' }, { id: 'sleeve', label: '실습 때 소매가 내려왔어요' }, { id: 'button', label: '단추가 떨어졌어요' }], cards: ['비 소식에 장화 챙기기', '실습 날은 토시나 반소매', '전날 단추 달아 두기', '새 옷 사 달라고 하기'] }, hints: ['불편했던 까닭을 먼저 말하고, 그 까닭을 없애 주는 고침을 찾아 이어요. 불편함과 상관없는 고침은 남겨요.'], target: { match: { wet: '비 소식에 장화 챙기기', sleeve: '실습 날은 토시나 반소매', button: '전날 단추 달아 두기' } }, difficulty: 0.25 },
              { prompt: '옷차림을 돌아보고 고치는 차례대로 카드를 놓아 보세요.', toolOptions: { mode: 'order', cards: ['계획대로 입어 보기', '불편했던 때 적기', '까닭 찾기', '다음 계획 고쳐 쓰기', '다시 입어 보기'] }, hints: ['먼저 해 봐야 불편함을 알 수 있고, 까닭을 알아야 고칠 수 있다는 흐름을 떠올려요.'], target: { order: ['계획대로 입어 보기', '불편했던 때 적기', '까닭 찾기', '다음 계획 고쳐 쓰기', '다시 입어 보기'] }, difficulty: 0.2 },
            ],
          },
          {
            id: 'a3', title: '활동 3. 한 주 기록을 그래프로 보고 고칠 곳 정하기', minutes: 9, tool: 'chart',
            teacher: '"한 주 동안 가장 자주 불편했던 까닭은 무엇일까요? 그것부터 고치면 어떨까요?" 기록표를 막대그래프로 옮기고 읽게 한다. 막대가 가장 높은 까닭이 다음 계획에서 먼저 고칠 곳이라고 짚는다.',
            task: '준호의 한 주 옷차림 기록을 막대그래프로 나타내고, 그래프를 읽어 답해요.',
            levels: { easy: { showValues: true }, base: {}, challenge: {} },
            items: [
              { prompt: '준호의 한 주 불편 기록 표를 보고 막대그래프를 완성하세요.', toolOptions: { type: 'bar', title: '준호가 불편했던 까닭', data: [['날씨', 4], ['활동', 2], ['옷 상태', 1]], unit: '번', xLabel: '까닭', yLabel: '횟수', max: 5, scale: 1 }, target: { build: true }, difficulty: 0.15,
                levels: { challenge: { prompt: '준호네 반 모둠의 한 주 불편 기록 표를 보고 막대그래프를 완성하세요. 눈금 한 칸이 몇 번인지 먼저 봐요.', toolOptions: { title: '모둠이 불편했던 까닭', data: [['날씨', 8], ['활동', 6], ['옷 상태', 2]], max: 10, scale: 2 } } } },
              { prompt: '준호가 가장 자주 불편했던 까닭은 무엇인가요?', toolOptions: { type: 'bar', mode: 'read', title: '준호가 불편했던 까닭', data: [['날씨', 4], ['활동', 2], ['옷 상태', 1]], unit: '번', xLabel: '까닭', max: 5, scale: 1, choices: ['날씨', '활동', '옷 상태'], question: '가장 자주 불편했던 까닭은?', why: ['', '활동 막대보다 더 높은 막대가 있어요.', '옷 상태 막대가 가장 낮아요.'], explain: '날씨 막대가 4번으로 가장 높아요. 다음 계획에서는 날씨 대비부터 고쳐요.' }, target: { pick: 0 }, difficulty: 0.1 },
              { prompt: '민지의 기록에서 활동 때문에 불편했던 것은 몇 번인가요?', toolOptions: { type: 'bar', mode: 'read', title: '민지가 불편했던 까닭', data: [['날씨', 1], ['활동', 3], ['옷 상태', 2]], unit: '번', xLabel: '까닭', max: 5, scale: 1, question: '활동 때문에 불편했던 것은 몇 번인가요?' }, target: { value: 3 }, difficulty: 0.15 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"내 기록에서 가장 먼저 고칠 불편함은 무엇이고, 어떻게 고쳤나요?" 고쳐 쓴 계획을 두세 명이 읽게 한다. 출구 1번에서 불편함과 상관없는 고침을 고른 학생은 \'그렇게 하면 불편함이 사라지는지\'를 다시 따지게 한다. 다음 시간부터는 옷을 넘어 집안일 전체로 넓혀 가정일을 살펴본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '고친 계획', slots: [{ id: 'sun', label: '햇볕에 목이 따가웠어요' }, { id: 'tight', label: '바지가 작아 꽉 꼈어요' }], cards: ['챙 넓은 모자 쓰기', '몸에 맞는 바지로 바꾸기', '양말 색 바꾸기'] }, prompt: '불편했던 점마다 고친 계획을 이어 보세요.', target: { match: { sun: '챙 넓은 모자 쓰기', tight: '몸에 맞는 바지로 바꾸기' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '\'체육 시간에 구두가 미끄러웠어요\'는 어떤 까닭인가요?', options: ['날씨', '활동', '옷 상태'], answer: 1, difficulty: 0.2, explain: '구두가 체육 활동에 맞지 않아 생긴 불편함이에요.' },
          { type: 'short', prompt: '내가 입어 본 옷에서 불편했던 점 하나와 고친 계획을 쓰세요.' },
          { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '옷차림 돌아보기',
      items: [
        { type: 'table', prompt: '입어 본 옷차림을 돌아보고 고친 계획을 쓰세요.', columns: ['불편했던 점', '까닭(날씨·활동·옷 상태)', '고친 계획'], rows: 3 },
        { type: 'figure', wide: true, prompt: '표를 보고 막대그래프를 그리세요. (날씨 3번, 활동 1번, 옷 상태 2번)', tool: 'chart', figures: [{ options: { type: 'bar', title: '불편했던 까닭', data: [['날씨', 3], ['활동', 1], ['옷 상태', 2]], unit: '번', max: 5, scale: 1, given: [] }, caption: '' }], answer: '날씨 3칸, 활동 1칸, 옷 상태 2칸' },
        { type: 'choice', prompt: '\'아침엔 춥고 낮엔 더웠어요\'를 고친 계획으로 알맞은 것에 ○ 하세요.', options: ['두꺼운 패딩만 입기', '얇은 옷을 겹쳐 입기', '옷 색 바꾸기'], answer: '얇은 옷을 겹쳐 입기' },
        { type: 'short', prompt: '옷차림 계획을 입어 보고 고쳐 쓰면 무엇이 좋은지 쓰세요.' },
      ],
      easy: {
        note: '불편했던 까닭이 날씨인지, 하는 일(활동)인지, 옷이 작거나 망가진 것인지 먼저 정해요.',
        items: [
          { type: 'table', prompt: '불편했던 점과 고친 계획을 쓰세요.', columns: ['불편했던 점', '고친 계획'], rows: 2 },
          { type: 'choice', prompt: '\'비에 운동화가 젖었어요\'의 까닭에 ○ 하세요.', options: ['날씨', '옷 상태'], answer: '날씨' },
          { type: 'choice', prompt: '\'단추가 떨어졌어요\'를 고친 계획에 ○ 하세요.', options: ['단추 달아 두기', '모자 쓰기'], answer: '단추 달아 두기' },
          { type: 'short', prompt: '다음에 입고 싶은 옷차림을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '까닭 나누기·계획 잇기에서 맞게 놓으면 초록 테두리가 생기고, 그래프는 막대 끝에 값이 보여요.',
      base: '모두 놓은 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '첫 나누기에 옷과 상관없는 카드, 첫 잇기에 \'두꺼운 패딩 하나만 입기\'가 더 나와요. 그래프 그리기는 모둠 기록(8·6·2번)이라 눈금 한 칸이 2번이에요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 불편함을 모두 \'옷이 나빠서\'로 여긴다 → 날씨·활동·옷 상태로 까닭을 가른다. ② 불편함과 상관없는 고침(색·무늬 바꾸기)을 쓴다 → \'그렇게 바꾸면 그 불편함이 사라지는가\'로 따진다. ③ 날씨만 다시 보고 실습·운동 일정은 또 빠뜨린다 → 7차시 일정표를 다시 펴게 한다. 옷 상태(작아짐·단추)는 9차시 가정일(옷 갈래)로 이어진다. 입어 본 기록이 없는 학생(7·8차시 연속 운영, 결석)은 준호의 기록으로 활동하고, 정리의 고쳐 쓰기만 다음 주 자기 기록으로 하게 한다.',
  }));

  // ───────────────────────── 9차시 (core) 가정일: 갈래 나누기 ─────────────────────────
  L.push(Object.assign(head(9, '집안일을 끼니·옷·공간 갈래로 나누어 목록 만들기',
    '집에서 이루어지는 일을 끼니·옷·공간 갈래로 나누어 목록을 만들고, 한 가지 일에 숨은 여러 단계를 차례대로 말할 수 있다.', ['[6실01-06]']), {
    illustration: {
      prompt: PROMPT('a cutaway paper house showing a kitchen with groceries, a laundry corner with folded clothes, and a living room being tidied, each room glowing softly'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 100, y: 50 }, { motif: 'hills', y: 210 },
        { motif: 'house', x: 150, y: 216, s: 1.2 }, { motif: 'house', x: 320, y: 218, color: 'mint' }, { motif: 'tree', x: 420, y: 216, s: 0.8 },
        { motif: 'text', x: 240, y: 132, text: '우리 집에서는 어떤 일이 일어날까요?', size: 20 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"어제 저녁부터 오늘 아침까지 우리 집에서 이루어진 일을 모두 말해 볼까요?" 청소·설거지만 나오면 "냉장고에 먹을 것은 누가 채웠나요? 오늘 입은 옷은 누가 빨았나요?"로 넓힌다. 시연 단추로 장보기·빨래 개기·바닥 닦기가 끼니·옷·공간 칸에 놓이는 모습을 보여 주고, 지난 시간 옷 상태(단추·작아진 옷)도 가정일이라고 잇는다.',
        student: '어제 저녁부터 오늘 아침까지 우리 집에서 이루어진 일을 세 가지 떠올려 봅시다.',
        demo: { tool: 'kitchen', options: { slots: ['끼니', '옷', '공간'], cards: ['장보기', '빨래 개기', '바닥 닦기'], shuffle: false }, sequence: [{ sort: { 끼니: ['장보기'], 옷: ['빨래 개기'], 공간: ['바닥 닦기'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 가정일을 세 갈래로 나누기', minutes: 9, tool: 'kitchen',
            teacher: '"이 일은 먹는 일, 입는 일, 사는 곳 가운데 어디를 돌보나요?" 갈래를 정하는 물음을 판서한다. 식단 정하기·계절 옷 정리처럼 눈에 잘 안 띄는 일을 \'가정일이 아니다\'라고 남기는 학생에게 "이 일을 아무도 안 하면 어떻게 될까요?"라고 묻는다.',
            task: '가정일 카드를 끼니·옷·공간 칸에 나누어 담아요. 가정일이 아닌 카드는 남겨요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '가정일을 끼니·옷·공간 갈래로 나누어 보세요.', toolOptions: { slots: ['끼니', '옷', '공간'], cards: ['장보기', '밥 짓기', '빨래 널기', '옷 개기', '방 청소', '쓰레기 버리기'] }, hints: ['이 일이 먹는 것, 입는 것, 사는 곳 가운데 무엇을 돌보는지 따져 넣어요.'], target: { sort: { 끼니: ['장보기', '밥 짓기'], 옷: ['빨래 널기', '옷 개기'], 공간: ['방 청소', '쓰레기 버리기'] } }, difficulty: 0.1 },
              { prompt: '눈에 잘 띄지 않는 가정일도 갈래로 나누어 보세요.', toolOptions: { slots: ['끼니', '옷', '공간'], cards: ['식단 정하기', '냉장고 정리', '계절 옷 정리', '떨어진 단추 달기', '전등 갈기', '고장 난 문고리 고치기'] }, hints: ['이 일이 먹는 것, 입는 것, 사는 곳 가운데 무엇을 돌보는지 따져 넣어요.'], target: { sort: { 끼니: ['식단 정하기', '냉장고 정리'], 옷: ['계절 옷 정리', '떨어진 단추 달기'], 공간: ['전등 갈기', '고장 난 문고리 고치기'] } }, difficulty: 0.25,
                predict: { q: '가정일은 청소와 설거지뿐일까요?', options: ['그래요', '더 많아요', '잘 모르겠어요'], answer: 1 },
                conclude: '식단 정하기, 계절 옷 정리처럼 눈에 잘 띄지 않는 일도 모두 가정일이에요.' },
              { prompt: '민지의 하루 기록에서 가정일만 갈래로 나누어 보세요. 나머지는 남겨요.', toolOptions: { slots: ['끼니', '옷', '공간'], cards: ['도시락 싸기', '운동화 빨기', '재활용 분리배출', '수학 학원 가기', '휴대폰 게임하기'] }, hints: ['이 일이 먹는 것, 입는 것, 사는 곳 가운데 무엇을 돌보는지 따져 넣어요. 가족을 돌보는 일이 아니면 남겨요.'], target: { sort: { 끼니: ['도시락 싸기'], 옷: ['운동화 빨기'], 공간: ['재활용 분리배출'] } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['도시락 싸기', '운동화 빨기', '재활용 분리배출', '수학 학원 가기', '휴대폰 게임하기', '친구와 영화 보기'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 한 가지 일에 숨은 단계 찾기', minutes: 9, tool: 'kitchen',
            teacher: '"빨래는 세탁기가 다 해 주니까 금방 끝날까요?" 빨래 한 번에도 나누기·빨기·널기·개기·넣기가 숨어 있다고 짚는다. 순서를 놓은 뒤 "이 가운데 우리 집에서 내가 해 본 단계는?"을 물어 다음 차시들(멈추면 생기는 문제, 걸리는 시간)로 잇는다.',
            task: '한 가지 가정일이 끝나기까지의 단계를 차례대로 놓아요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              { prompt: '빨래를 하는 차례대로 카드를 놓아 보세요.', toolOptions: { mode: 'order', cards: ['색깔별로 나누기', '세탁기로 빨기', '털어서 널기', '마른 옷 개기', '옷장에 넣기'] }, hints: ['그 일을 처음 시작할 때 무엇부터 하는지 찾고, 일이 끝나 제자리에 놓일 때까지 이어 놓아요.'], target: { order: ['색깔별로 나누기', '세탁기로 빨기', '털어서 널기', '마른 옷 개기', '옷장에 넣기'] }, difficulty: 0.15,
                levels: { challenge: { prompt: '빨래를 하는 차례대로 카드를 놓아 보세요. 숨은 단계가 하나 더 있어요.', toolOptions: { cards: ['색깔별로 나누기', '세탁기로 빨기', '털어서 널기', '다 말랐는지 만져 보기', '마른 옷 개기', '옷장에 넣기'] }, target: { order: ['색깔별로 나누기', '세탁기로 빨기', '털어서 널기', '다 말랐는지 만져 보기', '마른 옷 개기', '옷장에 넣기'] } } } },
              { prompt: '장보기를 하는 차례대로 카드를 놓아 보세요.', toolOptions: { mode: 'order', cards: ['냉장고 살피기', '살 것 적기', '가게에서 사기', '영수증 확인하기', '산 것 정리하기'] }, hints: ['그 일을 처음 시작할 때 무엇부터 하는지 찾고, 일이 끝나 제자리에 놓일 때까지 이어 놓아요.'], target: { order: ['냉장고 살피기', '살 것 적기', '가게에서 사기', '영수증 확인하기', '산 것 정리하기'] }, difficulty: 0.2 },
              { prompt: '설거지를 하는 차례대로 카드를 놓아 보세요.', toolOptions: { mode: 'order', cards: ['남은 음식 덜어 내기', '세제로 닦기', '물로 헹구기', '물기 빼서 정리하기'] }, hints: ['그 일을 처음 시작할 때 무엇부터 하는지 찾고, 일이 끝나 제자리에 놓일 때까지 이어 놓아요.'], target: { order: ['남은 음식 덜어 내기', '세제로 닦기', '물로 헹구기', '물기 빼서 정리하기'] }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a3', title: '활동 3. 우리 집 가정일 목록 만들기', minutes: 9, tool: 'kitchen',
            teacher: '"우리 집 목록의 \'끼니\' 줄에는 무엇을 적을 수 있을까요?" 갈래마다 알맞은 일만 고르게 한 뒤, 활동지 표에 우리 집 가정일을 갈래별로 세 가지 넘게 적게 한다. 다림질을 공간 갈래에 고른 학생에게 "무엇을 돌보는 일인가요?"라고 묻는다.',
            task: '바구니 이름의 갈래에 들어가는 가정일만 골라 넣어요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '끼니 갈래에 들어가는 가정일만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '끼니 갈래', cards: ['아침 상 차리기', '장 본 것 정리', '반찬 그릇 씻기', '이불 말리기', '현관 쓸기'] }, hints: ['바구니 이름의 갈래가 먹는 것, 입는 것, 사는 곳 가운데 무엇을 돌보는지 먼저 말하고, 카드마다 같은 것을 돌보는지 따져요.'], target: { pick: ['아침 상 차리기', '장 본 것 정리', '반찬 그릇 씻기'] }, difficulty: 0.15 },
              { prompt: '공간 갈래에 들어가는 가정일만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '공간 갈래', cards: ['창문 닦기', '욕실 청소', '화분 물 주기', '교복 다림질', '국 끓이기'] }, hints: ['바구니 이름의 갈래가 먹는 것, 입는 것, 사는 곳 가운데 무엇을 돌보는지 먼저 말하고, 카드마다 같은 것을 돌보는지 따져요.'], target: { pick: ['창문 닦기', '욕실 청소', '화분 물 주기'] }, difficulty: 0.2 },
              { prompt: '옷 갈래에 들어가는 가정일만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '옷 갈래', cards: ['얼룩 지우기', '교복 다림질', '작아진 옷 나누기', '식탁 닦기', '휴지 채우기'] }, hints: ['바구니 이름의 갈래가 먹는 것, 입는 것, 사는 곳 가운데 무엇을 돌보는지 먼저 말하고, 카드마다 같은 것을 돌보는지 따져요.'], target: { pick: ['얼룩 지우기', '교복 다림질', '작아진 옷 나누기'] }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['얼룩 지우기', '교복 다림질', '작아진 옷 나누기', '식탁 닦기', '휴지 채우기', '신발장 정리'] } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"오늘 처음 가정일이라고 알게 된 일은 무엇인가요?" 두세 명이 말하게 한다. 출구 1번에서 숨은 가정일을 남긴 학생은 \'이 일을 아무도 안 하면?\'을 다시 묻는다. 다음 시간에는 이 일들이 멈추면 우리 생활에 어떤 문제가 생기는지 따져 본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'kitchen', options: { slots: ['끼니', '옷', '공간'], cards: ['간식 준비하기', '양말 짝 맞추기', '베란다 정리하기'], hint1: '이 일이 먹는 것, 입는 것, 사는 곳 가운데 무엇을 돌보는지 따져 넣어요.' }, prompt: '가정일을 끼니·옷·공간 갈래로 나누어 보세요.', target: { sort: { 끼니: ['간식 준비하기'], 옷: ['양말 짝 맞추기'], 공간: ['베란다 정리하기'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '가정일에 대해 바르게 말한 것은 무엇인가요?', options: ['청소와 설거지만 가정일이에요', '식단 정하기, 계절 옷 정리도 가정일이에요', '세탁기가 있으면 빨래는 할 일이 없어요'], answer: 1, difficulty: 0.15, explain: '눈에 잘 띄지 않는 계획·정리 일도 가정일이고, 빨래에도 나누기·널기·개기가 남아 있어요.' },
          { type: 'short', prompt: '우리 집 가정일 가운데 눈에 잘 띄지 않는 일 하나와 그 갈래를 쓰세요.' },
          { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '우리 집 가정일 목록',
      items: [
        { type: 'table', prompt: '우리 집에서 이루어지는 가정일을 갈래별로 세 가지씩 쓰세요.', columns: ['끼니', '옷', '공간'], rows: 3 },
        { type: 'figure', wide: true, prompt: '갈래 칸마다 눈에 잘 띄지 않는 가정일을 하나씩 써 넣으세요.', tool: 'kitchen', figures: [{ options: { slots: ['끼니', '옷', '공간'], cards: ['보기'], printCards: false }, caption: '' }], answer: '예: 끼니 — 식단 정하기 / 옷 — 계절 옷 정리 / 공간 — 전등 갈기' },
        { type: 'choice', prompt: '옷 갈래의 가정일에 ○ 하세요.', options: ['냉장고 정리', '떨어진 단추 달기', '창문 닦기'], answer: '떨어진 단추 달기' },
        { type: 'short', prompt: '빨래나 장보기 가운데 하나를 골라 숨은 단계를 차례대로 쓰세요.' },
      ],
      easy: {
        note: '먹는 일은 끼니, 입는 일은 옷, 사는 곳을 돌보는 일은 공간 갈래예요.',
        items: [
          { type: 'table', prompt: '우리 집 가정일을 갈래별로 하나씩 쓰세요.', columns: ['끼니', '옷', '공간'], rows: 1 },
          { type: 'choice', prompt: '끼니 갈래의 가정일에 ○ 하세요.', options: ['장보기', '방 청소'], answer: '장보기' },
          { type: 'choice', prompt: '공간 갈래의 가정일에 ○ 하세요.', options: ['쓰레기 버리기', '옷 개기'], answer: '쓰레기 버리기' },
          { type: 'short', prompt: '내가 집에서 해 본 가정일 하나를 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 넣으면 초록 테두리, 틀리면 까닭이 나와요. 순서 놓기도 맞는 자리에 테두리가 생겨요.',
      base: '모두 놓은 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '민지의 하루 기록에 가정일이 아닌 카드가 더 섞여 있고, 빨래 차례에는 숨은 단계(다 말랐는지 만져 보기)가 하나 더 있으며, 옷 갈래 고르기에 \'신발장 정리\'가 더 나와요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 가정일은 눈에 보이는 청소와 설거지뿐이라고 여긴다 → \'아무도 안 하면?\'으로 식단·장보기·계절 옷 정리 같은 계획·정리 일을 찾게 한다. ② 다림질·운동화 빨기를 공간 갈래로 넣는다 → 무엇을 돌보는 일인지 묻는다. ③ 세탁기·식기세척기가 있으면 할 일이 없다고 여긴다 → 나누기·널기·개기·정리처럼 사람이 하는 단계를 짚는다.',
  }));

  // ───────────────────────── 10차시 (practice) 가정일: 멈추면 생기는 문제와 가치 ─────────────────────────
  L.push(Object.assign(head(10, '가정일이 멈추면 생기는 문제로 가정일의 가치 따지기',
    '갈래별 가정일이 멈추면 생기는 문제를 두 가지씩 들어 설명하고, 가정일이 가족의 건강·편안함과 돈으로 따질 수 있는 값을 지닌다는 것을 말할 수 있다.', ['[6실01-06]']), {
    illustration: {
      prompt: PROMPT('a paper house split in two halves, one side tidy with fresh food and clean clothes, the other side with piled dishes, an empty fridge and a laundry mountain'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'sun', x: 90, y: 58, s: 0.8 }, { motif: 'cloud', x: 390, y: 54 }, { motif: 'hills', y: 210 },
        { motif: 'house', x: 140, y: 216, color: 'mint' }, { motif: 'house', x: 340, y: 216, color: 'peach' }, { motif: 'flower', x: 230, y: 228 },
        { motif: 'text', x: 240, y: 132, text: '아무도 하지 않으면 어떻게 될까요?', size: 20 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"일주일 동안 우리 집에서 아무도 빨래를 하지 않으면 어떻게 될까요? 장보기를 하지 않으면요?" 웃음 섞인 대답을 칠판의 끼니·옷·공간 칸에 받아 적는다. 시연 단추로 \'빨래\' 가지에 \'입을 옷이 없어요\'가 이어지는 모습을 보여 주고, 멈췄을 때 문제가 크다는 것이 곧 그 일의 가치라고 짚는다.',
        student: '지난 시간에 만든 우리 집 가정일 목록에서 하루라도 멈추면 가장 곤란한 일을 골라 봅시다.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '멈추면?', slots: [{ id: 'wash', label: '빨래' }], cards: ['입을 깨끗한 옷이 없어요'], shuffle: false }, sequence: [{ match: { wash: '입을 깨끗한 옷이 없어요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 멈추면 생기는 문제 잇기', minutes: 10, tool: 'mindmap',
            teacher: '"쓰레기를 일주일 버리지 않으면 무엇이 생기나요? 냄새만 날까요?" 문제를 건강·위생·생활 편의로 넓혀 말하게 한다. 문제 카드 대신 \'귀찮아요\' 같은 마음만 잇는 학생에게 "생활에 실제로 어떤 일이 벌어지나요?"라고 묻는다.',
            task: '가지의 가정일마다 그 일이 멈추면 생기는 문제를 잇거나, 갈래 가지에 문제를 나누어요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '가정일마다 그 일이 멈추면 생기는 문제를 이어 보세요.', toolOptions: { mode: 'match', topic: '멈추면?', slots: [{ id: 'wash', label: '빨래' }, { id: 'shop', label: '장보기' }, { id: 'trash', label: '쓰레기 버리기' }], cards: ['입을 깨끗한 옷이 없어요', '먹을 재료가 떨어져요', '냄새와 벌레가 생겨요', '조금 귀찮아요'] }, hints: ['그 일을 일주일 아무도 안 하면 집에 무엇이 쌓이거나 떨어질지 떠올려 이어요. 마음만 말하는 카드는 남겨요.'], target: { match: { wash: '입을 깨끗한 옷이 없어요', shop: '먹을 재료가 떨어져요', trash: '냄새와 벌레가 생겨요' } }, difficulty: 0.15 },
              { prompt: '다른 가정일이 멈추면 생기는 문제도 이어 보세요.', toolOptions: { mode: 'match', topic: '멈추면?', slots: [{ id: 'dish', label: '설거지' }, { id: 'fridge', label: '냉장고 정리' }, { id: 'season', label: '계절 옷 정리' }], cards: ['쓸 그릇이 없고 세균이 늘어요', '상한 음식을 먹을 수 있어요', '추운 날 두꺼운 옷을 못 찾아요', '집이 조용해져요'] }, hints: ['그 일을 일주일 아무도 안 하면 집에 무엇이 쌓이거나 떨어질지 떠올려 이어요. 마음만 말하는 카드는 남겨요.'], target: { match: { dish: '쓸 그릇이 없고 세균이 늘어요', fridge: '상한 음식을 먹을 수 있어요', season: '추운 날 두꺼운 옷을 못 찾아요' } }, difficulty: 0.25,
                levels: { challenge: { toolOptions: { cards: ['쓸 그릇이 없고 세균이 늘어요', '상한 음식을 먹을 수 있어요', '추운 날 두꺼운 옷을 못 찾아요', '집이 조용해져요', '가족이 심심해져요'] } } } },
              { prompt: '갈래마다 일이 멈추면 생기는 문제를 두 가지씩 나누어 보세요.', toolOptions: { topic: '멈추면 생기는 문제', slots: ['끼니 일이 멈추면', '옷 일이 멈추면', '공간 일이 멈추면'], cards: ['끼니를 거르게 돼요', '영양이 고르지 않아요', '땀 냄새 나는 옷을 입어요', '해진 옷을 그냥 입어요', '먼지로 기침이 나요', '물건을 찾기 어려워요'] }, hints: ['먹는 일, 입는 일, 사는 곳을 돌보는 일 가운데 무엇이 멈춰서 생긴 문제인지 따져 나누어요.'], target: { sort: { '끼니 일이 멈추면': ['끼니를 거르게 돼요', '영양이 고르지 않아요'], '옷 일이 멈추면': ['땀 냄새 나는 옷을 입어요', '해진 옷을 그냥 입어요'], '공간 일이 멈추면': ['먼지로 기침이 나요', '물건을 찾기 어려워요'] } }, difficulty: 0.3,
                predict: { q: '가정일이 멈추면 가장 먼저 무엇이 흔들릴까요?', options: ['가족의 건강', '가족의 재미', '잘 모르겠어요'], answer: 0 },
                conclude: '가정일이 멈추면 건강과 편안한 생활이 흔들려요. 그만큼 가정일은 가족에게 꼭 필요한 일이에요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 가정일이 멈춘 집 상황 판단하기', minutes: 8, tool: 'emotion',
            teacher: '"집안일을 가장 많이 하던 가족 한 사람이 일주일 출장을 가면 그동안 가정일은 누가 하나요?" 한 사람이 도맡던 일이 멈추면 가족 모두가 곤란해진다는 것을 결과 칸으로 확인하고, "가정일은 한 사람 몫이 아니라 함께 사는 가족 모두의 일이에요."라고 짚는다. \'돌아오실 때까지 기다린다\'를 고른 학생에게 "그동안 끼니와 빨래는요?"라고 묻는다.',
            task: '가정일이 멈춘 상황을 읽고 어떻게 할지 골라요. 결과 칸을 읽고 까닭을 말해요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '집안일을 가장 많이 하던 보호자 한 분이 일주일 출장을 가셨어요. 가족은 어떻게 하면 좋을까요?', toolOptions: { mode: 'branch', situation: '집안일을 가장 많이 하던 보호자 한 분이 일주일 출장을 가셨어요. 그분이 도맡던 장보기와 빨래가 멈췄어요.', choices: [
                { id: 'share', text: '가족이 일을 나누어 맡아요', result: '끼니도 거르지 않고 깨끗한 옷도 입어요.', mood: '뿌듯함' },
                { id: 'wait', text: '그분이 오실 때까지 기다려요', result: '냉장고가 비고 빨랫감이 쌓여요.', mood: '걱정', why: '일주일 동안 끼니와 옷은 어떻게 될지 떠올려 봐요.' },
                { id: 'snack', text: '날마다 과자로 끼니를 때워요', result: '배는 부르지만 몸이 쉽게 지쳐요.', mood: '걱정', why: '끼니 일이 멈추면 건강이 흔들려요.' }] }, target: { choice: 'share' }, difficulty: 0.15 },
              { prompt: '분리배출 날을 세 번 놓쳤어요. 어떻게 하면 좋을까요?', toolOptions: { mode: 'branch', situation: '바빠서 재활용 분리배출 날을 세 번 놓쳤어요. 베란다에 상자와 병이 가득해요.', choices: [
                { id: 'plan', text: '배출 요일을 달력에 적고 맡을 사람을 정해요', result: '다음 배출 날에 베란다가 깨끗해져요.', mood: '편안함' },
                { id: 'mix', text: '일반 쓰레기에 섞어 버려요', result: '재활용이 안 되고 규칙도 어기게 돼요.', mood: '미안함', why: '지금 편한 방법이 문제를 키우지 않는지 살펴봐요.' },
                { id: 'ignore', text: '그냥 계속 쌓아 둬요', result: '벌레가 생기고 베란다를 쓸 수 없어요.', mood: '걱정', why: '공간 일이 멈추면 생기는 문제를 떠올려 봐요.' }] }, target: { choice: 'plan' }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { revealAfterCheck: true } } },
                conclude: '가정일은 미루면 문제가 쌓여요. 때를 정하고 맡을 사람을 정하면 멈추지 않아요.' },
              { prompt: '가정일이 가족에게 주는 것만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '가정일이 주는 것', weather: false, cards: ['건강한 끼니', '깨끗한 옷', '쉴 수 있는 방', '시험 점수', '게임 아이템'] }, hints: ['가정일이 끝난 뒤 가족 모두가 날마다 누리게 되는 것인지 따져 골라요.'], target: { pick: ['건강한 끼니', '깨끗한 옷', '쉴 수 있는 방'] }, difficulty: 0.15,
                levels: { easy: { toolOptions: { live: true, instant: true } }, challenge: { toolOptions: { cards: ['건강한 끼니', '깨끗한 옷', '쉴 수 있는 방', '시험 점수', '게임 아이템', '용돈'] } } } },
            ],
          },
          {
            id: 'a3', title: '활동 3. 가정일을 맡긴다면 얼마일까', minutes: 9, tool: 'economy',
            teacher: '"집에서 하는 다림질을 세탁소에 맡기면 얼마를 내야 할까요?" 가격표의 한 벌 값과 문항의 벌 수를 곱해 돈을 놓게 한다. 가격표 값만 그대로 놓는 학생에게 "몇 벌을 맡겼나요?"라고 묻는다. 가정일은 돈을 받지 않지만 돈으로 따지면 큰 값이 있다는 것을 짚는다(값은 수업용 예시).',
            task: '가격표는 한 번(한 벌·한 시간) 값이에요. 문항에 적힌 양만큼 맡기면 모두 얼마인지 돈을 놓아요.',
            levels: { easy: { showTotal: true }, base: {}, challenge: { showTotal: false } },
            items: [
              { prompt: '셔츠 4벌의 다림질을 세탁소에 맡기면 모두 얼마인지 돈을 놓아 보세요.', toolOptions: { mode: 'pay', item: { text: '셔츠 다림질 1벌', motif: 'shirt', price: 2500 }, coins: [500, 1000, 5000, 10000], ask: '4벌을 맡기면 모두 얼마일까요?' }, hints: ['가격표는 한 번 맡길 때의 값이에요. 맡기는 양만큼 곱해 모두 얼마인지 먼저 구한 뒤 돈을 놓아요.'], target: { pay: 10000 }, difficulty: 0.2 },
              { prompt: '집 청소를 2시간 맡기면 모두 얼마인지 돈을 놓아 보세요.', toolOptions: { mode: 'pay', item: { text: '집 청소 1시간', motif: 'broom', price: 15000 }, coins: [1000, 5000, 10000], ask: '2시간을 맡기면 모두 얼마일까요?' }, hints: ['가격표는 한 번 맡길 때의 값이에요. 맡기는 양만큼 곱해 모두 얼마인지 먼저 구한 뒤 돈을 놓아요.'], target: { pay: 30000 }, difficulty: 0.25 },
              { prompt: '반찬 3가지를 사 먹으면 모두 얼마인지 돈을 놓아 보세요.', toolOptions: { mode: 'pay', item: { text: '반찬 1가지', motif: 'pot', price: 4000 }, coins: [500, 1000, 5000, 10000], ask: '3가지를 사면 모두 얼마일까요?' }, hints: ['가격표는 한 번 맡길 때의 값이에요. 맡기는 양만큼 곱해 모두 얼마인지 먼저 구한 뒤 돈을 놓아요.'], target: { pay: 12000 }, difficulty: 0.25,
                predict: { q: '집에서 하는 가정일은 돈으로 따지면 값이 있을까요?', options: ['값이 없어요', '값이 커요', '잘 모르겠어요'], answer: 1 },
                conclude: '가정일은 돈을 받지 않지만, 남에게 맡기면 돈을 내야 할 만큼 큰 값이 있는 일이에요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"가정일이 멈추면 생기는 문제를 떠올려 보니, 가정일은 우리 가족에게 무엇을 해 주고 있나요?" \'건강·편안함·돈으로 따질 수 있는 값\'을 판서해 묶는다. 출구 2번을 틀린 학생에게는 \'돈을 받지 않는 일도 값이 있는지\'를 다시 묻는다. 활동지 5번 \'한 주 가정일 기록표\'를 오려 집에 가져가게 하고, 가족 이름 대신 관계(아빠·할머니·나)로 한 주 동안 적어 오라고 한다. 다음 시간에는 이 기록표를 그래프로 살펴본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '멈추면?', slots: [{ id: 'bed', label: '이불 빨래' }, { id: 'mop', label: '바닥 닦기' }], cards: ['진드기가 늘어 몸이 가려워요', '먼지가 쌓여 기침이 나요', '이웃이 놀러 와요'] }, prompt: '가정일마다 그 일이 멈추면 생기는 문제를 이어 보세요.', target: { match: { bed: '진드기가 늘어 몸이 가려워요', mop: '먼지가 쌓여 기침이 나요' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '가정일의 가치를 바르게 말한 것은 무엇인가요?', options: ['돈을 받지 않으니 값이 없어요', '가족의 건강과 편안한 생활을 지키는 값진 일이에요', '어른만 하면 되는 일이에요'], answer: 1, difficulty: 0.15, explain: '가정일이 멈추면 건강과 생활이 흔들리고, 남에게 맡기면 돈이 들어요. 그만큼 값진 일이에요.' },
          { type: 'short', prompt: '우리 집에서 하루만 멈춰도 곤란한 가정일 하나와 생길 문제 두 가지를 쓰세요.' },
          { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '가정일이 멈추면',
      items: [
        { type: 'table', prompt: '갈래마다 일이 멈추면 생기는 문제를 두 가지씩 쓰세요.', columns: ['갈래', '멈추는 일', '생기는 문제 ①', '생기는 문제 ②'], cells: [['끼니', '', '', ''], ['옷', '', '', ''], ['공간', '', '', '']] },
        { type: 'blank', prompt: '가격표를 보고 빈칸을 채우세요. (셔츠 다림질 1벌 2,500원)', text: '셔츠 6벌을 맡기면 모두 ___원이에요.', answer: '15,000' },
        { type: 'choice', prompt: '냉장고 정리가 멈추면 생기는 문제에 ○ 하세요.', options: ['상한 음식을 먹을 수 있어요', '옷이 작아져요', '창문이 깨져요'], answer: '상한 음식을 먹을 수 있어요' },
        { type: 'short', prompt: '"가정일은 돈을 받지 않으니 중요하지 않다"는 말에 대한 내 생각을 쓰세요.' },
        { type: 'table', prompt: '[집에 가져가요] 한 주 가정일 기록표: 날마다 가족이 한 가정일과 걸린 시간을 쓰세요. 이름 대신 관계(아빠·할머니·나)로 써요.', columns: ['요일', '가족(관계)', '한 일', '걸린 시간(분)'], rows: 7 },
      ],
      easy: {
        note: '그 일을 아무도 하지 않는 일주일을 떠올려 보아요. 먹을 것, 입을 것, 사는 곳이 어떻게 될까요?',
        items: [
          { type: 'table', prompt: '일이 멈추면 생기는 문제를 하나씩 쓰세요.', columns: ['멈추는 일', '생기는 문제'], cells: [['빨래', ''], ['장보기', ''], ['쓰레기 버리기', '']] },
          { type: 'choice', prompt: '설거지가 멈추면 생기는 문제에 ○ 하세요.', options: ['쓸 그릇이 없어요', '옷이 깨끗해져요'], answer: '쓸 그릇이 없어요' },
          { type: 'choice', prompt: '가정일이 가족에게 주는 것에 ○ 하세요.', options: ['건강한 끼니', '게임 아이템'], answer: '건강한 끼니' },
          { type: 'short', prompt: '우리 집에서 가장 중요한 가정일 하나를 쓰세요.' },
          { type: 'table', prompt: '[집에 가져가요] 날마다 가족이 한 가정일과 걸린 시간을 쓰세요. 이름 대신 관계로 써요.', columns: ['요일', '가족(관계)', '한 일', '걸린 시간(분)'], rows: 7 },
        ],
      },
    },
    differentiation: {
      easy: '잇기·고르기에서 맞게 놓으면 초록 테두리가 생기고, 돈 놓기에서는 낸 돈 합계가 늘 보여요.',
      base: '모두 놓은 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '멈추면 생기는 문제 잇기에 \'가족이 심심해져요\', 가정일이 주는 것 고르기에 \'용돈\'이 더 나와요. 분리배출 상황은 맞게 골라야 결과가 보이고, 돈 놓기에서 합계 줄이 보이지 않아 놓은 돈을 스스로 세어야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 가정일은 청소·설거지뿐이라 멈춰도 큰일이 없다고 여긴다 → 장보기·냉장고 정리·계절 옷 정리가 멈춘 일주일을 떠올리게 한다. ② 멈추면 생기는 문제를 \'귀찮다\' 같은 마음으로만 말한다 → 건강·위생·생활 편의의 실제 문제로 바꾸어 말하게 한다. ③ 돈 놓기에서 가격표의 한 번 값만 놓는다 → 문항의 양(벌·시간·가지)을 곱한다. 값은 수업용 예시이며 지역·가게마다 다르다고 덧붙인다. ④ 가정일은 엄마나 특정 가족이 맡는 것이 당연하다고 여긴다 → 활동 2 상황에서 \'그분이 없으면 누가?\'를 묻고, 가정일은 함께 사는 가족 모두의 일이라고 짚는다. 11차시는 한 주 기록표로 시작하므로 며칠 뒤에 하는 것이 좋다. 10·11차시를 연속 블록으로 하면 11차시를 준호네 기록표(활동 1)로 시작하고, 집 기록은 다음 주에 그래프로 옮긴다.',
  }));

  // ───────────────────────── 11차시 (core) 가정일: 한 주 기록과 그래프 ─────────────────────────
  L.push(Object.assign(head(11, '한 주 가정일 기록을 그래프로 그려 가족의 몫 살피기',
    '한 주 동안 가족이 가정일을 한 시간을 표와 막대그래프로 나타내 읽고, 짐작한 시간과 실제로 걸린 시간을 견주어 말할 수 있다.', ['[6실01-06]']), {
    safety: ['교실 일을 해 볼 때 의자 위에 올라서지 않아요.', '걸레는 물기를 꼭 짜서 바닥이 미끄럽지 않게 해요.'],
    illustration: {
      prompt: PROMPT('a family chore chart on a paper fridge door with colorful bar strips for each family member and a small stopwatch beside a pile of folded laundry'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'cloud', x: 100, y: 52 }, { motif: 'sun', x: 400, y: 58, s: 0.8 }, { motif: 'hills', y: 210 },
        { motif: 'house', x: 130, y: 216 }, { motif: 'tree', x: 370, y: 214 }, { motif: 'star', x: 250, y: 70, color: 'buttercup' },
        { motif: 'text', x: 240, y: 140, text: '누가 얼마나 했을까요?', size: 22 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"빨래 개기는 몇 분쯤 걸릴까요? 손을 들어 짐작해 봐요." 짐작한 시간을 칠판에 적어 두고, 실제로 잰 사람의 기록(15분)과 견주어 "내가 해 보지 않은 일은 짧게 짐작하기 쉬워요."라고 짚는다. 지난 시간 가져간 한 주 가정일 기록표(10차시 활동지 5번)를 꺼내게 하고(기록이 없는 학생은 짝과 함께 준호네 기록표를 본다), 시연 단추로 짐작과 실제 막대가 차례로 올라가는 모습을 보여 준다.',
        student: '내가 한 주 동안 한 가정일과 걸린 시간을 기록표에서 찾아봅시다.',
        demo: { tool: 'chart', options: { type: 'bar', title: '빨래 개기 시간', data: [['짐작', 5], ['실제', 15]], unit: '분', xLabel: '구분', yLabel: '시간', max: 20, scale: 5, showValues: true }, sequence: [{ values: [5, 0] }, { values: [5, 15] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 한 주 기록표를 막대그래프로 나타내기', minutes: 10, tool: 'chart',
            teacher: '"눈금 한 칸은 몇 분인가요? 420분이면 몇 칸을 올려야 할까요?" 한 칸이 60분(1시간)인 것을 먼저 확인하게 한다. 그래프를 다 그린 뒤 "막대가 가장 짧은 사람은 누구인가요? 그 사람이 더 맡을 수 있는 일은?"으로 가족의 몫을 이야기하게 한다. 특정 가족을 탓하는 말이 나오면 \'누가 더 했나\'보다 \'함께 나누는 방법\'으로 돌린다.',
            task: '기록표의 시간을 보고 막대를 올려 그래프를 완성해요. 눈금 한 칸이 몇 분인지 먼저 확인해요.',
            levels: { easy: { showValues: true }, base: {}, challenge: {} },
            items: [
              { prompt: '준호네 가족의 한 주 가정일 시간 표를 보고 막대그래프를 완성하세요.', toolOptions: { type: 'bar', title: '준호네 한 주 가정일 시간', data: [['아빠', 420], ['엄마', 480], ['누나', 180], ['준호', 60]], unit: '분', xLabel: '가족', yLabel: '시간', max: 540, scale: 60, given: [0] }, target: { build: true }, difficulty: 0.2, reveal: 'after-check',
                levels: { challenge: { toolOptions: { given: [] } } } },
              { prompt: '민지네 한 주 가정일 시간을 갈래별로 나타낸 표를 보고 막대그래프를 완성하세요.', toolOptions: { type: 'bar', title: '민지네 갈래별 가정일 시간', data: [['끼니', 600], ['옷', 240], ['공간', 300]], unit: '분', xLabel: '갈래', yLabel: '시간', max: 660, scale: 60 }, target: { build: true }, difficulty: 0.25, reveal: 'after-check' },
              { prompt: '준호네 그래프에서 준호의 시간은 엄마 시간의 몇 분의 1인가요?', toolOptions: { type: 'bar', mode: 'read', title: '준호네 한 주 가정일 시간', data: [['아빠', 420], ['엄마', 480], ['누나', 180], ['준호', 60]], unit: '분', xLabel: '가족', max: 540, scale: 60, choices: ['2분의 1', '4분의 1', '8분의 1'], question: '준호의 시간은 엄마 시간의 몇 분의 1인가요?', why: ['엄마 막대를 둘로 나눈 것보다 준호 막대가 훨씬 짧아요.', '엄마 막대를 넷으로 나눈 한 조각보다도 준호 막대가 짧아요.', ''], explain: '엄마 480분 ÷ 준호 60분 = 8이에요. 준호의 시간은 엄마 시간의 8분의 1이에요.' }, target: { pick: 2 }, difficulty: 0.3,
                predict: { q: '가정일을 가장 많이 한 사람과 가장 적게 한 사람의 차이는 클까요?', options: ['비슷해요', '아주 커요', '잘 모르겠어요'], answer: 1 },
                conclude: '그래프로 보면 가족의 몫이 한눈에 보여요. 차이가 크면 함께 나눌 방법을 찾아요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 짐작한 시간과 실제 시간 견주기', minutes: 9, tool: 'chart',
            teacher: '"설거지는 짐작보다 몇 분 더 걸렸나요? 왜 그렇게 짧게 짐작했을까요?" 해 보지 않은 일은 숨은 단계(9차시)를 빼고 짐작하기 쉽다는 것을 짚는다. 차이가 큰 일일수록 내가 직접 해 보며 시간을 재어 볼 가치가 있다고 잇는다.',
            task: '짐작한 시간과 실제로 잰 시간을 나타낸 막대그래프를 읽거나 완성해요.',
            levels: { easy: { showValues: true }, base: {}, challenge: {} },
            items: [
              { prompt: '설거지는 짐작한 시간보다 실제로 몇 분 더 걸렸나요?', toolOptions: { type: 'bar', mode: 'read', title: '설거지 시간', data: [['짐작', 10], ['실제', 25]], unit: '분', xLabel: '구분', max: 30, scale: 5, question: '설거지는 짐작보다 몇 분 더 걸렸나요?' }, target: { value: 15 }, difficulty: 0.2 },
              { prompt: '짐작보다 실제로 가장 많이 더 걸린 가정일은 무엇인가요?', toolOptions: { type: 'bar', mode: 'read', title: '짐작보다 더 걸린 시간', data: [['빨래 개기', 10], ['욕실 청소', 20], ['분리배출', 5]], unit: '분', xLabel: '가정일', max: 25, scale: 5, choices: ['빨래 개기', '욕실 청소', '분리배출'], question: '짐작보다 가장 많이 더 걸린 일은?', why: ['빨래 개기 막대보다 더 높은 막대가 있어요.', '', '분리배출 막대가 가장 낮아요.'], explain: '욕실 청소 막대가 20분으로 가장 높아요. 해 보지 않은 일일수록 짐작이 크게 빗나가요.' }, target: { pick: 1 }, difficulty: 0.2 },
              { prompt: '민지는 화분 물 주기를 5분으로 짐작했는데 15분 걸렸어요. 그래프를 완성하세요.', toolOptions: { type: 'bar', title: '화분 물 주기 시간', data: [['짐작', 5], ['실제', 15]], unit: '분', xLabel: '구분', yLabel: '시간', max: 20, scale: 5, given: [0] }, target: { build: true }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { given: [] } } },
                predict: { q: '내가 해 보지 않은 일은 시간을 어떻게 짐작하기 쉬울까요?', options: ['짧게', '길게', '잘 모르겠어요'], answer: 0 },
                conclude: '해 보지 않은 일은 숨은 단계를 빼고 짧게 짐작하기 쉬워요. 직접 재어 보면 그 일의 무게를 알게 돼요.' },
            ],
          },
          {
            id: 'a3', title: '활동 3. 교실 일을 직접 해 보고 시간 재기', minutes: 8, tool: 'timer',
            teacher: '"내 사물함을 정리하는 데 몇 분 걸릴까요? 먼저 짐작해 적고, 실제로 재어 봐요." 초시계 단추로 직접 재게 하고, 짝과 짐작과 실제의 차이를 견주게 한다. 실제로 하지 않고 숫자만 적는 학생이 없도록 순회하며 확인한다. 걸레질을 할 때는 물이 바닥에 흐르지 않게 꼭 짜게 한다.',
            task: '교실에서 실제로 일을 해 보고 기록판에 시간을 적어요. 짐작한 시간은 해 보기 전에 적어요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '사물함 정리 시간을 먼저 짐작해 적고, 실제로 재어 적으세요.', toolOptions: { title: '사물함 정리', fields: [{ label: '짐작', unit: '분' }, { label: '실제', unit: '분' }], stopwatch: true }, target: { records: true }, difficulty: 0.1 },
              { prompt: '내 책상 닦기 시간을 먼저 짐작해 적고, 실제로 재어 적으세요.', toolOptions: { title: '책상 닦기', fields: [{ label: '짐작', unit: '분' }, { label: '실제', unit: '분' }], stopwatch: true }, target: { records: true }, difficulty: 0.1 },
              { prompt: '준호의 메모(짐작 3분, 실제 8분, 다시 해 보니 6분)를 기록판에 옮겨 적으세요.', toolOptions: { title: '준호의 신발장 정리', fields: [{ label: '짐작', unit: '분' }, { label: '실제', unit: '분' }, { label: '다시', unit: '분' }] }, target: { records: [3, 8, 6] }, difficulty: 0.15,
                levels: { challenge: { prompt: '준호의 메모(짐작 3분, 실제 8분, 다시 해 보니 6분)를 옮겨 적고, 짐작과 실제의 차이도 계산해 적으세요.', toolOptions: { fields: [{ label: '짐작', unit: '분' }, { label: '실제', unit: '분' }, { label: '다시', unit: '분' }, { label: '짐작과 실제의 차이', unit: '분' }] }, target: { records: [3, 8, 6, 5] } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"우리 집 그래프에서 막대가 가장 짧은 사람이 나라면, 무엇을 더 맡을 수 있을까요?" 집에서 가져온 기록표로 그린 그래프를 짝과 견주게 한다. 출구 1번을 틀린 학생에게는 눈금 한 칸의 크기를 다시 묻는다. 다음 시간에는 그래프를 근거로 내가 더 맡을 가정일을 정해 실천 계획을 세우고 단원을 정리한다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '수아네 한 주 가정일 시간', data: [['할머니', 360], ['아빠', 300], ['수아', 120]], unit: '분', xLabel: '가족', max: 420, scale: 60, question: '수아는 한 주에 몇 분 가정일을 했나요?' }, prompt: '그래프를 보고 수아가 한 주에 가정일을 한 시간을 쓰세요.', target: { value: 120 }, difficulty: 0.15 },
          { type: 'choice', prompt: '내가 해 보지 않은 가정일의 시간에 대해 바르게 말한 것은 무엇인가요?', options: ['짐작한 시간이 늘 맞아요', '해 보지 않은 일은 짧게 짐작하기 쉬워요', '어른이 하면 시간이 걸리지 않아요'], answer: 1, difficulty: 0.15, explain: '숨은 단계를 모르면 짧게 짐작하기 쉬워요. 직접 재어 보면 실제 시간을 알 수 있어요.' },
          { type: 'short', prompt: '우리 집 한 주 가정일 기록에서 알게 된 점 하나를 쓰세요.' },
          { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '우리 집 한 주 가정일 기록',
      items: [
        { type: 'table', prompt: '한 주 동안 우리 집 가족이 가정일을 한 시간(분)을 쓰세요. 이름 대신 관계(아빠·엄마·나)로 써요.', columns: ['가족', '한 일', '걸린 시간(분)'], rows: 4 },
        { type: 'figure', wide: true, prompt: '표를 보고 막대그래프를 그리세요. (아빠 300분, 엄마 360분, 나 60분)', tool: 'chart', figures: [{ options: { type: 'bar', title: '한 주 가정일 시간', data: [['아빠', 300], ['엄마', 360], ['나', 60]], unit: '분', max: 420, scale: 60, given: [] }, caption: '' }], answer: '아빠 5칸, 엄마 6칸, 나 1칸 (한 칸 60분)' },
        { type: 'table', prompt: '해 보기 전 짐작한 시간과 실제 시간을 적어 견주세요.', columns: ['가정일', '짐작(분)', '실제(분)', '차이(분)'], rows: 3 },
        { type: 'short', prompt: '짐작과 실제 시간의 차이가 생긴 까닭을 쓰세요.' },
      ],
      easy: {
        note: '그래프의 눈금 한 칸이 몇 분인지 먼저 확인해요.',
        items: [
          { type: 'table', prompt: '우리 집 가족이 한 가정일을 쓰세요.', columns: ['가족', '한 일'], rows: 3 },
          { type: 'figure', wide: true, prompt: '표를 보고 막대그래프를 그리세요. (가 30분, 나 10분)', tool: 'chart', figures: [{ options: { type: 'bar', title: '가정일 시간', data: [['가', 30], ['나', 10]], unit: '분', max: 40, scale: 10, given: [] }, caption: '' }], answer: '가 3칸, 나 1칸' },
          { type: 'choice', prompt: '해 보지 않은 일은 시간을 어떻게 짐작하기 쉬운가요? ○ 하세요.', options: ['짧게', '길게'], answer: '짧게' },
          { type: 'short', prompt: '내가 직접 재어 본 일과 걸린 시간을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '막대 끝에 지금 값이 보여 몇 분인지 바로 알 수 있어요.',
      base: '값을 보지 않고 눈금을 세어 막대를 올려요.',
      challenge: '값을 보지 않고, 미리 그려 둔 첫 막대도 없이 그래프를 처음부터 그려요. 준호의 메모를 옮길 때는 짐작과 실제의 차이까지 계산해 적어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 자신이 하지 않은 일은 시간이 얼마 걸리지 않을 것이라고 짐작한다 → 짐작을 먼저 적고 실제로 재어 견주게 한다. ② 눈금 한 칸을 1분으로 읽는다 → 한 칸이 60분임을 먼저 짚는다. ③ 그래프를 보고 특정 가족을 탓한다 → \'함께 나눌 방법\'을 찾는 근거로 쓴다. 가정 기록표에는 가족 이름 대신 \'아빠·엄마·나\' 같은 관계만 적게 한다.',
  }));

  // ───────────────────────── 12차시 (wrap) 가정일 실천과 단원 정리 ─────────────────────────
  L.push(Object.assign(head(12, '내가 더 맡을 가정일을 정해 실천하고 단원 돌아보기',
    '한 주 기록을 근거로 내가 안전하게 더 맡을 가정일과 요일을 정하고, 진로·옷차림·가정일에서 스스로 이끈 일을 묶어 자기 평가할 수 있다.', ['[6실01-06]', '[6실01-07]', '[6실01-05]']), {
    safety: ['가스레인지·전기 기구를 쓰는 가정일은 어른과 함께하거나 맡지 않아요.', '세제와 청소 약품은 섞지 말고, 쓴 뒤에는 손을 씻어요.', '높은 곳의 물건을 꺼낼 때는 흔들리는 의자 대신 어른의 도움을 받아요.'],
    illustration: {
      prompt: PROMPT('a child proudly folding laundry at home while a paper badge, a career plan card and a neatly chosen outfit float around like a three-petal flower'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'sun', x: 410, y: 58, s: 0.9 }, { motif: 'cloud', x: 100, y: 52 }, { motif: 'hills', y: 210 },
        { motif: 'flower', x: 120, y: 226 }, { motif: 'flower', x: 360, y: 228, color: 'lavender' }, { motif: 'house', x: 240, y: 216 },
        { motif: 'star', x: 180, y: 90, color: 'buttercup' }, { motif: 'star', x: 300, y: 84, color: 'rose', s: 0.8 },
        { motif: 'text', x: 240, y: 146, text: '내 삶을 스스로 이끌어요', size: 22 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"지난 시간 그래프에서 내 막대는 몇 칸이었나요? 한 칸만 더 늘린다면 무엇을 맡겠어요?" 두세 명의 생각을 듣는다. 시연 단추로 맡을 일이 바구니에 담기는 모습을 보여 주고, "오늘은 가정일 계획을 세우고, 이 단원에서 스스로 해낸 일을 돌아볼 거예요."라고 알린다.',
        student: '지난 시간 그래프에서 내 막대를 다시 보고, 더 맡고 싶은 가정일 하나를 떠올려 봅시다.',
        demo: { tool: 'kitchen', options: { mode: 'pick', basket: '내가 맡을 일', cards: ['빨래 개기', '분리배출'], shuffle: false }, sequence: [{ pick: ['빨래 개기', '분리배출'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 내가 더 맡을 가정일 정하기', minutes: 10, tool: 'kitchen',
            teacher: '"6학년인 내가 혼자 안전하게 할 수 있는 일은 무엇일까요? 어른과 함께해야 하는 일은?" 가스 불·높은 곳·약품이 걸린 일은 혼자 맡지 않는다고 짚는다. 요일 문항에서는 분리배출 요일처럼 집 밖에서 정해진 때를 먼저 확인하게 하고, 실천한 날은 걸린 시간을 기록표에 적게 한다.',
            task: '안전하게 맡을 수 있는 일을 고르고, 문항의 조건을 읽어 요일 칸에 맡을 일을 놓아요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '6학년이 혼자 안전하게 맡을 수 있는 가정일만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '혼자 맡을 수 있는 일', cards: ['빨래 개기', '분리배출', '식탁 차리기', '가스레인지로 튀김하기', '사다리 올라 전등 갈기'] }, hints: ['불·전기 기구·높은 곳·약품이 걸리지 않아 혼자 해도 다치지 않는 일인지 따져 골라요.'], target: { pick: ['빨래 개기', '분리배출', '식탁 차리기'] }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['빨래 개기', '분리배출', '식탁 차리기', '가스레인지로 튀김하기', '사다리 올라 전등 갈기', '다리미로 교복 다리기'] } } } },
              { prompt: '분리배출은 수요일, 빨래는 토요일, 식탁 차리기는 날마다 해요. 조건대로 놓아 보세요.', toolOptions: { mode: 'match', slots: [{ id: 'wed', label: '수요일' }, { id: 'sat', label: '토요일' }, { id: 'day', label: '날마다' }], cards: ['재활용 분리배출', '마른 빨래 개기', '저녁 식탁 차리기', '생각날 때 하기'] }, hints: ['문항에 적힌 요일 조건을 먼저 읽고 그대로 놓아요. 때가 정해지지 않은 카드는 남겨요.'], target: { match: { wed: '재활용 분리배출', sat: '마른 빨래 개기', day: '저녁 식탁 차리기' } }, difficulty: 0.2 },
              { prompt: '가정일을 실천할 때 꼭 지킬 것에만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '가정일 실천 약속', items: [{ id: 'time', text: '걸린 시간을 기록해요' }, { id: 'ask', text: '모르는 일은 가족에게 물어요' }, { id: 'mix', text: '세제를 여러 개 섞어 써요' }, { id: 'safe', text: '위험한 일은 어른과 해요' }, { id: 'skip', text: '귀찮은 날은 말없이 건너뛰어요' }] }, target: { checklist: ['time', 'ask', 'safe'] }, difficulty: 0.2,
                predict: { q: '세제를 여러 개 섞으면 더 깨끗해질까요?', options: ['더 깨끗해요', '위험할 수 있어요', '잘 모르겠어요'], answer: 1 },
                conclude: '세제를 섞으면 해로운 기체가 생길 수 있어요. 가정일도 안전 약속을 먼저 지켜요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 진로·옷차림·가정일 하나로 묶기', minutes: 10, tool: 'mindmap',
            teacher: '"이 단원에서 우리가 스스로 해낸 일을 세 갈래로 묶어 볼까요?" 카드를 진로·옷차림·가정일 가지에 나눈 뒤, 세 갈래에 공통으로 있었던 흐름(알기 → 계획 → 실천 → 돌아보고 고치기)을 차례로 놓게 한다. "이 흐름을 되풀이하는 것이 \'주도적인 삶\'이에요."라고 묶는다.',
            task: '이 단원에서 한 일 카드를 갈래 가지에 나누고, 세 갈래에 공통인 흐름을 찾아요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '이 단원에서 한 일을 진로·옷차림·가정일 가지에 나누어 보세요.', toolOptions: { topic: '스스로 이끄는 삶', slots: ['진로', '옷차림', '가정일'], cards: ['흥미·적성 물음 만들기', '진로 계획서 쓰기', '내일 옷차림 계획', '입어 보고 고쳐 쓰기', '가정일 기록표 만들기', '더 맡을 일 정하기'] }, hints: ['그 일이 꿈과 직업, 입는 것, 집안일 가운데 무엇을 스스로 이끈 일인지 따져 나누어요.'], target: { sort: { 진로: ['흥미·적성 물음 만들기', '진로 계획서 쓰기'], 옷차림: ['내일 옷차림 계획', '입어 보고 고쳐 쓰기'], 가정일: ['가정일 기록표 만들기', '더 맡을 일 정하기'] } }, difficulty: 0.15 },
              { prompt: '세 갈래에 공통인 \'스스로 이끄는 흐름\'을 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['나와 상황 알기', '계획 세우기', '실천하기', '돌아보고 고치기'] }, hints: ['무엇을 알아야 계획을 세울 수 있고, 해 본 뒤에야 돌아볼 수 있는지 떠올려요.'], target: { order: ['나와 상황 알기', '계획 세우기', '실천하기', '돌아보고 고치기'] }, difficulty: 0.2,
                predict: { q: '진로·옷차림·가정일에 같은 흐름이 있었을까요?', options: ['있었어요', '모두 달랐어요', '잘 모르겠어요'], answer: 0 },
                conclude: '알기 → 계획 → 실천 → 돌아보고 고치기. 이 흐름을 되풀이하는 것이 내 삶을 스스로 이끄는 힘이에요.' },
              { prompt: '갈래마다 \'돌아보고 고치기\'에 해당하는 일을 이어 보세요.', toolOptions: { mode: 'match', topic: '돌아보고 고치기', slots: [{ id: 'job', label: '진로' }, { id: 'cloth', label: '옷차림' }, { id: 'home', label: '가정일' }], cards: ['학기 말에 계획서 돌아보기', '불편했던 점으로 계획 고치기', '짐작과 실제 시간 견주기', '친구 꿈 따라 하기'] }, hints: ['갈래마다 해 본 뒤에 결과를 살피고 바꾸거나 견준 일이 무엇이었는지 떠올려 이어요.'], target: { match: { job: '학기 말에 계획서 돌아보기', cloth: '불편했던 점으로 계획 고치기', home: '짐작과 실제 시간 견주기' } }, difficulty: 0.25,
                levels: { challenge: { toolOptions: { cards: ['학기 말에 계획서 돌아보기', '불편했던 점으로 계획 고치기', '짐작과 실제 시간 견주기', '친구 꿈 따라 하기', '남이 고쳐 줄 때까지 기다리기'] } } } },
            ],
          },
          {
            id: 'a3', title: '활동 3. 계획이 어긋날 때 스스로 고치기', minutes: 8, tool: 'emotion',
            teacher: '"시험 기간이라 맡은 가정일을 못 하게 되면 어떻게 할까요?" 계획이 어긋나도 말없이 그만두지 않고 가족과 의논해 고치는 것이 스스로 이끄는 삶이라고 짚는다. 결과 칸을 읽고 고른 까닭을 말하게 한 뒤, 활동지의 자기 평가표를 채우게 한다.',
            task: '계획이 어긋난 상황을 읽고 어떻게 할지 골라요. 결과 칸을 읽고 까닭을 말해요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '시험 기간이라 맡은 빨래 개기를 못 하게 됐어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '준호', situation: '토요일마다 빨래 개기를 맡았는데, 다음 주는 시험 공부로 시간이 없어요.', feeling: '걱정', choices: [
                { id: 'talk', text: '가족과 의논해 요일을 바꿔요', result: '일요일에 빨래를 개고 공부도 해요.', mood: '편안함' },
                { id: 'quit', text: '말없이 그만둬요', result: '빨래가 쌓이고 가족이 서운해해요.', mood: '미안함', why: '맡은 일을 못 할 때는 먼저 말로 알려요.' },
                { id: 'rush', text: '밤늦게 몰래 다 해요', result: '잠이 모자라 시험 날 피곤해요.', mood: '걱정', why: '계획을 고칠 방법을 찾아봐요.' }] }, target: { choice: 'talk' }, difficulty: 0.15 },
              { prompt: '민지는 내일 비 소식을 늦게 봤어요. 옷차림 계획을 어떻게 할까요?', toolOptions: { mode: 'branch', who: '민지', situation: '전날 밤 옷을 챙겨 두었는데, 자기 전에 내일 비 소식을 봤어요.', choices: [
                { id: 'fix', text: '우산과 젖어도 되는 신발을 더 챙겨요', result: '비가 와도 발이 젖지 않아요.', mood: '편안함' },
                { id: 'same', text: '이미 챙겼으니 그대로 가요', result: '천 운동화가 젖어 하루 종일 발이 시려요.', mood: '속상함', why: '새로 알게 된 상황에 맞게 계획을 고칠 수 있어요.' },
                { id: 'stay', text: '비가 오니 학교에 가지 않아요', result: '수업을 놓쳐요.', mood: '걱정', why: '옷차림을 고치면 해결할 수 있는 일이에요.' }] }, target: { choice: 'fix' }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { revealAfterCheck: true } } },
                conclude: '상황이 바뀌면 계획도 고쳐요. 고치는 것도 스스로 이끄는 일이에요.' },
              { prompt: '진로 계획의 체험 행사가 취소됐어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '수아', situation: '5월 진로 축제에서 수의사 체험을 하려 했는데 행사가 취소됐어요.', feeling: '속상함', choices: [
                { id: 'other', text: '다른 체험이나 직업 영상을 찾아 계획을 바꿔요', result: '동물 보호 센터 견학으로 새 계획을 세워요.', mood: '뿌듯함' },
                { id: 'giveup', text: '수의사 꿈을 접어요', result: '좋아하던 꿈을 쉽게 놓쳐요.', mood: '슬픔', why: '한 번 막혀도 다른 길을 찾을 수 있어요.' },
                { id: 'blame', text: '행사를 취소한 사람을 탓해요', result: '마음만 상하고 할 일은 그대로예요.', mood: '화남', why: '내가 할 수 있는 다음 행동을 골라 봐요.' }] }, target: { choice: 'other' }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { revealAfterCheck: true } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"이 단원에서 내가 스스로 이끈 일 가운데 가장 뿌듯한 것은 무엇인가요?" 두세 명이 발표하게 한다. 자기 평가표에서 \'아직이에요\'에 표시한 항목은 다음 달 목표로 옮겨 적게 한다. 오늘 정한 가정일은 한 주 동안 실천하고 걸린 시간을 기록해, "다음 주 실과 시간을 시작할 때 짝과 기록을 견주어 볼 거예요."라고 말해 둔다.',
        exitTicket: [
          { type: 'tool', tool: 'kitchen', options: { mode: 'pick', basket: '혼자 맡을 수 있는 일', cards: ['신발장 정리', '화분 물 주기', '전기 콘센트 고치기', '높은 선반 혼자 닦기'] }, prompt: '6학년이 혼자 안전하게 맡을 수 있는 가정일만 골라 보세요.', target: { pick: ['신발장 정리', '화분 물 주기'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '스스로 이끄는 삶의 흐름으로 알맞은 것은 무엇인가요?', options: ['계획 → 실천 → 끝', '알기 → 계획 → 실천 → 돌아보고 고치기', '친구 따라 하기 → 실천'], answer: 1, difficulty: 0.15, explain: '진로·옷차림·가정일 모두 나와 상황을 알고, 계획하고, 실천하고, 돌아보며 고쳤어요.' },
          { type: 'short', prompt: '이번 주에 내가 더 맡을 가정일과 실천할 요일, 짐작한 시간을 쓰세요.' },
          { type: 'mood', prompt: '이 단원 공부는 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '스스로 이끄는 나 — 단원 돌아보기',
      items: [
        { type: 'table', prompt: '내가 더 맡을 가정일 실천표를 쓰세요. 한 날은 걸린 시간을 적어요.', columns: ['요일', '맡을 가정일', '짐작(분)', '실제(분)'], rows: 4 },
        { type: 'table', prompt: '단원 자기 평가: 알맞은 칸에 ○ 하세요.', columns: ['나는', '잘해요', '조금 해요', '아직이에요'], cells: [['흥미·적성·성격을 묻는 물음을 만들 수 있어요', '', '', ''], ['언제·무엇을·얼마나가 담긴 진로 계획을 세웠어요', '', '', ''], ['일정과 날씨에 맞게 옷차림을 계획하고 고쳤어요', '', '', ''], ['가정일을 기록하고 내 몫을 더 맡았어요', '', '', '']] },
        { type: 'choice', prompt: '6학년이 혼자 맡기에 알맞지 않은 일에 ○ 하세요.', options: ['빨래 개기', '사다리 올라 전등 갈기', '식탁 차리기'], answer: '사다리 올라 전등 갈기' },
        { type: 'short', prompt: '이 단원에서 내 삶을 스스로 이끈 경험 하나를 쓰고, 앞으로 이어 갈 다짐을 쓰세요.' },
      ],
      easy: {
        note: '알기 → 계획 → 실천 → 돌아보고 고치기. 진로·옷차림·가정일에서 무엇을 했는지 떠올려요.',
        items: [
          { type: 'table', prompt: '이번 주에 맡을 가정일을 쓰세요.', columns: ['요일', '맡을 가정일'], rows: 2 },
          { type: 'table', prompt: '자기 평가: 알맞은 칸에 ○ 하세요.', columns: ['나는', '잘해요', '아직이에요'], cells: [['진로 계획을 세웠어요', '', ''], ['옷차림을 스스로 골랐어요', '', ''], ['가정일을 맡았어요', '', '']] },
          { type: 'choice', prompt: '혼자 맡을 수 있는 일에 ○ 하세요.', options: ['빨래 개기', '가스레인지로 튀김하기'], answer: '빨래 개기' },
          { type: 'short', prompt: '이 단원에서 가장 뿌듯했던 일을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '고르기·나누기·잇기에서 맞게 놓으면 초록 테두리, 틀리면 까닭이 나와요.',
      base: '모두 놓은 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '혼자 맡을 일 고르기에 \'다리미로 교복 다리기\', 돌아보고 고치기 잇기에 \'남이 고쳐 줄 때까지 기다리기\'가 더 나와요. 민지·수아의 상황은 맞게 골라야 결과가 보여요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 자신이 하지 않은 일은 짧게 걸릴 것이라 여겨 계획을 너무 많이 잡는다 → 지난 시간 짐작·실제 기록으로 양을 정하게 한다. ② 가스 불·높은 곳·세제 섞기처럼 위험한 일을 혼자 맡겠다고 한다 → 안전 약속을 먼저 확인한다. ③ 계획이 어긋나면 말없이 그만둔다 → 가족과 의논해 고치는 것도 실천이라고 짚는다. 단원 자기 평가의 \'아직이에요\' 항목은 꾸중이 아니라 다음 목표로 다룬다.',
  }));

  PaperLessons.registerUnit({
    id: 'g6-prac-1-01', schema: 'edu-unit.v1', catalogUnit: U.catalog,
    grade: U.grade, subject: U.subject, unitTitle: U.unitTitle,
    flow: '1~4차시는 진로다: 둘레의 직업을 찾아 직업이 나와 사회에 하는 일을 나누고, 흥미·적성·성격을 묻는 물음으로 나를 알아본 뒤, 관심 직업 두 가지를 조사해 하는 일과 준비를 표로 정리하고 언제·무엇을·얼마나가 담긴 진로 계획서를 쓴다. 5~8차시는 옷이다: 옷의 기능을 보호·활동·표현으로 나누고, 운동장·과학실·행사장처럼 때와 장소에 맞는 옷차림을 고른 다음, 다음 날 일정에 맞춘 옷차림을 계획해 입어 보고 불편했던 점으로 계획을 고친다. 9~12차시는 가정일이다: 집안일을 끼니·옷·공간 갈래로 나누고 그 일이 멈추면 생기는 문제로 가치를 따진 뒤, 한 주 가정일 기록표와 그래프로 가족의 몫을 살펴 내가 더 맡을 일을 정해 실행한다. 세 묶음 모두 앞 차시에서 개념을 잡고 뒤 차시에서 내 생활에 옮기며, 마지막 차시에서 진로·옷·가정일을 \'스스로 이끄는 삶\'으로 묶어 자기 평가를 한다.',
    refs: {},
    lessons: L,
  });
})();
