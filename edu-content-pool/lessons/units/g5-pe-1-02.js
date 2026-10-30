/* 5학년 1학기 체육 2. 스포츠 — 47차시.
 * 기술형 스포츠(기록형·동작형·투기형, 1~24차시)와 전략형 스포츠(영역형·필드형·네트형, 25~47차시)를 '갈래 알기 → 기본 기능 → 활동 방법과 전략' 차례로 쌓는다.
 * 몸으로 하는 활동(뛰기·던지기·구르기·패스·게임)은 교구가 판정하지 않는다. 교구는 안전 점검·동작 차례·기록 적기·분류·판단·자료 읽기를 맡고,
 * 실제 움직임은 free 짝 활동·task·teacher·활동지에 적어 교사가 관찰한다. 종목 분류는 2022 개정 체육과의 스포츠 갈래(기술형: 기록·동작·투기 / 전략형: 영역·필드·네트)를 따른다.
 * 갈래가 엇갈릴 수 있는 종목(양궁·골프·피구 등)은 분류 카드로 쓰지 않는다. 태권도는 '겨루기'(투기형)와 '품새'(동작형)로 나누어 적는다.
 */
(function () {
  const UNIT = 'g5-pe-1-02';
  const CU = 'g5-체육-1학기-2';
  const BASE = { schema: 'edu-lesson.v1', grade: 5, subject: '체육', unitTitle: '2. 스포츠', minutes: 40, formats: ['chromebook', 'projector', 'print'] };
  // 체육은 units-map.json 에 없어 units-index.json 의 단원 성취기준(6체02-01~06)만 쓴다. 차시 묶음의 주제(topic)와 같은 번호를 고른다.
  const stdOf = (n) => `[6체02-0${n <= 8 ? 1 : n <= 16 ? 2 : n <= 24 ? 3 : n <= 32 ? 4 : n <= 40 ? 5 : 6}]`;
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
  // 스스로 마음 돌아보기(정답 없음) — emotion scale 3단계
  const mood3 = (situation, feeling, ask, prompt) => ({ type: 'tool', tool: 'emotion', options: { mode: 'scale', steps: 3, situation, feeling, ask, scaleLabels: { 1: '아직 어려워요', 3: '자신 있어요' } }, prompt, target: { level: 'any' }, difficulty: 0.05 });
  const moodItem = (situation, feeling, ask, prompt) => ({ prompt, toolOptions: { mode: 'scale', steps: 3, situation, feeling, ask, scaleLabels: { 1: '아직 어려워요', 3: '자신 있어요' } }, target: { level: 'any' }, difficulty: 0.05 });
  // 안전 약속(차시마다 골라 쓴다)
  const SPACE = '친구와 두 팔을 벌려 닿지 않을 만큼 떨어져서 움직여요.';
  const WARM = '준비 운동으로 발목·무릎·손목을 충분히 풀고 시작해요.';
  const STOP = '숨이 너무 차거나 어지럽거나 아프면 바로 멈추고 선생님께 말해요.';
  const MAT = '매트는 겹치거나 밀리지 않게 깔고, 한 매트에는 한 사람씩 올라가요.';
  const PIT = '모래밭은 돌·물건을 고른 뒤 쓰고, 앞사람이 모래밭을 나간 뒤에 뛰어요.';
  const THROW = '던지기는 신호에 맞춰 같은 방향으로만 하고, 공을 주우러 갈 때는 모두 던지기를 멈춰요.';
  const CONTACT = '맞서는 놀이는 정한 부위(손바닥·어깨)만 쓰고, 상대가 "그만"이라고 하면 바로 멈춰요.';
  const BALL = '공은 친구 얼굴 높이로 세게 차거나 던지지 않고, 굴러간 공은 경기를 멈춘 뒤 주워요.';
  const LOOK = '공만 보지 말고 둘레 친구를 보며 움직이고, 부딪힐 것 같으면 속도를 줄여요.';
  const BAT = '배트(방망이)는 치는 사람만 들고, 친 뒤에는 던지지 말고 내려놓고 달려요.';
  const ROPE = '줄넘기는 둘레 친구와 줄 길이보다 멀리 떨어져서 하고, 쓰지 않는 줄은 묶어 바구니에 둬요.';
  const TAIL = '꼬리 뺏기는 꼬리(수건)만 잡고, 상대 몸을 밀거나 옷을 잡지 않아요.';
  const TOWEL = '수건은 손으로만 쥐고 손목에 감지 않으며, 놓을 때는 "놓을게" 하고 천천히 놓아요.';
  const NET = '라켓·손은 내 앞에서만 휘두르고, 네트를 잡거나 넘어가지 않아요.';
  // 코트 그림(map 교구를 칸 코트로 쓴다): 깃발 = 우리 편, 방패 = 상대, 점 = 고를 곳. 지도 기본 힌트가 엉뚱하므로 이 판을 쓰는 문항은 hints 세 단계를 꼭 쓴다.
  const COURT = (title, grid, places) => ({ mode: 'pin', title, grid, places, meanings: { school: '우리 편', police: '상대', dot: '고를 곳' } });
  const US = (name, at) => ({ name, icon: 'school', at });
  const THEM = (name, at) => ({ name, icon: 'police', at });
  const SPOT = (name, at) => ({ name, icon: 'dot', at });

  PaperLessons.registerUnit({
    id: UNIT, schema: 'edu-unit.v1', catalogUnit: CU,
    grade: 5, subject: '체육', unitTitle: '2. 스포츠',
    flow: '1~8차시는 종목이 무엇을 겨루는지에 따라 기술형 스포츠를 기록형·동작형·투기형으로 나누고, 세 갈래를 몸으로 맛본 뒤 나에게 맞는 갈래와 필요한 연습을 정합니다. 9~16차시는 멀리뛰기·던지기·매트 운동의 기본 기능을 동작 단계로 나누어 원리를 알고, 기록을 재며 가장 잘된 시도와 고칠 동작을 찾습니다. 17~24차시는 기록 재는 역할과 방법을 익히고 기록표를 근거로 경기 방법을 골랐다가 효과를 따져 바꾸며, 작은 기록 대회로 기술형을 마무리합니다. 25~40차시는 득점 방식으로 영역형·필드형·네트형을 가르고 변형 게임에 참여한 뒤, 패스·드리블·서브·치기 같은 기본 기능을 받기 좋은 공의 조건과 성공·실패 자료로 다듬습니다. 41~47차시는 빈 공간을 만들고 막는 전략을 코트 그림과 게임에 적용하고, 모둠 회의로 역할을 바꾸어 다시 해 본 뒤 단원 전체를 스스로 평가합니다.',
    refs: {},
    lessons: [
      // ───────────────────────── 1 ─────────────────────────
      L(1, {
        title: '무엇을 겨루는지로 스포츠 지도 그리기',
        objective: '여러 종목이 무엇을 겨루는지 말하고, 기술형 스포츠를 기록형·동작형·투기형으로 나눌 수 있다.',
        illustration: art('a big paper map of sports where children place cards of running, tumbling and wrestling into three colorful islands', [
          { motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'cloud', x: 90, y: 50 }, { motif: 'hills', y: 210 },
          { motif: 'star', x: 120, y: 130 }, { motif: 'star', x: 240, y: 110 }, { motif: 'star', x: 360, y: 130 },
          { motif: 'text', x: 240, y: 180, text: '기록 · 동작 · 맞서기', size: 22 },
        ]),
        safety: [SPACE, WARM, STOP],
        stages: stages(
          {
            teacher: '달리기 결승선 사진, 매트 운동 사진, 씨름 사진을 차례로 띄우고 묻는다. "세 경기에서 이긴 사람은 어떻게 정할까요?" "더 빨리", "더 멋지게", "상대를 넘어뜨려서" 같은 대답을 기다린다. "힘이 센 사람이 언제나 이길까요?"라고 물어 두고, 이 단원에서는 무엇을 겨루는지에 따라 스포츠를 나누어 보고 직접 해 본다고 알린다.',
            student: '세 경기 사진을 보고, 누가 이기는지를 어떻게 정하는지 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 무엇을 겨루는지로 종목 나누기', minutes: 14, tool: 'mindmap',
              task: '종목 카드를 무엇을 겨루는지에 따라 나누어요. 나눈 뒤 짝에게 까닭을 한 문장으로 말해요.',
              teacher: '"기록형은 잰 값(시간·거리·횟수), 동작형은 동작의 정확함과 아름다움, 투기형은 상대와 직접 맞서 기술을 겨뤄요." 칠판에 세 낱말을 적어 둔다. 씨름을 "힘이 세면 이긴다"고 말하는 학생에게 "작은 선수가 큰 선수를 넘기는 장면을 본 적 있나요? 무엇으로 넘겼을까요?"라고 되묻는다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '경기 방식 카드를 알맞은 갈래와 이어요.', toolOptions: { mode: 'match', topic: '무엇을 겨루나요?', slots: [{ id: 'rec', label: '기록형' }, { id: 'act', label: '동작형' }, { id: 'vs', label: '투기형' }], cards: ['더 빨리·더 멀리 간 값을 견줘요', '동작이 바르고 아름다운지 견줘요', '상대와 직접 맞서 기술을 견줘요'] }, target: { match: { rec: '더 빨리·더 멀리 간 값을 견줘요', act: '동작이 바르고 아름다운지 견줘요', vs: '상대와 직접 맞서 기술을 견줘요' } }, levels: { easy: { state: { at: { '더 빨리·더 멀리 간 값을 견줘요': 0 } } } }, difficulty: 0.1 },
                { prompt: '기술형 종목 카드를 기록형·동작형·투기형으로 나누어요.', toolOptions: { topic: '기술형 스포츠', slots: ['기록형', '동작형', '투기형'], cards: ['50m 달리기', '멀리뛰기', '매트 구르기', '뜀틀 넘기', '씨름', '유도'] }, target: { sort: { '기록형': ['50m 달리기', '멀리뛰기'], '동작형': ['매트 구르기', '뜀틀 넘기'], '투기형': ['씨름', '유도'] } }, levels: { easy: { state: { at: { '50m 달리기': 0 } } }, challenge: { prompt: '기술형 종목 카드를 세 갈래로 나누어요. 편을 짜서 공으로 점수를 얻는 종목은 어느 갈래에도 넣지 않아요.', toolOptions: { cards: ['50m 달리기', '멀리뛰기', '매트 구르기', '뜀틀 넘기', '씨름', '유도', '농구'] } } }, difficulty: 0.2 },
                { prompt: '태권도는 하는 방법에 따라 갈래가 달라요. 두 카드를 알맞은 갈래와 이어요.', toolOptions: { mode: 'match', topic: '태권도 두 가지', slots: [{ id: 'act', label: '동작형' }, { id: 'vs', label: '투기형' }], cards: ['품새: 정한 동작을 바르게 보이기', '겨루기: 상대와 차기를 주고받기'] }, target: { match: { act: '품새: 정한 동작을 바르게 보이기', vs: '겨루기: 상대와 차기를 주고받기' } }, difficulty: 0.3,
                  hints: ['종목 이름보다 그 경기에서 무엇으로 점수를 받는지를 보세요.', '혼자 정해진 동작을 보이는 것과, 상대와 맞서 차기를 주고받는 것을 견주어 보세요.', '정한 동작을 바르게 보이면 동작형, 상대와 맞서 겨루면 투기형이에요.'],
                  conclude: '같은 종목 이름이라도 무엇을 겨루는지에 따라 갈래가 달라져요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 세 갈래를 몸으로 살짝 맛보기', minutes: 12, tool: 'timer',
              task: '안전 점검 뒤 짝과 세 놀이를 해요: 제자리멀리뛰기(기록형), 한 발 균형 5초(동작형), 손바닥 밀기(투기형). 제자리멀리뛰기 기록도 적어요.',
              teacher: '"손바닥 밀기는 손바닥끼리만 밀고, 발이 움직이면 끝이에요. 상대가 그만이라고 하면 바로 멈춰요." 제자리멀리뛰기는 짝이 발끝 자리에 콘을 놓고 줄자로 잰다. 기록은 남과 견주지 않고 1회와 2회를 견주게 한다.',
              levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
              items: [
                { prompt: '놀이를 시작하기 전에 강당을 둘러보고 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['둘레에 두 팔을 벌릴 공간이 있어요', '바닥에 물기나 떨어진 물건이 없어요', '신발 끈을 단단히 묶었어요'] }, target: { safety: true }, levels: { challenge: { prompt: '놀이를 시작하기 전에 강당과 내 몸을 둘러보고 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['둘레에 두 팔을 벌릴 공간이 있어요', '바닥에 물기나 떨어진 물건이 없어요', '신발 끈을 단단히 묶었어요', '손톱이 길지 않고 장신구를 뺐어요'] } } }, difficulty: 0.1 },
                { prompt: '짝과 세 놀이를 한 번씩 해 보아요. 다 하면 ‘짝·모둠과 함께 해 보았어요’를 눌러요.', free: true },
                { prompt: '제자리멀리뛰기를 두 번 하고, 짝이 잰 기록(cm)을 칸에 적어요.', toolOptions: { fields: [{ label: '1회', unit: 'cm', step: 5 }, { label: '2회', unit: 'cm', step: 5 }] }, target: { records: true }, levels: { challenge: { prompt: '제자리멀리뛰기를 두 번 하고 기록(cm)을 적은 뒤, 두 기록의 차이도 적어요.', toolOptions: { fields: [{ label: '1회', unit: 'cm', step: 5 }, { label: '2회', unit: 'cm', step: 5 }, { label: '두 기록의 차이', unit: 'cm', step: 5 }] } } }, difficulty: 0.15 },
              ],
            },
          ],
          {
            teacher: '"세 놀이에서 이긴 것을 어떻게 정했나요?" 제자리멀리뛰기는 잰 값, 균형은 흔들리지 않는 자세, 손바닥 밀기는 상대와 맞선 결과였다는 것을 학생 말로 정리한다. 출구 1번에서 높이뛰기를 동작형에 넣은 학생에게는 "무엇으로 순위를 매기나요?"라고 다시 묻는다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { topic: '어느 갈래일까?', slots: ['기록형', '동작형', '투기형'], cards: ['높이뛰기', '평균대', '레슬링'] }, prompt: '새 종목 카드 세 장을 기록형·동작형·투기형으로 나누어요.', target: { sort: { '기록형': ['높이뛰기'], '동작형': ['평균대'], '투기형': ['레슬링'] } }, difficulty: 0.2 },
              { type: 'choice', prompt: '동작형 스포츠에서 순위를 정하는 것은 무엇인가요?', options: ['잰 시간이나 거리', '동작의 정확함과 아름다움', '상대를 넘어뜨린 횟수'], answer: 1, difficulty: 0.2, explain: '동작형은 정해진 동작을 얼마나 바르고 아름답게 하는지 겨뤄요.' },
              { type: 'mood', prompt: '세 갈래 놀이를 해 본 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '무엇을 겨룰까요?',
          items: [
            { type: 'table', prompt: '종목을 갈래에 맞게 나누어 쓰세요. (수영, 리듬체조, 태권도 겨루기, 뜀틀, 씨름, 멀리뛰기)', columns: ['기록형', '동작형', '투기형'], rows: 2 },
            { type: 'choice', prompt: '"씨름은 힘이 센 사람이 언제나 이긴다"는 말에 대한 생각으로 알맞은 것에 ○ 하세요.', options: ['맞아요, 힘만 세면 돼요', '아니에요, 기술과 균형으로 겨뤄요', '씨름은 기록형이에요'], answer: '아니에요, 기술과 균형으로 겨뤄요' },
            { type: 'table', prompt: '제자리멀리뛰기 기록을 쓰세요.', columns: ['횟수', '1회', '2회'], cells: [['기록(cm)', '', '']] },
            { type: 'check', prompt: '오늘 지킨 안전 약속에 ✓ 하세요.', options: ['두 팔 간격을 지켰어요', '손바닥만 써서 밀었어요', '"그만" 소리에 바로 멈췄어요'] },
            { type: 'short', prompt: '세 놀이 가운데 가장 재미있었던 것과 그 까닭을 한 줄로 쓰세요.' },
          ],
          easy: {
            note: '기록형 = 잰 값, 동작형 = 바르고 아름다운 동작, 투기형 = 상대와 맞서기.',
            items: [
              { type: 'choice', prompt: '50m 달리기는 어느 갈래인가요?', options: ['기록형', '동작형', '투기형'], answer: '기록형' },
              { type: 'choice', prompt: '유도는 어느 갈래인가요?', options: ['기록형', '동작형', '투기형'], answer: '투기형' },
              { type: 'short', prompt: '오늘 해 본 놀이 하나를 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 맞는 칸에 놓으면 바로 표시되고, 첫 카드가 미리 놓여 있어요.',
          base: '갈래 뜻을 떠올리며 스스로 나누어요.',
          challenge: '전략형 함정 카드(농구)가 섞이고, 안전 점검 항목과 기록 차이 칸이 더해져요. 시간 재기 도구가 보여요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 기술을 겨루는 경기는 힘이 센 사람이 늘 이긴다고 여긴다 → 씨름·유도에서 작은 선수가 기술로 이기는 장면을 예로 든다. ② 종목 이름만 보고 갈래를 정한다 → 태권도 품새와 겨루기처럼 "무엇으로 점수를 받나"를 먼저 묻는다. ③ 손바닥 밀기에서 밀치거나 잡아당긴다 → 손바닥만, 발이 떨어지면 끝. 실제 움직임은 교구가 판정하지 않으므로 교사가 관찰한다.',
      }),
      // ───────────────────────── 2 ─────────────────────────
      L(2, {
        title: '올림픽 종목 카드로 기술형 세 갈래 가르기',
        objective: '처음 보는 기술형 종목을 무엇을 겨루는지 근거를 들어 기록형·동작형·투기형으로 나눌 수 있다.',
        illustration: art('children sorting colorful paper sport cards with swimming, figure skating and fencing pictures onto three paper podiums', [
          { motif: 'sun', x: 400, y: 56, s: 0.7 }, { motif: 'cloud', x: 100, y: 52 }, { motif: 'wave', x: 120, y: 210 },
          { motif: 'snow', x: 360, y: 100, s: 0.8 }, { motif: 'star', x: 240, y: 90 },
          { motif: 'text', x: 240, y: 170, text: '여름 · 겨울 올림픽', size: 22 },
        ]),
        safety: [SPACE, WARM, '앉아서 하는 활동 뒤 일어설 때는 천천히 일어나요.'],
        stages: stages(
          {
            teacher: '지난 시간의 세 낱말(잰 값·동작·맞서기)을 학생이 말하게 한 뒤, 여름·겨울 올림픽 종목 이름을 몇 개 들려준다. "수영과 피겨스케이팅은 둘 다 빙판·물에서 하는데 같은 갈래일까요?" 대답을 기다린 뒤 "하는 곳이 아니라 무엇으로 이기는지를 봐요"라고 짚는다.',
            student: '수영과 피겨스케이팅이 같은 갈래인지, 무엇으로 이기는지 떠올려 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 여름·겨울 종목 나누기', minutes: 14, tool: 'mindmap',
              task: '종목 카드를 기록형·동작형·투기형으로 나누어요. 헷갈리는 카드는 짝과 "무엇으로 이기나요?"를 물으며 정해요.',
              teacher: '"물에서 하니까 같은 갈래예요"라는 학생에게 "수영은 무엇을 재고, 다이빙은 무엇을 보고 점수를 주나요?"라고 묻는다. 펜싱은 칼을 쓰지만 상대를 찔러 점수를 얻으니 투기형이라는 것을 짚는다. 카드 갈래를 정한 근거를 짝에게 한 문장으로 말하게 한다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '여름 올림픽 종목 카드를 세 갈래로 나누어요.', toolOptions: { topic: '여름 종목', slots: ['기록형', '동작형', '투기형'], cards: ['수영 자유형', '다이빙', '펜싱', '마라톤', '리듬체조', '레슬링'] }, target: { sort: { '기록형': ['수영 자유형', '마라톤'], '동작형': ['다이빙', '리듬체조'], '투기형': ['펜싱', '레슬링'] } }, levels: { easy: { state: { at: { '수영 자유형': 0 } } } }, difficulty: 0.2 },
                { prompt: '겨울 올림픽 종목 카드를 기록형과 동작형으로 나누어요.', toolOptions: { topic: '겨울 종목', slots: ['기록형', '동작형'], cards: ['스피드스케이팅', '피겨스케이팅', '크로스컨트리 스키', '스키 점프 공중 동작 점수'] }, target: { sort: { '기록형': ['스피드스케이팅', '크로스컨트리 스키'], '동작형': ['피겨스케이팅', '스키 점프 공중 동작 점수'] } }, levels: { easy: { state: { at: { '스피드스케이팅': 0 } } }, challenge: { prompt: '겨울 종목 카드를 기록형과 동작형으로 나누어요. 편을 짜서 퍽(공)으로 점수를 얻는 종목은 넣지 않아요.', toolOptions: { cards: ['스피드스케이팅', '피겨스케이팅', '크로스컨트리 스키', '스키 점프 공중 동작 점수', '아이스하키'] } } }, difficulty: 0.25,
                  hints: ['빙판이나 눈 위라는 것보다, 시간을 재는지 동작에 점수를 주는지 보세요.', '심판이 동작을 보고 점수를 주는 카드가 무엇인지 다시 찾아보세요.', '시간을 재는 스피드스케이팅·크로스컨트리는 기록형, 동작에 점수를 주는 피겨·공중 동작은 동작형이에요.'] },
                { prompt: '같은 물속 종목이에요. 무엇을 겨루는지 알맞은 설명과 이어요.', toolOptions: { mode: 'match', topic: '물속 종목', slots: [{ id: 'swim', label: '수영 평영' }, { id: 'art', label: '아티스틱 스위밍' }], cards: ['정한 거리를 헤엄친 시간', '음악에 맞춘 동작의 아름다움'] }, target: { match: { swim: '정한 거리를 헤엄친 시간', art: '음악에 맞춘 동작의 아름다움' } }, difficulty: 0.2,
                  conclude: '하는 곳이 같아도 시간을 재면 기록형, 동작을 보면 동작형이에요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 종목 카드 몸으로 흉내 내기', minutes: 12, tool: 'timer',
              task: '모둠이 종목 카드를 하나씩 뽑아 10초 동안 몸으로 흉내 내면, 다른 모둠이 종목과 갈래를 맞혀요. 흉내 내기 차례도 정해요.',
              teacher: '"흉내는 제자리에서, 친구와 닿지 않게 해요." 흉내 내기를 마친 모둠은 "우리 종목은 ○○형이에요. 왜냐하면 ○○를 겨루기 때문이에요" 틀로 말하게 한다. 맞히는 모둠이 종목 이름만 말하면 "어느 갈래인가요? 까닭은?"을 덧붙여 묻는다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '흉내 내기 놀이를 하는 차례대로 카드를 놓아요.', toolOptions: { cards: ['맞힌 모둠이 갈래와 까닭 말하기', '종목 카드 뽑기', '10초 동안 몸으로 흉내 내기'] }, target: { order: ['종목 카드 뽑기', '10초 동안 몸으로 흉내 내기', '맞힌 모둠이 갈래와 까닭 말하기'] }, levels: { easy: { state: { order: ['종목 카드 뽑기', '맞힌 모둠이 갈래와 까닭 말하기', '10초 동안 몸으로 흉내 내기'] } }, challenge: { prompt: '흉내 내기 놀이 차례대로 카드를 놓아요. 놀이 전 준비와 놀이 뒤 정리도 넣어요.', toolOptions: { cards: ['맞힌 모둠이 갈래와 까닭 말하기', '종목 카드 뽑기', '친구와 닿지 않게 자리 넓히기', '10초 동안 몸으로 흉내 내기', '카드를 바구니에 돌려놓기'] }, target: { order: ['친구와 닿지 않게 자리 넓히기', '종목 카드 뽑기', '10초 동안 몸으로 흉내 내기', '맞힌 모둠이 갈래와 까닭 말하기', '카드를 바구니에 돌려놓기'] } } }, difficulty: 0.15,
                  hints: ['놀이가 어떻게 시작되고 어떻게 끝나는지 차례로 떠올려요.', '흉내를 내려면 먼저 무엇이 있어야 하는지 생각해 보세요.', '카드를 뽑고 → 흉내 내고 → 맞힌 모둠이 갈래와 까닭을 말해요.'] },
                { prompt: '모둠별로 종목 흉내 내기 놀이를 해요. 다 하면 ‘짝·모둠과 함께 해 보았어요’를 눌러요.', free: true },
                { prompt: '10초 흉내 내기와 5초 쉬기를 모둠 수만큼 4번 하도록 타이머를 맞춰요.', toolOptions: { plan: { work: 20, rest: 10, rounds: 2 } }, target: { plan: { work: 10, rest: 5, rounds: 4 } }, levels: { easy: { toolOptions: { workStep: 5, restStep: 5, showTotal: true } }, challenge: { prompt: '흉내 10초, 쉬기 5초를 되풀이해 전체 시간이 55초가 되게 맞춰요.', toolOptions: { workStep: 5, restStep: 5, showTotal: false }, target: { plan: { work: 10, rest: 5 }, total: 55 } } }, difficulty: 0.25 },
              ],
            },
          ],
          {
            teacher: '"하는 곳이 같으면 같은 갈래일까요?" 학생이 수영과 다이빙을 예로 들어 아니라고 말하게 한다. 출구 1번을 틀린 학생은 카드마다 "무엇을 재거나 보나요?"를 적어 보게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { topic: '새 종목', slots: ['기록형', '동작형', '투기형'], cards: ['쇼트트랙', '트램펄린', '복싱', '사이클 경주'] }, prompt: '처음 보는 종목 카드 네 장을 세 갈래로 나누어요.', target: { sort: { '기록형': ['쇼트트랙', '사이클 경주'], '동작형': ['트램펄린'], '투기형': ['복싱'] } }, difficulty: 0.3 },
              { type: 'choice', prompt: '수영과 다이빙이 서로 다른 갈래인 까닭은 무엇인가요?', options: ['하는 곳이 달라서', '겨루는 것이 시간과 동작으로 달라서', '선수 수가 달라서'], answer: 1, difficulty: 0.25, explain: '수영은 시간을, 다이빙은 동작을 겨뤄요.' },
              { type: 'mood', prompt: '종목을 갈래로 나누어 본 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '종목 갈래 가르기',
          items: [
            { type: 'table', prompt: '종목마다 무엇을 겨루는지 쓰고 갈래를 쓰세요.', columns: ['종목', '무엇을 겨루나요', '갈래'], cells: [['스피드스케이팅', '', ''], ['리듬체조', '', ''], ['펜싱', '', '']] },
            { type: 'choice', prompt: '동작형 종목에 ○ 하세요.', options: ['마라톤', '트램펄린', '레슬링'], answer: '트램펄린' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '하는 곳이 같아도 ___을 재면 기록형, ___을 보면 동작형이에요.', answer: '시간(거리), 동작' },
            { type: 'short', prompt: '우리 모둠이 흉내 낸 종목과 그 갈래, 까닭을 쓰세요.' },
          ],
          easy: {
            note: '"무엇으로 이기나요?"를 먼저 물어요.',
            items: [
              { type: 'choice', prompt: '수영 자유형은 무엇을 겨루나요?', options: ['헤엄친 시간', '동작의 아름다움'], answer: '헤엄친 시간' },
              { type: 'choice', prompt: '펜싱은 어느 갈래인가요?', options: ['기록형', '투기형'], answer: '투기형' },
              { type: 'draw', prompt: '좋아하는 종목 하나를 그리고 갈래를 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드가 맞는 칸에 놓이면 바로 표시되고, 타이머를 5초씩 맞추며 전체 시간이 보여요.',
          base: '여섯 종목을 스스로 나누고 놀이 차례를 세워요.',
          challenge: '함정 카드(아이스하키)가 섞이고, 놀이 앞뒤의 준비·정리까지 다섯 장의 차례를 세우며, 전체 시간을 셈해 타이머를 맞춰요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 하는 곳(물·빙판)으로 갈래를 정한다 → "무엇을 재거나 보나요?"로 다시 묻는다. ② 펜싱·복싱처럼 도구나 장갑이 있으면 다른 갈래로 여긴다 → 상대와 맞서 점수를 얻는지를 본다. ③ 힘이 센 사람이 늘 이긴다고 여긴다 → 체급이 나뉜 까닭을 이야기한다. 흉내 내기는 교사가 관찰하고, 교구는 차례와 시간 계획만 확인한다.',
      }),
      // ───────────────────────── 3 ─────────────────────────
      L(3, {
        title: '갈래마다 다른 안전 약속과 몸 쓰는 원리 찾기',
        objective: '기록형·동작형·투기형 활동에서 다치기 쉬운 순간을 찾고, 갈래에 맞는 안전 약속과 몸 쓰는 원리를 골라 말할 수 있다.',
        illustration: art('children practicing a safe forward roll on a soft mat while another pair wears padded gear, with paper safety signs around them', [
          { motif: 'sun', x: 410, y: 56, s: 0.7 }, { motif: 'cloud', x: 100, y: 50 }, { motif: 'hills', y: 212 },
          { motif: 'house', x: 80, y: 214, s: 0.8 }, { motif: 'flower', x: 410, y: 222 },
          { motif: 'text', x: 240, y: 132, text: '안전하게 겨뤄요', size: 24 },
        ]),
        safety: [MAT, CONTACT, WARM, STOP],
        stages: stages(
          {
            teacher: '"지난 시간 손바닥 밀기에서 넘어질 뻔한 친구가 있었나요?" 경험을 두세 개 듣는다. "넘어질 때 손으로 바닥을 짚으면 어디를 다치기 쉬울까요?" 손목이라는 대답을 받고, 오늘은 갈래마다 다치기 쉬운 순간과 그것을 막는 몸 쓰는 법을 찾는다고 알린다.',
            student: '넘어질 때 손으로 바닥을 짚으면 어디를 다칠 수 있는지 떠올려 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 갈래마다 지킬 안전 약속 고르기', minutes: 12, tool: 'mindmap',
              task: '안전 약속 카드를 어느 갈래 활동에서 꼭 지킬 약속인지에 따라 나누어요. 그다음 활동 2에서 그 약속을 직접 지켜 봐요.',
              teacher: '"이 약속은 언제 가장 필요할까요?" 카드마다 실제 장면을 떠올리게 한다. 모래밭 정리는 멀리뛰기, 매트 간격은 구르기, 정한 부위만 쓰기는 맞서는 놀이라는 것을 학생 말로 확인한다. "보호대만 차면 안 다친다"는 말이 나오면 다음 활동의 판단 상황으로 넘긴다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '안전 약속 카드를 꼭 필요한 갈래 활동별로 나누어요.', toolOptions: { topic: '갈래별 안전', slots: ['멀리뛰기(기록형)', '매트 구르기(동작형)', '손바닥 밀기(투기형)'], cards: ['모래밭의 돌을 골라내요', '앞사람이 나간 뒤 뛰어요', '매트 한 장에 한 사람만', '턱을 당기고 구르기', '손바닥만 써서 밀어요', '"그만" 하면 바로 멈춰요'] }, target: { sort: { '멀리뛰기(기록형)': ['모래밭의 돌을 골라내요', '앞사람이 나간 뒤 뛰어요'], '매트 구르기(동작형)': ['매트 한 장에 한 사람만', '턱을 당기고 구르기'], '손바닥 밀기(투기형)': ['손바닥만 써서 밀어요', '"그만" 하면 바로 멈춰요'] } }, levels: { easy: { state: { at: { '모래밭의 돌을 골라내요': 0 } } } }, difficulty: 0.2,
                  hints: ['카드마다 그 약속이 필요한 장소나 장면(모래밭·매트·맞서기)을 떠올려 보세요.', '모래밭, 매트, 상대가 나오는 카드를 먼저 찾아 그 활동 가지에 놓아 보세요.', '모래밭·앞사람은 멀리뛰기, 매트·턱 당기기는 구르기, 손바닥·"그만"은 손바닥 밀기예요.'] },
                { prompt: '넘어질 때 몸을 지키는 방법만 골라요.', toolOptions: { mode: 'pick', topic: '넘어질 때', cards: ['턱을 당겨 머리를 보호해요', '몸을 둥글게 말아 굴러요', '팔을 쭉 펴서 손목으로 버텨요', '팔 전체로 바닥을 쳐 힘을 나눠요'] }, target: { pick: ['턱을 당겨 머리를 보호해요', '몸을 둥글게 말아 굴러요', '팔 전체로 바닥을 쳐 힘을 나눠요'] }, levels: { challenge: { prompt: '넘어질 때 몸을 지키는 방법만 골라요. 그럴듯하지만 위험한 카드가 섞여 있어요.', toolOptions: { cards: ['턱을 당겨 머리를 보호해요', '몸을 둥글게 말아 굴러요', '팔을 쭉 펴서 손목으로 버텨요', '팔 전체로 바닥을 쳐 힘을 나눠요', '몸을 뻣뻣하게 굳혀요'] } } }, difficulty: 0.25,
                  hints: ['넘어질 때 한곳에 힘이 몰리면 다치고, 넓게 나뉘면 덜 다쳐요.', '손목 하나로 온몸을 받치는 카드가 있는지 다시 보세요.', '턱 당기기, 몸 둥글게 말기, 팔 전체로 바닥 치기가 몸을 지켜요. 팔을 펴서 손목으로 버티면 손목을 다쳐요.'],
                  conclude: '넘어질 때는 머리를 지키고 힘을 몸 여러 곳으로 나눠야 덜 다쳐요.' },
                { prompt: '갈래와 그 갈래에서 특히 많이 쓰는 몸 쓰는 원리를 이어요.', toolOptions: { mode: 'match', topic: '몸 쓰는 원리', slots: [{ id: 'rec', label: '기록형: 멀리뛰기' }, { id: 'act', label: '동작형: 앞구르기' }, { id: 'vs', label: '투기형: 씨름' }], cards: ['달려온 힘을 발 구르기로 이어요', '몸을 둥글게 말아 부드럽게 굴러요', '무게 중심을 낮춰 균형을 지켜요'] }, target: { match: { rec: '달려온 힘을 발 구르기로 이어요', act: '몸을 둥글게 말아 부드럽게 굴러요', vs: '무게 중심을 낮춰 균형을 지켜요' } }, difficulty: 0.3 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 이럴 땐 어떻게? 안전 판단하고 해 보기', minutes: 14, tool: 'emotion',
              task: '갈래 활동에서 생길 수 있는 상황이에요. 어떻게 할지 고른 뒤, 짝과 고른 행동을 매트 위에서 천천히 해 봐요.',
              teacher: '"보호대를 차면 위험이 모두 사라질까요?" 장비는 위험을 줄일 뿐 없애지 못한다는 것을 짚는다. 고른 뒤에는 매트에서 웅크려 옆으로 구르기, 팔 전체로 매트 치기를 교사가 먼저 보이고 짝이 따라 한다.',
              levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '앞구르기 차례인데 앞 친구가 아직 매트 끝에 앉아 있어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '앞구르기 차례인데 앞 친구가 아직 매트 끝에 앉아 있어요.', choices: [{ id: 'go', text: '빨리 굴러서 시간을 아껴요', result: '구르다 친구 등에 부딪혔어요.', mood: '놀람', why: '매트에는 한 사람씩만 있어야 해요.' }, { id: 'wait', text: '친구가 매트를 나갈 때까지 기다려요', result: '빈 매트에서 안전하게 굴렀어요.', mood: '편안함' }, { id: 'side', text: '매트 옆 맨바닥에서 굴러요', result: '딱딱한 바닥에 어깨를 부딪혔어요.', mood: '걱정', why: '구르기는 매트 위에서만 해요.' }] }, target: { choice: 'wait' }, levels: { easy: { toolOptions: { choices: [{ id: 'go', text: '빨리 굴러서 시간을 아껴요', result: '구르다 친구 등에 부딪혔어요.', mood: '놀람', why: '매트에는 한 사람씩만 있어야 해요.' }, { id: 'wait', text: '친구가 매트를 나갈 때까지 기다려요', result: '빈 매트에서 안전하게 굴렀어요.', mood: '편안함' }] } } }, difficulty: 0.1 },
                { prompt: '씨름 놀이 전에 친구가 "보호대 찼으니 마음껏 세게 하자"고 해요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '씨름 놀이 전에 친구가 "보호대를 찼으니 마음껏 세게 하자"고 해요.', choices: [{ id: 'yes', text: '좋아, 보호대가 있으니 괜찮아', result: '세게 넘어져 팔꿈치를 다쳤어요.', mood: '걱정', why: '보호대는 위험을 줄일 뿐 없애지 못해요.' }, { id: 'rule', text: '보호대를 차도 약속한 세기와 방법을 지키자고 해요', result: '둘 다 다치지 않고 기술을 겨뤘어요.', mood: '편안함' }, { id: 'off', text: '보호대를 벗고 더 세게 해요', result: '무릎이 바닥에 세게 닿았어요.', mood: '놀람', why: '보호대도 약속도 함께 지켜야 해요.' }] }, target: { choice: 'rule' }, difficulty: 0.2 },
                { prompt: '멀리뛰기 모래밭에 작은 돌이 보여요. 다음 차례는 나예요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '멀리뛰기 모래밭에 작은 돌이 보여요. 다음 차례는 나예요.', choices: [{ id: 'jump', text: '돌을 피해서 뛰면 돼요', result: '착지하다 돌을 밟아 발바닥이 아팠어요.', mood: '걱정', why: '착지 자리는 정할 수 없어요.' }, { id: 'tell', text: '손을 들어 멈추고 돌을 치운 뒤 뛰어요', result: '모두 안전하게 뛰었어요.', mood: '고마움' }, { id: 'later', text: '내가 뛴 다음에 말해요', result: '앞 친구가 돌에 넘어졌어요.', mood: '놀람', why: '위험은 보자마자 알려요.' }] }, target: { choice: 'tell' }, difficulty: 0.15 },
              ],
            },
          ],
          {
            teacher: '"오늘 찾은 안전 약속 가운데 다음 시간에 꼭 지킬 하나를 말해 봐요." 출구 2번에서 "보호대가 있으면 괜찮다"를 고른 학생에게는 활동 2의 씨름 상황 결과를 다시 보여 준다. 마무리로 손목·발목 돌리기를 함께 한다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '이럴 땐 무엇을?', slots: [{ id: 'mat', label: '뜀틀 넘기' }, { id: 'run', label: '50m 달리기' }], cards: ['도움닫기 판 앞뒤에 친구가 없는지 봐요', '자기 줄(레인)을 벗어나지 않아요'] }, prompt: '두 활동에 꼭 맞는 안전 약속을 하나씩 이어요.', target: { match: { mat: '도움닫기 판 앞뒤에 친구가 없는지 봐요', run: '자기 줄(레인)을 벗어나지 않아요' } }, difficulty: 0.2 },
              { type: 'choice', prompt: '보호 장비에 대한 생각으로 알맞은 것은?', options: ['장비를 차면 위험이 모두 사라져요', '장비는 위험을 줄일 뿐이라 약속도 지켜야 해요', '장비는 필요 없어요'], answer: 1, difficulty: 0.2, explain: '장비와 약속을 함께 지켜야 안전해요.' },
              { type: 'short', prompt: '넘어질 때 몸을 지키는 방법 하나를 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '갈래마다 안전하게',
          items: [
            { type: 'table', prompt: '갈래마다 다치기 쉬운 순간과 지킬 약속을 쓰세요.', columns: ['갈래(활동)', '다치기 쉬운 순간', '지킬 약속'], cells: [['기록형(멀리뛰기)', '', ''], ['동작형(구르기)', '', ''], ['투기형(손바닥 밀기)', '', '']] },
            { type: 'choice', prompt: '넘어질 때 손목을 다치기 쉬운 자세에 ○ 하세요.', options: ['몸을 둥글게 말아요', '팔을 쭉 펴서 손으로 버텨요', '팔 전체로 바닥을 쳐요'], answer: '팔을 쭉 펴서 손으로 버텨요' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '씨름에서 넘어지지 않으려면 무게 중심을 ___ 해요.', answer: '낮게' },
            { type: 'check', prompt: '오늘 해 본 안전한 몸 쓰기에 ✓ 하세요.', options: ['턱을 당겨 웅크리기', '팔 전체로 매트 치기', '"그만"에 바로 멈추기'] },
          ],
          easy: {
            note: '머리를 지키고, 힘을 몸 여러 곳으로 나누어요.',
            items: [
              { type: 'choice', prompt: '매트 한 장에는 몇 명이 올라가나요?', options: ['한 명', '여러 명'], answer: '한 명' },
              { type: 'choice', prompt: '모래밭에 돌이 보이면?', options: ['피해서 뛰어요', '멈추고 치워요'], answer: '멈추고 치워요' },
              { type: 'short', prompt: '오늘 지킨 안전 약속 하나를 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 맞는 가지에 놓으면 바로 표시되고, 판단 상황의 보기가 둘뿐이에요.',
          base: '여섯 장의 약속을 세 갈래로 스스로 나누고 세 가지 보기에서 골라요.',
          challenge: '그럴듯하지만 위험한 카드가 섞이고, 판단 결과는 맞힌 뒤에만 보여요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 장비를 갖추면 위험이 모두 사라진다고 여긴다 → 보호대를 찬 채 세게 넘어진 상황 결과로 짚는다. ② 넘어질 때 팔을 펴서 손으로 버틴다 → 매트에서 웅크려 옆으로 구르기와 팔 전체로 치기를 천천히 몸으로 익힌다. ③ 위험을 보고도 내 차례가 끝난 뒤에 말한다 → 보자마자 손을 들어 멈춤을 외치는 연습을 한다.',
      }),
      // ───────────────────────── 4 ─────────────────────────
      L(4, {
        title: '세 갈래 정거장을 돌며 승부를 가르는 것 찾기',
        objective: '기록형·동작형·투기형 정거장 활동에 차례로 참여하고, 정거장마다 무엇이 승부를 가르는지 말할 수 있다.',
        illustration: art('three paper stations in a gym with a jump rope corner, a soft mat corner and a tail-tag corner, children moving between them', [
          { motif: 'sun', x: 410, y: 50, s: 0.6 }, { motif: 'cloud', x: 90, y: 48 }, { motif: 'hills', y: 214 },
          { motif: 'star', x: 100, y: 140 }, { motif: 'star', x: 240, y: 140 }, { motif: 'star', x: 380, y: 140 },
          { motif: 'text', x: 240, y: 92, text: '정거장 세 곳', size: 24 },
        ]),
        safety: [WARM, ROPE, MAT, TAIL, STOP],
        stages: stages(
          {
            teacher: '강당 세 곳에 정거장(줄넘기·매트·꼬리 뺏기)을 미리 꾸며 두고 묻는다. "세 정거장에서 이기는 사람은 각각 무엇을 잘해야 할까요?" "많이 넘어야 해요", "예쁘게 굴러야 해요", "빨리 뺏어야 해요" 같은 대답을 칠판의 세 갈래 아래에 적는다. "오늘은 직접 돌아 보고 이 예상이 맞는지 확인해요."',
            student: '세 정거장에서 이기려면 무엇을 잘해야 할지 예상해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 정거장 돌기 계획 세우고 참여하기', minutes: 15, tool: 'timer',
              task: '정거장 한 곳의 활동 차례를 정하고, 세 정거장을 도는 시간 계획을 타이머에 맞춘 뒤 모둠별로 돌아요.',
              teacher: '정거장 규칙: 기록형은 30초 줄넘기 횟수 세기, 동작형은 앞구르기 뒤 일어서 두 팔 펴고 3초 멈추기, 투기형은 허리에 꽂은 수건 꼬리 뺏기. "꼬리 뺏기에서 상대 몸을 밀거나 옷을 잡으면 그 판은 무효예요." 호루라기 한 번은 시작, 두 번은 멈춤과 이동이다. 교사는 매트 정거장 옆에 서서 턱 당기기를 본다.',
              levels: { easy: { workStep: 60, restStep: 30, showTotal: true }, base: { workStep: 30, restStep: 30 }, challenge: { workStep: 30, restStep: 30 } },
              items: [
                { prompt: '정거장 한 곳에서 할 일을 차례대로 놓아요.', toolOptions: { cards: ['결과를 기록지에 적기', '정거장 규칙 카드 읽기', '신호에 맞춰 다음 정거장으로 가기', '5분 동안 활동하기'] }, target: { order: ['정거장 규칙 카드 읽기', '5분 동안 활동하기', '결과를 기록지에 적기', '신호에 맞춰 다음 정거장으로 가기'] }, levels: { easy: { state: { order: ['정거장 규칙 카드 읽기', '5분 동안 활동하기', '신호에 맞춰 다음 정거장으로 가기', '결과를 기록지에 적기'] } } }, difficulty: 0.15,
                  hints: ['규칙을 알아야 활동을 하고, 활동을 해야 적을 것이 생겨요.', '자리를 옮기기 전에 꼭 해 둘 일이 있는지 보세요.', '규칙 읽기 → 활동하기 → 기록 적기 → 다음 정거장으로 가기예요.'] },
                { prompt: '정거장마다 5분 활동, 옮기는 시간 1분, 세 곳을 돌도록 타이머를 맞춰요.', toolOptions: { plan: { work: 120, rest: 30, rounds: 2 } }, target: { plan: { work: 300, rest: 60, rounds: 3 } }, levels: { challenge: { prompt: '세 정거장을 같은 시간씩 돌고 사이마다 1분 옮겨, 전체 17분이 되게 맞춰요.', target: { plan: { rest: 60, rounds: 3 }, total: 1020 } } }, difficulty: 0.25 },
                { prompt: '모둠과 세 정거장을 차례로 돌아요. 다 돌면 ‘짝·모둠과 함께 해 보았어요’를 눌러요.', free: true },
              ],
            },
            {
              id: 'a2', title: '활동 2. 정거장마다 승부를 가른 것 말하기', minutes: 11, tool: 'mindmap',
              task: '돌아 본 세 정거장에서 무엇이 승부를 갈랐는지 이어 보고, 갈래마다 연습 방법도 나누어요.',
              teacher: '"줄넘기를 잘하는 친구가 꼬리 뺏기도 잘했나요?" 대답을 듣고 "갈래마다 이기는 데 필요한 것이 다르니 연습 방법도 달라요"라고 짚는다. 연습 방법 카드를 나눌 때 "이 연습은 무엇을 늘려 주나요? 기록, 동작의 바르기, 상대를 읽는 눈 가운데 무엇인가요?"라고 묻는다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '정거장과 그곳의 승부를 가른 것을 이어요.', toolOptions: { mode: 'match', topic: '무엇이 승부를 갈랐나', slots: [{ id: 'rope', label: '줄넘기 정거장' }, { id: 'mat', label: '매트 정거장' }, { id: 'tail', label: '꼬리 뺏기 정거장' }], cards: ['30초 동안 넘은 횟수', '끊김 없이 바르게 이은 동작', '상대를 읽고 먼저 뺏는 기술'] }, target: { match: { rope: '30초 동안 넘은 횟수', mat: '끊김 없이 바르게 이은 동작', tail: '상대를 읽고 먼저 뺏는 기술' } }, levels: { easy: { state: { at: { '30초 동안 넘은 횟수': 0 } } } }, difficulty: 0.15 },
                { prompt: '연습 방법 카드를 어느 갈래에 알맞은지 나누어요.', toolOptions: { topic: '갈래별 연습', slots: ['기록형', '동작형', '투기형'], cards: ['초시계로 재며 기록 늘리기', '지난 기록과 오늘 기록 견주기', '짝이 보고 동작 바르기 말해 주기', '동작을 끊김 없이 잇기 연습', '상대 움직임 보고 피하기', '짝과 공격·막기 번갈아 하기'] }, target: { sort: { '기록형': ['초시계로 재며 기록 늘리기', '지난 기록과 오늘 기록 견주기'], '동작형': ['짝이 보고 동작 바르기 말해 주기', '동작을 끊김 없이 잇기 연습'], '투기형': ['상대 움직임 보고 피하기', '짝과 공격·막기 번갈아 하기'] } }, levels: { easy: { state: { at: { '초시계로 재며 기록 늘리기': 0 } } } }, difficulty: 0.25,
                  hints: ['연습 카드마다 무엇이 늘어나는 연습인지(잰 값, 동작의 바르기, 상대 읽기) 떠올려요.', '상대가 나오는 카드, 짝이 동작을 봐 주는 카드, 초시계·기록이 나오는 카드를 먼저 찾아요.', '초시계·기록은 기록형, 동작 바르기·잇기는 동작형, 상대 보기·공격과 막기는 투기형이에요.'] },
                { prompt: '친구가 "줄넘기만 하면 꼬리 뺏기도 늘어"라고 해요. 꼬리 뺏기 기술을 직접 늘리는 연습만 골라요.', toolOptions: { mode: 'pick', topic: '꼬리 뺏기 연습', basket: '꼬리 뺏기 연습', cards: ['상대 발과 어깨를 보고 방향 읽기', '몸을 낮추고 옆으로 재빨리 비키기', '매트에서 앞구르기 바르게 잇기', '줄넘기 횟수를 어제와 견주기'] }, target: { pick: ['상대 발과 어깨를 보고 방향 읽기', '몸을 낮추고 옆으로 재빨리 비키기'] }, difficulty: 0.2,
                  hints: ['꼬리 뺏기는 상대와 맞서 겨뤄요. 상대가 나오는 연습인지 보세요.', '상대 없이 혼자 하는 연습을 고른 것이 있는지 다시 보세요.', '상대 방향 읽기와 몸 낮춰 비키기가 꼬리 뺏기 연습이에요. 구르기·줄넘기 기록은 다른 갈래 연습이에요.'],
                  conclude: '갈래마다 겨루는 것이 달라서, 필요한 연습도 달라요.' },
              ],
            },
          ],
          {
            teacher: '"오늘 예상이 맞았나요?" 도입에 적은 예상 옆에 실제로 승부를 가른 것을 학생 말로 고쳐 적는다. 정거장 기록지는 7차시에 다시 쓰니 모둠 바구니에 모은다. 마무리로 손목·발목 돌리기와 숨 고르기를 한다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '이 대회는?', slots: [{ id: 'run', label: '50m 달리기 대회' }, { id: 'vault', label: '뜀틀 대회' }, { id: 'ssi', label: '씨름 대회' }], cards: ['결승선까지 걸린 시간', '넘는 자세와 착지의 바르기', '상대를 먼저 넘어뜨리는 기술'] }, prompt: '세 대회와 승부를 가르는 것을 이어요.', target: { match: { run: '결승선까지 걸린 시간', vault: '넘는 자세와 착지의 바르기', ssi: '상대를 먼저 넘어뜨리는 기술' } }, difficulty: 0.2 },
              { type: 'choice', prompt: '갈래마다 연습 방법이 다른 까닭으로 알맞은 것은?', options: ['갈래마다 겨루는 것이 달라서', '선생님이 정해서', '하는 장소가 달라서'], answer: 0, difficulty: 0.2, explain: '잰 값·동작·상대와 맞서기처럼 겨루는 것이 달라 필요한 연습도 달라요.' },
              { type: 'mood', prompt: '세 정거장을 돌아 본 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '세 정거장 기록지',
          items: [
            { type: 'table', prompt: '정거장마다 내 결과를 쓰세요.', columns: ['정거장', '내 결과', '승부를 가른 것'], cells: [['줄넘기(30초)', '', ''], ['매트(앞구르기 잇기)', '', ''], ['꼬리 뺏기', '', '']] },
            { type: 'choice', prompt: '동작형 정거장에서 꼭 필요한 연습에 ○ 하세요.', options: ['초시계로 재며 되풀이하기', '짝이 보고 동작 바르기 말해 주기', '상대를 피하는 연습'], answer: '짝이 보고 동작 바르기 말해 주기' },
            { type: 'check', prompt: '오늘 지킨 안전 약속에 ✓ 하세요.', options: ['줄넘기 줄 길이보다 멀리 떨어졌어요', '매트에 한 사람씩 올라갔어요', '꼬리 뺏기에서 상대 몸을 밀지 않았어요'] },
            { type: 'short', prompt: '세 정거장 가운데 가장 어려웠던 곳과 까닭을 쓰세요.' },
          ],
          easy: {
            note: '줄넘기 = 넘은 횟수, 매트 = 바른 동작, 꼬리 뺏기 = 상대 읽기.',
            items: [
              { type: 'choice', prompt: '줄넘기 정거장의 승부를 가른 것은?', options: ['넘은 횟수', '동작의 아름다움'], answer: '넘은 횟수' },
              { type: 'choice', prompt: '꼬리 뺏기는 어느 갈래인가요?', options: ['기록형', '투기형'], answer: '투기형' },
              { type: 'short', prompt: '가장 재미있었던 정거장을 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '타이머가 1분씩 움직이고 전체 시간이 보여요. 카드를 맞는 칸에 놓으면 바로 표시돼요.',
          base: '정거장 차례와 시간 계획을 스스로 세우고, 연습 방법을 세 갈래로 나누어요.',
          challenge: '전체 17분이 되도록 활동 시간을 셈해서 타이머를 맞춰요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 갈래가 달라도 연습 방법은 같다고 여긴다 → "줄넘기 잘하는 친구가 꼬리 뺏기도 잘했나?"를 실제 결과로 묻는다. ② 꼬리 뺏기에서 몸을 밀거나 옷을 잡는다 → 그 판은 무효로 하고 다시 한다. ③ 정거장을 옮길 때 뛰어다닌다 → 호루라기 두 번이면 걸어서 옮긴다. 줄넘기 횟수는 짝이 세어 주고, 동작과 맞서기는 교사가 관찰한다.',
      }),
      // ───────────────────────── 5 ─────────────────────────
      L(5, {
        title: '새 정거장에서 갈래에 맞는 연습법으로 겨루기',
        objective: '왕복 달리기·균형 자세 잇기·수건 당기기에 참여하며 갈래에 맞는 연습 방법을 골라 쓸 수 있다.',
        illustration: art('children running a short shuttle between cones, holding balance poses on a line, and pulling a towel in pairs on a paper gym floor', [
          { motif: 'sun', x: 400, y: 52, s: 0.6 }, { motif: 'cloud', x: 100, y: 52 }, { motif: 'hills', y: 214 },
          { motif: 'flower', x: 70, y: 220 }, { motif: 'tree', x: 420, y: 196, s: 0.8 },
          { motif: 'text', x: 240, y: 120, text: '달리고 · 버티고 · 당기고', size: 22 },
        ]),
        safety: [WARM, SPACE, TOWEL, STOP],
        stages: stages(
          {
            teacher: '"지난 시간 정거장마다 연습 방법이 달랐어요. 기록형은 무엇으로 연습했나요?" 초시계, 짝의 눈, 공격·막기 번갈아 하기를 학생 말로 다시 떠올린다. "오늘은 정거장이 바뀌어요. 새 정거장에서도 갈래에 맞는 연습법을 스스로 골라 써 봐요."',
            student: '지난 시간에 갈래마다 어떤 연습 방법을 썼는지 떠올려 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 새 정거장 안전 점검과 기록 재기', minutes: 15, tool: 'timer',
              task: '정거장 세 곳(10m 왕복 달리기, 바닥 선 위 균형 자세 네 가지 잇기, 수건 당기기)의 안전을 점검하고, 왕복 달리기 기록을 두 번 재어 적어요.',
              teacher: '"왕복 달리기는 반환점 콘을 손으로 짚고 돌아와요. 콘을 짚지 않으면 다시 해요." 짝이 초시계로 재고 0.1초까지 적는다. 수건 당기기는 "놓을 때는 \'놓을게\' 하고 천천히 놓아요. 갑자기 놓으면 상대가 뒤로 넘어져요"라고 시범으로 보인다.',
              levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
              items: [
                { prompt: '정거장을 돌기 전에 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['왕복 달리기 길에 물건이 없어요', '균형 자세 선 둘레가 넓어요', '수건에 매듭이나 찢어진 곳이 없어요'] }, target: { safety: true }, levels: { challenge: { prompt: '정거장을 돌기 전에 길·바닥·도구·내 몸까지 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['왕복 달리기 길에 물건이 없어요', '균형 자세 선 둘레가 넓어요', '수건에 매듭이나 찢어진 곳이 없어요', '신발 끈을 다시 묶었어요'] } } }, difficulty: 0.1 },
                { prompt: '10m 왕복 달리기를 두 번 하고, 짝이 잰 기록(초)을 적어요.', toolOptions: { fields: [{ label: '1회', unit: '초', step: 0.1 }, { label: '2회', unit: '초', step: 0.1 }] }, target: { records: true }, levels: { challenge: { prompt: '왕복 달리기를 두 번 하고 기록(초)을 적은 뒤, 더 빠른 기록도 한 번 더 옮겨 적어요.', toolOptions: { fields: [{ label: '1회', unit: '초', step: 0.1 }, { label: '2회', unit: '초', step: 0.1 }, { label: '더 빠른 기록', unit: '초', step: 0.1 }] } } }, difficulty: 0.15 },
                { prompt: '모둠과 새 정거장 세 곳을 차례로 돌아요. 다 하면 ‘짝·모둠과 함께 해 보았어요’를 눌러요.', free: true },
              ],
            },
            {
              id: 'a2', title: '활동 2. 정거장에서 생긴 일, 이럴 땐 어떻게?', minutes: 11, tool: 'emotion',
              task: '정거장에서 생길 수 있는 일이에요. 갈래에 맞는 연습 방법과 안전을 생각해 고르고, 고른 방법으로 한 번 더 해 봐요.',
              teacher: '"기록형에서 2회가 1회보다 느렸으면 실패일까요?" 기록이 들쑥날쑥한 것은 자연스럽고, 무엇이 달랐는지 찾는 것이 연습이라고 짚는다. 균형 정거장에서는 "흔들려!" 대신 "시선을 앞 한 점에 둬 봐"처럼 고칠 점을 말하게 한다.',
              levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '왕복 달리기 2회 기록이 1회보다 느렸어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '왕복 달리기 2회 기록이 1회보다 0.5초 느렸어요.', choices: [{ id: 'give', text: '나는 달리기를 못하니 그만해요', result: '다음 기회를 놓쳤어요.', mood: '속상함', why: '기록은 들쑥날쑥해요. 까닭을 찾으면 돼요.' }, { id: 'find', text: '짝에게 1회와 무엇이 달랐는지 물어 고쳐 봐요', result: '콘을 돌 때 멀리 돈 것을 알고 고쳤어요.', mood: '뿌듯함' }, { id: 'fake', text: '기록을 빠르게 고쳐 적어요', result: '내 진짜 변화를 알 수 없게 됐어요.', mood: '미안함', why: '기록은 있는 그대로 적어야 연습에 쓸 수 있어요.' }] }, target: { choice: 'find' }, levels: { easy: { toolOptions: { choices: [{ id: 'give', text: '나는 달리기를 못하니 그만해요', result: '다음 기회를 놓쳤어요.', mood: '속상함', why: '기록은 들쑥날쑥해요. 까닭을 찾으면 돼요.' }, { id: 'find', text: '짝에게 1회와 무엇이 달랐는지 물어 고쳐 봐요', result: '콘을 돌 때 멀리 돈 것을 알고 고쳤어요.', mood: '뿌듯함' }] } } }, difficulty: 0.15 },
                { prompt: '짝이 균형 자세에서 자꾸 흔들려요. 무엇이라고 말해 줄까요?', toolOptions: { mode: 'branch', situation: '짝이 균형 자세 네 가지를 이을 때 자꾸 흔들려요.', choices: [{ id: 'laugh', text: '"또 흔들렸네" 하고 웃어요', result: '짝이 부끄러워 그만두었어요.', mood: '속상함', why: '고칠 점을 알려 주는 말이 필요해요.' }, { id: 'tip', text: '"앞의 한 점을 보고 배에 힘을 줘 봐"라고 말해요', result: '짝이 3초를 버텼어요.', mood: '고마움' }, { id: 'skip', text: '흔들린 자세는 빼고 하자고 해요', result: '동작을 다 잇지 못했어요.', mood: '걱정', why: '동작형은 정한 동작을 다 이어야 해요.' }] }, target: { choice: 'tip' }, difficulty: 0.2 },
                { prompt: '수건 당기기에서 이기려고 수건을 갑자기 놓고 싶어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '수건 당기기에서 이기려고 수건을 갑자기 놓고 싶어요.', choices: [{ id: 'drop', text: '갑자기 놓아 상대를 넘어뜨려요', result: '상대가 뒤로 넘어져 엉덩이를 다쳤어요.', mood: '미안함', why: '맞서는 놀이는 상대의 안전도 지켜야 해요.' }, { id: 'feet', text: '무게 중심을 낮추고 발을 버텨 당겨요', result: '안전하게 상대의 발을 먼저 움직였어요.', mood: '뿌듯함' }, { id: 'pull', text: '수건을 손목에 감아 세게 당겨요', result: '손목이 꺾여 아팠어요.', mood: '걱정', why: '수건은 손으로만 쥐고 감지 않아요.' }] }, target: { choice: 'feet' }, difficulty: 0.2 },
              ],
            },
          ],
          {
            teacher: '"오늘 정거장에서 고른 연습 방법이 도움이 되었나요?" 두세 명에게 기록이나 짝의 말을 근거로 듣는다. 출구 1번에서 연습 방법을 엇갈리게 이은 학생에게는 "그 연습이 무엇을 늘려 주나요?"를 다시 묻는다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '이 연습은 어디에?', slots: [{ id: 'rec', label: '기록형: 왕복 달리기' }, { id: 'act', label: '동작형: 균형 자세 잇기' }, { id: 'vs', label: '투기형: 수건 당기기' }], cards: ['1회와 2회 기록을 견줘 까닭 찾기', '짝이 자세를 보고 고칠 점 말하기', '버티기와 당기기를 번갈아 익히기'] }, prompt: '세 정거장에 알맞은 연습 방법을 이어요.', target: { match: { rec: '1회와 2회 기록을 견줘 까닭 찾기', act: '짝이 자세를 보고 고칠 점 말하기', vs: '버티기와 당기기를 번갈아 익히기' } }, difficulty: 0.2 },
              { type: 'choice', prompt: '맞서는 놀이에서 이기는 바른 방법은?', options: ['상대가 넘어지게 갑자기 놓기', '무게 중심을 낮추고 기술로 겨루기', '도구를 손목에 감아 힘껏 당기기'], answer: 1, difficulty: 0.15, explain: '투기형은 상대의 안전을 지키며 기술로 겨뤄요.' },
              { type: 'mood', prompt: '새 정거장에서 연습해 본 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '새 정거장 연습 기록',
          items: [
            { type: 'table', prompt: '왕복 달리기 기록과 달라진 점을 쓰세요.', columns: ['횟수', '기록(초)', '달라진 점'], cells: [['1회', '', ''], ['2회', '', '']] },
            { type: 'choice', prompt: '균형 자세에서 흔들리는 짝에게 도움이 되는 말에 ○ 하세요.', options: ['"또 흔들렸네"', '"앞의 한 점을 보고 배에 힘을 줘 봐"', '"흔들린 자세는 빼자"'], answer: '"앞의 한 점을 보고 배에 힘을 줘 봐"' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '수건 당기기에서 놓을 때는 "___" 하고 천천히 놓아요.', answer: '놓을게' },
            { type: 'short', prompt: '오늘 쓴 연습 방법 하나와 그것이 도움이 된 까닭을 쓰세요.' },
          ],
          easy: {
            note: '기록형 = 기록 견주기, 동작형 = 짝이 봐 주기, 투기형 = 버티기·당기기 번갈아.',
            items: [
              { type: 'choice', prompt: '왕복 달리기 기록은 몇 번 쟀나요?', options: ['한 번', '두 번'], answer: '두 번' },
              { type: 'choice', prompt: '수건 당기기에서 수건은?', options: ['손으로만 쥐어요', '손목에 감아요'], answer: '손으로만 쥐어요' },
              { type: 'short', prompt: '오늘 가장 잘된 정거장을 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '판단 상황의 보기가 둘뿐이고, 기록은 두 칸만 적어요.',
          base: '세 정거장의 안전을 점검하고, 세 가지 보기에서 갈래에 맞는 연습법을 골라요.',
          challenge: '내 몸 점검과 더 빠른 기록 옮겨 적기가 더해지고, 판단 결과는 맞힌 뒤에만 보여요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 갈래가 달라도 연습은 다 같다고 여긴다 → 정거장마다 "무엇을 늘리는 연습인가?"를 묻는다. ② 기록이 나빠지면 숨기거나 고쳐 적는다 → 있는 그대로 적어야 까닭을 찾을 수 있다고 말한다. ③ 수건을 손목에 감거나 갑자기 놓는다 → 시범으로 바른 쥐기와 "놓을게" 신호를 익힌다. 균형 자세와 수건 당기기는 교사가 관찰한다.',
      }),
      // ───────────────────────── 6 ─────────────────────────
      L(6, {
        title: '우리 반 기술형 미니 대회 짜고 겨루기',
        objective: '세 갈래 종목으로 미니 대회를 짜면서 갈래마다 알맞은 판정 방법과 진행 차례를 정하고, 정한 방법대로 겨룰 수 있다.',
        illustration: art('a class mini sports day with three paper flags for record, form and duel events, children holding a stopwatch, a score card and a whistle', [
          { motif: 'sun', x: 410, y: 52, s: 0.7 }, { motif: 'cloud', x: 90, y: 54 }, { motif: 'hills', y: 214 },
          { motif: 'star', x: 150, y: 110 }, { motif: 'star', x: 330, y: 110 },
          { motif: 'text', x: 240, y: 160, text: '우리 반 미니 대회', size: 24 },
        ]),
        safety: [WARM, SPACE, MAT, TAIL, STOP],
        stages: stages(
          {
            teacher: '"두 정거장에서 해 본 활동으로 우리 반 대회를 연다면, 동작형 경기는 누가 이겼는지 어떻게 정할까요?" "잘한 것 같은 사람"이라는 대답이 나오면 "누가 봐도 같은 결과가 나오려면 무엇이 필요할까요?"라고 되묻는다. 기준표·초시계·규칙이라는 낱말이 나오면 칠판에 적는다.',
            student: '동작형 경기에서 누가 이겼는지 공정하게 정하는 방법을 떠올려 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 갈래마다 판정 방법 정하기', minutes: 9, tool: 'mindmap',
              task: '대회 종목과 판정 방법을 갈래에 맞게 이어요. 동작형 별점 기준표와 꼬리 뺏기 반칙도 모둠이 함께 골라요.',
              teacher: '"동작형은 \'잘했다\'가 아니라 기준을 미리 정해 별점을 줘요." 별점 기준으로 쓸 수 있는 것과 없는 것을 가르게 한다. "옷이 예쁘다"를 기준으로 고른 학생에게 "그것은 동작일까요?"라고 묻는다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '대회 종목과 알맞은 판정 방법을 이어요.', toolOptions: { mode: 'match', topic: '어떻게 판정할까', slots: [{ id: 'cone', label: '콘 사이 지그재그 달리기' }, { id: 'link', label: '앞구르기·균형·뛰어오르기 잇기' }, { id: 'tail', label: '수건 꼬리 뺏기' }], cards: ['초시계로 걸린 시간 재기', '정한 기준표로 별점 주기', '정한 시간 안에 먼저 뺏으면 이김'] }, target: { match: { cone: '초시계로 걸린 시간 재기', link: '정한 기준표로 별점 주기', tail: '정한 시간 안에 먼저 뺏으면 이김' } }, levels: { easy: { state: { at: { '초시계로 걸린 시간 재기': 0 } } } }, difficulty: 0.15 },
                { prompt: '동작형 별점 기준으로 쓸 수 있는 것만 골라요.', toolOptions: { mode: 'pick', topic: '별점 기준', basket: '기준표', cards: ['동작을 끊지 않고 이었나', '착지에서 흔들리지 않았나', '정한 동작을 빠뜨리지 않았나', '옷 색깔이 예쁜가'] }, target: { pick: ['동작을 끊지 않고 이었나', '착지에서 흔들리지 않았나', '정한 동작을 빠뜨리지 않았나'] }, levels: { challenge: { prompt: '동작형 별점 기준으로 쓸 수 있는 것만 골라요. 그럴듯하지만 동작이 아닌 것이 둘 섞여 있어요.', toolOptions: { cards: ['동작을 끊지 않고 이었나', '착지에서 흔들리지 않았나', '정한 동작을 빠뜨리지 않았나', '옷 색깔이 예쁜가', '친한 친구인가'] } } }, difficulty: 0.25,
                  hints: ['기준은 누가 보아도 같은 결과가 나오도록 몸의 움직임만 봐요.', '움직임이 아닌 것을 고른 카드가 있는지 다시 보세요.', '동작 잇기·착지·빠뜨린 동작은 움직임이에요. 옷 색깔은 동작이 아니에요.'] },
                { prompt: '꼬리 뺏기 판정에서 반칙이 되는 행동만 골라요.', toolOptions: { mode: 'pick', topic: '꼬리 뺏기 반칙', basket: '반칙', cards: ['상대 옷을 잡아요', '상대를 손으로 밀어요', '몸을 돌려 꼬리를 피해요', '꼬리를 허리띠에 묶어요'] }, target: { pick: ['상대 옷을 잡아요', '상대를 손으로 밀어요', '꼬리를 허리띠에 묶어요'] }, difficulty: 0.25,
                  hints: ['꼬리 뺏기는 꼬리만 겨루고, 상대 몸은 건드리지 않으며, 꼬리는 누구나 뺄 수 있게 꽂아요.', '몸을 돌려 피하는 것은 기술인지 반칙인지 다시 생각해 보세요.', '옷 잡기·밀기·꼬리 묶기는 반칙이고, 몸을 돌려 피하기는 기술이에요.'] },
              ],
            },
            {
              id: 'a2', title: '활동 2. 대회 진행 차례 짜고 겨루기', minutes: 17, tool: 'timer',
              task: '대회 진행 차례와 종목마다 걸리는 시간을 정한 뒤, 모둠끼리 미니 대회를 열어요. 기록 담당·별점 담당·심판을 돌아가며 맡아요.',
              teacher: '종목마다 4분, 옮기기 1분이다. 기록 담당은 초시계, 별점 담당은 기준표, 심판은 꼬리 뺏기 시작·끝 신호를 맡고 종목마다 바꾼다. "별점은 기준표에 있는 것만 보고 줘요. 친한 친구라고 별을 더 주면 대회가 공정하지 않아요."',
              levels: { easy: { showTotal: true, workStep: 60, restStep: 30 }, base: { workStep: 30, restStep: 30 }, challenge: { workStep: 30, restStep: 30 } },
              items: [
                { prompt: '미니 대회 진행 차례대로 카드를 놓아요.', toolOptions: { cards: ['정리 운동과 결과 발표', '준비 운동과 안전 점검', '세 종목 겨루기', '종목 규칙 설명과 시범'] }, target: { order: ['준비 운동과 안전 점검', '종목 규칙 설명과 시범', '세 종목 겨루기', '정리 운동과 결과 발표'] }, levels: { easy: { state: { order: ['준비 운동과 안전 점검', '세 종목 겨루기', '종목 규칙 설명과 시범', '정리 운동과 결과 발표'] } } }, difficulty: 0.15 },
                { prompt: '종목마다 4분, 옮기기 1분, 세 종목을 하도록 타이머를 맞춰요.', toolOptions: { plan: { work: 180, rest: 30, rounds: 2 } }, target: { plan: { work: 240, rest: 60, rounds: 3 } }, levels: { challenge: { prompt: '세 종목을 같은 시간씩, 사이마다 1분 옮겨 전체 14분이 되게 맞춰요.', target: { plan: { rest: 60, rounds: 3 }, total: 840 } } }, difficulty: 0.25 },
                { prompt: '모둠끼리 미니 대회를 열고 역할을 바꾸어 맡아요. 다 하면 ‘짝·모둠과 함께 해 보았어요’를 눌러요.', free: true },
              ],
            },
          ],
          {
            teacher: '"오늘 대회에서 판정이 공정했나요? 공정하지 않았다면 무엇 때문이었나요?" 기준표에 없는 것으로 별을 준 일, 반칙 판정이 엇갈린 일을 학생 말로 듣는다. 다음 시간에는 세 갈래 가운데 나에게 맞는 갈래를 고른다고 알린다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '새 종목 판정', slots: [{ id: 'jump', label: '제자리 세단뛰기' }, { id: 'form', label: '줄넘기 동작 잇기' }], cards: ['뛴 거리를 줄자로 재기', '기준표로 동작 별점 주기'] }, prompt: '새 대회 종목에 알맞은 판정 방법을 이어요.', target: { match: { jump: '뛴 거리를 줄자로 재기', form: '기준표로 동작 별점 주기' } }, difficulty: 0.2 },
              { type: 'choice', prompt: '동작형 별점을 공정하게 주는 방법은?', options: ['친한 정도에 따라 주기', '미리 정한 기준표대로 주기', '목소리가 큰 모둠에 주기'], answer: 1, difficulty: 0.15, explain: '미리 정한 기준대로 주어야 누가 봐도 같은 결과가 나와요.' },
              { type: 'mood', prompt: '미니 대회에서 내 역할을 해낸 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '미니 대회 계획서',
          items: [
            { type: 'table', prompt: '종목마다 갈래와 판정 방법을 쓰세요.', columns: ['종목', '갈래', '판정 방법'], cells: [['콘 사이 지그재그 달리기', '', ''], ['앞구르기·균형·뛰어오르기 잇기', '', ''], ['수건 꼬리 뺏기', '', '']] },
            { type: 'short', prompt: '우리 모둠 동작형 별점 기준 세 가지를 쓰세요.' },
            { type: 'table', prompt: '내가 맡은 역할과 한 일을 쓰세요.', columns: ['종목', '내 역할', '한 일'], rows: 3 },
            { type: 'short', prompt: '대회에서 판정이 공정하려면 무엇이 필요한지 한 줄로 쓰세요.' },
          ],
          easy: {
            note: '기록형 = 재기, 동작형 = 기준표 별점, 투기형 = 먼저 이기면 승.',
            items: [
              { type: 'choice', prompt: '지그재그 달리기는 무엇으로 판정하나요?', options: ['초시계', '별점'], answer: '초시계' },
              { type: 'choice', prompt: '꼬리 뺏기에서 상대 옷을 잡으면?', options: ['반칙', '기술'], answer: '반칙' },
              { type: 'short', prompt: '오늘 내가 맡은 역할을 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '판정 방법 카드가 맞으면 바로 표시되고, 타이머가 1분씩 움직이며 전체 시간이 보여요.',
          base: '판정 방법·별점 기준·반칙을 스스로 가르고 대회 시간을 계획해요.',
          challenge: '동작이 아닌 함정 기준이 둘 섞이고, 전체 14분이 되게 시간을 셈해 맞춰요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 동작형은 "잘해 보이는 사람"이 이긴다고 여긴다 → 기준표를 먼저 정하고 그것만 보게 한다. ② 투기형에서 몸을 밀거나 잡는 것을 기술로 여긴다 → 반칙 카드로 미리 구분한다. ③ 역할을 맡은 학생이 결과를 자기 모둠에 유리하게 적는다 → 역할을 종목마다 바꾸고, 기록은 두 사람이 함께 확인한다.',
      }),
      // ───────────────────────── 7 ─────────────────────────
      L(7, {
        title: '세 갈래 경험을 돌아보며 나에게 맞는 갈래 고르기',
        objective: '세 갈래 활동의 기록·느낌·짝의 말을 근거로 나에게 맞는 갈래를 고르고, 그 까닭을 말할 수 있다.',
        illustration: art('a child looking at three paper footprints leading to record, form and duel flags, holding a notebook full of stars', [
          { motif: 'sun', x: 410, y: 54, s: 0.6 }, { motif: 'cloud', x: 100, y: 50 }, { motif: 'hills', y: 214 },
          { motif: 'flower', x: 120, y: 222 }, { motif: 'flower', x: 360, y: 222 },
          { motif: 'text', x: 240, y: 130, text: '나에게 맞는 갈래는?', size: 24 },
        ]),
        safety: [SPACE, STOP],
        stages: stages(
          {
            teacher: '1·4·5·6차시 기록지를 모둠 바구니에서 나누어 준다. "세 갈래를 다 해 봤어요. 어떤 갈래를 할 때 시간이 빨리 갔나요?" 몇 명의 대답을 듣고 "\'그냥 좋아요\'보다 기록·짝의 말·내 느낌처럼 근거를 대면 나를 더 잘 알 수 있어요"라고 짚는다.',
            student: '기록지를 펼쳐 세 갈래 활동에서 내 결과와 느낌을 다시 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 갈래마다 내 마음과 자신감 재기', minutes: 10, tool: 'emotion',
              task: '세 갈래 활동을 떠올리며 자신감의 크기를 정직하게 골라요. 정답은 없어요. 그다음 친구의 말에 어떻게 답할지 골라요.',
              teacher: '"자신감이 낮게 나온 갈래가 있어도 괜찮아요. 그건 앞으로 늘 수 있는 곳이에요." 한 번 해 보고 "나랑 안 맞아"라고 정하는 말이 나오면 "처음 줄넘기를 배울 때 한 번에 됐나요?"라고 묻는다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                moodItem('기록형 활동(줄넘기·왕복 달리기·제자리멀리뛰기)을 떠올려요.', '뿌듯함', '기록형 활동에 얼마나 자신 있나요?', '기록형 활동을 떠올리며 내 자신감을 골라요.'),
                moodItem('동작형 활동(앞구르기 잇기·균형 자세)을 떠올려요.', '편안함', '동작형 활동에 얼마나 자신 있나요?', '동작형 활동을 떠올리며 내 자신감을 골라요.'),
                { prompt: '민지가 "구르기 한 번 해 봤는데 어지러웠어. 동작형은 나랑 안 맞아"라고 해요. 무엇이라고 할까요?', toolOptions: { mode: 'branch', situation: '민지가 "구르기 한 번 해 봤는데 어지러웠어. 동작형은 나랑 안 맞아"라고 해요.', choices: [{ id: 'agree', text: '"그래, 한 번 해서 안 되면 안 맞는 거야"', result: '민지가 동작형 연습을 그만두었어요.', mood: '속상함', why: '한 번으로는 맞는지 알 수 없어요.' }, { id: 'more', text: '"턱을 당기고 몇 번 더 해 보면 달라질 수 있어"', result: '민지가 세 번째에는 어지럽지 않게 굴렀어요.', mood: '뿌듯함' }, { id: 'tease', text: '"그것도 못 해?"', result: '민지가 부끄러워 했어요.', mood: '속상함', why: '놀리는 말은 연습할 마음을 꺾어요.' }] }, target: { choice: 'more' }, levels: { easy: { toolOptions: { choices: [{ id: 'agree', text: '"그래, 한 번 해서 안 되면 안 맞는 거야"', result: '민지가 동작형 연습을 그만두었어요.', mood: '속상함', why: '한 번으로는 맞는지 알 수 없어요.' }, { id: 'more', text: '"턱을 당기고 몇 번 더 해 보면 달라질 수 있어"', result: '민지가 세 번째에는 어지럽지 않게 굴렀어요.', mood: '뿌듯함' }] } }, challenge: { toolOptions: { revealAfterCheck: true } } }, difficulty: 0.15 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 근거를 들어 나에게 맞는 갈래 말하기', minutes: 16, tool: 'mindmap',
              task: '근거가 되는 말을 골라 보고, 친구들의 말이 어느 갈래를 고른 것인지 이어요. 마지막으로 짝에게 내 갈래와 근거를 말해요.',
              teacher: '"\'재미있어서요\'는 시작이에요. 무엇이 재미있었는지, 기록이나 짝의 말로 덧붙여 봐요." 근거 고르기에서 "친구가 하니까"를 고른 학생에게 "그건 나에 대한 근거일까요?"라고 묻는다. 짝 말하기는 "나는 ○○형이 맞아요. 왜냐하면 ○○했기 때문이에요" 틀로 한다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '나에게 맞는 갈래를 고를 때 근거가 되는 말만 골라요.', toolOptions: { mode: 'pick', topic: '근거가 되는 말', basket: '근거', cards: ['줄넘기가 1회보다 2회에 9번 늘었어요', '짝이 내 균형 자세가 바르다고 했어요', '꼬리 뺏기에서 상대 방향이 먼저 보였어요', '친한 친구가 그 갈래를 골라서요'] }, target: { pick: ['줄넘기가 1회보다 2회에 9번 늘었어요', '짝이 내 균형 자세가 바르다고 했어요', '꼬리 뺏기에서 상대 방향이 먼저 보였어요'] }, levels: { challenge: { prompt: '나에게 맞는 갈래를 고를 때 근거가 되는 말만 골라요. 나와 상관없는 말이 둘 섞여 있어요.', toolOptions: { cards: ['줄넘기가 1회보다 2회에 9번 늘었어요', '짝이 내 균형 자세가 바르다고 했어요', '꼬리 뺏기에서 상대 방향이 먼저 보였어요', '친한 친구가 그 갈래를 골라서요', '요즘 그 종목 선수가 유명해서요'] } } }, difficulty: 0.2,
                  hints: ['근거는 내가 해 본 일에서 나온 기록·짝의 말·내 느낌이에요.', '다른 사람 이야기를 고른 카드가 있는지 다시 보세요.', '내 기록, 짝이 본 내 동작, 내가 겪은 장면이 근거예요. 친구의 선택은 근거가 아니에요.'] },
                { prompt: '친구들의 말을 보고, 고른 갈래와 이어요.', toolOptions: { mode: 'match', topic: '누가 무엇을 골랐나', slots: [{ id: 'rec', label: '기록형' }, { id: 'act', label: '동작형' }, { id: 'vs', label: '투기형' }], cards: ['재 볼 때마다 숫자가 느는 게 신나요', '동작이 끊김 없이 이어지면 기뻐요', '상대 움직임을 읽고 먼저 피할 때 짜릿해요'] }, target: { match: { rec: '재 볼 때마다 숫자가 느는 게 신나요', act: '동작이 끊김 없이 이어지면 기뻐요', vs: '상대 움직임을 읽고 먼저 피할 때 짜릿해요' } }, levels: { easy: { state: { at: { '재 볼 때마다 숫자가 느는 게 신나요': 0 } } } }, difficulty: 0.15 },
                { prompt: '짝에게 내게 맞는 갈래와 근거를 말해요. 말한 뒤 ‘다 했어요’를 눌러요.', free: true, talk: true },
              ],
            },
          ],
          {
            teacher: '"나에게 맞는 갈래를 근거와 함께 말한 친구?" 두세 명이 발표한다. 출구 짧은 글에 근거 없이 "좋아서"만 쓴 학생에게는 기록지의 숫자나 짝의 말을 하나 덧붙이게 한다. 다음 시간에는 자신감이 낮았던 갈래의 연습 계획을 세운다고 알린다.',
            exitTicket: [
              { type: 'tool', tool: 'emotion', options: { mode: 'branch', situation: '준호가 "꼬리 뺏기 한 판 졌으니 투기형은 나랑 안 맞아"라고 해요.', choices: [{ id: 'one', text: '"맞아, 한 판이면 알 수 있어"', result: '준호가 다음 판을 하지 않았어요.', mood: '속상함', why: '한 판으로는 알 수 없어요.' }, { id: 'again', text: '"방향 읽기를 연습하고 몇 판 더 해 보자"', result: '준호가 세 판째에 꼬리를 뺏었어요.', mood: '신남' }] }, prompt: '준호에게 알맞은 말을 골라요.', target: { choice: 'again' }, difficulty: 0.15 },
              { type: 'choice', prompt: '나에게 맞는 갈래를 고르는 근거로 알맞은 것은?', options: ['친구가 골라서', '내 기록이 늘어난 것을 보고', '유명한 선수가 있어서'], answer: 1, difficulty: 0.15, explain: '내가 해 본 일에서 나온 기록·짝의 말·느낌이 근거예요.' },
              { type: 'short', prompt: '나에게 맞는 갈래와 근거 하나를 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '나에게 맞는 갈래 찾기',
          items: [
            { type: 'table', prompt: '갈래마다 내 결과와 느낌을 쓰세요.', columns: ['갈래', '내 기록·결과', '느낌'], cells: [['기록형', '', ''], ['동작형', '', ''], ['투기형', '', '']] },
            { type: 'choice', prompt: '근거가 되는 말에 ○ 하세요.', options: ['그냥 좋아요', '짝이 내 착지가 흔들리지 않았다고 했어요', '친구가 골랐어요'], answer: '짝이 내 착지가 흔들리지 않았다고 했어요' },
            { type: 'short', prompt: '나에게 맞는 갈래와 근거를 "나는 ○○형이 맞아요. 왜냐하면 ○○" 틀로 쓰세요.' },
            { type: 'short', prompt: '자신감이 가장 낮았던 갈래와, 한 번 더 해 보고 싶은 활동을 쓰세요.' },
          ],
          easy: {
            note: '근거 = 내 기록, 짝이 해 준 말, 내가 느낀 것.',
            items: [
              { type: 'choice', prompt: '근거가 되는 것은?', options: ['내 줄넘기 기록', '친구의 선택'], answer: '내 줄넘기 기록' },
              { type: 'choice', prompt: '한 번 해서 어려우면?', options: ['몇 번 더 해 봐요', '바로 그만둬요'], answer: '몇 번 더 해 봐요' },
              { type: 'short', prompt: '가장 즐거웠던 갈래를 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '판단 보기가 둘뿐이고, 카드를 맞는 칸에 놓으면 바로 표시돼요.',
          base: '자신감을 정직하게 고르고, 근거가 되는 말을 가려 내 갈래를 말해요.',
          challenge: '나와 상관없는 함정 근거가 둘 섞이고, 판단 결과는 맞힌 뒤에만 보여요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 한 번 해 보고 어려우면 그 갈래는 맞지 않는다고 여긴다 → 처음 해낸 동작이 몇 번째에 되었는지 떠올리게 한다. ② 근거 없이 "좋아서"만 말한다 → 기록지 숫자나 짝의 말 하나를 덧붙이게 한다. ③ 자신감 척도를 친구 눈치로 고른다 → 화면을 친구에게 보이지 않아도 된다고 알리고, 척도에는 맞고 틀림이 없다고 말한다.',
      }),
      // ───────────────────────── 8 ─────────────────────────
      L(8, {
        title: '어려웠던 갈래의 연습 계획 세우고 해 보기',
        objective: '자신감이 낮았던 갈래에 필요한 연습 하나를 정하고, 연습 시간과 차례를 계획해 실제로 해 볼 수 있다.',
        illustration: art('a child following a paper practice plan with small steps and a stopwatch, a soft mat and a jump rope beside a calendar', [
          { motif: 'sun', x: 410, y: 54, s: 0.6 }, { motif: 'cloud', x: 90, y: 54 }, { motif: 'hills', y: 216 },
          { motif: 'star', x: 140, y: 120 }, { motif: 'star', x: 200, y: 100 }, { motif: 'star', x: 260, y: 84 },
          { motif: 'text', x: 300, y: 160, text: '조금씩 늘어요', size: 22 },
        ]),
        safety: [WARM, MAT, ROPE, STOP],
        stages: stages(
          {
            teacher: '"지난 시간 자신감이 가장 낮았던 갈래를 떠올려 봐요. 그 갈래가 영영 어려울까요?" 대답을 듣고, 서연이가 같은 동작을 나흘 동안 연습한 기록 그래프를 띄운다. "첫날 기록만 보고 서연이가 \'안 맞아\'라고 했다면 어땠을까요?"',
            student: '자신감이 낮았던 갈래 하나를 정해 기록지에 동그라미 해요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 연습 기록 그래프로 변화 읽기', minutes: 8, tool: 'chart',
              task: '친구들이 며칠 동안 연습한 기록 그래프를 읽고, 연습하면 기록이 어떻게 바뀌는지 찾아요.',
              teacher: '"선이 내려간 날도 있네요. 그날은 실패일까요?" 기록은 날마다 오르내리며, 며칠을 이어 보아야 변화가 보인다는 것을 짚는다. 별점은 동작형 기준표 세 가지로 준 것이라 0~3개라는 것을 먼저 알린다.',
              levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '서연이의 앞구르기 잇기 별점 그래프에서 별점이 가장 많이 늘어난 때를 골라요.', toolOptions: { type: 'line', mode: 'read', title: '서연이의 앞구르기 잇기 별점(3개 만점)', unit: '개', xLabel: '연습한 날', data: [['1일', 0], ['2일', 1], ['3일', 1], ['4일', 3]], question: '가장 많이 늘어난 때는?', choices: ['1일→2일', '2일→3일', '3일→4일'] }, target: { pick: 2 }, difficulty: 0.2 },
                { prompt: '도윤이의 30초 줄넘기 기록에서 줄어든 날을 골라요.', toolOptions: { type: 'bar', mode: 'read', title: '도윤이의 30초 줄넘기 횟수', unit: '번', xLabel: '연습한 날', data: [['1일', 38], ['2일', 45], ['3일', 41], ['4일', 52]], question: '전날보다 줄어든 날은?', choices: ['2일', '3일', '4일'] }, target: { pick: 1 }, difficulty: 0.2,
                  conclude: '기록은 하루 줄어도 며칠 이어 보면 늘어나요. 한 번의 결과로 그만두지 않아요.' },
                { prompt: '도윤이의 4일 기록은 1일보다 몇 번 늘었는지 그래프를 읽고 써요.', toolOptions: { type: 'bar', mode: 'read', title: '도윤이의 30초 줄넘기 횟수', unit: '번', xLabel: '연습한 날', data: [['1일', 38], ['2일', 45], ['3일', 41], ['4일', 52]], question: '4일은 1일보다 몇 번 늘었나요?' }, target: { value: 14 }, difficulty: 0.25 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 내 연습 계획 세우고 해 보기', minutes: 18, tool: 'timer',
              task: '고른 갈래의 연습 차례와 시간을 정한 뒤, 모둠 정거장에서 직접 연습해요.',
              teacher: '연습 정거장: 기록형(줄넘기·왕복 달리기), 동작형(매트 앞구르기 잇기), 투기형(꼬리 뺏기 방향 읽기). "연습은 짧게 여러 번이 좋아요. 40초 하고 20초 쉬며 숨을 고르고, 쉬는 동안 짝이 고칠 점 하나를 말해 줘요." 동작형 연습 차례를 먼저 함께 세운 뒤 각자 정거장으로 간다.',
              levels: { easy: { showTotal: true }, base: {}, challenge: {} },
              items: [
                { prompt: '동작형 연습을 할 때 알맞은 차례로 카드를 놓아요.', toolOptions: { cards: ['짝에게 별점 받기', '시범을 보며 동작 나누기', '나눈 동작을 천천히 하나씩', '나눈 동작을 끊김 없이 잇기'] }, target: { order: ['시범을 보며 동작 나누기', '나눈 동작을 천천히 하나씩', '나눈 동작을 끊김 없이 잇기', '짝에게 별점 받기'] }, levels: { easy: { state: { order: ['시범을 보며 동작 나누기', '나눈 동작을 끊김 없이 잇기', '나눈 동작을 천천히 하나씩', '짝에게 별점 받기'] } } }, difficulty: 0.2,
                  hints: ['어려운 동작은 작게 나누어 익힌 뒤 이어요.', '잇기보다 먼저 해야 할 연습이 있는지 보세요.', '시범 보며 나누기 → 하나씩 천천히 → 끊김 없이 잇기 → 별점 받기예요.'] },
                { prompt: '40초 연습, 20초 쉬기를 4번 하도록 타이머를 맞춰요.', toolOptions: { plan: { work: 20, rest: 10, rounds: 2 } }, target: { plan: { work: 40, rest: 20, rounds: 4 } }, levels: { challenge: { prompt: '연습 40초, 쉬기 20초를 되풀이해 전체 3분 40초가 되게 맞춰요.', target: { plan: { work: 40, rest: 20 }, total: 220 } } }, difficulty: 0.2 },
                { prompt: '고른 갈래 정거장에서 계획대로 연습해요. 다 하면 ‘짝·모둠과 함께 해 보았어요’를 눌러요.', free: true },
              ],
            },
          ],
          {
            teacher: '"오늘 연습에서 조금이라도 달라진 것이 있었나요?" 기록 숫자, 짝이 준 별점, "어지럽지 않았다" 같은 느낌을 듣는다. 출구 1번의 타이머 계획은 집이나 쉬는 시간에도 쓸 수 있다고 안내하고, 계획표를 기록지에 붙인다.',
            exitTicket: [
              { type: 'tool', tool: 'timer', options: { plan: { work: 20, rest: 20, rounds: 2 } }, prompt: '30초 연습, 15초 쉬기를 5번 하는 계획으로 타이머를 맞춰요.', target: { plan: { work: 30, rest: 15, rounds: 5 } }, difficulty: 0.2 },
              { type: 'choice', prompt: '기록이 하루 줄었을 때 알맞은 생각은?', options: ['이 갈래는 나와 맞지 않아요', '며칠 더 이어 보며 까닭을 찾아요', '기록을 그만 재요'], answer: 1, difficulty: 0.15, explain: '기록은 오르내려요. 며칠을 이어 보아야 변화가 보여요.' },
              { type: 'mood', prompt: '어려웠던 갈래를 연습해 본 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '나의 연습 계획표',
          items: [
            { type: 'table', prompt: '내 연습 계획을 쓰세요.', columns: ['고른 갈래', '연습할 동작', '한 번 연습 시간', '쉬는 시간', '횟수'], rows: 1 },
            { type: 'table', prompt: '나흘 동안 연습 기록을 쓰세요.', columns: ['날', '1일', '2일', '3일', '4일'], cells: [['기록', '', '', '', '']] },
            { type: 'choice', prompt: '어려운 동작을 익히는 첫 단계에 ○ 하세요.', options: ['끊김 없이 바로 이어 하기', '시범을 보며 동작을 나누기', '짝에게 별점 받기'], answer: '시범을 보며 동작을 나누기' },
            { type: 'short', prompt: '오늘 연습에서 달라진 것 하나를 쓰세요.' },
          ],
          easy: {
            note: '어려운 동작은 나누어서, 짧게 여러 번 연습해요.',
            items: [
              { type: 'choice', prompt: '연습은 어떻게 하면 좋을까요?', options: ['짧게 여러 번', '한 번 길게'], answer: '짧게 여러 번' },
              { type: 'short', prompt: '내가 연습할 갈래를 쓰세요.' },
              { type: 'short', prompt: '오늘 연습한 동작을 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '그래프에 값이 보이고, 타이머 전체 시간이 보여요.',
          base: '그래프를 읽어 변화를 찾고, 연습 차례와 시간을 스스로 계획해요.',
          challenge: '그래프 값은 맞힌 뒤에만 보이고, 전체 시간을 셈해 연습 계획을 맞춰요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 한 번 해 보고 어려우면 맞지 않는다고 여긴다 → 서연·도윤의 며칠 기록 그래프로 변화를 보인다. ② 어려운 동작을 처음부터 이어서만 한다 → 나누어 익히고 잇는 차례를 먼저 세운다. ③ 쉬는 시간 없이 계속해 지친다 → 40초 연습·20초 쉬기를 지키고 쉬는 동안 짝의 말을 듣게 한다. 실제 연습은 교사가 정거장을 돌며 관찰한다.',
      }),
      // ───────────────────────── 9 ─────────────────────────
      L(9, {
        title: '도움닫기 멀리뛰기 네 동작과 기록이 느는 원리',
        objective: '도움닫기·발 구르기·공중 동작·착지가 기록에 어떻게 이어지는지 설명하고, 기록을 늘리는 동작을 고를 수 있다.',
        illustration: art('a child running up, stamping on a paper take-off board and flying over a sandpit with arms forward, with dotted lines showing the jump', [
          { motif: 'sun', x: 410, y: 52, s: 0.7 }, { motif: 'cloud', x: 120, y: 52 }, { motif: 'hills', y: 220 },
          { motif: 'bird', x: 300, y: 80 }, { motif: 'tree', x: 60, y: 196, s: 0.8 },
          { motif: 'text', x: 240, y: 140, text: '달리고 · 구르고 · 날고 · 앉고', size: 20 },
        ]),
        safety: [WARM, PIT, STOP],
        stages: stages(
          {
            teacher: '"1차시에 제자리멀리뛰기를 했지요. 달려와서 뛰면 더 멀리 갈까요?" 대답을 듣고 "그럼 무조건 빨리 달리기만 하면 될까요?"라고 묻는다. "빨리요!"라는 대답이 많으면 칠판에 적어 두고 "오늘 그 생각이 맞는지 동작을 나누어 따져 봐요"라고 알린다.',
            student: '무조건 빨리 달려오면 가장 멀리 뛸 수 있을지 생각해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 멀리뛰기 동작을 네 단계로 나누기', minutes: 12, tool: 'timer',
              task: '멀리뛰기 동작 카드를 차례대로 놓고, 모래밭에서 세 걸음 도움닫기로 네 동작을 천천히 이어 봐요.',
              teacher: '"구름판은 발 구르는 자리예요. 기록은 구름판 끝에서 몸이 닿은 가장 가까운 자국까지 재요." 세 걸음 도움닫기로 천천히 해 보며 동작 이름을 함께 소리 내 말한다. 앞사람이 모래밭을 나간 뒤에 출발한다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '도움닫기 멀리뛰기 동작을 차례대로 놓아요.', toolOptions: { cards: ['두 발로 무릎 굽혀 착지', '구름판에서 한 발로 구르기', '알맞은 빠르기로 도움닫기', '팔을 앞으로 뻗으며 날기'] }, target: { order: ['알맞은 빠르기로 도움닫기', '구름판에서 한 발로 구르기', '팔을 앞으로 뻗으며 날기', '두 발로 무릎 굽혀 착지'] }, levels: { easy: { state: { order: ['알맞은 빠르기로 도움닫기', '팔을 앞으로 뻗으며 날기', '구름판에서 한 발로 구르기', '두 발로 무릎 굽혀 착지'] } }, challenge: { prompt: '도움닫기 멀리뛰기 차례대로 놓아요. 출발 준비와 기록 재기도 넣어요.', toolOptions: { cards: ['두 발로 무릎 굽혀 착지', '구름판 끝에서 가장 가까운 자국까지 재기', '구름판에서 한 발로 구르기', '출발 표시에 발 맞추기', '알맞은 빠르기로 도움닫기', '팔을 앞으로 뻗으며 날기'] }, target: { order: ['출발 표시에 발 맞추기', '알맞은 빠르기로 도움닫기', '구름판에서 한 발로 구르기', '팔을 앞으로 뻗으며 날기', '두 발로 무릎 굽혀 착지', '구름판 끝에서 가장 가까운 자국까지 재기'] } } }, difficulty: 0.2 },
                { prompt: '세 걸음 도움닫기로 네 동작을 천천히 이어 뛰어 봐요. 다 하면 ‘짝·모둠과 함께 해 보았어요’를 눌러요.', free: true },
                { prompt: '짝이 잰 세 걸음 도움닫기 멀리뛰기 기록(cm)을 두 번 적어요.', toolOptions: { fields: [{ label: '1회', unit: 'cm', step: 5 }, { label: '2회', unit: 'cm', step: 5 }] }, target: { records: true }, difficulty: 0.15 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 기록을 늘리는 동작 찾기', minutes: 14, tool: 'mindmap',
              task: '빠르기만으로 기록이 늘지 않는 까닭을 장면으로 확인하고, 기록을 늘리는 동작을 골라요.',
              teacher: '"너무 빨리 달려오면 발을 구름판에 맞추기 어렵고, 낮게 뛰어나가면 금방 떨어져요." 손으로 공 던지기를 비유로 보인다. 낮게 던진 공과 비스듬히 위로 던진 공 가운데 무엇이 더 멀리 가는지 묻는다. 학생이 "빠르기 + 구르기 + 위로 차오르기"를 함께 말하게 한다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '멀리뛰기 장면과 그 결과를 이어요.', toolOptions: { mode: 'match', topic: '빠르기만 하면 될까', slots: [{ id: 'over', label: '아주 빨리 달려와 구름판을 지나쳐 밟음' }, { id: 'low', label: '빨리 달려와 앞으로만 낮게 뛰어나감' }, { id: 'good', label: '알맞은 빠르기로 구름판을 밟고 위로 차오름' }], cards: ['반칙이라 기록이 없어요', '높이가 없어 금방 떨어져요', '높이 떠서 멀리 날아가요'] }, target: { match: { over: '반칙이라 기록이 없어요', low: '높이가 없어 금방 떨어져요', good: '높이 떠서 멀리 날아가요' } }, levels: { easy: { state: { at: { '반칙이라 기록이 없어요': 0 } } } }, difficulty: 0.2,
                  conclude: '빠르기만으로는 기록이 늘지 않아요. 구름판에 맞춰 구르고 위로 차올라야 해요.' },
                { prompt: '기록을 늘리는 데 도움이 되는 동작만 골라요.', toolOptions: { mode: 'pick', topic: '기록을 늘리는 동작', basket: '도움이 돼요', cards: ['마지막 걸음까지 빠르기를 이어 구르기', '구르는 발로 힘차게 위로 차오르기', '착지 때 팔과 몸을 앞으로 내밀기', '구름판 앞에서 멈칫하며 걸음 맞추기'] }, target: { pick: ['마지막 걸음까지 빠르기를 이어 구르기', '구르는 발로 힘차게 위로 차오르기', '착지 때 팔과 몸을 앞으로 내밀기'] }, levels: { challenge: { prompt: '기록을 늘리는 동작만 골라요. 기록을 줄이는 동작이 둘 섞여 있어요.', toolOptions: { cards: ['마지막 걸음까지 빠르기를 이어 구르기', '구르는 발로 힘차게 위로 차오르기', '착지 때 팔과 몸을 앞으로 내밀기', '구름판 앞에서 멈칫하며 걸음 맞추기', '착지 때 손으로 뒤를 짚기'] } } }, difficulty: 0.25,
                  hints: ['기록은 구름판 끝에서 몸이 닿은 가장 가까운 자국까지 재요. 빠르기와 높이를 함께 생각해요.', '빠르기를 잃게 하는 동작이나, 뒤에 자국을 남기는 동작을 고르지 않았는지 보세요.', '빠르기를 이어 구르기, 위로 차오르기, 앞으로 내밀며 착지가 도움이 돼요. 멈칫하면 빠르기를 잃어요.'] },
                { prompt: '동작과 그 동작이 기록에 주는 도움을 이어요.', toolOptions: { mode: 'match', topic: '동작이 주는 도움', slots: [{ id: 'run', label: '도움닫기' }, { id: 'take', label: '발 구르기' }, { id: 'land', label: '앞으로 내밀며 착지' }], cards: ['앞으로 나아가는 빠르기를 만들어요', '빠르기를 위로 뜨는 힘으로 바꿔요', '닿는 자국이 앞쪽에 남아 거리를 지켜요'] }, target: { match: { run: '앞으로 나아가는 빠르기를 만들어요', take: '빠르기를 위로 뜨는 힘으로 바꿔요', land: '닿는 자국이 앞쪽에 남아 거리를 지켜요' } }, difficulty: 0.3 },
              ],
            },
          ],
          {
            teacher: '"도입에서 \'빨리만 달리면 된다\'고 했던 생각을 고쳐 볼까요?" 학생이 빠르기·구르기·위로 차오르기·착지를 함께 말하게 한다. 출구 2번은 착지 자국 그림을 보며 스스로 판단하게 하고 정답을 미리 말하지 않는다.',
            exitTicket: [
              { type: 'choice', prompt: '도움닫기를 아주 빨리 했는데 구름판보다 앞에서 발을 굴렀어요. 어떻게 될까요?', options: ['기록이 그대로 늘어요', '구른 자리부터 재지 않아 손해를 봐요', '반칙이 아니라 다시 뛰어요'], answer: 1, difficulty: 0.3, explain: '기록은 구름판 끝부터 재요. 앞에서 구르면 그 사이 거리만큼 손해예요.' },
              { type: 'choice', prompt: '착지 뒤 발자국은 앞에 있고 손자국이 발자국보다 뒤에 있어요. 기록은 어디까지 재나요?', options: ['발자국까지', '손자국까지', '모래밭 끝까지'], answer: 1, difficulty: 0.3, explain: '구름판에서 가장 가까운 자국(손자국)까지 재요. 그래서 뒤를 짚지 않아요.' },
              { type: 'short', prompt: '멀리뛰기 기록을 늘리는 동작 하나와 그 까닭을 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '멀리뛰기 네 동작',
          items: [
            { type: 'table', prompt: '동작마다 하는 일을 쓰세요.', columns: ['동작', '하는 일'], cells: [['도움닫기', ''], ['발 구르기', ''], ['공중 동작', ''], ['착지', '']] },
            { type: 'choice', prompt: '"빨리 달려오기만 하면 기록이 는다"는 말에 대한 생각으로 알맞은 것에 ○ 하세요.', options: ['맞아요', '아니에요, 구름판에 맞춰 위로 차올라야 해요', '달리기는 상관없어요'], answer: '아니에요, 구름판에 맞춰 위로 차올라야 해요' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '멀리뛰기 기록은 구름판 끝에서 몸이 닿은 가장 ___ 자국까지 재요.', answer: '가까운' },
            { type: 'table', prompt: '세 걸음 도움닫기 기록을 쓰세요.', columns: ['횟수', '1회', '2회'], cells: [['기록(cm)', '', '']] },
          ],
          easy: {
            note: '도움닫기 → 발 구르기 → 날기 → 착지',
            items: [
              { type: 'choice', prompt: '발을 구르는 곳은?', options: ['구름판', '모래밭'], answer: '구름판' },
              { type: 'choice', prompt: '착지할 때 손은?', options: ['앞으로 내밀어요', '뒤를 짚어요'], answer: '앞으로 내밀어요' },
              { type: 'short', prompt: '오늘 뛴 기록 하나를 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '처음 카드 두 장이 놓여 있고, 장면 카드를 맞는 칸에 놓으면 바로 표시돼요.',
          base: '네 동작의 차례를 세우고, 기록을 늘리는 동작을 골라요.',
          challenge: '출발 준비·기록 재기까지 여섯 장의 차례를 세우고, 기록을 줄이는 함정 동작이 둘 섞여요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 도움닫기는 빠르기만 하면 기록이 는다고 여긴다 → 구름판을 지나친 장면과 낮게 뛰어나간 장면의 결과로 짚는다. ② 착지 때 뒤로 손을 짚는다 → 기록은 가장 가까운 자국까지 잰다는 것을 모래 자국으로 보여 준다. ③ 앞사람이 모래밭에 있는데 출발한다 → 나간 뒤에 출발하는 신호를 정한다. 실제 동작은 세 걸음으로 천천히 하고 교사가 관찰한다.',
      }),
      // ───────────────────────── 10 ─────────────────────────
      L(10, {
        title: '콩주머니를 표적에 맞히는 던지기 조건 찾기',
        objective: '정확하게 던지려면 몸의 방향·발 내딛기·팔 휘두르기·놓는 때를 맞추어야 함을 알고, 빗나간 까닭을 조건으로 말할 수 있다.',
        illustration: art('children throwing colorful bean bags at paper target rings on the floor, one foot stepping forward and arm following through', [
          { motif: 'sun', x: 410, y: 52, s: 0.6 }, { motif: 'cloud', x: 90, y: 50 }, { motif: 'hills', y: 220 },
          { motif: 'star', x: 330, y: 150, s: 1.2 }, { motif: 'flower', x: 80, y: 222 },
          { motif: 'text', x: 200, y: 110, text: '보고 · 딛고 · 던져요', size: 22 },
        ]),
        safety: [WARM, THROW, STOP],
        stages: stages(
          {
            teacher: '바닥에 3m·5m 거리 표적(훌라후프 안에 작은 원)을 놓고 교사가 일부러 발을 모은 채 팔만 휘둘러 던진다. "선생님 콩주머니가 왜 빗나갔을까요?" "힘이 약해서요" 같은 대답이 나오면 "힘만의 문제일까요? 몸과 발을 보세요"라고 다시 묻는다.',
            student: '선생님 던지기를 보고 빗나간 까닭을 몸·발·팔로 나누어 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 던지기 동작 차례 세우고 표적에 던지기', minutes: 13, tool: 'timer',
              task: '정확하게 던지는 동작 차례를 세운 뒤, 짝과 3m 표적에 다섯 번씩 던지고 원 안에 든 횟수를 적어요.',
              teacher: '"오른손으로 던지면 왼발, 왼손으로 던지면 오른발을 앞으로 내딛어요." 교사가 시범을 보이고 학생이 따라 한다. 모두가 던진 뒤 "주우러 가요" 신호가 나야 줍는다. 짝은 원 안에 든 횟수를 세어 준다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '표적에 정확하게 던지는 동작 차례대로 놓아요.', toolOptions: { cards: ['표적 쪽으로 놓고 팔을 끝까지 뻗기', '표적을 보며 몸을 옆으로 서기', '팔을 뒤에서 앞으로 크게 휘두르기', '던지는 팔 반대쪽 발을 앞으로 내딛기'] }, target: { order: ['표적을 보며 몸을 옆으로 서기', '던지는 팔 반대쪽 발을 앞으로 내딛기', '팔을 뒤에서 앞으로 크게 휘두르기', '표적 쪽으로 놓고 팔을 끝까지 뻗기'] }, levels: { easy: { state: { order: ['표적을 보며 몸을 옆으로 서기', '던지는 팔 반대쪽 발을 앞으로 내딛기', '표적 쪽으로 놓고 팔을 끝까지 뻗기', '팔을 뒤에서 앞으로 크게 휘두르기'] } }, challenge: { prompt: '던지기 연습 차례대로 놓아요. 던지기 전 확인과 줍기도 넣어요.', toolOptions: { cards: ['표적 쪽으로 놓고 팔을 끝까지 뻗기', '모두 던진 뒤 신호에 맞춰 줍기', '표적을 보며 몸을 옆으로 서기', '앞에 사람이 없는지 확인하기', '팔을 뒤에서 앞으로 크게 휘두르기', '던지는 팔 반대쪽 발을 앞으로 내딛기'] }, target: { order: ['앞에 사람이 없는지 확인하기', '표적을 보며 몸을 옆으로 서기', '던지는 팔 반대쪽 발을 앞으로 내딛기', '팔을 뒤에서 앞으로 크게 휘두르기', '표적 쪽으로 놓고 팔을 끝까지 뻗기', '모두 던진 뒤 신호에 맞춰 줍기'] } } }, difficulty: 0.2 },
                { prompt: '짝과 3m 표적에 다섯 번씩 던져요. 다 하면 ‘짝·모둠과 함께 해 보았어요’를 눌러요.', free: true },
                { prompt: '3m와 5m 표적에서 다섯 번 가운데 원 안에 든 횟수를 적어요.', toolOptions: { fields: [{ label: '3m 표적', unit: '번', max: 5 }, { label: '5m 표적', unit: '번', max: 5 }] }, target: { records: true }, difficulty: 0.15 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 빗나간 까닭을 조건으로 찾기', minutes: 13, tool: 'mindmap',
              task: '빗나간 모양을 보고 어떤 조건이 어긋났는지 이어요. 정확하게 던지려면 맞추어야 할 조건도 골라요.',
              teacher: '"짧게 떨어졌다면 무엇을 바꿀까요? 옆으로 빗나갔다면요?" 빗나간 방향마다 바꿀 조건이 다르다는 것을 짚는다. "무조건 세게 던지면 된다"는 학생에게 3m 표적에서 아주 세게 던진 콩주머니가 어디로 갔는지 떠올리게 한다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '빗나간 모양과 어긋난 조건을 이어요.', toolOptions: { mode: 'match', topic: '왜 빗나갔을까', slots: [{ id: 'short', label: '표적에 못 미쳐 떨어졌어요' }, { id: 'side', label: '표적 옆으로 빗나갔어요' }, { id: 'over', label: '표적을 훌쩍 넘어갔어요' }], cards: ['팔 휘두르기가 작아 힘이 모자랐어요', '몸과 발이 표적을 보지 않았어요', '거리보다 너무 세게 던졌어요'] }, target: { match: { short: '팔 휘두르기가 작아 힘이 모자랐어요', side: '몸과 발이 표적을 보지 않았어요', over: '거리보다 너무 세게 던졌어요' } }, levels: { easy: { state: { at: { '팔 휘두르기가 작아 힘이 모자랐어요': 0 } } } }, difficulty: 0.2,
                  hints: ['못 미침·넘어감은 세기, 옆으로 빗나감은 방향의 문제예요.', '옆으로 빗나간 것을 세기 탓으로 이은 것이 있는지 보세요.', '못 미침은 휘두르기가 작아서, 옆으로는 몸과 발 방향 때문, 넘어감은 너무 세서예요.'] },
                { prompt: '정확하게 던지려고 맞추어야 할 조건만 골라요.', toolOptions: { mode: 'pick', topic: '맞추어야 할 조건', basket: '맞출 조건', cards: ['표적 거리에 맞는 세기', '몸과 발이 표적을 향하기', '표적 쪽으로 놓는 때', '언제나 가장 세게 던지기'] }, target: { pick: ['표적 거리에 맞는 세기', '몸과 발이 표적을 향하기', '표적 쪽으로 놓는 때'] }, levels: { challenge: { prompt: '정확하게 던지려고 맞추어야 할 조건만 골라요. 그럴듯한 함정이 둘 있어요.', toolOptions: { cards: ['표적 거리에 맞는 세기', '몸과 발이 표적을 향하기', '표적 쪽으로 놓는 때', '언제나 가장 세게 던지기', '던지는 팔과 같은 쪽 발 내딛기'] } } }, difficulty: 0.25 },
                { prompt: '5m 표적에 자꾸 못 미치는 친구에게 해 줄 말과 짝 지어요.', toolOptions: { mode: 'match', topic: '친구에게 해 줄 말', slots: [{ id: 'feet', label: '발을 모으고 던져요' }, { id: 'arm', label: '팔을 어깨 앞에서만 움직여요' }], cards: ['반대쪽 발을 앞으로 내딛어 봐', '팔을 뒤에서부터 크게 휘둘러 봐'] }, target: { match: { feet: '반대쪽 발을 앞으로 내딛어 봐', arm: '팔을 뒤에서부터 크게 휘둘러 봐' } }, difficulty: 0.2 },
              ],
            },
          ],
          {
            teacher: '"3m와 5m에서 바꾼 것이 있었나요?" 세기를 바꾼 학생, 팔 휘두르기를 크게 한 학생의 말을 듣는다. 출구 질문은 새 상황이니 스스로 판단하게 한다. 콩주머니는 바구니에 세어 넣고 정리한다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '이번엔 어떻게?', slots: [{ id: 'left', label: '오른손으로 던졌는데 왼쪽으로 빗나감' }, { id: 'far', label: '2m 표적인데 뒤로 넘어감' }], cards: ['몸과 발을 표적 쪽으로 돌려요', '세기를 줄여 부드럽게 던져요'] }, prompt: '새 장면에서 바꿀 조건을 이어요.', target: { match: { left: '몸과 발을 표적 쪽으로 돌려요', far: '세기를 줄여 부드럽게 던져요' } }, difficulty: 0.25 },
              { type: 'choice', prompt: '왼손으로 던질 때 앞으로 내딛는 발은?', options: ['왼발', '오른발', '두 발 모으기'], answer: 1, difficulty: 0.2, explain: '던지는 팔 반대쪽 발을 내딛어야 몸이 돌며 힘이 실려요.' },
              { type: 'mood', prompt: '표적 던지기를 해 본 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '정확하게 던지기',
          items: [
            { type: 'table', prompt: '표적 던지기 결과를 쓰세요.', columns: ['표적', '원 안에 든 횟수(5번 중)', '바꾼 조건'], cells: [['3m', '', ''], ['5m', '', '']] },
            { type: 'choice', prompt: '표적 옆으로 빗나갔을 때 바꿀 것에 ○ 하세요.', options: ['더 세게 던지기', '몸과 발 방향', '눈 감기'], answer: '몸과 발 방향' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '오른손으로 던질 때는 ___발을 앞으로 내딛어요.', answer: '왼' },
            { type: 'short', prompt: '내가 다음에 바꿀 조건 하나를 쓰세요.' },
          ],
          easy: {
            note: '세기는 거리에 맞게, 몸과 발은 표적 쪽으로.',
            items: [
              { type: 'choice', prompt: '표적에 못 미치면?', options: ['팔을 크게 휘둘러요', '눈을 감아요'], answer: '팔을 크게 휘둘러요' },
              { type: 'choice', prompt: '콩주머니는 언제 주우러 가나요?', options: ['모두 던진 뒤 신호에', '아무 때나'], answer: '모두 던진 뒤 신호에' },
              { type: 'short', prompt: '3m 표적에 든 횟수를 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '동작 카드 두 장이 놓여 있고, 짝 카드를 맞는 칸에 놓으면 바로 표시돼요.',
          base: '던지기 차례를 세우고, 빗나간 모양마다 어긋난 조건을 찾아요.',
          challenge: '안전 확인·줍기까지 여섯 장의 차례를 세우고, 그럴듯한 함정 조건이 섞여요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 정확하게 던지려면 무조건 세게 던지면 된다고 여긴다 → 3m 표적을 넘어간 결과로 세기를 거리에 맞춘다. ② 던지는 팔과 같은 쪽 발을 내딛는다 → 교사가 "왼손-오른발" 구호로 함께 연습한다. ③ 다른 친구가 던지는 중에 주우러 간다 → "모두 멈춰, 주우러 가요" 신호를 정한다. 원 안 횟수는 짝이 세고, 동작은 교사가 관찰한다.',
      }),
      // ───────────────────────── 11 ─────────────────────────
      L(11, {
        title: '손 짚고 옆돌기와 뛰어넘기의 동작 원리 알기',
        objective: '손 짚고 옆돌기와 다리 벌려 뛰어넘기를 동작 단계로 나누고, 손 짚기·시선·다리 넘기가 안전과 바른 동작에 어떻게 도움이 되는지 말할 수 있다.',
        illustration: art('a child doing a cartwheel along a straight line on a paper mat while another child leaps over a soft box with legs apart', [
          { motif: 'sun', x: 410, y: 52, s: 0.6 }, { motif: 'cloud', x: 100, y: 52 }, { motif: 'hills', y: 220 },
          { motif: 'star', x: 180, y: 90 }, { motif: 'star', x: 300, y: 90 },
          { motif: 'text', x: 240, y: 150, text: '짚고 · 돌고 · 넘고', size: 22 },
        ]),
        safety: [WARM, MAT, '뜀틀은 낮은 단(2~3단)부터 쓰고, 착지 매트를 뜀틀 바로 뒤에 붙여 깔아요.', STOP],
        stages: stages(
          {
            teacher: '바퀴를 굴리는 모습을 손으로 그리며 묻는다. "사람 몸이 바퀴처럼 옆으로 돌려면 무엇이 땅에 닿아야 할까요?" "손이요, 발이요"라는 대답을 받고, 손-손-발-발 차례로 손뼉을 치게 한다. "오늘은 동작형의 두 기능을 단계로 나누어 원리를 알아봐요. 실제 옆돌기는 낮은 단계만 해 봐요."',
            student: '몸이 바퀴처럼 옆으로 돌 때 손과 발이 닿는 차례를 손뼉으로 쳐 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 옆돌기 동작 단계 세우고 낮은 단계 해 보기', minutes: 13, tool: 'timer',
              task: '손 짚고 옆돌기 동작 카드를 차례대로 놓고, 매트 선 위에서 낮은 단계(두 손 짚고 옆으로 두 발 넘기기)를 해 봐요.',
              teacher: '"두 손은 어깨너비로, 매트에 그은 선 위에 한 손씩 짚어요. 눈은 두 손 사이를 봐요." 낮은 단계는 두 손을 짚은 채 두 발을 모아 선 건너편으로 넘기는 토끼뛰기다. 팔이 굽는 학생은 몸무게를 팔로 받치지 못하는 것이므로 높이를 낮추게 한다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '손 짚고 옆돌기 동작을 차례대로 놓아요.', toolOptions: { cards: ['한 발씩 내려 두 팔 들고 서기', '나아갈 쪽을 보고 두 팔 들고 서기', '다리를 한 다리씩 크게 넘기기', '손을 한 손씩 선 위에 짚기', '앞발을 내딛으며 몸 숙이기'] }, target: { order: ['나아갈 쪽을 보고 두 팔 들고 서기', '앞발을 내딛으며 몸 숙이기', '손을 한 손씩 선 위에 짚기', '다리를 한 다리씩 크게 넘기기', '한 발씩 내려 두 팔 들고 서기'] }, levels: { easy: { state: { order: ['나아갈 쪽을 보고 두 팔 들고 서기', '앞발을 내딛으며 몸 숙이기', '다리를 한 다리씩 크게 넘기기', '손을 한 손씩 선 위에 짚기', '한 발씩 내려 두 팔 들고 서기'] } } }, difficulty: 0.25,
                  hints: ['바퀴처럼 손이 먼저 닿고, 그다음 발이 닿아요.', '다리를 넘기려면 그 전에 무엇이 바닥을 받치고 있어야 하는지 보세요.', '서기 → 내딛으며 숙이기 → 손 짚기 → 다리 넘기기 → 내려 서기예요.'] },
                { prompt: '매트 선 위에서 두 손 짚고 두 발 넘기기를 세 번 해요. 다 하면 ‘짝·모둠과 함께 해 보았어요’를 눌러요.', free: true },
                { prompt: '두 손 짚고 두 발 넘기기를 세 번 하고, 짝이 본 횟수를 두 칸에 적어요.', toolOptions: { fields: [{ label: '손이 선 위에 놓인 횟수', unit: '번', max: 3 }, { label: '팔을 펴고 버틴 횟수', unit: '번', max: 3 }] }, target: { records: true }, difficulty: 0.15 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 두 기능의 원리와 보조 방법 가르기', minutes: 13, tool: 'mindmap',
              task: '옆돌기와 뛰어넘기의 동작 단서를 나누고, 각 동작이 왜 필요한지 이어요.',
              teacher: '뜀틀 사진을 띄운다. "뛰어넘기는 구름판을 두 발로 구르고, 뜀틀 앞쪽을 두 손으로 밀어요. 옆돌기와 무엇이 다른가요?" 두 기능 모두 \'손으로 몸무게를 받친다\'는 공통점을 짚는다. 보조자는 넘는 사람 옆에 서서 허리와 팔을 받친다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '동작 단서를 어느 기능의 것인지 나누어요.', toolOptions: { topic: '동작 단서', slots: ['손 짚고 옆돌기', '다리 벌려 뛰어넘기'], cards: ['손을 한 손씩 차례로 짚어요', '다리를 한 다리씩 넘겨요', '구름판을 두 발로 굴러요', '뜀틀 앞쪽을 두 손으로 밀어요'] }, target: { sort: { '손 짚고 옆돌기': ['손을 한 손씩 차례로 짚어요', '다리를 한 다리씩 넘겨요'], '다리 벌려 뛰어넘기': ['구름판을 두 발로 굴러요', '뜀틀 앞쪽을 두 손으로 밀어요'] } }, levels: { easy: { state: { at: { '손을 한 손씩 차례로 짚어요': 0 } } } }, difficulty: 0.2 },
                { prompt: '동작과 그 동작이 필요한 까닭을 이어요.', toolOptions: { mode: 'match', topic: '왜 그렇게 할까', slots: [{ id: 'arm', label: '팔을 펴고 어깨너비로 짚기' }, { id: 'eye', label: '눈은 두 손 사이 보기' }, { id: 'push', label: '뜀틀을 두 손으로 힘껏 밀기' }], cards: ['몸무게를 팔로 받쳐 머리를 지켜요', '돌 때 방향이 흔들리지 않아요', '몸이 앞으로 떠서 다리가 걸리지 않아요'] }, target: { match: { arm: '몸무게를 팔로 받쳐 머리를 지켜요', eye: '돌 때 방향이 흔들리지 않아요', push: '몸이 앞으로 떠서 다리가 걸리지 않아요' } }, difficulty: 0.3 },
                { prompt: '뛰어넘기 보조자가 할 일만 골라요.', toolOptions: { mode: 'pick', topic: '보조자가 할 일', basket: '보조자', cards: ['뜀틀 옆에 서서 허리와 팔을 받쳐요', '넘는 사람과 "준비-출발" 신호를 맞춰요', '뜀틀 위에 올라가 손을 잡아 끌어요', '착지 매트 한가운데에 서 있어요'] }, target: { pick: ['뜀틀 옆에 서서 허리와 팔을 받쳐요', '넘는 사람과 "준비-출발" 신호를 맞춰요'] }, levels: { challenge: { prompt: '뛰어넘기 보조자가 할 일만 골라요. 위험한 행동이 셋 섞여 있어요.', toolOptions: { cards: ['뜀틀 옆에 서서 허리와 팔을 받쳐요', '넘는 사람과 "준비-출발" 신호를 맞춰요', '뜀틀 위에 올라가 손을 잡아 끌어요', '착지 매트 한가운데에 서 있어요', '넘는 사람 앞에서 뜀틀을 잡고 버텨요'] } } }, difficulty: 0.25,
                  hints: ['보조자는 넘는 사람이 가는 길을 막지 않으면서 옆에서 받쳐요.', '넘는 사람이 지나가거나 내려오는 자리에 서는 카드가 있는지 보세요.', '옆에서 허리와 팔 받치기, 신호 맞추기가 보조자 일이에요. 뜀틀 위·앞·착지 자리는 길을 막아요.'] },
              ],
            },
          ],
          {
            teacher: '"두 기능의 공통점은 무엇이었나요?" 손으로 몸무게를 받친다는 말이 나오게 한다. 출구 2번에 대해 미리 말하지 않는다. 손목 돌리기와 어깨 풀기로 마무리한다. 다음 시간에는 멀리뛰기 걸음 맞추기를 한다고 알린다.',
            exitTicket: [
              { type: 'tool', tool: 'timer', options: { cards: ['두 발로 착지하기', '뜀틀 앞쪽을 두 손으로 밀기', '구름판을 두 발로 구르기', '다리를 벌려 넘기'] }, prompt: '다리 벌려 뛰어넘기 동작을 차례대로 놓아요.', target: { order: ['구름판을 두 발로 구르기', '뜀틀 앞쪽을 두 손으로 밀기', '다리를 벌려 넘기', '두 발로 착지하기'] }, difficulty: 0.25 },
              { type: 'choice', prompt: '옆돌기에서 팔이 굽어 머리가 매트에 닿을 뻔했어요. 무엇을 고쳐야 할까요?', options: ['다리를 더 빨리 넘겨요', '팔을 펴서 몸무게를 받쳐요', '눈을 감고 돌아요'], answer: 1, difficulty: 0.25, explain: '팔을 펴고 어깨너비로 짚어야 몸무게를 받쳐 머리를 지켜요.' },
              { type: 'mood', prompt: '옆돌기 낮은 단계를 해 본 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '옆돌기와 뛰어넘기',
          items: [
            { type: 'table', prompt: '두 기능의 동작 단계를 쓰세요.', columns: ['단계', '손 짚고 옆돌기', '다리 벌려 뛰어넘기'], cells: [['1', '', ''], ['2', '', ''], ['3', '', ''], ['4', '', '']] },
            { type: 'choice', prompt: '옆돌기에서 눈은 어디를 보나요?', options: ['천장', '두 손 사이', '친구 얼굴'], answer: '두 손 사이' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '뛰어넘기 보조자는 뜀틀 ___에 서서 허리와 팔을 받쳐요.', answer: '옆' },
            { type: 'short', prompt: '두 기능의 같은 점 하나를 쓰세요.' },
          ],
          easy: {
            note: '옆돌기는 손-손-발-발, 뛰어넘기는 구르고-밀고-넘고-착지.',
            items: [
              { type: 'choice', prompt: '옆돌기에서 먼저 닿는 것은?', options: ['손', '발'], answer: '손' },
              { type: 'choice', prompt: '뜀틀을 넘을 때 손은?', options: ['힘껏 밀어요', '그냥 올려요'], answer: '힘껏 밀어요' },
              { type: 'short', prompt: '오늘 해 본 낮은 단계 동작을 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '옆돌기 카드 일부가 놓여 있고, 단서 카드를 맞는 칸에 놓으면 바로 표시돼요.',
          base: '다섯 단계 차례를 세우고 두 기능의 단서와 까닭을 이어요.',
          challenge: '보조자 고르기에 위험한 행동이 셋 섞여요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 팔을 굽힌 채 짚어 머리가 매트에 닿는다 → 벽 짚고 팔 펴서 버티기로 먼저 익힌다. ② 옆돌기에서 손과 발이 한꺼번에 닿는다 → 손-손-발-발 손뼉 리듬으로 차례를 익힌다. ③ 보조자가 착지 자리에 선다 → 보조 자리를 바닥 테이프로 표시한다. 실제 옆돌기는 낮은 단계만 하고, 높은 단계는 14차시에 보조자와 함께 한다.',
      }),
      // ───────────────────────── 12 ─────────────────────────
      L(12, {
        title: '다섯 걸음 도움닫기로 발 구르는 자리 맞추기',
        objective: '출발 표시를 앞뒤로 옮겨 다섯 걸음 도움닫기의 발 구르는 자리를 구름판에 맞추고, 세 번 뛰어 기록을 잴 수 있다.',
        illustration: art('a child measuring five steps back from a paper take-off board and placing a small cone as a start mark beside a sandpit', [
          { motif: 'sun', x: 410, y: 52, s: 0.6 }, { motif: 'cloud', x: 100, y: 52 }, { motif: 'hills', y: 220 },
          { motif: 'flower', x: 60, y: 222 }, { motif: 'star', x: 260, y: 110 },
          { motif: 'text', x: 240, y: 160, text: '하나 둘 셋 넷 다섯, 쿵!', size: 22 },
        ]),
        safety: [WARM, PIT, STOP],
        stages: stages(
          {
            teacher: '"9차시에 기록은 구름판 끝부터 잰다고 했어요. 구름판보다 한 뼘 앞에서 구르면 어떻게 될까요?" "그만큼 손해예요"라는 대답을 받는다. "그럼 구름판을 넘어서 구르면요?" 반칙이라는 것을 확인하고 "그래서 발 구르는 자리를 맞추는 것이 기록의 첫걸음이에요"라고 알린다.',
            student: '구름판보다 앞에서 구르면 기록이 어떻게 되는지 떠올려 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 걸음을 맞추고 세 번 뛰어 기록 재기', minutes: 16, tool: 'timer',
              task: '구름판에서 출발 표시를 정하는 차례를 세운 뒤, 다섯 걸음 도움닫기 멀리뛰기를 세 번 하고 짝이 잰 기록을 적어요.',
              teacher: '"구름판에 구를 발을 대고 거꾸로 달려 나와 다섯 번째 걸음 자리에 콘을 놓아요. 그게 내 출발 표시예요." 짝은 구름판 옆에 앉아 구른 발이 판 앞인지·판 위인지·판을 넘었는지 손짓으로 알려 준다. 넘었으면 기록 칸에 0이 아니라 다시 뛴 기록을 적는다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '출발 표시를 정하는 차례대로 카드를 놓아요.', toolOptions: { cards: ['짝이 구른 발 자리를 알려 주기', '구름판에서 거꾸로 다섯 걸음 달려 콘 놓기', '콘에서 다섯 걸음 달려 뛰어 보기', '발이 맞지 않으면 콘을 앞뒤로 옮기기'] }, target: { order: ['구름판에서 거꾸로 다섯 걸음 달려 콘 놓기', '콘에서 다섯 걸음 달려 뛰어 보기', '짝이 구른 발 자리를 알려 주기', '발이 맞지 않으면 콘을 앞뒤로 옮기기'] }, levels: { easy: { state: { order: ['구름판에서 거꾸로 다섯 걸음 달려 콘 놓기', '짝이 구른 발 자리를 알려 주기', '콘에서 다섯 걸음 달려 뛰어 보기', '발이 맞지 않으면 콘을 앞뒤로 옮기기'] } } }, difficulty: 0.2,
                  hints: ['출발 자리를 먼저 정하고, 뛰어 본 뒤, 결과를 보고 고쳐요.', '뛰어 보기 전에 짝이 알려 줄 것이 있는지 다시 보세요.', '거꾸로 다섯 걸음 → 뛰어 보기 → 짝이 알려 주기 → 콘 옮기기예요.'] },
                { prompt: '모래밭에서 다섯 걸음 도움닫기로 세 번 뛰어요. 다 하면 ‘짝·모둠과 함께 해 보았어요’를 눌러요.', free: true },
                { prompt: '다섯 걸음 도움닫기 멀리뛰기 세 번의 기록(cm)을 적어요.', toolOptions: { fields: [{ label: '1회', unit: 'cm', step: 5 }, { label: '2회', unit: 'cm', step: 5 }, { label: '3회', unit: 'cm', step: 5 }] }, target: { records: true }, levels: { easy: { prompt: '다섯 걸음 도움닫기 멀리뛰기 기록(cm)을 두 번 이상 적어요.', target: { records: 2 } } }, difficulty: 0.15 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 걸음이 안 맞을 때 어떻게 고칠까', minutes: 10, tool: 'emotion',
              task: '뛰는 동안 생길 수 있는 일이에요. 출발 표시를 어떻게 고칠지 골라요.',
              teacher: '"구름판을 넘었다면 콘을 어느 쪽으로 옮길까요? 구름판 앞에서 구르면요?" 학생이 손으로 방향을 가리키게 한다. 걸음 수를 바꾸지 말고 콘 자리를 옮긴다는 것을 짚는다.',
              levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '세 번 모두 구름판을 넘어서 발을 굴렀어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '세 번 모두 구름판을 넘어서 발을 굴렀어요.', choices: [{ id: 'back', text: '출발 콘을 뒤로 조금 옮겨요', result: '네 번째에 구름판 위에서 굴렀어요.', mood: '뿌듯함' }, { id: 'front', text: '출발 콘을 앞으로 옮겨요', result: '구름판을 더 많이 넘었어요.', mood: '속상함', why: '넘었으면 출발이 너무 가까운 거예요.' }, { id: 'six', text: '걸음 수를 아무렇게나 바꿔요', result: '걸음이 매번 달라 맞추기가 더 어려웠어요.', mood: '걱정', why: '걸음 수는 정해 두고 콘 자리를 옮겨요.' }] }, target: { choice: 'back' }, levels: { easy: { toolOptions: { choices: [{ id: 'back', text: '출발 콘을 뒤로 조금 옮겨요', result: '네 번째에 구름판 위에서 굴렀어요.', mood: '뿌듯함' }, { id: 'front', text: '출발 콘을 앞으로 옮겨요', result: '구름판을 더 많이 넘었어요.', mood: '속상함', why: '넘었으면 출발이 너무 가까운 거예요.' }] } } }, difficulty: 0.2 },
                { prompt: '구름판 한 뼘 앞에서 발을 굴렀어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '구름판보다 한 뼘 앞에서 발을 굴렀어요.', choices: [{ id: 'ok', text: '반칙이 아니니 그대로 둬요', result: '한 뼘만큼 기록을 손해 봤어요.', mood: '속상함', why: '기록은 구름판 끝부터 재요.' }, { id: 'front', text: '출발 콘을 앞으로 조금 옮겨요', result: '구름판 위에서 굴러 기록이 늘었어요.', mood: '뿌듯함' }, { id: 'slow', text: '마지막 걸음을 멈칫해 맞춰요', result: '빠르기를 잃어 낮게 떨어졌어요.', mood: '걱정', why: '멈칫하면 빠르기를 잃어요.' }] }, target: { choice: 'front' }, difficulty: 0.25 },
                { prompt: '짝이 내 기록을 발뒤꿈치가 아니라 발끝 자국까지 재 주었어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '착지 자국 가운데 발뒤꿈치가 구름판에 더 가까운데, 짝이 발끝 자국까지 재 주었어요.', choices: [{ id: 'keep', text: '기록이 더 좋으니 그대로 적어요', result: '진짜 기록과 달라 변화를 알 수 없었어요.', mood: '미안함', why: '가장 가까운 자국까지 재야 공정해요.' }, { id: 'redo', text: '구름판에 가장 가까운 자국까지 다시 재 달라고 해요', result: '바른 기록을 적었어요.', mood: '편안함' }, { id: 'far', text: '모래밭 끝까지 재요', result: '모두 같은 기록이 되었어요.', mood: '놀람', why: '기록은 내가 닿은 자국까지 재요.' }] }, target: { choice: 'redo' }, difficulty: 0.2 },
              ],
            },
          ],
          {
            teacher: '"콘을 옮겨 본 친구, 몇 번 만에 구름판에 맞았나요?" 걸음이 맞은 뒤 기록이 어떻게 달라졌는지 두세 명에게 듣는다. 세 번의 기록은 15차시에 다시 쓰니 활동지에 꼭 옮겨 적게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'emotion', options: { mode: 'branch', situation: '네 걸음 도움닫기로 바꾸었더니 구름판 앞 두 뼘에서 굴렀어요.', choices: [{ id: 'front', text: '출발 콘을 앞으로 옮겨요', result: '구름판에 가까워졌어요.', mood: '뿌듯함' }, { id: 'back', text: '출발 콘을 뒤로 옮겨요', result: '구름판에서 더 멀어졌어요.', mood: '속상함', why: '앞에서 굴렀으면 출발을 앞으로 옮겨요.' }] }, prompt: '새 상황에서 출발 표시를 어떻게 옮길지 골라요.', target: { choice: 'front' }, difficulty: 0.25 },
              { type: 'choice', prompt: '발 구르는 자리를 맞추어야 하는 까닭은?', options: ['구름판 끝부터 재서, 앞에서 구르면 손해이고 넘으면 반칙이라서', '모양이 예뻐서', '구름판이 미끄러워서'], answer: 0, difficulty: 0.2, explain: '구름판에 맞춰 굴러야 손해도 반칙도 없어요.' },
              { type: 'mood', prompt: '걸음을 맞춰 뛰어 본 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '걸음 맞추기 기록',
          items: [
            { type: 'table', prompt: '세 번의 기록과 구른 발 자리를 쓰세요.', columns: ['횟수', '구른 발 자리(앞·위·넘음)', '기록(cm)'], cells: [['1회', '', ''], ['2회', '', ''], ['3회', '', '']] },
            { type: 'choice', prompt: '구름판을 넘어서 굴렀다면 출발 콘은?', options: ['앞으로 옮겨요', '뒤로 옮겨요', '그대로 둬요'], answer: '뒤로 옮겨요' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '걸음 수는 정해 두고 ___ 자리를 옮겨 맞춰요.', answer: '출발 콘(출발 표시)' },
            { type: 'short', prompt: '걸음이 맞은 뒤 달라진 점을 쓰세요.' },
          ],
          easy: {
            note: '넘었으면 뒤로, 앞에서 굴렀으면 앞으로.',
            items: [
              { type: 'choice', prompt: '구름판보다 앞에서 굴렀다면 콘은?', options: ['앞으로', '뒤로'], answer: '앞으로' },
              { type: 'choice', prompt: '기록은 어디서부터 재나요?', options: ['구름판 끝', '출발 콘'], answer: '구름판 끝' },
              { type: 'short', prompt: '오늘 가장 좋은 기록을 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '출발 표시 차례 카드 일부가 놓여 있고, 기록은 두 번만 적어도 돼요. 판단 보기가 둘이에요.',
          base: '출발 표시를 정하는 차례를 세우고, 세 번의 기록을 적어요.',
          challenge: '판단 결과는 맞힌 뒤에만 보여요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 발 구르는 자리는 기록과 상관없다고 여긴다 → 구름판 앞 한 뼘에서 구른 기록과 판 위에서 구른 기록을 견준다. ② 걸음을 맞추려 마지막에 멈칫한다 → 걸음 수는 그대로 두고 콘을 옮기게 한다. ③ 기록을 발끝 자국까지 잰다 → 구름판에 가장 가까운 자국을 짝과 함께 찾는다. 뛰는 동작과 구른 발 자리는 짝과 교사가 관찰한다.',
      }),
      // ───────────────────────── 13 ─────────────────────────
      L(13, {
        title: '점수 표적 던지기로 정확성 기록하기',
        objective: '거리가 다른 점수 표적에 콩주머니를 던져 점수를 기록하고, 막대그래프로 나타내 가장 잘된 거리와 고칠 점을 찾을 수 있다.',
        illustration: art('three rings of paper targets marked with points at different distances, children taking turns throwing bean bags and a score board', [
          { motif: 'sun', x: 410, y: 52, s: 0.6 }, { motif: 'cloud', x: 100, y: 50 }, { motif: 'hills', y: 220 },
          { motif: 'star', x: 140, y: 150 }, { motif: 'star', x: 240, y: 140, s: 1.2 }, { motif: 'star', x: 340, y: 150 },
          { motif: 'text', x: 240, y: 96, text: '3점 · 2점 · 1점', size: 22 },
        ]),
        safety: [WARM, THROW, STOP],
        stages: stages(
          {
            teacher: '바닥에 훌라후프 세 겹 표적(가운데 3점, 가운데 둘레 2점, 바깥 1점)을 3m·4m·5m에 놓아 둔다. "10차시에 정확하게 던지는 조건 네 가지가 있었어요. 기억나나요?" 몸 방향·발 내딛기·팔 휘두르기·놓는 때를 학생이 말하게 한다. "오늘은 점수로 기록하고, 기록을 보며 고칠 점을 찾아요."',
            student: '정확하게 던지는 조건 네 가지를 떠올려 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 거리별 점수 표적에 던지고 기록하기', minutes: 15, tool: 'timer',
              task: '안전 점검 뒤 3m·4m·5m 표적에 다섯 번씩 던지고, 짝이 센 점수 합계를 적어요.',
              teacher: '"던지는 사람은 줄 뒤에서만, 기다리는 사람은 던지는 사람 뒤 2m에서 기다려요." 짝은 콩주머니가 닿은 고리를 보고 점수를 더해 준다. 고리 선 위에 걸치면 높은 점수로 센다고 미리 정한다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '던지기 전에 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['표적 둘레에 사람이 없어요', '기다리는 친구가 뒤 2m에 있어요', '콩주머니가 터지지 않았어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '짝과 거리를 바꾸어 가며 다섯 번씩 던져요. 다 하면 ‘짝·모둠과 함께 해 보았어요’를 눌러요.', free: true },
                { prompt: '3m·4m·5m 표적에서 다섯 번 던져 얻은 점수 합계를 적어요.', toolOptions: { fields: [{ label: '3m', unit: '점', max: 15 }, { label: '4m', unit: '점', max: 15 }, { label: '5m', unit: '점', max: 15 }] }, target: { records: true }, levels: { easy: { prompt: '3m·4m 표적에서 다섯 번 던져 얻은 점수 합계를 적어요.', toolOptions: { fields: [{ label: '3m', unit: '점', max: 15 }, { label: '4m', unit: '점', max: 15 }] } } }, difficulty: 0.15 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 점수를 그래프로 보고 고칠 점 찾기', minutes: 11, tool: 'chart',
              task: '친구의 점수 기록을 막대그래프로 나타내고 읽어서, 어느 거리에서 무엇을 고쳐야 할지 찾아요.',
              teacher: '"거리가 멀어질수록 점수가 줄었나요? 그렇다면 무엇을 바꿔야 할까요?" 그래프만 보고 \'못 던진다\'고 하지 않고, 멀어질 때 바꿀 조건(팔 휘두르기 크기·세기)을 말하게 한다.',
              levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '하린이의 거리별 점수 표를 보고 막대그래프를 완성해요.', toolOptions: { type: 'bar', title: '하린이의 거리별 점수(15점 만점)', unit: '점', xLabel: '거리', yLabel: '점수', data: [['3m', 12], ['4m', 9], ['5m', 4]] }, target: { build: true }, levels: { easy: { toolOptions: { given: [0] } } }, difficulty: 0.15 },
                { prompt: '하린이 그래프에서 점수가 가장 많이 줄어든 때를 골라요.', toolOptions: { type: 'bar', mode: 'read', title: '하린이의 거리별 점수(15점 만점)', unit: '점', xLabel: '거리', data: [['3m', 12], ['4m', 9], ['5m', 4]], question: '가장 많이 줄어든 때는?', choices: ['3m→4m', '4m→5m'] }, target: { pick: 1 }, difficulty: 0.2,
                  conclude: '멀어질수록 팔을 더 크게 휘둘러 세기를 거리에 맞춰야 해요.' },
                { prompt: '태오의 그래프를 보고, 4m 점수는 5m 점수보다 몇 점 높은지 써요.', toolOptions: { type: 'bar', mode: 'read', title: '태오의 거리별 점수(15점 만점)', unit: '점', xLabel: '거리', data: [['3m', 8], ['4m', 11], ['5m', 6]], question: '4m는 5m보다 몇 점 높나요?' }, target: { value: 5 }, levels: { challenge: { prompt: '태오의 세 거리 점수 합계는 모두 몇 점인지 그래프를 읽고 써요.', toolOptions: { question: '세 거리 점수 합계는?' }, target: { value: 25 } } }, difficulty: 0.2 },
              ],
            },
          ],
          {
            teacher: '"태오는 3m보다 4m에서 점수가 더 높았어요. 가까울수록 언제나 점수가 높을까요?" 가까운 표적에서 너무 세게 던져 넘어간 경우를 떠올리게 한다. 자기 기록 그래프는 활동지에 그리고, 가장 낮은 거리에서 바꿀 조건 하나를 적게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '수아의 거리별 점수(15점 만점)', unit: '점', xLabel: '거리', data: [['3m', 6], ['4m', 10], ['5m', 9]], question: '가장 점수가 낮은 거리는?', choices: ['3m', '4m', '5m'] }, prompt: '수아의 그래프를 읽고 점수가 가장 낮은 거리를 골라요.', target: { pick: 0 }, difficulty: 0.2 },
              { type: 'choice', prompt: '수아는 3m 표적을 자꾸 넘겼어요. 무엇을 바꾸면 좋을까요?', options: ['더 세게 던지기', '세기를 줄여 부드럽게 던지기', '발을 모으기'], answer: 1, difficulty: 0.25, explain: '가까운 표적은 세기를 줄여 거리에 맞춰요.' },
              { type: 'short', prompt: '내 점수가 가장 낮은 거리에서 바꿀 조건 하나를 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '점수 표적 던지기',
          items: [
            { type: 'table', prompt: '거리마다 내 점수 합계를 쓰세요.', columns: ['거리', '3m', '4m', '5m'], cells: [['점수(15점 만점)', '', '', '']] },
            { type: 'draw', prompt: '내 점수를 막대그래프로 그리세요. (가로: 거리, 세로: 점수)' },
            { type: 'choice', prompt: '멀어질수록 점수가 줄었다면 바꿀 것에 ○ 하세요.', options: ['팔 휘두르기를 크게 해 세기를 맞추기', '눈을 감기', '발을 모으기'], answer: '팔 휘두르기를 크게 해 세기를 맞추기' },
            { type: 'short', prompt: '다음 연습에서 바꿀 조건 하나를 쓰세요.' },
          ],
          easy: {
            note: '가운데 3점, 그 둘레 2점, 바깥 1점.',
            items: [
              { type: 'choice', prompt: '가운데 원에 들어가면 몇 점인가요?', options: ['3점', '1점'], answer: '3점' },
              { type: 'short', prompt: '3m 표적 점수를 쓰세요.' },
              { type: 'short', prompt: '4m 표적 점수를 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '두 거리만 기록하고, 그래프 첫 막대가 그려져 있으며 값이 보여요.',
          base: '세 거리의 점수를 기록하고, 그래프로 나타내 고칠 점을 찾아요.',
          challenge: '그래프 값은 맞힌 뒤에만 보이고, 세 거리 점수를 모두 더해요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 거리가 멀어지면 무조건 세게만 던진다 → 팔 휘두르기를 크게 하는 것과 세게 던지는 것을 나누어 보인다. ② 가까운 표적은 늘 쉽다고 여긴다 → 넘겨서 점수를 잃은 태오·수아 자료로 세기 조절을 짚는다. ③ 다른 사람이 던지는 중에 줍는다 → 모두 던진 뒤 신호에 맞춰 줍는다. 점수는 짝이 세고, 동작은 교사가 관찰한다.',
      }),
      // ───────────────────────── 14 ─────────────────────────
      L(14, {
        title: '옆돌기나 뛰어넘기를 골라 보조자와 해내기',
        objective: '손 짚고 옆돌기와 다리 벌려 뛰어넘기 가운데 하나를 골라 단계를 높여 가며, 보조자와 신호를 맞추어 안전하게 해낼 수 있다.',
        illustration: art('pairs of children on paper mats, one doing a cartwheel and one helper standing beside, another child leaping over a low box with a spotter', [
          { motif: 'sun', x: 410, y: 52, s: 0.6 }, { motif: 'cloud', x: 90, y: 50 }, { motif: 'hills', y: 222 },
          { motif: 'star', x: 200, y: 110 }, { motif: 'house', x: 420, y: 214, s: 0.7 },
          { motif: 'text', x: 240, y: 160, text: '보조자와 함께', size: 22 },
        ]),
        safety: [WARM, MAT, '뜀틀은 2~3단만 쓰고, 넘는 사람과 보조자가 "준비-출발" 신호를 맞춘 뒤에만 출발해요.', STOP],
        stages: stages(
          {
            teacher: '"11차시에 옆돌기 낮은 단계와 뛰어넘기 원리를 배웠어요. 오늘은 둘 가운데 하나를 골라 단계를 높여 봐요. 단계는 언제 올릴까요?" "잘 되면요"라는 대답을 받아 "세 번 가운데 두 번 이상 바르게 되면 한 단계 올려요"라고 기준을 정한다.',
            student: '옆돌기와 뛰어넘기 가운데 오늘 도전할 기능 하나를 골라요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 단계 높이기 계획과 안전 점검', minutes: 16, tool: 'timer',
              task: '고른 기능의 단계 차례를 세우고 안전 점검을 한 뒤, 보조자와 역할을 바꾸어 가며 해 봐요.',
              teacher: '옆돌기 단계: 두 손 짚고 두 발 넘기기 → 다리 하나씩 높이 넘기기 → 선 위에서 이어 돌기. 뛰어넘기 단계: 뜀틀 위에 손 짚고 올라앉기 → 2단 다리 벌려 넘기 → 3단 다리 벌려 넘기. "단계 올리기는 세 번 가운데 두 번 이상 바르게 되었을 때만 해요." 교사는 뜀틀 옆에서 보조를 함께 본다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '뛰어넘기를 단계를 높이며 익히는 차례대로 놓아요.', toolOptions: { cards: ['3단 뜀틀 다리 벌려 넘기', '뜀틀 위에 손 짚고 올라앉기', '2단 뜀틀 다리 벌려 넘기'] }, target: { order: ['뜀틀 위에 손 짚고 올라앉기', '2단 뜀틀 다리 벌려 넘기', '3단 뜀틀 다리 벌려 넘기'] }, levels: { easy: { state: { order: ['뜀틀 위에 손 짚고 올라앉기', '3단 뜀틀 다리 벌려 넘기', '2단 뜀틀 다리 벌려 넘기'] } }, challenge: { prompt: '옆돌기와 뛰어넘기 단계를 쉬운 것부터 놓아요. 옆돌기를 먼저 익혀요.', toolOptions: { cards: ['3단 뜀틀 다리 벌려 넘기', '두 손 짚고 두 발 넘기기', '뜀틀 위에 손 짚고 올라앉기', '선 위에서 이어 돌기', '다리 하나씩 높이 넘기기', '2단 뜀틀 다리 벌려 넘기'] }, target: { order: ['두 손 짚고 두 발 넘기기', '다리 하나씩 높이 넘기기', '선 위에서 이어 돌기', '뜀틀 위에 손 짚고 올라앉기', '2단 뜀틀 다리 벌려 넘기', '3단 뜀틀 다리 벌려 넘기'] } } }, difficulty: 0.2,
                  hints: ['몸무게를 손으로 받치는 연습부터, 높이와 빠르기는 나중에 올려요.', '처음부터 높은 단을 넘는 카드가 앞에 있지 않은지 보세요.', '올라앉기 → 2단 넘기 → 3단 넘기 차례예요.'] },
                { prompt: '시작하기 전에 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['착지 매트가 뜀틀 바로 뒤에 붙어 있어요', '보조자가 정한 자리에 섰어요', '"준비-출발" 신호를 맞추었어요', '매트 둘레에 사람이 없어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '고른 기능을 보조자와 역할을 바꾸며 해요. 다 하면 ‘짝·모둠과 함께 해 보았어요’를 눌러요.', free: true },
              ],
            },
            {
              id: 'a2', title: '활동 2. 보조자와 넘는 사람, 이럴 땐 어떻게?', minutes: 10, tool: 'emotion',
              task: '단계를 높이며 생길 수 있는 일이에요. 안전하고 바른 행동을 골라요.',
              teacher: '"친구가 올라가는 것을 보니 나도 바로 3단을 넘고 싶어요. 괜찮을까요?" 기준(세 번 중 두 번)을 다시 말한다. 보조자는 넘는 사람이 실수해도 웃거나 놀리지 않고, 다음에 고칠 점 하나를 말해 준다.',
              levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '2단을 한 번만 넘었는데 친구들이 3단을 해 보래요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '2단 뜀틀을 세 번 가운데 한 번만 넘었는데, 친구들이 3단을 해 보래요.', choices: [{ id: 'up', text: '바로 3단으로 올려요', result: '손 짚기가 늦어 뜀틀에 걸렸어요.', mood: '놀람', why: '기준을 채우기 전에 올리면 다치기 쉬워요.' }, { id: 'stay', text: '2단에서 두 번 이상 될 때까지 더 해요', result: '세 번째부터 가볍게 넘었어요.', mood: '뿌듯함' }, { id: 'stop', text: '어려우니 그만둬요', result: '연습 기회를 놓쳤어요.', mood: '속상함', why: '알맞은 단계에서 계속 익히면 돼요.' }] }, target: { choice: 'stay' }, levels: { easy: { toolOptions: { choices: [{ id: 'up', text: '바로 3단으로 올려요', result: '손 짚기가 늦어 뜀틀에 걸렸어요.', mood: '놀람', why: '기준을 채우기 전에 올리면 다치기 쉬워요.' }, { id: 'stay', text: '2단에서 두 번 이상 될 때까지 더 해요', result: '세 번째부터 가볍게 넘었어요.', mood: '뿌듯함' }] } } }, difficulty: 0.15 },
                { prompt: '보조자인 내가 신호를 맞추기 전에 친구가 달려와요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '보조자인 내가 아직 자리에 서지 않았는데 친구가 달려와요.', choices: [{ id: 'run', text: '서둘러 뜀틀 앞으로 뛰어가요', result: '친구와 부딪힐 뻔했어요.', mood: '놀람', why: '넘는 길 앞에 서면 위험해요.' }, { id: 'stop', text: '손을 들고 "멈춰!"라고 외쳐요', result: '친구가 멈추고 신호를 다시 맞췄어요.', mood: '편안함' }, { id: 'none', text: '그냥 지켜봐요', result: '보조 없이 넘다 착지가 흔들렸어요.', mood: '걱정', why: '신호를 맞춘 뒤에만 출발해요.' }] }, target: { choice: 'stop' }, difficulty: 0.2 },
                { prompt: '짝이 옆돌기에서 다리가 굽었어요. 보조자로서 무슨 말을 할까요?', toolOptions: { mode: 'branch', situation: '짝이 옆돌기를 했는데 다리가 굽어 낮게 돌았어요.', choices: [{ id: 'laugh', text: '"개구리 같아" 하고 웃어요', result: '짝이 다시 하기 싫어했어요.', mood: '속상함', why: '놀리는 말은 도전할 마음을 꺾어요.' }, { id: 'tip', text: '"다리를 쭉 펴서 크게 넘겨 봐"라고 말해요', result: '짝이 다리를 펴고 더 둥글게 돌았어요.', mood: '고마움' }, { id: 'skip', text: '아무 말도 하지 않아요', result: '짝이 무엇을 고칠지 몰랐어요.', mood: '걱정', why: '고칠 점 하나를 말해 주면 도움이 돼요.' }] }, target: { choice: 'tip' }, difficulty: 0.2 },
              ],
            },
          ],
          {
            teacher: '"오늘 몇 단계까지 해냈나요? 단계를 올릴 때 무엇을 기준으로 했나요?" 두세 명에게 듣는다. 출구 1번은 옆돌기 단계라 오늘 활동과 다르니 스스로 판단하게 한다. 손목·어깨 풀기로 마무리한다.',
            exitTicket: [
              { type: 'tool', tool: 'timer', options: { cards: ['선 위에서 이어 돌기', '두 손 짚고 두 발 넘기기', '다리 하나씩 높이 넘기기'] }, prompt: '옆돌기를 쉬운 단계부터 차례대로 놓아요.', target: { order: ['두 손 짚고 두 발 넘기기', '다리 하나씩 높이 넘기기', '선 위에서 이어 돌기'] }, difficulty: 0.2 },
              { type: 'choice', prompt: '단계를 올려도 되는 때는?', options: ['친구들이 해 보라고 할 때', '세 번 가운데 두 번 이상 바르게 되었을 때', '한 번 성공했을 때'], answer: 1, difficulty: 0.2, explain: '정한 기준을 채웠을 때 올려야 안전하게 익혀요.' },
              { type: 'mood', prompt: '오늘 고른 기능을 해낸 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '단계 높이기 기록',
          items: [
            { type: 'table', prompt: '단계마다 세 번 가운데 바르게 된 횟수를 쓰세요.', columns: ['단계', '바르게 된 횟수(3번 중)', '다음 단계로?'], rows: 3 },
            { type: 'choice', prompt: '보조자가 서는 자리에 ○ 하세요.', options: ['뜀틀 앞', '뜀틀 옆', '착지 매트 가운데'], answer: '뜀틀 옆' },
            { type: 'check', prompt: '오늘 보조자로서 한 일에 ✓ 하세요.', options: ['"준비-출발" 신호를 맞췄어요', '허리와 팔을 받쳤어요', '고칠 점 하나를 말해 주었어요'] },
            { type: 'short', prompt: '오늘 해낸 가장 높은 단계와, 다음에 고칠 동작을 쓰세요.' },
          ],
          easy: {
            note: '세 번 중 두 번 되면 한 단계 올려요.',
            items: [
              { type: 'choice', prompt: '출발은 언제 하나요?', options: ['신호를 맞춘 뒤', '아무 때나'], answer: '신호를 맞춘 뒤' },
              { type: 'choice', prompt: '짝이 실수하면?', options: ['고칠 점을 말해요', '웃어요'], answer: '고칠 점을 말해요' },
              { type: 'short', prompt: '오늘 고른 기능을 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '단계 카드 일부가 놓여 있고, 판단 보기가 둘이에요.',
          base: '고른 기능의 단계 차례를 세우고, 안전 점검 뒤 보조자와 해요.',
          challenge: '옆돌기와 뛰어넘기 여섯 단계를 모두 차례로 세우고, 판단 결과는 맞힌 뒤에만 보여요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 기준을 채우기 전에 높은 단계로 올린다 → 세 번 중 두 번 기준을 칠판에 적고 보조자가 확인한다. ② 보조자가 넘는 길 앞이나 착지 자리에 선다 → 바닥 테이프로 보조 자리를 표시한다. ③ 실수한 친구를 놀린다 → 고칠 점 하나를 말해 주는 틀을 준다. 동작의 바르기는 교사와 보조자가 관찰하며, 교구는 차례·점검만 확인한다.',
      }),
      // ───────────────────────── 15 ─────────────────────────
      L(15, {
        title: '멀리뛰기 세 번 기록을 견주어 가장 잘된 시도 찾기',
        objective: '세 번의 멀리뛰기 기록과 동작 메모를 견주어 가장 잘된 시도가 다른 시도와 무엇이 달랐는지 짚을 수 있다.',
        illustration: art('three paper footprints in a sandpit with measuring tape and three cards beside them, one card shining with a star', [
          { motif: 'sun', x: 410, y: 52, s: 0.6 }, { motif: 'cloud', x: 100, y: 52 }, { motif: 'hills', y: 222 },
          { motif: 'star', x: 330, y: 120, s: 1.2 }, { motif: 'leaf', x: 90, y: 200 },
          { motif: 'text', x: 220, y: 150, text: '1회 · 2회 · 3회', size: 22 },
        ]),
        safety: [WARM, PIT, STOP],
        stages: stages(
          {
            teacher: '12차시 기록지를 나누어 준다. "세 번 가운데 가장 잘된 시도는 몇 번째였나요? 그건 운이 좋아서였을까요?" "그냥 잘됐어요"라는 대답이 나오면 "그때 발은 어디서 굴렀고, 팔은 어땠나요?"라고 다시 묻는다. "오늘은 기록과 동작 메모를 함께 보며 가장 잘된 시도의 까닭을 찾아요."',
            student: '12차시 세 번의 기록 가운데 가장 좋은 기록에 동그라미 해요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 지민이의 기록 그래프와 메모 읽기', minutes: 12, tool: 'chart',
              task: '지민이의 세 번 기록 그래프와 짝의 동작 메모를 보고, 가장 잘된 시도와 그 까닭을 찾아요.',
              teacher: '칠판에 지민이의 메모를 붙인다. 1회: 구름판 앞 한 뼘에서 구름. 2회: 구름판 위에서 구르고 팔을 앞으로 뻗음. 3회: 구름판 위에서 굴렀지만 착지 때 손으로 뒤를 짚음. "2회와 3회는 구른 자리가 같았어요. 그런데 왜 기록이 다를까요?" 착지 자국을 떠올리게 한다.',
              levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '지민이의 멀리뛰기 그래프에서 가장 잘된 시도를 골라요.', toolOptions: { type: 'bar', mode: 'read', title: '지민이의 다섯 걸음 도움닫기 멀리뛰기', unit: 'cm', xLabel: '시도', data: [['1회', 230], ['2회', 285], ['3회', 250]], question: '가장 잘된 시도는?', choices: ['1회', '2회', '3회'] }, target: { pick: 1 }, difficulty: 0.15 },
                { prompt: '2회 기록은 1회보다 몇 cm 더 멀리 뛰었는지 써요.', toolOptions: { type: 'bar', mode: 'read', title: '지민이의 다섯 걸음 도움닫기 멀리뛰기', unit: 'cm', xLabel: '시도', data: [['1회', 230], ['2회', 285], ['3회', 250]], question: '2회는 1회보다 몇 cm 더 멀리 뛰었나요?' }, target: { value: 55 }, levels: { challenge: { prompt: '2회 기록은 3회보다 몇 cm 더 멀리 뛰었는지 써요.', toolOptions: { question: '2회는 3회보다 몇 cm 더 멀리 뛰었나요?' }, target: { value: 35 } } }, difficulty: 0.2 },
                { prompt: '지민이 메모를 보고, 3회가 2회보다 짧아진 까닭을 골라요.', toolOptions: { type: 'bar', mode: 'read', title: '지민이의 다섯 걸음 도움닫기 멀리뛰기', unit: 'cm', xLabel: '시도', data: [['1회', 230], ['2회', 285], ['3회', 250]], question: '3회가 짧아진 까닭은?(3회 메모: 구름판 위에서 굴렀지만 착지 때 손으로 뒤를 짚음)', choices: ['구름판 앞에서 굴러서', '착지 때 뒤를 짚어 가까운 자국이 생겨서', '운이 나빠서'] }, target: { pick: 1 }, difficulty: 0.3,
                  conclude: '가장 잘된 시도에는 까닭이 있어요. 기록과 동작 메모를 함께 보면 찾을 수 있어요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 내 가장 잘된 시도의 다른 점 찾기', minutes: 14, tool: 'mindmap',
              task: '가장 잘된 시도의 다른 점이 될 수 있는 것을 고르고, 내 기록과 짝의 메모로 내 시도를 견주어 짝에게 말해요.',
              teacher: '"\'그냥 잘됐다\', \'운이 좋았다\'는 다음에 따라 할 수 없어요. 따라 할 수 있는 다른 점을 찾아요." 짝 말하기 틀: "내 가장 잘된 시도는 ○회예요. 다른 시도와 달리 ○○했어요." 짝 메모가 없는 학생은 오늘 두 번 더 뛰고 짝이 구른 자리와 팔·착지를 메모해 준다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '가장 잘된 시도의 \'다른 점\'으로 쓸 수 있는 것만 골라요.', toolOptions: { mode: 'pick', topic: '다른 점 찾기', basket: '다른 점', cards: ['구름판 위에서 발을 굴렀어요', '팔을 앞으로 뻗으며 날았어요', '착지 때 몸을 앞으로 내밀었어요', '그날따라 운이 좋았어요'] }, target: { pick: ['구름판 위에서 발을 굴렀어요', '팔을 앞으로 뻗으며 날았어요', '착지 때 몸을 앞으로 내밀었어요'] }, levels: { challenge: { prompt: '가장 잘된 시도의 \'다른 점\'으로 쓸 수 있는 것만 골라요. 따라 할 수 없는 말이 둘 섞여 있어요.', toolOptions: { cards: ['구름판 위에서 발을 굴렀어요', '팔을 앞으로 뻗으며 날았어요', '착지 때 몸을 앞으로 내밀었어요', '그날따라 운이 좋았어요', '기분이 좋았어요'] } } }, difficulty: 0.2,
                  hints: ['다음 시도에서 따라 할 수 있는 몸의 움직임이 다른 점이에요.', '다음에 내 마음대로 되풀이할 수 없는 것을 고르지 않았는지 보세요.', '구름판 위 구르기, 팔 뻗기, 앞으로 내밀며 착지는 따라 할 수 있어요. 운은 따라 할 수 없어요.'] },
                { prompt: '메모 내용과 그 메모가 알려 주는 기록 변화를 이어요.', toolOptions: { mode: 'match', topic: '메모가 말해 주는 것', slots: [{ id: 'front', label: '구름판 앞 한 뼘에서 구름' }, { id: 'low', label: '앞으로 낮게 뛰어나감' }, { id: 'sit', label: '착지 때 엉덩이가 뒤로 빠짐' }], cards: ['구름판까지 거리만큼 손해', '높이가 없어 빨리 떨어짐', '뒤쪽 자국까지 재서 짧아짐'] }, target: { match: { front: '구름판까지 거리만큼 손해', low: '높이가 없어 빨리 떨어짐', sit: '뒤쪽 자국까지 재서 짧아짐' } }, levels: { easy: { state: { at: { '구름판까지 거리만큼 손해': 0 } } } }, difficulty: 0.25 },
                { prompt: '짝에게 내 가장 잘된 시도와 다른 점을 말해요. 말한 뒤 ‘다 했어요’를 눌러요.', free: true, talk: true },
              ],
            },
          ],
          {
            teacher: '"가장 잘된 시도의 까닭을 찾은 친구?" 두세 명이 발표한다. 출구 1번은 새 친구의 자료이니 혼자 판단하게 한다. 다음 시간에는 찾은 다른 점 하나를 일부러 되풀이하는 연습을 한다고 알린다.',
            exitTicket: [
              { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '유나의 멀리뛰기(메모: 2회만 구름판 앞 두 뼘에서 구름)', unit: 'cm', xLabel: '시도', data: [['1회', 270], ['2회', 215], ['3회', 265]], question: '구름판 앞에서 구른 시도는?', choices: ['1회', '2회', '3회'] }, prompt: '유나의 그래프와 메모를 보고 구름판 앞에서 구른 시도를 골라요.', target: { pick: 1 }, difficulty: 0.2 },
              { type: 'choice', prompt: '가장 기록이 좋은 시도에 대한 생각으로 알맞은 것은?', options: ['우연히 나온 것이라 까닭이 없어요', '다른 시도와 달랐던 동작을 찾으면 되풀이할 수 있어요', '기록이 좋으면 동작은 볼 필요가 없어요'], answer: 1, difficulty: 0.2, explain: '잘된 시도에는 까닭이 있어요. 찾으면 다음에도 따라 할 수 있어요.' },
              { type: 'short', prompt: '내 가장 잘된 시도의 다른 점 하나를 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '가장 잘된 시도 찾기',
          items: [
            { type: 'table', prompt: '내 세 번의 기록과 짝의 메모를 쓰세요.', columns: ['시도', '기록(cm)', '짝의 메모(구른 자리·팔·착지)'], cells: [['1회', '', ''], ['2회', '', ''], ['3회', '', '']] },
            { type: 'choice', prompt: '다른 점으로 쓸 수 없는 것에 ○ 하세요.', options: ['구름판 위에서 굴렀어요', '그날 운이 좋았어요', '팔을 앞으로 뻗었어요'], answer: '그날 운이 좋았어요' },
            { type: 'short', prompt: '"내 가장 잘된 시도는 ○회예요. 다른 시도와 달리 ○○했어요." 틀로 쓰세요.' },
            { type: 'short', prompt: '다음 시간에 되풀이해 볼 동작 하나를 쓰세요.' },
          ],
          easy: {
            note: '가장 잘된 시도 = 구른 자리, 팔, 착지가 어땠는지 보기.',
            items: [
              { type: 'choice', prompt: '가장 잘된 시도의 까닭은?', options: ['따라 할 수 있는 동작', '운'], answer: '따라 할 수 있는 동작' },
              { type: 'short', prompt: '내 가장 좋은 기록을 쓰세요.' },
              { type: 'short', prompt: '그때 짝이 본 내 동작을 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '그래프에 값이 보이고, 짝 카드를 맞는 칸에 놓으면 바로 표시돼요.',
          base: '그래프와 메모를 함께 읽어 가장 잘된 시도의 까닭을 찾아요.',
          challenge: '그래프 값은 맞힌 뒤에만 보이고, 따라 할 수 없는 함정 말이 둘 섞여요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 기록이 가장 좋은 시도는 우연히 나온 것이라고 여긴다 → 지민이처럼 메모와 기록을 함께 보아 까닭을 찾게 한다. ② 다른 점을 "기분"이나 "운"으로 쓴다 → 다음에 따라 할 수 있는 동작인지 묻는다. ③ 짝 메모가 없다 → 오늘 두 번 더 뛰며 짝이 구른 자리·팔·착지를 적어 준다. 뛰는 동작은 교사가 관찰한다.',
      }),
      // ───────────────────────── 16 ─────────────────────────
      L(16, {
        title: '고칠 동작 하나를 정해 다시 뛰고 견주기',
        objective: '내 멀리뛰기에서 고칠 동작 하나를 정해 집중해 연습하고, 고치기 전과 뒤의 기록을 견주어 효과를 말할 수 있다.',
        illustration: art('a child practicing one focused move, arms swinging forward, with before and after paper ribbons showing a longer jump', [
          { motif: 'sun', x: 410, y: 52, s: 0.6 }, { motif: 'cloud', x: 90, y: 50 }, { motif: 'hills', y: 222 },
          { motif: 'star', x: 180, y: 120 }, { motif: 'star', x: 320, y: 100, s: 1.2 },
          { motif: 'text', x: 240, y: 160, text: '하나만 고쳐 봐요', size: 22 },
        ]),
        safety: [WARM, PIT, STOP],
        stages: stages(
          {
            teacher: '"한꺼번에 세 가지를 고치려고 하면 어떻게 될까요?" 대답을 듣고 "하나만 정해서 그것만 생각하며 뛰면, 무엇이 효과가 있었는지 알 수 있어요"라고 짚는다. 15차시에 쓴 \'되풀이해 볼 동작\'을 다시 읽게 한다.',
            student: '15차시에 쓴 되풀이해 볼 동작을 다시 읽어 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 문제 장면과 고칠 동작 짝 짓기', minutes: 8, tool: 'mindmap',
              task: '짝이 본 문제 장면마다 고칠 동작을 이어 보고, 내 고칠 동작 하나를 정해요.',
              teacher: '"착지 때 엉덩이가 뒤로 빠지는 친구는 무엇을 연습할까요?" 문제마다 연습할 동작이 다르다는 것을 짚는다. "멀리 뛰려고 무조건 더 빨리 달린다"를 고른 학생에게 9차시의 \'구름판을 지나친 장면\'을 떠올리게 한다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '짝이 본 문제 장면과 고칠 동작을 이어요.', toolOptions: { mode: 'match', topic: '이건 이렇게 고쳐요', slots: [{ id: 'sit', label: '착지 때 엉덩이가 뒤로 빠져요' }, { id: 'stop', label: '구름판 앞에서 멈칫해요' }, { id: 'low', label: '앞으로 낮게 뛰어나가요' }], cards: ['팔과 몸을 앞으로 내밀며 착지하기', '출발 콘을 옮겨 걸음 맞추기', '구르는 발로 위로 차오르기'] }, target: { match: { sit: '팔과 몸을 앞으로 내밀며 착지하기', stop: '출발 콘을 옮겨 걸음 맞추기', low: '구르는 발로 위로 차오르기' } }, levels: { easy: { state: { at: { '팔과 몸을 앞으로 내밀며 착지하기': 0 } } } }, difficulty: 0.2 },
                { prompt: '고칠 동작을 연습하는 좋은 방법만 골라요.', toolOptions: { mode: 'pick', topic: '고치는 연습', basket: '좋은 방법', cards: ['고칠 동작 하나만 생각하며 뛰기', '짝에게 그 동작만 봐 달라고 하기', '고친 뒤 기록을 전과 견주기', '세 가지를 한꺼번에 바꾸기'] }, target: { pick: ['고칠 동작 하나만 생각하며 뛰기', '짝에게 그 동작만 봐 달라고 하기', '고친 뒤 기록을 전과 견주기'] }, levels: { challenge: { prompt: '고칠 동작을 연습하는 좋은 방법만 골라요. 효과를 알 수 없게 만드는 방법이 둘 섞여 있어요.', toolOptions: { cards: ['고칠 동작 하나만 생각하며 뛰기', '짝에게 그 동작만 봐 달라고 하기', '고친 뒤 기록을 전과 견주기', '세 가지를 한꺼번에 바꾸기', '고친 뒤에는 기록을 재지 않기'] } } }, difficulty: 0.25,
                  hints: ['무엇이 효과가 있었는지 알려면 한 번에 하나만 바꾸고 결과를 재요.', '여러 가지를 바꾸거나 결과를 재지 않는 카드를 고르지 않았는지 보세요.', '하나만 생각하기, 짝이 그것만 보기, 전과 견주기가 좋은 방법이에요.'] },
                { prompt: '짝과 내 고칠 동작 하나를 정해 말해요. 말한 뒤 ‘다 했어요’를 눌러요.', free: true, talk: true },
              ],
            },
            {
              id: 'a2', title: '활동 2. 고치기 전과 뒤 기록 재기', minutes: 18, tool: 'timer',
              task: '고치기 전에 한 번 뛰고, 고칠 동작만 생각하며 연습한 뒤 두 번 더 뛰어 세 기록을 적어요.',
              teacher: '연습 정거장: 착지(모래밭 앞 선에서 두 발 모아 앞으로 내밀기), 걸음 맞추기(콘 옮기기), 차오르기(낮은 줄 넘으며 무릎 끌어올리기). "연습은 30초씩, 쉬는 동안 짝이 그 동작 하나만 말해 줘요." 고친 뒤 기록이 떨어져도 그 결과를 그대로 적는다.',
              levels: { easy: { showTotal: true }, base: {}, challenge: {} },
              items: [
                { prompt: '고칠 동작 연습을 30초 하고 15초 쉬기를 3번 하도록 타이머를 맞춰요.', toolOptions: { plan: { work: 20, rest: 20, rounds: 2 } }, target: { plan: { work: 30, rest: 15, rounds: 3 } }, levels: { challenge: { prompt: '연습 30초, 쉬기 15초를 되풀이해 전체 2분이 되게 맞춰요.', target: { plan: { work: 30, rest: 15 }, total: 120 } } }, difficulty: 0.2 },
                { prompt: '고칠 동작을 정거장에서 연습하고 다시 뛰어요. 다 하면 ‘짝·모둠과 함께 해 보았어요’를 눌러요.', free: true },
                { prompt: '고치기 전 한 번, 고친 뒤 두 번의 기록(cm)을 적어요.', toolOptions: { fields: [{ label: '고치기 전', unit: 'cm', step: 5 }, { label: '고친 뒤 1회', unit: 'cm', step: 5 }, { label: '고친 뒤 2회', unit: 'cm', step: 5 }] }, target: { records: true }, levels: { easy: { prompt: '고치기 전 한 번, 고친 뒤 한 번 이상의 기록(cm)을 적어요.', target: { records: 2 } } }, difficulty: 0.15 },
              ],
            },
          ],
          {
            teacher: '"고친 뒤 기록이 늘어난 친구, 그대로이거나 줄어든 친구 모두 손을 들어 봐요." 줄어든 것도 정보라는 것을 짚는다. "줄었다면 고칠 동작이 아직 몸에 익지 않았거나, 다른 동작이 문제였을 수 있어요." 출구 1번은 새 자료이니 스스로 판단하게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '하준이의 기록(착지 고치기 연습)', unit: 'cm', xLabel: '때', data: [['고치기 전', 240], ['고친 뒤 1회', 255], ['고친 뒤 2회', 262]], question: '고치기 전보다 고친 뒤 2회는 몇 cm 늘었나요?' }, prompt: '하준이의 그래프를 읽고 늘어난 거리를 써요.', target: { value: 22 }, difficulty: 0.2 },
              { type: 'choice', prompt: '고칠 동작을 하나만 정해 연습하는 까닭은?', options: ['무엇이 효과가 있었는지 알 수 있어서', '연습이 짧아서', '선생님이 정해서'], answer: 0, difficulty: 0.2, explain: '한 번에 하나만 바꾸어야 그 동작의 효과를 알 수 있어요.' },
              { type: 'mood', prompt: '고칠 동작을 연습해 본 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '하나 고치고 견주기',
          items: [
            { type: 'table', prompt: '고칠 동작과 기록을 쓰세요.', columns: ['고칠 동작', '고치기 전(cm)', '고친 뒤 1회(cm)', '고친 뒤 2회(cm)'], rows: 1 },
            { type: 'choice', prompt: '착지 때 엉덩이가 뒤로 빠질 때 연습할 동작에 ○ 하세요.', options: ['더 빨리 달리기', '팔과 몸을 앞으로 내밀며 착지하기', '출발 콘 옮기기'], answer: '팔과 몸을 앞으로 내밀며 착지하기' },
            { type: 'short', prompt: '고친 뒤 기록이 어떻게 바뀌었고, 그 까닭은 무엇이라고 생각하는지 쓰세요.' },
            { type: 'short', prompt: '다음에 고쳐 볼 동작 하나를 쓰세요.' },
          ],
          easy: {
            note: '한 번에 하나만 고쳐요.',
            items: [
              { type: 'choice', prompt: '한 번에 몇 가지를 고칠까요?', options: ['하나', '세 가지'], answer: '하나' },
              { type: 'short', prompt: '내가 고칠 동작을 쓰세요.' },
              { type: 'short', prompt: '고친 뒤 기록을 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '짝 카드를 맞는 칸에 놓으면 바로 표시되고, 타이머 전체 시간이 보이며, 기록은 두 칸만 적어도 돼요.',
          base: '고칠 동작을 정하고 연습 계획을 세운 뒤 세 번의 기록을 적어요.',
          challenge: '효과를 알 수 없게 만드는 함정 방법이 둘 섞이고, 전체 시간을 셈해 계획을 맞춰요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 여러 동작을 한꺼번에 바꾸어 무엇이 효과였는지 모른다 → 하나만 정하고 짝도 그 동작만 보게 한다. ② 기록이 떨어지면 연습이 소용없다고 여긴다 → 새 동작이 몸에 익는 데 시간이 걸린다는 것을 15차시 지민이 자료로 이야기한다. ③ 연습 정거장에서 쉬지 않고 계속 뛴다 → 30초 연습·15초 쉬기를 지킨다. 실제 동작은 교사가 정거장을 돌며 관찰한다.',
      }),
      // ───────────────────────── 17 ─────────────────────────
      L(17, {
        title: '50m 달리기 기록 재는 역할과 차례 익히기',
        objective: '출발 신호원·계시원·기록원의 역할과 기록 재는 차례를 말하고, 모둠에서 역할을 나누어 50m 달리기 기록을 잴 수 있다.',
        illustration: art('a straight paper running track with a starter raising a flag, a timekeeper with a stopwatch at the finish line and a recorder with a clipboard', [
          { motif: 'sun', x: 410, y: 52, s: 0.7 }, { motif: 'cloud', x: 100, y: 52 }, { motif: 'hills', y: 220 },
          { motif: 'tree', x: 60, y: 196, s: 0.8 }, { motif: 'bird', x: 300, y: 80 },
          { motif: 'text', x: 240, y: 150, text: '제자리에 · 차려 · 출발!', size: 22 },
        ]),
        safety: [WARM, '달리는 길(레인)에는 주자만 들어가고, 결승선을 지나도 바로 멈추지 말고 천천히 속도를 줄여요.', STOP],
        stages: stages(
          {
            teacher: '"운동회 달리기에서 기록은 누가, 어떻게 재었을까요?" "선생님이 초시계로요"라는 대답을 받고 "초시계는 언제 누르고 언제 멈출까요?"라고 다시 묻는다. 대답이 엇갈리면 "재는 방법이 사람마다 다르면 기록을 믿을 수 있을까요?"라고 물으며 오늘 할 일을 알린다.',
            student: '초시계를 언제 누르고 언제 멈춰야 하는지 예상해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 역할과 기록 재는 차례 알기', minutes: 11, tool: 'mindmap',
              task: '세 역할이 하는 일을 이어 보고, 기록을 견줄 때 함께 살펴야 할 것을 골라요.',
              teacher: '"계시원은 출발 깃발이 내려가는 것을 보고 초시계를 눌러요. 소리를 들을 때까지 기다리면 늦어요. 멈추는 때는 주자의 몸통(가슴)이 결승선에 닿을 때예요." "기록만 보면 누가 더 잘 달렸는지 다 알 수 있을까요?" 바람·달린 길·출발 방법이 같았는지 함께 봐야 한다는 것을 짚는다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '역할과 그 역할이 하는 일을 이어요.', toolOptions: { mode: 'match', topic: '누가 무엇을', slots: [{ id: 'start', label: '출발 신호원' }, { id: 'time', label: '계시원' }, { id: 'rec', label: '기록원' }], cards: ['"제자리에-차려" 뒤 깃발을 내려요', '깃발을 보고 누르고 몸통이 결승선에 닿으면 멈춰요', '잰 기록을 이름 대신 번호 옆에 적어요'] }, target: { match: { start: '"제자리에-차려" 뒤 깃발을 내려요', time: '깃발을 보고 누르고 몸통이 결승선에 닿으면 멈춰요', rec: '잰 기록을 이름 대신 번호 옆에 적어요' } }, levels: { easy: { state: { at: { '"제자리에-차려" 뒤 깃발을 내려요': 0 } } } }, difficulty: 0.2 },
                { prompt: '계시원이 초시계를 다루는 때와 알맞은 장면을 이어요.', toolOptions: { mode: 'match', topic: '초시계는 언제', slots: [{ id: 'on', label: '누르는 때' }, { id: 'off', label: '멈추는 때' }], cards: ['출발 깃발이 내려가는 것을 볼 때', '주자의 몸통이 결승선에 닿을 때', '출발 소리가 귀에 들릴 때', '주자의 발끝이 결승선을 넘을 때'] }, target: { match: { on: '출발 깃발이 내려가는 것을 볼 때', off: '주자의 몸통이 결승선에 닿을 때' } }, difficulty: 0.3,
                  hints: ['빛은 소리보다 빨리 와요. 결승은 몸의 어느 부분으로 정하는지 떠올려요.', '귀로 들은 때나 발끝을 고른 카드가 있는지 보세요.', '깃발을 볼 때 누르고, 몸통이 결승선에 닿을 때 멈춰요.'] },
                { prompt: '두 사람의 50m 기록을 견줄 때 함께 살펴야 할 것만 골라요.', toolOptions: { mode: 'pick', topic: '기록과 함께 볼 것', basket: '함께 볼 것', cards: ['같은 길이를 달렸나', '같은 방법으로 출발했나', '같은 방법으로 쟀나', '운동화 색깔이 같았나'] }, target: { pick: ['같은 길이를 달렸나', '같은 방법으로 출발했나', '같은 방법으로 쟀나'] }, levels: { challenge: { prompt: '두 사람의 50m 기록을 견줄 때 함께 살펴야 할 것만 골라요. 기록과 상관없는 것이 둘 섞여 있어요.', toolOptions: { cards: ['같은 길이를 달렸나', '같은 방법으로 출발했나', '같은 방법으로 쟀나', '운동화 색깔이 같았나', '누가 더 크게 응원받았나'] } } }, difficulty: 0.25 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 역할을 나누어 50m 기록 재기', minutes: 15, tool: 'timer',
              task: '모둠에서 역할을 나누고 기록 재는 차례대로 50m 달리기를 해요. 역할을 바꾸어 가며 모두 한 번씩 달려요.',
              teacher: '네 명 모둠: 주자 1명, 출발 신호원 1명, 계시원 2명(두 초시계 가운데 느린 기록을 쓴다), 기록원은 계시원 한 명이 겸한다. 기록표에는 이름 대신 번호를 쓴다. 결승선을 지나 10m는 천천히 달리며 멈춘다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '50m 달리기 기록 재는 차례대로 카드를 놓아요.', toolOptions: { cards: ['기록원이 번호 옆에 기록 적기', '"제자리에-차려" 뒤 깃발 내리기', '계시원이 깃발을 보고 초시계 누르기', '몸통이 결승선에 닿으면 초시계 멈추기'] }, target: { order: ['"제자리에-차려" 뒤 깃발 내리기', '계시원이 깃발을 보고 초시계 누르기', '몸통이 결승선에 닿으면 초시계 멈추기', '기록원이 번호 옆에 기록 적기'] }, levels: { easy: { state: { order: ['"제자리에-차려" 뒤 깃발 내리기', '몸통이 결승선에 닿으면 초시계 멈추기', '계시원이 깃발을 보고 초시계 누르기', '기록원이 번호 옆에 기록 적기'] } } }, difficulty: 0.15 },
                { prompt: '역할을 바꾸어 가며 모두 50m를 달려요. 다 하면 ‘짝·모둠과 함께 해 보았어요’를 눌러요.', free: true },
                { prompt: '두 계시원이 잰 내 50m 기록(초)을 적어요.', toolOptions: { fields: [{ label: '계시원 1', unit: '초', step: 0.1 }, { label: '계시원 2', unit: '초', step: 0.1 }] }, target: { records: true }, levels: { challenge: { prompt: '두 계시원이 잰 기록(초)을 적고, 둘 가운데 느린 기록을 공식 기록 칸에 옮겨 적어요.', toolOptions: { fields: [{ label: '계시원 1', unit: '초', step: 0.1 }, { label: '계시원 2', unit: '초', step: 0.1 }, { label: '공식 기록(느린 쪽)', unit: '초', step: 0.1 }] } } }, difficulty: 0.15 },
              ],
            },
          ],
          {
            teacher: '"두 계시원의 기록이 달랐던 모둠?" 손을 든 모둠에게 얼마나 달랐는지, 왜 달랐을지 묻는다. 출구 질문은 미리 풀지 않는다. 기록표는 19·20차시에 쓰니 모둠 바구니에 모은다.',
            exitTicket: [
              { type: 'tool', tool: 'timer', options: { cards: ['도착 기록 적기', '출발 신호 보내기', '몸통이 선에 닿을 때 멈추기', '깃발 보고 초시계 누르기'] }, prompt: '100m 달리기 기록을 잴 때도 같은 차례예요. 차례대로 놓아요.', target: { order: ['출발 신호 보내기', '깃발 보고 초시계 누르기', '몸통이 선에 닿을 때 멈추기', '도착 기록 적기'] }, difficulty: 0.2 },
              { type: 'choice', prompt: '"기록만 보면 누가 더 잘 달렸는지 다 알 수 있다"는 말에 대한 생각으로 알맞은 것은?', options: ['맞아요', '아니에요, 같은 조건에서 재었는지 함께 봐야 해요', '기록은 쓸모없어요'], answer: 1, difficulty: 0.25, explain: '같은 길이·출발·재는 방법이었는지 함께 봐야 공정하게 견줄 수 있어요.' },
              { type: 'mood', prompt: '기록 재는 역할을 해 본 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '50m 기록 재기',
          items: [
            { type: 'table', prompt: '모둠 기록표를 쓰세요. (이름 대신 번호)', columns: ['번호', '계시원 1(초)', '계시원 2(초)', '공식 기록(초)'], rows: 4 },
            { type: 'choice', prompt: '초시계를 멈추는 때에 ○ 하세요.', options: ['발끝이 선을 넘을 때', '몸통이 선에 닿을 때', '주자가 멈출 때'], answer: '몸통이 선에 닿을 때' },
            { type: 'table', prompt: '역할마다 하는 일을 쓰세요.', columns: ['역할', '하는 일'], cells: [['출발 신호원', ''], ['계시원', ''], ['기록원', '']] },
            { type: 'short', prompt: '두 계시원의 기록이 다를 수 있는 까닭을 한 줄로 쓰세요.' },
          ],
          easy: {
            note: '깃발 보고 누르고, 몸통이 선에 닿으면 멈춰요.',
            items: [
              { type: 'choice', prompt: '초시계는 언제 누르나요?', options: ['깃발을 볼 때', '소리를 들을 때'], answer: '깃발을 볼 때' },
              { type: 'choice', prompt: '기록표에는 무엇을 쓰나요?', options: ['번호', '이름'], answer: '번호' },
              { type: 'short', prompt: '오늘 내가 맡은 역할을 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드 일부가 놓여 있고, 짝 카드를 맞는 칸에 놓으면 바로 표시돼요.',
          base: '역할과 재는 차례를 익히고 두 계시원의 기록을 적어요.',
          challenge: '기록과 상관없는 함정 카드가 섞이고, 공식 기록(느린 쪽)을 골라 옮겨 적어요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 기록만 보면 잘한 정도를 다 안다고 여긴다 → 같은 길이·출발·재는 방법인지 함께 보게 한다. ② 계시원이 소리를 듣고 누르거나 발끝으로 멈춘다 → 깃발과 몸통 기준을 시범으로 보인다. ③ 결승선에서 바로 멈춰 넘어진다 → 결승선 뒤 10m는 천천히 달린다. 학생 이름은 기록표에 쓰지 않고 번호를 쓴다.',
      }),
      // ───────────────────────── 18 ─────────────────────────
      L(18, {
        title: '기록을 공정하게 견주는 조건 따져 보기',
        objective: '두 기록을 견줄 수 있는지 조건(길이·출발·재는 방법·날씨)으로 따지고, 조건을 같게 맞추어 다시 잴 수 있다.',
        illustration: art('two children at a paper starting line under a windy sky, a referee checking two measuring tapes side by side for fairness', [
          { motif: 'sun', x: 410, y: 52, s: 0.6 }, { motif: 'cloud', x: 100, y: 52 }, { motif: 'cloud', x: 260, y: 70, s: 0.8 }, { motif: 'hills', y: 220 },
          { motif: 'tree', x: 420, y: 196, s: 0.8 },
          { motif: 'text', x: 240, y: 150, text: '같은 조건에서 견줘요', size: 22 },
        ]),
        safety: [WARM, SPACE, STOP],
        stages: stages(
          {
            teacher: '두 학생 기록을 칠판에 쓴다. "가 모둠 1번 9.2초, 나 모둠 1번 8.8초. 나 모둠 1번이 더 빨리 달렸다고 말할 수 있을까요?" "네!"라는 대답이 나오면 "가 모둠은 맞바람, 나 모둠은 뒷바람이 불었다면요?"라고 묻는다. "오늘은 기록을 견주어도 되는지 따지는 눈을 길러요."',
            student: '두 기록을 바로 견주어도 되는지 생각해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 견줄 수 있는 기록과 없는 기록 가르기', minutes: 12, tool: 'mindmap',
              task: '두 기록이 같은 조건에서 나왔는지 따져, 공정하게 견줄 수 있는 것과 없는 것으로 나누어요.',
              teacher: '"조건이 하나라도 다르면 기록 차이가 실력 때문인지 조건 때문인지 알 수 없어요." 학생이 카드마다 \'무엇이 달랐나\'를 짚게 한다. "같은 사람이 같은 모래밭에서 두 번 뛴 기록은 견줄 수 있을까요?"라고 물어, 내 기록끼리 견주는 것도 같은 조건이 필요하다는 것을 짚는다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '두 기록을 공정하게 견줄 수 있는지 나누어요.', toolOptions: { topic: '견줄 수 있나', slots: ['견줄 수 있어요', '견줄 수 없어요'], cards: ['같은 날 같은 길을 같은 방법으로 쟀어요', '같은 사람이 같은 모래밭에서 두 번 뛰었어요', '한 사람은 40m, 한 사람은 50m를 달렸어요', '한 사람만 세게 부는 뒷바람에 달렸어요'] }, target: { sort: { '견줄 수 있어요': ['같은 날 같은 길을 같은 방법으로 쟀어요', '같은 사람이 같은 모래밭에서 두 번 뛰었어요'], '견줄 수 없어요': ['한 사람은 40m, 한 사람은 50m를 달렸어요', '한 사람만 세게 부는 뒷바람에 달렸어요'] } }, levels: { easy: { state: { at: { '같은 날 같은 길을 같은 방법으로 쟀어요': 0 } } }, challenge: { prompt: '두 기록을 공정하게 견줄 수 있는지 나누어요. 재는 방법이 다른 카드가 더 있어요.', toolOptions: { cards: ['같은 날 같은 길을 같은 방법으로 쟀어요', '같은 사람이 같은 모래밭에서 두 번 뛰었어요', '한 사람은 40m, 한 사람은 50m를 달렸어요', '한 사람만 세게 부는 뒷바람에 달렸어요', '한 사람은 발끝, 한 사람은 발뒤꿈치까지 쟀어요'] }, target: { sort: { '견줄 수 있어요': ['같은 날 같은 길을 같은 방법으로 쟀어요', '같은 사람이 같은 모래밭에서 두 번 뛰었어요'], '견줄 수 없어요': ['한 사람은 40m, 한 사람은 50m를 달렸어요', '한 사람만 세게 부는 뒷바람에 달렸어요', '한 사람은 발끝, 한 사람은 발뒤꿈치까지 쟀어요'] } } } }, difficulty: 0.25,
                  hints: ['길이·출발·재는 방법·바람이 모두 같아야 실력 차이만 남아요.', '두 기록 사이에 다른 조건이 하나라도 있는 카드를 다시 찾아보세요.', '거리가 다르거나, 바람이 한쪽만 불었거나, 재는 자리가 다르면 견줄 수 없어요.'] },
                { prompt: '다른 조건과, 같게 맞추는 방법을 이어요.', toolOptions: { mode: 'match', topic: '이렇게 맞춰요', slots: [{ id: 'dist', label: '달린 거리가 달라요' }, { id: 'start', label: '한 사람만 먼저 출발했어요' }, { id: 'measure', label: '재는 자리가 달라요' }], cards: ['출발선과 결승선을 같은 자리에 다시 그어요', '같은 신호에 함께 다시 출발해요', '가장 가까운 자국까지 재기로 정해요'] }, target: { match: { dist: '출발선과 결승선을 같은 자리에 다시 그어요', start: '같은 신호에 함께 다시 출발해요', measure: '가장 가까운 자국까지 재기로 정해요' } }, difficulty: 0.25 },
                { prompt: '모둠이 제자리멀리뛰기를 재기 전에 미리 정할 조건만 골라요.', toolOptions: { mode: 'pick', topic: '미리 정할 조건', basket: '우리 모둠 약속', cards: ['두 발끝을 둘 출발선 자리', '재는 자국(가장 가까운 자국)', '모두 같은 줄자로 재기', '응원 소리의 크기'] }, target: { pick: ['두 발끝을 둘 출발선 자리', '재는 자국(가장 가까운 자국)', '모두 같은 줄자로 재기'] }, difficulty: 0.2 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 조건을 맞추어 제자리멀리뛰기 다시 재기', minutes: 14, tool: 'emotion',
              task: '기록을 잴 때 생길 수 있는 일을 판단한 뒤, 모둠이 정한 같은 조건으로 제자리멀리뛰기를 두 번 재요.',
              teacher: '모둠은 조건 세 가지를 정해 칠판에 적는다: 출발선(두 발끝이 선 뒤), 재는 자리(가장 가까운 자국), 재는 사람(같은 줄자·같은 기록원). "조건을 정했으면 우리 모둠 모두 똑같이 지켜요." 판단 문항 뒤에 실제로 두 번씩 뛰고 활동지에 적는다.',
              levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '짝이 출발선을 한 발 넘어서 제자리멀리뛰기를 했어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '짝이 출발선을 한 발 넘어선 채 제자리멀리뛰기를 했어요.', choices: [{ id: 'keep', text: '조금이니 그대로 적어요', result: '다른 친구들과 견줄 수 없는 기록이 되었어요.', mood: '걱정', why: '출발선 조건이 달라졌어요.' }, { id: 'redo', text: '두 발끝을 선 뒤에 두고 다시 뛰게 해요', result: '같은 조건의 기록을 적었어요.', mood: '편안함' }, { id: 'sub', text: '넘은 만큼 대충 빼고 적어요', result: '얼마를 빼야 할지 몰라 기록이 엉망이 됐어요.', mood: '걱정', why: '어림으로 빼지 말고 다시 재요.' }] }, target: { choice: 'redo' }, levels: { easy: { toolOptions: { choices: [{ id: 'keep', text: '조금이니 그대로 적어요', result: '다른 친구들과 견줄 수 없는 기록이 되었어요.', mood: '걱정', why: '출발선 조건이 달라졌어요.' }, { id: 'redo', text: '두 발끝을 선 뒤에 두고 다시 뛰게 해요', result: '같은 조건의 기록을 적었어요.', mood: '편안함' }] } } }, difficulty: 0.15 },
                { prompt: '우리 모둠은 줄자로, 옆 모둠은 걸음으로 쟀어요. 두 모둠 기록을 견주려면?', toolOptions: { mode: 'branch', situation: '우리 모둠은 줄자로, 옆 모둠은 걸음 수로 기록을 쟀어요.', choices: [{ id: 'now', text: '그냥 견줘 우승 모둠을 정해요', result: '어느 모둠이 멀리 뛰었는지 알 수 없었어요.', mood: '걱정', why: '재는 방법이 달라요.' }, { id: 'same', text: '두 모둠이 같은 줄자로 다시 재요', result: '공정하게 견줄 수 있었어요.', mood: '편안함' }, { id: 'loud', text: '목소리 큰 모둠이 이긴 걸로 해요', result: '옆 모둠이 속상해했어요.', mood: '속상함', why: '기록은 조건을 맞춰 재요.' }] }, target: { choice: 'same' }, difficulty: 0.2 },
                { prompt: '모둠이 정한 조건으로 제자리멀리뛰기를 두 번씩 재고, 지킨 조건을 서로 말해요. 끝나면 ‘다 했어요’를 눌러요.', free: true, talk: true },
              ],
            },
          ],
          {
            teacher: '"오늘 조건을 맞추니 무엇이 달라졌나요?" 출발선을 넘어 다시 뛴 일, 같은 줄자로 다시 잰 일을 듣는다. 출구 1번은 새 상황이니 스스로 판단하게 한다. 모둠이 정한 조건 세 가지는 다음 시간에도 쓴다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { topic: '이 둘은?', slots: ['견줄 수 있어요', '견줄 수 없어요'], cards: ['둘 다 같은 줄넘기로 30초 쟀어요', '한 사람은 30초, 한 사람은 40초 쟀어요'] }, prompt: '줄넘기 기록 두 쌍을 견줄 수 있는지 나누어요.', target: { sort: { '견줄 수 있어요': ['둘 다 같은 줄넘기로 30초 쟀어요'], '견줄 수 없어요': ['한 사람은 30초, 한 사람은 40초 쟀어요'] } }, difficulty: 0.15 },
              { type: 'choice', prompt: '맞바람에 달린 9.2초와 뒷바람에 달린 8.8초를 견주면?', options: ['8.8초가 언제나 실력이 좋아요', '바람 조건이 달라 실력을 바로 견줄 수 없어요', '두 기록은 같아요'], answer: 1, difficulty: 0.25, explain: '조건이 다르면 기록 차이가 실력 때문인지 알 수 없어요.' },
              { type: 'short', prompt: '우리 모둠이 정한 공정한 조건 하나를 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '공정하게 견주기',
          items: [
            { type: 'table', prompt: '우리 모둠이 정한 조건을 쓰세요.', columns: ['조건', '우리 모둠의 약속'], cells: [['출발선', ''], ['재는 자리', ''], ['재는 도구·사람', '']] },
            { type: 'table', prompt: '같은 조건으로 잰 제자리멀리뛰기 기록을 쓰세요.', columns: ['횟수', '1회', '2회'], cells: [['기록(cm)', '', '']] },
            { type: 'choice', prompt: '두 기록을 견줄 수 없는 것에 ○ 하세요.', options: ['같은 줄자로 잰 두 기록', '한 사람만 뒷바람에 달린 두 기록', '같은 사람이 두 번 뛴 기록'], answer: '한 사람만 뒷바람에 달린 두 기록' },
            { type: 'short', prompt: '조건이 다르면 왜 견줄 수 없는지 한 줄로 쓰세요.' },
          ],
          easy: {
            note: '길이·출발·재는 방법·바람이 같아야 견줄 수 있어요.',
            items: [
              { type: 'choice', prompt: '40m와 50m 기록은?', options: ['견줄 수 있어요', '견줄 수 없어요'], answer: '견줄 수 없어요' },
              { type: 'choice', prompt: '출발선을 넘으면?', options: ['다시 뛰어요', '그대로 적어요'], answer: '다시 뛰어요' },
              { type: 'short', prompt: '오늘 잰 기록 하나를 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 맞는 칸에 놓으면 바로 표시되고, 판단 보기가 둘이에요.',
          base: '견줄 수 있는 기록을 가르고, 다른 조건을 맞추는 방법을 이어요.',
          challenge: '재는 자리가 다른 카드가 더해지고, 판단 결과는 맞힌 뒤에만 보여요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 기록 숫자만 보고 누가 잘했는지 정한다 → 바람·거리·재는 방법이 다른 예로 따지게 한다. ② 조건이 조금 다르면 어림으로 빼고 적는다 → 어림하지 말고 다시 잰다. ③ 모둠마다 재는 방법이 달라 다툰다 → 반 전체가 쓸 조건을 칠판에 정해 둔다. 실제 뛰기는 모둠이 정한 조건대로 하고 교사가 지켜본다.',
      }),
      // ───────────────────────── 19 ─────────────────────────
      L(19, {
        title: '모둠 기록표에서 나와 친구가 잘하는 점 찾기',
        objective: '여러 종목의 기록표를 읽어 시간 기록은 작을수록, 거리·횟수 기록은 클수록 좋다는 것을 가려 나와 친구가 잘하는 점을 나누어 말할 수 있다.',
        illustration: art('two children reading a big paper record table with columns for running time, jump distance and rope count, pointing at different strong points', [
          { motif: 'sun', x: 410, y: 52, s: 0.6 }, { motif: 'cloud', x: 100, y: 50 }, { motif: 'hills', y: 224 },
          { motif: 'star', x: 150, y: 110 }, { motif: 'star', x: 330, y: 110 },
          { motif: 'text', x: 240, y: 160, text: '너는 이것, 나는 저것', size: 22 },
        ]),
        safety: [WARM, ROPE, STOP],
        stages: stages(
          {
            teacher: '칠판에 두 숫자를 쓴다. "50m 달리기 9.6초와 8.9초, 어느 쪽이 더 잘 달린 걸까요?" "9.6이요, 숫자가 크니까요"라는 대답이 나오면 "멀리뛰기 160cm와 175cm라면요?"라고 이어 묻는다. "시간은 짧을수록, 거리와 횟수는 클수록 좋아요. 오늘은 이것을 가려 읽으며 서로의 잘하는 점을 찾아요."',
            student: '50m 기록 9.6초와 8.9초 가운데 더 잘 달린 기록을 골라 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 모둠 기록 그래프 읽기', minutes: 11, tool: 'chart',
              task: '별빛 모둠 네 친구의 기록 그래프를 읽고, 종목마다 가장 잘한 사람을 찾아요.',
              teacher: '"막대가 길수록 언제나 잘한 걸까요?" 50m 그래프에서 가장 긴 막대를 고른 학생에게 단위(초)를 다시 읽게 한다. 기록표에는 이름 대신 번호를 쓴다.',
              levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '별빛 모둠의 50m 달리기 그래프에서 가장 빨리 달린 사람을 골라요.', toolOptions: { type: 'bar', mode: 'read', title: '별빛 모둠 50m 달리기 기록', unit: '초', xLabel: '번호', data: [['1번', 9.6], ['2번', 10.2], ['3번', 8.9], ['4번', 9.3]], question: '가장 빨리 달린 사람은?', choices: ['1번', '2번', '3번', '4번'], why: { 1: '막대가 가장 길다는 것은 시간이 가장 오래 걸렸다는 뜻이에요.' } }, target: { pick: 2 }, difficulty: 0.25,
                  hints: ['시간 기록은 짧게 걸릴수록 빨리 달린 거예요.', '막대가 가장 긴 사람을 골랐다면, 그 사람은 시간이 가장 오래 걸린 거예요.', '막대가 가장 짧은 3번이 8.9초로 가장 빨라요.'] },
                { prompt: '별빛 모둠의 30초 줄넘기 그래프에서 가장 잘한 사람을 골라요.', toolOptions: { type: 'bar', mode: 'read', title: '별빛 모둠 30초 줄넘기 기록', unit: '번', xLabel: '번호', data: [['1번', 55], ['2번', 62], ['3번', 48], ['4번', 51]], question: '가장 많이 넘은 사람은?', choices: ['1번', '2번', '3번', '4번'] }, target: { pick: 1 }, difficulty: 0.15 },
                { prompt: '2번은 50m 기록이 가장 느렸지만 줄넘기는 가장 잘했어요. 4번의 50m 기록은 2번보다 몇 초 빠른지 써요.', toolOptions: { type: 'bar', mode: 'read', title: '별빛 모둠 50m 달리기 기록', unit: '초', xLabel: '번호', data: [['1번', 9.6], ['2번', 10.2], ['3번', 8.9], ['4번', 9.3]], question: '4번은 2번보다 몇 초 빠른가요?' }, target: { value: 0.9 }, difficulty: 0.3,
                  conclude: '한 종목 기록만으로 그 사람을 다 알 수 없어요. 종목마다 잘하는 점이 달라요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 짝과 서로 잘하는 점 나누기', minutes: 15, tool: 'mindmap',
              task: '두 친구의 기록 카드를 보고 누가 더 잘했는지 나눈 뒤, 짝과 실제 기록을 재어 서로 잘하는 점을 말해요.',
              teacher: '"이 카드는 시간인가요, 거리인가요, 횟수인가요?" 카드마다 단위를 먼저 짚게 한다. 짝 활동은 제자리멀리뛰기와 30초 줄넘기를 한 번씩 재어 활동지 표에 적고 "너는 ○○을 잘하고, 나는 ○○을 잘해" 틀로 말한다. 잘하는 점이 없다고 하는 학생에게는 1·2회 사이에 는 기록도 잘하는 점이라고 말해 준다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '준호와 서아의 기록 카드를 누가 더 잘한 것인지 나누어요.', toolOptions: { topic: '누가 더 잘했나', slots: ['준호가 더 잘했어요', '서아가 더 잘했어요'], cards: ['50m: 준호 9.1초, 서아 8.7초', '제자리멀리뛰기: 준호 175cm, 서아 160cm', '30초 줄넘기: 준호 58번, 서아 49번', '왕복 달리기: 준호 12.9초, 서아 12.4초'] }, target: { sort: { '준호가 더 잘했어요': ['제자리멀리뛰기: 준호 175cm, 서아 160cm', '30초 줄넘기: 준호 58번, 서아 49번'], '서아가 더 잘했어요': ['50m: 준호 9.1초, 서아 8.7초', '왕복 달리기: 준호 12.9초, 서아 12.4초'] } }, levels: { easy: { state: { at: { '제자리멀리뛰기: 준호 175cm, 서아 160cm': 0 } } } }, difficulty: 0.3,
                  hints: ['카드마다 단위를 먼저 보세요. 초는 작을수록, cm와 번은 클수록 잘한 거예요.', '시간(초) 카드에서 큰 수를 잘한 것으로 놓지 않았는지 보세요.', '초 카드는 서아가, cm·번 카드는 준호가 더 잘했어요.'] },
                { prompt: '기록을 보고 친구에게 하는 말로 알맞은 것만 골라요.', toolOptions: { mode: 'pick', topic: '기록을 보고 하는 말', basket: '알맞은 말', cards: ['"너는 줄넘기 리듬이 좋구나"', '"나는 달리기, 너는 멀리뛰기를 잘하네"', '"넌 50m가 제일 느리네, 하하"', '"기록이 낮은 종목은 숨기자"'] }, target: { pick: ['"너는 줄넘기 리듬이 좋구나"', '"나는 달리기, 너는 멀리뛰기를 잘하네"'] }, difficulty: 0.15 },
                { prompt: '짝과 제자리멀리뛰기·30초 줄넘기를 재고 서로 잘하는 점을 말해요. 끝나면 ‘다 했어요’를 눌러요.', free: true, talk: true },
              ],
            },
          ],
          {
            teacher: '"서로 잘하는 점이 다른 짝이 많았나요?" 두세 짝의 말을 듣는다. "기록은 비웃거나 숨기는 것이 아니라 나에게 필요한 연습을 찾는 자료예요." 출구 1번은 새 기록이니 단위를 먼저 보고 스스로 판단하게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { topic: '누가 더 잘했나', slots: ['하윤이가 더 잘했어요', '도현이가 더 잘했어요'], cards: ['100m: 하윤 17.2초, 도현 18.0초', '공 멀리 던지기: 하윤 18m, 도현 24m'] }, prompt: '새 기록 카드 두 장을 누가 더 잘한 것인지 나누어요.', target: { sort: { '하윤이가 더 잘했어요': ['100m: 하윤 17.2초, 도현 18.0초'], '도현이가 더 잘했어요': ['공 멀리 던지기: 하윤 18m, 도현 24m'] } }, difficulty: 0.25 },
              { type: 'choice', prompt: '시간으로 재는 기록은 어떤 기록이 더 좋은가요?', options: ['수가 큰 기록', '수가 작은 기록', '똑같아요'], answer: 1, difficulty: 0.2, explain: '시간 기록은 짧게 걸릴수록 잘한 거예요.' },
              { type: 'short', prompt: '짝이 잘하는 점과 내가 잘하는 점을 하나씩 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '서로 잘하는 점 표',
          items: [
            { type: 'table', prompt: '짝과 잰 기록을 쓰고 더 잘한 사람에 ○ 하세요.', columns: ['종목', '나', '짝', '더 잘한 사람'], cells: [['제자리멀리뛰기(cm)', '', '', ''], ['30초 줄넘기(번)', '', '', '']] },
            { type: 'choice', prompt: '50m 기록 9.3초와 8.9초 가운데 더 빠른 기록에 ○ 하세요.', options: ['9.3초', '8.9초'], answer: '8.9초' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '시간 기록은 ___수록, 거리·횟수 기록은 ___수록 잘한 거예요.', answer: '작을, 클' },
            { type: 'short', prompt: '"너는 ○○을 잘하고, 나는 ○○을 잘해" 틀로 짝과 나를 쓰세요.' },
          ],
          easy: {
            note: '초 = 작을수록 좋아요. cm·번 = 클수록 좋아요.',
            items: [
              { type: 'choice', prompt: '더 빨리 달린 기록은?', options: ['10.2초', '9.6초'], answer: '9.6초' },
              { type: 'choice', prompt: '더 멀리 뛴 기록은?', options: ['160cm', '175cm'], answer: '175cm' },
              { type: 'short', prompt: '내가 잘하는 종목 하나를 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '그래프에 값이 보이고, 카드를 맞는 칸에 놓으면 바로 표시돼요.',
          base: '단위를 가려 그래프와 기록 카드를 읽고 서로 잘하는 점을 찾아요.',
          challenge: '그래프 값은 맞힌 뒤에만 보여요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 시간 기록도 큰 수가 좋다고 여긴다 → 단위를 먼저 읽게 하고 "짧게 걸릴수록 빠르다"를 함께 말한다. ② 한 종목 기록만 보고 그 사람을 다 안다고 여긴다 → 2번처럼 종목마다 잘하는 점이 다른 자료를 보인다. ③ 낮은 기록을 놀리거나 숨긴다 → 기록은 연습을 찾는 자료라고 말하고, 기록표에는 이름 대신 번호를 쓴다.',
      }),
      // ───────────────────────── 20 ─────────────────────────
      L(20, {
        title: '역할을 나누어 기록 재고 표와 그래프로 옮기기',
        objective: '모둠에서 역할을 나누어 30초 줄넘기 기록을 재고, 기록 쪽지를 표에 정확히 옮겨 막대그래프로 나타낼 수 있다.',
        illustration: art('a small team with a counter, a timekeeper and a recorder around a child jumping rope, a paper table turning into a bar graph', [
          { motif: 'sun', x: 410, y: 52, s: 0.6 }, { motif: 'cloud', x: 90, y: 50 }, { motif: 'hills', y: 224 },
          { motif: 'star', x: 120, y: 110 }, { motif: 'flower', x: 400, y: 224 },
          { motif: 'text', x: 240, y: 150, text: '재고 · 적고 · 그려요', size: 22 },
        ]),
        safety: [WARM, ROPE, STOP],
        stages: stages(
          {
            teacher: '"지난 시간에 기록 숫자를 잘못 옮겨 적으면 어떻게 될까요?" 대답을 듣고, 일부러 쪽지의 52를 표에 25로 적은 예를 보여 준다. "한 번 잘못 옮기면 그래프도, 다음 계획도 틀려요. 오늘은 역할을 나누어 재고, 쪽지를 표에 정확히 옮겨 그래프까지 만들어요."',
            student: '쪽지의 52가 표에 25로 적히면 무엇이 달라지는지 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 역할 돌아가며 30초 줄넘기 재기', minutes: 14, tool: 'timer',
              task: '네 명이 뛰는 사람·세는 사람·시간 재는 사람·적는 사람을 돌아가며 맡아 30초 줄넘기를 재고, 쪽지의 기록을 표에 옮겨요.',
              teacher: '"세는 사람은 줄이 발 밑을 지날 때마다 소리 내지 않고 손가락을 접으며 세요. 시간 재는 사람은 \'시작\'과 \'그만\'을 크게 말해요. 적는 사람은 세는 사람이 말한 수를 쪽지에 적고, 둘이 함께 다시 읽어 확인해요." 역할은 한 판마다 시계 방향으로 바꾼다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '한 판에서 역할마다 할 일을 차례대로 놓아요.', toolOptions: { cards: ['적는 사람이 쪽지에 쓰고 함께 다시 읽기', '시간 재는 사람이 "시작" 외치기', '세는 사람이 넘은 횟수 세기', '시간 재는 사람이 "그만" 외치기'] }, target: { order: ['시간 재는 사람이 "시작" 외치기', '세는 사람이 넘은 횟수 세기', '시간 재는 사람이 "그만" 외치기', '적는 사람이 쪽지에 쓰고 함께 다시 읽기'] }, levels: { easy: { state: { order: ['시간 재는 사람이 "시작" 외치기', '시간 재는 사람이 "그만" 외치기', '세는 사람이 넘은 횟수 세기', '적는 사람이 쪽지에 쓰고 함께 다시 읽기'] } } }, difficulty: 0.15 },
                { prompt: '모둠이 역할을 돌아가며 30초 줄넘기를 재요. 다 하면 ‘짝·모둠과 함께 해 보았어요’를 눌러요.', free: true },
                { prompt: '적는 사람의 쪽지예요. "1번 52, 2번 47, 3번 60, 4번 39" 표 칸에 그대로 옮겨 적어요.', toolOptions: { fields: [{ label: '1번', unit: '번' }, { label: '2번', unit: '번' }, { label: '3번', unit: '번' }, { label: '4번', unit: '번' }] }, target: { records: [52, 47, 60, 39] }, levels: { easy: { prompt: '쪽지의 "1번 52, 2번 47" 기록을 표 칸에 그대로 옮겨 적어요.', toolOptions: { fields: [{ label: '1번', unit: '번' }, { label: '2번', unit: '번' }] }, target: { records: [52, 47] } } }, difficulty: 0.2 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 모둠 기록표를 막대그래프로', minutes: 12, tool: 'chart',
              task: '모둠 기록표를 막대그래프로 나타내고, 그래프를 읽어 서로의 기록을 견주어요.',
              teacher: '"표의 수와 막대 높이가 같은지 한 칸씩 손가락으로 짚어 보세요." 막대그래프로 나타내면 누가 많이 넘었는지 한눈에 보이지만, 같은 조건(같은 줄·30초)에서 잰 기록끼리만 견준다는 것을 다시 말한다.',
              levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '쪽지에서 옮긴 기록표를 보고 막대그래프를 완성해요.', toolOptions: { type: 'bar', title: '해님 모둠 30초 줄넘기', unit: '번', xLabel: '번호', yLabel: '넘은 횟수', data: [['1번', 52], ['2번', 47], ['3번', 60], ['4번', 39]], scale: 10, step: 1 }, target: { build: true }, levels: { easy: { toolOptions: { given: [0, 1] } } }, difficulty: 0.25 },
                { prompt: '해님 모둠 그래프에서 3번과 4번의 차이는 몇 번인지 써요.', toolOptions: { type: 'bar', mode: 'read', title: '해님 모둠 30초 줄넘기', unit: '번', xLabel: '번호', data: [['1번', 52], ['2번', 47], ['3번', 60], ['4번', 39]], question: '3번은 4번보다 몇 번 더 넘었나요?' }, target: { value: 21 }, difficulty: 0.2 },
                { prompt: '해님 모둠 그래프에서 50번보다 많이 넘은 사람은 몇 명인지 써요.', toolOptions: { type: 'bar', mode: 'read', title: '해님 모둠 30초 줄넘기', unit: '번', xLabel: '번호', data: [['1번', 52], ['2번', 47], ['3번', 60], ['4번', 39]], question: '50번보다 많이 넘은 사람은 몇 명인가요?' }, target: { value: 2 }, difficulty: 0.2 },
              ],
            },
          ],
          {
            teacher: '"쪽지와 표가 달랐던 모둠이 있었나요? 어떻게 바로잡았나요?" 함께 다시 읽기로 실수를 찾은 경험을 듣는다. 우리 모둠 기록은 활동지 그래프로 옮긴다. 이 기록표는 다음 시간에 방법을 고르는 데 쓴다.',
            exitTicket: [
              { type: 'tool', tool: 'timer', options: { fields: [{ label: '1번', unit: 'cm', step: 1 }, { label: '2번', unit: 'cm', step: 1 }, { label: '3번', unit: 'cm', step: 1 }] }, prompt: '멀리뛰기 쪽지 "1번 148, 2번 163, 3번 155"를 칸에 그대로 옮겨 적어요.', target: { records: [148, 163, 155] }, difficulty: 0.2 },
              { type: 'choice', prompt: '기록을 옮겨 적을 때 실수를 줄이는 방법은?', options: ['혼자 빨리 적기', '적은 뒤 세는 사람과 함께 다시 읽기', '어림해서 적기'], answer: 1, difficulty: 0.15, explain: '두 사람이 함께 다시 읽으면 잘못 옮긴 수를 바로 찾을 수 있어요.' },
              { type: 'mood', prompt: '역할을 나누어 기록을 재 본 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '모둠 기록표와 그래프',
          items: [
            { type: 'table', prompt: '우리 모둠 30초 줄넘기 기록을 쓰세요. (이름 대신 번호)', columns: ['번호', '1번', '2번', '3번', '4번'], cells: [['넘은 횟수', '', '', '', '']] },
            { type: 'draw', prompt: '우리 모둠 기록을 막대그래프로 그리세요.' },
            { type: 'table', prompt: '내가 맡은 역할을 쓰세요.', columns: ['판', '내 역할'], cells: [['1판', ''], ['2판', ''], ['3판', ''], ['4판', '']] },
            { type: 'short', prompt: '기록을 정확하게 옮기려고 우리 모둠이 한 일을 쓰세요.' },
          ],
          easy: {
            note: '세고 → 적고 → 함께 다시 읽어요.',
            items: [
              { type: 'choice', prompt: '"그만"은 누가 외치나요?', options: ['시간 재는 사람', '뛰는 사람'], answer: '시간 재는 사람' },
              { type: 'short', prompt: '내 30초 줄넘기 기록을 쓰세요.' },
              { type: 'short', prompt: '오늘 맡은 역할 하나를 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '쪽지 두 칸만 옮기고, 그래프의 두 막대가 미리 그려져 있으며 값이 보여요.',
          base: '역할을 돌아가며 기록을 재고, 표와 그래프로 옮겨 읽어요.',
          challenge: '그래프 값은 맞힌 뒤에만 보여요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 쪽지 기록을 잘못 옮긴다(52→25) → 적은 뒤 세는 사람과 함께 다시 읽게 한다. ② 세는 사람이 소리 내어 세다가 뛰는 사람이 리듬을 잃는다 → 손가락을 접으며 조용히 센다. ③ 줄넘기 둘레가 좁아 줄에 맞는다 → 모둠끼리 줄 길이보다 멀리 떨어진다. 기록표에는 이름 대신 번호를 쓴다.',
      }),
      // ───────────────────────── 21 ─────────────────────────
      L(21, {
        title: '기록 자료를 보고 오래달리기 방법 골라 써 보기',
        objective: '기록 자료를 근거로 오래달리기·멀리뛰기에서 쓸 방법을 고르고, 고른 방법을 실제 달리기에 적용할 수 있다.',
        illustration: art('children running laps around a paper track at an even pace, small flags marking every quarter lap and a coach with a pace card', [
          { motif: 'sun', x: 410, y: 52, s: 0.7 }, { motif: 'cloud', x: 100, y: 52 }, { motif: 'hills', y: 222 },
          { motif: 'tree', x: 60, y: 198, s: 0.8 }, { motif: 'tree', x: 420, y: 198, s: 0.8 },
          { motif: 'text', x: 240, y: 140, text: '고른 빠르기로!', size: 24 },
        ]),
        safety: [WARM, '오래달리기는 바깥 줄에서 앞지르고, 숨이 너무 차면 걷기로 바꿔도 돼요.', STOP],
        stages: stages(
          {
            teacher: '"경기 계획은 축구나 농구 같은 팀 경기에서만 세울까요?" 대부분 "네"라고 하면 "혼자 달리는 오래달리기에도 계획이 있을까요?"라고 다시 묻는다. 마라톤 선수가 처음부터 전력으로 달리지 않는 까닭을 짧게 듣고 "오늘은 기록 자료로 방법을 골라 직접 써 봐요"라고 알린다.',
            student: '혼자 달리는 경기에도 계획이 필요할지 생각해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 기록 자료로 더 좋은 방법 고르기', minutes: 9, tool: 'chart',
              task: '두 방법으로 해 본 친구들의 기록 그래프를 읽고, 기록에 더 도움이 된 방법을 골라요.',
              teacher: '"처음부터 전력으로 달린 기록과 고른 빠르기로 달린 기록, 어느 쪽이 더 짧은가요?" 시간 기록은 짧을수록 좋다는 것을 19차시처럼 짚는다. 그래프가 한 사람의 두 기록인지, 여러 사람의 평균인지도 제목에서 읽게 한다.',
              levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '두 방법으로 600m를 달린 반 친구들의 평균 기록이에요. 기록이 더 좋은 방법을 골라요.', toolOptions: { type: 'bar', mode: 'read', title: '600m 오래달리기 평균 기록(우리 반)', unit: '초', xLabel: '방법', data: [['처음부터 전력', 215], ['고른 빠르기', 198]], question: '기록이 더 좋은 방법은?', choices: ['처음부터 전력', '고른 빠르기'] }, target: { pick: 1 }, difficulty: 0.2 },
                { prompt: '처음부터 전력으로 달린 준서의 바퀴별 기록이에요. 가장 느려진 바퀴를 골라요.', toolOptions: { type: 'line', mode: 'read', title: '준서의 150m 바퀴별 기록(처음부터 전력)', unit: '초', xLabel: '바퀴', data: [['1바퀴', 38], ['2바퀴', 50], ['3바퀴', 60], ['4바퀴', 67]], from: 30, question: '가장 느린 바퀴는?', choices: ['1바퀴', '2바퀴', '3바퀴', '4바퀴'] }, target: { pick: 3 }, difficulty: 0.25,
                  conclude: '처음에 힘을 다 쓰면 뒤로 갈수록 느려져요. 그래서 혼자 달리는 경기에도 계획이 필요해요.' },
                { prompt: '팔치기를 하고 뛴 제자리멀리뛰기와 하지 않고 뛴 기록이에요. 더 멀리 뛴 방법을 골라요.', toolOptions: { type: 'bar', mode: 'read', title: '제자리멀리뛰기 평균(우리 반)', unit: 'cm', xLabel: '방법', data: [['팔치기 없이', 148], ['팔을 뒤에서 앞으로 치며', 162]], question: '더 멀리 뛴 방법은?', choices: ['팔치기 없이', '팔을 뒤에서 앞으로 치며'] }, target: { pick: 1 }, difficulty: 0.2 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 자료를 근거로 다음 경기 방법 정하기', minutes: 7, tool: 'emotion',
              task: '친구들의 말 가운데 자료를 근거로 방법을 정한 것을 골라요.',
              teacher: '"\'느낌상 이게 나아\'와 \'기록표를 보니 이게 13초 빨랐어\'는 무엇이 다를까요?" 근거가 있는 선택을 짚는다. 오래달리기에서는 앞사람을 따라 무리하게 빨라지는 것을 조심하게 한다.',
              levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '오늘 오래달리기를 어떻게 달릴지 정해요. 가장 알맞은 생각은?', toolOptions: { mode: 'branch', situation: '오늘 600m 오래달리기를 해요. 어떻게 달릴지 정해요.', choices: [{ id: 'fast', text: '처음부터 힘껏 달려 앞서 나가요', result: '세 바퀴째부터 걸었어요.', mood: '속상함', why: '자료를 보면 처음에 힘을 다 쓰면 느려져요.' }, { id: 'even', text: '기록표대로 바퀴마다 고른 빠르기로 달려요', result: '마지막 바퀴까지 힘이 남았어요.', mood: '뿌듯함' }, { id: 'follow', text: '가장 빠른 친구를 끝까지 따라가요', result: '숨이 너무 차서 멈췄어요.', mood: '걱정', why: '내 빠르기에 맞는 계획이 필요해요.' }] }, target: { choice: 'even' }, levels: { easy: { toolOptions: { choices: [{ id: 'fast', text: '처음부터 힘껏 달려 앞서 나가요', result: '세 바퀴째부터 걸었어요.', mood: '속상함', why: '자료를 보면 처음에 힘을 다 쓰면 느려져요.' }, { id: 'even', text: '기록표대로 바퀴마다 고른 빠르기로 달려요', result: '마지막 바퀴까지 힘이 남았어요.', mood: '뿌듯함' }] } } }, difficulty: 0.15 },
                { prompt: '친구가 "계획은 축구 같은 팀 경기에서만 세우는 거야"라고 해요. 무엇이라고 답할까요?', toolOptions: { mode: 'branch', situation: '친구가 "계획은 축구 같은 팀 경기에서만 세우는 거야"라고 해요.', choices: [{ id: 'yes', text: '"맞아, 혼자 하는 건 그냥 하면 돼"', result: '친구가 오래달리기에서 또 처음에 힘을 다 썼어요.', mood: '걱정', why: '혼자 하는 기록형 경기도 계획이 기록을 바꿔요.' }, { id: 'no', text: '"기록형도 빠르기·출발 방법을 계획하면 기록이 좋아져"', result: '친구가 바퀴마다 빠르기를 정해 달렸어요.', mood: '뿌듯함' }, { id: 'skip', text: '"계획은 선생님만 세우는 거야"', result: '친구가 스스로 방법을 고르지 않았어요.', mood: '걱정', why: '내 기록 자료로 내가 고를 수 있어요.' }] }, target: { choice: 'no' }, difficulty: 0.2 },
                { prompt: '줄넘기 방법 기록: 두 발 모아 뛰기 48번, 발 바꿔 뛰기 56번. 나는 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '내 30초 줄넘기 기록: 두 발 모아 뛰기 48번, 발 바꿔 뛰기 56번이에요.', choices: [{ id: 'feel', text: '두 발 모아 뛰기가 더 멋져 보여서 그걸로 해요', result: '기록이 그대로였어요.', mood: '속상함', why: '느낌보다 기록 자료를 근거로 골라요.' }, { id: 'data', text: '기록이 많은 발 바꿔 뛰기로 해요', result: '대회에서 55번을 넘었어요.', mood: '신남' }] }, target: { choice: 'data' }, difficulty: 0.15 },
              ],
            },
            {
              id: 'a3', title: '활동 3. 고른 빠르기로 오래달리기 해 보기', minutes: 10, tool: 'timer',
              task: '바퀴마다 같은 빠르기로 달리는 계획을 타이머에 맞추고, 150m 트랙 네 바퀴를 고른 빠르기로 달려요.',
              teacher: '트랙 네 귀퉁이에 콘을 세우고, 한 바퀴 50초를 목표로 정한 학생은 타이머 신호(50초마다)에 맞춰 출발선을 지나도록 달린다. "신호보다 너무 일찍 오면 빠르기를 줄이고, 늦으면 조금 올려요." 걷기로 바꿔도 되며, 끝나면 2분 걷기로 숨을 고른다.',
              levels: { easy: { showTotal: true }, base: {}, challenge: {} },
              items: [
                { prompt: '한 바퀴 50초씩, 쉬지 않고 4바퀴를 달리는 신호에 맞게 타이머를 맞춰요. 쉬는 시간은 0초예요.', toolOptions: { plan: { work: 40, rest: 10, rounds: 2 }, restStep: 5 }, target: { plan: { work: 50, rest: 0, rounds: 4 } }, levels: { challenge: { prompt: '바퀴마다 같은 시간, 쉬지 않고 4바퀴를 달려 전체 3분 20초가 되게 맞춰요.', target: { plan: { rest: 0, rounds: 4 }, total: 200 } } }, difficulty: 0.25 },
                { prompt: '타이머 신호에 맞춰 고른 빠르기로 네 바퀴를 달려요. 다 하면 ‘짝·모둠과 함께 해 보았어요’를 눌러요.', free: true },
                { prompt: '짝이 잰 바퀴별 기록(초)을 적어요.', toolOptions: { fields: [{ label: '1바퀴', unit: '초' }, { label: '2바퀴', unit: '초' }, { label: '3바퀴', unit: '초' }, { label: '4바퀴', unit: '초' }] }, target: { records: true }, levels: { easy: { prompt: '짝이 잰 바퀴별 기록(초)을 세 칸 이상 적어요.', target: { records: 3 } } }, difficulty: 0.15 },
              ],
            },
          ],
          {
            teacher: '"오늘 바퀴별 기록이 고르게 나왔나요? 어느 바퀴에서 빨라지거나 느려졌나요?" 두세 명의 기록을 듣는다. 이 기록은 다음 시간에 고른 방법이 도움이 되었는지 따질 자료이니 활동지에 꼭 옮겨 적게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '50m 출발 방법별 평균 기록(우리 반)', unit: '초', xLabel: '출발 방법', data: [['서서 출발', 9.8], ['몸을 숙여 출발', 9.5]], question: '기록이 더 좋은 출발 방법은?', choices: ['서서 출발', '몸을 숙여 출발'] }, prompt: '새 자료를 읽고 기록이 더 좋은 출발 방법을 골라요.', target: { pick: 1 }, difficulty: 0.2 },
              { type: 'choice', prompt: '경기 계획에 대한 생각으로 알맞은 것은?', options: ['팀 경기에서만 세워요', '기록형 경기에서도 자료로 방법을 골라요', '계획은 필요 없어요'], answer: 1, difficulty: 0.2, explain: '혼자 하는 기록형 경기도 빠르기·출발·동작 방법을 자료로 고르면 기록이 좋아져요.' },
              { type: 'short', prompt: '다음 경기에서 쓸 방법 하나와 그 근거가 된 자료를 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '자료로 고른 방법',
          items: [
            { type: 'table', prompt: '오늘 오래달리기 바퀴별 기록을 쓰세요.', columns: ['바퀴', '1', '2', '3', '4'], cells: [['기록(초)', '', '', '', '']] },
            { type: 'choice', prompt: '처음부터 전력으로 달리면 생기기 쉬운 일에 ○ 하세요.', options: ['뒤로 갈수록 느려져요', '끝까지 빨라져요', '기록이 똑같아요'], answer: '뒤로 갈수록 느려져요' },
            { type: 'table', prompt: '내가 고른 방법과 근거 자료를 쓰세요.', columns: ['종목', '고른 방법', '근거 자료'], rows: 2 },
            { type: 'short', prompt: '혼자 하는 경기에도 계획이 필요한 까닭을 한 줄로 쓰세요.' },
          ],
          easy: {
            note: '처음에 힘을 다 쓰지 말고, 바퀴마다 고르게!',
            items: [
              { type: 'choice', prompt: '오래달리기에서 좋은 방법은?', options: ['고른 빠르기', '처음부터 전력'], answer: '고른 빠르기' },
              { type: 'short', prompt: '오늘 가장 빨랐던 바퀴를 쓰세요.' },
              { type: 'short', prompt: '다음에 쓸 방법 하나를 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '그래프에 값이 보이고 판단 보기가 둘이며, 기록은 세 칸만 적어도 돼요.',
          base: '자료를 읽어 방법을 고르고, 고른 빠르기로 달려 바퀴별 기록을 적어요.',
          challenge: '그래프 값과 판단 결과는 맞힌 뒤에만 보이고, 전체 시간을 셈해 타이머를 맞춰요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 경기 계획은 팀 경기에서만 세운다고 여긴다 → 오래달리기 바퀴별 기록으로 혼자 하는 경기의 계획을 보인다. ② 느낌으로 방법을 고른다 → "어떤 기록이 근거인가요?"를 묻는다. ③ 앞사람을 따라 무리하게 빨라진다 → 걷기로 바꿔도 된다고 미리 말하고, 숨이 너무 찬 학생은 바로 쉬게 한다. 실제 달리기는 교사가 트랙 안쪽에서 관찰한다.',
      }),
      // ───────────────────────── 22 ─────────────────────────
      L(22, {
        title: '고른 방법이 기록에 도움이 되었는지 자료로 따지기',
        objective: '방법을 쓰기 전과 뒤의 기록을 견주어 고른 방법이 도움이 되었는지 판단하고, 판단에 맞게 방법을 계속 쓸지 바꿀지 정할 수 있다.',
        illustration: art('a child comparing two paper ribbons of lap times before and after, with a balance scale weighing keep or change cards', [
          { motif: 'sun', x: 410, y: 52, s: 0.6 }, { motif: 'cloud', x: 100, y: 52 }, { motif: 'hills', y: 222 },
          { motif: 'leaf', x: 120, y: 190 }, { motif: 'star', x: 360, y: 120 },
          { motif: 'text', x: 240, y: 140, text: '전과 뒤를 견줘요', size: 22 },
        ]),
        safety: [WARM, ROPE, STOP],
        stages: stages(
          {
            teacher: '"21차시에 고른 방법을 써 보았어요. 그 방법이 정말 도움이 되었는지 어떻게 알 수 있을까요?" "기록이 좋아졌으면요"라는 대답을 받아 "무엇과 견주어서요?"라고 묻는다. "쓰기 전 기록과 쓴 뒤 기록, 같은 조건에서 잰 두 기록을 견줘요."',
            student: '방법이 도움이 되었는지 알려면 무엇과 무엇을 견주어야 할지 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 전과 뒤 기록 그래프로 판단하기', minutes: 11, tool: 'chart',
              task: '친구들이 방법을 쓰기 전과 뒤의 기록 그래프를 읽고, 그 방법이 도움이 되었는지 판단해요.',
              teacher: '"오래달리기는 시간이니 줄었으면 도움이 된 거예요. 줄넘기는 횟수이니 늘었으면 도움이에요." 단위를 먼저 읽게 한다. 차이가 아주 작을 때(1~2번)는 한 번 더 재어 보아야 한다는 것도 짚는다.',
              levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '민서가 고른 빠르기로 달리기 전과 뒤의 600m 기록이에요. 방법이 도움이 되었나요?', toolOptions: { type: 'bar', mode: 'read', title: '민서의 600m 오래달리기', unit: '초', xLabel: '때', data: [['방법 쓰기 전', 224], ['고른 빠르기로', 205]], question: '방법이 도움이 되었나요?', choices: ['도움이 되었어요', '도움이 되지 않았어요'] }, target: { pick: 0 }, difficulty: 0.2 },
                { prompt: '태민이가 발 바꿔 뛰기로 바꾸기 전과 뒤의 30초 줄넘기 기록이에요. 방법이 도움이 되었나요?', toolOptions: { type: 'bar', mode: 'read', title: '태민이의 30초 줄넘기', unit: '번', xLabel: '때', data: [['두 발 모아', 51], ['발 바꿔', 44]], question: '방법이 도움이 되었나요?', choices: ['도움이 되었어요', '도움이 되지 않았어요'] }, target: { pick: 1 }, difficulty: 0.2,
                  conclude: '방법은 사람마다 맞는 것이 달라요. 기록이 나빠졌다면 다른 방법을 찾아요.' },
                { prompt: '민서의 기록은 방법을 쓴 뒤 몇 초 줄었는지 써요.', toolOptions: { type: 'bar', mode: 'read', title: '민서의 600m 오래달리기', unit: '초', xLabel: '때', data: [['방법 쓰기 전', 224], ['고른 빠르기로', 205]], question: '몇 초 줄었나요?' }, target: { value: 19 }, difficulty: 0.2 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 계속 쓸까, 바꿀까 정하고 다시 재기', minutes: 15, tool: 'emotion',
              task: '자료를 보고 방법을 계속 쓸지 바꿀지 정한 뒤, 내가 정한 방법으로 30초 줄넘기를 다시 재어 활동지에 적어요.',
              teacher: '"기록이 나빠졌는데도 \'한 번 정했으니 끝까지\'라고 하면 어떻게 될까요?" 반대로 기록이 좋아졌는데 이유 없이 바꾸는 것도 짚는다. 판단 뒤에는 정한 방법으로 30초 줄넘기를 한 번 재어 활동지에 적고 짝과 판단을 말한다.',
              levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '태민이는 발 바꿔 뛰기로 바꾼 뒤 기록이 7번 줄었어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '태민이는 발 바꿔 뛰기로 바꾼 뒤 30초 줄넘기가 51번에서 44번으로 줄었어요.', choices: [{ id: 'keep', text: '한 번 정했으니 끝까지 발 바꿔 뛰기로 해요', result: '대회에서도 기록이 낮았어요.', mood: '속상함', why: '도움이 안 되면 바꿀 수 있어요.' }, { id: 'back', text: '기록이 좋았던 두 발 모아 뛰기로 돌아가요', result: '다시 50번을 넘었어요.', mood: '뿌듯함' }, { id: 'quit', text: '줄넘기는 나랑 안 맞으니 그만해요', result: '연습 기회를 놓쳤어요.', mood: '걱정', why: '방법을 바꾸면 돼요.' }] }, target: { choice: 'back' }, levels: { easy: { toolOptions: { choices: [{ id: 'keep', text: '한 번 정했으니 끝까지 발 바꿔 뛰기로 해요', result: '대회에서도 기록이 낮았어요.', mood: '속상함', why: '도움이 안 되면 바꿀 수 있어요.' }, { id: 'back', text: '기록이 좋았던 두 발 모아 뛰기로 돌아가요', result: '다시 50번을 넘었어요.', mood: '뿌듯함' }] } } }, difficulty: 0.15 },
                { prompt: '민서는 고른 빠르기로 19초 빨라졌어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '민서는 고른 빠르기로 달려 600m 기록이 19초 빨라졌어요.', choices: [{ id: 'keep', text: '도움이 되었으니 다음에도 고른 빠르기로 달려요', result: '다음 기록도 비슷하게 좋았어요.', mood: '뿌듯함' }, { id: 'change', text: '새로운 걸 해 보고 싶어 처음부터 전력으로 바꿔요', result: '기록이 다시 느려졌어요.', mood: '속상함', why: '근거 없이 바꾸면 기록이 흔들려요.' }, { id: 'none', text: '기록은 상관없으니 아무렇게나 달려요', result: '무엇이 도움이 되는지 알 수 없었어요.', mood: '걱정', why: '자료로 판단해야 다음에 쓸 수 있어요.' }] }, target: { choice: 'keep' }, difficulty: 0.2 },
                { prompt: '하윤이는 출발 방법을 바꾸었더니 50m가 9.6초에서 9.5초가 되었어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '하윤이는 출발 방법을 바꾸었더니 50m가 9.6초에서 9.5초가 되었어요.', choices: [{ id: 'sure', text: '0.1초 빨라졌으니 확실히 좋은 방법이에요', result: '다음 기록은 9.7초였어요.', mood: '놀람', why: '차이가 아주 작으면 한 번으로 판단하기 어려워요.' }, { id: 'more', text: '차이가 작으니 같은 조건으로 몇 번 더 재 보고 정해요', result: '세 번을 견주어 맞는 방법을 찾았어요.', mood: '편안함' }, { id: 'drop', text: '바로 원래 방법으로 돌아가요', result: '더 나은 방법인지 알 수 없었어요.', mood: '걱정', why: '자료가 모자라면 더 재 봐요.' }] }, target: { choice: 'more' }, difficulty: 0.3 },
              ],
            },
          ],
          {
            teacher: '"오늘 계속 쓰기로 한 친구, 바꾸기로 한 친구 모두 근거가 있었나요?" 두세 명의 판단과 근거를 듣는다. 출구 1번은 새 자료이니 단위를 먼저 읽고 스스로 판단하게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '지우의 제자리멀리뛰기', unit: 'cm', xLabel: '때', data: [['팔치기 없이', 152], ['팔치기 하며', 149]], question: '팔치기가 지우에게 도움이 되었나요?', choices: ['도움이 되었어요', '도움이 되지 않았어요'] }, prompt: '지우의 기록을 읽고 방법이 도움이 되었는지 골라요.', target: { pick: 1 }, difficulty: 0.25 },
              { type: 'choice', prompt: '고른 방법을 쓴 뒤 기록이 나빠졌을 때 알맞은 생각은?', options: ['한 번 정한 방법은 끝까지 지켜요', '자료를 보고 다른 방법으로 바꿀 수 있어요', '기록 재기를 그만둬요'], answer: 1, difficulty: 0.2, explain: '자료로 판단해 도움이 안 되면 다른 방법을 골라요.' },
              { type: 'short', prompt: '내가 계속 쓸 방법(또는 바꿀 방법)과 그 근거를 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '계속 쓸까, 바꿀까',
          items: [
            { type: 'table', prompt: '내 방법을 쓰기 전과 뒤 기록을 쓰세요.', columns: ['종목', '방법', '쓰기 전', '쓴 뒤', '도움이 되었나요?'], rows: 2 },
            { type: 'choice', prompt: '600m 기록이 224초에서 205초가 되었다면?', options: ['도움이 되었어요', '도움이 되지 않았어요'], answer: '도움이 되었어요' },
            { type: 'table', prompt: '오늘 정한 방법으로 다시 잰 30초 줄넘기 기록을 쓰세요.', columns: ['정한 방법', '기록(번)'], rows: 1 },
            { type: 'short', prompt: '계속 쓸지 바꿀지 정한 것과 그 근거를 쓰세요.' },
          ],
          easy: {
            note: '시간은 줄면 도움, 거리·횟수는 늘면 도움.',
            items: [
              { type: 'choice', prompt: '줄넘기 51번 → 44번이면?', options: ['도움이 되었어요', '도움이 되지 않았어요'], answer: '도움이 되지 않았어요' },
              { type: 'choice', prompt: '도움이 안 된 방법은?', options: ['바꿀 수 있어요', '끝까지 써요'], answer: '바꿀 수 있어요' },
              { type: 'short', prompt: '오늘 다시 잰 기록을 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '그래프에 값이 보이고, 판단 보기가 둘이에요.',
          base: '단위를 가려 전과 뒤 기록을 견주고, 계속 쓸지 바꿀지 정해요.',
          challenge: '그래프 값과 판단 결과는 맞힌 뒤에만 보이고, 차이가 아주 작은 자료도 판단해요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 한 번 정한 방법은 끝까지 바꾸지 않아야 한다고 여긴다 → 태민이 자료로 바꾸는 것도 판단이라고 짚는다. ② 시간 기록이 줄어든 것을 나빠졌다고 읽는다 → 단위를 먼저 읽게 한다. ③ 0.1초 같은 아주 작은 차이로 결론을 낸다 → 같은 조건에서 몇 번 더 재 보게 한다. 다시 잰 줄넘기는 짝이 세어 준다.',
      }),
      // ───────────────────────── 23 ─────────────────────────
      L(23, {
        title: '콩주머니 던지기 방법을 여러 번 재어 보고 정하기',
        objective: '던지기 방법을 바꾼 전과 뒤의 기록을 여러 번 견주어 도움이 되었는지 판단하고, 도움이 되지 않으면 다른 방법을 골라 다시 잴 수 있다.',
        illustration: art('children throwing colorful paper bean bags across a field marked with distance lines, one child standing sideways with the front foot stepping forward', [
          { motif: 'sun', x: 410, y: 52, s: 0.6 }, { motif: 'cloud', x: 110, y: 50 }, { motif: 'hills', y: 222 },
          { motif: 'flower', x: 70, y: 210 }, { motif: 'star', x: 330, y: 110 },
          { motif: 'text', x: 240, y: 145, text: '여러 번 재어 봐요', size: 22 },
        ]),
        safety: [WARM, THROW, STOP],
        stages: stages(
          {
            teacher: '"22차시에 방법을 쓴 전과 뒤 기록을 한 번씩 견주었어요. 한 번 잘 나온 기록만 보고 정해도 될까요?" "네"라는 대답이 나오면 "주사위를 한 번 던져 6이 나왔다고 늘 6이 나올까요?"라고 되묻는다. 오늘은 콩주머니 멀리던지기에서 방법을 바꾸고, 여러 번 잰 기록으로 판단한다고 알린다.',
            student: '한 번 잘 나온 기록만 보고 방법을 정해도 되는지 생각해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 여러 번 잰 기록 그래프 읽기', minutes: 9, tool: 'chart',
              task: '친구들이 던지기 방법을 바꾸기 전과 뒤에 여러 번 잰 기록을 읽고, 기록이 어떻게 달라졌는지 판단해요.',
              teacher: '"하람이는 3회부터 옆으로 서서 던졌어요. 3회, 4회, 5회가 모두 1·2회보다 높나요?" 꺾은선이 바뀐 뒤 계속 높게 머무는지를 보게 한다. 서진이처럼 한 번만 높았다가 내려온 자료는 "아직 판단하기 일러요"라고 짚는다.',
              levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '하람이는 3회부터 옆으로 서서 던졌어요. 바꾼 뒤 기록은 어떻게 되었나요?', toolOptions: { type: 'line', mode: 'read', title: '하람이의 콩주머니 멀리던지기(3회부터 옆으로 서기)', unit: 'm', xLabel: '시도', data: [['1회', 10], ['2회', 11], ['3회', 13], ['4회', 14], ['5회', 14]], question: '바꾼 뒤 기록은?', choices: ['계속 높게 이어졌어요', '한 번만 높았다가 내려왔어요', '계속 낮아졌어요'] }, target: { pick: 0 }, difficulty: 0.2 },
                { prompt: '서진이도 3회부터 옆으로 서서 던졌어요. 바꾼 뒤 기록은 어떻게 되었나요?', toolOptions: { type: 'line', mode: 'read', title: '서진이의 콩주머니 멀리던지기(3회부터 옆으로 서기)', unit: 'm', xLabel: '시도', data: [['1회', 12], ['2회', 12], ['3회', 15], ['4회', 11], ['5회', 10]], question: '바꾼 뒤 기록은?', choices: ['계속 높게 이어졌어요', '한 번만 높았다가 내려왔어요', '계속 낮아졌어요'] }, target: { pick: 1 }, difficulty: 0.25,
                  conclude: '한 번 좋은 기록만으로는 방법이 도움이 되었는지 알기 어려워요. 여러 번 재어 견주어요.' },
                { prompt: '모둠 친구들이 옆으로 서서 던진 뒤 늘어난 거리예요. 거리가 늘어난 사람은 몇 명인지 써요.', toolOptions: { type: 'bar', mode: 'read', title: '옆으로 서서 던진 뒤 늘어난 거리(별님 모둠)', unit: 'm', xLabel: '이름', data: [['가온', 3], ['나래', 2], ['다솜', 0], ['라엘', 4]], question: '늘어난 사람은 몇 명?' }, target: { value: 3 }, difficulty: 0.25,
                  hints: ['막대가 0보다 높은 사람이 거리가 늘어난 사람이에요.', '막대가 없는(0인) 사람은 늘지 않았어요. 그 사람을 빼고 세어 보세요.', '0이 아닌 막대를 하나씩 세면 돼요. 다솜이만 늘지 않았어요.'] },
              ],
            },
            {
              id: 'a2', title: '활동 2. 두 방법으로 두 번씩 던지고 기록하기', minutes: 11, tool: 'timer',
              task: '안전 점검 뒤 정면으로 서서 두 번, 옆으로 서서 던지는 팔 반대쪽 발을 내딛으며 두 번 던져요. 짝이 1m 줄 표시로 거리를 읽어 주면 기록판에 적어요.',
              teacher: '던지는 선 앞으로 1m마다 줄을 그어 둔다. "던지기는 호루라기 한 번에 모두 같이, 주우러 갈 때는 호루라기 두 번이에요. 주우러 간 친구가 있으면 아무도 던지지 않아요." 기록은 콩주머니가 처음 떨어진 자리에서 가까운 줄 숫자로 읽는다.',
              levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
              items: [
                { prompt: '멀리던지기를 시작하기 전에 둘레를 살펴 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['던지는 쪽에 사람이 없어요', '모두 같은 선 뒤에 섰어요', '주우러 갈 때의 신호를 알아요'] }, target: { safety: true }, levels: { challenge: { prompt: '던지기 전에 확인한 것을 모두 눌러 표시해요. 이번에는 살필 것이 하나 더 있어요.', toolOptions: { safety: ['던지는 쪽에 사람이 없어요', '모두 같은 선 뒤에 섰어요', '주우러 갈 때의 신호를 알아요', '옆 친구와 두 팔 간격을 두었어요'] } } }, difficulty: 0.1 },
                { prompt: '두 방법으로 두 번씩 던져 보아요. 다 하면 ‘짝·모둠과 함께 해 보았어요’를 눌러요.', free: true },
                { prompt: '짝이 읽어 준 네 번의 기록(m)을 적어요.', toolOptions: { fields: [{ label: '정면 1회', unit: 'm' }, { label: '정면 2회', unit: 'm' }, { label: '옆으로 1회', unit: 'm' }, { label: '옆으로 2회', unit: 'm' }] }, target: { records: true }, levels: { easy: { prompt: '짝이 읽어 준 기록(m)을 두 칸 이상 적어요.', target: { records: 2 } } }, difficulty: 0.15 },
              ],
            },
            {
              id: 'a3', title: '활동 3. 기록을 보고 다음 방법 정하기', minutes: 6, tool: 'emotion',
              task: '친구들의 기록 상황을 보고 알맞은 판단을 골라요. 그다음 내 네 기록을 보고 짝에게 다음에 쓸 방법을 말해요.',
              teacher: '"모둠 셋에게 도움이 되었다고 다솜이도 그 방법을 꼭 써야 할까요?" 방법은 사람마다 맞는 것이 다르다는 것을 짚는다. "한 번 정했으니 끝까지"라고 하는 학생에게는 다솜이의 0m 막대를 다시 보여 준다.',
              levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '서진이는 바꾼 뒤 한 번만 15m가 나오고 다시 줄었어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '서진이는 옆으로 서서 던진 뒤 15m, 11m, 10m가 나왔어요.', choices: [{ id: 'sure', text: '15m가 나왔으니 확실히 좋은 방법이에요', result: '다음 시간에도 10m 남짓이었어요.', mood: '놀람', why: '한 번 좋은 기록만으로는 알 수 없어요.' }, { id: 'look', text: '15m 때와 다른 때 동작을 짝에게 봐 달라 하고 더 던져 봐요', result: '발 내딛기를 잊은 때 기록이 줄었다는 걸 알았어요.', mood: '뿌듯함' }, { id: 'drop', text: '줄었으니 바로 정면으로 돌아가요', result: '왜 15m가 나왔는지 알 수 없었어요.', mood: '걱정', why: '자료가 모자라면 더 살펴봐요.' }] }, target: { choice: 'look' }, levels: { easy: { toolOptions: { choices: [{ id: 'sure', text: '15m가 나왔으니 확실히 좋은 방법이에요', result: '다음 시간에도 10m 남짓이었어요.', mood: '놀람', why: '한 번 좋은 기록만으로는 알 수 없어요.' }, { id: 'look', text: '15m 때와 다른 때 동작을 짝에게 봐 달라 하고 더 던져 봐요', result: '발 내딛기를 잊은 때 기록이 줄었다는 걸 알았어요.', mood: '뿌듯함' }] } } }, difficulty: 0.25 },
                { prompt: '다솜이는 옆으로 서서 던져도 거리가 늘지 않았어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '다솜이는 옆으로 서서 던져도 정면과 똑같이 9m였어요.', choices: [{ id: 'stick', text: '친구들은 늘었으니 나도 끝까지 이 방법만 써요', result: '대회에서도 9m였어요.', mood: '속상함', why: '나에게 도움이 안 되면 바꿀 수 있어요.' }, { id: 'other', text: '팔을 뒤로 크게 당겨 던지기를 새로 써 보고 견줘요', result: '11m까지 늘었어요.', mood: '신남' }, { id: 'quit', text: '던지기는 나랑 안 맞으니 그만해요', result: '연습할 기회를 놓쳤어요.', mood: '걱정', why: '방법을 바꾸면 돼요.' }] }, target: { choice: 'other' }, difficulty: 0.2 },
                { prompt: '짝에게 내 네 기록을 보고 다음에 쓸 던지기 방법과 근거를 말해요. 말한 뒤 ‘다 했어요’를 눌러요.', free: true, talk: true },
              ],
            },
          ],
          {
            teacher: '"오늘 여러 번 재어 보니 한 번만 잰 것과 무엇이 달랐나요?" 두세 명의 판단을 듣는다. 출구 1번은 시간 기록이라 줄어야 좋다는 것만 알려 주고 스스로 읽게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'chart', options: { type: 'line', mode: 'read', title: '준혁이의 10m 왕복달리기(3회부터 몸 낮춰 돌기)', unit: '초', xLabel: '시도', data: [['1회', 13.2], ['2회', 13.0], ['3회', 12.4], ['4회', 12.3], ['5회', 12.5]], from: 11, question: '몸 낮춰 돌기가 도움이 되었나요?', choices: ['도움이 되었어요', '도움이 되지 않았어요'] }, prompt: '준혁이의 여러 번 잰 기록을 읽고 방법이 도움이 되었는지 골라요.', target: { pick: 0 }, difficulty: 0.3 },
              { type: 'choice', prompt: '방법을 바꾼 뒤 한 번만 좋은 기록이 나왔다면?', options: ['확실히 좋은 방법이에요', '몇 번 더 재어 계속 좋은지 봐요', '그 방법은 쓰지 말아요'], answer: 1, difficulty: 0.2, explain: '여러 번 잰 기록이 계속 좋아야 도움이 되었다고 말할 수 있어요.' },
              { type: 'short', prompt: '다음에 쓸 던지기 방법과, 그렇게 정한 근거가 된 내 기록을 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '여러 번 재어 정하기',
          items: [
            { type: 'table', prompt: '두 방법으로 던진 기록을 쓰세요.', columns: ['방법', '1회(m)', '2회(m)'], cells: [['정면으로 서서', '', ''], ['옆으로 서서 발 내딛기', '', '']] },
            { type: 'choice', prompt: '하람이 기록 10m, 11m → 바꾼 뒤 13m, 14m, 14m라면?', options: ['계속 높게 이어졌어요', '한 번만 높았어요', '계속 낮아졌어요'], answer: '계속 높게 이어졌어요' },
            { type: 'choice', prompt: '모둠 친구 셋에게 도움이 된 방법을 나도 써 보았는데 기록이 그대로라면?', options: ['끝까지 그 방법만 써요', '다른 방법을 골라 견주어 봐요', '던지기를 그만해요'], answer: '다른 방법을 골라 견주어 봐요' },
            { type: 'check', prompt: '오늘 지킨 던지기 약속에 ✓ 하세요.', options: ['신호에 맞춰 같은 방향으로 던졌어요', '주우러 간 친구가 있을 때 던지지 않았어요', '줄 숫자를 정확히 읽어 주었어요'] },
            { type: 'short', prompt: '내가 다음에 쓸 방법과 그 근거를 쓰세요.' },
          ],
          easy: {
            note: '한 번 좋은 기록보다, 여러 번 계속 좋은 기록을 봐요.',
            items: [
              { type: 'table', prompt: '오늘 던진 기록을 쓰세요.', columns: ['방법', '기록(m)'], cells: [['정면', ''], ['옆으로', '']] },
              { type: 'choice', prompt: '한 번만 좋은 기록이 나왔다면?', options: ['더 재어 봐요', '바로 정해요'], answer: '더 재어 봐요' },
              { type: 'short', prompt: '다음에 쓸 방법 하나를 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '그래프에 값이 보이고, 판단 보기가 둘이며, 기록은 두 칸만 적어도 돼요.',
          base: '여러 번 잰 기록의 흐름을 읽고, 두 방법으로 직접 던져 견주어요.',
          challenge: '그래프 값과 판단 결과는 맞힌 뒤에만 보이고, 안전 점검 항목이 하나 더 있으며 시간 재기 도구가 보여요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 한 번 정한 방법은 끝까지 바꾸지 않아야 한다고 여긴다 → 다솜이처럼 나에게 도움이 안 되면 다른 방법을 고르는 것도 판단이라고 짚는다. ② 한 번 잘 나온 기록으로 결론을 낸다 → 서진이 꺾은선으로 흐름을 보게 한다. ③ 모둠 대부분에게 도움이 된 방법을 모두가 써야 한다고 여긴다 → 방법은 사람마다 맞는 것이 다르다. 던지기는 호루라기 신호로만 하고 교사가 던지는 쪽 끝에서 관찰한다.',
      }),
      // ───────────────────────── 24 ─────────────────────────
      L(24, {
        title: '우리 반 기록 대회에서 내 방법 써 보고 돌아보기',
        objective: '기록 대회에서 스스로 고른 방법을 써서 겨루고, 연습 기록과 대회 기록을 견주어 방법을 계속 쓸지 바꿀지 근거를 들어 정할 수 있다.',
        illustration: art('a cheerful class record festival with paper stations for standing long jump, rope skipping and bean bag throwing, a scoreboard of paper ribbons', [
          { motif: 'sun', x: 410, y: 52, s: 0.7 }, { motif: 'cloud', x: 90, y: 52 }, { motif: 'hills', y: 222 },
          { motif: 'star', x: 120, y: 120 }, { motif: 'star', x: 240, y: 100 }, { motif: 'star', x: 360, y: 120 },
          { motif: 'text', x: 240, y: 175, text: '우리 반 기록 대회', size: 24 },
        ]),
        safety: [WARM, SPACE, ROPE, THROW, STOP],
        stages: stages(
          {
            teacher: '"오늘은 기술형 스포츠 마지막 시간, 우리 반 기록 대회예요. 제자리멀리뛰기·30초 줄넘기·콩주머니 멀리던지기 가운데 하나를 고르고, 지금까지 고른 방법을 써서 겨뤄요." "이기는 것보다 무엇을 알아보는 대회일까요?"라고 묻고, "내 방법이 대회에서도 도움이 되었는지"라는 대답을 끌어낸다.',
            student: '대회에서 고를 종목 하나와 그 종목에서 쓸 내 방법을 떠올려 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 대회 차례와 안전 확인하기', minutes: 6, tool: 'timer',
              task: '대회에서 내가 할 일을 차례대로 놓고, 정거장에 가기 전에 안전 점검을 해요.',
              teacher: '"연습 기록을 먼저 확인해야 대회 뒤에 견줄 수 있어요." 방법 카드에는 "나는 ○○ 종목에서 ○○ 방법을 쓴다"를 한 줄로 쓰게 한다. 정거장마다 재는 사람·세는 사람·적는 사람을 미리 정해 둔다(17·20차시 역할).',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '대회에서 내가 할 일을 차례대로 놓아요.', toolOptions: { cards: ['대회 기록을 연습 기록과 견주기', '연습 기록 확인하기', '두 번 겨루어 기록 적기', '쓸 방법을 방법 카드에 쓰기'] }, target: { order: ['연습 기록 확인하기', '쓸 방법을 방법 카드에 쓰기', '두 번 겨루어 기록 적기', '대회 기록을 연습 기록과 견주기'] }, levels: { easy: { state: { order: ['연습 기록 확인하기', '쓸 방법을 방법 카드에 쓰기', '대회 기록을 연습 기록과 견주기', '두 번 겨루어 기록 적기'] } } }, difficulty: 0.15 },
                { prompt: '정거장에 가기 전에 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['줄넘기 정거장은 줄 길이보다 멀리 떨어졌어요', '던지기 정거장 앞에 사람이 없어요', '멀리뛰기 착지 자리에 물건이 없어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '대회에서 기록 재는 사람이 할 일만 차례대로 놓아요.', toolOptions: { cards: ['적는 사람에게 기록 불러 주기', '"시작" 신호 보내기', '정한 방법대로 재거나 세기'] }, target: { order: ['"시작" 신호 보내기', '정한 방법대로 재거나 세기', '적는 사람에게 기록 불러 주기'] }, difficulty: 0.15 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 고른 종목으로 겨루고 기록하기', minutes: 13, tool: 'timer',
              task: '고른 정거장에서 방법 카드대로 두 번 겨뤄요. 모둠 친구가 잰 기록을 연습 기록과 함께 적어요.',
              teacher: '정거장 셋을 체육관 세 귀퉁이에 둔다. "대회는 남과 겨루지만, 오늘 견줄 것은 나의 연습 기록이에요." 순위표 대신 "연습보다 늘었나요?"를 묻는다. 줄넘기 정거장은 30초 타이머를 함께 쓴다.',
              levels: { easy: { showTotal: true }, base: {}, challenge: { stopwatch: true } },
              items: [
                { prompt: '30초 줄넘기 정거장 신호에 맞게, 30초 넘고 30초 쉬기를 2번 하도록 타이머를 맞춰요.', toolOptions: { plan: { work: 20, rest: 10, rounds: 3 } }, target: { plan: { work: 30, rest: 30, rounds: 2 } }, difficulty: 0.2 },
                { prompt: '고른 정거장에서 방법 카드대로 두 번 겨뤄요. 다 하면 ‘짝·모둠과 함께 해 보았어요’를 눌러요.', free: true },
                { prompt: '연습 기록과 대회 두 번의 기록을 적어요.', toolOptions: { fields: [{ label: '연습 기록', unit: 'cm·번·m' }, { label: '대회 1회', unit: 'cm·번·m' }, { label: '대회 2회', unit: 'cm·번·m' }] }, target: { records: true }, levels: { easy: { prompt: '연습 기록과 대회 기록을 두 칸 이상 적어요.', target: { records: 2 } } }, difficulty: 0.15 },
              ],
            },
            {
              id: 'a3', title: '활동 3. 대회 기록으로 방법 돌아보기', minutes: 7, tool: 'mindmap',
              task: '친구들이 한 말을 \'판단 근거\'와 \'근거가 아닌 말\'로 나누어요. 그다음 내 기록으로 방법을 계속 쓸지 바꿀지 정해 활동지에 써요.',
              teacher: '"\'오늘 운이 나빴어\'는 방법을 판단하는 근거가 될까요?" 기록 숫자·짝이 본 동작이 근거라는 것을 짚는다. 대회 기록이 연습보다 낮은 학생에게 "방법 때문인지, 긴장 때문인지 어떻게 알 수 있을까요?"라고 묻고, 다음에 같은 조건으로 한 번 더 재 보자고 한다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '친구들의 말을 판단 근거와 근거가 아닌 말로 나누어요.', toolOptions: { topic: '대회 뒤 친구들의 말', slots: [{ id: 'yes', label: '판단 근거' }, { id: 'no', label: '근거가 아닌 말' }], cards: ['연습 58번, 대회 61번·63번이었어요', '짝이 착지 때 몸이 앞으로 나왔대요', '오늘은 그냥 운이 나빴어요', '1등 친구가 쓴 방법이니 좋아요'] }, target: { sort: { yes: ['연습 58번, 대회 61번·63번이었어요', '짝이 착지 때 몸이 앞으로 나왔대요'], no: ['오늘은 그냥 운이 나빴어요', '1등 친구가 쓴 방법이니 좋아요'] } }, levels: { easy: { state: { at: { '연습 58번, 대회 61번·63번이었어요': 0 } } } }, difficulty: 0.2,
                  hints: ['근거는 숫자로 잰 기록이나 짝이 직접 본 내 동작이에요.', '운이나 다른 사람 이야기를 판단 근거 칸에 넣지 않았는지 보세요.', '기록 숫자와 짝이 본 동작은 판단 근거, 운과 1등 친구 이야기는 근거가 아닌 말이에요.'] },
                { prompt: '대회 기록 상황과 알맞은 판단을 이어요.', toolOptions: { mode: 'match', topic: '계속 쓸까, 바꿀까', slots: [{ id: 'keep', label: '두 번 다 연습보다 늘었어요' }, { id: 'more', label: '한 번은 늘고 한 번은 줄었어요' }, { id: 'change', label: '두 번 다 연습보다 줄었어요' }], cards: ['방법을 계속 써요', '같은 조건으로 더 재어 보고 정해요', '다른 방법을 골라 견주어요'] }, target: { match: { keep: '방법을 계속 써요', more: '같은 조건으로 더 재어 보고 정해요', change: '다른 방법을 골라 견주어요' } }, levels: { easy: { state: { at: { '방법을 계속 써요': 0 } } } }, difficulty: 0.2,
                  hints: ['연습 기록보다 늘었는지 줄었는지를 두 번 다 보세요.', '늘고 줄기가 섞인 상황에는 아직 판단하기 이른 카드가 어울려요.', '두 번 다 늘면 계속 쓰기, 섞이면 더 재어 보기, 두 번 다 줄면 다른 방법 고르기예요.'] },
                { prompt: '짝에게 내 연습·대회 기록을 보여 주고, 방법을 계속 쓸지 바꿀지와 근거를 말해요. 말한 뒤 ‘다 했어요’를 눌러요.', free: true, talk: true },
              ],
            },
          ],
          {
            teacher: '"기술형 스포츠 24차시 동안 갈래를 알고, 기본 기능을 익히고, 기록으로 방법을 골라 바꾸어 보았어요." 계속 쓰기로 한 친구와 바꾸기로 한 친구를 한 명씩 듣는다. 다음 시간부터는 편을 짜서 겨루는 전략형 스포츠를 시작한다고 알린다.',
            exitTicket: [
              { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '유진이의 제자리멀리뛰기(팔치기 방법)', unit: 'cm', xLabel: '때', data: [['연습', 150], ['대회 1회', 141], ['대회 2회', 144]], question: '유진이에게 알맞은 판단은?', choices: ['방법을 계속 써요', '다른 방법을 골라 견주어요'] }, prompt: '유진이의 연습·대회 기록을 읽고 알맞은 판단을 골라요.', target: { pick: 1 }, difficulty: 0.25 },
              { type: 'choice', prompt: '방법이 도움이 되었는지 판단하는 근거로 알맞은 것은?', options: ['그날의 운', '연습 기록과 대회 기록의 차이', '1등 친구의 방법'], answer: 1, difficulty: 0.15, explain: '같은 종목에서 잰 기록의 차이가 판단 근거예요.' },
              { type: 'short', prompt: '대회 기록을 보고 정한 것(계속 쓰기/바꾸기)과 그 근거를 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '우리 반 기록 대회',
          items: [
            { type: 'table', prompt: '내가 고른 종목과 방법, 기록을 쓰세요.', columns: ['종목', '쓴 방법', '연습 기록', '대회 1회', '대회 2회'], rows: 1 },
            { type: 'choice', prompt: '연습 52번 → 대회 49번, 47번이라면 알맞은 판단은?', options: ['방법을 계속 써요', '다른 방법을 골라 견주어요', '줄넘기를 그만해요'], answer: '다른 방법을 골라 견주어요' },
            { type: 'check', prompt: '판단 근거가 되는 것에 모두 ✓ 하세요.', options: ['잰 기록 숫자', '짝이 본 내 동작', '그날의 운'] },
            { type: 'table', prompt: '기술형 스포츠에서 다음에 이어 갈 계획을 쓰세요.', columns: ['계속 쓸 방법', '바꿀 방법', '그 까닭'], rows: 1 },
            { type: 'short', prompt: '기술형 스포츠를 배우며 가장 많이 는 것과 그 근거를 한 줄로 쓰세요.' },
          ],
          easy: {
            note: '연습보다 늘면 계속, 줄면 바꾸기, 섞이면 더 재기!',
            items: [
              { type: 'table', prompt: '내 기록을 쓰세요.', columns: ['연습', '대회'], rows: 1 },
              { type: 'choice', prompt: '대회 기록이 두 번 다 늘었다면?', options: ['계속 써요', '바꿔요'], answer: '계속 써요' },
              { type: 'short', prompt: '오늘 쓴 방법을 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 놓으면 바로 표시되고 첫 카드가 미리 놓여 있으며, 기록은 두 칸만 적어도 돼요. 타이머 전체 시간이 보여요.',
          base: '대회 차례를 정하고 고른 방법으로 겨뤄, 기록으로 판단해요.',
          challenge: '시간 재기 도구로 정거장 기록을 직접 재고, 판단 근거를 스스로 가려요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 대회 기록이 한 번 낮으면 방법이 틀렸다고 단정한다 → 한 번은 늘고 한 번은 줄면 더 재 보도록 한다. ② 운·긴장·남의 방법을 근거로 든다 → 기록 숫자와 짝이 본 동작을 근거로 쓰게 한다. ③ 순위에만 매달린다 → 견줄 대상은 나의 연습 기록이라고 거듭 말한다. 정거장 세 곳은 교사가 돌며 안전을 관찰하고, 줄넘기·던지기 정거장 사이를 넓게 띄운다.',
      }),
      // ───────────────────────── 25 ─────────────────────────
      L(25, {
        title: '점수 얻는 방법으로 영역형·필드형·네트형 가르기',
        objective: '여러 전략형 종목이 점수를 얻는 방법을 말하고, 그 방법을 근거로 영역형·필드형·네트형으로 나눌 수 있다.',
        illustration: art('three paper sports courts side by side: a field with two goals, a diamond with bases, and a court divided by a net, children pointing at where points are scored', [
          { motif: 'sun', x: 410, y: 52, s: 0.7 }, { motif: 'cloud', x: 100, y: 52 }, { motif: 'hills', y: 222 },
          { motif: 'flower', x: 70, y: 210 }, { motif: 'star', x: 240, y: 100 },
          { motif: 'text', x: 240, y: 170, text: '골 · 베이스 · 네트', size: 22 },
        ]),
        safety: [SPACE, WARM, BALL, LOOK],
        stages: stages(
          {
            teacher: '농구·야구·배구 사진을 띄우고 묻는다. "세 경기 모두 공을 손으로 다뤄요. 그럼 같은 갈래일까요?" "네"와 "아니요"가 섞이면 "그럼 세 경기에서 점수는 어떻게 얻나요?"라고 다시 묻는다. "오늘은 공을 무엇으로 다루는지가 아니라, 점수를 얻는 방법으로 나누어 봐요."',
            student: '농구·야구·배구가 점수를 어떻게 얻는지 떠올려 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 점수 얻는 방법으로 종목 나누기', minutes: 14, tool: 'mindmap',
              task: '점수 얻는 방법 카드를 갈래와 잇고, 종목 카드를 세 갈래로 나누어요. 나눈 까닭을 짝에게 한 문장으로 말해요.',
              teacher: '"영역형은 상대 쪽 땅에 들어가 골대나 끝줄에 공을 넣어 점수를 얻고, 필드형은 공을 치거나 찬 뒤 베이스를 돌아 점수를 얻고, 네트형은 네트 너머 상대 코트에 공을 떨어뜨려 점수를 얻어요." 칠판에 골대·베이스·네트를 그려 둔다. "농구와 배구는 둘 다 손인데 왜 갈래가 달라요?"라고 물어 득점 방법을 말하게 한다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '점수 얻는 방법 카드를 알맞은 갈래와 이어요.', toolOptions: { mode: 'match', topic: '어떻게 점수를 얻나요?', slots: [{ id: 'area', label: '영역형' }, { id: 'field', label: '필드형' }, { id: 'net', label: '네트형' }], cards: ['상대 골대나 끝줄에 공을 넣어요', '공을 치고 베이스를 돌아 들어와요', '네트 너머 상대 코트에 공을 떨어뜨려요'] }, target: { match: { area: '상대 골대나 끝줄에 공을 넣어요', field: '공을 치고 베이스를 돌아 들어와요', net: '네트 너머 상대 코트에 공을 떨어뜨려요' } }, levels: { easy: { state: { at: { '상대 골대나 끝줄에 공을 넣어요': 0 } } } }, difficulty: 0.15 },
                { prompt: '전략형 종목 카드를 영역형·필드형·네트형으로 나누어요.', toolOptions: { topic: '전략형 스포츠', slots: ['영역형', '필드형', '네트형'], cards: ['축구', '농구', '야구', '티볼', '배구', '배드민턴'] }, target: { sort: { '영역형': ['축구', '농구'], '필드형': ['야구', '티볼'], '네트형': ['배구', '배드민턴'] } }, levels: { easy: { state: { at: { '축구': 0 } } }, challenge: { prompt: '전략형 종목 카드를 세 갈래로 나누어요. 편 없이 혼자 기록을 재는 종목은 어느 갈래에도 넣지 않아요.', toolOptions: { cards: ['축구', '농구', '야구', '티볼', '배구', '배드민턴', '50m 달리기'] } } }, difficulty: 0.2 },
                { prompt: '모두 공을 손으로 다루는 종목이에요. 점수 얻는 방법을 보고 갈래와 이어요.', toolOptions: { mode: 'match', topic: '손으로 다루는 공', slots: [{ id: 'area', label: '영역형' }, { id: 'field', label: '필드형' }, { id: 'net', label: '네트형' }], cards: ['핸드볼', '야구', '배구'] }, target: { match: { area: '핸드볼', field: '야구', net: '배구' } }, difficulty: 0.3,
                  hints: ['공을 손으로 다루는지보다, 점수를 어떻게 얻는지 떠올려 보세요.', '골대에 던져 넣는 종목, 치고 달리는 종목, 네트를 넘기는 종목을 가려 보세요.', '골대에 넣는 핸드볼은 영역형, 치고 베이스를 도는 야구는 필드형, 네트를 넘기는 배구는 네트형이에요.'],
                  conclude: '공을 손으로 다뤄도 점수 얻는 방법이 다르면 갈래가 달라요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 세 갈래 득점 놀이 맛보기', minutes: 12, tool: 'timer',
              task: '안전 점검 뒤 모둠이 세 놀이를 3분씩 돌아가며 해요: 콘 골대에 공 굴려 넣기(영역형), 공 차고 콘 돌아오기(필드형), 줄 너머로 풍선 떨어뜨리기(네트형). 놀이마다 얻은 점수를 적어요.',
              teacher: '"공은 무릎 아래로만 굴리거나 차요. 풍선 놀이는 줄을 잡지 않아요." 놀이마다 "이 놀이에서는 어떻게 점수가 났나요?"를 묻고, 골대·베이스·네트 가운데 무엇과 닮았는지 말하게 한다. 3분이 끝나면 호루라기를 불어 놀이를 바꾼다.',
              levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
              items: [
                { prompt: '놀이를 시작하기 전에 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['공이 굴러갈 쪽에 사람이 없어요', '풍선 줄 둘레에 걸릴 물건이 없어요', '신발 끈을 단단히 묶었어요'] }, target: { safety: true }, levels: { challenge: { prompt: '놀이를 시작하기 전에 확인한 것을 모두 눌러 표시해요. 살필 것이 하나 더 있어요.', toolOptions: { safety: ['공이 굴러갈 쪽에 사람이 없어요', '풍선 줄 둘레에 걸릴 물건이 없어요', '신발 끈을 단단히 묶었어요', '공을 주울 때는 놀이를 멈추기로 했어요'] } } }, difficulty: 0.1 },
                { prompt: '3분씩, 놀이를 바꾸는 데 1분씩 쉬며 세 놀이를 하도록 타이머를 맞춰요.', toolOptions: { plan: { work: 120, rest: 30, rounds: 2 }, workStep: 30, restStep: 30 }, target: { plan: { work: 180, rest: 60, rounds: 3 } }, levels: { challenge: { prompt: '놀이마다 같은 시간, 바꾸는 데 1분씩 쉬며 세 놀이를 해서 전체 11분이 되게 맞춰요.', target: { plan: { rest: 60, rounds: 3 }, total: 660 } } }, difficulty: 0.25 },
                { prompt: '모둠과 세 놀이를 돌아가며 해 보아요. 다 하면 ‘짝·모둠과 함께 해 보았어요’를 눌러요.', free: true },
                { prompt: '놀이마다 우리 모둠이 얻은 점수를 적어요.', toolOptions: { fields: [{ label: '골대에 굴려 넣기', unit: '점' }, { label: '차고 콘 돌기', unit: '점' }, { label: '풍선 떨어뜨리기', unit: '점' }] }, target: { records: true }, levels: { easy: { prompt: '놀이마다 얻은 점수를 두 칸 이상 적어요.', target: { records: 2 } } }, difficulty: 0.15 },
              ],
            },
          ],
          {
            teacher: '"세 놀이에서 점수가 난 순간을 떠올려 봐요. 무엇을 넣고, 무엇을 돌고, 무엇을 넘겼나요?" 학생 말로 골대·베이스·네트를 정리한다. 출구 1번에서 손이나 발 같은 몸 부위로 갈래를 정하는 학생에게는 "점수는 어떻게 얻나요?"만 다시 묻는다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { topic: '어느 갈래일까?', slots: ['영역형', '필드형', '네트형'], cards: ['럭비', '발야구', '탁구'] }, prompt: '새 종목 카드 세 장을 영역형·필드형·네트형으로 나누어요.', target: { sort: { '영역형': ['럭비'], '필드형': ['발야구'], '네트형': ['탁구'] } }, difficulty: 0.25 },
              { type: 'choice', prompt: '전략형 스포츠를 갈래로 나누는 기준은 무엇인가요?', options: ['공을 손으로 다루는지 발로 다루는지', '점수를 얻는 방법', '공의 크기'], answer: 1, difficulty: 0.2, explain: '골대에 넣는지, 베이스를 도는지, 네트 너머에 떨어뜨리는지로 나눠요.' },
              { type: 'mood', prompt: '세 갈래 득점 놀이를 해 본 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '점수 얻는 방법으로 나누기',
          items: [
            { type: 'table', prompt: '세 경기가 점수를 얻는 방법과 갈래를 쓰세요.', columns: ['종목', '점수 얻는 방법', '갈래'], cells: [['축구', '', ''], ['야구', '', ''], ['배구', '', '']] },
            { type: 'choice', prompt: '"농구와 배구는 둘 다 손을 쓰니 같은 갈래예요"라는 말에 대한 생각으로 알맞은 것에 ○ 하세요.', options: ['맞아요', '아니에요, 점수 얻는 방법이 달라요', '둘 다 필드형이에요'], answer: '아니에요, 점수 얻는 방법이 달라요' },
            { type: 'table', prompt: '오늘 놀이에서 모둠이 얻은 점수를 쓰세요.', columns: ['골대에 굴려 넣기', '차고 콘 돌기', '풍선 떨어뜨리기'], rows: 1 },
            { type: 'check', prompt: '오늘 지킨 안전 약속에 ✓ 하세요.', options: ['공은 무릎 아래로만 굴리거나 찼어요', '굴러간 공은 놀이를 멈추고 주웠어요', '둘레 친구를 보며 움직였어요'] },
            { type: 'short', prompt: '세 놀이 가운데 점수 얻기가 가장 어려웠던 것과 그 까닭을 쓰세요.' },
          ],
          easy: {
            note: '영역형 = 골대에 넣기, 필드형 = 치고 베이스 돌기, 네트형 = 네트 너머 떨어뜨리기.',
            items: [
              { type: 'choice', prompt: '축구는 어느 갈래인가요?', options: ['영역형', '필드형', '네트형'], answer: '영역형' },
              { type: 'choice', prompt: '배드민턴은 어느 갈래인가요?', options: ['영역형', '필드형', '네트형'], answer: '네트형' },
              { type: 'short', prompt: '오늘 해 본 놀이 하나를 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 맞는 칸에 놓으면 바로 표시되고 첫 카드가 미리 놓여 있어요. 점수는 두 칸만 적어도 돼요.',
          base: '점수 얻는 방법을 떠올리며 스스로 나누고, 세 놀이에서 점수가 난 순간을 짚어요.',
          challenge: '기술형 함정 카드(50m 달리기)가 섞이고, 안전 점검 항목이 더해지며, 전체 시간을 셈해 타이머를 맞춰요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 공을 손으로 다루면 모두 같은 갈래라고 여긴다 → 핸드볼·야구·배구처럼 손을 쓰는 종목을 득점 방법으로 견주게 한다. ② 공을 쓰는 종목만 전략형이라고 여긴다 → 셔틀콕을 쓰는 배드민턴도 네트형이라는 것을 보인다. ③ 놀이에서 공을 세게 차거나 던진다 → 무릎 아래로만 굴리거나 차기. 놀이 참여는 교구가 판정하지 않으므로 교사가 세 놀이 사이를 돌며 관찰한다.',
      }),
      // ───────────────────────── 26 ─────────────────────────
      L(26, {
        title: '처음 보는 전략형 종목 가르고 갈래마다 안전 약속 정하기',
        objective: '처음 보는 전략형 종목을 점수 얻는 방법으로 가르고, 갈래마다 다치기 쉬운 순간과 그에 맞는 안전 약속을 골라 직접 연습할 수 있다.',
        illustration: art('children studying paper cards of hockey sticks, softball bats and tennis rackets, with safety signs and cones around a schoolyard', [
          { motif: 'sun', x: 410, y: 52, s: 0.6 }, { motif: 'cloud', x: 100, y: 52 }, { motif: 'hills', y: 222 },
          { motif: 'tree', x: 60, y: 198, s: 0.8 }, { motif: 'star', x: 300, y: 110 },
          { motif: 'text', x: 240, y: 160, text: '갈래마다 안전 약속', size: 22 },
        ]),
        safety: [SPACE, LOOK, BAT, NET],
        stages: stages(
          {
            teacher: '"지난 시간에 점수 얻는 방법으로 세 갈래를 나누었어요. 하키는 처음 보는 종목인데 어느 갈래일까요?" "막대기로 공을 쳐서 상대 골대에 넣어요"라는 대답이 나오면 "치니까 필드형일까요, 골대에 넣으니까 영역형일까요?"라고 되묻는다. 이어 "갈래마다 다치기 쉬운 순간도 달라요. 오늘은 그것도 찾아 봐요."',
            student: '하키가 점수를 어떻게 얻는지 생각하고 갈래를 떠올려 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 처음 보는 종목을 점수 얻는 방법으로 가르기', minutes: 10, tool: 'mindmap',
              task: '처음 보는 종목 카드를 세 갈래로 나누고, 발을 쓰는 종목 가운데 네트형을 골라요. 헷갈리면 "점수는 어떻게 얻지?"를 짝과 물어요.',
              teacher: '"하키와 크리켓은 둘 다 막대로 공을 쳐요. 그런데 하키는 골대에 넣고, 크리켓은 치고 두 기둥 사이를 달려 점수를 얻어요." 도구나 몸 부위가 아니라 점수 얻는 방법이 기준이라는 것을 다시 짚는다. 족구·세팍타크로는 발로 차지만 네트를 넘겨 상대 코트에 떨어뜨린다는 것을 학생 말로 듣는다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '처음 보는 전략형 종목 카드를 세 갈래로 나누어요.', toolOptions: { topic: '처음 보는 종목', slots: ['영역형', '필드형', '네트형'], cards: ['하키', '수구', '소프트볼', '크리켓', '족구', '테니스'] }, target: { sort: { '영역형': ['하키', '수구'], '필드형': ['소프트볼', '크리켓'], '네트형': ['족구', '테니스'] } }, levels: { easy: { state: { at: { '하키': 0 } } } }, difficulty: 0.25,
                  hints: ['막대·배트·라켓 같은 도구보다 점수를 어떻게 얻는지 보세요.', '골대에 넣는 종목, 치고 달려 들어오는 종목, 네트를 넘기는 종목을 다시 가려 보세요.', '하키·수구는 골대에 넣는 영역형, 소프트볼·크리켓은 치고 달리는 필드형, 족구·테니스는 네트를 넘기는 네트형이에요.'] },
                { prompt: '모두 발을 쓰는 종목이에요. 이 가운데 네트형만 골라요.', toolOptions: { mode: 'pick', topic: '발을 쓰는 종목', basket: '네트형', cards: ['족구', '세팍타크로', '축구', '발야구'] }, target: { pick: ['족구', '세팍타크로'] }, difficulty: 0.25,
                  hints: ['발로 찬다는 것보다, 공을 어디로 보내 점수를 얻는지 보세요.', '골대에 넣거나 베이스를 도는 종목이 바구니에 들어갔는지 보세요.', '족구와 세팍타크로는 네트 너머 상대 코트에 공을 떨어뜨려 점수를 얻어요.'] },
                { prompt: '처음 보는 놀이 설명을 읽고 알맞은 갈래와 이어요.', toolOptions: { mode: 'match', topic: '처음 보는 놀이', slots: [{ id: 'area', label: '영역형' }, { id: 'field', label: '필드형' }, { id: 'net', label: '네트형' }], cards: ['원반을 상대 끝 구역에서 받으면 1점', '공을 차고 콘 네 개를 돌아오면 1점', '줄 너머 상대 칸에 공이 닿으면 1점'] }, target: { match: { area: '원반을 상대 끝 구역에서 받으면 1점', field: '공을 차고 콘 네 개를 돌아오면 1점', net: '줄 너머 상대 칸에 공이 닿으면 1점' } }, levels: { easy: { state: { at: { '원반을 상대 끝 구역에서 받으면 1점': 0 } } } }, difficulty: 0.2 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 갈래마다 다치기 쉬운 순간과 안전 약속 찾기', minutes: 9, tool: 'mindmap',
              task: '갈래마다 다치기 쉬운 순간을 잇고, 필드형에서 지킬 안전 약속을 골라요.',
              teacher: '"영역형은 여럿이 한 공을 쫓아 달리고, 필드형은 배트를 휘두르고, 네트형은 라켓을 휘둘러요. 그래서 다치는 순간이 달라요." 배트를 던지고 달리는 장면을 시범으로 보여 주지 말고 말로만 묻는다. "배트를 친 뒤 어디에 두어야 할까요?"',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '갈래마다 다치기 쉬운 순간을 이어요.', toolOptions: { mode: 'match', topic: '다치기 쉬운 순간', slots: [{ id: 'area', label: '영역형' }, { id: 'field', label: '필드형' }, { id: 'net', label: '네트형' }], cards: ['공을 쫓다 친구와 부딪혀요', '친 뒤 던진 배트에 맞아요', '휘두른 라켓에 옆 친구가 맞아요'] }, target: { match: { area: '공을 쫓다 친구와 부딪혀요', field: '친 뒤 던진 배트에 맞아요', net: '휘두른 라켓에 옆 친구가 맞아요' } }, levels: { easy: { state: { at: { '공을 쫓다 친구와 부딪혀요': 0 } } } }, difficulty: 0.15,
                  hints: ['갈래마다 몸이나 도구를 어떻게 쓰는지 떠올려 보세요.', '배트를 쓰는 갈래와 라켓을 쓰는 갈래를 다시 가려 보세요.', '여럿이 공을 쫓는 영역형은 부딪힘, 배트를 쓰는 필드형은 배트, 라켓을 쓰는 네트형은 라켓을 조심해요.'] },
                { prompt: '필드형 게임에서 지킬 안전 약속만 골라요.', toolOptions: { mode: 'pick', topic: '필드형 안전 약속', basket: '지킬 약속', cards: ['배트는 치는 사람만 들어요', '친 뒤 배트를 땅에 내려놓고 달려요', '기다리는 사람은 타석 뒤 안전선 밖에 서요', '빨리 달리려고 배트를 뒤로 던져요'] }, target: { pick: ['배트는 치는 사람만 들어요', '친 뒤 배트를 땅에 내려놓고 달려요', '기다리는 사람은 타석 뒤 안전선 밖에 서요'] }, levels: { challenge: { prompt: '필드형 게임에서 지킬 안전 약속만 골라요. 그럴듯하지만 위험한 카드가 둘 있어요.', toolOptions: { cards: ['배트는 치는 사람만 들어요', '친 뒤 배트를 땅에 내려놓고 달려요', '기다리는 사람은 타석 뒤 안전선 밖에 서요', '빨리 달리려고 배트를 뒤로 던져요', '기다리며 배트를 휘둘러 연습해요'] } } }, difficulty: 0.2 },
                { prompt: '영역형 게임에서 부딪히지 않으려고 할 일만 골라요.', toolOptions: { mode: 'pick', topic: '영역형 안전', basket: '할 일', cards: ['공과 함께 둘레 친구도 보며 달려요', '부딪힐 것 같으면 속도를 줄여요', '공을 잡으려고 친구 앞으로 몸을 던져요', '고개를 숙이고 공만 보고 달려요'] }, target: { pick: ['공과 함께 둘레 친구도 보며 달려요', '부딪힐 것 같으면 속도를 줄여요'] }, difficulty: 0.2 },
              ],
            },
            {
              id: 'a3', title: '활동 3. 안전 동작 몸으로 익히기', minutes: 7, tool: 'timer',
              task: '필드형 치고 달리기의 안전 차례를 놓고, 짝과 두 가지 안전 동작을 연습해요: ① 고무 배트로 공을 친 뒤 내려놓고 콘까지 달리기 ② 둘이 한 공을 쫓다가 "내 공!" 외치고 속도 줄이기.',
              teacher: '배트는 고무·스펀지 배트만 쓴다. "친 다음 배트를 발 옆에 내려놓는 것까지가 치기예요." 둘이 한 공을 쫓는 연습은 걷는 빠르기로 시작하고, 먼저 "내 공!"을 외친 사람만 공을 잡게 한다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '필드형에서 치고 달리기를 안전하게 하는 차례대로 놓아요.', toolOptions: { cards: ['1루 콘으로 달리기', '배트를 발 옆에 내려놓기', '타석 뒤 안전선에서 기다리기', '타석에 들어가 공 치기'] }, target: { order: ['타석 뒤 안전선에서 기다리기', '타석에 들어가 공 치기', '배트를 발 옆에 내려놓기', '1루 콘으로 달리기'] }, levels: { easy: { state: { order: ['타석 뒤 안전선에서 기다리기', '타석에 들어가 공 치기', '1루 콘으로 달리기', '배트를 발 옆에 내려놓기'] } } }, difficulty: 0.15 },
                { prompt: '안전 동작을 연습하기 전에 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['배트는 고무나 스펀지 배트예요', '치는 자리 둘레 3m 안에 사람이 없어요', '공을 쫓는 연습은 걷는 빠르기부터 해요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '짝과 두 가지 안전 동작을 번갈아 연습해요. 다 하면 ‘짝·모둠과 함께 해 보았어요’를 눌러요.', free: true },
              ],
            },
          ],
          {
            teacher: '"오늘 처음 본 종목을 무엇으로 갈랐나요?" "점수 얻는 방법이요"를 듣고, 갈래마다 지킬 약속을 한 가지씩 말하게 한다. 출구 1번에서 도구(채·배트)로 가르는 학생에게는 "그 종목은 어디로 공을 보내 점수를 얻나요?"라고 묻는다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { topic: '어느 갈래일까?', slots: ['영역형', '필드형', '네트형'], cards: ['아이스하키', '킥볼', '배드민턴'] }, prompt: '새 종목 카드 세 장을 영역형·필드형·네트형으로 나누어요.', target: { sort: { '영역형': ['아이스하키'], '필드형': ['킥볼'], '네트형': ['배드민턴'] } }, difficulty: 0.25 },
              { type: 'choice', prompt: '필드형 게임에서 공을 친 뒤 배트는 어떻게 하나요?', options: ['뒤로 던지고 달려요', '발 옆에 내려놓고 달려요', '들고 함께 달려요'], answer: 1, difficulty: 0.15, explain: '던진 배트는 기다리는 친구를 다치게 해요. 내려놓고 달려요.' },
              { type: 'mood', prompt: '갈래마다 안전 약속을 지키며 연습한 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '갈래마다 안전 약속',
          items: [
            { type: 'table', prompt: '종목을 갈래에 맞게 나누어 쓰세요. (하키, 족구, 소프트볼, 수구, 테니스, 크리켓)', columns: ['영역형', '필드형', '네트형'], rows: 2 },
            { type: 'table', prompt: '갈래마다 다치기 쉬운 순간과 지킬 약속을 쓰세요.', columns: ['갈래', '다치기 쉬운 순간', '지킬 약속'], cells: [['영역형', '', ''], ['필드형', '', ''], ['네트형', '', '']] },
            { type: 'choice', prompt: '족구는 발로 차는데 어느 갈래인가요?', options: ['영역형', '필드형', '네트형'], answer: '네트형' },
            { type: 'check', prompt: '오늘 연습한 안전 동작에 ✓ 하세요.', options: ['친 뒤 배트를 내려놓고 달렸어요', '"내 공!"을 외치고 속도를 줄였어요', '기다릴 때 안전선 밖에 섰어요'] },
            { type: 'short', prompt: '도구가 아니라 점수 얻는 방법으로 갈래를 나누는 까닭을 한 줄로 쓰세요.' },
          ],
          easy: {
            note: '배트는 내려놓고, 공을 쫓을 땐 둘레를 보고, 라켓은 내 앞에서만!',
            items: [
              { type: 'choice', prompt: '하키는 어느 갈래인가요?', options: ['영역형', '필드형', '네트형'], answer: '영역형' },
              { type: 'choice', prompt: '친 뒤 배트는?', options: ['내려놓아요', '던져요'], answer: '내려놓아요' },
              { type: 'short', prompt: '오늘 지킨 안전 약속 하나를 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 놓으면 바로 표시되고 첫 카드가 미리 놓여 있어요.',
          base: '점수 얻는 방법으로 처음 보는 종목을 가르고, 갈래에 맞는 안전 약속을 골라 연습해요.',
          challenge: '필드형 안전 약속에 그럴듯하지만 위험한 함정 카드가 둘 섞여요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 공을 손으로 다루면, 또는 같은 도구(막대·배트)를 쓰면 같은 갈래라고 여긴다 → 하키와 크리켓, 족구와 축구를 점수 얻는 방법으로 견준다. ② 친 뒤 배트를 던지는 버릇 → 내려놓기까지를 치기 동작으로 연습한다. ③ 공을 쫓을 때 공만 본다 → "내 공!" 외치기를 약속한다. 배트는 고무·스펀지 배트만 쓰고, 교사가 치는 자리 옆에서 관찰한다.',
      }),
      // ───────────────────────── 27 ─────────────────────────
      L(27, {
        title: '점수 규칙을 바꾸어 우리 모둠 새 게임 만들기',
        objective: '점수 얻는 규칙을 바꾸면 게임의 갈래가 바뀐다는 것을 알고, 고른 갈래에 맞는 점수 규칙과 안전 규칙으로 새 게임을 만들어 해 볼 수 있다.',
        illustration: art('a group of children around a paper rule board, moving cards of goals, bases and a low net to invent a new ball game', [
          { motif: 'sun', x: 410, y: 52, s: 0.6 }, { motif: 'cloud', x: 90, y: 50 }, { motif: 'hills', y: 222 },
          { motif: 'star', x: 130, y: 120 }, { motif: 'leaf', x: 360, y: 190 },
          { motif: 'text', x: 240, y: 150, text: '규칙을 바꾸면?', size: 24 },
        ]),
        safety: [SPACE, WARM, BALL, LOOK],
        stages: stages(
          {
            teacher: '고무공 하나를 들어 보인다. "이 공 하나로 영역형도, 필드형도, 네트형도 할 수 있을까요?" 대답을 기다린 뒤 "무엇을 바꾸면 갈래가 바뀔까요?"라고 묻는다. "공은 그대로, 점수 얻는 규칙을 바꿔 봐요. 오늘은 모둠마다 새 게임을 만들어요."',
            student: '같은 공으로 갈래가 다른 게임을 만들려면 무엇을 바꿔야 할지 생각해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 같은 공, 다른 점수 규칙', minutes: 8, tool: 'mindmap',
              task: '같은 고무공을 쓰는 세 규칙을 갈래와 잇고, 네트형 게임에 꼭 있어야 할 규칙을 골라요.',
              teacher: '"공을 차든 던지든, 점수를 어떻게 얻는지가 갈래를 정해요." 네트형 규칙 고르기에서 "공을 들고 상대 칸으로 달려가요"를 고른 학생에게 "네트형에서는 상대 칸에 들어가나요?"라고 되묻는다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '같은 고무공을 쓰는 세 규칙을 알맞은 갈래와 이어요.', toolOptions: { mode: 'match', topic: '고무공 하나, 세 규칙', slots: [{ id: 'area', label: '영역형' }, { id: 'field', label: '필드형' }, { id: 'net', label: '네트형' }], cards: ['상대 끝줄 뒤에서 패스를 받으면 1점', '공을 차고 콘 셋을 돌아오면 1점', '낮은 줄 너머 상대 칸 바닥에 닿으면 1점'] }, target: { match: { area: '상대 끝줄 뒤에서 패스를 받으면 1점', field: '공을 차고 콘 셋을 돌아오면 1점', net: '낮은 줄 너머 상대 칸 바닥에 닿으면 1점' } }, levels: { easy: { state: { at: { '상대 끝줄 뒤에서 패스를 받으면 1점': 0 } } } }, difficulty: 0.2 },
                { prompt: '네트형 게임이 되려면 꼭 있어야 할 규칙만 골라요.', toolOptions: { mode: 'pick', topic: '네트형 규칙', basket: '꼭 있을 규칙', cards: ['가운데 줄로 두 편 칸을 나눠요', '상대 칸 바닥에 공이 닿으면 1점이에요', '상대 칸에 들어가지 않아요', '공을 들고 상대 칸으로 달려가요'] }, target: { pick: ['가운데 줄로 두 편 칸을 나눠요', '상대 칸 바닥에 공이 닿으면 1점이에요', '상대 칸에 들어가지 않아요'] }, levels: { challenge: { prompt: '네트형 게임이 되려면 꼭 있어야 할 규칙만 골라요. 다른 갈래의 규칙이 둘 섞여 있어요.', toolOptions: { cards: ['가운데 줄로 두 편 칸을 나눠요', '상대 칸 바닥에 공이 닿으면 1점이에요', '상대 칸에 들어가지 않아요', '공을 들고 상대 칸으로 달려가요', '공을 차고 콘을 돌면 1점이에요'] } } }, difficulty: 0.25,
                  hints: ['네트형은 두 편이 칸을 나누어 쓰고, 공을 넘겨 점수를 얻어요.', '상대 칸에 들어가거나 콘을 도는 규칙이 바구니에 있는지 보세요.', '칸 나누기, 상대 칸 바닥에 닿으면 점수, 상대 칸에 들어가지 않기가 네트형 규칙이에요.'] },
                { prompt: '필드형 게임이 되려면 꼭 있어야 할 규칙만 골라요.', toolOptions: { mode: 'pick', topic: '필드형 규칙', basket: '꼭 있을 규칙', cards: ['공격과 수비를 번갈아 해요', '공을 차거나 친 뒤 콘(베이스)을 돌아요', '수비가 공을 먼저 콘에 보내면 아웃이에요', '상대 골대에 공을 넣으면 1점이에요'] }, target: { pick: ['공격과 수비를 번갈아 해요', '공을 차거나 친 뒤 콘(베이스)을 돌아요', '수비가 공을 먼저 콘에 보내면 아웃이에요'] }, difficulty: 0.25,
                  hints: ['필드형은 공격하는 편과 수비하는 편이 나뉘어 번갈아 해요.', '골대에 넣는 규칙이 바구니에 들어가 있는지 보세요.', '번갈아 공격·수비, 치고 콘 돌기, 수비가 먼저 보내면 아웃이 필드형 규칙이에요.'] },
              ],
            },
            {
              id: 'a2', title: '활동 2. 새 게임 만드는 차례 정하기', minutes: 6, tool: 'timer',
              task: '모둠이 새 게임을 만드는 차례를 정하고, 시험 경기 시간을 타이머에 맞춰요.',
              teacher: '"안전 규칙은 언제 정해야 할까요? 경기 뒤에요, 경기 전에요?" 시험 경기 뒤에 규칙을 고치는 단계가 있다는 것을 짚는다. 모둠 회의는 한 사람씩 돌아가며 규칙 하나씩 말하게 해 한 사람이 다 정하지 않게 한다.',
              levels: { easy: { showTotal: true }, base: {}, challenge: {} },
              items: [
                { prompt: '모둠이 새 게임을 만드는 차례대로 카드를 놓아요.', toolOptions: { cards: ['3분 시험 경기 하기', '점수 얻는 규칙 정하기', '갈래 고르기', '시험 경기 뒤 규칙 고치기', '안전 규칙 정하기'] }, target: { order: ['갈래 고르기', '점수 얻는 규칙 정하기', '안전 규칙 정하기', '3분 시험 경기 하기', '시험 경기 뒤 규칙 고치기'] }, levels: { easy: { state: { order: ['갈래 고르기', '점수 얻는 규칙 정하기', '3분 시험 경기 하기', '안전 규칙 정하기', '시험 경기 뒤 규칙 고치기'] } } }, difficulty: 0.2 },
                { prompt: '3분 시험 경기, 2분 규칙 고치기, 다시 3분 경기를 하도록 타이머를 맞춰요.', toolOptions: { plan: { work: 120, rest: 60, rounds: 3 }, workStep: 30, restStep: 30 }, target: { plan: { work: 180, rest: 120, rounds: 2 } }, difficulty: 0.25 },
                { prompt: '모둠 친구와 돌아가며 규칙을 하나씩 말해 새 게임 규칙 카드를 써요. 다 쓰면 ‘다 했어요’를 눌러요.', free: true, talk: true },
              ],
            },
            {
              id: 'a3', title: '활동 3. 새 게임 해 보고 다른 모둠 게임 맞히기', minutes: 12, tool: 'timer',
              task: '우리 모둠 게임을 3분 해 보고 규칙을 고친 뒤 다시 해요. 그다음 다른 모둠 게임을 해 보고 어느 갈래인지 맞혀요.',
              teacher: '모둠 두 곳씩 짝지어 서로의 게임을 바꿔 한다. "다른 모둠 게임을 해 보고, 점수 얻는 규칙을 보고 갈래를 맞혀 봐요." 규칙을 고칠 때 "누가 다쳤거나 다칠 뻔한 장면이 있었나요?"를 먼저 묻는다.',
              levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
              items: [
                { prompt: '새 게임을 하기 전에 우리 모둠 경기장을 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['경기장 끝줄과 옆줄을 콘으로 표시했어요', '옆 모둠 경기장과 3걸음 넘게 떨어졌어요', '공을 주울 때 멈추는 신호를 정했어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '우리 게임과 다른 모둠 게임을 해 보아요. 다 하면 ‘짝·모둠과 함께 해 보았어요’를 눌러요.', free: true },
                { prompt: '우리 게임의 두 판 점수(우리 편 기준)와 고친 규칙 수를 적어요.', toolOptions: { fields: [{ label: '1판 점수', unit: '점' }, { label: '2판 점수', unit: '점' }, { label: '고친 규칙', unit: '개' }] }, target: { records: true }, levels: { easy: { prompt: '우리 게임의 1판 점수와 2판 점수를 적어요.', target: { records: 2 } } }, difficulty: 0.15 },
              ],
            },
          ],
          {
            teacher: '"다른 모둠 게임은 어느 갈래였나요? 무엇을 보고 알았나요?" 두세 모둠이 답한다. "규칙을 바꾸었더니 갈래가 바뀌었다"는 말을 학생에게서 끌어낸다. 다음 시간에는 영역형 변형 게임을 정식으로 해 본다고 알린다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '새 규칙은 어느 갈래?', slots: [{ id: 'area', label: '영역형' }, { id: 'field', label: '필드형' }, { id: 'net', label: '네트형' }], cards: ['공을 던져 상대 훌라후프 안에 넣으면 1점', '공을 굴려 받은 뒤 콘 둘을 돌면 1점', '긴 의자 너머 상대 칸에 공이 닿으면 1점'] }, prompt: '처음 보는 새 규칙 세 가지를 알맞은 갈래와 이어요.', target: { match: { area: '공을 던져 상대 훌라후프 안에 넣으면 1점', field: '공을 굴려 받은 뒤 콘 둘을 돌면 1점', net: '긴 의자 너머 상대 칸에 공이 닿으면 1점' } }, difficulty: 0.3 },
              { type: 'choice', prompt: '같은 공으로 다른 갈래의 게임을 만들려면 무엇을 바꾸나요?', options: ['공의 색깔', '점수 얻는 규칙', '모둠 사람 수'], answer: 1, difficulty: 0.15, explain: '점수 얻는 방법이 갈래를 정해요.' },
              { type: 'short', prompt: '우리 모둠 게임의 점수 규칙과 그 게임의 갈래를 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '우리 모둠 새 게임',
          items: [
            { type: 'table', prompt: '우리 모둠 게임 규칙 카드를 쓰세요.', columns: ['갈래', '점수 얻는 규칙', '안전 규칙'], rows: 2 },
            { type: 'choice', prompt: '"공을 차고 콘 셋을 돌아오면 1점" 규칙의 게임은?', options: ['영역형', '필드형', '네트형'], answer: '필드형' },
            { type: 'table', prompt: '시험 경기 뒤 고친 규칙과 고친 까닭을 쓰세요.', columns: ['고치기 전', '고친 뒤', '고친 까닭'], rows: 2 },
            { type: 'table', prompt: '다른 모둠 게임을 해 보고 쓰세요.', columns: ['모둠', '점수 얻는 규칙', '갈래'], rows: 2 },
            { type: 'short', prompt: '규칙을 바꾸면 갈래가 바뀌는 까닭을 한 줄로 쓰세요.' },
          ],
          easy: {
            note: '골대·끝줄에 넣기 = 영역형, 치고 콘 돌기 = 필드형, 줄 너머 떨어뜨리기 = 네트형.',
            items: [
              { type: 'choice', prompt: '"줄 너머 상대 칸에 공이 닿으면 1점"은?', options: ['영역형', '필드형', '네트형'], answer: '네트형' },
              { type: 'short', prompt: '우리 모둠 게임의 점수 규칙을 쓰세요.' },
              { type: 'short', prompt: '우리 모둠 게임의 안전 규칙을 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 놓으면 바로 표시되고 첫 카드가 미리 놓여 있으며, 타이머 전체 시간이 보여요. 점수 두 칸만 적어도 돼요.',
          base: '점수 규칙으로 갈래를 가르고, 모둠 게임을 만들어 시험 경기 뒤 고쳐요.',
          challenge: '네트형 규칙 고르기에 다른 갈래 함정 카드가 둘 섞이고, 시간 재기 도구로 시험 경기를 직접 재요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 공이나 몸 부위가 같으면 같은 갈래라고 여긴다 → 같은 고무공으로 세 규칙을 보여 준다. ② 안전 규칙을 경기 뒤에 생각한다 → 차례 카드에서 시험 경기 전에 둔다. ③ 한 사람이 규칙을 다 정한다 → 돌아가며 한 가지씩 말하게 한다. 모둠 게임은 교사가 경기장 사이를 돌며 위험한 규칙(몸 밀기·얼굴 높이 던지기)이 없는지 본다.',
      }),
      // ───────────────────────── 28 ─────────────────────────
      L(28, {
        title: '끝줄 패스 게임에서 규칙 지키며 득점 장면 짚기',
        objective: '영역형 변형 게임인 끝줄 패스 게임에 규칙을 지키며 참여하고, 영역형 득점 방법이 드러난 장면을 짚어 말할 수 있다.',
        illustration: art('two teams of children in paper bibs passing a soft ball toward a striped end zone on a schoolyard, cones marking the lines', [
          { motif: 'sun', x: 410, y: 52, s: 0.7 }, { motif: 'cloud', x: 100, y: 52 }, { motif: 'hills', y: 222 },
          { motif: 'flower', x: 60, y: 212 }, { motif: 'star', x: 250, y: 100 },
          { motif: 'text', x: 240, y: 165, text: '끝줄까지 패스!', size: 24 },
        ]),
        safety: [WARM, BALL, LOOK, STOP],
        stages: stages(
          {
            teacher: '"오늘 할 끝줄 패스 게임은 진짜 경기가 아니라 변형 게임이에요. 그러면 규칙은 대충 지켜도 될까요?" 대답을 듣고 "규칙이 없으면 누가 이겼는지, 누가 다쳤는지 어떻게 될까요?"라고 묻는다. 규칙 세 가지를 칠판에 쓴다: 공을 가진 사람은 세 걸음까지, 상대 끝줄 구역 안에서 패스를 받으면 1점, 몸이 닿으면 상대 공.',
            student: '변형 게임에서도 규칙을 지켜야 하는 까닭을 생각해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 경기 중 규칙 상황 판단하기', minutes: 7, tool: 'emotion',
              task: '끝줄 패스 게임에서 생길 수 있는 상황을 보고 규칙에 맞는 판단을 골라요.',
              teacher: '"연습 게임이니까 괜찮아"라는 말이 나오면 "그럼 진 편도 \'연습이니까 점수 안 셀래\'라고 하면 어떨까요?"라고 되묻는다. 몸이 닿으면 상대 공이 되는 까닭이 다치지 않기 위해서라는 것도 짚는다.',
              levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '민호가 공을 들고 다섯 걸음 달려 끝줄 구역에 들어갔어요. 어떻게 판정할까요?', toolOptions: { mode: 'branch', situation: '민호가 공을 들고 다섯 걸음 달려 끝줄 구역에 들어갔어요. 우리 편이 1점이라고 해요.', choices: [{ id: 'point', text: '끝줄에 들어갔으니 1점이에요', result: '상대 편이 억울해서 게임이 멈췄어요.', mood: '화남', why: '공을 가진 사람은 세 걸음까지예요.' }, { id: 'rule', text: '세 걸음을 넘었으니 점수 없이 상대 공이에요', result: '두 편 모두 규칙을 믿고 게임을 이었어요.', mood: '편안함' }, { id: 'again', text: '연습 게임이니 그냥 다시 해요', result: '규칙이 흐려져 같은 일이 또 생겼어요.', mood: '걱정', why: '변형 게임도 규칙대로 판정해요.' }] }, target: { choice: 'rule' }, levels: { easy: { toolOptions: { choices: [{ id: 'point', text: '끝줄에 들어갔으니 1점이에요', result: '상대 편이 억울해서 게임이 멈췄어요.', mood: '화남', why: '공을 가진 사람은 세 걸음까지예요.' }, { id: 'rule', text: '세 걸음을 넘었으니 점수 없이 상대 공이에요', result: '두 편 모두 규칙을 믿고 게임을 이었어요.', mood: '편안함' }] } } }, difficulty: 0.15 },
                { prompt: '친구가 "연습 게임이니 몸으로 막아도 돼"라고 해요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '친구가 "연습 게임이니 몸으로 밀어서 막아도 돼"라고 해요.', choices: [{ id: 'push', text: '"좋아, 세게 막자"', result: '두 친구가 부딪혀 넘어졌어요.', mood: '걱정', why: '몸이 닿지 않는 규칙은 다치지 않으려고 있어요.' }, { id: 'arm', text: '"몸은 닿지 않게, 패스 길 앞에 서서 막자"', result: '부딪히지 않고 공을 가로챘어요.', mood: '뿌듯함' }, { id: 'none', text: '"그럼 막지 말자"', result: '상대가 쉽게 점수를 냈어요.', mood: '속상함', why: '규칙 안에서 막는 방법이 있어요.' }] }, target: { choice: 'arm' }, difficulty: 0.2 },
                { prompt: '점수가 0 대 4가 되자 진 편이 "그만하자"고 해요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '끝줄 패스 게임 점수가 0 대 4가 되자 진 편이 "그만하자"고 해요.', choices: [{ id: 'stop', text: '"그래, 재미없으니 그만하자"', result: '아무도 무엇을 바꿀지 알지 못했어요.', mood: '속상함', why: '정한 시간까지 규칙대로 해요.' }, { id: 'talk', text: '"작전 시간에 패스 방법을 바꿔 보고 끝까지 하자"', result: '마지막에 두 점을 따라붙었어요.', mood: '신남' }, { id: 'change', text: '"우리 편만 네 걸음까지 되게 하자"', result: '상대 편이 공정하지 않다고 했어요.', mood: '화남', why: '규칙은 두 편에 똑같아요.' }] }, target: { choice: 'talk' }, difficulty: 0.2 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 끝줄 패스 게임 하기', minutes: 13, tool: 'timer',
              task: '안전 점검 뒤 4명씩 두 편이 끝줄 패스 게임을 해요. 5분 경기, 2분 작전 시간, 다시 5분 경기예요. 경기 뒤 우리 편 점수를 적어요.',
              teacher: '경기장은 가로 15m·세로 10m, 양쪽 끝 2m를 끝줄 구역으로 콘을 놓는다. 공은 부드러운 공을 쓴다. 기다리는 모둠은 심판을 맡아 세 걸음과 몸 닿기를 판정한다. "득점이 나면 손을 들어 \'끝줄!\'이라고 외쳐요."',
              levels: { easy: { showTotal: true }, base: {}, challenge: { stopwatch: true } },
              items: [
                { prompt: '끝줄 패스 게임을 하기 전에 경기장을 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['끝줄 구역이 콘으로 표시되어 있어요', '경기장 밖으로 벽·기둥까지 2m 넘게 떨어졌어요', '공은 부드러운 공이에요'] }, target: { safety: true }, levels: { challenge: { prompt: '끝줄 패스 게임 전에 경기장과 내 몸까지 모두 확인해 표시해요. 살필 것이 하나 더 있어요.', toolOptions: { safety: ['끝줄 구역이 콘으로 표시되어 있어요', '경기장 밖으로 벽·기둥까지 2m 넘게 떨어졌어요', '공은 부드러운 공이에요', '안경·장신구를 벗거나 단단히 고정했어요'] } } }, difficulty: 0.1 },
                { prompt: '5분 경기, 2분 작전 시간, 다시 5분 경기를 하도록 타이머를 맞춰요.', toolOptions: { plan: { work: 240, rest: 60, rounds: 3 }, workStep: 60, restStep: 60 }, target: { plan: { work: 300, rest: 120, rounds: 2 } }, difficulty: 0.25 },
                { prompt: '규칙을 지키며 끝줄 패스 게임을 해요. 다 하면 ‘짝·모둠과 함께 해 보았어요’를 눌러요.', free: true },
                { prompt: '두 경기에서 우리 편이 얻은 점수를 적어요.', toolOptions: { fields: [{ label: '1경기', unit: '점' }, { label: '2경기', unit: '점' }] }, target: { records: true }, difficulty: 0.1 },
              ],
            },
            {
              id: 'a3', title: '활동 3. 영역형 득점 방법이 드러난 장면 짚기', minutes: 6, tool: 'mindmap',
              task: '경기 장면 카드 가운데 영역형 득점 방법이 드러난 장면을 골라요. 그다음 짝에게 오늘 우리 편 득점 장면 하나를 말해요.',
              teacher: '"영역형은 상대 쪽 땅으로 들어가 끝줄이나 골대에 공을 보내 점수를 얻어요. 오늘 그 장면이 어디서 나왔나요?" 네트를 넘기거나 콘을 도는 장면은 다른 갈래라는 것을 짚는다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '영역형 득점 방법이 드러난 장면만 골라요.', toolOptions: { mode: 'pick', topic: '경기 장면', basket: '영역형 득점', cards: ['끝줄 구역 안에서 패스를 받아 1점을 얻었어요', '상대 쪽으로 패스를 이어 끝줄 가까이 갔어요', '공을 차고 콘을 돌아 들어왔어요', '줄 너머 상대 칸에 공을 떨어뜨렸어요'] }, target: { pick: ['끝줄 구역 안에서 패스를 받아 1점을 얻었어요', '상대 쪽으로 패스를 이어 끝줄 가까이 갔어요'] }, difficulty: 0.2,
                  hints: ['영역형은 상대 쪽 땅으로 들어가 끝줄이나 골대로 공을 보내요.', '콘을 돌거나 줄 너머로 떨어뜨리는 장면이 바구니에 있는지 보세요.', '끝줄에서 패스를 받은 장면과 패스로 끝줄 가까이 간 장면이 영역형 득점 방법이에요.'] },
                { prompt: '경기 장면과 지킨 규칙을 이어요.', toolOptions: { mode: 'match', topic: '장면과 규칙', slots: [{ id: 'step', label: '공을 받자마자 멈춰 세 걸음 안에 패스했어요' }, { id: 'body', label: '상대와 팔 하나 거리를 두고 패스 길을 막았어요' }, { id: 'zone', label: '끝줄 구역 안에서 받은 공만 점수로 셌어요' }], cards: ['세 걸음 규칙', '몸 닿지 않기 규칙', '득점 규칙'] }, target: { match: { step: '세 걸음 규칙', body: '몸 닿지 않기 규칙', zone: '득점 규칙' } }, levels: { easy: { state: { at: { '세 걸음 규칙': 0 } } } }, difficulty: 0.2 },
                { prompt: '짝에게 오늘 우리 편 득점 장면 하나를 "누가, 어디서, 어떻게"로 말해요. 말한 뒤 ‘다 했어요’를 눌러요.', free: true, talk: true },
              ],
            },
          ],
          {
            teacher: '"오늘 규칙 때문에 게임이 더 공정했던 순간이 있었나요?" 두세 명이 답한다. 득점 장면을 말할 때 "끝줄", "패스" 같은 말이 들어가는지 듣는다. 다음 시간에는 필드형·네트형 변형 게임을 한다고 알린다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '축구 장면', basket: '영역형 득점', cards: ['공을 상대 골대 안에 차 넣었어요', '패스로 상대 골대 앞까지 갔어요', '배트로 공을 치고 1루로 달렸어요', '네트 너머 상대 코트에 공을 떨어뜨렸어요'] }, prompt: '축구 경기 장면 가운데 영역형 득점 방법이 드러난 장면만 골라요.', target: { pick: ['공을 상대 골대 안에 차 넣었어요', '패스로 상대 골대 앞까지 갔어요'] }, difficulty: 0.2 },
              { type: 'choice', prompt: '변형 게임의 규칙에 대한 생각으로 알맞은 것은?', options: ['진짜 경기가 아니니 안 지켜도 돼요', '변형 게임도 정한 규칙을 두 편이 똑같이 지켜요', '이기는 편만 지켜요'], answer: 1, difficulty: 0.15, explain: '규칙이 있어야 공정하고 안전하게 겨룰 수 있어요.' },
              { type: 'short', prompt: '오늘 게임에서 영역형 득점 방법이 드러난 장면 하나를 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '끝줄 패스 게임',
          items: [
            { type: 'table', prompt: '끝줄 패스 게임 규칙을 쓰세요.', columns: ['규칙', '내용'], cells: [['걸음', ''], ['득점', ''], ['몸 닿기', '']] },
            { type: 'table', prompt: '두 경기에서 우리 편 점수를 쓰세요.', columns: ['1경기', '2경기'], rows: 1 },
            { type: 'choice', prompt: '공을 들고 다섯 걸음 달려 끝줄에 들어갔다면?', options: ['1점이에요', '점수 없이 상대 공이에요', '다시 해요'], answer: '점수 없이 상대 공이에요' },
            { type: 'check', prompt: '오늘 지킨 약속에 ✓ 하세요.', options: ['세 걸음 안에 패스했어요', '몸이 닿지 않게 막았어요', '진 판에도 끝까지 했어요'] },
            { type: 'short', prompt: '오늘 영역형 득점 방법이 드러난 장면을 "누가, 어디서, 어떻게"로 쓰세요.' },
          ],
          easy: {
            note: '세 걸음까지, 끝줄 구역에서 받으면 1점, 몸이 닿으면 상대 공.',
            items: [
              { type: 'choice', prompt: '끝줄 패스 게임은 어느 갈래인가요?', options: ['영역형', '필드형', '네트형'], answer: '영역형' },
              { type: 'choice', prompt: '변형 게임 규칙은?', options: ['지켜요', '안 지켜도 돼요'], answer: '지켜요' },
              { type: 'short', prompt: '오늘 우리 편 점수를 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '판단 보기가 둘이고, 카드를 놓으면 바로 표시돼요. 타이머 전체 시간이 보여요.',
          base: '규칙 상황을 판단하고, 게임에 참여해 영역형 득점 장면을 짚어요.',
          challenge: '판단 결과는 맞힌 뒤에만 보이고, 안전 점검 항목이 더해지며 시간 재기 도구로 경기 시간을 재요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 변형 게임은 진짜 경기가 아니므로 규칙을 지키지 않아도 된다고 여긴다 → 규칙이 없으면 점수와 안전을 믿을 수 없다는 것을 상황으로 보인다. ② 몸으로 밀어 막는다 → 몸이 닿으면 상대 공 규칙과 팔 하나 거리 막기를 미리 시범한다. ③ 점수 차가 크면 포기한다 → 작전 시간에 방법을 바꾸게 한다. 기다리는 모둠이 심판을 맡고, 교사는 경기장 옆에서 몸 닿기를 관찰한다.',
      }),
      // ───────────────────────── 29 ─────────────────────────
      L(29, {
        title: '발야구와 풍선 배구 정거장에서 득점 장면 찾기',
        objective: '필드형 발야구와 네트형 풍선 배구 변형 게임에 규칙을 지키며 참여하고, 갈래마다 득점 방법이 드러난 장면을 가려 말할 수 있다.',
        illustration: art('one half of a gym with children kicking a ball and running around paper base cones, the other half with children tapping a balloon over a low rope net', [
          { motif: 'sun', x: 410, y: 52, s: 0.6 }, { motif: 'cloud', x: 110, y: 50 }, { motif: 'hills', y: 222 },
          { motif: 'star', x: 120, y: 120 }, { motif: 'cloud', x: 330, y: 110, s: 0.6 },
          { motif: 'text', x: 240, y: 170, text: '베이스 · 네트', size: 24 },
        ]),
        safety: [WARM, BALL, LOOK, NET],
        stages: stages(
          {
            teacher: '"지난 시간 끝줄 패스 게임은 끝줄에서 받아 점수를 얻었어요. 오늘 두 정거장에서는 점수를 어떻게 얻을까요?" 발야구는 차고 콘을 돌아 홈을 밟으면 1점, 풍선 배구는 줄 너머 상대 칸 바닥에 풍선이 닿으면 1점이라는 규칙을 학생이 말하게 한다. "두 게임 모두 변형 게임이지만 규칙대로 판정해요."',
            student: '발야구와 풍선 배구가 점수를 어떻게 얻는지 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 두 정거장 규칙과 차례 확인하기', minutes: 6, tool: 'timer',
              task: '발야구 공격 차례를 놓고, 두 정거장으로 가기 전에 안전 점검을 해요.',
              teacher: '발야구 정거장: 굴려 준 공을 차고 콘 세 개를 돌아 홈 콘을 밟으면 1점, 수비가 공을 잡아 주자보다 먼저 콘에 갖다 대면 아웃. 풍선 배구 정거장: 허리 높이 줄, 한 사람이 연달아 두 번 칠 수 없고 세 번 안에 넘긴다. "주자는 콘을 돌 때 바깥쪽으로 돌아 수비와 부딪히지 않아요."',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '발야구에서 공격하는 사람의 차례대로 카드를 놓아요.', toolOptions: { cards: ['홈 콘을 밟아 1점 얻기', '굴러오는 공을 차기', '콘을 바깥쪽으로 돌며 달리기', '홈 뒤 대기선에서 기다리기'] }, target: { order: ['홈 뒤 대기선에서 기다리기', '굴러오는 공을 차기', '콘을 바깥쪽으로 돌며 달리기', '홈 콘을 밟아 1점 얻기'] }, levels: { easy: { state: { order: ['홈 뒤 대기선에서 기다리기', '굴러오는 공을 차기', '홈 콘을 밟아 1점 얻기', '콘을 바깥쪽으로 돌며 달리기'] } } }, difficulty: 0.15 },
                { prompt: '두 정거장으로 가기 전에 발야구장과 풍선 배구장을 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['발야구 대기선이 홈에서 3m 뒤에 있어요', '풍선 배구 줄이 허리 높이로 단단히 묶였어요', '두 정거장 사이가 5m 넘게 떨어졌어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '6분씩 두 정거장을 돌고, 정거장을 바꾸는 데 1분 쉬도록 타이머를 맞춰요.', toolOptions: { plan: { work: 300, rest: 30, rounds: 3 }, workStep: 60, restStep: 30 }, target: { plan: { work: 360, rest: 60, rounds: 2 } }, difficulty: 0.25 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 두 정거장 게임 하기', minutes: 13, tool: 'timer',
              task: '모둠이 발야구와 풍선 배구를 6분씩 해요. 정거장마다 우리 편이 얻은 점수를 적어요.',
              teacher: '반을 넷으로 나누어 두 모둠은 발야구, 두 모둠은 풍선 배구를 한다. 공 굴려 주기는 교사나 모둠의 정한 사람이 천천히 한다. "풍선 배구는 손바닥으로 밀어 올리고, 줄을 잡거나 넘어가지 않아요." 6분이 끝나면 정거장을 바꾼다.',
              levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
              items: [
                { prompt: '두 정거장 게임을 규칙대로 해요. 다 하면 ‘짝·모둠과 함께 해 보았어요’를 눌러요.', free: true },
                { prompt: '정거장마다 우리 편이 얻은 점수를 적어요.', toolOptions: { fields: [{ label: '발야구', unit: '점' }, { label: '풍선 배구', unit: '점' }] }, target: { records: true }, difficulty: 0.1 },
                { prompt: '정거장마다 우리 편이 아웃되거나 실점한 횟수도 적어요.', toolOptions: { fields: [{ label: '발야구 아웃', unit: '번' }, { label: '풍선 배구 실점', unit: '점' }] }, target: { records: true }, levels: { easy: { prompt: '발야구 아웃 횟수나 풍선 배구 실점 가운데 하나를 적어요.', target: { records: 1 } } }, difficulty: 0.15 },
              ],
            },
            {
              id: 'a3', title: '활동 3. 득점 장면과 수비 장면 가르기', minutes: 7, tool: 'mindmap',
              task: '두 정거장에서 본 장면 카드를 필드형 득점·네트형 득점·수비 장면으로 나누고, 규칙에 맞는 판정과 이어요.',
              teacher: '"풍선이 상대 칸 바닥에 닿은 것은 누구의 득점인가요?" 넘긴 편의 득점이라는 것을 확인한다. 수비 장면도 점수를 막는 중요한 장면이라는 것을 짚는다. 판정 잇기에서는 오늘 정한 변형 규칙(두 번 연달아 치기 금지, 옆줄 밖은 다시 차기)으로만 판정한다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '두 정거장에서 본 장면을 세 칸으로 나누어요.', toolOptions: { topic: '두 정거장 장면', slots: [{ id: 'field', label: '필드형 득점' }, { id: 'net', label: '네트형 득점' }, { id: 'def', label: '수비 장면' }], cards: ['공을 차고 콘을 모두 돌아 홈을 밟았어요', '넘긴 풍선이 상대 칸 바닥에 닿았어요', '찬 공을 잡아 주자보다 먼저 콘에 댔어요', '떨어지는 풍선을 받아 위로 올렸어요'] }, target: { sort: { field: ['공을 차고 콘을 모두 돌아 홈을 밟았어요'], net: ['넘긴 풍선이 상대 칸 바닥에 닿았어요'], def: ['찬 공을 잡아 주자보다 먼저 콘에 댔어요', '떨어지는 풍선을 받아 위로 올렸어요'] } }, levels: { easy: { state: { at: { '공을 차고 콘을 모두 돌아 홈을 밟았어요': 0 } } } }, difficulty: 0.25,
                  hints: ['점수가 난 장면인지, 점수를 막은 장면인지 먼저 가려 보세요.', '공을 잡거나 풍선을 받아 올린 장면은 점수를 막은 장면이에요. 그 카드가 득점 칸에 있는지 보세요.', '홈을 밟은 장면은 필드형 득점, 상대 칸 바닥에 닿은 장면은 네트형 득점, 잡고 받아 올린 장면은 수비예요.'] },
                { prompt: '오늘 정한 규칙으로 장면과 판정을 이어요.', toolOptions: { mode: 'match', topic: '규칙대로 판정', slots: [{ id: 'skip', label: '주자가 둘째 콘을 밟지 않고 지나갔어요' }, { id: 'twice', label: '풍선을 한 사람이 연달아 두 번 쳤어요' }, { id: 'out', label: '찬 공이 옆줄 밖으로 나갔어요' }], cards: ['그 주자는 아웃이에요', '상대 편 1점이에요', '다시 차요'] }, target: { match: { skip: '그 주자는 아웃이에요', twice: '상대 편 1점이에요', out: '다시 차요' } }, levels: { easy: { state: { at: { '그 주자는 아웃이에요': 0 } } } }, difficulty: 0.25,
                  hints: ['오늘 정거장에서 정한 규칙을 하나씩 떠올려 보세요.', '네트형에서 반칙을 하면 상대가 점수를 얻어요. 그 카드가 풍선 장면과 이어졌는지 보세요.', '콘을 밟지 않으면 아웃, 연달아 두 번 치면 상대 1점, 옆줄 밖은 다시 차기예요.'] },
                { prompt: '짝에게 두 정거장의 득점 방법이 어떻게 달랐는지 장면을 들어 말해요. 말한 뒤 ‘다 했어요’를 눌러요.', free: true, talk: true },
              ],
            },
          ],
          {
            teacher: '"발야구와 풍선 배구, 점수를 얻은 장면이 어떻게 달랐나요?" 학생 말로 "베이스를 돌아 들어와요", "상대 칸 바닥에 떨어뜨려요"를 정리한다. 출구 1번은 야구·배드민턴 장면이니 정거장 장면과 견주어 스스로 나누게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { topic: '경기 장면', slots: [{ id: 'field', label: '필드형 득점' }, { id: 'net', label: '네트형 득점' }, { id: 'def', label: '수비 장면' }], cards: ['타자가 친 뒤 베이스를 돌아 홈을 밟았어요', '셔틀콕이 상대 코트 바닥에 떨어졌어요', '날아온 공을 잡아 타자를 아웃시켰어요'] }, prompt: '야구와 배드민턴 장면을 세 칸으로 나누어요.', target: { sort: { field: ['타자가 친 뒤 베이스를 돌아 홈을 밟았어요'], net: ['셔틀콕이 상대 코트 바닥에 떨어졌어요'], def: ['날아온 공을 잡아 타자를 아웃시켰어요'] } }, difficulty: 0.25 },
              { type: 'choice', prompt: '풍선 배구에서 넘긴 풍선이 상대 칸 바닥에 닿으면?', options: ['넘긴 편이 1점을 얻어요', '받는 편이 1점을 얻어요', '다시 해요'], answer: 0, difficulty: 0.15, explain: '네트형은 상대 코트에 떨어뜨린 편이 점수를 얻어요.' },
              { type: 'mood', prompt: '두 정거장 게임에 참여한 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '두 정거장 득점 장면',
          items: [
            { type: 'table', prompt: '정거장마다 점수 얻는 방법과 우리 편 점수를 쓰세요.', columns: ['정거장', '갈래', '점수 얻는 방법', '우리 편 점수'], cells: [['발야구', '', '', ''], ['풍선 배구', '', '', '']] },
            { type: 'choice', prompt: '주자가 콘을 밟지 않고 지나가면?', options: ['1점이에요', '그 주자는 아웃이에요', '다시 차요'], answer: '그 주자는 아웃이에요' },
            { type: 'table', prompt: '오늘 본 득점 장면과 수비 장면을 하나씩 쓰세요.', columns: ['득점 장면', '수비 장면'], rows: 1 },
            { type: 'check', prompt: '오늘 지킨 약속에 ✓ 하세요.', options: ['콘을 바깥쪽으로 돌았어요', '풍선 줄을 잡거나 넘어가지 않았어요', '대기선 뒤에서 기다렸어요'] },
            { type: 'short', prompt: '필드형과 네트형의 득점 방법이 어떻게 다른지 한 줄로 쓰세요.' },
          ],
          easy: {
            note: '발야구 = 차고 콘 돌아 홈 밟기, 풍선 배구 = 상대 칸 바닥에 떨어뜨리기.',
            items: [
              { type: 'choice', prompt: '발야구는 어느 갈래인가요?', options: ['영역형', '필드형', '네트형'], answer: '필드형' },
              { type: 'choice', prompt: '풍선 배구는 어느 갈래인가요?', options: ['영역형', '필드형', '네트형'], answer: '네트형' },
              { type: 'short', prompt: '오늘 우리 편이 점수를 얻은 장면 하나를 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 놓으면 바로 표시되고 첫 카드가 미리 놓여 있어요. 아웃·실점은 한 칸만 적어도 돼요.',
          base: '두 정거장 게임에 참여하고, 득점·수비 장면과 판정을 가려요.',
          challenge: '시간 재기 도구로 정거장 시간을 직접 재요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 변형 게임은 규칙을 대충 해도 된다고 여긴다 → 정거장 규칙을 시작 전에 학생 말로 확인하고 그대로 판정한다. ② 풍선이 상대 칸에 떨어진 것을 받는 편 점수로 헷갈린다 → 넘긴 편 득점을 짚는다. ③ 콘을 안쪽으로 돌며 수비와 부딪힌다 → 바깥쪽 돌기 약속. 교사는 두 정거장 사이에 서서 주자와 수비가 엇갈리는 자리를 관찰한다.',
      }),
      // ───────────────────────── 30 ─────────────────────────
      L(30, {
        title: '세 갈래 게임에서 많이 나온 움직임 견주어 정리하기',
        objective: '세 갈래 게임의 움직임 관찰 자료를 읽어 갈래마다 많이 나온 움직임을 견주고, 다음에 더 익히고 싶은 갈래를 까닭과 함께 정할 수 있다.',
        illustration: art('children gathered around a big paper chart with tally marks for passing, running around bases and tapping a balloon, three colored columns', [
          { motif: 'sun', x: 410, y: 52, s: 0.6 }, { motif: 'cloud', x: 100, y: 52 }, { motif: 'hills', y: 222 },
          { motif: 'leaf', x: 80, y: 196 }, { motif: 'star', x: 360, y: 110 },
          { motif: 'text', x: 240, y: 150, text: '어떤 움직임이 많았나', size: 22 },
        ]),
        safety: [WARM, SPACE, BALL, STOP],
        stages: stages(
          {
            teacher: '"끝줄 패스 게임, 발야구, 풍선 배구를 해 보았어요. 세 게임에서 여러분 몸은 똑같이 움직였나요?" "패스를 많이 했어요", "많이 달렸어요" 같은 대답을 칠판의 세 칸에 나누어 적는다. "선생님이 지난 두 시간 동안 세어 둔 관찰 기록으로 견주어 봐요."',
            student: '세 게임에서 내 몸이 가장 많이 한 움직임을 떠올려 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 관찰 기록 그래프 읽기', minutes: 10, tool: 'chart',
              task: '우리 반 세 게임의 움직임 관찰 그래프를 읽고, 갈래마다 가장 많이 나온 움직임을 찾아요.',
              teacher: '"막대가 가장 긴 것이 그 게임에서 가장 많이 나온 움직임이에요." 그래프 제목에서 어느 게임인지 먼저 읽게 한다. 풍선 배구에서 받아 올리기가 넘기기보다 많은 까닭(세 번 안에 넘기므로)을 묻는다.',
              levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '끝줄 패스 게임(영역형)에서 가장 많이 나온 움직임을 골라요.', toolOptions: { type: 'bar', mode: 'read', title: '끝줄 패스 게임에서 나온 움직임(우리 반 관찰)', unit: '번', xLabel: '움직임', data: [['패스', 24], ['빈 곳으로 달리기', 18], ['공 차기', 3], ['줄 너머로 넘기기', 0]], question: '가장 많이 나온 움직임은?', choices: ['패스', '빈 곳으로 달리기', '공 차기', '줄 너머로 넘기기'] }, target: { pick: 0 }, difficulty: 0.15 },
                { prompt: '발야구(필드형)에서 가장 많이 나온 움직임을 골라요.', toolOptions: { type: 'bar', mode: 'read', title: '발야구에서 나온 움직임(우리 반 관찰)', unit: '번', xLabel: '움직임', data: [['공 차기', 12], ['콘 돌며 달리기', 15], ['공 잡기', 9], ['패스', 2]], question: '가장 많이 나온 움직임은?', choices: ['공 차기', '콘 돌며 달리기', '공 잡기', '패스'] }, target: { pick: 1 }, difficulty: 0.2 },
                { prompt: '풍선 배구(네트형)에서 받아 올리기는 넘기기보다 몇 번 더 나왔는지 써요.', toolOptions: { type: 'bar', mode: 'read', title: '풍선 배구에서 나온 움직임(우리 반 관찰)', unit: '번', xLabel: '움직임', data: [['받아 올리기', 30], ['줄 너머로 넘기기', 22], ['달리기', 4]], question: '몇 번 더 나왔나요?' }, target: { value: 8 }, difficulty: 0.25,
                  conclude: '갈래마다 많이 쓰는 움직임이 달라요. 그래서 한 갈래만 하면 익히지 못하는 움직임이 생겨요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 갈래마다 많이 쓰는 움직임 묶기', minutes: 8, tool: 'mindmap',
              task: '움직임 카드를 그 움직임이 가장 많이 나오는 갈래에 묶어요. 묶은 뒤 짝과 "이 갈래에서는 ○○을 많이 해"라고 말해요.',
              teacher: '"패스는 세 갈래 모두에 있지만, 빈 곳으로 달려가 패스를 받는 움직임은 어디서 가장 많았나요?" 관찰 그래프를 근거로 말하게 한다. 어느 갈래에나 있는 움직임(달리기)보다 그 갈래에서 두드러진 움직임을 고르는 것이라고 짚는다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '움직임 카드를 가장 많이 나오는 갈래에 묶어요.', toolOptions: { topic: '갈래마다 많은 움직임', slots: ['영역형', '필드형', '네트형'], cards: ['빈 곳으로 달려가 패스 받기', '상대 패스 길 막기', '공을 차고 콘 돌며 달리기', '굴러온 공 잡아 콘에 대기', '떨어지는 풍선 받아 올리기', '상대 빈 칸으로 넘기기'] }, target: { sort: { '영역형': ['빈 곳으로 달려가 패스 받기', '상대 패스 길 막기'], '필드형': ['공을 차고 콘 돌며 달리기', '굴러온 공 잡아 콘에 대기'], '네트형': ['떨어지는 풍선 받아 올리기', '상대 빈 칸으로 넘기기'] } }, levels: { easy: { state: { at: { '빈 곳으로 달려가 패스 받기': 0 } } } }, difficulty: 0.25,
                  hints: ['세 게임에서 그 움직임을 언제 했는지 떠올려 보세요.', '콘·베이스가 나오는 카드와 풍선·넘기기가 나오는 카드가 맞는 칸에 있는지 보세요.', '패스 받기·패스 길 막기는 영역형, 차고 콘 돌기·잡아 콘에 대기는 필드형, 받아 올리기·빈 칸으로 넘기기는 네트형이에요.'] },
                { prompt: '세 갈래 모두에서 함께 쓰이는 움직임만 골라요.', toolOptions: { mode: 'pick', topic: '함께 쓰는 움직임', basket: '세 갈래 모두', cards: ['공이 오는 쪽으로 몸을 돌려 보기', '공을 받으러 움직이기', '배트를 내려놓고 달리기', '줄 너머로 넘기기'] }, target: { pick: ['공이 오는 쪽으로 몸을 돌려 보기', '공을 받으러 움직이기'] }, difficulty: 0.25,
                  hints: ['영역형·필드형·네트형 게임을 하나씩 떠올리며 세 게임 모두에 있었는지 보세요.', '한 갈래에서만 하는 움직임이 바구니에 들어갔는지 보세요.', '공을 보며 몸 돌리기, 공을 받으러 움직이기는 세 갈래 모두에서 해요.'] },
                { prompt: '짝에게 "이 갈래에서는 ○○을 많이 해"를 세 갈래 모두 말해요. 말한 뒤 ‘다 했어요’를 눌러요.', free: true, talk: true },
              ],
            },
            {
              id: 'a3', title: '활동 3. 다음에 익히고 싶은 갈래 정하기', minutes: 8, tool: 'emotion',
              task: '친구의 생각에 알맞은 답을 고르고, 세 갈래에 대한 내 자신감을 표시한 뒤 다음에 익히고 싶은 갈래와 까닭을 활동지에 써요.',
              teacher: '"잘하는 갈래만 계속하면 실력이 고루 늘까요?" a1 그래프에서 영역형에는 줄 너머로 넘기기가 0번이었던 것을 다시 보여 준다. 자신감 표시는 정답이 없고 솔직하게 하라고 말한다.',
              levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '지호가 "나는 발야구를 잘하니까 발야구만 계속할래"라고 해요. 무엇이라고 답할까요?', toolOptions: { mode: 'branch', situation: '지호가 "나는 발야구를 잘하니까 발야구만 계속할래"라고 해요.', choices: [{ id: 'only', text: '"좋아, 잘하는 것만 하면 다 잘하게 돼"', result: '지호는 풍선 받아 올리기를 거의 해 보지 못했어요.', mood: '걱정', why: '갈래마다 많이 쓰는 움직임이 달라요.' }, { id: 'mix', text: '"덜 해 본 갈래도 하면 다른 움직임도 늘어"', result: '지호가 네트형에서 받아 올리기를 익혔어요.', mood: '뿌듯함' }, { id: 'quit', text: '"그럼 다른 갈래는 하지 마"', result: '지호가 다른 게임 시간에 구경만 했어요.', mood: '속상함', why: '여러 갈래를 해야 움직임이 고루 늘어요.' }] }, target: { choice: 'mix' }, levels: { easy: { toolOptions: { choices: [{ id: 'only', text: '"좋아, 잘하는 것만 하면 다 잘하게 돼"', result: '지호는 풍선 받아 올리기를 거의 해 보지 못했어요.', mood: '걱정', why: '갈래마다 많이 쓰는 움직임이 달라요.' }, { id: 'mix', text: '"덜 해 본 갈래도 하면 다른 움직임도 늘어"', result: '지호가 네트형에서 받아 올리기를 익혔어요.', mood: '뿌듯함' }] } } }, difficulty: 0.15 },
                { prompt: '세 갈래 가운데 내가 가장 덜 해 본 갈래에 대한 자신감을 골라요.', toolOptions: { mode: 'scale', steps: 3, situation: '세 갈래 게임을 모두 해 보았어요.', feeling: '걱정', ask: '가장 덜 해 본 갈래를 할 자신이 얼마나 있나요?', scaleLabels: { 1: '아직 어려워요', 3: '자신 있어요' } }, target: { level: 'any' }, difficulty: 0.05 },
                { prompt: '짝에게 다음에 더 익히고 싶은 갈래와 까닭을 관찰 기록을 들어 말해요. 말한 뒤 ‘다 했어요’를 눌러요.', free: true, talk: true },
              ],
            },
          ],
          {
            teacher: '"다음에 익히고 싶은 갈래와 까닭을 말해 볼까요?" "재미있어서"만 말한 학생에게는 "그 갈래에서 많이 쓰는 움직임 가운데 무엇을 늘리고 싶나요?"라고 덧붙여 묻는다. 출구 1번은 새 게임 자료이니 스스로 읽게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '배드민턴 변형 게임에서 나온 움직임(옆 반 관찰)', unit: '번', xLabel: '움직임', data: [['셔틀콕 쳐 넘기기', 26], ['콘 돌며 달리기', 0], ['패스 받기', 1], ['빈 곳으로 발 옮기기', 19]], question: '가장 많이 나온 움직임은?', choices: ['셔틀콕 쳐 넘기기', '콘 돌며 달리기', '패스 받기', '빈 곳으로 발 옮기기'] }, prompt: '새 관찰 그래프에서 가장 많이 나온 움직임을 골라요.', target: { pick: 0 }, difficulty: 0.2 },
              { type: 'choice', prompt: '움직임을 고루 늘리려면 어떻게 하나요?', options: ['잘하는 갈래만 계속해요', '세 갈래를 고루 해 봐요', '구경만 해요'], answer: 1, difficulty: 0.15, explain: '갈래마다 많이 쓰는 움직임이 달라서 고루 해야 해요.' },
              { type: 'short', prompt: '다음에 더 익히고 싶은 갈래와 그 까닭을 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '많이 나온 움직임',
          items: [
            { type: 'table', prompt: '갈래마다 가장 많이 나온 움직임을 쓰세요.', columns: ['갈래', '게임', '가장 많이 나온 움직임'], cells: [['영역형', '끝줄 패스 게임', ''], ['필드형', '발야구', ''], ['네트형', '풍선 배구', '']] },
            { type: 'choice', prompt: '풍선 배구에서 받아 올리기 30번, 넘기기 22번이면 받아 올리기가 몇 번 더 많나요?', options: ['6번', '8번', '52번'], answer: '8번' },
            { type: 'choice', prompt: '"잘하는 갈래만 계속하면 실력이 고루 는다"는 말에 대한 생각에 ○ 하세요.', options: ['맞아요', '아니에요, 갈래마다 쓰는 움직임이 달라요'], answer: '아니에요, 갈래마다 쓰는 움직임이 달라요' },
            { type: 'table', prompt: '다음에 더 익히고 싶은 갈래와 까닭을 쓰세요.', columns: ['익히고 싶은 갈래', '늘리고 싶은 움직임', '까닭'], rows: 1 },
          ],
          easy: {
            note: '영역형 = 패스·빈 곳 달리기, 필드형 = 차고 콘 돌기, 네트형 = 받아 올리기·넘기기.',
            items: [
              { type: 'choice', prompt: '풍선 배구에서 많이 나온 움직임은?', options: ['받아 올리기', '콘 돌기'], answer: '받아 올리기' },
              { type: 'short', prompt: '다음에 익히고 싶은 갈래를 쓰세요.' },
              { type: 'short', prompt: '그 까닭을 한 줄로 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '그래프에 값이 보이고, 판단 보기가 둘이며, 카드를 놓으면 바로 표시돼요.',
          base: '관찰 그래프를 읽고 움직임을 갈래에 묶어, 다음에 익힐 갈래를 정해요.',
          challenge: '그래프 값과 판단 결과는 맞힌 뒤에만 보여요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 잘하는 갈래만 계속하면 실력이 고루 는다고 여긴다 → 영역형 그래프에 줄 너머로 넘기기가 0번이었다는 자료로 보인다. ② 어느 갈래에나 있는 달리기를 한 갈래 움직임으로 묶는다 → 그 갈래에서 두드러진 움직임을 찾게 한다. ③ 익히고 싶은 까닭을 "재미"로만 쓴다 → 늘리고 싶은 움직임을 함께 쓰게 한다. 관찰 기록은 28·29차시에 교사가 모둠마다 세어 둔 것을 쓴다(없으면 학생 기억으로 표를 채운다).',
      }),
      // ───────────────────────── 31 ─────────────────────────
      L(31, {
        title: '짝 관찰표로 갈래마다 내가 공을 만진 횟수 세기',
        objective: '짝이 세어 준 갈래별 움직임 횟수를 표와 막대그래프로 나타내고, 덜 나온 갈래와 움직임을 찾아 다음 연습 목표로 정할 수 있다.',
        illustration: art('pairs of children, one playing a mini ball game and one holding a paper clipboard with tally marks, three small courts in a row', [
          { motif: 'sun', x: 410, y: 52, s: 0.6 }, { motif: 'cloud', x: 100, y: 50 }, { motif: 'hills', y: 222 },
          { motif: 'tree', x: 60, y: 198, s: 0.7 }, { motif: 'star', x: 330, y: 110 },
          { motif: 'text', x: 240, y: 150, text: '짝이 세어 줘요', size: 22 },
        ]),
        safety: [WARM, BALL, LOOK, STOP],
        stages: stages(
          {
            teacher: '"지난 시간에는 반 전체 기록을 보았어요. 그럼 나는 갈래마다 공을 몇 번이나 만졌을까요?" 어림해 말하게 한 뒤 "어림과 실제가 같을까요? 오늘은 짝이 세어 줘요." 관찰하는 사람은 경기장 밖 줄 뒤에서만 센다고 미리 약속한다.',
            student: '갈래마다 내가 공을 몇 번 만졌을지 어림해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 짝 관찰 차례와 시간 정하기', minutes: 6, tool: 'timer',
              task: '짝 관찰을 하는 차례를 놓고, 세 미니 게임을 2분씩 도는 시간을 타이머에 맞춰요.',
              teacher: '"공을 만진 것은 패스·받기·차기·쳐 넘기기 모두 한 번으로 세요. 바르게 세려면 언제 표시해야 할까요?" 만질 때마다 바로 표시하고, 기억으로 나중에 쓰지 않게 한다. 2분 게임 뒤 30초 동안 짝과 자리를 바꾼다.',
              levels: { easy: { showTotal: true }, base: {}, challenge: {} },
              items: [
                { prompt: '짝 관찰을 하는 차례대로 카드를 놓아요.', toolOptions: { cards: ['짝에게 센 횟수 알려 주기', '세는 움직임 정하기', '짝이 만질 때마다 바로 표시하기', '경기장 밖 관찰 줄에 서기'] }, target: { order: ['세는 움직임 정하기', '경기장 밖 관찰 줄에 서기', '짝이 만질 때마다 바로 표시하기', '짝에게 센 횟수 알려 주기'] }, levels: { easy: { state: { order: ['세는 움직임 정하기', '경기장 밖 관찰 줄에 서기', '짝에게 센 횟수 알려 주기', '짝이 만질 때마다 바로 표시하기'] } } }, difficulty: 0.15 },
                { prompt: '2분씩 세 미니 게임을 하고, 바꾸는 데 30초씩 쉬도록 타이머를 맞춰요.', toolOptions: { plan: { work: 90, rest: 15, rounds: 2 }, workStep: 15, restStep: 15 }, target: { plan: { work: 120, rest: 30, rounds: 3 } }, levels: { challenge: { prompt: '세 미니 게임을 같은 시간씩 하고 30초씩 쉬어 전체 7분이 되게 맞춰요.', target: { plan: { rest: 30, rounds: 3 }, total: 420 } } }, difficulty: 0.25 },
                { prompt: '짝 관찰을 하며 지킬 약속을 읽고 하나씩 눌러 표시해요.', toolOptions: { safety: ['관찰하는 사람은 경기장 밖 줄 뒤에만 서요', '굴러온 공은 경기장 안으로 굴려 주기만 해요', '센 횟수로 짝을 놀리지 않아요'] }, target: { safety: true }, difficulty: 0.1 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 세 미니 게임 하며 짝의 횟수 세기', minutes: 12, tool: 'timer',
              task: '4:4 패스 게임(영역형), 미니 발야구(필드형), 풍선 배구(네트형)를 2분씩 해요. 내가 할 때는 짝이, 짝이 할 때는 내가 공을 만진 횟수를 세어요.',
              teacher: '한 판에 반은 게임, 반은 관찰한다. "세는 사람은 경기에 끼어들거나 말로 도와주지 않아요." 한 바퀴가 끝나면 역할을 바꾸어 한 번 더 돈다. 횟수가 0인 갈래가 나와도 괜찮다고 말해 둔다.',
              levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
              items: [
                { prompt: '세 미니 게임을 하고 짝의 횟수도 세어 줘요. 다 하면 ‘짝·모둠과 함께 해 보았어요’를 눌러요.', free: true },
                { prompt: '짝이 세어 준 내가 공을 만진 횟수를 갈래마다 적어요.', toolOptions: { fields: [{ label: '영역형(4:4 패스)', unit: '번' }, { label: '필드형(미니 발야구)', unit: '번' }, { label: '네트형(풍선 배구)', unit: '번' }] }, target: { records: true }, levels: { easy: { prompt: '짝이 세어 준 횟수를 두 갈래 이상 적어요.', target: { records: 2 } } }, difficulty: 0.15 },
                { prompt: '내가 처음에 어림한 횟수도 갈래마다 적어요.', toolOptions: { fields: [{ label: '영역형 어림', unit: '번' }, { label: '필드형 어림', unit: '번' }, { label: '네트형 어림', unit: '번' }] }, target: { records: true }, levels: { easy: { prompt: '처음에 어림한 횟수를 한 갈래 이상 적어요.', target: { records: 1 } } }, difficulty: 0.1 },
              ],
            },
            {
              id: 'a3', title: '활동 3. 그래프로 나타내고 연습 목표 정하기', minutes: 8, tool: 'chart',
              task: '서윤이의 관찰표를 막대그래프로 나타내고, 덜 나온 갈래를 찾아요. 그다음 내 기록으로 같은 방법을 해 활동지에 그려요.',
              teacher: '"막대가 가장 짧은 갈래가 서윤이가 다음에 더 해 볼 갈래예요. 그 갈래에서 무엇을 연습하면 좋을까요?" 30차시 움직임 묶음을 떠올려 연습할 움직임까지 말하게 한다.',
              levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '서윤이 관찰표(영역형 9번, 필드형 3번, 네트형 12번)를 막대그래프로 나타내요.', toolOptions: { type: 'bar', title: '서윤이가 공을 만진 횟수', unit: '번', xLabel: '갈래', yLabel: '횟수', data: [['영역형', 9], ['필드형', 3], ['네트형', 12]] }, target: { build: true }, levels: { easy: { toolOptions: { given: [0] } } }, difficulty: 0.2 },
                { prompt: '서윤이 그래프에서 공을 가장 적게 만진 갈래를 골라요.', toolOptions: { type: 'bar', mode: 'read', title: '서윤이가 공을 만진 횟수', unit: '번', xLabel: '갈래', data: [['영역형', 9], ['필드형', 3], ['네트형', 12]], question: '가장 적게 만진 갈래는?', choices: ['영역형', '필드형', '네트형'] }, target: { pick: 1 }, difficulty: 0.15 },
                { prompt: '서윤이는 네트형에서 필드형보다 몇 번 더 만졌는지 써요.', toolOptions: { type: 'bar', mode: 'read', title: '서윤이가 공을 만진 횟수', unit: '번', xLabel: '갈래', data: [['영역형', 9], ['필드형', 3], ['네트형', 12]], question: '몇 번 더 만졌나요?' }, target: { value: 9 }, difficulty: 0.2 },
              ],
            },
          ],
          {
            teacher: '"어림한 횟수와 짝이 센 횟수가 같았나요? 어느 갈래에서 가장 많이 달랐나요?" 두세 명이 답한다. "덜 나온 갈래는 못하는 갈래가 아니라, 아직 덜 해 본 갈래예요." 다음 시간에는 덜 해 본 갈래로 순환 리그를 한다고 알린다.',
            exitTicket: [
              { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '도현이가 공을 만진 횟수', unit: '번', xLabel: '갈래', data: [['영역형', 2], ['필드형', 8], ['네트형', 6]], question: '도현이가 다음에 더 해 볼 갈래는?', choices: ['영역형', '필드형', '네트형'] }, prompt: '도현이의 관찰 그래프를 읽고 다음에 더 해 볼 갈래를 골라요.', target: { pick: 0 }, difficulty: 0.2 },
              { type: 'choice', prompt: '짝의 움직임을 바르게 세는 방법은?', options: ['게임이 끝난 뒤 기억해서 써요', '만질 때마다 바로 표시해요', '어림해서 써요'], answer: 1, difficulty: 0.15, explain: '바로 표시해야 센 횟수를 믿을 수 있어요.' },
              { type: 'short', prompt: '내가 다음에 더 해 볼 갈래와 그 갈래에서 늘리고 싶은 움직임을 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '짝 관찰표',
          items: [
            { type: 'table', prompt: '내가 공을 만진 횟수를 쓰세요.', columns: ['갈래', '어림(번)', '짝이 센 횟수(번)'], cells: [['영역형', '', ''], ['필드형', '', ''], ['네트형', '', '']] },
            { type: 'draw', prompt: '짝이 센 횟수로 막대그래프를 그리세요.' },
            { type: 'choice', prompt: '영역형 9번, 필드형 3번, 네트형 12번이면 다음에 더 해 볼 갈래는?', options: ['영역형', '필드형', '네트형'], answer: '필드형' },
            { type: 'check', prompt: '관찰하며 지킨 약속에 ✓ 하세요.', options: ['경기장 밖에서만 셌어요', '만질 때마다 바로 표시했어요', '센 횟수로 놀리지 않았어요'] },
            { type: 'short', prompt: '다음 연습 목표를 "○○형에서 ○○을 늘리기"로 쓰세요.' },
          ],
          easy: {
            note: '막대가 가장 짧은 갈래 = 다음에 더 해 볼 갈래.',
            items: [
              { type: 'table', prompt: '짝이 센 횟수를 쓰세요.', columns: ['영역형', '필드형', '네트형'], rows: 1 },
              { type: 'short', prompt: '가장 적게 만진 갈래를 쓰세요.' },
              { type: 'short', prompt: '다음에 해 볼 갈래를 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '그래프 첫 막대가 미리 그려져 있고 값이 보이며, 기록은 두 갈래만 적어도 돼요. 타이머 전체 시간이 보여요.',
          base: '짝과 서로 세어 주고, 기록을 그래프로 나타내 연습 목표를 정해요.',
          challenge: '전체 시간을 셈해 타이머를 맞추고, 그래프 값은 맞힌 뒤에만 보이며 시간 재기 도구로 판을 재요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 잘하는 갈래만 하면 된다고 여기고 덜 나온 갈래를 피한다 → 덜 나온 것은 아직 덜 해 본 것이라고 바꾸어 말한다. ② 관찰자가 경기에 끼어든다 → 관찰 줄을 테이프로 표시한다. ③ 기억으로 나중에 횟수를 쓴다 → 만질 때마다 바를 정(正) 자로 표시하게 한다. 횟수로 친구를 놀리지 않도록 처음에 약속하고, 교사는 관찰 줄을 돌며 센 방법을 살핀다.',
      }),
      // ───────────────────────── 32 ─────────────────────────
      L(32, {
        title: '덜 해 본 갈래로 모둠 순환 리그 짜고 해 보기',
        objective: '모둠 친구들의 관찰 기록을 근거로 덜 해 본 갈래의 연습을 고르고, 세 갈래 순환 리그를 계획해 참여한 뒤 달라진 점을 말할 수 있다.',
        illustration: art('a paper league board with three rotating arrows linking a goal court, a base diamond and a net court, children moving between them with smiles', [
          { motif: 'sun', x: 410, y: 52, s: 0.7 }, { motif: 'cloud', x: 90, y: 52 }, { motif: 'hills', y: 222 },
          { motif: 'star', x: 140, y: 110 }, { motif: 'star', x: 340, y: 110 },
          { motif: 'text', x: 240, y: 160, text: '돌아가며 고루고루', size: 22 },
        ]),
        safety: [WARM, SPACE, BALL, LOOK, NET],
        stages: stages(
          {
            teacher: '"지난 시간 관찰표에서 막대가 가장 짧았던 갈래, 기억나나요?" 몇 명이 말하게 한다. "오늘은 모둠마다 세 갈래를 돌아가는 순환 리그를 해요. 단, 내가 덜 해 본 갈래에서는 일부러 공을 더 많이 만져 보는 역할을 맡아요."',
            student: '지난 시간 관찰표에서 내가 덜 해 본 갈래를 떠올려 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 친구 기록에 맞는 연습 고르기', minutes: 7, tool: 'mindmap',
              task: '친구들의 관찰 기록을 보고 알맞은 연습과 이어요. 그다음 내 기록에 맞는 연습을 골라 짝에게 말해요.',
              teacher: '"필드형에서 공을 거의 못 만진 친구에게는 어떤 연습이 맞을까요?" 30차시에 묶은 갈래별 움직임과 이어서 생각하게 한다. 리그에서 덜 해 본 갈래일 때는 공을 받는 자리(앞쪽)를 맡는다고 알린다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '친구들의 관찰 기록과 알맞은 연습을 이어요.', toolOptions: { mode: 'match', topic: '기록에 맞는 연습', slots: [{ id: 'f', label: '필드형에서 공을 1번만 만졌어요' }, { id: 'n', label: '네트형에서 풍선을 2번만 만졌어요' }, { id: 'a', label: '영역형에서 패스를 1번만 받았어요' }], cards: ['굴러온 공 잡아 콘에 대기 연습', '떨어지는 풍선 받아 올리기 연습', '빈 곳으로 달려가 패스 받기 연습'] }, target: { match: { f: '굴러온 공 잡아 콘에 대기 연습', n: '떨어지는 풍선 받아 올리기 연습', a: '빈 곳으로 달려가 패스 받기 연습' } }, levels: { easy: { state: { at: { '굴러온 공 잡아 콘에 대기 연습': 0 } } } }, difficulty: 0.2,
                  hints: ['기록에서 횟수가 적었던 갈래가 어디인지 먼저 보세요.', '그 갈래에서 많이 쓰는 움직임(30차시)을 떠올려 카드를 다시 보세요.', '필드형은 잡아 콘에 대기, 네트형은 받아 올리기, 영역형은 빈 곳으로 달려가 받기가 맞아요.'] },
                { prompt: '순환 리그에서 덜 해 본 갈래일 때 할 일만 골라요.', toolOptions: { mode: 'pick', topic: '덜 해 본 갈래에서', basket: '할 일', cards: ['공을 받기 좋은 앞쪽 자리를 맡아요', '공이 오면 피하지 않고 받아 봐요', '잘하는 친구에게 공을 모두 맡겨요', '실수하면 다음 판은 구경해요'] }, target: { pick: ['공을 받기 좋은 앞쪽 자리를 맡아요', '공이 오면 피하지 않고 받아 봐요'] }, difficulty: 0.2 },
                { prompt: '짝에게 내 관찰 기록에서 덜 나온 갈래와 리그에서 해 볼 연습을 말해요. 말한 뒤 ‘다 했어요’를 눌러요.', free: true, talk: true },
              ],
            },
            {
              id: 'a2', title: '활동 2. 순환 리그 계획하고 해 보기', minutes: 13, tool: 'timer',
              task: '세 갈래 경기를 4분씩, 바꾸는 데 1분씩 쉬는 리그를 타이머에 맞추고, 리그 차례대로 경기해요.',
              teacher: '경기장 셋(끝줄 패스·미니 발야구·풍선 배구)을 두고 모둠이 시계 방향으로 돈다. "경기 시작 전에 덜 해 본 친구가 앞쪽 자리를 맡았는지 모둠이 서로 확인해요." 이기고 지는 것보다 모두가 공을 만지는 것이 리그 목표라고 말한다.',
              levels: { easy: { showTotal: true }, base: {}, challenge: {} },
              items: [
                { prompt: '세 경기를 4분씩, 바꾸는 데 1분씩 쉬도록 타이머를 맞춰요.', toolOptions: { plan: { work: 180, rest: 30, rounds: 2 }, workStep: 60, restStep: 30 }, target: { plan: { work: 240, rest: 60, rounds: 3 } }, levels: { challenge: { prompt: '세 경기를 같은 시간씩, 1분씩 쉬어 전체 14분이 되게 맞춰요.', target: { plan: { rest: 60, rounds: 3 }, total: 840 } } }, difficulty: 0.25 },
                { prompt: '경기장 한 곳에서 할 일을 차례대로 놓아요.', toolOptions: { cards: ['신호에 맞춰 다음 경기장으로 옮기기', '덜 해 본 친구가 앞쪽 자리 맡기', '4분 경기하기', '공을 바구니에 넣고 줄 서기'] }, target: { order: ['덜 해 본 친구가 앞쪽 자리 맡기', '4분 경기하기', '공을 바구니에 넣고 줄 서기', '신호에 맞춰 다음 경기장으로 옮기기'] }, levels: { easy: { state: { order: ['덜 해 본 친구가 앞쪽 자리 맡기', '4분 경기하기', '신호에 맞춰 다음 경기장으로 옮기기', '공을 바구니에 넣고 줄 서기'] } } }, difficulty: 0.2 },
                { prompt: '모둠과 순환 리그 세 경기를 해요. 다 하면 ‘짝·모둠과 함께 해 보았어요’를 눌러요.', free: true },
              ],
            },
            {
              id: 'a3', title: '활동 3. 리그 뒤 달라진 점 돌아보기', minutes: 6, tool: 'emotion',
              task: '리그 뒤 친구의 말에 알맞은 답을 고르고, 덜 해 본 갈래를 해 본 내 마음을 표시해요.',
              teacher: '"덜 해 본 갈래에서 공을 만진 횟수가 지난 시간보다 늘었나요?" 손을 들게 한다. "한 번 했는데도 여전히 어렵다"는 학생에게 "처음보다 무엇 하나가 나아졌나요?"라고 묻는다.',
              levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '리그 뒤 서윤이가 "필드형은 오늘도 어려웠으니 다시는 안 할래"라고 해요. 무엇이라고 답할까요?', toolOptions: { mode: 'branch', situation: '리그 뒤 서윤이가 "필드형은 오늘도 어려웠으니 다시는 안 할래"라고 해요.', choices: [{ id: 'ok', text: '"그래, 잘하는 네트형만 하자"', result: '서윤이는 공 잡기를 다시 해 보지 않았어요.', mood: '속상함', why: '한 번에 늘지 않아도 고루 해야 움직임이 늘어요.' }, { id: 'count', text: '"지난번 3번보다 오늘 몇 번 만졌는지 세어 보자"', result: '오늘은 6번이었어요. 서윤이가 웃었어요.', mood: '뿌듯함' }, { id: 'blame', text: '"네가 못해서 그래"', result: '서윤이가 더 하기 싫어졌어요.', mood: '화남', why: '친구의 노력을 깎아내리지 않아요.' }] }, target: { choice: 'count' }, levels: { easy: { toolOptions: { choices: [{ id: 'ok', text: '"그래, 잘하는 네트형만 하자"', result: '서윤이는 공 잡기를 다시 해 보지 않았어요.', mood: '속상함', why: '한 번에 늘지 않아도 고루 해야 움직임이 늘어요.' }, { id: 'count', text: '"지난번 3번보다 오늘 몇 번 만졌는지 세어 보자"', result: '오늘은 6번이었어요. 서윤이가 웃었어요.', mood: '뿌듯함' }] } } }, difficulty: 0.2 },
                { prompt: '모둠에서 늘 한 친구만 공을 차지해요. 리그 목표에 맞는 행동을 골라요.', toolOptions: { mode: 'branch', situation: '모둠에서 늘 잘하는 한 친구만 공을 차지해요.', choices: [{ id: 'let', text: '이기려면 그 친구에게 계속 맡겨요', result: '다른 친구들은 공을 거의 만지지 못했어요.', mood: '속상함', why: '리그 목표는 모두가 고루 공을 만지는 것이에요.' }, { id: 'rule', text: '"패스를 한 번씩 돌린 뒤에 득점하기"를 모둠 규칙으로 더해요', result: '모두가 공을 만졌어요.', mood: '신남' }] }, target: { choice: 'rule' }, difficulty: 0.2 },
                { prompt: '덜 해 본 갈래를 오늘 해 본 마음을 골라요.', toolOptions: { mode: 'scale', steps: 3, situation: '순환 리그에서 덜 해 본 갈래를 해 보았어요.', feeling: '뿌듯함', ask: '그 갈래를 다시 해 볼 자신이 얼마나 생겼나요?', scaleLabels: { 1: '아직 어려워요', 3: '자신 있어요' } }, target: { level: 'any' }, difficulty: 0.05 },
              ],
            },
          ],
          {
            teacher: '"오늘 덜 해 본 갈래에서 공을 만진 횟수가 늘었다는 친구?" 두세 명의 변화를 듣는다. 전략형 갈래 알기는 오늘로 마치고, 다음 시간부터 패스·드리블 같은 기본 기능을 익힌다고 알린다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '기록에 맞는 연습', slots: [{ id: 'n', label: '네트형에서 넘기기를 한 번도 못 했어요' }, { id: 'a', label: '영역형에서 상대 패스를 한 번도 못 막았어요' }], cards: ['상대 빈 칸으로 넘기기 연습', '상대 패스 길 앞에 서기 연습'] }, prompt: '새 관찰 기록에 알맞은 연습을 이어요.', target: { match: { n: '상대 빈 칸으로 넘기기 연습', a: '상대 패스 길 앞에 서기 연습' } }, difficulty: 0.2 },
              { type: 'choice', prompt: '순환 리그를 하는 까닭으로 알맞은 것은?', options: ['잘하는 갈래만 하려고', '세 갈래 움직임을 고루 익히려고', '이긴 모둠을 정하려고'], answer: 1, difficulty: 0.15, explain: '갈래를 돌아가며 해야 움직임이 고루 늘어요.' },
              { type: 'short', prompt: '오늘 덜 해 본 갈래에서 달라진 점 하나를 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '순환 리그',
          items: [
            { type: 'table', prompt: '리그 경기마다 내가 맡은 자리와 공을 만진 횟수를 쓰세요.', columns: ['경기', '맡은 자리', '만진 횟수(번)'], cells: [['끝줄 패스', '', ''], ['미니 발야구', '', ''], ['풍선 배구', '', '']] },
            { type: 'choice', prompt: '모둠에서 한 친구만 공을 차지할 때 알맞은 방법은?', options: ['그 친구에게 계속 맡겨요', '모두 한 번씩 패스한 뒤 득점하기 규칙을 더해요', '구경해요'], answer: '모두 한 번씩 패스한 뒤 득점하기 규칙을 더해요' },
            { type: 'table', prompt: '덜 해 본 갈래에서 지난번과 오늘을 견주어 쓰세요.', columns: ['갈래', '지난번 횟수', '오늘 횟수', '달라진 점'], rows: 1 },
            { type: 'check', prompt: '오늘 지킨 약속에 ✓ 하세요.', options: ['덜 해 본 갈래에서 앞쪽 자리를 맡았어요', '공이 오면 피하지 않고 받았어요', '신호에 맞춰 경기장을 옮겼어요'] },
            { type: 'short', prompt: '세 갈래를 고루 해 보니 어떤 점이 좋았는지 한 줄로 쓰세요.' },
          ],
          easy: {
            note: '덜 해 본 갈래에서는 앞쪽 자리, 공이 오면 받아 보기!',
            items: [
              { type: 'short', prompt: '오늘 덜 해 본 갈래를 쓰세요.' },
              { type: 'choice', prompt: '리그 목표는?', options: ['모두 고루 공 만지기', '이기기만 하기'], answer: '모두 고루 공 만지기' },
              { type: 'short', prompt: '오늘 공을 만진 횟수를 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 놓으면 바로 표시되고 첫 카드가 미리 놓여 있으며, 판단 보기가 둘이에요. 타이머 전체 시간이 보여요.',
          base: '기록에 맞는 연습을 고르고 순환 리그를 계획해 참여해요.',
          challenge: '전체 시간을 셈해 타이머를 맞추고, 판단 결과는 맞힌 뒤에만 보여요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 잘하는 갈래만 계속하면 실력이 고루 는다고 여긴다 → 지난번 횟수와 오늘 횟수를 견주게 해 덜 해 본 갈래의 변화를 보인다. ② 이기려고 한 친구에게 공을 몰아준다 → "모두 한 번씩 패스 뒤 득점" 규칙을 더한다. ③ 실수 뒤 구경만 한다 → 다음 판에도 앞쪽 자리를 맡게 한다. 교사는 세 경기장을 돌며 덜 해 본 친구가 앞쪽 자리를 맡았는지 관찰한다.',
      }),
      // ───────────────────────── 33 ─────────────────────────
      L(33, {
        title: '패스와 드리블은 언제 쓰고 어떤 공이 받기 좋을까',
        objective: '패스와 드리블이 쓰이는 상황을 가려 말하고, 받기 좋은 공이 되려면 세기·방향·높이·때를 맞추어야 함을 근거를 들어 말할 수 있다.',
        illustration: art('two children passing a ball chest to chest while another child dribbles past paper cones, arrows showing the path of the ball', [
          { motif: 'sun', x: 410, y: 52, s: 0.6 }, { motif: 'cloud', x: 100, y: 52 }, { motif: 'hills', y: 222 },
          { motif: 'star', x: 150, y: 110 }, { motif: 'leaf', x: 380, y: 190 },
          { motif: 'text', x: 240, y: 150, text: '패스? 드리블?', size: 24 },
        ]),
        safety: [WARM, SPACE, BALL, LOOK],
        stages: stages(
          {
            teacher: '"농구 경기에서 혼자 공을 오래 튀기며 달리는 선수가 가장 잘하는 선수일까요?" 대답을 듣고 "패스가 더 좋은 때도 있을까요? 언제일까요?"라고 묻는다. "오늘은 패스와 드리블을 언제 쓰는지, 친구가 받기 좋은 공은 어떤 공인지 알아봐요."',
            student: '드리블을 오래 하는 사람이 경기를 가장 잘하는 사람인지 생각해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 패스할 때, 드리블할 때 가르기', minutes: 9, tool: 'mindmap',
              task: '경기 상황 카드를 패스할 때와 드리블할 때로 나누고, 받기 어려운 공과 맞출 조건을 이어요.',
              teacher: '"앞쪽에 비어 있는 우리 편이 있으면 공은 사람보다 빨리 가요. 그래서 패스예요. 우리 편이 모두 막혀 있고 내 앞이 비어 있으면 드리블로 나아가요." 받기 어려운 공을 고를 때 "받는 사람이 느려서"라고 말하는 학생에게 "보낸 공의 세기·방향·높이·때는 어땠을까요?"라고 되묻는다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '경기 상황 카드를 패스할 때와 드리블할 때로 나누어요.', toolOptions: { topic: '패스? 드리블?', slots: ['패스할 때', '드리블할 때'], cards: ['앞쪽 우리 편이 상대 없이 비어 있어요', '상대 둘이 나를 막고 옆 우리 편이 비어 있어요', '내 앞이 비어 있고 우리 편은 모두 막혀 있어요', '패스할 우리 편이 없어 공을 지키며 기다려요'] }, target: { sort: { '패스할 때': ['앞쪽 우리 편이 상대 없이 비어 있어요', '상대 둘이 나를 막고 옆 우리 편이 비어 있어요'], '드리블할 때': ['내 앞이 비어 있고 우리 편은 모두 막혀 있어요', '패스할 우리 편이 없어 공을 지키며 기다려요'] } }, levels: { easy: { state: { at: { '앞쪽 우리 편이 상대 없이 비어 있어요': 0 } } } }, difficulty: 0.25,
                  hints: ['비어 있는 우리 편이 있는지 먼저 보세요.', '우리 편이 비어 있는데 드리블 칸에 넣은 카드가 있는지 보세요.', '비어 있는 우리 편이 있으면 패스, 우리 편이 모두 막혔거나 없으면 드리블이에요.'] },
                { prompt: '받기 어려웠던 공과 맞추어야 할 조건을 이어요.', toolOptions: { mode: 'match', topic: '받기 어려웠던 까닭', slots: [{ id: 'hard', label: '너무 세게 와서 손에서 튕겨 나갔어요' }, { id: 'dir', label: '친구 뒤쪽으로 갔어요' }, { id: 'time', label: '친구가 손을 내밀기 전에 왔어요' }, { id: 'high', label: '머리 위로 높이 날아갔어요' }], cards: ['거리에 맞는 세기', '받는 친구 쪽 방향', '손을 내민 뒤 보내는 때', '가슴 높이'] }, target: { match: { hard: '거리에 맞는 세기', dir: '받는 친구 쪽 방향', time: '손을 내민 뒤 보내는 때', high: '가슴 높이' } }, levels: { easy: { state: { at: { '거리에 맞는 세기': 0 } } } }, difficulty: 0.25,
                  hints: ['받기 어려웠던 까닭은 받는 사람보다 보낸 공에서 먼저 찾아요.', '세기·방향·때·높이 가운데 그 장면에서 어긋난 것이 무엇인지 하나씩 견주어 보세요.', '세게 왔으면 세기, 뒤로 갔으면 방향, 일찍 왔으면 때, 높이 갔으면 높이를 맞춰요.'] },
                { prompt: '친구가 받기 좋은 공의 조건만 골라요.', toolOptions: { mode: 'pick', topic: '받기 좋은 공', basket: '받기 좋은 공', cards: ['받는 친구 가슴 높이로 와요', '친구가 손을 내민 쪽으로 와요', '거리에 맞는 세기로 와요', '되도록 세고 빠르게 와요'] }, target: { pick: ['받는 친구 가슴 높이로 와요', '친구가 손을 내민 쪽으로 와요', '거리에 맞는 세기로 와요'] }, levels: { challenge: { prompt: '친구가 받기 좋은 공의 조건만 골라요. 그럴듯하지만 받기 어려운 함정 카드가 둘 있어요.', toolOptions: { cards: ['받는 친구 가슴 높이로 와요', '친구가 손을 내민 쪽으로 와요', '거리에 맞는 세기로 와요', '되도록 세고 빠르게 와요', '친구가 보지 않을 때 깜짝 보내요'] } } }, difficulty: 0.2 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 자료로 보는 패스와 드리블', minutes: 7, tool: 'chart',
              task: '우리 반 4:4 게임 관찰 그래프를 읽고, 패스와 드리블 가운데 어느 쪽이 더 도움이 된 상황이었는지 찾아요.',
              teacher: '"드리블을 오래 하면 공을 빼앗길 일이 많을까요, 적을까요?" 그래프를 읽은 뒤 "그래도 드리블이 꼭 필요한 때는 언제였나요?"라고 물어, 드리블이 나쁜 것이 아니라 때가 있다는 것을 짚는다.',
              levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '같은 거리를 공을 옮긴 시간이에요. 더 빨리 옮긴 방법을 골라요.', toolOptions: { type: 'bar', mode: 'read', title: '골대 앞까지 공을 옮긴 시간(15m)', unit: '초', xLabel: '방법', data: [['패스 세 번', 4], ['혼자 드리블', 11]], question: '더 빨리 옮긴 방법은?', choices: ['패스 세 번', '혼자 드리블'] }, target: { pick: 0 }, difficulty: 0.15 },
                { prompt: '4:4 게임에서 공을 빼앗긴 횟수예요. 드리블 중에 패스 중보다 몇 번 더 빼앗겼는지 써요.', toolOptions: { type: 'bar', mode: 'read', title: '공을 빼앗긴 횟수(우리 반 4:4 게임 관찰)', unit: '번', xLabel: '빼앗긴 때', data: [['드리블 중', 7], ['패스 중', 2]], question: '몇 번 더 빼앗겼나요?' }, target: { value: 5 }, difficulty: 0.2 },
                { prompt: '득점으로 이어진 공격 수예요. 득점이 더 많았던 공격을 골라요.', toolOptions: { type: 'bar', mode: 'read', title: '득점으로 이어진 공격(우리 반 4:4 게임 관찰)', unit: '번', xLabel: '공격', data: [['드리블로만 간 공격', 2], ['패스로 이어 간 공격', 8]], question: '득점이 더 많았던 공격은?', choices: ['드리블로만 간 공격', '패스로 이어 간 공격'] }, target: { pick: 1 }, difficulty: 0.2,
                  conclude: '드리블을 오래 한다고 잘하는 것이 아니에요. 비어 있는 친구가 있으면 패스가 더 빨라요.' },
              ],
            },
            {
              id: 'a3', title: '활동 3. 받기 좋은 공으로 가슴 패스 주고받기', minutes: 10, tool: 'timer',
              task: '짝과 3m 떨어져 가슴 패스를 10번 주고받아요. 받은 사람이 "좋아(받기 좋았어)" 또는 "세기·방향·높이·때"를 말해 주고, 받기 좋게 온 공의 수를 세어 적어요.',
              teacher: '"보내기 전에 짝이 손을 가슴 앞에 내밀었는지 보고 보내요." 받는 사람은 손바닥을 공 쪽으로 펴고 손가락을 벌린다. 10번이 끝나면 3m를 4m로 늘려 한 번 더 한다. 받기 좋지 않은 공에 짝을 탓하지 않고 조건 한 낱말로만 말하게 한다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '가슴 패스 연습을 시작하기 전에 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['짝과 3m, 옆 짝과는 3걸음 넘게 떨어졌어요', '공은 부드러운 공이에요', '받을 사람이 손을 내밀면 보내기로 했어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '짝과 가슴 패스를 3m에서 10번, 4m에서 10번 주고받아요. 다 하면 ‘짝·모둠과 함께 해 보았어요’를 눌러요.', free: true },
                { prompt: '짝이 "좋아"라고 말해 준, 받기 좋게 간 패스 수를 적어요(10번 가운데).', toolOptions: { fields: [{ label: '3m에서', unit: '번', max: 10 }, { label: '4m에서', unit: '번', max: 10 }] }, target: { records: true }, difficulty: 0.15 },
              ],
            },
          ],
          {
            teacher: '"3m와 4m에서 받기 좋은 공의 수가 달랐나요? 4m에서는 무엇을 바꾸어야 했나요?" "세기"라는 대답을 학생에게서 끌어낸다. 출구 1번은 새 상황 카드이니 "비어 있는 우리 편이 있나?"만 떠올리게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { topic: '새 상황', slots: ['패스할 때', '드리블할 때'], cards: ['골대 가까이 우리 편이 혼자 서 있어요', '둘레에 우리 편이 없고 내 앞이 비었어요'] }, prompt: '새 경기 상황을 패스할 때와 드리블할 때로 나누어요.', target: { sort: { '패스할 때': ['골대 가까이 우리 편이 혼자 서 있어요'], '드리블할 때': ['둘레에 우리 편이 없고 내 앞이 비었어요'] } }, difficulty: 0.2 },
              { type: 'choice', prompt: '패스가 친구 뒤쪽으로 가서 놓쳤어요. 무엇을 맞추어야 하나요?', options: ['세기', '방향', '높이'], answer: 1, difficulty: 0.2, explain: '친구가 손을 내민 쪽으로 방향을 맞춰요.' },
              { type: 'short', prompt: '"드리블을 오래 하는 사람이 경기를 잘한다"는 말에 대한 내 생각을 근거와 함께 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '패스와 드리블',
          items: [
            { type: 'table', prompt: '패스와 드리블을 쓰는 상황을 두 가지씩 쓰세요.', columns: ['패스할 때', '드리블할 때'], rows: 2 },
            { type: 'table', prompt: '받기 좋은 공이 되려면 맞출 조건을 쓰세요.', columns: ['조건', '어떻게 맞추나요?'], cells: [['세기', ''], ['방향', ''], ['높이', ''], ['때', '']] },
            { type: 'choice', prompt: '공을 빼앗긴 횟수가 드리블 중 7번, 패스 중 2번이었다면?', options: ['드리블 중에 5번 더 빼앗겼어요', '패스 중에 5번 더 빼앗겼어요', '같아요'], answer: '드리블 중에 5번 더 빼앗겼어요' },
            { type: 'table', prompt: '받기 좋게 간 가슴 패스 수를 쓰세요.', columns: ['거리', '3m', '4m'], cells: [['받기 좋게 간 수(10번 중)', '', '']] },
            { type: 'short', prompt: '4m에서 받기 좋은 공을 보내려고 바꾼 것을 쓰세요.' },
          ],
          easy: {
            note: '비어 있는 우리 편이 있으면 패스! 받기 좋은 공 = 세기·방향·높이·때.',
            items: [
              { type: 'choice', prompt: '앞쪽 우리 편이 비어 있으면?', options: ['패스', '드리블'], answer: '패스' },
              { type: 'choice', prompt: '받기 좋은 공의 높이는?', options: ['가슴 높이', '머리 위'], answer: '가슴 높이' },
              { type: 'short', prompt: '오늘 받기 좋게 간 패스 수를 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 놓으면 바로 표시되고 첫 카드가 미리 놓여 있으며, 그래프 값이 보여요.',
          base: '상황을 패스와 드리블로 가르고, 받기 좋은 공의 조건을 근거로 들며 직접 주고받아요.',
          challenge: '받기 좋은 공 고르기에 함정 카드가 둘 섞이고, 그래프 값은 맞힌 뒤에만 보여요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 드리블을 오래 하는 사람이 경기를 잘한다고 여긴다 → 빼앗긴 횟수와 득점으로 이어진 공격 자료로 보인다. 드리블이 필요한 때(우리 편이 모두 막혔을 때)도 함께 짚는다. ② 패스를 놓치면 받는 사람 탓을 한다 → 보낸 공의 세기·방향·높이·때를 먼저 살피게 한다. ③ 세게 보낼수록 좋은 패스라고 여긴다 → 거리에 맞는 세기. 교사는 짝 사이를 돌며 받는 손 모양을 관찰한다.',
      }),
      // ───────────────────────── 34 ─────────────────────────
      L(34, {
        title: '발로 하는 패스와 드리블, 받기 좋은 땅볼 만들기',
        objective: '발 안쪽 패스와 발 드리블의 바른 동작을 가려 말하고, 받는 친구가 멈추기 좋은 땅볼의 세기와 방향을 맞추어 주고받을 수 있다.',
        illustration: art('children on a grass field passing a soccer ball along the ground with the inside of the foot through a gate of paper cones', [
          { motif: 'sun', x: 410, y: 52, s: 0.7 }, { motif: 'cloud', x: 100, y: 52 }, { motif: 'hills', y: 222 },
          { motif: 'flower', x: 60, y: 212 }, { motif: 'flower', x: 420, y: 212 },
          { motif: 'text', x: 240, y: 150, text: '발 안쪽으로 툭', size: 24 },
        ]),
        safety: [WARM, SPACE, BALL, LOOK],
        stages: stages(
          {
            teacher: '"지난 시간에는 손으로 주고받았어요. 발로 하면 무엇이 더 어려울까요?" "방향이요", "세기요" 같은 대답을 받는다. 발끝으로 찬 공과 발 안쪽으로 민 공이 어떻게 굴러가는지 교사가 천천히 두 번 보여 준다. "어느 공이 친구가 멈추기 좋았나요?"',
            student: '발끝으로 찬 공과 발 안쪽으로 민 공이 어떻게 달랐는지 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 발 패스와 발 드리블의 바른 동작 가르기', minutes: 9, tool: 'mindmap',
              task: '발 동작 카드를 패스할 때와 드리블할 때로 나누고, 빗나간 땅볼과 고칠 점을 이어요.',
              teacher: '"패스는 발 안쪽 넓은 면으로 공 가운데를 밀어 차요. 드리블은 공을 발 가까이 두고 살짝살짝 밀며 고개를 들어요." 공이 떠서 튄 까닭을 "세게 찼어요"라고만 말하는 학생에게 "발의 어느 곳으로, 공의 어디를 찼나요?"라고 묻는다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '발 동작 카드를 패스할 때와 드리블할 때로 나누어요.', toolOptions: { topic: '발 동작', slots: ['패스할 때', '드리블할 때'], cards: ['발 안쪽으로 공 가운데를 밀어 차요', '차기 전에 받을 친구를 봐요', '공을 발 가까이 두고 살짝살짝 밀어요', '공을 밀며 고개를 들어 앞을 봐요'] }, target: { sort: { '패스할 때': ['발 안쪽으로 공 가운데를 밀어 차요', '차기 전에 받을 친구를 봐요'], '드리블할 때': ['공을 발 가까이 두고 살짝살짝 밀어요', '공을 밀며 고개를 들어 앞을 봐요'] } }, levels: { easy: { state: { at: { '발 안쪽으로 공 가운데를 밀어 차요': 0 } } } }, difficulty: 0.2,
                  hints: ['공을 친구에게 보내는 동작인지, 내가 데리고 가는 동작인지 가려 보세요.', '\'살짝살짝\', \'발 가까이\'가 든 카드가 어느 칸에 있는지 보세요.', '밀어 차기·받을 친구 보기는 패스, 발 가까이 살짝 밀기·고개 들기는 드리블이에요.'] },
                { prompt: '친구가 멈추기 좋은 땅볼 패스의 조건만 골라요.', toolOptions: { mode: 'pick', topic: '받기 좋은 땅볼', basket: '받기 좋은 땅볼', cards: ['친구 발 앞에 굴러가요', '친구가 멈출 수 있는 세기예요', '친구가 달려가는 앞쪽으로 와요', '공이 높이 떠서 와요'] }, target: { pick: ['친구 발 앞에 굴러가요', '친구가 멈출 수 있는 세기예요', '친구가 달려가는 앞쪽으로 와요'] }, levels: { challenge: { prompt: '친구가 멈추기 좋은 땅볼 패스의 조건만 골라요. 함정 카드가 둘 있어요.', toolOptions: { cards: ['친구 발 앞에 굴러가요', '친구가 멈출 수 있는 세기예요', '친구가 달려가는 앞쪽으로 와요', '공이 높이 떠서 와요', '친구가 서 있던 뒤쪽 자리로 와요'] } } }, difficulty: 0.2 },
                { prompt: '빗나간 땅볼과 다음에 고칠 점을 이어요.', toolOptions: { mode: 'match', topic: '빗나간 땅볼', slots: [{ id: 'behind', label: '달려가는 친구 뒤로 갔어요' }, { id: 'up', label: '공이 떠서 튀어 올랐어요' }, { id: 'short', label: '친구 앞 3걸음에서 멈췄어요' }], cards: ['친구가 갈 앞쪽을 보고 차요', '발 안쪽으로 공 가운데를 밀어요', '거리에 맞게 조금 더 세게 차요'] }, target: { match: { behind: '친구가 갈 앞쪽을 보고 차요', up: '발 안쪽으로 공 가운데를 밀어요', short: '거리에 맞게 조금 더 세게 차요' } }, levels: { easy: { state: { at: { '친구가 갈 앞쪽을 보고 차요': 0 } } } }, difficulty: 0.25,
                  hints: ['빗나간 모양이 방향·높이·세기 가운데 무엇이 어긋난 것인지 먼저 가려요.', '공이 뜬 것은 세기보다 발과 공이 닿는 곳의 문제예요. 그 카드를 다시 보세요.', '뒤로 갔으면 앞쪽 보고 차기, 떴으면 공 가운데 밀기, 모자랐으면 조금 더 세게예요.'] },
              ],
            },
            {
              id: 'a2', title: '활동 2. 자료로 보는 발 패스 방법', minutes: 7, tool: 'chart',
              task: '옆 반 친구들이 두 방법으로 한 기록 그래프를 읽고, 받기 좋은 땅볼을 만드는 방법과 드리블 방법을 골라요.',
              teacher: '"발끝으로 차면 세게 가지만 방향이 흔들려요. 발 안쪽은 넓은 면이라 방향을 잡기 쉬워요." 드리블 그래프에서 공을 멀리 차 놓고 쫓아간 친구가 콘을 많이 놓친 까닭을 묻는다.',
              levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '5m 발 패스를 10번씩 한 결과예요. 받기 좋게 간 수가 더 많은 방법을 골라요.', toolOptions: { type: 'bar', mode: 'read', title: '5m 발 패스, 받기 좋게 간 수(옆 반 평균, 10번 중)', unit: '번', xLabel: '방법', data: [['발끝으로 차기', 4], ['발 안쪽으로 밀기', 8]], question: '더 많은 방법은?', choices: ['발끝으로 차기', '발 안쪽으로 밀기'] }, target: { pick: 1 }, difficulty: 0.15 },
                { prompt: '콘 다섯 개 사이를 드리블할 때 놓친 콘 수예요. 덜 놓친 방법을 골라요.', toolOptions: { type: 'bar', mode: 'read', title: '콘 드리블에서 놓친 콘 수(옆 반 평균)', unit: '개', xLabel: '방법', data: [['공을 멀리 차 놓고 쫓기', 3], ['공을 발 가까이 두고 밀기', 1]], question: '덜 놓친 방법은?', choices: ['공을 멀리 차 놓고 쫓기', '공을 발 가까이 두고 밀기'] }, target: { pick: 1 }, difficulty: 0.15 },
                { prompt: '발 안쪽으로 밀면 발끝으로 찰 때보다 받기 좋은 공이 몇 번 더 많았는지 써요.', toolOptions: { type: 'bar', mode: 'read', title: '5m 발 패스, 받기 좋게 간 수(옆 반 평균, 10번 중)', unit: '번', xLabel: '방법', data: [['발끝으로 차기', 4], ['발 안쪽으로 밀기', 8]], question: '몇 번 더 많았나요?' }, target: { value: 4 }, difficulty: 0.2 },
              ],
            },
            {
              id: 'a3', title: '활동 3. 콘 문 사이로 땅볼 패스 주고받기', minutes: 10, tool: 'timer',
              task: '짝과 5m 떨어져, 가운데 1m 콘 문 사이로 발 안쪽 땅볼 패스를 10번 주고받아요. 그다음 콘 다섯 개 사이를 발 가까이 드리블해 돌아와요.',
              teacher: '"받는 사람은 공이 오는 쪽으로 한 발 다가가 발바닥이나 발 안쪽으로 멈춰요." 콘 문을 통과한 공만 센다. 드리블은 걷는 빠르기부터 시작한다. 공이 옆 짝에게 굴러가면 "공!"을 외치고 손으로 주워 온다.',
              levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
              items: [
                { prompt: '땅볼 패스 연습을 하기 전에 운동장을 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['옆 짝과 5걸음 넘게 떨어졌어요', '공이 굴러갈 쪽에 구덩이·돌이 없어요', '굴러간 공은 "공!" 외치고 손으로 줍기로 했어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '짝과 콘 문 패스 10번, 콘 드리블 한 번씩을 해요. 다 하면 ‘짝·모둠과 함께 해 보았어요’를 눌러요.', free: true },
                { prompt: '콘 문을 지나 짝 발 앞에 간 패스 수와 드리블에서 놓친 콘 수를 적어요.', toolOptions: { fields: [{ label: '콘 문 통과 패스(10번 중)', unit: '번', max: 10 }, { label: '드리블에서 놓친 콘', unit: '개', max: 5 }] }, target: { records: true }, difficulty: 0.15 },
              ],
            },
          ],
          {
            teacher: '"콘 문을 많이 통과한 친구는 무엇을 맞추었나요?" "발 안쪽", "짝 발 앞" 같은 말을 끌어낸다. 출구 1번 그래프는 손 패스가 아니라 새 발 패스 자료이니 단위와 제목을 먼저 읽게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '8m 발 패스, 짝 발 앞에 간 수(10번 중)', unit: '번', xLabel: '방법', data: [['짝이 선 자리로 차기', 3], ['짝이 달려갈 앞쪽으로 차기', 7]], question: '받기 좋은 공이 더 많은 방법은?', choices: ['짝이 선 자리로 차기', '짝이 달려갈 앞쪽으로 차기'] }, prompt: '달려가는 짝에게 보낸 패스 자료를 읽고 더 좋은 방법을 골라요.', target: { pick: 1 }, difficulty: 0.25 },
              { type: 'choice', prompt: '발 패스가 떠서 튀어 올랐어요. 무엇을 고칠까요?', options: ['더 세게 차요', '발 안쪽으로 공 가운데를 밀어요', '눈을 감고 차요'], answer: 1, difficulty: 0.2, explain: '공 아래를 발끝으로 차면 떠요. 발 안쪽으로 가운데를 밀어요.' },
              { type: 'short', prompt: '오늘 콘 문 패스에서 받기 좋은 땅볼을 만들려고 맞춘 것 하나를 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '받기 좋은 땅볼',
          items: [
            { type: 'table', prompt: '발 패스와 발 드리블의 바른 동작을 쓰세요.', columns: ['발 패스', '발 드리블'], rows: 2 },
            { type: 'choice', prompt: '달려가는 친구에게 발 패스를 할 때 어디로 보내나요?', options: ['친구가 선 자리', '친구가 달려갈 앞쪽', '친구 뒤쪽'], answer: '친구가 달려갈 앞쪽' },
            { type: 'table', prompt: '오늘 기록을 쓰세요.', columns: ['콘 문 통과 패스(10번 중)', '드리블에서 놓친 콘'], rows: 1 },
            { type: 'check', prompt: '오늘 지킨 약속에 ✓ 하세요.', options: ['옆 짝과 5걸음 넘게 떨어졌어요', '굴러간 공은 손으로 주웠어요', '드리블은 걷는 빠르기부터 했어요'] },
            { type: 'short', prompt: '빗나간 패스가 있었다면 다음에 고칠 점을 쓰세요.' },
          ],
          easy: {
            note: '패스는 발 안쪽으로 밀기, 드리블은 공을 발 가까이!',
            items: [
              { type: 'choice', prompt: '발 패스는 발의 어디로 하나요?', options: ['발 안쪽', '발끝'], answer: '발 안쪽' },
              { type: 'choice', prompt: '드리블할 때 공은?', options: ['발 가까이', '멀리 차 놓기'], answer: '발 가까이' },
              { type: 'short', prompt: '오늘 콘 문을 통과한 패스 수를 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 놓으면 바로 표시되고 첫 카드가 미리 놓여 있으며, 그래프 값이 보여요.',
          base: '발 패스와 드리블 동작을 가르고, 받기 좋은 땅볼 조건을 맞추어 콘 문 패스를 해요.',
          challenge: '땅볼 조건 고르기에 함정 카드가 둘 섞이고, 그래프 값은 맞힌 뒤에만 보이며, 시간 재기 도구로 드리블 시간을 재요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 드리블을 오래 하는 것이 잘하는 것이라고 여기고 공을 멀리 차 놓고 쫓는다 → 놓친 콘 수 자료와 발 가까이 밀기를 보인다. ② 발끝으로 세게 차 공이 뜨고 방향이 흔들린다 → 발 안쪽으로 공 가운데를 밀게 한다. ③ 달려가는 친구가 선 자리로 찬다 → 친구가 갈 앞쪽으로 보내게 한다. 교사는 운동장 끝에서 공이 옆 짝에게 굴러가는지 관찰한다.',
      }),
      // ───────────────────────── 35 ─────────────────────────
      L(35, {
        title: '걸으며 패스 열 번 잇고 표시한 칸으로 서브 보내기',
        objective: '짝과 걸으며 패스를 열 번 이어 가고, 네트 너머 표시한 칸으로 언더핸드 서브를 보낼 수 있다.',
        illustration: art('two children walking side by side passing a ball, and behind them a low paper net with numbered squares on the far court for serving practice', [
          { motif: 'sun', x: 410, y: 52, s: 0.6 }, { motif: 'cloud', x: 100, y: 52 }, { motif: 'hills', y: 222 },
          { motif: 'star', x: 120, y: 120 }, { motif: 'star', x: 360, y: 120 },
          { motif: 'text', x: 240, y: 160, text: '걸으며 열 번!', size: 24 },
        ]),
        safety: [WARM, SPACE, BALL, NET],
        stages: stages(
          {
            teacher: '"제자리에 서서 주고받는 것과 걸으며 주고받는 것, 어느 쪽이 더 정확할까요?" "제자리요"가 많으면 "그런데 경기에서 상대는 제자리에 선 우리를 어떻게 할까요?"라고 되묻는다. "경기에서는 움직이며 받아야 해요. 오늘은 걸으며 열 번 이어 가고, 네트형 서브도 정한 칸에 보내 봐요."',
            student: '경기에서 제자리에 서서 패스를 받으면 상대가 어떻게 할지 생각해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 자료로 보는 움직이며 받기', minutes: 7, tool: 'chart',
              task: '4:4 게임 관찰 그래프와 서브 연습 그래프를 읽고, 움직이며 받는 까닭과 서브를 보내기 쉬운 칸을 찾아요.',
              teacher: '"제자리에서 받은 패스는 상대가 미리 그 자리에 가서 가로채기 쉬워요." 서브 그래프에서 가장 먼 칸이 가장 어려운 까닭(세기를 더 맞추어야 함)을 묻는다.',
              levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '4:4 게임에서 상대에게 가로채인 패스 수예요. 덜 가로채인 받기 방법을 골라요.', toolOptions: { type: 'bar', mode: 'read', title: '가로채인 패스 수(우리 반 4:4 게임 관찰)', unit: '번', xLabel: '받는 사람', data: [['제자리에 서서 받기', 9], ['빈 곳으로 걸어가며 받기', 3]], question: '덜 가로채인 방법은?', choices: ['제자리에 서서 받기', '빈 곳으로 걸어가며 받기'] }, target: { pick: 1 }, difficulty: 0.15 },
                { prompt: '제자리에서 받은 패스는 걸어가며 받은 패스보다 몇 번 더 가로채였는지 써요.', toolOptions: { type: 'bar', mode: 'read', title: '가로채인 패스 수(우리 반 4:4 게임 관찰)', unit: '번', xLabel: '받는 사람', data: [['제자리에 서서 받기', 9], ['빈 곳으로 걸어가며 받기', 3]], question: '몇 번 더 가로채였나요?' }, target: { value: 6 }, difficulty: 0.2,
                  conclude: '제자리에서는 정확해 보여도, 경기에서는 상대가 그 자리를 막아요. 움직이며 받는 연습이 필요해요.' },
                { prompt: '언더핸드 서브를 칸마다 10번씩 보낸 결과예요. 가장 많이 들어간 칸을 골라요.', toolOptions: { type: 'bar', mode: 'read', title: '언더핸드 서브가 들어간 수(옆 반 평균, 10번 중)', unit: '번', xLabel: '칸', data: [['가까운 칸', 7], ['가운데 칸', 5], ['먼 칸', 2]], question: '가장 많이 들어간 칸은?', choices: ['가까운 칸', '가운데 칸', '먼 칸'] }, target: { pick: 0 }, difficulty: 0.15 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 걸으며 패스 열 번 이어 가기', minutes: 11, tool: 'timer',
              task: '짝과 4m 떨어져 나란히 걸으며 가슴 패스를 주고받아요. 떨어뜨리지 않고 몇 번까지 이었는지 세어, 가장 많이 이은 횟수를 적어요.',
              teacher: '"받을 사람은 짝보다 한 걸음 앞서 걷고, 손을 내밀어 받을 곳을 알려요. 보내는 사람은 짝이 걸어갈 앞쪽으로 보내요." 체육관 긴 쪽을 왕복하며 떨어뜨리면 0부터 다시 센다. 열 번을 넘긴 짝은 빠르게 걷기로 바꾼다.',
              levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
              items: [
                { prompt: '걸으며 패스를 이어 가는 차례대로 카드를 놓아요.', toolOptions: { cards: ['짝이 걸어갈 앞쪽으로 패스하기', '짝보다 한 걸음 앞서 걷기', '공을 받으며 멈추지 않고 발 옮기기', '손을 내밀어 받을 곳 알리기'] }, target: { order: ['짝보다 한 걸음 앞서 걷기', '손을 내밀어 받을 곳 알리기', '공을 받으며 멈추지 않고 발 옮기기', '짝이 걸어갈 앞쪽으로 패스하기'] }, levels: { easy: { state: { order: ['짝보다 한 걸음 앞서 걷기', '손을 내밀어 받을 곳 알리기', '짝이 걸어갈 앞쪽으로 패스하기', '공을 받으며 멈추지 않고 발 옮기기'] } } }, difficulty: 0.2 },
                { prompt: '짝과 걸으며 패스를 이어 가요. 다 하면 ‘짝·모둠과 함께 해 보았어요’를 눌러요.', free: true },
                { prompt: '떨어뜨리지 않고 가장 많이 이은 횟수를 왕복마다 적어요.', toolOptions: { fields: [{ label: '1번째 왕복', unit: '번' }, { label: '2번째 왕복', unit: '번' }, { label: '3번째 왕복', unit: '번' }] }, target: { records: true }, levels: { easy: { prompt: '가장 많이 이은 횟수를 두 왕복 이상 적어요.', target: { records: 2 } } }, difficulty: 0.15 },
              ],
            },
            {
              id: 'a3', title: '활동 3. 네트 너머 표시한 칸으로 서브 보내기', minutes: 8, tool: 'timer',
              task: '허리 높이 네트에서 3m 뒤에 서서, 상대 코트에 표시한 칸으로 언더핸드 서브를 세 번 보내요. 칸 안에 떨어진 수를 적어요.',
              teacher: '"공을 든 손은 배 앞에, 치는 손은 주먹을 살짝 쥐고 뒤에서 앞으로 시계추처럼 흔들어 공 아래를 쳐요. 몸과 발은 보낼 칸을 향해요." 처음에는 가까운 칸, 세 번 중 두 번 넘게 들어가면 가운데 칸으로 옮긴다. 공을 주우러 갈 때는 모두 서브를 멈춘다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '언더핸드 서브 동작을 차례대로 놓아요.', toolOptions: { cards: ['치는 손을 뒤로 흔들어 올리기', '공 아래를 쳐 보낼 칸 쪽으로 손 뻗기', '몸과 발을 보낼 칸 쪽으로 서기', '공을 든 손을 배 앞에 두기'] }, target: { order: ['몸과 발을 보낼 칸 쪽으로 서기', '공을 든 손을 배 앞에 두기', '치는 손을 뒤로 흔들어 올리기', '공 아래를 쳐 보낼 칸 쪽으로 손 뻗기'] }, levels: { easy: { state: { order: ['몸과 발을 보낼 칸 쪽으로 서기', '공을 든 손을 배 앞에 두기', '공 아래를 쳐 보낼 칸 쪽으로 손 뻗기', '치는 손을 뒤로 흔들어 올리기'] } } }, difficulty: 0.2 },
                { prompt: '표시한 칸으로 서브를 세 번 보내요. 다 하면 ‘짝·모둠과 함께 해 보았어요’를 눌러요.', free: true },
                { prompt: '서브 세 번 가운데 표시한 칸에 떨어진 수와 보낸 칸을 적어요.', toolOptions: { fields: [{ label: '칸에 들어간 서브(3번 중)', unit: '번', max: 3 }, { label: '보낸 칸(가까운 1·가운데 2·먼 3)', unit: '번 칸', max: 3 }] }, target: { records: true }, difficulty: 0.15 },
              ],
            },
          ],
          {
            teacher: '"걸으며 이은 횟수가 왕복마다 늘었나요? 무엇을 맞추니 늘었나요?" 두세 짝이 답한다. 서브는 "세기"와 "몸 방향" 가운데 무엇을 고쳤는지 묻는다. 출구 질문은 새 상황이니 스스로 답하게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'emotion', options: { mode: 'branch', situation: '하은이는 "제자리에 서서 받아야 공을 안 놓쳐"라며 4:4 게임에서 한자리에만 서 있어요.', choices: [{ id: 'stay', text: '"맞아, 계속 서 있어"', result: '상대가 하은이 앞을 막아 패스가 오지 않았어요.', mood: '속상함', why: '경기에서는 상대가 그 자리를 막아요.' }, { id: 'move', text: '"빈 곳으로 걸어가 손을 내밀어 봐"', result: '하은이가 빈 곳에서 패스를 받았어요.', mood: '신남' }] }, prompt: '하은이에게 알맞은 말을 골라요.', target: { choice: 'move' }, difficulty: 0.15 },
              { type: 'choice', prompt: '언더핸드 서브가 표시한 칸보다 짧게 떨어졌어요. 먼저 무엇을 맞출까요?', options: ['세기를 조금 더 세게', '공을 든 손을 머리 위로', '눈을 감고 치기'], answer: 0, difficulty: 0.2, explain: '짧으면 세기를 조금 더해요. 몸 방향은 그대로 칸을 향해요.' },
              { type: 'short', prompt: '걸으며 패스를 이을 때 받을 사람이 할 일 두 가지를 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '걸으며 패스, 칸으로 서브',
          items: [
            { type: 'table', prompt: '걸으며 패스를 이은 횟수를 쓰세요.', columns: ['왕복', '1', '2', '3'], cells: [['이은 횟수(번)', '', '', '']] },
            { type: 'table', prompt: '서브 기록을 쓰세요.', columns: ['보낸 칸', '들어간 수(3번 중)', '고친 점'], rows: 2 },
            { type: 'choice', prompt: '"제자리에 서서 주고받는 것이 가장 좋은 방법"이라는 말에 대한 생각에 ○ 하세요.', options: ['맞아요', '아니에요, 경기에서는 상대가 그 자리를 막아요'], answer: '아니에요, 경기에서는 상대가 그 자리를 막아요' },
            { type: 'check', prompt: '오늘 지킨 약속에 ✓ 하세요.', options: ['공을 주우러 갈 때 모두 서브를 멈췄어요', '네트를 잡거나 넘어가지 않았어요', '걸으며 둘레 친구를 봤어요'] },
            { type: 'short', prompt: '서브를 칸에 넣으려고 맞춘 것 하나를 쓰세요.' },
          ],
          easy: {
            note: '받을 사람은 한 걸음 앞서, 손 내밀어 알리기! 서브는 몸을 칸 쪽으로.',
            items: [
              { type: 'short', prompt: '걸으며 가장 많이 이은 횟수를 쓰세요.' },
              { type: 'choice', prompt: '서브할 때 몸은 어디를 향하나요?', options: ['보낼 칸', '옆 친구'], answer: '보낼 칸' },
              { type: 'short', prompt: '칸에 들어간 서브 수를 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '그래프 값이 보이고, 카드가 거의 맞게 놓여 있으며, 이은 횟수는 두 왕복만 적어도 돼요.',
          base: '자료로 움직이며 받는 까닭을 찾고, 걸으며 패스와 칸 서브를 해요.',
          challenge: '그래프 값은 맞힌 뒤에만 보이고, 시간 재기 도구로 왕복 시간을 재며 열 번을 넘기면 빠르게 걷기로 해요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 제자리에 서서 주고받는 것이 가장 정확한 방법이라고 여긴다 → 가로채인 패스 자료로 경기에서는 움직여 받아야 함을 보인다. ② 걸으며 받을 때 멈춰 선다 → 받으며 발을 계속 옮기게 한다. ③ 서브를 팔 힘으로만 세게 친다 → 몸과 발을 칸으로 향하고 시계추처럼 흔들게 한다. 네트 둘레에서 공을 주울 때는 서브를 모두 멈추도록 교사가 호루라기로 알린다.',
      }),
      // ───────────────────────── 36 ─────────────────────────
      L(36, {
        title: '세 명이 돌며 바운드 패스 잇고 후프로 토스 보내기',
        objective: '세 명이 삼각형을 그리며 움직여 바운드 패스를 이어 가고, 두 손 토스로 공을 정한 후프 안에 보낼 수 있다.',
        illustration: art('three children moving in a paper triangle passing a ball that bounces once between them, and a child tossing a ball overhead toward a hoop on the floor', [
          { motif: 'sun', x: 410, y: 52, s: 0.6 }, { motif: 'cloud', x: 110, y: 52 }, { motif: 'hills', y: 222 },
          { motif: 'star', x: 240, y: 90 }, { motif: 'leaf', x: 80, y: 196 },
          { motif: 'text', x: 240, y: 165, text: '한 번 튀겨, 후프로!', size: 22 },
        ]),
        safety: [WARM, SPACE, BALL, LOOK],
        stages: stages(
          {
            teacher: '"상대가 우리 둘 사이에서 팔을 높이 들고 막으면 가슴 패스는 어떻게 될까요?" "막혀요"라는 대답을 받아 "그럴 때는 바닥에 한 번 튀겨 보내는 바운드 패스가 있어요." 이어 "배구에서 우리 편에게 공을 띄워 주는 토스도 오늘 해 봐요."',
            student: '상대가 팔을 높이 들고 막을 때 패스를 어떻게 보낼지 생각해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 바운드 패스와 토스의 바른 동작', minutes: 8, tool: 'mindmap',
              task: '상황에 맞는 패스와 잇고, 바운드 패스가 튀는 자리와 토스 손 모양을 골라요.',
              teacher: '"바운드 패스는 두 사람 사이에서 받는 사람 쪽으로 조금 더 가까운 곳, 3분의 2쯤에 튀겨요." 토스는 이마 앞에서 두 손으로 삼각형을 만들어 손가락으로 밀어 올린다고 시범한다. "손바닥으로 때리면 어떻게 될까요?"',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '상황과 알맞은 패스를 이어요.', toolOptions: { mode: 'match', topic: '어떤 패스를 쓸까?', slots: [{ id: 'block', label: '상대가 우리 사이에서 팔을 높이 들고 막아요' }, { id: 'open', label: '우리 사이가 비어 있고 친구가 가슴 앞에 손을 내밀어요' }, { id: 'net', label: '배구에서 우리 편이 공을 때릴 수 있게 띄워 줘요' }], cards: ['바운드 패스', '가슴 패스', '두 손 토스'] }, target: { match: { block: '바운드 패스', open: '가슴 패스', net: '두 손 토스' } }, levels: { easy: { state: { at: { '바운드 패스': 0 } } } }, difficulty: 0.2,
                  hints: ['상대가 어디를 막고 있는지, 공을 어디로 보내야 하는지 보세요.', '높은 곳이 막혔을 때 낮게 가는 패스가 어느 것인지 다시 보세요.', '팔을 높이 들고 막으면 바운드, 비어 있으면 가슴 패스, 배구에서 띄워 줄 때는 토스예요.'] },
                { prompt: '바운드 패스를 잘하려고 할 일만 골라요.', toolOptions: { mode: 'pick', topic: '바운드 패스', basket: '할 일', cards: ['받는 친구 쪽으로 더 가까운 곳에 튀겨요', '튀어 오른 공이 친구 허리 높이로 오게 해요', '내 발 바로 앞에 세게 튀겨요'] }, target: { pick: ['받는 친구 쪽으로 더 가까운 곳에 튀겨요', '튀어 오른 공이 친구 허리 높이로 오게 해요'] }, levels: { challenge: { prompt: '바운드 패스를 잘하려고 할 일만 골라요. 함정 카드가 둘 있어요.', toolOptions: { cards: ['받는 친구 쪽으로 더 가까운 곳에 튀겨요', '튀어 오른 공이 친구 허리 높이로 오게 해요', '내 발 바로 앞에 세게 튀겨요', '두 번 튀겨 천천히 보내요'] } } }, difficulty: 0.25,
                  hints: ['튀어 오른 공이 받는 친구 손에 닿기 좋은 높이가 되려면 어디에 튀겨야 할지 생각해요.', '내 발 앞에 튀기면 공이 어디서 떨어질지 떠올려 보세요.', '받는 친구 쪽 가까이에 한 번 튀겨, 허리 높이로 오게 해요.'] },
                { prompt: '두 손 토스 동작을 차례대로 놓아요.', toolOptions: { mode: 'order', cards: ['손가락으로 밀어 올려 보낼 곳 보기', '공 아래로 들어가 무릎 굽히기', '이마 앞에 두 손 삼각형 만들기', '무릎과 팔을 함께 펴기'] }, target: { order: ['공 아래로 들어가 무릎 굽히기', '이마 앞에 두 손 삼각형 만들기', '무릎과 팔을 함께 펴기', '손가락으로 밀어 올려 보낼 곳 보기'] }, levels: { easy: { state: { at: { '공 아래로 들어가 무릎 굽히기': 0 } } } }, difficulty: 0.25,
                  hints: ['토스는 몸을 공 아래에 먼저 두고, 아래에서 위로 힘을 이어요.', '팔을 펴는 카드가 손 모양 만들기보다 앞에 있는지 보세요.', '공 아래로 들어가 무릎 굽히기 → 이마 앞 삼각형 → 무릎·팔 펴기 → 밀어 올리기예요.'] },
              ],
            },
            {
              id: 'a2', title: '활동 2. 세 명 삼각형 바운드 패스 잇기', minutes: 10, tool: 'timer',
              task: '세 명이 3m 삼각형으로 서서, 패스한 사람은 패스한 쪽으로 한 칸 옮겨 가며 바운드 패스를 이어요. 떨어뜨리지 않고 이은 수를 세어요.',
              teacher: '"패스하고 나면 공을 따라 받은 사람 자리 쪽으로 걸어가요. 그래야 삼각형이 돌면서 이어져요." 처음 1분은 제자리 삼각형, 다음 2분은 돌며 잇기로 한다. "공보다 친구 손을 보고 보내요."',
              levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
              items: [
                { prompt: '삼각형 패스를 시작하기 전에 둘레를 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['옆 모둠 삼각형과 5걸음 넘게 떨어졌어요', '바닥에 미끄러운 곳이 없어요', '공을 놓치면 멈추고 주워 다시 시작하기로 했어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '세 명이 삼각형으로 돌며 바운드 패스를 이어요. 다 하면 ‘짝·모둠과 함께 해 보았어요’를 눌러요.', free: true },
                { prompt: '제자리 삼각형과 돌며 잇기에서 가장 많이 이은 수를 적어요.', toolOptions: { fields: [{ label: '제자리 삼각형', unit: '번' }, { label: '돌며 잇기', unit: '번' }] }, target: { records: true }, difficulty: 0.15 },
              ],
            },
            {
              id: 'a3', title: '활동 3. 두 손 토스로 후프 안에 보내기', minutes: 8, tool: 'timer',
              task: '짝이 던져 준 공을 두 손 토스로 2m 앞 바닥 후프 안에 떨어뜨려요. 다섯 번씩 하고 후프에 들어간 수를 적어요.',
              teacher: '부드러운 배구공이나 큰 고무공을 쓴다. 짝은 아래로 가볍게 던져 준다. "손바닥으로 때리지 말고 손가락으로 받아 밀어요. 무릎을 펴는 힘을 같이 써요." 다섯 번 중 세 번 넘게 들어가면 후프를 3m로 옮긴다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '짝이 던져 준 공을 두 손 토스로 후프에 보내요. 다 하면 ‘짝·모둠과 함께 해 보았어요’를 눌러요.', free: true },
                { prompt: '2m 후프 토스를 다섯 번씩 두 차례 하고, 차례마다 후프에 들어간 수를 적어요.', toolOptions: { fields: [{ label: '2m 첫 다섯 번', unit: '번', max: 5 }, { label: '2m 둘째 다섯 번', unit: '번', max: 5 }] }, target: { records: true }, levels: { challenge: { prompt: '2m와 3m 후프 모두 토스해 들어간 수를 적어요.', toolOptions: { fields: [{ label: '2m 후프(5번 중)', unit: '번', max: 5 }, { label: '3m 후프(5번 중)', unit: '번', max: 5 }] } } }, difficulty: 0.15 },
                { prompt: '토스가 후프를 넘어갔을 때 고칠 점과 짝의 말을 함께 이야기해요. 말한 뒤 ‘다 했어요’를 눌러요.', free: true, talk: true },
              ],
            },
          ],
          {
            teacher: '"제자리 삼각형과 돌며 잇기, 어느 쪽이 더 어려웠나요? 그래도 경기에서는 어느 쪽이 필요할까요?" 토스가 후프를 넘어간 학생에게는 "무릎을 얼마나 폈나요?"를 묻는다. 출구 질문은 새 상황이니 스스로 답하게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '새 상황', slots: [{ id: 'low', label: '키 큰 상대가 팔을 위로 뻗어 막고 있어요' }, { id: 'up', label: '배구에서 우리 편이 넘길 수 있게 높이 띄워요' }], cards: ['바운드 패스', '두 손 토스'] }, prompt: '새 상황과 알맞은 패스를 이어요.', target: { match: { low: '바운드 패스', up: '두 손 토스' } }, difficulty: 0.15 },
              { type: 'choice', prompt: '바운드 패스를 내 발 바로 앞에 세게 튀기면?', options: ['친구 허리 높이로 와요', '친구 머리 위로 높이 튀어 올라요', '공이 멈춰요'], answer: 1, difficulty: 0.25, explain: '받는 친구 쪽 가까이에 튀겨야 허리 높이로 와요.' },
              { type: 'short', prompt: '세 명이 돌며 패스를 이을 때 패스한 사람이 할 일을 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '바운드 패스와 토스',
          items: [
            { type: 'table', prompt: '삼각형 패스 기록을 쓰세요.', columns: ['방법', '가장 많이 이은 수(번)'], cells: [['제자리 삼각형', ''], ['돌며 잇기', '']] },
            { type: 'table', prompt: '토스 기록을 쓰세요.', columns: ['후프 거리', '들어간 수(5번 중)'], cells: [['2m', ''], ['3m', '']] },
            { type: 'choice', prompt: '두 손 토스는 손의 어디로 밀어 올리나요?', options: ['손바닥', '손가락', '주먹'], answer: '손가락' },
            { type: 'check', prompt: '오늘 지킨 약속에 ✓ 하세요.', options: ['옆 모둠과 5걸음 넘게 떨어졌어요', '공을 놓치면 멈추고 주웠어요', '친구 손을 보고 보냈어요'] },
            { type: 'short', prompt: '상대가 팔을 높이 들고 막을 때 쓸 패스와 그 까닭을 쓰세요.' },
          ],
          easy: {
            note: '바운드 패스는 친구 쪽 가까이에 한 번! 토스는 이마 앞 삼각형, 손가락으로 밀기.',
            items: [
              { type: 'choice', prompt: '상대가 팔을 높이 들고 막으면?', options: ['바운드 패스', '높이 던지기'], answer: '바운드 패스' },
              { type: 'short', prompt: '삼각형 패스로 가장 많이 이은 수를 쓰세요.' },
              { type: 'short', prompt: '후프에 들어간 토스 수를 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 놓으면 바로 표시되고 첫 카드가 미리 놓여 있어요. 토스 기록은 2m 후프만 적어요.',
          base: '바운드 패스와 토스 동작을 가르고, 돌며 잇기와 후프 토스를 해요.',
          challenge: '바운드 패스 할 일 고르기에 함정 카드가 더 섞이고, 2m·3m 토스 기록을 모두 적으며 시간 재기 도구가 보여요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 제자리에서만 주고받으려 한다 → 1분 제자리 뒤 바로 돌며 잇기로 바꾸어 경기 움직임을 익힌다. ② 바운드 패스를 내 발 앞에 튀긴다 → 바닥에 테이프로 3분의 2 지점을 표시한다. ③ 토스를 손바닥으로 때린다 → 손가락 삼각형과 무릎 펴기를 함께 시범한다. 공은 부드러운 공을 쓰고, 교사는 삼각형 모둠 사이 간격을 관찰한다.',
      }),
      // ───────────────────────── 37 ─────────────────────────
      L(37, {
        title: '패스 열 번 게임과 점수 칸 서브 대회 열기',
        objective: '상대가 막는 패스 열 번 게임에서 움직이며 패스를 이어 가고, 점수가 다른 칸을 골라 서브를 보내 모둠 점수를 그래프로 나타낼 수 있다.',
        illustration: art('two teams in paper bibs passing a ball while counting to ten on fingers, and a low net with court squares labeled one, two and three points', [
          { motif: 'sun', x: 410, y: 52, s: 0.7 }, { motif: 'cloud', x: 100, y: 52 }, { motif: 'hills', y: 222 },
          { motif: 'star', x: 130, y: 115 }, { motif: 'star', x: 350, y: 115 },
          { motif: 'text', x: 240, y: 165, text: '열 번 잇고, 칸으로!', size: 22 },
        ]),
        safety: [WARM, BALL, LOOK, NET, STOP],
        stages: stages(
          {
            teacher: '"지난 두 시간은 상대 없이 패스를 이었어요. 상대가 막으면 열 번 이어 가기가 쉬울까요?" "어려워요"를 받아 "그럼 무엇이 더 필요할까요?"라고 묻고 "빈 곳으로 움직이기"를 끌어낸다. 패스 열 번 게임 규칙을 칠판에 쓴다: 우리 편끼리 패스 열 번을 이으면 1점, 공 가진 사람은 세 걸음까지, 가로채이거나 떨어뜨리면 상대 공으로 처음부터.',
            student: '상대가 막을 때 패스를 열 번 이으려면 무엇이 필요할지 생각해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 패스 열 번 게임 규칙과 시간', minutes: 6, tool: 'timer',
              task: '패스 열 번 게임에서 공격하는 편이 하는 차례를 놓고, 경기 시간을 타이머에 맞춰요.',
              teacher: '"패스할 때마다 모두 소리 내어 \'하나, 둘…\' 세요. 세는 소리가 상대에게도 들려 공정해요." 같은 사람에게 바로 되돌려 주는 패스는 세지 않는다는 규칙도 더한다. 그래야 둘만 주고받지 않고 모두 움직인다.',
              levels: { easy: { showTotal: true }, base: {}, challenge: {} },
              items: [
                { prompt: '패스 열 번 게임에서 공격하는 편이 하는 차례대로 놓아요.', toolOptions: { cards: ['열 번째 패스를 받으면 손 들어 1점 외치기', '빈 곳으로 움직여 손 내밀기', '세 걸음 안에 다른 친구에게 패스하기', '모두 함께 패스 수 세기'] }, target: { order: ['빈 곳으로 움직여 손 내밀기', '세 걸음 안에 다른 친구에게 패스하기', '모두 함께 패스 수 세기', '열 번째 패스를 받으면 손 들어 1점 외치기'] }, levels: { easy: { state: { order: ['빈 곳으로 움직여 손 내밀기', '세 걸음 안에 다른 친구에게 패스하기', '열 번째 패스를 받으면 손 들어 1점 외치기', '모두 함께 패스 수 세기'] } } }, difficulty: 0.2 },
                { prompt: '3분 경기를 3판, 판 사이에 1분 30초 작전 시간을 두도록 타이머를 맞춰요.', toolOptions: { plan: { work: 120, rest: 60, rounds: 2 }, workStep: 30, restStep: 30 }, target: { plan: { work: 180, rest: 90, rounds: 3 } }, levels: { challenge: { prompt: '판마다 같은 시간, 작전 시간 1분 30초로 3판을 해서 전체 12분이 되게 맞춰요.', target: { plan: { rest: 90, rounds: 3 }, total: 720 } } }, difficulty: 0.25 },
                { prompt: '패스 열 번 게임을 하기 전에 경기장을 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['경기장 네 귀퉁이에 콘을 놓았어요', '두 편 조끼 색이 달라요', '몸이 닿으면 상대 공이라는 규칙을 알아요'] }, target: { safety: true }, difficulty: 0.1 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 패스 열 번 게임과 점수 칸 서브 대회', minutes: 13, tool: 'timer',
              task: '4:4로 패스 열 번 게임을 3판 해요. 작전 시간에는 "누가 어느 빈 곳으로 갈지"를 정해요. 판마다 우리 편이 가장 많이 이은 패스 수를 적고, 게임 뒤 점수 칸 서브 대회를 해요.',
              teacher: '경기장은 가로 12m·세로 10m. 기다리는 모둠은 패스 수를 함께 세는 심판을 맡는다. 작전 시간에 "공 가진 친구 양옆과 앞에 한 명씩"처럼 자리를 말로 정하게 한다. 열 번이 어려운 모둠은 다섯 번으로 줄여도 된다. 서브 대회 전에 "먼 칸은 점수가 크지만 들어가기 어려워요. 나는 어느 칸을 고를까요?"라고 묻고 35차시 기록을 근거로 칸을 고르게 한다. 서브는 한 줄로 서서 차례로 하고, 공은 대회가 끝난 뒤 한꺼번에 줍는다.',
              levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
              items: [
                { prompt: '모둠과 패스 열 번 게임 3판을 해요. 다 하면 ‘짝·모둠과 함께 해 보았어요’를 눌러요.', free: true },
                { prompt: '판마다 우리 편이 가장 많이 이은 패스 수를 적어요.', toolOptions: { fields: [{ label: '1판', unit: '번' }, { label: '2판', unit: '번' }, { label: '3판', unit: '번' }] }, target: { records: true }, levels: { easy: { prompt: '우리 편이 가장 많이 이은 패스 수를 두 판 이상 적어요.', target: { records: 2 } } }, difficulty: 0.15 },
                { prompt: '작전 시간에 정한 "빈 곳으로 가는 방법"을 모둠 친구와 한 번씩 말해요. 말한 뒤 ‘다 했어요’를 눌러요.', free: true, talk: true },
                { prompt: '게임 뒤 점수 칸 서브 대회를 해요. 한 사람이 세 번씩 보내요. 다 하면 ‘짝·모둠과 함께 해 보았어요’를 눌러요.', free: true },
              ],
            },
            {
              id: 'a3', title: '활동 3. 서브 대회 점수를 그래프로 나타내기', minutes: 7, tool: 'chart',
              task: '서브 대회는 네트 너머 가까운 칸 1점, 가운데 칸 2점, 먼 칸 3점이었어요. 별님 모둠 점수로 그래프를 만들고 읽은 뒤, 우리 모둠 점수도 활동지에 적어요.',
              teacher: '"막대 높이는 그 사람의 점수예요. 모둠 점수는 네 막대를 모두 더해요." 그래프를 다 만든 뒤 "가장 높은 친구는 어느 칸을 많이 골랐을까요?"라고 물어, 점수가 칸 고르기와 정확성에 따라 달라진다는 것을 짚는다. 우리 모둠 점수도 같은 방법으로 활동지에 더해 적게 한다.',
              levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '별님 모둠 서브 점수(가온 5점, 나래 7점, 다솜 3점, 라엘 6점)로 막대그래프를 완성해요.', toolOptions: { type: 'bar', title: '별님 모둠 서브 대회 점수', unit: '점', xLabel: '이름', yLabel: '점수', data: [['가온', 5], ['나래', 7], ['다솜', 3], ['라엘', 6]] }, target: { build: true }, levels: { easy: { toolOptions: { given: [0, 1] } } }, difficulty: 0.2 },
                { prompt: '별님 모둠 그래프에서 서브 점수가 가장 높은 사람을 골라요.', toolOptions: { type: 'bar', mode: 'read', title: '별님 모둠 서브 대회 점수', unit: '점', xLabel: '이름', data: [['가온', 5], ['나래', 7], ['다솜', 3], ['라엘', 6]], question: '점수가 가장 높은 사람은?', choices: ['가온', '나래', '다솜', '라엘'] }, target: { pick: 1 }, difficulty: 0.15 },
                { prompt: '별님 모둠 네 사람의 서브 점수를 모두 더하면 몇 점인지 써요.', toolOptions: { type: 'bar', mode: 'read', title: '별님 모둠 서브 대회 점수', unit: '점', xLabel: '이름', data: [['가온', 5], ['나래', 7], ['다솜', 3], ['라엘', 6]], question: '모둠 점수는 모두 몇 점?' }, target: { value: 21 }, difficulty: 0.25,
                  hints: ['네 사람의 막대 높이를 하나씩 읽어 적어 보세요.', '읽은 네 수를 빠뜨리지 않고 차례로 더했는지 보세요.', '5와 7을 더하고, 거기에 3과 6을 차례로 더해요.'] },
              ],
            },
          ],
          {
            teacher: '"패스 열 번 게임에서 판이 갈수록 이은 수가 늘었나요? 작전 시간에 정한 것이 도움이 되었나요?" 서브 대회에서 먼 칸을 고른 친구와 가까운 칸을 고른 친구에게 까닭을 묻는다. 출구 1번은 새 모둠 자료이니 스스로 읽게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '달님 모둠 패스 열 번 게임 기록', unit: '번', xLabel: '판', data: [['1판', 4], ['2판', 7], ['3판', 10]], question: '처음보다 마지막 판에 몇 번 더 이었나요?' }, prompt: '달님 모둠 그래프를 읽고 1판보다 3판에 몇 번 더 이었는지 써요.', target: { value: 6 }, difficulty: 0.2 },
              { type: 'choice', prompt: '상대가 막는 패스 게임에서 패스를 오래 이으려면?', options: ['한자리에 서서 기다려요', '빈 곳으로 움직여 손을 내밀어요', '공을 오래 들고 있어요'], answer: 1, difficulty: 0.15, explain: '빈 곳으로 움직여야 상대가 막기 어려운 패스 길이 생겨요.' },
              { type: 'short', prompt: '서브 대회에서 내가 고른 칸과 그 칸을 고른 까닭을 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '패스 열 번과 서브 대회',
          items: [
            { type: 'table', prompt: '패스 열 번 게임 기록을 쓰세요.', columns: ['판', '1판', '2판', '3판'], cells: [['가장 많이 이은 수(번)', '', '', '']] },
            { type: 'table', prompt: '서브 대회 기록을 쓰세요.', columns: ['서브', '1번', '2번', '3번', '합계'], cells: [['고른 칸', '', '', '', ''], ['얻은 점수', '', '', '', '']] },
            { type: 'choice', prompt: '같은 사람에게 바로 되돌려 주는 패스를 세지 않는 까닭은?', options: ['모두가 움직여 패스에 끼게 하려고', '점수를 줄이려고', '공을 아끼려고'], answer: '모두가 움직여 패스에 끼게 하려고' },
            { type: 'check', prompt: '오늘 지킨 약속에 ✓ 하세요.', options: ['몸이 닿지 않게 막았어요', '패스 수를 소리 내어 함께 셌어요', '서브 공은 대회가 끝난 뒤 주웠어요'] },
            { type: 'short', prompt: '작전 시간에 정한 것이 경기에서 어떻게 되었는지 쓰세요.' },
          ],
          easy: {
            note: '빈 곳으로 움직여 손 내밀기! 서브는 고른 칸으로 몸을 향해요.',
            items: [
              { type: 'short', prompt: '패스 열 번 게임에서 가장 많이 이은 수를 쓰세요.' },
              { type: 'choice', prompt: '패스를 이으려면?', options: ['빈 곳으로 움직여요', '서서 기다려요'], answer: '빈 곳으로 움직여요' },
              { type: 'short', prompt: '서브 대회에서 얻은 점수를 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '그래프 막대 두 개가 미리 그려져 있고 값이 보이며, 타이머 전체 시간이 보여요. 패스 기록은 두 판만 적어도 돼요.',
          base: '상대가 막는 게임에서 패스를 잇고, 점수 칸을 골라 서브한 뒤 그래프로 나타내요.',
          challenge: '전체 시간을 셈해 타이머를 맞추고, 그래프 값은 맞힌 뒤에만 보이며, 시간 재기 도구로 판을 재요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 상대가 막으면 제자리에 서서 공을 기다린다 → 작전 시간에 갈 빈 곳을 말로 정하게 한다. ② 잘하는 둘만 주고받는다 → 같은 사람에게 바로 되돌려 주는 패스는 세지 않는다. ③ 서브 칸을 점수만 보고 고른다 → 35차시 내 기록을 근거로 고르게 한다. 교사는 경기장 옆에서 몸 닿기를, 서브 줄 옆에서 공 줍는 때를 관찰한다.',
      }),
      // ───────────────────────── 38 ─────────────────────────
      L(38, {
        title: '실패한 패스를 거리·세기·때맞춤으로 나누고 하나 바꾸기',
        objective: '성공한 패스와 실패한 패스의 차이를 거리·세기·때맞춤으로 나누고, 바꿀 조건 하나를 정해 다시 열 번 주고받아 견줄 수 있다.',
        illustration: art('children sorting paper cards of missed passes into three baskets labeled distance, strength and timing, a ball and cones beside them', [
          { motif: 'sun', x: 410, y: 52, s: 0.6 }, { motif: 'cloud', x: 100, y: 52 }, { motif: 'hills', y: 222 },
          { motif: 'leaf', x: 80, y: 196 }, { motif: 'star', x: 360, y: 110 },
          { motif: 'text', x: 240, y: 150, text: '거리 · 세기 · 때', size: 24 },
        ]),
        safety: [WARM, SPACE, BALL, LOOK],
        stages: stages(
          {
            teacher: '"지난 패스 열 번 게임에서 패스가 끊긴 순간이 있었지요? 누구 탓이었나요?" "받는 사람이 늦게 움직여서요"라는 대답이 나오면 "보낸 공은 어땠을까요? 너무 멀리, 너무 세게, 너무 일찍 보내지는 않았을까요?"라고 되묻는다. "오늘은 실패를 탓하지 않고 조건으로 나누어 봐요."',
            student: '패스가 끊겼을 때 받는 사람 말고 보낸 공은 어땠는지 떠올려 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 실패한 패스를 조건으로 나누기', minutes: 9, tool: 'mindmap',
              task: '실패한 패스 장면을 거리·세기·때맞춤 가운데 어긋난 조건으로 나누고, 실패를 돌아볼 때 알맞은 말을 골라요.',
              teacher: '"거리는 두 사람 사이가 멀어 상대가 끼어들 틈이 생긴 것, 세기는 공이 너무 세거나 약한 것, 때맞춤은 받을 사람이 준비되기 전이나 너무 늦게 보낸 것이에요." 칠판에 세 낱말을 적는다. "네가 늦어서"를 고른 학생에게 "그 말을 들은 친구는 다음에 무엇을 고칠 수 있을까요?"라고 묻는다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '실패한 패스 장면을 어긋난 조건으로 나누어요.', toolOptions: { topic: '실패한 패스', slots: ['거리', '세기', '때맞춤'], cards: ['7m 떨어진 친구에게 보내다 중간에서 가로채였어요', '멀리 있는 친구에게 높이 던져 상대가 먼저 잡았어요', '3m 앞 친구 손에서 공이 튕겨 나갔어요', '공이 친구 앞에서 힘없이 떨어졌어요', '친구가 돌아보기 전에 보냈어요', '친구가 손을 내민 뒤 한참 있다 보내 상대가 먼저 왔어요'] }, target: { sort: { '거리': ['7m 떨어진 친구에게 보내다 중간에서 가로채였어요', '멀리 있는 친구에게 높이 던져 상대가 먼저 잡았어요'], '세기': ['3m 앞 친구 손에서 공이 튕겨 나갔어요', '공이 친구 앞에서 힘없이 떨어졌어요'], '때맞춤': ['친구가 돌아보기 전에 보냈어요', '친구가 손을 내민 뒤 한참 있다 보내 상대가 먼저 왔어요'] } }, levels: { easy: { state: { at: { '7m 떨어진 친구에게 보내다 중간에서 가로채였어요': 0 } } } }, difficulty: 0.3,
                  hints: ['두 사람 사이가 멀었는지, 공 힘이 맞지 않았는지, 보낸 때가 어긋났는지 하나씩 물어요.', '\'돌아보기 전\', \'한참 있다\'처럼 시간을 말하는 카드가 어느 칸에 있는지 보세요.', '멀리 떨어져 가로채인 것은 거리, 튕기거나 힘없이 떨어진 것은 세기, 보낸 때가 어긋난 것은 때맞춤이에요.'] },
                { prompt: '실패한 패스를 돌아볼 때 알맞은 말만 골라요.', toolOptions: { mode: 'pick', topic: '실패를 돌아보는 말', basket: '알맞은 말', cards: ['"내 세기가 셌나 봐, 다음엔 줄일게"', '"거리가 멀었으니 한 걸음 다가가서 줄게"', '"네가 늦게 움직여서 그래"', '"공이 이상해서 그래"'] }, target: { pick: ['"내 세기가 셌나 봐, 다음엔 줄일게"', '"거리가 멀었으니 한 걸음 다가가서 줄게"'] }, difficulty: 0.2,
                  hints: ['다음에 무엇을 고칠지 알 수 있는 말이 알맞은 말이에요.', '사람이나 공을 탓하는 말이 바구니에 들어갔는지 보세요.', '내가 바꿀 조건(세기·거리)을 말한 두 카드가 알맞아요.'] },
                { prompt: '성공한 패스와 실패한 패스를 견준 말을 알맞은 조건과 이어요.', toolOptions: { mode: 'match', topic: '성공과 실패의 차이', slots: [{ id: 'd', label: '3m에서는 이어졌는데 7m에서는 가로채였어요' }, { id: 's', label: '가볍게 밀 때는 받았는데 세게 던질 때는 튕겼어요' }, { id: 't', label: '손 내밀자 바로 줄 때는 받았는데 늦게 주니 막혔어요' }], cards: ['거리', '세기', '때맞춤'] }, target: { match: { d: '거리', s: '세기', t: '때맞춤' } }, levels: { easy: { state: { at: { '거리': 0 } } } }, difficulty: 0.2 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 모둠 실패 기록 그래프 읽기', minutes: 7, tool: 'chart',
              task: '준서 모둠이 조건별로 센 실패 패스 그래프를 읽고, 먼저 바꿀 조건을 찾아요.',
              teacher: '"가장 많이 어긋난 조건부터 바꾸면 성공이 가장 많이 늘 수 있어요." 바꿀 조건은 한 번에 하나만 고른다는 것을 짚는다. 둘을 함께 바꾸면 무엇이 도움이 되었는지 알 수 없다는 것도 묻는다.',
              levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '준서 모둠 그래프에서 실패가 가장 많았던 조건을 골라요.', toolOptions: { type: 'bar', mode: 'read', title: '준서 모둠 실패 패스(조건별, 40번 중)', unit: '번', xLabel: '조건', data: [['거리', 2], ['세기', 6], ['때맞춤', 3]], question: '실패가 가장 많았던 조건은?', choices: ['거리', '세기', '때맞춤'] }, target: { pick: 1 }, difficulty: 0.15 },
                { prompt: '준서 모둠의 실패 패스는 모두 몇 번인지 써요.', toolOptions: { type: 'bar', mode: 'read', title: '준서 모둠 실패 패스(조건별, 40번 중)', unit: '번', xLabel: '조건', data: [['거리', 2], ['세기', 6], ['때맞춤', 3]], question: '실패 패스는 모두 몇 번?' }, target: { value: 11 }, difficulty: 0.2 },
                { prompt: '준서 모둠이 세기를 바꾼 뒤 다시 센 그래프예요. 세기 실패는 몇 번 줄었는지 써요.', toolOptions: { type: 'bar', mode: 'read', title: '세기 실패 횟수(바꾸기 전과 뒤)', unit: '번', xLabel: '때', data: [['바꾸기 전', 6], ['세기를 줄인 뒤', 2]], question: '몇 번 줄었나요?' }, target: { value: 4 }, difficulty: 0.2,
                  conclude: '가장 많이 어긋난 조건 하나를 바꾸면 실패가 줄어요. 받는 사람 탓만 하면 바꿀 것을 찾을 수 없어요.' },
              ],
            },
            {
              id: 'a3', title: '활동 3. 조건 하나 바꾸어 다시 열 번', minutes: 10, tool: 'timer',
              task: '짝과 5m에서 가슴 패스를 열 번 주고받으며 실패를 조건별로 세어요. 가장 많은 조건 하나를 바꾸어 다시 열 번 하고, 성공 수를 견주어요.',
              teacher: '실패할 때마다 받은 사람이 "거리", "세기", "때" 가운데 하나로만 말한다. "바꿀 조건 하나만 정해요. 세기라면 \'반만 세게\', 거리라면 \'한 걸음 다가가기\', 때라면 \'손 보고 바로\'처럼 구체적으로요."',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '짝과 열 번 주고받고, 조건 하나를 바꾸어 다시 열 번 해요. 다 하면 ‘짝·모둠과 함께 해 보았어요’를 눌러요.', free: true },
                { prompt: '처음 열 번에서 조건별로 센 실패 수를 적어요.', toolOptions: { fields: [{ label: '거리', unit: '번', max: 10 }, { label: '세기', unit: '번', max: 10 }, { label: '때맞춤', unit: '번', max: 10 }] }, target: { records: true }, difficulty: 0.15 },
                { prompt: '조건을 바꾸기 전과 뒤의 성공 수를 적어요(10번 가운데).', toolOptions: { fields: [{ label: '바꾸기 전 성공', unit: '번', max: 10 }, { label: '바꾼 뒤 성공', unit: '번', max: 10 }] }, target: { records: true }, difficulty: 0.15 },
              ],
            },
          ],
          {
            teacher: '"조건 하나를 바꾸니 성공이 늘었나요? 무엇을 바꾸었나요?" 두세 짝이 답한다. 성공이 늘지 않은 짝에게는 "다른 조건이 더 많이 어긋나지 않았는지 기록을 다시 봐요"라고 말한다. 출구 1번은 새 장면이니 스스로 나누게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { topic: '새 장면', slots: ['거리', '세기', '때맞춤'], cards: ['10m 앞 친구에게 보내다 중간에서 끊겼어요', '2m 앞 친구에게 세게 던져 놓쳤어요', '친구가 다른 곳을 볼 때 보냈어요'] }, prompt: '새 실패 장면을 어긋난 조건으로 나누어요.', target: { sort: { '거리': ['10m 앞 친구에게 보내다 중간에서 끊겼어요'], '세기': ['2m 앞 친구에게 세게 던져 놓쳤어요'], '때맞춤': ['친구가 다른 곳을 볼 때 보냈어요'] } }, difficulty: 0.25 },
              { type: 'choice', prompt: '패스가 실패했을 때 알맞은 생각은?', options: ['받는 사람이 늦어서예요', '거리·세기·때맞춤 가운데 무엇이 어긋났는지 찾아요', '공이 나빠서예요'], answer: 1, difficulty: 0.15, explain: '어긋난 조건을 찾아야 다음에 바꿀 수 있어요.' },
              { type: 'short', prompt: '오늘 바꾼 조건과 바꾸기 전·뒤 성공 수를 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '실패를 조건으로',
          items: [
            { type: 'table', prompt: '처음 열 번의 실패를 조건별로 쓰세요.', columns: ['거리', '세기', '때맞춤'], rows: 1 },
            { type: 'table', prompt: '바꾼 조건과 성공 수를 쓰세요.', columns: ['바꾼 조건', '어떻게 바꾸었나', '바꾸기 전 성공', '바꾼 뒤 성공'], rows: 1 },
            { type: 'choice', prompt: '"친구가 손을 내민 뒤 한참 있다 보내 상대가 먼저 왔어요"는 무엇이 어긋났나요?', options: ['거리', '세기', '때맞춤'], answer: '때맞춤' },
            { type: 'choice', prompt: '바꿀 조건은 한 번에 몇 개를 고르나요?', options: ['하나', '셋 모두'], answer: '하나' },
            { type: 'short', prompt: '실패한 패스를 받는 사람 탓으로만 돌리면 안 되는 까닭을 쓰세요.' },
          ],
          easy: {
            note: '멀면 거리, 너무 세거나 약하면 세기, 보낸 때가 어긋나면 때맞춤.',
            items: [
              { type: 'choice', prompt: '2m 앞 친구 손에서 공이 튕겨 나갔다면?', options: ['세기', '거리'], answer: '세기' },
              { type: 'short', prompt: '오늘 바꾼 조건을 쓰세요.' },
              { type: 'short', prompt: '바꾼 뒤 성공 수를 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 놓으면 바로 표시되고 첫 카드가 미리 놓여 있으며, 그래프 값이 보여요.',
          base: '실패를 세 조건으로 나누고, 조건 하나를 바꾸어 성공 수를 견주어요.',
          challenge: '그래프 값은 맞힌 뒤에만 보여요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 실패한 패스는 받는 사람이 늦게 움직인 탓이라고 여긴다 → 보낸 공의 거리·세기·때맞춤을 먼저 살피게 하고, 탓하는 말 대신 조건 낱말로만 말하게 한다. ② 여러 조건을 한꺼번에 바꾼다 → 하나만 바꾸어야 무엇이 도움이 되었는지 안다. ③ 때맞춤을 세기와 헷갈린다 → "언제 보냈나"를 묻는다. 교사는 짝 사이를 돌며 받은 사람이 조건 낱말로 말하는지 듣는다.',
      }),
      // ───────────────────────── 39 ─────────────────────────
      L(39, {
        title: '발 패스 게임에서 짝의 실패를 세어 그래프로 고칠 점 찾기',
        objective: '4:4 발 패스 게임에서 짝의 실패 패스를 조건별로 세어 막대그래프로 나타내고, 가장 많은 조건을 바꾸어 다시 해 볼 수 있다.',
        illustration: art('children playing a small-sided soccer passing game while partners on the sideline mark tally cards for distance, strength and timing', [
          { motif: 'sun', x: 410, y: 52, s: 0.6 }, { motif: 'cloud', x: 110, y: 50 }, { motif: 'hills', y: 222 },
          { motif: 'tree', x: 60, y: 198, s: 0.7 }, { motif: 'flower', x: 420, y: 212 },
          { motif: 'text', x: 240, y: 150, text: '세어 보고 고쳐요', size: 22 },
        ]),
        safety: [WARM, BALL, LOOK, STOP],
        stages: stages(
          {
            teacher: '"지난 시간에는 손 패스 실패를 조건으로 나누었어요. 발 패스 게임에서도 같을까요?" "발은 세기 맞추기가 더 어려워요" 같은 말을 받는다. "오늘은 내가 하는 동안 짝이 실패를 세어 주고, 그 기록을 그래프로 그려 고칠 점을 찾아요."',
            student: '발 패스에서 가장 많이 어긋날 것 같은 조건을 어림해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 발 패스 게임과 관찰 준비', minutes: 6, tool: 'timer',
              task: '경기 시간을 타이머에 맞추고, 짝의 실패 패스를 세는 차례를 정해요.',
              teacher: '"실패 패스는 상대에게 빼앗기거나 줄 밖으로 나간 패스예요. 그때마다 거리·세기·때 가운데 하나에 바로 표시해요." 헷갈리면 "세기"에 넣지 말고 물음표 칸에 적게 한다. 경기는 4:4, 콘 골대에 땅볼로 넣으면 1점이다.',
              levels: { easy: { showTotal: true }, base: {}, challenge: {} },
              items: [
                { prompt: '4분 경기를 두 판, 판 사이에 2분 쉬며 역할을 바꾸도록 타이머를 맞춰요.', toolOptions: { plan: { work: 180, rest: 60, rounds: 3 }, workStep: 60, restStep: 60 }, target: { plan: { work: 240, rest: 120, rounds: 2 } }, difficulty: 0.25 },
                { prompt: '짝의 실패 패스를 세는 차례대로 카드를 놓아요.', toolOptions: { cards: ['판이 끝나면 짝에게 표를 보여 주기', '실패가 나면 어긋난 조건에 바로 표시하기', '관찰 줄에 서서 짝의 번호 찾기', '헷갈리면 물음표 칸에 적기'] }, target: { order: ['관찰 줄에 서서 짝의 번호 찾기', '실패가 나면 어긋난 조건에 바로 표시하기', '헷갈리면 물음표 칸에 적기', '판이 끝나면 짝에게 표를 보여 주기'] }, levels: { easy: { state: { order: ['관찰 줄에 서서 짝의 번호 찾기', '실패가 나면 어긋난 조건에 바로 표시하기', '판이 끝나면 짝에게 표를 보여 주기', '헷갈리면 물음표 칸에 적기'] } } }, difficulty: 0.2 },
                { prompt: '4:4 발 패스 게임을 하기 전에 경기장과 몸을 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['콘 골대 둘레에 돌·물이 없어요', '공은 무릎 아래 땅볼로만 차기로 했어요', '정강이 보호대나 긴 양말을 신었어요'] }, target: { safety: true }, difficulty: 0.1 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 4:4 발 패스 게임과 짝 관찰', minutes: 12, tool: 'timer',
              task: '첫 판은 내가 경기하고 짝이 세어요. 두 번째 판은 바꾸어요. 짝이 센 내 실패 패스를 조건별로 적어요.',
              teacher: '관찰하는 짝은 경기장 밖 관찰 줄 뒤에서만 센다. 판 사이 2분에는 표를 보며 "가장 많은 조건 하나"를 짝과 말한다. 높이 뜬 공은 바로 경기를 멈추고 다시 시작한다.',
              levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
              items: [
                { prompt: '두 판을 하며 서로의 실패를 세어 줘요. 다 하면 ‘짝·모둠과 함께 해 보았어요’를 눌러요.', free: true },
                { prompt: '짝이 센 내 실패 패스 수를 조건별로 적어요.', toolOptions: { fields: [{ label: '거리', unit: '번' }, { label: '세기', unit: '번' }, { label: '때맞춤', unit: '번' }] }, target: { records: true }, levels: { easy: { prompt: '짝이 센 내 실패 패스 수를 두 조건 이상 적어요.', target: { records: 2 } } }, difficulty: 0.15 },
                { prompt: '짝에게 내 표에서 가장 많은 조건과 다음 판에 바꿀 방법 하나를 말해요. 말한 뒤 ‘다 했어요’를 눌러요.', free: true, talk: true },
              ],
            },
            {
              id: 'a3', title: '활동 3. 하준이 기록으로 그래프 그리고 고칠 점 찾기', minutes: 8, tool: 'chart',
              task: '하준이의 관찰표를 막대그래프로 나타내고, 먼저 바꿀 조건과 바꾼 결과를 읽어요. 그다음 내 기록도 활동지에 그래프로 그려요.',
              teacher: '"하준이는 때맞춤 실패가 가장 많아요. 때맞춤을 바꾼다면 어떻게 해야 할까요?" "짝이 빈 곳에 도착할 때 차기", "짝 발을 보고 차기" 같은 구체적인 방법을 듣는다. 바꾼 뒤 그래프는 실패 수이니 줄어야 좋다는 것을 짚는다.',
              levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '하준이 관찰표(거리 1번, 세기 2번, 때맞춤 5번)를 막대그래프로 나타내요.', toolOptions: { type: 'bar', title: '하준이의 실패 발 패스(조건별)', unit: '번', xLabel: '조건', yLabel: '실패 수', data: [['거리', 1], ['세기', 2], ['때맞춤', 5]] }, target: { build: true }, levels: { easy: { toolOptions: { given: [0] } } }, difficulty: 0.2 },
                { prompt: '하준이가 먼저 바꿀 조건을 골라요.', toolOptions: { type: 'bar', mode: 'read', title: '하준이의 실패 발 패스(조건별)', unit: '번', xLabel: '조건', data: [['거리', 1], ['세기', 2], ['때맞춤', 5]], question: '먼저 바꿀 조건은?', choices: ['거리', '세기', '때맞춤'] }, target: { pick: 2 }, difficulty: 0.15 },
                { prompt: '하준이가 때맞춤을 바꾼 뒤의 실패 수예요. 바꾼 방법이 도움이 되었나요?', toolOptions: { type: 'bar', mode: 'read', title: '하준이의 때맞춤 실패(바꾸기 전과 뒤)', unit: '번', xLabel: '때', data: [['바꾸기 전', 5], ['짝이 도착할 때 차기', 2]], question: '도움이 되었나요?', choices: ['도움이 되었어요', '도움이 되지 않았어요'] }, target: { pick: 0 }, difficulty: 0.2,
                  hints: ['이 그래프는 실패 수예요. 실패 수가 줄면 좋아진 거예요.', '바꾸기 전과 뒤 막대 가운데 어느 쪽이 짧은지 보세요.', '실패가 줄었으니 바꾼 방법이 도움이 되었어요.'] },
              ],
            },
          ],
          {
            teacher: '"내 표에서 가장 많은 조건은 무엇이었나요? 다음 판에 어떻게 바꾸기로 했나요?" 두세 명이 답한다. 실패를 짝 탓으로 말하는 학생이 있으면 "짝이 센 표에서 내 조건을 찾아요"라고 돌린다. 출구 1번은 새 친구 기록이니 스스로 판단하게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '수아의 실패 발 패스(조건별)', unit: '번', xLabel: '조건', data: [['거리', 4], ['세기', 1], ['때맞춤', 2]], question: '수아가 먼저 바꿀 조건은?', choices: ['거리', '세기', '때맞춤'] }, prompt: '수아의 실패 그래프를 읽고 먼저 바꿀 조건을 골라요.', target: { pick: 0 }, difficulty: 0.2 },
              { type: 'tool', tool: 'emotion', options: { mode: 'branch', situation: '발 패스가 끊기자 친구가 "네가 늦게 달려서잖아"라고 해요. 짝이 센 표에는 세기 실패가 가장 많아요.', choices: [{ id: 'blame', text: '"아니야, 네가 못 받은 거야"', result: '둘 다 기분이 상하고 아무것도 바뀌지 않았어요.', mood: '화남', why: '탓하기보다 기록에서 조건을 찾아요.' }, { id: 'data', text: '"표를 보니 내 세기가 셌어. 다음엔 줄여 볼게"', result: '다음 판에 패스가 더 이어졌어요.', mood: '뿌듯함' }] }, prompt: '짝이 센 표를 근거로 알맞은 말을 골라요.', target: { choice: 'data' }, difficulty: 0.15 },
              { type: 'short', prompt: '내 표에서 가장 많은 조건과 다음 판에 바꿀 구체적인 방법을 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '짝이 센 내 실패',
          items: [
            { type: 'table', prompt: '짝이 센 내 실패 패스를 쓰세요.', columns: ['거리', '세기', '때맞춤', '물음표'], rows: 1 },
            { type: 'draw', prompt: '내 실패 패스를 막대그래프로 그리세요.' },
            { type: 'choice', prompt: '거리 1번, 세기 2번, 때맞춤 5번이면 먼저 바꿀 조건은?', options: ['거리', '세기', '때맞춤'], answer: '때맞춤' },
            { type: 'table', prompt: '바꿀 조건과 구체적인 방법을 쓰세요.', columns: ['바꿀 조건', '구체적인 방법'], rows: 1 },
            { type: 'check', prompt: '관찰하며 지킨 약속에 ✓ 하세요.', options: ['관찰 줄 뒤에서만 셌어요', '실패가 날 때 바로 표시했어요', '헷갈리면 물음표 칸에 적었어요'] },
          ],
          easy: {
            note: '막대가 가장 긴 조건부터 하나만 바꿔요. 실패 수는 줄면 좋아요.',
            items: [
              { type: 'table', prompt: '내 실패 수를 쓰세요.', columns: ['거리', '세기', '때맞춤'], rows: 1 },
              { type: 'short', prompt: '가장 많은 조건을 쓰세요.' },
              { type: 'short', prompt: '다음에 바꿀 방법을 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '그래프 첫 막대가 미리 그려져 있고 값이 보이며, 타이머 전체 시간이 보여요. 기록은 두 조건만 적어도 돼요.',
          base: '짝의 실패를 세어 주고, 기록을 그래프로 나타내 바꿀 조건을 정해요.',
          challenge: '그래프 값과 판단 결과는 맞힌 뒤에만 보이고, 시간 재기 도구로 판을 재요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 실패한 패스는 받는 사람이 늦게 움직인 탓이라고 여긴다 → 짝이 센 표에서 내 조건을 찾게 한다. ② 실패 수 그래프에서 막대가 줄어든 것을 나빠졌다고 읽는다 → 제목의 "실패"를 먼저 읽게 한다. ③ 바꿀 방법을 "잘하기"처럼 막연하게 쓴다 → "짝이 도착할 때 차기"처럼 구체적으로 쓰게 한다. 높이 뜬 공은 바로 경기를 멈추고, 교사는 관찰 줄과 경기장 사이를 오간다.',
      }),
      // ───────────────────────── 40 ─────────────────────────
      L(40, {
        title: '빗나간 서브를 방향과 세기로 나누고 다시 보내기',
        objective: '네트형 서브가 빗나간 까닭을 방향과 세기로 나누어 기록하고, 바꿀 조건 하나를 정해 다시 보내 표시한 칸에 들어간 수를 견줄 수 있다.',
        illustration: art('a child serving a soft volleyball over a low paper net toward a marked square, with chalk marks showing where earlier serves landed left, right, short and long', [
          { motif: 'sun', x: 410, y: 52, s: 0.6 }, { motif: 'cloud', x: 100, y: 52 }, { motif: 'hills', y: 222 },
          { motif: 'star', x: 140, y: 110 }, { motif: 'star', x: 340, y: 110 },
          { motif: 'text', x: 240, y: 160, text: '옆으로? 길게? 짧게?', size: 22 },
        ]),
        safety: [WARM, SPACE, NET, STOP],
        stages: stages(
          {
            teacher: '"35·37차시에 서브를 칸으로 보내 보았어요. 빗나간 서브는 어디로 갔나요?" "옆으로요", "너무 길게요", "짧게요" 같은 대답을 칠판의 코트 그림에 표시한다. "옆으로 빗나간 것과 길게 빗나간 것은 고칠 것이 같을까요?" 이어 "오늘은 빗나간 자리를 보고 방향과 세기로 나누어 하나만 바꿔 봐요."',
            student: '빗나간 서브가 어디로 갔는지, 무엇을 고쳐야 할지 떠올려 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 빗나간 서브를 방향과 세기로 나누기', minutes: 8, tool: 'mindmap',
              task: '빗나간 서브 장면을 방향이 어긋난 것과 세기가 어긋난 것으로 나누고, 고칠 방법과 이어요.',
              teacher: '"표시 칸의 왼쪽·오른쪽으로 빗나가면 방향, 앞쪽(짧게)·뒤쪽(길게)으로 빗나가면 세기예요." 칠판 코트 그림의 표시와 견주게 한다. 방향은 몸과 발, 치는 손이 끝나는 쪽을 바꾸고, 세기는 팔을 흔드는 크기를 바꾼다고 짚는다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '빗나간 서브 장면을 방향과 세기로 나누어요.', toolOptions: { topic: '빗나간 서브', slots: ['방향', '세기'], cards: ['옆줄 밖으로 나갔어요', '표시 칸 왼쪽 칸에 떨어졌어요', '끝줄 밖으로 길게 나갔어요', '표시 칸보다 짧게 떨어졌어요'] }, target: { sort: { '방향': ['옆줄 밖으로 나갔어요', '표시 칸 왼쪽 칸에 떨어졌어요'], '세기': ['끝줄 밖으로 길게 나갔어요', '표시 칸보다 짧게 떨어졌어요'] } }, levels: { easy: { state: { at: { '옆줄 밖으로 나갔어요': 0 } } }, challenge: { prompt: '빗나간 서브 장면을 방향과 세기로 나누어요. 네트에 걸린 서브는 오늘 기준으로 가를 수 없으니 넣지 않아요.', toolOptions: { cards: ['옆줄 밖으로 나갔어요', '표시 칸 왼쪽 칸에 떨어졌어요', '끝줄 밖으로 길게 나갔어요', '표시 칸보다 짧게 떨어졌어요', '네트에 걸렸어요'] } } }, difficulty: 0.2,
                  hints: ['표시 칸에서 좌우로 비켜났는지, 앞뒤로 비켜났는지 보세요.', '\'길게\', \'짧게\'는 앞뒤로 비켜난 거예요. 그 카드가 어느 칸에 있는지 보세요.', '옆줄·왼쪽 칸은 방향, 끝줄 밖·짧게는 세기예요.'] },
                { prompt: '빗나간 서브와 고칠 방법을 이어요.', toolOptions: { mode: 'match', topic: '고칠 방법', slots: [{ id: 'left', label: '표시 칸 왼쪽으로 빗나갔어요' }, { id: 'long', label: '표시 칸보다 길게 나갔어요' }, { id: 'short', label: '표시 칸보다 짧게 떨어졌어요' }], cards: ['몸과 발을 표시 칸 쪽으로 돌려 서요', '팔을 조금 작게 흔들어요', '팔을 조금 크게 흔들어요'] }, target: { match: { left: '몸과 발을 표시 칸 쪽으로 돌려 서요', long: '팔을 조금 작게 흔들어요', short: '팔을 조금 크게 흔들어요' } }, levels: { easy: { state: { at: { '몸과 발을 표시 칸 쪽으로 돌려 서요': 0 } } } }, difficulty: 0.25,
                  hints: ['방향이 어긋났으면 몸이 향한 쪽을, 세기가 어긋났으면 팔을 흔드는 크기를 바꿔요.', '길게 나간 서브에 팔을 더 크게 흔드는 카드를 잇지 않았는지 보세요.', '왼쪽으로 빗나가면 몸·발을 칸 쪽으로, 길면 작게, 짧으면 크게 흔들어요.'] },
                { prompt: '빗나간 서브를 돌아보는 바른 방법만 골라요.', toolOptions: { mode: 'pick', topic: '서브 돌아보기', basket: '바른 방법', cards: ['떨어진 자리를 보고 방향인지 세기인지 가려요', '한 번에 한 가지만 바꾸어 다시 보내요', '빗나갈 때마다 몸 방향과 팔 크기를 모두 바꿔요', '빗나가면 서브를 그만해요'] }, target: { pick: ['떨어진 자리를 보고 방향인지 세기인지 가려요', '한 번에 한 가지만 바꾸어 다시 보내요'] }, difficulty: 0.2 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 서윤이 서브 기록 읽기', minutes: 7, tool: 'chart',
              task: '서윤이가 빗나간 서브를 방향·세기로 센 그래프를 읽고, 먼저 바꿀 조건과 바꾼 효과를 찾아요.',
              teacher: '"서윤이는 열 번 가운데 들어간 것이 몇 번인가요? 빗나간 것 가운데 무엇이 더 많나요?" 칸에 들어간 수는 늘어야 좋고, 빗나간 수는 줄어야 좋다는 것을 그래프 제목으로 가리게 한다.',
              levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '서윤이 서브 열 번 그래프에서 가장 많이 나온 결과를 골라요.', toolOptions: { type: 'bar', mode: 'read', title: '서윤이 서브 열 번 결과', unit: '번', xLabel: '결과', data: [['칸에 들어감', 3], ['방향이 빗나감', 2], ['세기가 빗나감', 5]], question: '가장 많이 나온 결과는?', choices: ['칸에 들어감', '방향이 빗나감', '세기가 빗나감'] }, target: { pick: 2 }, difficulty: 0.15 },
                { prompt: '서윤이가 세기를 바꾼 뒤 칸에 들어간 수예요. 몇 번 늘었는지 써요.', toolOptions: { type: 'bar', mode: 'read', title: '서윤이 칸에 들어간 서브(10번 중)', unit: '번', xLabel: '때', data: [['바꾸기 전', 3], ['팔을 작게 흔든 뒤', 6]], question: '몇 번 늘었나요?' }, target: { value: 3 }, difficulty: 0.2 },
                { prompt: '민재는 방향 빗나감이 가장 많았는데 팔 크기를 바꾸었어요. 결과를 보고 알맞은 판단을 골라요.', toolOptions: { type: 'bar', mode: 'read', title: '민재 칸에 들어간 서브(10번 중, 방향 빗나감이 가장 많았음)', unit: '번', xLabel: '때', data: [['바꾸기 전', 4], ['팔을 크게 흔든 뒤', 3]], question: '민재에게 알맞은 판단은?', choices: ['팔을 더 크게 흔들어요', '몸과 발 방향을 먼저 바꿔 봐요'] }, target: { pick: 1 }, difficulty: 0.3,
                  conclude: '가장 많이 어긋난 조건을 바꾸어야 효과가 나요. 다른 조건을 바꾸면 달라지지 않아요.' },
              ],
            },
            {
              id: 'a3', title: '활동 3. 다섯 번 보내고, 하나 바꾸어 다섯 번 더', minutes: 11, tool: 'timer',
              task: '네트 3m 뒤에서 표시 칸으로 서브를 다섯 번 보내요. 짝이 빗나간 서브를 방향·세기로 세어 줘요. 많은 쪽 하나를 바꾸어 다섯 번 더 보내요.',
              teacher: '짝은 네트 옆 안전선에서 보고 "왼쪽", "길게"처럼 떨어진 자리를 말해 준다. 서브하는 사람이 바꿀 조건을 짝에게 말한 뒤 두 번째 다섯 번을 시작한다. 공을 주울 때는 모두 서브를 멈춘다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '서브 연습을 하기 전에 네트 둘레를 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['네트 줄이 단단히 묶였어요', '짝은 네트 옆 안전선에 서요', '공을 주울 때 모두 서브를 멈추기로 했어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '다섯 번 보내고, 조건 하나를 바꾸어 다섯 번 더 보내요. 다 하면 ‘짝·모둠과 함께 해 보았어요’를 눌러요.', free: true },
                { prompt: '처음 다섯 번의 결과와 바꾼 뒤 칸에 들어간 수를 적어요.', toolOptions: { fields: [{ label: '처음 칸에 들어감', unit: '번', max: 5 }, { label: '처음 방향 빗나감', unit: '번', max: 5 }, { label: '처음 세기 빗나감', unit: '번', max: 5 }, { label: '바꾼 뒤 칸에 들어감', unit: '번', max: 5 }] }, target: { records: true }, levels: { easy: { prompt: '처음과 바꾼 뒤 칸에 들어간 수를 적어요.', toolOptions: { fields: [{ label: '처음 칸에 들어감', unit: '번', max: 5 }, { label: '바꾼 뒤 칸에 들어감', unit: '번', max: 5 }] } } }, difficulty: 0.2 },
              ],
            },
          ],
          {
            teacher: '"바꾼 뒤 칸에 들어간 수가 늘었나요? 무엇을 바꾸었나요?" 늘지 않은 학생에게는 "가장 많이 빗나간 쪽을 바꾸었나요?"라고 묻는다. 기본 기능 단계는 오늘로 마치고, 다음 시간부터는 빈 공간을 만들고 막는 전략을 배운다고 알린다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '새 서브 장면', slots: [{ id: 'right', label: '표시 칸 오른쪽 옆줄 밖으로 나갔어요' }, { id: 'short', label: '네트를 넘었지만 표시 칸보다 짧게 떨어졌어요' }], cards: ['방향', '세기'] }, prompt: '새 서브 장면이 어떤 조건이 어긋난 것인지 이어요.', target: { match: { right: '방향', short: '세기' } }, difficulty: 0.2 },
              { type: 'choice', prompt: '서브가 표시 칸보다 길게 나갔어요. 무엇을 바꿀까요?', options: ['팔을 조금 작게 흔들어요', '몸을 옆으로 돌려요', '팔을 더 크게 흔들어요'], answer: 0, difficulty: 0.2, explain: '길면 세기를 줄여요. 팔을 조금 작게 흔들어요.' },
              { type: 'mood', prompt: '서브를 고쳐 다시 보내 본 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '빗나간 서브 고치기',
          items: [
            { type: 'table', prompt: '처음 다섯 번의 서브 결과를 쓰세요.', columns: ['칸에 들어감', '방향 빗나감', '세기 빗나감'], rows: 1 },
            { type: 'table', prompt: '바꾼 조건과 바꾼 뒤 결과를 쓰세요.', columns: ['바꾼 조건', '어떻게 바꾸었나', '바꾼 뒤 칸에 들어감(5번 중)'], rows: 1 },
            { type: 'choice', prompt: '서브가 표시 칸 왼쪽으로 빗나갔다면 무엇을 고치나요?', options: ['몸과 발 방향', '팔 흔드는 크기', '공 색깔'], answer: '몸과 발 방향' },
            { type: 'check', prompt: '오늘 지킨 약속에 ✓ 하세요.', options: ['공을 주울 때 서브를 멈췄어요', '짝은 안전선에서 봤어요', '네트를 잡지 않았어요'] },
            { type: 'short', prompt: '빗나간 서브를 고칠 때 한 번에 하나만 바꾸는 까닭을 쓰세요.' },
          ],
          easy: {
            note: '왼쪽·오른쪽으로 빗나가면 방향, 길거나 짧으면 세기!',
            items: [
              { type: 'choice', prompt: '끝줄 밖으로 길게 나갔다면?', options: ['세기', '방향'], answer: '세기' },
              { type: 'short', prompt: '오늘 바꾼 조건을 쓰세요.' },
              { type: 'short', prompt: '바꾼 뒤 칸에 들어간 수를 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 놓으면 바로 표시되고 첫 카드가 미리 놓여 있으며, 그래프 값이 보여요. 기록은 들어간 수 두 칸만 적어요.',
          base: '빗나간 서브를 방향과 세기로 나누고, 하나를 바꾸어 다시 보내 견주어요.',
          challenge: '가를 수 없는 함정 카드(네트에 걸림)가 섞이고, 그래프 값과 판단 결과는 맞힌 뒤에만 보여요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 빗나가면 몸 방향과 팔 크기를 한꺼번에 바꾼다 → 한 번에 하나만 바꾸어야 무엇이 도움이 되었는지 안다. ② 길게 나간 서브에 더 세게 친다 → 떨어진 자리를 먼저 말하게 한다. ③ 실패를 공이나 네트 탓으로 돌린다 → 짝이 말해 준 떨어진 자리를 근거로 쓴다. 공을 주울 때는 호루라기로 모두 멈추게 하고, 교사는 네트 옆에서 관찰한다.',
      }),
      // ───────────────────────── 41 ─────────────────────────
      L(41, {
        title: '코트 그림에 빈 곳과 막을 자리 표시하기',
        objective: '빈 공간을 만드는 공격 움직임과 막는 수비 움직임을 가려 말하고, 코트 그림에 패스할 빈 곳과 수비가 설 자리를 근거를 들어 표시할 수 있다.',
        illustration: art('a paper court seen from above with flag pieces for one team, shield pieces for the other, and glowing empty squares where a pass could go', [
          { motif: 'sun', x: 410, y: 52, s: 0.6 }, { motif: 'cloud', x: 100, y: 52 }, { motif: 'hills', y: 222 },
          { motif: 'star', x: 150, y: 120 }, { motif: 'star', x: 330, y: 120 },
          { motif: 'text', x: 240, y: 160, text: '빈 곳을 찾아라', size: 24 },
        ]),
        safety: [WARM, BALL, LOOK, STOP],
        stages: stages(
          {
            teacher: '"수비는 공을 가진 사람만 따라다니면 될까요?" "네"가 나오면 네 명이 공 가진 한 사람을 둘러싼 장면을 칠판에 그린다. "그럼 나머지 상대 셋은 어디에 있을까요? 그쪽으로 패스가 가면요?" 오늘은 공격이 빈 곳을 만드는 움직임과 수비가 막는 자리를 코트 그림으로 찾는다고 알린다.',
            student: '네 명이 공 가진 한 사람만 따라가면 어떤 일이 생길지 생각해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 빈 곳 만들기와 막기 가르기', minutes: 7, tool: 'mindmap',
              task: '움직임 카드를 공격(빈 곳 만들기)과 수비(빈 곳 막기)로 나누고, 수비가 할 일을 골라요.',
              teacher: '"공격은 상대가 없는 곳으로 퍼져 빈 곳을 만들고, 수비는 공 가진 사람과 받을 사람 사이에 서서 그 길을 막아요." "공 가진 사람 따라다니기"를 수비 할 일로 고른 학생에게 "그러면 받을 사람은 누가 막나요?"라고 묻는다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '움직임 카드를 공격과 수비로 나누어요.', toolOptions: { topic: '빈 곳을 두고', slots: [{ id: 'atk', label: '공격: 빈 곳 만들기' }, { id: 'def', label: '수비: 빈 곳 막기' }], cards: ['상대가 없는 쪽으로 달려가 손 내밀기', '우리 편끼리 넓게 퍼져 서기', '공 가진 상대와 받을 상대 사이에 서기', '내가 맡은 상대 가까이 붙어 서기'] }, target: { sort: { atk: ['상대가 없는 쪽으로 달려가 손 내밀기', '우리 편끼리 넓게 퍼져 서기'], def: ['공 가진 상대와 받을 상대 사이에 서기', '내가 맡은 상대 가까이 붙어 서기'] } }, levels: { easy: { state: { at: { '상대가 없는 쪽으로 달려가 손 내밀기': 0 } } } }, difficulty: 0.2,
                  hints: ['우리가 공을 가졌을 때 하는 움직임인지, 상대가 공을 가졌을 때 하는 움직임인지 보세요.', '\'사이에 서기\', \'붙어 서기\'는 상대를 막는 움직임이에요. 그 카드가 어느 칸에 있는지 보세요.', '달려가 손 내밀기·넓게 퍼지기는 공격, 사이에 서기·맡은 상대 붙기는 수비예요.'] },
                { prompt: '상대가 공을 가졌을 때 수비가 할 일만 골라요.', toolOptions: { mode: 'pick', topic: '수비가 할 일', basket: '수비', cards: ['공 가진 상대와 받을 상대 사이에 서요', '내가 맡은 상대를 놓치지 않아요', '모두 공 가진 상대만 둘러싸요', '공을 보지 않고 한자리에 서 있어요'] }, target: { pick: ['공 가진 상대와 받을 상대 사이에 서요', '내가 맡은 상대를 놓치지 않아요'] }, difficulty: 0.2,
                  hints: ['수비는 공뿐 아니라 공이 갈 곳도 막아야 해요.', '모두 한 사람만 둘러싸면 다른 상대가 비게 돼요. 그 카드가 바구니에 있는지 보세요.', '패스 길 사이에 서기와 맡은 상대 놓치지 않기가 수비가 할 일이에요.'] },
                { prompt: '짝에게 "공격은 ○○, 수비는 ○○"으로 빈 곳을 두고 하는 일을 말해요. 말한 뒤 ‘다 했어요’를 눌러요.', free: true, talk: true },
              ],
            },
            {
              id: 'a2', title: '활동 2. 코트 그림에 빈 곳과 수비 자리 꽂기', minutes: 10, tool: 'map',
              task: '코트 그림을 보고 가·나·다 가운데 알맞은 곳에 핀을 꽂아요. 깃발은 우리 편, 방패는 상대, 점은 고를 곳이에요.',
              teacher: '칠판에 오늘의 빈 곳 기준을 적는다: "상대가 바로 옆 칸(앞뒤·옆·대각선)에 없고, 공보다 끝줄 쪽에 있는 곳." 수비 자리는 "공 가진 상대와 받으려는 상대 사이"라고 적는다. 핀을 꽂은 뒤 짝에게 기준을 들어 까닭을 말하게 한다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '공 가진 친구가 패스할 빈 곳은 가·나·다 가운데 어디일까요? 상대가 바로 옆 칸에 없고, 공보다 끝줄(오른쪽)에 가까운 곳에 핀을 꽂아요.', toolOptions: COURT('끝줄 패스 게임 코트(오른쪽이 상대 끝줄)', [6, 4], [US('우리(공)', [1, 1]), THEM('상대1', [2, 1]), THEM('상대2', [2, 3]), SPOT('가', [3, 1]), SPOT('나', [4, 0]), SPOT('다', [0, 3])]), target: { place: '나' }, levels: { easy: { toolOptions: { places: [US('우리(공)', [1, 1]), THEM('상대1', [2, 1]), THEM('상대2', [2, 3]), SPOT('가', [3, 1]), SPOT('나', [4, 0])] } }, challenge: { prompt: '공 가진 친구가 패스할 빈 곳은 가·나·다·라 가운데 어디일까요? 상대가 바로 옆 칸에 없고, 공보다 끝줄(오른쪽)에 가까운 곳에 핀을 꽂아요.', toolOptions: { places: [US('우리(공)', [1, 1]), THEM('상대1', [2, 1]), THEM('상대2', [2, 3]), SPOT('가', [3, 1]), SPOT('나', [4, 0]), SPOT('다', [0, 3]), SPOT('라', [3, 3])] } } }, difficulty: 0.25,
                  hints: ['고를 곳마다 바로 옆 여덟 칸에 방패(상대)가 있는지 살펴보세요.', '상대 바로 뒤 칸이나, 공보다 왼쪽(뒤쪽)에 있는 곳은 빈 곳 기준에 맞지 않아요.', '옆 칸에 상대가 없고 공보다 오른쪽에 있는 곳은 위쪽 줄의 나예요.'] },
                { prompt: '상대가 왼쪽 우리 끝줄 쪽으로 공격해요. 수비인 나는 가·나·다 가운데 어디에 서야 할까요? 공 가진 상대와 받으려는 상대 사이에 핀을 꽂아요.', toolOptions: COURT('끝줄 패스 게임 코트(왼쪽이 우리 끝줄)', [6, 4], [THEM('상대(공)', [3, 1]), THEM('상대(받을 사람)', [1, 3]), SPOT('가', [4, 1]), SPOT('나', [2, 2]), SPOT('다', [5, 3])]), target: { place: '나' }, levels: { easy: { toolOptions: { places: [THEM('상대(공)', [3, 1]), THEM('상대(받을 사람)', [1, 3]), SPOT('가', [4, 1]), SPOT('나', [2, 2])] } } }, difficulty: 0.25,
                  hints: ['공이 상대(공)에서 상대(받을 사람)에게 가는 길을 손가락으로 그어 보세요.', '공 가진 상대 바로 옆에 붙는 곳은 받을 사람에게 가는 길을 막지 못해요.', '두 상대를 잇는 길 한가운데에 있는 나가 패스 길을 막는 자리예요.'] },
                { prompt: '이번에는 공이 가운데에 있어요. 가·나·다 가운데 패스할 빈 곳은? 상대가 바로 옆 칸에 없고, 공보다 끝줄(오른쪽)에 가까운 곳에 핀을 꽂아요.', toolOptions: COURT('끝줄 패스 게임 코트(오른쪽이 상대 끝줄)', [6, 4], [US('우리(공)', [2, 2]), THEM('상대1', [3, 2]), THEM('상대2', [3, 0]), THEM('상대3', [4, 3]), SPOT('가', [4, 2]), SPOT('나', [0, 1]), SPOT('다', [5, 1])]), target: { place: '다' }, levels: { easy: { toolOptions: { places: [US('우리(공)', [2, 2]), THEM('상대1', [3, 2]), THEM('상대2', [3, 0]), THEM('상대3', [4, 3]), SPOT('가', [4, 2]), SPOT('다', [5, 1])] } } }, difficulty: 0.3,
                  hints: ['고를 곳마다 바로 옆 여덟 칸에 방패(상대)가 있는지, 공보다 오른쪽인지 함께 보세요.', '상대 둘에 둘러싸인 곳이나 공보다 왼쪽에 있는 곳을 고르지 않았는지 보세요.', '옆 칸에 상대가 없고 공보다 오른쪽인 곳은 맨 오른쪽 줄의 다예요.'] },
              ],
            },
            {
              id: 'a3', title: '활동 3. 3:2 빈 곳 패스 놀이', minutes: 9, tool: 'timer',
              task: '공격 셋, 수비 둘로 나누어 10초 안에 끝줄 구역의 빈 곳에서 패스를 받으면 1점이에요. 수비는 패스 길 사이에 서서 막아요. 다섯 번 하고 역할을 바꿔요.',
              teacher: '"공격 셋은 처음에 넓게 퍼져 서요. 수비 둘이 셋을 다 막을 수 있을까요?" 수비가 공 가진 사람에게만 몰리면 놀이를 멈추고 코트 그림 2번 문항을 떠올리게 한다. 몸이 닿으면 공격 공이 끝난다.',
              levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
              items: [
                { prompt: '3:2 빈 곳 패스 놀이를 하기 전에 놀이터를 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['끝줄 구역을 콘으로 표시했어요', '옆 놀이터와 5걸음 넘게 떨어졌어요', '몸이 닿으면 공격을 멈추기로 했어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '공격과 수비를 다섯 번씩 해요. 다 하면 ‘짝·모둠과 함께 해 보았어요’를 눌러요.', free: true },
                { prompt: '공격 다섯 번에서 얻은 점수와 수비 다섯 번에서 막은 수를 적어요.', toolOptions: { fields: [{ label: '공격 점수(5번 중)', unit: '점', max: 5 }, { label: '수비로 막은 수(5번 중)', unit: '번', max: 5 }] }, target: { records: true }, difficulty: 0.15 },
              ],
            },
          ],
          {
            teacher: '"공격 셋이 점수를 얻은 때, 수비 둘은 어디에 있었나요?" "공 가진 친구한테 둘 다 갔어요" 같은 대답을 받아 수비 자리 기준을 다시 짚는다. 출구 1번은 새 코트 그림이니 기준만 떠올리게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'map', options: COURT('새 코트(오른쪽이 상대 끝줄)', [6, 4], [US('우리(공)', [1, 2]), THEM('상대1', [2, 2]), THEM('상대2', [3, 0]), SPOT('가', [3, 2]), SPOT('나', [4, 3]), SPOT('다', [0, 0])]), prompt: '새 코트에서 가·나·다 가운데 패스할 빈 곳에 핀을 꽂아요. 기준은 상대가 바로 옆 칸에 없고, 공보다 끝줄(오른쪽)에 가까운 곳이에요.', target: { place: '나' }, difficulty: 0.3 },
              { type: 'tool', tool: 'emotion', options: { mode: 'branch', situation: '수비할 때 모둠 친구가 "우리 넷 다 공 가진 사람만 따라가자"라고 해요.', choices: [{ id: 'all', text: '"좋아, 공만 쫓자"', result: '빈 곳의 상대가 패스를 받아 쉽게 점수를 냈어요.', mood: '속상함', why: '공 가진 사람만 따라가면 다른 곳이 비어요.' }, { id: 'split', text: '"한 명은 공을, 나머지는 받을 상대와 패스 길을 막자"', result: '패스 길이 막혀 공을 가로챘어요.', mood: '뿌듯함' }] }, prompt: '모둠 친구에게 알맞은 말을 골라요.', target: { choice: 'split' }, difficulty: 0.15 },
              { type: 'short', prompt: '오늘 3:2 놀이에서 빈 곳을 만들거나 막은 장면 하나를 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '빈 곳과 막을 자리',
          items: [
            { type: 'table', prompt: '빈 곳을 두고 공격과 수비가 하는 움직임을 두 가지씩 쓰세요.', columns: ['공격: 빈 곳 만들기', '수비: 빈 곳 막기'], rows: 2 },
            { type: 'figure', wide: true, prompt: '코트 그림에서 패스할 빈 곳(가·나·다 가운데)에 ○ 하고, 까닭을 쓰세요.', tool: 'map', figures: [{ options: COURT('끝줄 패스 게임 코트(오른쪽이 상대 끝줄)', [6, 4], [US('우리(공)', [1, 1]), THEM('상대1', [2, 2]), THEM('상대2', [4, 0]), SPOT('가', [4, 3]), SPOT('나', [3, 1]), SPOT('다', [0, 2])]), caption: '' }], answer: '가 — 옆 칸에 상대가 없고 공보다 끝줄 쪽이에요' },
            { type: 'choice', prompt: '"수비는 공 가진 사람만 따라다니면 된다"는 말에 대한 생각에 ○ 하세요.', options: ['맞아요', '아니에요, 받을 상대와 패스 길도 막아요'], answer: '아니에요, 받을 상대와 패스 길도 막아요' },
            { type: 'table', prompt: '3:2 놀이 기록을 쓰세요.', columns: ['공격 점수(5번 중)', '수비로 막은 수(5번 중)'], rows: 1 },
            { type: 'short', prompt: '수비가 서야 할 자리를 고르는 기준을 쓰세요.' },
          ],
          easy: {
            note: '빈 곳 = 상대가 바로 옆 칸에 없는 끝줄 쪽 자리. 수비 자리 = 공 가진 상대와 받을 상대 사이.',
            items: [
              { type: 'choice', prompt: '공격이 빈 곳을 만들려면?', options: ['넓게 퍼져요', '모두 한곳에 모여요'], answer: '넓게 퍼져요' },
              { type: 'choice', prompt: '수비는 어디에 서나요?', options: ['패스 길 사이', '공 가진 사람 뒤만'], answer: '패스 길 사이' },
              { type: 'short', prompt: '오늘 3:2 놀이 공격 점수를 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 놓으면 바로 표시되고, 코트 그림의 고를 곳이 둘로 줄어요.',
          base: '빈 곳 기준과 수비 자리 기준으로 코트 그림에 핀을 꽂고, 3:2 놀이에서 직접 해 봐요.',
          challenge: '첫 코트 그림에 기준에 맞지 않는 함정 자리(라)가 더해지고, 시간 재기 도구로 10초를 직접 재요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 수비는 공을 가진 사람만 따라다니면 된다고 여긴다 → 코트 그림 2번과 3:2 놀이로 다른 곳이 빈다는 것을 보인다. ② 빈 곳을 "상대가 없는 아무 곳"으로만 본다 → 공보다 끝줄 쪽이어야 득점에 가까워진다는 기준을 함께 쓴다. ③ 공격이 공 가까이 모인다 → 처음 자리를 넓게 퍼지게 콘으로 표시한다. 코트 그림은 판정이 정해진 기준(옆 칸·끝줄 쪽·사이)으로만 하고, 실제 놀이는 교사가 관찰한다.',
      }),
      // ───────────────────────── 42 ─────────────────────────
      L(42, {
        title: '네트형·필드형 코트에서 빈 곳 찾고 기본 자리 지키기',
        objective: '네트형과 필드형 코트 그림에서 공을 보낼 빈 곳과 수비가 지킬 기본 자리를 기준에 따라 표시하고, 풍선 배구에서 빈 곳으로 넘기기를 해 볼 수 있다.',
        illustration: art('a paper volleyball court split by a net and a paper kickball diamond, with small dots marking open spaces and a child returning to the center spot', [
          { motif: 'sun', x: 410, y: 52, s: 0.6 }, { motif: 'cloud', x: 110, y: 50 }, { motif: 'hills', y: 222 },
          { motif: 'star', x: 120, y: 120 }, { motif: 'star', x: 360, y: 120 },
          { motif: 'text', x: 240, y: 160, text: '빈 곳으로, 가운데로', size: 22 },
        ]),
        safety: [WARM, BALL, LOOK, NET],
        stages: stages(
          {
            teacher: '"지난 시간 영역형에서는 상대가 없는 끝줄 쪽이 빈 곳이었어요. 네트형과 필드형에서도 빈 곳이 있을까요?" "상대가 없는 칸이요", "수비가 없는 쪽이요" 같은 대답을 받는다. "그럼 수비는 빈 곳을 어떻게 막을까요? 공을 넘기고 나서 제자리에 서 있으면 될까요?"라고 물어 둔다.',
            student: '네트형과 필드형에서 빈 곳이 어디일지 떠올려 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 네트형·필드형 코트 그림에 핀 꽂기', minutes: 10, tool: 'map',
              task: '코트 그림을 보고 ㄱ·ㄴ·ㄷ 가운데 알맞은 곳에 핀을 꽂아요. 깃발은 우리 편, 방패는 상대, 점은 고를 곳이에요.',
              teacher: '칠판에 기준을 적는다: "네트형 빈 곳 = 상대 코트 안에서 상대가 바로 옆 칸에 없는 곳", "네트형 기본 자리 = 우리 코트 한가운데", "필드형 빈 곳 = 수비가 바로 옆 칸에 없는 곳". 우리 코트 칸을 고른 학생에게 "그 칸에 떨어지면 누구 점수인가요?"라고 묻는다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '풍선 배구 코트예요. ㄱ·ㄴ·ㄷ 가운데 풍선을 넘길 빈 곳은? 상대 코트(오른쪽 세 줄) 안에서 상대가 바로 옆 칸에 없는 곳에 핀을 꽂아요.', toolOptions: COURT('풍선 배구 코트(왼쪽 세 줄 우리, 오른쪽 세 줄 상대)', [6, 3], [US('나(풍선)', [2, 1]), THEM('상대1', [3, 0]), THEM('상대2', [4, 2]), SPOT('ㄱ', [3, 1]), SPOT('ㄴ', [5, 0]), SPOT('ㄷ', [1, 1])]), target: { place: 'ㄴ' }, levels: { easy: { toolOptions: { places: [US('나(풍선)', [2, 1]), THEM('상대1', [3, 0]), THEM('상대2', [4, 2]), SPOT('ㄱ', [3, 1]), SPOT('ㄴ', [5, 0])] } }, challenge: { prompt: '풍선 배구 코트예요. ㄱ·ㄴ·ㄷ·ㄹ 가운데 풍선을 넘길 빈 곳은? 상대 코트(오른쪽 세 줄) 안에서 상대가 바로 옆 칸에 없는 곳에 핀을 꽂아요.', toolOptions: { places: [US('나(풍선)', [2, 1]), THEM('상대1', [3, 0]), THEM('상대2', [4, 2]), SPOT('ㄱ', [3, 1]), SPOT('ㄴ', [5, 0]), SPOT('ㄷ', [1, 1]), SPOT('ㄹ', [5, 2])] } } }, difficulty: 0.25,
                  hints: ['먼저 상대 코트(오른쪽 세 줄) 안의 고를 곳만 남기고, 그 둘레 여덟 칸에 방패가 있는지 보세요.', '우리 코트에 있는 곳, 상대 둘 사이에 낀 곳은 빈 곳 기준에 맞지 않아요.', '상대 코트 안에서 둘레에 상대가 없는 곳은 맨 오른쪽 위 칸이에요.'] },
                { prompt: '풍선을 넘긴 뒤 돌아갈 기본 자리는 ㄱ·ㄴ·ㄷ 가운데 어디일까요? 우리 코트(왼쪽 세 줄) 어느 칸으로 와도 한 걸음에 갈 수 있는 곳에 핀을 꽂아요.', toolOptions: COURT('풍선 배구 코트(왼쪽 세 줄 우리, 오른쪽 세 줄 상대)', [6, 3], [THEM('상대1', [4, 0]), THEM('상대2', [4, 2]), SPOT('ㄱ', [0, 0]), SPOT('ㄴ', [1, 1]), SPOT('ㄷ', [2, 2])]), target: { place: 'ㄴ' }, levels: { easy: { toolOptions: { places: [THEM('상대1', [4, 0]), THEM('상대2', [4, 2]), SPOT('ㄱ', [0, 0]), SPOT('ㄴ', [1, 1])] } } }, difficulty: 0.2,
                  hints: ['우리 코트 아홉 칸 가운데 어느 칸으로도 가장 가까운 자리를 찾아요.', '구석에 서면 반대쪽 구석까지 몇 걸음인지 세어 보세요.', '우리 코트 한가운데 칸이 어느 칸으로도 한 걸음이에요.'] },
                { prompt: '발야구 운동장이에요. ㄱ·ㄴ·ㄷ 가운데 공을 차 보낼 빈 곳은? 수비가 바로 옆 칸에 없는 곳에 핀을 꽂아요.', toolOptions: COURT('발야구 운동장(아래 가운데가 홈)', [5, 5], [US('홈(차는 사람)', [2, 4]), THEM('수비1', [1, 1]), THEM('수비2', [2, 2]), THEM('수비3', [1, 3]), SPOT('ㄱ', [0, 2]), SPOT('ㄴ', [4, 1]), SPOT('ㄷ', [2, 3])]), target: { place: 'ㄴ' }, levels: { easy: { toolOptions: { places: [US('홈(차는 사람)', [2, 4]), THEM('수비1', [1, 1]), THEM('수비2', [2, 2]), THEM('수비3', [1, 3]), SPOT('ㄱ', [0, 2]), SPOT('ㄴ', [4, 1])] } } }, difficulty: 0.25,
                  hints: ['고를 곳마다 둘레 여덟 칸에 수비(방패)가 있는지 하나씩 보세요.', '수비가 왼쪽과 가운데에 몰려 있어요. 그 둘레에 있는 곳을 골랐는지 보세요.', '수비가 없는 오른쪽 위의 곳으로 차면 수비가 잡기 어려워요.'] },
              ],
            },
            {
              id: 'a2', title: '활동 2. 2:2 풍선 배구로 빈 곳 넘기기', minutes: 9, tool: 'timer',
              task: '2:2 풍선 배구를 해요. 넘길 때는 상대가 없는 칸을 보고 넘기고, 넘긴 뒤에는 우리 코트 가운데로 돌아가요. 짝이 빈 곳으로 넘긴 수와 가운데로 돌아간 수를 세어 줘요.',
              teacher: '코트는 3m×3m 두 칸, 허리 높이 줄을 네트로 쓴다. "넘기기 전에 상대 코트를 한 번 봐요. 넘긴 뒤 \'가운데!\' 하고 돌아가요." 기다리는 짝이 세어 주고, 열 번 넘기면 바꾼다.',
              levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
              items: [
                { prompt: '2:2 풍선 배구를 하기 전에 코트를 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['네트 줄이 허리 높이로 단단히 묶였어요', '옆 코트와 3걸음 넘게 떨어졌어요', '풍선을 쫓다 부딪히지 않게 "내 풍선!"을 외치기로 했어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '2:2 풍선 배구를 하며 서로 세어 줘요. 다 하면 ‘짝·모둠과 함께 해 보았어요’를 눌러요.', free: true },
                { prompt: '짝이 센 빈 곳으로 넘긴 수와 가운데로 돌아간 수를 적어요(10번 넘기기 가운데).', toolOptions: { fields: [{ label: '빈 곳으로 넘김', unit: '번', max: 10 }, { label: '가운데로 돌아감', unit: '번', max: 10 }] }, target: { records: true }, difficulty: 0.15 },
              ],
            },
            {
              id: 'a3', title: '활동 3. 갈래마다 빈 곳 만들기와 막기', minutes: 7, tool: 'mindmap',
              task: '갈래마다 빈 곳으로 공격하는 방법과 빈 곳을 막는 방법을 이어요. 그다음 짝에게 오늘 풍선 배구에서 빈 곳으로 넘긴 장면을 말해요.',
              teacher: '"영역형·필드형·네트형 모두 빈 곳이 있지만, 빈 곳으로 공을 보내는 방법은 달라요." 41차시 영역형 기준과 오늘 기준을 견주게 한다. 필드형 수비가 운동장을 나누어 서는 까닭을 "모두 한 곳에 서면?"으로 묻는다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '갈래와 빈 곳으로 공격하는 방법을 이어요.', toolOptions: { mode: 'match', topic: '빈 곳으로 공격', slots: [{ id: 'area', label: '영역형' }, { id: 'field', label: '필드형' }, { id: 'net', label: '네트형' }], cards: ['상대가 없는 곳으로 달려가 패스 받기', '수비가 없는 쪽으로 공 차 보내기', '상대가 없는 코트 칸으로 넘기기'] }, target: { match: { area: '상대가 없는 곳으로 달려가 패스 받기', field: '수비가 없는 쪽으로 공 차 보내기', net: '상대가 없는 코트 칸으로 넘기기' } }, levels: { easy: { state: { at: { '상대가 없는 곳으로 달려가 패스 받기': 0 } } } }, difficulty: 0.2 },
                { prompt: '갈래와 빈 곳을 막는 방법을 이어요.', toolOptions: { mode: 'match', topic: '빈 곳 막기', slots: [{ id: 'area', label: '영역형' }, { id: 'field', label: '필드형' }, { id: 'net', label: '네트형' }], cards: ['공 가진 상대와 받을 상대 사이에 서기', '수비끼리 운동장을 나누어 서기', '넘긴 뒤 우리 코트 가운데로 돌아가기'] }, target: { match: { area: '공 가진 상대와 받을 상대 사이에 서기', field: '수비끼리 운동장을 나누어 서기', net: '넘긴 뒤 우리 코트 가운데로 돌아가기' } }, levels: { easy: { state: { at: { '공 가진 상대와 받을 상대 사이에 서기': 0 } } } }, difficulty: 0.25,
                  hints: ['갈래마다 상대가 공을 어떻게 보내는지 떠올리면 막는 방법도 보여요.', '네트형은 상대 코트에 들어가지 않아요. 상대와 사이에 서는 카드를 네트형에 잇지 않았는지 보세요.', '영역형은 패스 길 사이, 필드형은 운동장 나누기, 네트형은 가운데로 돌아가기예요.'] },
                { prompt: '짝에게 오늘 풍선 배구에서 빈 곳으로 넘긴 장면 하나를 "어디를 보고, 어디로"로 말해요. 말한 뒤 ‘다 했어요’를 눌러요.', free: true, talk: true },
              ],
            },
          ],
          {
            teacher: '"오늘 빈 곳으로 넘긴 뒤 가운데로 돌아갔더니 어떤 점이 좋았나요?" 두세 명이 답한다. "제자리에 서 있었을 때는 어디가 비었나요?"도 묻는다. 출구 1번은 새 네트형 코트이니 기준만 떠올리게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'map', options: COURT('새 배드민턴 코트(왼쪽 세 줄 우리, 오른쪽 세 줄 상대)', [6, 3], [US('나(셔틀콕)', [1, 1]), THEM('상대1', [4, 0]), THEM('상대2', [5, 2]), SPOT('ㄱ', [3, 2]), SPOT('ㄴ', [5, 1]), SPOT('ㄷ', [2, 0])]), prompt: '새 코트에서 ㄱ·ㄴ·ㄷ 가운데 셔틀콕을 보낼 빈 곳에 핀을 꽂아요. 상대 코트(오른쪽 세 줄) 안에서 상대가 바로 옆 칸에 없는 곳이에요.', target: { place: 'ㄱ' }, difficulty: 0.3 },
              { type: 'choice', prompt: '네트형 경기에서 공을 넘긴 뒤 알맞은 움직임은?', options: ['넘긴 자리에 그대로 서 있어요', '우리 코트 가운데 기본 자리로 돌아가요', '네트 앞으로 달려가 네트를 잡아요'], answer: 1, difficulty: 0.15, explain: '가운데에 있어야 어느 칸으로 공이 와도 한 걸음에 막을 수 있어요.' },
              { type: 'short', prompt: '필드형 수비가 운동장을 나누어 서는 까닭을 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '빈 곳과 기본 자리',
          items: [
            { type: 'table', prompt: '갈래마다 빈 곳으로 공격하는 방법과 막는 방법을 쓰세요.', columns: ['갈래', '빈 곳으로 공격', '빈 곳 막기'], cells: [['영역형', '', ''], ['필드형', '', ''], ['네트형', '', '']] },
            { type: 'figure', wide: true, prompt: '풍선 배구 코트에서 풍선을 넘길 빈 곳(ㄱ·ㄴ·ㄷ 가운데)에 ○ 하세요.', tool: 'map', figures: [{ options: COURT('풍선 배구 코트(왼쪽 세 줄 우리, 오른쪽 세 줄 상대)', [6, 3], [US('나(풍선)', [1, 1]), THEM('상대1', [3, 1]), THEM('상대2', [5, 0]), SPOT('ㄱ', [4, 0]), SPOT('ㄴ', [5, 2]), SPOT('ㄷ', [0, 2])]), caption: '' }], answer: 'ㄴ — 상대 코트 안이고 바로 옆 칸에 상대가 없어요' },
            { type: 'table', prompt: '2:2 풍선 배구 기록을 쓰세요.', columns: ['빈 곳으로 넘김(10번 중)', '가운데로 돌아감(10번 중)'], rows: 1 },
            { type: 'check', prompt: '오늘 지킨 약속에 ✓ 하세요.', options: ['"내 풍선!"을 외치고 움직였어요', '네트 줄을 잡지 않았어요', '넘기기 전에 상대 코트를 봤어요'] },
            { type: 'short', prompt: '공을 넘긴 뒤 가운데로 돌아가야 하는 까닭을 쓰세요.' },
          ],
          easy: {
            note: '빈 곳 = 상대(수비)가 바로 옆 칸에 없는 곳. 네트형은 넘긴 뒤 가운데로!',
            items: [
              { type: 'choice', prompt: '풍선을 넘길 곳은?', options: ['상대가 없는 상대 코트 칸', '우리 코트 칸'], answer: '상대가 없는 상대 코트 칸' },
              { type: 'choice', prompt: '넘긴 뒤에는?', options: ['가운데로 돌아가요', '그 자리에 서요'], answer: '가운데로 돌아가요' },
              { type: 'short', prompt: '빈 곳으로 넘긴 수를 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '코트 그림의 고를 곳이 둘로 줄고, 카드를 놓으면 바로 표시돼요.',
          base: '기준에 따라 코트 그림에 빈 곳과 기본 자리를 꽂고, 2:2 풍선 배구로 직접 해 봐요.',
          challenge: '첫 코트 그림에 기준에 맞지 않는 함정 자리(ㄹ)가 더해지고, 시간 재기 도구로 판을 재요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 수비는 공 가진 사람만 따라다니면 된다고 여긴다 → 네트형은 넘긴 뒤 가운데로, 필드형은 운동장을 나누어 서야 빈 곳이 막힌다는 것을 코트 그림으로 보인다. ② 넘긴 뒤 제자리에 서 있다 → "가운데!" 외치기 약속. ③ 우리 코트 칸을 빈 곳으로 고른다 → "그 칸에 떨어지면 누구 점수인가요?"를 묻는다. 코트 그림은 칠판에 적은 기준으로만 판정하고, 풍선 배구는 교사가 코트 사이에서 관찰한다.',
      }),
      // ───────────────────────── 43 ─────────────────────────
      L(43, {
        title: '모둠 회의로 역할 나누고 끝줄 패스 게임에 적용하기',
        objective: '모둠 회의에서 모두가 의견을 내어 공격·수비 역할과 방법을 정하고, 끝줄 패스 게임에서 빈 곳으로 패스하거나 막는 장면을 세 번 만들 수 있다.',
        illustration: art('a small team of children huddled around a paper strategy board with role cards, then spreading out on a court with colored bibs', [
          { motif: 'sun', x: 410, y: 52, s: 0.7 }, { motif: 'cloud', x: 100, y: 52 }, { motif: 'hills', y: 222 },
          { motif: 'star', x: 140, y: 115 }, { motif: 'leaf', x: 380, y: 192 },
          { motif: 'text', x: 240, y: 160, text: '모두 한마디씩', size: 24 },
        ]),
        safety: [WARM, BALL, LOOK, STOP],
        stages: stages(
          {
            teacher: '"모둠에서 작전을 정할 때 누가 정하나요?" "잘하는 친구요"라는 대답이 나오면 "그 친구 혼자 정한 작전에서 나머지 셋은 무엇을 알고 뛰나요?"라고 묻는다. "오늘은 모둠 회의에서 모두 한 가지씩 말하고, 역할을 나누어 끝줄 패스 게임에 써 봐요. 목표는 빈 곳 장면 세 번이에요."',
            student: '작전을 한 사람이 정하면 나머지 친구들은 어떻게 될지 생각해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 역할과 할 일 정하기', minutes: 7, tool: 'mindmap',
              task: '끝줄 패스 게임의 네 역할과 할 일을 잇고, 작전을 정하는 바른 방법을 골라요.',
              teacher: '"연결은 가운데에서 공을 받아 빈 곳 친구에게 넘기고, 끝줄 공격은 끝줄 쪽 빈 곳으로 달려가요. 패스 길 수비는 공 가진 상대와 받을 상대 사이에, 끝줄 수비는 우리 끝줄 구역 앞을 지켜요." 역할은 한 판마다 바꾸어 모두가 해 본다고 알린다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '끝줄 패스 게임의 역할과 할 일을 이어요.', toolOptions: { mode: 'match', topic: '우리 모둠 역할', slots: [{ id: 'link', label: '연결' }, { id: 'end', label: '끝줄 공격' }, { id: 'lane', label: '패스 길 수비' }, { id: 'goal', label: '끝줄 수비' }], cards: ['가운데에서 받아 빈 곳 친구에게 넘겨요', '상대 끝줄 쪽 빈 곳으로 달려가요', '공 가진 상대와 받을 상대 사이에 서요', '우리 끝줄 구역 앞을 지켜요'] }, target: { match: { link: '가운데에서 받아 빈 곳 친구에게 넘겨요', end: '상대 끝줄 쪽 빈 곳으로 달려가요', lane: '공 가진 상대와 받을 상대 사이에 서요', goal: '우리 끝줄 구역 앞을 지켜요' } }, levels: { easy: { state: { at: { '가운데에서 받아 빈 곳 친구에게 넘겨요': 0 } } } }, difficulty: 0.2,
                  hints: ['역할 이름에 그 역할이 있는 자리(가운데·끝줄)와 하는 일(공격·수비)이 들어 있어요.', '수비 역할 둘에 공격하는 카드를 잇지 않았는지 보세요.', '연결은 가운데에서 넘기기, 끝줄 공격은 끝줄 쪽으로 달리기, 패스 길 수비는 사이에 서기, 끝줄 수비는 끝줄 앞 지키기예요.'] },
                { prompt: '모둠 작전을 정하는 바른 방법만 골라요.', toolOptions: { mode: 'pick', topic: '작전 정하기', basket: '바른 방법', cards: ['모두 한 가지씩 의견을 말해요', '판마다 역할을 바꾸어 모두 해 봐요', '정한 작전을 모두가 따라 말해 확인해요', '가장 잘하는 친구가 혼자 정해요'] }, target: { pick: ['모두 한 가지씩 의견을 말해요', '판마다 역할을 바꾸어 모두 해 봐요', '정한 작전을 모두가 따라 말해 확인해요'] }, levels: { challenge: { prompt: '모둠 작전을 정하는 바른 방법만 골라요. 그럴듯하지만 알맞지 않은 카드가 둘 있어요.', toolOptions: { cards: ['모두 한 가지씩 의견을 말해요', '판마다 역할을 바꾸어 모두 해 봐요', '정한 작전을 모두가 따라 말해 확인해요', '가장 잘하는 친구가 혼자 정해요', '말이 빠른 친구 의견으로 바로 정해요'] } } }, difficulty: 0.2 },
                { prompt: '모둠 회의에서 돌아가며 역할과 방법을 한 가지씩 말하고 1판 역할을 정해요. 다 하면 ‘다 했어요’를 눌러요.', free: true, talk: true },
              ],
            },
            {
              id: 'a2', title: '활동 2. 모둠 회의 상황 판단하기', minutes: 5, tool: 'emotion',
              task: '모둠 회의에서 생길 수 있는 상황을 보고 알맞은 말을 골라요.',
              teacher: '"잘하는 친구의 생각이 좋을 수도 있어요. 그런데 나머지 친구가 말하지 않으면 무엇을 놓칠까요?" 모두의 의견이 모이면 작전을 모두가 알고 뛴다는 것을 짚는다.',
              levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '지훈이가 "내가 다 정할 테니 너희는 따라와"라고 해요. 모둠원으로 알맞은 말은?', toolOptions: { mode: 'branch', situation: '모둠 회의에서 지훈이가 "내가 다 정할 테니 너희는 따라와"라고 해요.', choices: [{ id: 'follow', text: '"그래, 네가 제일 잘하니까"', result: '게임 중에 셋은 어디로 갈지 몰라 서 있었어요.', mood: '걱정', why: '모두가 작전을 알아야 함께 움직여요.' }, { id: 'round', text: '"좋은 생각이야. 우리도 한 가지씩 말해 보고 정하자"', result: '모두가 자기 역할을 알고 뛰었어요.', mood: '뿌듯함' }, { id: 'quit', text: '"그럼 난 안 할래"', result: '모둠이 셋이 되어 불리했어요.', mood: '속상함', why: '의견을 내고 함께 정해요.' }] }, target: { choice: 'round' }, levels: { easy: { toolOptions: { choices: [{ id: 'follow', text: '"그래, 네가 제일 잘하니까"', result: '게임 중에 셋은 어디로 갈지 몰라 서 있었어요.', mood: '걱정', why: '모두가 작전을 알아야 함께 움직여요.' }, { id: 'round', text: '"좋은 생각이야. 우리도 한 가지씩 말해 보고 정하자"', result: '모두가 자기 역할을 알고 뛰었어요.', mood: '뿌듯함' }] } } }, difficulty: 0.15 },
                { prompt: '하린이는 의견이 있지만 말하지 않고 있어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '모둠 회의에서 하린이는 의견이 있지만 말하지 않고 있어요.', choices: [{ id: 'skip', text: '시간이 없으니 하린이는 빼고 정해요', result: '하린이는 맡은 역할이 마음에 들지 않았어요.', mood: '속상함', why: '모두의 의견을 들어요.' }, { id: 'ask', text: '"하린아, 너는 어느 빈 곳으로 가면 좋겠어?"라고 물어요', result: '하린이가 끝줄 쪽 빈 곳 작전을 냈어요.', mood: '신남' }] }, target: { choice: 'ask' }, difficulty: 0.15 },
                { prompt: '짝에게 오늘 우리 모둠 작전에서 내가 낸 의견 하나를 말해요. 말한 뒤 ‘다 했어요’를 눌러요.', free: true, talk: true },
              ],
            },
            {
              id: 'a3', title: '활동 3. 정한 역할로 게임하고 빈 곳 장면 세기', minutes: 14, tool: 'timer',
              task: '5분 경기를 두 판 해요. 판 사이 1분에 역할을 바꾸어요. 기다리는 모둠이 우리 모둠의 빈 곳 패스와 빈 곳 막기 장면을 세어 줘요.',
              teacher: '"빈 곳 장면은 상대가 옆에 없는 곳에서 패스를 받은 것, 또는 패스 길 사이에 서서 막은 것이에요." 기다리는 모둠에게 장면을 세는 표를 준다. 목표 세 번을 넘긴 모둠은 판 사이에 작전을 하나 더 정해 본다.',
              levels: { easy: { showTotal: true }, base: {}, challenge: { stopwatch: true } },
              items: [
                { prompt: '5분 경기 두 판, 판 사이 1분 역할 바꾸기로 타이머를 맞춰요.', toolOptions: { plan: { work: 240, rest: 30, rounds: 3 }, workStep: 60, restStep: 30 }, target: { plan: { work: 300, rest: 60, rounds: 2 } }, difficulty: 0.2 },
                { prompt: '정한 역할대로 끝줄 패스 게임 두 판을 해요. 다 하면 ‘짝·모둠과 함께 해 보았어요’를 눌러요.', free: true },
                { prompt: '다른 모둠이 세어 준 우리 모둠 빈 곳 장면 수를 판마다 적어요.', toolOptions: { fields: [{ label: '1판 빈 곳 패스', unit: '번' }, { label: '1판 빈 곳 막기', unit: '번' }, { label: '2판 빈 곳 패스', unit: '번' }, { label: '2판 빈 곳 막기', unit: '번' }] }, target: { records: true }, levels: { easy: { prompt: '다른 모둠이 세어 준 빈 곳 장면 수를 두 칸 이상 적어요.', target: { records: 2 } } }, difficulty: 0.15 },
              ],
            },
          ],
          {
            teacher: '"빈 곳 장면 세 번을 만든 모둠? 무엇이 도움이 되었나요?" 회의에서 모두 의견을 낸 것이 게임에 어떻게 나타났는지 묻는다. 다음 시간에는 네트형에서 역할을 나누어 본다고 알린다.',
            exitTicket: [
              { type: 'tool', tool: 'emotion', options: { mode: 'branch', situation: '새 모둠에서 "작전은 키 큰 민준이가 정하고 나머지는 따라가자"는 말이 나왔어요.', choices: [{ id: 'tall', text: '"좋아, 민준이만 정해"', result: '셋은 작전을 몰라 빈 곳으로 가지 못했어요.', mood: '걱정', why: '모두가 의견을 내야 모두가 작전을 알아요.' }, { id: 'all', text: '"한 사람씩 의견을 말하고 함께 정하자"', result: '모두가 역할을 알고 빈 곳을 만들었어요.', mood: '뿌듯함' }] }, prompt: '새 모둠에게 알맞은 말을 골라요.', target: { choice: 'all' }, difficulty: 0.15 },
              { type: 'choice', prompt: '끝줄 패스 게임에서 "패스 길 수비" 역할이 할 일은?', options: ['공 가진 상대만 따라다녀요', '공 가진 상대와 받을 상대 사이에 서요', '우리 끝줄 구역 안에만 있어요'], answer: 1, difficulty: 0.2, explain: '패스 길 사이에 서야 빈 곳으로 가는 공을 막아요.' },
              { type: 'short', prompt: '오늘 우리 모둠이 만든 빈 곳 장면 하나와 그때 내 역할을 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '모둠 작전과 역할',
          items: [
            { type: 'table', prompt: '판마다 내 역할과 할 일을 쓰세요.', columns: ['판', '내 역할', '할 일'], cells: [['1판', '', ''], ['2판', '', '']] },
            { type: 'table', prompt: '모둠 회의에서 나온 의견을 쓰세요.', columns: ['누가(가명이나 번호)', '의견'], rows: 3 },
            { type: 'table', prompt: '빈 곳 장면 기록을 쓰세요.', columns: ['판', '빈 곳 패스', '빈 곳 막기'], cells: [['1판', '', ''], ['2판', '', '']] },
            { type: 'choice', prompt: '"작전은 잘하는 친구가 정하고 나머지는 따라가면 된다"는 말에 대한 생각에 ○ 하세요.', options: ['맞아요', '아니에요, 모두 의견을 내고 함께 정해요'], answer: '아니에요, 모두 의견을 내고 함께 정해요' },
            { type: 'short', prompt: '오늘 내가 낸 의견과 그 의견이 게임에서 어떻게 되었는지 쓰세요.' },
          ],
          easy: {
            note: '모두 한마디씩, 역할은 판마다 바꾸기! 빈 곳 장면 목표 세 번.',
            items: [
              { type: 'short', prompt: '오늘 내 역할을 쓰세요.' },
              { type: 'choice', prompt: '작전은 누가 정하나요?', options: ['모두 함께', '한 사람만'], answer: '모두 함께' },
              { type: 'short', prompt: '빈 곳 장면 수를 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 놓으면 바로 표시되고 첫 카드가 미리 놓여 있으며, 판단 보기가 둘이고 타이머 전체 시간이 보여요.',
          base: '역할과 할 일을 정하고, 모두 의견을 내어 작전을 세워 게임에 적용해요.',
          challenge: '작전 정하기에 함정 카드가 둘 섞이고, 판단 결과는 맞힌 뒤에만 보이며, 시간 재기 도구로 판을 재요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 경기 방법은 잘하는 친구가 정하면 되고 나머지는 따라가면 된다고 여긴다 → 돌아가며 한 가지씩 말하기를 회의 규칙으로 정한다. ② 역할을 한 사람이 계속 맡는다 → 판마다 바꾼다. ③ 수비 역할이 공만 쫓는다 → 패스 길 수비의 자리를 콘으로 미리 보여 준다. 활동지의 회의 의견은 가명이나 번호로만 적게 하고, 교사는 모둠 회의를 돌며 말하지 않는 학생에게 질문을 건넨다.',
      }),
      // ───────────────────────── 44 ─────────────────────────
      L(44, {
        title: '3:3 풍선 배구에서 받기·올리기·넘기기 역할 나누기',
        objective: '3:3 풍선 배구에서 받기·올리기·넘기기 역할을 나누어 세 번 안에 넘기고, 상대 코트의 빈 곳을 찾아 넘기는 장면을 세 번 만들 수 있다.',
        illustration: art('three children on one side of a low paper net passing a balloon from back to middle to front, the front child tapping it toward an empty corner', [
          { motif: 'sun', x: 410, y: 52, s: 0.6 }, { motif: 'cloud', x: 100, y: 52 }, { motif: 'hills', y: 222 },
          { motif: 'cloud', x: 300, y: 110, s: 0.6 }, { motif: 'star', x: 150, y: 120 },
          { motif: 'text', x: 240, y: 165, text: '받고 · 올리고 · 넘기고', size: 22 },
        ]),
        safety: [WARM, SPACE, NET, LOOK],
        stages: stages(
          {
            teacher: '"풍선 배구에서 우리 편이 세 번 안에 넘겨야 해요. 셋이 모두 풍선에 달려들면 어떻게 될까요?" "부딪혀요", "놓쳐요" 같은 대답을 받는다. "그래서 받는 사람, 올리는 사람, 넘기는 사람을 나눠요. 오늘은 역할을 나누어 빈 곳으로 넘기는 장면 세 번이 목표예요."',
            student: '세 사람이 모두 풍선에 달려들면 어떤 일이 생길지 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 세 번 안에 넘기는 역할 차례', minutes: 7, tool: 'timer',
              task: '우리 코트에서 풍선을 세 번 안에 넘기는 역할 차례를 놓고, 경기 시간을 맞춘 뒤 안전 점검을 해요.',
              teacher: '"뒤에 선 사람이 받고, 가운데 사람이 높이 올려 주고, 네트 앞 사람이 빈 곳으로 넘겨요. 넘긴 뒤에는 모두 자기 자리로 돌아가요." 역할은 판마다 시계 방향으로 바꾼다. "\'내 풍선!\'을 외친 사람만 쳐요."',
              levels: { easy: { showTotal: true }, base: {}, challenge: {} },
              items: [
                { prompt: '우리 코트에서 풍선을 세 번 안에 넘기는 차례대로 놓아요.', toolOptions: { cards: ['네트 앞 사람이 빈 칸으로 넘기기', '모두 자기 자리로 돌아가기', '뒤 사람이 "내 풍선!" 외치고 받기', '가운데 사람이 높이 올려 주기'] }, target: { order: ['뒤 사람이 "내 풍선!" 외치고 받기', '가운데 사람이 높이 올려 주기', '네트 앞 사람이 빈 칸으로 넘기기', '모두 자기 자리로 돌아가기'] }, levels: { easy: { state: { order: ['뒤 사람이 "내 풍선!" 외치고 받기', '가운데 사람이 높이 올려 주기', '모두 자기 자리로 돌아가기', '네트 앞 사람이 빈 칸으로 넘기기'] } } }, difficulty: 0.2 },
                { prompt: '6분 경기 두 판, 판 사이 2분 모둠 회의로 타이머를 맞춰요.', toolOptions: { plan: { work: 300, rest: 60, rounds: 3 }, workStep: 60, restStep: 60 }, target: { plan: { work: 360, rest: 120, rounds: 2 } }, difficulty: 0.2 },
                { prompt: '3:3 풍선 배구를 하기 전에 코트를 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['네트 줄이 허리 높이로 단단히 묶였어요', '세 사람 자리를 바닥 테이프로 표시했어요', '"내 풍선!"을 외친 사람만 치기로 했어요'] }, target: { safety: true }, difficulty: 0.1 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 상대 코트의 빈 곳 찾기', minutes: 7, tool: 'map',
              task: '네트 앞 사람이 되어 상대 코트 그림을 보고 ㄱ·ㄴ·ㄷ 가운데 풍선을 넘길 빈 곳에 핀을 꽂아요.',
              teacher: '기준은 42차시와 같다: "상대 코트(오른쪽 세 줄) 안에서 상대가 바로 옆 칸에 없는 곳." 상대 셋이 서는 자리가 바뀌면 빈 곳도 바뀐다는 것을 세 문항으로 보인다. "넘기기 전에 상대 코트를 한 번 보는 것이 넘기는 사람의 일이에요."',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '상대 셋이 이렇게 섰어요. ㄱ·ㄴ·ㄷ 가운데 풍선을 넘길 빈 곳에 핀을 꽂아요. 상대 코트 안에서 상대가 바로 옆 칸에 없는 곳이에요.', toolOptions: COURT('3:3 풍선 배구 코트(왼쪽 우리, 오른쪽 세 줄 상대)', [6, 4], [US('나(넘기는 사람)', [2, 1]), THEM('상대1', [3, 0]), THEM('상대2', [4, 2]), THEM('상대3', [3, 3]), SPOT('ㄱ', [5, 0]), SPOT('ㄴ', [4, 3]), SPOT('ㄷ', [5, 3])]), target: { place: 'ㄱ' }, levels: { easy: { toolOptions: { places: [US('나(넘기는 사람)', [2, 1]), THEM('상대1', [3, 0]), THEM('상대2', [4, 2]), THEM('상대3', [3, 3]), SPOT('ㄱ', [5, 0]), SPOT('ㄴ', [4, 3])] } } }, difficulty: 0.25,
                  hints: ['고를 곳마다 둘레 여덟 칸에 방패(상대)가 있는지 하나씩 보세요.', '아래쪽에 상대 둘이 모여 있어요. 그 둘레에 있는 곳을 골랐는지 보세요.', '상대가 아래쪽에 모였으니 오른쪽 맨 위 칸이 비었어요.'] },
                { prompt: '상대가 자리를 바꾸었어요. ㄱ·ㄴ·ㄷ 가운데 풍선을 넘길 빈 곳에 핀을 꽂아요. 상대 코트 안에서 상대가 바로 옆 칸에 없는 곳이에요.', toolOptions: COURT('3:3 풍선 배구 코트(왼쪽 우리, 오른쪽 세 줄 상대)', [6, 4], [US('나(넘기는 사람)', [2, 2]), THEM('상대1', [4, 0]), THEM('상대2', [4, 1]), THEM('상대3', [5, 3]), SPOT('ㄱ', [3, 0]), SPOT('ㄴ', [3, 3]), SPOT('ㄷ', [5, 2])]), target: { place: 'ㄴ' }, levels: { easy: { toolOptions: { places: [US('나(넘기는 사람)', [2, 2]), THEM('상대1', [4, 0]), THEM('상대2', [4, 1]), THEM('상대3', [5, 3]), SPOT('ㄱ', [3, 0]), SPOT('ㄴ', [3, 3])] } } }, difficulty: 0.3,
                  hints: ['상대 셋이 위쪽과 오른쪽 아래에 있어요. 고를 곳마다 둘레 여덟 칸을 살펴보세요.', '위쪽 두 상대 옆에 붙은 곳, 오른쪽 아래 상대 옆에 붙은 곳은 빈 곳이 아니에요.', '네트 가까운 맨 아래 왼쪽 칸이 상대 누구와도 붙어 있지 않아요.'] },
                { prompt: '상대가 또 자리를 바꾸었어요. ㄱ·ㄴ·ㄷ 가운데 풍선을 넘길 빈 곳에 핀을 꽂아요. 상대 코트 안에서 상대가 바로 옆 칸에 없는 곳이에요.', toolOptions: COURT('3:3 풍선 배구 코트(왼쪽 우리, 오른쪽 세 줄 상대)', [6, 4], [US('나(넘기는 사람)', [2, 1]), THEM('상대1', [3, 2]), THEM('상대2', [4, 3]), THEM('상대3', [5, 1]), SPOT('ㄱ', [4, 2]), SPOT('ㄴ', [5, 3]), SPOT('ㄷ', [3, 0])]), target: { place: 'ㄷ' }, levels: { easy: { toolOptions: { places: [US('나(넘기는 사람)', [2, 1]), THEM('상대1', [3, 2]), THEM('상대2', [4, 3]), THEM('상대3', [5, 1]), SPOT('ㄱ', [4, 2]), SPOT('ㄷ', [3, 0])] } } }, difficulty: 0.3,
                  hints: ['고를 곳마다 둘레 여덟 칸에 방패가 몇 개 있는지 세어 보세요.', '상대 셋 한가운데에 있는 곳이나 아래 구석은 상대와 붙어 있어요.', '네트 가까운 맨 위 칸이 상대 누구와도 붙어 있지 않아요.'] },
              ],
            },
            {
              id: 'a3', title: '활동 3. 역할 나누어 3:3 풍선 배구 하기', minutes: 12, tool: 'timer',
              task: '역할을 나누어 3:3 풍선 배구 두 판을 해요. 판 사이 2분 회의에서 역할을 바꾸어요. 기다리는 모둠이 우리 모둠의 "세 번 안에 넘김"과 "빈 곳으로 넘김"을 세어 줘요.',
              teacher: '"세 번 안에 넘겼어도 상대 바로 앞으로 넘기면 쉽게 받혀요. 넘기는 사람은 넘기기 전에 상대 코트를 봐요." 판 사이 회의에서는 "누가 무엇을 바꿀지"를 한 사람씩 말한다. 잘하는 친구 혼자 세 번을 다 치지 않게 한다.',
              levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
              items: [
                { prompt: '역할을 나누어 3:3 풍선 배구 두 판을 해요. 다 하면 ‘짝·모둠과 함께 해 보았어요’를 눌러요.', free: true },
                { prompt: '다른 모둠이 세어 준 우리 모둠 기록을 판마다 적어요.', toolOptions: { fields: [{ label: '1판 세 번 안에 넘김', unit: '번' }, { label: '1판 빈 곳으로 넘김', unit: '번' }, { label: '2판 세 번 안에 넘김', unit: '번' }, { label: '2판 빈 곳으로 넘김', unit: '번' }] }, target: { records: true }, levels: { easy: { prompt: '다른 모둠이 세어 준 기록을 두 칸 이상 적어요.', target: { records: 2 } } }, difficulty: 0.15 },
                { prompt: '판 사이 회의에서 내가 바꿀 것 하나를 모둠에 말해요. 말한 뒤 ‘다 했어요’를 눌러요.', free: true, talk: true },
              ],
            },
          ],
          {
            teacher: '"빈 곳으로 넘긴 장면 세 번을 만든 모둠? 누가 넘겼나요?" 넘기는 역할을 맡은 친구가 판마다 달랐는지 확인하게 한다. 출구 1번은 새 상황이니 스스로 판단하게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'timer', options: { cards: ['네트 앞 사람이 빈 칸으로 넘기기', '뒤 사람이 받기', '가운데 사람이 높이 올려 주기'] }, prompt: '배구에서도 같은 역할 차례예요. 받기·올리기·넘기기를 차례대로 놓아요.', target: { order: ['뒤 사람이 받기', '가운데 사람이 높이 올려 주기', '네트 앞 사람이 빈 칸으로 넘기기'] }, difficulty: 0.15 },
              { type: 'tool', tool: 'emotion', options: { mode: 'branch', situation: '모둠의 서준이가 "내가 세 번 다 칠게, 너희는 비켜"라고 해요.', choices: [{ id: 'let', text: '"그래, 네가 다 해"', result: '서준이가 힘들어 마지막에 실수했고, 둘은 풍선을 만지지 못했어요.', mood: '속상함', why: '역할을 나누어야 모두 참여하고 실수도 줄어요.' }, { id: 'roles', text: '"정한 역할대로 받고, 올리고, 넘기자"', result: '세 번 안에 빈 곳으로 넘겼어요.', mood: '뿌듯함' }] }, prompt: '서준이에게 알맞은 말을 골라요.', target: { choice: 'roles' }, difficulty: 0.15 },
              { type: 'short', prompt: '오늘 내가 맡은 역할과 그 역할에서 잘한 점 하나를 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '받고, 올리고, 넘기고',
          items: [
            { type: 'table', prompt: '판마다 내 역할을 쓰세요.', columns: ['판', '내 역할(받기·올리기·넘기기)', '잘한 점'], cells: [['1판', '', ''], ['2판', '', '']] },
            { type: 'table', prompt: '우리 모둠 기록을 쓰세요.', columns: ['판', '세 번 안에 넘김', '빈 곳으로 넘김'], cells: [['1판', '', ''], ['2판', '', '']] },
            { type: 'figure', wide: true, prompt: '상대 코트에서 풍선을 넘길 빈 곳(ㄱ·ㄴ·ㄷ 가운데)에 ○ 하세요.', tool: 'map', figures: [{ options: COURT('3:3 풍선 배구 코트(왼쪽 우리, 오른쪽 세 줄 상대)', [6, 4], [US('나(넘기는 사람)', [2, 2]), THEM('상대1', [3, 0]), THEM('상대2', [5, 0]), THEM('상대3', [3, 3]), SPOT('ㄱ', [4, 1]), SPOT('ㄴ', [5, 3]), SPOT('ㄷ', [4, 3])]), caption: '' }], answer: 'ㄴ — 상대 코트 안이고 바로 옆 칸에 상대가 없어요' },
            { type: 'choice', prompt: '"잘하는 한 사람이 세 번 다 치면 된다"는 말에 대한 생각에 ○ 하세요.', options: ['맞아요', '아니에요, 역할을 나누어야 모두 참여하고 실수가 줄어요'], answer: '아니에요, 역할을 나누어야 모두 참여하고 실수가 줄어요' },
            { type: 'short', prompt: '판 사이 회의에서 바꾼 것과 그 결과를 쓰세요.' },
          ],
          easy: {
            note: '뒤 사람 받기 → 가운데 올리기 → 앞 사람 빈 곳으로 넘기기 → 모두 제자리!',
            items: [
              { type: 'short', prompt: '오늘 내 역할을 쓰세요.' },
              { type: 'choice', prompt: '넘기는 사람은 넘기기 전에?', options: ['상대 코트를 봐요', '눈을 감아요'], answer: '상대 코트를 봐요' },
              { type: 'short', prompt: '빈 곳으로 넘긴 수를 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드가 거의 맞게 놓여 있고, 코트 그림의 고를 곳이 둘로 줄며 타이머 전체 시간이 보여요.',
          base: '역할 차례를 정하고, 상대 자리에 따라 바뀌는 빈 곳을 찾아 3:3 풍선 배구에 적용해요.',
          challenge: '시간 재기 도구로 판을 재고, 판 사이 회의에서 역할 바꾸기를 이끌어요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 경기 방법은 잘하는 친구가 정하고 나머지는 따라가면 된다고 여긴다 → 역할을 판마다 바꾸고, 회의에서 한 사람씩 말하게 한다. ② 세 사람이 한 풍선에 달려든다 → "내 풍선!" 외친 사람만 치기. ③ 상대 바로 앞으로 넘긴다 → 넘기기 전에 상대 코트를 보는 것을 넘기는 사람의 일로 정한다. 교사는 네트 옆에서 부딪힘을 관찰한다.',
      }),
      // ───────────────────────── 45 ─────────────────────────
      L(45, {
        title: '발야구에서 수비 자리 나누고 빈 곳으로 차 보내기',
        objective: '4:4 발야구에서 모둠이 함께 차는 차례와 수비 자리를 정하고, 빈 곳으로 차 보내거나 빈 곳을 막는 장면을 세 번 만들 수 있다.',
        illustration: art('a paper kickball diamond with four fielders spread into separate zones, a child kicking a rolling ball toward the open side while a coach child points at first base', [
          { motif: 'sun', x: 410, y: 50, s: 0.6 }, { motif: 'cloud', x: 100, y: 52 }, { motif: 'hills', y: 222 },
          { motif: 'tree', x: 60, y: 200, s: 0.7 }, { motif: 'star', x: 380, y: 120 },
          { motif: 'text', x: 240, y: 160, text: '나누어 서고, 빈 곳으로', size: 22 },
        ]),
        safety: [WARM, BALL, LOOK, '주자는 베이스 바깥쪽을 밟고 달리며, 수비는 공으로 주자를 맞히지 않고 베이스를 먼저 밟아 아웃시켜요.'],
        stages: stages(
          {
            teacher: '"영역형 끝줄 패스 게임, 네트형 풍선 배구에서 역할을 나누어 보았어요. 오늘은 필드형 발야구예요. 공이 굴러오면 수비 넷은 어떻게 움직이나요?" "다 같이 공 쪽으로 달려가요"라는 대답이 나오면 "넷이 모두 한쪽으로 가면 다음 공은 어디로 갈까요?"라고 되묻는다. "오늘 목표는 수비 자리를 나누어 빈 곳을 막고, 공격 때는 빈 곳으로 차는 장면 세 번이에요."',
            student: '수비 넷이 모두 공 쪽으로 달려가면 운동장 어디가 비는지 떠올려 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 발야구 운동장에서 빈 곳과 수비 자리 찾기', minutes: 8, tool: 'map',
              task: '운동장 그림을 보고 ㄱ·ㄴ·ㄷ 가운데 알맞은 곳에 핀을 꽂아요. 깃발은 우리 편, 방패는 상대, 점은 고를 곳이에요. 아래 가운데가 홈이에요.',
              teacher: '칠판에 기준을 적는다: "빈 곳 = 수비가 바로 옆 칸(둘레 여덟 칸)에 없는 곳". 1번은 차는 사람, 2번은 수비, 3번은 다시 차는 사람이 되어 본다. 3번을 푼 뒤 "수비가 공을 쫓아 한쪽으로 몰리면 반대쪽이 통째로 비어요. 수비는 공 가진 사람만 따라다니면 될까요?"라고 묻는다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '차는 사람이 되어요. ㄱ·ㄴ·ㄷ 가운데 공을 차 보낼 빈 곳에 핀을 꽂아요. 수비가 바로 옆 칸에 없는 곳이에요.', toolOptions: COURT('발야구 운동장(아래 가운데가 홈)', [5, 5], [US('홈(차는 사람)', [2, 4]), THEM('수비1', [3, 1]), THEM('수비2', [2, 2]), THEM('수비3', [3, 3]), SPOT('ㄱ', [0, 1]), SPOT('ㄴ', [4, 2]), SPOT('ㄷ', [1, 3])]), target: { place: 'ㄱ' }, levels: { easy: { toolOptions: { places: [US('홈(차는 사람)', [2, 4]), THEM('수비1', [3, 1]), THEM('수비2', [2, 2]), THEM('수비3', [3, 3]), SPOT('ㄱ', [0, 1]), SPOT('ㄴ', [4, 2])] } }, challenge: { prompt: '차는 사람이 되어요. ㄱ·ㄴ·ㄷ·ㄹ 가운데 공을 차 보낼 빈 곳에 핀을 꽂아요. 수비가 바로 옆 칸에 없는 곳이에요.', toolOptions: { places: [US('홈(차는 사람)', [2, 4]), THEM('수비1', [3, 1]), THEM('수비2', [2, 2]), THEM('수비3', [3, 3]), SPOT('ㄱ', [0, 1]), SPOT('ㄴ', [4, 2]), SPOT('ㄷ', [1, 3]), SPOT('ㄹ', [4, 0])] } } }, difficulty: 0.25,
                  hints: ['고를 곳마다 둘레 여덟 칸에 수비(방패)가 있는지 하나씩 보세요.', '수비가 가운데와 오른쪽에 서 있어요. 그 둘레에 붙은 곳을 골랐는지 보세요.', '수비가 모두 가운데·오른쪽에 있으니 왼쪽 위의 곳이 비었어요.'] },
                { prompt: '이번엔 수비예요. 우리 수비 셋이 섰어요. 넷째 수비가 설 곳은 ㄱ·ㄴ·ㄷ 가운데 어디일까요? 우리 수비가 바로 옆 칸에 없는 곳이에요.', toolOptions: COURT('발야구 운동장(아래 가운데가 홈)', [5, 5], [THEM('차는 사람(홈)', [2, 4]), US('수비1', [1, 1]), US('수비2', [2, 2]), US('수비3', [0, 2]), SPOT('ㄱ', [1, 0]), SPOT('ㄴ', [4, 1]), SPOT('ㄷ', [2, 3])]), target: { place: 'ㄴ' }, levels: { easy: { toolOptions: { places: [THEM('차는 사람(홈)', [2, 4]), US('수비1', [1, 1]), US('수비2', [2, 2]), US('수비3', [0, 2]), SPOT('ㄱ', [1, 0]), SPOT('ㄴ', [4, 1])] } }, challenge: { prompt: '이번엔 수비예요. 우리 수비 셋이 섰어요. 넷째 수비가 설 곳은 ㄱ·ㄴ·ㄷ·ㄹ 가운데 어디일까요? 우리 수비가 바로 옆 칸에 없는 곳이에요.', toolOptions: { places: [THEM('차는 사람(홈)', [2, 4]), US('수비1', [1, 1]), US('수비2', [2, 2]), US('수비3', [0, 2]), SPOT('ㄱ', [1, 0]), SPOT('ㄴ', [4, 1]), SPOT('ㄷ', [2, 3]), SPOT('ㄹ', [3, 2])] } } }, difficulty: 0.3,
                  hints: ['수비 셋이 어느 쪽에 몰려 있는지 먼저 보고, 고를 곳마다 둘레 여덟 칸에 우리 수비(깃발)가 있는지 보세요.', '왼쪽과 가운데 수비 둘레에 붙은 곳은 이미 막혀 있어요. 거기에 서면 수비가 겹쳐요.', '오른쪽이 통째로 비었으니 오른쪽 가장자리의 곳에 서야 운동장이 나뉘어요.'] },
                { prompt: '상대 수비 넷이 공을 쫓아 한쪽으로 몰렸어요. ㄱ·ㄴ·ㄷ 가운데 다음 공을 차 보낼 빈 곳에 핀을 꽂아요. 수비가 바로 옆 칸에 없는 곳이에요.', toolOptions: COURT('발야구 운동장(아래 가운데가 홈)', [5, 5], [US('홈(차는 사람)', [2, 4]), THEM('수비1', [0, 1]), THEM('수비2', [1, 1]), THEM('수비3', [0, 2]), THEM('수비4', [1, 2]), SPOT('ㄱ', [1, 0]), SPOT('ㄴ', [2, 3]), SPOT('ㄷ', [3, 2])]), target: { place: 'ㄷ' }, levels: { easy: { toolOptions: { places: [US('홈(차는 사람)', [2, 4]), THEM('수비1', [0, 1]), THEM('수비2', [1, 1]), THEM('수비3', [0, 2]), THEM('수비4', [1, 2]), SPOT('ㄴ', [2, 3]), SPOT('ㄷ', [3, 2])] } } }, difficulty: 0.25,
                  hints: ['수비 넷이 어느 쪽에 모였는지 보고, 그 반대쪽을 살펴보세요.', '수비 무리 바로 옆에 붙은 곳은 공을 차도 금방 잡혀요.', '수비가 모두 왼쪽에 몰렸으니 오른쪽 가운데의 곳이 비었어요.'] },
              ],
            },
            {
              id: 'a2', title: '활동 2. 공격 차례와 경기 시간 정하기', minutes: 6, tool: 'timer',
              task: '공을 차는 사람이 한 번 공격하는 차례를 놓고, 경기 시간을 맞춘 뒤 안전 점검을 해요.',
              teacher: '"차기 전에 수비가 비운 쪽을 먼저 봐요. 차고 나면 1루로 달리고, 1루에서는 주자 코치 친구의 신호를 보고 멈출지 더 달릴지 정해요." 모둠 회의로 차는 차례와 수비 자리(왼쪽·가운데·오른쪽·1루)를 정하고, 공격과 수비를 바꿀 때 자리도 돌아가며 바꾼다고 알린다.',
              levels: { easy: { showTotal: true }, base: {}, challenge: {} },
              items: [
                { prompt: '차는 사람이 한 번 공격하는 차례대로 카드를 놓아요.', toolOptions: { cards: ['1루까지 베이스 바깥쪽을 밟고 달리기', '수비가 비운 쪽 살펴보기', '1루에서 주자 코치 신호 보고 멈추거나 더 달리기', '빈 곳으로 공 차기'] }, target: { order: ['수비가 비운 쪽 살펴보기', '빈 곳으로 공 차기', '1루까지 베이스 바깥쪽을 밟고 달리기', '1루에서 주자 코치 신호 보고 멈추거나 더 달리기'] }, levels: { easy: { state: { order: ['수비가 비운 쪽 살펴보기', '빈 곳으로 공 차기', '1루에서 주자 코치 신호 보고 멈추거나 더 달리기', '1루까지 베이스 바깥쪽을 밟고 달리기'] } } }, difficulty: 0.2,
                  hints: ['공을 차기 전에 할 일, 찬 뒤에 할 일을 먼저 나누어 보세요.', '달리기 카드 둘 가운데 어느 것이 먼저인지 보세요. 1루에 닿아야 신호를 볼 수 있어요.', '살펴보기 → 차기 → 1루까지 달리기 → 신호 보고 정하기 차례예요.'] },
                { prompt: '공격·수비 한 번에 3분씩 세 번, 바꿀 때 1분 모둠 회의로 타이머를 맞춰요.', toolOptions: { plan: { work: 240, rest: 30, rounds: 2 }, workStep: 60, restStep: 30 }, target: { plan: { work: 180, rest: 60, rounds: 3 } }, difficulty: 0.2 },
                { prompt: '4:4 발야구를 하기 전에 운동장을 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['베이스(접시콘) 사이가 10걸음 안팎으로 놓였어요', '기다리는 모둠이 홈 뒤 안전선 밖에 섰어요', '공은 바닥에 굴려 주고 차기로 했어요'] }, target: { safety: true }, difficulty: 0.1 },
              ],
            },
            {
              id: 'a3', title: '활동 3. 수비 자리 나누어 발야구 하고 장면 세기', minutes: 12, tool: 'timer',
              task: '정한 차례와 수비 자리로 4:4 발야구를 해요. 기다리는 모둠이 우리 모둠의 "빈 곳으로 찬 공"과 "자리를 지켜 막은 공"을 세어 줘요.',
              teacher: '"수비는 \'내 공!\'을 외친 가장 가까운 한 사람만 공을 잡으러 가고, 나머지는 자기 자리와 가까운 베이스를 지켜요." 바꾸는 1분 회의에서는 "오늘 상대가 많이 찬 쪽은 어디였나요? 거기에 누가 설까요?"를 한 사람씩 말하게 한다. 모두가 공 쪽으로 몰리면 경기를 잠깐 멈추고 각자 자리를 가리키게 한다.',
              levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
              items: [
                { prompt: '정한 차례와 수비 자리로 4:4 발야구를 해요. 다 하면 ‘짝·모둠과 함께 해 보았어요’를 눌러요.', free: true },
                { prompt: '다른 모둠이 세어 준 우리 모둠 장면 수를 적어요.', toolOptions: { fields: [{ label: '빈 곳으로 찬 공', unit: '번' }, { label: '자리를 지켜 막은 공', unit: '번' }, { label: '수비가 한쪽으로 몰린 때', unit: '번' }] }, target: { records: true }, levels: { easy: { prompt: '다른 모둠이 세어 준 장면 수를 두 칸 이상 적어요.', target: { records: 2 } } }, difficulty: 0.15 },
                { prompt: '모둠에게 다음 판에 내가 설 수비 자리와 그 까닭을 말해요. 말한 뒤 ‘다 했어요’를 눌러요.', free: true, talk: true },
              ],
            },
          ],
          {
            teacher: '"빈 곳 장면을 세 번 만든 모둠? 수비가 한쪽으로 몰린 때는 몇 번이었나요?" 몰린 수가 줄어든 모둠에게 무엇을 바꾸었는지 묻는다. "수비는 공만 쫓는 것이 아니라 운동장을 나누어 지키는 것"이라는 말을 학생 입으로 정리하게 한다. 출구 1번은 새 운동장이니 기준만 떠올리게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'map', options: COURT('새 발야구 운동장(아래 가운데가 홈)', [5, 5], [US('홈(차는 사람)', [2, 4]), THEM('수비1', [1, 1]), THEM('수비2', [3, 1]), THEM('수비3', [3, 3]), SPOT('ㄱ', [0, 3]), SPOT('ㄴ', [2, 1]), SPOT('ㄷ', [4, 2])]), prompt: '새 운동장에서 ㄱ·ㄴ·ㄷ 가운데 공을 차 보낼 빈 곳에 핀을 꽂아요. 수비가 바로 옆 칸에 없는 곳이에요.', target: { place: 'ㄱ' }, difficulty: 0.3 },
              { type: 'choice', prompt: '발야구 수비에서 공이 굴러올 때 알맞은 움직임은?', options: ['수비 모두 공 쪽으로 달려가요', '가장 가까운 한 사람이 잡고, 나머지는 자기 자리와 베이스를 지켜요', '공이 올 때까지 모두 홈 앞에 모여 있어요'], answer: 1, difficulty: 0.2, explain: '모두 공을 쫓으면 다른 쪽이 비어 상대가 그쪽으로 차요.' },
              { type: 'short', prompt: '오늘 우리 모둠이 정한 수비 자리 하나와 그 자리를 고른 까닭을 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '수비 자리와 빈 곳',
          items: [
            { type: 'table', prompt: '우리 모둠 차는 차례와 수비 자리를 쓰세요(가명이나 번호).', columns: ['차는 차례', '수비 자리(왼쪽·가운데·오른쪽·1루)'], rows: 4 },
            { type: 'figure', wide: true, prompt: '발야구 운동장에서 공을 차 보낼 빈 곳(ㄱ·ㄴ·ㄷ 가운데)에 ○ 하세요.', tool: 'map', figures: [{ options: COURT('발야구 운동장(아래 가운데가 홈)', [5, 5], [US('홈(차는 사람)', [2, 4]), THEM('수비1', [0, 1]), THEM('수비2', [2, 1]), THEM('수비3', [3, 2]), SPOT('ㄱ', [4, 0]), SPOT('ㄴ', [1, 2]), SPOT('ㄷ', [4, 3])]), caption: '' }], answer: 'ㄱ — 둘레 여덟 칸에 수비가 없어요' },
            { type: 'table', prompt: '다른 모둠이 세어 준 장면 수를 쓰세요.', columns: ['빈 곳으로 찬 공', '자리를 지켜 막은 공', '수비가 한쪽으로 몰린 때'], rows: 1 },
            { type: 'choice', prompt: '"수비는 공 가진 사람만 따라다니면 된다"는 말에 대한 생각에 ○ 하세요.', options: ['맞아요', '아니에요, 운동장을 나누어 자기 자리를 지켜야 빈 곳이 막혀요'], answer: '아니에요, 운동장을 나누어 자기 자리를 지켜야 빈 곳이 막혀요' },
            { type: 'short', prompt: '1루에서 주자 코치의 신호를 보고 멈춘 까닭이나 더 달린 까닭을 쓰세요.' },
          ],
          easy: {
            note: '빈 곳 = 수비가 바로 옆 칸에 없는 곳. 수비는 "내 공!" 한 사람만, 나머지는 자리 지키기!',
            items: [
              { type: 'short', prompt: '오늘 내 수비 자리를 쓰세요.' },
              { type: 'choice', prompt: '공을 차기 전에?', options: ['수비가 비운 쪽을 봐요', '눈을 감아요'], answer: '수비가 비운 쪽을 봐요' },
              { type: 'short', prompt: '빈 곳으로 찬 공의 수를 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '운동장 그림의 고를 곳이 둘로 줄고, 차례 카드가 거의 맞게 놓여 있으며 타이머 전체 시간이 보여요.',
          base: '빈 곳과 넷째 수비 자리를 기준으로 찾고, 차례와 수비 자리를 정해 4:4 발야구에 적용해요.',
          challenge: '운동장 그림에 기준에 맞지 않는 함정 자리(ㄹ)가 더해지고, 시간 재기 도구로 경기를 재요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 경기 방법은 잘하는 친구가 정하고 나머지는 따라간다 → 차는 차례와 수비 자리를 회의에서 한 사람씩 말해 정하고, 공수 교대 때 자리를 돌아가며 바꾼다. ② 수비 넷이 공을 쫓아 한쪽으로 몰린다 → "내 공!" 외친 한 사람만 가기, 몰린 횟수를 기다리는 모둠이 세어 준다. ③ 주자가 베이스 안쪽을 밟아 수비와 부딪힌다 → 베이스 바깥쪽 밟기를 시작 전 한 번 걸어서 보여 준다. 공은 바닥에 굴려 주고, 차는 사람 둘레 3걸음 안에는 아무도 서지 않게 한다.',
      }),
      // @@NEXT@@
    ],
  });
})();
