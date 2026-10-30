/* 6학년 1학기 음악 1. 연주 — 소리의 어울림을 생각하며 함께 표현하기(1~8, 21~23차시), 간단한 연주를 준비해 생활 속 음악 활동에 참여하기(9~20차시).
 * 화면 건반으로 들려주는 가락·리듬은 모두 이 단원을 위해 새로 지은 것이다. 노랫말은 싣지 않는다.
 * 실제 곡 이름은 싣지 않는다. 소리는 학생이 누를 때만 난다.
 */
(function () {
  const ILL = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const U = 'g6-음악-1학기-1';
  const head = (n, standards) => ({
    id: `g6-mus-1-01-${String(n).padStart(2, '0')}`, schema: 'edu-lesson.v1', catalog: { unit: U, lesson: n },
    grade: 6, subject: '음악', unitTitle: '1. 연주', standards, minutes: 40, formats: ['chromebook', 'projector', 'print'],
  });
  const S3 = ['[6음01-03]'];
  const S4 = ['[6음01-04]'];
  // 장면: 모티프 묶음 세 가지를 돌려 쓴다
  const SC = [
    (t) => [{ motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 110, y: 52 }, { motif: 'hills', y: 206 }, { motif: 'bird', x: 210, y: 86 }, { motif: 'tree', x: 70, y: 214 }, { motif: 'flower', x: 400, y: 224 }, { motif: 'text', x: 240, y: 150, text: t, size: 22 }],
    (t) => [{ motif: 'moon', x: 400, y: 58, s: 0.8 }, { motif: 'star', x: 90, y: 60, s: 0.6 }, { motif: 'star', x: 330, y: 40, s: 0.5 }, { motif: 'mountain', x: 120, y: 214 }, { motif: 'house', x: 380, y: 216 }, { motif: 'wave', y: 236 }, { motif: 'text', x: 240, y: 150, text: t, size: 22 }],
    (t) => [{ motif: 'cloud', x: 120, y: 56 }, { motif: 'cloud', x: 360, y: 44, s: 0.8 }, { motif: 'hills', y: 208 }, { motif: 'house', x: 110, y: 214, color: 'buttercup' }, { motif: 'leaf', x: 300, y: 216 }, { motif: 'star', x: 420, y: 120, s: 0.6 }, { motif: 'text', x: 240, y: 150, text: t, size: 22 }],
  ];
  const scene = (k, t) => ({ viewBox: [480, 270], layers: SC[k % 3](t) });
  // 교구 단계 옵션(차시마다 새 객체)
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
  const cardsLv = () => ({ easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } });
  const plainLv = (o = {}) => ({ easy: Object.assign({}, o), base: Object.assign({}, o), challenge: Object.assign({}, o) });
  // 단계 틀 — 학생 글·교사 발문·활동은 차시마다 따로 쓴다
  const intro = (teacher, student, demo) => Object.assign({ id: 'intro', title: '도입', minutes: 6, teacher, student }, demo ? { demo } : {});
  const main = (...activities) => ({ id: 'main', title: '전개', minutes: 26, activities });
  const act = (n, title, minutes, tool, teacher, task, levels, items) => ({ id: `a${n}`, title: `활동 ${n}. ${title}`, minutes, tool, teacher, task, levels, items });
  const wrap = (teacher, exitTicket) => ({ id: 'wrapup', title: '정리', minutes: 8, teacher, exitTicket });
  const lessons = [];
  const add = (n, std, o) => lessons.push(Object.assign(head(n, std), o));

  // ───────────────────────── 1차시 (도입) ─────────────────────────
  add(1, S3, {
    title: '한 가락을 둘이 이어 치며 함께 연주에 필요한 것 찾기',
    objective: '한 가락을 둘이 이어 치는 활동에서 소리를 하나로 어울리게 하려고 맞추어야 할 것(시작 신호·박·세기)을 말할 수 있다.',
    illustration: {
      prompt: ILL('two children passing a short melody between a tall xylophone and a low drum like a relay baton'),
      scene: scene(0, '함께 칠 때 무엇을 맞출까요?'),
    },
    stages: [
      intro(
        '"5학년 때 친구들과 함께 연주해 본 적이 있지요? 그때 가장 어려웠던 것이 무엇이었나요?" 박이 어긋남, 한 사람 소리만 큼, 시작이 안 맞음 같은 대답을 칠판에 모은다. 시연 단추로 한 가락을 앞 절반은 높게, 뒤 절반은 낮게 이어 들려주고 "둘이 쳤는데 한 가락처럼 들렸나요?"를 묻는다. "잘 치면 되지요"라고만 답하면 "잘 친다는 것은 내 소리만 정확한 것일까요, 서로 맞는 것일까요?"로 되묻는다.',
        '한 가락을 둘이 이어 쳐 봅시다. 하나의 가락처럼 들리려면 무엇을 맞추어야 할까요?',
        { tool: 'keyboard', options: { from: '도', to: '높은도', tempo: 84 }, sequence: [{ notes: ['도', '미', '솔'] }, { notes: ['도', '미', '솔', '솔', '미', '도'] }] },
      ),
      main(
        act(1, '합주 낱말과 뜻 잇기', 12, 'mindmap',
          '"합주는 여럿이 소리를 맞추어 함께 연주하는 것, 성부는 한 곡에서 한 사람이나 한 모둠이 맡은 가락 한 줄이에요." 성부를 \'악기 한 개\'로만 아는 학생이 있다. 목소리 둘이 다른 가락을 부르면 성부가 둘이라고 보여 준다. 3번은 소리 내어 읽고 내 경험에 비추어 고르게 한다.',
          '낱말 이름과 뜻이나 장면을 읽고 알맞게 이어요.',
          cardsLv(),
          [
            { prompt: '합주에서 쓰는 낱말과 뜻을 이어 보세요.', toolOptions: { mode: 'match', topic: '합주 낱말', slots: [{ id: 'w1', label: '성부' }, { id: 'w2', label: '합주' }, { id: 'w3', label: '균형' }], cards: ['한 곡에서 맡은 가락 한 줄', '여럿이 소리를 맞추어 함께 연주함', '여러 소리의 세기가 알맞게 어우러진 상태'] }, target: { match: { w1: '한 곡에서 맡은 가락 한 줄', w2: '여럿이 소리를 맞추어 함께 연주함', w3: '여러 소리의 세기가 알맞게 어우러진 상태' } }, difficulty: 0.1,
              hints: ['낱말을 쪼개서 생각해요. 어울려 연주하는 일, 맡은 한 줄, 알맞게 맞춘 상태 가운데 어느 뜻과 닮았나 따져 보세요.', '성부와 합주를 서로 바꾸지 않았는지 보세요. 한 줄은 사람이 맡고, 함께하는 일은 여럿이 해요.'] },
            { prompt: '합주가 어긋난 장면에 꼭 필요한 약속을 이어 보세요.', toolOptions: { mode: 'match', topic: '어긋난 장면', slots: [{ id: 'x1', label: '시작하는 때가 제각각이에요' }, { id: 'x2', label: '한 사람 소리만 크게 들려요' }, { id: 'x3', label: '점점 빨라져 끝이 서둘러요' }], cards: ['시작 신호를 정해요', '세기를 서로 맞추어 줄여요', '박을 함께 세며 쳐요'] }, target: { match: { x1: '시작 신호를 정해요', x2: '세기를 서로 맞추어 줄여요', x3: '박을 함께 세며 쳐요' } }, difficulty: 0.2 },
            { prompt: '어울림을 돕는 행동과 해치는 행동으로 나누어 보세요.', toolOptions: { mode: 'sort', topic: '함께 연주할 때', slots: ['어울림을 돕는 행동', '어울림을 해치는 행동'], cards: ['친구 소리를 들으며 친다', '신호에 맞추어 함께 시작한다', '내 소리만 크게 친다', '혼자 앞서 달려간다'] }, target: { sort: { '어울림을 돕는 행동': ['친구 소리를 들으며 친다', '신호에 맞추어 함께 시작한다'], '어울림을 해치는 행동': ['내 소리만 크게 친다', '혼자 앞서 달려간다'] } }, difficulty: 0.25 },
          ]),
        act(2, '가락을 둘로 나누어 이어 치기', 14, 'keyboard',
          '"앞 네 음은 모둠 가, 뒤 네 음은 모둠 나가 쳐요. 가가 끝나는 박에 나가 바로 들어와야 해요." 한 사람이 두 부분을 혼자 이어 쳐도 되지만 짝과 나누어 쳐 보게 한다. 4번 문항에서 박이 끊긴다면 "나는 내 음만 보았나요, 친구 소리 끝도 들었나요?"를 묻고 듣는 습관을 짚는다.',
          '가락 듣기를 누르고 들은 가락을 따라 쳐요. 나눈 가락은 짝과 이어 쳐 보아요.',
          mel(),
          [
            { prompt: '앞 절반 가락을 듣고 그대로 따라 쳐 보세요.', toolOptions: { melody: ['도', '미', '솔', '솔'], tempo: 84 }, target: { notes: ['도', '미', '솔', '솔'] }, difficulty: 0.1 },
            { prompt: '뒤 절반 가락을 듣고 그대로 따라 쳐 보세요.', toolOptions: { melody: ['미', '솔', '높은도', '높은도'], tempo: 84 }, target: { notes: ['미', '솔', '높은도', '높은도'] }, difficulty: 0.15 },
            { prompt: '두 절반을 이어 한 가락으로 쳐 보세요.', toolOptions: { melody: ['도', '미', '솔', '솔', '미', '솔', '높은도', '높은도'], tempo: 84 }, target: { notes: ['도', '미', '솔', '솔', '미', '솔', '높은도', '높은도'] }, difficulty: 0.25,
              predict: { q: '둘이 나누어 치면 한 가락으로 들리지 않을까요?', options: ['따로따로 들려요', '박이 맞으면 한 가락이에요', '잘 모르겠어요'], answer: 1 },
              conclude: '앞 사람이 끝나는 박에 뒤 사람이 바로 들어오면 두 사람이 쳐도 한 가락으로 들려요.' },
            { prompt: '짝과 앞뒤를 나누어 이어 친 뒤 해낸 것을 표시해요.', toolOptions: { melody: ['도', '미', '솔', '솔', '미', '솔', '높은도', '높은도'] }, target: { notes: ['도', '미', '솔', '솔', '미', '솔', '높은도', '높은도'], selfCheck: ['앞 사람이 끝나는 박에 바로 들어갔어요', '두 사람의 세기가 비슷했어요'] }, difficulty: 0.25 },
          ]),
      ),
      wrap(
        '"오늘 둘이 나누어 칠 때 한 가락처럼 들리게 한 힘은 무엇이었나요?" 두 학생에게 말하게 한다. "빨리 치기"나 "내 음 정확히 치기"만 말하면 "친구가 어디에서 끝나는지 듣는 일은 어디에 들어갈까요?"로 이어 간다. 출구 2번에서 \'소리가 큰 쪽이 주인공\'을 고른 학생에게는 다음 시간 첫머리에 세기를 맞춘 두 소리를 다시 들려준다.',
        [
          { type: 'tool', tool: 'keyboard', options: { from: '도', to: '높은도', melody: ['솔', '라', '솔', '미', '레', '도'], tempo: 84 }, prompt: '짝에게 이어 줄 앞 절반이에요. 듣고 따라 쳐 보세요.', target: { notes: ['솔', '라', '솔', '미', '레', '도'] }, difficulty: 0.2 },
          { type: 'choice', prompt: '둘이 함께 치는데 한 친구 소리만 너무 커요. 어울리게 하려면 어떻게 할까요?', options: ['소리가 큰 친구에게 맞추어 더 크게 친다', '세기를 서로 맞추어 줄인다', '그냥 계속 친다'], answer: 1, difficulty: 0.2, explain: '합주는 소리 하나가 두드러지는 것이 아니라 세기를 맞추어 어우러지게 하는 일이에요.' },
          { type: 'mood', prompt: '친구와 이어 치니 어땠나요?' },
        ]),
    ],
    worksheet: {
      title: '함께 칠 때 맞출 것',
      items: [
        { type: 'table', prompt: '낱말의 뜻을 내 말로 쓰세요.', columns: ['낱말', '내가 이해한 뜻'], cells: [['성부', ''], ['합주', ''], ['균형', '']] },
        { type: 'figure', prompt: '선생님이 들려주는 앞 절반 가락을 듣고 건반 아래 빈칸에 계이름을 쓰세요.', tool: 'keyboard', wide: true, options: { from: '도', to: '높은도', printNames: true, printBoxes: 4 }, figures: [{ caption: '앞 절반을 친 뒤 뒤 절반은 짝이 이어 쳐요.' }], answer: '도 미 솔 솔' },
        { type: 'choice', prompt: '둘이 이어 칠 때 가장 먼저 정해야 할 것에 ○ 하세요.', options: ['누가 더 빨리 치나', '시작하는 신호', '누구 악기가 비싼가'], answer: '시작하는 신호' },
        { type: 'short', prompt: '5학년 때 합주에서 어려웠던 일 하나와, 오늘 배운 것으로 어떻게 고칠지 쓰세요.' },
      ],
      easy: {
        note: '합주는 여럿이 소리를 맞추어 함께 연주하는 일이에요. 시작 신호, 박, 세기를 맞추어요.',
        items: [
          { type: 'choice', prompt: '여럿이 소리를 맞추어 함께 연주하는 일에 ○ 하세요.', options: ['합주', '독주'], answer: '합주' },
          { type: 'choice', prompt: '내 소리만 크게 치면 어울림이 어떻게 되나요?', options: ['더 잘 어울려요', '어울림이 깨져요'], answer: '어울림이 깨져요' },
          { type: 'table', prompt: '함께 칠 때 맞출 것 두 가지를 쓰세요.', columns: ['맞출 것', '왜 필요한가요?'], cells: [['', ''], ['', '']] },
          { type: 'short', prompt: '오늘 짝과 이어 친 느낌을 한 문장으로 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 놓으면 바로 맞고 틀림이 보이고, 가락을 듣는 동안 건반이 빛나요.',
      base: '카드와 건반을 스스로 고르고 확인해요. 계이름을 켜고 끌 수 있어요.',
      challenge: '계이름 없이 검은건반까지 있는 건반에서 귀로 찾고, 카드는 순서가 섞여 나와요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 합주를 잘하려면 자기 소리가 잘 들려야 한다고 여긴다 → 두 소리가 같은 세기로 어우러진 때와 한쪽만 큰 때를 나란히 들려준다. ② 성부를 악기 한 개로 안다 → 목소리 둘이 다른 가락을 부르면 성부도 둘임을 보여 준다. ③ 나누어 칠 때 자기 음만 본다 → 친구 소리의 끝을 듣고 들어가게 한다. 소리는 학생이 누를 때만 난다.',
  });

  // ───────────────────────── 2차시 (연습) ─────────────────────────
  add(2, S3, {
    title: '높은 성부와 낮은 성부를 나누어 따라 치기',
    objective: '같은 곡의 높은 성부와 낮은 성부를 듣고 건반의 높은 쪽과 낮은 쪽에서 각각 따라 칠 수 있다.',
    illustration: {
      prompt: ILL('a tall bird and a low sleepy bear singing from two ends of a long paper piano keyboard'),
      scene: scene(1, '높은 성부, 낮은 성부'),
    },
    stages: [
      intro(
        '"새가 노래하는 소리와 곰이 웅얼거리는 소리 가운데 어느 쪽이 높을까요?" 학생이 직접 목소리로 흉내 내게 한다. 시연 단추로 낮은 가락과 높은 가락을 차례로 들려주고 "같은 곡에서 높은 줄과 낮은 줄이 함께 나오면 어떻게 들릴까요?"를 묻는다. 소리가 큰 쪽이 높은 성부라고 답하면 "높고 낮음은 크기가 아니라 음의 위치예요"라고 바로잡는다.',
        '높은 소리와 낮은 소리를 따로 쳐 봅시다. 두 줄이 함께 나오는 곡에서 각 줄은 어떤 건반을 칠까요?',
        { tool: 'keyboard', options: { from: '낮은솔', to: '높은도', tempo: 80 }, sequence: [{ notes: ['낮은솔', '도'] }, { notes: ['낮은솔', '도', '솔', '높은도'] }] },
      ),
      main(
        act(1, '낮은 가락과 높은 가락을 따로 따라 치기', 14, 'keyboard',
          '"낮은 성부는 건반 왼쪽, 높은 성부는 오른쪽에서 쳐요." 건반 위치를 먼저 손으로 짚게 한다. 3번은 한 줄을 번갈아 치는 문항이라 손이 왼쪽과 오른쪽을 오가야 한다. 낮은 줄을 치다 높은 줄 건반으로 건너뛰어 놓치는 학생에게 "지금 치는 줄은 낮은 줄인가요, 높은 줄인가요?"를 소리 내어 말하게 한다.',
          '가락 듣기를 누르고 들은 가락을 따라 쳐요. 낮은 줄은 건반 왼쪽, 높은 줄은 오른쪽이에요.',
          mel('낮은솔', '높은도'),
          [
            { prompt: '낮은 성부 가락이에요. 듣고 건반 왼쪽에서 따라 쳐 보세요.', toolOptions: { melody: ['낮은솔', '도', '도', '낮은솔', '도', '도'], tempo: 76 }, target: { notes: ['낮은솔', '도', '도', '낮은솔', '도', '도'] }, difficulty: 0.15 },
            { prompt: '높은 성부 가락이에요. 듣고 건반 오른쪽에서 따라 쳐 보세요.', toolOptions: { melody: ['솔', '높은도', '솔', '높은도', '미'], tempo: 76 }, target: { notes: ['솔', '높은도', '솔', '높은도', '미'] }, difficulty: 0.2 },
            { prompt: '낮은 성부 두 음과 높은 성부 두 음이 번갈아 나와요. 따라 쳐 보세요.', toolOptions: { melody: ['낮은솔', '도', '솔', '높은도'], tempo: 76 }, target: { notes: ['낮은솔', '도', '솔', '높은도'] }, difficulty: 0.3,
              predict: { q: '높은 성부와 낮은 성부는 같은 건반 자리에서 칠까요?', options: ['같은 자리에서 쳐요', '건반 오른쪽과 왼쪽으로 달라요', '잘 모르겠어요'], answer: 1 },
              conclude: '낮은 성부는 건반 왼쪽, 높은 성부는 오른쪽에서 쳤어요. 성부마다 쓰는 음의 자리가 달라요.' },
          ]),
        act(2, '어느 성부의 말인지 가르기', 12, 'mindmap',
          '"높은 성부는 가볍고 또렷하게 노래하는 줄, 낮은 성부는 묵직하게 받쳐 주는 줄이 많아요." 이어서 학생이 \'큰 소리는 높은 성부\'라고 섞어 말하면 "크기와 높이는 달라요. 속삭이는 높은 소리도 있어요"를 보여 준다. 마지막 문항은 짝과 이유를 한 문장으로 말하게 한다.',
          '카드의 설명이 높은 성부인지 낮은 성부인지 나누어 놓아요.',
          cardsLv(),
          [
            { prompt: '설명이 높은 성부인지 낮은 성부인지 나누어 놓아 보세요.', toolOptions: { mode: 'sort', topic: '성부 나누기', slots: ['높은 성부', '낮은 성부'], cards: ['음이 높아서 새 소리처럼 들려요', '음이 낮아서 바닥을 받치는 느낌이에요', '건반의 오른쪽에서 쳐요', '건반의 왼쪽에서 쳐요'] }, target: { sort: { '높은 성부': ['음이 높아서 새 소리처럼 들려요', '건반의 오른쪽에서 쳐요'], '낮은 성부': ['음이 낮아서 바닥을 받치는 느낌이에요', '건반의 왼쪽에서 쳐요'] } }, difficulty: 0.2 },
            { prompt: '두 성부가 함께 있을 때의 소리 특징을 이어 보세요.', toolOptions: { mode: 'match', topic: '두 성부의 일', slots: [{ id: 'p1', label: '높은 성부' }, { id: 'p2', label: '낮은 성부' }], cards: ['노래하는 가락을 이끌어요', '아래에서 든든히 받쳐 줘요'] }, target: { match: { p1: '노래하는 가락을 이끌어요', p2: '아래에서 든든히 받쳐 줘요' } }, difficulty: 0.25 },
            { prompt: '성부에 대해 맞게 말한 친구의 말을 모두 골라 보세요.', toolOptions: { mode: 'pick', topic: '성부 이야기', basket: '맞는 말', cards: ['소리가 크면 높은 성부예요', '높은 성부와 낮은 성부는 음의 자리가 달라요', '낮은 성부도 가락이 될 수 있어요'] }, target: { pick: ['높은 성부와 낮은 성부는 음의 자리가 달라요', '낮은 성부도 가락이 될 수 있어요'] }, difficulty: 0.3 },
          ]),
      ),
      wrap(
        '"높은 성부와 낮은 성부가 함께 있으면 무엇이 좋아질까요?" 두 학생에게 한 문장씩 말하게 한다. "그냥 더 많이 들려서요"라는 답에는 "두 줄이 하는 일이 어떻게 다를까요?"로 되묻는다. 출구 2번의 \'소리가 큰 쪽\'을 고른 학생은 크기와 높이를 구별하도록 다음 시간 도입에서 작고 높은 소리와 크고 낮은 소리를 다시 들려준다.',
        [
          { type: 'tool', tool: 'keyboard', options: { from: '낮은솔', to: '높은도', melody: ['낮은솔', '낮은솔', '도', '낮은솔'], tempo: 76 }, prompt: '낮은 성부 가락을 듣고 따라 쳐 보세요.', target: { notes: ['낮은솔', '낮은솔', '도', '낮은솔'] }, difficulty: 0.25 },
          { type: 'choice', prompt: '높은 성부는 어떤 소리인가요?', options: ['소리가 큰 줄', '음이 높은 줄', '악기가 비싼 줄'], answer: 1, difficulty: 0.15, explain: '높은 성부는 음의 높이가 높은 줄이에요. 소리의 크기와는 달라요.' },
          { type: 'mood', prompt: '두 성부를 나누어 쳐 보니 어땠나요?' },
        ]),
    ],
    worksheet: {
      title: '높은 성부, 낮은 성부',
      items: [
        { type: 'figure', prompt: '낮은 성부를 듣고 건반 아래 빈칸에 계이름을 쓰세요.', tool: 'keyboard', wide: true, options: { from: '낮은솔', to: '높은도', printNames: true, printBoxes: 6 }, figures: [{ caption: '낮은 성부는 건반의 어느 쪽에서 쳤나요? ( 왼쪽 · 오른쪽 )' }], answer: '낮은솔 도 도 낮은솔 도 도 — 왼쪽' },
        { type: 'table', prompt: '두 성부의 특징을 쓰세요.', columns: ['성부', '건반 자리', '소리 느낌'], cells: [['높은 성부', '', ''], ['낮은 성부', '', '']] },
        { type: 'choice', prompt: '높은 성부에 대한 설명에 ○ 하세요.', options: ['음이 높은 줄이에요', '소리가 크면 높은 성부예요', '건반의 왼쪽에서만 쳐요'], answer: '음이 높은 줄이에요' },
        { type: 'short', prompt: '높은 성부와 낮은 성부를 한 사람이 번갈아 치면 어렵습니다. 둘이 나누어 칠 때 좋은 점을 쓰세요.' },
      ],
      easy: {
        note: '높은 성부는 건반의 오른쪽, 낮은 성부는 왼쪽에서 쳐요.',
        items: [
          { type: 'choice', prompt: '건반의 왼쪽에서 치는 성부에 ○ 하세요.', options: ['높은 성부', '낮은 성부'], answer: '낮은 성부' },
          { type: 'choice', prompt: '소리가 크다는 뜻에 ○ 하세요.', options: ['음이 높다', '세기가 세다'], answer: '세기가 세다' },
          { type: 'table', prompt: '성부 이름과 건반 쪽을 쓰세요.', columns: ['성부', '건반 쪽'], cells: [['높은 성부', ''], ['낮은 성부', '']] },
          { type: 'short', prompt: '오늘 친 가락 가운데 가장 마음에 든 줄은 무엇인지 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '건반이 가락을 듣는 동안 빛나고, 카드를 놓으면 바로 맞고 틀림이 보여요.',
      base: '음 범위를 보고 스스로 높은 줄과 낮은 줄을 찾아 쳐요.',
      challenge: '계이름을 가리고 검은건반이 섞인 건반에서 귀로만 찾아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 소리가 큰 줄을 높은 성부라고 한다 → 작고 높은 소리와 크고 낮은 소리를 번갈아 들려준다. ② 낮은 성부를 반주 소리로만 안다 → 낮은 줄도 노래하듯 가락을 가질 수 있음을 직접 쳐서 보인다. ③ 낮은 건반 쪽 가락을 오른쪽에서 찾는다 → 왼쪽 첫 건반에서 한 칸씩 올라가며 계이름을 말하게 한다.',
  });

  // ───────────────────────── 3차시 (확장) ─────────────────────────
  add(3, S3, {
    title: '되풀이하는 반주 성부를 짓고 가락 밑에 깔기',
    objective: '짧은 가락을 되풀이하는 반주 성부를 두 음 또는 세 음으로 지어 칠 수 있다.',
    illustration: {
      prompt: ILL('a small paper wave repeating under a flying kite, showing a looping accompaniment beneath a melody'),
      scene: scene(2, '되풀이하는 반주'),
    },
    stages: [
      intro(
        '"노래를 부를 때 아래에서 같은 소리가 계속 되풀이되는 것을 들어 본 적이 있나요?" 시연 단추로 도–솔을 되풀이하는 반주를 들려주고 "이 반주가 있으니 노래가 어떻게 들리나요?"를 묻는다. 반주는 내 가락을 가리는 것이라고 여기는 학생이 있으면 "반주는 주인공이 아니라 받쳐 주는 사람이에요. 같은 소리를 되풀이하면 가락이 더 또렷해져요"라고 말해 준다.',
        '짧은 소리를 되풀이하는 반주를 지어 봅시다. 되풀이되는 규칙은 어떻게 찾을까요?',
        { tool: 'keyboard', options: { from: '도', to: '높은도', tempo: 88 }, sequence: [{ notes: ['도', '솔'] }, { notes: ['도', '솔', '도', '솔', '도', '솔'] }] },
      ),
      main(
        act(1, '되풀이 반주 무늬의 빈칸 채우기', 12, 'pattern',
          '"반주는 같은 묶음을 되풀이해요. 한 묶음이 몇 개인지 먼저 세어 보세요." 묶음을 소리 내어 읽으며 손뼉이나 책상을 두드려 보게 한다. 규칙에서 벗어난 하나를 찾는 3번은 \'다른 조각\'을 눌러 찾는 것이니 묶음 끝부터 비교하게 한다. 빈칸을 앞 조각과 똑같이만 채우는 학생에게 "한 묶음이 끝나고 다시 시작하는 곳은 어디예요?"를 묻는다.',
          '반주 조각의 되풀이 규칙을 읽고 빈칸에 알맞은 조각을 넣어요.',
          { easy: { perRow: 6 }, base: { perRow: 8 }, challenge: { perRow: 8, revealAfterCheck: true } },
          [
            { prompt: '도–솔이 한 묶음으로 되풀이돼요. 빈칸을 채워 보세요.', toolOptions: { seq: ['도', '솔', '도', '솔', '도', null, '도', null], palette: ['도', '솔', '미'], perRow: 8 }, target: { fill: ['솔', '솔'] }, difficulty: 0.1 },
            { prompt: '도–미–솔이 한 묶음으로 되풀이돼요. 빈칸을 채워 보세요.', toolOptions: { seq: ['도', '미', '솔', '도', null, '솔', '도', '미', null], palette: ['도', '미', '솔'] }, target: { fill: ['미', '솔'] }, difficulty: 0.15 },
            { prompt: '되풀이 규칙에서 벗어난 조각을 하나 찾아 눌러 보세요.', toolOptions: { mode: 'odd', seq: ['솔', '도', '솔', '도', '솔', '도', '도', '도', '솔', '도'], perRow: 5 }, target: { odd: 6 }, difficulty: 0.25 },
          ]),
        act(2, '도와 솔로 되풀이 반주 짓기', 14, 'keyboard',
          '"반주 성부는 내 가락이 아닙니다. 두 음만으로도 충분해요." 도와 솔 두 음으로 시작해 세 음으로 넓힌다. 1번에서 도와 솔이 한 묶음으로 돌아가는지 학생이 소리 내어 말하게 한다. 4번은 내 반주를 짝의 가락 밑에 깔아 보는 점검이다. "짝의 가락이 들리지 않았다면 반주가 너무 크거나 복잡하지 않았는지" 되짚는다.',
          '도·솔이나 도·미·솔만 써서 짧은 반주를 지어 쳐 보아요.',
          mel(),
          [
            { prompt: '도와 솔 두 음만 써서 네 음 반주를 지어 보세요.', target: { compose: { length: 4, only: ['도', '솔'] } }, difficulty: 0.1 },
            { prompt: '도·미·솔 세 음만 써서 도로 시작해 도로 끝나는 여섯 음 반주를 지어 보세요.', target: { compose: { length: 6, startOn: '도', endOn: '도', only: ['도', '미', '솔'] } }, difficulty: 0.2 },
            { prompt: '도로 시작하고 솔로 끝나는 다섯 음 반주를 지어 보세요. 한 묶음이 되풀이될 수 있게 해요.', target: { compose: { length: 5, startOn: '도', endOn: '솔' } }, difficulty: 0.25 },
            { prompt: '내가 지은 반주를 두 번 되풀이해 치고, 짝의 가락 밑에서 쳐 본 뒤 해낸 것을 표시해요.', target: { compose: { length: 4 }, selfCheck: ['반주를 두 번 이상 되풀이해 쳤어요', '짝의 가락이 들리도록 작게 쳤어요'] }, difficulty: 0.2 },
          ]),
      ),
      wrap(
        '"반주 성부의 일은 무엇이었나요?" 두 학생에게 말하게 한다. "가락을 크게 만들어 주는 일"이라고 하면 "크게 만든다기보다 가락이 놓일 바닥을 깔아 주는 일에 가깝지요"라고 다듬는다. 출구 2번에서 \'모든 음이 달라야\'를 고른 학생에게는 같은 묶음이 되풀이되는 무늬를 다시 보여 준다.',
        [
          { type: 'tool', tool: 'pattern', options: { seq: ['레', '솔', '레', '솔', null, '솔', '레', null], palette: ['레', '솔', '도'], perRow: 8 }, prompt: '레–솔 반주 무늬예요. 빈칸을 채우세요.', target: { fill: ['레', '솔'] }, difficulty: 0.2 },
          { type: 'choice', prompt: '되풀이하는 반주가 잘 지어진 것은 어느 것인가요?', options: ['한 묶음이 규칙적으로 되풀이돼요', '묶음마다 완전히 다른 음이에요', '가락보다 훨씬 크게 쳐요'], answer: 0, difficulty: 0.2, explain: '반주는 같은 묶음을 되풀이해 가락 밑을 받쳐요. 너무 커서도 안 돼요.' },
          { type: 'mood', prompt: '반주를 지어 보니 어땠나요?' },
        ]),
    ],
    worksheet: {
      title: '되풀이하는 반주',
      items: [
        { type: 'figure', prompt: '되풀이 규칙을 찾아 빈칸에 알맞은 계이름을 쓰세요.', tool: 'pattern', wide: true, figures: [{ options: { seq: ['도', '솔', '도', '솔', null, '솔', '도', null] }, caption: '' }], answer: '도, 솔' },
        { type: 'table', prompt: '내가 지은 반주를 계이름으로 쓰세요.', columns: ['쓰는 음', '한 묶음', '몇 번 되풀이?'], cells: [['', '', ''], ['', '', '']] },
        { type: 'choice', prompt: '반주를 칠 때 가장 알맞은 세기에 ○ 하세요.', options: ['가락보다 작게', '가락보다 훨씬 크게'], answer: '가락보다 작게' },
        { type: 'short', prompt: '반주 성부가 없는 노래와 있는 노래는 어떻게 다르게 들릴까요? 상상해 쓰세요.' },
      ],
      easy: {
        note: '반주는 같은 묶음을 되풀이하며 가락 밑을 받쳐 줘요.',
        items: [
          { type: 'choice', prompt: '같은 묶음이 되풀이되는 것에 ○ 하세요.', options: ['도 솔 도 솔', '도 미 레 솔'], answer: '도 솔 도 솔' },
          { type: 'choice', prompt: '반주의 일에 ○ 하세요.', options: ['가락 밑을 받쳐 줘요', '가락을 가려요'], answer: '가락 밑을 받쳐 줘요' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '반주는 가락보다 ___게 쳐요.', answer: '작' },
          { type: 'short', prompt: '내가 지은 반주를 계이름으로 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '두 음 묶음으로 시작하고, 무늬 판이 규칙 위치를 비춰 줘요.',
      base: '세 음 묶음을 스스로 되풀이해 지어요.',
      challenge: '맞힐 때까지 규칙 설명이 가려지고, 계이름 없이 건반에서 반주를 지어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 반주를 가락의 복사본으로 만든다 → 가락과 다른 높이의 음 몇 개를 되풀이하는 일임을 보인다. ② 반주를 너무 세게 쳐 가락이 묻힌다 → 짝이 가락을 부를 때 반주는 속삭이듯 치게 한다. ③ 한 묶음의 경계를 못 찾는다 → 묶음마다 손가락을 한 번 접으며 센다.',
  });

  // ───────────────────────── 4차시 (확장) ─────────────────────────
  add(4, S3, {
    title: '4박 두 마디 리듬을 나누어 놓고 함께 박 맞추기',
    objective: '4박 두 마디를 서로 다른 리듬 블록으로 채워, 두 사람이 나누어 쳐도 박이 맞는 리듬 성부를 짜 낼 수 있다.',
    illustration: {
      prompt: ILL('two paper rhythm bricks of different lengths stacking neatly into the same four-beat wall'),
      scene: scene(0, '다른 리듬, 같은 박'),
    },
    stages: [
      intro(
        '"한 모둠은 짧은 소리를 촘촘히, 다른 모둠은 긴 소리를 천천히 치면 박이 맞을까요?" 손뼉으로 한쪽은 네 번, 한쪽은 두 번 치게 하고 첫 박에서 만나는지 확인한다. 길이가 다르면 박도 다르다고 생각하는 학생에게 "두 줄 모두 한 마디의 길이는 같아요. 안을 채우는 소리만 달라요"라고 말해 준다.',
        '길이가 다른 리듬 블록으로도 한 마디를 같은 박으로 채울 수 있을까요?',
        { tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 2 }, sequence: [{ rhythm: ['q', 'q', 'q', 'q'] }, { rhythm: ['q', 'q', 'q', 'q', 'h', 'h'] }] },
      ),
      main(
        act(1, '한 마디를 박 수에 맞게 채우기', 14, 'keyboard',
          '"한 마디는 4박이에요. 2분음표는 2박, 4분음표는 1박, 8분음표는 반 박이에요." 소리 내어 박을 세며 블록을 놓게 한다. 박 수가 넘치거나 모자라면 마디 띠가 알려 주므로 학생이 스스로 고치게 둔다. 2번에서 쉼표도 박을 차지한다는 것을 놓치는 학생에게 "쉬는 동안에도 박은 흘러가요"를 말해 준다.',
          '마디마다 4박이 되도록 리듬 블록을 놓아요. 마디 띠의 박 수를 보고 고쳐요.',
          rhy(4, 2),
          [
            { prompt: '4분음표만 써서 두 마디를 4박씩 채워 보세요.', toolOptions: { mode: 'rhythm', meter: 4, measures: 2 }, target: { beats: true, use: ['q'] }, difficulty: 0.1 },
            { prompt: '2분음표를 꼭 넣어 두 마디를 4박씩 채워 보세요.', toolOptions: { mode: 'rhythm', meter: 4, measures: 2 }, target: { beats: true, use: ['h'] }, difficulty: 0.15 },
            { prompt: '쉼표를 하나 넣고 두 마디를 4박씩 채워 보세요.', toolOptions: { mode: 'rhythm', meter: 4, measures: 2 }, target: { beats: true, rests: 1 }, difficulty: 0.25 },
            { prompt: '8분음표를 꼭 넣어 두 마디를 4박씩 채워 보세요.', toolOptions: { mode: 'rhythm', meter: 4, measures: 2 }, target: { beats: true, use: ['e'] }, difficulty: 0.3 },
          ]),
        act(2, '합주 시작 전 약속을 차례로 세우기', 12, 'story',
          '"합주는 연주 전의 준비도 연주의 일부예요." 카드를 읽고 어떤 일이 먼저 와야 하는지 이유를 말하며 놓게 한다. 시작 신호를 보지 않고 바로 연주를 시작하는 순서를 놓는 학생에게 "신호가 없다면 모두 같은 박에 들어갈 수 있을까요?"를 묻는다. 두 번째 문항은 합주를 마치는 순서로, 마지막 소리가 사라질 때까지 기다리는 일이 들어 있다.',
          '카드를 읽고 일이 일어나는 순서대로 놓아요.',
          cardsLv(),
          [
            { prompt: '합주를 시작하기 전에 할 일을 순서대로 놓아 보세요.', toolOptions: { mode: 'order', topic: '시작 전 약속', slots: ['첫째', '둘째', '셋째', '넷째'], cards: ['자리에 앉아 악기를 준비해요', '내 소리를 가볍게 가다듬어요', '신호하는 친구를 바라봐요', '신호에 맞추어 함께 시작해요'] }, target: { order: ['자리에 앉아 악기를 준비해요', '내 소리를 가볍게 가다듬어요', '신호하는 친구를 바라봐요', '신호에 맞추어 함께 시작해요'] }, difficulty: 0.2 },
            { prompt: '합주를 마칠 때 할 일을 순서대로 놓아 보세요.', toolOptions: { mode: 'order', topic: '마칠 때 약속', slots: ['첫째', '둘째', '셋째'], cards: ['마지막 박에서 함께 소리를 멈춰요', '소리가 사라질 때까지 조용히 기다려요', '악기를 정리하고 인사해요'] }, target: { order: ['마지막 박에서 함께 소리를 멈춰요', '소리가 사라질 때까지 조용히 기다려요', '악기를 정리하고 인사해요'] }, difficulty: 0.25 },
            { prompt: '어긋난 장면의 원인을 이어 보세요.', toolOptions: { mode: 'match', topic: '왜 어긋났나', slots: [{ id: 'm1', label: '한 마디가 5박이 되었어요' }, { id: 'm2', label: '둘째 줄이 한 박 늦게 들어갔어요' }], cards: ['블록의 박 수를 잘못 더했어요', '신호를 못 보고 들어갔어요'] }, target: { match: { m1: '블록의 박 수를 잘못 더했어요', m2: '신호를 못 보고 들어갔어요' } }, difficulty: 0.3 },
          ]),
      ),
      wrap(
        '"블록 길이가 달라도 두 줄의 박이 맞는 까닭은 무엇이었나요?" 두 학생에게 말하게 한다. 한 마디의 박 수가 같기 때문이라는 말이 나와야 한다. 출구 2번에서 8분음표 둘이 1박이라는 것을 헷갈린 학생에게는 8분음표 둘을 4분음표 하나와 나란히 놓고 손뼉으로 세어 본다.',
        [
          { type: 'tool', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 2, blocks: ['q', 'e', 'h', 'qr', 'dh'] }, prompt: '점2분음표를 꼭 넣어 두 마디를 4박씩 채워 보세요.', target: { beats: true, use: ['dh'] }, difficulty: 0.3 },
          { type: 'choice', prompt: '8분음표 두 개는 모두 몇 박일까요?', options: ['반 박', '1박', '2박'], answer: 1, difficulty: 0.2, explain: '8분음표는 반 박이라서 두 개를 합치면 1박이에요.' },
          { type: 'mood', prompt: '리듬을 채워 보니 어땠나요?' },
        ]),
    ],
    worksheet: {
      title: '리듬 박 맞추기',
      items: [
        { type: 'figure', prompt: '마디마다 몇 박인지 세어 쓰세요.', tool: 'keyboard', wide: true, options: { mode: 'rhythm', meter: 4, measures: 2 }, figures: [{ state: { rhythm: ['h', 'q', 'q', 'q', 'q', 'qr', 'q'] }, caption: '첫째 마디 ___박, 둘째 마디 ___박' }], answer: '첫째 마디 4박, 둘째 마디 4박' },
        { type: 'table', prompt: '음표와 쉼표가 차지하는 박 수를 쓰세요.', columns: ['이름', '박 수'], cells: [['4분음표', ''], ['2분음표', ''], ['8분음표', ''], ['4분쉼표', '']] },
        { type: 'choice', prompt: '4박 한 마디에 맞는 것에 ○ 하세요.', options: ['2분음표 + 4분음표 + 4분쉼표', '2분음표 + 2분음표 + 4분음표'], answer: '2분음표 + 4분음표 + 4분쉼표' },
        { type: 'short', prompt: '합주를 시작하기 전에 지켜야 할 약속 두 가지를 쓰세요.' },
      ],
      easy: {
        note: '4분음표는 1박, 2분음표는 2박, 8분음표는 반 박, 4분쉼표는 쉬는 1박이에요.',
        items: [
          { type: 'choice', prompt: '2박 동안 이어지는 음표에 ○ 하세요.', options: ['4분음표', '2분음표'], answer: '2분음표' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '4분음표 둘과 2분음표 하나를 합치면 ___박이에요.', answer: '4' },
          { type: 'table', prompt: '한 마디를 채우는 방법을 하나 쓰세요.', columns: ['블록', '박 수 합'], cells: [['', '4박']] },
          { type: 'short', prompt: '쉼표도 박을 차지하는 까닭을 한 문장으로 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '마디마다 지금 박 수가 보이고, 쉬운 블록만 주어져요.',
      base: '박 수를 스스로 세어 채우고 점2분음표도 써요.',
      challenge: '8분쉼표와 2분쉼표까지 있는 블록으로 박을 맞춰요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 쉼표를 쉬는 동안 박이 멈춘다고 여긴다 → 쉼표에서도 발로 박을 구르게 한다. ② 8분음표 둘의 박 수를 2박으로 센다 → 한 박 안에 8분음표가 둘 들어간다고 보여 준다. ③ 박이 맞기만 하면 같은 리듬이라고 여긴다 → 길이가 다른 블록으로도 한 마디의 박 수는 같음을 보여 준다.',
  });

  // ───────────────────────── 5차시 (핵심) ─────────────────────────
  add(5, S3, {
    title: '다시 듣고 어울림이 좋았던 대목을 골라 까닭 대기',
    objective: '함께한 연주를 다시 들으며 어울림이 좋았던 대목 하나를 골라, 박·세기·시작처럼 들은 근거를 대어 말할 수 있다.',
    illustration: {
      prompt: ILL('children wearing paper headphones circling a glowing section on a long unrolled music scroll'),
      scene: scene(1, '어디가 어울렸을까요?'),
    },
    stages: [
      intro(
        '"우리 모둠 연주를 다시 들으면 모든 대목이 똑같이 좋았을까요?" 지난 시간 연주를 떠올리게 하고, 어울림이 좋았던 곳 한 군데를 손가락으로 짚어 보게 한다. "그냥 좋았어요"라고만 하면 "무엇이 좋았나요? 박이 맞았나요, 소리 크기가 알맞았나요, 시작이 같았나요?"로 되묻는다. 오늘은 느낌에 근거를 붙이는 연습이다.',
        '연주를 다시 들으며 어울림이 좋았던 대목을 하나 골라요. 왜 좋았는지 까닭을 어떻게 말할까요?',
        { tool: 'keyboard', options: { from: '도', to: '높은도', tempo: 90 }, sequence: [{ notes: ['미', '솔', '라'] }, { notes: ['미', '솔', '라', '솔', '미'] }] },
      ),
      main(
        act(1, '들은 근거와 말을 이어 보기', 12, 'mindmap',
          '"좋았다는 말에 \'무엇을 들었는지\'를 붙이면 근거가 돼요." 카드를 읽고 근거가 되는 말을 고르게 한다. \'그냥 좋았어요\', \'내 소리가 컸어요\'처럼 근거가 아닌 말을 고르는 학생에게 "그 말을 듣고 다른 모둠이 같은 대목을 찾아낼 수 있을까요?"를 묻는다. 3번은 근거와 제안을 나누는 일이다.',
          '카드를 읽고 어울림의 근거가 되는 말을 이어요.',
          cardsLv(),
          [
            { prompt: '들은 장면과 어울림의 근거를 이어 보세요.', toolOptions: { mode: 'match', topic: '들은 근거', slots: [{ id: 'g1', label: '두 모둠이 같은 박에 시작했어요' }, { id: 'g2', label: '낮은 소리와 높은 소리가 비슷한 세기였어요' }, { id: 'g3', label: '마지막 소리를 함께 끊었어요' }], cards: ['시작이 맞았다', '세기의 균형이 좋았다', '끝맺음이 맞았다'] }, target: { match: { g1: '시작이 맞았다', g2: '세기의 균형이 좋았다', g3: '끝맺음이 맞았다' } }, difficulty: 0.15 },
            { prompt: '어울림의 근거가 되는 말만 골라 보세요.', toolOptions: { mode: 'pick', topic: '모둠 연주 평가', basket: '근거가 있는 말', cards: ['첫 마디에서 모두 같은 박을 쳤어요', '그냥 재미있었어요', '둘째 줄이 들어올 때 세기가 같았어요', '내 소리가 제일 컸어요'] }, target: { pick: ['첫 마디에서 모두 같은 박을 쳤어요', '둘째 줄이 들어올 때 세기가 같았어요'] }, difficulty: 0.2 },
            { prompt: '들은 말을 어울린 점과 아쉬운 점으로 나누어 보세요.', toolOptions: { mode: 'sort', topic: '연주 돌아보기', slots: ['어울린 점', '아쉬운 점'], cards: ['시작 신호를 보고 함께 들어갔어요', '낮은 줄이 끝까지 같은 박을 지켰어요', '셋째 마디에서 소리가 너무 커졌어요', '쉼표에서 한 사람이 먼저 쳤어요'] }, target: { sort: { '어울린 점': ['시작 신호를 보고 함께 들어갔어요', '낮은 줄이 끝까지 같은 박을 지켰어요'], '아쉬운 점': ['셋째 마디에서 소리가 너무 커졌어요', '쉼표에서 한 사람이 먼저 쳤어요'] } }, difficulty: 0.3 },
          ]),
        act(2, '골라 둔 대목을 다시 듣고 쳐 보기', 14, 'keyboard',
          '"마음에 든 대목 하나를 다시 쳐 보면 왜 좋은지 더 잘 보여요." 가락 듣기로 먼저 들은 뒤 따라 치게 하고, 마지막 문항에서 내가 고른 대목을 직접 다시 쳐 점검한다. 두 소리가 어울린다는 느낌을 \'소리가 같아서\'로만 말하는 학생에게 "서로 다른 소리도 어울릴 수 있어요. 박과 세기가 맞았는지 보세요"라고 짚는다.',
          '가락 듣기를 누르고 따라 쳐요. 마지막에는 내가 고른 대목을 다시 쳐서 점검해요.',
          mel(),
          [
            { prompt: '어울렸던 앞 대목이에요. 듣고 그대로 따라 쳐 보세요.', toolOptions: { melody: ['미', '솔', '라', '솔', '미'], tempo: 90 }, target: { notes: ['미', '솔', '라', '솔', '미'] }, difficulty: 0.15 },
            { prompt: '뒤 대목이에요. 끝맺는 음까지 듣고 따라 쳐 보세요.', toolOptions: { melody: ['솔', '라', '솔', '미', '레', '도'], tempo: 90 }, target: { notes: ['솔', '라', '솔', '미', '레', '도'] }, difficulty: 0.2,
              predict: { q: '끝맺는 소리를 함께 끊으면 어떤 느낌일까요?', options: ['깔끔하게 끝나요', '더 흐려져요', '잘 모르겠어요'], answer: 0 },
              conclude: '마지막 박에서 소리를 함께 끊으니 끝맺음이 깔끔하게 맞았어요.' },
            { prompt: '내가 고른 대목을 네 음 이상 다시 치고 해낸 것을 표시해요.', target: { selfCheck: ['고른 대목을 두 번 쳐 보았어요', '어울림의 근거를 한 가지 말할 수 있어요'], minNotes: 4 }, difficulty: 0.15 },
          ]),
      ),
      wrap(
        '"내가 고른 대목이 어울린 까닭을 한 문장으로 말해 볼까요?" 두 학생에게 \'~해서 어울렸다\' 꼴로 말하게 한다. "좋아서요"만 말한 학생에게는 박·세기·시작 가운데 하나를 골라 다시 말하게 한다. 출구 2번에서 \'소리 크기가 같아야\'만 고른 학생에게는 서로 다른 악기도 어울린다는 것을 다음 시간에 보여 준다.',
        [
          { type: 'tool', tool: 'keyboard', options: { from: '도', to: '높은도', melody: ['라', '솔', '미', '레', '도'], tempo: 90 }, prompt: '다른 모둠 대목이에요. 듣고 따라 쳐 보세요.', target: { notes: ['라', '솔', '미', '레', '도'] }, difficulty: 0.25 },
          { type: 'choice', prompt: '어울림이 좋았다고 말할 때 가장 좋은 근거는 무엇인가요?', options: ['그냥 재미있었어요', '첫 박에 모두 같이 들어갔어요', '우리 모둠이니까요'], answer: 1, difficulty: 0.2, explain: '무엇을 들었는지 구체적으로 말해야 근거가 돼요.' },
          { type: 'mood', prompt: '다시 들으며 근거를 찾아보니 어땠나요?' },
        ]),
    ],
    worksheet: {
      title: '어울림의 근거 찾기',
      items: [
        { type: 'table', prompt: '우리 모둠 연주에서 어울림이 좋았던 대목과 근거를 쓰세요.', columns: ['대목', '근거(박·세기·시작)'], cells: [['', ''], ['', '']] },
        { type: 'figure', prompt: '선생님이 들려주는 대목을 듣고 계이름을 쓰세요.', tool: 'keyboard', wide: true, options: { from: '도', to: '높은도', printNames: true, printBoxes: 5 }, figures: [{ caption: '이 대목에서 끝맺음이 맞았나요? ( 맞았다 · 아니다 )' }], answer: '미 솔 라 솔 미 — 맞았다' },
        { type: 'choice', prompt: '근거가 있는 말에 ○ 하세요.', options: ['그냥 좋았어요', '시작 신호에 모두 함께 들어갔어요'], answer: '시작 신호에 모두 함께 들어갔어요' },
        { type: 'short', prompt: '친구의 연주를 듣고 어울렸다고 느낀 대목과 까닭을 써 보세요.' },
      ],
      easy: {
        note: '어울림의 근거는 박, 세기, 시작과 끝처럼 귀로 들은 것이에요.',
        items: [
          { type: 'choice', prompt: '근거가 되는 말에 ○ 하세요.', options: ['박이 맞았어요', '그냥 좋아요'], answer: '박이 맞았어요' },
          { type: 'choice', prompt: '두 소리가 어울리려면 필요한 것에 ○ 하세요.', options: ['같은 박', '서로 다른 박'], answer: '같은 박' },
          { type: 'table', prompt: '어울린 대목을 쓰세요.', columns: ['대목', '까닭'], cells: [['', '']] },
          { type: 'short', prompt: '오늘 다시 듣고 새로 알게 된 것을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드가 맞는 칸에 놓이면 바로 알려 주고, 가락을 듣는 동안 건반이 빛나요.',
      base: '카드를 놓고 확인을 눌러 근거를 스스로 가려요.',
      challenge: '근거가 아닌 말이 섞인 카드가 한 장 더 있고 건반 이름이 가려져요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 좋았다는 느낌만 말한다 → 박·세기·시작 가운데 하나를 골라 말하게 한다. ② 우리 모둠 연주만 좋다고 한다 → 다른 모둠 녹음을 듣고 같은 기준으로 말하게 한다. ③ 어울림을 같은 소리로 이해한다 → 다른 소리도 어울릴 수 있음을 보인다. 개인 평가에 쓰지 않는다.',
  });

  // ───────────────────────── 6차시 (연습) ─────────────────────────
  add(6, S3, {
    title: '소리가 묻힌 성부를 찾아 균형 맞출 방법 고르기',
    objective: '소리가 묻힌 성부를 찾아 세기, 악기, 자리 가운데 알맞은 방법으로 균형을 맞추는 방안을 고를 수 있다.',
    illustration: {
      prompt: ILL('a quiet paper flute hidden behind a huge drum with a child moving the flute to the front of the stage'),
      scene: scene(2, '묻힌 소리를 찾아요'),
    },
    stages: [
      intro(
        '"합주에서 한 소리가 안 들릴 때는 누가 잘못한 걸까요?" 학생 대답을 들은 뒤 "작은 소리가 잘못일 수도, 큰 소리가 너무 큰 것일 수도 있어요. 소리를 들어 보고 방법을 찾아야 해요"라고 말한다. 큰 쪽만 줄이면 된다는 학생에게는 "작은 쪽을 더 키우면 안 될까요? 방법은 몇 가지일까요?"로 되묻는다.',
        '합주에서 소리가 묻힌 성부는 어떻게 찾고 어떻게 고칠까요?',
      ),
      main(
        act(1, '묻힌 까닭과 고치는 방법 짝짓기', 14, 'mindmap',
          '"소리가 묻히는 까닭은 세기, 악기의 소리 빛깔, 앉은 자리가 있어요. 까닭에 맞는 방법을 골라 보세요." 이어 가는 카드를 소리 내어 읽게 한다. 모든 문제를 \'크게 치기\'로만 푸는 학생에게 "모두가 크게 치면 어떻게 될까요?"를 묻는다. 3번은 한 문제에 여러 방법이 어울리므로 이유를 말하며 고르게 한다.',
          '묻힌 장면과 알맞은 해결 방법을 이어요.',
          cardsLv(),
          [
            { prompt: '소리가 묻힌 장면에 알맞은 해결 방법을 이어 보세요.', toolOptions: { mode: 'match', topic: '묻힌 소리 고치기', slots: [{ id: 'k1', label: '작은 피리 소리가 큰 북에 가려요' }, { id: 'k2', label: '낮은 줄 소리가 너무 커서 높은 줄이 안 들려요' }, { id: 'k3', label: '뒷자리 악기 소리가 앞까지 안 와요' }], cards: ['큰 북의 세기를 줄여요', '낮은 줄 세기를 줄여 맞춰요', '자리를 앞쪽으로 옮겨요'] }, target: { match: { k1: '큰 북의 세기를 줄여요', k2: '낮은 줄 세기를 줄여 맞춰요', k3: '자리를 앞쪽으로 옮겨요' } }, difficulty: 0.2 },
            { prompt: '소리가 묻히는 까닭을 세기·악기·자리로 나누어 보세요.', toolOptions: { mode: 'sort', topic: '묻힌 까닭', slots: ['세기', '악기', '자리'], cards: ['한 줄만 너무 세게 쳐요', '작은 소리 악기와 큰 소리 악기가 같이 있어요', '악기가 서로 등을 지고 앉았어요', '모두가 같은 세기로 쳐요'] }, target: { sort: { 세기: ['한 줄만 너무 세게 쳐요'], 악기: ['작은 소리 악기와 큰 소리 악기가 같이 있어요'], 자리: ['악기가 서로 등을 지고 앉았어요'] } }, difficulty: 0.3 },
            { prompt: '방법 가운데 합주 균형을 높이는 말만 골라 보세요.', toolOptions: { mode: 'pick', topic: '균형 방법', basket: '균형을 높이는 방법', cards: ['작은 소리 악기를 앞쪽에 둬요', '큰 소리 악기는 약하게 쳐요', '묻힌 줄만 계속 더 크게 쳐요', '친구 소리를 들으며 세기를 조절해요'] }, target: { pick: ['작은 소리 악기를 앞쪽에 둬요', '큰 소리 악기는 약하게 쳐요', '친구 소리를 들으며 세기를 조절해요'] }, difficulty: 0.35 },
          ]),
        act(2, '번갈아 들어오는 리듬으로 묻힘 줄이기', 12, 'keyboard',
          '"두 줄이 한꺼번에 쳐서 묻히면, 한 줄이 쉬는 박에 다른 줄이 들어오게 하면 서로 잘 들려요." 쉼표를 넣어 리듬을 나누는 활동이다. 쉼표를 \'빼먹는 것\'으로 생각하는 학생에게 "쉬는 박도 연주의 한 부분이에요. 친구의 소리가 들릴 자리를 열어 주는 거예요"를 말해 준다. 3번은 내가 쉬는 박을 말로 설명하며 해낸 것을 표시하는 점검이다.',
          '마디마다 4박이 되도록 블록을 놓아요. 쉬는 박이 친구 소리가 들릴 자리가 돼요.',
          rhy(4, 2),
          [
            { prompt: '4분쉼표 하나를 넣어 두 마디를 4박씩 채운 첫째 줄을 지어 보세요.', toolOptions: { mode: 'rhythm', meter: 4, measures: 2 }, target: { beats: true, rests: 1 }, difficulty: 0.15 },
            { prompt: '2분쉼표를 하나 넣고 두 마디를 4박씩 채워 둘째 줄을 지어 보세요.', toolOptions: { mode: 'rhythm', meter: 4, measures: 2, blocks: ['q', 'h', 'qr', 'hr'] }, target: { beats: true, rests: 1 }, difficulty: 0.25 },
            { prompt: '짝과 쉬는 박을 엇갈리게 쳐 본 뒤 해낸 것을 표시해요.', toolOptions: { mode: 'rhythm', meter: 4, measures: 2 }, target: { beats: true, selfCheck: ['내가 쉬는 박에 짝 소리가 들렸어요', '쉬는 동안에도 마음속으로 박을 셌어요'] }, difficulty: 0.2 },
          ]),
      ),
      wrap(
        '"묻힌 소리를 고치는 방법은 세 가지가 있었지요. 어떤 방법이었나요?" 세기, 악기, 자리가 나오도록 학생이 말하게 한다. 한 가지 방법만 말하면 "다른 방법도 있을까요?"로 확장한다. 출구 2번에서 모두 크게 치기를 고른 학생에게는 짝과 함께 모두 크게 쳤을 때와 균형을 맞췄을 때를 번갈아 들려주며 견주게 한다.',
        [
          { type: 'tool', tool: 'keyboard', options: { mode: 'rhythm', meter: 3, measures: 2, blocks: ['q', 'h', 'qr', 'e'] }, prompt: '한 마디가 3박이에요. 4분쉼표를 하나 넣고 두 마디를 채워 보세요.', target: { beats: true, rests: 1 }, difficulty: 0.3 },
          { type: 'choice', prompt: '작은 리코더 소리가 큰 북에 가려요. 가장 알맞은 방법은 무엇일까요?', options: ['모두 더 크게 친다', '북의 세기를 줄이고 리코더는 앞에 둔다', '리코더를 빼 버린다'], answer: 1, difficulty: 0.25, explain: '세기를 줄이고 자리를 옮기면 가려진 소리가 들려요.' },
          { type: 'mood', prompt: '소리를 고치는 방법을 찾아 보니 어땠나요?' },
        ]),
    ],
    worksheet: {
      title: '소리가 묻힌 까닭 고치기',
      items: [
        { type: 'table', prompt: '묻힌 소리와 고치는 방법을 짝지어 쓰세요.', columns: ['묻힌 장면', '고치는 방법'], cells: [['작은 소리가 큰 소리에 가려요', ''], ['뒷자리 소리가 안 들려요', '']] },
        { type: 'figure', prompt: '4박 두 마디에서 쉬는 박은 몇 번째일까요? 쉼표가 있는 박을 찾아 쓰세요.', tool: 'keyboard', wide: true, options: { mode: 'rhythm', meter: 4, measures: 2 }, figures: [{ state: { rhythm: ['q', 'q', 'qr', 'q', 'h', 'h'] }, caption: '쉬는 박은 첫째 마디 ___째 박이에요.' }], answer: '셋째' },
        { type: 'choice', prompt: '균형을 맞추는 방법에 ○ 하세요.', options: ['세기 조절', '묻힌 줄만 더 세게', '아무것도 안 한다'], answer: '세기 조절' },
        { type: 'short', prompt: '내가 속한 모둠 합주에서 소리가 묻힌 적이 있다면 어떻게 고칠지 써 보세요.' },
      ],
      easy: {
        note: '소리가 묻히면 세기를 줄이거나 자리를 옮기고, 악기를 바꾸어 균형을 맞춰요.',
        items: [
          { type: 'choice', prompt: '너무 큰 북 소리를 줄이는 방법에 ○ 하세요.', options: ['세기를 줄인다', '더 크게 친다'], answer: '세기를 줄인다' },
          { type: 'choice', prompt: '앞자리에 두면 좋은 악기에 ○ 하세요.', options: ['작은 소리 악기', '큰 소리 악기'], answer: '작은 소리 악기' },
          { type: 'table', prompt: '방법 두 가지를 쓰세요.', columns: ['방법', '무엇이 좋아지나요?'], cells: [['', ''], ['', '']] },
          { type: 'short', prompt: '쉬는 박이 필요한 까닭을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드가 맞으면 바로 알려 주고, 박 수를 마디마다 보여 줘요.',
      base: '카드를 이어 보고 쉼표 위치를 스스로 정해요.',
      challenge: '함정 카드가 섞이고 쉼표 길이가 여러 가지예요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 작은 소리를 더 크게 치기만 하면 된다고 여긴다 → 모두 크게 치면 어떻게 되는지 직접 들려준다. ② 쉼표를 빠진 소리로 본다 → 쉬는 박도 연주 시간임을 박수로 세어 보게 한다. ③ 악기 탓만 한다 → 세기와 자리 방법도 함께 쓰게 한다.',
  });

  // ───────────────────────── 7차시 (확장) ─────────────────────────
  add(7, S3, {
    title: '시작 신호 가락을 짓고 다음 연주 자리 정하기',
    objective: '다음 연주에서 맞출 시작 신호와 자리 배치를 근거와 함께 정하고, 시작 신호 가락을 지어 칠 수 있다.',
    illustration: {
      prompt: ILL('a tiny conductor child raising a baton above a semicircle of paper instruments with a small bell ringing a signal'),
      scene: scene(0, '신호와 자리 정하기'),
    },
    stages: [
      intro(
        '"연주를 시작할 때 모두가 한 순간에 들어가려면 어떤 신호가 필요할까요?" 손짓, 눈짓, 숨 쉬기, 소리 신호를 학생이 말하게 한다. "그냥 서로 눈치 보면 돼요"라는 답에는 "열 명이 동시에 눈치를 보면 누가 먼저 움직일까요?"로 되묻는다. 오늘은 모둠이 약속할 신호와 앉을 자리를 정한다.',
        '다음 연주에서 모두가 같이 시작하려면 어떤 신호와 자리가 필요할까요?',
      ),
      main(
        act(1, '신호와 자리 배치의 기준 나누기', 12, 'mindmap',
          '"신호는 모두에게 같은 때에 보이고 들려야 해요. 자리는 서로 들리고 신호가 보이는 곳이에요." 기준을 소리 내어 읽게 한다. 소리가 큰 악기를 앞에 두는 학생이 있으면 "작은 소리가 뒤에서 가려지지 않을까요?"를 묻는다. 3번은 모둠에서 실제 신호 후보를 놓고 고른다.',
          '신호와 자리 기준을 읽고 알맞게 나누거나 골라요.',
          cardsLv(),
          [
            { prompt: '자리와 신호의 기준을 두 갈래로 나누어 보세요.', toolOptions: { mode: 'sort', topic: '연주 준비', slots: ['신호 기준', '자리 기준'], cards: ['모두에게 같은 때에 보여요', '짧고 쉬운 동작이에요', '서로 소리가 들리는 거리예요', '신호하는 친구가 보이는 자리예요'] }, target: { sort: { '신호 기준': ['모두에게 같은 때에 보여요', '짧고 쉬운 동작이에요'], '자리 기준': ['서로 소리가 들리는 거리예요', '신호하는 친구가 보이는 자리예요'] } }, difficulty: 0.2 },
            { prompt: '악기 소리 특징에 알맞은 자리를 이어 보세요.', toolOptions: { mode: 'match', topic: '악기 자리', slots: [{ id: 'z1', label: '소리가 작은 악기' }, { id: 'z2', label: '소리가 큰 악기' }], cards: ['앞쪽이나 가운데', '뒤쪽이나 가장자리'] }, target: { match: { z1: '앞쪽이나 가운데', z2: '뒤쪽이나 가장자리' } }, difficulty: 0.25 },
            { prompt: '시작 신호로 알맞은 것을 모두 골라 보세요.', toolOptions: { mode: 'pick', topic: '시작 신호 후보', basket: '알맞은 신호', cards: ['지휘 친구가 팔을 내렸다 올려요', '짧은 신호 가락을 한 번 쳐요', '각자 마음대로 시작해요', '숨을 함께 들이쉬어요'] }, target: { pick: ['지휘 친구가 팔을 내렸다 올려요', '짧은 신호 가락을 한 번 쳐요', '숨을 함께 들이쉬어요'] }, difficulty: 0.3 },
          ]),
        act(2, '시작 신호 가락 짓기', 14, 'keyboard',
          '"신호는 짧아야 해요. 서너 음이면 충분하고 끝나는 음에서 모두가 들어갈 수 있어요." 도로 시작해 도로 끝나는 짧은 가락을 지어 보게 한다. 길게 짓는 학생에게는 "신호가 길면 언제 들어가야 하는지 모를 수 있어요"를 짚는다. 3번에서 신호를 쳐 보이고 짝이 정확히 들어오는지 확인하는 점검을 한다.',
          '짧은 신호 가락을 지어 쳐요. 짝이 신호를 듣고 같은 박에 들어오는지 확인해요.',
          mel(),
          [
            { prompt: '도로 시작해 도로 끝나는 세 음 신호 가락을 지어 보세요.', target: { compose: { length: 3, startOn: '도', endOn: '도' } }, difficulty: 0.1 },
            { prompt: '솔로 시작해 도로 끝나는 네 음 신호 가락을 지어 보세요.', target: { compose: { length: 4, startOn: '솔', endOn: '도' } }, difficulty: 0.2 },
            { prompt: '도·미·솔 세 음만 써서 다섯 음 신호 가락을 지어 보세요.', target: { compose: { length: 5, only: ['도', '미', '솔'] } }, difficulty: 0.3 },
            { prompt: '지은 신호 가락을 치고 짝이 들어오는지 본 뒤 해낸 것을 표시해요.', target: { compose: { length: 3 }, selfCheck: ['신호를 한 번 치고 짝이 같은 박에 들어왔어요', '신호 가락이 너무 길지 않았어요'] }, difficulty: 0.2 },
          ]),
      ),
      wrap(
        '"우리 모둠은 어떤 신호와 자리로 정했나요? 그 까닭도 말해 보세요." 두 모둠에게 신호와 자리를 하나씩, 까닭과 함께 말하게 한다. "그냥 앉던 자리요"라고 하면 소리가 서로 들리는지 보는 기준으로 다시 말하게 한다. 출구 2번에서 큰 악기를 앞에 둔다고 한 학생은 작은 소리가 가려지는 장면을 떠올리게 한다.',
        [
          { type: 'tool', tool: 'keyboard', options: { from: '도', to: '높은도' }, prompt: '미로 시작해 도로 끝나는 네 음 신호 가락을 지어 보세요.', target: { compose: { length: 4, startOn: '미', endOn: '도' } }, difficulty: 0.25 },
          { type: 'choice', prompt: '신호로 가장 알맞은 것은 무엇인가요?', options: ['짧고 모두에게 보이는 동작', '모두가 다르게 하는 신호', '아주 긴 설명'], answer: 0, difficulty: 0.2, explain: '신호는 짧아야 모두가 같은 때에 알아볼 수 있어요.' },
          { type: 'mood', prompt: '신호와 자리를 정해 보니 어땠나요?' },
        ]),
    ],
    worksheet: {
      title: '우리 모둠 신호와 자리',
      items: [
        { type: 'table', prompt: '우리 모둠이 정한 신호와 자리, 까닭을 쓰세요.', columns: ['항목', '정한 것', '까닭'], cells: [['시작 신호', '', ''], ['끝 신호', '', ''], ['자리 배치', '', '']] },
        { type: 'figure', prompt: '신호 가락을 듣고 계이름을 쓰세요.', tool: 'keyboard', wide: true, options: { from: '도', to: '높은도', printNames: true, printBoxes: 4 }, figures: [{ caption: '신호가 끝나는 음에서 모두 함께 시작해요.' }], answer: '솔 미 레 도' },
        { type: 'choice', prompt: '자리를 정할 때 가장 먼저 살펴볼 것에 ○ 하세요.', options: ['서로 소리가 들리는가', '좋아하는 친구 옆인가'], answer: '서로 소리가 들리는가' },
        { type: 'short', prompt: '다음 연주에서 꼭 지키고 싶은 약속 한 가지를 쓰세요.' },
      ],
      easy: {
        note: '신호는 짧고 모두에게 보여야 해요. 자리는 서로 소리가 들려야 해요.',
        items: [
          { type: 'choice', prompt: '신호의 조건에 ○ 하세요.', options: ['짧고 보여요', '길고 복잡해요'], answer: '짧고 보여요' },
          { type: 'choice', prompt: '작은 소리 악기는 어디에 앉으면 좋을까요?', options: ['앞쪽', '뒤쪽'], answer: '앞쪽' },
          { type: 'table', prompt: '정한 신호를 쓰세요.', columns: ['신호', '언제 쓰나요?'], cells: [['', '시작할 때']] },
          { type: 'short', prompt: '오늘 정한 자리의 좋은 점을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '신호 가락 길이가 짧게 정해지고, 카드는 놓으면 바로 맞고 틀림이 보여요.',
      base: '가락 길이와 시작·끝 음을 스스로 맞추어 지어요.',
      challenge: '쓸 수 있는 음이 제한되고 검은건반까지 있는 건반에서 지어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 신호가 없어도 눈치로 맞출 수 있다고 여긴다 → 신호 없이 시작해 보게 하고 어긋남을 듣게 한다. ② 신호 가락을 너무 길게 짓는다 → 서너 음으로 줄이게 한다. ③ 자리를 친한 사이로만 정한다 → 소리가 들리는지, 신호가 보이는지를 기준으로 삼게 한다.',
  });

  // ───────────────────────── 8차시 (확장) ─────────────────────────
  add(8, S3, {
    title: '모둠 기록에 남길 문장 고르고 다음 연주 약속 정하기',
    objective: '연주 기록에 남길 문장이 관찰한 근거와 다음에 할 일을 담고 있는지 가려, 다음 연주 약속을 정할 수 있다.',
    illustration: {
      prompt: ILL('a paper notebook with a tiny drum and flute stuck on its cover and a ribbon bookmark marking the next practice'),
      scene: scene(1, '다음 연주 약속'),
    },
    stages: [
      intro(
        '"연주가 끝나면 그걸로 끝일까요, 아니면 다음 연주를 위해 남겨 둘 것이 있을까요?" 학생이 답한 뒤 기록의 쓰임을 말한다. 기록이 없으면 다음 연습에서 같은 문제가 되풀이된다. "기억하면 되지요"라는 학생에게 "다음 주에도 정확히 기억할 수 있을까요? 누가 기억하나요?"를 되묻는다.',
        '모둠 기록에는 무엇을 남겨야 다음 연주에 도움이 될까요?',
      ),
      main(
        act(1, '남길 문장과 지울 문장 가르기', 12, 'mindmap',
          '"좋은 기록은 무엇을 듣고 무엇을 할지가 들어 있어요." 문장을 소리 내어 읽고 그 문장이 관찰만 있는지, 앞으로 할 일이 있는지 살피게 한다. \'그냥 잘했다\'처럼 구체적이지 않은 문장을 남길 문장으로 고르는 학생에게 "다음 주에 이 문장만 보고 무엇을 연습할 수 있나요?"를 묻는다.',
          '기록에 남길 문장과 다시 쓸 문장을 나누어요.',
          cardsLv(),
          [
            { prompt: '기록에 남기면 좋은 문장과 다시 써야 할 문장으로 나누어 보세요.', toolOptions: { mode: 'sort', topic: '연주 기록', slots: ['남길 문장', '다시 쓸 문장'], cards: ['셋째 마디에서 낮은 줄이 커서 줄이기로 했어요', '다음에는 시작 신호 가락을 두 번 쳐요', '그냥 잘했어요', '다 괜찮았어요'] }, target: { sort: { '남길 문장': ['셋째 마디에서 낮은 줄이 커서 줄이기로 했어요', '다음에는 시작 신호 가락을 두 번 쳐요'], '다시 쓸 문장': ['그냥 잘했어요', '다 괜찮았어요'] } }, difficulty: 0.2 },
            { prompt: '기록 문장의 부분과 이름을 이어 보세요.', toolOptions: { mode: 'match', topic: '기록의 짜임', slots: [{ id: 'r1', label: '들은 것' }, { id: 'r2', label: '다음에 할 일' }], cards: ['둘째 줄이 한 박 늦게 들어갔어요', '다음에는 신호를 보고 들어가요'] }, target: { match: { r1: '둘째 줄이 한 박 늦게 들어갔어요', r2: '다음에는 신호를 보고 들어가요' } }, difficulty: 0.25 },
            { prompt: '다음 연주에 쓸 약속만 모두 골라 보세요.', toolOptions: { mode: 'pick', topic: '다음 약속', basket: '지킬 약속', cards: ['신호를 본 뒤 같이 시작해요', '소리가 묻히면 세기를 줄여요', '틀린 사람을 찾아 말해요', '연주가 끝날 때까지 기다려요'] }, target: { pick: ['신호를 본 뒤 같이 시작해요', '소리가 묻히면 세기를 줄여요', '연주가 끝날 때까지 기다려요'] }, difficulty: 0.3 },
          ]),
        act(2, '고친 약속으로 가락 다시 쳐 보기', 14, 'keyboard',
          '"기록에 적은 약속을 정말 지켰는지 다시 쳐 보며 확인해 봐요." 같은 가락을 두 번 치고 어느 점이 달라졌는지 말하게 한다. 약속을 말로만 하고 확인하지 않는 학생에게 "고쳤는지 어떻게 알 수 있나요?"를 묻는다. 3번은 모둠이 함께 해낸 일을 점검한다.',
          '가락을 듣고 따라 친 뒤 약속을 지켰는지 표시해요.',
          mel(),
          [
            { prompt: '약속을 지키기 전 가락이에요. 듣고 따라 쳐 보세요.', toolOptions: { melody: ['도', '레', '미', '레', '도'], tempo: 80 }, target: { notes: ['도', '레', '미', '레', '도'] }, difficulty: 0.1 },
            { prompt: '약속을 지킨 뒤 같은 가락을 더 빠르게 이어 쳐 보세요.', toolOptions: { melody: ['도', '레', '미', '레', '도', '솔'], tempo: 104 }, target: { notes: ['도', '레', '미', '레', '도', '솔'] }, difficulty: 0.25 },
            { prompt: '모둠이 약속을 지켜 다시 쳐 본 뒤 해낸 것을 표시해요.', toolOptions: { melody: ['도', '레', '미', '레', '도', '솔'] }, target: { notes: ['도', '레', '미', '레', '도', '솔'], selfCheck: ['기록에 적은 약속을 한 가지 이상 지켰어요', '고친 점을 한 문장으로 말했어요'] }, difficulty: 0.2 },
          ]),
      ),
      wrap(
        '"오늘 기록에 꼭 들어가야 할 두 가지는 무엇이었나요?" 들은 것과 다음에 할 일이 나오도록 한다. 둘 중 하나만 말한 학생에게 "나머지 하나가 빠지면 다음 연주가 어떻게 될까요?"라고 묻는다. 출구 2번에서 \'그냥 잘했어요\'를 고른 학생에게는 구체적으로 어디가 잘되었는지 한 가지 찾아 말하게 한다.',
        [
          { type: 'tool', tool: 'keyboard', options: { from: '도', to: '높은도', melody: ['미', '파', '솔', '파', '미'], tempo: 88 }, prompt: '다음 연주 가락이에요. 듣고 따라 쳐 보세요.', target: { notes: ['미', '파', '솔', '파', '미'] }, difficulty: 0.2 },
          { type: 'choice', prompt: '다음 연주에 가장 도움이 되는 기록은 무엇일까요?', options: ['오늘 잘했다', '둘째 줄이 늦었으니 신호를 보고 들어가기로 했다', '내일 또 한다'], answer: 1, difficulty: 0.2, explain: '무엇이 문제였고 다음에 어떻게 할지를 함께 적어야 기록이 도움이 돼요.' },
          { type: 'mood', prompt: '기록을 남겨 보니 어땠나요?' },
        ]),
    ],
    worksheet: {
      title: '우리 모둠 연주 기록',
      items: [
        { type: 'table', prompt: '오늘 연주를 돌아보고 기록을 채우세요.', columns: ['들은 것', '다음에 할 일'], cells: [['', ''], ['', '']] },
        { type: 'figure', prompt: '다음 연주 가락을 듣고 계이름을 쓰세요.', tool: 'keyboard', wide: true, options: { from: '도', to: '높은도', printNames: true, printBoxes: 5 }, figures: [{ caption: '약속을 지키고 쳐 보면 가락이 어떻게 달라질까요?' }], answer: '미 파 솔 파 미' },
        { type: 'choice', prompt: '기록 문장으로 알맞은 것에 ○ 하세요.', options: ['그냥 잘했어요', '셋째 마디에서 세기를 줄이기로 했어요'], answer: '셋째 마디에서 세기를 줄이기로 했어요' },
        { type: 'short', prompt: '이번 합주 단원에서 가장 마음에 남는 약속 한 가지를 쓰세요.' },
      ],
      easy: {
        note: '기록에는 들은 것과 다음에 할 일을 함께 남겨요.',
        items: [
          { type: 'choice', prompt: '기록에 꼭 필요한 것에 ○ 하세요.', options: ['다음에 할 일', '친구 이름 맞히기'], answer: '다음에 할 일' },
          { type: 'choice', prompt: '더 알맞은 기록에 ○ 하세요.', options: ['시작이 늦었어요', '그냥 좋았어요'], answer: '시작이 늦었어요' },
          { type: 'table', prompt: '들은 것과 할 일을 한 줄씩 쓰세요.', columns: ['들은 것', '할 일'], cells: [['', '']] },
          { type: 'short', prompt: '내가 모둠에서 지킬 약속을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 놓으면 바로 맞고 틀림이 보이고, 가락 듣는 동안 건반이 빛나요.',
      base: '문장을 스스로 가르고 가락을 다시 쳐서 점검해요.',
      challenge: '근거 없는 문장이 섞이고 건반 이름이 가려져요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 기록을 칭찬으로만 채운다 → 들은 것과 할 일 두 부분을 꼭 쓰게 한다. ② 사람을 지목하는 기록을 쓴다 → 사람이 아니라 소리와 박을 기준으로 쓰게 한다. ③ 약속을 막연하게 쓴다 → 언제 무엇을 하는지 한 문장으로 정하게 한다.',
  });

  // ───────────────────────── 9차시 (핵심) ─────────────────────────
  add(9, S4, {
    title: '학교와 마을에서 음악이 필요한 자리 세 곳 찾아 곡과 짝짓기',
    objective: '학교와 마을에서 음악이 필요한 자리를 세 곳 찾아, 각 자리에 어울릴 곡의 종류를 짝지어 말할 수 있다.',
    illustration: {
      prompt: ILL('a child walking through a school gate and a village market with small paper musical notes floating above each place'),
      scene: scene(2, '음악이 필요한 자리는 어디?'),
    },
    stages: [
      intro(
        '"우리 학교에서 하루 동안 음악이 들리는 때가 언제인가요?" 아침 알림, 쉬는 시간 방송, 운동회, 졸업식처럼 학생이 아는 자리를 칠판에 적는다. 이어서 "마을에서는 어디에서 음악이 필요할까요?"를 묻는다. \'음악은 아무 데나 틀면 된다\'고 여기는 학생에게는 "시험 보는 교실에서 신나는 곡이 나오면 어떨까요?"로 되묻는다.',
        '학교와 마을에서 음악이 필요한 자리를 찾아 봅시다. 어떤 곡이 어울릴까요?',
      ),
      main(
        act(1, '자리와 어울리는 곡의 모습 짝짓기', 12, 'mindmap',
          '"자리마다 쓰임이 달라요. 달리기에는 힘차고 빠른 곡, 책 읽는 곳에는 조용한 곡이 어울려요." 카드를 읽으며 자리를 상상하게 한다. \'유명한 노래면 어디에나 어울린다\'고 여기는 학생에게는 "이 자리에서 이 곡을 틀면 사람들이 어떤 기분일까요?"를 묻는다. 2번은 음악이 어울리지 않는 자리를 찾아 보는 문항이다.',
          '자리를 읽고 어울리는 곡의 모습을 이어요. 음악이 어울리지 않는 자리도 찾아봐요.',
          cardsLv(),
          [
            { prompt: '자리와 어울리는 곡의 모습을 이어 보세요.', toolOptions: { mode: 'match', topic: '자리와 곡', slots: [{ id: 'a1', label: '운동회 달리기' }, { id: 'a2', label: '도서관 책 읽는 시간' }, { id: 'a3', label: '마을 잔치 마당' }], cards: ['힘차고 빠른 곡', '차분하고 느린 곡', '여럿이 함께 즐기기 쉬운 곡'] }, target: { match: { a1: '힘차고 빠른 곡', a2: '차분하고 느린 곡', a3: '여럿이 함께 즐기기 쉬운 곡' } }, difficulty: 0.15 },
            { prompt: '음악이 어울리는 자리와 방해가 되는 자리로 나누어 보세요.', toolOptions: { mode: 'sort', topic: '음악이 필요한가', slots: ['어울리는 자리', '방해가 되는 자리'], cards: ['운동회 응원 시간', '마을 축제 마당', '시험을 보는 교실', '책을 읽는 도서관'] }, target: { sort: { '어울리는 자리': ['운동회 응원 시간', '마을 축제 마당'], '방해가 되는 자리': ['시험을 보는 교실', '책을 읽는 도서관'] } }, difficulty: 0.25 },
            { prompt: '우리 학교에서 음악이 필요한 자리를 찾는 방법으로 알맞은 것만 골라 보세요.', toolOptions: { mode: 'pick', topic: '자리 찾기', basket: '알맞은 방법', cards: ['하루 일과표를 훑으며 음악이 쓰이는 때를 찾아요', '친구에게 어떤 때 음악이 있으면 좋은지 물어요', '아무 자리나 정해 버려요'] }, target: { pick: ['하루 일과표를 훑으며 음악이 쓰이는 때를 찾아요', '친구에게 어떤 때 음악이 있으면 좋은지 물어요'] }, difficulty: 0.2 },
          ]),
        act(2, '자리별 짧은 가락 따라 치기', 14, 'keyboard',
          '"자리마다 쓰는 가락은 다르게 들려요. 짧은 가락을 듣고 어떤 자리인지 떠올려 봐요." 가락을 듣고 친 뒤 어떤 자리에 어울릴지 말해 보게 한다. 같은 가락이면 어디서나 되는 줄 아는 학생에게 "느리게 치면 달라질까요?"를 묻는다. 3번은 같은 가락의 빠르기를 바꾸어 어울리는 자리를 찾는 문항이다.',
          '가락 듣기를 누르고 따라 쳐요. 들은 가락이 어떤 자리에 어울릴지 말해 보아요.',
          mel(),
          [
            { prompt: '아침 알림 가락이에요. 듣고 따라 쳐 보세요.', toolOptions: { melody: ['도', '미', '솔', '높은도', '솔', '미', '도'], tempo: 100 }, target: { notes: ['도', '미', '솔', '높은도', '솔', '미', '도'] }, difficulty: 0.15 },
            { prompt: '운동회 입장 가락이에요. 듣고 따라 쳐 보세요.', toolOptions: { melody: ['도', '도', '솔', '솔', '라', '라', '솔'], tempo: 120 }, target: { notes: ['도', '도', '솔', '솔', '라', '라', '솔'] }, difficulty: 0.2 },
            { prompt: '같은 가락을 느리게 들려줘요. 듣고 따라 쳐 보세요.', toolOptions: { melody: ['도', '도', '솔', '솔', '라', '라', '솔'], tempo: 66 }, target: { notes: ['도', '도', '솔', '솔', '라', '라', '솔'] }, difficulty: 0.25,
              predict: { q: '빠르기를 느리게 바꾸면 어울리는 자리도 바뀔까요?', options: ['바뀌어요', '그대로예요', '잘 모르겠어요'], answer: 0 },
              conclude: '같은 가락도 빠르기가 달라지면 어울리는 자리가 달라져요.' },
          ]),
      ),
      wrap(
        '"오늘 찾은 자리 세 곳과 어울릴 곡의 모습을 한 문장으로 말해 볼까요?" 세 학생에게 \'자리, 곡의 모습, 까닭\' 순서로 말하게 한다. \'신나는 노래\'만 말하면 "빠르기는요? 세기는요?"로 구체화한다. 출구 2번에서 \'모든 자리에 같은 곡\'을 고른 학생은 도서관과 운동회에 같은 곡을 틀었을 때를 상상하게 한다.',
        [
          { type: 'tool', tool: 'keyboard', options: { from: '도', to: '높은도', melody: ['솔', '높은도', '솔', '미', '도'], tempo: 100 }, prompt: '점심시간 알림 가락이에요. 듣고 따라 쳐 보세요.', target: { notes: ['솔', '높은도', '솔', '미', '도'] }, difficulty: 0.25 },
          { type: 'choice', prompt: '자리와 곡을 짝지을 때 가장 먼저 살펴볼 것은 무엇인가요?', options: ['그 자리에서 사람들이 하는 일', '곡의 이름이 유명한가', '음악 길이'], answer: 0, difficulty: 0.2, explain: '자리에서 사람들이 무엇을 하는지에 맞아야 곡이 어울려요.' },
          { type: 'mood', prompt: '음악이 필요한 자리를 찾아 보니 어땠나요?' },
        ]),
    ],
    worksheet: {
      title: '음악이 필요한 자리 찾기',
      items: [
        { type: 'table', prompt: '음악이 필요한 자리 세 곳과 어울릴 곡의 모습을 쓰세요.', columns: ['자리', '어울릴 곡의 모습'], cells: [['', ''], ['', ''], ['', '']] },
        { type: 'figure', prompt: '선생님이 들려주는 가락을 듣고 계이름을 쓰세요.', tool: 'keyboard', wide: true, options: { from: '도', to: '높은도', printNames: true, printBoxes: 7 }, figures: [{ caption: '이 가락은 어떤 자리에 어울릴까요? ___' }], answer: '도 미 솔 높은도 솔 미 도 — 아침 알림' },
        { type: 'choice', prompt: '도서관에서 어울릴 곡에 ○ 하세요.', options: ['힘차고 빠른 곡', '차분하고 느린 곡'], answer: '차분하고 느린 곡' },
        { type: 'short', prompt: '우리 마을에서 음악이 필요하다고 느낀 자리와 까닭을 쓰세요.' },
      ],
      easy: {
        note: '자리마다 사람들이 하는 일이 달라서 어울리는 곡의 모습도 달라요.',
        items: [
          { type: 'choice', prompt: '달리기에 어울릴 곡에 ○ 하세요.', options: ['빠르고 힘찬 곡', '느리고 조용한 곡'], answer: '빠르고 힘찬 곡' },
          { type: 'choice', prompt: '시험 시간에 음악이 어울리지 않는 까닭에 ○ 하세요.', options: ['집중을 방해해요', '시험이 쉬워져요'], answer: '집중을 방해해요' },
          { type: 'table', prompt: '자리 한 곳과 곡을 쓰세요.', columns: ['자리', '곡의 모습'], cells: [['', '']] },
          { type: 'short', prompt: '학교에서 음악이 있으면 좋겠다고 생각한 때를 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 놓으면 바로 맞고 틀림이 보이고, 가락 듣는 동안 건반이 빛나요.',
      base: '자리와 곡의 짝을 스스로 확인하고 가락을 따라 쳐요.',
      challenge: '함정 카드가 섞이고 계이름 없이 검은건반이 있는 건반에서 쳐요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 유명한 곡이면 어느 자리에나 어울린다고 여긴다 → 같은 곡을 도서관과 운동회에 틀었을 때를 말해 보게 한다. ② 자리를 장소 이름으로만 쓴다 → 거기서 사람들이 하는 일까지 적게 한다. ③ 곡의 모습을 \'좋은 곡\'이라고만 쓴다 → 빠르기나 세기로 말하게 한다. 학생 개인정보는 활동지에 쓰지 않는다.',
  });

  // ───────────────────────── 10차시 (연습) ─────────────────────────
  add(10, S4, {
    title: '자리에 어울리는 곡의 조건 두 가지씩 밝히기',
    objective: '고른 자리에 어울리는 곡의 조건을 빠르기와 세기 가운데 두 가지로 밝혀 말할 수 있다.',
    illustration: {
      prompt: ILL('two scales weighing a tiny drum and a soft lullaby bell with place cards for a playground and a library'),
      scene: scene(0, '곡의 조건 찾기'),
    },
    stages: [
      intro(
        '"어떤 곡이 어울리는지 말할 때 \'그냥 좋은 곡\'이라고 하면 친구가 알아들을 수 있을까요?" 곡의 조건은 빠르기, 세기, 길이처럼 들어서 확인할 수 있는 것이어야 한다고 알려 준다. 지난 시간에 찾은 자리 중 하나를 골라 \'빠르게\', \'크게\' 같은 낱말로 조건을 한 가지 말하게 한다. \'신나는\' 같은 마음 낱말만 말하면 "빠르기로는 어떨까요?"로 되묻는다.',
        '자리에 어울리는 곡의 조건 두 가지를 어떻게 밝힐까요?',
      ),
      main(
        act(1, '자리별 곡의 조건 이어 보기', 12, 'mindmap',
          '"조건은 빠르기나 세기처럼 귀로 확인할 수 있는 말이에요." 카드를 읽으며 빠르기와 세기를 구별하게 한다. 빠르기와 세기를 섞어 \'세게 느리게\'라고 말해도 된다고 알려 주고 이유를 묻는다. 3번에서 자리와 조건이 어긋난 카드를 골라낸다.',
          '자리를 읽고 어울리는 곡의 조건을 이어요.',
          cardsLv(),
          [
            { prompt: '자리와 곡의 조건 두 가지를 이어 보세요.', toolOptions: { mode: 'match', topic: '곡의 조건', slots: [{ id: 'c1', label: '아침 체조 시간' }, { id: 'c2', label: '잠자기 전 방송' }], cards: ['보통 빠르기, 또렷한 박', '느린 빠르기, 여린 소리'] }, target: { match: { c1: '보통 빠르기, 또렷한 박', c2: '느린 빠르기, 여린 소리' } }, difficulty: 0.15 },
            { prompt: '조건 낱말을 빠르기와 세기로 나누어 보세요.', toolOptions: { mode: 'sort', topic: '조건 낱말', slots: ['빠르기', '세기'], cards: ['느리게', '빠르게', '여리게', '세게'] }, target: { sort: { 빠르기: ['느리게', '빠르게'], 세기: ['여리게', '세게'] } }, difficulty: 0.2 },
            { prompt: '자리에 어울리는 조건만 골라 보세요. 자리는 \'조용한 도서관\'이에요.', toolOptions: { mode: 'pick', topic: '도서관 곡', basket: '어울리는 조건', cards: ['느린 빠르기', '여린 소리', '아주 빠른 빠르기', '아주 센 소리'] }, target: { pick: ['느린 빠르기', '여린 소리'] }, difficulty: 0.25 },
          ]),
        act(2, '조건에 맞는 가락 듣고 치고 짓기', 14, 'keyboard',
          '"조건을 말했으면 직접 가락으로 보여 줄 수 있어야 해요." 먼저 들려준 가락을 따라 친 뒤, 조건에 맞는 가락을 지어 본다. 조용한 자리 가락을 지으면서 높은 음을 많이 넣는 학생에게는 "높은 음은 크게 들리기 쉬워요. 낮은 음 위주로 지어 볼까요?"라고 제안한다.',
          '가락을 듣고 따라 친 뒤 조건에 맞는 가락을 지어 보아요.',
          mel(),
          [
            { prompt: '아침 체조 가락이에요. 듣고 따라 쳐 보세요.', toolOptions: { melody: ['솔', '솔', '미', '미', '솔', '솔', '도'], tempo: 108 }, target: { notes: ['솔', '솔', '미', '미', '솔', '솔', '도'] }, difficulty: 0.2 },
            { prompt: '조용한 도서관에 어울리게 도로 끝나는 다섯 음 가락을 지어 보세요.', target: { compose: { length: 5, endOn: '도' } }, difficulty: 0.2 },
            { prompt: '도·미·솔만 써서 솔로 시작하는 여섯 음 신나는 가락을 지어 보세요.', target: { compose: { length: 6, startOn: '솔', only: ['도', '미', '솔'] } }, difficulty: 0.3 },
            { prompt: '내가 고른 자리에 어울리는 가락을 지어 치고 조건을 말한 뒤 표시해요.', target: { compose: { length: 5 }, selfCheck: ['고른 자리에 어울리는 빠르기를 말했어요', '고른 자리에 어울리는 세기를 말했어요'] }, difficulty: 0.2 },
          ]),
      ),
      wrap(
        '"자리에 어울리는 곡의 조건 두 가지를 말해 보세요. 한 가지는 빠르기, 한 가지는 세기로요." 두 학생에게 말하게 한다. \'좋은 노래\'처럼 막연히 말하면 다시 귀로 확인할 수 있는 말로 바꾸게 한다. 출구 2번에서 \'유명한 곡이라면 어디나\'를 고른 학생에게는 자리와 곡이 어긋난 장면을 떠올려 보게 한다.',
        [
          { type: 'tool', tool: 'keyboard', options: { from: '도', to: '높은도' }, prompt: '솔로 끝나는 여섯 음의 조용한 가락을 지어 보세요.', target: { compose: { length: 6, endOn: '솔' } }, difficulty: 0.25 },
          { type: 'choice', prompt: '곡의 조건을 말할 때 알맞은 말은 어느 것인가요?', options: ['좋은 곡', '느린 빠르기, 여린 소리', '유명한 곡'], answer: 1, difficulty: 0.2, explain: '빠르기와 세기처럼 귀로 확인할 수 있는 말이 곡의 조건이에요.' },
          { type: 'mood', prompt: '곡의 조건을 정해 보니 어땠나요?' },
        ]),
    ],
    worksheet: {
      title: '곡의 조건 밝히기',
      items: [
        { type: 'table', prompt: '자리 두 곳을 고르고 어울리는 곡의 조건 두 가지씩 쓰세요.', columns: ['자리', '빠르기', '세기'], cells: [['', '', ''], ['', '', '']] },
        { type: 'figure', prompt: '선생님이 들려주는 가락을 듣고 계이름을 쓰세요.', tool: 'keyboard', wide: true, options: { from: '도', to: '높은도', printNames: true, printBoxes: 7 }, figures: [{ caption: '이 가락의 빠르기는? ( 느림 · 보통 · 빠름 )' }], answer: '솔 솔 미 미 솔 솔 도 — 보통' },
        { type: 'choice', prompt: '곡의 조건으로 알맞지 않은 말에 ○ 하세요.', options: ['빠르게', '여리게', '좋은 곡'], answer: '좋은 곡' },
        { type: 'short', prompt: '우리 반 자리 한 곳에 어울리는 곡의 조건을 두 가지 쓰고 까닭을 쓰세요.' },
      ],
      easy: {
        note: '곡의 조건은 빠르기와 세기처럼 귀로 확인할 수 있는 말이에요.',
        items: [
          { type: 'choice', prompt: '빠르기를 나타내는 말에 ○ 하세요.', options: ['느리게', '여리게'], answer: '느리게' },
          { type: 'choice', prompt: '세기를 나타내는 말에 ○ 하세요.', options: ['빠르게', '여리게'], answer: '여리게' },
          { type: 'table', prompt: '자리와 조건을 쓰세요.', columns: ['자리', '조건'], cells: [['', '']] },
          { type: 'short', prompt: '조건을 말할 때 \'좋은 곡\'이라고만 하면 안 되는 까닭을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 놓으면 바로 맞고 틀림이 보이고, 가락 듣는 동안 건반이 빛나요.',
      base: '조건과 자리를 스스로 이어 보고 가락을 지어요.',
      challenge: '함정 카드가 섞이고 쓰는 음이 제한돼요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 조건을 \'좋은 곡\'·\'신나는 곡\'처럼 마음 낱말로만 쓴다 → 빠르기나 세기처럼 귀로 확인할 수 있는 말로 바꾸게 한다. ② 빠르기와 세기를 섞는다 → 박을 세는 속도와 소리의 크기를 따로 말하게 한다. ③ 자리를 바꿔도 같은 조건이라고 여긴다 → 두 자리의 조건을 나란히 견주게 한다.',
  });

  // ───────────────────────── 11차시 (확장) ─────────────────────────
  add(11, S4, {
    title: '하루 흐름에 따라 아침 알림 가락과 잠 노래 견주기',
    objective: '하루의 때에 따라 음악의 쓰임이 어떻게 달라지는지 순서로 놓고, 아침과 밤에 어울리는 가락을 지어 견줄 수 있다.',
    illustration: {
      prompt: ILL('a paper sun with a small bell on one side and a crescent moon with a soft lullaby bell on the other side'),
      scene: scene(1, '아침과 밤의 가락'),
    },
    stages: [
      intro(
        '"하루 동안 음악이 달라지는 때를 떠올려 볼까요? 아침 알림 노래와 자기 전에 듣는 노래가 같을까요?" 두 가락을 시연 단추로 차례로 들려주고 달라진 점을 묻는다. \'밤에도 아침과 같은 곡을 들어도 된다\'고 하는 학생에게는 "잠자리에 들 때 빠르고 큰 곡이 나오면 어떨까요?"로 되묻는다.',
        '하루의 때에 따라 음악은 어떻게 달라질까요? 아침과 밤의 가락을 견주어 봅시다.',
        { tool: 'keyboard', options: { from: '도', to: '높은도' }, sequence: [{ notes: ['도', '미', '솔', '높은도'] }, { notes: ['솔', '미', '도', '낮은솔'] }] },
      ),
      main(
        act(1, '하루 흐름에 따라 음악 쓰임 순서 놓기', 12, 'timeline',
          '"하루의 때를 아침부터 밤까지 차례로 놓고 그때 쓰는 음악을 떠올려 보세요." 시간 순서를 놓은 뒤 각 때의 음악 모습을 말하게 한다. 때를 헷갈리면 "해가 어디쯤 떠 있을까요?"를 묻는다. 3번은 같은 때라도 장소가 다르면 음악이 달라지는 경우를 찾는다.',
          '때 카드를 하루 흐름 순서대로 놓아요. 놓은 뒤 그때 어울리는 음악 모습을 말해요.',
          { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          [
            { prompt: '하루의 때를 일어나는 차례대로 놓아 보세요.', toolOptions: { axis: ['아침', '밤'], slots: 4, cards: ['아침 등굣길', '점심 쉬는 시간', '해 질 녘 하굣길', '잠자리 들기 전'] }, target: { order: ['아침 등굣길', '점심 쉬는 시간', '해 질 녘 하굣길', '잠자리 들기 전'] }, difficulty: 0.15 },
            { prompt: '때와 어울리는 음악의 모습을 이어 보세요.', toolOptions: { mode: 'match', topic: '때와 음악', slots: [{ id: 't1', label: '아침 등굣길' }, { id: 't2', label: '잠자리 들기 전' }], cards: ['밝고 또렷한 가락', '느리고 여린 가락'] }, target: { match: { t1: '밝고 또렷한 가락', t2: '느리고 여린 가락' } }, difficulty: 0.2 },
            { prompt: '같은 아침이라도 자리가 다르면 음악이 달라지는 경우만 골라 보세요.', toolOptions: { mode: 'pick', topic: '자리가 다른 아침', basket: '음악이 달라지는 경우', cards: ['운동장 아침 체조와 도서관 아침 읽기', '같은 운동장의 달리기 연습과 아침 체조', '아침 방송과 조용한 아침 독서'] }, target: { pick: ['운동장 아침 체조와 도서관 아침 읽기', '아침 방송과 조용한 아침 독서'] }, difficulty: 0.3 },
          ]),
        act(2, '아침 가락과 재우는 가락 지어 견주기', 14, 'keyboard',
          '"아침 알림은 높고 밝은 음으로 시작하고, 재우는 가락은 낮고 부드럽게 끝나는 것이 많아요." 규칙에 맞게 지어 친 뒤 둘을 견주게 한다. 두 가락 모두 비슷하게 짓는 학생에게 "밤의 가락은 어디서 끝나나요? 아침 가락과 끝이 같을까요?"를 묻는다. 마지막 문항에서 두 가락의 다른 점을 하나 말하게 한다.',
          '조건에 맞는 아침 가락과 재우는 가락을 지어 쳐요. 둘의 다른 점을 말해요.',
          mel('낮은솔', '높은도'),
          [
            { prompt: '높은도로 끝나는 다섯 음 아침 알림 가락을 지어 보세요.', target: { compose: { length: 5, endOn: '높은도' } }, difficulty: 0.15 },
            { prompt: '낮은솔로 시작해 도로 끝나는 여섯 음 재우는 가락을 지어 보세요.', target: { compose: { length: 6, startOn: '낮은솔', endOn: '도' } }, difficulty: 0.25 },
            { prompt: '도·미·솔만 써서 도로 끝나는 일곱 음 재우는 가락을 지어 보세요.', target: { compose: { length: 7, endOn: '도', only: ['도', '미', '솔'] } }, difficulty: 0.3 },
            { prompt: '아침 가락과 재우는 가락을 번갈아 치고 다른 점을 말한 뒤 표시해요.', target: { compose: { length: 5 }, selfCheck: ['두 가락의 빠르기가 어떻게 다른지 말했어요', '두 가락이 끝나는 음이 어떻게 다른지 말했어요'] }, difficulty: 0.2 },
          ]),
      ),
      wrap(
        '"아침 가락과 재우는 가락은 무엇이 달랐나요?" 두 학생에게 말하게 한다. 빠르기나 끝나는 소리처럼 귀로 확인할 수 있는 말이 나와야 한다. \'기분이 달라요\'만 말하면 무엇이 달라 기분이 달라졌는지 되묻는다. 출구 2번에서 \'아침과 밤이 같다\'를 고른 학생에게는 두 가락을 다시 들려주며 다른 점을 찾게 한다.',
        [
          { type: 'tool', tool: 'timeline', options: { axis: ['먼저', '나중'], slots: 3, cards: ['눈 뜨는 아침', '낮 활동 시간', '잠드는 밤'] }, prompt: '하루 흐름대로 놓아 보세요.', target: { order: ['눈 뜨는 아침', '낮 활동 시간', '잠드는 밤'] }, difficulty: 0.2 },
          { type: 'choice', prompt: '잠자리 노래에 가장 알맞은 것은 무엇인가요?', options: ['느리고 여린 가락', '빠르고 센 가락', '아주 높은 소리'], answer: 0, difficulty: 0.2, explain: '잠자리 노래는 마음을 가라앉히도록 느리고 여리게 불러요.' },
          { type: 'mood', prompt: '아침과 밤의 가락을 견주어 보니 어땠나요?' },
        ]),
    ],
    worksheet: {
      title: '하루의 음악',
      items: [
        { type: 'table', prompt: '하루의 때와 어울리는 음악의 모습을 쓰세요.', columns: ['때', '음악의 모습'], cells: [['아침', ''], ['낮', ''], ['밤', '']] },
        { type: 'figure', prompt: '두 가락을 듣고 계이름을 쓰고, 둘째 가락이 끝나는 음을 쓰세요.', tool: 'keyboard', wide: true, options: { from: '낮은솔', to: '높은도', printNames: true, printBoxes: 4 }, figures: [{ caption: '끝나는 음은 ___이에요.' }], answer: '솔 미 도 낮은솔 — 낮은솔' },
        { type: 'choice', prompt: '재우는 가락에 어울리는 것에 ○ 하세요.', options: ['빠르고 센 소리', '느리고 여린 소리'], answer: '느리고 여린 소리' },
        { type: 'short', prompt: '내가 잠들기 전에 듣고 싶은 음악의 모습을 빠르기와 세기로 써 보세요.' },
      ],
      easy: {
        note: '아침에는 밝고 또렷한 가락, 밤에는 느리고 여린 가락이 어울려요.',
        items: [
          { type: 'choice', prompt: '아침 알림에 어울리는 것에 ○ 하세요.', options: ['밝고 또렷한 가락', '느리고 여린 가락'], answer: '밝고 또렷한 가락' },
          { type: 'choice', prompt: '재우는 가락은 어떻게 끝나나요?', options: ['낮고 부드럽게', '높고 날카롭게'], answer: '낮고 부드럽게' },
          { type: 'table', prompt: '때와 가락을 쓰세요.', columns: ['때', '가락 모습'], cells: [['밤', '']] },
          { type: 'short', prompt: '아침에 듣고 싶은 소리 한 가지를 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '때 카드를 놓으면 바로 맞고 틀림이 보이고, 건반 이름이 보여요.',
      base: '순서를 스스로 놓고 가락을 규칙에 맞게 지어요.',
      challenge: '카드 순서가 섞이고 건반 이름이 가려져 귀로만 지어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 아침과 밤 가락을 높이로만 구별한다 → 빠르기와 세기, 끝나는 음도 함께 보게 한다. ② 재우는 가락은 반드시 낮아야 한다고 믿는다 → 높은 음도 여리고 느리게 쓰면 포근할 수 있음을 보여 준다. ③ 하루의 때를 장소와 섞는다 → 때와 자리를 나누어 칸에 쓰게 한다.',
  });

  // ───────────────────────── 12차시 (확장) ─────────────────────────
  add(12, S4, {
    title: '행사 자리마다 차분한 곡과 신나는 곡 가르기',
    objective: '학교와 마을 행사 자리를 차분한 곡이 어울리는 자리와 신나는 곡이 어울리는 자리로 나누고, 그 박에 맞는 리듬을 지을 수 있다.',
    illustration: {
      prompt: ILL('two paper stages side by side, one with a quiet reading lamp and one with a cheering drum and flags'),
      scene: scene(2, '차분한 곡, 신나는 곡'),
    },
    stages: [
      intro(
        '"운동회 응원 시간과 도서관 책 읽는 시간에 같은 곡을 틀 수 있을까요?" 학생의 직관을 듣고 두 자리의 곡을 견주게 한다. 시연 단추로 느린 리듬과 빠른 리듬을 들려주고 어느 자리에 맞는지 묻는다. \'신나는 곡이 더 좋은 곡\'이라고 하는 학생에게는 "좋고 나쁨이 아니라 자리에 어울리는지를 보는 거예요"라고 짚는다.',
        '행사마다 어울리는 곡이 다릅니다. 자리를 보고 알맞은 곡의 모습을 고르는 방법을 알아봅시다.',
        { tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 2 }, sequence: [{ rhythm: ['q', 'q', 'q', 'q'] }, { rhythm: ['q', 'q', 'q', 'q', 'e', 'e', 'e', 'e', 'h'] }] },
      ),
      main(
        act(1, '자리를 차분한 곡과 신나는 곡으로 나누기', 12, 'mindmap',
          '"자리에서 사람들이 하는 일을 보고 차분한 곡인지 신나는 곡인지 정해요." 자리 카드를 읽고 근거를 말하며 나누게 한다. 어떤 자리는 둘 다 어울린다고 하는 학생에게 "가장 많이 어울리는 쪽은 어디일까요?"를 묻는다. 3번은 한 곡 안에서 차분한 부분과 신나는 부분이 이어지는 행사를 다룬다.',
          '자리 카드를 읽고 어울리는 곡의 모습으로 나누어요.',
          cardsLv(),
          [
            { prompt: '행사 자리를 어울리는 곡의 모습으로 나누어 보세요.', toolOptions: { mode: 'sort', topic: '행사 자리', slots: ['차분한 곡', '신나는 곡'], cards: ['도서관 책 읽는 시간', '잠들기 전 방송', '운동회 달리기', '응원 대회'] }, target: { sort: { '차분한 곡': ['도서관 책 읽는 시간', '잠들기 전 방송'], '신나는 곡': ['운동회 달리기', '응원 대회'] } }, difficulty: 0.15 },
            { prompt: '자리와 알맞은 박의 모습을 이어 보세요.', toolOptions: { mode: 'match', topic: '박의 모습', slots: [{ id: 'b1', label: '달리기 응원' }, { id: 'b2', label: '조용한 독서' }], cards: ['촘촘하고 빠른 박', '넓고 느린 박'] }, target: { match: { b1: '촘촘하고 빠른 박', b2: '넓고 느린 박' } }, difficulty: 0.2 },
            { prompt: '졸업식처럼 차분함과 신남이 함께 있는 행사에서 알맞은 말만 골라 보세요.', toolOptions: { mode: 'pick', topic: '졸업식 음악', basket: '알맞은 말', cards: ['입장할 때는 차분하게 시작해요', '마칠 때는 밝게 끝낼 수도 있어요', '처음부터 끝까지 한 가지 곡만 써야 해요'] }, target: { pick: ['입장할 때는 차분하게 시작해요', '마칠 때는 밝게 끝낼 수도 있어요'] }, difficulty: 0.3 },
          ]),
        act(2, '자리에 맞는 박과 리듬 짓기', 14, 'keyboard',
          '"차분한 자리는 긴 음표가 많고, 신나는 자리는 짧은 음표가 많아요. 박 수가 같아도 채우는 블록이 달라요." 4박 두 마디에 블록을 놓아 자리에 어울리는 리듬을 만든다. 길고 짧은 블록을 섞기만 하는 학생에게 "어느 자리에 어울리는 리듬을 만들고 있나요?"를 묻는다. 3번에서는 모둠이 고른 자리를 말하며 쳐 보게 하고, 자리와 리듬이 어긋나면 어디가 어긋났는지 짚어 보게 한다.',
          '마디마다 4박이 되도록 리듬을 놓아요. 자리에 어울리는 길고 짧은 소리를 골라요.',
          rhy(4, 2),
          [
            { prompt: '차분한 도서관에 어울리게 2분음표를 꼭 넣어 두 마디를 4박씩 채워 보세요.', toolOptions: { mode: 'rhythm', meter: 4, measures: 2 }, target: { beats: true, use: ['h'] }, difficulty: 0.15 },
            { prompt: '신나는 응원에 어울리게 8분음표를 꼭 넣어 두 마디를 4박씩 채워 보세요.', toolOptions: { mode: 'rhythm', meter: 4, measures: 2 }, target: { beats: true, use: ['e'] }, difficulty: 0.2 },
            { prompt: '신나는 응원 리듬에 쉼표를 하나 넣어 두 마디를 4박씩 채워 보세요.', toolOptions: { mode: 'rhythm', meter: 4, measures: 2 }, target: { beats: true, use: ['q'], rests: 1 }, difficulty: 0.3 },
            { prompt: '내 모둠이 고른 자리의 리듬을 지어 친 뒤 해낸 것을 표시해요.', toolOptions: { mode: 'rhythm', meter: 4, measures: 2 }, target: { beats: true, selfCheck: ['고른 자리를 한 문장으로 말했어요', '자리에 어울리는 길고 짧은 소리를 골랐어요'] }, difficulty: 0.2 },
          ]),
      ),
      wrap(
        '"오늘 자리에 어울리는 곡의 모습을 어떻게 정했나요?" 두 학생에게 \'자리, 박의 모습, 까닭\'으로 말하게 한다. 근거 없이 \'그냥 신나요\'라고만 하면 박이 촘촘한지 넓은지를 짚게 한다. 출구 2번에서 \'모든 행사는 신나는 곡\'을 고른 학생은 도서관과 운동회를 번갈아 떠올리게 한다.',
        [
          { type: 'tool', tool: 'keyboard', options: { mode: 'rhythm', meter: 3, measures: 2, blocks: ['q', 'e', 'h', 'qr'] }, prompt: '한 마디가 3박이에요. 8분음표를 꼭 넣어 두 마디를 채워 보세요.', target: { beats: true, use: ['e'] }, difficulty: 0.3 },
          { type: 'choice', prompt: '자리가 조용한 도서관이라면 알맞은 리듬은 어느 것인가요?', options: ['긴 소리가 많은 리듬', '아주 촘촘하고 빠른 리듬', '박이 없는 리듬'], answer: 0, difficulty: 0.2, explain: '조용한 자리에는 긴 소리가 많은 넓은 리듬이 어울려요.' },
          { type: 'mood', prompt: '자리에 맞는 곡을 정해 보니 어땠나요?' },
        ]),
    ],
    worksheet: {
      title: '행사 자리와 곡의 모습',
      items: [
        { type: 'table', prompt: '행사 자리를 쓰고 차분한 곡인지 신나는 곡인지 쓰세요.', columns: ['행사 자리', '곡의 모습', '까닭'], cells: [['', '', ''], ['', '', ''], ['', '', '']] },
        { type: 'figure', prompt: '마디마다 몇 박인지 세어 쓰세요.', tool: 'keyboard', wide: true, options: { mode: 'rhythm', meter: 4, measures: 2 }, figures: [{ state: { rhythm: ['e', 'e', 'e', 'e', 'h', 'q', 'q', 'h'] }, caption: '첫째 마디 ___박, 둘째 마디 ___박' }], answer: '첫째 마디 3박, 둘째 마디 4박' },
        { type: 'choice', prompt: '운동회 응원에 어울리는 리듬에 ○ 하세요.', options: ['짧은 소리가 많고 빠른 리듬', '긴 소리가 많고 느린 리듬'], answer: '짧은 소리가 많고 빠른 리듬' },
        { type: 'short', prompt: '우리 학교 행사 한 가지를 골라 어울리는 곡의 모습을 쓰세요.' },
      ],
      easy: {
        note: '신나는 자리에는 짧은 소리가 많은 빠른 박, 차분한 자리에는 긴 소리가 많은 느린 박이 어울려요.',
        items: [
          { type: 'choice', prompt: '도서관에 어울리는 곡에 ○ 하세요.', options: ['차분한 곡', '신나는 곡'], answer: '차분한 곡' },
          { type: 'choice', prompt: '신나는 리듬에 가까운 것에 ○ 하세요.', options: ['짧은 소리가 많다', '긴 소리만 있다'], answer: '짧은 소리가 많다' },
          { type: 'table', prompt: '자리와 곡 모습을 쓰세요.', columns: ['자리', '곡 모습'], cells: [['', '']] },
          { type: 'short', prompt: '내가 신나는 곡이 필요했던 때를 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '마디마다 박 수가 보이고, 쉬운 블록만 주어져요.',
      base: '박 수를 스스로 세어 맞추고 쉼표도 넣어요.',
      challenge: '쉼표 길이가 여러 가지이고 함정 카드가 섞여요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 신나는 곡이 더 좋은 곡이라고 여긴다 → 좋고 나쁨이 아니라 자리에 맞는지를 보게 한다. ② 박 수와 소리 수를 헷갈린다 → 한 마디의 박 수는 같고 채우는 소리의 길이가 다르다는 것을 보인다. ③ 행사 하나를 한 가지 곡으로만 정한다 → 처음과 끝이 달라질 수 있음을 졸업식 예로 보인다.',
  });

  // ───────────────────────── 13차시 (핵심) ─────────────────────────
  add(13, S4, {
    title: '자리·곡·인원·연습 날짜를 담은 연주 계획표 짜기',
    objective: '고른 자리에 맞추어 곡, 인원, 연습 날짜를 담은 연주 계획표를 칸에 맞게 채워 말할 수 있다.',
    illustration: {
      prompt: ILL('a paper calendar with four labeled pockets holding a stage card, a music note, tiny people and date stickers'),
      scene: scene(0, '연주 계획표 짜기'),
    },
    stages: [
      intro(
        '"우리가 발표할 연주 자리를 하나 골랐다면, 계획에는 무엇이 들어가야 할까요?" 학생이 말한 것을 모아 자리, 곡, 인원, 연습 날짜 네 칸으로 묶어 준다. "당일에 맞추면 돼요"라고 하는 학생에게는 "연주 전날 처음 맞춰 보면 어떤 일이 생길까요?"로 되묻는다. 오늘은 계획표의 네 칸을 채운다.',
        '연주 계획표에는 어떤 것을 적어야 할까요? 자리, 곡, 인원, 연습 날짜를 채워 봅시다.',
      ),
      main(
        act(1, '계획표 칸에 알맞은 내용 넣기', 12, 'mindmap',
          '"계획표는 네 칸이에요. 자리, 곡, 인원, 연습 날짜. 각 칸에 들어갈 내용이 무엇인지 나눠 보세요." 카드를 읽으며 칸의 이름과 내용을 맞추게 한다. 연습 날짜를 \'연주 당일 하루\'로 쓰는 학생에게 "연습은 연주 하루 전에만 하면 될까요?"를 묻는다. 3번은 계획표의 빠진 칸을 찾는 문항이다.',
          '계획표의 칸 이름과 들어갈 내용을 나누어 놓아요.',
          cardsLv(),
          [
            { prompt: '계획표 칸에 알맞은 내용을 나누어 보세요.', toolOptions: { mode: 'sort', topic: '연주 계획표', slots: ['자리', '곡', '인원', '연습 날짜'], cards: ['운동회 입장 시간', '밝고 또렷한 가락', '여섯 명', '화요일과 목요일'] }, target: { sort: { 자리: ['운동회 입장 시간'], 곡: ['밝고 또렷한 가락'], 인원: ['여섯 명'], '연습 날짜': ['화요일과 목요일'] } }, difficulty: 0.15 },
            { prompt: '계획표 내용과 칸을 이어 보세요. 이번에는 다른 자리예요.', toolOptions: { mode: 'match', topic: '도서관 연주', slots: [{ id: 'p1', label: '자리' }, { id: 'p2', label: '곡' }, { id: 'p3', label: '연습 날짜' }], cards: ['점심시간 도서관', '느리고 여린 가락', '발표 전 두 주 동안 수요일'] }, target: { match: { p1: '점심시간 도서관', p2: '느리고 여린 가락', p3: '발표 전 두 주 동안 수요일' } }, difficulty: 0.2 },
            { prompt: '계획표에서 빠져 있는 칸을 모두 골라 보세요. 적힌 것은 자리와 곡이에요.', toolOptions: { mode: 'pick', topic: '빠진 칸', basket: '빠진 칸', cards: ['인원', '연습 날짜', '자리', '곡'] }, target: { pick: ['인원', '연습 날짜'] }, difficulty: 0.25 },
          ]),
        act(2, '계획한 곡의 첫 구간 따라 치기', 14, 'keyboard',
          '"계획한 곡의 첫 구간부터 연습을 시작해 봐요." 가락 듣기로 먼저 듣고 따라 치게 한다. 구간을 나누면 연습이 쉬워지는 것을 느끼게 한다. 3번에서 두 구간을 이어 치며 막히는 곳을 찾는다. 막히는 곳이 있으면 "어디에서 멈췄나요? 그 구간만 따로 연습할까요?"를 묻는다.',
          '가락 듣기를 누르고 따라 쳐요. 구간을 나누어 한 구간씩 연습해요.',
          mel(),
          [
            { prompt: '첫째 구간 가락이에요. 듣고 따라 쳐 보세요.', toolOptions: { melody: ['도', '도', '미', '솔', '솔', '미'], tempo: 84 }, target: { notes: ['도', '도', '미', '솔', '솔', '미'] }, difficulty: 0.15 },
            { prompt: '둘째 구간 가락이에요. 듣고 따라 쳐 보세요.', toolOptions: { melody: ['솔', '라', '솔', '미', '레', '도'], tempo: 84 }, target: { notes: ['솔', '라', '솔', '미', '레', '도'] }, difficulty: 0.2 },
            { prompt: '두 구간을 이어 한 곡으로 쳐 보세요.', toolOptions: { melody: ['도', '도', '미', '솔', '솔', '미', '솔', '라', '솔', '미', '레', '도'], tempo: 84 }, target: { notes: ['도', '도', '미', '솔', '솔', '미', '솔', '라', '솔', '미', '레', '도'] }, difficulty: 0.3,
              predict: { q: '구간을 나누어 연습하면 이을 때 더 쉬울까요?', options: ['더 쉬워요', '똑같아요', '잘 모르겠어요'], answer: 0 },
              conclude: '구간을 나누어 익히면 이을 때 막히는 곳이 줄어요.' },
          ]),
      ),
      wrap(
        '"우리 모둠 계획표의 네 칸을 하나씩 말해 볼까요?" 한 모둠이 자리, 곡, 인원, 날짜를 차례로 말하게 한다. 날짜 칸이 비어 있으면 "연습할 수 있는 날은 언제인가요?"로 묻는다. 출구 2번에서 날짜가 필요 없다고 답한 학생에게는 연습 날짜가 없으면 어떤 일이 생길지 한 문장으로 말하게 한다.',
        [
          { type: 'tool', tool: 'keyboard', options: { from: '도', to: '높은도', melody: ['미', '솔', '솔', '라', '솔', '미'], tempo: 84 }, prompt: '다른 모둠 곡의 첫 구간이에요. 듣고 따라 쳐 보세요.', target: { notes: ['미', '솔', '솔', '라', '솔', '미'] }, difficulty: 0.25 },
          { type: 'choice', prompt: '연주 계획표에 반드시 있어야 하는 칸은 어느 것인가요?', options: ['좋아하는 색', '연습 날짜', '친구 별명'], answer: 1, difficulty: 0.2, explain: '연습 날짜가 있어야 연습이 쌓여요.' },
          { type: 'mood', prompt: '계획표를 채워 보니 어땠나요?' },
        ]),
    ],
    worksheet: {
      title: '우리 모둠 연주 계획표',
      items: [
        { type: 'table', prompt: '우리 모둠 연주 계획표를 채우세요.', columns: ['칸', '내용'], cells: [['자리', ''], ['곡', ''], ['인원', ''], ['연습 날짜', '']] },
        { type: 'figure', prompt: '첫째 구간 가락을 듣고 계이름을 쓰세요.', tool: 'keyboard', wide: true, options: { from: '도', to: '높은도', printNames: true, printBoxes: 6 }, figures: [{ caption: '이 구간을 몇 번 연습할지 정해 보세요. ___번' }], answer: '도 도 미 솔 솔 미' },
        { type: 'choice', prompt: '계획표에서 연습 날짜를 정할 때 알맞은 것에 ○ 하세요.', options: ['연주 전 여러 날로 나누어 쓴다', '연주 하루 전으로 몰아 쓴다'], answer: '연주 전 여러 날로 나누어 쓴다' },
        { type: 'short', prompt: '내가 계획표에서 가장 중요하다고 생각하는 칸과 까닭을 쓰세요.' },
      ],
      easy: {
        note: '연주 계획표는 자리, 곡, 인원, 연습 날짜 네 칸이에요.',
        items: [
          { type: 'choice', prompt: '계획표의 칸이 아닌 것에 ○ 하세요.', options: ['자리', '친구 간식'], answer: '친구 간식' },
          { type: 'choice', prompt: '연습은 어떻게 하는 것이 좋을까요?', options: ['여러 날로 나누어', '하루에 몰아서'], answer: '여러 날로 나누어' },
          { type: 'table', prompt: '자리와 곡을 쓰세요.', columns: ['자리', '곡'], cells: [['', '']] },
          { type: 'short', prompt: '우리 모둠이 연습할 수 있는 날을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '칸 이름이 주어지고 카드를 놓으면 바로 맞고 틀림이 보여요.',
      base: '칸에 알맞은 내용을 스스로 찾아 나누어요.',
      challenge: '칸에 맞지 않는 함정 카드가 섞이고 건반 이름이 가려져요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 연습 날짜를 쓰지 않고 당일에 맞추면 된다고 여긴다 → 연습이 없는 연주를 상상하게 한다. ② 곡을 \'좋아하는 곡\'으로만 정한다 → 자리에 어울리는 곡인지 먼저 확인하게 한다. ③ 인원을 정하지 않고 모두 참여한다고만 쓴다 → 몇 명이 어떤 일을 맡을지 적게 한다. 학생 이름은 쓰지 않는다.',
  });

  // ───────────────────────── 14차시 (연습) ─────────────────────────
  add(14, S4, {
    title: '연습 날짜를 나누어 단계별 연습 순서 세우기',
    objective: '연주 날짜까지 남은 날을 나누어 가락 익히기에서 예행연습까지 연습 단계를 순서대로 놓아 계획할 수 있다.',
    illustration: {
      prompt: ILL('a paper staircase with four steps each carrying a tiny musical symbol leading up to a small stage'),
      scene: scene(1, '연습은 계단처럼'),
    },
    stages: [
      intro(
        '"연주 날까지 열흘이 남았다면 첫날부터 곡 전체를 쳐 볼까요?" 학생의 생각을 들은 뒤 \'처음엔 한 구간, 그다음엔 이어 치기\'처럼 단계가 있음을 알려 준다. "일단 많이 치면 돼요"라고 하는 학생에게는 "틀린 곳을 알고 고치는 시간도 연습이에요. 순서가 있으면 더 빨리 늘어요"를 말해 준다.',
        '연주 날까지 연습을 어떤 차례로 나누면 좋을까요?',
      ),
      main(
        act(1, '연습 단계 순서와 날짜 놓기', 12, 'timeline',
          '"연습은 가락 익히기, 박 맞추기, 성부 합치기, 예행연습 순서가 자연스러워요." 카드 순서를 놓고 이유를 말하게 한다. 합치기를 먼저 놓는 학생에게 "각자 가락을 모르는 채로 합치면 어떻게 될까요?"를 묻는다. 3번은 남은 날짜에 단계를 나누어 놓는 문항이다.',
          '연습 단계 카드를 순서대로 놓아요. 날짜 카드에는 어울리는 단계를 이어요.',
          { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          [
            { prompt: '연습 단계를 먼저 하는 것부터 차례로 놓아 보세요.', toolOptions: { axis: ['먼저', '나중'], slots: 4, cards: ['내 가락을 혼자 익혀요', '박을 함께 세며 맞춰요', '성부를 합쳐 쳐 봐요', '발표처럼 예행연습을 해요'] }, target: { order: ['내 가락을 혼자 익혀요', '박을 함께 세며 맞춰요', '성부를 합쳐 쳐 봐요', '발표처럼 예행연습을 해요'] }, difficulty: 0.2 },
            { prompt: '남은 날짜와 알맞은 연습 단계를 이어 보세요.', toolOptions: { mode: 'match', topic: '날짜별 연습', slots: [{ id: 'd1', label: '연주 열흘 전' }, { id: 'd2', label: '연주 닷새 전' }, { id: 'd3', label: '연주 하루 전' }], cards: ['혼자 가락을 익혀요', '성부를 합쳐 맞춰요', '예행연습을 해요'] }, target: { match: { d1: '혼자 가락을 익혀요', d2: '성부를 합쳐 맞춰요', d3: '예행연습을 해요' } }, difficulty: 0.25 },
            { prompt: '연습 계획으로 알맞은 말만 골라 보세요.', toolOptions: { mode: 'pick', topic: '연습 계획', basket: '알맞은 계획', cards: ['틀린 곳을 적고 다음 날 고쳐요', '연주 하루 전에 처음 합쳐요', '날마다 조금씩 나누어 연습해요'] }, target: { pick: ['틀린 곳을 적고 다음 날 고쳐요', '날마다 조금씩 나누어 연습해요'] }, difficulty: 0.3 },
          ]),
        act(2, '구간별 가락 익히고 이어 치기', 14, 'keyboard',
          '"구간을 나눠 익힌 뒤 이어 치면 틀리는 곳이 줄어요." 구간 가락을 듣고 따라 친 뒤 이어 치기까지 한다. 두 구간 연결 부분에서 박이 흔들리면 "그 연결 부분만 천천히 두 번 쳐 볼까요?"라고 제안한다. 마지막 문항에서 연습한 구간을 점검한다.',
          '구간 가락을 따라 치고, 이어 쳐 보며 연습 순서를 몸으로 느껴요.',
          mel(),
          [
            { prompt: '가 구간 가락이에요. 듣고 따라 쳐 보세요.', toolOptions: { melody: ['미', '미', '솔', '솔', '미', '도'], tempo: 80 }, target: { notes: ['미', '미', '솔', '솔', '미', '도'] }, difficulty: 0.15 },
            { prompt: '나 구간 가락이에요. 듣고 따라 쳐 보세요.', toolOptions: { melody: ['라', '라', '솔', '미', '솔', '도'], tempo: 80 }, target: { notes: ['라', '라', '솔', '미', '솔', '도'] }, difficulty: 0.2 },
            { prompt: '가 구간과 나 구간을 더 빠르게 이어 쳐 보세요.', toolOptions: { melody: ['미', '미', '솔', '솔', '미', '도', '라', '라', '솔', '미', '솔', '도'], tempo: 104 }, target: { notes: ['미', '미', '솔', '솔', '미', '도', '라', '라', '솔', '미', '솔', '도'] }, difficulty: 0.3 },
            { prompt: '연습한 구간을 한 번씩 쳐 본 뒤 해낸 것을 표시해요.', toolOptions: { melody: ['미', '미', '솔', '솔', '미', '도'] }, target: { notes: ['미', '미', '솔', '솔', '미', '도'], selfCheck: ['틀린 곳을 한 군데 찾았어요', '그 곳을 천천히 두 번 다시 쳤어요'] }, difficulty: 0.2 },
          ]),
      ),
      wrap(
        '"오늘 정한 연습 순서를 말해 볼까요? 처음, 가운데, 마지막 단계는 무엇인가요?" 세 학생에게 한 단계씩 말하게 한다. 단계 이름만 말하고 까닭을 말하지 못하면 "왜 이 단계를 먼저 해야 할까요?"를 묻는다. 출구 2번에서 \'합치기가 먼저\'를 고른 학생에게는 가락을 모르고 합치면 어떻게 되는지 떠올리게 한다.',
        [
          { type: 'tool', tool: 'timeline', options: { axis: ['먼저', '나중'], slots: 3, cards: ['각자 구간 익히기', '박 맞추기', '예행연습'] }, prompt: '연습 단계를 순서대로 놓아 보세요.', target: { order: ['각자 구간 익히기', '박 맞추기', '예행연습'] }, difficulty: 0.2 },
          { type: 'choice', prompt: '연주 열흘 전에 가장 알맞은 연습은 무엇인가요?', options: ['예행연습', '혼자 가락 익히기', '쉬기'], answer: 1, difficulty: 0.2, explain: '처음에는 혼자 가락을 익혀야 뒤에 합칠 수 있어요.' },
          { type: 'mood', prompt: '연습 순서를 짜 보니 어땠나요?' },
        ]),
    ],
    worksheet: {
      title: '연습 단계 계획표',
      items: [
        { type: 'table', prompt: '연주 날까지 남은 날에 연습 단계를 쓰세요.', columns: ['언제', '할 일'], cells: [['열흘 전', ''], ['닷새 전', ''], ['하루 전', '']] },
        { type: 'figure', prompt: '가 구간 가락을 듣고 계이름을 쓰세요.', tool: 'keyboard', wide: true, options: { from: '도', to: '높은도', printNames: true, printBoxes: 6 }, figures: [{ caption: '이 구간을 더 연습할 곳에 ○ 하세요.' }], answer: '미 미 솔 솔 미 도' },
        { type: 'choice', prompt: '연습 순서로 알맞은 것에 ○ 하세요.', options: ['혼자 익히기 → 합치기 → 예행연습', '예행연습 → 혼자 익히기 → 합치기'], answer: '혼자 익히기 → 합치기 → 예행연습' },
        { type: 'short', prompt: '내 연습 계획에서 가장 어려울 것 같은 단계와 어떻게 해결할지 쓰세요.' },
      ],
      easy: {
        note: '연습은 혼자 익히기, 박 맞추기, 합치기, 예행연습 순서로 해요.',
        items: [
          { type: 'choice', prompt: '맨 처음에 할 일에 ○ 하세요.', options: ['혼자 익히기', '예행연습'], answer: '혼자 익히기' },
          { type: 'choice', prompt: '마지막에 할 일에 ○ 하세요.', options: ['예행연습', '혼자 익히기'], answer: '예행연습' },
          { type: 'table', prompt: '연습 단계 두 가지를 쓰세요.', columns: ['단계', '무엇을 하나요?'], cells: [['', ''], ['', '']] },
          { type: 'short', prompt: '오늘 연습한 구간에서 막혔던 곳을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '단계 카드가 쉬운 말로 주어지고 건반이 가락 듣는 동안 빛나요.',
      base: '단계를 스스로 놓고 구간 가락을 연습해요.',
      challenge: '단계 카드가 섞이고 건반 이름이 가려져요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 합치기를 먼저 해야 한다고 여긴다 → 각자 가락을 모르는 채로 합치면 어떻게 되는지 보여 준다. ② 연습을 한 번에 몰아서 한다 → 날마다 조금씩 나누는 계획을 보이게 한다. ③ 예행연습을 연주 당일로 정한다 → 예행연습 뒤 고칠 시간이 필요함을 알려 준다.',
  });

  // ───────────────────────── 15차시 (확장) ─────────────────────────
  add(15, S4, {
    title: '인원에 맞게 성부와 악기를 나누어 가락 짓기',
    objective: '모둠 인원에 따라 가락, 반주, 박자 성부를 나누고, 성부별로 어울리는 가락을 지어 칠 수 있다.',
    illustration: {
      prompt: ILL('a paper circle of small musicians each holding a different card labeled melody, accompaniment or beat'),
      scene: scene(2, '성부 나누기'),
    },
    stages: [
      intro(
        '"여섯 명이 한 곡을 함께 연주하면 모두 같은 가락을 치게 될까요?" 학생에게 어떤 역할이 있을지 말하게 한다. 가락을 맡는 사람, 반주를 맡는 사람, 박자를 맡는 사람이 있다는 것을 알려 준다. "다 같이 같은 걸 치면 편한데요"라는 학생에게는 "같은 소리 여섯 개와 서로 다른 소리 여섯 개 중 어느 쪽이 풍성할까요?"로 되묻는다.',
        '인원에 따라 성부를 어떻게 나눌까요? 나눈 성부는 어떤 가락을 칠까요?',
      ),
      main(
        act(1, '성부와 역할 이어 보고 인원 나누기', 12, 'mindmap',
          '"가락 성부는 노래하듯 이끌고, 반주 성부는 받쳐 주고, 박자 성부는 박을 지켜 줘요." 역할과 성부를 이어 보게 한다. \'가장 잘 치는 친구가 가락, 나머지는 쉬어요\'라고 하는 학생에게 "모두가 소리를 낼 수 있는 방법은 없을까요?"를 묻는다. 3번은 인원이 달라질 때 나누는 방법을 정한다.',
          '성부와 역할을 이어 보고, 인원에 맞게 나누어 보아요.',
          cardsLv(),
          [
            { prompt: '성부와 하는 일을 이어 보세요.', toolOptions: { mode: 'match', topic: '성부의 일', slots: [{ id: 'r1', label: '가락 성부' }, { id: 'r2', label: '반주 성부' }, { id: 'r3', label: '박자 성부' }], cards: ['노래하듯 가락을 이끌어요', '아래에서 같은 묶음을 되풀이해요', '박을 일정하게 지켜 줘요'] }, target: { match: { r1: '노래하듯 가락을 이끌어요', r2: '아래에서 같은 묶음을 되풀이해요', r3: '박을 일정하게 지켜 줘요' } }, difficulty: 0.15 },
            { prompt: '여섯 명 모둠에서 역할을 나누어 보세요.', toolOptions: { mode: 'sort', topic: '여섯 명 나누기', slots: ['가락', '반주', '박자'], cards: ['건반 가락 둘', '건반 반주 둘', '손북 박자 하나', '탬버린 박자 하나'] }, target: { sort: { 가락: ['건반 가락 둘'], 반주: ['건반 반주 둘'], 박자: ['손북 박자 하나', '탬버린 박자 하나'] } }, difficulty: 0.25 },
            { prompt: '인원이 셋뿐일 때 알맞은 나누기를 골라 보세요.', toolOptions: { mode: 'pick', topic: '세 명 모둠', basket: '알맞은 나누기', cards: ['가락 하나, 반주 하나, 박자 하나', '모두 가락만 쳐요', '박자는 아무도 맡지 않아요'] }, target: { pick: ['가락 하나, 반주 하나, 박자 하나'] }, difficulty: 0.3 },
          ]),
        act(2, '성부별 가락 짓기', 14, 'keyboard',
          '"성부마다 쓰는 음이 달라요. 가락 성부는 움직임이 많고, 반주 성부는 두세 음을 되풀이해요." 조건에 맞게 짓고 서로 들려주게 한다. 반주 성부에 가락을 지나치게 많이 넣는 학생에게 "반주가 가락보다 더 바쁘면 가락이 들릴까요?"를 묻는다. 마지막 문항에서 짝과 두 성부를 이어 쳐 점검한다.',
          '성부에 맞게 가락을 지어 쳐요. 두 성부를 이어 쳐서 어울리는지 들어요.',
          mel('낮은솔', '높은도'),
          [
            { prompt: '가락 성부예요. 도로 시작해 솔로 끝나는 여섯 음 가락을 지어 보세요.', target: { compose: { length: 6, startOn: '도', endOn: '솔' } }, difficulty: 0.2 },
            { prompt: '반주 성부예요. 도·솔 두 음만 써서 네 음 반주를 지어 보세요.', target: { compose: { length: 4, only: ['도', '솔'] } }, difficulty: 0.15 },
            { prompt: '낮은 반주 성부예요. 낮은솔과 도만 써서 다섯 음 반주를 지어 보세요.', target: { compose: { length: 5, only: ['낮은솔', '도'] } }, difficulty: 0.25 },
            { prompt: '짝과 가락 성부와 반주 성부를 나누어 치고 해낸 것을 표시해요.', target: { compose: { length: 5 }, selfCheck: ['반주가 가락보다 작게 들렸어요', '두 성부가 같은 박에서 끝났어요'] }, difficulty: 0.2 },
          ]),
      ),
      wrap(
        '"우리 모둠 인원으로 성부를 어떻게 나누었나요?" 한 모둠이 성부 이름과 인원을 말하게 한다. 모둠 안에서 쉬는 친구가 있으면 "어떤 역할이라면 함께할 수 있을까요?"를 묻는다. 출구 2번에서 \'모두 가락\'을 고른 학생에게는 가락이 모두 같을 때와 나누었을 때의 소리 차이를 떠올리게 한다.',
        [
          { type: 'tool', tool: 'keyboard', options: { from: '도', to: '높은도' }, prompt: '미로 시작하고 도로 끝나는 다섯 음 가락 성부를 지어 보세요.', target: { compose: { length: 5, startOn: '미', endOn: '도' } }, difficulty: 0.25 },
          { type: 'choice', prompt: '박자 성부의 일은 무엇인가요?', options: ['박을 일정하게 지켜 줘요', '가락을 가려요', '혼자 쉬어요'], answer: 0, difficulty: 0.2, explain: '박자 성부는 모두가 같은 박에서 연주하도록 박을 지켜 줘요.' },
          { type: 'mood', prompt: '성부를 나누어 보니 어땠나요?' },
        ]),
    ],
    worksheet: {
      title: '우리 모둠 성부 나누기',
      items: [
        { type: 'table', prompt: '우리 모둠 인원을 성부에 나누어 쓰세요.', columns: ['성부', '악기', '몇 명'], cells: [['가락', '', ''], ['반주', '', ''], ['박자', '', '']] },
        { type: 'figure', prompt: '반주 성부를 듣고 계이름을 쓰세요.', tool: 'keyboard', wide: true, options: { from: '낮은솔', to: '높은도', printNames: true, printBoxes: 5 }, figures: [{ caption: '이 반주는 몇 가지 음으로 이루어졌나요? ___가지' }], answer: '낮은솔 도 낮은솔 도 낮은솔 — 2가지' },
        { type: 'choice', prompt: '박자 성부로 알맞은 악기에 ○ 하세요.', options: ['손북, 탬버린', '아무 소리도 안 나는 것'], answer: '손북, 탬버린' },
        { type: 'short', prompt: '우리 모둠에서 내가 맡고 싶은 성부와 까닭을 쓰세요.' },
      ],
      easy: {
        note: '가락은 이끌고, 반주는 받쳐 주고, 박자는 박을 지켜 줘요.',
        items: [
          { type: 'choice', prompt: '박을 지켜 주는 성부에 ○ 하세요.', options: ['박자 성부', '가락 성부'], answer: '박자 성부' },
          { type: 'choice', prompt: '같은 묶음을 되풀이하는 성부에 ○ 하세요.', options: ['반주 성부', '가락 성부'], answer: '반주 성부' },
          { type: 'table', prompt: '성부와 악기를 쓰세요.', columns: ['성부', '악기'], cells: [['가락', '']] },
          { type: 'short', prompt: '내가 맡을 성부를 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '성부와 역할이 쉬운 말로 주어지고 건반 이름이 보여요.',
      base: '인원에 맞게 성부를 스스로 나누고 가락을 지어요.',
      challenge: '인원이 달라지고 쓸 수 있는 음이 제한돼요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 성부를 잘 치는 사람 순서로만 나눈다 → 모두가 소리를 낼 수 있는 역할을 하나씩 찾게 한다. ② 반주를 가락보다 바쁘게 만든다 → 반주는 두세 음을 되풀이하는 것으로 줄이게 한다. ③ 인원이 적으면 성부도 줄여야 한다고 여긴다 → 한 사람이 번갈아 맡는 방법도 보여 준다.',
  });

  // ───────────────────────── 16차시 (확장) ─────────────────────────
  add(16, S4, {
    title: '예행연습 점검표로 연주 준비 확인하고 빠르기 올려 치기',
    objective: '예행연습에서 점검표 항목을 하나씩 확인하고, 연습한 가락의 빠르기를 단계적으로 올려 쳐 볼 수 있다.',
    illustration: {
      prompt: ILL('a paper clipboard with check boxes next to a tiny metronome and a stage curtain slightly open'),
      scene: scene(0, '예행연습 점검'),
    },
    stages: [
      intro(
        '"연주 전에 예행연습을 하는 까닭은 무엇일까요?" 학생에게 \'틀린 곳 찾기\', \'시간 재기\', \'긴장 풀기\'가 나오게 한다. 예행연습에서 꼭 점검할 것이 무엇일지 같이 정한다. "한 번 치면 끝나요"라고 하는 학생에게는 "점검표에서 하나도 빼먹지 않으려면 어떻게 하면 좋을까요?"라고 되묻는다.',
        '예행연습에서는 무엇을 점검해야 할까요? 점검표를 만들어 봅시다.',
      ),
      main(
        act(1, '예행연습 점검표 확인하기', 12, 'timer',
          '"예행연습에서는 연주 중에 하나, 연주 뒤에 하나 점검해요." 점검표 항목을 하나씩 읽고 해낸 것을 표시하게 한다. 점검표를 한 번에 몰아 표시하는 학생에게 "실제로 했는지 하나씩 말해 볼까요?"를 묻는다. 마지막 문항에서 연습이 부족한 항목을 하나 골라 다음 연습에 반영한다.',
          '점검표 항목을 하나씩 읽고 해낸 것만 표시해요.',
          plainLv({ title: '예행연습 점검표' }),
          [
            { prompt: '연주 전에 준비할 것을 하나씩 확인하고 표시해요.', toolOptions: { title: '연주 전 준비' }, target: { selfCheck: ['악기와 악보를 가지런히 놓았어요', '자리를 확인했어요', '시작 신호를 정했어요'] }, difficulty: 0.1 },
            { prompt: '연주 중에 지킨 것을 하나씩 확인하고 표시해요.', toolOptions: { title: '연주 중 점검' }, target: { selfCheck: ['신호를 보고 함께 시작했어요', '친구 소리를 들으며 쳤어요', '끝 박까지 박을 지켰어요'] }, difficulty: 0.1 },
            { prompt: '예행연습을 마치고 고칠 곳을 확인하고 표시해요.', toolOptions: { title: '연주 뒤 점검' }, target: { selfCheck: ['틀린 곳을 한 군데 이상 찾았어요', '고칠 방법을 한 가지 적었어요'] }, difficulty: 0.1 },
          ]),
        act(2, '빠르기를 단계로 올려 치기', 14, 'keyboard',
          '"빠르게 치면 틀리기 쉬워요. 한 번에 확 올리지 말고 조금씩 올려요." 같은 가락을 빠르기만 바꾸어 치게 한다. 빠르게 치다 음을 놓치는 학생에게 "한 단계 낮추어 정확히 쳐 보고 다시 올려 볼까요?"라고 제안한다. 마지막 문항에서 마지막 빠르기까지 올려 친 뒤 점검한다.',
          '같은 가락을 천천히부터 빠르게까지 단계로 쳐요. 음을 놓치지 않는 빠르기를 찾아요.',
          mel(),
          [
            { prompt: '천천히 들려주는 가락이에요. 듣고 따라 쳐 보세요.', toolOptions: { melody: ['도', '레', '미', '솔', '미', '레', '도'], tempo: 60 }, target: { notes: ['도', '레', '미', '솔', '미', '레', '도'] }, difficulty: 0.15 },
            { prompt: '같은 가락을 보통 빠르기로 들려줘요. 따라 쳐 보세요.', toolOptions: { melody: ['도', '레', '미', '솔', '미', '레', '도'], tempo: 92 }, target: { notes: ['도', '레', '미', '솔', '미', '레', '도'] }, difficulty: 0.2 },
            { prompt: '같은 가락을 빠르게 들려줘요. 놓치지 않고 따라 쳐 보세요.', toolOptions: { melody: ['도', '레', '미', '솔', '미', '레', '도'], tempo: 132 }, target: { notes: ['도', '레', '미', '솔', '미', '레', '도'] }, difficulty: 0.3 },
            { prompt: '내가 정확히 칠 수 있는 가장 빠른 빠르기를 찾고 해낸 것을 표시해요.', toolOptions: { melody: ['도', '레', '미', '솔', '미', '레', '도'] }, target: { notes: ['도', '레', '미', '솔', '미', '레', '도'], selfCheck: ['음을 놓치지 않는 빠르기를 찾았어요', '빠르기를 한 번에 확 올리지 않고 조금씩 올렸어요'] }, difficulty: 0.25 },
          ]),
      ),
      wrap(
        '"점검표 가운데 오늘 우리 모둠이 가장 부족했던 항목은 무엇인가요?" 두 모둠에게 항목과 까닭을 말하게 한다. \'다 잘했다\'고 하면 "다음 연주에서 더 좋아질 점은 없을까요?"로 구체화한다. 출구 2번에서 \'빠르게만 치면 된다\'고 고른 학생에게는 정확히 치는 것이 먼저임을 알려 준다.',
        [
          { type: 'tool', tool: 'keyboard', options: { from: '도', to: '높은도', melody: ['솔', '미', '레', '미', '솔', '솔', '솔'], tempo: 100 }, prompt: '다른 가락을 듣고 따라 쳐 보세요.', target: { notes: ['솔', '미', '레', '미', '솔', '솔', '솔'] }, difficulty: 0.25 },
          { type: 'choice', prompt: '빠르기를 올려 칠 때 가장 알맞은 방법은 무엇인가요?', options: ['한 번에 아주 빠르게', '천천히 시작해 조금씩 올리기', '아예 올리지 않기'], answer: 1, difficulty: 0.2, explain: '천천히 정확히 친 뒤 조금씩 올리면 음을 놓치지 않아요.' },
          { type: 'mood', prompt: '예행연습을 해 보니 어땠나요?' },
        ]),
    ],
    worksheet: {
      title: '예행연습 점검표',
      items: [
        { type: 'table', prompt: '예행연습을 하고 점검표를 채우세요.', columns: ['점검 항목', '했나요? (○, △, ×)'], cells: [['신호를 보고 함께 시작했어요', ''], ['친구 소리를 들으며 쳤어요', ''], ['끝 박까지 박을 지켰어요', '']] },
        { type: 'figure', prompt: '연습한 가락을 듣고 계이름을 쓰세요.', tool: 'keyboard', wide: true, options: { from: '도', to: '높은도', printNames: true, printBoxes: 7 }, figures: [{ caption: '내가 정확히 친 가장 빠른 빠르기는? ( 느림 · 보통 · 빠름 )' }], answer: '도 레 미 솔 미 레 도' },
        { type: 'choice', prompt: '빠르기를 올릴 때 알맞은 것에 ○ 하세요.', options: ['조금씩 올려요', '한 번에 확 올려요'], answer: '조금씩 올려요' },
        { type: 'short', prompt: '예행연습에서 새로 알게 된 고칠 곳과 고치는 방법을 쓰세요.' },
      ],
      easy: {
        note: '예행연습에서는 점검표를 하나씩 확인하고, 빠르기는 조금씩 올려요.',
        items: [
          { type: 'choice', prompt: '예행연습의 목적에 ○ 하세요.', options: ['틀린 곳 찾기', '남보다 빨리 치기'], answer: '틀린 곳 찾기' },
          { type: 'choice', prompt: '빠르기는 어떻게 올릴까요?', options: ['조금씩', '한 번에'], answer: '조금씩' },
          { type: 'table', prompt: '점검 항목을 하나 쓰고 표시하세요.', columns: ['점검 항목', '표시'], cells: [['', '']] },
          { type: 'short', prompt: '오늘 가장 잘한 점을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '점검표 항목이 쉬운 말로 적혀 있고 건반 이름이 보여요.',
      base: '점검표를 스스로 확인하고 빠르기를 단계로 올려 쳐요.',
      challenge: '빠른 빠르기에서 건반 이름 없이 귀로 따라 쳐요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 점검표를 한꺼번에 표시한다 → 항목마다 실제로 했는지 말하게 한다. ② 빠르게 치는 것이 잘하는 것이라고 여긴다 → 정확히 치는 빠르기를 찾는 것이 먼저임을 보인다. ③ 틀린 곳을 숨기려 한다 → 틀린 곳을 찾는 것이 연습의 목적임을 말해 준다.',
  });

  // ───────────────────────── 17차시 (핵심) ─────────────────────────
  add(17, S4, {
    title: '연습 일지에 날마다 한 일과 남은 과제 적기',
    objective: '연습 일지의 문장을 한 일과 남은 과제로 나누고, 오늘 연습한 내용을 두 부분으로 적을 수 있다.',
    illustration: {
      prompt: ILL('a paper practice diary open to a page with two columns, a pencil and a tiny metronome beside it'),
      scene: scene(1, '연습 일지 쓰기'),
    },
    stages: [
      intro(
        '"어제 한 연습을 오늘 정확히 기억하나요?" 학생 대답을 듣고 일지의 쓰임을 말한다. 일지가 있으면 오늘은 어디부터 이어야 하는지, 무엇이 아직 남았는지 바로 알 수 있다. "기억하면 되지요"라는 학생에게는 "열흘 동안 매일 한 연습을 모두 기억하기는 어려워요. 일지가 내 기억을 도와줘요"라고 말한다.',
        '연습 일지에는 어떤 것을 적어야 할까요?',
      ),
      main(
        act(1, '일지 문장을 한 일과 남은 과제로 나누기', 12, 'mindmap',
          '"한 일은 이미 한 것, 남은 과제는 다음에 할 것이에요." 일지 문장을 소리 내어 읽고 어느 쪽인지 나누게 한다. \'열심히 했다\' 같은 문장을 한 일에 넣는 학생에게 "무엇을 어떻게 했는지 알 수 있나요?"를 묻는다. 2번은 일지 한 줄에 두 부분이 모두 있는 문장을 가르는 문항이다.',
          '일지 문장을 한 일과 남은 과제로 나누어 놓아요.',
          cardsLv(),
          [
            { prompt: '연습 일지의 문장을 한 일과 남은 과제로 나누어 보세요.', toolOptions: { mode: 'sort', topic: '연습 일지', slots: ['한 일', '남은 과제'], cards: ['가 구간을 두 번 이어 쳤어요', '나 구간의 마지막 음을 자주 틀려요', '내일은 나 구간만 천천히 연습할래요', '박을 맞추며 한 번 쳐 보았어요'] }, target: { sort: { '한 일': ['가 구간을 두 번 이어 쳤어요', '박을 맞추며 한 번 쳐 보았어요'], '남은 과제': ['나 구간의 마지막 음을 자주 틀려요', '내일은 나 구간만 천천히 연습할래요'] } }, difficulty: 0.2 },
            { prompt: '일지 한 줄에서 한 일 부분과 남은 과제 부분을 이어 보세요.', toolOptions: { mode: 'match', topic: '한 줄 일지', slots: [{ id: 'j1', label: '한 일' }, { id: 'j2', label: '남은 과제' }], cards: ['둘째 구간 가락을 익혔어요', '셋째 구간은 아직 못 쳐요'] }, target: { match: { j1: '둘째 구간 가락을 익혔어요', j2: '셋째 구간은 아직 못 쳐요' } }, difficulty: 0.25 },
            { prompt: '일지에 쓰기 좋은 문장만 골라 보세요.', toolOptions: { mode: 'pick', topic: '좋은 일지', basket: '쓰기 좋은 문장', cards: ['가 구간 둘째 박을 천천히 두 번 쳤어요', '열심히 했어요', '다음에는 신호를 보며 시작할래요'] }, target: { pick: ['가 구간 둘째 박을 천천히 두 번 쳤어요', '다음에는 신호를 보며 시작할래요'] }, difficulty: 0.3 },
          ]),
        act(2, '오늘 연습을 치고 일지 쓰기', 14, 'keyboard',
          '"오늘 연습할 구간을 치고, 바로 일지에 한 일과 남은 과제를 적어요." 가락 듣기로 구간을 연습하고 마지막 문항에서 일지에 적을 내용을 점검한다. 쳐 놓고 일지를 쓰지 않는 학생에게 "지금 안 적으면 내일은 어디까지 했는지 알 수 있을까요?"를 묻는다.',
          '가락 듣기를 누르고 구간을 연습해요. 연습이 끝나면 일지에 적을 내용을 점검해요.',
          mel(),
          [
            { prompt: '오늘 연습할 구간이에요. 듣고 따라 쳐 보세요.', toolOptions: { melody: ['도', '미', '솔', '라', '솔', '미'], tempo: 84 }, target: { notes: ['도', '미', '솔', '라', '솔', '미'] }, difficulty: 0.15 },
            { prompt: '어려운 곳을 더 천천히 듣고 따라 쳐 보세요.', toolOptions: { melody: ['솔', '라', '솔', '미', '레', '도'], tempo: 66 }, target: { notes: ['솔', '라', '솔', '미', '레', '도'] }, difficulty: 0.2 },
            { prompt: '두 구간을 이어 친 뒤 일지에 적을 내용을 확인하고 표시해요.', toolOptions: { melody: ['도', '미', '솔', '라', '솔', '미', '솔', '라', '솔', '미', '레', '도'] }, target: { notes: ['도', '미', '솔', '라', '솔', '미', '솔', '라', '솔', '미', '레', '도'], selfCheck: ['한 일을 한 문장으로 적었어요', '남은 과제를 한 문장으로 적었어요'] }, difficulty: 0.3 },
          ]),
      ),
      wrap(
        '"일지에 적은 문장을 하나 읽어 볼까요? 한 일인가요, 남은 과제인가요?" 두 학생에게 읽게 하고 나머지 학생이 어느 쪽인지 맞히게 한다. \'열심히 했다\'만 쓴 학생에게는 무엇을 몇 번 어떻게 했는지 덧붙이게 한다. 출구 2번에서 \'일지는 쓰지 않아도\'를 고른 학생은 내일 이어 연습하는 장면을 떠올리게 한다.',
        [
          { type: 'tool', tool: 'keyboard', options: { from: '도', to: '높은도', melody: ['미', '솔', '솔', '미', '레', '도'], tempo: 84 }, prompt: '다른 구간을 듣고 따라 쳐 보세요.', target: { notes: ['미', '솔', '솔', '미', '레', '도'] }, difficulty: 0.25 },
          { type: 'choice', prompt: '\'내일은 둘째 마디만 천천히 연습한다\'는 일지의 어느 부분인가요?', options: ['한 일', '남은 과제', '쓸 필요 없는 말'], answer: 1, difficulty: 0.2, explain: '앞으로 할 일이니 남은 과제예요.' },
          { type: 'mood', prompt: '일지를 써 보니 어땠나요?' },
        ]),
    ],
    worksheet: {
      title: '내 연습 일지',
      items: [
        { type: 'table', prompt: '오늘 연습을 일지로 적으세요.', columns: ['날짜', '한 일', '남은 과제'], cells: [['', '', ''], ['', '', '']] },
        { type: 'figure', prompt: '오늘 연습한 구간을 듣고 계이름을 쓰세요.', tool: 'keyboard', wide: true, options: { from: '도', to: '높은도', printNames: true, printBoxes: 6 }, figures: [{ caption: '어려웠던 음에 ○ 하세요.' }], answer: '도 미 솔 라 솔 미' },
        { type: 'choice', prompt: '일지에 쓰기 좋은 문장에 ○ 하세요.', options: ['열심히 했어요', '둘째 구간을 천천히 두 번 쳤어요'], answer: '둘째 구간을 천천히 두 번 쳤어요' },
        { type: 'short', prompt: '내일 연습에서 가장 먼저 할 일을 한 문장으로 쓰세요.' },
      ],
      easy: {
        note: '일지에는 오늘 한 일과 앞으로 남은 과제를 나누어 적어요.',
        items: [
          { type: 'choice', prompt: '이미 한 일에 ○ 하세요.', options: ['가 구간을 쳤어요', '내일 나 구간을 칠 거예요'], answer: '가 구간을 쳤어요' },
          { type: 'choice', prompt: '남은 과제에 ○ 하세요.', options: ['가 구간을 쳤어요', '내일 나 구간을 칠 거예요'], answer: '내일 나 구간을 칠 거예요' },
          { type: 'table', prompt: '한 일과 남은 과제를 쓰세요.', columns: ['한 일', '남은 과제'], cells: [['', '']] },
          { type: 'short', prompt: '일지를 쓰면 좋은 점을 한 가지 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 놓으면 바로 맞고 틀림이 보이고, 가락 듣는 동안 건반이 빛나요.',
      base: '일지 문장을 스스로 나누고 연습 구간을 쳐요.',
      challenge: '함정 카드가 섞이고 건반 이름이 가려져요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 일지를 \'열심히 했다\'로 채운다 → 무엇을 몇 번 어떻게 했는지 덧붙이게 한다. ② 남은 과제를 쓰지 않는다 → 막힌 곳을 한 군데 찾아 쓰게 한다. ③ 한 일과 남은 과제를 섞는다 → 이미 한 일은 지난 일, 남은 과제는 앞으로 할 일로 구별하게 한다. 학생 이름은 쓰지 않는다.',
  });

  // ───────────────────────── 18차시 (연습) ─────────────────────────
  add(18, S4, {
    title: '일지에서 밀린 과제를 찾아 연습 계획 고치기',
    objective: '일주일치 연습 일지에서 밀린 과제를 찾아, 남은 날짜에 맞게 연습 계획을 고쳐 적을 수 있다.',
    illustration: {
      prompt: ILL('a week of paper diary pages with one page flagged and a small arrow moving a task to a later day'),
      scene: scene(2, '밀린 과제 고치기'),
    },
    stages: [
      intro(
        '"일지를 쓰다 보니 어제 하기로 한 과제가 아직 남아 있다면 어떻게 해야 할까요?" 학생이 말한 방법을 모아 \'오늘 먼저 하기\', \'날짜 옮기기\', \'과제 줄이기\'로 묶어 준다. "그냥 포기해요"라고 하는 학생에게는 "연주 날짜는 그대로인데 포기하면 어떻게 될까요?"로 되묻는다.',
        '일지에 밀린 과제가 보이면 계획을 어떻게 고칠까요?',
      ),
      main(
        act(1, '일지에서 밀린 과제와 고칠 방법 짝짓기', 12, 'mindmap',
          '"밀린 과제는 숨기지 않고 일지에 표시한 뒤 날짜를 옮기거나 줄이거나 먼저 해요." 일지 줄을 읽고 고치는 방법을 이어 보게 한다. 밀린 과제를 \'다음에 하면 돼\'라고만 쓰는 학생에게 "다음은 언제인가요?"를 묻는다. 3번은 남은 날짜가 적을 때의 판단을 연습한다.',
          '밀린 과제와 고칠 방법을 이어요.',
          cardsLv(),
          [
            { prompt: '밀린 과제와 고치는 방법을 이어 보세요.', toolOptions: { mode: 'match', topic: '밀린 과제 고치기', slots: [{ id: 'm1', label: '둘째 구간을 아직 못 익혔어요' }, { id: 'm2', label: '모둠 합치기 날이 연주 하루 전이에요' }, { id: 'm3', label: '셋째 구간이 너무 길어요' }], cards: ['오늘 둘째 구간부터 먼저 익혀요', '합치기 날을 이틀 앞당겨요', '셋째 구간을 둘로 나누어 연습해요'] }, target: { match: { m1: '오늘 둘째 구간부터 먼저 익혀요', m2: '합치기 날을 이틀 앞당겨요', m3: '셋째 구간을 둘로 나누어 연습해요' } }, difficulty: 0.2 },
            { prompt: '계획을 고치는 방법을 날짜 옮기기, 과제 줄이기, 먼저 하기로 나누어 보세요.', toolOptions: { mode: 'sort', topic: '고치는 방법', slots: ['날짜 옮기기', '과제 줄이기', '먼저 하기'], cards: ['목요일 연습을 토요일로 미뤄요', '이번 주에는 가락 하나만 익혀요', '밀린 구간부터 오늘 해요'] }, target: { sort: { '날짜 옮기기': ['목요일 연습을 토요일로 미뤄요'], '과제 줄이기': ['이번 주에는 가락 하나만 익혀요'], '먼저 하기': ['밀린 구간부터 오늘 해요'] } }, difficulty: 0.3 },
            { prompt: '밀린 과제를 대하는 알맞은 태도만 골라 보세요.', toolOptions: { mode: 'pick', topic: '밀린 과제', basket: '알맞은 태도', cards: ['일지에 밀렸다고 솔직히 적어요', '밀린 까닭을 한 가지 적어요', '밀린 과제는 없는 셈 쳐요'] }, target: { pick: ['일지에 밀렸다고 솔직히 적어요', '밀린 까닭을 한 가지 적어요'] }, difficulty: 0.25 },
          ]),
        act(2, '밀린 구간을 박에 맞춰 다시 채우기', 14, 'keyboard',
          '"밀린 구간은 박부터 다시 맞추면 쉬워요." 리듬 블록으로 구간의 박을 먼저 정리한다. 박이 맞지 않을 때 "몇 박이 모자라거나 넘치는지 마디 띠에서 읽어 볼까요?"를 묻는다. 마지막 문항에서는 밀린 구간을 마친 뒤 일지에 적을 한 줄을 학생이 직접 말해 보게 한다.',
          '밀린 구간의 박을 리듬 블록으로 맞추어 다시 짜 보아요.',
          rhy(4, 2),
          [
            { prompt: '밀린 첫째 구간이에요. 4분음표만으로 두 마디를 4박씩 채워 보세요.', toolOptions: { mode: 'rhythm', meter: 4, measures: 2 }, target: { beats: true, use: ['q'], rests: 0 }, difficulty: 0.1 },
            { prompt: '둘째 구간이에요. 2분음표와 4분쉼표를 넣어 두 마디를 4박씩 채워 보세요.', toolOptions: { mode: 'rhythm', meter: 4, measures: 2 }, target: { beats: true, use: ['h'], rests: 1 }, difficulty: 0.25 },
            { prompt: '셋째 구간이에요. 8분음표를 넣어 두 마디를 3박씩 채워 보세요.', toolOptions: { mode: 'rhythm', meter: 3, measures: 2, blocks: ['q', 'e', 'h', 'qr', 'dh'] }, target: { beats: true, use: ['e'] }, difficulty: 0.3 },
            { prompt: '밀린 구간을 다시 친 뒤 일지에 적을 것을 확인하고 표시해요.', toolOptions: { mode: 'rhythm', meter: 4, measures: 2 }, target: { beats: true, selfCheck: ['밀린 구간을 오늘 마쳤어요', '일지에 오늘 한 일을 적었어요'] }, difficulty: 0.2 },
          ]),
      ),
      wrap(
        '"밀린 과제를 발견했을 때 가장 먼저 할 일은 무엇이었나요?" 두 학생에게 말하게 한다. \'숨기기\'나 \'모른 척\'이 나오면 "나중에 합치는 날 어떤 일이 생길까요?"를 묻는다. 출구 2번에서 \'없는 셈\'을 고른 학생에게는 연주 날짜가 가까워지는 장면을 떠올리게 한다.',
        [
          { type: 'tool', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 2, blocks: ['q', 'e', 'h', 'qr', 'dh'] }, prompt: '밀린 구간을 점2분음표를 넣어 두 마디를 4박씩 채워 보세요.', target: { beats: true, use: ['dh'] }, difficulty: 0.3 },
          { type: 'choice', prompt: '목요일에 하기로 한 연습을 못 했어요. 가장 알맞은 것은 무엇인가요?', options: ['없는 셈 친다', '일지에 적고 날짜를 옮긴다', '모두에게 숨긴다'], answer: 1, difficulty: 0.2, explain: '밀린 일을 일지에 적고 날짜를 옮겨야 연주 전에 다시 챙길 수 있어요.' },
          { type: 'mood', prompt: '밀린 과제를 고쳐 보니 어땠나요?' },
        ]),
    ],
    worksheet: {
      title: '밀린 과제 고치기',
      items: [
        { type: 'table', prompt: '일지의 한 줄에서 밀린 과제를 찾아 고치는 방법을 쓰세요.', columns: ['밀린 과제', '고치는 방법'], cells: [['', ''], ['', '']] },
        { type: 'figure', prompt: '밀린 구간의 마디마다 몇 박인지 세어 쓰세요.', tool: 'keyboard', wide: true, options: { mode: 'rhythm', meter: 4, measures: 2 }, figures: [{ state: { rhythm: ['h', 'q', 'q', 'q', 'q', 'h'] }, caption: '첫째 마디 ___박, 둘째 마디 ___박' }], answer: '첫째 마디 4박, 둘째 마디 4박' },
        { type: 'choice', prompt: '밀린 과제를 대하는 알맞은 태도에 ○ 하세요.', options: ['솔직히 일지에 적는다', '없는 셈 친다'], answer: '솔직히 일지에 적는다' },
        { type: 'short', prompt: '내 연습 계획에서 날짜를 옮겨야 할 연습이 있다면 언제로 옮길지 쓰세요.' },
      ],
      easy: {
        note: '밀린 과제는 숨기지 않고 일지에 적고 날짜를 옮기거나 줄여요.',
        items: [
          { type: 'choice', prompt: '밀린 과제에 알맞은 행동에 ○ 하세요.', options: ['일지에 적는다', '모른 척한다'], answer: '일지에 적는다' },
          { type: 'choice', prompt: '날짜를 옮긴다는 것은 무엇일까요?', options: ['다른 날로 미룬다', '아예 안 한다'], answer: '다른 날로 미룬다' },
          { type: 'table', prompt: '밀린 과제와 방법을 쓰세요.', columns: ['과제', '방법'], cells: [['', '']] },
          { type: 'short', prompt: '밀린 과제를 해결한 경험을 한 문장으로 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 놓으면 바로 맞고 틀림이 보이고, 마디 띠에 박 수가 보여요.',
      base: '밀린 과제 해결 방법을 스스로 나누고 박을 맞춰요.',
      challenge: '함정 카드가 섞이고 8분쉼표까지 블록이 늘어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 밀린 과제를 숨기려 한다 → 솔직히 적는 것이 계획을 고치는 첫걸음임을 말한다. ② 모든 연습을 연주 하루 전으로 몰아 둔다 → 날짜를 나누어 옮기게 한다. ③ 과제를 줄이는 것을 포기로 여긴다 → 줄이면서 핵심 구간은 지킨다는 것을 보인다.',
  });

  // ───────────────────────── 19차시 (확장) ─────────────────────────
  add(19, S4, {
    title: '연주를 마친 뒤 준비 과정의 아쉬웠던 점 고르기',
    objective: '연주를 마친 뒤 준비 과정을 계획, 연습, 당일로 나누어 아쉬웠던 점을 한 가지 골라 까닭과 함께 말할 수 있다.',
    illustration: {
      prompt: ILL('a paper timeline of a performance preparation with three little flags on plan, practice and show day'),
      scene: scene(0, '준비 과정 돌아보기'),
    },
    stages: [
      intro(
        '"연주가 끝난 뒤 \'잘했다, 못했다\'만 말하면 다음에는 어떻게 달라질 수 있을까요?" 학생에게 결과보다 준비 과정을 돌아보자고 제안한다. 계획, 연습, 당일 세 단계를 칠판에 적고 각 단계에서 아쉬웠던 일이 있었는지 묻는다. "연주만 잘하면 돼요"라는 학생에게는 "연주 날 실수가 어디서 시작되었는지 거슬러 올라가 볼까요?"라고 말한다.',
        '연주를 마치고 준비 과정을 돌아보면 어떤 아쉬움이 보일까요?',
      ),
      main(
        act(1, '아쉬운 점을 준비 단계별로 나누기', 12, 'mindmap',
          '"아쉬운 점은 계획, 연습, 당일 중 어디에서 생겼는지 찾아야 고칠 수 있어요." 카드를 읽고 단계별로 나누게 한다. 아쉬움을 \'긴장해서\'로만 정리하는 학생에게 "긴장하지 않으려면 어떤 준비가 더 필요했을까요?"를 묻는다. 3번은 아쉬움 가운데 가장 먼저 고칠 한 가지를 고르는 판단이다.',
          '아쉬운 점을 계획, 연습, 당일로 나누어 놓아요.',
          cardsLv(),
          [
            { prompt: '아쉬웠던 점을 준비 단계별로 나누어 보세요.', toolOptions: { mode: 'sort', topic: '아쉬운 점', slots: ['계획', '연습', '당일'], cards: ['연습 날짜를 너무 늦게 정했어요', '둘째 구간을 한 번밖에 못 쳤어요', '신호를 놓쳐 늦게 시작했어요'] }, target: { sort: { 계획: ['연습 날짜를 너무 늦게 정했어요'], 연습: ['둘째 구간을 한 번밖에 못 쳤어요'], 당일: ['신호를 놓쳐 늦게 시작했어요'] } }, difficulty: 0.2 },
            { prompt: '아쉬운 점과 그 까닭을 이어 보세요.', toolOptions: { mode: 'match', topic: '아쉬움의 까닭', slots: [{ id: 'q1', label: '박이 빨라졌어요' }, { id: 'q2', label: '한 성부가 안 들렸어요' }], cards: ['박을 함께 세며 연습하지 못했어요', '세기를 맞추는 연습을 안 했어요'] }, target: { match: { q1: '박을 함께 세며 연습하지 못했어요', q2: '세기를 맞추는 연습을 안 했어요' } }, difficulty: 0.25 },
            { prompt: '가장 먼저 고쳐야 할 아쉬움을 고르는 기준으로 알맞은 것만 골라 보세요.', toolOptions: { mode: 'pick', topic: '먼저 고칠 것', basket: '알맞은 기준', cards: ['연주에 가장 큰 영향을 준 것', '다음 연습에서 바로 고칠 수 있는 것', '가장 쉬운 것만'] }, target: { pick: ['연주에 가장 큰 영향을 준 것', '다음 연습에서 바로 고칠 수 있는 것'] }, difficulty: 0.3 },
          ]),
        act(2, '연주 기록 가락 다시 쳐 보며 아쉬움 찾기', 14, 'keyboard',
          '"연주했던 가락을 다시 쳐 보면서 어디가 어려웠는지 찾아봐요." 먼저 가락을 듣고 따라 치며 쉬운 곳과 어려운 곳을 구별한다. 어려운 곳이 어디인지 말하지 못하는 학생에게 "어느 음에서 손이 멈췄나요?"를 묻는다. 마지막 문항에서는 아쉬운 곳을 한 군데 골라 일지에 무엇을 적을지 학생이 직접 말해 보게 한다.',
          '연주했던 가락을 다시 쳐 보고 어려웠던 곳을 한 군데 찾아요.',
          mel(),
          [
            { prompt: '연주했던 앞부분이에요. 듣고 따라 쳐 보세요.', toolOptions: { melody: ['솔', '솔', '라', '솔', '미', '솔'], tempo: 88 }, target: { notes: ['솔', '솔', '라', '솔', '미', '솔'] }, difficulty: 0.15 },
            { prompt: '연주했던 뒷부분이에요. 듣고 따라 쳐 보세요.', toolOptions: { melody: ['미', '솔', '라', '높은도', '라', '솔'], tempo: 88 }, target: { notes: ['미', '솔', '라', '높은도', '라', '솔'] }, difficulty: 0.25 },
            { prompt: '어려웠던 곳을 한 군데 찾아 천천히 두 번 치고 해낸 것을 표시해요.', toolOptions: { melody: ['미', '솔', '라', '높은도', '라', '솔'] }, target: { notes: ['미', '솔', '라', '높은도', '라', '솔'], selfCheck: ['어려웠던 음이나 마디를 찾았어요', '그곳이 어려웠던 까닭을 한 가지 말했어요'] }, difficulty: 0.2 },
          ]),
      ),
      wrap(
        '"오늘 찾은 아쉬운 점은 어느 단계에서 생겼나요?" 두 학생에게 단계와 까닭을 말하게 한다. \'긴장해서\'만 말하면 "그 전에 어떤 연습이 더 있었다면 덜 긴장했을까요?"를 묻는다. 출구 2번에서 \'연주만 보면 된다\'를 고른 학생에게는 연주 모습이 준비의 결과임을 알려 준다.',
        [
          { type: 'tool', tool: 'keyboard', options: { from: '도', to: '높은도', melody: ['라', '솔', '미', '솔', '라', '라'], tempo: 88 }, prompt: '다른 대목을 듣고 따라 쳐 보세요.', target: { notes: ['라', '솔', '미', '솔', '라', '라'] }, difficulty: 0.25 },
          { type: 'choice', prompt: '연주에서 한 성부가 안 들렸어요. 어느 준비 단계를 먼저 돌아볼까요?', options: ['연습에서 세기를 맞췄는지', '악기 값이 얼마인지', '친구 이름이 무엇인지'], answer: 0, difficulty: 0.2, explain: '세기를 맞추는 연습을 했는지 돌아보면 원인을 찾을 수 있어요.' },
          { type: 'mood', prompt: '준비 과정을 돌아보니 어땠나요?' },
        ]),
    ],
    worksheet: {
      title: '준비 과정 돌아보기',
      items: [
        { type: 'table', prompt: '준비 단계마다 아쉬웠던 점이 있으면 쓰세요.', columns: ['단계', '아쉬웠던 점'], cells: [['계획', ''], ['연습', ''], ['당일', '']] },
        { type: 'figure', prompt: '연주했던 가락을 듣고 계이름을 쓰세요.', tool: 'keyboard', wide: true, options: { from: '도', to: '높은도', printNames: true, printBoxes: 6 }, figures: [{ caption: '어려웠던 음에 ○ 하세요.' }], answer: '미 솔 라 높은도 라 솔' },
        { type: 'choice', prompt: '아쉬운 점을 돌아볼 때 알맞은 태도에 ○ 하세요.', options: ['준비 과정에서 원인을 찾는다', '긴장했다고만 말한다'], answer: '준비 과정에서 원인을 찾는다' },
        { type: 'short', prompt: '가장 아쉬웠던 점 한 가지와, 어떤 준비가 있었다면 달라졌을지 쓰세요.' },
      ],
      easy: {
        note: '아쉬운 점은 계획, 연습, 당일 가운데 어디에서 생겼는지 찾아요.',
        items: [
          { type: 'choice', prompt: '연습에서 생긴 아쉬움에 ○ 하세요.', options: ['둘째 구간을 한 번밖에 못 쳤어요', '날씨가 흐렸어요'], answer: '둘째 구간을 한 번밖에 못 쳤어요' },
          { type: 'choice', prompt: '돌아볼 때 가장 먼저 할 일에 ○ 하세요.', options: ['원인 찾기', '탓하기'], answer: '원인 찾기' },
          { type: 'table', prompt: '아쉬운 점과 단계를 쓰세요.', columns: ['단계', '아쉬운 점'], cells: [['', '']] },
          { type: 'short', prompt: '이번 연주에서 가장 잘한 점을 한 가지 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 놓으면 바로 맞고 틀림이 보이고, 건반 이름이 보여요.',
      base: '아쉬운 점을 스스로 나누고 가락을 다시 쳐서 점검해요.',
      challenge: '함정 카드가 섞이고 건반 이름이 가려져요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 아쉬움을 사람 탓으로 돌린다 → 소리와 박, 준비 단계를 기준으로 말하게 한다. ② 아쉬움을 \'긴장\'으로만 말한다 → 긴장을 줄이는 준비가 무엇이었을지 묻는다. ③ 결과만 보고 준비는 보지 않는다 → 계획, 연습, 당일 세 단계에서 하나씩 찾게 한다. 개인 평가에 쓰지 않는다.',
  });

  // ───────────────────────── 20차시 (확장) ─────────────────────────
  add(20, S4, {
    title: '아쉬움을 다음 연주 계획 한 줄로 바꾸어 쓰기',
    objective: '찾은 아쉬움을 다음 연주 계획에 넣을 한 줄 문장으로 바꾸어 적고, 고친 계획대로 가락을 다시 쳐 볼 수 있다.',
    illustration: {
      prompt: ILL('a paper arrow bending from a small wobbly note toward a neatly planned calendar square'),
      scene: scene(1, '아쉬움을 계획으로'),
    },
    stages: [
      intro(
        '"아쉬움은 말하고 끝내면 사라질까요, 아니면 계획이 되어야 달라질까요?" 학생 대답을 듣고 아쉬움을 \'다음에 할 일\' 한 줄로 바꾸는 법을 알려 준다. 한 줄에는 언제, 무엇을, 얼마나가 들어가야 한다. "다음에는 잘할게요"라고만 하는 학생에게는 "잘하려면 구체적으로 무엇을 바꿀까요?"를 되묻는다.',
        '아쉬운 점을 다음 연주 계획의 한 줄로 어떻게 바꿀까요?',
      ),
      main(
        act(1, '아쉬움을 계획 문장으로 바꾸어 이어 보기', 12, 'mindmap',
          '"좋은 계획은 언제, 무엇을, 얼마나가 들어 있어요." 아쉬움과 계획 문장을 이어 보게 한다. \'열심히 연습할게요\'처럼 구체적이지 않은 문장을 계획으로 고르는 학생에게 "이 문장만 보고 다음 주에 무엇을 하면 되나요?"를 묻는다. 3번은 한 아쉬움에서 알맞은 계획 문장만 고르는 문항이다.',
          '아쉬운 점과 알맞은 계획 문장을 이어요.',
          cardsLv(),
          [
            { prompt: '아쉬운 점과 알맞은 계획을 이어 보세요.', toolOptions: { mode: 'match', topic: '아쉬움을 계획으로', slots: [{ id: 'n1', label: '시작이 어긋났어요' }, { id: 'n2', label: '낮은 줄이 너무 커서 묻혔어요' }, { id: 'n3', label: '연습을 하루에 몰아서 했어요' }], cards: ['다음에는 시작 신호를 두 번 맞춰 보고 들어가요', '다음 연습에서 낮은 줄 세기를 한 단계 줄여요', '연습을 세 날로 나누어 날마다 한 구간씩 해요'] }, target: { match: { n1: '다음에는 시작 신호를 두 번 맞춰 보고 들어가요', n2: '다음 연습에서 낮은 줄 세기를 한 단계 줄여요', n3: '연습을 세 날로 나누어 날마다 한 구간씩 해요' } }, difficulty: 0.25 },
            { prompt: '계획 문장에 들어가야 하는 것을 골라 보세요.', toolOptions: { mode: 'pick', topic: '계획 문장 요소', basket: '들어가야 하는 것', cards: ['언제 할지', '무엇을 할지', '누가 잘못했는지'] }, target: { pick: ['언제 할지', '무엇을 할지'] }, difficulty: 0.2 },
            { prompt: '구체적인 계획과 막연한 계획으로 나누어 보세요.', toolOptions: { mode: 'sort', topic: '계획의 구체성', slots: ['구체적인 계획', '막연한 계획'], cards: ['수요일마다 박을 세며 한 번 이어 쳐요', '다음 연습 첫 5분은 시작 신호 연습이에요', '열심히 할 거예요', '잘하도록 노력해요'] }, target: { sort: { '구체적인 계획': ['수요일마다 박을 세며 한 번 이어 쳐요', '다음 연습 첫 5분은 시작 신호 연습이에요'], '막연한 계획': ['열심히 할 거예요', '잘하도록 노력해요'] } }, difficulty: 0.3 },
          ]),
        act(2, '고친 계획대로 가락 다시 지어 치기', 14, 'keyboard',
          '"계획을 세웠으면 한 가지를 바로 해 보아요." 시작 신호를 두 번 맞춰 보거나 세기를 줄이는 계획을 가락으로 연습한다. 계획을 말만 하고 바로 해 보지 않는 학생에게 "지금 한 번 해 보면 계획이 맞는지 알 수 있어요"를 말한다. 마지막 문항에서는 고친 뒤 소리가 어떻게 달라졌는지 학생이 직접 말해 보게 한다.',
          '고친 계획대로 가락을 지어 치거나 따라 치며 확인해요.',
          mel(),
          [
            { prompt: '시작을 맞추는 계획이에요. 신호 가락을 듣고 따라 쳐 보세요.', toolOptions: { melody: ['솔', '미', '도'], tempo: 80 }, target: { notes: ['솔', '미', '도'] }, difficulty: 0.1 },
            { prompt: '고친 계획으로 연주할 가락이에요. 듣고 따라 쳐 보세요.', toolOptions: { melody: ['도', '미', '솔', '미', '라', '솔'], tempo: 90 }, target: { notes: ['도', '미', '솔', '미', '라', '솔'] }, difficulty: 0.2 },
            { prompt: '도로 시작해 도로 끝나는 여섯 음 새 가락을 지어 보세요. 다음 연주에 쓸 수 있어요.', target: { compose: { length: 6, startOn: '도', endOn: '도' } }, difficulty: 0.25 },
            { prompt: '고친 계획을 한 가지 해 본 뒤 해낸 것을 표시해요.', target: { compose: { length: 5 }, selfCheck: ['계획한 한 가지를 바로 해 보았어요', '고친 뒤 소리가 어떻게 달라졌는지 말했어요'] }, difficulty: 0.2 },
          ]),
      ),
      wrap(
        '"내가 쓴 계획 한 줄을 읽어 볼까요? 언제, 무엇을 하는지 들어 있나요?" 세 학생에게 한 줄씩 읽게 한다. \'열심히 할래요\'처럼 막연하면 "누가 읽어도 따라 할 수 있게 고쳐 볼까요?"를 묻는다. 출구 2번에서 \'아쉬움은 말로만\'을 고른 학생에게는 일지에 한 줄을 적어 다음 연습에 쓰는 일을 떠올리게 한다.',
        [
          { type: 'tool', tool: 'keyboard', options: { from: '도', to: '높은도' }, prompt: '솔로 시작해 솔로 끝나는 다섯 음 가락을 지어 보세요.', target: { compose: { length: 5, startOn: '솔', endOn: '솔' } }, difficulty: 0.25 },
          { type: 'choice', prompt: '아쉬움을 계획으로 바꾼 가장 좋은 문장은 어느 것인가요?', options: ['잘할게요', '다음 주 수요일에 둘째 구간만 세 번 천천히 쳐요', '노력할게요'], answer: 1, difficulty: 0.2, explain: '언제 무엇을 하는지가 들어 있어야 계획이에요.' },
          { type: 'mood', prompt: '계획을 한 줄로 써 보니 어땠나요?' },
        ]),
    ],
    worksheet: {
      title: '다음 연주 계획 한 줄',
      items: [
        { type: 'table', prompt: '아쉬웠던 점을 다음 연주 계획으로 바꾸어 쓰세요.', columns: ['아쉬웠던 점', '다음 연주 계획 한 줄'], cells: [['', ''], ['', '']] },
        { type: 'figure', prompt: '고친 계획으로 연주할 가락을 듣고 계이름을 쓰세요.', tool: 'keyboard', wide: true, options: { from: '도', to: '높은도', printNames: true, printBoxes: 6 }, figures: [{ caption: '다음에는 어디에 가장 신경 쓸까요? ___' }], answer: '도 미 솔 미 라 솔' },
        { type: 'choice', prompt: '계획에 꼭 필요한 것에 ○ 하세요.', options: ['언제, 무엇을', '누구 탓인지'], answer: '언제, 무엇을' },
        { type: 'short', prompt: '이 단원에서 배운 연주 준비 방법 가운데 앞으로도 쓰고 싶은 것을 한 가지 쓰세요.' },
      ],
      easy: {
        note: '계획은 언제, 무엇을 하는지 구체적으로 한 줄로 써요.',
        items: [
          { type: 'choice', prompt: '구체적인 계획에 ○ 하세요.', options: ['수요일에 둘째 구간을 세 번 쳐요', '열심히 할래요'], answer: '수요일에 둘째 구간을 세 번 쳐요' },
          { type: 'choice', prompt: '계획 문장에 필요한 것에 ○ 하세요.', options: ['언제 할지', '누구 탓인지'], answer: '언제 할지' },
          { type: 'table', prompt: '계획 한 줄을 쓰세요.', columns: ['언제', '무엇을'], cells: [['', '']] },
          { type: 'short', prompt: '오늘 정한 계획을 한 문장으로 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 놓으면 바로 맞고 틀림이 보이고, 건반 이름이 보여요.',
      base: '아쉬움과 계획을 스스로 이어 보고 가락을 지어요.',
      challenge: '막연한 문장이 섞이고 가락 짓기 조건이 늘어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① \'열심히 할게요\' 같은 막연한 다짐을 계획으로 쓴다 → 언제 무엇을 몇 번 하는지 넣게 한다. ② 계획을 너무 많이 세운다 → 가장 먼저 고칠 한 가지로 줄이게 한다. ③ 계획이 일지와 이어지지 않는다 → 계획을 일지의 남은 과제 칸에 옮겨 적게 한다.',
  });

  // ───────────────────────── 21차시 (핵심) ─────────────────────────
  add(21, S3, {
    title: '두 소리를 차례로 눌러 어울리는 쌍과 부딪히는 쌍 가르기',
    objective: '두 음을 차례로 누르고 들어, 어울리는 쌍과 부딪혀 들리는 쌍을 가르고 그 까닭을 말할 수 있다.',
    illustration: {
      prompt: ILL('two paper bells of different sizes ringing together, one pair gently blending and another pair visibly clashing with small zigzag lines'),
      scene: scene(2, '어울릴까, 부딪힐까?'),
    },
    stages: [
      intro(
        '"두 소리를 함께 내면 언제나 잘 어울릴까요?" 건반 두 개를 시연 단추로 차례로 들려주고 "마음이 편안한가요, 낯선가요?"를 묻는다. 두 소리가 함께 나는 합주에서는 어울리는 자리와 부딪히는 자리가 번갈아 있음을 알려 준다. "소리가 많을수록 풍성해요"라고 하는 학생에게는 "소리를 많이 겹치면 늘 좋을까요? 부딪히는 두 소리는 어떻게 들릴까요?"로 되묻는다.',
        '두 소리가 만났을 때 어울리는 자리와 부딪히는 자리는 어떻게 다를까요?',
        { tool: 'keyboard', options: { from: '도', to: '높은도' }, sequence: [{ notes: ['도', '솔'] }, { notes: ['도', '레'] }] },
      ),
      main(
        act(1, '두 음을 차례로 눌러 어울림 느끼기', 14, 'keyboard',
          '"두 음을 이어서 눌러 들어 보세요. 마음이 편안한가요, 낯설고 날카로운가요?" 도와 솔처럼 편안하게 들리는 쌍과 도와 레, 도와 시처럼 부딪혀 들리는 쌍이 있다. 듣는 느낌은 사람마다 조금 다를 수 있으니 \'일반적으로 그렇게 들려요\'라고 말해 준다. 3번에서는 부딪힘이 곡 안에서 쓰이는 까닭을 이야기한다.',
          '두 음을 차례로 눌러 들어요. 어울리는 쌍과 부딪히는 쌍을 귀로 찾아요.',
          mel(),
          [
            { prompt: '도와 솔을 차례로 눌러 보세요. 편안하게 어울려 들려요.', toolOptions: { melody: ['도', '솔'], tempo: 60 }, target: { notes: ['도', '솔'] }, difficulty: 0.1 },
            { prompt: '도와 레를 차례로 눌러 보세요. 가까이 붙어서 부딪혀 들려요.', toolOptions: { melody: ['도', '레'], tempo: 60 }, target: { notes: ['도', '레'] }, difficulty: 0.15 },
            { prompt: '어울리는 쌍, 부딪히는 쌍, 어울리는 쌍 차례로 눌러 보세요.', toolOptions: { melody: ['도', '미', '도', '시', '도', '솔'], tempo: 66 }, target: { notes: ['도', '미', '도', '시', '도', '솔'] }, difficulty: 0.3,
              predict: { q: '부딪혀 들리는 소리는 합주에서 없는 편이 나을까요?', options: ['없어야 해요', '곳에 따라 쓰이기도 해요', '잘 모르겠어요'], answer: 1 },
              conclude: '부딪힘이 있으면 곧이어 오는 어울림이 더 편안하게 느껴지기도 해요.' },
          ]),
        act(2, '어울리는 쌍과 부딪히는 쌍 가르기', 12, 'mindmap',
          '"어울리는 쌍은 마음이 편안하고, 부딪히는 쌍은 낯설거나 날카롭게 들려요." 방금 눌러 본 쌍을 떠올려 나누게 한다. 부딪히는 쌍을 \'틀린 소리\'라고 말하는 학생에게 "틀린 소리가 아니라 긴장을 만드는 소리예요. 곡에서는 쓰이기도 해요"를 말해 준다. 3번은 두 성부로 된 가락을 듣고 어울리는 자리와 부딪히는 자리를 짚는 문항이다.',
          '두 음의 쌍을 어울리는 쌍과 부딪히는 쌍으로 나누어요.',
          cardsLv(),
          [
            { prompt: '두 음의 쌍을 어울리는 쌍과 부딪히는 쌍으로 나누어 보세요.', toolOptions: { mode: 'sort', topic: '음의 쌍', slots: ['어울리는 쌍', '부딪히는 쌍'], cards: ['도와 솔', '도와 미', '도와 레', '도와 시'] }, target: { sort: { '어울리는 쌍': ['도와 솔', '도와 미'], '부딪히는 쌍': ['도와 레', '도와 시'] } }, difficulty: 0.25 },
            { prompt: '들은 느낌과 쌍을 이어 보세요.', toolOptions: { mode: 'match', topic: '느낌과 쌍', slots: [{ id: 'f1', label: '마음이 편안해요' }, { id: 'f2', label: '낯설고 날카로워요' }], cards: ['도와 솔', '도와 시'] }, target: { match: { f1: '도와 솔', f2: '도와 시' } }, difficulty: 0.3 },
            { prompt: '부딪힘에 대해 알맞은 말만 골라 보세요.', toolOptions: { mode: 'pick', topic: '부딪힘 이야기', basket: '알맞은 말', cards: ['틀린 소리가 아니라 긴장을 만들어요', '어울림이 이어지면 더 편안하게 느껴요', '합주에서 절대 쓰면 안 돼요'] }, target: { pick: ['틀린 소리가 아니라 긴장을 만들어요', '어울림이 이어지면 더 편안하게 느껴요'] }, difficulty: 0.3 },
          ]),
      ),
      wrap(
        '"두 소리가 어울릴 때와 부딪힐 때, 어떻게 달랐나요?" 두 학생에게 느낌을 말로 설명하게 한다. 사람마다 느낌이 조금 다를 수 있음을 인정하되 어울림과 부딪힘을 구별하는 낱말을 쓰게 한다. 출구 2번에서 \'부딪히면 틀린 것\'을 고른 학생에게는 곡 안에서 긴장과 풀림이 번갈아 오는 장면을 다시 들려준다.',
        [
          { type: 'tool', tool: 'keyboard', options: { from: '도', to: '높은도', melody: ['도', '솔', '도', '레', '도', '미'], tempo: 66 }, prompt: '쌍이 번갈아 나오는 가락을 듣고 따라 쳐 보세요.', target: { notes: ['도', '솔', '도', '레', '도', '미'] }, difficulty: 0.3 },
          { type: 'choice', prompt: '도와 시를 이어 눌렀을 때 일반적으로 어떻게 들릴까요?', options: ['매우 편안해요', '부딪혀 낯설게 들려요', '들리지 않아요'], answer: 1, difficulty: 0.2, explain: '도와 시는 가까이 붙어 있어 부딪혀 들리는 편이에요.' },
          { type: 'mood', prompt: '두 소리를 비교해 들어 보니 어땠나요?' },
        ]),
    ],
    worksheet: {
      title: '어울림과 부딪힘',
      items: [
        { type: 'table', prompt: '두 음 쌍을 들어 보고 느낌을 쓰세요.', columns: ['쌍', '편안한가요, 부딪히나요?'], cells: [['도와 솔', ''], ['도와 레', ''], ['도와 미', ''], ['도와 시', '']] },
        { type: 'figure', prompt: '선생님이 들려주는 쌍을 듣고 건반 아래에 계이름을 쓰세요.', tool: 'keyboard', wide: true, options: { from: '도', to: '높은도', printNames: true, printBoxes: 4 }, figures: [{ caption: '두 쌍 가운데 부딪히는 쌍에 ○ 하세요.' }], answer: '도 솔 / 도 레 — 도와 레에 ○' },
        { type: 'choice', prompt: '부딪히는 소리에 대해 맞는 말에 ○ 하세요.', options: ['틀린 소리예요', '긴장을 만드는 소리예요'], answer: '긴장을 만드는 소리예요' },
        { type: 'short', prompt: '노래에서 부딪힘 뒤에 어울림이 오면 어떤 느낌일지 상상해 쓰세요.' },
      ],
      easy: {
        note: '어울리는 쌍은 편안하게, 부딪히는 쌍은 낯설게 들려요. 부딪힘은 틀린 소리가 아니에요.',
        items: [
          { type: 'choice', prompt: '도와 솔은 어떻게 들리나요?', options: ['편안해요', '날카로워요'], answer: '편안해요' },
          { type: 'choice', prompt: '부딪히는 쌍에 ○ 하세요.', options: ['도와 레', '도와 솔'], answer: '도와 레' },
          { type: 'table', prompt: '쌍과 느낌을 쓰세요.', columns: ['쌍', '느낌'], cells: [['도와 미', '']] },
          { type: 'short', prompt: '들어 보고 마음에 든 쌍을 하나 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '쌍을 듣는 동안 건반이 빛나고, 카드를 놓으면 바로 맞고 틀림이 보여요.',
      base: '쌍의 느낌을 스스로 듣고 가르고 확인해요.',
      challenge: '계이름 없이 귀로만 쌍을 찾고 함정 카드가 섞여요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 부딪힘을 \'틀린 소리\'라고 한다 → 긴장을 만드는 소리이며 곡에서 쓰임을 보인다. ② 느낌을 한 가지로 정해야 한다고 여긴다 → 사람마다 조금 다르게 들릴 수 있음을 인정하되 구별하는 낱말을 쓰게 한다. ③ 소리를 많이 겹치면 좋다고 여긴다 → 부딪히는 쌍을 겹쳤을 때를 들려준다. 소리는 학생이 누를 때만 난다.',
  });

  // ───────────────────────── 22차시 (연습) ─────────────────────────
  add(22, S3, {
    title: '목소리·악기·물체 소리를 섞어 달라지는 점 말하기',
    objective: '목소리와 악기와 물체 소리를 섞었을 때 소리 빛깔과 어울림이 어떻게 달라지는지 말하고, 물체 소리 리듬을 짜 볼 수 있다.',
    illustration: {
      prompt: ILL('a child humming beside a small xylophone while a pencil taps a paper cup, all three sounds as colorful ribbons'),
      scene: scene(0, '세 가지 소리 섞기'),
    },
    stages: [
      intro(
        '"목소리와 악기와 책상 두드리는 소리를 함께 낼 수 있을까요?" 학생이 직접 연필로 책상을 두드리고 허밍을 하고 건반을 눌러 보게 한다. 한 가지 소리일 때와 섞었을 때 어떻게 달라지는지 물으며 소리 빛깔이라는 낱말을 쓴다. "다 똑같은 소리지요"라고 하는 학생에게는 "눈을 감고 들으면 어느 것이 목소리인지 맞힐 수 있을까요?"로 되묻는다.',
        '목소리, 악기, 물체 소리를 섞으면 소리는 어떻게 달라질까요?',
      ),
      main(
        act(1, '세 가지 소리의 특징과 섞었을 때 변화 이어 보기', 12, 'mindmap',
          '"목소리는 가락과 말을 함께 낼 수 있고, 악기는 정확한 높이를 낼 수 있어요. 물체 소리는 높이가 정해져 있지 않을 때가 많아요." 특징 카드를 읽고 소리를 이어 보게 한다. \'물체 소리는 음악이 아니다\'라고 하는 학생에게 "리듬을 만들면 충분히 음악 소리가 돼요"를 말해 준다. 3번은 섞었을 때 달라지는 점을 고르는 문항이다.',
          '소리 종류와 특징을 이어 보고, 섞었을 때 달라지는 점을 찾아요.',
          cardsLv(),
          [
            { prompt: '소리 종류와 특징을 이어 보세요.', toolOptions: { mode: 'match', topic: '소리 종류', slots: [{ id: 's1', label: '목소리' }, { id: 's2', label: '건반 악기' }, { id: 's3', label: '책상·컵 두드리는 소리' }], cards: ['가락과 말을 함께 낼 수 있어요', '음의 높이를 정확히 낼 수 있어요', '높이는 불분명하고 박을 또렷하게 줘요'] }, target: { match: { s1: '가락과 말을 함께 낼 수 있어요', s2: '음의 높이를 정확히 낼 수 있어요', s3: '높이는 불분명하고 박을 또렷하게 줘요' } }, difficulty: 0.2 },
            { prompt: '소리를 섞었을 때 달라지는 점을 어울림이 좋아지는 점과 어려워지는 점으로 나누어 보세요.', toolOptions: { mode: 'sort', topic: '섞은 소리', slots: ['좋아지는 점', '어려워지는 점'], cards: ['박이 또렷해져요', '소리 빛깔이 풍성해져요', '목소리가 묻힐 수 있어요', '세기를 맞추기 어려워요'] }, target: { sort: { '좋아지는 점': ['박이 또렷해져요', '소리 빛깔이 풍성해져요'], '어려워지는 점': ['목소리가 묻힐 수 있어요', '세기를 맞추기 어려워요'] } }, difficulty: 0.3 },
            { prompt: '소리를 섞을 때 알맞은 준비만 골라 보세요.', toolOptions: { mode: 'pick', topic: '소리 섞기 준비', basket: '알맞은 준비', cards: ['목소리가 묻히지 않게 두드리는 소리를 줄여요', '박자 소리는 일정하게 두드려요', '모두가 가장 크게 내요'] }, target: { pick: ['목소리가 묻히지 않게 두드리는 소리를 줄여요', '박자 소리는 일정하게 두드려요'] }, difficulty: 0.25 },
          ]),
        act(2, '물체 소리로 리듬 성부 짜기', 14, 'keyboard',
          '"책상이나 컵을 두드려도 리듬 블록으로 적을 수 있어요." 리듬 블록으로 물체 소리 박자 성부를 짜고 손으로 두드려 확인한다. 쉼표 칸을 건너뛰는 학생에게 "쉬는 박에서는 손도 쉬나요?"를 묻는다. 마지막 문항에서 목소리와 건반 가락 밑에 물체 리듬을 깔아 본 뒤 점검한다.',
          '리듬 블록으로 물체 소리 리듬을 짜고, 손으로 두드려 확인해요.',
          rhy(4, 2),
          [
            { prompt: '컵 소리 리듬이에요. 4분음표 넷으로 한 마디, 2분음표 둘로 한 마디를 채워 보세요.', toolOptions: { mode: 'rhythm', meter: 4, measures: 2 }, target: { rhythm: ['q', 'q', 'q', 'q', 'h', 'h'] }, difficulty: 0.2 },
            { prompt: '연필 소리로 4분쉼표를 하나 넣어 두 마디를 4박씩 채워 보세요.', toolOptions: { mode: 'rhythm', meter: 4, measures: 2 }, target: { beats: true, rests: 1, use: ['q'] }, difficulty: 0.25 },
            { prompt: '8분음표를 꼭 넣어 두 마디를 4박씩 채운 박자 리듬을 지어 보세요.', toolOptions: { mode: 'rhythm', meter: 4, measures: 2 }, target: { beats: true, use: ['e'] }, difficulty: 0.3 },
            { prompt: '내 물체 소리 리듬을 짝의 목소리 밑에서 두드려 본 뒤 해낸 것을 표시해요.', toolOptions: { mode: 'rhythm', meter: 4, measures: 2 }, target: { beats: true, selfCheck: ['목소리가 묻히지 않게 작게 두드렸어요', '박이 흔들리지 않았어요'] }, difficulty: 0.2 },
          ]),
      ),
      wrap(
        '"세 가지 소리를 섞었을 때 가장 달라진 점은 무엇인가요?" 두 학생에게 \'박이 또렷해졌다\', \'소리가 풍성해졌다\' 같은 낱말로 말하게 한다. 물체 소리는 소란스럽다고만 말하면 세기를 줄이고 일정하게 두드리면 어떻게 되는지 다시 해 보게 한다. 출구 2번에서 \'다 크게\'를 고른 학생에게는 목소리가 묻히는 장면을 직접 들려준다.',
        [
          { type: 'tool', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 2, blocks: ['q', 'e', 'h', 'qr'] }, prompt: '컵 소리 리듬이에요. 2분음표와 4분음표로 두 마디를 4박씩 채워 보세요.', target: { beats: true, use: ['h', 'q'] }, difficulty: 0.25 },
          { type: 'choice', prompt: '목소리가 두드리는 소리에 묻히면 어떻게 할까요?', options: ['두드리는 소리를 줄인다', '목소리를 지른다', '아무것도 안 한다'], answer: 0, difficulty: 0.2, explain: '소리 크기를 서로 맞추어야 가락이 들려요.' },
          { type: 'mood', prompt: '소리를 섞어 보니 어땠나요?' },
        ]),
    ],
    worksheet: {
      title: '섞은 소리 살펴보기',
      items: [
        { type: 'table', prompt: '세 가지 소리의 특징을 쓰세요.', columns: ['소리', '특징'], cells: [['목소리', ''], ['악기', ''], ['물체 소리', '']] },
        { type: 'figure', prompt: '물체 소리 리듬에서 마디마다 몇 박인지 세어 쓰세요.', tool: 'keyboard', wide: true, options: { mode: 'rhythm', meter: 4, measures: 2 }, figures: [{ state: { rhythm: ['q', 'q', 'q', 'qr', 'h', 'h'] }, caption: '첫째 마디 ___박, 둘째 마디 ___박' }], answer: '첫째 마디 4박, 둘째 마디 4박' },
        { type: 'choice', prompt: '물체 소리의 좋은 점에 ○ 하세요.', options: ['박을 또렷하게 해 줘요', '높이를 정확히 내요'], answer: '박을 또렷하게 해 줘요' },
        { type: 'short', prompt: '우리 반에서 만들 수 있는 물체 소리 두 가지와 어떻게 섞으면 좋을지 쓰세요.' },
      ],
      easy: {
        note: '목소리는 가락, 악기는 높이, 물체 소리는 박을 맡기 좋아요.',
        items: [
          { type: 'choice', prompt: '박을 또렷하게 해 주는 소리에 ○ 하세요.', options: ['물체 두드리는 소리', '정확한 가락'], answer: '물체 두드리는 소리' },
          { type: 'choice', prompt: '소리를 섞을 때 가장 먼저 맞출 것에 ○ 하세요.', options: ['세기', '색깔'], answer: '세기' },
          { type: 'table', prompt: '소리와 특징을 쓰세요.', columns: ['소리', '특징'], cells: [['목소리', '']] },
          { type: 'short', prompt: '내가 두드리고 싶은 물체를 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 놓으면 바로 맞고 틀림이 보이고, 마디 띠에 박 수가 보여요.',
      base: '소리의 특징을 스스로 이어 보고 리듬을 짜요.',
      challenge: '함정 카드가 섞이고 쉼표 블록까지 있는 리듬으로 짜요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 물체 소리를 음악이 아니라고 여긴다 → 박자 성부로 쓰면 음악이 됨을 직접 보인다. ② 소리를 섞을수록 좋다고 여긴다 → 목소리가 묻히는 경우를 들려준다. ③ 소리마다 세기를 맞추지 않는다 → 가장 작은 소리에 다른 소리를 맞추도록 한다. 소리는 학생이 누르거나 두드릴 때만 난다.',
  });

  // ───────────────────────── 23차시 (마무리) ─────────────────────────
  add(23, S3, {
    title: '연주 단원 낱말 묶고 나의 연주 활동 스스로 돌아보기',
    objective: '이 단원에서 배운 낱말을 뜻과 이어 정리하고, 소리의 어울림을 위해 내가 한 일을 스스로 점검해 말할 수 있다.',
    illustration: {
      prompt: ILL('a paper bouquet made of small instruments, notes and calendar pages tied with a ribbon, with a child holding it proudly'),
      scene: scene(1, '연주 단원 한 묶음'),
    },
    stages: [
      intro(
        '"이 단원에서 새로 알게 된 낱말을 하나씩 말해 볼까요?" 성부, 균형, 신호, 연습 일지, 연주 계획 같은 낱말이 나오게 하고 칠판에 모은다. "소리를 많이 겹칠수록 잘 어울릴까요?" 하고 한 번 더 묻는다. 그렇다고 답하는 학생에게는 "세기가 맞지 않거나 부딪히는 소리가 겹치면 어떨까요?"로 되묻는다. 오늘은 배운 것을 묶고 나를 돌아본다.',
        '이 단원에서 배운 낱말을 묶어 보고, 연주할 때 내가 한 일을 돌아봅시다.',
      ),
      main(
        act(1, '단원 낱말과 뜻 이어 묶기', 12, 'mindmap',
          '"이 단원의 낱말은 소리의 어울림 이야기와 연주를 준비하는 이야기 두 갈래로 나눌 수 있어요." 낱말을 읽고 어느 갈래인지 나누게 한다. 2번은 낱말과 뜻을 이어 확인한다. 소리를 많이 겹칠수록 어울린다는 오개념을 3번에서 다시 한번 짚는다.',
          '낱말을 두 갈래로 나누고 뜻과 이어요.',
          cardsLv(),
          [
            { prompt: '낱말을 소리의 어울림과 연주 준비로 나누어 보세요.', toolOptions: { mode: 'sort', topic: '단원 낱말', slots: ['소리의 어울림', '연주 준비'], cards: ['성부', '균형', '연습 일지', '연주 계획'] }, target: { sort: { '소리의 어울림': ['성부', '균형'], '연주 준비': ['연습 일지', '연주 계획'] } }, difficulty: 0.2 },
            { prompt: '낱말과 뜻을 이어 보세요.', toolOptions: { mode: 'match', topic: '낱말 뜻', slots: [{ id: 'u1', label: '연습 일지' }, { id: 'u2', label: '연주 계획' }, { id: 'u3', label: '균형' }], cards: ['한 일과 남은 과제를 적는 기록', '자리·곡·인원·날짜를 정한 것', '소리의 세기가 알맞게 어우러진 상태'] }, target: { match: { u1: '한 일과 남은 과제를 적는 기록', u2: '자리·곡·인원·날짜를 정한 것', u3: '소리의 세기가 알맞게 어우러진 상태' } }, difficulty: 0.25 },
            { prompt: '소리의 어울림에 대해 맞는 말만 골라 보세요.', toolOptions: { mode: 'pick', topic: '어울림 정리', basket: '맞는 말', cards: ['세기를 맞추어야 어울려요', '소리를 많이 겹치면 늘 잘 어울려요', '부딪히는 소리도 곡에서 쓰일 수 있어요'] }, target: { pick: ['세기를 맞추어야 어울려요', '부딪히는 소리도 곡에서 쓰일 수 있어요'] }, difficulty: 0.3 },
          ]),
        act(2, '내가 한 일 스스로 돌아보고 마지막 가락 치기', 14, 'keyboard',
          '"정답이 없는 돌아보기예요. 한 일에 솔직하게 표시해 보세요." 마지막으로 단원 가락을 한 번 치고 스스로 점검한다. 모두에 표시하는 학생에게는 "구체적으로 어느 일이었는지 하나만 말해 볼까요?"를 묻는다. 점검 결과는 개인 평가에 쓰지 않고 다음 단원 수업 계획에 쓴다고 말한다.',
          '단원 가락을 듣고 따라 치고, 이 단원에서 내가 한 일을 스스로 점검해요.',
          mel(),
          [
            { prompt: '단원을 마무리하는 가락이에요. 듣고 따라 쳐 보세요.', toolOptions: { melody: ['도', '미', '솔', '높은도', '솔', '미', '도'], tempo: 92 }, target: { notes: ['도', '미', '솔', '높은도', '솔', '미', '도'] }, difficulty: 0.2 },
            { prompt: '마지막 가락을 느리게 이어 치며 소리의 어울림을 떠올려 보고 표시해요.', toolOptions: { melody: ['솔', '높은도', '솔', '미', '도'] }, target: { notes: ['솔', '높은도', '솔', '미', '도'], selfCheck: ['친구 소리를 들으며 쳤어요', '세기를 맞추려고 노력했어요'] }, difficulty: 0.2 },
            { prompt: '연주 준비를 위해 내가 한 일을 점검하고 표시해요.', target: { selfCheck: ['연습 일지를 적었어요', '아쉬운 점을 다음 계획으로 바꾸었어요', '모둠 약속을 지켰어요'], minNotes: 0 }, difficulty: 0.1 },
          ]),
      ),
      wrap(
        '"이 단원에서 나에게 가장 도움이 된 것 한 가지는 무엇인가요?" 세 학생에게 말하게 한다. 근거 없이 \'다요\'라고 하면 "그중 하나만 고르면요?"로 줄인다. 오늘 돌아보기는 정답이 없고 개인 평가에 쓰지 않으며 다음 단원 수업 계획에만 쓴다고 알린다. 출구 2번에서 \'많이 겹칠수록 좋다\'를 고른 학생에게는 세기가 맞지 않을 때의 소리를 떠올려 보게 한다.',
        [
          { type: 'tool', tool: 'keyboard', options: { from: '도', to: '높은도', melody: ['솔', '미', '솔', '높은도', '솔', '도'], tempo: 92 }, prompt: '마지막으로 가락을 듣고 따라 쳐 보세요.', target: { notes: ['솔', '미', '솔', '높은도', '솔', '도'] }, difficulty: 0.25 },
          { type: 'choice', prompt: '소리의 어울림에 가장 필요한 것은 무엇인가요?', options: ['소리를 많이 겹치는 것', '서로 듣고 세기와 박을 맞추는 것', '혼자 가장 크게 치는 것'], answer: 1, difficulty: 0.2, explain: '서로 듣고 세기와 박을 맞출 때 어울림이 만들어져요.' },
          { type: 'mood', prompt: '이 단원에서 함께 연주해 보니 어땠나요?' },
        ]),
    ],
    worksheet: {
      title: '연주 단원 돌아보기',
      items: [
        { type: 'table', prompt: '이 단원에서 배운 낱말과 내가 한 일을 쓰세요.', columns: ['낱말', '내가 한 일'], cells: [['성부', ''], ['균형', ''], ['연습 일지', '']] },
        { type: 'figure', prompt: '마지막 가락을 듣고 계이름을 쓰세요.', tool: 'keyboard', wide: true, options: { from: '도', to: '높은도', printNames: true, printBoxes: 7 }, figures: [{ caption: '이 가락을 칠 때 가장 신경 쓴 것은? ___' }], answer: '도 미 솔 높은도 솔 미 도' },
        { type: 'check', prompt: '이 단원에서 해낸 것에 모두 ✓ 하세요.', options: ['친구 소리를 들으며 쳤어요', '연습 일지를 적었어요', '아쉬움을 계획으로 바꾸었어요', '소리가 묻힌 성부를 찾았어요'] },
        { type: 'short', prompt: '다음 연주를 준비할 때 꼭 지키고 싶은 약속 한 가지를 쓰세요.' },
      ],
      easy: {
        note: '소리의 어울림은 서로 듣고 세기와 박을 맞출 때 만들어져요.',
        items: [
          { type: 'choice', prompt: '어울림에 필요한 것에 ○ 하세요.', options: ['세기와 박 맞추기', '혼자 크게 치기'], answer: '세기와 박 맞추기' },
          { type: 'check', prompt: '해낸 것에 ✓ 하세요.', options: ['친구 소리를 들었어요', '일지를 적었어요'] },
          { type: 'table', prompt: '배운 낱말과 뜻을 쓰세요.', columns: ['낱말', '뜻'], cells: [['성부', '']] },
          { type: 'short', prompt: '이 단원에서 가장 재미있었던 활동을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 놓으면 바로 맞고 틀림이 보이고, 가락 듣는 동안 건반이 빛나요.',
      base: '낱말을 스스로 나누고 이어 보고 가락을 치며 돌아봐요.',
      challenge: '함정 카드가 섞이고 건반 이름이 가려져요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 소리를 많이 겹칠수록 잘 어울린다고 여긴다 → 세기가 안 맞거나 부딪히는 소리가 겹친 때를 다시 들려준다. ② 돌아보기를 모두 높게 표시한다 → 구체적 근거를 한 가지 말하게 한다. ③ 낱말을 외우기만 한다 → 내가 한 일과 이어 말하게 한다. 돌아보기는 정답이 없으며 개인 평가에 쓰지 않고 수업 계획에만 쓴다. 학생 개인정보는 활동지에 쓰지 않는다.',
  });


  PaperLessons.registerUnit({
    id: 'g6-mus-1-01', schema: 'edu-unit.v1', catalogUnit: U,
    grade: 6, subject: '음악', unitTitle: '1. 연주',
    flow: '앞의 여덟 차시는 소리의 어울림을 몸으로 겪는 시간입니다: 한 가락을 둘이 이어 치며 시작 신호·박·세기를 맞추고, 높은 성부와 낮은 성부, 되풀이 반주, 박을 나눈 리듬 성부를 직접 치며(1~4차시), 다시 듣고 어울림의 근거를 대며 소리가 묻힌 성부의 균형을 맞추고 신호·자리·기록 문장을 정합니다(5~8차시). 이어 아홉째부터 열두째 차시까지는 학교와 마을에서 음악이 필요한 자리와 그 자리에 어울리는 곡의 조건(빠르기·세기·박)을 찾습니다. 열셋째부터 열여섯째 차시까지는 자리·곡·인원·연습 날짜를 담은 연주 계획표를 짜고 연습 단계를 나누어 성부를 맡고 점검표로 예행연습을 합니다. 열일곱째부터 스무째 차시까지는 연습 일지로 한 일과 남은 과제를 적고 밀린 과제를 고치며 연주 뒤 아쉬움을 다음 계획 한 줄로 바꿉니다. 마지막 세 차시는 두 소리가 어울리고 부딪히는 자리를 듣고 목소리·악기·물체 소리를 섞어 보며 단원을 묶고 스스로 돌아봅니다(21~23차시).',
    refs: {},
    lessons,
  });
})();
