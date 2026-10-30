/* 6학년 2학기 과학 1. 계절의 변화 — 12차시.
 * 태양 고도·그림자 길이·기온(1~4) → 남중 고도와 낮의 길이(5~8) → 자전축이 기울어진 채 공전하는 지구(9~12).
 * 1-04(지구의 운동)에서 자전·공전·별자리를 다루었으므로 여기서는 태양 고도·낮의 길이·계절의 원인에 집중한다.
 * 수치는 우리나라 중부 지방을 단순화한 예시 값이다.
 */
(function () {
  const U = { grade: 6, subject: '과학', unitTitle: '1. 계절의 변화' };
  const CU = 'g6-과학-2학기-1';
  const UID = 'g6-sci-2-01';
  const P = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const MOOD = { type: 'mood', prompt: '오늘 공부는 어땠나요?' };
  const SUN_SAFE = '태양은 맨눈·망원경·쌍안경으로 절대 직접 보지 않아요. 선생님이 알려 준 방법(그림자 보기, 기록 사진 보기)으로만 관찰해요.';
  // 하루 태양 눈금(시각별 고도, 예시 값): 봄·가을 / 여름 / 겨울
  const HRS = { rise: 6, set: 18, top: 52 };
  const HRS_SUM = { rise: 5, set: 19, top: 76 };
  const HRS_WIN = { rise: 7, set: 17, top: 29 };
  // 장면 하나: kind = day | night | orbit | both
  const sc = (text, kind) => {
    const sky = kind === 'night' || kind === 'orbit';
    const layers = kind === 'day'
      ? [{ motif: 'sun', x: 90, y: 70, s: 1.1 }, { motif: 'cloud', x: 230, y: 52, s: 0.7 }, { motif: 'hills', y: 206, colors: ['mint', 'lavender', 'sky'] }, { motif: 'house', x: 340, y: 224 }, { motif: 'tree', x: 150, y: 224 }]
      : kind === 'both'
        ? [{ motif: 'sun', x: 70, y: 66 }, { motif: 'moon', x: 410, y: 62, s: 0.8 }, { motif: 'star', x: 330, y: 40, color: 'cream' }, { motif: 'star', x: 450, y: 120 }, { motif: 'hills', y: 206, colors: ['mint', 'lavender', 'sky'] }, { motif: 'house', x: 250, y: 226 }]
        : [{ motif: 'moon', x: 390, y: 60, s: 0.8 }, { motif: 'star', x: 90, y: 50, color: 'cream' }, { motif: 'star', x: 200, y: 80 }, { motif: 'star', x: 300, y: 36, color: 'cream' }, { motif: 'star', x: 450, y: 130 }, { motif: 'hills', y: 214, colors: ['lavender', 'sky', 'mint'] }, { motif: 'house', x: 120, y: 230, s: 0.8 }];
    layers.push({ motif: 'text', x: 240, y: 142, text, size: 22, fill: sky ? '#FFF9E8' : undefined });
    return { viewBox: [480, 270], background: sky ? '#2E2A45' : '#FDF1DC', layers };
  };
  // 글을 읽어야 하는 earth 그림은 활동지에서 넓게 놓는다(그림 칸 글자 5.5pt 기준)
  const WIDE = (list) => list.map((it) => (it.type === 'figure' && (it.tool === 'earth' || it.tool === 'earthspin') ? Object.assign({ wide: true }, it) : it));
  // 활동 하나
  const A = (id, title, minutes, tool, task, teacher, levels, items, extra) => Object.assign({ id, title, minutes, tool, task, teacher, levels, items }, extra || {});
  // 차시 하나
  const mk = (n, d) => Object.assign({
    id: `${UID}-${String(n).padStart(2, '0')}`, schema: 'edu-lesson.v1', catalog: { unit: CU, lesson: n },
    minutes: 40, formats: ['chromebook', 'projector', 'print'],
  }, U, {
    title: d.title, objective: d.objective, standards: d.std, safety: d.safety,
    illustration: { prompt: P(d.ill), scene: sc(d.sceneText, d.kind || 'day') },
    stages: [
      { id: 'intro', title: '도입', minutes: 7, teacher: d.intro[0], student: d.intro[1] },
      { id: 'main', title: '전개', minutes: 25, activities: d.acts },
      { id: 'wrapup', title: '정리', minutes: 8, teacher: d.wrap, exitTicket: d.exit.concat([MOOD]) },
    ],
    worksheet: { title: d.wsTitle || d.title, items: WIDE(d.ws), easy: { note: d.easyNote, items: WIDE(d.easy) } },
    differentiation: d.diff,
    teacherNotes: d.notes,
  });

  const lessons = [
    // ───────────────────────── 1차시 (intro) ─────────────────────────
    mk(1, {
      title: '태양 고도가 높아지면 막대 그림자는 어떻게 될까',
      objective: '태양 고도가 높을수록 막대 그림자가 짧아지고 낮을수록 길어진다는 관계를 모형으로 확인해 말할 수 있다.',
      std: ['[6과13-01]'], safety: [SUN_SAFE],
      ill: 'a paper stick standing on the ground casting a short shadow under a high paper sun, next to the same stick casting a long shadow under a low sun',
      sceneText: '해가 높으면 그림자는요?', kind: 'day',
      intro: [
        '"한낮과 해 질 무렵에 내 그림자 길이는 어떻게 다를까요?" 운동장에서 본 경험을 말하게 하고, 해가 높을 때 그림자가 어떻게 될지 예상을 칠판에 적어 둔다. 해가 높을수록 그림자도 길다고 생각하는 학생이 많다. 태양은 직접 보지 않고 그림자로만 관찰한다는 약속을 함께 말해 본다.',
        '해가 하늘 높이 있을 때와 낮게 있을 때 막대 그림자의 길이는 어떻게 다를까요? 예상해 봅시다.',
      ],
      acts: [
        A('a1', '활동 1. 태양을 옮겨 그림자 길이 바꾸기', 12, 'earth',
          '막대 그림자 그림에서 태양을 끌거나 방향키로 옮겨요. 태양의 높이(고도)는 땅에서부터 잰 각이에요. 그림자가 어떻게 달라지는지 눈여겨봐요.',
          '"태양이 높이 올라갈수록 그림자 끝은 막대에 가까워질까요, 멀어질까요?" 직접 옮기며 말하게 한다. 높이 뜨면 그림자도 길어진다고 답하는 학생에게는 막대를 머리 위에서 비추는 손전등 그림을 그려 보여 준다. 그림 속 수치는 막대 길이 10 cm를 기준으로 한 예시 값이다.',
          { easy: { readout: true }, base: {}, challenge: {} },
          [
            { prompt: '막대 그림자가 가장 짧아지도록 태양을 옮겨 보세요. 고도와 길이는 확인한 뒤에 보여요.', state: { alt: 30 }, toolOptions: { mode: 'shadow', readout: true }, target: { shortest: true }, reveal: 'after-check', difficulty: 0.15,
              predict: { q: '그림자가 가장 짧을 때 태양은 어디에 있을까요?', options: ['가장 높은 곳', '가장 낮은 곳', '잘 모르겠어요'], answer: 0 },
              conclude: '태양 고도가 높을수록 막대 그림자는 짧아져요.' },
            { prompt: '이번에는 막대 그림자가 가장 길어지도록 태양을 옮겨 보세요.', state: { alt: 50 }, toolOptions: { mode: 'shadow' }, target: { longest: true }, difficulty: 0.15 },
            { prompt: '그림자 끝이 눈금 6 cm에 가장 가깝게 오도록 태양을 옮겨 보세요.', state: { alt: 20 }, toolOptions: { mode: 'shadow', readout: true }, target: { shadow: 6 }, reveal: 'after-check', difficulty: 0.3,
              conclude: '고도가 달라지면 그림자 길이가 달라져요. 그림자 길이를 보면 고도를 짐작할 수 있어요.' },
          ]),
        A('a2', '활동 2. 고도와 그림자 관계 정리하기', 13, 'mindmap',
          '태양 고도가 높을 때와 낮을 때의 모습을 가려내고, 하루 중 때와 그림자 길이를 이어요.',
          '"아침과 저녁에는 그림자가 왜 길어질까요?" 해가 낮게 비스듬히 비추기 때문이라고 말하게 한다. 한낮에도 해가 머리 바로 위까지 올라와 그림자가 점이 된다고 말하는 학생에게는 우리나라에서는 한낮에도 해가 남쪽 하늘에 비스듬하다고 짚는다.',
          { easy: { live: true, instant: true }, base: {}, challenge: {} },
          [
            { prompt: '태양 고도가 높을 때와 낮을 때의 모습으로 나누어 보세요.',
              toolOptions: { mode: 'sort', topic: '고도와 그림자', slots: ['태양 고도가 높을 때', '태양 고도가 낮을 때'], cards: ['그림자가 짧아요', '그림자가 길어요', '한낮 무렵이에요', '아침이나 저녁 무렵이에요'] },
              target: { sort: { '태양 고도가 높을 때': ['그림자가 짧아요', '한낮 무렵이에요'], '태양 고도가 낮을 때': ['그림자가 길어요', '아침이나 저녁 무렵이에요'] } }, difficulty: 0.15 },
            { prompt: '하루 중 때와 막대 그림자 길이를 이어 보세요.',
              toolOptions: { mode: 'match', topic: '그림자 길이', slots: [{ id: 'g1', label: '오전 9시' }, { id: 'g2', label: '낮 12시 30분' }, { id: 'g3', label: '오후 5시' }], cards: [{ id: 'mid', text: '중간 길이예요' }, { id: 'short', text: '가장 짧아요' }, { id: 'long', text: '가장 길어요' }, { id: 'none', text: '그림자가 없어요', why: '한낮에도 그림자는 짧게나마 생겨요.' }] },
              target: { match: { g1: 'mid', g2: 'short', g3: 'long' } }, difficulty: 0.25,
              predict: { q: '하루 중 그림자가 가장 짧은 때는 언제일까요?', options: ['태양이 가장 높은 때', '태양이 가장 낮은 때', '잘 모르겠어요'], answer: 0 },
              conclude: '태양이 가장 높은 한낮에 그림자가 가장 짧고, 아침과 저녁에 길어요.' },
            { prompt: '태양 고도와 그림자의 관계를 바르게 쓴 카드만 바구니에 넣어 보세요.',
              toolOptions: { mode: 'pick', topic: '고도와 그림자', basket: '바른 설명', cards: [
                { id: 'a', text: '고도가 높아지면 그림자가 짧아져요' }, { id: 'b', text: '고도가 낮아지면 그림자가 길어져요' }, { id: 'c', text: '고도와 그림자 길이는 서로 반대로 변해요' },
                { id: 'd', text: '고도가 높아지면 그림자도 길어져요', why: '해가 높을수록 그림자는 짧아져요.' }, { id: 'e', text: '고도와 그림자 길이는 관계가 없어요', why: '고도가 달라지면 그림자 길이도 달라져요.' }] },
              target: { pick: ['a', 'b', 'c'] }, difficulty: 0.2 },
          ]),
      ],
      wrap: '"태양 고도가 높아지면 그림자 길이는 어떻게 되나요?" 짧아진다는 것을 말하게 하고, 그 까닭을 "해가 높을수록 위에서 비추니까 막대 바로 옆에 그림자가 생긴다"는 말로 이어 주면 좋다. 출구 2번에서 고도가 높을 때 그림자가 길다고 고른 학생은 활동 1의 첫 문항을 다시 옮겨 보게 한다.',
      exit: [
        { type: 'choice', prompt: '태양 고도가 낮아지면 막대 그림자 길이는 어떻게 되나요?', options: ['길어져요', '짧아져요', '그대로예요'], answer: 0, difficulty: 0.15, explain: '고도가 낮을수록 그림자는 길어져요.' },
        { type: 'tool', tool: 'earth', options: { mode: 'shadow' }, state: { alt: 60 }, prompt: '막대 그림자가 가장 길어지도록 태양을 옮겨 보세요.', target: { longest: true }, difficulty: 0.2, explain: '태양이 낮을수록 그림자가 길어져요.' },
        { type: 'short', prompt: '태양 고도와 막대 그림자 길이의 관계를 한 문장으로 쓰세요.', answer: '태양 고도가 높아지면 그림자 길이는 짧아지고, 낮아지면 길어진다.' },
      ],
      ws: [
        { type: 'figure', prompt: '그림을 보고 태양 고도가 더 높은 쪽에 ○ 하세요.', tool: 'earth', options: { mode: 'shadow' }, figures: [
          { state: { alt: 30 }, caption: '(    )' }, { state: { alt: 70 }, caption: '(    )' }], answer: '두 번째' },
        { type: 'figure', prompt: '그림자가 더 긴 쪽에 ○ 하세요.', tool: 'earth', options: { mode: 'shadow' }, figures: [
          { state: { alt: 20 }, caption: '(    )' }, { state: { alt: 60 }, caption: '(    )' }], answer: '첫 번째' },
        { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '태양 고도가 높아지면 그림자 길이는 ___지고, 낮아지면 ___져요.', answer: '짧아, 길어' },
        { type: 'choice', prompt: '하루 중 막대 그림자가 가장 짧은 때는 언제인가요?', options: ['아침', '태양이 가장 높은 한낮', '저녁'], answer: '② 태양이 가장 높은 한낮' },
        { type: 'short', prompt: '"해가 높을수록 그림자도 길어진다"는 말을 고쳐 써 보세요.', answer: '해가 높을수록 그림자는 짧아진다.' },
      ],
      easyNote: '해가 높으면 그림자가 짧고, 해가 낮으면 그림자가 길어요. 해를 바로 보면 안 돼요.',
      easy: [
        { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '해가 높이 있으면 그림자가 ___요.', answer: '짧아' },
        { type: 'choice', prompt: '그림자가 긴 때에 ○ 하세요.', options: ['해가 낮을 때', '해가 높을 때'], answer: '해가 낮을 때' },
        { type: 'figure', prompt: '그림자가 더 짧은 그림에 ○ 하세요.', tool: 'earth', options: { mode: 'shadow' }, figures: [{ state: { alt: 20 }, caption: '(    )' }, { state: { alt: 70 }, caption: '(    )' }], answer: '두 번째' },
        { type: 'draw', prompt: '해가 높을 때와 낮을 때 막대 그림자를 각각 그려 보세요.' },
      ],
      diff: {
        easy: '고도와 그림자 길이 글자가 바로 보여 조작 결과를 곧바로 확인해요.',
        base: '글자 없이 태양 자리와 그림자 끝을 보고 판단하고, 확인 뒤에 값이 보여요.',
        challenge: '그림자 눈금을 읽어 고도를 짐작하는 문항이 있어요.',
      },
      notes: '준비물: 막대(연필) 하나, 손전등. 손전등을 높이와 각도를 바꿔 비추며 그림자를 비교한다. 자주 보이는 어려움: ① 해가 높을수록 그림자도 길다고 생각한다. ② 한낮에 그림자가 점이 된다고 생각한다. ③ 고도와 그림자의 방향을 섞는다. 수치는 모두 예시 값이다. 태양은 직접 보지 않는다.',
    }),

    // ───────────────────────── 2차시 (practice) ─────────────────────────
    mk(2, {
      title: '하루 동안 그림자 길이와 방향이 바뀌는 모습 읽기',
      objective: '하루 동안 태양이 지나가며 그림자가 길어지고 짧아지고, 아침에는 서쪽, 저녁에는 동쪽으로 생긴다는 것을 말할 수 있다.',
      std: ['[6과13-01]'], safety: [SUN_SAFE],
      ill: 'a stick on a paper field with a long shadow pointing west in the morning, a tiny shadow at noon, and a long shadow pointing east in the evening',
      sceneText: '그림자는 하루 종일 변해요', kind: 'day',
      intro: [
        '"운동장에서 학교 기둥의 그림자가 아침에는 어느 쪽에 있었나요? 오후에는요?" 학생 경험을 방위로 바꿔 말하게 한다. 그림자가 해 쪽으로 생긴다고 생각하는 학생이 있으므로, 그림자는 해의 반대쪽에 생긴다는 것을 칠판에 그려 짚는다. 태양은 직접 보지 않는다는 약속을 함께 말해 본다.',
        '아침과 낮, 오후에 막대 그림자는 어느 쪽으로 얼마나 길게 생길까요?',
      ],
      acts: [
        A('a1', '활동 1. 시각을 옮겨 그림자 읽기', 13, 'earth',
          '하루 동안 태양이 동쪽에서 서쪽으로 지나가요. 태양을 시각에 맞춰 옮기며 그림자 길이와 방향을 살펴봐요.',
          '"태양이 동쪽에 있을 때 그림자는 어느 쪽으로 길게 뻗을까요?" 태양과 그림자가 막대를 사이에 두고 반대쪽이라는 것을 손으로 짚게 한다. 오후에 그림자가 서쪽으로 생긴다고 답하는 학생에게는 오후 해는 서쪽에 있으니 그림자는 반대쪽이어야 한다고 되묻는다. 수치는 모두 예시 값이다.',
          { easy: { readout: true }, base: {}, challenge: {} },
          [
            { prompt: '하루 중 막대 그림자가 가장 짧아지는 때로 태양을 옮겨 보세요.', state: { hour: 8 }, toolOptions: { mode: 'shadow', hours: HRS }, target: { shortest: true }, difficulty: 0.1 },
            { prompt: '하루 중 그림자가 가장 길어지는 때(해가 막 뜬 때나 지기 직전)로 태양을 옮겨 보세요.', state: { hour: 12 }, toolOptions: { mode: 'shadow', hours: HRS }, target: { longest: true }, difficulty: 0.2 },
            { prompt: '오후 4시 무렵이에요. 막대 그림자는 어느 쪽으로 생길지 골라 보세요.', state: { hour: 16 }, toolOptions: { mode: 'shadow', hours: HRS, readOnly: true, ask: { q: '오후 4시 무렵 그림자는 어느 쪽으로 생길까요?', choices: ['동쪽', '서쪽', '남쪽'], why: [null, '오후에는 태양이 서쪽에 있어서 그림자는 반대인 동쪽으로 생겨요.', '그림자가 남쪽으로 생기려면 태양이 북쪽에 있어야 해요.'] } }, target: { pick: 0 }, difficulty: 0.25 },
            { prompt: '오전 9시 무렵이에요. 막대 그림자는 어느 쪽으로 생길지 골라 보세요.', state: { hour: 9 }, toolOptions: { mode: 'shadow', hours: HRS, readOnly: true, ask: { q: '오전 9시 무렵 그림자는 어느 쪽으로 생길까요?', choices: ['동쪽', '서쪽', '남쪽'], why: ['아침 해는 동쪽에 있어서 그림자는 반대쪽인 서쪽으로 생겨요.', null, '그림자가 남쪽으로 생기려면 태양이 북쪽에 있어야 해요.'] } }, target: { pick: 1 }, difficulty: 0.25,
              conclude: '그림자는 태양의 반대쪽에 생겨요. 아침에는 서쪽, 오후에는 동쪽으로 길게 생겨요.' },
          ]),
        A('a2', '활동 2. 그림자 변화 정리하기', 12, 'story',
          '시간에 따른 그림자 길이와 방향을 정리해요. 카드를 눌러 놓거나 알맞은 칸에 넣어요.',
          '"오전 8시와 오전 10시 중 그림자가 더 긴 때는 언제일까요?" 한낮에 가까울수록 그림자가 짧아진다는 흐름을 말하게 한다. 방향과 길이를 한꺼번에 말하려다 헷갈리는 학생에게는 방향 하나, 길이 하나를 따로 표로 정리하게 한다.',
          { easy: { live: true, instant: true }, base: {}, challenge: {} },
          [
            { prompt: '아침부터 한낮까지 그림자가 점점 짧아지는 차례대로 카드를 놓아 보세요. 가장 긴 때부터 놓아요.',
              toolOptions: { mode: 'order', slots: ['가장 긴 때', '조금 짧은 때', '가장 짧은 때'], cards: [
                { id: 'noon', text: '낮 12시 30분' }, { id: 'eight', text: '오전 8시' }, { id: 'ten', text: '오전 10시' }] },
              target: { order: ['eight', 'ten', 'noon'] }, difficulty: 0.2 },
            { prompt: '그림자 방향이 서쪽인 때와 동쪽인 때로 나누어 보세요.',
              toolOptions: { mode: 'sort', topic: '그림자 방향', slots: ['그림자가 서쪽에 생겨요', '그림자가 동쪽에 생겨요'], cards: ['해가 동쪽에 있는 아침', '해가 서쪽에 있는 저녁', '오전 9시', '오후 4시'] },
              target: { sort: { '그림자가 서쪽에 생겨요': ['해가 동쪽에 있는 아침', '오전 9시'], '그림자가 동쪽에 생겨요': ['해가 서쪽에 있는 저녁', '오후 4시'] } }, difficulty: 0.25,
              predict: { q: '해가 서쪽에 있을 때 그림자는 어느 쪽에 생길까요?', options: ['동쪽', '서쪽', '잘 모르겠어요'], answer: 0 },
              conclude: '그림자는 언제나 태양의 반대쪽에 생겨요.' },
            { prompt: '하루 동안 그림자를 관찰한 기록에서 바르게 쓴 말만 바구니에 넣어 보세요.',
              toolOptions: { mode: 'pick', topic: '그림자 기록', basket: '바른 기록', cards: [
                { id: 'a', text: '한낮에 그림자가 가장 짧았어요' }, { id: 'b', text: '아침에는 그림자가 서쪽으로 길었어요' }, { id: 'c', text: '저녁에는 그림자가 동쪽으로 길었어요' },
                { id: 'd', text: '그림자는 해 쪽으로 생겨요', why: '그림자는 해의 반대쪽에 생겨요.' }, { id: 'e', text: '하루 종일 그림자 길이가 같았어요', why: '해의 고도가 달라지므로 그림자 길이도 달라져요.' }] },
              target: { pick: ['a', 'b', 'c'] }, difficulty: 0.2 },
          ]),
      ],
      wrap: '"그림자는 해의 어느 쪽에 생기나요? 하루 중 길이는 어떻게 달라지나요?" 반대쪽, 길어졌다 짧아졌다 다시 길어진다고 말하게 한다. 출구 2번에서 방향을 거꾸로 고른 학생에게는 활동 1의 두 방향 문항을 다시 보며 태양과 그림자를 선으로 이어 보게 한다.',
      exit: [
        { type: 'choice', prompt: '아침 해가 동쪽에 있을 때 막대 그림자는 어느 쪽에 생기나요?', options: ['서쪽', '동쪽', '해 쪽'], answer: 0, difficulty: 0.2, explain: '그림자는 해의 반대쪽에 생기므로 서쪽에 생겨요.' },
        { type: 'tool', tool: 'earth', options: { mode: 'shadow', hours: { rise: 6, set: 18, top: 52 } }, state: { hour: 16 }, prompt: '하루 중 그림자가 가장 짧아지는 때로 태양을 옮겨 보세요.', target: { shortest: true }, difficulty: 0.2, explain: '한낮에 태양이 가장 높아 그림자가 가장 짧아요.' },
        { type: 'short', prompt: '하루 동안 그림자 길이가 어떻게 달라지는지 아침, 낮, 저녁을 넣어 쓰세요.', answer: '아침에는 길고 한낮에 가장 짧아졌다가 저녁에 다시 길어진다.' },
      ],
      ws: [
        { type: 'figure', prompt: '그림에서 태양의 위치를 보고 그림자가 막대의 어느 쪽에 생길지 ○ 하세요.', tool: 'earth', options: { mode: 'shadow', hours: HRS }, figures: [
          { state: { hour: 8 }, caption: '(왼쪽 / 오른쪽)' }, { state: { hour: 16 }, caption: '(왼쪽 / 오른쪽)' }], answer: '오른쪽, 왼쪽' },
        { type: 'table', prompt: '하루 동안의 그림자를 정리해 표를 채우세요.', columns: ['때', '그림자 방향', '길이(긴·짧은)'], cells: [['아침', '', ''], ['한낮', '', ''], ['저녁', '', '']], answer: '서쪽·긴, 북쪽(짧아 방향 뚜렷하지 않음)·짧은, 동쪽·긴' },
        { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '그림자는 태양의 ___쪽에 생기고, 한낮에 가장 ___요.', answer: '반대, 짧아' },
        { type: 'choice', prompt: '오후에 해가 서쪽에 있을 때 그림자는 어느 쪽에 생기나요?', options: ['동쪽', '서쪽', '남쪽'], answer: '① 동쪽' },
        { type: 'short', prompt: '그림자가 가장 짧은 때 해는 어디에 있는지 쓰세요.', answer: '하루 중 가장 높은 곳(남쪽 하늘 높은 곳)에 있다.' },
      ],
      easyNote: '그림자는 해의 반대쪽에 생겨요. 한낮에 가장 짧아요.',
      easy: [
        { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '그림자는 해의 ___쪽에 생겨요.', answer: '반대' },
        { type: 'choice', prompt: '그림자가 가장 짧은 때에 ○ 하세요.', options: ['한낮', '저녁'], answer: '한낮' },
        { type: 'figure', prompt: '아침 그림에 ○ 하세요.', tool: 'earth', options: { mode: 'shadow', hours: HRS }, figures: [{ state: { hour: 8 }, caption: '(    )' }, { state: { hour: 16 }, caption: '(    )' }], answer: '첫 번째' },
        { type: 'draw', prompt: '아침과 저녁에 막대 그림자를 반대쪽에 그려 보세요.' },
      ],
      diff: {
        easy: '고도와 그림자 길이 글자가 보이고, 카드를 놓으면 맞는지 바로 알려 줘요.',
        base: '글자 없이 태양 자리와 그림자 방향을 보고 판단해요.',
        challenge: '방향을 고르는 문항에서 읽기 글자가 없어요.',
      },
      notes: '자주 보이는 어려움: ① 그림자가 해 쪽에 생긴다고 생각한다. ② 한낮 그림자 방향을 서쪽이라고 한다 → 우리나라에서는 한낮에 북쪽으로 짧게 생긴다. ③ 아침 그림자와 저녁 그림자 방향을 바꾼다. 교구의 하루 눈금은 예시이고 실제 시각은 계절·지역에 따라 다르다. 태양은 직접 보지 않는다.',
    }),

    // ───────────────────────── 3차시 (core) ─────────────────────────
    mk(3, {
      title: '시각별 고도·그림자·기온 표를 그래프로 읽고 그리기',
      objective: '하루 동안 시각별로 잰 태양 고도, 그림자 길이, 기온을 그래프로 읽고 그려 세 값의 관계를 말할 수 있다.',
      std: ['[6과13-01]'], safety: [SUN_SAFE],
      ill: 'a paper notebook page with three small graphs, a rising and falling line for sun height, a bar chart of shadow length, and a line for air temperature, beside a paper thermometer',
      sceneText: '세 값을 그래프로 나타내요', kind: 'day',
      intro: [
        '"어제 하루 태양 고도와 그림자 길이와 기온을 잰 표가 있어요. 한눈에 보려면 어떻게 하면 좋을까요?" 표만 보여 주고 어느 시각에 가장 높고 가장 낮은지 찾는 데 걸리는 시간을 느끼게 한 뒤 그래프를 소개한다. 세 값을 눈금을 구분하지 않고 한 축에 그리면 읽기 어렵다는 점을 먼저 말해 둔다. 아래 수치는 모두 예시 값이다.',
        '시각별로 잰 세 값을 그래프로 나타내면 무엇이 쉬워질까요? 세 값은 어떤 관계가 있을까요?',
      ],
      acts: [
        A('a1', '활동 1. 그래프를 읽고 가장 큰 때 찾기', 13, 'chart',
          '시각별로 잰 값을 나타낸 그래프예요. 그래프를 읽고 알맞은 보기를 골라요. (예시 값)',
          '"태양 고도가 가장 높은 때와 기온이 가장 높은 때가 같은가요?" 두 그래프의 가장 높은 점을 손으로 짚어 비교하게 한다. 태양 고도가 가장 높은 때 기온도 가장 높다고 생각하는 학생이 많다. 기온 그래프의 가장 높은 점이 더 늦은 시각이라는 것을 눈으로 확인하게 한다.',
          { easy: { showValues: true }, base: {}, challenge: {} },
          [
            { prompt: '하루 동안 잰 태양 고도 그래프를 보고 가장 높은 때를 골라 보세요. (예시 값)',
              toolOptions: { type: 'line', mode: 'read', title: '시각별 태양 고도(예시 값)', unit: '°', data: [['9시', 35], ['11시', 50], ['13시', 52], ['15시', 40], ['17시', 17]], question: '태양 고도가 가장 높은 때는?', choices: ['11시', '13시', '17시'], why: ['11시 점보다 더 높은 점이 있어요.', '', '17시는 가장 낮은 점이에요.'], explain: '13시의 점이 가장 높아요.' },
              target: { pick: 1 }, difficulty: 0.15 },
            { prompt: '시각별 그림자 길이 그래프를 보고 가장 긴 때를 골라 보세요. (막대 10 cm, 예시 값)',
              toolOptions: { type: 'bar', mode: 'read', title: '시각별 그림자 길이(예시 값)', unit: 'cm', data: [['9시', 14], ['11시', 8], ['13시', 8], ['15시', 12], ['17시', 33]], question: '그림자가 가장 긴 때는?', choices: ['9시', '15시', '17시'], why: ['9시 막대보다 더 긴 막대가 있어요.', '15시 막대보다 더 긴 막대가 있어요.', ''], explain: '17시 막대가 가장 길어요.' },
              target: { pick: 2 }, difficulty: 0.2 },
            { prompt: '시각별 기온 그래프를 보고 기온이 가장 높은 때를 골라 보세요. (예시 값)',
              toolOptions: { type: 'line', mode: 'read', title: '시각별 기온(예시 값)', unit: '℃', data: [['9시', 14], ['11시', 17], ['13시', 20], ['15시', 21], ['17시', 18]], question: '기온이 가장 높은 때는?', choices: ['13시', '15시', '17시'], why: ['13시 점보다 더 높은 점이 있어요.', '', '17시에는 기온이 다시 내려가요.'], explain: '15시 점이 가장 높아요. 태양 고도가 가장 높은 13시보다 늦어요.' },
              target: { pick: 1 }, difficulty: 0.3,
              predict: { q: '기온이 가장 높은 때는 태양 고도가 가장 높은 때와 같을까요?', options: ['같아요', '조금 늦어요', '잘 모르겠어요'], answer: 1 },
              conclude: '기온은 태양 고도가 가장 높은 때보다 조금 늦게 가장 높아져요.' },
          ]),
        A('a2', '활동 2. 표를 보고 그래프 완성하기', 12, 'chart',
          '표를 보고 막대나 점을 눌러 그래프를 완성해요. 막대는 ↑↓ 키로도 올리고 내릴 수 있어요. (예시 값)',
          '"그래프를 그릴 때 눈금 한 칸이 얼마인지 먼저 정해야 하는 까닭은 무엇일까요?" 눈금 한 칸의 크기를 먼저 읽는 습관을 들인다. 세 값을 한 그래프에 섞어 그리는 학생에게는 값마다 단위가 다르니 그래프를 따로 그린다고 짚는다.',
          { easy: { showValues: true }, base: {}, challenge: {} },
          [
            { prompt: '시각별 그림자 길이 표를 보고 막대그래프를 완성하세요. (막대 10 cm, 예시 값)',
              toolOptions: { type: 'bar', title: '시각별 그림자 길이(예시 값)', data: [['9시', 14], ['11시', 8], ['13시', 8], ['15시', 12], ['17시', 33]], unit: 'cm', xLabel: '시각', yLabel: '그림자 길이', scale: 5, given: [0] },
              target: { build: true }, difficulty: 0.2 },
            { prompt: '시각별 기온 표를 보고 꺾은선그래프를 완성하세요. (예시 값)',
              toolOptions: { type: 'line', title: '시각별 기온(예시 값)', data: [['9시', 14], ['11시', 17], ['13시', 20], ['15시', 21], ['17시', 18]], unit: '℃', xLabel: '시각', yLabel: '기온', scale: 2, from: 10, given: [0] },
              target: { build: true }, difficulty: 0.3 },
            { prompt: '그림자가 가장 길었던 17시의 태양 고도를 태양 고도 그래프에서 찾아 골라 보세요. (예시 값)',
              toolOptions: { type: 'line', mode: 'read', title: '시각별 태양 고도(예시 값)', unit: '°', data: [['9시', 35], ['11시', 50], ['13시', 52], ['15시', 40], ['17시', 17]], question: '17시의 태양 고도는 다른 시각과 견주어 어땠나요?', choices: ['가장 낮았어요', '가장 높았어요', '중간이었어요'], why: [null, '17시는 그림자가 가장 긴 때라 고도가 높을 수 없어요.', '그래프에서 17시 점은 다른 점들보다 아래에 있어요.'], explain: '17시 점이 가장 낮아요. 고도가 낮을 때 그림자가 길어요.' },
              target: { pick: 0 }, difficulty: 0.25,
              conclude: '그림자 길이 그래프와 태양 고도 그래프를 겹쳐 보면 고도가 낮을 때 그림자가 길다는 관계가 보여요.' },
          ]),
      ],
      wrap: '"세 그래프에서 가장 높은 점이 있는 시각은 같은가요, 다른가요?" 고도와 그림자가 가장 짧은 때는 같고 기온은 늦다는 것을 짚는다. 출구 1번에서 기온도 13시에 가장 높다고 고른 학생은 활동 1의 세 번째 문항 풀이를 다시 읽게 한다.',
      exit: [
        { type: 'choice', prompt: '하루 중 기온이 가장 높은 때는 태양 고도가 가장 높은 때와 어떻게 다른가요?', options: ['조금 늦어요', '더 일러요', '똑같아요'], answer: 0, difficulty: 0.25, explain: '기온은 태양 고도가 가장 높은 때보다 조금 늦게 가장 높아져요.' },
        { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '시각별 그림자 길이(예시 값)', unit: 'cm', data: [['10시', 12], ['12시', 8], ['14시', 9], ['16시', 20]], question: '그림자가 가장 짧은 때는?', choices: ['10시', '12시', '16시'], why: ['10시 막대보다 더 짧은 막대가 있어요.', '', '16시는 가장 긴 막대예요.'] }, prompt: '그림자 길이 그래프를 보고 가장 짧은 때를 골라 보세요. (예시 값)', target: { pick: 1 }, difficulty: 0.2 },
        { type: 'short', prompt: '그림자 길이 그래프와 태양 고도 그래프를 견주어 알 수 있는 것을 쓰세요.', answer: '태양 고도가 높은 때 그림자 길이가 짧다.' },
      ],
      ws: [
        { type: 'table', prompt: '표를 보고 물음에 답하세요. (예시 값)', columns: ['시각', '태양 고도(°)', '그림자 길이(cm)', '기온(℃)'], cells: [['9시', '35', '14', '14'], ['11시', '50', '8', '17'], ['13시', '52', '8', '20'], ['15시', '40', '12', '21'], ['17시', '17', '33', '18']], answer: '고도 가장 높은 때 13시, 그림자 가장 긴 때 17시, 기온 가장 높은 때 15시' },
        { type: 'blank', prompt: '표를 보고 알맞은 시각을 써넣으세요.', text: '태양 고도가 가장 높은 때는 ___시, 기온이 가장 높은 때는 ___시예요.', answer: '13, 15' },
        { type: 'choice', prompt: '표에서 그림자가 가장 긴 때의 태양 고도는 어떤가요?', options: ['가장 낮아요', '가장 높아요', '중간이에요'], answer: '① 가장 낮아요' },
        { type: 'choice', prompt: '세 값을 한 그래프에 그릴 때 문제가 되는 점은 무엇인가요?', options: ['단위가 달라 눈금을 구분하기 어려워요', '그래프가 너무 예뻐요', '시각을 적을 수 없어요'], answer: '① 단위가 달라 눈금을 구분하기 어려워요' },
        { type: 'short', prompt: '"고도가 가장 높은 때 기온도 가장 높다"는 말을 표를 근거로 고쳐 써 보세요.', answer: '고도는 13시에 가장 높지만 기온은 15시에 가장 높아 기온이 조금 늦다.' },
      ],
      easyNote: '고도가 높은 때 그림자가 짧아요. 기온은 고도보다 조금 늦게 가장 높아요.',
      easy: [
        { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '고도가 높을 때 그림자는 ___요.', answer: '짧아' },
        { type: 'choice', prompt: '기온이 가장 높은 때에 ○ 하세요.', options: ['고도가 가장 높은 때보다 조금 늦어요', '고도가 가장 높은 때와 똑같아요'], answer: '고도가 가장 높은 때보다 조금 늦어요' },
        { type: 'table', prompt: '값이 가장 큰 때에 ○ 하세요.', columns: ['시각', '그림자(cm)'], cells: [['9시', '14'], ['13시', '8'], ['17시', '33']], answer: '17시' },
        { type: 'draw', prompt: '하루 동안 그림자 길이가 어떻게 변하는지 막대로 그려 보세요.' },
      ],
      diff: {
        easy: '막대와 점의 값이 보이고, 그래프를 조금만 고쳐 완성해요.',
        base: '값 글자 없이 눈금을 읽어 그래프를 읽고 그려요.',
        challenge: '기온 그래프 눈금이 10에서 시작해 눈금 읽기에 주의해야 해요.',
      },
      notes: '자주 보이는 어려움: ① 세 값의 눈금을 구분하지 않고 한 축에 그린다. ② 기온도 고도가 가장 높은 때 가장 높다고 생각한다. ③ 꺾은선그래프의 물결선(눈금 10에서 시작)을 놓친다. 모든 수치는 예시 값이다. 실제 측정값을 쓸 때는 날씨가 맑은 날의 값을 써야 한다.',
    }),

    // ───────────────────────── 4차시 (core) ─────────────────────────
    mk(4, {
      title: '태양 고도 측정기 만들고 한 시간마다 값 재는 계획 세우기',
      objective: '태양 고도 측정기를 만드는 차례와 한 시간마다 태양 고도, 그림자 길이, 기온을 같은 방법으로 재는 방법을 말할 수 있다.',
      std: ['[6과13-01]'], safety: [SUN_SAFE, '가위나 칼을 쓸 때는 천천히 하고 사람이 없는 쪽으로 자르며, 쓰고 나면 바로 정리해요.', '측정하러 나갈 때는 운동장 밖으로 나가지 않고, 선생님이 정한 자리에서만 해요.'],
      ill: 'children on a schoolyard lining up a paper protractor with a straw and string, a thermometer in the shade and a stick with a shadow marked on the ground',
      sceneText: '측정 계획을 세워요', kind: 'day',
      intro: [
        '"교실에서 태양 고도를 재려면 어떤 도구가 필요할까요?" 각도기, 빨대, 실, 추로 만든 측정기를 보여 주고 학생이 만들고 싶은 도구를 말해 보게 한다. 측정기를 평평하지 않은 곳에 놓고 재면 값이 들쭉날쭉해지는 문제를 먼저 알려 준다. 태양은 직접 보지 않고 빨대 그림자로 맞춘다고 말한다.',
        '태양 고도 측정기는 어떤 차례로 만들까요? 한 시간마다 값을 잴 때 무엇을 같게 해야 할까요?',
      ],
      acts: [
        A('a1', '활동 1. 측정기 만드는 순서와 측정 조건 정하기', 13, 'story',
          '측정기 만드는 차례를 놓거나, 측정할 때 지켜야 할 것과 도구를 짝지어요.',
          '"왜 한 시간마다 같은 곳에서, 같은 방법으로 재야 할까요?" 측정 조건이 같아야 값이 달라진 까닭이 태양 때문이라고 말할 수 있다는 점을 말하게 한다. 측정기를 땅에 아무렇게나 놓는 학생에게는 평평한 자리에서만 재도록 짚는다.',
          { easy: { live: true, instant: true }, base: {}, challenge: {} },
          [
            { prompt: '태양 고도 측정기를 만드는 차례대로 카드를 놓아 보세요.',
              toolOptions: { mode: 'order', slots: ['첫째', '둘째', '셋째', '넷째'], cards: [
                { id: 'm3', text: '빨대를 각도기 한 변에 붙여요' }, { id: 'm1', text: '각도기 가운데 구멍에 실을 매달고 끝에 추를 달아요' }, { id: 'm4', text: '빨대 그림자가 가장 작게 되도록 맞추고 눈금을 읽어요' }, { id: 'm2', text: '각도기를 판판한 종이에 붙여요' }] },
              target: { order: ['m1', 'm2', 'm3', 'm4'] }, difficulty: 0.3 },
            { prompt: '한 시간마다 같게 지켜야 할 측정 조건만 바구니에 넣어 보세요.',
              toolOptions: { mode: 'pick', topic: '측정 조건', basket: '똑같이 지켜요', cards: [
                { id: 'flat', text: '평평한 곳에서 재요' }, { id: 'place', text: '매번 같은 곳에서 재요' }, { id: 'together', text: '고도, 그림자 길이, 기온을 같은 시각에 함께 재요' },
                { id: 'face', text: '해를 똑바로 보며 맞춰요', why: '해는 직접 보지 않고 그림자로 맞춰요.' }, { id: 'sun', text: '기온은 햇볕이 잘 드는 곳에서 재요', why: '기온은 그늘에서 재야 직접 햇빛의 영향을 받지 않아요.' }] },
              target: { pick: ['flat', 'place', 'together'] }, difficulty: 0.25 },
            { prompt: '재려는 것과 쓰는 도구를 이어 보세요. 알맞지 않은 도구는 남겨 둬요.',
              toolOptions: { mode: 'match', topic: '측정 도구', slots: [{ id: 'z1', label: '태양 고도' }, { id: 'z2', label: '그림자 길이' }, { id: 'z3', label: '기온' }], cards: [{ id: 'sunm', text: '태양 고도 측정기' }, { id: 'ruler', text: '자(막대 그림자)' }, { id: 'thermo', text: '온도계(그늘에서)' }, { id: 'scale', text: '저울', why: '저울은 무게를 재는 도구예요.' }] },
              target: { match: { z1: 'sunm', z2: 'ruler', z3: 'thermo' } }, difficulty: 0.15,
              predict: { q: '측정 조건이 시각마다 다르면 값의 차이를 태양 때문이라고 말할 수 있을까요?', options: ['없어요', '있어요', '잘 모르겠어요'], answer: 0 },
              conclude: '조건을 같게 해야 값이 달라진 까닭이 태양의 움직임 때문이라고 말할 수 있어요.' },
          ]),
        A('a2', '활동 2. 측정 시각마다 태양 자리 확인하기', 12, 'earth',
          '한 시간마다 값을 잴 때 태양이 어디에 있는지 모형으로 확인해요. 정한 시각의 태양 자리로 옮겨 보세요. 수치는 예시 값이에요.',
          '"한 시간 뒤에는 태양 고도가 얼마나 달라질까요?" 한낮 가까이에서는 변화가 작고 아침·저녁에는 크다는 점을 말하게 한다. 이 모형의 시각과 고도는 단순한 예시이므로 실제 측정값은 날마다 다르다고 알려 준다.',
          { easy: { readout: true }, base: {}, challenge: {} },
          [
            { prompt: '오전 10시에 첫 측정을 해요. 태양을 그 시각의 자리로 옮겨 보세요.', state: { hour: 16 }, toolOptions: { mode: 'shadow', hours: HRS }, target: { hour: 10 }, difficulty: 0.15 },
            { prompt: '한 시간 뒤인 오전 11시에 두 번째 측정을 해요. 태양을 그 시각의 자리로 옮겨 보세요.', state: { hour: 7 }, toolOptions: { mode: 'shadow', hours: HRS }, target: { hour: 11 }, difficulty: 0.15 },
            { prompt: '측정 중 태양 고도가 가장 높은 때로 태양을 옮겨 보세요.', state: { hour: 8 }, toolOptions: { mode: 'shadow', hours: HRS }, target: { noon: true }, difficulty: 0.2,
              conclude: '한 시간마다 같은 방법으로 재면 태양 고도와 그림자, 기온의 변화를 비교할 수 있어요.' },
          ]),
      ],
      wrap: '"측정기를 만들 때와 잴 때 꼭 지킬 것을 한 가지씩 말해 볼까요?" 판판한 곳, 해를 직접 보지 않기, 같은 방법으로 한 시간마다 재기 등을 말하게 한다. 출구 2번에서 기온을 햇볕 아래서 재는 학생에게는 그늘과 햇볕의 온도를 온도계 두 개로 견주어 보게 한다.',
      exit: [
        { type: 'choice', prompt: '태양 고도를 잴 때 해를 보는 방법으로 알맞은 것은 무엇인가요?', options: ['빨대 그림자를 이용해 맞춰요', '해를 똑바로 쳐다봐요', '망원경으로 봐요'], answer: 0, difficulty: 0.15, explain: '해는 직접 보지 않고 그림자를 이용해요.' },
        { type: 'choice', prompt: '기온을 잴 때 온도계는 어디에 두어야 하나요?', options: ['햇빛이 직접 닿지 않는 그늘', '햇볕이 가장 센 곳', '땅바닥 위'], answer: 0, difficulty: 0.2, explain: '햇빛이 닿으면 온도계 자체가 데워져 기온이 아니라 온도계 온도를 재게 돼요.' },
        { type: 'tool', tool: 'earth', options: { mode: 'shadow', hours: { rise: 6, set: 18, top: 52 } }, state: { hour: 8 }, prompt: '오후 2시 측정이에요. 태양을 그 시각의 자리로 옮겨 보세요.', target: { hour: 14 }, difficulty: 0.2 },
      ],
      ws: [
        { type: 'table', prompt: '내 측정 계획표를 완성하세요. 한 시간 간격으로 쓰세요.', columns: ['측정 시각', '태양 고도(°)', '그림자 길이(cm)', '기온(℃)'], cells: [['오전 10시', '', '', ''], ['', '', '', ''], ['', '', '', '']], answer: '한 시간 간격(예: 오전 11시, 낮 12시)으로 시각을 쓰고 측정값은 실제 측정에서 채움' },
        { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '태양 고도 측정기는 ___한 곳에 두고, 빨대 ___를 이용해 맞추고 눈금을 읽어요.', answer: '평평, 그림자' },
        { type: 'choice', prompt: '측정 조건을 같게 해야 하는 까닭은 무엇인가요?', options: ['값이 달라진 까닭을 태양의 움직임으로 말하기 위해서', '측정 시간을 줄이기 위해서', '친구와 같은 값을 쓰기 위해서'], answer: '① 값이 달라진 까닭을 태양의 움직임으로 말하기 위해서' },
        { type: 'check', prompt: '측정할 때 알맞게 지킨 것에 모두 ✓ 하세요.', options: ['평평한 곳에 측정기를 놓았다', '해를 직접 보지 않았다', '온도계를 햇볕 아래에 두었다', '온도계를 그늘에 두었다'], answer: '평평한 곳에 측정기를 놓았다, 해를 직접 보지 않았다, 온도계를 그늘에 두었다' },
        { type: 'short', prompt: '측정기를 평평하지 않은 곳에 놓고 재면 어떤 문제가 생기는지 쓰세요.', answer: '고도 값이 들쭉날쭉해져 시각별 값을 믿고 비교하기 어렵다.' },
      ],
      easyNote: '측정기는 평평한 곳에 놓고, 해는 직접 보지 않고 그림자로 맞춰요.',
      easy: [
        { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '해는 ___로 보지 않고 빨대 그림자를 이용해요.', answer: '직접' },
        { type: 'choice', prompt: '기온을 재는 곳에 ○ 하세요.', options: ['그늘', '햇볕이 센 곳'], answer: '그늘' },
        { type: 'check', prompt: '안전하게 측정하는 모습에 모두 ✓ 하세요.', options: ['해를 직접 보지 않아요', '정한 자리에서만 해요', '해를 망원경으로 봐요'], answer: '해를 직접 보지 않아요, 정한 자리에서만 해요' },
        { type: 'draw', prompt: '내가 만들 측정기의 모습을 그려 보세요.' },
      ],
      diff: {
        easy: '카드를 놓으면 맞는지 바로 알려 주고, 태양 그림에 시각과 고도 글자가 보여요.',
        base: '모두 놓은 뒤 확인을 눌러 스스로 고치고, 글자 없이 태양 자리를 보고 시각을 맞춰요.',
        challenge: '함정 카드를 가려내고 측정 도구와 쓰임을 모두 이어요.',
      },
      notes: '준비물(모둠): 각도기, 빨대, 실, 추(클립), 풀·테이프, 온도계, 자, 막대(연필), 기록지. 가위를 쓸 때 안전을 지킨다. 자주 보이는 어려움: ① 측정기를 평평하지 않은 곳에 놓아 값이 들쭉날쭉하다. ② 기온을 햇볕 아래서 잰다. ③ 해를 직접 보며 맞춘다. 실제 측정은 맑은 날 하고, 날씨가 나쁘면 이 시간에 만든 계획으로 다른 날 한다. 수치는 모두 예시 값이다.',
    }),
    // ───────────────────────── 5차시 (core) ─────────────────────────
    mk(5, {
      title: '여름과 겨울의 남중 고도와 낮의 길이 견주기',
      objective: '남중 고도가 높은 계절과 낮은 계절을 가리고, 남중 고도가 높을수록 낮의 길이가 길다는 것을 자료를 근거로 말할 수 있다.',
      std: ['[6과13-02]'], safety: [SUN_SAFE],
      ill: 'two paper skies side by side, a high sun with a long bright day arc in summer and a low sun with a short arc in winter, above the same small house',
      sceneText: '여름 해와 겨울 해는 어떻게 다를까요?', kind: 'day',
      intro: [
        '"한여름 낮 12시 막대 그림자와 한겨울 낮 12시 막대 그림자는 어느 쪽이 더 짧을까요?" 경험을 바탕으로 예상을 말하게 한다. 하루 중 태양이 정남쪽에 왔을 때를 남중이라 하고 그때의 고도를 남중 고도라고 소개한다. 낮의 길이가 계절과 상관없이 늘 같다고 생각하는 학생에게는 여름과 겨울 해 지는 시각을 떠올려 말하게 한다. 수치는 모두 예시 값이다.',
        '여름과 겨울의 한낮 해 높이는 어떻게 다를까요? 낮의 길이는 어떨까요?',
      ],
      acts: [
        A('a1', '활동 1. 남중 고도와 낮의 길이 정리하기', 13, 'mindmap',
          '여름과 겨울의 남중 고도와 낮의 길이에 관한 카드를 나누고 이어요. (예시 값)',
          '"남중 고도가 높은 계절에는 낮의 길이가 어떻게 될까요?" 높을수록 길다는 규칙을 한 문장으로 말하게 한다. 남중 고도가 90°까지 올라 해가 머리 바로 위에 온다고 말하는 학생에게는 우리나라에서는 가장 높아도 76° 안팎이라고 짚는다.',
          { easy: { live: true, instant: true }, base: {}, challenge: {} },
          [
            { prompt: '여름과 겨울의 모습을 나누어 보세요. 남중 고도가 높은 계절은 여름이에요.',
              toolOptions: { mode: 'sort', topic: '여름과 겨울', slots: ['여름(남중 고도 높음)', '겨울(남중 고도 낮음)'], cards: ['낮의 길이가 길어요', '낮의 길이가 짧아요', '한낮 그림자가 짧아요', '한낮 그림자가 길어요'] },
              target: { sort: { '여름(남중 고도 높음)': ['낮의 길이가 길어요', '한낮 그림자가 짧아요'], '겨울(남중 고도 낮음)': ['낮의 길이가 짧아요', '한낮 그림자가 길어요'] } }, difficulty: 0.2 },
            { prompt: '계절과 남중 고도(예시 값)를 이어 보세요. 알맞지 않은 카드는 남겨 둬요.',
              toolOptions: { mode: 'match', topic: '남중 고도', slots: [{ id: 'k1', label: '여름(하지 무렵)' }, { id: 'k2', label: '봄·가을(춘분·추분 무렵)' }, { id: 'k3', label: '겨울(동지 무렵)' }], cards: [{ id: 'h76', text: '약 76°' }, { id: 'h52', text: '약 52°' }, { id: 'h29', text: '약 29°' }, { id: 'h90', text: '90°(머리 바로 위)', why: '우리나라에서는 해가 머리 바로 위까지 오르지 않아요.' }] },
              target: { match: { k1: 'h76', k2: 'h52', k3: 'h29' } }, difficulty: 0.3,
              predict: { q: '남중 고도가 높은 계절에는 낮의 길이가 어떨까요?', options: ['길어요', '짧아요', '잘 모르겠어요'], answer: 0 },
              conclude: '남중 고도가 높은 여름에는 낮이 길고, 낮은 겨울에는 낮이 짧아요.' },
            { prompt: '남중 고도와 낮의 길이의 관계를 바르게 쓴 카드만 바구니에 넣어 보세요.',
              toolOptions: { mode: 'pick', topic: '남중 고도와 낮의 길이', basket: '바른 설명', cards: [
                { id: 'a', text: '남중 고도가 높은 계절은 낮이 길어요' }, { id: 'b', text: '남중 고도가 낮은 계절은 낮이 짧아요' }, { id: 'c', text: '남중 고도와 낮의 길이는 같은 방향으로 변해요' },
                { id: 'd', text: '낮의 길이는 계절과 관계없이 같아요', why: '여름에는 낮이 길고 겨울에는 짧아요.' }, { id: 'e', text: '남중 고도가 높으면 낮이 짧아요', why: '남중 고도가 높을수록 낮은 길어요.' }] },
              target: { pick: ['a', 'b', 'c'] }, difficulty: 0.25 },
          ]),
        A('a2', '활동 2. 여름 하루와 겨울 하루 모형 비교', 12, 'earth',
          '여름 하루와 겨울 하루의 태양 길을 모형으로 견주어요. 태양을 가장 높은 때로 옮기거나, 그림을 보고 골라요. (예시 값)',
          '"여름 하루와 겨울 하루 가운데 태양이 가장 높은 때는 몇 시 무렵일까요?" 시각이 비슷하지만 높이가 크게 다르다는 점을 말하게 한다. 해 뜨는 시각과 지는 시각을 보며 낮의 길이를 세어 보게 한다.',
          { easy: { readout: true }, base: {}, challenge: {} },
          [
            { prompt: '여름 하루예요. 태양이 가장 높은 때(남중)로 태양을 옮겨 보세요.', state: { hour: 8 }, toolOptions: { mode: 'shadow', hours: HRS_SUM }, target: { noon: true }, difficulty: 0.15 },
            { prompt: '겨울 하루예요. 태양이 가장 높은 때(남중)로 태양을 옮겨 보세요.', state: { hour: 9 }, toolOptions: { mode: 'shadow', hours: HRS_WIN }, target: { noon: true }, difficulty: 0.15 },
            { prompt: '그림은 여름 한낮이에요. 겨울 한낮보다 막대 그림자가 어떤지 골라 보세요.', state: { hour: 12 }, toolOptions: { mode: 'shadow', hours: HRS_SUM, readOnly: true, ask: { q: '여름 한낮의 그림자는 겨울 한낮보다?', choices: ['더 짧아요', '더 길어요', '같아요'], why: [null, '여름 한낮에는 태양이 겨울보다 높아서 그림자가 더 짧아요.', '두 계절의 남중 고도가 달라서 그림자 길이도 달라요.'] } }, target: { pick: 0 }, difficulty: 0.25 },
            { prompt: '해가 5시에 떠서 19시에 지는 여름 하루예요. 낮의 길이를 골라 보세요.', state: { hour: 12 }, toolOptions: { mode: 'shadow', hours: HRS_SUM, readOnly: true, ask: { q: '낮의 길이는 몇 시간일까요?', choices: ['14시간', '10시간', '12시간'], why: [null, '10시간은 해가 7시에 떠서 17시에 지는 겨울 하루 길이예요.', '12시간이라면 해가 6시에 떠서 18시에 져야 해요.'] } }, target: { pick: 0 }, difficulty: 0.3,
              conclude: '남중 고도가 높은 여름에는 해가 일찍 뜨고 늦게 져서 낮이 길어요.' },
          ]),
      ],
      wrap: '"여름과 겨울 가운데 남중 고도가 더 높은 계절은 언제이고, 그때 낮의 길이는 어떤가요?" 여름, 길다고 한 문장으로 말하게 한다. 출구 2번에서 겨울 한낮 그림자가 더 짧다고 고른 학생은 활동 2의 세 번째 문항을 다시 보며 태양 높이와 그림자를 연결하게 한다.',
      exit: [
        { type: 'choice', prompt: '남중 고도가 가장 낮은 계절은 언제인가요?', options: ['겨울', '여름', '봄'], answer: 0, difficulty: 0.15, explain: '겨울에는 해가 가장 낮게 떠서 남중 고도도 가장 낮아요.' },
        { type: 'choice', prompt: '남중 고도가 낮은 계절의 한낮 그림자는 높은 계절보다 어떤가요?', options: ['더 길어요', '더 짧아요', '같아요'], answer: 0, difficulty: 0.2, explain: '태양이 낮을수록 그림자는 길어요.' },
        { type: 'tool', tool: 'earth', options: { mode: 'shadow', hours: { rise: 7, set: 17, top: 29 } }, state: { hour: 7 }, prompt: '겨울 하루예요. 태양이 가장 높은 때로 옮겨 보세요.', target: { noon: true }, difficulty: 0.2 },
      ],
      ws: [
        { type: 'figure', prompt: '두 그림을 보고, 한낮에 막대 그림자가 더 짧은 쪽에 ○ 하세요. (여름 하루와 겨울 하루)', tool: 'earth', options: { mode: 'shadow' }, figures: [
          { options: { hours: HRS_SUM }, state: { hour: 12 }, caption: '여름 (    )' }, { options: { hours: HRS_WIN }, state: { hour: 12 }, caption: '겨울 (    )' }], answer: '여름' },
        { type: 'table', prompt: '계절별 남중 고도와 낮의 길이(예시 값)를 정리하세요.', columns: ['계절', '남중 고도', '낮의 길이'], cells: [['여름', '높다', ''], ['겨울', '', '짧다']], answer: '길다, 낮다' },
        { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '남중 고도가 ___ 계절에는 낮의 길이가 길고, 남중 고도가 ___ 계절에는 낮의 길이가 짧아요.', answer: '높은, 낮은' },
        { type: 'choice', prompt: '여름에 해가 가장 높이 뜨는 때의 각도에 가장 가까운 값은 무엇인가요? (예시 값)', options: ['약 76°', '약 29°', '90°'], answer: '① 약 76°' },
        { type: 'short', prompt: '"낮의 길이는 계절에 관계없이 같다"는 말을 고쳐 써 보세요.', answer: '낮의 길이는 여름에 길고 겨울에 짧다.' },
      ],
      easyNote: '여름은 남중 고도가 높고 낮이 길어요. 겨울은 남중 고도가 낮고 낮이 짧아요.',
      easy: [
        { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '남중 고도가 높은 계절에는 낮이 ___요.', answer: '길어' },
        { type: 'choice', prompt: '남중 고도가 더 높은 계절에 ○ 하세요.', options: ['여름', '겨울'], answer: '여름' },
        { type: 'figure', prompt: '한낮 그림자가 더 긴 쪽에 ○ 하세요.', tool: 'earth', options: { mode: 'shadow' }, figures: [{ options: { hours: HRS_SUM }, state: { hour: 12 }, caption: '여름 (    )' }, { options: { hours: HRS_WIN }, state: { hour: 12 }, caption: '겨울 (    )' }], answer: '겨울' },
        { type: 'draw', prompt: '여름 하루와 겨울 하루의 해가 지나가는 길을 각각 그려 보세요.' },
      ],
      diff: {
        easy: '고도와 그림자 글자가 바로 보이고, 카드를 놓으면 맞는지 바로 알려 줘요.',
        base: '글자 없이 태양 길과 그림자를 보고 판단해요.',
        challenge: '낮의 길이를 해 뜨는 시각과 지는 시각에서 직접 구해요.',
      },
      notes: '자주 보이는 어려움: ① 낮의 길이가 계절과 관계없이 같다고 생각한다. ② 해가 한여름에 머리 바로 위까지 온다고 생각한다. ③ 남중을 12시 정각으로 안다 → 우리나라는 낮 12시 30분 무렵이다. 수치는 우리나라 중부 지방을 단순화한 예시 값이다. 태양은 직접 보지 않는다.',
    }),

    // ───────────────────────── 6차시 (practice) ─────────────────────────
    mk(6, {
      title: '해 뜨는 시각과 지는 시각으로 낮의 길이 구해 견주기',
      objective: '해 뜨는 시각과 지는 시각으로 낮의 길이를 구하고, 계절별 낮의 길이를 견주어 남중 고도와 어떤 관계인지 말할 수 있다.',
      std: ['[6과13-02]'], safety: [SUN_SAFE],
      ill: 'a paper clock face with two arcs showing the sunrise time and sunset time on a summer day, with a long yellow band between them',
      sceneText: '낮이 몇 시간일까요?', kind: 'day',
      intro: [
        '"여름에는 아침 5시에 해가 뜨고 저녁 7시가 넘어서야 져요. 낮은 모두 몇 시간일까요?" 지는 시각에서 뜨는 시각을 뺀다는 것을 짚으며 오후 시각은 24시간제로 바꾸어 계산하면 쉽다고 알려 준다. 낮의 길이는 계절마다 같지 않다는 것을 자료로 확인하겠다고 말한다. 수치는 예시 값이다.',
        '해 뜨는 시각과 지는 시각으로 낮의 길이를 어떻게 구할까요? 계절마다 낮의 길이를 견주면 무엇을 알 수 있을까요?',
      ],
      acts: [
        A('a1', '활동 1. 계절별 낮의 길이 그래프 읽기', 13, 'chart',
          '계절별 낮의 길이를 나타낸 그래프를 읽고 알맞은 답을 골라요. (예시 값)',
          '"여름과 겨울의 낮의 길이는 몇 시간 차이가 날까요?" 막대 높이의 차이를 눈금으로 세어 보게 한다. 단위가 시간이라는 것과 눈금 한 칸이 2시간임을 먼저 읽도록 한다. 4시간을 40시간 또는 0.4시간처럼 단위를 잘못 읽는 학생에게는 단위를 소리 내어 읽게 한다.',
          { easy: { showValues: true }, base: {}, challenge: {} },
          [
            { prompt: '계절별 낮의 길이 그래프를 보고 낮이 가장 긴 계절을 골라 보세요. (예시 값)',
              toolOptions: { type: 'bar', mode: 'read', title: '계절별 낮의 길이(예시 값)', unit: '시간', data: [['봄(춘분)', 12], ['여름(하지)', 14], ['가을(추분)', 12], ['겨울(동지)', 10]], scale: 2, question: '낮이 가장 긴 계절은?', choices: ['봄', '여름', '겨울'], why: ['봄 막대보다 더 높은 막대가 있어요.', '', '겨울 막대는 가장 낮아요.'], explain: '여름 막대가 가장 높아 낮이 가장 길어요.' },
              target: { pick: 1 }, difficulty: 0.15 },
            { prompt: '같은 그래프에서 겨울의 낮의 길이는 몇 시간인지 골라 보세요. (예시 값)',
              toolOptions: { type: 'bar', mode: 'read', title: '계절별 낮의 길이(예시 값)', unit: '시간', data: [['봄(춘분)', 12], ['여름(하지)', 14], ['가을(추분)', 12], ['겨울(동지)', 10]], scale: 2, question: '겨울의 낮의 길이는?', choices: ['10시간', '12시간', '14시간'], why: ['', '12시간은 봄과 가을의 낮의 길이예요.', '14시간은 여름의 낮의 길이예요.'], explain: '겨울 막대는 눈금 10까지 올라와요.' },
              target: { pick: 0 }, difficulty: 0.2 },
            { prompt: '여름과 겨울의 낮의 길이는 몇 시간 차이가 날까요? (예시 값)',
              toolOptions: { type: 'bar', mode: 'read', title: '계절별 낮의 길이(예시 값)', unit: '시간', data: [['봄(춘분)', 12], ['여름(하지)', 14], ['가을(추분)', 12], ['겨울(동지)', 10]], scale: 2, question: '여름과 겨울의 낮의 길이 차는?', choices: ['2시간', '4시간', '6시간'], why: ['2시간은 여름과 봄의 차예요.', '', '6시간까지 차이가 나지 않아요.'], explain: '14시간 − 10시간 = 4시간이에요.' },
              target: { pick: 1 }, difficulty: 0.3,
              predict: { q: '여름과 겨울의 낮의 길이 차는 몇 시간쯤일까요?', options: ['2시간쯤', '4시간쯤', '8시간쯤'], answer: 1 },
              conclude: '낮의 길이는 여름이 가장 길고 겨울이 가장 짧아요. 남중 고도가 높은 계절에 낮이 길어요.' },
          ]),
        A('a2', '활동 2. 해 뜨고 지는 시각으로 낮의 길이 계산하기', 12, 'mindmap',
          '해 뜨는 시각과 지는 시각을 보고 낮의 길이를 이어요. (예시 값)',
          '"저녁 7시를 19시로 바꾸어 빼면 어떻게 될까요?" 오후 시각을 12를 더해 24시간제로 바꾸는 방법을 말하게 한다. 7 − 5 = 2처럼 오전·오후를 그대로 빼는 학생에게는 낮이 2시간뿐인지 물어 상식으로 틀림을 알아보게 한다.',
          { easy: { live: true, instant: true }, base: {}, challenge: {} },
          [
            { prompt: '해 뜨는 시각과 지는 시각에 알맞은 낮의 길이를 이어 보세요. 알맞지 않은 카드는 남겨 둬요.',
              toolOptions: { mode: 'match', topic: '낮의 길이 계산', slots: [{ id: 'd1', label: '오전 5시에 뜨고 오후 7시에 져요' }, { id: 'd2', label: '오전 7시에 뜨고 오후 5시에 져요' }, { id: 'd3', label: '오전 6시에 뜨고 오후 6시에 져요' }], cards: [{ id: 'l14', text: '14시간' }, { id: 'l10', text: '10시간' }, { id: 'l12', text: '12시간' }, { id: 'l2', text: '2시간', why: '오후 시각을 24시간제로 바꾸지 않고 뺀 결과예요.' }] },
              target: { match: { d1: 'l14', d2: 'l10', d3: 'l12' } }, difficulty: 0.3 },
            { prompt: '낮의 길이가 12시간보다 긴 계절과 짧은 계절로 나누어 보세요. (예시 값)',
              toolOptions: { mode: 'sort', topic: '낮의 길이', slots: ['12시간보다 길어요', '12시간보다 짧아요'], cards: ['여름(하지 무렵)', '겨울(동지 무렵)', '해가 일찍 떠서 늦게 져요', '해가 늦게 떠서 일찍 져요'] },
              target: { sort: { '12시간보다 길어요': ['여름(하지 무렵)', '해가 일찍 떠서 늦게 져요'], '12시간보다 짧아요': ['겨울(동지 무렵)', '해가 늦게 떠서 일찍 져요'] } }, difficulty: 0.25 },
            { prompt: '낮의 길이를 구하는 방법으로 바른 카드만 바구니에 넣어 보세요.',
              toolOptions: { mode: 'pick', topic: '낮의 길이 구하기', basket: '바른 방법', cards: [
                { id: 'a', text: '해 지는 시각에서 해 뜨는 시각을 빼요' }, { id: 'b', text: '오후 시각은 12를 더해 24시간제로 바꿔요' }, { id: 'c', text: '계절별 값을 한 표에 모아 견줘요' },
                { id: 'd', text: '해 뜨는 시각과 지는 시각을 더해요', why: '더하면 시간의 길이가 아니에요. 지는 시각에서 뜨는 시각을 빼요.' }, { id: 'e', text: '오전과 오후 시각을 그대로 빼요', why: '오후는 24시간제로 바꿔서 빼야 해요.' }] },
              target: { pick: ['a', 'b', 'c'] }, difficulty: 0.3,
              conclude: '낮의 길이는 지는 시각에서 뜨는 시각을 빼서 구해요. 오후는 24시간제로 바꿔요.' },
          ]),
      ],
      wrap: '"낮의 길이를 구하는 과정을 말해 볼까요?" 오후 시각을 24시간제로 바꾼 뒤 지는 시각에서 뜨는 시각을 뺀다고 말하게 한다. 출구 2번에서 7 − 5로 계산한 학생에게는 낮의 길이가 2시간밖에 안 되는지 되묻고 활동 2의 첫 문항 풀이를 다시 읽게 한다.',
      exit: [
        { type: 'choice', prompt: '해가 오전 6시에 뜨고 오후 6시에 진다면 낮의 길이는 몇 시간인가요?', options: ['12시간', '6시간', '18시간'], answer: 0, difficulty: 0.2, explain: '18시 − 6시 = 12시간이에요.' },
        { type: 'choice', prompt: '해가 오전 7시에 뜨고 오후 4시 30분에 지는 날의 낮의 길이는 몇 시간 몇 분인가요?', options: ['9시간 30분', '8시간 30분', '10시간 30분'], answer: 0, difficulty: 0.3, explain: '16시 30분 − 7시 = 9시간 30분이에요.' },
        { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '네 날의 낮의 길이(예시 값)', unit: '시간', data: [['3월', 12], ['6월', 14], ['9월', 12], ['12월', 10]], scale: 2, question: '낮이 가장 짧은 달은?', choices: ['3월', '6월', '12월'], why: ['3월 막대보다 더 낮은 막대가 있어요.', '6월은 가장 높은 막대예요.', ''] }, prompt: '낮의 길이 그래프에서 낮이 가장 짧은 달을 골라 보세요. (예시 값)', target: { pick: 2 }, difficulty: 0.2 },
      ],
      ws: [
        { type: 'table', prompt: '해 뜨는 시각과 지는 시각으로 낮의 길이를 구하세요. (예시 값, 오후는 24시간제로 바꿔 계산)', columns: ['날', '해 뜸', '해 짐', '낮의 길이'], cells: [['여름 어느 날', '오전 5시', '오후 7시', ''], ['겨울 어느 날', '오전 7시', '오후 5시', ''], ['봄 어느 날', '오전 6시', '오후 6시', '']], answer: '14시간, 10시간, 12시간' },
        { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '낮의 길이는 해 ___ 시각에서 해 ___ 시각을 빼서 구해요.', answer: '지는, 뜨는' },
        { type: 'choice', prompt: '낮의 길이가 가장 긴 계절은 언제인가요? (예시 값)', options: ['여름', '겨울', '가을'], answer: '① 여름' },
        { type: 'choice', prompt: '여름과 겨울의 낮의 길이 차는 얼마인가요? (14시간과 10시간)', options: ['4시간', '2시간', '24시간'], answer: '① 4시간' },
        { type: 'short', prompt: '낮의 길이와 남중 고도의 관계를 한 문장으로 쓰세요.', answer: '남중 고도가 높은 계절에 낮의 길이가 길다.' },
      ],
      easyNote: '해 지는 시각에서 해 뜨는 시각을 빼면 낮의 길이가 나와요. 오후 시각은 12를 더해 계산해요.',
      easy: [
        { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '오후 6시는 24시간제로 ___시예요.', answer: '18' },
        { type: 'choice', prompt: '낮이 더 긴 계절에 ○ 하세요.', options: ['여름', '겨울'], answer: '여름' },
        { type: 'table', prompt: '낮의 길이를 구하세요.', columns: ['해 뜸', '해 짐', '낮의 길이'], cells: [['6시', '18시', '']], answer: '12시간' },
        { type: 'draw', prompt: '해가 뜨고 지는 시각을 시계 그림에 표시해 보세요.' },
      ],
      diff: {
        easy: '막대 값이 보이고, 카드를 놓으면 맞는지 바로 알려 줘요.',
        base: '값 글자 없이 눈금을 읽어 답해요.',
        challenge: '시각을 24시간제로 바꾸어 시간과 분까지 계산해요.',
      },
      notes: '자주 보이는 어려움: ① 오후 시각을 24시간제로 바꾸지 않고 뺀다. ② 해 뜨는 시각과 지는 시각을 더한다. ③ 단위(시간)를 읽지 않아 값을 잘못 읽는다. 수치는 모두 예시 값이다. 실제 일출·일몰 시각은 날짜와 지역마다 다르다.',
    }),

    // ───────────────────────── 7차시 (core) ─────────────────────────
    mk(7, {
      title: '계절별 남중 고도와 낮의 길이를 그래프로 나타내고 읽기',
      objective: '계절별 남중 고도와 낮의 길이를 그래프로 나타내고, 두 그래프를 견주어 남중 고도가 높은 계절에 낮이 길다고 말할 수 있다.',
      std: ['[6과13-02]'], safety: [SUN_SAFE],
      ill: 'two paper bar graphs side by side, one for the sun height at noon and one for the length of daytime, with matching tall bars for summer and short bars for winter',
      sceneText: '두 그래프를 나란히 놓아요', kind: 'day',
      intro: [
        '"계절별 남중 고도 표와 낮의 길이 표가 있어요. 두 값에 어떤 관계가 있는지 한눈에 보려면 어떻게 하면 좋을까요?" 두 표를 나란히 보여 주고 그래프로 바꾸는 방법을 학생이 제안하게 한다. 두 그래프에서 계절 차례를 뒤섞으면 변화의 흐름이 보이지 않는다는 점을 짚는다. 수치는 모두 예시 값이다.',
        '계절별 남중 고도와 낮의 길이를 그래프로 나타내면 두 값의 관계가 어떻게 보일까요?',
      ],
      acts: [
        A('a1', '활동 1. 표를 보고 그래프 완성하고 읽기', 13, 'chart',
          '표를 보고 막대그래프를 완성하거나, 그래프를 읽고 알맞은 답을 골라요. 계절은 봄, 여름, 가을, 겨울 차례예요. (예시 값)',
          '"두 그래프에서 가장 높은 막대가 있는 계절은 같을까요?" 두 그래프를 나란히 놓고 여름 막대를 짚게 한다. 계절 차례를 바꿔 그리면 변화의 흐름이 사라진다는 것을 앞 문항에서 직접 말하게 한다.',
          { easy: { showValues: true }, base: {}, challenge: {} },
          [
            { prompt: '계절별 남중 고도 표를 보고 막대그래프를 완성하세요. (예시 값)',
              toolOptions: { type: 'bar', title: '계절별 남중 고도(예시 값)', data: [['봄', 52], ['여름', 76], ['가을', 52], ['겨울', 29]], unit: '°', xLabel: '계절', yLabel: '남중 고도', scale: 10, given: [0] },
              target: { build: true }, difficulty: 0.25 },
            { prompt: '계절별 낮의 길이 표를 보고 막대그래프를 완성하세요. (예시 값)',
              toolOptions: { type: 'bar', title: '계절별 낮의 길이(예시 값)', data: [['봄', 12], ['여름', 14], ['가을', 12], ['겨울', 10]], unit: '시간', xLabel: '계절', yLabel: '낮의 길이', scale: 2, given: [0] },
              target: { build: true }, difficulty: 0.25 },
            { prompt: '남중 고도 그래프를 보고 남중 고도가 가장 낮은 계절을 골라 보세요. (예시 값)',
              toolOptions: { type: 'bar', mode: 'read', title: '계절별 남중 고도(예시 값)', unit: '°', data: [['봄', 52], ['여름', 76], ['가을', 52], ['겨울', 29]], scale: 10, question: '남중 고도가 가장 낮은 계절은?', choices: ['여름', '겨울', '봄'], why: ['여름은 가장 높은 막대예요.', '', '봄은 겨울보다 높아요.'], explain: '겨울 막대가 가장 낮아요.' },
              target: { pick: 1 }, difficulty: 0.15,
              conclude: '그래프로 나타내면 남중 고도가 높은 계절과 낮은 계절이 한눈에 보여요.' },
          ]),
        A('a2', '활동 2. 두 그래프를 견주어 관계 찾기', 12, 'mindmap',
          '두 그래프에서 알아낸 것을 카드로 나누고 차례를 놓아요.',
          '"남중 고도 막대가 높은 계절에 낮의 길이 막대는 어떤가요?" 두 막대가 같은 방향으로 변한다는 것을 말하게 한다. 기온은 남중 고도 다음으로 늦게 오르는 값이라 두 값과 같은 때 가장 크지 않을 수 있다고 알려 준다.',
          { easy: { live: true, instant: true }, base: {}, challenge: {} },
          [
            { prompt: '남중 고도가 높은 계절과 낮은 계절의 모습으로 나누어 보세요. (예시 값)',
              toolOptions: { mode: 'sort', topic: '남중 고도와 계절 모습', slots: ['남중 고도가 높은 계절', '남중 고도가 낮은 계절'], cards: ['낮이 길어요', '낮이 짧아요', '기온이 높아요', '기온이 낮아요'] },
              target: { sort: { '남중 고도가 높은 계절': ['낮이 길어요', '기온이 높아요'], '남중 고도가 낮은 계절': ['낮이 짧아요', '기온이 낮아요'] } }, difficulty: 0.25,
              predict: { q: '남중 고도가 높은 계절에는 기온이 어떨까요?', options: ['높아요', '낮아요', '잘 모르겠어요'], answer: 0 },
              conclude: '남중 고도가 높은 계절에는 낮이 길고 기온이 높은 경향이 있어요.' },
            { prompt: '남중 고도가 높은 계절부터 차례대로 카드를 놓아 보세요. (예시 값)',
              toolOptions: { mode: 'order', slots: ['가장 높아요', '중간이에요', '가장 낮아요'], cards: [{ id: 'win', text: '겨울' }, { id: 'sum', text: '여름' }, { id: 'spr', text: '봄' }] },
              target: { order: ['sum', 'spr', 'win'] }, difficulty: 0.2 },
            { prompt: '두 그래프를 견주어 바르게 추론한 말만 바구니에 넣어 보세요.',
              toolOptions: { mode: 'pick', topic: '그래프로 추론하기', basket: '바른 추론', cards: [
                { id: 'a', text: '남중 고도가 높을수록 낮이 길어요' }, { id: 'b', text: '여름에 남중 고도와 낮의 길이가 모두 가장 커요' }, { id: 'c', text: '겨울에 남중 고도와 낮의 길이가 모두 가장 작아요' },
                { id: 'd', text: '남중 고도가 높으면 낮은 짧아져요', why: '그래프에서 두 막대는 같은 방향으로 변해요.' }, { id: 'e', text: '낮의 길이는 계절이 바뀌어도 같아요', why: '낮의 길이 막대는 계절마다 달라요.' }] },
              target: { pick: ['a', 'b', 'c'] }, difficulty: 0.25 },
          ]),
      ],
      wrap: '"두 그래프를 나란히 놓고 알게 된 점을 한 문장으로 말해 볼까요?" 남중 고도가 높은 계절에 낮이 길다고 근거(여름 막대 둘 다 가장 높음)와 함께 말하게 한다. 출구 2번에서 두 값이 반대로 변한다고 고른 학생에게는 두 그래프의 여름 막대를 손으로 짚어 보게 한다.',
      exit: [
        { type: 'choice', prompt: '두 그래프에서 가장 높은 막대가 있는 계절은 언제인가요?', options: ['여름', '겨울', '봄'], answer: 0, difficulty: 0.15, explain: '남중 고도와 낮의 길이 모두 여름이 가장 커요.' },
        { type: 'choice', prompt: '남중 고도와 낮의 길이의 관계로 알맞은 것은 무엇인가요?', options: ['같은 방향으로 변해요', '반대 방향으로 변해요', '관계가 없어요'], answer: 0, difficulty: 0.2, explain: '남중 고도가 높은 계절에 낮이 길어요.' },
        { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '네 계절의 남중 고도(예시 값)', unit: '°', data: [['봄', 52], ['여름', 76], ['가을', 52], ['겨울', 29]], scale: 10, question: '남중 고도가 같은 계절끼리 짝지은 것은?', choices: ['봄과 가을', '여름과 겨울', '봄과 겨울'], why: ['', '여름과 겨울은 막대 높이가 아주 달라요.', '봄 막대는 겨울보다 훨씬 높아요.'] }, prompt: '남중 고도 그래프에서 막대 높이가 같은 계절끼리 짝을 골라 보세요. (예시 값)', target: { pick: 0 }, difficulty: 0.25 },
      ],
      ws: [
        { type: 'table', prompt: '계절별 값을 읽어 표를 완성하세요. (예시 값)', columns: ['계절', '남중 고도(°)', '낮의 길이(시간)'], cells: [['봄', '52', '12'], ['여름', '', ''], ['가을', '52', '12'], ['겨울', '', '']], answer: '여름 76·14, 겨울 29·10' },
        { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '남중 고도가 가장 높은 계절은 ___이고, 이때 낮의 길이도 가장 ___요.', answer: '여름, 길어' },
        { type: 'choice', prompt: '두 값의 관계를 바르게 말한 것은 무엇인가요?', options: ['남중 고도가 높을수록 낮이 길다', '남중 고도가 높을수록 낮이 짧다', '두 값은 관계가 없다'], answer: '① 남중 고도가 높을수록 낮이 길다' },
        { type: 'choice', prompt: '그래프에서 계절의 차례를 섞어 그리면 어떤 문제가 생기나요?', options: ['변화의 흐름이 잘 보이지 않아요', '그래프가 더 정확해져요', '문제가 없어요'], answer: '① 변화의 흐름이 잘 보이지 않아요' },
        { type: 'short', prompt: '두 그래프를 근거로 남중 고도와 낮의 길이의 관계를 한 문장으로 쓰세요.', answer: '여름에는 남중 고도와 낮의 길이가 가장 크고 겨울에는 가장 작으므로, 남중 고도가 높을수록 낮이 길다.' },
      ],
      easyNote: '여름은 막대가 모두 가장 높고, 겨울은 모두 가장 낮아요.',
      easy: [
        { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '남중 고도가 높은 ___에 낮이 가장 길어요.', answer: '여름' },
        { type: 'choice', prompt: '막대가 가장 낮은 계절에 ○ 하세요.', options: ['여름', '겨울'], answer: '겨울' },
        { type: 'table', prompt: '더 큰 값에 ○ 하세요.', columns: ['계절', '낮의 길이(시간)'], cells: [['여름', '14'], ['겨울', '10']], answer: '14' },
        { type: 'draw', prompt: '계절별 낮의 길이를 막대로 그려 보세요.' },
      ],
      diff: {
        easy: '막대 값이 보이고, 그래프를 조금만 고쳐 완성해요.',
        base: '값 글자 없이 눈금을 읽어 그래프를 읽고 그려요.',
        challenge: '두 그래프를 견주어 근거를 들어 추론해요.',
      },
      notes: '자주 보이는 어려움: ① 계절 차례를 바꿔 그린다. ② 두 값이 반대로 변한다고 생각한다. ③ 눈금 한 칸의 크기를 확인하지 않는다. 수치는 모두 예시 값이다. 그래프를 그릴 때 계절은 봄, 여름, 가을, 겨울 차례를 지키게 한다.',
    }),

    // ───────────────────────── 8차시 (core) ─────────────────────────
    mk(8, {
      title: '누리집에서 같은 지역 자료를 모아 계절별로 정리하기',
      objective: '누리집에서 같은 지역의 계절별 남중 고도와 낮의 길이 자료를 모아 정리하는 방법을 말하고, 모은 자료를 읽어 낮의 길이 변화를 설명할 수 있다.',
      std: ['[6과13-02]'], safety: ['컴퓨터나 태블릿을 쓸 때는 자세를 바르게 하고 오래 보지 않아요.'],
      ill: 'a child at a paper laptop comparing two tables of sun height and daytime length for one city, with check marks beside matching region names',
      sceneText: '같은 지역 자료를 모아요', kind: 'day',
      intro: [
        '"친구가 서울의 하지 자료와 부산의 동지 자료를 한 표에 모아 놓았어요. 이 표로 계절을 견줄 수 있을까요?" 지역이 다른 자료를 섞은 표를 보여 주고 무엇을 같게 해야 하는지 이야기한다. 자료는 공신력 있는 천문 누리집에서 찾는다고 알려 주되 특정 누리집은 선생님이 안내한 곳으로 한정한다. 아래 수치는 예시 값이다.',
        '누리집에서 계절별 자료를 모을 때 무엇을 같게 해야 할까요? 모은 자료는 어떻게 정리하면 좋을까요?',
      ],
      acts: [
        A('a1', '활동 1. 자료 모으는 차례와 조건 정하기', 13, 'story',
          '자료를 모으는 차례를 놓거나, 같게 해야 할 조건과 자료 종류를 가려요.',
          '"서로 다른 지역의 값을 한 표에 모으면 어떤 일이 생길까요?" 계절 차이인지 지역 차이인지 가를 수 없다고 말하게 한다. 자료를 모은 날짜가 다른데도 같은 조건이라고 적는 학생에게는 하지·동지처럼 같은 종류의 날을 골라야 한다고 짚는다.',
          { easy: { live: true, instant: true }, base: {}, challenge: {} },
          [
            { prompt: '누리집에서 자료를 모아 정리하는 차례대로 카드를 놓아 보세요.',
              toolOptions: { mode: 'order', slots: ['첫째', '둘째', '셋째', '넷째'], cards: [
                { id: 's3', text: '봄·여름·가을·겨울 날짜별로 값을 찾아요' }, { id: 's1', text: '자료를 찾을 지역을 하나 정해요' }, { id: 's4', text: '찾은 값을 계절별 표에 정리해요' }, { id: 's2', text: '누리집에서 남중 고도와 낮의 길이 자료를 찾아요' }] },
              target: { order: ['s1', 's2', 's3', 's4'] }, difficulty: 0.25 },
            { prompt: '자료를 모을 때 똑같이 지켜야 하는 것만 바구니에 넣어 보세요.',
              toolOptions: { mode: 'pick', topic: '자료 모으기 조건', basket: '똑같이 지켜요', cards: [
                { id: 'region', text: '같은 지역의 자료' }, { id: 'year', text: '같은 해의 자료' }, { id: 'kind', text: '춘분·하지·추분·동지처럼 같은 종류의 날' },
                { id: 'mix', text: '지역이 다른 값을 섞어요', why: '지역이 다르면 계절 차이인지 지역 차이인지 알 수 없어요.' }, { id: 'rand', text: '계절마다 아무 날이나 골라요', why: '같은 종류의 날로 맞추어야 비교할 수 있어요.' }] },
              target: { pick: ['region', 'year', 'kind'] }, difficulty: 0.25 },
            { prompt: '모을 자료의 종류를 이름과 뜻으로 나누어 보세요.',
              toolOptions: { mode: 'sort', topic: '자료의 종류', slots: ['남중 고도 자료', '낮의 길이 자료'], cards: ['정남쪽에 왔을 때 태양의 높이를 나타낸 각', '해가 떠서 질 때까지 걸린 시간', '남중 때 태양의 높이각', '일출부터 일몰까지의 시간'] },
              target: { sort: { '남중 고도 자료': ['정남쪽에 왔을 때 태양의 높이를 나타낸 각', '남중 때 태양의 높이각'], '낮의 길이 자료': ['해가 떠서 질 때까지 걸린 시간', '일출부터 일몰까지의 시간'] } }, difficulty: 0.2,
              predict: { q: '자료를 모을 때 지역이 달라지면 무엇이 어려워질까요?', options: ['계절 때문인지 알기 어려워요', '자료가 더 빨리 모여요', '아무 문제 없어요'], answer: 0 },
              conclude: '같은 지역·같은 종류의 날로 모아야 계절에 따른 변화를 비교할 수 있어요.' },
          ]),
        A('a2', '활동 2. 모은 자료로 낮의 길이 변화 읽기', 12, 'chart',
          '한 지역의 달별 낮의 길이 자료를 그래프로 읽고 알맞은 답을 골라요. (예시 값)',
          '"1월에서 7월로 가면서 낮의 길이는 어떻게 달라지나요?" 막대가 점점 높아지는 모습을 읽게 한다. 모은 자료를 표로 정리했는데 단위를 빼먹는 학생에게는 값 옆에 단위(시간)를 쓰게 한다.',
          { easy: { showValues: true }, base: {}, challenge: {} },
          [
            { prompt: '한 지역의 달별 낮의 길이 그래프를 보고 낮이 가장 짧은 달을 골라 보세요. (예시 값)',
              toolOptions: { type: 'bar', mode: 'read', title: '달별 낮의 길이(예시 값)', unit: '시간', data: [['1월', 10], ['4월', 13], ['7월', 14], ['10월', 11]], scale: 2, question: '낮이 가장 짧은 달은?', choices: ['1월', '4월', '10월'], why: ['', '4월 막대보다 더 낮은 막대가 있어요.', '10월 막대보다 더 낮은 막대가 있어요.'], explain: '1월 막대가 가장 낮아요.' },
              target: { pick: 0 }, difficulty: 0.15 },
            { prompt: '1월보다 낮이 4시간 더 긴 달을 골라 보세요. (예시 값)',
              toolOptions: { type: 'bar', mode: 'read', title: '달별 낮의 길이(예시 값)', unit: '시간', data: [['1월', 10], ['4월', 13], ['7월', 14], ['10월', 11]], scale: 2, question: '1월보다 4시간 더 긴 달은?', choices: ['4월', '7월', '10월'], why: ['4월은 1월보다 3시간 길어요.', '', '10월은 1월보다 1시간 길어요.'], explain: '7월은 14시간으로 1월의 10시간보다 4시간 길어요.' },
              target: { pick: 1 }, difficulty: 0.3 },
            { prompt: '4월에서 7월로 가는 동안 낮의 길이가 어떻게 달라지는지 골라 보세요. (예시 값)',
              toolOptions: { type: 'bar', mode: 'read', title: '달별 낮의 길이(예시 값)', unit: '시간', data: [['1월', 10], ['4월', 13], ['7월', 14], ['10월', 11]], scale: 2, question: '4월에서 7월로 갈 때 낮의 길이는?', choices: ['길어져요', '짧아져요', '그대로예요'], why: [null, '7월 막대가 4월 막대보다 더 높아요.', '두 막대의 높이가 서로 달라요.'], explain: '13시간에서 14시간으로 길어져요.' },
              target: { pick: 0 }, difficulty: 0.2,
              conclude: '같은 지역 자료를 달별로 모으면 낮의 길이 변화가 한눈에 보여요.' },
          ]),
      ],
      wrap: '"자료를 모을 때 같은 지역, 같은 해, 같은 종류의 날을 고른 까닭은 무엇인가요?" 계절 때문에 달라진 값만 비교하기 위해서라고 말하게 한다. 출구 2번에서 지역이 다른 값을 섞는 학생에게는 활동 1의 두 번째 문항 풀이를 다시 읽게 한다.',
      exit: [
        { type: 'choice', prompt: '계절별 자료를 모을 때 꼭 같게 해야 하는 것은 무엇인가요?', options: ['자료를 찾는 지역', '찾는 사람의 이름', '자료를 찾는 시각'], answer: 0, difficulty: 0.2, explain: '같은 지역이어야 계절 때문에 달라진 값을 견줄 수 있어요.' },
        { type: 'choice', prompt: '다음 중 남중 고도 자료를 설명한 것은 무엇인가요?', options: ['태양이 정남쪽에 왔을 때의 높이각', '해가 떠서 질 때까지 걸린 시간', '밤하늘에서 보이는 별의 수'], answer: 0, difficulty: 0.2, explain: '남중 고도는 태양이 정남쪽에 왔을 때의 고도예요.' },
        { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '네 달의 낮의 길이(예시 값)', unit: '시간', data: [['2월', 11], ['5월', 14], ['8월', 13], ['11월', 10]], scale: 2, question: '낮이 가장 긴 달은?', choices: ['2월', '5월', '11월'], why: ['2월 막대보다 더 높은 막대가 있어요.', '', '11월은 가장 낮은 막대예요.'] }, prompt: '낮의 길이 그래프를 보고 낮이 가장 긴 달을 골라 보세요. (예시 값)', target: { pick: 1 }, difficulty: 0.2 },
      ],
      ws: [
        { type: 'table', prompt: '내가 모은 자료를 계절별로 정리하는 표를 만드세요. (같은 지역의 값만 쓰세요)', columns: ['날', '남중 고도(°)', '낮의 길이(시간)'], cells: [['봄(춘분)', '', ''], ['여름(하지)', '', ''], ['가을(추분)', '', ''], ['겨울(동지)', '', '']], answer: '선생님이 정해 준 같은 지역의 자료를 옮겨 적었는지 확인(예시 값 52·12, 76·14, 52·12, 29·10)' },
        { type: 'check', prompt: '자료를 모을 때 알맞게 지킨 것에 모두 ✓ 하세요.', options: ['같은 지역의 자료를 모았다', '같은 해의 자료를 모았다', '지역이 다른 값을 섞었다', '춘분·하지·추분·동지 같은 날을 골랐다'], answer: '같은 지역의 자료를 모았다, 같은 해의 자료를 모았다, 춘분·하지·추분·동지 같은 날을 골랐다' },
        { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '자료를 모을 때는 같은 ___의 같은 ___의 값을 써야 계절 때문에 달라진 점을 알 수 있어요.', answer: '지역, 해' },
        { type: 'choice', prompt: '낮의 길이 자료를 가장 알맞게 설명한 것은 무엇인가요?', options: ['해가 뜨고 질 때까지의 시간', '태양의 높이각', '그림자의 길이'], answer: '① 해가 뜨고 질 때까지의 시간' },
        { type: 'short', prompt: '서울의 하지 자료와 부산의 동지 자료를 한 표에 모으면 안 되는 까닭을 쓰세요.', answer: '지역과 계절이 모두 달라 값의 차이가 계절 때문인지 지역 때문인지 알 수 없다.' },
      ],
      easyNote: '같은 지역의 자료만 모아요. 하지·동지처럼 같은 종류의 날을 골라요.',
      easy: [
        { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '자료는 같은 ___의 값만 모아요.', answer: '지역' },
        { type: 'choice', prompt: '자료를 모을 때 바른 것에 ○ 하세요.', options: ['같은 지역', '다른 지역'], answer: '같은 지역' },
        { type: 'check', prompt: '남중 고도 자료를 설명한 것에 ✓ 하세요.', options: ['태양이 정남쪽에 왔을 때의 높이', '해가 떠서 질 때까지의 시간'], answer: '태양이 정남쪽에 왔을 때의 높이' },
        { type: 'draw', prompt: '우리 지역의 여름과 겨울 낮의 길이를 막대로 그려 보세요.' },
      ],
      diff: {
        easy: '막대 값이 보이고, 카드를 놓으면 맞는지 바로 알려 줘요.',
        base: '값 글자 없이 눈금을 읽어 답하고 모두 놓은 뒤 확인해요.',
        challenge: '자료를 모으는 조건 가운데 함정 카드를 가려내고 막대 값의 차를 구해요.',
      },
      notes: '준비물: 컴퓨터나 태블릿(선생님이 안내한 천문 누리집), 기록지. 자주 보이는 어려움: ① 지역이 다른 값을 섞어 모은다. ② 날짜를 아무렇게나 고른다. ③ 단위 없이 숫자만 적는다. 모든 수치는 예시 값이다. 누리집을 쓸 수 없을 때는 선생님이 준비한 인쇄 자료로 대신한다.',
    }),
    // ───────────────────────── 9차시 (core) ─────────────────────────
    mk(9, {
      title: '자전축이 기울어진 채 공전하면 계절이 바뀌는 까닭 알기',
      objective: '지구의 자전축이 한쪽으로 기울어진 채 태양 둘레를 공전하기 때문에 계절마다 남중 고도가 달라져 계절이 바뀐다고 설명할 수 있다.',
      std: ['[6과13-03]'], safety: [SUN_SAFE],
      ill: 'a paper sun and a paper Earth drawn at four places on a dotted circle, with a tilted stick through each Earth always leaning the same way, and warm and cool colors for the seasons',
      sceneText: '계절은 왜 바뀔까요?', kind: 'both',
      intro: [
        '"여름이 더운 까닭은 지구가 태양에 더 가까워지기 때문일까요?" 학생 생각을 칠판에 적어 둔다. 지구가 태양에 가장 가까운 때는 1월 초이고 가장 먼 때는 7월 초라고 알려 주고, 거리 때문이라면 7월이 더 추워야 하지 않느냐고 되묻는다. 거리 차이는 계절을 만들 만큼 크지 않다는 것도 말해 둔다. 수치는 예시 값이다.',
        '계절이 바뀌는 까닭은 무엇일까요? 지구와 태양 사이 거리 때문일까요, 다른 까닭이 있을까요?',
      ],
      acts: [
        A('a1', '활동 1. 계절이 바뀌는 까닭을 바르게 가려내기', 13, 'mindmap',
          '계절이 바뀌는 까닭을 설명한 카드를 읽고 바른 것만 고르거나 까닭과 결과를 이어요.',
          '"거리가 가까우면 더울 텐데, 지구가 태양에 가장 가까운 1월은 왜 겨울일까요?" 거리가 원인이 아니라는 것을 사실로 확인하게 한다. 지구 자전축이 공전하는 동안 방향이 바뀐다고 말하는 학생에게는 지구본을 돌리며 축이 늘 같은 쪽을 가리키는 것을 보여 준다.',
          { easy: { live: true, instant: true }, base: {}, challenge: {} },
          [
            { prompt: '계절이 바뀌는 까닭을 바르게 설명한 카드만 바구니에 넣어 보세요.',
              toolOptions: { mode: 'pick', topic: '계절이 바뀌는 까닭', basket: '바른 설명', cards: [
                { id: 'a', text: '자전축이 기울어진 채 태양 둘레를 공전해요' }, { id: 'b', text: '자리마다 같은 곳의 남중 고도가 달라져요' }, { id: 'c', text: '자전축은 공전하는 동안 늘 같은 쪽을 가리켜요' },
                { id: 'd', text: '지구와 태양 사이 거리가 달라져서 계절이 생겨요', why: '지구는 1월에 태양에 가장 가깝지만 겨울이에요. 거리가 계절의 원인이 아니에요.' }, { id: 'e', text: '태양의 크기가 계절마다 변해요', why: '태양의 크기가 변해서 계절이 생기는 것이 아니에요.' }] },
              target: { pick: ['a', 'b', 'c'] }, difficulty: 0.3 },
            { prompt: '계절이 바뀌는 까닭으로 맞는 것과 아닌 것으로 나누어 보세요.',
              toolOptions: { mode: 'sort', topic: '계절의 원인', slots: ['계절이 바뀌는 까닭이에요', '까닭이 아니에요'], cards: ['자전축이 기울어져 있어요', '지구가 태양 둘레를 공전해요', '지구와 태양 사이 거리가 바뀌어요', '태양이 지구 둘레를 하루에 한 바퀴 돌아요'] },
              target: { sort: { '계절이 바뀌는 까닭이에요': ['자전축이 기울어져 있어요', '지구가 태양 둘레를 공전해요'], '까닭이 아니에요': ['지구와 태양 사이 거리가 바뀌어요', '태양이 지구 둘레를 하루에 한 바퀴 돌아요'] } }, difficulty: 0.25,
              predict: { q: '지구가 태양에 가장 가까운 1월 초에 우리나라는 어느 계절일까요?', options: ['겨울', '여름', '잘 모르겠어요'], answer: 0 },
              conclude: '계절은 거리가 아니라 자전축이 기울어진 채 공전해서 바뀌어요.' },
            { prompt: '궁금한 점과 알맞은 답을 이어 보세요. 알맞지 않은 카드는 남겨 둬요.',
              toolOptions: { mode: 'match', topic: '까닭 이어 보기', slots: [{ id: 'q1', label: '계절마다 남중 고도가 달라지는 까닭' }, { id: 'q2', label: '지구가 태양을 한 바퀴 도는 데 걸리는 시간' }], cards: [{ id: 'tilt', text: '자전축이 기울어진 채 공전하기 때문' }, { id: 'year', text: '1년' }, { id: 'dist', text: '태양에 가까워졌다 멀어지기 때문', why: '거리 차이는 계절 변화의 까닭이 아니에요.' }, { id: 'day', text: '하루', why: '하루는 지구가 한 바퀴 자전하는 데 걸리는 시간이에요.' }] },
              target: { match: { q1: 'tilt', q2: 'year' } }, difficulty: 0.2 },
          ]),
        A('a2', '활동 2. 지구 모형에서 자전축의 기울기 살펴보기', 12, 'earth',
          '태양 둘레를 도는 지구예요. 지구를 계절 자리로 옮기고, 흰 선(자전축)이 자리마다 어느 쪽을 가리키는지 살펴봐요.',
          '"자리가 바뀌어도 자전축이 가리키는 쪽은 같을까요?" 그림에서 흰 선이 네 자리에서 모두 같은 쪽으로 기울어져 있음을 손으로 짚게 한다. 자전축이 태양을 향해 따라간다고 생각하는 학생에게는 각 자리에서 선이 태양을 가리키는지 하나씩 확인하게 한다.',
          { easy: { seasonNames: true }, base: {}, challenge: { seasonNames: false } },
          [
            { prompt: '지구를 여름 자리로 옮겨 보세요.', state: { season: '겨울' }, toolOptions: { mode: 'orbit' }, target: { season: '여름' }, difficulty: 0.15 },
            { prompt: '그림의 네 자리에서 지구 자전축은 어느 쪽을 가리키는지 골라 보세요.', state: { season: '봄' }, toolOptions: { mode: 'orbit', readOnly: true, ask: { q: '자전축(흰 선)이 가리키는 쪽은?', choices: ['네 자리에서 모두 같은 쪽', '언제나 태양 쪽', '자리마다 달라요'], why: [null, '그림에서 흰 선은 자리가 바뀌어도 태양을 따라가지 않아요.', '네 자리의 흰 선은 같은 쪽으로 기울어 있어요.'] } }, target: { pick: 0 }, difficulty: 0.25 },
            { prompt: '지구를 봄 자리로 옮겨 보세요.', state: { season: '가을' }, toolOptions: { mode: 'orbit' }, target: { season: '봄' }, difficulty: 0.15,
              conclude: '자전축은 같은 쪽을 가리킨 채 공전하므로 자리마다 태양에 대한 기울기가 달라져요.' },
          ]),
      ],
      wrap: '"계절이 바뀌는 까닭을 자전축과 공전을 넣어 말해 볼까요?" 자전축이 기울어진 채 공전하기 때문에 남중 고도가 달라진다고 말하게 한다. 출구 1번에서 거리를 고른 학생에게는 지구가 태양에 가장 가까운 때가 겨울이라는 사실을 다시 말해 준다.',
      exit: [
        { type: 'choice', prompt: '계절이 바뀌는 까닭으로 알맞은 것은 무엇인가요?', options: ['자전축이 기울어진 채 공전하기 때문', '지구와 태양 사이 거리가 변하기 때문', '태양이 하루에 한 바퀴 돌기 때문'], answer: 0, difficulty: 0.25, explain: '자전축이 기울어진 채 공전해서 계절마다 남중 고도가 달라져요.' },
        { type: 'tool', tool: 'earth', options: { mode: 'orbit' }, state: { season: '봄' }, prompt: '지구를 가을 자리로 옮겨 보세요.', target: { season: '가을' }, difficulty: 0.2 },
        { type: 'short', prompt: '지구가 태양에 가장 가까운 때가 겨울인데도 추운 까닭을 자전축을 넣어 쓰세요.', answer: '계절은 거리가 아니라 자전축이 기울어져 남중 고도가 낮아지는 것 때문에 생기기 때문이다.' },
      ],
      ws: [
        { type: 'figure', prompt: '지구가 있는 자리 그림을 보고 흰 선(자전축)이 기울어진 쪽이 같은지 ○ 하세요.', tool: 'earth', options: { mode: 'orbit' }, figures: [
          { state: { season: '여름' }, caption: '(같은 쪽 / 다른 쪽)' }, { state: { season: '겨울' }, caption: '(같은 쪽 / 다른 쪽)' }], answer: '같은 쪽, 같은 쪽' },
        { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '지구는 ___이 기울어진 채 태양 둘레를 ___하기 때문에 계절이 바뀌어요.', answer: '자전축, 공전' },
        { type: 'choice', prompt: '지구가 태양에 가장 가까운 때는 언제인가요?', options: ['1월 초(겨울)', '7월 초(여름)', '4월 초(봄)'], answer: '① 1월 초(겨울)' },
        { type: 'table', prompt: '계절이 바뀌는 까닭이 맞으면 ○, 아니면 ×를 쓰세요.', columns: ['까닭', '○ 또는 ×'], cells: [['자전축이 기울어져 있다', ''], ['지구와 태양 사이 거리가 크게 변한다', ''], ['지구가 태양 둘레를 공전한다', '']], answer: '○, ×, ○' },
        { type: 'short', prompt: '"여름은 지구가 태양에 가까워져서 덥다"는 말을 고쳐 써 보세요.', answer: '여름은 자전축이 기울어져 남중 고도가 높아지기 때문에 덥다.' },
      ],
      easyNote: '지구는 기울어진 채 태양 둘레를 돌아요. 그래서 계절이 바뀌어요.',
      easy: [
        { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '지구의 ___이 기울어진 채 공전해서 계절이 바뀌어요.', answer: '자전축' },
        { type: 'choice', prompt: '계절이 바뀌는 까닭에 ○ 하세요.', options: ['자전축이 기울어서', '거리가 달라서'], answer: '자전축이 기울어서' },
        { type: 'figure', prompt: '지구가 여름 자리인 그림에 ○ 하세요.', tool: 'earth', options: { mode: 'orbit' }, figures: [{ state: { season: '여름' }, caption: '(    )' }, { state: { season: '겨울' }, caption: '(    )' }], answer: '첫 번째' },
        { type: 'draw', prompt: '태양과 기울어진 지구를 그려 보세요.' },
      ],
      diff: {
        easy: '계절 자리 이름이 보이고, 카드를 놓으면 맞는지 바로 알려 줘요.',
        base: '모두 놓은 뒤 확인을 눌러 스스로 고치고 계절 자리 이름이 보여요.',
        challenge: '계절 자리 이름이 없고 거리 같은 함정 카드를 가려내요.',
      },
      notes: '준비물: 지구본, 전등. 자주 보이는 어려움: ① 거리 때문에 계절이 바뀐다고 생각한다 → 지구가 태양에 가장 가까운 때는 1월 초라는 사실로 반박. ② 자전축이 공전하며 태양을 따라간다고 생각한다. ③ 낮밤 원인(자전)과 계절 원인(기울어진 채 공전)을 섞는다. 수치는 예시 값이다.',
    }),

    // ───────────────────────── 10차시 (practice) ─────────────────────────
    mk(10, {
      title: '자전축이 기울지 않았다면 어떨지, 기울어진 방향으로 계절 맞히기',
      objective: '자전축이 기울지 않았다면 계절 변화가 거의 없다는 것을 추론하고, 지구가 있는 자리에서 북반구의 기울어진 방향으로 계절을 말할 수 있다.',
      std: ['[6과13-03]'], safety: [SUN_SAFE],
      ill: 'two paper Earths side by side, one with a tilted stick and a warm half and one with an upright stick and an even band of light, with a question mark above',
      sceneText: '기울지 않았다면 어떨까요?', kind: 'both',
      intro: [
        '"지구의 자전축이 똑바로 서 있다면 우리나라의 여름과 겨울은 어떻게 될까요?" 상상해 보는 문제로 시작한다. 정답을 말해 주지 않고 오늘 모형으로 따져 보겠다고 알린다. 계절마다 자전축이 가리키는 방향이 다르다고 생각하는 학생이 많으니 그림으로 확인한다. 수치는 예시 값이다.',
        '자전축이 기울지 않았다면 계절은 어떻게 될까요? 지구가 어느 자리에 있을 때 북반구가 태양 쪽으로 기울까요?',
      ],
      acts: [
        A('a1', '활동 1. 기울어진 지구와 기울지 않은 지구 비교하기', 12, 'mindmap',
          '자전축이 기울어 있을 때와 기울지 않았다고 가정했을 때를 비교하고, 북반구가 기울어진 방향과 모습을 이어요.',
          '"자전축이 기울지 않았다면 한낮 태양의 높이가 1년 내내 거의 같을까요?" 남중 고도가 같으면 낮의 길이도 거의 같아 계절 변화가 사라진다고 말하게 한다. 이 질문은 상상이므로 실제 지구는 기울어져 있다고 한 번 더 짚는다.',
          { easy: { live: true, instant: true }, base: {}, challenge: {} },
          [
            { prompt: '실제 지구와 자전축이 기울지 않았다고 가정한 지구의 모습으로 나누어 보세요.',
              toolOptions: { mode: 'sort', topic: '기울기 비교', slots: ['실제 지구(자전축이 기울어요)', '기울지 않았다고 가정한 지구'], cards: ['계절마다 남중 고도가 달라져요', '1년 내내 한낮 태양 높이가 거의 같아요', '여름과 겨울이 뚜렷해요', '계절 변화가 거의 없어요'] },
              target: { sort: { '실제 지구(자전축이 기울어요)': ['계절마다 남중 고도가 달라져요', '여름과 겨울이 뚜렷해요'], '기울지 않았다고 가정한 지구': ['1년 내내 한낮 태양 높이가 거의 같아요', '계절 변화가 거의 없어요'] } }, difficulty: 0.25,
              predict: { q: '자전축이 기울지 않았다면 여름과 겨울의 차이는 어떨까요?', options: ['거의 없어요', '더 뚜렷해요', '잘 모르겠어요'], answer: 0 },
              conclude: '자전축이 기울어 있어서 남중 고도가 달라지고 계절이 생겨요.' },
            { prompt: '북반구가 기울어진 방향과 그때의 모습을 이어 보세요. 알맞지 않은 카드는 남겨 둬요.',
              toolOptions: { mode: 'match', topic: '기울어진 방향', slots: [{ id: 'n1', label: '북반구가 태양 쪽으로 기울어진 때' }, { id: 'n2', label: '북반구가 태양 반대쪽으로 기울어진 때' }], cards: [{ id: 'sum', text: '남중 고도가 높고 낮이 길어요(여름)' }, { id: 'win', text: '남중 고도가 낮고 낮이 짧아요(겨울)' }, { id: 'odd', text: '남중 고도가 낮은데 낮이 길어요', why: '남중 고도가 낮으면 낮은 짧아요. 두 값은 같은 방향으로 변해요.' }, { id: 'same', text: '1년 내내 똑같아요', why: '기울어 있어서 계절마다 달라요.' }] },
              target: { match: { n1: 'sum', n2: 'win' } }, difficulty: 0.3 },
            { prompt: '자전축을 설명한 카드 가운데 바른 것만 바구니에 넣어 보세요.',
              toolOptions: { mode: 'pick', topic: '자전축', basket: '바른 설명', cards: [
                { id: 'a', text: '지구의 자전축은 약 23.5° 기울어져 있어요' }, { id: 'b', text: '공전하는 동안 자전축의 기울기 방향은 그대로예요' }, { id: 'c', text: '기울어진 방향 때문에 자리마다 태양에 대한 기울기가 달라져요' },
                { id: 'd', text: '자전축은 공전하면서 태양을 따라가요', why: '자전축은 같은 쪽을 가리킨 채 공전해요.' }, { id: 'e', text: '자전축이 기울지 않아도 계절은 똑같이 생겨요', why: '자전축이 기울지 않으면 계절 변화가 거의 없어요.' }] },
              target: { pick: ['a', 'b', 'c'] }, difficulty: 0.3 },
          ]),
        A('a2', '활동 2. 그림에서 북반구가 기울어진 쪽 찾기', 13, 'earth',
          '지구 그림을 보고 북반구가 태양 쪽으로 기울었는지, 반대쪽으로 기울었는지 골라요. 지구를 옮기는 문항도 있어요.',
          '"그림에서 흰 선의 윗부분이 태양 쪽인가요, 반대쪽인가요?" 흰 선의 윗끝을 짚으며 태양과 같은 쪽인지 말하게 한다. 봄·가을 자리에서 어느 쪽이라고 하기 어려운 까닭을 "옆으로 기울어서"라고 말하게 한다.',
          { easy: { seasonNames: true }, base: {}, challenge: { seasonNames: false } },
          [
            { prompt: '지구가 겨울 자리에 있어요. 북반구는 태양을 기준으로 어느 쪽으로 기울어 있을까요?', state: { season: '겨울' }, toolOptions: { mode: 'orbit', readOnly: true, ask: { q: '북반구가 기울어진 쪽은?', choices: ['태양 반대쪽', '태양 쪽'], why: [null, '북반구가 태양 쪽으로 기울면 남중 고도가 높아져 여름이에요.'] } }, target: { pick: 0 }, difficulty: 0.2 },
            { prompt: '지구가 여름 자리에 있어요. 북반구는 태양을 기준으로 어느 쪽으로 기울어 있을까요?', state: { season: '여름' }, toolOptions: { mode: 'orbit', readOnly: true, ask: { q: '북반구가 기울어진 쪽은?', choices: ['태양 반대쪽', '태양 쪽'], why: ['북반구가 태양 반대쪽으로 기울면 남중 고도가 낮아져 겨울이에요.', null] } }, target: { pick: 1 }, difficulty: 0.2 },
            { prompt: '지구가 봄 자리에 있어요. 자전축은 태양을 기준으로 어떻게 기울어 있을까요?', state: { season: '봄' }, toolOptions: { mode: 'orbit', readOnly: true, ask: { q: '봄 자리에서 자전축은?', choices: ['태양 쪽도 반대쪽도 아닌 옆으로', '태양 쪽으로', '태양 반대쪽으로'], why: [null, '태양 쪽으로 기울면 여름 자리예요.', '태양 반대쪽으로 기울면 겨울 자리예요.'] } }, target: { pick: 0 }, difficulty: 0.3 },
            { prompt: '지구를 겨울 자리에서 한 자리 더 옮겨 북반구가 옆으로 기울어지는 봄 자리로 가 보세요.', state: { season: '겨울' }, toolOptions: { mode: 'orbit' }, target: { season: '봄' }, difficulty: 0.15,
              conclude: '북반구가 태양 쪽으로 기울면 여름, 반대쪽으로 기울면 겨울, 옆으로 기울면 봄이나 가을이에요.' },
          ]),
      ],
      wrap: '"북반구가 태양 쪽으로 기울어진 자리는 어느 계절일까요?" 여름이라고 말하고 그때 남중 고도가 높고 낮이 길다고 이어 말하게 한다. 출구 2번에서 겨울과 여름을 바꾼 학생에게는 흰 선의 윗끝과 태양의 위치를 손으로 이어 보게 한다. 자전축이 기울지 않은 가정은 이해를 돕는 상상임을 한 번 더 말한다.',
      exit: [
        { type: 'choice', prompt: '자전축이 기울지 않았다면 계절 변화는 어떻게 될까요?', options: ['거의 없어요', '더 뚜렷해져요', '지금과 같아요'], answer: 0, difficulty: 0.2, explain: '남중 고도가 1년 내내 거의 같아 계절 변화가 거의 없어요.' },
        { type: 'tool', tool: 'earth', options: { mode: 'orbit', readOnly: true, ask: { q: '북반구가 기울어진 쪽은?', choices: ['태양 쪽', '태양 반대쪽'] } }, state: { season: '여름' }, prompt: '지구가 여름 자리에 있을 때 북반구가 기울어진 쪽을 골라 보세요.', target: { pick: 0 }, difficulty: 0.25 },
        { type: 'short', prompt: '북반구가 태양 반대쪽으로 기울어진 자리는 어느 계절인지 쓰세요.', answer: '겨울이다.' },
      ],
      ws: [
        { type: 'figure', prompt: '그림에서 흰 선(자전축)의 윗끝이 태양 쪽으로 기울었는지 ○ 하세요.', tool: 'earth', options: { mode: 'orbit', seasonNames: false }, figures: [
          { state: { season: '여름' }, caption: '(태양 쪽 / 반대쪽)' }, { state: { season: '겨울' }, caption: '(태양 쪽 / 반대쪽)' }], answer: '태양 쪽, 반대쪽' },
        { type: 'table', prompt: '북반구가 기울어진 방향과 계절을 이어 쓰세요.', columns: ['북반구가 기울어진 방향', '계절'], cells: [['태양 쪽', ''], ['태양 반대쪽', '']], answer: '여름, 겨울' },
        { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '자전축이 기울지 않았다면 계절 변화가 ___고, 기울어 있기 때문에 남중 고도가 ___ 달라져요.', answer: '거의 없, 계절마다' },
        { type: 'choice', prompt: '자전축에 대한 설명으로 알맞은 것은 무엇인가요?', options: ['공전하는 동안 기울기 방향이 같다', '태양을 따라 방향이 바뀐다', '기울지 않았다'], answer: '① 공전하는 동안 기울기 방향이 같다' },
        { type: 'short', prompt: '자전축이 기울지 않았다고 가정하면 남중 고도는 계절마다 어떻게 될지 쓰세요.', answer: '1년 내내 거의 같을 것이다.' },
      ],
      easyNote: '북반구가 태양 쪽으로 기울면 여름, 반대쪽으로 기울면 겨울이에요.',
      easy: [
        { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '북반구가 태양 쪽으로 기울면 ___이에요.', answer: '여름' },
        { type: 'choice', prompt: '북반구가 태양 반대쪽으로 기울 때 계절에 ○ 하세요.', options: ['여름', '겨울'], answer: '겨울' },
        { type: 'figure', prompt: '북반구가 태양 쪽으로 기울어진 그림에 ○ 하세요.', tool: 'earth', options: { mode: 'orbit' }, figures: [{ state: { season: '여름' }, caption: '(    )' }, { state: { season: '겨울' }, caption: '(    )' }], answer: '첫 번째' },
        { type: 'draw', prompt: '기울어진 지구가 태양 둘레에서 두 자리에 있는 모습을 그려 보세요.' },
      ],
      diff: {
        easy: '계절 자리 이름이 보이고, 카드를 놓으면 맞는지 바로 알려 줘요.',
        base: '모두 놓은 뒤 확인을 눌러 스스로 고치고 계절 자리 이름이 보여요.',
        challenge: '계절 자리 이름이 없고 봄 자리처럼 옆으로 기운 모습을 가려내요.',
      },
      notes: '준비물: 지구본(자전축 기울기 표시), 전등. 자주 보이는 어려움: ① 자전축이 기울지 않아도 계절이 생긴다고 생각한다. ② 흰 선의 윗끝과 태양 위치를 연결하지 못한다. ③ 봄·가을 자리의 기울기를 태양 쪽·반대쪽으로 말한다. 자전축 기울기 약 23.5°는 보충 사실이다.',
    }),

    // ───────────────────────── 11차시 (core) ─────────────────────────
    mk(11, {
      title: '계절별 지구 자리와 햇빛이 닿는 모습 그림으로 나타내기',
      objective: '태양 둘레를 도는 지구의 계절별 자리와 자전축의 기울기, 햇빛이 닿는 각의 차이를 그림으로 나타내고 설명할 수 있다.',
      std: ['[6과13-03]'], safety: [SUN_SAFE],
      ill: 'a paper diagram of a sun with parallel light rays reaching four small tilted Earths on a dotted circle, with steep rays on one Earth and shallow rays on another',
      sceneText: '햇빛 닿는 모습을 그려요', kind: 'both',
      intro: [
        '"친구가 지구 네 자리를 그렸는데 자전축을 자리마다 다른 쪽으로 그렸어요. 어디가 잘못됐을까요?" 계절별로 자전축이 향하는 쪽을 다르게 그리는 사례를 보여 준다. 그림에 꼭 필요한 것(태양, 지구가 도는 길, 같은 쪽으로 기운 자전축, 햇빛 화살표)을 학생과 정한다. 수치는 예시 값이다.',
        '계절별 지구 그림에는 무엇을 그려야 할까요? 햇빛이 닿는 모습은 계절마다 어떻게 다를까요?',
      ],
      acts: [
        A('a1', '활동 1. 그림을 읽고 계절과 햇빛 모습 말하기', 13, 'earth',
          '지구 그림을 보고 계절 자리와 햇빛이 닿는 모습을 골라요. 흰 선(자전축)의 기울어진 쪽을 먼저 살펴요.',
          '"그림에서 북반구에 닿는 햇빛은 곧게 닿을까요, 비스듬히 닿을까요?" 햇빛이 곧게 닿을수록 같은 면적이 받는 에너지가 많다는 것을 손전등으로 보여 준다. 햇빛이 곧게 닿으면 태양과 가까워서 덥다고 말하는 학생에게는 거리 때문이 아니라 각도 때문임을 짚는다.',
          { easy: { seasonNames: true }, base: {}, challenge: { seasonNames: false } },
          [
            { prompt: '그림 속 지구는 북반구가 태양 쪽으로 기울어 있어요. 이 자리는 어느 계절 자리일까요?', state: { season: '여름' }, toolOptions: { mode: 'orbit', readOnly: true, seasonNames: false, ask: { q: '북반구가 태양 쪽으로 기운 자리의 계절은?', choices: ['여름', '겨울', '봄'], why: [null, '북반구가 태양 반대쪽으로 기울면 겨울 자리예요.', '봄 자리에서는 자전축이 옆으로 기울어 있어요.'] } }, target: { pick: 0 }, difficulty: 0.2 },
            { prompt: '지구가 겨울 자리에 있어요. 북반구에 닿는 햇빛은 어떨까요?', state: { season: '겨울' }, toolOptions: { mode: 'orbit', readOnly: true, ask: { q: '겨울 자리에서 북반구에 닿는 햇빛은?', choices: ['비스듬하게 닿아요', '수직에 가깝게 닿아요', '닿지 않아요'], why: [null, '수직에 가깝게 닿는 때는 남중 고도가 높은 여름이에요.', '햇빛은 겨울에도 닿아요. 다만 비스듬해요.'] } }, target: { pick: 0 }, difficulty: 0.3 },
            { prompt: '지구가 여름 자리에 있어요. 북반구에 닿는 햇빛은 어떨까요?', state: { season: '여름' }, toolOptions: { mode: 'orbit', readOnly: true, ask: { q: '여름 자리에서 북반구에 닿는 햇빛은?', choices: ['수직에 가깝게 닿아요', '비스듬하게 닿아요', '닿지 않아요'], why: [null, '비스듬하게 닿는 때는 남중 고도가 낮은 겨울이에요.', '햇빛은 여름에 더 많이 닿아요.'] } }, target: { pick: 0 }, difficulty: 0.3,
              conclude: '북반구가 태양 쪽으로 기울면 햇빛이 곧게 닿아 남중 고도가 높고, 반대쪽으로 기울면 비스듬히 닿아요.' },
          ]),
        A('a2', '활동 2. 그림에 들어갈 것 정하고 그리는 차례 놓기', 12, 'mindmap',
          '계절별 지구 그림에 꼭 필요한 것을 고르고, 계절 자리와 햇빛 모습을 이어요. 그리는 차례도 놓아요.',
          '"자전축은 네 자리에서 모두 같은 쪽으로 그리면 되나요?" 흰 선이 네 자리에서 같은 쪽으로 기울어 있음을 말하게 한다. 자전축을 자리마다 태양 쪽으로 돌려 그리는 학생에게는 지난 시간 모형 그림을 다시 보게 한다.',
          { easy: { live: true, instant: true }, base: {}, challenge: {} },
          [
            { prompt: '계절별 지구 그림에 꼭 들어가야 하는 것만 바구니에 넣어 보세요.',
              toolOptions: { mode: 'pick', topic: '그림에 들어갈 것', basket: '꼭 필요해요', cards: [
                { id: 'sun', text: '태양' }, { id: 'path', text: '지구가 도는 길과 네 자리' }, { id: 'axis', text: '같은 쪽으로 기울어진 자전축' }, { id: 'ray', text: '햇빛이 닿는 모습(화살표)' },
                { id: 'moon', text: '달 그림', why: '계절의 까닭을 나타내는 데 꼭 필요하지 않아요.' }, { id: 'dist', text: '태양까지 거리 숫자', why: '계절은 거리 때문이 아니므로 그림에 꼭 필요하지 않아요.' }] },
              target: { pick: ['sun', 'path', 'axis', 'ray'] }, difficulty: 0.25 },
            { prompt: '계절 자리와 북반구에 햇빛이 닿는 모습을 이어 보세요. 알맞지 않은 카드는 남겨 둬요.',
              toolOptions: { mode: 'match', topic: '자리와 햇빛', slots: [{ id: 'r1', label: '여름 자리' }, { id: 'r2', label: '겨울 자리' }], cards: [{ id: 'steep', text: '햇빛이 수직에 가깝게 닿아요' }, { id: 'slant', text: '햇빛이 비스듬하게 닿아요' }, { id: 'none', text: '햇빛이 닿지 않아요', why: '겨울에도 햇빛은 닿아요.' }, { id: 'both', text: '햇빛이 두 배로 닿아요', why: '닿는 각이 달라질 뿐 양이 두 배가 되지는 않아요.' }] },
              target: { match: { r1: 'steep', r2: 'slant' } }, difficulty: 0.25,
              predict: { q: '햇빛이 비스듬하게 닿으면 같은 넓이의 땅이 받는 열은 어떨까요?', options: ['적어요', '많아요', '잘 모르겠어요'], answer: 0 },
              conclude: '햇빛이 비스듬히 닿으면 넓게 퍼져 같은 넓이가 받는 열이 적어요.' },
            { prompt: '계절별 지구 그림을 그리는 차례대로 카드를 놓아 보세요.',
              toolOptions: { mode: 'order', slots: ['첫째', '둘째', '셋째', '넷째', '다섯째'], cards: [
                { id: 'g4', text: '자리마다 같은 쪽으로 기운 자전축을 그려요' }, { id: 'g1', text: '한가운데 태양을 그려요' }, { id: 'g5', text: '북반구에 닿는 햇빛 화살표를 그려요' }, { id: 'g3', text: '지구 네 자리를 그려요' }, { id: 'g2', text: '지구가 도는 길을 그려요' }] },
              target: { order: ['g1', 'g2', 'g3', 'g4', 'g5'] }, difficulty: 0.3 },
          ]),
      ],
      wrap: '"계절별 지구 그림에서 꼭 맞게 그려야 하는 것은 무엇일까요?" 자전축의 기울어진 방향이 네 자리에서 같아야 한다고 말하게 한다. 출구 2번에서 자전축 방향을 다르게 그린 학생에게는 활동 2의 세 번째 문항을 다시 풀어 보게 한다.',
      exit: [
        { type: 'choice', prompt: '계절별 지구 그림에서 자전축은 어떻게 그려야 하나요?', options: ['네 자리에서 모두 같은 쪽으로 기울어지게', '태양 쪽으로 향하게', '자리마다 다른 쪽으로'], answer: 0, difficulty: 0.2, explain: '자전축은 공전하는 동안 같은 쪽을 가리켜요.' },
        { type: 'tool', tool: 'earth', options: { mode: 'orbit', readOnly: true, ask: { q: '겨울 자리에서 북반구에 닿는 햇빛은?', choices: ['비스듬하게', '수직에 가깝게'] } }, state: { season: '겨울' }, prompt: '겨울 자리에서 북반구에 닿는 햇빛 모습을 골라 보세요.', target: { pick: 0 }, difficulty: 0.25 },
        { type: 'short', prompt: '여름에 햇빛이 수직에 가깝게 닿으면 남중 고도는 어떤지 쓰세요.', answer: '남중 고도가 높다.' },
      ],
      ws: [
        { type: 'figure', prompt: '그림의 지구가 있는 자리 이름(봄, 여름, 가을, 겨울)을 쓰세요.', tool: 'earth', options: { mode: 'orbit', seasonNames: false }, figures: [
          { state: { season: '여름' }, caption: '(      )' }, { state: { season: '겨울' }, caption: '(      )' }], answer: '여름, 겨울' },
        { type: 'draw', prompt: '태양과 지구가 도는 길을 그리고, 여름 자리와 겨울 자리에 기울어진 자전축과 햇빛 화살표를 그려 보세요.' },
        { type: 'table', prompt: '계절과 햇빛이 닿는 모습, 남중 고도를 이어 쓰세요.', columns: ['계절', '햇빛이 닿는 모습', '남중 고도'], cells: [['여름', '', ''], ['겨울', '', '']], answer: '수직에 가깝다·높다, 비스듬하다·낮다' },
        { type: 'choice', prompt: '햇빛이 비스듬히 닿을 때 같은 넓이의 땅이 받는 열은 어떤가요?', options: ['적어요', '많아요', '같아요'], answer: '① 적어요' },
        { type: 'short', prompt: '그림에서 자전축을 자리마다 다른 쪽으로 그린 친구에게 해 줄 말을 쓰세요.', answer: '자전축은 공전하는 동안 같은 쪽을 가리키므로 네 자리 모두 같은 쪽으로 그려야 한다.' },
      ],
      easyNote: '자전축은 네 자리에서 같은 쪽으로 기울어요. 햇빛이 곧게 닿으면 여름, 비스듬히 닿으면 겨울이에요.',
      easy: [
        { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '여름에는 햇빛이 ___에 가깝게 닿아요.', answer: '수직' },
        { type: 'choice', prompt: '자전축을 그리는 방법에 ○ 하세요.', options: ['네 자리에서 모두 같은 쪽', '자리마다 태양 쪽'], answer: '네 자리에서 모두 같은 쪽' },
        { type: 'figure', prompt: '겨울 자리인 그림에 ○ 하세요.', tool: 'earth', options: { mode: 'orbit', seasonNames: false }, figures: [{ state: { season: '여름' }, caption: '(    )' }, { state: { season: '겨울' }, caption: '(    )' }], answer: '두 번째' },
        { type: 'draw', prompt: '여름 자리의 지구에 햇빛 화살표를 그려 보세요.' },
      ],
      diff: {
        easy: '계절 자리 이름이 보이고, 카드를 놓으면 맞는지 바로 알려 줘요.',
        base: '모두 놓은 뒤 확인을 눌러 스스로 고치고 계절 자리 이름이 보여요.',
        challenge: '계절 자리 이름이 없고 자전축 방향으로 계절 자리를 가려내요.',
      },
      notes: '준비물: 손전등, 도화지, 색연필. 자주 보이는 어려움: ① 자전축을 계절마다 다른 쪽으로 그린다. ② 햇빛이 곧게 닿는 까닭을 거리가 가까워서라고 한다. ③ 햇빛 화살표를 그리지 않는다. 손전등을 책상에 수직·비스듬히 비춰 넓이 차이를 보여 주면 이해가 쉽다.',
    }),

    // ───────────────────────── 12차시 (wrap) ─────────────────────────
    mk(12, {
      title: '자전축을 기울인 지구본과 똑바로 선 지구본으로 남중 고도 견주기',
      objective: '자전축을 기울인 지구본과 기울이지 않은 지구본을 태양 모형 둘레에서 옮기며 남중 고도를 재어 견주고, 계절이 바뀌는 까닭으로 단원을 정리할 수 있다.',
      std: ['[6과13-01]', '[6과13-02]', '[6과13-03]'], safety: ['실험에 쓰는 전등은 뜨거울 수 있어 손으로 만지지 않고 눈에 직접 비추지 않아요.', '전선에 걸려 넘어지지 않게 자리를 정리해요.', SUN_SAFE],
      ill: 'two paper globes around a desk lamp, one with a tilted axis and one standing upright, with children placing a small stick and measuring the light angle on each',
      sceneText: '지구본으로 계절을 확인해요', kind: 'both',
      intro: [
        '"자전축을 기울인 지구본과 똑바로 세운 지구본을 전등 둘레로 옮기면 우리나라에 닿는 빛은 어떻게 다를까요?" 두 지구본을 같은 거리에 두고 실험하는 계획을 학생과 함께 세운다. 지구본을 옮길 때 기울인 방향을 바꾸면 조건이 흐트러진다는 점을 먼저 말해 둔다. 전등은 만지지 않는다는 약속을 함께 말해 본다. 수치는 예시 값이다.',
        '자전축을 기울인 지구본을 네 자리로 옮기면서 우리나라에 닿는 빛의 각을 재면 무엇을 알 수 있을까요?',
      ],
      acts: [
        A('a1', '활동 1. 지구본 실험 계획과 결과 정리하기', 13, 'story',
          '실험 순서를 놓고, 같게 지켜야 할 조건을 고르고, 두 지구본의 실험 결과를 나누어요.',
          '"지구본을 옮길 때 기울인 방향을 바꾸면 어떤 일이 생길까요?" 조건이 달라져 결과를 믿을 수 없다고 말하게 한다. 기울이지 않은 지구본에서도 계절이 생긴다고 예상하는 학생에게는 활동 결과의 두 번째 문항을 다시 읽게 한다.',
          { easy: { live: true, instant: true }, base: {}, challenge: {} },
          [
            { prompt: '지구본 실험 순서를 차례대로 놓아 보세요.',
              toolOptions: { mode: 'order', slots: ['첫째', '둘째', '셋째', '넷째'], cards: [
                { id: 'x3', text: '지구본을 네 자리로 옮기며 남중 고도를 재요' }, { id: 'x1', text: '전등을 가운데 두고 지구본의 자전축을 기울여요' }, { id: 'x4', text: '자리마다 잰 남중 고도를 표로 정리해요' }, { id: 'x2', text: '우리나라 자리에 작은 막대를 세워요' }] },
              target: { order: ['x1', 'x2', 'x3', 'x4'] }, difficulty: 0.25 },
            { prompt: '실험할 때 똑같이 지켜야 하는 조건만 바구니에 넣어 보세요.',
              toolOptions: { mode: 'pick', topic: '실험 조건', basket: '똑같이 지켜요', cards: [
                { id: 'dir', text: '자전축이 기울어진 방향' }, { id: 'dist', text: '전등과 지구본 사이 거리' }, { id: 'place', text: '막대를 세운 자리(우리나라)' },
                { id: 'turn', text: '자리마다 기울인 방향 바꾸기', why: '방향이 바뀌면 자리 때문인지 방향 때문인지 알 수 없어요.' }, { id: 'near', text: '자리마다 전등 가까이 놓기', why: '거리가 달라지면 거리 때문에 달라졌다고 말할 수 있어요.' }] },
              target: { pick: ['dir', 'dist', 'place'] }, difficulty: 0.3 },
            { prompt: '두 지구본에서 알게 된 점을 알맞은 쪽에 나누어 보세요.',
              toolOptions: { mode: 'sort', topic: '실험 결과', slots: ['자전축을 기울인 지구본', '자전축을 기울이지 않은 지구본'], cards: ['자리를 옮기면 남중 고도가 달라져요', '자리를 옮겨도 남중 고도가 같아요', '계절 변화를 설명할 수 있어요', '계절 변화를 설명할 수 없어요'] },
              target: { sort: { '자전축을 기울인 지구본': ['자리를 옮기면 남중 고도가 달라져요', '계절 변화를 설명할 수 있어요'], '자전축을 기울이지 않은 지구본': ['자리를 옮겨도 남중 고도가 같아요', '계절 변화를 설명할 수 없어요'] } }, difficulty: 0.3,
              predict: { q: '자전축을 기울이지 않은 지구본을 옮기면 남중 고도는 어떨까요?', options: ['거의 같아요', '크게 달라져요', '잘 모르겠어요'], answer: 0 },
              conclude: '자전축이 기울어 있어야 공전하는 동안 남중 고도가 달라져 계절이 생겨요.' },
          ]),
        A('a2', '활동 2. 단원 돌아보며 모형으로 확인하기', 12, 'earth',
          '단원에서 배운 것을 모형으로 다시 확인해요. 태양 고도와 그림자, 계절 자리, 자전축의 기울어진 쪽을 차례로 살펴봐요.',
          '"여름 한낮과 겨울 한낮 가운데 그림자가 더 짧은 때는 언제인가요? 그 까닭은 무엇인가요?" 자전축이 기울어진 채 공전해서 남중 고도가 달라졌기 때문이라고 이어 말하게 한다. 이 단원의 값은 모두 예시 값이니 실제 측정에서는 날마다 조금 다를 수 있다고 알려 준다.',
          { easy: { readout: true, seasonNames: true }, base: {}, challenge: { seasonNames: false } },
          [
            { prompt: '지구가 겨울 자리에 있어요. 지구를 겨울 자리로 옮겨 보세요.', state: { season: '봄' }, toolOptions: { mode: 'orbit' }, target: { season: '겨울' }, difficulty: 0.2 },
            { prompt: '겨울 하루예요. 태양이 남중하는 때로 옮겨, 그림자가 가장 짧을 때를 찾아 보세요.', state: { hour: 8 }, toolOptions: { mode: 'shadow', hours: HRS_WIN }, target: { shortest: true }, difficulty: 0.25 },
            { prompt: '자전축이 기울지 않은 채 공전한다고 가정해요. 계절 변화는 어떨까요? 골라 보세요.', state: { season: '봄' }, toolOptions: { mode: 'orbit', readOnly: true, ask: { q: '자전축이 기울지 않은 채 공전하면 계절 변화는?', choices: ['거의 없어요', '지금보다 더 뚜렷해요', '낮과 밤이 없어져요'], why: [null, '기울기가 사라지면 남중 고도 차이가 줄어 계절 변화도 줄어요.', '낮과 밤은 자전 때문에 생기고 기울기와는 관계없이 있어요.'] } }, target: { pick: 0 }, difficulty: 0.3,
              conclude: '계절 변화는 자전축이 기울어진 채 공전하기 때문에 생겨요. 태양과의 거리 때문이 아니에요.' },
          ]),
      ],
      wrap: '"우리나라에서 여름이 덥고 겨울이 추운 까닭을 이 단원에서 배운 말로 이어서 말해 볼까요?" 자전축이 기울어진 채 공전해서 남중 고도가 달라지고, 남중 고도가 높으면 낮이 길고 햇빛이 곧게 닿아 덥다고 이어 말하게 한다. 출구 2번에서 거리를 고른 학생에게는 지구가 1월에 태양에 가장 가깝다는 사실을 다시 말해 준다.',
      exit: [
        { type: 'choice', prompt: '자전축을 기울이지 않은 지구본을 옮기며 남중 고도를 재면 어떤 결과가 나오나요?', options: ['자리를 옮겨도 거의 같아요', '자리마다 크게 달라요', '계속 높아져요'], answer: 0, difficulty: 0.25, explain: '기울지 않으면 자리가 바뀌어도 남중 고도가 거의 같아 계절을 설명할 수 없어요.' },
        { type: 'choice', prompt: '여름이 겨울보다 더운 까닭으로 알맞은 것은 무엇인가요?', options: ['남중 고도가 높고 낮이 길어서', '지구가 태양에 훨씬 가까워서', '태양이 더 커져서'], answer: 0, difficulty: 0.25, explain: '자전축이 기울어진 채 공전하여 여름에는 남중 고도가 높고 낮이 길어요.' },
        { type: 'tool', tool: 'earth', options: { mode: 'shadow', hours: { rise: 5, set: 19, top: 76 } }, state: { hour: 8 }, prompt: '여름 하루예요. 막대 그림자가 가장 짧아지는 때로 태양을 옮겨 보세요.', target: { shortest: true }, difficulty: 0.2 },
      ],
      ws: [
        { type: 'table', prompt: '여름과 겨울을 비교해 표를 완성하세요.', columns: ['', '여름', '겨울'], cells: [['남중 고도', '', ''], ['낮의 길이', '', ''], ['한낮 그림자', '', '']], answer: '높다/낮다, 길다/짧다, 짧다/길다' },
        { type: 'figure', prompt: '지구가 있는 자리를 보고 계절 이름을 쓰세요.', tool: 'earth', options: { mode: 'orbit', seasonNames: false }, figures: [
          { state: { season: '여름' }, caption: '(      )' }, { state: { season: '겨울' }, caption: '(      )' }], answer: '여름, 겨울' },
        { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '지구의 ___이 기울어진 채 ___하기 때문에 남중 고도가 계절마다 달라져 계절이 바뀌어요.', answer: '자전축, 공전' },
        { type: 'choice', prompt: '다음 중 계절이 바뀌는 까닭으로 알맞지 않은 것은 무엇인가요?', options: ['지구와 태양 사이 거리가 달라지는 것', '자전축이 기울어진 것', '지구가 공전하는 것'], answer: '① 지구와 태양 사이 거리가 달라지는 것' },
        { type: 'table', prompt: '나의 단원 점검: 할 수 있으면 ○ 하세요.', columns: ['할 수 있는 것', '○'], cells: [['태양 고도와 그림자 길이의 관계 말하기', ''], ['남중 고도와 낮의 길이의 관계 말하기', ''], ['계절이 바뀌는 까닭 설명하기', '']] },
      ],
      easyNote: '지구는 기울어진 채 태양 둘레를 돌아서 계절이 바뀌어요. 거리 때문이 아니에요.',
      easy: [
        { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '여름에는 남중 고도가 ___고 낮이 길어요.', answer: '높' },
        { type: 'choice', prompt: '계절이 바뀌는 까닭에 ○ 하세요.', options: ['기울어진 채 공전', '거리 변화'], answer: '기울어진 채 공전' },
        { type: 'figure', prompt: '여름 자리인 그림에 ○ 하세요.', tool: 'earth', options: { mode: 'orbit', seasonNames: false }, figures: [{ state: { season: '여름' }, caption: '(    )' }, { state: { season: '겨울' }, caption: '(    )' }], answer: '첫 번째' },
        { type: 'draw', prompt: '이 단원에서 가장 기억에 남는 것을 그림으로 나타내 보세요.' },
      ],
      diff: {
        easy: '계절 자리 이름과 고도·그림자 글자가 보이고, 카드를 놓으면 맞는지 바로 알려 줘요.',
        base: '모두 놓은 뒤 확인을 눌러 스스로 고치고 글자는 줄어요.',
        challenge: '계절 자리 이름이 없고 기울지 않은 지구 같은 가정을 한 단계 더 추론해요.',
      },
      notes: '준비물(모둠): 지구본(기울기 조절 가능 또는 공), 손전등 또는 스탠드, 작은 막대, 각도기, 기록지. 전등과 전선 안전을 지킨다. 자주 보이는 어려움: ① 기울인 방향을 옮기면서 바꾼다. ② 지구본과 전등 거리가 자리마다 달라진다. ③ 거리 탓이라는 오개념으로 돌아간다. 자기 점검에서 △가 많은 항목은 다음 시간 앞에서 5분 복습한다. 수치는 예시 값이다.',
    }),
  ];

  PaperLessons.registerUnit({
    id: UID, schema: 'edu-unit.v1', catalogUnit: CU,
    grade: 6, subject: '과학', unitTitle: '1. 계절의 변화',
    flow: '1~4차시는 태양 고도, 그림자 길이, 기온의 관계다. 태양 고도가 높을수록 그림자가 짧아진다는 것을 확인하고(1), 하루 동안 그림자의 길이와 방향을 읽으며(2), 시각별 값을 표와 그래프로 나타내 기온이 더 늦게 가장 높아짐을 보고(3), 측정기를 만들어 한 시간마다 재는 계획을 세운다(4). 5~8차시는 남중 고도와 낮의 길이로, 여름과 겨울을 견주고(5), 낮의 길이를 계산하고(6), 두 값을 그래프로 나타내 관계를 추론하며(7), 같은 지역 자료를 모아 정리한다(8). 9~12차시는 계절이 바뀌는 까닭으로, 거리가 아니라 자전축이 기울어진 채 공전하기 때문임을 알고(9), 기울어진 방향으로 계절을 맞히고(10), 햇빛이 닿는 모습을 그림으로 나타내며(11), 기울인 지구본과 똑바로 선 지구본으로 실험해 단원을 정리한다(12). 자전·공전·별자리는 1학기 지구의 운동 단원에서 다루었으므로 이 단원은 태양 고도·낮의 길이·계절의 원인에 집중한다.',
    refs: {},
    lessons,
  });
})();
