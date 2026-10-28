/* 1학년 1학기 국어 한글 놀이 — 34차시
 * (몸으로 자모 모양 놀이 → 말차례를 지키며 듣고 말하기 → 책과 친해지기 → 자모 이름과 소릿값 → 정리)
 * 대화·낱말·짧은 글·인물(가명)은 모두 이 단원을 위해 새로 지었다. 교과서 지문·그림·노래 가사를 옮기지 않았다.
 * 입학 첫 달 차시라 학생 글은 아주 짧게 쓰고, 문항 글은 교사가 소리 내어 읽어 준다고 보고 썼다.
 */
(function () {
  const U = { id: 'g1-kor-1-00', catalogUnit: 'g1-국어-1학기-0', unitTitle: '한글 놀이' };
  const L = (n, rest) => Object.assign({
    id: `${U.id}-${String(n).padStart(2, '0')}`, schema: 'edu-lesson.v1',
    catalog: { unit: U.catalogUnit, lesson: n },
    grade: 1, subject: '국어', unitTitle: U.unitTitle,
    minutes: 40, formats: ['chromebook', 'projector', 'print'],
  }, rest);
  const ART = (what, layers) => ({
    prompt: `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`,
    scene: { viewBox: [480, 270], layers },
  });
  const MOOD = { type: 'mood', prompt: '오늘 공부는 어땠나요?' };
  const JAMO = ['[2국04-01]']; const TALK = ['[2국01-03]']; const READ = ['[2국02-05]'];
  // 자모 카드: 큰 글자 하나만 보이는 카드(id는 로마자 — 힌트 누출 검사가 한글 값만 보므로 id에 한글을 쓰지 않는다)
  const J = (ch, id) => ({ id, text: ch, big: ch });
  const HELP = { live: true, instant: true };
  // 정직한 자기 평가(정답 없음) — 감정 척도 3단계
  const SELF = (situation, feeling, ask) => ({ mode: 'scale', steps: 3, situation, feeling, ask, scaleLabels: { 1: '아직', 2: '조금', 3: '잘해요' } });
  const SELF_HINTS = ['오늘 내 모습을 떠올려 보고, 가장 가까운 눈금 하나를 눌러요. 어느 눈금이든 괜찮아요.', '잘한 점과 아직인 점을 하나씩 떠올려 봐요.', '떠오른 모습에 가장 가까운 눈금을 골라요.'];

  const lessons = [
    // ───────────────────────── 1. 도입: 우리 둘레의 한글, 몸으로 만드는 자모 ─────────────────────────
    L(1, {
      title: '우리 둘레의 한글 찾고 몸으로 자모 만들기',
      objective: '주변에서 한글이 쓰인 물건을 찾고, 몸으로 자음자·모음자 모양을 만든 뒤 내가 헷갈리는 자모를 골라 말할 수 있다.',
      standards: JAMO,
      illustration: ART('first grade children making Korean letter shapes with their bodies in a sunny classroom, one standing straight, one lying down, one making a circle with arms', [
        { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 110, y: 50 }, { motif: 'hills', y: 206 },
        { motif: 'house', x: 110, y: 214 }, { motif: 'tree', x: 380, y: 214 }, { motif: 'flower', x: 250, y: 226 },
        { motif: 'text', x: 240, y: 140, text: 'ㅣ ㅡ ㅇ', size: 30 },
      ]),
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '"우리 교실에서 글자가 쓰인 곳을 손가락으로 가리켜 볼까요?" 신발장 이름표, 책 표지, 게시판을 함께 찾는다. 시연 단추로 글자가 있는 동화책 카드가 바구니에 들어가는 모습을 보여 준다. "이 글자들이 모두 한글이에요. 한글은 자음자와 모음자라는 작은 조각이 모여서 만들어져요. 오늘은 그 조각을 몸으로 만들어 봐요." 입학 첫 주라 문항 글은 교사가 소리 내어 읽어 준다.',
          student: '교실에서 글자가 쓰인 곳을 찾아봐요.',
          demo: { tool: 'mindmap', options: { mode: 'pick', topic: '글자가 있어요', shuffle: false, cards: [{ id: 'book', text: '동화책 표지' }, { id: 'cloud', text: '하늘의 구름', motif: 'cloud' }] }, sequence: [{ pick: ['book'] }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 글자가 쓰인 물건 찾기', minutes: 9, tool: 'mindmap',
              teacher: '"이 물건에 글자가 쓰여 있나요? 눈을 감고 떠올려 봐요." 카드마다 이 질문 하나로 고르게 한다. 우유갑처럼 늘 보면서도 글자를 못 본 물건이 나오면 "집에 가서 우유갑을 살펴봐요"라고 숙제를 준다. 구름·나뭇잎을 고른 학생에게는 "구름에 글자가 쓰여 있었나요?"라고 되묻는다.',
              task: '한글이 쓰여 있는 물건만 골라 바구니에 넣어요.',
              levels: { easy: HELP, base: {}, challenge: {} },
              items: [
                { prompt: '한글이 쓰여 있는 물건을 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '글자가 있어요', cards: [{ id: 'cover', text: '동화책 표지' }, { id: 'sign', text: '가게 간판' }, { id: 'cloud', text: '하늘의 구름', motif: 'cloud' }, { id: 'leaf', text: '나뭇잎', motif: 'leaf' }] }, target: { pick: ['cover', 'sign'] }, difficulty: 0.05,
                  levels: {
                    easy: { prompt: '한글이 쓰여 있는 물건 하나를 바구니에 넣어 보세요.', toolOptions: { cards: [{ id: 'cover', text: '동화책 표지' }, { id: 'cloud', text: '하늘의 구름', motif: 'cloud' }] }, target: { pick: ['cover'] } },
                    challenge: { prompt: '한글이 쓰여 있는 물건을 모두 바구니에 넣어 보세요. 늘 보던 물건도 잘 떠올려요.', toolOptions: { cards: [{ id: 'cover', text: '동화책 표지' }, { id: 'sign', text: '가게 간판' }, { id: 'milk', text: '우유갑' }, { id: 'cloud', text: '하늘의 구름', motif: 'cloud' }, { id: 'leaf', text: '나뭇잎', motif: 'leaf' }, { id: 'stone', text: '운동장 돌멩이' }] }, target: { pick: ['cover', 'sign', 'milk'] } },
                  } },
                { prompt: '교실에서 글자를 찾을 수 있는 곳을 골라 보세요.', toolOptions: { mode: 'pick', topic: '교실 글자', cards: [{ id: 'shoe', text: '신발장 이름표' }, { id: 'board', text: '게시판 안내문' }, { id: 'sky', text: '창밖 하늘', motif: 'sun' }, { id: 'paper', text: '새 도화지' }] }, target: { pick: ['shoe', 'board'] }, difficulty: 0.1 },
                { prompt: '집에 있는 것을 글자가 있는 것과 없는 것으로 나누어 보세요.', toolOptions: { topic: '우리 집', slots: [{ id: 'yes', label: '글자가 있어요' }, { id: 'no', label: '글자가 없어요' }], cards: [{ id: 'cal', text: '벽에 건 달력' }, { id: 'tale', text: '그림책' }, { id: 'apple', text: '사과 한 알' }, { id: 'flower', text: '꽃 한 송이', motif: 'flower' }] }, target: { sort: { yes: ['cal', 'tale'], no: ['apple', 'flower'] } }, difficulty: 0.15,
                  conclude: '달력과 그림책처럼 집 안에도 한글이 많아요.' },
                { prompt: '더 해 보기: 학교 오는 길에서 글자가 쓰인 것을 골라 보세요.', extra: true, toolOptions: { mode: 'pick', topic: '학교 오는 길', cards: [{ id: 'bus', text: '버스 정류장 이름판' }, { id: 'road', text: '도로 표지판' }, { id: 'tree', text: '길가 나무', motif: 'tree' }, { id: 'bird', text: '전깃줄 위 새', motif: 'bird' }] }, target: { pick: ['bus', 'road'] }, difficulty: 0.2 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 몸 모양과 자모 짝 짓기', minutes: 10, tool: 'mindmap',
              teacher: '교사가 먼저 두 팔을 몸에 붙이고 똑바로 서서 "선생님 몸은 어떤 글자 조각을 닮았을까요?" 하고 묻는다. 셋째 문항 전에 모두 일어나 두 팔을 옆으로 쭉 펴 보게 한다. "가로줄이 위에 있고 몸이 아래로 내려와요. ㅗ일까요, ㅜ일까요?" ㅗ를 고른 학생에게는 ㅗ는 세로줄이 위로 솟는다는 것을 손가락으로 공중에 그려 견주게 한다.',
              task: '몸 모양 말을 읽고, 그 모양과 닮은 자모 카드를 이어요. 직접 몸으로 따라 해 봐요.',
              levels: { easy: { live: true }, base: {}, challenge: {} },
              items: [
                { prompt: '몸 모양과 닮은 자모를 이어 보세요.', toolOptions: { mode: 'match', topic: '몸으로 자모', slots: [{ id: 'stand', label: '팔을 붙이고 똑바로 서요' }, { id: 'lie', label: '바닥에 길게 누워요' }], cards: [J('ㅣ', 'i'), J('ㅡ', 'eu'), J('ㅇ', 'ng')] }, target: { match: { stand: 'i', lie: 'eu' } }, difficulty: 0.05 },
                { prompt: '두 친구의 몸 모양과 닮은 자모를 이어 보세요.', toolOptions: { mode: 'match', topic: '몸으로 자모', slots: [{ id: 'ring', label: '두 팔로 머리 위에 동그라미' }, { id: 'roof', label: '두 손을 맞대 뾰족한 지붕' }], cards: [J('ㅇ', 'ng'), J('ㅅ', 's'), J('ㅁ', 'm')] }, target: { match: { ring: 'ng', roof: 's' } }, difficulty: 0.15 },
                { prompt: '몸 모양과 닮은 자모를 이어 보세요. 팔이 어디에 있는지 잘 보세요.', toolOptions: { mode: 'match', topic: '몸으로 자모', slots: [{ id: 'sit', label: '앉아서 두 다리를 앞으로 쭉' }, { id: 'tee', label: '서서 두 팔을 옆으로 쭉' }], cards: [J('ㄴ', 'n'), J('ㅜ', 'u'), J('ㅗ', 'o')] }, target: { match: { sit: 'n', tee: 'u' } }, difficulty: 0.3,
                  predict: { q: '서서 두 팔을 옆으로 펴면 어떤 자모를 닮았을까요?', options: ['ㅗ', 'ㅜ'], answer: 1 },
                  conclude: '가로줄이 위에 있고 아래로 내려오면 ㅜ예요. ㅗ는 세로줄이 위로 솟아요.' },
                { prompt: '짝과 번갈아 몸으로 자모 하나를 만들고, 무엇인지 맞혀 보세요.', free: true, talk: true },
              ],
            },
            {
              id: 'a3', title: '활동 3. 헷갈리기 쉬운 자모 찾기', minutes: 7, tool: 'mindmap',
              teacher: '"ㅏ와 ㅓ는 무엇이 다를까요?" 두 카드를 칠판에 나란히 붙이고 짧은 획이 어느 쪽에 붙었는지 손가락으로 짚게 한다. 고른 뒤 "나는 어떤 짝이 헷갈리나요? 그 짝을 몸으로 한 번 더 만들어 봐요"라고 말한다. 아는 자모만 자꾸 만드는 학생에게 "헷갈리는 짝을 골라야 더 잘하게 돼요"라고 짚는다.',
              task: '모양이 비슷해서 헷갈리기 쉬운 짝만 골라 바구니에 넣어요.',
              levels: { easy: HELP, base: {}, challenge: {} },
              items: [
                { prompt: '모양이 비슷해서 헷갈리기 쉬운 짝을 골라 보세요.', toolOptions: { mode: 'pick', topic: '헷갈리는 짝', cards: [{ id: 'aeo', text: 'ㅏ 와 ㅓ' }, { id: 'ou', text: 'ㅗ 와 ㅜ' }, { id: 'gng', text: 'ㄱ 과 ㅇ' }, { id: 'im', text: 'ㅣ 와 ㅁ' }] }, target: { pick: ['aeo', 'ou'] }, difficulty: 0.15 },
                { prompt: '이번에는 자음자에서 헷갈리기 쉬운 짝을 골라 보세요.', toolOptions: { mode: 'pick', topic: '헷갈리는 짝', cards: [{ id: 'gn', text: 'ㄱ 과 ㄴ' }, { id: 'ngi', text: 'ㅇ 과 ㅣ' }, { id: 'sm', text: 'ㅅ 과 ㅁ' }] }, target: { pick: ['gn'] }, difficulty: 0.2,
                  conclude: 'ㄱ과 ㄴ은 꺾인 곳의 자리만 달라서 헷갈리기 쉬워요.' },
                { prompt: '내가 헷갈리는 자모 두 개를 짝에게 말하고, 몸으로 다시 만들어 보세요.', free: true, talk: true },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"오늘 몸으로 만든 자모 가운데 가장 재미있었던 것은 무엇인가요?" 두세 명이 일어나 몸으로 다시 보여 준다. 출구 결과에서 1번을 틀린 학생은 가로줄과 세로줄의 자리를 헷갈린 것이니 다음 시간에 먼저 공중에 그려 보게 한다. 2번에서 "아는 자모만 또 써요"를 고른 학생을 기억해 둔다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '몸으로 자모', slots: [{ id: 'up', label: '누워서 두 다리를 위로 쭉' }], cards: [J('ㄴ', 'n'), J('ㅇ', 'ng')] }, prompt: '누워서 두 다리를 위로 들면 어떤 자모를 닮았을까요? 이어 보세요.', target: { match: { up: 'n' } }, difficulty: 0.25 },
            { type: 'choice', prompt: '헷갈리는 자모가 생기면 어떻게 하면 좋을까요?', options: ['아는 자모만 또 써요', '헷갈리는 자모를 다시 보고 만들어요', '그냥 넘어가요'], answer: 1, difficulty: 0.1, explain: '헷갈리는 자모를 다시 보고 만들어 봐야 더 잘 알게 돼요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '우리 둘레의 한글',
        items: [
          { type: 'check', prompt: '한글이 쓰여 있는 것을 모두 골라 ✓ 하세요.', options: ['동화책 표지', '하늘의 구름', '신발장 이름표', '나뭇잎'], answer: '동화책 표지, 신발장 이름표' },
          { type: 'choice', prompt: '서서 두 팔을 옆으로 쭉 편 모양과 닮은 자모에 ○ 하세요.', options: ['ㅗ', 'ㅜ', 'ㅇ'], answer: 'ㅜ' },
          { type: 'choice', prompt: '모양이 비슷해서 헷갈리기 쉬운 짝에 ○ 하세요.', options: ['ㅏ 와 ㅓ', 'ㅇ 과 ㅣ', 'ㅅ 과 ㅁ'], answer: 'ㅏ 와 ㅓ' },
          { type: 'short', prompt: '내가 헷갈리는 자모 두 개를 쓰세요.' },
          { type: 'draw', prompt: '몸으로 자모를 만든 내 모습을 그려 보세요.' },
        ],
        easy: {
          note: '선생님이 읽어 주는 말을 듣고 ○, ✓ 해요.',
          items: [
            { type: 'choice', prompt: '한글이 쓰여 있는 것에 ○ 하세요.', options: ['동화책 표지', '하늘의 구름'], answer: '동화책 표지' },
            { type: 'choice', prompt: '바닥에 길게 누운 모양과 닮은 자모에 ○ 하세요.', options: ['ㅣ', 'ㅡ'], answer: 'ㅡ' },
            { type: 'short', prompt: '내가 헷갈리는 자모 하나를 쓰세요.' },
            { type: 'draw', prompt: '몸으로 자모를 만든 내 모습을 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '활동 1 첫 문항은 카드 두 장으로 시작해요. 맞는 칸에 넣으면 초록 테두리가 생기고, 틀리면 까닭을 듣고 되돌아와요. 몸 모양 잇기에서도 맞게 이은 카드에 초록 테두리가 생겨요.',
        base: '카드를 모두 넣은 뒤 확인을 눌러 스스로 고쳐요.',
        challenge: '활동 1 첫 문항에 우유갑·돌멩이 카드가 더 나오고, 더 해 보기(학교 오는 길)까지 풀어요. 헷갈리는 짝을 고른 까닭을 짝에게 한 문장으로 말해요.',
      },
      teacherNotes: '입학 첫 주 차시라 글을 읽지 못하는 학생이 많다. 문항 글과 카드 글은 교사가 읽어 주고, 학생은 그림과 큰 글자를 보고 고른다. 자주 보이는 어려움: ① 두 팔을 옆으로 편 모양(ㅜ)을 ㅗ로 고른다 → 가로줄이 위인지 아래인지 손가락으로 공중에 그려 견준다. ② 헷갈리는 자모를 고르라 하면 아는 자모만 고른다 → "헷갈리는 짝을 찾는 것이 오늘 할 일"이라고 다시 말한다. ③ 몸으로 만들 때 보는 쪽과 만드는 쪽의 좌우가 바뀐다 → 이 차시는 좌우가 바뀌어도 같은 ㅣ·ㅡ·ㅇ·ㅅ·ㄴ·ㅜ만 쓴다.',
    }),

    // ───────────────────────── 2. 연습: 헷갈리는 자모 다시 보기 ─────────────────────────
    L(2, {
      title: '짧은 획 방향 보고 헷갈리는 모음자 가르기',
      objective: '모양이 비슷한 모음자의 짧은 획 방향을 견주어 나누고, 내가 헷갈리는 모음자를 골라 ㅇ과 모아 다시 만들어 볼 수 있다.',
      standards: JAMO,
      illustration: ART('a child holding up two mirror-like paper letter cards, with a small paper mirror between them on a desk', [
        { motif: 'cloud', x: 90, y: 50 }, { motif: 'sun', x: 400, y: 58, s: 0.8 }, { motif: 'hills', y: 210 },
        { motif: 'tree', x: 90, y: 216 }, { motif: 'flower', x: 400, y: 226 },
        { motif: 'text', x: 240, y: 140, text: 'ㅏ ㅓ   ㅗ ㅜ', size: 30 },
      ]),
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '지난 시간에 고른 헷갈리는 짝을 떠올리게 한다. 교사가 ㅏ 카드를 들고 몸을 돌려 뒤에서 보여 주며 "어, 뒤에서 보니 ㅓ가 되었네요. 그래서 헷갈려요"라고 말한다. 시연 단추로 ㅇ과 ㅏ가 모여 \'아\'가 되는 모습을 보여 주고 "ㅇ은 첫소리에서 소리가 없어서 모음 소리가 그대로 나요"라고 짚는다.',
          student: 'ㅏ와 ㅓ는 무엇이 다를까요? 짧은 획을 찾아봐요.',
          demo: { tool: 'hangul', options: { consonants: ['ㅇ'], vowels: ['ㅏ', 'ㅓ'], slotHints: true }, sequence: [{ syllable: '아' }, { syllable: '어' }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 짧은 획 방향으로 나누기', minutes: 12, tool: 'mindmap',
              teacher: '"짧은 획이 어느 쪽에 붙었나요? 손가락으로 가리켜 봐요." 카드를 놓기 전에 모두 짧은 획 쪽으로 손을 뻗게 한다. ㅑ와 ㅕ는 짧은 획이 두 개라도 방향은 하나라는 것을 짚는다. 셋째 문항에서 ㅇ을 아무 칸에나 넣는 학생에게 "ㅇ에는 꺾인 곳이 있나요?"라고 묻는다.',
              task: '자모의 짧은 획이나 꺾인 곳이 어디에 있는지 보고, 알맞은 칸에 나누어 넣어요.',
              levels: { easy: HELP, base: {}, challenge: {} },
              items: [
                { prompt: '짧은 획이 오른쪽에 있는지, 왼쪽에 있는지 나누어 보세요.', toolOptions: { topic: '짧은 획은 어디?', slots: [{ id: 'right', label: '짧은 획이 오른쪽' }, { id: 'left', label: '짧은 획이 왼쪽' }], cards: [J('ㅏ', 'a'), J('ㅓ', 'eo'), J('ㅑ', 'ya'), J('ㅕ', 'yeo')] }, target: { sort: { right: ['a', 'ya'], left: ['eo', 'yeo'] } }, difficulty: 0.15,
                  levels: { easy: { prompt: '두 카드를 짧은 획이 오른쪽, 왼쪽인 것으로 나누어 보세요.', toolOptions: { cards: [J('ㅏ', 'a'), J('ㅓ', 'eo')] }, target: { sort: { right: ['a'], left: ['eo'] } } } } },
                { prompt: '짧은 획이 위쪽에 있는지, 아래쪽에 있는지 나누어 보세요.', toolOptions: { topic: '짧은 획은 어디?', slots: [{ id: 'up', label: '짧은 획이 위쪽' }, { id: 'down', label: '짧은 획이 아래쪽' }], cards: [J('ㅗ', 'o'), J('ㅜ', 'u'), J('ㅛ', 'yo'), J('ㅠ', 'yu')] }, target: { sort: { up: ['o', 'yo'], down: ['u', 'yu'] } }, difficulty: 0.2,
                  levels: { easy: { prompt: '두 카드를 짧은 획이 위쪽, 아래쪽인 것으로 나누어 보세요.', toolOptions: { cards: [J('ㅗ', 'o'), J('ㅜ', 'u')] }, target: { sort: { up: ['o'], down: ['u'] } } } },
                  conclude: 'ㅗ와 ㅛ는 짧은 획이 위로, ㅜ와 ㅠ는 아래로 나와요.' },
                { prompt: '꺾인 곳이 어디에 있는지 나누어 보세요. 꺾인 곳이 없는 카드는 그대로 두세요.', toolOptions: { topic: '꺾인 곳은 어디?', slots: [{ id: 'tr', label: '꺾인 곳이 오른쪽 위' }, { id: 'bl', label: '꺾인 곳이 왼쪽 아래' }], cards: [J('ㄱ', 'g'), J('ㄴ', 'n'), J('ㅋ', 'k'), J('ㅇ', 'ng')] }, target: { sort: { tr: ['g', 'k'], bl: ['n'] } }, difficulty: 0.3,
                  hints: ['카드마다 선이 꺾여 구부러진 곳을 손가락으로 짚어 봐요. 동그라미에는 꺾인 곳이 없어요.', '꺾인 곳을 짚은 손가락이 위에 있는지 아래에 있는지 다시 봐요.', '선이 위에서 오른쪽으로 가다가 아래로 꺾인 카드는 오른쪽 위, 아래로 내려오다 오른쪽으로 꺾인 카드는 왼쪽 아래예요.'] },
                { prompt: '더 해 보기: 모음자를 짧은 획이 하나인 것과 둘인 것으로 나누어 보세요.', extra: true, toolOptions: { topic: '짧은 획은 몇 개?', slots: [{ id: 'one', label: '짧은 획이 하나' }, { id: 'two', label: '짧은 획이 둘' }], cards: [J('ㅓ', 'eo'), J('ㅛ', 'yo'), J('ㅜ', 'u'), J('ㅑ', 'ya'), J('ㅣ', 'i')] }, target: { sort: { one: ['eo', 'u'], two: ['yo', 'ya'] } }, difficulty: 0.3,
                  hints: ['카드마다 긴 줄에 붙은 짧은 획의 수를 세어 봐요. 짧은 획이 없는 카드는 그대로 둬요.', '짧은 획을 하나씩 손가락으로 짚으며 다시 세어 봐요.', '긴 줄 하나만 있는 카드는 짧은 획이 없어서 어느 칸에도 넣지 않아요.'] },
              ],
            },
            {
              id: 'a2', title: '활동 2. ㅇ과 모아 모음 소리 내기', minutes: 14, tool: 'hangul',
              teacher: '"ㅇ에 ㅏ를 붙이면 [아], ㅓ를 붙이면 [어] 소리가 나요." 입 모양을 크게 하며 함께 소리 낸다. ㅓ 자리에 ㅏ를 놓은 학생에게는 "짧은 획이 ㅇ 쪽을 보고 있나요, 바깥을 보고 있나요?"라고 묻는다. 기본 단계는 확인을 누르기 전까지 합친 글자가 가려지니, 먼저 소리를 내 보고 확인하게 한다.',
              task: 'ㅇ과 모음자를 모아 글자를 만들고, 소리 내어 읽어요. 모음자를 어디에 붙일지 스스로 골라요.',
              levels: {
                easy: { consonants: ['ㅇ'], vowels: ['ㅏ', 'ㅓ', 'ㅗ', 'ㅜ'], slotHints: true, slotGuide: true, silentMark: true },
                base: { consonants: ['ㅇ'], vowels: ['ㅏ', 'ㅓ', 'ㅗ', 'ㅜ', 'ㅡ', 'ㅣ'], revealAfterCheck: true },
                challenge: { consonants: ['ㅇ'], vowels: ['ㅏ', 'ㅑ', 'ㅓ', 'ㅕ', 'ㅗ', 'ㅛ', 'ㅜ', 'ㅠ'], speak: false, revealAfterCheck: true },
              },
              items: [
                { prompt: '\'어\'를 만들어 보세요. 짧은 획 방향을 잘 보세요.', target: { syllable: '어' }, difficulty: 0.15 },
                { prompt: '\'우\'를 만들어 보세요.', target: { syllable: '우' }, difficulty: 0.2,
                  predict: { q: 'ㅜ는 ㅇ의 어디에 붙을까요?', options: ['→ 오른쪽', '↓ 아래'], answer: 1 },
                  conclude: 'ㅜ는 가로로 길어서 ㅇ 아래에 붙고, 짧은 획이 아래로 나와요.' },
                { prompt: '\'아\'를 만들고, 앞에서 만든 \'어\'와 소리를 견주어 보세요.', target: { syllable: '아' }, difficulty: 0.1 },
                { prompt: '\'오\'를 만들어 보세요.', target: { syllable: '오' }, difficulty: 0.15 },
                { prompt: '더 해 보기: \'여\'를 만들어 보세요. 짧은 획이 몇 개인지 보세요.', extra: true, target: { syllable: '여' }, toolOptions: { vowels: ['ㅑ', 'ㅕ', 'ㅓ'] }, difficulty: 0.3 },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"오늘 내가 가장 헷갈렸던 짝은 무엇이었나요? 그 짝을 손가락으로 공중에 크게 써 봐요." 다 함께 공중에 써 본 뒤 출구 질문을 푼다. 1번에서 위아래를 바꾼 학생은 다음 시간 시작에 몸으로 ㅗ·ㅜ를 다시 만들게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { topic: '짧은 획은 어디?', slots: [{ id: 'up', label: '위쪽' }, { id: 'down', label: '아래쪽' }], cards: [J('ㅠ', 'yu'), J('ㅗ', 'o'), J('ㅜ', 'u')] }, prompt: '짧은 획이 위쪽인 것과 아래쪽인 것으로 나누어 보세요.', target: { sort: { up: ['o'], down: ['yu', 'u'] } }, difficulty: 0.2 },
            { type: 'choice', prompt: 'ㅇ에 ㅓ를 붙이면 어떤 소리가 날까요?', options: ['아', '어', '오'], answer: 1, difficulty: 0.15, explain: 'ㅇ은 첫소리에서 소리가 없어서 ㅓ 소리 [어]가 그대로 나요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '헷갈리는 모음자',
        items: [
          { type: 'table', prompt: '짧은 획 방향에 맞게 모음자를 나누어 쓰세요. (ㅏ ㅓ ㅗ ㅜ)', columns: ['오른쪽', '왼쪽', '위쪽', '아래쪽'], rows: 1 },
          { type: 'choice', prompt: '짧은 획이 아래로 나온 모음자에 ○ 하세요.', options: ['ㅗ', 'ㅜ', 'ㅏ'], answer: 'ㅜ' },
          { type: 'blank', prompt: '빈칸에 알맞은 글자를 쓰세요.', text: 'ㅇ + ㅗ = ______', answer: '오' },
          { type: 'blank', prompt: '빈칸에 알맞은 글자를 쓰세요.', text: 'ㅇ + ㅓ = ______', answer: '어' },
          { type: 'short', prompt: '내가 헷갈리는 모음자 짝을 쓰고, 세 번씩 다시 써 보세요.' },
        ],
        easy: {
          note: '짧은 획이 어느 쪽에 있는지 손가락으로 먼저 짚어요.',
          items: [
            { type: 'choice', prompt: '짧은 획이 오른쪽에 있는 모음자에 ○ 하세요.', options: ['ㅏ', 'ㅓ'], answer: 'ㅏ' },
            { type: 'choice', prompt: '짧은 획이 위쪽에 있는 모음자에 ○ 하세요.', options: ['ㅗ', 'ㅜ'], answer: 'ㅗ' },
            { type: 'blank', prompt: '빈칸에 알맞은 글자를 쓰세요.', text: 'ㅇ + ㅏ = ______', answer: '아' },
            { type: 'short', prompt: '내가 헷갈리는 모음자를 두 번 써 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '나누기 첫 두 문항은 카드 두 장으로 시작하고, 맞는 칸에 넣으면 초록 테두리가 생겨요. 글자 만들기는 ㅇ과 모음 네 개만 나오고, 모음을 들면 알맞은 자리 테두리가 깜박여요.',
        base: '카드를 모두 넣은 뒤 확인해요. 글자 만들기에서 합친 글자는 확인을 누른 뒤에 보여요.',
        challenge: '짧은 획이 둘인 ㅑ·ㅕ·ㅛ·ㅠ가 섞여 나오고, 내 글자 듣기 단추가 없어요. 더 해 보기(짧은 획 수로 나누기, \'여\' 만들기)까지 풀어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 앞에서 본 자모와 뒤에서 본 자모가 거울처럼 바뀌어 ㅏ·ㅓ를 헷갈린다 → 짧은 획이 ㅇ(자음) 쪽을 보는지 바깥을 보는지로 말한다. ② ㅗ·ㅜ의 위아래를 바꾼다 → 짧은 획 쪽으로 손을 뻗어 방향을 몸으로 익힌다. ③ 틀린 자모는 다시 보지 않고 아는 자모만 되풀이한다(이 주제의 대표 오개념) → 활동지 마지막 칸에서 헷갈리는 짝을 골라 다시 쓰게 한다. ㅇ이 첫소리에서 소리가 없다는 것은 이 차시에서 처음 말해 주고, 받침 ㅇ은 다루지 않는다.',
    }),

    // ───────────────────────── 3. 확장: 낱말 속 자모 찾기 ─────────────────────────
    L(3, {
      title: '낱말 속에 숨은 자모 찾고 몸으로 낱말 만들기',
      objective: '그림 낱말에 들어 있는 자음자와 모음자를 찾아 고르고, 모둠 친구와 몸으로 자모를 만들어 낱말을 나타낼 수 있다.',
      standards: JAMO,
      illustration: ART('a tree and a hippo standing in a meadow while paper letter pieces float out of their names like confetti', [
        { motif: 'sun', x: 70, y: 58, s: 0.8 }, { motif: 'cloud', x: 300, y: 46 }, { motif: 'hills', y: 204 },
        { motif: 'tree', x: 120, y: 214 }, { motif: 'mountain', x: 380, y: 210, s: 0.8 }, { motif: 'leaf', x: 250, y: 226 },
        { motif: 'text', x: 240, y: 138, text: '나무 = ㄴ ㅏ ㅁ ㅜ', size: 24 },
      ]),
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '"나무라는 낱말 안에는 몇 개의 조각이 숨어 있을까요?" 칠판에 \'나무\'를 크게 쓰고 조각마다 다른 색 분필로 동그라미를 친다. 시연 단추로 ㄴ과 ㅏ가 모여 \'나\'가 되는 모습을 보여 준다. "낱말을 자모로 쪼갤 수도 있고, 자모를 모아 낱말을 만들 수도 있어요."',
          student: '\'나무\'에는 어떤 자모가 숨어 있을까요?',
          demo: { tool: 'hangul', options: { consonants: ['ㄴ', 'ㅁ'], vowels: ['ㅏ', 'ㅜ'], slotHints: true }, sequence: [{ syllable: '나' }, { syllable: '무' }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 낱말에 숨은 자모 고르기', minutes: 12, tool: 'mindmap',
              teacher: '"낱말을 손가락으로 한 글자씩 짚으며 조각을 찾아요." 칠판의 낱말을 보며 고르게 한다. 나무에서 ㅗ를 고른 학생에게 "무의 짧은 획은 위로 나왔나요, 아래로 나왔나요?"라고 되묻는다. 오이에서 ㅇ이 두 번 나오는 것을 짚고, 카드는 한 장만 넣으면 된다고 알려 준다.',
              task: '낱말에 들어 있는 자모만 골라 바구니에 넣어요. 없는 자모는 그대로 둬요.',
              levels: { easy: HELP, base: {}, challenge: {} },
              items: [
                { prompt: '\'나무\'에 들어 있는 자모를 모두 골라 보세요.', toolOptions: { mode: 'pick', topic: '나무', cards: [J('ㄴ', 'n'), J('ㅏ', 'a'), J('ㅁ', 'm'), J('ㅜ', 'u'), J('ㅗ', 'o')] }, target: { pick: ['n', 'a', 'm', 'u'] }, difficulty: 0.2,
                  levels: { challenge: { toolOptions: { cards: [J('ㄴ', 'n'), J('ㅏ', 'a'), J('ㅁ', 'm'), J('ㅜ', 'u'), J('ㅗ', 'o'), J('ㅓ', 'eo'), J('ㄱ', 'g')] } } } },
                { prompt: '\'오이\'에 들어 있는 자모를 모두 골라 보세요.', toolOptions: { mode: 'pick', topic: '오이', cards: [J('ㅇ', 'ng'), J('ㅗ', 'o'), J('ㅣ', 'i'), J('ㅜ', 'u'), J('ㅡ', 'eu')] }, target: { pick: ['ng', 'o', 'i'] }, difficulty: 0.25,
                  conclude: '\'오이\'에는 ㅇ이 두 번 나와요. ㅇ, ㅗ, ㅣ 세 가지 조각이 숨어 있어요.' },
                { prompt: '\'하마\'에 들어 있는 자모를 모두 골라 보세요.', toolOptions: { mode: 'pick', topic: '하마', cards: [J('ㅎ', 'h'), J('ㅏ', 'a'), J('ㅁ', 'm'), J('ㅇ', 'ng'), J('ㅓ', 'eo')] }, target: { pick: ['h', 'a', 'm'] }, difficulty: 0.25,
                  levels: { easy: { prompt: '\'하마\'에 들어 있는 자모를 골라 보세요.', toolOptions: { cards: [J('ㅎ', 'h'), J('ㅏ', 'a'), J('ㅁ', 'm'), J('ㅓ', 'eo')] } } } },
                { prompt: '더 해 보기: \'구두\'에 들어 있는 자모를 모두 골라 보세요.', extra: true, toolOptions: { mode: 'pick', topic: '구두', cards: [J('ㄱ', 'g'), J('ㄷ', 'd'), J('ㅜ', 'u'), J('ㅗ', 'o'), J('ㄴ', 'n'), J('ㅠ', 'yu')] }, target: { pick: ['g', 'd', 'u'] }, difficulty: 0.3 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 자모를 모아 낱말 글자 만들기', minutes: 14, tool: 'hangul',
              teacher: '"찾은 조각을 거꾸로 모아 볼까요? 소를 만들려면 어떤 조각이 필요할까요?" 만들기 전에 필요한 자음자와 모음자를 먼저 말하게 한다. 모둠 문항은 네 명이 한 글자를 몸으로 만들고(자음 둘, 모음 둘) 다른 모둠이 맞히게 한다. 자음 오른쪽에 ㅗ를 놓은 학생에게 "ㅗ는 세로로 길어요, 가로로 길어요?"라고 묻는다.',
              task: '자음자와 모음자를 모아 그림 낱말의 글자를 만들어요. 모음자를 어디에 붙일지 스스로 골라요.',
              levels: {
                easy: { consonants: ['ㅅ', 'ㅁ', 'ㅂ'], vowels: ['ㅏ', 'ㅗ', 'ㅣ'], slotHints: true, slotGuide: true },
                base: { consonants: ['ㄱ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅈ'], vowels: ['ㅏ', 'ㅗ', 'ㅜ', 'ㅣ'], revealAfterCheck: true },
                challenge: { consonants: ['ㄱ', 'ㄷ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅈ'], vowels: ['ㅏ', 'ㅓ', 'ㅗ', 'ㅜ', 'ㅡ', 'ㅣ'], speak: false, revealAfterCheck: true },
              },
              items: [
                { prompt: '\'소\'를 만들어 보세요.', target: { syllable: '소' }, difficulty: 0.15 },
                { prompt: '\'모자\'의 첫 글자 \'모\'를 만들어 보세요.', target: { syllable: '모' }, difficulty: 0.15 },
                { prompt: '\'나비\'의 둘째 글자 \'비\'를 만들어 보세요.', target: { syllable: '비' }, toolOptions: { wordSoFar: '나' }, difficulty: 0.15,
                  conclude: '\'나\'와 \'비\'를 이어 읽으면 \'나비\'예요.' },
                { prompt: '모둠 친구 넷이 몸으로 두 글자를 만들고, 다른 모둠이 맞혀 보세요.', free: true, talk: true },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"오늘 몸으로 만든 낱말 가운데 맞히기 가장 어려웠던 것은 무엇이었나요? 왜 어려웠을까요?" 한두 모둠의 대답을 듣고, 헷갈렸던 자모를 칠판에 모아 적는다. 출구 1번을 틀린 학생은 낱말을 한 글자씩 짚는 습관을 다음 시간에 다시 보여 준다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '모기', cards: [J('ㅁ', 'm'), J('ㅗ', 'o'), J('ㄱ', 'g'), J('ㅣ', 'i'), J('ㅜ', 'u'), J('ㄴ', 'n')] }, prompt: '\'모기\'에 들어 있는 자모를 모두 골라 보세요.', target: { pick: ['m', 'o', 'g', 'i'] }, difficulty: 0.25 },
            { type: 'choice', prompt: '\'소\'를 만들려면 어떤 조각이 필요할까요?', options: ['ㅅ 과 ㅏ', 'ㅅ 과 ㅗ', 'ㅅ 과 ㅜ'], answer: 1, difficulty: 0.15, explain: 'ㅅ 아래에 ㅗ를 붙이면 \'소\'가 돼요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '낱말 속 자모',
        items: [
          { type: 'check', prompt: '\'나무\'에 들어 있는 자모를 모두 골라 ✓ 하세요.', options: ['ㄴ', 'ㅗ', 'ㅏ', 'ㅁ', 'ㅜ'], answer: 'ㄴ, ㅏ, ㅁ, ㅜ' },
          { type: 'blank', prompt: '빈칸에 알맞은 글자를 쓰세요.', text: 'ㅅ + ㅗ = ______', answer: '소' },
          { type: 'blank', prompt: '빈칸에 알맞은 글자를 쓰세요.', text: 'ㅂ + ㅣ = ______', answer: '비' },
          { type: 'table', prompt: '낱말을 자모로 쪼개어 쓰세요.', columns: ['낱말', '자음자', '모음자'], cells: [['하마', '', ''], ['구두', '', '']] },
          { type: 'draw', prompt: '모둠이 몸으로 만든 낱말을 그려 보세요.' },
        ],
        easy: {
          note: '낱말을 한 글자씩 손가락으로 짚으며 조각을 찾아요.',
          items: [
            { type: 'check', prompt: '\'오이\'에 들어 있는 자모에 ✓ 하세요.', options: ['ㅇ', 'ㅗ', 'ㅣ', 'ㅜ'], answer: 'ㅇ, ㅗ, ㅣ' },
            { type: 'blank', prompt: '빈칸에 알맞은 글자를 쓰세요.', text: 'ㅅ + ㅗ = ______', answer: '소' },
            { type: 'choice', prompt: '\'모\'를 만드는 조각에 ○ 하세요.', options: ['ㅁ 과 ㅗ', 'ㅁ 과 ㅏ'], answer: 'ㅁ 과 ㅗ' },
            { type: 'draw', prompt: '모둠이 몸으로 만든 낱말을 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '자모 고르기는 함정 카드가 적고, 맞게 넣은 카드에 초록 테두리가 생겨요. 글자 만들기는 조각 여섯 개만 나오고 모음을 들면 알맞은 자리 테두리가 깜박여요.',
        base: '카드를 모두 고른 뒤 확인해요. 합친 글자는 확인을 누른 뒤에 보여요.',
        challenge: '나무 문항에 ㅓ·ㄱ 함정 카드가 더 나오고, 내 글자 듣기 없이 글자를 만들어요. 더 해 보기(구두)까지 풀어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 같은 자모가 두 번 나오는 낱말(오이)에서 카드를 두 장 찾으려 한다 → 고르기는 "들어 있는 조각의 종류"라고 말해 준다. ② 무의 ㅜ를 ㅗ로 고른다 → 짧은 획 방향(지난 시간)을 다시 짚는다. ③ 몸으로 만들 때 한 글자 안의 자음·모음 자리를 반대로 선다 → 보는 모둠 쪽에서 맞게 보이도록 교사가 자리를 잡아 준다. 받침 있는 낱말은 이 단원에서 쓰지 않는다.',
    }),

    // ───────────────────────── 4. 말차례란 무엇일까 ─────────────────────────
    L(4, {
      title: '말차례를 지킨 대화와 지키지 않은 대화 가르기',
      objective: '대화 장면을 보고 말차례를 지킨 대화와 지키지 않은 대화를 나누고, 말차례를 넘기는 신호를 두 가지 찾아 말할 수 있다.',
      standards: TALK,
      illustration: ART('two first graders taking turns talking on a playground bench, one speaking with a speech bubble and the other listening and nodding', [
        { motif: 'sun', x: 400, y: 56, s: 0.8 }, { motif: 'cloud', x: 120, y: 54 }, { motif: 'hills', y: 206 },
        { motif: 'tree', x: 90, y: 214 }, { motif: 'tree', x: 400, y: 216, color: 'mint' }, { motif: 'flower', x: 250, y: 228 },
        { motif: 'text', x: 240, y: 140, text: '이제 네 차례야', size: 24 },
      ]),
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '교사와 학생 한 명이 동시에 "어제 나는…" 하고 말을 시작해 본다. "두 사람이 한꺼번에 말하니 무슨 말이 들렸나요?" 아무것도 못 들었다는 대답을 끌어낸 뒤 "한 사람씩 돌아가며 말하는 것을 말차례라고 해요"라고 칠판에 \'말차례\'를 쓴다. 시연 단추로 민지가 말을 마치고 "너는?" 하고 묻는 말풍선을 보여 준다.',
          student: '두 사람이 한꺼번에 말하면 어떻게 될까요?',
          demo: { tool: 'story', options: { mode: 'fill', shuffle: false, cards: [{ id: 'you', text: '너는' }, { id: 'stop', text: '조용히 해' }], slots: [{ id: 'b1', who: '민지', motif: 'flower', label: '나는 그네가 좋아. ___?' }] }, sequence: [{ fill: { b1: 'you' } }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 말차례를 지킨 모습 가르기', minutes: 13, tool: 'mindmap',
              teacher: '"친구 말이 다 끝났나요, 아직인가요?" 카드마다 이 질문 하나로 가르게 한다. 셋째 문항 예상에서 "목소리가 크니까 잘한 거예요"를 고른 학생이 있으면 "목소리가 커도 친구 말 중간에 했다면 말차례를 지킨 걸까요?"라고 묻고, 말차례는 목소리 크기가 아니라 순서라는 것을 짚는다.',
              task: '대화 모습 카드를 읽고 말차례를 지킨 쪽과 지키지 않은 쪽으로 나누어요.',
              levels: { easy: HELP, base: {}, challenge: {} },
              items: [
                { prompt: '말차례를 지킨 모습과 지키지 않은 모습으로 나누어 보세요.', toolOptions: { topic: '교실 대화', slots: [{ id: 'ok', label: '지켰어요' }, { id: 'no', label: '안 지켰어요' }], cards: [{ id: 'after', text: '친구 말이 끝나고 말해요' }, { id: 'mid', text: '친구 말 중간에 말해요' }, { id: 'you', text: '"너는?" 하고 물어요' }, { id: 'same', text: '둘이 한꺼번에 말해요' }] }, target: { sort: { ok: ['after', 'you'], no: ['mid', 'same'] } }, difficulty: 0.1,
                  levels: { easy: { prompt: '두 모습을 말차례를 지킨 쪽과 안 지킨 쪽으로 나누어 보세요.', toolOptions: { cards: [{ id: 'after', text: '친구 말이 끝나고 말해요' }, { id: 'mid', text: '친구 말 중간에 말해요' }] }, target: { sort: { ok: ['after'], no: ['mid'] } } } } },
                { prompt: '급식 시간 대화 모습을 나누어 보세요.', toolOptions: { topic: '급식 시간', slots: [{ id: 'ok', label: '지켰어요' }, { id: 'no', label: '안 지켰어요' }], cards: [{ id: 'nod', text: '고개를 끄덕이며 끝까지 들어요' }, { id: 'grab', text: '"아니야, 내 말 들어!" 하고 끊어요' }, { id: 'turn', text: '다 들은 뒤 "나도 그래" 해요' }] }, target: { sort: { ok: ['nod', 'turn'], no: ['grab'] } }, difficulty: 0.15,
                  levels: { challenge: { prompt: '급식 시간 대화 모습을 나누어 보세요. 헷갈리는 카드도 있어요.', toolOptions: { cards: [{ id: 'nod', text: '고개를 끄덕이며 끝까지 들어요' }, { id: 'grab', text: '"아니야, 내 말 들어!" 하고 끊어요' }, { id: 'turn', text: '다 들은 뒤 "나도 그래" 해요' }, { id: 'soft', text: '작은 목소리로 친구 말 중간에 말해요' }, { id: 'alone', text: '혼자서만 오래 말해요' }] }, target: { sort: { ok: ['nod', 'turn'], no: ['grab', 'soft', 'alone'] } } } } },
                { prompt: '서준이는 목소리가 아주 커요. 서준이의 모습을 알맞은 쪽에 넣어 보세요.', toolOptions: { topic: '서준이의 대화', slots: [{ id: 'ok', label: '지켰어요' }, { id: 'no', label: '안 지켰어요' }], cards: [{ id: 'loud', text: '큰 목소리로 친구 말을 끊어요' }, { id: 'wait', text: '친구 말이 끝날 때까지 기다려요' }, { id: 'pass', text: '말을 마치고 "네 차례야" 해요' }] }, target: { sort: { ok: ['wait', 'pass'], no: ['loud'] } }, difficulty: 0.25,
                  predict: { q: '목소리가 큰 서준이는 말차례를 잘 지킨 걸까요?', options: ['네, 잘 들려요', '순서를 봐야 해요'], answer: 1 },
                  conclude: '목소리가 커도 친구 말을 끊으면 말차례를 지키지 않은 거예요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 말차례를 넘기는 신호 찾기', minutes: 13, tool: 'mindmap',
              teacher: '"내 말이 끝났다는 것을 친구가 어떻게 알까요?" 교사가 "나는 딸기를 좋아해. 너는?" 하며 한 학생에게 손바닥을 내밀어 보인다. 하품·등 돌리기를 고른 학생에게 "그러면 친구는 말해도 된다고 느낄까요?"라고 되묻는다. 마지막 문항은 짝과 직접 신호를 써서 말을 주고받게 한다.',
              task: '말을 마치고 친구에게 차례를 넘길 때 쓰는 신호만 골라 바구니에 넣어요.',
              levels: { easy: HELP, base: {}, challenge: {} },
              items: [
                { prompt: '말차례를 넘기는 신호만 골라 보세요.', toolOptions: { mode: 'pick', topic: '차례를 넘기는 신호', cards: [{ id: 'ask', text: '"너는 어때?" 하고 묻기' }, { id: 'name', text: '친구 이름 불러 주기' }, { id: 'yawn', text: '하품하기' }, { id: 'back', text: '등 돌리기' }] }, target: { pick: ['ask', 'name'] }, difficulty: 0.1 },
                { prompt: '몸으로 차례를 넘기는 신호를 골라 보세요.', toolOptions: { mode: 'pick', topic: '몸으로 넘기는 신호', cards: [{ id: 'palm', text: '손바닥으로 친구 가리키기' }, { id: 'look', text: '친구를 보며 웃기' }, { id: 'cover', text: '두 손으로 귀 막기' }, { id: 'turnaway', text: '고개를 돌려 창밖 보기' }] }, target: { pick: ['palm', 'look'] }, difficulty: 0.2,
                  levels: { easy: { toolOptions: { cards: [{ id: 'palm', text: '손바닥으로 친구 가리키기' }, { id: 'look', text: '친구를 보며 웃기' }, { id: 'cover', text: '두 손으로 귀 막기' }] } } } },
                { prompt: '더 해 보기: 말이 끝났다는 신호와 아직 이어진다는 신호로 나누어 보세요.', extra: true, toolOptions: { topic: '말이 끝났을까?', slots: [{ id: 'end', label: '말이 끝났어요' }, { id: 'more', label: '아직 이어져요' }], cards: [{ id: 'fin', text: '"내 이야기는 끝!"' }, { id: 'and', text: '"그리고…"' }, { id: 'q', text: '"너도 해 볼래?"' }, { id: 'wait', text: '"잠깐, 하나 더 있어"' }] }, target: { sort: { end: ['fin', 'q'], more: ['and', 'wait'] } }, difficulty: 0.3,
                  conclude: '"그리고…"는 말이 아직 이어진다는 신호예요. 그때는 조금 더 기다려요.' },
                { prompt: '짝과 좋아하는 놀이를 말하고, 신호를 써서 차례를 넘겨 보세요.', free: true, talk: true },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"오늘 써 본 신호 가운데 쉬는 시간에 써 볼 것 하나를 말해 볼까요?" 손을 든 학생 세 명이 신호를 몸으로 보여 준다. 출구 2번에서 큰 목소리·많이 말하기를 고른 학생 수를 세어 두고 다음 시간 도입에서 다시 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { topic: '놀이터 대화', slots: [{ id: 'ok', label: '지켰어요' }, { id: 'no', label: '안 지켰어요' }], cards: [{ id: 'listen', text: '친구 말을 다 듣고 말해요' }, { id: 'shout', text: '친구 말 위에 소리쳐요' }] }, prompt: '놀이터 대화 모습을 말차례를 지켰는지에 따라 나누어 보세요.', target: { sort: { ok: ['listen'], no: ['shout'] } }, difficulty: 0.1 },
            { type: 'choice', prompt: '말차례를 가장 잘 지킨 친구는 누구일까요?', options: ['가장 크게 말한 친구', '친구 말이 끝난 뒤 말한 친구', '가장 많이 말한 친구'], answer: 1, difficulty: 0.15, explain: '말차례는 목소리 크기나 말한 양이 아니라 친구 말이 끝날 때까지 기다렸는지로 봐요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '말차례를 지켜요',
        items: [
          { type: 'choice', prompt: '말차례를 지킨 모습에 ○ 하세요.', options: ['친구 말 중간에 말해요', '친구 말이 끝나고 말해요', '둘이 한꺼번에 말해요'], answer: '친구 말이 끝나고 말해요' },
          { type: 'check', prompt: '차례를 넘기는 신호를 모두 골라 ✓ 하세요.', options: ['"너는 어때?" 하고 묻기', '하품하기', '친구 이름 불러 주기', '손바닥으로 친구 가리키기'], answer: '"너는 어때?" 하고 묻기, 친구 이름 불러 주기, 손바닥으로 친구 가리키기' },
          { type: 'blank', prompt: '빈칸에 차례를 넘기는 말을 쓰세요.', text: '나는 그네가 좋아. ______?', answer: '너는 (너는 어때)' },
          { type: 'draw', prompt: '친구와 말차례를 지키며 이야기하는 모습을 그려 보세요.' },
        ],
        easy: {
          note: '"친구 말이 끝났나요?"를 먼저 생각해요.',
          items: [
            { type: 'choice', prompt: '말차례를 지킨 모습에 ○ 하세요.', options: ['친구 말 중간에 말해요', '친구 말이 끝나고 말해요'], answer: '친구 말이 끝나고 말해요' },
            { type: 'choice', prompt: '차례를 넘기는 말에 ○ 하세요.', options: ['"너는?"', '"조용히 해!"'], answer: '"너는?"' },
            { type: 'choice', prompt: '두 사람이 한꺼번에 말하면 어떻게 될까요?', options: ['잘 들려요', '잘 안 들려요'], answer: '잘 안 들려요' },
            { type: 'draw', prompt: '친구와 이야기하는 모습을 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '첫 문항은 카드 두 장으로 시작하고, 맞는 칸에 넣으면 초록 테두리가 생겨요. 신호 고르기도 카드가 세 장이에요.',
        base: '카드를 모두 넣은 뒤 확인을 눌러 스스로 고쳐요.',
        challenge: '급식 시간 문항에 "작은 목소리로 중간에 말하기" 같은 헷갈리는 카드가 더 나오고, 더 해 보기(말이 끝났을까?)까지 풀어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 목소리가 큰 쪽이 말차례를 잘 지킨 것이라고 고른다(이 주제의 대표 오개념) → "친구 말이 끝났나요?" 한 가지로만 가르게 한다. ② 작은 목소리로 끼어드는 것은 괜찮다고 여긴다 → 크기와 관계없이 중간에 하면 끼어든 것이다. ③ "그리고…"처럼 말이 이어지는 신호를 끝난 신호로 안다 → 말끝이 내려가고 멈추는지 들어 보게 한다. 대화 인물은 모두 가명이다.',
    }),

    // ───────────────────────── 5. 연습: 집·전화·교실에서 누구 차례일까 ─────────────────────────
    L(5, {
      title: '집과 전화 대화에서 누구 차례인지 찾기',
      objective: '집 대화와 전화 대화를 말이 오간 차례대로 놓고, 말하고 싶은 것이 생겼을 때 차례를 기다리는 방법을 고를 수 있다.',
      standards: TALK,
      illustration: ART('a child talking on a toy telephone at home in the evening while a cat listens nearby', [
        { motif: 'moon', x: 410, y: 58, s: 0.8 }, { motif: 'star', x: 350, y: 40 }, { motif: 'cloud', x: 110, y: 54 },
        { motif: 'hills', y: 208 }, { motif: 'house', x: 130, y: 216 }, { motif: 'tree', x: 380, y: 216 },
        { motif: 'text', x: 240, y: 140, text: '지금 누구 차례일까요?', size: 22 },
      ]),
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '"얼굴이 안 보이는 전화에서는 누구 차례인지 어떻게 알까요?" 교사가 학생 한 명과 전화 흉내를 내며 일부러 동시에 "여보세요?"를 말해 본다. 시연 단추로 할머니와 하윤이의 전화 대화가 차례대로 놓이는 모습을 보여 주며 "말이 멈추면 내 차례예요"라고 짚는다. 지난 시간 신호(이름 부르기, "너는?")를 떠올리게 한다.',
          student: '전화로 이야기할 때는 무엇을 잘 들어야 할까요?',
          demo: { tool: 'story', options: { mode: 'order', shuffle: false, slots: ['첫째', '둘째', '셋째'], cards: [{ id: 'p1', text: '할머니: 여보세요?' }, { id: 'p2', text: '하윤: 할머니, 저 하윤이에요!' }, { id: 'p3', text: '할머니: 아이고, 우리 하윤이구나.' }] }, sequence: [{ order: ['p1', 'p2', 'p3'] }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 대화가 오간 차례 맞추기', minutes: 13, tool: 'story',
              teacher: '"이 말을 듣고 대답한 말은 무엇일까요?" 카드 하나를 놓을 때마다 앞 카드를 소리 내어 읽고 이어지는지 따지게 한다. 전화를 끝내는 문항에서 "끊을게"를 맨 앞에 놓는 학생에게 "인사 없이 끊으면 상대는 어떤 마음일까요?"라고 묻는다.',
              task: '대화 카드를 말이 오간 차례대로 놓아요. 앞 말을 듣고 대답한 말을 찾아요.',
              levels: { easy: HELP, base: {}, challenge: {} },
              items: [
                { prompt: '저녁 식탁에서 나눈 대화예요. 차례대로 놓아 보세요.', toolOptions: { mode: 'order', slots: ['첫째', '둘째', '셋째'], cards: [{ id: 'h1', text: '엄마: 오늘 학교에서 뭐 했니?' }, { id: 'h2', text: '준호: 몸으로 글자를 만들었어요.' }, { id: 'h3', text: '엄마: 와, 어떤 글자를 만들었어?' }] }, target: { order: ['h1', 'h2', 'h3'] }, difficulty: 0.1 },
                { prompt: '민지가 친구 지우에게 전화를 걸었어요. 차례대로 놓아 보세요.', toolOptions: { mode: 'order', slots: ['첫째', '둘째', '셋째', '넷째'], cards: [{ id: 't1', text: '지우: 여보세요?' }, { id: 't2', text: '민지: 지우야, 나 민지야.' }, { id: 't3', text: '지우: 민지구나! 무슨 일이야?' }, { id: 't4', text: '민지: 내일 같이 놀자.' }] }, target: { order: ['t1', 't2', 't3', 't4'] }, difficulty: 0.2,
                  levels: { easy: { prompt: '민지가 친구 지우에게 전화를 걸었어요. 세 장을 차례대로 놓아 보세요.', toolOptions: { slots: ['첫째', '둘째', '셋째'], cards: [{ id: 't1', text: '지우: 여보세요?' }, { id: 't2', text: '민지: 지우야, 나 민지야.' }, { id: 't3', text: '지우: 민지구나! 무슨 일이야?' }] }, target: { order: ['t1', 't2', 't3'] } } } },
                { prompt: '전화를 끝낼 때의 대화예요. 차례대로 놓아 보세요.', toolOptions: { mode: 'order', slots: ['첫째', '둘째', '셋째'], cards: [{ id: 'e1', text: '서준: 이제 밥 먹으러 갈게.' }, { id: 'e2', text: '이모: 그래, 맛있게 먹어!' }, { id: 'e3', text: '서준: 네, 안녕히 계세요.' }] }, target: { order: ['e1', 'e2', 'e3'] }, difficulty: 0.25,
                  predict: { q: '전화를 끊기 전에 무엇을 먼저 할까요?', options: ['바로 끊어요', '끝낸다고 말해요'], answer: 1 },
                  conclude: '전화는 얼굴이 안 보여서, 끝낸다고 먼저 말하고 인사한 뒤 끊어요.' },
                { prompt: '더 해 보기: 아빠와 동생, 나 셋이 나눈 대화예요. 차례대로 놓아 보세요.', extra: true, toolOptions: { mode: 'order', slots: ['첫째', '둘째', '셋째', '넷째'], cards: [{ id: 'f1', text: '아빠: 주말에 어디 갈까?' }, { id: 'f2', text: '동생: 나는 놀이터! 형은?' }, { id: 'f3', text: '나: 나는 도서관에 가고 싶어.' }, { id: 'f4', text: '아빠: 그럼 둘 다 가 보자.' }] }, target: { order: ['f1', 'f2', 'f3', 'f4'] }, difficulty: 0.3,
                  conclude: '동생이 "형은?" 하고 물어서 내 차례가 되었어요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 말하고 싶을 때 차례 기다리기', minutes: 13, tool: 'emotion',
              teacher: '"하고 싶은 말이 생겼는데 다른 사람이 아직 말하고 있어요. 어떻게 할까요?" 보기를 고르면 결과가 보인다. "잊어버릴까 봐 바로 말해야 해요"라는 학생에게 "손가락 하나를 살짝 접어 두면 잊지 않아요"라고 기다리는 방법을 알려 준다. 둘째 문항은 두 사람이 동시에 말을 시작한 경우다. "더 크게 말하면 차례가 정해질까요?"라고 묻는다.',
              task: '상황을 읽고 말차례를 지키려면 어떻게 할지 골라, 그 결과를 봐요.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '동생이 그림 이야기를 하는데 나도 할 말이 생겼어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '나', situation: '동생이 그림 이야기를 하는 중에 나도 할 말이 생각났어요.', choices: [{ id: 'wait', text: '손가락을 접어 두고 기다려요', result: '동생 이야기도, 내 이야기도 잘 들려요', mood: '편안함' }, { id: 'cut', text: '"내 얘기 먼저!" 하고 끼어들어요', result: '동생이 하던 말을 잊어버려요', mood: '속상함', why: '말이 끊긴 동생의 마음을 떠올려 봐요.' }] }, target: { choice: 'wait' }, difficulty: 0.1 },
                { prompt: '전화에서 나와 할머니가 동시에 말을 시작했어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '나와 할머니', situation: '전화로 나와 할머니가 동시에 "있잖아…" 하고 말을 시작했어요.', choices: [{ id: 'loud', text: '더 크게 말해요', result: '둘 다 무슨 말인지 못 들어요', mood: '화남', why: '목소리를 키우면 차례가 정해질까요?' }, { id: 'yield', text: '"할머니 먼저 말씀하세요" 해요', result: '할머니 말씀을 다 듣고 내 말도 해요', mood: '고마움' }, { id: 'hang', text: '전화를 끊어요', result: '아무 이야기도 나누지 못해요', mood: '속상함', why: '끊으면 이야기를 나눌 수 있을까요?' }] }, target: { choice: 'yield' }, difficulty: 0.2,
                  levels: { easy: { toolOptions: { choices: [{ id: 'loud', text: '더 크게 말해요', result: '둘 다 무슨 말인지 못 들어요', mood: '화남', why: '목소리를 키우면 차례가 정해질까요?' }, { id: 'yield', text: '"할머니 먼저 말씀하세요" 해요', result: '할머니 말씀을 다 듣고 내 말도 해요', mood: '고마움' }] } } } },
                { prompt: '선생님이 설명하시는데 궁금한 것이 생겼어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '나', situation: '선생님이 놀이 방법을 설명하시는 중에 궁금한 것이 생겼어요.', choices: [{ id: 'shout', text: '자리에서 "선생님!" 하고 불러요', result: '설명이 끊겨 친구들도 못 들어요', mood: '걱정', why: '설명이 끊기면 친구들은 어떻게 될까요?' }, { id: 'hand', text: '설명이 끝나면 손을 들어요', result: '선생님이 내 질문을 듣고 답해 주세요', mood: '기쁨' }, { id: 'quiet', text: '궁금해도 꾹 참고 묻지 않아요', result: '놀이 방법을 몰라 헤매요', mood: '걱정', why: '묻지 않으면 궁금한 것이 풀릴까요?' }] }, target: { choice: 'hand' }, difficulty: 0.25,
                  conclude: '말차례를 기다리는 것은 묻지 않는 것이 아니에요. 끝날 때까지 기다렸다가 말해요.' },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"오늘 집에 가서 누구와 이야기할 때 차례를 기다려 볼 건가요?" 두세 명의 대답을 듣는다. 출구 1번에서 둘째·셋째 카드를 바꾼 학생에게는 대답하는 말을 찾는 방법("물으면 대답해요")을 다음 시간에 다시 짚는다. 2번에서 "꾹 참고 묻지 않아요"를 고른 학생은 기다리기와 참기를 헷갈린 것이다.',
          exitTicket: [
            { type: 'tool', tool: 'story', options: { mode: 'order', slots: ['첫째', '둘째', '셋째'], cards: [{ id: 'x1', text: '하윤: 너는 무슨 과일 좋아해?' }, { id: 'x2', text: '준호: 나는 수박! 너는?' }, { id: 'x3', text: '하윤: 나는 포도가 좋아.' }] }, prompt: '쉬는 시간 대화예요. 차례대로 놓아 보세요.', target: { order: ['x1', 'x2', 'x3'] }, difficulty: 0.15 },
            { type: 'choice', prompt: '친구가 말하는 중에 할 말이 생기면 어떻게 할까요?', options: ['바로 끼어들어요', '친구 말이 끝나면 말해요', '꾹 참고 말하지 않아요'], answer: 1, difficulty: 0.15, explain: '친구 말이 끝날 때까지 기다렸다가 내 차례에 말해요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '누구 차례일까요?',
        items: [
          { type: 'table', prompt: '전화 대화를 차례대로 1, 2, 3을 쓰세요.', columns: ['대화', '차례'], cells: [['민지: 지우야, 나 민지야.', ''], ['지우: 여보세요?', ''], ['지우: 민지구나! 무슨 일이야?', '']] },
          { type: 'choice', prompt: '두 사람이 동시에 말을 시작했을 때 알맞은 말에 ○ 하세요.', options: ['"내가 먼저야!"', '"먼저 말해."', '"조용히 해!"'], answer: '"먼저 말해."' },
          { type: 'blank', prompt: '전화를 끊기 전에 할 말을 쓰세요.', text: '이제 밥 먹으러 갈게. ______.', answer: '안녕 (안녕히 계세요)' },
          { type: 'short', prompt: '친구가 말하는 중에 할 말이 생각나면 잊지 않으려고 어떻게 할 수 있을지 쓰세요.' },
        ],
        easy: {
          note: '물으면 대답해요. 대답하는 말이 그다음이에요.',
          items: [
            { type: 'choice', prompt: '"여보세요?" 다음에 올 말에 ○ 하세요.', options: ['"지우야, 나 민지야."', '"안녕, 끊을게."'], answer: '"지우야, 나 민지야."' },
            { type: 'choice', prompt: '친구가 말할 때 나는 어떻게 할까요?', options: ['끝까지 기다려요', '바로 말해요'], answer: '끝까지 기다려요' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '할머니 먼저 ______.', answer: '말씀하세요' },
            { type: 'draw', prompt: '전화로 이야기하는 내 모습을 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '차례 맞추기는 맞게 놓은 카드에 초록 테두리가 생기고, 전화 문항은 카드 세 장이에요. 고르기 문항의 보기도 두 개로 줄어요.',
        base: '카드를 모두 놓은 뒤 확인해요.',
        challenge: '더 해 보기(셋이 나눈 대화)까지 풀고, 누가 누구에게 차례를 넘겼는지 짝에게 말해요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 기다리기를 "말하지 않기"로 안다 → 끝날 때까지 기다렸다가 말하는 것이라고 선생님 설명 문항으로 짚는다. ② 전화에서 건 사람이 먼저 말한다고 여긴다 → 받는 사람이 "여보세요?"로 먼저 말한다. ③ 동시에 말하면 큰 목소리가 이긴다고 생각한다(목소리 크기 오개념) → 양보하는 말이 차례를 정한다. 활동 2의 보기를 고르면 결과가 바로 보이므로, 고르기 전에 "그러면 어떻게 될까요?"를 먼저 묻는다.',
    }),

    // ───────────────────────── 6. 확장: 동물 친구들의 대화 바로잡기 ─────────────────────────
    L(6, {
      title: '숲속 동물들의 대화에서 말차례 바로잡기',
      objective: '말차례를 지키지 않은 동물 인물의 대화를 읽고, 차례를 지키는 말로 바꾸어 넣고 역할 놀이로 말해 볼 수 있다.',
      standards: TALK,
      illustration: ART('a rabbit, a turtle and a squirrel sitting on tree stumps in a forest, taking turns to talk with speech bubbles', [
        { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 140, y: 50 }, { motif: 'mountain', x: 240, y: 200, s: 0.9 },
        { motif: 'hills', y: 214 }, { motif: 'tree', x: 80, y: 218 }, { motif: 'tree', x: 400, y: 220, color: 'mint' }, { motif: 'leaf', x: 300, y: 232 },
        { motif: 'text', x: 240, y: 140, text: '내 말 좀 들어 줘!', size: 24 },
      ]),
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '교사가 짧은 이야기를 들려준다. "숲속에서 거북이가 \'나는 어제…\' 하고 말을 꺼내자 토끼가 \'나 달리기 일등 했어!\' 하고 말을 가로챘어요. 거북이 마음은 어땠을까요?" 대답을 들은 뒤 시연 단추로 토끼의 말풍선이 차례를 지키는 말로 바뀌는 모습을 보여 준다. "오늘은 동물 친구들의 대화를 바로잡는 말 의사가 되어 봐요."',
          student: '말을 가로챈 토끼에게 어떤 말을 해 주고 싶나요?',
          demo: { tool: 'story', options: { mode: 'fill', shuffle: false, cards: [{ id: 'ok', text: '거북아, 어제 무슨 일 있었어' }, { id: 'me', text: '나 일등 했어' }], slots: [{ id: 'b1', who: '토끼', motif: 'leaf', label: '___?' }] }, sequence: [{ fill: { b1: 'ok' } }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 동물 친구의 말풍선 바꾸기', minutes: 13, tool: 'story',
              teacher: '"이 자리에서 말차례를 지키려면 무슨 말을 하면 좋을까요?" 말풍선 앞 인물의 말을 먼저 소리 내어 읽어 준다. 다람쥐 문항에서 "나도, 나도!"를 넣은 학생에게 "다람쥐 말이 끝났나요?"라고 되묻는다. 바꾼 말을 넣은 뒤 짝과 그 인물이 되어 소리 내어 읽게 한다.',
              task: '말차례를 지키지 않은 동물 친구의 말풍선에, 차례를 지키는 알맞은 말을 넣어요.',
              levels: { easy: HELP, base: {}, challenge: {} },
              items: [
                { prompt: '거북이가 말을 꺼냈어요. 토끼가 할 알맞은 말을 넣어 보세요.', toolOptions: { mode: 'fill', cards: [{ id: 'ask', text: '그래서 어떻게 됐어' }, { id: 'grab', text: '그건 됐고, 내 얘기 들어' }, { id: 'yawn', text: '아, 졸려' }], slots: [{ id: 'b1', who: '거북', motif: 'leaf', label: '나는 어제 연못에서 개구리를 만났어.' }, { id: 'b2', who: '토끼', motif: 'flower', label: '와, 정말? ___?' }] }, target: { fill: { b2: 'ask' } }, difficulty: 0.1,
                  hints: ['토끼는 거북이 이야기를 들은 뒤에 말해요. 거북이 이야기와 이어지는 말을 찾아요.', '넣은 말이 거북이 이야기를 더 듣고 싶은 말인지 다시 읽어 봐요.', '거북이 이야기가 어떻게 되었는지 묻는 말을 넣어요.'] },
                { prompt: '다람쥐가 아직 말하는 중이에요. 곰이 할 알맞은 말을 넣어 보세요.', toolOptions: { mode: 'fill', cards: [{ id: 'wait', text: '다람쥐야, 다 말하면 나도 말할게' }, { id: 'me2', text: '나도, 나도! 내가 할래' }, { id: 'go', text: '나는 갈래' }], slots: [{ id: 'b1', who: '다람쥐', motif: 'tree', label: '내가 도토리를 모으다가 그리고…' }, { id: 'b2', who: '곰', motif: 'mountain', label: '___.' }] }, target: { fill: { b2: 'wait' } }, difficulty: 0.2,
                  hints: ['"그리고…"는 말이 아직 이어진다는 신호예요. 곰이 지금 해야 할 일을 떠올려요.', '넣은 말이 다람쥐 말을 끊는지, 기다리는지 살펴봐요.', '다람쥐가 말을 다 마칠 때까지 기다리겠다는 말을 넣어요.'] },
                { prompt: '여우와 사슴이 함께 말해요. 두 말풍선에 알맞은 말을 넣어 보세요.', toolOptions: { mode: 'fill', cards: [{ id: 'first', text: '사슴아, 너 먼저 말해' }, { id: 'thanks', text: '고마워, 나는 꽃 이야기를 할게' }, { id: 'loud', text: '내가 더 크게 말할 거야' }], slots: [{ id: 'b1', who: '여우', motif: 'tree', label: '어, 우리 둘이 같이 말했네. ___.' }, { id: 'b2', who: '사슴', motif: 'flower', label: '___.' }] }, target: { fill: { b1: 'first', b2: 'thanks' } }, difficulty: 0.25,
                  hints: ['두 동물이 동시에 말을 시작했어요. 한 사람이 양보하면 어떻게 될지 떠올려요.', '여우의 말과 사슴의 대답이 서로 이어지는지 다시 읽어 봐요.', '여우가 양보하는 말을 하고, 사슴이 고맙다고 대답해요.'],
                  conclude: '한 사람이 양보하면 두 사람 말이 모두 잘 들려요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 잘못된 모습에 고칠 말 잇기', minutes: 13, tool: 'mindmap',
              teacher: '"이 동물에게 어떤 말을 해 주면 다음에는 말차례를 지킬까요?" 가지마다 잘못된 모습을 먼저 읽어 준다. "목소리를 크게 해"를 고른 학생에게 "목소리가 크면 차례가 지켜질까요?"라고 묻는다. 마지막 문항은 모둠이 동물 역할을 맡아 고친 말로 다시 대화해 보는 역할 놀이다.',
              task: '말차례를 지키지 않은 모습마다, 고칠 때 해 줄 알맞은 말을 이어요.',
              levels: { easy: { live: true }, base: {}, challenge: {} },
              items: [
                { prompt: '잘못된 모습마다 고칠 말을 이어 보세요.', toolOptions: { mode: 'match', topic: '말 의사', slots: [{ id: 'cut', label: '토끼가 말을 가로채요' }, { id: 'long', label: '곰이 혼자서만 오래 말해요' }], cards: [{ id: 'end', text: '친구 말이 끝나면 말해요' }, { id: 'pass', text: '친구에게도 차례를 줘요' }, { id: 'loud', text: '목소리를 더 크게 해요' }] }, target: { match: { cut: 'end', long: 'pass' } }, difficulty: 0.15 },
                { prompt: '잘못된 모습마다 고칠 말을 이어 보세요.', toolOptions: { mode: 'match', topic: '말 의사', slots: [{ id: 'away', label: '여우가 말하는 친구에게 등을 돌려요' }, { id: 'both', label: '두 친구가 한꺼번에 말해요' }], cards: [{ id: 'look', text: '말하는 친구를 바라봐요' }, { id: 'yield', text: '"너 먼저 말해" 하고 양보해요' }, { id: 'run', text: '얼른 자리를 떠나요' }] }, target: { match: { away: 'look', both: 'yield' } }, difficulty: 0.2,
                  levels: { challenge: { prompt: '잘못된 모습 세 가지마다 고칠 말을 이어 보세요.', toolOptions: { slots: [{ id: 'away', label: '여우가 말하는 친구에게 등을 돌려요' }, { id: 'both', label: '두 친구가 한꺼번에 말해요' }, { id: 'more', label: '"그리고…" 중에 끼어들어요' }], cards: [{ id: 'look', text: '말하는 친구를 바라봐요' }, { id: 'yield', text: '"너 먼저 말해" 하고 양보해요' }, { id: 'wait', text: '말이 이어지면 조금 더 기다려요' }, { id: 'run', text: '얼른 자리를 떠나요' }] }, target: { match: { away: 'look', both: 'yield', more: 'wait' } } } } },
                { prompt: '더 해 보기: 말차례를 지킨 동물을 모두 골라 보세요.', extra: true, toolOptions: { mode: 'pick', topic: '말차례 일등', cards: [{ id: 'deer', text: '사슴: 다 듣고 "나도 그래" 해요' }, { id: 'fox', text: '여우: "다음은 곰 차례야" 해요' }, { id: 'rab', text: '토끼: 친구 말 위에 노래를 불러요' }, { id: 'bear', text: '곰: 듣는 동안 고개를 끄덕여요' }] }, target: { pick: ['deer', 'fox', 'bear'] }, difficulty: 0.3 },
                { prompt: '모둠 친구와 동물 역할을 나누어, 고친 말로 다시 대화해 보세요.', free: true, talk: true },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"동물 친구들에게 해 준 말 가운데 나에게도 필요한 말은 무엇인가요?" 한두 명의 대답을 듣고 칠판에 모은다. 출구 1번에서 "더 크게 말해"를 고른 학생은 목소리 크기 오개념이 남은 것이니 다음 시간에 다시 살핀다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '말 의사', slots: [{ id: 'mid', label: '오리가 친구 말 중간에 끼어들어요' }], cards: [{ id: 'end', text: '친구 말이 끝날 때까지 기다려요' }, { id: 'big', text: '더 크게 말해요' }] }, prompt: '오리에게 해 줄 알맞은 말을 이어 보세요.', target: { match: { mid: 'end' } }, difficulty: 0.15 },
            { type: 'choice', prompt: '두 친구가 한꺼번에 말을 시작했어요. 알맞은 말은 무엇일까요?', options: ['"내가 먼저야!"', '"너 먼저 말해."', '"말하지 마!"'], answer: 1, difficulty: 0.1, explain: '한 사람이 양보하면 두 사람 말을 모두 들을 수 있어요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '말 의사가 되어요',
        items: [
          { type: 'choice', prompt: '거북이 말을 가로챈 토끼에게 해 줄 말에 ○ 하세요.', options: ['"더 빨리 말해."', '"거북이 말이 끝나면 말해."', '"조용히 가."'], answer: '"거북이 말이 끝나면 말해."' },
          { type: 'blank', prompt: '여우가 양보하는 말을 쓰세요.', text: '사슴아, 너 ______ 말해.', answer: '먼저' },
          { type: 'check', prompt: '말차례를 지킨 모습을 모두 골라 ✓ 하세요.', options: ['다 듣고 "나도 그래" 해요', '친구 말 위에 노래를 불러요', '"다음은 곰 차례야" 해요', '듣는 동안 고개를 끄덕여요'], answer: '다 듣고 "나도 그래" 해요, "다음은 곰 차례야" 해요, 듣는 동안 고개를 끄덕여요' },
          { type: 'draw', prompt: '말차례를 지키며 이야기하는 동물 친구들을 그리고, 말풍선에 할 말을 쓰세요.' },
        ],
        easy: {
          note: '"친구 말이 끝났나요?"를 먼저 생각해요.',
          items: [
            { type: 'choice', prompt: '토끼에게 해 줄 말에 ○ 하세요.', options: ['"거북이 말이 끝나면 말해."', '"더 크게 말해."'], answer: '"거북이 말이 끝나면 말해."' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '너 ______ 말해.', answer: '먼저' },
            { type: 'choice', prompt: '말차례를 지킨 동물에 ○ 하세요.', options: ['다 듣고 말한 사슴', '노래로 끼어든 토끼'], answer: '다 듣고 말한 사슴' },
            { type: 'draw', prompt: '동물 친구들이 이야기하는 모습을 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '말풍선 넣기와 잇기에서 맞게 넣은 카드에 초록 테두리가 생기고, 틀리면 까닭을 듣고 되돌아와요.',
        base: '말을 모두 넣은 뒤 확인해요. 넣은 말을 짝과 소리 내어 읽어 봐요.',
        challenge: '잇기 둘째 문항에 "그리고…" 중에 끼어드는 모습이 더 나오고, 더 해 보기(말차례 일등 고르기)까지 풀어요.',
      },
      teacherNotes: '이 차시는 인물(동물)의 잘못을 바로잡는 차시라, 친구의 실수를 놀리는 말로 번지지 않게 "말 의사는 고칠 말을 친절하게 해 줘요"라고 미리 약속한다. 자주 보이는 어려움: ① 끼어드는 말 가운데 "나도, 나도!"처럼 반가운 말은 괜찮다고 여긴다 → 말이 끝났는지가 기준이다. ② 고칠 말로 "더 크게 말해"를 고른다(목소리 크기 오개념). ③ 역할 놀이에서 고친 말을 외워 읽기만 한다 → 상대 말을 듣고 대답하게 한다.',
    }),

    // ───────────────────────── 7. 바라보며 듣고 되풀이하기 ─────────────────────────
    L(7, {
      title: '말하는 친구를 바라보고 들은 말 되풀이하기',
      objective: '말하는 사람을 바라보고 몸을 돌려 듣는 자세를 고르고, 들은 말을 짧게 되풀이하는 말을 넣어 대화를 이을 수 있다.',
      standards: TALK,
      illustration: ART('a child turning their whole body toward a speaking friend and listening with bright eyes, in a cozy classroom reading corner', [
        { motif: 'sun', x: 404, y: 58, s: 0.8 }, { motif: 'cloud', x: 120, y: 52 }, { motif: 'hills', y: 208 },
        { motif: 'house', x: 110, y: 216 }, { motif: 'tree', x: 380, y: 216 }, { motif: 'flower', x: 250, y: 230 },
        { motif: 'text', x: 240, y: 140, text: '바다에 갔구나!', size: 24 },
      ]),
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '교사가 창밖을 보며 학생 이야기를 듣는 흉내를 낸 뒤 "선생님이 잘 듣고 있는 것 같나요?"라고 묻는다. 이번에는 몸을 돌려 눈을 맞추고 고개를 끄덕이며 듣는다. "무엇이 달라졌나요?" 대답을 들은 뒤 시연 단추로 "주말에 바다에 갔어" 하는 말에 "바다에 갔구나!" 하고 되풀이하는 말풍선을 보여 준다. "들은 말을 짧게 다시 말해 주면 친구는 내가 잘 들었다는 것을 알아요."',
          student: '친구 이야기를 잘 듣고 있다는 것을 어떻게 보여 줄까요?',
          demo: { tool: 'story', options: { mode: 'fill', shuffle: false, cards: [{ id: 'sea', text: '바다에 갔구나' }, { id: 'hm', text: '음' }], slots: [{ id: 'b1', who: '서준', motif: 'sun', label: '주말에 바다에 갔어.' }, { id: 'b2', who: '나', motif: 'flower', label: '___!' }] }, sequence: [{ fill: { b2: 'sea' } }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 잘 듣는 자세 고르기', minutes: 12, tool: 'mindmap',
              teacher: '카드를 놓기 전에 모두 일어나 카드의 자세를 직접 해 본다. "고개만 끄덕이고 다른 생각을 하면 잘 듣는 걸까요?" 셋째 문항 예상에서 "네"를 고른 학생에게 "그러면 친구가 한 말을 다시 말할 수 있을까요?"라고 되묻고, 듣는 척과 정말 듣기를 가른다.',
              task: '듣는 모습 카드를 잘 듣는 자세와 그렇지 않은 자세로 나누어요.',
              levels: { easy: HELP, base: {}, challenge: {} },
              items: [
                { prompt: '잘 듣는 자세와 그렇지 않은 자세로 나누어 보세요.', toolOptions: { topic: '듣는 자세', slots: [{ id: 'good', label: '잘 듣는 자세' }, { id: 'bad', label: '아닌 자세' }], cards: [{ id: 'eyes', text: '말하는 친구를 바라봐요' }, { id: 'turn', text: '몸을 친구 쪽으로 돌려요' }, { id: 'pen', text: '연필을 빙빙 돌려요' }, { id: 'win', text: '창밖을 봐요' }] }, target: { sort: { good: ['eyes', 'turn'], bad: ['pen', 'win'] } }, difficulty: 0.1,
                  levels: { easy: { prompt: '두 자세를 잘 듣는 자세와 아닌 자세로 나누어 보세요.', toolOptions: { cards: [{ id: 'eyes', text: '말하는 친구를 바라봐요' }, { id: 'win', text: '창밖을 봐요' }] }, target: { sort: { good: ['eyes'], bad: ['win'] } } } } },
                { prompt: '모둠 친구가 발표해요. 잘 듣는 모습만 골라 보세요.', toolOptions: { mode: 'pick', topic: '발표 듣기', cards: [{ id: 'nod', text: '고개를 끄덕여요' }, { id: 'hands', text: '손을 무릎에 두어요' }, { id: 'chat', text: '옆 친구와 속닥여요' }, { id: 'draw', text: '공책에 낙서해요' }] }, target: { pick: ['nod', 'hands'] }, difficulty: 0.15,
                  levels: { challenge: { toolOptions: { cards: [{ id: 'nod', text: '고개를 끄덕여요' }, { id: 'hands', text: '손을 무릎에 두어요' }, { id: 'chat', text: '옆 친구와 속닥여요' }, { id: 'draw', text: '공책에 낙서해요' }, { id: 'ready', text: '내 차례에 할 말만 연습해요' }] } } } },
                { prompt: '준호는 고개를 끄덕이지만 다른 생각을 해요. 준호를 알맞은 쪽에 넣어 보세요.', toolOptions: { topic: '준호의 듣기', slots: [{ id: 'good', label: '정말 들어요' }, { id: 'fake', label: '듣는 척만 해요' }], cards: [{ id: 'fake1', text: '끄덕이며 딴생각해요' }, { id: 'again', text: '들은 말을 다시 말해요' }, { id: 'askback', text: '모르면 "다시 말해 줄래?" 해요' }] }, target: { sort: { good: ['again', 'askback'], fake: ['fake1'] } }, difficulty: 0.3,
                  predict: { q: '고개만 끄덕이면 잘 듣는 걸까요?', options: ['네', '들은 말을 알아야 해요'], answer: 1 },
                  conclude: '정말 들었는지는 들은 말을 다시 말할 수 있는지로 알 수 있어요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 들은 말 되풀이하기', minutes: 14, tool: 'story',
              teacher: '"친구가 한 말 가운데 가장 중요한 낱말은 무엇일까요?" 앞 말풍선을 읽고 중요한 낱말에 손뼉을 치게 한 뒤 말을 넣게 한다. 친구 말과 다른 낱말(산·학교)을 넣은 학생에게 "서준이가 정말 그렇게 말했나요?"라고 되묻는다. 마지막 문항은 짝과 직접 해 본다. 한 사람이 주말 이야기를 한 줄 하면 짝이 되풀이하고, 서로 바꾼다.',
              task: '친구가 한 말을 짧게 되풀이하는 말을 말풍선에 넣어요.',
              levels: { easy: HELP, base: {}, challenge: {} },
              items: [
                { prompt: '민지 말을 되풀이하는 말을 넣어 보세요.', toolOptions: { mode: 'fill', cards: [{ id: 'cat', text: '고양이를 키우는구나' }, { id: 'dog', text: '강아지를 키우는구나' }, { id: 'no', text: '그래서 뭐' }], slots: [{ id: 'b1', who: '민지', motif: 'house', label: '우리 집에는 고양이가 있어.' }, { id: 'b2', who: '나', motif: 'flower', label: '___!' }] }, target: { fill: { b2: 'cat' } }, difficulty: 0.1,
                  hints: ['민지가 한 말을 다시 읽고, 가장 중요한 낱말에 손뼉을 쳐 봐요.', '넣은 말이 민지가 한 말과 같은 내용인지 견주어 봐요.', '민지가 말한 동물 이름이 들어 있는 말을 넣어요.'] },
                { prompt: '하윤이 말을 되풀이하는 말을 넣어 보세요.', toolOptions: { mode: 'fill', cards: [{ id: 'red', text: '빨간색을 좋아하는구나' }, { id: 'blue', text: '파란색을 좋아하는구나' }, { id: 'me', text: '나는 노란색' }], slots: [{ id: 'b1', who: '하윤', motif: 'flower', label: '나는 빨간색이 제일 좋아.' }, { id: 'b2', who: '나', motif: 'sun', label: '___.' }] }, target: { fill: { b2: 'red' } }, difficulty: 0.15,
                  hints: ['하윤이가 한 말을 다시 읽고, 가장 중요한 낱말을 찾아봐요.', '넣은 말에 하윤이가 말한 색이 들어 있는지 견주어 봐요.', '하윤이가 말한 색 이름을 그대로 되풀이한 말을 넣어요.'] },
                { prompt: '서준이 말을 되풀이하고, 내 말도 이어서 넣어 보세요.', toolOptions: { mode: 'fill', cards: [{ id: 'swing', text: '그네를 탔구나' }, { id: 'mine', text: '나는 미끄럼틀을 탔어' }, { id: 'sleep', text: '집에서 잤구나' }], slots: [{ id: 'b1', who: '서준', motif: 'tree', label: '나는 놀이터에서 그네를 탔어.' }, { id: 'b2', who: '나', motif: 'flower', label: '___! ' }, { id: 'b3', who: '나', motif: 'flower', label: '___.' }] }, target: { fill: { b2: 'swing', b3: 'mine' } }, difficulty: 0.25,
                  hints: ['먼저 들은 말을 되풀이하고, 그다음에 내 이야기를 해요.', '첫째 말풍선이 서준이 말과 같은 내용인지 견주어 봐요.', '첫째에는 서준이가 탄 놀이 기구를, 둘째에는 내가 탄 것을 넣어요.'],
                  conclude: '들은 말을 먼저 되풀이하고 내 이야기를 이으면 대화가 이어져요.' },
                { prompt: '짝과 주말 이야기를 한 줄씩 하고, 짝의 말을 되풀이해 보세요.', free: true, talk: true },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"오늘 짝이 한 이야기를 되풀이해 줄 사람?" 두세 명이 짝의 이야기를 한 줄로 되풀이한다. 출구 1번에서 듣는 척 카드를 잘 듣는 쪽에 넣은 학생은 다음 시간 짝 활동에서 되풀이를 먼저 시켜 본다.',
          exitTicket: [
            { type: 'tool', tool: 'story', options: { mode: 'fill', cards: [{ id: 'rain', text: '비가 와서 우산을 썼구나' }, { id: 'snow', text: '눈이 와서 썰매를 탔구나' }], slots: [{ id: 'b1', who: '지우', motif: 'cloud', label: '아침에 비가 와서 우산을 썼어.' }, { id: 'b2', who: '나', motif: 'flower', label: '___.' }] }, prompt: '지우 말을 되풀이하는 말을 넣어 보세요.', target: { fill: { b2: 'rain' } }, difficulty: 0.15 },
            { type: 'choice', prompt: '친구 말을 정말 잘 들은 친구는 누구일까요?', options: ['고개만 끄덕인 친구', '들은 말을 다시 말한 친구', '창밖을 본 친구'], answer: 1, difficulty: 0.15, explain: '들은 말을 다시 말할 수 있으면 정말 잘 들은 거예요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '바라보며 들어요',
        items: [
          { type: 'check', prompt: '잘 듣는 자세를 모두 골라 ✓ 하세요.', options: ['말하는 친구를 바라봐요', '연필을 돌려요', '몸을 친구 쪽으로 돌려요', '고개를 끄덕여요'], answer: '말하는 친구를 바라봐요, 몸을 친구 쪽으로 돌려요, 고개를 끄덕여요' },
          { type: 'blank', prompt: '친구 말을 되풀이하는 말을 쓰세요.', text: '친구: 나는 어제 할머니 댁에 갔어. → 나: 할머니 댁에 ______!', answer: '갔구나' },
          { type: 'choice', prompt: '듣는 척만 하는 모습에 ○ 하세요.', options: ['들은 말을 다시 말해요', '끄덕이며 딴생각해요', '"다시 말해 줄래?" 해요'], answer: '끄덕이며 딴생각해요' },
          { type: 'short', prompt: '오늘 짝이 한 이야기를 한 줄로 쓰세요.' },
        ],
        easy: {
          note: '친구를 바라보고, 들은 말을 다시 말해요.',
          items: [
            { type: 'choice', prompt: '잘 듣는 자세에 ○ 하세요.', options: ['친구를 바라봐요', '창밖을 봐요'], answer: '친구를 바라봐요' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '친구: 고양이가 있어. → 나: 고양이가 ______!', answer: '있구나' },
            { type: 'choice', prompt: '잘 들은 친구에 ○ 하세요.', options: ['들은 말을 다시 말해요', '딴생각해요'], answer: '들은 말을 다시 말해요' },
            { type: 'draw', prompt: '친구 이야기를 잘 듣는 내 모습을 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '자세 나누기 첫 문항은 카드 두 장이고, 맞게 넣으면 초록 테두리가 생겨요. 되풀이 말 넣기도 틀리면 까닭을 듣고 되돌아와요.',
        base: '카드와 말을 모두 넣은 뒤 확인해요.',
        challenge: '발표 듣기 문항에 "내 차례에 할 말만 연습해요" 같은 헷갈리는 카드가 더 나와요. 짝 활동에서 되풀이한 뒤 질문 하나를 더 붙여 봐요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 고개만 끄덕이면 잘 듣는 것이라 여긴다(듣는 척 오개념) → 들은 말을 다시 말할 수 있는지로 가른다. ② 되풀이할 때 친구 말과 다른 낱말로 바꾼다 → 친구 말에서 가장 중요한 낱말에 손뼉을 치게 한다. ③ 되풀이만 하고 대화를 잇지 못한다 → 다음 시간에 "되풀이 + 내 이야기" 차례를 연습한다. 짝 활동에서 가정사 이야기가 나오면 "말하고 싶은 것만 말해요"라고 미리 알려 준다.',
    }),

    // ───────────────────────── 8. 연습: 묻고, 되풀이하고, 잇기 ─────────────────────────
    L(8, {
      title: '짝에게 묻고 되풀이한 뒤 내 이야기 잇기',
      objective: '짝 대화를 묻기→대답→되풀이→내 이야기 차례로 놓고, 친구 말을 되풀이한 뒤 내 이야기를 잇는 말을 골라 짝과 나눌 수 있다.',
      standards: TALK,
      illustration: ART('two children sitting face to face interviewing each other with paper microphones in a bright classroom', [
        { motif: 'sun', x: 72, y: 58, s: 0.8 }, { motif: 'cloud', x: 330, y: 50 }, { motif: 'hills', y: 208 },
        { motif: 'tree', x: 400, y: 216 }, { motif: 'flower', x: 120, y: 228 }, { motif: 'star', x: 250, y: 90, color: 'buttercup' },
        { motif: 'text', x: 240, y: 146, text: '묻고 → 듣고 → 되풀이 → 잇기', size: 20 },
      ]),
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '"지난 시간에 배운 것은 친구 말을 되풀이하기였어요. 되풀이한 다음에는 무엇을 하면 좋을까요?" 교사가 학생에게 "아침에 무엇을 먹었니?"라고 묻고, 대답을 되풀이한 뒤 "선생님은 빵을 먹었어"라고 잇는다. 시연 단추로 네 장면이 차례대로 놓이는 모습을 보여 주고 칠판에 \'묻고 → 듣고 → 되풀이 → 잇기\'를 쓴다.',
          student: '짝에게 무엇을 물어보고 싶나요?',
          demo: { tool: 'story', options: { mode: 'order', shuffle: false, slots: ['묻기', '대답', '되풀이', '잇기'], cards: [{ id: 'q', text: '선생님: 아침에 뭐 먹었니?' }, { id: 'a', text: '하윤: 밥이랑 김을 먹었어요.' }, { id: 'r', text: '선생님: 밥이랑 김을 먹었구나.' }, { id: 'm', text: '선생님: 선생님은 빵을 먹었어.' }] }, sequence: [{ order: ['q', 'a', 'r', 'm'] }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 짝 대화 차례 맞추기', minutes: 12, tool: 'story',
              teacher: '"되풀이하는 말은 대답보다 먼저 올 수 있을까요?" 카드를 놓은 뒤 자리 이름(묻기·대답·되풀이·잇기)과 카드가 맞는지 함께 읽어 본다. 되풀이와 잇기를 바꾼 학생에게 "내 이야기부터 하면 친구는 내가 잘 들었다는 것을 알까요?"라고 묻는다.',
              task: '짝 대화 카드를 묻기, 대답, 되풀이, 잇기 차례대로 놓아요.',
              levels: { easy: HELP, base: {}, challenge: {} },
              items: [
                { prompt: '좋아하는 음식 이야기예요. 차례대로 놓아 보세요.', toolOptions: { mode: 'order', slots: ['묻기', '대답', '되풀이', '잇기'], cards: [{ id: 'q', text: '준호: 무슨 음식 좋아해?' }, { id: 'a', text: '지우: 나는 떡볶이!' }, { id: 'r', text: '준호: 떡볶이를 좋아하는구나.' }, { id: 'm', text: '준호: 나는 김밥이 좋아.' }] }, target: { order: ['q', 'a', 'r', 'm'] }, difficulty: 0.15,
                  levels: { easy: { prompt: '좋아하는 음식 이야기예요. 세 장을 차례대로 놓아 보세요.', toolOptions: { slots: ['묻기', '대답', '되풀이'], cards: [{ id: 'q', text: '준호: 무슨 음식 좋아해?' }, { id: 'a', text: '지우: 나는 떡볶이!' }, { id: 'r', text: '준호: 떡볶이를 좋아하는구나.' }] }, target: { order: ['q', 'a', 'r'] } } } },
                { prompt: '아침에 본 것 이야기예요. 차례대로 놓아 보세요.', toolOptions: { mode: 'order', slots: ['묻기', '대답', '되풀이', '잇기'], cards: [{ id: 'q', text: '민지: 학교 오다가 뭘 봤어?' }, { id: 'a', text: '서준: 길에서 참새를 봤어.' }, { id: 'r', text: '민지: 참새를 봤구나.' }, { id: 'm', text: '민지: 나는 노란 꽃을 봤어.' }] }, target: { order: ['q', 'a', 'r', 'm'] }, difficulty: 0.2 },
                { prompt: '날씨 이야기예요. 차례대로 놓아 보세요.', toolOptions: { mode: 'order', slots: ['묻기', '대답', '되풀이', '잇기'], cards: [{ id: 'q', text: '하윤: 너는 어떤 날씨가 좋아?' }, { id: 'a', text: '준호: 눈 오는 날이 좋아.' }, { id: 'r', text: '하윤: 눈 오는 날이 좋구나.' }, { id: 'm', text: '하윤: 나는 맑은 날이 좋아.' }] }, target: { order: ['q', 'a', 'r', 'm'] }, difficulty: 0.25,
                  levels: { challenge: { prompt: '날씨 이야기예요. 대화와 상관없는 카드는 빼고 차례대로 놓아 보세요.', toolOptions: { cards: [{ id: 'q', text: '하윤: 너는 어떤 날씨가 좋아?' }, { id: 'a', text: '준호: 눈 오는 날이 좋아.' }, { id: 'r', text: '하윤: 눈 오는 날이 좋구나.' }, { id: 'm', text: '하윤: 나는 맑은 날이 좋아.' }, { id: 'x', text: '하윤: 내 필통 예쁘지?' }] } } },
                  conclude: '되풀이는 대답을 들은 다음에, 내 이야기는 되풀이한 다음에 해요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 되풀이하고 잇는 말 고르기', minutes: 14, tool: 'mindmap',
              teacher: '"이 말은 친구 말을 되풀이했나요? 내 이야기도 이었나요?" 두 가지를 손가락 두 개로 세며 따지게 한다. "나는 고양이 좋아"처럼 되풀이 없이 바로 제 이야기를 하는 카드를 고른 학생에게 "친구는 내가 자기 말을 들었다고 느낄까요?"라고 묻는다. 마지막 문항은 짝 인터뷰다. 질문 카드(좋아하는 놀이·동물·계절)를 하나 뽑아 묻고, 되풀이하고, 내 이야기를 잇는다.',
              task: '친구가 한 말마다, 되풀이하고 내 이야기를 잇는 알맞은 말을 이어요.',
              levels: { easy: { live: true }, base: {}, challenge: {} },
              items: [
                { prompt: '친구 말마다 되풀이하고 잇는 말을 이어 보세요.', toolOptions: { mode: 'match', topic: '되풀이하고 잇기', slots: [{ id: 'dog', label: '"나는 강아지를 키워."' }, { id: 'sum', label: '"나는 여름이 좋아."' }], cards: [{ id: 'rdog', text: '강아지를 키우는구나. 나는 금붕어를 키워.' }, { id: 'rsum', text: '여름이 좋구나. 나는 가을이 좋아.' }, { id: 'self', text: '나는 고양이가 좋아.' }] }, target: { match: { dog: 'rdog', sum: 'rsum' } }, difficulty: 0.15 },
                { prompt: '친구 말마다 되풀이하고 잇는 말을 이어 보세요.', toolOptions: { mode: 'match', topic: '되풀이하고 잇기', slots: [{ id: 'ball', label: '"쉬는 시간에 공놀이 했어."' }, { id: 'book', label: '"어제 그림책을 두 권 읽었어."' }], cards: [{ id: 'rball', text: '공놀이 했구나. 나는 줄넘기 했어.' }, { id: 'rbook', text: '그림책을 두 권 읽었구나. 나는 한 권 읽었어.' }, { id: 'swap', text: '줄넘기 했구나. 나는 공놀이 했어.' }] }, target: { match: { ball: 'rball', book: 'rbook' } }, difficulty: 0.25,
                  hints: ['친구 말에 나온 낱말이 그대로 되풀이된 카드를 찾아요.', '이은 카드의 앞부분이 친구가 한 말과 같은지 다시 견주어 봐요.', '앞부분에 친구가 한 놀이·책 이야기가 그대로 나오는 카드를 이어요.'] },
                { prompt: '더 해 보기: 되풀이하고 잇는 말만 모두 골라 보세요.', extra: true, toolOptions: { mode: 'pick', topic: '잘 이은 말', cards: [{ id: 'g1', text: '"딸기를 먹었구나. 나는 귤을 먹었어."' }, { id: 'g2', text: '"수영을 배우는구나. 나도 배우고 싶어."' }, { id: 'b1', text: '"그건 됐고, 나는 피아노 쳐."' }, { id: 'b2', text: '"응."' }] }, target: { pick: ['g1', 'g2'] }, difficulty: 0.3 },
                { prompt: '짝과 질문 카드 하나를 골라 묻고, 되풀이하고, 내 이야기를 이어 보세요.', free: true, talk: true },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"짝 인터뷰에서 짝이 내 말을 되풀이해 주었을 때 기분이 어땠나요?" 두세 명의 대답을 듣는다. 출구 1번에서 내 이야기를 되풀이보다 앞에 놓은 학생은 다음 시간 짝 활동에서 되풀이를 먼저 하도록 손가락 신호를 정해 준다.',
          exitTicket: [
            { type: 'tool', tool: 'story', options: { mode: 'order', slots: ['묻기', '대답', '되풀이', '잇기'], cards: [{ id: 'q', text: '지우: 무슨 동물이 좋아?' }, { id: 'a', text: '민지: 나는 토끼가 좋아.' }, { id: 'r', text: '지우: 토끼가 좋구나.' }, { id: 'm', text: '지우: 나는 펭귄이 좋아.' }] }, prompt: '동물 이야기예요. 차례대로 놓아 보세요.', target: { order: ['q', 'a', 'r', 'm'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '친구가 "나는 비 오는 날이 좋아."라고 했어요. 가장 알맞은 대답은 무엇일까요?', options: ['"나는 눈이 좋아."', '"비 오는 날이 좋구나. 나는 눈 오는 날이 좋아."', '"그래."'], answer: 1, difficulty: 0.15, explain: '친구 말을 되풀이한 뒤 내 이야기를 이으면 대화가 이어져요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '되풀이하고 이어요',
        items: [
          { type: 'table', prompt: '짝 인터뷰를 쓰세요.', columns: ['내가 물은 말', '짝의 대답', '내가 되풀이한 말'], rows: 1 },
          { type: 'blank', prompt: '되풀이하는 말을 쓰세요.', text: '친구: 나는 수박이 좋아. → 나: 수박이 ______. 나는 참외가 좋아.', answer: '좋구나' },
          { type: 'choice', prompt: '친구 말을 되풀이하고 이은 말에 ○ 하세요.', options: ['"나는 고양이 좋아."', '"강아지를 키우는구나. 나는 금붕어를 키워."', '"응."'], answer: '"강아지를 키우는구나. 나는 금붕어를 키워."' },
          { type: 'short', prompt: '짝에게 묻고 싶은 질문을 하나 쓰세요.' },
        ],
        easy: {
          note: '묻고 → 듣고 → 되풀이 → 잇기 차례를 기억해요.',
          items: [
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '친구: 나는 수박이 좋아. → 나: 수박이 ______.', answer: '좋구나' },
            { type: 'choice', prompt: '대답을 들은 다음에 할 말에 ○ 하세요.', options: ['되풀이하는 말', '내 필통 이야기'], answer: '되풀이하는 말' },
            { type: 'choice', prompt: '되풀이한 말에 ○ 하세요.', options: ['"떡볶이를 좋아하는구나."', '"나는 김밥."'], answer: '"떡볶이를 좋아하는구나."' },
            { type: 'draw', prompt: '짝과 이야기하는 모습을 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '차례 맞추기 첫 문항은 세 장(묻기·대답·되풀이)으로 시작하고, 맞게 놓으면 초록 테두리가 생겨요.',
        base: '네 장을 모두 놓은 뒤 확인해요.',
        challenge: '날씨 문항에 상관없는 카드가 한 장 섞여 나오고, 더 해 보기(잘 이은 말 고르기)까지 풀어요. 짝 인터뷰에서 질문을 하나 더 이어 봐요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 되풀이 없이 바로 자기 이야기를 한다 → "친구는 내가 들었다고 느낄까요?"로 되묻는다. ② 되풀이할 때 친구 말과 내 말을 바꾼다(줄넘기·공놀이 문항) → 친구가 한 낱말에 손뼉을 치며 견준다. ③ 짝 인터뷰에서 질문만 이어 가고 듣지 않는다(듣는 척 오개념) → 되풀이를 반드시 한 번 하고 다음 질문을 하게 한다.',
    }),

    // ───────────────────────── 9. 확장: 안내 말 듣고 되묻기 ─────────────────────────
    L(9, {
      title: '선생님 안내를 듣고 못 들은 것 되묻기',
      objective: '선생님의 안내 말을 듣고 중요한 내용을 고르며, 잘 못 들었을 때 알맞은 말로 되물을 수 있다.',
      standards: TALK,
      illustration: ART('a teacher giving instructions in front of a chalkboard while a child raises a hand to ask again, with crayons and glue on desks', [
        { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 120, y: 52 }, { motif: 'hills', y: 208 },
        { motif: 'house', x: 120, y: 216 }, { motif: 'tree', x: 390, y: 216 }, { motif: 'star', x: 250, y: 96, color: 'sky' },
        { motif: 'text', x: 240, y: 146, text: '다시 말해 주세요', size: 24 },
      ]),
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '교사가 일부러 아주 빠르고 작게 "내일은 색연필과 풀을 가져와요"라고 말한다. "무엇을 가져오라고 했나요?" 못 들었다는 학생이 나오면 "못 들었을 때는 어떻게 하면 좋을까요?"라고 묻는다. 시연 단추로 "다시 말해 주세요" 말풍선을 보여 주고, "되묻기는 잘 들으려는 사람이 하는 말이에요"라고 짚는다.',
          student: '잘 못 들었을 때 어떻게 하나요?',
          demo: { tool: 'story', options: { mode: 'fill', shuffle: false, cards: [{ id: 'again', text: '다시 말해 주세요' }, { id: 'pass', text: '몰라요' }], slots: [{ id: 'b1', who: '나', motif: 'flower', label: '선생님, 잘 못 들었어요. ___.' }] }, sequence: [{ fill: { b1: 'again' } }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 안내 말 듣고 중요한 것 고르기', minutes: 13, tool: 'mindmap',
              teacher: '문항마다 선생님 말을 한 번만 또박또박 읽어 준다. "몇 가지를 말했나요? 손가락으로 세어 봐요." 들은 뒤 손가락을 접으며 세게 한 뒤 고르게 한다. 안내에 없던 물건을 고른 학생에게 "선생님이 그 말을 했나요?"라고 되묻는다. 못 들은 학생이 손을 들면 그 자리에서 되묻는 말을 연습하게 한다.',
              task: '선생님 말을 잘 듣고, 말한 것만 골라 바구니에 넣어요.',
              levels: { easy: HELP, base: {}, challenge: {} },
              items: [
                { prompt: '선생님 말: "내일은 색연필과 풀을 가져와요." 준비물을 골라 보세요.', toolOptions: { mode: 'pick', topic: '내일 준비물', cards: [{ id: 'crayon', text: '색연필' }, { id: 'glue', text: '풀' }, { id: 'ball', text: '공' }, { id: 'cup', text: '물컵' }] }, target: { pick: ['crayon', 'glue'] }, difficulty: 0.1 },
                { prompt: '선생님 말: "운동장에 나갈 때는 모자를 쓰고 물병을 챙겨요." 챙길 것을 골라 보세요.', toolOptions: { mode: 'pick', topic: '운동장 갈 때', cards: [{ id: 'hat', text: '모자' }, { id: 'bottle', text: '물병' }, { id: 'book', text: '동화책' }, { id: 'scissor', text: '색종이' }] }, target: { pick: ['hat', 'bottle'] }, difficulty: 0.15 },
                { prompt: '선생님 말: "점심을 먹은 뒤 손을 씻고, 이를 닦고, 자리에 앉아요." 할 일을 차례대로 놓아 보세요.', toolOptions: { mode: 'order', slots: ['첫째', '둘째', '셋째'], cards: [{ id: 'wash', text: '손 씻기' }, { id: 'brush', text: '이 닦기' }, { id: 'sit', text: '자리에 앉기' }] }, target: { order: ['wash', 'brush', 'sit'] }, difficulty: 0.25,
                  levels: { challenge: { prompt: '선생님 말: "점심을 먹은 뒤 손을 씻고, 이를 닦고, 자리에 앉아요." 말하지 않은 일은 빼고 차례대로 놓아 보세요.', toolOptions: { cards: [{ id: 'wash', text: '손 씻기' }, { id: 'brush', text: '이 닦기' }, { id: 'sit', text: '자리에 앉기' }, { id: 'play', text: '운동장 가기' }] } } },
                  conclude: '안내 말은 들은 차례대로 기억하면 잊지 않아요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 못 들었을 때 되묻기', minutes: 13, tool: 'emotion',
              teacher: '"모르는 척하거나 친구 것을 그냥 따라 하면 어떻게 될까요?" 보기를 고르면 결과가 보인다. 되묻기를 부끄러워하는 학생에게 "되묻는 사람은 잘 들으려는 사람이에요. 선생님은 되묻는 것이 반가워요"라고 말해 준다. 셋째 문항은 친구에게 되묻는 경우다. "무엇을 못 들었는지 말하면 친구가 그 부분만 다시 말해 줘요"라고 짚는다.',
              task: '잘 못 들은 상황을 읽고, 어떻게 할지 골라 결과를 봐요.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '선생님 말을 잘 못 들었어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '나', situation: '선생님이 숙제를 말씀하셨는데 잘 못 들었어요.', choices: [{ id: 'ask', text: '손을 들고 "다시 말해 주세요" 해요', result: '숙제를 바르게 알게 돼요', mood: '편안함' }, { id: 'pretend', text: '아는 척 가만히 있어요', result: '집에 가서 숙제를 몰라 걱정해요', mood: '걱정', why: '아는 척하면 숙제를 알 수 있을까요?' }] }, target: { choice: 'ask' }, difficulty: 0.1 },
                { prompt: '모둠 놀이 방법을 못 들었어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '나', situation: '놀이 방법을 듣는 중에 다른 생각을 해서 못 들었어요.', choices: [{ id: 'copy', text: '친구가 하는 것을 대충 따라 해요', result: '놀이 규칙을 몰라 자꾸 틀려요', mood: '속상함', why: '대충 따라 하면 규칙을 알 수 있을까요?' }, { id: 'ask', text: '"방법을 한 번 더 말해 줄래?" 해요', result: '규칙을 알고 신나게 놀아요', mood: '신남' }, { id: 'quit', text: '놀이를 하지 않아요', result: '혼자 앉아 있어서 심심해요', mood: '슬픔', why: '빠지는 것 말고 할 수 있는 말이 있을까요?' }] }, target: { choice: 'ask' }, difficulty: 0.2,
                  levels: { easy: { toolOptions: { choices: [{ id: 'copy', text: '친구가 하는 것을 대충 따라 해요', result: '놀이 규칙을 몰라 자꾸 틀려요', mood: '속상함', why: '대충 따라 하면 규칙을 알 수 있을까요?' }, { id: 'ask', text: '"방법을 한 번 더 말해 줄래?" 해요', result: '규칙을 알고 신나게 놀아요', mood: '신남' }] } } } },
                { prompt: '친구가 만날 곳을 말했는데 한 낱말만 못 들었어요. 어떻게 물을까요?', toolOptions: { mode: 'branch', who: '나', situation: '지우가 "쉬는 시간에 ○○ 앞에서 만나자"라고 했는데 어디인지 못 들었어요.', choices: [{ id: 'what', text: '"어디 앞이라고 했어?" 하고 물어요', result: '지우가 "도서관 앞"이라고 다시 말해 줘요', mood: '고마움' }, { id: 'all', text: '"뭐라고? 처음부터 다 다시 해" 해요', result: '지우가 긴 말을 다 다시 하느라 힘들어해요', mood: '걱정', why: '못 들은 부분만 물으면 더 쉬울까요?' }, { id: 'guess', text: '아무 데나 가서 기다려요', result: '서로 다른 곳에서 기다려요', mood: '속상함', why: '짐작으로 가면 만날 수 있을까요?' }] }, target: { choice: 'what' }, difficulty: 0.3,
                  conclude: '못 들은 부분만 콕 집어 물으면 친구가 쉽게 다시 말해 줘요.' },
                { prompt: '짝이 일부러 작게 말하면, 알맞은 말로 되물어 보세요.', free: true, talk: true },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"오늘 배운 되묻는 말을 다 함께 말해 볼까요?" 칠판에 "다시 말해 주세요", "○○라고 했어?"를 쓰고 따라 읽는다. 출구 1번은 교사가 한 번만 읽어 준다. 틀린 학생은 들은 것을 손가락으로 세는 방법을 다음 시간에 다시 해 본다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '소풍 준비물', cards: [{ id: 'mat', text: '돗자리' }, { id: 'lunch', text: '도시락' }, { id: 'pencil', text: '연필' }, { id: 'pillow', text: '베개' }] }, prompt: '선생님 말: "소풍 날에는 도시락과 돗자리를 가져와요." 준비물을 골라 보세요.', target: { pick: ['mat', 'lunch'] }, difficulty: 0.15 },
            { type: 'choice', prompt: '친구 말을 잘 못 들었을 때 알맞은 말은 무엇일까요?', options: ['"알았어." 하고 넘어가요', '"다시 말해 줄래?" 하고 물어요', '아무 말도 안 해요'], answer: 1, difficulty: 0.1, explain: '못 들었을 때 되물어야 바르게 알 수 있어요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '듣고 되물어요',
        items: [
          { type: 'check', prompt: '선생님 말을 듣고 준비물에 모두 ✓ 하세요. (선생님이 한 번 읽어 줘요.)', options: ['크레파스', '가위', '줄넘기', '물병'], answer: '교사가 읽어 준 준비물(예: 크레파스, 물병)' },
          { type: 'blank', prompt: '되묻는 말을 완성하세요.', text: '선생님, 잘 못 들었어요. 다시 ______ 주세요.', answer: '말해' },
          { type: 'choice', prompt: '놀이 방법을 못 들었을 때 알맞은 것에 ○ 하세요.', options: ['대충 따라 해요', '한 번 더 말해 달라고 해요', '놀이를 하지 않아요'], answer: '한 번 더 말해 달라고 해요' },
          { type: 'short', prompt: '내가 잘 못 들었을 때 쓸 되묻는 말을 하나 쓰세요.' },
        ],
        easy: {
          note: '들은 것을 손가락으로 세어요. 못 들으면 되물어요.',
          items: [
            { type: 'check', prompt: '선생님이 읽어 주는 준비물에 ✓ 하세요.', options: ['크레파스', '공', '물병'], answer: '교사가 읽어 준 준비물(예: 크레파스, 물병)' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '다시 말해 ______.', answer: '주세요' },
            { type: 'choice', prompt: '못 들었을 때 알맞은 것에 ○ 하세요.', options: ['되물어요', '아는 척해요'], answer: '되물어요' },
            { type: 'draw', prompt: '손을 들고 되묻는 내 모습을 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '준비물 고르기에서 맞게 넣은 카드에 초록 테두리가 생기고, 되묻기 고르기는 보기가 두 개예요.',
        base: '선생님 말을 한 번 듣고 골라요.',
        challenge: '할 일 차례 문항에 안내에 없던 일이 한 장 섞여 나와요. 친구에게 물을 때 못 들은 부분만 집어 묻는 말을 만들어 봐요.',
      },
      teacherNotes: '활동지 1번 준비물은 교사가 그날 실제 준비물로 바꾸어 한 번 읽어 준다. 자주 보이는 어려움: ① 되묻기를 부끄러운 일로 여겨 아는 척한다(듣는 척 오개념) → 되묻기는 잘 들으려는 사람이 하는 일이라고 여러 번 말해 준다. ② 안내에 없던 물건까지 고른다 → 들은 것을 손가락으로 세며 말하게 한다. ③ "처음부터 다시"만 말한다 → 못 들은 낱말 자리만 묻는 말("어디 앞이라고 했어?")을 함께 만들어 본다.',
    }),

    // ───────────────────────── 10. 끝까지 기다리고 다음 사람 알려 주기 ─────────────────────────
    L(10, {
      title: '친구 말 끝까지 기다리고 다음 사람 알려 주기',
      objective: '친구가 말을 마칠 때까지 기다리는 방법을 고르고, 다음에 말할 사람을 이름이나 눈짓으로 알려 줄 수 있다.',
      standards: TALK,
      illustration: ART('three children sitting in a small circle on a rug, one finishing talking and gently pointing an open palm to the next friend', [
        { motif: 'sun', x: 404, y: 56, s: 0.8 }, { motif: 'cloud', x: 110, y: 52 }, { motif: 'hills', y: 208 },
        { motif: 'tree', x: 90, y: 216 }, { motif: 'house', x: 390, y: 218 }, { motif: 'flower', x: 250, y: 230 },
        { motif: 'text', x: 240, y: 144, text: '다음은 하윤이 차례!', size: 24 },
      ]),
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '학생 셋을 앞으로 불러 원으로 앉히고 좋아하는 놀이를 한 사람씩 말하게 한다. 일부러 아무도 다음 사람을 알려 주지 않으면 셋이 머뭇거리거나 동시에 말한다. "왜 헷갈렸을까요?" 대답을 들은 뒤 시연 단추로 "다음은 하윤이 차례!"라는 말풍선을 보여 준다. "말을 마칠 때 다음 친구를 알려 주면 헷갈리지 않아요."',
          student: '세 명이 이야기할 때 다음에 누가 말할지 어떻게 알까요?',
          demo: { tool: 'story', options: { mode: 'fill', shuffle: false, cards: [{ id: 'next', text: '다음은 하윤이 차례' }, { id: 'me', text: '내가 또 할게' }], slots: [{ id: 'b1', who: '서준', motif: 'tree', label: '나는 숨바꼭질이 좋아. ___!' }] }, sequence: [{ fill: { b1: 'next' } }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 끼어들고 싶을 때 기다리기', minutes: 12, tool: 'emotion',
              teacher: '"하고 싶은 말이 생겨서 입이 근질근질할 때 어떻게 참을까요?" 학생들이 아는 방법(손가락 접기, 입술 꼭 다물기, 마음속으로 셋 세기)을 칠판에 모은 뒤 문항을 푼다. 셋째 문항에서 "친구 말이 너무 길어서 끼어들어도 돼요"라는 학생에게 "말이 길면 어떤 신호를 기다리면 될까요?"라고 묻는다.',
              task: '친구 말 중간에 끼어들고 싶은 상황이에요. 끝까지 기다리는 방법을 골라 결과를 봐요.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '준호가 공룡 이야기를 하는데 나도 공룡을 알아요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '나', situation: '준호가 공룡 이야기를 하는데 나도 아는 공룡이 나왔어요.', choices: [{ id: 'mid', text: '"그거 나도 알아!" 하고 끼어들어요', result: '준호가 하던 이야기를 멈춰요', mood: '속상함', why: '알고 있어도 준호 말은 아직 끝나지 않았어요.' }, { id: 'hold', text: '입술을 꼭 다물고 끝까지 들어요', result: '준호 이야기를 다 듣고 내 이야기도 해요', mood: '뿌듯함' }] }, target: { choice: 'hold' }, difficulty: 0.1 },
                { prompt: '모둠에서 하윤이가 천천히 말해요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '나', situation: '하윤이가 천천히 생각하며 말해서 말 사이가 길어요.', choices: [{ id: 'finish', text: '하윤이 말을 내가 대신 끝내요', result: '하윤이가 하려던 말과 달라져요', mood: '속상함', why: '하윤이가 하려던 말은 하윤이만 알아요.' }, { id: 'wait', text: '하윤이가 다 말할 때까지 기다려요', result: '하윤이가 끝까지 말하고 웃어요', mood: '기쁨' }, { id: 'hurry', text: '"빨리 말해!" 하고 재촉해요', result: '하윤이가 더 말하기 어려워해요', mood: '걱정', why: '재촉을 들은 하윤이의 마음을 떠올려 봐요.' }] }, target: { choice: 'wait' }, difficulty: 0.2,
                  levels: { easy: { toolOptions: { choices: [{ id: 'finish', text: '하윤이 말을 내가 대신 끝내요', result: '하윤이가 하려던 말과 달라져요', mood: '속상함', why: '하윤이가 하려던 말은 하윤이만 알아요.' }, { id: 'wait', text: '하윤이가 다 말할 때까지 기다려요', result: '하윤이가 끝까지 말하고 웃어요', mood: '기쁨' }] } } } },
                { prompt: '서준이 이야기가 아주 길어요. 언제 말하면 좋을까요?', toolOptions: { mode: 'branch', who: '나', situation: '서준이가 "그리고… 그리고…" 하며 이야기를 길게 이어 가요.', choices: [{ id: 'now', text: '지루하니까 지금 바로 말해요', result: '서준이 이야기가 중간에 끊겨요', mood: '속상함', why: '"그리고…"는 아직 말이 이어진다는 신호예요.' }, { id: 'end', text: '서준이가 "끝!" 하거나 나를 볼 때 말해요', result: '서준이도 나도 끝까지 말해요', mood: '편안함' }, { id: 'leave', text: '자리를 떠나요', result: '서준이가 혼자 남아 서운해요', mood: '슬픔', why: '자리를 떠나면 서준이는 어떤 마음일까요?' }] }, target: { choice: 'end' }, difficulty: 0.3,
                  conclude: '말이 길어도 끝났다는 신호(끝 말, 나를 보는 눈)를 기다려요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 다음에 말할 사람 알려 주기', minutes: 14, tool: 'story',
              teacher: '"이미 말한 친구는 누구누구인가요? 아직 말하지 않은 친구는?" 앞 말풍선에 나온 이름에 손가락을 접으며 세어 보게 한다. 이미 말한 친구 이름을 넣은 학생에게 "그 친구는 벌써 말했나요?"라고 되묻는다. 마지막 문항은 셋이 한 모둠이 되어 이름이나 눈짓, 손바닥으로 다음 사람을 알려 주며 한 바퀴 말해 본다.',
              task: '이미 말한 친구와 아직 말하지 않은 친구를 살펴, 다음에 말할 사람을 알려 주는 말을 넣어요.',
              levels: { easy: HELP, base: {}, challenge: {} },
              items: [
                { prompt: '민지와 준호는 말했어요. 준호가 다음 사람을 알려 주는 말을 넣어 보세요.', toolOptions: { mode: 'fill', cards: [{ id: 'hy', text: '다음은 하윤이 차례야' }, { id: 'mj', text: '다음은 민지 차례야' }, { id: 'jh', text: '내가 한 번 더 할게' }], slots: [{ id: 'b1', who: '민지', motif: 'flower', label: '나는 그네가 좋아. 준호는?' }, { id: 'b2', who: '준호', motif: 'sun', label: '나는 시소가 좋아. ___.' }] }, target: { fill: { b2: 'hy' } }, difficulty: 0.15,
                  hints: ['이미 말한 친구 이름에 손가락을 접으며 세어 봐요. 다음은 아직 말하지 않은 친구예요.', '넣은 이름이 벌써 말한 친구인지 다시 살펴봐요.', '민지와 준호는 말했으니, 아직 말하지 않은 친구 이름을 넣어요.'] },
                { prompt: '지우가 말을 마쳤어요. 아직 서준이만 말하지 않았어요. 알맞은 말을 넣어 보세요.', toolOptions: { mode: 'fill', cards: [{ id: 'sj', text: '서준아, 네 차례야' }, { id: 'jw', text: '지우야, 또 해' }, { id: 'stop', text: '이제 그만하자' }], slots: [{ id: 'b1', who: '지우', motif: 'tree', label: '나는 비 오는 날이 좋아. ___.' }] }, target: { fill: { b1: 'sj' } }, difficulty: 0.15 },
                { prompt: '말없이 다음 사람을 알려 주는 방법을 모두 골라 보세요.', toolOptions: { mode: 'pick', topic: '말없이 알려 주기', cards: [{ id: 'eye', text: '다음 친구를 보며 웃기' }, { id: 'palm', text: '손바닥으로 친구 가리키기' }, { id: 'tap', text: '책상 두드리기' }, { id: 'away', text: '눈 감기' }] }, target: { pick: ['eye', 'palm'] }, difficulty: 0.25,
                  levels: { challenge: { toolOptions: { cards: [{ id: 'eye', text: '다음 친구를 보며 웃기' }, { id: 'palm', text: '손바닥으로 친구 가리키기' }, { id: 'nodto', text: '다음 친구에게 고개 끄덕이기' }, { id: 'tap', text: '책상 두드리기' }, { id: 'away', text: '눈 감기' }, { id: 'finger', text: '손가락으로 친구 콕 찌르기' }] }, target: { pick: ['eye', 'palm', 'nodto'] } } },
                  conclude: '눈짓과 손바닥은 조용한 곳에서도 쓸 수 있는 차례 신호예요.' },
                { prompt: '셋이 모둠이 되어, 다음 사람을 알려 주며 좋아하는 놀이를 한 바퀴 말해 보세요.', free: true, talk: true },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"오늘 다음 사람을 알려 줄 때 가장 많이 쓴 방법은 무엇이었나요?" 이름 부르기·눈짓·손바닥 가운데 손을 들어 보게 한다. 출구 1번에서 이미 말한 친구 이름을 고른 학생은 다음 시간에 손가락 접어 세기를 먼저 하게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'story', options: { mode: 'fill', cards: [{ id: 'jw', text: '지우야, 네 차례야' }, { id: 'hy', text: '하윤아, 네 차례야' }], slots: [{ id: 'b1', who: '하윤', motif: 'flower', label: '나는 딱지치기가 좋아. 민지는?' }, { id: 'b2', who: '민지', motif: 'sun', label: '나는 공기놀이! ___.' }] }, prompt: '하윤이와 민지는 말했어요. 지우는 아직이에요. 민지가 할 말을 넣어 보세요.', target: { fill: { b2: 'jw' } }, difficulty: 0.15 },
            { type: 'choice', prompt: '친구가 "그리고…" 하며 말을 이어 가요. 나는 어떻게 할까요?', options: ['바로 내 말을 해요', '친구 말이 끝날 때까지 기다려요', '자리를 떠나요'], answer: 1, difficulty: 0.15, explain: '"그리고…"는 아직 말이 이어진다는 신호예요. 끝날 때까지 기다려요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '기다리고 알려 줘요',
        items: [
          { type: 'check', prompt: '끝까지 기다리는 방법을 모두 골라 ✓ 하세요.', options: ['손가락 하나 접어 두기', '입술 꼭 다물기', '"빨리 말해!" 하기', '마음속으로 셋 세기'], answer: '손가락 하나 접어 두기, 입술 꼭 다물기, 마음속으로 셋 세기' },
          { type: 'blank', prompt: '다음 사람을 알려 주는 말을 쓰세요.', text: '나는 시소가 좋아. 다음은 ______ 차례야.', answer: '아직 말하지 않은 친구 이름' },
          { type: 'choice', prompt: '도서관처럼 조용한 곳에서 차례를 넘기는 방법에 ○ 하세요.', options: ['큰 소리로 이름 부르기', '손바닥으로 친구 가리키기', '책상 두드리기'], answer: '손바닥으로 친구 가리키기' },
          { type: 'short', prompt: '오늘 모둠에서 내 다음에 말한 친구에게 어떻게 차례를 넘겼는지 쓰세요.' },
        ],
        easy: {
          note: '말한 친구는 손가락을 접어요. 아직 말하지 않은 친구가 다음 차례예요.',
          items: [
            { type: 'choice', prompt: '끝까지 기다리는 방법에 ○ 하세요.', options: ['입술 꼭 다물기', '"빨리 말해!" 하기'], answer: '입술 꼭 다물기' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '서준아, 네 ______야.', answer: '차례' },
            { type: 'choice', prompt: '말없이 차례를 넘기는 방법에 ○ 하세요.', options: ['손바닥으로 가리키기', '눈 감기'], answer: '손바닥으로 가리키기' },
            { type: 'draw', prompt: '친구에게 차례를 넘기는 내 모습을 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '기다리기 고르기는 보기가 두 개이고, 다음 사람 알려 주기에서 맞게 넣은 카드에 초록 테두리가 생겨요.',
        base: '말을 모두 넣은 뒤 확인해요.',
        challenge: '말없이 알려 주기 문항에 헷갈리는 카드(콕 찌르기 등)가 더 나와요. 모둠 활동에서 셋 다 다른 방법으로 차례를 넘겨 봐요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 하고 싶은 말이 생기면 친구 말 중간에 끼어든다(이 주제의 대표 오개념) → 손가락 접기·입술 다물기처럼 몸으로 참는 방법을 준다. ② 천천히 말하는 친구의 말을 대신 끝낸다 → 친구 말은 친구만 안다고 짚는다. ③ 다음 사람을 정할 때 이미 말한 친구를 다시 부른다 → 말한 친구는 손가락을 접어 센다. 모둠 활동은 세 명이 한 모둠이며, 남는 학생은 교사와 한 모둠이 된다.',
    }),

    // ── 이어 쓰기 ──
  ];

  PaperLessons.registerUnit({
    id: U.id, schema: 'edu-unit.v1', catalogUnit: U.catalogUnit,
    grade: 1, subject: '국어', unitTitle: U.unitTitle,
    flow: '입학 첫 달의 한글 놀이 단원이다. 1~3차시는 몸과 놀이로 자음자·모음자 모양과 친해지고 내가 헷갈리는 자모를 스스로 찾는다. 4~15차시는 듣기·말하기로, 말차례가 무엇인지 가르고(4~6) 말하는 사람을 바라보며 들은 말을 되풀이해 잇고(7~9) 끝까지 기다렸다 이름·눈짓으로 차례를 넘기며(10~12) 대화 뒤 내 말차례를 돌아본다(13~15). 16~26차시는 책과 친해지기로, 읽을거리가 있는 곳과 좋아하는 책을 찾고(16~17) 스스로 고른 책을 끝까지 읽어 기록하며(18~20) 좋았던 대목의 글자를 만들어 친구에게 읽어 주고(21~23) 한 주의 읽기를 돌아보아 목표를 정한다(24~26). 27~34차시는 자모의 이름과 소릿값으로, 자음자·모음자를 가르고 첫소리가 같은 낱말을 모은 뒤(27~29) 차례대로 늘어놓아 소리 내며 쓰고(30~32) 소리를 듣고 자모 카드를 드는 놀이(33)를 거쳐 단원 전체를 정리하고 스스로 평가한다(34).',
    refs: {},
    lessons,
  });
})();
