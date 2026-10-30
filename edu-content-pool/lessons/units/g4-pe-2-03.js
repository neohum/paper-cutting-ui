/* 4학년 2학기 체육 3. 표현 — 28차시.
 * 몸으로 하는 활동(걷기·손뼉·리본·천·후프·부채 표현)은 교구가 판정하지 않는다. 교구는 계획(리듬 블록·장단 칸·동작 차례)·관찰(규칙 어긋남 찾기·분류)·
 * 판단(안전·감상 예절)·기록과 스스로 점검을 맡고, 실제 움직임은 task·teacher·활동지에 적어 교사가 관찰한다.
 * 몸 악기 글자 조각: 짝 = 손뼉, 탁 = 두 손으로 무릎 치기, 쿵 = 발 구르기, 걷 = 걷기 한 걸음, 뻗 = 팔 크게 뻗기, 쉼 = 멈춤.
 * 장단(세마치·굿거리)은 전래 국악 장단이고, 노래 가사는 쓰지 않는다. 영상은 교사가 고른 공개 자료를 쓴다(특정 작품을 베끼지 않는다).
 */
(function () {
  const UNIT = 'g4-pe-2-03';
  const CU = 'g4-체육-2학기-3';
  const BASE = { schema: 'edu-lesson.v1', grade: 4, subject: '체육', unitTitle: '3. 표현', minutes: 40, formats: ['chromebook', 'projector', 'print'] };
  // 체육은 units-map.json 에 없어 check-unit 이 units-index.json 의 단원 성취기준(이 단원은 이 세 개)만 받는다.
  // 차시 묶음별로 고른다: 1~10 리듬과 움직임 · 11~19 도구와 움직임 · 20~28 감상과 바꾸기.
  const S5 = '[4체03-05]'; const S6 = '[4체03-06]'; const S7 = '[4체03-07]';
  const stdOf = (n) => (n <= 10 ? S5 : n <= 19 ? S6 : S7);
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
  // 안전 약속(차시마다 골라 쓴다)
  const SPACE = '친구와 두 팔을 벌려 닿지 않을 만큼 떨어져서 움직여요.';
  const FLOOR = '실내화 끈과 바닥의 물기를 살피고, 양말만 신고 미끄러지지 않아요.';
  const STOP = '어지럽거나 숨이 너무 차면 바로 멈추고 선생님께 말해요.';
  const LOOK = '자리를 옮길 때는 가는 쪽을 먼저 보고, 멈춤 신호를 들으면 바로 서요.';
  const TOOL = '도구는 내 몸 둘레 안에서만 움직이고, 친구 얼굴 높이로 휘두르지 않아요.';
  const TOOLBACK = '도구가 엉키거나 떨어지면 멈추고 제자리에서 정리한 뒤 다시 해요.';
  const HAND = '손을 잡고 돌 때는 세게 당기지 않고, 넘어진 친구가 있으면 모두 멈춰요.';
  // 리듬 블록 고르개
  const R1 = { mode: 'rhythm', meter: 4, measures: 2 };

  PaperLessons.registerUnit({
    id: UNIT, schema: 'edu-unit.v1', catalogUnit: CU,
    grade: 4, subject: '체육', unitTitle: '3. 표현',
    flow: '1~10차시는 걷기·손뼉·발 구르기 같은 기본 움직임을 박과 센 박에 맞추는 데서 시작해, 빠르기 바꾸기·세마치장단·메아리 동작으로 넓히고, 어긋난 박을 스스로 찾아 고치며 모둠 발표로 마무리합니다. 11~19차시는 줄·천·훌라후프·리본 같은 도구가 만드는 모양과 안전 거리를 먼저 익히고, 도구와 몸짓을 8박 흐름으로 잇고 짝과 함께 표현한 뒤, 도구와 몸이 따로 논 곳을 찾아 다음 계획을 세웁니다. 20~28차시는 무용 영상·강강술래·자연 속 움직임을 보며 아름다움을 느낀 근거를 말하고, 마음에 든 동작을 내 방식으로 바꾸어 모둠 작품(처음·가운데·끝, 대형)을 만들어 감상하고 단원을 돌아봅니다. 교구는 계획·관찰·판단·기록을 맡고, 실제 움직임은 교사가 강당에서 관찰합니다.',
    refs: {},
    lessons: [
      // ───────────────────────── 1 ─────────────────────────
      L(1, {
        title: '박에 맞춰 걷고 멈추며 표현 약속 세우기',
        objective: '네 박에 맞추어 걷다가 정한 박에서 멈추고, 걸음과 멈춤을 리듬 블록으로 나타낼 수 있다.',
        illustration: art('children walking in a big circle in a school gym while a teacher taps a small hand drum, with musical beat dots floating above their steps', [
          { motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'cloud', x: 96, y: 48 }, { motif: 'hills', y: 208 },
          { motif: 'house', x: 90, y: 214, s: 0.9 }, { motif: 'tree', x: 400, y: 214 },
          { motif: 'text', x: 240, y: 128, text: '하나, 둘, 셋, 멈춤!', size: 24 },
        ]),
        safety: [SPACE, FLOOR, LOOK],
        stages: stages(
          {
            teacher: '작은북(없으면 손뼉)으로 "하나, 둘, 셋, 넷"을 고르게 치며 묻는다. "우리 심장도 이렇게 고르게 뛰어요. 걸음에도 박이 있을까요?" 학생 대답을 받은 뒤 넷째 박에 멈추는 걷기를 한 번 해 본다. "박자는 노래에만 있는 거예요?"라고 물어, 걸음·손뼉·발 구르기처럼 움직임에도 박이 있다는 것을 짚는다. 단원에서 리듬·도구·감상 세 가지를 배운다고 알려 준다.',
            student: '북소리에 맞추어 걷다가 넷째 박에 멈춰 봐요. 우리 걸음에도 박이 있을까요?',
          },
          [
            {
              id: 'a1', title: '활동 1. 표현 활동 공간 점검하고 몸 풀기', minutes: 10, tool: 'timer',
              task: '강당을 둘러보며 안전 점검 목록을 표시하고, 몸 풀기 차례를 세워요. 그다음 북소리에 맞추어 걷고 넷째 박에 멈추는 연습을 세 번 해요.',
              teacher: '"눈으로 직접 본 것만 눌러요." 점검을 마치면 몸 풀기를 함께 한다. 걷기 연습에서 넷째 박이 지난 뒤에야 멈추는 학생이 많다 — "셋째 박에서 멈출 준비를 해요"라고 말해 주고, 기록은 남과 견주지 않는다.',
              levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
              items: [
                { prompt: '표현 활동을 하기 전에 강당을 둘러보고 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['내 둘레에 두 팔을 벌릴 공간이 있어요', '바닥에 물기나 떨어진 물건이 없어요', '실내화 뒤축을 꺾어 신지 않았어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '몸을 데우는 준비 운동 카드를 몸 한 곳만 쓰는 작은 움직임에서 온몸을 크게 쓰는 움직임 차례로 놓아요.', toolOptions: { cards: ['박에 맞춰 걷기', '목·어깨 돌리기', '팔다리 크게 흔들며 성큼 걷기', '제자리 걷기'] }, target: { order: ['목·어깨 돌리기', '제자리 걷기', '박에 맞춰 걷기', '팔다리 크게 흔들며 성큼 걷기'] }, levels: { easy: { state: { order: ['목·어깨 돌리기', '박에 맞춰 걷기', '팔다리 크게 흔들며 성큼 걷기', '제자리 걷기'] } } }, difficulty: 0.2,
                  hints: ['몸 한 곳만 움직이는 것부터, 온몸으로 자리를 옮기는 것까지 차례로 커져요. 정리 운동(숨 고르기)은 활동을 마친 뒤에 따로 해요.', '제자리에서 하는 것과 자리를 옮기는 것 가운데 무엇이 먼저일지, 걸을 때 팔을 얼마나 크게 쓰는지 견주어 보세요.'] },
                { prompt: '여덟 박 걷고 멈추기를 세 번 해 보고, 넷째·여덟째 박에 딱 멈춘 횟수를 적어요.', toolOptions: { fields: ['1회', '2회', '3회'], unit: '번' }, target: { records: true }, levels: { challenge: { toolOptions: { fields: ['1회', '2회', '3회', { label: '3회가 1회보다 늘어난 횟수', unit: '번' }] } } }, difficulty: 0.15 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 걸음과 멈춤을 리듬 블록으로 나타내기', minutes: 16, tool: 'keyboard',
              task: '한 걸음은 4분음표(한 박), 멈춤은 4분쉼표(한 박), 길게 미끄러지기는 2분음표(두 박)예요. 리듬을 듣고 블록으로 놓은 뒤 그대로 걸어 봐요.',
              teacher: '"쉼표도 박을 차지할까요?" 멈춤 칸을 건너뛰고 다음 걸음을 바로 내딛는 학생에게 "멈춘 동안에도 마음속으로 박을 세요"라고 짚는다. 블록을 놓은 모둠부터 강당 가장자리를 따라 실제로 걸어 본다.',
              levels: {
                easy: Object.assign({ blocks: ['q', 'h', 'qr'], showBeats: true }, R1),
                base: Object.assign({ blocks: ['q', 'h', 'qr'] }, R1),
                challenge: Object.assign({ blocks: ['q', 'e', 'h', 'qr', 'er'] }, R1),
              },
              items: [
                { prompt: '‘걷기 세 번, 멈춤 한 번’을 두 마디 되풀이한 리듬을 듣고 블록으로 놓아요.', toolOptions: { pattern: ['q', 'q', 'q', 'qr', 'q', 'q', 'q', 'qr'] }, target: { rhythm: ['q', 'q', 'q', 'qr', 'q', 'q', 'q', 'qr'] }, difficulty: 0.1 },
                { prompt: '길게 미끄러지기(두 박)가 들어간 걸음 리듬을 듣고 블록으로 놓아요.', toolOptions: { pattern: ['h', 'q', 'q', 'q', 'q', 'h'] }, target: { rhythm: ['h', 'q', 'q', 'q', 'q', 'h'] }, difficulty: 0.2 },
                { prompt: '두 마디가 모두 4박이 되도록 나만의 걷기·멈춤 리듬을 지어요. 멈춤(쉼표)을 꼭 넣어요.', target: { beats: true, rests: 1 }, difficulty: 0.25,
                  predict: { q: '멈춤도 한 박을 차지할까요?', options: ['네, 차지해요', '아니요, 안 세요'], answer: 0 },
                  conclude: '멈춤(쉼)도 한 박을 차지해요. 그래서 멈춘 동안에도 박을 세야 다음 걸음이 맞아요.' },
              ],
            },
          ],
          {
            teacher: '"오늘 걸음에 박이 있었나요? 멈춤도 박을 차지했나요?" 출구 1번을 틀린 학생은 쉼표 자리를 건너뛰었는지 살핀다. 정리 운동으로 천천히 걸으며 숨을 고른다.',
            exitTicket: [
              { type: 'tool', tool: 'keyboard', options: Object.assign({ blocks: ['q', 'h', 'qr'], pattern: ['q', 'qr', 'q', 'qr', 'h', 'h'] }, R1), prompt: '걷기·멈춤을 번갈아 하다가 길게 두 번 미끄러지는 리듬을 듣고 블록으로 놓아요.', target: { rhythm: ['q', 'qr', 'q', 'qr', 'h', 'h'] }, difficulty: 0.2 },
              { type: 'choice', prompt: '박에 맞춰 걷다가 넷째 박에 딱 멈추려면 언제 멈출 준비를 하나요?', options: ['셋째 박에서', '넷째 박이 지난 뒤에', '아무 때나'], answer: 0, difficulty: 0.2, explain: '셋째 박에서 준비해야 넷째 박에 맞추어 설 수 있어요.' },
              { type: 'mood', prompt: '박에 맞춰 걸어 본 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '걸음에도 박이 있어요',
          items: [
            { type: 'figure', prompt: '리듬 블록을 보고, 걷는 칸에는 ○, 멈추는 칸에는 × 를 아래에 쓰세요.', tool: 'keyboard', options: R1, figures: [{ state: { rhythm: ['q', 'q', 'q', 'qr', 'q', 'qr', 'q', 'qr'] }, caption: '첫째 마디 _ _ _ _ / 둘째 마디 _ _ _ _' }], answer: '○○○× / ○×○×' },
            { type: 'table', prompt: '여덟 박 걷고 멈추기에서 박에 맞게 멈춘 횟수를 쓰세요.', columns: ['횟수', '1회', '2회', '3회'], cells: [['맞게 멈춘 횟수', '', '', '']] },
            { type: 'choice', prompt: '멈춤(쉼표)에 대한 말로 알맞은 것에 ○ 하세요.', options: ['멈춤은 박을 세지 않아요', '멈춤도 한 박을 차지해요', '멈춤은 노래에만 있어요'], answer: '멈춤도 한 박을 차지해요' },
            { type: 'check', prompt: '오늘 지킨 안전 약속에 ✓ 하세요.', options: ['두 팔 간격을 지켰어요', '가는 쪽을 먼저 보았어요', '멈춤 신호에 바로 섰어요'] },
            { type: 'draw', prompt: '내가 지은 걷기·멈춤 리듬을 ○(걷기)와 ×(멈춤) 여덟 개로 그리세요.' },
          ],
          easy: {
            note: '한 걸음 = 한 박, 멈춤도 한 박이에요. 손가락으로 짚으며 "하나, 둘, 셋, 넷" 세어요.',
            items: [
              { type: 'choice', prompt: '"걷기, 걷기, 걷기, 멈춤"은 모두 몇 박인가요?', options: ['3박', '4박', '5박'], answer: '4박' },
              { type: 'draw', prompt: '걷기 세 번, 멈춤 한 번을 ○ 세 개와 × 한 개로 그리세요.' },
              { type: 'short', prompt: '오늘 지킨 안전 약속 하나를 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '리듬 블록이 2분음표·4분음표·쉼표 세 가지뿐이고, 마디마다 지금 몇 박인지 보여요. 카드 한 장이나 첫 차례가 미리 놓인 문항이 있어요.',
          base: '박 수 안내 없이 스스로 세어 두 마디를 채워요.',
          challenge: '8분음표·8분쉼표까지 써서 빠른 걸음과 짧은 멈춤을 섞고, 기록판의 시간 재기로 직접 재요. 기록판에 차이·합계를 셈해 적는 칸이 더해져요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 박자는 노래에만 있다고 여긴다 → 심장·걸음·손뼉으로 박을 느끼게 한다. ② 쉼표 자리를 건너뛰고 걸음을 서두른다 → 멈춘 동안 입으로 "쉬고"라고 말하게 한다. ③ 넷째 박이 지나서 멈춘다 → 셋째 박에 무릎을 살짝 굽혀 준비한다. 실제 걸음은 교구가 판정하지 않으므로 교사가 박과 멈춤을 관찰한다.',
      }),
      // ───────────────────────── 2 ─────────────────────────
      L(2, {
        title: '몸 악기로 센 박 짚기 — 손뼉과 무릎 치기',
        objective: '두 박·세 박·네 박 묶음에서 센 박에는 손뼉, 여린 박에는 무릎 치기를 하며 센 박의 자리를 짚을 수 있다.',
        illustration: art('children sitting in a circle clapping hands and patting their knees, with big and small paper circles showing strong and weak beats', [
          { motif: 'sun', x: 410, y: 56, s: 0.7 }, { motif: 'cloud', x: 110, y: 52 }, { motif: 'hills', y: 210 },
          { motif: 'star', x: 150, y: 120, s: 1.1 }, { motif: 'star', x: 210, y: 140, s: 0.6 }, { motif: 'star', x: 260, y: 140, s: 0.6 },
          { motif: 'text', x: 240, y: 200, text: '짝 탁 탁, 짝 탁 탁', size: 22 },
        ]),
        safety: [SPACE, '손뼉과 무릎 치기는 소리가 날 만큼만 치고, 아플 만큼 세게 치지 않아요.', STOP],
        stages: stages(
          {
            teacher: '"짝(손뼉) 탁(무릎) 탁, 짝 탁 탁" 하고 교사가 먼저 쳐 보인다. "어느 소리가 더 크게 들렸나요?" 첫 박이 힘 있게 들리는 것을 찾게 하고, 이것을 센 박이라고 부른다. 지난 시간 걷기에서 멈춘 박을 떠올리게 한 뒤, 오늘은 박 가운데 힘을 주는 자리를 찾는다고 알려 준다.',
            student: '선생님의 손뼉과 무릎 소리를 듣고, 어느 박이 더 힘 있게 들리는지 찾아봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 몸 악기 줄의 빈칸 채우기', minutes: 13, tool: 'pattern',
              task: '짝 = 손뼉, 탁 = 무릎 치기, 쿵 = 발 구르기예요. 몇 박 묶음인지 찾아 빈칸을 채운 뒤, 줄 전체를 소리 내어 몸으로 쳐요.',
              teacher: '"한 묶음이 몇 칸에서 다시 시작하나요?" 묶음을 찾지 못하는 학생에게 "손뼉이 다시 나오는 곳에 손가락을 대 보세요"라고 말한다. 다 채우면 모둠이 함께 몸으로 쳐서 센 박에 힘이 들어가는지 들어 본다.',
              levels: { easy: {}, base: { perRow: 8 }, challenge: { perRow: 12 } },
              items: [
                { prompt: '두 박 묶음(센 박, 여린 박)이 되풀이돼요. 빈칸 두 곳을 채워요.', toolOptions: { seq: ['짝', '탁', '짝', '탁', '짝', null, '짝', null] }, target: { fill: ['탁', '탁'] }, difficulty: 0.05, levels: { easy: { toolOptions: { perRow: 2 } } } },
                { prompt: '세 박 묶음이 되풀이돼요. 빈칸을 채워요.', toolOptions: { seq: ['짝', '탁', '탁', '짝', '탁', '탁', null, '탁', null] }, target: { fill: ['짝', '탁'] }, difficulty: 0.15, levels: { easy: { toolOptions: { perRow: 3 } } } },
                { prompt: '네 박 묶음에서 센 박이 빠졌어요. 빈칸을 채우고 몸으로 쳐 봐요.', toolOptions: { seq: ['짝', '탁', '탁', '탁', '짝', '탁', '탁', '탁', null, '탁', '탁', '탁'] }, target: { fill: ['짝'] }, difficulty: 0.2, levels: { easy: { toolOptions: { perRow: 4 } } },
                  predict: { q: '셋째 묶음의 첫 칸은 무엇일까요?', options: ['손뼉(짝)', '무릎(탁)'], answer: 0 },
                  conclude: '묶음의 첫 박이 센 박이에요. 센 박에 손뼉을 쳐야 묶음이 귀로 들려요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 박이 어긋난 조각 찾기', minutes: 13, tool: 'pattern',
              task: '친구가 적은 몸 악기 줄에 규칙과 다른 조각이 하나 있어요. 직접 쳐 보며 어긋난 조각을 찾아 눌러요.',
              teacher: '"눈으로만 찾지 말고 손으로 쳐 보세요. 어디서 걸리나요?" 쳐 보면 어긋난 곳에서 박이 꼬이는 것을 느끼게 한다. 찾은 뒤에는 바르게 고쳐 다시 쳐 보게 한다.',
              levels: { easy: { perRow: 6 }, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '세 박 묶음 줄이에요. 규칙과 다른 조각 하나를 찾아 눌러요.', toolOptions: { mode: 'odd', seq: ['짝', '탁', '탁', '짝', '짝', '탁', '짝', '탁', '탁'] }, target: { odd: 4 }, difficulty: 0.15 },
                { prompt: '네 박 묶음 줄이에요. 센 박이 빠진 조각을 찾아 눌러요.', toolOptions: { mode: 'odd', seq: ['짝', '탁', '탁', '탁', '짝', '탁', '탁', '탁', '탁', '탁', '탁', '탁'] }, target: { odd: 8 }, difficulty: 0.25 },
                { prompt: '발 구르기(쿵)가 센 박인 두 박 줄이에요. 어긋난 조각을 찾아 눌러요.', toolOptions: { mode: 'odd', seq: ['쿵', '짝', '쿵', '짝', '쿵', '쿵', '쿵', '짝'] }, target: { odd: 5 }, difficulty: 0.2,
                  conclude: '센 박 자리에 다른 동작이 오거나 여린 박에 센 동작이 오면 몸으로 칠 때 박이 꼬여요.' },
              ],
            },
          ],
          {
            teacher: '"세 박 묶음에서 센 박은 몇째 박이었나요?" 출구 1번을 틀린 학생은 묶음 길이를 다시 세게 한다. 마지막으로 모두 함께 "쿵 짝 짝" 세 박을 여덟 번 치며 끝낸다.',
            exitTicket: [
              { type: 'tool', tool: 'pattern', options: { seq: ['쿵', '짝', '짝', '쿵', '짝', '짝', null, '짝', '짝'] }, prompt: '발 구르기와 손뼉으로 된 세 박 줄이에요. 빈칸에 알맞은 몸 악기를 넣어요.', target: { fill: ['쿵'] }, difficulty: 0.15 },
              { type: 'choice', prompt: '"센 박, 여린 박, 여린 박"이 되풀이될 때 센 박은 몇째 박인가요?', options: ['첫째 박', '둘째 박', '셋째 박'], answer: 0, difficulty: 0.15, explain: '묶음의 첫째 박이 센 박이에요.' },
              { type: 'mood', prompt: '몸 악기로 박을 쳐 본 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '센 박을 찾아요',
          items: [
            { type: 'figure', prompt: '몸 악기 줄의 빈칸에 알맞은 글자(짝·탁)를 쓰세요.', tool: 'pattern', wide: true, options: { seq: ['짝', '탁', '탁', '짝', null, '탁', '짝', '탁', null] }, figures: [{ state: {}, caption: '빈칸: ( ), ( )' }], answer: '탁, 탁' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '묶음의 ___째 박이 센 박이고, 나머지는 ___ 박이에요.', answer: '첫, 여린' },
            { type: 'choice', prompt: '두 박 묶음 "쿵 짝 쿵 짝 쿵 쿵"에서 어긋난 것은 몇째 조각인가요?', options: ['둘째', '넷째', '여섯째'], answer: '여섯째' },
            { type: 'table', prompt: '내가 만든 네 박 몸 악기 줄을 쓰세요(짝·탁·쿵 가운데 골라 쓰기).', columns: ['1박(센 박)', '2박', '3박', '4박'], rows: 2 },
            { type: 'short', prompt: '센 박에 손뼉을 치면 어떤 점이 좋은지 한 줄로 쓰세요.' },
          ],
          easy: {
            note: '손뼉(짝)이 다시 나오는 곳에서 묶음이 새로 시작해요.',
            items: [
              { type: 'choice', prompt: '"짝 탁 짝 탁 짝 □"의 □에 들어갈 것은?', options: ['짝', '탁'], answer: '탁' },
              { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '"짝 탁 탁"에서 센 박은 ___예요.', answer: '짝' },
              { type: 'draw', prompt: '센 박은 큰 ○, 여린 박은 작은 ○로 세 박 묶음을 두 번 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '한 줄에 한 묶음씩 놓여 묶음이 눈에 잘 보이고, 어긋난 조각 찾기도 짧게 끊어져 보여요.',
          base: '여덟 칸씩 늘어서 묶음 길이를 스스로 찾아요.',
          challenge: '한 줄이 길어 묶음을 셈으로 찾고, 틀린 확인에서도 어느 칸이 틀렸는지 알려 주지 않아요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 박자는 노래에만 있다고 여겨 손뼉을 아무 데나 친다 → 걸음과 같이 고르게 친다. ② 묶음 길이를 잘못 세 센 박 자리를 놓친다 → 손뼉이 다시 나오는 칸에 표시한다. ③ 여린 박까지 세게 친다 → 무릎은 "살짝", 손뼉은 "힘 있게"로 소리 크기를 나눈다.',
      }),
      // ───────────────────────── 3 ─────────────────────────
      L(3, {
        title: '빠르기를 바꾸어 느리게·보통·빠르게 걷기',
        objective: '같은 박에서 걸음을 느리게(두 박에 한 걸음)·보통·빠르게(한 박에 두 걸음) 바꾸어 걷고, 빠르기에 따라 느낌이 어떻게 다른지 말할 수 있다.',
        illustration: art('a turtle, a child and a rabbit walking side by side on paper stepping stones with slow and fast beat marks', [
          { motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'hills', y: 208 }, { motif: 'cloud', x: 120, y: 50 },
          { motif: 'flower', x: 70, y: 214 }, { motif: 'tree', x: 420, y: 212 },
          { motif: 'text', x: 240, y: 130, text: '느리게 · 보통 · 빠르게', size: 22 },
        ]),
        safety: [SPACE, LOOK, '빨라질수록 보폭을 줄이고, 앞 친구를 앞지르지 않아요.', STOP],
        stages: stages(
          {
            teacher: '같은 북 박을 그대로 두고 교사가 세 가지로 걸어 보인다: 두 박에 한 걸음, 한 박에 한 걸음, 한 박에 두 걸음. "박은 똑같은데 걸음이 어떻게 달라졌나요?" 같은 노래를 빠르게 틀면 박 사이가 짧아진다는 것도 손뼉으로 들려준다. "빠르면 아무렇게나 뛰어도 될까요?"를 물어 둔다.',
            student: '선생님이 걷는 세 가지 걸음을 보고, 박은 같은데 무엇이 달라졌는지 찾아봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 빠르기에 어울리는 움직임 나누기', minutes: 11, tool: 'mindmap',
              task: '움직임 카드를 빠르기에 맞게 나누어요. 나눈 뒤 카드마다 한 번씩 직접 해 봐요.',
              teacher: '"느린 움직임은 서툰 걸까요?" 느린 움직임에도 힘과 조절이 필요하다는 것을 짚는다. 빠른 움직임 카드는 제자리에서 먼저 해 보게 한다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '움직임 카드를 느린 박과 빠른 박 가지로 나누어요.', toolOptions: { topic: '빠르기와 움직임', slots: ['느린 박', '빠른 박'], cards: ['거북처럼 천천히 걷기', '발끝으로 종종 달리기', '팔을 크게 천천히 돌리기', '제자리에서 빠르게 발 구르기'] }, target: { sort: { '느린 박': ['거북처럼 천천히 걷기', '팔을 크게 천천히 돌리기'], '빠른 박': ['발끝으로 종종 달리기', '제자리에서 빠르게 발 구르기'] } }, levels: { easy: { state: { at: { '거북처럼 천천히 걷기': 0 } } }, challenge: { prompt: '움직임 카드를 느린 박과 빠른 박 가지로 나누어요. 박에 맞지 않는 카드는 어느 가지에도 넣지 않아요.', toolOptions: { cards: ['거북처럼 천천히 걷기', '발끝으로 종종 달리기', '팔을 크게 천천히 돌리기', '제자리에서 빠르게 발 구르기', '박을 세지 않고 마구 뛰기'] } } }, difficulty: 0.1 },
                { prompt: '상황에 어울리는 걸음 빠르기를 이어요.', toolOptions: { mode: 'match', topic: '어떤 빠르기일까?', slots: [{ id: 'slow', label: '느리게' }, { id: 'mid', label: '보통 빠르기' }, { id: 'fast', label: '빠르게' }], cards: ['눈 덮인 길을 조심조심', '친구와 이야기하며 등교', '소나기를 피해 처마 밑으로'] }, target: { match: { slow: '눈 덮인 길을 조심조심', mid: '친구와 이야기하며 등교', fast: '소나기를 피해 처마 밑으로' } }, levels: { easy: { state: { at: { '눈 덮인 길을 조심조심': 0 } } } }, difficulty: 0.15 },
                { prompt: '빠르기가 바뀌어도 꼭 지킬 점만 골라요.', toolOptions: { mode: 'pick', topic: '빨라져도 지켜요', cards: ['박에 맞춰 발을 디뎌요', '친구와 사이를 두어요', '빨라지면 아무렇게나 뛰어요', '멈춤 신호에 바로 서요'] }, target: { pick: ['박에 맞춰 발을 디뎌요', '친구와 사이를 두어요', '멈춤 신호에 바로 서요'] }, levels: { challenge: { prompt: '빠르기가 바뀌어도 꼭 지킬 점만 골라요. 그럴듯하지만 틀린 카드가 섞여 있어요.', toolOptions: { cards: ['박에 맞춰 발을 디뎌요', '친구와 사이를 두어요', '빨라지면 아무렇게나 뛰어요', '멈춤 신호에 바로 서요', '빠를수록 걸음을 크게 해요'] } } }, difficulty: 0.2,
                  conclude: '빨라져도 박에 맞추고 사이를 지켜야 리듬이 보이고 안전해요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 빠르기가 바뀌는 걸음 리듬 짓기', minutes: 15, tool: 'keyboard',
              task: '느린 걸음 = 2분음표(두 박에 한 걸음), 보통 걸음 = 4분음표, 빠른 걸음 = 8분음표 두 개(한 박에 두 걸음)예요. 블록으로 놓은 뒤 그대로 걸어요.',
              teacher: '"8분음표 두 개는 한 박이에요. 두 걸음인데 한 박!" 빠른 걸음에서 보폭이 커져 앞 친구와 부딪히는 학생에게 "빠를수록 걸음은 작게"라고 짚는다. 같은 두 마디를 걷는데 걸음 수가 어떻게 달라졌는지 세어 보게 한다.',
              levels: {
                easy: Object.assign({ blocks: ['q', 'e', 'h'], showBeats: true }, R1),
                base: Object.assign({ blocks: ['q', 'e', 'h', 'qr'] }, R1),
                challenge: Object.assign({ blocks: ['q', 'e', 'h', 'qr', 'dh', 'er'] }, R1),
              },
              items: [
                { prompt: '두 마디를 모두 느린 걸음(두 박에 한 걸음)으로 채워요.', target: { rhythm: ['h', 'h', 'h', 'h'] }, difficulty: 0.1 },
                { prompt: '첫 마디는 보통 걸음, 둘째 마디는 빠른 걸음(한 박에 두 걸음)으로 놓아요.', target: { rhythm: ['q', 'q', 'q', 'q', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'] }, difficulty: 0.2,
                  predict: { q: '둘째 마디의 걸음 수는 첫 마디보다 어떨까요?', options: ['많아요', '적어요', '같아요'], answer: 0 },
                  conclude: '박 수는 같아도 빠른 걸음은 한 박에 두 번 디뎌서 걸음 수가 두 배가 돼요.' },
                { prompt: '점점 빨라지는 두 마디를 지어요. 느린 걸음과 빠른 걸음을 모두 넣고 두 마디 모두 4박을 맞춰요.', target: { beats: true, use: ['h', 'e'] }, difficulty: 0.3 },
              ],
            },
          ],
          {
            teacher: '"같은 노래를 빠르게 틀면 같은 두 마디 동안 걸음 수는 어떻게 되나요?" 느린 걸음이 지루하거나 서툰 것이 아니라 다른 느낌이라는 것을 한 학생씩 한 낱말로 말하게 한다. 출구 1번에서 8분음표를 한 개만 놓은 학생은 "두 개가 한 박"을 다시 짚는다.',
            exitTicket: [
              { type: 'tool', tool: 'keyboard', options: Object.assign({ blocks: ['q', 'e', 'h'] }, R1), prompt: '첫 마디는 빠른 걸음만, 둘째 마디는 느린 걸음만으로 놓아요.', target: { rhythm: ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'h', 'h'] }, difficulty: 0.25 },
              { type: 'choice', prompt: '같은 노래를 더 빠르게 틀면, 같은 두 마디 동안 걸음 수는 어떻게 될까요?', options: ['많아져요', '적어져요', '그대로예요'], answer: 0, difficulty: 0.25, explain: '박 사이가 짧아져 같은 동안 더 많이 디뎌요.' },
              { type: 'short', prompt: '느린 걸음과 빠른 걸음의 느낌이 어떻게 달랐는지 한 줄로 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '빠르기를 바꾸어 걸어요',
          items: [
            { type: 'figure', prompt: '리듬 블록을 보고 마디마다 걸음 수를 쓰세요.', tool: 'keyboard', options: R1, figures: [{ state: { rhythm: ['h', 'h', 'e', 'e', 'e', 'e', 'q', 'q'] }, caption: '첫째 마디 ___걸음, 둘째 마디 ___걸음' }], answer: '2걸음, 6걸음' },
            { type: 'table', prompt: '세 가지 걸음을 해 보고 느낌을 쓰세요.', columns: ['걸음', '한 박에 몇 걸음', '느낌'], cells: [['느린 걸음', '', ''], ['보통 걸음', '', ''], ['빠른 걸음', '', '']] },
            { type: 'choice', prompt: '빠른 걸음을 할 때 알맞은 것에 ○ 하세요.', options: ['보폭을 크게 해요', '보폭을 작게 하고 박에 맞춰요', '박은 신경 쓰지 않아요'], answer: '보폭을 작게 하고 박에 맞춰요' },
            { type: 'short', prompt: '"느린 움직임은 서툰 것이다"라는 말에 대한 내 생각을 쓰세요.' },
          ],
          easy: {
            note: '2분음표는 두 박에 한 걸음, 8분음표 두 개는 한 박에 두 걸음이에요.',
            items: [
              { type: 'choice', prompt: '두 박에 한 걸음 걷는 것은?', options: ['느린 걸음', '빠른 걸음'], answer: '느린 걸음' },
              { type: 'choice', prompt: '소나기를 피해 갈 때 어울리는 걸음은?', options: ['느린 걸음', '빠른 걸음'], answer: '빠른 걸음' },
              { type: 'draw', prompt: '느린 걸음과 빠른 걸음을 발자국으로 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 맞는 가지에 놓으면 바로 표시되고, 리듬 블록이 세 가지뿐이며 마디마다 박 수가 보여요. 카드 한 장이나 첫 차례가 미리 놓인 문항이 있어요.',
          base: '쉼표까지 네 가지 블록으로 스스로 박을 맞춰요.',
          challenge: '점2분음표·8분쉼표까지 섞어 빠르기가 여러 번 바뀌는 리듬을 지어요. 그럴듯한 함정 카드가 더해진 문항이 있어요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 느린 움직임을 서툰 표현으로 여긴다 → 느리게 하려면 오히려 몸을 더 조절해야 함을 해 보게 한다. ② 빠른 음악에서는 아무렇게나 움직여도 된다고 여긴다 → 빨라져도 박에 디뎌야 한다. ③ 8분음표 하나를 한 박으로 센다 → 두 개가 한 박.',
      }),
      // ───────────────────────── 4 ─────────────────────────
      L(4, {
        title: '이동·제자리 움직임 섞어 부딪히지 않고 움직이기',
        objective: '움직임을 자리를 옮기는 것과 제자리에서 하는 것으로 나누고, 박에 맞춰 이동할 때 부딪히지 않는 방법을 골라 실천할 수 있다.',
        illustration: art('children moving across a gym floor in different directions, some stepping and some stretching in place, with paper arrows showing safe paths', [
          { motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'hills', y: 210 }, { motif: 'cloud', x: 110, y: 48 },
          { motif: 'bird', x: 330, y: 80 }, { motif: 'tree', x: 70, y: 214 },
          { motif: 'text', x: 240, y: 132, text: '옮기고, 멈추고, 뻗고', size: 22 },
        ]),
        safety: [SPACE, LOOK, '빈 곳을 찾아 움직이고, 한쪽 벽으로 몰리지 않아요.', FLOOR],
        stages: stages(
          {
            teacher: '"걷기·달리기처럼 자리를 옮기는 움직임도 있고, 팔 뻗기처럼 제자리에서 하는 움직임도 있어요. 또 무엇이 있을까요?" 대답을 칠판 두 칸에 나누어 적는다. 이어 "박이 빨라졌을 때 왜 친구와 부딪힐까요?"를 묻고 오늘은 박에 맞춰 안전하게 옮겨 다니는 법을 배운다고 알린다.',
            student: '자리를 옮기는 움직임과 제자리에서 하는 움직임을 하나씩 떠올려 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 움직임 나누고 8박 동작 짜기', minutes: 13, tool: 'mindmap',
              task: '움직임 카드를 자리를 옮기는 것과 제자리 움직임으로 나누어요. 그다음 두 가지를 섞어 8박 동작을 짜고 해 봐요.',
              teacher: '"두 발 모아 뛰기는 어디일까요? 앞으로 가면 이동, 그 자리면 제자리예요." 같은 움직임도 방향에 따라 달라진다는 것을 짚는다. 8박 동작은 짝과 먼저 해 본 뒤 모둠에 보인다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '움직임 카드를 자리를 옮기는 움직임과 제자리 움직임으로 나누어요.', toolOptions: { topic: '기본 움직임', slots: ['자리를 옮겨요', '제자리에서 해요'], cards: ['옆으로 미끄러지기', '앞으로 깡충 뛰어가기', '몸 비틀기', '무릎 굽혔다 펴기', '뒤로 걷기', '팔 흔들기'] }, target: { sort: { '자리를 옮겨요': ['옆으로 미끄러지기', '앞으로 깡충 뛰어가기', '뒤로 걷기'], '제자리에서 해요': ['몸 비틀기', '무릎 굽혔다 펴기', '팔 흔들기'] } }, levels: { easy: { state: { at: { '옆으로 미끄러지기': 0 } } }, challenge: { prompt: '움직임 카드를 자리를 옮기는 움직임과 제자리 움직임으로 나누어요. 강당에서 하면 위험한 카드는 어느 가지에도 넣지 않아요.', toolOptions: { cards: ['옆으로 미끄러지기', '앞으로 깡충 뛰어가기', '몸 비틀기', '무릎 굽혔다 펴기', '뒤로 걷기', '팔 흔들기', '눈 감고 뒤로 달리기'] } } }, difficulty: 0.15 },
                { prompt: '앞으로 나가며 시작하고, 앞으로 간 자리에서 팔을 뻗고, 무릎 굽혀 멈추며 끝나도록 8박 동작 카드를 놓아요.', toolOptions: { mode: 'order', cards: ['뒤로 두 걸음(2박)', '무릎 굽혀 멈추기(2박)', '앞으로 두 걸음(2박)', '팔 위로 뻗기(2박)'] }, target: { order: ['앞으로 두 걸음(2박)', '팔 위로 뻗기(2박)', '뒤로 두 걸음(2박)', '무릎 굽혀 멈추기(2박)'] }, levels: { easy: { state: { at: { '앞으로 두 걸음(2박)': 0 } } }, challenge: { prompt: '앞으로 나가며 시작하고, 앞으로 간 자리에서 팔을 뻗고, 무릎 굽혀 멈추며 끝나는 8박을 놓아요. 8박에 넘치는 카드는 남겨요.', toolOptions: { cards: ['뒤로 두 걸음(2박)', '무릎 굽혀 멈추기(2박)', '앞으로 두 걸음(2박)', '팔 위로 뻗기(2박)', '옆으로 크게 돌기(4박)'], slots: 4 } } }, difficulty: 0.3 },
                { prompt: '좁은 강당에서 여럿이 함께 해도 부딪히지 않을 움직임만 골라요.', toolOptions: { mode: 'pick', topic: '좁은 곳에서', cards: ['제자리에서 팔 크게 돌리기', '옆 친구 쪽으로 미끄러지기', '앞을 보며 작은 걸음', '눈 감고 빙글빙글 돌기'] }, target: { pick: ['제자리에서 팔 크게 돌리기', '앞을 보며 작은 걸음'] }, levels: { challenge: { prompt: '좁은 강당에서 여럿이 함께 해도 부딪히지 않을 움직임만 골라요. 그럴듯하지만 부딪히기 쉬운 카드가 섞여 있어요.', toolOptions: { cards: ['제자리에서 팔 크게 돌리기', '옆 친구 쪽으로 미끄러지기', '앞을 보며 작은 걸음', '눈 감고 빙글빙글 돌기', '두 팔 벌리고 옆으로 빨리 달리기'] } } }, difficulty: 0.2 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 이동할 때 이럴 땐 어떻게?', minutes: 13, tool: 'emotion',
              task: '박에 맞춰 강당을 옮겨 다니다 생길 수 있는 상황이에요. 어떻게 할지 고르고, 고른 대로 짝과 몸으로 해 봐요.',
              teacher: '"박을 지키는 것과 친구를 지키는 것 가운데 무엇이 먼저일까요?" 박을 놓치더라도 멈추는 것이 맞다는 것을 짚는다. 고른 뒤에는 실제로 그 상황을 짝과 천천히 재현해 본다.',
              levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '박에 맞춰 앞으로 걷는데 앞 친구가 갑자기 멈췄어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '박에 맞춰 앞으로 걷는데 앞 친구가 갑자기 멈췄어요.', choices: [{ id: 'push', text: '박을 지키려고 밀고 지나가요', result: '친구가 넘어질 뻔했어요.', mood: '놀람', why: '박보다 친구의 몸이 먼저예요.' }, { id: 'stay', text: '나도 멈추고 제자리 걸음으로 박을 이어요', result: '박도 지키고 부딪히지도 않았어요.', mood: '편안함' }, { id: 'jump', text: '옆으로 확 비켜 달려요', result: '옆 친구와 부딪혔어요.', mood: '걱정', why: '갑자기 방향을 바꾸면 옆 친구와 부딪혀요.' }] }, target: { choice: 'stay' }, levels: { easy: { toolOptions: { choices: [{ id: 'push', text: '박을 지키려고 밀고 지나가요', result: '친구가 넘어질 뻔했어요.', mood: '놀람', why: '박보다 친구의 몸이 먼저예요.' }, { id: 'stay', text: '나도 멈추고 제자리 걸음으로 박을 이어요', result: '박도 지키고 부딪히지도 않았어요.', mood: '편안함' }] } } }, difficulty: 0.1 },
                { prompt: '빠른 박으로 바뀌자 친구들이 한쪽 벽으로 몰려요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '빠른 박으로 바뀌자 친구들이 한쪽 벽으로 몰려요.', choices: [{ id: 'follow', text: '나도 같은 쪽으로 달려가요', result: '벽 앞이 더 붐볐어요.', mood: '걱정', why: '몰리는 쪽으로 가면 더 붐벼요.' }, { id: 'empty', text: '빈 곳을 보고 방향을 바꿔요', result: '넓은 곳에서 박에 맞춰 움직였어요.', mood: '편안함' }, { id: 'eyes', text: '눈을 감고 내 동작만 해요', result: '어디로 가는지 몰라 부딪혔어요.', mood: '놀람', why: '눈으로 둘레를 봐야 피할 수 있어요.' }] }, target: { choice: 'empty' }, difficulty: 0.15 },
                { prompt: '양말만 신은 친구가 미끄러지기 동작을 하려고 해요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '양말만 신은 친구가 옆으로 미끄러지기 동작을 하려고 해요.', choices: [{ id: 'more', text: '"더 멀리 미끄러져 봐"라고 해요', result: '친구가 넘어져 무릎을 다쳤어요.', mood: '걱정', why: '양말은 미끄러워 넘어지기 쉬워요.' }, { id: 'ignore', text: '모른 척 내 동작만 해요', result: '친구가 넘어질 뻔했어요.', mood: '놀람', why: '위험을 봤다면 알려 줘야 해요.' }, { id: 'shoes', text: '실내화를 신고 하자고 말해요', result: '친구가 실내화를 신고 안전하게 했어요.', mood: '고마움' }] }, target: { choice: 'shoes' }, difficulty: 0.15 },
              ],
            },
          ],
          {
            teacher: '"오늘 부딪힐 뻔한 순간이 있었나요? 그때 어떻게 했나요?" 한두 학생의 경험을 듣는다. 출구 2번을 틀린 학생에게는 "박보다 친구 몸이 먼저"를 다시 말해 준다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { topic: '움직임 나누기', slots: ['자리를 옮겨요', '제자리에서 해요'], cards: ['뒤로 깡충 뛰어가기', '팔 앞으로 뻗기', '옆으로 걷기', '고개 돌리기'] }, prompt: '새 움직임 카드를 두 가지로 나누어요.', target: { sort: { '자리를 옮겨요': ['뒤로 깡충 뛰어가기', '옆으로 걷기'], '제자리에서 해요': ['팔 앞으로 뻗기', '고개 돌리기'] } }, difficulty: 0.15 },
              { type: 'choice', prompt: '빠른 박에 맞춰 이동하다 앞이 막히면 어떻게 하나요?', options: ['박을 지키려고 밀고 간다', '제자리 걸음으로 박을 이으며 빈 곳을 찾는다', '뒤로 확 돈다'], answer: 1, difficulty: 0.15, explain: '박은 제자리 걸음으로 잇고, 빈 곳을 보며 움직여요.' },
              { type: 'mood', prompt: '오늘 친구와 부딪히지 않고 움직였나요? 내 마음을 골라요.' },
            ],
          },
        ),
        worksheet: {
          title: '옮기고, 멈추고, 안전하게',
          items: [
            { type: 'table', prompt: '움직임을 두 가지로 나누어 쓰세요.', columns: ['자리를 옮기는 움직임', '제자리 움직임'], rows: 3 },
            { type: 'table', prompt: '앞으로 나가며 시작하고, 앞으로 간 자리에서 팔을 뻗고, 무릎 굽혀 멈추며 끝나요. 하는 차례대로 1~4를 쓰세요.', columns: ['8박 동작', '차례 번호'], cells: [['뒤로 두 걸음(2박)', ''], ['무릎 굽혀 멈추기(2박)', ''], ['앞으로 두 걸음(2박)', ''], ['팔 위로 뻗기(2박)', '']], answer: '앞으로 두 걸음 1, 팔 위로 뻗기 2, 뒤로 두 걸음 3, 무릎 굽혀 멈추기 4' },
            { type: 'choice', prompt: '친구들이 한쪽으로 몰릴 때 알맞은 행동에 ○ 하세요.', options: ['같은 쪽으로 따라간다', '빈 곳을 보고 방향을 바꾼다', '눈을 감는다'], answer: '빈 곳을 보고 방향을 바꾼다' },
            { type: 'short', prompt: '박에 맞춰 이동할 때 내가 지킬 약속 한 가지를 쓰세요.' },
          ],
          easy: {
            note: '걷기·뛰어가기는 자리를 옮기고, 팔 뻗기·몸 비틀기는 제자리에서 해요.',
            items: [
              { type: 'choice', prompt: '제자리 움직임에 ○ 하세요.', options: ['앞으로 걷기', '팔 흔들기'], answer: '팔 흔들기' },
              { type: 'choice', prompt: '앞 친구가 멈추면?', options: ['밀고 간다', '나도 멈춘다'], answer: '나도 멈춘다' },
              { type: 'draw', prompt: '내가 좋아하는 제자리 움직임을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 맞는 가지에 놓으면 바로 표시되고, 틀린 가지는 까닭을 말해 주고 되돌아와요. 카드 한 장이나 첫 차례가 미리 놓인 문항이 있어요. 상황 판단 보기가 하나 적어요.',
          base: '모두 놓은 뒤 확인해 스스로 고쳐요.',
          challenge: '상황 판단에서 결과가 맞힌 뒤에만 보여, 결과를 먼저 짐작하고 골라요. 그럴듯한 함정 카드가 더해진 문항이 있어요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 박을 지키려고 친구를 밀고 간다 → 박은 제자리 걸음으로 이을 수 있다. ② 빠른 박에서 보폭이 커진다 → 작은 걸음. ③ 같은 움직임(뛰기)을 늘 이동으로만 여긴다 → 방향에 따라 제자리도 된다. 강당 네 구석에 원뿔을 두어 빈 곳 찾기 표지로 쓰면 좋다.',
      }),
      // ───────────────────────── 5 ─────────────────────────
      L(5, {
        title: '네 박 장단에 걷다가 센 박에 팔 크게 뻗기',
        objective: '네 박 장단에 맞추어 걷다가 센 박에서 팔을 크게 뻗는 8박 동작을 만들고, 박에 맞추어 끊김 없이 되풀이할 수 있다.',
        illustration: art('a line of children walking to a drum beat and stretching their arms high on the strong beat, like paper flowers opening in a row', [
          { motif: 'sun', x: 410, y: 54, s: 0.8 }, { motif: 'hills', y: 208 }, { motif: 'cloud', x: 100, y: 52 },
          { motif: 'flower', x: 150, y: 196 }, { motif: 'flower', x: 330, y: 196 },
          { motif: 'text', x: 240, y: 128, text: '뻗 걷 걷 걷', size: 26 },
        ]),
        safety: [SPACE, '팔을 크게 뻗기 전에 옆과 앞에 친구가 없는지 봐요.', LOOK, STOP],
        stages: stages(
          {
            teacher: '"지난 시간 센 박에 손뼉을 쳤지요. 오늘은 센 박에 팔을 크게 뻗어요." 교사가 "뻗, 걷, 걷, 걷"을 두 번 해 보인다. "빠른 음악에서는 아무렇게나 해도 리듬이 맞을까요?" 학생이 빠르게 따라 해 본 뒤 팔이 박보다 늦게 올라가는 것을 함께 찾아본다.',
            student: '선생님이 걷다가 팔을 뻗는 때를 잘 보고, 그때가 몇째 박인지 세어 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 센 박에 뻗는 8박 동작 줄 만들기', minutes: 14, tool: 'pattern',
              task: '뻗 = 팔 크게 뻗기, 걷 = 한 걸음, 짝 = 손뼉이에요. 동작 줄을 채우거나 만든 뒤, 그대로 몸으로 해 봐요.',
              teacher: '"네 박 묶음이 두 번 되풀이되나요? 첫 칸이 센 박이에요." 동작이 많을수록 좋다고 여겨 묶음마다 다른 동작을 넣는 학생에게 "되풀이되어야 보는 사람이 리듬을 느껴요"라고 짚는다.',
              levels: { easy: { perRow: 4 }, base: {}, challenge: {} },
              items: [
                { prompt: '센 박에 뻗는 네 박 동작이 세 번 되풀이돼요. 빈칸 세 곳을 채워요.', toolOptions: { seq: ['뻗', '걷', '걷', '걷', '뻗', '걷', null, null, '뻗', null, '걷', '걷'] }, target: { fill: ['걷', '걷', '걷'] }, difficulty: 0.1 },
                { prompt: '넷째 박마다 손뼉을 넣은 동작 줄이에요. 빈칸을 채워요.', toolOptions: { seq: ['뻗', '걷', '걷', '짝', '뻗', '걷', null, '짝', null, '걷', '걷', null] }, target: { fill: ['걷', '뻗', '짝'] }, difficulty: 0.2 },
                { prompt: '조각을 세 가지 이상 써서, 네 박 묶음이 두 번 되풀이되는 나만의 동작 줄을 만들어요(쿵 = 발 구르기).', toolOptions: { mode: 'make', palette: ['뻗', '걷', '짝', '쿵'], length: 8 }, target: { rule: 'repeat', period: 4, uses: 3 }, levels: { challenge: { prompt: '뻗·걷·짝·쿵 네 조각을 모두 써서, 네 박 묶음이 두 번 되풀이되는 나만의 동작 줄을 만들어요.', target: { rule: 'repeat', period: 4, uses: 4 } } }, difficulty: 0.3,
                  conclude: '네 박 묶음이 되풀이되면 보는 사람도 리듬을 함께 느껴요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 박에 맞춰 이어 하고 점검하기', minutes: 12, tool: 'timer',
              task: '모둠이 연습 계획을 맞추고 만든 8박 동작을 여러 번 해요. 끊기지 않고 끝까지 한 횟수를 적고, 해낸 것을 점검해요.',
              teacher: '"연습 30초, 쉬기 10초를 세 번 해요." 타이머는 시작을 눌러야 돈다. 팔이 박보다 늦는 학생에게 "앞 박의 끝에서 미리 팔을 들 준비"를 말해 준다. 기록은 내 1회와 3회를 견준다.',
              levels: { easy: { workStep: 10, restStep: 10, showTotal: true }, base: { showTotal: true }, challenge: { showTotal: false, stopwatch: true } },
              items: [
                { prompt: '8박 동작을 30초 연습하고 10초 쉬기를 3번 되풀이하도록 타이머를 맞춰요.', toolOptions: { plan: { work: 20, rest: 20, rounds: 2 } }, target: { plan: { work: 30, rest: 10, rounds: 3 } }, difficulty: 0.2 },
                { prompt: '8박 동작을 박에 맞춰 끊기지 않고 끝까지 해낸 횟수를 연습마다 적어요.', toolOptions: { fields: ['1회 연습', '2회 연습', '3회 연습'], unit: '번' }, target: { records: true }, difficulty: 0.15 },
                { prompt: '오늘 해낸 것을 점검 목록에 표시해요.', target: { selfCheck: ['센 박에서 팔을 크게 뻗었어요', '네 박마다 같은 동작을 되풀이했어요', '친구와 팔 간격을 지켰어요'] }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"빠른 음악에서도 센 박에 팔이 올라갔나요?" 모둠마다 8박을 두 번 보여 주고, 보는 모둠은 센 박에 함께 손뼉을 친다. 출구 1번을 틀린 학생은 묶음 첫 칸을 다시 찾게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'pattern', options: { seq: ['쿵', '걷', '걷', '걷', null, '걷', '걷', '걷', '쿵', '걷', null, '걷'] }, prompt: '센 박에 발을 구르는 네 박 줄이에요. 빈칸을 채워요.', target: { fill: ['쿵', '걷'] }, difficulty: 0.15 },
              { type: 'choice', prompt: '빠른 음악에 맞춰 할 때 알맞은 것은 무엇인가요?', options: ['아무렇게나 빨리 움직인다', '센 박에 맞춰 동작을 크게 한다', '박을 세지 않는다'], answer: 1, difficulty: 0.2, explain: '빨라도 센 박에 동작을 크게 해야 리듬이 드러나요.' },
              { type: 'mood', prompt: '8박 동작을 해 본 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '센 박에 뻗어요',
          items: [
            { type: 'figure', prompt: '동작 줄의 빈칸에 알맞은 글자(뻗·걷)를 쓰세요.', tool: 'pattern', wide: true, options: { seq: ['뻗', '걷', '걷', '걷', null, '걷', '걷', null] }, figures: [{ state: {}, caption: '빈칸: ( ), ( )' }], answer: '뻗, 걷' },
            { type: 'table', prompt: '내가 만든 8박 동작을 쓰세요(뻗·걷·짝 가운데 골라 쓰기).', columns: ['1박', '2박', '3박', '4박', '5박', '6박', '7박', '8박'], rows: 1 },
            { type: 'table', prompt: '끊기지 않고 해낸 횟수를 쓰세요.', columns: ['연습', '1회', '2회', '3회'], cells: [['해낸 횟수', '', '', '']] },
            { type: 'choice', prompt: '네 박 묶음에서 팔을 크게 뻗는 박은?', options: ['첫째 박', '둘째 박', '셋째 박'], answer: '첫째 박' },
            { type: 'short', prompt: '동작이 많을수록 좋은 표현일까요? 내 생각을 쓰세요.' },
          ],
          easy: {
            note: '"뻗, 걷, 걷, 걷"을 입으로 말하며 해요. 첫 박이 센 박이에요.',
            items: [
              { type: 'choice', prompt: '"뻗 걷 걷 걷 뻗 걷 □ 걷"의 □는?', options: ['뻗', '걷'], answer: '걷' },
              { type: 'table', prompt: '해낸 횟수를 쓰세요.', columns: ['1회', '2회', '3회'], rows: 1 },
              { type: 'draw', prompt: '팔을 크게 뻗은 내 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '한 줄에 네 박 묶음 하나씩 놓여 센 박 자리가 맨 앞에 보이고, 타이머 시간을 10초씩 맞춰요.',
          base: '긴 줄에서 묶음을 스스로 찾고, 전체 시간을 화면에서 확인해요.',
          challenge: '전체 시간이 보이지 않아 스스로 셈하고, 시간 재기로 8박 한 번에 걸리는 시간을 재요. 나만의 동작 줄은 네 조각을 모두 넣어야 해요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 빠른 음악에서는 아무렇게나 움직여도 리듬이 맞는다고 여긴다 → 센 박에 팔이 올라가는지 친구가 손뼉으로 확인한다. ② 동작을 많이 넣을수록 좋다고 여긴다 → 되풀이가 리듬을 보여 준다. ③ 팔이 박보다 늦다 → 앞 박 끝에서 미리 준비. 실제 동작은 교사가 관찰하고, 교구는 동작 줄 계획과 기록만 판정한다.',
      }),
      // ───────────────────────── 6 ─────────────────────────
      L(6, {
        title: '세마치장단에 맞춰 발 구르고 손뼉 치며 걷기',
        objective: '세마치장단의 덩·덕·쿵 자리를 장단 칸에 나타내고, 덩에서 발을 구르며 장단에 맞추어 걸을 수 있다.',
        illustration: art('children stepping in a circle around a janggu drum under a full autumn moon, stamping on the strong beat', [
          { motif: 'moon', x: 400, y: 58, s: 0.9 }, { motif: 'star', x: 90, y: 50, s: 0.6 }, { motif: 'hills', y: 210 },
          { motif: 'tree', x: 70, y: 214 }, { motif: 'house', x: 420, y: 214, s: 0.8 },
          { motif: 'text', x: 240, y: 130, text: '덩 · · 덩 · 덕 쿵 덕 ·', size: 22 },
        ]),
        safety: [SPACE, '발 구르기는 발바닥 전체로 가볍게 하고, 뒤꿈치로 세게 찍지 않아요.', LOOK],
        stages: stages(
          {
            teacher: '장구(없으면 손뼉과 무릎)로 세마치장단을 두 번 들려준다. "지금까지는 네 박이었어요. 이 장단은 몇 박마다 되풀이될까요?" 세 박이 한 묶음이고 한 박이 다시 세 칸으로 나뉘어 아홉 칸이 된다는 것을 손가락으로 짚는다. "덩은 장구 양쪽을 함께 치는 소리예요. 몸에서는 어디로 칠까요?"를 물어 둔다.',
            student: '장단을 듣고 가장 힘 있게 들리는 소리가 어디서 나오는지 손을 들어 알려 줘요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 세마치장단을 칸에 놓기', minutes: 13, tool: 'keyboard',
              task: '장단 듣기를 누르고, 들은 소리를 아홉 칸에 넣어요. 다 놓으면 무릎과 손뼉으로 그대로 쳐 봐요.',
              teacher: '"덩은 양손, 덕은 오른손(채편), 쿵은 왼손(북편)이에요." 소리가 나지 않는 칸에도 박이 흐른다는 것을 "덩, 쉬고, 쉬고"로 말하며 짚는다. 장단을 놓은 모둠부터 무릎으로 쳐 본다.',
              levels: {
                easy: { mode: 'janggu', beats: 9, group: 3, jangdan: '세마치', strokes: ['덩', '쿵', '덕'] },
                base: { mode: 'janggu', beats: 9, group: 3, jangdan: '세마치', strokes: ['덩', '쿵', '덕', '기덕'] },
                challenge: { mode: 'janggu', beats: 9, group: 3, jangdan: '세마치' },
              },
              items: [
                { prompt: '세마치장단을 듣고 아홉 칸에 덩·덕·쿵을 넣어요.', toolOptions: { pattern: ['덩', '', '', '덩', '', '덕', '쿵', '덕', ''] }, target: { strokes: ['덩', '', '', '덩', '', '덕', '쿵', '덕', ''] }, difficulty: 0.25 },
                { prompt: '둘째 박을 쿵으로 바꾼 세마치를 듣고 칸에 넣어요.', toolOptions: { pattern: ['덩', '', '', '쿵', '', '덕', '쿵', '덕', ''] }, target: { strokes: ['덩', '', '', '쿵', '', '덕', '쿵', '덕', ''] }, difficulty: 0.3 },
                { prompt: '세마치에 맞춰 세 칸마다 한 걸음 걸으며 덩에서 발을 구르고, 해낸 것을 표시해요.', target: { selfCheck: ['덩에서 발을 굴렀어요', '세 칸마다 한 걸음씩 걸었어요', '장단이 끝날 때까지 이어 걸었어요'] }, difficulty: 0.15 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 구음을 몸짓으로 바꾸기', minutes: 13, tool: 'mindmap',
              task: '장구 소리를 몸 소리로 바꾸어요. 구음과 몸짓을 잇고, 익히는 차례를 정한 뒤 모둠이 함께 걸으며 해요.',
              teacher: '"덩은 양손을 함께 치니까 몸에서도 두 가지를 함께 해요." 덩을 손뼉 하나로만 치는 학생에게 양손이 함께 울린다는 것을 다시 들려준다. 제자리에서 익힌 다음 걸으며 하도록 차례를 지킨다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '장구 구음에 어울리는 몸짓을 이어요.', toolOptions: { mode: 'match', topic: '구음을 몸으로', slots: [{ id: '덩', label: '덩(양손 함께)' }, { id: '덕', label: '덕(오른손 채편)' }, { id: '쿵', label: '쿵(왼손 북편)' }], cards: ['발 구르며 손뼉 치기', '손뼉 한 번', '발 한 번 구르기'] }, target: { match: { 덩: '발 구르며 손뼉 치기', 덕: '손뼉 한 번', 쿵: '발 한 번 구르기' } }, levels: { easy: { state: { at: { '발 구르며 손뼉 치기': 0 } } } }, difficulty: 0.2 },
                { prompt: '장단 몸짓을 익히는 차례를 제자리에서 이동하는 쪽으로 놓아요.', toolOptions: { mode: 'order', cards: ['걸으며 덩에 발 구르기', '앉아서 무릎으로 장단 치기', '돌며 덕에 손뼉 치기', '서서 제자리 걸음으로 치기'] }, target: { order: ['앉아서 무릎으로 장단 치기', '서서 제자리 걸음으로 치기', '걸으며 덩에 발 구르기', '돌며 덕에 손뼉 치기'] }, levels: { easy: { state: { at: { '앉아서 무릎으로 장단 치기': 0 } } } }, difficulty: 0.25 },
                { prompt: '세마치에 맞춰 원을 그리며 걸을 때 알맞은 것만 골라요.', toolOptions: { mode: 'pick', topic: '세마치 걷기', cards: ['한 장단마다 걸음 수를 같게 해요', '덩에서 몸을 살짝 낮춰요', '빈 칸에서는 걸음을 멈춰 버려요', '앞 친구와 거리를 지켜요'] }, target: { pick: ['한 장단마다 걸음 수를 같게 해요', '덩에서 몸을 살짝 낮춰요', '앞 친구와 거리를 지켜요'] }, levels: { challenge: { prompt: '세마치에 맞춰 원을 그리며 걸을 때 알맞은 것만 골라요. 그럴듯하지만 원 걷기를 흐트러뜨리는 카드가 섞여 있어요.', toolOptions: { cards: ['한 장단마다 걸음 수를 같게 해요', '덩에서 몸을 살짝 낮춰요', '빈 칸에서는 걸음을 멈춰 버려요', '앞 친구와 거리를 지켜요', '덩에서 높이 뛰어올라요'] } } }, difficulty: 0.2,
                  conclude: '소리가 없는 칸에도 박은 흘러요. 걸음을 이어야 장단이 끊기지 않아요.' },
              ],
            },
          ],
          {
            teacher: '"세마치는 몇 박마다 되풀이되었나요? 덩은 몸으로 어떻게 쳤나요?" 원을 그리며 세마치에 맞춰 두 장단을 걷고 마친다. 출구 1번을 틀린 학생은 빈 칸을 건너뛰지 않았는지 본다.',
            exitTicket: [
              { type: 'tool', tool: 'keyboard', options: { mode: 'janggu', beats: 9, group: 3, jangdan: '세마치', strokes: ['덩', '쿵', '덕'], pattern: ['덩', '', '', '덩', '', '', '쿵', '덕', ''] }, prompt: '둘째 박의 덕을 뺀 세마치를 듣고 칸에 넣어요.', target: { strokes: ['덩', '', '', '덩', '', '', '쿵', '덕', ''] }, difficulty: 0.3 },
              { type: 'choice', prompt: '세마치장단은 큰 박 몇 개가 한 장단인가요?', options: ['두 개', '세 개', '네 개'], answer: 1, difficulty: 0.2, explain: '세마치는 큰 박 세 개가 한 장단이고, 한 박이 다시 세 칸으로 나뉘어요.' },
              { type: 'mood', prompt: '장단에 맞춰 걸어 본 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '세마치장단에 맞춰 걸어요',
          items: [
            { type: 'figure', prompt: '세마치 장단 칸에 들은 구음을 쓰세요.', tool: 'keyboard', wide: true, options: { mode: 'janggu', beats: 9, group: 3, jangdan: '세마치' }, figures: [{ state: {}, caption: '' }], answer: '덩 · · 덩 · 덕 쿵 덕 ·' },
            { type: 'table', prompt: '구음과 바꾼 몸짓을 쓰세요.', columns: ['구음', '장구에서', '몸에서'], cells: [['덩', '양손 함께', ''], ['덕', '오른손(채편)', ''], ['쿵', '왼손(북편)', '']] },
            { type: 'choice', prompt: '소리가 나지 않는 칸에서 알맞은 것에 ○ 하세요.', options: ['걸음을 멈춘다', '박을 세며 걸음을 이어 간다', '다음 덩까지 뛰어간다'], answer: '박을 세며 걸음을 이어 간다' },
            { type: 'short', prompt: '세마치에 맞춰 걸어 보니 네 박 걷기와 무엇이 달랐는지 쓰세요.' },
          ],
          easy: {
            note: '덩 = 발 구르며 손뼉, 덕 = 손뼉, 쿵 = 발 구르기예요.',
            items: [
              { type: 'blank', prompt: '빈칸에 알맞은 구음을 쓰세요.', text: '세마치: ___ · · 덩 · 덕 쿵 덕 ·', answer: '덩' },
              { type: 'choice', prompt: '덩을 몸으로 할 때 알맞은 것은?', options: ['발 구르며 손뼉', '가만히 서기'], answer: '발 구르며 손뼉' },
              { type: 'draw', prompt: '세마치에 맞춰 걷는 우리 반 원 모양을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '장단 붓이 덩·쿵·덕 세 개뿐이고, 카드를 맞는 칸에 놓으면 바로 표시돼요. 카드 한 장이나 첫 차례가 미리 놓인 문항이 있어요.',
          base: '기덕까지 네 가지 붓 가운데 골라 놓아요.',
          challenge: '더러러까지 다섯 가지 붓이 모두 있어 소리를 귀로 더 잘 가려내야 해요. 그럴듯한 함정 카드가 더해진 문항이 있어요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 박자는 노래에만 있다고 여겨 소리 없는 칸에서 걸음을 멈춘다 → "덩, 쉬고, 쉬고"로 빈 칸을 입으로 센다. ② 덩을 손뼉 하나로만 친다 → 양손이 함께 울리니 발과 손을 함께. ③ 네 박 걷기 버릇으로 장단이 어긋난다 → 큰 박 세 개를 손가락으로 센다. 세마치는 전래 국악 장단이다.',
      }),
      // ───────────────────────── 7 ─────────────────────────
      L(7, {
        title: '이끔이 따라 하는 메아리 동작 이어 가기',
        objective: '이끔이가 보인 4박 리듬 동작을 다음 4박에 똑같이 따라 하고, 모둠원이 돌아가며 이끔이를 맡아 리듬 동작을 이어 갈 수 있다.',
        illustration: art('a leader child showing a clapping move while a small group echoes it in a mountain valley with sound ripples', [
          { motif: 'mountain', x: 120, y: 200, s: 1.1 }, { motif: 'mountain', x: 360, y: 204 }, { motif: 'sun', x: 420, y: 56, s: 0.7 },
          { motif: 'cloud', x: 230, y: 56 }, { motif: 'hills', y: 220 },
          { motif: 'text', x: 240, y: 132, text: '하나 둘 셋 넷 → 메아리!', size: 22 },
        ]),
        safety: [SPACE, LOOK, '이끔이는 모둠이 따라 하기 어려운 위험한 동작(뒤로 넘기, 높이 뛰어내리기)을 내지 않아요.'],
        stages: stages(
          {
            teacher: '"산에서 소리치면 메아리가 똑같이 돌아오지요." 교사가 4박 리듬 동작(손뼉·무릎·발 구르기)을 보이면 학생들이 다음 4박에 그대로 따라 한다. 세 번 해 본 뒤 "메아리를 잘 하려면 무엇을 해야 할까요?"를 묻고, 이끔이를 끝까지 보고 박을 세는 것을 짚는다.',
            student: '선생님의 4박 동작을 잘 보고, 다음 4박에 메아리처럼 똑같이 따라 해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 메아리 리듬을 블록으로 놓기', minutes: 14, tool: 'keyboard',
              task: '이끔이 리듬 한 마디와 따라 하는 메아리 한 마디를 듣고 블록으로 놓아요. 놓은 리듬을 짝과 이끔이·메아리로 나누어 쳐요.',
              teacher: '"메아리 마디는 이끔이 마디와 어떻게 같아야 할까요?" 둘째 마디를 다르게 놓은 학생에게 첫 마디를 손으로 짚고 하나씩 견주게 한다. 놓은 리듬은 손뼉(4분음표)·무릎 두 번(8분음표 두 개)·길게 팔 펴기(2분음표)로 몸으로 바꾼다.',
              levels: {
                easy: Object.assign({ blocks: ['q', 'e', 'h', 'qr'], showBeats: true }, R1),
                base: Object.assign({ blocks: ['q', 'e', 'h', 'qr'] }, R1),
                challenge: Object.assign({ blocks: ['q', 'e', 'h', 'qr', 'dh', 'er'] }, R1),
              },
              items: [
                { prompt: '이끔이 마디와 메아리 마디를 듣고 두 마디를 놓아요.', toolOptions: { pattern: ['q', 'q', 'h', 'q', 'q', 'h'] }, target: { rhythm: ['q', 'q', 'h', 'q', 'q', 'h'] }, difficulty: 0.15 },
                { prompt: '무릎 두 번이 들어간 이끔이 리듬과 그 메아리를 듣고 놓아요.', toolOptions: { pattern: ['e', 'e', 'q', 'q', 'qr', 'e', 'e', 'q', 'q', 'qr'] }, target: { rhythm: ['e', 'e', 'q', 'q', 'qr', 'e', 'e', 'q', 'q', 'qr'] }, difficulty: 0.25 },
                { prompt: '이끔이가 박 가운데에 무릎 두 번을 넣었어요. 이끔이 리듬과 메아리를 듣고 놓아요.', toolOptions: { pattern: ['q', 'e', 'e', 'h', 'q', 'e', 'e', 'h'] }, target: { rhythm: ['q', 'e', 'e', 'h', 'q', 'e', 'e', 'h'] }, difficulty: 0.3,
                  levels: { challenge: { prompt: '이끔이가 세 박 길게 팔을 펴고 한 박 손뼉을 쳐요. 메아리까지 듣고 놓아요.', toolOptions: { pattern: ['dh', 'q', 'dh', 'q'] }, target: { rhythm: ['dh', 'q', 'dh', 'q'] } } },
                  conclude: '메아리는 이끔이 마디와 블록 차례·길이가 똑같아요. 끝까지 보고 박을 세야 똑같이 돌려줄 수 있어요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 이끔이를 바꾸어 가며 연습하기', minutes: 12, tool: 'timer',
              task: '모둠원이 모두 한 번씩 이끔이를 맡도록 연습 계획을 세우고, 메아리 동작을 이어 간 뒤 점검해요.',
              teacher: '"모둠이 네 명이면 이끔이는 몇 번 바뀌어야 할까요?" 되풀이 횟수가 모둠원 수와 같다는 것을 짚는다. 쉬는 동안 다음 이끔이가 낼 동작을 정한다. 이끔이가 너무 어려운 동작을 내면 모둠이 함께 쉬운 동작으로 바꾼다.',
              levels: { easy: { workStep: 10, restStep: 10, showTotal: true }, base: { showTotal: true }, challenge: { showTotal: false } },
              items: [
                { prompt: '네 명 모둠이에요. 이끔이 한 명당 40초 연습, 바꾸는 동안 20초 쉬기로 모두가 한 번씩 이끔이를 하도록 맞춰요.', toolOptions: { plan: { work: 30, rest: 10, rounds: 2 } }, target: { plan: { work: 40, rest: 20, rounds: 4 } }, difficulty: 0.3 },
                { prompt: '다섯 명 모둠이 이끔이마다 30초씩, 사이마다 10초 쉬며 모두 한 번씩 이끔이를 하면 전체 시간은 3분 10초(190초)예요. 그렇게 되도록 맞춰요.', toolOptions: { plan: { work: 30, rest: 10, rounds: 2 }, showTotal: true, revealAfterCheck: true }, target: { plan: { work: 30, rest: 10 }, total: 190 }, difficulty: 0.45 },
                { prompt: '메아리 연습을 마치고 해낸 것을 점검 목록에 표시해요.', target: { selfCheck: ['이끔이 동작을 끝까지 보고 따라 했어요', '이끔이일 때 4박을 또박또박 보였어요', '박이 어긋나도 멈추지 않고 이어 갔어요'] }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"메아리가 잘 된 모둠은 무엇이 달랐나요?" 이끔이를 끝까지 본 것, 박을 함께 센 것을 짚는다. 반 전체가 교사를 이끔이로 메아리 두 번을 하고 마친다.',
            exitTicket: [
              { type: 'tool', tool: 'keyboard', options: Object.assign({ blocks: ['q', 'e', 'h', 'qr'], pattern: ['h', 'e', 'e', 'q', 'h', 'e', 'e', 'q'] }, R1), prompt: '길게 팔 펴기로 시작하는 이끔이 리듬과 메아리를 듣고 놓아요.', target: { rhythm: ['h', 'e', 'e', 'q', 'h', 'e', 'e', 'q'] }, difficulty: 0.3 },
              { type: 'choice', prompt: '여섯 명 모둠이 모두 한 번씩 이끔이를 하려면 되풀이 횟수는?', options: ['4번', '5번', '6번'], answer: 2, difficulty: 0.2, explain: '모둠원 수만큼 이끔이가 바뀌어요.' },
              { type: 'mood', prompt: '메아리 동작을 해 본 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '메아리 동작',
          items: [
            { type: 'figure', prompt: '리듬 블록을 보고, 메아리 마디가 이끔이 마디와 같으면 ○, 다르면 × 하세요.', tool: 'keyboard', options: R1, figures: [{ state: { rhythm: ['q', 'q', 'h', 'q', 'h', 'q'] }, caption: '같다( ) 다르다( )' }, { state: { rhythm: ['e', 'e', 'q', 'h', 'e', 'e', 'q', 'h'] }, caption: '같다( ) 다르다( )' }], answer: '첫째: 다르다(×), 둘째: 같다(○)' },
            { type: 'table', prompt: '우리 모둠 이끔이가 낸 동작을 쓰세요.', columns: ['차례', '이끔이', '낸 동작(손뼉·무릎·발 구르기 등)'], rows: 4 },
            { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '이끔이 30초 × 5번 + 쉬기 10초 × ___번 = ___초', answer: '4, 190' },
            { type: 'short', prompt: '메아리를 잘 하려면 무엇을 해야 하는지 쓰세요.' },
          ],
          easy: {
            note: '메아리는 이끔이와 똑같이! 마지막 운동 뒤에는 쉬지 않아요.',
            items: [
              { type: 'choice', prompt: '이끔이가 "손뼉, 손뼉, 길게 팔 펴기"를 하면 메아리는?', options: ['손뼉, 손뼉, 길게 팔 펴기', '손뼉, 길게 팔 펴기'], answer: '손뼉, 손뼉, 길게 팔 펴기' },
              { type: 'short', prompt: '내가 이끔이로 낸 동작을 쓰세요.' },
              { type: 'draw', prompt: '이끔이와 메아리 모둠을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '마디마다 박 수가 보이고, 타이머를 10초씩 맞춰요.',
          base: '박 수 안내 없이 스스로 견주어 놓고, 전체 시간을 화면에서 봐요.',
          challenge: '셋째 문항이 점2분음표가 든 리듬으로 바뀌고, 전체 시간을 스스로 셈해요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 이끔이 동작을 끝까지 보지 않고 먼저 시작한다 → "넷까지 보고"를 약속한다. ② 메아리에서 박이 빨라진다 → 이끔이 마디 동안 마음속으로 박을 센다. ③ 쉬는 횟수를 운동 횟수와 같게 센다 → 마지막 이끔이 뒤에는 쉬지 않는다.',
      }),
      // ───────────────────────── 8 ─────────────────────────
      L(8, {
        title: '박자가 어긋난 곳 찾아 천천히 맞추기',
        objective: '리듬 동작에서 박자가 어긋난 곳을 찾아 몇째 박인지 말하고, 그 부분만 천천히 맞춘 뒤 제 속도로 다시 할 수 있다.',
        illustration: art('a child looking through a big paper magnifying glass at a row of beat dots where one dot is out of line, with friends practicing slowly behind', [
          { motif: 'sun', x: 410, y: 56, s: 0.7 }, { motif: 'hills', y: 210 }, { motif: 'cloud', x: 100, y: 52 },
          { motif: 'star', x: 330, y: 110, s: 0.7 }, { motif: 'leaf', x: 90, y: 200 },
          { motif: 'text', x: 240, y: 132, text: '몇째 박이 어긋났을까?', size: 22 },
        ]),
        safety: [SPACE, STOP, '천천히 연습할 때도 무릎을 살짝 굽혀 착지해요.'],
        stages: stages(
          {
            teacher: '교사가 "뻗 걷 걷 걷"을 두 번 하다가 둘째 묶음에서 일부러 팔을 셋째 박에 뻗는다. "어디가 이상했나요? 몇째 박이었나요?" 학생들이 박 번호로 말하게 한다. "박이 어긋나도 힘차게만 하면 괜찮을까요?"를 물어, 보는 사람에게 리듬이 무너져 보인다는 것을 짚는다.',
            student: '선생님 동작에서 어긋난 곳을 찾아 몇째 박이었는지 손가락으로 알려 줘요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 어긋난 리듬 블록 고치기', minutes: 14, tool: 'keyboard',
              task: '친구가 놓은 동작 리듬이 들려준 리듬과 달라요. 리듬 듣기로 들어 보고, 어긋난 블록을 빼거나 바꾸어 고쳐요. 고친 리듬을 몸으로 쳐 봐요.',
              teacher: '"마디마다 몇 박인지 먼저 세어 보세요." 어긋난 마디를 찾은 뒤 몇째 박부터 달라졌는지 말하게 한다. 블록을 모두 지우고 새로 놓는 학생에게 "어긋난 곳만 고쳐요"라고 말한다.',
              levels: {
                easy: Object.assign({ blocks: ['q', 'e', 'h', 'qr'], showBeats: true }, R1),
                base: Object.assign({ blocks: ['q', 'e', 'h', 'qr'] }, R1),
                challenge: Object.assign({ blocks: ['q', 'e', 'h', 'qr', 'er'] }, R1),
              },
              items: [
                { prompt: '첫 마디에 블록이 하나 더 들어갔어요. 들어 보고 남는 블록을 빼요.', toolOptions: { pattern: ['q', 'q', 'q', 'q', 'h', 'h'] }, state: { rhythm: ['q', 'q', 'q', 'q', 'q', 'h', 'h'] }, target: { rhythm: ['q', 'q', 'q', 'q', 'h', 'h'] }, difficulty: 0.15 },
                { prompt: '둘째 마디 끝에서 친구가 멈춤을 잘못 넣었어요. 들어 보고 고쳐요.', toolOptions: { pattern: ['q', 'e', 'e', 'q', 'q', 'h', 'q', 'q'] }, state: { rhythm: ['q', 'e', 'e', 'q', 'q', 'h', 'q', 'qr'] }, target: { rhythm: ['q', 'e', 'e', 'q', 'q', 'h', 'q', 'q'] }, difficulty: 0.25 },
                { prompt: '둘째 마디의 차례가 바뀌었어요. 들어 보고 몇째 박부터 다른지 찾아 고쳐요.', toolOptions: { pattern: ['h', 'q', 'q', 'q', 'q', 'h'] }, state: { rhythm: ['h', 'q', 'q', 'q', 'h', 'q'] }, target: { rhythm: ['h', 'q', 'q', 'q', 'q', 'h'] }, difficulty: 0.3,
                  conclude: '어긋난 곳을 박 번호로 말하면 어디만 고치면 되는지 바로 알 수 있어요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 천천히 맞추고 제 속도로 다시 하기', minutes: 12, tool: 'timer',
              task: '어긋난 곳을 고치는 차례를 세우고, 천천히 할 때와 제 속도로 할 때 박에 맞은 횟수를 적어요.',
              teacher: '"어긋난 곳만 천천히, 그다음 제 속도로." 처음부터 제 속도로 여러 번 되풀이하는 모둠에게 "같은 곳에서 또 어긋나요"라고 짚고 느린 박(북을 느리게)으로 맞춰 준다.',
              levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
              items: [
                { prompt: '어긋난 동작을 고치는 차례대로 카드를 놓아요.', toolOptions: { cards: ['처음부터 이어서 하기', '어긋난 박 번호 찾기', '제 속도로 그 부분 하기', '그 부분만 천천히 하기'] }, target: { order: ['어긋난 박 번호 찾기', '그 부분만 천천히 하기', '제 속도로 그 부분 하기', '처음부터 이어서 하기'] }, levels: { easy: { state: { order: ['어긋난 박 번호 찾기', '처음부터 이어서 하기', '제 속도로 그 부분 하기', '그 부분만 천천히 하기'] } } }, difficulty: 0.2,
                  hints: ['고칠 곳을 먼저 알아야 해요. 그다음 쉬운 빠르기에서 어려운 빠르기로, 작은 부분에서 전체로 넓혀요.', '천천히 하기와 제 속도 가운데 무엇이 먼저일지, 그 부분과 처음부터 가운데 무엇이 나중일지 견주어 보세요.'] },
                { prompt: '어긋난 부분을 천천히 세 번, 제 속도로 세 번 해 보고 박에 맞은 횟수를 적어요.', toolOptions: { fields: ['천천히(3번 중)', '제 속도(3번 중)'], unit: '번' }, target: { records: true }, levels: { challenge: { toolOptions: { fields: ['천천히(3번 중)', '제 속도(3번 중)', { label: '제 속도가 천천히보다 적은 횟수', unit: '번' }] } } }, difficulty: 0.15 },
                { prompt: '고쳐 본 뒤 해낸 것을 점검 목록에 표시해요.', target: { selfCheck: ['어긋난 곳을 박 번호로 말했어요', '그 부분만 천천히 맞췄어요', '제 속도로 처음부터 다시 해 보았어요'] }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"오늘 어긋난 곳은 몇째 박이었고, 어떻게 맞췄나요?" 천천히 연습한 뒤 제 속도 기록이 늘었는지 묻는다. 출구 1번에서 "힘차게 하면 괜찮다"를 고른 학생과 따로 이야기한다.',
            exitTicket: [
              { type: 'tool', tool: 'emotion', options: { mode: 'branch', situation: '모둠 발표 연습에서 내 팔이 계속 한 박 늦게 올라가요.', choices: [{ id: 'loud', text: '더 힘차게만 하면 괜찮아요', result: '힘은 있었지만 여전히 박이 어긋났어요.', mood: '속상함', why: '힘을 주어도 박이 맞지 않으면 리듬이 무너져 보여요.' }, { id: 'slow', text: '그 박만 천천히 맞춘 뒤 다시 해요', result: '다음 연습에서 팔이 박에 맞춰 올라갔어요.', mood: '뿌듯함' }, { id: 'quit', text: '그 동작을 빼 버려요', result: '동작이 비어 모둠과 맞지 않았어요.', mood: '걱정', why: '빼기보다 고쳐서 맞추어요.' }] }, prompt: '박이 어긋날 때 어떻게 할지 골라요.', target: { choice: 'slow' }, difficulty: 0.15 },
              { type: 'choice', prompt: '"뻗 걷 걷 걷 / 뻗 걷 뻗 걷"에서 둘째 묶음의 어긋난 곳은 몇째 박인가요?', options: ['첫째 박', '둘째 박', '셋째 박'], answer: 2, difficulty: 0.25, explain: '둘째 묶음은 첫째 박(센 박)에 바르게 뻗었지만, 걸어야 할 셋째 박에 뻗이 하나 더 들어갔어요.' },
              { type: 'mood', prompt: '어긋난 곳을 고쳐 본 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '어긋난 박을 찾아 고쳐요',
          items: [
            { type: 'figure', prompt: '이 리듬은 4박 두 마디가 되어야 해요. 박이 맞지 않는 마디에 ○ 하세요.', tool: 'keyboard', options: R1, figures: [{ state: { rhythm: ['q', 'q', 'h', 'h', 'q', 'q', 'q'] }, caption: '첫째 마디( ) 둘째 마디( )' }], answer: '둘째 마디(5박)' },
            { type: 'blank', prompt: '빈칸에 알맞은 박 번호를 쓰세요.', text: '"짝 탁 탁 탁 / 짝 탁 짝 탁"에서 둘째 묶음의 ___째 박이 어긋났어요.', answer: '셋' },
            { type: 'table', prompt: '천천히와 제 속도에서 박에 맞은 횟수를 쓰세요.', columns: ['빠르기', '1번', '2번', '3번'], cells: [['천천히', '', '', ''], ['제 속도', '', '', '']] },
            { type: 'choice', prompt: '박이 어긋날 때 가장 먼저 할 일에 ○ 하세요.', options: ['더 힘차게 한다', '어긋난 박 번호를 찾는다', '처음부터 빠르게 되풀이한다'], answer: '어긋난 박 번호를 찾는다' },
            { type: 'short', prompt: '"박자가 어긋나도 힘차게 하면 괜찮다"는 말에 대한 내 생각을 쓰세요.' },
          ],
          easy: {
            note: '박을 "하나, 둘, 셋, 넷" 소리 내어 세며 어긋난 곳에서 손을 들어요.',
            items: [
              { type: 'choice', prompt: '"짝 탁 탁 짝 짝 탁"(세 박 묶음)에서 어긋난 것은?', options: ['넷째 조각', '다섯째 조각'], answer: '다섯째 조각' },
              { type: 'choice', prompt: '어긋난 곳은 어떻게 연습할까요?', options: ['천천히 맞춘다', '그냥 빨리 한다'], answer: '천천히 맞춘다' },
              { type: 'short', prompt: '오늘 내가 고친 곳을 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '마디마다 박 수가 보여 어긋난 마디를 바로 찾아요. 카드 한 장이나 첫 차례가 미리 놓인 문항이 있어요.',
          base: '박 수를 스스로 세어 어긋난 마디를 찾아요.',
          challenge: '8분쉼표까지 섞인 고르개에서 귀로 들은 리듬과 견주고, 시간 재기로 천천히·제 속도의 빠르기를 재요. 기록판에 차이·합계를 셈해 적는 칸이 더해져요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 박자가 어긋나도 힘차게 하면 괜찮다고 여긴다 → 친구가 손뼉으로 박을 쳐 줄 때 어긋남이 들리게 한다. ② 어긋난 곳을 "중간쯤"으로만 말한다 → 박 번호로 말하게 한다. ③ 처음부터 빠르게만 되풀이한다 → 그 부분만 느린 박으로.',
      }),
      // ───────────────────────── 9 ─────────────────────────
      L(9, {
        title: '짝 동작 봐 주고 도움 되는 말 건네기',
        objective: '짝의 리듬 동작을 보며 박이 맞은 마디를 세어 주고, 어긋난 박과 고칠 방법을 담은 말을 건넬 수 있다.',
        illustration: art('two children taking turns, one moving to the beat and the other watching and counting with fingers, speech bubbles with kind words floating between them', [
          { motif: 'sun', x: 410, y: 56, s: 0.7 }, { motif: 'hills', y: 210 }, { motif: 'cloud', x: 110, y: 50 },
          { motif: 'flower', x: 80, y: 214 }, { motif: 'flower', x: 400, y: 214 },
          { motif: 'text', x: 240, y: 132, text: '셋째 박에서 조금 늦었어!', size: 22 },
        ]),
        safety: [SPACE, '짝이 동작할 때는 동작하는 자리 밖에서 봐요.', STOP],
        stages: stages(
          {
            teacher: '두 가지 말을 들려준다. "너 리듬감 없어." / "셋째 박에서 팔이 조금 늦었어. 그 박만 다시 해 볼래?" "어느 말을 들으면 고칠 수 있을까요?" 어긋난 박 번호와 고칠 방법이 들어 있는 말이 도움이 된다는 것을 짚는다. 지난 시간 고친 경험을 떠올리게 한다.',
            student: '두 말 가운데 어느 말을 들으면 동작을 고칠 수 있을지 골라 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 도움이 되는 말 고르기', minutes: 12, tool: 'emotion',
              task: '짝의 동작을 보고 건넬 말과 들은 말에 답하는 법을 골라요. 고른 말을 짝에게 실제로 해 봐요.',
              teacher: '"박 번호가 들어 있나요? 고칠 방법이 들어 있나요?" 두 가지를 기준으로 말을 고르게 한다. 들은 말에 "아니야" 하고 우기는 학생에게는 짝이 본 것을 먼저 물어보게 한다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '짝의 리듬 동작을 보고 건넬 말 가운데 도움이 되는 말만 골라요.', toolOptions: { mode: 'pick', basket: '도움이 되는 말', cards: ['다섯째 박에서 팔이 조금 늦었어', '넌 리듬감이 없어', '센 박에서 팔을 더 높이 뻗으면 좋겠어', '대충 하자'] }, target: { pick: ['다섯째 박에서 팔이 조금 늦었어', '센 박에서 팔을 더 높이 뻗으면 좋겠어'] }, levels: { challenge: { prompt: '짝의 리듬 동작을 보고 건넬 말 가운데 도움이 되는 말만 골라요. 박 번호도 고칠 방법도 없는 말은 남겨요.', toolOptions: { cards: ['다섯째 박에서 팔이 조금 늦었어', '넌 리듬감이 없어', '센 박에서 팔을 더 높이 뻗으면 좋겠어', '대충 하자', '그냥 다시 해 봐'] } } }, difficulty: 0.1 },
                { prompt: '짝이 "넷째 박이 빨랐어"라고 말해 줬어요. 어떻게 답할까요?', toolOptions: { mode: 'branch', situation: '짝이 "넷째 박이 빨랐어"라고 말해 줬어요.', choices: [{ id: 'argue', text: '"아니야, 맞았어" 하고 우겨요', result: '어디가 빨랐는지 알지 못하고 끝났어요.', mood: '화남', why: '짝이 본 것을 먼저 들어 보아요.' }, { id: 'ask', text: '어떻게 빨랐는지 묻고 그 박만 다시 해요', result: '넷째 박을 맞추어 다시 했어요.', mood: '뿌듯함' }, { id: 'stop', text: '기분이 나빠 그만해요', result: '연습이 멈췄어요.', mood: '속상함', why: '말은 내 동작을 위한 것이에요.' }] }, target: { choice: 'ask' }, levels: { easy: { toolOptions: { choices: [{ id: 'argue', text: '"아니야, 맞았어" 하고 우겨요', result: '어디가 빨랐는지 알지 못하고 끝났어요.', mood: '화남', why: '짝이 본 것을 먼저 들어 보아요.' }, { id: 'ask', text: '어떻게 빨랐는지 묻고 그 박만 다시 해요', result: '넷째 박을 맞추어 다시 했어요.', mood: '뿌듯함' }] } } }, difficulty: 0.15 },
                { prompt: '짝의 동작을 볼 때 내가 할 일만 골라요.', toolOptions: { mode: 'pick', basket: '볼 때 할 일', cards: ['박을 작게 소리 내어 세 줘요', '어긋난 박 번호를 기억해요', '다른 모둠을 구경해요', '짝이 틀리면 크게 웃어요'] }, target: { pick: ['박을 작게 소리 내어 세 줘요', '어긋난 박 번호를 기억해요'] }, levels: { easy: { state: { at: { '박을 작게 소리 내어 세 줘요': 0 } } }, challenge: { prompt: '짝의 동작을 볼 때 내가 할 일만 골라요. 그럴듯하지만 짝에게 도움이 안 되는 카드가 섞여 있어요.', toolOptions: { cards: ['박을 작게 소리 내어 세 줘요', '어긋난 박 번호를 기억해요', '다른 모둠을 구경해요', '짝이 틀리면 크게 웃어요', '짝보다 내가 더 잘하는지 견줘요'] } } }, difficulty: 0.15 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 짝과 번갈아 보고 세어 주기', minutes: 14, tool: 'timer',
              task: '짝과 번갈아 8마디 리듬 동작을 하고 봐 줘요. 봐 주는 차례를 정하고, 짝이 세어 준 맞은 마디 수를 적은 뒤 점검해요.',
              teacher: '"잘된 점부터 말해요." 차례를 지키지 않고 고칠 점부터 말하는 짝이 있으면 한 번 멈추고 잘된 점을 먼저 찾게 한다. 맞은 마디 수는 짝끼리 견주지 않고 내 1회·2회·3회를 견준다.',
              levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
              items: [
                { prompt: '짝의 동작을 봐 주는 차례대로 카드를 놓아요.', toolOptions: { cards: ['고칠 점 한 가지 말하기', '짝 동작 끝까지 보기', '다시 해 보고 견주기', '잘된 점 먼저 말하기'] }, target: { order: ['짝 동작 끝까지 보기', '잘된 점 먼저 말하기', '고칠 점 한 가지 말하기', '다시 해 보고 견주기'] }, levels: { easy: { state: { order: ['짝 동작 끝까지 보기', '고칠 점 한 가지 말하기', '다시 해 보고 견주기', '잘된 점 먼저 말하기'] } } }, difficulty: 0.2,
                  hints: ['보고 나서 말해요. 말할 때는 짝이 힘을 낼 말을 먼저, 고칠 말은 그다음에 해요.', '말하기 카드 두 장 가운데 무엇이 먼저일지, 다시 해 보기는 언제일지 견주어 보세요.'] },
                { prompt: '짝이 세어 준, 박에 맞은 마디 수(8마디 가운데)를 세 번 적어요.', toolOptions: { fields: ['1회', '2회', '3회'], unit: '마디' }, target: { records: true }, levels: { challenge: { toolOptions: { fields: ['1회', '2회', '3회', { label: '3회가 1회보다 늘어난 마디', unit: '마디' }] } } }, difficulty: 0.15 },
                { prompt: '짝과 봐 주기를 마치고 해낸 것을 표시해요.', target: { selfCheck: ['짝 동작을 끝까지 보았어요', '박 번호를 넣어 말해 주었어요', '들은 말대로 한 곳을 고쳐 보았어요'] }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"짝에게 들은 말 가운데 가장 도움이 된 말은 무엇이었나요?" 두세 학생이 말하게 한다. 1회와 3회 기록이 어떻게 달라졌는지 스스로 견주게 하고, 친구와 견주지 않도록 한다.',
            exitTicket: [
              { type: 'tool', tool: 'emotion', options: { mode: 'pick', basket: '도움이 되는 말', cards: ['둘째 묶음 첫 박에서 발을 더 세게 굴러 봐', '너 때문에 다 틀렸어', '여섯째 박에서 손뼉이 빨랐어', '그냥 못해'] }, prompt: '발 구르기 동작을 본 뒤 건넬 말 가운데 도움이 되는 말만 골라요.', target: { pick: ['둘째 묶음 첫 박에서 발을 더 세게 굴러 봐', '여섯째 박에서 손뼉이 빨랐어'] }, difficulty: 0.15 },
              { type: 'choice', prompt: '짝의 말을 들은 뒤 가장 알맞은 행동은 무엇인가요?', options: ['짝이 틀렸다고 말한다', '말한 박을 다시 해 본다', '못 들은 척한다'], answer: 1, difficulty: 0.1, explain: '들은 박을 다시 해 보면 정말 어긋났는지 알 수 있어요.' },
              { type: 'short', prompt: '오늘 짝에게 들은 말 가운데 가장 도움이 된 말을 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '짝 동작 봐 주기',
          items: [
            { type: 'table', prompt: '짝이 세어 준 맞은 마디 수를 쓰세요(8마디 가운데).', columns: ['횟수', '1회', '2회', '3회'], cells: [['맞은 마디', '', '', '']] },
            { type: 'choice', prompt: '도움이 되는 말에 ○ 하세요.', options: ['"넌 리듬감이 없어"', '"셋째 박에서 팔이 늦었어"', '"대충 하자"'], answer: '"셋째 박에서 팔이 늦었어"' },
            { type: 'table', prompt: '짝에게 해 준 말을 쓰세요.', columns: ['잘된 점', '고칠 점(박 번호 넣기)'], rows: 2 },
            { type: 'check', prompt: '짝 동작을 볼 때 한 일에 ✓ 하세요.', options: ['끝까지 보았어요', '박을 세어 주었어요', '잘된 점을 먼저 말했어요'] },
            { type: 'short', prompt: '짝의 말을 듣고 내가 고친 점을 쓰세요.' },
          ],
          easy: {
            note: '좋은 말에는 "몇째 박"과 "어떻게"가 들어 있어요.',
            items: [
              { type: 'choice', prompt: '도움이 되는 말은?', options: ['"넷째 박에서 빨랐어"', '"못해"'], answer: '"넷째 박에서 빨랐어"' },
              { type: 'short', prompt: '짝에게 해 준 칭찬을 쓰세요.' },
              { type: 'draw', prompt: '짝과 봐 주는 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '도움이 되는 말을 바구니에 넣으면 바로 표시되고, 아닌 말은 까닭을 말해 주고 되돌아와요. 상황 판단 보기가 하나 적어요. 카드 한 장이나 첫 차례가 미리 놓인 문항이 있어요.',
          base: '모두 고른 뒤 확인해 스스로 고쳐요.',
          challenge: '시간 재기로 8마디가 걸리는 시간을 재어 빠르기가 고른지도 봐요. 그럴듯한 함정 카드가 더해진 문항이 있어요. 기록판에 차이·합계를 셈해 적는 칸이 더해져요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 박자가 어긋나도 힘차게 하면 괜찮다고 여겨 짝의 말을 흘려듣는다 → 들은 박을 다시 해 보게 한다. ② 고칠 점을 사람 탓으로 말한다("너 때문에") → 박 번호와 동작으로 말한다. ③ 친구 기록과 견준다 → 나의 1·2·3회 변화를 본다.',
      }),
      // ───────────────────────── 10 ─────────────────────────
      L(10, {
        title: '모둠 리듬 표현 발표하고 내 기록 변화 읽기',
        objective: '모둠 리듬 표현을 차례에 맞게 발표하고, 앞 차시에 남긴 연습 기록을 그래프로 읽어 내 리듬 동작이 어떻게 나아졌는지 말할 수 있다.',
        illustration: art('a small group of children bowing on a paper stage after a rhythm performance, with a rising bar chart made of paper strips beside them', [
          { motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'hills', y: 212 }, { motif: 'cloud', x: 100, y: 50 },
          { motif: 'star', x: 140, y: 110, s: 0.6 }, { motif: 'star', x: 340, y: 100, s: 0.8 },
          { motif: 'text', x: 240, y: 140, text: '우리 모둠 리듬 발표', size: 24 },
        ]),
        safety: [SPACE, '발표하는 모둠 앞쪽에는 앉아서 보고, 무대 자리로 들어가지 않아요.', STOP],
        stages: stages(
          {
            teacher: '"1차시부터 무엇을 배웠는지 떠올려 볼까요? 걷고 멈추기, 센 박, 빠르기, 세마치, 메아리, 어긋난 박 고치기." 칠판에 차례로 적는다. "오늘은 모둠이 그동안 만든 리듬 표현을 발표하고, 내 기록이 어떻게 달라졌는지 그래프로 봐요."',
            student: '1차시부터 배운 리듬 활동을 차례로 떠올려 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 기록 그래프로 나의 변화 읽기', minutes: 7, tool: 'chart',
              task: '5차시(끝까지 해낸 횟수)와 9차시(박에 맞은 마디 수)에 친구가 남긴 연습 기록을 그래프로 나타내고 읽어요. 내 기록은 활동지에 옮겨 같은 잣대끼리만 그려요.',
              teacher: '"1회에서 3회로 가며 가장 많이 늘어난 때는 언제일까요? 그 사이에 무엇을 했나요?" 5차시 기록(끝까지 해낸 횟수)과 9차시 기록(맞은 마디 수)은 잣대가 달라 서로 견주지 않는다는 것을 짚는다. 친구 기록과 견주지 않고 한 사람의 변화를 읽는다. 7분 안에 끝내고 발표 연습으로 넘어간다.',
              levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '준호가 5차시에 남긴 기록 표를 보고 막대그래프를 완성해요.', toolOptions: { type: 'bar', title: '준호가 5차시에 8박 동작을 끝까지 해낸 횟수', unit: '번', xLabel: '연습', yLabel: '해낸 횟수', data: [['1회 연습', 2], ['2회 연습', 4], ['3회 연습', 5]] }, target: { build: true }, levels: { easy: { toolOptions: { given: [0] } } }, difficulty: 0.15 },
                { prompt: '민지가 9차시에 남긴 기록 꺾은선그래프를 보고, 기록이 가장 많이 늘어난 때를 골라요.', toolOptions: { type: 'line', mode: 'read', title: '민지가 9차시에 박에 맞춘 마디 수(8마디 중)', unit: '마디', xLabel: '연습', data: [['1회', 3], ['2회', 6], ['3회', 7]], question: '가장 많이 늘어난 때는?', choices: ['1회→2회', '2회→3회'] }, target: { pick: 0 }, difficulty: 0.25,
                  conclude: '선이 가장 가파르게 올라간 곳이 가장 많이 늘어난 때예요. 그때 한 연습을 떠올려 봐요.' },
                { prompt: '준호의 3회 연습 기록은 1회 연습보다 몇 번 많은지 그래프를 읽고 써요.', toolOptions: { type: 'bar', mode: 'read', title: '준호가 5차시에 8박 동작을 끝까지 해낸 횟수', unit: '번', xLabel: '연습', data: [['1회 연습', 2], ['2회 연습', 4], ['3회 연습', 5]], question: '3회 연습은 1회 연습보다 몇 번 많나요?' }, target: { value: 3 }, levels: { challenge: { prompt: '준호가 1회부터 3회 연습까지 끝까지 해낸 횟수는 모두 몇 번인지 그래프를 읽고 더해 써요.', toolOptions: { question: '세 번의 연습에서 모두 몇 번 해냈나요?' }, target: { value: 11 } } }, difficulty: 0.2 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 모둠 발표하고 관객으로 보기', minutes: 19, tool: 'timer',
              task: '모둠마다 5분 동안 8박 동작을 맞추어 연습하고(박이 어긋난 곳은 천천히), 발표 차례를 정해 모둠 리듬 표현을 보여 줘요. 다른 모둠 발표를 볼 때는 관객 약속을 지키고, 끝나면 발표자와 관객으로서 점검해요.',
              teacher: '"시작 자세와 끝 자세가 있으면 보는 사람이 언제 시작하고 끝나는지 알아요." 발표 중 박이 어긋나도 멈추지 말고 이어 가게 한다. 관객 모둠은 센 박에 맞춰 조용히 무릎을 친다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '모둠 발표 차례대로 카드를 놓아요.', toolOptions: { cards: ['끝 자세로 멈추기', '관객에게 인사하기', '8박 동작 두 번 하기', '시작 자세 잡기', '고개 숙여 마치는 인사'] }, target: { order: ['관객에게 인사하기', '시작 자세 잡기', '8박 동작 두 번 하기', '끝 자세로 멈추기', '고개 숙여 마치는 인사'] }, levels: { easy: { state: { order: ['관객에게 인사하기', '끝 자세로 멈추기', '8박 동작 두 번 하기', '시작 자세 잡기', '고개 숙여 마치는 인사'] } }, challenge: { prompt: '모둠 발표 차례대로 카드를 놓아요. 무대로 나오는 것부터 시작해 자리로 돌아가는 것까지 놓아요.', toolOptions: { cards: ['끝 자세로 멈추기', '관객에게 인사하기', '8박 동작 두 번 하기', '시작 자세 잡기', '고개 숙여 마치는 인사', '자리로 조용히 돌아가기', '발표 자리로 걸어 나가기'] }, target: { order: ['발표 자리로 걸어 나가기', '관객에게 인사하기', '시작 자세 잡기', '8박 동작 두 번 하기', '끝 자세로 멈추기', '고개 숙여 마치는 인사', '자리로 조용히 돌아가기'] } } }, difficulty: 0.2,
                  hints: ['발표는 관객과 만나는 일로 열고 닫아요. 동작은 준비하는 자세와 마무리하는 자세 사이에 들어가요.', '인사 카드 두 장이 각각 처음과 끝 가운데 어디에 오는지 먼저 정해 보세요.'] },
                { prompt: '발표를 마치고 발표자로서 해낸 것을 표시해요.', target: { selfCheck: ['시작 자세와 끝 자세를 분명히 했어요', '박이 어긋나도 멈추지 않고 이어 갔어요', '모둠 친구와 박을 맞췄어요'] }, difficulty: 0.1 },
                { prompt: '다른 모둠 발표를 보고 관객으로서 해낸 것을 표시해요.', target: { selfCheck: ['발표하는 동안 조용히 보았어요', '센 박에 맞춰 무릎을 쳐 주었어요', '끝난 뒤 손뼉으로 응원했어요'] }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"처음 1차시와 지금, 내 리듬 동작은 무엇이 달라졌나요?" 그래프에서 늘어난 때와 그때의 연습을 이어서 말하게 한다. 다음 시간부터는 도구를 들고 움직인다고 예고한다.',
            exitTicket: [
              { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '지아가 9차시에 박에 맞춘 마디 수(8마디 중)', unit: '마디', xLabel: '연습', data: [['1회', 4], ['2회', 4], ['3회', 7]], question: '기록이 그대로였던 때는?', choices: ['1회→2회', '2회→3회'] }, prompt: '지아의 연습 기록 막대그래프를 보고 기록이 그대로였던 때를 골라요.', target: { pick: 0 }, difficulty: 0.2 },
              { type: 'short', prompt: '1차시와 지금, 내 리듬 동작에서 달라진 점을 한 줄로 쓰세요.' },
              { type: 'mood', prompt: '모둠 발표를 마친 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '나의 리듬 표현 변화',
          items: [
            { type: 'table', prompt: '앞 차시 활동지에서 내 기록을 옮겨 쓰세요. 줄마다 잰 것이 달라요 — 같은 줄 안에서만 견주어요.', columns: ['남긴 기록', '1회', '2회', '3회'], cells: [['1차시 박에 맞게 멈춘 횟수', '', '', ''], ['5차시 8박 동작을 끝까지 해낸 횟수', '', '', ''], ['9차시 박에 맞은 마디 수(8마디 중)', '', '', '']] },
            { type: 'draw', prompt: '위 표에서 한 줄을 골라 1회·2회·3회 기록을 막대그래프로 그리세요(가로: 연습, 세로: 기록).' },
            { type: 'table', prompt: '모둠 발표 차례대로 1~5 번호를 쓰세요.', columns: ['발표 장면', '차례 번호'], cells: [['끝 자세로 멈추기', ''], ['관객에게 인사하기', ''], ['8박 동작 두 번 하기', ''], ['시작 자세 잡기', ''], ['마치는 인사', '']], answer: '관객에게 인사 1, 시작 자세 2, 8박 동작 3, 끝 자세 4, 마치는 인사 5' },
            { type: 'short', prompt: '기록이 가장 많이 늘어난 때와, 그때 한 연습을 쓰세요.' },
          ],
          easy: {
            note: '막대가 가장 높은 차시가 가장 잘한 때예요. 앞 차시와 견주어 봐요.',
            items: [
              { type: 'table', prompt: '5차시 활동지를 보고 내 기록을 쓰세요.', columns: ['기록', '1회 연습', '3회 연습'], cells: [['8박 동작을 끝까지 해낸 횟수', '', '']] },
              { type: 'choice', prompt: '발표를 볼 때 알맞은 것은?', options: ['조용히 본다', '떠든다'], answer: '조용히 본다' },
              { type: 'draw', prompt: '우리 모둠 끝 자세를 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '그래프에 값이 보여 막대 높이를 쉽게 맞추고 읽어요. 첫 막대가 미리 채워져 있어요. 카드 한 장이나 첫 차례가 미리 놓인 문항이 있어요.',
          base: '눈금을 읽어 스스로 막대를 맞춰요.',
          challenge: '맞힌 뒤에만 값이 보이고, 틀려도 어느 항목이 틀렸는지 알려 주지 않아 눈금을 꼼꼼히 읽어요. 더 긴 차례나 더해 읽는 문항으로 바뀌어요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 친구 기록과 견주어 위축된다 → 한 사람의 변화만 읽는다. ② 꺾은선에서 값이 큰 때를 "많이 늘어난 때"로 고른다 → 앞 차시와의 차이를 본다. ③ 발표 중 박이 어긋나면 멈춘다 → 이어 가는 것도 발표 약속이다. 4학년 수학 막대·꺾은선그래프와 이어진다.',
      }),
      // ───────────────────────── 11 ─────────────────────────
      L(11, {
        title: '줄·천·후프를 흔들어 생기는 모양 견주기',
        objective: '줄은 선, 천은 면, 후프는 고리 모양을 만든다는 것을 흔들어 보며 견주어 말하고, 도구를 안전하게 다루는 방법을 고를 수 있다.',
        illustration: art('children waving a long rope, a pastel scarf and a hula hoop in a gym, each tool drawing a wavy line, a billowing sail and a rolling ring', [
          { motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'wave', x: 120, y: 200 }, { motif: 'hills', y: 214 },
          { motif: 'cloud', x: 250, y: 60 }, { motif: 'leaf', x: 380, y: 190 },
          { motif: 'text', x: 240, y: 132, text: '줄은 선, 천은 면', size: 24 },
        ]),
        safety: [TOOL, SPACE, TOOLBACK],
        stages: stages(
          {
            teacher: '교사가 줄과 천을 차례로 흔들어 보인다. "줄을 흔들 때와 천을 흔들 때 생긴 모양이 어떻게 다른가요?" 줄은 구불구불한 선, 천은 펄럭이는 넓은 면이 생긴다는 대답을 끌어낸다. 이어 "도구를 크게 휘두를수록 멋진 표현일까요?"를 묻고 대답을 칠판에 적어 둔다.',
            student: '줄과 천을 흔들 때 생긴 모양을 보고, 무엇이 닮았는지 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 도구가 만드는 모양 나누기', minutes: 14, tool: 'mindmap',
              task: '모둠마다 줄·천·후프를 하나씩 들고 흔들어 본 뒤, 모양 카드를 도구별로 나누어요.',
              teacher: '"줄이 만드는 모양은 가늘고 길어요. 천은 넓어요." 큰 원은 줄로도 후프로도 될 수 있어 헷갈려하면 "줄은 원을 그리는 선, 후프는 이미 동그란 고리"라고 짚는다. 도구는 차례로 바꾸어 쓴다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '흔들어 생긴 모양 카드를 줄과 천 가지로 나누어요.', toolOptions: { topic: '흔들면 생기는 모양', slots: ['줄', '천'], cards: ['뱀처럼 구불구불한 선', '바람에 부푼 돛 모양', '바닥을 기는 작은 물결', '머리 위로 둥실 뜨는 지붕'] }, target: { sort: { 줄: ['뱀처럼 구불구불한 선', '바닥을 기는 작은 물결'], 천: ['바람에 부푼 돛 모양', '머리 위로 둥실 뜨는 지붕'] } }, levels: { easy: { state: { at: { '뱀처럼 구불구불한 선': 0 } } }, challenge: { prompt: '흔들어 생긴 모양 카드를 줄과 천 가지로 나누어요. 줄과 천이 만들 수 없는 모양은 남겨요.', toolOptions: { cards: ['뱀처럼 구불구불한 선', '바람에 부푼 돛 모양', '바닥을 기는 작은 물결', '머리 위로 둥실 뜨는 지붕', '바닥에 통통 튀는 공'] } } }, difficulty: 0.15 },
                { prompt: '훌라후프 가지를 더해 모양 카드를 세 도구로 나누어요.', toolOptions: { topic: '도구와 모양', slots: ['줄', '천', '훌라후프'], cards: ['공중에 그리는 8자 선', '넓게 펄럭이는 파도', '바닥을 굴러가는 바퀴', '몸 둘레를 도는 고리', '얼굴을 가렸다 여는 막'] }, target: { sort: { 줄: ['공중에 그리는 8자 선'], 천: ['넓게 펄럭이는 파도', '얼굴을 가렸다 여는 막'], 훌라후프: ['바닥을 굴러가는 바퀴', '몸 둘레를 도는 고리'] } }, levels: { challenge: { prompt: '훌라후프 가지를 더해 모양 카드를 세 도구로 나누어요. 세 도구를 움직여 만들 수 없는 모양은 남겨요.', toolOptions: { cards: ['공중에 그리는 8자 선', '넓게 펄럭이는 파도', '바닥을 굴러가는 바퀴', '몸 둘레를 도는 고리', '얼굴을 가렸다 여는 막', '꼼짝 않고 서 있는 기둥'] } } }, difficulty: 0.25 },
                { prompt: '나타낼 대상과 가장 어울리는 도구를 이어요.', toolOptions: { mode: 'match', topic: '무엇으로 나타낼까?', slots: [{ id: 'snake', label: '풀숲을 기는 뱀' }, { id: 'sea', label: '넘실대는 바다' }, { id: 'wheel', label: '굴러가는 수레바퀴' }], cards: ['줄', '천', '훌라후프'] }, target: { match: { snake: '줄', sea: '천', wheel: '훌라후프' } }, levels: { easy: { state: { at: { '줄': 0 } } } }, difficulty: 0.15,
                  conclude: '줄은 선, 천은 넓은 면, 후프는 동그란 고리를 만들어요. 나타낼 모양에 맞는 도구를 골라요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 도구를 다룰 때 이럴 땐 어떻게?', minutes: 12, tool: 'emotion',
              task: '도구를 흔들다 생길 수 있는 상황에서 어떻게 할지 골라요. 고른 방법을 모둠이 도구를 들고 직접 해 봐요.',
              teacher: '"크게 휘두르면 멋있어 보이지만, 모양은 오히려 흐트러져요." 내 둘레 안에서 크기를 정해야 모양이 또렷하다는 것을 직접 견주어 보인다. 줄을 목에 감거나 천으로 친구 얼굴을 덮는 장난은 바로 멈추게 한다.',
              levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '줄을 머리 위로 크게 돌리는데 옆 친구가 가까이 왔어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '줄을 머리 위로 크게 돌리는데 옆 친구가 가까이 다가왔어요.', choices: [{ id: 'faster', text: '더 세게 돌려 친구가 피하게 해요', result: '줄이 친구 팔에 맞았어요.', mood: '걱정', why: '세게 돌리면 친구가 다쳐요.' }, { id: 'small', text: '줄을 작게 줄이고 멈춰요', result: '친구가 지나간 뒤 다시 돌렸어요.', mood: '편안함' }, { id: 'close', text: '눈을 감고 계속 돌려요', result: '누가 오는지 몰라 부딪혔어요.', mood: '놀람', why: '눈으로 둘레를 봐야 해요.' }] }, target: { choice: 'small' }, levels: { easy: { toolOptions: { choices: [{ id: 'faster', text: '더 세게 돌려 친구가 피하게 해요', result: '줄이 친구 팔에 맞았어요.', mood: '걱정', why: '세게 돌리면 친구가 다쳐요.' }, { id: 'small', text: '줄을 작게 줄이고 멈춰요', result: '친구가 지나간 뒤 다시 돌렸어요.', mood: '편안함' }] } } }, difficulty: 0.1 },
                { prompt: '천을 흔들다 바닥에 끌려 친구 발에 밟혔어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '천을 흔들다 끝이 바닥에 끌려 친구 발에 밟혔어요.', choices: [{ id: 'pull', text: '세게 잡아당겨 빼요', result: '친구가 미끄러져 넘어질 뻔했어요.', mood: '놀람', why: '밟힌 채 당기면 친구가 넘어져요.' }, { id: 'short', text: '멈추고 천을 짧게 쥐어 다시 해요', result: '천이 바닥에 닿지 않고 펄럭였어요.', mood: '편안함' }, { id: 'drop', text: '천을 그냥 바닥에 두고 가요', result: '다른 친구가 밟고 미끄러졌어요.', mood: '걱정', why: '바닥에 둔 천은 미끄러워요.' }] }, target: { choice: 'short' }, difficulty: 0.15 },
                { prompt: '친구가 "도구는 크게 휘두를수록 멋져"라고 해요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '친구가 "도구는 크게 휘두를수록 멋져"라며 강당 끝까지 줄을 휘둘러요.', choices: [{ id: 'same', text: '나도 더 크게 휘둘러요', result: '줄이 엉키고 모양이 흐트러졌어요.', mood: '속상함', why: '크게만 휘두르면 모양이 흐트러지고 위험해요.' }, { id: 'size', text: '모양이 잘 보이게 내 둘레 안에서 크기를 정하자고 말해요', result: '또렷한 물결이 생겼어요.', mood: '뿌듯함' }, { id: 'aim', text: '친구 쪽으로 휘둘러 맞서요', result: '줄끼리 부딪혀 둘 다 놀랐어요.', mood: '화남', why: '도구를 친구 쪽으로 향하면 안 돼요.' }] }, target: { choice: 'size' }, difficulty: 0.2,
                  conclude: '도구는 크기보다 모양이 또렷하게 보일 때 멋져요. 내 둘레 안에서 다뤄요.' },
              ],
            },
          ],
          {
            teacher: '도입에서 적어 둔 "크게 휘두를수록 멋지다"로 돌아가 다시 묻는다. "지금은 어떻게 생각하나요?" 출구 1번을 틀린 학생에게 줄과 천을 한 번씩 더 흔들어 보게 한다. 도구는 감아서 바구니에 돌려놓는다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { topic: '어느 도구일까?', slots: ['줄', '천'], cards: ['날아가는 연의 꼬리', '바람에 날리는 커튼', '꼬불꼬불 시냇물', '넓게 펼친 새 날개'] }, prompt: '새 모양 카드를 줄과 천으로 나누어요.', target: { sort: { 줄: ['날아가는 연의 꼬리', '꼬불꼬불 시냇물'], 천: ['바람에 날리는 커튼', '넓게 펼친 새 날개'] } }, difficulty: 0.2 },
              { type: 'choice', prompt: '도구를 쓸 때 가장 알맞은 것은 무엇인가요?', options: ['강당 끝까지 크게 휘두른다', '내 몸 둘레 안에서 모양이 보이게 움직인다', '친구 얼굴 높이로 돌린다'], answer: 1, difficulty: 0.1, explain: '내 둘레 안에서 다뤄야 모양이 또렷하고 안전해요.' },
              { type: 'mood', prompt: '도구를 흔들어 본 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '도구가 만드는 모양',
          items: [
            { type: 'table', prompt: '도구를 흔들어 생긴 모양을 쓰거나 그리세요.', columns: ['도구', '생긴 모양', '나타낼 수 있는 것'], cells: [['줄', '', ''], ['천', '', ''], ['훌라후프', '', '']] },
            { type: 'figure', prompt: '모양 카드를 알맞은 가지에 써 넣으세요.', tool: 'mindmap', wide: true, options: { topic: '흔들면 생기는 모양', printCards: false, slots: ['줄', '천'], cards: ['보기'] }, figures: [{ state: {}, caption: '보기: 구불구불한 선 · 부푼 돛 · 작은 물결 · 둥실 지붕' }], answer: '줄: 구불구불한 선, 작은 물결 / 천: 부푼 돛, 둥실 지붕' },
            { type: 'choice', prompt: '천이 바닥에 끌릴 때 알맞은 행동에 ○ 하세요.', options: ['세게 잡아당긴다', '멈추고 짧게 쥔다', '바닥에 두고 간다'], answer: '멈추고 짧게 쥔다' },
            { type: 'short', prompt: '"도구는 크게 휘두를수록 멋지다"에 대한 내 생각을 쓰세요.' },
          ],
          easy: {
            note: '줄은 가는 선, 천은 넓은 면, 후프는 동그란 고리예요.',
            items: [
              { type: 'choice', prompt: '넘실대는 바다를 나타내기 좋은 도구는?', options: ['천', '줄'], answer: '천' },
              { type: 'choice', prompt: '옆 친구가 가까이 오면?', options: ['줄을 작게 하고 멈춘다', '더 세게 돌린다'], answer: '줄을 작게 하고 멈춘다' },
              { type: 'draw', prompt: '줄이나 천을 흔들 때 생긴 모양을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 맞는 가지에 놓으면 바로 표시되고, 틀린 가지는 까닭을 말해 주고 되돌아와요. 카드 한 장이나 첫 차례가 미리 놓인 문항이 있어요. 상황 판단 보기가 하나 적어요.',
          base: '모두 놓은 뒤 확인해 스스로 고쳐요.',
          challenge: '상황 판단의 결과가 맞힌 뒤에만 보여, 어떻게 될지 먼저 짐작하고 골라요. 그럴듯한 함정 카드가 더해진 문항이 있어요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 도구를 크게 휘두를수록 멋지다고 여긴다 → 작게·크게 두 번 해 보고 어느 쪽 모양이 또렷한지 견준다. ② 큰 원을 줄과 후프 어디에 넣을지 헷갈린다 → 선을 그리는지, 고리 자체인지로 가른다. ③ 줄을 목에 감거나 천으로 얼굴을 덮는 장난 → 바로 멈추고 안전 약속을 다시 읽는다.',
      }),
      // ───────────────────────── 12 ─────────────────────────
      L(12, {
        title: '도구 쓰기 전 몸 풀 곳과 안전 거리 정하기',
        objective: '도구에 따라 먼저 풀어 줄 몸의 부위를 고르고, 도구 길이를 더한 안전 거리를 재어 지키며 도구를 받고 돌려놓을 수 있다.',
        illustration: art('children stretching shoulders and wrists in a circle, each standing inside a chalk circle on the gym floor with a ribbon stick at their feet', [
          { motif: 'sun', x: 410, y: 56, s: 0.7 }, { motif: 'hills', y: 212 }, { motif: 'cloud', x: 110, y: 52 },
          { motif: 'tree', x: 70, y: 212 }, { motif: 'flower', x: 400, y: 214 },
          { motif: 'text', x: 240, y: 132, text: '내 둘레 = 두 팔 + 도구', size: 22 },
        ]),
        safety: [TOOL, '도구를 받고 돌려놓을 때는 한 줄로 서서 차례를 지켜요.', '몸 풀기를 마친 뒤에 도구를 들어요.', TOOLBACK],
        stages: stages(
          {
            teacher: '"지난 시간 줄을 돌리다 친구와 가까워진 적이 있었지요. 줄을 들면 내 둘레는 얼마나 넓어질까요?" 교사가 두 팔을 벌리고, 리본 막대를 들고 다시 벌려 보인다. "도구 길이만큼 둘레가 늘어나요." 또 "리본을 돌리면 몸의 어디를 많이 쓸까요?"를 물어 몸 풀기와 이어 준다.',
            student: '두 팔을 벌려 내 둘레를 재어 보고, 도구를 들면 얼마나 넓어지는지 짐작해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 도구마다 풀어 줄 곳 고르기', minutes: 12, tool: 'body',
              task: '도구를 쓸 때 많이 쓰는 몸의 부위를 골라 눌러요. 고른 부위를 모둠이 함께 10초씩 풀어 줘요.',
              teacher: '"리본을 돌릴 때 팔의 어디가 움직이나요? 직접 돌려 보세요." 모든 부위를 다 고르는 학생에게 "이 도구에서 가장 많이 쓰는 곳"을 다시 묻는다. 고른 뒤에는 그 부위 풀기를 실제로 한다.',
              levels: { easy: { readout: true }, base: {}, challenge: { readout: false } },
              items: [
                { prompt: '리본 막대를 크게 돌리기 전에 풀어 줄 곳 두 군데를 골라요.', toolOptions: { mode: 'parts', parts: ['목', '어깨', '손목', '허리', '무릎', '발목'] }, target: { parts: ['어깨', '손목'] }, levels: { easy: { toolOptions: { parts: ['목', '어깨', '손목', '무릎'] } }, challenge: { prompt: '리본 막대를 크게 돌리며 몸도 함께 빙 돌 때 풀어 줄 곳 세 군데를 골라요.', target: { parts: ['어깨', '손목', '허리'] } } }, difficulty: 0.15 },
                { prompt: '천을 들고 뛰어오르며 펄럭이기 전에 풀어 줄 다리 쪽 두 군데를 골라요.', toolOptions: { mode: 'parts', parts: ['목', '어깨', '손목', '허리', '무릎', '발목'] }, target: { parts: ['무릎', '발목'] }, difficulty: 0.2 },
                { prompt: '훌라후프를 몸통으로 돌리기 전에 가장 많이 쓰는 곳 한 군데를 골라요.', toolOptions: { mode: 'parts', parts: ['목', '어깨', '손목', '허리', '무릎', '발목'] }, target: { parts: ['허리'] }, difficulty: 0.2,
                  conclude: '도구마다 많이 쓰는 몸의 부위가 달라요. 그 부위를 먼저 풀어야 다치지 않아요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 안전 거리 재고 도구 주고받기', minutes: 14, tool: 'timer',
              task: '안전 점검을 하고, 도구를 들고 두 팔을 벌렸을 때 내 둘레가 몇 걸음인지 재어 적어요. 도구를 받고 돌려놓는 차례도 세워요.',
              teacher: '"리본을 들고 팔을 벌린 끝에서 친구까지 몇 걸음이 필요할까요?" 걸음으로 직접 재게 한다. 도구가 길수록 걸음 수가 늘어나는지 견주어 본다. 도구 받기는 한 줄로, 돌려놓기는 감아서.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '리본 막대를 쓰기 전에 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['막대 끝이 친구 쪽을 향하지 않아요', '내 둘레에 도구를 돌릴 공간이 있어요', '리본이 엉킨 곳이 없어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '도구를 들고 팔을 벌린 채 옆 친구와 부딪히지 않는 거리를 걸음으로 재어 적어요.', toolOptions: { fields: [{ label: '줄', unit: '걸음' }, { label: '천', unit: '걸음' }, { label: '훌라후프', unit: '걸음' }] }, target: { records: true }, levels: { challenge: { toolOptions: { fields: [{ label: '줄', unit: '걸음' }, { label: '천', unit: '걸음' }, { label: '훌라후프', unit: '걸음' }, { label: '리본 막대', unit: '걸음' }] } } }, difficulty: 0.2 },
                { prompt: '도구를 받아 쓰고 돌려놓는 차례대로 카드를 놓아요.', toolOptions: { cards: ['바구니에 돌려놓기', '한 줄로 서서 받기', '도구를 감아 정리하기', '제자리에서 도구 살피기', '표현 활동하기'] }, target: { order: ['한 줄로 서서 받기', '제자리에서 도구 살피기', '표현 활동하기', '도구를 감아 정리하기', '바구니에 돌려놓기'] }, levels: { easy: { state: { order: ['한 줄로 서서 받기', '바구니에 돌려놓기', '도구를 감아 정리하기', '제자리에서 도구 살피기', '표현 활동하기'] } } }, difficulty: 0.2,
                  hints: ['도구를 받는 때, 쓰는 때, 돌려주는 때로 크게 나누어 보세요. 쓰기 전과 돌려주기 전에 하는 일이 하나씩 있어요.', '살피기는 쓰기 전과 뒤 가운데 언제 할지, 감기는 돌려놓기 전과 뒤 가운데 언제 할지 견주어 보세요.'] },
              ],
            },
          ],
          {
            teacher: '"줄·천·후프 가운데 안전 거리가 가장 길었던 도구는 무엇이었나요? 왜 그럴까요?" 도구 길이와 거리를 이어 말하게 한다. 출구 1번을 틀린 학생에게는 그 동작을 직접 해 보며 어디가 움직이는지 느끼게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'body', options: { mode: 'parts', parts: ['목', '어깨', '손목', '허리', '무릎', '발목'] }, prompt: '천을 머리 위로 크게 흔들기 전에 풀어 줄 곳 두 군데를 골라요.', target: { parts: ['어깨', '손목'] }, difficulty: 0.2 },
              { type: 'choice', prompt: '도구를 들었을 때 안전 거리는 어떻게 되나요?', options: ['두 팔 거리와 같다', '도구 길이만큼 더 늘어난다', '줄어든다'], answer: 1, difficulty: 0.15, explain: '도구 길이만큼 내 둘레가 넓어지니 거리도 늘려요.' },
              { type: 'mood', prompt: '안전 거리를 재 본 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '몸 풀기와 안전 거리',
          items: [
            { type: 'table', prompt: '도구마다 먼저 풀어 줄 곳을 쓰세요.', columns: ['도구 동작', '풀어 줄 곳'], cells: [['리본 막대 돌리기', ''], ['천 들고 뛰어오르기', ''], ['훌라후프 몸통 돌리기', '']] },
            { type: 'table', prompt: '내가 잰 안전 거리를 쓰세요.', columns: ['도구', '안전 거리(걸음)'], cells: [['맨손', ''], ['줄', ''], ['천', ''], ['훌라후프', '']] },
            { type: 'table', prompt: '도구를 받아 쓰고 돌려놓는 차례대로 1~5 번호를 쓰세요.', columns: ['할 일', '차례 번호'], cells: [['바구니에 돌려놓기', ''], ['한 줄로 서서 받기', ''], ['도구를 감아 정리하기', ''], ['제자리에서 도구 살피기', ''], ['표현 활동하기', '']], answer: '받기 1, 살피기 2, 활동 3, 감기 4, 돌려놓기 5' },
            { type: 'short', prompt: '도구가 길수록 안전 거리를 더 두어야 하는 까닭을 쓰세요.' },
          ],
          easy: {
            note: '도구를 들면 내 팔이 길어진 것과 같아요. 그만큼 더 떨어져요.',
            items: [
              { type: 'choice', prompt: '리본을 돌리기 전에 풀어 줄 곳은?', options: ['어깨', '발가락'], answer: '어깨' },
              { type: 'choice', prompt: '도구를 받을 때는?', options: ['한 줄로 서서', '한꺼번에 몰려서'], answer: '한 줄로 서서' },
              { type: 'draw', prompt: '도구를 들고 팔을 벌린 내 둘레를 동그라미로 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '누른 부위 이름이 바로 보여 고른 것을 확인하기 쉬워요. 고를 부위가 네 곳으로 줄어요. 카드 한 장이나 첫 차례가 미리 놓인 문항이 있어요.',
          base: '부위 이름 없이 몸 그림에서 자리를 찾아 골라요.',
          challenge: '읽기 글자가 사라져 몸 그림만 보고 고르고, 잰 거리로 도구마다 차이를 셈해 말해요. 더 긴 차례나 더해 읽는 문항으로 바뀌어요. 기록판에 차이·합계를 셈해 적는 칸이 더해져요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 몸 풀기를 건너뛰고 도구부터 든다 → 몸 풀기를 마친 모둠부터 도구를 받는다. ② 맨손 거리와 도구 거리를 같게 둔다 → 도구 끝까지 재게 한다. ③ 도구를 아무렇게나 바구니에 던진다 → 감아서 정리해야 다음 시간에 엉키지 않는다.',
      }),
      // ───────────────────────── 13 ─────────────────────────
      L(13, {
        title: '신문지·풍선·탱탱볼로 새 움직임 찾기',
        objective: '신문지·풍선·탱탱볼의 성질을 견주어 각 도구로 나타낼 수 있는 대상을 고르고, 도구마다 새 움직임을 찾아 기록할 수 있다.',
        illustration: art('children floating balloons, bouncing small balls and waving folded newspaper like wings in a bright classroom gym', [
          { motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'cloud', x: 100, y: 54 }, { motif: 'hills', y: 212 },
          { motif: 'bird', x: 300, y: 84 }, { motif: 'star', x: 180, y: 90, s: 0.6 },
          { motif: 'text', x: 240, y: 134, text: '둥실 · 통통 · 바스락', size: 24 },
        ]),
        safety: [TOOL, '풍선은 입으로 물거나 발로 세게 차지 않고, 터지면 조각을 바로 주워 선생님께 드려요.', '탱탱볼은 바닥으로만 튀기고 친구 쪽으로 던지지 않아요.', SPACE],
        stages: stages(
          {
            teacher: '풍선을 위로 톡 띄우고, 탱탱볼을 바닥에 튀기고, 신문지를 펼쳤다 구겨 보인다. "세 도구는 어떻게 움직였나요? 줄·천·후프와는 무엇이 다른가요?" 같은 신문지도 펼치면 날개, 구기면 공처럼 쓸 수 있다는 것을 짚는다. 풍선 알레르기가 있는 학생은 신문지 공으로 바꾼다.',
            student: '세 도구가 움직인 모습을 보고 "둥실", "통통", "바스락" 가운데 어울리는 말을 붙여 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 도구의 성질과 나타낼 대상 잇기', minutes: 12, tool: 'mindmap',
              task: '세 도구를 직접 만져 보고 성질을 이은 뒤, 나타낼 대상을 도구별로 나누어요.',
              teacher: '"눈송이는 왜 풍선과 어울릴까요? 천천히 내려오니까요." 대상과 도구를 이을 때 까닭을 함께 말하게 한다. 같은 대상을 다른 도구로 나타내도 까닭이 있으면 받아들인다고 알려 준다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '도구의 성질을 알맞은 도구와 이어요.', toolOptions: { mode: 'match', topic: '도구의 성질', slots: [{ id: 'float', label: '천천히 떠올랐다 내려와요' }, { id: 'bounce', label: '바닥에 닿으면 다시 튀어 올라요' }, { id: 'fold', label: '펼치거나 구겨 모양을 바꿔요' }], cards: ['풍선', '탱탱볼', '신문지'] }, target: { match: { float: '풍선', bounce: '탱탱볼', fold: '신문지' } }, levels: { easy: { state: { at: { '풍선': 0 } } } }, difficulty: 0.1 },
                { prompt: '나타낼 대상을 가장 어울리는 도구 가지로 나누어요.', toolOptions: { topic: '무엇을 나타낼까?', slots: ['풍선', '탱탱볼', '신문지'], cards: ['천천히 내리는 눈송이', '튀어 오르는 빗방울', '접었다 펴는 나비 날개', '바람에 떠가는 비눗방울', '폴짝 뛰는 개구리', '오므렸다 피는 꽃잎'] }, target: { sort: { 풍선: ['천천히 내리는 눈송이', '바람에 떠가는 비눗방울'], 탱탱볼: ['튀어 오르는 빗방울', '폴짝 뛰는 개구리'], 신문지: ['접었다 펴는 나비 날개', '오므렸다 피는 꽃잎'] } }, levels: { easy: { state: { at: { '천천히 내리는 눈송이': 0 } } } }, difficulty: 0.25 },
                { prompt: '풍선을 쓸 때 지킬 점만 골라요.', toolOptions: { mode: 'pick', topic: '풍선 약속', cards: ['풍선을 입으로 물지 않아요', '발로 세게 차지 않아요', '터지면 조각을 바로 주워요', '친구 얼굴 앞에서 터뜨려요'] }, target: { pick: ['풍선을 입으로 물지 않아요', '발로 세게 차지 않아요', '터지면 조각을 바로 주워요'] }, levels: { challenge: { prompt: '풍선을 쓸 때 지킬 점만 골라요. 그럴듯하지만 위험한 카드가 섞여 있어요.', toolOptions: { cards: ['풍선을 입으로 물지 않아요', '발로 세게 차지 않아요', '터지면 조각을 바로 주워요', '친구 얼굴 앞에서 터뜨려요', '풍선을 손톱으로 꾹 눌러 봐요'] } } }, difficulty: 0.1 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 도구를 바꾸며 움직임 찾기', minutes: 14, tool: 'timer',
              task: '모둠이 세 도구를 차례로 바꾸며 움직임을 찾아요. 탐색 계획을 맞추고, 도구마다 찾은 움직임 수를 적고 점검해요.',
              teacher: '"도구 하나에 40초, 바꾸는 데 20초예요." 같은 움직임을 되풀이하는 모둠에는 "높이를 바꾸면? 짝과 함께라면?" 하고 묻는다. 찾은 움직임은 모둠 칠판에 낱말로 적어 둔다.',
              levels: { easy: { workStep: 10, restStep: 10, showTotal: true }, base: { showTotal: true }, challenge: { showTotal: false } },
              items: [
                { prompt: '세 도구를 하나씩 40초 동안 탐색하고, 도구를 바꾸는 동안 20초 쉬도록 맞춰요.', toolOptions: { plan: { work: 30, rest: 10, rounds: 2 } }, target: { plan: { work: 40, rest: 20, rounds: 3 } }, difficulty: 0.25 },
                { prompt: '도구마다 우리 모둠이 찾은 움직임 수를 적어요.', toolOptions: { fields: [{ label: '신문지', unit: '가지' }, { label: '풍선', unit: '가지' }, { label: '탱탱볼', unit: '가지' }] }, target: { records: true }, difficulty: 0.15 },
                { prompt: '탐색을 마치고 해낸 것을 점검 목록에 표시해요.', target: { selfCheck: ['도구마다 움직임을 두 가지 넘게 찾았어요', '높이나 빠르기를 바꾸어 보았어요', '도구를 친구 쪽으로 던지지 않았어요'] }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"오늘 찾은 움직임 가운데 가장 새로웠던 것은 무엇인가요?" 모둠마다 하나씩 보여 준다. 다음 시간에는 리본 막대로 8박 흐름을 만든다고 알린다. 풍선은 바람을 빼서, 신문지는 펴서 모은다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { topic: '어떤 도구일까?', slots: ['풍선', '탱탱볼', '신문지'], cards: ['통통 튀는 공놀이 토끼', '바스락 접히는 부채', '둥실 떠가는 열기구'] }, prompt: '새 대상 카드를 어울리는 도구로 나누어요.', target: { sort: { 풍선: ['둥실 떠가는 열기구'], 탱탱볼: ['통통 튀는 공놀이 토끼'], 신문지: ['바스락 접히는 부채'] } }, difficulty: 0.2 },
              { type: 'choice', prompt: '탱탱볼로 움직일 때 지킬 점은 무엇인가요?', options: ['친구 쪽으로 던진다', '바닥으로만 튀긴다', '세게 차서 멀리 보낸다'], answer: 1, difficulty: 0.1, explain: '탱탱볼은 바닥으로만 튀겨야 친구가 다치지 않아요.' },
              { type: 'short', prompt: '오늘 찾은 움직임 가운데 가장 마음에 든 것을 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '새 도구로 움직여요',
          items: [
            { type: 'table', prompt: '도구마다 성질과 찾은 움직임을 쓰세요.', columns: ['도구', '성질', '찾은 움직임'], cells: [['신문지', '', ''], ['풍선', '', ''], ['탱탱볼', '', '']] },
            { type: 'choice', prompt: '"천천히 내리는 눈송이"를 나타내기 가장 좋은 도구에 ○ 하세요.', options: ['풍선', '탱탱볼', '신문지'], answer: '풍선' },
            { type: 'check', prompt: '오늘 지킨 약속에 ✓ 하세요.', options: ['풍선을 입으로 물지 않았어요', '탱탱볼을 바닥으로만 튀겼어요', '도구를 정리해 돌려놓았어요'] },
            { type: 'draw', prompt: '신문지로 나타내고 싶은 것을 하나 정해 그리세요.' },
          ],
          easy: {
            note: '풍선은 둥실, 탱탱볼은 통통, 신문지는 바스락 접혀요.',
            items: [
              { type: 'choice', prompt: '바닥에 닿으면 튀어 오르는 도구는?', options: ['탱탱볼', '풍선'], answer: '탱탱볼' },
              { type: 'choice', prompt: '풍선이 터지면?', options: ['조각을 바로 줍는다', '그냥 둔다'], answer: '조각을 바로 줍는다' },
              { type: 'draw', prompt: '풍선으로 나타낼 수 있는 것을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 맞는 가지에 놓으면 바로 표시되고, 타이머를 10초씩 맞춰요. 카드 한 장이나 첫 차례가 미리 놓인 문항이 있어요.',
          base: '모두 놓은 뒤 스스로 고치고, 전체 시간을 화면에서 봐요.',
          challenge: '전체 시간을 스스로 셈해 확인하고, 도구마다 높이·빠르기를 바꾼 움직임을 더 찾아요. 그럴듯한 함정 카드가 더해진 문항이 있어요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 같은 대상에 정답 도구가 하나뿐이라고 여긴다 → 까닭이 있으면 다른 도구도 된다고 열어 둔다(판정은 가장 어울리는 성질 기준). ② 풍선·탱탱볼을 놀이로만 쓴다 → "무엇을 나타냈나요?"를 묻는다. ③ 풍선 터지는 소리에 놀라 넘어진다 → 강당 가운데에서 쓰고 벽 쪽으로 몰리지 않게 한다.',
      }),
      // ───────────────────────── 14 ─────────────────────────
      L(14, {
        title: '리본 막대와 몸짓으로 8박 흐름 만들기',
        objective: '리본 막대 동작을 박 길이로 나타내 8박 흐름을 짜고, 몸짓과 리본이 같은 방향으로 움직이게 이어서 보일 수 있다.',
        illustration: art('a child dancing with a long pastel ribbon stick, the ribbon drawing big circles and waves around her in eight flowing beats', [
          { motif: 'sun', x: 410, y: 56, s: 0.7 }, { motif: 'hills', y: 212 }, { motif: 'wave', x: 150, y: 120 },
          { motif: 'cloud', x: 100, y: 52 }, { motif: 'flower', x: 400, y: 214 },
          { motif: 'text', x: 240, y: 200, text: '큰 원 · 큰 원 · 물결 · 감기', size: 20 },
        ]),
        safety: [TOOL, SPACE, '리본 막대 끝은 늘 바닥이나 하늘 쪽을 향하게 쥐어요.', TOOLBACK],
        stages: stages(
          {
            teacher: '교사가 리본 막대로 "큰 원(2박) 큰 원(2박) 작은 흔들기 넷(4박)"을 보이며 박을 센다. "리본 동작마다 걸리는 박이 달라요. 큰 원은 몇 박이었나요?" 이어 팔만 돌리고 몸은 가만히 선 모습과, 무릎을 굽히며 몸도 함께 도는 모습을 견주어 보인다. "어느 쪽이 하나의 흐름처럼 보였나요?"',
            student: '선생님의 리본 동작을 보며 동작마다 몇 박씩 걸리는지 손가락으로 세어 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 리본 동작을 박 길이로 짜기', minutes: 12, tool: 'keyboard',
              task: '큰 원 = 2분음표(2박), 작은 흔들기 = 4분음표(1박), 긴 나선 = 점2분음표(3박), 멈춤 = 쉼표예요. 리본 흐름을 블록으로 놓은 뒤 그대로 해 봐요.',
              teacher: '"큰 원을 두 박에 맞추려면 팔을 얼마나 천천히 돌려야 할까요?" 리본을 너무 빨리 돌려 박보다 앞서는 학생에게 박을 소리 내어 세게 한다. 블록을 놓은 학생부터 제자리에서 해 본다.',
              levels: {
                easy: Object.assign({ blocks: ['q', 'h', 'dh', 'qr'], showBeats: true }, R1),
                base: Object.assign({ blocks: ['q', 'h', 'dh', 'qr'] }, R1),
                challenge: Object.assign({ blocks: ['q', 'e', 'h', 'dh', 'qr'] }, R1),
              },
              items: [
                { prompt: '큰 원(2박) 두 번, 작은 흔들기(1박) 네 번으로 된 리본 흐름을 블록으로 놓아요.', target: { rhythm: ['h', 'h', 'q', 'q', 'q', 'q'] }, difficulty: 0.15 },
                { prompt: '긴 나선(3박)이 들어간 리본 흐름을 듣고 블록으로 놓아요.', toolOptions: { pattern: ['q', 'q', 'h', 'dh', 'qr'] }, target: { rhythm: ['q', 'q', 'h', 'dh', 'qr'] }, difficulty: 0.25 },
                { prompt: '나만의 8박 리본 흐름을 지어요. 큰 원을 넣고, 멈춤으로 한 번 쉬어 주며 두 마디 모두 4박을 맞춰요.', target: { beats: true, use: ['h'], rests: 1 }, difficulty: 0.3,
                  conclude: '동작마다 걸리는 박을 정해 두면 리본과 몸이 박에 맞춰 한 흐름으로 이어져요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 몸과 리본을 함께 움직이며 연습하기', minutes: 14, tool: 'timer',
              task: '지은 8박 흐름을 연습해요. 연습 계획을 맞추고, 리본이 엉키지 않고 끝까지 한 횟수를 적은 뒤 점검해요.',
              teacher: '"리본만 움직이나요, 몸도 함께 움직이나요?" 팔만 돌리는 학생에게 큰 원을 그릴 때 무릎을 굽혔다 펴며 몸도 원을 따라가게 한다. 옆 친구와 도구 거리(지난 시간에 잰 걸음)를 지킨다.',
              levels: { easy: { workStep: 10, restStep: 10, showTotal: true }, base: { showTotal: true }, challenge: { showTotal: false, stopwatch: true } },
              items: [
                { prompt: '8박 흐름을 20초 연습하고 10초 쉬기를 5번 되풀이하도록 타이머를 맞춰요.', toolOptions: { plan: { work: 30, rest: 20, rounds: 3 } }, target: { plan: { work: 20, rest: 10, rounds: 5 } }, difficulty: 0.2 },
                { prompt: '연습 다섯 번 가운데 리본이 엉키지 않고 8박 흐름을 끝까지 한 횟수를 첫째·셋째·다섯째 연습 뒤에 적어요.', toolOptions: { fields: ['1회 연습 뒤', '3회 연습 뒤', '5회 연습 뒤'], unit: '번' }, target: { records: true }, difficulty: 0.15 },
                { prompt: '연습을 마치고 해낸 것을 점검 목록에 표시해요.', target: { selfCheck: ['리본과 몸이 같은 방향으로 움직였어요', '8박을 세며 끝까지 이었어요', '옆 친구와 도구 거리를 지켰어요'] }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '짝끼리 서로의 8박 흐름을 한 번씩 보여 준다. "짝의 리본과 몸이 함께 움직였나요?" 출구 1번을 틀린 학생은 큰 원이 몇 박인지 다시 센다. 리본은 막대에 감아 돌려놓는다.',
            exitTicket: [
              { type: 'tool', tool: 'keyboard', options: Object.assign({ blocks: ['q', 'h', 'dh', 'qr'] }, R1), prompt: '긴 나선(3박)과 작은 흔들기(1박)를 번갈아 두 번 하는 흐름을 블록으로 놓아요.', target: { rhythm: ['dh', 'q', 'dh', 'q'] }, difficulty: 0.25 },
              { type: 'choice', prompt: '리본 표현에서 하나의 흐름처럼 보이려면 어떻게 할까요?', options: ['팔만 빠르게 돌린다', '몸도 리본을 따라 함께 움직인다', '리본을 바닥에 끈다'], answer: 1, difficulty: 0.15, explain: '도구만 잘 다루는 것이 아니라 몸짓도 함께 움직여야 해요.' },
              { type: 'mood', prompt: '리본으로 8박 흐름을 만든 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '리본 8박 흐름',
          items: [
            { type: 'figure', prompt: '리본 흐름 블록을 보고, 블록마다 할 리본 동작(큰 원·작은 흔들기·긴 나선·멈춤)을 아래에 쓰세요.', tool: 'keyboard', options: R1, figures: [{ state: { rhythm: ['h', 'q', 'q', 'dh', 'qr'] }, caption: '' }], answer: '큰 원, 작은 흔들기, 작은 흔들기, 긴 나선, 멈춤' },
            { type: 'table', prompt: '내가 지은 8박 리본 흐름을 쓰세요.', columns: ['1~2박', '3~4박', '5~6박', '7~8박'], rows: 1 },
            { type: 'table', prompt: '끝까지 한 횟수를 쓰세요.', columns: ['1회', '2회', '3회', '4회', '5회'], rows: 1 },
            { type: 'choice', prompt: '큰 원을 그릴 때 몸은 어떻게 하면 좋을까요?', options: ['가만히 선다', '무릎을 굽혔다 펴며 원을 따라간다', '눈을 감는다'], answer: '무릎을 굽혔다 펴며 원을 따라간다' },
            { type: 'short', prompt: '"도구만 잘 다루면 몸짓은 신경 쓰지 않아도 된다"에 대한 내 생각을 쓰세요.' },
          ],
          easy: {
            note: '큰 원 = 2박, 작은 흔들기 = 1박, 긴 나선 = 3박이에요.',
            items: [
              { type: 'choice', prompt: '큰 원 두 번은 모두 몇 박인가요?', options: ['2박', '4박'], answer: '4박' },
              { type: 'table', prompt: '끝까지 한 횟수를 쓰세요.', columns: ['1회', '2회', '3회'], rows: 1 },
              { type: 'draw', prompt: '리본이 그린 큰 원과 물결을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '마디마다 박 수가 보이고, 타이머를 10초씩 맞춰요.',
          base: '박 수를 스스로 세어 흐름을 짜고, 전체 시간을 화면에서 봐요.',
          challenge: '8분음표(빠른 흔들기)까지 넣어 흐름을 짜고, 시간 재기로 8박 흐름 한 번의 시간을 재요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 도구만 잘 다루면 몸짓은 신경 쓰지 않아도 된다고 여긴다 → 팔만 돌린 것과 몸도 함께한 것을 짝이 견주어 본다. ② 리본을 너무 빨리 돌려 박보다 앞선다 → 큰 원을 "하나—둘"로 길게 센다. ③ 리본이 엉키면 계속 돌린다 → 멈추고 풀고 다시.',
      }),
      // ───────────────────────── 15 ─────────────────────────
      L(15, {
        title: '훌라후프를 굴리고 지나며 짝과 이어 표현하기',
        objective: '훌라후프 동작을 움직이는 자리에 따라 나누고, 짝과 굴리기·잡기·지나가기·들어 올리기를 차례대로 이어 하나의 장면으로 표현할 수 있다.',
        illustration: art('two children passing a rolling hula hoop to each other, one stepping through it and lifting it high like a rising sun', [
          { motif: 'sun', x: 240, y: 70, s: 1.2 }, { motif: 'hills', y: 212 }, { motif: 'cloud', x: 90, y: 54 },
          { motif: 'tree', x: 60, y: 212 }, { motif: 'tree', x: 420, y: 212, s: 0.9 },
          { motif: 'text', x: 240, y: 160, text: '굴리고, 잡고, 지나고, 들고', size: 22 },
        ]),
        safety: ['후프를 굴릴 때는 짝 쪽 바닥으로만 굴리고, 다른 모둠 쪽으로 보내지 않아요.', '후프를 지나갈 때는 짝이 후프를 단단히 잡은 뒤에 천천히 지나가요.', TOOL, SPACE],
        stages: stages(
          {
            teacher: '교사와 학생 한 명이 후프 하나로 짝 표현을 보인다: 굴려 보내고, 잡고, 몸으로 지나가고, 머리 위로 들어 해를 만든다. "후프가 어디에서 움직였나요? 바닥, 몸 둘레, 머리 위." 이어 "후프만 잘 굴리면 될까요, 우리 몸은 무엇을 했나요?"를 물어 몸짓도 함께 본다.',
            student: '선생님과 친구가 후프로 보인 장면에서 후프가 어디에서 움직였는지 찾아봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 후프 동작 나누고 나타낼 것 고르기', minutes: 12, tool: 'mindmap',
              task: '후프를 직접 굴리고 돌려 본 뒤, 후프 동작을 움직이는 자리로 나누고 나타낼 수 있는 것과 이어요.',
              teacher: '"허리로 돌리기는 바닥일까요, 몸 둘레일까요?" 후프가 어디에 닿아 움직이는지로 가르게 한다. 후프를 위로 던지는 학생이 있으면 멈추게 한다 — 오늘은 던지지 않는다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '후프 동작 카드를 움직이는 자리에 따라 나누어요.', toolOptions: { topic: '후프는 어디서?', slots: ['바닥에서', '몸 둘레에서', '머리 위에서'], cards: ['짝에게 굴려 보내기', '팽이처럼 세워 돌리기', '허리로 돌리기', '몸으로 지나가기', '두 손으로 높이 들기', '머리 위에서 수평으로 돌리기'] }, target: { sort: { 바닥에서: ['짝에게 굴려 보내기', '팽이처럼 세워 돌리기'], '몸 둘레에서': ['허리로 돌리기', '몸으로 지나가기'], '머리 위에서': ['두 손으로 높이 들기', '머리 위에서 수평으로 돌리기'] } }, levels: { easy: { state: { at: { '짝에게 굴려 보내기': 0 } } }, challenge: { prompt: '후프 동작 카드를 움직이는 자리에 따라 나누어요. 위험한 동작 카드는 어느 가지에도 넣지 않아요.', toolOptions: { cards: ['짝에게 굴려 보내기', '팽이처럼 세워 돌리기', '허리로 돌리기', '몸으로 지나가기', '두 손으로 높이 들기', '머리 위에서 수평으로 돌리기', '후프를 친구에게 던지기'] } } }, difficulty: 0.2 },
                { prompt: '후프 동작과 그것으로 나타낼 수 있는 것을 이어요.', toolOptions: { mode: 'match', topic: '후프로 나타내기', slots: [{ id: 'roll', label: '바닥에 굴리기' }, { id: 'spin', label: '세워 돌리기' }, { id: 'lift', label: '머리 위로 들기' }], cards: ['굴러가는 수레바퀴', '빙글빙글 팽이', '떠오르는 해'] }, target: { match: { roll: '굴러가는 수레바퀴', spin: '빙글빙글 팽이', lift: '떠오르는 해' } }, levels: { easy: { state: { at: { '굴러가는 수레바퀴': 0 } } } }, difficulty: 0.15 },
                { prompt: '짝과 후프를 주고받을 때 지킬 점만 골라요.', toolOptions: { mode: 'pick', topic: '후프 약속', cards: ['짝이 준비됐는지 보고 굴려요', '후프를 하늘로 던져요', '지나갈 때 천천히 지나가요', '다른 모둠 쪽으로 세게 굴려요'] }, target: { pick: ['짝이 준비됐는지 보고 굴려요', '지나갈 때 천천히 지나가요'] }, levels: { challenge: { prompt: '짝과 후프를 주고받을 때 지킬 점만 골라요. 재미있어 보이지만 위험한 카드가 섞여 있어요.', toolOptions: { cards: ['짝이 준비됐는지 보고 굴려요', '후프를 하늘로 던져요', '지나갈 때 천천히 지나가요', '다른 모둠 쪽으로 세게 굴려요', '후프 하나에 둘이 들어가 함께 뛰어요'] } } }, difficulty: 0.1 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 짝과 후프 장면 이어 짜기', minutes: 14, tool: 'story',
              task: '짝과 후프로 이어 하는 장면의 차례를 정하고 말풍선을 채운 뒤, 정한 차례대로 짝과 몸으로 해 봐요.',
              teacher: '"굴려 보낸 다음 짝은 무엇을 할까요?" 장면이 끊기지 않게 한 사람의 동작 끝이 다음 사람의 동작 시작이 되게 한다. 짝이 후프를 잡고 있을 때만 지나가게 한다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '짝과 후프를 주고받는 장면을 일어나는 차례대로 놓아요.', toolOptions: { cards: [{ id: 'roll', text: '내가 후프를 굴려 보내요', motif: 'sun' }, { id: 'catch', text: '짝이 굴러온 후프를 잡아요', motif: 'star' }, { id: 'through', text: '짝이 세운 후프로 내가 지나가요', motif: 'cloud' }, { id: 'lift', text: '둘이 함께 후프를 높이 들어요', motif: 'flower' }], slots: 4 }, target: { order: ['roll', 'catch', 'through', 'lift'] }, levels: { easy: { state: { at: { roll: 0 } } }, challenge: { prompt: '짝과 후프를 주고받는 장면을 일어나는 차례대로 놓아요. 안전하지 않은 장면 카드는 남겨요.', toolOptions: { cards: [{ id: 'roll', text: '내가 후프를 굴려 보내요', motif: 'sun' }, { id: 'catch', text: '짝이 굴러온 후프를 잡아요', motif: 'star' }, { id: 'through', text: '짝이 세운 후프로 내가 지나가요', motif: 'cloud' }, { id: 'lift', text: '둘이 함께 후프를 높이 들어요', motif: 'flower' }, { id: 'kick', text: '후프를 발로 차 보내요', motif: 'star' }] } } }, difficulty: 0.15 },
                { prompt: '후프로 나타내는 ‘해의 하루’를 처음·가운데·끝 차례로 놓아요.', toolOptions: { cards: [{ id: 'set', text: '후프를 천천히 내리며 앉아요', motif: 'hills' }, { id: 'rise', text: '후프를 아래에서 위로 들어요', motif: 'sun' }, { id: 'sky', text: '머리 위에서 후프를 옮기며 걸어요', motif: 'cloud' }], slots: ['처음', '가운데', '끝'] }, target: { order: ['rise', 'sky', 'set'] }, levels: { easy: { state: { at: { rise: 0 } } }, challenge: { prompt: '후프로 나타내는 ‘해의 하루’를 처음·가운데·끝 차례로 놓아요. 해의 하루와 상관없는 카드는 남겨요.', toolOptions: { cards: [{ id: 'set', text: '후프를 천천히 내리며 앉아요', motif: 'hills' }, { id: 'rise', text: '후프를 아래에서 위로 들어요', motif: 'sun' }, { id: 'sky', text: '머리 위에서 후프를 옮기며 걸어요', motif: 'cloud' }, { id: 'pass', text: '후프를 짝에게 굴려 보내요', motif: 'leaf' }] } } }, difficulty: 0.2,
                  conclude: '해가 뜨고, 하늘을 지나고, 지는 차례처럼 장면에도 처음·가운데·끝이 있으면 보는 사람이 이야기를 따라가요.' },
                { prompt: '짝과 후프를 주고받을 때 할 말을 말풍선에 넣어요.', toolOptions: { mode: 'fill', cards: ['세 걸음', '한 뼘', '두 손으로 위쪽을', '발로 차서'], slots: [{ id: 'd', who: '민지', motif: 'sun', label: '후프를 굴릴 때 ___ 떨어져 있자.' }, { id: 'c', who: '준호', motif: 'star', label: '굴러온 후프는 ___ 잡을게.' }] }, target: { fill: { d: '세 걸음', c: '두 손으로 위쪽을' } }, difficulty: 0.2 },
              ],
            },
          ],
          {
            teacher: '짝마다 후프 장면을 한 번씩 보여 준다. "후프와 몸이 함께 이야기를 했나요?" 출구 1번을 틀린 학생은 후프가 어디에 닿아 움직이는지 다시 해 보게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { topic: '후프는 어디서?', slots: ['바닥에서', '몸 둘레에서', '머리 위에서'], cards: ['바닥에 눕혀 깡충 들어가기', '목에 걸지 않고 팔로 돌리기', '두 팔로 들어 왕관 만들기'] }, prompt: '새 후프 동작을 움직이는 자리에 따라 나누어요.', target: { sort: { 바닥에서: ['바닥에 눕혀 깡충 들어가기'], '몸 둘레에서': ['목에 걸지 않고 팔로 돌리기'], '머리 위에서': ['두 팔로 들어 왕관 만들기'] } }, difficulty: 0.25 },
              { type: 'choice', prompt: '짝이 세운 후프로 지나갈 때 알맞은 것은 무엇인가요?', options: ['짝이 잡은 뒤 천천히 지나간다', '뛰어서 빨리 지나간다', '후프를 밀며 지나간다'], answer: 0, difficulty: 0.1, explain: '짝이 단단히 잡은 뒤 천천히 지나가야 걸리지 않아요.' },
              { type: 'mood', prompt: '짝과 후프로 표현한 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '후프로 이어 표현하기',
          items: [
            { type: 'table', prompt: '후프 동작을 움직이는 자리에 따라 쓰세요.', columns: ['바닥에서', '몸 둘레에서', '머리 위에서'], rows: 2 },
            { type: 'figure', prompt: '‘해의 하루’ 장면을 처음·가운데·끝 칸에 번호로 쓰세요.', tool: 'story', wide: true, options: { cards: [{ id: 'set', text: '① 후프 내리며 앉기', motif: 'hills' }, { id: 'rise', text: '② 후프 아래→위로', motif: 'sun' }, { id: 'sky', text: '③ 머리 위로 옮기기', motif: 'cloud' }], slots: ['처음', '가운데', '끝'] }, figures: [{ state: {}, caption: '처음 (   ) → 가운데 (   ) → 끝 (   )' }], answer: '② → ③ → ①' },
            { type: 'choice', prompt: '후프를 굴릴 때 짝과의 거리로 알맞은 것에 ○ 하세요.', options: ['한 뼘', '세 걸음', '강당 끝까지'], answer: '세 걸음' },
            { type: 'draw', prompt: '짝과 만든 후프 장면 가운데 한 모습을 그리세요.' },
          ],
          easy: {
            note: '후프가 바닥에 닿는지, 몸에 닿는지, 머리 위에 있는지 보세요.',
            items: [
              { type: 'choice', prompt: '바닥에서 하는 후프 동작은?', options: ['굴려 보내기', '머리 위로 들기'], answer: '굴려 보내기' },
              { type: 'choice', prompt: '떠오르는 해를 나타내는 동작은?', options: ['후프를 높이 든다', '후프를 굴린다'], answer: '후프를 높이 든다' },
              { type: 'draw', prompt: '후프로 만든 해를 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 맞는 자리에 놓으면 바로 표시되고, 틀리면 까닭을 말해 주고 되돌아와요. 카드 한 장이나 첫 차례가 미리 놓인 문항이 있어요.',
          base: '모두 놓은 뒤 확인해 스스로 고쳐요.',
          challenge: '짝 장면 차례를 정한 뒤, 끝 장면을 바꾼 나만의 이야기로 한 번 더 짜서 보여 줘요. 그럴듯한 함정 카드가 더해진 문항이 있어요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 도구만 잘 다루면 몸짓은 신경 쓰지 않아도 된다고 여긴다 → 후프를 굴린 사람의 몸도 굴러가는 바퀴처럼 따라가게 한다. ② 후프를 위로 던진다 → 오늘은 던지기 금지. ③ 짝이 준비되기 전에 굴린다 → "준비?" "응!"을 주고받는다.',
      }),
      // ───────────────────────── 16 ─────────────────────────
      L(16, {
        title: '짝과 천 하나로 파도와 바람 표현하기',
        objective: '짝과 천 한 장의 양 끝을 잡고 높이와 빠르기를 맞추어, 잔잔한 바다에서 거센 파도로 바뀌는 장면을 함께 표현할 수 있다.',
        illustration: art('pairs of children holding the ends of long blue scarves, making calm ripples and tall waves together like an ocean', [
          { motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'wave', x: 120, y: 190 }, { motif: 'wave', x: 330, y: 196 },
          { motif: 'cloud', x: 120, y: 56 }, { motif: 'bird', x: 280, y: 90 },
          { motif: 'text', x: 240, y: 132, text: '잔잔하게 → 거세게', size: 24 },
        ]),
        safety: ['천은 허리에서 머리 높이 사이에서만 흔들고, 친구 얼굴을 덮지 않아요.', '천 밑으로 다른 친구가 지나갈 때는 흔들기를 멈춰요.', SPACE, TOOLBACK],
        stages: stages(
          {
            teacher: '교사와 학생이 천 한 장의 양 끝을 잡고 한 번은 서로 다른 빠르기로, 한 번은 같은 빠르기로 흔든다. "어느 때 파도처럼 보였나요? 왜 그럴까요?" 짝과 높이·빠르기를 맞춰야 천이 하나의 물결이 된다는 것을 짚는다. "천이 떨어지면 누구 탓일까요?"도 물어 둔다.',
            student: '두 번 흔든 천 가운데 어느 쪽이 파도처럼 보였는지 골라 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 짝과 맞추기 — 이럴 땐 어떻게?', minutes: 12, tool: 'emotion',
              task: '짝과 천을 함께 흔들다 생길 수 있는 상황에서 어떻게 할지 골라요. 고른 대로 짝과 천을 들고 해 봐요.',
              teacher: '"짝의 손 높이를 보며 흔들어요." 혼자 앞서 흔드는 학생에게 "하나, 둘" 소리를 함께 내게 한다. 천이 떨어졌을 때 짝을 탓하지 않고 다시 세어 시작하는 것을 칭찬한다.',
              levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '천을 같이 흔드는데 내가 더 빨라 천이 한쪽으로 쏠려요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '짝과 천을 흔드는데 내가 더 빨라 천이 한쪽으로 쏠려요.', choices: [{ id: 'faster', text: '짝에게 더 빨리 하라고 해요', result: '천이 꼬여 물결이 사라졌어요.', mood: '짜증', why: '서로 맞추는 것이 먼저예요.' }, { id: 'match', text: '짝 손 높이를 보며 빠르기를 맞춰요', result: '천이 고른 물결이 되었어요.', mood: '기쁨' }, { id: 'alone', text: '천을 놓고 혼자 해요', result: '짝 혼자 천을 들게 되었어요.', mood: '속상함', why: '짝 표현은 함께 해야 해요.' }] }, target: { choice: 'match' }, levels: { easy: { toolOptions: { choices: [{ id: 'faster', text: '짝에게 더 빨리 하라고 해요', result: '천이 꼬여 물결이 사라졌어요.', mood: '짜증', why: '서로 맞추는 것이 먼저예요.' }, { id: 'match', text: '짝 손 높이를 보며 빠르기를 맞춰요', result: '천이 고른 물결이 되었어요.', mood: '기쁨' }] } } }, difficulty: 0.1 },
                { prompt: '짝이 천을 놓쳐 바닥에 떨어졌어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '거센 파도를 표현하다 짝이 천을 놓쳐 바닥에 떨어졌어요.', choices: [{ id: 'blame', text: '"너 때문이야"라고 말해요', result: '짝이 속상해 다시 하기 싫어했어요.', mood: '속상함', why: '탓하기보다 다시 맞추어요.' }, { id: 'again', text: '"하나, 둘" 세며 다시 들어요', result: '둘이 함께 다시 파도를 만들었어요.', mood: '편안함' }, { id: 'kick', text: '천을 발로 밀어 치워요', result: '천이 밟혀 미끄러웠어요.', mood: '걱정', why: '바닥의 천은 들어서 정리해요.' }] }, target: { choice: 'again' }, difficulty: 0.15 },
                { prompt: '천 밑으로 다른 모둠 친구가 지나가려 해요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '짝과 천을 흔드는데 천 밑으로 다른 모둠 친구가 지나가려 해요.', choices: [{ id: 'keep', text: '계속 세게 흔들어요', result: '천이 친구 얼굴을 쳤어요.', mood: '놀람', why: '지나갈 때는 멈춰야 해요.' }, { id: 'gate', text: '멈추고 천을 높이 들어 길을 열어요', result: '친구가 안전하게 지나갔어요.', mood: '고마움' }, { id: 'down', text: '천을 바닥에 내려놓아요', result: '친구가 천을 밟을 뻔했어요.', mood: '걱정', why: '바닥에 둔 천은 미끄러워요.' }] }, target: { choice: 'gate' }, difficulty: 0.15 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 바다 장면 짜고 역할 바꿔 연습하기', minutes: 14, tool: 'timer',
              task: '바다 장면의 차례를 세우고, 짝과 역할(이끄는 쪽·따르는 쪽)을 바꾸며 연습한 뒤 점검해요.',
              teacher: '"잔잔한 바다에서 바로 거센 파도로 가면 어떨까요? 바람이 먼저 불어야겠지요." 장면 사이를 이어 주는 동작을 넣게 한다. 이끄는 쪽이 높이·빠르기를 정하고 따르는 쪽이 맞춘 뒤 역할을 바꾼다.',
              levels: { easy: { workStep: 10, restStep: 10, showTotal: true }, base: { showTotal: true }, challenge: { showTotal: false } },
              items: [
                { prompt: '바다 장면 카드를 일어나는 차례대로 놓아요.', toolOptions: { cards: ['거센 파도', '다시 잔잔해진 바다', '잔잔한 바다', '바람이 불기 시작해요'] }, target: { order: ['잔잔한 바다', '바람이 불기 시작해요', '거센 파도', '다시 잔잔해진 바다'] }, difficulty: 0.15,
                  hints: ['바다가 바뀌려면 무엇이 먼저 있어야 할지, 장면이 어떻게 끝나면 처음과 이어질지 생각해 보세요.', '물결이 커지는 까닭이 되는 카드가 거센 장면보다 먼저인지 나중인지 견주어 보세요.'] },
                { prompt: '짝과 역할을 바꾸며 30초 연습하고 15초 쉬기를 4번 하도록 맞춰요.', toolOptions: { plan: { work: 20, rest: 10, rounds: 2 } }, target: { plan: { work: 30, rest: 15, rounds: 4 } }, difficulty: 0.2 },
                { prompt: '짝과 바다 장면을 마치고 해낸 것을 점검 목록에 표시해요.', target: { selfCheck: ['짝과 천 높이를 맞추었어요', '잔잔함에서 거셈으로 빠르기를 바꾸었어요', '천이 떨어져도 탓하지 않고 다시 했어요'] }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '짝마다 바다 장면을 보여 주고, 보는 학생은 "바람이 언제 불기 시작했나요?"를 찾는다. 출구 1번에서 짝 탓을 고른 학생과 따로 이야기한다. 천은 반으로 접어 돌려놓는다.',
            exitTicket: [
              { type: 'tool', tool: 'emotion', options: { mode: 'branch', situation: '짝은 천을 머리 위로, 나는 허리 높이로 들고 흔들어 천이 비스듬해요.', choices: [{ id: 'up', text: '짝에게 맞춰 나도 천을 올리거나 함께 높이를 정해요', result: '천이 평평하게 물결쳤어요.', mood: '기쁨' }, { id: 'pull', text: '천을 내 쪽으로 세게 당겨요', result: '짝이 앞으로 끌려왔어요.', mood: '놀람', why: '당기면 짝이 넘어질 수 있어요.' }] }, prompt: '짝과 천 높이가 다를 때 어떻게 할지 골라요.', target: { choice: 'up' }, difficulty: 0.15 },
              { type: 'choice', prompt: '천을 함께 흔들다 짝이 놓쳤을 때 알맞은 말은 무엇인가요?', options: ['"너 때문이야"', '"괜찮아, 하나 둘 세고 다시 하자"', '"그만하자"'], answer: 1, difficulty: 0.1, explain: '함께 다시 세어 시작하면 맞출 수 있어요.' },
              { type: 'mood', prompt: '짝과 천으로 표현한 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '짝과 천으로 바다 표현',
          items: [
            { type: 'table', prompt: '바다 장면이 일어나는 차례대로 1~4 번호를 쓰세요.', columns: ['바다 장면', '차례 번호'], cells: [['거센 파도', ''], ['다시 잔잔해진 바다', ''], ['잔잔한 바다', ''], ['바람이 불기 시작해요', '']], answer: '잔잔한 바다 1, 바람 2, 거센 파도 3, 다시 잔잔 4' },
            { type: 'table', prompt: '장면마다 천의 높이와 빠르기를 쓰세요.', columns: ['장면', '천 높이', '빠르기'], cells: [['잔잔한 바다', '', ''], ['거센 파도', '', '']] },
            { type: 'choice', prompt: '천 밑으로 친구가 지나갈 때 알맞은 것에 ○ 하세요.', options: ['계속 흔든다', '멈추고 천을 높이 든다', '바닥에 내려놓는다'], answer: '멈추고 천을 높이 든다' },
            { type: 'short', prompt: '짝과 천을 맞추기 위해 내가 한 일을 쓰세요.' },
          ],
          easy: {
            note: '잔잔할 때는 낮고 느리게, 거셀 때는 높고 빠르게 흔들어요.',
            items: [
              { type: 'choice', prompt: '거센 파도는 어떻게 흔들까요?', options: ['높고 빠르게', '낮고 느리게'], answer: '높고 빠르게' },
              { type: 'choice', prompt: '짝이 천을 놓치면?', options: ['다시 세고 함께 든다', '짝 탓을 한다'], answer: '다시 세고 함께 든다' },
              { type: 'draw', prompt: '짝과 천으로 만든 파도를 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '고른 보기의 결과가 바로 보이고, 타이머를 10초씩 맞춰요. 상황 판단 보기가 하나 적어요.',
          base: '결과를 보고 판단하며, 전체 시간을 화면에서 봐요.',
          challenge: '결과가 맞힌 뒤에만 보여 먼저 짐작하고 고르며, 전체 시간을 스스로 셈해요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 도구가 떨어지거나 꼬이면 짝이나 도구 탓을 한다 → 다시 세어 함께 시작하는 것을 약속으로 정한다. ② 둘이 따로 흔들어 물결이 생기지 않는다 → 이끄는 쪽·따르는 쪽을 정한다. ③ 거센 파도에서 천으로 친구 얼굴을 친다 → 머리 높이를 넘지 않게.',
      }),
      // ───────────────────────── 17 ─────────────────────────
      L(17, {
        title: '도구와 몸짓이 따로 논 곳 찾아 고치기',
        objective: '도구 표현에서 도구와 몸짓이 어긋난 곳을 찾아, 동작을 고칠지 도구를 바꿀지 정하고 다시 해 볼 수 있다.',
        illustration: art('a child untangling a ribbon stick while a friend shows a better arm movement, with a paper checklist and a magnifying glass nearby', [
          { motif: 'sun', x: 410, y: 56, s: 0.7 }, { motif: 'hills', y: 212 }, { motif: 'cloud', x: 110, y: 50 },
          { motif: 'leaf', x: 90, y: 200 }, { motif: 'star', x: 360, y: 110, s: 0.6 },
          { motif: 'text', x: 240, y: 132, text: '도구 탓? 동작 고치기?', size: 24 },
        ]),
        safety: [TOOL, TOOLBACK, SPACE],
        stages: stages(
          {
            teacher: '교사가 리본을 들고 팔만 빠르게 돌려 리본이 엉키는 모습을 보인다. "리본이 엉켰어요. 리본이 나빠서일까요?" 학생 대답을 듣고, 같은 리본으로 박을 세며 팔을 크게 천천히 돌려 엉키지 않는 모습을 보인다. "도구 탓인지 동작 탓인지 어떻게 알 수 있을까요?"',
            student: '선생님 리본이 왜 엉켰는지, 두 번째에는 무엇이 달랐는지 찾아봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 어긋난 곳 찾고 고칠 방법 고르기', minutes: 14, tool: 'mindmap',
              task: '지난 시간 영상이나 짝이 본 메모를 떠올려, 어긋난 곳을 동작을 고칠 일과 도구를 바꿀 일로 나누고 고칠 방법을 이어요.',
              teacher: '"같은 도구로 동작만 바꾸어 다시 해 보면 알 수 있어요." 모든 문제를 도구 탓으로 넣는 학생에게 동작을 바꾸어 다시 해 보게 한다. 도구가 정말 맞지 않을 때(너무 짧은 리본, 무거운 천)는 바꾸는 것도 좋은 판단이라고 말한다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '관찰 메모를 동작을 고칠 일과 도구를 바꿀 일로 나누어요.', toolOptions: { topic: '어떻게 고칠까?', slots: ['동작을 고쳐요', '도구를 바꿔요'], cards: ['팔만 돌고 다리는 서 있어요', '리본이 짧아 큰 원이 안 보여요', '박을 세지 않아 도구가 늦어요', '천이 무거워 빠른 박을 못 따라가요'] }, target: { sort: { '동작을 고쳐요': ['팔만 돌고 다리는 서 있어요', '박을 세지 않아 도구가 늦어요'], '도구를 바꿔요': ['리본이 짧아 큰 원이 안 보여요', '천이 무거워 빠른 박을 못 따라가요'] } }, levels: { easy: { state: { at: { '팔만 돌고 다리는 서 있어요': 0 } } }, challenge: { prompt: '관찰 메모를 동작을 고칠 일과 도구를 바꿀 일로 나누어요. 동작이나 도구와 상관없는 메모는 남겨요.', toolOptions: { cards: ['팔만 돌고 다리는 서 있어요', '리본이 짧아 큰 원이 안 보여요', '박을 세지 않아 도구가 늦어요', '천이 무거워 빠른 박을 못 따라가요', '발표 차례가 맨 끝이에요'] } } }, difficulty: 0.2 },
                { prompt: '어긋난 곳과 알맞은 고칠 방법을 이어요.', toolOptions: { mode: 'match', topic: '고칠 방법', slots: [{ id: 'late', label: '리본이 박보다 늦어요' }, { id: 'stiff', label: '후프를 굴린 뒤 몸이 멈춰 있어요' }, { id: 'tangle', label: '줄이 자꾸 몸에 감겨요' }], cards: ['박을 소리 내어 세며 한 박 먼저 준비해요', '후프를 따라 몇 걸음 함께 가요', '몸 옆쪽에서 돌리고 사이를 넓혀요'] }, target: { match: { late: '박을 소리 내어 세며 한 박 먼저 준비해요', stiff: '후프를 따라 몇 걸음 함께 가요', tangle: '몸 옆쪽에서 돌리고 사이를 넓혀요' } }, difficulty: 0.25 },
                { prompt: '도구와 몸짓이 어긋난 곳을 찾는 좋은 방법만 골라요.', toolOptions: { mode: 'pick', topic: '어긋난 곳 찾기', cards: ['짝이 박을 세며 봐 줘요', '그 부분만 천천히 해 봐요', '도구를 바꿔 같은 동작을 해 봐요', '빨리 여러 번 되풀이만 해요'] }, target: { pick: ['짝이 박을 세며 봐 줘요', '그 부분만 천천히 해 봐요', '도구를 바꿔 같은 동작을 해 봐요'] }, levels: { challenge: { prompt: '도구와 몸짓이 어긋난 곳을 찾는 좋은 방법만 골라요. 빨라 보이지만 좋지 않은 방법이 섞여 있어요.', toolOptions: { cards: ['짝이 박을 세며 봐 줘요', '그 부분만 천천히 해 봐요', '도구를 바꿔 같은 동작을 해 봐요', '빨리 여러 번 되풀이만 해요', '어긋난 친구를 빼고 해요'] } } }, difficulty: 0.2,
                  conclude: '도구 탓인지 동작 탓인지는 하나만 바꾸어 다시 해 보면 알 수 있어요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 도구가 말을 안 들을 때', minutes: 12, tool: 'emotion',
              task: '도구가 손에서 빠지거나 엉킬 때 어떻게 할지 골라요. 고른 방법으로 내 도구 표현을 한 번 더 해 봐요.',
              teacher: '"도구가 손에서 빠질 때 손은 어떻게 쥐고 있었나요?" 쥐는 법·손목 힘·박을 살피게 한다. 도구를 바닥에 던지는 학생은 멈추게 하고, 속상한 마음을 말로 하게 한다.',
              levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '리본 막대가 손에서 자꾸 빠져요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '리본 막대를 돌리는데 막대가 손에서 자꾸 빠져요.', choices: [{ id: 'blame', text: '"리본이 나빠서 그래" 하고 바꿔 달라고만 해요', result: '바꾼 리본도 또 빠졌어요.', mood: '짜증', why: '먼저 쥐는 법과 손목 힘을 살펴봐요.' }, { id: 'grip', text: '쥐는 법과 손목 힘을 살펴 다시 해요', result: '막대 끝을 단단히 쥐니 빠지지 않았어요.', mood: '뿌듯함' }, { id: 'throw', text: '속상해서 막대를 던져요', result: '막대가 친구 쪽으로 굴러갔어요.', mood: '화남', why: '도구를 던지면 위험해요.' }] }, target: { choice: 'grip' }, levels: { easy: { toolOptions: { choices: [{ id: 'blame', text: '"리본이 나빠서 그래" 하고 바꿔 달라고만 해요', result: '바꾼 리본도 또 빠졌어요.', mood: '짜증', why: '먼저 쥐는 법과 손목 힘을 살펴봐요.' }, { id: 'grip', text: '쥐는 법과 손목 힘을 살펴 다시 해요', result: '막대 끝을 단단히 쥐니 빠지지 않았어요.', mood: '뿌듯함' }] } } }, difficulty: 0.15 },
                { prompt: '빠른 박에서 천이 계속 늦게 따라와요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '빠른 박에 맞춰 천을 흔드는데 천이 계속 늦게 따라와요. 천이 꽤 두꺼워요.', choices: [{ id: 'light', text: '더 가벼운 천으로 바꾸어 같은 동작을 해 봐요', result: '가벼운 천은 박에 맞춰 펄럭였어요.', mood: '기쁨' }, { id: 'harder', text: '팔이 아플 만큼 더 세게 흔들어요', result: '어깨가 아프고 여전히 늦었어요.', mood: '속상함', why: '무리하면 다쳐요. 도구를 바꾸는 것도 방법이에요.' }, { id: 'quit', text: '천 표현을 그만둬요', result: '장면 하나가 빠졌어요.', mood: '걱정', why: '방법을 바꾸어 다시 해 봐요.' }] }, target: { choice: 'light' }, difficulty: 0.2 },
                { prompt: '모둠 친구의 줄이 엉켰는데 다른 친구들이 웃어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '모둠 발표 연습 중 지아의 줄이 엉켰는데 다른 친구들이 웃어요.', choices: [{ id: 'laugh', text: '나도 같이 웃어요', result: '지아가 부끄러워 고개를 숙였어요.', mood: '부끄러움', why: '친구의 실수를 웃으면 마음이 다쳐요.' }, { id: 'help', text: '멈추고 함께 줄을 풀어 다시 시작해요', result: '모둠이 다시 박을 맞춰 이어 갔어요.', mood: '고마움' }, { id: 'go', text: '지아를 빼고 계속해요', result: '지아 자리가 비어 대형이 무너졌어요.', mood: '속상함', why: '모둠 표현은 함께 고쳐요.' }] }, target: { choice: 'help' }, difficulty: 0.15 },
              ],
            },
          ],
          {
            teacher: '"오늘 고친 곳은 동작이었나요, 도구였나요? 무엇을 바꾸어 다시 해 보았나요?" 두세 학생의 경험을 듣는다. 출구 1번을 틀린 학생은 하나만 바꾸어 견주는 방법을 다시 짚는다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { topic: '어떻게 고칠까?', slots: ['동작을 고쳐요', '도구를 바꿔요'], cards: ['후프가 너무 커서 몸이 가려져요', '천을 흔들 때 무릎이 뻣뻣해요', '리본 끝이 바닥에 끌릴 만큼 길어요', '센 박에 도구를 크게 쓰지 않아요'] }, prompt: '새 관찰 메모를 동작을 고칠 일과 도구를 바꿀 일로 나누어요.', target: { sort: { '동작을 고쳐요': ['천을 흔들 때 무릎이 뻣뻣해요', '센 박에 도구를 크게 쓰지 않아요'], '도구를 바꿔요': ['후프가 너무 커서 몸이 가려져요', '리본 끝이 바닥에 끌릴 만큼 길어요'] } }, difficulty: 0.25 },
              { type: 'choice', prompt: '도구가 손에서 빠질 때 가장 먼저 살펴볼 것은 무엇인가요?', options: ['쥐는 법과 손목 힘', '도구의 색깔', '친구의 도구'], answer: 0, difficulty: 0.1, explain: '쥐는 법이나 힘을 바꾸어 보면 도구 탓인지 알 수 있어요.' },
              { type: 'mood', prompt: '어긋난 곳을 고쳐 본 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '도구와 몸짓 맞추기',
          items: [
            { type: 'table', prompt: '내 도구 표현에서 어긋난 곳과 고친 방법을 쓰세요.', columns: ['어긋난 곳', '동작 고치기 / 도구 바꾸기', '고친 방법'], rows: 2 },
            { type: 'choice', prompt: '"리본이 짧아 큰 원이 안 보여요"는 어떻게 고치면 좋을까요?', options: ['더 빨리 돌린다', '긴 리본으로 바꾼다', '리본을 바닥에 끈다'], answer: '긴 리본으로 바꾼다' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '도구 탓인지 동작 탓인지 알려면 ___만 바꾸어 다시 해 봐요.', answer: '하나' },
            { type: 'short', prompt: '"도구가 손에서 빠지는 것은 도구 탓이다"에 대한 내 생각을 쓰세요.' },
          ],
          easy: {
            note: '먼저 동작을 바꾸어 다시 해 보고, 그래도 안 되면 도구를 바꿔요.',
            items: [
              { type: 'choice', prompt: '리본이 박보다 늦으면?', options: ['박을 세며 미리 준비한다', '리본을 바꿔 달라고만 한다'], answer: '박을 세며 미리 준비한다' },
              { type: 'choice', prompt: '친구 줄이 엉키면?', options: ['함께 풀어 준다', '웃는다'], answer: '함께 풀어 준다' },
              { type: 'short', prompt: '오늘 고친 곳을 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 맞는 가지에 놓으면 바로 표시되고, 틀린 가지는 까닭을 말해 주고 되돌아와요. 카드 한 장이나 첫 차례가 미리 놓인 문항이 있어요. 상황 판단 보기가 하나 적어요.',
          base: '모두 놓은 뒤 스스로 고치고, 고른 보기의 결과를 보며 판단해요.',
          challenge: '결과가 맞힌 뒤에만 보여 먼저 짐작하고, 고친 방법이 통했는지 두 번 견주어 말해요. 그럴듯한 함정 카드가 더해진 문항이 있어요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 도구가 손에서 빠지는 것은 도구 탓이라고 여긴다 → 쥐는 법을 바꾸어 다시 해 본다. ② 반대로 맞지 않는 도구를 끝까지 고집한다 → 도구를 바꾸는 것도 판단이다. ③ 친구 실수를 웃는다 → 함께 고치는 것이 모둠 표현이다.',
      }),
      // ───────────────────────── 18 ─────────────────────────
      L(18, {
        title: '평가 기준표로 모둠 도구 표현 봐 주기',
        objective: '평가 기준에 따라 다른 모둠의 도구 표현을 보고 결과 그래프를 읽어 고칠 점을 찾고, 근거 있는 조언을 건넬 수 있다.',
        illustration: art('children holding up star stickers next to a paper bar chart while another group performs with scarves and hoops', [
          { motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'hills', y: 212 }, { motif: 'cloud', x: 100, y: 50 },
          { motif: 'star', x: 160, y: 110, s: 0.7 }, { motif: 'star', x: 200, y: 96, s: 0.5 }, { motif: 'star', x: 330, y: 104, s: 0.8 },
          { motif: 'text', x: 240, y: 160, text: '기준을 보고, 근거를 말해요', size: 22 },
        ]),
        safety: [TOOL, '발표 모둠의 도구가 닿지 않는 거리에서 봐요.', SPACE],
        stages: stages(
          {
            teacher: '칠판에 기준 네 가지를 붙인다: 박 맞추기, 도구와 몸이 함께, 안전 거리, 시선과 표정. "다른 모둠을 볼 때 이 기준마다 잘했으면 별 스티커를 줘요." 기준 없이 "그냥 잘했어"라고만 말하면 무엇을 잘했는지 모른다는 것을 짚는다.',
            student: '기준 네 가지를 함께 읽고, 오늘 볼 때 가장 잘 살펴볼 기준을 하나 골라요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 받은 별 스티커 그래프로 읽기', minutes: 7, tool: 'chart',
              task: '모둠이 받은 기준별 별 스티커 수를 막대그래프로 나타내고 읽어, 다음에 가장 먼저 고칠 기준을 찾아요.',
              teacher: '"가장 낮은 막대가 다음 연습의 목표예요." 가장 높은 막대만 보고 기뻐하는 모둠에 낮은 막대도 함께 보게 한다. 우리 모둠 스티커 수로 활동지 그래프도 그린다.',
              levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '해님 모둠이 받은 별 스티커 수를 막대그래프로 나타내요.', toolOptions: { type: 'bar', title: '해님 모둠이 받은 별', unit: '개', xLabel: '기준', yLabel: '별 수', data: [['박 맞추기', 6], ['도구·몸 함께', 3], ['안전 거리', 7], ['시선·표정', 5]] }, target: { build: true }, levels: { easy: { toolOptions: { given: [0] } } }, difficulty: 0.15 },
                { prompt: '해님 모둠이 다음 연습에서 가장 먼저 고칠 기준을 그래프에서 골라요.', toolOptions: { type: 'bar', mode: 'read', title: '해님 모둠이 받은 별', unit: '개', xLabel: '기준', data: [['박 맞추기', 6], ['도구·몸 함께', 3], ['안전 거리', 7], ['시선·표정', 5]], question: '별이 가장 적은 기준은?', choices: ['박 맞추기', '도구·몸 함께', '안전 거리', '시선·표정'] }, target: { pick: 1 }, difficulty: 0.15 },
                { prompt: '달님 모둠 그래프를 보고 안전 거리 별은 박 맞추기 별보다 몇 개 적은지 써요.', toolOptions: { type: 'bar', mode: 'read', title: '달님 모둠이 받은 별', unit: '개', xLabel: '기준', data: [['박 맞추기', 8], ['도구·몸 함께', 6], ['안전 거리', 4], ['시선·표정', 6]], question: '안전 거리는 박 맞추기보다 몇 개 적나요?' }, target: { value: 4 }, levels: { challenge: { prompt: '달님 모둠이 네 기준에서 받은 별은 모두 몇 개인지 그래프를 읽고 더해 써요.', toolOptions: { question: '달님 모둠이 받은 별은 모두 몇 개?' }, target: { value: 24 } } }, difficulty: 0.25,
                  conclude: '낮은 막대가 가장 먼저 연습할 곳이에요. 숫자로 견주면 얼마나 더 연습할지 알 수 있어요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 근거 있는 조언 건네기', minutes: 19, tool: 'emotion',
              task: '다른 모둠 발표를 본 뒤 건넬 조언을 고르고, 받은 평가에 어떻게 답할지 골라요. 고른 말로 모둠끼리 조언을 주고받은 뒤, 별이 가장 적었던 기준의 장면을 7분 동안 도구를 들고 다시 연습해 한 번 더 보여 줘요.',
              teacher: '"기준 이름과 본 장면이 함께 들어가야 근거 있는 조언이에요." 예: "도구·몸 함께 — 후프를 굴린 뒤 몸이 멈춰 있었어요." 낮은 평가를 받고 속상해하는 모둠에게는 다음 목표가 생긴 것이라고 말해 준다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '다른 모둠에 건넬 말 가운데 근거 있는 조언만 골라요.', toolOptions: { mode: 'pick', basket: '근거 있는 조언', cards: ['리본을 돌릴 때 몸도 함께 돌면 좋겠어', '그냥 별로였어', '셋째 장면에서 둘이 너무 가까웠어', '우리 모둠이 더 잘했어'] }, target: { pick: ['리본을 돌릴 때 몸도 함께 돌면 좋겠어', '셋째 장면에서 둘이 너무 가까웠어'] }, levels: { challenge: { prompt: '다른 모둠에 건넬 말 가운데 근거 있는 조언만 골라요. 고칠 점을 알려 주지 않는 말은 남겨요.', toolOptions: { cards: ['리본을 돌릴 때 몸도 함께 돌면 좋겠어', '그냥 별로였어', '셋째 장면에서 둘이 너무 가까웠어', '우리 모둠이 더 잘했어', '리본 색깔이 예뻤어'] } } }, difficulty: 0.1 },
                { prompt: '우리 모둠이 ‘도구·몸 함께’에서 별을 적게 받았어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '우리 모둠이 ‘도구·몸 함께’ 기준에서 별을 가장 적게 받았어요.', choices: [{ id: 'angry', text: '"보는 사람이 잘못 봤어" 하고 화내요', result: '고칠 기회를 놓쳤어요.', mood: '화남', why: '평가는 고칠 곳을 알려 주는 말이에요.' }, { id: 'ask', text: '어느 장면이었는지 묻고 그 장면을 다시 연습해요', result: '다음 발표에서 몸과 도구가 함께 움직였어요.', mood: '뿌듯함' }, { id: 'give', text: '도구 표현을 아예 빼요', result: '표현이 짧아지고 볼거리가 줄었어요.', mood: '속상함', why: '빼기보다 고쳐 봐요.' }] }, target: { choice: 'ask' }, levels: { easy: { toolOptions: { choices: [{ id: 'angry', text: '"보는 사람이 잘못 봤어" 하고 화내요', result: '고칠 기회를 놓쳤어요.', mood: '화남', why: '평가는 고칠 곳을 알려 주는 말이에요.' }, { id: 'ask', text: '어느 장면이었는지 묻고 그 장면을 다시 연습해요', result: '다음 발표에서 몸과 도구가 함께 움직였어요.', mood: '뿌듯함' }] } } }, difficulty: 0.15 },
                { prompt: '모둠끼리 주고받은 말을 알맞은 기준과 이어요.', toolOptions: { mode: 'match', cards: ['센 박에 천이 크게 펄럭였어', '후프 사이가 넓어 부딪히지 않았어', '끝 장면에서 관객을 보며 웃었어'], slots: [{ id: 'beat', label: '박 맞추기' }, { id: 'safe', label: '안전 거리' }, { id: 'face', label: '시선·표정' }] }, target: { match: { beat: '센 박에 천이 크게 펄럭였어', safe: '후프 사이가 넓어 부딪히지 않았어', face: '끝 장면에서 관객을 보며 웃었어' } }, levels: { easy: { state: { at: { '센 박에 천이 크게 펄럭였어': 0 } } } }, difficulty: 0.15 },
              ],
            },
          ],
          {
            teacher: '"오늘 받은 조언 가운데 다음에 꼭 고칠 것 한 가지는 무엇인가요?" 모둠마다 한 문장으로 말한다. 출구 1번을 틀린 학생은 그래프에서 가장 낮은 막대를 손가락으로 짚게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '별님 모둠이 받은 별', unit: '개', xLabel: '기준', data: [['박 맞추기', 4], ['도구·몸 함께', 7], ['안전 거리', 6], ['시선·표정', 5]], question: '가장 먼저 연습할 기준은?', choices: ['박 맞추기', '도구·몸 함께', '안전 거리', '시선·표정'] }, prompt: '별님 모둠 그래프를 보고 가장 먼저 연습할 기준을 골라요.', target: { pick: 0 }, difficulty: 0.15 },
              { type: 'choice', prompt: '근거 있는 조언은 무엇인가요?', options: ['"잘했어"', '"둘째 장면에서 천이 박보다 늦었어"', '"우리가 더 잘했어"'], answer: 1, difficulty: 0.1, explain: '어느 장면에서 무엇이 어땠는지가 들어 있어야 고칠 수 있어요.' },
              { type: 'short', prompt: '우리 모둠이 다음에 꼭 고칠 것 한 가지를 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '평가 기준으로 봐 주기',
          items: [
            { type: 'table', prompt: '본 모둠에게 기준별로 별을 주고 근거를 쓰세요.', columns: ['기준', '별(0~3)', '근거(본 장면)'], cells: [['박 맞추기', '', ''], ['도구·몸 함께', '', ''], ['안전 거리', '', ''], ['시선·표정', '', '']] },
            { type: 'draw', prompt: '우리 모둠이 받은 별 수로 막대그래프를 그리세요.' },
            { type: 'choice', prompt: '근거 있는 조언에 ○ 하세요.', options: ['"별로야"', '"셋째 장면에서 둘이 너무 가까웠어"', '"우리가 이겼어"'], answer: '"셋째 장면에서 둘이 너무 가까웠어"' },
            { type: 'short', prompt: '받은 조언 가운데 고칠 점과 고칠 방법을 쓰세요.' },
          ],
          easy: {
            note: '조언에는 "어느 장면"과 "무엇이"가 들어가요.',
            items: [
              { type: 'choice', prompt: '그래프에서 가장 먼저 고칠 기준은?', options: ['막대가 가장 낮은 기준', '막대가 가장 높은 기준'], answer: '막대가 가장 낮은 기준' },
              { type: 'short', prompt: '다른 모둠에게 해 준 칭찬을 쓰세요.' },
              { type: 'draw', prompt: '다른 모둠 표현에서 기억나는 장면을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '그래프에 값이 보이고, 조언 카드를 바구니에 넣으면 바로 표시돼요. 첫 막대가 미리 채워져 있어요. 상황 판단 보기가 하나 적어요. 카드 한 장이나 첫 차례가 미리 놓인 문항이 있어요.',
          base: '눈금을 읽어 막대를 맞추고, 모두 고른 뒤 스스로 고쳐요.',
          challenge: '맞힌 뒤에만 값이 보여 눈금을 꼼꼼히 읽고, 조언을 기준 이름까지 넣어 말해요. 더 긴 차례나 더해 읽는 문항으로 바뀌어요. 그럴듯한 함정 카드가 더해진 문항이 있어요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 도구가 엉켜 낮은 평가를 받으면 도구 탓을 한다 → 어느 장면이었는지 묻고 그 장면을 다시 연습한다. ② 기준 없이 좋다/나쁘다로만 말한다 → 기준 이름+본 장면. ③ 높은 막대만 본다 → 가장 낮은 막대가 다음 목표. 4학년 막대그래프 읽기와 이어진다.',
      }),
      // ───────────────────────── 19 ─────────────────────────
      L(19, {
        title: '나타낼 장면에 맞는 도구 골라 다음 표현 계획 세우기',
        objective: '나타낼 장면의 모양과 빠르기에 맞는 도구를 까닭과 함께 고르고, 8박 표현 연습 계획을 세울 수 있다.',
        illustration: art('a child at a desk planning a dance with paper cards of a ribbon, a scarf and a hoop, dreaming of spring wind and flowers', [
          { motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'flower', x: 90, y: 210 }, { motif: 'flower', x: 140, y: 214, s: 0.7 },
          { motif: 'hills', y: 220 }, { motif: 'cloud', x: 230, y: 56 }, { motif: 'leaf', x: 380, y: 180 },
          { motif: 'text', x: 240, y: 132, text: '어떤 도구로 나타낼까?', size: 24 },
        ]),
        safety: [TOOL, SPACE, STOP],
        stages: stages(
          {
            teacher: '"지금까지 줄·천·후프·리본·풍선·신문지를 써 보았어요. 다음에 ‘봄바람에 흔들리는 꽃’을 나타낸다면 무엇을 쓸까요? 왜요?" 까닭을 도구의 모양(선·면·고리)과 빠르기로 말하게 한다. 지난 시간 받은 조언 가운데 고칠 점도 계획에 넣는다고 알린다.',
            student: '‘봄바람에 흔들리는 꽃’을 나타낸다면 어떤 도구를 쓰고 싶은지 까닭과 함께 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 장면에 맞는 도구 고르고 계획 차례 세우기', minutes: 14, tool: 'mindmap',
              task: '장면과 도구를 까닭에 맞게 잇고, 내 장면에 맞는 도구를 고른 뒤 계획 세우는 차례를 정해요.',
              teacher: '"까닭이 도구의 모양이나 빠르기와 이어져 있나요?" 좋아하는 색만으로 도구를 고르는 학생에게 장면의 움직임을 다시 떠올리게 한다. 다 맞히면 카드 아래 까닭이 보인다.',
              levels: { easy: { live: true, showBack: true }, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '장면과 가장 어울리는 도구를 이어요. 다 맞히면 까닭이 보여요.', reveal: 'after-check', toolOptions: { mode: 'match', topic: '장면과 도구', slots: [{ id: 'snow', label: '소복소복 눈 내리는 밤' }, { id: 'fire', label: '하늘로 터지는 불꽃' }, { id: 'pin', label: '빙글빙글 바람개비' }], cards: [{ id: '흰 천', text: '흰 천', back: '넓은 면이 천천히 내려와요' }, { id: '리본 막대', text: '리본 막대', back: '빠른 선이 사방으로 뻗어요' }, { id: '훌라후프', text: '훌라후프', back: '고리가 돌며 바퀴 모양이 돼요' }] }, target: { match: { snow: '흰 천', fire: '리본 막대', pin: '훌라후프' } }, difficulty: 0.2 },
                { prompt: '‘봄바람에 흔들리는 꽃’에 어울리는 도구 두 가지를 골라요.', toolOptions: { mode: 'pick', topic: '봄바람에 흔들리는 꽃', cards: ['분홍 스카프', '가벼운 리본', '무거운 공', '딱딱한 막대'] }, target: { pick: ['분홍 스카프', '가벼운 리본'] }, levels: { challenge: { prompt: '‘봄바람에 흔들리는 꽃’에 어울리는 도구 두 가지를 골라요. 바람에 흔들리지 않는 도구는 남겨요.', toolOptions: { cards: ['분홍 스카프', '가벼운 리본', '무거운 공', '딱딱한 막대', '무거운 모래주머니'] } } }, difficulty: 0.15 },
                { prompt: '도구 표현 계획을 세우는 차례대로 카드를 놓아요.', toolOptions: { mode: 'order', cards: ['8박 동작 짜기', '나타낼 장면 정하기', '연습하고 고치기', '어울리는 도구 고르기', '모둠에 보여 주기'] }, target: { order: ['나타낼 장면 정하기', '어울리는 도구 고르기', '8박 동작 짜기', '연습하고 고치기', '모둠에 보여 주기'] }, levels: { easy: { state: { at: { '나타낼 장면 정하기': 0 } } } }, difficulty: 0.2,
                  conclude: '무엇을 나타낼지 먼저 정해야 어울리는 도구와 동작을 고를 수 있어요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 연습 계획 맞추고 점검하기', minutes: 12, tool: 'timer',
              task: '정한 장면과 도구로 연습 계획을 맞추고, 실제로 연습한 뒤 계획을 지켰는지 점검해요.',
              teacher: '"전체 연습 시간이 4분이라면 몇 번 연습할 수 있을까요?" 계산한 횟수대로 연습하게 한다. 연습 사이 쉬는 시간에 지난 시간 조언에서 고칠 점 하나를 떠올리게 한다.',
              levels: { easy: { workStep: 10, restStep: 10, showTotal: true }, base: { showTotal: true }, challenge: { showTotal: false } },
              items: [
                { prompt: '장면 하나를 40초 연습하고 15초 쉬기를 3번 하도록 맞춰요.', toolOptions: { plan: { work: 30, rest: 10, rounds: 2 } }, target: { plan: { work: 40, rest: 15, rounds: 3 } }, difficulty: 0.2 },
                { prompt: '연습 50초, 쉬기 10초로 전체 연습 시간이 4분 50초(290초)가 되도록 횟수를 맞춰요.', toolOptions: { plan: { work: 50, rest: 10, rounds: 2 }, showTotal: true, revealAfterCheck: true }, target: { plan: { work: 50, rest: 10 }, total: 290 }, difficulty: 0.45 },
                { prompt: '계획대로 연습한 뒤 해낸 것을 점검 목록에 표시해요.', target: { selfCheck: ['장면에 맞는 도구를 까닭과 함께 골랐어요', '받은 조언 한 가지를 고쳐 연습했어요', '계획한 횟수만큼 연습했어요'] }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"내가 고른 장면과 도구, 그 까닭을 짝에게 말해 보세요." 몇 학생의 8박 표현을 보고 반 전체가 장면을 맞혀 본다. 다음 시간부터는 무용 작품을 보며 아름다운 움직임을 찾는다고 알린다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '통통 튀는 빗방울', cards: ['탱탱볼', '넓은 천', '작은 리본', '무거운 매트'] }, prompt: '‘통통 튀는 빗방울’에 어울리는 도구 두 가지를 골라요.', target: { pick: ['탱탱볼', '작은 리본'] }, difficulty: 0.2 },
              { type: 'choice', prompt: '도구를 고를 때 가장 좋은 까닭은 무엇인가요?', options: ['색이 예뻐서', '나타낼 장면의 모양·빠르기와 어울려서', '친구가 골라서'], answer: 1, difficulty: 0.1, explain: '장면의 움직임과 도구의 모양·빠르기가 맞아야 잘 드러나요.' },
              { type: 'short', prompt: '다음에 나타내고 싶은 장면과 고른 도구, 그 까닭을 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '나의 도구 표현 계획',
          items: [
            { type: 'table', prompt: '나의 도구 표현 계획을 쓰세요.', columns: ['나타낼 장면', '고른 도구', '고른 까닭'], rows: 1 },
            { type: 'table', prompt: '8박 동작을 쓰세요.', columns: ['1~2박', '3~4박', '5~6박', '7~8박'], rows: 1 },
            { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '연습 50초 × ___번 + 쉬기 10초 × 4번 = 290초', answer: '5' },
            { type: 'choice', prompt: '‘소복소복 눈 내리는 밤’에 가장 어울리는 도구에 ○ 하세요.', options: ['흰 천', '탱탱볼', '딱딱한 막대'], answer: '흰 천' },
            { type: 'draw', prompt: '내 표현의 가장 멋진 장면을 그리세요.' },
          ],
          easy: {
            note: '장면이 천천히 움직이면 천·풍선, 빠르게 튀면 탱탱볼·리본이 어울려요.',
            items: [
              { type: 'choice', prompt: '빙글빙글 바람개비에 어울리는 도구는?', options: ['훌라후프', '신문지'], answer: '훌라후프' },
              { type: 'short', prompt: '내가 나타내고 싶은 장면을 쓰세요.' },
              { type: 'draw', prompt: '그 장면을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드 아래 까닭이 처음부터 보이고, 맞는 칸에 놓으면 바로 표시돼요. 타이머를 10초씩 맞춰요. 카드 한 장이나 첫 차례가 미리 놓인 문항이 있어요.',
          base: '까닭은 다 맞힌 뒤에 보이고, 전체 시간을 화면에서 봐요.',
          challenge: '까닭과 맞음 표시가 맞힌 뒤에만 보이고, 전체 시간을 스스로 셈해 횟수를 맞춰요. 그럴듯한 함정 카드가 더해진 문항이 있어요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 색이나 좋아하는 것만으로 도구를 고른다 → 장면의 모양·빠르기와 잇는다. ② 동작을 먼저 짜고 장면을 나중에 붙인다 → 장면부터. ③ 쉬는 시간도 연습 횟수만큼 센다 → 마지막 연습 뒤에는 쉬지 않는다.',
      }),
      // ───────────────────────── 20 ─────────────────────────
      L(20, {
        title: '무용 영상 보고 마음에 남은 움직임 고르기',
        objective: '짧은 무용 영상에서 마음에 남은 움직임을 고르고, 움직임의 높낮이·빠르기·힘을 근거로 느낌을 말할 수 있다.',
        illustration: art('children sitting on the gym floor watching a dancer on a big paper screen, with soft lines showing a slow fan opening and a quick spin', [
          { motif: 'moon', x: 410, y: 56, s: 0.7 }, { motif: 'star', x: 80, y: 50, s: 0.6 }, { motif: 'star', x: 140, y: 80, s: 0.4 },
          { motif: 'hills', y: 216 }, { motif: 'flower', x: 240, y: 190, s: 1.2 },
          { motif: 'text', x: 240, y: 120, text: '어떤 움직임이 마음에 남았나요?', size: 22 },
        ]),
        safety: ['영상을 볼 때는 화면과 두 걸음 넘게 떨어져 앉아요.', SPACE, '따라 해 볼 때는 내 자리에서 천천히 해요.'],
        stages: stages(
          {
            teacher: '부채를 천천히 펴는 장면과 빠르게 돌며 뛰는 장면이 함께 든 1분 남짓한 공개 무용 영상(국립국악원·국립무용단 공식 채널이나 e학습터처럼 학교에서 쓸 수 있는 자료에서 우리 춤 한 장면, 다른 나라 춤 한 장면)을 미리 골라 소리와 함께 한 번 보여 준다. 알맞은 영상이 없으면 교사가 두 움직임을 직접 해 보인다. "가장 마음에 남은 움직임 하나를 떠올려 손으로 그려 보세요." 친구마다 고른 움직임이 다르다는 것을 확인한 뒤 "아름다운 움직임에는 정답이 하나일까요?"를 묻는다.',
            student: '영상을 보고 가장 마음에 남은 움직임 하나를 손으로 공중에 그려 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 움직임과 느낌 잇기', minutes: 13, tool: 'emotion',
              task: '먼저 카드에 적힌 움직임(부채 펴기, 빙글빙글 돌며 뛰기, 고개 숙이고 멈추기, 물결 팔, 쿵 구르기)을 다 함께 하나씩 1분씩 해 봐요(5분). 그다음 움직임에 어울리는 느낌을 잇고 장면을 느낌에 따라 나눠요. 근거가 있으면 여러 느낌이 맞아요.',
              teacher: '"방금 해 본 부채 펴기에서 편안함을 느낀 친구도, 기쁨이나 신남을 느낀 친구도 있어요. 모두 맞아요 — 왜 그렇게 느꼈는지가 중요해요." 교구도 근거가 서는 느낌은 여러 개를 받는다. 느낌만 말하는 학생에게 "어떤 움직임 때문에?"를 되묻는다. 돌며 뛰기는 두 바퀴까지만 하고 어지러우면 앉는다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '해 본 움직임마다 내가 느낀 느낌 카드를 하나씩 놓아요. 근거가 서는 느낌은 여러 개가 맞아요.', toolOptions: { cards: ['편안함', '기쁨', '신남', '슬픔', '놀람'], slots: [{ id: 'fan', label: '부채를 천천히 펴며 위로 올려요' }, { id: 'spin', label: '빠르게 빙글빙글 돌며 뛰어올라요' }, { id: 'bow', label: '고개를 숙이고 혼자 멈춰 있어요' }] }, target: { match: { fan: ['편안함', '기쁨', '신남'], spin: ['신남', '놀람', '기쁨'], bow: ['슬픔', '편안함'] } }, levels: { easy: { state: { at: { '편안함': 0 } } } }, difficulty: 0.15 },
                { prompt: '이런 움직임을 보면 어떤 느낌일지, 부드러운 느낌과 힘찬 느낌으로 나누어요.', toolOptions: { mode: 'sort', slots: ['부드러운 느낌', '힘찬 느낌'], cards: ['팔을 물결처럼 흔들어요', '발을 쿵 구르며 멈춰요', '손끝으로 천천히 원을 그려요', '주먹을 앞으로 힘껏 뻗어요'], weather: false }, target: { sort: { '부드러운 느낌': ['팔을 물결처럼 흔들어요', '손끝으로 천천히 원을 그려요'], '힘찬 느낌': ['발을 쿵 구르며 멈춰요', '주먹을 앞으로 힘껏 뻗어요'] } }, difficulty: 0.15 },
                { prompt: '감상할 때 알맞은 태도만 골라요.', toolOptions: { mode: 'pick', basket: '감상하는 태도', cards: ['끝까지 보고 느낌을 떠올려요', '느린 장면은 지루하니 건너뛰어요', '친구 느낌이 달라도 들어 봐요', '정답 느낌 하나를 맞혀요'], weather: false }, target: { pick: ['끝까지 보고 느낌을 떠올려요', '친구 느낌이 달라도 들어 봐요'] }, levels: { challenge: { prompt: '감상할 때 알맞은 태도만 골라요. 그럴듯하지만 감상을 가로막는 카드가 섞여 있어요.', toolOptions: { cards: ['끝까지 보고 느낌을 떠올려요', '느린 장면은 지루하니 건너뛰어요', '친구 느낌이 달라도 들어 봐요', '정답 느낌 하나를 맞혀요', '유명한 춤이면 모두 아름다워요'] } } }, difficulty: 0.1,
                  conclude: '같은 장면도 사람마다 다르게 느낄 수 있어요. 근거를 들어 말하고 서로의 느낌을 들어요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 움직임 요소로 근거 찾기', minutes: 13, tool: 'mindmap',
              task: '움직임을 높낮이·빠르기·힘으로 나누어 보고, 친구들의 느낌과 근거를 이어요. 나눈 뒤 세 요소마다 모둠이 그 움직임을 8박 동안 해 보고(높게↔낮게, 빠르게↔느리게, 세게↔살며시 — 6분), 마지막에 마음에 남은 움직임을 모둠 앞에서 한 번 보여 줘요.',
              teacher: '"낮게 엎드린 장면은 높낮이, 빠르게 발을 구른 장면은 빠르기예요." 요소 낱말이 낯선 학생에게 몸으로 높게·낮게, 빠르게·느리게를 해 보이게 한다. 교사가 "높낮이!" 하고 외치면 모둠이 8박 동안 높게 4박·낮게 4박을 하는 식으로 세 요소를 돌아가며 해 본다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '본 움직임을 높낮이·빠르기·힘 가지로 나누어요.', toolOptions: { topic: '움직임 요소', slots: ['높낮이', '빠르기', '힘'], cards: ['바닥에 낮게 엎드려요', '발끝으로 높이 서요', '아주 천천히 고개를 돌려요', '빠르게 발을 굴러요', '깃털처럼 살며시 내려앉아요', '힘차게 주먹을 뻗어요'] }, target: { sort: { 높낮이: ['바닥에 낮게 엎드려요', '발끝으로 높이 서요'], 빠르기: ['아주 천천히 고개를 돌려요', '빠르게 발을 굴러요'], 힘: ['깃털처럼 살며시 내려앉아요', '힘차게 주먹을 뻗어요'] } }, levels: { easy: { state: { at: { '바닥에 낮게 엎드려요': 0 } } } }, difficulty: 0.25 },
                { prompt: '같은 장면을 본 두 친구의 느낌과 근거를 이어요.', toolOptions: { mode: 'match', topic: '같은 장면, 다른 느낌', slots: [{ id: 'minji', label: '민지: 쓸쓸했어요' }, { id: 'junho', label: '준호: 평화로웠어요' }], cards: ['혼자 남아 고개를 숙였어요', '부채를 천천히 넓게 폈어요', '빠르게 뛰어올랐어요'] }, target: { match: { minji: '혼자 남아 고개를 숙였어요', junho: '부채를 천천히 넓게 폈어요' } }, difficulty: 0.2 },
                { prompt: '느낌을 말할 때 근거가 들어 있는 말만 골라요.', toolOptions: { mode: 'pick', topic: '근거 있는 감상', cards: ['팔을 끝까지 천천히 뻗어서 편안했어', '그냥 좋았어', '무릎을 굽혔다 높이 뛰어서 신났어', '별로야'] }, target: { pick: ['팔을 끝까지 천천히 뻗어서 편안했어', '무릎을 굽혔다 높이 뛰어서 신났어'] }, levels: { challenge: { prompt: '느낌을 말할 때 근거가 들어 있는 말만 골라요. 어떤 움직임 때문인지 없는 말은 남겨요.', toolOptions: { cards: ['팔을 끝까지 천천히 뻗어서 편안했어', '그냥 좋았어', '무릎을 굽혔다 높이 뛰어서 신났어', '별로야', '다들 멋있었어'] } } }, difficulty: 0.15 },
              ],
            },
          ],
          {
            teacher: '"내가 고른 움직임과 그 까닭을 짝에게 말해 보세요. 짝의 느낌은 나와 같았나요?" 느낌이 다른 짝이 많을수록 좋은 감상이었다고 말해 준다. 출구 2번을 틀린 학생과는 "정답 하나"에 대해 다시 이야기한다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { topic: '움직임 요소', slots: ['높낮이', '빠르기', '힘'], cards: ['무릎을 꿇고 몸을 낮춰요', '쏜살같이 달려 나가요', '솜처럼 가볍게 팔을 띄워요'] }, prompt: '새로 본 움직임을 높낮이·빠르기·힘으로 나누어요.', target: { sort: { 높낮이: ['무릎을 꿇고 몸을 낮춰요'], 빠르기: ['쏜살같이 달려 나가요'], 힘: ['솜처럼 가볍게 팔을 띄워요'] } }, difficulty: 0.2 },
              { type: 'choice', prompt: '같은 무용 장면을 보고 친구와 느낌이 다를 때 알맞은 생각은 무엇인가요?', options: ['둘 중 하나는 틀렸다', '근거가 있으면 둘 다 맞다', '선생님 느낌만 맞다'], answer: 1, difficulty: 0.15, explain: '아름다운 움직임에 정답이 하나만 있는 것은 아니에요. 근거를 들어 말해요.' },
              { type: 'mood', prompt: '무용 영상을 본 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '마음에 남은 움직임',
          items: [
            { type: 'table', prompt: '마음에 남은 움직임과 그 까닭을 쓰세요.', columns: ['마음에 남은 움직임', '높낮이·빠르기·힘 가운데', '느낌과 까닭'], rows: 2 },
            { type: 'figure', prompt: '가지마다 영상에서 본 움직임을 하나씩 써 넣으세요.', tool: 'mindmap', wide: true, options: { topic: '움직임 요소', printCards: false, slots: ['높낮이', '빠르기', '힘'], cards: ['보기'] }, figures: [{ state: {}, caption: '' }], answer: '예: 높낮이 — 바닥에 엎드리기 / 빠르기 — 빠르게 돌기 / 힘 — 살며시 내려앉기' },
            { type: 'choice', prompt: '근거가 들어 있는 감상에 ○ 하세요.', options: ['"그냥 좋았어"', '"천천히 팔을 펴서 편안했어"', '"별로야"'], answer: '"천천히 팔을 펴서 편안했어"' },
            { type: 'short', prompt: '친구와 느낌이 달랐던 장면과, 서로 다르게 느낀 까닭을 쓰세요.' },
          ],
          easy: {
            note: '"○○해서 ○○했어요"로 써요. 앞에는 움직임, 뒤에는 느낌!',
            items: [
              { type: 'short', prompt: '마음에 남은 움직임을 쓰세요.' },
              { type: 'blank', prompt: '빈칸을 채워 감상을 쓰세요.', text: '___해서 ___했어요.', answer: '예: 천천히 돌아서 편안했어요' },
              { type: 'draw', prompt: '마음에 남은 움직임을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 맞는 칸에 놓으면 바로 표시되고, 틀리면 까닭을 말해 주고 되돌아와요. 카드 한 장이나 첫 차례가 미리 놓인 문항이 있어요.',
          base: '모두 놓은 뒤 확인해 스스로 고쳐요.',
          challenge: '근거를 움직임 요소 낱말(높낮이·빠르기·힘)을 넣어 말하고, 짝과 느낌이 다른 까닭까지 견주어요. 그럴듯한 함정 카드가 더해진 문항이 있어요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 아름다운 움직임은 정답이 하나로 정해져 있다고 여긴다 → 같은 장면에 대한 여러 느낌을 칠판에 모은다(판정도 근거 있는 여러 느낌을 받는다). ② "그냥 좋았어"로 끝낸다 → "어떤 움직임 때문에?" ③ 느린 장면을 지루해한다 → 느린 장면에서 몸을 조절하는 힘을 찾아보게 한다. 영상은 학교에서 쓸 수 있는 공개 자료를 고르고, 특정 작품의 동작을 그대로 가르치지 않는다.',
      }),
      // ───────────────────────── 21 ─────────────────────────
      L(21, {
        title: '강강술래의 빠르기와 놀이 모양 살펴보기',
        objective: '강강술래가 늦은 가락에서 잦은 가락으로 빨라지는 흐름과 덕석몰기 같은 놀이의 모양을 알고, 손잡고 원을 그리며 안전하게 따라 해 볼 수 있다.',
        illustration: art('women and children holding hands in a big circle under a full harvest moon by the seaside, dancing ganggangsullae in hanbok', [
          { motif: 'moon', x: 240, y: 62, s: 1.3 }, { motif: 'star', x: 80, y: 50, s: 0.6 }, { motif: 'star', x: 400, y: 60, s: 0.5 },
          { motif: 'wave', x: 120, y: 214 }, { motif: 'wave', x: 360, y: 216 },
          { motif: 'text', x: 240, y: 160, text: '강강술래 — 한가위 밤의 원무', size: 22 },
        ]),
        safety: [HAND, SPACE, '빨라질 때 원이 너무 커지지 않게 옆 친구와 발을 맞추고, 뛰지 말고 빠르게 걸어요.'],
        stages: stages(
          {
            teacher: '강강술래 공개 영상 한 장면(또는 사진)을 보여 준다. "한가위 밤 바닷가 마을에서 손을 잡고 둥글게 도는 우리 춤이에요. 유네스코 인류무형문화유산이기도 해요." "처음과 끝의 빠르기가 같았나요?"를 물어 천천히 시작해 점점 빨라진다는 것을 찾게 한다. 노래 가사는 따로 가르치지 않고 장단과 움직임에 집중한다.',
            student: '강강술래 장면을 보고, 처음과 끝에서 빠르기가 어떻게 달라졌는지 찾아봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 강강술래의 흐름과 놀이 모양 알아보기', minutes: 12, tool: 'story',
              task: '강강술래가 빨라지는 차례, 덕석몰기의 장면 차례를 놓고, 놀이 이름과 모양을 이어요.',
              teacher: '"덕석은 멍석이에요. 멍석을 말듯 원이 어떻게 될까요?" 손으로 소용돌이를 그려 보인다. 놀이 모양을 이은 뒤 교실 바닥에 원을 그려 덕석몰기 길을 손가락으로 따라가게 한다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '강강술래가 빨라지는 차례대로 카드를 놓아요.', toolOptions: { cards: [{ id: 'fast', text: '잦은 강강술래', sub: '뛰듯이 빠르게', motif: 'star' }, { id: 'slow', text: '늦은 강강술래', sub: '천천히 걸으며', motif: 'moon' }, { id: 'mid', text: '중강강술래', sub: '조금 빠르게', motif: 'cloud' }], slots: ['처음', '가운데', '끝'] }, target: { order: ['slow', 'mid', 'fast'] }, levels: { easy: { state: { at: { slow: 0 } } }, challenge: { prompt: '강강술래가 빨라지는 차례대로 카드를 놓아요. 빠르기 단계가 아닌 카드는 남겨요.', toolOptions: { cards: [{ id: 'fast', text: '잦은 강강술래', sub: '뛰듯이 빠르게', motif: 'star' }, { id: 'slow', text: '늦은 강강술래', sub: '천천히 걸으며', motif: 'moon' }, { id: 'mid', text: '중강강술래', sub: '조금 빠르게', motif: 'cloud' }, { id: 'bow', text: '멈춰 서서 인사해요', sub: '박 없이', motif: 'sun' }] } } }, difficulty: 0.15 },
                { prompt: '덕석몰기의 장면을 일어나는 차례대로 놓아요.', toolOptions: { cards: [{ id: 'center', text: '소용돌이 가운데 모여요', motif: 'star' }, { id: 'circle', text: '손잡고 큰 원을 그려요', motif: 'moon' }, { id: 'unroll', text: '반대로 풀며 큰 원이 돼요', motif: 'wave' }, { id: 'roll', text: '앞사람 따라 안으로 감겨요', motif: 'leaf' }], slots: 4 }, target: { order: ['circle', 'roll', 'center', 'unroll'] }, levels: { challenge: { prompt: '덕석몰기의 장면을 일어나는 차례대로 놓아요. 덕석몰기 장면이 아닌 카드는 남겨요.', toolOptions: { cards: [{ id: 'center', text: '소용돌이 가운데 모여요', motif: 'star' }, { id: 'circle', text: '손잡고 큰 원을 그려요', motif: 'moon' }, { id: 'unroll', text: '반대로 풀며 큰 원이 돼요', motif: 'wave' }, { id: 'roll', text: '앞사람 따라 안으로 감겨요', motif: 'leaf' }, { id: 'face', text: '두 줄로 마주 보고 서요', motif: 'house' }] } } }, difficulty: 0.2,
                  conclude: '덕석몰기는 멍석을 말듯 원이 안으로 감겼다가 다시 풀려요. 처음과 끝이 큰 원으로 이어져요.' },
                { prompt: '강강술래 놀이 이름과 그 모양을 이어요.', toolOptions: { mode: 'match', slots: [{ id: 'mat', label: '덕석몰기', motif: 'leaf' }, { id: 'gate', label: '문지기놀이', motif: 'house' }, { id: 'fish', label: '청어엮기', motif: 'wave' }], cards: ['원이 멍석을 말듯 안으로 감겨요', '두 사람이 만든 문 아래로 줄이 지나가요', '맞잡은 팔 아래로 차례로 빠져나가며 줄을 엮어요'] }, target: { match: { mat: '원이 멍석을 말듯 안으로 감겨요', gate: '두 사람이 만든 문 아래로 줄이 지나가요', fish: '맞잡은 팔 아래로 차례로 빠져나가며 줄을 엮어요' } }, difficulty: 0.25 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 손잡고 원 돌며 빠르기 바꿔 보기', minutes: 14, tool: 'timer',
              task: '모둠이 손을 잡고 원을 그리며 늦은 가락에서 잦은 가락으로 빠르기를 바꾸어 돌아요. 안전 점검을 하고, 원이 끊기지 않고 돈 바퀴 수를 적은 뒤 점검해요.',
              teacher: '교사가 손뼉이나 북으로 늦게→빠르게 박을 바꾼다. "빨라져도 뛰지 말고 빠르게 걸어요. 원이 끊기면 그 자리에서 멈춰요." 손을 세게 당기는 학생이 있으면 바로 멈추고 손 잡는 법(손바닥을 가볍게 맞잡기)을 다시 보인다.',
              levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
              items: [
                { prompt: '손잡고 원을 돌기 전에 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['손바닥을 가볍게 맞잡았어요', '실내화 끈을 단단히 묶었어요', '원 안팎에 걸릴 물건이 없어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '빠르기마다 원이 끊기지 않고 돈 바퀴 수를 적어요.', toolOptions: { fields: [{ label: '늦은 가락', unit: '바퀴' }, { label: '중간 가락', unit: '바퀴' }, { label: '잦은 가락', unit: '바퀴' }] }, target: { records: true }, levels: { challenge: { toolOptions: { fields: [{ label: '늦은 가락', unit: '바퀴' }, { label: '중간 가락', unit: '바퀴' }, { label: '잦은 가락', unit: '바퀴' }, { label: '세 가락을 합친 바퀴', unit: '바퀴' }] } } }, difficulty: 0.15 },
                { prompt: '강강술래 활동을 마치고 해낸 것을 점검 목록에 표시해요.', target: { selfCheck: ['빨라져도 손을 세게 당기지 않았어요', '옆 친구와 발을 맞추어 돌았어요', '덕석몰기 길을 따라 걸어 보았어요'] }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"빨라질 때 원을 지키려면 무엇이 가장 중요했나요?" 옆 친구와 발 맞추기, 손 가볍게 잡기를 짚는다. "강강술래에서 가장 아름답다고 느낀 순간은 언제였나요?" 한두 학생이 근거를 들어 말한다.',
            exitTicket: [
              { type: 'tool', tool: 'story', options: { cards: [{ id: 'join', text: '두 사람이 손을 맞잡아 문을 만들어요', motif: 'house' }, { id: 'pass', text: '줄이 문 아래로 지나가요', motif: 'wave' }, { id: 'circle', text: '모두 다시 큰 원을 그려요', motif: 'moon' }], slots: ['처음', '가운데', '끝'] }, prompt: '문지기놀이 장면을 일어나는 차례대로 놓아요.', target: { order: ['join', 'pass', 'circle'] }, difficulty: 0.2 },
              { type: 'choice', prompt: '강강술래의 빠르기는 어떻게 바뀌나요?', options: ['처음부터 끝까지 빠르다', '천천히 시작해 점점 빨라진다', '빠르게 시작해 점점 느려진다'], answer: 1, difficulty: 0.1, explain: '늦은 강강술래에서 시작해 중강강술래, 잦은 강강술래로 빨라져요.' },
              { type: 'mood', prompt: '강강술래를 해 본 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '강강술래',
          items: [
            { type: 'figure', prompt: '덕석몰기 장면 카드에 일어나는 차례 번호를 쓰세요.', tool: 'story', wide: true, options: { cards: [{ id: 'center', text: '모이기', motif: 'star' }, { id: 'circle', text: '원 그리기', motif: 'moon' }, { id: 'unroll', text: '풀기', motif: 'wave' }, { id: 'roll', text: '감기', motif: 'leaf' }], slots: 4 }, figures: [{ state: {}, caption: '1 (     ) → 2 (     ) → 3 (     ) → 4 (     )' }], answer: '큰 원 → 안으로 감기 → 가운데 모이기 → 반대로 풀기' },
            { type: 'table', prompt: '빠르기마다 돈 바퀴 수와 느낌을 쓰세요.', columns: ['빠르기', '바퀴 수', '느낌'], cells: [['늦은 가락', '', ''], ['중간 가락', '', ''], ['잦은 가락', '', '']] },
            { type: 'choice', prompt: '강강술래를 주로 하던 때에 ○ 하세요.', options: ['한가위 밤', '한여름 낮', '설날 아침'], answer: '한가위 밤' },
            { type: 'short', prompt: '강강술래에서 가장 아름답다고 느낀 장면과 그 까닭을 쓰세요.' },
          ],
          easy: {
            note: '강강술래는 한가위 밤에 손을 잡고 둥글게 도는 우리 춤이에요. 천천히 시작해 점점 빨라져요.',
            items: [
              { type: 'choice', prompt: '강강술래는 어떤 모양으로 도나요?', options: ['둥근 원', '네모'], answer: '둥근 원' },
              { type: 'choice', prompt: '빨라질 때 손은?', options: ['가볍게 잡는다', '세게 당긴다'], answer: '가볍게 잡는다' },
              { type: 'draw', prompt: '달빛 아래 강강술래를 하는 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 맞는 자리에 놓으면 바로 표시되고, 틀리면 까닭을 말해 주고 되돌아와요. 카드 한 장이나 첫 차례가 미리 놓인 문항이 있어요.',
          base: '모두 놓은 뒤 확인해 스스로 고쳐요.',
          challenge: '시간 재기로 늦은 가락과 잦은 가락에서 한 바퀴에 걸린 시간을 재어 견주어요. 그럴듯한 함정 카드가 더해진 문항이 있어요. 기록판에 차이·합계를 셈해 적는 칸이 더해져요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 아름다운 움직임에 정답이 하나라고 여긴다 → 같은 원무를 보고도 느낀 순간이 다르다는 것을 나눈다. ② 잦은 가락에서 뛰다 넘어진다 → 빠르게 걷기, 원이 끊기면 멈춤. ③ 덕석몰기에서 가운데로 너무 빨리 들어가 밀린다 → 앞사람 등만 보고 천천히. 강강술래는 2009년 유네스코 인류무형문화유산으로 등재된 전래 민속놀이이며, 노래 가사는 이 차시에 싣지 않았다.',
      }),
      // ───────────────────────── 22 ─────────────────────────
      L(22, {
        title: '자연과 생활 속 아름다운 움직임 모으기',
        objective: '자연과 생활에서 아름답다고 느낀 움직임을 방향과 특징으로 나누어 모으고, 그 움직임을 아름답다고 느낀 까닭을 말할 수 있다.',
        illustration: art('a paper collage of beautiful motions — falling maple leaves, a rising fountain, a stretching cat and a heron taking off over a pond', [
          { motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'leaf', x: 110, y: 90 }, { motif: 'leaf', x: 150, y: 130, s: 0.7 },
          { motif: 'bird', x: 330, y: 84 }, { motif: 'wave', x: 240, y: 214 }, { motif: 'tree', x: 70, y: 214 },
          { motif: 'text', x: 240, y: 160, text: '둘레에서 찾은 아름다운 움직임', size: 22 },
        ]),
        safety: [SPACE, '바닥에 눕거나 구르는 동작은 매트 위에서만 해요.', STOP],
        stages: stages(
          {
            teacher: '"무용수만 아름답게 움직일까요?" 떨어지는 단풍잎, 솟는 분수, 기지개 켜는 고양이 사진을 차례로 보여 준다. "어느 움직임에서 아름다움을 느꼈나요? 왜요?" 정답이 아니라 느낀 까닭을 듣는다. 지난 시간 높낮이·빠르기·힘을 떠올리게 한다.',
            student: '사진 속 움직임 가운데 가장 아름답다고 느낀 것을 고르고 까닭을 한 낱말로 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 아름다운 움직임 모으고 특징 찾기', minutes: 14, tool: 'mindmap',
              task: '자연과 생활 속 움직임을 방향에 따라 나누고, 몸으로 나타낼 때 살릴 특징을 이어요. 하나를 골라 내 자리에서 몸으로 해 봐요.',
              teacher: '"분수는 위로, 단풍잎은 아래로 — 방향이 달라요." 특징을 이을 때 "똑같이 해야만 잘한 걸까요? 특징 하나를 크게 살리면 돼요"라고 짚는다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '움직임 카드를 방향에 따라 나누어요.', toolOptions: { topic: '어느 쪽으로 움직일까?', slots: ['위로 올라가요', '아래로 내려와요', '제자리에서 흔들려요'], cards: ['날아오르는 백로', '솟아오르는 분수', '떨어지는 단풍잎', '웅덩이에 떨어지는 빗방울', '바람에 흔들리는 갈대', '기지개 켜는 고양이'] }, target: { sort: { '위로 올라가요': ['날아오르는 백로', '솟아오르는 분수'], '아래로 내려와요': ['떨어지는 단풍잎', '웅덩이에 떨어지는 빗방울'], '제자리에서 흔들려요': ['바람에 흔들리는 갈대', '기지개 켜는 고양이'] } }, levels: { easy: { state: { at: { '날아오르는 백로': 0 } } }, challenge: { prompt: '움직임 카드를 방향에 따라 나누어요. 움직이지 않는 카드는 남겨요.', toolOptions: { cards: ['날아오르는 백로', '솟아오르는 분수', '떨어지는 단풍잎', '웅덩이에 떨어지는 빗방울', '바람에 흔들리는 갈대', '기지개 켜는 고양이', '꼼짝 않는 바위'] } } }, difficulty: 0.2 },
                { prompt: '대상과 몸으로 나타낼 때 살릴 특징을 이어요.', toolOptions: { mode: 'match', topic: '살릴 특징', slots: [{ id: 'leaf', label: '단풍잎' }, { id: 'fountain', label: '분수' }, { id: 'cat', label: '고양이 기지개' }], cards: ['빙그르르 돌며 천천히 내려와요', '웅크렸다 한꺼번에 솟아요', '등을 둥글게 말았다 길게 늘여요'] }, target: { match: { leaf: '빙그르르 돌며 천천히 내려와요', fountain: '웅크렸다 한꺼번에 솟아요', cat: '등을 둥글게 말았다 길게 늘여요' } }, difficulty: 0.2 },
                { prompt: '움직임이 아름다운 까닭을 잘 말한 것만 골라요.', toolOptions: { mode: 'pick', topic: '아름다운 까닭', cards: ['백로가 날개를 천천히 크게 펴서 시원해 보였어', '그냥 예뻐', '빗방울이 떨어진 자리에 동그라미가 퍼져서 신기했어', '다들 예쁘다고 해서'] }, target: { pick: ['백로가 날개를 천천히 크게 펴서 시원해 보였어', '빗방울이 떨어진 자리에 동그라미가 퍼져서 신기했어'] }, levels: { challenge: { prompt: '움직임이 아름다운 까닭을 잘 말한 것만 골라요. 움직임을 말하지 않은 까닭은 남겨요.', toolOptions: { cards: ['백로가 날개를 천천히 크게 펴서 시원해 보였어', '그냥 예뻐', '빗방울이 떨어진 자리에 동그라미가 퍼져서 신기했어', '다들 예쁘다고 해서', '백로는 원래 예쁜 새라서'] } } }, difficulty: 0.15,
                  conclude: '아름다움은 움직임의 방향·빠르기·모양에서 찾을 수 있어요. 무엇을 보고 느꼈는지 말하면 친구도 함께 느껴요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 서로 다르게 느낄 때', minutes: 12, tool: 'emotion',
              task: '아름다움을 다르게 느끼는 친구와 이야기하는 상황에서 어떻게 할지 골라요. 고른 말로 짝과 내 움직임을 소개해요.',
              teacher: '"내가 아름답다고 느낀 것을 친구가 아니라고 하면 어떤 마음일까요?" 둘 다 근거를 말하면 서로 새로 보게 된다는 것을 짚는다. 비웃는 말이 나오면 바로 멈추고 감상 약속을 다시 읽는다.',
              levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '친구가 "고양이 기지개는 아름다운 게 아니야"라고 해요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '내가 고른 ‘고양이 기지개’를 보고 친구가 "그건 아름다운 게 아니야"라고 해요.', choices: [{ id: 'fight', text: '"네가 몰라서 그래" 하고 화내요', result: '말다툼이 되었어요.', mood: '화남', why: '화내기보다 내 근거를 말해요.' }, { id: 'reason', text: '내가 본 까닭을 말하고 친구 생각도 물어요', result: '친구가 등을 길게 늘이는 모습을 다시 보았어요.', mood: '기쁨' }, { id: 'change', text: '얼른 다른 것으로 바꿔요', result: '내가 느낀 아름다움을 말하지 못했어요.', mood: '속상함', why: '내 느낌도 근거가 있으면 소중해요.' }] }, target: { choice: 'reason' }, levels: { easy: { toolOptions: { choices: [{ id: 'fight', text: '"네가 몰라서 그래" 하고 화내요', result: '말다툼이 되었어요.', mood: '화남', why: '화내기보다 내 근거를 말해요.' }, { id: 'reason', text: '내가 본 까닭을 말하고 친구 생각도 물어요', result: '친구가 등을 길게 늘이는 모습을 다시 보았어요.', mood: '기쁨' }] } } }, difficulty: 0.15 },
                { prompt: '친구 동작 발표를 보고 한 친구가 비웃어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '지아가 ‘떨어지는 빗방울’을 몸으로 보여 주는데 한 친구가 킥킥 비웃어요.', choices: [{ id: 'join', text: '나도 따라 웃어요', result: '지아가 동작을 멈추고 들어갔어요.', mood: '부끄러움', why: '비웃음은 표현하는 마음을 꺾어요.' }, { id: 'kind', text: '"끝까지 보자" 하고 다 보고 손뼉 쳐요', result: '지아가 끝까지 보여 주고 웃었어요.', mood: '뿌듯함' }, { id: 'away', text: '못 본 척 다른 데를 봐요', result: '지아는 혼자인 것 같았어요.', mood: '외로움', why: '친구 표현을 끝까지 봐 주어요.' }] }, target: { choice: 'kind' }, difficulty: 0.15 },
                { prompt: '친구의 움직임 소개를 듣고 건넬 말 가운데 알맞은 말만 골라요.', toolOptions: { mode: 'pick', basket: '건넬 말', cards: ['분수가 솟는 순간이 정말 힘차 보였어', '그게 뭐야', '나는 갈대가 더 좋지만 네 까닭도 알겠어', '빨리 끝내'] }, target: { pick: ['분수가 솟는 순간이 정말 힘차 보였어', '나는 갈대가 더 좋지만 네 까닭도 알겠어'] }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"오늘 친구 덕분에 새로 아름답다고 느낀 움직임이 있나요?" 두세 학생이 말한다. 다음 시간에는 마음에 든 움직임을 내 방식으로 바꾸어 본다고 알린다. 출구 1번을 틀린 학생에게는 대상이 어느 쪽으로 움직이는지 손으로 그려 보게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { topic: '어느 쪽으로 움직일까?', slots: ['위로 올라가요', '아래로 내려와요', '제자리에서 흔들려요'], cards: ['피어오르는 모닥불 연기', '내려앉는 눈송이', '바람에 나부끼는 깃발'] }, prompt: '새 움직임 카드를 방향에 따라 나누어요.', target: { sort: { '위로 올라가요': ['피어오르는 모닥불 연기'], '아래로 내려와요': ['내려앉는 눈송이'], '제자리에서 흔들려요': ['바람에 나부끼는 깃발'] } }, difficulty: 0.2 },
              { type: 'choice', prompt: '자연 속 움직임을 몸으로 나타낼 때 알맞은 것은 무엇인가요?', options: ['대상과 똑같이 해야만 잘한 것이다', '가장 두드러진 특징 하나를 크게 살린다', '손짓만 바꾸면 된다'], answer: 1, difficulty: 0.15, explain: '똑같이 하지 않아도 특징을 살리면 보는 사람이 알아봐요.' },
              { type: 'short', prompt: '오늘 모은 움직임 가운데 가장 아름다웠던 것과 그 까닭을 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '둘레의 아름다운 움직임',
          items: [
            { type: 'table', prompt: '자연과 생활에서 찾은 아름다운 움직임을 쓰세요.', columns: ['움직임', '방향', '살릴 특징', '아름다운 까닭'], rows: 3 },
            { type: 'choice', prompt: '‘떨어지는 단풍잎’을 나타낼 때 살릴 특징에 ○ 하세요.', options: ['빙그르르 돌며 천천히 내려온다', '쿵 하고 세게 떨어진다', '위로 솟아오른다'], answer: '빙그르르 돌며 천천히 내려온다' },
            { type: 'check', prompt: '친구의 표현을 볼 때 지킨 것에 ✓ 하세요.', options: ['끝까지 보았어요', '비웃지 않았어요', '좋았던 점을 말해 주었어요'] },
            { type: 'draw', prompt: '오늘 찾은 아름다운 움직임 하나를 그림으로 그리세요(움직이는 방향을 화살표로).' },
          ],
          easy: {
            note: '"○○해서 아름다웠어요"로 까닭을 써요.',
            items: [
              { type: 'choice', prompt: '위로 올라가는 움직임은?', options: ['솟는 분수', '떨어지는 잎'], answer: '솟는 분수' },
              { type: 'short', prompt: '내가 고른 아름다운 움직임을 쓰세요.' },
              { type: 'draw', prompt: '그 움직임을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 맞는 가지에 놓으면 바로 표시되고, 상황 판단 결과가 바로 보여요. 카드 한 장이나 첫 차례가 미리 놓인 문항이 있어요. 상황 판단 보기가 하나 적어요.',
          base: '모두 놓은 뒤 스스로 고치고, 결과를 보며 판단해요.',
          challenge: '결과가 맞힌 뒤에만 보여 먼저 짐작하고, 찾은 움직임을 방향과 빠르기 두 가지로 설명해요. 그럴듯한 함정 카드가 더해진 문항이 있어요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 아름다운 움직임은 정답이 하나라고 여긴다 → 친구와 다른 까닭을 나누게 한다. ② 대상과 똑같이 해야만 잘한 것이라고 여긴다 → 특징 하나를 크게 살린다. ③ 친구 표현을 비웃는다 → 감상 약속(끝까지 보기·비웃지 않기·좋은 점 말하기)을 다시 읽는다.',
      }),
      // ───────────────────────── 23 ─────────────────────────
      L(23, {
        title: '마음에 든 동작을 내 방식으로 바꾸어 보이기',
        objective: '마음에 든 동작 하나를 골라 높낮이·빠르기·방향·크기 가운데 하나를 바꾸어 나만의 동작으로 보이고, 친구 표현의 좋았던 점을 말할 수 있다.',
        illustration: art('a child copying a graceful arm movement from a paper picture card, then turning it into her own low, spinning version while friends watch and clap', [
          { motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'hills', y: 212 }, { motif: 'cloud', x: 100, y: 52 },
          { motif: 'star', x: 150, y: 110, s: 0.7 }, { motif: 'flower', x: 380, y: 200 },
          { motif: 'text', x: 240, y: 140, text: '따라 하고, 바꾸고, 나만의 동작', size: 22 },
        ]),
        safety: [SPACE, '낮은 자세나 도는 동작은 천천히 하고, 어지러우면 멈춰요.', STOP],
        stages: stages(
          {
            teacher: '지난 시간 고른 움직임 가운데 하나(예: 팔을 옆으로 천천히 펴기)를 교사가 그대로 해 보이고, 이어 앉아서·빠르게·돌며 세 가지로 바꾸어 보인다. "따라 한 것은 내 표현이 아닐까요? 바꾸어 보니 어떤가요?" 따라 하기에서 시작해 하나를 바꾸면 나만의 동작이 된다는 것을 짚는다.',
            student: '선생님이 같은 동작을 세 가지로 바꾸어 보였어요. 무엇을 바꾸었는지 찾아봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 바꾸는 방법 찾고 차례 세우기', minutes: 12, tool: 'mindmap',
              task: '원래 동작 ‘팔을 옆으로 천천히 펴기’를 바꾼 방법을 나누고, 나만의 동작을 만드는 차례를 정해요.',
              teacher: '"하나만 바꾸어도 느낌이 달라져요." 여러 가지를 한꺼번에 바꾸어 원래 동작이 사라진 학생에게 "무엇을 바꿨는지 하나만 말해 볼까요?"라고 묻는다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '‘팔을 옆으로 천천히 펴기’를 바꾼 동작들을 바꾼 방법에 따라 나누어요.', toolOptions: { topic: '무엇을 바꿨을까?', slots: ['높낮이', '빠르기', '방향', '크기'], cards: ['바닥에 앉아서 팔 펴기', '팔을 빠르게 휙 펴기', '뒤로 돌며 팔 펴기', '가슴 앞에서 작게 펴기'] }, target: { sort: { 높낮이: ['바닥에 앉아서 팔 펴기'], 빠르기: ['팔을 빠르게 휙 펴기'], 방향: ['뒤로 돌며 팔 펴기'], 크기: ['가슴 앞에서 작게 펴기'] } }, levels: { easy: { state: { at: { '바닥에 앉아서 팔 펴기': 0 } } }, challenge: { prompt: '‘팔을 옆으로 천천히 펴기’를 바꾼 동작들을 바꾼 방법에 따라 나누어요. 원래 동작과 똑같은 카드는 남겨요.', toolOptions: { cards: ['바닥에 앉아서 팔 펴기', '팔을 빠르게 휙 펴기', '뒤로 돌며 팔 펴기', '가슴 앞에서 작게 펴기', '팔을 옆으로 천천히 펴기'] } } }, difficulty: 0.2 },
                { prompt: '나만의 동작을 만드는 차례대로 카드를 놓아요.', toolOptions: { mode: 'order', cards: ['바꿀 요소 하나 고르기', '짝에게 보여 주고 원래와 견주기', '마음에 든 동작 따라 해 보기', '바꾼 동작 세 번 해 보기'] }, target: { order: ['마음에 든 동작 따라 해 보기', '바꿀 요소 하나 고르기', '바꾼 동작 세 번 해 보기', '짝에게 보여 주고 원래와 견주기'] }, levels: { easy: { state: { at: { '마음에 든 동작 따라 해 보기': 0 } } } }, difficulty: 0.2 },
                { prompt: '‘따라 하기에서 시작해도 내 표현이 된다’는 생각의 근거만 골라요.', toolOptions: { mode: 'pick', topic: '따라 해도 내 표현', cards: ['같은 동작도 빠르기를 바꾸면 느낌이 달라져요', '유명한 춤은 바꾸면 안 돼요', '내 몸 높이에 맞게 바꾸면 나만의 동작이 돼요', '따라 하면 다 베낀 거예요'] }, target: { pick: ['같은 동작도 빠르기를 바꾸면 느낌이 달라져요', '내 몸 높이에 맞게 바꾸면 나만의 동작이 돼요'] }, levels: { challenge: { prompt: '‘따라 하기에서 시작해도 내 표현이 된다’는 생각의 근거만 골라요. 그럴듯하지만 근거가 아닌 카드가 섞여 있어요.', toolOptions: { cards: ['같은 동작도 빠르기를 바꾸면 느낌이 달라져요', '유명한 춤은 바꾸면 안 돼요', '내 몸 높이에 맞게 바꾸면 나만의 동작이 돼요', '따라 하면 다 베낀 거예요', '처음 본 동작을 똑같이 따라 하기만 해요'] } } }, difficulty: 0.15,
                  conclude: '따라 하기는 배움의 시작이에요. 하나를 바꾸어 내 느낌을 담으면 나만의 표현이 돼요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 빠르기를 바꾼 동작을 리듬으로 나타내기', minutes: 14, tool: 'keyboard',
              task: '원래 동작은 온음표(4박에 한 번)예요. 빠르기를 바꾸면 2분음표(2박)·4분음표(1박)·8분음표(반 박)가 돼요. 리듬으로 놓고 그대로 몸으로 보인 뒤 점검해요.',
              teacher: '"4박에 한 번 펴던 팔을 2박에 한 번 펴면 어떤 느낌일까요?" 리듬을 놓은 학생부터 원래 마디와 바꾼 마디를 이어서 보인다. 친구 표현을 볼 때는 끝까지 보고 좋았던 점 하나를 말한다.',
              levels: {
                easy: Object.assign({ blocks: ['w', 'h', 'q', 'e'], showBeats: true }, R1),
                base: Object.assign({ blocks: ['w', 'h', 'q', 'e'] }, R1),
                challenge: Object.assign({ blocks: ['w', 'dh', 'h', 'q', 'e', 'qr'] }, R1),
              },
              items: [
                { prompt: '첫 마디는 원래 동작(4박에 한 번), 둘째 마디는 2박에 한 번씩 두 번 펴는 리듬을 듣고 놓아요.', toolOptions: { pattern: ['w', 'h', 'h'] }, target: { rhythm: ['w', 'h', 'h'] }, difficulty: 0.15 },
                { prompt: '첫 마디는 원래 동작 그대로, 둘째 마디는 반 박짜리 빠른 동작을 넣어 바꾼 두 마디를 지어요.', target: { beats: true, use: ['w', 'e'] }, difficulty: 0.3,
                  predict: { q: '반 박짜리로 바꾸면 느낌이 어떻게 될까요?', options: ['더 바빠요', '더 느긋해요', '그대로예요'], answer: 0 },
                  conclude: '같은 동작도 박 길이를 바꾸면 느긋함이 바쁨으로 바뀌어요. 빠르기는 느낌을 바꾸는 열쇠예요.' },
                { prompt: '바꾼 동작을 리듬에 맞춰 보이고, 해낸 것을 점검 목록에 표시해요.', toolOptions: { pattern: ['w', 'q', 'q', 'h'] }, target: { selfCheck: ['원래 동작과 바꾼 동작을 이어서 보였어요', '바꾼 요소를 말로 설명했어요', '친구 표현을 끝까지 보고 좋았던 점을 말했어요'] }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '몇 학생이 원래 동작과 바꾼 동작을 이어 보이고, 보는 학생이 "무엇을 바꾸었나요?"를 맞힌다. "따라 한 것도 내 표현이 될 수 있었나요?" 출구 2번을 틀린 학생과는 바꾼 동작을 다시 한 번 견주어 본다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { topic: '무엇을 바꿨을까?', slots: ['높낮이', '빠르기', '방향', '크기'], cards: ['발끝으로 서서 고개 돌리기', '고개를 아주 천천히 돌리기', '옆을 보며 고개 돌리기', '온몸으로 크게 돌기'] }, prompt: '‘고개를 돌리기’를 바꾼 동작을 바꾼 방법에 따라 나누어요.', target: { sort: { 높낮이: ['발끝으로 서서 고개 돌리기'], 빠르기: ['고개를 아주 천천히 돌리기'], 방향: ['옆을 보며 고개 돌리기'], 크기: ['온몸으로 크게 돌기'] } }, difficulty: 0.25 },
              { type: 'choice', prompt: '친구의 동작을 보고 따라 한 뒤 빠르기를 바꾸었어요. 알맞은 생각은 무엇인가요?', options: ['베낀 것이라 내 표현이 아니다', '하나를 바꾸었으니 나만의 표현이 되었다', '바꾸면 안 된다'], answer: 1, difficulty: 0.15, explain: '따라 하기에서 시작해 내 느낌을 담아 바꾸면 나만의 표현이에요.' },
              { type: 'mood', prompt: '나만의 동작을 만든 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '내 방식으로 바꾸기',
          items: [
            { type: 'table', prompt: '마음에 든 동작과 바꾼 동작을 쓰세요.', columns: ['마음에 든 동작', '바꾼 요소(높낮이·빠르기·방향·크기)', '바꾼 동작'], rows: 2 },
            { type: 'figure', prompt: '리듬 블록을 보고 마디마다 팔을 몇 번 펴는지 쓰세요.', tool: 'keyboard', options: R1, figures: [{ state: { rhythm: ['w', 'q', 'q', 'h'] }, caption: '첫째 마디 ___번, 둘째 마디 ___번' }], answer: '1번, 3번' },
            { type: 'choice', prompt: '‘가슴 앞에서 작게 펴기’는 무엇을 바꾼 것인가요?', options: ['높낮이', '빠르기', '크기'], answer: '크기' },
            { type: 'short', prompt: '친구 표현에서 좋았던 점 한 가지를 쓰세요.' },
            { type: 'draw', prompt: '원래 동작과 내가 바꾼 동작을 나란히 그리세요.' },
          ],
          easy: {
            note: '하나만 바꿔요: 낮게? 빠르게? 돌면서? 작게?',
            items: [
              { type: 'choice', prompt: '‘바닥에 앉아서 팔 펴기’는 무엇을 바꾼 것인가요?', options: ['높낮이', '빠르기'], answer: '높낮이' },
              { type: 'short', prompt: '내가 바꾼 동작을 쓰세요.' },
              { type: 'draw', prompt: '내가 바꾼 동작을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 맞는 가지에 놓으면 바로 표시되고, 리듬 마디마다 박 수가 보여요. 카드 한 장이나 첫 차례가 미리 놓인 문항이 있어요.',
          base: '모두 놓은 뒤 스스로 고치고, 박 수를 스스로 세어요.',
          challenge: '점2분음표·쉼표까지 써서 빠르기를 여러 번 바꾸고, 바꾼 요소를 두 가지까지 설명해요. 그럴듯한 함정 카드가 더해진 문항이 있어요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 남의 표현을 따라 하면 자기 표현이 아니라고 여긴다 → 하나를 바꾸어 견주게 한다. ② 한꺼번에 여러 가지를 바꾸어 원래 동작이 사라진다 → 요소 하나만. ③ 친구 표현을 끝까지 보지 않는다 → 볼 때 "무엇을 바꿨을까?"를 찾게 한다.',
      }),
      // ───────────────────────── 24 ─────────────────────────
      L(24, {
        title: '부채를 펴고 접으며 꽃이 피고 지는 모습 표현하기',
        objective: '부채(또는 손수건)를 펴고 접는 움직임으로 꽃봉오리에서 활짝 핀 꽃, 지는 꽃까지의 장면을 굿거리장단에 맞추어 표현할 수 있다.',
        illustration: art('children in a circle opening pastel paper fans together like a blooming peony, petals overlapping, with a janggu drum beside them', [
          { motif: 'flower', x: 240, y: 150, s: 1.6 }, { motif: 'flower', x: 120, y: 200 }, { motif: 'flower', x: 360, y: 200 },
          { motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'hills', y: 222 },
          { motif: 'text', x: 240, y: 60, text: '봉오리 → 활짝 → 바람 → 지는 꽃', size: 20 },
        ]),
        safety: [TOOL, '부채는 친구 얼굴 앞에서 세게 펴지 않고, 접을 때 손가락이 끼지 않게 천천히 접어요.', SPACE],
        stages: stages(
          {
            teacher: '교사가 부채를 접은 채 웅크렸다가 장구 박에 맞춰 반쯤, 활짝 펴며 일어서는 모습을 보인다. "무엇을 나타냈을까요?" 꽃이 피는 모습이라는 대답을 받고 "부채가 꽃잎이라면 몸은 무엇일까요?"를 묻는다. 부채가 없으면 손수건 두 장으로 꽃잎을 만든다. 우리나라 부채춤 사진 한 장을 보여 주되 동작을 그대로 따라 하지 않는다고 말한다.',
            student: '선생님 부채가 무엇을 나타냈는지 짐작하고, 부채가 꽃잎이라면 몸은 무엇일지 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 꽃 장면 차례와 연습 계획 세우기', minutes: 12, tool: 'timer',
              task: '꽃이 피고 지는 장면 카드를 차례대로 놓고, 연습 계획을 맞춘 뒤 실제로 부채를 들고 연습해요.',
              teacher: '"봉오리일 때 부채와 몸은 어떤 모양일까요? 작고 낮게." 장면이 바뀔 때 부채만 펴지 말고 몸도 낮은 자세에서 높은 자세로 함께 바꾸게 한다. 부채를 친구 얼굴 앞에서 펴지 않는다.',
              levels: { easy: { workStep: 10, restStep: 10, showTotal: true }, base: { showTotal: true }, challenge: { showTotal: false } },
              items: [
                { prompt: '꽃이 피고 지는 장면 카드를 차례대로 놓아요.', toolOptions: { cards: ['바람에 살랑 흔들려요', '부채를 접고 웅크린 봉오리', '천천히 접으며 앉는 지는 꽃', '부채를 활짝 펴 머리 위로', '부채를 반쯤 펴며 일어서요'] }, target: { order: ['부채를 접고 웅크린 봉오리', '부채를 반쯤 펴며 일어서요', '부채를 활짝 펴 머리 위로', '바람에 살랑 흔들려요', '천천히 접으며 앉는 지는 꽃'] }, difficulty: 0.2,
                  hints: ['꽃은 작고 낮은 모습에서 크고 높은 모습으로 자랐다가, 마지막에 다시 낮아져요. 부채가 얼마나 펴졌는지도 함께 보세요.', '부채가 반만 펴진 장면과 활짝 펴진 장면 가운데 무엇이 먼저일지, 흔들리는 장면은 활짝 핀 뒤인지 앞인지 견주어 보세요.'] },
                { prompt: '장면 하나를 25초씩 연습하고 사이마다 5초 쉬어, 다섯 장면을 모두 연습하도록 맞춰요.', toolOptions: { plan: { work: 30, rest: 10, rounds: 3 } }, target: { plan: { work: 25, rest: 5, rounds: 5 } }, difficulty: 0.25 },
                { prompt: '꽃 장면을 연습하고 해낸 것을 점검 목록에 표시해요.', target: { selfCheck: ['봉오리에서 몸을 작고 낮게 만들었어요', '부채를 펼 때 몸도 함께 일어섰어요', '부채를 친구 얼굴 앞에서 펴지 않았어요'] }, difficulty: 0.1 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 굿거리장단에 맞춰 꽃 피우기', minutes: 14, tool: 'keyboard',
              task: '굿거리장단을 듣고 열두 칸에 넣은 뒤, 큰 박 첫 칸에 부채를 펴는 걸음 장단도 놓아요. 장단에 맞춰 꽃 장면을 이어서 보여 줘요.',
              teacher: '"굿거리는 큰 박 네 개가 한 장단이고, 한 박이 세 칸이에요." 덩·쿵이 나오는 큰 박 첫 칸에서 부채를 한 단계씩 펴게 한다. 장단이 낯선 학생은 무릎으로 큰 박만 먼저 친다.',
              levels: {
                easy: { mode: 'janggu', beats: 12, group: 3, jangdan: '굿거리', strokes: ['덩', '쿵', '기덕', '더러러'] },
                base: { mode: 'janggu', beats: 12, group: 3, jangdan: '굿거리' },
                challenge: { mode: 'janggu', beats: 12, group: 3, jangdan: '굿거리', tempo: 112 },
              },
              items: [
                { prompt: '굿거리장단을 듣고 열두 칸에 구음을 넣어요.', toolOptions: { pattern: ['덩', '', '기덕', '쿵', '', '더러러', '쿵', '', '기덕', '쿵', '', '더러러'] }, target: { strokes: ['덩', '', '기덕', '쿵', '', '더러러', '쿵', '', '기덕', '쿵', '', '더러러'] }, difficulty: 0.3 },
                { prompt: '큰 박마다 첫 칸만 남긴 걸음 장단을 듣고 놓아요. 이 칸에서 부채를 한 단계씩 펴요.', toolOptions: { pattern: ['덩', '', '', '쿵', '', '', '쿵', '', '', '쿵', '', ''] }, target: { strokes: ['덩', '', '', '쿵', '', '', '쿵', '', '', '쿵', '', ''] }, difficulty: 0.2,
                  conclude: '큰 박 첫 칸에 맞춰 부채를 펴면 장단과 꽃 피는 모습이 함께 커져요.' },
                { prompt: '굿거리에 맞춰 꽃 장면을 이어 보이고 해낸 것을 표시해요.', target: { selfCheck: ['큰 박 첫 칸에서 부채를 폈어요', '장면이 바뀔 때 끊기지 않고 이어 갔어요', '지는 꽃에서 천천히 접으며 앉았어요'] }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '모둠마다 굿거리에 맞춰 꽃 장면을 보여 준다. "어느 모둠의 어느 장면이 가장 아름다웠나요? 왜요?" 근거를 들어 말하게 한다. 부채는 천천히 접어 돌려놓는다.',
            exitTicket: [
              { type: 'tool', tool: 'keyboard', options: { mode: 'janggu', beats: 12, group: 3, jangdan: '굿거리', strokes: ['덩', '쿵', '기덕', '더러러'], pattern: ['덩', '', '', '쿵', '', '', '쿵', '', '기덕', '쿵', '', ''] }, prompt: '셋째 큰 박에 기덕을 더한 걸음 장단을 듣고 열두 칸에 놓아요.', target: { strokes: ['덩', '', '', '쿵', '', '', '쿵', '', '기덕', '쿵', '', ''] }, difficulty: 0.3 },
              { type: 'choice', prompt: '‘봉오리’ 장면에서 몸과 부채는 어떤 모양이 알맞을까요?', options: ['부채를 활짝 펴고 높이 선다', '부채를 접고 몸을 작고 낮게 한다', '부채를 빠르게 흔든다'], answer: 1, difficulty: 0.1, explain: '봉오리는 아직 피지 않았으니 작고 낮게 웅크려요.' },
              { type: 'mood', prompt: '부채로 꽃을 표현한 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '부채로 피는 꽃',
          items: [
            { type: 'table', prompt: '꽃이 피고 지는 차례대로 1~5 번호를 쓰세요.', columns: ['꽃 장면', '차례 번호'], cells: [['바람에 살랑 흔들려요', ''], ['부채를 접고 웅크린 봉오리', ''], ['천천히 접으며 앉는 지는 꽃', ''], ['부채를 활짝 펴 머리 위로', ''], ['부채를 반쯤 펴며 일어서요', '']], answer: '봉오리 1, 반쯤 2, 활짝 3, 바람 4, 지는 꽃 5' },
            { type: 'figure', prompt: '굿거리 장단 칸에 구음을 쓰세요.', tool: 'keyboard', wide: true, options: { mode: 'janggu', beats: 12, group: 3, jangdan: '굿거리' }, figures: [{ state: {}, caption: '' }], answer: '덩 · 기덕 쿵 · 더러러 쿵 · 기덕 쿵 · 더러러' },
            { type: 'table', prompt: '장면마다 부채와 몸의 모양을 쓰세요.', columns: ['장면', '부채', '몸'], cells: [['봉오리', '', ''], ['활짝 핀 꽃', '', ''], ['지는 꽃', '', '']] },
            { type: 'draw', prompt: '우리 모둠이 만든 가장 아름다운 꽃 장면을 그리세요.' },
          ],
          easy: {
            note: '봉오리는 작고 낮게, 활짝 핀 꽃은 크고 높게, 지는 꽃은 다시 낮게!',
            items: [
              { type: 'choice', prompt: '활짝 핀 꽃 장면에서 부채는?', options: ['활짝 편다', '접는다'], answer: '활짝 편다' },
              { type: 'choice', prompt: '부채를 접을 때는?', options: ['손가락이 끼지 않게 천천히', '세게 탁'], answer: '손가락이 끼지 않게 천천히' },
              { type: 'draw', prompt: '부채로 만든 꽃을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '장단 붓이 네 가지뿐이고, 타이머를 10초씩 맞춰요.',
          base: '붓 다섯 가지 가운데 골라 놓고, 전체 시간을 화면에서 봐요.',
          challenge: '장단을 조금 더 빠르게 듣고 놓으며, 전체 시간을 스스로 셈해요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 부채만 펴고 몸은 서 있다 → 장면마다 몸의 높낮이를 함께 바꾼다. ② 남의 표현(부채춤 영상)을 그대로 따라 해야 한다고 여기거나, 따라 하면 내 표현이 아니라고 여긴다 → 사진에서 느낌만 얻고 우리 장면으로 바꾼다. ③ 장단 칸 수를 잃는다 → 큰 박 넷을 무릎으로 먼저 친다. 굿거리는 전래 국악 장단이다.',
      }),
      // ───────────────────────── 25 ─────────────────────────
      L(25, {
        title: '모둠 작품의 처음·가운데·끝과 대형 짜기',
        objective: '모둠 표현 작품을 처음·가운데·끝 장면으로 짜고, 관객에게 모두가 보이는 대칭 대형을 정해 작품으로 보일 수 있다.',
        illustration: art('a group of six children arranged in a mirror-symmetric formation on a paper stage, seen from above like flower petals, with arrows showing how they move from start to end', [
          { motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'star', x: 120, y: 90, s: 0.6 }, { motif: 'star', x: 360, y: 90, s: 0.6 },
          { motif: 'hills', y: 220 }, { motif: 'flower', x: 240, y: 170, s: 1.3 },
          { motif: 'text', x: 240, y: 60, text: '처음 · 가운데 · 끝', size: 24 },
        ]),
        safety: [SPACE, '대형을 바꿀 때는 정한 길로만 걷고, 뛰어서 자리를 바꾸지 않아요.', LOOK],
        stages: stages(
          {
            teacher: '"이야기에 처음·가운데·끝이 있듯 표현 작품에도 있어요." 교사가 ‘씨앗이 자라 꽃이 되는’ 짧은 표현을 세 장면으로 보인다. 이어 모둠원이 한 줄로 서 있을 때와 좌우가 같은 대형일 때 사진을 견준다. "어느 쪽이 관객에게 모두 잘 보이나요?"',
            student: '선생님이 보인 표현에서 처음·가운데·끝 장면이 각각 무엇이었는지 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 작품 장면을 처음·가운데·끝으로 짜기', minutes: 12, tool: 'story',
              task: '주제마다 장면 카드를 처음·가운데·끝 차례로 놓아요. 그다음 우리 모둠 주제를 정해 세 장면을 짜요.',
              teacher: '"처음은 작고 조용하게, 가운데는 가장 크게, 끝은 다시 모이며 멈추면 보는 사람이 따라가기 쉬워요." 가운데 장면을 맨 앞에 두는 모둠에는 "처음부터 가장 크면 다음에 무엇을 보여 줄까요?"를 묻는다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '‘씨앗이 꽃이 되기’ 작품의 장면을 처음·가운데·끝 차례로 놓아요.', toolOptions: { cards: [{ id: 'bloom', text: '팔을 펴 활짝 핀 꽃 대형', motif: 'flower' }, { id: 'seed', text: '모두 웅크린 씨앗', motif: 'leaf' }, { id: 'sprout', text: '싹이 트며 천천히 일어서요', motif: 'tree' }], slots: ['처음', '가운데', '끝'] }, target: { order: ['seed', 'sprout', 'bloom'] }, difficulty: 0.1,
                  levels: { challenge: { prompt: '‘씨앗이 꽃이 되기’ 장면을 차례로 놓아요. 주제와 상관없는 카드는 남겨요.', toolOptions: { cards: [{ id: 'bloom', text: '팔을 펴 활짝 핀 꽃 대형', motif: 'flower' }, { id: 'seed', text: '모두 웅크린 씨앗', motif: 'leaf' }, { id: 'sprout', text: '싹이 트며 천천히 일어서요', motif: 'tree' }, { id: 'snow', text: '눈사람처럼 굴러가요', motif: 'snow' }] } } } },
                { prompt: '‘바람개비’ 작품의 네 장면을 차례대로 놓아요.', toolOptions: { cards: [{ id: 'fast', text: '쌩쌩 빠르게 돌아요', motif: 'star' }, { id: 'stop', text: '멈춘 바람개비', motif: 'house' }, { id: 'calm', text: '바람이 그쳐 천천히 멈춰요', motif: 'moon' }, { id: 'slow', text: '살살 천천히 돌기 시작해요', motif: 'cloud' }], slots: 4 }, target: { order: ['stop', 'slow', 'fast', 'calm'] }, levels: { easy: { state: { at: { stop: 0 } } } }, difficulty: 0.2 },
                { prompt: '‘바다의 하루’ 작품의 장면을 처음·가운데·끝 차례로 놓아요.', toolOptions: { cards: [{ id: 'noon', text: '한낮의 거센 파도', motif: 'wave' }, { id: 'dusk', text: '노을 속 잔잔한 물결', motif: 'moon' }, { id: 'dawn', text: '새벽의 고요한 바다', motif: 'sun' }], slots: ['처음', '가운데', '끝'] }, target: { order: ['dawn', 'noon', 'dusk'] }, levels: { easy: { state: { at: { dawn: 0 } } }, challenge: { prompt: '‘바다의 하루’ 작품의 장면을 처음·가운데·끝 차례로 놓아요. 바다의 하루와 상관없는 카드는 남겨요.', toolOptions: { cards: [{ id: 'noon', text: '한낮의 거센 파도', motif: 'wave' }, { id: 'dusk', text: '노을 속 잔잔한 물결', motif: 'moon' }, { id: 'dawn', text: '새벽의 고요한 바다', motif: 'sun' }, { id: 'snow', text: '눈 덮인 겨울 산', motif: 'snow' }] } } }, difficulty: 0.15,
                  conclude: '처음은 조용히 열고, 가운데에서 가장 크게, 끝은 차분히 닫으면 작품이 하나의 이야기가 돼요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 대칭 대형 짜기', minutes: 14, tool: 'collage',
              task: '동그라미 하나가 모둠원 한 명이에요. 접는 선을 기준으로 양쪽이 같은 대형을 만들고, 우리 모둠의 끝 대형도 짜요. 짠 대형대로 강당에 서 봐요.',
              teacher: '"접는 선이 관객이 보는 가운데예요. 양쪽이 같으면 안정되어 보여요." 친구 뒤에 가려지는 자리가 없는지 무대 앞에서 직접 확인하게 한다. 대형을 바꿀 때는 정한 길로 걷는다.',
              levels: {
                easy: { shapes: ['circle'], colors: ['파랑', '분홍'], sizes: ['m'] },
                base: { shapes: ['circle', 'star'], colors: ['파랑', '분홍', '노랑'], sizes: ['m'] },
                challenge: { shapes: ['circle', 'star', 'square'], colors: ['파랑', '분홍', '노랑'], sizes: ['s', 'm'] },
              },
              items: [
                { prompt: '왼쪽에 선 세 명과 짝을 이루도록 오른쪽에 세 명을 놓아 좌우가 같은 여섯 명 대형을 만들어요.', state: { pieces: [{ shape: 'circle', color: '파랑', size: 'm', x: 220, y: 120, r: 0 }, { shape: 'circle', color: '파랑', size: 'm', x: 160, y: 200, r: 0 }, { shape: 'circle', color: '파랑', size: 'm', x: 220, y: 280, r: 0 }] }, target: { symmetry: 'vertical', has: [{ shape: 'circle', n: 6 }] }, difficulty: 0.2 },
                { prompt: '앞줄 세 명과 마주 보도록 뒷줄에 세 명을 놓아 위아래가 같은 대형을 만들어요.', state: { pieces: [{ shape: 'circle', color: '분홍', size: 'm', x: 160, y: 140, r: 0 }, { shape: 'circle', color: '분홍', size: 'm', x: 280, y: 100, r: 0 }, { shape: 'circle', color: '분홍', size: 'm', x: 400, y: 140, r: 0 }] }, target: { symmetry: 'horizontal', has: [{ shape: 'circle', n: 6 }] }, difficulty: 0.25 },
                { prompt: '우리 모둠 작품의 끝 대형을 자유롭게 짜고, 해낸 것을 점검 목록에 표시해요.', target: { selfCheck: ['모둠원 모두가 관객에게 보여요', '친구와 팔 간격이 있어요', '처음 대형과 끝 대형이 달라요'], minPieces: 4 }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '모둠마다 처음·가운데·끝 장면과 대형으로 작품을 한 번 보인다. "대형이 바뀔 때 끊기지 않았나요? 모두가 보였나요?" 출구 1번을 틀린 학생에게 가운데 장면이 가장 커야 하는 까닭을 다시 묻는다.',
            exitTicket: [
              { type: 'tool', tool: 'story', options: { cards: [{ id: 'mid', text: '팔을 크게 뻗어 하늘로 오르는 연', motif: 'cloud' }, { id: 'end', text: '줄을 감으며 땅으로 내려앉아요', motif: 'hills' }, { id: 'start', text: '바닥에 놓인 연이 바람을 기다려요', motif: 'leaf' }], slots: ['처음', '가운데', '끝'] }, prompt: '‘하늘을 나는 연’ 작품의 장면을 처음·가운데·끝 차례로 놓아요.', target: { order: ['start', 'mid', 'end'] }, difficulty: 0.15 },
              { type: 'choice', prompt: '모둠 대형을 정할 때 가장 먼저 생각할 것은 무엇인가요?', options: ['내가 가장 앞에 서기', '모두가 관객에게 보이기', '한 줄로 길게 서기'], answer: 1, difficulty: 0.1, explain: '가려지는 친구가 없어야 모둠 작품이 모두 보여요.' },
              { type: 'mood', prompt: '모둠 작품을 짠 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '우리 모둠 작품 짜기',
          items: [
            { type: 'table', prompt: '우리 모둠 작품의 장면을 쓰세요.', columns: ['', '처음', '가운데', '끝'], cells: [['장면', '', '', ''], ['움직임(크기·빠르기)', '', '', ''], ['대형', '', '', '']] },
            { type: 'figure', wide: true, prompt: '접는 선을 기준으로 양쪽이 같도록 오른쪽에 친구 자리(○)를 그려 넣으세요.', tool: 'collage', options: { guide: 'vertical', printColors: false }, figures: [{ state: { pieces: [{ shape: 'circle', color: '파랑', size: 'm', x: 220, y: 120, r: 0 }, { shape: 'circle', color: '파랑', size: 'm', x: 160, y: 200, r: 0 }, { shape: 'circle', color: '파랑', size: 'm', x: 220, y: 280, r: 0 }] }, caption: '' }], answer: '오른쪽 (340,120)·(400,200)·(340,280) 자리에 ○' },
            { type: 'choice', prompt: '작품에서 가장 크고 힘찬 장면이 오기 좋은 곳에 ○ 하세요.', options: ['처음', '가운데', '끝'], answer: '가운데' },
            { type: 'draw', prompt: '우리 모둠의 끝 대형을 위에서 본 모습으로 그리세요(한 사람 = ○).' },
          ],
          easy: {
            note: '처음은 작게, 가운데는 크게, 끝은 다시 모여요. 대형은 양쪽을 같게!',
            items: [
              { type: 'choice', prompt: '‘씨앗’ 장면은 어디에 올까요?', options: ['처음', '끝'], answer: '처음' },
              { type: 'choice', prompt: '좋은 대형은?', options: ['모두가 보인다', '친구 뒤에 숨는다'], answer: '모두가 보인다' },
              { type: 'draw', prompt: '우리 모둠 대형을 ○로 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '장면 카드를 맞는 자리에 놓으면 바로 표시되고, 대형 조각은 동그라미 두 색뿐이에요. 카드 한 장이나 첫 차례가 미리 놓인 문항이 있어요.',
          base: '모두 놓은 뒤 스스로 고치고, 별 조각으로 이끔이 자리를 표시할 수 있어요.',
          challenge: '첫 문항에 주제와 상관없는 카드가 섞이고, 대형에 크기가 다른 조각(앞줄 작게)까지 써요. 그럴듯한 함정 카드가 더해진 문항이 있어요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 남의 표현을 따라 하면 자기 표현이 아니라고 여겨 장면 짜기를 어려워한다 → 지난 차시에 바꾼 동작을 장면에 넣게 한다. ② 가장 큰 장면을 처음에 둔다 → 이야기처럼 가운데에서 가장 크게. ③ 대형에서 키 작은 친구가 가려진다 → 무대 앞에서 직접 확인한다.',
      }),
      // ───────────────────────── 26 ─────────────────────────
      L(26, {
        title: '모둠 공연 보고 좋았던 점을 근거 들어 말하기',
        objective: '다른 모둠의 표현 작품을 끝까지 감상하고, 좋았던 점을 본 장면과 움직임을 근거로 들어 말할 수 있다.',
        illustration: art('an audience of children sitting quietly and clapping while a group performs on a paper stage, with speech bubbles holding stars and hearts', [
          { motif: 'moon', x: 410, y: 56, s: 0.7 }, { motif: 'star', x: 90, y: 54, s: 0.6 }, { motif: 'star', x: 150, y: 80, s: 0.4 },
          { motif: 'hills', y: 220 }, { motif: 'flower', x: 240, y: 190 },
          { motif: 'text', x: 240, y: 130, text: '좋았던 점 + 그 장면', size: 24 },
        ]),
        safety: ['관객 자리는 무대에서 세 걸음 넘게 떨어진 곳으로 정해요.', '공연 중에는 무대로 들어가지 않아요.', SPACE],
        stages: stages(
          {
            teacher: '"오늘은 모둠 작품 공연 날이에요. 관객이 할 일은 무엇일까요?" 끝까지 보기, 손뼉, 좋았던 점 찾기를 칠판에 적는다. 두 가지 감상을 들려준다. "좋았어." / "가운데 장면에서 셋이 동시에 뛰어올라 힘찼어." "어느 말이 더 기억에 남나요?"',
            student: '두 감상 가운데 어느 말이 발표한 모둠에게 더 도움이 될지 골라 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 근거 있는 감상 말 고르기', minutes: 12, tool: 'emotion',
              task: '공연을 보고 건넬 말과 관객의 행동을 골라요. 감상 말을 느낀 점·좋았던 점·바라는 점으로 나누어 잇고, 실제 공연 뒤 그 틀로 말해요.',
              teacher: '"본 장면이 들어 있나요? 움직임이 들어 있나요?" 바라는 점은 고칠 점이 아니라 다음에 보고 싶은 것을 말하는 것이라고 알려 준다. 공연 중 실수한 모둠을 보는 관객의 행동도 함께 정한다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '공연을 보고 건넬 말 가운데 근거가 있는 칭찬만 골라요.', toolOptions: { mode: 'pick', basket: '근거 있는 칭찬', cards: ['가운데 장면에서 셋이 동시에 뛰어올라 힘찼어', '잘했어', '부채를 천천히 펼 때 정말 꽃 같았어', '우리 모둠보다 못했어'] }, target: { pick: ['가운데 장면에서 셋이 동시에 뛰어올라 힘찼어', '부채를 천천히 펼 때 정말 꽃 같았어'] }, levels: { challenge: { prompt: '공연을 보고 건넬 말 가운데 근거가 있는 칭찬만 골라요. 어느 장면인지 없는 칭찬은 남겨요.', toolOptions: { cards: ['가운데 장면에서 셋이 동시에 뛰어올라 힘찼어', '잘했어', '부채를 천천히 펼 때 정말 꽃 같았어', '우리 모둠보다 못했어', '다 좋았어, 최고야'] } } }, difficulty: 0.1 },
                { prompt: '공연 중 한 친구가 동작을 잊고 멈췄어요. 관객인 나는 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '공연 중 한 친구가 동작을 잊고 잠깐 멈췄어요.', choices: [{ id: 'laugh', text: '크게 웃으며 손가락질해요', result: '친구가 부끄러워 공연을 멈췄어요.', mood: '부끄러움', why: '실수를 웃으면 공연하는 마음이 꺾여요.' }, { id: 'wait', text: '조용히 기다리고 끝나면 크게 손뼉 쳐요', result: '친구가 다시 이어 끝까지 했어요.', mood: '뿌듯함' }, { id: 'shout', text: '"틀렸다!" 하고 알려 줘요', result: '모둠 모두가 당황했어요.', mood: '놀람', why: '공연 중에는 조용히 보고, 말은 끝난 뒤에 해요.' }] }, target: { choice: 'wait' }, levels: { easy: { toolOptions: { choices: [{ id: 'laugh', text: '크게 웃으며 손가락질해요', result: '친구가 부끄러워 공연을 멈췄어요.', mood: '부끄러움', why: '실수를 웃으면 공연하는 마음이 꺾여요.' }, { id: 'wait', text: '조용히 기다리고 끝나면 크게 손뼉 쳐요', result: '친구가 다시 이어 끝까지 했어요.', mood: '뿌듯함' }] } } }, difficulty: 0.1 },
                { prompt: '감상 말을 느낀 점·좋았던 점·바라는 점과 이어요.', toolOptions: { mode: 'match', weather: false, cards: ['마지막 장면에서 가슴이 찡했어요', '셋이 동시에 뛰어올라 힘찼어요', '끝 동작을 조금 더 길게 멈추면 좋겠어요'], slots: [{ id: 'feel', label: '느낀 점' }, { id: 'good', label: '좋았던 점' }, { id: 'wish', label: '바라는 점' }] }, target: { match: { feel: '마지막 장면에서 가슴이 찡했어요', good: '셋이 동시에 뛰어올라 힘찼어요', wish: '끝 동작을 조금 더 길게 멈추면 좋겠어요' } }, levels: { easy: { state: { at: { '마지막 장면에서 가슴이 찡했어요': 0 } } } }, difficulty: 0.2,
                  conclude: '느낀 점·좋았던 점·바라는 점에 본 장면을 넣어 말하면 발표한 모둠이 무엇이 전해졌는지 알 수 있어요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 공연 보고 감상 나누기', minutes: 14, tool: 'timer',
              task: '모둠 공연을 차례로 보고 감상 나누기 차례를 정해요. 모둠마다 찾은 좋았던 점 수를 적고, 관객으로서 점검해요.',
              teacher: '"모둠마다 좋았던 점을 하나 넘게 찾아 봐요." 같은 말만 되풀이하는 학생에게 장면 하나를 정해 그 장면의 움직임을 말하게 한다. 감상은 고마움 표현으로 마친다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '공연 뒤 감상 나누기를 하는 차례대로 카드를 놓아요.', toolOptions: { cards: ['바라는 점 한 가지 말하기', '본 장면 떠올리기', '고맙다고 손뼉 치기', '좋았던 점과 그 장면 말하기'] }, target: { order: ['본 장면 떠올리기', '좋았던 점과 그 장면 말하기', '바라는 점 한 가지 말하기', '고맙다고 손뼉 치기'] }, levels: { easy: { state: { order: ['본 장면 떠올리기', '바라는 점 한 가지 말하기', '고맙다고 손뼉 치기', '좋았던 점과 그 장면 말하기'] } } }, difficulty: 0.15,
                  hints: ['떠올려야 말할 수 있어요. 말할 때는 힘이 되는 말을 먼저, 바라는 말은 그다음, 마지막은 공연해 준 마음에 답해요.', '좋았던 점과 바라는 점 가운데 무엇을 먼저 말할지, 손뼉은 처음과 끝 가운데 언제일지 견주어 보세요.'] },
                { prompt: '모둠 공연마다 내가 찾은 좋았던 점 수를 적어요.', toolOptions: { fields: [{ label: '해님 모둠', unit: '가지' }, { label: '달님 모둠', unit: '가지' }, { label: '별님 모둠', unit: '가지' }] }, target: { records: true }, levels: { challenge: { toolOptions: { fields: [{ label: '해님 모둠', unit: '가지' }, { label: '달님 모둠', unit: '가지' }, { label: '별님 모둠', unit: '가지' }, { label: '세 모둠을 합친 수', unit: '가지' }] } } }, difficulty: 0.15 },
                { prompt: '공연을 다 보고 관객으로서 해낸 것을 점검 목록에 표시해요.', target: { selfCheck: ['모든 공연을 끝까지 보았어요', '실수한 친구를 웃지 않았어요', '본 장면을 넣어 좋았던 점을 말했어요'] }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"오늘 들은 감상 가운데 우리 모둠에게 가장 힘이 된 말은 무엇이었나요?" 모둠마다 하나씩 말한다. 출구 2번을 틀린 학생과는 공연 중과 공연 뒤에 할 일을 다시 나눈다.',
            exitTicket: [
              { type: 'tool', tool: 'emotion', options: { mode: 'pick', basket: '근거 있는 칭찬', cards: ['리본이 큰 원을 그릴 때 몸도 같이 돌아서 멋졌어', '최고야', '끝 대형이 꽃잎처럼 양쪽이 같아서 예뻤어', '그냥 그랬어'] }, prompt: '도구 표현 공연을 보고 건넬 말 가운데 근거 있는 칭찬만 골라요.', target: { pick: ['리본이 큰 원을 그릴 때 몸도 같이 돌아서 멋졌어', '끝 대형이 꽃잎처럼 양쪽이 같아서 예뻤어'] }, difficulty: 0.15 },
              { type: 'choice', prompt: '공연 중 친구가 실수했을 때 관객이 할 일은 무엇인가요?', options: ['바로 틀렸다고 말한다', '조용히 기다리고 끝나면 손뼉 친다', '웃는다'], answer: 1, difficulty: 0.1, explain: '공연 중에는 조용히 응원하고, 말은 끝난 뒤에 해요.' },
              { type: 'short', prompt: '오늘 본 공연 가운데 가장 기억에 남는 장면과 그 까닭을 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '공연 감상문',
          items: [
            { type: 'table', prompt: '본 공연마다 감상을 쓰세요.', columns: ['모둠', '느낀 점', '좋았던 점(장면)', '바라는 점'], rows: 3 },
            { type: 'choice', prompt: '근거 있는 칭찬에 ○ 하세요.', options: ['"잘했어"', '"부채를 천천히 펼 때 꽃 같았어"', '"우리보다 못했어"'], answer: '"부채를 천천히 펼 때 꽃 같았어"' },
            { type: 'check', prompt: '관객으로서 지킨 것에 ✓ 하세요.', options: ['끝까지 보았어요', '실수를 웃지 않았어요', '끝나고 손뼉 쳤어요', '장면을 넣어 칭찬했어요'] },
            { type: 'short', prompt: '우리 모둠이 받은 감상 가운데 가장 힘이 된 말을 쓰세요.' },
          ],
          easy: {
            note: '"○○ 장면에서 ○○해서 좋았어"로 써요.',
            items: [
              { type: 'choice', prompt: '공연 중 친구가 멈추면?', options: ['조용히 기다린다', '크게 웃는다'], answer: '조용히 기다린다' },
              { type: 'blank', prompt: '빈칸을 채워 칭찬을 쓰세요.', text: '___ 장면에서 ___해서 좋았어.', answer: '예: 끝 장면에서 모두 멈춰서 좋았어' },
              { type: 'draw', prompt: '가장 기억에 남는 장면을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 맞게 고르면 바로 표시되고, 아닌 카드는 까닭을 말해 주고 되돌아와요. 상황 판단 보기가 하나 적어요. 카드 한 장이나 첫 차례가 미리 놓인 문항이 있어요.',
          base: '모두 고른 뒤 확인해 스스로 고쳐요.',
          challenge: '감상 말을 세 가지 틀(느낀 점·좋았던 점·바라는 점)로 모두 말하고, 장면과 움직임 요소를 넣어요. 그럴듯한 함정 카드가 더해진 문항이 있어요. 기록판에 차이·합계를 셈해 적는 칸이 더해져요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 표현을 보는 것은 시간 때우기라고 여겨 집중하지 않는다 → 모둠마다 좋았던 점 찾기 수를 적게 한다. ② "잘했어"로만 말한다 → 장면+움직임을 넣는다. ③ 공연 중 실수를 바로 말한다 → 공연 중은 조용히, 말은 끝난 뒤.',
      }),
      // ───────────────────────── 27 ─────────────────────────
      L(27, {
        title: '우리 반이 더 보고 싶은 표현 갈래 조사하기',
        objective: '여러 표현 갈래의 특징을 알고, 우리 반이 더 보고 싶은 갈래를 조사해 막대그래프로 나타내며 고른 까닭을 말할 수 있다.',
        illustration: art('a paper bar chart of favorite dance styles with tiny paper dancers on top — a mask dancer, a ballerina, a breakdancer and a fan dancer', [
          { motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'hills', y: 222 }, { motif: 'cloud', x: 90, y: 50 },
          { motif: 'star', x: 140, y: 110, s: 0.6 }, { motif: 'star', x: 330, y: 96, s: 0.7 },
          { motif: 'text', x: 240, y: 150, text: '더 보고 싶은 표현은?', size: 24 },
        ]),
        safety: [SPACE, '갈래마다 동작을 따라 해 볼 때는 바닥에서 구르거나 손 짚고 도는 동작은 하지 않아요.', STOP],
        stages: stages(
          {
            teacher: '탈춤·발레·비보잉·강강술래·부채춤 사진(학교에서 쓸 수 있는 자료)을 한 장씩 보여 준다. "어떤 표현인지 알고 있나요? 무엇이 다른가요?" 이어 "다른 사람 공연을 보는 것은 시간 때우기일까요, 배울 것이 있을까요?"를 묻는다. 오늘은 반 친구들이 더 보고 싶은 갈래를 조사한다고 알린다.',
            student: '사진 속 표현 가운데 본 적 있는 것을 고르고, 무엇이 기억나는지 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 표현 갈래의 특징 알기', minutes: 19, tool: 'mindmap',
              task: '먼저 갈래마다 대표 동작을 다 함께 1분씩 해 봐요(탈춤 어깨춤과 발 디딤, 발레 발끝 서기와 팔 둥글게, 탭댄스 발 구르기, 강강술래 손잡고 걷기, 부채춤 부채 펴기 흉내 — 약 8분). 그다음 표현 갈래와 특징을 잇고, 어디에서 생겨난 표현인지 나누고, 감상에서 배울 수 있는 것을 골라요.',
              teacher: '"탈춤은 탈을 쓰고 이야기를 하는 우리 춤이에요. 비보잉은 미국 뉴욕에서 시작되었어요." 갈래 이름만 외우게 하지 않고, 카드 잇기 전에 갈래마다 대표 동작을 교사가 먼저 보이고 반 전체가 1분씩 따라 한다. 비보잉은 바닥에서 손으로 몸을 받치는 동작이 위험하므로 서서 하는 팔·어깨 흔들기로 바꾸어 한다. 발끝 서기는 벽이나 짝 어깨를 잡고 한다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '표현 갈래와 그 움직임 특징을 이어요.', toolOptions: { mode: 'match', topic: '표현 갈래', slots: [{ id: 'mask', label: '탈춤' }, { id: 'ballet', label: '발레' }, { id: 'bboy', label: '비보잉' }], cards: ['탈을 쓰고 어깨춤과 발 디딤으로 이야기를 해요', '발끝으로 서서 우아하게 돌고 뛰어요', '바닥에서 손으로 몸을 받쳐 돌거나 멈춰요'] }, target: { match: { mask: '탈을 쓰고 어깨춤과 발 디딤으로 이야기를 해요', ballet: '발끝으로 서서 우아하게 돌고 뛰어요', bboy: '바닥에서 손으로 몸을 받쳐 돌거나 멈춰요' } }, levels: { easy: { state: { at: { '탈을 쓰고 어깨춤과 발 디딤으로 이야기를 해요': 0 } } }, challenge: { prompt: '표현 갈래와 그 움직임 특징을 이어요. 어느 갈래에도 짝이 없는 카드가 하나 남아요.', toolOptions: { cards: ['탈을 쓰고 어깨춤과 발 디딤으로 이야기를 해요', '발끝으로 서서 우아하게 돌고 뛰어요', '바닥에서 손으로 몸을 받쳐 돌거나 멈춰요', '발로 바닥을 두드려 소리를 내요'] } } }, difficulty: 0.2 },
                { prompt: '표현 갈래를 생겨난 곳에 따라 나누어요.', toolOptions: { topic: '어디에서 생겨났을까?', slots: ['우리나라', '다른 나라'], cards: ['탈춤', '발레', '강강술래', '비보잉', '부채춤', '탭댄스'] }, target: { sort: { 우리나라: ['탈춤', '강강술래', '부채춤'], '다른 나라': ['발레', '비보잉', '탭댄스'] } }, levels: { challenge: { prompt: '표현 갈래를 생겨난 곳에 따라 나누어요. 표현 갈래가 아닌 카드는 남겨요.', toolOptions: { cards: ['탈춤', '발레', '강강술래', '비보잉', '부채춤', '탭댄스', '축구'] } } }, difficulty: 0.2 },
                { prompt: '다른 사람의 표현을 감상하며 배울 수 있는 것만 골라요.', toolOptions: { mode: 'pick', topic: '감상에서 배워요', cards: ['새로운 동작 아이디어', '몸으로 마음을 전하는 방법', '여러 나라와 우리 문화의 멋', '그냥 시간이 지나가요'] }, target: { pick: ['새로운 동작 아이디어', '몸으로 마음을 전하는 방법', '여러 나라와 우리 문화의 멋'] }, levels: { challenge: { prompt: '다른 사람의 표현을 감상하며 배울 수 있는 것만 골라요. 그럴듯하지만 틀린 카드가 섞여 있어요.', toolOptions: { cards: ['새로운 동작 아이디어', '몸으로 마음을 전하는 방법', '여러 나라와 우리 문화의 멋', '그냥 시간이 지나가요', '잘하는 사람만 표현할 수 있다는 것'] } } }, difficulty: 0.1,
                  conclude: '표현을 보면 새 동작과 마음을 전하는 법, 문화의 멋을 배울 수 있어요. 감상도 배움이에요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 더 보고 싶은 갈래 조사해 그래프로 나타내기', minutes: 7, tool: 'chart',
              task: '우리 반 28명이 더 보고 싶은 표현 갈래를 하나씩 골랐어요. 조사 표를 막대그래프로 나타내고 읽어요. 그다음 우리 반 실제 조사를 활동지에 해요.',
              teacher: '"가장 많은 갈래만 중요할까요? 한 명이 고른 갈래에도 까닭이 있어요." 그래프를 읽은 뒤 고른 까닭을 두세 학생에게 듣는다. 실제 우리 반 조사는 손을 들어 세고 활동지 표에 적는다.',
              levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '조사 표를 보고 더 보고 싶은 표현 갈래 막대그래프를 완성해요.', toolOptions: { type: 'bar', title: '더 보고 싶은 표현 갈래', unit: '명', xLabel: '갈래', yLabel: '학생 수', data: [['탈춤', 7], ['발레', 5], ['비보잉', 9], ['강강술래', 4], ['부채춤', 3]] }, target: { build: true }, levels: { easy: { toolOptions: { given: [0] } } }, difficulty: 0.2 },
                { prompt: '그래프를 보고 가장 많은 학생이 더 보고 싶어 하는 갈래를 골라요.', toolOptions: { type: 'bar', mode: 'read', title: '더 보고 싶은 표현 갈래', unit: '명', xLabel: '갈래', data: [['탈춤', 7], ['발레', 5], ['비보잉', 9], ['강강술래', 4], ['부채춤', 3]], question: '가장 많은 갈래는?', choices: ['탈춤', '발레', '비보잉', '강강술래', '부채춤'] }, target: { pick: 2 }, difficulty: 0.1 },
                { prompt: '우리나라 갈래(탈춤·강강술래·부채춤)를 고른 학생은 모두 몇 명인지 그래프를 읽고 써요.', toolOptions: { type: 'bar', mode: 'read', title: '더 보고 싶은 표현 갈래', unit: '명', xLabel: '갈래', data: [['탈춤', 7], ['발레', 5], ['비보잉', 9], ['강강술래', 4], ['부채춤', 3]], question: '우리나라 갈래를 고른 학생은 모두 몇 명?' }, target: { value: 14 }, levels: { challenge: { prompt: '다른 나라 갈래(발레·비보잉)를 고른 학생은 부채춤을 고른 학생보다 몇 명 많은지 그래프를 읽고 써요.', toolOptions: { question: '발레와 비보잉을 합하면 부채춤보다 몇 명 많나요?' }, target: { value: 11 } } }, difficulty: 0.3 },
              ],
            },
          ],
          {
            teacher: '"내가 더 보고 싶은 갈래와 그 까닭은 무엇인가요?" 짝에게 말한 뒤 몇 학생이 발표한다. 출구 1번을 틀린 학생과 갈래 특징을 몸으로 다시 떠올린다. 다음 시간에는 단원 전체를 돌아본다고 알린다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '표현 갈래', slots: [{ id: 'gang', label: '강강술래' }, { id: 'fan', label: '부채춤' }, { id: 'tap', label: '탭댄스' }], cards: ['손을 잡고 둥글게 돌며 점점 빨라져요', '부채를 펴고 접어 꽃과 물결을 만들어요', '신발 바닥으로 소리를 내며 박을 쳐요'] }, prompt: '표현 갈래와 그 특징을 이어요.', target: { match: { gang: '손을 잡고 둥글게 돌며 점점 빨라져요', fan: '부채를 펴고 접어 꽃과 물결을 만들어요', tap: '신발 바닥으로 소리를 내며 박을 쳐요' } }, difficulty: 0.2 },
              { type: 'short', prompt: '다음에 더 보고 싶은 표현 갈래와 그 까닭을 쓰세요.' },
              { type: 'mood', prompt: '여러 표현 갈래를 알아본 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '더 보고 싶은 표현 갈래',
          items: [
            { type: 'table', prompt: '우리 반 조사 결과를 쓰세요.', columns: ['갈래', '탈춤', '발레', '비보잉', '강강술래', '부채춤', '합계'], cells: [['학생 수', '', '', '', '', '', '']] },
            { type: 'draw', prompt: '위 표로 막대그래프를 그리세요(가로: 갈래, 세로: 학생 수).' },
            { type: 'choice', prompt: '우리나라에서 생겨난 표현에 ○ 하세요.', options: ['발레', '탈춤', '비보잉'], answer: '탈춤' },
            { type: 'short', prompt: '내가 더 보고 싶은 갈래와 그 까닭을 쓰세요.' },
            { type: 'short', prompt: '"표현을 보는 것은 시간 때우기다"라는 말에 대한 내 생각을 쓰세요.' },
          ],
          easy: {
            note: '막대가 높을수록 많은 친구가 고른 갈래예요.',
            items: [
              { type: 'choice', prompt: '탈을 쓰고 추는 우리 춤은?', options: ['탈춤', '발레'], answer: '탈춤' },
              { type: 'short', prompt: '내가 더 보고 싶은 갈래를 쓰세요.' },
              { type: 'draw', prompt: '그 갈래의 춤추는 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '그래프에 값이 보이고, 카드를 맞는 칸에 놓으면 바로 표시돼요. 카드 한 장이나 첫 차례가 미리 놓인 문항이 있어요. 첫 막대가 미리 채워져 있어요.',
          base: '눈금을 읽어 막대를 맞추고, 모두 놓은 뒤 스스로 고쳐요.',
          challenge: '맞힌 뒤에만 값이 보여 눈금을 꼼꼼히 읽고, 세 갈래의 합을 셈해요. 그럴듯한 함정 카드가 더해진 문항이 있어요. 더 긴 차례나 더해 읽는 문항으로 바뀌어요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 표현을 보는 것은 시간 때우기라고 여긴다 → 감상에서 배울 것을 고르게 한다. ② 가장 많은 갈래만 의미 있다고 여긴다 → 적게 고른 갈래의 까닭도 듣는다. ③ 비보잉 바닥 동작을 따라 하다 다친다 → 손 짚고 도는 동작은 하지 않는다. 사실: 탈춤·강강술래·부채춤은 우리나라에서, 발레는 유럽에서, 비보잉·탭댄스는 미국에서 생겨났다.',
      }),
      // ───────────────────────── 28 ─────────────────────────
      L(28, {
        title: '표현 단원 돌아보며 나의 성장 정리하기',
        objective: '리듬·도구·감상 세 부분에서 배운 것을 묶어 정리하고, 스스로 평가하여 다음에 해 보고 싶은 표현을 정할 수 있다.',
        illustration: art('a child standing on a paper path with three stepping stones labeled with a drum, a ribbon and a fan, looking back with a proud smile under a rainbow', [
          { motif: 'sun', x: 410, y: 54, s: 0.8 }, { motif: 'cloud', x: 100, y: 52 }, { motif: 'hills', y: 214 },
          { motif: 'star', x: 120, y: 160, s: 0.7 }, { motif: 'star', x: 240, y: 150, s: 0.7 }, { motif: 'star', x: 360, y: 160, s: 0.7 },
          { motif: 'text', x: 240, y: 110, text: '리듬 · 도구 · 감상', size: 26 },
        ]),
        safety: [SPACE, LOOK, STOP],
        stages: stages(
          {
            teacher: '1·10·19·26차시 활동지를 학생 책상에 펼쳐 둔다. "처음 박에 맞춰 걷던 때와 지금을 견주어 볼까요?" 단원에서 배운 세 부분(리듬에 맞춘 움직임, 도구와 움직임, 감상과 바꾸기)을 칠판에 적고, 각 부분에서 가장 기억에 남는 활동을 한 낱말로 말하게 한다.',
            student: '내 활동지를 넘겨 보며 단원에서 가장 기억에 남는 활동 하나를 골라 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 배운 것을 세 부분으로 묶기', minutes: 12, tool: 'mindmap',
              task: '단원에서 한 활동을 세 부분으로 나누고, 어려웠던 점과 도움이 된 방법을 이어요. 앞으로도 지킬 표현 약속을 골라요.',
              teacher: '"이 활동은 리듬이 중심이었나요, 도구였나요, 감상이었나요?" 활동 카드를 나눈 뒤 각 부분에서 내가 가장 자란 곳을 생각하게 한다. 어려웠던 점은 부끄러운 것이 아니라 다음 목표라고 말한다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '단원에서 한 활동을 세 부분 가지로 나누어요.', toolOptions: { topic: '표현 단원', slots: ['리듬과 움직임', '도구와 움직임', '감상과 바꾸기'], cards: ['센 박에 팔 크게 뻗기', '세마치에 발 구르며 걷기', '리본으로 8박 흐름', '짝과 천 하나로 파도', '무용 영상에서 마음에 남은 동작 고르기', '마음에 든 동작 빠르기 바꾸기'] }, target: { sort: { '리듬과 움직임': ['센 박에 팔 크게 뻗기', '세마치에 발 구르며 걷기'], '도구와 움직임': ['리본으로 8박 흐름', '짝과 천 하나로 파도'], '감상과 바꾸기': ['무용 영상에서 마음에 남은 동작 고르기', '마음에 든 동작 빠르기 바꾸기'] } }, levels: { easy: { state: { at: { '센 박에 팔 크게 뻗기': 0 } } }, challenge: { prompt: '단원에서 한 활동을 세 부분 가지로 나누어요. 이 단원에서 하지 않은 활동은 남겨요.', toolOptions: { cards: ['센 박에 팔 크게 뻗기', '세마치에 발 구르며 걷기', '리본으로 8박 흐름', '짝과 천 하나로 파도', '무용 영상에서 마음에 남은 동작 고르기', '마음에 든 동작 빠르기 바꾸기', '50m 달리기 기록 재기'] } } }, difficulty: 0.15 },
                { prompt: '단원에서 어려웠던 점과 도움이 된 방법을 이어요.', toolOptions: { mode: 'match', topic: '어려움과 방법', slots: [{ id: 'beat', label: '박이 자꾸 어긋났어요' }, { id: 'tool', label: '리본이 손에서 빠졌어요' }, { id: 'view', label: '느낌을 말로 하기 어려웠어요' }], cards: ['그 부분만 천천히 맞춘 뒤 제 속도로', '쥐는 법과 손목 힘을 살펴 다시', '"○○해서 ○○했어" 틀로 말하기'] }, target: { match: { beat: '그 부분만 천천히 맞춘 뒤 제 속도로', tool: '쥐는 법과 손목 힘을 살펴 다시', view: '"○○해서 ○○했어" 틀로 말하기' } }, difficulty: 0.2 },
                { prompt: '앞으로 표현 활동에서도 지킬 약속만 골라요.', toolOptions: { mode: 'pick', topic: '표현 약속', cards: ['친구와 두 팔 간격을 지켜요', '도구는 내 둘레 안에서 다뤄요', '친구 표현을 끝까지 보고 근거 들어 말해요', '틀리면 바로 그만둬요'] }, target: { pick: ['친구와 두 팔 간격을 지켜요', '도구는 내 둘레 안에서 다뤄요', '친구 표현을 끝까지 보고 근거 들어 말해요'] }, levels: { challenge: { prompt: '앞으로 표현 활동에서도 지킬 약속만 골라요. 그럴듯하지만 틀린 카드가 섞여 있어요.', toolOptions: { cards: ['친구와 두 팔 간격을 지켜요', '도구는 내 둘레 안에서 다뤄요', '친구 표현을 끝까지 보고 근거 들어 말해요', '틀리면 바로 그만둬요', '내 동작만 보고 친구 표현은 보지 않아요'] } } }, difficulty: 0.1,
                  conclude: '리듬에 맞추고, 도구와 몸을 함께 쓰고, 근거를 들어 감상하는 것 — 이 세 가지가 이 단원에서 자란 힘이에요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 스스로 평가하고 마무리 표현하기', minutes: 14, tool: 'timer',
              task: '세 부분마다 나에게 별(1~5개)을 주어 적고, 단원 자기 평가 목록을 표시해요. 마지막으로 반 전체가 배운 차례대로 짧은 마무리 표현을 이어서 해요.',
              teacher: '"별은 친구와 견주는 것이 아니라 처음의 나와 견주는 거예요." 별을 모두 1개로 주는 학생에게 처음 활동지를 다시 보여 주며 자란 점을 찾게 한다. 마무리 표현은 배운 차례대로 8박씩 이어서 한다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '세 부분마다 처음과 견주어 자란 만큼 나에게 별(1~5개)을 주어 적어요.', toolOptions: { fields: [{ label: '리듬과 움직임', unit: '개', max: 5 }, { label: '도구와 움직임', unit: '개', max: 5 }, { label: '감상과 바꾸기', unit: '개', max: 5 }] }, target: { records: true }, levels: { challenge: { toolOptions: { fields: [{ label: '리듬과 움직임', unit: '개', max: 5 }, { label: '도구와 움직임', unit: '개', max: 5 }, { label: '감상과 바꾸기', unit: '개', max: 5 }, { label: '가장 많은 별과 가장 적은 별의 차이', unit: '개', max: 5 }] } } }, difficulty: 0.1 },
                { prompt: '단원을 돌아보며 해낸 것을 자기 평가 목록에 표시해요.', target: { selfCheck: ['박과 센 박에 맞춰 움직일 수 있어요', '도구와 몸짓을 함께 움직여 흐름을 만들 수 있어요', '마음에 남은 움직임을 근거 들어 말할 수 있어요', '마음에 든 동작을 내 방식으로 바꿀 수 있어요'] }, difficulty: 0.1 },
                { prompt: '마무리 표현을 단원에서 배운 차례대로 이어 하도록 카드를 놓아요.', toolOptions: { cards: ['리본으로 8박 흐름', '마음에 든 동작 바꾸어 보이기', '박에 맞춰 걷다 멈추기', '굿거리에 부채 펴기'] }, target: { order: ['박에 맞춰 걷다 멈추기', '리본으로 8박 흐름', '마음에 든 동작 바꾸어 보이기', '굿거리에 부채 펴기'] }, levels: { easy: { state: { order: ['리본으로 8박 흐름', '박에 맞춰 걷다 멈추기', '마음에 든 동작 바꾸어 보이기', '굿거리에 부채 펴기'] } } }, difficulty: 0.2,
                  hints: ['단원은 몸으로 박을 느끼는 것에서 시작해 도구를 들고 움직였고, 뒤쪽에서는 감상한 동작으로 내 표현과 작품을 만들었어요. 활동지에 적힌 차시 번호를 떠올려 보세요.', '동작 바꾸기와 부채 펴기 가운데 어느 시간을 먼저 했는지 활동지를 넘겨 확인해 보세요.'] },
              ],
            },
          ],
          {
            teacher: '"이 단원에서 내가 가장 자란 곳은 어디인가요? 다음에 해 보고 싶은 표현은 무엇인가요?" 짝에게 말한 뒤 몇 학생이 발표한다. 정리 운동으로 천천히 걸으며 숨을 고르고 단원을 마친다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { topic: '표현 단원', slots: ['리듬과 움직임', '도구와 움직임', '감상과 바꾸기'], cards: ['메아리 동작 이어 가기', '후프로 해의 하루 표현', '강강술래의 빠르기 살펴보기'] }, prompt: '새 활동 카드를 세 부분 가지로 나누어요.', target: { sort: { '리듬과 움직임': ['메아리 동작 이어 가기'], '도구와 움직임': ['후프로 해의 하루 표현'], '감상과 바꾸기': ['강강술래의 빠르기 살펴보기'] } }, difficulty: 0.15 },
              { type: 'short', prompt: '이 단원에서 내가 가장 자란 점과 다음에 해 보고 싶은 표현을 쓰세요.' },
              { type: 'mood', prompt: '표현 단원을 마친 지금 마음은 어떤가요?' },
            ],
          },
        ),
        worksheet: {
          title: '표현 단원 돌아보기',
          items: [
            { type: 'table', prompt: '세 부분마다 기억에 남는 활동과 나에게 줄 별을 쓰세요.', columns: ['부분', '기억에 남는 활동', '별(1~5)', '자란 점'], cells: [['리듬과 움직임', '', '', ''], ['도구와 움직임', '', '', ''], ['감상과 바꾸기', '', '', '']] },
            { type: 'check', prompt: '이제 할 수 있는 것에 ✓ 하세요.', options: ['센 박에 맞춰 동작을 크게 해요', '도구와 몸을 함께 움직여요', '근거를 들어 감상을 말해요', '마음에 든 동작을 내 방식으로 바꿔요'] },
            { type: 'choice', prompt: '박이 자꾸 어긋날 때 도움이 되는 방법에 ○ 하세요.', options: ['더 힘차게만 한다', '그 부분만 천천히 맞춘다', '그만둔다'], answer: '그 부분만 천천히 맞춘다' },
            { type: 'short', prompt: '다음에 해 보고 싶은 표현과 그 까닭을 쓰세요.' },
            { type: 'draw', prompt: '이 단원에서 가장 자랑스러운 내 모습을 그리세요.' },
          ],
          easy: {
            note: '처음 활동지와 지금을 견주어 봐요. 조금이라도 자랐으면 별을 더 주어요.',
            items: [
              { type: 'choice', prompt: '가장 재미있었던 부분에 ○ 하세요.', options: ['리듬과 움직임', '도구와 움직임', '감상과 바꾸기'], answer: '스스로 고르기' },
              { type: 'short', prompt: '이 단원에서 잘하게 된 것 하나를 쓰세요.' },
              { type: 'draw', prompt: '가장 기억에 남는 활동을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '활동 카드를 맞는 가지에 놓으면 바로 표시되고, 틀리면 까닭을 말해 주고 되돌아와요. 카드 한 장이나 첫 차례가 미리 놓인 문항이 있어요.',
          base: '모두 놓은 뒤 확인해 스스로 고쳐요.',
          challenge: '자기 평가마다 처음 활동지에서 근거를 찾아 짝에게 설명해요. 그럴듯한 함정 카드가 더해진 문항이 있어요. 기록판에 차이·합계를 셈해 적는 칸이 더해져요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 표현을 보는 것과 하는 것이 시간 때우기라고 여긴다 → 처음과 지금의 활동지를 견주어 자란 점을 찾게 한다. ② 자기 평가를 친구와 견주어 낮게 준다 → 처음의 나와 견준다. ③ 세 부분이 따로 논다고 느낀다 → 마무리 표현으로 리듬·도구·감상을 한 흐름으로 이어 본다.',
      }),
    ],
  });
})();
