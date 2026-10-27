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
      // @@NEXT@@
    ],
  });
})();
