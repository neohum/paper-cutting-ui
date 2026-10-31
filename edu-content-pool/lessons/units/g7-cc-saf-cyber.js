/* 중1 창체 안전교육 — 사이버 중독 예방 (4차시).
 * 근거: 「학교안전교육 실시 기준 등에 관한 고시」(교육부고시 제2023-33호) 별표 1(중학교 사이버 중독 예방 연 4차시)·별표 2 중학교 세부 항목
 *       (인터넷 게임 사용 규칙 만들기 및 실천, 스마트폰의 건전한 사용 방법).
 * 장면·인물은 직접 지은 것이다(가명). 학생 자신의 사용 시간·점수를 발표시키지 않는다. */
(function () {
  const CODE = 'saf-cyber';
  const GRADE = 7;
  const UNIT = `g${GRADE}-창체-${CODE}`;
  const TITLE = '사이버 중독 예방';
  const base = (n) => ({
    id: `g${GRADE}-cc-${CODE}-${String(n).padStart(2, '0')}`, schema: 'edu-lesson.v1',
    catalog: { unit: UNIT, lesson: n },
    grade: GRADE, subject: '창체', unitTitle: TITLE,
    standards: [],
    minutes: 40,
    formats: ['chromebook', 'projector', 'print'],
  });
  const PROMPT = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const SCENE = (text, extra = []) => ({ viewBox: [480, 270], layers: [
    { motif: 'sun', x: 410, y: 58, s: 0.8 }, { motif: 'cloud', x: 110, y: 52 }, { motif: 'hills', y: 206 },
    { motif: 'house', x: 90, y: 212, color: 'sky', s: 0.9 }, { motif: 'tree', x: 388, y: 212 }, ...extra,
    { motif: 'text', x: 240, y: 136, text, size: 22 },
  ] });
  // 교구 문항 틀 — mindmap(MS 나누기·MM 잇기·MP 고르기), emotion(EB 갈림길·ES 마음 크기·EM 마음 잇기), story(SO 차례·SF 말풍선 빈칸), 짝 말하기(TALK)
  const MS = (prompt, topic, slots, cards, sort, d, more) => ({ prompt, toolOptions: { mode: 'sort', topic, slots, cards }, target: { sort }, difficulty: d, ...more });
  const MM = (prompt, topic, slots, cards, match, d, more) => ({ prompt, toolOptions: { mode: 'match', topic, slots, cards }, target: { match }, difficulty: d, ...more });
  const MP = (prompt, topic, cards, pick, d, more) => ({ prompt, toolOptions: { mode: 'pick', topic, basket: topic, cards }, target: { pick }, difficulty: d, ...more });
  const EB = (prompt, situation, choices, choice, d, more) => ({ prompt, toolOptions: { mode: 'branch', situation, choices }, target: { choice }, difficulty: d, ...more });
  const ES = (prompt, situation, feeling, level, d, more) => ({ prompt, toolOptions: { mode: 'scale', situation, feeling }, target: { level }, difficulty: d, ...more });
  const EM = (prompt, slots, cards, match, d, more) => ({ prompt, toolOptions: { mode: 'match', slots, cards }, target: { match }, difficulty: d, ...more });
  const SO = (prompt, title, slots, cards, order, d, more) => ({ prompt, toolOptions: { mode: 'order', title, slots, cards }, target: { order }, difficulty: d, ...more });
  const SF = (prompt, slots, cards, fill, d, more) => ({ prompt, toolOptions: { mode: 'fill', slots, cards }, target: { fill }, difficulty: d, ...more });
  const TALK = (prompt) => ({ prompt, free: true, talk: true, difficulty: 0 });
  const LV = { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } };
  const LVB = { easy: { showBack: true }, base: {}, challenge: {} };
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  // 도입 6 + 전개 27 + 정리 7 = 40분
  const LESSON = (n, o) => Object.assign(base(n), {
    title: o.title, objective: o.objective,
    illustration: { prompt: PROMPT(o.draw), scene: SCENE(o.banner, o.extra) },
    stages: [
      { id: 'intro', title: '도입', minutes: 6, teacher: o.intro.teacher, student: o.intro.student, demo: o.intro.demo },
      { id: 'main', title: '전개', minutes: 27, activities: o.acts },
      { id: 'wrapup', title: '정리', minutes: 7, teacher: o.wrap.teacher, exitTicket: o.wrap.exit },
    ],
    worksheet: o.ws, differentiation: o.diff, teacherNotes: o.notes,
  });
  const DIFF = {
    easy: '카드를 놓으면 맞는지 바로 알려 주고, 갈림길 문항은 결과 칸이 처음부터 보여요.',
    base: '모든 카드를 놓은 뒤 확인을 눌러 스스로 고쳐요.',
    challenge: '카드 순서가 섞여 나오고, 그럴듯한 함정 카드를 가려내요.',
  };

  PaperLessons.registerUnit({
    id: `g${GRADE}-cc-${CODE}`, schema: 'edu-unit.v1', catalogUnit: UNIT,
    grade: GRADE, subject: '창체', unitTitle: TITLE,
    flow: '중학교 사이버 중독 예방의 첫해로, 스마트폰 과의존의 신호와 건강한 사용 모습을 가상 인물의 하루로 가려내는 데서 시작합니다. 2차시에는 게임 시간·장소·멈추는 방법을 담은 사용 규칙을 만들고 실천 차례를 정하며, 3차시에는 확률형 아이템과 과금 유도에 담긴 도박성 요소를 알아차립니다. 4차시에는 유혹 상황에서 규칙을 지키는 선택을 연습하고 나의 디지털 실천 계획으로 단원을 정리합니다. 법정교육의 인터넷·스마트폰 과의존 예방 단원과 연계해 시수 인정 가능(학교 결정)합니다.',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '가상 친구의 하루에서 과의존 신호 찾기',
        objective: '스마트폰 과의존의 신호와 건강한 사용 모습을 구분하고, 과의존이 생활에 주는 영향을 설명할 수 있다.',
        draw: 'a paper-cut clock face divided into a day with tiny scenes of school, sleep, friends and a glowing phone growing larger at night',
        banner: '스마트폰과 나의 하루', extra: [{ motif: 'moon', x: 76, y: 70, color: 'lavender', s: 0.6 }],
        intro: {
          teacher: '"스마트폰을 오래 쓰면 모두 과의존일까요?" 대답을 듣고(기다릴 반응: "시간이 길면요", "공부할 때도 써요") 시간보다 "멈추기 어려운지, 생활에 문제가 생기는지"가 중요하다는 점을 짚는다. "다들 그렇게 쓰니까 괜찮다"는 말이 나오면 "다들 쓰는 것과 내 생활이 괜찮은지는 따로 살펴봐야 해요"라고 답한다. 오늘은 가상 친구 율이의 하루로 신호를 찾는다고 밝힌다.',
          student: '스마트폰이 하루에 도움이 되는 순간을 하나 떠올려 짝에게 말해 봅시다.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '율이의 하루', slots: ['건강한 사용', '과의존 신호'], cards: ['길 찾기 앱 사용', '새벽까지 영상 시청'], shuffle: false }, sequence: [{ sort: { '건강한 사용': ['길 찾기 앱 사용'], '과의존 신호': ['새벽까지 영상 시청'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 건강한 사용과 과의존 신호', minutes: 14, tool: 'mindmap',
            teacher: '"이 모습은 스마트폰을 쓰는 걸까요, 스마트폰에 끌려가는 걸까요?" 1번에서 "가족 식사 중에도 계속 봄"을 건강한 사용에 두는 학생에게는 함께하는 시간을 빼앗는 신호라는 점을 짚는다. 2번은 과의존의 신호를 고른다. 3번은 목적이 있는 사용과 없는 사용을 가른다.',
            task: '율이의 하루 장면을 건강한 사용과 과의존 신호로 나누고, 과의존 신호를 골라요.',
            levels: LV,
            items: [
              MS('율이의 하루 장면을 건강한 사용과 과의존 신호로 나누어 보세요.', '율이의 하루', ['건강한 사용', '과의존 신호'], ['과제 자료 검색', '가족과 영상 통화', '식사 중에도 계속 봄', '새벽까지 영상 시청'], { '건강한 사용': ['과제 자료 검색', '가족과 영상 통화'], '과의존 신호': ['식사 중에도 계속 봄', '새벽까지 영상 시청'] }, 0.25),
              MP('스마트폰 과의존의 신호만 골라 담아 보세요.', '과의존 신호', ['그만두려 해도 못 멈춤', '없으면 불안하고 초조', '잠·숙제가 계속 밀림', '정한 시간에 끔', '필요할 때만 꺼냄'], ['그만두려 해도 못 멈춤', '없으면 불안하고 초조', '잠·숙제가 계속 밀림'], 0.3,
                { conclude: '과의존은 시간의 길이보다 멈추기 어렵고, 없으면 불안하고, 생활이 밀리는지로 알아봐요.' }),
              MS('사용을 목적이 있는 사용과 목적 없는 사용으로 나누어 보세요.', '왜 켰을까', ['목적 있음', '목적 없음'], ['모둠 과제 일정 확인', '버스 시간 확인', '심심해서 계속 넘김', '알림 없어도 습관적 확인'], { '목적 있음': ['모둠 과제 일정 확인', '버스 시간 확인'], '목적 없음': ['심심해서 계속 넘김', '알림 없어도 습관적 확인'] }, 0.25),
            ],
          },
          {
            id: 'a2', title: '활동 2. 과의존이 생활에 주는 영향', minutes: 13, tool: 'mindmap',
            teacher: '"과의존은 생활의 어디에 흔적을 남길까요?" 1번은 영향을 몸·학습·관계로 나눈다. 2번은 신호와 영향을 잇는다. 3번 짝 말하기는 율이에게 건넬 조언으로만 하고, 자기 사용 시간은 말하지 않게 한다.',
            task: '과의존의 영향을 영역별로 나누고, 신호와 영향을 이어요.',
            levels: LV,
            items: [
              MS('과의존의 영향을 몸, 학습, 관계로 나누어 보세요.', '영향이 나타나는 곳', ['몸', '학습', '관계'], ['눈이 피로함', '목·어깨 통증', '수업 집중이 어려움', '과제가 밀림', '가족 대화가 줄어듦', '친구와 약속을 잊음'], { 몸: ['눈이 피로함', '목·어깨 통증'], 학습: ['수업 집중이 어려움', '과제가 밀림'], 관계: ['가족 대화가 줄어듦', '친구와 약속을 잊음'] }, 0.3),
              MM('과의존 신호와 이어지는 영향을 이어 보세요. 맞지 않는 카드는 남겨요.', '신호와 영향', [{ id: 's1', label: '새벽까지 영상' }, { id: 's2', label: '수업 중 몰래 확인' }, { id: 's3', label: '식사 중 계속 봄' }], ['낮에 졸리고 피곤함', '배운 내용을 놓침', '가족과 대화가 끊김', '시력이 좋아짐'], { s1: '낮에 졸리고 피곤함', s2: '배운 내용을 놓침', s3: '가족과 대화가 끊김' }, 0.3),
              TALK('율이에게 하루 가운데 스마트폰을 내려놓을 시간 하나를 정해 주는 조언을 짝에게 말하고 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"과의존을 알아보는 세 가지 신호를 말해 볼까요?" 출구 1번에서 "정한 시간에 스스로 끔"을 과의존 신호에 둔 학생에게는 그것이 조절하는 모습이라는 점을 다시 짚는다. 2번에서 둘째 보기를 고른 학생에게는 "시간보다 멈출 수 있는지가 더 중요해요"라고 말해 준다.',
          exit: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '하람이의 모습', slots: ['건강한 사용', '과의존 신호'], cards: ['정한 시간에 스스로 끔', '알림을 꺼 두고 공부', '없으면 수업에 집중 못 함', '자려다 다시 켬'] }, state: { at: {} }, prompt: '하람이의 모습을 건강한 사용과 과의존 신호로 나누어 보세요.', target: { sort: { '건강한 사용': ['정한 시간에 스스로 끔', '알림을 꺼 두고 공부'], '과의존 신호': ['없으면 수업에 집중 못 함', '자려다 다시 켬'] } }, difficulty: 0.2 },
            { type: 'choice', prompt: '스마트폰 과의존에 대한 설명으로 알맞은 것은 무엇인가요?', options: ['멈추기 어렵고 생활에 문제가 생기면 과의존 신호다', '하루 한 시간만 넘으면 무조건 과의존이다', '다들 쓰니까 과의존은 없다'], answer: 0, difficulty: 0.15, explain: '과의존은 조절이 어렵고 생활에 문제가 생기는지로 살펴요.' },
            { type: 'short', prompt: '스마트폰을 목적 있게 쓰는 방법을 한 가지 쓰세요.' },
            MOOD,
          ],
        },
        ws: {
          title: '스마트폰과 나의 하루',
          items: [
            { type: 'table', prompt: '과의존 신호와 생활에 주는 영향을 쓰세요.', columns: ['신호', '영향'], cells: [['새벽까지 영상', ''], ['수업 중 몰래 확인', ''], ['식사 중 계속 봄', '']], answer: '낮에 졸림 / 수업 내용을 놓침 / 가족 대화가 끊김(예시)' },
            { type: 'choice', prompt: '건강한 사용에 ○ 하세요.', options: ['심심해서 계속 넘김', '버스 시간 확인', '자려다 다시 켬'], answer: '버스 시간 확인' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '과의존은 시간의 길이보다 ___기 어렵고 생활에 ___가 생기는지로 알아본다.', answer: '멈추, 문제' },
            { type: 'short', prompt: '스마트폰을 내려놓을 시간 하나를 정해 쓰세요.' },
          ],
          easy: {
            note: '"멈출 수 있나?"를 먼저 물어 보세요.',
            items: [
              { type: 'table', prompt: '과의존 신호면 ○를 쓰세요.', columns: ['모습', '○ / ×'], cells: [['새벽까지 영상', ''], ['정한 시간에 끔', '']], answer: '○, ×' },
              { type: 'choice', prompt: '목적 있는 사용은?', options: ['과제 검색', '심심해서 넘김'], answer: '과제 검색' },
              { type: 'blank', prompt: '빈칸을 채우세요.', text: '없으면 불안한 것은 과의존 ___이다.', answer: '신호' },
              { type: 'short', prompt: '스마트폰이 도움이 되는 순간 하나를 쓰세요.' },
            ],
          },
        },
        diff: DIFF,
        notes: '자주 보이는 어려움: ① 사용 시간만으로 판단한다 → 조절·불안·생활 문제의 신호로 넓힌다. ② 모두 쓰니 괜찮다고 여긴다 → 내 생활의 변화로 살피게 한다. ③ 학생끼리 사용 시간을 비교·공개한다 → 가상 인물로만 다루고 자기 점검은 활동지에서 혼자 하게 한다.',
      }),
      LESSON(2, {
        title: '게임 시간·장소·멈추는 방법을 담은 규칙 만들기',
        objective: '게임 시간·장소·멈추는 방법을 담은 사용 규칙을 만들고, 규칙을 실천하는 차례를 정할 수 있다.',
        draw: 'a paper-cut game controller resting beside a paper rulebook and a small hourglass, with a cozy desk and a window showing evening',
        banner: '내가 정하는 게임 규칙', extra: [{ motif: 'star', x: 74, y: 100, color: 'buttercup', s: 0.6 }],
        intro: {
          teacher: '"게임을 \'적당히\' 하자는 약속, 잘 지켜지나요?" 대답을 듣고(기다릴 반응: "적당히가 얼마인지 몰라요", "잘 안 돼요") 막연한 약속은 지키기 어렵다는 점을 짚는다. "게임은 무조건 나쁘다"는 말이 나오면 "게임은 즐거운 여가가 될 수 있어요. 규칙이 있으면 더 즐겁게 할 수 있어요"라고 답한다. 오늘은 가상 인물 준서와 함께 구체적인 규칙을 만든다고 밝힌다.',
          student: '게임을 멈추기 어려운 순간이 언제일지 짝과 이야기해 봅시다.',
          demo: { tool: 'story', options: { mode: 'order', slots: ['처음', '끝'], cards: [{ id: 'timer', text: '타이머 맞추기', motif: 'star' }, { id: 'stop', text: '알람에 저장하고 끄기', motif: 'moon' }], shuffle: false }, sequence: [{ order: ['timer', 'stop'] }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 좋은 규칙의 조건', minutes: 13, tool: 'story',
            teacher: '"이 규칙은 지켰는지 안 지켰는지 알 수 있나요?" 1번에서 "적당히 하기"를 좋은 규칙에 두는 학생에게는 확인할 수 있는 숫자·시간·장소가 들어갔는지 묻는다. 2번은 규칙의 칸(시간·장소·멈추는 방법)과 예를 잇는다.',
            task: '규칙을 구체적인 규칙과 막연한 규칙으로 나누고, 규칙의 칸과 예를 이어요.',
            levels: LV,
            items: [
              MS('게임 규칙을 구체적인 규칙과 막연한 규칙으로 나누어 보세요.', '어떤 규칙일까', ['구체적', '막연함'], ['숙제 뒤 40분만', '거실에서만 하기', '적당히 하기', '너무 많이 안 하기'], { 구체적: ['숙제 뒤 40분만', '거실에서만 하기'], 막연함: ['적당히 하기', '너무 많이 안 하기'] }, 0.2),
              MM('규칙의 칸과 알맞은 예를 이어 보세요. 맞지 않는 카드는 남겨요.', '규칙의 칸', [{ id: 'r1', label: '언제' }, { id: 'r2', label: '어디서' }, { id: 'r3', label: '어떻게 멈출까' }], ['숙제를 마친 뒤', '방이 아닌 거실', '알람 울리면 저장', '기분 내킬 때'], { r1: '숙제를 마친 뒤', r2: '방이 아닌 거실', r3: '알람 울리면 저장' }, 0.3),
              MP('멈추기 쉽게 도와주는 방법만 골라 담아 보세요.', '멈추기 도우미', ['타이머 미리 맞추기', '판이 끝나면 멈추기', '자기 전 충전기 거실에', '다음 판 자동 시작 켜기', '밤 늦게 시작하기'], ['타이머 미리 맞추기', '판이 끝나면 멈추기', '자기 전 충전기 거실에'], 0.3,
                { conclude: '좋은 규칙은 언제·어디서·어떻게 멈출지를 확인할 수 있게 쓰고, 멈추기 쉽게 도와주는 장치를 함께 둬요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 규칙을 실천하는 차례', minutes: 14, tool: 'story',
            teacher: '"규칙을 만들고 나서 무엇을 해야 지켜질까요?" 1번에서 "가족에게 알리기"를 빼는 학생에게는 함께 아는 사람이 있으면 지키기 쉽다는 점을 짚는다. 2번은 규칙을 어겼을 때의 차례로, 벌보다 다음 날 다시 지키는 방법을 정하는 쪽이 낫다는 점을 강조한다.',
            task: '준서가 규칙을 실천하는 차례를 놓고, 규칙을 알리는 말을 완성해요.',
            levels: LV,
            items: [
              SO('준서가 게임 규칙을 실천하는 차례대로 장면을 놓아 보세요.', '준서의 실천', ['처음', '다음', '그다음', '끝'], [{ id: 'write', text: '규칙을 적어 붙임', motif: 'leaf' }, { id: 'share', text: '가족에게 알림', motif: 'house' }, { id: 'timer', text: '시작 전 타이머', motif: 'star' }, { id: 'check', text: '하루 끝에 점검', motif: 'moon' }], ['write', 'share', 'timer', 'check'], 0.3),
              SF('준서가 가족에게 규칙을 알리는 말을 완성해 보세요.', [{ id: 'b1', who: '준서', motif: 'house', label: '저는 ___ 게임할게요.' }, { id: 'b2', who: '준서', motif: 'house', label: '알람이 울리면 ___ 끌게요.' }], ['숙제 뒤 40분만', '저장하고', '하고 싶은 만큼', '나중에'], { b1: '숙제 뒤 40분만', b2: '저장하고' }, 0.25),
              SO('규칙을 어긴 다음 날 준서가 할 일을 차례대로 놓아 보세요.', '다시 시작', ['처음', '가운데', '끝'], [{ id: 'why', text: '왜 못 지켰는지 생각', motif: 'cloud' }, { id: 'fix', text: '규칙을 조금 고침', motif: 'leaf' }, { id: 'again', text: '오늘 다시 지킴', motif: 'sun' }], ['why', 'fix', 'again'], 0.25),
            ],
          },
        ],
        wrap: {
          teacher: '"좋은 게임 규칙의 세 칸을 말해 볼까요?" 출구 1번에서 "기분 좋을 때 더 하기"를 구체적인 규칙에 둔 학생에게는 확인할 수 없는 말이라는 점을 다시 짚는다. 2번에서 셋째 보기를 고른 학생에게는 "어긴 다음 날 다시 지키는 것도 실천이에요"라고 말해 준다.',
          exit: [
            { type: 'tool', tool: 'story', options: { mode: 'fill', slots: [{ id: 'e1', who: '서윤', motif: 'star', label: '주말에는 ___ 게임하고, 밤 10시 뒤에는 안 할게.' }], cards: ['오전에 1시간만', '하고 싶을 때', '적당히'] }, state: { at: {} }, prompt: '서윤이의 게임 규칙을 구체적으로 완성해 보세요.', target: { fill: { e1: '오전에 1시간만' } }, difficulty: 0.15 },
            { type: 'choice', prompt: '게임 규칙 실천에 대한 설명으로 알맞은 것은 무엇인가요?', options: ['언제·어디서·어떻게 멈출지 구체적으로 정하고 가족에게 알린다', '적당히 하자고 마음먹으면 충분하다', '한 번 어기면 규칙은 소용없다'], answer: 0, difficulty: 0.15, explain: '구체적인 규칙과 함께 아는 사람이 실천을 도와요.' },
            { type: 'short', prompt: '나의 게임(또는 영상) 규칙 하나를 "언제·어디서·어떻게 멈출지" 넣어 쓰세요.' },
            MOOD,
          ],
        },
        ws: {
          title: '내가 정하는 게임 규칙',
          items: [
            { type: 'table', prompt: '나의 게임 규칙을 세 칸으로 쓰세요.', columns: ['언제', '어디서', '어떻게 멈출까'], rows: 2 },
            { type: 'choice', prompt: '구체적인 규칙에 ○ 하세요.', options: ['적당히 하기', '숙제 뒤 40분만', '너무 많이 안 하기'], answer: '숙제 뒤 40분만' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '게임을 시작하기 전에 ___를 맞추고, 알람이 울리면 ___하고 끈다.', answer: '타이머, 저장' },
            { type: 'short', prompt: '규칙을 어긴 다음 날 할 일을 쓰세요.' },
          ],
          easy: {
            note: '언제·어디서·어떻게 멈출지!',
            items: [
              { type: 'table', prompt: '구체적이면 ○를 쓰세요.', columns: ['규칙', '○ / ×'], cells: [['거실에서만 하기', ''], ['적당히 하기', '']], answer: '○, ×' },
              { type: 'choice', prompt: '멈추기 도우미는?', options: ['타이머', '자동 다음 판'], answer: '타이머' },
              { type: 'blank', prompt: '빈칸을 채우세요.', text: '규칙은 ___에게 알리면 지키기 쉽다.', answer: '가족' },
              { type: 'short', prompt: '나의 규칙 하나를 쓰세요.' },
            ],
          },
        },
        diff: DIFF,
        notes: '자주 보이는 어려움: ① 막연한 규칙을 쓴다 → 확인할 수 있는 시간·장소를 넣게 한다. ② 게임을 무조건 나쁘게 본다 → 즐거운 여가로 인정하고 조절을 다룬다. ③ 한 번 어기면 포기한다 → 다시 시작하는 차례를 연습한다. 학생의 실제 게임 시간은 발표시키지 않는다.',
      }),
      LESSON(3, {
        title: '확률형 아이템과 과금 유도 속 도박성 찾기',
        objective: '확률형 아이템과 과금 유도 장치에 담긴 도박성 요소를 알아차리고, 충동 결제를 막는 방법을 고를 수 있다.',
        draw: 'a paper-cut glowing treasure box with spinning paper stars and coins flying out, a student holding a small wallet and a magnifying glass',
        banner: '상자 속 확률', extra: [{ motif: 'star', x: 74, y: 100, color: 'buttercup', s: 0.6 }],
        intro: {
          teacher: '"뽑기 상자에서 원하는 아이템이 나올 확률이 아주 낮다면, 몇 번이나 열게 될까요?" 대답을 듣고(기다릴 반응: "나올 때까지요", "돈이 많이 들어요") 결과가 우연에 달린 상자에 돈을 거는 구조가 도박과 닮았다는 점을 짚는다. "이번엔 나올 차례"라는 말이 나오면 "앞의 결과는 다음 결과에 영향을 주지 않아요"라고 답한다. 오늘은 가상 게임 화면의 장치를 분석한다고 밝힌다.',
          student: '게임 속에서 돈을 쓰게 만드는 장면을 하나 떠올려 짝에게 말해 봅시다. 게임 이름은 말하지 않아요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '게임 속 장치', slots: ['도박성 요소', '일반 요소'], cards: ['확률로 나오는 뽑기', '스토리 퀘스트'], shuffle: false }, sequence: [{ sort: { '도박성 요소': ['확률로 나오는 뽑기'], '일반 요소': ['스토리 퀘스트'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 도박성 요소 가려내기', minutes: 14, tool: 'mindmap',
            teacher: '"이 장치는 내 실력에 달렸나요, 우연에 달렸나요?" 1번에서 "레벨 올리기"를 도박성 요소에 두는 학생에게는 노력으로 얻는 보상과 확률에 거는 보상을 비교하게 한다. 2번은 과금을 부추기는 장치를 고른다. 확률형 아이템은 확률을 공개하도록 법으로 정해져 있다는 점을 덧붙인다.',
            task: '게임 속 장치를 도박성 요소와 일반 요소로 나누고, 과금을 부추기는 장치를 골라요.',
            levels: LV,
            items: [
              MS('게임 속 장치를 도박성 요소와 일반 요소로 나누어 보세요.', '게임 속 장치', ['도박성 요소', '일반 요소'], ['확률형 뽑기 상자', '강화 실패 시 재료 소멸', '스토리 퀘스트', '연습으로 레벨 올리기'], { '도박성 요소': ['확률형 뽑기 상자', '강화 실패 시 재료 소멸'], '일반 요소': ['스토리 퀘스트', '연습으로 레벨 올리기'] }, 0.3),
              MP('과금을 부추기는 장치만 골라 담아 보세요.', '과금 유도', ['"오늘만 반값" 시간 제한', '"아깝게 꽝!" 연출', '"10번 뽑기 보너스"', '확률 정보 공개', '결제 비밀번호 설정'], ['"오늘만 반값" 시간 제한', '"아깝게 꽝!" 연출', '"10번 뽑기 보너스"'], 0.3,
                { conclude: '시간 제한, 아깝게 놓친 연출, 묶음 보너스는 생각할 틈 없이 더 결제하게 만드는 장치예요.' }),
              MM('장치와 노리는 마음을 이어 보세요. 맞지 않는 카드는 남겨요.', '노리는 마음', [{ id: 'm1', label: '"아깝게 꽝!"' }, { id: 'm2', label: '"오늘만 반값"' }, { id: 'm3', label: '친구 화려한 아이템' }], ['다음엔 될 것 같은 기대', '놓칠까 조급함', '뒤처질까 부러움', '차분한 계획'], { m1: '다음엔 될 것 같은 기대', m2: '놓칠까 조급함', m3: '뒤처질까 부러움' }, 0.3),
            ],
          },
          {
            id: 'a2', title: '활동 2. 충동 결제를 막는 방법', minutes: 13, tool: 'mindmap',
            teacher: '"결제 버튼을 누르기 전에 멈출 장치를 만들 수 있을까요?" 1번에서 "부모님 카드 몰래 등록"을 괜찮다고 보는 학생에게는 동의 없는 결제는 가족 갈등과 큰 손해로 이어진다는 점을 짚는다. 2번은 확률 오해를 바로잡는다.',
            task: '충동 결제를 막는 방법을 고르고, 확률에 대한 말을 사실과 오해로 나누어요.',
            levels: LV,
            items: [
              MS('결제 습관을 충동을 막는 습관과 키우는 습관으로 나누어 보세요.', '결제 습관', ['막는 습관', '키우는 습관'], ['결제 비밀번호 설정', '한 달 용돈 한도 정하기', '부모님 카드 몰래 등록', '꽝 나오면 바로 다시'], { '막는 습관': ['결제 비밀번호 설정', '한 달 용돈 한도 정하기'], '키우는 습관': ['부모님 카드 몰래 등록', '꽝 나오면 바로 다시'] }, 0.25),
              MS('확률에 대한 말을 사실과 오해로 나누어 보세요.', '확률에 대한 말', ['사실', '오해'], ['앞 결과는 다음과 무관', '확률이 낮으면 돈이 많이 듦', '많이 꽝이면 곧 당첨', '오늘은 운 좋은 날'], { 사실: ['앞 결과는 다음과 무관', '확률이 낮으면 돈이 많이 듦'], 오해: ['많이 꽝이면 곧 당첨', '오늘은 운 좋은 날'] }, 0.3),
              TALK('"한 번만 더 뽑으면 나올 것 같아"라는 가상 친구에게 오늘 배운 사실로 멈추게 하는 말을 짝에게 하고 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"도박성 요소를 알아보는 질문은 무엇이었나요?" (기다릴 반응: "실력일까, 우연일까") 출구 1번에서 "아깝게 꽝 연출"을 일반 요소에 둔 학생에게는 다시 하게 만드는 장치라는 점을 짚는다. 2번에서 셋째 보기를 고른 학생에게는 "앞의 꽝은 다음 당첨을 약속하지 않아요"라고 말해 준다.',
          exit: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '도박성 요소', basket: '도박성 요소', cards: ['"아깝게 꽝" 연출', '돈으로 사는 확률 상자', '실패하면 사라지는 강화', '친구와 협동 미션'] }, state: { at: {} }, prompt: '도박성 요소만 골라 담아 보세요.', target: { pick: ['"아깝게 꽝" 연출', '돈으로 사는 확률 상자', '실패하면 사라지는 강화'] }, difficulty: 0.25 },
            { type: 'choice', prompt: '확률형 아이템에 대한 생각으로 알맞은 것은 무엇인가요?', options: ['결과가 우연에 달려 있어 한도를 정하고 멈춘다', '꽝이 많이 나왔으면 곧 당첨된다', '많이 뽑을수록 이득이다'], answer: 0, difficulty: 0.15, explain: '확률 상자는 우연에 돈을 거는 구조라 한도와 멈춤이 필요해요.' },
            { type: 'short', prompt: '충동 결제를 막기 위해 내가 정할 규칙 하나를 쓰세요.' },
            MOOD,
          ],
        },
        ws: {
          title: '상자 속 확률',
          items: [
            { type: 'table', prompt: '과금 유도 장치와 노리는 마음을 쓰세요.', columns: ['장치', '노리는 마음'], cells: [['"오늘만 반값"', ''], ['"아깝게 꽝!"', ''], ['"10번 뽑기 보너스"', '']], answer: '놓칠까 조급함 / 다음엔 될 것 같은 기대 / 더 사면 이득이라는 착각(예시)' },
            { type: 'choice', prompt: '사실에 ○ 하세요.', options: ['많이 꽝이면 곧 당첨된다', '앞 결과는 다음 결과와 관계없다', '오늘은 운이 좋다'], answer: '앞 결과는 다음 결과와 관계없다' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '도박성 요소는 결과가 실력이 아니라 ___에 달려 있고, 결제 전 ___을 정하면 충동을 막을 수 있다.', answer: '우연(확률), 한도' },
            { type: 'short', prompt: '부모님 카드를 몰래 등록하면 생길 수 있는 문제를 쓰세요.' },
          ],
          easy: {
            note: '"실력일까, 우연일까?"를 물어 보세요.',
            items: [
              { type: 'table', prompt: '도박성 요소면 ○를 쓰세요.', columns: ['장치', '○ / ×'], cells: [['확률형 뽑기', ''], ['스토리 퀘스트', '']], answer: '○, ×' },
              { type: 'choice', prompt: '충동을 막는 습관은?', options: ['결제 비밀번호', '바로 다시 뽑기'], answer: '결제 비밀번호' },
              { type: 'blank', prompt: '빈칸을 채우세요.', text: '결제 전에 한 달 ___를 정한다.', answer: '한도' },
              { type: 'short', prompt: '나의 결제 규칙 하나를 쓰세요.' },
            ],
          },
        },
        diff: DIFF,
        notes: '자주 보이는 어려움: ① 꽝이 쌓이면 당첨이 가까워진다고 믿는다 → 앞 결과와 다음 결과가 무관함을 짚는다. ② 과금 장치를 단순한 할인으로 여긴다 → 노리는 마음을 이름 붙인다. ③ 특정 게임을 비난하거나 이름을 말한다 → 장치를 분석하는 데 집중하고 게임 이름은 쓰지 않는다. 결제 피해가 있는 학생은 수업 뒤 개별로 보호자와 연결한다.',
      }),
      LESSON(4, {
        title: '유혹 상황에서 규칙 지키기와 디지털 실천 계획 세우기',
        objective: '게임·스마트폰 유혹 상황에서 규칙을 지키는 선택을 고르고, 나의 디지털 실천 계획을 세울 수 있다.',
        draw: 'a paper-cut student at a crossroads with one path leading to a glowing phone and the other to friends, books and a sunset walk',
        banner: '나의 디지털 실천', extra: [{ motif: 'sun', x: 76, y: 88, color: 'peach', s: 0.6 }],
        intro: {
          teacher: '"규칙을 만들었는데도 지키기 어려운 순간은 언제일까요?" 대답을 듣고(기다릴 반응: "친구가 같이 하자고 할 때요", "알림이 올 때요") 유혹 상황을 미리 알면 대비할 수 있다는 점을 짚는다. "의지만 있으면 된다"는 말이 나오면 "환경을 바꾸면 의지가 덜 필요해요"라고 답한다. 오늘은 유혹 상황의 선택을 연습하고 실천 계획을 세운다고 밝힌다.',
          student: '스마트폰을 내려놓고 할 수 있는 즐거운 일을 하나 떠올려 짝에게 말해 봅시다.',
          demo: { tool: 'emotion', options: { mode: 'sort', slots: ['도움이 됨', '유혹을 키움'], cards: ['알림 끄기', '침대에서 휴대폰'], shuffle: false }, sequence: [{ sort: { '도움이 됨': ['알림 끄기'], '유혹을 키움': ['침대에서 휴대폰'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 유혹 상황의 선택', minutes: 14, tool: 'emotion',
            teacher: '"이 선택은 규칙을 지키게 도와줄까요?" 1번은 친구의 늦은 밤 게임 권유, 2번은 시험 기간 알림, 3번은 규칙을 어긴 다음 날의 선택이다. 2번에서 "알림 올 때마다 확인"을 고른 학생에게는 알림을 끄는 환경 바꾸기를 짚는다.',
            task: '유혹 상황에서 어떻게 할지 고르고, 결과를 살펴봐요.',
            levels: LVB,
            items: [
              EB('밤 11시, 친구들이 "한 판만 더 하자"며 단톡방에서 불러요. 시아는 어떻게 할까요?', '규칙상 게임 시간이 끝났는데 친구들이 계속 같이 하자고 해요.', [
                { id: 'one', text: '한 판만 하고 끄기로 해요', result: '한 판이 세 판이 되어 새벽에 잠들어요.', mood: '짜증', why: '"한 판만"은 멈추기 가장 어려운 말이에요.' },
                { id: 'no', text: '"내일 하자, 잘 자!" 하고 꺼요', result: '푹 자고 다음 날 친구들과 다시 게임해요.', mood: '편안함' },
                { id: 'silent', text: '답 없이 몰래 계속 확인해요', result: '잠들지 못하고 단톡방만 보다 늦게 자요.', mood: '불안', why: '분명히 말하고 꺼야 쉴 수 있어요.' }], 'no', 0.2),
              EB('시험 공부 중 SNS 알림이 계속 울려요. 어떻게 할까요?', '시아가 공부하는 동안 휴대폰 알림이 계속 울려요.', [
                { id: 'check', text: '알림 올 때마다 확인해요', result: '공부 흐름이 계속 끊겨요.', mood: '짜증', why: '알림은 집중을 계속 끊어요.' },
                { id: 'off', text: '알림을 끄고 휴대폰을 다른 방에 둬요', result: '집중이 이어지고 공부가 빨리 끝나요.', mood: '뿌듯함' },
                { id: 'later', text: '공부를 미루고 SNS부터 다 봐요', result: '공부 시간이 모자라 밤늦게까지 해요.', mood: '걱정', why: '미루면 잠과 공부가 함께 밀려요.' }], 'off', 0.2),
              EB('어제 규칙을 어긴 시아, 오늘은 어떻게 할까요?', '시아는 어제 게임 규칙을 두 시간이나 넘겨 버렸어요.', [
                { id: 'quit', text: '역시 안 된다며 규칙을 버려요', result: '사용 시간이 더 늘어나요.', mood: '슬픔', why: '한 번 어겨도 다시 시작할 수 있어요.' },
                { id: 'restart', text: '까닭을 찾아 규칙을 고치고 다시 지켜요', result: '조금씩 규칙을 지키는 날이 늘어요.', mood: '뿌듯함' },
                { id: 'double', text: '벌로 일주일 동안 휴대폰을 숨겨요', result: '지키기 어려워 다시 크게 어겨요.', mood: '짜증', why: '지나친 벌보다 지킬 수 있는 규칙이 오래가요.' }], 'restart', 0.25),
            ],
          },
          {
            id: 'a2', title: '활동 2. 나의 실천 계획 세우기', minutes: 13, tool: 'emotion',
            teacher: '"환경을 바꾸는 방법과 대신 할 일을 함께 넣었나요?" 1번은 환경 바꾸기를 고르고, 2번은 스마트폰 대신 할 활동을 영역별로 나눈다. 3번은 계획을 짝과 말하는 활동이다.',
            task: '유혹을 줄이는 환경을 고르고, 대신 할 활동을 나누어 실천 계획을 세워요.',
            levels: LV,
            items: [
              MP('유혹을 줄이는 환경 바꾸기만 골라 담아 보세요.', '환경 바꾸기', ['알림 끄기', '충전기는 거실에', '홈 화면에서 게임 빼기', '침대에서 휴대폰', '자동 재생 켜기'], ['알림 끄기', '충전기는 거실에', '홈 화면에서 게임 빼기'], 0.25,
                { conclude: '알림·충전 장소·홈 화면 같은 환경을 바꾸면 의지가 덜 필요해 규칙을 지키기 쉬워요.' }),
              MS('스마트폰 대신 할 활동을 몸, 마음, 함께로 나누어 보세요.', '대신 할 일', ['몸', '마음', '함께'], ['자전거 타기', '줄넘기', '책 읽기', '그림 그리기', '가족과 보드게임', '친구와 농구'], { 몸: ['자전거 타기', '줄넘기'], 마음: ['책 읽기', '그림 그리기'], 함께: ['가족과 보드게임', '친구와 농구'] }, 0.25),
              TALK('나의 디지털 실천 계획 한 가지를 "환경 바꾸기 + 대신 할 일"로 짝에게 말하고 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"유혹을 이기는 두 가지 방법을 말해 볼까요?" (기다릴 반응: "환경 바꾸기, 대신 할 일") 출구 1번에서 "한 판만 더"를 고른 학생에게는 멈추기 가장 어려운 말이라는 점을 다시 짚는다. 2번에서 둘째 보기를 고른 학생에게는 "한 번 어겨도 다시 시작하면 돼요"라고 말해 준다. 단원을 마치며 실천 계획을 활동지에 적게 한다.',
          exit: [
            { type: 'tool', tool: 'emotion', options: { mode: 'branch', situation: '자기 전 침대에서 영상을 보다 보니 다음 영상이 자동으로 재생돼요.', choices: [{ id: 'watch', text: '이것만 보고 자요', result: '자동 재생이 이어져 새벽에 잠들어요.', mood: '짜증', why: '자동 재생은 멈출 틈을 없애요.' }, { id: 'off', text: '자동 재생을 끄고 휴대폰을 거실에 둬요', result: '푹 자고 개운하게 일어나요.', mood: '편안함' }, { id: 'sound', text: '소리만 줄이고 계속 봐요', result: '잠이 더 늦어져요.', mood: '걱정', why: '소리를 줄여도 화면은 잠을 쫓아요.' }] }, state: { choice: null }, prompt: '자기 전 영상 상황에서 어떻게 할지 골라 보세요.', target: { choice: 'off' }, difficulty: 0.15 },
            { type: 'choice', prompt: '디지털 실천 계획에 대한 설명으로 알맞은 것은 무엇인가요?', options: ['환경을 바꾸고 대신 할 일을 정하면 지키기 쉽다', '한 번 어기면 계획은 소용없다', '의지만 있으면 환경은 상관없다'], answer: 0, difficulty: 0.15, explain: '환경 바꾸기와 대신 할 일이 의지를 도와줘요.' },
            { type: 'short', prompt: '나의 디지털 실천 계획 하나를 쓰세요.' },
            MOOD,
          ],
        },
        ws: {
          title: '나의 디지털 실천',
          items: [
            { type: 'table', prompt: '나의 실천 계획을 쓰세요.', columns: ['유혹 상황', '환경 바꾸기', '대신 할 일'], rows: 2 },
            { type: 'choice', prompt: '환경 바꾸기에 ○ 하세요.', options: ['침대에서 휴대폰', '충전기는 거실에', '자동 재생 켜기'], answer: '충전기는 거실에' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '공부할 때는 ___을 끄고, 자기 전에는 휴대폰을 ___에 둔다.', answer: '알림, 거실' },
            { type: 'short', prompt: '규칙을 어긴 다음 날 나에게 해 줄 말을 쓰세요.' },
          ],
          easy: {
            note: '환경 바꾸기 + 대신 할 일!',
            items: [
              { type: 'table', prompt: '도움이 되면 ○를 쓰세요.', columns: ['방법', '○ / ×'], cells: [['알림 끄기', ''], ['자동 재생 켜기', '']], answer: '○, ×' },
              { type: 'choice', prompt: '"한 판만 더"라고 하면?', options: ['내일 하자고 말한다', '한 판만 한다'], answer: '내일 하자고 말한다' },
              { type: 'blank', prompt: '빈칸을 채우세요.', text: '스마트폰 대신 ___를 탄다.', answer: '자전거' },
              { type: 'short', prompt: '나의 계획 하나를 쓰세요.' },
            ],
          },
        },
        diff: DIFF,
        notes: '자주 보이는 어려움: ① 의지만으로 지키려 한다 → 환경 바꾸기를 함께 넣는다. ② "한 판만"에 넘어간다 → 멈추기 어려운 말임을 짚는다. ③ 지나친 벌을 계획에 넣는다 → 지킬 수 있는 규칙과 다시 시작을 강조한다. 학생의 실제 사용 시간은 발표시키지 않는다.',
      }),
    ],
  });
})();
