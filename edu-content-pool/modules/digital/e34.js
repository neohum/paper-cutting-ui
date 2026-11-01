/* 창체 법정교육 인터넷·스마트폰 과의존 예방 — 초3-4 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/mandatory.json 의 digital 초3-4.
 * 근거: 지능정보화 기본법 — 초·중·고 학기별 1회 이상 인터넷·스마트폰 과의존 예방교육(research-mandatory §1),
 *   §2 인터넷·스마트폰 과의존/디지털 시민 초: 사용 시간 조절, 개인정보 지키기, 예절.
 * 초3-4 기준: 상황 판단(그림+짧은 글), 차례 정하기, 고른 이유 말하기, 짝 토의, 간단한 표·그림그래프. 법 조문·통계 해석·긴 글쓰기는 쓰지 않는다.
 * 안전교육 사이버 중독 예방(saf-cyber 초3-4)과 장면·문항을 되풀이하지 않는다 — 저쪽은 하루 시간표·게임 과몰입 신호·게임 약속·목적 있는 사용,
 *   이쪽은 알림·다음 영상에 끌려가는 흐름, 화면 밖 한 주 계획, 사진 속 개인정보와 대화방 시간 예절이다.
 * 인물(민지·가온·나래·다솜·라온·하윤·보라)과 사용 기록·설문·그래프 값은 모두 직접 지은 가상의 것이다. 학생 자신의 사용 시간·즐겨 하는 게임이나 앱 이름은
 *   묻거나 채점하지 않고, 특정 앱·게임·회사 이름은 쓰지 않는다. 시각·시간 값(화면 끄는 8시 30분, 하루 1시간, 대화방 쉬는 9시 30분 등)은 연습용 '우리 반 약속' 값이지 권장 기준이 아니다.
 * 주제 3개(3학년 1 · 4학년 2) × 도입 2 · 활동 4 · 정리 2 = 계획 모듈 24개.
 *
 * 사람 확인: 근거 파일(research-mandatory.md)에 세부 수칙이 없어 일반 생활 안내로 쓴 문장 — 공식 안내처에서 확인한다.
 *   - 알림·다음 영상 자동 재생이 화면 보는 시간을 늘린다, 할 일 중에는 알림을 잠시 꺼 두면 집중에 도움이 된다
 *     (alarm-time 전 모듈) → 과학기술정보통신부·한국지능정보사회진흥원 스마트쉼센터
 *   - 화면 끄는 시각을 미리 정해 두면 지키기 쉽다 (alarm-time.wrap.end-clock, intro.guess-clock) → 스마트쉼센터
 *   - 오래 앉아 화면을 본 뒤 쉬는 동안 일어나 몸을 펴고 물을 마신다 (alarm-time.activity.timer-plan) → 질병관리청 국가건강정보포털
 *   - 화면 밖 활동(운동·독서·가족 놀이)으로 여가를 채우는 것이 과의존 예방에 도움이 된다 (offline-week 전 모듈, 근거 약함) → 스마트쉼센터
 *   - 주소·전화번호·비밀번호·학교 이름이 보이는 사진은 올리지 않거나 가린다, 친구 얼굴이 나온 사진은 올리기 전에 물어본다,
 *     한 번 올라간 사진은 다른 사람이 저장·전달할 수 있다 (info-manners.intro.photo-spot, activity.share-or-not·info-sort, wrap.self-check)
 *     → 개인정보보호위원회·한국인터넷진흥원 개인정보 보호 안내 / 방송통신위원회 디지털 윤리 안내
 *   - 1234·1111처럼 규칙이 쉬운 비밀번호는 남이 맞히기 쉽고, 비밀번호는 보호자 말고는 알려 주지 않는다 (info-manners.activity.pw-pattern)
 *     → 한국인터넷진흥원 보호나라 안내
 *   - 밤늦은 시각에는 단체 대화방에 글을 보내지 않는 것이 예절이다 (info-manners.intro.late-chat, activity.chat-clock, wrap.manner-chant)
 *     → 방송통신위원회·한국지능정보사회진흥원 디지털 윤리(바른 인터넷 예절) 안내
 */
