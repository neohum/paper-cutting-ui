/* 2학년 2학기 통합교과 5. 계절 — [슬기] 사계절의 특징을 살펴보고 분류하기, 끝에 [즐거운] 계절 나무 꾸미기 */
// 장면 레이어 순서: 언덕(배경) → 위치가 있는 모티프 → 글자
const padScene = (hills, placed, texts) => [hills, ...placed, ...texts];

PaperLessons.register({
  id: 'g2-together-seasons',
  schema: 'edu-lesson.v1',
  catalog: { unit: 'g2-통합교과-2학기-5', lesson: 3 },
  grade: 2, subject: '통합교과', unitTitle: '5. 계절',
  title: '계절마다 달라지는 모습 찾기',
  objective: '봄·여름·가을·겨울에 볼 수 있는 자연과 생활 모습을 살펴보고 계절에 따라 나눌 수 있다.',
  standards: ['[2바03-02]', '[2슬03-02]'],
  minutes: 40,
  formats: ['chromebook', 'projector', 'print'],
  illustration: {
    prompt: 'Layered paper-cut illustration of four little trees standing side by side on rolling hills, one with pink spring blossoms, one with thick green summer leaves, one with orange and yellow autumn leaves, and one with bare branches under falling snow, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.',
    scene: { viewBox: [480, 270], layers: padScene({ motif: 'hills', y: 206, colors: ['mint', 'buttercup', 'sky'] }, [
      { motif: 'sun', x: 410, y: 52, s: 0.7 }, { motif: 'cloud', x: 110, y: 50, s: 0.8 }, { motif: 'cloud', x: 300, y: 36, s: 0.6 },
      { motif: 'tree', x: 80, y: 214, color: 'rose' }, { motif: 'tree', x: 190, y: 210, color: 'mint' },
      { motif: 'tree', x: 300, y: 212, color: 'buttercup' }, { motif: 'tree', x: 405, y: 214, color: 'cream' },
      { motif: 'flower', x: 40, y: 246, color: 'rose' }, { motif: 'leaf', x: 268, y: 160, color: 'peach', r: 30 }, { motif: 'leaf', x: 334, y: 176, color: 'rose', r: -20 },
      { motif: 'snow', x: 380, y: 150 }, { motif: 'snow', x: 422, y: 166, r: 3 }, { motif: 'snow', x: 444, y: 140, r: 5 }, { motif: 'bird', x: 220, y: 74 },
    ], [{ motif: 'text', x: 240, y: 112, text: '나무는 계절마다 어떻게 달라질까요?', size: 20 }]) },
  },
  stages: [
    {
      id: 'intro', title: '도입', minutes: 6,
      teacher: '"우리 학교 앞 나무는 봄에는 어땠고, 지금은 어떤가요?" 네 그루 계절 나무를 보여 주고 시연 단추로 카드가 제자리를 찾아가는 모습을 보인다(다시 누르면 처음부터 다시 보여 준다). 나무마다 무엇이 다른지(꽃, 잎 색, 눈) 먼저 말하게 한다.',
      student: '네 나무를 보고, 어떤 나무가 어느 계절의 모습인지 이야기해 봅시다.',
      demo: { tool: 'seasons', options: { cards: ['벚꽃', '수박', '단풍잎', '눈사람'] }, sequence: [{ sorted: { 벚꽃: '봄', 수박: '여름', 단풍잎: '가을', 눈사람: '겨울' } }] },
    },
    {
      id: 'main', title: '전개', minutes: 28,
      activities: [
        {
          id: 'a1', title: '활동 1. 자연에서 찾은 계절', minutes: 9, tool: 'seasons',
          task: '꽃·잎·열매·곤충 카드를 끌어서 알맞은 계절 나무 판에 넣어 봅시다.',
          teacher: '"왜 그 계절이라고 생각했나요?" 카드를 다 옮기면 아래 \'까닭 고르기\'에서 근거를 하나 고른다. 고른 까닭을 날씨(따뜻하다·덥다·선선하다·춥다)와 이어 소리 내어 말하게 한다.',
          levels: { easy: { instant: true, words: true }, base: {}, challenge: { hideSeasonNames: true, whyHard: true } },
          items: [
            { prompt: '벚꽃, 단풍잎, 새싹, 밤 카드를 알맞은 계절 나무로 옮기고, 아래에서 까닭을 고르세요.', difficulty: 0.05,
              toolOptions: { cards: ['벚꽃', '단풍잎', '새싹', '밤'], why: { card: '단풍잎', ask: '단풍잎이 붉고 노랗게 물드는 까닭은 무엇일까요?', choices: ['날이 따뜻해져 싹이 트기 때문이에요', '날이 선선해지고 차가워지기 때문이에요', '햇볕이 아주 뜨겁기 때문이에요'], hard: '나무가 나이를 먹어 늙었기 때문이에요' } },
              target: { sorted: { 벚꽃: '봄', 단풍잎: '가을', 새싹: '봄', 밤: '가을' }, why: 1 } },
            { prompt: '해바라기, 고추잠자리, 개나리, 감 카드를 알맞은 계절 나무로 옮기고, 아래에서 까닭을 고르세요.', difficulty: 0.15,
              toolOptions: { cards: ['해바라기', '고추잠자리', '개나리', '감'], why: { card: '해바라기', ask: '해바라기가 활짝 피는 때를 고른 까닭은 무엇일까요?', choices: ['노란 꽃이라서 개나리와 같은 때에 피어요', '햇볕이 뜨겁고 더울 때 크게 자라 피어요', '찬 바람이 불 때 피어요'], hard: '잎보다 꽃이 먼저 피어요' } },
              target: { sorted: { 해바라기: '여름', 고추잠자리: '가을', 개나리: '봄', 감: '가을' }, why: 1 } },
            { prompt: '봄에 볼 수 있는 것만 모두 골라 봄 나무 판에 넣고, 아래에서 까닭을 고르세요.', difficulty: 0.1,
              toolOptions: { cards: ['나비', '단풍잎', '개나리', '해바라기', '새싹', '밤'], why: { card: '새싹', ask: '봄에 새싹이 돋고 꽃이 피는 까닭은 무엇일까요?', choices: ['날이 따뜻해져 얼었던 땅이 녹기 때문이에요', '날이 추워 물이 꽁꽁 얼기 때문이에요', '날이 선선해 잎이 물들기 때문이에요'], hard: '비가 많이 오고 아주 덥기 때문이에요' } },
              target: { season: '봄', cards: ['나비', '개나리', '새싹'], why: 0 } },
          ],
        },
        {
          id: 'a2', title: '활동 2. 생활 속 계절', minutes: 10, tool: 'seasons',
          task: '우리가 먹고, 입고, 노는 모습 카드를 알맞은 계절로 나누어 봅시다.',
          teacher: '"부채와 장갑은 언제 쓰나요? 그때 날씨는 어떤가요?" 계절에 따라 옷차림과 놀이가 달라지는 까닭(더위·추위)을 이어서 묻는다.',
          levels: { easy: { instant: true, words: true }, base: {}, challenge: { hideSeasonNames: true, whyHard: true } },
          items: [
            { prompt: '수박, 부채, 장갑, 목도리 카드를 알맞은 계절 나무로 옮기고, 아래에서 까닭을 고르세요.', difficulty: 0,
              toolOptions: { cards: ['수박', '부채', '장갑', '목도리'], why: { card: '장갑', ask: '장갑과 목도리를 쓰는 까닭은 무엇일까요?', choices: ['더워서 땀을 식히려고', '비가 와서 옷이 젖지 않으려고', '추워서 몸을 따뜻하게 하려고'], hard: '멋을 내려고 아무 때나 써요' } },
              target: { sorted: { 수박: '여름', 부채: '여름', 장갑: '겨울', 목도리: '겨울' }, why: 2 } },
            { prompt: '눈사람, 썰매, 튜브, 나비 카드를 알맞은 계절 나무로 옮기고, 아래에서 까닭을 고르세요.', difficulty: 0.05,
              toolOptions: { cards: ['눈사람', '썰매', '튜브', '나비'], why: { card: '튜브', ask: '튜브를 들고 물놀이를 가는 까닭은 무엇일까요?', choices: ['날이 더워서 시원한 물이 좋아서', '눈이 쌓여서 미끄러워서', '꽃이 피어서 구경하려고'], hard: '바람이 선선해서 걷기 좋아서' } },
              target: { sorted: { 눈사람: '겨울', 썰매: '겨울', 튜브: '여름', 나비: '봄' }, why: 0 } },
            { prompt: '겨울과 가장 잘 어울리는 카드를 모두 골라 겨울 나무 판에 넣고, 아래에서 까닭을 고르세요.', difficulty: 0.05,
              toolOptions: { cards: ['눈사람', '장갑', '부채', '목도리', '해바라기', '튜브'], why: { card: '눈사람', ask: '이 카드들이 겨울과 가장 잘 어울리는 까닭은 무엇일까요?', choices: ['햇볕이 뜨거워서', '눈이 오고 손이 시릴 만큼 추워서', '잎이 붉게 물들어서'], hard: '바람이 조금 선선해서' } },
              target: { season: '겨울', cards: ['눈사람', '장갑', '목도리'], why: 1 } },
          ],
        },
        {
          id: 'a3', title: '활동 3. 내가 좋아하는 계절 나무 꾸미기', minutes: 9, tool: 'seasons', pair: true,
          task: '내가 좋아하는 계절 나무를 그림 카드 스티커로 마음껏 꾸미고, 짝에게 그 계절이 좋은 까닭을 소개해 봅시다.',
          teacher: '[즐거운] 정답이 없는 놀이다. 카드는 나무 판 아무 곳에나 몇 장이든 붙일 수 있고, 누르면 크기가 바뀐다. 다른 계절 카드를 붙인 학생도 고치지 말고 "왜 붙였나요?"라고 경험(예: 겨울에 먹은 수박)을 묻는다. 다 꾸민 학생은 그 계절 놀이(부채질, 눈사람 만들기 등)를 몸으로 흉내 내며 소개하게 한다.',
          levels: { easy: { words: true }, base: {}, challenge: { hideSeasonNames: true } },
          items: [{ prompt: '카드를 나무 판에 끌어 놓으면 스티커가 붙어요. 같은 카드를 여러 장 붙여도 되고, 스티커를 누르면 크기가 바뀌어요. 다 꾸몄으면 짝에게 소개하고 "다 했어요"를 누르세요.', free: true, difficulty: 0, toolOptions: { decorate: true, cards: ['벚꽃', '개나리', '나비', '수박', '해바라기', '튜브', '단풍잎', '고추잠자리', '밤', '눈사람', '장갑', '썰매'] } }],
        },
      ],
    },
    {
      id: 'wrapup', title: '정리', minutes: 6,
      teacher: '"오늘 찾은 것 가운데 지금(가을)과 어울리는 것은 무엇이었나요?" 출구 질문 결과를 보고, 많이 틀린 카드(예: 고추잠자리·해바라기)와 많이 틀린 까닭 고르기를 날씨와 함께 다시 짚는다.',
      exitTicket: [
        { type: 'choice', prompt: '가을에 볼 수 있는 모습은 무엇인가요?', options: ['벚꽃이 활짝 펴요', '나뭇잎이 붉고 노랗게 물들어요', '꽁꽁 언 땅에 눈이 쌓여요'], answer: 1, difficulty: 0, explain: '가을에는 날이 선선해지면서 초록 잎이 붉고 노랗게 물들어요.' },
        { type: 'tool', tool: 'seasons', options: { cards: ['새싹', '수박', '밤', '썰매'] }, prompt: '네 카드를 알맞은 계절 나무로 옮기세요.', target: { sorted: { 새싹: '봄', 수박: '여름', 밤: '가을', 썰매: '겨울' } }, difficulty: 0.05, explain: '새싹은 따뜻한 봄, 수박은 더운 여름, 밤은 선선한 가을, 썰매는 눈 오는 겨울과 어울려요.' },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
  ],
  worksheet: {
    title: '계절마다 달라지는 모습',
    items: [
      { type: 'figure', prompt: '나무 모습을 보고 어느 계절인지 쓰세요.', tool: 'seasons', figures: [
        { options: { view: 'tree', season: '봄' }, caption: '(\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0)' }, { options: { view: 'tree', season: '가을' }, caption: '(\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0)' }, { options: { view: 'tree', season: '겨울' }, caption: '(\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0)' }], answer: '봄, 가을, 겨울' },
      { type: 'figure', prompt: '그림 카드와 어울리는 계절을 쓰세요.', tool: 'seasons', figures: [
        { options: { view: 'card', card: '개나리' }, caption: '(\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0)' }, { options: { view: 'card', card: '해바라기' }, caption: '(\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0)' }, { options: { view: 'card', card: '목도리' }, caption: '(\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0)' }], answer: '봄, 여름, 겨울' },
      { type: 'table', prompt: '계절마다 볼 수 있는 것을 하나씩 더 써 보세요.', columns: ['봄', '여름', '가을', '겨울'], rows: 1, answer: '예) 봄: 진달래·올챙이, 여름: 매미·팥빙수, 가을: 코스모스·벼 베기, 겨울: 고드름·털모자 (경험에 맞으면 모두 인정)' },
      { type: 'draw', prompt: '좋아하는 계절의 나무와 그 계절에 하고 싶은 놀이를 그려 보세요.', answer: '정답 없음 — 계절과 놀이가 이어지면 인정' },
    ],
    easy: {
      note: '봄은 따뜻하고 꽃이 피어요. 여름은 덥고 잎이 무성해요. 가을은 선선하고 잎이 물들어요. 겨울은 춥고 눈이 와요.',
      items: [
        { type: 'figure', prompt: '나무 모습을 보고 알맞은 계절에 ○표 하세요.', tool: 'seasons', figures: [
          { options: { view: 'tree', season: '봄' }, caption: '봄 여름 가을 겨울' }, { options: { view: 'tree', season: '가을' }, caption: '봄 여름 가을 겨울' }, { options: { view: 'tree', season: '겨울' }, caption: '봄 여름 가을 겨울' }], answer: '봄, 가을, 겨울' },
        { type: 'figure', prompt: '그림 카드와 어울리는 계절에 ○표 하세요.', tool: 'seasons', figures: [
          { options: { view: 'card', card: '개나리' }, caption: '봄 여름 가을 겨울' }, { options: { view: 'card', card: '해바라기' }, caption: '봄 여름 가을 겨울' }, { options: { view: 'card', card: '목도리' }, caption: '봄 여름 가을 겨울' }], answer: '봄, 여름, 겨울' },
        { type: 'draw', prompt: '좋아하는 계절의 나무와 그 계절에 하고 싶은 놀이를 그려 보세요.' },
      ],
    },
  },
  differentiation: {
    easy: '카드를 누르면 무엇인지 쉬운 말로 한 줄 알려 줘요. 잘못 넣으면 "언제 많이 보았나요?"라고 묻고 카드가 돌아와요.',
    challenge: '나무 판의 계절 이름이 ?로 가려져 나무 모습만 보고 계절을 알아내야 해요. 까닭 고르기에는 헷갈리는 선택지가 하나 더 나와요.',
  },
  teacherNotes: '① 한 가지 모습이 한 계절에만 있다고 단정하지 않도록 한다. 잠자리는 여름에도 흔하므로 카드는 빨간 고추잠자리로 정하고 가을로 채점한다. 학생이 "여름에도 봤어요"라고 하면 그 경험이 맞다고 인정하고, 빨간 고추잠자리가 높고 맑은 하늘에 무리 지어 나는 때가 가을임을 이어 준다. ② 해바라기를 노란 꽃이라서 봄꽃으로 생각하는 경우가 많다. 개나리(봄, 잎보다 꽃이 먼저)와 해바라기(한여름)를 비교한다. 활동 1의 둘째 까닭 고르기가 이 오개념을 직접 묻는다. ③ 감과 밤은 열매가 익는 때(가을)를 기준으로 한다. 늦가을·초겨울까지 매달린 감(까치밥)도 있어 겨울 문항에는 감을 넣지 않았다. 장갑·목도리도 늦가을에 쓰므로 겨울 문항은 "가장 잘 어울리는"으로 묻는다. ④ 계절의 특징은 날씨(기온) 변화와 이어서 말하게 한다: 따뜻하다 → 덥다 → 선선하다 → 춥다. 까닭 고르기는 이 연결을 말로 꺼내게 하는 장치이므로, 고른 뒤 짝에게 소리 내어 말하게 한다. ⑤ 활동 3은 정답이 없다. 스티커를 어떤 계절에 붙였는지로 평가하지 않고, 소개하는 말에 계절의 특징(날씨·놀이)이 들어 있는지를 본다.',
});
