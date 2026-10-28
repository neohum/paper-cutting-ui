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
      // @@NEXT@@
    ],
  });
})();
