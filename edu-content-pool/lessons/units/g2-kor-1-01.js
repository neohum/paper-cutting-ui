/* 2학년 1학기 국어 1. 만나서 반가워요! — 15차시 (대화의 말차례 → 바른 자세로 발표 → 주변의 것을 소개하는 글)
 * 예문·대화·인물(가명)은 모두 이 단원을 위해 새로 지었다. 교과서 지문을 옮기지 않았다.
 */
(function () {
  const U = { id: 'g2-kor-1-01', catalogUnit: 'g2-국어-1학기-1', unitTitle: '1. 만나서 반가워요!' };
  const L = (n, rest) => Object.assign({
    id: `${U.id}-${String(n).padStart(2, '0')}`, schema: 'edu-lesson.v1',
    catalog: { unit: U.catalogUnit, lesson: n },
    grade: 2, subject: '국어', unitTitle: U.unitTitle,
    minutes: 40, formats: ['chromebook', 'projector', 'print'],
  }, rest);
  const ART = (what, layers) => ({
    prompt: `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`,
    scene: { viewBox: [480, 270], layers },
  });
  const MOOD = { type: 'mood', prompt: '오늘 공부는 어땠나요?' };
  const TALK = ['[2국01-03]']; const SPEAK = ['[2국01-04]']; const WRITE = ['[2국03-03]'];

  const lessons = [
    // ───────────────────────── 1. 도입: 말차례가 무엇인지 ─────────────────────────
    L(1, {
      title: '새 친구와 나눈 대화에서 말차례 찾기',
      objective: '친구들의 대화를 보고 말차례를 지킨 대화와 지키지 않은 대화를 나누고, 말차례를 넘기는 신호를 두 가지 찾을 수 있다.',
      standards: TALK,
      illustration: ART('two children meeting for the first time in a bright new classroom on the first day of second grade, waving hello with speech bubbles above them', [
        { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 110, y: 52 }, { motif: 'hills', y: 206 },
        { motif: 'house', x: 120, y: 214 }, { motif: 'tree', x: 360, y: 214 }, { motif: 'flower', x: 250, y: 222 },
        { motif: 'text', x: 240, y: 140, text: '만나서 반가워!', size: 24 },
      ]),
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '"2학년이 되어 처음 만난 친구에게 어떤 말을 했나요?" 두세 명이 대답하면 시연 단추로 하윤이가 "만나서 반가워"라고 인사하는 말풍선을 보여 준다. "두 사람이 한꺼번에 말하면 어떻게 될까요?"라고 물어 말이 겹치면 아무 말도 들리지 않는다는 것을 끌어낸다. 그리고 "한 사람씩 돌아가며 말하는 것을 말차례라고 해요"라고 오늘 낱말을 칠판에 쓴다.',
          student: '그림 속 친구들처럼 새 친구를 만나면 어떤 말을 하고 싶나요?',
          demo: { tool: 'story', options: { mode: 'fill', shuffle: false, cards: [{ id: 'hi', text: '만나서 반가워' }, { id: 'bye', text: '잘 가' }], slots: [{ id: 'b1', who: '하윤', motif: 'flower', label: '안녕? 나는 하윤이야. ___.' }] }, sequence: [{ fill: { b1: 'hi' } }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 처음 만난 친구와 말 주고받기', minutes: 8, tool: 'story',
              teacher: '"하윤이가 인사했어요. 이제 누가 말할 차례일까요?" 말풍선을 채운 뒤 "한 사람이 말하면 다른 사람이 대답해요. 공 던지기처럼 말이 오가요"라고 정리한다. 셋째 문항에서 서준이의 말을 맨 앞에 놓는 학생에게 "서준이는 무엇을 듣고 대답했을까요?"라고 되묻는다.',
              task: '처음 만난 친구와 주고받는 말을 말풍선에 넣고, 대화가 오간 차례대로 놓아 봅시다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '하윤이가 처음 만난 친구에게 인사해요. 말풍선에 알맞은 말을 넣어 보세요.', toolOptions: { mode: 'fill', cards: [{ id: 'hi', text: '만나서 반가워' }, { id: 'eat', text: '잘 먹겠습니다' }, { id: 'go', text: '다녀오겠습니다' }], slots: [{ id: 'b1', who: '하윤', motif: 'flower', label: '안녕? 나는 하윤이야. ___.' }] }, target: { fill: { b1: 'hi' } }, difficulty: 0.05 },
                { prompt: '준호가 묻고 민지가 대답해요. 두 말풍선에 알맞은 말을 넣어 보세요.', toolOptions: { mode: 'fill', cards: [{ id: 'ask', text: '뭘 좋아해' }, { id: 'draw', text: '그림 그리기' }, { id: 'bye', text: '잘 가' }], slots: [{ id: 'q', who: '준호', motif: 'sun', label: '나는 줄넘기를 좋아해. 너는 ___?' }, { id: 'a', who: '민지', motif: 'flower', label: '나는 ___를 좋아해.' }] }, target: { fill: { q: 'ask', a: 'draw' } }, difficulty: 0.15 },
                { prompt: '지우와 서준이가 처음 만났어요. 대화가 오간 차례대로 놓아 보세요.', toolOptions: { mode: 'order', slots: ['첫째', '둘째', '셋째', '넷째'], cards: [{ id: 'd1', text: '지우: 안녕, 나는 지우야.' }, { id: 'd2', text: '서준: 반가워! 너는 뭘 좋아해?' }, { id: 'd3', text: '지우: 나는 강아지가 좋아.' }, { id: 'd4', text: '서준: 나도 강아지 좋아!' }] }, target: { order: ['d1', 'd2', 'd3', 'd4'] }, difficulty: 0.2,
                  conclude: '물으면 대답하고, 대답을 들으면 다시 말해요. 말이 한 번씩 오가요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 말차례를 지킨 대화 고르기', minutes: 10, tool: 'mindmap',
              teacher: '"끝까지 듣고 말했나요, 중간에 말했나요?" 카드마다 이 질문 하나로 가르게 한다. 도전 단계 첫 문항의 "그런데!" 카드는 목소리가 작아도 친구 말이 끝나기 전이니 끼어든 것이라고 짚는다. 준호 문항 예상에서 "목소리가 크니까 잘한 거예요"를 고른 학생이 꼭 있다. "목소리가 커도 친구 말을 끊었다면 말차례를 지킨 걸까요?"라고 묻고, 말차례는 목소리 크기가 아니라 순서라는 것을 짚는다.',
              task: '대화 모습 카드를 읽고 말차례를 지켰는지, 지키지 않았는지 나누어 넣어요.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '대화 모습을 말차례를 지킨 쪽과 지키지 않은 쪽으로 나누어 보세요.', toolOptions: { topic: '쉬는 시간 대화', slots: [{ id: 'ok', label: '말차례를 지켰어요' }, { id: 'no', label: '말차례를 안 지켰어요' }], cards: [{ id: 'wait', text: '친구 말이 끝난 뒤 말해요' }, { id: 'cut', text: '친구 말 중간에 끼어들어요' }, { id: 'ask', text: '"너는 어때?" 하고 물어요' }, { id: 'alone', text: '혼자서만 계속 말해요' }] }, target: { sort: { ok: ['wait', 'ask'], no: ['cut', 'alone'] } }, difficulty: 0.1,
                  levels: {
                    easy: { prompt: '대화 모습 두 장을 말차례를 지킨 쪽과 지키지 않은 쪽으로 나누어 보세요.', toolOptions: { cards: [{ id: 'wait', text: '친구 말이 끝난 뒤 말해요' }, { id: 'cut', text: '친구 말 중간에 끼어들어요' }] }, target: { sort: { ok: ['wait'], no: ['cut'] } } },
                    challenge: { prompt: '쉬는 시간 대화 모습이 여섯 장이에요. 헷갈리는 카드도 있어요. 끝까지 들었는지 따져 나누어 보세요.', toolOptions: { cards: [{ id: 'wait', text: '친구 말이 끝난 뒤 말해요' }, { id: 'cut', text: '친구 말 중간에 끼어들어요' }, { id: 'but', text: '친구 말이 끝나기 전에 "그런데!" 해요' }, { id: 'ask', text: '"너는 어때?" 하고 물어요' }, { id: 'me2', text: '다 듣고 "나도!" 하며 이어 말해요' }, { id: 'alone', text: '혼자서만 계속 말해요' }] }, target: { sort: { ok: ['wait', 'ask', 'me2'], no: ['cut', 'but', 'alone'] } } },
                  } },
                { prompt: '더 해 보기: 모둠에서 놀이를 정해요. 말차례를 지킨 모습과 지키지 않은 모습을 나누어 보세요.', extra: true, toolOptions: { topic: '놀이 정하기', slots: [{ id: 'ok', label: '말차례를 지켰어요' }, { id: 'no', label: '말차례를 안 지켰어요' }], cards: [{ id: 'hand', text: '손을 들고 기다려요' }, { id: 'turn', text: '한 사람씩 돌아가며 말해요' }, { id: 'same', text: '두 사람이 한꺼번에 말해요' }, { id: 'name', text: '다음 친구 이름을 불러 줘요' }, { id: 'grab', text: '친구 말을 가로채 끝내요' }] }, target: { sort: { ok: ['hand', 'turn', 'name'], no: ['same', 'grab'] } }, difficulty: 0.2 },
                { prompt: '준호는 목소리가 아주 커요. 준호의 모습을 알맞은 쪽에 넣어 보세요.', toolOptions: { topic: '준호의 대화', slots: [{ id: 'ok', label: '말차례를 지켰어요' }, { id: 'no', label: '말차례를 안 지켰어요' }], cards: [{ id: 'loud', text: '큰 목소리로 친구 말을 끊어요' }, { id: 'nod', text: '고개를 끄덕이며 끝까지 들어요' }, { id: 'pass', text: '말을 마치고 "네 차례야" 해요' }] }, target: { sort: { ok: ['nod', 'pass'], no: ['loud'] } }, difficulty: 0.25,
                  predict: { q: '목소리가 큰 준호는 말차례를 잘 지킨 걸까요?', options: ['네, 잘 들리니까요', '끝까지 들었는지 봐야 해요'], answer: 1 },
                  conclude: '목소리가 커도 친구 말을 끊으면 말차례를 지키지 않은 거예요. 순서를 봐요.' },
              ],
            },
            {
              id: 'a3', title: '활동 3. 말차례를 넘기는 신호 찾기', minutes: 8, tool: 'mindmap',
              teacher: '"내 말이 끝났다는 것을 친구가 어떻게 알 수 있을까요?" 신호 카드를 고르기 전에 교사가 직접 "나는 떡볶이를 좋아해. 너는?" 하며 한 학생에게 손바닥을 내밀어 보인다. 하품하기·등 돌리기를 고른 학생에게는 "그러면 친구는 말해도 된다고 느낄까요?"라고 묻는다.',
              task: '말을 마치고 친구에게 차례를 넘길 때 쓰는 신호만 골라 바구니에 넣어요.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '말차례를 넘기는 신호만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '말차례를 넘기는 신호', cards: [{ id: 'q', text: '"너는 어때?" 하고 묻기' }, { id: 'nm', text: '친구 이름 불러 주기' }, { id: 'yawn', text: '하품하기' }, { id: 'back', text: '등 돌리기' }] }, target: { pick: ['q', 'nm'] }, difficulty: 0.1 },
                { prompt: '모둠 친구에게 차례를 넘길 때 쓰는 신호를 모두 골라 보세요.', toolOptions: { mode: 'pick', topic: '차례를 넘겨요', cards: [{ id: 'palm', text: '손바닥으로 친구 가리키기' }, { id: 'eye', text: '친구를 보며 웃어 주기' }, { id: 'more', text: '"그리고, 그리고" 계속 말하기' }, { id: 'end', text: '"내 이야기는 끝이야" 하기' }, { id: 'cover', text: '친구 입 막기' }] }, target: { pick: ['palm', 'eye', 'end'] }, difficulty: 0.25 },
                { prompt: '더 해 보기: 상황마다 쓰기 좋은 신호를 이어 보세요.', extra: true,
                  hints: ['함께 이야기하는 친구가 몇 명인지 떠올려요. 여럿이면 다음에 누가 말할지 알려 줘야 해요.', '둘이서만 이야기할 때와 여럿이 이야기할 때, 다음 사람을 어떻게 정하는지 견주어 봐요.'],
                  toolOptions: { mode: 'match', topic: '이럴 땐 이렇게', slots: [{ id: 's1', label: '모둠 친구가 넷이에요' }, { id: 's2', label: '짝과 둘이 이야기해요' }], cards: [{ id: 'nm', text: '"다음은 서준이!" 하고 부르기' }, { id: 'q', text: '"너는?" 하고 묻기' }, { id: 'shout', text: '"내가 또 할래!" 외치기' }] }, target: { match: { s1: 'nm', s2: 'q' } }, difficulty: 0.3,
                  conclude: '친구가 여럿이면 이름을 불러 줘야 누가 말할 차례인지 알아요.' },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"오늘 찾은 신호 가운데 내일 쉬는 시간에 써 볼 것 하나를 말해 볼까요?" 출구 1번을 틀린 학생은 끼어들기와 기다리기를 헷갈린 것이니 다음 시간 시작에 "끝까지 들었나요?" 질문으로 다시 가른다. 2번에서 큰 목소리를 고른 학생 수를 세어 둔다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { topic: '점심시간 대화', slots: [{ id: 'ok', label: '지켰어요' }, { id: 'no', label: '안 지켰어요' }], cards: [{ id: 'w', text: '숟가락을 놓고 끝까지 들어요' }, { id: 'c', text: '친구 말에 "아니야!" 하고 끊어요' }, { id: 'p', text: '"너도 말해 봐" 하고 넘겨요' }] }, prompt: '점심시간 대화 모습을 말차례를 지켰는지에 따라 나누어 보세요.', target: { sort: { ok: ['w', 'p'], no: ['c'] } }, difficulty: 0.15 },
            { type: 'choice', prompt: '말차례를 가장 잘 지킨 친구는 누구인가요?', options: ['가장 큰 목소리로 말한 친구', '친구 말이 끝난 뒤 말한 친구', '가장 많이 말한 친구'], answer: 1, difficulty: 0.15, explain: '말차례는 목소리 크기나 말한 양이 아니라, 친구 말이 끝날 때까지 기다렸는지로 봐요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '말차례를 지켜요',
        items: [
          { type: 'choice', prompt: '말차례를 지킨 모습에 ○ 하세요.', options: ['친구 말 중간에 끼어들어요', '친구 말이 끝난 뒤 말해요', '두 사람이 한꺼번에 말해요'], answer: '친구 말이 끝난 뒤 말해요' },
          { type: 'check', prompt: '말차례를 넘기는 신호를 모두 골라 ✓ 하세요.', options: ['"너는 어때?" 하고 묻기', '친구 이름 불러 주기', '하품하기', '손바닥으로 친구 가리키기'], answer: '"너는 어때?" 하고 묻기, 친구 이름 불러 주기, 손바닥으로 친구 가리키기' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '나는 줄넘기를 좋아해. 너는 무엇을 ______?', answer: '좋아해' },
          { type: 'short', prompt: '친구 말 중간에 끼어들면 친구 마음은 어떨지 쓰세요.' },
          { type: 'draw', prompt: '새 친구와 인사하는 내 모습을 그리고, 말풍선에 할 말을 쓰세요.' },
        ],
        easy: {
          note: '"끝까지 들었나요?"를 먼저 생각해요. 끝까지 듣고 말하면 말차례를 지킨 거예요.',
          items: [
            { type: 'choice', prompt: '말차례를 지킨 모습에 ○ 하세요.', options: ['친구 말 중간에 끼어들어요', '친구 말이 끝난 뒤 말해요'], answer: '친구 말이 끝난 뒤 말해요' },
            { type: 'choice', prompt: '말차례를 넘기는 말에 ○ 하세요.', options: ['"너는 어때?"', '"조용히 해!"'], answer: '"너는 어때?"' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '안녕? 나는 하윤이야. 만나서 ______.', answer: '반가워' },
            { type: 'draw', prompt: '새 친구와 인사하는 내 모습을 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '활동 2 첫 문항은 카드 두 장으로 시작해요. 카드를 맞는 칸에 넣으면 초록 테두리가 생기고, 틀린 칸에 넣으면 까닭을 말해 주고 되돌아와요.',
        base: '카드를 모두 넣은 뒤 확인을 눌러 스스로 고쳐요.',
        challenge: '활동 2 첫 문항에 "그런데!"처럼 헷갈리는 카드 두 장이 더 나오고, 더 해 보기(다섯 장 나누기, 상황 짝 짓기)까지 풀어요. 고른 까닭을 짝에게 한 문장으로 말해요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 목소리가 큰 쪽이 말차례를 잘 지킨 것이라고 고른다 → "끝까지 들었나요?" 한 가지로만 가르게 한다. ② 말을 많이 하는 것을 잘한 대화로 여긴다 → 혼자만 말하면 친구는 말할 차례를 잃는다. ③ 말차례 신호를 몸짓으로만 생각한다 → "너는?"처럼 말로 넘기는 신호도 있다. 첫 시간이라 학생 이름 대신 그림 속 가명 인물로 이야기하게 한다.',
    }),

    // ───────────────────────── 2. 연습: 여러 자리에서 말차례 ─────────────────────────
    L(2, {
      title: '전화·모둠·수업 시간의 말차례 알아보기',
      objective: '전화 대화, 모둠 회의, 수업 시간처럼 자리가 바뀌어도 누가 말할 차례인지 찾고 차례를 기다리는 방법을 고를 수 있다.',
      standards: TALK,
      illustration: ART('a child talking on a toy telephone at home while classmates sit in a small circle raising hands at school', [
        { motif: 'moon', x: 410, y: 60, s: 0.8 }, { motif: 'star', x: 360, y: 40 }, { motif: 'cloud', x: 120, y: 54 },
        { motif: 'hills', y: 208 }, { motif: 'house', x: 110, y: 216 }, { motif: 'house', x: 380, y: 218, color: 'sky', s: 0.9 },
        { motif: 'text', x: 240, y: 140, text: '지금 누구 차례일까요?', size: 22 },
      ]),
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '교사가 학생 한 명과 전화 흉내를 낸다. 두 사람이 동시에 "여보세요?"를 말하게 해 본 뒤 "얼굴이 안 보이는 전화에서는 말차례를 어떻게 알까요?"라고 묻는다. 시연 단추로 전화 대화 장면이 차례대로 놓이는 모습을 보여 주며 "말이 멈추면 내 차례예요"라고 짚는다. 지난 시간의 신호(이름 부르기, "너는?")를 떠올리게 한다.',
          student: '전화로 이야기할 때와 얼굴을 보고 이야기할 때는 무엇이 다를까요?',
          demo: { tool: 'story', options: { mode: 'order', shuffle: false, slots: ['첫째', '둘째', '셋째'], cards: [{ id: 'p1', text: '할머니: 여보세요?' }, { id: 'p2', text: '민지: 할머니, 저 민지예요!' }, { id: 'p3', text: '할머니: 아이고, 우리 민지구나.' }] }, sequence: [{ order: ['p1', 'p2', 'p3'] }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 전화 대화의 차례 맞추기', minutes: 9, tool: 'story',
              teacher: '"전화를 건 사람과 받은 사람 중 누가 먼저 말할까요?" 받는 사람이 "여보세요?"로 먼저 말한다는 것을 짚는다. 셋째 문항에서 "끊을게"가 먼저 오는 학생에게 "인사 없이 끊으면 상대는 어떤 마음일까요?"라고 묻는다.',
              task: '얼굴이 보이지 않는 전화 대화예요. 말이 오간 차례대로 장면 카드를 놓아 봅시다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '준호가 친구 서준이에게 전화를 걸었어요. 대화 차례대로 놓아 보세요.', toolOptions: { mode: 'order', slots: ['첫째', '둘째', '셋째'], cards: [{ id: 't1', text: '서준: 여보세요?' }, { id: 't2', text: '준호: 서준아, 나 준호야.' }, { id: 't3', text: '서준: 어, 준호야! 무슨 일이야?' }] }, target: { order: ['t1', 't2', 't3'] }, difficulty: 0.1 },
                { prompt: '하윤이가 이모와 통화해요. 대화 차례대로 놓아 보세요.', toolOptions: { mode: 'order', slots: ['첫째', '둘째', '셋째', '넷째'], cards: [{ id: 'm1', text: '이모: 하윤아, 학교는 재미있니?' }, { id: 'm2', text: '하윤: 네! 새 친구를 사귀었어요.' }, { id: 'm3', text: '이모: 와, 친구 이름이 뭐야?' }, { id: 'm4', text: '하윤: 지우예요. 같이 그림 그려요.' }] }, target: { order: ['m1', 'm2', 'm3', 'm4'] }, difficulty: 0.2 },
                { prompt: '전화를 끝낼 때의 차례예요. 차례대로 놓아 보세요.', toolOptions: { mode: 'order', slots: ['첫째', '둘째', '셋째'], cards: [{ id: 'e1', text: '민지: 이제 숙제하러 갈게.' }, { id: 'e2', text: '지우: 그래, 내일 학교에서 보자!' }, { id: 'e3', text: '민지: 응, 안녕! 끊을게.' }] }, target: { order: ['e1', 'e2', 'e3'] }, difficulty: 0.25,
                  predict: { q: '전화를 끊기 전에 무엇을 먼저 할까요?', options: ['바로 끊어요', '끝낸다고 말하고 인사해요'], answer: 1 },
                  conclude: '전화는 얼굴이 안 보여서, 끝낸다고 먼저 말하고 인사한 뒤 끊어요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 모둠 회의에서 차례 기다리기', minutes: 9, tool: 'emotion',
              teacher: '"하고 싶은 말이 생겼는데 친구가 아직 말하고 있어요. 어떻게 할까요?" 보기를 고르면 결과가 보인다. "잊어버릴까 봐 바로 말해야 해요"라는 학생에게는 "잊지 않게 손가락 하나를 접어 두거나 낱말 하나를 적어 두면 돼요"라고 기다리는 방법을 알려 준다.',
              task: '모둠에서 일어난 일을 읽고, 말차례를 지키려면 어떻게 할지 골라 결과를 봐요.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '서준이가 모둠 이름을 말하는 중인데 좋은 생각이 났어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '나', situation: '서준이가 모둠 이름을 말하고 있는데 나에게 좋은 생각이 났어요.', choices: [{ id: 'wait', text: '손가락을 접어 기억하고 기다려요', result: '서준이 말이 끝나고 내 생각도 잘 들려요', mood: '편안함' }, { id: 'cut', text: '"내 생각이 더 좋아!" 하고 끼어들어요', result: '서준이가 하던 말을 잊어버려요', mood: '속상함', why: '말이 끊긴 서준이의 마음을 떠올려 봐요.' }] }, target: { choice: 'wait' }, difficulty: 0.1 },
                { prompt: '모둠에서 두 친구가 한꺼번에 말을 시작했어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '지우와 준호', situation: '지우와 준호가 동시에 "나는…" 하고 말을 시작했어요.', choices: [{ id: 'louder', text: '더 큰 소리로 말해 이겨요', result: '둘 다 목소리만 커지고 아무도 못 들어요', mood: '화남', why: '목소리를 키우면 말차례가 정해질까요?' }, { id: 'yield', text: '"너 먼저 말해" 하고 양보해요', result: '한 사람씩 말해서 둘 다 잘 들려요', mood: '고마움' }, { id: 'stop', text: '둘 다 말을 그만둬요', result: '아무 생각도 나누지 못해요', mood: '속상함', why: '둘 다 그만두면 생각을 나눌 수 있을까요?' }] }, target: { choice: 'yield' }, difficulty: 0.2,
                  levels: { easy: { toolOptions: { choices: [{ id: 'louder', text: '더 큰 소리로 말해 이겨요', result: '둘 다 목소리만 커지고 아무도 못 들어요', mood: '화남', why: '목소리를 키우면 말차례가 정해질까요?' }, { id: 'yield', text: '"너 먼저 말해" 하고 양보해요', result: '한 사람씩 말해서 둘 다 잘 들려요', mood: '고마움' }] } } } },
                { prompt: '모둠 친구 넷이 돌아가며 말해요. 말하는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', slots: ['첫째', '둘째', '셋째', '넷째'], cards: [{ id: 'g1', text: '민지: 나는 숨바꼭질! 다음은 준호.' }, { id: 'g2', text: '준호: 나는 공놀이. 하윤이는?' }, { id: 'g3', text: '하윤: 나는 줄넘기. 지우 차례야.' }, { id: 'g4', text: '지우: 나는 술래잡기가 좋아.' }] }, target: { order: ['g1', 'g2', 'g3', 'g4'] }, difficulty: 0.25,
                  conclude: '말을 마칠 때 다음 친구 이름을 부르면, 모둠에서 누구 차례인지 헷갈리지 않아요.' },
              ],
            },
            {
              id: 'a3', title: '활동 3. 자리에 맞는 말차례 방법 잇기', minutes: 8, tool: 'mindmap',
              teacher: '"수업 시간에 말하고 싶으면 어떻게 하나요?" 손 들기를 떠올리게 한 뒤, 자리마다 차례를 얻는 방법이 다르다는 것을 짝 짓기로 정리한다. 쉬는 시간에도 손을 들어야 한다고 고른 학생에게는 "친구 둘이 이야기할 때는 무엇으로 차례를 넘겼나요?"라고 되묻는다.',
              task: '말하는 자리(가지)마다 차례를 얻거나 넘기는 알맞은 방법을 이어요.',
              levels: { easy: { live: true }, base: {}, challenge: {} },
              items: [
                { prompt: '자리마다 알맞은 말차례 방법을 이어 보세요.', toolOptions: { mode: 'match', topic: '어디서 말해요', slots: [{ id: 'class', label: '수업 시간' }, { id: 'phone', label: '전화' }], cards: [{ id: 'hand', text: '손을 들고 선생님이 부르면 말해요' }, { id: 'pause', text: '상대 말이 멈추면 말해요' }, { id: 'run', text: '자리에서 일어나 바로 말해요' }] }, target: { match: { class: 'hand', phone: 'pause' } }, difficulty: 0.15,
                  hints: ['그 자리에서 누가 말할 차례를 정해 주는지 떠올려요. 얼굴이 안 보일 때는 무엇을 듣고 내 차례인 줄 알까요?'] },
                { prompt: '세 자리에 알맞은 말차례 방법을 이어 보세요.', toolOptions: { mode: 'match', topic: '말차례 지키기', slots: [{ id: 'group', label: '모둠 회의' }, { id: 'pair', label: '짝과 이야기' }, { id: 'class', label: '반 전체 발표' }], cards: [{ id: 'name', text: '다음 친구 이름을 불러요' }, { id: 'you', text: '"너는?" 하고 물어요' }, { id: 'hand', text: '손을 들고 기다려요' }] }, target: { match: { group: 'name', pair: 'you', class: 'hand' } }, difficulty: 0.25,
                  hints: ['자리마다 몇 명이 함께 있는지, 누가 차례를 정해 주는지 떠올리고 거기에 맞는 방법을 골라요.', '둘이면 상대가 하나뿐이고, 여럿이면 다음 사람을 알려 줘야 해요. 반 전체 앞에서는 선생님이 차례를 정해요.'],
                  levels: { challenge: { prompt: '세 자리에 알맞은 말차례 방법을 이어 보세요. 어느 자리에도 맞지 않는 카드가 두 장 섞여 있어요.', toolOptions: { cards: [{ id: 'name', text: '다음 친구 이름을 불러요' }, { id: 'shout', text: '"내 차례야!" 하고 크게 외쳐요' }, { id: 'you', text: '"너는?" 하고 물어요' }, { id: 'tap', text: '말하는 친구 어깨를 툭툭 쳐요' }, { id: 'hand', text: '손을 들고 기다려요' }] } } } },
                { prompt: '말차례를 지키는 데 도움이 되는 행동만 골라 보세요.', toolOptions: { mode: 'pick', topic: '차례를 기다려요', cards: [{ id: 'finger', text: '할 말을 손가락으로 기억해요' }, { id: 'look', text: '말하는 친구를 바라봐요' }, { id: 'tap', text: '친구 어깨를 자꾸 두드려요' }, { id: 'hum', text: '기다리며 콧노래를 불러요' }] }, target: { pick: ['finger', 'look'] }, difficulty: 0.2 },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"오늘 집에 가서 전화나 저녁 식탁에서 말차례를 지켜 볼 사람?" 하고 한 가지씩 다짐을 말하게 한다. 출구 1번은 수업에 없던 잘못 걸린 전화다. 차례를 틀린 학생은 묻는 말과 대답하는 말을 헷갈렸거나 사과하고 끊는 차례를 놓친 것이므로 "물음표가 있는 말 다음에는 대답이 와요", "끊기 전에는 인사해요"를 다시 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'story', options: { mode: 'order', slots: ['첫째', '둘째', '셋째', '넷째'], cards: [{ id: 'x1', text: '받은 사람: 여보세요?' }, { id: 'x2', text: '민지: 거기 하윤이네 집이에요?' }, { id: 'x3', text: '받은 사람: 아니요, 잘못 거셨어요.' }, { id: 'x4', text: '민지: 죄송합니다. 안녕히 계세요.' }] }, prompt: '민지가 전화를 잘못 걸었어요. 대화 차례대로 놓아 보세요.', target: { order: ['x1', 'x2', 'x3', 'x4'] }, difficulty: 0.25 },
            { type: 'choice', prompt: '수업 시간에 말하고 싶을 때 어떻게 하나요?', options: ['큰 소리로 바로 말해요', '손을 들고 기다려요', '짝에게만 속삭여요'], answer: 1, difficulty: 0.1, explain: '수업 시간에는 손을 들고 선생님이 부르면 말해요. 그래야 모두가 들을 수 있어요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '어디서나 말차례',
        items: [
          { type: 'table', prompt: '자리마다 말차례를 지키는 방법을 쓰세요.', columns: ['자리', '말차례를 지키는 방법'], cells: [['수업 시간', ''], ['전화', ''], ['모둠 회의', '']] },
          { type: 'choice', prompt: '두 친구가 동시에 말을 시작했어요. 알맞은 말에 ○ 하세요.', options: ['"내가 먼저야!"', '"너 먼저 말해."', '"둘 다 조용히 해!"'], answer: '"너 먼저 말해."' },
          { type: 'blank', prompt: '전화 대화의 빈칸을 채우세요.', text: '이모: 여보세요?  /  나: 이모, 저 ______예요.', answer: '(자기 이름 대신 "조카" 등)' },
          { type: 'short', prompt: '하고 싶은 말이 생겼는데 친구가 아직 말하고 있을 때, 잊지 않고 기다리는 내 방법을 쓰세요.' },
        ],
        easy: {
          note: '말이 멈추면 내 차례예요. 수업 시간에는 손을 들어요.',
          items: [
            { type: 'choice', prompt: '수업 시간에 말하고 싶을 때 알맞은 것에 ○ 하세요.', options: ['손을 들어요', '바로 말해요'], answer: '손을 들어요' },
            { type: 'choice', prompt: '전화를 받으면 먼저 하는 말에 ○ 하세요.', options: ['"여보세요?"', '"끊을게."'], answer: '"여보세요?"' },
            { type: 'choice', prompt: '친구와 동시에 말을 시작했을 때 알맞은 말에 ○ 하세요.', options: ['"너 먼저 말해."', '"내가 먼저야!"'], answer: '"너 먼저 말해."' },
            { type: 'draw', prompt: '수업 시간에 손을 들고 기다리는 내 모습을 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '장면 카드를 맞는 자리에 놓으면 초록 테두리가 생기고, 틀린 자리면 되돌아와요. 활동 2 둘째 문항은 보기 두 개로 시작해요.',
        base: '모두 놓은 뒤 확인을 눌러 스스로 고쳐요.',
        challenge: '활동 3 둘째 문항에 어느 자리에도 맞지 않는 카드 두 장이 섞여 나와요. 활동 2의 세 보기 문항에서는 고르지 않은 보기의 결과도 짝에게 말해 봐요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 하고 싶은 말을 잊을까 봐 바로 끼어든다 → 손가락 접기·낱말 적기처럼 기억하며 기다리는 방법을 준다. ② 목소리를 키우면 차례를 얻는다고 생각한다 → 양보가 둘 다 말하는 길이다. ③ 전화를 인사 없이 끊는다 → 끝낸다고 먼저 말하기. 전화 연습에서는 실제 전화번호를 쓰지 않는다.',
    }),

    // ───────────────────────── 3. 바라보고 듣고, 되풀이하고 잇기 ─────────────────────────
    L(3, {
      title: '친구 말을 되풀이하고 내 이야기 잇기',
      objective: '말하는 친구를 바라보며 듣고, 들은 말을 짧게 되풀이한 뒤 내 이야기를 이어 말할 수 있다.',
      standards: TALK,
      illustration: ART('two children sitting face to face on a classroom rug, one talking and the other leaning in to listen with a big curious ear', [
        { motif: 'sun', x: 404, y: 58, s: 0.8 }, { motif: 'cloud', x: 130, y: 50 }, { motif: 'hills', y: 206 },
        { motif: 'tree', x: 90, y: 214 }, { motif: 'tree', x: 392, y: 216, color: 'buttercup' }, { motif: 'bird', x: 250, y: 80 },
        { motif: 'text', x: 240, y: 146, text: '잘 듣고 이어 말해요', size: 22 },
      ]),
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '교사가 한 학생에게 "선생님은 어제 고양이를 봤어요"라고 말한 뒤 일부러 창밖을 보며 "아, 그래요"라고 대답하는 모습을 보여 준다. "선생님이 잘 들은 것 같나요?" 다음에 학생을 바라보며 "고양이를 봤구나! 무슨 색이었어요?"라고 다시 해 보인다. 두 대답이 무엇이 달랐는지 묻고, 시연 단추로 "고양이를 봤구나"를 말풍선에 넣는다.',
          student: '친구가 내 말을 잘 듣고 있다는 것을 어떻게 알 수 있을까요?',
          demo: { tool: 'story', options: { mode: 'fill', shuffle: false, cards: [{ id: 'cat', text: '고양이를 봤구나' }, { id: 'ah', text: '아, 그래' }], slots: [{ id: 'r', who: '준호', motif: 'sun', label: '___! 무슨 색이었어?' }] }, sequence: [{ fill: { r: 'cat' } }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 잘 듣는 몸 만들기', minutes: 8, tool: 'mindmap',
              teacher: '"눈은 어디를, 몸은 어느 쪽을 향해야 할까요?" 학생들이 자리에서 실제로 몸을 짝 쪽으로 돌려 보게 한 뒤 카드를 고른다. 연필을 만지며 "그래도 귀로는 듣고 있어요"라고 하는 학생에게 "친구는 내가 듣는지 어떻게 알까요?"라고 묻는다.',
              task: '잘 듣는 사람의 몸짓 카드를 골라요. 듣는 사람은 눈·몸·고개로 듣고 있다고 알려 줘요.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '잘 듣는 사람의 모습만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '잘 듣는 몸', cards: [{ id: 'eye', text: '말하는 친구를 바라봐요' }, { id: 'turn', text: '몸을 친구 쪽으로 돌려요' }, { id: 'pen', text: '연필을 빙빙 돌려요' }, { id: 'win', text: '창밖을 내다봐요' }] }, target: { pick: ['eye', 'turn'] }, difficulty: 0.1 },
                { prompt: '듣는 모습 카드를 눈·몸·고개 가지로 나누어 보세요.', toolOptions: { topic: '이렇게 들어요', slots: [{ id: 'e', label: '눈' }, { id: 'b', label: '몸' }, { id: 'h', label: '고개' }], cards: [{ id: 'look', text: '친구 얼굴을 봐요' }, { id: 'lean', text: '친구 쪽으로 기울여요' }, { id: 'nod', text: '고개를 끄덕여요' }, { id: 'still', text: '손을 무릎에 둬요' }] }, target: { sort: { e: ['look'], b: ['lean', 'still'], h: ['nod'] } }, difficulty: 0.25 },
                { prompt: '하윤이가 이야기하고 있어요. 잘 듣는 친구의 모습을 모두 골라 보세요.', toolOptions: { mode: 'pick', topic: '하윤이 이야기 듣기', cards: [{ id: 'smile', text: '눈을 맞추고 웃어 줘요' }, { id: 'whisper', text: '옆 친구와 속삭여요' }, { id: 'nod', text: '"응, 응" 하고 끄덕여요' }, { id: 'away', text: '등을 돌리고 앉아요' }, { id: 'face', text: '하윤이 쪽으로 돌아앉아요' }] }, target: { pick: ['smile', 'nod', 'face'] }, difficulty: 0.2,
                  levels: { challenge: { prompt: '하윤이가 이야기하고 있어요. 잘 듣는 척만 하는 모습도 섞여 있어요. 정말 잘 듣는 모습만 모두 골라 보세요.', toolOptions: { cards: [{ id: 'smile', text: '눈을 맞추고 웃어 줘요' }, { id: 'fake', text: '고개만 끄덕이고 손으로 딴짓해요' }, { id: 'nod', text: '"응, 응" 하고 끄덕여요' }, { id: 'away', text: '등을 돌리고 앉아요' }, { id: 'then', text: '다 듣고 "그다음엔?" 하고 물어요' }, { id: 'face', text: '하윤이 쪽으로 돌아앉아요' }] }, target: { pick: ['smile', 'nod', 'then', 'face'] } } } },
              ],
            },
            {
              id: 'a2', title: '활동 2. 들은 말 되풀이하고 잇기', minutes: 10, tool: 'story',
              teacher: '"친구 말을 한 번 되풀이하면 친구는 내가 잘 들었다는 걸 알아요." 되풀이 카드와 엉뚱한 카드를 견주게 한다. "아, 그래"만 고르는 학생이 많은데, 이것은 듣는 척만 하는 대답이라 이야기가 끊긴다는 것을 짚는다. 셋째 문항은 되풀이 다음에 무엇을 묻는지까지 고른다.',
              task: '친구가 한 말을 짧게 되풀이하는 말을 말풍선에 넣고, 이어서 할 말도 골라 봐요.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '서준이가 주말 이야기를 했어요. 들은 말을 되풀이하는 말을 넣어 보세요.', toolOptions: { mode: 'fill', cards: [{ id: 'rep', text: '할머니 댁에 갔구나' }, { id: 'meh', text: '아, 그래' }, { id: 'off', text: '나 배고파' }], title: '서준: "나는 주말에 할머니 댁에 갔어."', slots: [{ id: 'b', who: '민지', motif: 'flower', label: '___! 거기서 뭐 했어?' }] }, target: { fill: { b: 'rep' } }, difficulty: 0.1,
                  levels: { easy: { toolOptions: { cards: [{ id: 'rep', text: '할머니 댁에 갔구나' }, { id: 'off', text: '나 배고파' }] } } } },
                { prompt: '지우의 말을 되풀이하고 내 이야기를 잇는 말을 넣어 보세요.', toolOptions: { mode: 'fill', cards: [{ id: 'rep', text: '토끼를 키우는구나' }, { id: 'mine', text: '나는 거북이를 키워' }, { id: 'no', text: '몰라' }], title: '지우: "우리 집에서 토끼를 키워."', slots: [{ id: 'b1', who: '준호', motif: 'sun', label: '___!' }, { id: 'b2', who: '준호', motif: 'sun', label: '그리고 ___.' }] }, target: { fill: { b1: 'rep', b2: 'mine' } }, difficulty: 0.25,
                  predict: { q: '"아, 그래"라고만 대답하면 대화는 어떻게 될까요?', options: ['계속 이어져요', '끊기기 쉬워요'], answer: 1 },
                  conclude: '들은 말을 되풀이하고 내 이야기를 이으면 대화가 끊기지 않고 이어져요.' },
                { prompt: '하윤이 말을 듣고 대답하는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', slots: ['첫째', '둘째', '셋째'], cards: [{ id: 'h1', text: '하윤: 어제 바다에서 조개를 주웠어.' }, { id: 'h2', text: '서준: 조개를 주웠구나!' }, { id: 'h3', text: '서준: 몇 개나 주웠어?' }] }, target: { order: ['h1', 'h2', 'h3'] }, difficulty: 0.2 },
              ],
            },
            {
              id: 'a3', title: '활동 3. 짝과 되풀이 대화 하기', minutes: 8, tool: 'story', pair: true,
              teacher: '짝끼리 마주 앉게 한다. "한 사람이 한 문장 말하면, 듣는 사람은 ① 바라보고 ② 되풀이하고 ③ 내 이야기를 이어요." 교사가 손가락 세 개로 차례를 보여 준다. 되풀이 없이 바로 자기 이야기만 하는 짝이 보이면 "방금 짝이 뭐라고 했죠?"라고 물어 되풀이를 끌어낸다.',
              task: '짝과 마주 보고 앉아요. 바라보기 → 되풀이하기 → 내 이야기 잇기 순서로 주고받아요.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '짝이 "좋아하는 음식"을 말하면 되풀이하고 내 음식을 이어 말한 뒤 "다 했어요"를 누르세요.', free: true },
                { prompt: '이번에는 "어제 한 일"로 바꾸어 말해요. 되풀이한 뒤 궁금한 것 하나를 물어보세요.', free: true },
                { prompt: '역할을 바꾸어 짝이 되풀이해요. 짝이 내 말을 잘 되풀이했는지 말해 주세요.', free: true },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"짝이 내 말을 되풀이해 줬을 때 기분이 어땠나요?" 두세 명의 대답을 듣는다. 출구 1번에서 "응"을 고른 학생은 되풀이와 짧은 맞장구를 헷갈린 것이니 다음 시간 짝 대화에서 다시 살핀다.',
          exitTicket: [
            { type: 'tool', tool: 'story', options: { mode: 'fill', cards: [{ id: 'rep', text: '자전거를 탔구나' }, { id: 'eh', text: '응' }, { id: 'zz', text: '졸려' }], title: '민지: "나는 공원에서 자전거를 탔어."', slots: [{ id: 'b', who: '지우', motif: 'flower', label: '___! 누구랑 탔어?' }] }, prompt: '민지 말을 듣고 되풀이하는 말을 말풍선에 넣어 보세요.', target: { fill: { b: 'rep' } }, difficulty: 0.15 },
            { type: 'choice', prompt: '친구 말을 잘 듣는 모습은 무엇인가요?', options: ['연필을 만지며 들어요', '친구를 바라보고 고개를 끄덕여요', '다른 쪽을 보며 들어요'], answer: 1, difficulty: 0.1, explain: '눈으로 바라보고 고개를 끄덕이면, 친구는 내가 듣고 있다는 걸 알아요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '듣고 되풀이하기',
        items: [
          { type: 'check', prompt: '잘 듣는 모습에 모두 ✓ 하세요.', options: ['친구를 바라봐요', '몸을 친구 쪽으로 돌려요', '연필을 돌려요', '고개를 끄덕여요'], answer: '친구를 바라봐요, 몸을 친구 쪽으로 돌려요, 고개를 끄덕여요' },
          { type: 'blank', prompt: '친구 말을 되풀이하는 말을 쓰세요.', text: '친구: "나는 어제 수영장에 갔어."  나: "______에 갔구나!"', answer: '수영장' },
          { type: 'choice', prompt: '되풀이한 다음 이어서 하기 좋은 말에 ○ 하세요.', options: ['"누구랑 갔어?"', '"나 집에 갈래."', '"몰라."'], answer: '"누구랑 갔어?"' },
          { type: 'table', prompt: '짝과 나눈 대화를 쓰세요.', columns: ['짝이 한 말', '내가 되풀이한 말', '내가 이은 말'], rows: 2 },
        ],
        easy: {
          note: '친구 말의 끝을 따라 하고 "~구나!"를 붙여요.',
          items: [
            { type: 'choice', prompt: '잘 듣는 모습에 ○ 하세요.', options: ['친구를 바라봐요', '창밖을 봐요'], answer: '친구를 바라봐요' },
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '친구: "나는 사과를 좋아해."  나: "______를 좋아하는구나!"', answer: '사과' },
            { type: 'choice', prompt: '친구 말을 되풀이한 말에 ○ 하세요. (친구: "강아지랑 산책했어.")', options: ['"강아지랑 산책했구나!"', '"나는 배고파."'], answer: '"강아지랑 산책했구나!"' },
            { type: 'draw', prompt: '친구 말을 잘 듣는 내 모습을 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '카드를 맞는 자리에 놓으면 초록 테두리가 생기고, 틀리면 까닭과 함께 되돌아와요. 활동 2 첫 문항은 카드 두 장으로 시작해요. 짝 대화는 교사가 칠판에 쓴 "~구나!" 틀을 보고 해요.',
        base: '모두 놓은 뒤 확인을 눌러 스스로 고쳐요.',
        challenge: '활동 1 셋째 문항에 "고개만 끄덕이고 딴짓하기"처럼 듣는 척만 하는 카드가 섞여 나와요. 짝 대화에서 되풀이한 뒤 "왜?", "누구랑?" 같은 질문을 꼭 하나 붙여요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 듣는 척만 하고 "아, 그래"로 끝내 이야기가 이어지지 않는다 → 되풀이 + 질문 틀("~했구나! 누구랑?")을 준다. ② 되풀이를 친구 말 전체를 그대로 따라 하는 것으로 안다 → 중요한 낱말만 짧게. ③ 몸은 돌렸지만 손으로 다른 일을 한다 → 손은 무릎에. 듣는 자세를 칭찬할 때는 "바라봐 줘서 고마워"처럼 행동을 짚어 말한다.',
    }),

    // ───────────────────────── 4. 기다렸다가 넘기기 ─────────────────────────
    L(4, {
      title: '말이 끝난 신호를 듣고 다음 친구에게 넘기기',
      objective: '친구의 말이 끝났다는 신호를 듣고 기다렸다가 이어 말하고, 다음에 말할 친구를 이름이나 눈짓으로 알려 줄 수 있다.',
      standards: TALK,
      illustration: ART('three children sitting in a circle on the grass passing a paper talking stick shaped like a flower from hand to hand', [
        { motif: 'sun', x: 400, y: 60, s: 0.8 }, { motif: 'cloud', x: 140, y: 48 }, { motif: 'hills', y: 204 },
        { motif: 'flower', x: 200, y: 226 }, { motif: 'flower', x: 240, y: 230, color: 'lavender' }, { motif: 'flower', x: 280, y: 226, color: 'buttercup' },
        { motif: 'tree', x: 80, y: 214 }, { motif: 'text', x: 240, y: 140, text: '다음은 누구 차례?', size: 22 },
      ]),
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '교사가 "선생님이 좋아하는 놀이는 공기놀이예요. 그런데…" 하고 말을 멈춘 뒤 "지금 선생님 말이 끝났을까요?"라고 묻는다. 다시 "공기놀이가 좋아요. 여러분은요?" 하고 손바닥을 내민다. 두 번의 끝맺음이 어떻게 달랐는지 말하게 한다. 시연 단추로 "그런데", "그리고"로 끝난 말은 아직 말하는 중이라는 것을 보여 준다.',
          student: '친구의 말이 다 끝났는지 어떻게 알 수 있을까요?',
          demo: { tool: 'mindmap', options: { topic: '말이 끝났나요?', shuffle: false, slots: [{ id: 'end', label: '말이 끝났어요' }, { id: 'more', label: '아직 말하는 중' }], cards: [{ id: 'e', text: '"…공기놀이가 좋아. 너는?"' }, { id: 'm', text: '"공기놀이가 좋은데, 그리고…"' }] }, sequence: [{ sort: { end: ['e'], more: ['m'] } }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 말이 끝났다는 신호 듣기', minutes: 8, tool: 'mindmap',
              teacher: '카드의 말을 교사가 실제 말투로 읽어 준다. "끝이 올라가며 묻는 말, \'이상이야\' 같은 말은 끝났다는 신호예요. \'그리고\', \'왜냐하면\'으로 멈춘 말은 아직이에요." 말이 잠깐 멈추기만 하면 끼어드는 학생이 있으니 "숨 쉬려고 멈춘 것일 수도 있어요. 끝맺는 말을 기다려요"라고 짚는다.',
              task: '친구의 말을 읽고, 말이 끝났는지 아직 말하는 중인지 나누어 넣어요.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '좋아하는 놀이 이야기예요. 말이 끝났는지 아직 말하는 중인지 나누어 보세요.', toolOptions: { topic: '좋아하는 놀이', slots: [{ id: 'end', label: '말이 끝났어요' }, { id: 'more', label: '아직 말하는 중' }], cards: [{ id: 'q', text: '"그네가 좋아. 너는?"' }, { id: 'and', text: '"그네가 좋고, 그리고…"' }, { id: 'done', text: '"내 이야기는 여기까지!"' }, { id: 'why', text: '"왜냐하면 그네는…"' }] }, target: { sort: { end: ['q', 'done'], more: ['and', 'why'] } }, difficulty: 0.15 },
                { prompt: '좋아하는 계절 이야기예요. 끝난 말과 아직인 말을 나누어 보세요.', toolOptions: { topic: '좋아하는 계절', slots: [{ id: 'end', label: '말이 끝났어요' }, { id: 'more', label: '아직 말하는 중' }], cards: [{ id: 'a', text: '"나는 겨울이 좋아. 하윤이는?"' }, { id: 'b', text: '"여름에는 수박을 먹는데…"' }, { id: 'c', text: '"그래서 봄이 좋아. 이상이야."' }, { id: 'd', text: '"가을은 음… 잠깐만…"' }] }, target: { sort: { end: ['a', 'c'], more: ['b', 'd'] } }, difficulty: 0.2,
                  levels: { challenge: { prompt: '좋아하는 계절 이야기가 여섯 장이에요. 끝난 말과 아직인 말을 나누어 보세요.', toolOptions: { cards: [{ id: 'a', text: '"나는 겨울이 좋아. 하윤이는?"' }, { id: 'b', text: '"여름에는 수박을 먹는데…"' }, { id: 'e', text: '"음… 그러니까…"' }, { id: 'c', text: '"그래서 봄이 좋아. 이상이야."' }, { id: 'f', text: '"이게 다야. 지우 차례!"' }, { id: 'd', text: '"가을은 음… 잠깐만…"' }] }, target: { sort: { end: ['a', 'c', 'f'], more: ['b', 'd', 'e'] } } } } },
                { prompt: '준호가 말하다 잠깐 숨을 쉬었어요. 어느 쪽인지 나누어 보세요.', toolOptions: { topic: '준호의 말', slots: [{ id: 'end', label: '말이 끝났어요' }, { id: 'more', label: '아직 말하는 중' }], cards: [{ id: 'p', text: '"나는 축구가… (숨)"' }, { id: 'f', text: '"축구가 제일 좋아. 서준아, 너는?"' }, { id: 'n', text: '"첫째는 축구, 둘째는…"' }] }, target: { sort: { end: ['f'], more: ['p', 'n'] } }, difficulty: 0.3,
                  predict: { q: '말이 잠깐 멈추면 바로 내 차례일까요?', options: ['네, 멈췄으니까요', '끝맺는 말을 기다려요'], answer: 1 },
                  conclude: '숨을 쉬려고 잠깐 멈출 때도 있어요. 묻는 말이나 끝맺는 말이 나올 때까지 기다려요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 다음 친구에게 차례 넘기는 말 넣기', minutes: 10, tool: 'story',
              teacher: '"세 명이 이야기할 때 \'너는?\'이라고만 하면 누가 대답할까요?" 두 친구가 동시에 대답하는 모습을 학생 둘과 해 본 뒤, 이름을 넣어 넘기면 헷갈리지 않는다는 것을 확인한다. 셋째 문항은 이미 말한 친구 이름을 다시 부르는 실수를 막는다 — "아직 말하지 않은 친구는 누구인가요?"',
              task: '세 친구의 대화예요. 말을 마친 친구가 다음 친구에게 차례를 넘기는 말을 말풍선에 넣어요.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '민지가 말을 마쳤어요. 준호에게 차례를 넘기는 말을 넣어 보세요.', toolOptions: { mode: 'fill', title: '민지·준호·하윤이가 좋아하는 놀이를 이야기해요', cards: [{ id: 'pass', text: '준호는 뭐 좋아해' }, { id: 'stop', text: '이제 그만 말해' }, { id: 'me', text: '나 또 말할래' }], slots: [{ id: 'b', who: '민지', motif: 'flower', label: '나는 공기놀이가 좋아. ___?' }] }, target: { fill: { b: 'pass' } }, difficulty: 0.1,
                  levels: { easy: { toolOptions: { cards: [{ id: 'pass', text: '준호는 뭐 좋아해' }, { id: 'me', text: '나 또 말할래' }] } } } },
                { prompt: '지우와 서준이가 차례로 말해요. 두 말풍선에 차례를 넘기는 말을 넣어 보세요.', toolOptions: { mode: 'fill', title: '지우·서준·민지가 주말에 할 일을 이야기해요', cards: [{ id: 'sj', text: '서준아, 너는' }, { id: 'mj', text: '민지는 어때' }, { id: 'all', text: '다들 조용히 해' }], slots: [{ id: 'b1', who: '지우', motif: 'leaf', label: '나는 도서관에 갈 거야. ___?' }, { id: 'b2', who: '서준', motif: 'sun', label: '나는 자전거를 탈 거야. ___?' }] }, target: { fill: { b1: 'sj', b2: 'mj' } }, difficulty: 0.2 },
                { prompt: '하윤이와 준호는 이미 말했어요. 준호가 차례를 넘길 친구를 넣어 보세요.', toolOptions: { mode: 'fill', title: '하윤 → 준호 → ? 차례로 좋아하는 동물을 말해요', cards: [{ id: 'jw', text: '지우야, 너는' }, { id: 'hy', text: '하윤아, 너는' }, { id: 'none', text: '끝!' }], slots: [{ id: 'b', who: '준호', motif: 'tree', label: '나는 기린이 좋아. ___?' }] }, target: { fill: { b: 'jw' } }, difficulty: 0.25,
                  levels: { challenge: { toolOptions: { cards: [{ id: 'jw', text: '지우야, 너는' }, { id: 'hy', text: '하윤아, 너는' }, { id: 'jh', text: '준호야, 너는' }, { id: 'none', text: '끝!' }] } } },
                  conclude: '아직 말하지 않은 친구의 이름을 불러 주면 모두가 한 번씩 말할 수 있어요.' },
              ],
            },
            {
              id: 'a3', title: '활동 3. 세 명이 차례를 넘기며 이야기하기', minutes: 8, tool: 'story', pair: true,
              teacher: '세 명씩 모둠을 만든다. "말을 마치면 다음 친구 이름을 부르거나 눈을 맞추고 손바닥을 내밀어요. 이름이 불린 사람만 말해요." 교사가 모둠을 돌며 끼어드는 학생에게 "지금 누구 이름이 불렸나요?"라고 묻는다. 한 바퀴가 끝나면 말이 겹치지 않았는지 모둠끼리 확인하게 한다.',
              task: '세 명이 모둠이 되어요. 말을 마치면 이름이나 눈짓으로 다음 친구에게 차례를 넘겨요.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '"좋아하는 놀이"로 한 바퀴 이야기해요. 말을 마치면 다음 친구 이름을 불러요. 끝나면 "다 했어요"를 누르세요.', free: true },
                { prompt: '이번에는 이름 대신 눈을 맞추고 손바닥을 내밀어 차례를 넘겨요.', free: true },
                { prompt: '"가 보고 싶은 곳"으로 한 바퀴 더 해요. 친구 말에 끼어들지 않았는지 서로 말해 주세요.', free: true },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"모둠에서 말이 겹친 적이 있었나요? 그때 어떻게 했나요?" 한두 모둠의 이야기를 듣는다. 출구 1번을 틀린 학생은 "그리고"로 멈춘 말을 끝난 말로 본 것이니, 다음 시간 모둠 대화에서 그 학생 옆에 앉아 끝맺는 말을 함께 기다려 본다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { topic: '좋아하는 간식', slots: [{ id: 'end', label: '끝났어요' }, { id: 'more', label: '아직이에요' }], cards: [{ id: 'x', text: '"떡볶이가 좋아. 지우는?"' }, { id: 'y', text: '"떡볶이는 맵지만, 그래도…"' }, { id: 'z', text: '"이게 내 생각이야."' }] }, prompt: '간식 이야기예요. 말이 끝났는지 아직인지 나누어 보세요.', target: { sort: { end: ['x', 'z'], more: ['y'] } }, difficulty: 0.2 },
            { type: 'choice', prompt: '세 명이 이야기할 때 차례를 가장 잘 넘긴 말은 무엇인가요?', options: ['"너는?"', '"서준아, 너는 어때?"', '"아무나 말해."'], answer: 1, difficulty: 0.15, explain: '이름을 불러 주면 누가 말할 차례인지 모두가 알 수 있어요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '차례를 넘겨요',
        items: [
          { type: 'choice', prompt: '말이 끝난 것에 ○ 하세요.', options: ['"나는 사과가 좋은데, 그리고…"', '"나는 사과가 좋아. 너는?"', '"왜냐하면 사과는…"'], answer: '"나는 사과가 좋아. 너는?"' },
          { type: 'blank', prompt: '다음 친구에게 차례를 넘기는 말을 쓰세요.', text: '나는 블록 놀이가 좋아. ______야, 너는 뭐 좋아해?', answer: '(친구 이름 — 가명도 좋아요)' },
          { type: 'check', prompt: '차례를 넘기는 방법에 모두 ✓ 하세요.', options: ['이름 부르기', '눈 맞추고 손바닥 내밀기', '친구 말 끊기', '"너는 어때?" 묻기'], answer: '이름 부르기, 눈 맞추고 손바닥 내밀기, "너는 어때?" 묻기' },
          { type: 'short', prompt: '하고 싶은 말이 생겼는데 친구 말이 아직 끝나지 않았어요. 어떻게 할지 쓰세요.' },
        ],
        easy: {
          note: '"너는?", "이상이야"가 나오면 말이 끝난 거예요. "그리고"로 멈추면 아직이에요.',
          items: [
            { type: 'choice', prompt: '말이 끝난 것에 ○ 하세요.', options: ['"나는 사과가 좋아. 너는?"', '"나는 사과가 좋은데, 그리고…"'], answer: '"나는 사과가 좋아. 너는?"' },
            { type: 'choice', prompt: '차례를 넘기는 말에 ○ 하세요.', options: ['"준호야, 너는?"', '"내가 또 할래!"'], answer: '"준호야, 너는?"' },
            { type: 'choice', prompt: '친구 말이 아직 끝나지 않았을 때 알맞은 것에 ○ 하세요.', options: ['기다려요', '끼어들어요'], answer: '기다려요' },
            { type: 'draw', prompt: '손바닥을 내밀어 친구에게 차례를 넘기는 모습을 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '카드를 맞는 칸에 넣으면 초록 테두리가 생기고, 틀리면 까닭을 말해 주고 되돌아와요. 활동 2 첫 문항은 카드 두 장으로 시작해요. 모둠 대화에서는 꽃 모양 종이를 들고 있는 사람만 말해요.',
        base: '모두 넣은 뒤 확인을 눌러 스스로 고쳐요.',
        challenge: '활동 1 둘째 문항은 "음… 그러니까…"처럼 헷갈리는 말까지 여섯 장, 활동 2 셋째 문항에는 자기 이름 카드가 섞여 나와요. 모둠 대화에서 이름 대신 눈짓으로만 차례를 넘겨 보고, 어느 쪽이 더 헷갈리지 않는지 말해요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 하고 싶은 말이 생기면 친구 말 중간에 끼어든다 → 끝맺는 말("너는?", "이상이야")을 신호로 기다리게 한다. ② 말이 잠깐 멈추면 끝난 줄 안다 → 숨 쉬는 멈춤과 끝맺음을 구분한다. ③ 세 명 대화에서 "너는?"만 써서 둘이 동시에 대답한다 → 이름을 넣어 넘긴다. 모둠 대화가 어려운 반은 꽃 모양 종이(말하기 막대)를 돌리며 들고 있는 사람만 말하게 한다.',
    }),

    // ───────────────────────── 5. 대화 돌아보기 ─────────────────────────
    L(5, {
      title: '말차례 점검표로 모둠 대화 돌아보기',
      objective: '모둠 대화가 끝난 뒤 말차례를 지켰는지 점검표에 표시하고, 다음 대화에서 바꿀 점을 한 가지 말할 수 있다.',
      standards: TALK,
      illustration: ART('a small group of children around a round table with a paper checklist and a magnifying glass, smiling as they look back on their talk', [
        { motif: 'sun', x: 412, y: 56, s: 0.75 }, { motif: 'cloud', x: 104, y: 50 }, { motif: 'hills', y: 208 },
        { motif: 'house', x: 380, y: 216, color: 'buttercup' }, { motif: 'star', x: 140, y: 110 }, { motif: 'star', x: 330, y: 100, color: 'rose' },
        { motif: 'text', x: 240, y: 150, text: '우리 대화를 돌아봐요', size: 22 },
      ]),
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '"지난 시간 모둠 대화를 가장 잘한 사람은 누구일까요?" 대부분 "말을 많이 한 친구"를 꼽을 것이다. 시연 단추로 점검표에 "끝까지 듣고 말했어요", "다음 친구에게 차례를 넘겼어요"가 표시되는 것을 보여 주며 "대화를 잘했는지는 말한 양이 아니라 이 칸으로 봐요"라고 말한다.',
          student: '대화를 잘했다는 것은 무엇을 보고 알 수 있을까요?',
          demo: { tool: 'kitchen', options: { mode: 'checklist', title: '말차례 점검표', items: [{ id: 'listen', text: '끝까지 듣고 말했어요' }, { id: 'pass', text: '차례를 넘겼어요' }, { id: 'most', text: '말을 가장 많이 했어요' }] }, sequence: [{ checklist: ['listen', 'pass'] }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 말차례 점검표 만들기', minutes: 9, tool: 'kitchen',
              teacher: '"이 칸이 말차례를 지켰는지 알려 주나요?" 항목마다 묻는다. "말을 가장 많이 했어요", "목소리가 가장 컸어요"에 표시하는 학생에게 "그 친구 때문에 말을 못 한 친구는 없었을까요?"라고 되묻는다. 셋째 문항은 준호의 대화 기록에서 바꿀 점만 찾는다 — 잘한 점(이름 불러 넘기기)까지 표시하는 학생에게 "그건 다음에도 그대로 하면 되는 거죠?"라고 묻는다.',
              task: '말차례를 지켰는지 알려 주는 점검 항목만 골라 표시해요.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '말차례 점검표에 들어갈 항목에만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '말차례 점검표', items: [{ id: 'listen', text: '끝까지 듣고 말했어요' }, { id: 'pass', text: '다음 친구에게 차례를 넘겼어요' }, { id: 'most', text: '말을 가장 많이 했어요' }, { id: 'rep', text: '친구 말을 되풀이했어요' }, { id: 'loud', text: '목소리가 가장 컸어요' }] }, target: { checklist: ['listen', 'pass', 'rep'] }, difficulty: 0.2,
                  levels: { easy: { prompt: '말차례 점검표에 들어갈 항목에만 표시해 보세요. 세 항목 가운데에서 골라요.', toolOptions: { items: [{ id: 'listen', text: '끝까지 듣고 말했어요' }, { id: 'most', text: '말을 가장 많이 했어요' }, { id: 'pass', text: '다음 친구에게 차례를 넘겼어요' }] }, target: { checklist: ['listen', 'pass'] } } },
                  predict: { q: '"말을 가장 많이 했어요"는 말차례를 잘 지켰다는 뜻일까요?', options: ['네', '아니요', '잘 모르겠어요'], answer: 1 },
                  conclude: '말을 많이 한 것과 말차례를 지킨 것은 달라요. 기다리고 넘겼는지를 봐요.' },
                { prompt: '모둠 친구 모두가 말했는지 살피는 항목에만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '모두 말했나요?', items: [{ id: 'all', text: '모둠 친구 모두 한 번 이상 말했어요' }, { id: 'quiet', text: '말을 적게 한 친구에게 물어봤어요' }, { id: 'fast', text: '대화를 가장 빨리 끝냈어요' }, { id: 'win', text: '내 생각으로 정했어요' }] }, target: { checklist: ['all', 'quiet'] }, difficulty: 0.2 },
                { prompt: '준호의 모둠 대화 기록이에요. 다음에 바꿀 점에만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '준호가 바꿀 점', items: [{ id: 'n', text: '지우 이름을 불러 넘겼어요' }, { id: 'c', text: '하윤이 말에 두 번 끼어들었어요' }, { id: 'l', text: '서준이를 바라보며 들었어요' }, { id: 'o', text: '혼자 세 번 연달아 말했어요' }] }, target: { checklist: ['c', 'o'] }, difficulty: 0.25,
                  levels: { challenge: { prompt: '준호의 대화 기록이 더 길어요. 잘한 점은 두고, 다음에 바꿀 점에만 모두 표시해 보세요.', toolOptions: { items: [{ id: 'n', text: '지우 이름을 불러 넘겼어요' }, { id: 'c', text: '하윤이 말에 두 번 끼어들었어요' }, { id: 'p', text: '민지가 말할 때 필통을 만지작거렸어요' }, { id: 'l', text: '서준이를 바라보며 들었어요' }, { id: 'o', text: '혼자 세 번 연달아 말했어요' }, { id: 's', text: '"하윤이는 어때?" 하고 물었어요' }] }, target: { checklist: ['c', 'p', 'o'] } } } },
              ],
            },
            {
              id: 'a2', title: '활동 2. 말을 적게 한 친구 살피기', minutes: 9, tool: 'emotion',
              teacher: '"모둠에서 한 번도 말하지 못한 친구가 있다면 어떻게 할까요?" 보기를 고르면 결과를 함께 읽는다. "대신 말해 줄게"를 고른 학생에게 "친구 생각을 내가 정말 알까요?"라고 묻는다. 혼자 오래 말하는 친구에게는 꾸짖지 않고 부드럽게 차례를 넘기는 말을 쓰게 한다.',
              task: '모둠에서 생긴 일을 읽고, 모두가 말할 수 있게 하는 방법을 골라 결과를 봐요.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '지우가 모둠 대화에서 아직 한 마디도 못 했어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '지우', situation: '모둠 대화가 거의 끝났는데 지우는 아직 한 마디도 하지 못했어요.', choices: [{ id: 'ask', text: '"지우 생각은 어때?" 하고 물어요', result: '지우가 웃으며 자기 생각을 말해요', mood: '기쁨' }, { id: 'skip', text: '시간이 없으니 그냥 끝내요', result: '지우는 할 말을 하지 못해 속상해요', mood: '속상함', why: '끝까지 말하지 못한 지우의 마음은 어떨까요?' }, { id: 'speak', text: '내가 지우 대신 말해 줘요', result: '지우 생각과 다른 말이 전해져요', mood: '걱정', why: '지우의 생각은 지우가 가장 잘 알아요.' }] }, target: { choice: 'ask' }, difficulty: 0.15,
                  levels: { easy: { toolOptions: { choices: [{ id: 'ask', text: '"지우 생각은 어때?" 하고 물어요', result: '지우가 웃으며 자기 생각을 말해요', mood: '기쁨' }, { id: 'skip', text: '시간이 없으니 그냥 끝내요', result: '지우는 할 말을 하지 못해 속상해요', mood: '속상함', why: '끝까지 말하지 못한 지우의 마음은 어떨까요?' }] } } } },
                { prompt: '서준이가 혼자 오래 말하고 있어요. 어떻게 말할까요?', toolOptions: { mode: 'branch', who: '서준', situation: '서준이가 혼자 오래 말해서 하윤이가 기다리기만 하고 있어요.', choices: [{ id: 'angry', text: '"그만 좀 말해!" 하고 소리쳐요', result: '서준이가 속상해 입을 꾹 닫아요', mood: '화남', why: '소리를 들은 서준이의 마음을 떠올려 봐요.' }, { id: 'kind', text: '"서준아, 이제 하윤이 차례야" 해요', result: '서준이가 끄덕이고 하윤이가 말해요', mood: '편안함' }] }, target: { choice: 'kind' }, difficulty: 0.2 },
                { prompt: '내가 친구 말에 끼어들었다는 것을 알았어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '나', situation: '민지가 말하는 중에 내가 끼어들었다는 것을 알았어요.', choices: [{ id: 'keep', text: '모르는 척 계속 말해요', result: '민지는 하던 말을 잊어버려요', mood: '속상함', why: '말이 끊긴 민지의 마음은 어떨까요?' }, { id: 'sorry', text: '"미안, 계속 말해 줘" 해요', result: '민지가 하던 말을 끝까지 해요', mood: '고마움' }, { id: 'later', text: '대화가 끝난 뒤에 생각해요', result: '민지의 말은 이미 끊겼어요', mood: '걱정', why: '지금 바로 고칠 수 있는 말이 있어요.' }] }, target: { choice: 'sorry' }, difficulty: 0.25,
                  levels: { easy: { toolOptions: { choices: [{ id: 'keep', text: '모르는 척 계속 말해요', result: '민지는 하던 말을 잊어버려요', mood: '속상함', why: '말이 끊긴 민지의 마음은 어떨까요?' }, { id: 'sorry', text: '"미안, 계속 말해 줘" 해요', result: '민지가 하던 말을 끝까지 해요', mood: '고마움' }] } } },
                  conclude: '끼어든 것을 알았을 때 바로 "미안, 계속 말해"라고 하면 대화를 다시 이을 수 있어요.' },
              ],
            },
            {
              id: 'a3', title: '활동 3. 모둠 대화 하고 스스로 돌아보기', minutes: 8, tool: 'emotion',
              teacher: '먼저 돌아보기 차례를 놓은 뒤, 네 명 모둠으로 "우리 반에서 하고 싶은 놀이"를 정하게 한다(4분). 끝나면 "점검 칸마다 내가 한 만큼 눈금을 골라요. \'아직이에요\'를 골라도 틀린 것이 아니에요. 그 칸이 다음에 바꿀 점이에요"라고 말한다. 세 칸 모두 "잘했어요"를 고른 학생에게는 짝에게 "내가 끼어든 적 있었어?"라고 물어보게 하고, 짝의 말을 듣고 다시 골라도 된다고 한다. 말을 많이 한 것을 잘한 점으로 말하는 학생에게는 점검 칸을 다시 읽게 한다.',
              task: '돌아보기 차례를 알고, 모둠 대화를 한 뒤 점검 칸마다 내가 한 만큼 눈금을 골라요. 정답은 없어요.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '대화를 돌아보는 차례예요. 할 일을 차례대로 놓아 보세요.', toolOptions: { mode: 'order', slots: ['첫째', '둘째', '셋째', '넷째'], cards: [{ id: 'say', text: '바꿀 점을 하나 말해요' }, { id: 'mark', text: '점검 칸마다 눈금을 골라요' }, { id: 'talk', text: '모둠 대화를 해요' }, { id: 'low', text: '"아직이에요" 칸을 찾아요' }] }, target: { order: ['talk', 'mark', 'low', 'say'] }, difficulty: 0.15,
                  hints: ['먼저 해야 다음 일을 할 수 있는 것이 무엇인지 생각해요. 대화를 해야 돌아볼 수 있어요.', '앞의 일이 끝나야 할 수 있는 일이 앞에 와 있지 않은지 하나씩 살펴요. 바꿀 점은 돌아본 다음에야 알 수 있어요.'],
                  levels: { easy: { prompt: '대화를 돌아보는 차례예요. 세 가지 일을 차례대로 놓아 보세요.', toolOptions: { slots: ['첫째', '둘째', '셋째'], cards: [{ id: 'say', text: '바꿀 점을 하나 말해요' }, { id: 'talk', text: '모둠 대화를 해요' }, { id: 'mark', text: '점검 칸마다 눈금을 골라요' }] }, target: { order: ['talk', 'mark', 'say'] } } } },
                { prompt: '모둠 대화를 마쳤어요. 끝까지 듣고 말했는지, 내가 한 만큼 눈금을 고르고 "다 했어요"를 누르세요.', free: true, toolOptions: { mode: 'scale', steps: 3, situation: '끝까지 듣고 말했나요?', motif: 'flower', ask: '나는 얼마나 해냈나요?', scaleLabels: { 1: '아직이에요', 2: '조금 했어요', 3: '잘했어요' } } },
                { prompt: '다음 친구에게 차례를 넘겼는지, 내가 한 만큼 눈금을 고르고 "다 했어요"를 누르세요.', free: true, toolOptions: { mode: 'scale', steps: 3, situation: '다음 친구에게 차례를 넘겼나요?', motif: 'sun', ask: '나는 얼마나 해냈나요?', scaleLabels: { 1: '아직이에요', 2: '조금 했어요', 3: '잘했어요' } } },
                { prompt: '말을 적게 한 친구에게 물어봤는지, 짝에게도 물어본 뒤 눈금을 고르고 "다 했어요"를 누르세요.', free: true, toolOptions: { mode: 'scale', steps: 3, situation: '말을 적게 한 친구에게 "네 생각은?" 하고 물어봤나요?', motif: 'star', ask: '나는 얼마나 해냈나요?', scaleLabels: { 1: '아직이에요', 2: '조금 했어요', 3: '잘했어요' } } },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"다음 대화에서 내가 바꿀 점 한 가지를 말해 볼까요?" 바꿀 점을 "말을 더 많이 할래요"라고 하는 학생에게는 "점검표의 어느 칸과 이어지나요?"라고 묻는다. 출구 2번에서 말한 양을 고른 학생은 다음 차시 시작 전에 따로 점검표를 함께 읽는다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '말차례를 지켰나요?', items: [{ id: 'w', text: '친구 말이 끝날 때까지 기다렸어요' }, { id: 'f', text: '가장 먼저 말했어요' }, { id: 'n', text: '이름을 불러 차례를 넘겼어요' }, { id: 'b', text: '가장 오래 말했어요' }] }, prompt: '말차례를 지켰는지 알려 주는 항목에만 표시하세요.', target: { checklist: ['w', 'n'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '하윤이의 점검 가운데 말차례를 잘 돌아본 것은 무엇인가요?', options: ['"말을 제일 많이 해서 잘했어요."', '"끼어든 적이 있어서 다음엔 기다릴래요."', '"목소리가 커서 잘했어요."'], answer: 1, difficulty: 0.2, explain: '말차례는 기다리고 넘겼는지로 돌아봐요. 바꿀 점을 찾은 하윤이가 잘 돌아봤어요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '나의 말차례 점검표',
        items: [
          { type: 'table', prompt: '오늘 대화를 떠올려 ○, △, ✕ 로 표시하세요.', columns: ['점검할 것', '나의 표시'], cells: [['끝까지 듣고 말했어요', ''], ['다음 친구에게 차례를 넘겼어요', ''], ['친구 말을 되풀이했어요', ''], ['말을 적게 한 친구에게 물어봤어요', '']] },
          { type: 'choice', prompt: '말차례 점검표에 들어가지 않아도 되는 것에 ○ 하세요.', options: ['끝까지 듣고 말했어요', '목소리가 가장 컸어요', '차례를 넘겼어요'], answer: '목소리가 가장 컸어요' },
          { type: 'blank', prompt: '혼자 오래 말하는 친구에게 할 말을 쓰세요.', text: '"______아, 이제 ______ 차례야."', answer: '(친구 이름), (다른 친구 이름)' },
          { type: 'short', prompt: '다음 대화에서 내가 바꿀 점을 한 가지 쓰세요.' },
        ],
        easy: {
          note: '말을 많이 했는지가 아니라, 기다리고 넘겼는지를 봐요.',
          items: [
            { type: 'table', prompt: '오늘 대화를 떠올려 ○ 또는 ✕ 로 표시하세요.', columns: ['점검할 것', '나의 표시'], cells: [['끝까지 듣고 말했어요', ''], ['차례를 넘겼어요', '']] },
            { type: 'choice', prompt: '말차례를 잘 지킨 것에 ○ 하세요.', options: ['친구 말이 끝날 때까지 기다렸어요', '가장 오래 말했어요'], answer: '친구 말이 끝날 때까지 기다렸어요' },
            { type: 'choice', prompt: '한 마디도 못 한 친구에게 할 말에 ○ 하세요.', options: ['"네 생각은 어때?"', '"그냥 듣기만 해."'], answer: '"네 생각은 어때?"' },
            { type: 'short', prompt: '다음에 바꿀 점을 한 가지 쓰세요.' },
          ],
        },
      },
      differentiation: {
        easy: '점검표 첫 문항은 항목 세 개, 활동 2의 보기는 두 개로 시작해요. 항목을 교사가 소리 내어 읽어 주고, 보기 결과를 짝과 함께 읽어요.',
        base: '점검 칸마다 내가 한 만큼 눈금을 고르고, "아직이에요" 칸에서 바꿀 점을 한 가지 말해요.',
        challenge: '활동 1 셋째 문항은 기록이 더 길고 바꿀 점이 하나 더 숨어 있어요. 모둠 대화에서는 말을 적게 한 친구에게 차례를 넘기는 역할을 맡고, 그 방법을 반 친구들에게 소개해요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 말차례를 지켰는지보다 말을 많이 했는지로 스스로 평가한다 → 점검표 칸(기다리기·넘기기·되풀이·살피기)으로만 표시한다. ② 말을 적게 한 친구 대신 말해 준다 → "네 생각은 어때?"로 묻는다. ③ 끼어든 것을 알아도 모르는 척한다 → "미안, 계속 말해"를 연습한다. 스스로 점검은 정직하게 표시하는 것이 목적이므로 표시 개수로 칭찬하지 않는다.',
    }),

    // ───────────────────────── 6. 바른 발표 자세 ─────────────────────────
    L(6, {
      title: '바른 자세와 잘 들리는 목소리 고르기',
      objective: '발표하는 모습을 보고 바른 몸가짐 세 가지를 고르고, 잘 들리는 목소리와 너무 작은 목소리를 구분할 수 있다.',
      standards: SPEAK,
      illustration: ART('a child standing straight at the front of a classroom giving a short talk while classmates listen from their desks', [
        { motif: 'sun', x: 406, y: 58, s: 0.8 }, { motif: 'cloud', x: 120, y: 52 }, { motif: 'hills', y: 208 },
        { motif: 'house', x: 240, y: 216, color: 'sky', s: 1.1 }, { motif: 'tree', x: 90, y: 216 }, { motif: 'tree', x: 392, y: 216, color: 'peach' },
        { motif: 'text', x: 240, y: 112, text: '바르게 서서 말해요', size: 22 },
      ]),
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '교사가 두 번 발표를 해 보인다. 한 번은 몸을 흔들며 바닥을 보고 작게, 한 번은 바르게 서서 친구들을 보며 또박또박. "어느 쪽이 더 잘 들리고 믿음이 가나요? 무엇이 달랐나요?" 학생들이 목소리만 말하면 "선생님 눈은 어디를 보고 있었나요?"라고 덧붙여 묻는다. 시연 단추로 자세 카드가 가지에 나뉘는 것을 보여 준다.',
          student: '선생님의 두 발표에서 무엇이 달랐나요?',
          demo: { tool: 'mindmap', options: { topic: '발표하는 모습', shuffle: false, slots: [{ id: 'good', label: '바른 자세' }, { id: 'fix', label: '고칠 자세' }], cards: [{ id: 'st', text: '바르게 서요' }, { id: 'sw', text: '몸을 흔들어요' }] }, sequence: [{ sort: { good: ['st'], fix: ['sw'] } }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 바른 자세와 고칠 자세 나누기', minutes: 9, tool: 'mindmap',
              teacher: '카드를 넣기 전에 모두 일어나 "두 발을 모으고, 손을 가지런히, 친구들을 봐요"를 몸으로 해 본다. "바닥만 봐요"를 바른 자세에 넣는 학생에게 "선생님이 바닥만 보면 여러분은 선생님 말을 듣고 싶을까요?"라고 묻는다.',
              task: '발표하는 모습 카드를 바른 자세와 고칠 자세로 나누어 넣어요.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '발표하는 모습을 바른 자세와 고칠 자세로 나누어 보세요.', toolOptions: { topic: '발표하는 모습', slots: [{ id: 'good', label: '바른 자세' }, { id: 'fix', label: '고칠 자세' }], cards: [{ id: 'feet', text: '두 발을 모으고 서요' }, { id: 'eyes', text: '듣는 친구들을 봐요' }, { id: 'floor', text: '바닥만 봐요' }, { id: 'swing', text: '몸을 좌우로 흔들어요' }] }, target: { sort: { good: ['feet', 'eyes'], fix: ['floor', 'swing'] } }, difficulty: 0.1 },
                { prompt: '이번에는 손과 얼굴을 살펴요. 바른 자세와 고칠 자세로 나누어 보세요.', toolOptions: { topic: '손과 얼굴', slots: [{ id: 'good', label: '바른 자세' }, { id: 'fix', label: '고칠 자세' }], cards: [{ id: 'hand', text: '손을 가지런히 모아요' }, { id: 'hair', text: '머리를 자꾸 만져요' }, { id: 'pocket', text: '주머니에 손을 넣어요' }, { id: 'face', text: '얼굴을 들고 웃어요' }, { id: 'paper', text: '종이로 얼굴을 가려요' }] }, target: { sort: { good: ['hand', 'face'], fix: ['hair', 'pocket', 'paper'] } }, difficulty: 0.2,
                  levels: { easy: { prompt: '이번에는 손과 얼굴을 살펴요. 세 장을 바른 자세와 고칠 자세로 나누어 보세요.', toolOptions: { cards: [{ id: 'hand', text: '손을 가지런히 모아요' }, { id: 'pocket', text: '주머니에 손을 넣어요' }, { id: 'face', text: '얼굴을 들고 웃어요' }] }, target: { sort: { good: ['hand', 'face'], fix: ['pocket'] } } } } },
                { prompt: '민지는 목소리가 크지만 바닥만 봐요. 민지의 모습을 나누어 보세요.', toolOptions: { topic: '민지의 발표', slots: [{ id: 'good', label: '잘했어요' }, { id: 'fix', label: '고칠 점' }], cards: [{ id: 'loud', text: '맨 뒤까지 들리게 말해요' }, { id: 'down', text: '고개를 숙이고 바닥만 봐요' }, { id: 'tall', text: '허리를 펴고 서요' }] }, target: { sort: { good: ['loud', 'tall'], fix: ['down'] } }, difficulty: 0.25,
                  predict: { q: '목소리만 크면 바른 발표 자세일까요?', options: ['네, 잘 들리니까요', '눈과 몸도 봐야 해요'], answer: 1 },
                  conclude: '목소리가 커도 바닥만 보면 고칠 점이 있어요. 목소리·눈·몸을 함께 봐요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 눈·몸·목소리로 나누어 보기', minutes: 9, tool: 'mindmap',
              teacher: '"바른 발표 자세는 세 가지로 볼 수 있어요. 눈, 몸, 목소리." 칠판에 세 낱말을 쓰고 가지에 하나씩 대응시킨다. "또박또박"을 몸 가지에 넣는 학생이 있으니 "또박또박은 무엇으로 하나요? 입과 소리죠"라고 짚는다. 바르지 않은 카드가 섞인 문항은 그 카드를 어느 가지에도 넣지 않는다. 도전 단계는 첫 문항부터 여섯 장으로 나온다.',
              task: '바른 발표 자세 카드를 눈·몸·목소리 가지로 나누어 넣어요. 바르지 않은 카드는 남겨요.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '바른 발표 자세 카드를 눈·몸·목소리 가지로 나누어 보세요.', toolOptions: { topic: '바른 발표 자세', slots: [{ id: 'eye', label: '눈' }, { id: 'body', label: '몸' }, { id: 'voice', label: '목소리' }], cards: [{ id: 'look', text: '친구들을 골고루 봐요' }, { id: 'stand', text: '허리를 펴고 서요' }, { id: 'clear', text: '또박또박 말해요' }] }, target: { sort: { eye: ['look'], body: ['stand'], voice: ['clear'] } }, difficulty: 0.15,
                  levels: { challenge: { prompt: '바른 발표 자세 카드 여섯 장을 눈·몸·목소리 가지로 나누어 보세요. 가지마다 두 장씩이에요.', toolOptions: { cards: [{ id: 'front', text: '앞을 보고 말해요' }, { id: 'turn', text: '왼쪽 오른쪽 친구도 봐요' }, { id: 'feet', text: '두 발을 모아요' }, { id: 'hands', text: '손을 가지런히 해요' }, { id: 'slow', text: '알맞게 천천히 말해요' }, { id: 'back', text: '맨 뒤까지 들리게 말해요' }] }, target: { sort: { eye: ['front', 'turn'], body: ['feet', 'hands'], voice: ['slow', 'back'] } } } } },
                { prompt: '더 해 보기: 여섯 장을 눈·몸·목소리 가지로 나누어 보세요.', extra: true, toolOptions: { topic: '바른 발표 자세', slots: [{ id: 'eye', label: '눈' }, { id: 'body', label: '몸' }, { id: 'voice', label: '목소리' }], cards: [{ id: 'front', text: '앞을 보고 말해요' }, { id: 'turn', text: '왼쪽 오른쪽 친구도 봐요' }, { id: 'feet', text: '두 발을 모아요' }, { id: 'hands', text: '손을 가지런히 해요' }, { id: 'slow', text: '알맞게 천천히 말해요' }, { id: 'back', text: '맨 뒤까지 들리게 말해요' }] }, target: { sort: { eye: ['front', 'turn'], body: ['feet', 'hands'], voice: ['slow', 'back'] } }, difficulty: 0.3 },
                { prompt: '바른 자세만 가지에 넣고, 바르지 않은 카드는 남겨 보세요.', toolOptions: { topic: '바른 발표 자세', slots: [{ id: 'eye', label: '눈' }, { id: 'body', label: '몸' }, { id: 'voice', label: '목소리' }], cards: [{ id: 'smile', text: '친구들과 눈을 맞춰요' }, { id: 'lean', text: '칠판에 기대어 서요' }, { id: 'still', text: '몸을 곧게 세워요' }, { id: 'mumble', text: '입속으로 웅얼거려요' }, { id: 'end', text: '끝말까지 분명히 말해요' }] }, target: { sort: { eye: ['smile'], body: ['still'], voice: ['end'] } }, difficulty: 0.3 },
              ],
            },
            {
              id: 'a3', title: '활동 3. 잘 들리는 목소리 고르기', minutes: 8, tool: 'mindmap',
              teacher: '교사가 같은 문장을 너무 작게, 알맞게, 너무 크게 세 번 말한다. "맨 뒤에 앉은 친구, 어느 것이 잘 들렸나요?" 너무 큰 소리를 잘 들리는 소리로 고르는 학생에게 "소리를 지르면 듣는 사람의 귀는 어떨까요?"라고 묻는다.',
              task: '발표 목소리를 설명한 카드를 잘 들리는 목소리와 고칠 목소리로 나누어요.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '목소리 카드를 잘 들리는 목소리와 너무 작은 목소리로 나누어 보세요.', toolOptions: { topic: '발표 목소리', slots: [{ id: 'ok', label: '잘 들려요' }, { id: 'small', label: '너무 작아요' }], cards: [{ id: 'back', text: '맨 뒤 친구도 잘 들어요' }, { id: 'front', text: '앞줄 친구만 겨우 들어요' }, { id: 'mouth', text: '입속으로 웅얼거려요' }, { id: 'clear', text: '한 글자씩 또박또박 들려요' }] }, target: { sort: { ok: ['back', 'clear'], small: ['front', 'mouth'] } }, difficulty: 0.15 },
                { prompt: '목소리 카드를 세 가지로 나누어 보세요.', toolOptions: { topic: '목소리 크기', slots: [{ id: 'small', label: '너무 작아요' }, { id: 'ok', label: '알맞아요' }, { id: 'big', label: '너무 커요' }], cards: [{ id: 'whisper', text: '짝만 들리게 속삭여요' }, { id: 'room', text: '교실 모두에게 들려요' }, { id: 'shout', text: '귀가 아프게 소리쳐요' }, { id: 'tiny', text: '모기 소리처럼 작아요' }] }, target: { sort: { small: ['whisper', 'tiny'], ok: ['room'], big: ['shout'] } }, difficulty: 0.25,
                  conclude: '발표 목소리는 너무 작지도 크지도 않게, 맨 뒤 친구까지 들리는 크기가 알맞아요.' },
                { prompt: '잘 들리게 말하는 방법만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '잘 들리게 말하기', cards: [{ id: 'mouth', text: '입을 크게 벌려 말해요' }, { id: 'breath', text: '숨을 쉬고 시작해요' }, { id: 'fast', text: '빨리 끝내려고 서둘러요' }, { id: 'cover', text: '손으로 입을 가려요' }] }, target: { pick: ['mouth', 'breath'] }, difficulty: 0.2 },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"바른 발표 자세 세 가지를 몸으로 보여 줄 사람?" 두세 명이 일어나 눈·몸·목소리를 보여 준다. 출구 1번에서 목소리 카드만 바른 자세로 넣은 학생은 자세와 시선을 보지 않는 오개념이 남은 것이니 다음 시간 짝 관찰 때 살핀다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { topic: '하윤이의 발표', slots: [{ id: 'good', label: '잘했어요' }, { id: 'fix', label: '고칠 점' }], cards: [{ id: 'v', text: '또박또박 잘 들려요' }, { id: 'e', text: '천장만 올려다봐요' }, { id: 'b', text: '두 발을 모으고 서요' }] }, prompt: '하윤이의 발표 모습을 잘한 점과 고칠 점으로 나누어 보세요.', target: { sort: { good: ['v', 'b'], fix: ['e'] } }, difficulty: 0.2 },
            { type: 'choice', prompt: '발표할 때 알맞은 목소리는 무엇인가요?', options: ['짝만 들리는 작은 목소리', '맨 뒤 친구까지 들리는 목소리', '귀가 아플 만큼 큰 목소리'], answer: 1, difficulty: 0.1, explain: '맨 뒤 친구까지 들리되 소리치지 않는 목소리가 발표에 알맞아요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '바른 발표 자세',
        items: [
          { type: 'table', prompt: '바른 발표 자세를 눈·몸·목소리로 나누어 쓰세요.', columns: ['눈', '몸', '목소리'], rows: 2 },
          { type: 'check', prompt: '고칠 자세에 모두 ✓ 하세요.', options: ['바닥만 봐요', '두 발을 모아요', '몸을 흔들어요', '주머니에 손을 넣어요'], answer: '바닥만 봐요, 몸을 흔들어요, 주머니에 손을 넣어요' },
          { type: 'choice', prompt: '발표하기에 알맞은 목소리에 ○ 하세요.', options: ['모기 소리처럼 작게', '교실 모두에게 들리게', '귀가 아프게 크게'], answer: '교실 모두에게 들리게' },
          { type: 'draw', prompt: '바른 자세로 발표하는 내 모습을 그려 보세요.' },
        ],
        easy: {
          note: '눈은 친구들을, 몸은 곧게, 목소리는 또박또박.',
          items: [
            { type: 'choice', prompt: '바른 자세에 ○ 하세요.', options: ['두 발을 모으고 서요', '몸을 흔들어요'], answer: '두 발을 모으고 서요' },
            { type: 'choice', prompt: '발표할 때 눈은 어디를 보나요?', options: ['듣는 친구들', '바닥'], answer: '듣는 친구들' },
            { type: 'choice', prompt: '알맞은 목소리에 ○ 하세요.', options: ['또박또박 잘 들리게', '입속으로 웅얼웅얼'], answer: '또박또박 잘 들리게' },
            { type: 'draw', prompt: '바르게 서서 발표하는 모습을 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '카드를 맞는 가지에 넣으면 초록 테두리가 생기고, 틀리면 까닭과 함께 되돌아와요. 활동 1 둘째 문항은 카드 세 장으로 시작해요. 칠판의 눈·몸·목소리 그림을 보며 해요.',
        base: '모두 넣은 뒤 확인을 눌러 스스로 고쳐요.',
        challenge: '활동 2 첫 문항이 여섯 장 문항으로 바뀌어 나와요. 선생님의 "고칠 자세" 발표를 보고 바꿀 점을 세 가지 말해요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 목소리 크기만 살피고 서 있는 자세나 시선은 보지 않는다 → 눈·몸·목소리 세 가지를 늘 함께 본다. ② 큰 소리일수록 잘 들린다고 생각한다 → 소리치기는 너무 큰 목소리. ③ 친구들을 보는 것이 부끄러워 한 사람만 본다 → 왼쪽·가운데·오른쪽을 번갈아 보게 한다. 발표가 부끄러운 학생은 오늘 자리에서 일어나 한 문장만 말해도 칭찬한다.',
    }),

    // ───────────────────────── 7. 자리에 맞는 목소리 ─────────────────────────
    L(7, {
      title: '자리에 맞게 목소리 크기와 빠르기 정하기',
      objective: '교실 앞, 모둠 안, 강당처럼 발표하는 자리에 맞게 목소리 크기를 정하고, 친구 발표의 고칠 점에 알맞은 방법을 이을 수 있다.',
      standards: SPEAK,
      illustration: ART('a school auditorium stage with a child speaking to a large audience, next to a cozy classroom corner where four children share in a small circle', [
        { motif: 'star', x: 80, y: 50 }, { motif: 'star', x: 400, y: 46, color: 'rose' }, { motif: 'cloud', x: 240, y: 46 },
        { motif: 'hills', y: 210 }, { motif: 'house', x: 130, y: 218, color: 'lavender', s: 1.1 }, { motif: 'house', x: 350, y: 218, s: 0.8 },
        { motif: 'text', x: 240, y: 138, text: '어디에서 발표할까요?', size: 22 },
      ]),
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '"강당에서 발표할 때와 모둠 친구 넷에게 말할 때 목소리가 같아야 할까요?" 교사가 모둠 크기로 말해 본 뒤, 교실 맨 뒤까지 들리는 크기로 말해 본다. 시연 단추로 목소리 눈금을 보여 주며 "1은 속삭임, 5는 운동장에서 부르는 소리예요. 오늘은 자리에 맞는 칸을 골라요"라고 말한다.',
          student: '모둠에서 말할 때와 강당에서 말할 때 목소리는 어떻게 달라야 할까요?',
          demo: { tool: 'emotion', options: { mode: 'scale', situation: '모둠 친구 넷에게 내 생각을 말해요.', motif: 'house', ask: '목소리를 얼마나 크게 낼까요?', scaleLabels: { 1: '속삭임', 5: '운동장' } }, sequence: [{ level: 2 }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 자리에 맞는 목소리 크기 고르기', minutes: 9, tool: 'emotion',
              teacher: '눈금마다 교사가 그 크기로 "안녕하세요"를 말해 들려준다. "듣는 사람이 몇 명이고 얼마나 멀리 있나요?" 이 두 가지로 칸을 고르게 한다. 강당에서 5(운동장 소리)를 고르는 학생에게 "소리치면 말이 또박또박 들릴까요?"라고 되묻는다.',
              task: '발표하는 자리를 읽고, 듣는 사람 수와 거리를 생각해 목소리 크기 칸을 골라요.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '반 친구들 앞에 나가 주말 이야기를 해요. 목소리 크기를 골라 보세요.', toolOptions: { mode: 'scale', situation: '반 친구들 앞에 나가 주말에 한 일을 말해요.', motif: 'sun', ask: '목소리를 얼마나 크게 낼까요?', scaleLabels: { 1: '속삭임', 5: '운동장' }, after: '교실 맨 뒤 친구까지 들리는 크기예요.' }, target: { level: [3, 4] }, difficulty: 0.15,
                  levels: { easy: { toolOptions: { scaleLabels: { 1: '속삭임', 2: '모둠 친구', 3: '우리 반', 4: '강당', 5: '운동장' } } } } },
                { prompt: '모둠 친구 넷에게 그림을 소개해요. 목소리 크기를 골라 보세요.', toolOptions: { mode: 'scale', situation: '책상을 붙인 모둠 친구 넷에게 내 그림을 소개해요.', motif: 'flower', ask: '목소리를 얼마나 크게 낼까요?', scaleLabels: { 1: '속삭임', 5: '운동장' }, after: '옆 모둠의 이야기를 방해하지 않는 크기예요.' }, target: { level: 2 }, difficulty: 0.2,
                  levels: { easy: { toolOptions: { scaleLabels: { 1: '속삭임', 2: '모둠 친구', 3: '우리 반', 4: '강당', 5: '운동장' } } } } },
                { prompt: '넓은 강당에서 전교생에게 인사말을 해요. 목소리 크기를 골라 보세요.', toolOptions: { mode: 'scale', situation: '넓은 강당에서 전교생에게 우리 반을 소개해요(마이크 없음).', motif: 'star', ask: '목소리를 얼마나 크게 낼까요?', scaleLabels: { 1: '속삭임', 5: '운동장' }, after: '크게 내되 또박또박, 천천히 말해요.' }, target: { level: 4 }, difficulty: 0.25,
                  predict: { q: '강당이 넓으면 소리를 지를수록 잘 들릴까요?', options: ['네', '아니요', '잘 모르겠어요'], answer: 1 },
                  conclude: '넓은 곳에서는 크게 말하되, 소리치지 않고 천천히 또박또박 말해야 잘 들려요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 친구 발표의 고칠 점과 방법 잇기', minutes: 9, tool: 'mindmap',
              teacher: '교사가 "너무 빨리 말하기", "끝말 흐리기"를 흉내 내어 보여 주고 학생들이 무엇이 문제인지 말하게 한다. 그다음 가지(고칠 점)마다 알맞은 방법 카드를 잇는다. 빠르기 문제에 "더 크게 말해요"를 잇는 학생에게 "크게 말하면 빠른 말이 느려질까요?"라고 묻는다.',
              task: '친구 발표의 고칠 점(가지)마다 알맞은 방법 카드를 이어요.',
              levels: { easy: { live: true }, base: {}, challenge: {} },
              items: [
                { prompt: '고칠 점마다 알맞은 방법을 이어 보세요.', toolOptions: { mode: 'match', topic: '이렇게 고쳐요', slots: [{ id: 'fast', label: '말이 너무 빨라요' }, { id: 'down', label: '바닥만 봐요' }], cards: [{ id: 'slow', text: '쉼표마다 한 번 쉬어요' }, { id: 'look', text: '친구들 얼굴을 봐요' }, { id: 'loud', text: '더 크게 소리쳐요' }] }, target: { match: { fast: 'slow', down: 'look' } }, difficulty: 0.15,
                  hints: ['듣는 친구 자리에서 무엇이 불편한지 떠올리고, 그 불편함을 바로 덜어 주는 방법을 골라요.'],
                  levels: { challenge: { prompt: '고칠 점마다 알맞은 방법을 이어 보세요. 고칠 점과 맞지 않는 방법이 두 장 더 섞여 있어요.', toolOptions: { cards: [{ id: 'slow', text: '쉼표마다 한 번 쉬어요' }, { id: 'loud', text: '더 크게 소리쳐요' }, { id: 'look', text: '친구들 얼굴을 봐요' }, { id: 'short', text: '빨리 끝내려고 서둘러요' }, { id: 'paper', text: '종이를 얼굴 앞에 들어요' }] } } } },
                { prompt: '더 해 보기: 세 가지 고칠 점에 알맞은 방법을 이어 보세요.', extra: true,
                  hints: ['고칠 점이 몸인지, 말끝인지, 목소리 크기인지 먼저 나누어 생각하고 같은 쪽을 고치는 방법을 골라요.'],
                  toolOptions: { mode: 'match', topic: '발표 고치기', slots: [{ id: 'swing', label: '몸을 흔들어요' }, { id: 'blur', label: '끝말이 흐려요' }, { id: 'small', label: '목소리가 작아요' }], cards: [{ id: 'feet', text: '두 발을 바닥에 붙여요' }, { id: 'end', text: '"~했어요"까지 또렷하게' }, { id: 'back', text: '맨 뒤 친구에게 말하듯' }] }, target: { match: { swing: 'feet', blur: 'end', small: 'back' } }, difficulty: 0.25 },
                { prompt: '모둠 발표에서 생긴 일에 알맞은 방법을 이어 보세요.', toolOptions: { mode: 'match', topic: '모둠 발표', slots: [{ id: 'shout', label: '옆 모둠까지 시끄러워요' }, { id: 'one', label: '한 친구만 보고 말해요' }], cards: [{ id: 'lower', text: '목소리를 한 칸 낮춰요' }, { id: 'round', text: '모둠 친구를 돌아가며 봐요' }, { id: 'stop', text: '발표를 그만둬요' }] }, target: { match: { shout: 'lower', one: 'round' } }, difficulty: 0.2,
                  hints: ['모둠 발표는 듣는 사람이 가까이 몇 명뿐이에요. 누가 듣고 있는지 떠올리고 거기에 맞는 방법을 골라요.'] },
              ],
            },
            {
              id: 'a3', title: '활동 3. 목소리 크기 바꾸어 말해 보기', minutes: 8, tool: 'emotion', pair: true,
              teacher: '짝과 마주 서서 같은 문장("내가 좋아하는 색은 ○○이에요")을 눈금 2, 3, 4 크기로 차례로 말해 본다. 교사가 손가락으로 숫자를 보여 주면 반 전체가 그 크기로 말한다. 크기를 바꿀 때 빨라지는 학생에게 "크게 말할수록 더 천천히"라고 짚는다.',
              task: '짝과 함께 같은 문장을 자리에 맞는 목소리 크기로 바꾸어 말해요.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '모둠 크기(2)로 짝에게 좋아하는 색을 말하고 "다 했어요"를 누르세요.', free: true },
                { prompt: '교실 앞 발표 크기(3~4)로 같은 문장을 말해요. 짝이 맨 뒤까지 들릴지 말해 주세요.', free: true },
                { prompt: '크게 말하면서도 천천히 또박또박 말해 보고, 짝에게 빠르기가 어땠는지 물어보세요.', free: true },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"오늘 알게 된 것: 목소리 크기는 듣는 사람 수와 거리에 따라 달라요." 출구 1번은 수업에 없던 도서관 자리다. 2 이상을 고른 학생은 큰 소리가 늘 좋다고 생각하거나 듣는 사람 수만 보고 장소를 놓친 것이니, 다음 차시 발표 연습 전에 "여기는 어디이고, 누가 듣나요?" 두 질문으로 크기를 다시 고르게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'emotion', options: { mode: 'scale', situation: '조용한 도서관에서 옆자리 짝에게 재미있게 읽은 책을 알려 줘요.', motif: 'moon', ask: '목소리를 얼마나 크게 낼까요?', scaleLabels: { 1: '속삭임', 5: '운동장' } }, prompt: '도서관에서 옆자리 짝에게 읽은 책을 알려 줘요. 알맞은 목소리 크기를 골라 보세요.', target: { level: 1 }, difficulty: 0.2 },
            { type: 'choice', prompt: '준호가 발표할 때 말이 너무 빨라요. 어떤 방법이 알맞을까요?', options: ['더 크게 소리쳐요', '문장마다 한 번 쉬어요', '발표를 짧게 그만둬요'], answer: 1, difficulty: 0.15, explain: '빠른 말은 문장 사이에 한 번씩 쉬면 듣는 친구가 따라올 수 있어요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '자리에 맞는 목소리',
        items: [
          { type: 'table', prompt: '자리마다 알맞은 목소리 크기를 1~5로 쓰세요. (1 속삭임, 5 운동장)', columns: ['자리', '목소리 크기'], cells: [['짝에게 비밀 이야기', ''], ['모둠 친구 넷에게', ''], ['반 친구들 앞 발표', ''], ['넓은 강당', '']] },
          { type: 'choice', prompt: '끝말이 흐린 친구에게 알맞은 방법에 ○ 하세요.', options: ['"~했어요"까지 또렷하게 말해요', '더 빨리 말해요', '손으로 입을 가려요'], answer: '"~했어요"까지 또렷하게 말해요' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '크게 말할수록 더 ______ 또박또박 말해요.', answer: '천천히' },
          { type: 'short', prompt: '내 발표에서 고치고 싶은 점 하나와 그 방법을 쓰세요.' },
        ],
        easy: {
          note: '듣는 사람이 많고 멀수록 목소리를 조금 더 크게 해요. 소리치지는 않아요.',
          items: [
            { type: 'choice', prompt: '모둠 친구 넷에게 말할 때 알맞은 목소리에 ○ 하세요.', options: ['조금 작게', '운동장처럼 크게'], answer: '조금 작게' },
            { type: 'choice', prompt: '반 친구들 앞에서 발표할 때 알맞은 목소리에 ○ 하세요.', options: ['맨 뒤까지 들리게', '짝만 들리게'], answer: '맨 뒤까지 들리게' },
            { type: 'choice', prompt: '말이 너무 빠를 때 알맞은 방법에 ○ 하세요.', options: ['한 번씩 쉬어요', '더 빨리 끝내요'], answer: '한 번씩 쉬어요' },
            { type: 'short', prompt: '내가 발표할 때 지킬 것을 한 가지 쓰세요.' },
          ],
        },
      },
      differentiation: {
        easy: '활동 1 앞 두 문항은 눈금마다 자리 이름(모둠 친구·우리 반·강당)이 붙어 나와요. 교사가 눈금마다 소리를 들려준 뒤 고르고, 짝 말하기는 칠판의 숫자 손가락을 보고 따라 해요.',
        base: '듣는 사람 수와 거리를 생각해 스스로 칸을 골라요.',
        challenge: '활동 2 첫 문항에 맞지 않는 방법 카드가 두 장 더 섞이고, 더 해 보기(세 가지 고칠 점)까지 풀어요. 짝의 발표에서 고칠 점과 방법을 하나씩 짝에게 말해 줘요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 큰 소리일수록 좋은 발표라고 생각한다 → 자리에 맞는 크기, 강당에서도 소리치지 않기. ② 목소리를 크게 하면 말이 빨라진다 → "크게, 그리고 천천히". ③ 목소리 크기만 고치고 시선은 그대로 둔다 → 지난 시간 눈·몸·목소리를 함께 떠올린다. 눈금 숫자(1~5)는 앞으로의 발표 차시에서 "3 크기로 말해요"처럼 계속 쓴다.',
    }),

    // ───────────────────────── 8. 낱말로 준비해 문장으로 말하기 ─────────────────────────
    L(8, {
      title: '낱말 세 개로 준비해 문장으로 늘려 말하기',
      objective: '발표할 내용을 낱말 세 개로 적고, 자리에 서서 숨을 고른 뒤 그 낱말을 문장으로 늘려 말할 수 있다.',
      standards: SPEAK,
      illustration: ART('a child holding a small paper card with three simple picture words, taking a deep breath before speaking at the front of a sunny classroom', [
        { motif: 'sun', x: 404, y: 58, s: 0.8 }, { motif: 'cloud', x: 120, y: 50 }, { motif: 'cloud', x: 300, y: 38, s: 0.6 },
        { motif: 'hills', y: 206 }, { motif: 'tree', x: 96, y: 214 }, { motif: 'leaf', x: 210, y: 180 }, { motif: 'leaf', x: 270, y: 176, color: 'mint' },
        { motif: 'text', x: 240, y: 132, text: '낱말 세 개면 준비 끝!', size: 22 },
      ]),
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '칠판에 "토요일 · 수족관 · 상어" 세 낱말을 쓴다. 교사가 먼저 낱말만 읽어 "토요일, 수족관, 상어." 하고 멈춘 뒤 "이게 발표일까요?"라고 묻는다. 이어서 "토요일에 가족과 수족관에 갔어요. 커다란 상어가 머리 위로 지나갔어요." 하고 문장으로 말해 보인다. 시연 단추로 발표 준비 차례가 놓이는 것을 보여 준다.',
          student: '낱말만 읽는 것과 문장으로 말하는 것은 무엇이 다를까요?',
          demo: { tool: 'story', options: { mode: 'order', shuffle: false, slots: ['첫째', '둘째', '셋째'], cards: [{ id: 'p1', text: '말할 일 하나 정하기' }, { id: 'p2', text: '낱말 세 개 적기' }, { id: 'p3', text: '문장으로 말해 보기' }] }, sequence: [{ order: ['p1', 'p2', 'p3'] }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 발표 준비와 시작 차례 놓기', minutes: 8, tool: 'story',
              teacher: '"앞에 나가자마자 바로 말을 시작하면 어떻게 될까요?" 숨을 고르지 않고 빨리 말하는 모습을 흉내 낸 뒤, 반 전체가 "서기 – 숨 한 번 – 인사"를 해 본다. 낱말 적기를 연습 뒤에 놓는 학생에게 "무엇을 보고 연습할까요?"라고 묻는다.',
              task: '발표를 준비하고 시작하는 일을 차례대로 놓아 봅시다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '발표를 준비하는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', slots: ['첫째', '둘째', '셋째'], cards: [{ id: 'pick', text: '말할 일 하나 고르기' }, { id: 'word', text: '낱말 세 개 적기' }, { id: 'try', text: '짝 앞에서 연습하기' }] }, target: { order: ['pick', 'word', 'try'] }, difficulty: 0.1 },
                { prompt: '앞에 나가서 발표를 시작하는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', slots: ['첫째', '둘째', '셋째', '넷째'], cards: [{ id: 'stand', text: '정한 자리에 서요' }, { id: 'breath', text: '숨을 한 번 골라요' }, { id: 'hello', text: '"안녕하세요" 인사해요' }, { id: 'talk', text: '낱말을 보며 말해요' }] }, target: { order: ['stand', 'breath', 'hello', 'talk'] }, difficulty: 0.2,
                  predict: { q: '자리에 서자마자 바로 말을 시작하면 어떨까요?', options: ['더 잘 돼요', '급하게 빨라지기 쉬워요'], answer: 1 },
                  conclude: '자리에 서서 숨을 한 번 고르면 마음이 차분해지고 말이 빨라지지 않아요.' },
                { prompt: '발표를 마치는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', slots: ['첫째', '둘째', '셋째'], cards: [{ id: 'last', text: '마지막 문장을 또렷하게 말해요' }, { id: 'thanks', text: '"들어 주셔서 고맙습니다"' }, { id: 'sit', text: '천천히 자리로 돌아가요' }] }, target: { order: ['last', 'thanks', 'sit'] }, difficulty: 0.15 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 발표할 낱말 세 개 고르기', minutes: 9, tool: 'mindmap',
              teacher: '"낱말 세 개는 언제, 어디서, 무엇을 했는지 알려 줘요." 가지마다 하나씩 넣게 한다. 발표와 상관없는 낱말(내 필통)을 넣는 학생에게 "이 낱말이 주말 이야기를 알려 주나요?"라고 묻는다. 셋째 문항은 운동회 발표에 쓸 낱말만 고른다.',
              task: '발표할 일을 알려 주는 낱말을 언제·어디서·무엇을 가지에 넣어요. 상관없는 낱말은 남겨요.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '주말 이야기 낱말을 언제·어디서·무엇을 가지에 넣어 보세요.', toolOptions: { topic: '주말에 한 일', slots: [{ id: 'when', label: '언제' }, { id: 'where', label: '어디서' }, { id: 'what', label: '무엇을' }], cards: [{ id: 'sat', text: '토요일' }, { id: 'aq', text: '수족관' }, { id: 'shark', text: '상어 구경' }, { id: 'case', text: '내 필통' }] }, target: { sort: { when: ['sat'], where: ['aq'], what: ['shark'] } }, difficulty: 0.15 },
                { prompt: '가족과 한 일 낱말을 가지에 넣어 보세요. 상관없는 낱말은 남겨요.', toolOptions: { topic: '가족과 한 일', slots: [{ id: 'when', label: '언제' }, { id: 'who', label: '누구와' }, { id: 'what', label: '무엇을' }], cards: [{ id: 'night', text: '어젯밤' }, { id: 'grandpa', text: '할아버지' }, { id: 'dumpling', text: '만두 빚기' }, { id: 'rain', text: '우산' }, { id: 'tue', text: '내일 숙제' }] }, target: { sort: { when: ['night'], who: ['grandpa'], what: ['dumpling'] } }, difficulty: 0.25,
                  levels: { challenge: { prompt: '가족과 한 일 낱말이 일곱 개예요. 가지에 넣고, 이 이야기와 상관없는 낱말은 남겨 보세요.', toolOptions: { cards: [{ id: 'night', text: '어젯밤' }, { id: 'grandpa', text: '할아버지' }, { id: 'dumpling', text: '만두 빚기' }, { id: 'rain', text: '우산' }, { id: 'flour', text: '밀가루 반죽' }, { id: 'tue', text: '내일 숙제' }, { id: 'trip', text: '다음 주 소풍' }] }, target: { sort: { when: ['night'], who: ['grandpa'], what: ['dumpling', 'flour'] } } } } },
                { prompt: '운동회 이야기를 발표해요. 발표에 쓸 낱말만 골라 보세요.', toolOptions: { mode: 'pick', topic: '운동회 발표 낱말', cards: [{ id: 'day', text: '운동회 날' }, { id: 'relay', text: '이어달리기' }, { id: 'bat', text: '바통' }, { id: 'snow', text: '눈사람' }, { id: 'tv', text: '텔레비전' }] }, target: { pick: ['day', 'relay', 'bat'] }, difficulty: 0.2 },
              ],
            },
            {
              id: 'a3', title: '활동 3. 낱말을 문장으로 늘리기', minutes: 9, tool: 'story',
              teacher: '"낱말 하나를 문장 하나로 키워요. 누가, 어디서, 어떻게를 붙이면 돼요." 교사가 "수족관 → 가족과 수족관에 갔어요"를 손으로 늘리는 몸짓과 함께 보여 준다. 셋째 문항에서 낱말 카드(상어)를 느낌 자리에 넣는 학생에게 "그러면 내 마음이 들어갔나요?"라고 묻는다.',
              task: '적어 둔 낱말을 문장으로 늘린 발표 말을 완성해요.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '낱말 "토요일·수족관"을 문장으로 늘렸어요. 빈칸에 알맞은 말을 넣어 보세요.', toolOptions: { mode: 'fill', title: '낱말: 토요일 · 수족관 · 상어', cards: [{ id: 'sat', text: '토요일' }, { id: 'pen', text: '연필' }, { id: 'tmr', text: '내일' }], slots: [{ id: 's1', who: '서준', motif: 'sun', label: '___에 가족과 수족관에 갔어요.' }] }, target: { fill: { s1: 'sat' } }, difficulty: 0.1,
                  levels: { easy: { toolOptions: { cards: [{ id: 'sat', text: '토요일' }, { id: 'pen', text: '연필' }] } } } },
                { prompt: '낱말 "어젯밤·할아버지·만두"로 만든 발표 문장을 차례대로 놓아 보세요.', toolOptions: { mode: 'order', slots: ['처음', '가운데', '끝'], cards: [{ id: 'm1', text: '어젯밤 할아버지 댁에 갔어요.' }, { id: 'm2', text: '할아버지와 만두를 빚었어요.' }, { id: 'm3', text: '내가 빚은 만두가 제일 맛있었어요.' }] }, target: { order: ['m1', 'm2', 'm3'] }, difficulty: 0.2 },
                { prompt: '낱말 "상어"를 느낌이 들어간 문장으로 늘려요. 알맞은 말을 넣어 보세요.', toolOptions: { mode: 'fill', title: '낱말 그대로 읽기 대신 문장으로!', cards: [{ id: 'wow', text: '깜짝 놀랐어요' }, { id: 'shark', text: '상어' }, { id: 'aq', text: '수족관' }], slots: [{ id: 's1', who: '서준', motif: 'sun', label: '상어 이빨이 아주 커서 ___.' }] }, target: { fill: { s1: 'wow' } }, difficulty: 0.25,
                  conclude: '낱말은 기억을 돕는 쪽지예요. 발표할 때는 낱말에 내 생각과 느낌을 붙여 문장으로 말해요.' },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"내 주말 이야기를 낱말 세 개로 적어 볼까요?" 활동지 첫 칸에 적게 한 뒤, 두세 명이 앞에 나와 서기 – 숨 – 인사 – 문장 순서로 말한다. 낱말만 읽고 들어가는 학생에게 "그 낱말에서 무슨 일이 있었나요?"라고 한 번 더 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'story', options: { mode: 'fill', title: '낱말: 일요일 · 공원 · 연', cards: [{ id: 'kite', text: '연을 날렸어요' }, { id: 'k', text: '연' }, { id: 'sun', text: '일요일' }], slots: [{ id: 's1', who: '하윤', motif: 'cloud', label: '일요일에 공원에서 아빠와 ___.' }] }, prompt: '하윤이가 낱말을 문장으로 늘려 말해요. 빈칸에 알맞은 말을 넣어 보세요.', target: { fill: { s1: 'kite' } }, difficulty: 0.15 },
            { type: 'choice', prompt: '앞에 나가 자리에 선 뒤 가장 먼저 할 일은 무엇인가요?', options: ['적은 낱말을 빠르게 읽어요', '숨을 한 번 고르고 인사해요', '바로 자리로 돌아가요'], answer: 1, difficulty: 0.1, explain: '숨을 한 번 고르고 인사하면 차분하게 발표를 시작할 수 있어요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '낱말 세 개로 발표 준비',
        items: [
          { type: 'table', prompt: '내가 발표할 일을 낱말 세 개로 적으세요.', columns: ['언제', '어디서', '무엇을'], rows: 1 },
          { type: 'short', prompt: '위의 낱말을 문장 두 개로 늘려 쓰세요.' },
          { type: 'choice', prompt: '낱말을 문장으로 바르게 늘린 것에 ○ 하세요. (낱말: 바다)', options: ['"바다."', '"여름에 가족과 바다에 갔어요."', '"바다, 바다, 바다."'], answer: '"여름에 가족과 바다에 갔어요."' },
          { type: 'blank', prompt: '발표를 시작하는 차례를 쓰세요.', text: '자리에 서요 → 숨을 ______ → "안녕하세요" 인사해요 → 말해요', answer: '골라요' },
        ],
        easy: {
          note: '낱말 하나에 "누구와", "어디서", "어땠는지"를 붙이면 문장이 돼요.',
          items: [
            { type: 'table', prompt: '내가 말할 일을 낱말 세 개로 적으세요.', columns: ['낱말 1', '낱말 2', '낱말 3'], rows: 1 },
            { type: 'choice', prompt: '문장으로 말한 것에 ○ 하세요.', options: ['"공원."', '"공원에서 놀았어요."'], answer: '"공원에서 놀았어요."' },
            { type: 'choice', prompt: '자리에 서서 먼저 할 일에 ○ 하세요.', options: ['숨을 한 번 골라요', '바로 빨리 말해요'], answer: '숨을 한 번 골라요' },
            { type: 'short', prompt: '내 낱말 하나를 문장으로 늘려 쓰세요.' },
          ],
        },
      },
      differentiation: {
        easy: '카드를 맞는 자리에 놓으면 초록 테두리가 생기고, 틀리면 되돌아와요. 활동 3 첫 문항은 카드 두 장으로 시작해요. 낱말 대신 그림으로 적어도 좋아요.',
        base: '모두 놓은 뒤 확인을 눌러 스스로 고쳐요.',
        challenge: '활동 2 둘째 문항은 낱말이 일곱 개이고 "무엇을" 가지에 두 장이 들어가요. 낱말 하나마다 문장 하나씩, 세 문장으로 늘려 짝 앞에서 말해요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 적어 둔 낱말을 그대로 읽기만 하고 문장으로 늘려 말하지 못한다 → "그 낱말에서 무슨 일이 있었나요?"로 한 문장을 끌어낸다. ② 발표와 상관없는 낱말을 적는다 → 언제·어디서·무엇을 칸에 맞춰 적게 한다. ③ 자리에 서자마자 급하게 말한다 → 반 전체가 "서기 – 숨 – 인사"를 몸으로 익힌다. 활동지 첫 칸은 다음 차시 발표에 그대로 쓰므로 걷어 두었다가 돌려준다.',
    }),

    // ───────────────────────── 9. 겪은 일 두세 문장 발표 ─────────────────────────
    L(9, {
      title: '겪은 일을 두세 문장으로 친구들 앞에서 말하기',
      objective: '겪은 일을 처음·가운데·끝 차례로 두세 문장으로 발표하고, 듣는 친구들을 번갈아 바라보며 말할 수 있다.',
      standards: SPEAK,
      illustration: ART('a child at the front of the class telling a short story about a rainy day with a paper umbrella, looking left and right at listening classmates', [
        { motif: 'cloud', x: 120, y: 56 }, { motif: 'cloud', x: 360, y: 48, s: 0.9 }, { motif: 'snow', x: 110, y: 90, r: 3 }, { motif: 'snow', x: 140, y: 100, r: 3 },
        { motif: 'hills', y: 208 }, { motif: 'house', x: 240, y: 216, color: 'lavender' }, { motif: 'flower', x: 360, y: 226 },
        { motif: 'text', x: 240, y: 140, text: '처음 · 가운데 · 끝', size: 22 },
      ]),
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '교사가 종이만 보며 고개를 숙이고 "어제 비가 와서 우산을 썼어요"라고 말한 뒤, 다시 왼쪽·가운데·오른쪽 친구를 차례로 보며 같은 말을 한다. "두 번째에 선생님이 나를 봤다고 느낀 사람?" 손을 들게 한다. 시연 단추로 처음·가운데·끝 세 문장이 차례대로 놓이는 모습을 보여 준다.',
          student: '선생님이 나를 바라보며 말할 때 기분이 어땠나요?',
          demo: { tool: 'story', options: { mode: 'order', shuffle: false, slots: ['처음', '가운데', '끝'], cards: [{ id: 'r1', text: '어제 학교 가는 길에 비가 왔어요.' }, { id: 'r2', text: '노란 우산을 쓰고 물웅덩이를 건넜어요.' }, { id: 'r3', text: '장화가 있어서 신났어요.' }] }, sequence: [{ order: ['r1', 'r2', 'r3'] }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 처음·가운데·끝 차례로 놓기', minutes: 9, tool: 'story',
              teacher: '"처음에는 언제, 어디서. 가운데에는 무슨 일. 끝에는 내 마음." 손가락 세 개로 짚는다. 느낌 문장을 맨 앞에 놓는 학생에게 "무슨 일이 있었는지 모르는데 신났다고 하면 친구들이 알까요?"라고 묻는다. 셋째 문항은 가운데 문장이 둘이라 일어난 순서를 따져야 한다.',
              task: '겪은 일 발표 문장을 처음·가운데·끝 차례로 놓아요.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '민지의 생일 이야기를 처음·가운데·끝 차례로 놓아 보세요.', toolOptions: { mode: 'order', slots: ['처음', '가운데', '끝'], cards: [{ id: 'b1', text: '지난 금요일은 내 생일이었어요.' }, { id: 'b2', text: '엄마와 딸기 케이크를 만들었어요.' }, { id: 'b3', text: '내가 만든 케이크라 더 맛있었어요.' }] }, target: { order: ['b1', 'b2', 'b3'] }, difficulty: 0.1 },
                { prompt: '준호의 학교 텃밭 이야기를 차례대로 놓아 보세요.', toolOptions: { mode: 'order', slots: ['처음', '가운데', '끝'], cards: [{ id: 'g1', text: '오늘 아침 학교 텃밭에 갔어요.' }, { id: 'g2', text: '우리 반 상추에 물을 주었어요.' }, { id: 'g3', text: '상추가 쑥쑥 자라서 뿌듯했어요.' }] }, target: { order: ['g1', 'g2', 'g3'] }, difficulty: 0.15,
                  predict: { q: '느낌을 말하는 문장은 어디에 올까요?', options: ['처음', '가운데', '끝'], answer: 2 },
                  conclude: '무슨 일이 있었는지 먼저 말하고, 내 마음은 끝에 말하면 듣는 친구가 잘 알아들어요.' },
                { prompt: '하윤이의 줄넘기 이야기는 가운데가 두 문장이에요. 차례대로 놓아 보세요.', toolOptions: { mode: 'order', slots: ['처음', '가운데 1', '가운데 2', '끝'], cards: [{ id: 'j1', text: '체육 시간에 줄넘기를 했어요.' }, { id: 'j2', text: '처음에는 다섯 번 만에 걸렸어요.' }, { id: 'j3', text: '다시 해서 스무 번을 넘었어요.' }, { id: 'j4', text: '끝까지 해서 정말 기뻤어요.' }] }, target: { order: ['j1', 'j2', 'j3', 'j4'] }, difficulty: 0.25 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 겪은 일 발표에 맞는 문장 고르기', minutes: 8, tool: 'mindmap',
              teacher: '"겪은 일 발표에는 내가 실제로 한 일과 그때 마음이 들어가요." 상관없는 문장(내일 할 일, 남의 이야기)을 고르는 학생에게 "이 문장도 내가 겪은 일인가요?"라고 묻는다. 둘째 문항에서는 한 일과 느낌을 가르게 해 끝 문장을 찾는 눈을 기른다.',
              task: '겪은 일 발표에 들어갈 문장을 고르거나, 한 일과 느낌으로 나누어요.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '서준이의 "도서관에 간 일" 발표에 맞는 문장만 골라 보세요.', toolOptions: { mode: 'pick', topic: '도서관에 간 일', cards: [{ id: 'go', text: '어제 동생과 도서관에 갔어요' }, { id: 'read', text: '공룡 책을 두 권 읽었어요' }, { id: 'tmr', text: '내일은 수영을 배울 거예요' }, { id: 'fun', text: '공룡 이름을 많이 알게 되어 좋았어요' }] }, target: { pick: ['go', 'read', 'fun'] }, difficulty: 0.15,
                  levels: { easy: { prompt: '서준이의 "도서관에 간 일" 발표에 맞는 문장만 골라 보세요. 세 문장 가운데에서 골라요.', toolOptions: { cards: [{ id: 'go', text: '어제 동생과 도서관에 갔어요' }, { id: 'tmr', text: '내일은 수영을 배울 거예요' }, { id: 'read', text: '공룡 책을 두 권 읽었어요' }] }, target: { pick: ['go', 'read'] } } } },
                { prompt: '지우의 발표 문장을 한 일과 느낌으로 나누어 보세요.', toolOptions: { topic: '지우의 소풍', slots: [{ id: 'did', label: '한 일' }, { id: 'feel', label: '느낌' }], cards: [{ id: 'a', text: '숲에서 도토리를 주웠어요' }, { id: 'b', text: '다람쥐를 봐서 신기했어요' }, { id: 'c', text: '친구와 김밥을 나눠 먹었어요' }, { id: 'd', text: '다리가 아팠지만 즐거웠어요' }] }, target: { sort: { did: ['a', 'c'], feel: ['b', 'd'] } }, difficulty: 0.2 },
                { prompt: '두세 문장 발표가 되도록 알맞은 문장만 골라 보세요.', toolOptions: { mode: 'pick', topic: '눈 온 날 발표', cards: [{ id: 's1', text: '아침에 눈이 소복이 쌓였어요' }, { id: 's2', text: '형과 눈사람을 만들었어요' }, { id: 's3', text: '손이 시려도 신났어요' }, { id: 's4', text: '우리 형은 키가 커요' }, { id: 's5', text: '여름에는 덥지요' }] }, target: { pick: ['s1', 's2', 's3'] }, difficulty: 0.25,
                  levels: { challenge: { prompt: '눈 온 날 겪은 일 발표가 되도록 알맞은 문장만 골라 보세요. 눈 이야기지만 겪은 일이 아닌 문장도 있어요.', toolOptions: { cards: [{ id: 's1', text: '아침에 눈이 소복이 쌓였어요' }, { id: 's6', text: '눈은 겨울에 내려요' }, { id: 's2', text: '형과 눈사람을 만들었어요' }, { id: 's4', text: '우리 형은 키가 커요' }, { id: 's3', text: '손이 시려도 신났어요' }, { id: 's7', text: '내일도 눈이 오면 좋겠어요' }] } } } },
              ],
            },
            {
              id: 'a3', title: '활동 3. 친구들을 보며 겪은 일 발표하기', minutes: 9, tool: 'story', pair: true,
              teacher: '지난 시간 활동지의 낱말 세 개를 돌려주고 모둠(4명) 앞에서 차례로 발표하게 한다. "첫 문장은 왼쪽 친구, 둘째는 가운데, 셋째는 오른쪽 친구를 봐요." 종이만 보는 학생 곁에서 손으로 듣는 친구 쪽을 가리켜 준다. 듣는 친구들은 발표가 끝나면 엄지를 들어 "잘 들렸어요"를 알려 준다.',
              task: '모둠 친구들 앞에서 겪은 일을 두세 문장으로 발표해요. 문장마다 다른 친구를 바라봐요.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '낱말 세 개를 보고 겪은 일을 두세 문장으로 모둠 앞에서 발표한 뒤 "다 했어요"를 누르세요.', free: true },
                { prompt: '친구가 발표할 때 친구를 바라보며 들어요. 친구의 처음 문장을 짝에게 되풀이해 보세요.', free: true },
                { prompt: '한 번 더 발표해요. 이번에는 문장마다 다른 친구를 바라보며 말하고, 모둠 친구에게 어땠는지 물어보세요.', free: true },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"발표할 때 친구들을 바라보니 무엇이 달랐나요?" 출구 1번을 틀린 학생은 느낌 문장을 처음에 두는 경우가 많으니, 다음 시간 발표 전에 처음·가운데·끝 손가락 짚기를 함께 한다.',
          exitTicket: [
            { type: 'tool', tool: 'story', options: { mode: 'order', slots: ['처음', '가운데', '끝'], cards: [{ id: 'k1', text: '지난 일요일 바닷가에 갔어요.' }, { id: 'k2', text: '모래로 큰 성을 쌓았어요.' }, { id: 'k3', text: '파도가 성을 덮어서 아쉬웠어요.' }] }, prompt: '서준이의 바닷가 이야기를 처음·가운데·끝 차례로 놓아 보세요.', target: { order: ['k1', 'k2', 'k3'] }, difficulty: 0.15 },
            { type: 'choice', prompt: '발표할 때 눈은 어떻게 하면 좋을까요?', options: ['종이만 보고 말해요', '듣는 친구들을 번갈아 봐요', '선생님 한 분만 봐요'], answer: 1, difficulty: 0.1, explain: '듣는 친구들을 번갈아 바라보면 모두가 내 이야기를 듣는다고 느껴요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '겪은 일 발표',
        items: [
          { type: 'table', prompt: '내가 겪은 일을 처음·가운데·끝으로 나누어 쓰세요.', columns: ['처음 (언제, 어디서)', '가운데 (한 일)', '끝 (느낌)'], rows: 1 },
          { type: 'choice', prompt: '"끝" 자리에 알맞은 문장에 ○ 하세요.', options: ['어제 공원에 갔어요.', '자전거를 탔어요.', '바람이 시원해서 기분이 좋았어요.'], answer: '바람이 시원해서 기분이 좋았어요.' },
          { type: 'check', prompt: '겪은 일 발표에 들어가지 않아도 되는 문장에 ✓ 하세요.', options: ['내일은 수영을 배울 거예요.', '형과 눈사람을 만들었어요.', '우리 형은 키가 커요.'], answer: '내일은 수영을 배울 거예요., 우리 형은 키가 커요.' },
          { type: 'draw', prompt: '내가 겪은 일의 한 장면을 그리고, 발표할 때 바라볼 친구 쪽에 화살표를 그리세요.' },
        ],
        easy: {
          note: '처음은 언제·어디서, 가운데는 한 일, 끝은 내 마음이에요.',
          items: [
            { type: 'table', prompt: '내가 겪은 일을 쓰세요.', columns: ['언제, 어디서', '한 일', '마음'], rows: 1 },
            { type: 'choice', prompt: '마음을 말한 문장에 ○ 하세요.', options: ['공원에 갔어요.', '정말 신났어요.'], answer: '정말 신났어요.' },
            { type: 'choice', prompt: '발표할 때 바라볼 곳에 ○ 하세요.', options: ['듣는 친구들', '내 종이만'], answer: '듣는 친구들' },
            { type: 'draw', prompt: '내가 겪은 일을 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '카드를 맞는 자리에 놓으면 초록 테두리가 생기고, 틀리면 되돌아와요. 활동 2 첫 문항은 세 문장 가운데에서 골라요. 발표는 두 문장(한 일, 마음)만 해도 좋아요.',
        base: '세 문장(처음·가운데·끝)으로 발표하고 문장마다 다른 친구를 봐요.',
        challenge: '활동 2 셋째 문항에 "눈은 겨울에 내려요"처럼 겪은 일이 아닌 눈 이야기가 섞여 나와요. 가운데를 두 문장으로 늘려 네 문장으로 발표하고, 듣는 친구의 질문 하나에 대답해요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 고개를 숙이고 바닥이나 종이만 보며 말한다 → 문장마다 바라볼 친구를 정해 준다(왼쪽·가운데·오른쪽). ② 느낌을 처음에 말해 무슨 일인지 모른다 → 처음·가운데·끝 차례. ③ 겪은 일과 상관없는 문장을 덧붙인다 → "내가 실제로 한 일인가요?"로 거른다. 발표를 많이 두려워하는 학생은 모둠에서 짝 한 명 앞 발표로 시작해도 된다.',
    }),

    // ───────────────────────── 10. 칭찬과 고칠 점 ─────────────────────────
    L(10, {
      title: '친구 발표를 칭찬하고 내 발표 고칠 점 찾기',
      objective: '친구의 발표에서 잘한 점을 찾아 칭찬하는 말을 하고, 내 발표에서 다음에 고칠 점을 한 가지 골라 말할 수 있다.',
      standards: SPEAK,
      illustration: ART('classmates giving thumbs up and paper star stickers to a friend who just finished a short talk at the front of the room', [
        { motif: 'sun', x: 408, y: 56, s: 0.8 }, { motif: 'star', x: 150, y: 80 }, { motif: 'star', x: 330, y: 90, color: 'rose' }, { motif: 'star', x: 240, y: 60, color: 'sky' },
        { motif: 'hills', y: 210 }, { motif: 'flower', x: 120, y: 228 }, { motif: 'flower', x: 360, y: 228, color: 'lavender' },
        { motif: 'text', x: 240, y: 150, text: '잘한 점부터 말해요', size: 22 },
      ]),
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '"발표를 막 마쳤는데 친구가 \'목소리가 너무 작았어\'라고 먼저 말하면 기분이 어떨까요?" 두세 명의 대답을 듣고, "그럼 \'끝까지 우리를 보며 말해서 좋았어\'라고 들으면요?"라고 견주게 한다. 시연 단추로 같은 상황에서 칭찬부터 고른 결과가 나오는 것을 보여 준다.',
          student: '친구에게서 듣고 싶은 말은 어떤 말인가요?',
          demo: { tool: 'emotion', options: { mode: 'branch', who: '하윤', situation: '하윤이가 발표를 막 마쳤어요.', choices: [{ id: 'praise', text: '"끝까지 우리를 봐서 좋았어"', result: '하윤이가 활짝 웃어요', mood: '뿌듯함' }, { id: 'blame', text: '"목소리가 너무 작았어"', result: '하윤이가 고개를 숙여요', mood: '속상함' }] }, sequence: [{ choice: 'praise' }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 칭찬하는 말 고르기', minutes: 9, tool: 'emotion',
              teacher: '"\'잘했어\'와 \'처음·가운데·끝 차례로 말해서 이해가 잘 됐어\' 중 어느 칭찬이 더 기쁠까요?" 무엇을 잘했는지 짚어 주는 칭찬이 더 좋다는 것을 끌어낸다. 놀리는 말이나 비교하는 말("나보다 못했지만")을 칭찬으로 고르는 학생에게 그 말을 들은 친구의 마음을 묻는다.',
              task: '친구 발표를 듣고 할 칭찬하는 말을 골라요. 무엇을 잘했는지 짚어 주는 말이 좋아요.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '준호의 발표를 듣고 할 칭찬하는 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '칭찬하는 말', cards: [{ id: 'eye', text: '"우리를 보며 말해서 좋았어"' }, { id: 'clear', text: '"또박또박 잘 들렸어"' }, { id: 'tease', text: '"웃기게 서 있더라"' }, { id: 'cmp', text: '"나보다는 못했어"' }] }, target: { pick: ['eye', 'clear'] }, difficulty: 0.1 },
                { prompt: '무엇을 잘했는지 짚어 준 칭찬만 골라 보세요.', toolOptions: { mode: 'pick', basket: '짚어 주는 칭찬', cards: [{ id: 'order', text: '"차례대로 말해서 알기 쉬웠어"' }, { id: 'ok', text: '"잘했어"' }, { id: 'feel', text: '"마지막 느낌 말이 재미있었어"' }, { id: 'meh', text: '"그냥 괜찮았어"' }] }, target: { pick: ['order', 'feel'] }, difficulty: 0.25,
                  predict: { q: '"잘했어"와 "차례대로 말해서 알기 쉬웠어" 중 어느 말이 더 도움이 될까요?', options: ['"잘했어"', '"차례대로 말해서…"', '똑같아요'], answer: 1 },
                  conclude: '무엇을 잘했는지 짚어 주면 친구가 다음에도 그렇게 할 수 있어요.',
                  levels: { challenge: { prompt: '무엇을 잘했는지 짚어 준 칭찬만 골라 보세요. 칭찬처럼 들리지만 아닌 말도 섞여 있어요.', toolOptions: { cards: [{ id: 'order', text: '"차례대로 말해서 알기 쉬웠어"' }, { id: 'ok', text: '"잘했어"' }, { id: 'cmp', text: '"나보다 조금 못했지만 괜찮았어"' }, { id: 'feel', text: '"마지막 느낌 말이 재미있었어"' }, { id: 'show', text: '"그림을 들어 보여 줘서 알기 쉬웠어"' }, { id: 'meh', text: '"그냥 괜찮았어"' }] }, target: { pick: ['order', 'feel', 'show'] } } } },
                { prompt: '친구 발표가 끝났어요. 먼저 할 말을 골라 결과를 보세요.', toolOptions: { mode: 'branch', who: '서준', situation: '서준이가 발표를 마쳤어요. 목소리가 조금 작았지만 바르게 서서 말했어요.', choices: [{ id: 'first', text: '"바르게 서서 말한 게 멋졌어"', result: '서준이가 힘이 나서 다음엔 더 크게 말하겠대요', mood: '뿌듯함' }, { id: 'small', text: '"목소리가 작아서 하나도 안 들렸어"', result: '서준이가 발표가 싫어졌대요', mood: '속상함', why: '잘한 점부터 말하면 친구가 고칠 힘도 생겨요.' }, { id: 'none', text: '아무 말도 하지 않아요', result: '서준이는 잘했는지 몰라 걱정해요', mood: '걱정', why: '들은 사람이 한마디 해 주면 친구가 알 수 있어요.' }] }, target: { choice: 'first' }, difficulty: 0.2,
                  levels: { easy: { toolOptions: { choices: [{ id: 'first', text: '"바르게 서서 말한 게 멋졌어"', result: '서준이가 힘이 나서 다음엔 더 크게 말하겠대요', mood: '뿌듯함' }, { id: 'small', text: '"목소리가 작아서 하나도 안 들렸어"', result: '서준이가 발표가 싫어졌대요', mood: '속상함', why: '잘한 점부터 말하면 친구가 고칠 힘도 생겨요.' }] } } } },
              ],
            },
            {
              id: 'a2', title: '활동 2. 말에 따라 달라지는 친구 마음', minutes: 8, tool: 'emotion',
              teacher: '"같은 고칠 점도 어떻게 말하느냐에 따라 친구 마음이 달라져요." 상황 옆에 마음 날씨 카드를 놓게 한다. 둘째 문항은 "칭찬 → 부드러운 부탁" 차례를 놓는다. 고칠 점을 칭찬보다 먼저 놓는 학생에게 도입의 하윤이 장면을 떠올리게 한다.',
              task: '친구에게 한 말을 읽고 그 말을 들은 친구의 마음 날씨를 이어 봐요.',
              levels: { easy: { live: true }, base: {}, challenge: {} },
              items: [
                { prompt: '친구가 들은 말 옆에 알맞은 마음 카드를 놓아 보세요.', toolOptions: { cards: ['기쁨', '속상함', '무서움'], slots: [{ id: 's1', label: '"끝까지 우리를 보며 말해서 멋졌어!"' }, { id: 's2', label: '"너 발표 진짜 이상했어."' }] }, target: { match: { s1: '기쁨', s2: '속상함' } }, difficulty: 0.1 },
                { prompt: '친구에게 말하는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', slots: ['첫째', '둘째', '셋째'], cards: [{ id: 'p', text: '잘한 점을 말해요' }, { id: 'f', text: '고칠 점을 부드럽게 말해요' }, { id: 'c', text: '"다음 발표도 기대할게"' }] }, target: { order: ['p', 'f', 'c'] }, difficulty: 0.2 },
                { prompt: '같은 고칠 점을 다르게 말했어요. 친구 마음 카드를 이어 보세요.', toolOptions: { cards: ['고마움', '화남', '신남'], slots: [{ id: 'a', label: '"목소리가 조금 더 크면 뒤까지 잘 들릴 것 같아."' }, { id: 'b', label: '"목소리 좀 크게 해! 하나도 안 들려!"' }] }, target: { match: { a: '고마움', b: '화남' } }, difficulty: 0.25,
                  conclude: '고칠 점은 "~하면 더 좋을 것 같아"처럼 부드럽게 말하면 친구가 고맙게 받아들여요.' },
              ],
            },
            {
              id: 'a3', title: '활동 3. 칭찬 주고받고 내 발표 돌아보기', minutes: 9, tool: 'emotion',
              teacher: '모둠에서 지난 시간 발표를 한 번씩 다시 하고, 듣는 친구는 "잘한 점 하나"를 말해 준다. 그다음 점검 칸마다 내가 한 만큼 눈금을 고르게 한다. "\'아직이에요\'를 골라도 틀린 게 아니에요. 그 칸에서 고칠 점 하나를 고르면 돼요"라고 말한다. 고칠 점을 "다"라고 하는 학생에게는 "가장 먼저 고칠 한 가지만"이라고 좁혀 준다.',
              task: '칭찬을 주고받는 차례를 알고, 점검 칸마다 내 발표를 한 만큼 눈금으로 골라요. 정답은 없어요.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '모둠 칭찬 릴레이 차례대로 놓아 보세요.', toolOptions: { mode: 'order', slots: ['첫째', '둘째', '셋째', '넷째'], cards: [{ id: 'praise', text: '듣는 친구가 잘한 점을 말해요' }, { id: 'thanks', text: '발표한 친구가 "고마워" 해요' }, { id: 'one', text: '한 친구가 발표해요' }, { id: 'next', text: '다음 친구가 발표해요' }] }, target: { order: ['one', 'praise', 'thanks', 'next'] }, difficulty: 0.2,
                  hints: ['발표가 있어야 칭찬할 수 있어요. 무엇이 먼저 일어나야 다음 일이 생기는지 따져요.', '칭찬을 들은 사람이 하는 말이 칭찬보다 앞에 오지 않았는지 살펴요. 다음 친구는 앞 친구의 차례가 다 끝난 뒤에 나와요.'],
                  levels: { easy: { prompt: '모둠 칭찬 릴레이 차례대로 세 장을 놓아 보세요.', toolOptions: { slots: ['첫째', '둘째', '셋째'], cards: [{ id: 'praise', text: '듣는 친구가 잘한 점을 말해요' }, { id: 'one', text: '한 친구가 발표해요' }, { id: 'thanks', text: '발표한 친구가 "고마워" 해요' }] }, target: { order: ['one', 'praise', 'thanks'] } } } },
                { prompt: '모둠에서 발표를 마쳤어요. 바르게 서서 친구들을 번갈아 봤는지 눈금을 고르고 "다 했어요"를 누르세요.', free: true, toolOptions: { mode: 'scale', steps: 3, situation: '바르게 서서 친구들을 번갈아 봤나요?', motif: 'sun', ask: '나는 얼마나 해냈나요?', scaleLabels: { 1: '아직이에요', 2: '조금 했어요', 3: '잘했어요' } } },
                { prompt: '맨 뒤까지 들리게 말했는지, 들은 친구에게 물어본 뒤 눈금을 고르고 "다 했어요"를 누르세요.', free: true, toolOptions: { mode: 'scale', steps: 3, situation: '맨 뒤 친구까지 들리게 말했나요?', motif: 'star', ask: '나는 얼마나 해냈나요?', scaleLabels: { 1: '아직이에요', 2: '조금 했어요', 3: '잘했어요' } } },
                { prompt: '처음·가운데·끝 차례로 말했는지 눈금을 고르고 "다 했어요"를 누르세요. "아직이에요" 칸이 다음에 고칠 점이에요.', free: true, toolOptions: { mode: 'scale', steps: 3, situation: '처음·가운데·끝 차례로 말했나요?', motif: 'flower', ask: '나는 얼마나 해냈나요?', scaleLabels: { 1: '아직이에요', 2: '조금 했어요', 3: '잘했어요' } } },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"오늘 들은 칭찬 가운데 가장 기분 좋았던 말을 말해 볼까요?" 두세 명이 말한다. 출구 2번에서 고칠 점부터 말하는 쪽을 고른 학생은 다음 발표 시간에 칭찬 담당을 맡겨 잘한 점 찾기를 먼저 하게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'emotion', options: { mode: 'pick', basket: '짚어 주는 칭찬', cards: [{ id: 'v', text: '"맨 뒤까지 잘 들렸어"' }, { id: 'g', text: '"좋았어"' }, { id: 'e', text: '"우리를 보며 웃어서 좋았어"' }, { id: 'x', text: '"너무 길었어"' }] }, prompt: '무엇을 잘했는지 짚어 준 칭찬만 골라 보세요.', target: { pick: ['v', 'e'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '친구 발표가 끝나면 무엇부터 말하면 좋을까요?', options: ['못한 점부터 말해요', '잘한 점부터 말해요', '아무 말도 안 해요'], answer: 1, difficulty: 0.1, explain: '잘한 점을 먼저 들으면 친구가 힘을 얻고, 고칠 점도 기꺼이 들어요.' },
            { type: 'short', prompt: '내 발표에서 다음에 고칠 점을 한 가지 쓰세요.' },
          ],
        },
      ],
      worksheet: {
        title: '칭찬 쪽지와 나의 고칠 점',
        items: [
          { type: 'blank', prompt: '친구에게 줄 칭찬 쪽지를 완성하세요.', text: '______야, 발표할 때 ______해서 좋았어!', answer: '(친구 이름), (잘한 점 — 예: 우리를 보며 말)' },
          { type: 'choice', prompt: '고칠 점을 부드럽게 말한 것에 ○ 하세요.', options: ['"목소리 좀 크게 해!"', '"목소리가 조금 더 크면 더 잘 들릴 것 같아."', '"너 발표 이상했어."'], answer: '"목소리가 조금 더 크면 더 잘 들릴 것 같아."' },
          { type: 'table', prompt: '내 발표를 돌아보세요.', columns: ['잘한 점', '다음에 고칠 점'], rows: 1 },
          { type: 'short', prompt: '친구에게 들은 칭찬 가운데 가장 기분 좋았던 말과 그 까닭을 쓰세요.' },
        ],
        easy: {
          note: '칭찬은 "~해서 좋았어"처럼 무엇을 잘했는지 말해요.',
          items: [
            { type: 'choice', prompt: '칭찬하는 말에 ○ 하세요.', options: ['"또박또박 잘 들렸어."', '"나보다 못했어."'], answer: '"또박또박 잘 들렸어."' },
            { type: 'blank', prompt: '칭찬 말을 완성하세요.', text: '발표할 때 ______해서 좋았어!', answer: '(잘한 점)' },
            { type: 'choice', prompt: '먼저 말할 것에 ○ 하세요.', options: ['잘한 점', '못한 점'], answer: '잘한 점' },
            { type: 'short', prompt: '내 발표에서 고칠 점 한 가지를 쓰세요.' },
          ],
        },
      },
      differentiation: {
        easy: '카드를 맞는 칸에 넣으면 초록 테두리가 생기고, 틀리면 까닭과 함께 되돌아와요. 셋째 문항 보기와 릴레이 카드는 하나씩 적게 나와요. 칭찬은 칠판의 "~해서 좋았어" 틀을 보고 말해요.',
        base: '스스로 골라 확인을 눌러 고쳐요. 칭찬 릴레이에서 짚어 주는 칭찬을 한 번 이상 해요.',
        challenge: '활동 1 둘째 문항에 칭찬처럼 들리는 비교하는 말이 섞여 나와요. 칭찬 릴레이에서는 칭찬 뒤에 고칠 점을 "~하면 더 좋을 것 같아" 틀로 하나 더 말해 줘요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 친구의 발표에서 못한 점부터 말해 친구가 위축된다 → 잘한 점 먼저, 고칠 점은 부드럽게. ② "잘했어"처럼 무엇을 잘했는지 없는 칭찬만 한다 → "~해서 좋았어" 틀. ③ 내 고칠 점을 "다"라고 쓴다 → 한 가지만 고르게 한다. 칭찬 쪽지는 이름 대신 별명·가명을 써도 좋고, 친구를 비교하는 말은 쓰지 않는다.',
    }),

    // ───────────────────────── 11. 소개하는 글의 내용 ─────────────────────────
    L(11, {
      title: '우리 반 화분을 소개할 내용 고르기',
      objective: '우리 반 화분을 소개하는 글에 넣을 내용을 세 가지 고르고, 소개하는 글과 겪은 일을 쓴 글을 구분할 수 있다.',
      standards: WRITE,
      illustration: ART('a cheerful potted plant on a sunny classroom windowsill with little paper labels around it showing its name, leaves and a watering can', [
        { motif: 'sun', x: 404, y: 60, s: 0.9 }, { motif: 'cloud', x: 120, y: 54 }, { motif: 'hills', y: 210 },
        { motif: 'flower', x: 220, y: 214, s: 1.6 }, { motif: 'flower', x: 270, y: 216, s: 1.3, color: 'buttercup' }, { motif: 'leaf', x: 180, y: 190 }, { motif: 'leaf', x: 310, y: 186, color: 'mint' },
        { motif: 'text', x: 240, y: 130, text: '무엇을 소개할까요?', size: 22 },
      ]),
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '교실 창가 화분을 가리키며 "1학년 동생이 우리 교실에 온다면 이 화분을 어떻게 소개할까요?" 한 학생이 "이건 화분이에요"라고만 하면 "이름만 들으면 동생이 무엇을 알게 될까요?"라고 되묻는다. 시연 단추로 소개 내용이 이름·생김새·돌보는 법 가지에 나뉘는 것을 보여 준다. 화분이 없는 반은 사진이나 그림을 쓴다.',
          student: '우리 반 화분을 처음 보는 동생에게 무엇을 알려 주고 싶나요?',
          demo: { tool: 'mindmap', options: { topic: '우리 반 화분', shuffle: false, slots: [{ id: 'name', label: '이름' }, { id: 'look', label: '생김새' }], cards: [{ id: 'n', text: '이름은 몬스테라예요' }, { id: 'l', text: '잎에 구멍이 있어요' }] }, sequence: [{ sort: { name: ['n'], look: ['l'] } }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 소개하는 글과 겪은 일 글 구분하기', minutes: 8, tool: 'mindmap',
              teacher: '"소개하는 글은 \'이것은 어떤 것이다\'를 알려 주고, 겪은 일 글은 \'내가 무엇을 했다\'를 알려 줘요." 두 문장을 칠판에 나란히 쓰고 끝말("~예요"/"~했어요")을 견주게 한다. 셋째 문항은 끝말만으로 가르면 틀리는 문장이 있으니 "무엇을 알려 주나요?"로 판단하게 한다.',
              task: '문장을 읽고 소개하는 글의 문장인지, 겪은 일을 쓴 글의 문장인지 나누어 넣어요.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '문장을 소개하는 글과 겪은 일 글로 나누어 보세요.', toolOptions: { topic: '어떤 글', slots: [{ id: 'intro', label: '소개하는 글' }, { id: 'exp', label: '겪은 일 글' }], cards: [{ id: 'a', text: '화분의 이름은 몬스테라예요' }, { id: 'b', text: '어제 화분에 물을 줬어요' }, { id: 'c', text: '잎이 손바닥보다 커요' }, { id: 'd', text: '물을 주다 바닥에 흘렸어요' }] }, target: { sort: { intro: ['a', 'c'], exp: ['b', 'd'] } }, difficulty: 0.15 },
                { prompt: '우리 반 어항에 대한 문장을 나누어 보세요.', toolOptions: { topic: '우리 반 어항', slots: [{ id: 'intro', label: '소개하는 글' }, { id: 'exp', label: '겪은 일 글' }], cards: [{ id: 'a', text: '어항에는 금붕어 세 마리가 살아요' }, { id: 'b', text: '금붕어는 주황색이에요' }, { id: 'c', text: '오늘 내가 먹이를 줬어요' }, { id: 'd', text: '먹이는 하루에 한 번 줘요' }, { id: 'e', text: '금붕어를 보다 수업 종을 놓쳤어요' }] }, target: { sort: { intro: ['a', 'b', 'd'], exp: ['c', 'e'] } }, difficulty: 0.25,
                  levels: { easy: { prompt: '우리 반 어항에 대한 문장 세 개를 나누어 보세요.', toolOptions: { cards: [{ id: 'a', text: '어항에는 금붕어 세 마리가 살아요' }, { id: 'c', text: '오늘 내가 먹이를 줬어요' }, { id: 'b', text: '금붕어는 주황색이에요' }] }, target: { sort: { intro: ['a', 'b'], exp: ['c'] } } } } },
                { prompt: '끝말이 비슷해도 무엇을 알려 주는지 보고 나누어 보세요.', toolOptions: { topic: '우리 반 시계', slots: [{ id: 'intro', label: '소개하는 글' }, { id: 'exp', label: '겪은 일 글' }], cards: [{ id: 'a', text: '시계는 칠판 위에 있어요' }, { id: 'b', text: '시계를 보고 급식실에 갔어요' }, { id: 'c', text: '숫자가 커서 뒤에서도 보여요' }] }, target: { sort: { intro: ['a', 'c'], exp: ['b'] } }, difficulty: 0.25,
                  levels: { challenge: { prompt: '시계 문장이 다섯 개예요. 끝말이 비슷해도 무엇을 알려 주는지 보고 나누어 보세요.', toolOptions: { cards: [{ id: 'a', text: '시계는 칠판 위에 있어요' }, { id: 'b', text: '시계를 보고 급식실에 갔어요' }, { id: 'e', text: '시계는 건전지를 넣어 움직여요' }, { id: 'c', text: '숫자가 커서 뒤에서도 보여요' }, { id: 'd', text: '시계가 멈춰 있어서 깜짝 놀랐어요' }] }, target: { sort: { intro: ['a', 'c', 'e'], exp: ['b', 'd'] } } } },
                  conclude: '소개하는 글은 그것이 어떤지 알려 주고, 겪은 일 글은 내가 한 일을 알려 줘요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 화분 소개에 넣을 내용 고르기', minutes: 10, tool: 'mindmap',
              teacher: '"화분을 소개할 때 무엇을 알려 주면 좋을까요? 이름만? 그것만으로 충분할까요?" 이름·생김새·돌보는 법 세 가지 가지를 칠판에 그린다. 내 기분이나 어제 일을 가지에 넣는 학생에게 "그 문장이 화분에 대해 알려 주나요, 나에 대해 알려 주나요?"라고 묻는다.',
              task: '화분을 소개하는 문장을 이름·생김새·돌보는 법 가지에 넣어요. 소개와 상관없는 문장은 남겨요.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '화분 소개에 넣을 내용만 바구니에 골라 보세요.', toolOptions: { mode: 'pick', topic: '화분 소개에 넣을 것', cards: [{ id: 'name', text: '화분 식물의 이름' }, { id: 'look', text: '잎과 줄기의 생김새' }, { id: 'care', text: '물 주는 방법' }, { id: 'late', text: '내가 늦잠 잔 이야기' }] }, target: { pick: ['name', 'look', 'care'] }, difficulty: 0.1,
                  predict: { q: '화분 소개에 이름만 쓰면 충분할까요?', options: ['네', '아니요', '잘 모르겠어요'], answer: 1 },
                  conclude: '이름만 쓰면 어떤 식물인지 알 수 없어요. 생김새와 돌보는 법도 함께 알려 줘요.' },
                { prompt: '화분 소개 문장을 가지에 나누어 넣어 보세요.', toolOptions: { topic: '우리 반 화분', slots: [{ id: 'name', label: '이름' }, { id: 'look', label: '생김새' }, { id: 'care', label: '돌보는 법' }], cards: [{ id: 'a', text: '이 식물은 스킨답서스예요' }, { id: 'b', text: '잎이 하트 모양이에요' }, { id: 'c', text: '줄기가 길게 늘어져요' }, { id: 'd', text: '흙이 마르면 물을 줘요' }] }, target: { sort: { name: ['a'], look: ['b', 'c'], care: ['d'] } }, difficulty: 0.2 },
                { prompt: '더 해 보기: 복도 화분 소개 문장을 가지에 넣고, 상관없는 문장은 남겨 보세요.', extra: true, toolOptions: { topic: '복도 화분', slots: [{ id: 'name', label: '이름' }, { id: 'look', label: '생김새' }, { id: 'care', label: '돌보는 법' }], cards: [{ id: 'a', text: '이름은 고무나무예요' }, { id: 'b', text: '잎이 두껍고 반짝여요' }, { id: 'c', text: '해가 드는 곳에 둬요' }, { id: 'd', text: '나는 초록색을 좋아해요' }, { id: 'e', text: '잎의 먼지를 닦아 줘요' }] }, target: { sort: { name: ['a'], look: ['b'], care: ['c', 'e'] } }, difficulty: 0.3 },
              ],
            },
            {
              id: 'a3', title: '활동 3. 이름만 쓴 소개 글 채우기', minutes: 8, tool: 'story',
              teacher: '"준호는 \'이것은 화분입니다.\' 한 줄만 썼어요. 동생이 읽고 무엇을 알 수 있을까요?" 빈칸을 채워 소개 글을 키운다. 화분과 상관없는 카드(급식 메뉴)를 넣는 학생에게 문장을 처음부터 소리 내어 읽게 한다.',
              task: '이름만 쓴 짧은 소개 글에 생김새와 돌보는 법을 채워 넣어요.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '화분 소개 글의 빈칸에 생김새를 알려 주는 말을 넣어 보세요.', toolOptions: { mode: 'fill', title: '우리 반 화분 소개', cards: [{ id: 'heart', text: '하트 모양' }, { id: 'lunch', text: '급식 메뉴' }, { id: 'sad', text: '속상한 일' }], slots: [{ id: 's1', who: '준호', motif: 'leaf', label: '스킨답서스는 잎이 ___이에요.' }] }, target: { fill: { s1: 'heart' } }, difficulty: 0.1 },
                { prompt: '두 빈칸에 이름과 돌보는 법을 알려 주는 말을 넣어 보세요.', toolOptions: { mode: 'fill', title: '복도 화분 소개', cards: [{ id: 'rubber', text: '고무나무' }, { id: 'dust', text: '먼지를 닦아' }, { id: 'yesterday', text: '어제' }], slots: [{ id: 's1', who: '민지', motif: 'tree', label: '복도에 있는 화분은 ___예요.' }, { id: 's2', who: '민지', motif: 'tree', label: '잎이 반짝이게 ___ 줘요.' }] }, target: { fill: { s1: 'rubber', s2: 'dust' } }, difficulty: 0.2 },
                { prompt: '읽는 사람에게 소개하는 말이 되도록 빈칸을 채워 보세요.', toolOptions: { mode: 'fill', title: '1학년 동생에게', cards: [{ id: 'dry', text: '흙이 마를 때' }, { id: 'always', text: '아무 때나 마구' }, { id: 'never', text: '절대로' }], slots: [{ id: 's1', who: '지우', motif: 'flower', label: '물은 ___ 조금씩 주면 돼.' }] }, target: { fill: { s1: 'dry' } }, difficulty: 0.25 },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"소개하는 글에 꼭 넣을 세 가지는 무엇이었나요?" 이름·생김새·돌보는 법(쓰임)을 함께 말한다. 출구 2번에서 겪은 일 문장을 고른 학생은 소개하는 글과 겪은 일 글을 아직 헷갈리는 것이니 다음 차시 첫 활동에서 짝과 다시 가른다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { topic: '우리 반 연필깎이', slots: [{ id: 'name', label: '이름' }, { id: 'look', label: '생김새' }, { id: 'use', label: '쓰는 법' }], cards: [{ id: 'a', text: '이것은 연필깎이예요' }, { id: 'b', text: '파란색 네모 모양이에요' }, { id: 'c', text: '손잡이를 돌려서 깎아요' }] }, prompt: '연필깎이 소개 문장을 이름·생김새·쓰는 법 가지에 넣어 보세요.', target: { sort: { name: ['a'], look: ['b'], use: ['c'] } }, difficulty: 0.15 },
            { type: 'choice', prompt: '소개하는 글의 문장은 무엇인가요?', options: ['오늘 아침 화분에 물을 줬어요.', '이 화분의 잎은 둥글고 두꺼워요.', '화분을 보다가 넘어졌어요.'], answer: 1, difficulty: 0.2, explain: '잎이 어떤지 알려 주는 문장이 화분을 소개하는 글이에요. 나머지는 내가 겪은 일이에요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '소개할 내용 고르기',
        items: [
          { type: 'figure', wide: true, prompt: '우리 반 물건 하나를 골라 가지마다 소개할 내용을 써 넣으세요.', tool: 'mindmap', figures: [{ options: { topic: '내가 소개할 것', printCards: false, slots: ['이름', '생김새', '쓰임이나 돌보는 법'], cards: ['보기'] }, caption: '' }], answer: '예: 이름 — 몬스테라 / 생김새 — 잎에 구멍 / 돌보는 법 — 흙이 마르면 물' },
          { type: 'check', prompt: '소개하는 글의 문장에 모두 ✓ 하세요.', options: ['금붕어는 주황색이에요.', '어제 금붕어 먹이를 줬어요.', '먹이는 하루에 한 번 줘요.', '어항 앞에서 넘어졌어요.'], answer: '금붕어는 주황색이에요., 먹이는 하루에 한 번 줘요.' },
          { type: 'choice', prompt: '이름만 쓴 소개 글에 ○ 하세요.', options: ['"이것은 화분입니다."', '"이것은 몬스테라입니다. 잎에 구멍이 있어요."'], answer: '"이것은 화분입니다."' },
          { type: 'short', prompt: '소개하는 글에 이름만 쓰면 왜 안 되는지 쓰세요.' },
        ],
        easy: {
          note: '소개하는 글 = 이름 + 생김새 + 쓰임(돌보는 법).',
          items: [
            { type: 'figure', wide: true, prompt: '가지마다 우리 반 화분에 대해 써 넣으세요.', tool: 'mindmap', figures: [{ options: { topic: '우리 반 화분', printCards: false, slots: ['이름', '생김새'], cards: ['보기'] }, caption: '' }], answer: '예: 이름 — 스킨답서스 / 생김새 — 하트 모양 잎' },
            { type: 'choice', prompt: '소개하는 글의 문장에 ○ 하세요.', options: ['잎이 하트 모양이에요.', '어제 물을 줬어요.'], answer: '잎이 하트 모양이에요.' },
            { type: 'choice', prompt: '화분 소개에 넣을 것에 ○ 하세요.', options: ['물 주는 방법', '내가 늦잠 잔 이야기'], answer: '물 주는 방법' },
            { type: 'draw', prompt: '우리 반 화분을 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '카드를 맞는 가지에 넣으면 초록 테두리가 생기고, 틀리면 까닭과 함께 되돌아와요. 활동 1 둘째 문항은 문장 세 개로 시작해요. 실제 화분(또는 사진)을 앞에 두고 해요.',
        base: '모두 넣은 뒤 확인을 눌러 스스로 고쳐요.',
        challenge: '활동 1 셋째 문항은 시계 문장이 다섯 개로 늘어나요. 활동 2의 더 해 보기(상관없는 문장 남기기)까지 풀고, 우리 반 다른 물건으로 가지 세 개를 채워 짝에게 말해요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 소개할 대상의 이름만 적고 생김새나 쓰임은 넣지 않는다 → 이름·생김새·쓰임(돌보는 법) 세 가지 틀. ② 소개하는 글에 내가 겪은 일을 섞는다 → "그것에 대해 알려 주나요, 나에 대해 알려 주나요?" ③ 끝말("~요")만 보고 가른다 → 무엇을 알려 주는지로 판단. 식물 이름(몬스테라·스킨답서스·고무나무)은 반의 실제 화분 이름으로 바꾸어 말해도 좋다.',
    }),

    // ───────────────────────── 12. 읽을 사람에 맞게 내용 정하기 ─────────────────────────
    L(12, {
      title: '1학년 동생에게 도서관을 소개할 내용 정하기',
      objective: '소개하는 글을 읽을 사람이 누구인지 생각하여, 학교 도서관과 급식실을 소개할 때 꼭 알려 줄 내용을 골라 정할 수 있다.',
      standards: WRITE,
      illustration: ART('a cozy school library with tall paper bookshelves, a second grader holding hands with a small first grader and pointing at the picture-book corner', [
        { motif: 'sun', x: 410, y: 56, s: 0.75 }, { motif: 'cloud', x: 110, y: 50 }, { motif: 'hills', y: 210 },
        { motif: 'house', x: 150, y: 218, color: 'sky', s: 1.2 }, { motif: 'house', x: 340, y: 218, color: 'buttercup' }, { motif: 'bird', x: 250, y: 84 },
        { motif: 'text', x: 240, y: 130, text: '누가 읽을까요?', size: 22 },
      ]),
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '"우리 학교 도서관을 소개하는 글을 써요. 그런데 이 글을 1학년 동생이 읽을 때와 우리 반 친구가 읽을 때 넣을 내용이 같을까요?" 1학년 동생은 도서관이 어디 있는지, 책은 어떻게 빌리는지 모른다는 것을 끌어낸다. 시연 단추로 읽을 사람마다 꼭 알려 줄 내용이 이어지는 모습을 보여 준다.',
          student: '처음 학교에 온 1학년 동생은 도서관에 대해 무엇이 궁금할까요?',
          demo: { tool: 'mindmap', options: { mode: 'match', topic: '누가 읽나요?', shuffle: false, slots: [{ id: 'kid', label: '1학년 동생' }], cards: [{ id: 'how', text: '책을 빌리는 방법' }, { id: 'old', text: '내가 어제 읽은 책' }] }, sequence: [{ match: { kid: 'how' } }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 읽을 사람에게 꼭 알려 줄 내용 잇기', minutes: 8, tool: 'mindmap',
              teacher: '"읽는 사람이 이미 아는 것보다 모르는 것을 알려 줘야 해요." 가지(읽을 사람)마다 그 사람이 모를 것을 찾게 한다. 우리 반 친구에게 "도서관 가는 길"을 잇는 학생에게 "도서관에 자주 가는 우리 반 친구는 도서관 가는 길을 모를까요?"라고 묻는다.',
              task: '소개 글을 읽을 사람(가지)마다 그 사람에게 꼭 알려 줄 내용 카드를 이어요.',
              levels: { easy: { live: true }, base: {}, challenge: {} },
              items: [
                { prompt: '읽을 사람마다 꼭 알려 줄 도서관 내용을 이어 보세요.', toolOptions: { mode: 'match', topic: '도서관 소개', slots: [{ id: 'kid', label: '처음 온 1학년 동생' }, { id: 'class', label: '우리 반 친구' }], cards: [{ id: 'way', text: '도서관 가는 길과 책 빌리는 법' }, { id: 'new', text: '이번 주에 새로 들어온 책' }, { id: 'me', text: '내가 좋아하는 색깔' }] }, target: { match: { kid: 'way', class: 'new' } }, difficulty: 0.2,
                  hints: ['읽을 사람이 이미 아는 것과 아직 모르는 것을 나누어 생각해요. 모르는 것을 알려 줘야 도움이 돼요.'] },
                { prompt: '더 해 보기: 읽을 사람 세 명에게 꼭 알려 줄 내용을 이어 보세요.', extra: true, toolOptions: { mode: 'match', topic: '도서관 소개', slots: [{ id: 'kid', label: '키가 작은 1학년 동생' }, { id: 'parent', label: '도서 봉사를 하고 싶은 부모님' }, { id: 'friend', label: '다른 학교에서 전학 온 친구' }], cards: [{ id: 'pic', text: '손이 닿는 낮은 그림책 책장' }, { id: 'time', text: '학부모 도서 봉사를 신청하는 곳' }, { id: 'card', text: '이 학교 도서관 카드를 새로 만드는 법' }] }, target: { match: { kid: 'pic', parent: 'time', friend: 'card' } }, difficulty: 0.3,
                  hints: ['사람마다 그 사람에게만 필요한 것이 무엇인지 찾아요. 키, 하고 싶은 일, 처음 온 곳인지를 살펴요.'] },
                { prompt: '1학년 동생이 읽을 글이에요. 동생에게 필요한 내용만 골라 보세요.', toolOptions: { mode: 'pick', topic: '1학년 동생에게', cards: [{ id: 'where', text: '도서관은 2층 끝에 있어요' }, { id: 'quiet', text: '안에서는 작은 목소리로 말해요' }, { id: 'test', text: '나는 받아쓰기 100점을 받았어요' }, { id: 'borrow', text: '책은 한 번에 두 권 빌려요' }] }, target: { pick: ['where', 'quiet', 'borrow'] }, difficulty: 0.2,
                  levels: { easy: { prompt: '1학년 동생이 읽을 글이에요. 세 문장 가운데 동생에게 필요한 내용만 골라 보세요.', toolOptions: { cards: [{ id: 'where', text: '도서관은 2층 끝에 있어요' }, { id: 'test', text: '나는 받아쓰기 100점을 받았어요' }, { id: 'borrow', text: '책은 한 번에 두 권 빌려요' }] }, target: { pick: ['where', 'borrow'] } } },
                  conclude: '읽을 사람이 모르는 것, 꼭 알아야 할 것을 골라 넣으면 도움이 되는 소개 글이 돼요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 도서관 소개 내용 묶기', minutes: 9, tool: 'mindmap',
              teacher: '"소개할 내용을 묶어 두면 글을 쓸 때 차례가 쉬워져요." 어디에·무엇이·어떻게 세 가지 가지를 칠판에 그린다. 겪은 일 문장("어제 공룡 책을 빌렸어요")을 가지에 넣는 학생에게 지난 시간의 소개하는 글과 겪은 일 글 구분을 떠올리게 한다.',
              task: '도서관 소개 문장을 어디에 있나·무엇이 있나·어떻게 쓰나 가지에 묶어요. 소개와 상관없는 문장은 남겨요.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '도서관 소개 문장을 세 가지 가지에 묶어 보세요.', toolOptions: { topic: '우리 학교 도서관', slots: [{ id: 'where', label: '어디에 있나요' }, { id: 'what', label: '무엇이 있나요' }, { id: 'how', label: '어떻게 쓰나요' }], cards: [{ id: 'a', text: '2층 계단 옆에 있어요' }, { id: 'b', text: '그림책과 동화책이 많아요' }, { id: 'c', text: '읽은 책은 수레에 놓아요' }] }, target: { sort: { where: ['a'], what: ['b'], how: ['c'] } }, difficulty: 0.15 },
                { prompt: '더 많은 문장을 가지에 묶고, 상관없는 문장은 남겨 보세요.', toolOptions: { topic: '우리 학교 도서관', slots: [{ id: 'where', label: '어디에 있나요' }, { id: 'what', label: '무엇이 있나요' }, { id: 'how', label: '어떻게 쓰나요' }], cards: [{ id: 'a', text: '음악실 맞은편이에요' }, { id: 'b', text: '푹신한 방석 자리가 있어요' }, { id: 'c', text: '사서 선생님께 카드를 내요' }, { id: 'd', text: '어제 공룡 책을 빌렸어요' }, { id: 'e', text: '책은 일주일 뒤에 돌려줘요' }] }, target: { sort: { where: ['a'], what: ['b'], how: ['c', 'e'] } }, difficulty: 0.3 },
                { prompt: '도서관 소개를 읽은 동생이 할 일을 차례대로 놓아 보세요.', toolOptions: { mode: 'order', topic: '책 빌리는 차례', cards: [{ id: 'o1', text: '읽고 싶은 책을 골라요' }, { id: 'o2', text: '사서 선생님께 카드를 내요' }, { id: 'o3', text: '책을 빌려 교실로 가요' }] }, target: { order: ['o1', 'o2', 'o3'] }, difficulty: 0.15 },
              ],
            },
            {
              id: 'a3', title: '활동 3. 급식실 소개 내용 정하기', minutes: 9, tool: 'mindmap',
              teacher: '"이번에는 급식실을 1학년 동생에게 소개해요." 도서관에서 쓴 방법(읽을 사람 생각하기 → 묶기)을 새 장소에 옮기게 한다. 맛있는 반찬 이야기만 고르는 학생에게 "동생이 처음 급식실에 갈 때 무엇을 몰라서 걱정할까요?"라고 묻는다.',
              task: '급식실을 1학년 동생에게 소개할 내용을 고르고 묶어요.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '1학년 동생에게 급식실을 소개할 때 꼭 넣을 내용만 골라 보세요.', toolOptions: { mode: 'pick', topic: '급식실 소개', cards: [{ id: 'line', text: '줄을 서서 식판을 받아요' }, { id: 'hand', text: '먹기 전에 손을 씻어요' }, { id: 'best', text: '나는 카레를 제일 좋아해요' }, { id: 'tray', text: '다 먹은 식판은 정리대에 놓아요' }] }, target: { pick: ['line', 'hand', 'tray'] }, difficulty: 0.15 },
                { prompt: '급식실 소개 문장을 가지에 묶어 보세요.', toolOptions: { topic: '급식실', slots: [{ id: 'where', label: '어디에 있나요' }, { id: 'what', label: '무엇이 있나요' }, { id: 'how', label: '어떻게 쓰나요' }], cards: [{ id: 'a', text: '1층 운동장 쪽에 있어요' }, { id: 'b', text: '긴 식탁과 손 씻는 곳이 있어요' }, { id: 'c', text: '반마다 정해진 자리에 앉아요' }, { id: 'd', text: '수저는 통에서 하나씩 꺼내요' }] }, target: { sort: { where: ['a'], what: ['b'], how: ['c', 'd'] } }, difficulty: 0.25 },
                { prompt: '더 해 보기: 같은 급식실도 읽을 사람에 따라 알려 줄 내용이 달라요. 이어 보세요.', extra: true, toolOptions: { mode: 'match', topic: '급식실 소개', slots: [{ id: 'kid', label: '처음 급식을 먹는 1학년 동생' }, { id: 'guest', label: '급식을 맛보러 온 부모님 손님' }], cards: [{ id: 'order', text: '1학년 줄이 서는 곳과 식판 받는 차례' }, { id: 'menu', text: '맛본 뒤 의견 쪽지를 넣는 상자' }, { id: 'fight', text: '어제 친구와 다툰 일' }] }, target: { match: { kid: 'order', guest: 'menu' } }, difficulty: 0.3,
                  hints: ['같은 곳에 오지만 하러 온 일이 달라요. 그 사람이 급식실에서 무엇을 하려고 왔는지 떠올리고 골라요.'] },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"소개 글을 쓰기 전에 먼저 생각할 것은 무엇이었나요?" "누가 읽을까?"를 함께 말한다. 출구 1번을 틀린 학생은 내가 좋아하는 것을 넣은 경우가 많으니, 다음 차시 살펴보기 활동에서 "읽는 사람에게 필요한가요?"를 다시 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '1학년 동생에게 보건실 소개', cards: [{ id: 'w', text: '보건실은 1층 현관 옆이에요' }, { id: 'h', text: '다치면 선생님께 말하고 가요' }, { id: 'c', text: '나는 사탕을 좋아해요' }] }, prompt: '1학년 동생에게 보건실을 소개해요. 꼭 넣을 내용만 골라 보세요.', target: { pick: ['w', 'h'] }, difficulty: 0.15 },
            { type: 'choice', prompt: '소개하는 글을 쓰기 전에 먼저 생각할 것은 무엇인가요?', options: ['글을 읽을 사람이 누구인지', '글씨를 얼마나 크게 쓸지', '내가 가장 좋아하는 것'], answer: 0, difficulty: 0.15, explain: '읽을 사람을 먼저 생각해야, 그 사람이 모르는 것과 꼭 알아야 할 것을 넣을 수 있어요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '누구에게 소개할까요?',
        items: [
          { type: 'table', prompt: '우리 학교의 한 곳을 골라, 1학년 동생에게 알려 줄 내용을 쓰세요.', columns: ['소개할 곳', '어디에 있나요', '무엇이 있나요', '어떻게 쓰나요'], rows: 1 },
          { type: 'choice', prompt: '1학년 동생에게 도서관을 소개할 때 꼭 넣을 내용에 ○ 하세요.', options: ['책 빌리는 방법', '내가 받은 받아쓰기 점수', '어제 먹은 반찬'], answer: '책 빌리는 방법' },
          { type: 'check', prompt: '급식실 소개 글에 들어갈 문장에 모두 ✓ 하세요.', options: ['먹기 전에 손을 씻어요.', '줄을 서서 식판을 받아요.', '나는 카레를 제일 좋아해요.', '다 먹은 식판은 정리대에 놓아요.'], answer: '먹기 전에 손을 씻어요., 줄을 서서 식판을 받아요., 다 먹은 식판은 정리대에 놓아요.' },
          { type: 'short', prompt: '같은 도서관이라도 읽을 사람에 따라 넣을 내용이 달라지는 까닭을 쓰세요.' },
        ],
        easy: {
          note: '읽을 사람이 모르는 것을 알려 줘요.',
          items: [
            { type: 'table', prompt: '도서관을 1학년 동생에게 소개할 내용을 쓰세요.', columns: ['어디에 있나요', '어떻게 쓰나요'], rows: 1 },
            { type: 'choice', prompt: '1학년 동생에게 알려 줄 것에 ○ 하세요.', options: ['도서관 가는 길', '내가 좋아하는 색'], answer: '도서관 가는 길' },
            { type: 'choice', prompt: '급식실 소개에 넣을 것에 ○ 하세요.', options: ['식판 정리하는 곳', '어제 다툰 일'], answer: '식판 정리하는 곳' },
            { type: 'draw', prompt: '1학년 동생에게 소개하고 싶은 학교의 한 곳을 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '카드를 맞는 가지에 넣으면 초록 테두리가 생기고, 틀리면 되돌아와요. 활동 1 셋째 문항은 세 문장 가운데에서 골라요. 학교 안내도를 보며 해요.',
        base: '모두 넣은 뒤 확인을 눌러 스스로 고쳐요.',
        challenge: '더 해 보기(활동 1의 읽을 사람 세 명 문항, 활동 3의 손님 문항)까지 풀고, 같은 곳을 다른 사람에게 소개하면 무엇이 달라지는지 말해요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 소개할 대상의 이름만 적고 위치·이용 방법을 넣지 않는다 → 어디에·무엇이·어떻게 세 가지 가지. ② 읽을 사람을 생각하지 않고 내가 좋아하는 것만 넣는다 → "읽는 사람이 모르는 것은?"으로 고르게 한다. ③ 소개 글에 겪은 일을 섞는다 → 11차시의 구분을 떠올린다. 학교 안 장소 이름(2층 끝 등)은 반의 실제 학교에 맞게 바꾸어 말한다.',
    }),

    // ───────────────────────── 13. 살펴보고 차례대로 쓰기 ─────────────────────────
    L(13, {
      title: '내 물건을 살펴보고 알아낸 점을 차례대로 쓰기',
      objective: '소개할 물건을 직접 살펴보고 알아낸 점을 적은 뒤, 그 내용을 차례에 맞게 이어 소개하는 글로 쓸 수 있다.',
      standards: WRITE,
      illustration: ART('a child at a desk looking closely at a small eraser and pencil case with a big paper magnifying glass, little notes floating around', [
        { motif: 'sun', x: 404, y: 58, s: 0.8 }, { motif: 'cloud', x: 120, y: 52 }, { motif: 'hills', y: 210 },
        { motif: 'star', x: 180, y: 120 }, { motif: 'star', x: 300, y: 112, color: 'sky' }, { motif: 'tree', x: 400, y: 218, color: 'buttercup' },
        { motif: 'text', x: 240, y: 160, text: '눈으로 보고, 손으로 만져 봐요', size: 20 },
      ]),
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '교사가 지우개를 보이지 않게 쥐고 "선생님 지우개는 무지개색이고 별 모양이에요"라고 말한 뒤 손을 편다(실제로는 흰 네모 지우개). "선생님이 쓴 소개는 맞았나요? 왜 틀렸을까요?" 살펴보지 않고 쓰면 실제와 다르게 쓴다는 것을 끌어낸다. 시연 단추로 "눈으로 알아낸 점"과 "상상" 카드가 나뉘는 모습을 보여 준다.',
          student: '선생님 소개가 틀린 까닭은 무엇일까요?',
          demo: { tool: 'mindmap', options: { topic: '선생님 지우개', shuffle: false, slots: [{ id: 'saw', label: '살펴보고 알아냈어요' }], cards: [{ id: 'w', text: '흰색 네모 모양이에요' }, { id: 'r', text: '무지개색 별 모양이에요' }] }, sequence: [{ sort: { saw: ['w'] } }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 살펴보고 알아낸 점 가르기', minutes: 8, tool: 'mindmap',
              teacher: '"눈으로 보고 알아낸 것, 손으로 만져서 알아낸 것을 나누어요. 살펴보지 않고 지어낸 것은 넣지 않아요." 학생들도 자기 지우개를 꺼내 실제로 보고 만져 본 뒤 카드를 넣는다. 상상 카드를 넣는 학생에게 "지금 손에 든 지우개에서 그게 보이나요?"라고 묻는다.',
              task: '물건을 살펴보고 알아낸 점을 눈·손 가지에 나누어요. 살펴보지 않고 지어낸 카드는 남겨요.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '지우개를 살펴보고 알아낸 점을 눈과 손 가지로 나누어 보세요.', toolOptions: { topic: '내 지우개', slots: [{ id: 'eye', label: '눈으로 알아낸 점' }, { id: 'hand', label: '손으로 알아낸 점' }], cards: [{ id: 'white', text: '흰색이에요' }, { id: 'soft', text: '말랑말랑해요' }, { id: 'box', text: '네모 모양이에요' }, { id: 'light', text: '아주 가벼워요' }] }, target: { sort: { eye: ['white', 'box'], hand: ['soft', 'light'] } }, difficulty: 0.15,
                  levels: { easy: { prompt: '지우개를 살펴보고 알아낸 점 두 장을 눈과 손 가지로 나누어 보세요.', toolOptions: { cards: [{ id: 'white', text: '흰색이에요' }, { id: 'soft', text: '말랑말랑해요' }] }, target: { sort: { eye: ['white'], hand: ['soft'] } } } } },
                { prompt: '필통을 살펴보고 알아낸 점만 가지에 넣고, 지어낸 것은 남겨 보세요.', toolOptions: { topic: '내 필통', slots: [{ id: 'eye', label: '눈으로 알아낸 점' }, { id: 'hand', label: '손으로 알아낸 점' }], cards: [{ id: 'blue', text: '파란색 천으로 되어 있어요' }, { id: 'zip', text: '지퍼가 두 개 있어요' }, { id: 'smooth', text: '겉이 부드러워요' }, { id: 'fly', text: '밤에는 하늘을 날아요' }] }, target: { sort: { eye: ['blue', 'zip'], hand: ['smooth'] } }, difficulty: 0.2,
                  levels: { challenge: { prompt: '필통을 살펴보고 알아낸 점만 가지에 넣어 보세요. 살펴보지 않고 짐작한 것과 지어낸 것은 남겨요.', toolOptions: { cards: [{ id: 'blue', text: '파란색 천으로 되어 있어요' }, { id: 'zip', text: '지퍼가 두 개 있어요' }, { id: 'guess', text: '아마 비싼 필통일 거예요' }, { id: 'smooth', text: '겉이 부드러워요' }, { id: 'light', text: '들어 보니 가벼워요' }, { id: 'fly', text: '밤에는 하늘을 날아요' }] }, target: { sort: { eye: ['blue', 'zip'], hand: ['smooth', 'light'] } } } },
                  predict: { q: '살펴보지 않고 떠오른 생각도 소개 글에 넣어도 될까요?', options: ['네', '아니요', '잘 모르겠어요'], answer: 1 },
                  conclude: '소개하는 글은 읽는 사람이 믿고 읽어요. 직접 살펴보고 알아낸 것만 써요.' },
                { prompt: '줄자를 살펴보았어요. 알아낸 점과 쓰임을 가지에 나누어 보세요.', toolOptions: { topic: '우리 반 줄자', slots: [{ id: 'look', label: '생김새' }, { id: 'use', label: '쓰임' }], cards: [{ id: 'yellow', text: '노란 띠에 숫자가 있어요' }, { id: 'pull', text: '당기면 길게 늘어나요' }, { id: 'measure', text: '책상 길이를 재요' }, { id: 'magic', text: '말하면 저절로 재 줘요' }] }, target: { sort: { look: ['yellow', 'pull'], use: ['measure'] } }, difficulty: 0.25 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 알아낸 점을 차례대로 잇기', minutes: 9, tool: 'story',
              teacher: '"소개하는 글은 무엇을 소개하는지 → 생김새 → 쓰임 → 마무리 차례로 쓰면 읽기 쉬워요." 칠판에 네 칸을 그린다. 마무리 문장을 맨 앞에 놓는 학생에게 "\'제 지우개를 아껴 주세요\'로 시작하면 무엇을 소개하는지 알 수 있나요?"라고 묻는다.',
              task: '살펴보고 쓴 소개 문장을 차례에 맞게 놓아요.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '지우개 소개 글을 차례대로 놓아 보세요.', toolOptions: { mode: 'order', slots: ['무엇', '생김새', '쓰임'], cards: [{ id: 'e1', text: '제 지우개를 소개할게요.' }, { id: 'e2', text: '흰색 네모 모양이고 말랑해요.' }, { id: 'e3', text: '연필 글씨를 깨끗이 지워요.' }] }, target: { order: ['e1', 'e2', 'e3'] }, difficulty: 0.1 },
                { prompt: '필통 소개 글을 차례대로 놓아 보세요.', toolOptions: { mode: 'order', slots: ['무엇', '생김새', '쓰임', '마무리'], cards: [{ id: 'p1', text: '제 필통을 소개합니다.' }, { id: 'p2', text: '파란 천에 지퍼가 두 개예요.' }, { id: 'p3', text: '연필과 가위를 나누어 넣어요.' }, { id: 'p4', text: '매일 가방에 넣어 다녀요.' }] }, target: { order: ['p1', 'p2', 'p3', 'p4'] }, difficulty: 0.2 },
                { prompt: '줄자 소개 글을 차례대로 놓아 보세요. 생김새 문장이 두 개예요.', toolOptions: { mode: 'order', slots: ['무엇', '생김새 1', '생김새 2', '쓰임'], cards: [{ id: 'r1', text: '우리 반 줄자를 소개할게요.' }, { id: 'r2', text: '동그란 통에 노란 띠가 감겨 있어요.' }, { id: 'r3', text: '띠를 당기면 숫자가 보여요.' }, { id: 'r4', text: '교실 문의 높이를 잴 때 써요.' }] }, target: { order: ['r1', ['r2', 'r3'], 'r4'] }, difficulty: 0.25 },
              ],
            },
            {
              id: 'a3', title: '활동 3. 내 물건 살펴보고 소개 글 쓰기', minutes: 9, tool: 'story', pair: true,
              teacher: '학생마다 자기 책상 위 물건 하나(지우개·필통·자·물병)를 고르게 한다. "1분 동안 눈으로 보고, 손으로 만져 봐요. 알아낸 점 세 가지를 활동지에 적어요." 그다음 무엇 → 생김새 → 쓰임 차례로 세 문장을 쓴다. 쓰는 동안 물건을 치운 학생에게는 다시 꺼내 놓고 보며 쓰게 한다.',
              task: '내 물건 하나를 골라 직접 살펴보고, 알아낸 점 세 가지를 적은 뒤 차례대로 소개 글을 써요.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '소개할 물건을 골라 1분 동안 눈과 손으로 살펴본 뒤 "다 했어요"를 누르세요.', free: true },
                { prompt: '알아낸 점 세 가지를 활동지 표에 적고 짝에게 보여 주세요.', free: true },
                { prompt: '무엇 → 생김새 → 쓰임 차례로 소개 글을 세 문장 이상 쓰고, 물건과 견주어 맞는지 확인하세요.', free: true },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"내가 쓴 글에서 직접 살펴보고 알아낸 문장에 밑줄을 그어 볼까요?" 밑줄이 없는 문장이 있으면 물건을 다시 보고 고치게 한다. 출구 1번을 틀린 학생은 상상과 관찰을 섞은 것이니 다음 차시에 물건을 앞에 두고 쓰게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { topic: '내 물병', slots: [{ id: 'eye', label: '눈으로' }, { id: 'hand', label: '손으로' }], cards: [{ id: 'g', text: '초록색 뚜껑이 있어요' }, { id: 'c', text: '만지면 차가워요' }, { id: 's', text: '물병이 노래를 불러요' }] }, prompt: '물병을 살펴보고 알아낸 점만 가지에 넣고, 지어낸 것은 남겨 보세요.', target: { sort: { eye: ['g'], hand: ['c'] } }, difficulty: 0.15 },
            { type: 'choice', prompt: '소개하는 글을 쓸 때 가장 먼저 쓸 문장은 무엇인가요?', options: ['"아껴 써 주세요."', '"제 자를 소개할게요."', '"글씨를 잘 지워요."'], answer: 1, difficulty: 0.15, explain: '무엇을 소개하는지 먼저 알려 주고, 생김새와 쓰임을 이어 써요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '살펴보고 소개하기',
        items: [
          { type: 'table', prompt: '소개할 물건을 살펴보고 알아낸 점을 쓰세요.', columns: ['눈으로 알아낸 점', '손으로 알아낸 점', '쓰임'], rows: 2 },
          { type: 'blank', prompt: '소개 글의 차례를 쓰세요.', text: '무엇을 소개하는지 → ______ → 쓰임 → 마무리', answer: '생김새' },
          { type: 'check', prompt: '살펴보고 알아낸 문장에 모두 ✓ 하세요. (물건: 흰 네모 지우개)', options: ['흰색 네모 모양이에요.', '말랑말랑해요.', '밤에 반짝반짝 빛나요.', '연필 글씨를 지워요.'], answer: '흰색 네모 모양이에요., 말랑말랑해요., 연필 글씨를 지워요.' },
          { type: 'short', prompt: '내 물건을 소개하는 글을 세 문장 이상 쓰세요.' },
        ],
        easy: {
          note: '물건을 앞에 두고 보면서 써요. 보이는 것, 만져지는 것만 써요.',
          items: [
            { type: 'table', prompt: '내 물건을 살펴보고 쓰세요.', columns: ['무슨 색?', '무슨 모양?', '어디에 써요?'], rows: 1 },
            { type: 'choice', prompt: '살펴보고 알아낸 문장에 ○ 하세요.', options: ['지우개는 흰색이에요.', '지우개는 하늘을 날아요.'], answer: '지우개는 흰색이에요.' },
            { type: 'blank', prompt: '빈칸을 채워 소개 글을 쓰세요.', text: '제 ______을(를) 소개할게요. ______ 모양이에요.', answer: '(물건 이름), (모양)' },
            { type: 'draw', prompt: '내 물건을 보고 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '카드를 맞는 칸에 넣으면 초록 테두리가 생기고, 틀리면 되돌아와요. 활동 1 첫 문항은 카드 두 장으로 시작해요. 글쓰기는 쉬운 활동지의 빈칸 틀로 해요.',
        base: '살펴보고 알아낸 점 세 가지를 적고, 세 문장으로 소개 글을 써요.',
        challenge: '활동 1 둘째 문항에 "아마 비싼 필통일 거예요"처럼 짐작한 카드가 섞여 나와요. 생김새를 두 문장으로 늘려 네 문장 이상 쓰고, 마무리 문장도 붙여요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 살펴보지 않고 머릿속 생각만으로 써서 실제와 다른 내용을 적는다 → 물건을 책상 위에 두고 보며 쓰게 한다. ② 알아낸 점을 낱말로만 적고 문장으로 잇지 못한다 → 8차시의 "낱말을 문장으로 늘리기"를 떠올린다. ③ 차례 없이 생각나는 대로 쓴다 → 무엇 → 생김새 → 쓰임 네 칸 틀. 활동지는 다음 차시 소개 발표에 쓴다.',
    }),

    // ───────────────────────── 14. 소개하고 질문받기 ─────────────────────────
    L(14, {
      title: '아끼는 물건을 소개하고 친구 질문에 답하기',
      objective: '아끼는 물건을 듣는 친구가 알아듣는 말로 소개하고, 친구의 소개를 들은 뒤 더 알고 싶은 것을 물어볼 수 있다.',
      standards: WRITE,
      illustration: ART('children taking turns showing a favorite toy rabbit, a small robot and a paper kite to classmates who raise hands to ask questions', [
        { motif: 'sun', x: 408, y: 58, s: 0.8 }, { motif: 'cloud', x: 120, y: 50 }, { motif: 'hills', y: 208 },
        { motif: 'house', x: 110, y: 216, color: 'rose' }, { motif: 'tree', x: 380, y: 216 }, { motif: 'star', x: 240, y: 90, color: 'buttercup' },
        { motif: 'text', x: 240, y: 146, text: '내가 아끼는 물건이에요', size: 22 },
      ]),
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '교사가 "선생님이 아끼는 건 뭉치예요. 뭉치는 늘 책상에 있어요"라고 말한 뒤 "뭉치가 뭔지 알겠나요?"라고 묻는다. 학생들이 모르겠다고 하면 "뭉치는 선생님이 털실 인형에 붙인 이름이에요"라고 풀어 준다. "나만 아는 이름은 듣는 사람이 몰라요"를 짚고, 시연 단추로 별명 대신 모두 아는 말이 들어가는 말풍선을 보여 준다.',
          student: '선생님이 처음에 말한 "뭉치"는 왜 알아듣기 어려웠을까요?',
          demo: { tool: 'story', options: { mode: 'fill', shuffle: false, cards: [{ id: 'doll', text: '털실 인형' }, { id: 'nick', text: '뭉치' }], slots: [{ id: 'b', who: '선생님', motif: 'star', label: '선생님이 아끼는 ___ 뭉치를 소개할게요.' }] }, sequence: [{ fill: { b: 'doll' } }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 모두가 알아듣는 말로 바꾸기', minutes: 9, tool: 'story',
              teacher: '"내가 붙인 이름, 줄임말은 친구가 몰라요. 무엇인지 풀어서 말해 줘요." 카드마다 듣는 친구 입장에서 읽어 보게 한다. 줄임말(킥보)을 그대로 넣는 학생에게 "1학년 동생이 \'킥보\'를 들으면 알까요?"라고 묻는다.',
              task: '나만 아는 별명이나 줄임말 대신 듣는 친구가 알아듣는 말을 말풍선에 넣어요.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '민지가 아끼는 인형을 소개해요. 모두가 알아듣는 말을 넣어 보세요.', toolOptions: { mode: 'fill', cards: [{ id: 'rabbit', text: '토끼 인형' }, { id: 'nick', text: '토토' }, { id: 'that', text: '그거' }], slots: [{ id: 'b', who: '민지', motif: 'flower', label: '내가 아끼는 ___을 소개할게.' }] }, target: { fill: { b: 'rabbit' } }, difficulty: 0.1,
                  levels: { easy: { toolOptions: { cards: [{ id: 'rabbit', text: '토끼 인형' }, { id: 'that', text: '그거' }] } } } },
                { prompt: '준호가 줄임말을 썼어요. 친구가 알아듣는 말로 바꾸어 넣어 보세요.', toolOptions: { mode: 'fill', title: '준호: "내 킥보는 빨간색이야."', cards: [{ id: 'full', text: '킥보드' }, { id: 'short', text: '킥보' }, { id: 'thing', text: '탈 거' }], slots: [{ id: 'b', who: '준호', motif: 'sun', label: '내 ___는 빨간색이야.' }] }, target: { fill: { b: 'full' } }, difficulty: 0.2 },
                { prompt: '하윤이의 소개를 고쳐요. 두 빈칸에 알맞은 말을 넣어 보세요.', toolOptions: { mode: 'fill', title: '하윤: "우리 꼬물이를 소개할게."', cards: [{ id: 'fish', text: '금붕어' }, { id: 'tank', text: '어항' }, { id: 'nick', text: '꼬물이' }], slots: [{ id: 'b1', who: '하윤', motif: 'leaf', label: '꼬물이는 우리 집 ___예요.' }, { id: 'b2', who: '하윤', motif: 'leaf', label: '동그란 ___ 안에서 헤엄쳐요.' }] }, target: { fill: { b1: 'fish', b2: 'tank' } }, difficulty: 0.25,
                  predict: { q: '"꼬물이"라는 이름만 들으면 친구들이 무엇인지 알까요?', options: ['알아요', '몰라요', '잘 모르겠어요'], answer: 1 },
                  conclude: '내가 붙인 이름을 쓸 때는 그것이 무엇인지 함께 알려 줘야 듣는 친구가 알아들어요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 더 알고 싶은 것 물어보기', minutes: 8, tool: 'mindmap',
              teacher: '"친구의 소개를 듣고 궁금한 것을 물어보면 친구가 더 자세히 소개할 수 있어요." 이미 소개에서 말한 것을 다시 묻거나 소개와 상관없는 것을 묻는 학생에게 "그건 친구가 벌써 말했나요?", "그 질문이 친구 물건과 이어지나요?"라고 묻는다.',
              task: '친구의 소개를 읽고 더 알고 싶은 것을 묻는 좋은 질문을 고르거나 이어요.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '서준이가 "내 로봇은 파란색이고 팔이 움직여."라고 소개했어요. 좋은 질문만 골라 보세요.', toolOptions: { mode: 'pick', topic: '로봇에 대한 질문', cards: [{ id: 'who', text: '"언제부터 가지고 있었어?"' }, { id: 'how', text: '"팔은 어떻게 움직여?"' }, { id: 'color', text: '"무슨 색이야?"' }, { id: 'lunch', text: '"점심 뭐 먹었어?"' }] }, target: { pick: ['who', 'how'] }, difficulty: 0.2,
                  levels: { challenge: { prompt: '서준이의 로봇 소개를 듣고 물을 좋은 질문만 골라 보세요. 소개에서 벌써 말한 것을 다시 묻는 질문은 빼요.', toolOptions: { cards: [{ id: 'who', text: '"언제부터 가지고 있었어?"' }, { id: 'how', text: '"팔은 어떻게 움직여?"' }, { id: 'color', text: '"무슨 색이야?"' }, { id: 'arm', text: '"팔이 움직여?"' }, { id: 'name', text: '"로봇 이름이 있어?"' }, { id: 'lunch', text: '"점심 뭐 먹었어?"' }] }, target: { pick: ['who', 'how', 'name'] } } } },
                { prompt: '지우의 소개에서 더 알고 싶은 것과 질문을 이어 보세요.', toolOptions: { mode: 'match', topic: '지우의 연', slots: [{ id: 'look', label: '생김새가 궁금해요' }, { id: 'use', label: '쓰는 법이 궁금해요' }], cards: [{ id: 'q1', text: '"연은 무슨 모양이야?"' }, { id: 'q2', text: '"연은 어떻게 날려?"' }, { id: 'q3', text: '"너는 몇 살이야?"' }] }, target: { match: { look: 'q1', use: 'q2' } }, difficulty: 0.2,
                  hints: ['궁금한 것이 물건의 모양인지, 가지고 노는 방법인지 먼저 나누어 생각하고 그것을 묻는 질문을 골라요.'] },
                { prompt: '민지의 소개를 듣고 물을 질문을 생김새·까닭 가지로 나누어 보세요.', toolOptions: { topic: '민지의 토끼 인형', slots: [{ id: 'look', label: '생김새' }, { id: 'why', label: '아끼는 까닭' }], cards: [{ id: 'a', text: '"귀는 얼마나 길어?"' }, { id: 'b', text: '"왜 제일 아껴?"' }, { id: 'c', text: '"털은 무슨 색이야?"' }, { id: 'd', text: '"그 인형이 왜 특별해?"' }] }, target: { sort: { look: ['a', 'c'], why: ['b', 'd'] } }, difficulty: 0.25,
                  conclude: '친구가 아직 말하지 않은 것을 물으면 소개가 더 자세해져요.' },
              ],
            },
            {
              id: 'a3', title: '활동 3. 아끼는 물건 소개하고 질문받기', minutes: 9, tool: 'story', pair: true,
              teacher: '지난 시간에 쓴 소개 글을 바탕으로 모둠 앞에서 아끼는 물건을 소개한다(물건이 없으면 그림). 발표할 때는 6~10차시의 바른 자세(서기 – 숨 – 인사, 친구들 바라보기)를 지키게 한다. 듣는 친구는 질문을 하나씩 하고, 발표한 친구는 대답한 내용 가운데 글에 없던 것을 기억해 둔다 — 다음 시간 고쳐 쓰기에 쓴다.',
              task: '모둠 앞에서 아끼는 물건을 소개하고, 친구 질문에 답해요. 질문에서 나온 것 가운데 글에 없던 것을 기억해 둬요.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '바른 자세로 서서 아끼는 물건을 소개한 뒤 "다 했어요"를 누르세요.', free: true },
                { prompt: '친구의 질문에 대답해요. 글에 없던 내용이 나오면 활동지에 적으세요.', free: true },
                { prompt: '친구의 소개를 듣고 더 알고 싶은 것을 하나씩 물어보세요.', free: true },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"친구 질문 덕분에 새로 알게 된 것이 있나요?" 두세 명의 대답을 듣고 "그 내용을 글에 넣으면 더 좋은 소개 글이 돼요. 다음 시간에 고쳐 써요"라고 잇는다. 출구 1번을 틀린 학생은 별명을 그대로 쓴 것이니 다음 시간 고쳐 쓰기에서 그 부분을 먼저 살핀다.',
          exitTicket: [
            { type: 'tool', tool: 'story', options: { mode: 'fill', title: '서준: "내 씽씽이를 소개할게."', cards: [{ id: 'bike', text: '세발자전거' }, { id: 'nick', text: '씽씽이' }, { id: 'it', text: '그것' }], slots: [{ id: 'b', who: '서준', motif: 'sun', label: '씽씽이는 내가 아끼는 ___야.' }] }, prompt: '서준이가 별명을 썼어요. 친구들이 알아듣는 말을 넣어 보세요.', target: { fill: { b: 'bike' } }, difficulty: 0.15 },
            { type: 'choice', prompt: '"내 필통은 파란색이야."라는 소개를 듣고 물어보기 좋은 질문은 무엇인가요?', options: ['"무슨 색이야?"', '"안에 무엇을 넣어 다녀?"', '"오늘 몇 시에 일어났어?"'], answer: 1, difficulty: 0.2, explain: '색은 이미 말했고, 일어난 시각은 필통과 상관없어요. 아직 말하지 않은 쓰임을 물어보면 좋아요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '아끼는 물건 소개',
        items: [
          { type: 'table', prompt: '내가 아끼는 물건을 소개할 내용을 쓰세요.', columns: ['무엇인가요 (모두 아는 말로)', '생김새', '아끼는 까닭'], rows: 1 },
          { type: 'choice', prompt: '친구가 알아듣기 쉬운 소개에 ○ 하세요.', options: ['"내 토토를 소개할게."', '"내 토끼 인형 토토를 소개할게."', '"내 그거를 소개할게."'], answer: '"내 토끼 인형 토토를 소개할게."' },
          { type: 'blank', prompt: '친구 소개를 듣고 물어볼 질문을 쓰세요.', text: '친구: "내 공룡 장난감은 초록색이야."  나: "______?"', answer: '(예: 어떻게 가지고 놀아?)' },
          { type: 'short', prompt: '친구의 질문 덕분에 새로 떠오른 내용을 쓰세요.' },
        ],
        easy: {
          note: '내가 붙인 이름 앞에 "토끼 인형", "자전거"처럼 무엇인지 붙여요.',
          items: [
            { type: 'choice', prompt: '알아듣기 쉬운 말에 ○ 하세요.', options: ['"내 킥보드"', '"내 킥보"'], answer: '"내 킥보드"' },
            { type: 'blank', prompt: '빈칸을 채워 소개하세요.', text: '내가 아끼는 것은 ______이에요(예요).', answer: '(물건 이름)' },
            { type: 'choice', prompt: '좋은 질문에 ○ 하세요. (친구: "내 로봇은 파란색이야.")', options: ['"어떻게 움직여?"', '"점심 뭐 먹었어?"'], answer: '"어떻게 움직여?"' },
            { type: 'draw', prompt: '내가 아끼는 물건을 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '카드를 맞는 칸에 넣으면 초록 테두리가 생기고, 틀리면 되돌아와요. 활동 1 첫 문항은 카드 두 장으로 시작해요. 소개는 그림을 보여 주며 두 문장만 해도 좋아요.',
        base: '소개 글을 보며 세 문장으로 소개하고, 질문 하나에 대답해요.',
        challenge: '활동 2 첫 문항에 소개에서 벌써 말한 것을 다시 묻는 질문이 섞여 나와요. 질문 두 개 이상에 대답하고, 친구 소개에서 생김새와 까닭을 묻는 질문을 하나씩 해요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 자기만 아는 별명이나 줄임말을 써서 듣는 친구가 알아듣지 못한다 → "무엇인지"를 함께 말한다. ② 이미 말한 것을 다시 묻거나 상관없는 것을 묻는다 → 아직 말하지 않은 생김새·쓰임·까닭을 묻는다. ③ 질문을 받으면 당황해 "몰라"라고 한다 → "생각해 보고 말할게"도 좋은 대답이다. 물건을 가져오기 어려운 학생은 그림이나 말로 소개하고, 비싼 물건 자랑이 되지 않게 "아끼는 까닭"에 힘을 준다.',
    }),

    // ───────────────────────── 15. 정리: 고쳐 쓰고 돌아보기 ─────────────────────────
    L(15, {
      title: '소개 글을 고쳐 쓰고 단원 공부 돌아보기',
      objective: '친구가 모르겠다고 한 곳을 찾아 소개 글을 고쳐 쓰고, 이 단원에서 배운 대화·발표·소개 글쓰기를 스스로 점검할 수 있다.',
      standards: [...TALK, ...SPEAK, ...WRITE],
      illustration: ART('a class bulletin board covered with colorful paper introduction notes, speech bubbles and gold stars celebrating the end of the first unit', [
        { motif: 'sun', x: 404, y: 56, s: 0.85 }, { motif: 'star', x: 120, y: 70 }, { motif: 'star', x: 200, y: 50, color: 'rose' }, { motif: 'star', x: 300, y: 64, color: 'sky' },
        { motif: 'hills', y: 210 }, { motif: 'flower', x: 100, y: 228 }, { motif: 'flower', x: 380, y: 228, color: 'lavender' }, { motif: 'tree', x: 240, y: 218 },
        { motif: 'text', x: 240, y: 140, text: '만나서 반가웠어요!', size: 24 },
      ]),
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '지난 시간 질문받은 내용을 떠올리게 한 뒤 "친구가 \'그게 뭐야?\' 하고 물었을 때 말로 설명해 줬지요. 그런데 글을 읽는 다른 사람은 그 설명을 들을 수 있을까요?"라고 묻는다. 말로만 덧붙이면 글은 그대로라는 것을 짚고, 시연 단추로 모르겠다고 한 곳이 글에서 고쳐지는 모습을 보여 준다.',
          student: '친구가 모르겠다고 한 곳을 말로만 설명하면 어떤 문제가 생길까요?',
          demo: { tool: 'story', options: { mode: 'fill', shuffle: false, title: '짝: "꼬미가 뭐야?"', cards: [{ id: 'doll', text: '토끼 인형' }, { id: 'it', text: '그거' }], slots: [{ id: 'b', who: '지우', motif: 'flower', label: '내가 아끼는 ___ 꼬미를 소개할게요.' }] }, sequence: [{ fill: { b: 'doll' } }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 친구가 모르겠다고 한 곳 고쳐 쓰기', minutes: 9, tool: 'story',
              teacher: '"짝의 질문은 글이 더 좋아질 자리를 알려 줘요." 짝의 질문을 읽고 그 답이 글에 들어가도록 빈칸을 채운다. 셋째 문항에서 "말로 설명해 줘요"를 고르는 학생에게 "다음에 이 글을 읽는 1학년 동생도 설명을 들을 수 있을까요?"라고 묻는다.',
              task: '짝이 모르겠다고 한 곳을 읽고, 그 답이 글에 들어가도록 고쳐 써요.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '짝이 "얼마나 커?"라고 물었어요. 크기가 드러나게 빈칸을 채워 보세요.', toolOptions: { mode: 'fill', title: '짝: "꼬미는 얼마나 커?"', cards: [{ id: 'palm', text: '내 손바닥' }, { id: 'big', text: '커다래' }, { id: 'idk', text: '몰라' }], slots: [{ id: 'b', who: '지우', motif: 'flower', label: '꼬미는 ___만 해요.' }] }, target: { fill: { b: 'palm' } }, difficulty: 0.1 },
                { prompt: '짝이 "어떻게 쓰는 거야?"라고 물었어요. 두 빈칸을 채워 고쳐 써 보세요.', toolOptions: { mode: 'fill', title: '짝: "그 줄자는 어떻게 써?"', cards: [{ id: 'pull', text: '띠를 당겨' }, { id: 'read', text: '숫자를 읽어요' }, { id: 'throw', text: '던져' }], slots: [{ id: 'b1', who: '준호', motif: 'sun', label: '끝을 잡고 ___ 재고 싶은 곳에 대요.' }, { id: 'b2', who: '준호', motif: 'sun', label: '띠 끝이 닿은 곳의 ___.' }] }, target: { fill: { b1: 'pull', b2: 'read' } }, difficulty: 0.2 },
                { prompt: '짝이 "어디가 좋다는 거야?"라고 물었어요. 좋은 까닭이 드러나게 빈칸을 채워 보세요.', toolOptions: { mode: 'fill', title: '짝: "필통 어디가 좋다는 거야?"', cards: [{ id: 'two', text: '칸이 두 개여서' }, { id: 'just', text: '그냥' }, { id: 'later', text: '나중에 말해 줄게' }], slots: [{ id: 'b', who: '하윤', motif: 'leaf', label: '내 필통은 ___ 좋아요.' }] }, target: { fill: { b: 'two' } }, difficulty: 0.25,
                  predict: { q: '친구가 모르겠다고 하면 어떻게 할까요?', options: ['말로만 설명해요', '글을 고쳐 써요'], answer: 1 },
                  conclude: '말로만 설명하면 다음에 읽는 사람은 몰라요. 모르겠다고 한 곳은 글을 고쳐 써요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 단원에서 배운 것 묶기', minutes: 9, tool: 'mindmap',
              teacher: '"이 단원에서 우리는 대화하기, 발표하기, 소개하는 글쓰기를 했어요." 칠판에 세 가지를 쓰고 그동안 쓴 활동지를 펼쳐 보게 한다. 되풀이하기·차례 넘기기를 발표 가지에 넣는 학생에게 "그건 둘이나 모둠이 주고받을 때 한 거죠?"라고 1~5차시를 떠올리게 한다.',
              task: '이 단원에서 배운 것 카드를 대화할 때·발표할 때·소개 글 쓸 때 가지로 묶어요.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '배운 것 카드를 대화·발표·소개 글 가지로 묶어 보세요.', toolOptions: { topic: '1단원 정리', slots: [{ id: 'talk', label: '대화할 때' }, { id: 'speak', label: '발표할 때' }, { id: 'write', label: '소개 글 쓸 때' }], cards: [{ id: 'turn', text: '말차례를 지켜요' }, { id: 'stand', text: '바르게 서서 친구들을 봐요' }, { id: 'look', text: '직접 살펴보고 써요' }] }, target: { sort: { talk: ['turn'], speak: ['stand'], write: ['look'] } }, difficulty: 0.1 },
                { prompt: '여섯 장을 가지에 묶어 보세요.', toolOptions: { topic: '1단원 정리', slots: [{ id: 'talk', label: '대화할 때' }, { id: 'speak', label: '발표할 때' }, { id: 'write', label: '소개 글 쓸 때' }], cards: [{ id: 'rep', text: '친구 말을 되풀이해요' }, { id: 'pass', text: '이름을 불러 차례를 넘겨요' }, { id: 'breath', text: '숨을 고르고 시작해요' }, { id: 'praise', text: '잘한 점부터 칭찬해요' }, { id: 'reader', text: '읽을 사람을 생각해요' }, { id: 'nick', text: '별명 대신 모두 아는 말을 써요' }] }, target: { sort: { talk: ['rep', 'pass'], speak: ['breath', 'praise'], write: ['reader', 'nick'] } }, difficulty: 0.3,
                  levels: { easy: { prompt: '네 장을 가지에 묶어 보세요.', toolOptions: { cards: [{ id: 'rep', text: '친구 말을 되풀이해요' }, { id: 'breath', text: '숨을 고르고 시작해요' }, { id: 'reader', text: '읽을 사람을 생각해요' }, { id: 'pass', text: '이름을 불러 차례를 넘겨요' }] }, target: { sort: { talk: ['rep', 'pass'], speak: ['breath'], write: ['reader'] } } } } },
                { prompt: '더 해 보기: 이 단원에서 배운 것과 다른 카드는 남기고, 맞는 카드만 가지에 넣어 보세요.', extra: true, toolOptions: { topic: '1단원 정리', slots: [{ id: 'talk', label: '대화할 때' }, { id: 'speak', label: '발표할 때' }, { id: 'write', label: '소개 글 쓸 때' }], cards: [{ id: 'wait', text: '말이 끝날 때까지 기다려요' }, { id: 'loud', text: '소리를 지를수록 좋아요' }, { id: 'voice', text: '자리에 맞는 목소리로 말해요' }, { id: 'more', text: '이름 말고 생김새도 써요' }, { id: 'imag', text: '상상한 것도 사실처럼 써요' }] }, target: { sort: { talk: ['wait'], speak: ['voice'], write: ['more'] } }, difficulty: 0.3 },
              ],
            },
            {
              id: 'a3', title: '활동 3. 단원 스스로 점검하기', minutes: 8, tool: 'emotion',
              teacher: '"대화하기, 발표하기, 소개 글쓰기에서 지금 내가 할 수 있는 만큼 눈금을 골라요. \'아직이에요\'를 골라도 틀린 게 아니에요. 그 칸이 2단원에서 더 연습할 곳이에요." 고르기 전에 칠판의 세 가지(기다리고 넘기기·바른 자세와 목소리·읽을 사람 생각하기)를 함께 읽는다. 교사 화면에서 "아직이에요"가 많은 칸을 살펴 다음 단원 대화·발표 시간에 다시 짚는다. 모두 "잘했어요"를 고른 학생에게는 "가장 자신 있는 것 하나를 짝에게 보여 줄래요?"라고 권한다.',
              task: '대화하기·발표하기·소개 글쓰기에서 지금 내가 할 수 있는 만큼 눈금을 골라요. 정답은 없어요.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '대화할 때 친구 말이 끝날 때까지 기다리고, 다음 친구에게 차례를 넘길 수 있나요? 눈금을 고르고 "다 했어요"를 누르세요.', free: true, toolOptions: { mode: 'scale', steps: 3, situation: '대화할 때: 끝까지 듣고 기다렸다가 차례를 넘겨요.', motif: 'flower', ask: '나는 얼마나 할 수 있나요?', scaleLabels: { 1: '아직이에요', 2: '조금 해요', 3: '잘해요' } } },
                { prompt: '발표할 때 바르게 서서 자리에 맞는 목소리로 말할 수 있나요? 눈금을 고르고 "다 했어요"를 누르세요.', free: true, toolOptions: { mode: 'scale', steps: 3, situation: '발표할 때: 바르게 서서 알맞은 목소리로 말해요.', motif: 'sun', ask: '나는 얼마나 할 수 있나요?', scaleLabels: { 1: '아직이에요', 2: '조금 해요', 3: '잘해요' } } },
                { prompt: '소개 글을 쓸 때 읽을 사람을 생각하고, 모르겠다고 한 곳을 고쳐 쓸 수 있나요? 눈금을 고르고 "다 했어요"를 누르세요.', free: true, toolOptions: { mode: 'scale', steps: 3, situation: '소개 글 쓸 때: 읽을 사람을 생각하고 고쳐 써요.', motif: 'star', ask: '나는 얼마나 할 수 있나요?', scaleLabels: { 1: '아직이에요', 2: '조금 해요', 3: '잘해요' } } },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"이 단원을 시작할 때와 지금, 나는 무엇이 달라졌나요?" 두세 명이 말한다. 고쳐 쓴 소개 글은 교실 뒤 게시판에 붙여 1학년 동생이나 다른 반 친구가 읽게 한다. 출구 1번에서 말로 설명하는 쪽을 고른 학생은 고쳐 쓰기를 한 번 더 함께 한다.',
          exitTicket: [
            { type: 'choice', prompt: '친구가 내 소개 글을 읽고 "이게 뭐야?"라고 물었어요. 어떻게 하면 좋을까요?', options: ['말로만 설명하고 글은 그대로 둬요', '모르겠다고 한 곳을 글에서 고쳐 써요', '다른 친구에게 물어보라고 해요'], answer: 1, difficulty: 0.15, explain: '글을 고쳐 써야 다음에 읽는 사람도 알 수 있어요.' },
            { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '말차례를 지키는 모습', cards: [{ id: 'w', text: '친구 말이 끝나면 말해요' }, { id: 'n', text: '"하윤아, 너는?" 하고 넘겨요' }, { id: 'l', text: '목소리 큰 사람이 먼저 말해요' }] }, prompt: '말차례를 지키는 모습만 골라 보세요.', target: { pick: ['w', 'n'] }, difficulty: 0.15 },
            { type: 'short', prompt: '다시 소개 글을 쓴다면 무엇을 더 넣고 싶은지 쓰세요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '고쳐 쓰고 돌아보기',
        items: [
          { type: 'table', prompt: '짝이 모르겠다고 한 곳과 고쳐 쓴 문장을 쓰세요.', columns: ['짝이 모르겠다고 한 곳', '고쳐 쓴 문장'], rows: 2 },
          { type: 'choice', prompt: '고쳐 쓴 문장이 더 좋은 것에 ○ 하세요. (짝: "꼬미가 뭐야?")', options: ['"꼬미를 소개할게요."', '"내가 아끼는 토끼 인형 꼬미를 소개할게요."'], answer: '"내가 아끼는 토끼 인형 꼬미를 소개할게요."' },
          { type: 'table', prompt: '이 단원에서 할 수 있게 된 것에 ○, 더 연습할 것에 △ 하세요.', columns: ['배운 것', '나의 표시'], cells: [['말차례를 지키며 대화해요', ''], ['바른 자세로 발표해요', ''], ['살펴보고 소개하는 글을 써요', ''], ['모르겠다는 곳을 고쳐 써요', '']] },
          { type: 'short', prompt: '이 단원에서 가장 자신 있게 된 것과 그 까닭을 쓰세요.' },
        ],
        easy: {
          note: '친구가 모르겠다고 한 곳에 낱말을 더 넣으면 고쳐 쓴 거예요.',
          items: [
            { type: 'blank', prompt: '짝이 "꼬미가 뭐야?"라고 물었어요. 고쳐 쓰세요.', text: '내가 아끼는 ______ 꼬미를 소개할게요.', answer: '(예: 토끼 인형)' },
            { type: 'choice', prompt: '친구가 모르겠다고 하면 어떻게 하나요?', options: ['글을 고쳐 써요', '말로만 설명해요'], answer: '글을 고쳐 써요' },
            { type: 'table', prompt: '할 수 있게 된 것에 ○ 하세요.', columns: ['배운 것', '나의 표시'], cells: [['말차례를 지켜요', ''], ['바르게 서서 발표해요', ''], ['소개하는 글을 써요', '']] },
            { type: 'draw', prompt: '이 단원에서 가장 즐거웠던 시간을 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '카드를 맞는 칸에 넣으면 초록 테두리가 생기고, 틀리면 되돌아와요. 활동 2 둘째 문항은 네 장으로 시작해요. 고쳐 쓰기는 쉬운 활동지의 빈칸 틀로 해요.',
        base: '짝의 질문을 보고 두 군데를 고쳐 쓰고, 스스로 점검해요.',
        challenge: '활동 2의 셋째 문항(배운 것과 다른 카드 남기기)을 풀고, 고쳐 쓴 글을 반 친구들 앞에서 바른 자세로 읽어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 친구가 물어도 글은 그대로 두고 말로만 덧붙여 설명한다 → 질문의 답을 글 안에 넣게 한다. ② 고쳐 쓰기를 처음부터 다시 쓰는 것으로 여긴다 → 모르겠다고 한 한 곳만 고친다. ③ 스스로 점검에서 모두 "잘해요"를 고른다 → 높은 눈금이 아니라 정직하게 고르는 것이 목적이고, "아직이에요"도 틀린 답이 아님을 말한다. 출구와 스스로 점검 결과를 모아 2단원 이후 대화·발표 시간에 다시 짚을 학생을 정한다.',
    }),
  ];

  PaperLessons.registerUnit({
    id: U.id, schema: 'edu-unit.v1', catalogUnit: U.catalogUnit,
    grade: 2, subject: '국어', unitTitle: U.unitTitle,
    flow: '앞의 다섯 차시는 대화에서 말차례를 다룹니다. 말차례가 무엇인지 알아보고(1), 전화·모둠·수업처럼 자리를 바꾸어 연습한 뒤(2), 바라보고 되풀이하며 듣기(3), 차례를 기다리고 넘기기(4), 스스로 돌아보기(5)로 쌓습니다. 6~10차시는 같은 듣기·말하기를 반 앞 발표로 넓혀 바른 자세와 목소리(6·7), 낱말로 준비해 문장으로 말하기(8), 겪은 일 두세 문장 발표(9), 칭찬과 고칠 점 말하기(10)로 이어집니다. 11~15차시는 말로 하던 소개를 글로 옮겨 소개할 내용 고르기(11·12), 살펴보고 차례대로 쓰기(13), 아끼는 물건 소개하고 질문받기(14), 고쳐 쓰고 단원 전체 돌아보기(15)로 마칩니다. 차시마다 교구로 먼저 가르고 고른 뒤 짝·모둠과 실제로 말하거나 써 봅니다.',
    refs: {},
    lessons,
  });
})();
