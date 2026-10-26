/* 2학년 1학기 5. 분류하기 — 분명한 기준을 정하여 분류하고, 분류한 결과를 세어 말하기 */
(function () {
const BLANK = '(              )';
// 카드 id: 색(r 빨강·b 파랑·y 노랑) + 구멍 수(2·4) + 모양(c 동그라미·s 네모·t 세모)
const SET9 = ['r2c', 'b4s', 'y2t', 'r4c', 'b2s', 'y4t', 'r2t', 'r4s', 'y2c']; // 구멍 2개 5 · 4개 4 / 빨강 4 · 파랑 2 · 노랑 3
PaperLessons.register({
  id: 'g2-math-sort',
  schema: 'edu-lesson.v1',
  catalog: { unit: 'g2-수학-1학기-5', lesson: 3 },
  grade: 2, subject: '수학', unitTitle: '5. 분류하기',
  title: '분명한 기준으로 나누고 세어 보기',
  objective: '누가 나누어도 결과가 같은 분명한 기준을 정하여 물건을 분류하고, 분류한 결과를 세어 말할 수 있다.',
  standards: ['[2수04-01]'],
  minutes: 40,
  formats: ['chromebook', 'projector', 'print'],
  illustration: {
    prompt: "Layered paper-cut illustration of a child's wooden table with three shallow paper trays where colorful round buttons with two and four holes are being sorted by color, a small paper squirrel placing a red button into the red tray, no text or numbers anywhere, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.",
    image: 'img/g2-math-sort.webp', size: [1200, 800],
    scene: { viewBox: [480, 270], layers: [
      { motif: 'sun', x: 412, y: 56, s: 0.8 }, { motif: 'cloud', x: 110, y: 50 }, { motif: 'cloud', x: 300, y: 36, s: 0.7 },
      { motif: 'hills', y: 204, colors: ['buttercup', 'mint', 'peach'] },
      { motif: 'tree', x: 60, y: 214 }, { motif: 'tree', x: 428, y: 218, color: 'mint', s: 0.9 },
      // 단추: 빨강 3 · 파랑 2 · 노랑 2 — 색으로도, 구멍 수로도 나눌 수 있게 섞어 둔다
      { motif: 'button', x: 150, y: 190, c: 'r' }, { motif: 'button', x: 186, y: 206, c: 'b', holes: 4 }, { motif: 'button', x: 222, y: 188, c: 'y' },
      { motif: 'button', x: 258, y: 210, c: 'r', holes: 4 }, { motif: 'button', x: 294, y: 190, c: 'b' }, { motif: 'button', x: 330, y: 208, c: 'y', holes: 4 }, { motif: 'button', x: 364, y: 190, c: 'r' },
      { motif: 'bird', x: 230, y: 76 },
      { motif: 'text', x: 240, y: 140, text: '단추를 어떻게 나누면 좋을까요?', size: 22 },
    ] },
  },
  stages: [
    {
      id: 'intro', title: '도입', minutes: 6,
      teacher: '"단추 상자가 뒤죽박죽이에요. 어떻게 나누어 정리하면 좋을까요?" 몇 명에게 기준을 말하게 하고 칠판에 적는다(예쁜 것, 색깔, 큰 것 …). 시연 단추를 눌러 같은 단추가 색깔로 나뉘었다가 구멍 수로 다시 나뉘는 모습을 보여 준다. "기준이 바뀌니 묶음이 어떻게 달라졌나요?"',
      student: '단추를 어떻게 나누면 정리가 잘 될지 생각해 봐요.',
      demo: { tool: 'sortboard', options: { cards: ['r2c', 'b4s', 'y2t', 'r4t', 'b2c', 'y4s'] }, sequence: [{ by: '색' }, { by: '구멍' }] },
    },
    {
      id: 'main', title: '전개', minutes: 26,
      activities: [
        {
          id: 'a1', title: '활동 1. 분명한 기준 고르기', minutes: 8, tool: 'sortboard',
          task: '위에서 무엇으로 나눌지 기준을 고르고, 단추 카드를 알맞은 칸에 끌어 넣어 봅시다.',
          teacher: '"예쁜 것과 안 예쁜 것으로 나누면 짝과 내가 똑같이 나눌까요?" 예측을 먼저 고르게 한 뒤, 실제로 그 단추를 눌러 보게 한다. 짝과 결과를 맞대어 보며 "누가 나누어도 같은 기준"이 분명한 기준임을 정리한다.',
          // 쉬움: 단추 5개, 칸 이름 옆에 지금 개수, 맞지 않는 칸에 넣으면 까닭을 말하고 되돌아옴 / 기본: 단추 6~7개 / 도전: 단추 3개 더
          levels: { easy: { limit: 5, instant: true, showCount: true }, base: {}, challenge: { more: 3 } },
          items: [
            {
              prompt: '기준을 하나 골라 단추를 나누어 보세요. 누가 나누어도 똑같이 나뉘는 기준이어야 해요.',
              predict: { q: '단추를 ‘예쁜 것’과 ‘안 예쁜 것’으로 나누면, 나와 짝이 나눈 결과가 똑같을까요?', options: ['똑같아요', '다를 수 있어요'], answer: 1 },
              toolOptions: { cards: ['r2c', 'y2t', 'b4s', 'b2c', 'r4t', 'y4s'], criteria: ['예쁜', '색', '모양', '구멍'] },
              target: { clear: true }, difficulty: 0.12,
              conclude: '누가 나누어도 결과가 같은 기준이 분명한 기준이에요.',
            },
            {
              prompt: '이번에는 색깔로 나누어 보세요.',
              toolOptions: { cards: ['r2c', 'b4c', 'y2s', 'r4t', 'b2t', 'y4c', 'r2s'] },
              target: { by: '색' }, difficulty: 0.05,
            },
            {
              prompt: '같은 단추를 모양으로 나누어 보세요. 색깔은 보지 않아요.',
              toolOptions: { cards: ['r4c', 'b2s', 'y4t', 'b4c', 'y2c', 'r2t', 'b4s'] },
              target: { by: '모양' }, difficulty: 0.15,
              conclude: '한 번 정한 기준만 끝까지 보고 나누어요.',
            },
          ],
        },
        {
          id: 'a2', title: '활동 2. 나누고 세어 말하기', minutes: 10, tool: 'sortboard',
          task: '단추를 기준에 따라 나눈 뒤, 칸마다 몇 개인지 세어 아래에 수를 넣어 봅시다.',
          teacher: '"구멍 2개인 단추는 몇 개인가요? 어느 쪽이 더 많나요?" 센 수를 문장으로 말하게 한다("구멍 2개인 단추는 5개예요"). 같은 단추를 색깔로 다시 나눈 뒤 "단추는 모두 몇 개인가요? 아까와 같나요?"를 묻는다.',
          // 쉬움: 단추 6개, 맞지 않는 칸은 되돌아옴, 칸 개수는 확인 뒤에 보임 / 기본: 단추 9개 / 도전: 단추 12개, '예쁜 것' 기준도 섞임
          levels: { easy: { limit: 6, instant: true, showCount: true }, base: {}, challenge: { more: 3, criteria: ['색', '예쁜', '구멍', '모양'] } },
          items: [
            {
              prompt: '구멍 수로 나누고, 칸마다 몇 개인지 세어 넣으세요.',
              predict: { q: '세기 전에 어림해 봐요. 어느 쪽이 더 많을까요?', options: ['구멍 2개', '구멍 4개', '똑같아요'], answer: 0 },
              toolOptions: { cards: SET9 }, reveal: 'after-check',
              target: { by: '구멍', counts: true }, difficulty: 0.15,
              conclude: '나눈 뒤에 세면 어느 쪽이 더 많은지 바로 말할 수 있어요.',
            },
            {
              prompt: '같은 단추를 이번에는 색깔로 다시 나누고 세어 넣으세요.',
              predict: { q: '색깔로 다시 나누면, 구멍 2개 칸에 있던 단추들이 모두 한 칸에 모일까요?', options: ['네, 한 칸에 모여요', '아니요, 여러 칸으로 흩어져요'], answer: 1 },
              toolOptions: { cards: SET9 }, state: { by: '구멍', sorted: true }, reveal: 'after-check',
              target: { by: '색', counts: true }, difficulty: 0.2,
              conclude: '기준이 바뀌면 묶음이 바뀌어요. 그래도 단추는 모두 9개 그대로예요.',
            },
            {
              prompt: '더 해 보기: 색깔 말고 다른 분명한 기준으로 나누고 세어 넣으세요.',
              toolOptions: { cards: ['b2t', 'y4s', 'r2s', 'b4t', 'y2s', 'r4c', 'b2c', 'y4c', 'r2t', 'b4s'] }, reveal: 'after-check',
              target: { clear: true, not: '색', counts: true }, extra: true, difficulty: 0.2,
            },
          ],
        },
        {
          id: 'a3', title: '활동 3. 짝의 기준 맞히기', minutes: 8, tool: 'sortboard', pair: true,
          task: '한 사람이 몰래 기준을 정해 단추를 나누면, 짝은 칸을 보고 어떤 기준인지 맞혀 봅시다.',
          teacher: '짝끼리 번갈아 한다. 나눈 사람은 칸 이름을 손으로 가리고, 맞히는 사람은 "○○으로 나누었구나. 왜냐하면 이 칸에는 모두 ○○이기 때문이야."처럼 까닭을 붙여 말한다. 맞히기 어려우면 나눈 기준이 분명하지 않았는지 함께 살핀다.',
          levels: { easy: { limit: 6, showCount: true }, base: {}, challenge: { more: 3 } },
          items: [{ prompt: '기준을 몰래 골라 단추를 나누고, 짝이 기준을 맞히면 "다 했어요"를 누르세요.', free: true, toolOptions: { cards: ['y2c', 'r4s', 'b2t', 'y4s', 'r2c', 'b4c', 'y2t', 'r4t'] } }],
        },
      ],
    },
    {
      id: 'wrapup', title: '정리', minutes: 8,
      teacher: '"분명한 기준은 어떤 기준인가요?" 출구 질문 결과에서 1번(기준 고르기)과 3번(기준을 바꾸어도 전체 수는 같음)을 틀린 학생을 다음 차시(분류하여 세어 보기)에서 먼저 살핀다.',
      exitTicket: [
        { type: 'choice', prompt: '과일을 나누려고 해요. 분명한 기준은 어느 것일까요?', options: ['좋아하는 과일과 싫어하는 과일', '껍질 색깔로 나누기(빨강·노랑·초록·보라)', '맛있는 과일과 맛없는 과일'], answer: 1, difficulty: 0.1, explain: '좋아하는 것·맛있는 것은 사람마다 달라요. 껍질 색깔은 누가 보아도 같고, 모든 과일이 어느 한 색 칸에 들어가서 분명한 기준이에요.' },
        { type: 'tool', tool: 'sortboard', options: { cards: ['y2c', 'b2t', 'r4s', 'y4t', 'b4s', 'r2c', 'y2s'], askCount: true }, prompt: '단추를 모양으로 나누고, 칸마다 몇 개인지 세어 넣으세요.', target: { by: '모양', counts: true }, difficulty: 0.15, explain: '모양으로 나누면 동그라미 2개, 네모 3개, 세모 2개예요.' },
        { type: 'choice', prompt: '단추 9개를 색깔로 나누었다가, 다시 모양으로 나누었어요. 모양으로 나눈 칸의 단추를 모두 세면 몇 개일까요?', options: ['9개보다 적어요', '9개예요', '9개보다 많아요'], answer: 1, difficulty: 0.15, explain: '기준을 바꾸어도 단추를 더하거나 빼지 않았으니 모두 9개 그대로예요.' },
        { type: 'choice', prompt: '단추를 색깔로 나누어 세었더니 빨강 2개, 파랑 5개, 노랑 3개였어요. 가장 많은 색은 무엇인가요?', options: ['빨강', '파랑', '노랑'], answer: 1, difficulty: 0.05, explain: '5가 가장 큰 수라서 파랑 단추가 가장 많아요.' },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
  ],
  worksheet: {
    title: '기준을 정하여 나누고 세기',
    items: [
      { type: 'figure', wide: true, prompt: '단추를 모양으로 나누어요. 같은 모양 단추에 같은 표시를 하세요(동그라미 단추는 ○, 네모 단추는 □, 세모 단추는 △). 한 번 표시한 단추는 다시 표시하지 않아요.', tool: 'sortboard', figures: [{ options: { cards: ['r2c', 'b4s', 'y2t', 'r4s', 'b2c', 'y4t', 'r2t', 'b2s'] }, caption: '' }], answer: '○ 2개, □ 3개, △ 3개 표시' },
      { type: 'table', prompt: '위에서 표시한 ○, □, △를 세어 표에 쓰세요.', columns: ['동그라미', '네모', '세모'], rows: 1, answer: '2, 3, 3' },
      { type: 'figure', wide: true, prompt: '단추를 두 칸으로 나누었어요. 칸 위 (    )에는 칸 이름을, 아래 ‘기준: (    )’에는 무엇으로 나누었는지 쓰세요.', tool: 'sortboard', figures: [{ options: { by: '구멍', cards: ['r2c', 'b4s', 'y2t', 'r4c', 'b2s', 'y4t'] }, state: { by: '구멍', sorted: true }, caption: `기준: ${BLANK}` }], answer: '구멍 수 (구멍 2개 / 구멍 4개)' },
      { type: 'choice', prompt: '친구들을 나누려고 해요. 분명한 기준에 ○ 하세요.', options: ['키가 큰 친구와 작은 친구', '안경을 쓴 친구와 안 쓴 친구', '재미있는 친구와 재미없는 친구'], answer: '안경을 쓴 친구와 안 쓴 친구' },
      { type: 'short', prompt: '우리 교실의 물건(예: 크레파스, 책) 하나를 골라, 어떤 기준으로 나누면 좋을지 까닭과 함께 쓰세요.', answer: '예) 크레파스를 색깔로 나눠요. 누가 보아도 색은 똑같이 말할 수 있으니까요.' },
    ],
    easy: {
      note: '분명한 기준은 누가 나누어도 똑같이 나뉘어요. 색깔, 모양, 구멍 수처럼 눈으로 보고 똑같이 말할 수 있는 것을 골라요.',
      items: [
        { type: 'figure', wide: true, prompt: '같은 모양 단추에 같은 표시를 하세요(동그라미는 ○, 네모는 □, 세모는 △).', tool: 'sortboard', figures: [{ options: { cards: ['r2c', 'b4s', 'y2t', 'b2c', 'y4s', 'r2s'] }, caption: '' }], answer: '○ 2개, □ 3개, △ 1개 표시' },
        { type: 'table', prompt: '표시한 ○, □, △를 세어 표에 쓰세요.', columns: ['동그라미', '네모', '세모'], rows: 1, answer: '2, 3, 1' },
        { type: 'choice', prompt: '분명한 기준에 ○ 하세요.', options: ['예쁜 단추와 안 예쁜 단추', '구멍이 2개인 단추와 4개인 단추'], answer: '구멍이 2개인 단추와 4개인 단추' },
      ],
    },
  },
  differentiation: {
    easy: '단추 카드가 5~6개로 줄고, 칸 이름 옆에 들어간 개수가 보여요(세기 문항은 확인을 누른 뒤에 보여요). 맞지 않는 칸에 넣으면 단추의 색·모양·구멍을 짚어 주며 되돌아와요.',
    base: '단추 7~9개를 스스로 나누고 세어요. 틀리면 어느 단추가 맞지 않는지 흔들어 보여 주고, 한 칸에 다른 기준이 섞였으면 그것을 알려 줘요.',
    challenge: '단추가 3개 더 늘고, 활동 2에서는 ‘예쁜 것’ 기준이 함께 나와 분명한 기준을 스스로 가려야 해요.',
  },
  teacherNotes: '자주 보이는 어려움: ① ‘예쁜 것·좋아하는 것’처럼 사람마다 다른 기준을 고른다 → 짝과 결과를 맞대어 다르게 나뉘는 것을 직접 보게 하고, "누가 나누어도 같은가?"로 기준을 다시 고르게 한다. ② 나누는 도중에 기준이 바뀐다(빨강 칸에 동그라미 단추를 모두 모음) → 교구가 "기준이 섞였어요"라고 알려 준다. 한 번 정한 기준을 말로 되뇌며 끝까지 지키게 한다. ③ 기준을 바꾸면 전체 개수도 바뀐다고 생각한다 → 활동 2의 둘째 문항에서 같은 9개를 다시 나누고 합이 같은지 확인한다. ④ 세다가 같은 단추를 두 번 세거나 빠뜨린다 → 칸 안의 단추를 왼쪽부터 짚으며 세고, 칸마다 센 수를 더해 전체 수와 맞는지 본다. ⑤ 칸 이름(빨강)과 센 수(4)를 섞어 말한다 → "빨강 단추는 4개예요"처럼 기준 값과 수를 한 문장으로 말하게 한다. 흑백 활동지에서는 단추 아래에 색 이름이 작게 적혀 있다.',
});
})();
