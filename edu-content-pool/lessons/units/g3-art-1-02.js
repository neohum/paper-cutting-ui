/* 3학년 1학기 미술 2. 표현 — 관찰과 상상으로 표현 주제 정하기(1~10차시), 조형 요소로 주제 살리기(11~20차시),
 * 기본 재료와 용구 익히기(21~29차시). 같은 꼴이 되풀이되는 칸(차시 머리·그림 문장 틀·짝 활동 문항)만 아래 도우미로 만들고,
 * 차시 내용은 모두 그대로 적는다.
 */
(function () {
  'use strict';
  const UNIT = 'g3-미술-1학기-2';
  const TITLE = '2. 표현';
  const S1 = '[4미02-01]';
  const S2 = '[4미02-02]';
  const S3 = '[4미02-03]';
  const art = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const scene = (layers) => ({ viewBox: [480, 270], layers });
  const lesson = (n, std, body) => Object.assign({
    id: `g3-art-1-02-${String(n).padStart(2, '0')}`, schema: 'edu-lesson.v1',
    catalog: { unit: UNIT, lesson: n }, grade: 3, subject: '미술', unitTitle: TITLE,
    standards: [std], minutes: 40, formats: ['chromebook', 'projector', 'print'],
  }, body);
  // 짝 활동(실제 재료·관찰·말하기) 문항: 화면에는 할 일을 떠올리게 하는 낱말 판만 보이고, 말하거나 한 뒤 '다 했어요'를 누른다
  const talk = (prompt, topic, labels, words) => ({
    prompt, free: true, talk: true, difficulty: 0,
    toolOptions: { topic, slots: labels.map((label, i) => ({ id: `k${i + 1}`, label })), cards: words.map((text, i) => ({ id: `w${i + 1}`, text })) },
  });
  const lessons = [];

  // ───────────── 1차시 (단원 도입) ─────────────
  lessons.push(lesson(1, S1, {
    title: '은행나무를 살펴 본 것과 상상한 것 나누기',
    objective: '나무를 살펴 눈으로 본 것과 거기서 떠올린 상상을 갈라 말하고, 그 가운데 그리고 싶은 생각 하나를 골라 까닭을 말할 수 있다.',
    illustration: {
      prompt: art('a child at a classroom window looking at a ginkgo tree, while imagined paper butterflies fly out of the yellow leaves'),
      scene: scene([
        { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 110, y: 50 }, { motif: 'hills', y: 212 },
        { motif: 'tree', x: 140, y: 218, s: 1.3 }, { motif: 'bird', x: 300, y: 90 }, { motif: 'leaf', x: 360, y: 190, r: 20 },
        { motif: 'text', x: 260, y: 146, text: '본 것에서 상상까지', size: 22 },
      ]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"미술 시간에 그릴 거리는 어디에서 찾을 수 있을까요?" 대답을 몇 개 받은 뒤 창밖 나무를 가리킨다. "저 나무에서 지금 눈에 보이는 것을 하나 말해 볼까요?" 다음에 "저 나무가 밤에 무엇을 할 것 같나요?"라고 묻는다. 두 대답을 칠판 왼쪽(본 것)과 오른쪽(상상한 것)에 나누어 적고 "그릴 거리는 눈으로 본 것에서도, 머릿속 상상에서도 와요. 이번 단원은 그 둘로 내 주제를 정하는 데서 시작해요"라고 연다. 시연 단추로 카드 두 장이 두 가지로 나뉘는 모습을 보여 준다.',
        student: '창밖 나무에서 지금 보이는 것 하나와, 그 나무가 밤에 할 것 같은 일 하나를 말해 봅시다.',
        demo: { tool: 'mindmap', options: { topic: '창밖 나무', slots: [{ id: 'see', label: '눈으로 본 것' }, { id: 'imag', label: '상상한 것' }], cards: [{ id: 'd1', text: '가지에 잎이 달려 있어요' }, { id: 'd2', text: '밤이면 나무가 노래해요' }] }, sequence: [{ sort: { see: ['d1'], imag: ['d2'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 본 것과 상상한 것 가르기', minutes: 9, tool: 'mindmap',
            teacher: '"지금 이 나무 앞에 서면 누구나 볼 수 있나요?" 그렇다면 본 것, 내 머릿속에서만 일어나는 일이면 상상한 것이라는 기준을 세운다. 도전 단계에는 "나무는 물을 먹고 자라요"처럼 본 것도 상상도 아닌, 책에서 알게 된 사실 카드가 섞여 있다. "지금 눈으로 볼 수 있나요? 내가 지어낸 것인가요?" 두 번 물어 둘 다 아니면 어디에도 넣지 않게 한다.',
            task: '카드를 읽고, 그 자리에 서면 누구나 볼 수 있는 것인지 내 머릿속에서 지어낸 것인지 나누어요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '은행나무를 살피고 떠올린 카드를 본 것과 상상한 것으로 나누어 보세요.',
                toolOptions: { topic: '은행나무', slots: [{ id: 'see', label: '눈으로 본 것' }, { id: 'imag', label: '상상한 것' }], cards: [{ id: 'g1', text: '잎 끝이 두 갈래로 갈라졌어요' }, { id: 'g2', text: '줄기 껍질에 세로 줄이 있어요' }, { id: 'g3', text: '가지 위에 까치집이 있어요' }, { id: 'g4', text: '밤이면 나무가 걸어 다녀요' }, { id: 'g5', text: '잎이 나비가 되어 날아가요' }] },
                levels: { challenge: { prompt: '은행나무 카드를 본 것과 상상한 것으로 나누어 보세요. 본 것도 상상도 아닌 카드 하나는 남겨 두세요.', toolOptions: { cards: [{ id: 'g1', text: '잎 끝이 두 갈래로 갈라졌어요' }, { id: 'g2', text: '줄기 껍질에 세로 줄이 있어요' }, { id: 'g3', text: '가지 위에 까치집이 있어요' }, { id: 'g4', text: '밤이면 나무가 걸어 다녀요' }, { id: 'g5', text: '잎이 나비가 되어 날아가요' }, { id: 'gx', text: '나무는 물을 먹고 자라요' }] } } },
                hints: ['카드마다 "그 나무 앞에 서면 누구나 볼 수 있을까?"를 물어요. 그렇지 않고 내가 지어낸 일이면 다른 칸이에요.'],
                target: { sort: { see: ['g1', 'g2', 'g3'], imag: ['g4', 'g5'] } }, difficulty: 0.15 },
              { prompt: '구름 낀 하늘을 살피고 떠올린 카드를 본 것과 상상한 것으로 나누어 보세요.',
                toolOptions: { topic: '구름 낀 하늘', slots: [{ id: 'see', label: '눈으로 본 것' }, { id: 'imag', label: '상상한 것' }], cards: [{ id: 'k1', text: '구름이 오른쪽으로 천천히 움직여요' }, { id: 'k2', text: '구름 사이로 해가 반쯤 보여요' }, { id: 'k3', text: '구름 위에 솜사탕 가게가 있어요' }, { id: 'k4', text: '구름이 고래가 되어 노래해요' }] },
                levels: { challenge: { prompt: '구름 하늘 카드를 본 것과 상상한 것으로 나누어 보세요. 본 것도 상상도 아닌 카드 하나는 남겨 두세요.', toolOptions: { cards: [{ id: 'k1', text: '구름이 오른쪽으로 천천히 움직여요' }, { id: 'k2', text: '구름 사이로 해가 반쯤 보여요' }, { id: 'k3', text: '구름 위에 솜사탕 가게가 있어요' }, { id: 'k4', text: '구름이 고래가 되어 노래해요' }, { id: 'kx', text: '구름은 작은 물방울로 되어 있어요' }] } } },
                target: { sort: { see: ['k1', 'k2'], imag: ['k3', 'k4'] } }, difficulty: 0.2 },
              { prompt: '교실 어항의 물고기를 살피고 떠올린 카드를 본 것과 상상한 것으로 나누어 보세요.',
                toolOptions: { topic: '어항 속 물고기', slots: [{ id: 'see', label: '눈으로 본 것' }, { id: 'imag', label: '상상한 것' }], cards: [{ id: 'f1', text: '지느러미가 빠르게 흔들려요' }, { id: 'f2', text: '등에 검은 줄무늬가 있어요' }, { id: 'f3', text: '입을 뻐끔뻐끔 벌려요' }, { id: 'f4', text: '밤에 물고기가 숙제를 해요' }, { id: 'f5', text: '물고기가 왕관을 쓰고 잔치를 열어요' }] },
                levels: { challenge: { prompt: '물고기 카드를 본 것과 상상한 것으로 나누어 보세요. 본 것도 상상도 아닌 카드 하나는 남겨 두세요.', toolOptions: { cards: [{ id: 'f1', text: '지느러미가 빠르게 흔들려요' }, { id: 'f2', text: '등에 검은 줄무늬가 있어요' }, { id: 'f3', text: '입을 뻐끔뻐끔 벌려요' }, { id: 'f4', text: '밤에 물고기가 숙제를 해요' }, { id: 'f5', text: '물고기가 왕관을 쓰고 잔치를 열어요' }, { id: 'fx', text: '물고기는 아가미로 숨을 쉬어요' }] } } },
                target: { sort: { see: ['f1', 'f2', 'f3'], imag: ['f4', 'f5'] } }, difficulty: 0.25,
                predict: { q: '상상한 것은 본 것과 아무 관계가 없을까요?', options: ['관계없어요', '본 것에서 시작해요'], answer: 1 },
                conclude: '물고기가 입을 벌리는 것을 보고 노래한다고 상상하듯, 상상은 본 것에서 시작할 때가 많아요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 본 나무에 상상 더하기', minutes: 9, tool: 'collage',
            teacher: '"먼저 본 대로 만들고, 그다음에 상상을 하나 더해 봐요." 첫 문항은 본 것만, 둘째 문항은 상상을 더한 나무다. 다 만든 학생에게 "이 작품에서 어디가 본 것이고 어디가 상상한 것인가요?"라고 묻고 손가락으로 짚게 한다. 상상을 더하려다 본 나무 모양을 모두 지우는 학생에게는 "본 나무는 그대로 두고 하나만 더해요"라고 말한다.',
            task: '먼저 본 나무의 줄기와 잎을 붙이고, 그 위에 상상한 것을 더해요.',
            levels: {
              easy: { shapes: ['rect', 'leaf', 'star', 'circle'], colors: ['갈색', '초록', '노랑', '빨강'], sizes: ['m', 'l'] },
              base: { shapes: ['rect', 'leaf', 'star', 'circle', 'triangle', 'heart'] },
              challenge: {},
            },
            items: [
              { prompt: '본 대로 나무를 만들어요. 갈색 긴 네모 줄기 하나와 초록 나뭇잎 다섯 장 이상을 붙여요.', target: { has: [{ shape: 'rect', color: '갈색', n: 1 }, { shape: 'leaf', color: '초록', min: 5 }] }, difficulty: 0.15,
                hints: ['창밖 나무의 줄기와 잎이 각각 어떤 모양인지 먼저 떠올리고, 문제에 나온 개수를 세며 붙여요.'],
                levels: { challenge: { prompt: '본 대로 나무를 만들어요. 갈색 긴 네모 줄기 하나와 초록 나뭇잎 일곱 장 이상을 붙이고, 잎 세 장 이상은 줄기에 겹쳐요.', target: { has: [{ shape: 'rect', color: '갈색', n: 1 }, { shape: 'leaf', color: '초록', min: 7 }], overlap: 3 } } } },
              { prompt: '본 나무에 상상을 더해요. 나뭇잎 세 장 이상과 별 세 개 이상을 붙여 별이 열리는 나무를 만들어요.', target: { has: [{ shape: 'leaf', min: 3 }, { shape: 'star', min: 3 }] }, difficulty: 0.2,
                hints: ['본 것(잎)은 그대로 두고, 상상한 것을 나무에 매달듯 더해요. 두 가지 조각의 개수를 따로 세어요.'],
                predict: { q: '별이 열리는 나무에서 상상한 부분은 어디일까요?', options: ['잎', '별', '둘 다'], answer: 1 },
                conclude: '잎은 본 것이고 별은 상상이에요. 본 것 위에 상상을 더하면 나만의 주제가 생겨요.' },
              { prompt: '본 것과 상상한 것이 함께 담긴 나만의 나무를 만들고 점검해요.', target: { selfCheck: ['본 나무의 모양을 담았어요', '상상한 것을 하나 더했어요', '어디가 상상인지 짝에게 말했어요'], minPieces: 4 }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a3', title: '활동 3. 창가에서 살피고 상상 이어 말하기 (짝 활동)', minutes: 8, tool: 'mindmap', pair: true,
            teacher: '짝과 함께 창가나 화단 쪽으로 가서 대상 하나(나무, 화분, 구름, 운동장 물건)를 정하게 한다. "1분 동안 말없이 살펴요. 그다음 본 것 세 가지를 짝에게 말해요." 이어 "그 가운데 하나로 \'만약 ~라면\' 상상을 해 봐요." 처음 떠오른 생각 하나로 끝내려는 짝에게는 "생각을 더 꺼내 놓고 고르면 마음에 드는 것이 나와요"라고 말한다. 고른 까닭은 활동지 3번에 쓰게 한다.',
            task: '짝과 대상 하나를 1분 동안 살펴요. 본 것 세 가지를 말하고, 그 가운데 하나로 상상을 이어 말해요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              talk('대상 하나를 정해 1분 동안 살피고, 본 것 세 가지를 짝에게 말한 뒤 "다 했어요"를 누르세요.', '창밖 살피기', ['눈으로 본 것', '상상한 것'], ['색', '모양', '움직임']),
              talk('본 것 하나로 "만약 ~라면" 상상을 짝에게 말하고, 짝의 상상도 들은 뒤 "다 했어요"를 누르세요.', '상상 이어 말하기', ['본 것', '만약 ~라면'], ['밤이 되면', '내가 작아지면']),
              talk('둘이 말한 생각 가운데 그리고 싶은 것 하나를 골라 활동지에 까닭을 쓴 뒤 "다 했어요"를 누르세요.', '그리고 싶은 생각', ['고른 생각', '고른 까닭'], ['가장 그리고 싶어요', '그릴 거리가 많아요']),
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 여러분이 고른 생각은 본 것에서 왔나요, 상상에서 왔나요, 둘 다인가요?" 두세 명이 고른 생각과 까닭을 말하게 한다. "맨 처음 떠오른 것이라서요"라고 말하는 학생에게는 "다른 생각과 견주어 봐도 그게 가장 그리고 싶나요?"라고 되묻는다. 출구 1번에서 본 것을 상상 칸에 넣은 학생은 다음 시간 시작에 실제 웅덩이 사진으로 다시 본다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '비 온 뒤 운동장', slots: [{ id: 'see', label: '눈으로 본 것' }, { id: 'imag', label: '상상한 것' }], cards: [{ id: 'e1', text: '웅덩이에 하늘이 비쳐요' }, { id: 'e2', text: '빗방울이 동그랗게 퍼져요' }, { id: 'e3', text: '웅덩이 속에 다른 나라가 있어요' }] }, prompt: '비 온 뒤 운동장을 살핀 카드를 본 것과 상상한 것으로 나누어 보세요.', target: { sort: { see: ['e1', 'e2'], imag: ['e3'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '다음 가운데 상상한 것은 무엇인가요?', options: ['꽃잎이 다섯 장이에요', '꽃이 밤마다 노래해요', '꽃잎 끝이 뾰족해요'], answer: 1, difficulty: 0.1, explain: '꽃이 노래하는 것은 눈으로 볼 수 없고 머릿속에서 지어낸 일이에요.' },
          { type: 'short', prompt: '오늘 고른 그리고 싶은 생각과, 그것을 고른 까닭을 쓰세요.' },
        ],
      },
    ],
    worksheet: {
      title: '본 것과 상상한 것',
      items: [
        { type: 'table', prompt: '짝과 살핀 대상에서 본 것과 상상한 것을 쓰세요.', columns: ['살핀 대상', '눈으로 본 것', '상상한 것'], cells: [['', '', ''], ['', '', ''], ['', '', '']] },
        { type: 'choice', prompt: '눈으로 본 것에 ○ 하세요.', options: ['구름이 고래가 되어 노래해요', '구름 사이로 해가 반쯤 보여요', '구름 위에 솜사탕 가게가 있어요', '구름이 밤마다 춤을 춰요'], answer: '구름 사이로 해가 반쯤 보여요' },
        { type: 'short', prompt: '그리고 싶은 생각 하나와 그것을 고른 까닭을 쓰세요.' },
        { type: 'draw', prompt: '오늘 살핀 대상을 본 대로 그리고, 상상한 것 하나를 더해 그리세요.' },
      ],
      easy: {
        note: '그 자리에 서면 누구나 볼 수 있으면 본 것, 내가 지어낸 일이면 상상한 것이에요.',
        items: [
          { type: 'table', prompt: '살핀 대상에서 본 것과 상상한 것을 하나씩 쓰세요.', columns: ['눈으로 본 것', '상상한 것'], cells: [['', '']] },
          { type: 'choice', prompt: '상상한 것에 ○ 하세요.', options: ['잎이 초록색이에요', '잎이 나비가 되어 날아가요'], answer: '잎이 나비가 되어 날아가요' },
          { type: 'draw', prompt: '살핀 대상을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 맞는 칸에 놓으면 바로 표시되고, 색종이는 나무에 쓰는 모양 네 가지·색 네 가지·크기 두 가지만 나와요.',
      base: '스스로 나눈 뒤 확인하고, 모양 여섯 가지와 모든 색을 써요.',
      challenge: '본 것도 상상도 아닌 "아는 사실" 카드가 섞여 있어 남겨야 하고, 나무는 잎이 더 많고 줄기에 겹쳐야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 책에서 안 사실("나무는 물을 먹어요")을 본 것으로 여긴다 → "지금 눈으로 볼 수 있나요?"를 묻는다. ② 비유("부채 같은 잎")를 상상으로 여긴다 → 비유는 본 모습을 설명한 말이라 본 것에 가깝다고 짚는다(이 차시 카드에는 비유를 넣지 않았다). ③ 처음 떠오른 생각으로 바로 주제를 정한다 → 생각을 여러 개 꺼낸 뒤 고르게 한다. 준비물: 창가 자리가 부족하면 교실 화분이나 어항, 구름 사진을 모둠마다 하나씩 준다.',
  }));

  // ───────────── 2차시 (연습) ─────────────
  lessons.push(lesson(2, S1, {
    title: '화단 꽃을 보고 떠오른 생각 가운데 하나 고르기',
    objective: '꽃을 살핀 모습에서 떠올린 상상을 이어 보고, 여러 생각 가운데 표현할 것 하나를 알맞은 까닭을 들어 고를 수 있다.',
    illustration: {
      prompt: art('a school flower bed with morning glories climbing a stick and tiny paper ants setting a dinner table on a flower petal'),
      scene: scene([
        { motif: 'sun', x: 400, y: 58, s: 0.8 }, { motif: 'cloud', x: 120, y: 52 }, { motif: 'hills', y: 214 },
        { motif: 'flower', x: 100, y: 222, color: 'rose' }, { motif: 'flower', x: 170, y: 226, color: 'lavender' }, { motif: 'flower', x: 360, y: 222, color: 'buttercup' },
        { motif: 'leaf', x: 250, y: 210, r: -15 }, { motif: 'text', x: 240, y: 140, text: '생각을 많이, 고르기는 하나', size: 22 },
      ]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '화단 꽃 사진(또는 교실 화분)을 띄운다. "지난 시간에 본 것에서 상상을 이었지요. 이 꽃잎을 보니 무엇이 떠오르나요?" 한 학생이 말하면 "또 다른 것은요? 하나 더?" 하고 다섯 개가 될 때까지 받아 칠판에 적는다. "다섯 개 가운데 무엇으로 그림을 그릴까요? 맨 처음 나온 것으로 해야 할까요?" 대답을 들은 뒤 "오늘은 생각을 많이 꺼내고, 그 가운데 하나를 까닭을 들어 골라 봐요"라고 연다. 시연 단추로 본 것 카드와 상상 카드가 짝 지어지는 모습을 보여 준다.',
        student: '꽃 사진을 보고 떠오르는 생각을 하나씩 말해 봅시다. 다섯 개가 모이면 무엇을 그릴지 생각해 봅시다.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '꽃에서 상상', slots: [{ id: 's1', label: '꽃잎이 둥글게 펼쳐졌어요' }], cards: [{ id: 'c1', text: '꽃잎 접시에 개미가 저녁을 차려요' }, { id: 'c2', text: '달님이 구름 이불을 덮어요' }] }, sequence: [{ match: { s1: 'c1' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 본 모습에서 자란 상상 잇기', minutes: 9, tool: 'mindmap',
            teacher: '"이 상상은 꽃의 어느 모습을 보고 떠올렸을까요?" 상상 카드 속 낱말(접시, 사다리, 가루)이 어느 관찰에서 왔는지 찾게 한다. 아무 관찰과도 이어지지 않는 상상 카드는 남겨 둔다. 다 이은 학생에게 "같은 관찰로 다른 상상을 하나 더 지어 볼까요?"라고 물어 짝에게 말하게 한다.',
            task: '왼쪽의 본 모습마다, 그 모습을 보고 떠올렸을 상상 카드를 하나씩 이어요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              { prompt: '꽃을 본 모습마다 그 모습에서 떠올린 상상을 이어 보세요.',
                toolOptions: { mode: 'match', topic: '화단의 꽃', slots: [{ id: 's1', label: '꽃잎이 접시처럼 둥글게 펼쳐졌어요' }, { id: 's2', label: '꽃대가 길고 곧게 서 있어요' }, { id: 's3', label: '꽃 가운데 노란 가루가 묻어 있어요' }], cards: [{ id: 'c1', text: '꽃잎 접시에 개미들이 저녁을 차려요' }, { id: 'c2', text: '꽃대 사다리로 무당벌레가 올라가요' }, { id: 'c3', text: '벌이 노란 가루로 빵을 구워요' }, { id: 'cx', text: '고래가 바다를 건너 여행을 가요' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'c1', text: '꽃잎 접시에 개미들이 저녁을 차려요' }, { id: 'c2', text: '꽃대 사다리로 무당벌레가 올라가요' }, { id: 'c3', text: '벌이 노란 가루로 빵을 구워요' }, { id: 'cx', text: '고래가 바다를 건너 여행을 가요' }, { id: 'cy', text: '눈사람이 썰매를 타요' }] } } },
                hints: ['상상 카드에 나온 물건(접시, 사다리, 가루)이 꽃의 어느 모습과 닮았는지 찾아요.', '이은 카드의 물건이 왼쪽 모습과 정말 닮았는지 다시 읽어요. 어느 꽃 모습과도 닮지 않은 카드는 남겨요.', '둥근 꽃잎은 접시, 길고 곧은 꽃대는 사다리, 노란 가루는 빵 가루와 이어져요.'],
                target: { match: { s1: 'c1', s2: 'c2', s3: 'c3' } }, difficulty: 0.2 },
              { prompt: '민들레를 본 모습마다 그 모습에서 떠올린 상상을 이어 보세요.',
                toolOptions: { mode: 'match', topic: '민들레', slots: [{ id: 's1', label: '하얀 솜털이 공처럼 동그래요' }, { id: 's2', label: '잎 가장자리가 톱니처럼 들쭉날쭉해요' }, { id: 's3', label: '잎이 땅에 납작하게 붙어 펼쳐졌어요' }], cards: [{ id: 'c1', text: '솜털 공이 바람을 타고 하늘 마을로 이사 가요' }, { id: 'c2', text: '요정이 잎 톱니로 나무를 썰어요' }, { id: 'c3', text: '납작한 잎이 개미 놀이터 매트가 돼요' }, { id: 'cx', text: '달님이 구름 이불을 덮고 자요' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'c1', text: '솜털 공이 바람을 타고 하늘 마을로 이사 가요' }, { id: 'c2', text: '요정이 잎 톱니로 나무를 썰어요' }, { id: 'c3', text: '납작한 잎이 개미 놀이터 매트가 돼요' }, { id: 'cx', text: '달님이 구름 이불을 덮고 자요' }, { id: 'cy', text: '기차가 터널을 지나가요' }] } } },
                target: { match: { s1: 'c1', s2: 'c2', s3: 'c3' } }, difficulty: 0.25 },
              { prompt: '나팔꽃을 본 모습마다 그 모습에서 떠올린 상상을 이어 보세요.',
                toolOptions: { mode: 'match', topic: '나팔꽃', slots: [{ id: 's1', label: '꽃이 나팔처럼 벌어졌어요' }, { id: 's2', label: '덩굴이 막대를 감고 올라가요' }, { id: 's3', label: '오후가 되면 꽃잎을 오므려요' }], cards: [{ id: 'c1', text: '나팔꽃이 아침마다 일어나라고 나팔을 불어요' }, { id: 'c2', text: '덩굴이 막대를 타고 하늘까지 기어올라요' }, { id: 'c3', text: '꽃이 낮잠을 자려고 문을 닫아요' }, { id: 'cx', text: '물고기가 왕관을 쓰고 춤을 춰요' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'c1', text: '나팔꽃이 아침마다 일어나라고 나팔을 불어요' }, { id: 'c2', text: '덩굴이 막대를 타고 하늘까지 기어올라요' }, { id: 'c3', text: '꽃이 낮잠을 자려고 문을 닫아요' }, { id: 'cx', text: '물고기가 왕관을 쓰고 춤을 춰요' }, { id: 'cy', text: '사과가 나무에서 툭 떨어져요' }] } } },
                target: { match: { s1: 'c1', s2: 'c2', s3: 'c3' } }, difficulty: 0.25,
                predict: { q: '같은 나팔꽃을 보고 친구도 나와 똑같은 상상을 할까요?', options: ['똑같아요', '다를 수 있어요'], answer: 1 },
                conclude: '같은 모습을 보아도 떠오르는 상상은 사람마다 달라요. 그래서 주제도 저마다 달라져요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 여러 생각 가운데 하나 고르기', minutes: 9, tool: 'emotion',
            teacher: '"생각이 여러 개일 때 무엇을 보고 하나를 고를까요?" 가장 그리고 싶은지, 그릴 거리가 많은지, 보여 주고 싶은 느낌이 있는지를 기준으로 세운다. "맨 처음 떠올라서" "짝이 하라고 해서"는 내가 고른 까닭이 아니라는 것을 짚는다. 결과 글을 소리 내어 읽게 하고 "이렇게 고르면 그림 그리는 시간이 어떨까요?"라고 묻는다.',
            task: '친구가 그릴 생각을 고르는 장면을 읽고, 어떻게 고르면 좋을지 골라요.',
            levels: { easy: {}, base: { revealAfterCheck: true }, challenge: { revealAfterCheck: true } },
            items: [
              { prompt: '민지가 생각 다섯 개를 적었어요. 민지는 어떻게 고르면 좋을까요?',
                toolOptions: { mode: 'branch', who: '민지', motif: 'flower', situation: '꽃을 보고 생각 다섯 개를 적었는데, 맨 처음 적은 것으로 그려야 한다고 여겨요.', choices: [
                  { id: 'a', text: '다섯 개를 다시 읽고 가장 그리고 싶은 것을 골라요', result: '그리고 싶은 마음이 커서 끝까지 즐겁게 그려요', mood: '뿌듯함' },
                  { id: 'b', text: '맨 처음 적은 것을 그대로 그려요', result: '그리다가 뒤에 적은 생각이 더 좋았다는 것을 알게 돼요', mood: '속상함', why: '처음 떠오른 생각이 가장 좋은 생각이라는 법은 없어요.' },
                  { id: 'c', text: '아무것이나 하나 집어요', result: '왜 이것을 그리는지 몰라 금방 지루해져요', mood: '걱정', why: '고른 까닭이 있어야 그림에 마음이 담겨요.' }] },
                levels: { challenge: { toolOptions: { choices: [
                  { id: 'a', text: '다섯 개를 다시 읽고 가장 그리고 싶은 것을 골라요', result: '그리고 싶은 마음이 커서 끝까지 즐겁게 그려요', mood: '뿌듯함' },
                  { id: 'b', text: '맨 처음 적은 것을 그대로 그려요', result: '그리다가 뒤에 적은 생각이 더 좋았다는 것을 알게 돼요', mood: '속상함', why: '처음 떠오른 생각이 가장 좋은 생각이라는 법은 없어요.' },
                  { id: 'c', text: '아무것이나 하나 집어요', result: '왜 이것을 그리는지 몰라 금방 지루해져요', mood: '걱정', why: '고른 까닭이 있어야 그림에 마음이 담겨요.' },
                  { id: 'd', text: '다섯 개를 모두 한 장에 그려요', result: '조금씩 다 그리다 보니 무엇을 그렸는지 알아보기 어려워요', mood: '걱정', why: '한 장에 다 넣으면 주제가 흐려져요. 하나를 골라요.' }] } } },
                hints: ['그림 그리는 동안 끝까지 마음이 가는 생각은 어떻게 골라야 나올지 떠올려요.'],
                target: { choice: 'a' }, difficulty: 0.15 },
              { prompt: '준호는 짝이 고른 생각을 따라 하려고 해요. 준호는 어떻게 하면 좋을까요?',
                toolOptions: { mode: 'branch', who: '준호', motif: 'leaf', situation: '나뭇잎을 보고 생각을 세 개 적었는데, 짝이 고른 "나뭇잎 배"를 똑같이 그리려고 해요.', choices: [
                  { id: 'a', text: '짝과 같은 것을 그대로 그려요', result: '짝과 똑같은 그림이 되어 내 생각은 하나도 담기지 않아요', mood: '속상함', why: '준호가 적은 생각에도 그릴 거리가 있어요.' },
                  { id: 'b', text: '내가 적은 세 개 가운데 가장 마음이 가는 것을 골라요', result: '짝과 다른 나만의 그림이 나와 서로 보여 주며 즐거워요', mood: '기쁨' },
                  { id: 'c', text: '생각이 없다고 그리기를 미뤄요', result: '시간이 지나 그릴 시간이 모자라요', mood: '걱정', why: '이미 적어 둔 생각 세 개가 있어요.' }] },
                levels: { challenge: { toolOptions: { choices: [
                  { id: 'a', text: '짝과 같은 것을 그대로 그려요', result: '짝과 똑같은 그림이 되어 내 생각은 하나도 담기지 않아요', mood: '속상함', why: '준호가 적은 생각에도 그릴 거리가 있어요.' },
                  { id: 'b', text: '내가 적은 세 개 가운데 가장 마음이 가는 것을 골라요', result: '짝과 다른 나만의 그림이 나와 서로 보여 주며 즐거워요', mood: '기쁨' },
                  { id: 'c', text: '생각이 없다고 그리기를 미뤄요', result: '시간이 지나 그릴 시간이 모자라요', mood: '걱정', why: '이미 적어 둔 생각 세 개가 있어요.' },
                  { id: 'd', text: '선생님께 무엇을 그릴지 정해 달라고 해요', result: '선생님이 고른 것을 그리니 왜 그리는지 잘 모르겠어요', mood: '걱정', why: '내가 고른 까닭이 있어야 그림에 내 마음이 담겨요.' }] } } },
                target: { choice: 'b' }, difficulty: 0.2 },
              { prompt: '서윤이는 두 생각이 다 좋아 고민해요. 서윤이는 어떻게 고르면 좋을까요?',
                toolOptions: { mode: 'branch', who: '서윤', motif: 'cloud', situation: '"구름 솜사탕 가게"와 "구름 고래의 노래"가 다 좋아서 무엇을 그릴지 고민해요.', choices: [
                  { id: 'a', text: '둘 중 그릴 거리가 더 떠오르는 것을 골라요', result: '고래의 지느러미, 노래하는 입, 둘레의 새까지 그릴 거리가 줄줄이 떠올라요', mood: '신남' },
                  { id: 'b', text: '둘 다 그만두고 처음부터 다시 생각해요', result: '좋은 생각 둘을 버려서 다시 떠올리느라 시간이 다 가요', mood: '속상함', why: '이미 좋은 생각이 둘이나 있어요. 둘을 견주어 골라요.' },
                  { id: 'c', text: '눈을 감고 아무거나 짚어요', result: '짚은 것이 덜 마음에 들어 그리는 내내 아쉬워요', mood: '걱정', why: '견주어 볼 기준이 있어요. 그릴 거리가 많은 쪽을 떠올려요.' }] },
                levels: { challenge: { toolOptions: { choices: [
                  { id: 'a', text: '둘 중 그릴 거리가 더 떠오르는 것을 골라요', result: '고래의 지느러미, 노래하는 입, 둘레의 새까지 그릴 거리가 줄줄이 떠올라요', mood: '신남' },
                  { id: 'b', text: '둘 다 그만두고 처음부터 다시 생각해요', result: '좋은 생각 둘을 버려서 다시 떠올리느라 시간이 다 가요', mood: '속상함', why: '이미 좋은 생각이 둘이나 있어요. 둘을 견주어 골라요.' },
                  { id: 'c', text: '눈을 감고 아무거나 짚어요', result: '짚은 것이 덜 마음에 들어 그리는 내내 아쉬워요', mood: '걱정', why: '견주어 볼 기준이 있어요. 그릴 거리가 많은 쪽을 떠올려요.' },
                  { id: 'd', text: '더 쉬워 보이는 것을 골라요', result: '쉽게 끝났지만 정말 그리고 싶던 고래가 자꾸 생각나요', mood: '속상함', why: '쉬운지가 아니라, 내가 더 그리고 싶고 그릴 거리가 많은지를 견주어요.' }] } } },
                target: { choice: 'a' }, difficulty: 0.25,
                predict: { q: '좋은 생각이 둘일 때 무엇으로 견주면 좋을까요?', options: ['쉬운 것', '그릴 거리', '처음 것'], answer: 1 },
                conclude: '여러 생각을 견줄 때는 그리고 싶은 마음과 그릴 거리가 얼마나 많은지를 따져 보아요.' },
            ],
          },
          {
            id: 'a3', title: '활동 3. 꽃을 살펴 생각 다섯 개 적고 고르기 (짝 활동)', minutes: 8, tool: 'mindmap', pair: true,
            teacher: '준비물: 모둠마다 꽃 화분 하나나 꽃 사진 카드 한 장, 돋보기 하나. "꽃잎, 꽃대, 잎, 가운데를 차례로 살펴요." 활동지 1번에 본 모습을 쓰고 2번에 그 모습에서 떠오른 상상을 다섯 개까지 쓰게 한다. 짝이 "맨 처음 것으로 할래"라고 하면 "다섯 개를 다 읽어 보고 골라 봐"라고 말해 주게 한다. 고른 생각에 ○, 까닭을 3번에 쓴다.',
            task: '꽃을 살펴 본 모습을 쓰고, 떠오른 상상을 다섯 개까지 써요. 짝과 읽고 하나를 골라 까닭을 써요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              talk('꽃잎·꽃대·잎·가운데를 차례로 살피고, 본 모습 세 가지를 활동지 1번에 쓴 뒤 "다 했어요"를 누르세요.', '꽃 살피기', ['본 모습', '살핀 곳'], ['꽃잎', '꽃대', '잎', '가운데']),
              talk('본 모습에서 떠오른 상상을 짝과 번갈아 말하며 다섯 개까지 활동지 2번에 쓴 뒤 "다 했어요"를 누르세요.', '상상 다섯 개', ['본 모습', '떠오른 상상'], ['접시 같아요', '사다리 같아요']),
              talk('다섯 생각을 소리 내어 읽고, 그릴 것 하나에 ○ 하고 까닭을 짝에게 말한 뒤 "다 했어요"를 누르세요.', '하나 고르기', ['고른 생각', '고른 까닭'], ['그리고 싶어요', '그릴 거리가 많아요', '느낌을 보여 주고 싶어요']),
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"생각을 하나만 적었을 때와 다섯 개 적었을 때, 고르기가 어떻게 달랐나요?" 두세 명의 대답을 듣는다. "맨 처음 생각을 고른 사람도 있지요? 다섯 개와 견주어 보고 골랐다면 그것도 좋은 고르기예요." 출구 2번에서 "짝이 골라서"를 고른 학생에게는 다음 시간에 내가 고른 까닭을 한 번 더 말하게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '해바라기', slots: [{ id: 's1', label: '꽃 가운데 씨가 촘촘히 박혀 있어요' }, { id: 's2', label: '꽃이 해를 따라 고개를 돌려요' }], cards: [{ id: 'c1', text: '씨앗들이 줄을 맞춰 운동회를 해요' }, { id: 'c2', text: '해바라기가 해님과 눈싸움을 해요' }, { id: 'cx', text: '토끼가 당근 밭을 갈아요' }] }, prompt: '해바라기를 본 모습마다 그 모습에서 떠올린 상상을 이어 보세요.', target: { match: { s1: 'c1', s2: 'c2' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '그릴 생각을 고르는 까닭으로 가장 알맞은 것은 무엇인가요?', options: ['짝이 그걸 골라서', '가장 그리고 싶고 그릴 거리가 많아서', '맨 처음 떠올라서'], answer: 1, difficulty: 0.15, explain: '내가 그리고 싶고 그릴 거리가 많은 생각을 고르면 그림에 내 마음이 담겨요.' },
          { type: 'mood', prompt: '생각을 여러 개 떠올려 보니 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '떠오른 생각 다섯 개',
      items: [
        { type: 'table', prompt: '꽃에서 본 모습을 쓰세요.', columns: ['살핀 곳', '본 모습'], cells: [['꽃잎', ''], ['꽃대나 잎', ''], ['꽃 가운데', '']] },
        { type: 'table', prompt: '본 모습에서 떠오른 상상을 다섯 개까지 쓰세요.', columns: ['번호', '떠오른 상상'], cells: [['1', ''], ['2', ''], ['3', ''], ['4', ''], ['5', '']] },
        { type: 'short', prompt: '그릴 생각 하나에 ○ 하고, 고른 까닭을 쓰세요.' },
        { type: 'choice', prompt: '그릴 생각을 고르는 좋은 까닭에 ○ 하세요.', options: ['맨 처음 떠올라서', '짝과 똑같이 하려고', '가장 그리고 싶어서', '아무거나 짚어서'], answer: '가장 그리고 싶어서' },
      ],
      easy: {
        note: '"이 모습이 무엇과 닮았을까?"를 물으면 상상이 떠올라요.',
        items: [
          { type: 'table', prompt: '본 모습과 떠오른 상상을 쓰세요.', columns: ['본 모습', '떠오른 상상'], cells: [['', ''], ['', '']] },
          { type: 'choice', prompt: '좋은 까닭에 ○ 하세요.', options: ['가장 그리고 싶어서', '짝이 골라서'], answer: '가장 그리고 싶어서' },
          { type: 'short', prompt: '그릴 생각 하나를 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞게 이은 카드에 바로 표시가 생기고, 고르기 장면에서는 보기를 누르면 결과가 바로 보여요.',
      base: '스스로 이은 뒤 확인하고, 고르기 장면의 결과는 맞힌 뒤에 보여요.',
      challenge: '어느 관찰과도 이어지지 않는 상상 카드가 둘 섞여 있고, 고르기 장면에 그럴듯한 보기(모두 그리기, 쉬운 것 고르기)가 하나 더 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 생각을 하나만 적고 멈춘다 → "또? 하나 더?"로 다섯 개까지 이끈다. ② 처음 떠오른 생각을 꼭 써야 한다고 여긴다(이 주제의 대표 오개념) → 다섯 개를 견준 뒤 고르게 하고, 견주어 본 뒤 처음 것을 고르는 것은 괜찮다고 말한다. ③ 짝의 주제를 따라 한다 → 내 활동지의 생각으로 돌아가게 한다. 준비물: 모둠마다 꽃 화분이나 꽃 사진 카드 한 장, 돋보기.',
  }));

  // ───────────── 3차시 (확장) ─────────────
  lessons.push(lesson(3, S1, {
    title: '"만약 ~라면" 질문으로 상상 장면 키우기',
    objective: '"만약 ~라면" 질문으로 떠올린 장면에서 실제로 볼 수 있는 것과 상상으로 더한 것을 가르고, 두 가지를 섞어 상상 장면을 꾸밀 수 있다.',
    illustration: {
      prompt: art('a classroom under the sea with desks in rows, a jellyfish floating past the window and a tiny child riding a ladybug bus over grass blades'),
      scene: scene([
        { motif: 'wave', x: 240, y: 230 }, { motif: 'cloud', x: 110, y: 52 }, { motif: 'house', x: 120, y: 200 },
        { motif: 'leaf', x: 330, y: 190, r: 30 }, { motif: 'star', x: 400, y: 80, s: 0.6 }, { motif: 'bird', x: 280, y: 80 },
        { motif: 'text', x: 260, y: 140, text: '만약 ~라면?', size: 24 },
      ]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"만약 우리 교실이 바닷속에 있다면, 창밖으로 무엇이 지나갈까요?" 대답을 두세 개 받은 뒤 "그럼 교실 안에는 무엇이 그대로 있을까요?"라고 묻는다. 칠판과 책상처럼 지금 눈으로 볼 수 있는 것과 해파리처럼 상상으로 더한 것을 칠판 두 쪽에 나눠 적는다. "상상 장면도 본 것이 바탕에 있어야 그림이 살아나요. 오늘은 \'만약\' 질문으로 장면을 키워 봐요." 시연 단추로 긴 네모 책상 위에 나뭇잎 물고기가 붙는 모습을 보여 준다.',
        student: '만약 우리 교실이 바닷속에 있다면 무엇이 그대로 있고 무엇이 새로 생길지 말해 봅시다.',
        demo: { tool: 'collage', options: { shapes: ['rect', 'leaf'], colors: ['갈색', '파랑'] }, sequence: [{ has: [{ shape: 'rect', min: 2 }, { shape: 'leaf', min: 2 }] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 실제로 볼 수 있는 것과 상상으로 더한 것', minutes: 9, tool: 'mindmap',
            teacher: '"이 카드는 지금 우리 교실(또는 운동장)에 가면 볼 수 있나요?" 볼 수 있으면 실제로 볼 수 있는 것, \'만약\' 때문에 새로 생긴 것이면 상상으로 더한 것이다. "개미가 과자 부스러기를 옮겨요"처럼 작아지지 않아도 지금 볼 수 있는 일은 실제 칸이라는 것을 짚는다. 상상 칸에 모두 넣으려는 학생에게 "상상 장면에도 진짜 모습이 섞여 있어요"라고 말한다.',
            task: '"만약" 장면 카드를 읽고, 지금도 실제로 볼 수 있는 것인지 상상으로 새로 더한 것인지 나누어요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '만약 우리 교실이 바닷속에 있다면? 카드를 실제로 볼 수 있는 것과 상상으로 더한 것으로 나누어 보세요.',
                toolOptions: { topic: '바닷속 교실', slots: [{ id: 'real', label: '실제로 볼 수 있는 것' }, { id: 'imag', label: '상상으로 더한 것' }], cards: [{ id: 'b1', text: '칠판 앞에 책상이 줄지어 있어요' }, { id: 'b2', text: '책상 위에 연필꽂이가 있어요' }, { id: 'b3', text: '창밖으로 해파리가 지나가요' }, { id: 'b4', text: '선생님이 문어 다리로 칠판을 지워요' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'b1', text: '칠판 앞에 책상이 줄지어 있어요' }, { id: 'b2', text: '책상 위에 연필꽂이가 있어요' }, { id: 'b3', text: '창밖으로 해파리가 지나가요' }, { id: 'b4', text: '선생님이 문어 다리로 칠판을 지워요' }, { id: 'b5', text: '사물함 문이 조개처럼 열려요' }, { id: 'b6', text: '교실 벽에 시간표가 붙어 있어요' }] }, target: { sort: { real: ['b1', 'b2', 'b6'], imag: ['b3', 'b4', 'b5'] } }, prompt: '만약 교실이 바닷속에 있다면? 카드 여섯 장을 실제로 볼 수 있는 것과 상상으로 더한 것으로 나누어 보세요.' } },
                hints: ['카드마다 "지금 우리 교실에 가면 볼 수 있을까?"를 물어요. 바다 때문에 새로 생긴 것은 다른 칸이에요.'],
                target: { sort: { real: ['b1', 'b2'], imag: ['b3', 'b4'] } }, difficulty: 0.2 },
              { prompt: '만약 내가 개미만큼 작아진다면? 카드를 실제로 볼 수 있는 것과 상상으로 더한 것으로 나누어 보세요.',
                toolOptions: { topic: '개미만큼 작아진 나', slots: [{ id: 'real', label: '실제로 볼 수 있는 것' }, { id: 'imag', label: '상상으로 더한 것' }], cards: [{ id: 'm1', text: '풀잎 끝에 이슬방울이 맺혀요' }, { id: 'm2', text: '개미가 과자 부스러기를 옮겨요' }, { id: 'm3', text: '풀잎 미끄럼틀을 타고 내려와요' }, { id: 'm4', text: '무당벌레 버스를 타고 학교에 가요' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'm1', text: '풀잎 끝에 이슬방울이 맺혀요' }, { id: 'm2', text: '개미가 과자 부스러기를 옮겨요' }, { id: 'm3', text: '풀잎 미끄럼틀을 타고 내려와요' }, { id: 'm4', text: '무당벌레 버스를 타고 학교에 가요' }, { id: 'm5', text: '민들레 솜털을 낙하산 삼아 날아요' }, { id: 'm6', text: '흙 위에 지렁이가 지나간 자국이 있어요' }] }, target: { sort: { real: ['m1', 'm2', 'm6'], imag: ['m3', 'm4', 'm5'] } }, prompt: '만약 내가 개미만큼 작아진다면? 카드 여섯 장을 실제로 볼 수 있는 것과 상상으로 더한 것으로 나누어 보세요.' } },
                target: { sort: { real: ['m1', 'm2'], imag: ['m3', 'm4'] } }, difficulty: 0.25 },
              { prompt: '만약 겨울에 꽃이 핀다면? 카드를 실제로 볼 수 있는 것과 상상으로 더한 것으로 나누어 보세요.',
                toolOptions: { topic: '겨울에 핀 꽃', slots: [{ id: 'real', label: '실제로 볼 수 있는 것' }, { id: 'imag', label: '상상으로 더한 것' }], cards: [{ id: 'w1', text: '나뭇가지에 잎이 다 떨어졌어요' }, { id: 'w2', text: '지붕 위에 하얀 눈이 쌓였어요' }, { id: 'w3', text: '눈사람 머리에 해바라기가 피었어요' }, { id: 'w4', text: '꽁꽁 언 연못 위에 장미 정원이 생겼어요' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'w1', text: '나뭇가지에 잎이 다 떨어졌어요' }, { id: 'w2', text: '지붕 위에 하얀 눈이 쌓였어요' }, { id: 'w3', text: '눈사람 머리에 해바라기가 피었어요' }, { id: 'w4', text: '꽁꽁 언 연못 위에 장미 정원이 생겼어요' }, { id: 'w5', text: '고드름 끝에서 튤립이 자라요' }, { id: 'w6', text: '사람들이 두꺼운 목도리를 둘렀어요' }] }, target: { sort: { real: ['w1', 'w2', 'w6'], imag: ['w3', 'w4', 'w5'] } }, prompt: '만약 겨울에 꽃이 핀다면? 카드 여섯 장을 실제로 볼 수 있는 것과 상상으로 더한 것으로 나누어 보세요.' } },
                target: { sort: { real: ['w1', 'w2'], imag: ['w3', 'w4'] } }, difficulty: 0.25,
                predict: { q: '"겨울에 꽃이 핀다면" 그림에 진짜 겨울 모습도 들어갈까요?', options: ['들어가요', '안 들어가요'], answer: 0 },
                conclude: '눈 쌓인 진짜 겨울 모습이 있어야 그 위에 핀 꽃이 더 놀랍게 보여요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. "만약" 장면 꾸미기', minutes: 10, tool: 'collage',
            teacher: '"진짜 모습을 먼저 놓고, 상상을 그 위에 더해요." 바닷속 교실에서는 긴 네모가 책상, 나뭇잎이 물고기라고 약속한다. 작아진 나 문항에서는 "작아진 나를 어떻게 보여 줄 수 있을까요? 풀잎을 크게, 나를 작게!" 크기를 견주어 작아진 느낌을 낸다는 것을 짚는다. 다 만든 학생에게 어느 조각이 실제이고 어느 조각이 상상인지 짝에게 말하게 한다.',
            task: '문제에 나온 조각으로 진짜 모습을 먼저 놓고, 상상한 것을 더해 "만약" 장면을 꾸며요.',
            levels: {
              easy: { shapes: ['rect', 'leaf', 'circle', 'star'], colors: ['갈색', '파랑', '초록', '빨강', '하양'], sizes: ['s', 'l'] },
              base: { shapes: ['rect', 'leaf', 'circle', 'star', 'semi', 'triangle'] },
              challenge: {},
            },
            items: [
              { prompt: '바닷속 교실을 꾸며요. 책상이 될 긴 네모 두 개 이상과 물고기가 될 나뭇잎 세 개 이상을 붙여요.', target: { has: [{ shape: 'rect', min: 2 }, { shape: 'leaf', min: 3 }] }, difficulty: 0.15,
                hints: ['교실에 그대로 있는 것을 먼저 붙이고, 바다 때문에 새로 생긴 것을 그 둘레에 더해요.'],
                levels: { challenge: { prompt: '바닷속 교실을 꾸며요. 책상 긴 네모 세 개 이상, 물고기 나뭇잎 네 개 이상을 붙이고, 물고기 두 마리 이상은 책상에 겹쳐 지나가게 해요.', target: { has: [{ shape: 'rect', min: 3 }, { shape: 'leaf', min: 4 }], overlap: 2 } } } },
              { prompt: '개미만큼 작아진 나를 꾸며요. 큰 초록 나뭇잎 두 장 이상과 작은 빨강 동그라미 하나로 나를 붙여요.', target: { has: [{ shape: 'leaf', color: '초록', size: 'l', min: 2 }, { shape: 'circle', color: '빨강', size: 's', n: 1 }] }, difficulty: 0.25,
                hints: ['작아진 느낌은 크기를 견주어 보여 줘요. 둘레의 풀은 어떤 크기로, 나는 어떤 크기로 붙일지 먼저 정해요.'],
                predict: { q: '내가 작아진 것을 가장 잘 보여 주는 방법은 무엇일까요?', options: ['풀을 크게', '나를 크게', '둘 다 같게'], answer: 0 },
                conclude: '둘레의 것을 크게, 나를 작게 붙이면 크기 차이로 작아진 느낌이 나요.' },
              { prompt: '나만의 "만약" 질문을 정해 장면을 꾸미고 점검해요.', target: { selfCheck: ['"만약 ~라면" 질문을 정했어요', '실제로 볼 수 있는 것을 넣었어요', '상상으로 더한 것을 넣었어요'], minPieces: 5 }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a3', title: '활동 3. "만약" 질문 주고받기 (짝 활동)', minutes: 7, tool: 'mindmap', pair: true,
            teacher: '"짝에게 \'만약\' 질문을 하나 내 주세요. 짝은 그 장면에 보이는 것을 세 가지 말해요." 대답이 모두 상상이면 "그 장면에 진짜로 있는 것은 무엇이 있을까?"라고 짝이 되물어 주게 한다. 질문 예시: 만약 운동장에 비 대신 사탕이 내린다면, 만약 내 필통이 집이라면. 서로 하나씩 내고 둘의 대답을 활동지 표에 쓴다.',
            task: '짝에게 "만약" 질문을 내고, 짝이 말한 장면을 실제로 볼 수 있는 것과 상상으로 더한 것으로 나누어 써요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              talk('짝에게 "만약 ~라면" 질문을 하나 내고, 짝이 말한 장면을 듣고 "다 했어요"를 누르세요.', '만약 질문', ['질문', '짝의 대답'], ['운동장에 사탕이 내린다면', '필통이 집이라면']),
              talk('역할을 바꾸어 짝의 질문에 답하고, 장면에 보이는 것 세 가지를 말한 뒤 "다 했어요"를 누르세요.', '장면 말하기', ['실제로 볼 수 있는 것', '상상으로 더한 것'], ['진짜 모습', '새로 생긴 것']),
              talk('둘의 대답을 활동지 표의 두 칸에 나누어 쓰고, 짝과 견주어 본 뒤 "다 했어요"를 누르세요.', '나누어 쓰기', ['실제로 볼 수 있는 것', '상상으로 더한 것'], ['교실', '운동장', '집']),
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 꾸민 장면에서 진짜 모습이 빠지면 어떻게 될까요?" 학생 작품 하나에서 책상 조각을 가리고 보여 주며 "어디인지 알 수 있나요?"라고 묻는다. 출구 1번에서 실제 모습을 상상 칸에 넣은 학생에게는 "지금 놀이터에 가면 볼 수 있나요?"를 다시 묻는다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '구름 놀이터', slots: [{ id: 'real', label: '실제로 볼 수 있는 것' }, { id: 'imag', label: '상상으로 더한 것' }], cards: [{ id: 'e1', text: '그네와 미끄럼틀이 있어요' }, { id: 'e2', text: '구름 위에서 그네를 타요' }, { id: 'e3', text: '모래밭에 발자국이 있어요' }, { id: 'e4', text: '미끄럼틀이 무지개로 되어 있어요' }] }, prompt: '만약 놀이터가 구름 위에 있다면? 카드를 실제로 볼 수 있는 것과 상상으로 더한 것으로 나누어 보세요.', target: { sort: { real: ['e1', 'e3'], imag: ['e2', 'e4'] } }, difficulty: 0.2 },
          { type: 'choice', prompt: '"만약 개미만큼 작아진다면" 그림에서 작아진 느낌을 가장 잘 주는 방법은 무엇인가요?', options: ['나를 화면 가득 크게 그려요', '둘레의 풀과 돌을 크게, 나를 작게 그려요', '모두 같은 크기로 그려요'], answer: 1, difficulty: 0.2, explain: '둘레의 것과 크기를 견주면 내가 작아진 것이 드러나요.' },
          { type: 'short', prompt: '내가 만든 "만약" 질문과, 그 장면에 넣을 진짜 모습 하나를 쓰세요.' },
        ],
      },
    ],
    worksheet: {
      title: '"만약 ~라면" 장면',
      items: [
        { type: 'table', prompt: '짝과 주고받은 "만약" 장면을 나누어 쓰세요.', columns: ['만약 ~라면', '실제로 볼 수 있는 것', '상상으로 더한 것'], cells: [['', '', ''], ['', '', '']] },
        { type: 'choice', prompt: '"만약 교실이 바닷속에 있다면"에서 실제로 볼 수 있는 것에 ○ 하세요.', options: ['창밖의 상어', '줄지어 놓인 책상', '문어 선생님', '조개 사물함'], answer: '줄지어 놓인 책상' },
        { type: 'short', prompt: '"만약 내 필통이 집이라면" 그 집 안에 무엇이 있을지 두 가지 쓰세요.' },
        { type: 'draw', prompt: '나만의 "만약" 장면을 그리세요. 진짜 모습과 상상을 함께 넣어요.' },
      ],
      easy: {
        note: '지금 가서 볼 수 있으면 실제, "만약" 때문에 새로 생긴 것이면 상상이에요.',
        items: [
          { type: 'choice', prompt: '"만약 교실이 바닷속에 있다면"에서 상상으로 더한 것에 ○ 하세요.', options: ['칠판', '창밖의 해파리'], answer: '창밖의 해파리' },
          { type: 'short', prompt: '내가 만든 "만약" 질문을 쓰세요.' },
          { type: 'draw', prompt: '"만약" 장면을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 맞는 칸에 놓으면 바로 표시되고, 색종이는 모양 네 가지·색 다섯 가지와 작게·크게 두 크기만 나와 크기 차이를 고르기 쉬워요.',
      base: '스스로 나눈 뒤 확인하고, 모양 여섯 가지와 모든 색·크기를 써요.',
      challenge: '카드가 여섯 장으로 늘어 실제와 상상이 세 장씩 섞여 있고, 바닷속 교실은 조각을 더 많이 쓰고 물고기를 책상에 겹쳐요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 상상 장면에는 진짜 모습이 들어가면 안 된다고 여긴다 → 진짜 모습을 가린 작품과 견주어 보인다. ② 작아진 나를 크게 그린다 → 둘레의 것과 크기를 견주게 한다. ③ "만약" 질문을 만들지 못한다 → 교실 물건 하나를 골라 "만약 ○○이 살아 있다면"으로 시작하게 한다.',
  }));

  // ───────────── 4차시 (확장) ─────────────
  lessons.push(lesson(4, S1, {
    title: '본 것에서 주제까지 생각이 자라는 차례 찾기',
    objective: '본 것, 떠오른 생각, 고른 주제, 좁힌 주제를 가려 차례대로 놓고, 내 주제를 한 단계 더 자세하게 바꿀 수 있다.',
    illustration: {
      prompt: art('four paper stepping stones leading from a child watching ants carry a cookie crumb to a detailed picture of an ant village festival before the rain'),
      scene: scene([
        { motif: 'cloud', x: 120, y: 50 }, { motif: 'cloud', x: 380, y: 60, s: 0.8 }, { motif: 'hills', y: 214 },
        { motif: 'flower', x: 80, y: 224, color: 'buttercup' }, { motif: 'leaf', x: 180, y: 206, r: 20 }, { motif: 'house', x: 380, y: 220, s: 0.8 },
        { motif: 'text', x: 240, y: 140, text: '본 것 → 생각 → 주제', size: 22 },
      ]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '칠판에 네 칸을 그린다: 본 것 → 떠오른 생각 → 고른 주제 → 좁힌 주제. "지난 시간까지 우리는 무엇을 했나요?" 학생 말로 앞의 세 칸을 채운다. "고른 주제가 \'개미\'라면 무엇을 그려야 할지 바로 알 수 있나요?" 고개를 젓는 학생이 많으면 "\'비 오기 전 과자를 나르는 개미 마을\'이라면요?"라고 견주어 묻는다. 주제가 자세할수록 그릴 장면이 또렷해진다는 것을 연다. 시연 단추로 카드 네 장이 차례대로 놓이는 모습을 보여 준다.',
        student: '"개미"와 "비 오기 전 과자를 나르는 개미 마을" 가운데 무엇을 그릴지 더 잘 떠오르는 쪽을 말해 봅시다.',
        demo: { tool: 'story', options: { slots: ['본 것', '떠오른 생각', '고른 주제', '좁힌 주제'], cards: [{ id: 'd1', text: '개미가 과자를 옮겨요' }, { id: 'd2', text: '잔치를 준비하나 봐' }, { id: 'd3', text: '개미 마을 잔치' }, { id: 'd4', text: '비 오기 전 개미 마을 잔치' }] }, sequence: [{ order: ['d1', 'd2', 'd3', 'd4'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 생각이 자라는 차례로 놓기', minutes: 10, tool: 'story',
            teacher: '"이 카드는 눈으로 본 것인가요, 머릿속 생각인가요, 그림의 제목 같은 주제인가요?" 카드마다 종류를 먼저 말하게 한다. 주제와 좁힌 주제는 "언제, 어디서, 어떻게"가 붙어 더 자세한 쪽이 좁힌 주제다. 차례를 거꾸로 놓은 학생에게는 "주제를 먼저 정하고 나서 개미를 보았을까요?"라고 묻는다.',
            task: '카드가 본 것, 떠오른 생각, 고른 주제, 좁힌 주제 가운데 무엇인지 따져 차례대로 놓아요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              { prompt: '개미를 본 날, 생각이 자란 차례대로 카드를 놓아 보세요.',
                toolOptions: { slots: ['본 것', '떠오른 생각', '고른 주제', '좁힌 주제'], cards: [{ id: 'o1', text: '개미가 과자 조각을 옮겨요', motif: 'leaf' }, { id: 'o2', text: '개미들이 잔치를 준비하나 봐', motif: 'star' }, { id: 'o3', text: '개미 마을 잔치', motif: 'house' }, { id: 'o4', text: '비 오기 전 과자를 나르는 개미 마을 잔치', motif: 'cloud' }] },
                hints: ['카드마다 눈으로 본 일인지, 머릿속 생각인지, 그림 제목 같은지 먼저 가려요. 제목 같은 카드가 둘이면 더 자세한 쪽이 뒤예요.', '맨 앞 칸은 눈으로 본 일이어야 해요. 놓은 카드 가운데 제목처럼 짧은 것과 길고 자세한 것의 자리를 견주어 보세요.', '개미가 과자 조각을 옮기는 것을 보고 → 잔치를 떠올리고 → "개미 마을 잔치"로 정한 뒤 → "비 오기 전"을 붙여 좁혀요.'],
                target: { order: ['o1', 'o2', 'o3', 'o4'] }, difficulty: 0.2 },
              { prompt: '고양이를 본 날, 생각이 자란 차례대로 카드를 놓아 보세요.',
                toolOptions: { slots: ['본 것', '떠오른 생각', '고른 주제', '좁힌 주제'], cards: [{ id: 'p1', text: '고양이가 햇볕 아래 몸을 둥글게 말았어요', motif: 'sun' }, { id: 'p2', text: '해님이 고양이를 안아 주나 봐', motif: 'cloud' }, { id: 'p3', text: '해님과 고양이', motif: 'house' }, { id: 'p4', text: '창가 햇볕에 안겨 낮잠 자는 고양이', motif: 'star' }] },
                hints: ['카드마다 눈으로 본 일인지, 머릿속 생각인지, 그림 제목 같은지 먼저 가려요.', '"~나 봐"처럼 짐작하는 말은 본 것이 아니라 떠오른 생각이에요. 놓은 자리를 다시 보세요.', '몸을 둥글게 만 고양이를 보고 → 해님이 안아 준다고 떠올리고 → "해님과 고양이"로 정한 뒤 → 창가와 낮잠을 붙여 좁혀요.'],
                levels: { challenge: { prompt: '고양이를 본 날, 생각이 자란 차례대로 카드를 놓아 보세요. 차례에 들지 않는 카드 하나는 남겨 두세요.', toolOptions: { cards: [{ id: 'p1', text: '고양이가 햇볕 아래 몸을 둥글게 말았어요', motif: 'sun' }, { id: 'p2', text: '해님이 고양이를 안아 주나 봐', motif: 'cloud' }, { id: 'p3', text: '해님과 고양이', motif: 'house' }, { id: 'p4', text: '창가 햇볕에 안겨 낮잠 자는 고양이', motif: 'star' }, { id: 'px', text: '고양이는 물을 싫어해요', motif: 'wave' }] } } },
                target: { order: ['p1', 'p2', 'p3', 'p4'] }, difficulty: 0.25 },
              { prompt: '소나기가 온 날, 생각이 자란 차례대로 카드를 놓아 보세요.',
                toolOptions: { slots: ['본 것', '떠오른 생각', '고른 주제', '좁힌 주제'], cards: [{ id: 'q1', text: '빗방울이 창문을 타고 흘러내려요', motif: 'cloud' }, { id: 'q2', text: '빗방울끼리 달리기를 하나 봐', motif: 'star' }, { id: 'q3', text: '빗방울 달리기', motif: 'wave' }, { id: 'q4', text: '교실 창문에서 결승선으로 달리는 빗방울들', motif: 'house' }] },
                hints: ['카드마다 눈으로 본 일인지, 머릿속 생각인지, 그림 제목 같은지 먼저 가려요.', '제목 같은 카드 둘 가운데 "어디서, 어떻게"가 붙은 것이 더 뒤에 와요. 자리를 견주어 보세요.', '흘러내리는 빗방울을 보고 → 달리기를 떠올리고 → "빗방울 달리기"로 정한 뒤 → 교실 창문과 결승선을 붙여 좁혀요.'],
                levels: { challenge: { prompt: '소나기가 온 날, 생각이 자란 차례대로 카드를 놓아 보세요. 차례에 들지 않는 카드 하나는 남겨 두세요.', toolOptions: { cards: [{ id: 'q1', text: '빗방울이 창문을 타고 흘러내려요', motif: 'cloud' }, { id: 'q2', text: '빗방울끼리 달리기를 하나 봐', motif: 'star' }, { id: 'q3', text: '빗방울 달리기', motif: 'wave' }, { id: 'q4', text: '교실 창문에서 결승선으로 달리는 빗방울들', motif: 'house' }, { id: 'qx', text: '비는 구름에서 내려요', motif: 'sun' }] } } },
                target: { order: ['q1', 'q2', 'q3', 'q4'] }, difficulty: 0.3,
                predict: { q: '"빗방울 달리기"와 "교실 창문에서 결승선으로 달리는 빗방울들" 가운데 그리기 쉬운 것은?', options: ['앞의 것', '뒤의 것'], answer: 1 },
                conclude: '주제에 어디서, 어떻게를 더하면 무엇을 그릴지 또렷해져요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 좁힌 주제에 꼭 필요한 것 붙이기', minutes: 9, tool: 'collage',
            teacher: '"좁힌 주제에 들어 있는 낱말이 그림에 다 보여야 해요." 활동 1의 좁힌 주제를 다시 읽고, 낱말마다 어떤 조각으로 나타낼지 정하게 한다. 예: "비 오기 전" → 구름, "과자" → 네모, "개미" → 작은 동그라미. 주제 낱말에 없는 조각을 잔뜩 더하는 학생에게는 "이 조각은 주제의 어느 낱말인가요?"라고 묻는다.',
            task: '좁힌 주제의 낱말마다 어떤 조각으로 나타낼지 정하고, 주제가 보이게 붙여요.',
            levels: {
              easy: { shapes: ['circle', 'square', 'semi', 'star'], colors: ['검정', '노랑', '하양', '파랑', '갈색'], sizes: ['s', 'l'] },
              base: { shapes: ['circle', 'square', 'semi', 'star', 'rect', 'leaf'] },
              challenge: {},
            },
            items: [
              { prompt: '"비 오기 전 과자를 나르는 개미 마을"을 꾸며요. 구름이 될 하양 반원 하나 이상, 과자 네모 하나, 개미 작은 검정 동그라미 네 개 이상을 붙여요.', target: { has: [{ shape: 'semi', color: '하양', min: 1 }, { shape: 'square', n: 1 }, { shape: 'circle', color: '검정', size: 's', min: 4 }] }, difficulty: 0.2,
                hints: ['주제의 낱말(비 오기 전, 과자, 개미)마다 어떤 조각인지 문제에서 찾고, 하나씩 개수를 세며 붙여요.'],
                levels: { challenge: { prompt: '"비 오기 전 과자를 나르는 개미 마을"을 꾸며요. 구름 반원 두 개 이상, 과자 네모 하나, 작은 검정 동그라미 개미 여섯 개 이상을 붙이고 개미 두 마리 이상은 과자에 겹쳐요.', target: { has: [{ shape: 'semi', min: 2 }, { shape: 'square', n: 1 }, { shape: 'circle', color: '검정', size: 's', min: 6 }], overlap: 2 } } } },
              { prompt: '"창가 햇볕에 안겨 낮잠 자는 고양이"를 꾸며요. 큰 노랑 동그라미 해 하나와 고양이가 될 갈색 반원 하나를 겹쳐 붙여요.', target: { has: [{ shape: 'circle', color: '노랑', size: 'l', n: 1 }, { shape: 'semi', color: '갈색', n: 1 }], overlap: 1 }, difficulty: 0.25,
                hints: ['"햇볕에 안겨"를 어떻게 보여 줄지 생각해요. 해와 고양이 조각이 떨어져 있나요, 맞닿아 겹쳐 있나요?'],
                predict: { q: '"햇볕에 안겨"를 가장 잘 보여 주는 것은?', options: ['떨어뜨리기', '겹치기'], answer: 1 },
                conclude: '주제 낱말 "안겨"를 조각을 겹쳐서 보여 주었어요. 주제의 낱말이 그림의 방법이 돼요.' },
              { prompt: '내가 좁힌 주제를 정해, 주제의 낱말마다 조각으로 나타내고 점검해요.', target: { selfCheck: ['좁힌 주제를 한 문장으로 정했어요', '주제의 낱말마다 조각을 붙였어요', '주제에 없는 조각은 넣지 않았어요'], minPieces: 4 }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a3', title: '활동 3. 내 주제를 한 칸 더 좁히기 (짝 활동)', minutes: 7, tool: 'mindmap', pair: true,
            teacher: '"1·2차시에 고른 내 생각을 활동지 네 칸에 옮겨 써요." 짝은 셋째 칸(고른 주제)을 읽고 "언제? 어디서? 어떻게?" 가운데 하나를 물어 준다. 그 대답을 넣어 넷째 칸(좁힌 주제)을 쓴다. 넷째 칸이 셋째 칸과 같으면 짝이 한 번 더 물어 주게 한다.',
            task: '내 생각을 네 칸에 옮겨 쓰고, 짝의 "언제? 어디서? 어떻게?" 질문으로 주제를 한 칸 더 좁혀요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              talk('1·2차시에 고른 내 생각을 활동지 네 칸 가운데 앞의 세 칸에 옮겨 쓴 뒤 "다 했어요"를 누르세요.', '내 생각 차례', ['본 것', '떠오른 생각', '고른 주제'], ['1차시 활동지', '2차시 활동지']),
              talk('짝의 고른 주제를 읽고 "언제? 어디서? 어떻게?" 가운데 하나를 물어 준 뒤 "다 했어요"를 누르세요.', '짝에게 묻기', ['고른 주제', '물어볼 말'], ['언제?', '어디서?', '어떻게?']),
              talk('짝의 질문에 답한 말을 넣어 좁힌 주제를 넷째 칸에 쓰고 짝에게 읽어 준 뒤 "다 했어요"를 누르세요.', '좁힌 주제', ['고른 주제', '좁힌 주제'], ['한 문장으로', '그릴 장면이 보이게']),
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"좁힌 주제를 읽어 주면, 친구들이 머릿속에 장면을 그릴 수 있나요?" 두세 명이 좁힌 주제를 읽고, 듣는 친구가 떠오른 장면 하나를 말하게 한다. 출구 1번에서 좁힌 주제를 고른 주제 앞에 놓은 학생에게는 "제목 둘 가운데 어느 쪽이 더 자세한가요?"를 묻는다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { slots: ['본 것', '떠오른 생각', '고른 주제', '좁힌 주제'], cards: [{ id: 'e1', text: '참새가 전깃줄에 나란히 앉았어요', motif: 'bird' }, { id: 'e2', text: '참새들이 회의를 하나 봐', motif: 'cloud' }, { id: 'e3', text: '참새 회의', motif: 'house' }, { id: 'e4', text: '해 질 녘 전깃줄 위 참새들의 회의', motif: 'sun' }] }, prompt: '참새를 본 날, 생각이 자란 차례대로 카드를 놓아 보세요.', target: { order: ['e1', 'e2', 'e3', 'e4'] }, difficulty: 0.2 },
          { type: 'choice', prompt: '"강아지"를 더 자세하게 좁힌 주제는 무엇인가요?', options: ['동물', '귀여운 강아지', '눈 오는 마당에서 공을 쫓는 강아지'], answer: 2, difficulty: 0.15, explain: '어디서(눈 오는 마당), 어떻게(공을 쫓는)가 붙어 그릴 장면이 또렷해요.' },
          { type: 'short', prompt: '오늘 좁힌 내 주제를 한 문장으로 쓰세요.' },
        ],
      },
    ],
    worksheet: {
      title: '생각이 자라는 네 칸',
      items: [
        { type: 'table', prompt: '내 생각이 자란 차례를 쓰세요.', columns: ['본 것', '떠오른 생각', '고른 주제', '좁힌 주제'], cells: [['', '', '', '']] },
        { type: 'choice', prompt: '"본 것"에 ○ 하세요.', options: ['빗방울 달리기', '빗방울이 창문을 타고 흘러내려요', '빗방울끼리 달리기를 하나 봐', '교실 창문에서 달리는 빗방울들'], answer: '빗방울이 창문을 타고 흘러내려요' },
        { type: 'short', prompt: '"꽃밭"이라는 주제에 "언제·어디서·어떻게"를 하나 이상 붙여 좁혀 쓰세요.' },
        { type: 'draw', prompt: '내가 좁힌 주제의 장면을 작게 그려 보세요.' },
      ],
      easy: {
        note: '"~나 봐"는 떠오른 생각이에요. 제목 같은 두 카드 가운데 더 자세한 것이 좁힌 주제예요.',
        items: [
          { type: 'table', prompt: '내 주제를 쓰세요.', columns: ['고른 주제', '좁힌 주제'], cells: [['', '']] },
          { type: 'choice', prompt: '더 자세한 주제에 ○ 하세요.', options: ['고양이', '창가에서 낮잠 자는 고양이'], answer: '창가에서 낮잠 자는 고양이' },
          { type: 'draw', prompt: '좁힌 주제의 장면을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 맞는 칸에 놓으면 바로 표시되고, 색종이는 문제에 쓰는 모양 네 가지·색 다섯 가지와 두 크기만 나와요.',
      base: '스스로 놓은 뒤 확인하고, 모양 여섯 가지와 모든 색을 써요.',
      challenge: '차례에 들지 않는 "아는 사실" 카드가 섞여 있고, 개미 마을은 조각이 더 많고 개미를 과자에 겹쳐요.',
    },
    teacherNotes: '자주 보이는 어려움: ① "~나 봐" 같은 짐작을 본 것으로 여긴다 → "정말 눈에 보였나요, 그렇게 생각했나요?"를 묻는다. ② 주제를 좁히라고 하면 꾸미는 말(귀여운, 예쁜)만 붙인다 → 언제·어디서·어떻게를 붙이게 한다. ③ 처음 생각(1차시)과 좁힌 주제가 달라졌다고 걱정한다 → 생각이 자라며 주제가 바뀌는 것은 자연스럽다고 말한다. 활동지의 네 칸은 5차시 밑그림에서 다시 쓰므로 걷어 둔다.',
  }));

  // ───────────── 5차시 (핵심) ─────────────
  lessons.push(lesson(5, S1, {
    title: '주제를 낱말 세 개로 적고 넣을 것과 뺄 것 정하기',
    objective: '좁힌 주제를 낱말 세 개로 적고, 밑그림에 넣을 것과 뺄 것을 주제에 비추어 가를 수 있다.',
    illustration: {
      prompt: art('a pencil sketch on paper where ants under a leaf umbrella are circled and a snowman is crossed out, with three keyword cards beside it'),
      scene: scene([
        { motif: 'cloud', x: 110, y: 52 }, { motif: 'cloud', x: 360, y: 46, s: 0.8 }, { motif: 'hills', y: 214 },
        { motif: 'leaf', x: 160, y: 196, r: -30, s: 1.4 }, { motif: 'snow', x: 360, y: 190 }, { motif: 'flower', x: 260, y: 224, color: 'mint' },
        { motif: 'text', x: 240, y: 136, text: '넣을 것 ○, 뺄 것 ×', size: 22 },
      ]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '지난 시간 좁힌 주제 하나("비 오는 날 개미들의 이사")를 칠판에 쓴다. "이 그림에 눈사람을 넣으면 어떨까요?" 웃음이 나오면 "왜 이상한가요?"라고 묻고, 주제와 어긋나는 것은 뺀다는 것을 학생 말로 끌어낸다. "밑그림은 그리기 전에 무엇을 넣고 뺄지 정하는 지도예요. 밑그림을 건너뛰면 어떻게 될까요?" 대답을 들은 뒤, 오늘은 낱말 세 개와 ○·× 표시로 밑그림을 준비한다고 연다. 시연 단추로 카드가 넣을 것과 뺄 것으로 나뉘는 모습을 보여 준다.',
        student: '"비 오는 날 개미들의 이사" 그림에 넣으면 좋을 것 하나와 넣으면 이상한 것 하나를 말해 봅시다.',
        demo: { tool: 'mindmap', options: { topic: '비 오는 날 개미 이사', slots: [{ id: 'in', label: '넣을 것 ○' }, { id: 'out', label: '뺄 것 ×' }], cards: [{ id: 'd1', text: '줄지어 가는 개미' }, { id: 'd2', text: '눈사람' }] }, sequence: [{ sort: { in: ['d1'], out: ['d2'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 주제에 비추어 넣을 것과 뺄 것 가르기', minutes: 9, tool: 'mindmap',
            teacher: '"이것을 넣으면 주제가 더 잘 보이나요, 주제와 어긋나나요?" 카드마다 주제 문장을 다시 읽고 따지게 한다. 비 오는 날에 쨍쨍한 해, 밤하늘에 파란 낮 하늘처럼 주제와 맞지 않는 것은 뺀다. "멋있어서 넣고 싶어요"라는 학생에게는 "멋있어도 주제와 어긋나면 보는 사람이 헷갈려요"라고 말한다.',
            task: '주제 문장을 읽고, 카드마다 넣으면 주제가 더 잘 보이는지 주제와 어긋나는지 따져 나누어요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '"비 오는 날 개미들의 이사" 그림에 넣을 것과 뺄 것을 나누어 보세요.',
                toolOptions: { topic: '비 오는 날 개미 이사', slots: [{ id: 'in', label: '넣을 것 ○' }, { id: 'out', label: '뺄 것 ×' }], cards: [{ id: 'r1', text: '우산처럼 쓴 나뭇잎' }, { id: 'r2', text: '줄지어 가는 개미' }, { id: 'r3', text: '짐을 등에 진 개미' }, { id: 'r4', text: '쨍쨍한 한낮의 해' }, { id: 'r5', text: '눈사람' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'r1', text: '우산처럼 쓴 나뭇잎' }, { id: 'r2', text: '줄지어 가는 개미' }, { id: 'r3', text: '짐을 등에 진 개미' }, { id: 'r4', text: '쨍쨍한 한낮의 해' }, { id: 'r5', text: '눈사람' }, { id: 'r6', text: '땅에 고인 빗물 웅덩이' }, { id: 'r7', text: '바짝 마른 운동장 흙먼지' }] }, prompt: '"비 오는 날 개미들의 이사" 카드 일곱 장을 넣을 것과 뺄 것으로 나누어 보세요.', target: { sort: { in: ['r1', 'r2', 'r3', 'r6'], out: ['r4', 'r5', 'r7'] } } } },
                hints: ['주제 문장의 낱말(비 오는 날, 개미, 이사)을 하나씩 읽고, 카드가 그 낱말과 맞는지 어긋나는지 따져요.'],
                target: { sort: { in: ['r1', 'r2', 'r3'], out: ['r4', 'r5'] } }, difficulty: 0.15 },
              { prompt: '"밤하늘을 헤엄치는 고래" 그림에 넣을 것과 뺄 것을 나누어 보세요.',
                toolOptions: { topic: '밤하늘 고래', slots: [{ id: 'in', label: '넣을 것 ○' }, { id: 'out', label: '뺄 것 ×' }], cards: [{ id: 'n1', text: '반짝이는 별' }, { id: 'n2', text: '둥근 달' }, { id: 'n3', text: '꼬리를 흔드는 고래' }, { id: 'n4', text: '쨍쨍한 낮의 해' }, { id: 'n5', text: '맑은 파란 낮 하늘' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'n1', text: '반짝이는 별' }, { id: 'n2', text: '둥근 달' }, { id: 'n3', text: '꼬리를 흔드는 고래' }, { id: 'n4', text: '쨍쨍한 낮의 해' }, { id: 'n5', text: '맑은 파란 낮 하늘' }, { id: 'n6', text: '고래 등에서 뿜는 물줄기' }, { id: 'n7', text: '아침 해가 떠오르는 바다' }] }, prompt: '"밤하늘을 헤엄치는 고래" 카드 일곱 장을 넣을 것과 뺄 것으로 나누어 보세요.', target: { sort: { in: ['n1', 'n2', 'n3', 'n6'], out: ['n4', 'n5', 'n7'] } } } },
                target: { sort: { in: ['n1', 'n2', 'n3'], out: ['n4', 'n5'] } }, difficulty: 0.2 },
              { prompt: '"내 생일 아침의 식탁" 그림에 넣을 것과 뺄 것을 나누어 보세요.',
                toolOptions: { topic: '생일 아침 식탁', slots: [{ id: 'in', label: '넣을 것 ○' }, { id: 'out', label: '뺄 것 ×' }], cards: [{ id: 'h1', text: '촛불을 꽂은 케이크' }, { id: 'h2', text: '식탁에 둘러앉은 가족' }, { id: 'h3', text: '창으로 들어오는 아침 햇살' }, { id: 'h4', text: '깜깜한 밤하늘의 별' }, { id: 'h5', text: '학교 교실의 칠판' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'h1', text: '촛불을 꽂은 케이크' }, { id: 'h2', text: '식탁에 둘러앉은 가족' }, { id: 'h3', text: '창으로 들어오는 아침 햇살' }, { id: 'h4', text: '깜깜한 밤하늘의 별' }, { id: 'h5', text: '학교 교실의 칠판' }, { id: 'h6', text: '식탁 위에 놓인 선물 상자' }, { id: 'h7', text: '운동장에서 하는 달리기' }] }, prompt: '"내 생일 아침의 식탁" 카드 일곱 장을 넣을 것과 뺄 것으로 나누어 보세요.', target: { sort: { in: ['h1', 'h2', 'h3', 'h6'], out: ['h4', 'h5', 'h7'] } } } },
                target: { sort: { in: ['h1', 'h2', 'h3'], out: ['h4', 'h5'] } }, difficulty: 0.2,
                predict: { q: '뺄 것을 정하면 그림이 어떻게 될까요?', options: ['더 허전해요', '주제가 또렷해요'], answer: 1 },
                conclude: '주제와 어긋나는 것을 빼면, 보는 사람이 무엇을 그렸는지 바로 알아요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 넣을 것만으로 밑그림 자리 잡기', minutes: 9, tool: 'collage',
            teacher: '"밑그림에서는 자세히 그리기보다, 넣을 것을 어디에 얼마나 크게 놓을지 정해요." 조각을 연필 밑그림의 큰 모양이라고 생각하게 한다. 뺄 것으로 정한 것(비 오는 날의 해)을 붙인 학생에게는 "활동 1에서 이 카드는 어느 칸이었나요?"라고 묻는다. 마지막 문항은 내 좁힌 주제(4차시 활동지)로 만든다.',
            task: '넣을 것만 골라 큰 모양으로 자리를 잡아요. 뺄 것으로 정한 것은 붙이지 않아요.',
            levels: {
              easy: { shapes: ['leaf', 'circle', 'semi', 'star'], colors: ['초록', '검정', '파랑', '노랑', '하양'], sizes: ['s', 'l'] },
              base: { shapes: ['leaf', 'circle', 'semi', 'star', 'square', 'triangle'] },
              challenge: {},
            },
            items: [
              { prompt: '"비 오는 날 개미들의 이사" 밑그림이에요. 큰 초록 나뭇잎 우산 하나와 작은 검정 개미 동그라미 네 개 이상을 붙이고, 노랑 해는 넣지 않아요.', target: { has: [{ shape: 'leaf', color: '초록', size: 'l', n: 1 }, { shape: 'circle', color: '검정', size: 's', min: 4 }, { shape: 'circle', color: '노랑', max: 0 }] }, difficulty: 0.2,
                hints: ['활동 1에서 넣을 것과 뺄 것으로 나눈 카드를 떠올려요. 넣을 것만 큰 모양으로 자리를 잡아요.'],
                levels: { challenge: { prompt: '"비 오는 날 개미들의 이사" 밑그림이에요. 큰 초록 나뭇잎 우산 하나, 작은 검정 개미 동그라미 여섯 개 이상, 파랑 빗방울 세모 세 개 이상을 붙이고 노랑 조각은 넣지 않아요.', target: { has: [{ shape: 'leaf', color: '초록', size: 'l', n: 1 }, { shape: 'circle', color: '검정', size: 's', min: 6 }, { shape: 'triangle', color: '파랑', min: 3 }, { color: '노랑', max: 0 }] } } } },
              { prompt: '"밤하늘을 헤엄치는 고래" 밑그림이에요. 큰 파랑 반원 고래 하나와 별 세 개 이상을 붙이고, 노랑 동그라미 해는 넣지 않아요.', target: { has: [{ shape: 'semi', color: '파랑', size: 'l', n: 1 }, { shape: 'star', min: 3 }, { shape: 'circle', color: '노랑', max: 0 }] }, difficulty: 0.2,
                hints: ['주제가 밤이에요. 고래와 밤하늘에 맞는 것만 붙이고, 낮을 떠올리게 하는 것은 빼요.'],
                predict: { q: '밤하늘 고래 그림에 해를 넣으면 어떻게 보일까요?', options: ['밤처럼', '낮처럼'], answer: 1 },
                conclude: '해를 넣으면 낮처럼 보여 "밤하늘" 주제가 흐려져요. 그래서 밑그림에서 미리 빼요.' },
              { prompt: '내 좁힌 주제로 넣을 것만 골라 밑그림 자리를 잡고 점검해요.', target: { selfCheck: ['주제를 낱말 세 개로 적었어요', '넣을 것만 골라 붙였어요', '가장 중요한 것을 크게 놓았어요'], minPieces: 3 }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a3', title: '활동 3. 연필 밑그림에 ○·× 표시하기 (짝 활동)', minutes: 8, tool: 'mindmap', pair: true,
            teacher: '준비물: 연필, 지우개, 8절 도화지 반 장. "연필을 살살 잡고 큰 모양만 그려요. 밑그림은 나중에 지울 수 있게 연하게!" 먼저 활동지 1번에 주제 낱말 세 개를 쓰고, 떠오르는 것을 모두 작게 그린 뒤 넣을 것에 ○, 뺄 것에 ×를 친다. 짝은 ×를 친 것을 보고 "왜 뺐어?"라고 묻는다. "밑그림은 시간 낭비 아니에요?"라는 학생에게는 "길을 모르고 출발하면 더 오래 걸려요"라고 말한다.',
            task: '주제 낱말 세 개를 쓰고, 떠오르는 것을 연하게 그린 뒤 넣을 것에 ○, 뺄 것에 ×를 쳐요. 짝과 까닭을 말해요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              talk('내 좁힌 주제를 낱말 세 개로 나누어 활동지 1번에 쓴 뒤 "다 했어요"를 누르세요.', '주제 낱말 세 개', ['주제 문장', '낱말 세 개'], ['언제', '누가', '무엇을']),
              talk('떠오르는 것을 연필로 연하게 모두 그리고, 넣을 것에 ○ 뺄 것에 × 를 친 뒤 "다 했어요"를 누르세요.', '○·× 표시', ['넣을 것 ○', '뺄 것 ×'], ['주제가 보여요', '주제와 어긋나요']),
              talk('짝이 ×를 친 것 하나를 골라 "왜 뺐어?"라고 묻고 까닭을 들은 뒤 "다 했어요"를 누르세요.', '짝에게 묻기', ['뺀 것', '뺀 까닭'], ['주제와 어긋나요', '주제를 흐려요']),
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"밑그림을 해 보니, 바로 그릴 때보다 무엇이 좋았나요?" 두세 명의 대답을 듣고, 뺄 것을 미리 정해 두면 칠할 때 고민이 줄어든다는 것을 짚는다. 출구 1번에서 주제와 어긋나는 카드를 넣을 것에 둔 학생에게는 주제 문장을 소리 내어 다시 읽게 한다. 밑그림 도화지는 이름을 쓰고 걷어 6차시에 다시 쓴다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '눈 오는 날 썰매', slots: [{ id: 'in', label: '넣을 것 ○' }, { id: 'out', label: '뺄 것 ×' }], cards: [{ id: 'e1', text: '썰매 타는 아이' }, { id: 'e2', text: '하얗게 쌓인 눈' }, { id: 'e3', text: '바닷가 모래성' }, { id: 'e4', text: '활짝 핀 해바라기' }] }, prompt: '"눈 오는 날 언덕에서 썰매 타기" 그림에 넣을 것과 뺄 것을 나누어 보세요.', target: { sort: { in: ['e1', 'e2'], out: ['e3', 'e4'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '밑그림을 그리는 까닭으로 알맞은 것은 무엇인가요?', options: ['시간을 채우려고', '넣을 것과 뺄 것, 자리를 미리 정하려고', '색을 먼저 칠해 보려고'], answer: 1, difficulty: 0.15, explain: '밑그림에서 넣을 것과 자리를 정해 두면 실제로 그릴 때 헤매지 않아요.' },
          { type: 'mood', prompt: '밑그림을 그려 보니 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '주제 낱말과 밑그림',
      items: [
        { type: 'table', prompt: '내 좁힌 주제를 쓰고, 낱말 세 개로 나누어 쓰세요.', columns: ['좁힌 주제', '낱말 1', '낱말 2', '낱말 3'], cells: [['', '', '', '']] },
        { type: 'table', prompt: '떠오른 것을 넣을 것과 뺄 것으로 나누어 쓰고 까닭을 쓰세요.', columns: ['떠오른 것', '○ 또는 ×', '까닭'], cells: [['', '', ''], ['', '', ''], ['', '', '']] },
        { type: 'choice', prompt: '"비 오는 날 개미들의 이사"에서 뺄 것에 ○ 하세요.', options: ['우산처럼 쓴 나뭇잎', '줄지어 가는 개미', '쨍쨍한 한낮의 해', '짐을 진 개미'], answer: '쨍쨍한 한낮의 해' },
        { type: 'draw', prompt: '넣을 것만 골라 연필로 연하게 밑그림을 그리세요.' },
      ],
      easy: {
        note: '주제 문장을 소리 내어 읽고, 그 말과 어긋나는 것은 × 해요.',
        items: [
          { type: 'short', prompt: '내 주제를 쓰세요.' },
          { type: 'choice', prompt: '"밤하늘 고래"에서 뺄 것에 ○ 하세요.', options: ['반짝이는 별', '쨍쨍한 해'], answer: '쨍쨍한 해' },
          { type: 'draw', prompt: '넣을 것만 골라 밑그림을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 맞는 칸에 놓으면 바로 표시되고, 색종이는 밑그림에 쓰는 모양 네 가지·색 다섯 가지와 작게·크게 두 크기만 나와요.',
      base: '스스로 나눈 뒤 확인하고, 모양 여섯 가지와 모든 색·크기를 써요.',
      challenge: '카드가 일곱 장으로 늘어 넣을 것과 뺄 것이 더 섞여 있고, 개미 이사 밑그림은 빗방울까지 넣고 노랑 조각을 모두 빼야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 밑그림은 시간만 잡아먹는다고 여긴다(이 주제의 대표 오개념) → 정리 단계에서 밑그림 덕분에 쉬워진 점을 학생 말로 모은다. ② 밑그림을 진하고 자세하게 그린다 → 연필을 살살 잡고 큰 모양만 그리게 한다. ③ 멋있는 것을 주제와 상관없이 넣는다 → 주제 문장의 어느 낱말과 이어지는지 묻는다. 준비물: 연필, 지우개, 8절 도화지 반 장(밑그림은 6차시에 다시 쓴다).',
  }));

  // ───────────── 6차시 (연습) ─────────────
  lessons.push(lesson(6, S1, {
    title: '큰 모양부터 연하게, 밑그림 차례 지켜 그리기',
    objective: '밑그림을 준비하고 그리는 차례(주제 낱말 → ○·× 정하기 → 큰 모양 → 자세한 부분)를 말하고, 그 차례대로 밑그림을 그릴 수 있다.',
    illustration: {
      prompt: art('a curled-up cat napping in a sunny window drawn first as big light pencil circles, then with ears, tail and whiskers added step by step'),
      scene: scene([
        { motif: 'sun', x: 404, y: 60, s: 0.9 }, { motif: 'cloud', x: 110, y: 52 }, { motif: 'house', x: 150, y: 214, s: 1.1 },
        { motif: 'flower', x: 330, y: 226, color: 'peach' }, { motif: 'leaf', x: 380, y: 210, r: 25 },
        { motif: 'text', x: 260, y: 144, text: '큰 모양에서 작은 모양으로', size: 22 },
      ]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '칠판에 고양이 수염부터 아주 진하게 그려 보인다. "수염부터 그렸더니 몸이 들어갈 자리가 모자라요. 무엇부터 그렸어야 할까요?" 학생 대답을 받아 "큰 모양부터, 연하게!"를 함께 말한다. 이어 큰 동그라미 몸통 → 머리 → 귀·꼬리 → 수염 차례로 다시 그려 견주어 보인다. "지난 시간 밑그림을 오늘은 이 차례로 이어 그려요." 시연 단추로 큰 조각부터 놓이는 모습을 보여 준다.',
        student: '수염부터 그린 고양이와 큰 동그라미부터 그린 고양이를 보고, 어느 쪽이 그리기 쉬웠을지 말해 봅시다.',
        demo: { tool: 'collage', options: { shapes: ['semi', 'circle'], colors: ['갈색'] }, sequence: [{ has: [{ shape: 'semi', color: '갈색', size: 'l', n: 1 }, { shape: 'circle', color: '갈색', size: 'm', n: 1 }], overlap: 1 }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 밑그림의 차례 놓기', minutes: 8, tool: 'story',
            teacher: '"이 일을 하려면 먼저 무엇이 되어 있어야 하나요?" 카드마다 앞에 와야 할 일을 묻는다. ○·×를 정하기 전에 큰 모양을 그리면 뺄 것까지 그리게 된다는 것, 큰 모양 전에 수염을 그리면 자리가 모자란다는 것을 짚는다. 고칠 때도 지운 자리를 깨끗이 한 뒤 새 선을 긋는다는 것을 말한다.',
            task: '밑그림을 준비하고 그리고 고치는 일을 카드로 읽고, 먼저 할 일부터 차례대로 놓아요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              { prompt: '밑그림을 준비하는 일을 차례대로 놓아 보세요.',
                toolOptions: { slots: ['첫째', '둘째', '셋째', '넷째'], cards: [{ id: 'a', text: '주제를 낱말 세 개로 써요', motif: 'star' }, { id: 'b', text: '떠오른 것에 ○·× 를 해요', motif: 'leaf' }, { id: 'c', text: '넣을 것을 큰 모양으로 연하게 그려요', motif: 'cloud' }, { id: 'd', text: '자세한 부분을 더해요', motif: 'flower' }] },
                hints: ['카드마다 "이 일을 하려면 먼저 무엇이 되어 있어야 할까?"를 물어요. 앞에 아무것도 필요 없는 일이 맨 앞이에요.', '넣을 것을 정하기 전에 그리면 뺄 것까지 그리게 돼요. 큰 모양과 자세한 부분은 어느 쪽이 먼저인지 놓은 자리를 다시 보세요.', '주제 낱말 쓰기 → ○·× 정하기 → 넣을 것을 큰 모양으로 연하게 → 자세한 부분 더하기 차례예요.'],
                target: { order: ['a', 'b', 'c', 'd'] }, difficulty: 0.2 },
              { prompt: '낮잠 자는 고양이 밑그림을 그리는 차례대로 놓아 보세요.',
                toolOptions: { slots: ['첫째', '둘째', '셋째', '넷째'], cards: [{ id: 'a', text: '둥글게 만 몸통을 큰 동그라미로', motif: 'sun' }, { id: 'b', text: '몸통에 붙은 머리를 작은 동그라미로', motif: 'cloud' }, { id: 'c', text: '귀와 꼬리를 더해요', motif: 'leaf' }, { id: 'd', text: '수염과 털 무늬를 그려요', motif: 'star' }] },
                levels: { challenge: { prompt: '낮잠 자는 고양이 밑그림 차례대로 놓아 보세요. 밑그림에서 하지 않는 일 카드 하나는 남겨 두세요.', toolOptions: { slots: ['첫째', '둘째', '셋째', '넷째'], cards: [{ id: 'a', text: '둥글게 만 몸통을 큰 동그라미로', motif: 'sun' }, { id: 'b', text: '몸통에 붙은 머리를 작은 동그라미로', motif: 'cloud' }, { id: 'c', text: '귀와 꼬리를 더해요', motif: 'leaf' }, { id: 'd', text: '수염과 털 무늬를 그려요', motif: 'star' }, { id: 'x', text: '물감으로 털을 칠해요', motif: 'flower' }] } } },
                hints: ['밑그림은 큰 모양에서 작은 모양으로 그려요. 카드마다 그리는 것이 얼마나 큰지 견주어요.', '가장 큰 것이 맨 앞에 있나요? 수염처럼 가장 작은 것은 어디에 놓았는지 보세요.', '몸통(가장 큼) → 머리 → 귀와 꼬리 → 수염과 털 무늬(가장 작음) 차례예요. 물감 칠하기는 밑그림이 아니에요.'],
                target: { order: ['a', 'b', 'c', 'd'] }, difficulty: 0.25 },
              { prompt: '밑그림에서 잘못 그린 선을 고치는 차례대로 놓아 보세요.',
                toolOptions: { slots: ['첫째', '둘째', '셋째', '넷째'], cards: [{ id: 'a', text: '고칠 선을 찾아 손가락으로 짚어요', motif: 'star' }, { id: 'b', text: '지우개로 살살 지워요', motif: 'cloud' }, { id: 'c', text: '지우개 가루를 털어 내요', motif: 'leaf' }, { id: 'd', text: '새 선을 연하게 그려요', motif: 'flower' }] },
                hints: ['고치기 전에 무엇을 고칠지 알아야 해요. 카드마다 앞에 어떤 일이 되어 있어야 하는지 따져요.', '지우개 가루가 남은 채로 새 선을 그리면 선이 번져요. 가루를 터는 일과 새 선 긋기의 자리를 견주어 보세요.', '고칠 선 찾기 → 살살 지우기 → 가루 털기 → 새 선을 연하게 그리기 차례예요.'],
                target: { order: ['a', 'b', 'c', 'd'] }, difficulty: 0.25,
                predict: { q: '밑그림을 진하게 그리면 고칠 때 어떻게 될까요?', options: ['잘 지워져요', '자국이 남아요'], answer: 1 },
                conclude: '밑그림을 연하게 그리면 고칠 때 자국이 남지 않아요. 그래서 밑그림은 연하게 그려요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 큰 모양으로 밑그림 자리 잡기', minutes: 9, tool: 'collage',
            teacher: '"조각은 연필 밑그림의 큰 모양이에요. 큰 것부터 놓아 보세요." 첫 문항은 고양이 몸통과 머리, 둘째는 새 주제(비눗방울 부는 동생)다. 조각 수에 한도가 있는 문항은 "밑그림은 큰 모양만"이라는 뜻이다. 작은 조각을 먼저 잔뜩 놓은 학생에게는 "가장 큰 것을 놓을 자리가 남았나요?"라고 묻는다.',
            task: '가장 큰 모양부터 붙여 자리를 잡고, 그다음 작은 모양을 더해요. 밑그림이니 조각은 많지 않게 써요.',
            levels: {
              easy: { shapes: ['semi', 'circle', 'triangle', 'rect'], colors: ['갈색', '하양', '분홍', '파랑'], sizes: ['m', 'l'] },
              base: { shapes: ['semi', 'circle', 'triangle', 'rect', 'leaf', 'star'] },
              challenge: {},
            },
            items: [
              { prompt: '낮잠 자는 고양이 밑그림이에요. 큰 갈색 반원 몸통에 보통 갈색 동그라미 머리를 겹쳐 붙이고, 조각은 다섯 개까지만 써요.', target: { has: [{ shape: 'semi', color: '갈색', size: 'l', n: 1 }, { shape: 'circle', color: '갈색', size: 'm', n: 1 }], overlap: 1, pieces: { max: 5 } }, difficulty: 0.2,
                hints: ['가장 큰 모양이 무엇인지 먼저 정해 놓고, 그다음 크기의 조각을 거기에 붙여요. 밑그림이라 조각 수를 세어요.'],
                levels: { challenge: { prompt: '낮잠 자는 고양이 밑그림이에요. 큰 갈색 반원 몸통, 보통 갈색 동그라미 머리, 세모 귀 두 개를 겹쳐 붙이고 조각은 여섯 개까지만 써요.', target: { has: [{ shape: 'semi', color: '갈색', size: 'l', n: 1 }, { shape: 'circle', color: '갈색', size: 'm', n: 1 }, { shape: 'triangle', n: 2 }], overlap: 2, pieces: { max: 6 } } } } },
              { prompt: '"비눗방울 부는 동생" 밑그림이에요. 큰 하양 동그라미 비눗방울 세 개 이상과 분홍 동그라미 동생 얼굴 하나를 붙여요.', target: { has: [{ shape: 'circle', color: '하양', size: 'l', min: 3 }, { shape: 'circle', color: '분홍', n: 1 }], pieces: { max: 7 } }, difficulty: 0.25,
                hints: ['주제에서 가장 눈에 띄게 할 것이 무엇인지 정하고, 그것을 큰 모양으로 먼저 놓아요. 조각 수는 많지 않게 해요.'],
                levels: { challenge: { prompt: '"비눗방울 부는 동생" 밑그림이에요. 크기가 다른 하양 비눗방울 네 개 이상(큰 것 두 개 이상)과 분홍 얼굴 하나를 붙이고, 조각은 여덟 개까지만 써요.', target: { has: [{ shape: 'circle', color: '하양', min: 4 }, { shape: 'circle', color: '하양', size: 'l', min: 2 }, { shape: 'circle', color: '분홍', n: 1 }], pieces: { max: 8 } } } } },
              { prompt: '5차시 내 밑그림의 넣을 것을 큰 모양부터 붙여 자리를 잡고 점검해요.', target: { selfCheck: ['가장 큰 모양을 먼저 놓았어요', '넣을 것만 붙였어요', '자세한 부분은 나중에 더하려고 남겨 두었어요'], minPieces: 3 }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a3', title: '활동 3. 내 밑그림을 차례대로 이어 그리기 (짝 활동)', minutes: 9, tool: 'mindmap', pair: true,
            teacher: '준비물: 5차시에 걷은 밑그림 도화지, 연필, 지우개. "오늘은 차례 카드를 책상에 놓고, 한 단계를 마칠 때마다 짝에게 보여 주고 다음으로 가요." 짝은 "큰 모양이 다 들어갔어?"처럼 그 단계만 확인해 준다. 진하게 누르는 학생에게는 연필을 조금 뒤쪽으로 잡게 한다. 자세한 부분은 오늘 다 못 해도 괜찮다고 말한다.',
            task: '밑그림 도화지에 큰 모양 → 작은 모양 → 자세한 부분 차례로 이어 그려요. 단계마다 짝에게 보여 줘요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              talk('넣을 것 가운데 가장 큰 모양을 연하게 그리고, 짝에게 보여 준 뒤 "다 했어요"를 누르세요.', '1단계 큰 모양', ['그린 것', '짝의 확인'], ['연하게', '크게']),
              talk('그다음 크기의 모양을 더하고, 짝이 "큰 모양이 다 들어갔어?"라고 확인해 준 뒤 "다 했어요"를 누르세요.', '2단계 작은 모양', ['그린 것', '짝의 확인'], ['자리', '크기']),
              talk('자세한 부분 하나를 더하고, 고칠 선이 있으면 고치는 차례대로 고친 뒤 "다 했어요"를 누르세요.', '3단계 자세한 부분', ['더한 것', '고친 것'], ['무늬', '표정', '지우개']),
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 차례대로 그려 보니 지난 시간과 무엇이 달랐나요?" 큰 모양부터 그린 밑그림 두세 장을 실물 화상기로 보인다. 출구 1번에서 작은 것을 앞에 놓은 학생에게는 "그 자리가 남았을까요?"를 다시 묻는다. 밑그림은 7차시에 다른 구도와 견줄 때 쓴다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { slots: ['첫째', '둘째', '셋째', '넷째'], cards: [{ id: 'a', text: '나무 한 그루를 큰 세모로', motif: 'tree' }, { id: 'b', text: '줄기를 긴 네모로', motif: 'leaf' }, { id: 'c', text: '가지에 앉은 새를 작게', motif: 'bird' }, { id: 'd', text: '새의 눈과 부리를 그려요', motif: 'star' }] }, prompt: '"나무에 앉은 새" 밑그림을 그리는 차례대로 놓아 보세요.', target: { order: ['a', 'b', 'c', 'd'] }, difficulty: 0.2 },
          { type: 'choice', prompt: '밑그림 선은 어떻게 그리면 좋을까요?', options: ['진하고 굵게', '연하고 가볍게', '사인펜으로'], answer: 1, difficulty: 0.1, explain: '연하게 그리면 고칠 때 자국이 남지 않고, 나중에 색을 칠해도 선이 비치지 않아요.' },
          { type: 'mood', prompt: '차례대로 밑그림을 그려 보니 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '밑그림 차례',
      items: [
        { type: 'table', prompt: '밑그림을 그리는 차례를 쓰세요.', columns: ['차례', '할 일'], cells: [['1', ''], ['2', ''], ['3', ''], ['4', '']] },
        { type: 'choice', prompt: '고양이 밑그림에서 가장 먼저 그릴 것에 ○ 하세요.', options: ['수염', '둥글게 만 몸통', '털 무늬', '눈동자'], answer: '둥글게 만 몸통' },
        { type: 'short', prompt: '밑그림을 연하게 그리는 까닭을 쓰세요.' },
        { type: 'draw', prompt: '"비눗방울 부는 동생"을 큰 모양부터 연하게 밑그림으로 그리세요.' },
      ],
      easy: {
        note: '큰 모양 → 작은 모양 → 자세한 부분, 그리고 언제나 연하게!',
        items: [
          { type: 'choice', prompt: '먼저 그릴 것에 ○ 하세요.', options: ['큰 몸통', '작은 수염'], answer: '큰 몸통' },
          { type: 'short', prompt: '밑그림 선은 진하게, 연하게 가운데 어떻게 그리나요?' },
          { type: 'draw', prompt: '고양이를 큰 동그라미부터 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 맞는 칸에 놓으면 바로 표시되고, 색종이는 밑그림에 쓰는 모양 네 가지·색 네 가지·크기 두 가지만 나와요.',
      base: '스스로 놓은 뒤 확인하고, 모양 여섯 가지와 모든 색·크기를 써요.',
      challenge: '밑그림이 아닌 일 카드가 섞여 있고, 고양이에는 귀까지, 비눗방울은 크기를 섞어 더 많이 붙이되 조각 수 한도를 지켜요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 좋아하는 작은 부분(눈, 수염)부터 그린다 → 큰 모양부터 그린 그림과 견주어 자리 문제를 보이게 한다. ② 밑그림을 진하게 눌러 그린다 → 지울 때 자국이 남는 것을 직접 겪게 한다. ③ 밑그림에서 모든 것을 끝내려 한다 → 밑그림은 자리와 크기를 정하는 단계라고 말한다. 준비물: 5차시 밑그림 도화지, 연필, 지우개.',
  }));

  // ───────────── 7차시 (확장) ─────────────
  lessons.push(lesson(7, S1, {
    title: '같은 주제를 두 가지 밑그림으로 그려 견주기',
    objective: '같은 주제를 주인공 크기가 다른 두 가지 밑그림으로 만들어 견주고, 주제가 더 잘 드러나는 쪽을 까닭을 들어 고를 수 있다.',
    illustration: {
      prompt: art('two small paper sketches side by side of a frog on a lily pad, one with a tiny frog far away in a big pond and one with a huge frog filling the frame'),
      scene: scene([
        { motif: 'cloud', x: 110, y: 50 }, { motif: 'sun', x: 404, y: 56, s: 0.7 }, { motif: 'wave', x: 240, y: 226 },
        { motif: 'leaf', x: 140, y: 196, r: 10, s: 1.4 }, { motif: 'leaf', x: 340, y: 204, r: -10, s: 0.7 }, { motif: 'flower', x: 400, y: 222, color: 'rose' },
        { motif: 'text', x: 240, y: 132, text: 'ㄱ 밑그림, ㄴ 밑그림', size: 22 },
      ]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '칠판에 "연잎 위에서 노래하는 개구리" 밑그림 두 장을 붙인다(ㄱ: 넓은 연못 구석에 작은 개구리, ㄴ: 화면 가득 큰 개구리). "어느 그림이 \'노래하는 개구리\'를 더 잘 보여 주나요? 왜 그렇게 생각하나요?" 대답이 갈리면 "ㄱ은 무엇을 더 잘 보여 주나요?"라고 묻는다. 연못이 넓다는 것은 ㄱ이, 개구리 표정은 ㄴ이 더 잘 보인다는 것을 끌어내고 "같은 주제도 밑그림을 두 가지로 그려 보면 더 나은 쪽을 고를 수 있어요"라고 연다.',
        student: '개구리 밑그림 두 장을 보고, 노래하는 개구리가 더 잘 보이는 쪽과 그 까닭을 말해 봅시다.',
        demo: { tool: 'collage', options: { shapes: ['circle', 'semi'], colors: ['초록', '파랑'] }, sequence: [{ has: [{ shape: 'circle', color: '초록', size: 'l', n: 1 }] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 두 밑그림이 잘 보여 주는 것 잇기', minutes: 8, tool: 'mindmap',
            teacher: '"이 밑그림을 보면 무엇이 가장 먼저 눈에 들어올까요?" 밑그림 설명을 읽고, 그 밑그림이 잘 보여 주는 것을 잇는다. 주인공이 크면 표정과 몸짓이, 작고 둘레가 넓으면 어디에 있는지가 잘 보인다는 것을 기준으로 세운다. "어느 쪽이 더 잘 그린 그림인가요?"라는 질문에는 "주제가 무엇이냐에 따라 달라요"라고 답한다.',
            task: '밑그림 설명을 읽고, 그 밑그림이 가장 잘 보여 주는 것을 이어요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              { prompt: '개구리 밑그림 두 가지가 가장 잘 보여 주는 것을 이어 보세요.',
                toolOptions: { mode: 'match', topic: '연못 개구리', slots: [{ id: 'g', label: 'ㄱ: 넓은 연못 구석에 작은 개구리' }, { id: 'n', label: 'ㄴ: 화면 가득 큰 개구리 얼굴' }], cards: [{ id: 'c1', text: '개구리가 어디에 사는지' }, { id: 'c2', text: '노래하는 개구리의 표정' }, { id: 'cx', text: '개구리가 먹은 음식' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'c1', text: '개구리가 어디에 사는지' }, { id: 'c2', text: '노래하는 개구리의 표정' }, { id: 'cx', text: '개구리가 먹은 음식' }, { id: 'cy', text: '개구리 울음소리의 크기' }] } } },
                hints: ['밑그림마다 화면을 가장 많이 차지하는 것이 무엇인지 떠올려요. 크게 그린 것이 가장 먼저 눈에 들어와요.', '이은 카드가 그 밑그림에서 크게 그려진 것인지 다시 보세요. 밑그림으로 보여 줄 수 없는 것은 남겨요.', 'ㄱ은 연못이 넓게 그려져 사는 곳이, ㄴ은 얼굴이 크게 그려져 표정이 잘 보여요.'],
                target: { match: { g: 'c1', n: 'c2' } }, difficulty: 0.2 },
              { prompt: '운동회 밑그림 두 가지가 가장 잘 보여 주는 것을 이어 보세요.',
                toolOptions: { mode: 'match', topic: '운동회', slots: [{ id: 'g', label: 'ㄱ: 운동장 전체에 작은 사람들이 가득' }, { id: 'n', label: 'ㄴ: 결승선을 끊는 한 사람이 크게' }], cards: [{ id: 'c1', text: '운동회 날 운동장의 북적임' }, { id: 'c2', text: '1등으로 들어온 기쁨' }, { id: 'cx', text: '운동회가 열린 날짜' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'c1', text: '운동회 날 운동장의 북적임' }, { id: 'c2', text: '1등으로 들어온 기쁨' }, { id: 'cx', text: '운동회가 열린 날짜' }, { id: 'cy', text: '응원가의 노랫말' }] } } },
                target: { match: { g: 'c1', n: 'c2' } }, difficulty: 0.25 },
              { prompt: '눈 오는 날 밑그림 두 가지가 가장 잘 보여 주는 것을 이어 보세요.',
                toolOptions: { mode: 'match', topic: '눈 오는 날', slots: [{ id: 'g', label: 'ㄱ: 하얀 마을 지붕들 위로 눈이 펑펑' }, { id: 'n', label: 'ㄴ: 손바닥 위 눈송이 하나가 크게' }], cards: [{ id: 'c1', text: '온 마을에 눈이 내린 모습' }, { id: 'c2', text: '눈송이의 생김새' }, { id: 'cx', text: '눈이 내린 시간' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'c1', text: '온 마을에 눈이 내린 모습' }, { id: 'c2', text: '눈송이의 생김새' }, { id: 'cx', text: '눈이 내린 시간' }, { id: 'cy', text: '눈이 녹는 까닭' }] } } },
                target: { match: { g: 'c1', n: 'c2' } }, difficulty: 0.25,
                predict: { q: '"눈송이의 생김새"가 주제라면 어느 밑그림이 알맞을까요?', options: ['ㄱ', 'ㄴ', '아무거나'], answer: 1 },
                conclude: '보여 주고 싶은 것을 크게 그린 밑그림이 그 주제에 알맞아요. 주제에 따라 고르는 밑그림이 달라요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 한 주제로 두 가지 밑그림 만들기', minutes: 10, tool: 'collage',
            teacher: '"같은 개구리 주제로 ㄱ과 ㄴ을 모두 만들어 봐요." ㄱ은 주인공을 작게, 둘레를 넓게, ㄴ은 주인공을 크게 붙인다. 둘을 다 만든 뒤 "내 주제에는 어느 쪽이 맞나요?"를 짝에게 말하게 한다. 크기를 바꾸지 않고 자리만 옮기는 학생에게는 크기 고르개(작게·보통·크게)를 가리킨다.',
            task: '같은 주제를 주인공 크기만 바꾸어 두 가지로 붙여 보고, 내 주제에 맞는 쪽을 골라요.',
            levels: {
              easy: { shapes: ['circle', 'semi', 'leaf', 'rect'], colors: ['초록', '파랑', '하양', '노랑'], sizes: ['s', 'l'] },
              base: { shapes: ['circle', 'semi', 'leaf', 'rect', 'star', 'triangle'] },
              challenge: {},
            },
            items: [
              { prompt: 'ㄱ 밑그림: 작은 초록 동그라미 개구리 하나와 넓은 연못이 될 큰 파랑 반원 두 개 이상을 붙여요.', target: { has: [{ shape: 'circle', color: '초록', size: 's', n: 1 }, { shape: 'semi', color: '파랑', size: 'l', min: 2 }] }, difficulty: 0.2,
                hints: ['ㄱ은 어디에 사는지를 보여 주는 밑그림이에요. 주인공과 둘레 가운데 무엇을 크게 할지 정해요.'],
                levels: { challenge: { prompt: 'ㄱ 밑그림: 작은 초록 동그라미 개구리 하나, 큰 파랑 반원 연못 세 개 이상, 연잎 나뭇잎 두 개 이상을 붙이고 개구리를 연잎에 겹쳐요.', target: { has: [{ shape: 'circle', color: '초록', size: 's', n: 1 }, { shape: 'semi', color: '파랑', size: 'l', min: 3 }, { shape: 'leaf', min: 2 }], overlap: 1 } } } },
              { prompt: 'ㄴ 밑그림: 큰 초록 동그라미 개구리 얼굴 하나에 작은 하양 동그라미 눈 두 개를 겹쳐 붙여요.', target: { has: [{ shape: 'circle', color: '초록', size: 'l', n: 1 }, { shape: 'circle', color: '하양', size: 's', n: 2 }], overlap: 2 }, difficulty: 0.25,
                hints: ['ㄴ은 표정을 보여 주는 밑그림이에요. 얼굴을 어떤 크기로 놓아야 눈이 잘 보일지 생각해요.'],
                levels: { challenge: { prompt: 'ㄴ 밑그림: 큰 초록 개구리 얼굴 하나, 작은 하양 눈 두 개, 노래하는 입이 될 반원 하나를 모두 얼굴에 겹쳐 붙여요.', target: { has: [{ shape: 'circle', color: '초록', size: 'l', n: 1 }, { shape: 'circle', color: '하양', size: 's', n: 2 }, { shape: 'semi', n: 1 }], overlap: 3 } } },
                predict: { q: '노래하는 개구리의 표정을 보여 주려면 어느 밑그림이 좋을까요?', options: ['ㄱ', 'ㄴ'], answer: 1 },
                conclude: '보여 주고 싶은 것이 표정이면 얼굴을 크게, 사는 곳이면 둘레를 넓게 그려요.' },
              { prompt: '내 주제로 주인공 크기가 다른 밑그림 하나를 더 만들어 처음 것과 견주고 점검해요.', target: { selfCheck: ['처음 밑그림과 주인공 크기를 다르게 했어요', '두 밑그림이 잘 보여 주는 것을 말했어요', '내 주제에 맞는 쪽을 골랐어요'], minPieces: 3 }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a3', title: '활동 3. 작은 밑그림 두 장 그려 짝에게 묻기 (짝 활동)', minutes: 8, tool: 'mindmap', pair: true,
            teacher: '준비물: 손바닥만 한 네모 두 칸을 그린 활동지, 연필. "자세히 그리지 말고 큰 모양만 2분 안에 그려요." ㄱ 칸에는 주인공을 작게, ㄴ 칸에는 크게 그린다. 짝에게 "무엇이 먼저 보여?"라고 묻고 짝의 대답을 칸 아래에 받아 적는다. 짝이 고른 쪽과 내가 고른 쪽이 달라도 괜찮다고 말한다.',
            task: '활동지 두 칸에 주인공 크기가 다른 작은 밑그림을 그리고, 짝에게 무엇이 먼저 보이는지 물어 받아 적어요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              talk('활동지 ㄱ 칸에 주인공을 작게, ㄴ 칸에 크게 2분 동안 그린 뒤 "다 했어요"를 누르세요.', '작은 밑그림 두 장', ['ㄱ 주인공 작게', 'ㄴ 주인공 크게'], ['큰 모양만', '2분']),
              talk('짝에게 두 칸을 보여 주고 "무엇이 먼저 보여?"라고 물어, 대답을 칸 아래에 쓴 뒤 "다 했어요"를 누르세요.', '짝에게 묻기', ['ㄱ에서 먼저 보인 것', 'ㄴ에서 먼저 보인 것'], ['주인공', '둘레']),
              talk('내 주제에 맞는 쪽에 ○ 하고, 고른 까닭을 짝에게 말한 뒤 "다 했어요"를 누르세요.', '하나 고르기', ['고른 밑그림', '까닭'], ['표정', '사는 곳', '움직임']),
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"두 가지로 그려 보니 처음 밑그림만 있을 때와 무엇이 달랐나요?" ㄱ을 고른 학생과 ㄴ을 고른 학생을 한 명씩 불러 까닭을 견준다. 출구 1번에서 둘레 조각만 크게 붙인 학생은 다음 시간에 주제 문장의 주인공을 다시 읽게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'collage', options: { shapes: ['circle', 'star', 'semi'], colors: ['노랑', '보라', '하양'] }, prompt: '"밤하늘에 뜬 보름달의 얼굴"이 주제예요. 큰 노랑 동그라미 달 하나와 작은 별 두 개 이상을 붙여 보세요.', target: { has: [{ shape: 'circle', color: '노랑', size: 'l', n: 1 }, { shape: 'star', size: 's', min: 2 }] }, difficulty: 0.2 },
          { type: 'choice', prompt: '"바닷가 마을 전체 모습"이 주제라면 어떤 밑그림이 알맞은가요?', options: ['조개 하나를 화면 가득', '집과 배와 바다가 작게 넓게 보이게', '갈매기 눈만 크게'], answer: 1, difficulty: 0.2, explain: '마을 전체를 보여 주려면 여러 것을 작게, 넓은 자리에 그려요.' },
          { type: 'short', prompt: '내가 고른 밑그림(ㄱ 또는 ㄴ)과 그 까닭을 쓰세요.' },
        ],
      },
    ],
    worksheet: {
      title: '밑그림 두 가지 견주기',
      items: [
        { type: 'draw', prompt: 'ㄱ 칸: 내 주제의 주인공을 작게, 둘레를 넓게 그리세요.' },
        { type: 'draw', prompt: 'ㄴ 칸: 내 주제의 주인공을 크게 그리세요.' },
        { type: 'table', prompt: '짝에게 물어 본 것을 쓰세요.', columns: ['밑그림', '짝이 먼저 본 것', '잘 보여 주는 것'], cells: [['ㄱ', '', ''], ['ㄴ', '', '']] },
        { type: 'choice', prompt: '"꽃잎 위 무당벌레의 점무늬"를 보여 주려면 어떤 밑그림이 좋은가요?', options: ['꽃밭 전체를 작게', '무당벌레를 화면 가득 크게', '하늘을 크게', '나무를 크게'], answer: '무당벌레를 화면 가득 크게' },
      ],
      easy: {
        note: '보여 주고 싶은 것을 크게 그려요. 사는 곳을 보여 주려면 둘레를 넓게 그려요.',
        items: [
          { type: 'draw', prompt: '주인공을 작게 그리세요.' },
          { type: 'draw', prompt: '주인공을 크게 그리세요.' },
          { type: 'short', prompt: '내 주제에 맞는 쪽을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞게 이은 카드에 바로 표시가 생기고, 색종이는 작게·크게 두 크기만 나와 크기 차이를 고르기 쉬워요.',
      base: '스스로 이은 뒤 확인하고, 모양 여섯 가지와 모든 크기를 써요.',
      challenge: '밑그림으로 보여 줄 수 없는 카드가 둘 섞여 있고, 개구리 밑그림은 연잎·입까지 더해 겹쳐야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 크게 그린 그림이 언제나 더 잘 그린 것이라고 여긴다 → 주제에 따라 다르다는 것을 눈 오는 날 예로 보인다. ② 두 밑그림을 그리라고 하면 같은 것을 두 번 그린다 → 주인공 크기만 바꾸게 한다. ③ 짝의 선택을 따라 바꾼다 → 짝 의견은 참고하고 내 주제에 비추어 고르게 한다. 준비물: 손바닥만 한 네모 두 칸 활동지, 연필.',
  }));

  // ───────────── 8차시 (핵심) ─────────────
  lessons.push(lesson(8, S1, {
    title: '짝에게 밑그림을 보여 주고 고칠 점 찾기',
    objective: '짝에게 밑그림을 보여 주고 무엇이 떠오르는지 물어, 밑그림이 처음 생각을 잘 담았는지 판단하고 고칠 점을 정할 수 있다.',
    illustration: {
      prompt: art('two children holding up pencil sketches to each other with speech bubbles, one sketch showing ants under a leaf umbrella in the rain'),
      scene: scene([
        { motif: 'cloud', x: 120, y: 50 }, { motif: 'cloud', x: 360, y: 56, s: 0.8 }, { motif: 'hills', y: 214 },
        { motif: 'house', x: 110, y: 214, s: 0.9 }, { motif: 'leaf', x: 260, y: 196, r: -20, s: 1.2 }, { motif: 'flower', x: 390, y: 224, color: 'sky' },
        { motif: 'text', x: 250, y: 136, text: '무엇이 보여?', size: 24 },
      ]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '교사가 그린 밑그림 한 장(비 오는 날 개미 이사, 그런데 우산도 빗방울도 없고 개미가 아주 작은 그림)을 보이고 주제는 말하지 않는다. "무엇이 보이나요? 무슨 날 같나요?" 학생들이 "맑은 날 개미"라고 하면 주제를 밝히고 "내 생각은 비 오는 날이었는데, 그림에서는 안 보였네요. 무엇을 고치면 될까요?"라고 묻는다. 친구가 본 것과 내 생각이 다른 곳이 고칠 곳이라는 것을 연다. 시연 단추로 짝의 말에 고칠 점이 이어지는 모습을 보여 준다.',
        student: '선생님 밑그림을 보고 무엇이 보이는지, 무슨 날 같은지 말해 봅시다.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '짝의 말과 고칠 점', slots: [{ id: 's1', label: '"비 오는 날인지 몰랐어"' }], cards: [{ id: 'c1', text: '빗방울과 우산을 넣어요' }, { id: 'c2', text: '해를 더 크게 그려요' }] }, sequence: [{ match: { s1: 'c1' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 짝의 말에 맞는 고칠 점 잇기', minutes: 9, tool: 'mindmap',
            teacher: '"짝이 이렇게 말했다면, 내 밑그림의 어디가 처음 생각을 못 담았을까요?" 짝의 말에서 빠진 것(날씨, 주인공, 하는 일)을 찾게 한다. 짝의 말과 상관없는 것을 고치려는 학생에게는 "짝이 무엇을 몰랐다고 했나요?"라고 되묻는다.',
            task: '짝이 밑그림을 보고 한 말을 읽고, 그 말에 맞는 고칠 점을 이어요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              { prompt: '"비 오는 날 개미 이사" 밑그림을 본 짝의 말에 맞는 고칠 점을 이어 보세요.',
                toolOptions: { mode: 'match', topic: '개미 이사 밑그림', slots: [{ id: 's1', label: '"무엇을 그렸는지 잘 모르겠어"' }, { id: 's2', label: '"비 오는 날인지 몰랐어"' }, { id: 's3', label: '"개미가 무엇을 하는지 궁금해"' }], cards: [{ id: 'c1', text: '개미를 더 크게 그려요' }, { id: 'c2', text: '빗방울과 나뭇잎 우산을 넣어요' }, { id: 'c3', text: '개미 등에 짐을 그려요' }, { id: 'cx', text: '하늘에 무지개를 더해요' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'c1', text: '개미를 더 크게 그려요' }, { id: 'c2', text: '빗방울과 나뭇잎 우산을 넣어요' }, { id: 'c3', text: '개미 등에 짐을 그려요' }, { id: 'cx', text: '하늘에 무지개를 더해요' }, { id: 'cy', text: '종이를 바꿔 처음부터 다시 그려요' }] } } },
                hints: ['짝이 무엇을 모르겠다고 했는지(무엇, 날씨, 하는 일) 먼저 짚고, 그것을 그림에 보이게 하는 방법을 찾아요.', '이은 고칠 점이 짝이 모르겠다고 한 것을 정말 보이게 하나요? 짝의 말을 한 번 더 읽어요.', '주인공을 모르면 크게, 날씨를 모르면 빗방울과 우산, 하는 일을 모르면 짐을 그려요.'],
                target: { match: { s1: 'c1', s2: 'c2', s3: 'c3' } }, difficulty: 0.2 },
              { prompt: '"생일 아침 식탁" 밑그림을 본 짝의 말에 맞는 고칠 점을 이어 보세요.',
                toolOptions: { mode: 'match', topic: '생일 식탁 밑그림', slots: [{ id: 's1', label: '"누구 생일인지 모르겠어"' }, { id: 's2', label: '"아침인지 저녁인지 모르겠어"' }, { id: 's3', label: '"식탁 위가 텅 비어 보여"' }], cards: [{ id: 'c1', text: '케이크 앞에 고깔 쓴 나를 그려요' }, { id: 'c2', text: '창밖에 떠오르는 해를 그려요' }, { id: 'c3', text: '케이크와 미역국을 그려요' }, { id: 'cx', text: '벽지를 줄무늬로 바꿔요' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'c1', text: '케이크 앞에 고깔 쓴 나를 그려요' }, { id: 'c2', text: '창밖에 떠오르는 해를 그려요' }, { id: 'c3', text: '케이크와 미역국을 그려요' }, { id: 'cx', text: '벽지를 줄무늬로 바꿔요' }, { id: 'cy', text: '창밖에 별을 가득 그려요' }] } } },
                target: { match: { s1: 'c1', s2: 'c2', s3: 'c3' } }, difficulty: 0.25 },
              { prompt: '"밤하늘을 헤엄치는 고래" 밑그림을 본 짝의 말에 맞는 고칠 점을 이어 보세요.',
                toolOptions: { mode: 'match', topic: '고래 밑그림', slots: [{ id: 's1', label: '"바닷속 그림 같아"' }, { id: 's2', label: '"고래가 가만히 있는 것 같아"' }, { id: 's3', label: '"고래가 구석에 숨어 있어"' }], cards: [{ id: 'c1', text: '고래 둘레에 별과 달을 그려요' }, { id: 'c2', text: '꼬리를 휘어 물결을 그려요' }, { id: 'c3', text: '고래를 가운데에 크게 옮겨요' }, { id: 'cx', text: '고래 옆에 해를 그려요' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'c1', text: '고래 둘레에 별과 달을 그려요' }, { id: 'c2', text: '꼬리를 휘어 물결을 그려요' }, { id: 'c3', text: '고래를 가운데에 크게 옮겨요' }, { id: 'cx', text: '고래 옆에 해를 그려요' }, { id: 'cy', text: '물고기를 많이 더해요' }] } } },
                target: { match: { s1: 'c1', s2: 'c2', s3: 'c3' } }, difficulty: 0.25,
                predict: { q: '짝이 내 생각과 다르게 보았다면 그것은 무슨 뜻일까요?', options: ['짝이 틀렸어요', '그림에서 안 보였어요'], answer: 1 },
                conclude: '짝이 다르게 본 곳은 내 생각이 그림에 아직 안 담긴 곳이에요. 그곳이 고칠 곳이에요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 도움이 되는 질문 고르기', minutes: 8, tool: 'mindmap',
            teacher: '"밑그림을 보여 줄 때 짝에게 무엇이라고 물으면 고칠 점을 찾을 수 있을까요?" "잘 그렸지?"는 예, 아니오로만 답해 고칠 점이 나오지 않는다는 것을 짚는다. 짝의 말을 들을 때 "못 그렸다"가 아니라 "무엇이 안 보였다"로 듣게 한다.',
            task: '밑그림을 보여 줄 때 고칠 점을 찾는 데 도움이 되는 질문이나 말만 골라요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              { prompt: '밑그림을 보여 주며 짝에게 할 질문 가운데 고칠 점을 찾는 데 도움이 되는 것만 골라 보세요.',
                toolOptions: { mode: 'pick', topic: '도움이 되는 질문', cards: [{ id: 'q1', text: '무엇이 가장 먼저 보여?' }, { id: 'q2', text: '무슨 날 같아?' }, { id: 'q3', text: '주인공이 무엇을 하는 것 같아?' }, { id: 'q4', text: '잘 그렸지?' }, { id: 'q5', text: '내가 너보다 잘 그렸지?' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'q1', text: '무엇이 가장 먼저 보여?' }, { id: 'q2', text: '무슨 날 같아?' }, { id: 'q3', text: '주인공이 무엇을 하는 것 같아?' }, { id: 'q4', text: '잘 그렸지?' }, { id: 'q5', text: '내가 너보다 잘 그렸지?' }, { id: 'q6', text: '예쁘지?' }] } } },
                hints: ['짝이 대답했을 때 그림에서 무엇이 보였고 무엇이 안 보였는지 알 수 있는 질문인지 하나씩 따져요.'],
                target: { pick: ['q1', 'q2', 'q3'] }, difficulty: 0.15 },
              { prompt: '짝의 밑그림을 보고 해 줄 말 가운데 고칠 점을 찾는 데 도움이 되는 것만 골라 보세요.',
                toolOptions: { mode: 'pick', topic: '도움이 되는 말', cards: [{ id: 'p1', text: '개미가 작아서 찾기 어려웠어' }, { id: 'p2', text: '나뭇잎이 우산 같아서 비 오는 날인 걸 알았어' }, { id: 'p3', text: '무엇을 옮기는지 궁금해' }, { id: 'p4', text: '못 그렸다' }, { id: 'p5', text: '그냥 좋아' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'p1', text: '개미가 작아서 찾기 어려웠어' }, { id: 'p2', text: '나뭇잎이 우산 같아서 비 오는 날인 걸 알았어' }, { id: 'p3', text: '무엇을 옮기는지 궁금해' }, { id: 'p4', text: '못 그렸다' }, { id: 'p5', text: '그냥 좋아' }, { id: 'p6', text: '내 것이랑 똑같이 그려' }] } } },
                hints: ['그림의 어느 곳이 어떻게 보였는지 말해 주는 말인지, 기분만 말한 것인지 가려요.'],
                target: { pick: ['p1', 'p2', 'p3'] }, difficulty: 0.2,
                predict: { q: '"그냥 좋아"라는 말을 들으면 무엇을 고칠지 알 수 있을까요?', options: ['알 수 있어요', '알기 어려워요'], answer: 1 },
                conclude: '그림의 어느 곳이 어떻게 보였는지 말해 주면 고칠 점이 보여요. 잘 된 곳을 말해 주는 것도 도움이 돼요.' },
              { prompt: '짝의 말을 들은 뒤 할 일 가운데 알맞은 것만 골라 보세요.',
                toolOptions: { mode: 'pick', topic: '짝의 말을 들은 뒤', cards: [{ id: 't1', text: '짝이 못 본 것을 활동지에 적어요' }, { id: 't2', text: '처음 생각과 견주어 고칠 곳을 정해요' }, { id: 't3', text: '고마웠다고 말해요' }, { id: 't4', text: '짝이 틀렸다고 우겨요' }, { id: 't5', text: '밑그림을 구겨 버려요' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 't1', text: '짝이 못 본 것을 활동지에 적어요' }, { id: 't2', text: '처음 생각과 견주어 고칠 곳을 정해요' }, { id: 't3', text: '고마웠다고 말해요' }, { id: 't4', text: '짝이 틀렸다고 우겨요' }, { id: 't5', text: '밑그림을 구겨 버려요' }, { id: 't6', text: '짝이 말한 대로 주제를 통째로 바꿔요' }] } } },
                hints: ['짝의 말은 내 그림을 더 낫게 할 단서예요. 그 단서를 쓰는 행동인지 따져요.'],
                target: { pick: ['t1', 't2', 't3'] }, difficulty: 0.2 },
            ],
          },
          {
            id: 'a3', title: '활동 3. 내 밑그림을 보여 주고 고칠 점 정하기 (짝 활동)', minutes: 9, tool: 'mindmap', pair: true,
            teacher: '준비물: 6·7차시 밑그림, 연필, 활동지. "주제는 먼저 말하지 말고 밑그림만 보여 줘요." 짝은 무엇이 보이는지 말하고, 그린 사람은 활동지에 짝의 말을 받아 적는다. 그다음 주제를 밝히고 "처음 생각과 같은 곳, 다른 곳"을 함께 찾는다. 고칠 점은 한두 개만 고른다. 26명이 모두 말하지 않고 짝끼리 동시에 하며, 교사는 돌아다니며 "무엇이 안 보였대?"를 묻는다.',
            task: '주제를 말하지 않고 밑그림을 보여 줘요. 짝의 말을 받아 적고, 처음 생각과 견주어 고칠 점을 한두 개 정해요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              talk('주제를 말하지 않고 밑그림을 보여 주며 "무엇이 가장 먼저 보여?"라고 묻고, 짝의 말을 받아 적은 뒤 "다 했어요"를 누르세요.', '짝에게 보여 주기', ['짝이 본 것', '짝이 못 본 것'], ['주인공', '날씨', '하는 일']),
              talk('주제를 밝히고 처음 생각과 같은 곳, 다른 곳을 짝과 찾은 뒤 "다 했어요"를 누르세요.', '처음 생각과 견주기', ['같은 곳', '다른 곳'], ['담겼어요', '안 보였어요']),
              talk('고칠 점을 한두 개 정해 활동지에 쓰고, 짝에게 고맙다고 말한 뒤 "다 했어요"를 누르세요.', '고칠 점 정하기', ['고칠 점 1', '고칠 점 2'], ['크게', '넣기', '옮기기']),
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝의 말을 듣고 처음 생각과 다른 곳을 찾은 사람? 무엇이 달랐나요?" 두세 명이 말하게 한다. "짝의 말 덕분에 찾은 고칠 점은 무엇인가요?"를 묻고, 고칠 점은 10차시에 실제로 고친다고 예고한다. 출구 1번에서 짝의 말과 상관없는 고칠 점을 이은 학생은 짝의 말을 다시 소리 내어 읽게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '썰매 밑그림', slots: [{ id: 's1', label: '"겨울인지 모르겠어"' }, { id: 's2', label: '"썰매가 멈춰 있는 것 같아"' }], cards: [{ id: 'c1', text: '눈송이와 목도리를 그려요' }, { id: 'c2', text: '썰매 뒤에 휙 지나간 선을 그려요' }, { id: 'cx', text: '꽃밭을 더해요' }] }, prompt: '"눈 언덕 썰매" 밑그림을 본 짝의 말에 맞는 고칠 점을 이어 보세요.', target: { match: { s1: 'c1', s2: 'c2' } }, difficulty: 0.2 },
          { type: 'choice', prompt: '밑그림을 보여 주며 짝에게 할 질문으로 가장 도움이 되는 것은 무엇인가요?', options: ['잘 그렸지?', '무엇이 가장 먼저 보여?', '예쁘지?'], answer: 1, difficulty: 0.1, explain: '무엇이 먼저 보이는지 들으면 내 생각이 그림에 담겼는지 알 수 있어요.' },
          { type: 'short', prompt: '짝의 말을 듣고 정한 내 밑그림의 고칠 점을 쓰세요.' },
        ],
      },
    ],
    worksheet: {
      title: '짝에게 보여 주기',
      items: [
        { type: 'table', prompt: '짝이 내 밑그림을 보고 한 말을 쓰세요.', columns: ['물어본 것', '짝의 대답'], cells: [['무엇이 가장 먼저 보여?', ''], ['무슨 날 같아?', ''], ['주인공이 무엇을 하는 것 같아?', '']] },
        { type: 'table', prompt: '처음 생각과 견주어 쓰세요.', columns: ['처음 생각과 같은 곳', '처음 생각과 다른 곳'], cells: [['', '']] },
        { type: 'short', prompt: '고칠 점을 한두 개 쓰세요.' },
        { type: 'choice', prompt: '짝의 밑그림을 보고 해 줄 말로 가장 도움이 되는 것에 ○ 하세요.', options: ['못 그렸다', '그냥 좋아', '해가 있어서 밤인지 몰랐어', '내 것이 더 좋아'], answer: '해가 있어서 밤인지 몰랐어' },
      ],
      easy: {
        note: '짝이 다르게 본 곳이 고칠 곳이에요.',
        items: [
          { type: 'short', prompt: '짝이 내 밑그림에서 가장 먼저 본 것을 쓰세요.' },
          { type: 'choice', prompt: '도움이 되는 질문에 ○ 하세요.', options: ['무엇이 먼저 보여?', '잘 그렸지?'], answer: '무엇이 먼저 보여?' },
          { type: 'short', prompt: '고칠 점 하나를 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞게 이은 카드와 고른 카드에 바로 표시가 생겨요.',
      base: '스스로 잇고 고른 뒤 확인해요.',
      challenge: '그럴듯하지만 짝의 말과 상관없는 고칠 점, 도움이 안 되는 질문 카드가 하나씩 더 섞여 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 짝의 말을 "못 그렸다"는 꾸중으로 듣고 속상해한다 → "무엇이 안 보였대?"로 바꾸어 묻는다. ② 짝이 말한 대로 주제를 통째로 바꾼다 → 고칠 점은 처음 생각을 더 잘 담는 쪽으로 한두 개만 고르게 한다. ③ 말로 칭찬만 주고받는다 → "어디가, 어떻게"를 붙이게 한다. 짝 활동은 모두 동시에 하고, 교사는 짝 사이를 돌며 활동지의 고칠 점을 확인한다.',
  }));

  // ───────────── 9차시 (연습) ─────────────
  lessons.push(lesson(9, S1, {
    title: '넓은 주제를 한 장면으로 좁혀 꾸미기',
    objective: '"여름" "바다"처럼 넓은 주제와 한 장면으로 좁힌 주제를 가르고, 넓은 주제를 그릴 장면이 보이는 주제로 좁혀 꾸밀 수 있다.',
    illustration: {
      prompt: art('a big paper word "summer" splitting into one clear small scene of a child floating on a tube at a swimming pool'),
      scene: scene([
        { motif: 'sun', x: 404, y: 58, s: 0.9 }, { motif: 'cloud', x: 110, y: 52 }, { motif: 'wave', x: 240, y: 226 },
        { motif: 'flower', x: 80, y: 220, color: 'peach' }, { motif: 'bird', x: 300, y: 92 },
        { motif: 'text', x: 240, y: 146, text: '넓게 → 한 장면으로', size: 22 },
      ]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '칠판에 "여름"이라고 크게 쓴다. "이 주제로 그림을 그리면 무엇을 그릴 건가요?" 수박, 바다, 매미, 선풍기, 수영장… 많이 나오면 "이걸 모두 한 장에 그리면 어떤 그림이 될까요?"라고 묻는다. "주제가 넓으면 그릴 것이 많아 좋을까요?" 대답을 들은 뒤, 한 장면을 고르면 무엇을 크게 그릴지 또렷해진다는 것을 연다. 시연 단추로 넓은 주제 카드와 좁힌 주제 카드가 나뉘는 모습을 보여 준다.',
        student: '"여름"으로 그림을 그린다면 무엇을 그리고 싶은지 하나만 골라 말해 봅시다.',
        demo: { tool: 'mindmap', options: { topic: '주제 넓이', slots: [{ id: 'wide', label: '넓은 주제' }, { id: 'one', label: '한 장면 주제' }], cards: [{ id: 'd1', text: '여름' }, { id: 'd2', text: '수영장에서 튜브 타는 동생' }] }, sequence: [{ sort: { wide: ['d1'], one: ['d2'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 넓은 주제와 한 장면 주제 가르기', minutes: 8, tool: 'mindmap',
            teacher: '"이 주제를 듣고 친구들이 모두 같은 장면을 떠올릴까요?" 사람마다 전혀 다른 그림이 떠오르면 넓은 주제, 누가, 어디서, 무엇을 하는지 장면이 보이면 한 장면 주제라는 기준을 세운다. "예쁜 여름"처럼 꾸미는 말만 붙은 것은 아직 넓은 주제라는 것을 짚는다.',
            task: '주제 카드를 읽고, 그릴 장면이 하나로 보이는 주제인지 아직 넓은 주제인지 나누어요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '주제 카드를 넓은 주제와 한 장면 주제로 나누어 보세요.',
                toolOptions: { topic: '주제 넓이', slots: [{ id: 'wide', label: '넓은 주제' }, { id: 'one', label: '한 장면 주제' }], cards: [{ id: 'a1', text: '여름' }, { id: 'a2', text: '동물' }, { id: 'a3', text: '수영장에서 튜브 타는 동생' }, { id: 'a4', text: '소파 위에서 하품하는 강아지' }] },
                levels: { challenge: { prompt: '주제 카드 여섯 장을 넓은 주제와 한 장면 주제로 나누어 보세요.', toolOptions: { cards: [{ id: 'a1', text: '여름' }, { id: 'a2', text: '동물' }, { id: 'a3', text: '수영장에서 튜브 타는 동생' }, { id: 'a4', text: '소파 위에서 하품하는 강아지' }, { id: 'a5', text: '예쁜 여름' }, { id: 'a6', text: '귀여운 동물' }] }, target: { sort: { wide: ['a1', 'a2', 'a5', 'a6'], one: ['a3', 'a4'] } } } },
                hints: ['주제를 듣고 누가, 어디서, 무엇을 하는지 장면이 떠오르는지 카드마다 따져요.'],
                target: { sort: { wide: ['a1', 'a2'], one: ['a3', 'a4'] } }, difficulty: 0.15 },
              { prompt: '학교와 가족에 대한 주제 카드를 넓은 주제와 한 장면 주제로 나누어 보세요.',
                toolOptions: { topic: '주제 넓이', slots: [{ id: 'wide', label: '넓은 주제' }, { id: 'one', label: '한 장면 주제' }], cards: [{ id: 'b1', text: '우리 학교' }, { id: 'b2', text: '가족' }, { id: 'b3', text: '철봉에 거꾸로 매달린 나' }, { id: 'b4', text: '할머니와 만두를 빚는 저녁' }] },
                levels: { challenge: { prompt: '학교와 가족 주제 카드 여섯 장을 넓은 주제와 한 장면 주제로 나누어 보세요.', toolOptions: { cards: [{ id: 'b1', text: '우리 학교' }, { id: 'b2', text: '가족' }, { id: 'b3', text: '철봉에 거꾸로 매달린 나' }, { id: 'b4', text: '할머니와 만두를 빚는 저녁' }, { id: 'b5', text: '즐거운 학교' }, { id: 'b6', text: '급식실에서 친구와 웃는 점심' }] }, target: { sort: { wide: ['b1', 'b2', 'b5'], one: ['b3', 'b4', 'b6'] } } } },
                target: { sort: { wide: ['b1', 'b2'], one: ['b3', 'b4'] } }, difficulty: 0.2 },
              { prompt: '자연에 대한 주제 카드를 넓은 주제와 한 장면 주제로 나누어 보세요.',
                toolOptions: { topic: '주제 넓이', slots: [{ id: 'wide', label: '넓은 주제' }, { id: 'one', label: '한 장면 주제' }], cards: [{ id: 'c1', text: '바다' }, { id: 'c2', text: '숲' }, { id: 'c3', text: '파도 위에 뜬 노란 배 한 척' }, { id: 'c4', text: '도토리를 볼에 문 다람쥐' }, { id: 'c5', text: '날씨' }] },
                levels: { challenge: { prompt: '자연 주제 카드 일곱 장을 넓은 주제와 한 장면 주제로 나누어 보세요.', toolOptions: { cards: [{ id: 'c1', text: '바다' }, { id: 'c2', text: '숲' }, { id: 'c3', text: '파도 위에 뜬 노란 배 한 척' }, { id: 'c4', text: '도토리를 볼에 문 다람쥐' }, { id: 'c5', text: '날씨' }, { id: 'c6', text: '아름다운 자연' }, { id: 'c7', text: '창문에 김이 서린 추운 아침' }] }, target: { sort: { wide: ['c1', 'c2', 'c5', 'c6'], one: ['c3', 'c4', 'c7'] } } } },
                target: { sort: { wide: ['c1', 'c2', 'c5'], one: ['c3', 'c4'] } }, difficulty: 0.25,
                predict: { q: '"바다"와 "파도 위에 뜬 노란 배 한 척" 가운데 그릴 것이 또렷한 것은?', options: ['바다', '노란 배 한 척'], answer: 1 },
                conclude: '주제가 넓으면 그릴 것이 많아 보이지만 무엇을 크게 그릴지 몰라요. 한 장면으로 좁히면 또렷해져요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 넓은 주제를 좁힌 장면과 잇기', minutes: 8, tool: 'mindmap',
            teacher: '"이 넓은 주제 안에 들어가는 장면은 어느 것일까요?" 넓은 주제마다 그 안에 들어가는 한 장면을 찾는다. 좁힌 장면이 넓은 주제에서 벗어나면 안 된다는 것(여름 → 눈사람 만들기는 안 됨)을 짚는다. 다 이은 학생은 같은 넓은 주제로 다른 장면을 하나 더 지어 짝에게 말한다.',
            task: '넓은 주제마다, 그 주제 안에 들어가는 한 장면 주제를 이어요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              { prompt: '계절 주제마다 그 계절 안에 들어가는 한 장면을 이어 보세요.',
                toolOptions: { mode: 'match', topic: '좁히기', slots: [{ id: 's1', label: '여름' }, { id: 's2', label: '겨울' }, { id: 's3', label: '가을' }], cards: [{ id: 'c1', text: '선풍기 앞에서 수박 먹는 오후' }, { id: 'c2', text: '눈사람에게 목도리를 둘러 주는 아침' }, { id: 'c3', text: '빨간 단풍잎을 줍는 공원 길' }, { id: 'cx', text: '벚꽃 아래에서 소풍하는 날' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'c1', text: '선풍기 앞에서 수박 먹는 오후' }, { id: 'c2', text: '눈사람에게 목도리를 둘러 주는 아침' }, { id: 'c3', text: '빨간 단풍잎을 줍는 공원 길' }, { id: 'cx', text: '벚꽃 아래에서 소풍하는 날' }, { id: 'cy', text: '사계절' }] } } },
                hints: ['넓은 주제의 계절에 볼 수 있는 일인지 장면 카드마다 따져요. 어느 주제에도 들지 않는 장면은 남겨요.'],
                target: { match: { s1: 'c1', s2: 'c2', s3: 'c3' } }, difficulty: 0.15 },
              { prompt: '장소 주제마다 그곳에서 볼 수 있는 한 장면을 이어 보세요.',
                toolOptions: { mode: 'match', topic: '좁히기', slots: [{ id: 's1', label: '우리 학교' }, { id: 's2', label: '우리 집' }, { id: 's3', label: '시장' }], cards: [{ id: 'c1', text: '과학실에서 돋보기로 잎을 보는 시간' }, { id: 'c2', text: '거실에서 아빠와 블록 쌓는 밤' }, { id: 'c3', text: '떡집 앞에서 김이 나는 떡을 사는 엄마' }, { id: 'cx', text: '구름 위 놀이공원' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'c1', text: '과학실에서 돋보기로 잎을 보는 시간' }, { id: 'c2', text: '거실에서 아빠와 블록 쌓는 밤' }, { id: 'c3', text: '떡집 앞에서 김이 나는 떡을 사는 엄마' }, { id: 'cx', text: '구름 위 놀이공원' }, { id: 'cy', text: '우리 동네' }] } } },
                target: { match: { s1: 'c1', s2: 'c2', s3: 'c3' } }, difficulty: 0.2 },
              { prompt: '자연 주제마다 그 안에 들어가는 한 장면을 이어 보세요.',
                toolOptions: { mode: 'match', topic: '좁히기', slots: [{ id: 's1', label: '바다' }, { id: 's2', label: '하늘' }, { id: 's3', label: '숲' }], cards: [{ id: 'c1', text: '바위틈에 숨은 집게 한 마리' }, { id: 'c2', text: '노을 속을 나란히 나는 기러기 세 마리' }, { id: 'c3', text: '나무 구멍에서 내다보는 부엉이' }, { id: 'cx', text: '사막의 낙타' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'c1', text: '바위틈에 숨은 집게 한 마리' }, { id: 'c2', text: '노을 속을 나란히 나는 기러기 세 마리' }, { id: 'c3', text: '나무 구멍에서 내다보는 부엉이' }, { id: 'cx', text: '사막의 낙타' }, { id: 'cy', text: '자연' }] } } },
                target: { match: { s1: 'c1', s2: 'c2', s3: 'c3' } }, difficulty: 0.2,
                predict: { q: '"바다"를 좁힐 수 있는 장면은 하나뿐일까요?', options: ['하나뿐이에요', '여러 가지예요'], answer: 1 },
                conclude: '넓은 주제 하나로 좁힐 수 있는 장면은 여러 가지예요. 그 가운데 내가 그리고 싶은 하나를 골라요.' },
            ],
          },
          {
            id: 'a3', title: '활동 3. 좁힌 장면을 조각으로 꾸미기', minutes: 10, tool: 'collage',
            teacher: '"좁힌 장면은 무엇을 크게 그릴지 이미 말해 줘요." 문제의 장면 글에서 주인공을 찾아 가장 크게 붙이게 한다. 마지막 문항은 내가 좁힌 주제(활동지 2번)로 만든다. 넓은 "바다"처럼 이것저것 많이 붙이는 학생에게는 "이 장면에 정말 있는 것인가요?"라고 묻는다.',
            task: '좁힌 장면 글에서 주인공을 찾아 가장 크게 붙이고, 그 장면에 있는 것만 더해요.',
            levels: {
              easy: { shapes: ['semi', 'circle', 'rect', 'triangle'], colors: ['노랑', '파랑', '갈색', '하양'], sizes: ['m', 'l'] },
              base: { shapes: ['semi', 'circle', 'rect', 'triangle', 'leaf', 'star'] },
              challenge: {},
            },
            items: [
              { prompt: '"파도 위에 뜬 노란 배 한 척"을 꾸며요. 큰 노랑 반원 배 하나와 파랑 반원 파도 세 개 이상을 붙여요.', target: { has: [{ shape: 'semi', color: '노랑', size: 'l', n: 1 }, { shape: 'semi', color: '파랑', min: 3 }] }, difficulty: 0.2,
                hints: ['장면 글에서 주인공을 찾아 가장 크게 놓고, 그 둘레에 장면에 있는 것만 더해요.'],
                levels: { challenge: { prompt: '"파도 위에 뜬 노란 배 한 척"을 꾸며요. 큰 노랑 반원 배 하나, 세모 돛 하나, 파랑 반원 파도 네 개 이상을 붙이고 배를 파도에 겹쳐요.', target: { has: [{ shape: 'semi', color: '노랑', size: 'l', n: 1 }, { shape: 'triangle', n: 1 }, { shape: 'semi', color: '파랑', min: 4 }], overlap: 1 } } } },
              { prompt: '"철봉에 거꾸로 매달린 나"를 꾸며요. 갈색 긴 네모 철봉 하나와 동그라미 얼굴 하나를 철봉에 겹쳐 붙여요.', target: { has: [{ shape: 'rect', color: '갈색', n: 1 }, { shape: 'circle', n: 1 }], overlap: 1 }, difficulty: 0.25,
                hints: ['"매달린"은 두 조각이 떨어져 있지 않고 붙어 있어야 보여요. 주인공과 철봉이 맞닿게 놓아요.'],
                levels: { challenge: { prompt: '"철봉에 거꾸로 매달린 나"를 꾸며요. 갈색 긴 네모 철봉 하나, 동그라미 얼굴 하나, 몸이 될 긴 네모 하나를 서로 겹쳐 붙여요.', target: { has: [{ shape: 'rect', color: '갈색', n: 1 }, { shape: 'circle', n: 1 }, { shape: 'rect', min: 2 }], overlap: 2 } } } },
              { prompt: '넓은 주제 하나를 골라 한 장면으로 좁히고, 그 장면을 꾸며 점검해요.', target: { selfCheck: ['넓은 주제를 한 장면 주제로 좁혔어요', '주인공을 가장 크게 붙였어요', '그 장면에 없는 것은 넣지 않았어요'], minPieces: 4 }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"주제가 넓을수록 그릴 것이 많아 좋다고 생각했던 사람? 오늘 해 보니 어땠나요?" 두세 명의 말을 듣는다. 내 좁힌 주제를 짝에게 읽어 주고, 짝이 떠오른 장면을 한 문장으로 말해 보게 한다. 출구 1번에서 꾸미는 말만 붙은 카드를 한 장면 주제로 넣은 학생에게는 "누가, 어디서, 무엇을 하나요?"를 다시 묻는다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '주제 넓이', slots: [{ id: 'wide', label: '넓은 주제' }, { id: 'one', label: '한 장면 주제' }], cards: [{ id: 'e1', text: '놀이' }, { id: 'e2', text: '신나는 놀이' }, { id: 'e3', text: '운동장에서 줄넘기를 백 번 넘는 언니' }] }, prompt: '놀이에 대한 주제 카드를 넓은 주제와 한 장면 주제로 나누어 보세요.', target: { sort: { wide: ['e1', 'e2'], one: ['e3'] } }, difficulty: 0.2 },
          { type: 'choice', prompt: '"동물"을 한 장면으로 좁힌 주제는 무엇인가요?', options: ['귀여운 동물', '여러 가지 동물', '물웅덩이에서 첨벙 뛰는 오리'], answer: 2, difficulty: 0.15, explain: '누가(오리), 어디서(물웅덩이), 무엇을(첨벙 뛰는)이 있어 장면이 보여요.' },
          { type: 'mood', prompt: '주제를 좁혀 보니 그리기가 어떨 것 같나요?' },
        ],
      },
    ],
    worksheet: {
      title: '넓은 주제 좁히기',
      items: [
        { type: 'table', prompt: '넓은 주제를 한 장면으로 좁혀 쓰세요.', columns: ['넓은 주제', '누가', '어디서', '무엇을', '좁힌 장면'], cells: [['여름', '', '', '', ''], ['우리 학교', '', '', '', '']] },
        { type: 'short', prompt: '내가 그리고 싶은 넓은 주제 하나를 골라 한 장면으로 좁혀 쓰세요.' },
        { type: 'choice', prompt: '한 장면 주제에 ○ 하세요.', options: ['바다', '예쁜 바다', '바위틈에 숨은 집게 한 마리', '여러 가지 바다 생물'], answer: '바위틈에 숨은 집게 한 마리' },
        { type: 'draw', prompt: '좁힌 장면을 작게 그리세요.' },
      ],
      easy: {
        note: '누가, 어디서, 무엇을 하는지 보이면 한 장면 주제예요.',
        items: [
          { type: 'choice', prompt: '한 장면 주제에 ○ 하세요.', options: ['동물', '소파 위에서 하품하는 강아지'], answer: '소파 위에서 하품하는 강아지' },
          { type: 'short', prompt: '"여름"을 좁힌 장면을 쓰세요.' },
          { type: 'draw', prompt: '좁힌 장면을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 맞는 칸에 놓으면 바로 표시되고, 색종이는 장면에 쓰는 모양 네 가지·색 네 가지·크기 두 가지만 나와요.',
      base: '스스로 나누고 이은 뒤 확인하고, 모양 여섯 가지와 모든 색·크기를 써요.',
      challenge: '"예쁜 여름"처럼 꾸미는 말만 붙은 넓은 주제 카드와, 어느 주제에도 들지 않는 카드가 섞여 있어요. 배와 철봉 장면은 조각과 겹침이 더 많아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 주제는 넓을수록 그릴 것이 많아 좋다고 여긴다(이 주제의 대표 오개념) → 넓은 주제로 그린 그림과 한 장면 그림을 견주게 한다. ② "예쁜", "즐거운" 같은 꾸미는 말만 붙이고 좁혔다고 여긴다 → 누가·어디서·무엇을 칸을 채우게 한다. ③ 좁힌 장면이 넓은 주제에서 벗어난다 → 넓은 주제 안에 들어가는지 묻는다.',
  }));

  // ───────────── 10차시 (확장) ─────────────
  lessons.push(lesson(10, S1, {
    title: '친구 의견을 듣고 밑그림을 고쳐 다시 꾸미기',
    objective: '친구 의견을 받아들이는 알맞은 태도를 고르고, 의견에 맞게 밑그림을 고쳐 주제를 한 가지 더 좁힐 수 있다.',
    illustration: {
      prompt: art('a before-and-after pair of paper sketches: a tiny cat lost among many shapes, then the same cat made big with only a few shapes around it'),
      scene: scene([
        { motif: 'sun', x: 410, y: 58, s: 0.7 }, { motif: 'cloud', x: 110, y: 50 }, { motif: 'house', x: 120, y: 214 },
        { motif: 'star', x: 330, y: 90, s: 0.6 }, { motif: 'flower', x: 370, y: 224, color: 'lavender' },
        { motif: 'text', x: 260, y: 146, text: '듣고, 고치고, 좁히고', size: 22 },
      ]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '8차시에 학생들이 적은 고칠 점 몇 가지(이름은 가리고)를 읽어 준다. "짝에게 \'무엇을 그렸는지 모르겠어\'라는 말을 들었을 때 기분이 어땠나요?" 속상했다는 대답도 받아 준다. "그 말 덕분에 무엇을 알게 되었나요?" 짝의 말은 내 그림을 고칠 단서라는 것을 다시 짚고, 오늘은 그 단서로 밑그림을 고치고 주제를 한 가지 더 좁힌다고 연다. 시연 단추로 작은 고양이가 크게 바뀌는 모습을 보여 준다.',
        student: '8차시에 짝에게 들은 말과, 그 말을 들었을 때의 마음을 떠올려 봅시다.',
        demo: { tool: 'collage', options: { shapes: ['semi', 'circle'], colors: ['갈색'] }, sequence: [{ has: [{ shape: 'semi', color: '갈색', size: 'l', n: 1 }] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 의견을 들었을 때 어떻게 할까', minutes: 7, tool: 'emotion',
            teacher: '"이렇게 하면 내 그림은 어떻게 될까요?" 보기를 고르기 전에 결과를 짐작해 말하게 한다. 짝의 말을 듣고 화를 내거나, 다 지우고 처음부터 다시 그리거나, 말한 대로 주제를 통째로 바꾸는 것은 처음 생각을 살리는 길이 아니라는 것을 짚는다. 속상한 마음은 자연스러우니 숨을 한 번 쉬고 "어디가 안 보였어?"라고 다시 물어보자고 말한다.',
            task: '친구 의견을 들은 장면을 읽고, 내 처음 생각을 살리며 그림을 고치는 행동을 골라요.',
            levels: { easy: {}, base: { revealAfterCheck: true }, challenge: { revealAfterCheck: true } },
            items: [
              { prompt: '짝이 "무엇을 그렸는지 모르겠어"라고 했어요. 어떻게 하면 좋을까요?',
                toolOptions: { mode: 'branch', who: '민지', motif: 'cloud', situation: '"구름 고래" 밑그림을 보여 주었더니 짝이 "무엇을 그렸는지 모르겠어"라고 했어요.', feeling: '속상함', choices: [
                  { id: 'a', text: '"어디가 잘 안 보였어?" 하고 다시 물어요', result: '짝이 "고래가 너무 작아"라고 알려 줘서 고래를 크게 고쳐요', mood: '뿌듯함' },
                  { id: 'b', text: '"너는 그림을 몰라" 하고 화를 내요', result: '짝도 속상하고, 무엇을 고칠지는 여전히 몰라요', mood: '화남', why: '화를 내면 고칠 단서를 들을 수 없어요.' },
                  { id: 'c', text: '밑그림을 다 지우고 다른 주제로 바꿔요', result: '좋았던 구름 고래 생각까지 사라져요', mood: '속상함', why: '처음 생각은 살리고 안 보이는 곳만 고치면 돼요.' }] },
                levels: { challenge: { toolOptions: { choices: [
                  { id: 'a', text: '"어디가 잘 안 보였어?" 하고 다시 물어요', result: '짝이 "고래가 너무 작아"라고 알려 줘서 고래를 크게 고쳐요', mood: '뿌듯함' },
                  { id: 'b', text: '"너는 그림을 몰라" 하고 화를 내요', result: '짝도 속상하고, 무엇을 고칠지는 여전히 몰라요', mood: '화남', why: '화를 내면 고칠 단서를 들을 수 없어요.' },
                  { id: 'c', text: '밑그림을 다 지우고 다른 주제로 바꿔요', result: '좋았던 구름 고래 생각까지 사라져요', mood: '속상함', why: '처음 생각은 살리고 안 보이는 곳만 고치면 돼요.' },
                  { id: 'd', text: '아무 말 없이 그대로 색칠해요', result: '다 칠하고 나서도 친구들이 고래인지 몰라요', mood: '걱정', why: '짝의 말에 고칠 단서가 들어 있어요. 무엇이 안 보였는지 물어봐요.' }] } } },
                hints: ['짝의 말은 내 그림을 고칠 단서예요. 그 단서를 더 자세히 알아내는 행동이 무엇일지 생각해요.'],
                target: { choice: 'a' }, difficulty: 0.15 },
              { prompt: '짝이 "바닷속 그림 같아"라고 했어요. 어떻게 고치면 좋을까요?',
                toolOptions: { mode: 'branch', who: '준호', motif: 'star', situation: '"밤하늘을 헤엄치는 고래"를 그렸는데 짝이 "바닷속 그림 같아"라고 했어요.', choices: [
                  { id: 'a', text: '고래는 그대로 두고 둘레에 별과 달을 더해요', result: '친구들이 "하늘을 나는 고래다!" 하고 알아봐요', mood: '기쁨' },
                  { id: 'b', text: '짝 말대로 주제를 "바닷속 고래"로 바꿔요', result: '그리고 싶던 밤하늘 고래는 사라졌어요', mood: '속상함', why: '짝의 말은 주제를 바꾸라는 뜻이 아니라, 밤하늘이 안 보인다는 단서예요.' },
                  { id: 'c', text: '고래를 지우고 별만 가득 그려요', result: '밤하늘은 보이지만 고래가 없어 주제가 사라졌어요', mood: '걱정', why: '주인공 고래는 남기고, 밤하늘이 보이게 더해요.' }] },
                levels: { challenge: { toolOptions: { choices: [
                  { id: 'a', text: '고래는 그대로 두고 둘레에 별과 달을 더해요', result: '친구들이 "하늘을 나는 고래다!" 하고 알아봐요', mood: '기쁨' },
                  { id: 'b', text: '짝 말대로 주제를 "바닷속 고래"로 바꿔요', result: '그리고 싶던 밤하늘 고래는 사라졌어요', mood: '속상함', why: '짝의 말은 주제를 바꾸라는 뜻이 아니라, 밤하늘이 안 보인다는 단서예요.' },
                  { id: 'c', text: '고래를 지우고 별만 가득 그려요', result: '밤하늘은 보이지만 고래가 없어 주제가 사라졌어요', mood: '걱정', why: '주인공 고래는 남기고, 밤하늘이 보이게 더해요.' },
                  { id: 'd', text: '고래 옆에 물고기와 해초를 더 그려요', result: '더 바닷속 같아져서 친구들이 더 헷갈려요', mood: '걱정', why: '물고기와 해초는 바닷속을 떠올리게 해요. 밤하늘을 보여 줄 것을 더해요.' }] } } },
                target: { choice: 'a' }, difficulty: 0.25 },
              { prompt: '친구들의 의견이 서로 달라요. 서윤이는 어떻게 하면 좋을까요?',
                toolOptions: { mode: 'branch', who: '서윤', motif: 'flower', situation: '"꽃잎 접시 개미 잔치"를 보고 한 친구는 "개미를 크게", 다른 친구는 "꽃을 크게"라고 했어요.', choices: [
                  { id: 'a', text: '두 말을 다 따라 둘 다 화면 가득 그려요', result: '개미와 꽃이 서로 부딪혀 무엇이 주인공인지 몰라요', mood: '걱정', why: '둘 다 크게 그리면 주인공이 없어져요. 내 주제를 먼저 떠올려요.' },
                  { id: 'b', text: '내 주제의 주인공이 개미 잔치인 것을 떠올려 개미 쪽을 골라요', result: '잔치를 여는 개미들이 크게 보여 주제가 또렷해져요', mood: '뿌듯함' },
                  { id: 'c', text: '어느 말도 듣지 않아요', result: '고칠 단서를 놓쳐 그림이 그대로예요', mood: '걱정', why: '의견이 달라도 둘 다 고칠 단서예요. 주제에 비추어 골라요.' }] },
                levels: { challenge: { toolOptions: { choices: [
                  { id: 'a', text: '두 말을 다 따라 둘 다 화면 가득 그려요', result: '개미와 꽃이 서로 부딪혀 무엇이 주인공인지 몰라요', mood: '걱정', why: '둘 다 크게 그리면 주인공이 없어져요. 내 주제를 먼저 떠올려요.' },
                  { id: 'b', text: '내 주제의 주인공이 개미 잔치인 것을 떠올려 개미 쪽을 골라요', result: '잔치를 여는 개미들이 크게 보여 주제가 또렷해져요', mood: '뿌듯함' },
                  { id: 'c', text: '어느 말도 듣지 않아요', result: '고칠 단서를 놓쳐 그림이 그대로예요', mood: '걱정', why: '의견이 달라도 둘 다 고칠 단서예요. 주제에 비추어 골라요.' },
                  { id: 'd', text: '더 큰 소리로 말한 친구의 의견을 따라요', result: '꽃이 커지면서 개미 잔치가 작아졌어요', mood: '속상함', why: '목소리 크기가 아니라 내 주제에 맞는지로 골라요.' }] } } },
                target: { choice: 'b' }, difficulty: 0.25,
                predict: { q: '의견이 서로 다르면 무엇을 기준으로 고를까요?', options: ['내 주제', '목소리 크기', '먼저 말한 것'], answer: 0 },
                conclude: '의견이 갈릴 때는 내 주제에 비추어 골라요. 의견은 고칠 단서이지 주제를 정해 주는 말이 아니에요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 의견에 맞게 밑그림 고치기', minutes: 10, tool: 'collage',
            teacher: '"화면의 밑그림은 친구가 만든 것이에요. 짝의 의견을 읽고 고쳐 주세요." 고칠 것만 고치고 좋았던 것은 남긴다. 작은 주인공을 크게 바꿀 때는 작은 조각을 떼고 크게 다시 붙이면 된다는 것(크기 고르개)을 알려 준다. 조각 수를 줄이는 문항에서는 "주제를 흐리는 조각부터 떼요"라고 말한다.',
            task: '화면 위 친구의 밑그림을 보고, 짝의 의견에 맞게 조각을 떼거나 바꾸거나 더해 고쳐요.',
            levels: {
              easy: { shapes: ['semi', 'circle', 'star', 'leaf'], colors: ['갈색', '노랑', '하양', '초록', '분홍'], sizes: ['s', 'l'] },
              base: { shapes: ['semi', 'circle', 'star', 'leaf', 'square', 'heart'] },
              challenge: {},
            },
            items: [
              { prompt: '짝의 의견: "고양이가 너무 작아 안 보여." 작은 갈색 반원 고양이를 떼고, 큰 갈색 반원 고양이로 바꾸어 붙여요. 다른 조각은 그대로 둬요.',
                state: { pieces: [{ shape: 'semi', color: '갈색', size: 's', x: 460, y: 320, r: 0 }, { shape: 'square', color: '하양', size: 'l', x: 200, y: 160, r: 0 }, { shape: 'circle', color: '노랑', size: 'm', x: 400, y: 100, r: 0 }] },
                target: { has: [{ shape: 'semi', color: '갈색', size: 'l', n: 1 }, { shape: 'semi', color: '갈색', size: 's', max: 0 }], pieces: { min: 3 } }, difficulty: 0.2,
                hints: ['의견이 말하는 곳(주인공의 크기)만 고치고, 나머지 조각은 그대로 두어요.'],
                levels: { challenge: { prompt: '짝의 의견: "고양이가 너무 작고 해에 가려졌어." 작은 고양이를 큰 갈색 반원으로 바꾸고, 노랑 동그라미 해는 떼어요. 하양 네모 창문은 남겨요.', target: { has: [{ shape: 'semi', color: '갈색', size: 'l', n: 1 }, { shape: 'semi', color: '갈색', size: 's', max: 0 }, { shape: 'circle', color: '노랑', max: 0 }, { shape: 'square', color: '하양', n: 1 }] } } } },
              { prompt: '짝의 의견: "해가 있어서 밤인지 몰랐어." 노랑 해를 떼고, 하양 동그라미 달 하나와 별 세 개 이상을 붙여요.',
                state: { pieces: [{ shape: 'semi', color: '파랑', size: 'l', x: 280, y: 220, r: 0 }, { shape: 'circle', color: '노랑', size: 'l', x: 440, y: 100, r: 0 }, { shape: 'star', color: '노랑', size: 's', x: 120, y: 80, r: 0 }] },
                target: { has: [{ shape: 'circle', color: '노랑', max: 0 }, { shape: 'circle', color: '하양', n: 1 }, { shape: 'star', min: 3 }] }, difficulty: 0.25,
                hints: ['낮을 떠올리게 하는 조각은 무엇인지 찾고, 밤을 보여 줄 조각으로 바꿔요. 주인공 고래는 그대로 두어요.'],
                predict: { q: '고래 조각도 바꾸어야 할까요?', options: ['바꿔요', '그대로 둬요'], answer: 1 },
                conclude: '짝이 말한 곳(낮처럼 보이는 해)만 고치고 주인공은 살렸어요. 그래서 처음 생각이 그대로 남아요.' },
              { prompt: '짝의 의견: "조각이 너무 많아 무엇이 중요한지 몰라." 큰 분홍 하트 주인공은 남기고, 조각을 세 개에서 다섯 개 사이로 줄여요.',
                state: { pieces: [{ shape: 'heart', color: '분홍', size: 'l', x: 280, y: 200, r: 0 }, { shape: 'star', color: '노랑', size: 's', x: 80, y: 60, r: 0 }, { shape: 'star', color: '초록', size: 's', x: 160, y: 340, r: 0 }, { shape: 'circle', color: '하양', size: 's', x: 480, y: 60, r: 0 }, { shape: 'leaf', color: '초록', size: 's', x: 500, y: 320, r: 0 }, { shape: 'square', color: '노랑', size: 's', x: 80, y: 220, r: 0 }, { shape: 'circle', color: '갈색', size: 's', x: 420, y: 280, r: 0 }, { shape: 'star', color: '분홍', size: 's', x: 380, y: 60, r: 0 }] },
                target: { has: [{ shape: 'heart', color: '분홍', size: 'l', n: 1 }], pieces: { min: 3, max: 5 } }, difficulty: 0.25,
                hints: ['주인공을 흐리는 조각부터 하나씩 떼어 보고, 남은 조각 수를 세어요.'],
                levels: { challenge: { prompt: '짝의 의견: "조각이 너무 많아." 큰 분홍 하트는 남기고 조각을 두 개에서 네 개 사이로 줄이되, 남긴 조각 하나 이상은 하트에 겹쳐요.', target: { has: [{ shape: 'heart', color: '분홍', size: 'l', n: 1 }], pieces: { min: 2, max: 4 }, overlap: 1 } } } },
            ],
          },
          {
            id: 'a3', title: '활동 3. 내 밑그림 고치고 주제 한 번 더 좁히기 (짝 활동)', minutes: 9, tool: 'mindmap', pair: true,
            teacher: '준비물: 8차시 활동지(고칠 점), 밑그림, 연필, 지우개. "고칠 점 한두 개만 고쳐요. 좋았던 곳은 지우지 않아요." 고친 뒤 짝에게 다시 보여 주고 "이번에는 무엇이 먼저 보여?"를 묻는다. 그다음 주제 문장에 "언제·어디서·어떻게" 가운데 아직 없는 것을 하나 더 붙여 활동지에 고친 주제를 쓴다.',
            task: '고칠 점에 맞게 내 밑그림을 고치고 짝에게 다시 보여 줘요. 주제에 하나를 더 붙여 고친 주제를 써요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              talk('8차시에 정한 고칠 점에 맞게 밑그림을 고친 뒤 "다 했어요"를 누르세요.', '밑그림 고치기', ['고칠 점', '고친 것'], ['크게', '떼기', '더하기']),
              talk('고친 밑그림을 짝에게 보여 주고 "이번에는 무엇이 먼저 보여?"라고 물은 뒤 "다 했어요"를 누르세요.', '다시 보여 주기', ['처음 대답', '이번 대답'], ['주인공', '날씨', '하는 일']),
              talk('주제에 언제·어디서·어떻게 가운데 아직 없는 것을 하나 더 붙여 활동지에 쓰고 "다 했어요"를 누르세요.', '주제 한 번 더 좁히기', ['처음 주제', '고친 주제'], ['언제', '어디서', '어떻게']),
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"고치기 전과 뒤에 짝의 대답이 어떻게 달라졌나요?" 두세 명이 처음 대답과 이번 대답을 견주어 말하게 한다. 주제 정하기 부분(1~10차시)을 마치며 "본 것과 상상에서 시작해 → 고르고 → 좁히고 → 밑그림 → 듣고 고치기까지 왔어요"라고 정리한다. 다음 시간부터는 선과 색, 모양으로 이 주제를 살리는 법을 배운다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'collage', options: { shapes: ['circle', 'leaf', 'star'], colors: ['빨강', '초록', '노랑'], sizes: ['s', 'l'] }, state: { pieces: [{ shape: 'circle', color: '빨강', size: 's', x: 460, y: 320, r: 0 }, { shape: 'leaf', color: '초록', size: 'l', x: 200, y: 160, r: 0 }] }, prompt: '짝의 의견: "사과가 작아서 안 보여." 작은 빨강 동그라미 사과를 큰 빨강 동그라미로 바꾸어 고쳐 보세요.', target: { has: [{ shape: 'circle', color: '빨강', size: 'l', n: 1 }, { shape: 'circle', color: '빨강', size: 's', max: 0 }] }, difficulty: 0.2 },
          { type: 'choice', prompt: '짝이 "무엇을 그렸는지 모르겠어"라고 할 때 가장 알맞은 행동은 무엇인가요?', options: ['화를 내요', '"어디가 안 보였어?" 하고 다시 물어요', '그림을 버려요'], answer: 1, difficulty: 0.1, explain: '다시 물으면 어디를 고칠지 단서를 더 얻을 수 있어요.' },
          { type: 'short', prompt: '고치기 전의 주제와 한 번 더 좁힌 주제를 쓰세요.' },
        ],
      },
    ],
    worksheet: {
      title: '듣고 고치기',
      items: [
        { type: 'table', prompt: '고치기 전과 뒤를 쓰세요.', columns: ['', '고치기 전', '고친 뒤'], cells: [['짝이 먼저 본 것', '', ''], ['주제 문장', '', '']] },
        { type: 'short', prompt: '짝의 의견 가운데 받아들인 것과 받아들인 까닭을 쓰세요.' },
        { type: 'choice', prompt: '"밤하늘 고래" 그림에 "바닷속 같아"라는 의견을 들었을 때 알맞은 고치기에 ○ 하세요.', options: ['주제를 바닷속으로 바꿔요', '고래를 지워요', '둘레에 별과 달을 더해요', '물고기를 더 그려요'], answer: '둘레에 별과 달을 더해요' },
        { type: 'draw', prompt: '고친 밑그림에서 가장 많이 달라진 곳을 크게 그리세요.' },
      ],
      easy: {
        note: '짝이 말한 곳만 고치고, 좋았던 곳은 남겨요.',
        items: [
          { type: 'short', prompt: '짝의 의견을 쓰세요.' },
          { type: 'choice', prompt: '알맞은 행동에 ○ 하세요.', options: ['다시 물어봐요', '화를 내요'], answer: '다시 물어봐요' },
          { type: 'draw', prompt: '고친 곳을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '고르기 장면에서 보기를 누르면 결과가 바로 보이고, 색종이는 작게·크게 두 크기와 고치기에 쓰는 모양·색만 나와요.',
      base: '고르기 장면의 결과는 맞힌 뒤에 보이고, 모양 여섯 가지와 모든 색·크기를 써요.',
      challenge: '그럴듯한 보기(그대로 칠하기, 큰 소리 의견 따르기)가 하나 더 있고, 밑그림 고치기는 고칠 곳이 둘이거나 조각을 더 줄이며 겹쳐야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 의견을 듣고 처음부터 다시 그린다 → 고칠 점 한두 개만 고치게 한다. ② 의견대로 주제를 통째로 바꾼다 → 의견은 단서이고 주제는 내가 정한다는 것을 짚는다. ③ 주제를 좁히라고 하면 꾸미는 말만 붙인다 → 언제·어디서·어떻게를 묻는다. 1~10차시 활동지(본 것·상상, 생각 다섯 개, 네 칸, 낱말 세 개, 고칠 점)를 한 봉투에 모아 두면 11차시부터의 표현 활동에 그대로 쓴다.',
  }));

  // ───────────── 11차시 (핵심) ─────────────
  lessons.push(lesson(11, S3, {
    title: '굵은 선과 가는 선, 곧은 선과 구불구불한 선의 느낌 말하기',
    objective: '굵은 선과 가는 선, 곧은 선과 구불구불한 선이 주는 느낌을 갈라 말하고, 주제에 어울리는 선을 까닭을 들어 고를 수 있다.',
    illustration: {
      prompt: art('a sheet of paper strips showing a thick bold zigzag line, a thin delicate line, a straight line and a wavy line, each next to a tiny scene of thunder, a spider web, a wall and a river'),
      scene: scene([
        { motif: 'cloud', x: 110, y: 52 }, { motif: 'moon', x: 410, y: 56, s: 0.7 }, { motif: 'wave', x: 240, y: 228 },
        { motif: 'mountain', x: 360, y: 200, s: 0.8 }, { motif: 'leaf', x: 120, y: 210, r: 40 },
        { motif: 'text', x: 240, y: 140, text: '선마다 느낌이 달라요', size: 22 },
      ]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '칠판에 같은 산 모양을 두 번 그린다. 하나는 굵고 뾰족뾰족하게, 하나는 가늘고 부드럽게. "같은 산인데 어느 쪽이 무서워 보이나요? 어느 쪽이 조용해 보이나요?" 대답이 갈리면 그 까닭을 묻는다. "선은 그냥 테두리일까요, 느낌도 전할까요?" 선과 색은 꾸미기일 뿐이라는 생각을 꺼내 보게 한 뒤, 오늘은 선의 느낌을 찾아 주제에 맞는 선을 고른다고 연다. 시연 단추로 느낌 카드가 선 갈래로 나뉘는 모습을 보여 준다.',
        student: '칠판의 두 산 가운데 무서워 보이는 쪽과 조용해 보이는 쪽을 고르고 까닭을 말해 봅시다.',
        demo: { tool: 'mindmap', options: { topic: '선의 느낌', slots: [{ id: 'thick', label: '굵은 선' }, { id: 'thin', label: '가는 선' }], cards: [{ id: 'd1', text: '힘차고 무거워 보여요' }, { id: 'd2', text: '가볍고 여려 보여요' }] }, sequence: [{ sort: { thick: ['d1'], thin: ['d2'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 선마다 주는 느낌 가르기', minutes: 8, tool: 'mindmap',
            teacher: '"손가락으로 공중에 이 선을 그려 보세요. 어떤 느낌이 드나요?" 카드를 읽기 전에 두 가지 선을 몸으로 그어 보게 한다. 굵은 선은 힘차고 무겁게, 가는 선은 가볍고 섬세하게, 곧은 선은 반듯하고 단단하게, 구불구불한 선은 부드럽게 흐르는 느낌을 준다는 것을 학생 말로 정리한다. 뾰족뾰족한 선과 둥글게 말린 선도 견주어 그어 본다.',
            task: '느낌 카드를 읽고, 두 가지 선 가운데 그 느낌을 주는 선의 칸에 넣어요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '느낌 카드를 굵은 선과 가는 선으로 나누어 보세요.',
                toolOptions: { topic: '선의 굵기', slots: [{ id: 'thick', label: '굵은 선' }, { id: 'thin', label: '가는 선' }], cards: [{ id: 'a1', text: '힘차고 무거워 보여요' }, { id: 'a2', text: '멀리서도 눈에 확 띄어요' }, { id: 'a3', text: '가볍고 여려 보여요' }, { id: 'a4', text: '조심스럽고 섬세해 보여요' }] },
                levels: { challenge: { prompt: '느낌 카드 여섯 장을 굵은 선과 가는 선으로 나누어 보세요.', toolOptions: { cards: [{ id: 'a1', text: '힘차고 무거워 보여요' }, { id: 'a2', text: '멀리서도 눈에 확 띄어요' }, { id: 'a3', text: '가볍고 여려 보여요' }, { id: 'a4', text: '조심스럽고 섬세해 보여요' }, { id: 'a5', text: '쾅 하고 소리가 날 것 같아요' }, { id: 'a6', text: '바람에 날아갈 것 같아요' }] }, target: { sort: { thick: ['a1', 'a2', 'a5'], thin: ['a3', 'a4', 'a6'] } } } },
                hints: ['공중에 두 가지 선을 손가락으로 그어 보고, 카드의 느낌이 어느 쪽 선을 그을 때와 같은지 떠올려요.'],
                target: { sort: { thick: ['a1', 'a2'], thin: ['a3', 'a4'] } }, difficulty: 0.15 },
              { prompt: '느낌 카드를 곧은 선과 구불구불한 선으로 나누어 보세요.',
                toolOptions: { topic: '선의 모양', slots: [{ id: 'str', label: '곧은 선' }, { id: 'wav', label: '구불구불한 선' }], cards: [{ id: 'b1', text: '반듯하고 딱딱해요' }, { id: 'b2', text: '단단하게 서 있어요' }, { id: 'b3', text: '부드럽게 흔들려요' }, { id: 'b4', text: '물결처럼 흘러가요' }] },
                levels: { challenge: { prompt: '느낌 카드 여섯 장을 곧은 선과 구불구불한 선으로 나누어 보세요.', toolOptions: { cards: [{ id: 'b1', text: '반듯하고 딱딱해요' }, { id: 'b2', text: '단단하게 서 있어요' }, { id: 'b3', text: '부드럽게 흔들려요' }, { id: 'b4', text: '물결처럼 흘러가요' }, { id: 'b5', text: '줄을 맞춘 것처럼 가지런해요' }, { id: 'b6', text: '춤을 추는 것 같아요' }] }, target: { sort: { str: ['b1', 'b2', 'b5'], wav: ['b3', 'b4', 'b6'] } } } },
                target: { sort: { str: ['b1', 'b2'], wav: ['b3', 'b4'] } }, difficulty: 0.2 },
              { prompt: '느낌 카드를 뾰족뾰족한 선과 둥글게 말린 선으로 나누어 보세요.',
                toolOptions: { topic: '선의 끝', slots: [{ id: 'zig', label: '뾰족뾰족한 선' }, { id: 'curl', label: '둥글게 말린 선' }], cards: [{ id: 'c1', text: '날카롭고 화난 것 같아요' }, { id: 'c2', text: '번쩍 하고 터지는 것 같아요' }, { id: 'c3', text: '포근하고 귀여워요' }, { id: 'c4', text: '빙글빙글 돌며 노는 것 같아요' }] },
                levels: { challenge: { prompt: '느낌 카드 여섯 장을 뾰족뾰족한 선과 둥글게 말린 선으로 나누어 보세요.', toolOptions: { cards: [{ id: 'c1', text: '날카롭고 화난 것 같아요' }, { id: 'c2', text: '번쩍 하고 터지는 것 같아요' }, { id: 'c3', text: '포근하고 귀여워요' }, { id: 'c4', text: '빙글빙글 돌며 노는 것 같아요' }, { id: 'c5', text: '찔리면 아플 것 같아요' }, { id: 'c6', text: '솜사탕처럼 말랑해 보여요' }] }, target: { sort: { zig: ['c1', 'c2', 'c5'], curl: ['c3', 'c4', 'c6'] } } } },
                target: { sort: { zig: ['c1', 'c2'], curl: ['c3', 'c4'] } }, difficulty: 0.2,
                predict: { q: '같은 꽃을 뾰족뾰족한 선으로 그리면 어떤 느낌일까요?', options: ['포근해요', '날카로워요'], answer: 1 },
                conclude: '같은 대상도 어떤 선으로 그리느냐에 따라 느낌이 달라져요. 선도 주제를 전해요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 주제에 어울리는 선 고르기', minutes: 9, tool: 'mindmap',
            teacher: '"이 주제는 어떤 느낌을 보여 주고 싶을까요? 그 느낌을 주는 선은?" 주제의 느낌 낱말(쾅, 살랑, 단단)을 먼저 찾게 한 뒤 선을 고른다. 다 이은 학생에게 "왜 그 선인가요?"를 짝에게 말하게 한다. "선은 아무거나 상관없어요"라는 학생에게는 거미줄을 굵은 선으로 그린 그림을 떠올려 보게 한다.',
            task: '주제를 읽고 그 주제의 느낌을 가장 잘 살리는 선을 이어요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              { prompt: '주제마다 가장 어울리는 선을 이어 보세요.',
                toolOptions: { mode: 'match', topic: '주제와 선', slots: [{ id: 's1', label: '천둥 치는 밤하늘' }, { id: 's2', label: '거미줄에 맺힌 이슬' }, { id: 's3', label: '바람에 흔들리는 풀' }], cards: [{ id: 'c1', text: '굵고 뾰족뾰족한 선' }, { id: 'c2', text: '가늘고 고른 선' }, { id: 'c3', text: '가늘고 구불구불한 선' }, { id: 'cx', text: '굵고 둥글게 말린 선' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'c1', text: '굵고 뾰족뾰족한 선' }, { id: 'c2', text: '가늘고 고른 선' }, { id: 'c3', text: '가늘고 구불구불한 선' }, { id: 'cx', text: '굵고 둥글게 말린 선' }, { id: 'cy', text: '굵고 곧은 선' }] } } },
                hints: ['주제가 주는 느낌(무서움, 여림, 흔들림)을 먼저 낱말로 말하고, 그 느낌을 주는 선을 찾아요.', '이은 선이 그 주제의 느낌과 정말 같은지 공중에 그어 보세요. 굵기와 모양을 둘 다 보세요.', '천둥은 굵고 뾰족한 선, 거미줄은 가늘고 고른 선, 흔들리는 풀은 가늘고 구불구불한 선이 어울려요.'],
                target: { match: { s1: 'c1', s2: 'c2', s3: 'c3' } }, difficulty: 0.2 },
              { prompt: '새 주제마다 가장 어울리는 선을 이어 보세요.',
                toolOptions: { mode: 'match', topic: '주제와 선', slots: [{ id: 's1', label: '튼튼한 성벽' }, { id: 's2', label: '살랑살랑 흐르는 시냇물' }, { id: 's3', label: '와장창 깨진 유리창' }], cards: [{ id: 'c1', text: '굵고 곧은 선' }, { id: 'c2', text: '구불구불한 선' }, { id: 'c3', text: '뾰족뾰족한 선' }, { id: 'cx', text: '둥글게 말린 선' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'c1', text: '굵고 곧은 선' }, { id: 'c2', text: '구불구불한 선' }, { id: 'c3', text: '뾰족뾰족한 선' }, { id: 'cx', text: '둥글게 말린 선' }, { id: 'cy', text: '가늘고 흐린 선' }] } } },
                hints: ['주제가 주는 느낌(단단함, 흐름, 깨짐)을 먼저 낱말로 말하고, 그 느낌을 주는 선을 찾아요.'],
                target: { match: { s1: 'c1', s2: 'c2', s3: 'c3' } }, difficulty: 0.2 },
              { prompt: '또 다른 주제마다 가장 어울리는 선을 이어 보세요.',
                toolOptions: { mode: 'match', topic: '주제와 선', slots: [{ id: 's1', label: '폭신한 양털 구름' }, { id: 's2', label: '곧게 쏟아지는 장대비' }, { id: 's3', label: '하늘하늘 날리는 깃털' }], cards: [{ id: 'c1', text: '둥글게 말린 선' }, { id: 'c2', text: '길고 곧은 선' }, { id: 'c3', text: '가늘고 부드러운 선' }, { id: 'cx', text: '굵고 뾰족뾰족한 선' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'c1', text: '둥글게 말린 선' }, { id: 'c2', text: '길고 곧은 선' }, { id: 'c3', text: '가늘고 부드러운 선' }, { id: 'cx', text: '굵고 뾰족뾰족한 선' }, { id: 'cy', text: '짧고 굵은 점선' }] } } },
                hints: ['주제가 주는 느낌(폭신함, 곧게 떨어짐, 하늘하늘)을 먼저 낱말로 말하고, 그 느낌을 주는 선을 찾아요.'],
                target: { match: { s1: 'c1', s2: 'c2', s3: 'c3' } }, difficulty: 0.25,
                predict: { q: '"폭신한 양털 구름"을 뾰족뾰족한 선으로 그리면?', options: ['더 폭신해요', '느낌이 어긋나요'], answer: 1 },
                conclude: '선이 주제의 느낌과 맞으면 보는 사람이 그 느낌을 바로 받아요. 선도 주제를 살리는 방법이에요.' },
            ],
          },
          {
            id: 'a3', title: '활동 3. 여러 가지 선을 직접 그어 보기 (짝 활동)', minutes: 9, tool: 'mindmap', pair: true,
            teacher: '준비물: 네임펜(굵은 쪽·가는 쪽), 크레파스, 8절 도화지를 여섯 칸으로 접은 것. "크레파스를 세워 그으면 가는 선, 눕혀 그으면 굵은 선이 나와요." 여섯 칸에 굵은·가는·곧은·구불구불·뾰족뾰족·말린 선을 하나씩 긋고, 칸 아래에 느낌 낱말을 쓴다. 짝과 바꾸어 보고 "이 선은 어떤 주제에 쓰면 좋을까?"를 말해 준다. 크레파스 가루는 활동 뒤 휴지로 닦는다.',
            task: '도화지 여섯 칸에 여러 가지 선을 직접 긋고 느낌 낱말을 써요. 짝과 바꾸어 어울리는 주제를 말해 줘요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              talk('크레파스를 세워서 한 번, 눕혀서 한 번 그어 굵은 선과 가는 선을 만든 뒤 "다 했어요"를 누르세요.', '굵은 선, 가는 선', ['굵은 선', '가는 선'], ['눕혀서', '세워서']),
              talk('남은 네 칸에 곧은·구불구불·뾰족뾰족·말린 선을 긋고, 칸 아래에 느낌 낱말을 쓴 뒤 "다 했어요"를 누르세요.', '네 가지 선', ['선', '느낌 낱말'], ['반듯해요', '흘러가요', '날카로워요', '포근해요']),
              talk('짝과 도화지를 바꾸어, 짝의 선 하나에 어울리는 주제를 말해 준 뒤 "다 했어요"를 누르세요.', '어울리는 주제', ['짝의 선', '어울리는 주제'], ['천둥', '시냇물', '구름']),
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"선은 그냥 테두리일까요?" 오늘 그은 선 가운데 느낌이 가장 강한 것 하나를 두세 명이 들어 보이고 느낌을 말하게 한다. 내 주제(10차시)에 쓰고 싶은 선을 활동지에 고른다. 출구 1번에서 "부드러운 아기 고양이 털"에 뾰족한 선을 이은 학생에게는 공중에 두 선을 다시 그어 보게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '주제와 선', slots: [{ id: 's1', label: '부드러운 아기 고양이 털' }, { id: 's2', label: '화가 나서 쾅 닫힌 문' }], cards: [{ id: 'c1', text: '가늘고 부드러운 선' }, { id: 'c2', text: '굵고 뾰족뾰족한 선' }, { id: 'cx', text: '길고 곧은 점선' }] }, prompt: '주제마다 가장 어울리는 선을 이어 보세요.', target: { match: { s1: 'c1', s2: 'c2' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '"힘차고 무겁다"는 느낌을 주는 선은 무엇인가요?', options: ['가늘고 흐린 선', '굵고 진한 선', '가늘고 구불구불한 선'], answer: 1, difficulty: 0.1, explain: '굵고 진한 선은 무게가 느껴져 힘차고 무거워 보여요.' },
          { type: 'short', prompt: '내 주제에 쓰고 싶은 선과 그 까닭을 쓰세요.' },
        ],
      },
    ],
    worksheet: {
      title: '선의 느낌',
      items: [
        { type: 'table', prompt: '여러 가지 선을 긋고 느낌을 쓰세요.', columns: ['선', '그어 보기', '느낌 낱말'], cells: [['굵은 선', '', ''], ['가는 선', '', ''], ['곧은 선', '', ''], ['구불구불한 선', '', ''], ['뾰족뾰족한 선', '', ''], ['둥글게 말린 선', '', '']] },
        { type: 'choice', prompt: '"살랑살랑 흐르는 시냇물"에 가장 어울리는 선에 ○ 하세요.', options: ['굵고 곧은 선', '구불구불한 선', '뾰족뾰족한 선', '짧은 점선'], answer: '구불구불한 선' },
        { type: 'short', prompt: '내 주제에 쓸 선과 고른 까닭을 쓰세요.' },
        { type: 'draw', prompt: '고른 선으로 내 주제의 주인공 테두리를 그려 보세요.' },
      ],
      easy: {
        note: '선을 공중에 손가락으로 그어 보면 느낌을 알 수 있어요.',
        items: [
          { type: 'table', prompt: '두 선을 긋고 느낌을 쓰세요.', columns: ['선', '느낌'], cells: [['굵은 선', ''], ['가는 선', '']] },
          { type: 'choice', prompt: '천둥에 어울리는 선에 ○ 하세요.', options: ['굵고 뾰족한 선', '가늘고 부드러운 선'], answer: '굵고 뾰족한 선' },
          { type: 'draw', prompt: '내 주제에 쓸 선을 그어 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 맞는 칸에 놓으면 바로 표시되고, 이은 카드에도 바로 표시가 생겨요.',
      base: '스스로 나누고 이은 뒤 확인해요.',
      challenge: '느낌 카드가 여섯 장으로 늘고, 주제와 선 잇기에 그럴듯한 선 카드가 하나 더 섞여 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 선과 색은 꾸미기일 뿐 주제와 상관없다고 여긴다(이 주제의 대표 오개념) → 같은 대상을 두 가지 선으로 그려 느낌을 견주게 한다. ② 굵기와 모양을 따로 보지 못한다 → "굵기는? 모양은?" 두 번 묻는다. ③ 크레파스를 세게 눌러 부러뜨린다 → 눕혀 쓸 때는 짧게 잘라 쓰게 한다. 준비물: 네임펜, 크레파스, 여섯 칸으로 접은 8절 도화지, 손 닦을 휴지.',
  }));

  // ───────────── 12차시 (연습) ─────────────
  lessons.push(lesson(12, S3, {
    title: '따뜻한 느낌 색과 차가운 느낌 색으로 주제 살리기',
    objective: '따뜻한 느낌을 주는 색과 차가운 느낌을 주는 색을 가르고, 주제의 느낌에 어울리는 색을 근거를 들어 골라 쓸 수 있다.',
    illustration: {
      prompt: art('two paper houses side by side, one glowing in red, orange and yellow beside a campfire and one in blue and white inside an ice cave'),
      scene: scene([
        { motif: 'sun', x: 110, y: 60, s: 0.8 }, { motif: 'snow', x: 380, y: 70 }, { motif: 'hills', y: 214 },
        { motif: 'house', x: 140, y: 214 }, { motif: 'house', x: 340, y: 214 }, { motif: 'star', x: 420, y: 140, s: 0.5 },
        { motif: 'text', x: 240, y: 132, text: '따뜻한 색, 차가운 색', size: 22 },
      ]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '같은 집 그림을 두 장 보인다. 하나는 빨강·주황·노랑, 하나는 파랑·하늘색·하양으로 칠한 것. "어느 집이 더 따뜻해 보이나요? 어느 집에 겨울이 온 것 같나요?" 까닭을 묻고 "불, 해" "물, 얼음"처럼 떠오르는 것을 받아 적는다. "색도 선처럼 느낌을 전해요. 오늘은 주제에 어울리는 색을 골라 봐요." 시연 단추로 색 카드가 두 갈래로 나뉘는 모습을 보여 준다.',
        student: '두 집 가운데 따뜻해 보이는 집과 추워 보이는 집을 고르고, 그 색을 보면 무엇이 떠오르는지 말해 봅시다.',
        demo: { tool: 'mindmap', options: { topic: '색의 느낌', slots: [{ id: 'warm', label: '따뜻한 느낌' }, { id: 'cool', label: '차가운 느낌' }], cards: [{ id: 'd1', text: '주황' }, { id: 'd2', text: '파랑' }] }, sequence: [{ sort: { warm: ['d1'], cool: ['d2'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 색의 느낌 가르고 주제와 잇기', minutes: 9, tool: 'mindmap',
            teacher: '"이 색을 보면 무엇이 떠오르나요? 불과 해인가요, 물과 얼음인가요?" 떠오르는 것으로 따뜻한 느낌과 차가운 느낌을 가른다. 초록·보라는 어느 쪽이라고 딱 잘라 말하기 어려운 색이라 오늘 카드에는 넣지 않았다고 말해 둔다. 주제 잇기에서는 주제의 느낌 낱말(포근, 서늘, 슬픔)을 먼저 찾게 한다.',
            task: '색을 보고 떠오르는 것으로 따뜻한 느낌과 차가운 느낌을 가르고, 주제에 어울리는 색 묶음을 이어요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '색 카드를 따뜻한 느낌과 차가운 느낌으로 나누어 보세요.',
                toolOptions: { topic: '색의 느낌', slots: [{ id: 'warm', label: '따뜻한 느낌' }, { id: 'cool', label: '차가운 느낌' }], cards: [{ id: 'k1', text: '빨강' }, { id: 'k2', text: '주황' }, { id: 'k3', text: '노랑' }, { id: 'k4', text: '파랑' }, { id: 'k5', text: '하늘색' }, { id: 'k6', text: '남색' }] },
                levels: { challenge: { prompt: '색 카드 여덟 장을 따뜻한 느낌과 차가운 느낌으로 나누어 보세요.', toolOptions: { cards: [{ id: 'k1', text: '빨강' }, { id: 'k2', text: '주황' }, { id: 'k3', text: '노랑' }, { id: 'k4', text: '파랑' }, { id: 'k5', text: '하늘색' }, { id: 'k6', text: '남색' }, { id: 'k7', text: '다홍' }, { id: 'k8', text: '청록' }] }, target: { sort: { warm: ['k1', 'k2', 'k3', 'k7'], cool: ['k4', 'k5', 'k6', 'k8'] } } } },
                hints: ['색마다 무엇이 떠오르는지 말해 봐요. 불과 해가 떠오르면 한쪽, 물과 얼음이 떠오르면 다른 쪽이에요.'],
                target: { sort: { warm: ['k1', 'k2', 'k3'], cool: ['k4', 'k5', 'k6'] } }, difficulty: 0.15 },
              { prompt: '주제마다 가장 어울리는 색 묶음을 이어 보세요.',
                toolOptions: { mode: 'match', topic: '주제와 색', slots: [{ id: 's1', label: '모닥불 곁의 겨울밤' }, { id: 's2', label: '얼음 동굴 탐험' }, { id: 's3', label: '비 오는 날의 슬픈 마음' }], cards: [{ id: 'c1', text: '빨강·주황·노랑' }, { id: 'c2', text: '파랑·하늘색·하양' }, { id: 'c3', text: '회색·남색' }, { id: 'cx', text: '분홍·연두·노랑' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'c1', text: '빨강·주황·노랑' }, { id: 'c2', text: '파랑·하늘색·하양' }, { id: 'c3', text: '회색·남색' }, { id: 'cx', text: '분홍·연두·노랑' }, { id: 'cy', text: '알록달록 열두 색 모두' }] } } },
                hints: ['주제가 주는 느낌(포근함, 서늘함, 슬픔)을 먼저 낱말로 말하고, 그 느낌이 드는 색 묶음을 찾아요.', '이은 색 묶음을 보았을 때 그 주제의 느낌이 드는지 다시 떠올려 보세요.', '모닥불은 빨강·주황·노랑, 얼음 동굴은 파랑·하늘색·하양, 슬픈 비 오는 날은 회색·남색이 어울려요.'],
                target: { match: { s1: 'c1', s2: 'c2', s3: 'c3' } }, difficulty: 0.2 },
              { prompt: '새 주제마다 가장 어울리는 색 묶음을 이어 보세요.',
                toolOptions: { mode: 'match', topic: '주제와 색', slots: [{ id: 's1', label: '깊은 밤의 숲' }, { id: 's2', label: '한낮의 바닷가' }, { id: 's3', label: '단풍 든 가을 산' }], cards: [{ id: 'c1', text: '남색·검정' }, { id: 'c2', text: '노랑·하늘색' }, { id: 'c3', text: '빨강·주황·갈색' }, { id: 'cx', text: '분홍·하양' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'c1', text: '남색·검정' }, { id: 'c2', text: '노랑·하늘색' }, { id: 'c3', text: '빨강·주황·갈색' }, { id: 'cx', text: '분홍·하양' }, { id: 'cy', text: '회색 한 가지' }] } } },
                hints: ['주제가 언제(밤, 한낮), 무엇(단풍)인지 먼저 짚고, 그때 보이는 색과 느낌을 떠올려요.'],
                target: { match: { s1: 'c1', s2: 'c2', s3: 'c3' } }, difficulty: 0.25,
                predict: { q: '"깊은 밤의 숲"을 노랑·분홍으로 칠하면 어떤 느낌일까요?', options: ['깊은 밤 같아요', '밤 같지 않아요'], answer: 1 },
                conclude: '색이 주제의 느낌과 맞아야 보는 사람이 그때와 그 마음을 느껴요. 색도 주제를 전해요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 주제의 느낌에 맞는 색만 골라 꾸미기', minutes: 9, tool: 'collage',
            teacher: '"오늘은 모양보다 색이 주인공이에요. 주제의 느낌에 맞는 색만 골라요." 모닥불은 따뜻한 느낌 색만, 얼음 나라는 차가운 느낌 색만 쓴다. 다른 느낌의 색을 하나 붙인 학생에게 "이 조각을 보면 무엇이 떠오르나요? 주제와 같은 느낌인가요?"라고 묻는다. 마지막 문항은 내 주제(10차시)의 느낌에 맞는 색을 골라 만든다.',
            task: '주제의 느낌을 정하고, 그 느낌을 주는 색 조각만 골라 붙여요.',
            levels: {
              easy: { shapes: ['triangle', 'circle', 'square', 'diamond'], colors: ['빨강', '주황', '노랑', '파랑', '하양'], sizes: ['m', 'l'] },
              base: { shapes: ['triangle', 'circle', 'square', 'diamond', 'star', 'semi'] },
              challenge: {},
            },
            items: [
              { prompt: '모닥불을 꾸며요. 빨강 조각 두 개 이상, 주황 조각 두 개 이상, 노랑 조각 하나 이상을 붙이고, 파랑 조각은 쓰지 않아요.', target: { has: [{ color: '빨강', min: 2 }, { color: '주황', min: 2 }, { color: '노랑', min: 1 }, { color: '파랑', max: 0 }] }, difficulty: 0.2,
                hints: ['불을 보면 떠오르는 느낌을 먼저 말하고, 그 느낌을 주는 색만 골라 붙여요. 색마다 개수를 세어요.'],
                levels: { challenge: { prompt: '모닥불을 꾸며요. 빨강·주황·노랑 세모를 두 개씩 이상 붙여 서로 겹치고, 차가운 느낌 색(파랑·하양)은 쓰지 않아요.', target: { has: [{ shape: 'triangle', color: '빨강', min: 2 }, { shape: 'triangle', color: '주황', min: 2 }, { shape: 'triangle', color: '노랑', min: 2 }, { color: '파랑', max: 0 }, { color: '하양', max: 0 }], overlap: 3 } } } },
              { prompt: '얼음 나라를 꾸며요. 파랑 조각 세 개 이상과 하양 조각 두 개 이상을 붙이고, 빨강과 주황 조각은 쓰지 않아요.', target: { has: [{ color: '파랑', min: 3 }, { color: '하양', min: 2 }, { color: '빨강', max: 0 }, { color: '주황', max: 0 }] }, difficulty: 0.2,
                hints: ['얼음을 보면 떠오르는 느낌을 먼저 말하고, 그 느낌과 다른 색이 하나라도 섞였는지 살펴요.'],
                predict: { q: '얼음 나라에 주황 해를 하나 붙이면 어떻게 보일까요?', options: ['더 추워 보여요', '덜 추워 보여요'], answer: 1 },
                conclude: '따뜻한 색이 섞이면 차가운 느낌이 흐려져요. 주제의 느낌에 맞는 색만 고르면 느낌이 또렷해요.' },
              { prompt: '내 주제의 느낌을 정하고, 그 느낌에 맞는 색만 골라 꾸며 점검해요.', target: { selfCheck: ['내 주제의 느낌을 낱말로 정했어요', '그 느낌에 맞는 색만 골랐어요', '고른 색을 보면 무엇이 떠오르는지 짝에게 말했어요'], minPieces: 4 }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a3', title: '활동 3. 같은 그림을 두 가지 색으로 칠해 보기 (짝 활동)', minutes: 8, tool: 'mindmap', pair: true,
            teacher: '준비물: 같은 집 밑그림을 두 개 인쇄한 활동지, 크레파스. "왼쪽 집은 따뜻한 느낌 색만, 오른쪽 집은 차가운 느낌 색만 써서 칠해요." 넓은 면은 크레파스를 눕혀 빠르게 칠하게 한다(6분). 짝과 바꾸어 보고 "어느 집에 살고 싶어? 어느 계절 같아?"를 묻게 한다. 다 칠하지 못해도 두 집의 느낌이 보이면 된다고 말한다.',
            task: '같은 집을 하나는 따뜻한 느낌 색, 하나는 차가운 느낌 색으로 칠하고 짝과 느낌을 견주어요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              talk('왼쪽 집을 따뜻한 느낌 색만 써서 칠한 뒤 "다 했어요"를 누르세요.', '따뜻한 집', ['따뜻한 느낌 색', '떠오르는 것'], ['빨강', '주황', '노랑']),
              talk('오른쪽 집을 차가운 느낌 색만 써서 칠한 뒤 "다 했어요"를 누르세요.', '차가운 집', ['차가운 느낌 색', '떠오르는 것'], ['파랑', '하늘색', '남색']),
              talk('짝과 활동지를 바꾸어 "어느 집이 어느 계절 같아?"를 묻고 대답을 들은 뒤 "다 했어요"를 누르세요.', '느낌 견주기', ['따뜻한 집', '차가운 집'], ['겨울', '여름', '저녁']),
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"같은 집인데 색만 바꾸었더니 무엇이 달라졌나요?" 두세 명의 활동지를 들어 보이고 계절과 느낌을 말하게 한다. 내 주제에 쓸 색 묶음을 활동지에 적는다. 출구 1번에서 따뜻한 느낌 색을 함께 붙인 학생에게는 "눈 내린 밤에 그 색을 보면 무엇이 떠오르나요?"를 다시 묻는다.',
        exitTicket: [
          { type: 'tool', tool: 'collage', options: { shapes: ['circle', 'star', 'semi'], colors: ['파랑', '하양', '주황', '빨강'] }, prompt: '"눈 내린 고요한 밤"을 꾸며요. 하양 조각 세 개 이상과 파랑 조각 하나 이상을 붙이고, 주황과 빨강은 쓰지 마세요.', target: { has: [{ color: '하양', min: 3 }, { color: '파랑', min: 1 }, { color: '주황', max: 0 }, { color: '빨강', max: 0 }] }, difficulty: 0.2 },
          { type: 'choice', prompt: '"따뜻한 엄마 품"에 가장 어울리는 색 묶음은 무엇인가요?', options: ['파랑·하늘색', '주황·노랑·분홍', '검정·남색'], answer: 1, difficulty: 0.15, explain: '주황·노랑·분홍은 해와 불을 떠올리게 해 포근하고 따뜻한 느낌을 줘요.' },
          { type: 'mood', prompt: '색만 바꾸어 칠해 보니 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '색의 느낌',
      items: [
        { type: 'table', prompt: '색을 보면 떠오르는 것과 느낌을 쓰세요.', columns: ['색', '떠오르는 것', '느낌'], cells: [['빨강', '', ''], ['주황', '', ''], ['파랑', '', ''], ['하늘색', '', '']] },
        { type: 'choice', prompt: '"얼음 동굴 탐험"에 가장 어울리는 색 묶음에 ○ 하세요.', options: ['빨강·주황·노랑', '파랑·하늘색·하양', '분홍·연두', '갈색·주황'], answer: '파랑·하늘색·하양' },
        { type: 'short', prompt: '내 주제의 느낌과, 그 느낌에 맞게 쓸 색 세 가지를 쓰세요.' },
        { type: 'draw', prompt: '내 주제의 주인공 하나를 고른 색으로 칠해 보세요.' },
      ],
      easy: {
        note: '불과 해가 떠오르면 따뜻한 느낌 색, 물과 얼음이 떠오르면 차가운 느낌 색이에요.',
        items: [
          { type: 'choice', prompt: '따뜻한 느낌 색에 ○ 하세요.', options: ['주황', '파랑'], answer: '주황' },
          { type: 'short', prompt: '내 주제에 쓸 색을 쓰세요.' },
          { type: 'draw', prompt: '고른 색으로 주인공을 칠해 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 맞는 칸에 놓으면 바로 표시되고, 색종이는 따뜻한 느낌 색 셋과 차가운 느낌 색 둘, 모양 네 가지만 나와요.',
      base: '스스로 나누고 이은 뒤 확인하고, 모든 색 가운데 주제에 맞는 색을 골라요.',
      challenge: '색 카드가 여덟 장(다홍·청록 더함)이고, 모닥불은 세모만으로 세 색을 겹쳐 쌓고 차가운 느낌 색을 모두 빼야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 좋아하는 색을 주제와 상관없이 고른다 → 그 색을 보면 무엇이 떠오르는지 묻는다. ② 초록·보라를 어느 쪽에 넣을지 다툰다 → 둘은 느낌이 딱 정해지지 않는 색이라 오늘은 다루지 않았다고 말하고, 쓸 때는 주제에 비추어 판단하게 한다. ③ 색은 꾸미기일 뿐이라고 여긴다 → 같은 집을 두 색으로 칠한 활동지를 견주게 한다. 준비물: 같은 집 밑그림 두 개를 인쇄한 활동지, 크레파스.',
  }));

  // ───────────── 13차시 (확장) ─────────────
  lessons.push(lesson(13, S3, {
    title: '뾰족한 모양과 둥근 모양으로 주제의 느낌 나타내기',
    objective: '뾰족한 모양, 둥근 모양, 반듯한 모양이 주는 느낌을 말하고, 주제의 느낌에 맞는 모양을 골라 나타낼 수 있다.',
    illustration: {
      prompt: art('a sharp paper lightning bolt made of triangles above a soft cloud quilt made of overlapping circles and a sturdy robot made of squares'),
      scene: scene([
        { motif: 'cloud', x: 120, y: 56, s: 1.2 }, { motif: 'star', x: 330, y: 70 }, { motif: 'hills', y: 214 },
        { motif: 'house', x: 380, y: 214 }, { motif: 'flower', x: 110, y: 226, color: 'peach' },
        { motif: 'text', x: 240, y: 146, text: '뾰족하게, 둥글게, 반듯하게', size: 22 },
      ]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '세모 조각만으로 만든 얼굴과 동그라미 조각만으로 만든 얼굴을 보인다. "어느 얼굴이 화가 나 보이나요? 어느 얼굴이 순해 보이나요?" 까닭을 들으며 모서리, 둥근 곳이라는 말을 끌어낸다. "선처럼 모양도 느낌을 전해요. 오늘은 주제에 맞는 모양을 골라 봐요." 시연 단추로 세모 조각이 모여 번개가 되는 모습을 보여 준다.',
        student: '세모 얼굴과 동그라미 얼굴 가운데 화가 나 보이는 얼굴을 고르고 까닭을 말해 봅시다.',
        demo: { tool: 'collage', options: { shapes: ['triangle', 'circle'], colors: ['노랑'] }, sequence: [{ has: [{ shape: 'triangle', min: 3 }] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 주제에 어울리는 모양 잇기', minutes: 8, tool: 'mindmap',
            teacher: '"이 주제를 만진다면 손에 어떤 느낌이 들까요?" 찔릴 것 같으면 뾰족한 모양, 말랑하면 둥근 모양, 단단하고 반듯하면 네모난 모양이 어울린다는 기준을 세운다. "선인장을 동그라미로만 만들면 어떨까요?" 하고 어긋나는 예도 떠올려 보게 한다.',
            task: '주제를 읽고, 그 주제의 느낌을 가장 잘 살리는 모양을 이어요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              { prompt: '주제마다 가장 어울리는 모양을 이어 보세요.',
                toolOptions: { mode: 'match', topic: '주제와 모양', slots: [{ id: 's1', label: '번쩍 내리치는 번개' }, { id: 's2', label: '포근한 구름 이불' }, { id: 's3', label: '튼튼한 로봇' }], cards: [{ id: 'c1', text: '뾰족한 세모와 마름모' }, { id: 'c2', text: '둥근 동그라미와 반원' }, { id: 'c3', text: '반듯한 네모' }, { id: 'cx', text: '하트' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'c1', text: '뾰족한 세모와 마름모' }, { id: 'c2', text: '둥근 동그라미와 반원' }, { id: 'c3', text: '반듯한 네모' }, { id: 'cx', text: '하트' }, { id: 'cy', text: '나뭇잎' }] } } },
                hints: ['주제를 손으로 만진다고 생각해요. 찔릴 것 같은지, 말랑한지, 단단하고 반듯한지 먼저 말하고 모양을 찾아요.', '이은 모양으로 그 주제를 만들면 느낌이 같은지 떠올려 보세요.', '번개는 뾰족한 세모·마름모, 구름 이불은 둥근 동그라미·반원, 로봇은 반듯한 네모가 어울려요.'],
                target: { match: { s1: 'c1', s2: 'c2', s3: 'c3' } }, difficulty: 0.15 },
              { prompt: '새 주제마다 가장 어울리는 모양을 이어 보세요.',
                toolOptions: { mode: 'match', topic: '주제와 모양', slots: [{ id: 's1', label: '가시 돋친 선인장' }, { id: 's2', label: '통통 튀는 비눗방울' }, { id: 's3', label: '높이 쌓은 벽돌 탑' }], cards: [{ id: 'c1', text: '뾰족한 세모' }, { id: 'c2', text: '둥근 동그라미' }, { id: 'c3', text: '반듯한 긴 네모' }, { id: 'cx', text: '별' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'c1', text: '뾰족한 세모' }, { id: 'c2', text: '둥근 동그라미' }, { id: 'c3', text: '반듯한 긴 네모' }, { id: 'cx', text: '별' }, { id: 'cy', text: '하트' }] } } },
                hints: ['주제를 손으로 만진다고 생각해요. 찔릴 것 같은지, 말랑한지, 단단하고 반듯한지 먼저 말해요.'],
                target: { match: { s1: 'c1', s2: 'c2', s3: 'c3' } }, difficulty: 0.2 },
              { prompt: '마음을 나타내는 주제마다 가장 어울리는 모양을 이어 보세요.',
                toolOptions: { mode: 'match', topic: '마음과 모양', slots: [{ id: 's1', label: '화가 나서 씩씩대는 마음' }, { id: 's2', label: '친구와 안아 주는 편안한 마음' }], cards: [{ id: 'c1', text: '뾰족뾰족한 세모가 많은 모양' }, { id: 'c2', text: '둥글둥글한 동그라미가 많은 모양' }, { id: 'cx', text: '아무 모양이나 같아요' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'c1', text: '뾰족뾰족한 세모가 많은 모양' }, { id: 'c2', text: '둥글둥글한 동그라미가 많은 모양' }, { id: 'cx', text: '아무 모양이나 같아요' }, { id: 'cy', text: '반듯한 네모 하나' }] } } },
                hints: ['그 마음일 때 내 몸과 얼굴이 어떤지 떠올려요. 딱딱하게 굳는지, 부드럽게 풀리는지 견주어 모양을 찾아요.'],
                target: { match: { s1: 'c1', s2: 'c2' } }, difficulty: 0.2,
                predict: { q: '마음처럼 보이지 않는 것도 모양으로 나타낼 수 있을까요?', options: ['있어요', '없어요'], answer: 0 },
                conclude: '보이지 않는 마음도 뾰족하거나 둥근 모양으로 느낌을 나타낼 수 있어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 느낌에 맞는 모양만 골라 꾸미기', minutes: 10, tool: 'collage',
            teacher: '"오늘은 색보다 모양이 주인공이에요." 번개는 뾰족한 모양만, 구름 이불은 둥근 모양만 쓴다. 어긋나는 모양을 하나 붙인 학생에게는 "이 조각이 들어가니 느낌이 어떻게 달라졌나요?"라고 묻는다. 셋째 문항(화난 마음)은 얼굴이 아니어도 된다고 말해 준다.',
            task: '주제의 느낌을 정하고, 그 느낌을 주는 모양 조각만 골라 붙여요.',
            levels: {
              easy: { shapes: ['triangle', 'diamond', 'circle', 'semi', 'square'], colors: ['노랑', '하양', '파랑', '빨강'], sizes: ['m', 'l'] },
              base: { shapes: ['triangle', 'diamond', 'circle', 'semi', 'square', 'heart', 'star'] },
              challenge: { shapes: ['circle', 'square', 'rect', 'triangle', 'semi', 'star', 'heart', 'leaf', 'diamond'] },
            },
            items: [
              { prompt: '번쩍 내리치는 번개를 꾸며요. 세모 세 개 이상과 마름모 두 개 이상을 쓰고, 동그라미와 반원은 쓰지 않아요.', target: { has: [{ shape: 'triangle', min: 3 }, { shape: 'diamond', min: 2 }, { shape: 'circle', max: 0 }, { shape: 'semi', max: 0 }] }, difficulty: 0.2,
                hints: ['번개가 주는 느낌(번쩍, 날카로움)을 말하고, 그 느낌과 다른 둥근 조각이 섞이지 않았는지 살펴요.'],
                levels: { challenge: { prompt: '번쩍 내리치는 번개를 꾸며요. 노랑 세모 네 개 이상과 노랑 마름모 두 개 이상을 이어지게 서로 겹치고, 둥근 모양은 쓰지 않아요.', target: { has: [{ shape: 'triangle', color: '노랑', min: 4 }, { shape: 'diamond', color: '노랑', min: 2 }, { shape: 'circle', max: 0 }, { shape: 'semi', max: 0 }], overlap: 3 } } } },
              { prompt: '포근한 구름 이불을 꾸며요. 동그라미 세 개 이상과 반원 두 개 이상을 서로 겹치고, 세모와 마름모는 쓰지 않아요.', target: { has: [{ shape: 'circle', min: 3 }, { shape: 'semi', min: 2 }, { shape: 'triangle', max: 0 }, { shape: 'diamond', max: 0 }], overlap: 2 }, difficulty: 0.25,
                hints: ['포근함을 주는 모양을 고르고, 조각끼리 붙여 겹쳐 폭신한 덩어리를 만들어요.'],
                predict: { q: '구름 이불에 세모를 하나 넣으면 어떤 느낌일까요?', options: ['더 포근해요', '찔릴 것 같아요'], answer: 1 },
                conclude: '뾰족한 모양이 하나 섞여도 포근한 느낌이 흔들려요. 느낌에 맞는 모양만 고르면 주제가 살아요.' },
              { prompt: '화가 나서 씩씩대는 마음을 모양으로 나타내요. 빨강 세모 네 개 이상을 쓰고, 둥근 모양은 쓰지 않아요.', target: { has: [{ shape: 'triangle', color: '빨강', min: 4 }, { shape: 'circle', max: 0 }, { shape: 'semi', max: 0 }, { shape: 'heart', max: 0 }] }, difficulty: 0.25,
                hints: ['화난 마음은 어떤 모양일 때 더 잘 느껴지는지 활동 1을 떠올리고, 둥근 조각이 하나도 없는지 살펴요.'] },
            ],
          },
          {
            id: 'a3', title: '활동 3. 마음을 모양으로 그려 맞히기 (짝 활동)', minutes: 8, tool: 'mindmap', pair: true,
            teacher: '준비물: 사인펜, 활동지 네 칸. "얼굴은 그리지 말고, 모양만으로 마음을 나타내요." 기쁨·화남·걱정·편안함 가운데 하나를 몰래 골라 한 칸에 모양으로 그리고, 짝이 어떤 마음인지 맞힌다. 짝이 못 맞히면 "어떤 모양이었으면 알았을까?"를 묻고 고쳐 본다. 맞히기가 목적이 아니라 모양이 느낌을 전하는지 알아보는 것이라고 말한다.',
            task: '마음 하나를 몰래 골라 얼굴 없이 모양으로만 그리고, 짝이 어떤 마음인지 맞혀요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              talk('기쁨·화남·걱정·편안함 가운데 하나를 몰래 골라 활동지 칸에 모양으로만 그린 뒤 "다 했어요"를 누르세요.', '마음을 모양으로', ['고른 마음', '쓴 모양'], ['기쁨', '화남', '걱정', '편안함']),
              talk('짝에게 그림을 보여 주고 어떤 마음인지 맞혀 보게 한 뒤, 맞았는지 말해 주고 "다 했어요"를 누르세요.', '마음 맞히기', ['짝이 맞힌 마음', '내가 고른 마음'], ['맞았어요', '달랐어요']),
              talk('짝이 다르게 보았다면 "어떤 모양이었으면 알았을까?"를 묻고, 한 칸에 고쳐 그린 뒤 "다 했어요"를 누르세요.', '고쳐 그리기', ['처음 모양', '고친 모양'], ['더 뾰족하게', '더 둥글게']),
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"선, 색, 모양 가운데 오늘은 모양이었지요. 세 가지 모두 무엇을 할 수 있었나요?" 학생 말로 "느낌을 전해요, 주제를 살려요"를 끌어낸다. 내 주제에 쓸 모양을 활동지에 고른다. 출구 1번에서 둥근 모양을 함께 붙인 학생은 다음 시간 시작에 가시 모양과 둥근 모양 조각을 손으로 만져 보게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'collage', options: { shapes: ['triangle', 'circle', 'star', 'square'], colors: ['초록', '갈색'] }, prompt: '"뾰족한 가시가 돋은 밤송이"를 꾸며요. 세모 다섯 개 이상을 붙이고, 동그라미는 쓰지 마세요.', target: { has: [{ shape: 'triangle', min: 5 }, { shape: 'circle', max: 0 }] }, difficulty: 0.2 },
          { type: 'choice', prompt: '"말랑말랑한 젤리"에 가장 어울리는 모양은 무엇인가요?', options: ['뾰족한 세모', '둥근 동그라미', '반듯한 네모'], answer: 1, difficulty: 0.1, explain: '둥근 모양은 모서리가 없어 말랑하고 부드러운 느낌을 줘요.' },
          { type: 'short', prompt: '내 주제에 쓸 모양과 그 모양이 주는 느낌을 쓰세요.' },
        ],
      },
    ],
    worksheet: {
      title: '모양의 느낌',
      items: [
        { type: 'table', prompt: '모양이 주는 느낌과 어울리는 주제를 쓰세요.', columns: ['모양', '느낌', '어울리는 주제'], cells: [['뾰족한 세모', '', ''], ['둥근 동그라미', '', ''], ['반듯한 네모', '', '']] },
        { type: 'choice', prompt: '"튼튼한 로봇"에 가장 어울리는 모양에 ○ 하세요.', options: ['하트', '반듯한 네모', '둥근 반원', '나뭇잎'], answer: '반듯한 네모' },
        { type: 'draw', prompt: '얼굴 없이 모양만으로 "기쁨"을 나타내 보세요.' },
        { type: 'short', prompt: '내 주제에 쓸 모양과 그 까닭을 쓰세요.' },
      ],
      easy: {
        note: '찔릴 것 같으면 뾰족한 모양, 말랑하면 둥근 모양이에요.',
        items: [
          { type: 'choice', prompt: '번개에 어울리는 모양에 ○ 하세요.', options: ['세모', '동그라미'], answer: '세모' },
          { type: 'draw', prompt: '둥근 모양으로 구름을 그리세요.' },
          { type: 'short', prompt: '내 주제에 쓸 모양을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '이은 카드에 바로 표시가 생기고, 색종이는 뾰족한 모양 둘·둥근 모양 둘·네모와 네 가지 색, 두 크기만 나와요.',
      base: '스스로 이은 뒤 확인하고, 하트·별이 더해진 고르개에서 느낌에 맞는 모양을 골라요.',
      challenge: '그럴듯한 모양 카드가 하나 더 섞여 있고, 번개는 한 가지 색으로 이어지게 겹쳐 쌓아야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 좋아하는 모양(하트, 별)을 주제와 상관없이 넣는다 → 그 모양이 주는 느낌을 먼저 말하게 한다. ② 별을 둥근 모양으로 여긴다 → 별에도 뾰족한 끝이 다섯 개 있다는 것을 손으로 짚게 한다. ③ 마음 그리기에서 얼굴을 그린다 → 얼굴 없이 모양만 쓰게 한다. 준비물: 사인펜, 네 칸 활동지.',
  }));

  // ───────────── 14차시 (핵심) ─────────────
  lessons.push(lesson(14, S3, {
    title: '가장 보여 주고 싶은 것을 화면에서 가장 크게 그리기',
    objective: '주제에서 가장 보여 주고 싶은 것을 정해 화면에서 가장 크게 나타내고, 고른 선과 색으로 주제를 그릴 수 있다.',
    illustration: {
      prompt: art('a child biting a huge slice of watermelon that fills most of the paper, with a tiny fan and a small window in the corner and plenty of calm empty space'),
      scene: scene([
        { motif: 'sun', x: 410, y: 56, s: 0.7 }, { motif: 'cloud', x: 110, y: 52 }, { motif: 'hills', y: 214 },
        { motif: 'flower', x: 240, y: 220, color: 'rose', s: 1.8 }, { motif: 'leaf', x: 400, y: 214, r: 30, s: 0.6 },
        { motif: 'text', x: 240, y: 128, text: '가장 크게, 가장 먼저 보이게', size: 22 },
      ]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '같은 주제("수박을 크게 베어 무는 나")를 그린 그림 두 장을 보인다. ㄱ은 수박과 얼굴이 작고 둘레가 선풍기·창문·화분으로 빈틈없이 가득, ㄴ은 수박과 얼굴이 크고 빈 곳이 있다. "어느 그림에서 주제가 먼저 보이나요?" "ㄱ은 빈 곳이 없어서 더 잘 그린 것 아니에요?"라는 말이 나오면 "빈 곳을 다 채우니 무엇이 주인공인지 보이나요?"라고 되묻는다. 시연 단추로 큰 조각 하나와 작은 조각들이 놓이는 모습을 보여 준다.',
        student: '두 그림 가운데 "수박을 크게 베어 무는 나"가 먼저 보이는 그림을 고르고 까닭을 말해 봅시다.',
        demo: { tool: 'collage', options: { shapes: ['semi', 'circle'], colors: ['빨강', '초록'] }, sequence: [{ has: [{ shape: 'semi', color: '빨강', size: 'l', n: 1 }, { shape: 'circle', size: 's', min: 2 }] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 주제에서 가장 크게 그릴 것 찾기', minutes: 8, tool: 'mindmap',
            teacher: '"주제 문장에서 \'무엇을 하는\' 부분을 찾아보세요. 그것이 가장 크게 보여야 해요." 주제마다 가장 크게 그릴 것을 고른다. 셋째 문항은 바른 생각만 고르는 문항이다. "빈 곳이 있으면 덜 그린 것"이라는 생각에는 "빈 곳은 주인공을 돋보이게 쉬는 자리"라고 답한다.',
            task: '주제 문장을 읽고 가장 크게 그릴 것을 잇고, 화면 채우기에 대한 바른 생각만 골라요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              { prompt: '주제마다 화면에서 가장 크게 그릴 것을 이어 보세요.',
                toolOptions: { mode: 'match', topic: '가장 크게', slots: [{ id: 's1', label: '수박을 크게 베어 무는 나' }, { id: 's2', label: '꽃에 앉아 꿀을 빠는 나비' }, { id: 's3', label: '눈사람에게 목도리를 둘러 주는 동생' }], cards: [{ id: 'c1', text: '수박과 벌린 입' }, { id: 'c2', text: '날개를 편 나비' }, { id: 'c3', text: '눈사람과 목도리' }, { id: 'cx', text: '하늘의 구름' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'c1', text: '수박과 벌린 입' }, { id: 'c2', text: '날개를 편 나비' }, { id: 'c3', text: '눈사람과 목도리' }, { id: 'cx', text: '하늘의 구름' }, { id: 'cy', text: '창밖의 나무' }] } } },
                hints: ['주제 문장에서 "누가 무엇을 하는지"를 찾아요. 그 일을 하는 주인공과 물건이 가장 크게 보여야 해요.', '이은 카드가 주제 문장에 나오는 주인공인가요, 둘레에 있는 것인가요? 다시 읽어 보세요.', '수박 먹는 나는 수박과 입, 꿀 빠는 나비는 날개 편 나비, 목도리 둘러 주기는 눈사람과 목도리를 가장 크게 그려요.'],
                target: { match: { s1: 'c1', s2: 'c2', s3: 'c3' } }, difficulty: 0.15 },
              { prompt: '새 주제마다 화면에서 가장 크게 그릴 것을 이어 보세요.',
                toolOptions: { mode: 'match', topic: '가장 크게', slots: [{ id: 's1', label: '철봉에 거꾸로 매달린 나' }, { id: 's2', label: '도토리를 볼에 문 다람쥐' }, { id: 's3', label: '할머니와 만두 빚는 손' }], cards: [{ id: 'c1', text: '거꾸로 매달린 내 몸' }, { id: 'c2', text: '볼이 불룩한 다람쥐 얼굴' }, { id: 'c3', text: '만두를 쥔 두 사람의 손' }, { id: 'cx', text: '운동장 끝의 학교 건물' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'c1', text: '거꾸로 매달린 내 몸' }, { id: 'c2', text: '볼이 불룩한 다람쥐 얼굴' }, { id: 'c3', text: '만두를 쥔 두 사람의 손' }, { id: 'cx', text: '운동장 끝의 학교 건물' }, { id: 'cy', text: '부엌 벽의 시계' }] } } },
                hints: ['주제 문장에서 "누가 무엇을 하는지"를 찾아요. 그 장면을 가장 잘 보여 주는 부분이 무엇인지 골라요.'],
                target: { match: { s1: 'c1', s2: 'c2', s3: 'c3' } }, difficulty: 0.2 },
              { prompt: '화면 채우기에 대한 생각 가운데 바른 생각만 골라 보세요.',
                toolOptions: { mode: 'pick', topic: '바른 생각', cards: [{ id: 'r1', text: '주인공은 화면에서 가장 크게 그려요' }, { id: 'r2', text: '빈 곳이 있으면 주인공이 돋보여요' }, { id: 'r3', text: '둘레의 것은 작게 그려도 돼요' }, { id: 'r4', text: '빈 곳 없이 꽉 채워야 잘 그린 그림이에요' }, { id: 'r5', text: '모든 것을 똑같은 크기로 그려야 해요' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'r1', text: '주인공은 화면에서 가장 크게 그려요' }, { id: 'r2', text: '빈 곳이 있으면 주인공이 돋보여요' }, { id: 'r3', text: '둘레의 것은 작게 그려도 돼요' }, { id: 'r4', text: '빈 곳 없이 꽉 채워야 잘 그린 그림이에요' }, { id: 'r5', text: '모든 것을 똑같은 크기로 그려야 해요' }, { id: 'r6', text: '빈 곳에는 아무 무늬나 그려 넣어야 해요' }] } } },
                hints: ['도입에서 본 두 그림을 떠올려요. 주제가 먼저 보인 그림은 어떻게 그려졌는지 견주어 골라요.'],
                target: { pick: ['r1', 'r2', 'r3'] }, difficulty: 0.2,
                predict: { q: '빈 곳이 있는 그림은 덜 그린 그림일까요?', options: ['덜 그렸어요', '아니에요'], answer: 1 },
                conclude: '빈 곳은 덜 그린 곳이 아니라 주인공을 돋보이게 하는 쉬는 자리예요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 주인공 하나만 크게 붙이기', minutes: 9, tool: 'collage',
            teacher: '"크게 조각은 주인공만, 둘레는 작게!" 주인공 조각 하나만 \'크게\'로 고르고, 둘레는 \'작게\'로 몇 개만 붙인다. 조각 수 한도는 빈 곳을 남기라는 뜻이다. 둘레를 크게 붙여 주인공과 크기가 같아진 학생에게는 "멀리서 보면 무엇이 먼저 보이나요?"라고 묻는다.',
            task: '주인공 조각 하나만 크게 붙이고, 둘레의 것은 작게 몇 개만 붙여 빈 곳을 남겨요.',
            levels: {
              easy: { shapes: ['semi', 'circle', 'heart', 'rect'], colors: ['빨강', '초록', '분홍', '노랑'], sizes: ['s', 'l'] },
              base: { shapes: ['semi', 'circle', 'heart', 'rect', 'leaf', 'star'] },
              challenge: {},
            },
            items: [
              { prompt: '"수박을 크게 베어 무는 나"를 꾸며요. 큰 빨강 반원 수박 하나와 작은 조각 세 개를 붙여, 모두 네 개만 써요.', target: { has: [{ shape: 'semi', color: '빨강', size: 'l', n: 1 }, { size: 's', min: 3 }], pieces: { max: 4 } }, difficulty: 0.2,
                hints: ['주인공 조각 하나만 가장 큰 크기로 고르고, 나머지는 모두 작은 크기로 골라요. 조각 수를 세어 빈 곳을 남겨요.'],
                levels: { challenge: { prompt: '"수박을 크게 베어 무는 나"를 꾸며요. 큰 빨강 반원 수박 하나, 작은 검정 동그라미 씨 세 개, 작은 나뭇잎 두 개를 붙여 모두 여섯 개만 쓰고, 씨는 수박에 겹쳐요.', target: { has: [{ shape: 'semi', color: '빨강', size: 'l', n: 1 }, { shape: 'circle', color: '검정', size: 's', n: 3 }, { shape: 'leaf', size: 's', n: 2 }], overlap: 3, pieces: { max: 6 } } } } },
              { prompt: '"꽃에 앉아 꿀을 빠는 나비"를 꾸며요. 큰 분홍 하트 날개 두 개와 작은 조각 세 개를 붙여, 모두 다섯 개만 써요.', target: { has: [{ shape: 'heart', color: '분홍', size: 'l', n: 2 }, { size: 's', min: 3 }], pieces: { max: 5 } }, difficulty: 0.25,
                hints: ['나비 날개가 주인공이에요. 큰 크기는 날개에만 쓰고, 꽃과 둘레는 작은 크기로 골라요.'],
                predict: { q: '꽃도 날개만큼 크게 붙이면 어떻게 될까요?', options: ['나비가 더 잘 보여요', '무엇이 주인공인지 헷갈려요'], answer: 1 },
                conclude: '주인공만 크게, 둘레는 작게 붙이면 보는 사람의 눈이 주인공에게 먼저 가요.' },
              { prompt: '내 주제의 주인공을 정해 가장 크게 붙이고, 둘레는 작게 붙여 점검해요.', target: { selfCheck: ['주인공 하나를 정했어요', '주인공을 가장 크게 붙였어요', '빈 곳을 남겨 두었어요'], minPieces: 3 }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a3', title: '활동 3. 고른 선과 색으로 주인공 크게 그리기 (짝 활동)', minutes: 9, tool: 'mindmap', pair: true,
            teacher: '준비물: 10차시 고친 밑그림, 8절 도화지, 크레파스나 네임펜, 11~13차시에 고른 선·색·모양 메모. "주인공을 도화지 반 넘게 차지하도록 크게 옮겨 그려요." 11차시에 고른 선으로 테두리를 그리고, 12차시에 고른 색으로 주인공부터 칠한다. 짝은 2분마다 "멀리서 봐도 주인공이 먼저 보여?"를 확인해 준다. 둘레를 다 채우지 않아도 된다고 다시 말한다.',
            task: '밑그림의 주인공을 도화지에 크게 옮겨 그리고, 고른 선과 색으로 주인공부터 칠해요. 짝이 멀리서 확인해 줘요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              talk('고친 밑그림의 주인공을 도화지 반 넘게 차지하도록 크게 옮겨 그린 뒤 "다 했어요"를 누르세요.', '주인공 크게', ['주인공', '차지한 크기'], ['반 넘게', '가운데 가까이']),
              talk('11차시에 고른 선으로 주인공 테두리를 긋고, 12차시에 고른 색으로 주인공부터 칠한 뒤 "다 했어요"를 누르세요.', '고른 선과 색', ['고른 선', '고른 색'], ['굵은 선', '따뜻한 색', '차가운 색']),
              talk('짝이 교실 뒤에서 그림을 보고 "주인공이 먼저 보여?"를 말해 준 뒤 "다 했어요"를 누르세요.', '멀리서 확인', ['먼저 보인 것', '고칠 것'], ['주인공', '둘레']),
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"멀리서 봐도 주인공이 먼저 보인 그림 두세 점을 같이 볼까요?" 그 그림들에서 주인공이 얼마나 크고, 빈 곳이 어디에 있는지 말하게 한다. 출구 1번에서 큰 조각을 여러 개 붙인 학생에게는 "가장 크게 보일 것은 하나예요"라고 짚는다. 그림은 다 마르게 두고 15차시에 이어 그린다.',
        exitTicket: [
          { type: 'tool', tool: 'collage', options: { shapes: ['circle', 'star', 'leaf'], colors: ['노랑', '초록', '하양'], sizes: ['s', 'l'] }, prompt: '"밤하늘에 혼자 뜬 보름달"을 꾸며요. 큰 노랑 동그라미 하나와 작은 별 세 개를 붙여, 모두 네 개만 쓰세요.', target: { has: [{ shape: 'circle', color: '노랑', size: 'l', n: 1 }, { shape: 'star', size: 's', n: 3 }], pieces: { max: 4 } }, difficulty: 0.2 },
          { type: 'choice', prompt: '"공을 힘껏 차는 내 발"이 주제일 때 가장 크게 그릴 것은 무엇인가요?', options: ['운동장 골대', '공과 차는 발', '응원하는 친구들'], answer: 1, difficulty: 0.1, explain: '주제 문장의 "무엇을 하는" 부분(공을 차는 발)이 가장 크게 보여야 해요.' },
          { type: 'mood', prompt: '주인공을 크게 그려 보니 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '가장 크게 그릴 것',
      items: [
        { type: 'table', prompt: '주제에서 가장 크게 그릴 것과 작게 그릴 것을 쓰세요.', columns: ['주제', '가장 크게', '작게'], cells: [['도토리를 볼에 문 다람쥐', '', ''], ['내 주제', '', '']] },
        { type: 'choice', prompt: '바른 생각에 ○ 하세요.', options: ['빈 곳 없이 꽉 채워야 해요', '주인공은 가장 크게 그려요', '모두 같은 크기로 그려요', '빈 곳에는 아무 무늬나 넣어요'], answer: '주인공은 가장 크게 그려요' },
        { type: 'short', prompt: '그림에 빈 곳을 남기면 좋은 까닭을 쓰세요.' },
        { type: 'draw', prompt: '"꽃에 앉은 나비"를 나비가 가장 크게 보이게 그리세요.' },
      ],
      easy: {
        note: '주제 문장에서 "누가 무엇을 하는지"를 찾아 가장 크게 그려요.',
        items: [
          { type: 'short', prompt: '내 주제에서 가장 크게 그릴 것을 쓰세요.' },
          { type: 'choice', prompt: '바른 생각에 ○ 하세요.', options: ['주인공을 크게', '빈 곳 없이 꽉'], answer: '주인공을 크게' },
          { type: 'draw', prompt: '주인공을 크게 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '이은 카드와 고른 카드에 바로 표시가 생기고, 색종이는 작게·크게 두 크기만 나와 주인공과 둘레의 크기를 고르기 쉬워요.',
      base: '스스로 잇고 고른 뒤 확인하고, 모든 크기 가운데 골라요.',
      challenge: '헷갈리는 카드가 하나씩 더 섞여 있고, 수박은 씨앗까지 겹쳐 붙이며 큰 조각을 하나로 지켜야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 화면은 빈 곳 없이 채워야 잘 그린 것이라고 여긴다(이 주제의 대표 오개념) → 도입의 두 그림과 교실 뒤에서 멀리 보기로 주인공이 먼저 보이는지 견주게 한다. ② 주인공을 크게 그리라고 하면 종이 밖으로 넘친다 → 밑그림에서 자리를 먼저 잡게 한다. ③ 둘레를 그리다 시간을 다 쓴다 → 주인공부터 칠하게 한다. 준비물: 10차시 밑그림, 8절 도화지, 크레파스나 네임펜.',
  }));

  // ───────────── 15차시 (연습) ─────────────
  lessons.push(lesson(15, S3, {
    title: '되풀이와 겹치기로 움직임과 깊이 나타내기',
    objective: '같은 모양을 되풀이해 움직임을 나타내고, 조각을 겹쳐 가까운 것과 먼 것을 나타내어 주제를 살릴 수 있다.',
    illustration: {
      prompt: art('a row of paper ducklings marching in a repeating line beside overlapping paper mountains, the front mountain dark and big, the back mountains light and small'),
      scene: scene([
        { motif: 'sun', x: 404, y: 58, s: 0.8 }, { motif: 'mountain', x: 150, y: 196, s: 1.2 }, { motif: 'mountain', x: 300, y: 204, s: 0.8 },
        { motif: 'wave', x: 240, y: 232 }, { motif: 'bird', x: 120, y: 90 }, { motif: 'bird', x: 170, y: 104 },
        { motif: 'text', x: 260, y: 130, text: '되풀이하고, 겹치고', size: 22 },
      ]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '오리 한 마리 그림과, 같은 오리가 다섯 마리 줄지어 있는 그림을 보인다. "어느 쪽이 걸어가는 것 같나요?" 이어 산 세 개가 나란히 떨어진 그림과 서로 겹친 그림을 보이며 "어느 산이 더 멀리 있나요? 어떻게 알았나요?"라고 묻는다. 같은 모양을 되풀이하면 움직임이, 겹치면 앞뒤가 생긴다는 것을 학생 말로 끌어낸다. 시연 단추로 오리 묶음이 되풀이되는 모습을 보여 준다.',
        student: '줄지은 오리와 겹친 산 그림을 보고, 움직임과 멀고 가까움이 어떻게 보이는지 말해 봅시다.',
        demo: { tool: 'collage', options: { shapes: ['circle', 'semi'], colors: ['노랑', '주황'] }, sequence: [{ repeat: { times: 3, unit: 2 } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 되풀이로 움직임 나타내기', minutes: 9, tool: 'collage',
            teacher: '"한 묶음을 먼저 정하고, 똑같은 차례로 이어 붙여요." 오리는 몸(노랑 반원)과 부리(주황 세모)가 한 묶음이다. 묶음을 손가락으로 감싸 세게 한다. 빗방울 문항은 위에서 아래로 되풀이하여 떨어지는 움직임을 만든다. 차례가 중간에 바뀐 학생에게는 "세 번째 묶음도 첫 묶음과 똑같나요?"라고 묻는다.',
            task: '한 묶음을 정하고, 그 묶음을 똑같은 차례로 되풀이해 움직임이 느껴지게 붙여요.',
            levels: {
              easy: { shapes: ['semi', 'triangle', 'circle', 'leaf'], colors: ['노랑', '주황', '파랑', '하양'], sizes: ['m'] },
              base: { shapes: ['semi', 'triangle', 'circle', 'leaf', 'square', 'star'] },
              challenge: {},
            },
            items: [
              { prompt: '줄지어 걷는 아기 오리를 꾸며요. 노랑 반원과 주황 세모를 한 묶음으로, 왼쪽에서 오른쪽으로 세 번 이상 되풀이해요.', target: { repeat: { times: 3, unit: 2 }, has: [{ shape: 'semi', color: '노랑', min: 3 }, { shape: 'triangle', color: '주황', min: 3 }] }, difficulty: 0.2,
                hints: ['맨 앞 두 조각을 한 묶음으로 손가락으로 감싸고, 그 차례 그대로 옆에 이어 붙여요.'],
                levels: { challenge: { prompt: '줄지어 걷는 아기 오리를 꾸며요. 노랑 반원·주황 세모·하양 동그라미를 한 묶음으로, 왼쪽에서 오른쪽으로 네 번 이상 되풀이해요.', target: { repeat: { times: 4, unit: 3 }, has: [{ shape: 'semi', color: '노랑', min: 4 }, { shape: 'triangle', color: '주황', min: 4 }, { shape: 'circle', color: '하양', min: 4 }] } } } },
              { prompt: '쏟아지는 빗방울을 꾸며요. 파랑 나뭇잎과 하양 동그라미를 한 묶음으로, 위에서 아래로 세 번 이상 되풀이해요.', target: { repeat: { times: 3, unit: 2, axis: 'y' }, has: [{ shape: 'leaf', color: '파랑', min: 3 }, { shape: 'circle', color: '하양', min: 3 }] }, difficulty: 0.25,
                hints: ['떨어지는 움직임이니 위에서 아래로 쌓아요. 첫 묶음의 차례를 정하고 그대로 아래에 이어요.'],
                levels: { challenge: { prompt: '쏟아지는 빗방울을 꾸며요. 파랑 나뭇잎·하양 동그라미·파랑 동그라미를 한 묶음으로, 위에서 아래로 세 번 이상 되풀이해요.', target: { repeat: { times: 3, unit: 3, axis: 'y' }, has: [{ shape: 'leaf', color: '파랑', min: 3 }, { shape: 'circle', color: '하양', min: 3 }, { shape: 'circle', color: '파랑', min: 3 }] } } },
                predict: { q: '빗방울을 하나만 붙일 때와 되풀이할 때, 어느 쪽이 쏟아지는 느낌일까요?', options: ['하나만', '되풀이'], answer: 1 },
                conclude: '같은 모양이 이어지면 눈이 그 길을 따라가며 움직임을 느껴요.' },
              { prompt: '내 주제에서 움직이는 것 하나를 골라, 한 묶음을 정해 되풀이하고 점검해요.', target: { repeat: { times: 3 }, selfCheck: ['움직이는 것을 하나 골랐어요', '한 묶음을 정해 똑같이 되풀이했어요', '어느 쪽으로 움직이는지 짝에게 말했어요'], minPieces: 6 }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 겹치기로 멀고 가까움 나타내기', minutes: 9, tool: 'collage',
            teacher: '"가까운 것은 크게, 나중에 붙여 위로! 먼 것은 작게, 먼저 붙여 아래로!" 위로·아래로 단추로 겹침 순서를 바꿀 수 있다는 것을 보여 준다. 산 문항에서는 큰 산이 작은 산을 가리게 놓는다. 겹치지 않고 떨어뜨려 놓은 학생에게는 "그러면 어느 산이 앞인지 알 수 있나요?"라고 묻는다.',
            task: '가까운 것은 크게, 먼 것은 작게 붙이고, 조각을 겹쳐 어느 것이 앞에 있는지 보이게 해요.',
            levels: {
              easy: { shapes: ['triangle', 'circle', 'semi', 'square'], colors: ['초록', '파랑', '갈색', '하양'], sizes: ['s', 'l'] },
              base: { shapes: ['triangle', 'circle', 'semi', 'square', 'leaf', 'rect'] },
              challenge: {},
            },
            items: [
              { prompt: '겹겹이 산을 꾸며요. 큰 초록 세모 산 하나와 작은 세모 산 두 개 이상을 붙이고, 산끼리 두 군데 이상 겹쳐요.', target: { has: [{ shape: 'triangle', color: '초록', size: 'l', min: 1 }, { shape: 'triangle', size: 's', min: 2 }], overlap: 2 }, difficulty: 0.2,
                hints: ['가까운 산과 먼 산을 크기로 먼저 나누고, 서로 가리도록 맞대어 겹쳐요.'],
                levels: { challenge: { prompt: '겹겹이 산을 꾸며요. 큰 초록 세모·보통 파랑 세모·작은 하양 세모를 하나씩 이상 붙이고, 산끼리 세 군데 이상 겹쳐요.', target: { has: [{ shape: 'triangle', color: '초록', size: 'l', min: 1 }, { shape: 'triangle', color: '파랑', size: 'm', min: 1 }, { shape: 'triangle', color: '하양', size: 's', min: 1 }], overlap: 3 } } } },
              { prompt: '숲속 나무를 꾸며요. 큰 초록 동그라미 앞나무 두 개 이상과 작은 동그라미 뒷나무 세 개 이상을 붙이고, 세 군데 이상 겹쳐요.', target: { has: [{ shape: 'circle', color: '초록', size: 'l', min: 2 }, { shape: 'circle', size: 's', min: 3 }], overlap: 3 }, difficulty: 0.25,
                hints: ['앞에 있는 나무와 뒤에 있는 나무를 크기로 나누고, 앞나무가 뒷나무를 조금씩 가리게 겹쳐요.'],
                predict: { q: '작은 나무가 큰 나무에 가려지면 어디에 있는 것처럼 보일까요?', options: ['앞에', '뒤에, 멀리'], answer: 1 },
                conclude: '가려진 것은 뒤에, 가리는 것은 앞에 있어 보여요. 겹치면 그림에 깊이가 생겨요.' },
              { prompt: '내 주제에서 앞에 있는 것과 뒤에 있는 것을 정해 겹쳐 붙이고 점검해요.', target: { overlap: 2, selfCheck: ['앞에 있는 것을 크게 붙였어요', '뒤에 있는 것을 작게 붙였어요', '겹쳐서 어느 것이 앞인지 보이게 했어요'], minPieces: 4 }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a3', title: '활동 3. 색종이를 겹쳐 붙여 앞뒤 만들기 (짝 활동)', minutes: 8, tool: 'mindmap', pair: true,
            teacher: '준비물: 모둠마다 색종이(초록 계열 세 가지), 풀, 8절 도화지 반 장. 가위는 쓰지 않고 손으로 찢는다. "먼 산을 먼저, 가까운 산을 나중에 붙여요. 나중에 붙인 것이 앞이 돼요." 산 세 개를 손으로 찢어 겹쳐 붙이고, 짝에게 어느 산이 가장 가까운지 맞혀 보게 한다. 풀은 뚜껑을 바로 닫는다.',
            task: '색종이를 손으로 찢어 산 세 개를 만들고, 먼 산부터 겹쳐 붙여요. 짝이 가장 가까운 산을 맞혀요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              talk('색종이를 손으로 찢어 크기가 다른 산 세 개를 만든 뒤 "다 했어요"를 누르세요.', '산 세 개 찢기', ['큰 산', '작은 산'], ['손으로 찢기', '크기 다르게']),
              talk('가장 먼 산부터 붙이고 가까운 산을 나중에 겹쳐 붙인 뒤 "다 했어요"를 누르세요.', '먼 산부터 붙이기', ['먼저 붙인 산', '나중에 붙인 산'], ['뒤', '앞']),
              talk('짝에게 가장 가까운 산을 맞혀 보게 하고, 어떻게 알았는지 들은 뒤 "다 했어요"를 누르세요.', '가까운 산 맞히기', ['짝이 고른 산', '알게 된 까닭'], ['크기', '가려짐']),
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"되풀이와 겹치기는 내 주제의 무엇을 살려 줄까요?" 내 주제에서 움직이는 것과 앞뒤가 있는 것을 하나씩 활동지에 적게 한다. 출구 1번에서 묶음 차례가 바뀐 학생에게는 묶음을 손가락으로 감싸 견주게 한다. 14차시 그림에 오늘 방법 하나를 더해 16차시에 이어 그린다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'collage', options: { shapes: ['circle', 'square', 'triangle'], colors: ['빨강', '하양', '파랑'], sizes: ['m'] }, prompt: '달리는 기차 바퀴를 꾸며요. 빨강 동그라미와 하양 네모를 한 묶음으로, 왼쪽에서 오른쪽으로 세 번 이상 되풀이하세요.', target: { repeat: { times: 3, unit: 2 }, has: [{ shape: 'circle', color: '빨강', min: 3 }, { shape: 'square', color: '하양', min: 3 }] }, difficulty: 0.2 },
          { type: 'choice', prompt: '두 나무 가운데 더 가까이 있어 보이는 나무는 무엇인가요?', options: ['작고 가려진 나무', '크고 앞을 가리는 나무', '둘 다 같아요'], answer: 1, difficulty: 0.15, explain: '크고 다른 것을 가리는 나무가 앞, 작고 가려진 나무가 뒤에 있어 보여요.' },
          { type: 'short', prompt: '내 주제에 되풀이나 겹치기를 쓴다면 어디에 쓸지 쓰세요.' },
        ],
      },
    ],
    worksheet: {
      title: '되풀이와 겹치기',
      items: [
        { type: 'figure', prompt: '되풀이되는 묶음을 ○로 묶고, 다음에 올 묶음을 그리세요.', tool: 'collage', figures: [{ state: { pieces: [{ shape: 'semi', color: '노랑', size: 'm', x: 80, y: 200, r: 0 }, { shape: 'triangle', color: '주황', size: 'm', x: 140, y: 200, r: 90 }, { shape: 'semi', color: '노랑', size: 'm', x: 200, y: 200, r: 0 }, { shape: 'triangle', color: '주황', size: 'm', x: 260, y: 200, r: 90 }] }, caption: '반원 · 세모 · 반원 · 세모 · …' }], answer: '반원, 세모' },
        { type: 'choice', prompt: '먼 산을 나타내는 방법에 ○ 하세요.', options: ['크게 앞에 붙여요', '작게 그리고 다른 산에 가려지게 해요', '가장 진한 색으로 크게 칠해요', '맨 나중에 붙여요'], answer: '작게 그리고 다른 산에 가려지게 해요' },
        { type: 'short', prompt: '내 주제에서 움직이는 것과, 앞뒤가 있는 것을 하나씩 쓰세요.' },
        { type: 'draw', prompt: '겹친 산 세 개를 그리고, 가장 가까운 산에 ○ 하세요.' },
      ],
      easy: {
        note: '같은 묶음을 이어 붙이면 움직임, 겹치면 앞뒤가 생겨요.',
        items: [
          { type: 'choice', prompt: '앞에 있어 보이는 것에 ○ 하세요.', options: ['큰 나무', '가려진 작은 나무'], answer: '큰 나무' },
          { type: 'short', prompt: '내 주제에서 움직이는 것을 쓰세요.' },
          { type: 'draw', prompt: '겹친 산을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '색종이는 문제에 쓰는 모양 네 가지·색 네 가지만 나오고, 되풀이는 보통 크기 하나로, 겹치기는 작게·크게 두 크기로만 해요.',
      base: '모양 여섯 가지와 모든 색·크기 가운데 골라 붙여요.',
      challenge: '되풀이 묶음이 세 조각으로 늘고, 산은 세 가지 크기와 색으로 세 군데 넘게 겹쳐야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 되풀이하다 묶음 차례가 바뀐다 → 묶음을 손가락으로 감싸 견주게 한다. ② 겹치면 가려진 곳이 아깝다고 떨어뜨려 놓는다 → 떨어진 산과 겹친 산을 견주어 깊이를 느끼게 한다. ③ 나중에 붙인 것이 앞이 된다는 것을 모른다 → 색종이 실제 붙이기로 겪게 한다. 준비물: 초록 계열 색종이 세 가지, 풀, 8절 도화지 반 장.',
  }));

  // ───────────── 16차시 (확장) ─────────────
  lessons.push(lesson(16, S3, {
    title: '밝고 어두운 색, 반대되는 색을 맞대어 주인공 돋보이게 하기',
    objective: '밝은 색과 어두운 색, 서로 반대되는 색을 맞대면 주인공이 돋보인다는 것을 알고, 주인공과 바탕의 색을 골라 나타낼 수 있다.',
    illustration: {
      prompt: art('a bright yellow paper moon glowing on a deep purple night sky next to a red strawberry resting on green leaves'),
      scene: scene([
        { motif: 'moon', x: 140, y: 80, s: 1.2 }, { motif: 'star', x: 260, y: 60, s: 0.6 }, { motif: 'star', x: 360, y: 96, s: 0.5 },
        { motif: 'hills', y: 214 }, { motif: 'leaf', x: 360, y: 206, r: 20, s: 1.2 }, { motif: 'flower', x: 300, y: 222, color: 'rose' },
        { motif: 'text', x: 260, y: 150, text: '맞대면 눈에 확!', size: 22 },
      ]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '노랑 색종이 별 하나를 노랑 도화지 위에 올렸다가, 보라 도화지 위로 옮긴다. "어느 쪽에서 별이 더 반짝여 보이나요?" 하양 도화지와 검정 도화지 위에서도 해 본다. "주인공 색만 고르면 끝일까요? 바탕 색도 함께 골라야 할까요?" 비슷한 색끼리는 묻히고, 밝은 색과 어두운 색, 서로 반대되는 색을 맞대면 돋보인다는 것을 연다. 시연 단추로 노랑 별이 보라 조각에 맞닿는 모습을 보여 준다.',
        student: '노랑 별이 노랑 바탕과 보라 바탕 가운데 어디에서 더 잘 보이는지 말해 봅시다.',
        demo: { tool: 'collage', options: { shapes: ['star', 'square'], colors: ['노랑', '보라'] }, sequence: [{ contrast: 'light-dark', has: [{ shape: 'star', color: '노랑', min: 1 }] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 눈에 띄는 색 짝 찾기', minutes: 8, tool: 'mindmap',
            teacher: '"두 색을 맞대면 경계가 또렷한가요, 흐릿한가요?" 비슷한 색(노랑과 하양, 파랑과 남색)은 경계가 흐려 주인공이 묻힌다. 밝은 색과 어두운 색, 색상환에서 마주 보는 색(빨강-초록, 주황-파랑, 노랑-보라)은 경계가 또렷하다는 기준을 세운다. 교실 색상환을 가리키며 마주 보는 색을 손가락으로 이어 보게 한다.',
            task: '두 색 짝을 읽고 맞댔을 때 눈에 확 띄는 짝인지 잘 안 띄는 짝인지 나누고, 주인공에 어울리는 바탕을 이어요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '색 짝 카드를 맞댔을 때 눈에 확 띄는 짝과 잘 안 띄는 짝으로 나누어 보세요.',
                toolOptions: { topic: '색 짝', slots: [{ id: 'pop', label: '눈에 확 띄어요' }, { id: 'hide', label: '잘 안 띄어요' }], cards: [{ id: 'p1', text: '노랑과 보라' }, { id: 'p2', text: '빨강과 초록' }, { id: 'p3', text: '하양과 검정' }, { id: 'p4', text: '노랑과 하양' }, { id: 'p5', text: '파랑과 남색' }, { id: 'p6', text: '분홍과 빨강' }] },
                levels: { challenge: { prompt: '색 짝 카드 여덟 장을 맞댔을 때 눈에 확 띄는 짝과 잘 안 띄는 짝으로 나누어 보세요.', toolOptions: { cards: [{ id: 'p1', text: '노랑과 보라' }, { id: 'p2', text: '빨강과 초록' }, { id: 'p3', text: '하양과 검정' }, { id: 'p4', text: '노랑과 하양' }, { id: 'p5', text: '파랑과 남색' }, { id: 'p6', text: '분홍과 빨강' }, { id: 'p7', text: '주황과 파랑' }, { id: 'p8', text: '연두와 초록' }] }, target: { sort: { pop: ['p1', 'p2', 'p3', 'p7'], hide: ['p4', 'p5', 'p6', 'p8'] } } } },
                hints: ['두 색이 서로 비슷한지, 밝고 어둡게 크게 다른지, 색상환에서 마주 보는지 하나씩 떠올려요.'],
                target: { sort: { pop: ['p1', 'p2', 'p3'], hide: ['p4', 'p5', 'p6'] } }, difficulty: 0.2 },
              { prompt: '주인공마다 가장 돋보이게 하는 바탕을 이어 보세요.',
                toolOptions: { mode: 'match', topic: '주인공과 바탕', slots: [{ id: 's1', label: '노란 보름달' }, { id: 's2', label: '빨간 딸기' }], cards: [{ id: 'c1', text: '어두운 보라 밤하늘' }, { id: 'c2', text: '초록 잎 바탕' }, { id: 'cx', text: '노랑 바탕' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'c1', text: '어두운 보라 밤하늘' }, { id: 'c2', text: '초록 잎 바탕' }, { id: 'cx', text: '노랑 바탕' }, { id: 'cy', text: '분홍 바탕' }] } } },
                hints: ['주인공 색과 비슷한 바탕은 주인공을 숨겨요. 주인공 색과 밝기가 크게 다르거나 마주 보는 색을 찾아요.', '이은 바탕 색과 주인공 색이 서로 비슷하지 않은지 다시 견주어 보세요.', '노란 달은 어두운 보라 밤하늘에서, 빨간 딸기는 마주 보는 초록 잎에서 돋보여요.'],
                target: { match: { s1: 'c1', s2: 'c2' } }, difficulty: 0.2 },
              { prompt: '새 주인공마다 가장 돋보이게 하는 바탕을 이어 보세요.',
                toolOptions: { mode: 'match', topic: '주인공과 바탕', slots: [{ id: 's1', label: '주황 금붕어' }, { id: 's2', label: '하얀 토끼' }], cards: [{ id: 'c1', text: '파랑 물' }, { id: 'c2', text: '짙은 갈색 흙' }, { id: 'cx', text: '하얀 눈밭' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'c1', text: '파랑 물' }, { id: 'c2', text: '짙은 갈색 흙' }, { id: 'cx', text: '하얀 눈밭' }, { id: 'cy', text: '주황 노을' }] } } },
                hints: ['주인공 색과 비슷한 바탕은 주인공을 숨겨요. 주인공 색과 밝기가 크게 다르거나 마주 보는 색을 찾아요.'],
                target: { match: { s1: 'c1', s2: 'c2' } }, difficulty: 0.25,
                predict: { q: '하얀 토끼를 하얀 눈밭에 그리면 어떻게 보일까요?', options: ['또렷해요', '눈밭에 숨어요'], answer: 1 },
                conclude: '주인공과 바탕의 색이 비슷하면 주인공이 숨어요. 색을 맞대어 견주면 돋보이는 짝을 찾을 수 있어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 색을 맞대어 주인공 돋보이게 꾸미기', minutes: 10, tool: 'collage',
            teacher: '"주인공 조각과 바탕 조각이 꼭 맞닿아야 해요. 떨어져 있으면 견줄 수 없어요." 밝은 색은 노랑·분홍·하양, 어두운 색은 보라·갈색·검정이라고 칠판에 써 둔다. 빨강·주황·초록·파랑은 밝지도 어둡지도 않은 가운데 색이라 밝기 맞대기에는 쓰지 않는다는 것을 짚는다. 보색 문항에서는 색상환을 보며 짝을 찾게 한다.',
            task: '주인공 조각과 바탕 조각을 서로 맞닿게 붙여, 밝고 어두운 색이나 반대되는 색으로 주인공이 돋보이게 해요.',
            levels: {
              easy: { shapes: ['star', 'square', 'circle', 'leaf'], colors: ['노랑', '보라', '빨강', '초록', '주황', '파랑'], sizes: ['m', 'l'] },
              base: { shapes: ['star', 'square', 'circle', 'leaf', 'semi', 'heart'] },
              challenge: {},
            },
            items: [
              { prompt: '밤하늘의 별을 꾸며요. 노랑 별 세 개 이상을 큰 보라 네모 밤하늘에 맞닿게 붙여요.', target: { contrast: 'light-dark', has: [{ shape: 'star', color: '노랑', min: 3 }, { shape: 'square', color: '보라', size: 'l', min: 1 }] }, difficulty: 0.2,
                hints: ['별과 밤하늘 조각이 꼭 맞닿게 놓아요. 떨어져 있으면 밝기를 견줄 수 없어요.'],
                levels: { challenge: { prompt: '밤하늘의 별과 달을 꾸며요. 노랑 별 세 개 이상과 하양 동그라미 달 하나를 큰 보라 네모나 검정 네모에 맞닿게 붙여요.', target: { contrast: 'light-dark', has: [{ shape: 'star', color: '노랑', min: 3 }, { shape: 'circle', color: '하양', n: 1 }] } } } },
              { prompt: '빨간 딸기를 꾸며요. 빨강 동그라미 딸기 하나에 초록 나뭇잎 두 장 이상을 맞닿게 붙여요.', target: { contrast: 'complement', has: [{ shape: 'circle', color: '빨강', min: 1 }, { shape: 'leaf', color: '초록', min: 2 }] }, difficulty: 0.2,
                hints: ['색상환에서 주인공 색과 마주 보는 색을 찾아, 그 색 조각을 주인공에 맞닿게 놓아요.'],
                levels: { challenge: { prompt: '딸기 세 개를 꾸며요. 빨강 동그라미 딸기 세 개 이상에 초록 나뭇잎을 하나씩 이상 맞닿게 붙이고, 비슷한 색인 분홍은 쓰지 않아요.', target: { contrast: 'complement', has: [{ shape: 'circle', color: '빨강', min: 3 }, { shape: 'leaf', color: '초록', min: 3 }, { color: '분홍', max: 0 }] } } } },
              { prompt: '물속 금붕어를 꾸며요. 주황 금붕어 조각 두 개 이상을 파랑 물 조각에 맞닿게 붙여요.', target: { contrast: 'complement', has: [{ color: '주황', min: 2 }, { color: '파랑', min: 1 }] }, difficulty: 0.25,
                hints: ['금붕어 색과 마주 보는 물 색을 고르고, 두 조각이 맞닿았는지 확인해요.'],
                predict: { q: '주황 금붕어를 주황 바탕에 놓으면 어떨까요?', options: ['또렷해요', '숨어요'], answer: 1 },
                conclude: '마주 보는 색을 맞대면 서로를 더 진하게 보이게 해서 주인공이 돋보여요.' },
            ],
          },
          {
            id: 'a3', title: '활동 3. 같은 별을 여러 바탕에 올려 보기 (짝 활동)', minutes: 8, tool: 'mindmap', pair: true,
            teacher: '준비물: 모둠마다 노랑 색종이 별 하나, 바탕 색종이 네 장(노랑·하양·보라·검정). 풀은 쓰지 않고 올려 보기만 한다. "한 사람이 별을 바탕마다 올려 보고, 짝은 교실 뒤로 가서 어느 바탕에서 별이 가장 잘 보이는지 말해 줘요." 그다음 내 14차시 그림의 주인공 색을 말하고, 어떤 바탕이 어울릴지 짝과 정한다.',
            task: '노랑 별을 바탕 네 장에 차례로 올려 보고, 짝이 멀리서 가장 잘 보이는 바탕을 골라요. 내 그림의 바탕 색도 정해요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              talk('노랑 별을 노랑·하양·보라·검정 바탕에 차례로 올려 보고 "다 했어요"를 누르세요.', '바탕 바꾸어 보기', ['잘 보여요', '잘 안 보여요'], ['노랑', '하양', '보라', '검정']),
              talk('짝이 교실 뒤에서 별이 가장 잘 보인 바탕과 가장 안 보인 바탕을 말해 준 뒤 "다 했어요"를 누르세요.', '멀리서 고르기', ['가장 잘 보인 바탕', '가장 안 보인 바탕'], ['밝고 어두움', '비슷함']),
              talk('내 14차시 그림의 주인공 색을 말하고, 돋보이게 할 바탕 색을 짝과 정해 활동지에 쓴 뒤 "다 했어요"를 누르세요.', '내 그림 바탕 정하기', ['주인공 색', '바탕 색'], ['밝게', '어둡게', '마주 보는 색']),
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"노랑 별이 가장 잘 보인 바탕은 어디였나요? 왜 그럴까요?" 모둠마다 고른 바탕을 말하게 한다. 내 그림에 정한 바탕 색을 15·16차시 그림에 칠할 것이라고 말한다. 출구 1번에서 비슷한 색을 고른 학생은 다음 시간 시작에 실제 색종이로 다시 올려 보게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'collage', options: { shapes: ['heart', 'square', 'circle'], colors: ['분홍', '갈색', '빨강'] }, prompt: '분홍 하트 두 개 이상을 큰 갈색 네모에 맞닿게 붙여, 하트가 돋보이게 해 보세요.', target: { contrast: 'light-dark', has: [{ shape: 'heart', color: '분홍', min: 2 }, { shape: 'square', color: '갈색', size: 'l', min: 1 }] }, difficulty: 0.2 },
          { type: 'choice', prompt: '파랑 물고기가 가장 돋보이는 바탕은 무엇인가요?', options: ['남색 바탕', '주황 바탕', '하늘색 바탕'], answer: 1, difficulty: 0.2, explain: '주황은 색상환에서 파랑과 마주 보는 색이라 맞대면 파랑이 돋보여요.' },
          { type: 'mood', prompt: '바탕 색을 바꾸어 보니 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '돋보이는 색 짝',
      items: [
        { type: 'table', prompt: '노랑 별을 올려 본 바탕마다 잘 보였는지 ○ △ × 로 쓰세요.', columns: ['바탕', '잘 보였나요', '까닭'], cells: [['노랑', '', ''], ['하양', '', ''], ['보라', '', ''], ['검정', '', '']] },
        { type: 'choice', prompt: '맞댔을 때 가장 눈에 띄는 색 짝에 ○ 하세요.', options: ['파랑과 남색', '노랑과 하양', '빨강과 초록', '분홍과 빨강'], answer: '빨강과 초록' },
        { type: 'short', prompt: '내 그림의 주인공 색과, 주인공을 돋보이게 할 바탕 색을 쓰세요.' },
        { type: 'draw', prompt: '어두운 바탕 위에 밝은 주인공을 그려 보세요.' },
      ],
      easy: {
        note: '비슷한 색은 숨고, 밝고 어두운 색이나 마주 보는 색은 돋보여요.',
        items: [
          { type: 'choice', prompt: '노랑 별이 잘 보이는 바탕에 ○ 하세요.', options: ['보라', '노랑'], answer: '보라' },
          { type: 'short', prompt: '내 그림의 바탕 색을 쓰세요.' },
          { type: 'draw', prompt: '어두운 바탕에 밝은 별을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 맞는 칸에 놓으면 바로 표시되고, 색종이는 대비 짝이 되는 여섯 색과 모양 네 가지, 두 크기만 나와요.',
      base: '스스로 나누고 이은 뒤 확인하고, 모든 색 가운데 대비 짝을 찾아 맞대요.',
      challenge: '색 짝이 여덟 장이고 헷갈리는 바탕 카드가 더 있어요. 꾸미기는 달까지 넣거나, 딸기마다 잎을 맞대고 비슷한 색을 빼야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 주인공 색만 고르고 바탕은 아무 색이나 칠한다 → 같은 별을 여러 바탕에 올려 견주게 한다. ② 빨강·주황을 밝은 색으로 여긴다 → 이 교구의 밝기 표(밝은 색: 노랑·분홍·하양 / 어두운 색: 보라·갈색·검정)를 칠판에 써 둔다. ③ 조각을 떨어뜨려 놓고 대비라고 한다 → 맞닿아야 견주어진다는 것을 짚는다. 준비물: 모둠마다 노랑 색종이 별, 바탕 색종이 네 장.',
  }));

  // ───────────── 17차시 (확장) ─────────────
  lessons.push(lesson(17, S3, {
    title: '작은 점과 문지른 무늬로 반짝임과 거친 느낌 나타내기',
    objective: '작은 점을 모아 반짝임이나 덩어리를 나타내고, 물건을 문질러 찍은 무늬로 거칠거나 매끄러운 느낌(질감)을 나타낼 수 있다.',
    illustration: {
      prompt: art('a night sky made of tiny paper dots of light next to crayon rubbings of a leaf, tree bark and corrugated cardboard on paper strips'),
      scene: scene([
        { motif: 'moon', x: 410, y: 60, s: 0.7 }, { motif: 'star', x: 120, y: 60, s: 0.5 }, { motif: 'star', x: 200, y: 90, s: 0.4 }, { motif: 'star', x: 290, y: 56, s: 0.5 },
        { motif: 'hills', y: 214 }, { motif: 'leaf', x: 140, y: 206, r: -20, s: 1.2 }, { motif: 'tree', x: 360, y: 218 },
        { motif: 'text', x: 240, y: 146, text: '콕콕 점, 쓱쓱 무늬', size: 22 },
      ]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '화면에 밤하늘 사진을 띄우고 "별을 선으로 그릴까요, 점으로 찍을까요?"라고 묻는다. 이어 나뭇잎 한 장을 종이 밑에 대고 크레파스를 눕혀 문질러 잎맥이 떠오르는 것을 보여 준다. "와! 연필로 그리지 않았는데 무늬가 나왔어요. 만지면 어떤 느낌일 것 같나요?" 점, 선, 색, 모양에 더해 거칠고 매끄러운 느낌(질감)도 그림에 나타낼 수 있다는 것을 연다. 시연 단추로 작은 점 조각이 모여 반짝이는 하늘이 되는 모습을 보여 준다.',
        student: '나뭇잎을 문질러 나온 무늬를 보고, 만지면 어떤 느낌일지 말해 봅시다.',
        demo: { tool: 'collage', options: { shapes: ['circle'], colors: ['노랑', '하양'], sizes: ['s'] }, sequence: [{ has: [{ shape: 'circle', size: 's', min: 6 }] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 문지르면 나오는 무늬와 질감 알아보기', minutes: 8, tool: 'mindmap',
            teacher: '"이 물건을 종이 밑에 대고 문지르면 어떤 무늬가 떠오를까요?" 물건의 겉면을 손끝으로 쓸어 보게 하고, 튀어나온 곳이 진하게 찍힌다는 것을 짚는다. 질감 나누기에서는 손끝으로 만졌을 때 걸리는지, 미끄러지는지로 가른다. 실물(나뭇잎, 골판지 조각, 사포)을 모둠에 하나씩 두고 만져 보며 풀게 한다.',
            task: '물건을 문질렀을 때 떠오를 무늬를 잇고, 손끝으로 만진 느낌으로 거친 것과 매끄러운 것을 나누어요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              { prompt: '종이 밑에 대고 문지르면 떠오를 무늬를 물건마다 이어 보세요.',
                toolOptions: { mode: 'match', topic: '문질러 찍기', slots: [{ id: 's1', label: '나뭇잎 뒷면' }, { id: 's2', label: '나무껍질' }, { id: 's3', label: '골판지 속' }], cards: [{ id: 'c1', text: '가운데 줄기에서 갈라진 잎맥' }, { id: 'c2', text: '거칠게 갈라진 세로 줄' }, { id: 'c3', text: '나란히 늘어선 줄무늬' }, { id: 'cx', text: '동그란 물방울 무늬' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'c1', text: '가운데 줄기에서 갈라진 잎맥' }, { id: 'c2', text: '거칠게 갈라진 세로 줄' }, { id: 'c3', text: '나란히 늘어선 줄무늬' }, { id: 'cx', text: '동그란 물방울 무늬' }, { id: 'cy', text: '별 모양 무늬' }] } } },
                hints: ['물건의 겉면을 손끝으로 쓸어 보고, 튀어나온 곳이 어떤 모양으로 이어져 있는지 떠올려요.', '이은 무늬가 그 물건 겉면에 정말 튀어나와 있는 모양인지 다시 만져 보세요.', '나뭇잎 뒷면은 갈라진 잎맥, 나무껍질은 거칠게 갈라진 세로 줄, 골판지 속은 나란한 줄무늬가 떠올라요.'],
                target: { match: { s1: 'c1', s2: 'c2', s3: 'c3' } }, difficulty: 0.2 },
              { prompt: '물건 카드를 손끝으로 만진 느낌에 따라 거친 것과 매끄러운 것으로 나누어 보세요.',
                toolOptions: { topic: '질감', slots: [{ id: 'rough', label: '거칠어요' }, { id: 'smooth', label: '매끄러워요' }], cards: [{ id: 't1', text: '사포' }, { id: 't2', text: '나무껍질' }, { id: 't3', text: '수세미' }, { id: 't4', text: '유리창' }, { id: 't5', text: '비닐봉지' }, { id: 't6', text: '도자기 컵' }] },
                levels: { challenge: { prompt: '물건 카드 여덟 장을 손끝으로 만진 느낌에 따라 거친 것과 매끄러운 것으로 나누어 보세요.', toolOptions: { cards: [{ id: 't1', text: '사포' }, { id: 't2', text: '나무껍질' }, { id: 't3', text: '수세미' }, { id: 't4', text: '유리창' }, { id: 't5', text: '비닐봉지' }, { id: 't6', text: '도자기 컵' }, { id: 't7', text: '현관 발 닦개' }, { id: 't8', text: '얼음 조각' }] }, target: { sort: { rough: ['t1', 't2', 't3', 't7'], smooth: ['t4', 't5', 't6', 't8'] } } } },
                hints: ['손끝으로 쓸었을 때 걸리는 느낌이 드는지, 쓱 미끄러지는지 하나씩 떠올려요.'],
                target: { sort: { rough: ['t1', 't2', 't3'], smooth: ['t4', 't5', 't6'] } }, difficulty: 0.15 },
              { prompt: '주제마다 어울리는 질감 표현을 이어 보세요.',
                toolOptions: { mode: 'match', topic: '주제와 질감', slots: [{ id: 's1', label: '할아버지 댁 오래된 나무 대문' }, { id: 's2', label: '물웅덩이에 비친 하늘' }], cards: [{ id: 'c1', text: '나무껍질을 문질러 찍은 거친 무늬' }, { id: 'c2', text: '크레파스를 눕혀 고르게 칠한 매끈한 면' }, { id: 'cx', text: '아무것도 칠하지 않은 빈 종이' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'c1', text: '나무껍질을 문질러 찍은 거친 무늬' }, { id: 'c2', text: '크레파스를 눕혀 고르게 칠한 매끈한 면' }, { id: 'cx', text: '아무것도 칠하지 않은 빈 종이' }, { id: 'cy', text: '사포를 문질러 찍은 까끌한 점' }] } } },
                hints: ['주제를 손으로 만진다면 거칠지 매끄러울지 먼저 말하고, 그 느낌을 주는 표현을 찾아요.'],
                target: { match: { s1: 'c1', s2: 'c2' } }, difficulty: 0.25,
                predict: { q: '눈으로만 보는 그림에서도 거친 느낌을 알 수 있을까요?', options: ['알 수 있어요', '알 수 없어요'], answer: 0 },
                conclude: '문질러 찍은 무늬를 보면 손으로 만지지 않아도 거칠거나 매끄러운 느낌이 떠올라요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 작은 점을 모아 나타내기', minutes: 9, tool: 'collage',
            teacher: '"작은 점 하나는 작지만, 모이면 반짝이고 덩어리가 돼요." 작은 동그라미 조각을 점이라고 약속한다. 별빛 문항은 점을 흩어서, 사과 문항은 점을 촘촘히 모아 덩어리를 만든다. 큰 조각 하나로 끝내려는 학생에게는 "점으로 모으니 어떤 느낌이 새로 생기나요?"라고 묻는다.',
            task: '작은 동그라미 조각을 점으로 삼아, 흩어 찍거나 촘촘히 모아 주제를 나타내요.',
            levels: {
              easy: { shapes: ['circle', 'leaf', 'square'], colors: ['노랑', '하양', '빨강', '초록', '검정'], sizes: ['s', 'l'] },
              base: { shapes: ['circle', 'leaf', 'square', 'star', 'semi'] },
              challenge: {},
            },
            items: [
              { prompt: '반짝이는 별빛을 점으로 나타내요. 작은 노랑 동그라미 점 다섯 개 이상과 작은 하양 동그라미 점 세 개 이상을 흩어 붙여요.', target: { has: [{ shape: 'circle', color: '노랑', size: 's', min: 5 }, { shape: 'circle', color: '하양', size: 's', min: 3 }] }, difficulty: 0.2,
                hints: ['반짝임은 작은 점이 여기저기 흩어질 때 생겨요. 점의 색마다 개수를 세며 붙여요.'],
                levels: { challenge: { prompt: '반짝이는 별빛을 점으로 나타내요. 큰 검정 네모 밤하늘 위에 작은 노랑 점 여섯 개 이상과 작은 하양 점 네 개 이상을 겹쳐 붙여요.', target: { has: [{ shape: 'square', color: '검정', size: 'l', min: 1 }, { shape: 'circle', color: '노랑', size: 's', min: 6 }, { shape: 'circle', color: '하양', size: 's', min: 4 }], overlap: 4 } } } },
              { prompt: '점을 모아 사과를 나타내요. 작은 빨강 동그라미 점 여덟 개 이상을 모으고, 초록 나뭇잎 하나를 붙여요.', target: { has: [{ shape: 'circle', color: '빨강', size: 's', min: 8 }, { shape: 'leaf', color: '초록', min: 1 }] }, difficulty: 0.25,
                hints: ['점을 흩지 않고 한곳에 촘촘히 모으면 덩어리처럼 보여요. 점 개수를 세며 모아요.'],
                predict: { q: '같은 점을 흩으면 반짝이고, 모으면 어떻게 보일까요?', options: ['더 반짝여요', '덩어리가 돼요'], answer: 1 },
                conclude: '점을 흩으면 반짝이고, 촘촘히 모으면 덩어리가 돼요. 점도 주제를 나타내는 방법이에요.' },
              { prompt: '내 주제에서 점으로 나타낼 곳 하나를 골라 점을 모으거나 흩어 붙이고 점검해요.', target: { selfCheck: ['점으로 나타낼 곳을 골랐어요', '점을 흩거나 모아 느낌을 냈어요', '어떤 느낌을 내려 했는지 짝에게 말했어요'], minPieces: 6 }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a3', title: '활동 3. 문질러 찍어 질감 모으기 (짝 활동)', minutes: 9, tool: 'mindmap', pair: true,
            teacher: '준비물: 얇은 종이(복사지), 껍질 벗긴 크레파스 토막, 모둠마다 나뭇잎·골판지·사포·뜨개 장갑. "종이를 물건 위에 대고, 짝이 종이를 꼭 잡아 줘요. 크레파스를 눕혀 한 방향으로 쓱쓱!" 네 칸에 서로 다른 무늬를 모으고 칸 아래에 거친지 매끄러운지 쓴다. 교실 벽·바닥 무늬를 찾으러 다닐 때는 뛰지 않고, 친구 물건은 묻고 쓴다.',
            task: '짝이 종이를 잡아 주면 크레파스를 눕혀 물건을 문질러 찍어요. 네 칸에 다른 무늬를 모으고 질감을 써요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              talk('짝이 종이를 잡아 주면 나뭇잎을 크레파스를 눕혀 문질러 찍고 "다 했어요"를 누르세요.', '나뭇잎 문지르기', ['찍은 물건', '나온 무늬'], ['나뭇잎', '잎맥']),
              talk('골판지·사포·장갑이나 교실 벽 무늬를 골라 세 칸을 더 채우고, 칸마다 질감 낱말을 쓴 뒤 "다 했어요"를 누르세요.', '무늬 모으기', ['거칠어요', '매끄러워요'], ['골판지', '사포', '장갑']),
              talk('모은 무늬 가운데 내 주제에 쓸 것 하나를 골라 어디에 쓸지 짝에게 말한 뒤 "다 했어요"를 누르세요.', '내 주제에 쓰기', ['고른 무늬', '쓸 곳'], ['땅', '나무', '옷']),
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 찍은 무늬 가운데 가장 거친 느낌은 무엇이었나요?" 두세 명이 무늬를 들어 보이고, 친구들이 무엇을 문질렀는지 맞혀 본다. 점, 선, 색, 모양, 질감을 조형 요소라고 부른다고 정리하고, 18차시부터는 이 요소들이 내 주제를 잘 살렸는지 살핀다고 예고한다. 크레파스 가루는 휴지로 모아 버린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '질감', slots: [{ id: 'rough', label: '거칠어요' }, { id: 'smooth', label: '매끄러워요' }], cards: [{ id: 'e1', text: '거북 등딱지' }, { id: 'e2', text: '비눗방울' }, { id: 'e3', text: '솔방울' }, { id: 'e4', text: '거울' }] }, prompt: '새 물건 카드를 만진 느낌에 따라 거친 것과 매끄러운 것으로 나누어 보세요.', target: { sort: { rough: ['e1', 'e3'], smooth: ['e2', 'e4'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '작은 점을 여기저기 흩어 찍으면 어떤 느낌이 나나요?', options: ['반짝이고 흩날려요', '단단한 덩어리 같아요', '곧게 흘러가요'], answer: 0, difficulty: 0.2, explain: '흩어진 점은 반짝이거나 흩날리는 느낌을 주고, 촘촘히 모은 점은 덩어리를 만들어요.' },
          { type: 'short', prompt: '문질러 찍은 무늬 하나를 내 주제의 어디에 쓰고 싶은지 쓰세요.' },
        ],
      },
    ],
    worksheet: {
      title: '점과 질감',
      items: [
        { type: 'table', prompt: '문질러 찍은 무늬를 붙이거나 찍고, 질감을 쓰세요.', columns: ['찍은 물건', '무늬 붙이는 칸', '거칠다 / 매끄럽다'], cells: [['나뭇잎', '', ''], ['', '', ''], ['', '', ''], ['', '', '']] },
        { type: 'choice', prompt: '종이 밑에 대고 문지르면 나란한 줄무늬가 떠오르는 것에 ○ 하세요.', options: ['유리창', '골판지 속', '비닐봉지', '거울'], answer: '골판지 속' },
        { type: 'draw', prompt: '연필로 작은 점을 흩어 찍어 반짝이는 밤하늘을 그리세요.' },
        { type: 'short', prompt: '점, 선, 색, 모양, 질감 가운데 내 주제를 가장 잘 살릴 것 하나와 그 까닭을 쓰세요.' },
      ],
      easy: {
        note: '튀어나온 곳이 진하게 찍혀요. 손끝에 걸리면 거칠고, 미끄러지면 매끄러워요.',
        items: [
          { type: 'table', prompt: '문질러 찍은 무늬를 붙이세요.', columns: ['찍은 물건', '무늬'], cells: [['나뭇잎', ''], ['', '']] },
          { type: 'choice', prompt: '거친 것에 ○ 하세요.', options: ['사포', '유리창'], answer: '사포' },
          { type: 'draw', prompt: '점을 찍어 별빛을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '이은 카드와 나눈 카드에 바로 표시가 생기고, 색종이는 점에 쓰는 동그라미와 다섯 색, 두 크기만 나와요.',
      base: '스스로 잇고 나눈 뒤 확인하고, 모양 다섯 가지와 모든 색을 써요.',
      challenge: '질감 카드가 여덟 장이고 헷갈리는 무늬 카드가 하나 더 있어요. 별빛은 큰 검정 밤하늘 위에 점을 더 많이 겹쳐 붙여요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 크레파스를 세워 문질러 무늬가 안 나온다 → 껍질을 벗겨 눕혀 쓰게 한다. ② 종이가 밀려 무늬가 겹친다 → 짝이 종이를 잡아 주게 한다. ③ 질감은 만져야만 안다고 여긴다 → 찍은 무늬만 보고 무엇인지 맞히는 놀이로 눈으로도 질감을 느끼게 한다. 준비물: 복사지, 껍질 벗긴 크레파스 토막, 나뭇잎·골판지·사포·뜨개 장갑, 휴지.',
  }));

  // ───────────── 18차시 (핵심) ─────────────
  lessons.push(lesson(18, S3, {
    title: '주제를 살린 요소와 덜 어울린 요소 찾아 바꾸기',
    objective: '그림에 쓴 선·색·모양 가운데 주제를 잘 살린 것과 덜 어울리는 것을 근거를 들어 가르고, 덜 어울리는 것 하나를 바꿀 수 있다.',
    illustration: {
      prompt: art('a rainy sad day picture with grey-blue sky and long thin rain lines where a smiling yellow sun is being peeled off and replaced by a soft white cloud'),
      scene: scene([
        { motif: 'cloud', x: 140, y: 56, s: 1.2 }, { motif: 'cloud', x: 330, y: 64 }, { motif: 'sun', x: 430, y: 50, s: 0.5 },
        { motif: 'hills', y: 214 }, { motif: 'house', x: 260, y: 218 }, { motif: 'leaf', x: 120, y: 210, r: 60 },
        { motif: 'text', x: 240, y: 150, text: '살린 것 ○, 바꿀 것 △', size: 22 },
      ]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"비 오는 날의 슬픈 마음" 그림을 보인다. 회색·남색 하늘과 가는 빗줄기, 고개 숙인 아이 옆에 활짝 웃는 노란 해가 있다. "이 그림에서 슬픈 마음을 가장 잘 살린 곳은 어디인가요? 어딘가 어색한 곳은요?" 대답에 "왜 그렇게 생각하나요?"를 붙여 근거를 말하게 한다. "색을 많이 쓰면 더 좋을까요?"라고 물어 오개념을 꺼내 둔다. 시연 단추로 그림 요소 카드가 두 칸으로 나뉘는 모습을 보여 준다.',
        student: '"비 오는 날의 슬픈 마음" 그림에서 잘 어울리는 곳과 어색한 곳을 하나씩 찾고 까닭을 말해 봅시다.',
        demo: { tool: 'mindmap', options: { topic: '슬픈 비 오는 날', slots: [{ id: 'good', label: '주제를 살렸어요' }, { id: 'odd', label: '덜 어울려요' }], cards: [{ id: 'd1', text: '아래로 길게 그은 빗줄기' }, { id: 'd2', text: '활짝 웃는 노란 해' }] }, sequence: [{ sort: { good: ['d1'], odd: ['d2'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 살린 요소와 덜 어울린 요소 가르기', minutes: 9, tool: 'mindmap',
            teacher: '"이 요소가 주제의 느낌과 같은 쪽인가요, 반대쪽인가요?" 주제의 느낌 낱말(슬픔, 포근함, 번쩍임)을 먼저 정하고 요소마다 견주게 한다. 11~17차시에 배운 선·색·모양·질감의 느낌을 근거로 쓰게 한다. "예뻐서 남길래요"라는 학생에게는 "예뻐도 주제의 느낌과 반대면 보는 사람이 헷갈려요"라고 말한다.',
            task: '그림 속 요소 카드를 읽고, 주제의 느낌을 살렸는지 덜 어울리는지 배운 선·색·모양의 느낌을 근거로 나누어요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '"비 오는 날의 슬픈 마음" 그림의 요소를 살린 것과 덜 어울리는 것으로 나누어 보세요.',
                toolOptions: { topic: '슬픈 비 오는 날', slots: [{ id: 'good', label: '주제를 살렸어요' }, { id: 'odd', label: '덜 어울려요' }], cards: [{ id: 'r1', text: '회색과 남색으로 칠한 하늘' }, { id: 'r2', text: '아래로 길게 그은 가는 빗줄기' }, { id: 'r3', text: '고개를 숙인 아이' }, { id: 'r4', text: '활짝 웃는 노란 해' }, { id: 'r5', text: '신나게 춤추는 아이' }] },
                levels: { challenge: { prompt: '"비 오는 날의 슬픈 마음" 그림의 요소 일곱 개를 살린 것과 덜 어울리는 것으로 나누어 보세요.', toolOptions: { cards: [{ id: 'r1', text: '회색과 남색으로 칠한 하늘' }, { id: 'r2', text: '아래로 길게 그은 가는 빗줄기' }, { id: 'r3', text: '고개를 숙인 아이' }, { id: 'r4', text: '활짝 웃는 노란 해' }, { id: 'r5', text: '신나게 춤추는 아이' }, { id: 'r6', text: '바닥에 고인 어두운 웅덩이' }, { id: 'r7', text: '알록달록 열두 색 무지개 우산' }] }, target: { sort: { good: ['r1', 'r2', 'r3', 'r6'], odd: ['r4', 'r5', 'r7'] } } } },
                hints: ['주제의 느낌 낱말을 먼저 정해요. 카드마다 그 느낌과 같은 쪽인지 반대쪽인지 배운 선과 색의 느낌으로 따져요.'],
                target: { sort: { good: ['r1', 'r2', 'r3'], odd: ['r4', 'r5'] } }, difficulty: 0.2 },
              { prompt: '"햇볕 아래 포근한 고양이의 낮잠" 그림의 요소를 살린 것과 덜 어울리는 것으로 나누어 보세요.',
                toolOptions: { topic: '포근한 낮잠', slots: [{ id: 'good', label: '주제를 살렸어요' }, { id: 'odd', label: '덜 어울려요' }], cards: [{ id: 'c1', text: '둥글게 만 고양이 몸' }, { id: 'c2', text: '주황과 노랑 햇볕' }, { id: 'c3', text: '부드럽게 그은 털 선' }, { id: 'c4', text: '굵고 뾰족뾰족한 테두리 선' }, { id: 'c5', text: '얼음처럼 차가운 파랑 바탕' }] },
                levels: { challenge: { prompt: '"햇볕 아래 포근한 고양이의 낮잠" 그림의 요소 일곱 개를 살린 것과 덜 어울리는 것으로 나누어 보세요.', toolOptions: { cards: [{ id: 'c1', text: '둥글게 만 고양이 몸' }, { id: 'c2', text: '주황과 노랑 햇볕' }, { id: 'c3', text: '부드럽게 그은 털 선' }, { id: 'c4', text: '굵고 뾰족뾰족한 테두리 선' }, { id: 'c5', text: '얼음처럼 차가운 파랑 바탕' }, { id: 'c6', text: '폭신하게 겹친 방석' }, { id: 'c7', text: '번쩍이는 번개 무늬 이불' }] }, target: { sort: { good: ['c1', 'c2', 'c3', 'c6'], odd: ['c4', 'c5', 'c7'] } } } },
                target: { sort: { good: ['c1', 'c2', 'c3'], odd: ['c4', 'c5'] } }, difficulty: 0.25 },
              { prompt: '"번쩍이는 번개 치는 밤" 그림의 요소를 살린 것과 덜 어울리는 것으로 나누어 보세요.',
                toolOptions: { topic: '번개 치는 밤', slots: [{ id: 'good', label: '주제를 살렸어요' }, { id: 'odd', label: '덜 어울려요' }], cards: [{ id: 'b1', text: '굵고 뾰족한 노랑 번개' }, { id: 'b2', text: '검정과 남색 하늘' }, { id: 'b3', text: '둥글게 말린 분홍 구름' }, { id: 'b4', text: '연하고 가늘게 그은 번개' }] },
                levels: { challenge: { prompt: '"번쩍이는 번개 치는 밤" 그림의 요소 여섯 개를 살린 것과 덜 어울리는 것으로 나누어 보세요.', toolOptions: { cards: [{ id: 'b1', text: '굵고 뾰족한 노랑 번개' }, { id: 'b2', text: '검정과 남색 하늘' }, { id: 'b3', text: '둥글게 말린 분홍 구름' }, { id: 'b4', text: '연하고 가늘게 그은 번개' }, { id: 'b5', text: '번개 둘레의 밝은 빛 점' }, { id: 'b6', text: '한낮의 파란 하늘' }] }, target: { sort: { good: ['b1', 'b2', 'b5'], odd: ['b3', 'b4', 'b6'] } } } },
                target: { sort: { good: ['b1', 'b2'], odd: ['b3', 'b4'] } }, difficulty: 0.25,
                predict: { q: '덜 어울리는 요소가 하나 있으면 그림 전체 느낌은 어떻게 될까요?', options: ['그대로예요', '흔들려요'], answer: 1 },
                conclude: '주제와 반대 느낌의 요소가 하나만 있어도 전체 느낌이 흔들려요. 그 하나를 바꾸면 주제가 살아나요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 덜 어울리는 요소 하나 바꾸기', minutes: 9, tool: 'collage',
            teacher: '"화면의 그림에서 덜 어울리는 조각을 찾아 바꿔요. 살린 조각은 그대로 둬요." 바꾼 뒤 "무엇을 왜 바꾸었나요?"를 짝에게 말하게 한다. 모든 조각을 떼고 새로 만드는 학생에게는 "한 가지만 바꾸어도 느낌이 달라지는지 보세요"라고 말한다.',
            task: '화면 위 그림에서 주제와 덜 어울리는 조각을 찾아 떼고, 주제에 맞는 조각으로 바꾸어 붙여요.',
            levels: {
              easy: { shapes: ['leaf', 'circle', 'semi', 'triangle', 'square'], colors: ['파랑', '노랑', '하양', '주황', '빨강', '검정'], sizes: ['m', 'l'] },
              base: { shapes: ['leaf', 'circle', 'semi', 'triangle', 'square', 'star', 'rect'] },
              challenge: {},
            },
            items: [
              { prompt: '"비 오는 날의 슬픈 마음": 노랑 해를 떼고 하양 반원 구름 하나 이상으로 바꿔요. 파랑 빗방울 나뭇잎은 그대로 둬요.',
                state: { pieces: [{ shape: 'leaf', color: '파랑', size: 'm', x: 120, y: 240, r: 0 }, { shape: 'leaf', color: '파랑', size: 'm', x: 240, y: 280, r: 0 }, { shape: 'leaf', color: '파랑', size: 'm', x: 360, y: 240, r: 0 }, { shape: 'circle', color: '노랑', size: 'l', x: 420, y: 100, r: 0 }] },
                target: { has: [{ shape: 'circle', color: '노랑', max: 0 }, { shape: 'semi', color: '하양', min: 1 }, { shape: 'leaf', color: '파랑', min: 3 }] }, difficulty: 0.2,
                hints: ['주제의 느낌과 반대인 조각 하나를 찾아요. 그 조각만 바꾸고 나머지는 그대로 두어요.'],
                levels: { challenge: { prompt: '"비 오는 날의 슬픈 마음": 노랑 해를 떼고 하양 반원 구름 두 개 이상으로 바꾸고, 파랑 빗방울을 다섯 개 이상으로 늘려요.', target: { has: [{ shape: 'circle', color: '노랑', max: 0 }, { shape: 'semi', color: '하양', min: 2 }, { shape: 'leaf', color: '파랑', min: 5 }] } } } },
              { prompt: '"포근한 고양이의 낮잠": 뾰족한 빨강 세모를 모두 떼고, 둥근 동그라미 세 개 이상으로 바꿔요. 주황 고양이는 그대로 둬요.',
                state: { pieces: [{ shape: 'semi', color: '주황', size: 'l', x: 280, y: 220, r: 0 }, { shape: 'triangle', color: '빨강', size: 'm', x: 160, y: 120, r: 0 }, { shape: 'triangle', color: '빨강', size: 'm', x: 400, y: 120, r: 0 }, { shape: 'triangle', color: '빨강', size: 'm', x: 160, y: 320, r: 0 }, { shape: 'triangle', color: '빨강', size: 'm', x: 400, y: 320, r: 0 }] },
                target: { has: [{ shape: 'triangle', max: 0 }, { shape: 'circle', min: 3 }, { shape: 'semi', color: '주황', size: 'l', n: 1 }] }, difficulty: 0.25,
                hints: ['포근한 느낌과 반대인 모양을 찾아요. 배운 모양의 느낌을 떠올려 그 모양만 바꿔요.'],
                predict: { q: '뾰족한 세모를 둥근 모양으로 바꾸면 고양이 낮잠이 어떻게 보일까요?', options: ['더 포근해요', '더 무서워요'], answer: 0 },
                conclude: '모양 하나만 바꾸어도 그림 전체가 포근해졌어요. 덜 어울리는 요소를 찾아 바꾸면 주제가 살아요.' },
              { prompt: '"번쩍이는 번개 치는 밤": 분홍 동그라미 구름을 떼고, 노랑 세모 번개 세 개 이상을 붙여요. 검정 밤하늘은 그대로 둬요.',
                state: { pieces: [{ shape: 'square', color: '검정', size: 'l', x: 280, y: 200, r: 0 }, { shape: 'circle', color: '분홍', size: 'l', x: 140, y: 100, r: 0 }, { shape: 'circle', color: '분홍', size: 'm', x: 420, y: 100, r: 0 }] },
                target: { has: [{ shape: 'circle', color: '분홍', max: 0 }, { shape: 'triangle', color: '노랑', min: 3 }, { shape: 'square', color: '검정', n: 1 }] }, difficulty: 0.25,
                hints: ['번쩍임과 반대 느낌인 조각을 찾아 떼고, 번쩍임을 살리는 모양과 색으로 바꿔요.'],
                levels: { challenge: { prompt: '"번쩍이는 번개 치는 밤": 분홍 구름을 떼고, 노랑 세모 번개 네 개 이상을 검정 밤하늘에 맞닿게 붙여요.', target: { has: [{ shape: 'circle', color: '분홍', max: 0 }, { shape: 'triangle', color: '노랑', min: 4 }, { shape: 'square', color: '검정', n: 1 }], overlap: 2 } } } },
            ],
          },
          {
            id: 'a3', title: '활동 3. 내 그림의 요소 살펴보기 (짝 활동)', minutes: 8, tool: 'mindmap', pair: true,
            teacher: '준비물: 14~16차시에 그린 내 그림, 포스트잇 두 장(○, △). "짝의 그림에서 주제를 가장 잘 살린 요소에 ○, 덜 어울리는 요소에 △ 포스트잇을 붙여요. 그리고 까닭을 \'선이 / 색이 / 모양이\'로 시작해서 말해요." 그린 사람은 △ 요소를 무엇으로 바꿀지 활동지에 쓴다. 실제로 고쳐 그리는 것은 19차시에 한다.',
            task: '짝 그림에서 주제를 살린 요소에 ○, 덜 어울리는 요소에 △를 붙이고 까닭을 말해요. 내 그림의 △를 무엇으로 바꿀지 써요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              talk('짝의 그림에서 주제를 가장 잘 살린 요소에 ○ 포스트잇을 붙이고 까닭을 말한 뒤 "다 했어요"를 누르세요.', '살린 요소 ○', ['살린 요소', '까닭'], ['선이', '색이', '모양이']),
              talk('덜 어울리는 요소 하나에 △ 포스트잇을 붙이고, "선이 / 색이 / 모양이"로 까닭을 말한 뒤 "다 했어요"를 누르세요.', '덜 어울리는 요소 △', ['덜 어울리는 요소', '까닭'], ['느낌이 반대예요', '주제와 달라요']),
              talk('내 그림의 △ 요소를 무엇으로 바꿀지 활동지에 쓰고 짝에게 말한 뒤 "다 했어요"를 누르세요.', '바꿀 계획', ['△ 요소', '바꿀 것'], ['선 바꾸기', '색 바꾸기', '모양 바꾸기']),
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝이 ○를 붙여 준 곳은 어디였나요? 무엇 때문이라고 했나요?" 두세 명이 짝의 근거를 말하게 한다. "△가 붙어 속상한 사람도 있지요? △는 고치면 더 좋아질 곳이라는 표시예요." 출구 1번에서 주제와 반대 느낌의 요소를 살린 쪽에 둔 학생에게는 주제의 느낌 낱말을 먼저 말하게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '시원한 여름 바다', slots: [{ id: 'good', label: '주제를 살렸어요' }, { id: 'odd', label: '덜 어울려요' }], cards: [{ id: 'e1', text: '파랑과 하양의 파도' }, { id: 'e2', text: '구불구불한 물결 선' }, { id: 'e3', text: '빨갛게 타오르는 모닥불' }, { id: 'e4', text: '두꺼운 털장갑' }] }, prompt: '"시원한 여름 바다" 그림의 요소를 살린 것과 덜 어울리는 것으로 나누어 보세요.', target: { sort: { good: ['e1', 'e2'], odd: ['e3', 'e4'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '그림에 덜 어울리는 요소가 있을 때 가장 알맞은 방법은 무엇인가요?', options: ['색을 더 많이 써요', '그 요소 하나를 주제에 맞게 바꿔요', '그림을 버리고 새로 그려요'], answer: 1, difficulty: 0.15, explain: '살린 요소는 남기고 덜 어울리는 요소 하나만 바꾸면 주제가 또렷해져요.' },
          { type: 'short', prompt: '내 그림에서 바꿀 요소와, 무엇으로 바꿀지 쓰세요.' },
        ],
      },
    ],
    worksheet: {
      title: '살린 요소, 바꿀 요소',
      items: [
        { type: 'table', prompt: '내 그림을 살펴 쓰세요.', columns: ['', '요소', '까닭(선이/색이/모양이…)'], cells: [['살린 요소 ○', '', ''], ['덜 어울리는 요소 △', '', '']] },
        { type: 'short', prompt: '△ 요소를 무엇으로 바꿀지 쓰세요.' },
        { type: 'choice', prompt: '"포근한 고양이의 낮잠"에 덜 어울리는 요소에 ○ 하세요.', options: ['둥글게 만 몸', '주황 햇볕', '굵고 뾰족뾰족한 테두리 선', '부드러운 털 선'], answer: '굵고 뾰족뾰족한 테두리 선' },
        { type: 'draw', prompt: '바꿀 요소를 바꾼 모습으로 작게 그려 보세요.' },
      ],
      easy: {
        note: '주제의 느낌과 같은 쪽이면 ○, 반대쪽이면 △예요.',
        items: [
          { type: 'short', prompt: '내 그림에서 바꿀 요소를 쓰세요.' },
          { type: 'choice', prompt: '"슬픈 비 오는 날"에 덜 어울리는 것에 ○ 하세요.', options: ['웃는 노란 해', '가는 빗줄기'], answer: '웃는 노란 해' },
          { type: 'draw', prompt: '바꾼 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 맞는 칸에 놓으면 바로 표시되고, 색종이는 바꾸기에 쓰는 모양 다섯 가지와 여섯 색, 두 크기만 나와요.',
      base: '스스로 나눈 뒤 확인하고, 모양 일곱 가지와 모든 색을 써요.',
      challenge: '요소 카드가 늘어 헷갈리는 것(알록달록 우산, 한낮의 하늘)이 섞이고, 바꾸기는 바꾼 조각을 더 많이 붙이거나 맞대야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 예쁘거나 좋아하는 요소를 주제와 상관없이 살린 것으로 여긴다 → 주제의 느낌 낱말을 먼저 정하게 한다. ② 색을 많이 쓸수록 주제가 잘 드러난다고 여긴다(이 주제의 대표 오개념) → 알록달록 우산 카드로 짚고 19차시에서 색 줄이기를 한다. ③ △를 받으면 그림 전체를 버리려 한다 → 하나만 바꾸게 한다. 준비물: 14~16차시 그림, ○·△ 포스트잇.',
  }));

  // ───────────── 19차시 (연습) ─────────────
  lessons.push(lesson(19, S3, {
    title: '색 가짓수를 줄여 주제를 또렷하게 고치기',
    objective: '색을 많이 쓴 그림이 주제를 흐릴 수 있다는 것을 알고, 주제의 느낌에 맞는 색 몇 가지만 남겨 그림을 고칠 수 있다.',
    illustration: {
      prompt: art('a busy rainbow-colored underwater picture beside the same picture redone in only blue, white and green, calm and clear'),
      scene: scene([
        { motif: 'wave', x: 240, y: 222 }, { motif: 'cloud', x: 110, y: 52 }, { motif: 'leaf', x: 130, y: 200, r: -10 },
        { motif: 'leaf', x: 340, y: 196, r: 20 }, { motif: 'star', x: 400, y: 80, s: 0.5 },
        { motif: 'text', x: 240, y: 132, text: '색은 적게, 느낌은 또렷하게', size: 22 },
      ]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '같은 "시원한 바닷속" 그림 두 장을 보인다. ㄱ은 열두 색을 모두 써서 알록달록, ㄴ은 파랑·하양·초록 세 색만 썼다. "어느 그림이 시원한 바닷속 같나요?" ㄱ을 고르는 학생에게는 "ㄱ에서 가장 먼저 눈에 띄는 것은 무엇인가요? 그게 주제인가요?"라고 묻는다. "색을 많이 쓸수록 주제가 잘 드러날까요?" 대답을 들은 뒤, 오늘은 색을 골라 줄여 본다고 연다. 시연 단추로 여러 색 조각이 줄어드는 모습을 보여 준다.',
        student: '알록달록한 ㄱ과 세 가지 색만 쓴 ㄴ 가운데 시원한 바닷속 같은 쪽을 고르고 까닭을 말해 봅시다.',
        demo: { tool: 'collage', options: { shapes: ['leaf', 'circle'], colors: ['파랑', '하양'] }, sequence: [{ has: [{ color: '파랑', min: 2 }, { color: '하양', min: 1 }] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 색 문제에 맞는 고칠 방법 잇기', minutes: 8, tool: 'mindmap',
            teacher: '"이 그림의 색에서 무엇이 문제인가요? 그 문제를 고치려면 색을 어떻게 바꿔야 할까요?" 색이 너무 많을 때, 주인공이 바탕에 묻힐 때, 느낌이 주제와 반대일 때를 가른다. "색을 더 많이 써요"는 어느 문제도 고치지 못한다는 것을 짚는다.',
            task: '그림의 색 문제를 읽고, 그 문제를 고치는 알맞은 방법을 이어요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              { prompt: '그림의 색 문제마다 알맞은 고칠 방법을 이어 보세요.',
                toolOptions: { mode: 'match', topic: '색 고치기', slots: [{ id: 's1', label: '색이 너무 많아 어지러워요' }, { id: 's2', label: '주인공이 바탕에 묻혀요' }, { id: 's3', label: '슬픈 그림인데 신나 보여요' }], cards: [{ id: 'c1', text: '주제에 맞는 색 서너 가지만 남겨요' }, { id: 'c2', text: '주인공과 바탕을 밝고 어둡게 달리해요' }, { id: 'c3', text: '어둡고 차가운 느낌 색으로 바꿔요' }, { id: 'cx', text: '색을 더 많이 써요' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'c1', text: '주제에 맞는 색 서너 가지만 남겨요' }, { id: 'c2', text: '주인공과 바탕을 밝고 어둡게 달리해요' }, { id: 'c3', text: '어둡고 차가운 느낌 색으로 바꿔요' }, { id: 'cx', text: '색을 더 많이 써요' }, { id: 'cy', text: '바탕도 주인공과 같은 색으로 칠해요' }] } } },
                hints: ['문제마다 무엇이 지나치거나 모자란지(색의 가짓수, 밝기 차이, 느낌) 먼저 말하고 그것을 고치는 방법을 찾아요.', '이은 방법을 쓰면 그 문제가 정말 사라지는지 떠올려 보세요.', '어지러우면 색을 줄이고, 묻히면 밝기를 달리하고, 느낌이 반대면 주제에 맞는 느낌의 색으로 바꿔요.'],
                target: { match: { s1: 'c1', s2: 'c2', s3: 'c3' } }, difficulty: 0.2 },
              { prompt: '새 그림의 색 문제마다 알맞은 고칠 방법을 이어 보세요.',
                toolOptions: { mode: 'match', topic: '색 고치기', slots: [{ id: 's1', label: '추운 겨울인데 따뜻해 보여요' }, { id: 's2', label: '노란 병아리가 노란 바탕에 숨어요' }, { id: 's3', label: '무지개 색을 다 써서 꽃이 안 보여요' }], cards: [{ id: 'c1', text: '파랑과 하양 같은 차가운 느낌 색으로 바꿔요' }, { id: 'c2', text: '바탕을 보라나 갈색으로 바꿔요' }, { id: 'c3', text: '꽃 색과 잎 색만 남기고 나머지는 줄여요' }, { id: 'cx', text: '병아리도 바탕과 똑같이 칠해요' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'c1', text: '파랑과 하양 같은 차가운 느낌 색으로 바꿔요' }, { id: 'c2', text: '바탕을 보라나 갈색으로 바꿔요' }, { id: 'c3', text: '꽃 색과 잎 색만 남기고 나머지는 줄여요' }, { id: 'cx', text: '병아리도 바탕과 똑같이 칠해요' }, { id: 'cy', text: '빨강과 주황을 더 칠해요' }] } } },
                hints: ['문제마다 무엇이 지나치거나 모자란지(느낌, 밝기 차이, 색의 가짓수) 먼저 말하고 그것을 고치는 방법을 찾아요.'],
                target: { match: { s1: 'c1', s2: 'c2', s3: 'c3' } }, difficulty: 0.25 },
              { prompt: '색을 고를 때의 생각 가운데 바른 생각만 골라 보세요.',
                toolOptions: { mode: 'pick', topic: '바른 생각', cards: [{ id: 'r1', text: '주제의 느낌에 맞는 색 몇 가지를 골라요' }, { id: 'r2', text: '주인공 색은 바탕 색과 다르게 골라요' }, { id: 'r3', text: '같은 색을 되풀이하면 그림이 하나로 묶여요' }, { id: 'r4', text: '색을 많이 쓸수록 주제가 잘 드러나요' }, { id: 'r5', text: '크레파스 색은 모두 한 번씩 써야 해요' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'r1', text: '주제의 느낌에 맞는 색 몇 가지를 골라요' }, { id: 'r2', text: '주인공 색은 바탕 색과 다르게 골라요' }, { id: 'r3', text: '같은 색을 되풀이하면 그림이 하나로 묶여요' }, { id: 'r4', text: '색을 많이 쓸수록 주제가 잘 드러나요' }, { id: 'r5', text: '크레파스 색은 모두 한 번씩 써야 해요' }, { id: 'r6', text: '좋아하는 색이면 주제와 상관없이 써요' }] } } },
                hints: ['도입의 두 바닷속 그림을 떠올려요. 주제가 더 잘 보인 그림은 색을 어떻게 썼는지 견주어 골라요.'],
                target: { pick: ['r1', 'r2', 'r3'] }, difficulty: 0.2,
                predict: { q: '색을 세 가지만 쓰면 그림이 심심해질까요?', options: ['심심해요', '오히려 또렷해요'], answer: 1 },
                conclude: '색을 주제에 맞게 몇 가지만 고르면 느낌이 또렷해지고 그림이 하나로 묶여요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 알록달록한 그림의 색 줄이기', minutes: 10, tool: 'collage',
            teacher: '"화면의 그림은 색이 너무 많아요. 주제에 맞는 색만 남기고, 나머지 색 조각은 떼거나 남길 색으로 바꿔 붙여요." 남길 색은 문제에 적혀 있다. 조각을 모두 떼는 학생에게는 "남길 색의 조각은 그대로 써요"라고 말한다. 고친 뒤 처음 그림과 견주어 "무엇이 더 잘 보이나요?"를 짝에게 말하게 한다.',
            task: '화면 위 알록달록한 그림에서 주제에 맞는 색만 남기고, 나머지 색 조각은 떼거나 남길 색으로 바꿔요.',
            levels: {
              easy: { shapes: ['leaf', 'circle', 'semi', 'star', 'heart'], colors: ['파랑', '하양', '초록', '빨강', '주황', '갈색', '노랑', '검정', '분홍', '보라'], sizes: ['m', 'l'] },
              base: {},
              challenge: {},
            },
            items: [
              { prompt: '"시원한 바닷속": 파랑·하양·초록만 남겨요. 파랑 조각 세 개 이상을 두고, 다른 색 조각은 모두 떼거나 바꿔요.',
                state: { pieces: [{ shape: 'leaf', color: '파랑', size: 'm', x: 120, y: 200, r: 0 }, { shape: 'leaf', color: '빨강', size: 'm', x: 220, y: 140, r: 0 }, { shape: 'circle', color: '하양', size: 's', x: 320, y: 100, r: 0 }, { shape: 'leaf', color: '노랑', size: 'm', x: 400, y: 220, r: 0 }, { shape: 'semi', color: '초록', size: 'l', x: 280, y: 320, r: 0 }, { shape: 'star', color: '분홍', size: 'm', x: 480, y: 100, r: 0 }, { shape: 'leaf', color: '파랑', size: 'm', x: 180, y: 300, r: 0 }] },
                target: { has: [{ color: '파랑', min: 3 }, { color: '빨강', max: 0 }, { color: '노랑', max: 0 }, { color: '분홍', max: 0 }, { color: '주황', max: 0 }, { color: '보라', max: 0 }, { color: '갈색', max: 0 }, { color: '검정', max: 0 }] }, difficulty: 0.25,
                hints: ['문제에 적힌 남길 색을 먼저 말해요. 그 밖의 색 조각을 하나씩 찾아 떼거나 남길 색으로 바꿔요.'],
                levels: { challenge: { prompt: '"시원한 바닷속": 파랑·하양만 남겨요. 파랑 조각 네 개 이상과 하양 조각 두 개 이상을 두고, 다른 색은 모두 떼거나 바꿔요.', target: { has: [{ color: '파랑', min: 4 }, { color: '하양', min: 2 }, { color: '빨강', max: 0 }, { color: '노랑', max: 0 }, { color: '분홍', max: 0 }, { color: '초록', max: 0 }, { color: '주황', max: 0 }, { color: '보라', max: 0 }, { color: '갈색', max: 0 }, { color: '검정', max: 0 }] } } } },
              { prompt: '"단풍 든 가을 숲": 빨강·주황·갈색만 남겨요. 빨강과 주황 조각을 두 개씩 이상 두고, 다른 색은 모두 떼거나 바꿔요.',
                state: { pieces: [{ shape: 'leaf', color: '빨강', size: 'm', x: 120, y: 120, r: 0 }, { shape: 'leaf', color: '파랑', size: 'm', x: 220, y: 200, r: 0 }, { shape: 'leaf', color: '주황', size: 'm', x: 320, y: 120, r: 0 }, { shape: 'leaf', color: '보라', size: 'm', x: 420, y: 200, r: 0 }, { shape: 'semi', color: '갈색', size: 'l', x: 280, y: 320, r: 0 }, { shape: 'heart', color: '분홍', size: 'm', x: 480, y: 80, r: 0 }] },
                target: { has: [{ color: '빨강', min: 2 }, { color: '주황', min: 2 }, { color: '파랑', max: 0 }, { color: '보라', max: 0 }, { color: '분홍', max: 0 }, { color: '초록', max: 0 }, { color: '노랑', max: 0 }, { color: '하양', max: 0 }, { color: '검정', max: 0 }] }, difficulty: 0.25,
                hints: ['문제에 적힌 남길 색을 먼저 말해요. 그 밖의 색 조각을 하나씩 찾아 떼거나 남길 색으로 바꾸고, 남길 색의 개수를 세어요.'],
                predict: { q: '파랑과 보라 잎을 빼면 가을 숲이 어떻게 보일까요?', options: ['더 가을 같아요', '덜 가을 같아요'], answer: 0 },
                conclude: '주제에 맞지 않는 색을 빼니 가을 느낌이 한데 모였어요. 색이 적을수록 느낌이 또렷해질 때가 많아요.' },
              { prompt: '"깜깜한 밤의 반딧불이": 검정·노랑만 남겨요. 검정 조각 하나 이상과 노랑 조각 세 개 이상을 두고, 다른 색은 모두 떼거나 바꿔요.',
                state: { pieces: [{ shape: 'semi', color: '검정', size: 'l', x: 280, y: 280, r: 0 }, { shape: 'circle', color: '노랑', size: 's', x: 160, y: 120, r: 0 }, { shape: 'circle', color: '초록', size: 's', x: 260, y: 100, r: 0 }, { shape: 'circle', color: '분홍', size: 's', x: 360, y: 140, r: 0 }, { shape: 'star', color: '빨강', size: 'm', x: 460, y: 80, r: 0 }] },
                target: { has: [{ color: '검정', min: 1 }, { color: '노랑', min: 3 }, { color: '초록', max: 0 }, { color: '분홍', max: 0 }, { color: '빨강', max: 0 }, { color: '파랑', max: 0 }, { color: '주황', max: 0 }, { color: '보라', max: 0 }, { color: '갈색', max: 0 }, { color: '하양', max: 0 }] }, difficulty: 0.25,
                hints: ['문제에 적힌 남길 색을 먼저 말해요. 남길 색 조각의 개수가 모자라면 그 색으로 더 붙여요.'] },
            ],
          },
          {
            id: 'a3', title: '활동 3. 내 그림의 색 세어 보고 줄이기 (짝 활동)', minutes: 8, tool: 'mindmap', pair: true,
            teacher: '준비물: 14~18차시에 그린 내 그림, 크레파스, 활동지 색 세기 표. "내 그림에 쓴 색을 하나씩 짚으며 세어 표에 적어요. 주제의 느낌에 맞는 색에 ○, 덜 어울리는 색에 △." △ 색으로 칠한 곳 한 군데를 ○ 색으로 덧칠해 바꾼다(18차시에 정한 △ 요소부터). 짝은 바꾸기 전과 뒤에 "주제가 더 잘 보여?"를 말해 준다. 크레파스 덧칠은 눕혀서 세게 문지르면 아래 색이 덮인다.',
            task: '내 그림에 쓴 색을 세어 표에 ○·△를 하고, △ 색으로 칠한 곳 한 군데를 ○ 색으로 덧칠해 바꿔요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              talk('내 그림에 쓴 색을 하나씩 짚어 세고, 활동지 표에 적은 뒤 "다 했어요"를 누르세요.', '색 세기', ['쓴 색', '몇 가지'], ['하나씩 짚기']),
              talk('주제의 느낌에 맞는 색에 ○, 덜 어울리는 색에 △를 하고 짝에게 까닭을 말한 뒤 "다 했어요"를 누르세요.', '○·△ 가르기', ['맞는 색 ○', '덜 어울리는 색 △'], ['느낌이 같아요', '느낌이 반대예요']),
              talk('△ 색으로 칠한 곳 한 군데를 ○ 색으로 덧칠해 바꾸고, 짝이 "주제가 더 잘 보여?"를 말해 준 뒤 "다 했어요"를 누르세요.', '덧칠해 바꾸기', ['바꾼 곳', '짝의 말'], ['덧칠', '눕혀서 세게']),
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"색을 줄이기 전과 뒤에, 내 그림의 무엇이 달라졌나요?" 두세 명이 고친 그림을 보여 주며 말하게 한다. "색을 많이 쓸수록 좋다"는 생각이 바뀐 학생이 있는지 손을 들게 한다. 출구 1번에서 남길 색이 아닌 조각을 남긴 학생에게는 문제에 적힌 색을 소리 내어 다시 읽게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'collage', options: { shapes: ['circle', 'heart', 'leaf'], colors: ['분홍', '빨강', '파랑', '초록'] }, state: { pieces: [{ shape: 'heart', color: '분홍', size: 'm', x: 160, y: 200, r: 0 }, { shape: 'heart', color: '파랑', size: 'm', x: 280, y: 200, r: 0 }, { shape: 'circle', color: '초록', size: 'm', x: 400, y: 200, r: 0 }] }, prompt: '"사랑하는 마음 카드": 분홍·빨강만 남겨요. 분홍이나 빨강 조각을 세 개 이상 두고, 다른 색은 떼거나 바꿔 보세요.', target: { has: [{ color: '분홍', min: 2 }, { color: '빨강', min: 1 }, { color: '파랑', max: 0 }, { color: '초록', max: 0 }] }, difficulty: 0.2 },
          { type: 'choice', prompt: '색을 많이 써서 그림이 어지러울 때 알맞은 방법은 무엇인가요?', options: ['색을 더 써요', '주제에 맞는 색 몇 가지만 남겨요', '바탕을 비워 둬요'], answer: 1, difficulty: 0.15, explain: '주제의 느낌에 맞는 색 몇 가지를 고르면 어지러움이 줄고 주제가 또렷해져요.' },
          { type: 'mood', prompt: '내 그림의 색을 줄여 보니 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '색 줄이기',
      items: [
        { type: 'table', prompt: '내 그림에 쓴 색을 쓰고 ○·△ 하세요.', columns: ['쓴 색', '○ 또는 △', '까닭'], cells: [['', '', ''], ['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']] },
        { type: 'short', prompt: '△ 색으로 칠한 곳을 무슨 색으로 바꾸었는지 쓰세요.' },
        { type: 'choice', prompt: '바른 생각에 ○ 하세요.', options: ['색을 많이 쓸수록 좋아요', '크레파스 색을 다 써야 해요', '주제에 맞는 색 몇 가지를 골라요', '좋아하는 색만 써요'], answer: '주제에 맞는 색 몇 가지를 골라요' },
        { type: 'draw', prompt: '"단풍 든 가을 숲"을 세 가지 색만 정해 그려 보세요. 쓴 색을 아래에 쓰세요.' },
      ],
      easy: {
        note: '주제의 느낌에 맞는 색에 ○, 덜 어울리는 색에 △ 해요.',
        items: [
          { type: 'short', prompt: '내 그림에 쓴 색은 몇 가지인가요?' },
          { type: 'choice', prompt: '바른 생각에 ○ 하세요.', options: ['주제에 맞는 색만', '색은 많을수록'], answer: '주제에 맞는 색만' },
          { type: 'draw', prompt: '세 가지 색으로 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '이은 카드와 고른 카드에 바로 표시가 생기고, 색종이는 바꾸기에 쓰는 모양 다섯 가지와 두 크기만 나와요.',
      base: '스스로 잇고 고른 뒤 확인하고, 모든 모양·색·크기를 써요.',
      challenge: '헷갈리는 카드가 하나씩 더 있고, 바닷속은 남길 색이 두 가지로 줄어 초록까지 바꾸어야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 색을 많이 쓸수록 주제가 잘 드러난다고 여긴다(이 주제의 대표 오개념) → 도입의 두 바닷속 그림과 내 그림의 고치기 전·뒤를 견주게 한다. ② 색을 줄이라고 하면 한 가지 색으로만 칠한다 → 주제에 맞는 색 몇 가지(세 가지 안팎)를 고르게 한다. ③ 크레파스 덧칠이 잘 덮이지 않는다 → 눕혀서 세게 문지르게 하고, 진한 색 위에 연한 색은 잘 덮이지 않는다는 것을 알려 준다. 준비물: 14~18차시 그림, 크레파스, 색 세기 표 활동지.',
  }));

  // ───────────── 20차시 (확장) ─────────────
  lessons.push(lesson(20, S3, {
    title: '조형 요소 낱말로 친구 작품에 말해 주고 하나 바꾸기',
    objective: '친구 작품을 보고 선·색·모양·크기 같은 조형 요소를 들어 구체적으로 말해 주고, 들은 말에 따라 내 작품의 요소 하나를 바꿀 수 있다.',
    illustration: {
      prompt: art('four children walking around a gallery of desk artworks with little word cards reading line, color, shape and size pinned beside each picture'),
      scene: scene([
        { motif: 'sun', x: 410, y: 56, s: 0.7 }, { motif: 'cloud', x: 110, y: 50 }, { motif: 'house', x: 120, y: 214 },
        { motif: 'house', x: 360, y: 214, s: 0.9 }, { motif: 'flower', x: 240, y: 226, color: 'mint' }, { motif: 'star', x: 260, y: 90, s: 0.5 },
        { motif: 'text', x: 240, y: 146, text: '선이, 색이, 모양이…', size: 22 },
      ]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '학생 작품 하나(허락받은 것)를 띄우고 두 가지 말을 들려준다. ㄱ "멋지다!" ㄴ "번개를 굵고 뾰족한 선으로 그려서 무서운 느낌이 나." "어느 말을 들은 친구가 다음에 무엇을 더 잘할 수 있을까요?" ㄴ에는 선이라는 조형 요소와 느낌이 함께 들어 있다는 것을 짚는다. 칠판에 "선이 / 색이 / 모양이 / 크기가 ~해서 ~한 느낌이 나"라는 말틀을 써 둔다. 시연 단추로 말 카드가 두 갈래로 나뉘는 모습을 보여 준다.',
        student: '"멋지다!"와 "굵고 뾰족한 선으로 그려서 무서운 느낌이 나" 가운데 더 도움이 되는 말을 고르고 까닭을 말해 봅시다.',
        demo: { tool: 'mindmap', options: { topic: '친구에게 해 준 말', slots: [{ id: 'elem', label: '조형 요소를 들어 말했어요' }, { id: 'only', label: '느낌만 말했어요' }], cards: [{ id: 'd1', text: '굵고 뾰족한 선이라 무서워 보여' }, { id: 'd2', text: '멋지다!' }] }, sequence: [{ sort: { elem: ['d1'], only: ['d2'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 조형 요소를 들어 말하기', minutes: 8, tool: 'mindmap',
            teacher: '"이 말에 선, 색, 모양, 크기, 질감 가운데 무엇이 들어 있나요?" 들어 있으면 조형 요소를 들어 한 말이다. "멋지다", "나도 갖고 싶어"는 마음은 좋지만 무엇이 좋은지 알려 주지 않는다는 것을 짚는다. 셋째 문항은 친구 작품의 문제마다 어떤 요소를 바꾸면 좋을지 잇는다.',
            task: '친구에게 해 준 말이 조형 요소를 들어 한 말인지 느낌만 한 말인지 나누고, 작품 문제마다 바꿀 요소를 이어요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '친구에게 해 준 말을 조형 요소를 들어 한 말과 느낌만 한 말로 나누어 보세요.',
                toolOptions: { topic: '친구에게 해 준 말', slots: [{ id: 'elem', label: '조형 요소를 들어 말했어요' }, { id: 'only', label: '느낌만 말했어요' }], cards: [{ id: 'm1', text: '주황과 노랑을 써서 따뜻해 보여' }, { id: 'm2', text: '고양이를 크게 그려서 먼저 보여' }, { id: 'm3', text: '구불구불한 선이라 물이 흐르는 것 같아' }, { id: 'm4', text: '멋지다!' }, { id: 'm5', text: '그냥 좋아' }] },
                levels: { challenge: { prompt: '친구에게 해 준 말 일곱 개를 조형 요소를 들어 한 말과 느낌만 한 말로 나누어 보세요.', toolOptions: { cards: [{ id: 'm1', text: '주황과 노랑을 써서 따뜻해 보여' }, { id: 'm2', text: '고양이를 크게 그려서 먼저 보여' }, { id: 'm3', text: '구불구불한 선이라 물이 흐르는 것 같아' }, { id: 'm4', text: '멋지다!' }, { id: 'm5', text: '그냥 좋아' }, { id: 'm6', text: '나무껍질 무늬를 찍어서 거칠어 보여' }, { id: 'm7', text: '나도 이런 거 갖고 싶어' }] }, target: { sort: { elem: ['m1', 'm2', 'm3', 'm6'], only: ['m4', 'm5', 'm7'] } } } },
                hints: ['말 속에 선, 색, 모양, 크기, 질감 가운데 하나라도 들어 있는지 낱말을 찾아요.'],
                target: { sort: { elem: ['m1', 'm2', 'm3'], only: ['m4', 'm5'] } }, difficulty: 0.15 },
              { prompt: '새로 들은 말을 조형 요소를 들어 한 말과 느낌만 한 말로 나누어 보세요.',
                toolOptions: { topic: '친구에게 해 준 말', slots: [{ id: 'elem', label: '조형 요소를 들어 말했어요' }, { id: 'only', label: '느낌만 말했어요' }], cards: [{ id: 'n1', text: '파랑과 하양만 써서 시원해' }, { id: 'n2', text: '뾰족한 세모가 많아서 화난 것 같아' }, { id: 'n3', text: '예쁘다' }, { id: 'n4', text: '최고야' }] },
                levels: { challenge: { prompt: '새로 들은 말 여섯 개를 조형 요소를 들어 한 말과 느낌만 한 말로 나누어 보세요.', toolOptions: { cards: [{ id: 'n1', text: '파랑과 하양만 써서 시원해' }, { id: 'n2', text: '뾰족한 세모가 많아서 화난 것 같아' }, { id: 'n3', text: '예쁘다' }, { id: 'n4', text: '최고야' }, { id: 'n5', text: '작은 점을 흩어서 반짝반짝해' }, { id: 'n6', text: '잘 그렸네' }] }, target: { sort: { elem: ['n1', 'n2', 'n5'], only: ['n3', 'n4', 'n6'] } } } },
                target: { sort: { elem: ['n1', 'n2'], only: ['n3', 'n4'] } }, difficulty: 0.2 },
              { prompt: '친구 작품의 문제마다 바꾸면 좋을 조형 요소를 이어 보세요.',
                toolOptions: { mode: 'match', topic: '바꿀 요소', slots: [{ id: 's1', label: '무서운 호랑이인데 둥근 모양뿐이야' }, { id: 's2', label: '시원한 바다인데 빨강이 많아' }, { id: 's3', label: '주인공 강아지가 작아서 안 보여' }], cards: [{ id: 'c1', text: '모양: 뾰족한 세모 귀와 이빨로' }, { id: 'c2', text: '색: 파랑과 하양으로' }, { id: 'c3', text: '크기: 강아지를 크게' }, { id: 'cx', text: '색: 더 많은 색으로' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'c1', text: '모양: 뾰족한 세모 귀와 이빨로' }, { id: 'c2', text: '색: 파랑과 하양으로' }, { id: 'c3', text: '크기: 강아지를 크게' }, { id: 'cx', text: '색: 더 많은 색으로' }, { id: 'cy', text: '선: 더 연하고 흐리게' }] } } },
                hints: ['문제 속에서 어떤 조형 요소(모양, 색, 크기)가 주제와 어긋났는지 낱말을 찾아요.'],
                target: { match: { s1: 'c1', s2: 'c2', s3: 'c3' } }, difficulty: 0.2,
                predict: { q: '친구에게 "멋지다"라고만 하면 친구가 무엇을 고칠지 알까요?', options: ['알아요', '알기 어려워요'], answer: 1 },
                conclude: '"선이, 색이, 모양이, 크기가"를 넣어 말하면 친구가 무엇이 좋고 무엇을 바꿀지 알 수 있어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 친구 작품의 요소 하나 바꿔 주기', minutes: 9, tool: 'collage',
            teacher: '"화면은 친구가 만든 작품이에요. 친구가 들은 말을 읽고, 그 말에 나온 요소 하나만 바꿔 주세요." 호랑이 가면은 뾰족한 모양을 더하고 양쪽을 똑같이 맞추며, 기차는 같은 칸을 되풀이해 달리는 느낌을 낸다. 바꾼 뒤 "어떤 요소를 어떻게 바꿨는지"를 말틀로 짝에게 말하게 한다.',
            task: '친구 작품이 들은 말을 읽고, 그 말에 나온 조형 요소를 바꾸어 작품을 고쳐 줘요.',
            levels: {
              easy: { shapes: ['circle', 'triangle', 'square', 'rect'], colors: ['주황', '검정', '하양', '빨강', '파랑'], sizes: ['s', 'm', 'l'] },
              base: { shapes: ['circle', 'triangle', 'square', 'rect', 'star', 'semi'] },
              challenge: {},
            },
            items: [
              { prompt: '들은 말: "무서운 호랑이인데 둥근 모양뿐이야." 주황 얼굴은 그대로 두고, 세모 귀와 이빨을 네 개 이상 더해 세로 접는 선 양쪽이 똑같게 만들어요.',
                state: { pieces: [{ shape: 'circle', color: '주황', size: 'l', x: 280, y: 200, r: 0 }, { shape: 'circle', color: '검정', size: 's', x: 240, y: 180, r: 0 }] },
                target: { symmetry: 'vertical', has: [{ shape: 'circle', color: '주황', size: 'l', n: 1 }, { shape: 'triangle', min: 4 }] }, difficulty: 0.25,
                hints: ['들은 말에서 바꿀 요소(모양)를 찾고, 그 모양을 접는 선 양쪽 같은 자리에 짝 지어 놓아요.'],
                levels: { challenge: { prompt: '들은 말: "무서운 호랑이인데 둥근 모양뿐이야." 주황 얼굴은 그대로 두고 세모를 여섯 개 이상 더해, 접는 선 없이 양쪽이 똑같게 만들어요.', toolOptions: { guide: false }, target: { symmetry: 'vertical', has: [{ shape: 'circle', color: '주황', size: 'l', n: 1 }, { shape: 'triangle', min: 6 }] } } } },
              { prompt: '들은 말: "기차가 서 있는 것 같아." 빨강 네모와 검정 동그라미를 한 묶음으로, 왼쪽에서 오른쪽으로 세 번 이상 되풀이해 달리는 기차로 바꿔요.',
                state: { pieces: [{ shape: 'square', color: '빨강', size: 'm', x: 280, y: 200, r: 0 }] },
                target: { repeat: { times: 3, unit: 2 }, has: [{ shape: 'square', color: '빨강', min: 3 }, { shape: 'circle', color: '검정', min: 3 }] }, difficulty: 0.25,
                hints: ['들은 말에서 바꿀 느낌(움직임)을 찾아요. 움직임은 같은 묶음을 이어 붙일 때 생겨요.'],
                predict: { q: '기차 칸을 되풀이하면 어떤 느낌이 날까요?', options: ['서 있어요', '달려요'], answer: 1 },
                conclude: '되풀이라는 방법 하나를 더하니 서 있던 기차가 달리는 느낌이 났어요.' },
              { prompt: '짝에게 들은 말에 따라 내 주제 작품의 요소 하나를 바꾸어 만들고 점검해요.', target: { selfCheck: ['짝에게 조형 요소를 들어 말해 달라고 했어요', '들은 말에 나온 요소 하나를 바꾸었어요', '무엇을 어떻게 바꿨는지 말틀로 말했어요'], minPieces: 4 }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a3', title: '활동 3. 모둠 작품 돌려 보며 말해 주기 (짝 활동)', minutes: 9, tool: 'mindmap', pair: true,
            teacher: '준비물: 19차시까지 그린 내 그림, 말틀 카드("선이 / 색이 / 모양이 / 크기가 ~해서 ~한 느낌이 나"), 포스트잇. 네 명 모둠에서 그림을 시계 방향으로 돌린다(한 작품에 2분). 받은 그림마다 말틀로 좋은 점 하나를 포스트잇에 써 붙인다. 마지막에 내 그림이 돌아오면 포스트잇을 읽고, 바꿀 요소 하나를 골라 활동지에 쓴다. 26명이 모두 앞에 나와 발표하지 않고 모둠 안에서 한다.',
            task: '모둠 친구들 그림을 돌려 보며, 그림마다 말틀로 좋은 점 하나를 포스트잇에 써 붙여요. 돌아온 내 그림의 말을 읽고 바꿀 요소를 정해요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              talk('받은 친구 그림마다 "선이/색이/모양이/크기가 ~해서 ~한 느낌이 나"로 포스트잇을 써 붙인 뒤 "다 했어요"를 누르세요.', '돌려 보며 말해 주기', ['조형 요소', '느낌'], ['선이', '색이', '모양이', '크기가']),
              talk('돌아온 내 그림의 포스트잇을 소리 내어 읽고, 가장 도움이 된 말 하나에 ○ 한 뒤 "다 했어요"를 누르세요.', '들은 말 읽기', ['도움이 된 말', '까닭'], ['요소가 들어 있어요']),
              talk('들은 말을 바탕으로 바꿀 요소 하나와 바꿀 방법을 활동지에 쓰고 모둠에 말한 뒤 "다 했어요"를 누르세요.', '바꿀 요소 정하기', ['바꿀 요소', '바꿀 방법'], ['선', '색', '모양', '크기']),
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 받은 포스트잇 가운데 가장 도움이 된 말은 무엇이었나요?" 모둠마다 한 명이 읽어 준다. 조형 요소 부분(11~20차시)을 마치며 "선, 색, 모양, 크기, 점, 질감은 꾸미기가 아니라 주제를 전하는 방법이었어요"라고 정리한다. 다음 시간부터는 재료와 용구를 익혀 이 방법을 더 잘 쓰게 된다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '친구에게 해 준 말', slots: [{ id: 'elem', label: '조형 요소를 들어 말했어요' }, { id: 'only', label: '느낌만 말했어요' }], cards: [{ id: 'e1', text: '해를 크게 그려서 먼저 눈에 띄어' }, { id: 'e2', text: '대단해' }, { id: 'e3', text: '둥근 모양이 많아서 귀여워' }] }, prompt: '새 말 카드를 조형 요소를 들어 한 말과 느낌만 한 말로 나누어 보세요.', target: { sort: { elem: ['e1', 'e3'], only: ['e2'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '"시원한 바다인데 빨강이 많아"라는 말을 들었을 때 바꿀 조형 요소는 무엇인가요?', options: ['선', '색', '크기'], answer: 1, difficulty: 0.15, explain: '빨강이 많다는 것은 색에 대한 말이라, 색을 시원한 느낌 색으로 바꿔요.' },
          { type: 'short', prompt: '말틀("~이 ~해서 ~한 느낌이 나")로 친구 작품에 해 준 말 하나를 쓰세요.' },
        ],
      },
    ],
    worksheet: {
      title: '조형 요소로 말해 주기',
      items: [
        { type: 'table', prompt: '모둠 친구 그림에 해 준 말을 말틀로 쓰세요.', columns: ['친구 그림 주제', '조형 요소', '~해서 ~한 느낌이 나'], cells: [['', '', ''], ['', '', ''], ['', '', '']] },
        { type: 'short', prompt: '내 그림에서 바꿀 요소 하나와 바꿀 방법을 쓰세요.' },
        { type: 'choice', prompt: '조형 요소를 들어 한 말에 ○ 하세요.', options: ['멋지다', '그냥 좋아', '작은 점을 흩어서 반짝반짝해', '최고야'], answer: '작은 점을 흩어서 반짝반짝해' },
        { type: 'figure', prompt: '접는 선 왼쪽의 세모 귀를 보고, 오른쪽에 짝이 될 귀를 그려 호랑이 가면을 완성하세요.', tool: 'collage', options: { guide: 'vertical' }, figures: [{ state: { pieces: [{ shape: 'circle', color: '주황', size: 'l', x: 280, y: 220, r: 0 }, { shape: 'triangle', color: '주황', size: 'm', x: 220, y: 140, r: 0 }] }, caption: '오른쪽 귀 그리기' }], answer: '접는 선에서 같은 거리에 같은 세모' },
      ],
      easy: {
        note: '"선이 / 색이 / 모양이 / 크기가 ~해서 ~한 느낌이 나"로 말해요.',
        items: [
          { type: 'short', prompt: '친구 그림에 해 준 말 하나를 쓰세요.' },
          { type: 'choice', prompt: '조형 요소가 들어 있는 말에 ○ 하세요.', options: ['파랑을 써서 시원해', '예쁘다'], answer: '파랑을 써서 시원해' },
          { type: 'short', prompt: '내 그림에서 바꿀 것 하나를 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 맞는 칸에 놓으면 바로 표시되고, 색종이는 고치기에 쓰는 모양 네 가지와 다섯 색만 나와요.',
      base: '스스로 나누고 이은 뒤 확인하고, 모양 여섯 가지와 모든 색을 써요.',
      challenge: '말 카드가 늘고 헷갈리는 바꿀 요소 카드가 하나 더 있어요. 호랑이 가면은 접는 선 없이 세모를 더 많이 짝 지어야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① "멋지다, 예쁘다"로만 말한다 → 말틀 카드를 책상에 두고 쓰게 한다. ② 들은 말을 모두 고치려 한다 → 요소 하나만 고르게 한다. ③ 대칭에서 짝 조각을 같은 쪽으로 돌려 놓는다 → 손바닥을 마주 대어 거울 방향을 느끼게 한다. 작품 돌려 보기는 모둠 안에서만 하고, 다른 친구 그림에 직접 그리지 않고 포스트잇만 붙인다. 준비물: 내 그림, 말틀 카드, 포스트잇.',
  }));

  // ───────────── 21차시 (도입) ─────────────
  lessons.push(lesson(21, S2, {
    title: '크레파스와 물감으로 칠한 자리 견주어 보기',
    objective: '크레파스와 물감으로 같은 모양을 칠해 보고, 두 재료의 칠한 느낌과 알맞은 쓰임이 다르다는 것을 말할 수 있다.',
    illustration: {
      prompt: art('two paper flowers side by side, one colored with waxy crayon strokes and one with soft watery paint, crayons and a paintbrush lying below'),
      scene: scene([
        { motif: 'flower', x: 150, y: 150, s: 1.4, color: 'rose' }, { motif: 'flower', x: 330, y: 150, s: 1.4, color: 'mint' },
        { motif: 'hills', y: 228 }, { motif: 'sun', x: 430, y: 50, s: 0.5 },
        { motif: 'text', x: 240, y: 60, text: '크레파스 vs 물감', size: 22 },
      ]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '같은 꽃 밑그림 두 장을 보인다. 한 장은 크레파스로, 한 장은 물감으로 칠했다. "두 꽃을 손끝으로 만지면 어떻게 다를까요? 어느 쪽 색이 더 투명하게 비치나요?" 대답을 듣고 "그럼 아무 재료나 써도 결과가 비슷할까요?"라고 물어 오개념을 꺼낸다. 오늘부터 재료와 용구를 알맞게 고르고 바르게 쓰는 법을 익힌다고 연다. 시연 단추로 재료 카드가 두 칸으로 나뉘는 모습을 보여 준다.',
        student: '크레파스로 칠한 꽃과 물감으로 칠한 꽃이 어떻게 다른지 하나씩 말해 봅시다.',
        demo: { tool: 'mindmap', options: { topic: '칠한 느낌', slots: [{ id: 'cr', label: '크레파스' }, { id: 'pt', label: '물감' }], cards: [{ id: 'd1', text: '미끈하고 두껍게 덮여요' }, { id: 'd2', text: '물기가 있어 번져요' }] }, sequence: [{ sort: { cr: ['d1'], pt: ['d2'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 두 재료의 칠한 느낌 나누기', minutes: 8, tool: 'mindmap',
            teacher: '"이 느낌은 물을 쓰는 재료에서 나올까요, 물을 쓰지 않는 재료에서 나올까요?" 크레파스는 기름과 밀랍이 섞여 두껍고 미끈하게 덮이고, 물감은 물과 섞여 번지고 비치며 넓은 곳을 빨리 칠한다는 기준을 세운다. 실제 크레파스와 물감으로 칠한 견본을 모둠마다 하나씩 돌린다.',
            task: '칠한 느낌 카드를 읽고 크레파스와 물감 가운데 어느 재료에서 나오는지 나누어요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '칠한 느낌 카드를 크레파스와 물감으로 나누어 보세요.',
                toolOptions: { topic: '칠한 느낌', slots: [{ id: 'cr', label: '크레파스' }, { id: 'pt', label: '물감' }], cards: [{ id: 'f1', text: '두껍게 덮여 아래 색이 안 보여요' }, { id: 'f2', text: '손끝에 미끈한 가루가 묻어요' }, { id: 'f3', text: '선을 굵고 또렷하게 그어요' }, { id: 'f4', text: '물기 때문에 색이 번져요' }, { id: 'f5', text: '얇게 칠하면 아래 선이 비쳐요' }, { id: 'f6', text: '넓은 하늘을 빨리 칠해요' }] },
                levels: { challenge: { prompt: '칠한 느낌 카드 여덟 장을 크레파스와 물감으로 나누어 보세요.', toolOptions: { cards: [{ id: 'f1', text: '두껍게 덮여 아래 색이 안 보여요' }, { id: 'f2', text: '손끝에 미끈한 가루가 묻어요' }, { id: 'f3', text: '선을 굵고 또렷하게 그어요' }, { id: 'f4', text: '물기 때문에 색이 번져요' }, { id: 'f5', text: '얇게 칠하면 아래 선이 비쳐요' }, { id: 'f6', text: '넓은 하늘을 빨리 칠해요' }, { id: 'f7', text: '긁으면 아래 색이 드러나요' }, { id: 'f8', text: '마를 때까지 기다려야 해요' }] }, target: { sort: { cr: ['f1', 'f2', 'f3', 'f7'], pt: ['f4', 'f5', 'f6', 'f8'] } } } },
                hints: ['카드마다 물이 있어야 생기는 느낌인지 먼저 따져요. 물기, 번짐, 마르기는 물과 함께 생겨요.', '나눈 카드 가운데 물이 없는데도 생기는 느낌이 물감 칸에 있지 않은지 다시 보세요.', '두껍게 덮임·미끈한 가루·굵은 선은 크레파스, 번짐·비침·넓게 빨리 칠하기는 물감이에요.'],
                target: { sort: { cr: ['f1', 'f2', 'f3'], pt: ['f4', 'f5', 'f6'] } }, difficulty: 0.2 },
              { prompt: '그리고 싶은 곳마다 더 알맞은 재료를 이어 보세요.',
                toolOptions: { mode: 'match', topic: '알맞은 재료', slots: [{ id: 's1', label: '넓고 맑은 여름 하늘' }, { id: 's2', label: '꽃잎의 굵고 또렷한 테두리' }], cards: [{ id: 'c1', text: '물감' }, { id: 'c2', text: '크레파스' }, { id: 'cx', text: '지우개' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'c1', text: '물감' }, { id: 'c2', text: '크레파스' }, { id: 'cx', text: '지우개' }, { id: 'cy', text: '풀' }] } } },
                hints: ['넓은 곳을 빨리 칠하는 재료와 선을 굵고 또렷하게 긋는 재료를 떠올려요.', '이은 재료로 그곳을 칠하면 어떤 느낌일지 견본을 다시 보세요.', '넓은 하늘은 물감, 굵은 테두리는 크레파스가 알맞아요.'],
                target: { match: { s1: 'c1', s2: 'c2' } }, difficulty: 0.2 },
              { prompt: '재료에 대한 생각 가운데 바른 생각만 골라 보세요.',
                toolOptions: { mode: 'pick', topic: '바른 생각', cards: [{ id: 'r1', text: '재료마다 칠한 느낌이 달라요' }, { id: 'r2', text: '그리고 싶은 느낌에 맞는 재료를 골라요' }, { id: 'r3', text: '재료는 무엇을 써도 결과가 비슷해요' }, { id: 'r4', text: '물감은 언제나 크레파스보다 좋아요' }] },
                levels: { challenge: { prompt: '재료에 대한 생각 다섯 가지 가운데 바른 생각만 모두 골라 보세요.', toolOptions: { cards: [{ id: 'r1', text: '재료마다 칠한 느낌이 달라요' }, { id: 'r2', text: '그리고 싶은 느낌에 맞는 재료를 골라요' }, { id: 'r3', text: '재료는 무엇을 써도 결과가 비슷해요' }, { id: 'r4', text: '물감은 언제나 크레파스보다 좋아요' }, { id: 'r5', text: '두 재료를 함께 쓰면 새로운 느낌이 나요' }] }, target: { pick: ['r1', 'r2', 'r5'] } } },
                hints: ['도입의 두 꽃을 떠올려요. 같은 꽃인데 재료에 따라 무엇이 달랐는지 견주어 골라요.', '고른 생각이 두 꽃 견본과 맞는지 하나씩 대어 보세요.', '두 꽃이 달랐으니 "결과가 비슷하다"는 틀렸고, 어느 재료가 늘 좋다는 것도 아니에요.'],
                target: { pick: ['r1', 'r2'] }, difficulty: 0.2,
                predict: { q: '같은 꽃을 크레파스와 물감으로 칠하면 느낌이 같을까요?', options: ['같아요', '달라요'], answer: 1 },
                conclude: '재료마다 칠한 느낌이 달라서, 나타내고 싶은 느낌에 맞추어 재료를 골라야 해요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 두 재료로 같은 모양 칠해 보기 (짝 활동)', minutes: 10, tool: 'mindmap', pair: true,
            teacher: '준비물: 반으로 접은 8절 도화지(왼쪽에 크레파스, 오른쪽에 물감), 크레파스, 물감, 붓, 물통, 걸레, 신문지. 짝과 같은 모양(잎 한 장)을 양쪽에 연필로 그리고, 왼쪽은 크레파스로, 오른쪽은 물감으로 칠한다. 물감은 25차시에 붓 씻기를 자세히 배우니 오늘은 한 색만 쓴다. 다 칠하면 짝과 손끝으로 만져 보고 다른 점을 두 가지 말한다.',
            task: '접은 도화지 왼쪽은 크레파스로, 오른쪽은 물감으로 같은 잎 모양을 칠하고 짝과 만져 보며 다른 점을 말해요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              talk('도화지 양쪽에 같은 잎 모양을 연필로 그리고 "다 했어요"를 누르세요.', '같은 모양 그리기', ['왼쪽', '오른쪽'], ['잎 모양']),
              talk('왼쪽은 크레파스로, 오른쪽은 물감 한 색으로 칠한 뒤 "다 했어요"를 누르세요.', '두 재료로 칠하기', ['크레파스', '물감'], ['두껍게', '번지게']),
              talk('짝과 두 잎을 손끝으로 만져 보고 다른 점 두 가지를 말한 뒤 "다 했어요"를 누르세요.', '다른 점 말하기', ['크레파스 잎', '물감 잎'], ['미끈해요', '매끈해요', '비쳐요']),
            ],
          },
          {
            id: 'a3', title: '활동 3. 함께 쓰면 생기는 느낌 알아보기', minutes: 8, tool: 'mindmap',
            teacher: '"크레파스로 그린 위에 물감을 칠하면 어떻게 될까요?" 크레파스는 기름기가 있어 물감을 밀어낸다는 것을 시연 견본으로 보여 준다(하양 크레파스로 그린 눈송이 위에 남색 물감). 이 차이를 알면 두 재료를 함께 써서 새로운 느낌을 낼 수 있다.',
            task: '크레파스와 물감을 함께 쓴 장면을 읽고, 무엇이 생기는지 이어요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              { prompt: '두 재료를 함께 쓴 장면마다 생기는 모습을 이어 보세요.',
                toolOptions: { mode: 'match', topic: '함께 쓰기', slots: [{ id: 's1', label: '하양 크레파스 눈송이 위에 남색 물감' }, { id: 's2', label: '노랑 크레파스 별 둘레에 검정 물감' }], cards: [{ id: 'c1', text: '눈송이가 물감을 밀어내 하얗게 떠올라요' }, { id: 'c2', text: '별만 반짝 남고 둘레가 밤하늘이 돼요' }, { id: 'cx', text: '크레파스가 물감에 녹아 사라져요' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'c1', text: '눈송이가 물감을 밀어내 하얗게 떠올라요' }, { id: 'c2', text: '별만 반짝 남고 둘레가 밤하늘이 돼요' }, { id: 'cx', text: '크레파스가 물감에 녹아 사라져요' }, { id: 'cy', text: '물감이 크레파스 위에 두껍게 덮여요' }] } } },
                hints: ['크레파스에는 기름기가 있어요. 기름 위에 물이 닿으면 어떻게 되는지 떠올려요.', '이은 모습이 "크레파스가 물감을 밀어낸다"와 맞는지 다시 보세요.', '두 장면 모두 크레파스 그림만 남고 둘레가 물감 색이 돼요. 눈송이는 하얗게 떠오르고 별은 밤하늘에 남아요.'],
                target: { match: { s1: 'c1', s2: 'c2' } }, difficulty: 0.25,
                predict: { q: '크레파스 위에 물감을 칠하면 크레파스 그림이 보일까요?', options: ['보여요', '덮여서 안 보여요'], answer: 0 },
                conclude: '크레파스가 물감을 밀어내서 그림이 떠올라요. 재료의 성질을 알면 함께 써서 새로운 느낌을 낼 수 있어요.' },
              { prompt: '내가 칠한 두 잎을 보고, 다음에 무엇을 그릴 때 어떤 재료를 쓸지 짝과 정한 뒤 "다 했어요"를 누르세요.', free: true, talk: true, difficulty: 0,
                toolOptions: { topic: '다음에 쓸 재료', slots: [{ id: 'k1', label: '그릴 것' }, { id: 'k2', label: '쓸 재료' }], cards: [{ id: 'w1', text: '크레파스' }, { id: 'w2', text: '물감' }, { id: 'w3', text: '둘 다' }] } },
              talk('까닭을 "~해서 ~가 알맞아"로 짝에게 말하고 활동지에 쓴 뒤 "다 했어요"를 누르세요.', '고른 까닭', ['느낌', '재료'], ['넓게', '또렷하게', '번지게']),
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝과 만져 보니 두 잎이 어떻게 달랐나요?" 두세 모둠이 말한다. 붓과 물통을 씻어 정리하는 동안, "재료는 무엇을 써도 결과가 비슷하다"는 생각이 맞는지 다시 묻는다. 다음 시간에는 재료에 알맞은 종이를 고른다고 예고한다. 물감 그림은 창가에 펴 말린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '칠한 느낌', slots: [{ id: 'cr', label: '크레파스' }, { id: 'pt', label: '물감' }], cards: [{ id: 'e1', text: '종이에 물기가 스며요' }, { id: 'e2', text: '굵은 선이 또렷해요' }, { id: 'e3', text: '색이 맑게 비쳐요' }, { id: 'e4', text: '손톱으로 긁어 낼 수 있어요' }] }, prompt: '새 느낌 카드를 크레파스와 물감으로 나누어 보세요.', target: { sort: { cr: ['e2', 'e4'], pt: ['e1', 'e3'] } }, difficulty: 0.2 },
          { type: 'choice', prompt: '하양 크레파스로 그린 그림 위에 파랑 물감을 칠하면 어떻게 될까요?', options: ['크레파스 그림이 하얗게 떠올라요', '모두 파랗게 덮여요', '종이가 찢어져요'], answer: 0, difficulty: 0.2, explain: '크레파스의 기름기가 물감을 밀어내서 그림이 남아요.' },
          { type: 'mood', prompt: '두 재료로 칠해 보니 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '크레파스와 물감',
      items: [
        { type: 'table', prompt: '두 재료로 칠한 잎을 견주어 쓰세요.', columns: ['', '크레파스', '물감'], cells: [['만진 느낌', '', ''], ['보이는 느낌', '', ''], ['알맞은 곳', '', '']] },
        { type: 'choice', prompt: '넓은 하늘을 빨리 칠하기에 알맞은 재료에 ○ 하세요.', options: ['크레파스', '물감', '지우개', '연필'], answer: '물감' },
        { type: 'short', prompt: '다음에 그릴 것과 쓸 재료, 그 까닭을 쓰세요.' },
        { type: 'draw', prompt: '크레파스와 물감을 함께 쓰면 좋을 장면을 그려 보세요.' },
      ],
      easy: {
        note: '크레파스는 두껍고 또렷해요. 물감은 번지고 비치고 넓게 칠해요.',
        items: [
          { type: 'choice', prompt: '물기가 있어 번지는 재료에 ○ 하세요.', options: ['물감', '크레파스'], answer: '물감' },
          { type: 'short', prompt: '두 잎이 다른 점 하나를 쓰세요.' },
          { type: 'draw', prompt: '좋아하는 재료로 잎을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 맞는 칸에 놓으면 바로 표시되고, 두 재료 칠하기는 짝이 먼저 해 보여 줘요.',
      base: '스스로 나누고 이은 뒤 확인해요.',
      challenge: '느낌 카드가 여덟 장이고, 헷갈리는 재료·모습 카드가 하나씩 더 있어요. 바른 생각에는 함께 쓰기도 들어 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 재료는 무엇을 써도 결과가 비슷하다고 여긴다(이 주제의 대표 오개념) → 같은 잎을 두 재료로 칠해 직접 견주게 한다. ② 물감에 물을 너무 많이 써 종이가 운다 → 붓을 물통 가장자리에 훑게 한다. ③ 크레파스 위에 물감이 안 묻는다고 실패로 여긴다 → 성질 때문이라는 것을 알려 주고 함께 쓰기 견본을 보인다. 준비물: 8절 도화지, 크레파스, 물감, 붓, 물통, 걸레, 신문지.',
  }));

  // ───────────── 22차시 (이해) ─────────────
  lessons.push(lesson(22, S2, {
    title: '재료에 알맞은 종이 골라 보기',
    objective: '종이마다 두께와 겉면이 다르다는 것을 알고, 쓰려는 재료와 표현에 알맞은 종이를 까닭을 들어 고를 수 있다.',
    illustration: {
      prompt: art('a fan of different papers, thick drawing paper, thin tracing paper, shiny colored paper and rough cardboard, each paired with a crayon, brush or scissors'),
      scene: scene([
        { motif: 'house', x: 120, y: 210, s: 0.8 }, { motif: 'leaf', x: 240, y: 200, s: 1.2 }, { motif: 'cloud', x: 360, y: 80 },
        { motif: 'star', x: 140, y: 70, s: 0.5 }, { motif: 'hills', y: 230 },
        { motif: 'text', x: 240, y: 140, text: '어떤 종이에 그릴까?', size: 22 },
      ]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '얇은 복사지에 물감을 듬뿍 칠한 견본(울고 찢어진 것)과 두꺼운 도화지에 칠한 견본을 보인다. "같은 물감인데 왜 한 장은 쭈글쭈글해졌을까요?" 종이를 들어 빛에 비추고, 구겨 보고, 손끝으로 쓸어 보게 한다. 종이도 재료처럼 고를 수 있다는 것을 연다. 시연 단추로 종이와 재료 카드가 이어지는 모습을 보여 준다.',
        student: '쭈글쭈글해진 종이와 반듯한 종이가 무엇이 다른지 만져 보고 말해 봅시다.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '종이와 재료', slots: [{ id: 's1', label: '물감으로 넓게 칠하기' }], cards: [{ id: 'c1', text: '두꺼운 도화지' }, { id: 'cx', text: '얇은 복사지' }] }, sequence: [{ match: { s1: 'c1' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 종이의 성질 알아보기', minutes: 8, tool: 'mindmap',
            teacher: '모둠마다 도화지, 복사지, 색종이, 골판지, 기름종이(트레이싱지) 조각을 나누어 준다. "빛에 비추어 보고, 구겨 보고, 쓸어 보세요." 두께(두껍다/얇다), 비침(비친다/안 비친다), 겉면(거칠다/매끄럽다)을 칠판에 쓴다. 문항은 실제로 만져 본 것을 근거로 고르게 한다.',
            task: '종이 조각을 만지고 비추어 보며, 종이마다 맞는 성질을 이어요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              { prompt: '종이마다 가장 잘 맞는 성질을 이어 보세요.',
                toolOptions: { mode: 'match', topic: '종이의 성질', slots: [{ id: 's1', label: '도화지' }, { id: 's2', label: '기름종이' }, { id: 's3', label: '골판지' }], cards: [{ id: 'c1', text: '두꺼워서 물기에 잘 견뎌요' }, { id: 'c2', text: '얇아서 아래 그림이 비쳐요' }, { id: 'c3', text: '울퉁불퉁 줄이 있고 단단해요' }, { id: 'cx', text: '물에 넣으면 녹아 없어져요' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'c1', text: '두꺼워서 물기에 잘 견뎌요' }, { id: 'c2', text: '얇아서 아래 그림이 비쳐요' }, { id: 'c3', text: '울퉁불퉁 줄이 있고 단단해요' }, { id: 'cx', text: '물에 넣으면 녹아 없어져요' }, { id: 'cy', text: '한쪽 면이 반짝이고 얇아요' }] } } },
                hints: ['종이를 빛에 비추어 보고, 손끝으로 쓸어 보고, 두께를 견주어 보며 성질을 떠올려요.', '이은 성질이 손에 든 종이 조각과 정말 같은지 다시 만져 보세요.', '도화지는 두꺼워 물기에 견디고, 기름종이는 얇아 비치고, 골판지는 줄이 있고 단단해요.'],
                target: { match: { s1: 'c1', s2: 'c2', s3: 'c3' } }, difficulty: 0.2 },
              { prompt: '종이 카드를 두꺼운 종이와 얇은 종이로 나누어 보세요.',
                toolOptions: { topic: '종이 두께', slots: [{ id: 'thick', label: '두꺼워요' }, { id: 'thin', label: '얇아요' }], cards: [{ id: 'p1', text: '도화지' }, { id: 'p2', text: '골판지' }, { id: 'p3', text: '복사지' }, { id: 'p4', text: '기름종이' }] },
                levels: { challenge: { prompt: '종이 카드 여섯 장을 두꺼운 종이와 얇은 종이로 나누어 보세요.', toolOptions: { cards: [{ id: 'p1', text: '도화지' }, { id: 'p2', text: '골판지' }, { id: 'p3', text: '복사지' }, { id: 'p4', text: '기름종이' }, { id: 'p5', text: '마분지' }, { id: 'p6', text: '색종이' }] }, target: { sort: { thick: ['p1', 'p2', 'p5'], thin: ['p3', 'p4', 'p6'] } } } },
                hints: ['종이 조각을 손가락 사이에 끼워 두께를 견주어 보고, 빛이 비치는지도 보아요.', '나눈 종이 가운데 빛이 잘 비치는 종이가 두꺼운 칸에 있지 않은지 보세요.', '도화지와 골판지는 두껍고, 복사지와 기름종이는 얇아요.'],
                target: { sort: { thick: ['p1', 'p2'], thin: ['p3', 'p4'] } }, difficulty: 0.15 },
              { prompt: '새 종이마다 가장 잘 맞는 성질을 이어 보세요.',
                toolOptions: { mode: 'match', topic: '종이의 성질', slots: [{ id: 's1', label: '색종이' }, { id: 's2', label: '마분지' }, { id: 's3', label: '복사지' }], cards: [{ id: 'c1', text: '한쪽 면에만 색이 있고 얇아 접기 좋아요' }, { id: 'c2', text: '두껍고 단단해 상자를 만들어요' }, { id: 'c3', text: '얇고 하얗고 매끄러워 연필 글씨가 잘 써져요' }, { id: 'cx', text: '물에 넣으면 녹아 없어져요' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'c1', text: '한쪽 면에만 색이 있고 얇아 접기 좋아요' }, { id: 'c2', text: '두껍고 단단해 상자를 만들어요' }, { id: 'c3', text: '얇고 하얗고 매끄러워 연필 글씨가 잘 써져요' }, { id: 'cx', text: '물에 넣으면 녹아 없어져요' }, { id: 'cy', text: '울퉁불퉁 줄이 속에 숨어 있어요' }] } } },
                hints: ['종이 조각의 앞뒤 색, 두께, 겉면을 하나씩 살펴 성질을 떠올려요.', '이은 성질이 손에 든 종이 조각과 정말 같은지 다시 만져 보세요.', '색종이는 한쪽만 색이 있고 얇고, 마분지는 두껍고 단단하고, 복사지는 얇고 매끄러워요.'],
                target: { match: { s1: 'c1', s2: 'c2', s3: 'c3' } }, difficulty: 0.2 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 하려는 일에 알맞은 종이 고르기', minutes: 9, tool: 'mindmap',
            teacher: '"이 일을 할 때 종이에 무엇이 필요할까요? 물기에 견뎌야 하나요, 비쳐야 하나요, 단단해야 하나요?" 하려는 일에서 필요한 성질을 먼저 말하고, 그 성질을 가진 종이를 고르게 한다. 한 일에 알맞은 종이는 하나뿐이도록 카드를 마련했다.',
            task: '하려는 일에 필요한 종이의 성질을 먼저 떠올리고, 그 성질을 가진 종이를 이어요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              { prompt: '하려는 일마다 가장 알맞은 종이를 이어 보세요.',
                toolOptions: { mode: 'match', topic: '알맞은 종이', slots: [{ id: 's1', label: '물감으로 넓은 바다 칠하기' }, { id: 's2', label: '그림책 그림을 대고 따라 그리기' }, { id: 's3', label: '세워 두는 집 모형 만들기' }], cards: [{ id: 'c1', text: '두꺼운 도화지' }, { id: 'c2', text: '얇은 기름종이' }, { id: 'c3', text: '단단한 골판지' }, { id: 'cx', text: '부드러운 휴지' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'c1', text: '두꺼운 도화지' }, { id: 'c2', text: '얇은 기름종이' }, { id: 'c3', text: '단단한 골판지' }, { id: 'cx', text: '부드러운 휴지' }, { id: 'cy', text: '반짝이는 포장지' }] } } },
                hints: ['일마다 종이가 물기에 견뎌야 하는지, 비쳐야 하는지, 단단히 서야 하는지 먼저 말해요.', '이은 종이로 그 일을 하면 종이가 울거나 쓰러지지 않을지 떠올려 보세요.', '물감 칠하기는 두꺼운 도화지, 따라 그리기는 비치는 기름종이, 세우는 모형은 단단한 골판지예요.'],
                target: { match: { s1: 'c1', s2: 'c2', s3: 'c3' } }, difficulty: 0.25 },
              { prompt: '종이를 고르는 생각 가운데 바른 생각만 골라 보세요.',
                toolOptions: { mode: 'pick', topic: '바른 생각', cards: [{ id: 'r1', text: '물감을 쓸 때는 두꺼운 종이를 골라요' }, { id: 'r2', text: '하려는 일에 필요한 성질을 먼저 생각해요' }, { id: 'r3', text: '종이는 모두 같아서 아무거나 써요' }, { id: 'r4', text: '가장 얇은 종이가 언제나 좋아요' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'r1', text: '물감을 쓸 때는 두꺼운 종이를 골라요' }, { id: 'r2', text: '하려는 일에 필요한 성질을 먼저 생각해요' }, { id: 'r3', text: '종이는 모두 같아서 아무거나 써요' }, { id: 'r4', text: '가장 얇은 종이가 언제나 좋아요' }, { id: 'r5', text: '비싼 종이를 쓰면 그림이 저절로 잘 돼요' }] } } },
                hints: ['도입의 쭈글쭈글한 종이를 떠올려요. 종이를 잘못 고르면 무엇이 생겼는지 생각하며 골라요.', '고른 생각이 활동 1에서 만져 본 종이와 맞는지 대어 보세요.', '종이마다 성질이 달라서 하려는 일에 맞추어 골라요. 언제나 좋은 종이는 없어요.'],
                target: { pick: ['r1', 'r2'] }, difficulty: 0.2,
                predict: { q: '얇은 복사지에 물감을 듬뿍 칠하면 어떻게 될까요?', options: ['반듯해요', '울어서 쭈글쭈글해요'], answer: 1,
                },
                conclude: '종이마다 견디는 힘과 겉면이 달라요. 하려는 일에 맞는 종이를 고르면 그림이 상하지 않아요.' },
              { prompt: '새로 하려는 일마다 가장 알맞은 종이를 이어 보세요.',
                toolOptions: { mode: 'match', topic: '알맞은 종이', slots: [{ id: 's1', label: '접어서 종이비행기 만들기' }, { id: 's2', label: '크레파스 상자를 담을 받침 만들기' }], cards: [{ id: 'c1', text: '얇은 색종이' }, { id: 'c2', text: '두껍고 단단한 마분지' }, { id: 'cx', text: '부드러운 휴지' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'c1', text: '얇은 색종이' }, { id: 'c2', text: '두껍고 단단한 마분지' }, { id: 'cx', text: '부드러운 휴지' }, { id: 'cy', text: '비치는 기름종이' }] } } },
                hints: ['일마다 종이가 잘 접혀야 하는지, 무게를 견뎌야 하는지 먼저 말해요.', '이은 종이로 그 일을 하면 찢어지거나 휘지 않을지 떠올려 보세요.', '접기는 얇은 색종이, 무게를 받치는 받침은 두껍고 단단한 마분지예요.'],
                target: { match: { s1: 'c1', s2: 'c2' } }, difficulty: 0.2 },
            ],
          },
          {
            id: 'a3', title: '활동 3. 종이 바꾸어 칠해 보기 (짝 활동)', minutes: 9, tool: 'mindmap', pair: true,
            teacher: '준비물: 모둠마다 손바닥 크기 도화지·복사지·색종이 한 장씩, 물감 한 색, 붓, 물통, 크레파스. 짝과 나누어 세 종이에 같은 물감을 칠하고, 그 옆에 크레파스로 한 줄을 긋는다. 5분 뒤 짝과 종이를 들어 어느 종이가 울었는지, 크레파스가 잘 묻은 종이는 무엇인지 견준다. 물감은 넓게 펴지 말고 손가락 두 마디만큼만 칠한다.',
            task: '세 종이에 같은 물감과 크레파스를 칠해 보고, 짝과 어느 종이가 어떤 재료에 알맞은지 견주어요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              talk('도화지·복사지·색종이에 같은 물감을 조금씩 칠하고 크레파스로 한 줄씩 그은 뒤 "다 했어요"를 누르세요.', '세 종이에 칠하기', ['물감', '크레파스'], ['도화지', '복사지', '색종이']),
              talk('짝과 종이를 들어 어느 종이가 울었는지, 크레파스가 잘 묻은 종이는 무엇인지 말한 뒤 "다 했어요"를 누르세요.', '견주어 보기', ['울었어요', '반듯해요'], ['도화지', '복사지', '색종이']),
              talk('다음 작품에 쓸 재료와 종이를 정해 활동지에 쓰고, 까닭을 짝에게 말한 뒤 "다 했어요"를 누르세요.', '내 종이 정하기', ['쓸 재료', '쓸 종이'], ['물기에 견뎌요', '잘 묻어요']),
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"세 종이 가운데 물감에 가장 잘 견딘 종이는 무엇이었나요?" 모둠마다 견준 결과를 말한다. 젖은 종이는 창가에 말리고 붓과 물통을 정리한다. 다음 시간에는 색연필·사인펜·파스텔 같은 다른 재료의 자국을 알아본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '알맞은 종이', slots: [{ id: 's1', label: '물감으로 꽃밭 칠하기' }, { id: 's2', label: '무늬 위에 대고 따라 그리기' }], cards: [{ id: 'c1', text: '두꺼운 도화지' }, { id: 'c2', text: '얇은 기름종이' }, { id: 'cx', text: '단단한 골판지' }] }, prompt: '하려는 일마다 가장 알맞은 종이를 이어 보세요.', target: { match: { s1: 'c1', s2: 'c2' } }, difficulty: 0.2 },
          { type: 'choice', prompt: '종이를 고를 때 먼저 생각할 것은 무엇인가요?', options: ['종이의 값', '하려는 일에 필요한 성질', '종이의 이름'], answer: 1, difficulty: 0.15, explain: '물기에 견뎌야 하는지, 비쳐야 하는지처럼 하려는 일에 필요한 성질을 먼저 생각해요.' },
          { type: 'short', prompt: '다음 작품에 쓸 종이와 그 까닭을 쓰세요.' },
        ],
      },
    ],
    worksheet: {
      title: '알맞은 종이',
      items: [
        { type: 'table', prompt: '세 종이에 칠해 본 결과를 쓰세요.', columns: ['종이', '물감을 칠했더니', '크레파스를 그었더니'], cells: [['도화지', '', ''], ['복사지', '', ''], ['색종이', '', '']] },
        { type: 'choice', prompt: '세워 두는 집 모형에 알맞은 종이에 ○ 하세요.', options: ['휴지', '기름종이', '골판지', '복사지'], answer: '골판지' },
        { type: 'short', prompt: '다음 작품에 쓸 재료와 종이, 그 까닭을 쓰세요.' },
        { type: 'draw', prompt: '고른 종이에 그릴 작품을 작게 그려 보세요.' },
      ],
      easy: {
        note: '물감에는 두꺼운 종이, 따라 그리기에는 비치는 종이, 세우기에는 단단한 종이예요.',
        items: [
          { type: 'choice', prompt: '물감에 잘 견디는 종이에 ○ 하세요.', options: ['도화지', '복사지'], answer: '도화지' },
          { type: 'short', prompt: '다음에 쓸 종이를 쓰세요.' },
          { type: 'draw', prompt: '그릴 작품을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '이은 카드에 바로 표시가 생기고, 모둠 실험은 짝이 칠하는 것을 보며 견주어도 돼요.',
      base: '스스로 잇고 나눈 뒤 확인해요.',
      challenge: '종이 카드가 여섯 장이고, 헷갈리는 성질·종이 카드가 하나씩 더 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 종이는 다 같다고 여긴다 → 세 종이에 같은 물감을 칠해 직접 견주게 한다. ② 비싸거나 반짝이는 종이가 좋은 종이라고 여긴다 → 하려는 일에 필요한 성질을 먼저 말하게 한다. ③ 물감을 너무 넓게 칠해 실험 시간이 길어진다 → 손가락 두 마디만큼만 칠하게 한다. 준비물: 도화지·복사지·색종이·골판지·기름종이 조각, 물감, 붓, 물통, 크레파스.',
  }));

  // ───────────── 23차시 (이해) ─────────────
  lessons.push(lesson(23, S2, {
    title: '색연필·사인펜·파스텔의 자국 알아맞히기',
    objective: '색연필, 사인펜, 파스텔이 남기는 자국의 특징을 알고, 자국을 보고 어떤 재료인지 알아맞히며 쓰임을 말할 수 있다.',
    illustration: {
      prompt: art('three paper swatches showing fine colored pencil strokes, bold felt marker lines and soft smudged pastel clouds, with the three tools lying beside them'),
      scene: scene([
        { motif: 'cloud', x: 360, y: 80, s: 1.2 }, { motif: 'leaf', x: 140, y: 190, s: 1.1 }, { motif: 'flower', x: 260, y: 214, color: 'rose' },
        { motif: 'hills', y: 232 },
        { motif: 'text', x: 240, y: 140, text: '이 자국은 무슨 재료?', size: 22 },
      ]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '화면에 세 가지 자국을 띄운다. 가늘고 결이 보이는 선, 진하고 또렷한 선, 뿌옇게 번진 면. "어떤 재료로 그은 자국일까요? 무엇을 보고 그렇게 생각했나요?" 대답마다 "선의 굵기, 진하기, 번짐 가운데 무엇을 보았나요?"를 붙인다. 시연 단추로 자국 카드가 재료에 이어지는 모습을 보여 준다.',
        student: '세 가지 자국을 보고 어떤 재료로 그었을지 하나씩 맞혀 봅시다.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '자국과 재료', slots: [{ id: 's1', label: '뿌옇게 번진 면' }], cards: [{ id: 'c1', text: '파스텔' }, { id: 'cx', text: '사인펜' }] }, sequence: [{ match: { s1: 'c1' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 자국 보고 재료 맞히기', minutes: 8, tool: 'mindmap',
            teacher: '"선이 가는가요, 굵은가요? 진한가요, 연한가요? 손가락으로 문지르면 번지나요?" 세 물음으로 자국을 살핀다. 색연필은 결이 보이며 힘에 따라 진하기가 달라지고, 사인펜은 진하고 고르며 겹치면 번질 수 있고, 파스텔은 가루라 손가락으로 문지르면 부드럽게 번진다.',
            task: '자국의 굵기·진하기·번짐을 살피고, 어떤 재료로 그은 자국인지 이어요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              { prompt: '자국마다 그은 재료를 이어 보세요.',
                toolOptions: { mode: 'match', topic: '자국과 재료', slots: [{ id: 's1', label: '가늘고 결이 보이며 힘주면 진해지는 선' }, { id: 's2', label: '진하고 고르게 또렷한 선' }, { id: 's3', label: '손가락으로 문질러 부드럽게 번진 면' }], cards: [{ id: 'c1', text: '색연필' }, { id: 'c2', text: '사인펜' }, { id: 'c3', text: '파스텔' }, { id: 'cx', text: '지우개' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'c1', text: '색연필' }, { id: 'c2', text: '사인펜' }, { id: 'c3', text: '파스텔' }, { id: 'cx', text: '지우개' }, { id: 'cy', text: '풀' }] } } },
                hints: ['자국마다 굵기, 진하기, 번짐을 하나씩 살펴요. 가루가 있는 재료는 문지르면 번져요.', '이은 재료로 실제로 그으면 그런 자국이 나오는지 떠올려 보세요.', '결이 보이는 가는 선은 색연필, 진하고 고른 선은 사인펜, 문질러 번진 면은 파스텔이에요.'],
                target: { match: { s1: 'c1', s2: 'c2', s3: 'c3' } }, difficulty: 0.2 },
              { prompt: '자국 특징 카드를 색연필과 파스텔로 나누어 보세요.',
                toolOptions: { topic: '자국 특징', slots: [{ id: 'pc', label: '색연필' }, { id: 'ps', label: '파스텔' }], cards: [{ id: 't1', text: '뾰족한 끝으로 작은 곳을 꼼꼼히 칠해요' }, { id: 't2', text: '힘을 빼면 연하게, 주면 진하게 돼요' }, { id: 't3', text: '손가락으로 문지르면 부드럽게 번져요' }, { id: 't4', text: '가루가 손과 옷에 묻어요' }] },
                levels: { challenge: { prompt: '자국 특징 카드 여섯 장을 색연필과 파스텔로 나누어 보세요.', toolOptions: { cards: [{ id: 't1', text: '뾰족한 끝으로 작은 곳을 꼼꼼히 칠해요' }, { id: 't2', text: '힘을 빼면 연하게, 주면 진하게 돼요' }, { id: 't3', text: '손가락으로 문지르면 부드럽게 번져요' }, { id: 't4', text: '가루가 손과 옷에 묻어요' }, { id: 't5', text: '연필처럼 깎아서 써요' }, { id: 't6', text: '하늘의 노을을 뿌옇게 나타내기 좋아요' }] }, target: { sort: { pc: ['t1', 't2', 't5'], ps: ['t3', 't4', 't6'] } } } },
                hints: ['색연필은 연필처럼 단단하고, 파스텔은 가루를 뭉친 것이라는 것을 떠올리며 나누어요.', '나눈 카드 가운데 가루 때문에 생기는 일이 색연필 칸에 있지 않은지 보세요.', '꼼꼼히 칠하기와 힘에 따른 진하기는 색연필, 문질러 번지기와 묻는 가루는 파스텔이에요.'],
                target: { sort: { pc: ['t1', 't2'], ps: ['t3', 't4'] } }, difficulty: 0.2 },
              { prompt: '쓰는 법 카드를 사인펜과 파스텔로 나누어 보세요.',
                toolOptions: { topic: '쓰는 법', slots: [{ id: 'sp', label: '사인펜' }, { id: 'ps', label: '파스텔' }], cards: [{ id: 'u1', text: '다 쓰면 뚜껑을 닫아야 마르지 않아요' }, { id: 'u2', text: '끝을 세게 누르면 뭉개져요' }, { id: 'u3', text: '눕혀 문지르면 넓은 면이 칠해져요' }, { id: 'u4', text: '부러지기 쉬워 살살 쥐어요' }] },
                hints: ['사인펜은 잉크가 든 펜이고, 파스텔은 가루를 뭉친 막대라는 것을 떠올리며 나누어요.', '나눈 카드 가운데 막대를 눕혀 쓰는 일이 사인펜 칸에 있지 않은지 보세요.', '뚜껑 닫기와 끝 뭉개짐은 사인펜, 눕혀 넓게 칠하기와 부러짐은 파스텔이에요.'],
                target: { sort: { sp: ['u1', 'u2'], ps: ['u3', 'u4'] } }, difficulty: 0.2 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 나타내고 싶은 것에 맞는 재료 고르기', minutes: 9, tool: 'mindmap',
            teacher: '"이것을 그리려면 어떤 자국이 필요할까요? 가늘고 꼼꼼한 자국, 진하고 또렷한 자국, 뿌옇게 번진 자국 가운데요." 필요한 자국을 먼저 말하고 그 자국을 내는 재료를 고르게 한다. 한 가지에 알맞은 재료가 하나가 되도록 장면을 마련했다.',
            task: '그리고 싶은 것에 필요한 자국을 먼저 떠올리고, 그 자국을 내는 재료를 이어요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              { prompt: '그리고 싶은 것마다 가장 알맞은 재료를 이어 보세요.',
                toolOptions: { mode: 'match', topic: '알맞은 재료', slots: [{ id: 's1', label: '무당벌레 등의 작은 점 꼼꼼히' }, { id: 's2', label: '포스터 글자 굵고 또렷하게' }, { id: 's3', label: '해 질 녘 하늘 뿌옇게' }], cards: [{ id: 'c1', text: '색연필' }, { id: 'c2', text: '사인펜' }, { id: 'c3', text: '파스텔' }, { id: 'cx', text: '골판지' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'c1', text: '색연필' }, { id: 'c2', text: '사인펜' }, { id: 'c3', text: '파스텔' }, { id: 'cx', text: '골판지' }, { id: 'cy', text: '가위' }] } } },
                hints: ['장면마다 꼼꼼한 자국, 또렷한 자국, 번진 자국 가운데 무엇이 필요한지 먼저 말해요.', '이은 재료가 그 자국을 낼 수 있는지 활동 1을 다시 떠올려 보세요.', '작은 점은 색연필, 굵은 글자는 사인펜, 뿌연 하늘은 파스텔이 알맞아요.'],
                target: { match: { s1: 'c1', s2: 'c2', s3: 'c3' } }, difficulty: 0.25,
                predict: { q: '파스텔로 무당벌레의 작은 점을 꼼꼼히 그릴 수 있을까요?', options: ['쉬워요', '번져서 어려워요'], answer: 1 },
                conclude: '재료마다 잘 내는 자국이 달라요. 나타내고 싶은 것에 필요한 자국을 먼저 생각하면 재료를 고를 수 있어요.' },
              { prompt: '재료 자국에 대한 생각 가운데 바른 생각만 골라 보세요.',
                toolOptions: { mode: 'pick', topic: '바른 생각', cards: [{ id: 'r1', text: '파스텔은 손가락으로 문질러 번지게 할 수 있어요' }, { id: 'r2', text: '색연필은 힘을 달리해 진하기를 바꿔요' }, { id: 'r3', text: '세 재료의 자국은 모두 똑같아요' }, { id: 'r4', text: '사인펜은 문지르면 파스텔처럼 번져요' }] },
                levels: { challenge: { prompt: '재료 자국에 대한 생각 다섯 가지 가운데 바른 생각만 모두 골라 보세요.', toolOptions: { cards: [{ id: 'r1', text: '파스텔은 손가락으로 문질러 번지게 할 수 있어요' }, { id: 'r2', text: '색연필은 힘을 달리해 진하기를 바꿔요' }, { id: 'r3', text: '세 재료의 자국은 모두 똑같아요' }, { id: 'r4', text: '사인펜은 문지르면 파스텔처럼 번져요' }, { id: 'r5', text: '사인펜은 진하고 또렷한 선을 내요' }] }, target: { pick: ['r1', 'r2', 'r5'] } } },
                hints: ['활동 1에서 이은 자국과 특징을 떠올려요. 카드마다 실제로 그런 자국이 나오는지 따져요.', '고른 생각 가운데 실제 자국과 맞지 않는 것이 없는지 견본을 다시 보세요.', '세 재료의 자국은 서로 달라요. 문질러 번지는 것은 가루인 파스텔이에요.'],
                target: { pick: ['r1', 'r2'] }, difficulty: 0.2 },
              { prompt: '새로 그리고 싶은 것마다 가장 알맞은 재료를 이어 보세요.',
                toolOptions: { mode: 'match', topic: '알맞은 재료', slots: [{ id: 's1', label: '친구 얼굴의 속눈썹 가늘게' }, { id: 's2', label: '안개 낀 아침 숲 뿌옇게' }, { id: 's3', label: '모둠 이름표 글자 굵게' }], cards: [{ id: 'c1', text: '색연필' }, { id: 'c2', text: '파스텔' }, { id: 'c3', text: '사인펜' }, { id: 'cx', text: '풀' }] },
                hints: ['장면마다 가는 자국, 번진 자국, 굵고 또렷한 자국 가운데 무엇이 필요한지 먼저 말해요.', '이은 재료가 그 자국을 낼 수 있는지 활동 1을 다시 떠올려 보세요.', '가는 속눈썹은 색연필, 뿌연 안개는 파스텔, 굵은 글자는 사인펜이 알맞아요.'],
                target: { match: { s1: 'c1', s2: 'c2', s3: 'c3' } }, difficulty: 0.25 },
            ],
          },
          {
            id: 'a3', title: '활동 3. 자국 알아맞히기 놀이 (짝 활동)', minutes: 9, tool: 'mindmap', pair: true,
            teacher: '준비물: 색연필, 사인펜, 파스텔(모둠에 한 통), 손바닥 크기 종이 여섯 장, 물티슈. 한 사람이 짝 몰래 세 재료 가운데 하나로 자국을 내고, 짝은 굵기·진하기·번짐을 근거로 맞힌다. 세 번씩 바꾸어 한다. 파스텔을 쓴 뒤에는 물티슈로 손을 닦고 가루를 입으로 불지 않는다.',
            task: '짝 몰래 재료 하나로 자국을 내면, 짝이 굵기·진하기·번짐을 근거로 어떤 재료인지 맞혀요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              talk('짝 몰래 재료 하나로 자국을 내고, 짝이 근거를 들어 맞히면 바꾸어 세 번씩 한 뒤 "다 했어요"를 누르세요.', '자국 맞히기', ['맞힌 재료', '근거'], ['굵기', '진하기', '번짐']),
              talk('세 재료를 한 장에 모두 써서 작은 그림 하나를 그리고, 어디에 어떤 재료를 썼는지 짝에게 말한 뒤 "다 했어요"를 누르세요.', '세 재료 함께 쓰기', ['그린 곳', '쓴 재료'], ['색연필', '사인펜', '파스텔']),
              talk('파스텔 가루를 불지 않고 물티슈로 손과 책상을 닦은 뒤 "다 했어요"를 누르세요.', '정리하기', ['닦은 곳', '쓴 것'], ['손', '책상', '물티슈']),
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝이 맞힌 근거 가운데 가장 잘 맞힌 말은 무엇이었나요?" 두세 명이 짝의 근거를 말한다. 21~23차시에 알아본 다섯 재료(크레파스·물감·색연필·사인펜·파스텔)를 칠판에 쓰고, 재료마다 잘 내는 자국이 다르다는 것을 함께 읽는다. 다음 시간에는 가위와 풀을 바르게 쓰는 법을 익힌다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '자국과 재료', slots: [{ id: 's1', label: '문질러서 뿌옇게 퍼진 구름' }, { id: 's2', label: '진하고 고른 굵은 테두리' }], cards: [{ id: 'c1', text: '파스텔' }, { id: 'c2', text: '사인펜' }, { id: 'cx', text: '색연필' }] }, prompt: '자국마다 그은 재료를 이어 보세요.', target: { match: { s1: 'c1', s2: 'c2' } }, difficulty: 0.2 },
          { type: 'choice', prompt: '나뭇잎의 가는 잎맥을 꼼꼼히 그리기에 가장 알맞은 재료는 무엇인가요?', options: ['파스텔', '색연필', '물감을 듬뿍 묻힌 큰 붓'], answer: 1, difficulty: 0.2, explain: '색연필은 끝이 뾰족해 가는 선을 꼼꼼히 그을 수 있어요.' },
          { type: 'mood', prompt: '자국 알아맞히기 놀이는 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '세 재료의 자국',
      items: [
        { type: 'table', prompt: '세 재료로 자국을 내고 특징을 쓰세요.', columns: ['재료', '자국 붙이는 칸', '굵기·진하기·번짐'], cells: [['색연필', '', ''], ['사인펜', '', ''], ['파스텔', '', '']] },
        { type: 'choice', prompt: '손가락으로 문지르면 부드럽게 번지는 재료에 ○ 하세요.', options: ['색연필', '사인펜', '파스텔', '연필'], answer: '파스텔' },
        { type: 'short', prompt: '포스터 글자를 쓸 때 고를 재료와 그 까닭을 쓰세요.' },
        { type: 'draw', prompt: '세 재료를 모두 써서 작은 그림을 그리고, 쓴 곳에 재료 이름을 쓰세요.' },
      ],
      easy: {
        note: '색연필은 가늘고 꼼꼼, 사인펜은 진하고 또렷, 파스텔은 뿌옇게 번져요.',
        items: [
          { type: 'choice', prompt: '진하고 또렷한 선을 내는 재료에 ○ 하세요.', options: ['사인펜', '파스텔'], answer: '사인펜' },
          { type: 'short', prompt: '가장 써 보고 싶은 재료를 쓰세요.' },
          { type: 'draw', prompt: '고른 재료로 그림을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '이은 카드에 바로 표시가 생기고, 맞히기 놀이에서는 짝이 근거 낱말(굵기·진하기·번짐)을 짚어 줘요.',
      base: '스스로 잇고 나눈 뒤 확인해요.',
      challenge: '특징 카드가 여섯 장이고, 헷갈리는 재료 카드가 하나씩 더 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 자국을 보고 색으로만 재료를 맞히려 한다 → 굵기·진하기·번짐 세 물음을 칠판에 써 둔다. ② 파스텔 가루를 입으로 분다 → 물티슈로 닦게 하고 가루를 마시지 않게 한다. ③ 사인펜을 세게 눌러 끝이 뭉개진다 → 살살 긋게 한다. 준비물: 색연필, 사인펜, 파스텔, 손바닥 종이, 물티슈.',
  }));

  // ───────────── 24차시 (기능) ─────────────
  lessons.push(lesson(24, S2, {
    title: '가위와 풀을 바르게 쥐고 오려 붙이기',
    objective: '가위와 풀을 바르게 쥐고 안전하게 다루며, 선을 따라 오린 조각을 알맞은 양의 풀로 붙일 수 있다.',
    safety: ['가위는 앉아서만 쓰고, 날을 닫아서 들고 다녀요.', '가위를 건넬 때는 손잡이를 친구 쪽으로 내밀어요.', '종이를 잡은 손가락은 가위 날에서 멀리 둬요.'],
    illustration: {
      prompt: art('child hands holding safety scissors correctly, cutting along a curved line on colored paper, a glue stick and neatly pasted shapes on a board nearby'),
      scene: scene([
        { motif: 'leaf', x: 140, y: 170, s: 1.3 }, { motif: 'flower', x: 260, y: 200, color: 'mint' }, { motif: 'star', x: 360, y: 90, s: 0.7 },
        { motif: 'hills', y: 230 }, { motif: 'cloud', x: 120, y: 60 },
        { motif: 'text', x: 260, y: 140, text: '싹둑싹둑 안전하게', size: 22 },
      ]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '가위를 들고 두 가지로 걸어 보인다. ㄱ 날을 벌린 채 위로 들고 걷기, ㄴ 날을 닫아 손으로 감싸 아래로 들고 걷기. "어느 쪽이 안전할까요? 왜 그럴까요?" 이어 가위 손잡이 구멍에 엄지와 다른 손가락을 넣는 모습, 종이를 돌리며 오리는 모습을 보여 준다. 풀을 너무 많이 바른 견본(종이가 울고 끈적함)도 보인다. 안전 약속 세 가지를 함께 읽는다. 시연 단추로 오리고 붙이는 차례가 놓이는 모습을 보여 준다.',
        student: '가위를 들고 다니는 두 모습 가운데 안전한 쪽을 고르고 까닭을 말해 봅시다.',
        demo: { tool: 'story', options: { slots: ['첫째', '둘째'], cards: [{ id: 'a', text: '선을 따라 오려요', motif: 'leaf' }, { id: 'b', text: '뒷면에 풀을 발라 붙여요', motif: 'star' }] }, sequence: [{ order: ['a', 'b'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 안전한 행동과 오려 붙이는 차례', minutes: 8, tool: 'story',
            teacher: '"오리기 전에 무엇을 먼저 할까요? 붙이기 전에는요?" 선을 그리고, 큰 둘레를 대강 오린 뒤, 선을 따라 종이를 돌리며 오리고, 뒷면 가장자리에 풀을 조금 바르는 차례를 세운다. 둘째 문항은 쓴 뒤 정리하는 차례다.',
            task: '오리고 붙이는 일을 카드로 읽고, 먼저 할 일부터 차례대로 놓아요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              { prompt: '색종이 하트를 오려 붙이는 일을 차례대로 놓아 보세요.',
                toolOptions: { slots: ['첫째', '둘째', '셋째', '넷째'], cards: [{ id: 'a', text: '색종이 뒷면에 하트를 그려요', motif: 'heart' }, { id: 'b', text: '하트 둘레를 크게 대강 오려요', motif: 'leaf' }, { id: 'c', text: '종이를 돌리며 선을 따라 오려요', motif: 'star' }, { id: 'd', text: '뒷면 가장자리에 풀을 조금 발라 붙여요', motif: 'flower' }] },
                levels: { challenge: { prompt: '색종이 하트를 오려 붙이는 일을 차례대로 놓아 보세요. 하면 안 되는 일 카드 하나는 남겨 두세요.', toolOptions: { slots: ['첫째', '둘째', '셋째', '넷째'], cards: [{ id: 'a', text: '색종이 뒷면에 하트를 그려요', motif: 'heart' }, { id: 'b', text: '하트 둘레를 크게 대강 오려요', motif: 'leaf' }, { id: 'c', text: '종이를 돌리며 선을 따라 오려요', motif: 'star' }, { id: 'd', text: '뒷면 가장자리에 풀을 조금 발라 붙여요', motif: 'flower' }, { id: 'x', text: '앞면 가득 풀을 두껍게 발라요', motif: 'cloud' }] } } },
                hints: ['카드마다 "이 일을 하려면 먼저 무엇이 되어 있어야 할까?"를 물어요. 오릴 선이 없으면 오릴 수 없어요.', '대강 오리기와 선을 따라 오리기 가운데 어느 쪽이 먼저인지 놓은 자리를 다시 보세요.', '하트 그리기 → 대강 오리기 → 선 따라 오리기 → 뒷면 가장자리에 풀 바르기 차례예요.'],
                target: { order: ['a', 'b', 'c', 'd'] }, difficulty: 0.2 },
              { prompt: '가위와 풀을 다 쓴 뒤 정리하는 일을 차례대로 놓아 보세요.',
                toolOptions: { slots: ['첫째', '둘째', '셋째'], cards: [{ id: 'a', text: '가위 날을 닫아요', motif: 'star' }, { id: 'b', text: '풀 뚜껑을 딸깍 닫아요', motif: 'cloud' }, { id: 'c', text: '종이 부스러기를 모아 버려요', motif: 'leaf' }] },
                hints: ['다친 일이 생기지 않도록 가장 위험한 것부터 정리해요. 무엇이 손을 다치게 할 수 있는지 떠올려요.', '날을 벌린 가위가 책상에 남은 채로 부스러기를 치우면 어떨지 놓은 자리를 다시 보세요.', '가위 날 닫기 → 풀 뚜껑 닫기 → 부스러기 모아 버리기 차례예요.'],
                target: { order: ['a', 'b', 'c'] }, difficulty: 0.15 },
              { prompt: '친구에게 가위를 건네는 일을 차례대로 놓아 보세요.',
                toolOptions: { slots: ['첫째', '둘째', '셋째'], cards: [{ id: 'a', text: '가위 날을 닫아요', motif: 'star' }, { id: 'b', text: '닫은 날을 손으로 감싸 쥐어요', motif: 'leaf' }, { id: 'c', text: '손잡이를 친구 쪽으로 내밀어요', motif: 'heart' }] },
                hints: ['날이 열려 있으면 감쌀 수 없어요. 카드마다 앞에 무엇이 되어 있어야 하는지 따져요.', '날을 감싸기 전에 손잡이를 내밀면 날이 어디를 향하는지 놓은 자리를 다시 보세요.', '날 닫기 → 날 감싸 쥐기 → 손잡이를 친구 쪽으로 내밀기 차례예요.'],
                target: { order: ['a', 'b', 'c'] }, difficulty: 0.2 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 안전한 행동 고르기', minutes: 8, tool: 'mindmap',
            teacher: '"이렇게 하면 누가 다칠 수 있나요?" 행동마다 다칠 수 있는 사람과 까닭을 말하게 한다. 풀은 다치지는 않지만 너무 많이 바르면 종이가 울고 잘 마르지 않는다는 것을 함께 짚는다.',
            task: '가위와 풀을 쓰는 행동 카드 가운데 안전하고 바른 행동만 골라요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              { prompt: '가위를 쓰는 행동 가운데 안전한 행동만 골라 보세요.',
                toolOptions: { mode: 'pick', topic: '안전한 가위', cards: [{ id: 'r1', text: '앉아서만 가위를 써요' }, { id: 'r2', text: '손잡이 쪽을 친구에게 내밀어 건네요' }, { id: 'r3', text: '종이 잡은 손가락을 날에서 멀리 둬요' }, { id: 'r4', text: '가위를 벌린 채 들고 걸어 다녀요' }, { id: 'r5', text: '친구 머리카락을 장난으로 오려요' }] },
                levels: { challenge: { prompt: '가위를 쓰는 행동 일곱 가지 가운데 안전한 행동만 모두 골라 보세요.', toolOptions: { cards: [{ id: 'r1', text: '앉아서만 가위를 써요' }, { id: 'r2', text: '손잡이 쪽을 친구에게 내밀어 건네요' }, { id: 'r3', text: '종이 잡은 손가락을 날에서 멀리 둬요' }, { id: 'r4', text: '가위를 벌린 채 들고 걸어 다녀요' }, { id: 'r5', text: '친구 머리카락을 장난으로 오려요' }, { id: 'r6', text: '다 쓴 가위는 날을 닫아 통에 넣어요' }, { id: 'r7', text: '가위 날을 친구 쪽으로 향해 건네요' }] }, target: { pick: ['r1', 'r2', 'r3', 'r6'] } } },
                hints: ['행동마다 "이렇게 하면 누가 다칠 수 있을까?"를 물어요. 다칠 사람이 없으면 안전한 행동이에요.', '고른 행동 가운데 날이 사람 쪽을 향하거나 열려 있는 것이 없는지 다시 보세요.', '앉아서 쓰기, 손잡이로 건네기, 손가락을 날에서 멀리 두기가 안전해요.'],
                target: { pick: ['r1', 'r2', 'r3'] }, difficulty: 0.15 },
              { prompt: '풀을 바르는 모습마다 생기는 일을 이어 보세요.',
                toolOptions: { mode: 'match', topic: '풀 바르기', slots: [{ id: 's1', label: '뒷면 가장자리에 조금 바르기' }, { id: 's2', label: '앞면 가득 두껍게 바르기' }], cards: [{ id: 'c1', text: '반듯하게 붙고 금방 말라요' }, { id: 'c2', text: '종이가 울고 손이 끈적해요' }, { id: 'cx', text: '종이 색이 바뀌어요' }] },
                levels: { challenge: { toolOptions: { cards: [{ id: 'c1', text: '반듯하게 붙고 금방 말라요' }, { id: 'c2', text: '종이가 울고 손이 끈적해요' }, { id: 'cx', text: '종이 색이 바뀌어요' }, { id: 'cy', text: '조각이 저절로 오려져요' }] } } },
                hints: ['도입의 풀을 너무 많이 바른 견본을 떠올려요. 풀이 많을수록 종이가 어떻게 되었는지 생각해요.', '이은 결과가 견본에서 본 모습과 같은지 다시 보세요.', '조금 바르면 반듯하게 붙고, 가득 두껍게 바르면 종이가 울고 끈적해요.'],
                target: { match: { s1: 'c1', s2: 'c2' } }, difficulty: 0.2,
                predict: { q: '풀을 많이 바를수록 더 잘 붙을까요?', options: ['더 잘 붙어요', '종이가 울어요'], answer: 1 },
                conclude: '풀은 뒷면 가장자리에 조금만 발라도 잘 붙어요. 많이 바르면 종이가 울고 잘 마르지 않아요.' },
              { prompt: '가위로 오리는 모습을 바른 모습과 고칠 모습으로 나누어 보세요.',
                toolOptions: { topic: '가위로 오리기', slots: [{ id: 'ok', label: '바른 모습' }, { id: 'fix', label: '고칠 모습' }], cards: [{ id: 'g1', text: '엄지는 위 구멍, 다른 손가락은 아래 구멍에 넣어요' }, { id: 'g2', text: '곡선은 가위는 두고 종이를 돌려요' }, { id: 'g3', text: '가위를 빙글빙글 돌리며 오려요' }, { id: 'g4', text: '종이 잡은 손가락 쪽으로 날을 밀어요' }] },
                hints: ['모습마다 "이렇게 하면 선을 따라 잘 오려질까, 손이 안전할까?"를 물어요.', '나눈 카드 가운데 손가락이 날 가까이 가는 모습이 바른 칸에 있지 않은지 보세요.', '구멍에 바르게 손가락 넣기와 종이 돌리기가 바르고, 가위 돌리기와 손가락 쪽으로 밀기는 고쳐요.'],
                target: { sort: { ok: ['g1', 'g2'], fix: ['g3', 'g4'] } }, difficulty: 0.2 },
            ],
          },
          {
            id: 'a3', title: '활동 3. 오려 붙여 꽃밭 꾸미기 (짝 활동)', minutes: 10, tool: 'mindmap', pair: true,
            teacher: '준비물: 안전 가위, 딱풀, 색종이, 도화지, 휴지통. 색종이 뒷면에 꽃잎과 잎을 그리고 오려 도화지에 꽃밭을 꾸민다. 짝은 서로의 가위 쥐는 손과 종이 잡은 손가락 자리를 봐 주고, 위험하면 "손가락!"이라고 알려 준다. 곡선은 가위를 움직이지 말고 종이를 돌리며 오린다. 가위를 쓰는 동안 교사는 돌아다니며 쥐는 법을 바로잡는다.',
            task: '색종이에 꽃잎과 잎을 그리고 종이를 돌리며 오려, 뒷면 가장자리에 풀을 조금 발라 꽃밭을 꾸며요. 짝은 손가락 자리를 봐 줘요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              talk('색종이 뒷면에 꽃잎 다섯 장과 잎 두 장을 그리고 "다 했어요"를 누르세요.', '오릴 선 그리기', ['꽃잎', '잎'], ['뒷면에 그리기']),
              talk('종이를 돌리며 선을 따라 오리고, 짝이 가위 쥔 손과 손가락 자리를 봐 준 뒤 "다 했어요"를 누르세요.', '선 따라 오리기', ['잘한 점', '조심할 점'], ['종이 돌리기', '손가락!']),
              talk('뒷면 가장자리에 풀을 조금 발라 도화지에 꽃밭을 꾸미고, 가위 날을 닫고 풀 뚜껑을 닫은 뒤 "다 했어요"를 누르세요.', '붙이고 정리하기', ['붙인 것', '정리한 것'], ['가장자리에 조금', '날 닫기', '뚜껑 닫기']),
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝이 "손가락!"이라고 알려 준 적이 있나요? 그때 어떻게 고쳤나요?" 두세 명이 말한다. 책상의 종이 부스러기를 모아 버리고, 가위는 날을 닫아 통에 넣는다. 꽃밭 작품은 풀이 마르도록 펴 둔다. 다음 시간에는 붓을 씻으며 색을 바꾸는 법을 익힌다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '안전한 행동', cards: [{ id: 'e1', text: '가위 날을 닫아 들고 다녀요' }, { id: 'e2', text: '손잡이를 친구 쪽으로 내밀어 건네요' }, { id: 'e3', text: '서서 걸어가며 오려요' }, { id: 'e4', text: '종이를 잡은 손가락 앞으로 날을 밀어요' }] }, prompt: '가위를 쓰는 행동 가운데 안전한 행동만 골라 보세요.', target: { pick: ['e1', 'e2'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '동그란 곡선을 오릴 때 알맞은 방법은 무엇인가요?', options: ['가위는 두고 종이를 돌리며 오려요', '가위를 빙글빙글 돌려요', '손으로 찢어요'], answer: 0, difficulty: 0.2, explain: '가위는 제자리에서 여닫고, 종이를 돌리면 곡선을 매끄럽게 오릴 수 있어요.' },
          { type: 'mood', prompt: '가위와 풀을 써 보니 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '가위와 풀 바르게 쓰기',
      items: [
        { type: 'short', prompt: '가위를 쓸 때 지킬 안전 약속 두 가지를 쓰세요.' },
        { type: 'choice', prompt: '풀을 바르는 알맞은 방법에 ○ 하세요.', options: ['앞면 가득 두껍게', '뒷면 가장자리에 조금', '책상에 먼저 바르고', '손가락에 바르고'], answer: '뒷면 가장자리에 조금' },
        { type: 'table', prompt: '오늘 오려 붙인 것을 쓰세요.', columns: ['오린 것', '잘 된 점', '다음에 고칠 점'], cells: [['꽃잎', '', ''], ['잎', '', '']] },
        { type: 'draw', prompt: '선을 따라 오려 보세요: 아래 칸에 큰 하트를 그리고 오려 붙여요.' },
      ],
      easy: {
        note: '가위는 앉아서, 날은 닫아서, 손잡이로 건네요. 풀은 가장자리에 조금.',
        items: [
          { type: 'choice', prompt: '안전하게 가위를 건네는 방법에 ○ 하세요.', options: ['손잡이를 내밀어요', '날을 내밀어요'], answer: '손잡이를 내밀어요' },
          { type: 'short', prompt: '오린 것 하나를 쓰세요.' },
          { type: 'draw', prompt: '하트를 그려 오려 붙여요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 놓으면 맞는지 바로 보이고, 오리기는 곧은 선과 큰 곡선만 그려 오려요.',
      base: '스스로 차례를 놓고 고른 뒤 확인해요.',
      challenge: '하면 안 되는 카드가 섞이고 안전 행동 카드가 일곱 장이에요. 꽃잎은 작은 곡선이 많은 모양으로 그려 오려요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 곡선을 오릴 때 가위를 돌린다 → 가위는 제자리, 종이를 돌리게 한다. ② 가위 구멍에 손가락을 깊이 넣어 손이 아프다 → 엄지는 위 구멍, 가운데 손가락은 아래 구멍에 첫 마디까지만 넣게 한다. ③ 풀을 많이 바를수록 잘 붙는다고 여긴다 → 견본으로 짚는다. 왼손잡이 학생에게는 왼손잡이용 가위를 준비한다. 준비물: 안전 가위(왼손잡이용 포함), 딱풀, 색종이, 도화지, 휴지통.',
  }));

  // ───────────── 25차시 (기능) ─────────────
  lessons.push(lesson(25, S2, {
    title: '붓을 씻고 물기를 닦으며 색 바꾸어 칠하기',
    objective: '물감을 칠하다 다른 색으로 바꿀 때 붓을 씻고 물기를 닦아야 하는 까닭을 알고, 붓·물통·팔레트를 바른 차례로 다룰 수 있다.',
    safety: ['물통은 책상 안쪽에 두고, 팔꿈치로 치지 않게 조심해요.', '붓을 휘둘러 물감을 튀기지 않아요.', '물을 갈러 갈 때는 물통을 두 손으로 들고 천천히 걸어요.'],
    illustration: {
      prompt: art('a paintbrush being rinsed in a clear water cup and dabbed on a cloth, with clean blue and yellow paint wells beside a muddy brown mixture'),
      scene: scene([
        { motif: 'wave', x: 160, y: 210 }, { motif: 'sun', x: 360, y: 80, s: 0.8 }, { motif: 'cloud', x: 120, y: 60 },
        { motif: 'hills', y: 232 },
        { motif: 'text', x: 260, y: 150, text: '씻고, 닦고, 바꾸고', size: 22 },
      ]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '두 가지 견본을 보인다. ㄱ 파랑을 칠한 붓을 씻지 않고 바로 노랑을 묻혀 칠한 해(탁한 초록빛), ㄴ 붓을 씻고 닦은 뒤 칠한 맑은 노랑 해. "어느 해가 우리가 원한 노랑인가요? ㄱ은 왜 이런 색이 되었을까요?" "붓을 씻지 않아도 색은 섞이지 않는다"는 생각을 꺼내 둔다. 안전 약속 세 가지를 함께 읽는다. 시연 단추로 붓 씻는 차례가 놓이는 모습을 보여 준다.',
        student: '맑은 노랑 해와 탁한 해를 견주어 보고, 탁해진 까닭을 말해 봅시다.',
        demo: { tool: 'story', options: { slots: ['첫째', '둘째'], cards: [{ id: 'a', text: '물통에 붓을 흔들어 씻어요', motif: 'wave' }, { id: 'b', text: '걸레에 물기를 닦아요', motif: 'cloud' }] }, sequence: [{ order: ['a', 'b'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 색을 바꾸는 차례 놓기', minutes: 8, tool: 'story',
            teacher: '"다음 색을 묻히기 전에 붓에 무엇이 남아 있으면 안 될까요? 앞의 물감, 그리고 너무 많은 물이에요." 씻기 → 닦기 → 묻히기 → 칠하기 차례를 세운다. 물기를 닦지 않으면 색이 묽어져 흐르고, 씻지 않으면 섞여 탁해진다는 까닭을 함께 말한다.',
            task: '물감을 칠하다 색을 바꾸는 일을 카드로 읽고, 먼저 할 일부터 차례대로 놓아요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              { prompt: '파랑 하늘을 칠한 뒤 노랑 해를 칠하는 차례대로 놓아 보세요.',
                toolOptions: { slots: ['첫째', '둘째', '셋째', '넷째'], cards: [{ id: 'a', text: '물통에서 붓을 흔들어 파랑을 씻어요', motif: 'wave' }, { id: 'b', text: '걸레에 붓을 대어 물기를 닦아요', motif: 'cloud' }, { id: 'c', text: '팔레트의 노랑을 붓에 묻혀요', motif: 'sun' }, { id: 'd', text: '해를 칠해요', motif: 'star' }] },
                levels: { challenge: { prompt: '파랑 하늘을 칠한 뒤 노랑 해를 칠하는 차례대로 놓아 보세요. 하면 안 되는 일 카드 하나는 남겨 두세요.', toolOptions: { slots: ['첫째', '둘째', '셋째', '넷째'], cards: [{ id: 'a', text: '물통에서 붓을 흔들어 파랑을 씻어요', motif: 'wave' }, { id: 'b', text: '걸레에 붓을 대어 물기를 닦아요', motif: 'cloud' }, { id: 'c', text: '팔레트의 노랑을 붓에 묻혀요', motif: 'sun' }, { id: 'd', text: '해를 칠해요', motif: 'star' }, { id: 'x', text: '파랑이 묻은 붓으로 바로 노랑을 묻혀요', motif: 'leaf' }] } } },
                hints: ['다음 색을 묻히기 전에 붓에 앞 물감과 너무 많은 물이 남아 있으면 안 돼요. 무엇을 먼저 없애야 할지 따져요.', '씻기와 닦기 가운데 어느 쪽이 먼저인지 놓은 자리를 다시 보세요. 닦은 뒤 씻으면 다시 젖어요.', '씻기 → 물기 닦기 → 노랑 묻히기 → 해 칠하기 차례예요.'],
                target: { order: ['a', 'b', 'c', 'd'] }, difficulty: 0.2 },
              { prompt: '물감 그림을 다 그린 뒤 정리하는 일을 차례대로 놓아 보세요.',
                toolOptions: { slots: ['첫째', '둘째', '셋째'], cards: [{ id: 'a', text: '붓을 깨끗이 씻어 털을 가지런히 해요', motif: 'leaf' }, { id: 'b', text: '물통의 물을 두 손으로 들고 가서 버려요', motif: 'wave' }, { id: 'c', text: '팔레트와 책상을 걸레로 닦아요', motif: 'cloud' }] },
                hints: ['물통의 물이 있어야 붓을 씻을 수 있어요. 무엇을 하려면 무엇이 남아 있어야 하는지 따져요.', '물통을 먼저 비우면 붓은 어디에서 씻을지 놓은 자리를 다시 보세요.', '붓 씻기 → 물 버리기 → 팔레트와 책상 닦기 차례예요.'],
                target: { order: ['a', 'b', 'c'] }, difficulty: 0.2 },
              { prompt: '물감 칠하기를 준비하는 일을 차례대로 놓아 보세요.',
                toolOptions: { slots: ['첫째', '둘째', '셋째'], cards: [{ id: 'a', text: '책상에 신문지를 깔아요', motif: 'cloud' }, { id: 'b', text: '팔레트에 물감을 콩알만큼 짜요', motif: 'sun' }, { id: 'c', text: '붓에 물감을 묻혀 칠해요', motif: 'leaf' }] },
                hints: ['물감이 책상에 묻지 않게 하려면 무엇이 맨 먼저 있어야 할지 따져요.', '팔레트에 물감이 없는데 붓에 묻힐 수 있는지 놓은 자리를 다시 보세요.', '신문지 깔기 → 물감 짜기 → 붓에 묻혀 칠하기 차례예요.'],
                target: { order: ['a', 'b', 'c'] }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 붓을 씻지 않으면 어떻게 될까', minutes: 9, tool: 'emotion',
            teacher: '"친구가 이렇게 하면 그림이 어떻게 될까요?" 결과 글을 소리 내어 읽게 하고, 고른 까닭을 짝에게 말하게 한다. 탁해진 색은 씻은 붓으로 다시 덧칠해도 처음 색으로 돌아오기 어렵다는 것을 짚는다.',
            task: '친구가 물감을 칠하는 장면을 읽고, 어떻게 하면 좋을지 골라요.',
            levels: { easy: {}, base: { revealAfterCheck: true }, challenge: { revealAfterCheck: true } },
            items: [
              { prompt: '민지가 빨강 사과를 칠한 붓으로 초록 잎을 칠하려 해요. 민지는 어떻게 하면 좋을까요?',
                toolOptions: { mode: 'branch', who: '민지', motif: 'leaf', situation: '빨강 사과를 다 칠하고, 같은 붓으로 초록 잎을 칠하려고 해요.', choices: [
                  { id: 'a', text: '붓을 물통에 씻고 걸레에 닦은 뒤 초록을 묻혀요', result: '맑은 초록 잎이 빨강 사과 옆에서 또렷해요', mood: '뿌듯함' },
                  { id: 'b', text: '빨강이 묻은 붓에 바로 초록을 묻혀요', result: '잎이 흙탕물 같은 갈색이 되어 사과와 잘 구별되지 않아요', mood: '속상함', why: '붓에 남은 빨강이 초록과 섞이면 색이 탁해져요.' },
                  { id: 'c', text: '붓을 물통에 씻고 바로 초록을 묻혀요', result: '물이 너무 많아 잎 색이 묽게 흘러내려요', mood: '걱정', why: '씻은 뒤에는 걸레에 물기를 닦아야 색이 묽어지지 않아요.' }] },
                levels: { challenge: { toolOptions: { choices: [
                  { id: 'a', text: '붓을 물통에 씻고 걸레에 닦은 뒤 초록을 묻혀요', result: '맑은 초록 잎이 빨강 사과 옆에서 또렷해요', mood: '뿌듯함' },
                  { id: 'b', text: '빨강이 묻은 붓에 바로 초록을 묻혀요', result: '잎이 흙탕물 같은 갈색이 되어 사과와 잘 구별되지 않아요', mood: '속상함', why: '붓에 남은 빨강이 초록과 섞이면 색이 탁해져요.' },
                  { id: 'c', text: '붓을 물통에 씻고 바로 초록을 묻혀요', result: '물이 너무 많아 잎 색이 묽게 흘러내려요', mood: '걱정', why: '씻은 뒤에는 걸레에 물기를 닦아야 색이 묽어지지 않아요.' },
                  { id: 'd', text: '붓을 휴지로만 문질러 닦고 초록을 묻혀요', result: '털 속에 남은 빨강이 나와 잎 가장자리가 탁해져요', mood: '아쉬움', why: '털 속 물감은 물에 흔들어 씻어야 빠져요.' }] } } },
                hints: ['붓에 앞 물감이 남아 있는지, 물이 너무 많은지 두 가지를 모두 살펴요.', '고른 방법을 쓰면 잎 색이 맑고 진하게 나오는지 결과 글을 다시 읽어 보세요.', '씻어서 앞 물감을 없애고, 닦아서 물기를 줄인 뒤 새 색을 묻혀요.'],
                target: { choice: 'a' }, difficulty: 0.2 },
              { prompt: '준호의 물통 물이 탁한 갈색이 되었어요. 준호는 어떻게 하면 좋을까요?',
                toolOptions: { mode: 'branch', who: '준호', motif: 'wave', situation: '여러 색을 씻다 보니 물통 물이 탁한 갈색이 되었는데, 이제 하양 구름을 칠하려고 해요.', choices: [
                  { id: 'a', text: '탁한 물에 붓을 씻고 하양을 묻혀요', result: '구름이 누렇게 물들어 맑은 하양이 나오지 않아요', mood: '속상함', why: '탁한 물에 씻으면 붓에 다시 물감이 묻어요.' },
                  { id: 'b', text: '물통을 두 손으로 들고 가서 물을 갈아 와요', result: '맑은 물에 씻은 붓으로 새하얀 구름이 나와요', mood: '기쁨' },
                  { id: 'c', text: '물통을 들고 뛰어가 빨리 갈아 와요', result: '물이 출렁여 바닥과 친구 옷에 쏟아져요', mood: '걱정', why: '물통은 두 손으로 들고 천천히 걸어요.' }] },
                levels: { challenge: { toolOptions: { choices: [
                  { id: 'a', text: '탁한 물에 붓을 씻고 하양을 묻혀요', result: '구름이 누렇게 물들어 맑은 하양이 나오지 않아요', mood: '속상함', why: '탁한 물에 씻으면 붓에 다시 물감이 묻어요.' },
                  { id: 'b', text: '물통을 두 손으로 들고 가서 물을 갈아 와요', result: '맑은 물에 씻은 붓으로 새하얀 구름이 나와요', mood: '기쁨' },
                  { id: 'c', text: '물통을 들고 뛰어가 빨리 갈아 와요', result: '물이 출렁여 바닥과 친구 옷에 쏟아져요', mood: '걱정', why: '물통은 두 손으로 들고 천천히 걸어요.' },
                  { id: 'd', text: '짝의 물통에 몰래 붓을 씻어요', result: '짝의 물도 탁해져 짝이 속상해해요', mood: '미안함', why: '내 물통은 내가 갈아 써요.' }] } } },
                hints: ['붓을 씻는 물이 맑아야 붓도 깨끗해져요. 안전 약속도 함께 떠올려요.'],
                target: { choice: 'b' }, difficulty: 0.25,
                predict: { q: '탁한 물에 씻은 붓으로 하양을 칠하면 맑을까요?', options: ['맑아요', '탁해져요'], answer: 1 },
                conclude: '붓을 씻는 물도 맑아야 해요. 물이 탁해지면 안전하게 걸어가 갈아 와요.' },
              { prompt: '서윤이가 칠하기를 잠깐 멈추고 쉬려고 해요. 붓은 어떻게 두면 좋을까요?',
                toolOptions: { mode: 'branch', who: '서윤', motif: 'leaf', situation: '칠하다가 잠깐 쉬려고 하는데, 붓에 물감이 묻어 있어요.', choices: [
                  { id: 'a', text: '붓을 물통에 꽂아 둔 채 쉬어요', result: '붓 털이 물통 바닥에 눌려 휘어 버려요', mood: '속상함', why: '물통에 꽂아 두면 털이 눌려 모양이 망가져요.' },
                  { id: 'b', text: '붓을 씻어 털을 가지런히 하고 팔레트 옆에 눕혀 둬요', result: '쉬고 나서도 붓 끝이 뾰족해 바로 칠할 수 있어요', mood: '편안함' },
                  { id: 'c', text: '붓을 휘둘러 물을 털고 책상에 던져 둬요', result: '물감 물이 짝의 그림과 옷에 튀어요', mood: '미안함', why: '붓은 휘두르지 않고 걸레에 대어 물기를 닦아요.' }] },
                hints: ['쉬는 동안 붓 털이 상하지 않는지, 둘레에 물감이 튀지 않는지 두 가지를 살펴요.', '고른 방법대로 두면 쉬고 난 뒤 붓 끝이 어떤지 결과 글을 다시 읽어 보세요.', '붓은 씻어 털을 가지런히 해서 눕혀 둬요. 꽂아 두거나 휘두르지 않아요.'],
                target: { choice: 'b' }, difficulty: 0.2 },
            ],
          },
          {
            id: 'a3', title: '활동 3. 세 가지 색으로 바꾸어 칠하기 (짝 활동)', minutes: 9, tool: 'mindmap', pair: true,
            teacher: '준비물: 8절 도화지에 미리 그린 "하늘·해·잔디" 밑그림, 물감(파랑·노랑·초록), 붓, 물통, 걸레, 팔레트, 신문지. 파랑 하늘 → 노랑 해 → 초록 잔디 차례로 칠하며, 색을 바꿀 때마다 짝이 "씻고, 닦고!"를 외쳐 준다. 짝은 활동지에 친구가 씻기·닦기를 했는지 ○ 표시한다. 물통은 책상 안쪽에 둔다.',
            task: '파랑 하늘, 노랑 해, 초록 잔디 차례로 칠하며 색을 바꿀 때마다 씻고 닦아요. 짝은 "씻고, 닦고!"를 외치고 표에 ○ 해요.',
            levels: { easy: { live: true }, base: {}, challenge: {} },
            items: [
              talk('신문지를 깔고 물통을 책상 안쪽에 둔 뒤 파랑으로 하늘을 칠하고 "다 했어요"를 누르세요.', '파랑 하늘', ['준비한 것', '칠한 곳'], ['신문지', '물통 안쪽', '하늘']),
              talk('짝이 "씻고, 닦고!"를 외치면 붓을 씻고 닦아 노랑 해, 다시 씻고 닦아 초록 잔디를 칠한 뒤 "다 했어요"를 누르세요.', '색 바꾸어 칠하기', ['씻었어요', '닦았어요'], ['노랑 해', '초록 잔디']),
              talk('짝의 표를 보고 씻기·닦기를 빠뜨린 때가 있었는지 말한 뒤, 붓을 씻고 물통 물을 버리고 "다 했어요"를 누르세요.', '돌아보고 정리하기', ['잘한 점', '빠뜨린 때'], ['씻기', '닦기', '물 버리기']),
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝의 표에 ○가 모두 있었나요? 빠뜨린 때 색은 어땠나요?" 두세 명이 말한다. 붓은 털을 손가락으로 가지런히 모아 눕혀 말리고, 팔레트와 책상을 닦는다. 그림은 창가에 펴 말린다. 다음 시간에는 종이를 찢어 붙이는 것과 오려 붙이는 것을 견주어 본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { slots: ['첫째', '둘째', '셋째'], cards: [{ id: 'a', text: '물통에 붓을 씻어요', motif: 'wave' }, { id: 'b', text: '걸레에 물기를 닦아요', motif: 'cloud' }, { id: 'c', text: '새 색을 묻혀요', motif: 'sun' }] }, prompt: '빨강을 칠한 붓으로 파랑을 칠하기 전에 할 일을 차례대로 놓아 보세요.', target: { order: ['a', 'b', 'c'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '붓을 씻은 뒤 걸레에 물기를 닦지 않으면 어떻게 될까요?', options: ['색이 묽어져 흘러내려요', '색이 더 진해져요', '붓 털이 길어져요'], answer: 0, difficulty: 0.2, explain: '붓에 물이 너무 많으면 물감이 묽어져 흐르고 종이가 울어요.' },
          { type: 'mood', prompt: '붓을 씻고 닦으며 칠해 보니 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '씻고, 닦고, 바꾸고',
      items: [
        { type: 'table', prompt: '짝이 색을 바꿀 때마다 씻기·닦기를 했으면 ○ 하세요.', columns: ['바꾼 색', '씻었나요', '닦았나요'], cells: [['파랑 → 노랑', '', ''], ['노랑 → 초록', '', '']] },
        { type: 'short', prompt: '붓을 씻지 않고 다른 색을 묻히면 어떻게 되는지 쓰세요.' },
        { type: 'choice', prompt: '물통 물이 탁해졌을 때 알맞은 행동에 ○ 하세요.', options: ['그대로 써요', '뛰어가서 갈아요', '두 손으로 들고 천천히 걸어가 갈아요', '짝 물통을 써요'], answer: '두 손으로 들고 천천히 걸어가 갈아요' },
        { type: 'draw', prompt: '색을 바꾸는 차례(씻기 → 닦기 → 묻히기)를 그림으로 그려 보세요.' },
      ],
      easy: {
        note: '색을 바꿀 때: 물통에 씻고 → 걸레에 닦고 → 새 색을 묻혀요.',
        items: [
          { type: 'choice', prompt: '색을 바꾸기 전에 먼저 할 일에 ○ 하세요.', options: ['붓 씻기', '바로 묻히기'], answer: '붓 씻기' },
          { type: 'short', prompt: '오늘 칠한 색 세 가지를 쓰세요.' },
          { type: 'draw', prompt: '하늘·해·잔디를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 놓으면 맞는지 바로 보이고, 친구 장면에서 고른 결과가 바로 보여요. 칠하기는 짝이 먼저 한 색을 해 보여 줘요.',
      base: '스스로 차례를 놓고 고른 뒤 확인하고, 확인한 뒤 다른 보기의 결과도 볼 수 있어요.',
      challenge: '하면 안 되는 카드가 섞이고, 친구 장면에 헷갈리는 보기가 하나씩 더 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 붓을 씻지 않아도 색은 섞이지 않는다고 여긴다(이 주제의 대표 오개념) → 도입의 두 해 견본으로 짚는다. ② 씻은 뒤 물기를 닦지 않아 색이 흐른다 → 걸레에 붓을 눕혀 대게 한다. ③ 붓을 물통 바닥에 눌러 털이 휜다 → 흔들어 씻게 한다. 물통이 쏟아지면 걸레로 바로 닦고 교사에게 알리게 한다. 준비물: 밑그림 도화지, 물감, 붓, 물통, 걸레, 팔레트, 신문지.',
  }));

  // @@MORE@@

  PaperLessons.registerUnit({
    id: 'g3-art-1-02', schema: 'edu-unit.v1', catalogUnit: UNIT,
    grade: 3, subject: '미술', unitTitle: TITLE,
    flow: '@@FLOW@@',
    refs: {},
    lessons,
  });
})();
