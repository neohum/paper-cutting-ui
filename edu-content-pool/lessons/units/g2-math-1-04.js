/* 2학년 1학기 수학 4. 길이 재기 — 단원 파일(차시 11개 가운데 5차시는 기존 차시 g2-math-length).
 * 확인 필요: units-index 의 plan 제목은 1~4차시가 '양의 비교'(길이·무게·들이 직접 견주기), 5~8차시가 '센티미터와 미터 단위로 주변 물건 길이 재기'다.
 *   2학기 g2-math-2-03(m·길이의 합과 차)과 겹치지 않도록 이 단원은 cm·자로 재기·어림까지만 다루고 m 는 가르치지 않는다.
 *   기존 5차시는 "지난 시간에 1cm를 배웠어요"로 시작하는데 1~4차시는 아직 cm를 쓰지 않는다 — 기존 차시는 고치지 않으므로 8차시에서 1cm 칸 세기로 cm를 다시 묶는다.
 * 예문·이야기(클립, 리본, 그릇 모양이 다른 물병, 학급 어림 놀이 등)는 이 단원을 위해 직접 지은 것이다. 학생 이름 예시(민지·준호)는 가명이다.
 * 흐름: 비교하는 말과 끝 맞추기(1) → 클립으로 재어 견주기(2) → 줄 세우기(3) → 무게·들이 견주기(4) → [기존 5: 자로 재어 몇 cm]
 *      → 선 긋고 단위 붙여 쓰기(6) → 그은 선 다시 재어 고치기(7) → 알맞은 도구·단위로 교실 물건 재기(8) → 몸으로 어림하기(9) → 약 몇 cm 기록(10) → 어림과 잰 값 견주기(11).
 */