(function () {
  const BASE = { schema: 'edu-module.v1', domain: 'digital', band: '초3-4' };
  const T = (topic, grade) => (o) => Object.assign({}, BASE, { topic: `digital.e34.${topic}`, grades: [grade] }, o);
  const M = [];
  const strip = (p) => String(p).replace(/[.?!]$/, '');

  // 갈림길(dilemma): 기본 = 장면 둘(보기 3개), 쉬움 = 첫 장면만(바른 보기 + 첫 틀린 보기), 도전 = 바른 길 + 다른 끝 장면 하나 더 가 보고 견주기(explore)
  const DIL = (prompt, scene, good, d, more) => {
    const g0 = good[0][0];
    const easyScene = Object.assign({}, scene, {
      choices: scene.choices.filter((c) => c.id === g0 || c.id === scene.choices.find((x) => x.id !== g0).id)
        .map((c) => (c.id === g0 ? { id: c.id, text: c.text, result: c.result, impact: c.impact, ending: c.ending } : c)),
    });
    return {
      prompt, toolOptions: { scene }, target: { path: good }, difficulty: d,
      levels: {
        easy: { prompt: `${strip(prompt)}(한 번 골라요).`, toolOptions: { scene: easyScene }, target: { path: [[g0]] } },
        challenge: { prompt: `${strip(prompt)}. 다른 길도 끝까지 가 봐요.`, target: { path: good, explore: 2 } },
      },
      ...more,
    };
  };

  // 스스로 점검(kitchen checklist selfCheck): 기본 = items 앞 3칸, 쉬움 = 앞 2칸, 도전 = 4칸
  const SELFLIST = (prompt, title, items) => ({
    type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title, items: items.slice(0, 3) }, prompt, target: { selfCheck: true }, difficulty: 0.1,
    levels: { easy: { toolOptions: { items: items.slice(0, 2) } }, challenge: { toolOptions: { items: items.slice(0, 4) } } },
  });
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  const PRIVACY = '학생 자신의 사용 시간·즐겨 하는 게임이나 앱 이름을 묻거나 발표시키지 않는다. 가상 친구의 일로만 이야기하고, 특정 게임·앱·회사 이름이 나오면 "게임", "영상 앱"처럼 바꿔 말한다.';

  // ======================================================================================================
  // 3학년 · 알림과 다음 영상에 끌려가지 않기 (research-mandatory §2 초: 사용 시간 조절)
  // ======================================================================================================
  {
    const C = T('alarm-time', 3);
    const WEEK = [['가온', 90], ['나래', 60], ['다솜', 150], ['라온', 30]];
    const NAMES = ['가온', '나래', '다솜', '라온'];
    const PIC = { type: 'picture', title: '가상 친구 4명의 하루 화면 시간(가상)', unit: '분', xLabel: '친구', yLabel: '화면 시간', icons: [{ value: 60, name: '1시간' }, { value: 30, name: '30분' }], icon: 'square' };
    const FOCUS = { timeUnit: 'min', labels: ['숙제', '쉬기'], title: '숙제 집중 타이머', plan: { work: 10, rest: 0, rounds: 1 } };
    M.push(
      C({
        id: 'digital.e34.alarm-time.intro.ding-story', type: 'intro', title: '알림이 울릴 때마다 민지는',
        method: '알림이 울릴 때마다', tool: 'story', minutes: 6,
        levels: { easy: '처음·알림·끝 장면 3장을 교사와 함께 차례로 놓아 본다(둘째 알림 장면은 교사가 말로 읽어 준다).', base: '장면 4장이 차례로 놓이는 것을 보고 숙제를 못 끝낸 까닭을 말한다.', challenge: '4장을 본 뒤 민지가 어느 장면에서 다르게 했으면 좋았을지 골라 짝에게 말한다.' },
        intro: {
          teacher: '"민지는 7시에 독서록을 쓰기 시작했어요. 그런데 8시가 되어도 반밖에 못 썼대요. 무슨 일이 있었을까요?" 시연 단추로 장면 4장이 차례로 놓이는 것을 보이고 장면마다 소리 내어 읽는다. "민지가 게으른 거예요"라는 말이 나오면 "알림이 \'띵\' 하고 울릴 때마다 민지 눈은 어디로 갔나요? 그때 독서록은 어떻게 되었나요?"라고 되물어 알림 한 번이 할 일을 끊는다는 것을 짚는다. 오늘은 알림과 다음 영상에 끌려가지 않는 방법을 배운다고 밝힌다.',
          student: '민지의 장면 4장을 차례로 보고, 독서록을 다 못 쓴 까닭을 짝에게 말해 보아요.',
          demo: { tool: 'story', options: { mode: 'order', slots: ['처음', '다음', '그다음', '끝'], cards: [{ id: 'late', text: '8시, 반만 씀', motif: 'moon' }, { id: 'ding2', text: '또 띵! 영상 클릭', motif: 'star' }, { id: 'start', text: '7시, 독서록 시작', motif: 'house' }, { id: 'ding1', text: '띵! 알림 확인', motif: 'star' }] }, sequence: [{ order: ['start', 'ding1', 'ding2', 'late'] }] },
          art: { draw: 'four paper story panels: a girl starting a reading diary at a desk, a paper phone lighting up with a bell, the girl watching a glowing video on the phone, the girl at night with a half written notebook', banner: '띵! 또 띵!', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: PRIVACY,
      }),
      C({
        id: 'digital.e34.alarm-time.intro.guess-clock', type: 'intro', title: '"하나만" 보고 얼마나 지났을까',
        method: '얼마나 지났을까 맞히기', tool: 'clock', minutes: 6,
        levels: { easy: '4시 정각과 5시 정각 시계를 보고 30분씩 세어 몇 분 지났는지 말한다.', base: '4시와 4시 50분 시계를 보고 10분씩 세어 지난 시간을 말한다.', challenge: '4시 5분과 4시 55분 시계를 보고 5분씩 세어 지난 시간을 말한다.' },
        intro: {
          teacher: '"가온이는 4시에 \'영상 하나만 볼게요\' 하고 시작했어요. 끝났을 때 시계는 이렇게 되어 있었어요." 시연 단추로 바늘이 4시에서 4시 50분으로 움직이는 것을 보이고 "몇 분이 지났을까요?"라고 묻는다(기다릴 반응: "50분이요"). 긴바늘이 한 칸 갈 때마다 손뼉을 쳐 10분씩 함께 센다. "하나만 봐서 5분쯤이에요"라는 말이 나오면 "다음 영상이 저절로 나오면 몇 개를 보게 될까요?"라고 되물어 \'하나만\'이 길어지는 까닭을 짚는다.',
          student: '시작한 시각과 끝난 시각의 시계를 보고, 몇 분이 지났는지 짝과 세어 보아요.',
          demo: { tool: 'clock', options: { minuteStep: 5, showDigital: true }, sequence: [{ h: 4, m: 0 }, { h: 4, m: 50 }] },
          art: { draw: 'two paper clocks side by side showing 4:00 and 4:50, between them a paper tablet playing a chain of small video squares one after another', banner: '하나만 봤는데?', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
        notes: PRIVACY,
      }),
      C({
        id: 'digital.e34.alarm-time.activity.order-task', type: 'activity', title: '할 일 먼저 차례 정하기',
        method: '할 일 먼저 차례 정하기', tool: 'timeline', minutes: 13,
        levels: { easy: '카드 3장을 차례로 놓고, 놓으면 바로 맞는지 알려 준다.', base: '카드 4장을 놓되 꼭 할 일 두 가지를 화면 시간보다 앞에 둔다(둘은 어느 쪽이 먼저여도 된다).', challenge: '알림 끄기 카드가 더해진 5장을 놓아, 알림 끄기를 할 일 시작 앞에 넣는다.' },
        activity: {
          title: '할 일 먼저 차례 정하기', tool: 'timeline',
          teacher: '"영상 30분 카드는 어디에 둘까요? 왜 그 자리예요?" 카드를 다 놓으면 짝에게 "나는 ○○을 먼저 했어. 왜냐하면…" 틀로 고른 까닭을 말하게 한다. 숙제와 가방 챙기기는 어느 쪽이 먼저여도 된다고 알려 준다. 영상을 맨 앞에 두는 학생에게 "영상이 끝나면 바로 숙제를 펼칠 수 있을까요? 다음 영상이 저절로 나오면요?"라고 묻는다. 도전 단계에서는 알림 끄기를 숙제 뒤에 두는 학생에게 "숙제하는 동안 알림이 울리면 어떻게 될까요?"라고 묻는다.',
          task: '저녁에 할 일 카드를 내가 정한 차례로 놓아요. 꼭 할 일을 화면 시간보다 앞에 두어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            { prompt: '평일 저녁 할 일을 차례대로 놓아요.', toolOptions: { axis: ['먼저', '나중'], mode: 'order', cards: [{ id: 'wash', text: '씻기' }, { id: 'screen', text: '영상 30분' }, { id: 'bag', text: '가방 챙기기' }, { id: 'hw', text: '숙제하기' }] }, target: { order: [['hw', 'bag'], 'screen', 'wash'] }, difficulty: 0.15,
              levels: {
                easy: { prompt: '평일 저녁 할 일 3장을 차례대로 놓아요.', toolOptions: { cards: [{ id: 'wash', text: '씻기' }, { id: 'screen', text: '영상 30분' }, { id: 'hw', text: '숙제하기' }] }, target: { order: ['hw', 'screen', 'wash'] } },
                challenge: { prompt: '알림 끄기 카드도 알맞은 자리에 넣어 놓아요.', toolOptions: { cards: [{ id: 'wash', text: '씻기' }, { id: 'screen', text: '영상 30분' }, { id: 'off', text: '알림 끄기' }, { id: 'bag', text: '가방 챙기기' }, { id: 'hw', text: '숙제하기' }] }, target: { order: ['off', ['hw', 'bag'], 'screen', 'wash'] } },
              } },
            { prompt: '체험학습 전날 저녁 할 일을 차례대로 놓아요.', toolOptions: { axis: ['먼저', '나중'], mode: 'order', cards: [{ id: 'bed', text: '일찍 잠자리' }, { id: 'screen', text: '영상 30분' }, { id: 'hw', text: '숙제하기' }, { id: 'pack', text: '준비물 챙기기' }] }, target: { order: [['pack', 'hw'], 'screen', 'bed'] }, difficulty: 0.2,
              levels: {
                easy: { prompt: '체험학습 전날 할 일 3장을 차례대로 놓아요.', toolOptions: { cards: [{ id: 'bed', text: '일찍 잠자리' }, { id: 'screen', text: '영상 30분' }, { id: 'pack', text: '준비물 챙기기' }] }, target: { order: ['pack', 'screen', 'bed'] } },
                challenge: { prompt: '알림 끄기 카드도 넣어 전날 저녁을 놓아요.', toolOptions: { cards: [{ id: 'bed', text: '일찍 잠자리' }, { id: 'off', text: '알림 끄기' }, { id: 'screen', text: '영상 30분' }, { id: 'hw', text: '숙제하기' }, { id: 'pack', text: '준비물 챙기기' }] }, target: { order: ['off', ['pack', 'hw'], 'screen', 'bed'] } },
              } },
            { prompt: '토요일 아침 할 일을 차례대로 놓아요.', toolOptions: { axis: ['먼저', '나중'], mode: 'order', cards: [{ id: 'screen', text: '영상 30분' }, { id: 'room', text: '방 정리하기' }, { id: 'diary', text: '그림일기 쓰기' }, { id: 'bf', text: '아침 먹기' }] }, target: { order: ['bf', ['room', 'diary'], 'screen'] }, difficulty: 0.25,
              levels: {
                easy: { prompt: '토요일 아침 할 일 3장을 차례대로 놓아요.', toolOptions: { cards: [{ id: 'screen', text: '영상 30분' }, { id: 'room', text: '방 정리하기' }, { id: 'bf', text: '아침 먹기' }] }, target: { order: ['bf', 'room', 'screen'] } },
                challenge: { prompt: '알림 끄기 카드도 넣어 토요일 아침을 놓아요.', toolOptions: { cards: [{ id: 'screen', text: '영상 30분' }, { id: 'off', text: '알림 끄기' }, { id: 'room', text: '방 정리하기' }, { id: 'diary', text: '그림일기 쓰기' }, { id: 'bf', text: '아침 먹기' }] }, target: { order: ['bf', 'off', ['room', 'diary'], 'screen'] } },
              },
              conclude: '꼭 할 일을 먼저 끝내고 화면을 보면, 영상이 이어져도 할 일이 밀리지 않아요.' },
          ],
        },
        worksheet: { items: [{ type: 'order', prompt: '할 일 먼저 차례대로 번호를 써요.', options: ['알림 끄기', '숙제하기', '영상 30분', '씻기'], answer: '알림 끄기, 숙제하기, 영상 30분, 씻기' }] },
        notes: PRIVACY,
      }),
      C({
        id: 'digital.e34.alarm-time.activity.pic-graph', type: 'activity', title: '가상 친구 화면 시간 그림그래프',
        method: '우리 반 사용 시간 그림그래프', tool: 'chart', minutes: 14,
        levels: { easy: '1시간 그림만 쓰면 되는 가상 친구 3명의 값으로 그림그래프를 만들고, 첫 줄은 미리 놓여 있다.', base: '1시간·30분 그림으로 가상 친구 4명의 그림그래프를 완성하고 가장 긴 사람·짧은 사람을 고른다.', challenge: '4명을 완성한 뒤 우리 반 약속 1시간을 넘은 사람이 모두 몇 명인지 센다.' },
        activity: {
          title: '가상 친구 화면 시간 그림그래프', tool: 'chart',
          teacher: '"큰 네모 하나는 1시간, 작은 네모 하나는 30분이에요. 90분이면 무엇을 몇 개 놓을까요?" 표의 수를 소리 내어 읽고 그림을 놓게 한다. 작은 네모만 3개 놓는 학생에게 "60분은 큰 네모 하나로 나타낼 수 있어요. 더 간단히 놓아 볼까요?"라고 묻는다. 그래프는 가상 친구의 값이고, 우리 반 친구들의 사용 시간은 묻지 않는다고 먼저 밝힌다. 1시간은 셈 연습용 우리 반 약속 값이지 정해진 기준이 아니라고 덧붙인다. 다솜이가 왜 길어졌을지 "다음 영상이 저절로 나와서", "알림을 따라가서"처럼 오늘 배운 까닭에서 찾아보게 한다.',
          task: '가상 친구들의 화면 시간 표를 보고 그림그래프를 완성한 뒤, 그래프를 읽고 물음에 답해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '표를 보고 가상 친구들의 그림그래프를 완성해요.', toolOptions: Object.assign({}, PIC, { mode: 'build', data: WEEK }), target: { build: true }, difficulty: 0.2,
              levels: { easy: { prompt: '1시간 그림으로 3명의 그림그래프를 완성해요.', toolOptions: { data: [['가온', 60], ['나래', 120], ['다솜', 180]], given: [0] }, target: { build: true } } } },
            { prompt: '그래프에서 화면 시간이 가장 긴 친구는?', toolOptions: Object.assign({}, PIC, { mode: 'read', data: WEEK, question: '화면 시간이 가장 긴 친구는 누구인가요?', choices: NAMES }), target: { pick: 2 }, difficulty: 0.15 },
            { prompt: '그래프에서 화면 시간이 가장 짧은 친구는?', toolOptions: Object.assign({}, PIC, { mode: 'read', data: WEEK, question: '화면 시간이 가장 짧은 친구는 누구인가요?', choices: NAMES }), target: { pick: 3 }, difficulty: 0.2,
              levels: { challenge: { prompt: '약속 1시간을 넘은 친구는 모두 몇 명일까요?', toolOptions: { question: '1시간(60분)을 넘은 친구는 몇 명인가요?', choices: null }, target: { value: 2 } } },
              conclude: '그래프로 보면 화면 시간이 늘어난 사람이 한눈에 보여요. 늘어난 까닭은 알림과 다음 영상에서 찾을 수 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '표의 빈칸에 큰 네모(1시간) 수를 써요.', columns: ['친구', '화면 시간', '큰 네모 수'], cells: [['나래', '60분', ''], ['다솜', '150분', '']], answer: '1, 2' }] },
        notes: '그래프 값은 가상 친구의 것이다. 학생에게 자기 사용 시간을 적어 오게 하거나 발표·비교시키지 않는다.',
      }),
      C({
        id: 'digital.e34.alarm-time.activity.alarm-choice', type: 'activity', title: '갈림길: 할 일 중에 울린 알림',
        method: '알림 왔을 때 갈림길', tool: 'dilemma', minutes: 13,
        levels: { easy: '갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '갈림 2번, 보기 3개씩 고르며 결과를 따라간다.', challenge: '바른 길을 끝까지 간 뒤 되돌아가 다른 길도 끝까지 가 보고 두 결과를 견준다.' },
        activity: {
          title: '갈림길: 할 일 중에 울린 알림', tool: 'dilemma',
          teacher: '"알림을 바로 따라가면 숙제는 어떻게 될까요?" 보기를 고를 때마다 결과 장면을 소리 내어 읽고, 그 친구와 가족에게 어떤 일이 생기는지 짝과 말하게 한다. "알림이 오면 바로 확인해야 해요"라는 학생에게 "숙제를 마친 뒤에 봐도 그 알림은 그대로 있을까요?"라고 묻는다. 급한 연락은 보호자가 전화로 한다는 것도 짚는다. 도전 단계에서는 다른 길을 끝까지 가 본 뒤 "어느 길의 저녁이 더 편했나요?"라고 견주게 한다.',
          task: '장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('숙제가 반 남았는데 게임 알림이 울려요.', {
              text: '저녁 7시, 수학 숙제가 반 남았는데 "새 판이 열렸어요!" 게임 알림이 울렸어요.', motif: 'star',
              choices: [
                { id: 'play', text: '바로 게임을 켠다', result: '한 판만 하려다 세 판을 했고, 숙제는 그대로예요.', impact: [{ who: '라온', text: '숙제를 못 끝냈어요', tone: -1 }] },
                { id: 'off', text: '알림을 끄고 숙제를 마친다', result: '알림을 끄니 숙제에 다시 집중했어요.', ending: '할 일을 먼저 끝내고 마음 편히 쉬었어요.', next: {
                  text: '숙제를 다 하니 7시 40분이에요. 친구가 "같이 하자!" 메시지를 보냈어요.', choices: [
                    { id: 'promise', text: '"30분만 하자" 하고 시간을 맞춘다', result: '30분 뒤 타이머가 울려 둘 다 껐어요.', impact: [{ who: '라온과 친구', text: '약속을 지켰어요', tone: 1 }], ending: '정한 시간만큼 놀고 제때 껐어요.' },
                    { id: 'endless', text: '끝날 때까지 계속한다', result: '판이 계속 이어져 잘 시간이 지났어요.', impact: [{ who: '가족', text: '걱정했어요', tone: -1 }] },
                    { id: 'hide', text: '방에서 몰래 한다', result: '가족이 모르는 사이 밤늦게까지 했어요.', impact: [{ who: '라온', text: '아침에 졸려요', tone: -1 }] },
                  ] } },
                { id: 'both', text: '숙제하며 게임도 한다', result: '번갈아 하느라 숙제가 틀리고 오래 걸렸어요.', impact: [{ who: '라온', text: '숙제를 다시 해요', tone: -1 }] },
              ] }, [['off', 'promise']], 0.2),
            DIL('독서록을 쓰는데 대화방 알림이 이어져요.', {
              text: '독서록을 쓰는데 반 대화방 알림이 "띵, 띵, 띵" 이어서 울려요.', motif: 'house',
              choices: [
                { id: 'read', text: '울릴 때마다 다 읽는다', result: '읽고 답하다 보니 독서록은 두 줄뿐이에요.', impact: [{ who: '나래', text: '독서록을 못 냈어요', tone: -1 }] },
                { id: 'quiet', text: '알림을 잠시 끄고 쓴다', result: '조용해져서 독서록을 다 썼어요.', ending: '할 일을 마친 뒤 대화방을 한 번에 봤어요.', next: {
                  text: '다 쓰고 대화방을 여니 글이 40개나 와 있어요.', choices: [
                    { id: 'pick', text: '내게 온 글만 골라 답한다', result: '꼭 필요한 답만 하고 폰을 내려놓았어요.', impact: [{ who: '나래', text: '시간이 남았어요', tone: 1 }], ending: '중요한 글만 골라 읽고 금방 끝냈어요.' },
                    { id: 'all', text: '40개에 다 답한다', result: '답하는 사이 또 글이 쌓였어요.', impact: [{ who: '나래', text: '잘 시간이 늦어요', tone: -1 }] },
                    { id: 'scroll', text: '사진까지 다 넘겨 본다', result: '사진을 보다 영상까지 눌렀어요.', impact: [{ who: '나래', text: '시간이 훌쩍 갔어요', tone: -1 }] },
                  ] } },
                { id: 'answer', text: '쓰면서 짧게 답한다', result: '답하다 보니 쓰던 문장을 잊었어요.', impact: [{ who: '나래', text: '처음부터 다시 써요', tone: -1 }] },
              ] }, [['quiet', 'pick']], 0.25),
            DIL('만들기 숙제 중에 새 영상 알림이 와요.', {
              text: '만들기 숙제로 상자를 붙이는데 "새 영상이 올라왔어요" 알림이 떴어요.', motif: 'sun',
              choices: [
                { id: 'watch', text: '풀칠하다 말고 본다', result: '영상이 끝나자 다음 영상이 또 나왔어요. 풀이 말라 버렸어요.', impact: [{ who: '다솜', text: '다시 붙여야 해요', tone: -1 }] },
                { id: 'later', text: '"다 만들고 볼래" 하고 엎어 둔다', result: '폰을 엎어 두고 상자를 다 붙였어요.', ending: '할 일을 끝내고 영상을 봤어요.', next: {
                  text: '다 만들고 영상을 봤어요. 끝나니 다음 영상이 저절로 나오려 해요.', choices: [
                    { id: 'stop', text: '하나 보고 끈다', result: '정한 하나만 보고 동생과 상자 놀이를 했어요.', impact: [{ who: '동생', text: '같이 놀아서 신나요', tone: 1 }], ending: '보기로 한 것만 보고 껐어요.' },
                    { id: 'next', text: '다음 영상도 본다', result: '하나가 다섯 개가 되었어요.', impact: [{ who: '다솜', text: '저녁 먹을 때를 놓쳤어요', tone: -1 }] },
                    { id: 'lie', text: '누워서 계속 본다', result: '누운 채로 한 시간이 지났어요.', impact: [{ who: '가족', text: '여러 번 불렀어요', tone: -1 }] },
                  ] } },
                { id: 'sound', text: '틀어 놓고 만든다', result: '화면을 자꾸 보느라 상자가 삐뚤어졌어요.', impact: [{ who: '다솜', text: '마음에 안 들어요', tone: -1 }] },
              ] }, [['later', 'stop']], 0.3,
              { conclude: '알림은 할 일을 마친 뒤에 봐도 그대로 있어요. 다음 영상은 내가 멈출 때 멈춰요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '숙제 중에 알림이 울리면 알맞은 행동은?', options: ['바로 확인해요', '알림을 끄고 숙제를 마쳐요', '숙제하며 같이 봐요'], answer: '알림을 끄고 숙제를 마쳐요' }] },
        notes: PRIVACY,
      }),
      C({
        id: 'digital.e34.alarm-time.activity.timer-plan', type: 'activity', title: '숙제 집중 타이머 맞추기',
        method: '집중 타이머 계획 세우기', tool: 'timer', minutes: 14,
        levels: { easy: '1·3번은 숙제 15분(또는 20분) 한 구간만 맞추고, 2번은 쉬는 동안 할 카드 2장을 차례로 놓는다.', base: '숙제 15분 → 쉬기 5분을 두 번 맞추고, 쉬는 동안 할 카드 3장을 차례로 놓는다.', challenge: '3번에서 숙제 양에 맞게 두 번에 나눠 전체 45분이 되도록 숙제·쉬기 길이를 스스로 정한다.' },
        activity: {
          title: '숙제 집중 타이머 맞추기', tool: 'timer',
          teacher: '"숙제 15분, 쉬기 5분을 두 번 하려면 타이머 칸을 어떻게 맞출까요?" 칸을 하나씩 짚으며 맞추게 한다. "쉬는 5분에 영상 하나 보면 돼요"라는 학생에게 "5분짜리 영상이 끝나면 다음 영상이 나올 텐데, 다시 숙제로 돌아올 수 있을까요?"라고 묻는다. 쉬는 동안에는 화면 대신 일어나 기지개를 켜고 물을 마시는 차례를 함께 따라 한다. 도전 단계에서는 숙제가 많은 날 길이를 어떻게 바꿀지 짝과 견주게 한다.',
          task: '타이머를 숙제와 쉬기 구간으로 맞추고, 쉬는 동안 화면 대신 할 일을 차례로 놓아요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '숙제 15분, 쉬기 5분을 2번 하도록 맞춰요.', toolOptions: FOCUS, target: { plan: { work: 15, rest: 5, rounds: 2 } }, difficulty: 0.15,
              levels: { easy: { prompt: '숙제 15분 한 구간만 타이머에 맞춰요.', target: { plan: { work: 15, rounds: 1 } } } } },
            { prompt: '쉬는 5분 동안 화면 대신 할 일을 차례로 놓아요.', toolOptions: { title: '쉬는 5분', cards: ['다시 자리에 앉기', '물 한 컵 마시기', '일어나 기지개'] }, target: { order: ['일어나 기지개', '물 한 컵 마시기', '다시 자리에 앉기'] }, difficulty: 0.2,
              levels: { easy: { prompt: '쉬는 동안 할 일 2장을 차례로 놓아요.', toolOptions: { cards: ['다시 자리에 앉기', '일어나 기지개'] }, target: { order: ['일어나 기지개', '다시 자리에 앉기'] } } } },
            { prompt: '숙제가 많은 날: 숙제 20분, 쉬기 5분을 2번 맞춰요.', toolOptions: Object.assign({}, FOCUS, { title: '숙제가 많은 날', showTotal: true }), target: { plan: { work: 20, rest: 5, rounds: 2 } }, difficulty: 0.25,
              levels: { easy: { prompt: '숙제 20분 한 구간만 타이머에 맞춰요.', target: { plan: { work: 20, rounds: 1 } } }, challenge: { prompt: '2번에 나눠 전체 45분이 되게 스스로 맞춰요.', target: { plan: { rounds: 2 }, total: 45 } } },
              conclude: '숙제 시간과 쉬는 시간을 미리 정하면 알림에 끌려가지 않고 제때 쉴 수 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 수를 써요.', text: '숙제 15분, 쉬기 5분, 다시 숙제 15분을 하면 모두 ___분이에요.', answer: '35' }] },
        notes: '타이머 두 구간 이름을 \'숙제\'·\'쉬기\'로 바꿔 두었다. 15분·20분·5분은 연습용 우리 반 약속 값이다.',
      }),
      C({
        id: 'digital.e34.alarm-time.wrap.end-clock', type: 'wrap', title: '오늘 화면 끌 시각 정하기',
        method: '오늘 끝낼 시각 정하기', tool: 'clock', minutes: 6,
        levels: { easy: '정각만 움직이는 시계로 8시에 바늘을 맞춘다.', base: '30분 단위로 움직이는 시계로 8시 30분에 맞춘다.', challenge: '10분 단위로 움직이는 시계로 8시 40분에 맞추고, 끄는 시각을 정하는 까닭을 고른다(출구 2번).' },
        wrap: {
          teacher: '"민지네 집 약속은 \'할 일 먼저, 화면은 8시 30분에 끄기\'예요. 시계 바늘을 그 시각에 맞춰 볼까요?" 바늘을 맞춘 뒤 "끌 시각을 미리 정하면 무엇이 좋을까요?"라고 묻는다. 8시 30분은 민지네 약속이고, 우리 집 시각은 가족과 정한다고 알려 준다. 출구 2번에서 "다음 영상이 끝날 때"를 고른 학생에게 "다음 영상은 언제 끝날까요? 끝나면 또 무엇이 나오나요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'clock', options: { minuteStep: 30 }, prompt: '민지네 약속: 8시 30분에 화면을 꺼요. 바늘을 맞춰요.', target: { h: 8, m: 30 }, difficulty: 0.15,
              levels: {
                easy: { prompt: '민지네 약속: 8시에 화면을 꺼요. 바늘을 맞춰요.', toolOptions: { hourOnly: true, minuteStep: 60 }, target: { h: 8, m: 0 } },
                challenge: { prompt: '가온이네 약속: 8시 40분에 화면을 꺼요. 바늘을 맞춰요.', toolOptions: { minuteStep: 10 }, target: { h: 8, m: 40 } },
              } },
            { type: 'choice', prompt: '화면을 끌 시각은 언제 정하면 좋을까요?', options: ['보기 전에 미리 정해요', '다음 영상이 끝날 때', '졸릴 때 정해요'], answer: 0, difficulty: 0.1, explain: '보기 전에 끌 시각을 정해 두면 다음 영상이 나와도 멈출 수 있어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '할 일 먼저, 끌 시각 정하기',
          items: [
            { type: 'blank', prompt: '우리 집에서 정한 약속을 써요.', text: '나는 ___을 먼저 하고, ___시 ___분에 화면을 꺼요.' },
            { type: 'check', prompt: '오늘 한 것에 표시해요.', options: ['끌 시각을 정했어요', '할 일 먼저 차례를 정했어요', '알림 끄는 때를 알았어요'] },
          ],
          easy: { note: '시계에 바늘을 그려 끌 시각을 나타내요.', items: [{ type: 'draw', prompt: '화면을 끌 시각을 시계에 그려요.' }] },
        },
        notes: '끄는 시각은 집마다 다르다. 학생에게 실제로 몇 시에 끄는지 발표시키지 않고, 활동지는 집에서 가족과 채운다.',
      }),
      C({
        id: 'digital.e34.alarm-time.wrap.one-reason', type: 'wrap', title: '알림을 끄면 ___',
        method: '고른 이유 한 마디', tool: 'wordcards', minutes: 6,
        levels: { easy: '빈칸 1개에 낱말 카드 하나를 넣어 소리 내어 읽는다.', base: '빈칸 2개를 채워 문장 하나를 완성해 읽는다.', challenge: '빈칸 3개를 채운 뒤 활동지에 내 낱말로 문장을 바꿔 쓴다.' },
        wrap: {
          teacher: '"알림을 끄면 무엇이 좋을까요? 카드를 넣고 소리 내어 읽어 볼까요?" 완성한 문장을 짝에게 읽어 주게 한다. \'불안해요\' 카드를 넣으려는 학생에게 그 마음을 인정하고 "알림을 끄고 숙제를 마친 뒤 열어 보면, 그 글은 없어졌을까요?"라고 묻는다. 출구 2번에서 "꺼 두면 안 돼요"를 고른 학생에게 급한 일은 보호자가 전화로 알린다는 것을 다시 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'wordcards', options: { mode: 'fill', slots: [{ id: 'r1', label: '알림을 끄면 숙제에 ___할 수 있어요.' }, { id: 'r2', label: '숙제를 ___ 끝낼 수 있어요.' }], cards: ['집중', '빨리', '불안', '늦게'] }, prompt: '빈칸에 카드를 넣어 문장을 완성해요.', target: { fill: { r1: '집중', r2: '빨리' } }, difficulty: 0.15,
              levels: {
                easy: { prompt: '빈칸 하나에 카드를 넣어요.', toolOptions: { slots: [{ id: 'r1', label: '알림을 끄면 숙제에 ___할 수 있어요.' }], cards: ['집중', '불안'] }, target: { fill: { r1: '집중' } } },
                challenge: { prompt: '빈칸 셋에 카드를 넣어 문장을 완성해요.', toolOptions: { slots: [{ id: 'r1', label: '알림을 끄면 숙제에 ___할 수 있어요.' }, { id: 'r2', label: '숙제를 ___ 끝낼 수 있어요.' }, { id: 'r3', label: '끝나고 보면 마음이 ___.' }], cards: ['집중', '빨리', '편해요', '불안', '늦게', '답답해요'] }, target: { fill: { r1: '집중', r2: '빨리', r3: '편해요' } } },
              } },
            { type: 'choice', prompt: '숙제하는 동안 알림을 꺼 두어도 될까요?', options: ['꺼 두면 안 돼요', '꺼 두고 끝나면 봐요', '소리를 크게 해요'], answer: 1, difficulty: 0.1, explain: '알림은 숙제를 마친 뒤에 봐도 그대로 있어요.' },
            { type: 'short', prompt: '내 말로 "알림을 끄면 ___" 문장을 하나 써요.' },
          ],
        },
        worksheet: {
          title: '알림을 끄면',
          items: [
            { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '알림을 끄면 숙제에 ___할 수 있어요.', answer: '집중' },
            { type: 'short', prompt: '숙제할 때 알림을 끄는 방법을 가족과 이야기한 뒤 써요.' },
          ],
        },
        notes: '알림 설정은 집에서 보호자와 함께 바꾼다고 안내하고, 교실에서 학생 기기를 직접 바꾸게 하지 않는다. 낱말 카드는 소리를 내지 않는 fill 모드다.',
      }),
    );
  }

  // ======================================================================================================
  // 4학년 · 화면 밖 즐거움으로 채우는 한 주 (research-mandatory §2 초: 사용 시간 조절 — 화면 밖 활동 계획은 일반 지식, 근거 약함)
  // ======================================================================================================
  {
    const C = T('offline-week', 4);
    const SURVEY = [['줄넘기', 7], ['보드게임', 5], ['책 읽기', 4], ['자전거', 6]];
    const TOWN = {
      title: '하윤이네 마을(가상)', grid: [6, 4],
      places: [
        { name: '우리 집', icon: 'house', at: [0, 3] }, { name: '공원', icon: 'park', at: [3, 3] },
        { name: '도서관', icon: 'library', at: [2, 0] }, { name: '놀이터', icon: 'forest', at: [5, 1] }, { name: '학교', icon: 'school', at: [5, 3] },
      ],
      roads: [[[0, 3], [1, 3], [2, 3], [3, 3], [4, 3], [5, 3]], [[1, 3], [1, 2], [1, 1], [1, 0], [2, 0]], [[3, 3], [3, 2], [3, 1], [4, 1], [5, 1]]],
    };
    const PATH = { cols: 5, rows: 5, start: { x: 0, y: 4, dir: 'E' }, goal: { x: 4, y: 0 }, stars: [[2, 4], [4, 3], [4, 1]], rocks: [[1, 1], [3, 2]] };
    const BUGGY = ['fwd', 'fwd', 'fwd', 'fwd', 'right', 'fwd', 'fwd', 'fwd', 'fwd'];
    const PAPER = { shapes: ['circle', 'square', 'heart', 'star', 'rect'], maxPieces: 12 };
    const WEEK7 = [['월 · 도서관 가는 날', '책 빌려 읽기'], ['화 · 맑고 바람 없음', '줄넘기 하기'], ['수 · 비 오는 날', '종이접기'], ['목 · 놀이터 가는 날', '미끄럼틀 놀이'], ['금 · 가족 저녁', '가족 보드게임'], ['토 · 공원 나들이', '자전거 타기'], ['일 · 할머니 댁', '텃밭 물 주기']];
    const wkSlots = (n) => WEEK7.slice(0, n).map((r, i) => ({ id: `d${i + 1}`, label: r[0] }));
    const wkCards = (n) => WEEK7.slice(0, n).map((r) => r[1]).reverse();
    const wkT = (n) => ({ match: Object.fromEntries(WEEK7.slice(0, n).map((r, i) => [`d${i + 1}`, r[1]])) });
    M.push(
      C({
        id: 'digital.e34.offline-week.intro.idea-map', type: 'intro', title: '화면 밖 즐거움 떠올리기',
        method: '화면 밖에서 할 수 있는 것', tool: 'mindmap', minutes: 6,
        levels: { easy: '몸·책 가지 2개에 카드가 붙는 것을 보고 하나씩 더 떠올려 말한다.', base: '몸·책·만들기·가족 가지 4개에 카드가 붙는 것을 보고 더 떠올려 말한다.', challenge: '가지마다 활동 두 개씩 떠올려 짝과 견주어 말한다(교사 진행).' },
        intro: {
          teacher: '"화면을 끄면 무엇을 하고 놀 수 있을까요?" 시연 단추로 가운데 \'화면 밖 즐거움\'에서 몸·책·만들기·가족 가지에 카드가 붙는 것을 보인다(기다릴 반응: "줄넘기요", "레고요", "가족이랑 윷놀이요"). "화면을 안 보면 할 게 없어요"라는 말이 나오면 "가지 네 개에 붙은 것 가운데 오늘 해 볼 수 있는 것은 몇 개일까요?"라고 되묻는다. 오늘은 화면 밖 활동으로 한 주 계획을 세운다고 밝힌다.',
          student: '가운데 "화면 밖 즐거움"에서 뻗은 가지를 보고, 가지마다 하고 싶은 활동을 떠올려 짝에게 말해 보아요.',
          demo: { tool: 'mindmap', options: { topic: '화면 밖 즐거움', slots: ['몸', '책', '만들기', '가족'], cards: ['줄넘기', '동화책 읽기', '종이접기', '가족 윷놀이', '자전거', '블록 쌓기'], shuffle: false },
            sequence: [{ sort: { 몸: ['줄넘기'], 책: ['동화책 읽기'], 만들기: [], 가족: [] } }, { sort: { 몸: ['줄넘기', '자전거'], 책: ['동화책 읽기'], 만들기: ['종이접기', '블록 쌓기'], 가족: ['가족 윷놀이'] } }] },
          art: { draw: 'a paper mind map with a switched off paper tablet in the middle and four branches holding a jump rope, a picture book, folded paper cranes and a family playing a board game', banner: '화면 밖 즐거움', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
        notes: PRIVACY,
      }),
      C({
        id: 'digital.e34.offline-week.intro.class-survey', type: 'intro', title: '가상 학급이 좋아하는 놀이',
        method: '우리 반이 좋아하는 놀이', tool: 'chart', minutes: 6,
        levels: { easy: '막대 3개(줄넘기·보드게임·자전거)가 그려지는 것을 보고 가장 긴 막대를 말한다.', base: '막대 4개가 그려지는 것을 보고 가장 많은 놀이와 적은 놀이를 말한다.', challenge: '가장 많은 놀이(7명)와 가장 적은 놀이(4명)가 몇 명 차이인지 말한다.' },
        intro: {
          teacher: '"이웃 학교 가상의 4학년 반이 \'화면 밖에서 좋아하는 놀이\'를 골랐어요. 표를 막대그래프로 바꿔 볼까요?" 시연 단추로 막대가 하나씩 올라가는 것을 보이고 줄넘기 7명, 보드게임 5명처럼 함께 읽는다. 표는 가상 자료이고 우리 반 조사는 하지 않는다고 밝힌다. "화면 밖 놀이는 재미없어서 아무도 안 골라요"라는 말이 나오면 "막대를 보세요. 화면 밖 놀이를 고른 사람이 모두 몇 명인가요?"라고 되묻는다.',
          student: '가상 학급 설문 표가 막대그래프로 바뀌는 것을 보고, 가장 많이 고른 놀이를 찾아보아요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'build', title: '좋아하는 화면 밖 놀이(가상 설문)', unit: '명', xLabel: '놀이', yLabel: '고른 사람 수', data: SURVEY, max: 8, scale: 1 }, sequence: [{ values: [7, 0, 0, 0] }, { values: [7, 5, 4, 6] }] },
          art: { draw: 'a paper bar chart with four paper bars, each topped with a small jump rope, board game, book and bicycle cut from paper', banner: '어떤 놀이가 가장 많을까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '설문 값은 가상 학급의 것이다. 우리 반 학생에게 손을 들게 해 세거나 발표시키지 않는다.',
      }),
      C({
        id: 'digital.e34.offline-week.activity.week-board', type: 'activity', title: '하윤이의 한 주 일과판',
        method: '한 주 일과판 짜기', tool: 'kitchen', minutes: 13,
        levels: { easy: '1번은 사흘(월·화·수) 칸에 카드를 넣고, 놓으면 바로 맞는지 알려 준다. 2번은 카드 4장에서 가족과 함께할 것을 고른다.', base: '1번은 이레(월~일) 칸에 카드를 하나씩 넣고, 2번은 카드 6장에서 가족과 함께할 것을 고른다.', challenge: '1번에 남는 함정 카드(하루 종일 영상)가 섞이고, 3번에서 화면 밖·화면 활동을 나눈다.' },
        activity: {
          title: '하윤이의 한 주 일과판', tool: 'kitchen',
          teacher: '"월요일은 도서관 가는 날이래요. 이날 넣기 알맞은 화면 밖 활동은 무엇일까요?" 칸의 날씨·일정 단서를 소리 내어 읽고 카드를 넣게 한다. 비 오는 수요일에 자전거 타기를 넣으려는 학생에게 "비가 오면 밖에서 탈 수 있을까요? 집 안에서 할 것은요?"라고 묻는다. 2번에서 \'각자 폰 보기\'를 가족 칸에 넣는 학생에게 "같은 방에 있어도 함께 노는 것일까요?"라고 묻는다. 하윤이의 일과판은 가상의 예이고, 우리 집 계획은 활동지에서 가족과 세운다고 알려 준다.',
          task: '요일 칸의 단서를 읽고 하윤이의 한 주 일과판에 화면 밖 활동 카드를 하루 하나씩 넣어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            { prompt: '요일 단서에 맞는 화면 밖 활동을 넣어요.', toolOptions: { mode: 'match', autoMotif: false, title: '하윤이의 한 주', slots: wkSlots(7), cards: wkCards(7) }, target: wkT(7), difficulty: 0.15,
              levels: {
                easy: { prompt: '월·화·수 칸에 화면 밖 활동을 넣어요.', toolOptions: { slots: wkSlots(3), cards: wkCards(3) }, target: wkT(3) },
                challenge: { prompt: '요일 칸에 활동을 넣어요. 남는 카드가 있어요.', toolOptions: { cards: ['하루 종일 영상'].concat(wkCards(7)) }, target: wkT(7) },
              } },
            { prompt: '가족과 함께할 화면 밖 활동만 골라요.', toolOptions: { mode: 'pick', autoMotif: false, basket: '가족과 함께', cards: [{ id: 'cook', text: '함께 요리하기' }, { id: 'phone', text: '각자 폰 보기' }, { id: 'walk', text: '저녁 산책' }, { id: 'alone', text: '혼자 영상 보기' }, { id: 'yut', text: '가족 윷놀이' }, { id: 'tv', text: '말없이 TV 보기' }] }, target: { pick: ['cook', 'walk', 'yut'] }, difficulty: 0.2,
              levels: { easy: { prompt: '가족과 함께할 활동만 골라요(4장).', toolOptions: { cards: [{ id: 'cook', text: '함께 요리하기' }, { id: 'phone', text: '각자 폰 보기' }, { id: 'walk', text: '저녁 산책' }, { id: 'alone', text: '혼자 영상 보기' }] }, target: { pick: ['cook', 'walk'] } } } },
            { prompt: '하윤이의 주말 일을 화면 밖과 화면으로 나누어요.', toolOptions: { mode: 'sort', autoMotif: false, groups: false, slots: ['화면 밖 활동', '화면 활동'], cards: ['공원 산책', '영상 보기', '블록 만들기', '게임하기', '동생과 숨바꼭질', '사진 넘겨 보기'] }, target: { sort: { '화면 밖 활동': ['공원 산책', '블록 만들기', '동생과 숨바꼭질'], '화면 활동': ['영상 보기', '게임하기', '사진 넘겨 보기'] } }, difficulty: 0.25,
              levels: { easy: { prompt: '주말 일 4장을 화면 밖과 화면으로 나누어요.', toolOptions: { cards: ['공원 산책', '영상 보기', '블록 만들기', '게임하기'] }, target: { sort: { '화면 밖 활동': ['공원 산책', '블록 만들기'], '화면 활동': ['영상 보기', '게임하기'] } } } },
              conclude: '한 주 칸마다 화면 밖 활동을 하나씩 넣으면 화면을 보지 않아도 할 일이 가득해요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 집 한 주 화면 밖 활동을 가족과 정해 써요.', columns: ['요일', '화면 밖 활동', '누구와'], cells: [['월', '', ''], ['수', '', ''], ['토', '', '']] }] },
        notes: PRIVACY,
      }),
      C({
        id: 'digital.e34.offline-week.activity.route-play', type: 'activity', title: '마을 지도에서 놀 곳 찾기',
        method: '공원 가는 길 찾기', tool: 'map', minutes: 14,
        levels: { easy: '장소 이름과 핀 자리 글자가 보이는 지도에서 공원·도서관에 핀만 꽂고, 3번은 보기 두 곳에서 가장 가까운 곳을 고른다.', base: '공원·도서관에 핀을 꽂고, 3번에서 집에서 가장 가까운 곳을 세 곳 가운데 고른다.', challenge: '핀을 꽂은 뒤 그곳에서 할 활동을 보기에서 고르고, 3번에서 가까운 곳을 고른 이유를 짝에게 말한다.' },
        activity: {
          title: '마을 지도에서 놀 곳 찾기', tool: 'map',
          teacher: '"하윤이가 집에서 길을 따라 공원에 가려면 어디로 갈까요?" 손가락으로 길을 따라가 본 뒤 핀을 꽂게 한다. 학교에 핀을 꽂은 학생에게 "공원 기호는 나무 모양이에요. 지도 아래 범례를 볼까요?"라고 묻는다. 3번에서 칸 수를 세지 않고 고르는 학생에게 "집에서 길을 따라 몇 칸 가면 닿나요? 손가락으로 세어 볼까요?"라고 묻는다. 지도는 가상의 마을이고 학생의 집 위치는 묻지 않는다.',
          task: '하윤이네 마을 지도에서 길을 따라가 화면 밖에서 놀 곳을 찾아 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            { prompt: '집에서 길을 따라 공원에 핀을 꽂아요.', toolOptions: TOWN, target: { place: '공원' }, difficulty: 0.15,
              levels: { challenge: { prompt: '공원에 핀을 꽂고 그곳에서 할 활동도 골라요.', toolOptions: { ask: { q: '공원에서 할 화면 밖 활동은?', choices: ['자전거 타기', '벤치에서 게임하기', '앉아서 영상 보기'] } }, target: { place: '공원', pick: 0 } } } },
            { prompt: '집에서 길을 따라 도서관에 핀을 꽂아요.', toolOptions: TOWN, target: { place: '도서관' }, difficulty: 0.2,
              levels: { challenge: { prompt: '도서관에 핀을 꽂고 그곳에서 할 활동도 골라요.', toolOptions: { ask: { q: '도서관에서 할 화면 밖 활동은?', choices: ['그림책 빌리기', '폰으로 영상 보기', '큰 소리로 놀기'] } }, target: { place: '도서관', pick: 0 } } } },
            { prompt: '집에서 길을 따라 가장 가까운 놀 곳을 골라요.', toolOptions: Object.assign({}, TOWN, { ask: { q: '길을 따라가면 집에서 가장 가까운 곳은?', choices: ['공원', '도서관', '놀이터'] } }), target: { pick: 0 }, difficulty: 0.25,
              levels: { easy: { prompt: '두 곳 가운데 집에서 더 가까운 곳을 골라요.', toolOptions: { ask: { q: '길을 따라가면 집에서 더 가까운 곳은?', choices: ['공원', '놀이터'] } }, target: { pick: 0 } } },
              conclude: '가까운 곳에도 화면 밖에서 놀 곳이 많아요. 지도로 찾아 두면 놀러 가기 쉬워요.' },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '지도에서 공원을 나타내는 기호는?', options: ['집 모양', '나무 모양', '책 모양'], answer: '나무 모양' }] },
        notes: '마을 지도는 가상의 것이다. 학생의 집 주소나 동네 위치를 묻거나 그리게 하지 않는다.',
      }),
      C({
        id: 'digital.e34.offline-week.activity.robot-move', type: 'activity', title: '거북이 보물찾기 길 짜기',
        method: '거북이 로봇 놀이', tool: 'block-coding', minutes: 13,
        levels: { easy: '1번은 보물(별) 하나만 지나 집에 닿게 짜고, 2·3번은 기본과 같다.', base: '1번은 보물 셋을 모두 지나 집에 닿게 짜고, 2번은 한 블록이 틀린 길을 고치고, 3번은 길을 따라가 멈출 칸을 고른다.', challenge: '1번을 반복 블록을 써서 블록 5개 이하로 짠다.' },
        activity: {
          title: '거북이 보물찾기 길 짜기', tool: 'block-coding',
          teacher: '칠판에 판을 그리고 칸 뜻을 적어 둔다(교구 판에는 칸 이름이 없다): 별 = 보물, 집 = 도착, 바위 = 지나갈 수 없는 곳. "주말에 가족과 할 보물찾기를 거북이로 먼저 연습해 볼까요? 별 세 개를 모두 지나 집에 가려면 블록을 어떻게 놓을까요?" 블록을 놓은 뒤 실행을 눌러 확인하게 한다. 왼쪽·오른쪽 돌기가 헷갈리는 학생에게 "거북이 머리가 어디를 보고 있나요? 거북이 쪽에서 왼쪽은 어디일까요?"라고 묻는다. 끝나면 교실이나 집에서 직접 해 볼 보물찾기 규칙을 짝과 말하게 한다.',
          task: '거북이가 보물(별)을 지나 집에 닿도록 앞으로·돌기 블록을 놓아요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '보물 세 개를 모두 지나 집에 닿게 블록을 놓아요.', toolOptions: PATH, target: { reach: true, stars: true }, difficulty: 0.2,
              levels: {
                easy: { prompt: '보물 하나를 지나 집에 닿게 블록을 놓아요.', toolOptions: { stars: [[2, 4]] }, target: { reach: true, stars: true } },
                challenge: { prompt: '반복 블록을 써서 5개 이하로 보물을 다 모아요.', target: { reach: true, stars: true, maxBlocks: 5, use: ['rep'] } },
              } },
            { prompt: '판 밖으로 나가는 길을 한 블록만 고쳐 집에 닿게 해요.', toolOptions: PATH, state: { program: BUGGY }, target: { reach: true, maxEdits: 1, from: BUGGY }, difficulty: 0.25 },
            { prompt: '이 프로그램대로 가면 거북이가 멈출 칸을 골라요.', toolOptions: Object.assign({}, PATH, { mode: 'trace', program: ['fwd', 'fwd', 'left', 'fwd', 'fwd', 'fwd'] }), target: { end: { x: 2, y: 1 } }, difficulty: 0.25,
              conclude: '보물찾기처럼 화면 밖 놀이도 차례와 규칙을 정하면 더 재미있어요. 이번 주말 가족과 해 보아요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '가족과 해 볼 보물찾기에서 보물을 숨길 곳 두 곳을 써요.' }] },
        notes: '거북이 판에는 칸 이름이 없다. 별(보물)·집·바위 칸의 뜻은 칠판과 활동지에 적어 준다.',
      }),
      C({
        id: 'digital.e34.offline-week.activity.family-poster', type: 'activity', title: '가족 놀이 초대장 꾸미기',
        method: '가족 놀이 초대장', tool: 'collage', minutes: 14,
        levels: { easy: '1번은 조각 3개 이상, 2번은 하트 1개 이상을 붙이고 점검 2칸에 표시한다.', base: '1번은 조각 5개 이상, 2번은 하트 2개와 별 1개 이상을 붙이고 점검 2칸에 표시한다.', challenge: '조각 5개 이상으로 꾸미고, 놀이 이름을 활동지에 써 붙였다는 점검 칸까지 3칸에 표시한다.' },
        activity: {
          title: '가족 놀이 초대장 꾸미기', tool: 'collage',
          teacher: '"이번 토요일에 화면을 끄고 가족과 함께 놀자고 초대장을 만들어 볼까요? 어떤 놀이에 초대할지 먼저 정해요." 조각을 붙이며 무엇을 나타냈는지 짝에게 말하게 한다. 하트는 함께하는 마음, 별은 놀이 시간을 뜻한다고 칠판에 적어 둔다. 초대장에 폰·태블릿 모양을 붙이려는 학생에게 "이 초대장은 화면을 끄고 노는 날이에요. 그 자리에 놀이 도구를 붙이면 어떨까요?"라고 묻는다. 초대장 글은 활동지에 쓰게 한다.',
          task: '색종이 조각으로 "이번 주 토요일, 화면 끄고 같이 놀아요" 가족 초대장을 꾸며요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '색종이 조각으로 초대장 바탕을 꾸며요.', toolOptions: PAPER, target: { pieces: { min: 5 } }, difficulty: 0.1,
              levels: { easy: { prompt: '색종이 조각 3개 이상으로 초대장을 꾸며요.', target: { pieces: { min: 3 } } } } },
            { prompt: '함께하는 마음(하트) 2개와 놀이 시간(별)을 붙여요.', toolOptions: PAPER, target: { has: [{ shape: 'heart', min: 2 }, { shape: 'star', min: 1 }] }, difficulty: 0.15,
              levels: { easy: { prompt: '함께하는 마음(하트)을 1개 이상 붙여요.', target: { has: [{ shape: 'heart', min: 1 }] } } } },
            { prompt: '완성한 초대장을 보고 점검 칸에 표시해요.', toolOptions: PAPER, target: { selfCheck: ['놀이 하나를 정했어요', '짝에게 소개했어요'], minPieces: 5 }, difficulty: 0.1,
              levels: { easy: { prompt: '조각 3개 이상 붙인 초대장을 보고 점검해요.', target: { selfCheck: ['놀이 하나를 정했어요', '짝에게 소개했어요'], minPieces: 3 } }, challenge: { prompt: '놀이 이름까지 쓰고 점검 칸에 표시해요.', target: { selfCheck: ['놀이 하나를 정했어요', '짝에게 소개했어요', '놀이 이름을 썼어요'], minPieces: 5 } } },
              conclude: '화면을 끄고 함께 노는 날을 정해 초대하면 가족 모두 화면 밖 즐거움을 누려요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '초대장에 쓸 글을 써요: 언제, 무슨 놀이를, 누구와 할까요?' }] },
        notes: '콜라주에는 글자 조각이 없다. 놀이 이름과 초대 글은 활동지에 쓰고 초대장 옆에 붙이게 한다. 가족 구성은 집마다 다르니 "가족 누구와든"이라고 말한다.',
      }),
      C({
        id: 'digital.e34.offline-week.wrap.check-list', type: 'wrap', title: '이번 주 화면 밖 실천 점검',
        method: '이번 주 실천 점검표', tool: 'kitchen', minutes: 6,
        levels: { easy: '다짐 칸 2개에 스스로 표시한다.', base: '다짐 칸 3개에 스스로 표시한다.', challenge: '다짐 칸 4개(못 했을 때 대신할 활동 정하기 포함)에 표시하고 활동지에 대신할 활동을 쓴다.' },
        wrap: {
          teacher: '"오늘 세운 계획에서 이번 주에 꼭 해 볼 것은 무엇인가요?" 다짐 칸을 함께 읽고 스스로 표시하게 한다. 이 점검은 맞고 틀림이 없고, 다음 주에 활동지 칸에 한 것을 표시해 본다고 알려 준다. 출구 2번에서 "할 게 없어요"를 고른 학생에게 오늘 만든 가지(몸·책·만들기·가족)를 다시 보게 한다.',
          exitTicket: [
            SELFLIST('이번 주 다짐에 스스로 표시해요.', '이번 주 화면 밖 다짐', [{ id: 'one', text: '하루 하나 화면 밖' }, { id: 'family', text: '가족과 한 번 놀기' }, { id: 'out', text: '밖에서 한 번 놀기' }, { id: 'swap', text: '못 하면 대신할 것' }]),
            { type: 'choice', prompt: '비가 와서 공원에 못 가요. 알맞은 생각은?', options: ['할 게 없으니 영상을 봐요', '집에서 할 놀이로 바꿔요', '계획을 다 버려요'], answer: 1, difficulty: 0.1, explain: '계획대로 못 하면 집 안에서 할 화면 밖 놀이로 바꿀 수 있어요.' },
            { type: 'short', prompt: '이번 주에 해 볼 화면 밖 활동 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '이번 주 화면 밖 계획',
          items: [
            { type: 'table', prompt: '계획한 활동을 쓰고, 다음 주에 한 날에 ○를 해요.', columns: ['계획한 활동', '했어요'], cells: [['', ''], ['', ''], ['', '']] },
            { type: 'short', prompt: '못 했을 때 대신할 화면 밖 활동을 써요.' },
          ],
          easy: { note: '몸·책·만들기·가족 가운데 하나를 골라요.', items: [{ type: 'draw', prompt: '이번 주에 할 화면 밖 활동을 그려요.' }] },
        },
        notes: '실천 점검표는 집에서 혼자 보고 가족과 이야기하는 데 쓴다. 한 날 수를 걷거나 비교·발표하지 않는다.',
      }),
      C({
        id: 'digital.e34.offline-week.wrap.share-pair', type: 'wrap', title: '짝에게 내 계획 소개하기',
        method: '짝에게 계획 소개', tool: 'wordcards', minutes: 6,
        levels: { easy: '"나는 ___요일에" 빈칸 1개를 채운다.', base: '요일과 활동 빈칸 2개를 채워 문장을 완성하고 짝에게 읽어 준다.', challenge: '요일·활동·함께할 사람 빈칸 3개를 채우고, 짝의 계획에 좋은 점 하나를 말한다(출구 3번).' },
        wrap: {
          teacher: '"오늘 세운 계획 가운데 하나를 문장으로 만들어 짝에게 소개해 볼까요?" 카드로 빈칸을 채운 뒤 완성한 문장을 짝에게 읽어 주게 한다. 화면 활동 카드(밤새 게임)를 넣으려는 학생에게 "이 문장은 화면 밖 계획을 소개하는 문장이에요. 어울리는 카드는 무엇일까요?"라고 묻는다. 짝의 계획을 들은 뒤에는 좋은 점 하나를 말해 주게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'wordcards', options: { mode: 'fill', slots: [{ id: 'r1', label: '나는 ___요일에' }, { id: 'r2', label: '___을 할 거야.' }], cards: ['토', '수', '줄넘기', '종이접기', '밤새 게임'] }, prompt: '빈칸에 카드를 넣어 내 계획 문장을 만들어요.', target: { fill: { r1: ['토', '수'], r2: ['줄넘기', '종이접기'] } }, difficulty: 0.15,
              levels: {
                easy: { prompt: '요일 빈칸 하나에 카드를 넣어요.', toolOptions: { slots: [{ id: 'r1', label: '나는 ___요일에 화면 밖 놀이를 할 거야.' }], cards: ['토', '수', '밤새'] }, target: { fill: { r1: ['토', '수'] } } },
                challenge: { prompt: '빈칸 셋에 카드를 넣어 계획 문장을 만들어요.', toolOptions: { slots: [{ id: 'r1', label: '나는 ___요일에' }, { id: 'r2', label: '___와' }, { id: 'r3', label: '___을 할 거야.' }], cards: ['토', '수', '가족', '동생', '줄넘기', '종이접기', '밤새 게임'] }, target: { fill: { r1: ['토', '수'], r2: ['가족', '동생'], r3: ['줄넘기', '종이접기'] } } },
              } },
            { type: 'choice', prompt: '짝의 계획을 들었어요. 알맞은 말은?', options: ['"그거 재미없어"', '"줄넘기 좋다, 나도 해 볼래"', '"그냥 게임해"'], answer: 1, difficulty: 0.1, explain: '짝의 계획에서 좋은 점을 찾아 말해 주어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '내 화면 밖 계획 소개',
          items: [
            { type: 'blank', prompt: '내 계획 문장을 완성해요.', text: '나는 ___요일에 ___와 ___을 할 거야.' },
            { type: 'short', prompt: '짝의 계획에서 좋은 점 하나를 써요.' },
          ],
        },
        notes: '낱말 카드는 소리를 내지 않는 fill 모드다. 요일·활동 칸은 여러 카드가 다 맞도록 열어 두었고, 화면 활동 카드만 틀린 카드다.',
      }),
    );
  }

  // ======================================================================================================
  // 4학년 · 개인정보 지키기와 대화방 예절 (research-mandatory §2 초: 개인정보 지키기, 예절)
  // ======================================================================================================
  {
    const C = T('info-manners', 4);
    const PHOTO = {
      title: '운동회 사진(가상, 칸으로 나눈 그림)', grid: [6, 4],
      regions: [
        { name: '하늘', cells: [[0, 0], [1, 0], [2, 0], [3, 0]] }, { name: '학교 이름 현수막', cells: [[4, 0], [5, 0]] },
        { name: '운동장 나무', cells: [[0, 1], [0, 2], [0, 3]] }, { name: '친구 얼굴', cells: [[1, 1], [2, 1]] },
        { name: '체육복 이름표', cells: [[1, 2], [2, 2]] }, { name: '공과 줄', cells: [[3, 1], [3, 2], [4, 1], [4, 2], [5, 1], [5, 2]] },
        { name: '집 주소 쓴 가방', cells: [[1, 3], [2, 3]] }, { name: '운동장 모래', cells: [[3, 3], [4, 3], [5, 3]] },
      ],
    };
    const CHANT = ['e', 'e', 'q', 'q', 'qr', 'e', 'e', 'q', 'q', 'qr'];
    const SB = (prompt, slots, base, easyN, more, d, extra) => {
      const sortOf = (cards) => Object.fromEntries(slots.map((s) => [s, cards.filter((c) => c.at === s).map((c) => c.id)]));
      const plain = (cards) => cards.map((c) => ({ id: c.id, text: c.text, why: c.why }));
      return {
        prompt, toolOptions: { slots, cards: plain(base) }, target: { sort: sortOf(base) }, difficulty: d,
        levels: {
          easy: { prompt: `${strip(prompt)}(${easyN}장).`, toolOptions: { limit: easyN }, target: { sort: sortOf(base.slice(0, easyN)) } },
          challenge: { prompt: `${strip(prompt)}(${base.length + more.length}장).`, toolOptions: { more: plain(more) }, target: { sort: sortOf(base.concat(more)) } },
        },
        ...extra,
      };
    };
    M.push(
      C({
        id: 'digital.e34.info-manners.intro.photo-spot', type: 'intro', title: '사진 속 숨은 정보 찾기',
        method: '사진 속 숨은 정보 찾기', tool: 'map', minutes: 6,
        levels: { easy: '핀이 친구 얼굴·학교 이름 현수막 두 곳에 꽂히는 것을 보고 무엇이 보이는지 말한다.', base: '핀이 친구 얼굴·현수막·주소 쓴 가방 세 곳에 꽂히는 것을 보고 무엇을 알 수 있는지 말한다.', challenge: '세 곳을 본 뒤 사진을 올리기 전에 가리면 되는 곳을 골라 짝에게 말한다.' },
        intro: {
          teacher: '"보라가 운동회 사진을 반 대화방에 올리려고 해요. 이 사진에서 모르는 사람이 알 수 있는 것은 무엇일까요?" 사진을 칸으로 나눈 그림이라고 먼저 말해 주고, 시연 단추로 친구 얼굴·학교 이름 현수막·집 주소를 쓴 가방에 핀이 차례로 꽂히는 것을 보인다. 곳마다 "이것을 보면 무엇을 알 수 있을까요?"라고 묻는다(기다릴 반응: "어느 학교인지요", "어디 사는지요"). "친구한테만 보내면 아무도 못 봐요"라는 말이 나오면 "받은 친구가 다른 사람에게 보내면 어떻게 될까요?"라고 되묻는다.',
          student: '운동회 사진 그림에 핀이 꽂히는 곳을 보고, 그곳에서 어떤 정보를 알 수 있는지 짝에게 말해 보아요.',
          demo: { tool: 'map', options: PHOTO, sequence: [{ pin: [1, 1] }, { pin: [4, 0] }, { pin: [1, 3] }] },
          art: { draw: 'a paper cut photo of a school sports day: children in gym clothes, a school name banner hanging at the top corner, a backpack with a written address tag on the ground, a magnifying glass over the banner', banner: '사진 속에 무엇이 보일까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '사진은 가상의 그림이다. 학생의 실제 사진·학교·주소를 화면에 띄우거나 말하게 하지 않는다.',
      }),
      C({
        id: 'digital.e34.info-manners.intro.late-chat', type: 'intro', title: '밤늦게 울리는 단체 대화방',
        method: '밤늦게 울리는 대화방', tool: 'story', minutes: 6,
        levels: { easy: '처음·끝 장면 2장(밤 10시 글·다음 날 졸린 친구)을 함께 놓아 본다(가운데 장면은 교사가 말로 읽는다).', base: '장면 3장이 차례로 놓이는 것을 보고 친구가 잠을 못 잔 까닭을 말한다.', challenge: '3장을 본 뒤 글을 보낸 친구가 다르게 할 방법을 골라 짝에게 말한다.' },
        intro: {
          teacher: '"밤 10시, 하윤이가 반 대화방에 재미있는 글을 올렸어요. 그 뒤에 무슨 일이 생겼을까요?" 시연 단추로 장면 3장이 차례로 놓이는 것을 보이고 소리 내어 읽는다. "재미있는 글이니까 괜찮아요"라는 말이 나오면 "그 시각에 자려고 누운 친구의 폰은 어떻게 되었을까요?"라고 되물어 보낸 사람은 한 번이어도 받는 사람은 여럿이라는 것을 짚는다. 하윤이를 탓하는 이야기가 아니라 다음에 어떻게 하면 좋을지 생각한다고 말한다.',
          student: '밤늦은 대화방 장면 3장을 차례로 보고, 친구가 잠을 못 잔 까닭을 짝에게 말해 보아요.',
          demo: { tool: 'story', options: { mode: 'order', slots: ['처음', '다음', '끝'], cards: [{ id: 'tired', text: '아침에 꾸벅꾸벅', motif: 'sun' }, { id: 'post', text: '밤 10시 단체방 글', motif: 'moon' }, { id: 'ding', text: '띵띵띵 잠을 깸', motif: 'star' }] }, sequence: [{ order: ['post', 'ding', 'tired'] }] },
          art: { draw: 'three paper story panels: a child typing on a phone at night under a paper moon, another child in bed woken by a buzzing phone, the same child yawning at a school desk in the morning', banner: '밤 10시에 띵!', extra: [{ motif: 'moon', x: 300, y: 96 }] },
        },
        notes: '학생에게 밤에 대화방을 하는지, 몇 시까지 하는지 묻지 않는다. 장면 속 가상 친구의 일로만 이야기한다.',
      }),
      C({
        id: 'digital.e34.info-manners.activity.share-or-not', type: 'activity', title: '갈림길: 이 사진 올려도 될까',
        method: '올려도 될까 갈림길', tool: 'dilemma', minutes: 13,
        levels: { easy: '갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '갈림 2번, 보기 3개씩 고르며 결과를 따라간다.', challenge: '바른 길을 끝까지 간 뒤 되돌아가 다른 길도 끝까지 가 보고 두 결과를 견준다.' },
        activity: {
          title: '갈림길: 이 사진 올려도 될까', tool: 'dilemma',
          teacher: '"이 사진을 그대로 올리면 누가 무엇을 알게 될까요?" 보기를 고를 때마다 결과를 소리 내어 읽고, 사진 속 친구와 나에게 어떤 일이 생기는지 짝과 말하게 한다. "친구니까 안 물어봐도 돼요"라는 학생에게 "내 얼굴이 나온 사진을 친구가 묻지 않고 올리면 내 마음은 어떨까요?"라고 묻는다. "친구에게만 보내면 아무도 못 봐요"라는 학생에게 "받은 친구가 저장하거나 다른 방에 보내면요?"라고 묻는다. 도전 단계에서는 다른 길의 결과와 견주어 어느 쪽이 모두에게 편했는지 말하게 한다.',
          task: '장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('운동회 사진에 친구 얼굴과 학교 이름이 보여요.', {
              text: '운동회 사진에 친구 얼굴과 학교 이름 현수막이 크게 나왔어요. 반 대화방에 올리고 싶어요.', motif: 'sun',
              choices: [
                { id: 'post', text: '그대로 올린다', result: '사진이 다른 방에도 퍼졌어요. 친구가 속상해했어요.', impact: [{ who: '사진 속 친구', text: '허락 없이 퍼졌어요', tone: -1 }] },
                { id: 'ask', text: '친구에게 먼저 물어본다', result: '친구가 "얼굴은 가려 줘"라고 했어요.', ending: '물어보고 올려서 서로 기분 좋았어요.', next: {
                  text: '친구가 얼굴은 가려 달래요. 현수막의 학교 이름도 보여요.', choices: [
                    { id: 'cover', text: '얼굴과 학교 이름을 가린다', result: '가린 사진을 올리니 모두 즐겁게 봤어요.', impact: [{ who: '사진 속 친구', text: '안심했어요', tone: 1 }], ending: '물어보고 가려서 올렸어요.' },
                    { id: 'face', text: '얼굴만 살짝 흐리게 한다', result: '학교 이름이 그대로 보였어요.', impact: [{ who: '우리 반', text: '어느 학교인지 드러나요', tone: -1 }] },
                    { id: 'anyway', text: '"괜찮아" 하고 올린다', result: '친구가 부탁을 들어주지 않았다며 서운해했어요.', impact: [{ who: '사진 속 친구', text: '믿음이 줄었어요', tone: -1 }] },
                  ] } },
                { id: 'dm', text: '한 친구에게만 몰래 보낸다', result: '받은 친구가 그 사진을 또 다른 친구에게 보냈어요.', impact: [{ who: '사진 속 친구', text: '모르게 퍼졌어요', tone: -1 }] },
              ] }, [['ask', 'cover']], 0.2),
            DIL('새 운동화 사진에 집 주소가 보여요.', {
              text: '새 운동화를 자랑하고 싶어 찍었는데, 뒤에 택배 상자 주소가 보여요.', motif: 'house',
              choices: [
                { id: 'brag', text: '빨리 올린다', result: '모르는 사람도 볼 수 있는 곳에 주소가 퍼졌어요.', impact: [{ who: '우리 가족', text: '사는 곳이 드러나요', tone: -1 }] },
                { id: 'check', text: '올리기 전에 사진을 살펴본다', result: '사진 뒤쪽에 주소 글자가 보였어요.', ending: '올리기 전에 살펴서 주소를 지켰어요.', next: {
                  text: '주소가 보이는 걸 알았어요. 어떻게 할까요?', choices: [
                    { id: 'retake', text: '상자를 치우고 다시 찍는다', result: '운동화만 나온 사진을 올렸어요.', impact: [{ who: '우리 가족', text: '안전해요', tone: 1 }], ending: '주소가 안 보이게 다시 찍어 올렸어요.' },
                    { id: 'small', text: '작게 보이니 그냥 올린다', result: '사진을 크게 키우니 주소가 다 읽혔어요.', impact: [{ who: '우리 가족', text: '사는 곳이 드러나요', tone: -1 }] },
                    { id: 'caption', text: '"주소 보지 마" 글을 단다', result: '오히려 사람들이 주소를 더 들여다봤어요.', impact: [{ who: '우리 가족', text: '걱정돼요', tone: -1 }] },
                  ] } },
                { id: 'filter', text: '예쁘게 꾸며서 올린다', result: '꾸미기만 하고 주소는 그대로 보였어요.', impact: [{ who: '우리 가족', text: '사는 곳이 드러나요', tone: -1 }] },
              ] }, [['check', 'retake']], 0.25),
            DIL('친구의 웃긴 표정 사진을 찍었어요.', {
              text: '쉬는 시간에 친구가 하품하는 웃긴 표정을 찍었어요.', motif: 'star',
              choices: [
                { id: 'share', text: '반 대화방에 올린다', result: '친구들이 웃으며 별명을 붙였어요. 친구는 울상이 되었어요.', impact: [{ who: '사진 속 친구', text: '부끄럽고 속상해요', tone: -1 }] },
                { id: 'show', text: '친구에게 먼저 보여 준다', result: '친구가 "이건 지워 줘"라고 했어요.', ending: '친구 마음을 먼저 물었어요.', next: {
                  text: '친구가 지워 달라고 해요. 그런데 너무 웃긴 사진이에요.', choices: [
                    { id: 'delete', text: '바로 지운다', result: '친구가 고맙다며 같이 웃는 사진을 다시 찍자고 했어요.', impact: [{ who: '친구와 나', text: '사이가 좋아요', tone: 1 }], ending: '부탁대로 지우고 함께 새 사진을 찍었어요.' },
                    { id: 'keep', text: '나만 보려고 둔다', result: '나중에 폰을 빌린 동생이 그 사진을 보냈어요.', impact: [{ who: '사진 속 친구', text: '퍼질까 걱정해요', tone: -1 }] },
                    { id: 'later', text: '나중에 올리기로 한다', result: '친구가 부탁을 들어주지 않을까 봐 불안해했어요.', impact: [{ who: '사진 속 친구', text: '마음이 불편해요', tone: -1 }] },
                  ] } },
                { id: 'sticker', text: '꾸밈 그림을 붙여 올린다', result: '꾸며도 누구인지 다 알아봤어요.', impact: [{ who: '사진 속 친구', text: '놀림을 받았어요', tone: -1 }] },
              ] }, [['show', 'delete']], 0.3,
              { conclude: '사진을 올리기 전에는 사진 속 정보를 살피고, 나온 사람에게 먼저 물어봐요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '친구 얼굴이 나온 사진을 올리기 전에 할 일은?', options: ['빨리 올려요', '친구에게 먼저 물어요', '몰래 한 명에게 보내요'], answer: '친구에게 먼저 물어요' }] },
        notes: '사진 장면은 가상의 것이다. 학생에게 자기 사진이 퍼진 일이 있었는지 묻지 않는다.',
      }),
      C({
        id: 'digital.e34.info-manners.activity.info-sort', type: 'activity', title: '알려도 되는 것·지킬 것',
        method: '알려도 되는 것·지킬 것 나누기', tool: 'sortboard', minutes: 14,
        levels: { easy: '카드 4장을 두 바구니에 나누고, 틀리면 까닭을 말하며 되돌아오고 바구니마다 든 장 수가 보인다.', base: '카드 6장을 두 바구니에 나눈다.', challenge: '카드 2장이 더해진 8장을 나누고, 3번에서 애매한 카드(생일)를 짝과 토의한다.' },
        activity: {
          title: '알려도 되는 것·지킬 것', tool: 'sortboard',
          teacher: '"이 정보를 모르는 사람이 알면 무엇을 할 수 있을까요?" 카드를 넣을 때마다 그 까닭을 한 문장으로 말하게 한다. 전화번호를 \'알려도 돼요\'에 넣는 학생에게 "모르는 사람이 이 번호를 알면 어떤 일이 생길 수 있을까요?"라고 묻는다. 좋아하는 색을 \'지켜요\'에 넣는 학생에게 "좋아하는 색을 알면 나를 찾아올 수 있을까요?"라고 묻는다. 3번 생일 토의는 정답을 정하지 않고, 누구에게 알리느냐에 따라 달라진다는 점을 짚는다.',
          task: '정보 카드를 알려도 되는 것과 지킬 것 바구니에 나누고, 고른 이유를 짝에게 말해요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SB('나에 대한 정보 카드를 나누어요.', ['알려도 돼요', '지켜요'], [
              { id: 'food', text: '좋아하는 음식', at: '알려도 돼요' }, { id: 'addr', text: '우리 집 주소', at: '지켜요', why: '주소를 알면 모르는 사람이 집을 찾아올 수 있어요.' },
              { id: 'color', text: '좋아하는 색', at: '알려도 돼요' }, { id: 'pw', text: '비밀번호', at: '지켜요', why: '비밀번호는 보호자 말고는 알려 주지 않아요.' },
              { id: 'hobby', text: '좋아하는 운동', at: '알려도 돼요' }, { id: 'phone', text: '전화번호', at: '지켜요', why: '전화번호는 모르는 사람에게 알려 주지 않아요.' },
            ], 4, [{ id: 'pet', text: '반려동물 종류', at: '알려도 돼요' }, { id: 'school', text: '학교 이름과 반', at: '지켜요', why: '학교와 반을 알면 나를 찾을 수 있어요.' }], 0.15),
            SB('사진 속에 보이는 것을 나누어요.', ['올려도 돼요', '가려요'], [
              { id: 'sky', text: '파란 하늘', at: '올려도 돼요' }, { id: 'tag', text: '이름표 글자', at: '가려요', why: '이름표 글자로 누구인지 알 수 있어요.' },
              { id: 'flower', text: '화단의 꽃', at: '올려도 돼요' }, { id: 'door', text: '현관 동 호수', at: '가려요', why: '동 호수로 사는 곳을 알 수 있어요.' },
              { id: 'draw', text: '내가 그린 그림', at: '올려도 돼요' }, { id: 'banner', text: '학교 이름 글자', at: '가려요', why: '학교 이름으로 어디 다니는지 알 수 있어요.' },
            ], 4, [{ id: 'cloud', text: '구름 모양', at: '올려도 돼요' }, { id: 'car', text: '자동차 번호판', at: '가려요', why: '번호판으로 우리 가족을 알 수 있어요.' }], 0.2),
            { prompt: '생일은 어느 바구니일까요? 짝과 까닭을 나누어요.', free: true, talk: true,
              conclude: '나를 찾을 수 있게 하는 정보는 지키고, 사진에 보이면 가려요. 헷갈리면 보호자께 물어요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '알려도 되면 ○, 지켜야 하면 ×를 써요.', columns: ['정보', '○ / ×'], cells: [['좋아하는 음식', ''], ['우리 집 주소', ''], ['비밀번호', ''], ['좋아하는 색', '']], answer: '○, ×, ×, ○' }] },
        notes: '정보 카드는 모두 이름만 적은 것이다. 학생에게 실제 주소·전화번호·비밀번호를 말하거나 적게 하지 않는다.',
      }),
      C({
        id: 'digital.e34.info-manners.activity.chat-clock', type: 'activity', title: '대화방 쉬는 시간 시계',
        method: '대화방 쉬는 시간 정하기', tool: 'clock', minutes: 13,
        levels: { easy: '정각만 움직이는 시계로 9시·7시·10시에 바늘을 맞춘다.', base: '30분 단위로 움직이는 시계로 9시 30분·7시 30분·10시 30분에 맞춘다(3번은 주말 시각).', challenge: '10분 단위로 움직이는 시계로 같은 세 시각을 맞추고, 주말 시각이 평일과 다른 까닭을 짝에게 말한다.' },
        activity: {
          title: '대화방 쉬는 시간 시계', tool: 'clock',
          teacher: '"가상의 우리 반 대화방 약속을 정해 볼까요? 밤 몇 시부터 글을 보내지 않으면 좋을까요?" 바늘을 맞출 때마다 "○시 ○분부터 ○시 ○분까지는 대화방이 쉬어요"라고 소리 내어 말하게 한다. 9시 30분은 연습용 약속 값이고 실제 약속은 반에서 함께 정한다고 알려 준다. 짧은바늘을 9에 똑바로 두는 학생에게 "9시 30분이면 짧은바늘은 9와 10 가운데에 있어요"라고 짚는다. "급한 일은 밤에도 보내야 해요"라는 학생에게 "급한 일은 대화방 말고 누구에게 알리면 될까요?"라고 묻는다.',
          task: '반 대화방이 쉬는 시각을 시계 바늘로 맞추어요. 3번은 주말 시각이에요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '평일 밤, 대화방이 쉬기 시작하는 9시 30분을 맞춰요.', toolOptions: { minuteStep: 30 }, target: { h: 9, m: 30 }, difficulty: 0.15,
              levels: { easy: { prompt: '평일 밤, 대화방이 쉬기 시작하는 9시를 맞춰요.', toolOptions: { hourOnly: true, minuteStep: 60 }, target: { h: 9, m: 0 } }, challenge: { toolOptions: { minuteStep: 10 }, target: { h: 9, m: 30 } } } },
            { prompt: '아침, 대화방에 다시 글을 보내도 되는 7시 30분을 맞춰요.', toolOptions: { minuteStep: 30 }, target: { h: 7, m: 30 }, difficulty: 0.2,
              levels: { easy: { prompt: '아침, 대화방에 다시 글을 보내도 되는 7시를 맞춰요.', toolOptions: { hourOnly: true, minuteStep: 60 }, target: { h: 7, m: 0 } }, challenge: { toolOptions: { minuteStep: 10 }, target: { h: 7, m: 30 } } } },
            { prompt: '주말 밤, 대화방이 쉬기 시작하는 10시 30분을 맞춰요.', toolOptions: { minuteStep: 30 }, target: { h: 10, m: 30 }, difficulty: 0.25,
              levels: { easy: { prompt: '주말 밤, 대화방이 쉬기 시작하는 10시를 맞춰요.', toolOptions: { hourOnly: true, minuteStep: 60 }, target: { h: 10, m: 0 } }, challenge: { toolOptions: { minuteStep: 10 }, target: { h: 10, m: 30 } } },
              conclude: '대화방에도 쉬는 시간이 있어요. 밤에는 보내지 않고, 아침 약속 시각부터 보내요.' },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '가상의 우리 반 약속을 써요.', text: '평일 밤 ___시 ___분부터 아침 ___시 ___분까지는 대화방이 쉬어요.', answer: '9, 30, 7, 30' }] },
        notes: '9시 30분·7시 30분·10시 30분은 연습용 우리 반 약속 값이다. 실제 대화방 약속은 학급에서 함께 정하고, 학생에게 밤에 몇 시까지 대화하는지 묻지 않는다.',
      }),
      C({
        id: 'digital.e34.info-manners.activity.pw-pattern', type: 'activity', title: '남이 맞히기 쉬운 비밀번호',
        method: '비밀번호는 나만', tool: 'pattern', minutes: 14,
        levels: { easy: '숫자 줄을 보고 규칙을 고르는데 보기가 2개다.', base: '숫자 줄을 보고 규칙을 보기 3개 가운데 고른다.', challenge: '여섯 자리로 길어진 숫자 줄을 보고 규칙을 보기 4개 가운데 고른다.' },
        activity: {
          title: '남이 맞히기 쉬운 비밀번호', tool: 'pattern',
          teacher: '"이 숫자 줄에는 어떤 규칙이 있나요? 규칙이 쉬우면 다른 사람이 맞히기 쉬울까요, 어려울까요?" 줄마다 규칙을 고른 뒤 "이 줄을 비밀번호로 쓰면 남이 맞히기 쉬울까?"를 짝과 말하게 한다. 화면의 숫자 줄은 연습용이고 실제 비밀번호는 절대 말하거나 쓰지 않는다고 먼저 말한다. "생일로 하면 안 잊어버려요"라는 학생에게 "생일을 아는 친구는 몇 명일까요? 그 친구들도 맞힐 수 있을까요?"라고 묻는다. 비밀번호는 보호자 말고는 친한 친구에게도 알려 주지 않는다는 것을 짚는다.',
          task: '연습용 숫자 줄을 보고 규칙을 골라, 남이 맞히기 쉬운 줄인지 짝과 이야기해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '이 숫자 줄의 규칙을 골라요.', toolOptions: { mode: 'rule', seq: [1, 2, 3, 4], question: '1, 2, 3, 4 줄의 규칙은?', choices: ['1씩 커져요', '같은 수가 되풀이돼요', '규칙이 안 보여요'] }, target: { pick: 0 }, difficulty: 0.15,
              levels: {
                easy: { prompt: '이 숫자 줄의 규칙을 골라요(보기 2개).', toolOptions: { choices: ['1씩 커져요', '규칙이 안 보여요'] }, target: { pick: 0 } },
                challenge: { prompt: '여섯 자리 숫자 줄의 규칙을 골라요.', toolOptions: { seq: [1, 2, 3, 4, 5, 6], question: '1, 2, 3, 4, 5, 6 줄의 규칙은?', choices: ['2씩 커져요', '1씩 커져요', '같은 수가 되풀이돼요', '규칙이 안 보여요'] }, target: { pick: 1 } },
              } },
            { prompt: '이 숫자 줄의 규칙을 골라요.', toolOptions: { mode: 'rule', seq: [1, 1, 1, 1], question: '1, 1, 1, 1 줄의 규칙은?', choices: ['1씩 커져요', '같은 수가 되풀이돼요', '규칙이 안 보여요'] }, target: { pick: 1 }, difficulty: 0.2,
              levels: {
                easy: { prompt: '이 숫자 줄의 규칙을 골라요(보기 2개).', toolOptions: { choices: ['같은 수가 되풀이돼요', '규칙이 안 보여요'] }, target: { pick: 0 } },
                challenge: { prompt: '여섯 자리 숫자 줄의 규칙을 골라요.', toolOptions: { seq: [7, 7, 7, 7, 7, 7], question: '7, 7, 7, 7, 7, 7 줄의 규칙은?', choices: ['2씩 커져요', '1씩 커져요', '같은 수가 되풀이돼요', '규칙이 안 보여요'] }, target: { pick: 2 } },
              } },
            { prompt: '남이 맞히기 어려운 줄은 어떤 규칙일까요?', toolOptions: { mode: 'rule', seq: [8, 3, 6, 1], question: '8, 3, 6, 1 줄의 규칙은?', choices: ['1씩 커져요', '같은 수가 되풀이돼요', '규칙이 안 보여요'] }, target: { pick: 2 }, difficulty: 0.25,
              levels: {
                easy: { prompt: '이 숫자 줄의 규칙을 골라요(보기 2개).', toolOptions: { choices: ['1씩 커져요', '규칙이 안 보여요'] }, target: { pick: 1 } },
                challenge: { prompt: '여섯 자리 숫자 줄의 규칙을 골라요.', toolOptions: { seq: [8, 3, 6, 1, 9, 4], question: '8, 3, 6, 1, 9, 4 줄의 규칙은?', choices: ['2씩 커져요', '1씩 커져요', '같은 수가 되풀이돼요', '규칙이 안 보여요'] }, target: { pick: 3 } },
              },
              conclude: '규칙이 쉬운 줄은 남이 맞히기 쉬워요. 비밀번호는 쉬운 규칙을 피하고, 보호자 말고는 알려 주지 않아요.' },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '남이 맞히기 가장 쉬운 숫자 줄은?', options: ['1111', '8361', '5927'], answer: '1111' }] },
        notes: '화면의 숫자 줄은 연습용이다. 학생에게 실제 비밀번호를 말하거나 쓰게 하지 않고, 활동지에도 실제 비밀번호를 적지 않게 한다. 비밀번호 만들기는 집에서 보호자와 함께 한다.',
      }),
      C({
        id: 'digital.e34.info-manners.wrap.manner-chant', type: 'wrap', title: '"밤에는 쉬어요" 예절 구호',
        method: '대화방 예절 구호', tool: 'keyboard', minutes: 6,
        levels: { easy: '"밤에는 쉬어요" 한 줄(두 마디) 리듬 블록을 따라 놓고 외친다.', base: '"밤에는 쉬어요, 사진은 물어봐요" 두 줄(네 마디)을 따라 놓고 외친다.', challenge: '두 줄을 외친 뒤 같은 리듬에 맞는 구호 한 줄을 더 지어 활동지에 쓴다(교사 진행).' },
        wrap: {
          teacher: '"오늘 배운 대화방 예절을 구호로 외쳐 볼게요. 밤-에-는 쉬-어요(쉼), 사-진-은 물-어봐요(쉼)." 손뼉으로 한 번 들려준 뒤 리듬 블록을 놓게 한다. 블록을 다 놓으면 반 전체가 박에 맞춰 두 번 외친다. 출구 2번에서 "친구 사진은 그냥 올려요"를 고른 학생에게 오늘 갈림길에서 친구가 한 말("얼굴은 가려 줘")을 떠올리게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 4, blocks: ['q', 'e', 'qr'], pattern: CHANT.concat(CHANT) }, prompt: '예절 구호 리듬을 듣고 블록으로 따라 놓아요.', target: { rhythm: CHANT.concat(CHANT) }, difficulty: 0.2,
              levels: { easy: { toolOptions: { measures: 2, pattern: CHANT }, target: { rhythm: CHANT } } } },
            { type: 'choice', prompt: '친구 얼굴이 나온 사진을 올리고 싶을 때는?', options: ['그냥 올려요', '먼저 물어봐요', '몰래 보내요'], answer: 1, difficulty: 0.1, explain: '사진 속 친구에게 먼저 물어봐요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '대화방 예절 구호',
          items: [
            { type: 'blank', prompt: '구호의 빈칸을 채워요.', text: '밤에는 ___, 사진은 ___.', answer: '쉬어요, 물어봐요' },
            { type: 'short', prompt: '같은 리듬에 맞는 대화방 예절 구호를 하나 더 지어 써요.' },
          ],
        },
      }),
      C({
        id: 'digital.e34.info-manners.wrap.self-check', type: 'wrap', title: '나의 정보 지키기 점검',
        method: '나의 정보 지키기 점검', tool: 'kitchen', minutes: 6,
        levels: { easy: '점검 칸 2개(사진 올리기 전 묻기·주소 안 알리기)에 스스로 표시한다.', base: '점검 칸 3개(밤에 안 보내기 포함)에 스스로 표시한다.', challenge: '점검 칸 4개에 표시하고, 가장 어려운 칸에 활동지에서 별을 그려 내 방법을 쓴다.' },
        wrap: {
          teacher: '"오늘 배운 것 가운데 나는 무엇을 지킬 수 있을까요?" 점검 칸을 하나씩 소리 내어 읽고 스스로 표시하게 한다. 이 점검은 맞고 틀림이 없고 지키겠다는 다짐이라고 알려 준다. "다 못 지킬 것 같아요"라는 학생에게 "그중에 하나만 고른다면 무엇이 가장 쉬울까요?"라고 묻는다. 출구 2번에서 "친한 친구는 괜찮아요"를 고른 학생에게 "친한 친구의 폰을 다른 사람이 볼 수도 있을까요?"라고 되묻는다.',
          exitTicket: [
            SELFLIST('지킬 다짐에 스스로 표시해요.', '나의 정보 지키기', [{ id: 'ask', text: '사진은 먼저 묻기' }, { id: 'addr', text: '주소 안 알리기' }, { id: 'night', text: '밤에는 안 보내기' }, { id: 'pw', text: '비밀번호는 나만' }]),
            { type: 'choice', prompt: '친한 친구가 비밀번호를 알려 달래요.', options: ['친한 친구는 괜찮아요', '알려 주지 않아요', '반만 알려 줘요'], answer: 1, difficulty: 0.1, explain: '비밀번호는 친한 친구에게도 알려 주지 않아요.' },
            { type: 'short', prompt: '가장 지키기 어려운 다짐과 내 방법을 써요.' },
          ],
        },
        worksheet: {
          title: '나의 정보 지키기',
          items: [
            { type: 'check', prompt: '지킬 다짐에 표시해요.', options: ['사진은 먼저 묻기', '주소 안 알리기', '밤에는 안 보내기', '비밀번호는 나만'] },
            { type: 'short', prompt: '가장 어려운 다짐에 별을 그리고, 지킬 방법을 써요.' },
          ],
          easy: { note: '두 가지만 골라도 괜찮아요.', items: [{ type: 'draw', prompt: '사진을 올리기 전에 친구에게 묻는 모습을 그려요.' }] },
        },
      }),
    );
  }

  PaperLessons.registerModules(M);
})();
