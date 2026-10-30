/* 3학년 1학기 체육 1. 운동 — 26차시.
 * 달리기·뛰기·힘 쓰기·매달리기 같은 몸으로 하는 활동은 교구가 판정하지 않는다. 교구는 차례(운동 순서·준비/본/정리)·계획(구간 타이머)·기록(맥박·횟수·시간)·
 * 안전 점검·나누기(체력 요소·몸의 변화·건강의 모습)·판단과 스스로 점검(몸의 느낌·기분)을 맡고, 실제 움직임은 task·teacher·짝 활동(free)·활동지에 적어 교사가 관찰한다.
 * 체력: 힘(근력)·오래 버티는 힘(지구력)·몸 구부리기(유연성)·재빠름(민첩성). 건강: 몸 튼튼함 + 마음 편안함 + 친구와 어울림.
 * 맥박은 앉아서 손목에 두 손가락을 대고 10초 동안 센 수로 적고, 정확한 값보다 '전보다 늘었나 줄었나'를 견주는 데 쓴다.
 */
(function () {
  const UNIT = 'g3-pe-1-01';
  const CU = 'g3-체육-1학기-1';
  const BASE = { schema: 'edu-lesson.v1', grade: 3, subject: '체육', unitTitle: '1. 운동', minutes: 40, formats: ['chromebook', 'projector', 'print'] };
  // 체육은 units-map.json 에 없어 units-index.json 의 단원 성취기준 안에서 카탈로그 주제 코드대로 고른다.
  // 1~9 운동과 체력(01) · 10~18 기본 체력운동(02) · 19~26 운동과 건강(03)
  const stdOf = (n) => (n <= 9 ? '[4체01-01]' : n <= 18 ? '[4체01-02]' : '[4체01-03]');
  const art = (what, layers) => ({
    prompt: `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`,
    scene: { viewBox: [480, 270], layers },
  });
  const L = (n, o) => Object.assign({ id: `${UNIT}-${String(n).padStart(2, '0')}`, catalog: { unit: CU, lesson: n } }, BASE, { standards: [stdOf(n)] }, o);
  const stages = (intro, acts, wrap) => [
    Object.assign({ id: 'intro', title: '도입', minutes: 6 }, intro),
    { id: 'main', title: '전개', minutes: 26, activities: acts },
    Object.assign({ id: 'wrapup', title: '정리', minutes: 8 }, wrap),
  ];
  // 상황 판단(emotion branch) 보기 한 줄
  const ch = (id, text, result, mood, why) => (why ? { id, text, result, mood, why } : { id, text, result, mood });
  const br = (situation, choices) => ({ mode: 'branch', situation, choices });
  // 마음·몸 느낌 눈금(emotion scale) — 정답 없이 내 느낌을 고른다
  const sc = (situation, feeling, ask) => ({ mode: 'scale', situation, feeling, ask });
  // 안전 약속(차시마다 골라 쓴다)
  const SPACE = '친구와 두 팔을 벌려 닿지 않을 만큼 떨어져서 움직여요.';
  const GROUND = '운동장에 돌·깨진 물건·물웅덩이가 없는지 먼저 살펴요.';
  const SHOE = '신발 끈을 단단히 묶고, 실내화를 꺾어 신지 않아요.';
  const STOP = '어지럽거나 숨이 너무 차거나 아픈 곳이 생기면 바로 멈추고 선생님께 말해요.';
  const SIGNAL = '호루라기 신호를 들으면 하던 것을 멈추고 선생님을 봐요.';
  const WATER = '쉬는 시간마다 물을 마시고, 더운 날에는 그늘에서 쉬어요.';
  const PULSE = '맥박은 앉아서 두 손가락을 손목에 가볍게 대고 재요. 세게 누르지 않아요.';
  const JUMP = '뛰어서 내려올 때는 발끝부터 가볍게 닿고 무릎을 살짝 굽혀요.';
  const PUSHUP = '팔 굽혀 버티기는 무릎을 바닥에 대고 하고, 허리가 처지거나 팔이 아프면 바로 내려와요.';
  const MAT = '매트 둘레를 비우고, 한 사람이 끝까지 일어난 뒤에 다음 사람이 해요.';
  const HANG = '매달리기는 낮은 막대에서 선생님 곁에서만 하고, 발 아래에 매트를 깔아요.';
  const STRETCH = '몸 늘리기는 반동을 주지 않고 아프기 전까지만 천천히 늘려요.';

  PaperLessons.registerUnit({
    id: UNIT, schema: 'edu-unit.v1', catalogUnit: CU,
    grade: 3, subject: '체육', unitTitle: '1. 운동',
    flow: '1~9차시는 제자리 달리기·줄 넘기 전후의 숨과 맥박을 직접 재어 운동하면 몸이 어떻게 달라지는지 알고, 체력이 힘·오래 버티기·몸 구부리기·재빠름으로 이루어짐을 네 자리 활동으로 확인한 뒤, 같은 운동을 두 번·여러 날 해 보며 기록을 믿을 만하게 모으는 법과 일주일 기록표를 읽어 다음 주 계획을 세우는 법을 익힙니다. 10~18차시는 준비 운동·본 운동·정리 운동이 각각 하는 일과 차례, 오늘 활동에 맞는 준비 운동 부위를 알고, 팔·다리 힘 기르기 운동(팔 굽혀 버티기·앉았다 일어서기·매달리기)을 내 몸에 맞는 횟수로 해 본 뒤 몸의 반응으로 알맞았는지 판단하고 힘든 것과 아픈 것을 구분하며 다음 시간 계획을 바꿉니다. 19~26차시는 건강이 몸·마음·친구 관계로 이루어짐을 사례로 알고, 쉬는 시간에 할 몸 움직이기를 골라 해 본 뒤 사흘 동안 움직임 전후 기분을 얼굴 눈금으로 남기고 그 기록으로 움직임이 기분에 준 영향을 근거를 들어 말하며 친구 기록과 견주고 단원을 돌아봅니다. 교구는 차례·계획·기록·안전 점검·나누기·판단과 스스로 점검을 맡고, 실제 움직임은 교사가 운동장·교실에서 관찰합니다.',
    refs: {},
    lessons: [
      // ───────────────────────── 1 ─────────────────────────
      L(1, {
        title: '제자리 달리기 뒤 내 숨과 심장 뛰기 살펴보기',
        objective: '운동을 하기 전과 한 뒤에 숨과 맥박이 어떻게 달라지는지 직접 재어 견주어 말할 수 있다.',
        illustration: art('children sitting in a row on a school field checking their pulse on the wrist after running in place, with a small heart shape above each child', [
          { motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'cloud', x: 100, y: 50 }, { motif: 'hills', y: 210 },
          { motif: 'tree', x: 70, y: 212 }, { motif: 'flower', x: 420, y: 222 },
          { motif: 'text', x: 240, y: 130, text: '달리고 나면 몸이 어떻게 달라질까?', size: 22 },
        ]),
        safety: [GROUND, SHOE, PULSE, STOP],
        stages: stages(
          {
            teacher: '"가만히 앉아 있을 때 가슴에 손을 대 보세요. 무엇이 느껴지나요?" 콩콩 뛰는 것을 느꼈다는 대답을 받는다. 이어서 "제자리에서 30초 달리고 나면 이것이 어떻게 달라질까요?"라고 묻고, 짐작을 손가락으로 표시하게 한다(빨라진다·그대로·느려진다). 오늘은 짐작이 맞는지 맥박을 재어 확인한다고 알려 준다.',
            student: '30초 달리고 나면 숨과 심장 뛰기가 어떻게 달라질까요? 먼저 짐작해 보고 직접 재어 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 달리기 전과 뒤의 맥박 재기', minutes: 14, tool: 'timer',
              task: '운동장을 점검하고, 맥박 재는 차례를 맞춘 뒤 실제로 앉아서 맥박을 재요. 30초 제자리 달리기를 하고 다시 재어 두 수를 적어요.',
              teacher: '"맥박은 10초 동안 센 수예요. 시작과 멈춤은 내가 신호를 줄게요." 손가락이 아니라 엄지로 재서 자기 맥박과 헷갈리는 학생에게 "엄지 말고 검지와 중지를 대 보세요"라고 말해 준다. 달린 직후에는 서서 재지 않고 바로 앉아서 재게 한다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '달리기를 하기 전에 둘러보고 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['제자리 달릴 자리에 돌이 없어요', '신발 끈을 단단히 묶었어요', '내 둘레에 친구와 부딪힐 일이 없어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '맥박 재기 활동 카드를 하는 차례대로 놓아요.', toolOptions: { cards: ['30초 동안 제자리에서 달려요', '달린 뒤 바로 앉아 맥박을 다시 재요', '앉아서 10초 동안 맥박을 재요', '두 수를 견주어 적어요'] }, target: { order: ['앉아서 10초 동안 맥박을 재요', '30초 동안 제자리에서 달려요', '달린 뒤 바로 앉아 맥박을 다시 재요', '두 수를 견주어 적어요'] }, levels: { easy: { state: { order: ['앉아서 10초 동안 맥박을 재요', '30초 동안 제자리에서 달려요', '두 수를 견주어 적어요', '달린 뒤 바로 앉아 맥박을 다시 재요'] } } }, difficulty: 0.15,
                  hints: ['달리기 전의 모습이 있어야 달린 뒤와 견줄 수 있어요. 견주는 일은 두 번 잰 다음에 해요.', '달린 뒤에 서 있으면 맥박이 금방 가라앉으니 재는 일은 달리기 바로 뒤에 해요.'] },
                { prompt: '달리기 전과 뒤에 10초 동안 센 맥박 수를 적어요.', toolOptions: { fields: [{ label: '달리기 전', unit: '번', max: 30 }, { label: '달린 뒤', unit: '번', max: 40 }] }, target: { records: true }, levels: { challenge: { toolOptions: { fields: [{ label: '달리기 전', unit: '번', max: 30 }, { label: '달린 뒤', unit: '번', max: 40 }, { label: '늘어난 수', unit: '번', max: 40 }] } } }, difficulty: 0.15 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 몸에 일어난 변화 가려내기', minutes: 12, tool: 'mindmap',
              task: '운동하기 전과 한 뒤에 몸이 어떻게 달랐는지 카드를 나누고, 그 까닭에 알맞은 설명을 이어요. 땀에 대한 오해도 바로잡아요.',
              teacher: '"숨이 가빠지는 건 몸이 고장 났다는 뜻일까요?" 달리면 힘을 쓰는 몸이 더 많은 공기를 바라서 숨과 심장이 빨라진다는 것을 말해 준다. "땀이 많이 나면 체력이 좋아진 거예요"라고 말하는 학생에게 "날이 더워도 땀이 나지요? 땀의 양만으로는 알 수 없어요"라고 되묻는다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '몸의 모습 카드를 운동하기 전과 한 뒤로 나누어요.', toolOptions: { topic: '몸의 변화', slots: [{ id: 'before', label: '운동하기 전', sub: '가만히 앉아 있을 때' }, { id: 'after', label: '운동한 뒤', sub: '30초 달린 직후' }], cards: ['숨이 고르게 쉬어져요', '숨이 가빠요', '맥박이 천천히 뛰어요', '맥박이 빨라요', '얼굴이 붉어져요', '얼굴빛이 그대로예요'] }, target: { sort: { before: ['숨이 고르게 쉬어져요', '맥박이 천천히 뛰어요', '얼굴빛이 그대로예요'], after: ['숨이 가빠요', '맥박이 빨라요', '얼굴이 붉어져요'] } }, levels: { easy: { state: { at: { '숨이 가빠요': 1 } } } }, difficulty: 0.1 },
                { prompt: '운동한 뒤 몸의 변화와 까닭을 하나씩 이어요.', toolOptions: { mode: 'match', topic: '왜 그럴까요?', slots: [{ id: 'breath', label: '숨이 가빠졌어요' }, { id: 'beat', label: '맥박이 빨라졌어요' }, { id: 'sweat', label: '땀이 났어요' }], cards: ['힘쓰는 몸에 공기가 더 필요해서예요', '힘쓰는 몸에 피를 더 빨리 보내려고 해서예요', '뜨거워진 몸을 식히려고 해서예요'] }, target: { match: { breath: '힘쓰는 몸에 공기가 더 필요해서예요', beat: '힘쓰는 몸에 피를 더 빨리 보내려고 해서예요', sweat: '뜨거워진 몸을 식히려고 해서예요' } }, levels: { easy: { state: { at: { '힘쓰는 몸에 공기가 더 필요해서예요': 0 } } } }, difficulty: 0.2 },
                { prompt: '운동할 때 땀이 나는 것에 대해 맞게 말한 카드만 골라요.', toolOptions: { mode: 'pick', topic: '땀 이야기', cards: ['땀은 몸의 열을 식혀 줘요', '땀이 많이 나면 무조건 체력이 좋아진 거예요', '더운 날은 가만히 있어도 땀이 나요', '땀이 안 나면 운동을 안 한 거예요'] }, target: { pick: ['땀은 몸의 열을 식혀 줘요', '더운 날은 가만히 있어도 땀이 나요'] }, difficulty: 0.25,
                  predict: { q: '땀이 많이 나면 체력이 좋아진 것일까요?', options: ['그래요', '그렇지 않아요'], answer: 1 },
                  conclude: '땀의 양은 날씨와 사람에 따라 달라요. 체력은 땀이 아니라 숨·맥박이 빨리 가라앉는지 같은 몸의 반응으로 살펴요.' },
              ],
            },
          ],
          {
            teacher: '"달리고 나서 맥박이 어떻게 달라졌나요? 처음 짐작과 같았나요?" 두세 명이 자기 수를 말하게 한다. 정리 운동으로 천천히 걸으며 숨이 고르게 돌아오는 것을 느껴 보게 하고, 물을 마시게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'timer', options: { fields: [{ label: '줄넘기 전', unit: '번', max: 30 }, { label: '줄넘기 뒤', unit: '번', max: 40 }] }, prompt: '줄넘기 전 맥박 18번, 줄넘기 뒤 맥박 30번이에요. 두 칸에 옮겨 적어요.', target: { records: [18, 30] }, difficulty: 0.1 },
              { type: 'choice', prompt: '30초 달린 뒤 몸에 나타나는 모습은 무엇인가요?', options: ['숨이 가빠지고 맥박이 빨라져요', '숨이 느려지고 맥박이 멈춰요', '아무것도 달라지지 않아요'], answer: 0, difficulty: 0.15, explain: '힘을 쓰는 몸이 공기와 피를 더 많이 바라서 숨과 맥박이 빨라져요.' },
              { type: 'mood', prompt: '내 맥박을 직접 재어 본 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '달리기 전과 뒤, 내 몸은 어떻게 달랐을까요?',
          items: [
            { type: 'table', prompt: '10초 동안 센 맥박 수와 숨의 모습을 쓰세요.', columns: ['때', '맥박(번)', '숨은 어땠나요'], cells: [['달리기 전', '', ''], ['달린 뒤', '', '']] },
            { type: 'choice', prompt: '달린 뒤 맥박에 대해 맞는 것에 ○ 하세요.', options: ['빨라져요', '느려져요', '그대로예요'], answer: '빨라져요' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '운동하면 힘쓰는 몸에 ___가 더 필요해서 숨이 가빠지고 맥박이 ___져요.', answer: '공기, 빨라' },
            { type: 'check', prompt: '오늘 지킨 안전 약속에 ✓ 하세요.', options: ['앉아서 맥박을 쟀어요', '아프면 멈추기로 했어요', '신발 끈을 묶었어요'] },
            { type: 'short', prompt: '땀이 많이 나는 것만으로 체력이 좋아졌다고 말할 수 없는 까닭을 쓰세요.' },
          ],
          easy: {
            note: '운동하면 숨은 가빠지고 맥박은 빨라져요.',
            items: [
              { type: 'choice', prompt: '달린 뒤 숨은 어떻게 되나요?', options: ['가빠져요', '고요해져요'], answer: '가빠져요' },
              { type: 'short', prompt: '달린 뒤 몸에서 느낀 것 하나를 쓰세요.' },
              { type: 'draw', prompt: '달리기를 한 뒤 내 가슴 속 심장을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 맞는 곳에 놓으면 바로 표시되고, 첫 카드가 바른 자리에 놓여 있어요. 맥박은 두 칸만 적어요.',
          base: '모두 놓은 뒤 확인해 스스로 고쳐요.',
          challenge: '맥박이 늘어난 수를 스스로 셈해 한 칸 더 적고, 땀에 대한 오해를 가려내요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 맥박을 찾지 못한다 → 손목 엄지 쪽 아래에 검지·중지를 대게 하고 안 되면 목 옆을 알려 준다. ② 땀이 많으면 체력이 좋은 것이라 여긴다 → 더운 날을 견주게 한다. ③ 달린 뒤 서서 오래 재다가 맥박이 가라앉는다 → 달리기 바로 뒤에 재고 물을 마시게 한다. 몸으로 하는 활동은 교구가 판정하지 않으므로 교사가 관찰한다.',
      }),
      // ───────────────────────── 2 ─────────────────────────
      L(2, {
        title: '줄 뛰어넘기 뒤 힘쓰는 몸의 신호 짝 짓기',
        objective: '운동할 때 몸이 힘을 내기 위해 보내는 신호(숨·맥박·열·땀)를 하는 일과 이어 설명할 수 있다.',
        illustration: art('a child jumping over a low rope held by two friends, with small arrows showing breath going in and heart beating faster', [
          { motif: 'sun', x: 60, y: 54, s: 0.7 }, { motif: 'cloud', x: 380, y: 48 }, { motif: 'hills', y: 212 },
          { motif: 'flower', x: 90, y: 224 }, { motif: 'tree', x: 430, y: 210 },
          { motif: 'text', x: 240, y: 126, text: '힘을 쓰면 몸이 알려 줘요', size: 22 },
        ]),
        safety: [GROUND, SHOE, JUMP, SPACE],
        stages: stages(
          {
            teacher: '"지난 시간에 달리고 나서 맥박이 빨라졌지요? 오늘은 왜 그런지 더 알아봐요." 낮은 고무줄 넘기를 보여 주고 "줄을 넘을 때 몸에서 힘을 쓰는 곳은 어디일까요?"라고 묻는다. 다리뿐 아니라 팔·배도 쓴다는 대답과 함께 몸 전체가 함께 일한다는 것을 짚는다.',
            student: '줄을 넘을 때 몸의 어디가 힘을 쓸까요? 그때 숨과 맥박은 어떻게 될까요?',
          },
          [
            {
              id: 'a1', title: '활동 1. 낮은 줄 넘기 뒤 몸의 신호 모으기', minutes: 14, tool: 'mindmap',
              task: '낮은 줄을 열 번 넘고 나서 몸이 보낸 신호를 카드로 모아요. 신호와 그 신호가 하는 일을 이어요.',
              teacher: '"넘고 나서 가장 먼저 느낀 것이 무엇인가요?" 학생들의 대답(숨참·다리 뻐근함·열)을 칠판에 적고 카드와 견준다. "숨이 찬 것은 힘들어서 그만하라는 뜻만은 아니에요. 몸이 일하느라 더 많은 공기를 바란다는 신호이기도 해요"라고 말해 준다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '줄을 열 번 넘고 나서 내가 실제로 느낀 신호 카드만 골라요.', toolOptions: { mode: 'pick', topic: '내가 느낀 신호', cards: ['숨이 가빠졌어요', '다리가 뻐근했어요', '몸이 따뜻해졌어요', '눈이 감겼어요', '귀가 먹먹했어요'] }, target: { pick: ['숨이 가빠졌어요', '다리가 뻐근했어요', '몸이 따뜻해졌어요'] }, difficulty: 0.1 },
                { prompt: '몸의 신호에 몸이 하는 일을 하나씩 이어요.', toolOptions: { mode: 'match', topic: '몸의 신호', slots: [{ id: 'heat', label: '몸이 따뜻해져요' }, { id: 'tired', label: '다리가 뻐근해요' }, { id: 'fast', label: '맥박이 빨라져요' }], cards: ['근육이 일하면서 열이 나요', '다리 근육이 힘을 많이 썼어요', '근육에 피를 빨리 나르고 있어요'] }, target: { match: { heat: '근육이 일하면서 열이 나요', tired: '다리 근육이 힘을 많이 썼어요', fast: '근육에 피를 빨리 나르고 있어요' } }, levels: { easy: { state: { at: { '근육이 일하면서 열이 나요': 0 } } } }, difficulty: 0.2 },
                { prompt: '줄 넘기에서 힘을 쓰는 몸의 부분을 많이 쓰는 곳과 적게 쓰는 곳으로 나누어요.', toolOptions: { topic: '힘쓰는 곳', slots: ['많이 써요', '적게 써요'], cards: ['종아리와 허벅지', '배와 허리', '발목', '눈썹', '머리카락'] }, target: { sort: { '많이 써요': ['종아리와 허벅지', '배와 허리', '발목'], '적게 써요': ['눈썹', '머리카락'] } }, difficulty: 0.15 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 힘을 오래 내는 몸 만들기 이야기 정리', minutes: 12, tool: 'timer',
              task: '줄 넘기를 여러 번 나누어 해 보며 쉬는 시간을 맞춰요. 쉬면서 숨이 가라앉는 것을 살피고, 스스로 점검 목록에 표시해요.',
              teacher: '"쉬면 힘이 다시 생기는 것을 느꼈나요?" 쉬는 사이 숨과 맥박이 가라앉는 것을 손으로 확인하게 한다. "쉬지 않고 계속 뛰는 것이 더 좋아요"라고 말하는 학생에게 "쉬지 않으면 숨이 너무 차서 오래 못 하게 돼요"라고 짚는다.',
              levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
              items: [
                { prompt: '줄 넘기 전에 둘러보고 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['줄 앞뒤에 아무도 없어요', '줄이 걸릴 만한 물건이 없어요', '물 마실 곳을 알아 두었어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '줄 넘기를 20초 하고 20초 쉬기를 3번 하도록 타이머를 맞추어요.', toolOptions: { plan: { work: 30, rest: 10, rounds: 2 }, workStep: 5, restStep: 5 }, target: { plan: { work: 20, rest: 20, rounds: 3 } }, levels: { challenge: { prompt: '줄 넘기를 20초 하고 20초 쉬기를 되풀이해 전체 100초가 되도록 맞추어요(마지막에는 쉬지 않아요).', target: { total: 100, plan: { work: 20, rest: 20 } } } }, difficulty: 0.2 },
                { prompt: '줄 넘기를 나누어 한 뒤, 쉬는 동안 숨이 어떻게 되었는지 짝에게 말해요.', free: true, talk: true, difficulty: 0.1 },
                { prompt: '줄 넘기 활동을 하며 해낸 것을 점검 목록에 표시해요.', target: { selfCheck: ['쉬는 시간에 숨을 골랐어요', '힘들면 쉬어도 된다는 것을 알았어요', '몸의 신호를 하나 말했어요'] }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"힘들 때 몸이 보낸 신호를 하나만 말해 볼까요?" 숨이 가쁨·열·뻐근함 가운데 자기 경험을 말하게 한다. 정리 운동으로 팔다리를 가볍게 털며 걷고 물을 마신다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '몸의 신호', slots: [{ id: 'a', label: '숨이 가빠져요' }, { id: 'b', label: '땀이 나요' }], cards: ['몸이 더 많은 공기를 바라요', '뜨거워진 몸을 식혀요'] }, prompt: '운동 뒤 몸의 신호와 까닭을 이어요.', target: { match: { a: '몸이 더 많은 공기를 바라요', b: '뜨거워진 몸을 식혀요' } }, difficulty: 0.2 },
              { type: 'choice', prompt: '운동하며 쉬는 시간이 필요한 까닭은 무엇인가요?', options: ['숨과 맥박을 가라앉혀 다시 힘을 내려고', '운동 시간을 줄이려고', '친구와 이야기하려고만'], answer: 0, difficulty: 0.2, explain: '쉬면 숨과 맥박이 가라앉아 다시 힘을 낼 수 있어요.' },
              { type: 'mood', prompt: '내 몸의 신호를 들어 본 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '몸이 보내는 신호',
          items: [
            { type: 'table', prompt: '줄을 넘고 나서 느낀 몸의 신호와 까닭을 쓰세요.', columns: ['몸의 신호', '그 신호가 하는 일'], cells: [['숨이 가빠요', ''], ['몸이 따뜻해요', ''], ['맥박이 빨라요', '']] },
            { type: 'choice', prompt: '다리가 뻐근할 때 가장 알맞은 설명에 ○ 하세요.', options: ['다리 근육이 힘을 많이 썼어요', '다리가 고장 났어요', '다리가 사라졌어요'], answer: '다리 근육이 힘을 많이 썼어요' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '운동 중에 ___ 시간을 가지면 숨과 ___이 가라앉아 다시 힘을 낼 수 있어요.', answer: '쉬는, 맥박' },
            { type: 'check', prompt: '오늘 해낸 것에 ✓ 하세요.', options: ['낮은 줄을 넘었어요', '쉬는 동안 숨을 골랐어요', '몸의 신호를 말했어요'] },
            { type: 'short', prompt: '쉬지 않고 계속 뛰는 것이 좋지 않은 까닭을 쓰세요.' },
          ],
          easy: {
            note: '몸이 일하면 숨·맥박·열이 달라져요.',
            items: [
              { type: 'choice', prompt: '운동하면 몸은 어떻게 되나요?', options: ['따뜻해져요', '꽁꽁 얼어요'], answer: '따뜻해져요' },
              { type: 'short', prompt: '줄을 넘고 느낀 몸의 신호 하나를 쓰세요.' },
              { type: 'draw', prompt: '힘을 쓰는 내 다리를 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 맞는 곳에 놓으면 바로 표시되고 첫 카드가 놓여 있어요. 타이머는 쉬는 시간이 미리 맞춰져 있어요.',
          base: '모두 놓은 뒤 확인해 스스로 고쳐요.',
          challenge: '타이머는 전체 시간에서 되풀이 횟수를 찾아 맞추고, 쉬는 시간을 직접 재요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 숨이 차면 몸이 아픈 것이라 여긴다 → 일하는 몸이 공기를 더 바라는 신호라는 것을 말해 준다. ② 쉬면 게으른 것이라 여긴다 → 쉬는 동안 맥박이 가라앉는 것을 손으로 확인하게 한다. ③ 줄이 몸에 걸려 넘어진다 → 낮은 고무줄로 시작하고 발목 높이를 넘지 않는다.',
      }),
      // ───────────────────────── 3 ─────────────────────────
      L(3, {
        title: '네 자리를 돌며 체력의 네 모습 나누기',
        objective: '힘·오래 버티기·몸 구부리기·재빠르게 움직이기가 서로 다른 체력의 모습임을 활동과 이어 설명할 수 있다.',
        illustration: art('four small activity stations on a playground: a child jumping far, a child bending forward to reach toes, a child zigzagging between cones, and a child jogging slowly in a loop', [
          { motif: 'sun', x: 410, y: 52, s: 0.7 }, { motif: 'cloud', x: 90, y: 50 }, { motif: 'hills', y: 212 },
          { motif: 'tree', x: 60, y: 212 }, { motif: 'flower', x: 430, y: 224 },
          { motif: 'text', x: 240, y: 124, text: '체력에도 여러 모습이 있어요', size: 22 },
        ]),
        safety: [GROUND, SPACE, STRETCH, SIGNAL],
        stages: stages(
          {
            teacher: '"체력이 좋은 친구는 어떤 친구일까요?" 대답(달리기 빠른 친구, 힘센 친구…)을 칠판에 적는다. "달리기가 느려도 체력이 좋을 수 있을까요?"라고 묻고 짐작을 손가락(네·아니요)으로 표시하게 한다. 오늘은 네 자리를 돌며 체력이 한 가지가 아니라는 것을 몸으로 확인한다고 알려 준다.',
            student: '체력이 좋다는 것은 달리기가 빠르다는 뜻일까요? 네 자리를 돌며 알아봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 체력의 네 모습 나누기', minutes: 14, tool: 'mindmap',
              task: '활동 카드를 힘·오래 버티기·몸 구부리기·재빠름 가지로 나누고, 체력에 대한 생각 가운데 맞는 것만 골라요.',
              teacher: '"공을 멀리 던지는 힘과 오래 달리는 힘은 같은 힘일까요?" 순간에 세게 쓰는 힘과 길게 버티는 힘이 다르다는 것을 짚는다. "체력은 달리기 하나로 정해져요"라고 말하는 학생에게 "앉아서 발끝을 잡는 것은 달리기와 상관없지만 체력이에요. 어떤 체력일까요?"라고 되묻는다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '활동 카드를 알맞은 체력의 모습 가지로 나누어요.', toolOptions: { topic: '체력의 네 모습', slots: [{ id: '힘', label: '힘', sub: '세게 밀고 당기고 뛰어요' }, { id: '버티기', label: '오래 버티기', sub: '쉬지 않고 오래 움직여요' }, { id: '구부리기', label: '몸 구부리기', sub: '몸이 부드럽게 굽어요' }, { id: '재빠름', label: '재빠름', sub: '빠르게 방향을 바꿔요' }], cards: ['제자리에서 멀리 뛰기', '2분 천천히 달리기', '앉아서 발끝 잡기', '콘 사이 지그재그 달리기'] }, target: { sort: { 힘: ['제자리에서 멀리 뛰기'], 버티기: ['2분 천천히 달리기'], 구부리기: ['앉아서 발끝 잡기'], 재빠름: ['콘 사이 지그재그 달리기'] } }, levels: { easy: { state: { at: { '제자리에서 멀리 뛰기': 0 } } } }, difficulty: 0.15 },
                { prompt: '체력이 좋을 때 할 수 있는 일을 알맞은 체력의 모습과 이어요.', toolOptions: { mode: 'match', topic: '체력으로 할 수 있는 일', slots: [{ id: 'lift', label: '무거운 가방을 번쩍 들어요' }, { id: 'walk', label: '소풍길을 지치지 않고 걸어요' }, { id: 'tie', label: '허리를 굽혀 신발 끈을 묶어요' }], cards: ['힘', '오래 버티기', '몸 구부리기'] }, target: { match: { lift: '힘', walk: '오래 버티기', tie: '몸 구부리기' } }, difficulty: 0.2 },
                { prompt: '체력에 대해 맞게 말한 카드만 골라요.', toolOptions: { mode: 'pick', topic: '체력 이야기', cards: ['체력에는 여러 모습이 있어요', '달리기가 빠르면 모든 체력이 좋아요', '자리에서 천천히 몸을 굽히는 것도 체력이에요', '체력은 타고나서 바꿀 수 없어요'] }, target: { pick: ['체력에는 여러 모습이 있어요', '자리에서 천천히 몸을 굽히는 것도 체력이에요'] }, difficulty: 0.25,
                  predict: { q: '달리기가 느리면 체력이 나쁜 것일까요?', options: ['그래요', '그렇지 않아요'], answer: 1 },
                  conclude: '체력에는 힘·오래 버티기·몸 구부리기·재빠름이 있어요. 한 가지가 낮아도 다른 모습은 높을 수 있어요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 네 자리 돌며 몸으로 확인하기', minutes: 12, tool: 'timer',
              task: '네 자리 돌기 전에 안전을 점검하고, 자리 차례와 시간을 맞춘 뒤 실제로 돌아요. 끝나고 해낸 것을 점검해요.',
              teacher: '"신호를 들으면 자리를 옮겨요. 걸어서 옮겨요." 몸 구부리기 자리에서는 아플 때까지 늘리는 학생에게 "숨을 내쉬면서 아프기 전에서 멈춰요"라고 알려 준다. 자리마다 "여기서 내 몸이 어떤 체력을 썼나요?"라고 묻고 모습 이름으로 대답하게 한다.',
              levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
              items: [
                { prompt: '네 자리를 돌기 전에 둘러보고 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['콘 사이에 걸려 넘어질 것이 없어요', '멀리 뛰는 자리에 돌이 없어요', '몸을 굽힐 매트를 깔았어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '네 자리를 돌 때 하는 차례대로 카드를 놓아요.', toolOptions: { cards: ['콘 사이 지그재그 달리기 자리', '앉아서 발끝 잡기 자리', '제자리 멀리 뛰기 자리', '2분 천천히 달리기 자리'] }, target: { order: ['앉아서 발끝 잡기 자리', '제자리 멀리 뛰기 자리', '콘 사이 지그재그 달리기 자리', '2분 천천히 달리기 자리'] }, levels: { easy: { state: { order: ['앉아서 발끝 잡기 자리', '콘 사이 지그재그 달리기 자리', '제자리 멀리 뛰기 자리', '2분 천천히 달리기 자리'] } } }, difficulty: 0.2,
                  hints: ['몸이 아직 굳어 있을 때는 천천히 늘리는 자리부터 해요. 오래 달리는 자리는 숨이 가쁜 자리 뒤로 두세요.', '빠르게 방향을 바꾸는 자리는 몸이 데워진 뒤에 놓는 것이 안전해요.'] },
                { prompt: '한 자리를 1분씩 하고 옮길 때 20초 쉬기를 4번 하도록 타이머를 맞추어요.', toolOptions: { plan: { work: 30, rest: 10, rounds: 2 }, workStep: 10, restStep: 5 }, target: { plan: { work: 60, rest: 20, rounds: 4 } }, difficulty: 0.2 },
                { prompt: '네 자리를 돌고 해낸 것을 점검 목록에 표시해요.', target: { selfCheck: ['네 자리를 모두 해 보았어요', '자리마다 쓴 체력 이름을 말했어요', '신호를 들으면 자리를 옮겼어요'] }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"오늘 가장 잘되었던 자리는 어디였나요? 그 자리는 체력의 어떤 모습이었나요?" 두세 명이 말하게 한다. 정리 운동으로 천천히 걸으며 숨을 고르고 물을 마시게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '체력의 모습', slots: [{ id: 'a', label: '줄다리기에서 힘껏 당겨요' }, { id: 'b', label: '30분 동안 산길을 걸어요' }], cards: ['힘', '오래 버티기'] }, prompt: '두 활동에 쓰이는 체력의 모습을 이어요.', target: { match: { a: '힘', b: '오래 버티기' } }, difficulty: 0.15 },
              { type: 'choice', prompt: '체력이 좋다는 말에 대해 맞는 것은 무엇인가요?', options: ['힘·버티기·구부리기·재빠름처럼 여러 모습이 있어요', '달리기만 빠르면 체력이 좋은 거예요', '체력은 한 가지뿐이에요'], answer: 0, difficulty: 0.2, explain: '체력에는 여러 모습이 있고 사람마다 잘하는 모습이 달라요.' },
              { type: 'mood', prompt: '네 자리를 돌아 본 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '체력의 네 모습',
          items: [
            { type: 'table', prompt: '자리마다 한 활동과 쓰인 체력의 모습을 쓰세요.', columns: ['자리', '쓰인 체력의 모습'], cells: [['제자리 멀리 뛰기', ''], ['앉아서 발끝 잡기', ''], ['지그재그 달리기', ''], ['2분 천천히 달리기', '']] },
            { type: 'choice', prompt: '"오래 버티기"에 알맞은 활동에 ○ 하세요.', options: ['2분 천천히 달리기', '앉아서 발끝 잡기', '콘 사이 지그재그'], answer: '2분 천천히 달리기' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '체력에는 힘, 오래 ___, 몸 ___, 재빠름 같은 여러 모습이 있어요.', answer: '버티기, 구부리기' },
            { type: 'check', prompt: '오늘 해낸 것에 ✓ 하세요.', options: ['네 자리를 모두 돌았어요', '아프기 전에 몸 늘리기를 멈췄어요', '체력의 모습 이름을 말했어요'] },
            { type: 'short', prompt: '내가 가장 잘한다고 느낀 체력의 모습과 그 까닭을 쓰세요.' },
          ],
          easy: {
            note: '힘 · 오래 버티기 · 몸 구부리기 · 재빠름',
            items: [
              { type: 'choice', prompt: '발끝을 잡는 것은 어떤 체력인가요?', options: ['몸 구부리기', '재빠름'], answer: '몸 구부리기' },
              { type: 'short', prompt: '가장 재미있었던 자리를 쓰세요.' },
              { type: 'draw', prompt: '내가 해 본 자리 한 곳을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 맞는 가지에 놓으면 바로 표시되고, 첫 카드가 놓여 있어요. 자리 차례는 첫 두 자리가 바르게 놓여 있어요.',
          base: '모두 놓은 뒤 확인해 스스로 고쳐요.',
          challenge: '네 자리 시간을 직접 재고, 체력 이야기 가운데 틀린 말을 스스로 가려내요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 체력은 달리기 속도라고 여긴다 → 몸 구부리기 자리를 해 보며 달리기와 다른 체력을 느끼게 한다. ② 몸 구부리기에서 반동을 준다 → 숨을 내쉬며 천천히 늘이게 한다. ③ 자리를 옮길 때 뛰어서 부딪힌다 → 걸어서 옮기는 약속을 다시 말한다.',
      }),
      // ───────────────────────── 4 ─────────────────────────
      L(4, {
        title: '제자리 뛰기 20번과 팔 굽혀 버티기 해 보기',
        objective: '제자리 뛰기 20번과 무릎 대고 팔 굽혀 버티기를 정한 만큼 해 보고 숨찬 정도와 팔의 느낌을 적을 수 있다.',
        illustration: art('children doing jumping in place on the left and holding a knee push-up position on a mat on the right, with a gentle 1 to 5 breath scale drawn on a signboard', [
          { motif: 'sun', x: 62, y: 52, s: 0.7 }, { motif: 'cloud', x: 390, y: 48 }, { motif: 'hills', y: 212 },
          { motif: 'star', x: 230, y: 90, s: 0.8 }, { motif: 'flower', x: 430, y: 224 },
          { motif: 'text', x: 240, y: 140, text: '해 보고 내 몸의 느낌을 적어요', size: 22 },
        ]),
        safety: [GROUND, JUMP, PUSHUP, STOP],
        stages: stages(
          {
            teacher: '"제자리에서 뛰기 20번, 팔로 몸을 버티기 10초를 하면 몸이 어떻게 될까요?" 학생이 숨참·팔 떨림 같은 예상을 말하게 한다. "이번에는 달리 재지 않고 숨이 찬 정도를 1부터 5까지 숫자로 표시할 거예요. 1은 거의 안 참, 5는 아주 많이 참이에요"라고 눈금 사용법을 알려 준다.',
            student: '제자리 뛰기 20번과 팔 굽혀 버티기를 하면 몸의 어디가 어떻게 느낄까요? 해 보고 숫자로 적어 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 정한 만큼 운동하고 기록하기', minutes: 14, tool: 'timer',
              task: '안전을 점검하고, 운동하는 차례를 맞춘 뒤 실제로 해요. 제자리 뛰기 20번과 팔 굽혀 버티기 10초를 하고 버틴 시간과 횟수를 적어요.',
              teacher: '"팔 굽혀 버티기는 무릎을 바닥에 대고 몸이 일직선이 되게 해요. 팔이 떨리면 바로 내려와도 돼요." 허리를 꺾어 엉덩이를 높이 올린 학생에게 "머리부터 무릎까지 한 줄이 되게 해 보세요"라고 말한다. 횟수는 소리 내어 같이 세지 않고 각자 세게 한다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '운동을 하기 전에 둘러보고 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['뛰는 자리에 미끄러운 것이 없어요', '팔 굽힐 자리에 매트를 깔았어요', '친구와 두 팔 거리만큼 떨어졌어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '운동 활동 카드를 하는 차례대로 놓아요.', toolOptions: { cards: ['팔 굽혀 버티기 10초를 해요', '숨찬 정도와 팔의 느낌을 적어요', '제자리 뛰기 20번을 해요', '앉아서 숨을 골라요'] }, target: { order: ['제자리 뛰기 20번을 해요', '앉아서 숨을 골라요', '팔 굽혀 버티기 10초를 해요', '숨찬 정도와 팔의 느낌을 적어요'] }, levels: { easy: { state: { order: ['제자리 뛰기 20번을 해요', '팔 굽혀 버티기 10초를 해요', '앉아서 숨을 골라요', '숨찬 정도와 팔의 느낌을 적어요'] } } }, difficulty: 0.2,
                  hints: ['숨이 가쁜 채로 바로 팔로 버티지 않고, 사이에 숨을 가라앉히는 일이 들어가요.', '적는 일은 두 가지 운동을 모두 한 뒤에 해요.'] },
                { prompt: '실제로 한 제자리 뛰기 횟수와 팔 굽혀 버틴 시간을 적어요.', toolOptions: { fields: [{ label: '제자리 뛰기', unit: '번', max: 40 }, { label: '팔 굽혀 버티기', unit: '초', max: 30 }] }, target: { records: true }, levels: { challenge: { toolOptions: { fields: [{ label: '제자리 뛰기', unit: '번', max: 40 }, { label: '팔 굽혀 버티기', unit: '초', max: 30 }, { label: '두 운동 합친 시간', unit: '초', max: 60 }] } } }, difficulty: 0.15 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 내 몸의 느낌을 숫자와 말로 남기기', minutes: 12, tool: 'emotion',
              task: '운동한 몸의 느낌을 눈금에서 골라요. 정답은 없어요. 내 몸 그대로 골라요. 마지막에는 몸의 느낌을 짝에게 한 문장으로 말해요.',
              teacher: '"친구와 같은 숫자를 고를 필요가 없어요. 내 몸이 말한 대로 골라요." 숨참을 5로 고르고도 "괜찮아요"라고 하는 학생에게 "다리가 떨리거나 어지럽지는 않았나요?"라고 확인한다. 팔이 아프다는 학생은 아픈 것과 힘든 것을 구분해 말하게 한다.',
              levels: { easy: { steps: 3 }, base: {}, challenge: { steps: 7 } },
              items: [
                { prompt: '제자리 뛰기 20번을 한 뒤 숨이 찬 정도를 골라요.', toolOptions: sc('제자리에서 20번 뛰고 앉아 숨을 쉬었어요.', '걱정', '내 숨이 찬 정도를 골라요.'), target: { level: 'any' }, difficulty: 0.05 },
                { prompt: '팔 굽혀 버티기를 한 뒤 팔이 힘든 정도를 골라요.', toolOptions: sc('무릎을 대고 10초 동안 팔로 몸을 버텼어요.', '걱정', '내 팔이 힘든 정도를 골라요.'), target: { level: 'any' }, difficulty: 0.05 },
                { prompt: '두 운동을 모두 끝낸 뒤 내 몸이 얼마나 가벼운지 골라요.', toolOptions: sc('두 운동을 마치고 천천히 걸으며 숨을 고르고 있어요.', '편안함', '내 몸이 가벼운 정도를 골라요.'), target: { level: 'any' }, difficulty: 0.05 },
                { prompt: '오늘 느낀 몸의 느낌 하나를 "○○할 때 ○○했어요" 틀로 짝에게 말해요.', free: true, talk: true, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"오늘 숨이 찬 정도와 팔의 느낌 가운데 어느 쪽이 더 컸나요?" 두세 명이 말하게 하고 서로 다를 수 있음을 인정한다. 정리 운동으로 팔을 흔들며 천천히 걷고 물을 마시게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'timer', options: { cards: ['맥박을 재요', '줄넘기를 열 번 해요', '숨을 고르며 앉아요'] }, prompt: '줄넘기 활동을 하는 차례대로 카드를 놓아요.', target: { order: ['줄넘기를 열 번 해요', '숨을 고르며 앉아요', '맥박을 재요'] }, difficulty: 0.15 },
              { type: 'choice', prompt: '팔이 떨리고 힘들어서 버티기가 어려울 때 알맞은 행동은?', options: ['몸을 내려 쉬고 선생님께 말해요', '더 세게 참아요', '친구를 따라 끝까지 해요'], answer: 0, difficulty: 0.15, explain: '힘들거나 아프면 멈추고 말해요. 무리하지 않는 것도 운동이에요.' },
              { type: 'mood', prompt: '정한 만큼 해 본 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '내 몸의 느낌 기록',
          items: [
            { type: 'table', prompt: '두 운동을 하고 느낌을 1~5로 쓰세요.', columns: ['운동', '한 횟수·시간', '힘든 정도(1~5)'], cells: [['제자리 뛰기', '', ''], ['팔 굽혀 버티기', '', '']] },
            { type: 'choice', prompt: '팔 굽혀 버티기에서 알맞은 몸 모양에 ○ 하세요.', options: ['머리부터 무릎까지 한 줄', '엉덩이를 높이 들어요', '허리를 아래로 꺼뜨려요'], answer: '머리부터 무릎까지 한 줄' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '힘들거나 ___ 곳이 생기면 운동을 ___ 선생님께 말해요.', answer: '아픈, 멈추고' },
            { type: 'check', prompt: '오늘 해낸 것에 ✓ 하세요.', options: ['제자리 뛰기를 했어요', '팔 굽혀 버티기를 했어요', '몸의 느낌을 숫자로 골랐어요'] },
            { type: 'short', prompt: '오늘 운동에서 가장 힘들었던 부분과 그때의 느낌을 쓰세요.' },
          ],
          easy: {
            note: '1은 조금, 5는 아주 많이예요. 내 몸 그대로 골라요.',
            items: [
              { type: 'choice', prompt: '힘들면 어떻게 하나요?', options: ['쉬고 선생님께 말해요', '꾹 참아요'], answer: '쉬고 선생님께 말해요' },
              { type: 'short', prompt: '숨이 찬 정도를 1~5로 쓰세요.' },
              { type: 'draw', prompt: '운동하는 내 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 놓으면 바로 표시되고 눈금은 세 칸이에요. 기록판은 두 칸만 적어요.',
          base: '차례와 기록을 스스로 정리하고 다섯 칸 눈금으로 느낌을 골라요.',
          challenge: '눈금이 일곱 칸이고, 두 운동 시간을 합친 칸을 더 적어요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 숨찬 정도를 친구와 같게 고른다 → 정답이 없다는 것을 다시 말한다. ② 아픈 것을 참고 끝까지 한다 → 아프면 내려와도 된다는 약속을 반복한다. ③ 팔 굽혀 버티기 자세가 무너진다 → 머리부터 무릎까지 한 줄이 되게 짝이 옆에서 봐 준다. 몸으로 하는 활동은 교구가 판정하지 않으므로 교사가 관찰한다.',
      }),
      // ───────────────────────── 5 ─────────────────────────
      L(5, {
        title: '같은 제자리 뛰기를 두 번 해 달라진 점 찾기',
        objective: '같은 운동을 쉬는 시간을 두고 두 번 해 보고, 두 번째에 달라진 점을 기록에서 찾아 말할 수 있다.',
        illustration: art('a child doing the same jumping in place twice with two matching sweat drop marks and a stopwatch between the two rounds', [
          { motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'cloud', x: 100, y: 48 }, { motif: 'hills', y: 212 },
          { motif: 'tree', x: 70, y: 212 }, { motif: 'star', x: 330, y: 150, s: 0.9 },
          { motif: 'text', x: 240, y: 118, text: '두 번 해 보면 보여요', size: 24 },
        ]),
        safety: [GROUND, JUMP, WATER, STOP],
        stages: stages(
          {
            teacher: '"같은 운동을 두 번 하면 두 번 다 똑같이 느껴질까요?" 짐작을 손으로 표시하게 한다. "첫 번째는 낯설어서 더 힘들 수도 있고, 두 번째는 몸이 데워져서 가벼울 수도 있어요. 오늘은 그 차이를 숨 가라앉는 시간으로 재어 봐요"라고 알려 준다.',
            student: '같은 제자리 뛰기를 두 번 하면 두 번째는 어떻게 다를까요? 쉬는 시간을 같게 하고 견주어 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 제자리 뛰기 두 번 하고 숨 가라앉는 시간 재기', minutes: 14, tool: 'timer',
              task: '뛰기와 쉬기 시간을 똑같이 맞춰 두 번 해요. 뛴 뒤 숨이 가라앉는 데 걸린 시간을 재어 두 번 적어요.',
              teacher: '"두 번째에 일부러 더 세게 뛰면 견줄 수 없어요. 같은 속도로 뛰세요." 첫 번째와 두 번째에 쉬는 시간이 다르면 안 된다는 것을 짚는다. 숨이 가라앉은 때는 "숨소리가 처음 앉았을 때처럼 조용해졌다"로 정하고 손을 들게 한다.',
              levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
              items: [
                { prompt: '쉬는 시간을 똑같이 하고 20초 뛰고 40초 쉬기를 2번 하도록 타이머를 맞추어요.', toolOptions: { plan: { work: 30, rest: 10, rounds: 3 }, workStep: 5, restStep: 10 }, target: { plan: { work: 20, rest: 40, rounds: 2 } }, levels: { challenge: { prompt: '20초 뛰고 40초 쉬기를 되풀이해 전체 80초가 되도록 맞추어요(마지막에는 쉬지 않아요).', target: { total: 80, plan: { work: 20, rest: 40 } } } }, difficulty: 0.2 },
                { prompt: '두 번 뛰기 활동의 차례대로 카드를 놓아요.', toolOptions: { cards: ['두 번째 숨이 가라앉은 시간을 적어요', '두 번째 뛰기를 해요', '첫 번째 뛰기를 해요', '첫 번째 숨이 가라앉은 시간을 적어요', '앉아서 숨을 골라요'] }, target: { order: ['첫 번째 뛰기를 해요', '앉아서 숨을 골라요', '첫 번째 숨이 가라앉은 시간을 적어요', '두 번째 뛰기를 해요', '두 번째 숨이 가라앉은 시간을 적어요'] }, difficulty: 0.25 },
                { prompt: '두 번의 뛰기 뒤 숨이 가라앉은 시간을 적어요.', toolOptions: { fields: [{ label: '첫 번째 뒤', unit: '초', max: 90 }, { label: '두 번째 뒤', unit: '초', max: 90 }] }, target: { records: true }, difficulty: 0.15 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 첫 번째와 두 번째 견주기', minutes: 12, tool: 'mindmap',
              task: '두 번 해 보고 달라진 점을 카드로 나누고, 공정하게 견주는 조건을 골라요. 달라진 까닭도 이어요.',
              teacher: '"두 번째가 더 쉬웠다면 왜 그랬을까요?" 몸이 데워졌고 동작에 익숙해졌다는 까닭을 찾게 한다. "두 번째가 더 힘들었다면 이상한 걸까요?" 쉬는 시간이 부족했거나 피곤해진 때문일 수 있다고 짚어, 결과가 어느 쪽이든 까닭을 찾아 말하게 한다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '두 번을 공정하게 견주려면 같게 해야 하는 것만 골라요.', toolOptions: { mode: 'pick', topic: '공정하게 견주기', cards: ['뛰는 시간', '쉬는 시간', '뛰는 속도', '입은 옷의 색', '친구의 점수'] }, target: { pick: ['뛰는 시간', '쉬는 시간', '뛰는 속도'] }, difficulty: 0.15 },
                { prompt: '달라진 점 카드를 첫 번째와 두 번째 모습으로 나누어요.', toolOptions: { topic: '달라진 점', slots: [{ id: 'first', label: '첫 번째', sub: '낯설고 몸이 덜 데워졌어요' }, { id: 'second', label: '두 번째', sub: '몸이 데워지고 익숙해졌어요' }], cards: ['동작이 어색했어요', '숨이 빨리 가라앉았어요', '다리가 낯설게 무거웠어요', '리듬이 자연스러웠어요'] }, target: { sort: { first: ['동작이 어색했어요', '다리가 낯설게 무거웠어요'], second: ['숨이 빨리 가라앉았어요', '리듬이 자연스러웠어요'] } }, levels: { easy: { state: { at: { '동작이 어색했어요': 0 } } } }, difficulty: 0.2 },
                { prompt: '두 번째에 달라진 결과와 그럴듯한 까닭을 하나씩 이어요.', toolOptions: { mode: 'match', topic: '달라진 까닭', slots: [{ id: 'easier', label: '두 번째가 더 가벼웠어요' }, { id: 'harder', label: '두 번째가 더 힘들었어요' }], cards: ['몸이 데워지고 동작에 익숙해졌어요', '쉬는 시간이 짧아 숨이 덜 가라앉았어요'] }, target: { match: { easier: '몸이 데워지고 동작에 익숙해졌어요', harder: '쉬는 시간이 짧아 숨이 덜 가라앉았어요' } }, difficulty: 0.25,
                  predict: { q: '같은 운동인데 두 번째 결과가 다를 수 있을까요?', options: ['다를 수 있어요', '항상 같아요'], answer: 0 },
                  conclude: '같은 운동도 몸 상태와 쉬는 시간에 따라 결과가 달라요. 달라진 까닭을 찾는 것이 몸을 이해하는 길이에요.' },
              ],
            },
          ],
          {
            teacher: '"두 번째에 달라진 점을 숫자를 넣어서 말해 볼까요?" "첫 번째는 ○○초, 두 번째는 ○○초였어요" 틀로 두세 명이 말하게 한다. 정리 운동으로 천천히 걸으며 숨을 고르고 물을 마시게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'timer', options: { fields: [{ label: '1회 숨 고르기', unit: '초', max: 90 }, { label: '2회 숨 고르기', unit: '초', max: 90 }] }, prompt: '1회는 45초, 2회는 38초였어요. 두 칸에 옮겨 적어요.', target: { records: [45, 38] }, difficulty: 0.1 },
              { type: 'choice', prompt: '두 번을 공정하게 견주려면 무엇을 같게 해야 할까요?', options: ['뛰는 시간·쉬는 시간·속도', '입은 옷', '앉은 자리'], answer: 0, difficulty: 0.15, explain: '견주려는 것 말고 나머지 조건을 같게 해야 달라진 까닭을 알 수 있어요.' },
              { type: 'mood', prompt: '같은 운동을 두 번 해 본 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '두 번 해 보고 견주기',
          items: [
            { type: 'table', prompt: '두 번의 뛰기 뒤 숨 고르기 시간과 달라진 점을 쓰세요.', columns: ['횟수', '숨이 가라앉은 시간(초)', '달라진 점'], cells: [['첫 번째', '', ''], ['두 번째', '', '']] },
            { type: 'choice', prompt: '두 번을 견줄 때 같게 해야 하는 것에 ○ 하세요.', options: ['쉬는 시간', '친구의 옷', '구름의 모양'], answer: '쉬는 시간' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '두 번째에 몸이 데워지고 동작에 ___해져서 더 ___ 느껴질 수 있어요.', answer: '익숙, 가볍게' },
            { type: 'check', prompt: '오늘 지킨 약속에 ✓ 하세요.', options: ['같은 속도로 뛰었어요', '쉬는 시간을 지켰어요', '아프면 멈추기로 했어요'] },
            { type: 'short', prompt: '두 번째가 더 힘들었다면 어떤 까닭이 있을 수 있는지 쓰세요.' },
          ],
          easy: {
            note: '견줄 때는 뛰는 시간과 쉬는 시간을 똑같이 해요.',
            items: [
              { type: 'choice', prompt: '두 번의 쉬는 시간은 어떻게 하나요?', options: ['똑같이', '다르게'], answer: '똑같이' },
              { type: 'short', prompt: '두 번째에 달라진 점 하나를 쓰세요.' },
              { type: 'draw', prompt: '두 번째 뛰기를 하는 내 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 맞는 곳에 놓으면 바로 표시되고 첫 카드가 놓여 있어요. 기록은 두 칸만 적어요.',
          base: '모두 놓은 뒤 확인해 스스로 고쳐요.',
          challenge: '타이머는 전체 시간에서 되풀이 횟수를 거꾸로 찾아 맞추고, 숨 고르는 시간을 직접 재요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 두 번째에 일부러 더 세게 뛴다 → 같은 속도로 뛰는 약속을 먼저 정한다. ② 숨이 가라앉은 때를 서로 다르게 정한다 → "숨소리가 처음처럼 조용해졌을 때"로 모두 같게 한다. ③ 두 번째가 더 힘들면 자기가 약해졌다고 여긴다 → 쉬는 시간과 몸 상태를 까닭으로 찾게 한다.',
      }),
      // ───────────────────────── 6 ─────────────────────────
      L(6, {
        title: '하루 결과만 믿어도 될까? 사흘 기록 계획 세우기',
        objective: '한 번 해 본 결과만으로 체력을 단정할 수 없음을 알고, 사흘 동안 같은 조건으로 기록하는 계획을 세울 수 있다.',
        illustration: art('a small three-day calendar with a child marking breath scale numbers each day beside a jump rope and a water bottle', [
          { motif: 'sun', x: 62, y: 52, s: 0.7 }, { motif: 'cloud', x: 390, y: 48 }, { motif: 'hills', y: 212 },
          { motif: 'house', x: 410, y: 214, s: 0.8 }, { motif: 'flower', x: 90, y: 224 },
          { motif: 'text', x: 240, y: 126, text: '사흘은 해 봐야 알아요', size: 24 },
        ]),
        safety: [GROUND, SHOE, WATER, STOP],
        stages: stages(
          {
            teacher: '"어제 제자리 뛰기에서 아주 힘들었던 민지는 오늘도 똑같이 힘들까요?" 학생들이 짐작을 말하게 한 뒤, "잠을 못 잔 날, 밥을 안 먹은 날, 날이 더운 날은 몸이 다르게 느껴져요. 그러니 하루만으로 체력을 정하기는 어려워요"라고 알려 준다. 오늘은 믿을 만한 기록 방법을 같이 만든다고 말한다.',
            student: '하루 기록만 보고 내 체력이 낮다고 말해도 될까요? 믿을 만한 기록 방법을 찾아봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 결과가 달라지는 까닭과 믿을 만한 기록법', minutes: 14, tool: 'mindmap',
              task: '날마다 기록이 달라지는 까닭을 나누고, 믿을 만한 기록 방법만 골라요. 한 번 해 본 결과로 단정한 친구에게 할 말도 이어요.',
              teacher: '"준호가 오늘 기록이 낮다고 체력이 나쁜 사람이 되는 건가요?" 하루의 컨디션을 먼저 따져 보게 한다. "기록은 여러 날 같은 조건으로 모아야 믿을 수 있어요"라고 정리하고, 같은 시각·같은 운동·같은 쉬는 시간이라는 세 가지를 칠판에 적는다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '기록이 날마다 달라지는 까닭을 몸 상태와 운동 방법으로 나누어요.', toolOptions: { topic: '달라지는 까닭', slots: [{ id: 'body', label: '그날 몸 상태' }, { id: 'how', label: '운동하는 방법' }], cards: ['잠을 잘 못 잤어요', '밥을 먹지 않고 나왔어요', '어제보다 빠르게 뛰었어요', '쉬는 시간을 짧게 했어요'] }, target: { sort: { body: ['잠을 잘 못 잤어요', '밥을 먹지 않고 나왔어요'], how: ['어제보다 빠르게 뛰었어요', '쉬는 시간을 짧게 했어요'] } }, levels: { easy: { state: { at: { '잠을 잘 못 잤어요': 0 } } } }, difficulty: 0.15 },
                { prompt: '믿을 만한 체력 기록 방법만 골라요.', toolOptions: { mode: 'pick', topic: '믿을 만한 기록', cards: ['여러 날 같은 시각에 같은 운동을 해요', '가장 잘 나온 하루만 적어요', '쉬는 시간을 날마다 똑같이 해요', '친구의 기록을 베껴요'] }, target: { pick: ['여러 날 같은 시각에 같은 운동을 해요', '쉬는 시간을 날마다 똑같이 해요'] }, difficulty: 0.2,
                  predict: { q: '하루만 해 본 결과로 내 체력을 알 수 있을까요?', options: ['알 수 있어요', '알기 어려워요'], answer: 1 },
                  conclude: '체력은 하루 결과가 아니라 여러 날 같은 조건으로 모은 기록에서 살펴요.' },
                { prompt: '하루 결과만 보고 단정하는 말에 알맞은 대답을 이어요.', toolOptions: { mode: 'match', topic: '친구에게 할 말', slots: [{ id: 'bad', label: '"오늘 낮게 나왔으니 난 체력이 나빠."' }, { id: 'best', label: '"어제 가장 높게 나왔으니 난 항상 최고야."' }], cards: ['오늘 몸 상태가 달랐을 수도 있으니 며칠 더 해 보자', '어제는 컨디션이 좋았을 수 있으니 여러 날 견줘 보자'] }, target: { match: { bad: '오늘 몸 상태가 달랐을 수도 있으니 며칠 더 해 보자', best: '어제는 컨디션이 좋았을 수 있으니 여러 날 견줘 보자' } }, difficulty: 0.25 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 사흘 기록 계획표 만들기', minutes: 12, tool: 'timer',
              task: '사흘 동안 할 운동 순서와 시간을 맞추고, 가상의 사흘 기록 숫자를 옮겨 적어요. 내 계획을 스스로 점검해요.',
              teacher: '"날마다 같은 시각에 같은 운동을 한다고 정했으면 중간에 바꾸면 안 돼요." 계획을 쓰기만 하고 실제로 할 시간을 못 정한 학생에게 "쉬는 시간 언제 할 수 있어요?"라고 묻는다. 기록은 숫자를 옮겨 적는 연습이므로 틀리지 않게 하나씩 읽게 한다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '날마다 하는 운동 순서 카드를 놓아요.', toolOptions: { cards: ['숨찬 정도를 1~5로 적어요', '같은 제자리 뛰기 20번을 해요', '앉아서 숨을 골라요', '준비 운동으로 몸을 풀어요'] }, target: { order: ['준비 운동으로 몸을 풀어요', '같은 제자리 뛰기 20번을 해요', '앉아서 숨을 골라요', '숨찬 정도를 1~5로 적어요'] }, levels: { easy: { state: { order: ['준비 운동으로 몸을 풀어요', '같은 제자리 뛰기 20번을 해요', '숨찬 정도를 1~5로 적어요', '앉아서 숨을 골라요'] } } }, difficulty: 0.15 },
                { prompt: '민지의 사흘 기록이에요. 월 3점, 화 5점, 수 4점을 그대로 옮겨 적어요.', toolOptions: { fields: [{ label: '월요일', unit: '점', max: 5 }, { label: '화요일', unit: '점', max: 5 }, { label: '수요일', unit: '점', max: 5 }] }, target: { records: [3, 5, 4] }, difficulty: 0.1 },
                { prompt: '날마다 20초 뛰고 40초 쉬기를 3번 하도록 타이머를 맞추어요.', toolOptions: { plan: { work: 30, rest: 20, rounds: 2 }, workStep: 5, restStep: 10 }, target: { plan: { work: 20, rest: 40, rounds: 3 } }, difficulty: 0.2 },
                { prompt: '사흘 기록 계획을 점검 목록에 표시해요.', target: { selfCheck: ['날마다 같은 시각으로 정했어요', '같은 운동과 쉬는 시간으로 정했어요', '몸 상태를 함께 적기로 했어요'] }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"기록이 낮은 날 어떻게 생각하면 좋을까요?" 몸 상태를 먼저 돌아보고 며칠 더 모아 보겠다는 대답을 끌어낸다. 정리 운동으로 천천히 걸으며 숨을 고르게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '기록 방법', cards: ['며칠 동안 같은 조건으로 적어요', '기분 좋은 날만 적어요', '그날 몸 상태도 같이 적어요'] }, prompt: '믿을 만한 기록 방법만 골라요.', target: { pick: ['며칠 동안 같은 조건으로 적어요', '그날 몸 상태도 같이 적어요'] }, difficulty: 0.15 },
              { type: 'choice', prompt: '하루 기록만 보고 체력이 낮다고 정하지 않는 까닭은?', options: ['그날 몸 상태에 따라 결과가 달라질 수 있어서', '체력은 아예 알 수 없어서', '기록은 쓸모없어서'], answer: 0, difficulty: 0.2, explain: '하루 기록은 그날 몸 상태에 흔들릴 수 있어서 여러 날 모아 봐야 해요.' },
              { type: 'mood', prompt: '기록 계획을 세운 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '사흘 기록 계획표',
          items: [
            { type: 'table', prompt: '사흘 동안 같은 운동의 숨찬 정도(1~5)와 그날 몸 상태를 쓰세요.', columns: ['날', '숨찬 정도(1~5)', '그날 몸 상태'], cells: [['첫째 날', '', ''], ['둘째 날', '', ''], ['셋째 날', '', '']] },
            { type: 'choice', prompt: '기록을 믿을 만하게 만드는 것에 ○ 하세요.', options: ['같은 시각·같은 운동·같은 쉬는 시간', '기분 좋은 날만 적기', '아무 때나 적기'], answer: '같은 시각·같은 운동·같은 쉬는 시간' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '체력은 하루 결과가 아니라 ___ 날 같은 조건으로 모은 기록에서 살펴요.', answer: '여러' },
            { type: 'check', prompt: '내 계획에 ✓ 하세요.', options: ['날마다 같은 시각이에요', '같은 운동이에요', '몸 상태도 적어요'] },
            { type: 'short', prompt: '기록이 낮게 나온 날 내가 해 볼 생각을 쓰세요.' },
          ],
          easy: {
            note: '여러 날, 같은 조건으로 적어요.',
            items: [
              { type: 'choice', prompt: '기록은 어떻게 모으나요?', options: ['여러 날 같은 조건으로', '하루만'], answer: '여러 날 같은 조건으로' },
              { type: 'short', prompt: '내가 기록할 운동을 쓰세요.' },
              { type: 'draw', prompt: '기록표에 숫자를 쓰는 내 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 맞는 곳에 놓으면 바로 표시되고 첫 카드가 놓여 있어요.',
          base: '모두 놓은 뒤 확인해 스스로 고쳐요.',
          challenge: '친구의 단정하는 말에 알맞은 대답을 직접 이어 고르는 문항이 더해져요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 기록이 낮으면 자기 체력이 나쁘다고 단정한다 → 그날 잠·밥·날씨를 먼저 돌아보게 한다. ② 잘 나온 하루만 자랑한다 → 여러 날 모은 기록이 믿을 만하다고 짚는다. ③ 계획만 쓰고 시간을 못 정한다 → 쉬는 시간 중 언제 할지 한 칸만 정하게 한다.',
      }),
      // ───────────────────────── 7 ─────────────────────────
      L(7, {
        title: '일주일 운동 기록표에서 가장 힘들었던 날 찾기',
        objective: '일주일 운동 기록표를 읽고 가장 힘들었던 날을 찾아 그 까닭을 기록에서 근거를 들어 말할 수 있다.',
        illustration: art('a week table with seven small boxes for days and little face icons, with a child pointing at the hardest day beside a magnifier', [
          { motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'cloud', x: 100, y: 50 }, { motif: 'hills', y: 212 },
          { motif: 'house', x: 70, y: 214, s: 0.8 }, { motif: 'flower', x: 430, y: 224 },
          { motif: 'text', x: 240, y: 126, text: '기록표가 이야기해 줘요', size: 24 },
        ]),
        safety: [GROUND, WATER, SIGNAL, STOP],
        stages: stages(
          {
            teacher: '"일주일 동안 운동하고 나서 힘든 정도를 적은 표가 있어요. 이 표에서 가장 힘들었던 날은 언제일까요?" 칠판에 민지의 가상 기록(월 2, 화 3, 수 5, 목 3, 금 4)을 보이고 손가락으로 짚게 한다. "숫자만 보면 알 수 있을까요, 까닭도 알 수 있을까요?"라고 묻고 오늘은 기록과 까닭을 함께 읽는다고 알려 준다.',
            student: '일주일 기록표에서 가장 힘들었던 날은 언제일까요? 숫자와 까닭을 같이 읽어요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 기록표 읽고 숫자 옮겨 적기', minutes: 12, tool: 'timer',
              task: '민지의 기록표 숫자를 옮겨 적고, 읽는 차례를 맞춘 뒤, 내 기록을 어떻게 읽을지 스스로 점검해요. 몸을 움직이는 활동은 가볍게 걷기만 해요.',
              teacher: '"가장 큰 숫자가 가장 힘들었던 날이에요." 숫자 크기와 힘든 정도가 반대로 읽히지 않는지 확인한다. 기록표를 읽는 학생에게 "수요일 옆에 5라고 적혀 있지요? 5가 무슨 뜻인지 말해 보세요"라고 되묻는다. 몸 움직임은 걷기 정도로 한정한다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '기록표를 읽는 차례대로 카드를 놓아요.', toolOptions: { cards: ['가장 큰 숫자인 날을 찾아요', '날마다 숫자를 읽어요', '그날 적어 둔 몸 상태를 읽어요', '까닭을 한 문장으로 말해요'] }, target: { order: ['날마다 숫자를 읽어요', '가장 큰 숫자인 날을 찾아요', '그날 적어 둔 몸 상태를 읽어요', '까닭을 한 문장으로 말해요'] }, levels: { easy: { state: { order: ['날마다 숫자를 읽어요', '그날 적어 둔 몸 상태를 읽어요', '가장 큰 숫자인 날을 찾아요', '까닭을 한 문장으로 말해요'] } } }, difficulty: 0.15 },
                { prompt: '민지의 기록표예요. 월 2점, 화 3점, 수 5점, 목 3점, 금 4점을 옮겨 적어요.', toolOptions: { fields: [{ label: '월', unit: '점', max: 5 }, { label: '화', unit: '점', max: 5 }, { label: '수', unit: '점', max: 5 }, { label: '목', unit: '점', max: 5 }, { label: '금', unit: '점', max: 5 }] }, target: { records: [2, 3, 5, 3, 4] }, difficulty: 0.1 },
                { prompt: '준호의 기록표예요. 월 4점, 화 1점, 수 2점으로 옮겨 적어요.', toolOptions: { fields: [{ label: '월', unit: '점', max: 5 }, { label: '화', unit: '점', max: 5 }, { label: '수', unit: '점', max: 5 }] }, target: { records: [4, 1, 2] }, difficulty: 0.1 },
                { prompt: '기록표를 읽고 해낸 것을 점검 목록에 표시해요.', target: { selfCheck: ['숫자와 요일을 짝지어 읽었어요', '가장 큰 숫자가 가장 힘든 날임을 알았어요', '그날의 몸 상태를 같이 읽었어요'] }, difficulty: 0.1 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 힘들었던 날의 까닭을 근거로 말하기', minutes: 14, tool: 'mindmap',
              task: '힘들었던 날의 까닭 카드를 기록과 이어 보고, 까닭으로 알맞은 것만 골라요. 기록만 적는 친구에게 할 말도 이어요.',
              teacher: '"수요일에 5가 나온 까닭이 숫자에 쓰여 있나요?" 숫자는 결과이고 까닭은 옆의 메모(잠을 늦게 잠·점심을 거름)에 있다는 것을 짚는다. "그냥 힘들어서요"라고 말하는 학생에게 "기록표의 어느 줄을 보고 그렇게 생각했나요?"라고 되묻는다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '민지의 기록 메모와 그날의 모습을 하나씩 이어요.', toolOptions: { mode: 'match', topic: '민지의 일주일', slots: [{ id: 'wed', label: '수요일 5점 — 메모: 점심을 거르고 운동' }, { id: 'tue', label: '화요일 3점 — 메모: 평소처럼 먹고 잤어요' }], cards: ['배고파서 힘이 나지 않아 더 힘들었을 수 있어요', '몸이 평소 상태여서 중간 정도로 느꼈어요'] }, target: { match: { wed: '배고파서 힘이 나지 않아 더 힘들었을 수 있어요', tue: '몸이 평소 상태여서 중간 정도로 느꼈어요' } }, levels: { easy: { state: { at: { '배고파서 힘이 나지 않아 더 힘들었을 수 있어요': 0 } } } }, difficulty: 0.2 },
                { prompt: '가장 힘들었던 날의 까닭으로 알맞은 근거만 골라요.', toolOptions: { mode: 'pick', topic: '까닭 근거', cards: ['기록표 메모에 적힌 몸 상태', '그날의 날씨와 잠잔 시간', '친구가 힘들었다고 한 이야기', '내 느낌 없이 숫자만 크다는 사실'] }, target: { pick: ['기록표 메모에 적힌 몸 상태', '그날의 날씨와 잠잔 시간'] }, difficulty: 0.25 },
                { prompt: '기록표를 적기만 하는 친구에게 해 줄 말을 이어요.', toolOptions: { mode: 'match', topic: '기록 활용', slots: [{ id: 'a', label: '숫자만 적고 끝내요' }, { id: 'b', label: '힘든 날의 까닭도 적어요' }], cards: ['기록을 다음 운동에 쓸 수 없어요', '다음에 같은 어려움을 피할 방법을 찾을 수 있어요'] }, target: { match: { a: '기록을 다음 운동에 쓸 수 없어요', b: '다음에 같은 어려움을 피할 방법을 찾을 수 있어요' } }, difficulty: 0.25,
                  conclude: '기록표는 적는 데서 끝나지 않고, 힘들었던 까닭을 읽어 다음 운동에 쓸 때 힘이 생겨요.' },
              ],
            },
          ],
          {
            teacher: '"기록표에서 가장 힘들었던 날과 그 까닭을 한 문장으로 말해 볼까요?" "○요일에 ○점으로 가장 힘들었는데, 메모를 보니 ○○ 때문이에요" 틀로 말하게 한다. 가볍게 걸으며 몸을 풀고 물을 마시게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'timer', options: { fields: [{ label: '월', unit: '점', max: 5 }, { label: '화', unit: '점', max: 5 }, { label: '수', unit: '점', max: 5 }] }, prompt: '하은이의 기록이에요. 월 5점, 화 2점, 수 3점을 옮겨 적어요.', target: { records: [5, 2, 3] }, difficulty: 0.1 },
              { type: 'choice', prompt: '기록표에서 힘들었던 날의 까닭은 어디서 찾을까요?', options: ['그날 적어 둔 메모와 몸 상태에서', '숫자만 보면 알 수 있어요', '친구 기록표에서만'], answer: 0, difficulty: 0.2, explain: '숫자는 결과이고 까닭은 메모에 담겨 있어요.' },
              { type: 'mood', prompt: '기록표를 읽어 본 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '일주일 기록표 읽기',
          items: [
            { type: 'table', prompt: '민지의 기록표예요. 가장 큰 숫자인 날과 까닭을 쓰세요.', columns: ['요일', '점수', '메모'], cells: [['월', '2', '잘 잤어요'], ['수', '5', '점심을 걸렀어요'], ['금', '4', '더운 날이었어요']] },
            { type: 'choice', prompt: '가장 힘들었던 날은 언제일까요?', options: ['월요일', '수요일', '금요일'], answer: '수요일' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '숫자는 ___이고, 힘든 ___은 옆의 메모에서 찾아요.', answer: '결과, 까닭' },
            { type: 'check', prompt: '오늘 해낸 것에 ✓ 하세요.', options: ['숫자를 요일과 짝지었어요', '가장 힘든 날을 찾았어요', '까닭을 메모에서 찾았어요'] },
            { type: 'short', prompt: '내가 한 주 동안 가장 힘들었던 날과 까닭을 쓰세요.' },
          ],
          easy: {
            note: '큰 숫자가 더 힘든 날이에요.',
            items: [
              { type: 'choice', prompt: '5점은 어떤 날인가요?', options: ['아주 힘든 날', '아주 쉬운 날'], answer: '아주 힘든 날' },
              { type: 'short', prompt: '힘들었던 날의 까닭 하나를 쓰세요.' },
              { type: 'draw', prompt: '기록표를 읽는 내 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 맞는 곳에 놓으면 바로 표시되고, 기록은 세 칸만 옮겨 적어요.',
          base: '기록 다섯 칸을 옮겨 적고 모두 놓은 뒤 확인해요.',
          challenge: '기록 숫자의 까닭이 될 근거를 여러 개 가려내고, 기록만 적는 친구에게 할 말을 이어요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 큰 숫자를 가장 가벼운 날로 읽는다 → 척도의 뜻을 다시 읽는다. ② 숫자만 보고 까닭을 지어낸다 → 메모 줄을 손가락으로 짚게 한다. ③ 친구 기록과 견주며 자기 기록을 낮추어 본다 → 사람마다 같은 운동도 다르게 느낀다는 것을 말한다. 실제 운동은 가볍게 걷기 정도로 한다.',
      }),
      // ───────────────────────── 8 ─────────────────────────
      L(8, {
        title: '몸이 가벼웠던 날처럼 하려고 바꿀 한 가지 고르기',
        objective: '몸이 가벼웠던 날과 힘들었던 날의 차이에서 바꿀 수 있는 한 가지를 골라 실제로 적용해 보고 결과를 적을 수 있다.',
        illustration: art('two paper-cut days side by side: a heavy gray cloud day with a tired child and a bright sunny day with a child stretching lightly, linked by an arrow with a small water bottle', [
          { motif: 'sun', x: 400, y: 54, s: 0.8 }, { motif: 'cloud', x: 80, y: 50 }, { motif: 'hills', y: 212 },
          { motif: 'tree', x: 420, y: 210 }, { motif: 'flower', x: 70, y: 224 },
          { motif: 'text', x: 240, y: 126, text: '한 가지만 바꿔 봐요', size: 24 },
        ]),
        safety: [GROUND, SHOE, WATER, STOP],
        stages: stages(
          {
            teacher: '"지난 시간 기록표에서 가장 가벼웠던 날은 언제였나요?" 몇몇이 말하면 "그날은 무엇이 달랐을까요? 밥, 잠, 날씨, 준비 운동…"이라고 되묻는다. 오늘은 그중 바꿀 수 있는 것 딱 한 가지만 골라 실제로 해 보고 달라지는지 확인한다고 알려 준다.',
            student: '가벼웠던 날처럼 하려면 무엇을 바꾸면 좋을까요? 한 가지만 골라 해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 가벼운 날과 힘든 날의 차이에서 바꿀 것 찾기', minutes: 14, tool: 'mindmap',
              task: '가벼웠던 날과 힘들었던 날의 모습을 나누고, 힘들었던 모습마다 바꿀 방법을 이어요. 바꿀 때 지킬 약속도 골라요.',
              teacher: '"날씨는 우리가 바꿀 수 있을까요? 잠자는 시간은요?" 바꿀 수 없는 것과 바꿀 수 있는 것을 나누게 한다. "여러 가지를 한꺼번에 바꾸면 무엇이 효과였는지 알 수 없어요. 한 번에 한 가지만 바꾸는 이유를 같이 말해 봐요."',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '날의 모습 카드를 몸이 가벼웠던 날과 힘들었던 날로 나누어요.', toolOptions: { topic: '그날의 모습', slots: [{ id: 'light', label: '몸이 가벼웠던 날' }, { id: 'heavy', label: '몸이 힘들었던 날' }], cards: ['아침을 든든히 먹었어요', '준비 운동을 천천히 했어요', '늦게 자서 졸렸어요', '물을 마시지 않고 뛰었어요'] }, target: { sort: { light: ['아침을 든든히 먹었어요', '준비 운동을 천천히 했어요'], heavy: ['늦게 자서 졸렸어요', '물을 마시지 않고 뛰었어요'] } }, levels: { easy: { state: { at: { '아침을 든든히 먹었어요': 0 } } } }, difficulty: 0.15 },
                { prompt: '힘들었던 모습에 알맞은 바꿀 방법을 하나씩 이어요.', toolOptions: { mode: 'match', topic: '바꿀 방법', slots: [{ id: 'sleep', label: '늦게 자서 졸렸어요' }, { id: 'water', label: '물을 마시지 않고 뛰었어요' }, { id: 'warm', label: '준비 운동을 건너뛰었어요' }], cards: ['저녁에 일찍 자요', '운동 전후에 물을 마셔요', '몸을 풀고 나서 뛰어요'] }, target: { match: { sleep: '저녁에 일찍 자요', water: '운동 전후에 물을 마셔요', warm: '몸을 풀고 나서 뛰어요' } }, difficulty: 0.2 },
                { prompt: '바꿀 때 알맞은 약속 카드만 골라요.', toolOptions: { mode: 'pick', topic: '바꾸는 약속', cards: ['한 번에 한 가지만 바꿔요', '바꾼 뒤 숨찬 정도를 적어요', '다섯 가지를 한꺼번에 바꿔요', '기록은 하지 않아요'] }, target: { pick: ['한 번에 한 가지만 바꿔요', '바꾼 뒤 숨찬 정도를 적어요'] }, difficulty: 0.25,
                  predict: { q: '여러 가지를 한꺼번에 바꿔도 무엇이 효과였는지 알 수 있을까요?', options: ['알 수 있어요', '알기 어려워요'], answer: 1 },
                  conclude: '한 번에 한 가지만 바꿔야 어느 것이 몸을 가볍게 했는지 알 수 있어요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 바꾼 한 가지를 적용해 제자리 뛰기 다시 해 보기', minutes: 12, tool: 'timer',
              task: '내가 고른 한 가지(운동 전 물 마시기·몸 풀기)를 하고 제자리 뛰기를 해요. 바꾸기 전과 후의 숨찬 정도를 적어요.',
              teacher: '"바꾼 것은 딱 하나예요. 나머지는 지난번과 같게 해요." 몸 풀기를 바꾼 학생은 뛰는 속도를 지난번과 같게 하는지 살핀다. "숫자가 안 달라졌어요" 하는 학생에게 "그것도 의미 있는 결과예요. 이 한 가지는 큰 영향이 없었다는 뜻이에요"라고 말해 준다.',
              levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
              items: [
                { prompt: '운동 전에 확인할 것을 눌러 표시해요.', toolOptions: { safety: ['물병이 가까이 있어요', '뛰는 자리가 평평해요', '이전과 같은 속도로 뛰기로 약속했어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '바꾼 한 가지를 적용하는 차례대로 카드를 놓아요.', toolOptions: { cards: ['바꾸기 전 기록과 견줘요', '제자리 뛰기 20번을 해요', '바꿀 한 가지를 해요', '숨찬 정도를 적어요'] }, target: { order: ['바꿀 한 가지를 해요', '제자리 뛰기 20번을 해요', '숨찬 정도를 적어요', '바꾸기 전 기록과 견줘요'] }, difficulty: 0.2 },
                { prompt: '바꾸기 전 숨찬 정도 4점과 바꾼 뒤 숨찬 정도를 적어요.', toolOptions: { fields: [{ label: '바꾸기 전', unit: '점', max: 5 }, { label: '바꾼 뒤', unit: '점', max: 5 }] }, target: { records: true }, difficulty: 0.15 },
                { prompt: '바꾼 한 가지가 도움이 되었는지 해낸 것을 점검해요.', target: { selfCheck: ['한 가지만 바꾸었어요', '지난번과 같은 속도로 뛰었어요', '결과를 숫자로 적었어요'] }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"바꾼 한 가지는 무엇이었고, 몸은 어떻게 달라졌나요?" 달라지지 않았어도 괜찮다고 말해 주고, 다음 시간에는 다른 한 가지를 바꿔 볼 수 있다고 알려 준다. 가볍게 걸으며 물을 마시게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'emotion', options: br('운동 기록이 안 좋은 날, 친구가 "물도 안 마시고 잠도 안 자고 연습만 하면 돼!"라고 말해요.', [ch('all', '모두 한꺼번에 바꿔 보아요', '무엇이 도움이 됐는지 알 수 없었어요.', '걱정', '한 가지만 바꿔야 효과를 알 수 있어요.'), ch('one', '그중 한 가지만 바꾸어 기록해요', '물을 마신 날 숨이 덜 찼다는 것을 알았어요.', '뿌듯함'), ch('none', '아무것도 바꾸지 않아요', '다음 기록도 똑같았어요.', '속상함', '바꾸지 않으면 달라질 수 없어요.')]), prompt: '기록을 좋게 하려고 어떻게 바꿀지 골라요.', target: { choice: 'one' }, difficulty: 0.15 },
              { type: 'choice', prompt: '무엇이 몸을 가볍게 했는지 알려면 어떻게 바꿔야 할까요?', options: ['한 번에 한 가지만 바꿔요', '모두 한꺼번에 바꿔요', '아무것도 바꾸지 않아요'], answer: 0, difficulty: 0.15, explain: '한 가지만 바꿔야 효과가 그것 때문인지 알 수 있어요.' },
              { type: 'mood', prompt: '한 가지를 바꾸어 본 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '바꿀 한 가지 고르기',
          items: [
            { type: 'table', prompt: '내가 바꾼 한 가지와 결과를 쓰세요.', columns: ['바꾼 한 가지', '바꾸기 전(1~5)', '바꾼 뒤(1~5)'], cells: [['', '', '']] },
            { type: 'choice', prompt: '바꿀 수 있는 것에 ○ 하세요.', options: ['일찍 자기', '오늘 날씨', '내 키'], answer: '일찍 자기' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '효과를 알려면 한 번에 ___ 가지만 바꾸고 결과를 ___.', answer: '한, 적어요' },
            { type: 'check', prompt: '오늘 해낸 것에 ✓ 하세요.', options: ['바꿀 한 가지를 골랐어요', '지난번과 같은 속도로 뛰었어요', '결과를 적었어요'] },
            { type: 'short', prompt: '다음에 바꿔 볼 한 가지와 까닭을 쓰세요.' },
          ],
          easy: {
            note: '바꾸는 것은 딱 하나예요.',
            items: [
              { type: 'choice', prompt: '바꿀 수 있는 것은?', options: ['물 마시기', '날씨'], answer: '물 마시기' },
              { type: 'short', prompt: '내가 바꾼 한 가지를 쓰세요.' },
              { type: 'draw', prompt: '가벼웠던 날의 내 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 맞는 곳에 놓으면 바로 표시되고 첫 카드가 놓여 있어요.',
          base: '모두 놓은 뒤 확인해 스스로 고쳐요.',
          challenge: '운동을 시간으로 직접 재고, 바꾼 한 가지의 효과를 숫자 차이로 말해요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 날씨처럼 바꿀 수 없는 것을 고른다 → 바꿀 수 있는 것 목록으로 다시 고르게 한다. ② 여러 가지를 한꺼번에 바꾼다 → 한 번에 한 가지 약속을 다시 말한다. ③ 효과가 없으면 실패라 여긴다 → "큰 영향이 없었다"도 알아낸 것이라고 말한다.',
      }),
      // ───────────────────────── 9 ─────────────────────────
      L(9, {
        title: '다음 주에 늘릴 운동 한 가지 골라 계획표 쓰기',
        objective: '기록을 바탕으로 다음 주에 늘리고 싶은 운동 한 가지를 고르고, 작고 구체적인 계획표를 세울 수 있다.',
        illustration: art('a child at a small desk filling a weekly plan chart with seven small boxes beside a jump rope and a calendar on the wall', [
          { motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'cloud', x: 90, y: 50 }, { motif: 'hills', y: 212 },
          { motif: 'house', x: 70, y: 214, s: 0.8 }, { motif: 'star', x: 330, y: 150, s: 1.0 },
          { motif: 'text', x: 240, y: 124, text: '다음 주 나의 운동 계획', size: 24 },
        ]),
        safety: [GROUND, SHOE, WATER, SIGNAL],
        stages: stages(
          {
            teacher: '"이번 주 기록을 보고 다음 주에는 무엇을 더 해 보고 싶나요?" 줄넘기·달리기·제자리 뛰기 같은 대답을 받아 적는다. "하루 100번처럼 큰 계획은 며칠이나 지킬 수 있을까요?"라고 묻고, 계획은 작고 구체적이어야 지킬 수 있다고 알려 준다.',
            student: '다음 주에 늘리고 싶은 운동 한 가지를 정하고, 지킬 수 있는 계획표를 만들어 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 지킬 수 있는 계획의 모습 찾기', minutes: 12, tool: 'mindmap',
              task: '계획 카드 가운데 작고 구체적인 것을 골라요. 계획에 꼭 들어갈 것을 나누고, 계획을 안 지킨 상황의 결과를 이어요.',
              teacher: '"하루에 100번 하겠다는 계획과 하루 10번이라는 계획 가운데 일주일 동안 지킬 수 있는 것은 무엇일까요?" 작게 시작해야 오래 간다고 짚는다. "계획은 쓰는 것이 끝이에요"라고 말하는 학생에게 "써 놓고 안 하면 몸은 달라질까요?"라고 되묻는다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '일주일 동안 지킬 수 있는 작고 구체적인 계획만 골라요.', toolOptions: { mode: 'pick', topic: '알맞은 계획', cards: ['월·수·금에 줄넘기 20번씩', '매일 두 시간씩 달리기', '쉬는 시간에 제자리 뛰기 10번', '운동은 기분 내킬 때만'] }, target: { pick: ['월·수·금에 줄넘기 20번씩', '쉬는 시간에 제자리 뛰기 10번'] }, difficulty: 0.15 },
                { prompt: '계획에 꼭 들어갈 것을 언제·무엇을·얼마나 가지에 이어요.', toolOptions: { mode: 'match', topic: '계획에 들어갈 것', slots: [{ id: 'when', label: '언제' }, { id: 'what', label: '무엇을' }, { id: 'how', label: '얼마나' }], cards: ['쉬는 시간에', '줄넘기를', '20번씩'] }, target: { match: { when: '쉬는 시간에', what: '줄넘기를', how: '20번씩' } }, levels: { easy: { state: { at: { '쉬는 시간에': 0 } } } }, difficulty: 0.15 },
                { prompt: '계획을 지킨 때와 안 지킨 때의 결과를 나누어요.', toolOptions: { topic: '계획의 결과', slots: [{ id: 'kept', label: '계획을 지켰어요' }, { id: 'skip', label: '계획을 안 지켰어요' }], cards: ['기록이 조금씩 쌓였어요', '몸이 한 주 사이 가벼워졌어요', '다음 계획에 쓸 기록이 없어요', '왜 힘든지 알 수 없었어요'] }, target: { sort: { kept: ['기록이 조금씩 쌓였어요', '몸이 한 주 사이 가벼워졌어요'], skip: ['다음 계획에 쓸 기록이 없어요', '왜 힘든지 알 수 없었어요'] } }, difficulty: 0.2,
                  conclude: '계획은 쓰는 데서 끝나지 않고 지키며 기록을 쌓을 때 다음 계획에 쓸 수 있어요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 줄넘기 계획표 만들고 맛보기 해 보기', minutes: 14, tool: 'timer',
              task: '다음 주 줄넘기 계획의 운동·쉬기 시간을 맞추고, 계획 순서를 놓고, 월·수·금 횟수를 옮겨 적어요. 계획을 스스로 점검해요.',
              teacher: '"계획한 횟수를 지금 다 해 볼 필요는 없어요. 맛보기로 한 세트만 해 봐요." 한 세트 하고 아프지 않은지 확인한다. 큰 횟수를 적으려는 학생에게 "처음 주에는 힘들지 않을 만큼, 다음 주에 늘려도 돼요"라고 말해 준다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '줄넘기 20번씩 3세트를 하고 세트 사이에 쉬는 계획이에요. 20초 하고 30초 쉬기를 3번으로 타이머를 맞추어요.', toolOptions: { plan: { work: 30, rest: 10, rounds: 2 }, workStep: 5, restStep: 10 }, target: { plan: { work: 20, rest: 30, rounds: 3 } }, difficulty: 0.2 },
                { prompt: '계획표를 만드는 차례대로 카드를 놓아요.', toolOptions: { cards: ['언제 할지 정해요', '이번 주 기록을 봐요', '얼마나 할지 정해요', '해 낸 날 표시할 칸을 만들어요'] }, target: { order: ['이번 주 기록을 봐요', '언제 할지 정해요', '얼마나 할지 정해요', '해 낸 날 표시할 칸을 만들어요'] }, levels: { easy: { state: { order: ['이번 주 기록을 봐요', '얼마나 할지 정해요', '언제 할지 정해요', '해 낸 날 표시할 칸을 만들어요'] } } }, difficulty: 0.2 },
                { prompt: '계획표예요. 월 줄넘기 20번, 수 25번, 금 30번을 그대로 옮겨 적어요.', toolOptions: { fields: [{ label: '월', unit: '번', max: 60 }, { label: '수', unit: '번', max: 60 }, { label: '금', unit: '번', max: 60 }] }, target: { records: [20, 25, 30] }, difficulty: 0.1 },
                { prompt: '내 계획이 지킬 만한지 점검 목록에 표시해요.', target: { selfCheck: ['언제 할지 정했어요', '얼마나 할지 정했어요', '힘들지 않을 만큼 작게 시작해요'] }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"내 계획에서 가장 지키기 쉬운 부분은 무엇인가요?" 두세 명이 말하게 한다. 마무리로 "이 계획은 다음 주에 직접 해 보고 그다음 시간에 돌아볼 거예요"라고 알려 주고, 천천히 걸으며 숨을 고르게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '계획', slots: [{ id: 'when', label: '언제' }, { id: 'how', label: '얼마나' }], cards: ['아침 조회 전에', '10번씩'] }, prompt: '계획에 들어갈 말과 가지를 이어요.', target: { match: { when: '아침 조회 전에', how: '10번씩' } }, difficulty: 0.15 },
              { type: 'choice', prompt: '다음 주 계획을 세울 때 알맞은 것은?', options: ['작게 시작해 지킬 수 있게 해요', '한 번에 아주 많이 해요', '계획 없이 그때그때 해요'], answer: 0, difficulty: 0.15, explain: '작은 계획이 오래 지켜져요.' },
              { type: 'mood', prompt: '나만의 계획을 세운 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '다음 주 나의 운동 계획표',
          items: [
            { type: 'table', prompt: '다음 주 계획을 쓰세요.', columns: ['언제', '무엇을', '얼마나'], rows: 3 },
            { type: 'choice', prompt: '지킬 수 있는 계획에 ○ 하세요.', options: ['쉬는 시간에 제자리 뛰기 10번', '하루 세 시간 달리기'], answer: '쉬는 시간에 제자리 뛰기 10번' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '계획은 ___ 시작하고, 해 낸 날을 ___해야 다음 계획에 쓸 수 있어요.', answer: '작게, 표시' },
            { type: 'check', prompt: '내 계획에 ✓ 하세요.', options: ['언제 할지 정했어요', '얼마나 할지 정했어요', '표시할 칸이 있어요'] },
            { type: 'short', prompt: '이번 주 기록에서 알게 된 것을 하나 쓰고, 다음 주에 바꿀 점을 쓰세요.' },
          ],
          easy: {
            note: '언제, 무엇을, 얼마나를 정해요.',
            items: [
              { type: 'choice', prompt: '계획에 들어갈 것은?', options: ['언제 할지', '친구가 입은 옷'], answer: '언제 할지' },
              { type: 'short', prompt: '다음 주에 하고 싶은 운동을 쓰세요.' },
              { type: 'draw', prompt: '계획표를 보는 내 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 맞는 곳에 놓으면 바로 표시되고 첫 카드가 놓여 있어요. 계획은 세 칸만 써요.',
          base: '모두 놓은 뒤 확인해 스스로 고쳐요.',
          challenge: '기록 숫자를 옮겨 적고, 계획을 안 지킨 결과를 스스로 가려내요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 처음부터 아주 큰 계획을 쓴다 → 일주일 지킬 만한 크기로 줄이게 한다. ② 언제 할지 빼고 쓴다 → 언제·무엇을·얼마나 세 칸을 모두 채우게 한다. ③ 계획만 쓰고 기록할 칸이 없다 → 해 낸 날 표시 칸을 꼭 만든다.',
      }),
      // ───────────────────────── 10 ─────────────────────────
      L(10, {
        title: '준비 운동·본 운동·정리 운동이 하는 일 알아보기',
        objective: '준비 운동, 본 운동, 정리 운동이 각각 무엇을 위한 것인지 활동과 이어 설명할 수 있다.',
        illustration: art('three panels in a row: children swinging arms and circling joints, children playing a running game, and children walking slowly with deep breaths', [
          { motif: 'sun', x: 410, y: 52, s: 0.7 }, { motif: 'cloud', x: 90, y: 50 }, { motif: 'hills', y: 212 },
          { motif: 'tree', x: 60, y: 212 }, { motif: 'flower', x: 430, y: 224 },
          { motif: 'text', x: 240, y: 122, text: '몸 풀기 · 본 운동 · 마무리', size: 22 },
        ]),
        safety: [GROUND, SPACE, STRETCH, SIGNAL],
        stages: stages(
          {
            teacher: '"차가운 고무줄을 갑자기 세게 당기면 어떻게 될까요?" 끊어질 수 있다는 대답을 받는다. "우리 몸도 갑자기 세게 움직이면 다칠 수 있어요. 그래서 운동은 세 부분으로 나누어요. 무엇일지 짐작해 볼까요?" 준비·본·정리 이름을 칠판에 적고 오늘은 각각 무슨 일을 하는지 알아본다고 말한다.',
            student: '운동은 왜 몸 풀기, 본 운동, 마무리로 나눌까요? 각각 하는 일을 찾아봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 세 부분 운동이 하는 일 찾기', minutes: 12, tool: 'mindmap',
              task: '운동 카드를 준비 운동·본 운동·정리 운동으로 나누고, 각각 하는 일을 이어요. 준비 운동에 대한 생각 가운데 맞는 것만 골라요.',
              teacher: '"준비 운동은 시간이 남을 때만 하는 거예요"라고 말하는 학생에게 "고무줄을 데우지 않고 당기면 어떻게 되었지요?"라고 되묻는다. 각 부분의 이름 뒤에 하는 일이 있다는 것을 말해 주고, 정리 운동을 건너뛰면 숨이 가라앉지 않아 어지러울 수 있음을 짚는다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '운동 카드를 준비 운동, 본 운동, 정리 운동으로 나누어요.', toolOptions: { topic: '운동의 세 부분', slots: [{ id: 'warm', label: '준비 운동', sub: '운동 전에' }, { id: 'main', label: '본 운동', sub: '운동할 때' }, { id: 'cool', label: '정리 운동', sub: '운동 뒤에' }], cards: ['손목·발목 돌리기', '천천히 걸으며 숨 고르기', '피구 경기', '가볍게 팔다리 털기', '줄넘기 연습'] }, target: { sort: { warm: ['손목·발목 돌리기', '가볍게 팔다리 털기'], main: ['피구 경기', '줄넘기 연습'], cool: ['천천히 걸으며 숨 고르기'] } }, levels: { easy: { state: { at: { '손목·발목 돌리기': 0 } } } }, difficulty: 0.15 },
                { prompt: '세 부분 운동이 하는 일을 하나씩 이어요.', toolOptions: { mode: 'match', topic: '하는 일', slots: [{ id: 'warm', label: '준비 운동' }, { id: 'main', label: '본 운동' }, { id: 'cool', label: '정리 운동' }], cards: ['몸을 데워 다치지 않게 해요', '체력을 쓰고 기술을 익혀요', '숨과 맥박을 가라앉혀 줘요'] }, target: { match: { warm: '몸을 데워 다치지 않게 해요', main: '체력을 쓰고 기술을 익혀요', cool: '숨과 맥박을 가라앉혀 줘요' } }, difficulty: 0.2 },
                { prompt: '준비 운동에 대해 맞게 말한 카드만 골라요.', toolOptions: { mode: 'pick', topic: '준비 운동 이야기', cards: ['준비 운동은 몸을 데워 줘요', '준비 운동은 시간이 남을 때만 해요', '준비 운동을 하면 다칠 위험이 줄어요', '준비 운동 없이 바로 뛰어도 같아요'] }, target: { pick: ['준비 운동은 몸을 데워 줘요', '준비 운동을 하면 다칠 위험이 줄어요'] }, difficulty: 0.25,
                  predict: { q: '준비 운동을 건너뛰고 바로 뛰면 어떻게 될까요?', options: ['다치기 쉬워요', '아무 차이 없어요'], answer: 0 },
                  conclude: '준비 운동은 몸을 데우고 관절을 부드럽게 해 줘서 다치지 않게 해요. 시간이 남을 때가 아니라 언제나 해야 해요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 세 부분 운동을 이어서 해 보기', minutes: 14, tool: 'timer',
              task: '안전을 점검하고, 세 부분 운동의 차례와 시간을 맞춘 뒤 실제로 해요. 마치고 해낸 것을 점검해요.',
              teacher: '"준비 운동을 할 때는 관절이 따뜻해지는 것을 느껴 보세요." 손목·발목 돌리기를 대충 하는 학생에게 "한 방향으로 열 번, 반대 방향으로 열 번"이라고 구체적으로 말해 준다. 본 운동 뒤 곧바로 앉으려는 학생에게 "걸으면서 숨을 고르고 앉아요"라고 말한다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '세 부분 운동을 시작하기 전에 자리를 살펴보고 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['움직일 자리가 비어 있어요', '친구와 두 팔 거리만큼 떨어졌어요', '신발 끈을 단단히 묶었어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '오늘 하는 운동 카드를 준비·본·정리의 차례대로 놓아요.', toolOptions: { cards: ['천천히 걸으며 숨 고르기', '술래잡기 경기', '목·어깨·손목 돌리기', '제자리에서 가볍게 뛰기'] }, target: { order: ['목·어깨·손목 돌리기', '제자리에서 가볍게 뛰기', '술래잡기 경기', '천천히 걸으며 숨 고르기'] }, levels: { easy: { state: { order: ['목·어깨·손목 돌리기', '술래잡기 경기', '제자리에서 가볍게 뛰기', '천천히 걸으며 숨 고르기'] } } }, difficulty: 0.15 },
                { prompt: '준비 운동은 15초씩 하고 5초 쉬기를 4번 하도록 타이머를 맞추어요.', toolOptions: { plan: { work: 30, rest: 10, rounds: 2 }, workStep: 5, restStep: 5 }, target: { plan: { work: 15, rest: 5, rounds: 4 } }, levels: { challenge: { prompt: '15초씩 하고 5초 쉬기를 되풀이해 전체 75초가 되도록 맞추어요(마지막에는 쉬지 않아요).', target: { total: 75, plan: { work: 15, rest: 5 } } } }, difficulty: 0.2 },
                { prompt: '세 부분 운동을 하고 해낸 것을 점검 목록에 표시해요.', target: { selfCheck: ['준비 운동으로 몸이 따뜻해졌어요', '본 운동을 안전하게 했어요', '정리 운동으로 숨을 가라앉혔어요'] }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"세 부분 가운데 오늘 몸이 가장 달라졌다고 느낀 부분은 어디였나요?" 준비 운동 뒤 몸이 따뜻해졌다는 대답을 받는다. 정리 운동으로 천천히 걷고 물을 마시게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'timer', options: { cards: ['천천히 걸으며 숨 고르기', '배드민턴 경기', '어깨·팔 돌리기'] }, prompt: '배드민턴을 하는 운동 카드를 바른 차례로 놓아요.', target: { order: ['어깨·팔 돌리기', '배드민턴 경기', '천천히 걸으며 숨 고르기'] }, difficulty: 0.15 },
              { type: 'choice', prompt: '정리 운동을 하는 까닭은 무엇인가요?', options: ['숨과 맥박을 천천히 가라앉히려고', '몸을 데우려고', '경기에서 이기려고'], answer: 0, difficulty: 0.2, explain: '정리 운동은 운동 뒤 몸을 편안한 상태로 돌려놓아요.' },
              { type: 'mood', prompt: '운동을 세 부분으로 해 본 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '운동의 세 부분',
          items: [
            { type: 'table', prompt: '세 부분 운동이 하는 일과 오늘 한 활동을 쓰세요.', columns: ['부분', '하는 일', '오늘 한 활동'], cells: [['준비 운동', '', ''], ['본 운동', '', ''], ['정리 운동', '', '']] },
            { type: 'choice', prompt: '준비 운동의 까닭에 ○ 하세요.', options: ['몸을 데워 다치지 않게 해요', '시간을 줄여요'], answer: '몸을 데워 다치지 않게 해요' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '운동 뒤에는 ___ 운동으로 숨과 ___을 가라앉혀요.', answer: '정리, 맥박' },
            { type: 'check', prompt: '오늘 해낸 것에 ✓ 하세요.', options: ['준비 운동을 했어요', '본 운동을 했어요', '정리 운동을 했어요'] },
            { type: 'short', prompt: '준비 운동을 건너뛰면 어떤 일이 생길지 쓰세요.' },
          ],
          easy: {
            note: '준비 → 본 → 정리 순서예요.',
            items: [
              { type: 'choice', prompt: '가장 먼저 하는 운동은?', options: ['준비 운동', '정리 운동'], answer: '준비 운동' },
              { type: 'short', prompt: '오늘 한 준비 운동 하나를 쓰세요.' },
              { type: 'draw', prompt: '준비 운동하는 내 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 맞는 곳에 놓으면 바로 표시되고, 첫 카드가 놓여 있어요.',
          base: '모두 놓은 뒤 확인해 스스로 고쳐요.',
          challenge: '타이머는 전체 시간에서 되풀이 횟수를 거꾸로 찾아 맞춰요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 준비 운동을 시간이 남을 때 하는 것으로 여긴다 → 고무줄 비유로 몸을 데우는 일임을 짚는다. ② 정리 운동을 건너뛰고 앉는다 → 걸으며 숨을 고르게 한다. ③ 관절을 대충 돌린다 → 방향과 횟수를 구체적으로 말해 준다. 몸으로 하는 활동은 교구가 판정하지 않으므로 교사가 관찰한다.',
      }),
      // ───────────────────────── 11 ─────────────────────────
      L(11, {
        title: '섞인 운동 카드를 바른 차례로 놓고 까닭 말하기',
        objective: '여러 운동 수업의 섞인 활동 카드를 준비·본·정리 차례로 바르게 놓고, 그렇게 놓은 까닭을 말할 수 있다.',
        illustration: art('a child arranging mixed activity cards on a board into three labeled rows while classmates stretch and walk behind', [
          { motif: 'sun', x: 62, y: 52, s: 0.7 }, { motif: 'cloud', x: 390, y: 48 }, { motif: 'hills', y: 212 },
          { motif: 'tree', x: 430, y: 210 }, { motif: 'flower', x: 90, y: 224 },
          { motif: 'text', x: 240, y: 124, text: '차례가 뒤바뀌면 어떻게 될까?', size: 22 },
        ]),
        safety: [GROUND, SPACE, SIGNAL, STOP],
        stages: stages(
          {
            teacher: '"어제 체육 시간에 마지막으로 한 것이 무엇이었나요?" 대답을 받은 뒤 "만약 달리기를 제일 먼저 하고 몸 풀기를 마지막에 했다면 어땠을까요?"라고 묻는다. 순서가 뒤바뀌면 어떤 일이 생기는지 예상을 말하게 하고, 오늘은 섞인 카드를 바르게 놓는 연습을 한다고 알려 준다.',
            student: '운동 순서가 뒤바뀌면 몸에 어떤 일이 생길까요? 섞인 카드를 바르게 놓아 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 섞인 운동 카드를 바른 차례로 놓기', minutes: 14, tool: 'timer',
              task: '달리기·줄넘기·공 던지기 수업의 섞인 카드를 준비·본·정리 차례로 놓아요. 자리를 점검하고 쉬는 시간도 맞춰요.',
              teacher: '"공 던지기 수업에서 어깨를 먼저 풀지 않고 던지면 어디가 다칠까요?" 어깨·팔을 짚게 한다. 정리 운동을 마지막이 아닌 중간에 놓은 학생에게 "그 카드를 한 뒤에 곧바로 본 운동을 하면 숨이 어떨까요?"라고 되묻는다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '수업 자리를 둘러보고 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['움직일 자리에 돌이 없어요', '친구와 부딪히지 않을 만큼 떨어졌어요', '신호를 어떻게 들을지 알아요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '달리기 수업의 섞인 카드를 바른 차례로 놓아요.', toolOptions: { cards: ['천천히 걸으며 숨 고르기', '50m 달리기 연습', '다리 돌리고 가볍게 뛰기', '발목·무릎 풀기'] }, target: { order: ['발목·무릎 풀기', '다리 돌리고 가볍게 뛰기', '50m 달리기 연습', '천천히 걸으며 숨 고르기'] }, levels: { easy: { state: { order: ['발목·무릎 풀기', '50m 달리기 연습', '다리 돌리고 가볍게 뛰기', '천천히 걸으며 숨 고르기'] } } }, difficulty: 0.15 },
                { prompt: '줄넘기 수업의 섞인 카드를 바른 차례로 놓아요.', toolOptions: { cards: ['줄 없이 팔 돌려 뛰어요', '손목·발목을 돌려요', '줄넘기 20번씩 세 번 해요', '손목을 털고 걸으며 쉬어요'] }, target: { order: ['손목·발목을 돌려요', '줄 없이 팔 돌려 뛰어요', '줄넘기 20번씩 세 번 해요', '손목을 털고 걸으며 쉬어요'] }, difficulty: 0.2,
                  hints: ['줄을 잡기 전에 손목과 발목부터 푸는 것이 안전해요.', '줄을 쓰지 않고 몸을 먼저 데운 뒤에 줄을 쓰는 순서를 떠올려 보세요.'] },
                { prompt: '공 던지기 수업의 섞인 카드를 바른 차례로 놓아요.', toolOptions: { cards: ['어깨를 크게 돌려요', '부드러운 공을 멀리 던져요', '팔을 흔들며 걸어요', '가볍게 던지고 받아요'] }, target: { order: ['어깨를 크게 돌려요', '가볍게 던지고 받아요', '부드러운 공을 멀리 던져요', '팔을 흔들며 걸어요'] }, difficulty: 0.25 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 차례를 건너뛰자는 친구에게 말하기', minutes: 12, tool: 'emotion',
              task: '운동 차례를 건너뛰자는 상황을 읽고 어떻게 할지 골라요. 보기마다 결과를 읽으며 왜 그런지 생각해요.',
              teacher: '"친구가 준비 운동을 하지 말자고 할 때 어떻게 말하면 좋을까요?" 거절하되 친구를 상하게 하지 않는 말("지난번에 발목을 다쳤으니 같이 풀고 하자")을 학생이 직접 말해 보게 한다. 결과를 읽을 때 "왜 이 보기에서 다쳤을까요?"라고 되묻는다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '친구가 준비 운동을 건너뛰자고 할 때 어떻게 할지 골라요.', toolOptions: br('체육 시간에 친구가 "시간이 없으니 준비 운동은 건너뛰고 바로 달리기 하자"고 해요.', [ch('skip', '친구를 따라 바로 달려요', '달리다가 발목이 뻐근해서 멈추었어요.', '속상함', '몸을 데우지 않으면 다치기 쉬워요.'), ch('together', '"조금만 같이 풀고 하자"고 말해요', '발목을 풀고 달려 기록이 좋았어요.', '뿌듯함'), ch('alone', '혼자만 풀고 친구는 그냥 두어요', '친구는 달리다 발이 삐끗했어요.', '걱정', '친구에게도 풀자고 알려야 함께 안전해요.')]), target: { choice: 'together' }, difficulty: 0.15 },
                { prompt: '달리기를 하고 바로 앉으려는 친구에게 할 일을 골라요.', toolOptions: br('50m 달리기를 마친 친구가 숨이 찬 채로 바닥에 털썩 앉으려고 해요.', [ch('sit', '그냥 앉게 둬요', '친구가 어지러워 일어나지 못했어요.', '걱정', '숨이 가라앉기 전에 앉으면 어지러울 수 있어요.'), ch('walk', '"같이 천천히 걸으며 숨 고르자"고 말해요', '천천히 걸으니 숨이 편안해졌어요.', '편안함'), ch('run', '"한 번 더 달리자"고 해요', '친구가 숨이 더 찼어요.', '속상함', '숨이 가라앉은 뒤에 다시 해야 안전해요.')]), target: { choice: 'walk' }, difficulty: 0.15 },
                { prompt: '수업 시간이 부족할 때 줄여도 되는 것을 골라요.', toolOptions: br('체육 시간이 5분밖에 남지 않았어요. 오늘 계획한 본 운동을 다 하려면 준비·정리를 줄여야 해요.', [ch('cut', '준비 운동과 정리 운동을 모두 줄여요', '다음 날 다리가 뻐근하게 아팠어요.', '속상함', '준비·정리를 건너뛰면 다치기 쉬워요.'), ch('main', '본 운동 시간을 조금 줄이고 준비·정리는 지켜요', '다치지 않고 안전하게 마쳤어요.', '뿌듯함'), ch('stay', '그냥 가만히 서 있어요', '몸이 식어 운동의 의미가 없어졌어요.', '걱정', '시간이 모자라면 본 운동을 줄이고 준비·정리는 지켜요.')]), target: { choice: 'main' }, difficulty: 0.2 },
                { prompt: '차례를 지키는 내 약속 하나를 짝에게 말해요.', free: true, talk: true, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"오늘 순서를 바르게 놓는 데 가장 도움이 된 생각은 무엇이었나요?" 몸을 데우고 → 쓰고 → 가라앉힌다는 차례를 말하게 한다. 정리 운동으로 천천히 걸으며 숨을 고르게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'timer', options: { cards: ['천천히 걸어 숨 고르기', '피구 경기', '팔·다리 돌리기'] }, prompt: '피구 수업의 카드를 바른 차례로 놓아요.', target: { order: ['팔·다리 돌리기', '피구 경기', '천천히 걸어 숨 고르기'] }, difficulty: 0.15 },
              { type: 'choice', prompt: '시간이 부족할 때 가장 먼저 줄이면 안 되는 것은?', options: ['준비 운동과 정리 운동', '본 운동 시간', '쉬는 시간'], answer: 0, difficulty: 0.25, explain: '준비·정리 운동은 안전을 지키므로 줄이지 않아요.' },
              { type: 'mood', prompt: '운동의 차례를 정해 본 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '운동 차례 카드',
          items: [
            { type: 'table', prompt: '달리기 수업의 활동을 준비·본·정리에 맞게 쓰세요.', columns: ['준비 운동', '본 운동', '정리 운동'], rows: 2 },
            { type: 'choice', prompt: '정리 운동은 언제 하나요?', options: ['본 운동이 끝난 뒤', '운동 시작 전'], answer: '본 운동이 끝난 뒤' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '운동 순서는 몸을 데우고, 운동을 하고, 마지막에 ___을 ___.', answer: '숨, 가라앉혀요' },
            { type: 'check', prompt: '오늘 해낸 것에 ✓ 하세요.', options: ['카드를 바른 차례로 놓았어요', '건너뛰자는 말에 알맞게 대답했어요', '순서를 지키는 약속을 말했어요'] },
            { type: 'short', prompt: '준비 운동을 건너뛰자는 친구에게 할 말을 쓰세요.' },
          ],
          easy: {
            note: '데우고 → 하고 → 가라앉혀요.',
            items: [
              { type: 'choice', prompt: '가장 먼저 하는 것은?', options: ['몸 풀기', '달리기'], answer: '몸 풀기' },
              { type: 'short', prompt: '내가 지킬 순서 하나를 쓰세요.' },
              { type: 'draw', prompt: '정리 운동하는 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 놓으면 바로 표시되고, 첫 카드가 바른 자리에 놓여 있어요.',
          base: '모두 놓은 뒤 확인해 스스로 고쳐요.',
          challenge: '세 가지 수업의 카드를 이어서 놓고, 시간이 모자란 상황에서 무엇을 줄일지 스스로 판단해요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 정리 운동을 건너뛰어도 괜찮다고 여긴다 → 숨 가라앉기 전에 앉아 어지러웠던 상황을 떠올리게 한다. ② 시간이 모자라면 준비 운동부터 줄인다 → 본 운동을 줄이고 준비·정리를 지키는 선택을 묻는다. ③ 친구의 말을 그냥 따른다 → 거절하면서 같이 하자고 말하는 문장을 연습한다.',
      }),
      // ───────────────────────── 12 ─────────────────────────
      L(12, {
        title: '오늘 할 놀이에 맞게 준비 운동 부위 고르기',
        objective: '오늘 할 활동에서 많이 쓰는 몸의 부위를 찾아 그 부위를 풀어 주는 준비 운동을 고르고 실제로 해 볼 수 있다.',
        illustration: art('a child standing with highlighted shoulders and a ball on the left, another with highlighted legs and a cone on the right, and small arrows pointing at the joints', [
          { motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'cloud', x: 100, y: 48 }, { motif: 'hills', y: 212 },
          { motif: 'tree', x: 70, y: 212 }, { motif: 'star', x: 240, y: 90, s: 0.8 },
          { motif: 'text', x: 240, y: 142, text: '많이 쓰는 곳을 먼저 풀어요', size: 22 },
        ]),
        safety: [GROUND, SPACE, STRETCH, SIGNAL],
        stages: stages(
          {
            teacher: '"공 던지기를 할 때 가장 많이 움직이는 곳은 어디일까요? 달리기를 할 때는요?" 어깨·팔, 다리·발목이라는 대답을 받아 칠판에 그린 몸 그림에 표시한다. "그럼 준비 운동도 많이 쓰는 곳을 더 신경 써서 풀어야 하지 않을까요?"라고 묻고 오늘은 활동마다 맞는 준비 운동을 고른다고 알려 준다.',
            student: '공 던지기와 달리기는 몸의 어느 곳을 많이 쓸까요? 맞는 준비 운동을 골라 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 활동마다 많이 쓰는 몸 부위와 준비 운동 짝 짓기', minutes: 14, tool: 'mindmap',
              task: '활동 카드를 많이 쓰는 몸 부위 가지로 나누고, 부위에 맞는 준비 운동을 이어요. 준비 운동의 알맞은 방법만 골라요.',
              teacher: '"줄넘기는 다리만 쓸까요?" 손목·팔도 함께 쓴다는 것을 짚는다. "준비 운동은 아무 데나 아무렇게나 해도 같아요"라고 말하는 학생에게 "공을 던질 건데 발목만 풀었다면 어디가 다칠 수 있을까요?"라고 되묻는다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '활동 카드를 많이 쓰는 몸 부위 가지로 나누어요.', toolOptions: { topic: '많이 쓰는 몸', slots: [{ id: 'arm', label: '어깨와 팔', sub: '던지고 당겨요' }, { id: 'leg', label: '다리와 발목', sub: '뛰고 달려요' }, { id: 'wrist', label: '손목과 손', sub: '줄·공을 잡아요' }], cards: ['공 멀리 던지기', '50m 달리기', '줄넘기 줄 돌리기', '제자리 멀리뛰기', '철봉에 매달리기'] }, target: { sort: { arm: ['공 멀리 던지기', '철봉에 매달리기'], leg: ['50m 달리기', '제자리 멀리뛰기'], wrist: ['줄넘기 줄 돌리기'] } }, levels: { easy: { state: { at: { '공 멀리 던지기': 0 } } } }, difficulty: 0.2 },
                { prompt: '많이 쓰는 몸 부위에 알맞은 준비 운동을 하나씩 이어요.', toolOptions: { mode: 'match', topic: '알맞은 준비 운동', slots: [{ id: 'arm', label: '어깨와 팔을 많이 쓸 때' }, { id: 'leg', label: '다리와 발목을 많이 쓸 때' }, { id: 'wrist', label: '손목을 많이 쓸 때' }], cards: ['팔을 크게 돌려요', '발목을 돌리고 무릎을 가볍게 굽혀요', '손목을 한 방향씩 돌려요'] }, target: { match: { arm: '팔을 크게 돌려요', leg: '발목을 돌리고 무릎을 가볍게 굽혀요', wrist: '손목을 한 방향씩 돌려요' } }, difficulty: 0.2 },
                { prompt: '준비 운동 방법으로 알맞은 카드만 골라요.', toolOptions: { mode: 'pick', topic: '알맞은 방법', cards: ['천천히 크게 움직여요', '반동을 주며 세게 늘려요', '숨을 내쉬며 아프기 전까지 늘려요', '아픈데도 참고 해요'] }, target: { pick: ['천천히 크게 움직여요', '숨을 내쉬며 아프기 전까지 늘려요'] }, difficulty: 0.25,
                  predict: { q: '준비 운동은 세게 늘릴수록 더 좋을까요?', options: ['그래요', '그렇지 않아요'], answer: 1 },
                  conclude: '준비 운동은 세게가 아니라 천천히 크게, 아프기 전까지 해야 몸을 안전하게 풀 수 있어요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 맞는 준비 운동을 직접 해 보기', minutes: 12, tool: 'timer',
              task: '자리를 점검하고, 부위별 준비 운동 차례와 시간을 맞춘 뒤 실제로 해요. 해 보고 몸의 느낌을 스스로 점검해요.',
              teacher: '"어깨를 돌릴 때 어깨가 따뜻해지는지 느껴 보세요." 대충 빠르게 돌리는 학생에게 "한 번에 하나씩, 천천히 크게"라고 말한다. 아픈 곳이 있으면 그 부위는 하지 말고 손을 들게 한다.',
              levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
              items: [
                { prompt: '준비 운동 자리를 살펴보고 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['팔을 돌릴 만큼 넓은 자리예요', '발이 미끄러운 바닥이 아니에요', '아프면 말하기로 약속했어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '위에서 아래로 몸을 푸는 차례대로 카드를 놓아요.', toolOptions: { cards: ['발목을 돌려요', '어깨를 크게 돌려요', '손목을 돌려요', '허리를 좌우로 천천히 돌려요'] }, target: { order: ['어깨를 크게 돌려요', '손목을 돌려요', '허리를 좌우로 천천히 돌려요', '발목을 돌려요'] }, levels: { easy: { state: { order: ['어깨를 크게 돌려요', '손목을 돌려요', '발목을 돌려요', '허리를 좌우로 천천히 돌려요'] } } }, difficulty: 0.2 },
                { prompt: '준비 운동을 12초씩 하고 3초 쉬기를 5번 하도록 타이머를 맞추어요.', toolOptions: { plan: { work: 30, rest: 10, rounds: 3 }, workStep: 3, restStep: 1 }, target: { plan: { work: 12, rest: 3, rounds: 5 } }, difficulty: 0.25 },
                { prompt: '준비 운동을 하고 느낌을 점검 목록에 표시해요.', target: { selfCheck: ['많이 쓰는 부위를 먼저 풀었어요', '천천히 크게 움직였어요', '아픈 곳은 하지 않았어요'] }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"오늘 풀어 준 몸의 부위는 어디였고 그곳이 어떻게 느껴졌나요?" 따뜻해졌다는 대답을 받는다. 정리 운동으로 팔다리를 털고 천천히 걸으며 물을 마시게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '준비 운동', slots: [{ id: 'a', label: '배드민턴 라켓을 쓸 때' }, { id: 'b', label: '긴 달리기를 할 때' }], cards: ['어깨와 손목을 풀어요', '다리와 발목을 풀어요'] }, prompt: '활동과 풀 부위를 이어요.', target: { match: { a: '어깨와 손목을 풀어요', b: '다리와 발목을 풀어요' } }, difficulty: 0.2 },
              { type: 'choice', prompt: '준비 운동을 할 때 알맞은 방법은 무엇인가요?', options: ['천천히 크게, 아프기 전까지', '반동을 주며 아주 세게', '아파도 참고 길게'], answer: 0, difficulty: 0.15, explain: '몸을 안전하게 풀려면 천천히 크게, 아프기 전까지 해요.' },
              { type: 'mood', prompt: '내 몸을 풀어 본 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '활동에 맞는 준비 운동',
          items: [
            { type: 'table', prompt: '활동마다 많이 쓰는 부위와 준비 운동을 쓰세요.', columns: ['활동', '많이 쓰는 부위', '준비 운동'], cells: [['공 던지기', '', ''], ['50m 달리기', '', ''], ['줄넘기', '', '']] },
            { type: 'choice', prompt: '공 던지기 전에 꼭 풀어야 할 곳에 ○ 하세요.', options: ['어깨와 팔', '발가락만'], answer: '어깨와 팔' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '준비 운동은 아프기 ___까지 천천히 ___ 움직여요.', answer: '전, 크게' },
            { type: 'check', prompt: '오늘 해낸 것에 ✓ 하세요.', options: ['쓰는 부위를 골랐어요', '준비 운동을 직접 했어요', '아픈 곳은 하지 않았어요'] },
            { type: 'short', prompt: '내가 좋아하는 활동에서 많이 쓰는 부위와 풀어 줄 방법을 쓰세요.' },
          ],
          easy: {
            note: '많이 쓰는 곳을 먼저 풀어요.',
            items: [
              { type: 'choice', prompt: '달리기에서 많이 쓰는 곳은?', options: ['다리', '귀'], answer: '다리' },
              { type: 'short', prompt: '오늘 풀어 준 부위 하나를 쓰세요.' },
              { type: 'draw', prompt: '몸에서 풀어 줄 곳에 색을 칠해 보세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 맞는 곳에 놓으면 바로 표시되고 첫 카드가 놓여 있어요.',
          base: '모두 놓은 뒤 확인해 스스로 고쳐요.',
          challenge: '준비 운동 시간을 직접 재어 맞추고, 알맞은 방법과 틀린 방법을 가려내요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 준비 운동을 몸 전체에 똑같이 한다 → 오늘 많이 쓸 곳을 먼저 말하게 한다. ② 반동을 주며 세게 늘린다 → 숨을 내쉬며 천천히, 아프기 전까지로 고쳐 준다. ③ 아픈 곳이 있는데 참는다 → 아픈 부위는 하지 않고 손 들기로 약속한다.',
      }),
      // ───────────────────────── 13 ─────────────────────────
      L(13, {
        title: '내 몸에 맞는 횟수를 정해 팔·다리 힘 운동 하기',
        objective: '팔과 다리 힘을 기르는 운동을 고르고, 자기 몸 상태에 맞는 횟수를 스스로 정해 끝까지 안전하게 해낼 수 있다.',
        illustration: art('children on mats each choosing their own number from small cards beside simple arm and leg strength exercises like knee push ups and sit to stand', [
          { motif: 'sun', x: 62, y: 52, s: 0.7 }, { motif: 'cloud', x: 390, y: 48 }, { motif: 'hills', y: 212 },
          { motif: 'tree', x: 430, y: 210 }, { motif: 'flower', x: 90, y: 224 },
          { motif: 'text', x: 240, y: 124, text: '내 몸에 맞는 만큼', size: 24 },
        ]),
        safety: [GROUND, MAT, PUSHUP, STOP],
        stages: stages(
          {
            teacher: '"친구가 팔 굽혀 버티기를 20번 했어요. 나도 20번 해야 제대로 한 걸까요?" 짐작을 말하게 한 뒤, "사람마다 힘이 달라서 알맞은 횟수도 달라요. 내가 끝까지 안전하게 할 수 있는 만큼 정하는 것이 중요해요"라고 알려 준다. 오늘은 내 횟수를 정하는 방법과 실제로 해 보기를 한다.',
            student: '친구와 같은 횟수를 해야 제대로 한 걸까요? 내 몸에 맞는 횟수를 정해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 운동 고르고 내 횟수 정하는 방법 알기', minutes: 12, tool: 'mindmap',
              task: '팔과 다리 힘을 기르는 운동 카드를 나누고, 내 몸 상태에 따라 횟수를 정하는 방법을 골라요. 몸 상태별로 알맞은 횟수 정하기를 이어요.',
              teacher: '"20번이 쉬웠다면 다음에 몇 번으로 바꿀까요? 10번도 힘들었다면요?" 쉬우면 조금 늘리고, 힘들면 줄이거나 쉬는 시간을 늘린다는 것을 말하게 한다. "친구가 더 많이 해서 나도 따라 했어요" 하는 학생에게 "친구 몸과 내 몸은 같은가요?"라고 되묻는다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '운동 카드를 팔 힘 운동과 다리 힘 운동으로 나누어요.', toolOptions: { topic: '힘 기르기 운동', slots: [{ id: 'arm', label: '팔 힘 기르기' }, { id: 'leg', label: '다리 힘 기르기' }], cards: ['무릎 대고 팔 굽혀 버티기', '벽 밀기', '앉았다 일어서기', '제자리 멀리뛰기'] }, target: { sort: { arm: ['무릎 대고 팔 굽혀 버티기', '벽 밀기'], leg: ['앉았다 일어서기', '제자리 멀리뛰기'] } }, levels: { easy: { state: { at: { '벽 밀기': 0 } } } }, difficulty: 0.15 },
                { prompt: '내 몸 상태에 맞게 횟수를 정하는 방법만 골라요.', toolOptions: { mode: 'pick', topic: '횟수 정하기', cards: ['쉽게 끝까지 할 수 있는 만큼으로 시작해요', '친구가 한 만큼을 따라 해요', '힘들면 횟수를 줄이거나 쉬어요', '아픈 것을 참고 많이 해요'] }, target: { pick: ['쉽게 끝까지 할 수 있는 만큼으로 시작해요', '힘들면 횟수를 줄이거나 쉬어요'] }, difficulty: 0.2,
                  predict: { q: '친구와 같은 횟수를 해야 제대로 한 것일까요?', options: ['그래요', '그렇지 않아요'], answer: 1 },
                  conclude: '내 몸에 맞는 횟수가 알맞은 횟수예요. 친구와 달라도 끝까지 안전하게 해내면 제대로 한 거예요.' },
                { prompt: '운동을 하고 난 몸 상태에 알맞은 다음 횟수 정하기를 이어요.', toolOptions: { mode: 'match', topic: '다음 횟수', slots: [{ id: 'easy', label: '아주 쉬웠어요' }, { id: 'ok', label: '딱 알맞았어요' }, { id: 'hard', label: '끝까지 하기 힘들었어요' }], cards: ['횟수를 조금 늘려요', '지금 횟수를 그대로 해요', '횟수를 줄여요'] }, target: { match: { easy: '횟수를 조금 늘려요', ok: '지금 횟수를 그대로 해요', hard: '횟수를 줄여요' } }, difficulty: 0.2 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 내 횟수로 팔·다리 운동 해 보기', minutes: 14, tool: 'timer',
              task: '자리를 점검하고, 운동 순서를 맞춘 뒤 내 횟수를 정해 실제로 해요. 정한 횟수와 한 횟수를 적고 스스로 점검해요.',
              teacher: '"정한 횟수보다 적어도, 많아도 괜찮아요. 정직하게 적어요." 횟수를 부풀려 적는 학생에게 "기록은 내 몸을 위한 거예요"라고 말한다. 아픈 곳이 생기면 바로 멈추고 말하게 한다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '매트 위 운동 자리를 확인하고 눌러 표시해요.', toolOptions: { safety: ['매트가 미끄러지지 않아요', '친구와 두 팔 거리만큼 떨어졌어요', '아프면 멈추고 말하기로 약속했어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '내 횟수로 운동하는 차례대로 카드를 놓아요.', toolOptions: { cards: ['정한 횟수를 정직하게 적어요', '팔·다리 운동을 정한 횟수만큼 해요', '내 횟수를 정해요', '숨을 고르며 몸 상태를 살펴요'] }, target: { order: ['내 횟수를 정해요', '팔·다리 운동을 정한 횟수만큼 해요', '숨을 고르며 몸 상태를 살펴요', '정한 횟수를 정직하게 적어요'] }, levels: { easy: { state: { order: ['내 횟수를 정해요', '팔·다리 운동을 정한 횟수만큼 해요', '정한 횟수를 정직하게 적어요', '숨을 고르며 몸 상태를 살펴요'] } } }, difficulty: 0.2 },
                { prompt: '앉았다 일어서기와 팔 굽혀 버티기를 정한 횟수와 한 횟수로 적어요.', toolOptions: { fields: [{ label: '정한 횟수', unit: '번', max: 40 }, { label: '실제로 한 횟수', unit: '번', max: 40 }] }, target: { records: true }, levels: { challenge: { toolOptions: { fields: [{ label: '정한 횟수', unit: '번', max: 40 }, { label: '실제로 한 횟수', unit: '번', max: 40 }, { label: '차이', unit: '번', max: 40 }] } } }, difficulty: 0.15 },
                { prompt: '내 횟수 운동을 하고 해낸 것을 점검해요.', target: { selfCheck: ['내 몸에 맞게 횟수를 정했어요', '아프지 않게 끝까지 했어요', '횟수를 정직하게 적었어요'] }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"내가 정한 횟수가 알맞았다고 생각하나요? 그 생각의 근거는 무엇인가요?" 몸의 느낌(숨·팔의 힘든 정도)을 근거로 말하게 한다. 정리 운동으로 팔다리를 가볍게 털고 걸으며 물을 마시게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'timer', options: { fields: [{ label: '정한 횟수', unit: '번', max: 40 }, { label: '한 횟수', unit: '번', max: 40 }] }, prompt: '정한 횟수 12번, 실제로 한 횟수 10번이에요. 두 칸에 옮겨 적어요.', target: { records: [12, 10] }, difficulty: 0.1 },
              { type: 'choice', prompt: '내 횟수를 정할 때 가장 알맞은 기준은?', options: ['내가 끝까지 안전하게 할 수 있는 만큼', '가장 힘센 친구가 한 만큼', '아플 때까지'], answer: 0, difficulty: 0.15, explain: '내 몸에 맞는 만큼이 알맞은 횟수예요.' },
              { type: 'mood', prompt: '내 횟수로 운동해 본 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '내 몸에 맞는 횟수 정하기',
          items: [
            { type: 'table', prompt: '오늘 운동의 정한 횟수와 한 횟수를 쓰세요.', columns: ['운동', '정한 횟수', '한 횟수', '몸의 느낌'], cells: [['앉았다 일어서기', '', '', ''], ['무릎 대고 팔 굽혀 버티기', '', '', '']] },
            { type: 'choice', prompt: '횟수를 정할 때 알맞은 것에 ○ 하세요.', options: ['내가 안전하게 할 수 있는 만큼', '친구와 똑같이'], answer: '내가 안전하게 할 수 있는 만큼' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '아주 쉬웠다면 횟수를 조금 ___, 끝까지 하기 힘들었다면 횟수를 ___.', answer: '늘리고, 줄여요' },
            { type: 'check', prompt: '오늘 해낸 것에 ✓ 하세요.', options: ['내 횟수를 정했어요', '아프지 않게 끝까지 했어요', '횟수를 정직하게 적었어요'] },
            { type: 'short', prompt: '친구와 횟수가 다를 때 내가 해 볼 생각을 쓰세요.' },
          ],
          easy: {
            note: '내 몸에 맞는 만큼이 알맞아요.',
            items: [
              { type: 'choice', prompt: '횟수는 누구 몸에 맞게 정하나요?', options: ['내 몸', '친구 몸'], answer: '내 몸' },
              { type: 'short', prompt: '내가 정한 횟수를 쓰세요.' },
              { type: 'draw', prompt: '운동하는 내 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 맞는 곳에 놓으면 바로 표시되고 첫 카드가 놓여 있어요. 기록은 두 칸이에요.',
          base: '모두 놓은 뒤 확인해 스스로 고쳐요.',
          challenge: '정한 횟수와 한 횟수의 차이를 스스로 셈해 적어요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 친구와 같은 횟수를 하려고 무리한다 → 몸 상태가 다름을 말한다. ② 횟수를 부풀려 적는다 → 기록은 내 몸을 위한 것임을 알려 준다. ③ 아픈 것을 참는다 → 아프면 바로 멈추고 말하는 약속을 반복한다. 몸으로 하는 활동은 교구가 판정하지 않으므로 교사가 관찰한다.',
      }),
      // ───────────────────────── 14 ─────────────────────────
      L(14, {
        title: '앉았다 일어서기를 세 세트로 나누어 해 보기',
        objective: '앉았다 일어서기를 바른 자세로 세 세트로 나누어 하고, 세트마다 한 횟수를 정직하게 적을 수 있다.',
        illustration: art('children at a gym mat doing sit to stand with straight backs while a chair stands behind each child and a stopwatch hangs on the wall', [
          { motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'cloud', x: 100, y: 48 }, { motif: 'hills', y: 212 },
          { motif: 'house', x: 420, y: 214, s: 0.8 }, { motif: 'flower', x: 70, y: 224 },
          { motif: 'text', x: 240, y: 124, text: '세 세트로 나누면 오래 해요', size: 22 },
        ]),
        safety: [GROUND, SHOE, SPACE, STOP],
        stages: stages(
          {
            teacher: '"의자에 앉았다 일어서는 것도 운동이 될까요?" 다리 힘을 쓴다는 대답을 받는다. "한 번에 서른 번을 하면 힘들지만, 열 번씩 세 번 나누면 어떨까요?"라고 묻고 짐작을 손으로 표시하게 한다. 오늘은 나누어 하기와 바른 자세로 하기를 익힌다고 알려 준다.',
            student: '앉았다 일어서기를 열 번씩 세 번 나누어 하면 한 번에 하는 것과 어떻게 다를까요?',
          },
          [
            {
              id: 'a1', title: '활동 1. 세 세트 나누어 하고 횟수 적기', minutes: 14, tool: 'timer',
              task: '자리를 점검하고, 세트 시간을 맞춘 뒤 실제로 앉았다 일어서기를 해요. 세트마다 한 횟수를 적고 차례도 맞춰요.',
              teacher: '"일어설 때 발바닥 전체를 바닥에 붙이고 등을 곧게 펴요." 발뒤꿈치가 뜨거나 허리가 굽는 학생 옆에서 "의자 끝에 엉덩이를 살짝 대는 느낌으로"라고 말해 준다. 세트 사이 쉬는 시간에 물을 마시게 한다.',
              levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
              items: [
                { prompt: '앉았다 일어서기 자리를 살펴보고 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['튼튼한 의자를 뒤에 놓았어요', '의자 둘레에 걸릴 것이 없어요', '아픈 곳이 있으면 쉬기로 했어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '한 세트를 20초 하고 30초 쉬기를 3번 하도록 타이머를 맞추어요.', toolOptions: { plan: { work: 30, rest: 20, rounds: 2 }, workStep: 5, restStep: 10 }, target: { plan: { work: 20, rest: 30, rounds: 3 } }, levels: { challenge: { prompt: '20초 하고 30초 쉬기를 되풀이해 전체 120초가 되도록 맞추어요(마지막에는 쉬지 않아요).', target: { total: 120, plan: { work: 20, rest: 30 } } } }, difficulty: 0.2 },
                { prompt: '세 세트에서 앉았다 일어선 횟수를 세트마다 적어요.', toolOptions: { fields: [{ label: '1세트', unit: '번', max: 30 }, { label: '2세트', unit: '번', max: 30 }, { label: '3세트', unit: '번', max: 30 }] }, target: { records: true }, difficulty: 0.15 },
                { prompt: '앉았다 일어서기를 하는 차례대로 카드를 놓아요.', toolOptions: { cards: ['등을 펴고 천천히 일어서요', '발바닥을 바닥에 붙이고 앉아요', '의자에 가볍게 닿고 다시 서요', '세트가 끝나면 물을 마셔요'] }, target: { order: ['발바닥을 바닥에 붙이고 앉아요', '등을 펴고 천천히 일어서요', '의자에 가볍게 닿고 다시 서요', '세트가 끝나면 물을 마셔요'] }, difficulty: 0.2 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 바른 자세와 몸의 신호 가려내기', minutes: 12, tool: 'mindmap',
              task: '바른 자세와 위험한 자세를 나누고, 몸의 신호마다 해야 할 일을 이어요. 나누어 하기의 좋은 점도 골라요.',
              teacher: '"무릎이 아픈데 한 번만 더 하면 안 될까요?" 아픔은 멈추라는 신호라는 것을 짚는다. "나누어 하면 시간이 더 걸리니 손해예요"라고 말하는 학생에게 "한 번에 하다 아파서 그만두는 것과 나누어 끝까지 하는 것 중 어느 쪽이 더 많이 했나요?"라고 되묻는다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '자세 카드를 바른 자세와 위험한 자세로 나누어요.', toolOptions: { topic: '일어서는 자세', slots: [{ id: 'good', label: '바른 자세' }, { id: 'bad', label: '위험한 자세' }], cards: ['발바닥이 바닥에 붙어요', '등이 곧게 펴져요', '발뒤꿈치를 들어요', '허리가 앞으로 굽어요'] }, target: { sort: { good: ['발바닥이 바닥에 붙어요', '등이 곧게 펴져요'], bad: ['발뒤꿈치를 들어요', '허리가 앞으로 굽어요'] } }, levels: { easy: { state: { at: { '발바닥이 바닥에 붙어요': 0 } } } }, difficulty: 0.15 },
                { prompt: '몸의 신호마다 해야 할 일을 하나씩 이어요.', toolOptions: { mode: 'match', topic: '몸의 신호', slots: [{ id: 'thigh', label: '허벅지가 뻐근해요' }, { id: 'knee', label: '무릎이 아파요' }, { id: 'dizzy', label: '어지러워요' }], cards: ['쉬는 시간을 조금 늘려요', '바로 멈추고 선생님께 말해요', '앉아서 숨을 고르고 말해요'] }, target: { match: { thigh: '쉬는 시간을 조금 늘려요', knee: '바로 멈추고 선생님께 말해요', dizzy: '앉아서 숨을 고르고 말해요' } }, difficulty: 0.25 },
                { prompt: '운동을 나누어 할 때 좋은 점만 골라요.', toolOptions: { mode: 'pick', topic: '나누어 하기', cards: ['힘이 덜 들어 끝까지 할 수 있어요', '자세가 무너지기 전에 쉬어요', '기록을 아주 정확히 알 수 있어요', '운동을 안 해도 돼요'] }, target: { pick: ['힘이 덜 들어 끝까지 할 수 있어요', '자세가 무너지기 전에 쉬어요'] }, difficulty: 0.2,
                  conclude: '나누어 하면 자세가 무너지기 전에 쉬어 끝까지 안전하게 할 수 있어요.' },
              ],
            },
          ],
          {
            teacher: '"세트 사이 쉬는 시간에 몸이 어떻게 달라졌나요?" 숨이 가라앉고 허벅지가 풀렸다는 대답을 받는다. 정리 운동으로 허벅지를 가볍게 털고 천천히 걸으며 물을 마시게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'timer', options: { fields: [{ label: '1세트', unit: '번', max: 30 }, { label: '2세트', unit: '번', max: 30 }, { label: '3세트', unit: '번', max: 30 }] }, prompt: '기록이 1세트 12번, 2세트 10번, 3세트 9번이에요. 그대로 옮겨 적어요.', target: { records: [12, 10, 9] }, difficulty: 0.1 },
              { type: 'choice', prompt: '무릎이 아플 때 알맞은 행동은 무엇인가요?', options: ['바로 멈추고 선생님께 말해요', '한 번만 더 해요', '참고 끝까지 해요'], answer: 0, difficulty: 0.15, explain: '아픔은 멈추라는 몸의 신호예요.' },
              { type: 'mood', prompt: '세 세트로 나누어 해 본 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '앉았다 일어서기 기록',
          items: [
            { type: 'table', prompt: '세트마다 한 횟수와 몸의 느낌을 쓰세요.', columns: ['세트', '한 횟수', '몸의 느낌'], cells: [['1세트', '', ''], ['2세트', '', ''], ['3세트', '', '']] },
            { type: 'choice', prompt: '바른 자세에 ○ 하세요.', options: ['등이 곧게 펴져요', '허리가 굽어요'], answer: '등이 곧게 펴져요' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '운동을 나누어 하면 자세가 ___기 전에 쉬어서 ___ 할 수 있어요.', answer: '무너지, 끝까지' },
            { type: 'check', prompt: '오늘 해낸 것에 ✓ 하세요.', options: ['세 세트를 했어요', '횟수를 적었어요', '아프면 멈추기로 했어요'] },
            { type: 'short', prompt: '세트가 올라갈수록 횟수가 어떻게 달라졌고 왜 그런지 쓰세요.' },
          ],
          easy: {
            note: '한 번에 많이보다 나누어서 해요.',
            items: [
              { type: 'choice', prompt: '아프면 어떻게 하나요?', options: ['멈추고 말해요', '참아요'], answer: '멈추고 말해요' },
              { type: 'short', prompt: '1세트에서 한 횟수를 쓰세요.' },
              { type: 'draw', prompt: '앉았다 일어서는 내 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 맞는 곳에 놓으면 바로 표시되고 첫 카드가 놓여 있어요.',
          base: '모두 놓은 뒤 확인해 스스로 고쳐요.',
          challenge: '타이머는 전체 시간에서 되풀이 횟수를 거꾸로 찾아 맞춰요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 발뒤꿈치가 뜨고 허리가 굽는다 → 발바닥 전체와 곧은 등을 한 가지씩 짚어 준다. ② 아픈 것을 참고 한 번 더 한다 → 아픔은 멈추라는 신호임을 짚는다. ③ 세트 횟수를 서로 견주며 속상해한다 → 내 기록끼리 견주게 한다. 몸으로 하는 활동은 교구가 판정하지 않으므로 교사가 관찰한다.',
      }),
      // ───────────────────────── 15 ─────────────────────────
      L(15, {
        title: '매달리기와 버티기 시간을 재며 내 팔 힘 알아보기',
        objective: '낮은 막대 매달리기와 벽 밀기 버티기를 해 보고 버틴 시간을 재어 두 운동을 견주어 말할 수 있다.',
        illustration: art('a child hanging from a low bar over a mat while a teacher stands beside holding a stopwatch, and another child leaning against a wall', [
          { motif: 'sun', x: 62, y: 52, s: 0.7 }, { motif: 'cloud', x: 390, y: 48 }, { motif: 'hills', y: 212 },
          { motif: 'tree', x: 430, y: 210 }, { motif: 'star', x: 330, y: 100, s: 0.8 },
          { motif: 'text', x: 240, y: 126, text: '얼마나 버틸 수 있을까?', size: 24 },
        ]),
        safety: [GROUND, HANG, MAT, STOP],
        stages: stages(
          {
            teacher: '"철봉에 매달려 있으면 팔 어디가 힘들까요?" 어깨·팔·손이라는 대답을 받는다. "손을 놓고 싶을 때 그 느낌이 가라앉을 때까지 기다릴 수 있을까요?"라고 묻고, 버틴 시간을 재어 내 기록과 견주는 연습을 한다고 알려 준다. 친구 시간과 견주지 않는다는 약속을 먼저 정한다.',
            student: '낮은 막대에 매달려 있으면 몇 초나 버틸 수 있을까요? 내 기록을 재어 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 매달리기와 벽 밀기 시간 재기', minutes: 14, tool: 'timer',
              task: '자리를 점검하고, 시간 재는 차례를 맞춘 뒤 실제로 낮은 막대 매달리기와 벽 밀기를 해요. 버틴 시간을 적어요.',
              teacher: '"매달릴 때는 선생님이 곁에 서 있을 때만 해요." 발이 바닥에 닿는 낮은 막대에서 시작하고, 손이 아프면 바로 내려오게 한다. 시간을 재는 짝은 소리 내어 읽지 않고 끝나면 조용히 알려 주게 한다.',
              levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
              items: [
                { prompt: '매달릴 자리를 살펴보고 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['막대가 낮고 튼튼해요', '발 아래에 매트가 깔려 있어요', '선생님이 곁에 서 계세요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '버틴 시간을 재는 차례대로 카드를 놓아요.', toolOptions: { cards: ['끝나면 버틴 시간을 적어요', '짝이 시작 신호를 줘요', '손이 아프면 바로 내려와요', '막대를 잡고 발을 바닥에서 떼요'] }, target: { order: ['짝이 시작 신호를 줘요', '막대를 잡고 발을 바닥에서 떼요', '손이 아프면 바로 내려와요', '끝나면 버틴 시간을 적어요'] }, levels: { easy: { state: { order: ['짝이 시작 신호를 줘요', '막대를 잡고 발을 바닥에서 떼요', '끝나면 버틴 시간을 적어요', '손이 아프면 바로 내려와요'] } } }, difficulty: 0.2 },
                { prompt: '매달리기와 벽 밀기에서 버틴 시간을 적어요.', toolOptions: { fields: [{ label: '매달리기', unit: '초', max: 60 }, { label: '벽 밀기 버티기', unit: '초', max: 60 }] }, target: { records: true }, levels: { challenge: { toolOptions: { fields: [{ label: '매달리기', unit: '초', max: 60 }, { label: '벽 밀기 버티기', unit: '초', max: 60 }, { label: '두 시간 차이', unit: '초', max: 60 }] } } }, difficulty: 0.15 },
                { prompt: '쉬는 시간을 두고 두 운동을 하도록 20초 하고 40초 쉬기를 2번으로 타이머를 맞추어요.', toolOptions: { plan: { work: 30, rest: 20, rounds: 3 }, workStep: 5, restStep: 10 }, target: { plan: { work: 20, rest: 40, rounds: 2 } }, difficulty: 0.2 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 친구보다 짧아 속상할 때 생각 바꾸기', minutes: 12, tool: 'emotion',
              task: '버틴 시간이 친구보다 짧아 속상한 상황을 읽고 어떻게 할지 골라요. 내 기록 느낌도 눈금으로 골라요.',
              teacher: '"친구는 15초, 나는 8초였어요. 나는 힘이 약한 걸까요?" 힘은 사람마다 다르고 지난번 내 기록과 견주는 것이 의미 있다고 말한다. 속상하다는 학생에게 "지난번에는 몇 초였나요? 오늘은요?"라고 되묻는다.',
              levels: { easy: { steps: 3 }, base: {}, challenge: { steps: 7 } },
              items: [
                { prompt: '친구보다 짧게 버텨 속상할 때 어떻게 할지 골라요.', toolOptions: br('매달리기에서 친구는 15초를 버텼는데 나는 8초밖에 못 버텼어요.', [ch('quit', '"나는 못해" 하고 그만해요', '다음 시간에도 기록이 그대로였어요.', '속상함', '친구와 견주면 힘이 빠져요.'), ch('own', '지난번 내 기록과 견줘 보아요', '지난번보다 2초 늘어난 것을 알고 기뻤어요.', '뿌듯함'), ch('hide', '시간을 길게 부풀려 적어요', '기록이 거짓이라 다음 계획에 쓸 수 없었어요.', '걱정', '기록은 내 몸을 위해 정직하게 적어야 해요.')]), target: { choice: 'own' }, difficulty: 0.15 },
                { prompt: '매달린 뒤 손이 얼마나 아팠는지 내 느낌을 골라요.', toolOptions: sc('낮은 막대에 매달린 뒤 손바닥과 손가락의 느낌을 살펴보았어요.', '걱정', '손이 힘든 정도를 골라요.'), target: { level: 'any' }, difficulty: 0.05 },
                { prompt: '벽 밀기를 한 뒤 팔이 얼마나 힘든지 내 느낌을 골라요.', toolOptions: sc('벽을 두 손으로 밀며 버틴 뒤 팔의 느낌을 살펴보았어요.', '걱정', '팔이 힘든 정도를 골라요.'), target: { level: 'any' }, difficulty: 0.05 },
                { prompt: '내 기록을 지난번과 견주어 달라진 점을 짝에게 말해요.', free: true, talk: true, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"내 기록을 누구와 견주면 가장 도움이 될까요?" 지난번의 나와 견주면 변화를 볼 수 있다는 대답을 받는다. 손을 털고 천천히 걸으며 숨을 고르게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'timer', options: { fields: [{ label: '매달리기', unit: '초', max: 60 }, { label: '벽 밀기', unit: '초', max: 60 }] }, prompt: '매달리기 9초, 벽 밀기 14초예요. 두 칸에 옮겨 적어요.', target: { records: [9, 14] }, difficulty: 0.1 },
              { type: 'choice', prompt: '내 기록을 가장 도움이 되게 견주는 방법은?', options: ['지난번 내 기록과 견줘요', '가장 오래 버틴 친구와 견줘요', '견주지 않고 버려요'], answer: 0, difficulty: 0.15, explain: '내 몸이 달라지는 것은 지난 내 기록과 견줄 때 보여요.' },
              { type: 'mood', prompt: '버티는 시간을 재어 본 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '버티기 기록',
          items: [
            { type: 'table', prompt: '버틴 시간을 쓰세요.', columns: ['운동', '지난번(초)', '오늘(초)', '달라진 점'], cells: [['매달리기', '', '', ''], ['벽 밀기 버티기', '', '', '']] },
            { type: 'choice', prompt: '기록을 견줄 때 알맞은 것에 ○ 하세요.', options: ['지난번 내 기록', '친구의 기록만'], answer: '지난번 내 기록' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '기록은 ___하게 적어야 다음 ___에 쓸 수 있어요.', answer: '정직, 계획' },
            { type: 'check', prompt: '오늘 지킨 약속에 ✓ 하세요.', options: ['선생님 곁에서만 매달렸어요', '손이 아프면 내려왔어요', '기록을 정직하게 적었어요'] },
            { type: 'short', prompt: '친구보다 기록이 짧았을 때 내가 해 볼 생각을 쓰세요.' },
          ],
          easy: {
            note: '내 기록은 지난번 나와 견줘요.',
            items: [
              { type: 'choice', prompt: '기록은 어떻게 적나요?', options: ['정직하게', '길게 부풀려'], answer: '정직하게' },
              { type: 'short', prompt: '오늘 버틴 시간을 쓰세요.' },
              { type: 'draw', prompt: '버티는 내 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 놓으면 바로 표시되고, 눈금은 세 칸이에요. 기록은 두 칸이에요.',
          base: '모두 놓은 뒤 확인하고 눈금 다섯 칸으로 느낌을 골라요.',
          challenge: '눈금이 일곱 칸이고, 두 시간의 차이를 직접 셈해 적어요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 친구보다 짧아 속상해한다 → 지난번 내 기록과 견주게 한다. ② 기록을 부풀려 적는다 → 기록은 내 몸을 위한 것임을 알려 준다. ③ 아픈데 참고 매달린다 → 손이 아프면 바로 내려오기로 약속한다. 매달리기는 반드시 교사가 곁에서 본다.',
      }),
      // ───────────────────────── 16 ─────────────────────────
      L(16, {
        title: '내가 고른 운동이 알맞았는지 몸의 반응으로 말하기',
        objective: '자기가 고른 운동 횟수가 알맞았는지 숨·근육·기분의 반응을 근거로 들어 말하고 판단할 수 있다.',
        illustration: art('a child sitting on a mat with a reflection checklist and three small face icons showing too easy, just right, and too hard', [
          { motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'cloud', x: 100, y: 48 }, { motif: 'hills', y: 212 },
          { motif: 'flower', x: 70, y: 224 }, { motif: 'tree', x: 430, y: 210 },
          { motif: 'text', x: 240, y: 126, text: '알맞았을까? 몸에게 물어봐요', size: 22 },
        ]),
        safety: [GROUND, MAT, WATER, STOP],
        stages: stages(
          {
            teacher: '"지난 시간에 내가 정한 횟수는 쉬웠나요, 힘들었나요, 딱 알맞았나요?" 손가락 하나·둘·셋으로 표시하게 한다. "알맞았는지 어떻게 알 수 있을까요? 숨, 근육, 기분 가운데 어디를 보면 될까요?"라고 묻고 오늘은 몸의 반응을 근거로 판단하는 연습을 한다고 알려 준다.',
            student: '내가 정한 운동 횟수가 알맞았는지 몸의 반응으로 어떻게 알 수 있을까요?',
          },
          [
            {
              id: 'a1', title: '활동 1. 짧게 운동하고 몸의 반응 살피기', minutes: 12, tool: 'timer',
              task: '자리를 점검하고, 내가 정한 횟수로 짧게 운동한 뒤 몸의 반응을 살피는 차례를 맞춰요. 반응을 숫자로 적고 점검해요.',
              teacher: '"숨, 근육, 기분을 하나씩 물어봐요. 숨은 얼마나 찼나요?" 반응을 한 가지씩 순서대로 묻는다. "다 괜찮아요"라고만 말하는 학생에게 "다리를 만져 보세요. 뜨겁거나 뻐근한 곳이 있나요?"라고 구체적으로 묻는다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '내 횟수 운동을 하기 전에 자리를 살펴보고 눌러 표시해요.', toolOptions: { safety: ['운동할 자리가 편평해요', '물병이 가까이 있어요', '아프면 멈추기로 약속했어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '운동하고 몸의 반응을 살피는 차례대로 카드를 놓아요.', toolOptions: { cards: ['반응을 숫자와 말로 적어요', '숨은 얼마나 찼는지 살펴요', '내 횟수로 운동을 해요', '근육과 기분을 살펴요'] }, target: { order: ['내 횟수로 운동을 해요', '숨은 얼마나 찼는지 살펴요', '근육과 기분을 살펴요', '반응을 숫자와 말로 적어요'] }, levels: { easy: { state: { order: ['내 횟수로 운동을 해요', '근육과 기분을 살펴요', '숨은 얼마나 찼는지 살펴요', '반응을 숫자와 말로 적어요'] } } }, difficulty: 0.2 },
                { prompt: '숨 3점, 근육 4점, 기분 2점이에요. 그대로 옮겨 적어요.', toolOptions: { fields: [{ label: '숨이 찬 정도', unit: '점', max: 5 }, { label: '근육이 힘든 정도', unit: '점', max: 5 }, { label: '기분이 힘든 정도', unit: '점', max: 5 }] }, target: { records: [3, 4, 2] }, difficulty: 0.1 },
                { prompt: '몸의 반응을 살펴본 일을 점검 목록에 표시해요.', target: { selfCheck: ['숨·근육·기분을 하나씩 살폈어요', '반응을 숫자로 적었어요', '아픈 곳이 없는지 확인했어요'] }, difficulty: 0.1 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 몸의 반응으로 알맞음 판단하기', minutes: 14, tool: 'mindmap',
              task: '몸의 반응을 쉬웠어요·알맞았어요·너무 힘들었어요로 나누고, 반응에 맞는 판단과 다음 행동을 이어요.',
              teacher: '"숨이 조금 차고 근육이 따뜻했다면 알맞은 걸까요?" 약간 힘들지만 끝까지 할 수 있었다면 알맞다는 기준을 말해 준다. "힘들수록 좋은 거예요"라고 말하는 학생에게 "아프거나 어지러워도 좋은 걸까요?"라고 되묻는다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '몸의 반응 카드를 판단에 따라 나누어요.', toolOptions: { topic: '반응으로 보는 알맞음', slots: [{ id: 'easy', label: '너무 쉬웠어요' }, { id: 'ok', label: '알맞았어요' }, { id: 'hard', label: '너무 힘들었어요' }], cards: ['숨이 거의 안 찼어요', '숨이 조금 차고 근육이 따뜻했어요', '어지럽고 다리가 아팠어요', '끝나고도 숨이 오래 가빴어요'] }, target: { sort: { easy: ['숨이 거의 안 찼어요'], ok: ['숨이 조금 차고 근육이 따뜻했어요'], hard: ['어지럽고 다리가 아팠어요', '끝나고도 숨이 오래 가빴어요'] } }, levels: { easy: { state: { at: { '숨이 거의 안 찼어요': 0 } } } }, difficulty: 0.2 },
                { prompt: '판단에 알맞은 다음 행동을 하나씩 이어요.', toolOptions: { mode: 'match', topic: '다음 행동', slots: [{ id: 'easy', label: '너무 쉬웠어요' }, { id: 'ok', label: '알맞았어요' }, { id: 'hard', label: '너무 힘들었어요' }], cards: ['횟수를 조금 늘려 봐요', '같은 횟수로 한 번 더 해 봐요', '횟수를 줄이고 쉬는 시간을 늘려요'] }, target: { match: { easy: '횟수를 조금 늘려 봐요', ok: '같은 횟수로 한 번 더 해 봐요', hard: '횟수를 줄이고 쉬는 시간을 늘려요' } }, difficulty: 0.2 },
                { prompt: '알맞은 운동에 대해 맞게 말한 카드만 골라요.', toolOptions: { mode: 'pick', topic: '알맞은 운동', cards: ['약간 힘들지만 끝까지 할 수 있어요', '몸의 반응으로 알맞은지 알 수 있어요', '힘들수록 무조건 좋은 운동이에요', '아파도 참아야 알맞은 운동이에요'] }, target: { pick: ['약간 힘들지만 끝까지 할 수 있어요', '몸의 반응으로 알맞은지 알 수 있어요'] }, difficulty: 0.25,
                  predict: { q: '힘들수록 좋은 운동일까요?', options: ['그래요', '그렇지 않아요'], answer: 1 },
                  conclude: '알맞은 운동은 약간 힘들지만 끝까지 할 수 있고 몸이 편안히 회복되는 운동이에요.' },
              ],
            },
          ],
          {
            teacher: '"내가 정한 횟수가 알맞았는지 말해 볼까요? 근거를 꼭 넣어 주세요." "숨이 ○점이었고 ○○했기 때문에 ○○했어요" 틀로 말하게 한다. 정리 운동으로 천천히 걷고 물을 마시게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'timer', options: { fields: [{ label: '숨', unit: '점', max: 5 }, { label: '근육', unit: '점', max: 5 }] }, prompt: '숨 2점, 근육 3점이에요. 두 칸에 옮겨 적어요.', target: { records: [2, 3] }, difficulty: 0.1 },
              { type: 'choice', prompt: '운동이 알맞았는지 알려 주는 것은 무엇인가요?', options: ['숨·근육·기분의 반응', '옆 친구의 횟수', '운동한 시간만'], answer: 0, difficulty: 0.15, explain: '몸의 반응이 알맞음을 알려 줘요.' },
              { type: 'mood', prompt: '몸의 반응을 살펴본 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '몸의 반응 살피기',
          items: [
            { type: 'table', prompt: '운동 뒤 반응과 알맞음을 쓰세요.', columns: ['반응', '점수(1~5)', '알맞음(쉬움·알맞음·힘듦)'], cells: [['숨', '', ''], ['근육', '', ''], ['기분', '', '']] },
            { type: 'choice', prompt: '알맞은 운동의 모습에 ○ 하세요.', options: ['약간 힘들지만 끝까지 할 수 있어요', '어지러울 만큼 힘들어요'], answer: '약간 힘들지만 끝까지 할 수 있어요' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '운동이 알맞았는지는 몸의 ___으로 알 수 있고 ___해도 알맞은 것은 아니에요.', answer: '반응, 아파' },
            { type: 'check', prompt: '오늘 해낸 것에 ✓ 하세요.', options: ['숨·근육·기분을 살폈어요', '알맞음을 판단했어요', '근거를 말했어요'] },
            { type: 'short', prompt: '내가 정한 횟수가 알맞았는지, 근거와 함께 쓰세요.' },
          ],
          easy: {
            note: '약간 힘들지만 끝까지 할 수 있으면 알맞아요.',
            items: [
              { type: 'choice', prompt: '알맞은 운동은?', options: ['약간 힘든 운동', '아플 만큼 힘든 운동'], answer: '약간 힘든 운동' },
              { type: 'short', prompt: '오늘 내 몸의 반응 하나를 쓰세요.' },
              { type: 'draw', prompt: '운동 뒤 내 얼굴을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 맞는 곳에 놓으면 바로 표시되고 첫 카드가 놓여 있어요.',
          base: '모두 놓은 뒤 확인해 스스로 고쳐요.',
          challenge: '운동이 알맞은지 근거를 들어 판단하고, 틀린 생각을 가려내요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 힘들수록 좋다고 여긴다 → 아프거나 어지러운 것은 알맞지 않다고 짚는다. ② 반응을 "괜찮아요"로만 말한다 → 숨·근육·기분을 하나씩 묻는다. ③ 친구와 같은 판단을 따라 한다 → 내 몸의 반응으로 판단하게 한다.',
      }),
      // ───────────────────────── 17 ─────────────────────────
      L(17, {
        title: '힘든 것과 아픈 것을 구분해 무리하지 않기',
        objective: '운동할 때 힘든 느낌과 아픈 신호를 구분하고, 아픈 신호가 오면 멈추고 알리는 행동을 고를 수 있다.',
        illustration: art('a child sitting on a mat holding a knee with a small red cross sign and a teacher kneeling beside, with a green leaf sign showing a gentle tired muscle', [
          { motif: 'sun', x: 62, y: 52, s: 0.7 }, { motif: 'cloud', x: 390, y: 48 }, { motif: 'hills', y: 212 },
          { motif: 'leaf', x: 330, y: 150, s: 1.0 }, { motif: 'flower', x: 90, y: 224 },
          { motif: 'text', x: 240, y: 126, text: '힘든 것과 아픈 것은 달라요', size: 22 },
        ]),
        safety: [GROUND, SPACE, STOP, WATER],
        stages: stages(
          {
            teacher: '"운동하다가 다리가 뻐근할 때와 무릎이 찌릿하게 아플 때, 같은 느낌일까요?" 학생들이 다르다고 말하면 이유를 묻는다. "뻐근함은 근육이 힘을 썼다는 신호이고, 찌릿한 아픔은 다쳤을 수 있다는 신호예요. 오늘은 둘을 구분해 보아요."',
            student: '운동하다 몸이 힘든 것과 아픈 것은 어떻게 다를까요? 아픈 신호가 오면 어떻게 해야 할까요?',
          },
          [
            {
              id: 'a1', title: '활동 1. 힘든 느낌과 아픈 신호 가려내기', minutes: 14, tool: 'mindmap',
              task: '몸의 느낌 카드를 괜찮은 힘듦과 아픈 신호로 나누고, 신호마다 해야 할 일을 이어요. 알맞은 말만 골라요.',
              teacher: '"뻐근한 것과 찌릿한 것의 차이를 말로 해 볼까요?" 뻐근함은 넓고 둔하게 오고 쉬면 가라앉지만, 찌릿하거나 콕콕 쑤시는 아픔은 한 곳에 날카롭게 오고 쉬어도 이어진다는 것을 짚는다. "참으면 강해져요"라고 말하는 학생에게 "다치고 나서도 참으면 어떻게 될까요?"라고 되묻는다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '몸의 느낌 카드를 괜찮은 힘듦과 아픈 신호로 나누어요.', toolOptions: { topic: '몸의 느낌', slots: [{ id: 'ok', label: '괜찮은 힘듦', sub: '쉬면 가라앉아요' }, { id: 'pain', label: '아픈 신호', sub: '멈추고 알려요' }], cards: ['허벅지가 뻐근해요', '숨이 조금 차요', '무릎이 콕콕 쑤셔요', '발목이 찌릿해요'] }, target: { sort: { ok: ['허벅지가 뻐근해요', '숨이 조금 차요'], pain: ['무릎이 콕콕 쑤셔요', '발목이 찌릿해요'] } }, levels: { easy: { state: { at: { '허벅지가 뻐근해요': 0 } } } }, difficulty: 0.15 },
                { prompt: '아픈 신호마다 알맞은 행동을 하나씩 이어요.', toolOptions: { mode: 'match', topic: '신호와 행동', slots: [{ id: 'sharp', label: '발목이 찌릿하게 아파요' }, { id: 'dizzy', label: '어지럽고 속이 울렁거려요' }, { id: 'tired', label: '다리가 뻐근하고 숨이 차요' }], cards: ['바로 멈추고 선생님께 말해요', '앉아서 숨을 고르고 물을 마셔요', '잠깐 쉬고 횟수를 조금 줄여요'] }, target: { match: { sharp: '바로 멈추고 선생님께 말해요', dizzy: '앉아서 숨을 고르고 물을 마셔요', tired: '잠깐 쉬고 횟수를 조금 줄여요' } }, difficulty: 0.25 },
                { prompt: '운동할 때 아프면 어떻게 해야 하는지 맞게 말한 카드만 골라요.', toolOptions: { mode: 'pick', topic: '아플 때', cards: ['아프면 바로 멈추고 알려요', '조금 쉬어도 아프면 더 쉬어요', '참으면 더 강해지니 계속해요', '아픈 것은 비밀로 해요'] }, target: { pick: ['아프면 바로 멈추고 알려요', '조금 쉬어도 아프면 더 쉬어요'] }, difficulty: 0.2,
                  predict: { q: '아파도 참고 계속하면 더 강해질까요?', options: ['그래요', '아니요, 더 다칠 수 있어요'], answer: 1 },
                  conclude: '아픔은 다쳤을 수 있다는 신호예요. 참지 말고 멈추고 알려야 해요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 무리하는 친구에게 어떻게 말할까', minutes: 12, tool: 'emotion',
              task: '친구가 아픈데도 참으려는 상황을 읽고 어떻게 말하고 행동할지 골라요. 결과를 읽으며 왜 그런지 생각해요.',
              teacher: '"친구가 아프다면서 계속하려 해요. 어떻게 말해야 할까요?" 학생이 직접 "선생님께 같이 말하러 가자"처럼 말해 보게 한다. 무섭다고 말하지 못하는 학생에게 "말하면 도움을 받을 수 있어요"라고 알려 준다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '아픈데도 계속하려는 친구에게 어떻게 할지 골라요.', toolOptions: br('줄넘기를 하던 친구가 발목이 찌릿하다면서도 "나는 괜찮아, 계속할 거야" 하고 말해요.', [ch('ignore', '못 본 척해요', '친구가 계속하다가 절뚝거리게 되었어요.', '걱정', '아픔은 참을수록 다칠 수 있어요.'), ch('teacher', '"선생님께 같이 말하러 가자"고 말해요', '선생님이 발목을 살펴보고 쉬게 해 주었어요.', '뿌듯함'), ch('push', '"더 해야 이겨"라고 부추겨요', '친구의 발목이 더 아파졌어요.', '속상함', '아픈 친구를 부추기면 다칠 수 있어요.')]), target: { choice: 'teacher' }, difficulty: 0.15 },
                { prompt: '내가 아픈데 친구들이 계속하자고 할 때 어떻게 할지 골라요.', toolOptions: br('팔이 찌릿하게 아픈데 모둠 친구들이 "너 때문에 지면 어떡해, 계속해 줘"라고 해요.', [ch('keep', '아픈 것을 참고 계속해요', '팔이 더 아파져 다음 시간까지 쉬어야 했어요.', '속상함', '아픈데 참으면 더 오래 쉬어야 해요.'), ch('tell', '"팔이 아파서 쉬어야 해"라고 말하고 쉬어요', '친구들이 이해해 주고 다른 자리를 맡겨 주었어요.', '편안함'), ch('hide', '아무 말 없이 슬쩍 빠져요', '친구들이 왜 빠졌는지 몰라 서운해했어요.', '걱정', '아프다는 것을 말해야 친구들도 이해해요.')]), target: { choice: 'tell' }, difficulty: 0.2 },
                { prompt: '아프지 않고 조금 뻐근할 때 어떻게 할지 골라요.', toolOptions: br('앉았다 일어서기를 하다가 허벅지가 뻐근해졌는데 날카롭게 아프지는 않아요.', [ch('stop', '바로 운동을 완전히 그만두어요', '쉬지 않고 그만두어 몸이 식어 버렸어요.', '속상함', '뻐근함은 쉬며 이어 갈 수 있어요.'), ch('rest', '잠깐 쉬고 횟수를 조금 줄여 이어 가요', '숨이 고르게 돌아와 끝까지 마쳤어요.', '뿌듯함'), ch('more', '더 세게 해서 뻐근함을 없애요', '다리에 힘이 빠져 휘청했어요.', '걱정', '뻐근하다고 더 세게 하면 오히려 다쳐요.')]), target: { choice: 'rest' }, difficulty: 0.2 },
                { prompt: '아플 때 선생님께 하는 말 한마디를 짝과 연습해요.', free: true, talk: true, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"뻐근한 것과 아픈 것을 한 문장으로 구분해 볼까요?" 두세 명이 말하게 하고, 아픔이 있으면 반드시 말한다는 약속을 정한다. 가볍게 걸으며 물을 마시게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '몸의 느낌', slots: [{ id: 'a', label: '근육이 뻐근해요' }, { id: 'b', label: '무릎이 콕콕 쑤셔요' }], cards: ['잠깐 쉬고 이어 가요', '멈추고 선생님께 말해요'] }, prompt: '느낌과 알맞은 행동을 이어요.', target: { match: { a: '잠깐 쉬고 이어 가요', b: '멈추고 선생님께 말해요' } }, difficulty: 0.15 },
              { type: 'choice', prompt: '운동하다 갑자기 날카롭게 아플 때 알맞은 행동은?', options: ['바로 멈추고 알려요', '참고 끝까지 해요', '친구와 겨뤄요'], answer: 0, difficulty: 0.15, explain: '날카로운 아픔은 다쳤을 수 있다는 신호예요.' },
              { type: 'mood', prompt: '아픈 신호를 배워 본 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '힘든 것과 아픈 것',
          items: [
            { type: 'table', prompt: '느낌마다 괜찮은 힘듦인지 아픈 신호인지 쓰세요.', columns: ['느낌', '괜찮은 힘듦·아픈 신호', '해야 할 일'], cells: [['허벅지가 뻐근해요', '', ''], ['발목이 찌릿해요', '', ''], ['어지러워요', '', '']] },
            { type: 'choice', prompt: '아픈 신호가 오면 ○ 하세요.', options: ['멈추고 선생님께 말해요', '참고 계속해요'], answer: '멈추고 선생님께 말해요' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '날카롭게 ___ 때는 바로 ___ 선생님께 말해요.', answer: '아플, 멈추고' },
            { type: 'check', prompt: '오늘 해낸 것에 ✓ 하세요.', options: ['힘듦과 아픔을 구분했어요', '아플 때 할 일을 알았어요', '말하는 연습을 했어요'] },
            { type: 'short', prompt: '친구가 아픈데 참고 있을 때 내가 해 줄 말을 쓰세요.' },
          ],
          easy: {
            note: '날카롭게 아프면 멈춰요.',
            items: [
              { type: 'choice', prompt: '아프면 어떻게 하나요?', options: ['멈추고 말해요', '참아요'], answer: '멈추고 말해요' },
              { type: 'short', prompt: '선생님께 할 말을 쓰세요.' },
              { type: 'draw', prompt: '쉬고 있는 내 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 맞는 곳에 놓으면 바로 표시되고 첫 카드가 놓여 있어요.',
          base: '모두 놓은 뒤 확인해 스스로 고쳐요.',
          challenge: '아프지 않은 뻐근함에서 무엇을 할지까지 스스로 판단해요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 아픔을 참으면 더 강해진다고 여긴다 → 참아서 더 오래 쉬게 된 결과를 읽게 한다. ② 친구들의 눈치를 보아 말하지 못한다 → 짧은 말 한마디를 같이 연습한다. ③ 뻐근함까지 모두 아픔으로 여기고 그만둔다 → 쉬며 이어 가는 방법을 알려 준다.',
      }),
      // ───────────────────────── 18 ─────────────────────────
      L(18, {
        title: '다음 시간에 바꿀 횟수와 방법을 근거와 함께 적기',
        objective: '오늘 운동 기록과 몸의 반응을 근거로 다음 시간에 바꿀 횟수나 방법 한 가지를 정하고 계획을 적을 수 있다.',
        illustration: art('a child writing a next time plan note beside a small row of three exercise cards and a ruler showing a slightly bigger number', [
          { motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'cloud', x: 100, y: 50 }, { motif: 'hills', y: 212 },
          { motif: 'house', x: 70, y: 214, s: 0.8 }, { motif: 'star', x: 330, y: 150, s: 1.0 },
          { motif: 'text', x: 240, y: 124, text: '다음엔 이렇게 바꿔 볼래요', size: 22 },
        ]),
        safety: [GROUND, MAT, WATER, STOP],
        stages: stages(
          {
            teacher: '"앉았다 일어서기를 지난번에 10번 했는데 쉬웠어요. 다음에는 몇 번으로 바꿀까요?" 숫자를 말하게 한 뒤 "그 숫자를 왜 골랐나요?"라고 근거를 묻는다. 몸의 반응과 기록을 근거로 들어 바꾼다는 오늘의 목표를 알려 준다.',
            student: '다음 시간에 운동 횟수나 방법을 바꾼다면 무엇을 바꾸고, 왜 그렇게 바꿀까요?',
          },
          [
            {
              id: 'a1', title: '활동 1. 기록을 보고 다음 횟수 정하기', minutes: 14, tool: 'timer',
              task: '지난 기록 숫자를 옮겨 적고, 바꿀 순서를 놓은 뒤, 타이머로 다음 계획을 맞춰요. 계획을 스스로 점검해요.',
              teacher: '"이번에 12번이 알맞았다면 다음에는 13번이나 14번처럼 조금만 늘려요. 갑자기 20번으로 바꾸지 않아요." 너무 큰 숫자를 적는 학생에게 "몸이 따라올 수 있을까요?"라고 되묻는다. 숫자의 근거를 한 문장으로 말하게 한다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '운동 계획을 세울 자리를 살펴보고 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['쓸 매트가 있어요', '지난 기록표를 가지고 있어요', '아플 때 알릴 방법을 알아요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '지난 기록이에요. 1세트 12번, 2세트 11번, 3세트 9번을 옮겨 적어요.', toolOptions: { fields: [{ label: '1세트', unit: '번', max: 40 }, { label: '2세트', unit: '번', max: 40 }, { label: '3세트', unit: '번', max: 40 }] }, target: { records: [12, 11, 9] }, difficulty: 0.1 },
                { prompt: '계획을 바꾸는 차례대로 카드를 놓아요.', toolOptions: { cards: ['바꿀 횟수를 한 문장으로 정해요', '몸의 반응을 떠올려요', '지난 기록을 읽어요', '바꾼 까닭을 적어요'] }, target: { order: ['지난 기록을 읽어요', '몸의 반응을 떠올려요', '바꿀 횟수를 한 문장으로 정해요', '바꾼 까닭을 적어요'] }, levels: { easy: { state: { order: ['지난 기록을 읽어요', '바꿀 횟수를 한 문장으로 정해요', '몸의 반응을 떠올려요', '바꾼 까닭을 적어요'] } } }, difficulty: 0.2 },
                { prompt: '다음 시간 계획은 15초 하고 45초 쉬기를 4번이에요. 타이머를 맞추어요.', toolOptions: { plan: { work: 30, rest: 20, rounds: 2 }, workStep: 5, restStep: 5 }, target: { plan: { work: 15, rest: 45, rounds: 4 } }, difficulty: 0.25 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 바꾼 까닭이 알맞은지 따져 보기', minutes: 12, tool: 'mindmap',
              task: '바꾼 계획이 알맞은지 몸의 반응·기록 근거와 이어 보고, 알맞은 바꾸기만 골라요.',
              teacher: '"이 계획은 왜 알맞은가요?" 학생이 근거를 기록이나 몸의 반응에서 찾게 한다. "많이 늘릴수록 좋아요"라고 말하는 학생에게 "한 번에 두 배로 늘리면 몸은 어떻게 느낄까요?"라고 되묻는다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '몸의 반응과 알맞은 바꾸기를 하나씩 이어요.', toolOptions: { mode: 'match', topic: '반응과 바꾸기', slots: [{ id: 'easy', label: '지난번이 너무 쉬웠어요' }, { id: 'hard', label: '지난번이 너무 힘들었어요' }, { id: 'ok', label: '지난번이 딱 알맞았어요' }], cards: ['횟수를 한두 번 늘려요', '횟수를 줄이고 쉬는 시간을 늘려요', '같은 횟수로 한 번 더 해요'] }, target: { match: { easy: '횟수를 한두 번 늘려요', hard: '횟수를 줄이고 쉬는 시간을 늘려요', ok: '같은 횟수로 한 번 더 해요' } }, levels: { easy: { state: { at: { '횟수를 한두 번 늘려요': 0 } } } }, difficulty: 0.2 },
                { prompt: '알맞게 바꾸는 방법만 골라요.', toolOptions: { mode: 'pick', topic: '알맞게 바꾸기', cards: ['한두 번만 조금 늘려요', '기록을 근거로 말해요', '갑자기 두 배로 늘려요', '친구가 한 만큼 따라 해요'] }, target: { pick: ['한두 번만 조금 늘려요', '기록을 근거로 말해요'] }, difficulty: 0.2,
                  predict: { q: '한 번에 많이 늘리면 더 빨리 좋아질까요?', options: ['그래요', '무리가 될 수 있어요'], answer: 1 },
                  conclude: '조금씩 바꾸어야 몸이 따라오고 다치지 않아요. 바꾼 까닭은 기록과 몸의 반응에서 찾아요.' },
                { prompt: '바꾸는 방법을 횟수 바꾸기와 쉬는 시간 바꾸기로 나누어요.', toolOptions: { topic: '바꾸는 방법', slots: [{ id: 'count', label: '횟수를 바꿔요' }, { id: 'rest', label: '쉬는 시간을 바꿔요' }], cards: ['10번에서 12번으로 늘려요', '쉬는 시간을 20초에서 30초로 늘려요', '15번에서 13번으로 줄여요', '쉬는 시간을 45초에서 30초로 줄여요'] }, target: { sort: { count: ['10번에서 12번으로 늘려요', '15번에서 13번으로 줄여요'], rest: ['쉬는 시간을 20초에서 30초로 늘려요', '쉬는 시간을 45초에서 30초로 줄여요'] } }, difficulty: 0.15 },
              ],
            },
          ],
          {
            teacher: '"내가 바꿀 것은 무엇이고 그 까닭은 무엇인가요?" "○○했으니까 ○○을 ○○하겠어요" 틀로 말하게 한다. 바꾼 계획은 다음 시간에 실제로 해 본다고 알려 준다. 천천히 걸으며 숨을 고르게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'timer', options: { fields: [{ label: '지난번', unit: '번', max: 40 }, { label: '다음번 계획', unit: '번', max: 40 }] }, prompt: '지난번 10번, 다음번 계획 12번이에요. 두 칸에 옮겨 적어요.', target: { records: [10, 12] }, difficulty: 0.1 },
              { type: 'choice', prompt: '다음 시간 계획을 바꿀 때 알맞은 근거는 무엇인가요?', options: ['오늘 기록과 몸의 반응', '친구의 기분', '날씨만'], answer: 0, difficulty: 0.15, explain: '내 기록과 몸의 반응이 가장 알맞은 근거예요.' },
              { type: 'mood', prompt: '다음 계획을 세운 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '다음 시간 계획',
          items: [
            { type: 'table', prompt: '지난번과 다음 계획을 쓰세요.', columns: ['운동', '지난번 횟수', '다음 계획', '바꾼 까닭'], cells: [['', '', '', '']] },
            { type: 'choice', prompt: '알맞게 바꾼 것에 ○ 하세요.', options: ['10번에서 12번으로', '10번에서 40번으로'], answer: '10번에서 12번으로' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '바꿀 때는 ___씩 바꾸고 ___를 기록과 몸의 반응에서 찾아요.', answer: '조금, 까닭' },
            { type: 'check', prompt: '오늘 해낸 것에 ✓ 하세요.', options: ['지난 기록을 읽었어요', '바꿀 한 가지를 정했어요', '까닭을 적었어요'] },
            { type: 'short', prompt: '내가 다음 시간에 바꿀 횟수나 방법과 까닭을 쓰세요.' },
          ],
          easy: {
            note: '조금씩, 까닭과 함께 바꿔요.',
            items: [
              { type: 'choice', prompt: '바꿀 때는?', options: ['조금씩', '아주 많이'], answer: '조금씩' },
              { type: 'short', prompt: '다음에 하고 싶은 횟수를 쓰세요.' },
              { type: 'draw', prompt: '다음 운동하는 내 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 맞는 곳에 놓으면 바로 표시되고 첫 카드가 놓여 있어요. 기록은 세 칸이에요.',
          base: '모두 놓은 뒤 확인해 스스로 고쳐요.',
          challenge: '횟수 바꾸기와 쉬는 시간 바꾸기를 직접 나누어 판단해요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 갑자기 아주 큰 숫자로 바꾼다 → 한두 번씩 조금 바꾸자고 말한다. ② 바꾼 까닭 없이 숫자만 적는다 → 지난 기록과 몸의 반응에서 근거를 찾게 한다. ③ 친구 횟수를 그대로 쓴다 → 내 몸의 반응으로 정하게 한다.',
      }),
      // ───────────────────────── 19 ─────────────────────────
      L(19, {
        title: '“건강하다”는 말에 들어가는 모습 모아 나누기',
        objective: '건강이 몸이 튼튼한 것뿐 아니라 마음이 편안한 것, 친구와 잘 지내는 것까지 포함함을 여러 모습에서 찾아 말할 수 있다.',
        illustration: art('three circles overlapping labeled body, mind, and friends with small paper figures running, smiling, and shaking hands inside each circle', [
          { motif: 'sun', x: 410, y: 52, s: 0.7 }, { motif: 'cloud', x: 90, y: 50 }, { motif: 'hills', y: 212 },
          { motif: 'flower', x: 60, y: 224 }, { motif: 'tree', x: 430, y: 210 },
          { motif: 'text', x: 240, y: 124, text: '건강에는 여러 모습이 있어요', size: 22 },
        ]),
        safety: [GROUND, SPACE, SIGNAL, STOP],
        stages: stages(
          {
            teacher: '"건강한 사람을 떠올리면 어떤 모습이 보이나요?" 달리는 모습·웃는 모습·잘 먹는 모습 같은 대답을 칠판에 모은다. "혼자 방에서 계속 우울한 사람은 건강하다고 할 수 있을까요?"라고 묻고 마음과 친구 관계도 건강에 들어가는지 생각해 보게 한다.',
            student: '“건강하다”고 할 때 어떤 모습들이 들어갈까요? 몸 말고 또 무엇이 있을까요?',
          },
          [
            {
              id: 'a1', title: '활동 1. 건강의 세 모습 나누기', minutes: 14, tool: 'mindmap',
              task: '건강한 모습 카드를 몸·마음·친구 가지로 나누고, 건강에 대한 생각 가운데 맞는 것만 골라요.',
              teacher: '"아침에 밥을 잘 먹는 것은 어느 건강일까요? 친구와 웃으며 노는 것은요?" 몸·마음·친구 가지로 학생이 직접 나누게 한다. "몸이 튼튼하면 마음은 상관없어요"라고 말하는 학생에게 "튼튼한데 하루 종일 걱정만 하면 편안할까요?"라고 되묻는다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '건강한 모습 카드를 몸·마음·친구 가지로 나누어요.', toolOptions: { topic: '건강의 세 모습', slots: [{ id: 'body', label: '몸', sub: '튼튼하고 잘 움직여요' }, { id: 'mind', label: '마음', sub: '편안하고 즐거워요' }, { id: 'friend', label: '친구', sub: '함께 잘 지내요' }], cards: ['밥을 잘 먹고 잘 자요', '고민을 말하고 마음이 가벼워요', '친구와 규칙을 지키며 놀아요', '철봉에 오래 매달릴 수 있어요', '화가 나도 숨을 고르며 말해요'] }, target: { sort: { body: ['밥을 잘 먹고 잘 자요', '철봉에 오래 매달릴 수 있어요'], mind: ['고민을 말하고 마음이 가벼워요', '화가 나도 숨을 고르며 말해요'], friend: ['친구와 규칙을 지키며 놀아요'] } }, levels: { easy: { state: { at: { '밥을 잘 먹고 잘 자요': 0 } } } }, difficulty: 0.2 },
                { prompt: '건강이 좋을 때 할 수 있는 일을 건강의 모습과 이어요.', toolOptions: { mode: 'match', topic: '건강으로 할 수 있는 일', slots: [{ id: 'body', label: '몸이 튼튼해요' }, { id: 'mind', label: '마음이 편안해요' }, { id: 'friend', label: '친구와 잘 지내요' }], cards: ['오래 달려도 지치지 않아요', '시험 걱정이 있어도 숨을 고르며 해결해요', '모둠 활동에서 서로 도와요'] }, target: { match: { body: '오래 달려도 지치지 않아요', mind: '시험 걱정이 있어도 숨을 고르며 해결해요', friend: '모둠 활동에서 서로 도와요' } }, difficulty: 0.2 },
                { prompt: '건강에 대해 맞게 말한 카드만 골라요.', toolOptions: { mode: 'pick', topic: '건강 이야기', cards: ['건강에는 몸·마음·친구 관계가 모두 들어가요', '몸이 튼튼하면 마음은 상관없어요', '마음이 편안한 것도 건강이에요', '친구와 지내는 일은 건강과 관계없어요'] }, target: { pick: ['건강에는 몸·마음·친구 관계가 모두 들어가요', '마음이 편안한 것도 건강이에요'] }, difficulty: 0.25,
                  predict: { q: '몸만 튼튼하면 건강한 걸까요?', options: ['그래요', '그렇지 않아요'], answer: 1 },
                  conclude: '건강은 몸이 튼튼한 것뿐 아니라 마음이 편안하고 친구와 잘 지내는 것까지 함께 갖추어진 모습이에요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 몸을 움직여 기분 살펴보기', minutes: 12, tool: 'timer',
              task: '자리를 점검하고, 가볍게 몸을 움직이는 차례와 시간을 맞춰 실제로 해요. 움직이기 전후 기분을 스스로 점검해요.',
              teacher: '"가볍게 몸을 움직이기 전과 후에 기분이 어떻게 달라졌는지 느껴 보세요." 달라진 점이 없다는 학생에게도 "그것도 괜찮은 결과예요"라고 말한다. 친구와 결과를 비교하지 않고 자기 느낌을 말하게 한다.',
              levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
              items: [
                { prompt: '몸을 가볍게 움직일 자리를 살펴보고 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['팔을 벌려도 닿지 않아요', '바닥이 미끄럽지 않아요', '불편하면 쉬어도 된다는 것을 알아요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '기분을 살피며 몸을 움직이는 차례대로 카드를 놓아요.', toolOptions: { cards: ['움직인 뒤 기분을 다시 살펴요', '가볍게 팔다리를 움직여요', '움직이기 전 기분을 살펴요', '두 기분을 견주어요'] }, target: { order: ['움직이기 전 기분을 살펴요', '가볍게 팔다리를 움직여요', '움직인 뒤 기분을 다시 살펴요', '두 기분을 견주어요'] }, levels: { easy: { state: { order: ['움직이기 전 기분을 살펴요', '움직인 뒤 기분을 다시 살펴요', '가볍게 팔다리를 움직여요', '두 기분을 견주어요'] } } }, difficulty: 0.2 },
                { prompt: '30초 움직이고 30초 쉬기를 2번 하도록 타이머를 맞추어요.', toolOptions: { plan: { work: 20, rest: 10, rounds: 3 }, workStep: 10, restStep: 10 }, target: { plan: { work: 30, rest: 30, rounds: 2 } }, difficulty: 0.15 },
                { prompt: '몸을 움직여 보고 해낸 것을 점검 목록에 표시해요.', target: { selfCheck: ['움직이기 전 기분을 살폈어요', '움직인 뒤 기분을 살폈어요', '두 기분이 어떻게 다른지 말했어요'] }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"건강하다는 말에 오늘 새로 알게 된 모습은 무엇인가요?" 마음이나 친구 관계를 말하는 학생에게 자세히 묻는다. 정리 운동으로 천천히 걸으며 숨을 고르게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '건강의 모습', slots: [{ id: 'a', label: '몸' }, { id: 'b', label: '마음' }], cards: ['학교까지 걸어도 힘들지 않아요', '속상한 일을 말하고 풀었어요'] }, prompt: '건강의 모습과 가지를 이어요.', target: { match: { a: '학교까지 걸어도 힘들지 않아요', b: '속상한 일을 말하고 풀었어요' } }, difficulty: 0.15 },
              { type: 'choice', prompt: '건강에 대해 알맞은 말은 무엇인가요?', options: ['몸·마음·친구 관계 모두 건강이에요', '몸만 튼튼하면 돼요', '마음은 건강과 상관없어요'], answer: 0, difficulty: 0.15, explain: '건강은 몸·마음·친구 관계가 함께 좋은 모습이에요.' },
              { type: 'mood', prompt: '건강의 여러 모습을 알아본 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '건강의 세 모습',
          items: [
            { type: 'table', prompt: '건강의 모습마다 예를 쓰세요.', columns: ['몸', '마음', '친구'], rows: 2 },
            { type: 'choice', prompt: '마음이 건강한 모습에 ○ 하세요.', options: ['걱정을 말하고 마음이 가벼워요', '아무에게도 말하지 않아요'], answer: '걱정을 말하고 마음이 가벼워요' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '건강에는 몸뿐 아니라 ___과 친구와 잘 ___ 모습도 들어가요.', answer: '마음, 지내는' },
            { type: 'check', prompt: '오늘 해낸 것에 ✓ 하세요.', options: ['건강의 세 모습을 나누었어요', '가볍게 몸을 움직였어요', '움직이기 전후 기분을 견주었어요'] },
            { type: 'short', prompt: '내가 건강하다고 느꼈던 때와 그 모습을 쓰세요.' },
          ],
          easy: {
            note: '몸 · 마음 · 친구',
            items: [
              { type: 'choice', prompt: '친구와 잘 지내는 것은 어떤 건강인가요?', options: ['친구 관계', '몸'], answer: '친구 관계' },
              { type: 'short', prompt: '내가 건강할 때의 모습 하나를 쓰세요.' },
              { type: 'draw', prompt: '건강한 내 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 맞는 곳에 놓으면 바로 표시되고 첫 카드가 놓여 있어요.',
          base: '모두 놓은 뒤 확인해 스스로 고쳐요.',
          challenge: '건강 이야기 가운데 틀린 말을 스스로 가려내고, 타이머를 직접 맞춰요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 건강을 튼튼한 몸으로만 안다 → 마음·친구 관계 카드를 하나씩 읽어 주며 넓혀 준다. ② 마음 건강을 말하기 부끄러워한다 → 걱정을 말해도 되는 분위기를 먼저 만든다. ③ 움직여도 기분이 같다고 실망한다 → 달라지지 않는 것도 알아낸 결과라고 말한다.',
      }),
      // ───────────────────────── 20 ─────────────────────────
      L(20, {
        title: '병이 없으면 건강이 다 갖추어진 걸까? 사례로 가리기',
        objective: '몸에 병이 없어도 마음이나 친구 관계에서 건강이 부족할 수 있는 사례를 읽고, 어떤 모습을 더 챙길지 말할 수 있다.',
        illustration: art('a child with a green check on the body panel but a gray cloud over the mind panel and an empty seat in the friends panel, with a friend waving from far away', [
          { motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'cloud', x: 100, y: 48 }, { motif: 'hills', y: 212 },
          { motif: 'tree', x: 70, y: 212 }, { motif: 'flower', x: 430, y: 224 },
          { motif: 'text', x: 240, y: 124, text: '아프지 않으면 다일까?', size: 24 },
        ]),
        safety: [GROUND, SPACE, SIGNAL, STOP],
        stages: stages(
          {
            teacher: '"감기도 안 걸리고 달리기도 잘하는데 늘 혼자 구석에 있는 준호가 있어요. 준호는 건강하다고 할 수 있을까요?" 학생들의 생각을 들은 뒤, 몸·마음·친구 가운데 준호에게 챙길 부분이 있는지 묻는다. 오늘은 사례 세 개를 읽고 판단한다고 알려 준다.',
            student: '몸에 병이 없으면 건강이 다 갖추어진 걸까요? 사례를 읽고 판단해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 사례를 읽고 부족한 건강 찾기', minutes: 12, tool: 'emotion',
              task: '세 사례를 읽고 어떤 선택이 건강에 도움이 되는지 골라요. 보기마다 결과를 읽으며 왜 그런지 생각해요.',
              teacher: '"준호에게 어떤 도움이 필요할까요?" 몸은 건강하지만 마음이나 친구 관계에서 도움이 필요함을 말하게 한다. 보기를 고를 때 학생이 "그냥 두는 게 좋아요"라고 하면 "혼자 있는 마음은 어떨까요?"라고 되묻는다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '늘 혼자 있는 친구에게 내가 할 일을 골라요.', toolOptions: br('달리기도 잘하고 감기도 안 걸리는 준호가 쉬는 시간마다 혼자 구석에 앉아 있어요.', [ch('ignore', '준호는 건강하니 그냥 둬요', '준호는 계속 혼자였고 점점 말이 없어졌어요.', '걱정', '몸이 건강해도 마음과 친구 관계에 도움이 필요할 수 있어요.'), ch('invite', '"같이 술래잡기하자"고 말을 걸어요', '준호가 쑥스럽게 웃으며 같이 놀았어요.', '기쁨'), ch('tease', '"왜 맨날 혼자야?" 하고 놀려요', '준호가 더 입을 다물었어요.', '속상함', '놀리면 마음이 더 닫혀요.')]), target: { choice: 'invite' }, difficulty: 0.15 },
                { prompt: '걱정이 많은 친구에게 내가 할 일을 골라요.', toolOptions: br('하은이는 몸은 튼튼하지만 시험 걱정에 밤마다 잠을 못 자요.', [ch('say', '"걱정되면 선생님께도 말해 봐"라고 알려 줘요', '하은이가 선생님께 말하고 걱정이 조금 가벼워졌어요.', '편안함'), ch('laugh', '"그 정도로 뭘 걱정해" 하고 웃어요', '하은이가 걱정을 말하지 않게 되었어요.', '속상함', '걱정을 가볍게 보면 마음을 더 닫아요.'), ch('hide', '못 들은 척해요', '하은이는 혼자 걱정을 계속했어요.', '걱정', '모른 척하면 도움을 받을 수 없어요.')]), target: { choice: 'say' }, difficulty: 0.2 },
                { prompt: '몸이 조금 아픈 친구에게 내가 할 일을 골라요.', toolOptions: br('민지는 감기에 걸려 목이 아픈데도 마음은 편안하고 친구들과도 잘 지내요.', [ch('all', '민지는 건강하지 않으니 같이 놀지 않아요', '민지가 외로워져 마음까지 힘들어졌어요.', '속상함', '몸이 조금 아파도 마음과 친구 관계는 건강할 수 있어요.'), ch('care', '"푹 쉬어"라고 말하고 물을 건네요', '민지가 고마워하며 쉬었어요.', '고마움'), ch('force', '"아파도 같이 뛰자"고 해요', '민지의 목이 더 아파졌어요.', '걱정', '아플 때는 쉬게 도와요.')]), target: { choice: 'care' }, difficulty: 0.2 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 건강을 챙기는 방법 짝 짓기', minutes: 14, tool: 'mindmap',
              task: '건강의 세 모습을 챙기는 방법을 이어요. 부족한 건강을 채우는 방법만 골라요. 건강 지킴이 약속 하나를 짝에게 말해요.',
              teacher: '"몸이 튼튼해도 마음이 힘들 때는 어떻게 할 수 있을까요?" 말하기·쉬기·친구와 놀기 같은 방법을 학생이 직접 말해 보게 한다. 건강 약속을 말할 때 "나는 ○○을 하겠다"처럼 하나만 구체적으로 말하게 한다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '건강의 모습마다 챙기는 방법을 하나씩 이어요.', toolOptions: { mode: 'match', topic: '건강 챙기기', slots: [{ id: 'body', label: '몸을 챙겨요' }, { id: 'mind', label: '마음을 챙겨요' }, { id: 'friend', label: '친구 관계를 챙겨요' }], cards: ['규칙적으로 먹고 자고 움직여요', '걱정을 말하고 숨을 고르며 쉬어요', '인사하고 먼저 같이 놀자고 해요'] }, target: { match: { body: '규칙적으로 먹고 자고 움직여요', mind: '걱정을 말하고 숨을 고르며 쉬어요', friend: '인사하고 먼저 같이 놀자고 해요' } }, levels: { easy: { state: { at: { '규칙적으로 먹고 자고 움직여요': 0 } } } }, difficulty: 0.2 },
                { prompt: '마음이 힘들 때 도움이 되는 방법만 골라요.', toolOptions: { mode: 'pick', topic: '마음이 힘들 때', cards: ['믿는 어른이나 친구에게 말해요', '천천히 숨을 쉬고 걸어요', '아무에게도 말하지 않고 참아요', '화나는 대로 물건을 던져요'] }, target: { pick: ['믿는 어른이나 친구에게 말해요', '천천히 숨을 쉬고 걸어요'] }, difficulty: 0.2 },
                { prompt: '아프지 않아도 건강이 부족할 수 있는 모습을 모두 골라요.', toolOptions: { mode: 'pick', topic: '부족한 건강', cards: ['늘 혼자라 외로워요', '걱정 때문에 잠을 못 자요', '아침을 먹고 친구와 웃어요', '운동하고 가볍게 잠들어요'] }, target: { pick: ['늘 혼자라 외로워요', '걱정 때문에 잠을 못 자요'] }, difficulty: 0.25,
                  predict: { q: '병이 없으면 건강이 다 갖추어진 걸까요?', options: ['그래요', '아니요, 마음·친구도 있어요'], answer: 1 },
                  conclude: '병이 없어도 마음이 힘들거나 친구와 어울리지 못하면 건강이 부족할 수 있어요.' },
                { prompt: '내가 지킬 건강 약속 하나를 "나는 ○○을 하겠어요" 틀로 짝에게 말해요.', free: true, talk: true, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"병이 없어도 건강이 부족할 수 있는 까닭을 한 문장으로 말해 볼까요?" 마음이나 친구 관계를 짚는 대답을 받는다. 정리 운동으로 천천히 걸으며 숨을 고르게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '건강 챙기기', cards: ['걱정을 말해요', '일찍 자요', '마음을 감추고 참아요'] }, prompt: '건강을 챙기는 방법만 골라요.', target: { pick: ['걱정을 말해요', '일찍 자요'] }, difficulty: 0.15 },
              { type: 'choice', prompt: '몸에 병이 없어도 건강이 부족할 수 있는 까닭은?', options: ['마음이나 친구 관계가 힘들 수 있어서', '몸은 중요하지 않아서', '병이 없으면 항상 건강해서'], answer: 0, difficulty: 0.15, explain: '건강은 몸·마음·친구 관계가 함께 좋은 모습이에요.' },
              { type: 'mood', prompt: '건강을 더 넓게 생각해 본 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '건강을 챙기는 방법',
          items: [
            { type: 'table', prompt: '건강의 모습마다 챙기는 방법을 쓰세요.', columns: ['몸', '마음', '친구 관계'], rows: 2 },
            { type: 'choice', prompt: '건강이 부족한 모습에 ○ 하세요.', options: ['늘 혼자라 외로워요', '친구와 웃으며 놀아요'], answer: '늘 혼자라 외로워요' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '병이 없어도 마음이 ___ 때는 믿는 사람에게 ___ 도움을 받아요.', answer: '힘들, 말하고' },
            { type: 'check', prompt: '오늘 해낸 것에 ✓ 하세요.', options: ['사례를 읽고 판단했어요', '건강 챙기는 방법을 이었어요', '건강 약속을 말했어요'] },
            { type: 'short', prompt: '내가 지킬 건강 약속을 쓰세요.' },
          ],
          easy: {
            note: '병이 없어도 마음과 친구도 살펴요.',
            items: [
              { type: 'choice', prompt: '외로운 친구에게는?', options: ['말을 걸어요', '못 본 척해요'], answer: '말을 걸어요' },
              { type: 'short', prompt: '내가 할 건강 약속 하나를 쓰세요.' },
              { type: 'draw', prompt: '친구와 함께 노는 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 맞는 곳에 놓으면 바로 표시되고 첫 카드가 놓여 있어요. 사례의 결과를 읽으며 생각해요.',
          base: '사례를 읽고 스스로 고르고 확인해요.',
          challenge: '건강이 부족한 모습을 여러 가지 찾고, 약속을 구체적인 문장으로 말해요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 병이 없으면 건강하다고 여긴다 → 사례를 읽고 마음·친구 관계를 짚게 한다. ② 외로운 친구를 놀리거나 못 본 척한다 → 먼저 말을 거는 문장을 연습한다. ③ 건강 약속을 너무 크게 말한다 → 오늘 바로 할 수 있는 한 가지로 줄이게 한다.',
      }),
      // ───────────────────────── 21 ─────────────────────────
      L(21, {
        title: '잘 움직인 날과 가만히 있던 날의 기분 견주기',
        objective: '몸을 잘 움직인 날과 가만히 있던 날의 기분과 몸 상태를 견주어 말하고, 움직임과 기분의 관계를 짐작할 수 있다.',
        illustration: art('two paper-cut panels: a child sitting heavily on a couch with a gray cloud and a child cheerfully hopping outdoors with a bright sun, with a small scale between them', [
          { motif: 'sun', x: 410, y: 52, s: 0.9 }, { motif: 'cloud', x: 90, y: 50 }, { motif: 'hills', y: 212 },
          { motif: 'house', x: 70, y: 214, s: 0.8 }, { motif: 'flower', x: 430, y: 224 },
          { motif: 'text', x: 240, y: 126, text: '움직인 날, 가만히 있던 날', size: 22 },
        ]),
        safety: [GROUND, SPACE, SIGNAL, STOP],
        stages: stages(
          {
            teacher: '"주말에 하루 종일 누워 있던 날과 밖에서 뛰어논 날, 기분이 어땠나요?" 손을 들어 표시하게 한다. "움직이면 기분이 꼭 좋아질까요?"라고 묻고 "오늘은 기분을 눈금으로 재어 견주어 볼 거예요. 정답이 없으니 내 느낌 그대로 골라요"라고 알려 준다.',
            student: '움직인 날과 가만히 있던 날, 기분은 어떻게 다를까요? 내 느낌을 눈금으로 골라 견주어 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 두 날의 기분과 몸 상태 눈금으로 고르기', minutes: 12, tool: 'emotion',
              task: '떠올린 두 날의 기분과 몸 상태를 눈금에서 골라요. 정답은 없어요. 내 마음 그대로 골라요.',
              teacher: '"친구와 같은 눈금을 고르지 않아도 괜찮아요." 같은 날이어도 사람마다 다를 수 있음을 알려 준다. 두 날의 눈금이 같은 학생에게 "그날은 무엇을 했나요?"라고 물어 이유를 말해 보게 한다.',
              levels: { easy: { steps: 3 }, base: {}, challenge: { steps: 7 } },
              items: [
                { prompt: '하루 종일 가만히 있던 날의 기분은 어땠나요?', toolOptions: sc('하루 종일 집에서 화면만 보며 가만히 앉아 있었어요.', '편안함', '그날의 기분이 좋은 정도를 골라요.'), target: { level: 'any' }, difficulty: 0.05 },
                { prompt: '밖에서 몸을 많이 움직인 날의 기분은 어땠나요?', toolOptions: sc('친구들과 운동장에서 달리고 뛰며 놀았어요.', '신남', '그날의 기분이 좋은 정도를 골라요.'), target: { level: 'any' }, difficulty: 0.05 },
                { prompt: '두 날 가운데 몸이 더 가벼웠던 날의 몸 느낌을 골라요.', toolOptions: sc('몸이 더 가벼웠던 날을 떠올려 보았어요.', '편안함', '그날 몸이 가벼운 정도를 골라요.'), target: { level: 'any' }, difficulty: 0.05 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 움직임과 기분의 관계 생각해 보기', minutes: 14, tool: 'mindmap',
              task: '움직인 날과 가만히 있던 날의 모습을 나누고, 움직임과 기분의 관계에 대한 말 가운데 맞는 것만 골라요. 짝에게 내 경험을 말해요.',
              teacher: '"움직이면 기분이 꼭 좋아지는 걸까요?" 대부분 좋아지지만 사람과 날에 따라 다를 수 있다고 말한다. "그냥 기분 좋은 날이어서 그랬겠죠"라고 말하는 학생에게 "그럼 몸을 움직인 날에만 기분 좋은 일이 더 있었는지 세어 볼까요?"라고 되묻는다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '모습 카드를 움직인 날과 가만히 있던 날로 나누어요.', toolOptions: { topic: '두 날의 모습', slots: [{ id: 'move', label: '움직인 날' }, { id: 'still', label: '가만히 있던 날' }], cards: ['땀이 나고 몸이 따뜻했어요', '몸이 찌뿌둥하고 무거웠어요', '밤에 잠이 잘 왔어요', '하품이 자꾸 나왔어요'] }, target: { sort: { move: ['땀이 나고 몸이 따뜻했어요', '밤에 잠이 잘 왔어요'], still: ['몸이 찌뿌둥하고 무거웠어요', '하품이 자꾸 나왔어요'] } }, levels: { easy: { state: { at: { '땀이 나고 몸이 따뜻했어요': 0 } } } }, difficulty: 0.15 },
                { prompt: '움직임과 기분에 대해 맞게 말한 카드만 골라요.', toolOptions: { mode: 'pick', topic: '움직임과 기분', cards: ['몸을 움직이면 기분이 좋아지는 경우가 많아요', '사람마다 달라서 같지 않을 수도 있어요', '움직이면 기분은 반드시 나빠져요', '기분은 움직임과 아무 관계가 없어요'] }, target: { pick: ['몸을 움직이면 기분이 좋아지는 경우가 많아요', '사람마다 달라서 같지 않을 수도 있어요'] }, difficulty: 0.25,
                  predict: { q: '몸을 움직이면 기분이 좋아질까요?', options: ['좋아지는 경우가 많아요', '반드시 나빠져요'], answer: 0 },
                  conclude: '몸을 움직이면 기분이 좋아지는 경우가 많지만 사람과 날에 따라 느낌은 다를 수 있어요.' },
                { prompt: '기분이 가라앉을 때 몸을 움직이면 좋은 까닭을 이어요.', toolOptions: { mode: 'match', topic: '기분과 움직임', slots: [{ id: 'sad', label: '속상해서 기분이 가라앉았어요' }, { id: 'tired', label: '공부하다 졸려요' }], cards: ['가볍게 걸으면 마음이 한결 가벼워져요', '팔다리를 쭉 펴면 정신이 맑아져요'] }, target: { match: { sad: '가볍게 걸으면 마음이 한결 가벼워져요', tired: '팔다리를 쭉 펴면 정신이 맑아져요' } }, difficulty: 0.2 },
                { prompt: '가만히 있던 날과 움직인 날의 기분 차이를 짝에게 말해요.', free: true, talk: true, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"몸을 움직인 날이 가만히 있던 날보다 꼭 더 좋았나요?" 사람마다 다름을 인정하며 자기 경험을 말하게 한다. 가볍게 팔다리를 흔들며 천천히 걷고 물을 마시게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'emotion', options: sc('점심시간에 친구들과 공놀이를 하고 교실로 돌아왔어요.', '신남', '내 기분이 좋은 정도를 골라요.'), prompt: '점심시간 공놀이 뒤 내 기분을 골라요.', target: { level: 'any' }, difficulty: 0.05 },
              { type: 'choice', prompt: '움직임과 기분에 대해 알맞은 말은 무엇인가요?', options: ['움직이면 기분이 좋아지는 경우가 많지만 사람마다 달라요', '움직이면 기분은 반드시 나빠져요', '움직임은 기분과 상관없어요'], answer: 0, difficulty: 0.2, explain: '움직이면 기분이 좋아지는 경우가 많지만 모두가 같지는 않아요.' },
              { type: 'mood', prompt: '움직임과 기분을 살펴본 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '움직인 날과 가만히 있던 날',
          items: [
            { type: 'table', prompt: '두 날의 기분(1~5)과 몸 느낌을 쓰세요.', columns: ['날', '기분(1~5)', '몸 느낌'], cells: [['가만히 있던 날', '', ''], ['움직인 날', '', '']] },
            { type: 'choice', prompt: '맞는 말에 ○ 하세요.', options: ['움직이면 기분이 좋아지는 경우가 많아요', '움직이면 항상 기분이 나빠져요'], answer: '움직이면 기분이 좋아지는 경우가 많아요' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '움직임과 기분의 관계는 ___마다 다를 수 있으니 내 느낌을 ___ 골라요.', answer: '사람, 정직하게' },
            { type: 'check', prompt: '오늘 해낸 것에 ✓ 하세요.', options: ['기분을 눈금으로 골랐어요', '두 날을 견주었어요', '내 경험을 말했어요'] },
            { type: 'short', prompt: '내가 몸을 움직이고 나서 기분이 달라졌던 경험을 쓰세요.' },
          ],
          easy: {
            note: '정답은 없어요. 내 느낌 그대로 골라요.',
            items: [
              { type: 'choice', prompt: '움직이면 기분은?', options: ['좋아지는 경우가 많아요', '꼭 나빠져요'], answer: '좋아지는 경우가 많아요' },
              { type: 'short', prompt: '오늘 기분 한 가지를 쓰세요.' },
              { type: 'draw', prompt: '기분 좋을 때 내 얼굴을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '눈금은 세 칸이고, 카드는 첫 카드가 놓여 있어요.',
          base: '눈금은 다섯 칸이고 모두 놓은 뒤 확인해요.',
          challenge: '눈금이 일곱 칸이고, 움직임과 기분의 관계에서 틀린 말을 가려내요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 친구와 같은 눈금을 고른다 → 정답이 없음을 다시 말한다. ② 움직이면 반드시 기분이 좋아진다고 단정한다 → 사람마다 다를 수 있음을 알려 준다. ③ 기분이 달라지지 않았다고 실망한다 → 달라지지 않은 것도 알아낸 결과라고 말한다.',
      }),
      // ───────────────────────── 22 ─────────────────────────
      L(22, {
        title: '쉬는 시간에 할 몸 움직이기 한 가지 골라 해 보기',
        objective: '쉬는 시간 10분 안에 안전하게 할 수 있는 몸 움직이기 한 가지를 골라 실제로 해 보고 전후 기분을 적을 수 있다.',
        illustration: art('children in a school hallway and small courtyard choosing quick movements like stretching arms, hopping on the spot, and walking briskly, with a clock showing a short break time', [
          { motif: 'sun', x: 62, y: 52, s: 0.7 }, { motif: 'cloud', x: 390, y: 48 }, { motif: 'hills', y: 212 },
          { motif: 'house', x: 410, y: 214, s: 0.8 }, { motif: 'flower', x: 90, y: 224 },
          { motif: 'text', x: 240, y: 126, text: '쉬는 시간에 나는 이것!', size: 24 },
        ]),
        safety: [GROUND, SPACE, '복도와 계단에서는 뛰지 않고, 교실 안에서는 책상 사이를 부딪히지 않게 걸어요.', STOP],
        stages: stages(
          {
            teacher: '"쉬는 시간이 10분인데 교실에서 안전하게 할 수 있는 몸 움직이기는 무엇이 있을까요?" 학생들이 말한 것(제자리 걷기·기지개·팔 흔들기)을 칠판에 모은다. 복도에서 뛰기처럼 위험한 것은 빼고 한 가지를 고른다고 알려 주고, 오늘은 실제로 해 본다고 말한다.',
            student: '쉬는 시간 10분 동안 안전하게 할 수 있는 몸 움직이기는 무엇일까요? 한 가지 골라 직접 해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 쉬는 시간에 알맞은 움직임 가려내기', minutes: 12, tool: 'mindmap',
              task: '움직임 카드를 안전한 것과 위험한 것으로 나누고, 장소에 알맞은 움직임을 이어요. 알맞은 움직임만 골라요.',
              teacher: '"복도에서 달리면 안 되는 까닭은 무엇일까요?" 부딪혀 다칠 수 있다는 것을 짚는다. "교실에서는 어떤 움직임이 안전할까요?" 책상 사이를 부딪히지 않게 하는 방법을 말하게 한다. 위험한 카드를 안전하다고 고른 학생에게 "그 장소에서 부딪힐 일은 없나요?"라고 되묻는다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '쉬는 시간 움직임 카드를 안전한 것과 위험한 것으로 나누어요.', toolOptions: { topic: '쉬는 시간 움직임', slots: [{ id: 'safe', label: '안전해요' }, { id: 'risk', label: '위험해요' }], cards: ['자리에서 기지개 켜기', '제자리에서 가볍게 걷기', '복도에서 뛰기', '계단 난간 위에 올라타기'] }, target: { sort: { safe: ['자리에서 기지개 켜기', '제자리에서 가볍게 걷기'], risk: ['복도에서 뛰기', '계단 난간 위에 올라타기'] } }, levels: { easy: { state: { at: { '자리에서 기지개 켜기': 0 } } } }, difficulty: 0.15 },
                { prompt: '장소마다 알맞은 몸 움직이기를 하나씩 이어요.', toolOptions: { mode: 'match', topic: '장소와 움직임', slots: [{ id: 'room', label: '교실 안' }, { id: 'yard', label: '운동장' }, { id: 'hall', label: '복도' }], cards: ['자리에서 팔 흔들기', '친구와 공 주고받기', '천천히 걸으며 이동하기'] }, target: { match: { room: '자리에서 팔 흔들기', yard: '친구와 공 주고받기', hall: '천천히 걸으며 이동하기' } }, difficulty: 0.2 },
                { prompt: '쉬는 시간에 움직이는 방법으로 알맞은 카드만 골라요.', toolOptions: { mode: 'pick', topic: '알맞은 방법', cards: ['10분 안에 끝낼 수 있는 가벼운 움직임', '친구와 부딪히지 않을 자리에서 해요', '숨이 너무 차도록 계속 뛰어요', '수업 시간에 다 못 쉴 만큼 오래 해요'] }, target: { pick: ['10분 안에 끝낼 수 있는 가벼운 움직임', '친구와 부딪히지 않을 자리에서 해요'] }, difficulty: 0.25 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 고른 움직임을 해 보고 기분 적기', minutes: 14, tool: 'timer',
              task: '자리를 점검하고, 움직임 차례와 시간을 맞춘 뒤 실제로 해요. 전후 기분을 적고 스스로 점검해요.',
              teacher: '"기지개를 켜면서 어깨가 시원해지는지 느껴 보세요." 대충 빠르게 하는 학생에게 "천천히 숨을 내쉬며 크게"라고 말한다. 기분 점수를 적을 때는 친구와 같은 점수를 쓰지 않아도 된다고 다시 알려 준다.',
              levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
              items: [
                { prompt: '교실 안에서 움직일 자리를 살펴보고 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['책상과 의자 사이가 비어 있어요', '바닥에 가방이나 물건이 없어요', '친구와 부딪히지 않아요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '쉬는 시간 움직임을 하는 차례대로 카드를 놓아요.', toolOptions: { cards: ['움직인 뒤 기분을 적어요', '고른 움직임을 1분 해요', '움직이기 전 기분을 적어요', '물을 마시고 자리에 앉아요'] }, target: { order: ['움직이기 전 기분을 적어요', '고른 움직임을 1분 해요', '움직인 뒤 기분을 적어요', '물을 마시고 자리에 앉아요'] }, levels: { easy: { state: { order: ['움직이기 전 기분을 적어요', '움직인 뒤 기분을 적어요', '고른 움직임을 1분 해요', '물을 마시고 자리에 앉아요'] } } }, difficulty: 0.2 },
                { prompt: '움직이기 전후 기분 점수를 적어요.', toolOptions: { fields: [{ label: '움직이기 전', unit: '점', max: 5 }, { label: '움직인 뒤', unit: '점', max: 5 }] }, target: { records: true }, difficulty: 0.15 },
                { prompt: '쉬는 시간 움직임을 하고 해낸 것을 점검해요.', target: { selfCheck: ['안전한 자리에서 했어요', '10분 안에 끝낼 수 있게 했어요', '전후 기분을 적었어요'] }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"내가 고른 움직임은 무엇이고 해 보니 기분은 어땠나요?" 두세 명이 말하게 한다. 내일 쉬는 시간에도 해 볼 수 있다고 알려 주고 천천히 걸으며 숨을 고르게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'timer', options: { fields: [{ label: '움직이기 전', unit: '점', max: 5 }, { label: '움직인 뒤', unit: '점', max: 5 }] }, prompt: '기분이 움직이기 전 2점, 움직인 뒤 4점이에요. 두 칸에 옮겨 적어요.', target: { records: [2, 4] }, difficulty: 0.1 },
              { type: 'choice', prompt: '복도에서 하기에 알맞은 몸 움직이기는 무엇인가요?', options: ['천천히 걸어 이동해요', '친구와 쫓아 달려요', '난간에 매달려요'], answer: 0, difficulty: 0.15, explain: '복도에서는 부딪히지 않게 천천히 걸어요.' },
              { type: 'mood', prompt: '쉬는 시간 움직임을 해 본 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '쉬는 시간 몸 움직이기',
          items: [
            { type: 'table', prompt: '내가 고른 움직임과 전후 기분을 쓰세요.', columns: ['움직임', '움직이기 전(1~5)', '움직인 뒤(1~5)'], cells: [['', '', '']] },
            { type: 'choice', prompt: '교실에서 안전한 움직임에 ○ 하세요.', options: ['자리에서 기지개 켜기', '책상 위에서 뛰기'], answer: '자리에서 기지개 켜기' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '복도에서는 ___ 걷고 부딪히지 않게 ___ 해요.', answer: '천천히, 조심' },
            { type: 'check', prompt: '오늘 해낸 것에 ✓ 하세요.', options: ['안전한 움직임을 골랐어요', '실제로 해 보았어요', '전후 기분을 적었어요'] },
            { type: 'short', prompt: '내일 쉬는 시간에 할 움직임과 장소를 쓰세요.' },
          ],
          easy: {
            note: '안전한 곳에서 가볍게 움직여요.',
            items: [
              { type: 'choice', prompt: '복도에서는?', options: ['천천히 걸어요', '달려요'], answer: '천천히 걸어요' },
              { type: 'short', prompt: '내가 고른 움직임을 쓰세요.' },
              { type: 'draw', prompt: '쉬는 시간에 움직이는 내 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 맞는 곳에 놓으면 바로 표시되고 첫 카드가 놓여 있어요.',
          base: '모두 놓은 뒤 확인해 스스로 고쳐요.',
          challenge: '움직임을 시간으로 직접 재고, 알맞은 방법과 위험한 방법을 가려내요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 복도·계단에서 뛰는 것을 고른다 → 부딪혀 다칠 수 있다는 점을 짚는다. ② 너무 오래 해서 수업에 늦는다 → 10분 안에 끝낼 수 있는 가벼운 움직임을 고르게 한다. ③ 기분 점수를 친구와 같게 쓴다 → 내 느낌 그대로 적게 한다. 몸으로 하는 활동은 교구가 판정하지 않으므로 교사가 관찰한다.',
      }),
      // ───────────────────────── 23 ─────────────────────────
      L(23, {
        title: '하루 움직임 뒤 기분을 얼굴 눈금으로 남기기',
        objective: '움직임을 한 뒤의 기분과 몸 상태를 얼굴 눈금과 짧은 말로 남기는 방법을 익히고 기록할 수 있다.',
        illustration: art('five paper-cut faces in a row from sad to happy under a small day label with a pencil and a mini notebook, and a child pointing at one face', [
          { motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'cloud', x: 100, y: 48 }, { motif: 'hills', y: 212 },
          { motif: 'star', x: 330, y: 100, s: 0.8 }, { motif: 'flower', x: 70, y: 224 },
          { motif: 'text', x: 240, y: 140, text: '오늘 내 기분은 어느 얼굴?', size: 22 },
        ]),
        safety: [GROUND, SPACE, SIGNAL, STOP],
        stages: stages(
          {
            teacher: '"기분을 말로만 하면 나중에 기억하기 어려워요. 어떻게 남기면 좋을까요?" 그림·숫자·한마디라는 대답을 받는다. "오늘은 얼굴 눈금과 한마디로 남겨 볼 거예요. 우는 얼굴은 1, 활짝 웃는 얼굴은 5예요"라고 척도를 알려 주고 오늘의 연습을 소개한다.',
            student: '기분을 얼굴과 숫자로 남기면 나중에 무엇이 좋을까요? 오늘 움직임 뒤 내 기분을 남겨 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 움직이고 기분을 눈금으로 남기기', minutes: 14, tool: 'emotion',
              task: '짧게 몸을 움직인 뒤 기분을 눈금에서 골라요. 정답은 없어요. 내 느낌 그대로 골라요. 몸의 느낌도 같이 골라요.',
              teacher: '"1은 아주 속상, 5는 아주 기분 좋음이에요. 같은 활동을 해도 눈금이 달라도 괜찮아요." 한 가지 얼굴만 계속 고르는 학생에게는 "지금 다리와 숨은 어때요?"라고 물어 몸의 느낌과 같이 보게 한다.',
              levels: { easy: { steps: 3 }, base: {}, challenge: { steps: 7 } },
              items: [
                { prompt: '제자리에서 가볍게 걷고 난 뒤 내 기분을 골라요.', toolOptions: sc('제자리에서 1분 동안 가볍게 걷고 앉았어요.', '편안함', '내 기분이 좋은 정도를 골라요.'), target: { level: 'any' }, difficulty: 0.05 },
                { prompt: '팔을 크게 흔들고 난 뒤 내 몸이 가벼운 정도를 골라요.', toolOptions: sc('팔을 크게 돌리고 흔들며 어깨를 풀었어요.', '편안함', '몸이 가벼운 정도를 골라요.'), target: { level: 'any' }, difficulty: 0.05 },
                { prompt: '짝과 함께 움직이고 난 뒤 내 즐거운 정도를 골라요.', toolOptions: sc('짝과 마주 보고 같은 동작을 따라 하며 움직였어요.', '신남', '내 즐거운 정도를 골라요.'), target: { level: 'any' }, difficulty: 0.05 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 기록하는 방법과 간단한 한마디 정하기', minutes: 12, tool: 'mindmap',
              task: '좋은 기록 방법을 골라 나누고, 기록 한마디를 만드는 틀에 알맞은 말을 이어요. 마지막에 기록하는 방법을 짝에게 말해요.',
              teacher: '"기분 기록에 숫자만 있으면 나중에 알 수 있을까요?" 어떤 활동을 했는지와 한마디가 함께 있어야 뜻이 있다는 것을 짚는다. "기록하는 것은 귀찮아요"라고 말하는 학생에게 "1분이면 끝나는 기록이에요. 나중에 나를 도와주는 선물이에요"라고 말한다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '기분 기록에 꼭 들어갈 것만 골라요.', toolOptions: { mode: 'pick', topic: '기록에 들어갈 것', cards: ['어떤 활동을 했는지', '얼굴 눈금이나 숫자', '내 느낌 한마디', '친구의 비밀 이야기'] }, target: { pick: ['어떤 활동을 했는지', '얼굴 눈금이나 숫자', '내 느낌 한마디'] }, difficulty: 0.15 },
                { prompt: '기록 한마디를 만드는 틀의 빈 곳에 알맞은 말을 이어요.', toolOptions: { mode: 'match', topic: '한마디 틀', slots: [{ id: 'when', label: '언제' }, { id: 'what', label: '무엇을 했나' }, { id: 'feel', label: '어떤 느낌이었나' }], cards: ['2교시 쉬는 시간에', '팔을 크게 흔들었더니', '어깨가 시원해졌어요'] }, target: { match: { when: '2교시 쉬는 시간에', what: '팔을 크게 흔들었더니', feel: '어깨가 시원해졌어요' } }, levels: { easy: { state: { at: { '2교시 쉬는 시간에': 0 } } } }, difficulty: 0.2 },
                { prompt: '기록 방법을 좋은 기록과 도움 안 되는 기록으로 나누어요.', toolOptions: { topic: '기록 모음', slots: [{ id: 'good', label: '도움이 되는 기록' }, { id: 'weak', label: '도움 안 되는 기록' }], cards: ['날짜·활동·느낌을 함께 적어요', '숫자만 적고 활동은 안 적어요', '그날 바로 적어요', '일주일 뒤에 기억나는 대로 적어요'] }, target: { sort: { good: ['날짜·활동·느낌을 함께 적어요', '그날 바로 적어요'], weak: ['숫자만 적고 활동은 안 적어요', '일주일 뒤에 기억나는 대로 적어요'] } }, difficulty: 0.2,
                  conclude: '기분 기록은 그날 바로, 활동과 느낌과 숫자를 함께 적어야 나중에 도움이 돼요.' },
                { prompt: '기록하는 방법을 짝에게 "언제·무엇을·어떤 느낌" 틀로 말해요.', free: true, talk: true, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"오늘 남긴 기분 기록에는 무엇이 들어 있나요?" 활동·눈금·한마디를 말하게 한다. 내일부터 사흘 동안 쉬는 시간 움직임과 기분을 기록해 본다고 알려 주고, 정리 운동으로 천천히 걸으며 숨을 고르게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '기록 틀', slots: [{ id: 'what', label: '무엇을 했나' }, { id: 'feel', label: '어떤 느낌이었나' }], cards: ['공을 열 번 튀겼더니', '팔이 뻐근했어요'] }, prompt: '기록 한마디의 알맞은 자리를 이어요.', target: { match: { what: '공을 열 번 튀겼더니', feel: '팔이 뻐근했어요' } }, difficulty: 0.15 },
              { type: 'choice', prompt: '나중에 도움이 되는 기분 기록은 어떤 것인가요?', options: ['활동·눈금·느낌이 함께 있는 기록', '숫자만 있는 기록', '기억에 의존하는 기록'], answer: 0, difficulty: 0.15, explain: '활동·눈금·느낌이 함께 있어야 나중에 의미를 알아요.' },
              { type: 'mood', prompt: '내 기분을 얼굴 눈금으로 남겨 본 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '내 기분 기록장',
          items: [
            { type: 'table', prompt: '오늘의 기분 기록을 쓰세요.', columns: ['언제', '한 움직임', '얼굴 눈금(1~5)', '한마디'], cells: [['', '', '', '']] },
            { type: 'choice', prompt: '기록에 꼭 들어갈 것에 ○ 하세요.', options: ['활동·눈금·느낌', '숫자만'], answer: '활동·눈금·느낌' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '기록은 그날 ___ 하고 활동과 ___을 함께 적어요.', answer: '바로, 느낌' },
            { type: 'check', prompt: '오늘 해낸 것에 ✓ 하세요.', options: ['움직이고 기분을 눈금으로 골랐어요', '한마디를 만들었어요', '기록 방법을 말했어요'] },
            { type: 'short', prompt: '내 기분 한마디를 "언제, 무엇을, 어떤 느낌" 순서로 쓰세요.' },
          ],
          easy: {
            note: '1은 속상, 5는 아주 좋음이에요.',
            items: [
              { type: 'choice', prompt: '기분 기록은 언제 적나요?', options: ['그날 바로', '한참 뒤'], answer: '그날 바로' },
              { type: 'short', prompt: '오늘 기분 한마디를 쓰세요.' },
              { type: 'draw', prompt: '오늘 내 기분 얼굴을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '눈금은 세 칸이고 카드는 첫 카드가 놓여 있어요.',
          base: '눈금은 다섯 칸이고 모두 놓은 뒤 확인해요.',
          challenge: '눈금이 일곱 칸이고, 도움이 되는 기록과 안 되는 기록을 직접 가려내요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 숫자만 쓰고 활동을 빼놓는다 → 틀의 세 칸을 모두 채우게 한다. ② 친구와 같은 얼굴을 고른다 → 내 느낌 그대로 고르게 한다. ③ 기록이 귀찮다고 느낀다 → 1분이면 끝나는 짧은 기록임을 알려 준다.',
      }),
      // ───────────────────────── 24 ─────────────────────────
      L(24, {
        title: '5분 움직임도 건강에 보탬이 될까? 사흘 실험 짜기',
        objective: '짧은 움직임이 건강에 도움이 되는지 알아보기 위해 하는 날과 하지 않는 날을 견주는 사흘 실험을 계획하고 맛보기로 해 볼 수 있다.',
        illustration: art('a small experiment board with two columns labeled moved days and rested days, a stopwatch for five minutes, and a child placing face stickers on the board', [
          { motif: 'sun', x: 62, y: 52, s: 0.7 }, { motif: 'cloud', x: 390, y: 48 }, { motif: 'hills', y: 212 },
          { motif: 'house', x: 410, y: 214, s: 0.8 }, { motif: 'star', x: 330, y: 100, s: 0.8 },
          { motif: 'text', x: 240, y: 126, text: '짧아도 보탬이 될까?', size: 24 },
        ]),
        safety: [GROUND, SPACE, SIGNAL, STOP],
        stages: stages(
          {
            teacher: '"하루에 5분 움직이는 것은 너무 짧아서 건강과 상관없을까요?" 짐작을 손으로 표시하게 한다. "그럼 어떻게 알아볼 수 있을까요?"라고 되묻고, 움직인 날과 움직이지 않은 날을 사흘 동안 견주어 보는 실험을 소개한다. 오늘은 실험 계획을 세우고 맛보기를 한다고 알려 준다.',
            student: '하루 5분 움직임이 건강에 보탬이 되는지 어떻게 알아볼 수 있을까요? 실험 계획을 세워 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 공정한 사흘 실험의 조건 정하기', minutes: 12, tool: 'mindmap',
              task: '실험 계획에서 같게 할 것과 다르게 할 것을 나누고, 알맞은 계획만 골라요. 짧은 움직임에 대한 오해도 바로잡아요.',
              teacher: '"움직인 날에는 일찍 자고 움직이지 않은 날에는 늦게 자면 공정할까요?" 잠도 달라서 움직임의 영향인지 알 수 없다는 것을 짚는다. "짧으면 소용없어요"라고 말하는 학생에게 "하루 두 번 양치도 짧은데 소용없을까요?"라고 되묻는다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '사흘 실험에서 같게 할 것과 다르게 할 것으로 나누어요.', toolOptions: { topic: '실험 조건', slots: [{ id: 'same', label: '같게 해요' }, { id: 'diff', label: '다르게 해요' }], cards: ['자는 시간', '먹는 시간', '5분 움직이기를 하는지', '움직임을 기록하는 방법'] }, target: { sort: { same: ['자는 시간', '먹는 시간', '움직임을 기록하는 방법'], diff: ['5분 움직이기를 하는지'] } }, levels: { easy: { state: { at: { '자는 시간': 0 } } } }, difficulty: 0.2 },
                { prompt: '믿을 만한 사흘 실험 계획만 골라요.', toolOptions: { mode: 'pick', topic: '알맞은 계획', cards: ['움직인 날과 안 움직인 날을 번갈아 정해요', '기분은 같은 시각에 같은 눈금으로 적어요', '움직인 날만 기분 좋은 일을 골라 적어요', '친구에게 점수를 대신 적어 달라고 해요'] }, target: { pick: ['움직인 날과 안 움직인 날을 번갈아 정해요', '기분은 같은 시각에 같은 눈금으로 적어요'] }, difficulty: 0.25,
                  predict: { q: '5분 움직임은 너무 짧아서 건강과 상관없을까요?', options: ['상관없어요', '실험해 봐야 알아요'], answer: 1 },
                  conclude: '짧은 움직임도 쌓이면 달라질 수 있어요. 짐작만 하지 말고 같은 조건으로 견주어 확인해요.' },
                { prompt: '실험의 한 단계와 그 단계에서 하는 일을 이어요.', toolOptions: { mode: 'match', topic: '실험 단계', slots: [{ id: 'q', label: '궁금한 것 정하기' }, { id: 'do', label: '실험하기' }, { id: 'rec', label: '기록하기' }], cards: ['5분 움직임이 기분을 바꿀까?', '정해진 날에 5분씩 움직여요', '날마다 기분 눈금과 한마디를 적어요'] }, target: { match: { q: '5분 움직임이 기분을 바꿀까?', do: '정해진 날에 5분씩 움직여요', rec: '날마다 기분 눈금과 한마디를 적어요' } }, difficulty: 0.2 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 맛보기 움직임과 기록 연습하기', minutes: 14, tool: 'timer',
              task: '실험 날 움직임의 시간과 차례를 맞추고, 가상 기록을 옮겨 적어요. 내 실험 계획을 스스로 점검해요.',
              teacher: '"하루 5분은 1분 하고 30초 쉬기를 세 번이면 돼요." 계획 시간을 정확히 맞추었는지 확인한다. 기록을 옮겨 적을 때는 한 칸씩 짚으며 읽게 하고, 틀리게 적은 학생에게 "이 숫자는 어느 날 것이지요?"라고 묻는다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '맛보기 움직임을 하기 전에 자리를 살펴보고 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['움직일 자리가 편평해요', '친구와 부딪히지 않아요', '아프면 멈추기로 약속했어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '실험 날 움직임을 1분 하고 30초 쉬기를 3번 하도록 타이머를 맞추어요.', toolOptions: { plan: { work: 30, rest: 15, rounds: 2 }, workStep: 10, restStep: 5 }, target: { plan: { work: 60, rest: 30, rounds: 3 } }, difficulty: 0.2 },
                { prompt: '실험하는 차례대로 카드를 놓아요.', toolOptions: { cards: ['움직인 날과 아닌 날의 기분을 견주어요', '정해진 날에 5분 움직여요', '날마다 기분을 적어요', '실험할 날을 번갈아 정해요'] }, target: { order: ['실험할 날을 번갈아 정해요', '정해진 날에 5분 움직여요', '날마다 기분을 적어요', '움직인 날과 아닌 날의 기분을 견주어요'] }, levels: { easy: { state: { order: ['실험할 날을 번갈아 정해요', '날마다 기분을 적어요', '정해진 날에 5분 움직여요', '움직인 날과 아닌 날의 기분을 견주어요'] } } }, difficulty: 0.25 },
                { prompt: '하은이의 사흘 기록이에요. 움직인 날 5점, 쉰 날 3점, 움직인 날 4점을 옮겨 적어요.', toolOptions: { fields: [{ label: '첫째 날(움직임)', unit: '점', max: 5 }, { label: '둘째 날(쉼)', unit: '점', max: 5 }, { label: '셋째 날(움직임)', unit: '점', max: 5 }] }, target: { records: [5, 3, 4] }, difficulty: 0.1 },
                { prompt: '내 사흘 실험 계획을 점검 목록에 표시해요.', target: { selfCheck: ['같게 할 것과 다르게 할 것을 나누었어요', '날마다 기분을 적을 시각을 정했어요', '실험 날을 번갈아 정했어요'] }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"내 실험에서 가장 중요하다고 생각하는 약속은 무엇인가요?" 같은 조건으로 견주기라는 대답을 끌어낸다. 사흘 기록은 다음 시간에 함께 읽는다고 알려 주고 천천히 걸으며 숨을 고르게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'timer', options: { fields: [{ label: '움직인 날', unit: '점', max: 5 }, { label: '쉰 날', unit: '점', max: 5 }] }, prompt: '준호의 기록이에요. 움직인 날 4점, 쉰 날 2점이에요. 두 칸에 옮겨 적어요.', target: { records: [4, 2] }, difficulty: 0.1 },
              { type: 'choice', prompt: '움직임이 기분을 바꾸는지 알아볼 때 알맞은 방법은?', options: ['움직인 날과 아닌 날을 같은 조건으로 견줘요', '움직인 날만 적어요', '짐작으로 정해요'], answer: 0, difficulty: 0.2, explain: '같은 조건으로 견주어야 움직임의 영향을 알 수 있어요.' },
              { type: 'mood', prompt: '실험을 계획해 본 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '사흘 실험 계획',
          items: [
            { type: 'table', prompt: '사흘 계획을 쓰세요.', columns: ['날', '움직이나요(○/×)', '기분(1~5)', '한마디'], cells: [['첫째 날', '', '', ''], ['둘째 날', '', '', ''], ['셋째 날', '', '', '']] },
            { type: 'choice', prompt: '같게 해야 하는 것에 ○ 하세요.', options: ['자는 시간', '움직이는 날'], answer: '자는 시간' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '짧은 움직임이 도움이 되는지는 같은 ___으로 움직인 날과 아닌 날을 ___해 알아봐요.', answer: '조건, 견주어' },
            { type: 'check', prompt: '내 계획에 ✓ 하세요.', options: ['같게 할 것을 정했어요', '기록할 시각을 정했어요', '실험 날을 번갈아 정했어요'] },
            { type: 'short', prompt: '내가 알아보고 싶은 것을 한 문장으로 쓰세요.' },
          ],
          easy: {
            note: '같은 조건으로 견주어요.',
            items: [
              { type: 'choice', prompt: '실험에서 같게 할 것은?', options: ['자는 시간', '움직이는 날'], answer: '자는 시간' },
              { type: 'short', prompt: '내가 해 볼 5분 움직임을 쓰세요.' },
              { type: 'draw', prompt: '실험을 하는 내 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 맞는 곳에 놓으면 바로 표시되고 첫 카드가 놓여 있어요.',
          base: '모두 놓은 뒤 확인해 스스로 고쳐요.',
          challenge: '실험 계획의 틀린 점을 스스로 가려내고, 기록 숫자를 옮겨 적어요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 짧은 움직임은 소용없다고 여긴다 → 짐작이 아니라 실험으로 확인하자고 말한다. ② 움직인 날만 좋은 기록을 고른다 → 같은 시각에 같은 눈금으로 적는 약속을 정한다. ③ 날마다 조건이 달라 견줄 수 없다 → 잠·밥 시간을 같게 하는 이유를 물어 짚는다. 몸으로 하는 활동은 교구가 판정하지 않으므로 교사가 관찰한다.',
      }),
      // ───────────────────────── 25 ─────────────────────────
      L(25, {
        title: '사흘 기분 기록을 읽고 움직임의 영향 짚기',
        objective: '사흘 동안 남긴 기분 기록을 읽고 움직인 날과 아닌 날의 차이를 근거로 들어 움직임이 기분에 준 영향을 말할 수 있다.',
        illustration: art('a child reading a three day mood record with stickers while pointing at the day with the biggest smile beside a magnifier and a small calendar', [
          { motif: 'sun', x: 410, y: 54, s: 0.8 }, { motif: 'cloud', x: 100, y: 50 }, { motif: 'hills', y: 212 },
          { motif: 'house', x: 70, y: 214, s: 0.8 }, { motif: 'flower', x: 430, y: 224 },
          { motif: 'text', x: 240, y: 126, text: '기록을 읽으면 보여요', size: 24 },
        ]),
        safety: [GROUND, SPACE, SIGNAL, STOP],
        stages: stages(
          {
            teacher: '"사흘 동안 기분을 적어 보았지요? 가장 기분이 좋았던 날은 언제였나요?" 몇 명이 말하게 한 뒤 "그날 몸을 움직였나요?"라고 묻는다. 기록이 없는 학생을 위해 가상 기록(첫째 날 움직임 5점, 둘째 날 쉼 3점, 셋째 날 움직임 4점)을 칠판에 둔다. 오늘은 기록을 읽고 근거를 들어 말한다고 알려 준다.',
            student: '내 사흘 기록(또는 가상 기록)에서 움직인 날과 아닌 날은 어떻게 달랐나요?',
          },
          [
            {
              id: 'a1', title: '활동 1. 기록 숫자 옮겨 적고 차이 읽기', minutes: 12, tool: 'timer',
              task: '가상 기록을 옮겨 적고 읽는 차례를 맞춰요. 내 기록을 읽을 방법을 스스로 점검해요.',
              teacher: '"움직인 날과 아닌 날의 점수 차이가 얼마나 되나요?" 큰 수에서 작은 수를 빼는 계산을 같이 말하게 한다. 기록이 달라도 괜찮다고 알려 주고, 기록이 비어 있는 학생에게는 가상 기록으로 연습하게 한다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '기록을 읽는 차례대로 카드를 놓아요.', toolOptions: { cards: ['점수 차이를 한 문장으로 말해요', '날마다 점수와 움직임을 짝지어요', '움직인 날의 점수를 모아 읽어요', '움직이지 않은 날의 점수를 읽어요'] }, target: { order: ['날마다 점수와 움직임을 짝지어요', '움직인 날의 점수를 모아 읽어요', '움직이지 않은 날의 점수를 읽어요', '점수 차이를 한 문장으로 말해요'] }, levels: { easy: { state: { order: ['날마다 점수와 움직임을 짝지어요', '움직이지 않은 날의 점수를 읽어요', '움직인 날의 점수를 모아 읽어요', '점수 차이를 한 문장으로 말해요'] } } }, difficulty: 0.2 },
                { prompt: '민지의 사흘 기록이에요. 움직인 날 4점, 쉰 날 2점, 움직인 날 5점을 옮겨 적어요.', toolOptions: { fields: [{ label: '첫째 날(움직임)', unit: '점', max: 5 }, { label: '둘째 날(쉼)', unit: '점', max: 5 }, { label: '셋째 날(움직임)', unit: '점', max: 5 }] }, target: { records: [4, 2, 5] }, difficulty: 0.1 },
                { prompt: '준호의 사흘 기록이에요. 쉰 날 3점, 움직인 날 3점, 쉰 날 2점을 옮겨 적어요.', toolOptions: { fields: [{ label: '첫째 날(쉼)', unit: '점', max: 5 }, { label: '둘째 날(움직임)', unit: '점', max: 5 }, { label: '셋째 날(쉼)', unit: '점', max: 5 }] }, target: { records: [3, 3, 2] }, difficulty: 0.15 },
                { prompt: '기록 읽기를 하고 해낸 것을 점검 목록에 표시해요.', target: { selfCheck: ['숫자와 움직인 날을 짝지었어요', '두 날의 점수를 견주었어요', '차이를 한 문장으로 말했어요'] }, difficulty: 0.1 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 기록 근거로 영향 말하기', minutes: 14, tool: 'mindmap',
              task: '기록으로 말할 수 있는 영향만 골라 나누고, 기록이 비슷한 친구에게 할 말을 이어요. 마지막에 영향을 짝에게 말해요.',
              teacher: '"준호는 움직인 날이나 쉰 날이나 기분이 비슷해요. 움직임이 소용없다는 뜻일까요?" 사흘이라 짧을 수 있고 사람마다 다를 수 있다고 알려 준다. 근거 없이 "좋아졌어요"라고만 말하는 학생에게 "어느 날 점수를 보고 그렇게 말하나요?"라고 되묻는다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '기록으로 말할 수 있는 말만 골라요.', toolOptions: { mode: 'pick', topic: '기록으로 말하기', cards: ['움직인 날 점수가 쉰 날보다 높았어요', '사흘 기록이라 더 해 보아야 해요', '움직이면 누구나 기분이 꼭 좋아져요', '내 기록이 틀렸어요'] }, target: { pick: ['움직인 날 점수가 쉰 날보다 높았어요', '사흘 기록이라 더 해 보아야 해요'] }, difficulty: 0.2 },
                { prompt: '움직인 날과 쉰 날의 기록 모습을 나누어요.', toolOptions: { topic: '기록 모습', slots: [{ id: 'move', label: '움직인 날' }, { id: 'rest', label: '쉰 날' }], cards: ['기분 5점, 몸이 가벼웠어요', '기분 4점, 땀이 났어요', '기분 2점, 몸이 무거웠어요', '기분 3점, 졸렸어요'] }, target: { sort: { move: ['기분 5점, 몸이 가벼웠어요', '기분 4점, 땀이 났어요'], rest: ['기분 2점, 몸이 무거웠어요', '기분 3점, 졸렸어요'] } }, levels: { easy: { state: { at: { '기분 5점, 몸이 가벼웠어요': 0 } } } }, difficulty: 0.2 },
                { prompt: '기록이 비슷한 친구에게 할 알맞은 말을 이어요.', toolOptions: { mode: 'match', topic: '친구에게 할 말', slots: [{ id: 'same', label: '움직인 날도 쉰 날도 점수가 비슷해요' }, { id: 'sad', label: '내 기록이 친구와 달라 속상해요' }], cards: ['더 많은 날 기록하면 알 수 있을 거야', '사람마다 달라서 네 기록도 소중해'] }, target: { match: { same: '더 많은 날 기록하면 알 수 있을 거야', sad: '사람마다 달라서 네 기록도 소중해' } }, difficulty: 0.25,
                  predict: { q: '움직이면 누구나 똑같이 기분이 좋아질까요?', options: ['누구나 똑같아요', '사람마다 달라요'], answer: 1 },
                  conclude: '움직임이 기분에 주는 영향은 사람마다 다를 수 있어요. 내 기록을 근거로 말하고 더 모아 보면 알 수 있어요.' },
                { prompt: '내 기록에서 움직임이 기분에 준 영향을 근거를 넣어 짝에게 말해요.', free: true, talk: true, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"움직인 날과 아닌 날의 점수를 넣어서 한 문장으로 말해 볼까요?" "움직인 날은 ○점, 쉰 날은 ○점이어서 ○○했어요" 틀로 두세 명이 말하게 한다. 정리 운동으로 천천히 걸으며 숨을 고르게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'timer', options: { fields: [{ label: '움직인 날', unit: '점', max: 5 }, { label: '쉰 날', unit: '점', max: 5 }] }, prompt: '하은이의 기록이에요. 움직인 날 5점, 쉰 날 1점이에요. 두 칸에 옮겨 적어요.', target: { records: [5, 1] }, difficulty: 0.1 },
              { type: 'choice', prompt: '내 기록으로 영향을 말할 때 꼭 들어갈 것은?', options: ['날마다의 점수 근거', '친구의 기분', '날씨 예측'], answer: 0, difficulty: 0.15, explain: '점수 같은 기록의 근거를 넣어야 믿을 만해요.' },
              { type: 'mood', prompt: '기록을 읽어 본 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '사흘 기록 읽기',
          items: [
            { type: 'table', prompt: '내 사흘 기록을 옮겨 적고 차이를 쓰세요.', columns: ['날', '움직였나요', '기분(1~5)', '점수 차이'], cells: [['첫째 날', '', '', ''], ['둘째 날', '', '', ''], ['셋째 날', '', '', '']] },
            { type: 'choice', prompt: '기록으로 말할 수 있는 말에 ○ 하세요.', options: ['움직인 날 점수가 더 높았어요', '움직이면 누구나 꼭 좋아져요'], answer: '움직인 날 점수가 더 높았어요' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '움직임의 영향은 사람마다 ___ 수 있으니 내 ___를 근거로 말해요.', answer: '다를, 기록' },
            { type: 'check', prompt: '오늘 해낸 것에 ✓ 하세요.', options: ['기록 숫자를 짝지었어요', '두 날을 견주었어요', '근거를 넣어 말했어요'] },
            { type: 'short', prompt: '내 기록에서 움직임이 기분에 준 영향을 근거와 함께 쓰세요.' },
          ],
          easy: {
            note: '점수를 근거로 말해요.',
            items: [
              { type: 'choice', prompt: '움직인 날 점수가 높으면?', options: ['기분이 좋았다는 뜻이에요', '기분이 나빴다는 뜻이에요'], answer: '기분이 좋았다는 뜻이에요' },
              { type: 'short', prompt: '내 기록 점수 하나를 쓰세요.' },
              { type: 'draw', prompt: '움직인 날의 내 얼굴을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 맞는 곳에 놓으면 바로 표시되고 첫 카드가 놓여 있어요. 기록은 세 칸이에요.',
          base: '모두 놓은 뒤 확인해 스스로 고쳐요.',
          challenge: '기록이 비슷한 경우와 다른 경우를 함께 보고 근거를 들어 말해요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 기록이 비슷하면 움직임이 소용없다고 여긴다 → 사흘은 짧을 수 있다고 말한다. ② 기록이 없는 학생이 말을 못한다 → 가상 기록으로 읽기 연습을 한다. ③ 근거 없이 느낌만 말한다 → 점수를 한 문장에 꼭 넣게 한다.',
      }),
      // ───────────────────────── 26 ─────────────────────────
      L(26, {
        title: '친구 기록과 견주어 다른 점 찾고 단원 돌아보기',
        objective: '같은 활동인데 친구와 느낌이 달랐던 까닭을 찾아 말하고, 단원에서 배운 운동과 체력, 건강의 관계를 정리할 수 있다.',
        illustration: art('two children placing their record cards side by side on a table with a magnifier, and a small shelf of unit cards labeled fitness, exercise, and health behind them', [
          { motif: 'sun', x: 410, y: 52, s: 0.8 }, { motif: 'cloud', x: 90, y: 50 }, { motif: 'hills', y: 212 },
          { motif: 'tree', x: 60, y: 212 }, { motif: 'flower', x: 430, y: 224 },
          { motif: 'text', x: 240, y: 124, text: '같은 활동, 다른 느낌', size: 24 },
        ]),
        safety: [GROUND, SPACE, SIGNAL, STOP],
        stages: stages(
          {
            teacher: '"같은 5분 움직임을 했는데 하은이는 5점, 준호는 3점이에요. 둘 중 한 사람 기록이 틀린 걸까요?" 짐작을 말하게 한 뒤 "같은 활동도 몸 상태나 마음이 다르면 느낌이 달라요. 오늘은 그 까닭을 찾아보고, 단원에서 배운 것을 정리해요"라고 알려 준다.',
            student: '같은 활동인데 친구와 느낌이 다르면 누구 기록이 틀린 걸까요? 까닭을 찾아봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 느낌이 달랐던 까닭 찾기와 단원 정리', minutes: 14, tool: 'mindmap',
              task: '느낌이 달랐던 까닭을 알맞게 고르고, 친구 기록을 대하는 말을 이어요. 단원에서 배운 것을 운동과 체력·운동 방법·건강 가지로 나누어요.',
              teacher: '"친구와 기록이 다르면 내 기록이 틀린 걸까요?" 사람마다 몸 상태·그날 마음이 달라 틀린 것이 아니라 다른 것임을 짚는다. 단원 정리에서 "한 가지만 기억한다면 무엇을 기억할래요?"라고 묻고 학생이 고른 카드를 짚게 한다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '같은 활동인데 느낌이 달랐던 까닭이 될 수 있는 것만 골라요.', toolOptions: { mode: 'pick', topic: '달랐던 까닭', cards: ['그날 몸 상태가 달랐어요', '활동하기 전 기분이 달랐어요', '한 사람의 기록이 반드시 틀렸어요', '친구는 거짓말을 했어요'] }, target: { pick: ['그날 몸 상태가 달랐어요', '활동하기 전 기분이 달랐어요'] }, difficulty: 0.2 },
                { prompt: '친구 기록을 대하는 알맞은 말과 상황을 이어요.', toolOptions: { mode: 'match', topic: '친구 기록 대하기', slots: [{ id: 'diff', label: '친구 기록이 나와 달라요' }, { id: 'low', label: '친구 기록이 나보다 낮아요' }], cards: ['"그날은 몸 상태가 달랐나 봐"라고 물어봐요', '"기록은 사람마다 달라"라고 말해 줘요'] }, target: { match: { diff: '"그날은 몸 상태가 달랐나 봐"라고 물어봐요', low: '"기록은 사람마다 달라"라고 말해 줘요' } }, difficulty: 0.2 },
                { prompt: '단원에서 배운 것을 운동과 체력·운동 방법·건강 가지로 나누어요.', toolOptions: { topic: '단원 정리', slots: [{ id: 'fit', label: '운동과 체력', sub: '몸의 변화·체력의 모습' }, { id: 'way', label: '운동 방법', sub: '준비·본·정리, 내 횟수' }, { id: 'health', label: '운동과 건강', sub: '몸·마음·친구' }], cards: ['운동하면 숨과 맥박이 빨라져요', '준비 운동은 몸을 데워 줘요', '마음이 편안한 것도 건강이에요', '힘·버티기·구부리기·재빠름', '내 몸에 맞는 횟수를 정해요', '움직이면 기분이 좋아지는 경우가 많아요'] }, target: { sort: { fit: ['운동하면 숨과 맥박이 빨라져요', '힘·버티기·구부리기·재빠름'], way: ['준비 운동은 몸을 데워 줘요', '내 몸에 맞는 횟수를 정해요'], health: ['마음이 편안한 것도 건강이에요', '움직이면 기분이 좋아지는 경우가 많아요'] } }, levels: { easy: { state: { at: { '운동하면 숨과 맥박이 빨라져요': 0 } } } }, difficulty: 0.25,
                  predict: { q: '친구와 기록이 다르면 내 기록이 틀린 걸까요?', options: ['틀렸어요', '틀린 게 아니라 달라요'], answer: 1 },
                  conclude: '기록은 틀린 것이 아니라 사람마다 다른 것이에요. 단원에서 배운 것을 모으면 운동과 체력, 건강은 서로 이어져 있어요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 내 자신감 눈금으로 돌아보고 말하기', minutes: 12, tool: 'emotion',
              task: '단원을 마치며 내 마음을 눈금으로 골라요. 정답은 없어요. 내 마음 그대로 골라요. 마지막에 다음에 해 보고 싶은 것을 짝에게 말해요.',
              teacher: '"친구와 같은 눈금을 고르지 않아도 괜찮아요. 내 마음을 정직하게 골라 보세요." 가장 작은 눈금을 고른 학생에게 "무엇이 가장 어려웠나요?"라고 물어 다음 시간의 실마리로 삼는다. 말하기에서는 "나는 ○○을 해 보고 싶어요, 왜냐하면 ○○이기 때문이에요"를 쓰게 한다.',
              levels: { easy: { steps: 3 }, base: {}, challenge: { steps: 7 } },
              items: [
                { prompt: '내 몸에 맞게 운동 횟수를 정하는 일이 얼마나 자신 있나요?', toolOptions: sc('단원에서 내 몸에 맞는 횟수를 정해 운동해 보았어요.', '뿌듯함', '내 자신감의 크기를 골라요.'), target: { level: 'any' }, difficulty: 0.05 },
                { prompt: '준비 운동과 정리 운동을 스스로 챙기는 일에 얼마나 자신 있나요?', toolOptions: sc('운동을 시작하고 마칠 때 준비 운동과 정리 운동을 해 보았어요.', '뿌듯함', '내 자신감의 크기를 골라요.'), target: { level: 'any' }, difficulty: 0.05 },
                { prompt: '쉬는 시간에도 몸을 움직여 기분을 챙기는 일을 얼마나 해 보고 싶나요?', toolOptions: sc('쉬는 시간에 가볍게 움직이며 기분을 기록해 보았어요.', '신남', '해 보고 싶은 마음의 크기를 골라요.'), target: { level: 'any' }, difficulty: 0.05 },
                { prompt: '다음에 해 보고 싶은 것을 "나는 ○○을 해 보고 싶어요, 왜냐하면" 틀로 짝에게 말해요.', free: true, talk: true, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"이 단원에서 가장 기억에 남는 한 가지는 무엇인가요?" 몸의 변화·준비 운동·내 횟수·건강의 여러 모습 가운데 자기 말로 말하게 한다. 도입에서 던진 "친구와 다르면 틀린 걸까?"에 다시 답하게 한다. 정리 운동으로 천천히 걸으며 숨을 고르고 물을 마시게 한다.',
            exitTicket: [
              { type: 'short', prompt: '이 단원에서 배운 것 중 가장 기억에 남는 한 가지를 쓰세요.' },
              { type: 'choice', prompt: '친구와 기록이 다를 때 알맞은 생각은 무엇인가요?', options: ['기록은 사람마다 달라서 틀린 것이 아니에요', '내 기록이 틀린 거예요', '친구 기록을 따라 써야 해요'], answer: 0, difficulty: 0.15, explain: '몸 상태와 마음이 달라 기록이 다를 수 있어요.' },
              { type: 'mood', prompt: '운동 단원을 마친 지금 마음은 어떤가요?' },
            ],
          },
        ),
        worksheet: {
          title: '운동 단원 돌아보기',
          items: [
            { type: 'table', prompt: '단원에서 배운 것을 가지마다 하나씩 쓰세요.', columns: ['운동과 체력', '운동 방법', '운동과 건강'], rows: 1 },
            { type: 'table', prompt: '친구 기록과 견주어 쓰세요.', columns: ['내 점수', '친구 점수', '달랐던 까닭'], rows: 1 },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '기록이 달라도 틀린 것이 아니라 ___마다 ___ 때문이에요.', answer: '사람, 다르기' },
            { type: 'short', prompt: '이 단원에서 내가 가장 자랐다고 느낀 것과 그 까닭을 쓰세요.' },
            { type: 'short', prompt: '다음에 더 해 보고 싶은 운동을 쓰세요.' },
          ],
          easy: {
            note: '운동과 체력 · 운동 방법 · 건강',
            items: [
              { type: 'choice', prompt: '준비 운동은 언제 하나요?', options: ['본 운동 전에', '본 운동 뒤에'], answer: '본 운동 전에' },
              { type: 'short', prompt: '단원에서 가장 재미있었던 활동을 쓰세요.' },
              { type: 'draw', prompt: '운동 단원에서 가장 기억에 남는 내 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 맞는 곳에 놓으면 바로 표시되고 눈금은 세 칸이에요.',
          base: '단원 정리를 스스로 하고 다섯 칸 눈금으로 돌아봐요.',
          challenge: '눈금이 일곱 칸이고, 짝에게 말할 때 활동지의 기록 하나를 근거로 들어요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 친구와 기록이 다르면 틀렸다고 여긴다 → 몸 상태와 기분이 달라서 다른 것임을 말한다. ② 눈금을 친구와 같게 고른다 → 정답이 없음을 다시 말한다. ③ 단원 정리에서 어떤 가지에 넣을지 모른다 → 단원 활동지를 펼쳐 찾아보게 한다.',
      }),
    ],
  });
})();
