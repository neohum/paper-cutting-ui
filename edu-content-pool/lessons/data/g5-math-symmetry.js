/* 5학년 2학기 수학 3. 합동과 대칭 — 선대칭도형 완성하기 */
PaperLessons.register({
  id: 'g5-math-symmetry',
  schema: 'edu-lesson.v1',
  catalog: { unit: 'g5-수학-2학기-3', lesson: 5 },
  grade: 5, subject: '수학', unitTitle: '3. 합동과 대칭',
  title: '선대칭도형 완성하기',
  objective: '대칭축을 기준으로 대응점까지의 거리가 같음을 이용하여 선대칭도형을 완성할 수 있다.',
  standards: ['[6수03-02]'],
  minutes: 40,
  formats: ['chromebook', 'projector', 'print'],
  illustration: {
    prompt: "Layered paper-cut illustration of a child at a craft table unfolding a folded sheet of pastel paper to reveal a perfectly mirror-symmetric butterfly cut-out, with a straight dashed fold line running vertically down the exact middle of the butterfly so the left wing and the right wing are identical in shape, size and pattern, with no letters or numbers anywhere, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.",
    image: 'img/g5-math-symmetry.webp', size: [1200, 800],
    scene: { viewBox: [480, 270], layers: [
      { motif: 'sun', x: 410, y: 58, s: 0.8 }, { motif: 'cloud', x: 110, y: 52 }, { motif: 'cloud', x: 290, y: 38, s: 0.6 },
      { motif: 'hills', y: 208, colors: ['lavender', 'mint', 'buttercup'] },
      { motif: 'flower', x: 70, y: 228 }, { motif: 'flower', x: 410, y: 232, color: 'lavender' },
      { motif: 'leaf', x: 200, y: 112, color: 'mint' }, { motif: 'leaf', x: 280, y: 112, color: 'mint' },
      { motif: 'text', x: 240, y: 160, text: '반으로 접으면 꼭 포개지는 모양을 만들어요', size: 20 },
    ] },
  },
  stages: [
    {
      id: 'intro', title: '도입', minutes: 6,
      teacher: '종이를 반으로 접어 나비 반쪽을 오린 뒤 펼친 모습을 보여 주며 "왼쪽과 오른쪽이 어떻게 생겼나요?"라고 묻는다. 지난 시간에 배운 선대칭도형·대칭축·대응점 낱말을 떠올리게 한다. 시연 단추로 핀이 대응점에 놓이고 종이가 대칭축을 따라 접혀 꼭짓점과 포개지는 모습을 보여 준 뒤 "핀을 어디에 놓아야 꼭 포개질까요?"로 잇는다.',
      student: '반으로 접은 종이를 오려 펼치면 어떤 모양이 될지 생각해 봅시다.',
      demo: { tool: 'mirrorfold', options: { half: [[5, 1], [2, 3], [3, 3], [3, 6], [5, 6]] }, sequence: [{ complete: true }] },
    },
    {
      id: 'main', title: '전개', minutes: 27,
      activities: [
        {
          id: 'a1', title: '활동 1. 대응점 찾기', minutes: 11, tool: 'mirrorfold',
          task: '핀을 모눈 교점에 끌어 놓아 대응점을 찾아요. 대응점은 대칭축에서 꼭짓점과 같은 칸 수만큼 건너편에 있어요.',
          teacher: '"점 ㄴ에서 대칭축까지 몇 칸인가요? 그러면 대응점 ㄴ\'은 어디에 있을까요?" 칸 수를 손가락으로 세게 한다. 2번 문항은 꼭짓점마다 높이(가로줄)가 달라, 대칭축과 수직인 선을 따라가지 않으면 비스듬히 놓게 된다. 확인을 누르기 전에는 접어 볼 수 없고, 확인을 한 번 누를 때마다 한 번 접어 볼 수 있다 — 접었다 폈다 하며 핀을 맞추지 않고 칸 수를 먼저 세게 한다. 틀린 확인은 학생이 놓은 핀의 칸 수만 알려 주고, 꼭짓점 쪽 칸 수는 학생이 센다.',
          levels: { easy: { showDistance: true, showLinks: true }, base: {}, challenge: { allowFold: false } },
          items: [
            { prompt: '점 ㄴ의 대응점 ㄴ\'을 찾아 핀을 놓으세요.', toolOptions: { half: [[5, 1], [2, 3], [3, 3], [3, 6], [5, 6]], only: ['ㄴ'] }, target: { pins: ['ㄴ'] }, difficulty: 0.05,
              predict: { q: '점 ㄴ은 대칭축에서 3칸 떨어져 있어요. 대응점 ㄴ\'은 어디에 있을까요?', options: ['대칭축 건너편으로 3칸', '대칭축 건너편으로 6칸', '점 ㄴ 바로 옆 칸'], answer: 0 },
              conclude: '대응점은 대칭축을 사이에 두고 꼭짓점과 같은 거리만큼 떨어져 있어요.' },
            { prompt: '세 꼭짓점 ㄴ, ㄷ, ㄹ의 대응점을 모두 찾아 핀을 놓으세요. 꼭짓점마다 높이가 달라요.', toolOptions: { half: [[5, 0], [1, 2], [3, 3], [2, 6], [5, 7]] }, target: { complete: true }, difficulty: 0.18, reveal: 'after-check' },
            { prompt: '점과 대응점을 이은 선을 보고 물음에 답하세요.', toolOptions: { half: [[5, 1], [2, 3], [3, 3], [3, 6], [5, 6]], showLinks: true, allowFold: false,
              ask: { q: '점과 대응점을 이은 선분은 대칭축과 어떻게 만나나요?', choices: ['수직으로 만나요', '나란해서 만나지 않아요', '비스듬히 만나요'],
                why: [null, '선분이 대칭축을 가로질러 건너편으로 가요. 그러니 대칭축과 만나요.', '선분과 대칭축이 만나는 곳의 각을 보세요. 모눈의 가로줄과 세로줄처럼 만나요.'], hint: '모눈의 가로줄과 대칭축(세로줄)이 만나는 모양을 떠올려 봐요.', ok: '점과 대응점을 이은 선분은 대칭축과 수직으로 만나요.' } },
              state: { pins: { ㄴ: [8, 3], ㄷ: [7, 3], ㄹ: [7, 6] } }, target: { ask: 0 }, difficulty: 0.1,
              conclude: '대응점을 이은 선분은 대칭축과 수직으로 만나고, 대칭축은 그 선분을 똑같이 둘로 나눠요.' },
          ],
        },
        {
          id: 'a2', title: '활동 2. 선대칭도형 완성하기', minutes: 10, tool: 'mirrorfold',
          task: '대응점을 모두 찾아 선대칭도형을 완성해요. 대칭축이 가로로 놓인 도형도 있어요.',
          teacher: '"대칭축이 가로이면 칸 수는 어느 쪽으로 세나요?" 대칭축이 바뀌어도 \'대칭축과 수직인 선 위, 같은 칸 수\'라는 규칙은 같다는 것을 짚는다. 대응점을 찾은 뒤 꼭짓점을 차례로 이으면 도형이 완성된다는 것을 보여 준다. 기본 단계는 완성한 모양이 확인을 누른 뒤에 보인다.',
          levels: { easy: { showDistance: true, showLinks: true }, base: {}, challenge: { allowFold: false } },
          items: [
            { prompt: '대응점을 모두 찾아 나무 모양 선대칭도형을 완성하세요.', toolOptions: { half: [[5, 0], [3, 2], [4, 2], [2, 4], [3, 4], [1, 6], [5, 6]] }, target: { complete: true }, difficulty: 0.15, reveal: 'after-check' },
            { prompt: '대칭축이 가로로 놓여 있어요. 대응점을 모두 찾아 선대칭도형을 완성하세요.', toolOptions: { axis: 'h', at: 3, half: [[1, 3], [2, 1], [4, 2], [6, 0], [8, 2], [9, 3]] }, target: { complete: true }, difficulty: 0.22, reveal: 'after-check',
              predict: { q: '대칭축이 가로일 때, 점 ㄹ(대칭축 위로 3칸)의 대응점은 어디에 있을까요?', options: ['대칭축 아래로 3칸', '대칭축 오른쪽으로 3칸', '대칭축 아래로 6칸'], answer: 0 } },
            { prompt: '더 해 보기: 대칭축이 가운데에 있지 않아요. 대응점을 모두 찾아 완성하세요.', toolOptions: { at: 4, half: [[4, 0], [1, 1], [2, 3], [0, 5], [3, 7], [4, 7]] }, target: { complete: true }, extra: true, difficulty: 0.25, reveal: 'after-check' },
            { prompt: '더 해 보기: 가로 대칭축으로 왕관 모양을 완성하세요. 꼭짓점이 많아요.', toolOptions: { axis: 'h', at: 4, rows: 8, half: [[0, 4], [1, 1], [3, 3], [5, 0], [7, 3], [9, 1], [10, 4]] }, target: { complete: true }, extra: true, difficulty: 0.22, reveal: 'after-check',
              conclude: '꼭짓점이 많아도 대응점을 하나씩 대칭축과 수직인 선 위, 같은 칸 수에 놓으면 돼요.' },
          ],
        },
        {
          id: 'a3', title: '활동 3. 짝과 선대칭도형 확인하기', minutes: 6, tool: 'mirrorfold', pair: true,
          task: '한 사람이 대응점을 놓으면 짝은 칸 수를 세어 맞는지 말해 줘요. 번갈아 해 봅시다.',
          teacher: '짝에게 말할 문장 틀을 칠판에 쓴다: "점 ___은 대칭축에서 ___칸이니까, 대응점 ___도 건너편으로 ___칸이야." 근거 없이 "맞아/틀려"만 말하지 않게 한다.',
          levels: { easy: { showDistance: true, showLinks: true }, base: {}, challenge: { allowFold: false } },
          items: [{ prompt: '짝과 번갈아 "점 ___은 대칭축에서 ___칸이니까, 대응점도 건너편으로 ___칸이야."라고 말하며 대응점을 놓은 뒤 "다 했어요"를 누르세요.', free: true, talk: true, difficulty: 0,
            toolOptions: { half: [[5, 0], [2, 1], [4, 3], [1, 5], [5, 7]] } }],
        },
      ],
    },
    {
      id: 'wrapup', title: '정리', minutes: 7,
      teacher: '"선대칭도형을 완성하려면 무엇을 먼저 찾아야 할까요?" 대응점 → 대칭축까지의 거리 → 꼭짓점 잇기 순서를 함께 말한다. 출구 1번(접기 없이 완성)을 틀린 학생은 대칭축과 수직인 선을 따라가지 않았는지 살핀다.',
      exitTicket: [
        { type: 'tool', tool: 'mirrorfold', options: { allowFold: false, half: [[5, 1], [1, 1], [3, 4], [2, 6], [5, 6]] }, prompt: '접어 보지 않고 대응점을 모두 찾아 선대칭도형을 완성하세요.', target: { complete: true }, difficulty: 0.2, explain: '점 ㄴ은 4칸, ㄷ은 2칸, ㄹ은 3칸 — 대칭축 건너편 같은 가로줄에서 같은 칸 수만큼 가면 대응점이에요.' },
        { type: 'choice', prompt: '선대칭도형에서 점과 대응점을 이은 선분을 대칭축은 어떻게 나누나요?', options: ['똑같이 둘로 나눠요', '긴 쪽과 짧은 쪽으로 나눠요', '나누지 않아요'], answer: 0, difficulty: 0.12, explain: '대응점은 대칭축에서 같은 거리에 있으므로, 대칭축은 대응점을 이은 선분을 똑같이 둘로 나눠요.' },
        { type: 'short', prompt: '1번 그림의 점 ㄴ처럼 대칭축 위에 있지 않은 점의 대응점을 찾는 방법을 "대칭축", "수직", "거리"를 넣어 쓰세요.', answer: '점 ㄴ에서 대칭축에 수직인 선을 긋고, 대칭축 건너편으로 점 ㄴ과 대칭축 사이의 거리만큼 간 곳이 대응점이에요. (대칭축 위의 점 ㄱ은 자기 자신이 대응점이에요.)', difficulty: 0.2 },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
  ],
  worksheet: {
    title: '선대칭도형 완성하기',
    items: [
      { type: 'figure', prompt: '점선은 대칭축이에요. 대응점을 찍고 이어서 선대칭도형을 완성하세요.', tool: 'mirrorfold', figures: [
        { options: { half: [[5, 1], [2, 3], [3, 3], [3, 6], [5, 6]] }, caption: '가 (세로 대칭축)' },
        { options: { axis: 'h', at: 3, half: [[1, 3], [2, 1], [4, 2], [6, 0], [8, 2], [9, 3]] }, caption: '나 (가로 대칭축)' }],
        answer: '가: ㄴ\'은 대칭축 오른쪽 3칸, ㄷ\'은 2칸, ㄹ\'은 2칸(같은 가로줄). 나: 대칭축 아래로 ㄴ\' 2칸, ㄷ\' 1칸, ㄹ\' 3칸, ㅁ\' 1칸(같은 세로줄).' },
      { type: 'blank', prompt: '알맞은 말을 쓰세요.', text: '선대칭도형에서 점과 대응점을 이은 선분은 대칭축과 ___으로 만나요. 대칭축은 그 선분을 ___ 둘로 나눠요. 그래서 대응점은 대칭축에서 꼭짓점과 같은 ___에 있어요.', answer: '수직, 똑같이, 거리' },
      { type: 'choice', prompt: '세로 대칭축에서 점 ㄴ이 대칭축 왼쪽 4칸, 위에서 2번째 가로줄에 있어요. 대응점 ㄴ\'은 어디에 있나요?', options: ['대칭축 오른쪽 4칸, 위에서 2번째 가로줄', '대칭축 오른쪽 4칸, 위에서 4번째 가로줄', '대칭축 오른쪽 8칸, 위에서 2번째 가로줄'], answer: '① 대칭축 오른쪽 4칸, 위에서 2번째 가로줄' },
      { type: 'short', prompt: '민수는 대응점을 대칭축 건너편에 놓았는데, 접어 보니 꼭짓점과 포개지지 않았어요. 무엇을 빠뜨렸을지 두 가지를 쓰세요.', answer: '대칭축까지의 거리(칸 수)를 같게 하지 않았거나, 대칭축과 수직인 선(같은 가로줄) 위에 놓지 않았어요.' },
    ],
    easy: {
      note: '꼭짓점에서 대칭축까지 칸 수를 세어요. 대응점은 대칭축 건너편, 같은 줄에서 같은 칸 수만큼 가요.',
      items: [
        { type: 'figure', prompt: '점선은 대칭축이에요. 칸 수를 보고 대응점을 찍은 뒤 이어서 선대칭도형을 완성하세요.', tool: 'mirrorfold', figures: [
          { options: { showDistance: true, half: [[5, 1], [2, 3], [3, 3], [3, 6], [5, 6]] }, caption: '가' },
          { options: { showDistance: true, half: [[5, 0], [3, 2], [4, 2], [2, 4], [3, 4], [1, 6], [5, 6]] }, caption: '나' }],
          answer: '가: 3칸·2칸·2칸 건너편. 나: 2칸·1칸·3칸·2칸·4칸 건너편(같은 가로줄).' },
        { type: 'blank', prompt: '알맞은 말을 쓰세요.', text: '대응점은 대칭축에서 꼭짓점과 같은 ___만큼 건너편에 있어요.', answer: '칸 수(거리)' },
        { type: 'short', prompt: '대응점을 어떻게 찾았는지 한 문장으로 쓰세요.' },
      ],
    },
  },
  differentiation: {
    easy: '꼭짓점에서 대칭축까지 칸 수와, 놓은 핀의 칸 수가 함께 보여요. 점과 대응점을 잇는 선도 보여 칸 수를 견주어 볼 수 있어요.',
    base: '칸 수 표시가 없어요. 완성한 모양은 확인을 누른 뒤에 보이고, 접어 보기는 확인을 누를 때마다 한 번씩 열려 스스로 확인해요.',
    challenge: '접어 보기 단추가 없어요. 칸 수를 세어 머릿속으로 접어 보고 판단해요. 더 해 보기(가운데가 아닌 대칭축, 꼭짓점이 많은 왕관)가 나와요.',
  },
  teacherNotes: '흔한 오개념: ① 대응점을 대칭축에서 같은 거리가 아니라 꼭짓점에서 대칭축까지 거리의 두 배만큼 떨어진 곳(또는 꼭짓점 바로 옆)에 놓는다 — 교구가 "꼭짓점에서 대칭축까지 거리의 두 배를 건너갔어요"처럼 오개념을 짚고, 목표 칸 수는 말하지 않는다(3단계 힌트에서만 칸 수를 넣은 풀이가 나온다). ② 높이가 다른 꼭짓점의 대응점을 비스듬히(다른 가로줄에) 놓는다 — "대칭축과 수직인 선 위에 있지 않아요"로 알려 준다. ③ 대칭축이 가로일 때 칸 수를 옆으로 센다. ④ 대응점을 대칭축과 같은 쪽에 놓는다. ⑤ 대칭축이 도형의 가운데에 있어야만 한다고 생각한다 — 더 해 보기 1번(대칭축 자리 4)으로 확인한다. 선대칭도형의 뜻(한 직선을 따라 접었을 때 완전히 겹치는 도형)과 대칭축·대응점·대응변·대응각 낱말은 앞 차시에서 배운 것을 쓴다. 활동지는 모눈 위에 연필로 대응점을 찍고 자를 대어 잇게 한다.',
});
