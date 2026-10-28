/* 3학년 1학기 체육 2. 스포츠 — 43차시.
 * 몸으로 하는 활동(달리기·던지기·구르기·꼬리 빼앗기·표지 찾기)은 교구가 판정하지 않는다. 교구는 나누기(갈래·움직임 기술·움직임 요소)·차례(동작 단계·수업 흐름)·
 * 계획(구간 타이머)·기록·안전 점검·판단(경기 예절·고칠 방법)과 스스로 점검을 맡고, 실제 움직임은 task·teacher·짝 활동(free)·활동지에 적어 교사가 관찰한다.
 * 스포츠 갈래: 기술형 = 자기 기록·동작·과녁 맞히기를 겨룸, 전략형 = 상대와 작전으로 겨룸, 생태형 = 자연 환경 속에서 환경과 어울리며 도전함.
 * 기본 움직임: 이동(걷기·달리기·뛰기·미끄러지기·기어가기) · 비이동(굽히기·펴기·비틀기·균형 잡기·흔들기) · 조작(던지기·받기·차기·치기·튀기기·굴리기).
 */
(function () {
  const UNIT = 'g3-pe-1-02';
  const CU = 'g3-체육-1학기-2';
  const BASE = { schema: 'edu-lesson.v1', grade: 3, subject: '체육', unitTitle: '2. 스포츠', minutes: 40, formats: ['chromebook', 'projector', 'print'] };
  // 체육은 units-map.json 에 없어 units-index.json 의 단원 성취기준 다섯 개 안에서 카탈로그 주제 코드대로 고른다.
  // 1~9 스포츠의 의미와 유형(01) · 10~18 기본 움직임 기술(02) · 19~26 기술형 스포츠의 기본 움직임(05) · 27~35 움직임 요소(03) · 36~43 복합 움직임(04)
  const stdOf = (n) => (n <= 9 ? '[4체02-01]' : n <= 18 ? '[4체02-02]' : n <= 26 ? '[4체02-05]' : n <= 35 ? '[4체02-03]' : '[4체02-04]');
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
  // 안전 약속(차시마다 골라 쓴다)
  const SPACE = '친구와 두 팔을 벌려 닿지 않을 만큼 떨어져서 움직여요.';
  const GROUND = '운동장에 돌·깨진 물건·물웅덩이가 없는지 먼저 살펴요.';
  const SHOE = '신발 끈을 단단히 묶고, 실내화를 꺾어 신지 않아요.';
  const STOP = '어지럽거나 숨이 너무 차면 바로 멈추고 선생님께 말해요.';
  const SIGNAL = '호루라기 신호를 들으면 하던 것을 멈추고 선생님을 봐요.';
  const THROW = '던지기는 정해진 줄 뒤에서, 앞에 아무도 없을 때만 해요. 줍는 것은 모두 던진 뒤 신호를 듣고 해요.';
  const TAG = '꼬리·조끼를 잡을 때는 몸을 밀거나 옷을 당기지 않아요.';
  const MAT = '매트 둘레를 비우고, 한 사람이 끝까지 일어난 뒤에 다음 사람이 해요.';
  const OUT = '정해진 구역 밖으로 나가지 않고, 짝과 늘 함께 다녀요.';
  const WATER = '쉬는 시간마다 물을 마시고, 더운 날에는 그늘에서 쉬어요.';
  const LOOK = '방향을 바꿀 때는 가는 쪽을 먼저 보고, 속도를 줄인 뒤 돌아요.';

  PaperLessons.registerUnit({
    id: UNIT, schema: 'edu-unit.v1', catalogUnit: CU,
    grade: 3, subject: '체육', unitTitle: '2. 스포츠',
    flow: '1~9차시는 놀이와 스포츠를 견주어 규칙과 겨루기를 찾고, 겨루는 방법에 따라 기술형·전략형·생태형으로 나눈 뒤, 갈래마다 짧은 놀이(과녁 던지기·꼬리 빼앗기·숲 표지 찾기)를 해 보고 더 해 보고 싶은 갈래와 다음에 바꿀 점을 돌아봅니다. 10~18차시는 스포츠 장면에 섞여 나오는 움직임을 이동·비이동·조작으로 나누고, 세 갈래 움직임을 이어 해 보며 내게 어려운 갈래를 골라 연습 계획과 기록으로 이어 갑니다. 19~26차시는 기술형 스포츠의 기본 움직임으로 앞구르기·옆돌기의 손발 닿는 차례와 20m 달리기 기록 재기를 익히고 지난 기록·동작과 견주어 고칠 곳을 정합니다. 27~35차시는 같은 움직임을 빠르기·방향·높낮이·힘을 바꾸어 다르게 만들고, 짝·모둠과 공간을 나누어 부딪히지 않게 움직이며 잘된 까닭을 찾아 다시 해 봅니다. 36~43차시는 달리기와 던지기·받기 같은 두 기술을 멈춤 없이 잇고 놀이 상황에서 써 본 뒤, 끊긴 곳을 찾아 그 부분만 연습하고 단원을 돌아봅니다. 교구는 나누기·차례·계획·기록·판단을 맡고, 실제 움직임은 교사가 운동장·강당에서 관찰합니다.',
    refs: {},
    lessons: [
      // ───────────────────────── 1 ─────────────────────────
      L(1, {
        title: '놀이와 스포츠를 견주며 스포츠 약속 세우기',
        objective: '여러 신체 활동 가운데 규칙에 따라 겨루는 스포츠를 골라내고, 고른 까닭을 규칙과 겨루기를 들어 말할 수 있다.',
        illustration: art('children on a school field, some playing freely on swings and others playing a ball game with lines and a referee whistle', [
          { motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'cloud', x: 100, y: 50 }, { motif: 'hills', y: 210 },
          { motif: 'tree', x: 70, y: 212 }, { motif: 'house', x: 410, y: 214, s: 0.9 },
          { motif: 'text', x: 240, y: 130, text: '놀이일까, 스포츠일까?', size: 24 },
        ]),
        safety: [GROUND, SHOE, SIGNAL, STOP],
        stages: stages(
          {
            teacher: '"어제 쉬는 시간에 무엇을 하며 놀았나요?" 대답(그네, 술래잡기, 공차기…)을 칠판에 적는다. 이어서 "혼자 그네 타기와 축구 경기는 무엇이 다를까요?"라고 묻고 기다린다. 정해진 규칙이 있는지, 누가 더 잘하는지 겨루는지, 몸을 움직이는지 세 가지를 짚어 "이 세 가지가 있으면 스포츠라고 해요"라고 정리한다. 단원에서 스포츠의 갈래 → 기본 움직임 → 기술형 동작 → 움직임 바꾸기 → 동작 잇기 차례로 배운다고 알려 준다.',
            student: '혼자 그네 타기와 축구 경기는 무엇이 다를까요? 규칙과 겨루기를 찾아봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 규칙과 겨루기로 스포츠 골라내기', minutes: 12, tool: 'mindmap',
              task: '활동 카드를 읽고 정해진 규칙에 따라 겨루는 스포츠를 골라요. 스포츠의 세 가지 특징을 찾고, 놀이를 스포츠로 바꾸는 규칙도 골라요.',
              teacher: '"공을 쓰면 다 스포츠일까요?" 공을 쓴다는 까닭만으로 고르는 학생에게 "공을 차며 그냥 노는 것과 축구 경기는 무엇이 다르지요?"라고 되묻는다. 고른 까닭을 "규칙이 있어서, 겨뤄서"처럼 말하게 한다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '정해진 규칙에 따라 겨루는 스포츠 카드만 바구니에 골라 넣어요.', toolOptions: { mode: 'pick', topic: '스포츠 찾기', cards: ['축구 경기', '혼자 그네 타기', '50m 달리기 대회', '모래성 쌓으며 놀기', '피구 경기', '친구와 소꿉놀이'] }, target: { pick: ['축구 경기', '50m 달리기 대회', '피구 경기'] }, levels: { challenge: { prompt: '정해진 규칙에 따라 겨루는 스포츠 카드만 골라요. 공을 쓰지만 스포츠가 아닌 카드도 섞여 있어요.', toolOptions: { cards: ['축구 경기', '혼자 그네 타기', '50m 달리기 대회', '모래성 쌓으며 놀기', '피구 경기', '친구와 소꿉놀이', '규칙 없이 공 차며 놀기'] } } }, difficulty: 0.1,
                  hints: ['정해진 규칙이 있는지, 누가 더 잘하는지 견주는지 두 가지를 카드마다 물어보세요.', '고른 카드 가운데 규칙이나 이기고 지는 것이 없는 카드가 있는지 다시 보세요.', '경기·대회처럼 규칙에 따라 이긴 사람을 정하는 카드만 남겨요.'] },
                { prompt: '스포츠의 세 가지 특징 가지에 알맞은 예 카드를 하나씩 이어요.', toolOptions: { mode: 'match', topic: '스포츠의 특징', slots: [{ id: 'rule', label: '정해진 규칙이 있어요' }, { id: 'vs', label: '누가 더 잘하는지 겨뤄요' }, { id: 'body', label: '몸을 움직여요' }], cards: ['공을 손으로 잡으면 반칙이에요', '먼저 들어온 사람이 이겨요', '온몸으로 달리고 뛰어요'] }, target: { match: { rule: '공을 손으로 잡으면 반칙이에요', vs: '먼저 들어온 사람이 이겨요', body: '온몸으로 달리고 뛰어요' } }, levels: { easy: { state: { at: { '공을 손으로 잡으면 반칙이에요': 0 } } } }, difficulty: 0.15 },
                { prompt: '술래잡기를 스포츠 경기로 바꾸려면 더해야 할 카드만 골라요.', toolOptions: { mode: 'pick', topic: '경기로 바꾸기', cards: ['경기 시간과 경기장 선을 정해요', '잡힌 사람 수를 세어 이긴 편을 정해요', '술래를 아무도 정하지 않아요', '아무 데로나 멀리 도망가요'] }, target: { pick: ['경기 시간과 경기장 선을 정해요', '잡힌 사람 수를 세어 이긴 편을 정해요'] }, difficulty: 0.2,
                  predict: { q: '규칙을 더하면 술래잡기도 스포츠가 될까요?', options: ['될 수 있어요', '될 수 없어요'], answer: 0 },
                  conclude: '같은 놀이도 정해진 규칙과 겨루는 방법을 더하면 스포츠 경기가 돼요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 스포츠 약속 세우고 얼음땡 경기 해 보기', minutes: 14, tool: 'timer',
              task: '운동장을 둘러보며 안전 점검을 표시하고, 몸 풀기 차례와 경기 시간을 맞춰요. 그다음 경기장 선과 시간을 정한 얼음땡 경기를 해 봐요.',
              teacher: '"눈으로 직접 본 것만 눌러요." 점검이 끝나면 몸 풀기를 함께 한다. 경기 전에 "선 밖으로 나가면 잡힌 것으로 해요"처럼 규칙을 모두 함께 소리 내어 정한다. 경기 뒤에 "규칙을 정하니 무엇이 달라졌나요?"라고 묻는다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '경기를 하기 전에 운동장을 둘러보고 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['돌이나 깨진 물건이 없어요', '신발 끈을 단단히 묶었어요', '물 마실 곳을 알아 두었어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '오늘 수업 활동 카드를 몸을 데우는 것부터 숨을 고르는 것까지 차례로 놓아요.', toolOptions: { cards: ['얼음땡 경기', '천천히 걸으며 숨 고르기', '목·손목·발목 돌리기', '제자리에서 가볍게 뛰기'] }, target: { order: ['목·손목·발목 돌리기', '제자리에서 가볍게 뛰기', '얼음땡 경기', '천천히 걸으며 숨 고르기'] }, levels: { easy: { state: { order: ['목·손목·발목 돌리기', '얼음땡 경기', '제자리에서 가볍게 뛰기', '천천히 걸으며 숨 고르기'] } } }, difficulty: 0.2,
                  hints: ['작은 관절부터 천천히 움직이고, 몸이 데워진 뒤에 힘껏 뛰어요. 숨 고르기는 경기가 끝난 뒤에 해요.', '제자리에서 하는 몸 풀기와 경기 가운데 무엇을 먼저 해야 다치지 않을지 견주어 보세요.'] },
                { prompt: '얼음땡을 1분 경기하고 30초 쉬기를 3번 하도록 타이머를 맞추어요.', toolOptions: { plan: { work: 30, rest: 10, rounds: 2 } }, target: { plan: { work: 60, rest: 30, rounds: 3 } }, levels: { challenge: { prompt: '얼음땡을 1분 경기하고 30초 쉬기를 되풀이해 전체 4분이 되도록 타이머를 맞추어요(마지막에는 쉬지 않아요).', target: { total: 240, plan: { work: 60, rest: 30 } } } }, difficulty: 0.2 },
                { prompt: '경기장 선과 시간을 정한 얼음땡 경기를 해 보고, 경기에서 지킨 규칙 하나를 짝에게 말해요.', free: true, talk: true, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"오늘 얼음땡이 그냥 놀이에서 스포츠 경기가 된 때는 언제였나요?" 규칙(선·시간)을 정하고 겨룬 때라는 대답을 기다린다. 정리 운동으로 천천히 걸으며 숨을 고른다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '스포츠 고르기', cards: ['배드민턴 경기', '줄넘기 오래 하기 대회', '혼자 비눗방울 불기', '구름 보며 눕기'] }, prompt: '새 활동 카드 가운데 스포츠만 골라요.', target: { pick: ['배드민턴 경기', '줄넘기 오래 하기 대회'] }, difficulty: 0.1 },
              { type: 'choice', prompt: '놀이를 스포츠 경기로 만드는 것은 무엇인가요?', options: ['정해진 규칙과 겨루기', '비싼 공과 운동복', '넓은 운동장'], answer: 0, difficulty: 0.15, explain: '규칙을 정하고 누가 더 잘하는지 겨루면 스포츠 경기가 돼요.' },
              { type: 'mood', prompt: '스포츠 단원을 시작한 오늘 마음은 어떤가요?' },
            ],
          },
        ),
        worksheet: {
          title: '놀이와 스포츠는 무엇이 다를까요?',
          items: [
            { type: 'table', prompt: '활동마다 규칙이 있는지, 겨루는지 ○, × 로 쓰세요.', columns: ['활동', '정해진 규칙', '겨루기', '스포츠인가요'], cells: [['혼자 그네 타기', '', '', ''], ['피구 경기', '', '', ''], ['줄넘기 기록 대회', '', '', '']] },
            { type: 'choice', prompt: '스포츠의 특징이 아닌 것에 ○ 하세요.', options: ['정해진 규칙이 있어요', '누가 더 잘하는지 겨뤄요', '꼭 공을 써야 해요'], answer: '꼭 공을 써야 해요' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '술래잡기도 경기 ___과 시간을 정하고, 이긴 편을 정하는 ___를 하면 스포츠가 돼요.', answer: '선(경기장), 겨루기' },
            { type: 'check', prompt: '오늘 지킨 안전 약속에 ✓ 하세요.', options: ['운동장을 먼저 살폈어요', '신발 끈을 묶었어요', '신호를 들으면 멈췄어요'] },
            { type: 'short', prompt: '내가 좋아하는 놀이 하나를 스포츠로 바꾸려면 어떤 규칙을 더할지 쓰세요.' },
          ],
          easy: {
            note: '규칙이 있나요? 겨루나요? 두 가지를 물어봐요.',
            items: [
              { type: 'choice', prompt: '스포츠는 어느 것인가요?', options: ['혼자 그네 타기', '피구 경기'], answer: '피구 경기' },
              { type: 'short', prompt: '얼음땡 경기에서 지킨 규칙 하나를 쓰세요.' },
              { type: 'draw', prompt: '내가 좋아하는 스포츠를 하는 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 맞는 곳에 놓으면 바로 표시되고, 틀리면 까닭을 말하고 되돌아와요. 몸 풀기 차례는 첫 카드가 바른 자리에 놓여 있어요.',
          base: '모두 고른 뒤 확인해 스스로 고쳐요.',
          challenge: '공을 쓰지만 스포츠가 아닌 함정 카드가 더해지고, 타이머는 전체 시간에서 되풀이 횟수를 거꾸로 찾아 맞춰요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 공을 쓰면 모두 스포츠라고 여긴다 → "공을 차며 그냥 노는 것"과 "축구 경기"를 견주게 한다. ② 규칙은 어른이 정해 주는 것이라 여긴다 → 얼음땡 규칙을 학생들이 함께 정하게 한다. ③ 몸 풀기를 건너뛰고 바로 뛴다 → 관절 돌리기·가볍게 뛰기를 경기 차례에 꼭 넣는다. 실제 경기는 교구가 판정하지 않으므로 교사가 규칙 지키기를 관찰한다.',
      }),
      // ───────────────────────── 2 ─────────────────────────
      L(2, {
        title: '겨루는 방법으로 기술형·전략형·생태형 나누기',
        objective: '여러 스포츠를 겨루는 방법에 따라 기술형·전략형·생태형으로 나누고, 나눈 까닭을 무엇과 겨루는지를 들어 말할 수 있다.',
        illustration: art('three paper-cut panels side by side: a child sprinting on a track, two teams playing soccer, and a family hiking up a green mountain trail', [
          { motif: 'sun', x: 420, y: 50, s: 0.7 }, { motif: 'mountain', x: 400, y: 190 }, { motif: 'hills', y: 214 },
          { motif: 'tree', x: 330, y: 210 }, { motif: 'flower', x: 60, y: 220 },
          { motif: 'text', x: 220, y: 110, text: '기술형 · 전략형 · 생태형', size: 22 },
        ]),
        safety: [GROUND, SPACE, THROW, SIGNAL],
        stages: stages(
          {
            teacher: '달리기·축구·등산 그림을 차례로 보이며 묻는다. "달리기는 누구와 무엇을 겨루나요? 축구는요? 등산은요?" 달리기는 내 기록과 동작, 축구는 상대 편과 작전, 등산은 산길·날씨 같은 자연 속에서 도전한다는 대답을 기다린다. 세 갈래 이름(기술형·전략형·생태형)을 그림 아래에 붙이고 "공을 쓰면 모두 같은 갈래일까요?"를 물어 둔다.',
            student: '달리기·축구·등산은 각각 누구와, 무엇을 겨룰까요? 세 그림을 견주어 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 스포츠를 세 갈래로 나누기', minutes: 14, tool: 'mindmap',
              task: '스포츠 카드를 기술형(기록·동작·과녁을 겨룸)·전략형(상대와 작전으로 겨룸)·생태형(자연 속에서 도전함)으로 나누고, 나눈 까닭을 짝에게 말해요.',
              teacher: '"볼링도 공을 쓰는데 왜 축구와 다른 갈래일까요?" 볼링은 막는 상대 없이 쓰러뜨린 핀 수를 겨루고, 축구는 상대가 막는 사이에 작전으로 겨룬다는 것을 짚는다. "공을 쓰면 다 같은 갈래"라고 나누는 학생에게 "누가 내 공을 막나요?"라고 묻는다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '스포츠 카드를 세 갈래 가지로 나누어요.', toolOptions: { topic: '스포츠의 갈래', slots: [{ id: '기술형', label: '기술형', sub: '기록·동작·과녁을 겨뤄요' }, { id: '전략형', label: '전략형', sub: '상대와 작전으로 겨뤄요' }, { id: '생태형', label: '생태형', sub: '자연 속에서 도전해요' }], cards: ['50m 달리기', '축구', '등산', '멀리뛰기', '피구', '숲길 걷기'] }, target: { sort: { 기술형: ['50m 달리기', '멀리뛰기'], 전략형: ['축구', '피구'], 생태형: ['등산', '숲길 걷기'] } }, levels: { easy: { state: { at: { '50m 달리기': 0 } } }, challenge: { prompt: '스포츠 카드를 세 갈래 가지로 나누어요. 스포츠가 아닌 카드는 어느 가지에도 넣지 않아요.', toolOptions: { cards: ['50m 달리기', '축구', '등산', '멀리뛰기', '피구', '숲길 걷기', '혼자 그네 타기'] } } }, difficulty: 0.15,
                  hints: ['카드마다 "누구와, 무엇을 겨루나?"를 물어요. 내 기록이면 한 갈래, 막는 상대가 있으면 다른 갈래, 산·숲 같은 자연이면 또 다른 갈래예요.', '같은 가지에 넣은 두 카드가 겨루는 방법이 정말 같은지 견주어 보세요.'] },
                { prompt: '공이나 셔틀콕을 쓰는 스포츠를 기술형과 전략형으로 나누어요.', toolOptions: { topic: '공을 쓰는 스포츠', slots: [{ id: '기술형', label: '기술형', sub: '막는 상대가 없어요' }, { id: '전략형', label: '전략형', sub: '상대가 막거나 받아쳐요' }], cards: ['볼링', '농구', '배드민턴', '공 멀리 던지기'] }, target: { sort: { 기술형: ['볼링', '공 멀리 던지기'], 전략형: ['농구', '배드민턴'] } }, difficulty: 0.25,
                  predict: { q: '공을 쓰는 스포츠는 모두 같은 갈래일까요?', options: ['네, 같아요', '아니요, 달라요'], answer: 1 },
                  conclude: '공을 쓰는지가 아니라 무엇과 겨루는지로 갈래를 나눠요. 볼링은 핀 수, 농구는 상대와 작전을 겨뤄요.' },
                { prompt: '경기 장면에 그 경기가 겨루는 방법 카드를 하나씩 이어요.', toolOptions: { mode: 'match', topic: '무엇을 겨루나요?', slots: [{ id: 'rope', label: '1분 줄넘기 대회' }, { id: 'tball', label: '티볼 경기' }, { id: 'orient', label: '지도 보고 숲속 표지 찾기' }], cards: ['정해진 시간에 넘은 횟수를 견줘요', '수비 편이 없는 곳으로 공을 쳐 보내요', '숲길과 땅 모양을 살피며 길을 찾아요'] }, target: { match: { rope: '정해진 시간에 넘은 횟수를 견줘요', tball: '수비 편이 없는 곳으로 공을 쳐 보내요', orient: '숲길과 땅 모양을 살피며 길을 찾아요' } }, levels: { easy: { state: { at: { '정해진 시간에 넘은 횟수를 견줘요': 0 } } } }, difficulty: 0.2 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 세 갈래 맛보기 자리 돌기', minutes: 12, tool: 'timer',
              task: '운동장 세 자리(콩주머니 과녁 던지기·공 빼앗기·화단길 걷기)를 돌아요. 자리 점검과 타이머를 맞춘 뒤, 자리마다 어느 갈래였는지 짝에게 말해요.',
              teacher: '"자리를 옮길 때는 걸어서, 신호를 듣고 옮겨요." 과녁 던지기 자리는 줄 뒤에서만 던지게 한다. 자리마다 끝나면 "방금 놀이는 무엇과 겨뤘나요?"라고 묻고 갈래 이름으로 대답하게 한다.',
              levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
              items: [
                { prompt: '세 자리를 돌기 전에 둘러보고 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['과녁 앞에 아무도 없어요', '공 빼앗기 자리 둘레에 돌이 없어요', '화단길에 미끄러운 흙탕물이 없어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '세 자리를 3분씩 하고, 자리를 옮길 때 30초 쉬도록 타이머를 맞추어요.', toolOptions: { plan: { work: 60, rest: 10, rounds: 2 }, workStep: 30 }, target: { plan: { work: 180, rest: 30, rounds: 3 } }, difficulty: 0.2 },
                { prompt: '세 자리를 돌며 해 보고, 자리마다 어느 갈래였는지와 그 까닭을 짝에게 말해요.', free: true, talk: true, difficulty: 0.15 },
              ],
            },
          ],
          {
            teacher: '"축구와 볼링이 다른 갈래인 까닭을 한 문장으로 말해 볼까요?" 두세 명이 말하게 한 뒤, 출구 질문을 푼다. 정리 운동으로 천천히 걸으며 숨을 고른다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { topic: '새 스포츠 나누기', slots: ['기술형', '전략형', '생태형'], cards: ['뜀틀 넘기 대회', '발야구', '산 정상까지 오르기'] }, prompt: '새 스포츠 카드를 세 갈래로 나누어요.', target: { sort: { 기술형: ['뜀틀 넘기 대회'], 전략형: ['발야구'], 생태형: ['산 정상까지 오르기'] } }, difficulty: 0.2 },
              { type: 'choice', prompt: '축구와 볼링이 다른 갈래인 까닭은 무엇인가요?', options: ['축구는 상대와 작전으로, 볼링은 쓰러뜨린 핀 수로 겨뤄서', '공의 크기가 달라서', '하는 사람 수가 달라서'], answer: 0, difficulty: 0.2, explain: '무엇과 겨루는지가 갈래를 나눠요.' },
              { type: 'mood', prompt: '세 갈래 스포츠를 맛본 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '스포츠의 세 갈래',
          items: [
            { type: 'table', prompt: '스포츠마다 무엇과 겨루는지와 갈래를 쓰세요.', columns: ['스포츠', '무엇과 겨루나요', '갈래'], cells: [['멀리뛰기', '', ''], ['농구', '', ''], ['등산', '', '']] },
            { type: 'choice', prompt: '전략형 스포츠에 ○ 하세요.', options: ['볼링', '배드민턴', '50m 달리기'], answer: '배드민턴' },
            { type: 'blank', prompt: '빈칸에 알맞은 갈래 이름을 쓰세요.', text: '자연 속에서 산길과 날씨에 맞서며 도전하는 스포츠는 ___ 스포츠예요.', answer: '생태형' },
            { type: 'short', prompt: '"공을 쓰면 모두 같은 갈래"라는 말이 맞지 않는 까닭을 예를 들어 쓰세요.' },
            { type: 'check', prompt: '오늘 해 본 자리에 ✓ 하세요.', options: ['콩주머니 과녁 던지기', '공 빼앗기', '화단길 걷기'] },
          ],
          easy: {
            note: '기술형 = 내 기록, 전략형 = 상대와 작전, 생태형 = 자연 속 도전.',
            items: [
              { type: 'choice', prompt: '등산은 어느 갈래인가요?', options: ['기술형', '전략형', '생태형'], answer: '생태형' },
              { type: 'choice', prompt: '축구는 어느 갈래인가요?', options: ['기술형', '전략형', '생태형'], answer: '전략형' },
              { type: 'draw', prompt: '세 자리 가운데 가장 재미있었던 자리를 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 맞는 가지에 놓으면 바로 표시되고, 첫 카드가 미리 놓여 있어요. 가지마다 겨루는 방법이 작은 글로 적혀 있어요.',
          base: '모두 나눈 뒤 확인해 스스로 고쳐요.',
          challenge: '스포츠가 아닌 함정 카드가 섞이고, 세 자리를 돌 때 시간 재기로 직접 시간을 지켜요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 공을 쓰는 것은 모두 같은 갈래라고 여긴다 → "누가 내 공을 막나요?"로 상대가 있는지 묻는다. ② 생태형을 "밖에서 하는 운동"으로만 안다 → 운동장 축구도 밖에서 하지만 자연과 겨루지 않는다는 것을 견준다. ③ 갈래 이름만 외운다 → 까닭을 "○○와 겨뤄서"로 말하게 한다.',
      }),
      // ───────────────────────── 3 ─────────────────────────
      L(3, {
        title: '공 굴리기 놀이에 규칙을 더해 두 갈래 경기 만들기',
        objective: '같은 공 굴리기 놀이에 서로 다른 규칙을 더해 기술형 경기와 전략형 경기를 만들고, 두 경기가 겨루는 방법이 어떻게 다른지 말할 수 있다.',
        illustration: art('children rolling a soft ball toward rows of plastic bottles while another group defends a small goal made of cones', [
          { motif: 'sun', x: 410, y: 56, s: 0.7 }, { motif: 'cloud', x: 110, y: 46 }, { motif: 'hills', y: 212 },
          { motif: 'tree', x: 420, y: 210 }, { motif: 'flower', x: 70, y: 220 },
          { motif: 'text', x: 240, y: 128, text: '같은 공, 다른 규칙', size: 24 },
        ]),
        safety: [GROUND, SPACE, SIGNAL, '병을 세우거나 공을 주우러 갈 때는 굴리기를 모두 멈춰요.'],
        stages: stages(
          {
            teacher: '공 하나와 페트병 몇 개를 보여 주며 묻는다. "이 공으로 그냥 굴리며 노는 것과 경기는 무엇이 달랐지요?" 1차시의 규칙·겨루기를 떠올리게 한다. "같은 공으로 기술형 경기도, 전략형 경기도 만들 수 있을까요?"라고 묻고, 오늘은 규칙을 바꾸어 두 갈래 경기를 직접 만든다고 알려 준다.',
            student: '공 하나로 기술형 경기와 전략형 경기를 둘 다 만들 수 있을까요?',
          },
          [
            {
              id: 'a1', title: '활동 1. 규칙 카드로 갈래가 다른 경기 만들기', minutes: 12, tool: 'mindmap',
              task: '공 굴리기 놀이에 더할 규칙 카드를 읽고, 어느 갈래 경기가 되는지 나누어요. 생태형 활동과 규칙이 하는 일도 찾아봐요.',
              teacher: '"이 규칙을 더하면 누구와 겨루게 되나요?" 카드마다 막는 상대가 생기는지 묻는다. 규칙이 하는 일에서는 "규칙은 이기려고만 있는 걸까요?"라고 물어 공정함·안전도 지켜 준다는 것을 짚는다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '공 굴리기 놀이에 더할 규칙 카드를 어느 갈래 경기가 되는지 나누어요.', toolOptions: { topic: '공 굴리기 경기', slots: [{ id: '기술형', label: '기술형 경기가 돼요' }, { id: '전략형', label: '전략형 경기가 돼요' }], cards: ['한 사람씩 굴려 쓰러뜨린 병 수를 견줘요', '선에서 굴려 공이 멈춘 거리를 재요', '두 편이 공을 빼앗으며 상대 문으로 굴려요', '수비 편이 막는 사이로 굴려 통과시켜요'] }, target: { sort: { 기술형: ['한 사람씩 굴려 쓰러뜨린 병 수를 견줘요', '선에서 굴려 공이 멈춘 거리를 재요'], 전략형: ['두 편이 공을 빼앗으며 상대 문으로 굴려요', '수비 편이 막는 사이로 굴려 통과시켜요'] } }, levels: { easy: { state: { at: { '한 사람씩 굴려 쓰러뜨린 병 수를 견줘요': 0 } } }, challenge: { prompt: '규칙 카드를 어느 갈래 경기가 되는지 나누어요. 경기를 만들지 못하는 카드는 남겨요.', toolOptions: { cards: ['한 사람씩 굴려 쓰러뜨린 병 수를 견줘요', '선에서 굴려 공이 멈춘 거리를 재요', '두 편이 공을 빼앗으며 상대 문으로 굴려요', '수비 편이 막는 사이로 굴려 통과시켜요', '아무 때나 아무 데로 굴려요'] } } }, difficulty: 0.2,
                  hints: ['규칙을 더한 뒤 내 공을 막거나 빼앗는 상대가 생기는지 카드마다 물어보세요.', '막는 상대가 없는데 전략형에 넣은 카드, 상대가 있는데 기술형에 넣은 카드가 있는지 보세요.'] },
                { prompt: '산에서 하는 활동 가운데 자연과 어울리는 생태형 스포츠 활동만 골라요.', toolOptions: { mode: 'pick', topic: '생태형 활동', cards: ['지도 보고 정해진 표지 찾아가기', '산길을 정해진 시간 안에 걸어 오르기', '산에서 쓰레기를 몰래 버리기', '나뭇가지를 꺾어 깃발 만들기'] }, target: { pick: ['지도 보고 정해진 표지 찾아가기', '산길을 정해진 시간 안에 걸어 오르기'] }, difficulty: 0.15 },
                { prompt: '규칙이 하는 일 가지에 알맞은 공 굴리기 규칙 카드를 하나씩 이어요.', toolOptions: { mode: 'match', topic: '규칙이 하는 일', slots: [{ id: 'fair', label: '모두에게 같은 기회를 줘요' }, { id: 'safe', label: '다치지 않게 해 줘요' }, { id: 'win', label: '이긴 편을 정해 줘요' }], cards: ['한 사람에 두 번씩만 굴려요', '병을 세울 때는 굴리기를 멈춰요', '쓰러뜨린 병이 많은 편이 이겨요'] }, target: { match: { fair: '한 사람에 두 번씩만 굴려요', safe: '병을 세울 때는 굴리기를 멈춰요', win: '쓰러뜨린 병이 많은 편이 이겨요' } }, difficulty: 0.2,
                  conclude: '규칙은 이긴 편을 정할 뿐 아니라, 모두에게 같은 기회를 주고 다치지 않게 지켜 줘요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 만든 두 경기를 해 보기', minutes: 14, tool: 'timer',
              task: '모둠이 정한 규칙으로 병 쓰러뜨리기(기술형)를 하고 쓰러뜨린 병 수를 적어요. 이어서 문 지키기(전략형)를 해 보고 해낸 것을 점검해요.',
              teacher: '"병 쓰러뜨리기에서 여러분은 누구와 겨뤘나요? 문 지키기에서는요?" 두 경기를 마친 뒤 같은 공인데 겨루는 대상이 바뀌었다는 것을 말하게 한다. 병을 세우러 갈 때는 모든 모둠이 굴리기를 멈추었는지 살핀다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '병 쓰러뜨리기 경기를 하는 차례대로 카드를 놓아요.', toolOptions: { cards: ['차례대로 굴려 쓰러진 병을 세요', '이긴 편에 손뼉 치고 병을 정리해요', '병을 세우고 굴리는 줄을 그어요', '쓰러진 병 수를 더해 이긴 편을 정해요'] }, target: { order: ['병을 세우고 굴리는 줄을 그어요', '차례대로 굴려 쓰러진 병을 세요', '쓰러진 병 수를 더해 이긴 편을 정해요', '이긴 편에 손뼉 치고 병을 정리해요'] }, levels: { easy: { state: { order: ['병을 세우고 굴리는 줄을 그어요', '쓰러진 병 수를 더해 이긴 편을 정해요', '차례대로 굴려 쓰러진 병을 세요', '이긴 편에 손뼉 치고 병을 정리해요'] } } }, difficulty: 0.15,
                  hints: ['경기를 준비하고, 하고, 결과를 정하고, 마무리하는 차례로 떠올려 보세요.', '병 수를 세기 전에 무엇을 먼저 해야 세울 병이 생기는지 보세요.'] },
                { prompt: '병 쓰러뜨리기를 세 번 해 보고 쓰러뜨린 병 수를 적어요.', toolOptions: { fields: [{ label: '1회', unit: '개', max: 10 }, { label: '2회', unit: '개', max: 10 }, { label: '3회', unit: '개', max: 10 }] }, target: { records: true }, levels: { challenge: { toolOptions: { fields: [{ label: '1회', unit: '개', max: 10 }, { label: '2회', unit: '개', max: 10 }, { label: '3회', unit: '개', max: 10 }, { label: '세 번 합계', unit: '개', max: 30 }] } } }, difficulty: 0.15 },
                { prompt: '문 지키기 경기를 해 보고, 우리 편이 쓴 작전 하나를 짝에게 말해요.', free: true, talk: true, difficulty: 0.15 },
                { prompt: '두 경기를 해 보고 해낸 것을 점검 목록에 표시해요.', target: { selfCheck: ['모둠이 정한 규칙을 지켰어요', '내 차례를 기다렸어요', '두 경기가 무엇을 겨루는지 말했어요'] }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"같은 공 굴리기가 기술형도 되고 전략형도 된 까닭은 무엇이었나요?" 두세 명의 말을 들은 뒤 출구 질문을 푼다. 정리 운동으로 천천히 걸으며 숨을 고른다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '콩주머니 경기', slots: [{ id: 'a', label: '콩주머니를 던져 바구니에 넣은 수를 견줘요' }, { id: 'b', label: '두 편이 콩주머니를 주고받으며 상대가 못 받게 해요' }], cards: ['기술형', '전략형'] }, prompt: '콩주머니 경기 규칙에 알맞은 갈래 카드를 이어요.', target: { match: { a: '기술형', b: '전략형' } }, difficulty: 0.2 },
              { type: 'choice', prompt: '같은 공 굴리기가 기술형도, 전략형도 될 수 있는 까닭은 무엇인가요?', options: ['더한 규칙에 따라 겨루는 방법이 달라져서', '공의 색이 달라서', '하는 장소가 달라서'], answer: 0, difficulty: 0.2, explain: '막는 상대가 생기는 규칙을 더하면 전략형, 내 기록만 견주면 기술형이에요.' },
              { type: 'mood', prompt: '규칙을 직접 만들어 경기해 본 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '같은 공, 다른 규칙',
          items: [
            { type: 'table', prompt: '오늘 만든 두 경기의 규칙과 갈래를 쓰세요.', columns: ['경기', '더한 규칙', '누구와 겨루나요', '갈래'], cells: [['병 쓰러뜨리기', '', '', ''], ['문 지키기', '', '', '']] },
            { type: 'choice', prompt: '"병을 세울 때는 굴리기를 멈춰요" 규칙이 하는 일에 ○ 하세요.', options: ['이긴 편을 정해요', '다치지 않게 해요', '같은 기회를 줘요'], answer: '다치지 않게 해요' },
            { type: 'blank', prompt: '빈칸에 알맞은 갈래 이름을 쓰세요.', text: '공 굴리기에 막는 상대가 생기는 규칙을 더하면 ___ 경기가 되고, 내 기록만 견주면 ___ 경기가 돼요.', answer: '전략형, 기술형' },
            { type: 'table', prompt: '병 쓰러뜨리기에서 쓰러뜨린 병 수를 쓰세요.', columns: ['횟수', '1회', '2회', '3회'], cells: [['쓰러뜨린 병', '', '', '']] },
            { type: 'short', prompt: '줄넘기로 기술형 경기를 만든다면 어떤 규칙을 더할지 쓰세요.' },
          ],
          easy: {
            note: '막는 상대가 있으면 전략형, 내 기록만 견주면 기술형이에요.',
            items: [
              { type: 'choice', prompt: '"쓰러뜨린 병 수를 견줘요"는 어느 갈래인가요?', options: ['기술형', '전략형'], answer: '기술형' },
              { type: 'short', prompt: '문 지키기에서 우리 편이 쓴 작전을 쓰세요.' },
              { type: 'draw', prompt: '병 쓰러뜨리기 하는 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 맞는 가지에 놓으면 바로 표시되고, 첫 카드나 첫 차례가 바르게 놓여 있어요.',
          base: '모두 나눈 뒤 확인해 스스로 고쳐요.',
          challenge: '경기를 만들지 못하는 함정 카드가 섞이고, 기록판에 세 번 합계를 셈해 적는 칸이 더해져요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 공을 쓰면 다 같은 갈래라고 여긴다 → 같은 공으로 두 경기를 직접 해 보고 겨룬 대상을 견주게 한다. ② 규칙은 이기기 위한 것만이라고 여긴다 → 공정·안전 규칙을 따로 찾게 한다. ③ 병을 세우러 가는 친구가 있는데 굴린다 → "멈춤" 신호를 경기 규칙에 넣는다.',
      }),
      // ───────────────────────── 4 ─────────────────────────
      L(4, {
        title: '규칙대로 콩주머니 과녁 던지기 대회 하기',
        objective: '정해진 규칙에 따라 콩주머니 과녁 던지기 대회를 하고, 기술형의 특징이 드러난 장면 하나를 짚어 말할 수 있다.',
        illustration: art('children standing behind a chalk line tossing bean bags at a big circular target with three rings on the grass', [
          { motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'cloud', x: 100, y: 48 }, { motif: 'hills', y: 212 },
          { motif: 'star', x: 330, y: 150, s: 1.2 }, { motif: 'tree', x: 70, y: 212 },
          { motif: 'text', x: 200, y: 120, text: '가운데를 노려요!', size: 24 },
        ]),
        safety: [THROW, SPACE, SIGNAL, '콩주머니는 아래에서 위로 던지고, 친구 쪽으로 장난으로 던지지 않아요.'],
        stages: stages(
          {
            teacher: '"기술형 스포츠는 무엇을 겨룬다고 했지요?" 기록·동작·과녁이라는 대답을 받는다. 과녁(가운데 3점, 가운데 둘레 2점, 바깥 1점)을 보여 주며 "오늘은 기술형 대회를 규칙대로 해 봐요"라고 말한다. "갈래를 아는 것이 경기하는 데 도움이 될까요, 그냥 이름일까요?"를 물어 두고 끝에 다시 묻는다.',
            student: '과녁 던지기는 누구와, 무엇을 겨룰까요? 오늘은 규칙대로 대회를 해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 대회 준비하고 점수 적기', minutes: 14, tool: 'timer',
              task: '대회 자리를 점검하고, 던지는 동작 차례를 맞춘 뒤 실제로 세 판을 던져요. 한 판에 콩주머니 세 개를 던져 얻은 점수를 더해 적어요.',
              teacher: '"던지는 줄을 밟으면 그 콩주머니는 0점이에요." 규칙을 먼저 함께 읽는다. 팔을 뒤로 당기지 않고 손목으로만 던지는 학생에게 "팔을 시계추처럼 뒤로 보냈다가 앞으로"라고 말해 준다. 점수는 친구와 견주지 않고 내 판끼리 견주게 한다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '대회를 시작하기 전에 둘러보고 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['던지는 줄 앞에 아무도 없어요', '과녁 둘레에 줄을 둘러 두었어요', '줍기 신호를 알아 두었어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '콩주머니를 던지는 동작 카드를 차례대로 놓아요.', toolOptions: { cards: ['팔을 앞으로 뻗으며 콩주머니를 놓아요', '던지는 줄 뒤에 서요', '모두 던진 뒤 신호를 듣고 주워요', '과녁 가운데를 보고 팔을 뒤로 당겨요'] }, target: { order: ['던지는 줄 뒤에 서요', '과녁 가운데를 보고 팔을 뒤로 당겨요', '팔을 앞으로 뻗으며 콩주머니를 놓아요', '모두 던진 뒤 신호를 듣고 주워요'] }, levels: { easy: { state: { order: ['던지는 줄 뒤에 서요', '팔을 앞으로 뻗으며 콩주머니를 놓아요', '과녁 가운데를 보고 팔을 뒤로 당겨요', '모두 던진 뒤 신호를 듣고 주워요'] } } }, difficulty: 0.15 },
                { prompt: '세 판을 던져 보고, 판마다 얻은 점수를 적어요.', toolOptions: { fields: [{ label: '1판', unit: '점', max: 9 }, { label: '2판', unit: '점', max: 9 }, { label: '3판', unit: '점', max: 9 }] }, target: { records: true }, levels: { challenge: { toolOptions: { fields: [{ label: '1판', unit: '점', max: 9 }, { label: '2판', unit: '점', max: 9 }, { label: '3판', unit: '점', max: 9 }, { label: '가장 높은 판과 낮은 판의 차이', unit: '점', max: 9 }] } } }, difficulty: 0.15 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 기술형의 특징이 드러난 장면 찾기', minutes: 12, tool: 'mindmap',
              task: '대회에서 기술형의 특징이 드러난 장면을 고르고, 콩주머니가 빗나간 까닭에 맞는 고칠 방법을 이어요. 반칙을 본 때 어떻게 할지도 골라요.',
              teacher: '"오늘 내 점수를 막은 사람이 있었나요?" 없었다는 대답에서 "그래서 기술형은 내 동작을 다듬는 것이 중요해요"라고 짚는다. 빗나간 까닭을 고를 때는 실제로 한 번 더 던져 보며 고친 방법을 확인하게 한다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '오늘 대회에서 기술형의 특징이 드러난 장면만 골라요.', toolOptions: { mode: 'pick', topic: '기술형 장면', cards: ['내 점수를 지난 판 점수와 견줬어요', '과녁 가운데를 노려 팔 힘을 조절했어요', '상대 편이 내 콩주머니를 쳐 냈어요', '친구와 주고받으며 수비를 피했어요'] }, target: { pick: ['내 점수를 지난 판 점수와 견줬어요', '과녁 가운데를 노려 팔 힘을 조절했어요'] }, difficulty: 0.15 },
                { prompt: '콩주머니가 빗나간 모습에 알맞은 고칠 방법을 이어요.', toolOptions: { mode: 'match', topic: '빗나간 까닭', slots: [{ id: 'short', label: '과녁 앞에 떨어져요' }, { id: 'long', label: '과녁을 넘어가요' }, { id: 'side', label: '옆으로 빗나가요' }], cards: ['팔을 조금 더 크게 뒤로 당겨요', '팔 힘을 조금 줄여요', '손끝이 과녁을 가리킨 채 놓아요'] }, target: { match: { short: '팔을 조금 더 크게 뒤로 당겨요', long: '팔 힘을 조금 줄여요', side: '손끝이 과녁을 가리킨 채 놓아요' } }, levels: { easy: { state: { at: { '팔을 조금 더 크게 뒤로 당겨요': 0 } } } }, difficulty: 0.2,
                  hints: ['짧으면 힘을 더, 길면 힘을 덜, 옆으로 가면 방향을 고쳐요.', '방향을 고치는 카드와 힘을 바꾸는 카드를 먼저 나누어 보세요.'] },
                { prompt: '대회 규칙을 지키는 것과 어긋나는 것으로 나누어요.', toolOptions: { topic: '대회 규칙', slots: ['규칙을 지켜요', '규칙에 어긋나요'], cards: ['줄을 밟지 않고 던져요', '내 차례가 아닐 때 기다려요', '줄 앞으로 한 걸음 나가 던져요', '신호 전에 과녁으로 뛰어가 주워요'] }, target: { sort: { '규칙을 지켜요': ['줄을 밟지 않고 던져요', '내 차례가 아닐 때 기다려요'], '규칙에 어긋나요': ['줄 앞으로 한 걸음 나가 던져요', '신호 전에 과녁으로 뛰어가 주워요'] } }, difficulty: 0.1,
                  conclude: '규칙대로 해야 내 점수를 지난 판과 바르게 견줄 수 있어요. 그것이 기술형의 재미예요.' },
              ],
            },
          ],
          {
            teacher: '"갈래를 알았더니 오늘 무엇에 힘을 쏟았나요?" 막는 상대가 없으니 내 동작(팔 힘·방향)을 다듬는 데 힘을 쏟았다는 대답을 끌어낸다. 도입의 질문(갈래는 그냥 이름일까?)에 다시 답하게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'timer', options: { cards: ['말뚝 쪽으로 고리를 놓아요', '고리를 잡고 말뚝을 봐요', '다 던진 뒤 걸린 고리 수를 세요', '팔을 앞뒤로 흔들어 힘을 모아요'] }, prompt: '고리 던지기를 하는 차례대로 카드를 놓아요.', target: { order: ['고리를 잡고 말뚝을 봐요', '팔을 앞뒤로 흔들어 힘을 모아요', '말뚝 쪽으로 고리를 놓아요', '다 던진 뒤 걸린 고리 수를 세요'] }, difficulty: 0.15 },
              { type: 'choice', prompt: '콩주머니가 자꾸 과녁을 넘어갈 때 고칠 방법은?', options: ['팔 힘을 조금 줄여요', '팔을 더 크게 당겨요', '눈을 감고 던져요'], answer: 0, difficulty: 0.2, explain: '길게 날아가면 힘을 줄여요.' },
              { type: 'mood', prompt: '과녁 던지기 대회를 한 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '과녁 던지기 대회',
          items: [
            { type: 'table', prompt: '판마다 얻은 점수를 쓰세요.', columns: ['판', '1판', '2판', '3판'], cells: [['점수', '', '', '']] },
            { type: 'choice', prompt: '과녁 던지기에서 기술형의 특징이 드러난 것에 ○ 하세요.', options: ['상대 편이 막아요', '내 점수를 지난 판과 견줘요', '숲길을 찾아가요'], answer: '내 점수를 지난 판과 견줘요' },
            { type: 'table', prompt: '빗나간 모습에 맞는 고칠 방법을 쓰세요.', columns: ['빗나간 모습', '고칠 방법'], cells: [['과녁 앞에 떨어져요', ''], ['옆으로 빗나가요', '']] },
            { type: 'check', prompt: '오늘 지킨 대회 규칙에 ✓ 하세요.', options: ['줄을 밟지 않았어요', '차례를 기다렸어요', '신호를 듣고 주웠어요'] },
            { type: 'short', prompt: '다음 대회에서 점수를 높이려고 바꿀 동작 하나를 쓰세요.' },
          ],
          easy: {
            note: '짧으면 힘을 더, 길면 힘을 덜, 옆으로 가면 손끝 방향을 고쳐요.',
            items: [
              { type: 'choice', prompt: '콩주머니가 과녁 앞에 떨어지면?', options: ['팔을 더 크게 당겨요', '팔 힘을 줄여요'], answer: '팔을 더 크게 당겨요' },
              { type: 'table', prompt: '내 점수를 쓰세요.', columns: ['1판', '2판', '3판'], rows: 1 },
              { type: 'draw', prompt: '콩주머니를 던지는 내 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '동작 차례의 첫 카드가 바르게 놓여 있고, 카드를 맞는 곳에 놓으면 바로 표시돼요.',
          base: '스스로 차례를 맞추고 모두 놓은 뒤 확인해요.',
          challenge: '기록판에 가장 높은 판과 낮은 판의 차이를 셈해 적는 칸이 더해져요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 갈래 나누기는 이름 붙이기일 뿐이라고 여긴다 → 막는 상대가 없으니 내 동작을 다듬어야 한다는 것을 경기에서 느끼게 한다. ② 손목으로만 던진다 → 팔을 시계추처럼 흔든다. ③ 신호 전에 주우러 뛰어간다 → 대회 규칙에 넣고 어기면 그 판 점수를 빼기로 미리 정한다.',
      }),
      // ───────────────────────── 5 ─────────────────────────
      L(5, {
        title: '꼬리 빼앗기 경기에서 작전 세우고 해 보기',
        objective: '꼬리 빼앗기 경기를 규칙대로 하고, 상황에 맞는 작전을 골라 써 본 뒤 전략형의 특징이 드러난 장면을 말할 수 있다.',
        illustration: art('two teams of children with colorful cloth tails tucked at their backs dodging and chasing on a grass field marked with cones', [
          { motif: 'sun', x: 410, y: 52, s: 0.7 }, { motif: 'cloud', x: 120, y: 50 }, { motif: 'hills', y: 214 },
          { motif: 'leaf', x: 160, y: 150 }, { motif: 'leaf', x: 300, y: 160 }, { motif: 'tree', x: 430, y: 212 },
          { motif: 'text', x: 240, y: 112, text: '작전을 세워요', size: 24 },
        ]),
        safety: [TAG, SPACE, LOOK, SIGNAL, WATER],
        stages: stages(
          {
            teacher: '"과녁 던지기에서는 내 점수를 막는 사람이 없었지요. 오늘 경기에는 있을까요?" 꼬리 빼앗기 규칙(꼬리를 빼앗기면 경기장 밖 대기 자리에서 열을 센 뒤 다시 들어옴, 많이 남은 편이 이김)을 함께 읽는다. "상대가 있으면 무엇이 필요할까요?"라고 물어 작전이라는 말을 끌어낸다.',
            student: '꼬리 빼앗기에는 내 꼬리를 노리는 상대가 있어요. 무엇이 필요할까요?',
          },
          [
            {
              id: 'a1', title: '활동 1. 상황에 맞는 작전 고르기', minutes: 12, tool: 'mindmap',
              task: '경기에서 생길 상황마다 알맞은 작전을 잇고, 작전을 공격과 수비로 나누어요. 전략형의 특징이 드러난 장면도 골라요.',
              teacher: '"구석에 몰리면 왜 빼앗기기 쉬울까요?" 피할 길이 줄어든다는 것을 몸으로 보여 준다. 작전을 고른 뒤 짝과 제자리에서 한 번씩 몸으로 해 보게 한다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '경기 상황에 알맞은 작전 카드를 하나씩 이어요.', toolOptions: { mode: 'match', topic: '상황과 작전', slots: [{ id: 'two', label: '상대 둘이 나를 쫓아와요' }, { id: 'corner', label: '경기장 구석에 몰렸어요' }, { id: 'help', label: '우리 편이 꼬리를 뺏기려 해요' }], cards: ['둘 사이가 벌어진 쪽으로 빠져나가요', '넓은 가운데로 돌아 나와요', '쫓는 상대의 꼬리를 뒤에서 노려요'] }, target: { match: { two: '둘 사이가 벌어진 쪽으로 빠져나가요', corner: '넓은 가운데로 돌아 나와요', help: '쫓는 상대의 꼬리를 뒤에서 노려요' } }, levels: { easy: { state: { at: { '넓은 가운데로 돌아 나와요': 1 } } } }, difficulty: 0.2 },
                { prompt: '작전 카드를 공격 작전과 수비 작전으로 나누어요.', toolOptions: { topic: '공격과 수비', slots: ['공격 작전', '수비 작전'], cards: ['상대가 다른 친구를 볼 때 뒤로 다가가요', '둘이 양쪽에서 한 명을 몰아요', '꼬리가 상대 반대쪽에 오게 몸을 돌려요', '넓은 곳으로 피해 거리를 둬요'] }, target: { sort: { '공격 작전': ['상대가 다른 친구를 볼 때 뒤로 다가가요', '둘이 양쪽에서 한 명을 몰아요'], '수비 작전': ['꼬리가 상대 반대쪽에 오게 몸을 돌려요', '넓은 곳으로 피해 거리를 둬요'] } }, difficulty: 0.15 },
                { prompt: '꼬리 빼앗기에서 전략형의 특징이 드러난 장면만 골라요.', toolOptions: { mode: 'pick', topic: '전략형 장면', cards: ['작전 회의에서 둘이 함께 몰기로 정했어요', '상대 움직임을 보고 방향을 바꿨어요', '혼자 20m를 달려 기록을 쟀어요', '산길을 걸으며 나무 이름을 찾았어요'] }, target: { pick: ['작전 회의에서 둘이 함께 몰기로 정했어요', '상대 움직임을 보고 방향을 바꿨어요'] }, levels: { challenge: { prompt: '꼬리 빼앗기에서 전략형의 특징이 드러난 장면만 골라요. 경기 장면이지만 작전과 상관없는 카드도 섞여 있어요.', toolOptions: { cards: ['작전 회의에서 둘이 함께 몰기로 정했어요', '상대 움직임을 보고 방향을 바꿨어요', '혼자 20m를 달려 기록을 쟀어요', '산길을 걸으며 나무 이름을 찾았어요', '꼬리 색을 우리 편끼리 맞췄어요'] } } }, difficulty: 0.2,
                  conclude: '전략형은 상대가 있어서 상대 움직임을 보고 작전을 바꾸는 장면에서 특징이 드러나요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 경기와 작전 회의 되풀이하기', minutes: 14, tool: 'timer',
              task: '꼬리와 경기장을 점검하고 경기·작전 회의 시간을 타이머에 맞춰요. 경기하고, 회의하고, 바꾼 작전으로 다시 경기해요.',
              teacher: '"작전 회의 1분 동안 한 가지만 바꿔요." 회의에서 무엇을 바꿨는지 모둠마다 한 문장으로 말하게 한다. 꼬리를 잡을 때 옷이나 팔을 잡는 학생이 있으면 바로 멈추고 규칙을 다시 짚는다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '경기 전에 꼬리와 경기장을 둘러보고 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['꼬리는 허리 뒤에 끝만 끼웠어요', '경기장 선 안에 걸려 넘어질 물건이 없어요', '넘어진 친구가 있으면 모두 멈추기로 했어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '2분 경기하고 1분 작전 회의를 하는 것을 3번 하도록 타이머를 맞추어요.', toolOptions: { plan: { work: 30, rest: 10, rounds: 2 }, workStep: 30, restStep: 10 }, target: { plan: { work: 120, rest: 60, rounds: 3 } }, levels: { challenge: { prompt: '2분 경기와 1분 작전 회의를 되풀이해 전체 8분이 되도록 타이머를 맞추어요(마지막 경기 뒤에는 회의하지 않아요).', target: { total: 480, plan: { work: 120, rest: 60 } } } }, difficulty: 0.2 },
                { prompt: '경기를 하고 작전 회의에서 바꾼 작전 한 가지를 다음 경기에서 써 본 뒤 모둠과 이야기해요.', free: true, talk: true, difficulty: 0.2 },
              ],
            },
          ],
          {
            teacher: '"과녁 던지기와 꼬리 빼앗기는 무엇이 달랐나요?" 상대가 있어 작전이 필요했다는 대답을 받는다. 출구 질문을 푼 뒤 물을 마시고 천천히 걸으며 숨을 고른다.',
            exitTicket: [
              { type: 'tool', tool: 'emotion', options: br('우리 편이 지고 있자 친구가 "상대 옷을 잡아당겨서라도 꼬리를 뺏자"고 해요.', [ch('pull', '옷을 잡아당겨요', '상대가 넘어져 경기가 멈췄어요.', '걱정', '옷을 당기면 친구가 다치고 규칙에도 어긋나요.'), ch('plan', '둘이 양쪽에서 몰자고 작전을 바꿔요', '규칙을 지키며 꼬리를 하나 뺏었어요.', '뿌듯함'), ch('give', '어차피 졌다고 그만해요', '우리 편이 한 명 모자라 더 어려워졌어요.', '속상함', '지고 있을 때 작전을 바꾸는 것이 전략형이에요.')]), prompt: '지고 있을 때 어떻게 할지 골라요.', target: { choice: 'plan' }, difficulty: 0.15 },
              { type: 'choice', prompt: '전략형 경기에 작전이 필요한 까닭은 무엇인가요?', options: ['상대가 막거나 쫓아오기 때문에', '기록을 재야 하기 때문에', '산길을 걸어야 하기 때문에'], answer: 0, difficulty: 0.15, explain: '상대가 있으니 상대 움직임에 맞춰 작전을 바꿔요.' },
              { type: 'mood', prompt: '꼬리 빼앗기 경기를 한 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '꼬리 빼앗기 작전',
          items: [
            { type: 'table', prompt: '상황마다 쓸 작전을 쓰세요.', columns: ['상황', '작전'], cells: [['상대 둘이 나를 쫓아와요', ''], ['구석에 몰렸어요', ''], ['우리 편이 꼬리를 뺏기려 해요', '']] },
            { type: 'choice', prompt: '수비 작전에 ○ 하세요.', options: ['둘이 양쪽에서 한 명을 몰아요', '넓은 곳으로 피해 거리를 둬요', '상대 뒤로 다가가요'], answer: '넓은 곳으로 피해 거리를 둬요' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '전략형 경기는 ___가 있어서 그 움직임을 보고 ___을 바꿔요.', answer: '상대, 작전' },
            { type: 'check', prompt: '오늘 지킨 안전 약속에 ✓ 하세요.', options: ['옷을 당기지 않았어요', '넘어진 친구가 있으면 멈췄어요', '쉬는 시간에 물을 마셨어요'] },
            { type: 'short', prompt: '작전 회의에서 우리 모둠이 바꾼 작전과 그 결과를 쓰세요.' },
          ],
          easy: {
            note: '구석은 피할 길이 적어요. 넓은 가운데로 가요.',
            items: [
              { type: 'choice', prompt: '구석에 몰렸을 때 작전은?', options: ['넓은 가운데로 돌아 나와요', '구석에서 가만히 있어요'], answer: '넓은 가운데로 돌아 나와요' },
              { type: 'short', prompt: '오늘 경기에서 내가 쓴 작전을 쓰세요.' },
              { type: 'draw', prompt: '꼬리 빼앗기 하는 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 맞는 곳에 놓으면 바로 표시되고, 작전 하나가 미리 이어져 있어요.',
          base: '모두 이은 뒤 확인해 스스로 고쳐요.',
          challenge: '작전과 상관없는 함정 카드가 섞이고, 타이머는 전체 8분에서 되풀이 횟수를 거꾸로 찾아 맞춰요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 혼자 뛰어다니기만 하고 작전을 쓰지 않는다 → 작전 회의마다 "한 가지만 바꾸기"를 정한다. ② 옷이나 팔을 잡는다 → 꼬리 끝만 잡는 시범을 보이고, 어기면 그 경기에서 한 번 쉰다. ③ 구석으로 몰린다 → 경기장 가운데에 고깔을 두어 넓은 곳을 눈으로 보게 한다.',
      }),
      // ───────────────────────── 6 ─────────────────────────
      L(6, {
        title: '학교 숲 지도를 보고 표지 찾아가기',
        objective: '간단한 학교 숲 지도에서 방위와 칸 수를 읽어 표지 자리를 찾고, 자연을 해치지 않으며 도전하는 생태형 스포츠의 특징을 말할 수 있다.',
        illustration: art('pairs of children holding a simple paper map and following a winding path through a school garden to find small flag markers among trees and flowers', [
          { motif: 'sun', x: 412, y: 52, s: 0.7 }, { motif: 'tree', x: 90, y: 200 }, { motif: 'tree', x: 380, y: 196 },
          { motif: 'flower', x: 200, y: 222 }, { motif: 'leaf', x: 300, y: 150 }, { motif: 'hills', y: 214 },
          { motif: 'text', x: 240, y: 104, text: '표지를 찾아요', size: 24 },
        ]),
        safety: [OUT, '나뭇가지와 꽃을 꺾지 않고, 정해진 길로만 다녀요.', LOOK, SIGNAL, WATER],
        stages: stages(
          {
            teacher: '"생태형 스포츠는 무엇과 겨룬다고 했지요?" 자연 속에서 산길·숲길·날씨에 맞서 도전한다는 것을 떠올린다. 학교 숲 그림 지도를 보이며 "이 지도로 숨겨 둔 표지 세 개를 찾아요. 그런데 빨리 가려고 꽃밭을 가로질러도 될까요?"라고 묻는다. 지도 위쪽이 북쪽이라는 것과 방위(동서남북)를 짚는다.',
            student: '지도를 보고 숲에 숨겨 둔 표지를 찾아요. 빨리 가려고 꽃밭을 가로질러도 될까요?',
          },
          [
            {
              id: 'a1', title: '활동 1. 지도에서 표지 자리 찾기', minutes: 12, tool: 'map',
              task: '숲 지도에서 기준 장소로부터 방위와 칸 수를 따라가 표지 자리에 핀을 꽂아요. 찾은 자리를 실제 숲에서 짝과 함께 찾아가요.',
              teacher: '"북쪽은 지도의 어디였지요?" 오른쪽·왼쪽으로 말하는 학생에게 동쪽·서쪽 말로 바꾸어 말하게 한다. 칸을 셀 때 기준 장소 칸을 1로 세는 실수를 짚는다 — "기준 칸에서 한 칸 옮기면 1칸이에요."',
              levels: { easy: { readout: true }, base: {}, challenge: { north: 90 } },
              items: [
                { prompt: '출발 깃발에서 동쪽으로 3칸 간 곳에 첫 표지가 있어요. 핀을 꽂아요.', toolOptions: { places: [{ name: '출발 깃발', icon: 'dot', at: [0, 3] }, { name: '큰 나무', icon: 'forest', at: [2, 1] }, { name: '화단', icon: 'park', at: [4, 3] }, { name: '본관', icon: 'school', at: [5, 0] }] }, target: { from: '출발 깃발', dir: '동', steps: 3 }, levels: { challenge: { prompt: '이 지도는 북쪽이 오른쪽이에요. 출발 깃발에서 동쪽으로 3칸 간 곳에 핀을 꽂아요.' } }, difficulty: 0.15 },
                { prompt: '큰 나무에서 남쪽으로 2칸 간 곳에 둘째 표지가 있어요. 핀을 꽂아요.', toolOptions: { places: [{ name: '출발 깃발', icon: 'dot', at: [0, 3] }, { name: '큰 나무', icon: 'forest', at: [2, 1] }, { name: '화단', icon: 'park', at: [4, 3] }, { name: '본관', icon: 'school', at: [5, 0] }] }, target: { from: '큰 나무', dir: '남', steps: 2 }, levels: { challenge: { prompt: '이 지도는 북쪽이 오른쪽이에요. 큰 나무에서 남쪽으로 2칸 간 곳에 핀을 꽂아요.' } }, difficulty: 0.2 },
                { prompt: '화단에서 북쪽으로 2칸 간 곳에 셋째 표지가 있어요. 핀을 꽂아요.', toolOptions: { places: [{ name: '출발 깃발', icon: 'dot', at: [0, 3] }, { name: '큰 나무', icon: 'forest', at: [2, 1] }, { name: '화단', icon: 'park', at: [4, 3] }, { name: '본관', icon: 'school', at: [5, 0] }] }, target: { from: '화단', dir: '북', steps: 2 }, levels: { challenge: { prompt: '이 지도는 북쪽이 오른쪽이에요. 화단에서 북쪽으로 2칸 간 곳에 핀을 꽂아요.' } }, difficulty: 0.25 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 짝과 숲 표지 찾기', minutes: 14, tool: 'timer',
              task: '짝과 출발 전 점검을 하고 숲 표지 찾기를 해요. 찾은 표지 수와 걸린 시간을 적고, 길에서 생기는 상황에 어떻게 할지 이야기해요.',
              teacher: '"빨리 찾는 것보다 자연을 지키며 찾는 것이 생태형의 규칙이에요." 꽃밭이나 나무 사이를 가로지르는 짝이 보이면 멈추고 길로 돌아가게 한다. 다 찾고 돌아온 짝부터 기록을 적는다.',
              levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
              items: [
                { prompt: '짝과 출발하기 전에 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['짝을 정하고 함께 출발해요', '돌아올 시간과 신호를 알아요', '정해진 숲 구역을 지도에서 확인했어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '숲 표지 찾기를 마치고 찾은 표지 수와 걸린 시간을 적어요.', toolOptions: { fields: [{ label: '찾은 표지 수', unit: '개', max: 3 }, { label: '걸린 시간', unit: '분', max: 30 }] }, target: { records: true }, difficulty: 0.15 },
                { prompt: '짝과 숲 표지 찾기를 해 보고, 가장 찾기 어려웠던 표지와 그 까닭을 이야기해요.', free: true, talk: true, difficulty: 0.15 },
                { prompt: '숲 표지 찾기를 하며 해낸 것을 점검 목록에 표시해요.', target: { selfCheck: ['짝과 떨어지지 않았어요', '정해진 길로만 다녔어요', '꽃과 나무를 꺾지 않았어요'] }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"오늘 우리는 누구와 겨뤘나요?" 친구가 아니라 지도·숲길과 겨뤘다는 대답을 기다린다. "꽃밭을 가로질렀다면 빨랐겠지만 무엇을 잃었을까요?" 짝과 이야기한 뒤 출구 질문을 푼다.',
            exitTicket: [
              { type: 'tool', tool: 'map', options: { places: [{ name: '정자', icon: 'park', at: [3, 1] }, { name: '연못가 나무', icon: 'forest', at: [1, 3] }, { name: '본관', icon: 'school', at: [5, 3] }] }, prompt: '정자에서 서쪽으로 2칸 간 곳에 표지가 있어요. 핀을 꽂아요.', target: { from: '정자', dir: '서', steps: 2 }, difficulty: 0.2 },
              { type: 'choice', prompt: '생태형 스포츠에서 가장 먼저 지킬 것은 무엇인가요?', options: ['자연을 해치지 않고 짝과 함께 다니기', '가장 빨리 달리기', '상대 편을 막기'], answer: 0, difficulty: 0.15, explain: '생태형은 자연과 어울리며 도전해요.' },
              { type: 'mood', prompt: '숲에서 표지를 찾아 본 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '숲 표지 찾기',
          items: [
            { type: 'figure', prompt: '지도를 보고 큰 나무에서 동쪽으로 2칸 간 곳에 ○ 하세요.', tool: 'map', options: { places: [{ name: '출발 깃발', icon: 'dot', at: [0, 3] }, { name: '큰 나무', icon: 'forest', at: [2, 1] }, { name: '화단', icon: 'park', at: [4, 3] }] }, figures: [{ state: {}, caption: '지도 위쪽이 북쪽이에요.' }], answer: '큰 나무 오른쪽으로 2칸(4열 2행)' },
            { type: 'table', prompt: '오늘 기록을 쓰세요.', columns: ['찾은 표지 수', '걸린 시간', '가장 어려웠던 표지'], rows: 1 },
            { type: 'choice', prompt: '표지 찾기를 하다가 꽃밭이 앞을 막았어요. 알맞은 것에 ○ 하세요.', options: ['꽃밭을 가로질러요', '길을 따라 돌아가요', '꽃을 꺾어 표시해요'], answer: '길을 따라 돌아가요' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '생태형 스포츠는 ___ 속에서 ___을 해치지 않고 도전해요.', answer: '자연, 자연' },
            { type: 'short', prompt: '오늘 숲에서 새로 본 것(나무·꽃·새)을 하나 쓰세요.' },
          ],
          easy: {
            note: '지도 위쪽이 북쪽, 오른쪽이 동쪽이에요.',
            items: [
              { type: 'choice', prompt: '지도에서 오른쪽은 어느 쪽인가요?', options: ['동쪽', '서쪽'], answer: '동쪽' },
              { type: 'short', prompt: '짝과 찾은 표지 수를 쓰세요.' },
              { type: 'draw', prompt: '숲에서 표지를 찾은 장면을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '핀을 꽂으면 그 칸의 자리가 글로 보여 칸 수를 세기 쉬워요.',
          base: '방위와 칸 수만 보고 스스로 핀을 꽂아요.',
          challenge: '지도의 북쪽이 오른쪽으로 돌아가 있어 방위를 다시 맞춰 읽고, 표지 찾기는 시간 재기로 직접 재요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 오른쪽·왼쪽과 동쪽·서쪽을 섞는다 → 지도를 실제 북쪽에 맞춰 들고 출발하게 한다. ② 기준 칸을 1칸으로 센다 → "옮긴 칸을 센다"를 손가락으로 짚게 한다. ③ 빨리 찾으려고 꽃밭·나무 사이를 지난다 → 생태형의 첫 규칙은 자연을 지키는 것임을 출발 전에 약속한다. 학교 숲이 없으면 운동장 둘레 화단·나무를 표지 자리로 쓴다.',
      }),
      // ───────────────────────── 7 ─────────────────────────
      L(7, {
        title: '세 갈래 놀이를 돌아보며 더 하고 싶은 갈래 고르기',
        objective: '세 갈래 놀이에서 느낀 재미를 스스로 돌아보고, 더 해 보고 싶은 갈래를 골라 그 갈래의 특징을 들어 까닭을 말할 수 있다.',
        illustration: art('children sitting in a circle on the grass holding three paper cards shaped like a target, a running tail and a tree, sharing their thoughts', [
          { motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'cloud', x: 96, y: 50 }, { motif: 'hills', y: 214 },
          { motif: 'star', x: 150, y: 150 }, { motif: 'leaf', x: 240, y: 156 }, { motif: 'tree', x: 330, y: 200, s: 0.8 },
          { motif: 'text', x: 240, y: 104, text: '나는 어느 갈래가 좋을까?', size: 22 },
        ]),
        safety: [SPACE, SIGNAL, STOP],
        stages: stages(
          {
            teacher: '과녁 던지기·꼬리 빼앗기·숲 표지 찾기 사진을 칠판에 붙인다. "세 놀이 가운데 다시 하고 싶은 것 앞에 서 볼까요?" 학생들이 자리를 고른 뒤 "왜 그 자리에 섰나요?"라고 묻는다. "재미없던 갈래는 다시 안 해도 될까요?"라는 질문을 남겨 두고 오늘 끝에 다시 묻는다.',
            student: '세 놀이 가운데 다시 하고 싶은 것 앞에 서 보고, 왜 그곳을 골랐는지 떠올려요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 갈래마다 느낀 재미 돌아보기', minutes: 10, tool: 'emotion',
              task: '세 놀이를 하나씩 떠올리며 내가 느낀 재미의 크기를 눈금에서 골라요. 정답은 없어요. 내 마음 그대로 골라요.',
              teacher: '"친구가 고른 크기를 따라 하지 말고 내 마음을 골라요." 다 고르면 손을 들어 갈래마다 가장 큰 눈금을 고른 친구가 몇 명인지 함께 센다. 작은 눈금을 고른 학생에게 "어느 때 재미가 줄었나요?"라고 물어 다음 활동의 실마리로 삼는다.',
              levels: { easy: { steps: 3 }, base: {}, challenge: { steps: 7 } },
              items: [
                { prompt: '콩주머니 과녁 던지기(기술형)를 하며 느낀 재미는 얼마나 컸나요?', toolOptions: { mode: 'scale', situation: '콩주머니 과녁 던지기 대회에서 판마다 점수를 적었어요.', feeling: '신남', ask: '내가 느낀 재미의 크기를 골라요.' }, target: { level: 'any' }, difficulty: 0.05 },
                { prompt: '꼬리 빼앗기(전략형)를 하며 느낀 재미는 얼마나 컸나요?', toolOptions: { mode: 'scale', situation: '꼬리 빼앗기 경기에서 작전을 바꾸며 상대와 겨뤘어요.', feeling: '신남', ask: '내가 느낀 재미의 크기를 골라요.' }, target: { level: 'any' }, difficulty: 0.05 },
                { prompt: '숲 표지 찾기(생태형)를 하며 느낀 재미는 얼마나 컸나요?', toolOptions: { mode: 'scale', situation: '짝과 지도를 들고 숲속 표지를 찾아다녔어요.', feeling: '신남', ask: '내가 느낀 재미의 크기를 골라요.' }, target: { level: 'any' }, difficulty: 0.05 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 고른 까닭을 갈래의 특징으로 말하기', minutes: 16, tool: 'mindmap',
              task: '갈래마다 재미의 까닭이 되는 특징을 잇고, 재미없던 갈래에 대한 알맞은 생각을 골라요. 마지막에 더 해 보고 싶은 갈래와 까닭을 짝에게 말해요.',
              teacher: '"그냥 좋아서요" 대신 "○○형은 ○○해서 좋아요"처럼 갈래의 특징을 넣어 말하게 한다. "재미없으면 다시 할 필요 없어요" 카드를 고른 학생에게 "처음 자전거를 탈 때도 재미있었나요?"라고 되묻는다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '갈래 가지에 그 갈래만의 재미가 되는 까닭 카드를 하나씩 이어요.', toolOptions: { mode: 'match', topic: '갈래의 재미', slots: [{ id: '기술형', label: '기술형' }, { id: '전략형', label: '전략형' }, { id: '생태형', label: '생태형' }], cards: ['내 기록이 늘어나는 것을 볼 수 있어서', '친구와 작전을 짜서 함께 이길 수 있어서', '숲과 바람을 느끼며 움직일 수 있어서'] }, target: { match: { 기술형: '내 기록이 늘어나는 것을 볼 수 있어서', 전략형: '친구와 작전을 짜서 함께 이길 수 있어서', 생태형: '숲과 바람을 느끼며 움직일 수 있어서' } }, levels: { easy: { state: { at: { '내 기록이 늘어나는 것을 볼 수 있어서': 0 } } } }, difficulty: 0.15 },
                { prompt: '재미없던 갈래에 대해 알맞은 생각 카드만 골라요.', toolOptions: { mode: 'pick', topic: '재미없던 갈래', cards: ['재미없으면 다시 할 필요 없어요', '규칙을 조금 바꾸면 재미있어질 수 있어요', '조금씩 잘하게 되면 재미가 생기기도 해요', '못하는 갈래는 친구에게 맡겨요'] }, target: { pick: ['규칙을 조금 바꾸면 재미있어질 수 있어요', '조금씩 잘하게 되면 재미가 생기기도 해요'] }, difficulty: 0.2,
                  predict: { q: '처음에 재미없던 갈래도 나중에 재미있어질 수 있을까요?', options: ['있어요', '없어요'], answer: 0 },
                  conclude: '재미는 정해져 있지 않아요. 규칙을 바꾸거나 조금씩 잘하게 되면 재미없던 갈래도 즐거워질 수 있어요.' },
                { prompt: '갈래마다 길러 주는 힘 카드를 나누어요.', toolOptions: { topic: '길러 주는 힘', slots: ['기술형', '전략형', '생태형'], cards: ['기록을 재며 목표를 세우는 힘', '내 동작을 꼼꼼히 살피는 힘', '친구와 생각을 나누는 힘', '상대 움직임을 읽는 눈', '자연을 아끼는 마음', '길과 땅 모양을 살피는 눈'] }, target: { sort: { 기술형: ['기록을 재며 목표를 세우는 힘', '내 동작을 꼼꼼히 살피는 힘'], 전략형: ['친구와 생각을 나누는 힘', '상대 움직임을 읽는 눈'], 생태형: ['자연을 아끼는 마음', '길과 땅 모양을 살피는 눈'] } }, difficulty: 0.25,
                  hints: ['갈래마다 오늘 놀이에서 무엇에 마음을 썼는지 떠올려요. 내 점수, 상대와 작전, 숲과 길 가운데 무엇이었나요?', '넣은 카드가 그 놀이에서 정말 쓰였는지 장면을 떠올려 견주어 보세요.'] },
                { prompt: '더 해 보고 싶은 갈래와 그 까닭을 "○○형은 ○○해서" 틀로 짝에게 말해요.', free: true, talk: true, difficulty: 0.15 },
              ],
            },
          ],
          {
            teacher: '"재미없던 갈래는 다시 안 해도 될까요?" 도입에서 남긴 질문에 다시 답하게 한다. 규칙을 바꾸거나 조금씩 익히면 달라질 수 있다는 대답을 받고, 다음 시간에 어려웠던 갈래를 바꿔 볼 방법을 찾는다고 알려 준다.',
            exitTicket: [
              { type: 'short', prompt: '더 해 보고 싶은 갈래와 그 갈래의 특징을 넣은 까닭을 한 문장으로 쓰세요.' },
              { type: 'choice', prompt: '처음 해 본 갈래가 재미없었을 때 알맞은 생각은 무엇인가요?', options: ['조금씩 익히면 재미있어질 수 있어요', '나와 맞지 않으니 다시 안 해요', '잘하는 친구만 하면 돼요'], answer: 0, difficulty: 0.15, explain: '재미는 익히면서 생기기도 해요.' },
              { type: 'mood', prompt: '세 갈래를 돌아본 지금 마음은 어떤가요?' },
            ],
          },
        ),
        worksheet: {
          title: '내가 좋아하는 갈래',
          items: [
            { type: 'table', prompt: '갈래마다 재미의 크기(1~5)와 그 까닭을 쓰세요.', columns: ['갈래', '해 본 놀이', '재미(1~5)', '까닭'], cells: [['기술형', '과녁 던지기', '', ''], ['전략형', '꼬리 빼앗기', '', ''], ['생태형', '숲 표지 찾기', '', '']] },
            { type: 'choice', prompt: '"친구와 작전을 짜서 함께 이길 수 있어서"는 어느 갈래의 재미인가요?', options: ['기술형', '전략형', '생태형'], answer: '전략형' },
            { type: 'blank', prompt: '내가 더 해 보고 싶은 갈래를 넣어 쓰세요.', text: '나는 ___형이 더 해 보고 싶어요. 왜냐하면 ___ 때문이에요.', answer: '스스로 쓰기' },
            { type: 'short', prompt: '재미가 적었던 갈래를 더 재미있게 하려면 무엇을 바꿔 볼지 쓰세요.' },
            { type: 'draw', prompt: '다시 하고 싶은 놀이를 하는 내 모습을 그리세요.' },
          ],
          easy: {
            note: '기술형 = 내 기록, 전략형 = 작전, 생태형 = 자연.',
            items: [
              { type: 'choice', prompt: '가장 재미있었던 놀이에 ○ 하세요.', options: ['과녁 던지기', '꼬리 빼앗기', '숲 표지 찾기'], answer: '스스로 고르기' },
              { type: 'short', prompt: '그 놀이가 재미있었던 까닭을 쓰세요.' },
              { type: 'draw', prompt: '그 놀이를 하는 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '재미의 크기를 세 칸 눈금에서 고르고, 까닭 카드를 맞는 가지에 놓으면 바로 표시돼요.',
          base: '다섯 칸 눈금에서 고르고, 모두 놓은 뒤 확인해 고쳐요.',
          challenge: '일곱 칸 눈금으로 더 자세히 고르고, 까닭을 말할 때 그 놀이의 장면을 하나 꼭 넣어요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 재미없는 갈래는 자기와 맞지 않으니 해 볼 필요가 없다고 여긴다 → 처음 배우는 것은 누구나 서툴다는 경험(자전거·줄넘기)을 떠올리게 한다. ② 까닭을 "그냥"으로 말한다 → "○○형은 ○○해서" 틀을 칠판에 둔다. ③ 친구의 눈금을 따라 고른다 → 재미 눈금은 정답이 없고 점수가 아니라고 미리 말한다.',
      }),
      // ───────────────────────── 8 ─────────────────────────
      L(8, {
        title: '어려웠던 갈래에서 다음에 바꿔 볼 방법 정하기',
        objective: '우리 반이 어려워한 갈래를 그래프에서 읽고, 내가 어려웠던 장면에 알맞은 연습 방법이나 바꿀 규칙을 골라 다음에 해 볼 방법 하나를 정할 수 있다.',
        illustration: art('a class bar chart made of paper strips on a gym wall, with children pointing at the tallest strip and planning with sticky notes', [
          { motif: 'sun', x: 412, y: 54, s: 0.7 }, { motif: 'cloud', x: 90, y: 50 }, { motif: 'hills', y: 214 },
          { motif: 'star', x: 120, y: 160, s: 0.8 }, { motif: 'leaf', x: 360, y: 170 },
          { motif: 'text', x: 240, y: 110, text: '다음엔 이렇게 해 볼래요', size: 22 },
        ]),
        safety: [SPACE, SIGNAL, '연습을 해 볼 때는 정해진 자리 안에서, 한 사람씩 차례로 해요.'],
        stages: stages(
          {
            teacher: '지난 시간에 학생들이 붙인 "가장 어려웠던 갈래" 붙임쪽지를 막대 모양으로 모아 보여 준다. "가장 많은 친구가 어려워한 갈래는 무엇일까요?" 대답을 듣고 "어려울 때는 힘을 더 세게 쓰면 저절로 될까요?"라고 묻는다. 오늘은 어려웠던 장면마다 해 볼 방법을 고른다고 알려 준다.',
            student: '우리 반 친구들은 어느 갈래를 가장 어려워했을까요? 어려울 때는 무엇을 바꿔 볼까요?',
          },
          [
            {
              id: 'a1', title: '활동 1. 우리 반 그래프 읽기', minutes: 10, tool: 'chart',
              task: '우리 반 친구들이 "가장 어려웠던 갈래"로 고른 사람 수 막대그래프를 읽고 물음에 답해요.',
              teacher: '"막대 끝이 눈금 사이에 있으면 어떻게 읽을까요?" 눈금 한 칸의 크기를 먼저 세게 한다. 사람 수가 많다고 그 갈래가 나쁜 것이 아니라, 다음에 함께 바꿔 볼 곳이라는 것을 말해 준다.',
              levels: { easy: { showValues: true }, base: {}, challenge: {} },
              items: [
                { prompt: '가장 많은 친구가 어려워한 갈래를 골라요.', toolOptions: { type: 'bar', mode: 'read', title: '가장 어려웠던 갈래', unit: '명', xLabel: '갈래', yLabel: '사람 수', data: [['기술형', 7], ['전략형', 11], ['생태형', 6]], question: '가장 많은 친구가 어려워한 갈래는?', choices: ['기술형', '전략형', '생태형'] }, target: { pick: 1 }, difficulty: 0.1 },
                { prompt: '기술형을 가장 어려웠다고 고른 친구는 몇 명인지 써요.', toolOptions: { type: 'bar', mode: 'read', title: '가장 어려웠던 갈래', unit: '명', xLabel: '갈래', yLabel: '사람 수', data: [['기술형', 7], ['전략형', 11], ['생태형', 6]], question: '기술형을 고른 친구는 몇 명인가요?' }, target: { value: 7 }, difficulty: 0.15 },
                { prompt: '전략형을 고른 친구는 생태형을 고른 친구보다 몇 명 더 많은지 써요.', toolOptions: { type: 'bar', mode: 'read', title: '가장 어려웠던 갈래', unit: '명', xLabel: '갈래', yLabel: '사람 수', data: [['기술형', 7], ['전략형', 11], ['생태형', 6]], question: '전략형은 생태형보다 몇 명 더 많나요?' }, target: { value: 5 }, difficulty: 0.25 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 어려웠던 장면에 맞는 방법 고르기', minutes: 16, tool: 'mindmap',
              task: '어려웠던 장면마다 알맞은 연습 방법을 잇고, 갈래마다 처음 하는 친구도 할 수 있게 바꿀 규칙을 골라요. 고른 방법 하나를 짝과 직접 해 봐요.',
              teacher: '"힘이 세지면 저절로 될까요?" 과녁을 넘기는 학생은 힘이 아니라 조절이 필요했다는 것을 예로 든다. 방법을 고른 뒤 운동장 가장자리에서 2분 동안 그 방법만 짝과 해 보게 한다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '어려웠던 장면에 알맞은 연습 방법을 하나씩 이어요.', toolOptions: { mode: 'match', topic: '어려움과 방법', slots: [{ id: 'aim', label: '과녁 던지기 점수가 들쭉날쭉해요' }, { id: 'tail', label: '꼬리 빼앗기에서 늘 구석에 몰려요' }, { id: 'map', label: '숲 지도에서 방향이 헷갈려요' }], cards: ['팔 흔들기를 세 번 같은 크기로 연습해요', '넓은 가운데 쪽을 보며 움직이는 연습을 해요', '지도의 북쪽을 실제 북쪽에 맞추고 출발해요'] }, target: { match: { aim: '팔 흔들기를 세 번 같은 크기로 연습해요', tail: '넓은 가운데 쪽을 보며 움직이는 연습을 해요', map: '지도의 북쪽을 실제 북쪽에 맞추고 출발해요' } }, levels: { easy: { state: { at: { '팔 흔들기를 세 번 같은 크기로 연습해요': 0 } } } }, difficulty: 0.15 },
                { prompt: '바꿔 볼 방법을 고를 때 알맞은 생각만 골라요.', toolOptions: { mode: 'pick', topic: '바꿔 보기', cards: ['한 번에 한 가지만 바꿔 봐요', '친구가 잘하는 방법을 보고 따라 해 봐요', '안 되면 힘만 더 세게 써요', '규칙을 내 마음대로 바꿔 이겨요'] }, target: { pick: ['한 번에 한 가지만 바꿔 봐요', '친구가 잘하는 방법을 보고 따라 해 봐요'] }, levels: { challenge: { prompt: '바꿔 볼 방법을 고를 때 알맞은 생각만 골라요. 그럴듯하지만 알맞지 않은 카드도 섞여 있어요.', toolOptions: { cards: ['한 번에 한 가지만 바꿔 봐요', '친구가 잘하는 방법을 보고 따라 해 봐요', '안 되면 힘만 더 세게 써요', '규칙을 내 마음대로 바꿔 이겨요', '여러 가지를 한꺼번에 다 바꿔요'] } } }, difficulty: 0.2,
                  conclude: '어려운 동작은 힘이 세진다고 저절로 되지 않아요. 한 가지씩 바꾸며 연습해야 늘어요.' },
                { prompt: '처음 하는 친구도 할 수 있게 갈래마다 바꿀 규칙을 이어요.', toolOptions: { mode: 'match', topic: '쉽게 바꾼 규칙', slots: [{ id: '기술형', label: '기술형 과녁 던지기' }, { id: '전략형', label: '전략형 꼬리 빼앗기' }, { id: '생태형', label: '생태형 숲 표지 찾기' }], cards: ['과녁을 한 걸음 가까이 두고 시작해요', '경기장을 넓혀 몰리지 않게 해요', '표지 사이를 짧게 두고 시작해요'] }, target: { match: { 기술형: '과녁을 한 걸음 가까이 두고 시작해요', 전략형: '경기장을 넓혀 몰리지 않게 해요', 생태형: '표지 사이를 짧게 두고 시작해요' } }, difficulty: 0.2 },
                { prompt: '내가 고른 방법 하나를 짝과 2분 동안 해 보고, 무엇이 달라졌는지 말해요.', free: true, talk: true, difficulty: 0.15 },
              ],
            },
          ],
          {
            teacher: '"오늘 고른 방법을 써 보니 무엇이 달라졌나요?" 두세 명이 말한다. "한 번에 몇 가지를 바꾸는 것이 좋았나요?"라고 물어 한 가지씩 바꾸기를 짚는다. 정리 운동으로 천천히 걸으며 숨을 고른다.',
            exitTicket: [
              { type: 'tool', tool: 'emotion', options: br('피구에서 날아오는 공이 무서워 경기 내내 피하기만 했어요.', [ch('quit', '다음부터 피구에 나가지 않아요', '피구를 할 기회가 사라졌어요.', '속상함', '피하기만 하면 받는 힘을 기를 수 없어요.'), ch('soft', '부드러운 공으로 받기부터 연습해요', '가까이에서 받는 것이 조금씩 무섭지 않아졌어요.', '뿌듯함'), ch('hard', '힘을 길러 세게만 던져요', '여전히 날아오는 공이 무서웠어요.', '걱정', '무서운 것은 받기여서 받기를 연습해야 해요.')]), prompt: '공이 무서울 때 다음에 해 볼 방법을 골라요.', target: { choice: 'soft' }, difficulty: 0.15 },
              { type: 'choice', prompt: '어려운 갈래를 다시 해 볼 때 처음에 하면 좋은 것은 무엇인가요?', options: ['어려운 부분을 쉽게 바꿔 시작해요', '가장 어려운 방법으로 바로 해요', '구경만 해요'], answer: 0, difficulty: 0.15, explain: '쉽게 바꾼 규칙으로 시작해 조금씩 어렵게 해요.' },
              { type: 'mood', prompt: '다음에 해 볼 방법을 정한 지금 마음은 어떤가요?' },
            ],
          },
        ),
        worksheet: {
          title: '다음엔 이렇게 해 볼래요',
          items: [
            { type: 'figure', prompt: '그래프를 보고 기술형·전략형·생태형을 고른 친구 수를 아래에 쓰세요.', tool: 'chart', options: { type: 'bar', mode: 'read', title: '가장 어려웠던 갈래', unit: '명', data: [['기술형', 7], ['전략형', 11], ['생태형', 6]] }, figures: [{ state: {}, caption: '기술형 ( )명, 전략형 ( )명, 생태형 ( )명' }], answer: '7명, 11명, 6명' },
            { type: 'table', prompt: '내가 어려웠던 장면과 다음에 해 볼 방법을 쓰세요.', columns: ['갈래', '어려웠던 장면', '해 볼 방법'], rows: 1 },
            { type: 'choice', prompt: '바꿔 볼 방법을 고를 때 알맞은 것에 ○ 하세요.', options: ['한 번에 한 가지만 바꿔요', '힘만 더 세게 써요', '여러 가지를 한꺼번에 바꿔요'], answer: '한 번에 한 가지만 바꿔요' },
            { type: 'short', prompt: '"힘이 세지면 저절로 잘하게 된다"는 말이 맞지 않는 까닭을 예를 들어 쓰세요.' },
            { type: 'check', prompt: '오늘 해 본 것에 ✓ 하세요.', options: ['그래프를 읽었어요', '방법 하나를 골랐어요', '짝과 방법을 해 보았어요'] },
          ],
          easy: {
            note: '어려울 때는 한 가지만 바꿔 봐요.',
            items: [
              { type: 'choice', prompt: '구석에 자꾸 몰릴 때 해 볼 방법은?', options: ['넓은 가운데를 보며 움직여요', '더 세게 달려요'], answer: '넓은 가운데를 보며 움직여요' },
              { type: 'short', prompt: '내가 다음에 해 볼 방법을 쓰세요.' },
              { type: 'draw', prompt: '그 방법으로 연습하는 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '그래프 막대 끝에 사람 수가 보이고, 카드를 맞는 곳에 놓으면 바로 표시돼요.',
          base: '눈금을 세어 그래프를 읽고, 모두 이은 뒤 확인해 고쳐요.',
          challenge: '두 막대의 차이를 셈해 읽고, 알맞지 않은 함정 카드가 더해진 문항이 있어요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 어려운 움직임은 힘이 세지면 저절로 된다고 여긴다 → 과녁을 넘기는 예로 힘이 아니라 조절이 필요했음을 보여 준다. ② 한꺼번에 여러 가지를 바꿔 무엇이 도움이 됐는지 모른다 → 한 가지씩 바꾸기를 약속한다. ③ 많이 고른 갈래를 "나쁜 경기"로 여긴다 → 함께 바꿔 볼 곳이라고 말해 준다.',
      }),
      // ───────────────────────── 9 ─────────────────────────
      L(9, {
        title: '세 갈래를 고루 담은 우리 반 스포츠 날 계획하기',
        objective: '세 갈래 활동을 고루 넣고 모두가 함께할 수 있게 규칙을 바꾸어 우리 반 스포츠 날의 차례와 시간을 계획할 수 있다.',
        illustration: art('a colorful paper-cut class sports day poster with three zones: a target toss, a tail-tag field and a garden trail, with children planning around a table', [
          { motif: 'sun', x: 410, y: 52, s: 0.7 }, { motif: 'cloud', x: 110, y: 50 }, { motif: 'hills', y: 214 },
          { motif: 'star', x: 120, y: 150 }, { motif: 'leaf', x: 240, y: 160 }, { motif: 'tree', x: 360, y: 200, s: 0.8 },
          { motif: 'text', x: 240, y: 104, text: '우리 반 스포츠 날', size: 24 },
        ]),
        safety: [GROUND, SPACE, SIGNAL, WATER, STOP],
        stages: stages(
          {
            teacher: '"다음 주에 우리 반 스포츠 날을 연다면 어떤 활동을 넣고 싶나요?" 몇 가지를 받아 적은 뒤 "한 갈래만 넣으면 어떤 친구가 아쉬울까요?"라고 묻는다. 7·8차시에 찾은 "재미없던 갈래도 바꾸면 즐거워진다"를 떠올리게 하고, 오늘은 세 갈래를 고루 넣고 모두가 할 수 있게 계획한다고 알려 준다.',
            student: '우리 반 스포츠 날에 어떤 활동을 넣을까요? 모두가 즐기려면 무엇을 생각해야 할까요?',
          },
          [
            {
              id: 'a1', title: '활동 1. 스포츠 날 활동 고르고 규칙 바꾸기', minutes: 12, tool: 'mindmap',
              task: '후보 활동을 세 갈래로 나누고, 활동을 고를 기준을 골라요. 함께하기 어려운 친구를 위해 바꿀 규칙도 이어요.',
              teacher: '"잘하는 친구만 나가는 스포츠 날은 누구의 날일까요?" 기준을 고를 때 모두가 함께할 수 있어야 한다는 것을 짚는다. 바꿀 규칙은 실제로 우리 반 스포츠 날에 쓸 것이므로 모둠에서 하나씩 골라 적게 한다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '스포츠 날 후보 활동을 세 갈래 가지로 나누어요.', toolOptions: { topic: '후보 활동', slots: ['기술형', '전략형', '생태형'], cards: ['훌라후프 과녁에 공 굴려 넣기', '제자리 멀리뛰기', '꼬리 빼앗기', '공 피하기 피구', '학교 숲 표지 찾기', '뒷산 오솔길 정해진 시간에 오르기'] }, target: { sort: { 기술형: ['훌라후프 과녁에 공 굴려 넣기', '제자리 멀리뛰기'], 전략형: ['꼬리 빼앗기', '공 피하기 피구'], 생태형: ['학교 숲 표지 찾기', '뒷산 오솔길 정해진 시간에 오르기'] } }, levels: { easy: { state: { at: { '제자리 멀리뛰기': 0 } } } }, difficulty: 0.15 },
                { prompt: '스포츠 날 활동을 고를 때 알맞은 기준 카드만 골라요.', toolOptions: { mode: 'pick', topic: '고르는 기준', cards: ['세 갈래가 고루 들어가요', '모두가 함께 할 수 있어요', '잘하는 친구만 나가요', '다치기 쉬운 활동일수록 재미있어요'] }, target: { pick: ['세 갈래가 고루 들어가요', '모두가 함께 할 수 있어요'] }, difficulty: 0.15 },
                { prompt: '함께하기 어려운 친구를 위해 바꿀 규칙 카드를 하나씩 이어요.', toolOptions: { mode: 'match', topic: '모두 함께', slots: [{ id: 'slow', label: '달리기가 느려 늘 꼴찌인 친구' }, { id: 'ball', label: '공이 날아오면 무서운 친구' }, { id: 'new', label: '규칙을 처음 듣는 친구' }], cards: ['빠르기가 비슷한 친구끼리 같은 조로 달려요', '부드러운 스펀지 공으로 바꾸어요', '경기 전에 시범을 한 번 보여 줘요'] }, target: { match: { slow: '빠르기가 비슷한 친구끼리 같은 조로 달려요', ball: '부드러운 스펀지 공으로 바꾸어요', new: '경기 전에 시범을 한 번 보여 줘요' } }, difficulty: 0.2,
                  conclude: '규칙을 조금 바꾸면 잘하는 친구도, 처음 하는 친구도 함께 즐길 수 있어요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 스포츠 날 차례와 시간 정하기', minutes: 14, tool: 'timer',
              task: '스포츠 날 하루 흐름을 차례대로 놓고, 경기 시간과 쉬는 시간을 타이머에 맞춰요. 계획을 마치고 점검 목록을 표시해요.',
              teacher: '"숨 고르기는 왜 경기가 끝나자마자 해야 할까요?" 갑자기 앉으면 어지러울 수 있다는 것을 짚는다. 시간 계획에서 마지막 경기 뒤에는 쉬는 시간이 없다는 것을 손가락으로 세며 확인하게 한다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '스포츠 날 하루 흐름 카드를 차례대로 놓아요.', toolOptions: { cards: ['세 갈래 경기 돌기', '물 마시고 잘한 점 칭찬 나누기', '다 함께 관절 돌리며 몸 풀기', '천천히 걸으며 숨 고르기'] }, target: { order: ['다 함께 관절 돌리며 몸 풀기', '세 갈래 경기 돌기', '천천히 걸으며 숨 고르기', '물 마시고 잘한 점 칭찬 나누기'] }, levels: { easy: { state: { order: ['다 함께 관절 돌리며 몸 풀기', '천천히 걸으며 숨 고르기', '세 갈래 경기 돌기', '물 마시고 잘한 점 칭찬 나누기'] } } }, difficulty: 0.15,
                  hints: ['몸을 데우고, 힘껏 움직이고, 몸을 식히고, 마음을 나누는 차례로 떠올려 보세요.', '경기 바로 뒤에 앉아서 이야기하면 숨이 찬 몸이 어떨지 생각해 보세요.'] },
                { prompt: '세 갈래 경기를 8분씩 하고 경기 사이에 2분 쉬도록 타이머를 맞추어요.', toolOptions: { plan: { work: 300, rest: 60, rounds: 2 }, workStep: 60, restStep: 30 }, target: { plan: { work: 480, rest: 120, rounds: 3 } }, levels: { challenge: { prompt: '경기를 8분씩 3번 하고, 모두 28분이 되도록 경기 사이에 쉬는 시간을 맞추어요.', target: { total: 1680, plan: { work: 480, rounds: 3 } } } }, difficulty: 0.25 },
                { prompt: '스포츠 날 계획을 마치고 해낸 것을 점검 목록에 표시해요.', target: { selfCheck: ['세 갈래 활동을 모두 넣었어요', '모두가 할 수 있게 규칙을 바꿨어요', '몸 풀기와 숨 고르기를 넣었어요'] }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"우리 계획에서 가장 자랑하고 싶은 규칙은 무엇인가요?" 모둠마다 하나씩 말한다. 이 계획대로 다음 체육 시간에 스포츠 날을 열고, 1~9차시에서 배운 세 갈래를 몸으로 다시 겪는다고 알려 준다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { topic: '처음 보는 스포츠', slots: ['기술형', '전략형', '생태형'], cards: ['양궁', '배구', '강에서 카누 타며 물길 따라가기'] }, prompt: '처음 보는 스포츠 카드를 세 갈래로 나누어요.', target: { sort: { 기술형: ['양궁'], 전략형: ['배구'], 생태형: ['강에서 카누 타며 물길 따라가기'] } }, difficulty: 0.25 },
              { type: 'choice', prompt: '모두가 즐기는 스포츠 날을 위해 가장 알맞은 생각은 무엇인가요?', options: ['처음 하는 친구도 함께할 수 있게 규칙을 바꿔요', '이긴 편만 다음 경기에 나가요', '한 갈래만 계속 해요'], answer: 0, difficulty: 0.15, explain: '규칙을 바꾸면 모두가 함께 즐길 수 있어요.' },
              { type: 'mood', prompt: '우리 반 스포츠 날을 계획한 지금 마음은 어떤가요?' },
            ],
          },
        ),
        worksheet: {
          title: '우리 반 스포츠 날 계획표',
          items: [
            { type: 'table', prompt: '갈래마다 넣을 활동과 바꿀 규칙을 쓰세요.', columns: ['갈래', '활동', '모두를 위해 바꿀 규칙'], cells: [['기술형', '', ''], ['전략형', '', ''], ['생태형', '', '']] },
            { type: 'blank', prompt: '시간 계획을 쓰세요.', text: '경기 ___분씩 ___번, 사이에 ___분 쉬면 모두 ___분이에요.', answer: '8, 3, 2, 28' },
            { type: 'choice', prompt: '숨 고르기를 넣을 알맞은 때에 ○ 하세요.', options: ['몸 풀기 전', '경기가 끝난 바로 뒤', '점심시간'], answer: '경기가 끝난 바로 뒤' },
            { type: 'check', prompt: '우리 계획에 들어간 것에 ✓ 하세요.', options: ['세 갈래 활동', '바꾼 규칙', '몸 풀기', '숨 고르기', '물 마시기'] },
            { type: 'short', prompt: '1~9차시에서 배운 것 가운데 스포츠 날에 꼭 쓰고 싶은 것을 쓰세요.' },
          ],
          easy: {
            note: '기술형·전략형·생태형을 하나씩 넣어요.',
            items: [
              { type: 'choice', prompt: '꼬리 빼앗기는 어느 갈래인가요?', options: ['기술형', '전략형', '생태형'], answer: '전략형' },
              { type: 'short', prompt: '스포츠 날에 하고 싶은 활동을 쓰세요.' },
              { type: 'draw', prompt: '우리 반 스포츠 날 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 맞는 가지에 놓으면 바로 표시되고, 하루 흐름의 첫 카드가 바르게 놓여 있어요.',
          base: '스스로 나누고 차례와 시간을 맞춘 뒤 확인해요.',
          challenge: '경기 시간과 횟수, 전체 28분에서 경기 사이 쉬는 시간을 거꾸로 찾아 타이머를 맞춰요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 좋아하는 갈래만 넣으려 한다 → 7차시에서 찾은 갈래마다 길러 주는 힘을 떠올리게 한다. ② 규칙 바꾸기를 "봐주기"로 여긴다 → 모두가 겨룰 수 있게 만드는 것임을 말한다. ③ 마지막 경기 뒤에도 쉬는 시간을 더한다 → 경기와 쉬기를 손가락으로 번갈아 세게 한다. 이 계획은 다음 체육 시간 스포츠 날에 그대로 쓴다.',
      }),
      // @@NEXT@@
    ],
  });
})();
