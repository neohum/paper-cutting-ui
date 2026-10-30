/* 6학년 1학기 과학 4. 지구의 운동 — 14차시 중 2차시(g6-science-earth: 지구의 자전과 낮과 밤)는 기존 차시를 잇고 나머지 13차시를 쓴다.
 * 흐름: 하루 동안 태양·별의 위치 관찰(1~5) → 자전과 낮밤(6~10) → 공전과 계절별 별자리(11~14).
 * 확인 필요: 달의 모양 변화(4차시 활동 2)는 [6과12-01]~[6과12-03] 성취기준에 들어 있지 않은 곁가지다(기록할 때 날짜를 함께 적는 까닭으로만 다룬다).
 */
(function () {
  const U = { grade: 6, subject: '과학', unitTitle: '4. 지구의 운동' };
  const CU = 'g6-과학-1학기-4';
  const UID = 'g6-sci-1-04';
  const P = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const MOOD = { type: 'mood', prompt: '오늘 공부는 어땠나요?' };
  const SUN_SAFE = '태양은 맨눈·망원경·쌍안경으로 절대 직접 보지 않아요. 선생님이 알려 준 방법(그림자 보기, 기록 사진 보기)으로만 관찰해요.';
  // 활동지 그림 칸에 쓰는 하루 태양 눈금(우리나라 봄·가을 무렵 예시 값)
  const HRS = { rise: 6, set: 18, top: 60 };
  const NIGHT = { background: '#2E2A45', text: '#FFF9E8' };
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
      title: '하루 동안 태양이 있던 자리를 방위로 말하기',
      objective: '하루 동안 태양이 동쪽 낮은 하늘에서 남쪽 높은 하늘을 지나 서쪽 낮은 하늘로 옮겨 가는 것을 방위로 말할 수 있다.',
      std: ['[6과12-01]'], safety: [SUN_SAFE],
      ill: 'a paper sun drawn at three places along an arch over a small village, low on the east side, high in the south and low on the west side, with a child pointing at them',
      sceneText: '해는 하루 동안 어디에 있을까요?', kind: 'day',
      intro: [
        '"아침에 학교 올 때 해가 어느 쪽에 있었나요? 점심시간에는요?" 학생 대답을 "동쪽, 남쪽, 서쪽"으로 바꿔 말하며 칠판에 적는다. "해가 지구 둘레를 도는 거예요"라고 말하는 학생에게는 지금 정답을 말하지 않고 "이번 단원에서 정말 그런지 차례로 알아볼 거예요"라고 미룬 뒤, 오늘은 눈에 보이는 위치만 기록한다고 정한다. 태양은 직접 보지 않는다는 약속을 먼저 한다.',
        '아침, 점심, 저녁에 해가 하늘 어디쯤 있었는지 떠올려 봐요. 해가 있던 쪽을 방위로 말할 수 있을까요?',
      ],
      acts: [
        A('a1', '활동 1. 때에 따른 해의 자리 나누기', 12, 'mindmap',
          '해가 하늘에서 어디에 보이는지 알맞은 방위 가지에 카드를 넣어요. 카드를 눌러 고른 뒤 가지를 눌러요.',
          '"해가 하루 중 가장 높이 떠 있을 때는 어느 쪽 하늘일까요?" 남쪽이라고 답하면 "그때 우리 그림자는 어느 쪽으로 생겼나요?"로 이어 북쪽 그림자를 떠올리게 한다. 해가 머리 바로 위까지 올라온다고 생각하는 학생이 많다. 우리나라에서는 한낮에도 남쪽 하늘에 비스듬히 높이 떠 있다고 짚는다.',
          { easy: { live: true, instant: true }, base: {}, challenge: {} },
          [
            { prompt: '해가 뜨는 아침, 한낮, 해가 지는 저녁의 모습을 알맞은 방위 가지에 넣어 보세요.',
              toolOptions: { mode: 'sort', topic: '해의 자리', slots: ['동쪽 하늘', '남쪽 하늘', '서쪽 하늘'], cards: ['아침 해가 막 떠올라요', '한낮에 가장 높이 떠 있어요', '저녁 해가 지고 있어요'] },
              target: { sort: { '동쪽 하늘': ['아침 해가 막 떠올라요'], '남쪽 하늘': ['한낮에 가장 높이 떠 있어요'], '서쪽 하늘': ['저녁 해가 지고 있어요'] } }, difficulty: 0.1 },
            { prompt: '민지가 교실 창문에서 본 해예요. 어느 방위의 하늘에서 본 모습인지 이어 보세요.',
              toolOptions: { mode: 'match', topic: '창문으로 본 해', slots: [{ id: 'm1', label: '1교시(오전 9시)' }, { id: 'm2', label: '점심시간(낮 12시 30분)' }, { id: 'm3', label: '청소 시간(오후 4시 30분)' }], cards: [{ id: '동남', text: '동남쪽 낮은 하늘' }, { id: '남', text: '남쪽 높은 하늘' }, { id: '서남', text: '서남쪽 낮은 하늘' }, { id: '북', text: '북쪽 하늘', why: '우리나라에서는 해가 북쪽 하늘에 보이지 않아요.' }] },
              target: { match: { m1: '동남', m2: '남', m3: '서남' } }, difficulty: 0.2,
              predict: { q: '하루 중 해가 가장 높이 떠 있는 때는 언제일까요?', options: ['아침 9시 무렵', '낮 12시 30분 무렵', '저녁 5시 무렵'], answer: 1 },
              conclude: '해는 동쪽에서 떠올라 남쪽에서 가장 높고, 서쪽으로 내려가요.' },
            { prompt: '해가 하루 동안 움직이는 모습을 바르게 쓴 카드만 바구니에 넣어 보세요.',
              toolOptions: { mode: 'pick', topic: '바르게 쓴 말', basket: '해의 움직임', cards: [
                { id: 'a', text: '동쪽에서 떠서 남쪽을 지나요' }, { id: 'b', text: '남쪽 하늘에서 가장 높아요' }, { id: 'c', text: '서쪽으로 내려가며 져요' },
                { id: 'd', text: '북쪽 하늘에서 가장 높아요', why: '북쪽이 아니라 남쪽에서 가장 높아요.' }, { id: 'e', text: '하루 종일 같은 자리에 있어요', why: '해는 시간이 지나면 보이는 자리가 바뀌어요.' }] },
              target: { pick: ['a', 'b', 'c'] }, difficulty: 0.15 },
          ]),
        A('a2', '활동 2. 해를 시각에 맞춰 하늘에 놓기', 13, 'earth',
          '막대 그림자 그림에서 태양을 끌거나 방향키로 옮겨요. 왼쪽이 동쪽, 오른쪽이 서쪽이에요. 태양을 옮기며 높이가 어떻게 달라지는지 봐요.',
          '"태양을 오른쪽으로 옮길수록 높이는 계속 올라갈까요?" 가장 높은 곳을 지나 다시 내려간다는 것을 손가락으로 호를 그리며 말하게 한다. 해가 가장 높은 때를 정오라고 쓰지만 우리나라 시계로는 낮 12시 30분 무렵이라, 교구의 낮 12시는 예시 값이라고 알려 준다.',
          { easy: { readout: true }, base: {}, challenge: {} },
          [
            { prompt: '태양이 가장 높이 떠 있는 때로 태양을 옮겨 보세요.', state: { hour: 8 }, toolOptions: { mode: 'shadow', hours: HRS }, target: { noon: true }, difficulty: 0.1 },
            { prompt: '오후 3시의 태양 자리로 옮겨 보세요. 태양이 어느 쪽으로 내려가는지 살펴봐요.', state: { hour: 9 }, toolOptions: { mode: 'shadow', hours: HRS }, target: { hour: 15 }, difficulty: 0.2 },
            { prompt: '아침 해가 막 떠올라 아직 낮게 있는 때, 오전 7시로 옮겨 보세요.', state: { hour: 13 }, toolOptions: { mode: 'shadow', hours: HRS }, target: { hour: 7 }, difficulty: 0.2,
              conclude: '해는 하루 동안 동쪽 낮은 곳에서 올라가 남쪽에서 가장 높고 서쪽으로 내려가요.' },
            { prompt: '그림을 보고 오후 5시 무렵 태양이 어느 쪽 하늘에 있는지 골라 보세요.', state: { hour: 17 }, toolOptions: { mode: 'shadow', hours: HRS, readOnly: true, ask: { q: '오후 5시 무렵 태양은?', choices: ['동쪽 낮은 하늘', '서쪽 낮은 하늘', '남쪽 높은 하늘'], why: ['동쪽 낮은 하늘은 아침 모습이에요.', null, '남쪽 높은 하늘은 낮 12시 무렵 모습이에요.'] } }, target: { pick: 1 }, difficulty: 0.25 },
          ]),
      ],
      wrap: '"하루 동안 해가 있던 자리를 차례대로 방위로 말해 볼까요?" 동 → 남 → 서의 차례와 "남쪽에서 가장 높다"를 함께 말하게 한다. 출구 2번에서 아침 해를 서쪽에 두는 학생은 학교 운동장 방위 표시를 보며 다시 짚는다. "해가 움직인다"는 말은 오늘은 보이는 모습이라고만 확인하고 까닭은 다음 시간으로 넘긴다.',
      exit: [
        { type: 'choice', prompt: '아침에 해가 막 떠오르는 때, 해는 어느 쪽 하늘에 있나요?', options: ['동쪽 하늘', '남쪽 하늘', '서쪽 하늘'], answer: 0, difficulty: 0.15, explain: '해는 동쪽에서 떠올라 남쪽을 지나 서쪽으로 져요.' },
        { type: 'tool', tool: 'earth', options: { mode: 'shadow', hours: { rise: 6, set: 18, top: 60 } }, state: { hour: 6 }, prompt: '오후 4시의 태양 자리로 옮겨 보세요.', target: { hour: 16 }, difficulty: 0.2, explain: '오후에는 서쪽으로 내려가며 점점 낮아져요.' },
        { type: 'short', prompt: '하루 동안 해가 어느 쪽에서 어느 쪽으로 옮겨 가는지, 방위를 넣어 쓰세요.', answer: '동쪽에서 떠올라 남쪽 하늘에서 가장 높고 서쪽으로 진다.' },
      ],
      ws: [
        { type: 'figure', prompt: '막대 그림자 그림에서 태양의 자리를 보고, 하루 중 언제쯤인지 (아침 / 낮 / 저녁)에 ○ 하세요.', tool: 'earth', options: { mode: 'shadow', hours: HRS }, figures: [
          { state: { hour: 7 }, caption: '(아침 / 낮 / 저녁)' }, { state: { hour: 17 }, caption: '(아침 / 낮 / 저녁)' }], answer: '아침, 저녁' },
        { type: 'blank', prompt: '알맞은 방위를 써넣으세요.', text: '해는 ___쪽에서 떠올라 ___쪽 하늘에서 가장 높이 뜨고 ___쪽으로 져요.', answer: '동, 남, 서' },
        { type: 'table', prompt: '내가 본 해의 자리를 적어 보세요. 해를 바로 보지 말고 건물이나 나무와 견주어 적어요.', columns: ['때', '해가 있던 방위', '높이(낮음·높음)'], cells: [['아침 등교할 때', '', ''], ['점심시간', '', ''], ['집에 갈 때', '', '']], answer: '관찰한 대로. 동·남·서 방위와 낮음·높음을 짝지어 적었는지 확인' },
        { type: 'choice', prompt: '하루 중 해가 가장 높이 있는 때의 방위는 어느 쪽인가요?', options: ['동쪽', '남쪽', '북쪽'], answer: '② 남쪽' },
        { type: 'short', prompt: '"해는 하루 종일 같은 자리에 있다"는 말을 고쳐 써 보세요.', answer: '해는 하루 동안 동쪽에서 서쪽으로 보이는 자리가 바뀐다.' },
      ],
      easyNote: '해는 아침에 동쪽, 낮에 남쪽, 저녁에 서쪽에 보여요. 해를 바로 보면 안 돼요.',
      easy: [
        { type: 'blank', prompt: '알맞은 방위를 써넣으세요.', text: '아침 해는 ___쪽에, 저녁 해는 ___쪽에 보여요.', answer: '동, 서' },
        { type: 'choice', prompt: '해가 가장 높은 때에 ○ 하세요.', options: ['아침', '낮', '저녁'], answer: '낮' },
        { type: 'figure', prompt: '태양이 가장 높은 그림에 ○ 하세요.', tool: 'earth', options: { mode: 'shadow', hours: HRS }, figures: [{ state: { hour: 8 }, caption: '(    )' }, { state: { hour: 12 }, caption: '(    )' }], answer: '두 번째' },
        { type: 'draw', prompt: '아침, 낮, 저녁의 해 자리를 하늘 그림에 그려 보세요.' },
      ],
      diff: {
        easy: '맞는 카드는 바로 초록 테두리가 생기고, 그림자 그림에는 시각과 고도 글자가 보여요.',
        base: '카드를 모두 놓은 뒤 확인을 눌러 스스로 고치고, 시각·고도 글자 없이 태양 자리를 봐요.',
        challenge: '시각과 방위를 짝지어 이어야 하고, 방위가 없는 북쪽 카드가 섞여 있어요.',
      },
      notes: '준비물: 학교 운동장 방위 표시나 나침반, 해 사진(시간대별). 자주 보이는 어려움: ① 해가 한낮에 머리 바로 위까지 올라온다고 생각한다 → 우리나라에서는 남쪽 하늘에 비스듬히 높다. ② 동·서를 헷갈린다 → 해 뜨는 쪽이 동쪽. ③ 해가 움직인다는 말을 실제 움직임으로 받아들인다 → 이 시간에는 보이는 모습만 기록하고 까닭은 6~10차시에서 다룬다. 태양은 직접 보지 않는다.',
    }),
    // ───────────────────────── 3차시 (core) ─────────────────────────
    mk(3, {
      title: '시각과 함께 태양 자리를 점 찍어 이어 보기',
      objective: '관찰한 태양의 위치를 시각과 함께 표에 적고, 점을 이어 태양이 하루 동안 지나간 길이 위로 볼록한 호 모양임을 나타낼 수 있다.',
      std: ['[6과12-01]'], safety: [SUN_SAFE],
      ill: 'a notebook page with five paper-cut sun dots joined by a dotted arch above a tiny house, each dot labeled with a clock time',
      sceneText: '시각과 위치를 함께 적어요', kind: 'day',
      intro: [
        '"어제 오전에 해가 있던 자리만 그려 온 친구가 있어요. 이 그림으로 해가 언제 그 자리에 있었는지 알 수 있을까요?" 시각이 없는 기록을 보여 주고 먼저와 나중을 가릴 수 없음을 느끼게 한다. 위치만 표시하면 규칙을 읽을 수 없다는 점이 이 시간의 핵심이다. 태양은 직접 보지 않는다는 약속을 함께 말해 본다.',
        '해의 위치를 기록할 때 위치 말고 무엇을 함께 적어야 할까요? 점을 이으면 어떤 모양이 될까요?',
      ],
      acts: [
        A('a1', '활동 1. 관찰 기록 정리하기', 13, 'story',
          '기록 카드를 시각 차례로 놓거나, 기록에 꼭 필요한 것을 골라요. 카드를 눌러 고른 뒤 칸을 눌러요.',
          '"기록 카드를 섞어 놓으니 어느 때의 해인지 알 수 있나요? 무엇을 보고 차례를 정했나요?" 시각이 차례를 정하는 근거라는 말이 나오게 한다. 2번에서 "관찰한 사람 기분"을 고르는 학생에게는 "다른 사람이 이 기록을 읽을 때 기분이 도움이 될까요?"라고 되묻는다.',
          { easy: { live: true, instant: true }, base: {}, challenge: {} },
          [
            { prompt: '민지네 모둠이 같은 자리에서 해를 관찰한 기록이에요. 이른 시각부터 차례로 놓아 보세요.',
              toolOptions: { mode: 'order', slots: ['첫째 기록', '둘째 기록', '셋째 기록', '넷째 기록'], cards: [
                { id: 'r4', text: '오후 3시 · 서남쪽 중간 높이' }, { id: 'r2', text: '오전 11시 · 남동쪽 높은 하늘' }, { id: 'r1', text: '오전 9시 · 동남쪽 낮은 하늘' }, { id: 'r3', text: '오후 1시 · 남서쪽 높은 하늘' }] },
              target: { order: ['r1', 'r2', 'r3', 'r4'] }, difficulty: 0.15 },
            { prompt: '태양의 위치 기록에 꼭 적어야 하는 것만 바구니에 넣어 보세요.',
              toolOptions: { mode: 'pick', topic: '기록에 적을 것', basket: '꼭 적어요', cards: [
                { id: 'time', text: '관찰한 시각' }, { id: 'dir', text: '태양이 있는 방위' }, { id: 'height', text: '태양의 높이' },
                { id: 'mood', text: '관찰한 사람의 기분', why: '기분은 해의 위치를 견주는 데 쓸 수 없어요.' }, { id: 'lunch', text: '그날 급식 메뉴', why: '해의 위치와 관계없는 내용이에요.' }] },
              target: { pick: ['time', 'dir', 'height'] }, difficulty: 0.2 },
            { prompt: '점을 이어 그린 길과 그 뜻을 이어 보세요. 알맞지 않은 카드는 남겨 둬요.',
              toolOptions: { mode: 'match', topic: '점을 이은 길', slots: [{ id: 's1', label: '점을 이은 선의 모양' }, { id: 's2', label: '선에서 가장 높은 곳의 방위' }], cards: [
                { id: 'arch', text: '위로 볼록한 호 모양' }, { id: 'south', text: '남쪽' }, { id: 'line', text: '곧은 직선', why: '해는 곧바로 올라갔다 내려오지 않고 호를 그리며 지나요.' }, { id: 'east', text: '동쪽', why: '동쪽은 해가 떠오르는 낮은 자리예요.' }] },
              target: { match: { s1: 'arch', s2: 'south' } }, difficulty: 0.25,
              predict: { q: '해의 자리를 시각마다 점으로 찍어 이으면 어떤 모양일까요?', options: ['곧은 직선', '위로 볼록한 호', '잘 모르겠어요'], answer: 1 },
              conclude: '시각과 함께 점을 찍어 이으면 동쪽에서 남쪽을 지나 서쪽으로 가는 호 모양이 나타나요.' },
          ]),
        A('a2', '활동 2. 시각에 맞는 해의 점 찍기', 12, 'earth',
          '막대 그림자 그림에서 태양을 옮기는 것은 점을 찍는 것과 같아요. 시각에 맞는 자리로 태양을 옮기고, 이은 선의 모양을 골라요.',
          '"오전 10시의 점과 오후 2시의 점은 높이가 어떻게 비슷한가요?" 한낮을 가운데로 양쪽이 비슷한 높이로 대칭이라는 것을 짚는다. 점을 이으면 직선이 된다고 대답하는 학생에게는 가장 높은 곳을 지나 내려오는 점이 몇 개 있는지 세어 보게 한다.',
          { easy: { readout: true }, base: {}, challenge: {} },
          [
            { prompt: '오전 10시의 태양 자리에 점을 찍어요. 태양을 그 시각 자리로 옮겨 보세요.', state: { hour: 16 }, toolOptions: { mode: 'shadow', hours: HRS }, target: { hour: 10 }, difficulty: 0.1 },
            { prompt: '오후 2시의 태양 자리에 점을 찍어요. 태양을 그 시각 자리로 옮겨 보세요.', state: { hour: 8 }, toolOptions: { mode: 'shadow', hours: HRS }, target: { hour: 14 }, difficulty: 0.15 },
            { prompt: '하루 동안 점을 모두 이었어요. 이은 길은 어떤 모양일까요? 골라 보세요.', state: { hour: 12 }, toolOptions: { mode: 'shadow', hours: HRS, readOnly: true, ask: { q: '하루 동안 해가 지나간 길 모양은?', choices: ['위로 볼록한 호 모양', '곧은 직선', '아래로 볼록한 모양'], why: [null, '점들이 한 줄로 서 있지 않고 가운데가 높아요.', '해는 한낮에 가장 낮아지지 않고 가장 높아져요.'] } }, target: { pick: 0 }, difficulty: 0.25,
              conclude: '시각과 위치를 함께 적어 이으면 해가 지나가는 길이 한눈에 보여요.' },
          ]),
      ],
      wrap: '"시각을 안 적고 위치만 표시한 그림에서는 무엇을 알 수 없을까요?" 먼저와 나중, 해가 빠르게 갔는지 천천히 갔는지를 알 수 없다고 말하게 한다. 출구 3번에서 점을 곧은 선으로 잇는 학생은 한낮에 가장 높은 점을 짚고 다시 그려 보게 한다.',
      exit: [
        { type: 'choice', prompt: '해의 위치를 기록할 때 위치와 함께 꼭 적어야 하는 것은 무엇인가요?', options: ['관찰한 시각', '관찰한 사람의 기분', '그날 먹은 점심'], answer: 0, difficulty: 0.15, explain: '시각이 있어야 어느 때의 위치인지 알고 차례대로 견줄 수 있어요.' },
        { type: 'tool', tool: 'earth', options: { mode: 'shadow', hours: { rise: 6, set: 18, top: 60 } }, state: { hour: 7 }, prompt: '오전 11시의 태양 자리로 옮겨 보세요.', target: { hour: 11 }, difficulty: 0.2, explain: '한낮에 가까워질수록 점이 높아져요.' },
        { type: 'short', prompt: '하루 동안 해의 자리를 점으로 찍어 이으면 어떤 모양이 되는지, 가장 높은 곳의 방위와 함께 쓰세요.', answer: '위로 볼록한 호 모양이고, 가장 높은 곳은 남쪽이다.' },
      ],
      ws: [
        { type: 'figure', prompt: '그림에서 태양이 있는 자리에 맞는 시각을 골라 ○ 하세요.', tool: 'earth', options: { mode: 'shadow', hours: HRS }, figures: [
          { state: { hour: 9 }, caption: '(오전 9시 / 오후 3시)' }, { state: { hour: 15 }, caption: '(오전 9시 / 오후 3시)' }], answer: '오전 9시, 오후 3시' },
        { type: 'table', prompt: '해를 관찰한 기록표를 완성하세요. 시각을 먼저 쓰고 방위와 높이를 적어요.', columns: ['시각', '방위', '높이(낮음·중간·높음)'], cells: [['오전 9시', '', ''], ['낮 12시 30분', '', ''], ['오후 4시', '', '']], answer: '동남쪽·낮음, 남쪽·높음, 서남쪽·낮음(중간)에 가깝게' },
        { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '관찰한 위치를 ___과 함께 적고 점을 이으면 해가 지나간 길이 위로 볼록한 ___ 모양으로 나타나요.', answer: '시각, 호' },
        { type: 'choice', prompt: '시각을 적지 않고 위치만 표시했을 때 알 수 없는 것은 무엇인가요?', options: ['어느 점이 먼저인지', '해가 동쪽에서 떴는지', '해가 하늘에 있는지'], answer: '① 어느 점이 먼저인지' },
        { type: 'draw', prompt: '아침 8시, 낮 12시 30분, 오후 5시의 해를 점으로 찍고 이어 보세요.' },
      ],
      easyNote: '점마다 시각을 적어요. 가장 높은 점은 낮, 낮은 점은 아침과 저녁이에요.',
      easy: [
        { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '해의 위치를 기록할 때는 ___도 함께 적어요.', answer: '시각' },
        { type: 'choice', prompt: '점을 이은 길의 모양에 ○ 하세요.', options: ['위로 볼록한 호', '곧은 직선'], answer: '위로 볼록한 호' },
        { type: 'figure', prompt: '태양이 더 높은 그림에 ○ 하세요.', tool: 'earth', options: { mode: 'shadow', hours: HRS }, figures: [{ state: { hour: 7 }, caption: '(    )' }, { state: { hour: 12 }, caption: '(    )' }], answer: '두 번째' },
        { type: 'draw', prompt: '해가 지나가는 길을 동쪽에서 서쪽까지 그려 보세요.' },
      ],
      diff: {
        easy: '카드를 놓으면 맞는지 바로 알려 주고, 그림자 그림에 시각과 고도 글자가 보여요.',
        base: '모두 놓은 뒤 확인을 눌러 스스로 고치고, 글자 없이 태양 자리만 보고 시각을 짐작해요.',
        challenge: '기분·점심처럼 관계없는 카드를 걸러 내고 점을 이은 길의 모양과 방위를 함께 이어요.',
      },
      notes: '자주 보이는 어려움: ① 위치만 적고 시각을 빠뜨린다 → 점마다 시각을 먼저 쓰게 한다. ② 점을 곧은 선으로 잇는다 → 한낮에 가장 높은 점을 지나 내려오는 것을 손가락으로 따라가게 한다. ③ 방위를 정하지 않고 적는다 → 5차시에서 방위를 정하는 법을 다룬다. 실제 관찰 사진은 학교 주변에서 찍은 시간대별 사진이 있으면 쓴다.',
    }),

    // ───────────────────────── 4차시 (practice) ─────────────────────────
    mk(4, {
      title: '별의 움직임과 날짜 다른 달 모양 기록하기',
      objective: '남쪽 하늘의 별은 동쪽에서 서쪽으로 옮겨 가고 북쪽 하늘의 별은 북극성 둘레를 도는 것으로 기록하고, 달 모양은 날짜마다 달라 날짜를 함께 적어야 함을 말할 수 있다.',
      std: ['[6과12-01]'], safety: ['밤에 별을 관찰할 때는 어른과 함께 안전한 곳에서 해요. 길가나 높은 곳에서는 하지 않아요.'],
      ill: 'a night sky over paper hills with star trails curving around one bright north star, a crescent moon, and a child with a notebook',
      sceneText: '밤하늘의 별도 움직일까요?', kind: 'night',
      intro: [
        '"밤하늘의 별은 밤새 같은 자리에 있을까요? 아니면 해처럼 옮겨 갈까요?" 별자리 사진 두 장(몇 시간 뒤)을 나란히 보여 주고 달라진 점을 찾게 한다. "별이 지구 둘레를 돈다"는 학생의 생각은 인정하되 까닭은 다음 시간들에서 확인한다고 미룬다. 달 모양은 날마다 다르다는 점도 함께 짚는다.',
        '밤에 별과 달이 있는 자리는 시간이 지나면 어떻게 달라질까요? 달 모양은 날마다 같을까요?',
      ],
      acts: [
        A('a1', '활동 1. 별이 움직이는 모습 정리하기', 13, 'mindmap',
          '남쪽 하늘과 북쪽 하늘에서 별이 어떻게 움직이는지 카드를 알맞은 가지에 놓거나 순서대로 놓아요.',
          '"남쪽 하늘의 별과 북쪽 하늘의 별은 움직이는 모양이 같을까요?" 남쪽은 동에서 서로 호를 그리고 북쪽은 북극성을 중심으로 작은 원을 그린다는 것을 손으로 그리며 말하게 한다. 북극성이 하늘에서 가장 밝은 별이라고 생각하는 학생이 많다. 북극성은 밝은 별이 아니라 북쪽 하늘에서 거의 제자리에 보이는 별이라고 짚는다.',
          { easy: { live: true, instant: true }, base: {}, challenge: {} },
          [
            { prompt: '별이 움직이는 모습을 남쪽 하늘과 북쪽 하늘로 나누어 보세요.',
              toolOptions: { mode: 'sort', topic: '별의 움직임', slots: ['남쪽 하늘의 별', '북쪽 하늘의 별'], cards: ['동쪽에서 서쪽으로 옮겨 가요', '북극성 둘레를 시계 반대 방향으로 돌아요', '북극성은 거의 제자리에 있는 듯 보여요'] },
              target: { sort: { '남쪽 하늘의 별': ['동쪽에서 서쪽으로 옮겨 가요'], '북쪽 하늘의 별': ['북극성 둘레를 시계 반대 방향으로 돌아요', '북극성은 거의 제자리에 있는 듯 보여요'] } }, difficulty: 0.2 },
            { prompt: '겨울밤 오리온자리를 관찰한 예시 기록이에요. 이른 시각부터 차례로 놓아 보세요.',
              toolOptions: { mode: 'order', slots: ['처음', '가운데', '나중'], cards: [
                { id: 'o3', text: '새벽 4시 · 서쪽 낮은 하늘' }, { id: 'o1', text: '밤 8시 · 동쪽 낮은 하늘' }, { id: 'o2', text: '밤 12시 · 남쪽 높은 하늘' }] },
              target: { order: ['o1', 'o2', 'o3'] }, difficulty: 0.2,
              predict: { q: '밤새 오리온자리는 어느 쪽으로 옮겨 갈까요?', options: ['동쪽에서 서쪽으로', '서쪽에서 동쪽으로', '움직이지 않아요'], answer: 0 },
              conclude: '남쪽 하늘의 별은 해처럼 동쪽에서 떠올라 서쪽으로 져요.' },
            { prompt: '별 관찰 기록에 바르게 쓴 말만 바구니에 넣어 보세요.',
              toolOptions: { mode: 'pick', topic: '별 기록', basket: '바르게 쓴 말', cards: [
                { id: 'a', text: '시각마다 별의 자리가 달라졌어요' }, { id: 'b', text: '방위를 정해 두고 같은 자리에서 봤어요' }, { id: 'c', text: '북극성은 거의 같은 자리에 있었어요' },
                { id: 'd', text: '북극성이 가장 밝은 별이에요', why: '북극성은 밝아서가 아니라 거의 제자리라서 방향 찾기에 써요.' }, { id: 'e', text: '별은 밤새 같은 자리에 있어요', why: '별도 해처럼 시간이 지나면 보이는 자리가 바뀌어요.' }] },
              target: { pick: ['a', 'b', 'c'] }, difficulty: 0.25 },
          ]),
        A('a2', '활동 2. 날짜에 따라 다른 달 모양', 12, 'earth',
          '달 모양은 날마다 달라서 기록할 때 날짜를 함께 적어야 해요. 음력 날짜 카드를 눌러 알맞은 달 모양을 골라요.',
          '"달 모양만 그리고 날짜를 안 적으면 무엇이 곤란할까요?" 다른 날 기록과 견줄 수 없다는 말을 이끈다. 상현달과 하현달을 바꾸는 학생이 많으므로 "처음에는 오른쪽부터 밝아져요"를 함께 말한다. 달 모양이 달라지는 까닭은 이 단원에서 다루지 않고, 기록 방법만 연습한다.',
          { easy: { readout: true }, base: {}, challenge: {} },
          [
            { prompt: '음력 3일, 8일, 15일의 달 모양을 골라 보세요.', toolOptions: { mode: 'moon', days: [3, 8, 15] }, target: { moon: 'auto' }, difficulty: 0.2 },
            { prompt: '보름이 지난 날짜예요. 음력 22일과 27일의 달 모양을 골라 보세요.', toolOptions: { mode: 'moon', days: [22, 27] }, target: { moon: 'auto' }, difficulty: 0.3 },
            { prompt: '달 모양 그림만 있고 날짜가 없는 기록이에요. 이 기록의 문제를 골라 보세요.', state: { moon: { 7: '상현달' } }, toolOptions: { mode: 'moon', days: [7], readOnly: true, dayLabel: '오늘 밤', ask: { q: '날짜 없는 달 기록의 문제는?', choices: ['며칠 무렵의 달인지 몰라 다른 날과 견줄 수 없어요', '달이 사라진 때를 알 수 없어요', '달이 어느 방위에 있는지 알 수 없어요'], why: [null, '달 모양 그림에서 달이 사라졌는지는 알 수 없지만 가장 큰 문제는 아니에요.', '방위는 따로 적어야 하는 정보로, 날짜와는 달라요.'] } }, target: { pick: 0 }, difficulty: 0.25,
              conclude: '달 모양은 날마다 달라서 기록할 때 시각뿐 아니라 날짜도 함께 적어야 해요.' },
          ]),
      ],
      wrap: '"별과 달을 기록할 때 해의 기록과 다르게 꼭 챙길 것은 무엇일까요?" 남쪽 별은 동→서, 북쪽 별은 북극성 둘레라는 구분과 달은 날짜를 함께 적는다는 점을 말하게 한다. 출구 1번에서 북극성을 밝은 별로 답한 학생에게는 오늘 활동 1의 3번 오답 풀이를 다시 읽게 한다.',
      exit: [
        { type: 'choice', prompt: '북쪽 하늘에서 별들이 도는 중심이 되는 별은 무엇인가요?', options: ['북극성', '가장 밝은 별', '달'], answer: 0, difficulty: 0.2, explain: '북쪽 하늘의 별은 북극성 둘레를 돌아요. 북극성은 거의 제자리에 보여요.' },
        { type: 'tool', tool: 'earth', options: { mode: 'moon', days: [5, 24], dayLabel: '음력 {d}일' }, prompt: '음력 5일과 24일의 달 모양을 골라 보세요.', target: { moon: 'auto' }, difficulty: 0.25, explain: '5일은 오른쪽이 가늘게 밝은 초승달, 24일은 왼쪽이 반쯤 밝은 하현달이에요.' },
        { type: 'short', prompt: '밤하늘의 별이 시간이 지나면서 남쪽 하늘에서 어느 쪽으로 옮겨 가는지 쓰세요.', answer: '동쪽에서 서쪽으로 옮겨 간다.' },
      ],
      ws: [
        { type: 'figure', prompt: '그림의 날짜에 알맞은 달 모양의 이름을 쓰세요.', tool: 'earth', options: { mode: 'moon', days: [3, 15, 27], printShapes: true, dayLabel: '{d}' }, figures: [{ state: { moon: { 3: '초승달', 15: '보름달', 27: '그믐달' } }, caption: '음력 3일, 15일, 27일: ___, ___, ___' }], answer: '초승달, 보름달, 그믐달' },
        { type: 'choice', prompt: '밤하늘의 별이 하룻밤 동안 남쪽 하늘에서 옮겨 가는 방향은 어느 것인가요?', options: ['동쪽에서 서쪽으로', '서쪽에서 동쪽으로', '위에서 아래로만'], answer: '① 동쪽에서 서쪽으로' },
        { type: 'table', prompt: '별 관찰 기록표를 읽고 빈칸에 알맞은 말을 쓰세요.', columns: ['시각', '오리온자리의 위치'], cells: [['밤 8시', '동쪽 낮은 하늘'], ['밤 12시', ''], ['새벽 4시', '']], answer: '남쪽 높은 하늘, 서쪽 낮은 하늘' },
        { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '북쪽 하늘의 별은 ___ 둘레를 ___ 반대 방향으로 돌아요. 달 모양은 날마다 달라서 ___도 함께 적어요.', answer: '북극성, 시계, 날짜' },
        { type: 'short', prompt: '"북극성이 가장 밝은 별이라서 북쪽을 찾을 수 있다"는 말을 고쳐 써 보세요.', answer: '북극성은 거의 제자리에 있는 것처럼 보여서 북쪽을 찾는 데 쓴다.' },
      ],
      easyNote: '남쪽 하늘 별은 동쪽에서 서쪽으로 가요. 달 모양을 그릴 때는 날짜를 꼭 적어요.',
      easy: [
        { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '남쪽 하늘의 별은 ___쪽에서 ___쪽으로 옮겨 가요.', answer: '동, 서' },
        { type: 'choice', prompt: '달 모양을 기록할 때 꼭 적어야 하는 것에 ○ 하세요.', options: ['날짜', '학교 이름'], answer: '날짜' },
        { type: 'figure', prompt: '보름달에 ○ 하세요.', tool: 'earth', options: { mode: 'moon', days: [15], printShapes: true, dayLabel: '{d}' }, figures: [{ state: { moon: { 15: '보름달' } }, caption: '(    )' }], answer: '그림' },
        { type: 'draw', prompt: '오늘 밤 보이는 달 모양을 그리고 날짜를 적어 보세요.' },
      ],
      diff: {
        easy: '카드를 놓으면 맞는지 바로 알려 주고, 달 카드에는 날짜와 모양 이름이 함께 보여요.',
        base: '모두 놓은 뒤 확인을 눌러 스스로 고치고, 달은 날짜만 보고 모양을 골라요.',
        challenge: '북극성이 밝다는 것 같은 함정 카드를 가려내고, 보름 뒤 날짜의 달 모양도 골라요.',
      },
      notes: '준비물: 별자리 사진 두 장(몇 시간 간격), 방위 표시. 자주 보이는 어려움: ① 북극성이 가장 밝은 별이라고 생각한다. ② 상현달과 하현달, 초승달과 그믐달을 바꾼다 → 처음에는 오른쪽부터 밝아져 오른쪽부터 줄어든다. ③ 달 모양을 날짜 없이 기록한다. 달 모양이 달라지는 까닭은 이 단원 범위가 아니므로 기록 방법만 다룬다. 밤 관찰은 보호자와 함께 하도록 안내한다.',
    }),

    // ───────────────────────── 5차시 (core) ─────────────────────────
    mk(5, {
      title: '방위를 정하고 두 시간마다 관찰하는 계획 세우기',
      objective: '남쪽을 기준으로 방위를 정하고 같은 자리에서 정한 시각마다 태양 위치를 시각과 함께 기록하는 절차를 차례대로 말할 수 있다.',
      std: ['[6과12-01]'], safety: [SUN_SAFE, '관찰하러 나갈 때는 운동장 밖으로 나가지 않고, 선생님이 정한 자리에서만 해요.'],
      ill: 'a child holding a paper compass on a schoolyard marking south with a flag while a paper sun hangs high over the school roof',
      sceneText: '먼저 남쪽부터 정해요', kind: 'day',
      intro: [
        '"지난 모둠은 방위를 정하지 않고 해를 관찰했더니 \'오른쪽 위\'라고만 적었어요. 이 기록을 다음 날 다시 쓸 수 있을까요?" 방위를 정하지 않고 관찰해 시각별 위치를 견줄 수 없는 사례를 보여 준다. 나침반의 바늘이 가리키는 쪽이 북쪽이고 그 반대가 남쪽임을 확인한다. 태양은 직접 보지 않는다는 약속을 함께 말해 본다.',
        '해의 위치를 관찰하기 전에 무엇부터 정해야 할까요? 관찰은 어떤 차례로 하면 좋을까요?',
      ],
      acts: [
        A('a1', '활동 1. 관찰 절차 짜기', 13, 'story',
          '해를 관찰하는 절차 카드를 차례대로 놓거나, 관찰 조건에서 바른 것을 골라요.',
          '"왜 관찰할 장소와 방위를 먼저 정해야 할까요?" 같은 조건에서 견주어야 위치 변화를 믿을 수 있다는 말을 이끈다. 매번 장소를 바꿔 관찰하는 학생에게 "장소가 바뀌면 해가 움직여서인지 내가 움직여서인지 알 수 있을까요?"라고 되묻는다.',
          { easy: { live: true, instant: true }, base: {}, challenge: {} },
          [
            { prompt: '해 위치 관찰 절차 카드를 순서대로 놓아 보세요.',
              toolOptions: { mode: 'order', slots: ['첫째', '둘째', '셋째', '넷째'], cards: [
                { id: 'p3', text: '정한 시각마다 같은 자리에서 해의 위치를 봐요' }, { id: 'p1', text: '관찰할 장소를 정해요' }, { id: 'p4', text: '시각과 위치를 함께 기록해요' }, { id: 'p2', text: '나침반으로 남쪽을 찾아 방위를 표시해요' }] },
              target: { order: ['p1', 'p2', 'p3', 'p4'] }, difficulty: 0.15 },
            { prompt: '같은 조건에서 관찰하려면 지켜야 할 것만 바구니에 넣어 보세요.',
              toolOptions: { mode: 'pick', topic: '관찰 조건', basket: '지켜야 해요', cards: [
                { id: 'place', text: '매번 같은 장소에서 관찰해요' }, { id: 'dir', text: '정한 방위 표시를 그대로 써요' }, { id: 'time', text: '두 시간 간격처럼 정한 시각에 관찰해요' },
                { id: 'move', text: '잘 보이는 곳으로 자리를 옮겨 가며 관찰해요', why: '자리를 옮기면 방위가 달라져 위치를 견줄 수 없어요.' }, { id: 'skip', text: '시각은 기억나는 대로 나중에 적어요', why: '시각은 관찰할 때 바로 적어야 정확해요.' }] },
              target: { pick: ['place', 'dir', 'time'] }, difficulty: 0.2 },
            { prompt: '관찰에 필요한 준비물과 쓰임을 이어 보세요. 필요 없는 카드는 남겨 둬요.',
              toolOptions: { mode: 'match', topic: '준비물', slots: [{ id: 'k1', label: '방위를 알아낼 때' }, { id: 'k2', label: '위치와 시각을 적을 때' }], cards: [
                { id: 'compass', text: '나침반' }, { id: 'sheet', text: '관찰 기록지' }, { id: 'ball', text: '축구공', why: '해 위치 관찰과 관계없는 물건이에요.' }, { id: 'glass', text: '망원경', why: '해를 망원경으로 보는 것은 눈을 다칠 수 있어 하지 않아요.' }] },
              target: { match: { k1: 'compass', k2: 'sheet' } }, difficulty: 0.25,
              predict: { q: '방위를 정하지 않고 관찰하면 어떤 일이 생길까요?', options: ['시각별 위치를 견주기 어려워요', '해가 더 잘 보여요', '아무 문제 없어요'], answer: 0 },
              conclude: '방위를 먼저 정하고 같은 자리에서 관찰해야 시각별 위치를 견줄 수 있어요.' },
          ]),
        A('a2', '활동 2. 두 시간마다 해 위치 찾기', 12, 'earth',
          '겨울 무렵 하루를 예시로 정했어요(해 뜨는 시각 7시, 지는 시각 17시). 정한 시각마다 태양을 알맞은 자리로 옮겨 기록 준비를 해요.',
          '"두 시간마다 기록하면 몇 번 기록하게 될까요?" 관찰 횟수를 스스로 세어 보게 한다. 수치는 모두 예시 값이므로 실제 관찰에서는 날마다 조금씩 달라질 수 있다고 알려 준다. 해 뜨기 전이나 진 뒤에는 관찰할 수 없다는 점도 짚는다.',
          { easy: { readout: true }, base: {}, challenge: {} },
          [
            { prompt: '오전 9시에 관찰해요. 태양을 그 시각의 자리로 옮겨 보세요.', state: { hour: 15 }, toolOptions: { mode: 'shadow', hours: { rise: 7, set: 17, top: 45 } }, target: { hour: 9 }, difficulty: 0.15 },
            { prompt: '오후 1시에 관찰해요. 태양을 그 시각의 자리로 옮겨 보세요.', state: { hour: 8 }, toolOptions: { mode: 'shadow', hours: { rise: 7, set: 17, top: 45 } }, target: { hour: 13 }, difficulty: 0.2 },
            { prompt: '이 겨울날 해가 가장 높이 뜨는 때로 태양을 옮겨 보세요.', state: { hour: 16 }, toolOptions: { mode: 'shadow', hours: { rise: 7, set: 17, top: 45 } }, target: { noon: true }, difficulty: 0.2,
              conclude: '정한 시각마다 같은 자리에서 위치를 적으면 해가 하루 동안 지나간 길을 알 수 있어요.' },
          ]),
      ],
      wrap: '"해를 관찰하기 전에 정해 두어야 할 것을 세 가지 말해 볼까요?" 장소, 방위, 시각 간격을 모두 말하게 한다. 출구 2번에서 방위를 정하지 않고 시작하는 카드를 앞에 둔 학생은 도입 사례를 다시 떠올리게 한다. 관찰 도구를 해에 직접 대지 않는다는 약속을 한 번 더 말한다.',
      exit: [
        { type: 'choice', prompt: '해의 위치를 관찰하기 전에 가장 먼저 정해야 하는 것은 무엇인가요?', options: ['관찰 장소와 방위', '친구와 먹을 간식', '기록지 색깔'], answer: 0, difficulty: 0.15, explain: '장소와 방위를 먼저 정해야 시각마다 같은 조건으로 위치를 견줄 수 있어요.' },
        { type: 'tool', tool: 'story', options: { mode: 'order', slots: ['첫째', '둘째', '셋째'], cards: [{ id: 'x3', text: '점을 이어 해의 길을 그려요' }, { id: 'x1', text: '방위를 정하고 관찰을 시작해요' }, { id: 'x2', text: '시각마다 위치를 기록해요' }] }, prompt: '관찰 후 정리 절차를 순서대로 놓아 보세요.', target: { order: ['x1', 'x2', 'x3'] }, difficulty: 0.2 },
        { type: 'short', prompt: '같은 장소에서 두 시간마다 해를 관찰해야 하는 까닭을 쓰세요.', answer: '같은 조건에서 시각별 위치를 견주어야 해의 위치 변화의 규칙을 찾을 수 있기 때문이다.' },
      ],
      ws: [
        { type: 'figure', prompt: '정한 시각의 태양 자리를 보고, 이 시각이 오전인지 오후인지 ○ 하세요.', tool: 'earth', options: { mode: 'shadow', hours: { rise: 7, set: 17, top: 45 } }, figures: [
          { state: { hour: 9 }, caption: '(오전 / 오후)' }, { state: { hour: 15 }, caption: '(오전 / 오후)' }], answer: '오전, 오후' },
        { type: 'table', prompt: '관찰 계획표를 완성하세요. 두 시간마다 관찰할 시각을 쓰세요.', columns: ['번호', '관찰 시각', '해의 방위', '해의 높이'], cells: [['1', '오전 9시', '', ''], ['2', '', '', ''], ['3', '', '', '']], answer: '두 시간 간격(예: 오전 11시, 오후 1시)으로 쓰면 됨' },
        { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '나침반의 바늘이 가리키는 쪽이 ___쪽이고, 그 반대쪽이 ___쪽이에요.', answer: '북, 남' },
        { type: 'choice', prompt: '관찰할 때마다 장소를 바꾸면 어떤 점이 문제인가요?', options: ['위치를 같은 조건으로 견줄 수 없어요', '해가 더 높아져요', '기록지가 무거워요'], answer: '① 위치를 같은 조건으로 견줄 수 없어요' },
        { type: 'short', prompt: '해를 관찰할 때 지킬 안전 약속을 한 가지 쓰세요.', answer: '해를 맨눈·망원경으로 직접 보지 않는다.' },
      ],
      easyNote: '관찰 순서는 장소 정하기 → 남쪽 찾기 → 시각마다 보기 → 기록하기예요. 해는 직접 보지 않아요.',
      easy: [
        { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '해를 관찰하기 전에 먼저 ___을 정해요.', answer: '방위' },
        { type: 'choice', prompt: '관찰 기록에 꼭 적을 것에 ○ 하세요.', options: ['시각', '날씨 노래'], answer: '시각' },
        { type: 'figure', prompt: '오후인 그림에 ○ 하세요.', tool: 'earth', options: { mode: 'shadow', hours: { rise: 7, set: 17, top: 45 } }, figures: [{ state: { hour: 9 }, caption: '(    )' }, { state: { hour: 15 }, caption: '(    )' }], answer: '두 번째' },
        { type: 'draw', prompt: '해를 관찰하는 내 모습과 방위 표시를 그려 보세요.' },
      ],
      diff: {
        easy: '카드를 놓으면 맞는지 바로 알려 주고, 그림자 그림에 시각 글자가 보여요.',
        base: '모두 놓은 뒤 확인을 눌러 스스로 고치고, 글자 없이 태양 자리만 보고 시각을 짐작해요.',
        challenge: '자리를 옮기며 관찰하는 것 같은 함정 카드를 가려내고 준비물과 쓰임을 이어요.',
      },
      notes: '준비물(모둠): 나침반, 관찰 기록지, 시계, 연필. 실제 관찰은 이 시간 계획을 바탕으로 하루 동안 정한 시각에 나가거나 사진 자료로 대신한다. 자주 보이는 어려움: ① 방위를 정하지 않고 관찰한다. ② 시각을 나중에 기억에 의존해 적는다. ③ 시각이 다른데 같은 자리가 아닌 곳에서 관찰한다. 수치는 모두 예시 값이다. 태양은 직접 보지 않는다.',
    }),
    // ───────────────────────── 6차시 (core) ─────────────────────────
    mk(6, {
      title: '자전이 무엇인지 알고 지구 반대편은 언제 밤인지 찾기',
      objective: '지구가 자전축을 중심으로 하루에 한 바퀴씩 서쪽에서 동쪽으로 자전한다는 것과, 우리나라가 낮일 때 지구 반대편은 밤임을 설명할 수 있다.',
      std: ['[6과12-02]'], safety: [SUN_SAFE],
      ill: 'a paper Earth with a tilted axis stick through it, a curved arrow showing it spinning, and a sun on one side lighting half of the Earth',
      sceneText: '지구는 스스로 돌고 있어요', kind: 'both',
      intro: [
        '"우리나라가 한낮일 때 지구 반대편 브라질은 몇 시쯤일까요?" 학생 생각을 모은 뒤 팽이가 서서 도는 모습과 지구의 자전을 견준다. 팽이처럼 한가운데를 뚫는 막대(자전축)를 중심으로 돈다고 말해 준다. "태양이 지구 둘레를 하루에 한 바퀴 돌아서 낮과 밤이 생겨요"라는 생각이 많으니, 오늘은 지구가 돌아서라는 설명을 모형으로 확인한다고 알린다.',
        '지구가 스스로 돈다는 말을 들어 봤나요? 우리나라가 낮일 때 지구 반대편은 어떨까요?',
      ],
      acts: [
        A('a1', '활동 1. 자전을 바르게 설명한 말 가려내기', 12, 'mindmap',
          '자전을 설명하는 카드를 읽고 알맞은 것만 바구니에 넣거나, 자전과 관계있는 일을 가려내요.',
          '"자전은 무엇이 어떻게 도는 것일까요?" 지구가 한 바퀴 도는 데 하루가 걸리고 방향은 서쪽에서 동쪽이라고 말하게 한다. 공전과 자전을 섞어 쓰는 학생에게는 "하루에 한 바퀴"와 "1년에 한 바퀴"를 따로 적어 보게 한다. 태양이 도는 것이라는 오개념은 카드 2번의 풀이로 짚는다.',
          { easy: { live: true, instant: true }, base: {}, challenge: {} },
          [
            { prompt: '자전을 바르게 설명한 카드만 바구니에 넣어 보세요.',
              toolOptions: { mode: 'pick', topic: '지구의 자전', basket: '바른 설명', cards: [
                { id: 'a', text: '지구가 자전축을 중심으로 스스로 돌아요' }, { id: 'b', text: '하루에 한 바퀴 돌아요' }, { id: 'c', text: '서쪽에서 동쪽으로 돌아요' },
                { id: 'd', text: '태양이 지구 둘레를 하루에 한 바퀴 돌아요', why: '태양은 그대로 있고 지구가 돌아서 그렇게 보여요.' }, { id: 'e', text: '동쪽에서 서쪽으로 돌아요', why: '지구는 서쪽에서 동쪽으로 돌아요.' }] },
              target: { pick: ['a', 'b', 'c'] }, difficulty: 0.15 },
            { prompt: '자전과 관계있는 일과 관계없는 일로 나누어 보세요.',
              toolOptions: { mode: 'sort', topic: '자전과 우리 생활', slots: ['자전과 관계있어요', '자전으로 생기지 않아요'], cards: ['낮과 밤이 번갈아 와요', '해가 동쪽에서 떠서 서쪽으로 지는 것처럼 보여요', '별이 동쪽에서 서쪽으로 옮겨 가는 것처럼 보여요', '여름과 겨울이 번갈아 와요'] },
              target: { sort: { '자전과 관계있어요': ['낮과 밤이 번갈아 와요', '해가 동쪽에서 떠서 서쪽으로 지는 것처럼 보여요', '별이 동쪽에서 서쪽으로 옮겨 가는 것처럼 보여요'], '자전으로 생기지 않아요': ['여름과 겨울이 번갈아 와요'] } }, difficulty: 0.25,
              predict: { q: '해가 동쪽에서 서쪽으로 가는 것처럼 보이는 까닭은 무엇일까요?', options: ['지구가 서쪽에서 동쪽으로 돌아서', '해가 지구 둘레를 돌아서', '잘 모르겠어요'], answer: 0 },
              conclude: '낮과 밤, 해와 별의 하루 움직임은 모두 지구의 자전 때문에 생기는 현상이에요.' },
            { prompt: '자전의 특징과 그 값을 이어 보세요. 알맞지 않은 카드는 남겨 둬요.',
              toolOptions: { mode: 'match', topic: '자전의 특징', slots: [{ id: 't1', label: '한 바퀴 도는 데 걸리는 시간' }, { id: 't2', label: '도는 방향' }], cards: [{ id: 'day', text: '하루(약 24시간)' }, { id: 'we', text: '서쪽에서 동쪽' }, { id: 'year', text: '1년', why: '1년은 지구가 태양을 한 바퀴 도는 공전에 걸리는 시간이에요.' }, { id: 'ew', text: '동쪽에서 서쪽', why: '지구가 도는 방향은 서쪽에서 동쪽이에요.' }] },
              target: { match: { t1: 'day', t2: 'we' } }, difficulty: 0.2 },
          ]),
        A('a2', '활동 2. 지구 반대편의 낮과 밤', 13, 'earth',
          '북극 위에서 내려다본 지구예요. 지구를 돌려 시각을 바꾸거나, 그림을 보고 지구 반대편이 낮인지 밤인지 골라요.',
          '"우리나라가 낮 12시일 때 지구 반대편은 몇 시쯤일까요?" 정반대 편은 12시간 차이라서 밤 12시 무렵이라고 말하게 한다. 지구 반대편은 항상 밤이라고 생각하는 학생에게는 지구가 돌면 곧 그쪽도 빛을 받게 된다고 짚는다. 모든 수치는 단순한 예시이며 실제 나라별 시각은 시간대에 따라 조금 다르다고 알린다.',
          { easy: { readout: true, showSides: true }, base: {}, challenge: { showSides: false } },
          [
            { prompt: '우리나라가 낮 12시예요. 이때 지구 반대편은 낮일까요, 밤일까요? 그림을 보고 골라 보세요.', state: { hour: 12 }, toolOptions: { mode: 'spin', readOnly: true, ask: { q: '우리나라가 낮 12시일 때 지구 반대편은?', choices: ['밤', '낮', '해 뜰 무렵'], why: [null, '태양 빛을 받는 쪽은 한쪽뿐이라 반대편은 빛을 받지 못해요.', '해 뜰 무렵은 빛을 받는 쪽과 못 받는 쪽의 경계예요. 정반대 편은 경계가 아니에요.'] } }, target: { pick: 0 }, difficulty: 0.15 },
            { prompt: '밤 9시예요. 지구를 돌려 우리나라가 오전 9시가 되게 해 보세요.', state: { hour: 21 }, toolOptions: { mode: 'spin', readout: true }, target: { hour: 9 }, difficulty: 0.2 },
            { prompt: '우리나라가 한밤중일 때 지구 반대편은 어떤 때일까요? 그림을 보고 골라 보세요.', state: { hour: 0 }, toolOptions: { mode: 'spin', readOnly: true, ask: { q: '우리나라가 밤 12시일 때 지구 반대편은?', choices: ['한낮', '한밤중', '저녁 무렵'], why: [null, '반대편이 같은 한밤중이라면 지구 전체가 어두워야 해요.', '저녁 무렵은 경계라서 정반대 편이 아니에요.'] } }, target: { pick: 0 }, difficulty: 0.25,
              conclude: '지구는 한쪽만 태양 빛을 받아 우리나라가 낮이면 반대편은 밤이에요.' },
            { prompt: '저녁 6시예요. 지구를 서쪽에서 동쪽으로 돌려 밤 12시가 되게 해 보세요.', state: { hour: 18 }, toolOptions: { mode: 'spin', readout: true }, target: { hour: 0 }, difficulty: 0.3 },
          ]),
      ],
      wrap: '"우리나라가 낮일 때 반대편이 밤인 까닭을 지구와 태양 빛으로 말해 볼까요?" 지구는 둥글어서 한쪽만 빛을 받고, 자전으로 빛을 받는 쪽이 계속 바뀐다고 정리한다. 출구 2번에서 서쪽에서 동쪽을 거꾸로 고르는 학생은 활동 1의 3번 풀이를 다시 읽게 한다. 시각 수치는 단순화한 예시임을 한 번 더 말한다.',
      exit: [
        { type: 'choice', prompt: '자전은 어떤 운동일까요?', options: ['지구가 자전축을 중심으로 스스로 도는 운동', '지구가 태양 둘레를 도는 운동', '달이 지구 둘레를 도는 운동'], answer: 0, difficulty: 0.15, explain: '지구가 스스로 도는 것이 자전이고 하루에 한 바퀴 돌아요.' },
        { type: 'choice', prompt: '지구가 자전하는 방향은 어느 쪽일까요?', options: ['서쪽에서 동쪽', '동쪽에서 서쪽', '위에서 아래'], answer: 0, difficulty: 0.2, explain: '북극 위에서 보면 시계 반대 방향(서에서 동)으로 돌아요.' },
        { type: 'tool', tool: 'earth', options: { mode: 'spin', readOnly: true, ask: { q: '우리나라가 낮 3시일 때 지구 반대편은 어떤 때일까요?', choices: ['밤', '낮', '해 뜰 무렵'] } }, state: { hour: 15 }, prompt: '우리나라가 오후 3시예요. 지구 반대편의 때를 골라 보세요.', target: { pick: 0 }, difficulty: 0.25 },
      ],
      ws: [
        { type: 'figure', prompt: '그림에서 우리나라가 있는 곳은 낮, 밤, 해 뜰 무렵, 해 질 무렵 가운데 언제인가요? 쓰세요.', tool: 'earthspin', figures: [
          { state: { hour: 12 }, caption: '우리나라: (          )' }, { state: { hour: 0 }, caption: '우리나라: (          )' }], answer: '낮, 밤' },
        { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '지구가 ___을 중심으로 하루에 한 바퀴씩 스스로 도는 것을 ___이라고 해요.', answer: '자전축, 자전' },
        { type: 'choice', prompt: '자전과 관계없는 일은 어느 것인가요?', options: ['낮과 밤이 번갈아 오는 것', '해가 동쪽에서 떠서 서쪽으로 지는 것처럼 보이는 것', '여름과 겨울이 번갈아 오는 것'], answer: '③ 여름과 겨울이 번갈아 오는 것' },
        { type: 'table', prompt: '우리나라가 아래 때일 때 지구 반대편은 어떤 때인지 쓰세요.', columns: ['우리나라', '지구 반대편'], cells: [['낮', ''], ['밤', '']], answer: '밤, 낮' },
        { type: 'short', prompt: '"태양이 지구 둘레를 하루에 한 바퀴 돌아서 낮과 밤이 생긴다"는 말을 고쳐 써 보세요.', answer: '지구가 하루에 한 바퀴 자전해서 낮과 밤이 번갈아 생긴다.' },
      ],
      easyNote: '지구는 하루에 한 바퀴 서쪽에서 동쪽으로 돌아요. 한쪽이 낮이면 반대쪽은 밤이에요.',
      easy: [
        { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '지구가 하루에 한 바퀴 스스로 도는 것을 ___이라고 해요.', answer: '자전' },
        { type: 'choice', prompt: '우리나라가 낮이면 지구 반대편은 어떤가요?', options: ['밤', '낮'], answer: '밤' },
        { type: 'figure', prompt: '우리나라가 낮인 그림에 ○ 하세요.', tool: 'earthspin', figures: [{ state: { hour: 12 }, caption: '(    )' }, { state: { hour: 0 }, caption: '(    )' }], answer: '첫 번째' },
        { type: 'draw', prompt: '팽이처럼 도는 지구와 화살표를 그려 보세요.' },
      ],
      diff: {
        easy: '지구 그림에 때 글자와 낮·밤 글자가 보여 바로 확인해요.',
        base: '글자가 줄어 지구의 빛받는 쪽과 우리나라 자리를 보고 판단해요.',
        challenge: '낮·밤 글자가 없고, 6시간처럼 돌린 시간을 따라 시각을 계산해요.',
      },
      notes: '준비물: 팽이 또는 지구본, 전등. 자주 보이는 어려움: ① 태양이 지구 둘레를 돈다고 생각한다. ② 자전과 공전을 섞는다 → 하루와 1년을 따로 적는다. ③ 자전 방향을 동에서 서로 안다 → 서에서 동. 수치는 단순화한 예시이다. 태양은 직접 보지 않는다.',
    }),

    // ───────────────────────── 7차시 (practice) ─────────────────────────
    mk(7, {
      title: '전등과 지구본 모형에서 무엇이 움직이는지 가려내기',
      objective: '전등과 지구본 모형에서 전등(태양)은 가만히 있고 지구본을 돌려 관측자 인형이 낮과 밤을 맞는다는 것을 모형과 실제를 견주어 설명할 수 있다.',
      std: ['[6과12-02]'], safety: ['실험에 쓰는 전등은 뜨거울 수 있어 손으로 만지지 않고, 친구 눈에 비추지 않아요.', SUN_SAFE],
      ill: 'a desk lamp shining on a paper globe with a tiny paper figure stuck on it, and arrows showing the globe being turned gently',
      sceneText: '전등은 가만히, 지구본이 돌아요', kind: 'both',
      intro: [
        '"교실에서 지구의 자전을 보여 주려면 무엇이 필요할까요?" 전등과 지구본, 작은 인형을 준비한 모형을 보여 준다. "전등을 돌려도 되나요?"라는 질문으로 가만히 두는 것과 돌리는 것을 정하게 한다. 모형의 인형은 우리나라에 있는 사람이라고 말한다. 전등은 뜨겁다는 안전 약속을 먼저 말한다.',
        '모형에서는 전등이 태양, 지구본이 지구예요. 어느 쪽을 돌려야 낮과 밤이 바뀔까요?',
      ],
      acts: [
        A('a1', '활동 1. 모형에서 움직이는 것과 가만있는 것', 12, 'mindmap',
          '모형의 부분마다 가만히 두는 것과 돌리는 것으로 나누고, 인형이 겪는 때를 차례대로 놓아요.',
          '"인형은 가만히 서 있나요, 지구본과 함께 돌까요?" 인형이 지구본에 붙어 함께 돈다는 것을 확인한다. 전등을 돌리는 학생에게는 "실제로 태양이 돈다는 뜻이 되는데 맞을까요?"라고 되묻는다. 모형 지구본은 지구의 크기와 태양과의 거리를 그대로 나타내지는 않는다고 짚는다.',
          { easy: { live: true, instant: true }, base: {}, challenge: {} },
          [
            { prompt: '모형의 부분을 가만히 두는 것과 돌리는 것으로 나누어 보세요.',
              toolOptions: { mode: 'sort', topic: '모형 실험', slots: ['가만히 두어요', '돌려요'], cards: ['전등(태양)', '지구본(지구)', '관측자 인형'] },
              target: { sort: { '가만히 두어요': ['전등(태양)'], '돌려요': ['지구본(지구)', '관측자 인형'] } }, difficulty: 0.15 },
            { prompt: '지구본을 바른 방향으로 돌릴 때 인형이 겪는 모습을 차례대로 놓아 보세요.',
              toolOptions: { mode: 'order', slots: ['처음', '둘째', '셋째', '넷째'], cards: [
                { id: 'night', text: '전등 빛이 닿지 않아요' }, { id: 'noon', text: '전등 빛을 정면으로 받아요' }, { id: 'dusk', text: '빛이 비스듬해지다 사라져요' }, { id: 'dawn', text: '빛이 다시 비스듬히 닿기 시작해요' }] },
              target: { order: ['noon', 'dusk', 'night', 'dawn'] }, difficulty: 0.25,
              predict: { q: '지구본을 계속 돌리면 인형이 있는 곳은 어떻게 될까요?', options: ['낮과 밤이 번갈아 와요', '계속 낮이에요', '잘 모르겠어요'], answer: 0 },
              conclude: '지구본이 돌면 인형이 빛을 받는 쪽과 못 받는 쪽을 번갈아 지나요.' },
            { prompt: '모형 실험에서 실제와 같은 점만 바구니에 넣어 보세요.',
              toolOptions: { mode: 'pick', topic: '모형과 실제', basket: '실제와 같은 점', cards: [
                { id: 'a', text: '빛을 받는 쪽이 밝고 반대쪽이 어두워요' }, { id: 'b', text: '돌리면 인형의 밝기가 바뀌어요' },
                { id: 'c', text: '지구본 크기가 실제 지구와 같아요', why: '모형은 실제 지구보다 훨씬 작아요.' }, { id: 'd', text: '전등과 지구본의 거리가 실제 태양과 지구 거리와 같아요', why: '실제 태양은 모형보다 훨씬 멀리 있어요.' }] },
              target: { pick: ['a', 'b'] }, difficulty: 0.2 },
          ]),
        A('a2', '활동 2. 인형이 있는 곳의 때 찾기', 13, 'earthspin',
          '북극 위에서 본 지구예요. 지구를 돌려 우리나라의 때를 맞추고, 우리나라 사람 곁의 동·서 표시를 보고 태양이 보이는 쪽을 골라요.',
          '"돌리면 인형에게 태양은 어느 쪽에서 나타날까요?" 동·서 표시와 태양을 연결해 보게 한다. 지구를 반대 방향으로 돌리고도 맞는다고 하는 학생에게는 "시계 반대 방향이어야 해 뜰 무렵이 먼저 와요"라고 짚는다. 시각은 단순화한 예시 값이다.',
          { easy: { step: 45, readout: 'full', showSides: true }, base: { step: 15, readout: 'phase' }, challenge: { step: 15, readout: 'none' } },
          [
            { prompt: '지금은 오후 3시예요. 우리나라가 밤이 되게 지구를 돌려 보세요.', state: { hour: 15 }, target: { time: '밤' }, difficulty: 0.15 },
            { prompt: '지금은 오후 3시예요. 지구를 돌려 우리나라가 해 뜰 무렵(아침)이 되게 해 보세요.', state: { hour: 15 }, target: { phase: '해 뜰 무렵' }, difficulty: 0.25 },
            { prompt: '오전 8시 무렵이에요. 우리나라 사람에게 태양은 어느 쪽에 보일지 골라 보세요.', state: { hour: 8 }, toolOptions: { showLocal: true, ask: { q: '오전 8시 무렵 태양은 우리나라 사람의 어느 쪽에 보일까요?', choices: ['동쪽', '서쪽', '북쪽'], why: [null, '서쪽은 저녁에 해가 지는 쪽이에요.', '해는 북쪽 하늘에 보이지 않아요.'] } }, target: { hour: 8, ask: 0 }, reveal: 'after-check', difficulty: 0.3,
              conclude: '지구가 돌아 동쪽 표시가 먼저 태양을 향하기 때문에 아침 해는 동쪽에 보여요.' },
          ]),
      ],
      wrap: '"모형에서 전등을 돌리지 않고 지구본을 돌리는 까닭은 무엇일까요?" 실제로 돌고 있는 것이 지구이기 때문이라고 말하게 한다. 출구 1번에서 전등을 돌린다고 답한 학생에게는 활동 1 첫 문항을 다시 풀어 보게 한다. 모형의 크기와 거리는 실제와 다르다는 점도 한 번 더 말한다.',
      exit: [
        { type: 'choice', prompt: '전등과 지구본 모형에서 전등은 무엇을 나타내나요?', options: ['태양', '지구', '달'], answer: 0, difficulty: 0.1, explain: '전등은 빛을 내는 태양, 지구본은 지구를 나타내요.' },
        { type: 'tool', tool: 'earthspin', options: { step: 15, readout: 'none' }, state: { hour: 12 }, prompt: '낮 12시예요. 지구를 돌려 우리나라가 밤이 되게 해 보세요. 때를 알려 주는 글자는 없어요.', target: { time: '밤' }, difficulty: 0.2 },
        { type: 'short', prompt: '모형에서 지구본을 돌리는 것은 실제로 무엇을 나타내는지 쓰세요.', answer: '지구가 하루에 한 바퀴 자전하는 것을 나타낸다.' },
      ],
      ws: [
        { type: 'figure', prompt: '모형 그림에서 우리나라 사람이 있는 곳은 낮일까요, 밤일까요? ○ 하세요.', tool: 'earthspin', figures: [
          { state: { hour: 10 }, caption: '(낮 / 밤)' }, { state: { hour: 23 }, caption: '(낮 / 밤)' }], answer: '낮, 밤' },
        { type: 'table', prompt: '모형의 부분이 실제로 무엇인지 써 보세요.', columns: ['모형', '실제'], cells: [['전등', ''], ['지구본', ''], ['관측자 인형', '']], answer: '태양, 지구, 우리나라에 사는 사람' },
        { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '모형 실험에서 ___은(는) 가만히 두고 ___을(를) 돌려서 낮과 밤이 바뀌는 모습을 봐요.', answer: '전등, 지구본' },
        { type: 'choice', prompt: '모형 실험에서 실제와 다른 점은 무엇인가요?', options: ['지구본이 실제 지구보다 훨씬 작은 것', '빛을 받는 쪽이 밝은 것', '지구본을 돌리면 낮과 밤이 바뀌는 것'], answer: '① 지구본이 실제 지구보다 훨씬 작은 것' },
        { type: 'short', prompt: '전등은 만지지 않고 눈에 비추지 않는 까닭을 쓰세요.', answer: '전등이 뜨거울 수 있고 눈을 다칠 수 있기 때문이다.' },
      ],
      easyNote: '전등은 태양, 지구본은 지구예요. 가만히 있는 것은 전등이고 돌아가는 것은 지구본이에요.',
      easy: [
        { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '모형에서 돌리는 것은 ___이에요.', answer: '지구본' },
        { type: 'choice', prompt: '가만히 두는 것에 ○ 하세요.', options: ['전등', '지구본'], answer: '전등' },
        { type: 'figure', prompt: '인형이 밤인 그림에 ○ 하세요.', tool: 'earthspin', figures: [{ state: { hour: 12 }, caption: '(    )' }, { state: { hour: 0 }, caption: '(    )' }], answer: '두 번째' },
        { type: 'draw', prompt: '전등, 지구본, 인형이 있는 모형을 그려 보세요.' },
      ],
      diff: {
        easy: '때 글자와 낮·밤 글자가 보이고 45도씩 크게 돌려 쉬워요.',
        base: '때 글자는 우리나라가 어떤 때인지만 알려 줘요.',
        challenge: '때 글자 없이 빛과 그림자만 보고 판단해요.',
      },
      notes: '준비물(모둠): 지구본(또는 공), 손전등 또는 스탠드, 작은 스티커 인형, 어두운 곳. 전구는 뜨거우니 LED 손전등을 권한다. 자주 보이는 어려움: ① 전등을 돌린다. ② 지구본을 반대 방향으로 돌린다. ③ 모형이 실제와 같다고 믿는다 → 크기·거리가 다르다. 태양은 직접 보지 않는다.',
    }),

    // ───────────────────────── 8차시 (core) ─────────────────────────
    mk(8, {
      title: '그림으로 낮인 곳·밤인 곳과 자전 방향 나타내기',
      objective: '지구와 태양 그림에 낮인 곳과 밤인 곳을 나누어 표시하고, 서쪽에서 동쪽으로 도는 방향을 화살표로 바르게 나타낼 수 있다.',
      std: ['[6과12-02]'], safety: [SUN_SAFE],
      ill: 'a paper diagram of a small sun at the left, a round Earth with the sun-facing half bright and the other half dark, and a curved arrow showing the spin direction',
      sceneText: '그림에 낮과 밤을 나타내요', kind: 'both',
      intro: [
        '"친구가 낮과 밤이 생기는 까닭을 그림으로 그렸는데 화살표가 반대로 그려졌어요. 어디가 잘못됐을까요?" 거꾸로 화살표가 그려진 그림을 보여 준다. 지구가 도는 방향을 동쪽에서 서쪽으로 그려 거꾸로 나타내는 실수가 잦다. 그림에 꼭 들어갈 것(태양, 지구, 빛받는 쪽, 화살표)을 같이 정한다.',
        '낮과 밤이 생기는 까닭을 그림으로 나타내려면 무엇을 그려야 할까요? 화살표는 어느 쪽으로 그려야 할까요?',
      ],
      acts: [
        A('a1', '활동 1. 그림을 읽고 낮밤과 방향 찾기', 13, 'earth',
          '북극 위에서 본 지구 그림이에요. 그림을 보고 자전 방향, 우리나라의 때, 해 질 무렵인지를 골라요.',
          '"그림에서 화살표가 가리키는 방향이 서쪽에서 동쪽인지 어떻게 알 수 있나요?" 북극 위에서 보면 시계 반대 방향이라는 것을 손으로 따라 돌리며 말하게 한다. 그림 속 우리나라가 밝은 쪽에 있으면 낮이라고 말하는 학생이 대부분이지만 경계 근처는 아침·저녁이라고 짚는다.',
          { easy: { readout: true }, base: {}, challenge: {} },
          [
            { prompt: '지구 그림을 보세요. 화살표가 나타내는 자전 방향은 어느 것일까요?', state: { hour: 12 }, toolOptions: { mode: 'spin', readOnly: true, showArrow: true, ask: { q: '그림 속 지구는 어느 방향으로 돌까요?', choices: ['북극 위에서 볼 때 시계 반대 방향', '북극 위에서 볼 때 시계 방향', '돌지 않아요'], why: [null, '지구는 서쪽에서 동쪽, 곧 북극 위에서 볼 때 시계 반대 방향으로 돌아요.', '지구는 하루에 한 바퀴 돌아요.'] } }, target: { pick: 0 }, difficulty: 0.2 },
            { prompt: '지구 그림에서 우리나라는 어두운 쪽에 있어요. 우리나라는 어떤 때일까요?', state: { hour: 1 }, toolOptions: { mode: 'spin', readOnly: true, ask: { q: '그림 속 우리나라는 어떤 때일까요?', choices: ['낮', '밤', '해 뜰 무렵'], why: ['낮이면 빛이 닿는 밝은 쪽에 있어야 해요.', null, '해 뜰 무렵은 어두운 쪽과 밝은 쪽의 경계에 있어요.'] } }, target: { pick: 1 }, difficulty: 0.2 },
            { prompt: '우리나라가 밝은 쪽에서 어두운 쪽으로 막 넘어가고 있어요. 어떤 때일까요?', state: { hour: 18 }, toolOptions: { mode: 'spin', readOnly: true, ask: { q: '그림 속 우리나라는 어떤 때일까요?', choices: ['해 뜰 무렵', '해 질 무렵', '한낮'], why: ['해 뜰 무렵은 어두운 쪽에서 밝은 쪽으로 넘어가는 때예요.', null, '한낮에는 우리나라가 태양을 바로 마주해요.'] } }, target: { pick: 1 }, difficulty: 0.3,
              conclude: '밝은 쪽에서 어두운 쪽으로 넘어가면 해 질 무렵, 어두운 쪽에서 밝은 쪽으로 넘어가면 해 뜰 무렵이에요.' },
          ]),
        A('a2', '활동 2. 그림에 들어갈 것 정하고 차례 놓기', 12, 'story',
          '낮과 밤 그림에 꼭 들어갈 것을 고르고, 그림을 그리는 차례대로 카드를 놓아요.',
          '"어떤 것부터 그리면 그림이 쉬워질까요?" 큰 것(태양·지구)부터 그리고 나중에 표시와 화살표를 넣는다는 말이 나오게 한다. 화살표를 그리지 않거나 방향을 거꾸로 그리는 학생에게는 지난 시간 모형 실험을 떠올려 손으로 방향을 따라가 보게 한다.',
          { easy: { live: true, instant: true }, base: {}, challenge: {} },
          [
            { prompt: '낮과 밤 그림에 꼭 들어가야 하는 것만 바구니에 넣어 보세요.',
              toolOptions: { mode: 'pick', topic: '그림에 들어갈 것', basket: '꼭 필요해요', cards: [
                { id: 'sun', text: '태양' }, { id: 'earth', text: '지구' }, { id: 'light', text: '빛을 받는 쪽(낮)과 못 받는 쪽(밤) 표시' }, { id: 'arrow', text: '자전 방향 화살표' },
                { id: 'ship', text: '바다 위의 배', why: '낮과 밤이 생기는 까닭을 나타내는 데 꼭 필요하지 않아요.' }, { id: 'cloud', text: '구름 열 개', why: '구름은 자전과 관계없어요.' }] },
              target: { pick: ['sun', 'earth', 'light', 'arrow'] }, difficulty: 0.2 },
            { prompt: '낮과 밤 그림을 그리는 차례대로 카드를 놓아 보세요.',
              toolOptions: { mode: 'order', slots: ['첫째', '둘째', '셋째', '넷째'], cards: [
                { id: 'g3', text: '빛을 받는 쪽과 못 받는 쪽을 나누어 칠해요' }, { id: 'g1', text: '태양과 지구를 그려요' }, { id: 'g4', text: '자전 방향 화살표를 그려요' }, { id: 'g2', text: '지구의 자전축을 그려요' }] },
              target: { order: ['g1', 'g2', 'g3', 'g4'] }, difficulty: 0.25 },
            { prompt: '그림의 부분과 뜻을 이어 보세요. 알맞지 않은 카드는 남겨 둬요.',
              toolOptions: { mode: 'match', topic: '그림 읽기', slots: [{ id: 'f1', label: '밝게 칠한 쪽' }, { id: 'f2', label: '어둡게 칠한 쪽' }], cards: [{ id: 'day', text: '태양 빛을 받아 낮이에요' }, { id: 'night', text: '태양 빛을 받지 못해 밤이에요' }, { id: 'ocean', text: '바다예요', why: '밝고 어두운 칠은 바다와 땅이 아니라 낮과 밤을 나타내요.' }, { id: 'cloud', text: '구름이 낀 곳이에요', why: '구름과 관계없이 빛을 받는 곳이 낮이에요.' }] },
              target: { match: { f1: 'day', f2: 'night' } }, difficulty: 0.15,
              predict: { q: '어둡게 칠한 쪽에 있는 사람들에게는 어떤 때일까요?', options: ['밤이에요', '낮이에요', '잘 모르겠어요'], answer: 0 },
              conclude: '낮과 밤 그림에는 빛을 받는 쪽과 받지 못하는 쪽, 도는 방향이 나타나야 해요.' },
          ]),
      ],
      wrap: '"낮과 밤이 생기는 그림에 꼭 있어야 할 것 네 가지를 말해 볼까요?" 태양, 지구, 낮·밤 표시, 서에서 동 화살표를 모두 말하게 한다. 출구 2번에서 방향을 거꾸로 고른 학생에게는 북극 위에서 시계 반대 방향이라는 것을 손으로 돌려 보게 한다.',
      exit: [
        { type: 'choice', prompt: '낮과 밤 그림에서 자전 방향 화살표는 어느 쪽을 가리키게 그려야 하나요?', options: ['서쪽에서 동쪽', '동쪽에서 서쪽', '태양 쪽으로만'], answer: 0, difficulty: 0.2, explain: '지구는 서쪽에서 동쪽으로 자전하므로 북극 위에서 시계 반대 방향으로 그려요.' },
        { type: 'tool', tool: 'earth', options: { mode: 'spin', readOnly: true, ask: { q: '그림 속 우리나라는 어떤 때일까요?', choices: ['낮', '밤', '해 질 무렵'] } }, state: { hour: 11 }, prompt: '그림 속 우리나라가 어떤 때인지 골라 보세요.', target: { pick: 0 }, difficulty: 0.2 },
        { type: 'short', prompt: '그림에서 어두운 쪽에 있는 곳은 왜 밤인지 쓰세요.', answer: '태양 빛을 받지 못하는 쪽에 있기 때문이다.' },
      ],
      ws: [
        { type: 'figure', prompt: '그림에서 우리나라가 어떤 때인지 쓰세요. (낮, 밤, 해 뜰 무렵, 해 질 무렵)', tool: 'earthspin', figures: [
          { state: { hour: 6 }, caption: '우리나라: (          )' }, { state: { hour: 18 }, caption: '우리나라: (          )' }], answer: '해 뜰 무렵, 해 질 무렵' },
        { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '지구의 자전 방향은 ___쪽에서 ___쪽이에요. 북극 위에서 보면 시계 ___ 방향이에요.', answer: '서, 동, 반대' },
        { type: 'draw', prompt: '태양과 지구를 그리고 낮인 곳과 밤인 곳을 나누어 표시한 뒤 자전 방향 화살표를 그려 보세요.' },
        { type: 'choice', prompt: '낮과 밤 그림에 꼭 필요하지 않은 것은 무엇인가요?', options: ['바다 위의 배', '태양', '자전 방향 화살표'], answer: '① 바다 위의 배' },
        { type: 'short', prompt: '친구가 자전 방향 화살표를 동쪽에서 서쪽으로 그렸어요. 어떻게 고쳐야 하는지 쓰세요.', answer: '지구는 서쪽에서 동쪽으로 자전하므로 화살표를 반대로 고쳐야 한다.' },
      ],
      easyNote: '밝은 쪽은 낮, 어두운 쪽은 밤이에요. 지구는 북극 위에서 보면 시계 반대 방향으로 돌아요.',
      easy: [
        { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '태양 빛을 받는 쪽은 ___이고 받지 못하는 쪽은 ___이에요.', answer: '낮, 밤' },
        { type: 'choice', prompt: '지구가 도는 방향에 ○ 하세요.', options: ['서쪽에서 동쪽', '동쪽에서 서쪽'], answer: '서쪽에서 동쪽' },
        { type: 'figure', prompt: '우리나라가 밤인 그림에 ○ 하세요.', tool: 'earthspin', figures: [{ state: { hour: 12 }, caption: '(    )' }, { state: { hour: 0 }, caption: '(    )' }], answer: '두 번째' },
        { type: 'draw', prompt: '밝은 쪽과 어두운 쪽이 나뉜 지구를 그려 보세요.' },
      ],
      diff: {
        easy: '지구 그림에 때 글자와 낮·밤 글자가 보여 읽기가 쉬워요.',
        base: '글자가 줄어 지구 위 우리나라 자리를 보고 때를 판단해요.',
        challenge: '낮·밤 글자가 없고, 해 뜰 무렵과 해 질 무렵을 경계 방향으로 가려내요.',
      },
      notes: '자주 보이는 어려움: ① 화살표 방향을 거꾸로 그린다. ② 해 뜰 무렵과 해 질 무렵을 바꾼다 → 어두운 쪽에서 밝은 쪽으로 넘어가는 때가 해 뜰 무렵. ③ 지구에 빛이 닿는 쪽을 달 모양처럼 그린다. 그림 그리기 활동은 색연필이나 사인펜으로 해도 좋다.',
    }),
    // ───────────────────────── 9차시 (core) ─────────────────────────
    mk(9, {
      title: '전등과 지구본으로 낮과 밤 실험 계획 세우고 기록하기',
      objective: '전등과 지구본, 관측자 인형으로 낮과 밤이 바뀌는 모습을 관찰하는 실험의 순서와 기록 방법을 정해 말할 수 있다.',
      std: ['[6과12-02]'], safety: ['전등은 켜져 있는 동안 뜨거울 수 있어요. 손으로 만지지 않고 눈에 직접 비추지 않아요.', '전선에 걸려 넘어지지 않게 자리를 정리하고, 어두운 곳에서는 천천히 움직여요.'],
      ill: 'three children around a desk lamp and a paper globe with a tiny figure, one holding a notebook and one gently turning the globe in a dim classroom',
      sceneText: '지구본 실험을 계획해요', kind: 'both',
      intro: [
        '"전등과 지구본으로 낮과 밤을 보려면 가장 먼저 무엇을 해야 할까요?" 교실을 어둡게 하고 전등을 지구본 한쪽에 두는 시범을 보인다. 인형을 우리나라에 붙이고 돌리는 방향을 정해 두지 않으면 모둠마다 결과가 달라진다는 점을 짚는다. 전등이 뜨겁다는 안전 약속도 함께 말해 본다.',
        '낮과 밤 실험을 하려면 무엇을 준비하고 어떤 차례로 해야 할까요? 결과는 어떻게 기록하면 좋을까요?',
      ],
      acts: [
        A('a1', '활동 1. 실험 순서와 조건 정하기', 13, 'story',
          '실험 절차 카드를 차례대로 놓고, 모둠마다 같게 지켜야 할 조건을 골라요.',
          '"같은 실험을 해도 모둠 결과가 다르게 나오는 까닭은 무엇일까요?" 돌리는 방향이나 인형 위치가 모둠마다 달랐기 때문이라는 말을 이끈다. 인형을 아무 데나 붙여도 된다고 말하는 학생에게는 우리나라 위치에 고정해야 낮과 밤을 우리나라 기준으로 말할 수 있다고 짚는다.',
          { easy: { live: true, instant: true }, base: {}, challenge: {} },
          [
            { prompt: '지구본 실험 절차를 차례대로 놓아 보세요.',
              toolOptions: { mode: 'order', slots: ['첫째', '둘째', '셋째', '넷째', '다섯째'], cards: [
                { id: 'e4', text: '지구본을 서쪽에서 동쪽으로 천천히 돌려요' }, { id: 'e1', text: '교실을 어둡게 하고 전등을 켜요' }, { id: 'e5', text: '인형이 밝은 때와 어두운 때를 기록해요' }, { id: 'e3', text: '지구본에 관측자 인형을 우리나라 자리에 붙여요' }, { id: 'e2', text: '전등 앞에 지구본을 놓아요' }] },
              target: { order: ['e1', 'e2', 'e3', 'e4', 'e5'] }, difficulty: 0.2 },
            { prompt: '모둠마다 똑같이 지켜야 하는 조건만 바구니에 넣어 보세요.',
              toolOptions: { mode: 'pick', topic: '같게 할 조건', basket: '똑같이 지켜요', cards: [
                { id: 'dir', text: '지구본을 돌리는 방향' }, { id: 'doll', text: '인형을 붙이는 자리' }, { id: 'lamp', text: '전등의 자리(움직이지 않기)' },
                { id: 'color', text: '인형 색깔', why: '인형 색은 낮과 밤을 정하는 데 관계없어요.' }, { id: 'name', text: '모둠 이름', why: '모둠 이름은 실험 조건이 아니에요.' }] },
              target: { pick: ['dir', 'doll', 'lamp'] }, difficulty: 0.25 },
            { prompt: '지구본 모형에서 인형이 있는 곳의 때와 관찰한 밝기를 이어 보세요.',
              toolOptions: { mode: 'sort', topic: '관찰 결과', slots: ['밝아요(낮)', '어두워요(밤)'], cards: ['전등 빛을 정면으로 받을 때', '전등 반대쪽에 있을 때', '빛이 바로 닿는 쪽에 있을 때', '빛이 닿지 않는 쪽에 있을 때'] },
              target: { sort: { '밝아요(낮)': ['전등 빛을 정면으로 받을 때', '빛이 바로 닿는 쪽에 있을 때'], '어두워요(밤)': ['전등 반대쪽에 있을 때', '빛이 닿지 않는 쪽에 있을 때'] } }, difficulty: 0.2,
              predict: { q: '지구본을 한 바퀴 돌리면 인형은 어떻게 될까요?', options: ['밝은 때와 어두운 때를 한 번씩 겪어요', '계속 밝아요', '잘 모르겠어요'], answer: 0 },
              conclude: '지구본이 한 바퀴 돌면 인형은 낮과 밤을 한 번씩 겪어요.' },
          ]),
        A('a2', '활동 2. 실험 결과를 지구 그림으로 확인하기', 12, 'earthspin',
          '실험에서 본 것을 지구 그림으로 확인해요. 지구를 돌려 정한 때를 만들고, 우리나라 사람 곁의 동·서 표시도 살펴봐요.',
          '"인형이 밝은 쪽에서 어두운 쪽으로 넘어갈 때는 하루 중 언제일까요?" 해 질 무렵이라고 말하게 하고, 거꾸로 돌렸을 때를 떠올려 방향이 중요하다고 짚는다. 시각은 단순화한 예시이므로 실제 관찰 결과와 조금 달라도 괜찮다고 알려 준다.',
          { easy: { step: 45, readout: 'full', showSides: true }, base: { step: 15, readout: 'phase' }, challenge: { step: 15, readout: 'none' } },
          [
            { prompt: '지금은 오전 9시예요. 우리나라가 해 질 무렵(저녁)이 되게 지구를 돌려 보세요.', state: { hour: 9 }, target: { phase: '해 질 무렵' }, difficulty: 0.2 },
            { prompt: '지금은 새벽 3시예요. 우리나라가 오후 4시가 되게 지구를 돌려 보세요.', state: { hour: 3 }, target: { hour: 16 }, difficulty: 0.25 },
            { prompt: '해 질 무렵에 우리나라 사람은 태양이 어느 쪽에 있다고 볼까요? 지구를 돌린 뒤 골라요.', state: { hour: 10 }, toolOptions: { showLocal: true, ask: { q: '해 질 무렵 태양은 우리나라 사람의 어느 쪽에 보일까요?', choices: ['동쪽', '서쪽', '북쪽'], why: ['동쪽은 아침 해가 뜨는 쪽이에요.', null, '해는 북쪽 하늘에 보이지 않아요.'] } }, target: { hour: 17, ask: 1 }, reveal: 'after-check', difficulty: 0.3,
              conclude: '지구가 서쪽에서 동쪽으로 돌기 때문에 해 질 무렵의 태양은 서쪽에 보여요.' },
          ]),
      ],
      wrap: '"실험 결과를 모둠끼리 견주려면 무엇이 같아야 했나요?" 돌리는 방향, 인형 자리, 전등 자리가 같아야 한다고 말하게 한다. 출구 2번에서 인형 색깔을 조건으로 고른 학생에게는 낮과 밤을 정하는 것이 빛을 받는 쪽인지 묻는다. 전등은 만지지 않는다는 약속을 한 번 더 말한다.',
      exit: [
        { type: 'choice', prompt: '지구본 실험에서 지구본을 돌리는 방향은 어떻게 해야 하나요?', options: ['서쪽에서 동쪽으로 한 방향으로', '동쪽에서 서쪽으로 한 방향으로', '마음대로 번갈아'], answer: 0, difficulty: 0.2, explain: '실제 지구와 같게 서쪽에서 동쪽으로, 한 방향으로만 돌려요.' },
        { type: 'choice', prompt: '모둠 실험 결과를 견주려면 똑같이 해야 하는 조건이 아닌 것은 무엇인가요?', options: ['모둠 이름', '돌리는 방향', '인형을 붙이는 자리'], answer: 0, difficulty: 0.25, explain: '모둠 이름은 실험 결과와 관계없어요.' },
        { type: 'tool', tool: 'earthspin', options: { step: 15, readout: 'none' }, state: { hour: 4 }, prompt: '새벽 4시예요. 지구를 돌려 우리나라가 낮이 되게 해 보세요. 때를 알려 주는 글자는 없어요.', target: { time: '낮' }, difficulty: 0.25 },
      ],
      ws: [
        { type: 'table', prompt: '지구본 실험 계획표를 채워 보세요.', columns: ['준비물', '쓰임'], cells: [['전등', ''], ['지구본', ''], ['관측자 인형', '']], answer: '태양 역할, 지구 역할, 우리나라에 사는 사람 역할' },
        { type: 'figure', prompt: '그림을 보고 우리나라가 낮인지 밤인지 ○ 하세요.', tool: 'earthspin', figures: [
          { state: { hour: 14 }, caption: '(낮 / 밤)' }, { state: { hour: 22 }, caption: '(낮 / 밤)' }], answer: '낮, 밤' },
        { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '실험에서는 ___은(는) 움직이지 않고 ___을(를) 서쪽에서 동쪽으로 돌려요.', answer: '전등, 지구본' },
        { type: 'choice', prompt: '실험할 때 모둠마다 똑같이 해야 하는 것은 무엇인가요?', options: ['돌리는 방향', '인형 색깔', '모둠 이름'], answer: '① 돌리는 방향' },
        { type: 'short', prompt: '전등으로 실험할 때 지킬 안전 약속을 한 가지 쓰세요.', answer: '전등을 만지지 않고 눈에 직접 비추지 않는다.' },
      ],
      easyNote: '실험은 전등을 켜고 지구본에 인형을 붙인 뒤 한 방향으로 돌리며 밝기를 기록해요.',
      easy: [
        { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '지구본에 붙인 인형은 ___에 사는 사람을 나타내요.', answer: '우리나라' },
        { type: 'choice', prompt: '지구본은 어느 방향으로 돌릴까요?', options: ['서쪽에서 동쪽', '동쪽에서 서쪽'], answer: '서쪽에서 동쪽' },
        { type: 'figure', prompt: '낮인 그림에 ○ 하세요.', tool: 'earthspin', figures: [{ state: { hour: 12 }, caption: '(    )' }, { state: { hour: 0 }, caption: '(    )' }], answer: '첫 번째' },
        { type: 'draw', prompt: '실험할 때 전등과 지구본의 자리를 그려 보세요.' },
      ],
      diff: {
        easy: '때 글자와 낮·밤 글자가 보이고 45도씩 크게 돌려서 쉬워요.',
        base: '글자가 줄어 우리나라가 어떤 때인지 그림을 보고 판단해요.',
        challenge: '때 글자 없이 우리나라 사람 곁의 동·서 표시와 태양을 보고 판단해요.',
      },
      notes: '준비물(모둠): 지구본 또는 공, LED 손전등이나 스탠드, 작은 스티커 인형, 기록지. 실제 실험은 이 계획을 바탕으로 한다. 자주 보이는 어려움: ① 인형을 지구본 아무 곳에나 붙인다. ② 돌리는 방향이 모둠마다 다르다. ③ 전등까지 돌려 버린다. 시각은 단순화한 예시이다. 전등과 전선 안전을 꼭 지킨다.',
    }),

    // ───────────────────────── 10차시 (practice) ─────────────────────────
    mk(10, {
      title: '다른 모둠의 실험 기록에서 잘못된 곳 찾아 고치기',
      objective: '모형 실험 기록에서 돌리는 방향이나 움직이는 대상이 잘못된 곳을 찾아 바르게 고쳐 쓸 수 있다.',
      std: ['[6과12-02]'], safety: ['전등은 만지지 않고 눈에 직접 비추지 않아요.', SUN_SAFE],
      ill: 'a notebook page with a red paper pencil circling a mistake in a sketch of a lamp, a globe and a curved arrow, with a smiling checkmark beside the corrected one',
      sceneText: '잘못된 곳을 찾아 고쳐요', kind: 'both',
      intro: [
        '"옆 모둠이 지구본을 시계 방향으로 돌렸더니 낮 다음에 해 뜰 무렵이 왔대요. 이 기록을 믿어도 될까요?" 거꾸로 돌린 결과를 실제와 같다고 적는 오개념을 사례로 보여 준다. 기록이 틀렸다는 것이 아니라 어떤 조건이 달랐는지 찾는 시간이라고 분위기를 만든다. 전등은 만지지 않는다는 약속을 말해 본다.',
        '다른 모둠의 실험 기록에서 잘못된 곳을 찾아 고쳐 볼까요? 어떤 조건이 실제와 달랐을까요?',
      ],
      acts: [
        A('a1', '활동 1. 기록에서 잘못된 곳 찾기', 13, 'mindmap',
          '세 모둠의 기록을 읽고 바른 기록과 고쳐야 할 기록을 가려내요.',
          '"기록이 실제와 같으려면 무엇이 같아야 했나요?" 돌리는 방향과 움직이는 대상이라는 말을 이끈다. 전등을 돌려 낮과 밤을 만들었다는 학생에게는 "실제로 태양이 돈다는 설명과 같아지는데 맞을까요?"라고 되묻는다. 시계 방향으로 돌린 기록이 모형 안에서는 일관되지만 실제 지구와는 거꾸로임을 짚는다.',
          { easy: { live: true, instant: true }, base: {}, challenge: {} },
          [
            { prompt: '모둠의 실험 기록 가운데 바르게 쓴 것만 바구니에 넣어 보세요.',
              toolOptions: { mode: 'pick', topic: '실험 기록', basket: '바른 기록', cards: [
                { id: 'a', text: '북극 위에서 볼 때 시계 반대 방향으로 돌렸어요' }, { id: 'b', text: '전등은 움직이지 않았어요' }, { id: 'c', text: '인형이 낮 다음에 해 질 무렵을 지나 밤이 되었어요' },
                { id: 'd', text: '전등을 지구본 둘레로 돌려서 낮과 밤을 만들었어요', why: '실제로는 지구가 도는 것이라 지구본을 돌려야 해요.' }, { id: 'e', text: '시계 방향으로 돌렸지만 실제와 같은 결과예요', why: '지구는 시계 반대 방향으로 돌아 순서가 거꾸로 나와요.' }] },
              target: { pick: ['a', 'b', 'c'] }, difficulty: 0.2 },
            { prompt: '기록 문장을 바른 기록과 고쳐야 할 기록으로 나누어 보세요.',
              toolOptions: { mode: 'sort', topic: '기록 점검', slots: ['바른 기록', '고쳐야 할 기록'], cards: ['지구본만 돌리고 전등은 그대로 두었어요', '지구본을 돌릴 때마다 방향을 바꾸었어요', '인형을 우리나라 자리에 붙였어요', '인형 자리를 매번 바꾸었어요'] },
              target: { sort: { '바른 기록': ['지구본만 돌리고 전등은 그대로 두었어요', '인형을 우리나라 자리에 붙였어요'], '고쳐야 할 기록': ['지구본을 돌릴 때마다 방향을 바꾸었어요', '인형 자리를 매번 바꾸었어요'] } }, difficulty: 0.2 },
            { prompt: '잘못된 기록과 고치는 방법을 이어 보세요. 알맞지 않은 카드는 남겨 둬요.',
              toolOptions: { mode: 'match', topic: '고쳐 쓰기', slots: [{ id: 'x1', label: '전등을 돌렸어요' }, { id: 'x2', label: '시계 방향으로 돌렸어요' }], cards: [{ id: 'fix1', text: '전등은 두고 지구본을 돌려요' }, { id: 'fix2', text: '북극 위에서 볼 때 시계 반대 방향으로 돌려요' }, { id: 'fix3', text: '인형을 떼고 해 봐요', why: '인형은 우리나라 자리를 나타내므로 떼지 않아요.' }, { id: 'fix4', text: '전등을 더 밝게 바꿔요', why: '밝기가 아니라 움직이는 대상과 방향이 문제예요.' }] },
              target: { match: { x1: 'fix1', x2: 'fix2' } }, difficulty: 0.3,
              predict: { q: '지구본을 반대 방향으로 돌리면 낮과 밤의 차례는 어떻게 될까요?', options: ['실제와 거꾸로 나와요', '똑같아요', '잘 모르겠어요'], answer: 0 },
              conclude: '돌리는 방향과 움직이는 대상이 실제와 같아야 모형 실험 결과를 믿을 수 있어요.' },
          ]),
        A('a2', '활동 2. 고친 기록을 지구 그림으로 확인하기', 12, 'earth',
          '고친 기록이 맞는지 지구 그림으로 확인해요. 지구를 돌려 때를 만들고 그림을 보고 때를 골라요.',
          '"해 뜰 무렵은 어두운 쪽에서 밝은 쪽으로 넘어갈 때예요. 어느 방향으로 돌아야 그렇게 될까요?" 시계 반대 방향으로 돌아야 한다는 것을 손가락으로 따라가게 한다. 시각은 단순화한 예시 값이라고 알려 준다.',
          { easy: { readout: true, showSides: true }, base: {}, challenge: { showSides: false } },
          [
            { prompt: '오전 10시예요. 지구를 돌려 우리나라가 밤 10시가 되게 해 보세요.', state: { hour: 10 }, toolOptions: { mode: 'spin', readout: true }, target: { hour: 22 }, difficulty: 0.2 },
            { prompt: '그림에서 우리나라는 어두운 쪽에서 밝은 쪽으로 막 넘어가고 있어요. 어떤 때일까요?', state: { hour: 6 }, toolOptions: { mode: 'spin', readOnly: true, ask: { q: '그림 속 우리나라는 어떤 때일까요?', choices: ['해 뜰 무렵(아침)', '해 질 무렵(저녁)', '한밤중'], why: [null, '해 질 무렵은 밝은 쪽에서 어두운 쪽으로 넘어가는 때예요.', '한밤중에는 우리나라가 어두운 쪽 한가운데에 있어요.'] } }, target: { pick: 0 }, difficulty: 0.25 },
            { prompt: '지금은 낮 12시예요. 우리나라가 해 뜰 무렵(아침)이 되도록 지구를 돌려 보세요.', state: { hour: 12 }, toolOptions: { mode: 'spin' }, target: { phase: '해 뜰 무렵' }, difficulty: 0.3,
              conclude: '지구가 서쪽에서 동쪽으로 돌면 낮 다음에 해 질 무렵과 밤을 지나 해 뜰 무렵이 와요.' },
          ]),
      ],
      wrap: '"모형 실험 기록을 믿으려면 무엇을 확인해야 할까요?" 실제와 같은 방향으로 돌렸는지, 움직이는 대상이 맞는지를 말하게 한다. 출구 1번에서 전등을 돌린다고 한 학생은 활동 1의 1번 풀이를 다시 읽게 한다. 해와 지구를 헷갈릴 때는 팽이 시범으로 다시 보여 준다.',
      exit: [
        { type: 'choice', prompt: '다음 중 바르게 고친 기록은 무엇인가요?', options: ['전등은 두고 지구본을 서쪽에서 동쪽으로 돌렸어요', '전등을 지구본 둘레로 돌렸어요', '지구본을 번갈아 두 방향으로 돌렸어요'], answer: 0, difficulty: 0.2, explain: '실제 지구처럼 지구본만 서쪽에서 동쪽으로 돌려야 해요.' },
        { type: 'tool', tool: 'earth', options: { mode: 'spin', readOnly: true, ask: { q: '그림 속 우리나라는 어떤 때일까요?', choices: ['해 뜰 무렵', '해 질 무렵', '낮'] } }, state: { hour: 7 }, prompt: '고친 기록대로 돌렸어요. 그림 속 우리나라는 어떤 때인지 골라 보세요.', target: { pick: 0 }, difficulty: 0.25 },
        { type: 'short', prompt: '지구본을 반대 방향으로 돌린 기록을 어떻게 고쳐야 하는지 쓰세요.', answer: '북극 위에서 볼 때 시계 반대 방향(서쪽에서 동쪽)으로 돌린 것으로 고친다.' },
      ],
      ws: [
        { type: 'figure', prompt: '그림을 보고 우리나라가 어떤 때인지 쓰세요. (낮, 밤, 해 뜰 무렵, 해 질 무렵)', tool: 'earthspin', figures: [
          { state: { hour: 6 }, caption: '(          )' }, { state: { hour: 18 }, caption: '(          )' }], answer: '해 뜰 무렵, 해 질 무렵' },
        { type: 'table', prompt: '잘못된 기록을 바르게 고쳐 써 보세요.', columns: ['잘못된 기록', '바르게 고친 기록'], cells: [['전등을 돌렸어요', ''], ['동쪽에서 서쪽으로 돌렸어요', '']], answer: '지구본만 돌렸어요, 서쪽에서 동쪽으로 돌렸어요' },
        { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '모형 실험은 실제와 같은 ___으로 돌리고, 움직이는 것도 실제와 같게 ___을(를) 돌려야 해요.', answer: '방향, 지구본' },
        { type: 'choice', prompt: '지구본을 시계 방향으로 돌리면 낮 다음에 어떤 때가 먼저 오나요?', options: ['해 뜰 무렵', '해 질 무렵', '낮이 계속돼요'], answer: '① 해 뜰 무렵' },
        { type: 'short', prompt: '내가 고친 기록이 실제와 같은지 어떻게 확인할 수 있는지 쓰세요.', answer: '지구가 서쪽에서 동쪽으로 도는 것과 방향이 같은지, 움직이는 것이 지구본인지 확인한다.' },
      ],
      easyNote: '지구본만 서쪽에서 동쪽으로 돌려요. 전등은 움직이지 않아요.',
      easy: [
        { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '모형에서 돌리는 것은 전등이 아니라 ___이에요.', answer: '지구본' },
        { type: 'choice', prompt: '바르게 돌린 방향에 ○ 하세요.', options: ['서쪽에서 동쪽', '동쪽에서 서쪽'], answer: '서쪽에서 동쪽' },
        { type: 'figure', prompt: '해 뜰 무렵인 그림에 ○ 하세요.', tool: 'earthspin', figures: [{ state: { hour: 6 }, caption: '(    )' }, { state: { hour: 18 }, caption: '(    )' }], answer: '첫 번째' },
        { type: 'draw', prompt: '고친 실험 모습을 그려 보세요.' },
      ],
      diff: {
        easy: '카드를 놓으면 맞는지 바로 알려 주고, 지구 그림에 때 글자와 낮·밤 글자가 보여요.',
        base: '모두 놓은 뒤 확인을 눌러 스스로 고치고 지구 그림은 때 글자가 줄어요.',
        challenge: '고친 기록의 까닭까지 이어야 하고 지구 그림은 낮·밤 글자가 없어요.',
      },
      notes: '자주 보이는 어려움: ① 전등을 돌려도 같은 결과라고 생각한다. ② 반대 방향으로 돌린 기록을 맞다고 한다. ③ 해 뜰 무렵과 해 질 무렵을 바꾼다 → 어두운 쪽에서 밝은 쪽으로 넘어가면 해 뜰 무렵. 다른 모둠 기록을 비판할 때는 사람이 아니라 조건을 말하게 한다. 전등과 태양 안전 약속은 매번 말한다.',
    }),

    // ───────────────────────── 11차시 (core) ─────────────────────────
    mk(11, {
      title: '지구의 공전과 계절마다 달라지는 한밤 별자리 알아보기',
      objective: '지구가 태양 둘레를 1년에 한 바퀴 공전하고, 그 때문에 한밤에 보이는 별자리가 계절마다 달라짐을 설명할 수 있다.',
      std: ['[6과12-03]'], safety: ['밤에 별을 관찰할 때는 어른과 함께 안전한 곳에서 해요.'],
      ill: 'a paper Earth drawn at four places on a dotted circle around a sun, with a different paper constellation behind each place',
      sceneText: '계절마다 다른 별자리가 보여요', kind: 'night',
      intro: [
        '"겨울밤에 잘 보이던 별자리가 여름밤에는 안 보이는 까닭이 무엇일까요?" 계절별 별자리 사진을 보여 주고 학생 생각을 듣는다. "별자리가 사라졌다가 다시 생겨요"라는 답은 오개념이라 지금 정답을 말하지 않고, 지구가 태양 둘레를 도는 모형으로 확인한다고 알린다. 자전은 하루, 공전은 1년으로 구분해 칠판에 적는다.',
        '여름밤과 겨울밤에 보이는 별자리가 다른 까닭은 무엇일까요? 지구는 1년 동안 어떻게 움직일까요?',
      ],
      acts: [
        A('a1', '활동 1. 공전과 자전 구분하기', 12, 'mindmap',
          '공전을 설명하는 카드를 고르고, 자전과 공전으로 생기는 일을 나누어 보아요.',
          '"자전은 하루, 공전은 얼마나 걸릴까요?" 1년이라고 답하게 하고 둘을 한꺼번에 일어나는 두 가지 움직임으로 정리한다. 태양이 지구 둘레를 돈다고 말하는 학생에게는 "태양과 지구 중 크기가 훨씬 큰 것은 무엇인가요?"라고 되물어 지구가 태양을 돈다는 것을 떠올리게 한다.',
          { easy: { live: true, instant: true }, base: {}, challenge: {} },
          [
            { prompt: '공전을 바르게 설명한 카드만 바구니에 넣어 보세요.',
              toolOptions: { mode: 'pick', topic: '지구의 공전', basket: '바른 설명', cards: [
                { id: 'a', text: '지구가 태양 둘레를 돌아요' }, { id: 'b', text: '1년에 한 바퀴 돌아요' }, { id: 'c', text: '북극 위에서 볼 때 시계 반대 방향으로 돌아요' },
                { id: 'd', text: '하루에 한 바퀴 돌아요', why: '하루에 한 바퀴 도는 것은 자전이에요.' }, { id: 'e', text: '태양이 지구 둘레를 돌아요', why: '지구가 태양 둘레를 돌아요.' }] },
              target: { pick: ['a', 'b', 'c'] }, difficulty: 0.15 },
            { prompt: '자전으로 생기는 일과 공전으로 생기는 일로 나누어 보세요.',
              toolOptions: { mode: 'sort', topic: '자전과 공전', slots: ['자전(하루)', '공전(1년)'], cards: ['낮과 밤이 번갈아 와요', '별이 하룻밤 동안 서쪽으로 옮겨 가요', '계절마다 한밤에 보이는 별자리가 달라져요', '1년이 지나면 같은 별자리가 같은 계절에 다시 보여요'] },
              target: { sort: { '자전(하루)': ['낮과 밤이 번갈아 와요', '별이 하룻밤 동안 서쪽으로 옮겨 가요'], '공전(1년)': ['계절마다 한밤에 보이는 별자리가 달라져요', '1년이 지나면 같은 별자리가 같은 계절에 다시 보여요'] } }, difficulty: 0.25,
              predict: { q: '계절마다 한밤에 보이는 별자리가 달라지는 것은 어떤 운동 때문일까요?', options: ['지구의 자전', '지구의 공전', '잘 모르겠어요'], answer: 1 },
              conclude: '별자리가 계절에 따라 달라지는 것은 지구가 1년에 한 바퀴 공전하기 때문이에요.' },
            { prompt: '공전과 관련 있는 것끼리 이어 보세요. 알맞지 않은 카드는 남겨 둬요.',
              toolOptions: { mode: 'match', topic: '공전 이해', slots: [{ id: 'y1', label: '한 바퀴 도는 데 걸리는 시간' }, { id: 'y2', label: '계절마다 보이는 별자리가 다른 까닭' }], cards: [{ id: 'year', text: '1년' }, { id: 'night', text: '지구가 돌면서 밤 쪽이 향하는 하늘이 바뀌어서' }, { id: 'vanish', text: '별자리가 사라졌다 생겨서', why: '별자리는 사라지지 않고 낮에는 햇빛 때문에 보이지 않을 뿐이에요.' }, { id: 'day', text: '하루', why: '하루는 자전에 걸리는 시간이에요.' }] },
              target: { match: { y1: 'year', y2: 'night' } }, difficulty: 0.3 },
          ]),
        A('a2', '활동 2. 지구를 계절 자리로 옮겨 별자리 찾기', 13, 'earth',
          '지구를 태양 둘레의 계절 자리로 옮겨요. 지구의 어두운 쪽 너머에 있는 별자리가 한밤에 보이는 별자리예요.',
          '"한밤에는 태양 반대쪽 하늘이 보이는데, 오리온자리가 태양 쪽에 있을 때는 어떨까요?" 낮에 떠 있어도 햇빛 때문에 보이지 않는다고 짚는다. 별자리가 사라졌다가 다시 생긴다는 오개념을 정정한다. 교구의 별자리는 이해를 돕기 위한 예시 모양이다.',
          { easy: { seasonNames: true }, base: {}, challenge: { seasonNames: false } },
          [
            { prompt: '지구를 가을 자리로 옮겨 보세요.', state: { season: '봄' }, toolOptions: { mode: 'orbit' }, target: { season: '가을' }, difficulty: 0.15 },
            { prompt: '한밤에 백조자리가 잘 보이는 자리로 지구를 옮겨 보세요.', state: { season: '겨울' }, toolOptions: { mode: 'orbit' }, target: { night: '백조자리' }, difficulty: 0.3,
              predict: { q: '백조자리가 한밤에 보이려면 지구의 어느 쪽 너머에 있어야 할까요?', options: ['태양과 같은 쪽', '태양 반대쪽(밤 쪽)', '잘 모르겠어요'], answer: 1 } },
            { prompt: '지구가 봄 자리에 있을 때 한밤에 보이는 별자리를 골라 보세요.', state: { season: '봄' }, toolOptions: { mode: 'orbit', readOnly: true, ask: { q: '봄 자리에서 한밤에 보이는 별자리는?', choices: ['사자자리', '오리온자리', '백조자리'], why: [null, '오리온자리는 겨울 자리에서 한밤에 보여요.', '백조자리는 여름 자리에서 한밤에 보여요.'] } }, target: { pick: 0 }, difficulty: 0.25 },
            { prompt: '한밤에 페가수스자리가 보이도록 지구를 옮겨 보세요.', state: { season: '여름' }, toolOptions: { mode: 'orbit' }, target: { night: '페가수스자리' }, difficulty: 0.35,
              conclude: '지구가 공전하면 밤 쪽이 향하는 하늘이 바뀌어서 계절마다 다른 별자리가 한밤에 보여요.' },
          ]),
      ],
      wrap: '"겨울 별자리가 여름밤에는 왜 안 보일까요?" 여름에는 그 별자리가 태양 쪽에 있어 낮에 떠 있고 햇빛 때문에 보이지 않는다고 말하게 한다. 출구 1번에서 자전이라고 답한 학생은 활동 1의 두 번째 문항을 다시 풀어 보게 한다. 교구 속 별자리는 예시 모양이라고 한 번 더 알려 준다.',
      exit: [
        { type: 'choice', prompt: '계절에 따라 한밤에 보이는 별자리가 달라지는 까닭은 무엇인가요?', options: ['지구가 공전하기 때문에', '지구가 자전하기 때문에', '별자리가 사라지기 때문에'], answer: 0, difficulty: 0.2, explain: '지구가 태양 둘레를 돌아 밤 쪽이 향하는 하늘이 바뀌어요.' },
        { type: 'tool', tool: 'earth', options: { mode: 'orbit' }, state: { season: '봄' }, prompt: '한밤에 오리온자리가 잘 보이는 자리로 지구를 옮겨 보세요.', target: { night: '오리온자리' }, difficulty: 0.3 },
        { type: 'short', prompt: '지구가 태양을 한 바퀴 도는 운동의 이름과 걸리는 시간을 쓰세요.', answer: '공전이고 1년이 걸린다.' },
      ],
      ws: [
        { type: 'figure', prompt: '지구가 있는 계절 자리 그림을 보고, 이름을 쓰세요. (봄, 여름, 가을, 겨울)', tool: 'earth', options: { mode: 'orbit', seasonNames: false }, figures: [
          { state: { season: '여름' }, caption: '(      )' }, { state: { season: '겨울' }, caption: '(      )' }], answer: '여름, 겨울' },
        { type: 'table', prompt: '자전과 공전의 차이를 완성하세요.', columns: ['', '자전', '공전'], cells: [['걸리는 시간', '', ''], ['생기는 일', '', '']], answer: '하루/1년, 낮과 밤/계절 별자리가 달라짐' },
        { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '지구가 태양 둘레를 1년에 한 바퀴 도는 것을 ___이라고 해요. 이 때문에 계절마다 한밤에 보이는 ___가 달라요.', answer: '공전, 별자리' },
        { type: 'choice', prompt: '한밤에 보이는 별자리가 계절마다 달라지는 것과 관계 있는 운동은 무엇인가요?', options: ['공전', '자전', '달의 공전'], answer: '① 공전' },
        { type: 'short', prompt: '"여름에는 겨울 별자리가 사라진다"는 말을 고쳐 써 보세요.', answer: '여름에는 겨울 별자리가 태양 쪽에 있어서 낮에 떠 있고 햇빛 때문에 보이지 않는다.' },
      ],
      easyNote: '지구는 1년에 한 바퀴 태양 둘레를 돌아요(공전). 그래서 계절마다 한밤에 보이는 별자리가 달라요.',
      easy: [
        { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '지구가 태양 둘레를 도는 것을 ___이라고 해요.', answer: '공전' },
        { type: 'choice', prompt: '지구가 태양을 한 바퀴 도는 데 걸리는 시간에 ○ 하세요.', options: ['하루', '1년'], answer: '1년' },
        { type: 'figure', prompt: '여름 자리의 그림에 ○ 하세요.', tool: 'earth', options: { mode: 'orbit' }, figures: [{ state: { season: '여름' }, caption: '(    )' }, { state: { season: '겨울' }, caption: '(    )' }], answer: '첫 번째' },
        { type: 'draw', prompt: '태양과 지구가 도는 길을 그려 보세요.' },
      ],
      diff: {
        easy: '계절 자리 이름이 보이고, 카드를 놓으면 맞는지 바로 알려 줘요.',
        base: '모두 놓은 뒤 확인을 눌러 스스로 고치고 계절 자리 이름이 보여요.',
        challenge: '계절 자리 이름이 없고 별자리만 보고 계절 자리를 찾아요.',
      },
      notes: '자주 보이는 어려움: ① 별자리가 계절에 따라 사라졌다가 생긴다고 생각한다. ② 자전과 공전을 섞는다 → 하루/1년으로 구분. ③ 태양이 지구를 돈다고 생각한다. 교구 속 별자리 모양은 예시이다. 별자리 사진 자료나 별자리 앱은 보호자와 함께 쓰도록 안내한다.',
    }),
    // ───────────────────────── 12차시 (core) ─────────────────────────
    mk(12, {
      title: '계절별 지구 자리와 한밤 별자리를 그림으로 나타내기',
      objective: '태양 둘레를 도는 지구의 계절별 자리를 그림으로 나타내고, 각 자리에서 한밤에 보이는 별자리를 표시할 수 있다.',
      std: ['[6과12-03]'], safety: ['밤에 별을 관찰할 때는 어른과 함께 안전한 곳에서 해요.'],
      ill: 'a paper diagram of a sun at the center, a dotted circle with four small Earths marked with season names, and a constellation drawn outside each Earth',
      sceneText: '지구의 길과 별자리를 그려요', kind: 'night',
      intro: [
        '"친구가 공전 그림에서 지구 자리만 그리고 별자리는 그리지 않았어요. 이 그림으로 계절마다 다른 별자리를 설명할 수 있을까요?" 지구 자리만 그리고 그때 어느 쪽 하늘이 보이는지는 나타내지 않는 사례를 보여 준다. 그림에 꼭 넣을 것(태양, 지구가 도는 길, 계절 자리 네 곳, 별자리)을 학생과 정한다.',
        '공전 그림에는 무엇을 그려 넣어야 할까요? 지구가 있는 자리마다 한밤에 보이는 별자리를 어디에 그려야 할까요?',
      ],
      acts: [
        A('a1', '활동 1. 그림을 읽고 자리와 별자리 찾기', 13, 'earth',
          '지구가 태양 둘레를 도는 그림이에요. 그림을 보고 지구의 계절 자리와 한밤에 보이는 별자리를 골라요.',
          '"지구의 어두운 쪽 너머에 있는 별자리는 무엇인가요?" 그림에서 지구 바로 바깥쪽 별자리가 한밤에 보이는 것임을 손으로 짚게 한다. 태양과 같은 쪽 별자리는 낮에 떠 있어 보이지 않는다고 말해 주고, 지구에서 태양 쪽을 향해 선을 그어 보게 한다.',
          { easy: { seasonNames: true }, base: {}, challenge: { seasonNames: false } },
          [
            { prompt: '그림 속 지구가 여름 자리에 있을 때 한밤에 보이는 별자리를 골라 보세요.', state: { season: '여름' }, toolOptions: { mode: 'orbit', readOnly: true, ask: { q: '여름 자리에서 한밤에 보이는 별자리는?', choices: ['백조자리', '사자자리', '오리온자리'], why: [null, '사자자리는 봄 자리에서 한밤에 보여요.', '오리온자리는 겨울 자리에서 한밤에 보여요.'] } }, target: { pick: 0 }, difficulty: 0.2 },
            { prompt: '그림 속 지구에서는 오리온자리가 한밤에 보여요. 이 자리는 어느 계절 자리인지 골라 보세요.', state: { season: '겨울' }, toolOptions: { mode: 'orbit', readOnly: true, seasonNames: false, ask: { q: '오리온자리가 한밤에 보이는 지구 자리는?', choices: ['여름 자리', '겨울 자리', '가을 자리'], why: ['여름 자리에서는 백조자리가 한밤에 보여요.', null, '가을 자리에서는 페가수스자리가 한밤에 보여요.'] } }, target: { pick: 1 }, difficulty: 0.3 },
            { prompt: '지구가 가을 자리에서 계절 순서대로 한 자리 더 돌면 어느 계절 자리일까요? 골라 보세요.', state: { season: '가을' }, toolOptions: { mode: 'orbit', readOnly: true, ask: { q: '가을 다음으로 지구가 가는 자리는?', choices: ['겨울 자리', '봄 자리', '여름 자리'], why: [null, '봄 자리는 겨울 다음이에요.', '여름 자리는 봄 다음이에요.'] } }, target: { pick: 0 }, difficulty: 0.25,
              conclude: '지구는 봄 → 여름 → 가을 → 겨울 차례로 공전하며 자리마다 한밤에 보이는 별자리가 달라져요.' },
          ]),
        A('a2', '활동 2. 공전 그림 구성하기', 12, 'mindmap',
          '그림에 꼭 넣을 것을 고르고, 계절 자리와 별자리를 이어요. 그림을 그리는 차례도 정해요.',
          '"계절 자리와 별자리를 어떻게 이으면 그림만 보고도 설명할 수 있을까요?" 지구에서 태양 반대쪽으로 선을 그어 별자리에 닿게 한다고 말하게 한다. 지구가 도는 길을 원이 아니라 직선으로 그리는 학생에게는 태양을 한가운데 두고 한 바퀴 돌아 처음으로 돌아오는 길임을 짚는다.',
          { easy: { live: true, instant: true }, base: {}, challenge: {} },
          [
            { prompt: '공전 그림에 꼭 들어가야 하는 것만 바구니에 넣어 보세요.',
              toolOptions: { mode: 'pick', topic: '그림에 들어갈 것', basket: '꼭 필요해요', cards: [
                { id: 'sun', text: '태양' }, { id: 'path', text: '지구가 도는 길' }, { id: 'spots', text: '계절별 지구 자리 네 곳' }, { id: 'stars', text: '자리마다 한밤에 보이는 별자리' },
                { id: 'ship', text: '바다 위의 배', why: '공전과 별자리를 나타내는 데 필요하지 않아요.' }, { id: 'tree', text: '나무 열 그루', why: '나무는 공전 그림과 관계없어요.' }] },
              target: { pick: ['sun', 'path', 'spots', 'stars'] }, difficulty: 0.2 },
            { prompt: '지구의 계절 자리와 그 자리에서 한밤에 보이는 별자리를 이어 보세요.',
              toolOptions: { mode: 'match', topic: '자리와 별자리', slots: [{ id: 's1', label: '봄 자리' }, { id: 's2', label: '여름 자리' }, { id: 's3', label: '가을 자리' }, { id: 's4', label: '겨울 자리' }], cards: [{ id: '사자', text: '사자자리' }, { id: '백조', text: '백조자리' }, { id: '페가수스', text: '페가수스자리' }, { id: '오리온', text: '오리온자리' }] },
              target: { match: { s1: '사자', s2: '백조', s3: '페가수스', s4: '오리온' } }, difficulty: 0.3,
              predict: { q: '지구가 여름 자리에서 겨울 자리로 가면 한밤에 보이는 별자리는 어떻게 될까요?', options: ['다른 별자리가 보여요', '같은 별자리가 보여요', '잘 모르겠어요'], answer: 0 },
              conclude: '지구의 자리마다 밤 쪽이 향하는 하늘이 달라서 한밤에 보이는 별자리도 달라요.' },
            { prompt: '공전 그림을 그리는 차례대로 카드를 놓아 보세요.',
              toolOptions: { mode: 'order', slots: ['첫째', '둘째', '셋째', '넷째'], cards: [
                { id: 'd3', text: '계절별 지구 자리 네 곳을 표시해요' }, { id: 'd1', text: '한가운데 태양을 그려요' }, { id: 'd4', text: '자리마다 한밤에 보이는 별자리를 그려요' }, { id: 'd2', text: '태양 둘레로 지구가 도는 길을 그려요' }] },
              target: { order: ['d1', 'd2', 'd3', 'd4'] }, difficulty: 0.2 },
          ]),
      ],
      wrap: '"공전 그림에서 별자리는 지구의 어느 쪽에 그려야 할까요?" 지구에서 태양 반대쪽, 곧 밤 쪽 바깥에 그려야 한밤에 보이는 별자리를 나타낸다고 말하게 한다. 출구 2번에서 태양 쪽 별자리를 고른 학생에게는 낮에는 햇빛 때문에 별이 보이지 않는다는 것을 다시 짚는다.',
      exit: [
        { type: 'choice', prompt: '공전 그림에서 한밤에 보이는 별자리는 지구의 어느 쪽에 그려야 하나요?', options: ['태양 반대쪽(밤 쪽)', '태양과 같은 쪽', '지구 바로 위'], answer: 0, difficulty: 0.2, explain: '한밤에는 태양 반대쪽 하늘이 보이므로 그 쪽 별자리를 표시해요.' },
        { type: 'tool', tool: 'earth', options: { mode: 'orbit', readOnly: true, ask: { q: '그림 속 지구가 있는 자리에서 한밤에 보이는 별자리는?', choices: ['사자자리', '백조자리', '오리온자리'] } }, state: { season: '봄' }, prompt: '그림 속 지구에서 한밤에 보이는 별자리를 골라 보세요.', target: { pick: 0 }, difficulty: 0.25 },
        { type: 'short', prompt: '공전 그림에 꼭 들어갈 것 두 가지를 쓰세요.', answer: '태양, 지구가 도는 길(계절 자리), 별자리 중 두 가지' },
      ],
      ws: [
        { type: 'figure', prompt: '그림에서 지구가 있는 계절 자리 이름을 쓰세요. (봄, 여름, 가을, 겨울)', tool: 'earth', options: { mode: 'orbit', seasonNames: false }, figures: [
          { state: { season: '봄' }, caption: '(      )' }, { state: { season: '가을' }, caption: '(      )' }], answer: '봄, 가을' },
        { type: 'table', prompt: '계절 자리와 한밤에 보이는 별자리를 이어 쓰세요. 비어 있는 곳을 채워요.', columns: ['계절 자리', '한밤에 보이는 별자리'], cells: [['봄', '사자자리'], ['여름', ''], ['가을', ''], ['겨울', '']], answer: '백조자리, 페가수스자리, 오리온자리' },
        { type: 'draw', prompt: '태양과 지구가 도는 길을 그리고, 계절 자리 네 곳과 별자리를 표시해 보세요.' },
        { type: 'choice', prompt: '공전 그림에서 한밤에 보이는 별자리는 지구의 어느 쪽에 그려야 하는지 ○ 하세요.', options: ['태양 반대쪽', '태양과 같은 쪽'], answer: '태양 반대쪽' },
        { type: 'short', prompt: '지구 자리만 그리고 별자리를 그리지 않은 그림의 문제점을 쓰세요.', answer: '계절마다 한밤에 어느 쪽 하늘이 보이는지 나타내지 못해 별자리가 달라지는 까닭을 설명할 수 없다.' },
      ],
      easyNote: '지구가 있는 자리에서 태양 반대쪽 하늘이 한밤에 보여요. 그 쪽에 별자리를 그려요.',
      easy: [
        { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '한밤에는 태양 ___쪽 하늘의 별자리가 보여요.', answer: '반대' },
        { type: 'choice', prompt: '지구는 1년에 태양을 몇 바퀴 도나요?', options: ['한 바퀴', '365바퀴'], answer: '한 바퀴' },
        { type: 'figure', prompt: '겨울 자리 그림에 ○ 하세요.', tool: 'earth', options: { mode: 'orbit' }, figures: [{ state: { season: '여름' }, caption: '(    )' }, { state: { season: '겨울' }, caption: '(    )' }], answer: '두 번째' },
        { type: 'draw', prompt: '태양과 지구가 도는 길을 그려 보세요.' },
      ],
      diff: {
        easy: '계절 자리 이름이 보이고, 카드를 놓으면 맞는지 바로 알려 줘요.',
        base: '모두 놓은 뒤 확인을 눌러 스스로 고치고 계절 자리 이름이 보여요.',
        challenge: '계절 자리 이름이 없고 별자리만 보고 계절을 찾아요.',
      },
      notes: '자주 보이는 어려움: ① 지구 자리만 그리고 별자리를 빼먹는다. ② 별자리를 태양 쪽에 그린다. ③ 지구가 도는 길을 직선으로 그린다. 교구 속 별자리 모양은 예시이다. 그림은 큰 종이에 모둠이 함께 그리면 더 좋다.',
    }),

    // ───────────────────────── 13차시 (practice) ─────────────────────────
    mk(13, {
      title: '다른 별자리로 계절별 지구 자리 그림 다시 읽고 고치기',
      objective: '다른 별자리를 넣은 공전 그림을 읽고 계절 자리와 한밤에 보이는 별자리를 짝지으며, 지구가 1년 동안 자리를 순환한다고 표현할 수 있다.',
      std: ['[6과12-03]'], safety: ['밤에 별을 관찰할 때는 어른과 함께 안전한 곳에서 해요.'],
      ill: 'a round paper calendar wheel with a paper Earth riding around a sun and four different constellations at the rim, with a child tracing the circle with a finger',
      sceneText: '다른 별자리도 찾아봐요', kind: 'night',
      intro: [
        '"지난 시간에는 사자·백조·페가수스·오리온자리를 찾았어요. 다른 별자리도 지구가 돌면 계절마다 한밤에 보일까요?" 목동자리·전갈자리·안드로메다자리·쌍둥이자리를 소개한다. 별 이름을 외우는 것이 아니라 지구 자리에서 태양 반대쪽을 읽는 방법이 같다고 강조한다. 별자리가 계절마다 사라진다는 오개념을 한 번 더 짚는다.',
        '낯선 별자리가 들어 있는 그림에서도 같은 방법으로 찾을 수 있을까요? 지구는 1년이 지나면 어디로 돌아올까요?',
      ],
      acts: [
        A('a1', '활동 1. 다른 별자리로 같은 방법 써 보기', 13, 'earth',
          '별자리 이름이 달라졌어요. 지구를 옮겨 한밤에 그 별자리가 보이는 자리를 찾거나, 그림을 보고 별자리를 골라요.',
          '"별자리 이름을 몰라도 지구에서 태양 반대쪽을 보면 되지요?" 이름이 낯설어도 방법은 같다고 말하게 한다. 별자리가 달라졌으니 계절 순서도 달라졌다고 생각하는 학생에게는 지구가 도는 길과 계절 순서는 그대로임을 짚는다. 교구 속 별자리 배치는 설명을 돕기 위한 예시라고 알려 준다.',
          { easy: { seasonNames: true }, base: {}, challenge: { seasonNames: false } },
          [
            { prompt: '한밤에 쌍둥이자리가 잘 보이는 자리로 지구를 옮겨 보세요.', state: { season: '여름' }, toolOptions: { mode: 'orbit', constellations: { 봄: '목동자리', 여름: '전갈자리', 가을: '안드로메다자리', 겨울: '쌍둥이자리' } }, target: { night: '쌍둥이자리' }, difficulty: 0.3 },
            { prompt: '한밤에 전갈자리가 보이도록 지구를 옮겨 보세요.', state: { season: '가을' }, toolOptions: { mode: 'orbit', constellations: { 봄: '목동자리', 여름: '전갈자리', 가을: '안드로메다자리', 겨울: '쌍둥이자리' } }, target: { night: '전갈자리' }, difficulty: 0.3 },
            { prompt: '그림 속 지구가 있는 자리에서 한밤에 보이는 별자리를 골라 보세요.', state: { season: '가을' }, toolOptions: { mode: 'orbit', readOnly: true, constellations: { 봄: '목동자리', 여름: '전갈자리', 가을: '안드로메다자리', 겨울: '쌍둥이자리' }, ask: { q: '그림 속 지구에서 한밤에 보이는 별자리는?', choices: ['안드로메다자리', '목동자리', '쌍둥이자리'], why: [null, '목동자리는 봄 자리에서 한밤에 보여요.', '쌍둥이자리는 겨울 자리에서 한밤에 보여요.'] } }, target: { pick: 0 }, difficulty: 0.25,
              conclude: '별자리 이름이 달라도 지구 자리에서 태양 반대쪽을 읽는 방법은 같아요.' },
          ]),
        A('a2', '활동 2. 별자리 계절표와 지구의 순환', 12, 'mindmap',
          '별자리를 계절별로 나누고, 지구가 한 해 동안 지나는 자리를 둥글게 순서대로 놓아요.',
          '"지구가 1년 동안 가는 길은 처음과 끝이 이어져 있나요?" 겨울 다음에 다시 봄이 온다고 말하게 한다. 별자리를 외우기만 하는 학생에게는 "이 별자리는 지구가 어디 있을 때 한밤에 보일까요?"라고 되묻는다. 계절별로 두 별자리씩 나누는 것은 교과서 대표 예시이고 더 많은 별자리가 있음을 알려 준다.',
          { easy: { live: true, instant: true }, base: {}, challenge: {} },
          [
            { prompt: '별자리를 한밤에 잘 보이는 계절 자리끼리 나누어 보세요.',
              toolOptions: { mode: 'sort', topic: '별자리 계절표', slots: ['봄', '여름', '가을', '겨울'], cards: ['사자자리', '목동자리', '백조자리', '전갈자리', '페가수스자리', '안드로메다자리', '오리온자리', '쌍둥이자리'] },
              target: { sort: { 봄: ['사자자리', '목동자리'], 여름: ['백조자리', '전갈자리'], 가을: ['페가수스자리', '안드로메다자리'], 겨울: ['오리온자리', '쌍둥이자리'] } }, difficulty: 0.3 },
            { prompt: '지구가 1년 동안 지나는 계절 자리를 둥글게 차례대로 놓아 보세요.',
              toolOptions: { mode: 'order', topic: '지구의 1년', slots: ['첫째 자리', '둘째 자리', '셋째 자리', '넷째 자리'], cards: [{ id: '겨울', text: '겨울 자리' }, { id: '봄', text: '봄 자리' }, { id: '가을', text: '가을 자리' }, { id: '여름', text: '여름 자리' }] },
              target: { order: ['봄', '여름', '가을', '겨울'] }, difficulty: 0.2,
              predict: { q: '지구가 겨울 자리를 지나 계속 돌면 다음에 어느 자리로 올까요?', options: ['봄 자리', '여름 자리', '잘 모르겠어요'], answer: 0 },
              conclude: '지구는 1년에 한 바퀴를 돌아 겨울 다음에 다시 봄 자리로 돌아와요.' },
            { prompt: '별자리 관찰 기록에서 바르게 쓴 말만 바구니에 넣어 보세요.',
              toolOptions: { mode: 'pick', topic: '별자리 기록', basket: '바른 기록', cards: [
                { id: 'a', text: '같은 시각, 같은 방향에서 비교했어요' }, { id: 'b', text: '계절마다 한밤에 보이는 별자리가 달랐어요' }, { id: 'c', text: '1년 뒤 같은 계절에는 같은 별자리가 보였어요' },
                { id: 'd', text: '별자리는 계절마다 새로 생겨요', why: '별자리는 계속 있고 우리가 보는 쪽 하늘이 바뀌어요.' }, { id: 'e', text: '낮에는 별자리가 없어요', why: '낮에도 있지만 햇빛이 밝아 보이지 않아요.' }] },
              target: { pick: ['a', 'b', 'c'] }, difficulty: 0.25 },
          ]),
      ],
      wrap: '"별자리 이름이 낯설어도 한밤에 보이는 별자리를 찾는 방법은 무엇인가요?" 지구 자리에서 태양 반대쪽 하늘을 읽는다고 말하게 한다. 출구 1번에서 목동자리를 여름으로 고른 학생은 활동 2의 첫 문항을 다시 풀어 보게 한다. 계절 대표 별자리는 교과서 예시이고 같은 계절에 더 많은 별자리가 있다고 짚는다.',
      exit: [
        { type: 'choice', prompt: '봄 자리에서 한밤에 보이는 별자리는 무엇인가요?', options: ['목동자리', '쌍둥이자리', '전갈자리'], answer: 0, difficulty: 0.25, explain: '목동자리는 봄, 전갈자리는 여름, 쌍둥이자리는 겨울에 한밤에 잘 보이는 별자리예요.' },
        { type: 'tool', tool: 'earth', options: { mode: 'orbit', constellations: { 봄: '목동자리', 여름: '전갈자리', 가을: '안드로메다자리', 겨울: '쌍둥이자리' } }, state: { season: '봄' }, prompt: '한밤에 안드로메다자리가 보이는 자리로 지구를 옮겨 보세요.', target: { night: '안드로메다자리' }, difficulty: 0.3 },
        { type: 'short', prompt: '지구가 겨울 자리를 지나 계속 공전하면 어느 자리로 오는지 쓰세요.', answer: '봄 자리로 돌아온다(1년에 한 바퀴를 돌기 때문).' },
      ],
      ws: [
        { type: 'figure', prompt: '그림 속 지구가 있는 계절 자리에서 한밤에 보이는 별자리를 쓰세요.', tool: 'earth', options: { mode: 'orbit', seasonNames: false, constellations: { 봄: '목동자리', 여름: '전갈자리', 가을: '안드로메다자리', 겨울: '쌍둥이자리' } }, figures: [
          { state: { season: '여름' }, caption: '(          )' }, { state: { season: '겨울' }, caption: '(          )' }], answer: '전갈자리, 쌍둥이자리' },
        { type: 'table', prompt: '별자리를 계절에 맞게 연결해 쓰세요.', columns: ['계절', '한밤에 잘 보이는 별자리 두 가지'], cells: [['봄', ''], ['여름', ''], ['가을', ''], ['겨울', '']], answer: '봄 사자·목동, 여름 백조·전갈, 가을 페가수스·안드로메다, 겨울 오리온·쌍둥이' },
        { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '지구는 1년에 태양 둘레를 ___ 바퀴 돌아 겨울 다음에 다시 ___ 자리로 와요.', answer: '한, 봄' },
        { type: 'choice', prompt: '별자리 기록을 비교할 때 같게 해야 하는 것은 무엇인가요?', options: ['관찰 시각과 방향', '친구 이름', '기록지 색깔'], answer: '① 관찰 시각과 방향' },
        { type: 'short', prompt: '"여름에는 겨울 별자리가 없다"는 말을 고쳐 써 보세요.', answer: '여름에는 겨울 별자리가 태양 쪽에 있어 낮에 떠 있고 햇빛 때문에 한밤에 보이지 않을 뿐이다.' },
      ],
      easyNote: '지구가 있는 자리에서 태양 반대쪽 별자리가 한밤에 보여요. 겨울 다음은 다시 봄이에요.',
      easy: [
        { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '지구는 ___년에 한 바퀴 태양 둘레를 돌아요.', answer: '1' },
        { type: 'choice', prompt: '겨울 다음에 지구가 오는 자리에 ○ 하세요.', options: ['봄 자리', '여름 자리'], answer: '봄 자리' },
        { type: 'figure', prompt: '봄 자리 그림에 ○ 하세요.', tool: 'earth', options: { mode: 'orbit' }, figures: [{ state: { season: '봄' }, caption: '(    )' }, { state: { season: '가을' }, caption: '(    )' }], answer: '첫 번째' },
        { type: 'draw', prompt: '지구가 돌아오는 길을 한 바퀴 이어 그려 보세요.' },
      ],
      diff: {
        easy: '계절 자리 이름이 보이고, 카드를 놓으면 맞는지 바로 알려 줘요.',
        base: '모두 놓은 뒤 확인을 눌러 스스로 고치고 계절 자리 이름이 보여요.',
        challenge: '계절 자리 이름이 없고 낯선 별자리만 보고 계절을 찾아요.',
      },
      notes: '자주 보이는 어려움: ① 별자리 이름이 바뀌면 방법도 바뀐다고 생각한다. ② 별자리를 계절별로 외우기만 한다. ③ 겨울 다음이 봄이라는 순환을 놓친다. 교과서에 따라 대표 별자리가 조금 다를 수 있다. 교구 속 별자리 배치는 설명을 돕는 예시이다.',
    }),

    // ───────────────────────── 14차시 (wrap) ─────────────────────────
    mk(14, {
      title: '관측 프로그램 규칙을 정하고 자전과 공전을 한꺼번에 정리하기',
      objective: '같은 장소·시각·방향에서 계절별 남쪽 하늘의 별자리를 찾아 기록하는 방법을 말하고, 자전과 공전으로 생기는 현상을 구분해 단원을 정리할 수 있다.',
      std: ['[6과12-01]', '[6과12-02]', '[6과12-03]'], safety: ['밤에 별을 관찰할 때는 어른과 함께 안전한 곳에서 해요.', SUN_SAFE],
      ill: 'a paper tablet screen showing a southern night sky with a glowing constellation, with a small Earth and a sun drawn at the corner and two curved arrows for spinning and circling',
      sceneText: '자전과 공전을 모아 정리해요', kind: 'night',
      intro: [
        '"지난 시간에는 지구가 돌면서 한밤에 보이는 별자리가 달라진다는 것을 알았어요. 우리 동네 하늘에서 직접 확인하려면 어떻게 해야 할까요?" 별자리 관측 프로그램이나 사진 자료를 쓰는 규칙을 학생과 정한다. 계절마다 보는 방향이나 시각을 바꾸어 찾고도 같은 조건이라고 적는 실수를 짚는다. 오늘은 단원 전체를 되돌아보는 시간이라고 알린다.',
        '계절별 별자리를 찾을 때 무엇을 같게 해야 할까요? 자전과 공전으로 생기는 일을 구분해 볼 수 있을까요?',
      ],
      acts: [
        A('a1', '활동 1. 관측 규칙과 자전·공전 구분', 13, 'mindmap',
          '별자리를 찾는 규칙과 절차를 정하고, 자전과 공전으로 생기는 일을 나누어 보아요.',
          '"계절마다 시각이나 방향을 바꿔 찾으면 어떤 문제가 생길까요?" 어느 쪽 하늘이 달라서인지 계절이 달라서인지 구분할 수 없다고 말하게 한다. 자전과 공전의 차이를 "하루"와 "1년"으로만 외우는 학생에게는 낮과 밤, 별자리 변화를 각각 대어 설명하게 한다.',
          { easy: { live: true, instant: true }, base: {}, challenge: {} },
          [
            { prompt: '계절별 별자리를 찾을 때 똑같이 지켜야 하는 조건만 바구니에 넣어 보세요.',
              toolOptions: { mode: 'pick', topic: '관측 조건', basket: '똑같이 지켜요', cards: [
                { id: 'place', text: '같은 장소에서 찾아요' }, { id: 'time', text: '같은 시각(밤 9시 무렵)에 찾아요' }, { id: 'dir', text: '같은 방향(남쪽 하늘)을 봐요' },
                { id: 'turn', text: '계절마다 보는 방향을 바꿔요', why: '방향을 바꾸면 계절 때문인지 방향 때문인지 알 수 없어요.' }, { id: 'clock', text: '시각은 마음대로 바꿔요', why: '시각이 달라지면 자전 때문에 별자리 위치가 달라져요.' }] },
              target: { pick: ['place', 'time', 'dir'] }, difficulty: 0.2 },
            { prompt: '관측 프로그램으로 계절별 남쪽 하늘 별자리를 찾는 절차를 차례대로 놓아 보세요.',
              toolOptions: { mode: 'order', slots: ['첫째', '둘째', '셋째', '넷째'], cards: [
                { id: 'w3', text: '프로그램에서 남쪽 하늘을 보며 별자리를 찾아요' }, { id: 'w1', text: '관찰 장소와 시각을 정해요' }, { id: 'w4', text: '찾은 별자리를 계절표에 기록해요' }, { id: 'w2', text: '계절 날짜를 바꿔 가며 같은 시각을 맞춰요' }] },
              target: { order: ['w1', 'w2', 'w3', 'w4'] }, difficulty: 0.25 },
            { prompt: '단원에서 배운 현상을 자전으로 생기는 일과 공전으로 생기는 일로 나누어 보세요.',
              toolOptions: { mode: 'sort', topic: '자전과 공전 정리', slots: ['자전', '공전'], cards: ['해가 동쪽에서 떠서 서쪽으로 지는 것처럼 보여요', '낮과 밤이 하루마다 바뀌어요', '겨울에는 오리온자리가 한밤에 보여요', '6개월 뒤에는 한밤에 보이는 별자리가 달라져요'] },
              target: { sort: { 자전: ['해가 동쪽에서 떠서 서쪽으로 지는 것처럼 보여요', '낮과 밤이 하루마다 바뀌어요'], 공전: ['겨울에는 오리온자리가 한밤에 보여요', '6개월 뒤에는 한밤에 보이는 별자리가 달라져요'] } }, difficulty: 0.3,
              predict: { q: '자전과 공전 가운데 하루 동안 해가 움직이는 것처럼 보이는 까닭은 무엇일까요?', options: ['자전', '공전', '잘 모르겠어요'], answer: 0 },
              conclude: '자전은 하루 동안의 변화(낮과 밤, 해와 별의 움직임)를, 공전은 1년 동안의 변화(계절별 별자리)를 만들어요.' },
          ]),
        A('a2', '활동 2. 자전과 공전 모형으로 돌아보기', 12, 'earth',
          '지구를 돌려 낮과 밤을 만들고, 계절 자리로 옮겨 한밤 별자리를 찾아요. 두 가지 운동을 하나씩 구분해 봐요.',
          '"같은 별자리가 반 년 뒤에는 어디로 갈까요?" 지구가 반 바퀴 돌면 정반대 쪽 별자리가 한밤에 보인다고 말하게 한다. 이 단원에서는 계절이 바뀌는 까닭이 공전 때문이라고만 말하고 거리 탓이라는 오개념은 다음 단원(계절의 변화)에서 다시 다룬다고 알린다.',
          { easy: { readout: true, seasonNames: true }, base: {}, challenge: { seasonNames: false } },
          [
            { prompt: '밤 9시예요. 지구를 돌려 우리나라가 오전 7시가 되게 해 보세요.', state: { hour: 21 }, toolOptions: { mode: 'spin', readout: true }, target: { hour: 7 }, difficulty: 0.2 },
            { prompt: '한밤에 사자자리가 보이도록 지구를 옮겨 보세요.', state: { season: '가을' }, toolOptions: { mode: 'orbit' }, target: { night: '사자자리' }, difficulty: 0.25 },
            { prompt: '지구가 여름 자리에서 반 바퀴(6개월) 더 돌았어요. 한밤에 보이는 별자리를 골라 보세요.', state: { season: '겨울' }, toolOptions: { mode: 'orbit', readOnly: true, ask: { q: '여름 자리에서 반 바퀴 더 돈 뒤 한밤에 보이는 별자리는?', choices: ['오리온자리', '백조자리', '사자자리'], why: [null, '백조자리는 여름 자리에서 한밤에 보여요. 반 바퀴 돈 뒤에는 달라져요.', '사자자리는 봄 자리에서 한밤에 보여요. 여름에서 반 바퀴를 가면 봄이 아니에요.'] } }, target: { pick: 0 }, difficulty: 0.35,
              conclude: '반 년이 지나면 지구가 정반대 자리에 와서 한밤에 보이는 별자리도 정반대 쪽 별자리로 바뀌어요.' },
          ]),
      ],
      wrap: '"자전과 공전으로 생기는 일을 하나씩 말해 볼까요?" 자전은 낮과 밤·해와 별의 하루 움직임, 공전은 계절별 별자리라고 짝지어 말하게 한다. 출구 2번에서 별자리 변화를 자전으로 답한 학생은 활동 1의 세 번째 문항을 다시 풀게 한다. 계절이 바뀌는 까닭은 다음 단원에서 이어 배운다고 알려 준다.',
      exit: [
        { type: 'choice', prompt: '하루 동안 낮과 밤이 번갈아 나타나는 것과 관계 있는 운동은 무엇인가요?', options: ['지구의 자전', '지구의 공전', '달의 공전'], answer: 0, difficulty: 0.15, explain: '지구가 하루에 한 바퀴 자전하기 때문이에요.' },
        { type: 'choice', prompt: '계절마다 한밤에 보이는 별자리가 달라지는 것과 관계 있는 운동은 무엇인가요?', options: ['지구의 공전', '지구의 자전', '해의 공전'], answer: 0, difficulty: 0.2, explain: '지구가 태양 둘레를 1년에 한 바퀴 공전하기 때문이에요.' },
        { type: 'tool', tool: 'earth', options: { mode: 'orbit' }, state: { season: '봄' }, prompt: '한밤에 백조자리가 보이는 자리로 지구를 옮겨 보세요.', target: { night: '백조자리' }, difficulty: 0.3 },
      ],
      ws: [
        { type: 'table', prompt: '자전과 공전을 비교해 빈칸을 채우세요.', columns: ['', '자전', '공전'], cells: [['걸리는 시간', '', ''], ['생기는 일', '', '']], answer: '하루/1년, 낮과 밤 등/계절별 별자리' },
        { type: 'figure', prompt: '그림에서 지구가 있는 계절 자리를 쓰세요.', tool: 'earth', options: { mode: 'orbit', seasonNames: false }, figures: [
          { state: { season: '겨울' }, caption: '(      )' }, { state: { season: '여름' }, caption: '(      )' }], answer: '겨울, 여름' },
        { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '별자리를 찾을 때는 같은 ___, 같은 ___, 같은 방향에서 비교해야 해요.', answer: '장소, 시각' },
        { type: 'choice', prompt: '다음 중 공전 때문에 생기는 일은 무엇인가요?', options: ['계절마다 한밤에 보이는 별자리가 달라지는 것', '해가 동쪽에서 떠서 서쪽으로 지는 것', '낮과 밤이 번갈아 오는 것'], answer: '① 계절마다 한밤에 보이는 별자리가 달라지는 것' },
        { type: 'table', prompt: '나의 단원 점검: 할 수 있으면 ○ 하세요.', columns: ['할 수 있는 것', '○'], cells: [['해와 별의 하루 움직임 말하기', ''], ['자전으로 낮과 밤 설명하기', ''], ['공전으로 계절별 별자리 설명하기', '']] },
      ],
      easyNote: '자전은 하루에 한 바퀴(낮과 밤), 공전은 1년에 한 바퀴(계절별 별자리)예요.',
      easy: [
        { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '낮과 밤은 지구의 ___ 때문에, 계절별 별자리는 지구의 ___ 때문에 생겨요.', answer: '자전, 공전' },
        { type: 'choice', prompt: '하루에 한 바퀴 도는 것에 ○ 하세요.', options: ['자전', '공전'], answer: '자전' },
        { type: 'figure', prompt: '여름 자리 그림에 ○ 하세요.', tool: 'earth', options: { mode: 'orbit' }, figures: [{ state: { season: '여름' }, caption: '(    )' }, { state: { season: '겨울' }, caption: '(    )' }], answer: '첫 번째' },
        { type: 'draw', prompt: '이 단원에서 가장 기억에 남는 것을 그림으로 나타내 보세요.' },
      ],
      diff: {
        easy: '시각·계절 자리 이름이 보이고, 카드를 놓으면 맞는지 바로 알려 줘요.',
        base: '모두 놓은 뒤 확인을 눌러 스스로 고치고 계절 자리 이름이 보여요.',
        challenge: '자리 이름이 없고 반 바퀴 뒤처럼 한 단계 더 생각해야 해요.',
      },
      notes: '자주 보이는 어려움: ① 계절마다 방향이나 시각을 바꿔 찾고도 같은 조건이라고 적는다. ② 자전과 공전을 섞는다. ③ 계절이 바뀌는 까닭을 공전만으로 설명하려 한다 → 자전축 기울기까지 필요한 설명은 6학년 2학기 계절의 변화에서 다룬다. 자기 점검에서 △가 많은 항목은 다음 시간 앞에서 복습한다. 태양과 밤 관찰 안전을 다시 말한다.',
    }),
  ];

  PaperLessons.registerUnit({
    id: UID, schema: 'edu-unit.v1', catalogUnit: CU,
    grade: 6, subject: '과학', unitTitle: '4. 지구의 운동',
    flow: '1~5차시는 하루 동안 태양과 별의 위치 변화를 방위와 시각으로 기록한다(2차시는 기존 차시 “지구의 자전과 낮과 밤”을 잇는다). 해의 자리를 방위로 말하고(1), 시각과 함께 점을 찍어 호 모양으로 이으며(3), 별과 달 모양은 날짜까지 적어 기록하고(4), 방위를 정해 같은 조건으로 관찰하는 절차를 짠다(5). 6~10차시는 자전을 다룬다. 자전의 뜻과 지구 반대편의 낮밤을 알고(6), 전등과 지구본 모형에서 무엇이 움직이는지 가리며(7), 낮밤 그림에 방향 화살표를 나타내고(8), 모형 실험 계획과 기록을 세운 뒤(9) 잘못된 기록을 찾아 고친다(10). 11~14차시는 공전이다. 공전과 계절별 한밤 별자리를 알고(11), 계절 자리 그림을 그리고(12), 다른 별자리로 같은 방법을 다시 써 보며(13), 관측 규칙을 정하고 자전과 공전을 한꺼번에 정리한다(14).',
    refs: { 2: 'g6-science-earth' },
    lessons,
  });
})();