(function () {
  const UID = 'g2-math-1-04';
  const UNIT = 'g2-수학-1학기-4';
  const TITLE = '4. 길이 재기';
  const head = (n, standards) => ({
    id: `${UID}-${String(n).padStart(2, '0')}`, schema: 'edu-lesson.v1', catalog: { unit: UNIT, lesson: n },
    grade: 2, subject: '수학', unitTitle: TITLE, standards, minutes: 40, formats: ['chromebook', 'projector', 'print'],
  });
  const ILL = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const scene = (text, size) => ({ viewBox: [480, 270], layers: [
    { motif: 'sun', x: 412, y: 56, s: 0.8 }, { motif: 'cloud', x: 110, y: 50 }, { motif: 'hills', y: 206, colors: ['buttercup', 'mint', 'peach'] },
    { motif: 'house', x: 90, y: 220, s: 0.9 }, { motif: 'tree', x: 400, y: 218, color: 'mint' }, { motif: 'flower', x: 300, y: 240, color: 'lavender' },
    { motif: 'text', x: 240, y: 144, text, size: size || 22 },
  ] });
  const X = (d, x) => Object.assign({ difficulty: 0.15 }, d, x || {});
  // mindmap 나누기: map = { 칸: [카드…] }, trap = 어느 칸에도 넣지 않는 카드
  const sortQ = (prompt, topic, map, trap, x) => X({ prompt, toolOptions: { topic, slots: Object.keys(map), cards: [].concat(...Object.keys(map).map((k) => map[k]), trap || []) }, target: { sort: map } }, x);
  // mindmap 고르기
  const pickQ = (prompt, topic, basket, good, bad, x) => X({ prompt, toolOptions: { mode: 'pick', topic, basket, cards: good.concat(bad) }, target: { pick: good } }, x);
  // mindmap 잇기: pairs = [[칸 글, 카드], …]
  const matchQ = (prompt, topic, pairs, trap, x) => X({ prompt, toolOptions: { mode: 'match', topic, slots: pairs.map((p, i) => ({ id: `s${i + 1}`, label: p[0] })), cards: pairs.map((p) => p[1]).concat(trap || []) }, target: { match: Object.fromEntries(pairs.map((p, i) => [`s${i + 1}`, p[1]])) } }, x);
  // timeline 차례 놓기: cards = [[id, 글, 작은 글]…] 이 바른 차례
  const orderQ = (prompt, axis, cards, x) => X({ prompt, toolOptions: { axis, cards: cards.map((c) => ({ id: c[0], text: c[1], sub: c[2] })) }, target: { order: cards.map((c) => c[0]) } }, x);
  // measure 자 읽기·클립 세기: opt = { object:{name,len}, tiles? }
  const readQ = (prompt, opt, read, x) => X({ prompt, toolOptions: Object.assign({ mm: false }, opt), target: { read } }, x);
  // measure 묻기만(그림을 보고 고르기)
  const askQ = (prompt, opt, ask, pick, x) => X({ prompt, toolOptions: Object.assign({ mm: false, readOnly: true, ask }, opt), target: { pick } }, x);
  const FREE = (prompt) => ({ prompt, free: true });
  const ACT = (id, title, minutes, tool, teacher, task, levels, items) => ({ id, title, minutes, tool, teacher, task, levels, items });
  const LV_CARD = { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } };
  const LV_NONE = { easy: {}, base: {}, challenge: {} };
  const mood = { type: 'mood', prompt: '오늘 공부는 어땠나요?' };

  const lessons = [];

  // ───────────────────────────── 1차시 (intro · 양의 비교 개념) ─────────────────────────────
  lessons.push(Object.assign(head(1, ['[2수03-06]']), {
    title: '비교하는 말 나누고 끝을 맞추어 견주기',
    objective: '길다·짧다, 무겁다·가볍다, 많다·적다가 어떤 비교에 쓰이는 말인지 나누고, 두 물건의 길이는 한쪽 끝을 맞추어야 견줄 수 있음을 말할 수 있다.',
    illustration: { prompt: ILL('two paper pencils of different lengths lying side by side on a classroom desk with their left ends lined up at a mint paper strip, a rabbit pointing at the longer one'), scene: scene('한쪽 끝을 맞추어 견주어요') },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"짧은 연필과 긴 연필, 가벼운 가방과 무거운 가방, 물이 적은 컵과 많은 컵. 이 말들은 모두 무엇을 견주는 말일까요?" 두세 명이 말하게 한 뒤 시연 단추로 낱말 카드가 길이·무게 칸으로 나뉘는 모습을 보여 준다. "높다와 길다는 같은 말일까요?"처럼 헷갈리는 말은 칠판 한쪽에 적어 두었다가 활동 1에서 다시 고르게 한다.',
        student: '교실에서 길다, 무겁다, 많다고 말할 수 있는 물건을 하나씩 찾아 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '비교하는 말', slots: ['길이', '무게'], cards: ['길다', '무겁다'], shuffle: false }, sequence: [{ sort: { 길이: ['길다'], 무게: ['무겁다'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          ACT('a1', '활동 1. 비교하는 말 나누기', 13, 'mindmap',
            '"이 말은 길이를 견주는 말일까요, 무게일까요, 들이일까요?" 카드를 소리 내어 읽고 손으로 크기를 흉내 낸 뒤 놓게 한다. "탑이 높아요"를 무게 칸에 놓는 학생에게는 "아래에서 위까지가 얼마나 긴지 견주는 말이에요"라고 짚는다. 세 번째 문항에서는 "크다"처럼 여러 뜻이 되는 말이 문장 속에서 무엇을 견주는지 살피게 한다.',
            '말 카드를 읽고 길이·무게·들이 칸에 나누어요. 비교하는 말이 아닌 카드는 카드 칸에 남겨요.', LV_CARD, [
              sortQ('비교하는 말을 길이·무게·들이 칸에 나누어 보세요.', '비교하는 말', { 길이: ['길다', '짧다'], 무게: ['무겁다', '가볍다'], 들이: ['물이 많다', '물이 적다'] }, [],
                { hints: ['말이 무엇을 견주는지 떠올려요. 손으로 늘이거나, 들어 보거나, 컵에 따르는 모습을 그려 보세요.'] }),
              sortQ('문장 카드를 알맞은 칸에 나누어 보세요. 견주는 말이 아닌 카드는 남겨요.', '문장 속 비교', { 길이: ['연필이 지우개보다 길어요', '리본이 끈보다 짧아요'], 무게: ['가방이 필통보다 가벼워요', '벽돌이 스펀지보다 무거워요'], 들이: ['주전자에 물이 더 많아요'] }, ['꽃이 정말 예뻐요'], { difficulty: 0.2 }),
              sortQ('헷갈리는 문장도 나누어 보세요. 높이·크기도 아래에서 위까지의 길이를 견주는 말일 때가 있어요.', '헷갈리는 말', { 길이: ['탑이 높아요', '키가 커요', '줄이 길게 늘어났어요'], 무게: ['돌이 묵직해요'], 들이: ['컵이 가득 찼어요'] }, [],
                { difficulty: 0.25, predict: { q: '"탑이 높아요"는 무엇을 견주는 말일까요?', options: ['길이', '무게', '들이'], answer: 0 }, conclude: '높다·크다는 아래에서 위까지의 길이를 견줄 때 쓰기도 해요.' }),
            ]),
          ACT('a2', '활동 2. 길이를 바르게 견주는 방법 고르기', 14, 'mindmap',
            '"두 연필의 끝이 다른 자리에 있어요. 오른쪽 끝만 보고 더 길다고 해도 될까요?" 손바닥 두 개로 한쪽 끝을 맞추어 보게 한다. "눈으로 보니 이쪽이 더 길어요" 하고 고른 학생에게는 "한쪽 끝을 맞추면 남는 부분이 보이니 말이 틀렸는지 알 수 있어요"라고 이어 말한다. 세 번째 문항은 틀린 말만 골라야 하므로 문장을 끝까지 읽게 한다.',
            '길이를 바르게 견주는 방법만 골라 바구니에 넣어요. 마지막 문항은 틀린 말을 골라요.', LV_CARD, [
              pickQ('두 연필의 길이를 바르게 견주는 방법만 골라 보세요.', '연필 길이 견주기', '바른 방법', ['두 연필의 한쪽 끝을 맞추어 나란히 놓아요', '맞춘 끝의 반대쪽에서 더 나온 쪽이 더 길어요'], ['각자 놓은 자리에서 오른쪽 끝만 보고 골라요', '굵어 보이는 쪽이 더 길다고 해요'],
                { difficulty: 0.15, predict: { q: '두 연필을 서로 다른 자리에 놓고 오른쪽 끝만 보면 어느 쪽이 긴지 알 수 있을까요?', options: ['알 수 있어요', '알 수 없어요'], answer: 1 }, conclude: '한쪽 끝을 맞추어야 남는 부분으로 길이를 견줄 수 있어요.' }),
              pickQ('끈 두 개를 견주는 방법으로 알맞은 것을 골라 보세요.', '구부러진 끈', '바른 방법', ['두 끈을 곧게 펴서 한쪽 끝을 맞추어요', '더 길게 남는 끈이 더 긴 끈이에요'], ['구부러진 채로 그대로 겹쳐 봐요', '둘둘 말아 크기가 더 큰 쪽을 골라요'], { difficulty: 0.2 }),
              pickQ('길이를 틀리게 견준 친구의 말만 골라 보세요.', '친구들의 말', '틀린 말', ['끝을 맞추지 않았지만 위에 있으니 더 길어요', '짧은 쪽 끝이 더 앞에 나와 있으니 더 길어요'], ['끝을 맞추었더니 오른쪽이 더 나와서 더 길어요', '나란히 놓고 남는 부분을 견주었어요'], { difficulty: 0.25 }),
            ]),
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"두 막대의 길이를 견주려면 제일 먼저 무엇을 맞추나요?" 짝에게 손으로 보여 주며 말하게 한다. 출구 1번에서 "넓다"나 "길다"를 무게를 견주는 말로 고른 학생은 다음 시간(클립으로 재어 견주기) 도입에서 먼저 살핀다.',
        exitTicket: [
          { type: 'choice', prompt: '무게를 견주는 말은 어느 것일까요?', options: ['길다', '가볍다', '짧다'], answer: 1, difficulty: 0.1, explain: '가볍다·무겁다는 들어 보았을 때 힘이 얼마나 드는지 견주는 말이에요.' },
          { type: 'tool', tool: 'mindmap', options: { topic: '컵과 끈 이야기', slots: ['길이', '들이'], cards: ['끈이 길어요', '컵에 물이 가득해요', '리본이 짧아요', '병에 물이 적어요'] }, state: { at: {} }, prompt: '말 카드를 길이와 들이 칸에 나누어 보세요.', target: { sort: { 길이: ['끈이 길어요', '리본이 짧아요'], 들이: ['컵에 물이 가득해요', '병에 물이 적어요'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '두 막대의 길이를 견줄 때 먼저 할 일은 무엇인가요?', options: ['한쪽 끝을 맞추어 놓아요', '두 막대를 멀리 떨어뜨려 놓아요', '더 굵은 막대를 골라요'], answer: 0, difficulty: 0.1, explain: '한쪽 끝을 맞추어야 반대쪽에 남는 부분이 보여요.' },
          mood,
        ],
      },
    ],
    worksheet: {
      title: '비교하는 말과 끝 맞추기',
      items: [
        { type: 'table', prompt: '말을 읽고 길이·무게·들이 가운데 무엇을 견주는 말인지 쓰세요.', columns: ['말', '견주는 것'], cells: [['길다', ''], ['무겁다', ''], ['물이 많다', ''], ['짧다', '']], answer: '길이, 무게, 들이, 길이' },
        { type: 'choice', prompt: '두 막대를 바르게 견준 친구에 ○ 하세요.', options: ['오른쪽 끝만 보고 더 긴 것을 골랐어요.', '한쪽 끝을 맞추어 놓고 남는 부분을 보았어요.'], answer: '한쪽 끝을 맞추어 놓고 남는 부분을 보았어요.' },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '두 연필의 ______ 끝을 맞추고, 반대쪽에서 더 ______ 나온 쪽이 더 길어요.', answer: '한쪽, 많이' },
        { type: 'draw', prompt: '연필 두 자루를 왼쪽 끝을 맞추어 그리고, 더 긴 연필에 ○ 하세요.', answer: '왼쪽 끝이 같은 선 위에서 시작하고 오른쪽이 더 나온 연필에 ○' },
      ],
      easy: {
        note: '길다·짧다는 길이, 무겁다·가볍다는 무게, 많다·적다는 담긴 양(들이)을 견주는 말이에요.',
        items: [
          { type: 'table', prompt: '말을 보고 무엇을 견주는 말인지 쓰세요.', columns: ['말', '견주는 것'], cells: [['가볍다', ''], ['짧다', ''], ['물이 적다', '']], answer: '무게, 길이, 들이' },
          { type: 'choice', prompt: '길이를 견줄 때 먼저 맞출 것에 ○ 하세요.', options: ['한쪽 끝', '색깔'], answer: '한쪽 끝' },
          { type: 'draw', prompt: '길이가 다른 끈 두 개를 한쪽 끝을 맞추어 그려 보세요.' },
          { type: 'short', prompt: '내 필통에서 길다고 말할 수 있는 물건 하나를 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓은 카드에 초록 테두리가 생기고, 틀린 칸에 놓으면 까닭을 말하고 카드 칸으로 돌려보내요.',
      base: '카드를 모두 놓은 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '카드 순서가 섞여 나오고, 높다·크다처럼 뜻이 여러 가지인 말이 들어 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 높다·크다·길다를 서로 다른 것으로만 여긴다 → 아래에서 위까지, 또는 한 끝에서 다른 끝까지의 길이로 묶어 말하게 한다. ② 오른쪽 끝만 보고 길이를 판단한다 → 손바닥 두 개로 한쪽 끝을 맞추어 보여 주고 "남는 부분"이라는 말을 쓰게 한다. ③ 굵거나 커 보이는 쪽을 길다고 한다 → 길이는 굵기와 상관없음을 말한다. 무게·들이를 견주는 방법은 4차시에서 다룬다.',
  }));

  // ───────────────────────────── 2차시 (practice · 클립으로 재기) ─────────────────────────────
  lessons.push(Object.assign(head(2, ['[2수03-06]']), {
    title: '클립 몇 개인지 세어 어느 쪽이 더 긴지 알아보기',
    objective: '크기가 같은 클립을 빈틈없이 이어 붙여 물건의 길이를 재고, 클립의 수로 두 길이를 견줄 수 있다.',
    illustration: { prompt: ILL('a rabbit laying small silver paper clips end to end without gaps along a red crayon on a classroom desk, a bear counting the clips with a pointing paw'), scene: scene('클립이 몇 개 들어갈까요?') },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"어제는 끝을 맞추어 눈으로 견주었어요. 두 연필이 거의 똑같으면 어떻게 하면 좋을까요?" 몇 명의 생각을 들은 뒤 시연 단추로 클립이 연필 위에 하나씩 놓이는 모습을 보여 준다. "클립을 몇 개 놓았나요?"라고 묻고, 수로 말하면 누구든 같은 말을 할 수 있음을 짚는다.',
        student: '내 연필 위에 지우개나 클립을 하나씩 늘어놓아 보고 몇 개가 들어가는지 짝과 견주어 봐요.',
        demo: { tool: 'measure', options: { mode: 'ruler', mm: false, object: { name: '연필', len: 6 }, tiles: { name: '클립', len: 2 } }, sequence: [{ read: 3 }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          ACT('a1', '활동 1. 클립 세어 길이 말하기', 13, 'measure',
            '"클립과 클립 사이에 틈이 있어도 될까요?" 틈이 생기면 개수가 달라지는 것을 직접 이어 붙여 보게 한다. 끝이 어긋나 한 개를 더 세는 학생에게는 클립 하나하나의 가장자리를 손가락으로 짚으며 세게 한다. 마지막 문항에서는 "클립이 6개"처럼 수와 단위를 함께 쓰게 한다.',
            '물건 아래에 이어 붙인 클립이 몇 개인지 세어 칸에 써요.', LV_NONE, [
              readQ('크레파스 아래에 클립을 이어 붙였어요. 클립은 몇 개일까요?', { object: { name: '크레파스', len: 8 }, tiles: { name: '클립', len: 2 } }, 4,
                { reveal: 'after-check', predict: { q: '세기 전에 어림해 봐요. 클립이 몇 개쯤 들어갈까요?', options: ['2개쯤', '4개쯤', '9개쯤'], answer: 1 }, conclude: '클립을 빈틈없이 이어 붙인 수가 길이예요.', difficulty: 0.1 }),
              readQ('풀의 길이는 클립 몇 개만큼일까요?', { object: { name: '풀', len: 6 }, tiles: { name: '클립', len: 2 } }, 3, { difficulty: 0.1 }),
              readQ('연필의 길이는 클립 몇 개만큼일까요?', { object: { name: '연필', len: 12 }, tiles: { name: '클립', len: 2 } }, 6, { difficulty: 0.15 }),
              readQ('더 해 보기: 리본의 길이는 클립 몇 개만큼일까요?', { object: { name: '리본', len: 14 }, tiles: { name: '클립', len: 2 } }, 7, { extra: true, difficulty: 0.2 }),
            ]),
          ACT('a2', '활동 2. 클립 수로 어느 쪽이 더 긴지 견주기', 14, 'measure',
            '"연필은 클립 6개, 막대는 그림에서 세어 볼게요. 어느 쪽이 더 길까요?" 두 수 가운데 큰 쪽이 더 길다는 것을 손가락으로 6과 5를 펴 보이게 한다. 둘째 문항에서 "하나 더 긴 것 같아요"라고 하는 학생에게 "같아요"는 틀린 답이 아님을 말하고 수가 같은 까닭을 말하게 한다.',
            '그림에서 클립 수를 세고, 짝 물건의 클립 수와 견주어 어느 쪽이 더 긴지 골라요.', LV_NONE, [
              askQ('연필은 클립 6개 길이예요. 아래 막대와 견주어 더 긴 것을 골라요.', { object: { name: '막대', len: 10 }, tiles: { name: '클립', len: 2 } }, { q: '어느 것이 더 긴가요?', choices: ['연필', '막대', '길이가 같아요'] }, 0, { difficulty: 0.15 }),
              askQ('끈은 클립 6개 길이예요. 아래 리본과 견주어 보세요.', { object: { name: '리본', len: 12 }, tiles: { name: '클립', len: 2 } }, { q: '어느 것이 더 긴가요?', choices: ['끈', '리본', '길이가 같아요'] }, 2, { difficulty: 0.2, predict: { q: '클립 수가 같으면 두 길이는 어떨까요?', options: ['같아요', '리본이 더 길어요'], answer: 0 }, conclude: '같은 클립으로 재었을 때 수가 같으면 길이도 같아요.' }),
              askQ('공책은 클립 5개 길이예요. 아래 책과 견주어 더 긴 것을 골라요.', { object: { name: '책', len: 14 }, tiles: { name: '클립', len: 2 } }, { q: '어느 것이 더 긴가요?', choices: ['책', '공책', '길이가 같아요'] }, 0, { difficulty: 0.15 }),
            ]),
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"클립으로 재면 어떤 점이 좋았나요?" 수로 말해서 짝과 같은 말을 할 수 있었다는 대답을 끌어낸다. 출구 3번에서 클립 사이를 띄우는 것을 고른 학생은 다음 시간 줄 세우기에서 개수를 센 방법을 먼저 말하게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'measure', options: { mode: 'ruler', mm: false, object: { name: '붓', len: 10 }, tiles: { name: '클립', len: 2 } }, state: {}, prompt: '붓 아래에 클립을 이어 붙였어요. 클립은 몇 개일까요?', target: { read: 5 }, difficulty: 0.12 },
          { type: 'choice', prompt: '클립으로 재었더니 연필은 5개, 지우개는 3개예요. 더 긴 것은 무엇인가요?', options: ['연필', '지우개'], answer: 0, difficulty: 0.1, explain: '5는 3보다 크니까 클립이 더 많이 들어가는 연필이 더 길어요.' },
          { type: 'choice', prompt: '클립으로 길이를 잴 때 바르게 하는 방법은 무엇인가요?', options: ['클립 사이를 띄워 놓아요', '클립을 빈틈없이 이어 붙여요', '크기가 다른 클립을 섞어요'], answer: 1, difficulty: 0.12, explain: '틈이 있거나 크기가 다르면 개수가 달라져서 견줄 수 없어요.' },
          mood,
        ],
      },
    ],
    worksheet: {
      title: '클립으로 재어 견주기',
      items: [
        { type: 'table', prompt: '클립으로 잰 길이를 보고, 두 물건 가운데 더 긴 것의 이름을 쓰세요.', columns: ['비교', '더 긴 것'], cells: [['연필 클립 7개 · 지우개 클립 3개', ''], ['풀 클립 5개 · 크레파스 클립 8개', ''], ['끈 클립 6개 · 막대 클립 6개', '']], answer: '연필, 크레파스, 길이가 같아요' },
        { type: 'choice', prompt: '클립을 바르게 놓은 친구에 ○ 하세요.', options: ['클립 사이가 조금씩 떨어져 있어요.', '클립이 빈틈없이 이어져 있어요.'], answer: '클립이 빈틈없이 이어져 있어요.' },
        { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '리본은 클립 9개, 끈은 클립 7개예요. 더 긴 것은 ______이에요. 리본이 끈보다 클립 ___개 더 길어요.', answer: '리본, 2' },
        { type: 'draw', prompt: '클립 4개를 이어 붙인 모양을 네모 4개로 그려 보고, 그 아래에 클립 3개를 그려 어느 쪽이 더 긴지 ○ 하세요.', answer: '네모 4개가 이어진 줄에 ○' },
      ],
      easy: {
        note: '클립을 빈틈없이 이어 붙인 수를 세고, 수가 큰 쪽이 더 길어요.',
        items: [
          { type: 'table', prompt: '클립 수를 보고 더 긴 것에 ○ 하세요.', columns: ['물건', '클립 수'], cells: [['막대', '6개'], ['연필', '4개']], answer: '막대' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '클립 수가 5개인 것과 2개인 것 중 더 긴 것은 클립이 ______ 것이에요.', answer: '5개인' },
          { type: 'draw', prompt: '네모 3개를 이어서 클립 3개를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '그림에 클립이 이미 놓여 있어서 하나씩 짚으며 세어요. 개수는 확인을 누른 뒤 보여요.',
      base: '클립을 세어 칸에 쓰고, 두 길이를 견주어 고르기까지 스스로 해요.',
      challenge: '클립이 7개까지 이어진 긴 물건도 세고, 클립 수가 같은 경우를 가려내요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 클립 끝에서 끝이 아니라 중간을 짚어 하나 더 세거나 빼먹는다 → 클립 가장자리를 손가락으로 짚으며 센다. ② 클립 수가 같으면 길이가 다르다고 고른다 → 같은 클립으로 재었을 때의 수가 같으면 길이도 같다고 확인한다. ③ 크기가 다른 클립으로 잰 수를 견준다 → 단위의 크기가 같아야 수로 견줄 수 있음을 말한다(4차시 이후 cm로 이어진다).',
  }));

  // ───────────────────────────── 3차시 (core · 줄 세우기) ─────────────────────────────
  lessons.push(Object.assign(head(3, ['[2수03-06]']), {
    title: '긴 것부터 짧은 것까지 차례로 줄 세워 나타내기',
    objective: '여러 물건의 길이를 클립 수로 견주어 짧은 것부터 또는 긴 것부터 차례로 늘어놓고, 가장 긴 것과 가장 짧은 것을 말할 수 있다.',
    illustration: { prompt: ILL('five paper pencils of different lengths standing in a row like stairs on a desk, from the shortest to the longest, with a little bear measuring their heights'), scene: scene('짧은 것부터 줄을 서요') },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"필통에서 연필, 풀, 지우개를 꺼내 짧은 것부터 줄을 세워 볼까요?" 한 모둠이 줄 세운 모습을 보여 주고 "어떻게 이 순서가 맞다는 걸 알았나요?" 하고 묻는다. 시연 단추로 카드가 길이 순서로 놓이는 모습을 보여 주고, 클립 수가 줄 세우는 근거임을 짚는다.',
        student: '필통 속 물건 세 개를 꺼내 짧은 것부터 줄을 세우고, 그렇게 세운 까닭을 짝에게 말해 봐요.',
        demo: { tool: 'timeline', options: { axis: ['짧다', '길다'], cards: [{ id: 'g', text: '지우개', sub: '클립 2개' }, { id: 'p', text: '풀', sub: '클립 4개' }], shuffle: false }, sequence: [{ order: ['g', 'p'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          ACT('a1', '활동 1. 길이 순서대로 줄 세우기', 14, 'timeline',
            '"카드 아래 작은 글씨에 클립 수가 있어요. 수가 작으면 짧을까요, 길까요?" 수를 소리 내어 읽고 가장 작은 수부터 놓게 한다. 둘째 문항은 왼쪽이 긴 것이라서 순서가 거꾸로임을 "이번에는 어느 쪽부터 놓아야 하나요?"로 확인한다. 클립 수를 읽지 않고 이름 순서대로 놓는 학생이 있으면 작은 글씨를 먼저 읽게 한다.',
            '카드 아래 클립 수를 읽고, 띠의 왼쪽 끝 말에 맞게 차례대로 놓아요.', LV_CARD, [
              orderQ('짧은 것부터 차례로 놓아 보세요.', ['짧다', '길다'], [['g', '지우개', '클립 3개'], ['p', '풀', '클립 5개'], ['y', '연필', '클립 7개'], ['s', '가위', '클립 9개']], { difficulty: 0.12 }),
              orderQ('이번에는 긴 것부터 차례로 놓아 보세요. 왼쪽이 가장 길어요.', ['긴 것', '짧은 것'], [['r', '리본', '클립 11개'], ['b', '막대', '클립 8개'], ['k', '끈', '클립 5개'], ['t', '붓', '클립 4개']],
                { difficulty: 0.18, predict: { q: '왼쪽 끝이 ‘긴 것’이면 클립이 가장 적은 카드는 어디에 놓일까요?', options: ['가장 왼쪽', '가장 오른쪽'], answer: 1 }, conclude: '긴 것부터 놓으면 클립 수가 큰 카드가 왼쪽, 작은 카드가 오른쪽이에요.' }),
              orderQ('카드 다섯 장을 짧은 것부터 차례로 놓아 보세요.', ['짧다', '길다'], [['f', '풀', '클립 5개'], ['c', '필통', '클립 8개'], ['n', '공책', '클립 9개'], ['h', '책', '클립 12개'], ['z', '자', '클립 15개']], { difficulty: 0.25 }),
            ]),
          ACT('a2', '활동 2. 가장 긴 것과 가장 짧은 것 찾기', 13, 'mindmap',
            '"세 가지 물건 가운데 가장 긴 것은 어느 것일까요?" 클립 수가 가장 큰 카드를 먼저 손가락으로 짚게 한다. 한 칸에 두 카드를 놓으려는 학생에게 "가장 긴 것은 하나뿐이에요. 두 번째로 긴 것은 어디에 두나요?"라고 묻고 남는 카드는 칸에 놓지 않는다고 알려 준다.',
            '‘가장 긴 것’ 칸과 ‘가장 짧은 것’ 칸에 알맞은 카드를 하나씩 이어요. 가운데 길이의 카드는 남겨요.', LV_CARD, [
              matchQ('끈 세 개 가운데 가장 긴 것과 가장 짧은 것을 이어 보세요.', '끈 길이 견주기', [['가장 긴 것', '빨간 끈 · 클립 9개'], ['가장 짧은 것', '파란 끈 · 클립 4개']], ['노란 끈 · 클립 6개'], { difficulty: 0.15 }),
              matchQ('필통 속 물건 가운데 가장 긴 것과 가장 짧은 것을 이어 보세요.', '필통 속 물건', [['가장 긴 것', '자 · 클립 15개'], ['가장 짧은 것', '지우개 · 클립 3개']], ['연필 · 클립 8개', '풀 · 클립 5개'], { difficulty: 0.2 }),
              matchQ('모둠 친구들이 만든 종이 띠입니다. 가장 긴 띠와 가장 짧은 띠를 이어 보세요.', '종이 띠', [['가장 긴 것', '민지 띠 · 클립 10개'], ['가장 짧은 것', '준호 띠 · 클립 6개']], ['서아 띠 · 클립 7개', '지우 띠 · 클립 8개'], { difficulty: 0.25 }),
            ]),
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"물건이 많아져도 줄을 세울 수 있는 비결은 무엇이었나요?" 클립 수로 견주고 가장 작은 수부터 또는 큰 수부터 놓는다는 말을 이끌어 낸다. 출구 1번이 거꾸로 놓인 학생에게는 다음 시간 첫머리에 "왼쪽 끝은 짧은 쪽일까요, 긴 쪽일까요?"를 먼저 묻는다.',
        exitTicket: [
          { type: 'tool', tool: 'timeline', options: { axis: ['짧다', '길다'], cards: [{ id: 'a', text: '연필', sub: '클립 6개' }, { id: 'b', text: '지우개', sub: '클립 2개' }, { id: 'c', text: '자', sub: '클립 10개' }] }, state: { at: {} }, prompt: '짧은 것부터 차례로 놓아 보세요.', target: { order: ['b', 'a', 'c'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '클립으로 재었더니 풀은 4개, 공책은 9개, 가위는 7개예요. 가장 긴 것은 무엇인가요?', options: ['풀', '공책', '가위'], answer: 1, difficulty: 0.12, explain: '9가 가장 크니까 클립이 가장 많은 공책이 가장 길어요.' },
          { type: 'choice', prompt: '긴 것부터 줄을 세울 때 가장 먼저 놓는 것은 무엇인가요?', options: ['가장 긴 것', '가장 짧은 것', '가운데 길이'], answer: 0, difficulty: 0.1, explain: '긴 것부터 놓으니까 가장 긴 것이 제일 앞에 와요.' },
          mood,
        ],
      },
    ],
    worksheet: {
      title: '길이 순서대로 줄 세우기',
      items: [
        { type: 'table', prompt: '클립 수를 보고 짧은 것부터 1, 2, 3 번호를 쓰세요.', columns: ['물건', '클립 수', '순서'], cells: [['풀', '5개', ''], ['연필', '9개', ''], ['지우개', '3개', '']], answer: '2, 3, 1' },
        { type: 'choice', prompt: '가장 긴 끈에 ○ 하세요.', options: ['빨간 끈: 클립 7개', '파란 끈: 클립 11개', '노란 끈: 클립 9개'], answer: '파란 끈: 클립 11개' },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '클립이 가장 ______ 든 물건이 가장 길고, 가장 ______ 든 물건이 가장 짧아요.', answer: '많이, 적게' },
        { type: 'draw', prompt: '막대 세 개를 짧은 것부터 왼쪽부터 차례로 그리고, 가장 긴 막대에 ○ 하세요.', answer: '왼쪽 끝을 맞춘 짧은 막대부터 긴 막대 순서로 그리고 가장 긴 막대에 ○' },
      ],
      easy: {
        note: '클립 수가 작을수록 짧고, 클립 수가 클수록 길어요.',
        items: [
          { type: 'table', prompt: '짧은 것부터 1, 2 번호를 쓰세요.', columns: ['물건', '클립 수', '순서'], cells: [['붓', '7개', ''], ['풀', '4개', '']], answer: '2, 1' },
          { type: 'choice', prompt: '더 긴 것에 ○ 하세요.', options: ['클립 5개', '클립 8개'], answer: '클립 8개' },
          { type: 'draw', prompt: '길이가 다른 막대 두 개를 그리고 더 짧은 막대에 ○ 하세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 놓은 카드에 초록 테두리가 생기고, 틀린 자리에 놓으면 까닭을 말하고 돌려보내요. 카드가 4장 안팎이에요.',
      base: '카드를 모두 놓은 뒤 확인을 눌러 순서를 스스로 고쳐요.',
      challenge: '카드가 다섯 장으로 늘고, 순서가 거꾸로인 문항(긴 것부터)이 섞여 나와요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 왼쪽을 무조건 짧은 쪽으로 놓는다 → 띠 양 끝 말을 소리 내어 읽고 시작한다. ② 클립 수를 읽지 않고 카드 크기나 이름 순서대로 놓는다 → 작은 글씨의 수만 근거라고 말한다. ③ 가운데 길이의 물건도 가장 긴 칸에 넣으려 한다 → "가장"은 하나뿐임을 확인한다. 4차시에서 무게와 들이로 넓혀 같은 방법을 쓴다.',
  }));

  // ───────────────────────────── 4차시 (core · 무게·들이 견주기) ─────────────────────────────
  // measure 저울·눈금 그릇 보고 고르기
  const scaleQ = (prompt, left, right, pick, x) => X({ prompt, toolOptions: { mode: 'scale', readOnly: true, left, right, ask: { q: '어느 쪽이 더 무거운가요?', choices: [left[0].name, right[0].name, '같아요'] } }, target: { pick } }, x);
  const cupQ = (prompt, beakers, pick, x) => X({ prompt, toolOptions: { mode: 'volume', readOnly: true, beakers, step: 100, minor: 1, ask: { q: '물이 더 많이 들어 있는 그릇은 어느 것인가요?', choices: ['가', '나', '같아요'] } }, target: { pick } }, x);
  const pourQ = (prompt, beakers, fill, x) => X({ prompt, toolOptions: { mode: 'volume', pour: true, beakers, step: 100, minor: 2 }, target: { fill } }, x);
  lessons.push(Object.assign(head(4, ['[2수03-06]']), {
    title: '그릇 모양이 달라도 저울과 눈금으로 무게·들이 견주기',
    objective: '양팔저울이 내려간 쪽이 더 무거움을 알고, 모양이 다른 그릇에 든 물의 양은 높이가 아니라 눈금을 읽어 견줄 수 있다.',
    illustration: { prompt: ILL('a paper balance scale with a small orange on one side and a bigger apple on the other side tilting down, and two glass bottles of different shapes with water beside it'), scene: scene('높이만 보면 속아요') },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"가는 병과 넓은 병에 같은 물을 부으면 물 높이가 같을까요?" 두 가지 예상을 손으로 고르게 한 뒤 시연 단추로 양팔저울에 바둑돌이 올라가 수평이 되는 모습을 보여 준다. "저울은 눈으로 보는 것보다 정확하게 견줄 수 있어요. 물은 어떻게 견줄까요?" 하고 오늘 활동으로 연결한다.',
        student: '크기가 다른 컵 두 개에 물이 같은 양 들어 있을 수 있을지 예상해서 짝에게 말해 봐요.',
        demo: { tool: 'measure', options: { mode: 'scale', left: [{ name: '지우개', w: 4 }], unit: { name: '바둑돌', w: 1 } }, sequence: [{ balance: true }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          ACT('a1', '활동 1. 양팔저울로 무게 견주기', 9, 'measure',
            '"저울이 한쪽으로 기울었어요. 내려간 쪽과 올라간 쪽 가운데 어느 쪽이 더 무거울까요?" 저울 모양을 손바닥 두 개로 흉내 내게 한 뒤 고르게 한다. 올라간 쪽을 무겁다고 말하는 학생에게는 무거운 쪽 접시가 내려간다고 책상 위 저울 그림에 화살표를 그려 확인한다. 저울이 수평이면 "같아요"가 답이다.',
            '저울이 어느 쪽으로 기울었는지 보고, 더 무거운 쪽을 골라요. 마지막 문항은 바둑돌로 수평을 만들어요.', LV_NONE, [
              scaleQ('저울이 이렇게 기울었어요. 귤과 사과 중 더 무거운 것은 무엇일까요?', [{ name: '귤', w: 3 }], [{ name: '사과', w: 5 }], 1, { difficulty: 0.1 }),
              scaleQ('풀과 지우개를 올렸더니 저울대가 수평이에요. 어느 것이 더 무거울까요?', [{ name: '풀', w: 4 }], [{ name: '지우개', w: 4 }], 2,
                { difficulty: 0.2, predict: { q: '저울대가 수평이면 두 쪽의 무게는 어떨까요?', options: ['같아요', '왼쪽이 더 무거워요', '오른쪽이 더 무거워요'], answer: 0 }, conclude: '저울대가 수평이면 두 물건의 무게가 같아요.' }),
              scaleQ('필통과 공책을 저울에 올렸어요. 어느 쪽이 더 무거울까요?', [{ name: '필통', w: 9 }], [{ name: '공책', w: 6 }], 0, { difficulty: 0.15 }),
              X({ prompt: '가방과 무게가 같아지도록 오른쪽에 바둑돌을 올려 저울을 수평으로 만들어 보세요.', toolOptions: { mode: 'scale', left: [{ name: '가방', w: 6 }], unit: { name: '바둑돌', w: 1 } }, target: { balance: true }, reveal: 'after-check', difficulty: 0.2 }),
            ]),
          ACT('a2', '활동 2. 눈금을 읽어 물의 양 견주기', 9, 'measure',
            '"가 그릇은 가늘고 나 그릇은 넓어요. 물이 더 높은 쪽이 더 많을까요?" 예상을 고른 뒤 각 그릇의 눈금 수를 읽어 말하게 한다. "물이 높으니까 많아요"라고 말하는 학생에게는 "그릇이 가늘면 조금만 따라도 높이 올라가요. 눈금 숫자가 얼마인가요?"라고 묻는다. 셋째 문항에서는 수가 같은 까닭을 말하게 한다.',
            '두 그릇의 눈금을 읽고 물이 더 많은 그릇을 골라요.', LV_NONE, [
              cupQ('가는 그릇과 넓은 그릇이에요. 눈금을 읽고 물이 더 많은 그릇을 골라 보세요.', [{ v: 300, max: 600, w: 0.7, label: '가' }, { v: 400, max: 600, w: 1.6, label: '나' }], 1,
                { difficulty: 0.15, predict: { q: '물 높이가 더 높은 가 그릇에 물이 더 많이 들어 있을까요?', options: ['네, 더 많아요', '아니요, 눈금을 읽어 봐야 해요'], answer: 1 }, conclude: '그릇 모양이 다르면 높이만 보지 말고 눈금을 읽어요.' }),
              cupQ('이번에는 가 그릇이 넓어요. 눈금을 읽고 더 많은 그릇을 골라 보세요.', [{ v: 500, max: 600, w: 1.5, label: '가' }, { v: 400, max: 600, w: 0.7, label: '나' }], 0, { difficulty: 0.2 }),
              cupQ('물 높이는 달라 보여요. 눈금을 읽고 물의 양을 견주어 보세요.', [{ v: 300, max: 600, w: 1.2, label: '가' }, { v: 300, max: 600, w: 0.6, label: '나' }], 2, { difficulty: 0.25 }),
            ]),
          ACT('a3', '활동 3. 같은 양이 되도록 옮겨 담기', 9, 'measure',
            '"나 그릇의 물을 가 그릇에 옮겨 담았더니 모양이 달라졌어요. 양도 달라졌을까요?" 물을 붓거나 덜면서 같은 눈금에 맞추게 한다. 높이를 나 그릇과 맞추려는 학생에게는 가 그릇의 눈금 숫자를 읽게 한다. 눈금이 한 칸에 100인지 50인지 먼저 확인한 뒤 고치게 한다.',
            '나 그릇의 물과 같은 양이 되도록 가 그릇에 물을 부어요.', LV_NONE, [
              pourQ('나 그릇에 물이 300 들어 있어요. 가 그릇에도 같은 양이 되도록 부어 보세요.', [{ v: 0, max: 600, w: 0.7, label: '가' }, { v: 300, max: 600, w: 1.4, label: '나' }], 300, { reveal: 'after-check', difficulty: 0.15 }),
              pourQ('나 그릇에 물이 500 들어 있어요. 가 그릇에도 같은 양이 되도록 부어 보세요.', [{ v: 0, max: 600, w: 0.8, label: '가' }, { v: 500, max: 600, w: 1.5, label: '나' }], 500, { difficulty: 0.2 }),
              pourQ('나 그릇에 물이 200 들어 있어요. 가 그릇에도 같은 양이 되도록 부어 보세요.', [{ v: 0, max: 600, w: 1.5, label: '가' }, { v: 200, max: 600, w: 0.6, label: '나' }], 200, { difficulty: 0.2 }),
            ]),
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"무게와 물의 양은 눈으로만 보면 어떤 일이 생겼나요?" 높이나 크기에 속았던 장면을 말하게 하고, 저울의 기울기와 눈금 숫자가 근거라는 말을 이끌어 낸다. 출구 1번에서 올라간 쪽을 고른 학생은 다음 시간 도입에서 양팔저울 그림으로 다시 짚는다.',
        exitTicket: [
          { type: 'choice', prompt: '양팔저울에서 왼쪽 접시가 아래로 내려갔어요. 어느 쪽이 더 무거울까요?', options: ['왼쪽', '오른쪽', '같아요'], answer: 0, difficulty: 0.12, explain: '무거운 쪽 접시가 아래로 내려가요.' },
          { type: 'tool', tool: 'measure', options: { mode: 'volume', readOnly: true, beakers: [{ v: 200, max: 600, w: 1.4, label: '가' }, { v: 300, max: 600, w: 0.6, label: '나' }], step: 100, minor: 1, ask: { q: '물이 더 많이 들어 있는 그릇은 어느 것인가요?', choices: ['가', '나', '같아요'] } }, state: {}, prompt: '눈금을 읽고 물이 더 많이 들어 있는 그릇을 고르세요.', target: { pick: 1 }, difficulty: 0.2 },
          { type: 'choice', prompt: '모양이 다른 두 그릇에 든 물의 양을 견주는 가장 좋은 방법은 무엇인가요?', options: ['물이 더 높은 그릇을 골라요', '눈금을 읽어서 견주어요', '더 넓은 그릇을 골라요'], answer: 1, difficulty: 0.15, explain: '높이와 넓이는 그릇마다 달라서, 눈금을 읽어야 같은 기준으로 견줄 수 있어요.' },
          mood,
        ],
      },
    ],
    worksheet: {
      title: '무게와 들이 견주기',
      items: [
        { type: 'choice', prompt: '양팔저울이 오른쪽으로 기울었어요. 더 무거운 쪽에 ○ 하세요.', options: ['왼쪽 접시', '오른쪽 접시', '같아요'], answer: '오른쪽 접시' },
        { type: 'table', prompt: '눈금을 읽어 물이 더 많은 그릇의 이름을 쓰세요.', columns: ['가 그릇의 눈금', '나 그릇의 눈금', '더 많은 그릇'], cells: [['400', '300', ''], ['200', '500', ''], ['300', '300', '']], answer: '가, 나, 같아요' },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '그릇의 모양이 달라도 물의 양은 ______을 읽어서 견주어요. 저울에서는 ______ 접시 쪽이 더 무거워요.', answer: '눈금, 내려간' },
        { type: 'short', prompt: '물 높이만 보고 물이 더 많다고 말하면 안 되는 까닭을 써 보세요.', answer: '예) 그릇이 가늘면 적은 물도 높이 올라와서 눈금을 읽어야 해요.' },
      ],
      easy: {
        note: '저울은 무거운 쪽이 내려가요. 물은 높이가 아니라 눈금 숫자로 견주어요.',
        items: [
          { type: 'choice', prompt: '더 무거운 쪽에 ○ 하세요.', options: ['올라간 접시', '내려간 접시'], answer: '내려간 접시' },
          { type: 'table', prompt: '눈금 숫자를 보고 더 많은 그릇을 쓰세요.', columns: ['가', '나', '더 많은 그릇'], cells: [['200', '100', ''], ['300', '300', '']], answer: '가, 같아요' },
          { type: 'short', prompt: '무게를 견줄 때 쓰는 도구 이름을 쓰세요.', answer: '저울' },
        ],
      },
    },
    differentiation: {
      easy: '문항마다 저울과 그릇 눈금이 크게 보이고, 확인 전에는 값이 가려져요. 붓는 단추 한 번에 50씩 올라가요.',
      base: '눈금을 읽고 물이 많은 그릇을 고르고, 같은 양으로 부어 확인해요.',
      challenge: '그릇의 폭 차이가 더 커서 물 높이가 눈금과 정반대로 보이는 문항을 풀어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 저울에서 올라간 쪽이 무겁다고 말한다 → 무거운 쪽 접시가 내려간다고 말로 반복하게 한다. ② 물 높이가 높으면 더 많다고 말한다 → 가는 그릇과 넓은 그릇에 같은 양을 붓는 시연을 보여 주고 눈금 숫자를 읽게 한다. ③ 눈금 한 칸의 크기를 놓친다 → 큰 눈금 사이 작은 칸 수를 먼저 센다. 옮겨 담는 활동에서는 실제 물병 두 개를 짝 활동으로 해 보게 한다.',
  }));

  // ───────────────────────────── 6차시 (core · 선 긋고 단위 붙여 쓰기) ─────────────────────────────
  const lineQ = (prompt, len, max, x) => X({ prompt, toolOptions: { mm: false, make: true, max }, target: { make: len } }, x);
  const recordQ = (prompt, name, len, choices, pick, x) => askQ(prompt, { max: 12, object: { name, len } }, { q: '길이를 바르게 쓴 것을 고르세요.', choices }, pick, x);
  lessons.push(Object.assign(head(6, ['[2수03-10]']), {
    title: '주어진 길이만큼 선을 긋고 단위 붙여 쓰기',
    objective: '자를 이용해 6cm, 9cm 같은 주어진 길이만큼 선을 긋고, 잰 길이를 수와 단위(cm)를 함께 써서 기록할 수 있다.',
    illustration: { prompt: ILL('a little bear drawing a straight pencil line along a paper ruler with plain tick marks starting exactly at the first tick, a notebook beside it with a neat number and a small unit written, no readable letters'), scene: scene('선을 긋고 cm를 써요') },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"7cm 선을 그어 보세요. 그런데 칠판에 7이라고만 썼어요. 7일까요, 7cm일까요?" 7만 쓴 기록을 보여 주고 무엇을 센 건지 알 수 없다는 점을 이야기한다. 시연 단추로 띠가 5cm로 늘어나는 모습을 보여 준다. "수 옆에 무엇을 붙여야 길이라는 걸 알 수 있을까요?"',
        student: '지난 시간에 잰 길이를 공책에 어떻게 썼는지 짝에게 보여 주고, 빠진 것이 없는지 살펴봐요.',
        demo: { tool: 'measure', options: { mode: 'ruler', mm: false, make: true, max: 12 }, sequence: [{ make: 5 }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          ACT('a1', '활동 1. 자에 맞추어 선 긋기', 14, 'measure',
            '"선을 긋기 시작하는 곳은 눈금 몇 번일까요?" 띠의 왼쪽 끝이 0에 있는 것을 먼저 확인하고 오른쪽 끝을 눈금에 맞추게 한다. 눈금 선을 세어 한 칸 더 길게 만드는 학생에게는 선과 선 사이의 칸을 세게 한다. 확인 뒤에는 "6cm"처럼 수와 단위를 함께 말하게 한다.',
            '띠의 끝을 끌거나 방향키로 움직여 주어진 길이만큼 선을 만들어요.', LV_NONE, [
              lineQ('길이가 6cm인 선을 만들어 보세요. 눈금 한 칸이 1cm예요.', 6, 12, { difficulty: 0.1 }),
              lineQ('길이가 9cm인 선을 만들어 보세요.', 9, 12, { reveal: 'after-check', predict: { q: '9cm 선의 끝은 어느 눈금에 닿아야 할까요?', options: ['0에서 시작해 9', '1에서 시작해 9', '0에서 시작해 10'], answer: 0 }, conclude: '0에서 시작해 9칸을 가면 9cm예요.', difficulty: 0.15 }),
              lineQ('길이가 4cm인 선을 만들어 보세요.', 4, 12, { difficulty: 0.1 }),
              lineQ('더 해 보기: 길이가 8cm인 선을 만들어 보세요.', 8, 12, { extra: true, reveal: 'after-check', difficulty: 0.2 }),
            ]),
          ACT('a2', '활동 2. 수와 단위를 함께 써서 기록하기', 13, 'measure',
            '"자를 대어 잰 길이를 공책에 쓸 때 수만 쓰면 어떻게 될까요?" 수만 쓴 보기가 무엇을 센 건지 모른다는 점을 짚는다. 숫자 8과 cm를 띄어 쓰거나 붙여 쓰는 것은 모두 괜찮다고 알려 준다. "8개"를 고르는 학생에게는 클립을 센 것과 길이를 잰 것의 차이를 물어 단위가 cm여야 함을 짚어 준다.',
            '그림의 길이를 읽고, 수와 단위를 함께 쓴 것을 골라요.', LV_NONE, [
              recordQ('크레파스의 길이를 바르게 기록한 것을 골라 보세요.', '크레파스', 8, ['8', '8cm', '8개'], 1,
                { difficulty: 0.1, predict: { q: '길이를 쓸 때 수 뒤에 무엇을 붙일까요?', options: ['cm', '개', '번'], answer: 0 }, conclude: '길이는 수와 함께 cm 같은 단위를 써요.' }),
              recordQ('지우개의 길이를 바르게 기록한 것을 골라 보세요.', '지우개', 5, ['5', '5cm', '5번'], 1, { difficulty: 0.1 }),
              recordQ('리본의 길이를 바르게 기록한 것을 골라 보세요.', '리본', 11, ['11cm', '11', '11개'], 0, { difficulty: 0.15 }),
            ]),
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"길이를 쓸 때 꼭 함께 쓰는 두 가지는 무엇이었나요?" 수와 단위라는 말을 하게 하고, 수만 쓴 기록과 비교한다. 출구 3번에서 단위 없이 쓴 보기를 고른 학생은 다음 시간 첫머리에 "이 수가 무엇을 센 걸까요?"를 먼저 묻는다.',
        exitTicket: [
          { type: 'tool', tool: 'measure', options: { mm: false, make: true, max: 12 }, state: {}, prompt: '길이가 11cm인 선을 만들어 보세요.', target: { make: 11 }, difficulty: 0.15 },
          { type: 'choice', prompt: '연필의 길이를 바르게 쓴 것은 무엇인가요?', options: ['12', '12cm', '12개'], answer: 1, difficulty: 0.12, explain: '길이를 쓸 때는 수 뒤에 cm 같은 단위를 함께 써요.' },
          { type: 'choice', prompt: '자로 선을 그을 때 선을 시작하는 곳은 어디일까요?', options: ['자의 눈금 0', '자의 눈금 5', '아무 곳이나 괜찮아요'], answer: 0, difficulty: 0.12, explain: '0에서 시작해야 끝 눈금의 수가 길이가 돼요.' },
          mood,
        ],
      },
    ],
    worksheet: {
      title: '선 긋고 길이 쓰기',
      items: [
        { type: 'figure', wide: true, prompt: '자로 잰 길이를 수와 단위를 함께 써서 쓰세요.', tool: 'measure', options: { mode: 'ruler', max: 10, mm: false }, figures: [
          { options: { object: { name: '풀', len: 6 } }, caption: '풀: ______' }, { options: { object: { name: '연필', len: 9 } }, caption: '연필: ______' }], answer: '6cm, 9cm' },
        { type: 'draw', prompt: '자를 대고 길이가 7cm인 선을 그어 보세요. 선의 이름과 길이를 선 아래에 쓰세요.', answer: '0에서 시작해 7까지 그은 선, "7cm" 표기' },
        { type: 'choice', prompt: '길이를 바르게 쓴 친구에 ○ 하세요.', options: ['지우개는 5예요.', '지우개는 5cm예요.', '지우개는 5개예요.'], answer: '지우개는 5cm예요.' },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '선을 그을 때는 자의 눈금 ___에서 시작해 길이만큼 가고, 쓸 때는 수 뒤에 ___를 써요.', answer: '0, cm' },
      ],
      easy: {
        note: '자의 0에서 시작해 끝 눈금까지 그으면, 끝 눈금의 수가 길이예요. 수 뒤에 cm를 꼭 써요.',
        items: [
          { type: 'draw', prompt: '자를 대고 0에서 시작해 길이가 5cm인 선을 그어 보세요.' },
          { type: 'choice', prompt: '바르게 쓴 길이에 ○ 하세요.', options: ['8', '8cm'], answer: '8cm' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '길이를 쓸 때는 수 뒤에 ___를 써요.', answer: 'cm' },
        ],
      },
    },
    differentiation: {
      easy: '띠를 만들 때 지금 띠의 길이가 화면에 바로 보여요. 길이를 읽지 않고 눈금만 맞추어도 돼요.',
      base: '띠 길이 표시가 확인을 누른 뒤에만 보여서 눈금을 직접 읽으며 맞춰요.',
      challenge: '자가 12cm까지 이어져 눈금 세기가 길어지고, 끝 눈금을 읽어 쓰는 문항이 함께 나와요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 눈금 선을 세어 하나 더 긴 선을 긋는다 → 선과 선 사이 한 칸이 1cm임을 손가락으로 센다. ② 선을 0이 아닌 곳에서 시작해 끝 눈금만 읽는다 → 5차시(기존 차시)에서 배운 0 맞추기를 다시 떠올리게 한다. ③ 단위를 빼고 수만 쓰거나 cm를 개·번과 섞는다 → 클립 수와 길이의 단위가 다름을 짚는다. 연필로 자를 따라 그을 때는 자가 움직이지 않게 반대 손으로 잡게 한다.',
  }));

  // ───────────────────────────── 7차시 (practice · 그은 선 다시 재어 고치기) ─────────────────────────────
  const fixQ = (prompt, name, len, pick, x) => askQ(prompt, { max: 15, object: { name, len } }, { q: '어떻게 하면 좋을까요?', choices: ['1cm 더 늘려요', '1cm 줄여요', '그대로 둬요'] }, pick, x);
  lessons.push(Object.assign(head(7, ['[2수03-10]']), {
    title: '그은 선을 다시 재어 맞는지 확인하고 고치기',
    objective: '목표 길이만큼 그은 선을 자로 다시 재어 맞는지 확인하고, 길면 줄이고 짧으면 늘려 고칠 수 있다.',
    illustration: { prompt: ILL('a rabbit checking a pencil line against a paper ruler and trimming a paper strip with a small eraser to make it match the line, with plain tick marks and no readable letters'), scene: scene('다시 재어 보고 고쳐요') },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"준호가 10cm 선을 그었다는데 맞는지 어떻게 알 수 있을까요?" 다시 자로 재어 보는 방법을 이야기하게 한 뒤, 시연 단추로 띠가 10cm에 맞추어지는 모습을 보여 준다. "다 그었으면 끝이 아니라 한 번 더 재어 봐요."라고 말하고, 오늘은 선을 긋고 고치는 시간임을 알린다.',
        student: '내가 그은 선을 자로 한 번 더 재어 보면 좋은 점이 무엇인지 짝에게 말해 봐요.',
        demo: { tool: 'measure', options: { mode: 'ruler', mm: false, make: true, max: 15 }, sequence: [{ make: 10 }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          ACT('a1', '활동 1. 목표 길이만큼 선 긋기', 9, 'measure',
            '"선 끝이 정확히 눈금 위에 있는지 눈을 가까이 대고 봐요." 눈금과 눈금 사이에서 멈춘 띠는 다시 눈금으로 옮기게 한다. 끝을 한 칸 더 가서 잡는 학생에게는 0에서 몇 칸을 왔는지 손가락으로 세어 보게 한다.',
            '목표 길이에 맞게 띠 끝을 움직여 선을 만들어요.', LV_NONE, [
              lineQ('길이가 5cm인 선을 만들어 보세요.', 5, 15, { difficulty: 0.1 }),
              lineQ('길이가 7cm인 선을 만들어 보세요.', 7, 15, { reveal: 'after-check', difficulty: 0.15 }),
              lineQ('길이가 10cm인 선을 만들어 보세요.', 10, 15, { difficulty: 0.15 }),
              lineQ('더 해 보기: 길이가 12cm인 선을 만들어 보세요.', 12, 15, { extra: true, reveal: 'after-check', difficulty: 0.2 }),
            ]),
          ACT('a2', '활동 2. 재어 보고 어떻게 고칠지 정하기', 9, 'measure',
            '"준호는 7cm 선을 그으려고 했는데 자로 재어 보니 6cm였어요. 어떻게 할까요?" 목표와 잰 길이를 손가락으로 6과 7을 펴 견주게 한다. 같다고 고르는 학생에게 자의 눈금에서 선 끝이 어디에 닿았는지 다시 짚게 한다. 셋째 문항은 이미 맞으므로 그대로 두는 것도 답임을 말한다.',
            '자로 잰 길이와 목표 길이를 견주어 선을 늘릴지, 줄일지, 그대로 둘지 골라요.', LV_NONE, [
              fixQ('준호는 7cm 선을 그으려고 했어요. 그은 선을 자로 재어 보고 어떻게 할지 골라요.', '준호의 선', 6, 0, { difficulty: 0.12, predict: { q: '재어 보니 목표보다 짧아요. 어떻게 하면 될까요?', options: ['늘려요', '줄여요', '그대로 둬요'], answer: 0 }, conclude: '목표보다 짧으면 늘리고, 길면 줄여요.' }),
              fixQ('민지는 9cm 선을 그으려고 했어요. 그은 선을 자로 재어 보고 어떻게 할지 골라요.', '민지의 선', 10, 1, { difficulty: 0.15 }),
              fixQ('서아는 8cm 선을 그으려고 했어요. 그은 선을 자로 재어 보고 어떻게 할지 골라요.', '서아의 선', 8, 2, { difficulty: 0.15 }),
            ]),
          ACT('a3', '활동 3. 단위를 붙였는지 살피기', 9, 'mindmap',
            '"길이를 쓸 때 수 뒤에 cm가 있나요, 없나요?" 카드를 읽으며 단위가 붙은 것과 빠진 것을 가르게 한다. 숫자만 쓴 카드를 단위가 붙은 칸에 놓는 학생에게는 "이 수가 무엇을 센 건지 알 수 있나요?"라고 묻는다. 12처럼 숫자 하나만 있는 카드는 단위를 빠뜨린 것임을 말해 준다.',
            '길이를 쓴 카드를 읽고 단위를 붙였는지 빠졌는지에 따라 나누어요.', LV_CARD, [
              sortQ('길이 기록을 단위가 붙은 것과 빠진 것으로 나누어 보세요.', '길이 기록', { '단위를 붙였어요': ['5cm', '8cm', '10cm'], '단위가 빠졌어요': ['12', '3', '7'] }, [], { difficulty: 0.1 }),
              sortQ('물건 이름과 함께 쓴 기록도 나누어 보세요.', '물건 길이 기록', { '단위를 붙였어요': ['연필 14cm', '풀 6cm'], '단위가 빠졌어요': ['지우개 4', '가위 9'] }, [], { difficulty: 0.15 }),
              sortQ('선의 이름이 붙은 기록을 나누어 보세요. 길이가 아닌 카드는 남겨요.', '선의 길이', { '단위를 붙였어요': ['선 가: 7cm', '선 다: 11cm'], '단위가 빠졌어요': ['선 나: 7', '선 라: 2'] }, ['선 마: 곧은 선'], { difficulty: 0.2 }),
            ]),
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"다 그은 뒤에 왜 한 번 더 재어 보았나요?" 틀렸을 때 고칠 수 있다는 말을 끌어낸다. 출구 1번에서 늘리는 것과 줄이는 것을 바꾼 학생은 다음 시간 첫머리에 목표와 잰 길이 가운데 어느 쪽이 더 큰지를 먼저 묻는다.',
        exitTicket: [
          { type: 'choice', prompt: '8cm 선을 그으려고 했는데 재어 보니 9cm였어요. 어떻게 해야 할까요?', options: ['1cm 줄여요', '1cm 늘려요', '그대로 둬요'], answer: 0, difficulty: 0.12, explain: '목표보다 길면 목표 길이만큼 줄여서 고쳐요.' },
          { type: 'tool', tool: 'measure', options: { mm: false, make: true, max: 15 }, state: {}, prompt: '길이가 6cm인 선을 만들어 보세요.', target: { make: 6 }, difficulty: 0.15 },
          { type: 'choice', prompt: '길이를 바르게 쓴 것은 무엇인가요?', options: ['선 가: 13', '선 가: 13cm', '선 가: cm'], answer: 1, difficulty: 0.12, explain: '길이는 수와 단위를 함께 써서 13cm라고 써요.' },
          mood,
        ],
      },
    ],
    worksheet: {
      title: '그은 선 확인하고 고치기',
      items: [
        { type: 'draw', prompt: '자를 대고 길이가 6cm인 선을 긋고, 다시 재어 6cm가 맞는지 ○ 하세요.', answer: '0에서 시작해 6까지 그은 선' },
        { type: 'table', prompt: '목표와 잰 길이를 비교해 알맞은 말에 ○ 하세요.', columns: ['목표', '잰 길이', '고치기'], cells: [['5cm', '4cm', '늘려요 / 줄여요 / 그대로'], ['8cm', '8cm', '늘려요 / 줄여요 / 그대로'], ['10cm', '11cm', '늘려요 / 줄여요 / 그대로']], answer: '늘려요, 그대로, 줄여요' },
        { type: 'choice', prompt: '길이를 바르게 쓴 친구에 ○ 하세요.', options: ['공책은 20이에요.', '공책은 20cm예요.'], answer: '공책은 20cm예요.' },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '목표보다 짧으면 선을 ______ , 목표보다 길면 선을 ______.', answer: '늘려요, 줄여요' },
      ],
      easy: {
        note: '선을 그은 뒤에는 한 번 더 재어 보아요. 짧으면 늘리고 길면 줄여요.',
        items: [
          { type: 'draw', prompt: '자를 대고 0에서 시작해 4cm 선을 그어 보세요.' },
          { type: 'table', prompt: '알맞은 말에 ○ 하세요.', columns: ['목표', '잰 길이', '고치기'], cells: [['6cm', '5cm', '늘려요 / 줄여요'], ['3cm', '4cm', '늘려요 / 줄여요']], answer: '늘려요, 줄여요' },
          { type: 'choice', prompt: '바르게 쓴 것에 ○ 하세요.', options: ['7', '7cm'], answer: '7cm' },
        ],
      },
    },
    differentiation: {
      easy: '띠 길이가 화면에 바로 보이고, 비교 문항의 눈금이 크게 보여요.',
      base: '띠 길이 표시가 확인 뒤에만 보이고, 자로 잰 길이를 스스로 읽어 고쳐요.',
      challenge: '12cm처럼 긴 선도 만들고, 이미 맞는 경우도 가려내요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 짧은지 긴지를 거꾸로 말한다(목표보다 길다고 늘린다) → 목표와 잰 길이를 손가락으로 펴 견주게 한다. ② 이미 맞는데도 고쳐야 한다고 느낀다 → "그대로 둬요"도 정답임을 보이는 문항을 반드시 풀게 한다. ③ 단위를 빠뜨린다 → 활동 3에서 카드를 소리 내어 읽으며 단위가 붙었는지 확인한다.',
  }));

  // ───────────────────────────── 8차시 (core · 교실 물건 재기) ─────────────────────────────
  lessons.push(Object.assign(head(8, ['[2수03-10]']), {
    title: '교실 물건을 자로 재어 cm로 쓰고 1cm 칸으로 확인하기',
    objective: '교실 물건의 길이를 자로 재어 몇 cm로 쓰고, 1cm 칸이 몇 개인지 세어 길이를 확인하며 어떻게 쟀는지 말할 수 있다.',
    illustration: { prompt: ILL('two children measuring a glue stick, a key and a pair of scissors on a classroom desk with a long paper ruler, small paper squares marking each centimeter, no readable letters'), scene: scene('교실 물건 길이를 재요') },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"풀의 길이가 궁금해요. 클립으로 재도 되고 자로 재도 돼요. 어느 쪽이 모두가 같은 값을 말하게 될까요?" 자로 재면 누구나 같은 수가 나온다는 점을 짚는다. 시연 단추로 풀 아래에 1cm 칸이 하나씩 놓이는 모습을 보여 주고 칸 수가 cm 수임을 말한다.',
        student: '내 필통의 물건 중 자로 재고 싶은 물건을 하나 골라 어림한 길이를 짝에게 말해 봐요.',
        demo: { tool: 'measure', options: { mode: 'ruler', mm: false, object: { name: '풀', len: 9 }, tiles: { name: '1cm', len: 1 } }, sequence: [{ read: 9 }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          ACT('a1', '활동 1. 교실 물건을 자로 재어 쓰기', 14, 'measure',
            '"왼쪽 끝은 자의 어디에 맞추었나요?" 눈금 0에 맞춘 것을 확인한 뒤 끝 눈금을 읽게 한다. 예상을 먼저 고른 뒤 재게 해서 어림과 잰 값의 차이를 느끼게 한다. 열쇠처럼 작은 물건에서 눈금 선을 세어 하나 더 읽는 학생에게는 칸을 세게 한다.',
            '물건의 왼쪽 끝을 0에 맞추고, 끝 눈금을 읽어 몇 cm인지 써요.', LV_NONE, [
              readQ('풀의 길이는 몇 cm인가요?', { max: 15, object: { name: '풀', len: 9 } }, 9, { reveal: 'after-check', predict: { q: '재기 전에 어림해 봐요. 풀은 몇 cm쯤일까요?', options: ['3cm쯤', '9cm쯤', '20cm쯤'], answer: 1 }, conclude: '어림하고 잰 뒤 비교하면 길이 감각이 늘어요.', difficulty: 0.15 }),
              readQ('가위의 길이는 몇 cm인가요?', { max: 15, object: { name: '가위', len: 13 } }, 13, { difficulty: 0.15 }),
              readQ('열쇠의 길이는 몇 cm인가요?', { max: 15, object: { name: '열쇠', len: 6 } }, 6, { difficulty: 0.12 }),
              readQ('더 해 보기: 붓의 길이는 몇 cm인가요?', { max: 15, object: { name: '붓', len: 12 } }, 12, { extra: true, reveal: 'after-check', difficulty: 0.2 }),
            ]),
          ACT('a2', '활동 2. 1cm 칸을 세어 길이 확인하기', 13, 'measure',
            '"1cm 칸이 몇 개 들어가나요?" 칸을 왼쪽부터 하나씩 짚으며 세게 한 뒤, 같은 물건을 자로 읽은 값과 같은지 견준다. 칸 사이에 틈이 있는지 확인하게 하고, 칸 수가 곧 몇 cm인지 한 문장으로 말하게 한다. 11개를 센 학생에게 "그렇다면 길이는 몇 cm예요?"라고 이어 묻는다.',
            '1cm 칸이 몇 개 들어가는지 세어 길이를 cm로 써요.', LV_NONE, [
              readQ('책갈피 아래에 1cm 칸을 이어 놓았어요. 1cm 칸은 몇 개일까요?', { max: 15, object: { name: '책갈피', len: 11 }, tiles: { name: '1cm', len: 1 } }, 11, { difficulty: 0.15 }),
              readQ('색연필 아래에 1cm 칸을 이어 놓았어요. 1cm 칸은 몇 개일까요?', { max: 15, object: { name: '색연필', len: 8 }, tiles: { name: '1cm', len: 1 } }, 8, { difficulty: 0.12 }),
              readQ('자석 아래에 1cm 칸을 이어 놓았어요. 1cm 칸은 몇 개일까요?', { max: 15, object: { name: '자석', len: 5 }, tiles: { name: '1cm', len: 1 } }, 5, { difficulty: 0.1 }),
            ]),
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"자로 재면 클립으로 잴 때보다 어떤 점이 좋은가요?" 누가 재어도 같은 수가 나온다는 말을 이끌어 낸다. 출구 2번에서 1cm 칸 수와 길이를 따로 생각한 학생은 다음 시간에 칸 수가 곧 길이라는 말을 다시 짚는다.',
        exitTicket: [
          { type: 'tool', tool: 'measure', options: { mm: false, max: 15, object: { name: '리본', len: 10 } }, state: {}, prompt: '리본의 길이는 몇 cm인가요?', target: { read: 10 }, difficulty: 0.15 },
          { type: 'choice', prompt: '1cm 칸이 7개 들어가는 물건의 길이는 몇 cm인가요?', options: ['7cm', '8cm', '6cm'], answer: 0, difficulty: 0.12, explain: '1cm 칸이 하나 놓일 때마다 길이가 1cm씩 늘어서, 칸 수가 곧 cm 수예요.' },
          { type: 'choice', prompt: '자로 재면 클립으로 재는 것보다 좋은 점은 무엇인가요?', options: ['누가 재어도 같은 수가 나와요', '더 크게 재어져요', '재는 시간이 더 길어요'], answer: 0, difficulty: 0.15, explain: '눈금이 같은 자는 누가 재어도 같은 수가 나와서 서로 견줄 수 있어요.' },
          mood,
        ],
      },
    ],
    worksheet: {
      title: '교실 물건 길이 재기',
      items: [
        { type: 'figure', wide: true, prompt: '물건의 길이는 몇 cm인가요? 수와 단위를 함께 쓰세요.', tool: 'measure', options: { mode: 'ruler', max: 10, mm: false }, figures: [
          { options: { object: { name: '자석', len: 4 } }, caption: '자석: ______' }, { options: { object: { name: '열쇠', len: 7 } }, caption: '열쇠: ______' }], answer: '4cm, 7cm' },
        { type: 'table', prompt: '1cm 칸이 몇 개인지 보고 길이를 cm로 쓰세요.', columns: ['물건', '1cm 칸 수', '길이'], cells: [['풀', '9개', ''], ['색연필', '7개', ''], ['지우개', '5개', '']], answer: '9cm, 7cm, 5cm' },
        { type: 'choice', prompt: '자로 길이를 잴 때 물건의 한쪽 끝은 어디에 맞출까요?', options: ['눈금 0', '눈금 3', '아무 곳이나'], answer: '눈금 0' },
        { type: 'short', prompt: '교실에서 길이를 재고 싶은 물건 한 가지와 어림한 길이를 쓰세요.', answer: '예) 내 필통, 약 20cm' },
      ],
      easy: {
        note: '물건의 한쪽 끝을 0에 맞추고, 반대쪽 끝 눈금의 수를 읽어요. 수 뒤에 cm를 써요.',
        items: [
          { type: 'figure', wide: true, prompt: '자로 잰 길이를 쓰세요.', tool: 'measure', options: { mode: 'ruler', max: 10, mm: false }, figures: [{ options: { object: { name: '지우개', len: 5 } }, caption: '지우개: ______' }], answer: '5cm' },
          { type: 'table', prompt: '1cm 칸 수를 보고 길이를 쓰세요.', columns: ['물건', '1cm 칸 수', '길이'], cells: [['풀', '6개', ''], ['붓', '8개', '']], answer: '6cm, 8cm' },
          { type: 'choice', prompt: '자의 어디에 맞출까요?', options: ['0', '5'], answer: '0' },
        ],
      },
    },
    differentiation: {
      easy: '잴 물건이 짧아서 자를 10칸 안에서 읽고, 길이 표시는 맞힌 뒤에 보여요.',
      base: '15cm 자에서 물건을 직접 읽고, 1cm 칸을 세어 확인해요.',
      challenge: '13cm처럼 눈금이 많은 물건을 읽고, 칸 수와 길이의 관계를 설명해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 눈금 0이 아닌 곳에 맞추고 끝 눈금만 읽는다 → 기존 5차시에서 배운 0 맞추기를 다시 말한다. ② 칸 사이 선을 세어 하나 더 센다 → 선이 아니라 칸을 센다. ③ 칸 수를 센 뒤 단위를 빼먹는다 → "11개"가 아니라 "11cm"로 말하게 한다. 실물 재기에서는 자와 나란히 놓는 것을 꼭 확인한다.',
  }));

  // ───────────────────────────── 9차시 (core · 몸으로 어림하기) ─────────────────────────────
  lessons.push(Object.assign(head(9, ['[2수03-12]']), {
    title: '손가락 한 마디를 기준으로 길이 어림해 보기',
    objective: '손가락 한 마디(약 1cm)처럼 몸의 한 부분을 기준으로 물건의 길이를 어림해 말하고, 어림한 값이 잰 값과 다를 수 있음을 알 수 있다.',
    illustration: { prompt: ILL('a child holding a thumb next to a small paper eraser to guess its length, a ruler waiting nearby, a bear and a rabbit comparing guesses with small thought bubbles shaped like paper strips, no readable letters'), scene: scene('눈대중으로 어림해 봐요') },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"자가 없을 때 이 연필이 얼마나 긴지 알고 싶으면 어떻게 하면 좋을까요?" 손가락·뼘 같은 대답을 들은 뒤 "내 새끼손가락 한 마디가 약 1cm라고 해요. 지우개는 마디가 몇 개쯤 들어갈까요?"를 묻는다. 시연 단추로 마디 칸이 놓이는 모습을 보여 주고, 어림한 값은 잰 값과 꼭 같지 않을 수 있다고 말한다.',
        student: '내 새끼손가락 한 마디를 자에 대 보고, 몇 cm쯤 되는지 짝과 견주어 봐요.',
        demo: { tool: 'measure', options: { mode: 'ruler', mm: false, object: { name: '지우개', len: 5 }, tiles: { name: '마디', len: 1 } }, sequence: [{ read: 5 }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          ACT('a1', '활동 1. 물건과 어림한 길이 짝짓기', 13, 'mindmap',
            '"손톱 폭은 약 1cm쯤이에요. 그럼 연필 한 자루는 손톱 폭이 몇 개쯤일까요?" 손가락 마디나 한 뼘 같은 몸의 기준을 직접 대 보게 한다. 물건 크기를 상상하지 않고 가장 큰 수를 고르는 학생에게는 "이 물건이 내 손바닥보다 길까요?" 하고 되묻는다. 어림값에는 "약"이 붙는다는 점을 짚는다.',
            '물건 카드와 어림한 길이 카드를 짝지어요. 어림한 길이는 모두 "약"이 붙어 있어요.', LV_CARD, [
              matchQ('물건에 알맞은 어림한 길이를 이어 보세요. 남는 카드는 어느 물건에도 맞지 않아요.', '손가락으로 어림하기', [['새끼손가락 한 마디', '약 1cm'], ['지우개 긴 쪽', '약 5cm'], ['연필 한 자루', '약 15cm']], ['약 50cm'], { difficulty: 0.15 }),
              matchQ('주변 물건과 어림한 길이를 이어 보세요.', '주변 물건 어림', [['클립 한 개', '약 3cm'], ['크레파스 한 자루', '약 8cm'], ['공책 긴 쪽', '약 25cm']], ['약 100cm'], { difficulty: 0.2 }),
              matchQ('몸의 길이와 어림한 길이를 이어 보세요.', '몸으로 어림하기', [['손톱 폭', '약 1cm'], ['손바닥 폭', '약 7cm'], ['한 뼘', '약 15cm']], ['약 30cm'], { difficulty: 0.25 }),
            ]),
          ACT('a2', '활동 2. 어림하고 자로 재어 확인하기', 14, 'measure',
            '"어림한 값과 자로 잰 값이 다른 것은 이상한 일일까요?" 예상을 고르게 한 뒤 재어서 비교하고, 차이가 크지 않으면 잘 어림한 것이라고 말한다. 잰 값이 어림한 값과 다르다고 당황하는 학생에게 어림한 값은 조금 달라도 된다고 알려 준다. 어림한 값을 적어 두지 않은 학생에게는 먼저 쓰게 한다.',
            '물건의 길이를 먼저 어림해서 고른 뒤, 자로 재어 몇 cm인지 확인해요.', LV_NONE, [
              readQ('붓의 길이를 먼저 어림한 뒤 재어 보세요. 몇 cm인가요?', { max: 15, object: { name: '붓', len: 10 } }, 10,
                { predict: { q: '붓은 몇 cm쯤일까요?', options: ['5cm쯤', '10cm쯤', '20cm쯤'], answer: 1 }, reveal: 'after-check', conclude: '손가락 마디 10개쯤이라고 어림했다면 약 10cm였어요.', difficulty: 0.15 }),
              readQ('색연필의 길이를 먼저 어림한 뒤 재어 보세요. 몇 cm인가요?', { max: 15, object: { name: '색연필', len: 7 } }, 7,
                { predict: { q: '색연필은 몇 cm쯤일까요?', options: ['3cm쯤', '7cm쯤', '15cm쯤'], answer: 1 }, difficulty: 0.15 }),
              readQ('끈의 길이를 먼저 어림한 뒤 재어 보세요. 몇 cm인가요?', { max: 15, object: { name: '끈', len: 12 } }, 12,
                { predict: { q: '끈은 몇 cm쯤일까요?', options: ['6cm쯤', '12cm쯤', '25cm쯤'], answer: 1 }, difficulty: 0.2 }),
              readQ('더 해 보기: 자석의 길이를 어림한 뒤 재어 보세요. 몇 cm인가요?', { max: 15, object: { name: '자석', len: 4 } }, 4, { extra: true, difficulty: 0.2 }),
            ]),
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"어림한 값이 자로 잰 값과 달랐을 때 어떤 마음이 들었나요?" 조금 달라도 괜찮고, 다음에 더 가깝게 어림하면 된다고 말한다. 출구 3번에서 꼭 같아야 한다고 고른 학생은 다음 시간 어림 놀이에서 어림값과 잰 값을 나란히 쓰게 한다.',
        exitTicket: [
          { type: 'choice', prompt: '손가락 한 마디가 약 1cm예요. 지우개의 길이가 마디 6개쯤이면 약 몇 cm일까요?', options: ['약 1cm', '약 6cm', '약 60cm'], answer: 1, difficulty: 0.12, explain: '마디 하나가 약 1cm니까 6개쯤이면 약 6cm예요.' },
          { type: 'tool', tool: 'measure', options: { mm: false, max: 15, object: { name: '열쇠', len: 8 } }, state: {}, prompt: '열쇠의 길이를 자로 재어 몇 cm인지 쓰세요.', target: { read: 8 }, difficulty: 0.15 },
          { type: 'choice', prompt: '어림한 길이는 자로 잰 길이와 꼭 같아야 할까요?', options: ['꼭 같아야 해요', '조금 다를 수 있어요'], answer: 1, difficulty: 0.12, explain: '어림은 눈대중으로 짐작한 값이라서 잰 값과 조금 다를 수 있어요.' },
          mood,
        ],
      },
    ],
    worksheet: {
      title: '몸으로 어림하기',
      items: [
        { type: 'table', prompt: '몸의 한 부분을 기준으로 어림한 길이를 쓰세요. 손가락 한 마디는 약 1cm예요.', columns: ['물건', '마디 수', '어림한 길이'], cells: [['지우개', '5개쯤', ''], ['풀', '9개쯤', ''], ['색연필', '7개쯤', '']], answer: '약 5cm, 약 9cm, 약 7cm' },
        { type: 'figure', wide: true, prompt: '자로 물건의 길이를 재어 몇 cm인지 쓰세요.', tool: 'measure', options: { mode: 'ruler', max: 10, mm: false }, figures: [
          { options: { object: { name: '자석', len: 4 } }, caption: '자석: ______' }, { options: { object: { name: '풀', len: 8 } }, caption: '풀: ______' }], answer: '4cm, 8cm' },
        { type: 'choice', prompt: '어림하기에 대해 바르게 말한 친구에 ○ 하세요.', options: ['어림한 값은 자로 잰 값과 꼭 같아야 해요.', '어림한 값은 조금 다를 수 있어요.'], answer: '어림한 값은 조금 다를 수 있어요.' },
        { type: 'short', prompt: '내 몸의 한 부분(손가락 마디, 한 뼘 등) 중 길이를 어림할 때 쓰고 싶은 것과 까닭을 쓰세요.', answer: '예) 손가락 한 마디, 약 1cm라서 작은 물건을 어림하기 좋아요.' },
      ],
      easy: {
        note: '손가락 한 마디가 약 1cm예요. 마디가 몇 개 들어가는지 세어 어림해요.',
        items: [
          { type: 'table', prompt: '마디 수를 보고 어림한 길이를 쓰세요.', columns: ['물건', '마디 수', '어림한 길이'], cells: [['지우개', '4개쯤', ''], ['풀', '8개쯤', '']], answer: '약 4cm, 약 8cm' },
          { type: 'choice', prompt: '손가락 한 마디의 길이는 약 얼마일까요?', options: ['약 1cm', '약 10cm'], answer: '약 1cm' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '어림한 길이는 ___를 붙여 "___ 5cm"라고 써요.', answer: '약, 약' },
        ],
      },
    },
    differentiation: {
      easy: '카드가 두 장 줄고, 어림할 물건이 짧아서 자의 10칸 안에서 읽어요.',
      base: '카드를 이어 보고, 물건을 어림한 뒤 자로 재어 값을 비교해요.',
      challenge: '자가 15cm까지 있고, 어림한 길이가 비슷비슷한 보기 중에서 골라요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 어림한 값을 정확한 값으로 여겨 자로 재지 않는다 → 어림한 값을 먼저 적게 하고 재어서 나란히 놓는다. ② 어림한 값에 "약"을 붙이지 않는다 → 어림값 카드는 모두 "약"이 붙어 있음을 보여 준다. ③ 기준 없이 숫자만 크게 고른다 → 손가락 마디나 한 뼘을 실제 물건에 대어 본다. 사람마다 손가락 길이가 다르다는 점은 10차시 기록에서 이어 다룬다.',
  }));

  // ───────────────────────────── 10차시 (core · 약 몇 cm 기록) ─────────────────────────────
  lessons.push(Object.assign(head(10, ['[2수03-12]']), {
    title: '어림한 길이와 잰 길이를 "약 몇 cm"로 나란히 기록하기',
    objective: '어림한 길이는 "약"을 붙여, 자로 잰 길이는 "약" 없이 cm로 구분하여 표에 나란히 기록하고 어림이 가장 가까웠던 물건을 말할 수 있다.',
    illustration: { prompt: ILL('a notebook page drawn as a table with two columns, one marked with a cloud-shaped guess bubble and one with a small ruler, a rabbit writing numbers beside a pencil and an eraser, no readable letters'), scene: scene('어림은 약, 잰 값은 그대로') },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"민지는 연필이 약 15cm라고 했고, 자로 재어 보니 17cm였어요. 이 두 값을 한 칸에 같이 적으면 무엇이 어림이고 무엇이 잰 값인지 알 수 있을까요?" 칠판에 한 칸으로 적은 모양을 보여 주고 두 칸으로 나눠 적게 한다. 시연 단추로 어림 카드와 잰 값 카드가 두 칸으로 나뉘는 모습을 보여 준다.',
        student: '어제 어림한 길이를 떠올려 보고, 자로 재면 얼마였는지 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '길이 기록', slots: ['어림한 값', '잰 값'], cards: ['약 6cm', '7cm'], shuffle: false }, sequence: [{ sort: { '어림한 값': ['약 6cm'], '잰 값': ['7cm'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          ACT('a1', '활동 1. 어림한 값과 잰 값 가르기', 13, 'mindmap',
            '"카드에 약이 붙어 있나요?" 어림한 값에는 약이 붙고 잰 값에는 붙지 않는다는 기준을 먼저 말로 정하게 한다. 약이 없는 카드를 어림한 칸에 놓는 학생에게는 "자로 재어 알아낸 값이에요. 약이라는 말이 필요할까요?"라고 묻는다. 마지막 문항에서는 같은 숫자라도 약이 붙으면 어림한 값임을 보이게 한다.',
            '길이 카드를 읽고 어림한 값과 잰 값 칸에 나누어요.', LV_CARD, [
              sortQ('길이 카드를 어림한 값과 잰 값으로 나누어 보세요.', '길이 기록', { '어림한 값': ['약 6cm', '약 12cm', '약 9cm'], '잰 값': ['7cm', '11cm', '10cm'] }, [], { difficulty: 0.1 }),
              sortQ('물건 이름이 붙은 기록도 나누어 보세요.', '물건 길이 기록', { '어림한 값': ['풀 약 8cm', '가위 약 14cm'], '잰 값': ['풀 9cm', '가위 13cm'] }, [], { difficulty: 0.15 }),
              sortQ('같은 숫자가 들어 있어도 약이 붙었는지 보고 나누어 보세요.', '약이 붙었나요?', { '어림한 값': ['약 10cm', '약 3cm'], '잰 값': ['10cm', '3cm', '18cm'] }, [], { difficulty: 0.2, predict: { q: '"약 10cm"와 "10cm"는 같은 기록일까요?', options: ['같아요', '달라요'], answer: 1 }, conclude: '약이 붙으면 어림한 값, 붙지 않으면 자로 잰 값이에요.' }),
            ]),
          ACT('a2', '활동 2. 알맞은 기록 고르기', 14, 'measure',
            '"자 눈금 끝이 8과 9 사이에 있어요. 어느 쪽에 더 가까운가요?" 끝이 눈금 사이에 있을 때 더 가까운 눈금의 수를 읽고 "약"을 붙이는 연습이다. 작은 수를 읽거나 약을 빼는 학생에게는 두 눈금까지의 거리를 손가락으로 견주게 한다. 정확히 눈금에 닿은 물건이 아님에 주의하게 한다.',
            '자 위 물건의 끝이 눈금 사이에 있어요. 알맞게 기록한 것을 골라요.', LV_NONE, [
              askQ('크레파스의 끝이 눈금 사이에 있어요. 알맞게 기록한 것은 무엇일까요?', { max: 12, object: { name: '크레파스', len: 8.6 } }, { q: '알맞은 기록을 고르세요.', choices: ['약 9cm', '9cm', '약 8cm'] }, 0, { difficulty: 0.2 }),
              askQ('막대의 끝이 눈금 사이에 있어요. 알맞게 기록한 것은 무엇일까요?', { max: 12, object: { name: '막대', len: 6.2 } }, { q: '알맞은 기록을 고르세요.', choices: ['6cm', '약 6cm', '약 7cm'] }, 1, { difficulty: 0.2 }),
              askQ('리본의 끝이 눈금 사이에 있어요. 알맞게 기록한 것은 무엇일까요?', { max: 12, object: { name: '리본', len: 10.7 } }, { q: '알맞은 기록을 고르세요.', choices: ['약 10cm', '11cm', '약 11cm'] }, 2, { difficulty: 0.25 }),
            ]),
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"어림한 값에는 무엇을 붙여서 쓰나요?" 약을 붙여 쓰고, 자로 정확히 잰 값에는 붙이지 않는다는 말을 이끌어 낸다. 출구 2번에서 약 없이 쓴 보기를 고른 학생은 다음 시간 어림 놀이에서 어림칸을 먼저 쓰게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '길이 기록', slots: ['어림한 값', '잰 값'], cards: ['약 4cm', '5cm', '약 13cm', '12cm'] }, state: { at: {} }, prompt: '길이 카드를 어림한 값과 잰 값으로 나누어 보세요.', target: { sort: { '어림한 값': ['약 4cm', '약 13cm'], '잰 값': ['5cm', '12cm'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '눈으로 보고 어림한 연필의 길이를 바르게 쓴 것은 무엇인가요?', options: ['15cm', '약 15cm', '15개'], answer: 1, difficulty: 0.12, explain: '어림한 값은 앞에 "약"을 붙여 잰 값과 구분해요.' },
          { type: 'choice', prompt: '자로 정확히 재어 알아낸 길이는 어떻게 쓰나요?', options: ['약 8cm', '8cm', '8개'], answer: 1, difficulty: 0.12, explain: '정확히 잰 값에는 "약"을 붙이지 않고 수와 단위만 써요.' },
          mood,
        ],
      },
    ],
    worksheet: {
      title: '어림한 길이와 잰 길이 기록하기',
      items: [
        { type: 'table', prompt: '어림한 길이와 자로 잰 길이를 표에 쓰세요. 어림한 값에는 "약"을 붙여요.', columns: ['물건', '어림한 길이', '잰 길이'], cells: [['풀', '', '9cm'], ['가위', '약 14cm', ''], ['붓', '', '10cm']], answer: '풀: 약 8cm 등 어림한 값, 가위: 잰 값(예 13cm), 붓: 약 ○○cm' },
        { type: 'figure', wide: true, prompt: '자로 물건의 길이를 재어 몇 cm인지 쓰세요.', tool: 'measure', options: { mode: 'ruler', max: 10, mm: false }, figures: [
          { options: { object: { name: '지우개', len: 5 } }, caption: '지우개: ______' }, { options: { object: { name: '열쇠', len: 7 } }, caption: '열쇠: ______' }], answer: '5cm, 7cm' },
        { type: 'choice', prompt: '눈으로 어림한 길이를 바르게 쓴 친구에 ○ 하세요.', options: ['공책은 25cm예요.', '공책은 약 25cm예요.'], answer: '공책은 약 25cm예요.' },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '어림한 값에는 ___를 붙이고, 자로 정확히 잰 값에는 붙이지 ___.', answer: '약, 않아요' },
      ],
      easy: {
        note: '어림한 값에는 "약"을 붙여요. 자로 재어 알아낸 값에는 "약"을 붙이지 않아요.',
        items: [
          { type: 'choice', prompt: '어림한 길이를 바르게 쓴 것에 ○ 하세요.', options: ['연필 12cm', '연필 약 12cm'], answer: '연필 약 12cm' },
          { type: 'table', prompt: '빈칸에 알맞은 기록을 쓰세요.', columns: ['물건', '어림한 길이', '잰 길이'], cells: [['풀', '약 8cm', ''], ['자석', '', '4cm']], answer: '풀: 잰 값, 자석: 약 ○cm' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '눈으로 어림한 값에는 ___를 붙여요.', answer: '약' },
        ],
      },
    },
    differentiation: {
      easy: '카드가 두세 장씩 줄고, 맞는 칸에 놓으면 초록 테두리가 생겨요.',
      base: '카드를 모두 놓은 뒤 확인을 눌러 어림칸과 잰 칸을 스스로 고쳐요.',
      challenge: '같은 숫자가 어림칸과 잰 칸에 모두 들어가는 카드를 가려내고, 눈금 사이에 있는 끝을 읽어 약을 붙여 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 어림한 값에 "약"을 빠뜨린다 → 약이 붙은 카드와 안 붙은 카드를 소리 내어 읽게 한다. ② 끝이 눈금 사이에 있을 때 작은 수를 그대로 읽는다 → 두 눈금 가운데 더 가까운 쪽을 정한다. ③ 같은 숫자면 같은 기록이라고 여긴다 → "약 10cm"와 "10cm"를 나란히 놓고 무엇이 다른지 말하게 한다. 눈금 사이를 읽는 활동은 기존 5차시의 "약 몇 cm"와 같은 방법을 쓴다.',
  }));

  // ───────────────────────────── 11차시 (wrap · 어림과 잰 값 견주기) ─────────────────────────────
  const closeQ = (prompt, len, a, b, pick, x) => askQ(prompt, { max: 15, object: { name: '막대', len } }, { q: '더 가깝게 어림한 친구는 누구인가요?', choices: [a, b, '같아요'] }, pick, x);
  lessons.push(Object.assign(head(11, ['[2수03-12]']), {
    title: '어림한 값과 잰 값을 견주어 다음 어림 고치고 단원 정리하기',
    objective: '두 친구의 어림한 값 가운데 자로 잰 값에 더 가까운 것을 가려내고, 다음 어림을 어떻게 고칠지 말하며 단원에서 배운 것을 나누어 정리할 수 있다.',
    illustration: { prompt: ILL('two children holding thought bubbles shaped like paper strips with different lengths beside a long wooden stick, a ruler checking which guess is closer, a trophy ribbon in pastel colors, no readable letters'), scene: scene('누구의 어림이 더 가까울까?') },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"민지는 약 6cm, 준호는 약 10cm로 어림했고 자로 재어 보니 9cm였어요. 누구 어림이 더 가까울까요?" 6과 9, 10과 9의 차이를 손가락으로 세어 보게 하고 칠판에 차이를 적는다. 시연 단추로 막대 길이를 재는 모습을 보여 준다. "다음에는 어림을 어떻게 고치면 좋을까요?"',
        student: '오늘은 어림한 값과 잰 값을 견주어 누가 더 가깝게 어림했는지 알아봐요. 지난 시간 내 어림을 떠올려 봐요.',
        demo: { tool: 'measure', options: { mode: 'ruler', mm: false, object: { name: '막대', len: 9 } }, sequence: [{ read: 9 }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          ACT('a1', '활동 1. 누구의 어림이 더 가까울까', 10, 'measure',
            '"어림한 값에서 잰 값까지 몇 칸 떨어져 있나요?" 손가락으로 두 수 사이의 칸을 세어 더 작은 쪽이 더 가깝다고 말하게 한다. 더 큰 수를 어림한 친구가 더 가깝다고 고르는 학생에게는 잰 값이 어디인지 먼저 짚게 한다. 셋째 문항은 두 어림이 같은 거리만큼 떨어져 있어 "같아요"가 답이다.',
            '자로 잰 값과 두 친구의 어림한 값을 견주어 더 가깝게 어림한 친구를 골라요.', LV_NONE, [
              closeQ('민지는 약 6cm, 준호는 약 10cm로 어림했어요. 막대의 길이는 9cm예요. 누구 어림이 더 가까울까요?', 9, '민지', '준호', 1, { difficulty: 0.15 }),
              closeQ('서아는 약 12cm, 지우는 약 15cm로 어림했어요. 막대의 길이는 14cm예요. 누구 어림이 더 가까울까요?', 14, '서아', '지우', 1, { difficulty: 0.2 }),
              closeQ('하준이는 약 5cm, 다온이는 약 9cm로 어림했어요. 막대의 길이는 7cm예요. 누구 어림이 더 가까울까요?', 7, '하준', '다온', 2,
                { difficulty: 0.25, predict: { q: '두 어림값이 잰 값에서 똑같이 떨어져 있으면 어떻게 말할까요?', options: ['같아요', '큰 쪽이 더 가까워요', '작은 쪽이 더 가까워요'], answer: 0 }, conclude: '잰 값에서 같은 거리면 두 어림이 똑같이 가까워요.' }),
            ]),
          ACT('a2', '활동 2. 단원에서 배운 것 나누어 보기', 10, 'mindmap',
            '"이 말은 길이를 견주는 방법일까요, 재는 방법일까요, 어림하는 방법일까요?" 지금까지 한 활동을 떠올리며 카드를 놓게 한다. 잰 값에 "약"을 붙이는 카드를 어림하기 칸에 놓는 학생에게 "약을 붙이는 것은 어떤 때였지요?"라고 묻는다. 한 칸에 카드가 한 장만 있을 필요는 없음을 알려 준다.',
            '카드에 쓴 방법이 견주기·재기·어림하기 중 어느 것인지 나누어요.', LV_CARD, [
              sortQ('배운 방법 카드를 알맞은 칸에 나누어 보세요.', '길이 재기 단원', { 견주기: ['한쪽 끝을 맞추어 놓아요', '클립 수가 더 많으면 더 길어요'], 재기: ['자의 0에 한쪽 끝을 맞추어요', '수 뒤에 cm를 써요'], 어림하기: ['손가락 한 마디를 기준으로 해요', '"약 몇 cm"로 써요'] }, [], { difficulty: 0.15 }),
              sortQ('이번에는 다른 카드도 나누어 보세요.', '길이 재기 단원', { 견주기: ['긴 것부터 줄을 세워요', '가장 긴 것은 하나뿐이에요'], 재기: ['1cm 칸이 몇 개인지 세어요', '선을 긋고 다시 재어 확인해요'], 어림하기: ['먼저 어림한 값을 적어 두어요', '잰 값과 견주어 다음 어림을 고쳐요'] }, [], { difficulty: 0.2 }),
              pickQ('바르게 기록한 것만 골라 보세요.', '길이 기록', '바른 기록', ['연필은 15cm예요', '지우개는 약 5cm쯤이에요'], ['연필은 15예요', '지우개는 약 5번이에요'], { difficulty: 0.2 }),
            ]),
          ACT('a3', '활동 3. 우리 교실 물건 어림 놀이', 7, 'mindmap',
            '"먼저 어림한 값을 쓰고, 그다음에 자로 재요." 짝과 번갈아 어림한 값을 말하고 재어 보게 한다. 잰 값이 어림한 값과 다르면 다음에 더 가깝게 어림할 방법을 한 가지 말하게 한다. 어림한 값을 적지 않고 재는 학생에게는 먼저 한 줄 쓰게 한다.',
            '교실 물건의 길이를 어림해서 말하고, 자로 재어 짝과 견주어요. 다 했으면 "다 했어요"를 눌러요.', LV_NONE, [
              FREE('책상 위 지우개의 길이를 어림해서 짝에게 말하고, 자로 재어 견주어 보세요.'),
              FREE('우리 반 교과서의 짧은 쪽 길이를 어림하고 자로 재어 어림과 잰 값을 나란히 써 보세요.'),
              FREE('필통 속 물건 하나를 고르고, 어림한 값에 "약"을 붙여 쓴 뒤 자로 재어 확인해 보세요.'),
            ]),
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"이번 단원에서 가장 쓸모 있었던 방법은 무엇인가요?" 한쪽 끝 맞추기, 0에 맞추어 재기, "약"을 붙여 어림하기를 짝에게 말하게 한다. 출구 2번에서 더 큰 어림값을 더 가깝다고 고른 학생은 다음 단원 도입에서 잰 값부터 짚는다.',
        exitTicket: [
          { type: 'tool', tool: 'measure', options: { mm: false, max: 15, object: { name: '연필', len: 14 } }, state: {}, prompt: '연필의 길이를 자로 재어 몇 cm인지 쓰세요.', target: { read: 14 }, difficulty: 0.15 },
          { type: 'choice', prompt: '자로 재어 보니 6cm예요. 어림한 값이 약 4cm인 친구와 약 8cm인 친구는 얼마나 가까울까요?', options: ['약 4cm 친구가 더 가까워요', '약 8cm 친구가 더 가까워요', '똑같이 가까워요'], answer: 2, difficulty: 0.2, explain: '4와 6은 2 차이, 8과 6도 2 차이라서 똑같이 가까워요.' },
          { type: 'choice', prompt: '두 막대의 길이를 견줄 때 가장 먼저 해야 할 일은 무엇인가요?', options: ['한쪽 끝을 맞추어요', '더 굵은 막대를 골라요', '색깔을 견주어요'], answer: 0, difficulty: 0.1, explain: '한쪽 끝을 맞추어야 남는 부분으로 길이를 견줄 수 있어요.' },
          mood,
        ],
      },
    ],
    worksheet: {
      title: '어림과 잰 값 견주기',
      items: [
        { type: 'table', prompt: '어림한 값과 잰 값을 보고 어림이 가장 가까운 물건에 ○ 하세요.', columns: ['물건', '어림한 값', '잰 값', '차이'], cells: [['풀', '약 8cm', '9cm', ''], ['붓', '약 15cm', '12cm', ''], ['열쇠', '약 7cm', '7cm', '']], answer: '1cm, 3cm, 0cm — 열쇠' },
        { type: 'figure', wide: true, prompt: '자로 물건의 길이를 재어 몇 cm인지 쓰세요.', tool: 'measure', options: { mode: 'ruler', max: 10, mm: false }, figures: [
          { options: { object: { name: '막대', len: 6 } }, caption: '막대: ______' }, { options: { object: { name: '지우개', len: 3 } }, caption: '지우개: ______' }], answer: '6cm, 3cm' },
        { type: 'choice', prompt: '자로 잰 길이는 7cm예요. 어림한 값 중 더 가까운 것에 ○ 하세요.', options: ['약 5cm', '약 8cm'], answer: '약 8cm' },
        { type: 'short', prompt: '이번 단원에서 알게 된 점을 두 가지 쓰세요.', answer: '예) 길이를 견줄 때는 한쪽 끝을 맞춰요. 어림한 값에는 "약"을 붙여요.' },
      ],
      easy: {
        note: '잰 값에 더 가까운 어림이 더 잘 어림한 거예요. 차이가 작은 쪽이 더 가까워요.',
        items: [
          { type: 'table', prompt: '차이를 쓰고, 더 가까운 어림에 ○ 하세요.', columns: ['어림한 값', '잰 값', '차이'], cells: [['약 5cm', '6cm', ''], ['약 9cm', '6cm', '']], answer: '1cm, 3cm — 약 5cm가 더 가까워요' },
          { type: 'choice', prompt: '어림한 값에 붙이는 말은 무엇일까요?', options: ['약', '개'], answer: '약' },
          { type: 'short', prompt: '길이를 견줄 때 가장 먼저 맞출 것을 쓰세요.', answer: '한쪽 끝' },
        ],
      },
    },
    differentiation: {
      easy: '막대가 짧아서 눈금이 크게 보이고, 어림값 두 개를 잰 값 옆에 놓고 견주어요.',
      base: '두 어림값이 잰 값에서 얼마나 떨어져 있는지 스스로 세어 견주어요.',
      challenge: '두 어림값이 같은 거리만큼 떨어진 경우를 가려내고, 단원 정리 카드를 스스로 나눠요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 더 큰 어림값이 더 좋은 어림이라고 여긴다 → 잰 값에서 몇 칸 떨어졌는지를 손가락으로 센다. ② 두 차이가 같을 때 하나를 억지로 고른다 → "같아요"도 정답임을 보이는 문항을 푼다. ③ 단원 정리에서 견주기·재기·어림하기를 섞는다 → 그 방법을 직접 해 본 활동을 말하게 한다. 학생 이름 예시는 가명이다.',
  }));

  PaperLessons.registerUnit({
    id: UID, schema: 'edu-unit.v1', catalogUnit: UNIT,
    grade: 2, subject: '수학', unitTitle: TITLE,
    flow: '1~4차시는 길이를 직접 견주는 활동입니다. 1차시에서는 길다·무겁다·많다 같은 비교하는 말을 나누고, 두 물건의 길이는 한쪽 끝을 맞추어야 견줄 수 있음을 알게 합니다. 2차시에서는 같은 크기의 클립을 빈틈없이 이어 붙여 수로 길이를 말하고, 3차시에서는 클립 수로 여러 물건을 길이 순서대로 줄 세웁니다. 4차시에서는 무게와 들이도 눈으로만 보지 않고 저울과 눈금을 읽어 견줍니다. 5차시(기존 차시)에서 자로 재어 몇 cm로 쓰고, 6~8차시는 주어진 길이만큼 선을 긋고 단위를 붙여 쓰고 고치며, 교실 물건을 자로 재고 1cm 칸을 세어 cm 수와 맞춰 봅니다. 9~11차시는 손가락 한 마디 같은 몸의 기준으로 어림하고 "약 몇 cm"로 기록한 뒤 자로 재어 어림과 견주며 단원을 정리합니다.',
    refs: { 5: 'g2-math-length' },
    lessons,
  });
})();
