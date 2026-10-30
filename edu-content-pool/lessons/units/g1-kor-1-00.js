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
                  levels: { challenge: { prompt: '말없이 다음 사람을 알려 주는 방법을 모두 골라 보세요. 헷갈리는 카드도 섞여 있어요.', toolOptions: { cards: [{ id: 'eye', text: '다음 친구를 보며 웃기' }, { id: 'palm', text: '손바닥으로 친구 가리키기' }, { id: 'nodto', text: '다음 친구에게 고개 끄덕이기' }, { id: 'tap', text: '책상 두드리기' }, { id: 'away', text: '눈 감기' }, { id: 'finger', text: '손가락으로 친구 콕 찌르기' }] }, target: { pick: ['eye', 'palm', 'nodto'] } } },
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

    // ───────────────────────── 11. 연습: 이야기 잇기 놀이 ─────────────────────────
    L(11, {
      title: '이름을 불러 넘기며 이야기 잇기 놀이 하기',
      objective: '친구가 말을 마쳤다는 신호를 알아듣고, 이름을 불러 넘겨받은 차례에 이야기를 한 문장씩 이어 말할 수 있다.',
      standards: TALK,
      illustration: ART('four first graders sitting in a circle on the classroom floor making up a story together, a paper rabbit and carrot floating above them', [
        { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 120, y: 50 }, { motif: 'hills', y: 206 },
        { motif: 'tree', x: 90, y: 214 }, { motif: 'flower', x: 390, y: 228 }, { motif: 'leaf', x: 250, y: 230 },
        { motif: 'text', x: 240, y: 140, text: '…준호야!', size: 26 },
      ]),
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '"오늘은 넷이 한 문장씩 이어서 이야기를 만들어요. 그런데 다음에 누가 말할지 어떻게 알까요?" 교사가 "옛날에 곰이 살았어. 하윤아!" 하고 한 학생 이름을 불러 다음 문장을 잇게 한다. 시연 단추로 이름을 부르며 넘긴 대화 카드가 차례대로 놓이는 모습을 보여 준다. "문장 끝에 부른 이름이 다음 사람이에요."',
          student: '문장 끝에 누구 이름을 불렀는지 잘 들어 봐요.',
          demo: { tool: 'story', options: { mode: 'order', shuffle: false, slots: ['첫째', '둘째'], cards: [{ id: 'd1', text: '선생님: 옛날에 곰이 살았어. 하윤아!' }, { id: 'd2', text: '하윤: 곰은 꿀을 좋아했어. 끝!' }] }, sequence: [{ order: ['d1', 'd2'] }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 이름 신호로 이야기 차례 맞추기', minutes: 11, tool: 'story',
              teacher: '"이 카드 끝에서 부른 이름은 누구예요? 그 친구가 말한 카드를 찾아 다음에 놓아요." 카드 끝 이름에 손가락을 대고 다음 카드를 찾게 한다. 이야기 내용만 보고 놓는 학생에게 "이름 신호를 따라가도 같은 차례가 되나요?"라고 묻는다. 셋째 문항은 먼저 시작한 사람을 찾는 문제다. "아무도 부르지 않은 사람은 누구일까요?"',
              task: '카드 끝에서 부른 이름을 따라가며 이야기 잇기 차례대로 놓아요.',
              levels: { easy: HELP, base: {}, challenge: {} },
              items: [
                { prompt: '민지가 먼저 이야기를 시작했어요. 이름 신호를 따라 차례대로 놓아 보세요.', toolOptions: { mode: 'order', slots: ['첫째', '둘째', '셋째', '넷째'], cards: [{ id: 'r1', text: '민지: 옛날에 토끼가 살았어. 준호야!' }, { id: 'r2', text: '준호: 토끼는 당근을 좋아했어. 지우야!' }, { id: 'r3', text: '지우: 어느 날 당근이 사라졌어. 서준아!' }, { id: 'r4', text: '서준: 다람쥐가 먹은 거였어. 끝!' }] }, target: { order: ['r1', 'r2', 'r3', 'r4'] }, difficulty: 0.15,
                  levels: { easy: { prompt: '민지가 먼저 이야기를 시작했어요. 세 장을 이름 신호를 따라 놓아 보세요.', toolOptions: { slots: ['첫째', '둘째', '셋째'], cards: [{ id: 'r1', text: '민지: 옛날에 토끼가 살았어. 준호야!' }, { id: 'r2', text: '준호: 토끼는 당근을 좋아했어. 지우야!' }, { id: 'r3', text: '지우: 어느 날 당근이 사라졌어. 끝!' }] }, target: { order: ['r1', 'r2', 'r3'] } } } },
                { prompt: '하윤이가 먼저 시작한 화분 이야기예요. 차례대로 놓아 보세요.', toolOptions: { mode: 'order', slots: ['첫째', '둘째', '셋째'], cards: [{ id: 'p1', text: '하윤: 교실에 새 화분이 왔어. 서준아!' }, { id: 'p2', text: '서준: 우리는 화분에 물을 주었어. 민지야!' }, { id: 'p3', text: '민지: 다음 날 노란 꽃이 피었어. 끝!' }] }, target: { order: ['p1', 'p2', 'p3'] }, difficulty: 0.15 },
                { prompt: '누가 먼저 시작했는지 찾아서 고래 이야기를 차례대로 놓아 보세요.', toolOptions: { mode: 'order', slots: ['첫째', '둘째', '셋째'], cards: [{ id: 'w2', text: '하윤: 고래가 물을 높이 뿜었어. 서준아!' }, { id: 'w3', text: '서준: 하늘에 무지개가 떴어. 끝!' }, { id: 'w1', text: '지우: 고래가 바다에서 놀았어. 하윤아!' }] }, target: { order: ['w1', 'w2', 'w3'] }, difficulty: 0.3,
                  predict: { q: '이야기를 먼저 시작한 사람은 어떤 사람일까요?', options: ['이름이 불린 사람', '아무도 부르지 않은 사람'], answer: 1 },
                  hints: ['카드마다 끝에서 부른 이름을 손가락으로 짚어 봐요. 먼저 시작한 사람은 아무도 부르지 않았어요.', '첫째 자리 카드의 사람이 다른 카드 끝에서 불렸는지 다시 봐요.', '세 이름 가운데 어느 카드 끝에서도 불리지 않은 사람의 카드를 첫째에 놓고, 그 카드 끝 이름을 따라가요.'],
                  conclude: '이름이 불리지 않은 사람이 처음 말한 사람이에요. 그다음은 이름 신호를 따라가요.' },
                { prompt: '더 해 보기: 다섯 친구의 눈사람 이야기예요. 민지가 먼저 시작했어요. 차례대로 놓아 보세요.', extra: true, toolOptions: { mode: 'order', slots: ['첫째', '둘째', '셋째', '넷째', '다섯째'], cards: [{ id: 's1', text: '민지: 눈이 펑펑 내렸어. 지우야!' }, { id: 's2', text: '지우: 우리는 눈사람을 만들었어. 하윤아!' }, { id: 's3', text: '하윤: 코는 당근으로 했어. 준호야!' }, { id: 's4', text: '준호: 해가 나서 눈사람이 작아졌어. 서준아!' }, { id: 's5', text: '서준: 내일 또 만들자. 끝!' }] }, target: { order: ['s1', 's2', 's3', 's4', 's5'] }, difficulty: 0.35 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 말이 끝났다는 신호 알아듣기', minutes: 15, tool: 'emotion',
              teacher: '"친구가 \'음…\' 하고 멈췄어요. 말이 끝난 걸까요?" 교사가 "음… 그러니까…" 하고 말을 멈추는 모습과 "끝!" 하고 친구를 바라보는 모습을 번갈아 보여 준다. "음…"을 끝 신호로 고른 학생에게 "선생님이 \'음…\' 할 때 말이 끝났었나요?"라고 되묻는다. 마지막 문항은 넷이 한 모둠이 되어 실제로 이야기 잇기 놀이를 한다. 차례가 된 친구가 머뭇거려도 대신 말하지 않게 한다.',
              task: '친구 말이 끝났는지 알려 주는 신호를 고르고, 내 차례에 어떻게 할지 정해요. 마지막에는 모둠에서 이야기 잇기 놀이를 해요.',
              levels: { easy: HELP, base: {}, challenge: {} },
              items: [
                { prompt: '친구 말이 끝났다는 신호를 모두 골라 보세요.', toolOptions: { mode: 'pick', basket: '끝났어요 신호', cards: [{ id: 'end', text: '"끝!" 하고 말해요' }, { id: 'look', text: '나를 보며 이름을 불러요' }, { id: 'um', text: '"음…" 하고 생각해요' }, { id: 'and', text: '"그리고…" 하고 이어요' }] }, target: { pick: ['end', 'look'] }, difficulty: 0.2,
                  hints: ['친구가 아직 생각 중일 때 나오는 말과, 다 말했을 때 나오는 말을 견주어 봐요.', '고른 카드가 말을 이어 가는 신호는 아닌지 다시 봐요.', '생각하거나 이어 가는 말은 아직 말하는 중이에요. 다 말했다고 알려 주는 말과 모습만 골라요.'] },
                { prompt: '지우가 이야기를 하다가 "음…" 하고 멈췄어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '나', situation: '이야기 잇기에서 지우가 "토끼가 숲에서… 음…" 하고 멈췄어요.', choices: [{ id: 'wait', text: '지우가 다 말할 때까지 기다려요', result: '지우가 "토끼가 숲에서 길을 잃었어!" 하고 끝까지 말해요', mood: '기쁨' }, { id: 'take', text: '내가 이어서 말해 버려요', result: '지우가 하려던 이야기를 못 해요', mood: '속상함', why: '"음…"은 아직 생각하는 중이라는 신호예요.' }] }, target: { choice: 'wait' }, difficulty: 0.15 },
                { prompt: '내 이름이 불렸는데 생각이 안 나요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '나', situation: '"서준아!" 하고 내 차례가 왔는데 이어 갈 말이 바로 떠오르지 않아요.', choices: [{ id: 'ask', text: '"잠깐만, 생각할게." 하고 말해요', result: '친구들이 기다려 주고, 나도 한 문장을 이어요', mood: '편안함' }, { id: 'down', text: '말없이 고개를 숙여요', result: '친구들이 내 차례인지 몰라 서로 쳐다봐요', mood: '걱정', why: '말이 없으면 친구들은 기다려야 할지 알 수 없어요.' }, { id: 'quit', text: '"몰라!" 하고 놀이를 그만둬요', result: '이야기가 거기서 끊겨요', mood: '속상함', why: '그만두면 이야기는 어떻게 될까요?' }] }, target: { choice: 'ask' }, difficulty: 0.25,
                  levels: { easy: { toolOptions: { choices: [{ id: 'ask', text: '"잠깐만, 생각할게." 하고 말해요', result: '친구들이 기다려 주고, 나도 한 문장을 이어요', mood: '편안함' }, { id: 'quit', text: '"몰라!" 하고 놀이를 그만둬요', result: '이야기가 거기서 끊겨요', mood: '속상함', why: '그만두면 이야기는 어떻게 될까요?' }] } } },
                  conclude: '생각할 시간이 필요하면 "잠깐만" 하고 알려요. 그러면 친구들이 기다려 줘요.' },
                { prompt: '넷이 한 모둠이 되어 한 문장씩 이야기를 잇고, 끝에 다음 친구 이름을 불러 보세요.', free: true, talk: true },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"우리 모둠 이야기는 어떻게 끝났나요?" 두 모둠이 만든 이야기를 한 사람씩 다시 이어 말해 본다. 친구가 머뭇거릴 때 기다려 준 모둠을 칭찬한다. 출구 1번에서 순서를 틀린 학생은 카드 끝 이름을 짚지 않고 이야기 내용만 본 것이니 다음 시간에 이름 짚기를 먼저 하게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'story', options: { mode: 'order', slots: ['첫째', '둘째', '셋째'], cards: [{ id: 'k1', text: '준호: 강아지가 공을 찾았어. 민지야!' }, { id: 'k2', text: '민지: 공은 의자 밑에 있었어. 하윤아!' }, { id: 'k3', text: '하윤: 강아지가 꼬리를 흔들었어. 끝!' }] }, prompt: '준호가 먼저 시작한 강아지 이야기예요. 차례대로 놓아 보세요.', target: { order: ['k1', 'k2', 'k3'] }, difficulty: 0.15 },
            { type: 'choice', prompt: '친구가 "그러니까… 음…" 하고 멈췄어요. 말이 끝난 걸까요?', options: ['네, 끝났어요', '아니요, 아직 생각하는 중이에요'], answer: 1, difficulty: 0.15, explain: '"음…"은 아직 생각하는 중이라는 신호예요. 다 말할 때까지 기다려요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '이야기 잇기 놀이',
        items: [
          { type: 'table', prompt: '이름 신호를 따라 차례대로 1, 2, 3을 쓰세요.', columns: ['이야기 카드', '차례'], cells: [['서준: 우리는 화분에 물을 주었어. 민지야!', ''], ['민지: 다음 날 노란 꽃이 피었어. 끝!', ''], ['하윤: 교실에 새 화분이 왔어. 서준아!', '']] },
          { type: 'check', prompt: '친구 말이 끝났다는 신호를 모두 골라 ✓ 하세요.', options: ['"끝!" 하고 말해요', '"음…" 하고 생각해요', '나를 보며 이름을 불러요', '"그리고…" 하고 이어요'], answer: '"끝!" 하고 말해요, 나를 보며 이름을 불러요' },
          { type: 'blank', prompt: '내 차례인데 생각이 안 날 때 할 말을 쓰세요.', text: '"______, 생각할게."', answer: '잠깐만' },
          { type: 'short', prompt: '우리 모둠이 만든 이야기에서 내가 이어 말한 문장을 쓰세요.' },
        ],
        easy: {
          note: '카드 끝에서 부른 이름이 다음 사람이에요.',
          items: [
            { type: 'choice', prompt: '"옛날에 토끼가 살았어. 준호야!" 다음에 말할 사람에 ○ 하세요.', options: ['준호', '민지'], answer: '준호' },
            { type: 'choice', prompt: '말이 끝났다는 신호에 ○ 하세요.', options: ['"끝!"', '"음…"'], answer: '"끝!"' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '"잠깐만, ______."', answer: '생각할게' },
            { type: 'draw', prompt: '모둠에서 이야기 잇기 놀이를 하는 모습을 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '이야기 카드는 세 장이고 맞게 놓은 카드에 초록 테두리가 생겨요. 생각이 안 날 때 문항은 보기가 두 개예요.',
        base: '카드를 모두 놓은 뒤 확인해요.',
        challenge: '더 해 보기(다섯 친구의 눈사람 이야기)까지 풀어요. 모둠 놀이에서 이야기를 끝내는 사람은 "끝!" 대신 이야기를 마무리하는 문장으로 끝내요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 친구가 "음…" 하고 멈추면 말이 끝난 줄 알고 끼어든다(이 주제의 대표 오개념) → "음…"과 "그리고…"는 아직 말하는 중이라는 신호라고 짚는다. ② 머뭇거리는 친구의 문장을 대신 말해 준다 → 기다려 주는 것이 도와주는 것이라고 말한다. ③ 이름이 불린 친구가 못 듣고 있다 → 이름을 부를 때 그 친구를 바라보게 한다. 모둠은 네 명이며, 이야기 첫 문장은 교사가 칠판에 몇 개 적어 두고 고르게 하면 시작이 빨라진다.',
    }),

    // ───────────────────────── 12. 확장: 조용한 곳과 큰 모임에서 차례 넘기기 ─────────────────────────
    L(12, {
      title: '말하기 인형을 돌리며 반 모임에서 차례 지키기',
      objective: '조용한 곳에서는 눈짓·손짓으로, 친구가 나를 못 볼 때는 이름으로 차례를 넘기고, 말하기 인형을 돌리는 반 모임에서 차례를 지킬 수 있다.',
      standards: TALK,
      illustration: ART('a whole first grade class sitting in a big circle passing a small paper bear doll from hand to hand during morning meeting', [
        { motif: 'sun', x: 404, y: 56, s: 0.8 }, { motif: 'cloud', x: 110, y: 52 }, { motif: 'hills', y: 208 },
        { motif: 'house', x: 100, y: 216 }, { motif: 'tree', x: 390, y: 216 }, { motif: 'star', x: 250, y: 60 },
        { motif: 'text', x: 240, y: 142, text: '인형을 든 사람이 말해요', size: 22 },
      ]),
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '곰 인형(없으면 공이나 분필 지우개)을 들고 "우리 반 스물몇 명이 한꺼번에 이야기하면 어떻게 될까요?" 하고 묻는다. "오늘은 이 인형을 든 사람만 말해요. 말을 마치면 옆 친구에게 건네요." 또 도서관처럼 조용한 곳에서는 이름을 크게 부를 수 없다는 것을 떠올리게 한다. 시연 단추로 도서관 장면 카드가 \'조용히 해야 해요\' 가지에 들어가는 모습을 보여 준다.',
          student: '조용한 곳에서는 다음 사람을 어떻게 알려 줄까요?',
          demo: { tool: 'mindmap', options: { topic: '차례 넘기기', shuffle: false, slots: [{ id: 'quiet', label: '조용히 해야 해요' }, { id: 'away', label: '친구가 나를 못 봐요' }], cards: [{ id: 'lib', text: '도서관에서 책 이야기' }] }, sequence: [{ sort: { quiet: ['lib'] } }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 곳에 따라 차례 넘기는 방법 고르기', minutes: 9, tool: 'mindmap',
              teacher: '"소리를 내면 안 되는 곳이면 무엇으로 알려 줄까요? 친구가 뒤돌아 있으면 눈짓이 보일까요?" 두 가지 물음을 칠판에 붙여 두고 카드마다 따져 보게 한다. 뒤돌아 앉은 친구를 \'조용히\' 쪽에 넣은 학생에게 "친구가 내 손짓을 볼 수 있나요?"라고 묻는다.',
              task: '장면을 읽고, 손짓·눈짓으로 넘길지 이름을 불러 넘길지 나누어 넣어요.',
              levels: { easy: HELP, base: {}, challenge: {} },
              items: [
                { prompt: '장면마다 차례를 넘기는 방법이 무엇이 좋을지 나누어 보세요.', toolOptions: { topic: '차례 넘기기', slots: [{ id: 'quiet', label: '조용히 해야 해요', sub: '손짓·눈짓으로' }, { id: 'away', label: '친구가 나를 못 봐요', sub: '이름을 불러서' }], cards: [{ id: 'lib', text: '도서관에서 책 이야기를 해요' }, { id: 'baby', text: '아기가 자는 방에서 놀아요' }, { id: 'back', text: '다음 친구가 뒤돌아 앉아 있어요' }, { id: 'far', text: '다음 친구가 저쪽 그네에 있어요' }] }, target: { sort: { quiet: ['lib', 'baby'], away: ['back', 'far'] } }, difficulty: 0.2,
                  levels: { easy: { prompt: '두 장면을 차례 넘기는 방법에 따라 나누어 보세요.', toolOptions: { cards: [{ id: 'lib', text: '도서관에서 책 이야기를 해요' }, { id: 'back', text: '다음 친구가 뒤돌아 앉아 있어요' }] }, target: { sort: { quiet: ['lib'], away: ['back'] } } } },
                  hints: ['장면마다 두 가지를 물어봐요. 소리를 내도 되는 곳인가요? 다음 친구가 나를 볼 수 있나요?', '넣은 카드에서 친구가 내 손짓을 볼 수 있는지 다시 따져 봐요.', '소리를 내면 안 되는 곳은 손짓·눈짓 쪽, 친구가 나를 볼 수 없는 장면은 이름 쪽이에요.'] },
                { prompt: '이번 장면들도 나누어 보세요.', toolOptions: { topic: '차례 넘기기', slots: [{ id: 'quiet', label: '조용히 해야 해요', sub: '손짓·눈짓으로' }, { id: 'away', label: '친구가 나를 못 봐요', sub: '이름을 불러서' }], cards: [{ id: 'test', text: '옆 반이 받아쓰기를 하는 복도' }, { id: 'line', text: '다음 친구가 내 뒤에 줄 서 있어요' }, { id: 'movie', text: '영화관에서 영화가 시작됐어요' }, { id: 'draw', text: '다음 친구가 고개 숙여 그림을 그려요' }] }, target: { sort: { quiet: ['test', 'movie'], away: ['line', 'draw'] } }, difficulty: 0.3,
                  hints: ['장면마다 소리를 내도 되는지, 다음 친구가 나를 볼 수 있는지 차례로 물어봐요.', '친구가 고개를 숙이거나 내 뒤에 있으면 내 손짓이 보일지 다시 생각해 봐요.', '받아쓰기 복도와 영화관은 조용해야 하는 곳이고, 뒤에 선 친구와 고개 숙인 친구는 나를 못 봐요.'] },
                { prompt: '더 해 보기: 이 장면들도 차례 넘기는 방법에 따라 나누어 보세요.', extra: true, toolOptions: { topic: '차례 넘기기', slots: [{ id: 'quiet', label: '조용히 해야 해요', sub: '손짓·눈짓으로' }, { id: 'away', label: '친구가 나를 못 봐요', sub: '이름을 불러서' }], cards: [{ id: 'nap', text: '할머니가 낮잠 주무시는 거실' }, { id: 'bar', text: '다음 친구가 멀리 철봉에 매달려 있어요' }, { id: 'hall', text: '조용히 줄 서서 가는 복도' }] }, target: { sort: { quiet: ['nap', 'hall'], away: ['bar'] } }, difficulty: 0.25 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 말하기 인형 약속 지키기', minutes: 9, tool: 'emotion',
              teacher: '"인형을 든 사람만 말해요. 그런데 이럴 때는 어떻게 할까요?" 문항마다 고르기 전에 짝과 먼저 말해 보게 한다. "할 말이 없으면 \'통과\'라고 말하고 넘겨도 돼요"라는 약속을 이 문항에서 처음 알려 준다. 인형을 빼앗는 보기를 고른 학생에게 "인형을 빼앗긴 친구는 하던 말을 끝낼 수 있을까요?"라고 묻는다.',
              task: '말하기 인형을 돌리는 반 모임에서 어떻게 할지 골라 결과를 봐요.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '인형이 나한테 없는데 할 말이 생겼어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '나', situation: '아침 모임에서 인형이 저쪽 친구에게 있는데 나도 할 말이 생겼어요.', choices: [{ id: 'wait', text: '인형이 올 때까지 기다려요', result: '인형을 받았을 때 내 말을 모두 들어 줘요', mood: '편안함' }, { id: 'shout', text: '자리에서 바로 말해요', result: '인형을 든 친구 말과 섞여서 아무도 못 들어요', mood: '걱정', why: '지금 인형은 누구에게 있나요?' }] }, target: { choice: 'wait' }, difficulty: 0.1 },
                { prompt: '인형을 받았는데 할 말이 없어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '나', situation: '인형이 나에게 왔는데 오늘은 할 말이 떠오르지 않아요.', choices: [{ id: 'hold', text: '말없이 인형을 계속 들고 있어요', result: '모두 기다리기만 하고 모임이 멈춰요', mood: '걱정', why: '인형을 들고 있으면 다음 친구는 말할 수 있을까요?' }, { id: 'pass', text: '"통과!" 하고 옆 친구에게 건네요', result: '모임이 이어지고, 다음 바퀴에 또 말할 수 있어요', mood: '편안함' }, { id: 'throw', text: '인형을 아무에게나 던져요', result: '인형을 받은 친구가 놀라고, 차례가 엉켜요', mood: '놀람', why: '정한 차례대로 건네야 모두 차례를 알 수 있어요.' }] }, target: { choice: 'pass' }, difficulty: 0.2,
                  levels: { easy: { toolOptions: { choices: [{ id: 'hold', text: '말없이 인형을 계속 들고 있어요', result: '모두 기다리기만 하고 모임이 멈춰요', mood: '걱정', why: '인형을 들고 있으면 다음 친구는 말할 수 있을까요?' }, { id: 'pass', text: '"통과!" 하고 옆 친구에게 건네요', result: '모임이 이어지고, 다음 바퀴에 또 말할 수 있어요', mood: '편안함' }] } } } },
                { prompt: '옆 친구가 인형을 들고 아주 길게 말해요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '나', situation: '옆 친구가 인형을 들고 주말 이야기를 길게 하고 있어요.', choices: [{ id: 'grab', text: '인형을 살짝 빼앗아요', result: '친구가 하던 말을 끝내지 못해 속상해해요', mood: '속상함', why: '인형을 빼앗긴 친구는 하던 말을 끝낼 수 있을까요?' }, { id: 'listen', text: '친구를 바라보며 끝까지 들어요', result: '친구가 말을 마치고 웃으며 인형을 건네줘요', mood: '기쁨' }, { id: 'yawn', text: '하품하며 딴 곳을 봐요', result: '친구가 말하다가 힘이 빠져요', mood: '슬픔', why: '딴 곳을 보는 나를 본 친구는 어떤 마음일까요?' }] }, target: { choice: 'listen' }, difficulty: 0.25,
                  conclude: '말이 길어도 인형을 든 친구가 마칠 때까지 바라보며 기다려요.' },
              ],
            },
            {
              id: 'a3', title: '활동 3. 반 모임에서 인형 돌리기', minutes: 8, tool: 'mindmap',
              teacher: '모두 큰 원으로 앉는다. 이야깃거리는 "내가 좋아하는 간식" 하나로 정한다. 인형을 든 사람만 한 문장으로 말하고 오른쪽 친구에게 건넨다. 26명이 한 문장씩이면 한 바퀴에 5분 남짓이다. 말하는 동안 다른 친구가 끼어들면 교사는 말없이 인형을 가리키기만 한다. 끝나면 "끼어들고 싶었던 순간이 있었나요? 그때 어떻게 참았나요?"를 묻는다.',
              task: '큰 원으로 앉아 말하기 인형을 돌리며 한 사람씩 말해요. 끝나고 내가 차례를 지키는 데 쓴 방법을 골라요.',
              levels: { easy: HELP, base: {}, challenge: {} },
              items: [
                { prompt: '큰 원으로 앉아 인형을 든 사람만 좋아하는 간식을 한 문장으로 말하고, 옆 친구에게 건네 보세요.', free: true, talk: true },
                { prompt: '반 모임에서 차례를 지키는 데 도움이 된 모습을 모두 골라 보세요.', toolOptions: { mode: 'pick', basket: '도움이 됐어요', cards: [{ id: 'eye', text: '인형을 든 친구 바라보기' }, { id: 'pass', text: '다 말하고 옆으로 건네기' }, { id: 'grab', text: '인형 먼저 가져오기' }, { id: 'loud', text: '더 큰 소리로 말하기' }] }, target: { pick: ['eye', 'pass'] }, difficulty: 0.15,
                  levels: { challenge: { prompt: '반 모임에서 차례를 지키는 데 도움이 된 모습을 모두 골라 보세요. 헷갈리는 카드가 더 있어요.', toolOptions: { cards: [{ id: 'eye', text: '인형을 든 친구 바라보기' }, { id: 'pass', text: '다 말하고 옆으로 건네기' }, { id: 'tongue', text: '"통과!" 하고 건네기' }, { id: 'grab', text: '인형 먼저 가져오기' }, { id: 'loud', text: '더 큰 소리로 말하기' }, { id: 'skip', text: '친구를 건너뛰고 건네기' }] }, target: { pick: ['eye', 'pass', 'tongue'] } } } },
                { prompt: '반 모임에서 차례를 넘길 때 알맞은 방법을 이어 보세요.', toolOptions: { mode: 'match', topic: '인형 넘기기', slots: [{ id: 'done', label: '할 말을 다 했어요' }, { id: 'none', label: '할 말이 없어요' }], cards: [{ id: 'give', text: '옆 친구에게 건네요' }, { id: 'pass', text: '"통과!" 하고 건네요' }, { id: 'keep', text: '계속 들고 있어요' }] }, target: { match: { done: 'give', none: 'pass' } }, difficulty: 0.2 },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"오늘 반 모임은 지난번처럼 한꺼번에 말할 때와 무엇이 달랐나요?" 두세 명의 대답을 듣는다. 출구 1번에서 고개 숙인 친구를 손짓 쪽에 넣은 학생은 \'친구가 나를 볼 수 있나\'를 따지지 않은 것이니 다음 시간에 다시 묻는다. 인형은 교실에 두고 아침 모임마다 쓴다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { topic: '차례 넘기기', slots: [{ id: 'quiet', label: '조용히 해야 해요' }, { id: 'away', label: '친구가 나를 못 봐요' }], cards: [{ id: 'hosp', text: '병원 대기실에서 기다려요' }, { id: 'book', text: '다음 친구가 책에 푹 빠져 있어요' }] }, prompt: '두 장면을 차례 넘기는 방법에 따라 나누어 보세요.', target: { sort: { quiet: ['hosp'], away: ['book'] } }, difficulty: 0.25 },
            { type: 'choice', prompt: '말하기 인형이 나에게 왔는데 할 말이 없어요. 어떻게 할까요?', options: ['계속 들고 있어요', '"통과!" 하고 건네요', '아무에게나 던져요'], answer: 1, difficulty: 0.1, explain: '할 말이 없으면 "통과!" 하고 정한 차례대로 건네요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '곳에 따라 차례 넘기기',
        items: [
          { type: 'table', prompt: '장면에 알맞은 방법에 ○ 하세요.', columns: ['장면', '손짓·눈짓', '이름 부르기'], cells: [['도서관에서 책 이야기', '', ''], ['친구가 뒤돌아 앉아 있어요', '', ''], ['아기가 자는 방', '', '']] },
          { type: 'choice', prompt: '말하기 인형을 든 친구가 길게 말할 때 알맞은 모습에 ○ 하세요.', options: ['인형 빼앗기', '바라보며 끝까지 듣기', '딴 곳 보기'], answer: '바라보며 끝까지 듣기' },
          { type: 'blank', prompt: '할 말이 없을 때 하는 말을 쓰세요.', text: '"______!" 하고 옆 친구에게 건네요.', answer: '통과' },
          { type: 'short', prompt: '오늘 반 모임에서 내가 말한 간식 이야기를 한 문장으로 쓰세요.' },
        ],
        easy: {
          note: '소리를 내도 되는 곳인지, 친구가 나를 볼 수 있는지 생각해요.',
          items: [
            { type: 'choice', prompt: '도서관에서 차례를 넘기는 방법에 ○ 하세요.', options: ['손바닥으로 가리키기', '큰 소리로 이름 부르기'], answer: '손바닥으로 가리키기' },
            { type: 'choice', prompt: '말하기 인형을 든 사람은 누구일까요?', options: ['지금 말하는 사람', '기다리는 사람'], answer: '지금 말하는 사람' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '"______!" 하고 건네요.', answer: '통과' },
            { type: 'draw', prompt: '반 모임에서 인형을 건네는 내 모습을 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '나누기 첫 문항은 카드 두 장이고, 맞게 넣은 카드에 초록 테두리가 생겨요. 인형 약속 문항은 보기가 두 개예요.',
        base: '카드를 모두 넣은 뒤 확인해요.',
        challenge: '도움이 된 모습 고르기에 헷갈리는 카드가 더 나와요. 반 모임에서 앞 친구가 말한 간식을 한 번 되풀이한 뒤 내 말을 해요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 인형이 없어도 할 말이 생기면 바로 말한다(이 주제의 대표 오개념 — 끼어들기) → 교사는 말로 막지 않고 인형을 가리키기만 해 신호를 익히게 한다. ② 할 말이 없으면 인형을 쥐고 굳는다 → "통과"를 허락하고, 두 바퀴째에 다시 기회를 준다. ③ 손짓·눈짓을 친구가 볼 수 없는 장면에서도 쓴다 → 친구가 나를 볼 수 있는지를 먼저 묻는다. 반 모임은 26명 기준 한 바퀴 5분 남짓이며, 시간이 모자라면 반을 둘로 나누어 두 원으로 돌린다.',
    }),

    // ───────────────────────── 13. 대화 뒤 말차례 돌아보기 ─────────────────────────
    L(13, {
      title: '모둠 대화 뒤 말차례를 지켰는지 점검표에 표시하기',
      objective: '모둠 대화를 마친 뒤 말을 많이 했는지가 아니라 기다리기·끼어들지 않기 같은 모습으로 말차례를 지켰는지 점검표에 표시할 수 있다.',
      standards: TALK,
      illustration: ART('three first graders at a round table after a group talk, each holding a small paper checklist with circles and a pencil', [
        { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 100, y: 50 }, { motif: 'hills', y: 208 },
        { motif: 'house', x: 110, y: 216 }, { motif: 'tree', x: 384, y: 216 }, { motif: 'flower', x: 250, y: 230 },
        { motif: 'text', x: 240, y: 140, text: '기다렸나요? ○', size: 26 },
      ]),
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '"지난 시간 반 모임에서 말차례를 가장 잘 지킨 사람은 누구였을까요? 말을 제일 많이 한 사람일까요?" 학생들의 대답을 들은 뒤 "말차례를 잘 지켰는지는 무엇을 보면 알 수 있을까요?"를 칠판에 쓴다. 시연 단추로 \'친구 말이 끝날 때까지 기다렸어요\' 카드가 점검 바구니에 들어가는 모습을 보여 준다. 오늘은 대화를 먼저 하고, 그 뒤에 점검표로 돌아본다고 알려 준다.',
          student: '말차례를 잘 지켰는지는 무엇을 보면 알까요?',
          demo: { tool: 'mindmap', options: { mode: 'pick', basket: '말차례를 지켰어요', shuffle: false, cards: [{ id: 'wait', text: '끝날 때까지 기다렸어요' }, { id: 'many', text: '말을 제일 많이 했어요' }] }, sequence: [{ pick: ['wait'] }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 모둠 대화 하고 점검표 채우기', minutes: 10, tool: 'emotion',
              teacher: '세 명이 한 모둠이 되어 "주말에 하고 싶은 놀이"로 4분 동안 대화한다. 교사는 끼어들기를 막지 않고 지켜보기만 한다. 대화가 끝나면 활동지의 점검표(기다렸나요·끼어들지 않았나요·다음 사람을 알려 주었나요)에 ○·△를 표시하게 한다. "말을 많이 한 것은 점검표에 없어요. 차례를 지켰는지만 봐요." 그다음 화면에서 내 마음을 고른다. 눈금은 정답이 없으니 떠오른 대로 고르게 한다.',
              task: '모둠에서 먼저 대화하고, 활동지 점검표에 표시한 뒤, 오늘 내가 차례를 얼마나 지켰는지 솔직하게 골라요.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '셋이 한 모둠이 되어 주말에 하고 싶은 놀이를 4분 동안 이야기해 보세요.', free: true, talk: true },
                { prompt: '대화를 마친 뒤 활동지 점검표에 ○·△를 표시해 보세요.', free: true },
                { prompt: '오늘 모둠 대화에서 나는 친구 말이 끝날 때까지 얼마나 기다렸나요? 솔직하게 골라요.', toolOptions: SELF('모둠에서 주말에 하고 싶은 놀이를 이야기했어요.', '편안함', '친구 말이 끝날 때까지 얼마나 기다렸나요?'), target: { level: 'any' }, difficulty: 0.05, hints: SELF_HINTS },
              ],
            },
            {
              id: 'a2', title: '활동 2. 말차례를 지켰는지 알려 주는 모습 고르기', minutes: 8, tool: 'mindmap',
              teacher: '"이 카드는 말차례를 지켰다는 것을 알려 주나요?" 카드마다 손을 들게 한다. \'말을 제일 많이 했어요\'를 넣은 학생에게 "말을 많이 하면서 친구 말을 끊었을 수도 있을까요?"라고 묻는다. 목소리가 컸다는 카드도 차례와 상관없다는 것을 짚는다.',
              task: '말차례를 지켰다는 것을 알려 주는 모습만 골라 바구니에 넣어요.',
              levels: { easy: HELP, base: {}, challenge: {} },
              items: [
                { prompt: '말차례를 지켰다는 것을 알려 주는 모습을 모두 골라 보세요.', toolOptions: { mode: 'pick', basket: '말차례를 지켰어요', cards: [{ id: 'wait', text: '친구 말이 끝날 때까지 기다렸어요' }, { id: 'noint', text: '중간에 끼어들지 않았어요' }, { id: 'many', text: '말을 제일 많이 했어요' }, { id: 'loud', text: '목소리가 제일 컸어요' }] }, target: { pick: ['wait', 'noint'] }, difficulty: 0.25,
                  hints: ['카드마다 "이 모습이 친구 차례를 지켜 주었나?" 하고 물어봐요. 말을 얼마나 했는지는 차례와 다른 이야기예요.', '고른 카드 가운데 말의 양이나 목소리 크기를 말하는 카드가 있는지 다시 봐요.', '기다리기와 끼어들지 않기처럼 친구 차례를 지켜 준 모습만 남겨요.'] },
                { prompt: '준호가 모둠 대화를 돌아봐요. 준호가 말차례를 지킨 모습을 모두 골라 보세요.', toolOptions: { mode: 'pick', basket: '준호가 지켰어요', cards: [{ id: 'next', text: '다음은 민지 차례라고 알려 주었어요' }, { id: 'look', text: '말하는 하윤이를 바라보았어요' }, { id: 'first', text: '맨 먼저 말을 시작했어요' }, { id: 'long', text: '이야기를 가장 길게 했어요' }] }, target: { pick: ['next', 'look'] }, difficulty: 0.3,
                  levels: { easy: { prompt: '준호가 말차례를 지킨 모습 하나를 골라 보세요.', toolOptions: { cards: [{ id: 'next', text: '다음은 민지 차례라고 알려 주었어요' }, { id: 'long', text: '이야기를 가장 길게 했어요' }] }, target: { pick: ['next'] } } } },
                { prompt: '더 해 보기: 말차례를 지키지 않았다는 것을 알려 주는 모습을 모두 골라 보세요.', extra: true, toolOptions: { mode: 'pick', basket: '지키지 않았어요', cards: [{ id: 'cut', text: '친구 말 중간에 내 말을 했어요' }, { id: 'same', text: '두 사람이 한꺼번에 말했어요' }, { id: 'few', text: '말을 한 번만 했어요' }, { id: 'pass', text: '"통과!" 하고 넘겼어요' }] }, target: { pick: ['cut', 'same'] }, difficulty: 0.3,
                  hints: ['카드마다 친구 차례를 빼앗았는지 물어봐요. 말을 적게 한 것은 차례를 빼앗은 것이 아니에요.', '고른 카드가 친구 말을 끊거나 겹친 모습인지 다시 봐요.', '친구 말 중간에 말하기, 한꺼번에 말하기처럼 차례가 겹친 모습만 골라요.'] },
              ],
            },
            {
              id: 'a3', title: '활동 3. 친구의 돌아보기 바로잡기', minutes: 8, tool: 'emotion',
              teacher: '"준호는 말을 가장 많이 해서 말차례를 잘 지켰다고 해요. 맞을까요?" 고르기 전에 짝과 먼저 말해 보게 한다. 하윤이 문항에서 "한 번만 말했으니 못한 거예요"라는 학생에게 "하윤이는 친구 말을 끊었나요?"라고 되묻는다.',
              task: '친구가 대화를 돌아보며 한 말을 읽고, 바르게 돌아보는 방법을 골라요.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '준호가 "나는 말을 제일 많이 했으니 말차례를 잘 지켰어." 해요. 어떻게 말해 줄까요?', toolOptions: { mode: 'branch', who: '준호', situation: '모둠 대화가 끝나고 준호가 "나는 말을 제일 많이 했으니 말차례를 잘 지켰어." 하고 말해요.', choices: [{ id: 'yes', text: '"맞아, 많이 말하면 잘한 거야."', result: '준호는 친구 말을 끊은 것을 모르고 지나가요', mood: '걱정', why: '말을 많이 한 것과 차례를 지킨 것은 같을까요?' }, { id: 'check', text: '"끝까지 기다렸는지 점검표로 보자."', result: '준호가 두 번 끼어든 것을 찾아내고 바꿀 점을 정해요', mood: '뿌듯함' }] }, target: { choice: 'check' }, difficulty: 0.2 },
                { prompt: '하윤이는 한 번만 말했지만 끝까지 기다렸어요. 하윤이의 말차례는 어떤가요?', toolOptions: { mode: 'branch', who: '하윤', situation: '하윤이는 모둠에서 한 번만 말했지만, 친구들 말을 끝까지 기다렸어요.', choices: [{ id: 'bad', text: '한 번만 말해서 못 지켰어요', result: '하윤이가 잘한 점을 놓쳐요', mood: '속상함', why: '하윤이는 친구 말을 끊었나요?' }, { id: 'good', text: '끝까지 기다려서 잘 지켰어요', result: '하윤이가 잘한 점을 알고 다음에도 기다려요', mood: '기쁨' }, { id: 'none', text: '말을 적게 하면 점검할 수 없어요', result: '하윤이는 돌아볼 기회를 잃어요', mood: '걱정', why: '기다린 것도 점검표에 표시할 수 있어요.' }] }, target: { choice: 'good' }, difficulty: 0.25,
                  levels: { easy: { toolOptions: { choices: [{ id: 'bad', text: '한 번만 말해서 못 지켰어요', result: '하윤이가 잘한 점을 놓쳐요', mood: '속상함', why: '하윤이는 친구 말을 끊었나요?' }, { id: 'good', text: '끝까지 기다려서 잘 지켰어요', result: '하윤이가 잘한 점을 알고 다음에도 기다려요', mood: '기쁨' }] } } },
                  conclude: '말을 적게 했어도 끝까지 기다렸다면 말차례를 잘 지킨 거예요.' },
                { prompt: '내 점검표에 △가 있다면 무엇을 바꾸고 싶은지 짝에게 한 가지 말해 보세요.', free: true, talk: true },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"점검표에 ○가 많은 친구가 꼭 말을 많이 한 친구였나요?" 손을 들어 보게 한 뒤 몇 명의 점검표를 실물 화상기로 보여 준다(이름은 가린다). △를 정직하게 표시한 학생을 칭찬한다. 출구 1번에서 말을 많이 한 카드를 고른 학생은 이 주제의 대표 오개념을 가진 것이니 다음 시간에 점검표 항목을 다시 읽어 준다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '말차례를 지켰어요', cards: [{ id: 'turn', text: '내 차례에 말했어요' }, { id: 'eyes', text: '말하는 친구를 보았어요' }, { id: 'most', text: '말을 가장 오래 했어요' }, { id: 'fast', text: '가장 빨리 대답했어요' }] }, prompt: '말차례를 지켰다는 것을 알려 주는 모습을 모두 골라 보세요.', target: { pick: ['turn', 'eyes'] }, difficulty: 0.25 },
            { type: 'choice', prompt: '서준이는 말을 두 번 했고, 친구 말을 끝까지 기다렸어요. 서준이의 말차례는?', options: ['적게 말해서 못 지켰어요', '끝까지 기다려서 잘 지켰어요', '알 수 없어요'], answer: 1, difficulty: 0.2, explain: '말의 양이 아니라 기다렸는지, 끼어들지 않았는지로 돌아봐요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '말차례 점검표',
        items: [
          { type: 'table', prompt: '모둠 대화를 마친 뒤 내 모습에 ○(잘했어요)나 △(아직이에요)를 쓰세요.', columns: ['점검할 것', '○ / △'], cells: [['친구 말이 끝날 때까지 기다렸나요?', ''], ['중간에 끼어들지 않았나요?', ''], ['다음 사람을 알려 주었나요?', '']] },
          { type: 'check', prompt: '말차례를 지켰다는 것을 알려 주는 모습을 모두 골라 ✓ 하세요.', options: ['끝까지 기다렸어요', '말을 제일 많이 했어요', '끼어들지 않았어요', '목소리가 제일 컸어요'], answer: '끝까지 기다렸어요, 끼어들지 않았어요' },
          { type: 'choice', prompt: '한 번만 말했지만 끝까지 기다린 친구는 어떤가요?', options: ['말차례를 잘 지켰어요', '말차례를 못 지켰어요'], answer: '말차례를 잘 지켰어요' },
          { type: 'short', prompt: '점검표에서 △를 한 것이 있다면, 다음에 바꿀 점을 한 가지 쓰세요.' },
        ],
        easy: {
          note: '말을 얼마나 했는지가 아니라, 친구 차례를 지켰는지 봐요.',
          items: [
            { type: 'table', prompt: '내 모습에 ○나 △를 쓰세요.', columns: ['점검할 것', '○ / △'], cells: [['끝까지 기다렸나요?', ''], ['끼어들지 않았나요?', '']] },
            { type: 'choice', prompt: '말차례를 지킨 모습에 ○ 하세요.', options: ['끝까지 기다렸어요', '말을 제일 많이 했어요'], answer: '끝까지 기다렸어요' },
            { type: 'choice', prompt: '말차례를 지키지 않은 모습에 ○ 하세요.', options: ['친구 말 중간에 말했어요', '"통과!" 하고 넘겼어요'], answer: '친구 말 중간에 말했어요' },
            { type: 'draw', prompt: '모둠에서 친구 말을 끝까지 듣는 내 모습을 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '고르기 문항은 맞게 넣은 카드에 초록 테두리가 생기고, 준호 문항은 카드가 두 장이에요. 점검표는 두 줄짜리를 써요.',
        base: '카드를 모두 고른 뒤 확인해요.',
        challenge: '더 해 보기(지키지 않은 모습 고르기)까지 풀고, △를 한 항목마다 그때 어떤 일이 있었는지 짝에게 말해요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 말차례를 지켰는지보다 말을 많이 했는지로 스스로 평가한다(이 주제의 대표 오개념) → 점검표에 말의 양을 묻는 칸이 없다는 것을 보여 준다. ② 점검표에 모두 ○를 한다 → 화면 눈금과 점검표 모두 정답이 없고 △가 있어야 다음에 바꿀 점을 찾을 수 있다고 말한다. ③ 말을 적게 한 친구를 "못했다"고 말한다 → 기다리기도 말차례를 지키는 일이라고 짚는다. 활동 1의 대화는 4분, 점검표 2분이며 대화가 먼저 끝나야 점검을 시작한다.',
    }),

    // ───────────────────────── 14. 연습: 말을 적게 한 친구에게 차례 넘기기 ─────────────────────────
    L(14, {
      title: '말을 적게 한 친구를 살펴 부드럽게 차례 넘기기',
      objective: '모둠에서 누가 말을 적게 했는지 세어 보고, 그 친구에게 다음 차례를 부드러운 말로 넘길 수 있다.',
      standards: TALK,
      illustration: ART('a small group of four children at a table, one child counting dots on a paper tally card and smiling toward a quiet friend', [
        { motif: 'sun', x: 404, y: 56, s: 0.8 }, { motif: 'cloud', x: 120, y: 52 }, { motif: 'hills', y: 208 },
        { motif: 'tree', x: 90, y: 216 }, { motif: 'flower', x: 390, y: 228 }, { motif: 'bird', x: 300, y: 70 },
        { motif: 'text', x: 240, y: 140, text: '너는 어떻게 생각해?', size: 24 },
      ]),
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '"모둠에서 한 친구만 계속 말하고 한 친구는 한 번도 말하지 못했다면, 그 친구 생각은 알 수 있을까요?" 칠판에 네 이름(가명)을 쓰고 말할 때마다 점을 하나씩 찍는 \'말 점 세기\'를 보여 준다. 시연 단추로 점이 가장 적은 친구 카드가 \'다음 차례\' 바구니에 들어가는 모습을 보여 준다. "점이 적은 친구에게 차례를 넘겨 주면 모두의 생각을 들을 수 있어요."',
          student: '말을 적게 한 친구를 어떻게 찾을까요?',
          demo: { tool: 'mindmap', options: { mode: 'pick', basket: '다음 차례', shuffle: false, cards: [{ id: 'a', text: '민지 ●●●' }, { id: 'b', text: '서준 ●' }] }, sequence: [{ pick: ['b'] }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 말 점을 세어 다음 차례 고르기', minutes: 9, tool: 'mindmap',
              teacher: '"점 하나는 한 번 말한 것이에요. 점을 손가락으로 세어 봐요." 카드마다 소리 내어 점을 세게 한다. 점이 가장 많은 친구를 고른 학생에게 "그 친구는 벌써 많이 말했어요. 누구 생각을 아직 못 들었나요?"라고 묻는다. 둘째 문항처럼 한 번도 말하지 않은 친구가 둘이면 둘 다 넘겨줄 친구라는 것을 짚는다.',
              task: '말 점을 세어 보고, 다음 차례를 넘겨줄 친구를 골라 바구니에 넣어요.',
              levels: { easy: HELP, base: {}, challenge: {} },
              items: [
                { prompt: '말 점이 가장 적은 친구를 골라 다음 차례 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '다음 차례', cards: [{ id: 'mj', text: '민지 ●●●' }, { id: 'jh', text: '준호 ●●' }, { id: 'sj', text: '서준 ●' }] }, target: { pick: ['sj'] }, difficulty: 0.15,
                  hints: ['카드마다 점을 손가락으로 하나씩 세어 봐요. 점 하나가 한 번 말한 거예요.', '고른 친구의 점이 다른 친구보다 정말 적은지 다시 세어 봐요.', '점이 가장 적은 카드 하나를 골라 넣어요.'] },
                { prompt: '아직 한 번도 말하지 않은 친구를 모두 골라 넣어 보세요.', toolOptions: { mode: 'pick', basket: '다음 차례', cards: [{ id: 'hy', text: '하윤 ●●' }, { id: 'jw', text: '지우 (점 없음)' }, { id: 'jh', text: '준호 ●●●●' }, { id: 'yr', text: '예린 (점 없음)' }] }, target: { pick: ['jw', 'yr'] }, difficulty: 0.2,
                  levels: { easy: { prompt: '아직 한 번도 말하지 않은 친구를 골라 넣어 보세요.', toolOptions: { cards: [{ id: 'hy', text: '하윤 ●●' }, { id: 'jw', text: '지우 (점 없음)' }] }, target: { pick: ['jw'] } } },
                  conclude: '한 번도 말하지 않은 친구가 둘이면, 두 친구 모두에게 차례를 넘겨요.' },
                { prompt: '다섯 친구의 말 점이에요. 점이 가장 적은 친구를 골라 넣어 보세요.', toolOptions: { mode: 'pick', basket: '다음 차례', cards: [{ id: 'mj', text: '민지 ●●●' }, { id: 'jh', text: '준호 ●●●●' }, { id: 'sj', text: '서준 ●●' }, { id: 'hy', text: '하윤 ●●●' }, { id: 'jw', text: '지우 ●' }] }, target: { pick: ['jw'] }, difficulty: 0.3,
                  levels: { challenge: { prompt: '여섯 친구의 말 점이에요. 점이 가장 적은 친구를 골라 넣어 보세요.', toolOptions: { cards: [{ id: 'mj', text: '민지 ●●●' }, { id: 'jh', text: '준호 ●●●●' }, { id: 'sj', text: '서준 ●●' }, { id: 'hy', text: '하윤 ●●●' }, { id: 'jw', text: '지우 ●' }, { id: 'yr', text: '예린 ●●' }] }, target: { pick: ['jw'] } } } },
              ],
            },
            {
              id: 'a2', title: '활동 2. 부드럽게 차례 넘기는 말 고르기', minutes: 9, tool: 'emotion',
              teacher: '"서준이에게 차례를 넘길 때 어떤 말을 들으면 말하고 싶어질까요?" 교사가 "서준이는 왜 말을 안 해?"와 "서준아, 너는 어떻게 생각해?"를 서로 다른 목소리로 들려주고 마음을 견주게 한다. 둘째 문항에서 "빨리!"를 고른 학생에게 "재촉을 들으면 생각이 더 잘 날까요?"라고 묻는다.',
              task: '말을 적게 한 친구에게 차례를 넘길 때 알맞은 말과 행동을 골라 결과를 봐요.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '서준이가 아직 한 번도 말하지 않았어요. 어떻게 말할까요?', toolOptions: { mode: 'branch', who: '나', situation: '모둠에서 서준이만 아직 한 번도 말하지 않았어요.', choices: [{ id: 'blame', text: '"서준이는 왜 말을 안 해?"', result: '서준이가 얼굴이 빨개지고 더 조용해져요', mood: '속상함', why: '꾸중처럼 들리는 말을 들으면 말하고 싶어질까요?' }, { id: 'invite', text: '"서준아, 너는 어떻게 생각해?"', result: '서준이가 자기 생각을 말해요', mood: '기쁨' }, { id: 'me', text: '내가 또 말해요', result: '서준이 생각은 끝까지 아무도 몰라요', mood: '걱정', why: '나는 벌써 몇 번 말했나요?' }] }, target: { choice: 'invite' }, difficulty: 0.15,
                  levels: { easy: { toolOptions: { choices: [{ id: 'blame', text: '"서준이는 왜 말을 안 해?"', result: '서준이가 얼굴이 빨개지고 더 조용해져요', mood: '속상함', why: '꾸중처럼 들리는 말을 들으면 말하고 싶어질까요?' }, { id: 'invite', text: '"서준아, 너는 어떻게 생각해?"', result: '서준이가 자기 생각을 말해요', mood: '기쁨' }] } } } },
                { prompt: '차례를 받은 예린이가 "아직 생각 중이야." 해요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '나', situation: '차례를 넘겨받은 예린이가 "아직 생각 중이야." 하고 말해요.', choices: [{ id: 'rush', text: '"빨리 말해!" 하고 재촉해요', result: '예린이가 당황해서 생각이 더 안 나요', mood: '걱정', why: '재촉을 들으면 생각이 더 잘 날까요?' }, { id: 'later', text: '"생각나면 말해 줘." 하고 기다려요', result: '조금 뒤에 예린이가 손을 들고 말해요', mood: '편안함' }] }, target: { choice: 'later' }, difficulty: 0.2 },
                { prompt: '모둠 대화 중에 내 말 점이 가장 많다는 것을 알았어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '나', situation: '말 점을 세어 보니 내가 가장 많이 말했어요.', choices: [{ id: 'more', text: '잘하고 있으니 계속 말해요', result: '다른 친구들은 말할 차례를 얻지 못해요', mood: '속상함', why: '내가 계속 말하면 친구들 차례는 어떻게 될까요?' }, { id: 'listen', text: '이번에는 듣는 쪽이 되어 다른 친구에게 넘겨요', result: '모둠 친구 모두의 생각을 들을 수 있어요', mood: '뿌듯함' }, { id: 'stop', text: '화가 나서 대화를 그만둬요', result: '모둠 대화가 끊겨요', mood: '화남', why: '그만두지 않고 할 수 있는 일은 무엇일까요?' }] }, target: { choice: 'listen' }, difficulty: 0.25,
                  conclude: '말을 많이 했다면 이번에는 듣는 쪽이 되어 차례를 넘겨요.' },
              ],
            },
            {
              id: 'a3', title: '활동 3. 말 점 세며 모둠 대화하기', minutes: 8, tool: 'mindmap',
              teacher: '네 명 모둠마다 한 명이 \'점 찍는 사람\'이 되어 활동지 말 점 칸에 점을 찍는다(돌아가며 바꾼다). 이야깃거리는 "우리 반에서 기르고 싶은 동물"이다. 3분 뒤 점을 보고 가장 적은 친구에게 부드러운 말로 차례를 넘긴다. 끝나면 화면에서 넘기는 말을 하나 더 고른다.',
              task: '모둠에서 말 점을 찍으며 대화하고, 점이 적은 친구에게 부드럽게 차례를 넘겨요.',
              levels: { easy: HELP, base: {}, challenge: {} },
              items: [
                { prompt: '네 명이 기르고 싶은 동물을 이야기하며 활동지에 말 점을 찍고, 점이 적은 친구에게 차례를 넘겨 보세요.', free: true, talk: true },
                { prompt: '말을 적게 한 친구에게 차례를 넘기는 부드러운 말을 모두 골라 보세요.', toolOptions: { mode: 'pick', basket: '부드러운 말', cards: [{ id: 'q', text: '"너는 어떤 동물이 좋아?"' }, { id: 'turn', text: '"이번엔 네 차례야, 듣고 싶어."' }, { id: 'why', text: '"넌 왜 맨날 조용해?"' }, { id: 'fast', text: '"빨리 하나만 말해."' }] }, target: { pick: ['q', 'turn'] }, difficulty: 0.2,
                  hints: ['카드를 내가 들었다고 생각하며 읽어 봐요. 말하고 싶어지는 말인가요?', '고른 카드 가운데 꾸중이나 재촉처럼 들리는 말이 있는지 다시 봐요.', '친구 생각을 묻거나 듣고 싶다고 말하는 카드만 남겨요.'] },
                { prompt: '모둠 대화 상황과 알맞은 행동을 이어 보세요.', toolOptions: { mode: 'match', topic: '모둠 대화', slots: [{ id: 'few', label: '말을 한 번도 안 한 친구가 있어요' }, { id: 'many', label: '내가 가장 많이 말했어요' }], cards: [{ id: 'ask', text: '그 친구 생각을 물어요' }, { id: 'hear', text: '이번엔 들어요' }, { id: 'loud', text: '더 크게 말해요' }] }, target: { match: { few: 'ask', many: 'hear' } }, difficulty: 0.2 },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"오늘 모둠의 말 점은 지난번보다 고르게 찍혔나요?" 모둠마다 가장 많은 점과 가장 적은 점을 견주어 말하게 한다. 출구 1번에서 점이 가장 많은 친구를 고른 학생은 \'다음 차례\'를 \'가장 잘하는 친구\'로 안 것이니 다음 시간에 다시 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '다음 차례', cards: [{ id: 'hy', text: '하윤 ●●●' }, { id: 'yr', text: '예린 ●' }, { id: 'jh', text: '준호 ●●' }, { id: 'mj', text: '민지 ●●●●' }] }, prompt: '말 점이 가장 적은 친구를 골라 다음 차례 바구니에 넣어 보세요.', target: { pick: ['yr'] }, difficulty: 0.15 },
            { type: 'choice', prompt: '한 번도 말하지 않은 친구에게 할 말로 알맞은 것은?', options: ['"넌 왜 말을 안 해?"', '"너는 어떻게 생각해?"', '"빨리 말해!"'], answer: 1, difficulty: 0.15, explain: '친구 생각을 묻는 부드러운 말을 들으면 말하고 싶어져요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '말 점 세기',
        items: [
          { type: 'table', prompt: '모둠 친구가 말할 때마다 점(●)을 찍으세요.', columns: ['친구', '말 점'], cells: [['나', ''], ['친구 1', ''], ['친구 2', ''], ['친구 3', '']] },
          { type: 'choice', prompt: '다음 차례를 넘겨줄 친구에 ○ 하세요.', options: ['민지 ●●●', '준호 ●●', '서준 ●'], answer: '서준 ●' },
          { type: 'blank', prompt: '말을 적게 한 친구에게 할 부드러운 말을 쓰세요.', text: '"서준아, 너는 ______?"', answer: '어떻게 생각해' },
          { type: 'short', prompt: '내 말 점이 가장 많았다면 다음에 어떻게 할지 쓰세요.' },
        ],
        easy: {
          note: '점을 하나씩 손가락으로 세어 봐요. 점이 적은 친구에게 차례를 넘겨요.',
          items: [
            { type: 'choice', prompt: '점이 더 적은 친구에 ○ 하세요.', options: ['민지 ●●●', '서준 ●'], answer: '서준 ●' },
            { type: 'choice', prompt: '부드러운 말에 ○ 하세요.', options: ['"너는 어떻게 생각해?"', '"빨리 말해!"'], answer: '"너는 어떻게 생각해?"' },
            { type: 'table', prompt: '친구가 말할 때마다 점을 찍으세요.', columns: ['친구', '말 점'], cells: [['나', ''], ['짝', '']] },
            { type: 'draw', prompt: '친구에게 차례를 넘겨주는 내 모습을 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '점 세기 문항은 맞게 넣은 카드에 초록 테두리가 생기고, 둘째 문항은 카드가 두 장이에요. 첫 문항 보기는 두 개예요.',
        base: '카드를 모두 고른 뒤 확인해요.',
        challenge: '점 세기 셋째 문항에 여섯 친구가 나오고 점 수가 비슷한 카드가 섞여요. 모둠 대화에서 점 찍는 사람을 맡아요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 말을 많이 한 친구가 잘한 것이라 여겨 그 친구에게 또 차례를 준다(앞 차시의 오개념이 이어짐) → 점이 적은 친구 생각을 아직 못 들었다고 짚는다. ② 조용한 친구를 탓하는 말로 차례를 넘긴다 → 묻는 말과 꾸중하는 말을 목소리로 견주어 들려준다. ③ 점 찍는 사람이 대화에 끼지 못한다 → 1분마다 점 찍는 사람을 바꾼다. 말하기를 몹시 어려워하는 학생이 있으면 "통과"를 허락하고, 억지로 말을 시키지 않는다.',
    }),

    // ───────────────────────── 15. 확장: 바꿀 점 정하고 다시 대화하기 ─────────────────────────
    L(15, {
      title: '바꿀 점 하나를 정하고 다시 대화하며 지켜 보기',
      objective: '지난 대화에서 고칠 모습에 알맞은 바꿀 점을 하나 정하고, 다시 대화한 뒤 그 점을 지켰는지 돌아볼 수 있다.',
      standards: TALK,
      illustration: ART('a child pinning a single paper star note that says one goal onto a small board, while classmates talk again at a table behind', [
        { motif: 'star', x: 400, y: 60 }, { motif: 'cloud', x: 110, y: 52 }, { motif: 'hills', y: 208 },
        { motif: 'tree', x: 90, y: 216 }, { motif: 'house', x: 390, y: 218 }, { motif: 'flower', x: 250, y: 230 },
        { motif: 'text', x: 240, y: 140, text: '이번엔 끝까지 기다릴래!', size: 22 },
      ]),
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '13·14차시 점검표와 말 점 칸을 다시 펴게 한다. "△를 한 곳이 있나요? 그곳을 바꾸려면 무엇을 하면 될까요?" 한두 명의 대답을 듣고, 시연 단추로 \'친구 말 중간에 끼어들었어요\'에 \'손가락 접고 기다리기\'가 이어지는 모습을 보여 준다. "바꿀 점은 한 번에 하나만 정해요. 하나를 꼭 지키는 것이 여러 개를 생각만 하는 것보다 좋아요."',
          student: '지난 대화에서 바꾸고 싶은 점이 있나요?',
          demo: { tool: 'mindmap', options: { mode: 'match', topic: '바꿀 점', shuffle: false, slots: [{ id: 'cut', label: '친구 말 중간에 끼어들었어요' }], cards: [{ id: 'fold', text: '손가락 접고 기다리기' }, { id: 'loud', text: '더 크게 말하기' }] }, sequence: [{ match: { cut: 'fold' } }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 고칠 모습에 맞는 바꿀 점 잇기', minutes: 9, tool: 'mindmap',
              teacher: '"이 친구는 무엇이 문제였나요? 그것을 고치는 방법은 무엇일까요?" 칸마다 문제를 먼저 말로 짚게 한다. 딴 곳을 본 친구에게 \'더 크게 말하기\'를 이은 학생에게 "딴 곳을 본 것과 목소리 크기는 상관이 있을까요?"라고 묻는다.',
              task: '친구가 대화에서 고쳐야 할 모습을 읽고, 알맞은 바꿀 점을 이어요.',
              levels: { easy: HELP, base: {}, challenge: {} },
              items: [
                { prompt: '고칠 모습과 알맞은 바꿀 점을 이어 보세요.', toolOptions: { mode: 'match', topic: '바꿀 점', slots: [{ id: 'cut', label: '친구 말 중간에 끼어들었어요' }, { id: 'away', label: '말하는 친구를 안 봤어요' }], cards: [{ id: 'fold', text: '손가락 접고 기다리기' }, { id: 'look', text: '말하는 친구 얼굴 보기' }, { id: 'loud', text: '더 크게 말하기' }] }, target: { match: { cut: 'fold', away: 'look' } }, difficulty: 0.15 },
                { prompt: '이번에는 세 친구의 고칠 모습이에요. 바꿀 점을 이어 보세요.', toolOptions: { mode: 'match', topic: '바꿀 점', slots: [{ id: 'mono', label: '나만 계속 말했어요' }, { id: 'nonext', label: '다음 사람을 안 알려 줬어요' }, { id: 'same', label: '친구와 한꺼번에 말했어요' }], cards: [{ id: 'listen', text: '이번엔 듣는 쪽 되기' }, { id: 'name', text: '끝에 다음 친구 이름 부르기' }, { id: 'yield', text: '"먼저 말해." 하고 양보하기' }] }, target: { match: { mono: 'listen', nonext: 'name', same: 'yield' } }, difficulty: 0.25,
                  levels: { challenge: { prompt: '세 친구의 고칠 모습에 바꿀 점을 이어 보세요. 어울리지 않는 카드도 섞여 있어요.', toolOptions: { cards: [{ id: 'listen', text: '이번엔 듣는 쪽 되기' }, { id: 'name', text: '끝에 다음 친구 이름 부르기' }, { id: 'yield', text: '"먼저 말해." 하고 양보하기' }, { id: 'fast', text: '더 빨리 말하기' }, { id: 'quiet', text: '아무 말도 안 하기' }] }, target: { match: { mono: 'listen', nonext: 'name', same: 'yield' } } } },
                  hints: ['칸마다 무엇이 문제였는지 먼저 말해 보고, 그 문제를 없애 주는 행동을 찾아요.', '이은 카드가 그 칸의 문제를 정말 고쳐 주는지 하나씩 다시 읽어 봐요.', '혼자 말한 친구는 듣기, 다음 사람을 안 알린 친구는 이름 부르기, 한꺼번에 말한 친구는 양보하기를 이어요.'] },
                { prompt: '더 해 보기: 두 친구의 고칠 모습에 바꿀 점을 이어 보세요.', extra: true, toolOptions: { mode: 'match', topic: '바꿀 점', slots: [{ id: 'toy', label: '듣다가 지우개를 만지작거렸어요' }, { id: 'small', label: '다음 친구 이름을 너무 작게 불렀어요' }], cards: [{ id: 'hands', text: '손은 무릎에 두고 듣기' }, { id: 'clear', text: '친구를 보며 또렷하게 부르기' }, { id: 'fast', text: '더 빨리 말하기' }] }, target: { match: { toy: 'hands', small: 'clear' } }, difficulty: 0.2 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 내 바꿀 점 정하기', minutes: 5, tool: 'emotion',
              teacher: '"바꿀 점은 몇 개를 정할까요?" 다섯 개를 한꺼번에 정하겠다는 학생에게 "다섯 개를 대화하면서 모두 기억할 수 있을까요?"라고 묻는다. 고른 뒤 활동지 별 칸에 내 바꿀 점 하나를 쓰게 한다.',
              task: '바꿀 점을 어떻게 정하면 좋을지 골라 결과를 보고, 활동지 별 칸에 내 바꿀 점 하나를 써요.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '민지는 바꿀 점을 정하려고 해요. 어떻게 정할까요?', toolOptions: { mode: 'branch', who: '민지', situation: '민지의 점검표에 △가 세 개 있어요.', choices: [{ id: 'all', text: '세 개를 모두 한꺼번에 바꿔요', result: '대화하다가 무엇을 바꾸려 했는지 잊어버려요', mood: '걱정', why: '세 가지를 대화하면서 모두 기억할 수 있을까요?' }, { id: 'one', text: '가장 고치고 싶은 하나를 골라요', result: '대화하는 내내 그 하나를 기억하고 지켜요', mood: '뿌듯함' }, { id: 'none', text: '바꿀 점을 정하지 않아요', result: '다음 대화도 지난번과 똑같아요', mood: '속상함', why: '정하지 않으면 무엇이 달라질까요?' }] }, target: { choice: 'one' }, difficulty: 0.2,
                  levels: { easy: { toolOptions: { choices: [{ id: 'all', text: '세 개를 모두 한꺼번에 바꿔요', result: '대화하다가 무엇을 바꾸려 했는지 잊어버려요', mood: '걱정', why: '세 가지를 대화하면서 모두 기억할 수 있을까요?' }, { id: 'one', text: '가장 고치고 싶은 하나를 골라요', result: '대화하는 내내 그 하나를 기억하고 지켜요', mood: '뿌듯함' }] } } } },
                { prompt: '준호는 점검표에 모두 ○를 했어요. 바꿀 점은 어떻게 할까요?', toolOptions: { mode: 'branch', who: '준호', situation: '준호는 점검표에 모두 ○를 했어요. 그런데 말 점은 준호가 가장 많아요.', choices: [{ id: 'skip', text: '모두 ○이니 바꿀 점이 없어요', result: '준호는 이번에도 혼자 많이 말해요', mood: '걱정', why: '말 점이 가장 많다는 것은 무엇을 알려 줄까요?' }, { id: 'look', text: '말 점을 보고 듣는 쪽 되기를 정해요', result: '친구들이 말할 차례를 더 얻어요', mood: '기쁨' }] }, target: { choice: 'look' }, difficulty: 0.3,
                  conclude: '점검표가 모두 ○여도 말 점 같은 다른 기록을 보면 바꿀 점을 찾을 수 있어요.' },
                { prompt: '내 바꿀 점 하나를 활동지 별 칸에 쓰고, 짝에게 읽어 주세요.', free: true, talk: true },
              ],
            },
            {
              id: 'a3', title: '활동 3. 다시 대화하고 돌아보기', minutes: 12, tool: 'emotion',
              teacher: '세 명 모둠으로 "비 오는 날 교실에서 할 놀이"를 4분 동안 이야기한다. 대화 전에 모두 자기 별 칸을 한 번 소리 내어 읽는다. 대화가 끝난 뒤에만 화면 눈금을 고르게 한다(대화 전에 고르지 않는다). "내 바꿀 점을 얼마나 지켰는지 떠오른 대로 골라요. 잘 못 지켰어도 괜찮아요. 다음에 또 해 보면 돼요."',
              task: '바꿀 점을 기억하며 모둠에서 다시 대화하고, 대화를 마친 뒤 내가 그 점을 얼마나 지켰는지 솔직하게 골라요.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '셋이 모둠이 되어 비 오는 날 할 놀이를 4분 동안 이야기하며 내 바꿀 점을 지켜 보세요.', free: true, talk: true },
                { prompt: '대화를 마쳤어요. 내 바꿀 점을 얼마나 지켰나요? 솔직하게 골라요.', toolOptions: SELF('바꿀 점 하나를 정하고 모둠에서 다시 대화했어요.', '뿌듯함', '내 바꿀 점을 얼마나 지켰나요?'), target: { level: 'any' }, difficulty: 0.05, hints: SELF_HINTS },
                { prompt: '다시 대화했는데 또 끼어들고 말았어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '나', situation: '바꿀 점이 "끝까지 기다리기"였는데, 다시 대화하다가 또 한 번 끼어들었어요.', choices: [{ id: 'give', text: '"나는 원래 못해." 하고 그만둬요', result: '다음 대화에서도 바뀌지 않아요', mood: '슬픔', why: '한 번 못 지켰다고 다음에도 못 할까요?' }, { id: 'again', text: '"미안, 먼저 말해." 하고 다시 기다려요', result: '친구가 말을 마치고, 나도 다음 차례에 말해요', mood: '편안함' }] }, target: { choice: 'again' }, difficulty: 0.2,
                  conclude: '바꿀 점을 못 지켰을 때도 바로 사과하고 다시 지키면 돼요.' },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"다시 대화해 보니 지난번과 무엇이 달랐나요?" 두세 명이 자기 바꿀 점과 달라진 점을 말한다. 바꿀 점을 다 못 지킨 학생도 다시 해 본 것을 칭찬한다. 출구 1번을 틀린 학생은 문제와 해결 방법을 잇는 연습이 더 필요하니, 다음 대화 시간에 바꿀 점을 교사와 함께 정한다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '바꿀 점', slots: [{ id: 'cut', label: '친구가 천천히 말할 때 대신 끝냈어요' }], cards: [{ id: 'wait', text: '다 말할 때까지 기다리기' }, { id: 'name', text: '다음 친구 이름 부르기' }] }, prompt: '고칠 모습에 알맞은 바꿀 점을 이어 보세요.', target: { match: { cut: 'wait' } }, difficulty: 0.2 },
            { type: 'choice', prompt: '바꿀 점은 한 번에 몇 개를 정하면 좋을까요?', options: ['하나', '다섯 개', '정하지 않아요'], answer: 0, difficulty: 0.1, explain: '하나를 정해야 대화하는 내내 기억하고 지킬 수 있어요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '내 바꿀 점',
        items: [
          { type: 'table', prompt: '고칠 모습에 알맞은 바꿀 점을 쓰세요.', columns: ['고칠 모습', '바꿀 점'], cells: [['친구 말 중간에 끼어들었어요', ''], ['말하는 친구를 안 봤어요', ''], ['나만 계속 말했어요', '']] },
          { type: 'blank', prompt: '★ 내 바꿀 점 하나를 쓰세요.', text: '나는 다음 대화에서 ______.', answer: '(스스로 정한 바꿀 점)' },
          { type: 'choice', prompt: '바꿀 점을 못 지켰을 때 알맞은 모습에 ○ 하세요.', options: ['그만둬요', '사과하고 다시 지켜요', '모른 척해요'], answer: '사과하고 다시 지켜요' },
          { type: 'short', prompt: '다시 대화해 보니 무엇이 달라졌는지 쓰세요.' },
        ],
        easy: {
          note: '바꿀 점은 하나만 정해요.',
          items: [
            { type: 'choice', prompt: '친구 말 중간에 끼어든 친구의 바꿀 점에 ○ 하세요.', options: ['끝까지 기다리기', '더 크게 말하기'], answer: '끝까지 기다리기' },
            { type: 'choice', prompt: '바꿀 점은 몇 개를 정할까요?', options: ['하나', '다섯 개'], answer: '하나' },
            { type: 'blank', prompt: '★ 내 바꿀 점을 쓰세요.', text: '나는 ______.', answer: '(스스로 정한 바꿀 점)' },
            { type: 'draw', prompt: '바꿀 점을 지키며 대화하는 내 모습을 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '잇기 문항은 맞게 이은 카드에 초록 테두리가 생겨요. 바꿀 점 정하기 첫 문항은 보기가 두 개예요.',
        base: '카드를 모두 이은 뒤 확인해요.',
        challenge: '세 친구 잇기에 어울리지 않는 카드가 더 나와요. 다시 대화한 뒤 내 바꿀 점을 지킨 순간을 짝에게 한 문장으로 말해요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 바꿀 점을 "말 많이 하기"로 정한다(말의 양으로 평가하는 오개념) → 점검표 항목 가운데서 고르게 한다. ② 바꿀 점을 여러 개 정하고 하나도 기억하지 못한다 → 별 칸은 하나만 둔다. ③ 다시 대화에서 또 실수하면 포기한다 → 사과하고 다시 지키는 것도 바꾼 것이라고 말해 준다. 활동 3은 대화(4분)를 마친 뒤에 눈금을 고르는 순서를 지킨다.',
    }),

    // ───────────────────────── 16. 읽을거리가 있는 곳 찾기 ─────────────────────────
    L(16, {
      title: '학교와 집에서 읽을거리가 있는 곳 찾기',
      objective: '학교와 집에서 읽을거리를 찾을 수 있는 곳을 나누어 말하고, 읽을거리와 그것이 있는 곳을 이을 수 있다.',
      standards: READ,
      illustration: ART('a cozy school library corner and a living room bookshelf side by side, with a child holding a picture book and a paper lunch menu on the wall', [
        { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 120, y: 52 }, { motif: 'hills', y: 208 },
        { motif: 'house', x: 110, y: 214 }, { motif: 'tree', x: 384, y: 216 }, { motif: 'leaf', x: 250, y: 230 },
        { motif: 'text', x: 240, y: 140, text: '어디서 읽을까?', size: 26 },
      ]),
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '"책은 어디에 있을까요?" 대부분 "교실 책꽂이"라고 대답한다. 교사가 급식 차림표, 가정통신문, 우유갑을 하나씩 꺼내 보이며 "이것도 읽을 수 있을까요?" 하고 묻는다. "책뿐 아니라 읽을 수 있는 글이 있는 것을 읽을거리라고 해요. 오늘은 학교와 집에서 읽을거리가 있는 곳을 찾아봐요." 시연 단추로 \'학교 도서관\' 카드가 학교 가지에 들어가는 모습을 보여 준다.',
          student: '책은 교실 책꽂이에만 있을까요?',
          demo: { tool: 'mindmap', options: { topic: '읽을거리가 있는 곳', shuffle: false, slots: [{ id: 'school', label: '학교' }, { id: 'home', label: '집' }], cards: [{ id: 'lib', text: '학교 도서관' }] }, sequence: [{ sort: { school: ['lib'] } }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 학교와 집의 읽을거리 장소 나누기', minutes: 9, tool: 'mindmap',
              teacher: '"이곳은 학교에 있나요, 집에 있나요?" 카드마다 손을 들어 보게 한다. 읽을거리가 없는 곳(모래밭)을 어느 가지에 넣은 학생에게 "모래밭에서 무엇을 읽을 수 있나요?"라고 묻는다. 냉장고 문처럼 뜻밖의 곳이 나오면 "집에 가서 냉장고 문을 살펴봐요"라고 말한다.',
              task: '읽을거리가 있는 곳을 학교와 집으로 나누어 넣어요. 읽을거리가 없는 곳은 그대로 둬요.',
              levels: { easy: HELP, base: {}, challenge: {} },
              items: [
                { prompt: '읽을거리가 있는 곳을 학교와 집으로 나누어 보세요.', toolOptions: { topic: '읽을거리가 있는 곳', slots: [{ id: 'school', label: '학교' }, { id: 'home', label: '집' }], cards: [{ id: 'lib', text: '학교 도서관' }, { id: 'shelf', text: '교실 학급 문고' }, { id: 'living', text: '거실 책장' }, { id: 'bed', text: '잠자리 머리맡 그림책' }] }, target: { sort: { school: ['lib', 'shelf'], home: ['living', 'bed'] } }, difficulty: 0.1,
                  levels: { easy: { prompt: '두 곳을 학교와 집으로 나누어 보세요.', toolOptions: { cards: [{ id: 'lib', text: '학교 도서관' }, { id: 'living', text: '거실 책장' }] }, target: { sort: { school: ['lib'], home: ['living'] } } } } },
                { prompt: '책꽂이가 아니어도 읽을거리가 있는 곳이에요. 학교와 집으로 나누어 보세요.', toolOptions: { topic: '책 말고도 있어요', slots: [{ id: 'school', label: '학교' }, { id: 'home', label: '집' }], cards: [{ id: 'menu', text: '급식실 앞 차림표' }, { id: 'nurse', text: '보건실 앞 안내문' }, { id: 'fridge', text: '냉장고 문의 가정통신문' }, { id: 'box', text: '부엌 과자 상자 뒷면' }, { id: 'sand', text: '운동장 모래밭' }] }, target: { sort: { school: ['menu', 'nurse'], home: ['fridge', 'box'] } }, difficulty: 0.25,
                  hints: ['카드마다 두 가지를 물어봐요. 읽을 글이 있나요? 학교에 있나요, 집에 있나요?', '넣은 카드에 정말 읽을 글이 있는지, 학교·집을 바르게 골랐는지 다시 봐요.', '읽을 글이 없는 곳은 어느 가지에도 넣지 않아요. 차림표와 안내문은 학교, 가정통신문과 과자 상자는 집이에요.'],
                  conclude: '책꽂이가 아니어도 차림표, 안내문, 상자 뒷면처럼 읽을거리는 곳곳에 있어요.' },
                { prompt: '더 해 보기: 동네에서 읽을거리가 있는 곳을 모두 골라 보세요.', extra: true, toolOptions: { mode: 'pick', basket: '동네 읽을거리', cards: [{ id: 'town', text: '동네 작은 도서관' }, { id: 'bus', text: '버스 정류장 노선표' }, { id: 'pond', text: '공원 연못 물' }, { id: 'swing', text: '놀이터 그네' }] }, target: { pick: ['town', 'bus'] }, difficulty: 0.2 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 읽을거리와 있는 곳 잇기', minutes: 9, tool: 'mindmap',
              teacher: '"급식 차림표는 어디에 가면 읽을 수 있나요?" 카드를 고르기 전에 실제로 본 적이 있는지 말하게 한다. 그림책을 급식실에 이은 학생에게 "급식실 게시판에 그림책이 꽂혀 있었나요?"라고 묻는다.',
              task: '읽을거리 카드를 그것이 있는 곳에 이어요.',
              levels: { easy: HELP, base: {}, challenge: {} },
              items: [
                { prompt: '읽을거리가 있는 곳에 알맞은 읽을거리를 이어 보세요.', toolOptions: { mode: 'match', topic: '어디에 있을까?', slots: [{ id: 'cafe', label: '급식실 앞 게시판' }, { id: 'lib', label: '학교 도서관 책꽂이' }], cards: [{ id: 'menu', text: '오늘의 급식 차림표' }, { id: 'pic', text: '공룡 그림책' }, { id: 'ball', text: '축구공' }] }, target: { match: { cafe: 'menu', lib: 'pic' } }, difficulty: 0.15 },
                { prompt: '집에서 찾은 읽을거리를 있는 곳에 이어 보세요.', toolOptions: { mode: 'match', topic: '우리 집 읽을거리', slots: [{ id: 'fridge', label: '냉장고 문' }, { id: 'kitchen', label: '부엌 찬장' }, { id: 'bed', label: '내 방 머리맡' }], cards: [{ id: 'note', text: '학교 가정통신문' }, { id: 'cereal', text: '시리얼 상자 글' }, { id: 'story', text: '자기 전에 읽는 동화책' }] }, target: { match: { fridge: 'note', kitchen: 'cereal', bed: 'story' } }, difficulty: 0.25,
                  levels: { easy: { prompt: '집에서 찾은 읽을거리 두 개를 있는 곳에 이어 보세요.', toolOptions: { slots: [{ id: 'fridge', label: '냉장고 문' }, { id: 'bed', label: '내 방 머리맡' }], cards: [{ id: 'note', text: '학교 가정통신문' }, { id: 'story', text: '자기 전에 읽는 동화책' }] }, target: { match: { fridge: 'note', bed: 'story' } } } } },
                { prompt: '짝에게 내가 학교와 집에서 가장 자주 가는 읽을거리 장소를 한 곳씩 말해 보세요.', free: true, talk: true },
              ],
            },
            {
              id: 'a3', title: '활동 3. 교실 읽을거리 탐험', minutes: 8, tool: 'mindmap',
              teacher: '짝과 함께 교실을 3분 동안 걸어 다니며 읽을거리가 있는 곳을 찾아 활동지 지도에 ○를 한다(게시판, 시간표, 학급 문고, 사물함 이름표, 손 씻기 안내 등). 뛰지 않고 걷는다는 약속을 먼저 한다. 돌아와 화면에서 우리 교실 읽을거리를 고른다.',
              task: '짝과 교실을 걸으며 읽을거리를 찾아 활동지에 ○ 하고, 화면에서 교실 읽을거리를 골라요.',
              levels: { easy: HELP, base: {}, challenge: {} },
              items: [
                { prompt: '짝과 교실을 3분 동안 걸으며 읽을거리가 있는 곳을 찾아 활동지 교실 지도에 ○ 해 보세요.', free: true },
                { prompt: '교실에서 찾은 읽을거리를 모두 골라 보세요.', toolOptions: { mode: 'pick', basket: '교실 읽을거리', cards: [{ id: 'time', text: '칠판 옆 시간표' }, { id: 'wash', text: '세면대 손 씻기 안내' }, { id: 'clock', text: '바늘만 있는 벽시계' }, { id: 'window', text: '맑은 유리창' }] }, target: { pick: ['time', 'wash'] }, difficulty: 0.2,
                  levels: { challenge: { prompt: '교실에서 찾은 읽을거리를 모두 골라 보세요. 헷갈리는 카드가 더 있어요.', toolOptions: { cards: [{ id: 'time', text: '칠판 옆 시간표' }, { id: 'wash', text: '세면대 손 씻기 안내' }, { id: 'name', text: '사물함 이름표' }, { id: 'clock', text: '바늘만 있는 벽시계' }, { id: 'window', text: '맑은 유리창' }, { id: 'eraser', text: '칠판지우개' }] }, target: { pick: ['time', 'wash', 'name'] } } } },
                { prompt: '오늘 찾은 곳 가운데 내일 가서 읽어 보고 싶은 곳을 짝에게 말해 보세요.', free: true, talk: true },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"오늘 처음 안 읽을거리 장소는 어디인가요?" 두세 명의 대답을 듣고 칠판에 모은다. 출구 1번에서 읽을거리가 없는 곳을 넣은 학생은 \'읽을 글이 있는가\'를 먼저 묻는 습관이 필요하다. 집에 가서 가족과 읽을거리 장소 하나를 더 찾아오는 숙제를 낸다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { topic: '읽을거리가 있는 곳', slots: [{ id: 'school', label: '학교' }, { id: 'home', label: '집' }], cards: [{ id: 'board', text: '복도 게시판' }, { id: 'toy', text: '장난감 상자 설명서' }, { id: 'puddle', text: '운동장 물웅덩이' }] }, prompt: '읽을거리가 있는 곳을 학교와 집으로 나누어 보세요. 읽을거리가 없는 곳은 그대로 둬요.', target: { sort: { school: ['board'], home: ['toy'] } }, difficulty: 0.25 },
            { type: 'choice', prompt: '읽을거리는 어디에 있을까요?', options: ['교실 책꽂이에만 있어요', '학교와 집 곳곳에 있어요', '도서관에만 있어요'], answer: 1, difficulty: 0.1, explain: '차림표, 안내문, 상자 글처럼 읽을거리는 학교와 집 곳곳에 있어요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '읽을거리가 있는 곳',
        items: [
          { type: 'table', prompt: '읽을거리가 있는 곳을 학교와 집으로 나누어 쓰세요.', columns: ['학교', '집'], rows: 3 },
          { type: 'check', prompt: '읽을거리가 있는 곳을 모두 골라 ✓ 하세요.', options: ['급식실 앞 차림표', '운동장 모래밭', '냉장고 문의 가정통신문', '놀이터 그네'], answer: '급식실 앞 차림표, 냉장고 문의 가정통신문' },
          { type: 'table', prompt: '교실 탐험: 짝과 찾은 읽을거리 장소와 그곳에서 읽을 수 있는 것을 쓰세요.', columns: ['찾은 곳', '읽을 수 있는 것'], rows: 3 },
          { type: 'short', prompt: '집에서 가족과 함께 찾은 읽을거리 장소 하나를 쓰세요.' },
        ],
        easy: {
          note: '먼저 "읽을 글이 있나요?" 하고 물어봐요.',
          items: [
            { type: 'choice', prompt: '학교에서 읽을거리가 있는 곳에 ○ 하세요.', options: ['학교 도서관', '운동장 모래밭'], answer: '학교 도서관' },
            { type: 'choice', prompt: '집에서 읽을거리가 있는 곳에 ○ 하세요.', options: ['거실 책장', '욕실 거울'], answer: '거실 책장' },
            { type: 'short', prompt: '교실에서 찾은 읽을거리 장소 하나를 쓰세요.' },
            { type: 'draw', prompt: '내가 자주 가는 읽을거리 장소를 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '나누기 첫 문항은 카드 두 장이고, 맞게 넣은 카드에 초록 테두리가 생겨요. 집 잇기는 두 칸만 나와요.',
        base: '카드를 모두 넣은 뒤 확인해요.',
        challenge: '교실 읽을거리 고르기에 헷갈리는 카드가 더 나오고, 더 해 보기(동네 읽을거리)까지 풀어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 책은 교실 책꽂이에만 있다고 여겨 다른 읽을거리를 찾지 못한다(이 주제의 대표 오개념) → 차림표·가정통신문·상자 글을 실물로 보여 준다. ② 글자가 없는 물건(벽시계 바늘, 유리창)도 읽을거리로 고른다 → "읽을 글이 있나요?"를 먼저 묻는다. ③ 교실 탐험에서 뛰어다닌다 → 걷기 약속을 먼저 하고 3분 타이머를 칠판에 띄운다. 1차시(글자가 쓰인 물건 찾기)는 한글이 쓰인 물건을 찾았고, 이 차시는 읽으러 갈 수 있는 곳을 찾는 데 무게를 둔다.',
    }),

    // ───────────────────────── 17. 연습: 좋아하는 책의 갈래와 까닭 ─────────────────────────
    L(17, {
      title: '이야기책·동시집·알려 주는 책 가운데 좋아하는 갈래 고르기',
      objective: '책 소개를 읽고 이야기책·동시집·알려 주는 책으로 나누고, 내가 좋아하는 갈래를 골라 까닭을 한 문장으로 말할 수 있다.',
      standards: READ,
      illustration: ART('three paper books standing open on a shelf, one with a bear character, one with short poem lines and raindrops, one with an ant tunnel diagram, and a child pointing at one', [
        { motif: 'sun', x: 404, y: 56, s: 0.8 }, { motif: 'cloud', x: 110, y: 52 }, { motif: 'hills', y: 208 },
        { motif: 'tree', x: 90, y: 216 }, { motif: 'flower', x: 390, y: 228 }, { motif: 'leaf', x: 250, y: 230 },
        { motif: 'text', x: 240, y: 140, text: '나는 이 책이 좋아!', size: 24 },
      ]),
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '학급 문고에서 이야기책, 동시집, 알려 주는 책(지식책)을 한 권씩 꺼내 표지와 한 쪽씩을 보여 준다. "이 세 책은 무엇이 다를까요?" 인물이 나오는지, 짧은 줄로 나뉘어 있는지, 사실을 알려 주는지를 짚는다. 시연 단추로 \'곰이 잃어버린 모자를 찾아 떠나요\' 카드가 이야기책 가지에 들어가는 모습을 보여 준다. "책은 여러 갈래가 있어요. 오늘은 내가 좋아하는 갈래를 찾고 까닭도 말해 봐요."',
          student: '세 책은 무엇이 다를까요?',
          demo: { tool: 'mindmap', options: { topic: '책의 갈래', shuffle: false, slots: [{ id: 'story', label: '이야기책' }, { id: 'poem', label: '동시집' }, { id: 'fact', label: '알려 주는 책' }], cards: [{ id: 'bear', text: '곰이 잃어버린 모자를 찾아 떠나요' }] }, sequence: [{ sort: { story: ['bear'] } }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 책 소개 읽고 갈래 나누기', minutes: 9, tool: 'mindmap',
              teacher: '"이 책에는 인물이 나와 일이 일어나나요? 짧은 줄로 노래하듯 썼나요? 사실을 알려 주나요?" 세 물음을 칠판 세 가지 옆에 붙인다. 공룡 이빨 카드를 이야기책에 넣은 학생에게 "공룡이 주인공이 되어 모험을 하나요, 아니면 이빨 수를 알려 주나요?"라고 묻는다.',
              task: '책 소개 카드를 읽고 이야기책, 동시집, 알려 주는 책으로 나누어 넣어요.',
              levels: { easy: HELP, base: {}, challenge: {} },
              items: [
                { prompt: '책 소개를 읽고 갈래에 따라 나누어 보세요.', toolOptions: { topic: '책의 갈래', slots: [{ id: 'story', label: '이야기책', sub: '인물이 나와 일이 일어나요' }, { id: 'poem', label: '동시집', sub: '짧은 줄로 노래하듯 써요' }, { id: 'fact', label: '알려 주는 책', sub: '사실을 알려 줘요' }], cards: [{ id: 'bear', text: '곰이 잃어버린 모자를 찾아 떠나요' }, { id: 'rain', text: '비 오는 소리를 짧은 줄로 노래해요' }, { id: 'tooth', text: '공룡 이빨이 몇 개인지 알려 줘요' }] }, target: { sort: { story: ['bear'], poem: ['rain'], fact: ['tooth'] } }, difficulty: 0.15 },
                { prompt: '이번 책 소개도 갈래에 따라 나누어 보세요.', toolOptions: { topic: '책의 갈래', slots: [{ id: 'story', label: '이야기책', sub: '인물이 나와 일이 일어나요' }, { id: 'poem', label: '동시집', sub: '짧은 줄로 노래하듯 써요' }, { id: 'fact', label: '알려 주는 책', sub: '사실을 알려 줘요' }], cards: [{ id: 'ant', text: '개미굴 속을 그림으로 알려 줘요' }, { id: 'fox', text: '여우가 친구 생일 선물을 고민해요' }, { id: 'moon', text: '"달님이 방긋 / 나도 방긋"처럼 써요' }, { id: 'seed', text: '씨앗이 싹 트는 차례를 알려 줘요' }, { id: 'pig', text: '아기 돼지가 처음 학교에 가요' }] }, target: { sort: { story: ['fox', 'pig'], poem: ['moon'], fact: ['ant', 'seed'] } }, difficulty: 0.25,
                  levels: { easy: { prompt: '세 책 소개를 갈래에 따라 나누어 보세요.', toolOptions: { cards: [{ id: 'ant', text: '개미굴 속을 그림으로 알려 줘요' }, { id: 'fox', text: '여우가 친구 생일 선물을 고민해요' }, { id: 'moon', text: '"달님이 방긋 / 나도 방긋"처럼 써요' }] }, target: { sort: { story: ['fox'], poem: ['moon'], fact: ['ant'] } } } },
                  hints: ['카드마다 세 물음을 차례로 해 봐요. 인물에게 일이 일어나나요? 짧은 줄로 노래하나요? 사실을 알려 주나요?', '동물이 나와도 사실을 알려 주는 책일 수 있어요. 넣은 카드에서 동물이 주인공으로 일을 겪는지 다시 봐요.', '여우와 아기 돼지는 일을 겪는 인물이에요. 개미굴과 씨앗은 사실을 알려 줘요. 짧은 줄로 쓴 것은 동시예요.'],
                  conclude: '동물이 나와도 사실을 알려 주면 알려 주는 책, 동물이 주인공이 되어 일을 겪으면 이야기책이에요.' },
                { prompt: '더 해 보기: 동시집에 실릴 글만 골라 보세요.', extra: true, toolOptions: { mode: 'pick', basket: '동시집', cards: [{ id: 'p1', text: '"눈이 소복 / 마음도 소복"' }, { id: 'p2', text: '"바람이 휘휘 / 나뭇잎이 빙글"' }, { id: 'f1', text: '"눈은 작은 얼음 알갱이예요."' }, { id: 's1', text: '"토끼는 눈길을 걸어 할머니 댁에 갔어요."' }] }, target: { pick: ['p1', 'p2'] }, difficulty: 0.3 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 좋아하는 까닭과 갈래 잇기', minutes: 8, tool: 'mindmap',
              teacher: '"민지는 \'궁금한 것을 알고 싶어서\' 책을 읽는대요. 어떤 갈래를 좋아할까요?" 까닭을 듣고 갈래를 떠올리게 한다. 고른 뒤 "나는 왜 그 책이 좋은가요?"를 묻고, "그냥"이라고 대답한 학생에게 "그 책의 어떤 점이 좋았는지 하나만 떠올려 봐요"라고 돕는다.',
              task: '친구가 말한 까닭을 읽고, 그 친구가 좋아할 책의 갈래를 이어요.',
              levels: { easy: HELP, base: {}, challenge: {} },
              items: [
                { prompt: '친구가 말한 까닭에 어울리는 책의 갈래를 이어 보세요.', toolOptions: { mode: 'match', topic: '좋아하는 까닭', slots: [{ id: 'curious', label: '"궁금한 것을 알고 싶어."' }, { id: 'hero', label: '"주인공이 어떻게 될지 궁금해."' }], cards: [{ id: 'fact', text: '알려 주는 책' }, { id: 'story', text: '이야기책' }, { id: 'poem', text: '동시집' }] }, target: { match: { curious: 'fact', hero: 'story' } }, difficulty: 0.15 },
                { prompt: '세 친구의 까닭에 어울리는 책의 갈래를 이어 보세요.', toolOptions: { mode: 'match', topic: '좋아하는 까닭', slots: [{ id: 'sound', label: '"짧은 말을 소리 내어 읽는 게 신나."' }, { id: 'bug', label: '"곤충이 어디 사는지 알고 싶어."' }, { id: 'friend', label: '"친구를 돕는 인물이 나오면 좋아."' }], cards: [{ id: 'poem', text: '동시집' }, { id: 'fact', text: '알려 주는 책' }, { id: 'story', text: '이야기책' }] }, target: { match: { sound: 'poem', bug: 'fact', friend: 'story' } }, difficulty: 0.25,
                  hints: ['까닭마다 무엇이 좋다고 했는지 찾아봐요. 소리, 사실, 인물 가운데 어느 것인가요?', '이은 갈래가 그 까닭을 채워 줄 수 있는 책인지 다시 생각해 봐요.', '소리 내어 읽는 짧은 말은 동시, 곤충이 사는 곳은 알려 주는 책, 돕는 인물은 이야기책이에요.'] },
                { prompt: '좋아하는 책을 말할 때 까닭이 들어간 말을 모두 골라 보세요.', toolOptions: { mode: 'pick', basket: '까닭이 있어요', cards: [{ id: 'r1', text: '"동물이 많이 나와서 좋아."' }, { id: 'r2', text: '"말이 노래 같아서 좋아."' }, { id: 'n1', text: '"그냥 좋아."' }, { id: 'n2', text: '"몰라, 좋아."' }] }, target: { pick: ['r1', 'r2'] }, difficulty: 0.15,
                  levels: { challenge: { prompt: '좋아하는 책을 말할 때 까닭이 들어간 말을 모두 골라 보세요. 헷갈리는 말도 있어요.', toolOptions: { cards: [{ id: 'r1', text: '"동물이 많이 나와서 좋아."' }, { id: 'r2', text: '"말이 노래 같아서 좋아."' }, { id: 'r3', text: '"그림이 커서 보기 편해."' }, { id: 'n1', text: '"그냥 좋아."' }, { id: 'n2', text: '"몰라, 좋아."' }, { id: 'n3', text: '"이 책 좋아, 좋아!"' }] }, target: { pick: ['r1', 'r2', 'r3'] } } } },
              ],
            },
            {
              id: 'a3', title: '활동 3. 학급 문고에서 좋아하는 갈래 책 고르기', minutes: 9, tool: 'emotion',
              teacher: '모둠마다 차례로 학급 문고 앞에 가서 내가 좋아하는 갈래의 책을 한 권 골라 온다(모둠당 1분). 자리에 돌아와 짝에게 "나는 ___을 좋아해. 왜냐하면 ___." 틀로 말한다. 그다음 화면 문항을 푼다. 짝이 고른 갈래가 나와 달라도 틀린 것이 아니라는 것을 짚는다.',
              task: '학급 문고에서 좋아하는 갈래의 책을 한 권 골라 오고, 짝에게 까닭을 말해요.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '학급 문고에서 내가 좋아하는 갈래의 책을 한 권 골라 오세요.', free: true },
                { prompt: '짝에게 "나는 ___을 좋아해. 왜냐하면 ___." 하고 까닭을 말해 보세요.', free: true, talk: true },
                { prompt: '짝이 "나는 알려 주는 책이 좋아." 했어요. 나는 이야기책이 좋아요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '나', situation: '짝은 알려 주는 책을, 나는 이야기책을 좋아해요.', choices: [{ id: 'wrong', text: '"그건 틀렸어. 이야기책이 더 좋아."', result: '짝이 기분이 상해 까닭을 말하지 않아요', mood: '속상함', why: '좋아하는 갈래에 맞고 틀림이 있을까요?' }, { id: 'ask', text: '"왜 좋아?" 하고 까닭을 물어봐요', result: '짝의 까닭을 듣고 새 책도 알게 돼요', mood: '기쁨' }] }, target: { choice: 'ask' }, difficulty: 0.2,
                  conclude: '좋아하는 갈래는 저마다 달라요. 까닭을 물어보면 새로운 책을 알게 돼요.' },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"우리 반에서 가장 많이 고른 갈래는 무엇일까요?" 갈래별로 손을 들어 칠판에 바를 정(正) 대신 동그라미로 센다. 출구 1번에서 사실을 알려 주는 책을 이야기책에 넣은 학생은 \'동물이 나오면 이야기책\'으로 안 것이니 다음 시간에 다시 짚는다. 고른 책은 책상 서랍에 넣어 두고 다음 시간에 읽는다고 알려 준다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { topic: '책의 갈래', slots: [{ id: 'story', label: '이야기책' }, { id: 'poem', label: '동시집' }, { id: 'fact', label: '알려 주는 책' }], cards: [{ id: 'whale', text: '고래가 숨 쉬는 방법을 알려 줘요' }, { id: 'duck', text: '오리가 길 잃은 병아리를 도와요' }] }, prompt: '두 책 소개를 갈래에 따라 나누어 보세요.', target: { sort: { fact: ['whale'], story: ['duck'] } }, difficulty: 0.25 },
            { type: 'choice', prompt: '좋아하는 책을 까닭과 함께 말한 친구는 누구일까요?', options: ['"그냥 좋아."', '"인물이 용감해서 좋아."', '"몰라."'], answer: 1, difficulty: 0.1, explain: '"~해서 좋아"처럼 무엇이 좋은지를 함께 말하면 까닭이 돼요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '내가 좋아하는 책',
        items: [
          { type: 'table', prompt: '책 소개를 읽고 알맞은 갈래에 ○ 하세요.', columns: ['책 소개', '이야기책', '동시집', '알려 주는 책'], cells: [['여우가 친구 생일 선물을 고민해요', '', '', ''], ['씨앗이 싹 트는 차례를 알려 줘요', '', '', ''], ['"달님이 방긋 / 나도 방긋"', '', '', '']] },
          { type: 'choice', prompt: '"곤충이 어디 사는지 알고 싶어." 하는 친구에게 알맞은 책에 ○ 하세요.', options: ['이야기책', '동시집', '알려 주는 책'], answer: '알려 주는 책' },
          { type: 'blank', prompt: '내가 좋아하는 갈래와 까닭을 쓰세요.', text: '나는 ______을 좋아해. 왜냐하면 ______.', answer: '(갈래와 스스로 쓴 까닭)' },
          { type: 'short', prompt: '오늘 학급 문고에서 고른 책 이름을 쓰세요.' },
        ],
        easy: {
          note: '사실을 알려 주나요? 인물이 나오나요? 짧은 줄로 썼나요?',
          items: [
            { type: 'choice', prompt: '"개미굴 속을 알려 줘요"는 어떤 책일까요?', options: ['알려 주는 책', '이야기책'], answer: '알려 주는 책' },
            { type: 'choice', prompt: '까닭이 들어간 말에 ○ 하세요.', options: ['"그냥 좋아."', '"동물이 나와서 좋아."'], answer: '"동물이 나와서 좋아."' },
            { type: 'blank', prompt: '빈칸에 내가 좋아하는 갈래를 쓰세요.', text: '나는 ______이 좋아.', answer: '(스스로 고른 갈래)' },
            { type: 'draw', prompt: '오늘 고른 책의 표지를 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '갈래 나누기 둘째 문항은 카드가 세 장이고, 맞게 넣은 카드에 초록 테두리가 생겨요.',
        base: '카드를 모두 넣은 뒤 확인해요.',
        challenge: '까닭 고르기에 헷갈리는 말이 더 나오고, 더 해 보기(동시집에 실릴 글)까지 풀어요. 짝에게 까닭을 두 가지 말해요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 동물이 나오면 모두 이야기책으로 넣는다 → 동물이 일을 겪는지, 사실을 알려 주는지를 묻는다. ② 좋아하는 까닭을 "그냥"으로 말한다 → "~해서 좋아" 틀을 칠판에 붙여 둔다. ③ 짝과 갈래가 다르면 틀렸다고 말한다 → 좋아하는 것에는 정답이 없고 까닭을 물어보면 된다고 짚는다. 학급 문고 앞이 붐비지 않도록 모둠별로 1분씩 차례로 간다. 다음 시간(18차시)에 오늘 고른 책을 읽는다.',
    }),

    // ───────────────────────── 18. 고른 책 끝까지 읽고 기록하기 ─────────────────────────
    L(18, {
      title: '고른 책을 끝 쪽까지 읽고 읽기 기록장에 적기',
      objective: '스스로 고른 책을 정해진 시간 동안 끝 쪽까지 읽고, 다 읽은 책과 아직 다 읽지 않은 책을 가려 읽기 기록장에 적을 수 있다.',
      standards: READ,
      illustration: ART('a child reading quietly on a cushion with a paper bookmark, a small reading log notebook and a pencil beside her', [
        { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 120, y: 52 }, { motif: 'hills', y: 208 },
        { motif: 'house', x: 110, y: 214 }, { motif: 'tree', x: 384, y: 216 }, { motif: 'star', x: 250, y: 62 },
        { motif: 'text', x: 240, y: 140, text: '끝 쪽까지 읽었어요!', size: 24 },
      ]),
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '교사가 그림책을 그림만 휙휙 넘기고 "다 읽었다!" 하고 덮는 모습을 보여 준다. "선생님은 이 책을 다 읽었을까요?" 학생들의 대답을 들은 뒤 "글을 짚으며 마지막 쪽까지 읽어야 다 읽은 거예요"라고 말한다. 시연 단추로 책 읽기 카드가 차례대로 놓이는 모습을 보여 주고, 활동지 뒷면의 읽기 기록장을 펴게 한다.',
          student: '책을 \'다 읽었다\'는 것은 어떤 걸까요?',
          demo: { tool: 'story', options: { mode: 'order', shuffle: false, slots: ['첫째', '둘째'], cards: [{ id: 'd1', text: '책 이름을 읽어요' }, { id: 'd2', text: '첫 쪽부터 읽어요' }] }, sequence: [{ order: ['d1', 'd2'] }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 책 읽는 차례 정하기', minutes: 6, tool: 'story',
              teacher: '"기록장에 책 이름을 먼저 쓰고 읽을까요, 다 읽고 쓸까요?" 기록장을 맨 앞에 놓은 학생에게 "아직 읽지 않았는데 다 읽은 책 칸에 쓸 수 있을까요?"라고 묻는다. 둘째 문항은 시간이 끝나 다 못 읽었을 때다. 책갈피를 실물로 보여 준다.',
              task: '책을 읽고 기록하는 차례대로 카드를 놓아요.',
              levels: { easy: HELP, base: {}, challenge: {} },
              items: [
                { prompt: '책을 골라 읽고 기록하는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', slots: ['첫째', '둘째', '셋째', '넷째'], cards: [{ id: 'pick', text: '읽을 책을 스스로 골라요' }, { id: 'read', text: '첫 쪽부터 글을 짚으며 읽어요' }, { id: 'end', text: '마지막 쪽까지 읽어요' }, { id: 'log', text: '기록장에 책 이름을 써요' }] }, target: { order: ['pick', 'read', 'end', 'log'] }, difficulty: 0.15,
                  levels: { easy: { prompt: '책을 읽고 기록하는 차례대로 세 장을 놓아 보세요.', toolOptions: { slots: ['첫째', '둘째', '셋째'], cards: [{ id: 'read', text: '첫 쪽부터 글을 짚으며 읽어요' }, { id: 'end', text: '마지막 쪽까지 읽어요' }, { id: 'log', text: '기록장에 책 이름을 써요' }] }, target: { order: ['read', 'end', 'log'] } } } },
                { prompt: '읽는 시간이 끝났는데 아직 다 못 읽었어요. 차례대로 놓아 보세요.', toolOptions: { mode: 'order', slots: ['첫째', '둘째', '셋째', '넷째'], cards: [{ id: 'mark', text: '읽던 쪽에 책갈피를 끼워요' }, { id: 'close', text: '책을 덮어 서랍에 넣어요' }, { id: 'open', text: '다음 시간에 책갈피 쪽을 펴요' }, { id: 'go', text: '이어서 끝 쪽까지 읽어요' }] }, target: { order: ['mark', 'close', 'open', 'go'] }, difficulty: 0.2,
                  predict: { q: '다 못 읽은 책은 기록장에 언제 쓸까요?', options: ['지금 바로', '끝 쪽까지 읽은 뒤'], answer: 1 },
                  conclude: '다 못 읽었으면 책갈피를 끼워 두고, 끝 쪽까지 읽은 뒤에 기록장에 써요.' },
                { prompt: '더 해 보기: 모르는 글자가 나왔을 때 차례대로 놓아 보세요.', extra: true, toolOptions: { mode: 'order', slots: ['첫째', '둘째', '셋째'], cards: [{ id: 'stop', text: '모르는 글자에서 멈춰요' }, { id: 'ask', text: '손을 들어 선생님께 물어요' }, { id: 'again', text: '그 줄을 처음부터 다시 읽어요' }] }, target: { order: ['stop', 'ask', 'again'] }, difficulty: 0.25 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 다 읽은 것과 아직인 것 가르기', minutes: 7, tool: 'mindmap',
              teacher: '"그림만 넘겨 본 것도 다 읽은 걸까요?" 카드마다 \'글을 끝 쪽까지 읽었나\' 하나만 묻는다. 모르는 글자를 물어보며 읽은 카드를 \'아직\'에 넣은 학생에게 "물어보면서 끝 쪽까지 읽었나요?"라고 되묻는다. 물어보는 것은 부끄러운 일이 아니라는 것을 짚는다.',
              task: '친구들의 읽기 모습을 읽고, 다 읽은 것과 아직 다 읽지 않은 것으로 나누어 넣어요.',
              levels: { easy: HELP, base: {}, challenge: {} },
              items: [
                { prompt: '친구들의 읽기 모습을 다 읽은 것과 아직인 것으로 나누어 보세요.', toolOptions: { topic: '다 읽었을까?', slots: [{ id: 'done', label: '다 읽었어요' }, { id: 'notyet', label: '아직 다 읽지 않았어요' }], cards: [{ id: 'last', text: '마지막 쪽 글까지 읽었어요' }, { id: 'pic', text: '그림만 넘겨 봤어요' }, { id: 'ask', text: '모르는 글자는 물어보며 끝까지 읽었어요' }, { id: 'half', text: '중간까지 읽고 덮었어요' }] }, target: { sort: { done: ['last', 'ask'], notyet: ['pic', 'half'] } }, difficulty: 0.2,
                  levels: { easy: { prompt: '두 모습을 다 읽은 것과 아직인 것으로 나누어 보세요.', toolOptions: { cards: [{ id: 'last', text: '마지막 쪽 글까지 읽었어요' }, { id: 'pic', text: '그림만 넘겨 봤어요' }] }, target: { sort: { done: ['last'], notyet: ['pic'] } } } },
                  hints: ['카드마다 "글을 마지막 쪽까지 읽었나?" 하나만 물어봐요.', '물어보며 읽었는지, 그림만 봤는지 넣은 카드를 다시 읽어 봐요.', '글을 끝 쪽까지 읽은 카드는 다 읽음, 그림만 보거나 중간에 덮은 카드는 아직이에요.'] },
                { prompt: '이번 모습들도 나누어 보세요.', toolOptions: { topic: '다 읽었을까?', slots: [{ id: 'done', label: '다 읽었어요' }, { id: 'notyet', label: '아직 다 읽지 않았어요' }], cards: [{ id: 'skip', text: '긴 글은 건너뛰고 끝 쪽만 봤어요' }, { id: 'two', text: '두 번에 나누어 끝 쪽까지 읽었어요' }, { id: 'title', text: '책 이름만 읽고 덮었어요' }, { id: 'aloud', text: '소리 내어 끝 쪽까지 읽었어요' }] }, target: { sort: { done: ['two', 'aloud'], notyet: ['skip', 'title'] } }, difficulty: 0.3,
                  conclude: '나누어 읽어도 끝 쪽까지 글을 읽었다면 다 읽은 거예요. 건너뛴 글이 있으면 아직이에요.' },
                { prompt: '친구의 읽기 모습에 알맞게 해 줄 말을 이어 보세요.', toolOptions: { mode: 'match', topic: '친구에게 해 줄 말', slots: [{ id: 'pic', label: '그림만 넘겨 보고 기록장에 쓰려 해요' }, { id: 'half', label: '시간이 끝나 중간까지 읽었어요' }], cards: [{ id: 'again', text: '"글도 끝까지 읽고 쓰자."' }, { id: 'mark', text: '"책갈피 끼우고 내일 이어 읽자."' }, { id: 'fast', text: '"빨리 써. 많이 쓰면 좋잖아."' }] }, target: { match: { pic: 'again', half: 'mark' } }, difficulty: 0.2 },
              ],
            },
            {
              id: 'a3', title: '활동 3. 10분 동안 끝까지 읽기', minutes: 13, tool: 'emotion',
              teacher: '17차시에 고른 책(없으면 학급 문고에서 지금 한 권)을 펴고 10분 타이머를 칠판에 띄운다. 그동안 교사는 돌아다니며 손가락으로 글을 짚는지 본다. 그림만 넘기는 학생 곁에서는 말없이 글 첫 줄을 짚어 준다. 끝 쪽까지 읽은 학생은 기록장에 책 이름을, 다 못 읽은 학생은 책갈피를 끼운다. 읽기가 끝난 뒤에만 화면 눈금을 고른다.',
              task: '10분 동안 고른 책을 글을 짚으며 읽어요. 끝 쪽까지 읽었으면 기록장에 쓰고, 아직이면 책갈피를 끼워요.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '10분 동안 고른 책을 손가락으로 글을 짚으며 조용히 읽어 보세요.', free: true },
                { prompt: '끝 쪽까지 읽었으면 기록장에 책 이름을 쓰고, 아직이면 책갈피를 끼워 두세요.', free: true },
                { prompt: '오늘 나는 글을 얼마나 끝까지 짚으며 읽었나요? 솔직하게 골라요.', toolOptions: SELF('10분 동안 내가 고른 책을 읽었어요.', '뿌듯함', '글을 얼마나 끝까지 짚으며 읽었나요?'), target: { level: 'any' }, difficulty: 0.05, hints: SELF_HINTS },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"오늘 끝 쪽까지 읽은 친구는 기록장을, 아직인 친구는 책갈피를 들어 볼까요?" 둘 다 잘한 것이라고 말해 준다. 출구 1번에서 그림만 본 카드를 \'다 읽음\'에 넣은 학생은 이 주제의 대표 오개념을 가진 것이니 다음 읽기 시간에 곁에서 글 짚기를 도와준다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { topic: '다 읽었을까?', slots: [{ id: 'done', label: '다 읽었어요' }, { id: 'notyet', label: '아직이에요' }], cards: [{ id: 'flip', text: '그림만 보고 덮었어요' }, { id: 'full', text: '글을 짚으며 끝 쪽까지 읽었어요' }, { id: 'mid', text: '책갈피를 반쯤에 끼웠어요' }] }, prompt: '세 모습을 다 읽은 것과 아직인 것으로 나누어 보세요.', target: { sort: { done: ['full'], notyet: ['flip', 'mid'] } }, difficulty: 0.2 },
            { type: 'choice', prompt: '읽기 기록장에는 언제 책 이름을 쓸까요?', options: ['책을 고르자마자', '그림을 다 넘겨 본 뒤', '글을 끝 쪽까지 읽은 뒤'], answer: 2, difficulty: 0.15, explain: '글을 끝 쪽까지 읽은 뒤에 써야 맞는 기록이 돼요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '나의 읽기 기록장',
        items: [
          { type: 'table', prompt: '끝 쪽까지 읽은 책의 이름을 쓰세요.', columns: ['읽은 날', '책 이름', '끝까지 읽었나요? (✓)'], rows: 4 },
          { type: 'check', prompt: '다 읽었다고 할 수 있는 모습을 모두 골라 ✓ 하세요.', options: ['그림만 넘겨 봤어요', '글을 끝 쪽까지 읽었어요', '두 번에 나누어 끝까지 읽었어요', '중간까지 읽었어요'], answer: '글을 끝 쪽까지 읽었어요, 두 번에 나누어 끝까지 읽었어요' },
          { type: 'choice', prompt: '읽는 시간이 끝났는데 다 못 읽었을 때 알맞은 것에 ○ 하세요.', options: ['기록장에 다 읽었다고 써요', '책갈피를 끼워 두어요', '책을 아무 데나 둬요'], answer: '책갈피를 끼워 두어요' },
          { type: 'short', prompt: '오늘 읽은 책에서 기억나는 장면 하나를 쓰세요.' },
        ],
        easy: {
          note: '글을 끝 쪽까지 읽어야 다 읽은 거예요.',
          items: [
            { type: 'table', prompt: '끝 쪽까지 읽은 책의 이름을 쓰세요.', columns: ['읽은 날', '책 이름'], rows: 2 },
            { type: 'choice', prompt: '다 읽은 모습에 ○ 하세요.', options: ['그림만 넘겨 봤어요', '글을 끝 쪽까지 읽었어요'], answer: '글을 끝 쪽까지 읽었어요' },
            { type: 'choice', prompt: '다 못 읽었을 때 끼우는 것에 ○ 하세요.', options: ['책갈피', '연필'], answer: '책갈피' },
            { type: 'draw', prompt: '오늘 읽은 책에서 기억나는 장면을 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '차례 정하기 첫 문항은 카드 세 장이고, 다 읽음 나누기 첫 문항은 카드 두 장이에요. 맞게 놓은 카드에 초록 테두리가 생겨요. 읽기는 짧은 그림책으로 해요.',
        base: '카드를 모두 놓은 뒤 확인해요.',
        challenge: '더 해 보기(모르는 글자가 나왔을 때)까지 풀어요. 10분 읽기에서 글이 많은 책을 골라 읽어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 그림만 넘겨 보고 다 읽었다고 기록장에 적는다(이 주제의 대표 오개념) → 기록장 칸 \'끝까지 읽었나요?\'에 ✓ 하기 전에 마지막 쪽 첫 줄을 소리 내어 읽게 한다. ② 다 못 읽으면 기록장에 쓰지 못해 속상해한다 → 책갈피도 잘한 일이고 다음 시간에 이어 읽으면 된다고 말한다. ③ 모르는 글자에서 멈춰 그 뒤를 건너뛴다 → 물어보고 그 줄을 다시 읽는 차례를 칠판에 붙여 둔다. 10분 읽기는 입학 첫 달 학생에게 길 수 있으니 짧은 그림책을 미리 준비해 둔다.',
    }),

    // ───────────────────────── 19. 연습: 다섯 손가락으로 내게 맞는 책 고르기 ─────────────────────────
    L(19, {
      title: '다섯 손가락으로 세어 내게 맞는 책 골라 읽기',
      objective: '책 한 쪽을 읽으며 모르는 낱말을 손가락으로 세어 내게 맞는 책인지 가리고, 고른 책을 끝까지 읽어 기록할 수 있다.',
      standards: READ,
      illustration: ART('a child holding an open picture book with one hand while folding fingers of the other hand to count tricky words', [
        { motif: 'sun', x: 404, y: 56, s: 0.8 }, { motif: 'cloud', x: 110, y: 52 }, { motif: 'hills', y: 208 },
        { motif: 'tree', x: 90, y: 216 }, { motif: 'flower', x: 390, y: 228 }, { motif: 'leaf', x: 250, y: 230 },
        { motif: 'text', x: 240, y: 140, text: '모르는 낱말 하나, 둘…', size: 22 },
      ]),
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '"너무 어려운 책을 고르면 어떻게 될까요? 너무 쉬운 책만 고르면요?" 대답을 들은 뒤 다섯 손가락 세기를 보여 준다. 책 아무 쪽이나 펴서 읽다가 모르는 낱말이 나오면 손가락을 하나씩 접는다. "하나도 안 접으면 쉬운 책, 한두 개 접으면 딱 맞는 책, 다섯 개를 다 접고도 더 있으면 지금은 어려운 책이에요." 시연 단추로 \'손가락 두 개를 접었어요\' 카드가 \'딱 맞아요\'에 들어가는 모습을 보여 준다.',
          student: '내게 딱 맞는 책은 어떻게 고를까요?',
          demo: { tool: 'mindmap', options: { topic: '다섯 손가락 세기', shuffle: false, slots: [{ id: 'easy', label: '쉬워요' }, { id: 'fit', label: '딱 맞아요' }, { id: 'hard', label: '지금은 어려워요' }], cards: [{ id: 'two', text: '손가락 두 개를 접었어요' }] }, sequence: [{ sort: { fit: ['two'] } }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 접은 손가락으로 책 가리기', minutes: 8, tool: 'mindmap',
              teacher: '칠판에 \'0개 = 쉬워요, 1~2개 = 딱 맞아요, 5개 넘게 = 지금은 어려워요\'를 붙여 둔다. 카드마다 손가락을 직접 접어 보게 한다. 손가락 하나를 접은 카드를 \'쉬워요\'에 넣은 학생에게 "모르는 낱말이 하나라도 있었나요?"라고 묻는다.',
              task: '친구가 책 한 쪽을 읽으며 접은 손가락 수를 보고, 그 책이 어떤 책인지 나누어 넣어요.',
              levels: { easy: HELP, base: {}, challenge: {} },
              items: [
                { prompt: '접은 손가락 수를 보고 책을 나누어 보세요.', toolOptions: { topic: '다섯 손가락 세기', slots: [{ id: 'easy', label: '쉬워요', sub: '0개' }, { id: 'fit', label: '딱 맞아요', sub: '1~2개' }, { id: 'hard', label: '지금은 어려워요', sub: '5개 넘게' }], cards: [{ id: 'none', text: '손가락을 하나도 안 접었어요' }, { id: 'one', text: '손가락 하나를 접었어요' }, { id: 'many', text: '다섯 개를 다 접고도 더 있어요' }] }, target: { sort: { easy: ['none'], fit: ['one'], hard: ['many'] } }, difficulty: 0.15 },
                { prompt: '네 친구가 고른 책이에요. 접은 손가락 수를 보고 나누어 보세요.', toolOptions: { topic: '다섯 손가락 세기', slots: [{ id: 'easy', label: '쉬워요', sub: '0개' }, { id: 'fit', label: '딱 맞아요', sub: '1~2개' }, { id: 'hard', label: '지금은 어려워요', sub: '5개 넘게' }], cards: [{ id: 'mj', text: '민지: 두 개 접었어요' }, { id: 'jh', text: '준호: 하나도 안 접었어요' }, { id: 'sj', text: '서준: 손가락이 모자라요' }, { id: 'hy', text: '하윤: 하나 접었어요' }] }, target: { sort: { easy: ['jh'], fit: ['mj', 'hy'], hard: ['sj'] } }, difficulty: 0.25,
                  levels: { easy: { prompt: '세 친구가 고른 책을 접은 손가락 수로 나누어 보세요.', toolOptions: { cards: [{ id: 'mj', text: '민지: 두 개 접었어요' }, { id: 'jh', text: '준호: 하나도 안 접었어요' }, { id: 'sj', text: '서준: 손가락이 모자라요' }] }, target: { sort: { easy: ['jh'], fit: ['mj'], hard: ['sj'] } } } },
                  hints: ['카드마다 접은 손가락 수를 내 손으로 따라 접어 보고 칸 아래 수와 견주어 봐요.', '손가락이 모자란 것은 몇 개를 넘었다는 뜻인지 다시 생각해 봐요.', '안 접었으면 쉬워요, 한두 개면 딱 맞아요, 다섯 개를 넘으면 지금은 어려워요.'] },
                { prompt: '하윤이가 고른 책 한 쪽이에요. 하윤이가 모르는 낱말 카드를 세어 보고, 이 책은 어떤 책인지 이어 보세요.', toolOptions: { mode: 'match', topic: '하윤이의 책', slots: [{ id: 'page', label: '모르는 낱말: 두더지, 굴' }], cards: [{ id: 'easy', text: '쉬워요' }, { id: 'fit', text: '딱 맞아요' }, { id: 'hard', text: '지금은 어려워요' }] }, target: { match: { page: 'fit' } }, difficulty: 0.25,
                  levels: { challenge: { prompt: '서준이가 고른 책 한 쪽이에요. 모르는 낱말을 세어 보고, 이 책은 어떤 책인지 이어 보세요.', toolOptions: { slots: [{ id: 'page', label: '모르는 낱말: 지층, 화석, 퇴적, 암석, 광물, 침식' }] }, target: { match: { page: 'hard' } } } } },
              ],
            },
            {
              id: 'a2', title: '활동 2. 책을 고를 때 어떻게 할까', minutes: 6, tool: 'emotion',
              teacher: '"준호는 쉬운 책만 열 번 골랐대요. 기록장 칸은 많이 채웠는데, 읽는 힘이 자랄까요?" 고르기 전에 짝과 이야기하게 한다. 어려운 책을 고른 친구에게는 "어렵다고 영영 못 읽는 게 아니에요. 지금은 가족과 함께 읽어요"라고 짚는다.',
              task: '책을 고를 때 생긴 일을 읽고 어떻게 할지 골라 결과를 봐요.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '준호는 기록장 칸을 채우려고 쉬운 책만 골라요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '준호', situation: '준호는 기록장 칸을 빨리 채우려고 손가락을 하나도 안 접는 책만 골라요.', choices: [{ id: 'more', text: '쉬운 책을 더 많이 골라요', result: '칸은 채워도 새 낱말을 만나지 못해요', mood: '걱정', why: '쉬운 책만 읽으면 새 낱말을 배울 수 있을까요?' }, { id: 'fit', text: '한두 개 접는 책도 골라 봐요', result: '새 낱말을 알게 되어 읽는 힘이 자라요', mood: '뿌듯함' }] }, target: { choice: 'fit' }, difficulty: 0.2 },
                { prompt: '서준이가 고른 책은 손가락이 모자랄 만큼 어려워요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '서준', situation: '서준이가 공룡 책을 골랐는데 모르는 낱말이 아주 많아요.', choices: [{ id: 'throw', text: '"책은 재미없어." 하고 읽기를 그만둬요', result: '좋아하는 공룡 이야기를 못 읽어요', mood: '슬픔', why: '어려운 책도 읽을 방법이 있을까요?' }, { id: 'family', text: '집에서 가족과 함께 읽기로 하고, 지금은 맞는 책을 골라요', result: '공룡 책은 가족과, 맞는 책은 혼자 끝까지 읽어요', mood: '기쁨' }, { id: 'fake', text: '그림만 넘기고 다 읽었다고 해요', result: '공룡 이야기를 하나도 알지 못해요', mood: '걱정', why: '그림만 넘기면 다 읽은 걸까요?' }] }, target: { choice: 'family' }, difficulty: 0.25,
                  levels: { easy: { toolOptions: { choices: [{ id: 'throw', text: '"책은 재미없어." 하고 읽기를 그만둬요', result: '좋아하는 공룡 이야기를 못 읽어요', mood: '슬픔', why: '어려운 책도 읽을 방법이 있을까요?' }, { id: 'family', text: '집에서 가족과 함께 읽기로 하고, 지금은 맞는 책을 골라요', result: '공룡 책은 가족과, 맞는 책은 혼자 끝까지 읽어요', mood: '기쁨' }] } } },
                  conclude: '지금 어려운 책은 가족과 함께 읽고, 혼자 읽을 때는 딱 맞는 책을 골라요.' },
                { prompt: '민지가 친구가 고른 두꺼운 책을 따라 고르려고 해요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '민지', situation: '친구가 두꺼운 책을 고르자 민지도 같은 책을 고르고 싶어요.', choices: [{ id: 'count', text: '한 쪽을 읽으며 손가락을 세어 봐요', result: '민지에게 맞는지 알고 책을 골라요', mood: '편안함' }, { id: 'copy', text: '친구 따라 바로 골라요', result: '읽다가 어려워서 금방 덮어요', mood: '속상함', why: '친구에게 맞는 책이 나에게도 꼭 맞을까요?' }] }, target: { choice: 'count' }, difficulty: 0.2 },
              ],
            },
            {
              id: 'a3', title: '활동 3. 손가락 세어 고르고 끝까지 읽기', minutes: 12, tool: 'mindmap',
              teacher: '학급 문고에서 두 권을 가져와 각각 한 쪽씩 읽으며 손가락을 센다(3분). 딱 맞는 책 한 권을 골라 8분 동안 끝까지 읽고, 다 읽으면 기록장에 쓴다. 교사는 돌아다니며 손가락을 접는 모습을 확인한다. 끝나면 화면에서 오늘 내가 한 일을 고른다.',
              task: '두 책을 한 쪽씩 읽으며 손가락을 세고, 딱 맞는 책을 골라 끝까지 읽어요.',
              levels: { easy: HELP, base: {}, challenge: {} },
              items: [
                { prompt: '학급 문고에서 두 권을 가져와 한 쪽씩 읽으며 모르는 낱말에 손가락을 접어 보세요.', free: true },
                { prompt: '딱 맞는 책을 골라 8분 동안 끝까지 읽고, 다 읽었으면 기록장에 쓰세요.', free: true },
                { prompt: '내게 맞는 책을 고를 때 한 일을 모두 골라 보세요.', toolOptions: { mode: 'pick', basket: '맞는 책 고르기', cards: [{ id: 'page', text: '한 쪽을 읽어 봤어요' }, { id: 'finger', text: '모르는 낱말에 손가락을 접었어요' }, { id: 'thick', text: '가장 두꺼운 책을 골랐어요' }, { id: 'cover', text: '표지 색만 보고 골랐어요' }] }, target: { pick: ['page', 'finger'] }, difficulty: 0.15,
                  levels: { challenge: { prompt: '내게 맞는 책을 고를 때 할 일을 모두 골라 보세요. 헷갈리는 카드가 더 있어요.', toolOptions: { cards: [{ id: 'page', text: '한 쪽을 읽어 봤어요' }, { id: 'finger', text: '모르는 낱말에 손가락을 접었어요' }, { id: 'like', text: '좋아하는 갈래인지 봤어요' }, { id: 'thick', text: '가장 두꺼운 책을 골랐어요' }, { id: 'cover', text: '표지 색만 보고 골랐어요' }, { id: 'copy', text: '친구 책을 따라 골랐어요' }] }, target: { pick: ['page', 'finger', 'like'] } } } },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"오늘 고른 책은 손가락을 몇 개 접었나요?" 손가락으로 보여 주게 한다. 다섯 개를 다 접은 학생에게는 그 책을 집에서 가족과 읽도록 대출해 준다. 출구 1번에서 손가락 하나를 \'쉬워요\'에 넣은 학생은 0과 1을 구분하지 못한 것이니 손가락 세기를 다시 함께 해 본다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { topic: '다섯 손가락 세기', slots: [{ id: 'easy', label: '쉬워요' }, { id: 'fit', label: '딱 맞아요' }, { id: 'hard', label: '지금은 어려워요' }], cards: [{ id: 'two', text: '두 개 접었어요' }, { id: 'zero', text: '하나도 안 접었어요' }] }, prompt: '접은 손가락 수를 보고 책을 나누어 보세요.', target: { sort: { fit: ['two'], easy: ['zero'] } }, difficulty: 0.2 },
            { type: 'choice', prompt: '손가락 다섯 개를 다 접고도 더 있는 책은 어떻게 할까요?', options: ['그만 읽고 버려요', '가족과 함께 읽어요', '그림만 넘겨요'], answer: 1, difficulty: 0.15, explain: '지금 혼자 읽기 어려운 책은 가족과 함께 읽으면 돼요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '다섯 손가락 세기',
        items: [
          { type: 'table', prompt: '두 책을 한 쪽씩 읽고 접은 손가락 수를 쓰세요.', columns: ['책 이름', '접은 손가락', '쉬워요 / 딱 맞아요 / 어려워요'], rows: 2 },
          { type: 'choice', prompt: '손가락 하나를 접은 책은 어떤 책일까요?', options: ['쉬워요', '딱 맞아요', '지금은 어려워요'], answer: '딱 맞아요' },
          { type: 'check', prompt: '내게 맞는 책을 고를 때 할 일을 모두 골라 ✓ 하세요.', options: ['한 쪽을 읽어 봐요', '가장 두꺼운 책을 골라요', '모르는 낱말을 손가락으로 세어요', '친구 책을 따라 골라요'], answer: '한 쪽을 읽어 봐요, 모르는 낱말을 손가락으로 세어요' },
          { type: 'short', prompt: '오늘 고른 딱 맞는 책 이름을 쓰세요.' },
        ],
        easy: {
          note: '모르는 낱말이 나오면 손가락을 하나 접어요.',
          items: [
            { type: 'choice', prompt: '손가락을 하나도 안 접은 책은 어떤 책일까요?', options: ['쉬워요', '어려워요'], answer: '쉬워요' },
            { type: 'choice', prompt: '내게 맞는 책을 고를 때 할 일에 ○ 하세요.', options: ['한 쪽을 읽어 봐요', '표지 색만 봐요'], answer: '한 쪽을 읽어 봐요' },
            { type: 'short', prompt: '오늘 고른 책 이름을 쓰세요.' },
            { type: 'draw', prompt: '손가락을 접으며 책을 읽는 내 모습을 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '손가락 나누기 둘째 문항은 카드가 세 장이고, 맞게 넣은 카드에 초록 테두리가 생겨요. 어려운 책 문항은 보기가 두 개예요.',
        base: '카드를 모두 넣은 뒤 확인해요.',
        challenge: '하윤이 책 문항 대신 모르는 낱말이 여섯 개인 서준이 책을 따져요. 할 일 고르기에 헷갈리는 카드가 더 나와요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 기록장 칸을 채우려고 쉬운 책만 고른다 → 딱 맞는 책에서 새 낱말을 만나야 읽는 힘이 자란다고 말한다. ② 모르는 낱말이 있어도 손가락을 접지 않는다(아는 척) → 교사가 먼저 "선생님도 모르는 낱말이 있으면 접어요"라고 보여 준다. ③ 어려운 책을 고르면 실패라고 여긴다 → 가족과 함께 읽을 책으로 대출해 준다. 입학 첫 달이라 \'모르는 낱말\'은 읽지 못하는 낱말과 뜻을 모르는 낱말을 모두 센다. 3~4개인 경우는 교사가 함께 한 쪽을 더 읽어 보고 정하게 한다.',
    }),

    // ───────────────────────── 20. 확장: 집에서 가족과 읽고 기록장 채우기 ─────────────────────────
    L(20, {
      title: '집에서 읽을 시간을 정하고 읽기 기록장 바르게 채우기',
      objective: '읽기 기록장에 쓸 것을 고르고, 다 읽은 책과 읽는 중인 책을 가려 기록하며, 집에서 읽을 때 생기는 어려움을 푸는 방법을 고를 수 있다.',
      standards: READ,
      illustration: ART('a parent and child reading a picture book together on a sofa in the evening with a lamp, a reading log with stars on the table', [
        { motif: 'moon', x: 410, y: 56, s: 0.8 }, { motif: 'star', x: 350, y: 40 }, { motif: 'cloud', x: 110, y: 54 },
        { motif: 'hills', y: 208 }, { motif: 'house', x: 130, y: 216 }, { motif: 'tree', x: 380, y: 216 },
        { motif: 'text', x: 240, y: 140, text: '오늘의 책 ★★★', size: 24 },
      ]),
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '어제 쓴 읽기 기록장을 펴게 한다. "기록장에는 무엇을 쓰면 좋을까요?" 몇 가지 대답을 들은 뒤 교사가 만든 기록장 한 줄(읽은 날 / 책 이름 / 끝까지 ✓ / 좋았던 만큼 ★)을 보여 준다. 시연 단추로 \'책 이름\' 카드가 기록장 바구니에 들어가는 모습을 보여 준다. "오늘은 집에서도 읽고 기록하는 방법을 정해요."',
          student: '읽기 기록장에는 무엇을 쓸까요?',
          demo: { tool: 'mindmap', options: { mode: 'pick', basket: '기록장에 써요', shuffle: false, cards: [{ id: 'title', text: '책 이름' }, { id: 'weight', text: '책 무게' }] }, sequence: [{ pick: ['title'] }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 기록장에 쓸 것 고르기', minutes: 7, tool: 'mindmap',
              teacher: '"이것을 쓰면 나중에 내가 읽은 책을 알 수 있을까요?" 카드마다 이 질문 하나로 고르게 한다. 책 값을 고른 학생에게 "책 값을 알면 내가 어떻게 읽었는지 알 수 있나요?"라고 묻는다.',
              task: '읽기 기록장에 쓰면 좋은 것만 골라 바구니에 넣어요.',
              levels: { easy: HELP, base: {}, challenge: {} },
              items: [
                { prompt: '읽기 기록장에 쓰면 좋은 것을 모두 골라 보세요.', toolOptions: { mode: 'pick', basket: '기록장에 써요', cards: [{ id: 'title', text: '책 이름' }, { id: 'date', text: '읽은 날' }, { id: 'price', text: '책 값' }, { id: 'weight', text: '책 무게' }] }, target: { pick: ['title', 'date'] }, difficulty: 0.15 },
                { prompt: '기록장에 더 쓰면 좋은 것을 모두 골라 보세요.', toolOptions: { mode: 'pick', basket: '기록장에 써요', cards: [{ id: 'done', text: '끝까지 읽었는지 ✓' }, { id: 'star', text: '좋았던 만큼 ★' }, { id: 'color', text: '표지 색깔' }, { id: 'pages', text: '책장 넘긴 횟수' }] }, target: { pick: ['done', 'star'] }, difficulty: 0.2,
                  levels: { challenge: { prompt: '기록장에 더 쓰면 좋은 것을 모두 골라 보세요. 헷갈리는 카드가 더 있어요.', toolOptions: { cards: [{ id: 'done', text: '끝까지 읽었는지 ✓' }, { id: 'star', text: '좋았던 만큼 ★' }, { id: 'who', text: '함께 읽은 사람' }, { id: 'color', text: '표지 색깔' }, { id: 'pages', text: '책장 넘긴 횟수' }, { id: 'shop', text: '책을 산 가게' }] }, target: { pick: ['done', 'star', 'who'] } } } },
                { prompt: '민지의 기록장이에요. 다 읽은 책과 읽는 중인 책으로 나누어 보세요.', toolOptions: { topic: '민지의 기록장', slots: [{ id: 'done', label: '다 읽은 책' }, { id: 'reading', label: '읽는 중인 책' }], cards: [{ id: 'snail', text: '「달팽이 우체부」 끝 쪽까지 ✓' }, { id: 'cloud', text: '「구름 위 운동회」 12쪽에 책갈피' }, { id: 'acorn', text: '「도토리 가방」 끝 쪽까지 ✓' }, { id: 'train', text: '「꼬마 기차」 절반에 책갈피' }] }, target: { sort: { done: ['snail', 'acorn'], reading: ['cloud', 'train'] } }, difficulty: 0.2,
                  levels: { easy: { prompt: '민지의 기록장 두 줄을 다 읽은 책과 읽는 중인 책으로 나누어 보세요.', toolOptions: { cards: [{ id: 'snail', text: '「달팽이 우체부」 끝 쪽까지 ✓' }, { id: 'cloud', text: '「구름 위 운동회」 12쪽에 책갈피' }] }, target: { sort: { done: ['snail'], reading: ['cloud'] } } } },
                  hints: ['줄마다 끝 쪽까지 읽었다는 표시가 있는지, 책갈피가 있는지 찾아봐요.', '넣은 카드의 표시를 다시 읽어 봐요. 책갈피는 아직 읽는 중이라는 뜻이에요.', '✓가 있는 책은 다 읽은 책, 책갈피가 있는 책은 읽는 중인 책이에요.'] },
              ],
            },
            {
              id: 'a2', title: '활동 2. 집에서 읽을 때 생기는 일', minutes: 9, tool: 'emotion',
              teacher: '"집에서 책을 읽으려는데 이런 일이 생기면 어떻게 할까요?" 학생들에게 집에서 읽기 어려웠던 일을 먼저 두세 가지 들은 뒤 문항을 푼다. 텔레비전 문항에서 "텔레비전 보면서 읽으면 돼요"라는 학생에게 "소리가 나면 글이 잘 들어올까요?"라고 묻는다.',
              task: '집에서 읽을 때 생기는 일을 읽고 어떻게 할지 골라 결과를 봐요.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '거실에서 텔레비전이 켜져 있어 책이 잘 안 읽혀요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '나', situation: '책을 읽으려는데 거실 텔레비전 소리가 커요.', choices: [{ id: 'tv', text: '텔레비전을 보며 같이 읽어요', result: '같은 줄을 몇 번이나 다시 읽어요', mood: '걱정', why: '소리가 나면 글이 잘 들어올까요?' }, { id: 'room', text: '조용한 방으로 가서 읽어요', result: '글이 잘 읽혀 끝 쪽까지 읽어요', mood: '편안함' }] }, target: { choice: 'room' }, difficulty: 0.1 },
                { prompt: '동생이 "나도 같이 읽을래!" 해요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '나', situation: '책을 읽는데 동생이 "나도 같이 읽을래!" 하며 다가와요.', choices: [{ id: 'push', text: '"저리 가!" 하고 밀어내요', result: '동생이 울고 나도 읽지 못해요', mood: '속상함', why: '동생과 함께 읽는 방법은 없을까요?' }, { id: 'aloud', text: '동생에게 소리 내어 읽어 줘요', result: '동생도 듣고 나도 끝까지 읽어요', mood: '기쁨' }, { id: 'stop', text: '책을 덮고 동생과 놀아요', result: '오늘 읽을 책을 끝내지 못해요', mood: '걱정', why: '놀기 전에 할 수 있는 일은 무엇일까요?' }] }, target: { choice: 'aloud' }, difficulty: 0.2,
                  levels: { easy: { toolOptions: { choices: [{ id: 'push', text: '"저리 가!" 하고 밀어내요', result: '동생이 울고 나도 읽지 못해요', mood: '속상함', why: '동생과 함께 읽는 방법은 없을까요?' }, { id: 'aloud', text: '동생에게 소리 내어 읽어 줘요', result: '동생도 듣고 나도 끝까지 읽어요', mood: '기쁨' }] } } } },
                { prompt: '날마다 읽을 시간을 정하려고 해요. 어떻게 정할까요?', toolOptions: { mode: 'branch', who: '나', situation: '집에서 날마다 책을 읽기로 했는데 언제 읽을지 아직 정하지 않았어요.', choices: [{ id: 'free', text: '생각날 때 아무 때나 읽어요', result: '바빠서 읽는 날이 거의 없어요', mood: '걱정', why: '정한 때가 없으면 날마다 읽을 수 있을까요?' }, { id: 'fixed', text: '"잠자기 전 10분"처럼 때를 정해요', result: '날마다 같은 때에 읽어 기록장이 채워져요', mood: '뿌듯함' }, { id: 'all', text: '주말에 한꺼번에 많이 읽어요', result: '주말에 지쳐서 끝까지 읽지 못해요', mood: '속상함', why: '한꺼번에 많이 읽는 것이 쉬울까요?' }] }, target: { choice: 'fixed' }, difficulty: 0.25,
                  conclude: '날마다 같은 때를 정해 두면 읽기가 습관이 돼요.' },
              ],
            },
            {
              id: 'a3', title: '활동 3. 가족과 읽기 약속 정하기', minutes: 10, tool: 'story',
              teacher: '활동지 \'가족 읽기 약속\' 칸을 함께 본다. 언제·어디서·누구와 읽을지 정해 쓰게 한다. 먼저 화면에서 서준이의 약속 말을 채운 뒤, 짝에게 내 약속을 읽어 준다. 가족과 함께 읽을 수 없는 학생도 있으니 "혼자 읽어도 좋아요"라고 미리 말해 둔다.',
              task: '서준이의 읽기 약속 말을 채우고, 활동지에 내 읽기 약속을 써서 짝에게 읽어 줘요.',
              levels: { easy: HELP, base: {}, challenge: {} },
              items: [
                { prompt: '서준이의 읽기 약속에 알맞은 말을 넣어 보세요.', toolOptions: { mode: 'fill', cards: [{ id: 'when', text: '잠자기 전 10분' }, { id: 'where', text: '조용한 내 방' }, { id: 'tv', text: '텔레비전 앞' }], slots: [{ id: 'b1', who: '서준', motif: 'moon', label: '나는 날마다 ___ 동안 읽을 거야.' }, { id: 'b2', who: '서준', motif: 'house', label: '읽는 곳은 ___이야.' }] }, target: { fill: { b1: 'when', b2: 'where' } }, difficulty: 0.15 },
                { prompt: '가족 읽기 약속 칸에 언제·어디서·누구와 읽을지 써 보세요.', free: true },
                { prompt: '짝에게 내 읽기 약속을 읽어 주고, 짝의 약속도 들어 보세요.', free: true, talk: true },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"오늘 정한 읽기 약속을 일주일 동안 지켜 보고, 기록장에 적어 와요." 두세 명이 약속을 발표한다. 출구 1번에서 책갈피가 있는 책을 다 읽은 책에 넣은 학생에게는 ✓와 책갈피 표시를 다시 보여 준다. 다음 주(24차시)에 한 주 기록장을 함께 세어 본다고 알려 준다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { topic: '준호의 기록장', slots: [{ id: 'done', label: '다 읽은 책' }, { id: 'reading', label: '읽는 중인 책' }], cards: [{ id: 'kite', text: '「연 날리는 날」 끝 쪽까지 ✓' }, { id: 'frog', text: '「개구리 합창단」 8쪽에 책갈피' }] }, prompt: '준호의 기록장을 다 읽은 책과 읽는 중인 책으로 나누어 보세요.', target: { sort: { done: ['kite'], reading: ['frog'] } }, difficulty: 0.15 },
            { type: 'choice', prompt: '읽기 기록장에 쓰면 좋은 것은 무엇일까요?', options: ['책 무게', '읽은 날', '표지 색깔'], answer: 1, difficulty: 0.1, explain: '읽은 날을 쓰면 언제 무엇을 읽었는지 나중에 알 수 있어요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '가족 읽기 약속',
        items: [
          { type: 'check', prompt: '읽기 기록장에 쓰면 좋은 것을 모두 골라 ✓ 하세요.', options: ['책 이름', '책 값', '읽은 날', '좋았던 만큼 ★'], answer: '책 이름, 읽은 날, 좋았던 만큼 ★' },
          { type: 'table', prompt: '가족 읽기 약속을 쓰세요.', columns: ['언제', '어디서', '누구와'], rows: 1 },
          { type: 'choice', prompt: '텔레비전 소리가 클 때 알맞은 것에 ○ 하세요.', options: ['텔레비전을 보며 읽어요', '조용한 곳으로 가서 읽어요', '읽지 않아요'], answer: '조용한 곳으로 가서 읽어요' },
          { type: 'table', prompt: '일주일 동안 읽은 책을 기록하세요.', columns: ['읽은 날', '책 이름', '끝까지 ✓', '★'], rows: 5 },
        ],
        easy: {
          note: '언제, 어디서 읽을지 하나씩 정해요.',
          items: [
            { type: 'choice', prompt: '기록장에 쓰면 좋은 것에 ○ 하세요.', options: ['책 이름', '책 무게'], answer: '책 이름' },
            { type: 'blank', prompt: '내 읽기 약속을 쓰세요.', text: '나는 ______에 책을 읽을 거예요.', answer: '(스스로 정한 때)' },
            { type: 'table', prompt: '일주일 동안 읽은 책을 쓰세요.', columns: ['읽은 날', '책 이름'], rows: 3 },
            { type: 'draw', prompt: '집에서 책을 읽는 내 모습을 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '기록장 나누기는 두 줄만 나오고, 맞게 넣은 카드에 초록 테두리가 생겨요. 동생 문항은 보기가 두 개예요.',
        base: '카드를 모두 넣은 뒤 확인해요.',
        challenge: '기록장에 쓸 것 고르기에 헷갈리는 카드가 더 나와요. 가족 읽기 약속에 \'몇 권\' 대신 \'몇 분\'을 정해 써요.',
      },
      teacherNotes: '이 차시의 책 이름(「달팽이 우체부」 등)은 이 단원을 위해 지어낸 것이다. 자주 보이는 어려움: ① 기록장을 칸 채우기로 여겨 읽지 않은 책도 쓴다(18차시 오개념) → \'끝까지 ✓\' 칸을 두어 읽는 중인 책과 가른다. ② 읽을 때를 정하지 않아 집에서 읽지 못한다 → \'잠자기 전 10분\'처럼 때를 하나 정하게 한다. ③ 가족과 읽을 형편이 안 되는 학생이 있다 → \'누구와\' 칸에 \'혼자\'라고 써도 된다고 미리 말하고, 그 학생은 아침 활동 시간에 교사와 읽는다. 가정통신문으로 가족 읽기 약속을 알린다.',
    }),

    // ───────────────────────── 21. 좋았던 곳을 골라 읽어 주기 ─────────────────────────
    L(21, {
      title: '이야기에서 좋았던 곳을 골라 글자 만들고 친구에게 읽어 주기',
      objective: '짧은 이야기에서 좋았던 곳을 골라 그 곳의 낱말 글자를 만들고, 줄거리 대신 좋았던 대목과 까닭을 짝에게 읽어 주며 말할 수 있다.',
      standards: READ,
      illustration: ART('a baby duck hiding under a big tree from the rain, with a child reading the story aloud to a friend beside a paper rain cloud', [
        { motif: 'cloud', x: 120, y: 52 }, { motif: 'cloud', x: 360, y: 46 }, { motif: 'hills', y: 208 },
        { motif: 'tree', x: 300, y: 214 }, { motif: 'flower', x: 110, y: 228 }, { motif: 'leaf', x: 400, y: 230 },
        { motif: 'text', x: 240, y: 140, text: '오리 + 나무', size: 26 },
      ]),
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '칠판에 짧은 이야기를 붙인다(이 단원을 위해 지은 이야기): "비가 와요. 아기 오리가 나무 아래로 가요. 나무가 잎을 넓게 펴요. 아기 오리가 \'고마워!\' 해요." 교사가 천천히 두 번 읽어 준다. "이 이야기에서 어느 곳이 가장 좋았나요?" 처음부터 끝까지 다시 말하는 학생에게 "그중 딱 한 곳만 손가락으로 짚어 볼까요?"라고 말한다. 시연 단추로 ㄹ과 ㅣ가 모여 \'리\'가 되는 모습을 보여 준다.',
          student: '이야기에서 가장 좋았던 곳 한 곳을 짚어 봐요.',
          demo: { tool: 'hangul', options: { consonants: ['ㄹ'], vowels: ['ㅣ'], slotHints: true, wordSoFar: '오' }, sequence: [{ syllable: '리' }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 좋았던 곳의 낱말 글자 만들기', minutes: 10, tool: 'hangul',
              teacher: '"좋았던 곳에 나온 낱말을 우리가 직접 만들어 봐요." 칠판 이야기에서 낱말을 짚고 필요한 자음자·모음자를 먼저 말하게 한다. \'무\'를 만들 때 ㅜ를 오른쪽에 놓는 학생에게 "ㅜ는 가로로 길어요, 세로로 길어요?"라고 묻는다. 기본 단계는 확인 전까지 합친 글자가 가려지니 먼저 소리 내어 보게 한다.',
              task: '이야기에서 좋았던 곳의 낱말 글자를 자음자와 모음자를 모아 만들어요.',
              levels: {
                easy: { consonants: ['ㄹ', 'ㅁ', 'ㅂ', 'ㄴ'], vowels: ['ㅏ', 'ㅗ', 'ㅜ', 'ㅣ'], slotHints: true, slotGuide: true },
                base: { consonants: ['ㄱ', 'ㄴ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅇ'], vowels: ['ㅏ', 'ㅓ', 'ㅗ', 'ㅜ', 'ㅣ'], revealAfterCheck: true },
                challenge: { consonants: ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ'], vowels: ['ㅏ', 'ㅓ', 'ㅕ', 'ㅗ', 'ㅜ', 'ㅡ', 'ㅣ'], speak: false, revealAfterCheck: true },
              },
              items: [
                { prompt: '\'오리\'의 둘째 글자 \'리\'를 만들어 보세요.', target: { syllable: '리' }, toolOptions: { wordSoFar: '오' }, difficulty: 0.15 },
                { prompt: '\'나무\'의 둘째 글자 \'무\'를 만들어 보세요.', target: { syllable: '무' }, toolOptions: { wordSoFar: '나' }, difficulty: 0.2,
                  predict: { q: 'ㅜ는 ㅁ의 어디에 붙을까요?', options: ['→ 오른쪽', '↓ 아래'], answer: 1 },
                  conclude: 'ㅜ는 가로로 길어서 ㅁ 아래에 붙어요. \'나\'와 이으면 \'나무\'예요.' },
                { prompt: '\'비가 와요\'의 \'비\'를 만들어 보세요.', target: { syllable: '비' }, difficulty: 0.15,
                  levels: { challenge: { prompt: '\'아래로\'의 마지막 글자 \'로\'를 만들어 보세요.', target: { syllable: '로' } } } },
                { prompt: '\'아래로\'의 셋째 글자 \'로\'를 만들어 보세요.', target: { syllable: '로' }, toolOptions: { wordSoFar: '아래' }, difficulty: 0.2,
                  levels: { challenge: { prompt: '\'고마워\'의 둘째 글자 \'마\'를 만들어 보세요.', target: { syllable: '마' }, toolOptions: { wordSoFar: '고' } } } },
              ],
            },
            {
              id: 'a2', title: '활동 2. 좋았던 곳을 말하는 말 고르기', minutes: 8, tool: 'mindmap',
              teacher: '"하윤이는 이야기를 처음부터 끝까지 다시 말했어요. 하윤이가 어디가 좋았는지 알 수 있나요?" 줄거리만 말한 카드와 좋았던 대목을 짚은 카드를 소리 내어 견주어 읽어 준다. "어디가 좋았는지 + 왜 좋았는지"를 칠판에 쓴다.',
              task: '좋았던 곳과 까닭을 함께 말한 말만 골라 바구니에 넣어요.',
              levels: { easy: HELP, base: {}, challenge: {} },
              items: [
                { prompt: '좋았던 곳을 짚고 까닭도 말한 말을 모두 골라 보세요.', toolOptions: { mode: 'pick', basket: '좋았던 곳 + 까닭', cards: [{ id: 'leaf', text: '"나무가 잎을 펴는 곳이 좋아. 오리를 지켜 줘서."' }, { id: 'thank', text: '"오리가 고맙다고 하는 곳이 좋아. 따뜻해서."' }, { id: 'plot', text: '"비가 오고, 오리가 가고, 나무가 펴고, 고마워 했어."' }, { id: 'just', text: '"다 좋았어."' }] }, target: { pick: ['leaf', 'thank'] }, difficulty: 0.2,
                  hints: ['카드마다 두 가지를 찾아봐요. 어느 한 곳을 짚었나요? 왜 좋았는지 말했나요?', '고른 카드가 이야기를 처음부터 끝까지 늘어놓은 말은 아닌지 다시 봐요.', '한 곳을 짚고 "~해서"처럼 까닭을 붙인 말만 남겨요.'] },
                { prompt: '줄거리만 말한 친구에게 좋았던 곳을 묻는 말을 이어 보세요.', toolOptions: { mode: 'match', topic: '되물어 주기', slots: [{ id: 'plot', label: '친구가 줄거리를 처음부터 끝까지 말했어요' }, { id: 'nowhy', label: '친구가 좋았던 곳만 말하고 까닭은 안 말했어요' }], cards: [{ id: 'where', text: '"그중 어디가 제일 좋았어?"' }, { id: 'why', text: '"왜 그곳이 좋았어?"' }, { id: 'long', text: '"더 길게 말해 줘."' }] }, target: { match: { plot: 'where', nowhy: 'why' } }, difficulty: 0.25 },
                { prompt: '더 해 보기: 다른 이야기에서 좋았던 곳과 까닭을 함께 말한 말을 모두 골라 보세요.', extra: true, toolOptions: { mode: 'pick', basket: '좋았던 곳 + 까닭', cards: [{ id: 'cat', text: '"고양이가 우산을 나누는 곳이 좋아. 착해서."' }, { id: 'end', text: '"끝에 둘이 웃는 곳이 좋아. 나도 웃음이 나서."' }, { id: 'first', text: '"처음엔 비, 다음엔 고양이, 그다음엔 우산이야."' }, { id: 'fun', text: '"재밌었어. 끝."' }] }, target: { pick: ['cat', 'end'] }, difficulty: 0.3 },
              ],
            },
            {
              id: 'a3', title: '활동 3. 짝에게 좋았던 곳 읽어 주기', minutes: 8, tool: 'emotion',
              teacher: '짝끼리 칠판 이야기에서 좋았던 문장 하나를 골라 손가락으로 짚으며 소리 내어 읽어 주고 "이곳이 좋았어. 왜냐하면 ___." 하고 말한다. 듣는 짝은 바라보며 듣는다(7차시). 바꾸어 한 번 더 한다. 끝나면 화면 문항을 푼다.',
              task: '짝에게 좋았던 문장을 짚으며 읽어 주고 까닭을 말해요. 짝이 읽어 줄 때 어떻게 들을지 골라요.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '짝에게 좋았던 문장을 손가락으로 짚으며 읽어 주고 "왜냐하면 ___." 하고 까닭을 말해 보세요.', free: true, talk: true },
                { prompt: '짝이 좋았던 곳을 읽어 줘요. 나는 어떻게 할까요?', toolOptions: { mode: 'branch', who: '나', situation: '짝이 칠판 이야기에서 좋았던 문장을 소리 내어 읽어 줘요.', choices: [{ id: 'look', text: '짝을 바라보며 끝까지 들어요', result: '짝이 신나서 까닭까지 말해 줘요', mood: '기쁨' }, { id: 'mine', text: '내가 좋았던 곳을 먼저 말해요', result: '짝이 읽던 문장을 멈춰요', mood: '속상함', why: '지금은 누구 차례인가요?' }] }, target: { choice: 'look' }, difficulty: 0.1 },
                { prompt: '짝과 좋았던 곳이 달라요. 어떻게 말할까요?', toolOptions: { mode: 'branch', who: '나', situation: '나는 나무가 잎을 펴는 곳이, 짝은 오리가 "고마워!" 하는 곳이 좋았대요.', choices: [{ id: 'wrong', text: '"거기는 별로야."', result: '짝이 다음에는 말하지 않으려 해요', mood: '속상함', why: '좋았던 곳에 틀린 답이 있을까요?' }, { id: 'new', text: '"너는 거기가 좋았구나. 왜?"', result: '짝의 까닭을 듣고 이야기를 새로 보게 돼요', mood: '기쁨' }, { id: 'copy', text: '"나도 거기로 바꿀래."', result: '내가 좋았던 곳은 아무도 몰라요', mood: '걱정', why: '내가 좋았던 곳을 바꿔야 할까요?' }] }, target: { choice: 'new' }, difficulty: 0.2,
                  conclude: '좋았던 곳은 저마다 달라요. 까닭을 물어보면 이야기를 새롭게 볼 수 있어요.' },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"오늘 짝이 고른 좋았던 곳은 어디였나요?" 몇 명이 짝의 대목과 까닭을 대신 말해 본다. 출구 1번에서 줄거리 카드를 고른 학생은 \'한 곳 짚기\'를 아직 어려워하는 것이니 다음 시간에 손가락으로 한 문장만 짚게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '좋았던 곳 + 까닭', cards: [{ id: 'rain', text: '"비가 그치는 곳이 좋아. 시원해서."' }, { id: 'all', text: '"오리가 가고, 나무가 펴고, 끝났어."' }, { id: 'nice', text: '"좋았어."' }] }, prompt: '좋았던 곳과 까닭을 함께 말한 말을 골라 보세요.', target: { pick: ['rain'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '\'고마워\'의 \'고\'는 어떤 조각으로 만들까요?', options: ['ㄱ 과 ㅏ', 'ㄱ 과 ㅗ', 'ㄱ 과 ㅜ'], answer: 1, difficulty: 0.15, explain: 'ㄱ 아래에 ㅗ를 붙이면 \'고\'가 돼요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '좋았던 곳 읽어 주기',
        items: [
          { type: 'blank', prompt: '빈칸에 알맞은 글자를 쓰세요.', text: 'ㄹ + ㅣ = ______', answer: '리' },
          { type: 'blank', prompt: '빈칸에 알맞은 글자를 쓰세요.', text: 'ㅁ + ㅜ = ______', answer: '무' },
          { type: 'choice', prompt: '좋았던 곳과 까닭을 함께 말한 말에 ○ 하세요.', options: ['"비가 오고 오리가 가고 끝났어."', '"나무가 잎을 펴는 곳이 좋아. 오리를 지켜 줘서."', '"다 좋았어."'], answer: '"나무가 잎을 펴는 곳이 좋아. 오리를 지켜 줘서."' },
          { type: 'blank', prompt: '내가 좋았던 곳과 까닭을 쓰세요.', text: '나는 ______ 곳이 좋았어. 왜냐하면 ______.', answer: '(스스로 고른 곳과 까닭)' },
        ],
        easy: {
          note: '좋았던 곳 한 곳만 손가락으로 짚어요.',
          items: [
            { type: 'blank', prompt: '빈칸에 알맞은 글자를 쓰세요.', text: 'ㅂ + ㅣ = ______', answer: '비' },
            { type: 'choice', prompt: '좋았던 곳을 말한 말에 ○ 하세요.', options: ['"오리가 고맙다고 하는 곳이 좋아."', '"다 좋았어."'], answer: '"오리가 고맙다고 하는 곳이 좋아."' },
            { type: 'short', prompt: '내가 좋았던 곳을 한 문장으로 쓰세요.' },
            { type: 'draw', prompt: '이야기에서 좋았던 곳을 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '글자 만들기는 조각 여덟 개만 나오고 모음을 들면 알맞은 자리 테두리가 깜박여요. 좋았던 곳 고르기는 맞게 넣은 카드에 초록 테두리가 생겨요.',
        base: '합친 글자는 확인을 누른 뒤에 보여요. 카드를 모두 고른 뒤 확인해요.',
        challenge: '조각이 더 많고 내 글자 듣기가 없어요. 셋째·넷째 문항은 \'로\'와 \'마\'를 만들어요. 더 해 보기(다른 이야기)까지 풀어요.',
      },
      teacherNotes: '칠판 이야기(「아기 오리와 비」)는 이 단원을 위해 지은 것이다. 자주 보이는 어려움: ① 줄거리만 길게 말하고 어느 대목이 좋았는지 짚지 못한다(이 주제의 대표 오개념) → "어디가 + 왜"를 칠판에 붙이고, 손가락으로 한 문장만 짚게 한다. ② 짝과 좋았던 곳이 같아야 한다고 여긴다 → 저마다 다른 것이 당연하다고 말한다. ③ 글자를 만들 때 ㅜ·ㅗ 자리를 헷갈린다 → 2차시 짧은 획 방향을 다시 짚는다. 받침 있는 글자는 만들지 않는다(읽기만 한다).',
    }),

    // ───────────────────────── 22. 연습: 친구가 권한 책 읽고 느낌 말하기 ─────────────────────────
    L(22, {
      title: '친구가 권한 책의 이름 글자 만들고 읽은 느낌 말해 주기',
      objective: '친구가 권한 책 이름의 글자를 만들어 읽고, 그 책을 읽은 뒤 느낌을 "~해서 ~했어" 틀로 친구에게 말해 줄 수 있다.',
      standards: READ,
      illustration: ART('two children exchanging picture books with a smile, one book with a hippo cover and one with a sweet potato cover', [
        { motif: 'sun', x: 404, y: 56, s: 0.8 }, { motif: 'cloud', x: 120, y: 52 }, { motif: 'hills', y: 208 },
        { motif: 'house', x: 110, y: 216 }, { motif: 'tree', x: 390, y: 216 }, { motif: 'flower', x: 250, y: 230 },
        { motif: 'text', x: 240, y: 140, text: '이 책 읽어 볼래?', size: 26 },
      ]),
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '교사가 학생 한 명에게 그림책을 건네며 "이 책 읽어 볼래? 하마가 춤을 춰서 재미있어"라고 권한다. "친구가 책을 권하면 어떻게 하면 좋을까요?" 받아서 읽고 느낌을 말해 주면 권한 친구가 기뻐한다는 것을 끌어낸다. 시연 단추로 ㅎ과 ㅏ가 모여 \'하\'가 되는 모습을 보여 준다. "오늘은 친구가 권한 책 이름을 먼저 만들어 읽어 봐요."',
          student: '친구가 책을 권하면 어떻게 할까요?',
          demo: { tool: 'hangul', options: { consonants: ['ㅎ'], vowels: ['ㅏ'], slotHints: true }, sequence: [{ syllable: '하' }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 권한 책 이름 글자 만들기', minutes: 9, tool: 'hangul',
              teacher: '칠판에 친구들이 권한 책 이름(지어낸 것)을 붙인다: 「하마의 춤」, 「고구마 기차」, 「두더지 집」. "책 이름의 글자를 하나씩 만들어 읽어 봐요." \'더\'를 만들 때 ㅓ 대신 ㅏ를 놓은 학생에게 "짧은 획이 ㄷ 쪽을 보고 있나요?"라고 묻는다.',
              task: '친구가 권한 책 이름에 나오는 글자를 자음자와 모음자를 모아 만들어요.',
              levels: {
                easy: { consonants: ['ㄱ', 'ㄷ', 'ㅈ', 'ㅎ'], vowels: ['ㅏ', 'ㅓ', 'ㅜ', 'ㅣ'], slotHints: true, slotGuide: true },
                base: { consonants: ['ㄱ', 'ㄷ', 'ㅁ', 'ㅈ', 'ㅎ', 'ㅇ'], vowels: ['ㅏ', 'ㅓ', 'ㅗ', 'ㅜ', 'ㅣ'], revealAfterCheck: true },
                challenge: { consonants: ['ㄱ', 'ㄴ', 'ㄷ', 'ㅁ', 'ㅅ', 'ㅈ', 'ㅊ', 'ㅎ', 'ㅇ'], vowels: ['ㅏ', 'ㅓ', 'ㅕ', 'ㅗ', 'ㅜ', 'ㅡ', 'ㅣ'], speak: false, revealAfterCheck: true },
              },
              items: [
                { prompt: '「하마의 춤」의 첫 글자 \'하\'를 만들어 보세요.', target: { syllable: '하' }, difficulty: 0.1 },
                { prompt: '「고구마 기차」의 \'고구마\'에서 둘째 글자 \'구\'를 만들어 보세요.', target: { syllable: '구' }, toolOptions: { wordSoFar: '고' }, difficulty: 0.2 },
                { prompt: '「두더지 집」의 \'두더지\'에서 둘째 글자 \'더\'를 만들어 보세요.', target: { syllable: '더' }, toolOptions: { wordSoFar: '두' }, difficulty: 0.25,
                  predict: { q: '\'더\'의 모음은 짧은 획이 어느 쪽에 있을까요?', options: ['오른쪽', '왼쪽(자음 쪽)'], answer: 1 },
                  conclude: 'ㅓ는 짧은 획이 ㄷ 쪽(왼쪽)을 봐요. ㅏ로 놓으면 \'다\'가 돼요.' },
                { prompt: '\'두더지\'의 셋째 글자 \'지\'를 만들어 보세요.', target: { syllable: '지' }, toolOptions: { wordSoFar: '두더' }, difficulty: 0.2,
                  levels: { challenge: { prompt: '「고구마 기차」의 \'차\'를 만들어 보세요.', target: { syllable: '차' }, toolOptions: { wordSoFar: '기' } } } },
              ],
            },
            {
              id: 'a2', title: '활동 2. 읽은 느낌을 말하는 말 채우기', minutes: 8, tool: 'story',
              teacher: '"책을 권해 준 친구에게 \'재밌었어\'만 말하면 무엇이 재미있었는지 알 수 있을까요?" "~해서 ~했어" 틀을 칠판에 쓴다. 빈칸에 \'그냥\'을 넣은 학생에게 "무엇 때문에 그런 마음이 들었나요?"라고 묻는다.',
              task: '책을 읽은 친구가 권해 준 친구에게 하는 말에서, 빈칸에 알맞은 까닭이나 느낌을 넣어요.',
              levels: { easy: HELP, base: {}, challenge: {} },
              items: [
                { prompt: '민지가 「하마의 춤」을 읽고 하윤이에게 느낌을 말해요. 빈칸에 알맞은 말을 넣어 보세요.', toolOptions: { mode: 'fill', cards: [{ id: 'dance', text: '하마가 엉덩이춤을 춰서' }, { id: 'just', text: '그냥' }, { id: 'cover', text: '책이 무거워서' }], slots: [{ id: 'b1', who: '민지', motif: 'flower', label: '하윤아, ___ 웃음이 났어.' }] }, target: { fill: { b1: 'dance' } }, difficulty: 0.15 },
                { prompt: '준호가 「두더지 집」을 읽고 느낌을 말해요. 두 빈칸에 알맞은 말을 넣어 보세요.', toolOptions: { mode: 'fill', cards: [{ id: 'dark', text: '두더지 집이 깜깜해서' }, { id: 'scary', text: '조금 무서웠어' }, { id: 'yummy', text: '배가 불렀어' }, { id: 'thanks', text: '권해 줘서 고마워' }], slots: [{ id: 'b1', who: '준호', motif: 'leaf', label: '___ 조마조마했어.' }, { id: 'b2', who: '준호', motif: 'sun', label: '그래도 끝에는 웃었어. ___.' }] }, target: { fill: { b1: 'dark', b2: 'thanks' } }, difficulty: 0.25,
                  levels: { easy: { prompt: '준호가 「두더지 집」을 읽고 느낌을 말해요. 빈칸에 알맞은 말을 넣어 보세요.', toolOptions: { cards: [{ id: 'dark', text: '두더지 집이 깜깜해서' }, { id: 'yummy', text: '배가 불렀어' }], slots: [{ id: 'b1', who: '준호', motif: 'leaf', label: '___ 조마조마했어.' }] }, target: { fill: { b1: 'dark' } } } },
                  hints: ['빈칸 뒤에 오는 말을 먼저 읽어 봐요. 그 마음이 든 까닭이나, 끝에 할 인사를 찾아요.', '넣은 카드를 빈칸에 넣어 처음부터 소리 내어 읽어 보고 말이 되는지 들어 봐요.', '조마조마한 까닭은 책 속 장면에서, 끝에는 권해 준 친구에게 하는 인사를 넣어요.'] },
                { prompt: '서준이가 「고구마 기차」를 읽고 느낌을 말해요. 빈칸에 알맞은 말을 넣어 보세요.', toolOptions: { mode: 'fill', cards: [{ id: 'want', text: '나도 타 보고 싶었어' }, { id: 'nothing', text: '아무 느낌 없어' }, { id: 'heavy', text: '고구마가 무거웠어' }], slots: [{ id: 'b1', who: '서준', motif: 'tree', label: '고구마 기차가 하늘을 날아서 ___.' }] }, target: { fill: { b1: 'want' } }, difficulty: 0.2,
                  conclude: '"~해서 ~했어"처럼 까닭과 마음을 함께 말하면 권해 준 친구가 내 느낌을 잘 알 수 있어요.' },
              ],
            },
            {
              id: 'a3', title: '활동 3. 책 바꿔 읽고 느낌 말해 주기', minutes: 9, tool: 'emotion',
              teacher: '짝끼리 지난 시간까지 읽은 책 가운데 하나를 권하며 바꾼다. 5분 동안 짝이 권한 책의 앞부분을 읽고, "~해서 ~했어" 틀로 느낌을 말해 준다. 다 못 읽은 학생은 책갈피를 끼워 다음에 이어 읽는다. 끝나면 화면 문항을 푼다.',
              task: '짝과 책을 바꿔 5분 동안 읽고, "~해서 ~했어" 틀로 느낌을 말해 줘요.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '짝에게 책을 권하며 바꾸고, 5분 동안 짝이 권한 책을 읽어 보세요.', free: true },
                { prompt: '짝에게 "~해서 ~했어" 틀로 읽은 느낌을 말해 주세요.', free: true, talk: true },
                { prompt: '짝이 권한 책이 내 마음에 들지 않았어요. 어떻게 말할까요?', toolOptions: { mode: 'branch', who: '나', situation: '짝이 권한 책을 읽었는데 나는 별로 재미있지 않았어요.', choices: [{ id: 'rude', text: '"이 책 재미없어. 왜 줬어?"', result: '짝이 다음부터 책을 권하지 않아요', mood: '슬픔', why: '권해 준 짝은 어떤 마음일까요?' }, { id: 'kind', text: '"그림이 예뻐서 좋았어. 권해 줘서 고마워."', result: '짝이 기뻐하고 다른 책도 함께 찾아봐요', mood: '고마움' }, { id: 'lie', text: '"최고야!" 하고 거짓으로 말해요', result: '짝이 비슷한 책만 계속 권해요', mood: '걱정', why: '거짓으로 말하면 짝이 내 마음을 알 수 있을까요?' }] }, target: { choice: 'kind' }, difficulty: 0.25,
                  levels: { easy: { toolOptions: { choices: [{ id: 'rude', text: '"이 책 재미없어. 왜 줬어?"', result: '짝이 다음부터 책을 권하지 않아요', mood: '슬픔', why: '권해 준 짝은 어떤 마음일까요?' }, { id: 'kind', text: '"그림이 예뻐서 좋았어. 권해 줘서 고마워."', result: '짝이 기뻐하고 다른 책도 함께 찾아봐요', mood: '고마움' }] } } },
                  conclude: '마음에 덜 들어도 좋았던 점 하나와 고맙다는 말을 하면 서로 기분이 좋아요.' },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"짝이 해 준 느낌 말 가운데 기억에 남는 것은 무엇인가요?" 두세 명이 짝의 말을 옮긴다. 출구 1번에서 \'그냥\'을 넣은 학생은 까닭을 말하는 틀이 아직 익숙하지 않은 것이니 다음 시간에 "무엇 때문에?"를 함께 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'story', options: { mode: 'fill', cards: [{ id: 'brave', text: '꼬마 곰이 용감해서' }, { id: 'just', text: '그냥' }, { id: 'thick', text: '책이 두꺼워서' }], slots: [{ id: 'b1', who: '지우', motif: 'star', label: '___ 나도 힘이 났어.' }] }, prompt: '지우가 친구가 권한 책을 읽고 느낌을 말해요. 빈칸에 알맞은 말을 넣어 보세요.', target: { fill: { b1: 'brave' } }, difficulty: 0.2 },
            { type: 'choice', prompt: '\'두더지\'의 \'더\'는 어떤 조각으로 만들까요?', options: ['ㄷ 과 ㅏ', 'ㄷ 과 ㅓ', 'ㄷ 과 ㅗ'], answer: 1, difficulty: 0.2, explain: 'ㄷ 오른쪽에 짧은 획이 왼쪽인 ㅓ를 붙이면 \'더\'가 돼요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '친구가 권한 책',
        items: [
          { type: 'blank', prompt: '빈칸에 알맞은 글자를 쓰세요.', text: 'ㅎ + ㅏ = ______', answer: '하' },
          { type: 'blank', prompt: '빈칸에 알맞은 글자를 쓰세요.', text: 'ㄷ + ㅓ = ______', answer: '더' },
          { type: 'choice', prompt: '느낌을 까닭과 함께 말한 것에 ○ 하세요.', options: ['"재밌었어."', '"하마가 춤을 춰서 웃음이 났어."', '"그냥."'], answer: '"하마가 춤을 춰서 웃음이 났어."' },
          { type: 'blank', prompt: '짝이 권한 책을 읽은 느낌을 쓰세요.', text: '______해서 ______했어.', answer: '(스스로 쓴 까닭과 마음)' },
        ],
        easy: {
          note: '"~해서 ~했어"처럼 까닭과 마음을 함께 말해요.',
          items: [
            { type: 'blank', prompt: '빈칸에 알맞은 글자를 쓰세요.', text: 'ㄱ + ㅜ = ______', answer: '구' },
            { type: 'choice', prompt: '까닭이 있는 말에 ○ 하세요.', options: ['"그냥."', '"두더지 집이 깜깜해서 무서웠어."'], answer: '"두더지 집이 깜깜해서 무서웠어."' },
            { type: 'short', prompt: '짝이 권한 책 이름을 쓰세요.' },
            { type: 'draw', prompt: '짝이 권한 책에서 기억나는 장면을 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '글자 만들기는 조각 여덟 개만 나오고 모음을 들면 알맞은 자리 테두리가 깜박여요. 느낌 채우기 둘째 문항은 빈칸이 하나예요.',
        base: '합친 글자는 확인을 누른 뒤에 보여요. 빈칸을 모두 채운 뒤 확인해요.',
        challenge: '조각이 더 많고 내 글자 듣기가 없어요. 넷째 문항은 \'차\'를 만들어요. 짝에게 느낌을 두 문장으로 말해요.',
      },
      teacherNotes: '책 이름(「하마의 춤」, 「고구마 기차」, 「두더지 집」)은 이 단원을 위해 지어낸 것이다. 자주 보이는 어려움: ① 느낌을 "재밌었어"만 말하고 어느 대목 때문인지 말하지 못한다(이 주제의 대표 오개념과 같은 뿌리) → "무엇 때문에?"를 되묻는다. ② 마음에 들지 않은 책을 권한 친구에게 무례하게 말하거나, 반대로 거짓으로 칭찬한다 → 좋았던 점 하나 + 고마움을 말하게 한다. ③ ㅓ와 ㅏ를 바꾸어 \'다\'를 만든다 → 짧은 획이 자음 쪽인지 바깥쪽인지 묻는다. 책 바꾸기는 지난 시간까지 읽은 책 가운데서 한다.',
    }),

    // ───────────────────────── 23. 확장: 동시를 실감 나게 읽어 주기 ─────────────────────────
    L(23, {
      title: '바닷가 동시의 낱말 글자 만들고 흉내 내는 말 살려 읽어 주기',
      objective: '짧은 동시에서 낱말 글자를 만들어 읽고, 흉내 내는 말을 알맞은 크기와 빠르기로 살려 모둠 친구에게 읽어 줄 수 있다.',
      standards: READ,
      illustration: ART('a sandy beach with paper waves, a small crab and shells whispering, and a child reading a short poem aloud with a big smile', [
        { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 110, y: 50 }, { motif: 'wave', y: 200 },
        { motif: 'wave', y: 222 }, { motif: 'bird', x: 300, y: 70 }, { motif: 'star', x: 200, y: 40 },
        { motif: 'text', x: 240, y: 140, text: '파도가 쏴아', size: 28 },
      ]),
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '칠판에 동시를 붙인다(이 단원을 위해 지은 동시 「바닷가에서」): "파도가 쏴아 / 모래가 사르르 / 조개는 소곤소곤 / 나는 까르르". 교사가 먼저 아무 느낌 없이 빠르게 읽고, 다시 \'쏴아\'는 크고 길게, \'소곤소곤\'은 작게 읽는다. "두 번 읽은 것 가운데 바닷가가 더 잘 떠오른 것은 어느 쪽인가요?" 시연 단추로 ㅍ과 ㅏ가 모여 \'파\'가 되는 모습을 보여 준다.',
          student: '어떻게 읽으면 바닷가가 더 잘 떠오를까요?',
          demo: { tool: 'hangul', options: { consonants: ['ㅍ'], vowels: ['ㅏ'], slotHints: true }, sequence: [{ syllable: '파' }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 동시 속 낱말 글자 만들기', minutes: 9, tool: 'hangul',
              teacher: '"동시에서 이 글자를 찾아 손가락으로 짚어 보고 만들어 봐요." ㅍ은 처음 나오는 자음자이니 "ㅍ은 [프] 소리가 나요"라고 소리를 들려준다. \'조\'를 만들 때 ㅈ 오른쪽에 ㅗ를 놓은 학생에게 "ㅗ는 가로로 길어요, 세로로 길어요?"라고 묻는다.',
              task: '동시에 나오는 낱말의 글자를 자음자와 모음자를 모아 만들어요.',
              levels: {
                easy: { consonants: ['ㄷ', 'ㅁ', 'ㅈ', 'ㅍ'], vowels: ['ㅏ', 'ㅗ', 'ㅜ', 'ㅣ'], slotHints: true, slotGuide: true },
                base: { consonants: ['ㄱ', 'ㄷ', 'ㅁ', 'ㅂ', 'ㅈ', 'ㅍ'], vowels: ['ㅏ', 'ㅓ', 'ㅗ', 'ㅜ', 'ㅣ'], revealAfterCheck: true },
                challenge: { consonants: ['ㄱ', 'ㄷ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅈ', 'ㅊ', 'ㅌ', 'ㅍ'], vowels: ['ㅏ', 'ㅓ', 'ㅗ', 'ㅜ', 'ㅡ', 'ㅣ'], speak: false, revealAfterCheck: true },
              },
              items: [
                { prompt: '\'파도\'의 첫 글자 \'파\'를 만들어 보세요.', target: { syllable: '파' }, difficulty: 0.15 },
                { prompt: '\'파도\'의 둘째 글자 \'도\'를 만들어 보세요.', target: { syllable: '도' }, toolOptions: { wordSoFar: '파' }, difficulty: 0.15 },
                { prompt: '\'모래\'의 첫 글자 \'모\'를 만들어 보세요.', target: { syllable: '모' }, difficulty: 0.15,
                  levels: { challenge: { prompt: '\'모래\'의 첫 글자와 모음만 다른 \'무\'를 만들어 보세요.', target: { syllable: '무' } } } },
                { prompt: '\'조개\'의 첫 글자 \'조\'를 만들어 보세요.', target: { syllable: '조' }, difficulty: 0.2,
                  predict: { q: 'ㅗ는 ㅈ의 어디에 붙을까요?', options: ['→ 오른쪽', '↓ 아래'], answer: 1 },
                  conclude: 'ㅗ는 가로로 길어서 ㅈ 아래에 붙어요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 흉내 내는 말 살려 읽는 방법', minutes: 8, tool: 'mindmap',
              teacher: '"\'쏴아\'는 어떤 소리일까요? 크게? 작게?" 낱말마다 모두 함께 소리 내어 읽어 본 뒤 고르게 한다. \'소곤소곤\'을 크게 읽기에 이은 학생에게 "조개가 소곤소곤 이야기할 때 소리가 컸을까요?"라고 묻는다.',
              task: '흉내 내는 말에 어울리는 읽는 방법을 잇고, 소리 내어 읽어 줄 때 지킬 것을 골라요.',
              levels: { easy: HELP, base: {}, challenge: {} },
              items: [
                { prompt: '흉내 내는 말에 어울리는 읽는 방법을 이어 보세요.', toolOptions: { mode: 'match', topic: '살려 읽기', slots: [{ id: 'wave', label: '파도가 쏴아' }, { id: 'shell', label: '조개는 소곤소곤' }], cards: [{ id: 'big', text: '크고 길게 읽어요' }, { id: 'soft', text: '작고 가만가만 읽어요' }, { id: 'stop', text: '읽지 않고 건너뛰어요' }] }, target: { match: { wave: 'big', shell: 'soft' } }, difficulty: 0.15 },
                { prompt: '이번 흉내 내는 말에도 어울리는 읽는 방법을 이어 보세요.', toolOptions: { mode: 'match', topic: '살려 읽기', slots: [{ id: 'sand', label: '모래가 사르르' }, { id: 'laugh', label: '나는 까르르' }, { id: 'rain', label: '빗방울이 톡톡' }], cards: [{ id: 'slide', text: '부드럽게 흘러가듯 읽어요' }, { id: 'bright', text: '밝게 웃으며 읽어요' }, { id: 'tap', text: '짧게 끊어 읽어요' }] }, target: { match: { sand: 'slide', laugh: 'bright', rain: 'tap' } }, difficulty: 0.3,
                  levels: { easy: { prompt: '두 흉내 내는 말에 어울리는 읽는 방법을 이어 보세요.', toolOptions: { slots: [{ id: 'laugh', label: '나는 까르르' }, { id: 'rain', label: '빗방울이 톡톡' }], cards: [{ id: 'bright', text: '밝게 웃으며 읽어요' }, { id: 'tap', text: '짧게 끊어 읽어요' }] }, target: { match: { laugh: 'bright', rain: 'tap' } } } },
                  hints: ['칸의 흉내 내는 말을 소리 내어 읽어 보고, 그 소리나 모습이 어떤지 떠올려 봐요.', '이은 방법대로 읽어 보고 그 말이 나타내는 모습과 어울리는지 들어 봐요.', '모래가 흘러내리는 말은 부드럽게, 웃음소리는 밝게, 빗방울 떨어지는 말은 짧게 끊어 읽어요.'] },
                { prompt: '친구에게 동시를 읽어 줄 때 지킬 것을 모두 골라 보세요.', toolOptions: { mode: 'pick', basket: '읽어 줄 때', cards: [{ id: 'clear', text: '또박또박 읽어요' }, { id: 'look', text: '가끔 듣는 친구를 봐요' }, { id: 'hide', text: '책으로 얼굴을 가려요' }, { id: 'rush', text: '아주 빨리 읽어요' }] }, target: { pick: ['clear', 'look'] }, difficulty: 0.15,
                  levels: { challenge: { prompt: '친구에게 동시를 읽어 줄 때 지킬 것을 모두 골라 보세요. 헷갈리는 카드가 더 있어요.', toolOptions: { cards: [{ id: 'clear', text: '또박또박 읽어요' }, { id: 'look', text: '가끔 듣는 친구를 봐요' }, { id: 'pause', text: '줄이 끝나면 잠깐 쉬어요' }, { id: 'hide', text: '책으로 얼굴을 가려요' }, { id: 'rush', text: '아주 빨리 읽어요' }, { id: 'mumble', text: '입속으로 웅얼웅얼 읽어요' }] }, target: { pick: ['clear', 'look', 'pause'] } } } },
              ],
            },
            {
              id: 'a3', title: '활동 3. 모둠에서 동시 읽어 주기', minutes: 9, tool: 'emotion',
              teacher: '네 명 모둠에서 한 사람이 한 줄씩 맡아 동시를 살려 읽는다(2분 연습 → 모둠 안에서 한 번 읽기). 앞에 나와 읽는 것은 시간이 되는 두 모둠만 한다. 듣는 모둠은 가장 실감 났던 줄 하나를 말해 준다. 읽다가 틀린 친구가 생기면 어떻게 할지 화면에서 먼저 고르고 시작한다.',
              task: '먼저 친구가 틀렸을 때 어떻게 할지 고르고, 모둠에서 한 줄씩 맡아 동시를 살려 읽어요.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '모둠 친구가 동시를 읽다가 글자를 틀렸어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '나', situation: '모둠 친구가 "조개는…" 하다가 글자를 틀려 얼굴이 빨개졌어요.', choices: [{ id: 'laugh', text: '"틀렸다!" 하고 웃어요', result: '친구가 다시는 읽지 않으려 해요', mood: '슬픔', why: '웃음을 들은 친구는 어떤 마음일까요?' }, { id: 'wait', text: '기다려 주고 "다시 해 봐." 해요', result: '친구가 다시 읽고 끝까지 마쳐요', mood: '뿌듯함' }, { id: 'take', text: '내가 대신 읽어 줘요', result: '친구는 자기 줄을 읽지 못해요', mood: '속상함', why: '친구 차례를 내가 가져가도 될까요?' }] }, target: { choice: 'wait' }, difficulty: 0.15,
                  levels: { easy: { toolOptions: { choices: [{ id: 'laugh', text: '"틀렸다!" 하고 웃어요', result: '친구가 다시는 읽지 않으려 해요', mood: '슬픔', why: '웃음을 들은 친구는 어떤 마음일까요?' }, { id: 'wait', text: '기다려 주고 "다시 해 봐." 해요', result: '친구가 다시 읽고 끝까지 마쳐요', mood: '뿌듯함' }] } } } },
                { prompt: '모둠에서 한 사람이 한 줄씩 맡아 동시 「바닷가에서」를 흉내 내는 말을 살려 읽어 보세요.', free: true, talk: true },
                { prompt: '다른 모둠의 읽기를 듣고 가장 실감 났던 줄 하나를 골라 그 모둠에게 말해 주세요.', free: true, talk: true },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"오늘 동시에서 내가 맡은 줄은 어떻게 읽었나요?" 몇 명이 자기 줄을 다시 살려 읽는다. 출구 1번에서 작은 소리를 나타내는 말을 크게 읽기에 이은 학생은 낱말이 나타내는 모습을 떠올리지 않은 것이니 다음 시간에 몸짓과 함께 읽게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '살려 읽기', slots: [{ id: 'whisper', label: '아기가 새근새근' }], cards: [{ id: 'quiet', text: '작고 가만가만 읽어요' }, { id: 'loud', text: '크고 힘차게 읽어요' }] }, prompt: '흉내 내는 말에 어울리는 읽는 방법을 이어 보세요.', target: { match: { whisper: 'quiet' } }, difficulty: 0.15 },
            { type: 'choice', prompt: '\'파\'는 어떤 조각으로 만들까요?', options: ['ㅍ 과 ㅏ', 'ㅂ 과 ㅏ', 'ㅍ 과 ㅓ'], answer: 0, difficulty: 0.15, explain: 'ㅍ 오른쪽에 ㅏ를 붙이면 \'파\'가 돼요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '바닷가에서',
        items: [
          { type: 'blank', prompt: '빈칸에 알맞은 글자를 쓰세요.', text: 'ㅍ + ㅏ = ______', answer: '파' },
          { type: 'blank', prompt: '빈칸에 알맞은 글자를 쓰세요.', text: 'ㅈ + ㅗ = ______', answer: '조' },
          { type: 'table', prompt: '흉내 내는 말을 어떻게 읽을지 쓰세요.', columns: ['흉내 내는 말', '어떻게 읽을까요?'], cells: [['쏴아', ''], ['소곤소곤', ''], ['까르르', '']] },
          { type: 'check', prompt: '친구에게 읽어 줄 때 지킬 것을 모두 골라 ✓ 하세요.', options: ['또박또박 읽어요', '책으로 얼굴을 가려요', '가끔 듣는 친구를 봐요', '아주 빨리 읽어요'], answer: '또박또박 읽어요, 가끔 듣는 친구를 봐요' },
          { type: 'short', prompt: '동시에서 내가 맡은 줄을 쓰세요.' },
        ],
        easy: {
          note: '흉내 내는 말이 나타내는 모습을 떠올리며 읽어요.',
          items: [
            { type: 'blank', prompt: '빈칸에 알맞은 글자를 쓰세요.', text: 'ㄷ + ㅗ = ______', answer: '도' },
            { type: 'choice', prompt: '\'소곤소곤\'은 어떻게 읽을까요?', options: ['작고 가만가만', '크고 힘차게'], answer: '작고 가만가만' },
            { type: 'choice', prompt: '읽어 줄 때 지킬 것에 ○ 하세요.', options: ['또박또박 읽어요', '얼굴을 가려요'], answer: '또박또박 읽어요' },
            { type: 'draw', prompt: '동시 「바닷가에서」의 바닷가를 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '글자 만들기는 조각 여덟 개만 나오고 모음을 들면 알맞은 자리 테두리가 깜박여요. 흉내 내는 말 잇기 둘째 문항은 두 칸이에요.',
        base: '합친 글자는 확인을 누른 뒤에 보여요. 카드를 모두 이은 뒤 확인해요.',
        challenge: '조각이 더 많고 내 글자 듣기가 없어요. 셋째 문항은 \'무\'를 만들어요. 지킬 것 고르기에 헷갈리는 카드가 더 나와요.',
      },
      teacherNotes: '동시 「바닷가에서」는 이 단원을 위해 지은 것이다. 자주 보이는 어려움: ① 동시를 줄거리 말하듯 한 번에 빨리 읽는다 → 줄 끝마다 쉬게 한다. ② 흉내 내는 말을 모두 크게만 읽는다 → 그 말이 나타내는 모습을 몸짓으로 먼저 해 보게 한다. ③ 친구가 틀리면 웃거나 대신 읽는다 → 기다리고 "다시 해 봐"라고 말하는 것을 먼저 고르고 시작한다. ㅍ은 이 차시에 처음 쓰는 자음자이며 33차시에서 ㅂ과 견주어 다시 다룬다. 앞에 나와 읽는 것은 시간이 되는 두 모둠만 한다.',
    }),

    // ───────────────────────── 24. 한 주 읽기 세어 보고 목표 정하기 ─────────────────────────
    L(24, {
      title: '한 주 동안 끝까지 읽은 책 세어 보고 다음 주 목표 정하기',
      objective: '읽기 기록장에서 한 주 동안 끝까지 읽은 책을 세고, 쉬운 책 되풀이가 아닌 새 책과 읽을 시간을 넣어 다음 주 목표를 정할 수 있다.',
      standards: READ,
      illustration: ART('a child counting check marks in a paper reading log with a small calendar of seven days and a stack of picture books', [
        { motif: 'sun', x: 404, y: 56, s: 0.8 }, { motif: 'cloud', x: 110, y: 52 }, { motif: 'hills', y: 208 },
        { motif: 'house', x: 110, y: 216 }, { motif: 'tree', x: 390, y: 216 }, { motif: 'star', x: 250, y: 62 },
        { motif: 'text', x: 240, y: 140, text: '이번 주 ✓ 하나, 둘, 셋', size: 22 },
      ]),
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '20차시에 정한 가족 읽기 약속과 일주일 기록장을 펴게 한다. "지난주에 끝까지 읽은 책은 몇 권일까요? 어떻게 세면 될까요?" ✓가 있는 줄만 센다는 것을 짚는다. 시연 단추로 ✓가 있는 줄이 \'끝까지 읽은 책\' 바구니에 들어가는 모습을 보여 준다. "숫자가 크다고 꼭 좋은 것은 아니에요. 오늘은 어떤 책을 읽었는지도 함께 봐요."',
          student: '이번 주에 끝까지 읽은 책은 몇 권일까요?',
          demo: { tool: 'mindmap', options: { mode: 'pick', basket: '끝까지 읽은 책', shuffle: false, cards: [{ id: 'a', text: '월: 「도토리 가방」 ✓' }, { id: 'b', text: '화: 「꼬마 기차」 책갈피' }] }, sequence: [{ pick: ['a'] }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 기록장에서 끝까지 읽은 책 세기', minutes: 8, tool: 'mindmap',
              teacher: '"✓가 있는 줄만 골라 바구니에 넣어요. 다 넣고 나서 몇 권인지 세어 봐요." 책갈피 줄을 넣은 학생에게 "책갈피가 있으면 끝까지 읽었나요?"라고 묻는다. 둘째 문항에서 같은 책이 여러 번 나오는 것을 보고 "준호는 몇 가지 책을 읽었나요?"를 묻는다.',
              task: '친구의 한 주 기록장에서 문항이 묻는 줄만 골라 바구니에 넣어요.',
              levels: { easy: HELP, base: {}, challenge: {} },
              items: [
                { prompt: '민지의 한 주 기록장이에요. 끝까지 읽은 책 줄을 모두 골라 보세요.', toolOptions: { mode: 'pick', basket: '끝까지 읽은 책', cards: [{ id: 'mon', text: '월: 「달팽이 우체부」 ✓' }, { id: 'tue', text: '화: 「구름 위 운동회」 책갈피' }, { id: 'wed', text: '수: 「구름 위 운동회」 ✓' }, { id: 'thu', text: '목: 「연 날리는 날」 ✓' }] }, target: { pick: ['mon', 'wed', 'thu'] }, difficulty: 0.2,
                  levels: { easy: { prompt: '민지의 기록장 세 줄이에요. 끝까지 읽은 책 줄을 모두 골라 보세요.', toolOptions: { cards: [{ id: 'mon', text: '월: 「달팽이 우체부」 ✓' }, { id: 'tue', text: '화: 「구름 위 운동회」 책갈피' }, { id: 'thu', text: '목: 「연 날리는 날」 ✓' }] }, target: { pick: ['mon', 'thu'] } } },
                  hints: ['줄마다 끝에 있는 표시를 봐요. 끝까지 읽었다는 표시는 무엇이었나요?', '고른 줄 가운데 책갈피 표시가 있는 줄이 있는지 다시 봐요.', '✓가 있는 줄만 남기고 책갈피 줄은 빼요.'] },
                { prompt: '준호의 한 주 기록장이에요. 처음 읽은 새 책 줄만 모두 골라 보세요.', toolOptions: { mode: 'pick', basket: '새로 읽은 책', cards: [{ id: 'd1', text: '월: 「아기 곰 잠옷」 처음 ✓' }, { id: 'd2', text: '화: 「아기 곰 잠옷」 또 ✓' }, { id: 'd3', text: '수: 「아기 곰 잠옷」 또 ✓' }, { id: 'd4', text: '목: 「개구리 합창단」 처음 ✓' }] }, target: { pick: ['d1', 'd4'] }, difficulty: 0.3,
                  conclude: '준호는 네 번 읽었지만 새 책은 두 권이에요. 같은 책만 되풀이하면 새 책을 만나지 못해요.' },
                { prompt: '더 해 보기: 하윤이의 기록장에서 끝까지 읽은 새 책 줄만 모두 골라 보세요.', extra: true, toolOptions: { mode: 'pick', basket: '끝까지 읽은 새 책', cards: [{ id: 'e1', text: '월: 「별 줍는 아이」 처음 ✓' }, { id: 'e2', text: '화: 「별 줍는 아이」 또 ✓' }, { id: 'e3', text: '수: 「바람 우체통」 처음 책갈피' }, { id: 'e4', text: '금: 「눈사람 가게」 처음 ✓' }] }, target: { pick: ['e1', 'e4'] }, difficulty: 0.35,
                  hints: ['두 가지를 모두 봐요. 처음 읽은 책인가요? 끝까지 읽었나요?', '고른 줄에 \'또\'나 책갈피가 있는지 다시 봐요.', '\'처음\'과 ✓가 함께 있는 줄만 남겨요.'] },
              ],
            },
            {
              id: 'a2', title: '활동 2. 다음 주 목표 고르기', minutes: 8, tool: 'emotion',
              teacher: '"다음 주 목표를 \'책 열 권\'이라고 정했어요. 그런데 쉬운 책만 고르면 어떻게 될까요?" 고르기 전에 짝과 먼저 말해 보게 한다. 목표는 \'어떤 책을 + 언제\' 읽을지 함께 정하는 것이라고 칠판에 쓴다.',
              task: '친구가 다음 주 목표를 정해요. 어떤 목표가 좋을지 골라 결과를 봐요.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '준호가 다음 주 목표를 정해요. 어떤 목표가 좋을까요?', toolOptions: { mode: 'branch', who: '준호', situation: '준호는 이번 주에 같은 쉬운 책을 세 번이나 읽었어요.', choices: [{ id: 'ten', text: '쉬운 책으로 열 권을 채워요', result: '숫자는 커져도 새 낱말은 거의 만나지 못해요', mood: '걱정', why: '책 수만 늘리면 읽는 힘이 자랄까요?' }, { id: 'new', text: '딱 맞는 새 책 두 권을 잠자기 전에 읽어요', result: '새 이야기와 새 낱말을 만나요', mood: '뿌듯함' }] }, target: { choice: 'new' }, difficulty: 0.2 },
                { prompt: '민지는 목표 시간을 정하지 않았어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '민지', situation: '민지는 "새 책 세 권 읽기"를 목표로 정했지만 언제 읽을지는 정하지 않았어요.', choices: [{ id: 'later', text: '시간은 그때그때 정해요', result: '바쁜 날이 이어져 한 권만 읽어요', mood: '속상함', why: '정한 때가 없으면 목표를 지킬 수 있을까요?' }, { id: 'time', text: '"저녁 먹고 10분"처럼 읽을 때를 정해요', result: '날마다 같은 때에 읽어 목표를 이뤄요', mood: '기쁨' }, { id: 'drop', text: '목표를 없애요', result: '다음 주에도 무엇을 읽을지 몰라요', mood: '걱정', why: '목표를 없애기보다 할 수 있는 일은 무엇일까요?' }] }, target: { choice: 'time' }, difficulty: 0.25,
                  levels: { easy: { toolOptions: { choices: [{ id: 'later', text: '시간은 그때그때 정해요', result: '바쁜 날이 이어져 한 권만 읽어요', mood: '속상함', why: '정한 때가 없으면 목표를 지킬 수 있을까요?' }, { id: 'time', text: '"저녁 먹고 10분"처럼 읽을 때를 정해요', result: '날마다 같은 때에 읽어 목표를 이뤄요', mood: '기쁨' }] } } },
                  conclude: '목표에는 어떤 책을 읽을지와 언제 읽을지를 함께 넣어요.' },
                { prompt: '서준이는 이번 주에 한 권만 읽어서 속상해요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '서준', situation: '서준이는 이번 주에 끝까지 읽은 책이 한 권뿐이라 속상해요.', choices: [{ id: 'hide', text: '기록장을 숨겨요', result: '다음 주도 무엇을 바꿀지 몰라요', mood: '슬픔', why: '숨기면 다음에 무엇을 바꿀지 알 수 있을까요?' }, { id: 'why', text: '왜 한 권이었는지 떠올리고 한 가지를 바꿔요', result: '"텔레비전 끄고 읽기"를 정해 다음 주에 두 권을 읽어요', mood: '뿌듯함' }] }, target: { choice: 'why' }, difficulty: 0.2 },
              ],
            },
            {
              id: 'a3', title: '활동 3. 내 기록장 세고 목표 쓰기', minutes: 10, tool: 'emotion',
              teacher: '내 기록장에서 ✓ 줄을 손가락으로 세어 활동지 \'이번 주\' 칸에 쓴다. 그다음 \'다음 주 목표\' 칸에 읽고 싶은 새 책 한 권과 읽을 때를 쓴다. 기록장을 가져오지 않은 학생은 학교에서 읽은 책만 센다. 목표를 다 쓴 뒤에만 화면 눈금을 고른다. 책 수가 적다고 부끄러워하지 않도록 "세어 보는 것 자체가 잘한 일"이라고 말해 준다.',
              task: '내 기록장의 ✓ 줄을 세어 쓰고, 다음 주에 읽을 새 책과 읽을 때를 정해 써요.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '내 기록장에서 ✓ 줄을 세어 활동지 \'이번 주\' 칸에 써 보세요.', free: true },
                { prompt: '\'다음 주 목표\' 칸에 읽고 싶은 새 책 한 권과 읽을 때를 쓰고, 짝에게 읽어 주세요.', free: true, talk: true },
                { prompt: '목표를 정하고 나니 다음 주에 읽을 마음이 얼마나 생겼나요? 솔직하게 골라요.', toolOptions: SELF('한 주 기록장을 세어 보고 다음 주 목표를 정했어요.', '설렘', '다음 주에 읽을 마음이 얼마나 생겼나요?'), target: { level: 'any' }, difficulty: 0.05, hints: SELF_HINTS },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"다음 주 목표에 새 책과 읽을 때를 둘 다 넣은 친구는 손을 들어 볼까요?" 두세 명의 목표를 듣는다. 출구 1번에서 \'또\' 줄을 새 책으로 고른 학생은 책 수를 세는 데만 마음을 둔 것이니 다음 시간에 처음 읽은 책과 다시 읽은 책을 함께 견준다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '새로 읽은 책', cards: [{ id: 'x1', text: '월: 「꽃밭 버스」 처음 ✓' }, { id: 'x2', text: '수: 「꽃밭 버스」 또 ✓' }, { id: 'x3', text: '금: 「숲속 빵집」 처음 ✓' }] }, prompt: '지우의 기록장에서 처음 읽은 새 책 줄만 모두 골라 보세요.', target: { pick: ['x1', 'x3'] }, difficulty: 0.25 },
            { type: 'choice', prompt: '다음 주 목표로 가장 알맞은 것은 무엇일까요?', options: ['쉬운 책으로 열 권 채우기', '새 책 두 권을 잠자기 전에 읽기', '목표 없이 지내기'], answer: 1, difficulty: 0.15, explain: '어떤 책을 언제 읽을지 정해야 목표를 지키고 읽는 힘도 자라요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '한 주 읽기 돌아보기',
        items: [
          { type: 'table', prompt: '이번 주에 끝까지 읽은 책을 세어 쓰세요.', columns: ['끝까지 읽은 책 (권)', '그중 새 책 (권)'], rows: 1 },
          { type: 'table', prompt: '다음 주 목표를 쓰세요.', columns: ['읽고 싶은 새 책', '읽을 때'], rows: 2 },
          { type: 'choice', prompt: '같은 쉬운 책만 되풀이해 읽으면 어떻게 될까요?', options: ['새 낱말을 많이 만나요', '새 낱말을 거의 만나지 못해요'], answer: '새 낱말을 거의 만나지 못해요' },
          { type: 'short', prompt: '이번 주에 읽기가 잘된 까닭이나 잘 안된 까닭을 한 가지 쓰세요.' },
        ],
        easy: {
          note: '✓가 있는 줄만 세어요.',
          items: [
            { type: 'table', prompt: '끝까지 읽은 책은 몇 권인가요?', columns: ['끝까지 읽은 책 (권)'], rows: 1 },
            { type: 'choice', prompt: '좋은 목표에 ○ 하세요.', options: ['새 책 두 권 읽기', '같은 책 열 번 읽기'], answer: '새 책 두 권 읽기' },
            { type: 'blank', prompt: '내가 책을 읽을 때를 쓰세요.', text: '나는 ______에 읽을 거예요.', answer: '(스스로 정한 때)' },
            { type: 'draw', prompt: '다음 주에 읽고 싶은 책의 표지를 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '기록장 고르기 첫 문항은 세 줄이고, 맞게 넣은 카드에 초록 테두리가 생겨요. 목표 시간 문항은 보기가 두 개예요.',
        base: '카드를 모두 고른 뒤 확인해요.',
        challenge: '더 해 보기(끝까지 읽은 새 책)까지 풀어요. 다음 주 목표에 읽고 싶은 갈래도 함께 써요.',
      },
      teacherNotes: '이 차시의 책 이름은 모두 이 단원을 위해 지어낸 것이다. 자주 보이는 어려움: ① 책 수만 늘리려고 쉬운 책만 되풀이해 고른다(이 주제의 대표 오개념) → 끝까지 읽은 책과 그중 새 책을 따로 세게 한다. ② 목표를 숫자로만 정하고 언제 읽을지 정하지 않는다 → \'읽을 때\' 칸을 비우지 않게 한다. ③ 책 수가 적은 학생이 속상해한다 → 까닭을 찾고 한 가지를 바꾸면 된다고 말한다. 같은 책을 다시 읽는 것도 좋은 읽기이니, 다시 읽기를 탓하지 말고 새 책도 함께 고르게 한다.',
    }),

    // ───────────────────────── 25. 연습: 읽기 어려움 말하고 도움 청하기 ─────────────────────────
    L(25, {
      title: '읽기가 어려웠던 까닭을 말하고 알맞게 도움 청하기',
      objective: '책을 읽다가 어려웠던 까닭을 말하고, 그 어려움에 맞는 사람과 말로 도움을 청할 수 있다.',
      standards: READ,
      illustration: ART('a child raising a hand in the school library while holding a book, a friendly librarian walking over with a smile', [
        { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 110, y: 50 }, { motif: 'hills', y: 208 },
        { motif: 'house', x: 120, y: 216 }, { motif: 'tree', x: 384, y: 216 }, { motif: 'leaf', x: 250, y: 230 },
        { motif: 'text', x: 240, y: 140, text: '도와주세요!', size: 28 },
      ]),
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '"지난주 책을 읽다가 어려웠던 적이 있나요?" 학생들의 대답(모르는 글자, 긴 글, 시끄러움, 책을 못 찾음)을 칠판에 모은다. "어려울 때 그냥 덮어 버리면 어떻게 될까요?" 대답을 들은 뒤 "어려운 까닭을 말하면 도와줄 수 있는 사람이 있어요"라고 말한다. 시연 단추로 \'모르는 글자가 많아요\'에 \'이 글자 어떻게 읽어요?\'가 이어지는 모습을 보여 준다.',
          student: '책 읽기가 어려웠던 적이 있나요? 왜 어려웠나요?',
          demo: { tool: 'mindmap', options: { mode: 'match', topic: '도움 청하기', shuffle: false, slots: [{ id: 'word', label: '모르는 글자가 많아요' }], cards: [{ id: 'ask', text: '"이 글자 어떻게 읽어요?"' }, { id: 'close', text: '책을 덮어요' }] }, sequence: [{ match: { word: 'ask' } }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 어려움에 맞는 도움 말 잇기', minutes: 9, tool: 'mindmap',
              teacher: '"이 친구는 무엇이 어려웠나요? 그러면 어떻게 말해서 도움을 청할까요?" 칸마다 어려움을 먼저 소리 내어 읽는다. 시끄러운 곳 칸에 \'이 글자 어떻게 읽어요?\'를 이은 학생에게 "글자를 알면 시끄러운 것이 해결될까요?"라고 묻는다.',
              task: '읽기가 어려운 까닭에 맞는 도움을 청하는 말이나 사람을 이어요.',
              levels: { easy: HELP, base: {}, challenge: {} },
              items: [
                { prompt: '어려운 까닭에 맞는 도움 말을 이어 보세요.', toolOptions: { mode: 'match', topic: '도움 청하기', slots: [{ id: 'word', label: '모르는 글자가 많아요' }, { id: 'noise', label: '둘레가 시끄러워요' }], cards: [{ id: 'ask', text: '"이 글자 어떻게 읽어요?"' }, { id: 'seat', text: '"조용한 자리로 옮겨도 돼요?"' }, { id: 'close', text: '책을 덮고 놀아요' }] }, target: { match: { word: 'ask', noise: 'seat' } }, difficulty: 0.15 },
                { prompt: '세 친구의 어려움에 맞는 도움 말을 이어 보세요.', toolOptions: { mode: 'match', topic: '도움 청하기', slots: [{ id: 'long', label: '글이 너무 길어서 힘들어요' }, { id: 'find', label: '읽고 싶은 책을 못 찾겠어요' }, { id: 'mean', label: '낱말 뜻을 모르겠어요' }], cards: [{ id: 'split', text: '"나누어 읽어도 돼요?"' }, { id: 'where', text: '"공룡 책은 어디 있어요?"' }, { id: 'what', text: '"\'굴\'이 무슨 뜻이에요?"' }] }, target: { match: { long: 'split', find: 'where', mean: 'what' } }, difficulty: 0.25,
                  levels: { easy: { prompt: '두 친구의 어려움에 맞는 도움 말을 이어 보세요.', toolOptions: { slots: [{ id: 'long', label: '글이 너무 길어서 힘들어요' }, { id: 'find', label: '읽고 싶은 책을 못 찾겠어요' }], cards: [{ id: 'split', text: '"나누어 읽어도 돼요?"' }, { id: 'where', text: '"공룡 책은 어디 있어요?"' }] }, target: { match: { long: 'split', find: 'where' } } } },
                  hints: ['칸마다 무엇이 어려운지 한 낱말로 말해 보고, 그 어려움을 풀어 줄 물음을 찾아요.', '이은 말이 그 칸의 어려움을 정말 풀어 주는지 하나씩 다시 읽어 봐요.', '긴 글은 나누어 읽기, 책 찾기는 책이 있는 곳 묻기, 낱말 뜻은 뜻 묻기를 이어요.'] },
                { prompt: '어려움에 맞게 도움을 청할 사람을 이어 보세요.', toolOptions: { mode: 'match', topic: '누구에게 청할까?', slots: [{ id: 'lib', label: '학교 도서관에서 책을 못 찾아요' }, { id: 'home', label: '잠자기 전 책에 모르는 글자가 나와요' }], cards: [{ id: 'librarian', text: '도서관 사서 선생님' }, { id: 'family', text: '함께 사는 가족' }, { id: 'nobody', text: '아무에게도 안 물어요' }] }, target: { match: { lib: 'librarian', home: 'family' } }, difficulty: 0.2 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 도움을 청할까, 덮을까', minutes: 8, tool: 'emotion',
              teacher: '"모르는 글자가 나와서 부끄러워 묻지 못한 적이 있나요?" 교사가 먼저 "선생님도 모르는 낱말이 나오면 사전을 찾거나 물어봐요"라고 말해 준다. 건너뛰기를 고른 학생에게 "건너뛴 글자에 중요한 말이 있었다면 어떻게 될까요?"라고 묻는다.',
              task: '읽다가 어려운 일이 생겼을 때 어떻게 할지 골라 결과를 봐요.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '모르는 글자가 나왔는데 묻기가 부끄러워요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '나', situation: '책을 읽는데 모르는 글자가 나왔어요. 묻기가 조금 부끄러워요.', choices: [{ id: 'skip', text: '몰래 건너뛰어요', result: '이야기 중요한 곳을 놓쳐 끝이 이해되지 않아요', mood: '걱정', why: '건너뛴 글자에 중요한 말이 있었다면 어떻게 될까요?' }, { id: 'ask', text: '손을 들고 "이 글자 어떻게 읽어요?" 해요', result: '글자를 알게 되어 이야기를 끝까지 읽어요', mood: '뿌듯함' }] }, target: { choice: 'ask' }, difficulty: 0.1 },
                { prompt: '선생님이 다른 친구를 도와주고 계세요. 나도 도움이 필요해요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '나', situation: '선생님이 다른 친구를 도와주고 계시는데 나도 모르는 낱말이 나왔어요.', choices: [{ id: 'pull', text: '선생님 옷을 잡아당겨요', result: '친구를 돕던 선생님 말씀이 끊겨요', mood: '속상함', why: '지금은 누구 차례일까요?' }, { id: 'wait', text: '손을 들고 기다리거나 짝에게 먼저 물어요', result: '짝이 알려 주거나 곧 선생님이 오셔서 알려 주세요', mood: '편안함' }, { id: 'give', text: '책을 덮고 엎드려요', result: '읽던 책을 끝내지 못해요', mood: '슬픔', why: '덮지 않고 할 수 있는 일은 무엇일까요?' }] }, target: { choice: 'wait' }, difficulty: 0.25,
                  levels: { easy: { toolOptions: { choices: [{ id: 'pull', text: '선생님 옷을 잡아당겨요', result: '친구를 돕던 선생님 말씀이 끊겨요', mood: '속상함', why: '지금은 누구 차례일까요?' }, { id: 'wait', text: '손을 들고 기다리거나 짝에게 먼저 물어요', result: '짝이 알려 주거나 곧 선생님이 오셔서 알려 주세요', mood: '편안함' }] } } },
                  conclude: '도움을 청할 때도 말차례를 지켜요. 기다리는 동안 짝에게 먼저 물어볼 수 있어요.' },
                { prompt: '짝이 "이 글자 어떻게 읽어?" 하고 물어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '나', situation: '짝이 책에서 모르는 글자를 가리키며 "이 글자 어떻게 읽어?" 하고 물어요.', choices: [{ id: 'mock', text: '"그것도 몰라?" 해요', result: '짝이 다시는 묻지 않으려 해요', mood: '슬픔', why: '"그것도 몰라?"를 들은 짝은 어떤 마음일까요?' }, { id: 'help', text: '함께 짚으며 소리 내어 읽어 줘요', result: '짝이 고맙다고 하고 끝까지 읽어요', mood: '고마움' }] }, target: { choice: 'help' }, difficulty: 0.15 },
              ],
            },
            {
              id: 'a3', title: '활동 3. 내 어려움 말하고 도움 청해 보기', minutes: 9, tool: 'mindmap',
              teacher: '짝끼리 "나는 책을 읽을 때 ___이 어려워." 하고 말하고, 짝이 "그럴 때는 ___ 하고 물어봐." 하고 도움 말을 알려 준다. 그다음 짝과 그림책을 함께 읽으며 실제로 모르는 글자에서 멈추고 도움을 청해 본다. 교사는 돌아다니며 묻는 말을 듣는다.',
              task: '짝에게 내 읽기 어려움을 말하고, 함께 책을 읽으며 실제로 도움을 청해 봐요.',
              levels: { easy: HELP, base: {}, challenge: {} },
              items: [
                { prompt: '짝에게 "나는 책을 읽을 때 ___이 어려워." 하고 말하고, 짝이 알려 주는 도움 말을 들어 보세요.', free: true, talk: true },
                { prompt: '짝과 그림책을 함께 읽다가 모르는 글자에서 멈추고 도움을 청해 보세요.', free: true, talk: true },
                { prompt: '도움을 청할 때 알맞은 모습을 모두 골라 보세요.', toolOptions: { mode: 'pick', basket: '알맞게 청해요', cards: [{ id: 'point', text: '모르는 글자를 손가락으로 짚어요' }, { id: 'say', text: '무엇이 어려운지 말해요' }, { id: 'cry', text: '말없이 울기만 해요' }, { id: 'throw', text: '책을 던져요' }] }, target: { pick: ['point', 'say'] }, difficulty: 0.15,
                  levels: { challenge: { prompt: '도움을 청할 때 알맞은 모습을 모두 골라 보세요. 헷갈리는 카드가 더 있어요.', toolOptions: { cards: [{ id: 'point', text: '모르는 글자를 손가락으로 짚어요' }, { id: 'say', text: '무엇이 어려운지 말해요' }, { id: 'thanks', text: '도움을 받고 "고마워." 해요' }, { id: 'cry', text: '말없이 울기만 해요' }, { id: 'throw', text: '책을 던져요' }, { id: 'pull', text: '선생님 옷을 잡아당겨요' }] }, target: { pick: ['point', 'say', 'thanks'] } } } },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"오늘 짝에게 도움을 청해 보니 어땠나요?" 두세 명의 대답을 듣고, 도움을 준 짝을 칭찬한다. 출구 1번에서 어려움과 맞지 않는 말을 이은 학생은 까닭을 먼저 말하는 연습이 더 필요하니 다음 읽기 시간에 "무엇이 어려워?"를 교사가 먼저 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '도움 청하기', slots: [{ id: 'tired', label: '글이 길어서 눈이 아파요' }], cards: [{ id: 'rest', text: '"쉬었다가 나누어 읽어도 돼요?"' }, { id: 'where', text: '"이 책은 어디 있어요?"' }] }, prompt: '어려운 까닭에 맞는 도움 말을 이어 보세요.', target: { match: { tired: 'rest' } }, difficulty: 0.2 },
            { type: 'choice', prompt: '읽다가 모르는 글자가 나오면 어떻게 할까요?', options: ['몰래 건너뛰어요', '짚으며 "어떻게 읽어요?" 하고 물어요', '책을 덮어요'], answer: 1, difficulty: 0.1, explain: '모르는 글자를 짚고 물어보면 이야기를 끝까지 읽을 수 있어요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '도움을 청해요',
        items: [
          { type: 'table', prompt: '어려운 까닭에 맞는 도움 말을 쓰세요.', columns: ['어려운 까닭', '도움 말'], cells: [['모르는 글자가 많아요', ''], ['둘레가 시끄러워요', ''], ['책을 못 찾겠어요', '']] },
          { type: 'choice', prompt: '집에서 모르는 글자가 나왔을 때 도움을 청할 사람에 ○ 하세요.', options: ['함께 사는 가족', '텔레비전', '아무도 없어요'], answer: '함께 사는 가족' },
          { type: 'blank', prompt: '내 읽기 어려움을 쓰세요.', text: '나는 책을 읽을 때 ______이 어려워요.', answer: '(스스로 찾은 어려움)' },
          { type: 'short', prompt: '오늘 짝에게 청한 도움 말을 쓰세요.' },
        ],
        easy: {
          note: '무엇이 어려운지 먼저 말해요.',
          items: [
            { type: 'choice', prompt: '모르는 글자가 나오면 할 말에 ○ 하세요.', options: ['"이 글자 어떻게 읽어요?"', '"몰라!"'], answer: '"이 글자 어떻게 읽어요?"' },
            { type: 'choice', prompt: '도서관에서 책을 못 찾으면 누구에게 물을까요?', options: ['도서관 사서 선생님', '아무도 안 물어요'], answer: '도서관 사서 선생님' },
            { type: 'short', prompt: '내가 읽을 때 어려운 것 하나를 쓰세요.' },
            { type: 'draw', prompt: '도움을 청하는 내 모습을 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '도움 말 잇기 둘째 문항은 두 칸이고, 맞게 이은 카드에 초록 테두리가 생겨요. 선생님이 바쁘실 때 문항은 보기가 두 개예요.',
        base: '카드를 모두 이은 뒤 확인해요.',
        challenge: '도움 청하는 모습 고르기에 헷갈리는 카드가 더 나와요. 짝 활동에서 어려움 두 가지를 말해요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 어려우면 말없이 책을 덮거나 그림만 넘긴다 → 까닭을 말하면 도와줄 수 있다고 알려 준다. ② 모르는 것을 부끄러워해 묻지 않는다 → 교사가 먼저 모르는 낱말을 묻는 모습을 보여 준다. ③ 도움을 청할 때 말차례를 지키지 않는다(앞의 듣기·말하기 차시와 이어짐) → 손 들고 기다리거나 짝에게 먼저 묻게 한다. 24차시의 오개념(쉬운 책만 되풀이)은 어려움을 피하려는 마음에서 오기도 하니, 도움을 청하면 딱 맞는 책도 읽을 수 있다고 이어 준다.',
    }),

    // ───────────────────────── 26. 확장: 읽기 나무로 한 달 돌아보기 ─────────────────────────
    L(26, {
      title: '읽기 나무 잎을 갈래별로 세어 보고 골고루 읽을 계획 세우기',
      objective: '한 달 동안 읽은 책을 갈래별로 나누어 세고, 적게 읽은 갈래의 책을 넣어 다음 읽기 계획을 세울 수 있다.',
      standards: READ,
      illustration: ART('a big paper reading tree on a classroom wall with leaves in three colors, children adding new paper leaves', [
        { motif: 'sun', x: 404, y: 56, s: 0.8 }, { motif: 'cloud', x: 110, y: 52 }, { motif: 'hills', y: 208 },
        { motif: 'tree', x: 240, y: 214, s: 1.3 }, { motif: 'leaf', x: 120, y: 226 }, { motif: 'leaf', x: 380, y: 226, color: 'peach' },
        { motif: 'text', x: 240, y: 70, text: '우리 반 읽기 나무', size: 24 },
      ]),
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '교실 벽에 큰 종이 나무를 붙이고, 이야기책은 초록 잎, 동시집은 노란 잎, 알려 주는 책은 분홍 잎으로 정한다(17차시 갈래). "한 달 동안 읽은 책을 잎으로 붙이면 우리 나무는 어떤 색이 많을까요?" 시연 단추로 이야기책 잎 하나가 이야기책 가지에 붙는 모습을 보여 준다. "한 갈래만 많으면 나무가 한쪽으로 기울어요. 오늘은 내 나무를 살펴봐요."',
          student: '내가 읽은 책은 어떤 갈래가 많을까요?',
          demo: { tool: 'mindmap', options: { topic: '나의 읽기 나무', shuffle: false, slots: [{ id: 'story', label: '이야기책' }, { id: 'poem', label: '동시집' }, { id: 'fact', label: '알려 주는 책' }], cards: [{ id: 'l1', text: '「달팽이 우체부」 (이야기)' }] }, sequence: [{ sort: { story: ['l1'] } }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 읽은 책 잎을 갈래 가지에 붙이기', minutes: 8, tool: 'mindmap',
              teacher: '"잎에 적힌 책 소개를 읽고 어느 가지에 붙일지 정해요." 책 이름만 보고 정하지 말고 소개를 읽게 한다. 다 붙인 뒤 "가장 적은 가지는 어디인가요?"를 묻는다. 셋째 문항에서 \'개구리\'라는 이름만 보고 이야기책에 붙인 학생에게 "이 책은 개구리가 일을 겪나요, 개구리를 알려 주나요?"라고 묻는다.',
              task: '친구가 한 달 동안 읽은 책 잎을 소개를 읽고 갈래 가지에 붙여요.',
              levels: { easy: HELP, base: {}, challenge: {} },
              items: [
                { prompt: '하윤이가 읽은 책 잎을 갈래 가지에 붙여 보세요.', toolOptions: { topic: '하윤이의 읽기 나무', slots: [{ id: 'story', label: '이야기책' }, { id: 'poem', label: '동시집' }, { id: 'fact', label: '알려 주는 책' }], cards: [{ id: 'h1', text: '토끼가 달나라에 소풍 가는 책' }, { id: 'h2', text: '고양이가 친구 생일잔치에 가는 책' }, { id: 'h3', text: '꿀벌이 꿀을 모으는 방법을 알려 주는 책' }, { id: 'h4', text: '짧은 줄로 눈 오는 날을 노래한 책' }] }, target: { sort: { story: ['h1', 'h2'], fact: ['h3'], poem: ['h4'] } }, difficulty: 0.2,
                  levels: { easy: { prompt: '하윤이가 읽은 책 잎 세 장을 갈래 가지에 붙여 보세요.', toolOptions: { cards: [{ id: 'h1', text: '토끼가 달나라에 소풍 가는 책' }, { id: 'h3', text: '꿀벌이 꿀을 모으는 방법을 알려 주는 책' }, { id: 'h4', text: '짧은 줄로 눈 오는 날을 노래한 책' }] }, target: { sort: { story: ['h1'], fact: ['h3'], poem: ['h4'] } } } } },
                { prompt: '서준이가 읽은 책 잎을 갈래 가지에 붙여 보세요.', toolOptions: { topic: '서준이의 읽기 나무', slots: [{ id: 'story', label: '이야기책' }, { id: 'poem', label: '동시집' }, { id: 'fact', label: '알려 주는 책' }], cards: [{ id: 's1', text: '기차가 어떻게 달리는지 알려 주는 책' }, { id: 's2', text: '화산이 왜 터지는지 알려 주는 책' }, { id: 's3', text: '별자리 이름을 알려 주는 책' }, { id: 's4', text: '꼬마 용이 불을 못 뿜어 고민하는 책' }] }, target: { sort: { fact: ['s1', 's2', 's3'], story: ['s4'] } }, difficulty: 0.25,
                  conclude: '서준이 나무는 알려 주는 책 가지가 많고 동시집 가지가 비어 있어요.' },
                { prompt: '이름이 비슷해도 소개를 읽고 갈래 가지에 붙여 보세요.', toolOptions: { topic: '헷갈리는 잎', slots: [{ id: 'story', label: '이야기책' }, { id: 'poem', label: '동시집' }, { id: 'fact', label: '알려 주는 책' }], cards: [{ id: 'f1', text: '「개구리 일기」: 올챙이가 개구리가 되는 차례를 알려 줘요' }, { id: 'f2', text: '「개구리 왕자님」: 개구리가 마법에 걸려 모험을 해요' }, { id: 'f3', text: '「개구리 노래」: "개굴개굴 / 비가 와요"처럼 짧은 줄로 써요' }] }, target: { sort: { fact: ['f1'], story: ['f2'], poem: ['f3'] } }, difficulty: 0.3,
                  hints: ['책 이름보다 뒤에 붙은 소개를 읽어요. 사실을 알려 주나요, 인물이 일을 겪나요, 짧은 줄로 노래하나요?', '붙인 잎의 소개를 다시 읽고, 이름 때문에 정하지 않았는지 살펴봐요.', '차례를 알려 주는 책은 알려 주는 책, 모험하는 책은 이야기책, 짧은 줄로 쓴 책은 동시집이에요.'] },
              ],
            },
            {
              id: 'a2', title: '활동 2. 골고루 읽을 계획 고르기', minutes: 7, tool: 'emotion',
              teacher: '"서준이 나무는 동시집 가지가 비어 있어요. 다음 계획을 어떻게 세우면 좋을까요?" 좋아하는 갈래를 그만 읽으라는 것이 아니라 비어 있는 가지에 한 권을 더하는 것이라고 짚는다.',
              task: '친구의 읽기 나무를 보고 다음 읽기 계획을 어떻게 세울지 골라 결과를 봐요.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '서준이 나무는 알려 주는 책만 가득하고 동시집 가지가 비었어요. 어떤 계획이 좋을까요?', toolOptions: { mode: 'branch', who: '서준', situation: '서준이 읽기 나무는 알려 주는 책 잎만 가득하고 동시집 가지는 비어 있어요.', choices: [{ id: 'same', text: '알려 주는 책만 계속 읽어요', result: '나무가 한쪽으로만 자라요', mood: '걱정', why: '비어 있는 가지는 어떻게 될까요?' }, { id: 'add', text: '좋아하는 책은 읽고, 동시집도 한 권 더해요', result: '빈 가지에 잎이 나고 새 재미를 찾아요', mood: '기쁨' }, { id: 'stop', text: '좋아하는 책을 그만 읽어요', result: '읽기가 재미없어져요', mood: '슬픔', why: '좋아하는 갈래를 그만둘 필요가 있을까요?' }] }, target: { choice: 'add' }, difficulty: 0.2,
                  levels: { easy: { toolOptions: { choices: [{ id: 'same', text: '알려 주는 책만 계속 읽어요', result: '나무가 한쪽으로만 자라요', mood: '걱정', why: '비어 있는 가지는 어떻게 될까요?' }, { id: 'add', text: '좋아하는 책은 읽고, 동시집도 한 권 더해요', result: '빈 가지에 잎이 나고 새 재미를 찾아요', mood: '기쁨' }] } } } },
                { prompt: '민지는 잎을 많이 붙이려고 아주 얇은 책만 고르려 해요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '민지', situation: '민지는 친구보다 잎을 더 많이 붙이고 싶어서 얇은 책만 고르려 해요.', choices: [{ id: 'thin', text: '얇은 책으로 잎을 많이 붙여요', result: '잎은 많아도 새 낱말을 거의 만나지 못해요', mood: '걱정', why: '잎 수만 늘리면 읽는 힘이 자랄까요?' }, { id: 'fit', text: '손가락을 세어 딱 맞는 책을 골라요', result: '잎은 천천히 늘어도 읽는 힘이 자라요', mood: '뿌듯함' }] }, target: { choice: 'fit' }, difficulty: 0.2,
                  conclude: '읽기 나무는 잎 수를 겨루는 것이 아니에요. 딱 맞는 책을 골고루 읽어요.' },
                { prompt: '짝의 읽기 나무에 빈 가지가 있어요. 어떻게 말해 줄까요?', toolOptions: { mode: 'branch', who: '나', situation: '짝의 읽기 나무에 동시집 가지가 비어 있어요.', choices: [{ id: 'tease', text: '"너는 동시집을 하나도 안 읽었네!" 하고 놀려요', result: '짝이 부끄러워 나무를 가려요', mood: '속상함', why: '놀림을 들은 짝은 어떤 마음일까요?' }, { id: 'recommend', text: '"내가 읽은 동시집 재밌었어. 읽어 볼래?" 해요', result: '짝이 동시집을 빌려 가 빈 가지에 잎을 붙여요', mood: '고마움' }] }, target: { choice: 'recommend' }, difficulty: 0.15 },
              ],
            },
            {
              id: 'a3', title: '활동 3. 내 읽기 나무 만들고 계획 쓰기', minutes: 11, tool: 'emotion',
              teacher: '활동지의 나무 칸에 한 달 동안 끝까지 읽은 책을 갈래별 색연필로 잎을 그려 넣는다(5분). 가장 적은 가지를 찾아 \'다음에 읽을 책\' 칸에 그 갈래의 책 한 권을 쓴다. 학급 문고에서 그 갈래 책을 한 권 찾아 표지를 보여 주며 짝에게 계획을 말한다. 계획을 다 쓴 뒤에만 화면 눈금을 고른다.',
              task: '활동지 나무에 읽은 책 잎을 갈래별로 그리고, 가장 적은 가지에 넣을 책 한 권을 정해 짝에게 말해요.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '활동지 나무에 한 달 동안 끝까지 읽은 책을 갈래별 색으로 잎을 그려 넣어 보세요.', free: true },
                { prompt: '가장 적은 가지에 넣을 책 한 권을 학급 문고에서 찾아 짝에게 계획을 말해 보세요.', free: true, talk: true },
                { prompt: '내 읽기 나무를 보니 골고루 읽어 볼 마음이 얼마나 생겼나요? 솔직하게 골라요.', toolOptions: SELF('한 달 동안 읽은 책으로 내 읽기 나무를 만들었어요.', '설렘', '골고루 읽어 볼 마음이 얼마나 생겼나요?'), target: { level: 'any' }, difficulty: 0.05, hints: SELF_HINTS },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"우리 반 읽기 나무에서 가장 적은 가지는 어디일까요?" 반 나무에 오늘 정한 다음 책을 연필로 적은 빈 잎을 붙인다. 다 읽으면 색을 칠한다고 약속한다. 출구 1번에서 책 이름만 보고 붙인 학생에게는 소개를 먼저 읽는 습관을 다음 시간에 다시 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { topic: '헷갈리는 잎', slots: [{ id: 'story', label: '이야기책' }, { id: 'poem', label: '동시집' }, { id: 'fact', label: '알려 주는 책' }], cards: [{ id: 'm1', text: '「달님 일기」: 달 모양이 바뀌는 까닭을 알려 줘요' }, { id: 'm2', text: '「달님 소풍」: 달님이 아이들과 숲에 놀러 가요' }] }, prompt: '소개를 읽고 두 잎을 갈래 가지에 붙여 보세요.', target: { sort: { fact: ['m1'], story: ['m2'] } }, difficulty: 0.25 },
            { type: 'choice', prompt: '내 읽기 나무에 동시집 가지가 비어 있어요. 어떻게 할까요?', options: ['좋아하는 책을 그만 읽어요', '동시집도 한 권 더해 읽어요', '얇은 책만 골라 잎을 늘려요'], answer: 1, difficulty: 0.15, explain: '좋아하는 갈래는 계속 읽고, 비어 있는 가지에 한 권을 더하면 골고루 읽을 수 있어요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '나의 읽기 나무',
        items: [
          { type: 'table', prompt: '한 달 동안 끝까지 읽은 책을 갈래별로 세어 쓰세요.', columns: ['이야기책 (권)', '동시집 (권)', '알려 주는 책 (권)'], rows: 1 },
          { type: 'draw', prompt: '나무를 그리고, 읽은 책마다 갈래별 색으로 잎을 그려 넣으세요. (초록 = 이야기책, 노랑 = 동시집, 분홍 = 알려 주는 책)' },
          { type: 'choice', prompt: '"올챙이가 개구리가 되는 차례를 알려 줘요"는 어느 가지에 붙일까요?', options: ['이야기책', '동시집', '알려 주는 책'], answer: '알려 주는 책' },
          { type: 'blank', prompt: '가장 적은 가지에 넣을 책을 쓰세요.', text: '다음에는 ______ 갈래의 「______」을 읽을 거예요.', answer: '(스스로 정한 갈래와 책)' },
        ],
        easy: {
          note: '책 이름보다 소개를 먼저 읽어요.',
          items: [
            { type: 'choice', prompt: '"꿀벌이 꿀을 모으는 방법을 알려 줘요"는 어떤 책일까요?', options: ['알려 주는 책', '이야기책'], answer: '알려 주는 책' },
            { type: 'choice', prompt: '빈 가지가 있을 때 알맞은 계획에 ○ 하세요.', options: ['그 갈래 책도 한 권 읽기', '좋아하는 책 그만 읽기'], answer: '그 갈래 책도 한 권 읽기' },
            { type: 'draw', prompt: '내가 읽은 책으로 잎이 달린 나무를 그려 보세요.' },
            { type: 'short', prompt: '다음에 읽을 책 이름을 쓰세요.' },
          ],
        },
      },
      differentiation: {
        easy: '잎 붙이기 첫 문항은 잎이 세 장이고, 맞게 넣은 카드에 초록 테두리가 생겨요. 서준이 계획 문항은 보기가 두 개예요.',
        base: '잎을 모두 붙인 뒤 확인해요.',
        challenge: '헷갈리는 잎 문항(이름이 비슷한 세 책)을 소개만 보고 붙여요. 활동지에서 가장 적은 가지에 두 권을 계획해요.',
      },
      teacherNotes: '이 차시의 책 이름은 모두 이 단원을 위해 지어낸 것이다. 자주 보이는 어려움: ① 잎 수를 늘리려고 얇은 책·쉬운 책만 고른다(24차시 오개념이 다시 나옴) → 나무는 겨루기가 아니라고 말하고 반 나무에 이름을 쓰지 않는다. ② 책 이름의 동물만 보고 갈래를 정한다 → 소개를 읽게 한다. ③ 좋아하는 갈래를 그만 읽어야 하는 줄 안다 → 좋아하는 것은 계속 읽고 빈 가지에 한 권을 더하는 것이라고 짚는다. 반 읽기 나무는 단원이 끝난 뒤에도 교실에 두고 계속 잎을 붙인다.',
    }),

    // ───────────────────────── 27. 자음자와 모음자 가르고 이름 붙이기 ─────────────────────────
    L(27, {
      title: '자음자와 모음자를 가르고 ㄱ~ㄹ의 이름 붙이기',
      objective: '자모 카드를 자음자와 모음자로 나누고, ㄱ·ㄴ·ㄷ·ㄹ의 이름을 붙이며 이름과 소리를 구분해 말할 수 있다.',
      standards: JAMO,
      illustration: ART('two paper baskets on a desk, one filled with consonant letter cards and the other with vowel letter cards, a child holding up one card', [
        { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 110, y: 50 }, { motif: 'hills', y: 208 },
        { motif: 'house', x: 110, y: 216 }, { motif: 'tree', x: 384, y: 216 }, { motif: 'flower', x: 250, y: 230 },
        { motif: 'text', x: 240, y: 140, text: '자음자   모음자', size: 26 },
      ]),
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '1~3차시에 몸으로 만든 자모를 떠올리게 한다. "\'나무\'를 쪼개면 ㄴ, ㅏ, ㅁ, ㅜ가 나와요. 이 조각들은 두 무리로 나눌 수 있어요." 칠판에 \'자음자\'와 \'모음자\'를 쓰고, 시연 단추로 ㄱ이 자음자 칸에 들어가는 모습을 보여 준다. "자음자에는 저마다 이름이 있어요. ㄱ의 이름은 \'기역\'이에요. 그런데 \'가\'를 읽을 때 [기역아]라고 읽나요?" 이름과 소리가 다르다는 것을 처음 짚는다.',
          student: '자모 카드를 두 무리로 나누어 볼까요?',
          demo: { tool: 'mindmap', options: { topic: '자모 나누기', shuffle: false, slots: [{ id: 'con', label: '자음자' }, { id: 'vow', label: '모음자' }], cards: [J('ㄱ', 'g')] }, sequence: [{ sort: { con: ['g'] } }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 자음자와 모음자로 나누기', minutes: 9, tool: 'mindmap',
              teacher: '"모음자는 긴 줄에 짧은 획이 붙거나, 긴 줄 하나로 된 모양이에요. ㅇ은 동그라미예요. ㅇ은 자음자일까요, 모음자일까요?" ㅇ을 모음자에 넣은 학생에게 "\'아\'에서 ㅇ은 어느 자리에 있었나요? 모음자가 붙는 앞자리였지요"라고 짚는다. "ㅡ와 ㅣ는 줄 하나뿐인데 모음자예요. 손가락으로 공중에 그려 볼까요?"',
              task: '자모 카드를 자음자와 모음자로 나누어 넣어요.',
              levels: { easy: HELP, base: {}, challenge: {} },
              items: [
                { prompt: '자모 카드를 자음자와 모음자로 나누어 보세요.', toolOptions: { topic: '자모 나누기', slots: [{ id: 'con', label: '자음자' }, { id: 'vow', label: '모음자' }], cards: [J('ㄱ', 'g'), J('ㅏ', 'a'), J('ㄴ', 'n'), J('ㅗ', 'o')] }, target: { sort: { con: ['g', 'n'], vow: ['a', 'o'] } }, difficulty: 0.1 },
                { prompt: '이번 카드도 자음자와 모음자로 나누어 보세요.', toolOptions: { topic: '자모 나누기', slots: [{ id: 'con', label: '자음자' }, { id: 'vow', label: '모음자' }], cards: [J('ㅇ', 'ng'), J('ㅡ', 'eu'), J('ㅁ', 'm'), J('ㅣ', 'i'), J('ㅅ', 's'), J('ㅜ', 'u')] }, target: { sort: { con: ['ng', 'm', 's'], vow: ['eu', 'i', 'u'] } }, difficulty: 0.25,
                  levels: { easy: { prompt: '네 카드를 자음자와 모음자로 나누어 보세요.', toolOptions: { cards: [J('ㅇ', 'ng'), J('ㅡ', 'eu'), J('ㅁ', 'm'), J('ㅣ', 'i')] }, target: { sort: { con: ['ng', 'm'], vow: ['eu', 'i'] } } } },
                  hints: ['카드마다 \'아\'처럼 글자를 만들 때 앞자리에 오는지, 앞자리 옆이나 아래에 붙는지 떠올려 봐요.', '동그라미나 긴 줄 하나짜리 카드를 어디에 넣었는지 다시 봐요.', '동그라미와 네모, 지붕 모양은 앞자리에 오는 자음자예요. 줄 하나나 짧은 획이 붙은 줄은 모음자예요.'],
                  conclude: 'ㅇ은 동그라미지만 자음자예요. ㅡ와 ㅣ는 줄 하나지만 모음자예요.' },
                { prompt: '더 해 보기: 자음자와 모음자로 나누어 보세요. 처음 보는 카드도 있어요.', extra: true, toolOptions: { topic: '자모 나누기', slots: [{ id: 'con', label: '자음자' }, { id: 'vow', label: '모음자' }], cards: [J('ㅋ', 'k'), J('ㅑ', 'ya'), J('ㅌ', 't'), J('ㅠ', 'yu'), J('ㅎ', 'h')] }, target: { sort: { con: ['k', 't', 'h'], vow: ['ya', 'yu'] } }, difficulty: 0.3 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 자음자에 이름 붙이기', minutes: 9, tool: 'mindmap',
              teacher: '"ㄱ은 기역, ㄴ은 니은, ㄷ은 디귿, ㄹ은 리을이에요." 이름을 또박또박 함께 세 번 말한다. 이름 첫 글자를 보면 그 자음자가 들어 있다는 것을 짚는다(기역의 \'기\'에 ㄱ). 디귿과 리을을 바꾼 학생에게 "\'디\'에는 어떤 자음자가 들어 있나요?"라고 묻는다.',
              task: '자음자 카드를 그 이름 칸에 이어요.',
              levels: { easy: HELP, base: {}, challenge: {} },
              items: [
                { prompt: '자음자의 이름에 알맞은 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '자음자 이름', slots: [{ id: 'giyeok', label: '기역' }, { id: 'nieun', label: '니은' }], cards: [J('ㄱ', 'g'), J('ㄴ', 'n'), J('ㄷ', 'd')] }, target: { match: { giyeok: 'g', nieun: 'n' } }, difficulty: 0.1 },
                { prompt: '이번 이름에도 알맞은 자음자를 이어 보세요.', toolOptions: { mode: 'match', topic: '자음자 이름', slots: [{ id: 'digeut', label: '디귿' }, { id: 'rieul', label: '리을' }], cards: [J('ㄷ', 'd'), J('ㄹ', 'r'), J('ㄴ', 'n')] }, target: { match: { digeut: 'd', rieul: 'r' } }, difficulty: 0.2,
                  hints: ['이름의 첫 글자를 소리 내어 읽고, 그 글자의 앞자리에 있는 자음자를 찾아봐요.', '이은 카드가 이름 첫 글자 앞자리의 자음자와 같은지 다시 봐요.', '이름 첫 글자를 자음자와 모음자로 쪼개 보면, 앞에 나온 자음자가 바로 그 카드예요.'] },
                { prompt: '네 이름에 알맞은 자음자를 모두 이어 보세요.', toolOptions: { mode: 'match', topic: '자음자 이름', slots: [{ id: 'rieul', label: '리을' }, { id: 'giyeok', label: '기역' }, { id: 'digeut', label: '디귿' }, { id: 'nieun', label: '니은' }], cards: [J('ㄱ', 'g'), J('ㄴ', 'n'), J('ㄷ', 'd'), J('ㄹ', 'r')] }, target: { match: { rieul: 'r', giyeok: 'g', digeut: 'd', nieun: 'n' } }, difficulty: 0.25,
                  levels: { challenge: { prompt: '네 이름에 알맞은 자음자를 모두 이어 보세요. 헷갈리는 카드도 섞여 있어요.', toolOptions: { cards: [J('ㄱ', 'g'), J('ㄴ', 'n'), J('ㄷ', 'd'), J('ㄹ', 'r'), J('ㅋ', 'k'), J('ㅌ', 't')] } } } },
              ],
            },
            {
              id: 'a3', title: '활동 3. 이름과 소리 가르기', minutes: 8, tool: 'mindmap',
              teacher: '"ㄱ의 이름은 [기역], 소리는 [그]예요. \'가\'를 읽을 때는 이름이 아니라 소리가 나요." 교사가 일부러 \'가\'를 [기역아]로 읽어 보여 주고 웃음을 끌어낸다. 소리 카드에는 [ ]가 붙어 있다는 것을 짚는다. 마지막 문항은 짝과 번갈아 자음자 카드를 들고 이름과 소리를 차례로 말한다.',
              task: '자음자의 이름과 소리를 나누어 넣고, 바르게 읽은 친구를 골라요. 그다음 짝과 이름·소리 말하기를 해요.',
              levels: { easy: HELP, base: {}, challenge: {} },
              items: [
                { prompt: 'ㄱ과 ㄴ의 이름과 소리를 나누어 보세요.', toolOptions: { topic: '이름과 소리', slots: [{ id: 'name', label: '이름' }, { id: 'sound', label: '소리' }], cards: [{ id: 'n1', text: '기역' }, { id: 's1', text: '[그]' }, { id: 'n2', text: '니은' }, { id: 's2', text: '[느]' }] }, target: { sort: { name: ['n1', 'n2'], sound: ['s1', 's2'] } }, difficulty: 0.2,
                  hints: ['글자를 읽을 때 나는 짧은 소리인지, 그 자음자를 부르는 이름인지 생각해 봐요.', '넣은 카드 가운데 [ ]가 붙은 짧은 소리가 이름 칸에 있는지 다시 봐요.', '두 글자로 부르는 것은 이름, [ ]에 든 짧은 소리는 소리 칸에 넣어요.'] },
                { prompt: '\'가\'를 소리 내어 바르게 읽은 친구를 골라 보세요.', toolOptions: { mode: 'pick', basket: '바르게 읽었어요', cards: [{ id: 'ga', text: '준호: [가]' }, { id: 'giyeoka', text: '민지: [기역아]' }, { id: 'gieu', text: '서준: [기으]' }] }, target: { pick: ['ga'] }, difficulty: 0.25,
                  predict: { q: '\'가\'를 읽을 때는 ㄱ의 무엇이 날까요?', options: ['이름 [기역]', '소리 [그]'], answer: 1 },
                  conclude: '글자를 읽을 때는 자음자의 이름이 아니라 소리가 나요. ㄱ 소리에 ㅏ가 붙어 [가]가 돼요.' },
                { prompt: '짝과 번갈아 자음자 카드를 들고 "이름은 기역, 소리는 [그]"처럼 말해 보세요.', free: true, talk: true },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"오늘 배운 자음자 네 개의 이름을 다 함께 말해 볼까요?" 기역·니은·디귿·리을을 손뼉에 맞춰 말한다. 출구 1번에서 ㅇ을 모음자에 넣은 학생과, 2번에서 이름으로 읽은 학생을 따로 적어 두고 다음 시간 시작에 다시 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { topic: '자모 나누기', slots: [{ id: 'con', label: '자음자' }, { id: 'vow', label: '모음자' }], cards: [J('ㄹ', 'r'), J('ㅓ', 'eo'), J('ㅇ', 'ng'), J('ㅛ', 'yo')] }, prompt: '자모 카드를 자음자와 모음자로 나누어 보세요.', target: { sort: { con: ['r', 'ng'], vow: ['eo', 'yo'] } }, difficulty: 0.2 },
            { type: 'choice', prompt: '\'나\'를 바르게 읽은 것은 무엇일까요?', options: ['[니은아]', '[나]', '[니]'], answer: 1, difficulty: 0.2, explain: '글자를 읽을 때는 ㄴ의 이름이 아니라 소리 [느]가 ㅏ와 붙어 [나]가 돼요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '자음자와 모음자',
        items: [
          { type: 'table', prompt: '자모를 자음자와 모음자로 나누어 쓰세요. (ㄱ ㅏ ㅇ ㅡ ㅁ ㅣ)', columns: ['자음자', '모음자'], rows: 3 },
          { type: 'table', prompt: '자음자의 이름을 쓰세요.', columns: ['자음자', '이름'], cells: [['ㄱ', ''], ['ㄴ', ''], ['ㄷ', ''], ['ㄹ', '']] },
          { type: 'choice', prompt: '\'다\'를 바르게 읽은 것에 ○ 하세요.', options: ['[디귿아]', '[다]', '[디]'], answer: '[다]' },
          { type: 'short', prompt: '짝에게 알려 준 자음자의 이름과 소리를 쓰세요. (보기: 이름 기역, 소리 [그])' },
        ],
        easy: {
          note: '자음자는 글자 앞자리에, 모음자는 그 옆이나 아래에 붙어요.',
          items: [
            { type: 'choice', prompt: '자음자에 ○ 하세요.', options: ['ㄱ', 'ㅏ'], answer: 'ㄱ' },
            { type: 'choice', prompt: '모음자에 ○ 하세요.', options: ['ㅇ', 'ㅣ'], answer: 'ㅣ' },
            { type: 'blank', prompt: '빈칸에 이름을 쓰세요.', text: 'ㄴ의 이름은 ______이에요.', answer: '니은' },
            { type: 'draw', prompt: '자음자 하나를 크게 쓰고 그 이름을 함께 써 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '나누기 둘째 문항은 카드 네 장이고, 맞게 넣은 카드에 초록 테두리가 생겨요.',
        base: '카드를 모두 넣은 뒤 확인해요.',
        challenge: '이름 잇기에 ㅋ·ㅌ 헷갈리는 카드가 더 나오고, 더 해 보기(처음 보는 자모 나누기)까지 풀어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 글자 이름과 소릿값을 뒤섞어 \'가\'를 [기역아]로 읽는다(이 주제의 대표 오개념) → 이름 카드와 [ ] 소리 카드를 색을 달리해 칠판에 붙인다. ② ㅇ을 동그라미 모양 때문에 모음자로 여긴다 → 글자 앞자리에 온다는 것으로 가른다. ③ ㅡ·ㅣ를 \'짧은 획이 없어서\' 자음자로 여긴다 → 2차시의 \'긴 줄\'을 다시 짚는다. 이 차시는 ㄱ~ㄹ 넷의 이름만 익히고, ㅁ~ㅎ의 이름은 28차시에서 다룬다. 소리를 [그]·[느]처럼 \'ㅡ\'를 붙여 나타내는 것은 1학년이 소리를 떠올리기 쉽게 한 것이다.',
    }),

    // ───────────────────────── 28. 연습: ㅁ~ㅎ 이름과 같은 첫소리 낱말 ─────────────────────────
    L(28, {
      title: 'ㅁ·ㅂ·ㅅ·ㅇ·ㅈ·ㅎ의 이름 익히고 같은 첫소리 낱말 모으기',
      objective: 'ㅁ·ㅂ·ㅅ·ㅇ·ㅈ·ㅎ에 이름을 붙이고, 같은 자음자로 시작하는 낱말을 세 개 이상 찾아 모을 수 있다.',
      standards: JAMO,
      illustration: ART('a paper basket labeled with one big consonant letter collecting picture cards of a hat, a radish and a hair ribbon, while a child points at the first letter of each word', [
        { motif: 'sun', x: 404, y: 56, s: 0.8 }, { motif: 'cloud', x: 110, y: 52 }, { motif: 'hills', y: 208 },
        { motif: 'tree', x: 90, y: 216 }, { motif: 'house', x: 390, y: 218 }, { motif: 'flower', x: 250, y: 230 },
        { motif: 'text', x: 240, y: 140, text: '첫소리가 같아요', size: 26 },
      ]),
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '"지난 시간 자음자 네 개의 이름을 말해 볼까요?" 기역·니은·디귿·리을을 함께 말한 뒤, 오늘은 미음·비읍·시옷·이응·지읒·히읗을 배운다고 알려 준다. "모자, 머리, 무를 소리 내어 읽어 봐요. 첫소리가 모두 같지요? 어떤 자음자로 시작할까요?" 시연 단추로 \'모자\' 카드가 ㅁ 바구니에 들어가는 모습을 보여 준다.',
          student: '모자, 머리, 무는 어떤 자음자로 시작할까요?',
          demo: { tool: 'mindmap', options: { mode: 'pick', basket: 'ㅁ으로 시작해요', shuffle: false, cards: [{ id: 'hat', text: '모자' }, { id: 'bird', text: '새' }] }, sequence: [{ pick: ['hat'] }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 자음자 이름 잇기', minutes: 8, tool: 'mindmap',
              teacher: '"미음, 비읍, 시옷, 이응, 지읒, 히읗." 이름을 손뼉에 맞춰 두 번 말한다. 27차시처럼 이름 첫 글자 앞자리에 그 자음자가 있다는 것을 짚는다. 시옷과 지읒을 바꾼 학생에게 "\'시\'와 \'지\'의 앞자리 자음자를 견주어 볼까요?"라고 묻는다.',
              task: '자음자 카드를 그 이름 칸에 이어요.',
              levels: { easy: HELP, base: {}, challenge: {} },
              items: [
                { prompt: '자음자의 이름에 알맞은 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '자음자 이름', slots: [{ id: 'mieum', label: '미음' }, { id: 'bieup', label: '비읍' }], cards: [J('ㅁ', 'm'), J('ㅂ', 'b'), J('ㅅ', 's')] }, target: { match: { mieum: 'm', bieup: 'b' } }, difficulty: 0.15 },
                { prompt: '이번 이름에도 알맞은 자음자를 이어 보세요.', toolOptions: { mode: 'match', topic: '자음자 이름', slots: [{ id: 'siot', label: '시옷' }, { id: 'jieut', label: '지읒' }, { id: 'ieung', label: '이응' }], cards: [J('ㅅ', 's'), J('ㅈ', 'j'), J('ㅇ', 'ng'), J('ㅎ', 'h')] }, target: { match: { siot: 's', jieut: 'j', ieung: 'ng' } }, difficulty: 0.25,
                  levels: { easy: { prompt: '두 이름에 알맞은 자음자를 이어 보세요.', toolOptions: { slots: [{ id: 'siot', label: '시옷' }, { id: 'jieut', label: '지읒' }], cards: [J('ㅅ', 's'), J('ㅈ', 'j')] }, target: { match: { siot: 's', jieut: 'j' } } } },
                  hints: ['이름 첫 글자를 소리 내어 읽고, 그 글자의 앞자리에 있는 자음자를 찾아봐요.', '모양이 비슷한 두 카드를 바꾸어 잇지 않았는지 다시 봐요. 위에 가로줄이 하나 더 있는지 보세요.', '이름 첫 글자를 쪼개 앞자리 자음자를 찾으면 돼요. 지붕 위에 가로줄이 있는 것은 \'지\'의 앞자리예요.'] },
                { prompt: '더 해 보기: 세 이름에 알맞은 자음자를 이어 보세요.', extra: true, toolOptions: { mode: 'match', topic: '자음자 이름', slots: [{ id: 'hieut', label: '히읗' }, { id: 'bieup', label: '비읍' }, { id: 'mieum', label: '미음' }], cards: [J('ㅎ', 'h'), J('ㅂ', 'b'), J('ㅁ', 'm'), J('ㅇ', 'ng')] }, target: { match: { hieut: 'h', bieup: 'b', mieum: 'm' } }, difficulty: 0.25 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 같은 첫소리 낱말 모으기', minutes: 10, tool: 'mindmap',
              teacher: '"낱말을 소리 내어 읽고 첫소리를 길게 늘여 봐요. [므…모자]." 낱말마다 첫 글자를 손가락으로 짚게 한다. \'나무\'를 ㅁ 바구니에 넣은 학생에게 "나무의 첫 글자는 \'나\'예요. 앞자리에 무엇이 있나요?"라고 묻는다. 낱말 속에 ㅁ이 있어도 첫소리가 아니면 넣지 않는다는 것을 짚는다.',
              task: '바구니의 자음자로 시작하는 낱말만 골라 넣어요. 그 자음자가 뒤 글자에만 있는 낱말은 넣지 않아요.',
              levels: { easy: HELP, base: {}, challenge: {} },
              items: [
                { prompt: 'ㅁ으로 시작하는 낱말을 모두 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: 'ㅁ으로 시작해요', cards: [{ id: 'hat', text: '모자' }, { id: 'hair', text: '머리' }, { id: 'radish', text: '무' }, { id: 'tree', text: '나무' }, { id: 'pants', text: '바지' }] }, target: { pick: ['hat', 'hair', 'radish'] }, difficulty: 0.2,
                  levels: { easy: { prompt: 'ㅁ으로 시작하는 낱말을 모두 골라 바구니에 넣어 보세요.', toolOptions: { cards: [{ id: 'hat', text: '모자' }, { id: 'hair', text: '머리' }, { id: 'pants', text: '바지' }] }, target: { pick: ['hat', 'hair'] } } },
                  hints: ['낱말마다 첫 글자만 손가락으로 짚고, 그 글자의 앞자리 자음자를 봐요.', '고른 낱말 가운데 그 자음자가 첫 글자가 아니라 뒤 글자에 있는 것이 있는지 다시 봐요.', '첫 글자 앞자리가 바구니의 자음자인 낱말만 남기고, 뒤 글자에만 있는 낱말은 빼요.'],
                  conclude: '\'나무\'에도 ㅁ이 있지만 첫소리는 ㄴ이에요. 첫 글자의 자음자를 봐요.' },
                { prompt: 'ㅅ으로 시작하는 낱말을 모두 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: 'ㅅ으로 시작해요', cards: [{ id: 'lion', text: '사자' }, { id: 'cow', text: '소' }, { id: 'seesaw', text: '시소' }, { id: 'plum', text: '자두' }, { id: 'pig', text: '돼지' }] }, target: { pick: ['lion', 'cow', 'seesaw'] }, difficulty: 0.25,
                  levels: { challenge: { prompt: 'ㅅ으로 시작하는 낱말을 모두 골라 보세요. 모양이 비슷한 ㅈ으로 시작하는 낱말도 섞여 있어요.', toolOptions: { cards: [{ id: 'lion', text: '사자' }, { id: 'cow', text: '소' }, { id: 'seesaw', text: '시소' }, { id: 'sound', text: '소리' }, { id: 'plum', text: '자두' }, { id: 'pig', text: '돼지' }, { id: 'eggplant', text: '가지' }, { id: 'pouch', text: '주머니' }] }, target: { pick: ['lion', 'cow', 'seesaw', 'sound'] } } } },
                { prompt: 'ㅂ으로 시작하는 낱말을 모두 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: 'ㅂ으로 시작해요', cards: [{ id: 'sea', text: '바다' }, { id: 'rain', text: '비' }, { id: 'butterfly', text: '나비' }, { id: 'tofu', text: '두부' }, { id: 'pants', text: '바지' }] }, target: { pick: ['sea', 'rain', 'pants'] }, difficulty: 0.25 },
              ],
            },
            {
              id: 'a3', title: '활동 3. 교실에서 첫소리 낱말 찾기', minutes: 8, tool: 'hangul',
              teacher: '짝과 함께 교실에서 ㅈ이나 ㅎ으로 시작하는 물건을 찾아 활동지에 쓴다(3분, 걷기 약속). 예: 지우개, 자, 휴지, 화분. 쓰기 어려운 학생은 그림으로 그린다. 돌아와 찾은 낱말의 첫 글자를 화면에서 만들어 본다. 받침 있는 낱말은 첫 글자만 만든다.',
              task: '짝과 교실에서 ㅈ·ㅎ으로 시작하는 물건을 찾아 쓰고, 그 낱말의 첫 글자를 만들어요.',
              levels: {
                easy: { consonants: ['ㅈ', 'ㅎ', 'ㅁ', 'ㅂ'], vowels: ['ㅏ', 'ㅗ', 'ㅜ', 'ㅣ'], slotHints: true, slotGuide: true },
                base: { consonants: ['ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅎ'], vowels: ['ㅏ', 'ㅓ', 'ㅗ', 'ㅜ', 'ㅣ'], revealAfterCheck: true },
                challenge: { consonants: ['ㄱ', 'ㄴ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅎ'], vowels: ['ㅏ', 'ㅓ', 'ㅗ', 'ㅜ', 'ㅡ', 'ㅣ'], speak: false, revealAfterCheck: true },
              },
              items: [
                { prompt: '짝과 교실을 걸으며 ㅈ이나 ㅎ으로 시작하는 물건을 찾아 활동지에 써 보세요.', free: true, talk: true },
                { prompt: '\'지우개\'의 첫 글자 \'지\'를 만들어 보세요.', target: { syllable: '지' }, difficulty: 0.15 },
                { prompt: '\'화분\'과 첫소리가 같은 \'하마\'의 첫 글자 \'하\'를 만들어 보세요.', target: { syllable: '하' }, difficulty: 0.15 },
                { prompt: '\'자\'를 만들어 보세요. 교실에서 길이를 잴 때 쓰는 물건이에요.', target: { syllable: '자' }, difficulty: 0.15,
                  levels: { challenge: { prompt: '\'주머니\'의 첫 글자 \'주\'를 만들어 보세요.', target: { syllable: '주' } } } },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"우리 짝이 찾은 ㅈ·ㅎ 낱말을 하나씩 말해 볼까요?" 칠판에 첫소리별로 모은다. 출구 1번에서 \'가지\'처럼 둘째 글자에 그 자음자가 있는 낱말을 넣은 학생은 첫 글자를 짚는 습관이 필요하니 다음 시간에 다시 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: 'ㅈ으로 시작해요', cards: [{ id: 'jd', text: '자두' }, { id: 'jm', text: '주머니' }, { id: 'ji', text: '지도' }, { id: 'gj', text: '가지' }, { id: 'ss', text: '시소' }] }, prompt: 'ㅈ으로 시작하는 낱말을 모두 골라 바구니에 넣어 보세요.', target: { pick: ['jd', 'jm', 'ji'] }, difficulty: 0.25 },
            { type: 'choice', prompt: 'ㅂ의 이름은 무엇일까요?', options: ['미음', '비읍', '히읗'], answer: 1, difficulty: 0.15, explain: '\'비읍\'의 첫 글자 \'비\' 앞자리에 ㅂ이 있어요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '같은 첫소리 낱말',
        items: [
          { type: 'table', prompt: '자음자의 이름을 쓰세요.', columns: ['자음자', '이름'], cells: [['ㅁ', ''], ['ㅂ', ''], ['ㅅ', ''], ['ㅈ', ''], ['ㅎ', '']] },
          { type: 'check', prompt: 'ㅁ으로 시작하는 낱말을 모두 골라 ✓ 하세요.', options: ['모자', '나무', '머리', '바지'], answer: '모자, 머리' },
          { type: 'table', prompt: '교실에서 찾은 낱말을 첫소리에 따라 쓰세요.', columns: ['ㅈ으로 시작해요', 'ㅎ으로 시작해요'], rows: 3 },
          { type: 'short', prompt: 'ㅂ으로 시작하는 낱말을 세 개 쓰세요.' },
        ],
        easy: {
          note: '낱말의 첫 글자만 손가락으로 짚어요.',
          items: [
            { type: 'choice', prompt: 'ㅁ으로 시작하는 낱말에 ○ 하세요.', options: ['모자', '나무'], answer: '모자' },
            { type: 'blank', prompt: '빈칸에 이름을 쓰세요.', text: 'ㅅ의 이름은 ______이에요.', answer: '시옷' },
            { type: 'short', prompt: 'ㅂ으로 시작하는 낱말을 하나 쓰세요.' },
            { type: 'draw', prompt: '교실에서 찾은 ㅈ이나 ㅎ으로 시작하는 물건을 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '이름 잇기 둘째 문항은 두 칸이고, 낱말 고르기는 카드가 세 장이에요. 맞게 넣은 카드에 초록 테두리가 생겨요. 글자 만들기는 모음을 들면 알맞은 자리 테두리가 깜박여요.',
        base: '카드를 모두 고른 뒤 확인해요. 합친 글자는 확인 뒤에 보여요.',
        challenge: 'ㅅ 낱말 고르기에 ㅈ으로 시작하는 낱말과 \'가지\'가 섞여 나오고, 내 글자 듣기 없이 \'주\'를 만들어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 낱말 안에 그 자음자가 있기만 하면 첫소리로 고른다(나무를 ㅁ 무리에) → 첫 글자만 짚게 한다. ② ㅅ과 ㅈ, 시옷과 지읒을 바꾼다 → ㅈ은 위에 가로줄이 하나 더 있다고 짚는다. ③ 이름을 소리로 읽는 오개념(27차시)이 다시 나온다 → \'모\'를 [미음오]로 읽지 않는다고 함께 웃으며 확인한다. ㅊ·ㅋ·ㅌ·ㅍ의 이름은 30차시에 자음자 차례를 익히며 함께 다룬다. 교실 낱말 찾기는 걷기 약속을 먼저 한다.',
    }),

    // ───────────────────────── 29. 확장: 첫소리 묶기와 소리로 읽기 ─────────────────────────
    L(29, {
      title: '첫소리가 같은 낱말끼리 묶고 첫소리 말놀이 하기',
      objective: '여러 낱말을 첫소리 자음자에 따라 묶고, 자음자의 이름이 아닌 소리로 글자를 읽으며 첫소리 말놀이를 할 수 있다.',
      standards: JAMO,
      illustration: ART('three paper baskets each marked with a different consonant, children dropping word cards of a whale, a butterfly and a lion into the matching baskets', [
        { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 110, y: 50 }, { motif: 'hills', y: 208 },
        { motif: 'wave', y: 230 }, { motif: 'bird', x: 300, y: 70 }, { motif: 'tree', x: 90, y: 214 },
        { motif: 'text', x: 240, y: 140, text: '고래 · 나비 · 사자', size: 26 },
      ]),
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '"고래, 구두, 가지. 세 낱말은 무엇이 같을까요?" 첫소리를 길게 늘여 [그…고래] 하고 함께 말한다. "오늘은 여러 첫소리 낱말을 바구니에 나누어 담아요." 시연 단추로 \'고래\' 카드가 ㄱ 바구니에 들어가는 모습을 보여 준다. 28차시에서 한 바구니에 모았다면 오늘은 바구니가 여러 개라는 것을 짚는다.',
          student: '고래, 구두, 가지는 무엇이 같을까요?',
          demo: { tool: 'mindmap', options: { topic: '첫소리 바구니', shuffle: false, slots: [{ id: 'g', label: 'ㄱ' }, { id: 'n', label: 'ㄴ' }], cards: [{ id: 'whale', text: '고래' }] }, sequence: [{ sort: { g: ['whale'] } }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 첫소리 바구니에 나누어 담기', minutes: 9, tool: 'mindmap',
              teacher: '"낱말의 첫 글자를 짚고, 앞자리 자음자를 찾아 그 바구니에 넣어요." \'나비\'를 ㅂ 쪽에 넣으려는 학생에게 "나비의 첫 글자는 무엇인가요?"라고 묻는다. 셋째 문항에서 바구니에 맞지 않는 낱말이 섞여 있다는 것을 미리 알려 준다.',
              task: '낱말을 첫소리 자음자에 따라 바구니에 나누어 넣어요. 맞는 바구니가 없는 낱말은 그대로 둬요.',
              levels: { easy: HELP, base: {}, challenge: {} },
              items: [
                { prompt: '낱말을 첫소리에 따라 바구니에 나누어 보세요.', toolOptions: { topic: '첫소리 바구니', slots: [{ id: 'g', label: 'ㄱ' }, { id: 'n', label: 'ㄴ' }, { id: 's', label: 'ㅅ' }], cards: [{ id: 'eggplant', text: '가지' }, { id: 'whale', text: '고래' }, { id: 'butterfly', text: '나비' }, { id: 'deer', text: '노루' }, { id: 'lion', text: '사자' }, { id: 'sound', text: '소리' }] }, target: { sort: { g: ['eggplant', 'whale'], n: ['butterfly', 'deer'], s: ['lion', 'sound'] } }, difficulty: 0.2,
                  levels: { easy: { prompt: '세 낱말을 첫소리에 따라 바구니에 나누어 보세요.', toolOptions: { cards: [{ id: 'whale', text: '고래' }, { id: 'butterfly', text: '나비' }, { id: 'lion', text: '사자' }] }, target: { sort: { g: ['whale'], n: ['butterfly'], s: ['lion'] } } } },
                  hints: ['낱말마다 첫 글자만 손가락으로 짚고, 그 글자의 앞자리 자음자를 봐요.', '넣은 낱말의 첫 글자 앞자리와 바구니 자음자가 같은지 하나씩 다시 봐요.', '첫 글자를 자음자와 모음자로 쪼갠 뒤, 앞에 나온 자음자와 같은 바구니에 넣어요.'] },
                { prompt: '이번 낱말도 첫소리에 따라 나누어 보세요.', toolOptions: { topic: '첫소리 바구니', slots: [{ id: 'd', label: 'ㄷ' }, { id: 'b', label: 'ㅂ' }, { id: 'j', label: 'ㅈ' }], cards: [{ id: 'tofu', text: '두부' }, { id: 'bridge', text: '다리' }, { id: 'pants', text: '바지' }, { id: 'barley', text: '보리' }, { id: 'plum', text: '자두' }, { id: 'map', text: '지도' }] }, target: { sort: { d: ['tofu', 'bridge'], b: ['pants', 'barley'], j: ['plum', 'map'] } }, difficulty: 0.3,
                  conclude: '\'두부\'에도 ㅂ, \'자두\'에도 ㄷ이 있지만, 바구니는 첫 글자의 자음자로 골라요.' },
                { prompt: '더 해 보기: 낱말을 첫소리 바구니에 나누어 보세요. 맞는 바구니가 없는 낱말도 있어요.', extra: true, toolOptions: { topic: '첫소리 바구니', slots: [{ id: 'm', label: 'ㅁ' }, { id: 'h', label: 'ㅎ' }], cards: [{ id: 'hat', text: '모자' }, { id: 'hippo', text: '하마' }, { id: 'radish', text: '무' }, { id: 'sky', text: '하늘' }, { id: 'sea', text: '바다' }] }, target: { sort: { m: ['hat', 'radish'], h: ['hippo', 'sky'] } }, difficulty: 0.3 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 이름이 아니라 소리로 읽기', minutes: 8, tool: 'mindmap',
              teacher: '"ㄱ에 ㅗ를 붙이면 [기역오]일까요, [고]일까요?" 27차시에서 배운 이름과 소리를 다시 떠올린다. 이름으로 읽은 카드를 고른 학생에게 교사가 그 카드대로 \'고래\'를 [기역오래]로 읽어 들려주며 "이렇게 읽는 사람이 있나요?" 하고 웃으며 묻는다.',
              task: '자음자와 모음자를 붙였을 때 나는 소리를 이어요. 이름으로 읽은 카드는 고르지 않아요.',
              levels: { easy: HELP, base: {}, challenge: {} },
              items: [
                { prompt: '자음자와 모음자를 붙였을 때 나는 소리를 이어 보세요.', toolOptions: { mode: 'match', topic: '소리로 읽기', slots: [{ id: 'go', label: 'ㄱ에 ㅗ를 붙이면' }, { id: 'na', label: 'ㄴ에 ㅏ를 붙이면' }], cards: [{ id: 'sgo', text: '[고]' }, { id: 'sna', text: '[나]' }, { id: 'ngo', text: '[기역오]' }, { id: 'nna', text: '[니은아]' }] }, target: { match: { go: 'sgo', na: 'sna' } }, difficulty: 0.2,
                  hints: ['글자를 읽을 때 자음자의 이름이 나는지, 짧은 소리가 나는지 27차시를 떠올려 봐요.', '이은 카드에 자음자 이름이 그대로 들어 있지는 않은지 다시 봐요.', '자음자 이름이 들어간 카드는 빼고, 짧은 소리에 모음 소리가 붙은 카드를 이어요.'] },
                { prompt: 'ㅁ과 ㅂ의 이름과 소리를 나누어 보세요.', toolOptions: { topic: '이름과 소리', slots: [{ id: 'name', label: '이름' }, { id: 'sound', label: '소리' }], cards: [{ id: 'n1', text: '미음' }, { id: 's1', text: '[므]' }, { id: 'n2', text: '비읍' }, { id: 's2', text: '[브]' }] }, target: { sort: { name: ['n1', 'n2'], sound: ['s1', 's2'] } }, difficulty: 0.2,
                  levels: { challenge: { prompt: 'ㅁ·ㅂ·ㅅ의 이름과 소리를 나누어 보세요.', toolOptions: { cards: [{ id: 'n1', text: '미음' }, { id: 's1', text: '[므]' }, { id: 'n2', text: '비읍' }, { id: 's2', text: '[브]' }, { id: 'n3', text: '시옷' }, { id: 's3', text: '[스]' }] }, target: { sort: { name: ['n1', 'n2', 'n3'], sound: ['s1', 's2', 's3'] } } } } },
                { prompt: '\'소라\'를 소리 내어 바르게 읽은 친구를 골라 보세요.', toolOptions: { mode: 'pick', basket: '바르게 읽었어요', cards: [{ id: 'ok', text: '하윤: [소라]' }, { id: 'name', text: '지우: [시옷오리을아]' }, { id: 'swap', text: '예린: [수라]' }] }, target: { pick: ['ok'] }, difficulty: 0.25,
                  conclude: '글자는 자음자 소리와 모음자 소리를 붙여 읽어요. 이름을 넣어 읽지 않아요.' },
              ],
            },
            {
              id: 'a3', title: '활동 3. 첫소리 말놀이', minutes: 9, tool: 'mindmap',
              teacher: '네 명 모둠으로 둘러앉아 교사가 정한 첫소리(ㄱ → ㅂ → ㅅ 차례)로 시작하는 낱말을 한 사람씩 말한다. 말차례를 지켜 차례대로 말하고, 같은 낱말은 다시 쓰지 않는다. 생각이 안 나면 "잠깐만"(11차시)이라고 말한다. 3분 뒤 화면 문항을 푼다.',
              task: '모둠에서 정한 첫소리로 시작하는 낱말을 차례대로 말하는 놀이를 하고, 첫소리가 같은 낱말을 골라요.',
              levels: { easy: HELP, base: {}, challenge: {} },
              items: [
                { prompt: '모둠에서 선생님이 정한 첫소리로 시작하는 낱말을 한 사람씩 차례대로 말해 보세요.', free: true, talk: true },
                { prompt: '말놀이에서 ㅂ 차례에 알맞게 말한 낱말을 모두 골라 보세요.', toolOptions: { mode: 'pick', basket: 'ㅂ으로 시작해요', cards: [{ id: 'bus', text: '버스' }, { id: 'rice', text: '보리' }, { id: 'nabi', text: '나비' }, { id: 'tofu', text: '두부' }, { id: 'pa', text: '파도' }] }, target: { pick: ['bus', 'rice'] }, difficulty: 0.25,
                  hints: ['낱말마다 첫 글자의 앞자리만 봐요. 모양이 비슷한 다른 자음자와 헷갈리지 않게 살펴요.', '고른 낱말 가운데 첫 글자가 아니라 뒤 글자에 그 자음자가 있는 것은 없는지, 비슷한 모양의 자음자는 없는지 다시 봐요.', '첫 글자 앞자리가 바구니의 자음자와 똑같은 낱말만 남겨요. 뒤 글자에만 있거나 위에 획이 더 붙은 자음자는 빼요.'] },
                { prompt: '말놀이에서 ㅅ 차례에 알맞게 말한 낱말을 모두 골라 보세요.', toolOptions: { mode: 'pick', basket: 'ㅅ으로 시작해요', cards: [{ id: 'cow', text: '소' }, { id: 'bird', text: '새' }, { id: 'jam', text: '잼' }, { id: 'gaji', text: '가시' }] }, target: { pick: ['cow', 'bird'] }, difficulty: 0.2,
                  levels: { easy: { prompt: '말놀이에서 ㅅ 차례에 알맞게 말한 낱말을 골라 보세요.', toolOptions: { cards: [{ id: 'cow', text: '소' }, { id: 'jam', text: '잼' }] }, target: { pick: ['cow'] } } } },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"오늘 말놀이에서 가장 많이 나온 첫소리는 무엇이었나요?" 모둠마다 생각해 낸 낱말 수를 말하게 한다. 출구 1번에서 뒤 글자의 자음자를 보고 넣은 학생과 2번에서 이름으로 읽은 학생을 적어 두고, 30차시 시작에 한 번 더 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { topic: '첫소리 바구니', slots: [{ id: 'g', label: 'ㄱ' }, { id: 'b', label: 'ㅂ' }], cards: [{ id: 'gu', text: '구름' }, { id: 'ba', text: '바나나' }, { id: 'ga', text: '거미' }, { id: 'na', text: '나비' }] }, prompt: '낱말을 첫소리 바구니에 나누어 보세요. 맞는 바구니가 없는 낱말은 그대로 둬요.', target: { sort: { g: ['gu', 'ga'], b: ['ba'] } }, difficulty: 0.25 },
            { type: 'choice', prompt: 'ㄷ에 ㅏ를 붙이면 어떻게 읽을까요?', options: ['[디귿아]', '[다]', '[두]'], answer: 1, difficulty: 0.2, explain: '자음자 소리 [드]와 모음자 소리 [아]를 붙여 [다]로 읽어요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '첫소리 바구니',
        items: [
          { type: 'table', prompt: '낱말을 첫소리에 따라 나누어 쓰세요. (가지, 나비, 사자, 고래, 노루, 소리)', columns: ['ㄱ', 'ㄴ', 'ㅅ'], rows: 2 },
          { type: 'choice', prompt: 'ㄱ에 ㅗ를 붙이면 어떻게 읽을까요?', options: ['[고]', '[기역오]', '[구]'], answer: '[고]' },
          { type: 'table', prompt: '자음자의 이름과 소리를 쓰세요.', columns: ['자음자', '이름', '소리'], cells: [['ㅁ', '', ''], ['ㅂ', '', '']] },
          { type: 'short', prompt: '말놀이에서 내가 말한 낱말 하나와 그 첫소리를 쓰세요.' },
        ],
        easy: {
          note: '낱말의 첫 글자만 짚고, 앞자리 자음자를 봐요.',
          items: [
            { type: 'choice', prompt: '\'고래\'의 첫소리 자음자에 ○ 하세요.', options: ['ㄱ', 'ㄹ'], answer: 'ㄱ' },
            { type: 'choice', prompt: '\'나\'를 바르게 읽은 것에 ○ 하세요.', options: ['[나]', '[니은아]'], answer: '[나]' },
            { type: 'short', prompt: 'ㅅ으로 시작하는 낱말을 하나 쓰세요.' },
            { type: 'draw', prompt: 'ㄱ으로 시작하는 낱말 하나를 그림으로 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '바구니 나누기 첫 문항은 세 장이고, 맞게 넣은 카드에 초록 테두리가 생겨요. 말놀이 ㅅ 문항은 카드가 두 장이에요.',
        base: '카드를 모두 넣은 뒤 확인해요.',
        challenge: '이름과 소리 나누기에 ㅅ이 더해지고, 더 해 보기(맞는 바구니가 없는 낱말)까지 풀어요. 말놀이에서 두 바퀴째는 첫소리를 모둠이 정해요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 낱말 속 아무 자리의 자음자를 보고 바구니를 고른다(두부를 ㅂ에) → 첫 글자만 짚게 한다. ② 글자 이름과 소릿값을 뒤섞어 [기역오]처럼 읽는다(이 주제의 대표 오개념) → 이름으로 읽으면 어떻게 들리는지 교사가 들려주어 스스로 웃으며 고치게 한다. ③ ㅂ과 ㅍ, ㅅ과 ㅈ처럼 모양이 비슷한 첫소리를 헷갈린다 → 획이 더 있는지 견주게 한다(ㅂ·ㅍ 소리 견주기는 33차시). 말놀이는 말차례를 지키는 연습이기도 하니 끼어들기를 함께 살핀다.',
    }),

    // ───────────────────────── 30. 자음자·모음자 차례대로 늘어놓기 ─────────────────────────
    L(30, {
      title: '자음자와 모음자를 차례대로 늘어놓고 하나씩 소리 내기',
      objective: '자음자 ㄱ~ㅎ과 모음자 ㅏ~ㅣ를 정해진 차례대로 늘어놓고, 하나씩 소리 내며 가·나·다를 만들어 공책에 옮겨 쓸 수 있다.',
      standards: JAMO,
      illustration: ART('a long paper train with each carriage carrying one Korean consonant in order, children walking along it and reading aloud', [
        { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 110, y: 50 }, { motif: 'hills', y: 208 },
        { motif: 'tree', x: 90, y: 214 }, { motif: 'house', x: 390, y: 218 }, { motif: 'flower', x: 250, y: 230 },
        { motif: 'text', x: 240, y: 140, text: 'ㄱ ㄴ ㄷ ㄹ ㅁ ㅂ ㅅ', size: 26 },
      ]),
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '"사전이나 우리 반 이름표는 어떤 차례로 놓여 있을까요?" 자음자에도 정해진 차례가 있다는 것을 알려 준다. 교사가 ㄱ부터 ㅎ까지 자음자 카드를 칠판에 한 줄로 붙이며 이름을 부르고, ㅊ(치읓)·ㅋ(키읔)·ㅌ(티읕)·ㅍ(피읖)의 이름을 새로 알려 준다. 시연 단추로 ㄱ·ㄴ 카드가 차례대로 놓이는 모습을 보여 준다. 칠판의 차례 줄은 활동 1을 시작할 때 뒤집어 둔다.',
          student: '자음자에는 어떤 차례가 있을까요?',
          demo: { tool: 'story', options: { mode: 'order', shuffle: false, slots: ['1', '2'], cards: [J('ㄱ', 'g'), J('ㄴ', 'n')] }, sequence: [{ order: ['g', 'n'] }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 자음자 차례대로 놓기', minutes: 9, tool: 'story',
              teacher: '칠판의 차례 줄을 뒤집어 둔 뒤 "기역, 니은, 디귿…" 하고 이름을 차례로 불러 가며 다음 카드를 찾게 한다. ㄷ과 ㄹ을 바꾼 학생에게 "디귿 다음은 무엇이었나요? 이름을 이어 불러 볼까요?"라고 묻는다. 놓은 뒤에는 카드를 짚으며 소리([그], [느]…)를 낸다.',
              task: '자음자 카드를 정해진 차례대로 놓고, 하나씩 짚으며 소리 내요.',
              levels: { easy: HELP, base: {}, challenge: {} },
              items: [
                { prompt: '자음자를 차례대로 놓아 보세요.', toolOptions: { mode: 'order', slots: ['1', '2', '3', '4'], cards: [J('ㄷ', 'd'), J('ㄱ', 'g'), J('ㄹ', 'r'), J('ㄴ', 'n')] }, target: { order: ['g', 'n', 'd', 'r'] }, difficulty: 0.15,
                  levels: { easy: { prompt: '자음자 세 개를 차례대로 놓아 보세요.', toolOptions: { slots: ['1', '2', '3'], cards: [J('ㄷ', 'd'), J('ㄱ', 'g'), J('ㄴ', 'n')] }, target: { order: ['g', 'n', 'd'] } } },
                  hints: ['기역부터 이름을 차례로 불러 보며 다음에 오는 자음자를 찾아요.', '이름을 처음부터 다시 불러 보고, 놓은 카드가 그 차례와 같은지 하나씩 견주어 봐요.', '이름 노래를 기역, 니은, 디귿, 리을 차례로 부르며 카드를 왼쪽부터 놓아요.'] },
                { prompt: '그다음 자음자를 차례대로 놓아 보세요.', toolOptions: { mode: 'order', slots: ['1', '2', '3', '4'], cards: [J('ㅅ', 's'), J('ㅁ', 'm'), J('ㅇ', 'ng'), J('ㅂ', 'b')] }, target: { order: ['m', 'b', 's', 'ng'] }, difficulty: 0.25,
                  hints: ['미음부터 이름을 차례로 불러 보며 다음 자음자를 찾아요.', '놓은 카드의 이름을 왼쪽부터 불러 보고, 순서가 어긋난 곳을 찾아요.', '미음, 비읍, 시옷, 이응 차례로 놓아요.'] },
                { prompt: '마지막 자음자들을 차례대로 놓아 보세요.', toolOptions: { mode: 'order', slots: ['1', '2', '3', '4', '5', '6'], cards: [J('ㅋ', 'k'), J('ㅈ', 'j'), J('ㅎ', 'h'), J('ㅊ', 'ch'), J('ㅍ', 'p'), J('ㅌ', 't')] }, target: { order: ['j', 'ch', 'k', 't', 'p', 'h'] }, difficulty: 0.35,
                  levels: { easy: { prompt: '자음자 네 개를 차례대로 놓아 보세요.', toolOptions: { slots: ['1', '2', '3', '4'], cards: [J('ㅋ', 'k'), J('ㅈ', 'j'), J('ㅌ', 't'), J('ㅊ', 'ch')] }, target: { order: ['j', 'ch', 'k', 't'] } } },
                  hints: ['지읒부터 이름을 차례로 불러 봐요. 오늘 새로 배운 이름도 있어요.', '놓은 카드의 이름을 왼쪽부터 불러 보고, 바뀐 두 카드를 찾아요.', '지읒, 치읓, 키읔, 티읕, 피읖, 히읗 차례로 놓아요.'],
                  conclude: '자음자는 ㄱ부터 ㅎ까지 열네 개가 차례대로 있어요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 모음자 차례대로 놓기', minutes: 8, tool: 'story',
              teacher: '"모음자에도 차례가 있어요. ㅏ, ㅑ, ㅓ, ㅕ… 짧은 획이 하나인 것 다음에 둘인 것이 와요." 모두 함께 [아], [야], [어], [여] 소리를 낸다. ㅑ를 ㅓ 다음에 놓은 학생에게 "ㅏ 다음에는 짧은 획이 하나 더 붙은 모음자가 와요"라고 짚는다.',
              task: '모음자 카드를 정해진 차례대로 놓고, 하나씩 짚으며 소리 내요.',
              levels: { easy: HELP, base: {}, challenge: {} },
              items: [
                { prompt: '모음자를 차례대로 놓아 보세요.', toolOptions: { mode: 'order', slots: ['1', '2', '3', '4'], cards: [J('ㅓ', 'eo'), J('ㅑ', 'ya'), J('ㅕ', 'yeo'), J('ㅏ', 'a')] }, target: { order: ['a', 'ya', 'eo', 'yeo'] }, difficulty: 0.2,
                  hints: ['짧은 획이 하나인 모음자 다음에 짧은 획이 둘인 모음자가 와요.', '놓은 카드를 소리 내어 차례로 읽어 보고, 어긋난 곳을 찾아요.', '[아], [야], [어], [여] 소리 차례로 놓아요.'] },
                { prompt: '그다음 모음자를 차례대로 놓아 보세요.', toolOptions: { mode: 'order', slots: ['1', '2', '3', '4'], cards: [J('ㅜ', 'u'), J('ㅛ', 'yo'), J('ㅠ', 'yu'), J('ㅗ', 'o')] }, target: { order: ['o', 'yo', 'u', 'yu'] }, difficulty: 0.25,
                  levels: { easy: { prompt: '모음자 세 개를 차례대로 놓아 보세요.', toolOptions: { slots: ['1', '2', '3'], cards: [J('ㅛ', 'yo'), J('ㅜ', 'u'), J('ㅗ', 'o')] }, target: { order: ['o', 'yo', 'u'] } } },
                  hints: ['짧은 획이 하나인 것 다음에 둘인 것이 와요. 위로 나온 것이 아래로 나온 것보다 먼저예요.', '놓은 카드를 소리 내어 읽어 보고, 위아래가 바뀐 곳이 없는지 봐요.', '[오], [요], [우], [유] 소리 차례로 놓아요.'] },
                { prompt: '더 해 보기: 모음자 열 개 가운데 마지막 두 개까지 차례대로 놓아 보세요.', extra: true, toolOptions: { mode: 'order', slots: ['1', '2', '3', '4', '5', '6'], cards: [J('ㅡ', 'eu'), J('ㅗ', 'o'), J('ㅣ', 'i'), J('ㅠ', 'yu'), J('ㅛ', 'yo'), J('ㅜ', 'u')] }, target: { order: ['o', 'yo', 'u', 'yu', 'eu', 'i'] }, difficulty: 0.35,
                  conclude: '모음자는 ㅏ ㅑ ㅓ ㅕ ㅗ ㅛ ㅜ ㅠ ㅡ ㅣ 차례예요.' },
              ],
            },
            {
              id: 'a3', title: '활동 3. 소리 내며 가나다 만들고 옮겨 쓰기', minutes: 9, tool: 'hangul',
              teacher: '"자음자 차례에 ㅏ를 붙이면 가, 나, 다, 라가 돼요." 한 글자를 만들 때마다 소리를 낸다. 화면 문항을 마친 뒤 공책 활동지에 ㄱ부터 ㅎ까지 자음자를 하나씩 소리 내며 옮겨 쓴다. 교사는 돌아다니며 소리와 쓰는 글자가 짝지어지는지 듣는다.',
              task: '자음자 차례대로 ㅏ를 붙인 글자를 만들고, 소리 내며 공책에 옮겨 써요.',
              levels: {
                easy: { consonants: ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ'], vowels: ['ㅏ', 'ㅓ'], slotHints: true, slotGuide: true },
                base: { consonants: ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ'], vowels: ['ㅏ', 'ㅓ', 'ㅗ', 'ㅜ'], revealAfterCheck: true },
                challenge: { consonants: ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ'], vowels: ['ㅏ', 'ㅑ', 'ㅓ', 'ㅗ', 'ㅜ', 'ㅣ'], speak: false, revealAfterCheck: true },
              },
              items: [
                { prompt: '가 다음에 오는 \'나\'를 만들어 보세요.', target: { syllable: '나' }, toolOptions: { wordSoFar: '가' }, difficulty: 0.1 },
                { prompt: '가, 나 다음에 오는 \'다\'를 만들어 보세요.', target: { syllable: '다' }, toolOptions: { wordSoFar: '가나' }, difficulty: 0.15 },
                { prompt: '가, 나, 다 다음에 오는 \'라\'를 만들어 보세요.', target: { syllable: '라' }, toolOptions: { wordSoFar: '가나다' }, difficulty: 0.2,
                  levels: { challenge: { prompt: '가, 나, 다, 라, 마, 바 다음에 오는 \'사\'를 만들어 보세요.', target: { syllable: '사' }, toolOptions: { wordSoFar: '가나다라마바' } } } },
                { prompt: '공책에 ㄱ부터 ㅎ까지 자음자를 하나씩 소리 내며 옮겨 써 보세요.', free: true },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"자음자 차례 노래를 다 함께 불러 볼까요?" 교사가 손뼉을 치고 학생들이 ㄱ부터 ㅎ까지 이름을 차례로 말한다(곡조 없이 손뼉 박자로). 출구 1번에서 ㅊ·ㅋ을 바꾼 학생은 새로 배운 이름을 아직 헷갈리는 것이니 다음 시간에 이름 카드를 한 번 더 붙여 준다.',
          exitTicket: [
            { type: 'tool', tool: 'story', options: { mode: 'order', slots: ['1', '2', '3', '4'], cards: [J('ㅌ', 't'), J('ㅊ', 'ch'), J('ㅍ', 'p'), J('ㅋ', 'k')] }, prompt: '자음자를 차례대로 놓아 보세요.', target: { order: ['ch', 'k', 't', 'p'] }, difficulty: 0.3 },
            { type: 'choice', prompt: '모음자 ㅓ 다음에 오는 것은 무엇일까요?', options: ['ㅏ', 'ㅕ', 'ㅗ'], answer: 1, difficulty: 0.2, explain: '모음자는 ㅏ ㅑ ㅓ ㅕ 차례예요. ㅓ 다음에는 짧은 획이 하나 더 붙은 ㅕ가 와요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '자모 차례',
        items: [
          { type: 'table', prompt: '빈칸에 알맞은 자음자를 차례대로 쓰세요.', columns: ['1', '2', '3', '4', '5', '6', '7'], cells: [['ㄱ', '', 'ㄷ', '', 'ㅁ', '', 'ㅅ']] },
          { type: 'table', prompt: '빈칸에 알맞은 모음자를 차례대로 쓰세요.', columns: ['1', '2', '3', '4', '5'], cells: [['ㅏ', '', 'ㅓ', '', 'ㅗ']] },
          { type: 'blank', prompt: '빈칸에 알맞은 글자를 쓰세요.', text: '가 - 나 - ______ - 라', answer: '다' },
          { type: 'short', prompt: 'ㄱ부터 ㅎ까지 자음자를 소리 내며 차례대로 옮겨 쓰세요.' },
        ],
        easy: {
          note: '기역, 니은, 디귿… 이름을 차례로 불러 보며 써요.',
          items: [
            { type: 'table', prompt: '빈칸에 알맞은 자음자를 쓰세요.', columns: ['1', '2', '3', '4'], cells: [['ㄱ', '', 'ㄷ', '']] },
            { type: 'choice', prompt: 'ㅏ 다음에 오는 모음자에 ○ 하세요.', options: ['ㅑ', 'ㅓ'], answer: 'ㅑ' },
            { type: 'blank', prompt: '빈칸에 알맞은 글자를 쓰세요.', text: '가 - ______ - 다', answer: '나' },
            { type: 'short', prompt: 'ㄱ, ㄴ, ㄷ, ㄹ을 소리 내며 두 번씩 써 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '차례 놓기는 카드가 서너 장이고, 맞게 놓은 카드에 초록 테두리가 생겨요. 글자 만들기는 조각 여섯 개만 나와요.',
        base: '카드를 모두 놓은 뒤 확인해요. 합친 글자는 확인 뒤에 보여요.',
        challenge: '자음자 여섯 개를 한 번에 놓고, 더 해 보기(모음자 여섯 개)까지 풀어요. 글자 만들기 셋째 문항은 \'사\'를 만들어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① ㄷ·ㄹ, ㅊ·ㅋ처럼 이웃한 자음자의 차례를 바꾼다 → 이름을 처음부터 이어 부르며 찾게 한다. ② 모음자 ㅑ를 ㅓ 뒤에 놓는다 → 짧은 획 하나 → 둘 차례라고 짚는다. ③ 옮겨 쓸 때 소리 내지 않고 모양만 베낀다 → 하나 쓸 때마다 소리를 내게 한다. 자음자 차례를 익히는 데 널리 쓰는 \'가나다라\' 노래는 곡조를 쓰지 않고 손뼉 박자로만 이름을 부른다. ㅗ·ㅜ 쓰는 방향은 31차시에서 다룬다.',
    }),

    // ───────────────────────── 31. 연습: 쓰는 차례 지켜 모음자 옮겨 쓰기 ─────────────────────────
    L(31, {
      title: '획 쓰는 차례를 지켜 ㅗ·ㅜ·ㅛ·ㅠ 바르게 옮겨 쓰기',
      objective: 'ㅗ·ㅜ·ㅛ·ㅠ를 쓰는 획의 차례대로 늘어놓고, 소리를 듣고 짧은 획 방향이 맞는 모음자를 골라 공책에 바르게 옮겨 쓸 수 있다.',
      standards: JAMO,
      illustration: ART('a child writing large vowel letters on lined paper with a thick pencil, small paper arrows showing stroke order beside each letter', [
        { motif: 'sun', x: 404, y: 56, s: 0.8 }, { motif: 'cloud', x: 110, y: 52 }, { motif: 'hills', y: 208 },
        { motif: 'tree', x: 90, y: 216 }, { motif: 'flower', x: 390, y: 228 }, { motif: 'leaf', x: 250, y: 230 },
        { motif: 'text', x: 240, y: 140, text: 'ㅗ ㅛ ㅜ ㅠ', size: 30 },
      ]),
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '칠판에 교사가 ㅗ를 일부러 가로획부터 쓰고 짧은 획을 아래로 그어 ㅜ로 만들어 버린다. "어, [오]를 쓰려고 했는데 무엇이 되었나요?" 학생들이 ㅜ라고 말하면 "짧은 획을 어디에 먼저 썼는지가 중요해요"라고 짚는다. 시연 단추로 ㅗ를 쓰는 두 획이 차례대로 놓이는 모습을 보여 준다.',
          student: 'ㅗ와 ㅜ는 어떤 차례로 쓸까요?',
          demo: { tool: 'story', options: { mode: 'order', shuffle: false, slots: ['첫째 획', '둘째 획'], cards: [{ id: 'up', text: '위에 짧은 세로획 (위 → 아래)' }, { id: 'long', text: '긴 가로획 (왼쪽 → 오른쪽)' }] }, sequence: [{ order: ['up', 'long'] }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 획 쓰는 차례 맞추기', minutes: 9, tool: 'story',
              teacher: '"ㅜ는 짧은 획이 아래에 있어요. 무엇을 먼저 쓸까요?" 손가락으로 공중에 직접 쓰며 차례를 정하게 한다. 획은 위에서 아래로, 왼쪽에서 오른쪽으로 긋는다는 것을 칠판에 화살표로 붙인다. ㅛ에서 가로획을 먼저 놓은 학생에게 "짧은 획이 위에 있으면 무엇부터 쓸까요?"라고 묻는다.',
              task: '모음자를 쓰는 획을 쓰는 차례대로 놓아요. 공중에 손가락으로 써 보며 정해요.',
              levels: { easy: HELP, base: {}, challenge: {} },
              items: [
                { prompt: 'ㅜ를 쓰는 획을 차례대로 놓아 보세요.', toolOptions: { mode: 'order', slots: ['첫째 획', '둘째 획'], cards: [{ id: 'short', text: '가운데 짧은 세로획 (위 → 아래)' }, { id: 'long', text: '긴 가로획 (왼쪽 → 오른쪽)' }] }, target: { order: ['long', 'short'] }, difficulty: 0.15,
                  predict: { q: 'ㅜ는 무엇을 먼저 쓸까요?', options: ['짧은 세로획', '긴 가로획'], answer: 1 },
                  hints: ['위에 있는 획부터 써요. 손가락으로 공중에 써 보며 어느 획이 더 위에 있는지 봐요.', '놓은 첫째 획이 글자에서 위쪽에 있는 획인지 다시 봐요.', '이 모음자는 긴 가로획이 위에 있고, 짧은 획이 그 아래로 내려와요.'],
                  conclude: 'ㅜ는 긴 가로획을 먼저 쓰고, 그 아래로 짧은 획을 내려 써요.' },
                { prompt: 'ㅛ를 쓰는 획을 차례대로 놓아 보세요.', toolOptions: { mode: 'order', slots: ['첫째 획', '둘째 획', '셋째 획'], cards: [{ id: 'long', text: '긴 가로획 (왼쪽 → 오른쪽)' }, { id: 'left', text: '왼쪽 짧은 세로획 (위 → 아래)' }, { id: 'right', text: '오른쪽 짧은 세로획 (위 → 아래)' }] }, target: { order: ['left', 'right', 'long'] }, difficulty: 0.25,
                  levels: { easy: { prompt: 'ㅗ를 쓰는 획을 차례대로 놓아 보세요.', toolOptions: { slots: ['첫째 획', '둘째 획'], cards: [{ id: 'long', text: '긴 가로획 (왼쪽 → 오른쪽)' }, { id: 'left', text: '위에 짧은 세로획 (위 → 아래)' }] }, target: { order: ['left', 'long'] } } },
                  hints: ['위에 있는 획부터, 같은 높이면 왼쪽 획부터 써요.', '놓은 차례에서 위에 있는 짧은 획보다 아래 획이 먼저 오지 않았는지 봐요.', '위에 있는 짧은 획 둘을 왼쪽, 오른쪽 차례로 쓰고 맨 뒤에 긴 가로획을 써요.'] },
                { prompt: 'ㅠ를 쓰는 획을 차례대로 놓아 보세요.', toolOptions: { mode: 'order', slots: ['첫째 획', '둘째 획', '셋째 획'], cards: [{ id: 'right', text: '오른쪽 짧은 세로획 (위 → 아래)' }, { id: 'long', text: '긴 가로획 (왼쪽 → 오른쪽)' }, { id: 'left', text: '왼쪽 짧은 세로획 (위 → 아래)' }] }, target: { order: ['long', 'left', 'right'] }, difficulty: 0.3,
                  hints: ['위에 있는 획부터, 같은 높이면 왼쪽 획부터 써요.', '첫째 획이 글자 맨 위에 있는 획인지 다시 봐요.', '긴 가로획을 먼저 쓰고, 그 아래 짧은 획 둘을 왼쪽, 오른쪽 차례로 써요.'] },
              ],
            },
            {
              id: 'a2', title: '활동 2. 소리 듣고 방향 맞는 모음자 고르기', minutes: 8, tool: 'mindmap',
              teacher: '교사가 [오], [우], [요], [유]를 입 모양을 크게 하며 들려준다. "[오]는 입술을 동그랗게 내밀고, 짧은 획이 위로 솟아요. [우]는 입술을 더 모으고 짧은 획이 아래로 내려와요." ㅗ와 ㅜ를 바꾼 학생에게 2차시에 몸으로 만든 모양을 떠올리게 한다.',
              task: '소리를 읽고, 그 소리가 나는 모음자를 이어요.',
              levels: { easy: HELP, base: {}, challenge: {} },
              items: [
                { prompt: '소리에 알맞은 모음자를 이어 보세요.', toolOptions: { mode: 'match', topic: '소리와 모음자', slots: [{ id: 'o', label: '[오]' }, { id: 'u', label: '[우]' }], cards: [J('ㅗ', 'o'), J('ㅜ', 'u'), J('ㅓ', 'eo')] }, target: { match: { o: 'o', u: 'u' } }, difficulty: 0.15 },
                { prompt: '이번 소리에도 알맞은 모음자를 이어 보세요.', toolOptions: { mode: 'match', topic: '소리와 모음자', slots: [{ id: 'yo', label: '[요]' }, { id: 'yu', label: '[유]' }], cards: [J('ㅛ', 'yo'), J('ㅠ', 'yu'), J('ㅗ', 'o')] }, target: { match: { yo: 'yo', yu: 'yu' } }, difficulty: 0.25,
                  hints: ['짧은 획이 위로 솟는 모음자와 아래로 내려오는 모음자를 먼저 나누어 봐요. 짧은 획이 몇 개인지도 세어 봐요.', '이은 카드의 짧은 획 방향과 수가 소리와 맞는지 다시 봐요.', '[요]는 짧은 획 두 개가 위로, [유]는 짧은 획 두 개가 아래로 나와요.'] },
                { prompt: '[우] 소리를 듣고 바르게 쓴 글자를 골라 보세요.', toolOptions: { mode: 'pick', basket: '바르게 썼어요', cards: [{ id: 'u', text: '우' }, { id: 'o', text: '오' }, { id: 'eo', text: '어' }] }, target: { pick: ['u'] }, difficulty: 0.2,
                  levels: { challenge: { prompt: '[유] 소리를 듣고 바르게 쓴 글자를 골라 보세요.', toolOptions: { cards: [{ id: 'yu', text: '유' }, { id: 'yo', text: '요' }, { id: 'u', text: '우' }, { id: 'yeo', text: '여' }] }, target: { pick: ['yu'] } } } },
              ],
            },
            {
              id: 'a3', title: '활동 3. 소리 내며 공책에 옮겨 쓰기', minutes: 9, tool: 'mindmap',
              teacher: '공책 활동지에 ㅗ·ㅛ·ㅜ·ㅠ를 획 차례대로 소리 내며 세 번씩 쓴다. 다 쓴 뒤 짝과 공책을 바꾸어, 짝이 소리 내어 읽어 주며 방향이 맞는지 본다. 틀린 글자는 동그라미만 해 주고 고치는 것은 쓴 사람이 한다.',
              task: '모음자를 획 차례대로 소리 내며 옮겨 쓰고, 짝과 바꾸어 방향을 살펴요.',
              levels: { easy: HELP, base: {}, challenge: {} },
              items: [
                { prompt: '공책에 ㅗ·ㅛ·ㅜ·ㅠ를 획 차례대로 소리 내며 세 번씩 써 보세요.', free: true },
                { prompt: '짝과 공책을 바꾸어 소리 내어 읽어 주며 방향이 맞는지 살펴보세요.', free: true, talk: true },
                { prompt: '모음자를 바르게 쓰는 방법을 모두 골라 보세요.', toolOptions: { mode: 'pick', basket: '바르게 써요', cards: [{ id: 'top', text: '위에 있는 획부터 써요' }, { id: 'lr', text: '가로획은 왼쪽에서 오른쪽으로 그어요' }, { id: 'bottom', text: '아래 획부터 거꾸로 써요' }, { id: 'any', text: '아무 획이나 먼저 써요' }] }, target: { pick: ['top', 'lr'] }, difficulty: 0.15,
                  levels: { challenge: { prompt: '모음자를 바르게 쓰는 방법을 모두 골라 보세요. 헷갈리는 카드가 더 있어요.', toolOptions: { cards: [{ id: 'top', text: '위에 있는 획부터 써요' }, { id: 'lr', text: '가로획은 왼쪽에서 오른쪽으로 그어요' }, { id: 'say', text: '쓰면서 소리를 내요' }, { id: 'bottom', text: '아래 획부터 거꾸로 써요' }, { id: 'any', text: '아무 획이나 먼저 써요' }, { id: 'rl', text: '가로획은 오른쪽에서 왼쪽으로 그어요' }] }, target: { pick: ['top', 'lr', 'say'] } } } },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"오늘 짝이 동그라미 해 준 글자가 있었나요? 어떻게 고쳤나요?" 두세 명이 고친 글자를 공중에 써 보인다. 출구 1번에서 짧은 획부터 놓은 학생과 2번에서 위아래를 바꾼 학생을 적어 두고, 다음 시간 시작에 공중 쓰기를 먼저 한다.',
          exitTicket: [
            { type: 'tool', tool: 'story', options: { mode: 'order', slots: ['첫째 획', '둘째 획'], cards: [{ id: 'long', text: '긴 가로획 (왼쪽 → 오른쪽)' }, { id: 'top', text: '위에 짧은 세로획 (위 → 아래)' }] }, prompt: 'ㅗ를 쓰는 획을 차례대로 놓아 보세요.', target: { order: ['top', 'long'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '[유] 소리가 나는 모음자는 무엇일까요?', options: ['ㅛ', 'ㅠ', 'ㅜ'], answer: 1, difficulty: 0.2, explain: 'ㅠ는 짧은 획 두 개가 아래로 나와 [유] 소리가 나요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '모음자 바르게 쓰기',
        items: [
          { type: 'table', prompt: '획 차례를 지켜 소리 내며 세 번씩 쓰세요.', columns: ['모음자', '1', '2', '3'], cells: [['ㅗ', '', '', ''], ['ㅛ', '', '', ''], ['ㅜ', '', '', ''], ['ㅠ', '', '', '']] },
          { type: 'choice', prompt: 'ㅜ를 쓸 때 먼저 쓰는 획에 ○ 하세요.', options: ['긴 가로획', '짧은 세로획'], answer: '긴 가로획' },
          { type: 'blank', prompt: '[오] 소리를 듣고 글자를 쓰세요.', text: 'ㅇ + ______ = 오', answer: 'ㅗ' },
          { type: 'blank', prompt: '[유] 소리를 듣고 글자를 쓰세요.', text: 'ㅇ + ______ = 유', answer: 'ㅠ' },
        ],
        easy: {
          note: '위에 있는 획부터 써요.',
          items: [
            { type: 'table', prompt: '소리 내며 두 번씩 쓰세요.', columns: ['모음자', '1', '2'], cells: [['ㅗ', '', ''], ['ㅜ', '', '']] },
            { type: 'choice', prompt: '[우] 소리가 나는 모음자에 ○ 하세요.', options: ['ㅗ', 'ㅜ'], answer: 'ㅜ' },
            { type: 'choice', prompt: 'ㅗ를 쓸 때 먼저 쓰는 획에 ○ 하세요.', options: ['위에 짧은 세로획', '긴 가로획'], answer: '위에 짧은 세로획' },
            { type: 'draw', prompt: '몸으로 ㅗ와 ㅜ를 만든 모습을 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '획 차례 둘째 문항은 ㅗ(두 획)로 바뀌고, 맞게 놓은 카드에 초록 테두리가 생겨요. 옮겨 쓰기는 ㅗ·ㅜ만 두 번씩 해요.',
        base: '카드를 모두 놓은 뒤 확인해요.',
        challenge: '[유] 소리 글자 고르기에 헷갈리는 글자가 더 나오고, 바르게 쓰는 방법 고르기에 헷갈리는 카드가 더 있어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 모양이 비슷한 ㅗ와 ㅜ를 방향을 바꾸어 쓴다(이 주제의 대표 오개념) → 쓰기 전에 소리를 내고 입 모양과 짧은 획 방향을 함께 떠올리게 한다. ② 획을 아래에서 위로 긋는다 → 칠판 화살표를 보며 공중에 크게 써 본다. ③ 짝 점검에서 짝 글자를 지우고 대신 고쳐 준다 → 동그라미만 하고 고치는 것은 쓴 사람이 한다. 획 차례는 위 → 아래, 왼쪽 → 오른쪽의 일반 원칙에 따른다.',
    }),

    // ───────────────────────── 32. 확장: 가나다 차례로 이름표 줄 세우기 ─────────────────────────
    L(32, {
      title: '이름표를 가나다 차례로 줄 세우고 빠진 자모 채우기',
      objective: '친구 이름표를 첫 글자의 자음자 차례에 따라 가나다 차례로 늘어놓고, 차례 줄에서 빠진 자음자나 모음자를 찾아 채울 수 있다.',
      standards: JAMO,
      illustration: ART('children standing in a line holding paper name tags, a teacher pointing at the first letters of the tags, a long consonant strip on the wall above them', [
        { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 110, y: 50 }, { motif: 'hills', y: 208 },
        { motif: 'house', x: 390, y: 218 }, { motif: 'tree', x: 90, y: 214 }, { motif: 'flower', x: 250, y: 232 },
        { motif: 'text', x: 240, y: 140, text: '가 · 나 · 다 · 라', size: 28 },
      ]),
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '"30차시에 자음자 차례를 익혔지요. 그 차례로 우리 이름도 줄 세울 수 있어요." 교사가 지어낸 이름표 두 장(가람, 나리)을 칠판에 붙이고 첫 글자의 자음자를 짚는다. "가람의 첫 글자는 ㄱ, 나리는 ㄴ이에요. ㄱ이 먼저니까 가람이 앞이에요." 시연 단추로 두 이름표가 차례대로 놓이는 모습을 보여 준다.',
          student: '이름표를 어떤 차례로 놓을까요?',
          demo: { tool: 'story', options: { mode: 'order', shuffle: false, slots: ['1', '2'], cards: [{ id: 'garam', text: '가람' }, { id: 'nari', text: '나리' }] }, sequence: [{ order: ['garam', 'nari'] }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 이름표 가나다 차례로 놓기', minutes: 9, tool: 'story',
              teacher: '"이름표의 첫 글자만 보고, 그 글자의 자음자가 차례 줄에서 어디쯤인지 찾아요." 칠판 위 자음자 차례 줄을 손가락으로 따라가게 한다. 이름 전체 길이나 글자 수로 줄 세운 학생에게 "첫 글자의 자음자는 무엇인가요? 차례 줄에서 찾아볼까요?"라고 묻는다. 이름은 모두 지어낸 것이다.',
              task: '이름표를 첫 글자의 자음자 차례에 따라 가나다 차례로 놓아요.',
              levels: { easy: HELP, base: {}, challenge: {} },
              items: [
                { prompt: '이름표를 가나다 차례로 놓아 보세요.', toolOptions: { mode: 'order', slots: ['1', '2', '3', '4'], cards: [{ id: 'dasom', text: '다솜' }, { id: 'gaeun', text: '가은' }, { id: 'raon', text: '라온' }, { id: 'narae', text: '나래' }] }, target: { order: ['gaeun', 'narae', 'dasom', 'raon'] }, difficulty: 0.2,
                  levels: { easy: { prompt: '이름표 세 장을 가나다 차례로 놓아 보세요.', toolOptions: { slots: ['1', '2', '3'], cards: [{ id: 'dasom', text: '다솜' }, { id: 'gaeun', text: '가은' }, { id: 'narae', text: '나래' }] }, target: { order: ['gaeun', 'narae', 'dasom'] } } },
                  hints: ['이름표마다 첫 글자의 앞자리 자음자만 짚고, 자음자 차례 줄에서 찾아봐요.', '놓은 이름표의 첫 자음자를 왼쪽부터 이름으로 불러 보고, 차례가 어긋난 곳을 찾아요.', '기역, 니은, 디귿, 리을 차례대로 그 자음자로 시작하는 이름표를 놓아요.'] },
                { prompt: '이번 이름표도 가나다 차례로 놓아 보세요.', toolOptions: { mode: 'order', slots: ['1', '2', '3', '4'], cards: [{ id: 'sebin', text: '세빈' }, { id: 'mirae', text: '미래' }, { id: 'yuna', text: '유나' }, { id: 'boram', text: '보람' }] }, target: { order: ['mirae', 'boram', 'sebin', 'yuna'] }, difficulty: 0.3,
                  hints: ['첫 글자의 앞자리 자음자를 보고, 미음부터 이어지는 차례 줄에서 찾아봐요.', '이응(ㅇ)으로 시작하는 이름이 어디쯤 오는지 차례 줄에서 다시 봐요.', '미음, 비읍, 시옷, 이응 차례대로 그 자음자로 시작하는 이름표를 놓아요.'] },
                { prompt: '더 해 보기: 첫 글자의 자음자가 같은 이름이 있어요. 가나다 차례로 놓아 보세요.', extra: true, toolOptions: { mode: 'order', slots: ['1', '2', '3', '4'], cards: [{ id: 'goun', text: '고운' }, { id: 'hana', text: '하나' }, { id: 'gaon', text: '가온' }, { id: 'jiho', text: '지호' }] }, target: { order: ['gaon', 'goun', 'jiho', 'hana'] }, difficulty: 0.4,
                  hints: ['첫 자음자가 같으면 그다음에 붙은 모음자의 차례를 봐요.', 'ㅏ와 ㅗ 가운데 모음자 차례에서 무엇이 먼저였는지 떠올려 봐요.', 'ㄱ으로 시작하는 두 이름은 모음자 ㅏ가 붙은 것을 먼저 놓고, 그 뒤에 ㅈ, ㅎ 차례로 놓아요.'],
                  conclude: '첫 자음자가 같으면 모음자 차례(ㅏ ㅑ ㅓ ㅕ ㅗ…)로 견주어요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 차례 줄에서 빠진 자모 채우기', minutes: 8, tool: 'story',
              teacher: '"자모 기차에서 한 칸이 빠졌어요. 어느 칸이 빠졌을까요?" 빈칸 앞뒤의 자모 이름을 소리 내어 이어 부르게 한다. 모양이 비슷한 카드(ㄷ과 ㅌ, ㅓ와 ㅕ)를 고른 학생에게 "그 카드의 이름을 불러 볼까요? 차례 줄의 이름과 같은가요?"라고 묻는다.',
              task: '자모 차례 줄에서 빠진 칸에 알맞은 자모 카드를 넣어요.',
              levels: { easy: HELP, base: {}, challenge: {} },
              items: [
                { prompt: '자음자 기차에서 빠진 칸을 채워 보세요.', toolOptions: { mode: 'fill', cards: [J('ㄷ', 'd'), J('ㅌ', 't'), J('ㅁ', 'm')], slots: [{ id: 'b1', who: '자음자 기차', motif: 'house', label: 'ㄱ - ㄴ - ___ - ㄹ' }] }, target: { fill: { b1: 'd' } }, difficulty: 0.15,
                  hints: ['빈칸 앞 니은과 뒤 리을 사이에 오는 이름을 떠올려 봐요.', '넣은 카드의 이름을 불러 보고, 차례 줄에 이어 불렀을 때 자연스러운지 들어 봐요.', '기역, 니은 다음, 리을 앞에 오는 자음자를 넣어요. 위에 획이 더 붙은 카드와 헷갈리지 않아요.'] },
                { prompt: '모음자 기차에서 빠진 칸을 채워 보세요.', toolOptions: { mode: 'fill', cards: [J('ㅕ', 'yeo'), J('ㅓ', 'eo'), J('ㅛ', 'yo')], slots: [{ id: 'b1', who: '모음자 기차', motif: 'tree', label: 'ㅏ - ㅑ - ㅓ - ___ - ㅗ' }] }, target: { fill: { b1: 'yeo' } }, difficulty: 0.25,
                  levels: { challenge: { prompt: '모음자 기차에서 빠진 두 칸을 채워 보세요.', toolOptions: { cards: [J('ㅕ', 'yeo'), J('ㅓ', 'eo'), J('ㅛ', 'yo'), J('ㅠ', 'yu')], slots: [{ id: 'b1', who: '모음자 기차', motif: 'tree', label: 'ㅏ - ㅑ - ㅓ - ___ - ㅗ' }, { id: 'b2', who: '모음자 기차', motif: 'tree', label: 'ㅗ - ___ - ㅜ - ㅠ' }] }, target: { fill: { b1: 'yeo', b2: 'yo' } } } },
                  hints: ['짧은 획 하나인 것 다음에 짧은 획 둘인 것이 와요.', '넣은 카드를 소리 내어 [아] [야] [어]…와 이어 읽어 보고 자연스러운지 들어 봐요.', '[어] 다음, [오] 앞에 오는 소리의 모음자를 넣어요.'] },
                { prompt: '자음자 기차의 뒤쪽에서 빠진 칸을 채워 보세요.', toolOptions: { mode: 'fill', cards: [J('ㅋ', 'k'), J('ㄱ', 'g'), J('ㅌ', 't')], slots: [{ id: 'b1', who: '자음자 기차', motif: 'house', label: 'ㅈ - ㅊ - ___ - ㅌ' }] }, target: { fill: { b1: 'k' } }, difficulty: 0.3,
                  levels: { easy: { prompt: '자음자 기차에서 빠진 칸을 채워 보세요.', toolOptions: { cards: [J('ㅂ', 'b'), J('ㅍ', 'p')], slots: [{ id: 'b1', who: '자음자 기차', motif: 'house', label: 'ㅁ - ___ - ㅅ' }] }, target: { fill: { b1: 'b' } } } },
                  hints: ['지읒, 치읓 다음에 오는 이름을 떠올려 봐요. 30차시에 새로 배운 이름이에요.', '넣은 카드의 이름을 불러 보고, 모양이 비슷한 다른 카드와 헷갈리지 않았는지 봐요.', '치읓 다음, 티읕 앞에 오는 자음자를 넣어요. 가운데 획이 하나 더 있는 카드예요.'] },
              ],
            },
            {
              id: 'a3', title: '활동 3. 우리 모둠 가나다 줄 서기', minutes: 9, tool: 'story',
              teacher: '여섯 명 모둠마다 자기 이름표를 들고 가나다 차례로 줄을 선다. 줄을 다 서면 맨 앞부터 한 사람씩 "내 이름 첫 글자는 ○, 자음자는 ○이에요"라고 말한다. 첫 자음자가 같은 친구가 있으면 모음자 차례로 정한다. 교사는 모둠을 돌며 줄이 바른지 묻기만 하고 대신 옮기지 않는다. 그다음 화면 문항을 푼다.',
              task: '모둠 친구들과 이름표를 들고 가나다 차례로 줄을 선 뒤, 화면에서 이름표를 차례대로 놓아요.',
              levels: { easy: HELP, base: {}, challenge: {} },
              items: [
                { prompt: '모둠 친구들과 이름표를 들고 가나다 차례로 줄을 서 보세요.', free: true, talk: true },
                { prompt: '줄을 선 뒤 한 사람씩 내 이름 첫 글자의 자음자를 말해 보세요.', free: true, talk: true },
                { prompt: '다른 모둠의 이름표를 가나다 차례로 놓아 보세요.', toolOptions: { mode: 'order', slots: ['1', '2', '3'], cards: [{ id: 'haneul', text: '하늘' }, { id: 'dain', text: '다인' }, { id: 'taeo', text: '태오' }] }, target: { order: ['dain', 'taeo', 'haneul'] }, difficulty: 0.3,
                  hints: ['이름표마다 첫 자음자를 짚고, 자음자 차례 줄에서 앞쪽에 있는 것부터 찾아봐요.', '모양이 비슷한 두 자음자 가운데 차례 줄에서 무엇이 먼저인지 다시 봐요.', '디귿은 앞쪽, 티읕과 히읗은 뒤쪽이에요. 티읕 다음에 히읗이 와요.'] },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"우리 반 이름표를 가나다 차례로 놓으면 누가 맨 앞일까요?" 학생들이 손을 들고 자기 첫 자음자를 말하며 이유를 댄다. 출구 1번에서 글자 수로 줄 세운 학생과 2번에서 모양이 비슷한 자모를 고른 학생을 적어 두고, 33차시 소리 구별 활동에서 그 자모를 한 번 더 다룬다.',
          exitTicket: [
            { type: 'tool', tool: 'story', options: { mode: 'order', slots: ['1', '2', '3'], cards: [{ id: 'sora', text: '소라' }, { id: 'baram', text: '바람' }, { id: 'nayun', text: '나윤' }] }, prompt: '이름표를 가나다 차례로 놓아 보세요.', target: { order: ['nayun', 'baram', 'sora'] }, difficulty: 0.25 },
            { type: 'choice', prompt: 'ㅁ - ㅂ - ___ - ㅇ 빈칸에 들어갈 자음자는 무엇일까요?', options: ['ㅈ', 'ㅅ', 'ㅍ'], answer: 1, difficulty: 0.2, explain: '자음자는 ㅁ ㅂ ㅅ ㅇ 차례예요. 비읍 다음, 이응 앞에는 시옷이 와요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '가나다 줄 세우기',
        items: [
          { type: 'table', prompt: '이름을 가나다 차례로 쓰세요. (라온, 가은, 다솜, 나래)', columns: ['1', '2', '3', '4'], rows: 1 },
          { type: 'blank', prompt: '빠진 자음자를 쓰세요.', text: 'ㅈ - ㅊ - ______ - ㅌ', answer: 'ㅋ' },
          { type: 'blank', prompt: '빠진 모음자를 쓰세요.', text: 'ㅗ - ______ - ㅜ - ㅠ', answer: 'ㅛ' },
          { type: 'short', prompt: '내 이름의 첫 글자와 그 자음자를 쓰세요.' },
        ],
        easy: {
          note: '이름표의 첫 글자만 짚고, 자음자 차례 줄에서 찾아요.',
          items: [
            { type: 'choice', prompt: '가나다 차례로 먼저 오는 이름에 ○ 하세요.', options: ['나리', '가람'], answer: '가람' },
            { type: 'blank', prompt: '빠진 자음자를 쓰세요.', text: 'ㄱ - ㄴ - ______ - ㄹ', answer: 'ㄷ' },
            { type: 'choice', prompt: 'ㅏ 다음에 오는 모음자에 ○ 하세요.', options: ['ㅓ', 'ㅑ'], answer: 'ㅑ' },
            { type: 'short', prompt: '내 이름의 첫 글자를 쓰세요.' },
          ],
        },
      },
      differentiation: {
        easy: '이름표 놓기 첫 문항은 세 장이고, 맞게 놓은 카드에 초록 테두리가 생겨요. 빠진 칸 채우기 셋째 문항은 앞쪽 자음자로 바뀌어요.',
        base: '카드를 모두 놓은 뒤 확인해요.',
        challenge: '모음자 기차에서 두 칸을 채우고, 더 해 보기(첫 자음자가 같은 이름)까지 풀어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 이름의 글자 수나 받침 유무로 줄을 세운다 → 첫 글자의 앞자리 자음자만 짚게 한다. ② 모양이 비슷한 ㄷ·ㅌ, ㅓ·ㅕ를 차례 줄에서 바꾸어 넣는다 → 카드의 이름을 소리 내어 부르게 한다. ③ 첫 자음자가 같은 이름의 차례를 정하지 못한다 → 모음자 차례로 견주게 하되, 받침 차례까지는 다루지 않는다. 모든 이름은 지어낸 것이며, 실제 학급 이름표 활동에서 이름을 공개하기 싫어하는 학생은 좋아하는 낱말 카드로 대신 참여하게 한다.',
    }),

    // ───────────────────────── 33. 소리 듣고 자모 카드 들기 ─────────────────────────
    L(33, {
      title: '비슷한 소리를 구별해 듣고 알맞은 자음자 카드 들기',
      objective: '[브]와 [프]처럼 비슷한 자음자 소리를 듣고, 그 소리를 내는 자음자 카드를 골라 들 수 있다.',
      standards: JAMO,
      illustration: ART('two children facing each other, one holding a small tissue in front of the mouth while saying a sound, the other raising a consonant card high', [
        { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 110, y: 50 }, { motif: 'hills', y: 208 },
        { motif: 'tree', x: 90, y: 214 }, { motif: 'flower', x: 390, y: 228 }, { motif: 'bird', x: 300, y: 72 },
        { motif: 'text', x: 240, y: 140, text: 'ㅂ ㅍ · ㄱ ㅋ', size: 30 },
      ]),
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '교사가 입 앞에 휴지 한 장을 대고 [바]와 [파]를 차례로 소리 낸다. "어느 소리에서 휴지가 더 크게 흔들렸나요?" [파]에서 휴지가 펄럭인다는 것을 보게 한다. "ㅂ과 ㅍ은 입 모양이 같아요. 바람이 세게 나오는지가 달라요." 시연 단추로 [프] 소리 설명이 ㅍ 카드와 이어지는 모습을 보여 준다.',
          student: '휴지가 더 크게 흔들린 소리는 무엇일까요?',
          demo: { tool: 'mindmap', options: { mode: 'match', topic: '소리와 자음자', shuffle: false, slots: [{ id: 'p', label: '바람이 세게 나와 휴지가 펄럭이는 [프]' }], cards: [J('ㅍ', 'p'), J('ㅂ', 'b')] }, sequence: [{ match: { p: 'p' } }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 소리 설명과 자음자 잇기', minutes: 9, tool: 'mindmap',
              teacher: '모두 휴지 한 장씩을 입 앞에 대고 [바]/[파], [가]/[카], [다]/[타], [자]/[차]를 짝지어 소리 내 본다. "바람이 세게 나오는 쪽은 모양에 획이 하나 더 있어요." ㅂ과 ㅍ을 바꾼 학생에게 다시 휴지를 대고 두 소리를 내 보게 한다. 휴지는 활동 뒤 바로 버리게 한다.',
              task: '소리 설명을 읽고, 그 소리를 내는 자음자를 이어요.',
              levels: { easy: HELP, base: {}, challenge: {} },
              items: [
                { prompt: '소리 설명에 알맞은 자음자를 이어 보세요.', toolOptions: { mode: 'match', topic: '소리와 자음자', slots: [{ id: 'b', label: '입술을 붙였다 살짝 떼는 [브]' }, { id: 'p', label: '입술을 붙였다 바람을 세게 터뜨리는 [프]' }], cards: [J('ㅂ', 'b'), J('ㅍ', 'p'), J('ㅁ', 'm')] }, target: { match: { b: 'b', p: 'p' } }, difficulty: 0.2,
                  predict: { q: '휴지가 더 크게 흔들리는 소리는 무엇일까요?', options: ['[브]', '[프]'], answer: 1 },
                  hints: ['휴지를 입 앞에 대고 두 소리를 내 봐요. 바람이 세게 나오는 쪽은 획이 더 있는 자음자예요.', '이은 카드를 소리 내어 읽어 보고, 휴지가 흔들리는 정도가 설명과 같은지 봐요.', '살짝 떼는 소리는 획이 적은 자음자, 바람이 세게 나오는 소리는 획이 더 있는 자음자와 이어요. 콧소리 자음자는 남겨요.'],
                  conclude: 'ㅂ과 ㅍ은 입 모양이 같고, ㅍ은 바람이 세게 나와요.' },
                { prompt: '이번 소리 설명에도 알맞은 자음자를 이어 보세요.', toolOptions: { mode: 'match', topic: '소리와 자음자', slots: [{ id: 'g', label: '혀뿌리에서 살짝 나는 [그]' }, { id: 'k', label: '혀뿌리에서 바람을 세게 내는 [크]' }], cards: [J('ㄱ', 'g'), J('ㅋ', 'k'), J('ㅇ', 'ng')] }, target: { match: { g: 'g', k: 'k' } }, difficulty: 0.25,
                  hints: ['휴지를 대고 두 소리를 내 봐요. 바람이 세게 나오는 쪽은 가운데 획이 하나 더 있어요.', '이은 카드의 획 수와 바람 세기가 설명과 맞는지 다시 봐요.', '살짝 나는 소리는 꺾인 획 하나인 자음자, 바람이 센 소리는 그 안에 획이 하나 더 있는 자음자와 이어요.'] },
                { prompt: '세 소리 설명에 알맞은 자음자를 이어 보세요.', toolOptions: { mode: 'match', topic: '소리와 자음자', slots: [{ id: 'd', label: '혀끝을 붙였다 살짝 떼는 [드]' }, { id: 't', label: '혀끝을 붙였다 바람을 세게 내는 [트]' }, { id: 'ch', label: '바람을 세게 내며 [츠]' }], cards: [J('ㄷ', 'd'), J('ㅌ', 't'), J('ㅊ', 'ch'), J('ㅈ', 'j')] }, target: { match: { d: 'd', t: 't', ch: 'ch' } }, difficulty: 0.35,
                  levels: { easy: { prompt: '두 소리 설명에 알맞은 자음자를 이어 보세요.', toolOptions: { slots: [{ id: 'd', label: '혀끝을 붙였다 살짝 떼는 [드]' }, { id: 't', label: '혀끝을 붙였다 바람을 세게 내는 [트]' }], cards: [J('ㄷ', 'd'), J('ㅌ', 't')] }, target: { match: { d: 'd', t: 't' } } } },
                  hints: ['휴지를 대고 소리를 내 봐요. 바람이 센 소리는 획이 더 있는 자음자예요.', '이은 카드를 소리 내어 읽어 보고, 바람 세기와 혀 위치가 설명과 같은지 봐요.', '살짝 떼는 [드]는 획이 적은 쪽, 세게 내는 [트]는 가운데 획이 더 있는 쪽, [츠]는 위에 점 같은 획이 붙은 쪽과 이어요.'] },
              ],
            },
            {
              id: 'a2', title: '활동 2. 짝 놀이 말 채우기', minutes: 7, tool: 'story',
              teacher: '"짝 놀이에서는 한 사람이 소리를 내고, 다른 사람이 카드를 들어요. 소리를 낸 사람은 카드가 맞는지 말해 줘요." 짝 놀이 차례를 화면 대화로 먼저 익힌다. 카드를 잘못 든 짝에게 "틀렸어!"가 아니라 소리를 한 번 더 들려주는 말을 고르게 한다.',
              task: '짝 놀이 대화에서 빈 말풍선에 알맞은 말을 넣어요.',
              levels: { easy: HELP, base: {}, challenge: {} },
              items: [
                { prompt: '하윤이가 소리를 냈어요. 서준이가 들 카드를 넣어 보세요.', toolOptions: { mode: 'fill', cards: [J('ㅍ', 'p'), J('ㅂ', 'b'), J('ㅁ', 'm')], slots: [{ id: 'b1', who: '하윤', motif: 'flower', label: '휴지가 펄럭이는 [파]!' }, { id: 'b2', who: '서준', motif: 'tree', label: '___' }] }, target: { fill: { b2: 'p' } }, difficulty: 0.2,
                  hints: ['휴지가 펄럭이는 소리는 바람이 센 소리예요. 획이 더 있는 자음자를 찾아요.', '넣은 카드로 [아]를 붙여 소리 내 보고, 하윤이 소리와 같은지 들어 봐요.', '입술 소리 가운데 바람이 센 자음자를 넣어요.'] },
                { prompt: '서준이가 카드를 잘못 들었어요. 하윤이가 할 알맞은 말을 넣어 보세요.', toolOptions: { mode: 'fill', cards: [{ id: 'again', text: '한 번 더 들어 봐, [카]' }, { id: 'wrong', text: '틀렸어, 너 못해' }, { id: 'skip', text: '그냥 넘어가자' }], slots: [{ id: 'b1', who: '하윤', motif: 'flower', label: '[카]!' }, { id: 'b2', who: '서준', motif: 'tree', label: '(ㄱ 카드를 들어요)' }, { id: 'b3', who: '하윤', motif: 'flower', label: '___.' }] }, target: { fill: { b3: 'again' } }, difficulty: 0.2 },
                { prompt: '서준이가 다시 들었어요. 서준이가 들 카드와 하윤이 말을 넣어 보세요.', toolOptions: { mode: 'fill', cards: [J('ㅋ', 'k'), J('ㄱ', 'g'), { id: 'yes', text: '맞았어, 바람이 셌지' }, { id: 'no', text: '또 틀렸어' }], slots: [{ id: 'b1', who: '하윤', motif: 'flower', label: '한 번 더, [카]!' }, { id: 'b2', who: '서준', motif: 'tree', label: '___' }, { id: 'b3', who: '하윤', motif: 'flower', label: '___!' }] }, target: { fill: { b2: 'k', b3: 'yes' } }, difficulty: 0.3,
                  levels: { easy: { prompt: '서준이가 다시 들었어요. 서준이가 들 카드를 넣어 보세요.', toolOptions: { cards: [J('ㅋ', 'k'), J('ㄱ', 'g')], slots: [{ id: 'b1', who: '하윤', motif: 'flower', label: '한 번 더, [카]!' }, { id: 'b2', who: '서준', motif: 'tree', label: '___' }] }, target: { fill: { b2: 'k' } } } },
                  hints: ['[카]는 바람이 센 소리예요. 바람이 센 자음자는 획이 하나 더 있어요.', '넣은 카드에 [아]를 붙여 소리 내 보고, 하윤이 말이 짝을 북돋우는 말인지 다시 봐요.', '획이 더 있는 혀뿌리 소리 카드를 넣고, 하윤이는 맞았다고 알려 주는 말을 해요.'] },
              ],
            },
            {
              id: 'a3', title: '활동 3. 짝과 소리 듣고 카드 들기', minutes: 10, tool: 'emotion',
              teacher: '짝마다 자음자 카드 여덟 장(ㅂ ㅍ ㄱ ㅋ ㄷ ㅌ ㅈ ㅊ)을 나누어 준다. 한 사람이 [바]·[파]처럼 소리를 내면 다른 사람이 카드를 든다. 다섯 번 하고 역할을 바꾼다. 소리 내는 사람은 입을 가리지 않고 휴지를 대도 된다. 놀이가 끝나면 짝이 카드를 잘못 들었을 때 어떻게 할지 화면에서 고른다.',
              task: '짝과 소리 듣고 카드 들기 놀이를 한 뒤, 짝이 틀렸을 때 할 행동을 골라요.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '짝과 번갈아 소리를 내고 카드를 들어 보세요. 다섯 번 하고 역할을 바꿔요.', free: true, talk: true },
                { prompt: '짝이 [파] 소리에 ㅂ 카드를 들었어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '나', situation: '내가 [파] 소리를 냈는데 짝이 ㅂ 카드를 들었어요.', choices: [{ id: 'again', text: '휴지를 대고 [파]를 한 번 더 들려줘요', result: '짝이 휴지가 펄럭이는 것을 보고 ㅍ 카드를 들어요', mood: '뿌듯함' }, { id: 'laugh', text: '"그것도 몰라?" 하고 웃어요', result: '짝이 속상해서 놀이를 그만하고 싶어 해요', mood: '속상함', why: '웃음을 들은 짝의 마음은 어떨까요?' }, { id: 'take', text: '짝 카드를 빼앗아 내가 들어요', result: '짝은 무엇이 틀렸는지 몰라요', mood: '걱정', why: '내가 들어 주면 짝이 소리를 구별하게 될까요?' }] }, target: { choice: 'again' }, difficulty: 0.15 },
                { prompt: '내가 [다] 소리에 ㅌ 카드를 들었는데 짝이 아니라고 해요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '나', situation: '짝이 [다] 소리를 냈는데 나는 ㅌ 카드를 들었고, 짝이 "아니야"라고 했어요.', choices: [{ id: 'angry', text: '"내가 맞아!" 하고 우겨요', result: '짝과 다투느라 놀이가 멈춰요', mood: '화남', why: '우기면 어느 소리였는지 알 수 있을까요?' }, { id: 'ask', text: '"한 번 더 들려줄래?" 하고 부탁해요', result: '다시 듣고 바람이 약한 것을 알아 ㄷ 카드를 들어요', mood: '기쁨' }, { id: 'stop', text: '말없이 카드를 내려놓아요', result: '무엇이 틀렸는지 모르고 끝나요', mood: '슬픔', why: '말없이 그만두면 다음에는 맞힐 수 있을까요?' }] }, target: { choice: 'ask' }, difficulty: 0.2,
                  levels: { challenge: { prompt: '내가 [다] 소리에 ㅌ 카드를 들었는데 짝이 아니라고 해요. 어떻게 할까요? 그럴듯한 행동이 섞여 있어요.', toolOptions: { choices: [{ id: 'angry', text: '"내가 맞아!" 하고 우겨요', result: '짝과 다투느라 놀이가 멈춰요', mood: '화남', why: '우기면 어느 소리였는지 알 수 있을까요?' }, { id: 'ask', text: '"한 번 더 들려줄래?" 하고 부탁해요', result: '다시 듣고 바람이 약한 것을 알아 ㄷ 카드를 들어요', mood: '기쁨' }, { id: 'guess', text: '아무 말 없이 다른 카드를 하나씩 다 들어 봐요', result: '짝이 맞다고 할 때까지 카드만 바꾸고 소리는 듣지 않아요', mood: '걱정', why: '카드를 다 들어 보면 소리를 구별하게 될까요?' }, { id: 'stop', text: '말없이 카드를 내려놓아요', result: '무엇이 틀렸는지 모르고 끝나요', mood: '슬픔', why: '말없이 그만두면 다음에는 맞힐 수 있을까요?' }] }, target: { choice: 'ask' } } } },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"오늘 짝 놀이에서 가장 헷갈린 두 자음자는 무엇이었나요?" 학생들이 손가락으로 두 카드를 가리키게 하고, 많이 나온 짝을 칠판에 적는다. 출구 1번에서 바람이 약한 자음자와 이은 학생은 다음 시간 시작에 휴지 놀이를 한 번 더 하게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '소리와 자음자', slots: [{ id: 'j', label: '살짝 내는 [즈]' }, { id: 'ch', label: '바람을 세게 내는 [츠]' }], cards: [J('ㅈ', 'j'), J('ㅊ', 'ch'), J('ㅅ', 's')] }, prompt: '소리 설명에 알맞은 자음자를 이어 보세요.', target: { match: { j: 'j', ch: 'ch' } }, difficulty: 0.25 },
            { type: 'choice', prompt: '[파] 소리를 듣고 들어야 할 카드는 무엇일까요?', options: ['ㅂ', 'ㅍ', 'ㅁ'], answer: 1, difficulty: 0.2, explain: '[파]는 입술을 붙였다 바람을 세게 터뜨리는 소리라서 ㅍ이에요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '비슷한 소리 구별하기',
        items: [
          { type: 'table', prompt: '두 소리를 내 보고, 바람이 세게 나오는 자음자에 ○ 하세요.', columns: ['소리', '자음자'], cells: [['[바] / [파]', 'ㅍ  ·  ㅂ'], ['[가] / [카]', 'ㄱ  ·  ㅋ'], ['[다] / [타]', 'ㅌ  ·  ㄷ']] },
          { type: 'choice', prompt: '[카] 소리를 내는 자음자를 고르세요.', options: ['ㄱ', 'ㅋ', 'ㅇ'], answer: 'ㅋ' },
          { type: 'blank', prompt: '[차] 소리를 듣고 글자를 쓰세요.', text: '______ + ㅏ = 차', answer: 'ㅊ' },
          { type: 'short', prompt: '짝이 카드를 잘못 들었을 때 내가 해 줄 말을 쓰세요.' },
        ],
        easy: {
          note: '휴지를 입 앞에 대고 소리를 내 봐요. 바람이 센 쪽은 획이 더 있어요.',
          items: [
            { type: 'choice', prompt: '[파] 소리를 내는 자음자에 ○ 하세요.', options: ['ㅂ', 'ㅍ'], answer: 'ㅍ' },
            { type: 'choice', prompt: '[다] 소리를 내는 자음자에 ○ 하세요.', options: ['ㄷ', 'ㅌ'], answer: 'ㄷ' },
            { type: 'choice', prompt: '짝이 틀렸을 때 할 말에 ○ 하세요.', options: ['한 번 더 들어 봐', '그것도 몰라?'], answer: '한 번 더 들어 봐' },
            { type: 'draw', prompt: '[파] 소리를 낼 때 휴지가 흔들리는 모습을 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '소리 잇기 셋째 문항은 두 쌍만 나오고, 맞게 이은 카드에 초록 테두리가 생겨요. 짝 놀이 말 채우기 셋째 문항은 카드만 넣어요.',
        base: '카드를 모두 이은 뒤 확인해요.',
        challenge: '소리 잇기에서 세 쌍을 한 번에 잇고, 짝이 아니라고 할 때 고르기에 그럴듯한 행동이 하나 더 섞여요.',
      },
      teacherNotes: '자주 보이는 어려움: ① ㅂ과 ㅍ처럼 입 모양이 같은 자음자 소리를 섞는다(이 주제의 대표 오개념) → 휴지를 입 앞에 대고 바람 세기를 눈으로 보게 한다. ② ㄱ·ㅋ, ㄷ·ㅌ, ㅈ·ㅊ도 같은 까닭으로 헷갈린다 → "바람이 센 쪽은 획이 하나 더"라는 모양 단서와 함께 묶어 준다. ③ 짝 놀이에서 틀린 짝을 놀리거나 대신 답한다 → 소리를 한 번 더 들려주는 말을 먼저 익힌다. 된소리(ㄲ ㄸ ㅃ ㅆ ㅉ)는 이 단원에서 다루지 않는다. 휴지는 한 사람 한 장만 쓰고 바로 버린다.',
    }),

    // ───────────────────────── 34. 단원 정리: 한글 놀이 되돌아보기 ─────────────────────────
    L(34, {
      title: '자모 나누기·차례 놓기로 단원을 되짚고 내 실력 솔직하게 고르기',
      objective: '자음자와 모음자를 나누고 차례대로 놓는 문제를 풀어 단원에서 익힌 것을 되짚고, 말차례·읽기·자모 가운데 내가 잘하는 것과 더 연습할 것을 하나씩 말할 수 있다.',
      standards: [...JAMO, ...TALK, ...READ],
      illustration: ART('a classroom wall covered with the unit work: a consonant train, a reading tree with paper leaves, and a talking turn chart, children pointing at their favourite parts', [
        { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 110, y: 50 }, { motif: 'hills', y: 208 },
        { motif: 'tree', x: 90, y: 212 }, { motif: 'house', x: 390, y: 218 }, { motif: 'leaf', x: 250, y: 232 },
        { motif: 'text', x: 240, y: 140, text: '한글 놀이', size: 32 },
      ]),
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '"한글 놀이 단원에서 우리는 세 가지를 했어요. 말차례 지키기, 끝까지 읽기, 자모 이름과 소리 익히기예요." 교실 벽에 붙인 말차례 표, 읽기 나무, 자모 기차를 하나씩 가리킨다. "오늘은 문제를 풀며 되짚고, 마지막에 내가 얼마나 할 수 있는지 솔직하게 골라요. 눈금에는 정답이 없어요." 시연 단추로 ㄱ 카드가 자음자 쪽에 들어가는 모습을 보여 준다.',
          student: '한글 놀이 단원에서 무엇을 했나요?',
          demo: { tool: 'mindmap', options: { topic: '자음자와 모음자', shuffle: false, slots: [{ id: 'c', label: '자음자' }, { id: 'v', label: '모음자' }], cards: [J('ㄱ', 'g')] }, sequence: [{ sort: { c: ['g'] } }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 자모와 낱말 나누기', minutes: 8, tool: 'mindmap',
              teacher: '"27차시와 29차시를 떠올려요. 자음자와 모음자, 그리고 첫소리 바구니예요." 다 푼 학생은 짝에게 카드 하나를 골라 이름과 소리를 말해 준다. 이름으로 소리를 읽는 학생([기역아])이 있으면 그 자리에서 [가]로 다시 읽게 한다.',
              task: '자모 카드와 낱말 카드를 알맞은 곳에 나누어 넣어요.',
              levels: { easy: HELP, base: {}, challenge: {} },
              items: [
                { prompt: '자음자와 모음자를 나누어 보세요.', toolOptions: { topic: '자음자와 모음자', slots: [{ id: 'c', label: '자음자' }, { id: 'v', label: '모음자' }], cards: [J('ㅎ', 'h'), J('ㅠ', 'yu'), J('ㅊ', 'ch'), J('ㅕ', 'yeo'), J('ㅇ', 'ng'), J('ㅡ', 'eu')] }, target: { sort: { c: ['h', 'ch', 'ng'], v: ['yu', 'yeo', 'eu'] } }, difficulty: 0.2,
                  levels: { easy: { prompt: '자모 네 개를 자음자와 모음자로 나누어 보세요.', toolOptions: { cards: [J('ㅎ', 'h'), J('ㅠ', 'yu'), J('ㅊ', 'ch'), J('ㅡ', 'eu')] }, target: { sort: { c: ['h', 'ch'], v: ['yu', 'eu'] } } } },
                  hints: ['긴 줄에 짧은 획이 붙은 모양인지, 그렇지 않은지 먼저 봐요.', '줄 하나뿐인 카드나 동그라미가 있는 카드를 어디에 넣었는지 다시 봐요.', '긴 세로줄이나 가로줄에 짧은 획이 붙었거나 줄 하나뿐이면 모음자, 그 밖의 모양은 자음자예요.'] },
                { prompt: '낱말을 첫소리 바구니에 나누어 보세요. 맞는 바구니가 없는 낱말은 그대로 둬요.', toolOptions: { topic: '첫소리 바구니', slots: [{ id: 'p', label: 'ㅍ' }, { id: 'b', label: 'ㅂ' }], cards: [{ id: 'grape', text: '포도' }, { id: 'wave', text: '파도' }, { id: 'pants', text: '바지' }, { id: 'star', text: '별' }, { id: 'tofu', text: '두부' }] }, target: { sort: { p: ['grape', 'wave'], b: ['pants', 'star'] } }, difficulty: 0.3,
                  hints: ['낱말의 첫 글자만 짚고, 그 앞자리 자음자를 봐요. 획이 하나 더 있는지 견주어 봐요.', '뒤 글자에만 바구니의 자음자가 있는 낱말을 넣지 않았는지 다시 봐요.', '첫 글자의 앞자리가 바구니 자음자와 똑같은 낱말만 넣어요. 소리 내어 휴지 놀이처럼 바람 세기를 떠올려도 좋아요.'] },
                { prompt: '말차례를 지키는 말과 행동을 모두 골라 보세요.', toolOptions: { mode: 'pick', basket: '말차례를 지켜요', cards: [{ id: 'wait', text: '친구 말이 끝날 때까지 기다려요' }, { id: 'name', text: '"다음은 지우 차례" 하고 이름을 불러요' }, { id: 'cut', text: '생각나면 바로 끼어들어요' }, { id: 'loud', text: '더 크게 말해서 차례를 가져와요' }] }, target: { pick: ['wait', 'name'] }, difficulty: 0.15,
                  levels: { challenge: { prompt: '말차례를 지키는 말과 행동을 모두 골라 보세요. 헷갈리는 카드가 더 있어요.', toolOptions: { cards: [{ id: 'wait', text: '친구 말이 끝날 때까지 기다려요' }, { id: 'name', text: '"다음은 지우 차례" 하고 이름을 불러요' }, { id: 'repeat', text: '친구 말을 되풀이해 주고 내 말을 해요' }, { id: 'cut', text: '생각나면 바로 끼어들어요' }, { id: 'loud', text: '더 크게 말해서 차례를 가져와요' }, { id: 'long', text: '내 차례에 오래오래 혼자 말해요' }] }, target: { pick: ['wait', 'name', 'repeat'] } } } },
              ],
            },
            {
              id: 'a2', title: '활동 2. 자모와 읽기 차례 놓기', minutes: 8, tool: 'story',
              teacher: '"30차시의 자모 기차와 18차시의 끝까지 읽기를 떠올려요." 차례를 바꾼 학생에게는 처음부터 이름을 이어 부르게 하거나, 읽기 차례를 몸으로 해 보게 한다(책 펴기 → 손가락으로 짚기 → 끝까지 읽기 → 기록장에 쓰기).',
              task: '자모 카드와 읽기 차례 카드를 차례대로 놓아요.',
              levels: { easy: HELP, base: {}, challenge: {} },
              items: [
                { prompt: '자음자를 차례대로 놓아 보세요.', toolOptions: { mode: 'order', slots: ['1', '2', '3', '4'], cards: [J('ㅇ', 'ng'), J('ㅅ', 's'), J('ㅈ', 'j'), J('ㅂ', 'b')] }, target: { order: ['b', 's', 'ng', 'j'] }, difficulty: 0.25,
                  levels: { challenge: { prompt: '자음자 여섯 개를 차례대로 놓아 보세요.', toolOptions: { slots: ['1', '2', '3', '4', '5', '6'], cards: [J('ㅇ', 'ng'), J('ㅋ', 'k'), J('ㅅ', 's'), J('ㅊ', 'ch'), J('ㅈ', 'j'), J('ㅂ', 'b')] }, target: { order: ['b', 's', 'ng', 'j', 'ch', 'k'] } } },
                  hints: ['비읍부터 이름을 차례로 불러 보며 다음 자음자를 찾아요.', '놓은 카드의 이름을 왼쪽부터 불러 보고, 순서가 어긋난 곳을 찾아요.', '비읍, 시옷, 이응, 지읒 차례로 놓아요.'] },
                { prompt: '모음자를 차례대로 놓아 보세요.', toolOptions: { mode: 'order', slots: ['1', '2', '3', '4'], cards: [J('ㅗ', 'o'), J('ㅕ', 'yeo'), J('ㅛ', 'yo'), J('ㅓ', 'eo')] }, target: { order: ['eo', 'yeo', 'o', 'yo'] }, difficulty: 0.25,
                  hints: ['짧은 획 하나인 것 다음에 둘인 것이 와요. 옆으로 나온 것이 위로 나온 것보다 먼저예요.', '놓은 카드를 소리 내어 읽어 보고, 짧은 획 수가 하나, 둘 차례로 바뀌는지 봐요.', '[어], [여], [오], [요] 소리 차례로 놓아요.'] },
                { prompt: '책을 끝까지 읽는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', slots: ['1', '2', '3', '4'], cards: [{ id: 'log', text: '읽기 기록장에 책 제목을 써요' }, { id: 'open', text: '책을 펴요' }, { id: 'end', text: '마지막 쪽까지 읽어요' }, { id: 'point', text: '손가락으로 글자를 짚으며 읽어요' }] }, target: { order: ['open', 'point', 'end', 'log'] }, difficulty: 0.15,
                  levels: { easy: { prompt: '책을 읽는 차례대로 세 장을 놓아 보세요.', toolOptions: { slots: ['1', '2', '3'], cards: [{ id: 'log', text: '읽기 기록장에 책 제목을 써요' }, { id: 'open', text: '책을 펴요' }, { id: 'end', text: '마지막 쪽까지 읽어요' }] }, target: { order: ['open', 'end', 'log'] } } } },
              ],
            },
            {
              id: 'a3', title: '활동 3. 내 실력 솔직하게 고르고 말하기', minutes: 10, tool: 'emotion',
              teacher: '"눈금에는 정답이 없어요. 오늘 내 모습에 가장 가까운 것을 골라요. \'아직\'을 골라도 괜찮아요. 그래야 무엇을 더 연습할지 알 수 있어요." 세 눈금을 고른 뒤 짝과 "내가 잘하는 것은 ○, 더 연습할 것은 ○"이라고 한 문장씩 말한다. 교사는 학생들이 고른 눈금을 평가 점수로 쓰지 않는다는 것을 미리 말해 준다.',
              task: '말차례, 끝까지 읽기, 자모 이름과 소리를 내가 얼마나 할 수 있는지 솔직하게 고르고, 짝과 이야기해요.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '나는 친구 말이 끝날 때까지 기다리고 차례를 넘길 수 있나요? 솔직하게 골라요.', toolOptions: SELF('모둠에서 이야기할 때를 떠올려 봐요.', '편안함', '말차례를 얼마나 지킬 수 있나요?'), target: { level: 'any' }, difficulty: 0.05, hints: SELF_HINTS },
                { prompt: '나는 고른 책을 끝까지 짚으며 읽을 수 있나요? 솔직하게 골라요.', toolOptions: SELF('읽기 시간에 내가 고른 책을 읽을 때를 떠올려 봐요.', '뿌듯함', '책을 얼마나 끝까지 읽을 수 있나요?'), target: { level: 'any' }, difficulty: 0.05, hints: SELF_HINTS },
                { prompt: '나는 자음자와 모음자의 이름과 소리를 말할 수 있나요? 솔직하게 골라요.', toolOptions: SELF('자모 카드를 보고 이름과 소리를 말할 때를 떠올려 봐요.', '기쁨', '자모 이름과 소리를 얼마나 말할 수 있나요?'), target: { level: 'any' }, difficulty: 0.05, hints: SELF_HINTS },
                { prompt: '짝에게 "내가 잘하는 것은 ○, 더 연습할 것은 ○"이라고 말해 보세요.', free: true, talk: true },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"짝에게 말한 \'더 연습할 것\'을 손을 들어 알려 줄 사람?" 두세 명의 말을 듣고, 반 전체가 다음 주에 함께 연습할 것 하나를 정한다. 출구 문항은 단원 전체를 되짚는 것이니 활동에서 쓴 카드를 다시 보지 않고 풀게 한다. 학생이 고른 눈금은 다음 단원 시작 때 다시 고르게 해 스스로 달라진 점을 보게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '자음자 이름이에요', cards: [{ id: 'giyeok', text: '기역' }, { id: 'mieum', text: '미음' }, { id: 'ga', text: '[가]' }, { id: 'eo', text: '[어]' }] }, prompt: '자음자의 이름인 카드를 모두 골라 보세요.', target: { pick: ['giyeok', 'mieum'] }, difficulty: 0.25 },
            { type: 'choice', prompt: '친구가 말하는 중에 나도 할 말이 생겼어요. 어떻게 할까요?', options: ['바로 끼어들어요', '친구 말이 끝날 때까지 기다려요', '더 크게 말해요'], answer: 1, difficulty: 0.15, explain: '친구 말이 끝날 때까지 기다리면 두 사람 말이 모두 잘 들려요.' },
            { type: 'choice', prompt: 'ㅅ에 ㅏ를 붙이면 어떻게 읽을까요?', options: ['[시옷아]', '[사]', '[소]'], answer: 1, difficulty: 0.2, explain: '자음자 소리 [스]와 모음자 소리 [아]를 붙여 [사]로 읽어요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '한글 놀이 되돌아보기',
        items: [
          { type: 'table', prompt: '자모를 자음자와 모음자로 나누어 쓰세요. (ㅎ, ㅠ, ㅊ, ㅕ, ㅇ, ㅡ)', columns: ['자음자', '모음자'], rows: 3 },
          { type: 'blank', prompt: '빠진 자음자를 쓰세요.', text: 'ㅂ - ______ - ㅇ - ㅈ', answer: 'ㅅ' },
          { type: 'choice', prompt: '책을 끝까지 읽은 뒤에 하는 일을 고르세요.', options: ['읽기 기록장에 제목을 써요', '책을 펴요', '첫 쪽만 읽어요'], answer: '읽기 기록장에 제목을 써요' },
          { type: 'check', prompt: '내가 할 수 있는 것에 모두 ✓ 하세요.', options: ['친구 말이 끝날 때까지 기다려요', '고른 책을 끝까지 읽어요', '자음자 이름을 말해요', '자모를 차례대로 써요'] },
          { type: 'short', prompt: '내가 더 연습할 것 하나를 쓰세요.' },
        ],
        easy: {
          note: '모르는 것은 비워 두고, 할 수 있는 것부터 해요.',
          items: [
            { type: 'choice', prompt: 'ㄱ은 자음자일까요, 모음자일까요? ○ 하세요.', options: ['자음자', '모음자'], answer: '자음자' },
            { type: 'blank', prompt: '빠진 자음자를 쓰세요.', text: 'ㄱ - ______ - ㄷ', answer: 'ㄴ' },
            { type: 'check', prompt: '내가 할 수 있는 것에 모두 ✓ 하세요.', options: ['친구 말을 기다려요', '책을 끝까지 읽어요', '자음자 이름을 말해요'] },
            { type: 'draw', prompt: '한글 놀이 단원에서 가장 재미있었던 놀이를 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '자모 나누기는 카드가 네 장이고, 읽기 차례는 세 장이에요. 맞게 넣은 카드에 초록 테두리가 생겨요.',
        base: '카드를 모두 넣은 뒤 확인해요.',
        challenge: '자음자 여섯 개를 차례대로 놓고, 말차례 고르기에 헷갈리는 카드가 더 있어요.',
      },
      teacherNotes: '단원 전체에서 남아 있기 쉬운 오개념: ① 자음자 이름과 소리를 뒤섞어 [기역아]처럼 읽는다. ② ㅗ·ㅜ, ㅂ·ㅍ처럼 모양이나 소리가 비슷한 자모를 바꾼다. ③ 말차례를 "말을 많이 하는 것"으로 여긴다. ④ 책을 끝까지 읽기보다 그림만 넘긴다. 자기 평가 눈금은 정답이 없으며 점수로 쓰지 않는다. \'아직\'을 고른 학생이 많은 영역은 다음 단원 도입에서 짧게 다시 다룬다.',
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
