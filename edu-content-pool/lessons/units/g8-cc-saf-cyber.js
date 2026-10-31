/* 중2 창체 안전교육 — 사이버 중독 예방 (4차시).
 * 근거: 「학교안전교육 실시 기준 등에 관한 고시」(교육부고시 제2023-33호) 별표 1(중학교 사이버 중독 예방 연 4차시)·별표 2 중학교 세부 항목.
 * 중1(과의존 신호·게임 규칙·확률형 아이템)을 바탕으로 사용 시간을 늘리는 설계·청소년 불법 도박·대리입금·가족 약속으로 넓힌다.
 * 장면·인물은 직접 지은 것이다(가명). 실제 사이트·앱 이름, 형량·통계는 쓰지 않는다. */
(function () {
  const CODE = 'saf-cyber';
  const GRADE = 8;
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
    flow: '중1에서 익힌 과의존 신호와 게임 규칙을 바탕으로, 중2에서는 자동 재생·알림·무한 스크롤처럼 사용 시간을 늘리는 설계를 분석하는 데서 시작합니다. 2차시에는 청소년을 노리는 불법 온라인 도박의 특징과 위험을 가려내고, 3차시에는 대리입금·고리 돈거래 피해 상황에서 안전한 행동과 도움 경로를 고릅니다. 4차시에는 가족과 함께 지킬 스마트폰 약속을 만들며 단원을 정리합니다. 법정교육의 인터넷·스마트폰 과의존 예방 단원과 연계해 시수 인정 가능(학교 결정)합니다.',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '자동 재생·알림·무한 스크롤이 시간을 붙잡는 방식 분석하기',
        objective: '앱의 자동 재생·알림·무한 스크롤 같은 설계가 사용 시간을 늘리는 방식을 분석하고, 설계에 휘둘리지 않는 설정을 고를 수 있다.',
        draw: 'a paper-cut phone screen with an endless paper scroll pouring out, tiny bells ringing and a hand reaching for a settings gear',
        banner: '시간을 붙잡는 설계', extra: [{ motif: 'cloud', x: 360, y: 96, color: 'sky', s: 0.7 }],
        intro: {
          teacher: '"영상 하나만 보려다 한 시간이 지난 적이 있나요?" 대답을 듣고(기다릴 반응: "자주 있어요", "다음 영상이 자동으로 나와요") 그것이 의지가 약해서만이 아니라 앱이 그렇게 설계되었기 때문이기도 하다는 점을 짚는다. "앱은 우리를 위해 편하게 만든 것"이라는 말이 나오면 "편리함과 함께 오래 머물게 하는 목적도 있어요"라고 답한다. 오늘은 설계를 분석하고 내 설정을 바꾼다고 밝힌다.',
          student: '앱을 끄려다 다시 보게 되는 순간을 하나 떠올려 짝에게 말해 봅시다. 앱 이름은 말하지 않아요.',
          demo: { tool: 'mindmap', options: { mode: 'match', topic: '설계', slots: [{ id: 'd1', label: '다음 영상 바로 시작' }], cards: ['자동 재생', '화면 밝기'], shuffle: false }, sequence: [{ match: { d1: '자동 재생' } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 설계 장치와 효과', minutes: 14, tool: 'mindmap',
            teacher: '"이 장치는 무엇을 없애서 우리를 붙잡을까요?" 자동 재생은 멈출 틈을, 무한 스크롤은 끝을, 알림은 집중을 없앤다는 점을 짚는다. 1번에서 "좋아요 숫자"를 정보로만 보는 학생에게는 다시 확인하게 만드는 보상 장치라는 점을 말한다.',
            task: '앱의 설계 장치와 그 효과를 잇고, 시간을 붙잡는 장치를 골라요.',
            levels: LV,
            items: [
              MM('설계 장치와 그 효과를 이어 보세요. 맞지 않는 카드는 남겨요.', '장치와 효과', [{ id: 'k1', label: '자동 재생' }, { id: 'k2', label: '무한 스크롤' }, { id: 'k3', label: '푸시 알림' }], ['멈출 틈을 없앰', '끝이 없게 만듦', '하던 일을 끊음', '눈을 쉬게 함'], { k1: '멈출 틈을 없앰', k2: '끝이 없게 만듦', k3: '하던 일을 끊음' }, 0.3),
              MP('사용 시간을 늘리려는 장치만 골라 담아 보세요.', '붙잡는 장치', ['연속 접속 보상', '"좋아요" 숫자 알림', '추천 영상 이어 보기', '사용 시간 알림', '취침 모드'], ['연속 접속 보상', '"좋아요" 숫자 알림', '추천 영상 이어 보기'], 0.3,
                { conclude: '연속 보상·좋아요 알림·추천 이어 보기는 다시 돌아오고 더 오래 머물게 만드는 설계예요.' }),
              MS('앱 기능을 시간을 붙잡는 기능과 조절을 돕는 기능으로 나누어 보세요.', '어떤 기능일까', ['붙잡음', '조절을 도움'], ['자동 재생', '끝없는 피드', '사용 시간 제한', '알림 묶어 받기'], { 붙잡음: ['자동 재생', '끝없는 피드'], '조절을 도움': ['사용 시간 제한', '알림 묶어 받기'] }, 0.25),
            ],
          },
          {
            id: 'a2', title: '활동 2. 설계에 휘둘리지 않는 설정', minutes: 13, tool: 'mindmap',
            teacher: '"설계를 알았다면 내 쪽에서 바꿀 수 있는 것은 무엇일까요?" 1번은 장치와 대응 설정을 잇는다. 2번에서 "모든 알림 켜기"를 고르는 학생에게는 꼭 필요한 알림만 남기는 방법을 짚는다. 3번은 가상 친구에게 설정을 권하는 짝 활동이다.',
            task: '설계 장치에 맞서는 설정을 잇고, 나에게 맞는 설정을 골라요.',
            levels: LV,
            items: [
              MM('설계 장치와 맞서는 설정을 이어 보세요. 맞지 않는 카드는 남겨요.', '맞서는 설정', [{ id: 's1', label: '자동 재생' }, { id: 's2', label: '푸시 알림' }, { id: 's3', label: '밤늦은 사용' }], ['자동 재생 끄기', '꼭 필요한 알림만', '취침 모드 예약', '화면 밝기 최대'], { s1: '자동 재생 끄기', s2: '꼭 필요한 알림만', s3: '취침 모드 예약' }, 0.25),
              MP('조절을 돕는 설정만 골라 담아 보세요.', '조절 설정', ['앱별 사용 시간 제한', '흑백 화면 모드', '홈 화면 정리', '모든 알림 켜기', '추천 영상 자동 재생'], ['앱별 사용 시간 제한', '흑백 화면 모드', '홈 화면 정리'], 0.25),
              TALK('밤마다 영상을 이어 보는 가상 친구에게 오늘 배운 설정 두 가지를 짝에게 권하고 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"시간을 붙잡는 장치 세 가지와 맞서는 설정을 말해 볼까요?" 출구 1번에서 "사용 시간 알림"을 붙잡는 장치에 둔 학생에게는 조절을 돕는 기능이라는 점을 다시 짚는다. 2번에서 둘째 보기를 고른 학생에게는 "설계를 알면 의지만 탓하지 않고 설정을 바꿀 수 있어요"라고 말해 준다.',
          exit: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '이 기능은?', slots: ['붙잡음', '조절을 도움'], cards: ['출석 연속 보상', '다음 화 자동 재생', '하루 사용 시간 알림', '취침 시간 알림 끔'] }, state: { at: {} }, prompt: '앱 기능을 붙잡는 기능과 조절을 돕는 기능으로 나누어 보세요.', target: { sort: { 붙잡음: ['출석 연속 보상', '다음 화 자동 재생'], '조절을 도움': ['하루 사용 시간 알림', '취침 시간 알림 끔'] } }, difficulty: 0.2 },
            { type: 'choice', prompt: '앱 설계에 대한 설명으로 알맞은 것은 무엇인가요?', options: ['오래 머물게 하는 장치를 알아차리고 설정을 바꾼다', '오래 쓰는 것은 모두 의지가 약한 탓이다', '앱 설정은 바꿀 수 없다'], answer: 0, difficulty: 0.15, explain: '설계를 알아차리면 설정으로 조절할 수 있어요.' },
            { type: 'short', prompt: '오늘 바꿔 볼 스마트폰 설정 하나를 쓰세요.' },
            MOOD,
          ],
        },
        ws: {
          title: '시간을 붙잡는 설계',
          items: [
            { type: 'table', prompt: '설계 장치의 효과와 맞서는 설정을 쓰세요.', columns: ['장치', '효과', '맞서는 설정'], cells: [['자동 재생', '', ''], ['무한 스크롤', '', ''], ['푸시 알림', '', '']], answer: '멈출 틈 없앰·끄기 / 끝없음·사용 시간 제한 / 집중 끊음·필요한 것만(예시)' },
            { type: 'choice', prompt: '조절을 돕는 기능에 ○ 하세요.', options: ['연속 접속 보상', '사용 시간 제한', '추천 이어 보기'], answer: '사용 시간 제한' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '자동 재생은 ___ 틈을 없애고, 무한 스크롤은 ___이 없게 만든다.', answer: '멈출, 끝' },
            { type: 'short', prompt: '"오래 쓰는 건 의지가 약해서"라는 말에 대한 내 생각을 쓰세요.' },
          ],
          easy: {
            note: '"이 장치는 무엇을 없앨까?"를 물어 보세요.',
            items: [
              { type: 'table', prompt: '붙잡는 장치면 ○를 쓰세요.', columns: ['기능', '○ / ×'], cells: [['자동 재생', ''], ['취침 모드', '']], answer: '○, ×' },
              { type: 'choice', prompt: '알림은?', options: ['필요한 것만 받는다', '모두 켠다'], answer: '필요한 것만 받는다' },
              { type: 'blank', prompt: '빈칸을 채우세요.', text: '밤에는 ___ 모드를 켠다.', answer: '취침' },
              { type: 'short', prompt: '바꿔 볼 설정 하나를 쓰세요.' },
            ],
          },
        },
        diff: DIFF,
        notes: '자주 보이는 어려움: ① 오래 쓰는 것을 의지 탓으로만 여긴다 → 설계의 역할을 짚는다. ② 설계를 알면서도 설정을 바꾸지 않는다 → 수업 중 바꿀 설정 하나를 정하게 한다. ③ 특정 앱을 비난한다 → 장치를 분석하는 데 집중하고 앱 이름은 쓰지 않는다.',
      }),
      LESSON(2, {
        title: '청소년을 노리는 불법 온라인 도박의 덫 가려내기',
        objective: '청소년을 노리는 불법 온라인 도박의 특징과 위험을 가려내고, 권유를 받았을 때 거절하고 알리는 방법을 말할 수 있다.',
        draw: 'a paper-cut slot-machine shaped phone with a fishing hook hanging from a coin, a student stepping away toward a bright doorway',
        banner: '도박의 덫', extra: [{ motif: 'star', x: 74, y: 100, color: 'buttercup', s: 0.6 }],
        intro: {
          teacher: '"\'홀짝 맞히면 두 배\', 게임처럼 보이는 이 광고는 게임일까요?" 대답을 듣고(기다릴 반응: "게임 같아요", "도박이에요") 돈을 걸고 우연에 따라 돈을 잃거나 따는 것은 도박이며, 이런 온라인 사이트는 불법이라는 점을 짚는다. "조금만 하면 괜찮다"는 말이 나오면 "처음에 따게 해 주는 것도 덫의 일부일 수 있어요"라고 답한다. 오늘은 불법 도박의 특징을 가려낸다고 밝힌다.',
          student: '게임과 도박이 어떻게 다른지 짝과 한 가지 이야기해 봅시다.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '게임일까 도박일까', slots: ['게임', '도박'], cards: ['친구와 점수 대결', '돈 걸고 홀짝 맞히기'], shuffle: false }, sequence: [{ sort: { 게임: ['친구와 점수 대결'], 도박: ['돈 걸고 홀짝 맞히기'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 불법 도박의 특징', minutes: 14, tool: 'mindmap',
            teacher: '"돈을 걸고, 우연으로, 돈을 따거나 잃는다 — 세 가지가 다 있나요?" 1번에서 "돈 안 거는 점수 대결"을 도박에 두는 학생에게는 돈을 거는지를 다시 묻는다. 2번은 청소년을 노리는 광고 신호를 고른다. 3번은 처음에 따게 해 주는 수법을 다룬다.',
            task: '활동을 게임과 도박으로 나누고, 청소년을 노리는 불법 도박의 신호를 골라요.',
            levels: LV,
            items: [
              MS('활동을 게임과 도박으로 나누어 보세요.', '게임일까 도박일까', ['게임', '도박'], ['친구와 점수 대결', '퍼즐 단계 깨기', '돈 걸고 홀짝 맞히기', '경기 결과에 돈 걸기'], { 게임: ['친구와 점수 대결', '퍼즐 단계 깨기'], 도박: ['돈 걸고 홀짝 맞히기', '경기 결과에 돈 걸기'] }, 0.25),
              MP('청소년을 노리는 불법 도박 광고의 신호만 골라 담아 보세요.', '광고 신호', ['"첫 충전 보너스 100%"', '"친구 데려오면 현금"', '"성인 인증 없이 바로"', '"청소년 이용 불가"', '"공식 복권 판매점 안내"'], ['"첫 충전 보너스 100%"', '"친구 데려오면 현금"', '"성인 인증 없이 바로"'], 0.3,
                { conclude: '보너스·친구 추천 보상·인증 없는 가입은 청소년을 끌어들이는 불법 도박 사이트의 전형적인 신호예요.' }),
              MM('수법과 숨은 목적을 이어 보세요. 맞지 않는 카드는 남겨요.', '수법과 목적', [{ id: 't1', label: '처음엔 계속 따게 함' }, { id: 't2', label: '친구 추천 보상' }, { id: 't3', label: '잃으면 "본전 찾기" 쿠폰' }], ['딸 수 있다고 믿게 함', '더 많은 청소년 끌어들임', '손실을 쫓게 만듦', '공부를 도와줌'], { t1: '딸 수 있다고 믿게 함', t2: '더 많은 청소년 끌어들임', t3: '손실을 쫓게 만듦' }, 0.35),
            ],
          },
          {
            id: 'a2', title: '활동 2. 도박의 위험과 대처', minutes: 13, tool: 'mindmap',
            teacher: '"도박은 돈만 잃는 일일까요?" 1번은 위험을 돈·관계·마음으로 나눈다. 2번에서 "몰래 해서 잃은 돈을 되찾음"을 대처에 두는 학생에게는 손실을 쫓으면 더 깊어진다는 점을 짚는다. 도움은 보호자·담임·Wee클래스와 한국도박문제예방치유원 같은 기관에서 받을 수 있다는 점을 알린다.',
            task: '도박의 위험을 영역별로 나누고, 권유를 받았을 때의 대처를 골라요.',
            levels: LV,
            items: [
              MS('도박의 위험을 돈, 관계, 마음으로 나누어 보세요.', '도박의 위험', ['돈', '관계', '마음'], ['용돈을 모두 잃음', '빚이 생김', '친구에게 돈을 빌림', '가족에게 거짓말', '잃으면 초조함', '도박 생각만 남'], { 돈: ['용돈을 모두 잃음', '빚이 생김'], 관계: ['친구에게 돈을 빌림', '가족에게 거짓말'], 마음: ['잃으면 초조함', '도박 생각만 남'] }, 0.3),
              MS('도박 권유에 대한 대처를 안전한 대처와 위험한 대처로 나누어 보세요.', '권유를 받으면', ['안전한 대처', '위험한 대처'], ['링크를 열지 않음', '보호자·담임께 알림', '한 번만 해 봄', '잃은 돈 되찾으려 계속'], { '안전한 대처': ['링크를 열지 않음', '보호자·담임께 알림'], '위험한 대처': ['한 번만 해 봄', '잃은 돈 되찾으려 계속'] }, 0.25),
              TALK('"친구가 딴 돈으로 치킨 샀대, 나도 해 볼까?"라는 가상 친구에게 오늘 배운 사실로 답하는 말을 짝에게 하고 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"도박을 알아보는 세 가지 조건을 말해 볼까요?" (기다릴 반응: "돈을 건다, 우연, 따거나 잃는다") 출구 1번에서 "본전 찾기 쿠폰"을 안전에 둔 학생에게는 손실을 쫓게 만드는 덫이라는 점을 다시 짚는다. 2번에서 셋째 보기를 고른 학생에게는 "처음에 따는 것도 덫일 수 있어요"라고 말해 준다.',
          exit: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '불법 도박 신호', basket: '불법 도박 신호', cards: ['"인증 없이 바로 시작"', '"잃으면 본전 쿠폰"', '"추천인 코드에 현금"', '"오늘 수학 숙제 공지"'] }, state: { at: {} }, prompt: '불법 도박 신호만 골라 담아 보세요.', target: { pick: ['"인증 없이 바로 시작"', '"잃으면 본전 쿠폰"', '"추천인 코드에 현금"'] }, difficulty: 0.25 },
            { type: 'choice', prompt: '불법 온라인 도박에 대한 설명으로 알맞은 것은 무엇인가요?', options: ['링크를 열지 않고 보호자·선생님께 알린다', '처음에 따면 계속해도 괜찮다', '잃은 돈은 더 해서 되찾는다'], answer: 0, difficulty: 0.15, explain: '불법 도박은 시작하지 않는 것이 가장 안전하고, 권유를 받으면 알려요.' },
            { type: 'short', prompt: '불법 도박 광고를 보았을 때 할 일을 한 문장으로 쓰세요.' },
            MOOD,
          ],
        },
        ws: {
          title: '도박의 덫',
          items: [
            { type: 'table', prompt: '불법 도박의 수법과 숨은 목적을 쓰세요.', columns: ['수법', '숨은 목적'], cells: [['첫 충전 보너스', ''], ['처음엔 따게 함', ''], ['친구 추천 보상', '']], answer: '시작하게 함 / 딸 수 있다고 믿게 함 / 더 많은 청소년을 끌어들임(예시)' },
            { type: 'choice', prompt: '도박에 ○ 하세요.', options: ['친구와 점수 대결', '경기 결과에 돈 걸기', '퍼즐 단계 깨기'], answer: '경기 결과에 돈 걸기' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '도박은 ___을 걸고 ___에 따라 돈을 따거나 잃는 것이다.', answer: '돈, 우연' },
            { type: 'short', prompt: '잃은 돈을 되찾으려 계속하면 어떻게 되는지 쓰세요.' },
          ],
          easy: {
            note: '돈을 걸면 게임이 아니라 도박!',
            items: [
              { type: 'table', prompt: '도박이면 ○를 쓰세요.', columns: ['활동', '○ / ×'], cells: [['돈 걸고 홀짝', ''], ['점수 대결', '']], answer: '○, ×' },
              { type: 'choice', prompt: '도박 링크를 받으면?', options: ['열지 않고 알린다', '한 번 해 본다'], answer: '열지 않고 알린다' },
              { type: 'blank', prompt: '빈칸을 채우세요.', text: '청소년 대상 온라인 도박 사이트는 ___이다.', answer: '불법' },
              { type: 'short', prompt: '거절의 말 하나를 쓰세요.' },
            ],
          },
        },
        diff: DIFF,
        notes: '자주 보이는 어려움: ① 게임과 도박을 섞는다 → 돈·우연·따고 잃기 세 조건으로 가른다. ② 처음에 딴 이야기를 성공으로 여긴다 → 덫의 수법임을 짚는다. ③ 잃은 돈을 되찾으려 한다 → 손실 쫓기의 위험을 알린다. 실제 사이트 이름·방법은 다루지 않는다. 도박 피해가 의심되는 학생은 수업 뒤 보호자·Wee클래스와 연결한다.',
      }),
      LESSON(3, {
        title: '대리입금·고리 돈거래 피해에서 안전한 행동 고르기',
        objective: '대리입금과 고리 돈거래의 위험을 알고, 피해 상황에서 안전한 행동과 도움 경로를 고를 수 있다.',
        draw: 'a paper-cut phone with a friendly coin offer bubble that has a heavy chain trailing behind it, a student turning toward a parent figure',
        banner: '쉬운 돈은 없어요', extra: [{ motif: 'cloud', x: 360, y: 96, color: 'lavender', s: 0.7 }],
        intro: {
          teacher: '"\'10만 원 바로 빌려줌, 일주일 뒤 13만 원\', 이 조건은 괜찮은 걸까요?" 대답을 듣고(기다릴 반응: "급하면 빌릴 것 같아요", "이자가 너무 커요") 일주일에 30%나 붙는 것은 법이 정한 이자를 훨씬 넘는 불법 고리 돈거래라는 점을 짚는다. "SNS에서 알게 된 형이 착하게 빌려준대"라는 말이 나오면 "늦으면 \'지각비\'를 붙이고 개인정보로 협박하는 경우가 있어요"라고 답한다. 오늘은 대리입금의 덫과 안전한 행동을 고른다고 밝힌다.',
          student: '급하게 돈이 필요할 때 안전하게 도움을 받을 수 있는 방법을 하나 짝에게 말해 봅시다.',
          demo: { tool: 'emotion', options: { mode: 'sort', slots: ['안전', '위험'], cards: ['보호자와 상의', 'SNS에서 돈 빌림'], shuffle: false }, sequence: [{ sort: { 안전: ['보호자와 상의'], 위험: ['SNS에서 돈 빌림'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 대리입금의 덫', minutes: 13, tool: 'emotion',
            teacher: '"빌려주는 쪽이 왜 학생증·연락처를 요구할까요?" 1번에서 "학생증 사진 보내기"를 안전한 확인 절차로 보는 학생에게는 갚지 못할 때 협박에 쓰일 수 있다는 점을 짚는다. 2번은 대리입금의 신호, 3번은 피해 상황에서 학생의 마음을 이해하는 문항이다.',
            task: '대리입금 제안의 위험 신호를 고르고, 피해 학생의 상황과 마음을 이어요.',
            levels: LV,
            items: [
              MP('대리입금 제안의 위험 신호만 골라 담아 보세요.', '위험 신호', ['학생증 사진 요구', '늦으면 "지각비" 부과', '가족 연락처 요구', '보호자 동의서 필요', '은행 창구 안내'], ['학생증 사진 요구', '늦으면 "지각비" 부과', '가족 연락처 요구'], 0.3),
              MS('돈을 구하는 방법을 안전한 방법과 위험한 방법으로 나누어 보세요.', '돈을 구하는 방법', ['안전', '위험'], ['보호자와 상의', '용돈 계획 다시 짜기', 'SNS 대리입금', '모르는 사람 계좌로 빌림'], { 안전: ['보호자와 상의', '용돈 계획 다시 짜기'], 위험: ['SNS 대리입금', '모르는 사람 계좌로 빌림'] }, 0.2,
                { conclude: '대리입금은 큰 이자와 지각비를 붙이고 개인정보로 협박하는 불법 고리 돈거래예요. 급할수록 보호자와 상의해요.' }),
              EM('피해 학생의 상황과 마음을 이어 보세요. 맞지 않는 카드는 남겨요.', [{ id: 'f1', label: '하루 늦자 이자가 두 배' }, { id: 'f2', label: '부모님께 알린다고 협박' }], ['불안', '무서움', '신남'], { f1: '불안', f2: '무서움' }, 0.2),
            ],
          },
          {
            id: 'a2', title: '활동 2. 피해 상황에서의 선택', minutes: 14, tool: 'emotion',
            teacher: '"혼날까 봐 숨기면 무엇이 더 커질까요?" 1번은 제안을 받은 순간, 2번은 갚지 못해 협박받는 상황, 3번은 친구가 대리입금을 하려 할 때의 선택이다. 2번에서 "다른 곳에서 또 빌려 갚기"를 고른 학생에게는 빚이 빚을 부른다는 점을 짚고, 대화를 저장해 보호자·112에 알리게 한다.',
            task: '대리입금 상황에서 어떻게 할지 고르고, 결과를 살펴봐요.',
            levels: LVB,
            items: [
              EB('콘서트 표 값이 모자란 다온이에게 SNS로 "바로 빌려줌" 메시지가 왔어요. 어떻게 할까요?', '다온이에게 "10만 원 바로 입금, 일주일 뒤 13만 원"이라는 메시지가 왔어요.', [
                { id: 'borrow', text: '일주일이면 갚을 수 있으니 빌려요', result: '하루 늦자 지각비가 붙고 빚이 커져요.', mood: '불안', why: '고리 돈거래는 갚기 어렵게 만들어요.' },
                { id: 'talk', text: '빌리지 않고 보호자와 방법을 상의해요', result: '용돈을 모으거나 다른 방법을 찾아요.', mood: '편안함' },
                { id: 'friend', text: '친구 이름으로 대신 빌려요', result: '친구까지 피해와 협박을 받게 돼요.', mood: '걱정', why: '남의 이름으로 빌리면 피해가 번져요.' }], 'talk', 0.2),
              EB('대리입금을 갚지 못한 다온이에게 "학교에 알린다"는 협박이 와요. 어떻게 할까요?', '갚을 날이 지나자 상대가 학생증 사진을 퍼뜨리겠다고 협박해요.', [
                { id: 'loan', text: '다른 곳에서 또 빌려 갚아요', result: '빚이 빚을 불러 더 깊어져요.', mood: '무서움', why: '돌려막기는 빚을 키워요.' },
                { id: 'report', text: '대화를 저장하고 보호자와 112에 알려요', result: '어른과 경찰의 도움으로 협박이 멈춰요.', mood: '편안함' },
                { id: 'hide', text: '들킬까 봐 연락을 끊고 숨어요', result: '협박이 계속되고 혼자 괴로워요.', mood: '슬픔', why: '숨기면 혼자 감당하게 돼요.' }], 'report', 0.25),
              EB('친구가 "대리입금으로 게임 아이템 사려고"라고 말해요. 어떻게 할까요?', '친구가 SNS 대리입금으로 게임 아이템을 사겠다고 해요.', [
                { id: 'cheer', text: '좋은 방법이라며 응원해요', result: '친구가 빚과 협박에 시달려요.', mood: '걱정', why: '대리입금은 불법 고리 돈거래예요.' },
                { id: 'stop', text: '"그거 이자 엄청 붙어" 말리고 함께 어른께 가요', result: '친구가 빌리지 않고 다른 방법을 찾아요.', mood: '고마움' },
                { id: 'lend', text: '내가 이자 받고 빌려줄게라고 해요', result: '친구 사이에 돈 문제가 생겨요.', mood: '불안', why: '친구 사이 이자 거래도 갈등을 만들어요.' }], 'stop', 0.2),
            ],
          },
        ],
        wrap: {
          teacher: '"대리입금의 위험 신호 세 가지를 말해 볼까요?" 출구 1번에서 "또 빌려 갚음"을 고른 학생에게는 돌려막기의 위험을 다시 짚는다. 2번에서 둘째 보기를 고른 학생에게는 "혼나는 것보다 협박에서 벗어나는 것이 먼저예요"라고 말해 준다.',
          exit: [
            { type: 'tool', tool: 'emotion', options: { mode: 'sort', slots: ['안전한 행동', '위험한 행동'], cards: ['협박 대화를 저장', '보호자에게 바로 알림', '돌려막기로 또 빌림', '학생증 사진 보냄'] }, state: { at: {} }, prompt: '대리입금 피해 때의 행동을 안전한 행동과 위험한 행동으로 나누어 보세요.', target: { sort: { '안전한 행동': ['협박 대화를 저장', '보호자에게 바로 알림'], '위험한 행동': ['돌려막기로 또 빌림', '학생증 사진 보냄'] } }, difficulty: 0.2 },
            { type: 'choice', prompt: '대리입금에 대한 설명으로 알맞은 것은 무엇인가요?', options: ['큰 이자와 협박이 따르는 불법 돈거래라 빌리지 않고 어른과 상의한다', '일주일 안에 갚으면 안전하다', '혼날까 봐 숨기는 것이 낫다'], answer: 0, difficulty: 0.15, explain: '대리입금은 불법 고리 돈거래예요. 피해를 입으면 저장하고 알려요.' },
            { type: 'short', prompt: '대리입금을 하려는 친구에게 할 말을 한 문장으로 쓰세요.' },
            MOOD,
          ],
        },
        ws: {
          title: '쉬운 돈은 없어요',
          items: [
            { type: 'table', prompt: '대리입금의 위험 신호와 그 까닭을 쓰세요.', columns: ['신호', '위험한 까닭'], cells: [['학생증 사진 요구', ''], ['지각비 부과', ''], ['가족 연락처 요구', '']], answer: '협박에 쓰임 / 빚이 빠르게 커짐 / 가족에게 알리겠다고 협박(예시)' },
            { type: 'choice', prompt: '안전하게 돈을 구하는 방법에 ○ 하세요.', options: ['SNS 대리입금', '보호자와 상의', '모르는 계좌로 빌림'], answer: '보호자와 상의' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '대리입금 협박을 받으면 대화를 ___하고 보호자와 ___에 알린다.', answer: '저장, 112' },
            { type: 'short', prompt: '돌려막기가 위험한 까닭을 쓰세요.' },
          ],
          easy: {
            note: '"바로 빌려줌"은 의심!',
            items: [
              { type: 'table', prompt: '위험하면 ○를 쓰세요.', columns: ['행동', '○ / ×'], cells: [['SNS로 돈 빌리기', ''], ['보호자와 상의', '']], answer: '○, ×' },
              { type: 'choice', prompt: '협박을 받으면?', options: ['저장하고 알린다', '숨는다'], answer: '저장하고 알린다' },
              { type: 'blank', prompt: '빈칸을 채우세요.', text: '학생증 사진은 ___ 않는다.', answer: '보내지' },
              { type: 'short', prompt: '거절의 말 하나를 쓰세요.' },
            ],
          },
        },
        diff: DIFF,
        notes: '자주 보이는 어려움: ① 짧은 기간이면 안전하다고 여긴다 → 지각비·이자 구조를 짚는다. ② 혼날까 봐 숨긴다 → 협박에서 벗어나는 것이 먼저임을 강조한다. ③ 돌려막기를 해결책으로 여긴다 → 빚이 커지는 구조를 보여 준다. 이자율·처벌 수위의 법 조문 숫자는 다루지 않는다. 피해 학생은 수업 뒤 보호자·담임과 연결한다.',
      }),
      LESSON(4, {
        title: '가족과 함께 지킬 스마트폰 약속 만들고 단원 정리하기',
        objective: '가족 모두가 지킬 수 있는 스마트폰 약속을 조건에 맞게 만들고, 단원에서 배운 내용을 정리할 수 있다.',
        draw: 'a paper-cut family sitting around a table with phones placed in a basket in the center, a paper agreement sheet and warm lamp light',
        banner: '우리 집 스마트폰 약속', extra: [{ motif: 'house', x: 400, y: 205, color: 'peach', s: 0.6 }],
        intro: {
          teacher: '"스마트폰 약속은 학생만 지키는 걸까요?" 대답을 듣고(기다릴 반응: "어른도 많이 써요", "부모님도 같이 지키면 좋겠어요") 가족 모두가 함께 지키는 약속이 오래간다는 점을 짚는다. "약속은 부모님이 정해 주는 것"이라는 말이 나오면 "함께 정하면 서로 지키기 쉬워요"라고 답한다. 오늘은 가상 가족 해밀이네와 함께 약속을 만들고 단원을 정리한다고 밝힌다.',
          student: '가족이 함께 스마트폰을 내려놓으면 좋을 때를 하나 떠올려 짝에게 말해 봅시다.',
          demo: { tool: 'story', options: { mode: 'fill', slots: [{ id: 'd1', who: '해밀', motif: 'house', label: '저녁 먹을 때는 휴대폰을 ___ 두어요.' }], cards: ['바구니에', '손에'], shuffle: false }, sequence: [{ fill: { d1: '바구니에' } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 좋은 가족 약속의 조건', minutes: 14, tool: 'story',
            teacher: '"좋은 가족 약속은 어떤 모양일까요?" 1번에서 "아이만 지키는 약속"을 좋은 조건에 두는 학생에게는 함께 지킬 때 공정하다는 점을 짚는다. 2번은 약속 문장을 완성하고, 3번은 약속을 정하는 차례를 놓는다.',
            task: '좋은 가족 약속의 조건을 고르고, 약속 문장과 정하는 차례를 완성해요.',
            levels: LV,
            items: [
              MP('좋은 가족 약속의 조건만 골라 담아 보세요.', '좋은 약속', ['가족 모두가 함께 지킴', '언제·어디서가 분명함', '지키기 어려우면 고침', '아이만 지키면 됨', '어기면 무조건 압수'], ['가족 모두가 함께 지킴', '언제·어디서가 분명함', '지키기 어려우면 고침'], 0.25),
              SF('해밀이네 가족 약속을 완성해 보세요.', [{ id: 'b1', who: '해밀', motif: 'house', label: '밤 10시가 되면 휴대폰은 ___ 충전해요.' }, { id: 'b2', who: '해밀', motif: 'house', label: '주말 저녁 한 시간은 ___ 보드게임해요.' }], ['거실에서', '다 같이', '침대에서', '각자'], { b1: '거실에서', b2: '다 같이' }, 0.25),
              SO('가족 약속을 정하는 차례대로 장면을 놓아 보세요.', '약속 정하기', ['처음', '다음', '그다음', '끝'], [{ id: 'talk', text: '불편한 점 나누기', motif: 'cloud' }, { id: 'make', text: '함께 약속 정하기', motif: 'leaf' }, { id: 'post', text: '적어서 붙이기', motif: 'star' }, { id: 'review', text: '한 달 뒤 고치기', motif: 'sun' }], ['talk', 'make', 'post', 'review'], 0.3,
                { conclude: '가족 약속은 함께 정하고, 보이게 붙이고, 지키기 어려우면 다시 고칠 때 오래 지켜져요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 단원 정리', minutes: 13, tool: 'mindmap',
            teacher: '"이 상황은 몇 차시에서 배운 것과 이어질까요?" 1번은 단원의 상황과 대처를 묶는다. 2번은 약속에 넣을 항목을 고른다. 3번 짝 활동에서 만든 약속은 집에 가져가 가족과 함께 다듬도록 한다.',
            task: '단원의 상황과 대처를 묶고, 우리 집 약속에 넣을 항목을 골라요.',
            levels: LV,
            items: [
              MM('상황과 단원에서 배운 대처를 이어 보세요. 맞지 않는 카드는 남겨요.', '단원 정리', [{ id: 'u1', label: '다음 영상 자동 재생' }, { id: 'u2', label: '"첫 충전 보너스" 광고' }, { id: 'u3', label: '"바로 빌려줌" 메시지' }], ['자동 재생 끄기', '열지 않고 알림', '빌리지 않고 상의', '일단 해 보기'], { u1: '자동 재생 끄기', u2: '열지 않고 알림', u3: '빌리지 않고 상의' }, 0.25),
              MP('우리 집 스마트폰 약속에 넣기 좋은 항목만 골라 담아 보세요.', '약속 항목', ['식사 시간엔 바구니에', '밤엔 거실에서 충전', '결제는 가족과 상의', '몰래 새벽까지 사용', '알림은 모두 켜 두기'], ['식사 시간엔 바구니에', '밤엔 거실에서 충전', '결제는 가족과 상의'], 0.2),
              TALK('우리 집 스마트폰 약속 한 가지를 "가족 모두가 언제·어디서" 모양으로 짝에게 말하고 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"좋은 가족 약속의 세 가지 조건을 말해 볼까요?" 출구 1번에서 "아이만 지키는 약속"을 고른 학생에게는 함께 지키는 약속이 공정하고 오래간다는 점을 다시 짚는다. 2번에서 셋째 보기를 고른 학생에게는 "지키기 어려우면 고치는 것도 약속의 일부예요"라고 말해 준다. 만든 약속은 집에 가져가 가족과 함께 다듬게 한다.',
          exit: [
            { type: 'tool', tool: 'story', options: { mode: 'fill', slots: [{ id: 'e1', who: '해밀', motif: 'house', label: '게임 결제는 ___ 상의한 뒤에 해요.' }], cards: ['가족과', '혼자', '몰래'] }, state: { at: {} }, prompt: '해밀이네 결제 약속을 완성해 보세요.', target: { fill: { e1: '가족과' } }, difficulty: 0.15 },
            { type: 'choice', prompt: '가족 스마트폰 약속에 대한 설명으로 알맞은 것은 무엇인가요?', options: ['가족 모두가 함께 정하고 지키며, 어려우면 고친다', '아이만 지키면 되는 약속이 가장 좋다', '한 번 정하면 절대 바꾸지 않는다'], answer: 0, difficulty: 0.15, explain: '함께 정하고 함께 지킬 때 약속이 오래가요.' },
            { type: 'short', prompt: '우리 집 스마트폰 약속 하나를 쓰세요.' },
            MOOD,
          ],
        },
        ws: {
          title: '우리 집 스마트폰 약속',
          items: [
            { type: 'table', prompt: '우리 집 약속을 세 칸으로 쓰세요.', columns: ['언제', '어디서', '어떻게(가족 모두)'], rows: 3 },
            { type: 'choice', prompt: '좋은 약속의 조건이 아닌 것에 ○ 하세요.', options: ['가족 모두가 지킨다', '아이만 지킨다', '어려우면 고친다'], answer: '아이만 지킨다' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '약속은 함께 ___고, 보이게 붙이고, 한 달 뒤 다시 ___.', answer: '정하, 고친다' },
            { type: 'short', prompt: '이번 단원에서 배운 것 가운데 가족에게 알려 주고 싶은 것을 쓰세요.' },
          ],
          easy: {
            note: '가족 모두 함께!',
            items: [
              { type: 'table', prompt: '좋은 약속이면 ○를 쓰세요.', columns: ['약속', '○ / ×'], cells: [['식사 땐 바구니에', ''], ['새벽까지 몰래', '']], answer: '○, ×' },
              { type: 'choice', prompt: '밤에 휴대폰은?', options: ['거실에서 충전', '침대에서 사용'], answer: '거실에서 충전' },
              { type: 'blank', prompt: '빈칸을 채우세요.', text: '결제는 가족과 ___한다.', answer: '상의' },
              { type: 'short', prompt: '우리 집 약속 하나를 쓰세요.' },
            ],
          },
        },
        diff: DIFF,
        notes: '자주 보이는 어려움: ① 약속을 학생만 지키는 규칙으로 여긴다 → 가족 모두의 약속으로 바꾼다. ② 지나친 벌칙을 넣는다 → 다시 고치는 차례를 넣는다. ③ 가정마다 사정이 다르다 → 정답을 정하지 않고 조건(함께·분명함·고치기)만 확인한다. 가정 형편이나 기기 보유 여부를 묻지 않는다.',
      }),
    ],
  });
})();
