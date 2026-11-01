/* 창체 안전교육 교통안전 — 초1-2 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/safety-a.json 의 saf-traffic 초1-2.
 * 근거: 「학교안전교육 실시 기준 등에 관한 고시」(교육부고시 제2023-33호) 별표 2 초등학교 교통안전
 *   "교통 표지판 등 도로 교통 법규 알기" · "안전한 통학로 알기" · "교통수단(자전거, 대중교통 등)의 안전한 이용법 알기" + 7대 표준안 교통 소분류(보행자·대중교통·자동차).
 * 초1-2 기준: 소리로 읽어 주는 짧은 문항, 카드 8자 안팎, 좋아요/안돼요 고르기·따라 하기·역할놀이. 장면·인물은 직접 지은 것이다(가명).
 * 주제 10개(1학년 5 · 2학년 5). 수치(초·m·%)·법 조항은 쓰지 않는다(근거 파일에 교통안전 초1-2 수치가 없다).
 * 타이머는 '되풀이 횟수(번)'로만 맞추고 신호 시간·걷는 시간 길이를 권장하지 않는다(운동·쉬기 칸 = 우리 반 역할놀이 약속).
 * 그림그래프 수는 모두 수업용으로 지은 가상의 우리 반 자료이고 화면 제목에 '가상'을 적는다.
 *
 * 사람 확인: 근거 파일(research-*.md)에 고시 항목 제목만 있어 아래 일반 교통안전 수칙은 공식 안내처에서 확인해야 한다.
 *   (확인처: 도로교통공단 어린이 교통안전 교육 자료 · 경찰청 · 한국교통안전공단 · 국민재난안전포털 교통안전 행동요령)
 *   - signal.*: 보행 신호는 초록 → 초록 깜박임 → 빨강 차례로 바뀐다 / 깜박이면 새로 건너기 시작하지 않는다(건너는 중이면 마저 건넌다는 교사 말 포함) / 초록불에도 좌우를 살핀다 [도로교통공단]
 *   - crossing.*: 멈추기 → 좌우 살피기 → 손 들기 → 차가 선 것을 보고 걷기 차례 / 손을 들면 운전자가 더 잘 본다 / 건너다 떨어뜨린 물건은 다 건넌 뒤 어른께 부탁한다 [도로교통공단]
 *   - sidewalk.*: 보도에서 차도에서 먼 안쪽으로 걷는다 / 어른이 차도 쪽, 어린이는 안쪽에서 손잡고 걷는다 / 보도가 좁으면 한 줄로 걷는다 / 보도가 없는 길은 길 가장자리로 어른과 함께 걷는다 / 연석 위를 걷지 않는다 [도로교통공단]
 *   - schoolroad.*: 어린이 보호구역에서는 차가 천천히 다니도록 정해져 있다(속도 수치는 쓰지 않음) / 골목 끝·주차장 입구·건널목이 등굣길 조심할 곳 / 조금 멀어도 보도·신호등 있는 길이 안전하다 [도로교통공단·경찰청]
 *   - ride.*: 통학버스는 줄 서서 기다리고 완전히 선 뒤 탄다 / 안전띠는 어깨·가슴을 지나고 허리띠는 배가 아닌 골반(허벅지 위쪽)으로, 목에 걸리지 않게 / 어린이는 뒷자리, 앞자리 어른 무릎에 앉지 않는다 / 내릴 때는 차가 완전히 선 뒤 인도 쪽 문으로 / 내린 뒤 버스 앞뒤로 건너지 않고 버스가 떠난 뒤 횡단보도로 / 가까운 길도 안전띠를 맨다 [도로교통공단·한국교통안전공단]
 *   - signs.*: 어린이 보호 표지(빨간 테두리 세모 안 두 아이)·횡단보도 표지·자전거 길 표지(파란 동그라미)의 모양·색·뜻 — 화면 글 "세모 속 두 아이·건너는 사람·동그라미 자전거"와 교사 메모 / 자전거 길에서 걷는 사람은 비켜 걷는다 [도로교통공단 교통안전표지 안내]
 *   - popout.*: 주차된 차 사이·골목 끝에서는 운전자가 어린이를 보기 어렵다 / 멈추고 고개만 내밀어 살핀 뒤 걷는다 / 차 사이로 간 공은 어른께 꺼내 달라고 한다 [도로교통공단]
 *   - visible.*: 비·어두운 날 밝은 옷·투명 우산·반사띠로 잘 보이게 / 우산은 눈 위로 들어 앞이 보이게, 바람이 불면 두 손으로 잡는다 / 빗길에서는 사람도 차도 미끄러워 차가 바로 못 선다 / 저녁엔 가로등 있는 밝은 길로 [도로교통공단·국민재난안전포털]
 *   - play.*: 찻길·주차장·골목에서 놀지 않는다 / 주차된 차도 갑자기 움직이고 뒤로 올 때 운전자가 뒤의 아이를 못 볼 수 있다 / 어린이 킥보드·인라인은 차 없는 놀이터·운동장에서 안전모·무릎·팔꿈치 보호대를 하고 탄다 [도로교통공단·한국소비자원]
 *   - transit.*: 내리는 사람 먼저 / 승강장 노란 안전선 뒤에서 기다린다 / 닫히는 문에 손·가방을 넣지 않고 다음 차를 탄다 / 열차와 승강장 사이 발밑 틈 조심 / 서서 갈 때 손잡이·기둥을 잡고 발을 살짝 벌린다, 문에 기대지 않는다 / 에스컬레이터는 손잡이 잡고 노란 선 안에, 걷거나 뛰지 않는다 / 헤어지면 내린 곳에서 기다리고 역무원·기사님께 알린다 [한국교통안전공단·국민재난안전포털]
 *   그 밖: 구호·몸짓(멈춰·살펴·건너, 타면 딸깍, 표지판 몸짓)과 타이머 초 값은 우리 반 놀이 약속이며 실제 신호 시간이 아니다. 그림그래프 수는 모두 가상이다.
 */
(function () {
  const MOD = (topic, grades) => (o) => Object.assign({ schema: 'edu-module.v1', domain: 'saf-traffic', band: '초1-2', topic, grades }, o);
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  const cut = (p) => p.replace(/\.$/, '');
  const C = (id, text, motif) => (motif ? { id, text, motif } : { id, text });

  // 장면 차례 놓기(story·timeline): 기본 3장, 쉬움 첫 장면이 놓여 있음, 도전 틀린 장면 1장이 섞여 빼고 놓음
  const ORDER3 = (prompt, cards, wrong, d, more, slots) => {
    const ids = cards.map((c) => c.id);
    const at0 = {}; ids.forEach((id, i) => { at0[id] = i === 0 ? 0 : null; });
    const lv = { easy: { state: { at: at0 } } };
    if (wrong) lv.challenge = { toolOptions: { cards: [cards[2], wrong, cards[0], cards[1]] } };
    return { prompt, toolOptions: { slots: slots || ['먼저', '다음', '끝'], cards: [cards[2], cards[0], cards[1]] }, target: { order: ids }, difficulty: d, levels: lv, ...more };
  };
  // 갈림 고르기(emotion branch): 기본 보기 2개, 도전 헷갈리는 보기 1개 더
  const BRANCH = (prompt, situation, good, bad, extra, d, more) => ({
    prompt, toolOptions: { mode: 'branch', situation, choices: [bad, good] }, target: { choice: good.id }, difficulty: d,
    levels: extra ? { challenge: { toolOptions: { choices: [bad, good, extra] } } } : {},
    ...more,
  });
  // 칸 지도 핀(map): 문항마다 핀 하나. 쉬움 = 헷갈리는 칸 없는 지도, 도전 = 헷갈리는 칸이 더 있는 지도
  const PIN = (prompt, grid, base, easy, more2, place, d, more) => {
    const lv = {};
    if (easy) lv.easy = { toolOptions: { places: easy } };
    if (more2) lv.challenge = { toolOptions: { places: [...base, ...more2] } };
    return { prompt, toolOptions: { grid, places: base }, target: { place }, difficulty: d, levels: lv, ...more };
  };
  // 두 칸 나누기(mindmap sort): 기본 6장, 쉬움 4장, 도전 8장(헷갈리는 카드 2장 — 둘째 칸으로 간다)
  const SORT2 = (slots, prompt, topic, ok, no, hard, d, more) => {
    const S = (a, b) => ({ [slots[0]]: a, [slots[1]]: b });
    return {
      prompt, toolOptions: { topic, slots, cards: [ok[0], no[0], ok[1], no[1], ok[2], no[2]] }, target: { sort: S(ok, no) }, difficulty: d,
      levels: {
        easy: { prompt: `${cut(prompt)}(4장).`, toolOptions: { cards: [ok[0], no[0], ok[1], no[1]] }, target: { sort: S(ok.slice(0, 2), no.slice(0, 2)) } },
        challenge: { prompt: `${cut(prompt)}(8장).`, toolOptions: { cards: [ok[0], no[0], hard[0], ok[1], no[1], ok[2], hard[1], no[2]] }, target: { sort: S(ok, [...no, ...hard]) } },
      },
      ...more,
    };
  };
  // 바구니 고르기(kitchen·mindmap pick): 기본 6장 중 3장, 쉬움 4장 중 2장, 도전 7장(함정 카드 1장 더)
  const PICK = (prompt, basket, good, bad, trap, d, more, extraOpts) => ({
    prompt, toolOptions: Object.assign({ mode: 'pick', basket, cards: [bad[0], good[0], bad[1], good[1], bad[2], good[2]] }, extraOpts || {}), target: { pick: good }, difficulty: d,
    levels: {
      easy: { prompt: `${cut(prompt)}(4장).`, toolOptions: { cards: [bad[0], good[0], bad[1], good[1]] }, target: { pick: good.slice(0, 2) } },
      challenge: { prompt: `${cut(prompt)}(7장).`, toolOptions: { cards: [bad[0], good[0], trap, bad[1], good[1], bad[2], good[2]] }, target: { pick: good } },
    },
    ...more,
  });
  // 그림그래프(chart picture): 완성하기 · 읽기
  const PICT = (prompt, title, unit, data3, data4, d, more) => ({
    prompt, toolOptions: { type: 'picture', mode: 'build', title, unit, data: data3, icons: [{ value: 1, name: `1${unit}` }], icon: 'star' }, target: { build: true }, difficulty: d,
    levels: { easy: { toolOptions: { given: [0] } }, challenge: { toolOptions: { data: data4 } } },
    ...more,
  });
  const PREAD = (prompt, title, unit, data, question, pick, d, more, icon) => ({
    prompt, toolOptions: { type: 'picture', mode: 'read', title, unit, data, icons: [{ value: 1, name: `1${unit}` }], icon: icon || 'star', question, choices: data.map((x) => x[0]) }, target: { pick }, difficulty: d, ...more,
  });
  // 정리 출구: 그림 점검표(스스로 점검), 구호 순서(timer), 스스로 점검(timer), 그림그래프 읽기(chart)
  const CHECK = (title, items, prompt) => ({ type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title, items }, prompt: prompt || '오늘 지킬 약속에 표시해요.', target: { selfCheck: true }, difficulty: 0.1 });
  const CHANT = (title, cards, prompt) => ({ type: 'tool', tool: 'timer', options: { title, cards: cards.length > 2 ? [cards[2], cards[0], cards[1]] : [cards[1], cards[0]] }, prompt: prompt || '구호를 차례대로 놓아요.', target: { order: cards }, difficulty: 0.1 });
  const SELF = (title, safety, prompt) => ({ type: 'tool', tool: 'timer', options: { title, safety }, prompt: prompt || '내일 할 것에 표시해요.', target: { safety: true }, difficulty: 0.1 });
  const GRAPH = (title, data, question, pick, prompt, icon) => ({ type: 'tool', tool: 'chart', options: { type: 'picture', mode: 'read', title, unit: '명', data, icons: [{ value: 1, name: '1명' }], icon: icon || 'person', question, choices: data.map((x) => x[0]) }, prompt, target: { pick }, difficulty: 0.15 });

  // =====================================================================================================
  // 1학년 · 신호등이 하는 말
  const SIG = MOD('saf-traffic.e12.signal', [1]);
  const T_SIGNAL = [
    SIG({
      id: 'saf-traffic.e12.signal.intro.picture', type: 'intro', title: '멈출까 건널까 그림 고르기',
      method: '그림 장면 보고 멈출지 건널지 고르기', tool: 'emotion', minutes: 5,
      levels: { easy: '교사가 빨간 사람 불 카드 하나만 짚어 보이고 다 같이 "멈춰요"를 말한다.', base: '시연에서 빨간불·초록불·지나가는 차 카드를 보며 멈출 때를 소리 내어 고른다.', challenge: '깜박이는 초록불 카드도 "멈춰요" 바구니로 가는 까닭을 짝에게 말한다.' },
      intro: {
        teacher: '"길모퉁이에 신호등이 있어요. 빨간 사람이 켜지면 우리는 어떻게 할까요?" 두세 명의 대답을 듣고(기다릴 반응: "멈춰요", "기다려요") 시연 단추로 멈춰야 하는 카드만 바구니에 담기는 모습을 보여 준다. "차가 안 오면 빨간불에도 가도 돼요"라는 말이 나오면 "골목에서 차가 갑자기 나오면 운전자는 빨간불에 사람이 있을 거라고 생각할까요?"라고 되묻는다. 오늘은 신호등이 하는 말을 듣고 몸으로 지키는 법을 배운다고 밝힌다.',
        student: '빨간 사람이 켜지면 손바닥을 앞으로 내밀며 "멈춰요!" 하고 말해요.',
        demo: { tool: 'emotion', options: { mode: 'pick', basket: '멈춰요', cards: [C('red', '빨간 사람 불'), C('green', '초록 사람 불'), C('blink', '깜박이는 초록'), C('car', '차가 지나가요')], shuffle: false }, sequence: [{ pick: ['red'] }, { pick: ['red', 'blink'] }, { pick: ['red', 'blink', 'car'] }] },
        art: { draw: 'a paper street corner with a pedestrian traffic light showing a red standing figure, paper children waiting behind the curb line while a paper car passes', banner: '빨간불은 멈춰요' },
      },
      notes: '보행 신호등 그림이 교구에 없어 카드 글로 말한다. 시연 전에 실제 보행 신호등 사진이나 학교 앞 신호등을 보여 준다.',
    }),
    SIG({
      id: 'saf-traffic.e12.signal.intro.chant', type: 'intro', title: '"멈춰·살펴·건너" 신호등 구호',
      method: '신호등 구호 따라 하기', tool: 'timer', minutes: 5,
      levels: { easy: '교사가 "멈춰"·"건너" 두 구호만 손동작과 함께 먼저 외치고 따라 하게 한다.', base: '구호 카드 세 장이 차례대로 놓이는 시연을 보고 동작과 함께 세 번 따라 한다.', challenge: '교사가 구호를 말하면 학생은 말없이 동작으로만 답한다.' },
      intro: {
        teacher: '"빨간불 멈춰! (손바닥 앞으로) 초록불 살펴! (고개 왼쪽·오른쪽) 걸어서 건너! (제자리 걷기)" 시연 단추로 구호 카드가 차례대로 놓이는 모습을 보이고 반 전체가 동작과 함께 세 번 따라 한다. "초록불이면 바로 뛰어요"라는 말이 나오면 "초록불이 켜져도 미처 못 멈춘 차가 있으면 어떻게 될까요? 그래서 살피는 차례가 있어요"라고 되묻는다.',
        student: '"빨간불 멈춰, 초록불 살펴, 걸어서 건너!"를 손동작과 함께 따라 해요.',
        demo: { tool: 'timer', options: { title: '신호등 구호', cards: ['걸어서 건너', '빨간불 멈춰', '초록불 살펴'] }, sequence: [{ order: ['빨간불 멈춰', '초록불 살펴', '걸어서 건너'] }] },
        art: { draw: 'paper children in a row doing hand motions — palm forward, turning heads left and right, marching in place — next to a paper pedestrian traffic light', banner: '멈춰, 살펴, 건너!', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
      },
    }),
    SIG({
      id: 'saf-traffic.e12.signal.activity.cycle', type: 'activity', title: '신호가 바뀌는 차례 돌려 보기',
      method: '신호가 바뀌는 차례 돌려 보기', tool: 'lifecycle', minutes: 15,
      levels: { easy: '첫 자리에 카드 한 장이 놓여 있고, 놓으면 바로 맞는지 알려 준다.', base: '신호 카드 3장을 스스로 화살표 차례로 놓고, 불마다 할 일 카드를 짝 짓는다.', challenge: '카드가 섞여 나오고, 할 일 짝 짓기에 "뛰어서 건너요" 함정 카드가 한 장 더 섞인다.' },
      activity: {
        title: '보행 신호등이 바뀌는 차례 돌려 보기', tool: 'lifecycle',
        teacher: '"보행 신호등은 초록불 다음에 무엇으로 바뀔까요?" 카드를 다 놓으면 \'차례대로 따라가 보기\' 단추로 불이 하나씩 빛나게 하고, 빛날 때마다 반 전체가 그때 할 일을 말한다(초록 → "살피고 걸어요", 깜박임 → "새로 안 건너요", 빨강 → "멈춰요"). "깜박이면 빨리 뛰어요"라고 말하는 학생에게 "깜박인다는 건 곧 빨간불이 된다는 뜻이에요. 길 한가운데서 빨간불이 되면 어떻게 될까요?"라고 묻는다. 신호는 계속 돌고 돌아서 기다리면 다시 초록불이 온다는 점을 짚는다.',
        task: '신호 카드를 화살표 차례로 놓고, 불마다 할 일을 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          { prompt: '신호가 바뀌는 차례로 놓아요.', toolOptions: { center: '보행 신호등', cards: [C('red', '빨간불'), C('green', '초록불'), C('blink', '깜박임')] }, target: { order: ['green', 'blink', 'red'], cyclic: true }, difficulty: 0.1,
            hints: ['건너도 되는 불부터 찾아 맨 위에 놓아요.', '초록불은 바로 빨간불이 되지 않아요.', '초록불 → 깜박임 → 빨간불 차례예요.'],
            levels: { easy: { state: { at: { red: null, green: 0, blink: null } } } } },
          { prompt: '불마다 할 일을 이어요.', toolOptions: { mode: 'match', center: '보행 신호등', slots: [{ id: 'green', label: '초록불' }, { id: 'blink', label: '깜박임' }, { id: 'red', label: '빨간불' }], cards: [C('stop', '멈춰요'), C('walk', '살피고 걸어요'), C('wait', '새로 안 건너요')] }, target: { match: { green: 'walk', blink: 'wait', red: 'stop' } }, difficulty: 0.15,
            levels: { challenge: { toolOptions: { cards: [C('stop', '멈춰요'), C('run', '뛰어서 건너요'), C('walk', '살피고 걸어요'), C('wait', '새로 안 건너요')] } } } },
          { prompt: '건너는 차례로 돌려 놓아요.', toolOptions: { center: '내가 할 일', cycle: false, cards: [C('look', '좌우 살펴요'), C('wait', '빨간불 기다려요'), C('go', '걸어서 건너요'), C('on', '초록불 켜져요')] }, target: { order: ['wait', 'on', 'look', 'go'] }, difficulty: 0.2,
            levels: { easy: { state: { at: { look: null, wait: 0, go: null, on: null } } } },
            conclude: '빨간불엔 멈추고, 초록불엔 살피고 걷고, 깜박이면 새로 건너지 않아요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '초록불이 깜박여요. 어떻게 해요?', options: ['다음 신호 기다려요', '뛰어서 건너요'], answer: '다음 신호 기다려요' }] },
      notes: '보행 신호는 초록 → 깜박임 → 빨강으로 돈다. 깜박일 때 이미 건너는 중이면 서둘러 마저 건너는 것은 교사가 말로만 덧붙인다(1학년 활동은 "새로 건너지 않기"까지).',
    }),
    SIG({
      id: 'saf-traffic.e12.signal.activity.blink', type: 'activity', title: '깜박이는 초록불 앞에서 고르기',
      method: '깜박이는 초록불 앞에서 고르기', tool: 'emotion', minutes: 14,
      levels: { easy: '보기 2개, 고르면 결과가 바로 보이고 교사가 결과를 소리 내어 읽어 준다.', base: '혼자일 때·친구와 함께일 때 두 장면에서 고르고, 결과는 확인한 뒤에 보인다.', challenge: '보기 3개("걸어서 건너요" 더하기)에서 고르고, 끝 문항의 까닭 카드를 담은 뒤 "왜냐하면…"으로 말한다.' },
      activity: {
        title: '초록불이 깜박일 때 어떻게 할까?', tool: 'emotion',
        teacher: '"횡단보도 앞에 왔는데 초록불이 깜박이고 있어요. 뛸까요, 기다릴까요?" 고르기 전에 반 전체가 엄지 위(기다려요)·엄지 아래(뛰어요)로 먼저 보이게 한다. "빨리 뛰면 다 건널 수 있어요"를 고른 학생에게 "길 한가운데서 빨간불로 바뀌면 차는 나를 기다려 줄까요?"라고 묻는다. 친구가 "뛰자!"라고 해도 "기다리자"라고 말하는 것이 친구도 지키는 일이라고 짚는다.',
        task: '장면을 듣고 어떻게 할지 골라요.', levels: { easy: {}, base: { revealAfterCheck: true }, challenge: { revealAfterCheck: true } },
        items: [
          BRANCH('초록불이 깜박여요. 어떻게 해요?', '혼자 섰는데 깜박여요.',
            { id: 'wait', text: '다음 신호 기다려요', result: '다음 초록불에 살피고 걸었어요.', mood: '편안함' },
            { id: 'run', text: '뛰어서 건너요', result: '길 가운데서 빨간불이 될 수 있어요.', mood: '걱정' },
            { id: 'walk', text: '걸어서 건너요', result: '다 건너기 전에 빨간불이 돼요.', mood: '놀람' }, 0.1),
          BRANCH('친구가 "뛰자!" 해요. 어떻게 해요?', '친구와 섰는데 깜박여요.',
            { id: 'say', text: '"기다리자" 말해요', result: '둘이 함께 다음 신호에 건넜어요.', mood: '뿌듯함' },
            { id: 'follow', text: '같이 뛰어요', result: '둘 다 넘어지거나 차와 만날 수 있어요.', mood: '무서움' },
            { id: 'alone', text: '친구만 보내요', result: '친구 혼자 위험해질 수 있어요.', mood: '걱정' }, 0.15),
          { prompt: '기다리는 까닭을 담아요.', toolOptions: { mode: 'pick', basket: '기다려요', cards: [C('soon', '곧 빨간불'), C('late', '늦을까 봐요'), C('car', '차가 출발해요'), C('fun', '뛰면 재밌어요')] }, target: { pick: ['soon', 'car'] }, difficulty: 0.2,
            hints: ['깜박이는 불 다음에 무엇이 오는지 떠올려요.', '까닭은 두 가지예요.', '곧 빨간불이 되고, 차가 출발해요.'],
            conclude: '초록불이 깜박이면 새로 건너지 않고 다음 초록불을 기다려요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '초록불이 깜박이면 ___.', answer: '기다려요' }] },
    }),
    SIG({
      id: 'saf-traffic.e12.signal.activity.crossmap', type: 'activity', title: '신호등 있는 횡단보도 찾기',
      method: '신호등 있는 횡단보도 찾기', tool: 'map', minutes: 15,
      levels: { easy: '헷갈리는 칸 없이 집·학교·신호등 칸만 있는 지도에 꽂는다.', base: '신호등 있는 건널목과 신호 없는 길이 함께 있는 지도에서 집 앞 → 학교 앞 차례로 꽂는다.', challenge: '찻길 가운데·주차장 입구 칸이 더 있는 지도에서 꽂고, 그곳이 왜 안 되는지 짝에게 한마디 한다.' },
      activity: {
        title: '학교 가는 길에서 건널 곳 꽂기', tool: 'map',
        teacher: '"집에서 학교에 가려면 찻길을 두 번 건너요. 어디서 건너야 할까요?" 핀을 꽂기 전에 그 칸에 신호등이 있는지 손가락으로 짚게 한다. "신호 없는 길이 더 가까워요"라는 학생에게 "가까워도 차가 언제 멈출지 알려 주는 신호가 없으면 어떻게 될까요?"라고 묻는다. 우리 학교 앞에도 신호등 있는 횡단보도가 어디 있는지 떠올리게 한다.',
        task: '건널 곳에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
        items: (() => {
          const G = [4, 3];
          const HOME = { name: '집', icon: 'house', at: [0, 2] }; const SCH = { name: '학교', icon: 'school', at: [3, 0] };
          const A = { name: '큰길 신호등', icon: 'dot', at: [1, 2] }; const B = { name: '학교 앞 신호등', icon: 'dot', at: [3, 1] };
          const N = { name: '신호 없는 길', icon: 'dot', at: [1, 1] };
          const MORE = [{ name: '찻길 가운데', icon: 'dot', at: [2, 1] }, { name: '주차장 입구', icon: 'dot', at: [0, 0] }];
          return [
            PIN('집 앞에서 건널 곳에 꽂아요.', G, [HOME, SCH, A, B, N], [HOME, SCH, A], MORE, '큰길 신호등', 0.1),
            PIN('학교 앞에서 건널 곳에 꽂아요.', G, [HOME, SCH, A, B, N], [HOME, SCH, B], MORE, '학교 앞 신호등', 0.15),
            PIN('신호등이 없는 곳에 꽂아요.', G, [HOME, SCH, A, B, N], [HOME, SCH, A, N], MORE, '신호 없는 길', 0.2, { conclude: '찻길은 신호등 있는 횡단보도에서 건너요. 신호 없는 길은 돌아가요.' }),
          ];
        })(),
      },
      worksheet: { items: [{ type: 'choice', prompt: '찻길은 어디서 건너요?', options: ['신호등 있는 횡단보도', '차 사이'], answer: '신호등 있는 횡단보도' }] },
      notes: '지도에 신호등 기호가 없어 장소 이름(큰길 신호등·학교 앞 신호등)으로 나타낸다. 칠판에 신호등 그림을 함께 붙여 둔다.',
    }),
    SIG({
      id: 'saf-traffic.e12.signal.activity.roleplay', type: 'activity', title: '교실 횡단보도 역할놀이',
      method: '교실 횡단보도 역할놀이', tool: 'timer', minutes: 14,
      levels: { easy: '카드 4장 차례를 맞추고 역할놀이를 두 번 하게 타이머를 맞춘다. 교사가 신호등 역할을 한다.', base: '카드 4장, 역할놀이 세 번 — 신호등 역할 친구를 번갈아 정한다.', challenge: '"깜박이면 기다려요" 카드까지 5장을 놓고 네 번 되풀이하며, 깜박임 때는 건너지 않는다.' },
      activity: {
        title: '교실 바닥 횡단보도에서 신호 따라 걷기', tool: 'timer',
        teacher: '"오늘은 교실 바닥에 횡단보도를 만들고, 친구 한 명이 신호등이 되어 볼 거예요." 타이머의 운동 칸을 초록(걷기), 쉬기 칸을 빨강(멈춤)으로 정한 것은 우리 반 놀이 약속이고 실제 신호 시간과 다르다고 먼저 말한다. 시작 단추를 누르면 신호등 역할 친구가 초록·빨강 카드를 들고, 나머지는 선 앞에서 멈췄다가 걷는다. 빨강 구간에 한 발 내미는 학생에게 "선 앞에서 기다리는 것도 건너기의 한 차례예요"라고 말해 준다.',
        task: '역할놀이 차례를 맞추고 몇 번 할지 타이머를 맞춰요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '역할놀이 전 안전 점검을 해요.', toolOptions: { title: '놀이 전 점검', safety: ['바닥에 가방 치우기', '줄 서기', '밀지 않기'] }, target: { safety: true }, difficulty: 0.1 },
          { prompt: '건너는 차례로 카드를 놓아요.', toolOptions: { title: '건너는 차례', cards: ['좌우 봐요', '선 앞에 서요', '걸어요', '신호 봐요'] }, target: { order: ['선 앞에 서요', '신호 봐요', '좌우 봐요', '걸어요'] }, difficulty: 0.15,
            levels: { challenge: { prompt: '건너는 차례로 놓아요(5장).', toolOptions: { cards: ['좌우 봐요', '깜박이면 기다려요', '선 앞에 서요', '걸어요', '신호 봐요'] }, target: { order: ['선 앞에 서요', '신호 봐요', '깜박이면 기다려요', '좌우 봐요', '걸어요'] } } } },
          { prompt: '역할놀이 세 번이 되게 맞춰요.', toolOptions: { title: '초록·빨강 되풀이', plan: { work: 10, rest: 10, rounds: 1 } }, target: { plan: { rounds: 3 } }, difficulty: 0.2,
            hints: ['한 번 걷고 한 번 멈추면 한 번이에요.', '번 칸이 되풀이 수예요.', '번 칸을 3에 맞춰요.'],
            levels: { easy: { prompt: '역할놀이 두 번이 되게 맞춰요.', target: { plan: { rounds: 2 } } }, challenge: { prompt: '역할놀이 네 번이 되게 맞춰요.', target: { plan: { rounds: 4 } } } },
            conclude: '선 앞에 서서 신호를 보고, 좌우를 살핀 뒤 걸어서 건너요.' },
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '좋으면 ○, 안 되면 ×를 써요.', columns: ['행동', '○ / ×'], cells: [['선 앞에서 기다려요', ''], ['빨간불에 뛰어요', ''], ['좌우를 살펴요', '']], answer: '○, ×, ○' }] },
      notes: '타이머의 초 값은 놀이 진행용 우리 반 약속이다. 실제 보행 신호 시간을 가르치지 않는다. 교실 바닥 횡단보도는 색 테이프로 미리 붙여 둔다.',
    }),
    SIG({
      id: 'saf-traffic.e12.signal.wrap.fill', type: 'wrap', title: '신호등 말풍선 채우기',
      method: '신호등 말풍선 채우기', tool: 'story', minutes: 6,
      levels: { easy: '교사가 말풍선을 하나씩 읽어 주고 빨간불 빈칸을 함께 채운 뒤 나머지를 따라 채운다.', base: '말풍선 두 개의 빈칸을 스스로 채우고 함께 읽는다.', challenge: '빈칸을 채운 뒤 "깜박이면 ___" 말풍선을 말로 채워 짝에게 들려준다.' },
      wrap: {
        teacher: '"신호등이 우리에게 말을 해요. 빨간불은 뭐라고 할까요?" 말풍선을 채운 뒤 반 전체가 신호등 목소리로 읽는다. 출구 2번에서 "뛰어가요"를 고른 학생에게 "깜박임은 곧 빨간불이 된다는 신호예요. 다음 초록불은 꼭 다시 와요"라고 말해 준다. 마지막에 "빨간불 멈춰, 초록불 살펴, 걸어서 건너!"를 다 같이 외친다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { mode: 'fill', slots: [{ id: 'r', who: '신호등', label: '빨간불은 ___!' }, { id: 'g', who: '신호등', label: '초록불은 ___ 건너요!' }], cards: ['멈춰요', '살피고', '뛰어서', '눈 감고'] }, prompt: '신호등 말풍선을 채워요.', target: { fill: { r: '멈춰요', g: '살피고' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '초록불이 깜박이면요?', options: ['뛰어가요', '기다려요', '눈 감아요'], answer: 1, difficulty: 0.1, explain: '깜박이면 새로 건너지 않고 다음 초록불을 기다려요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '신호등이 하는 말',
        items: [
          { type: 'blank', prompt: '신호등 말을 따라 써요.', text: '빨간불은 ___!', answer: '멈춰요' },
          { type: 'draw', prompt: '빨간불에 멈춘 내 모습을 그려요.' },
        ],
        easy: { note: '"빨간불 멈춰, 초록불 살펴"를 떠올려요.', items: [{ type: 'draw', prompt: '신호등에 빨간불을 색칠해요.' }] },
      },
    }),
    SIG({
      id: 'saf-traffic.e12.signal.wrap.promise', type: 'wrap', title: '신호 약속 스스로 표시',
      method: '신호 약속 스스로 표시', tool: 'kitchen', minutes: 6,
      levels: { easy: '교사가 점검표 칸을 하나씩 읽어 주고 하나를 골라 함께 표시한다.', base: '그림 점검표 세 칸을 스스로 읽고 오늘 지킬 약속에 표시한다.', challenge: '표시한 뒤 집에 가는 길에 꼭 지킬 약속 하나를 골라 짝에게 말한다.' },
      wrap: {
        teacher: '"오늘 배운 신호 약속 가운데 집에 가는 길에 지킬 것은 무엇인가요?" 점검표 칸을 함께 읽고 할 수 있는 약속에 표시하게 한다. 출구 2번에서 "건너요"를 고른 학생에게 "차가 안 보여도 빨간불은 멈추라는 말이에요. 골목에서 차가 나올 수 있어요"라고 말해 준다. 집에 가는 길 첫 신호등에서 오늘 약속을 해 보자고 마무리한다.',
        exitTicket: [
          CHECK('신호 약속', [C('stop', '빨간불 멈춤'), C('look', '초록불 살핌'), C('wait', '깜박임 기다림')]),
          { type: 'choice', prompt: '빨간불, 차가 안 보여요.', options: ['건너요', '멈춰요'], answer: 1, difficulty: 0.1, explain: '차가 안 보여도 빨간불에는 멈춰요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '나의 신호 약속',
        items: [
          { type: 'check', prompt: '내가 지킬 약속에 ✓ 해요.', options: ['빨간불에는 멈춰요', '초록불에도 좌우를 살펴요', '깜박이면 기다려요'] },
          { type: 'draw', prompt: '신호등 앞에서 기다리는 모습을 그려요.' },
        ],
        easy: { note: '빨간불을 떠올려요.', items: [{ type: 'draw', prompt: '빨간 신호등을 그려요.' }] },
      },
    }),
  ];

  // =====================================================================================================
  // 1학년 · 멈추고 살피고 건너요
  const CROSS = MOD('saf-traffic.e12.crossing', [1]);
  const T_CROSS = [
    CROSS({
      id: 'saf-traffic.e12.crossing.intro.scene', type: 'intro', title: '토끼가 건너는 장면 차례 맞히기',
      method: '건너는 장면 차례 맞히기', tool: 'story', minutes: 5,
      levels: { easy: '교사가 첫 장면 "멈춰요"를 먼저 놓아 보이고 남은 두 장면을 함께 말한다.', base: '섞인 장면 세 장이 처음·가운데·끝에 놓이는 시연을 보며 소리 내어 따라 말한다.', challenge: '"뛰어요" 장면을 하나 더 보여 주고 왜 빼야 하는지 말한다.' },
      intro: {
        teacher: '"토끼가 횡단보도를 건너려고 해요. 맨 먼저 무엇을 할까요?" 장면 카드를 섞어 보여 주고 두세 명의 대답을 들은 뒤(기다릴 반응: "멈춰요", "봐요") 시연 단추로 처음·가운데·끝에 놓이는 모습을 보여 준다. "건너요가 먼저예요"라는 말이 나오면 "멈추지 않고 바로 가면 오는 차를 언제 볼 수 있을까요?"라고 되묻는다. 오늘은 멈추고, 살피고, 건너는 세 차례를 몸으로 익힌다고 밝힌다.',
        student: '토끼처럼 멈추고, 고개를 돌려 살피고, 걷는 흉내를 내 보아요.',
        demo: { tool: 'story', options: { mode: 'order', slots: ['처음', '가운데', '끝'], cards: [C('go', '걸어서 건너요', 'flower'), C('stop', '멈춰요', 'tree'), C('look', '좌우 살펴요', 'sun')] }, sequence: [{ order: ['stop', 'look', 'go'] }] },
        art: { draw: 'a paper rabbit standing behind the white line of a paper crosswalk, turning its head to look left and right before stepping forward', banner: '멈추고 살피고 건너요' },
      },
    }),
    CROSS({
      id: 'saf-traffic.e12.crossing.intro.body', type: 'intro', title: '살필 때 쓰는 몸 짚기',
      method: '살필 때 쓰는 몸 고르기', tool: 'body', minutes: 5,
      levels: { easy: '교사가 눈 하나만 짚어 보이고 다 같이 자기 눈을 가리킨다.', base: '눈 → 귀 → 손목 차례로 짚는 시연을 보고 자기 몸을 따라 짚는다.', challenge: '짚은 곳마다 하는 일("눈은 차를 봐요")을 짝과 말로 잇는다.' },
      intro: {
        teacher: '"횡단보도 앞에서 우리 몸 어디를 쓸까요?" 종이 몸에서 눈 → 귀 → 손목을 차례로 짚는 시연을 보인 뒤 학생들이 자기 눈·귀를 가리키고 손을 들어 보게 한다. "눈만 있으면 돼요"라는 말이 나오면 "뒤에서 오는 차는 눈으로 안 보여요. 무엇으로 알 수 있을까요?"라고 되묻는다. 손을 드는 것은 운전자가 나를 더 잘 보게 하려는 것이라고 짚는다.',
        student: '"눈으로 보고, 귀로 듣고, 손을 들어요!"를 몸으로 따라 해요.',
        demo: { tool: 'body', options: { mode: 'parts', parts: ['눈', '귀', '코', '손목', '무릎'], names: true }, sequence: [{ parts: ['눈'] }, { parts: ['눈', '귀'] }, { parts: ['눈', '귀', '손목'] }] },
        art: { draw: 'a paper child at a crosswalk with big eyes looking sideways, a hand cupped to an ear and one arm raised high', banner: '눈, 귀, 손!', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
      },
      notes: '종이 몸에 손 칸이 없어 "손 들기"는 손목을 짚는 시연으로 대신하고, 학생은 실제로 손을 든다.',
    }),
    CROSS({
      id: 'saf-traffic.e12.crossing.activity.order', type: 'activity', title: '횡단보도 건너는 차례 놓기',
      method: '횡단보도 건너는 차례 놓기', tool: 'timeline', minutes: 15,
      levels: { easy: '첫 칸에 카드가 놓여 있고, 놓으면 바로 맞는지 알려 준다.', base: '카드 3장을 먼저 할 것부터 왼쪽에 스스로 놓는다.', challenge: '첫 문항에 "손 들어요" 카드가 더해져 4장을 알맞은 자리에 넣는다.' },
      activity: {
        title: '시간 띠에 건너는 차례 놓기', tool: 'timeline',
        teacher: '"횡단보도 앞에 섰어요. 무엇을 먼저 할까요?" 카드를 놓은 뒤 자리에서 일어나 띠의 차례대로 몸으로 해 본다(멈춤 → 고개 좌우 → 손 들기 → 제자리 걷기). "초록불이니까 바로 건너요"를 앞에 두는 학생에게 "초록불인데도 멈추지 못한 차가 오면 어떻게 될까요?"라고 묻는다. 건너는 동안에도 차가 섰는지 보면서 걷는다는 점을 짚는다.',
        task: '할 일 카드를 먼저 할 것부터 왼쪽에 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          { prompt: '건너는 차례로 놓아요.', toolOptions: { axis: ['먼저', '나중'], slots: 3, cards: [C('walk', '걸어서 건너요'), C('stop', '선 앞에 멈춰요'), C('look', '좌우 살펴요')] }, target: { order: ['stop', 'look', 'walk'] }, difficulty: 0.1,
            levels: { easy: { state: { at: { walk: null, stop: 0, look: null } } }, challenge: { prompt: '건너는 차례로 놓아요(4장).', toolOptions: { slots: 4, cards: [C('walk', '걸어서 건너요'), C('hand', '손 들어요'), C('stop', '선 앞에 멈춰요'), C('look', '좌우 살펴요')] }, target: { order: ['stop', 'look', 'hand', 'walk'] } } } },
          ORDER3('신호를 기다려요. 차례로 놓아요.', [C('back', '선 뒤에 서요'), C('see', '신호를 봐요'), C('green', '초록불 기다려요')], null, 0.15, {}, 3),
          ORDER3('초록불이 켜졌어요. 차례로 놓아요.', [C('car', '차가 섰나 봐요'), C('eye', '운전자를 봐요'), C('go', '걸어서 건너요')], null, 0.2, { conclude: '선 앞에 멈추고, 좌우를 살피고, 차가 선 것을 본 뒤 걸어서 건너요.' }, 3),
        ].map((it, i) => (i === 0 ? it : Object.assign(it, { toolOptions: Object.assign({ axis: ['먼저', '나중'] }, it.toolOptions) }))),
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '멈추고, ___, 건너요.', answer: '살피고' }] },
    }),
    CROSS({
      id: 'saf-traffic.e12.crossing.activity.drill', type: 'activity', title: '멈추고 살피고 건너기 연습',
      method: '멈추고 살피고 건너기 연습', tool: 'timer', minutes: 14,
      levels: { easy: '카드 차례를 맞추고 연습 한 번이 되게 타이머를 맞춘다. 교사와 손잡고 한 번 건넌다.', base: '짝과 번갈아 두 번 연습하게 맞추고, 마친 뒤 해낸 것을 스스로 표시한다.', challenge: '짝과 번갈아 네 번 연습하게 맞추고, 짝이 한 것을 보고 점검 칸을 대신 읽어 준다.' },
      activity: {
        title: '교실 횡단보도에서 건너기 연습', tool: 'timer',
        teacher: '"이번에는 진짜처럼 건너 볼 거예요. 선 앞에서 멈추고, 고개를 왼쪽·오른쪽, 손 들고 걸어요." 교사가 먼저 시범을 보인 뒤 짝끼리 한 명은 건너고 한 명은 운전자 역할로 선 밖에 선다. 고개만 살짝 돌리는 학생에게 "운전자 친구와 눈이 마주쳤나요? 마주칠 때까지 봐요"라고 말해 준다. 마친 뒤 해낸 것만 솔직하게 표시하면 된다고 짚는다.',
        task: '연습 차례를 놓고, 몇 번 할지 맞추고, 해낸 것에 표시해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '연습 차례로 카드를 놓아요.', toolOptions: { title: '건너기 차례', cards: ['손 들기', '선 앞 멈춤', '걸어 건너기', '좌우 보기'] }, target: { order: ['선 앞 멈춤', '좌우 보기', '손 들기', '걸어 건너기'] }, difficulty: 0.1 },
          { prompt: '연습 두 번이 되게 맞춰요.', toolOptions: { title: '연습 횟수', plan: { work: 15, rest: 10, rounds: 3 } }, target: { plan: { rounds: 2 } }, difficulty: 0.15,
            hints: ['짝과 한 번씩 건너면 몇 번인지 세어 봐요.', '번 칸이 연습 횟수예요.', '번 칸을 2에 맞춰요.'],
            levels: { easy: { prompt: '연습 한 번이 되게 맞춰요.', target: { plan: { rounds: 1 } } }, challenge: { prompt: '연습 네 번이 되게 맞춰요.', target: { plan: { rounds: 4 } } } } },
          { prompt: '마친 뒤 해낸 것에 표시해요.', toolOptions: { title: '건너기 점검' }, target: { selfCheck: ['멈췄어요', '살폈어요', '걸었어요'] }, difficulty: 0.15, conclude: '멈췄나, 살폈나, 걸었나 — 세 가지를 스스로 확인해요.' },
        ],
      },
      worksheet: { items: [{ type: 'check', prompt: '연습에서 해낸 것에 ✓ 해요.', options: ['선 앞에서 멈췄어요', '좌우를 살폈어요', '걸어서 건넜어요'] }] },
      notes: '타이머 초 값은 연습 진행용이다. 스스로 점검은 정답이 없다 — 못 한 칸은 다음 연습에서 해 보게 한다.',
    }),
    CROSS({
      id: 'saf-traffic.e12.crossing.activity.drop', type: 'activity', title: '건너다 물건을 떨어뜨렸어요',
      method: '건너다 물건을 떨어뜨렸어요', tool: 'emotion', minutes: 15,
      levels: { easy: '보기 2개, 고르면 결과가 바로 보이고 교사가 결과를 읽어 준다.', base: '보기 3개("멈춰서 울어요" 포함) 가운데 고르고, 결과는 확인한 뒤에 보인다.', challenge: '보기 3개에서 고르고, 공이 굴러간 장면·신발주머니 장면까지 세 장면을 판단한다.' },
      activity: {
        title: '건너는 중에 떨어뜨리면 어떻게 할까?', tool: 'emotion',
        teacher: '"횡단보도를 건너다 모자가 바람에 날아갔어요. 바로 주우러 갈까요?" 고르기 전에 반 전체가 "멈칫, 생각!" 하고 한 번 숨을 고르게 한다. "아끼는 모자라서 바로 주워요"를 고른 학생에게 "허리를 숙이면 내 키가 더 작아져요. 운전자에게 내가 잘 보일까요?"라고 묻는다. 물건은 다시 살 수 있지만 몸은 그렇지 않다는 것, 다 건넌 뒤 어른께 부탁한다는 것을 짚는다.',
        task: '장면을 듣고 어떻게 할지 골라요.', levels: { easy: {}, base: { revealAfterCheck: true }, challenge: { revealAfterCheck: true } },
        items: [
          { prompt: '모자가 떨어졌어요. 어떻게 해요?', toolOptions: { mode: 'branch', situation: '건너다 모자가 떨어졌어요.', choices: [{ id: 'pick', text: '바로 주워요', result: '차가 숙인 나를 못 볼 수 있어요.', mood: '걱정' }, { id: 'after', text: '건넌 뒤 부탁해요', result: '어른이 신호를 보고 주워 주셨어요.', mood: '편안함' }, { id: 'cry', text: '멈춰서 울어요', result: '길 가운데 서 있으면 위험해요.', mood: '속상함' }] }, target: { choice: 'after' }, difficulty: 0.1,
            levels: { easy: { toolOptions: { choices: [{ id: 'pick', text: '바로 주워요', result: '차가 숙인 나를 못 볼 수 있어요.', mood: '걱정' }, { id: 'after', text: '건넌 뒤 부탁해요', result: '어른이 신호를 보고 주워 주셨어요.', mood: '편안함' }] } } } },
          { prompt: '공이 굴러갔어요. 어떻게 해요?', toolOptions: { mode: 'branch', situation: '건너다 공이 찻길로 갔어요.', choices: [{ id: 'chase', text: '공을 쫓아가요', result: '찻길 한가운데로 가게 돼요.', mood: '무서움' }, { id: 'go', text: '건넌 뒤 어른께', result: '어른이 차를 보고 찾아 주셨어요.', mood: '편안함' }, { id: 'stand', text: '그 자리에 서요', result: '신호가 바뀌면 위험해요.', mood: '걱정' }] }, target: { choice: 'go' }, difficulty: 0.15,
            levels: { easy: { toolOptions: { choices: [{ id: 'chase', text: '공을 쫓아가요', result: '찻길 한가운데로 가게 돼요.', mood: '무서움' }, { id: 'go', text: '건넌 뒤 어른께', result: '어른이 차를 보고 찾아 주셨어요.', mood: '편안함' }] } } } },
          { prompt: '주머니를 떨어뜨렸어요.', toolOptions: { mode: 'branch', situation: '신발주머니가 떨어졌어요.', choices: [{ id: 'back', text: '뒤로 돌아가요', result: '뒤에서 차가 출발할 수 있어요.', mood: '놀람' }, { id: 'tell', text: '건넌 뒤 말해요', result: '선생님이 가져다주셨어요.', mood: '고마움' }, { id: 'kneel', text: '앉아서 찾아요', result: '운전자가 나를 못 봐요.', mood: '걱정' }] }, target: { choice: 'tell' }, difficulty: 0.2,
            levels: { easy: { toolOptions: { choices: [{ id: 'back', text: '뒤로 돌아가요', result: '뒤에서 차가 출발할 수 있어요.', mood: '놀람' }, { id: 'tell', text: '건넌 뒤 말해요', result: '선생님이 가져다주셨어요.', mood: '고마움' }] } } },
            conclude: '건너다 물건을 떨어뜨리면 줍지 말고 끝까지 건넌 뒤 어른께 부탁해요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '건너다 모자가 떨어졌어요.', options: ['건넌 뒤 어른께 부탁해요', '바로 주워요'], answer: '건넌 뒤 어른께 부탁해요' }] },
      notes: '계획의 "쉬움 장면 1개"는 문항 수를 단계마다 같게 두어야 해서, 쉬움은 보기를 2개로 줄이고 교사가 결과를 읽어 주는 것으로 바꾸었다.',
    }),
    CROSS({
      id: 'saf-traffic.e12.crossing.activity.mapcross', type: 'activity', title: '어디로 건널까 지도 고르기',
      method: '어디로 건널까 지도 고르기', tool: 'map', minutes: 14,
      levels: { easy: '문구점·나·횡단보도 칸만 있는 지도에 꽂는다(2번은 굽은 길 하나 더).', base: '횡단보도와 찻길 가운데·굽은 길 같은 위험한 칸이 함께 있는 지도에 꽂는다.', challenge: '횡단보도가 두 곳 있는 지도에서 칸을 세어 가장 가까운 곳으로 돌아가는 길을 고른다.' },
      activity: {
        title: '길 건너 문구점에 가는 길 고르기', tool: 'map',
        teacher: '"지우가 길 건너 문구점에 가고 싶어요. 어디로 건너야 할까요?" 핀을 꽂기 전에 지도 속 \'나\' 칸에서 손가락으로 길을 따라가 보게 한다. "문구점 바로 앞 찻길로 가면 빨라요"라는 학생에게 "그 자리에는 차가 멈추라는 표시가 있을까요?"라고 묻는다. 조금 멀어도 횡단보도까지 돌아가는 것이 안전한 길이라고 짚는다.',
        task: '안전하게 건널 곳에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
        items: (() => {
          const G = [4, 3];
          const ME = { name: '나', icon: 'dot', at: [2, 2] }; const SHOP = { name: '문구점', icon: 'market', at: [2, 0] };
          const CW = { name: '횡단보도', icon: 'dot', at: [0, 1] }; const MID = { name: '찻길 가운데', icon: 'dot', at: [2, 1] }; const BEND = { name: '굽은 길', icon: 'dot', at: [3, 1] };
          const CW1 = { name: '횡단보도 ㄱ', icon: 'dot', at: [0, 1] }; const CW2 = { name: '횡단보도 ㄴ', icon: 'dot', at: [3, 1] };
          return [
            PIN('문구점에 가려면 어디로 건너요?', G, [ME, SHOP, CW, MID, BEND], [ME, SHOP, CW], null, '횡단보도', 0.1),
            PIN('차가 갑자기 나오는 곳에 꽂아요.', G, [ME, SHOP, CW, MID, BEND], [ME, SHOP, CW, BEND], null, '굽은 길', 0.15),
            PIN('나와 가장 가까운 횡단보도는요?', G, [ME, SHOP, CW1, CW2, { name: '찻길 가운데', icon: 'dot', at: [2, 1] }], null, null, '횡단보도 ㄴ', 0.2,
              { hints: ['나 칸에서 횡단보도까지 칸을 세어 봐요.', '두 횡단보도까지 칸 수가 달라요.', '나와 한 칸 떨어진 횡단보도 ㄴ이에요.'], conclude: '조금 멀어도 가까운 횡단보도까지 걸어가서 건너요.' }),
          ];
        })(),
      },
      worksheet: { items: [{ type: 'choice', prompt: '길 건너 가게에 가요. 어디로?', options: ['횡단보도로 돌아가요', '가게 앞 찻길로 가요'], answer: '횡단보도로 돌아가요' }] },
      notes: '지도는 문항마다 핀 하나라 계획의 "돌아가는 길 칸 따라가기"는 3번 문항에서 두 횡단보도까지 칸을 세어 가까운 곳을 고르는 것으로 바꾸었다.',
    }),
    CROSS({
      id: 'saf-traffic.e12.crossing.wrap.song', type: 'wrap', title: '건너기 노래로 마무리',
      method: '건너기 노래로 마무리', tool: 'timer', minutes: 6,
      levels: { easy: '교사가 "멈추고·건너요" 두 박자를 먼저 부르고 함께 따라 한다.', base: '노래 카드 세 장의 차례를 맞추고 세 박자 노래를 동작과 함께 부른다.', challenge: '노래를 부른 뒤 친구 앞에서 동작 시범을 보인다.' },
      wrap: {
        teacher: '"멈추고! (손바닥 앞으로) 살피고! (고개 좌우) 건너요! (손 들고 제자리 걷기)" 노래 카드 차례를 맞춘 뒤 손뼉 박자에 맞춰 세 번 부른다. 출구 2번에서 "안 봐도 돼요"를 고른 학생에게 "초록불이어도 미처 못 멈춘 차가 있을 수 있어요. 그래서 노래에 살피고가 들어 있어요"라고 말해 준다. 집에 가는 길 횡단보도에서 노래를 마음속으로 불러 보자고 마무리한다.',
        exitTicket: [
          CHANT('건너기 노래', ['멈추고', '살피고', '건너요'], '노래 차례대로 카드를 놓아요.'),
          { type: 'choice', prompt: '초록불이에요. 좌우를 봐요?', options: ['안 봐도 돼요', '좌우를 봐요'], answer: 1, difficulty: 0.1, explain: '초록불에도 좌우를 살핀 뒤 건너요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '멈추고 살피고 건너요',
        items: [
          { type: 'blank', prompt: '노래를 따라 써요.', text: '멈추고, 살피고, ___!', answer: '건너요' },
          { type: 'draw', prompt: '손 들고 건너는 내 모습을 그려요.' },
        ],
      },
    }),
    CROSS({
      id: 'saf-traffic.e12.crossing.wrap.cheer', type: 'wrap', title: '건너기 약속 그물',
      method: '건너기 약속 그물', tool: 'mindmap', minutes: 6,
      levels: { easy: '교사가 "눈" 가지를 먼저 채워 보이고 나머지 가지를 함께 채운다.', base: '눈·귀·발 가지에 알맞은 카드를 스스로 넣는다.', challenge: '"뛰어요" 함정 카드를 왜 빼는지 말하며 넣는다.' },
      wrap: {
        teacher: '"횡단보도를 건널 때 눈은 무엇을 할까요? 귀는요? 발은요?" 가지마다 카드를 넣고 그 몸을 손으로 짚게 한다. "발은 빨리 뛰어요"를 넣으려는 학생에게 "뛰다가 넘어지면 길 한가운데에 있게 돼요. 발은 어떻게 할까요?"라고 묻는다. 출구 2번에서 "네"를 고른 학생에게 걸어야 운전자도 나를 보고 멈출 수 있다고 말해 준다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '횡단보도', slots: ['눈', '귀', '발'], cards: ['좌우 봐요', '차 소리 들어요', '걸어요', '뛰어요'] }, prompt: '가지마다 알맞은 카드를 넣어요.', target: { match: { 눈: '좌우 봐요', 귀: '차 소리 들어요', 발: '걸어요' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '뛰어서 건너면 안전해요?', options: ['네', '아니요, 걸어요'], answer: 1, difficulty: 0.1, explain: '뛰면 넘어질 수 있어요. 걸어서 건너요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '눈·귀·발 건너기 약속',
        items: [
          { type: 'table', prompt: '좋으면 ○, 안 되면 ×를 써요.', columns: ['행동', '○ / ×'], cells: [['좌우를 봐요', ''], ['뛰어서 건너요', ''], ['차 소리를 들어요', '']], answer: '○, ×, ○' },
          { type: 'draw', prompt: '횡단보도 앞에서 살피는 모습을 그려요.' },
        ],
        easy: { note: '눈·귀·발을 하나씩 떠올려요.', items: [{ type: 'draw', prompt: '좌우를 보는 내 눈을 그려요.' }] },
      },
    }),
  ];

  // =====================================================================================================
  // 1학년 · 보도 안쪽으로 걸어요
  const SIDE = MOD('saf-traffic.e12.sidewalk', [1]);
  const STREET = [{ name: '보도', cells: [[0, 0], [1, 0], [2, 0], [3, 0]], color: 'mint' }, { name: '차도', cells: [[0, 1], [1, 1], [2, 1], [3, 1]], color: 'peach' }];
  const T_SIDE = [
    SIDE({
      id: 'saf-traffic.e12.sidewalk.intro.twoway', type: 'intro', title: '사람 길과 차 길 찾기',
      method: '사람 길과 차 길 찾기', tool: 'map', minutes: 5,
      levels: { easy: '교사가 보도·차도 두 줄만 있는 지도를 짚으며 "사람 길, 차 길"을 함께 말한다.', base: '시연을 보고 보도 줄에 핀이 꽂히는 까닭을 말한다.', challenge: '보도가 없는 골목에서는 어떻게 걸을지(길 가장자리로, 어른과 함께) 짝에게 말한다.' },
      intro: {
        teacher: '"길에는 사람이 다니는 길과 차가 다니는 길이 따로 있어요. 어느 쪽이 사람 길일까요?" 지도의 두 줄을 손으로 짚게 한 뒤 시연 단추로 보도 줄에 핀이 꽂히는 모습을 보여 준다. "차가 없으면 차도로 걸어도 돼요"라는 말이 나오면 "차가 뒤에서 오면 내가 먼저 볼 수 있을까요?"라고 되묻는다. 오늘은 보도에서도 차도에서 먼 안쪽으로 걷는 법을 배운다고 밝힌다.',
        student: '사람 길과 차 길을 손가락으로 하나씩 짚으며 이름을 말해 보아요.',
        demo: { tool: 'map', options: { grid: [4, 2], regions: STREET, title: '우리 동네 길' }, sequence: [{ pin: [1, 0] }] },
        art: { draw: 'a paper street cut in two strips — a mint sidewalk where paper children walk holding hands and a peach road where paper cars drive', banner: '사람 길, 차 길' },
      },
    }),
    SIDE({
      id: 'saf-traffic.e12.sidewalk.intro.goodbad', type: 'intro', title: '보도에서 좋아요·안돼요',
      method: '좋아요·안돼요 고르기', tool: 'emotion', minutes: 5,
      levels: { easy: '교사가 장면 두 개(안쪽으로 걷기·뛰어가기)만 읽어 주고 엄지로 답하게 한다.', base: '장면 네 개가 좋아요·안돼요로 나뉘는 시연을 보며 소리 내어 따라 말한다.', challenge: '안돼요 장면을 어떻게 바꾸면 좋아요가 될지 말한다.' },
      intro: {
        teacher: '"이 친구는 보도에서 어떻게 걷고 있나요? 좋아요일까요, 안돼요일까요?" 장면을 하나씩 읽어 주며 엄지 위·아래로 답하게 한 뒤 시연 단추로 두 칸에 나뉘는 모습을 보여 준다. "연석 위를 걸으면 재밌어요"라는 말이 나오면 "발이 미끄러지면 어느 쪽으로 넘어질까요? 바로 옆이 차도예요"라고 되묻는다.',
        student: '좋아요 장면엔 엄지를 위로, 안돼요 장면엔 엄지를 아래로 해요.',
        demo: { tool: 'emotion', options: { mode: 'sort', slots: ['좋아요', '안돼요'], cards: [C('in', '안쪽으로 걸어요'), C('curb', '연석 위 걷기'), C('hand', '손잡고 걸어요'), C('run', '뛰어가요')], shuffle: false }, sequence: [{ sort: { 좋아요: ['in', 'hand'], 안돼요: ['curb', 'run'] } }] },
        art: { draw: 'a paper sidewalk scene: one child walks on the inner side away from the road, another balances on the curb edge with a car close by', banner: '보도 안쪽으로 걸어요', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
      },
    }),
    SIDE({
      id: 'saf-traffic.e12.sidewalk.activity.line', type: 'activity', title: '보도에서 걷는 이야기 잇기',
      method: '보도에서 걷는 이야기 잇기', tool: 'story', minutes: 15,
      levels: { easy: '첫 장면이 놓여 있고, 놓으면 바로 맞는지 알려 준다.', base: '장면 3장 차례 놓기, 말풍선 채우기, 위험한 장면 고르기를 스스로 한다.', challenge: '차례 놓기에 "연석 위 걸어요" 틀린 장면이 섞여 빼고 놓는다.' },
      activity: {
        title: '친구 셋의 등굣길 이야기', tool: 'story',
        teacher: '"하나·두리·세찬이가 함께 학교에 가요. 무엇부터 할까요?" 장면을 놓은 뒤 이야기를 처음부터 소리 내어 읽는다. 위험한 장면을 고를 때 "장난치며 걸어도 보도니까 괜찮아요"라는 학생에게 "밀다가 친구가 차도 쪽으로 넘어지면 어떻게 될까요?"라고 묻는다. 보도 안에서도 차도에서 먼 안쪽으로 걷는다는 점을 짚는다.',
        task: '이야기 장면을 차례로 놓고, 말풍선을 채우고, 위험한 장면을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          ORDER3('등굣길 이야기를 차례로 놓아요.', [C('door', '대문을 나서요', 'house'), C('walk', '보도로 가요', 'tree'), C('in', '안쪽으로 걸어요', 'flower')], C('curb', '연석 위 걸어요', 'cloud'), 0.1),
          { prompt: '친구에게 할 말을 채워요.', toolOptions: { mode: 'fill', slots: [{ id: 'b', who: '나', label: '안쪽으로 ___.' }], cards: ['걸어요', '뛰어요', '밀어요'] }, target: { fill: { b: '걸어요' } }, difficulty: 0.15 },
          { prompt: '위험한 장면을 골라요.', toolOptions: { mode: 'pick', basket: '위험해요', cards: [C('curb', '연석 위 걷기'), C('in', '안쪽으로 걷기'), C('play', '장난치며 걷기'), C('hand', '손잡고 걷기')] }, target: { pick: ['curb', 'play'] }, difficulty: 0.2,
            conclude: '보도에서는 차도에서 먼 안쪽으로, 장난치지 않고 걸어요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '보도에서 어디로 걸어요?', options: ['안쪽', '연석 위'], answer: '안쪽' }] },
    }),
    SIDE({
      id: 'saf-traffic.e12.sidewalk.activity.hand', type: 'activity', title: '어른과 손잡는 쪽 고르기',
      method: '어른과 손잡는 쪽 고르기', tool: 'body', minutes: 14,
      levels: { easy: '짚은 곳의 이름이 바로 보인다.', base: '이름 없이 짚고, 차도 쪽에 누가 설지 보기에서 고른다.', challenge: '보도가 좁을 때 어떻게 걸을지까지 보기에서 고른다.' },
      activity: {
        title: '어른과 걸을 때 손과 자리 고르기', tool: 'body',
        teacher: '"어른과 함께 걸을 때 무엇을 잡을까요? 차도 쪽에는 누가 설까요?" 종이 몸을 짚기 전에 짝과 실제로 손을 잡아 보게 한다. "내가 차도 쪽에 서도 괜찮아요"라는 학생에게 "어른과 나 중에 운전자에게 더 잘 보이는 사람은 누구일까요?"라고 묻는다. 어른이 차도 쪽, 나는 안쪽에 서서 손을 잡는다는 점을 짚는다.',
        task: '종이 몸에서 짚고, 걷는 자리를 골라요.', levels: { easy: { names: true }, base: {}, challenge: {} },
        items: [
          { prompt: '어른 손을 잡을 때 쓰는 곳은요?', toolOptions: { mode: 'parts', parts: ['눈', '어깨', '팔꿈치', '손목', '무릎'] }, target: { parts: ['손목'] }, difficulty: 0.1,
            hints: ['어른과 이어지는 곳을 떠올려요.', '팔 끝 쪽이에요.', '손목을 골라요.'] },
          { prompt: '차도 쪽에는 누가 서요?', toolOptions: { mode: 'parts', parts: ['손목'], readOnly: true, ask: { q: '보도에서 차도 쪽에는 누가 서요?', choices: ['어른이 서요', '내가 서요'] } }, target: { pick: 0 }, difficulty: 0.15 },
          { prompt: '보도가 좁아요. 어떻게 걸어요?', toolOptions: { mode: 'parts', parts: ['발목', '무릎'], readOnly: true, ask: { q: '보도가 좁아요. 어떻게 걸어요?', choices: ['어른 뒤에 한 줄로', '옆으로 나란히', '차도로 나와요'] } }, target: { pick: 0 }, difficulty: 0.2,
            conclude: '어른 손을 잡고, 나는 안쪽에서 걸어요. 길이 좁으면 한 줄로 걸어요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '어른과 걸을 때 나는 어디?', options: ['안쪽', '차도 쪽'], answer: '안쪽' }] },
      notes: '종이 몸에 손 칸이 없어 손잡기는 손목을 짚는 것으로 대신하고, 짝과 실제로 손을 잡아 본다.',
    }),
    SIDE({
      id: 'saf-traffic.e12.sidewalk.activity.line-up', type: 'activity', title: '줄 서서 걷는 차례 놓기',
      method: '줄 서서 걷는 차례 놓기', tool: 'timeline', minutes: 15,
      levels: { easy: '첫 칸에 카드가 놓여 있고, 놓으면 바로 맞는지 알려 준다.', base: '줄 서서 걷는 카드 3장을 차례로 놓고, 걷기 전·걷는 중으로 나눈다.', challenge: '카드가 섞여 나오고, 끝 문항에서 줄에서 벗어난 친구에게 할 말 카드를 고른다.' },
      activity: {
        title: '현장 체험 날 줄지어 걷기', tool: 'timeline',
        teacher: '"현장 체험 학습 날, 학교 밖 보도를 줄지어 걸어요. 무엇부터 할까요?" 카드를 놓은 뒤 교실 뒤에서 짝과 줄지어 걸어 본다. "앞에 친구를 따라 뛰어가면 돼요"라는 학생에게 "줄이 끊어지면 선생님이 나를 볼 수 있을까요?"라고 묻는다. 줄에서 벗어난 친구에게는 손을 잡아끄는 것이 아니라 "줄로 들어와"라고 말해 준다는 점을 짚는다.',
        task: '카드를 먼저 할 것부터 왼쪽에 놓고, 때에 맞게 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          Object.assign(ORDER3('줄지어 걷는 차례로 놓아요.', [C('line', '두 줄로 서요'), C('follow', '선생님 따라가요'), C('in', '안쪽으로 걸어요')], null, 0.1), {}),
          { prompt: '걷기 전과 걷는 중으로 나눠요.', toolOptions: { mode: 'sort', slots: [{ id: 'before', label: '걷기 전' }, { id: 'during', label: '걷는 중' }], cards: ['짝 확인해요', '안쪽으로 걸어요', '줄 서요', '앞사람 따라가요'] }, target: { sort: { before: ['짝 확인해요', '줄 서요'], during: ['안쪽으로 걸어요', '앞사람 따라가요'] } }, difficulty: 0.15 },
          { prompt: '줄 밖 친구에게 할 말을 골라요.', toolOptions: { mode: 'pick', basket: '할 말', cards: [C('run', '먼저 뛰어가'), C('come', '줄로 들어와'), C('me', '나도 나갈래')] }, target: { pick: ['come'] }, difficulty: 0.2,
            conclude: '줄을 서고, 선생님을 따라, 보도 안쪽으로 걸어요.' },
        ].map((it) => Object.assign(it, { toolOptions: Object.assign({ axis: ['먼저', '나중'] }, it.toolOptions) })),
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '줄을 서서 선생님을 ___.', answer: '따라가요' }] },
    }),
    SIDE({
      id: 'saf-traffic.e12.sidewalk.activity.walk', type: 'activity', title: '교실 보도 걷기 연습',
      method: '교실 보도 걷기 연습', tool: 'timer', minutes: 14,
      levels: { easy: '혼자 한 줄로 걷고, 걷고 멈추기 두 번이 되게 타이머를 맞춘다.', base: '둘씩 손잡고 걷고, 세 번이 되게 맞춘 뒤 해낸 것을 표시한다.', challenge: '앞사람과 간격을 지키며 줄지어 걷고, 네 번이 되게 맞춘다.' },
      activity: {
        title: '바닥 보도 선 따라 걷고 멈추기', tool: 'timer',
        teacher: '"교실 바닥의 초록 테이프는 보도, 노란 테이프는 차도예요. 신호음이 울리면 걷고, 멈춤 구간에는 그 자리에 서요." 타이머의 운동 칸은 걷기, 쉬기 칸은 멈추기로 정한 것이 우리 반 놀이 약속이라고 먼저 말한다. 노란 테이프 쪽으로 붙어 걷는 학생에게 "차도와 가까운 쪽이에요. 한 걸음 안쪽으로 옮겨 볼까요?"라고 말해 준다. 마친 뒤 해낸 것만 표시하게 한다.',
        task: '안전 점검을 하고, 걷기 차례와 횟수를 맞추고, 해낸 것에 표시해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '걷기 전 안전 점검을 해요.', toolOptions: { title: '걷기 전 점검', safety: ['바닥 선 확인', '신발 끈 묶기', '가방 바르게 메기'] }, target: { safety: true }, difficulty: 0.1 },
          { prompt: '걷기 연습 차례로 놓아요.', toolOptions: { title: '걷기 차례', cards: ['안쪽으로 걸어요', '보도 선 안에 서요', '짝 손 잡아요'] }, target: { order: ['보도 선 안에 서요', '짝 손 잡아요', '안쪽으로 걸어요'] }, difficulty: 0.15 },
          { prompt: '걷고 멈추기 세 번을 맞춰요.', toolOptions: { title: '걷기·멈추기 되풀이', plan: { work: 15, rest: 10, rounds: 1 } }, target: { plan: { rounds: 3 } }, difficulty: 0.15,
            hints: ['걷고 한 번 멈추면 한 번이에요.', '번 칸이 되풀이 수예요.', '번 칸을 3에 맞춰요.'],
            levels: { easy: { prompt: '걷고 멈추기 두 번을 맞춰요.', target: { plan: { rounds: 2 } } }, challenge: { prompt: '걷고 멈추기 네 번을 맞춰요.', target: { plan: { rounds: 4 } } } } },
          { prompt: '마친 뒤 해낸 것에 표시해요.', toolOptions: { title: '걷기 점검' }, target: { selfCheck: ['안쪽으로 걸었어요', '신호에 멈췄어요', '장난치지 않았어요'] }, difficulty: 0.15, conclude: '보도 안쪽으로 걷고, 멈출 때는 바로 멈춰요.' },
        ],
      },
      worksheet: { items: [{ type: 'check', prompt: '걷기 연습에서 해낸 것에 ✓ 해요.', options: ['안쪽으로 걸었어요', '짝과 손잡았어요', '바로 멈췄어요'] }] },
      notes: '바닥에 색 테이프로 보도(초록)·차도(노랑) 선을 미리 붙인다. 타이머 초 값은 놀이 진행용이다.',
    }),
    SIDE({
      id: 'saf-traffic.e12.sidewalk.wrap.pick', type: 'wrap', title: '보도 약속 카드 모으기',
      method: '보도 약속 카드 모으기', tool: 'mindmap', minutes: 6,
      levels: { easy: '교사가 카드를 하나씩 읽어 주고 맞는 카드 두 장을 함께 담는다.', base: '카드 6장 가운데 보도에서 지킬 카드 3장을 스스로 담는다.', challenge: '담은 카드 하나를 골라 몸짓으로 보이고 친구들이 맞힌다.' },
      wrap: {
        teacher: '"보도에서 지킬 약속만 바구니에 담아 볼까요?" 카드를 하나씩 소리 내어 읽고 담게 한다. "뛰어서" 카드를 담으려는 학생에게 "보도에서 뛰면 앞사람과 부딪히거나 차도 쪽으로 밀릴 수 있어요"라고 말해 준다. 출구 2번에서 "길 가운데로"를 고른 학생에게 보도가 없는 길은 길 가장자리로 어른과 함께 걷는다고 짚는다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '보도에서', basket: '보도에서', cards: ['안쪽으로', '뛰어서', '손잡고', '연석 위로', '천천히', '장난치며'] }, prompt: '보도 약속만 바구니에 담아요.', target: { pick: ['안쪽으로', '손잡고', '천천히'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '보도가 없는 길에서는요?', options: ['길 가운데로', '가장자리로 어른과'], answer: 1, difficulty: 0.1, explain: '보도가 없으면 길 가장자리로 어른과 함께 걸어요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '보도에서 지킬 약속',
        items: [
          { type: 'check', prompt: '보도 약속에 ✓ 해요.', options: ['안쪽으로 걸어요', '손잡고 걸어요', '천천히 걸어요'] },
          { type: 'draw', prompt: '보도 안쪽으로 걷는 내 모습을 그려요.' },
        ],
        easy: { note: '"안쪽으로, 손잡고"를 떠올려요.', items: [{ type: 'draw', prompt: '어른과 손잡은 모습을 그려요.' }] },
      },
    }),
    SIDE({
      id: 'saf-traffic.e12.sidewalk.wrap.check', type: 'wrap', title: '걷기 약속 점검표',
      method: '걷기 약속 점검표', tool: 'kitchen', minutes: 6,
      levels: { easy: '교사가 점검표 칸을 하나씩 읽어 주고 함께 표시한다.', base: '그림 점검표 세 칸을 스스로 읽고 내가 지킬 것에 표시한다.', challenge: '표시한 뒤 가족에게 알려 줄 약속 하나를 골라 짝에게 말한다.' },
      wrap: {
        teacher: '"오늘 배운 걷기 약속 가운데 나는 무엇을 지킬 수 있나요?" 점검표를 함께 읽고 표시하게 한다. 출구 2번에서 "네"를 고른 학생에게 "장난치다 보면 앞을 못 봐요. 길에서는 걷기만 하고 놀이는 놀이터에서 해요"라고 말해 준다. 오늘 집에 갈 때 가족과 손잡고 안쪽으로 걸어 보자고 마무리한다.',
        exitTicket: [
          CHECK('걷기 약속', [C('in', '안쪽으로 걷기'), C('hand', '어른 손 잡기'), C('nojoke', '장난 안 치기')], '내가 지킬 약속에 표시해요.'),
          { type: 'choice', prompt: '길에서 장난치며 걸어도 돼요?', options: ['네', '아니요'], answer: 1, difficulty: 0.1, explain: '길에서는 앞을 보고 걸어요. 장난은 놀이터에서 해요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '나의 걷기 약속',
        items: [
          { type: 'table', prompt: '좋으면 ○, 안 되면 ×를 써요.', columns: ['장면', '○ / ×'], cells: [['보도 안쪽으로 걸어요', ''], ['연석 위를 걸어요', ''], ['어른 손을 잡아요', '']], answer: '○, ×, ○' },
          { type: 'draw', prompt: '가족과 손잡고 걷는 모습을 그려요.' },
        ],
      },
    }),
  ];

  // =====================================================================================================
  // 1학년 · 학교 가는 길 위험한 곳
  const ROAD = MOD('saf-traffic.e12.schoolroad', [1]);
  const ZONE = { name: '어린이 보호구역', cells: [[1, 0], [2, 0], [3, 0], [1, 1], [2, 1], [3, 1]], color: 'buttercup' };
  const T_ROAD = [
    ROAD({
      id: 'saf-traffic.e12.schoolroad.intro.walkpic', type: 'intro', title: '등굣길 그림 따라가기',
      method: '등굣길 그림 따라가기', tool: 'story', minutes: 5,
      levels: { easy: '교사가 집·횡단보도·학교 세 장면만 읽어 주며 차례로 놓아 보인다.', base: '장면 네 장(골목 더하기)이 차례대로 놓이는 시연을 보며 소리 내어 따라 말한다.', challenge: '시연 뒤 우리 집에서 학교까지 빠진 장면 하나를 짝에게 말한다.' },
      intro: {
        teacher: '"우리 집에서 학교까지 오는 길에 무엇을 지나왔나요?" 장면 카드를 하나씩 읽어 준 뒤 시연 단추로 차례대로 놓이는 모습을 보여 준다. "우리 길은 아는 길이라 안 위험해요"라는 말이 나오면 "매일 다니는 길에도 차가 갑자기 나오는 곳이 있을까요?"라고 되묻는다. 오늘은 학교 가는 길에서 조심할 곳을 찾는다고 밝힌다.',
        student: '내가 학교에 올 때 지나온 곳을 하나 떠올려 짝에게 말해 보아요.',
        demo: { tool: 'story', options: { mode: 'order', slots: ['처음', '다음', '그다음', '끝'], cards: [C('cross', '횡단보도 건너요', 'sun'), C('home', '집을 나서요', 'house'), C('school', '학교에 와요', 'star'), C('alley', '골목을 지나요', 'tree')] }, sequence: [{ order: ['home', 'alley', 'cross', 'school'] }] },
        art: { draw: 'a winding paper path from a small paper house through an alley and across a crosswalk to a paper school with a flag', banner: '학교 가는 길' },
      },
    }),
    ROAD({
      id: 'saf-traffic.e12.schoolroad.intro.zone', type: 'intro', title: '어린이 보호구역 찾기',
      method: '어린이 보호구역 찾기', tool: 'map', minutes: 5,
      levels: { easy: '교사가 노란 칸을 크게 짚어 보이고 다 같이 "어린이 보호구역"을 말한다.', base: '시연에서 노란 칸에 핀이 꽂히는 모습을 보고 "여기선 차가 천천히 가요"를 따라 말한다.', challenge: '보호구역 안에서도 조심할 곳(횡단보도·골목 끝)을 하나 더 말한다.' },
      intro: {
        teacher: '"학교 둘레의 노란 칸을 보세요. 이곳은 어린이를 지키려고 차가 천천히 다니게 정한 곳이에요." 시연 단추로 노란 칸에 핀이 꽂히는 모습을 보여 준 뒤 다 같이 "여기선 차가 천천히 가요"를 따라 말한다. "보호구역이니까 찻길에서 놀아도 돼요"라는 말이 나오면 "차가 천천히 가도 갑자기 뛰어나오면 멈출 수 있을까요?"라고 되묻는다.',
        student: '"여기선 차가 천천히 가요!"를 따라 말하고, 그래도 나는 조심해요.',
        demo: { tool: 'map', options: { grid: [4, 3], regions: [ZONE], places: [{ name: '학교', icon: 'school', at: [2, 0] }, { name: '집', icon: 'house', at: [0, 2] }], title: '학교 둘레' }, sequence: [{ pin: [2, 1] }] },
        art: { draw: 'a paper school surrounded by a yellow paper zone on the road, with a slow paper car and children walking on the sidewalk', banner: '어린이 보호구역', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
      },
      notes: '실제 어린이 보호구역 표지판과 노란 바닥 표시 사진을 함께 보여 준다(교구는 표지판을 그리지 못한다).',
    }),
    ROAD({
      id: 'saf-traffic.e12.schoolroad.activity.danger', type: 'activity', title: '위험한 곳에 빨간 핀 꽂기',
      method: '위험한 곳에 빨간 핀 꽂기', tool: 'map', minutes: 15,
      levels: { easy: '위험한 곳이 두 곳만 있는 지도에 꽂고, 꽂으면 칸 이름이 바로 보인다.', base: '위험한 곳 세 곳(골목 끝·주차장 입구·찻길 건널목)이 있는 지도에 꽂는다.', challenge: '놀이터·문구점까지 있는 지도에 꽂고, 끝 문항에서 그곳에서 할 일을 고른다.' },
      activity: {
        title: '등굣길 지도에 조심할 곳 꽂기', tool: 'map',
        teacher: '"이 등굣길에서 차를 만날 수 있는 곳은 어디일까요?" 핀을 꽂을 때마다 그곳에서 무슨 일이 생길 수 있는지 교사가 소리 내어 설명한다(골목 끝 → 차가 갑자기 나와요, 주차장 입구 → 차가 드나들어요, 건널목 → 찻길을 건너요). "아는 골목이라 괜찮아요"라는 학생에게 "운전하는 사람도 골목 끝에서 나를 미리 볼 수 있을까요?"라고 묻는다. 우리 학교 앞에도 이런 곳이 있는지 떠올리게 한다.',
        task: '조심할 곳에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
        items: (() => {
          const G = [4, 3];
          const HOME = { name: '집', icon: 'house', at: [0, 2] }; const SCH = { name: '학교', icon: 'school', at: [3, 0] };
          const ALLEY = { name: '골목 끝', icon: 'dot', at: [1, 2] }; const PARK = { name: '주차장 입구', icon: 'dot', at: [2, 1] }; const CW = { name: '찻길 건널목', icon: 'dot', at: [3, 1] };
          const MORE = [{ name: '놀이터', icon: 'park', at: [0, 0] }, { name: '문구점', icon: 'market', at: [1, 0] }];
          return [
            PIN('차가 갑자기 나오는 골목에 꽂아요.', G, [HOME, SCH, ALLEY, PARK, CW], [HOME, SCH, ALLEY, PARK], MORE, '골목 끝', 0.1),
            PIN('차가 드나드는 곳에 꽂아요.', G, [HOME, SCH, ALLEY, PARK, CW], [HOME, SCH, ALLEY, PARK], MORE, '주차장 입구', 0.15),
            PIN('찻길을 건너는 곳에 꽂아요.', G, [HOME, SCH, ALLEY, PARK, CW], [HOME, SCH, ALLEY, CW], MORE, '찻길 건널목', 0.2),
            { prompt: '골목 끝에서 무엇을 해요?', toolOptions: { grid: G, places: [HOME, SCH, ALLEY, PARK, CW], readOnly: true, ask: { q: '골목 끝에 왔어요. 무엇을 해요?', choices: ['멈추고 살펴요', '뛰어 나가요', '눈 감고 가요'] } }, target: { pick: 0 }, difficulty: 0.2, conclude: '골목 끝·주차장 입구·건널목에서는 멈추고 살펴요.' },
          ];
        })(),
      },
      worksheet: { items: [{ type: 'choice', prompt: '차가 드나드는 곳은?', options: ['주차장 입구', '교실'], answer: '주차장 입구' }] },
      notes: '지도 핀 색은 바꿀 수 없어 "빨간 핀"은 말로만 쓴다. 문항마다 핀 하나라 위험한 곳 세 곳을 세 문항으로 나눴다.',
    }),
    ROAD({
      id: 'saf-traffic.e12.schoolroad.activity.feel', type: 'activity', title: '이런 곳에서 내 마음은',
      method: '이런 곳에서 내 마음은', tool: 'emotion', minutes: 14,
      levels: { easy: '마음 크기를 고르고, 주차장 장면에서 보기 2개 가운데 고르면 결과가 바로 보인다.', base: '마음 크기, 주차장 장면, 친구 장면을 차례로 고르고 결과는 확인한 뒤에 보인다.', challenge: '장면마다 헷갈리는 보기 1개가 더 있고, 친구에게 할 말까지 고른다.' },
      activity: {
        title: '주차장 입구에서 차가 나와요', tool: 'emotion',
        teacher: '"주차장 입구를 지나는데 차가 쑥 나왔어요. 내 마음은 어떨까요?" 마음 크기를 고른 뒤 "놀란 마음이 들 때 몸은 어떻게 할까요?"로 이어 간다. "앞으로 빨리 뛰어 지나가요"를 고른 학생에게 "운전자가 나를 못 봤다면 내가 뛰는 쪽으로 차가 갈 수도 있어요"라고 묻는다. 놀라거나 조심스러운 마음은 멈추라는 신호라고 짚는다.',
        task: '장면을 보고 마음과 할 일을 골라요.', levels: { easy: {}, base: { revealAfterCheck: true }, challenge: { revealAfterCheck: true } },
        items: [
          { prompt: '차가 나올 때 내 마음 크기는?', toolOptions: { mode: 'scale', situation: '주차장에서 차가 나와요.', feeling: '놀람', steps: 5, scaleLabels: { 1: '조금', 5: '아주 많이' } }, target: { level: 'any' }, difficulty: 0.1 },
          BRANCH('차가 나와요. 어떻게 해요?', '주차장에서 차가 나와요.',
            { id: 'stop', text: '멈춰서 기다려요', result: '차가 다 나간 뒤 살피고 지나갔어요.', mood: '편안함' },
            { id: 'run', text: '앞으로 뛰어요', result: '차와 부딪힐 뻔했어요.', mood: '놀람' },
            { id: 'back', text: '뒤로 달려요', result: '뒤에 오던 자전거와 부딪힐 수 있어요.', mood: '걱정' }, 0.15),
          BRANCH('친구가 앞서 뛰어가요.', '친구가 입구로 뛰어가요.',
            { id: 'call', text: '"멈춰!" 불러요', result: '친구가 멈춰 함께 살폈어요.', mood: '뿌듯함' },
            { id: 'chase', text: '따라 뛰어요', result: '둘 다 차 앞에 설 수 있어요.', mood: '무서움' },
            { id: 'quiet', text: '못 본 척해요', result: '친구 혼자 위험해질 수 있어요.', mood: '걱정' }, 0.2, { conclude: '놀라는 곳에서는 멈추고, 친구에게도 "멈춰!"라고 알려요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '주차장 입구에서 차가 나와요.', options: ['멈춰서 기다려요', '뛰어서 지나가요'], answer: '멈춰서 기다려요' }] },
      notes: '마음 크기 문항은 정답이 없다. 놀란 일이 있었는지 묻지 않고, 그림 장면의 마음으로만 이야기한다.',
    }),
    ROAD({
      id: 'saf-traffic.e12.schoolroad.activity.safe-way', type: 'activity', title: '안전한 길 고르기',
      method: '안전한 길 고르기', tool: 'kitchen', minutes: 15,
      levels: { easy: '길 카드 4장 가운데 안전한 길 2장을 담는다.', base: '길 카드 6장 가운데 안전한 길 3장을 담고, 안전한 까닭 카드를 담는다.', challenge: '"지름길 골목" 함정 카드가 섞인 7장에서 고르고, 길과 까닭을 짝 짓는다.' },
      activity: {
        title: '두 갈래 길에서 안전한 길 담기', tool: 'kitchen',
        teacher: '"학교 가는 길이 두 갈래예요. 가까운 찻길 옆 길과 조금 먼 보도 길 가운데 어느 쪽으로 갈까요?" 카드를 담을 때마다 그 길을 걷는 흉내를 낸다. "가까운 길이 가장 좋아요"라는 학생에게 "가까워도 보도가 없으면 차와 얼마나 가까이 걸을까요?"라고 묻는다. 조금 돌아가도 보도와 신호등이 있는 길이 안전한 길이라는 점을 짚는다.',
        task: '안전한 길 카드와 까닭 카드를 담아요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          PICK('안전한 길 카드를 담아요.', '안전한 길', ['보도 있는 길', '신호등 있는 길', '밝은 큰길'], ['찻길 옆 길', '주차장 사이', '공사장 옆'], '지름길 골목', 0.1, {}, { autoMotif: false }),
          { prompt: '안전한 까닭을 담아요.', toolOptions: { mode: 'pick', basket: '까닭', autoMotif: false, cards: [C('walk', '보도가 있어요'), C('near', '가까워요'), C('sig', '신호등이 있어요'), C('fast', '빨리 가요')] }, target: { pick: ['walk', 'sig'] }, difficulty: 0.15 },
          { prompt: '길과 까닭을 이어요.', toolOptions: { mode: 'match', autoMotif: false, slots: [{ id: 'a', label: '보도 길' }, { id: 'b', label: '신호등 길' }], cards: [C('own', '사람 길이 따로'), C('stopcar', '차가 멈춰 줘요'), C('quick', '빨리 가요')] }, target: { match: { a: 'own', b: 'stopcar' } }, difficulty: 0.2,
            conclude: '조금 멀어도 보도와 신호등이 있는 길로 다녀요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '학교 가는 길로 골라요.', options: ['조금 먼 보도 길', '가까운 찻길 옆 길'], answer: '조금 먼 보도 길' }] },
    }),
    ROAD({
      id: 'saf-traffic.e12.schoolroad.activity.tour', type: 'activity', title: '우리 학교 앞 살펴보기',
      method: '우리 학교 앞 살펴보기', tool: 'timer', minutes: 14,
      levels: { easy: '살펴볼 곳 카드 2장(정문·횡단보도)의 차례를 정하고 나가기 전 점검을 한다.', base: '정문 → 횡단보도 → 보도 3곳 차례를 정하고, 살펴본 곳에 표시한다.', challenge: '교사와 함께 실제 정문 앞을 걸으며 살펴본 곳에 표시한다(주차장 입구 카드까지 4곳).' },
      activity: {
        title: '정문 앞 둘러볼 차례 정하기', tool: 'timer',
        teacher: '"오늘은 우리 학교 정문 앞을 살펴볼 거예요. 어디부터 볼까요?" 차례를 정한 뒤 나가기 전 약속을 하나씩 소리 내어 확인한다. 실제로 나가지 못하면 교실 창문이나 그림으로 살펴본다. "횡단보도까지 뛰어가요"라는 학생에게 "줄에서 먼저 나가면 선생님이 나를 지켜볼 수 있을까요?"라고 묻는다. 살펴본 곳마다 "여기서 조심할 것은?"을 한 가지씩 말하게 한다.',
        task: '둘러볼 차례를 정하고, 나가기 전 점검을 하고, 살펴본 곳에 표시해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '둘러볼 차례로 카드를 놓아요.', toolOptions: { title: '둘러볼 곳', cards: ['보도', '정문', '횡단보도'] }, target: { order: ['정문', '횡단보도', '보도'] }, difficulty: 0.1,
            levels: { easy: { prompt: '둘러볼 차례로 놓아요(2장).', toolOptions: { cards: ['횡단보도', '정문'] }, target: { order: ['정문', '횡단보도'] } }, challenge: { prompt: '둘러볼 차례로 놓아요(4장).', toolOptions: { cards: ['보도', '주차장 입구', '정문', '횡단보도'] }, target: { order: ['정문', '횡단보도', '보도', '주차장 입구'] } } } },
          { prompt: '나가기 전 약속을 확인해요.', toolOptions: { title: '나가기 전 점검', safety: ['선생님 따라가기', '짝 손 잡기', '줄에서 안 벗어나기'] }, target: { safety: true }, difficulty: 0.15 },
          { prompt: '살펴본 곳에 표시해요.', toolOptions: { title: '살펴본 곳' }, target: { selfCheck: ['정문 앞', '횡단보도', '보도'] }, difficulty: 0.15, conclude: '정문·횡단보도·보도마다 조심할 것을 찾아 기억해요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '살펴본 곳을 써요.', text: '우리 학교 정문 앞에는 ___이 있어요.', answer: '(예) 횡단보도' }] },
      notes: '정문 앞 실제 둘러보기는 다른 교사·보호자 도움이 있을 때만 한다. 사진을 쓰지 않고 그림 카드로 대신해도 된다.',
    }),
    ROAD({
      id: 'saf-traffic.e12.schoolroad.wrap.mypin', type: 'wrap', title: '내 길 약속 그물',
      method: '내 길 약속 그물', tool: 'mindmap', minutes: 6,
      levels: { easy: '교사가 "골목 끝" 가지를 먼저 채워 보이고 나머지를 함께 채운다.', base: '세 가지(골목 끝·횡단보도·주차장)에 할 일 카드를 스스로 넣는다.', challenge: '"뛰어 지나가요" 함정 카드를 왜 빼는지 말하며 넣는다.' },
      wrap: {
        teacher: '"학교 가는 길의 세 곳에서 나는 무엇을 할까요?" 가지마다 카드를 넣고 그 동작을 몸으로 해 본다. 출구 2번에서 "네"를 고른 학생에게 "가까운 길보다 차를 덜 만나는 길이 좋은 길이에요"라고 말해 준다. 집에 가서 가족과 함께 등굣길을 한 번 걸으며 오늘 찾은 곳을 보여 드리자고 마무리한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '학교 가는 길', slots: ['골목 끝', '횡단보도', '주차장'], cards: ['멈추고 살펴요', '신호 지켜요', '차 나오나 봐요', '뛰어 지나가요'] }, prompt: '곳마다 할 일 카드를 넣어요.', target: { match: { '골목 끝': '멈추고 살펴요', 횡단보도: '신호 지켜요', 주차장: '차 나오나 봐요' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '가까운 길이 늘 좋은 길이에요?', options: ['네', '아니요, 안전한 길'], answer: 1, difficulty: 0.1, explain: '조금 멀어도 보도와 신호등이 있는 길이 좋아요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '학교 가는 길 약속',
        items: [
          { type: 'check', prompt: '내가 지킬 약속에 ✓ 해요.', options: ['골목 끝에서 멈춰요', '횡단보도에서 신호를 지켜요', '주차장 입구에서 살펴요'] },
          { type: 'draw', prompt: '학교 가는 길에서 조심할 곳을 그려요.' },
        ],
        easy: { note: '"멈추고 살펴요"를 떠올려요.', items: [{ type: 'draw', prompt: '골목 끝에서 멈춘 모습을 그려요.' }] },
      },
    }),
    ROAD({
      id: 'saf-traffic.e12.schoolroad.wrap.tell', type: 'wrap', title: '우리 반 오는 길 그림그래프',
      method: '우리 반 걷는 길 그림그래프', tool: 'chart', minutes: 6,
      levels: { easy: '교사가 줄마다 사람 그림을 함께 세고 가장 많은 줄을 고른다.', base: '세 줄을 스스로 세어 가장 많은 줄을 고른다.', challenge: '가장 적은 줄도 짚고, 그 친구들이 조심할 일을 말한다.' },
      wrap: {
        teacher: '"이 그림그래프는 수업을 위해 지은 가상의 우리 반이에요. 학교에 어떻게 오는지 그림 하나가 친구 한 명이에요." 줄마다 손가락으로 세게 한 뒤 가장 많은 줄을 고른다. 출구 2번에서 "창밖에 손 내밀기"를 고른 학생에게 "차 밖으로 내민 손은 지나가는 것에 부딪힐 수 있어요"라고 말해 준다. 걸어서 오든 차로 오든 저마다 조심할 일이 있다고 마무리한다.',
        exitTicket: [
          GRAPH('우리 반 오는 길(가상)', [['걸어서', 7], ['차 타고', 4], ['버스 타고', 2]], '가장 많은 줄은?', 0, '그래프를 보고 가장 많은 줄을 골라요.'),
          { type: 'choice', prompt: '차 타고 오는 친구가 할 일은?', options: ['안전띠 매기', '창밖에 손 내밀기'], answer: 0, difficulty: 0.1, explain: '차를 타면 안전띠를 매요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '우리 반은 어떻게 올까?',
        items: [
          { type: 'table', prompt: '그래프를 보고 수를 써요.', columns: ['오는 길', '친구 수'], cells: [['걸어서', ''], ['차 타고', ''], ['버스 타고', '']], answer: '7, 4, 2' },
          { type: 'draw', prompt: '내가 학교에 오는 모습을 그려요.' },
        ],
      },
      notes: '그림그래프 수는 수업용 가상 자료다. 실제 반 조사를 하면 학생 이름 없이 손 들기 수로만 바꿔 쓴다.',
    }),
  ];

  // =====================================================================================================
  // 1학년 · 차와 통학버스 바르게 타고 내리기
  const RIDE = MOD('saf-traffic.e12.ride', [1]);
  const T_RIDE = [
    RIDE({
      id: 'saf-traffic.e12.ride.intro.busstop', type: 'intro', title: '통학버스 기다리는 이야기',
      method: '통학버스 기다리는 이야기', tool: 'story', minutes: 5,
      levels: { easy: '교사가 장면 세 장(줄 서요·버스가 서요·타요)만 읽어 주며 놓아 보인다.', base: '장면 네 장이 차례대로 놓이는 시연을 보고 소리 내어 따라 말한다.', challenge: '"버스로 뛰어가요" 장면을 하나 더 보여 주고 왜 빼야 하는지 말한다.' },
      intro: {
        teacher: '"통학버스가 오고 있어요. 버스가 오면 바로 뛰어갈까요?" 장면 카드를 하나씩 읽어 준 뒤 시연 단추로 차례대로 놓이는 모습을 보여 준다. "먼저 타려고 뛰어가요"라는 말이 나오면 "버스가 아직 움직이는데 가까이 가면 기사님이 나를 볼 수 있을까요?"라고 되묻는다. 오늘은 차와 통학버스를 바르게 타고 내리는 차례를 배운다고 밝힌다.',
        student: '줄 서서 기다리는 흉내를 내고, 버스가 서면 한 명씩 타는 흉내를 내요.',
        demo: { tool: 'story', options: { mode: 'order', slots: ['처음', '다음', '그다음', '끝'], cards: [C('board', '차례로 타요', 'house'), C('line', '줄 서서 기다려요', 'tree'), C('sit', '자리에 앉아요', 'star'), C('stop', '버스가 완전히 서요', 'sun')] }, sequence: [{ order: ['line', 'stop', 'board', 'sit'] }] },
        art: { draw: 'paper children lined up behind a line at a paper bus stop while a yellow paper school bus comes to a full stop', banner: '줄 서서 기다려요' },
      },
    }),
    RIDE({
      id: 'saf-traffic.e12.ride.intro.belt', type: 'intro', title: '안전띠 지나가는 곳 짚기',
      method: '안전띠 지나가는 곳 고르기', tool: 'body', minutes: 5,
      levels: { easy: '교사가 어깨 하나만 짚어 보이고 다 같이 자기 어깨를 짚는다.', base: '어깨 → 가슴 → 허벅지 위쪽 차례로 짚는 시연을 보고 자기 몸을 따라 짚는다.', challenge: '띠가 목에 걸리면 왜 안 되는지 말한다.' },
      intro: {
        teacher: '"안전띠는 우리 몸 어디를 지나가야 할까요?" 종이 몸에서 어깨 → 가슴(어깨띠), 허벅지 위쪽(허리띠)을 차례로 짚는 시연을 보인 뒤 학생들이 자기 몸을 따라 짚게 한다. "띠가 목에 닿으면 편해요"라는 말이 나오면 "차가 갑자기 서면 띠가 몸을 꽉 잡아요. 목을 잡으면 어떻게 될까요?"라고 되묻는다. 허리띠는 말랑한 배가 아니라 단단한 뼈가 있는 허벅지 위쪽으로 지난다는 점을 짚는다.',
        student: '내 어깨, 가슴, 허벅지 위쪽을 차례로 짚으며 "딸깍!" 하고 말해요.',
        demo: { tool: 'body', options: { mode: 'parts', parts: ['목', '어깨', '가슴', '배', '허벅지', '무릎'], names: true }, sequence: [{ parts: ['어깨'] }, { parts: ['어깨', '가슴'] }, { parts: ['어깨', '가슴', '허벅지'] }] },
        art: { draw: 'a paper child sitting in a car seat with a seat belt crossing the shoulder and chest and a lap belt low over the hips', banner: '안전띠 딸깍', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
      },
      notes: '종이 몸에 골반 칸이 없어 허리띠 자리는 허벅지 위쪽으로 짚는다. 실제 의자와 끈으로 한 번 보여 주면 좋다.',
    }),
    RIDE({
      id: 'saf-traffic.e12.ride.intro.sound', type: 'intro', title: '버스 안 소리 듣고 고르기',
      method: '버스 안 소리 듣고 고르기', tool: 'emotion', minutes: 5,
      levels: { easy: '교사가 "딸깍"·"쿵쿵" 두 소리만 흉내 내고 엄지로 답하게 한다.', base: '소리 장면 네 개가 좋아요·안돼요로 나뉘는 시연을 보며 따라 말한다.', challenge: '안돼요 장면을 바꿀 말("앉아서 가자")을 짝에게 말한다.' },
      intro: {
        teacher: '"버스 안에서 이런 소리가 나요. 딸깍! 쿵쿵! 어떤 소리가 좋은 소리일까요?" 교사가 소리를 흉내 내며 장면을 읽어 준 뒤 시연 단추로 두 칸에 나뉘는 모습을 보여 준다. "쿵쿵 뛰면 재밌어요"라는 말이 나오면 "버스가 갑자기 서면 서 있던 친구는 어디로 갈까요?"라고 되묻는다.',
        student: '"딸깍!" 소리를 내며 안전띠 매는 흉내를 내 보아요.',
        demo: { tool: 'emotion', options: { mode: 'sort', slots: ['좋아요', '안돼요'], cards: [C('belt', '딸깍 안전띠'), C('jump', '쿵쿵 뛰기'), C('talk', '앉아서 이야기'), C('hand', '창밖 손 내밀기')], shuffle: false }, sequence: [{ sort: { 좋아요: ['belt', 'talk'], 안돼요: ['jump', 'hand'] } }] },
        art: { draw: 'inside a paper school bus: children seated with belts clicking, one child jumping in the aisle drawn with a small warning cloud', banner: '딸깍! 앉아서 가요' },
      },
    }),
    RIDE({
      id: 'saf-traffic.e12.ride.activity.board', type: 'activity', title: '타고 내리는 차례 놓기',
      method: '타고 내리는 차례 놓기', tool: 'timeline', minutes: 15,
      levels: { easy: '타는 카드 3장(안전띠 빼기)만 놓고, 놓으면 바로 맞는지 알려 준다.', base: '타는 카드 4장, 내리는 카드 3장을 차례로 놓고, 탈 때·내릴 때로 나눈다.', challenge: '카드가 섞여 나오고, 내리는 차례에 "버스 앞으로 가요" 틀린 카드가 섞여 빼고 놓는다.' },
      activity: {
        title: '통학버스 타는 차례·내리는 차례', tool: 'timeline',
        teacher: '"통학버스를 탈 때 무엇을 먼저 할까요?" 카드를 놓은 뒤 의자 두 줄을 버스처럼 놓고 차례대로 몸으로 해 본다. "차가 서기 전에 미리 타러 가요"를 앞에 두는 학생에게 "버스 바퀴 옆은 기사님이 잘 못 보는 곳이에요. 언제 다가갈까요?"라고 묻는다. 내릴 때도 차가 완전히 선 뒤 일어나고, 내리면 버스에서 멀리 떨어진다는 점을 짚는다.',
        task: '타고 내리는 카드를 먼저 할 것부터 왼쪽에 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          { prompt: '타는 차례로 놓아요.', toolOptions: { axis: ['먼저', '나중'], slots: 4, cards: [C('in', '타요'), C('belt', '안전띠 매요'), C('line', '줄 서요'), C('stop', '차가 서요')] }, target: { order: ['line', 'stop', 'in', 'belt'] }, difficulty: 0.1,
            levels: { easy: { prompt: '타는 차례로 놓아요(3장).', toolOptions: { slots: 3, cards: [C('in', '타요'), C('line', '줄 서요'), C('stop', '차가 서요')] }, target: { order: ['line', 'stop', 'in'] } } } },
          Object.assign(ORDER3('내리는 차례로 놓아요.', [C('stop', '차가 완전히 서요'), C('off', '내려요'), C('far', '멀리 떨어져요')], C('front', '버스 앞으로 가요'), 0.15), {}),
          { prompt: '탈 때와 내릴 때로 나눠요.', toolOptions: { mode: 'sort', slots: [{ id: 'on', label: '탈 때' }, { id: 'off', label: '내릴 때' }], cards: ['줄 서요', '멀리 떨어져요', '안전띠 매요', '서면 일어나요'] }, target: { sort: { on: ['줄 서요', '안전띠 매요'], off: ['멀리 떨어져요', '서면 일어나요'] } }, difficulty: 0.2,
            conclude: '줄 서고, 차가 서면 타고, 안전띠를 매요. 내리면 버스에서 멀리 떨어져요.' },
        ].map((it) => Object.assign(it, { toolOptions: Object.assign({ axis: ['먼저', '나중'] }, it.toolOptions) })),
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '버스에서 내리면 ___ 떨어져요.', answer: '멀리' }] },
    }),
    RIDE({
      id: 'saf-traffic.e12.ride.activity.beltdrill', type: 'activity', title: '안전띠 매기 따라 하기',
      method: '안전띠 매기 따라 하기', tool: 'timer', minutes: 14,
      levels: { easy: '카드 3장 차례를 맞추고 교사와 함께 두 번 따라 하게 타이머를 맞춘다.', base: '카드 3장 차례, 세 번 따라 하기, 짝이 확인해 준 것 표시까지 혼자 한다.', challenge: '"등을 붙여요" 카드까지 4장을 놓고, 짝에게 순서를 말로 알려 주며 네 번 따라 한다.' },
      activity: {
        title: '의자에 앉아 안전띠 매는 흉내', tool: 'timer',
        teacher: '"의자에 앉아서 안전띠 매는 흉내를 내 볼까요? 앉아요, 띠를 당겨요, 딸깍!" 차례를 맞춘 뒤 시작 단추를 누르면 운동 칸마다 한 번씩 반 전체가 흉내 낸다. 띠를 목 쪽으로 당기는 흉내를 내는 학생에게 "띠가 목이 아니라 어깨 가운데로 오게 해 볼까요?"라고 말해 준다. 짝이 "딸깍 소리 났니?"라고 물어 확인해 주게 한다.',
        task: '안전띠 매는 차례를 놓고, 몇 번 할지 맞추고, 확인한 것에 표시해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '안전띠 매는 차례로 놓아요.', toolOptions: { title: '안전띠 차례', cards: ['딸깍 끼워요', '앉아요', '띠를 당겨요'] }, target: { order: ['앉아요', '띠를 당겨요', '딸깍 끼워요'] }, difficulty: 0.1,
            levels: { challenge: { prompt: '안전띠 차례로 놓아요(4장).', toolOptions: { cards: ['딸깍 끼워요', '등을 붙여요', '앉아요', '띠를 당겨요'] }, target: { order: ['앉아요', '등을 붙여요', '띠를 당겨요', '딸깍 끼워요'] } } } },
          { prompt: '따라 하기 세 번을 맞춰요.', toolOptions: { title: '따라 하기 횟수', plan: { work: 10, rest: 5, rounds: 1 } }, target: { plan: { rounds: 3 } }, difficulty: 0.15,
            hints: ['한 번 매고 풀면 한 번이에요.', '번 칸이 따라 하는 수예요.', '번 칸을 3에 맞춰요.'],
            levels: { easy: { prompt: '따라 하기 두 번을 맞춰요.', target: { plan: { rounds: 2 } } }, challenge: { prompt: '따라 하기 네 번을 맞춰요.', target: { plan: { rounds: 4 } } } } },
          { prompt: '짝이 확인한 것에 표시해요.', toolOptions: { title: '안전띠 확인' }, target: { selfCheck: ['딸깍 소리 났어요', '띠가 안 꼬였어요', '어깨로 지나요'] }, difficulty: 0.15, conclude: '앉아서 등을 붙이고, 띠를 당겨 딸깍! 어깨로 지나는지 확인해요.' },
        ],
      },
      worksheet: { items: [{ type: 'check', prompt: '안전띠를 매고 확인해요.', options: ['딸깍 소리가 났어요', '띠가 어깨로 지나요', '띠가 꼬이지 않았어요'] }] },
      notes: '타이머 초 값은 따라 하기 진행용이다. 실제 차 좌석이 없으면 의자와 끈으로 흉내만 낸다.',
    }),
    RIDE({
      id: 'saf-traffic.e12.ride.activity.getoff', type: 'activity', title: '버스에서 내린 뒤 어디로 갈까',
      method: '내린 뒤 어디로 갈까', tool: 'map', minutes: 15,
      levels: { easy: '빨간 칸 없이 정류장·횡단보도만 있는 지도에 꽂는다.', base: '버스 앞·뒤 빨간 칸과 횡단보도가 함께 있는 지도에서 건널 곳과 피할 곳을 꽂는다.', challenge: '버스가 아직 서 있을 때 기다릴 칸까지 고른다.' },
      activity: {
        title: '정류장 지도에서 건널 곳 고르기', tool: 'map',
        teacher: '"버스에서 내렸어요. 길 건너 집에 가려면 어디로 건너야 할까요?" 핀을 꽂기 전에 버스 앞과 뒤가 왜 빨간 칸인지 묻는다. "버스 바로 앞으로 건너면 가까워요"라는 학생에게 "버스에 가려서 옆 차선 차가 나를 볼 수 있을까요? 나도 그 차를 볼 수 있을까요?"라고 묻는다. 버스가 떠난 뒤 보도 안쪽에서 기다렸다가 횡단보도로 건넌다는 점을 짚는다.',
        task: '알맞은 칸에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
        items: (() => {
          const G = [4, 3];
          const BUS = { name: '버스', icon: 'bus', at: [1, 1] }; const STOP = { name: '정류장', icon: 'dot', at: [1, 2] };
          const CW = { name: '횡단보도', icon: 'dot', at: [3, 1] }; const HOME = { name: '집', icon: 'house', at: [3, 0] }; const WAIT = { name: '보도 안쪽', icon: 'dot', at: [2, 2] };
          const RED = [{ name: '빨간 칸', cells: [[0, 1], [2, 1]], color: 'rose' }];
          return [
            { prompt: '버스가 떠난 뒤 건널 곳은요?', toolOptions: { grid: G, places: [BUS, STOP, CW, HOME], regions: RED }, target: { place: '횡단보도' }, difficulty: 0.1,
              levels: { easy: { toolOptions: { regions: [] } } } },
            { prompt: '건너면 안 되는 곳에 꽂아요.', toolOptions: { grid: G, places: [BUS, STOP, CW, HOME], regions: RED }, target: { region: '빨간 칸' }, difficulty: 0.15,
              hints: ['버스 때문에 차가 안 보이는 곳을 찾아요.', '버스 바로 옆 칸이에요.', '버스 앞뒤 빨간 칸이에요.'] },
            { prompt: '버스가 서 있을 때 기다릴 곳은?', toolOptions: { grid: G, places: [BUS, STOP, CW, HOME, WAIT], regions: RED }, target: { place: '보도 안쪽' }, difficulty: 0.2,
              levels: { easy: { toolOptions: { regions: [] } } },
              conclude: '버스 앞뒤로 건너지 않아요. 버스가 떠날 때까지 보도 안쪽에서 기다린 뒤 횡단보도로 건너요.' },
          ];
        })(),
      },
      worksheet: { items: [{ type: 'choice', prompt: '버스에서 내린 뒤 어디로 건너요?', options: ['버스가 떠난 뒤 횡단보도', '버스 바로 앞'], answer: '버스가 떠난 뒤 횡단보도' }] },
      notes: '지도는 문항마다 핀 하나다. 버스 앞·뒤를 한 지역("빨간 칸")으로 묶어 둘 중 어디에 꽂아도 맞게 했다.',
    }),
    RIDE({
      id: 'saf-traffic.e12.ride.activity.inside', type: 'activity', title: '차 안에서 어떻게 할까',
      method: '차 안에서 어떻게 할까', tool: 'emotion', minutes: 14,
      levels: { easy: '보기 2개, 고르면 결과가 바로 보이고 교사가 결과를 읽어 준다.', base: '장난치는 친구·내릴 곳 장면에서 고르고, 결과는 확인한 뒤에 보인다.', challenge: '장면마다 헷갈리는 보기 1개가 더 있고, 창밖으로 손 내미는 장면까지 판단한다.' },
      activity: {
        title: '버스 안 장면에서 할 일 고르기', tool: 'emotion',
        teacher: '"버스가 달리는데 친구가 일어나서 장난을 쳐요. 나는 어떻게 할까요?" 고른 뒤 의자에 앉아 짝과 친구·나 역할로 말해 본다. "같이 일어나서 놀아요"를 고른 학생에게 "버스가 갑자기 서면 서 있는 사람은 어떻게 될까요?"라고 묻는다. 앉아서 말로 알려 주고, 손과 머리는 창 안에 둔다는 점을 짚는다.',
        task: '장면을 듣고 어떻게 할지 골라요.', levels: { easy: {}, base: { revealAfterCheck: true }, challenge: { revealAfterCheck: true } },
        items: [
          BRANCH('친구가 일어나 장난쳐요.', '달리는 버스에서 장난쳐요.',
            { id: 'sit', text: '앉아서 말해요', result: '친구도 앉고 모두 안전하게 갔어요.', mood: '뿌듯함' },
            { id: 'up', text: '같이 일어나요', result: '버스가 서면 넘어질 수 있어요.', mood: '걱정' },
            { id: 'push', text: '앉으라고 밀어요', result: '밀다가 둘 다 넘어질 수 있어요.', mood: '놀람' }, 0.1),
          BRANCH('내릴 곳에 다 왔어요.', '곧 내릴 정류장이에요.',
            { id: 'wait', text: '서면 일어나요', result: '버스가 선 뒤 차례로 내렸어요.', mood: '편안함' },
            { id: 'early', text: '미리 일어나요', result: '버스가 흔들려 넘어질 수 있어요.', mood: '걱정' },
            { id: 'door', text: '문 앞에 서요', result: '문이 열릴 때 부딪힐 수 있어요.', mood: '놀람' }, 0.15),
          BRANCH('친구가 창밖에 손 내밀어요.', '친구가 창밖에 손을 내밀어요.',
            { id: 'in', text: '"손 안에!" 말해요', result: '친구가 손을 넣었어요.', mood: '뿌듯함' },
            { id: 'copy', text: '나도 내밀어요', result: '지나가는 것에 손이 닿을 수 있어요.', mood: '무서움' },
            { id: 'head', text: '머리도 내밀어요', result: '더 위험해요.', mood: '걱정' }, 0.2, { conclude: '차 안에서는 앉아서 가고, 손과 머리는 창 안에 둬요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '버스가 달려요. 어떻게 해요?', options: ['앉아서 가요', '일어나서 놀아요'], answer: '앉아서 가요' }] },
    }),
    RIDE({
      id: 'saf-traffic.e12.ride.activity.car', type: 'activity', title: '자동차 탈 때 약속 고르기',
      method: '자동차 탈 때 약속 고르기', tool: 'kitchen', minutes: 15,
      levels: { easy: '카드 4장 가운데 맞는 약속 2장을 담는다.', base: '카드 6장 가운데 맞는 약속 3장을 담고, 때마다 할 일을 짝 짓는다.', challenge: '"가까우면 띠 안 해" 함정 카드가 섞인 7장에서 고르고, 빼는 까닭을 말한다.' },
      activity: {
        title: '가족 차를 탈 때 지킬 약속', tool: 'kitchen',
        teacher: '"가족 차를 탈 때 지킬 약속만 바구니에 담아 볼까요?" 카드를 담을 때마다 그 동작을 흉내 낸다. "가까운 곳은 안전띠 안 해도 돼요"를 담으려는 학생에게 "차가 갑자기 서는 일은 먼 길에서만 생길까요?"라고 묻는다. "앞자리 어른 무릎에 앉으면 꼭 안겨 있으니 괜찮아요"라는 말에는 어른 팔보다 차가 서는 힘이 훨씬 세다는 점을 짚는다.',
        task: '맞는 약속 카드를 담고, 때와 할 일을 이어요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          PICK('차 탈 때 약속을 담아요.', '차 탈 때', ['뒷자리 앉기', '안전띠 매기', '인도 쪽 문'], ['앞자리 무릎', '창밖 손', '띠 없이 눕기'], '가까우면 띠 안 해', 0.1, {}, { autoMotif: false }),
          { prompt: '때와 할 일을 이어요.', toolOptions: { mode: 'match', autoMotif: false, slots: [{ id: 'on', label: '탈 때' }, { id: 'go', label: '갈 때' }, { id: 'off', label: '내릴 때' }], cards: [C('belt', '안전띠 매요'), C('side', '인도 쪽 내려요'), C('sit', '앉아서 가요')] }, target: { match: { on: 'belt', go: 'sit', off: 'side' } }, difficulty: 0.15 },
          { prompt: '내리는 차례로 놓아요.', toolOptions: { mode: 'order', autoMotif: false, cards: [C('out', '인도 쪽 내려요'), C('stop', '차가 서요'), C('look', '어른이 살펴요')] }, target: { order: ['stop', 'look', 'out'] }, difficulty: 0.2,
            conclude: '뒷자리에 앉아 안전띠를 매고, 내릴 때는 어른이 살핀 뒤 인도 쪽 문으로 내려요.' },
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '좋으면 ○, 안 되면 ×를 써요.', columns: ['약속', '○ / ×'], cells: [['뒷자리에 앉아요', ''], ['가까우면 띠를 안 매요', ''], ['인도 쪽 문으로 내려요', '']], answer: '○, ×, ○' }] },
    }),
    RIDE({
      id: 'saf-traffic.e12.ride.activity.role', type: 'activity', title: '통학버스 역할놀이 대본',
      method: '통학버스 역할놀이 대본', tool: 'story', minutes: 14,
      levels: { easy: '기사님 말풍선 하나를 채우고, 놓으면 바로 맞는지 알려 준다.', base: '기사님·친구·나 말풍선 세 개를 채우고 역할놀이 장면 차례를 놓는다.', challenge: '카드가 섞여 나오고, 대본을 채운 뒤 역할을 바꿔 한 번 더 한다.' },
      activity: {
        title: '기사님·친구·나 대본 채우기', tool: 'story',
        teacher: '"통학버스 역할놀이를 해요. 기사님은 무엇이라고 말할까요?" 말풍선을 채운 뒤 의자를 버스처럼 놓고 짝과 기사님·나 역할로 대본을 읽는다. "서서 기다려요"를 넣으려는 학생에게 "버스가 출발할 때 서 있으면 몸이 어디로 쏠릴까요?"라고 묻는다. 역할을 바꿔 한 번 더 하며 기사님 마음도 느껴 보게 한다.',
        task: '말풍선 빈칸을 채우고 역할놀이 장면을 차례로 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          { prompt: '기사님 말을 채워요.', toolOptions: { mode: 'fill', slots: [{ id: 'd', who: '기사님', label: '모두 ___ 기다려요.' }], cards: ['앉아서', '서서', '뛰면서'] }, target: { fill: { d: '앉아서' } }, difficulty: 0.1 },
          { prompt: '친구와 나의 말을 채워요.', toolOptions: { mode: 'fill', slots: [{ id: 'f', who: '친구', label: '안전띠 ___?' }, { id: 'm', who: '나', label: '응, ___!' }], cards: ['맸니', '맸어', '풀었어'] }, target: { fill: { f: '맸니', m: '맸어' } }, difficulty: 0.15 },
          ORDER3('역할놀이 장면을 차례로 놓아요.', [C('hi', '기사님께 인사해요', 'sun'), C('sit', '앉아서 띠 매요', 'star'), C('go', '버스가 출발해요', 'tree')], null, 0.2, { conclude: '버스에서는 앉아서 안전띠를 매고 기다려요.' }),
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '기사님 말을 따라 써요.', text: '모두 ___ 기다려요.', answer: '앉아서' }] },
    }),
    RIDE({
      id: 'saf-traffic.e12.ride.wrap.cheer', type: 'wrap', title: '안전띠 맨 날 그림그래프',
      method: '안전띠 맨 날 그림그래프', tool: 'chart', minutes: 6,
      levels: { easy: '교사가 별을 하나씩 함께 세고 수를 넣는다.', base: '그림그래프의 별을 스스로 세어 맨 날 수를 넣는다.', challenge: '수를 넣은 뒤 우리 모둠이라면 어떨지 짝과 견주어 말한다.' },
      wrap: {
        teacher: '"이 그래프는 수업을 위해 지은 가상의 친구 한 주예요. 별 하나가 안전띠를 맨 하루예요." 별을 손가락으로 세게 한 뒤 수를 넣는다. 출구 2번에서 "가까우면 안 매요"를 고른 학생에게 "가까운 길에서도 차는 갑자기 설 수 있어요. 그래서 매일 딸깍!"이라고 말해 준다. 오늘부터 집에 갈 때 차를 타면 딸깍 소리를 꼭 들어 보자고 마무리한다.',
        exitTicket: [
          { type: 'tool', tool: 'chart', options: { type: 'picture', mode: 'read', title: '친구가 안전띠 맨 날(가상)', unit: '일', data: [['맨 날', 4], ['안 맨 날', 1]], icons: [{ value: 1, name: '1일' }], icon: 'star', question: '안전띠를 맨 날은 며칠인가요?' }, prompt: '별을 세어 맨 날 수를 넣어요.', target: { value: 4 }, difficulty: 0.15 },
          { type: 'choice', prompt: '가까운 길도 안전띠를 매요?', options: ['가까우면 안 매요', '늘 매요'], answer: 1, difficulty: 0.1, explain: '가까운 길도 늘 안전띠를 매요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '딸깍! 안전띠',
        items: [
          { type: 'table', prompt: '안전띠를 맨 날에 ○ 해요.', columns: ['날', '○'], cells: [['월', ''], ['화', ''], ['수', ''], ['목', ''], ['금', '']], answer: '(스스로 표시)' },
          { type: 'draw', prompt: '안전띠를 맨 내 모습을 그려요.' },
        ],
      },
      notes: '그림그래프 수는 수업용 가상 자료다. 활동지 표는 집에서 한 주 동안 스스로 표시해 오는 과제로 쓴다.',
    }),
    RIDE({
      id: 'saf-traffic.e12.ride.wrap.promise', type: 'wrap', title: '타고 내리는 약속 점검표',
      method: '타고 내리는 약속 점검표', tool: 'kitchen', minutes: 6,
      levels: { easy: '교사가 점검표 칸을 하나씩 읽어 주고 함께 표시한다.', base: '그림 점검표 세 칸을 스스로 읽고 지킬 약속에 표시한다.', challenge: '표시한 뒤 가족에게 알려 줄 약속을 하나 골라 짝에게 말한다.' },
      wrap: {
        teacher: '"차와 버스를 탈 때 나는 무엇을 지킬 수 있나요?" 점검표를 함께 읽고 표시하게 한다. 출구 2번에서 "버스 앞으로"를 고른 학생에게 "버스에 가려서 옆으로 오는 차가 나를 못 봐요. 버스가 떠난 뒤 횡단보도로 건너요"라고 말해 준다. 가족에게 오늘 약속 하나를 꼭 알려 드리자고 마무리한다.',
        exitTicket: [
          CHECK('타고 내리기 약속', [C('line', '줄 서기'), C('belt', '안전띠 매기'), C('far', '멀리 떨어지기')], '내가 지킬 약속에 표시해요.'),
          { type: 'choice', prompt: '버스에서 내렸어요. 어디로?', options: ['버스 앞으로', '보도 안쪽으로'], answer: 1, difficulty: 0.1, explain: '내리면 버스에서 떨어져 보도 안쪽으로 가요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '타고 내리는 약속',
        items: [
          { type: 'check', prompt: '내가 지킬 약속에 ✓ 해요.', options: ['줄 서서 기다려요', '타면 안전띠를 매요', '내리면 멀리 떨어져요'] },
          { type: 'draw', prompt: '줄 서서 버스를 기다리는 모습을 그려요.' },
        ],
        easy: { note: '"줄, 딸깍, 멀리"를 떠올려요.', items: [{ type: 'draw', prompt: '줄 선 친구들을 그려요.' }] },
      },
    }),
    RIDE({
      id: 'saf-traffic.e12.ride.wrap.chant', type: 'wrap', title: '"딸깍 안전띠" 구호',
      method: '“딸깍 안전띠” 구호', tool: 'timer', minutes: 6,
      levels: { easy: '교사가 "타면 딸깍" 한 구절을 먼저 외치고 함께 따라 한다.', base: '구호 카드 세 장의 차례를 맞추고 동작과 함께 세 구절을 외친다.', challenge: '구호를 외친 뒤 친구 앞에서 이끌어 외친다.' },
      wrap: {
        teacher: '"타면 딸깍! (띠 매는 흉내) 서면 내려! (손바닥 아래로) 멀리 떨어져! (두 걸음 뒤로)" 구호 카드 차례를 맞춘 뒤 손뼉 박자에 맞춰 세 번 외친다. 출구 2번에서 "달릴 때 내려요"를 고른 학생에게 "차가 완전히 서야 문을 열어요. 조금이라도 움직이면 기다려요"라고 말해 준다. 마지막 구호는 한 친구가 앞에 나와 이끌게 한다.',
        exitTicket: [
          CHANT('딸깍 안전띠 구호', ['타면 딸깍', '서면 내려', '멀리 떨어져']),
          { type: 'choice', prompt: '차에서 언제 내려요?', options: ['달릴 때 내려요', '완전히 서면 내려요'], answer: 1, difficulty: 0.1, explain: '차가 완전히 선 뒤에 내려요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '타면 딸깍, 서면 내려',
        items: [
          { type: 'blank', prompt: '구호를 따라 써요.', text: '타면 딸깍, 서면 내려, ___ 떨어져!', answer: '멀리' },
          { type: 'draw', prompt: '구호 동작을 하는 내 모습을 그려요.' },
        ],
      },
    }),
  ];

  // =====================================================================================================
  // 2학년 · 우리 동네 교통 표지판
  const SIGN = MOD('saf-traffic.e12.signs', [2]);
  const T_SIGNS = [
    SIGN({
      id: 'saf-traffic.e12.signs.intro.hunt', type: 'intro', title: '동네 지도에서 표지판 찾기',
      method: '동네 지도에서 표지판 찾기', tool: 'map', minutes: 5,
      levels: { easy: '교사가 표지판 두 개(어린이 보호·횡단보도)가 있는 칸만 짚어 보인다.', base: '표지판 네 개가 있는 지도에서 어린이 보호 표지 칸에 핀이 꽂히는 시연을 본다.', challenge: '같은 모양(세모·네모·동그라미)끼리 묶어 말한다.' },
      intro: {
        teacher: '"우리 동네 지도에 표지판이 숨어 있어요. 학교 앞에는 어떤 표지판이 있을까요?" 칸을 하나씩 짚으며 표지판 이름을 읽어 준 뒤 시연 단추로 어린이 보호 표지 칸에 핀이 꽂히는 모습을 보여 준다. "표지판은 운전하는 어른만 봐요"라는 말이 나오면 "횡단보도 표지는 누구에게 여기서 건너라고 알려 줄까요?"라고 되묻는다. 오늘은 길에서 자주 보는 표지판의 뜻을 배운다고 밝힌다.',
        student: '학교 앞에서 본 적 있는 표지판 하나를 떠올려 짝에게 말해 보아요.',
        demo: { tool: 'map', options: { grid: [4, 3], title: '우리 동네', places: [{ name: '학교', icon: 'school', at: [2, 0] }, { name: '어린이 보호 표지', icon: 'dot', at: [2, 1] }, { name: '횡단보도 표지', icon: 'dot', at: [0, 1] }, { name: '놀이터', icon: 'park', at: [0, 2] }, { name: '자전거 길 표지', icon: 'dot', at: [3, 2] }] }, sequence: [{ pin: [2, 1] }] },
        art: { draw: 'a paper neighborhood with a school, a playground and small paper traffic signs on poles beside the road — a triangle sign near the school gate', banner: '표지판을 찾아요' },
      },
      notes: '교구가 표지판 그림을 그리지 못해 이름으로 나타낸다. 실제 표지판 사진(어린이 보호·횡단보도·자전거 길)을 칠판에 붙여 둔다.',
    }),
    SIGN({
      id: 'saf-traffic.e12.signs.intro.guess', type: 'intro', title: '표지판 뜻 맞히기',
      method: '표지판 뜻 맞히기', tool: 'emotion', minutes: 5,
      levels: { easy: '교사가 표지판 두 개의 그림을 보여 주고 뜻을 함께 말한다.', base: '표지판 세 개에 뜻 카드가 짝 지어지는 시연을 보며 소리 내어 따라 말한다.', challenge: '비슷해 보이는 두 표지판(사람이 걷는 그림 두 가지)을 견주어 다른 점을 말한다.' },
      intro: {
        teacher: '"이 표지판에는 어떤 그림이 있나요? 무엇을 알려 줄까요?" 실제 표지판 사진을 하나씩 보여 주며 그림 속 모양을 말하게 한 뒤(기다릴 반응: "아이 두 명이요", "자전거요") 시연 단추로 뜻 카드가 짝 지어지는 모습을 보여 준다. "그림이 비슷하면 뜻도 같아요"라는 말이 나오면 "사람이 걷는 그림이어도 모양과 색이 다르면 뜻이 달라요. 무엇이 다른지 볼까요?"라고 되묻는다.',
        student: '표지판 그림을 보고 무슨 뜻인지 짝에게 말해 보아요.',
        demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'kid', label: '세모 속 두 아이' }, { id: 'cross', label: '건너는 사람' }, { id: 'bike', label: '동그라미 자전거' }], cards: ['어린이 조심', '여기서 건너요', '자전거 길'], weather: false }, sequence: [{ match: { kid: '어린이 조심', cross: '여기서 건너요', bike: '자전거 길' } }] },
        art: { draw: 'three paper traffic signs on poles — a red-bordered triangle with two children, a blue sign with a walking person on stripes, and a blue circle with a bicycle', banner: '표지판은 길의 말' },
      },
      notes: '표지판 실물 사진을 꼭 보여 준다. 표지판 모양·색 설명은 공식 안내 자료로 확인한 뒤 쓴다(파일 첫머리 사람 확인 목록).',
    }),
    SIGN({
      id: 'saf-traffic.e12.signs.activity.match', type: 'activity', title: '표지판과 할 일 잇기',
      method: '표지판과 할 일 잇기', tool: 'mindmap', minutes: 15,
      levels: { easy: '가지 2개(횡단보도·어린이 보호구역)에 카드를 잇고, 놓으면 바로 맞는지 알려 준다.', base: '가지 3개에 할 일·있는 곳 카드를 잇고, 표지를 지킨 친구를 고른다.', challenge: '"뛰어 놀아요" 함정 카드가 섞인 판에서 잇는다.' },
      activity: {
        title: '표지판마다 내가 할 일 잇기', tool: 'mindmap',
        teacher: '"횡단보도 표지를 보면 나는 무엇을 할까요?" 가지마다 카드를 잇고 그 행동을 몸으로 해 본다. "자전거 길 표지는 자전거 타는 사람만 보면 돼요"라는 학생에게 "걷는 내가 자전거 길 한가운데로 가면 어떻게 될까요?"라고 묻는다. 표지판은 걷는 나에게도 말을 하고 있다는 점을 짚는다.',
        task: '표지판 가지마다 알맞은 카드를 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          { prompt: '표지판마다 할 일을 이어요.', toolOptions: { mode: 'match', topic: '표지판', slots: ['횡단보도', '어린이 보호구역', '자전거 길'], cards: ['여기서 건너요', '천천히 조심', '비켜서 걸어요'] }, target: { match: { 횡단보도: '여기서 건너요', '어린이 보호구역': '천천히 조심', '자전거 길': '비켜서 걸어요' } }, difficulty: 0.1,
            levels: { easy: { prompt: '표지판마다 할 일을 이어요(2개).', toolOptions: { slots: ['횡단보도', '어린이 보호구역'], cards: ['여기서 건너요', '천천히 조심'] }, target: { match: { 횡단보도: '여기서 건너요', '어린이 보호구역': '천천히 조심' } } }, challenge: { toolOptions: { cards: ['여기서 건너요', '뛰어 놀아요', '천천히 조심', '비켜서 걸어요'] } } } },
          { prompt: '표지판이 있는 곳을 이어요.', toolOptions: { mode: 'match', topic: '어디에 있나', slots: ['횡단보도', '어린이 보호구역', '자전거 길'], cards: ['건너는 곳', '학교 앞', '자전거 다니는 길'] }, target: { match: { 횡단보도: '건너는 곳', '어린이 보호구역': '학교 앞', '자전거 길': '자전거 다니는 길' } }, difficulty: 0.15,
            levels: { easy: { prompt: '표지판이 있는 곳을 이어요(2개).', toolOptions: { slots: ['횡단보도', '어린이 보호구역'], cards: ['건너는 곳', '학교 앞'] }, target: { match: { 횡단보도: '건너는 곳', '어린이 보호구역': '학교 앞' } } }, challenge: { toolOptions: { cards: ['건너는 곳', '바닷속', '학교 앞', '자전거 다니는 길'] } } } },
          { prompt: '표지를 지킨 친구를 담아요.', toolOptions: { mode: 'pick', topic: '표지 지키기', basket: '잘했어요', cards: [C('zone', '보호구역서 조심'), C('ignore', '표지 못 본 척'), C('bike', '자전거길 비켜 걷기'), C('hang', '표지판에 매달리기'), C('cw', '횡단보도로 건너')] }, target: { pick: ['zone', 'bike', 'cw'] }, difficulty: 0.2,
            conclude: '표지판은 걷는 나에게도 말해요. 뜻을 알고 그대로 해요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '횡단보도 표지를 봤어요.', options: ['여기서 건너요', '여기서 놀아요'], answer: '여기서 건너요' }] },
    }),
    SIGN({
      id: 'saf-traffic.e12.signs.activity.place', type: 'activity', title: '표지판을 어디에 세울까',
      method: '표지판을 어디에 세울까', tool: 'map', minutes: 14,
      levels: { easy: '장소 칸이 적은 지도에 꽂고, 꽂으면 칸 이름이 바로 보인다.', base: '학교 앞·건너는 곳·자전거 길이 모두 있는 지도에서 표지판마다 세울 곳에 꽂는다.', challenge: '골목 끝 칸이 더 있는 지도에서 꽂고, 끝 문항에서 표지판이 없어도 조심할 곳을 고른다.' },
      activity: {
        title: '우리 동네 지도에 표지판 세우기', tool: 'map',
        teacher: '"우리가 표지판을 세우는 사람이 되어 볼까요? 어린이 보호 표지는 어디에 세워야 할까요?" 핀을 꽂기 전에 그곳에 누가 많이 다니는지 말하게 한다. "놀이터에 횡단보도 표지를 세워요"라는 학생에게 "횡단보도 표지는 무엇을 알려 주는 표지였나요? 놀이터에서 찻길을 건너나요?"라고 묻는다. 표지판이 없는 골목 끝도 차가 나올 수 있는 곳이라 조심한다는 점을 짚는다.',
        task: '표지판을 세울 곳에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
        items: (() => {
          const G = [4, 3];
          const SCH = { name: '학교 앞', icon: 'school', at: [3, 0] }; const CW = { name: '건너는 곳', icon: 'dot', at: [1, 1] }; const BIKE = { name: '자전거 길', icon: 'dot', at: [0, 2] }; const PLAY = { name: '놀이터', icon: 'park', at: [3, 2] };
          const MORE = [{ name: '골목 끝', icon: 'dot', at: [2, 2] }, { name: '가게', icon: 'market', at: [0, 0] }];
          return [
            PIN('어린이 보호 표지를 세울 곳은?', G, [SCH, CW, BIKE, PLAY], [SCH, PLAY], MORE, '학교 앞', 0.1),
            PIN('횡단보도 표지를 세울 곳은?', G, [SCH, CW, BIKE, PLAY], [CW, PLAY], MORE, '건너는 곳', 0.15),
            PIN('자전거 길 표지를 세울 곳은?', G, [SCH, CW, BIKE, PLAY], [BIKE, PLAY], MORE, '자전거 길', 0.2),
            { prompt: '표지가 없어도 조심할 곳은?', toolOptions: { grid: G, places: [SCH, CW, BIKE, PLAY, ...MORE], readOnly: true, ask: { q: '표지판이 없어도 조심할 곳은?', choices: ['골목 끝', '교실 안', '내 방'] } }, target: { pick: 0 }, difficulty: 0.2, conclude: '표지판은 꼭 지킬 곳에 있어요. 표지판이 없는 골목 끝도 멈추고 살펴요.' },
          ];
        })(),
      },
      worksheet: { items: [{ type: 'choice', prompt: '어린이 보호 표지가 있는 곳은?', options: ['학교 앞', '교실 안'], answer: '학교 앞' }] },
      notes: '지도에 표지판 기호가 없어 "범례 빈칸 채우기" 대신 표지판마다 세울 칸에 핀을 꽂는 문항으로 바꾸었다.',
    }),
    SIGN({
      id: 'saf-traffic.e12.signs.activity.walk-sign', type: 'activity', title: '표지판 따라 걷는 이야기',
      method: '표지판 따라 걷는 이야기', tool: 'story', minutes: 15,
      levels: { easy: '첫 장면이 놓여 있고, 놓으면 바로 맞는지 알려 준다.', base: '장면 3장 차례 놓기, 말풍선 채우기, 고칠 장면 잇기를 스스로 한다.', challenge: '차례 놓기에 "표지 안 보고 뛰어요" 틀린 장면이 섞여 빼고 놓는다.' },
      activity: {
        title: '표지판을 보며 학교 가는 이야기', tool: 'story',
        teacher: '"두리가 표지판을 보며 학교에 가요. 무엇을 먼저 볼까요?" 장면을 놓은 뒤 이야기를 처음부터 읽고, 표지판이 나올 때마다 반 전체가 뜻을 외친다. 고칠 장면을 이을 때 "더 빨리 뛰면 돼요"를 고르는 학생에게 "빨리 뛰면 표지판을 볼 시간이 생길까요?"라고 묻는다. 표지판은 멈춰서 읽고 그대로 하는 것이라고 짚는다.',
        task: '이야기 장면을 놓고, 말풍선을 채우고, 고칠 장면을 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          ORDER3('표지판 이야기를 차례로 놓아요.', [C('see', '학교 앞 표지 봐요', 'house'), C('go', '횡단보도로 가요', 'tree'), C('cross', '신호 보고 건너요', 'sun')], C('run', '표지 안 보고 뛰어요', 'cloud'), 0.1),
          { prompt: '두리의 말을 채워요.', toolOptions: { mode: 'fill', slots: [{ id: 's', who: '두리', label: '표지판이 ___래요.' }], cards: ['여기서 건너', '여기서 놀아', '뛰어가'] }, target: { fill: { s: '여기서 건너' } }, difficulty: 0.15 },
          { prompt: '못 본 장면을 바르게 고쳐요.', toolOptions: { mode: 'match', slots: [{ id: 'bike', label: '자전거 길 가운데' }, { id: 'any', label: '아무 데서나 건너' }], cards: [C('side', '비켜서 걸어요'), C('cw', '횡단보도로 가요'), C('fast', '더 빨리 뛰어요')] }, target: { match: { bike: 'side', any: 'cw' } }, difficulty: 0.2,
            conclude: '표지판을 보면 멈춰서 뜻을 떠올리고 그대로 해요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '횡단보도 표지는 "여기서 ___"래요.', answer: '건너' }] },
    }),
    SIGN({
      id: 'saf-traffic.e12.signs.activity.quiz', type: 'activity', title: '표지판 몸짓 퀴즈',
      method: '표지판 몸짓 퀴즈', tool: 'timer', minutes: 14,
      levels: { easy: '문제 두 개가 되게 타이머를 맞추고, 교사가 표지판 카드를 든다.', base: '문제 네 개가 되게 맞추고 모둠 기록판에 맞힌 수를 적는다.', challenge: '문제 여섯 개가 되게 맞추고, 친구가 표지판 카드를 들어 문제를 낸다.' },
      activity: {
        title: '표지판 카드를 보고 몸짓으로 답하기', tool: 'timer',
        teacher: '"선생님이 표지판 카드를 들면 운동 칸 시간 안에 몸짓으로 답해요. 횡단보도는 멈춤, 어린이 보호는 천천히 걷기, 자전거 길은 옆으로 비키기예요." 몸짓을 먼저 함께 익힌 뒤 시작 단추를 누른다. 틀린 몸짓을 한 학생에게 "그 표지판 그림을 다시 볼까요? 무엇이 그려져 있나요?"라고 묻는다. 모둠마다 맞힌 수를 기록판에 적고, 많이 맞힌 것보다 뜻을 알게 된 것을 칭찬한다.',
        task: '퀴즈 차례를 놓고, 문제 수를 맞추고, 맞힌 수를 적어요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '퀴즈 차례로 카드를 놓아요.', toolOptions: { title: '퀴즈 차례', cards: ['몸짓 해요', '표지판 봐요', '뜻 떠올려요'] }, target: { order: ['표지판 봐요', '뜻 떠올려요', '몸짓 해요'] }, difficulty: 0.1 },
          { prompt: '문제 네 개가 되게 맞춰요.', toolOptions: { title: '문제 수', plan: { work: 10, rest: 5, rounds: 1 } }, target: { plan: { rounds: 4 } }, difficulty: 0.15,
            hints: ['표지판 카드 하나가 문제 하나예요.', '번 칸이 문제 수예요.', '번 칸을 4에 맞춰요.'],
            levels: { easy: { prompt: '문제 두 개가 되게 맞춰요.', target: { plan: { rounds: 2 } } }, challenge: { prompt: '문제 여섯 개가 되게 맞춰요.', target: { plan: { rounds: 6 } } } } },
          { prompt: '모둠이 맞힌 수를 적어요.', toolOptions: { title: '맞힌 수 기록판', unit: '개', fields: ['1회', '2회'] }, target: { records: true }, difficulty: 0.15, conclude: '표지판을 보면 뜻을 떠올리고 몸으로 바로 지켜요.' },
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '표지판과 몸짓을 이어 써요.', columns: ['표지판', '몸짓'], cells: [['횡단보도', ''], ['어린이 보호', ''], ['자전거 길', '']], answer: '멈춤, 천천히 걷기, 옆으로 비키기' }] },
      notes: '몸짓은 우리 반 퀴즈 약속이다. 계획의 "손 흔들기"는 자전거 길에서 할 일에 맞게 "옆으로 비키기"로 바꾸었다. 맞힌 수는 모둠 기록이며 학생 이름을 적지 않는다.',
    }),
    SIGN({
      id: 'saf-traffic.e12.signs.wrap.myfav', type: 'wrap', title: '꼭 지킬 표지판 고르기',
      method: '꼭 지킬 표지판 고르기', tool: 'mindmap', minutes: 6,
      levels: { easy: '교사가 카드를 하나씩 읽어 주며 오늘 배운 표지판을 함께 담는다.', base: '카드 6장 가운데 오늘 배운 표지판 3장을 스스로 담고, 내 등굣길에서 보는 것을 말한다.', challenge: '담은 표지판 앞에서 할 일을 몸짓과 함께 말한다.' },
      wrap: {
        teacher: '"오늘 배운 표지판만 바구니에 담아 볼까요? 그중에 내 등굣길에서 보는 것은 무엇인가요?" 카드를 담은 뒤 등굣길에서 보는 표지판을 손을 들어 말하게 한다. 가게 간판을 담으려는 학생에게 "간판은 가게 이름을 알려 줘요. 표지판은 무엇을 알려 줬나요?"라고 묻는다. 출구 2번에서 "네"를 고른 학생에게 표지판이 없는 골목 끝도 멈추고 살핀다고 말해 준다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '내 등굣길', basket: '오늘 배운 표지', cards: ['어린이 보호', '가게 간판', '횡단보도', '광고판', '자전거 길', '반 이름표'] }, prompt: '오늘 배운 표지판만 담아요.', target: { pick: ['어린이 보호', '횡단보도', '자전거 길'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '표지판이 없으면 안 살펴요?', options: ['네', '아니요, 늘 살펴요'], answer: 1, difficulty: 0.1, explain: '표지판이 없어도 골목 끝·찻길 앞에서는 멈추고 살펴요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '내가 지킬 표지판',
        items: [
          { type: 'check', prompt: '내 등굣길에서 보는 표지판에 ✓ 해요.', options: ['어린이 보호 표지', '횡단보도 표지', '자전거 길 표지'] },
          { type: 'draw', prompt: '내가 꼭 지킬 표지판을 그려요.' },
        ],
        easy: { note: '학교 앞 표지판을 떠올려요.', items: [{ type: 'draw', prompt: '학교 앞 표지판을 그려요.' }] },
      },
      notes: '"내 등굣길에서 보는 표지"는 학생마다 달라 교구로 채점하지 않는다 — 교구는 오늘 배운 표지판 고르기로 확인하고, 등굣길 표지는 말과 활동지로 나눈다.',
    }),
    SIGN({
      id: 'saf-traffic.e12.signs.wrap.sing', type: 'wrap', title: '우리 반이 본 표지판 그림그래프',
      method: '우리 반이 본 표지판 그림그래프', tool: 'chart', minutes: 6,
      levels: { easy: '교사가 줄마다 사람 그림을 함께 세고 가장 많은 줄을 고른다.', base: '세 줄을 스스로 세어 가장 많이 본 표지판을 고른다.', challenge: '가장 많이 본 까닭을 짝과 말한다.' },
      wrap: {
        teacher: '"이 그래프는 수업을 위해 지은 가상의 우리 반이에요. 등굣길에서 그 표지판을 본 친구가 사람 그림 하나예요." 줄마다 세게 한 뒤 가장 많은 줄을 고른다. "왜 어린이 보호 표지를 본 친구가 많을까요?"라고 묻고, 학교 둘레에 어린이 보호구역이 있기 때문이라는 점을 짚는다. 출구 2번에서 "고속도로"를 고른 학생에게 어린이가 많이 다니는 곳에 이 표지가 있다고 말해 준다.',
        exitTicket: [
          GRAPH('표지판을 본 친구(가상)', [['어린이 보호', 8], ['횡단보도', 6], ['자전거 길', 3]], '가장 많이 본 표지판은?', 0, '가장 많이 본 표지판을 골라요.'),
          { type: 'choice', prompt: '어린이 보호 표지가 많은 곳은?', options: ['학교 앞', '고속도로'], answer: 0, difficulty: 0.1, explain: '어린이가 많이 다니는 학교 앞에 있어요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '우리 반이 본 표지판',
        items: [
          { type: 'table', prompt: '그래프를 보고 수를 써요.', columns: ['표지판', '본 친구'], cells: [['어린이 보호', ''], ['횡단보도', ''], ['자전거 길', '']], answer: '8, 6, 3' },
          { type: 'draw', prompt: '등굣길에서 본 표지판을 그려요.' },
        ],
      },
      notes: '그림그래프 수는 수업용 가상 자료다.',
    }),
  ];

  // =====================================================================================================
  // 2학년 · 차 사이에서 튀어나오지 않아요
  const POP = MOD('saf-traffic.e12.popout', [2]);
  const T_POP = [
    POP({
      id: 'saf-traffic.e12.popout.intro.peek', type: 'intro', title: '누가 보이나요 그림 고르기',
      method: '누가 보이나요 그림 고르기', tool: 'emotion', minutes: 5,
      levels: { easy: '교사가 "차 사이에 숨은 나" 장면 하나만 읽어 주고 보이는지 함께 답한다.', base: '장면 네 개가 보여요·안 보여요로 나뉘는 시연을 보며 따라 말한다.', challenge: '어떻게 서야 운전자에게 보이는지 말한다.' },
      intro: {
        teacher: '"운전석에 앉은 사람이 되어 볼까요? 주차된 차 사이에 숨은 아이가 보일까요?" 교사가 의자에 앉아 운전자 흉내를 내며 책상 뒤에 쪼그린 학생을 찾는 놀이를 먼저 한다. 시연 단추로 장면이 보여요·안 보여요로 나뉘는 모습을 보여 준다. "내가 차를 보면 운전자도 나를 봐요"라는 말이 나오면 "나는 작은데 차는 커요. 차 뒤에 있는 나를 운전석에서 볼 수 있을까요?"라고 되묻는다.',
        student: '운전자 눈으로 보면 누가 보이고 누가 안 보이는지 짝과 말해 보아요.',
        demo: { tool: 'emotion', options: { mode: 'sort', slots: ['보여요', '안 보여요'], cards: [C('between', '차 사이 숨은 나'), C('side', '보도에 선 나'), C('crouch', '차 뒤 쪼그린 나'), C('hand', '손 든 나')], shuffle: false, weather: false }, sequence: [{ sort: { 보여요: ['side', 'hand'], '안 보여요': ['between', 'crouch'] } }] },
        art: { draw: 'a row of parked paper cars with a small paper child hidden between two of them, seen from a paper driver seat behind the windshield', banner: '운전자도 나를 봐야 해요' },
      },
    }),
    POP({
      id: 'saf-traffic.e12.popout.intro.size', type: 'intro', title: '내 키와 차 높이 견주기',
      method: '내 키와 차 높이 견주기', tool: 'body', minutes: 5,
      levels: { easy: '교사가 눈 하나만 짚어 "차 위로 보이는 곳"이라고 말한다.', base: '차 위로 보이는 곳(눈·목·어깨)이 차례로 짚이는 시연을 본다.', challenge: '키 큰 차(버스·트럭) 옆이라면 어디까지 보일지 견주어 말한다.' },
      intro: {
        teacher: '"우리 키와 자동차 높이를 견주어 볼까요?" 학생 한 명이 책상(자동차) 옆에 서고, 다른 학생이 맞은편에서 책상 위로 보이는 몸을 말하게 한다. 시연 단추로 종이 몸에서 차 위로 보이는 곳이 짚이는 모습을 보여 준다. "나는 다 보여요"라는 말이 나오면 "쪼그려 앉거나 차가 더 크면 어디까지 보일까요?"라고 되묻는다. 오늘은 차 사이·골목 끝에서 갑자기 나가지 않고 멈춰 살피는 법을 배운다고 밝힌다.',
        student: '책상 옆에 서서 친구에게 내 몸이 어디까지 보이는지 물어보아요.',
        demo: { tool: 'body', options: { mode: 'parts', parts: ['눈', '목', '어깨', '가슴', '배', '무릎'], names: true }, sequence: [{ parts: ['눈'] }, { parts: ['눈', '목'] }, { parts: ['눈', '목', '어깨'] }] },
        art: { draw: 'a small paper child standing beside a tall paper car, only the top of the child showing above the hood line', banner: '차가 나보다 커요' },
      },
      notes: '종이 몸에 머리 칸이 없어 "머리"는 눈을 짚는 것으로 대신한다. 실제 키 견주기는 책상·상자로 한다.',
    }),
    POP({
      id: 'saf-traffic.e12.popout.activity.story', type: 'activity', title: '공이 차 사이로 굴러갔어요',
      method: '공이 굴러갔어요', tool: 'story', minutes: 15,
      levels: { easy: '첫 장면이 놓여 있고, 놓으면 바로 맞는지 알려 준다.', base: '장면 3장 차례 놓기, 말풍선 채우기, 좋은 끝 장면 고르기를 스스로 한다.', challenge: '차례 놓기에 "공 쫓아 뛰어요" 틀린 장면이 섞여 빼고 놓는다.' },
      activity: {
        title: '주차된 차 사이로 간 공 이야기', tool: 'story',
        teacher: '"세찬이의 공이 주차된 차 사이로 굴러갔어요. 다음에 무엇을 할까요?" 장면을 놓은 뒤 이야기를 처음부터 읽고, 끝 장면을 바꿔 보는 상상을 한다. "공을 잃어버리면 속상하니까 바로 쫓아가요"라는 학생에게 "차 사이에서 갑자기 나온 나를 지나가던 차가 미리 볼 수 있을까요?"라고 묻는다. 공은 어른께 가져다 달라고 부탁한다는 점을 짚는다.',
        task: '이야기 장면을 놓고, 말풍선을 채우고, 좋은 끝을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          ORDER3('공 이야기를 차례로 놓아요.', [C('roll', '공이 차 사이로', 'leaf'), C('halt', '그 자리에 멈춰요', 'tree'), C('tell', '어른께 말해요', 'house')], C('chase', '공 쫓아 뛰어요', 'cloud'), 0.1),
          { prompt: '세찬이의 말을 채워요.', toolOptions: { mode: 'fill', slots: [{ id: 'b', who: '세찬', label: '공은 ___ 달라고 해요.' }], cards: ['어른께', '친구가', '혼자'] }, target: { fill: { b: '어른께' } }, difficulty: 0.15 },
          { prompt: '좋은 끝 장면을 골라요.', toolOptions: { mode: 'pick', basket: '좋은 끝', cards: [C('adult', '어른이 공 꺼내요', 'sun'), C('crawl', '차 밑에 기어가요', 'cloud'), C('alone', '혼자 차 사이로', 'cloud')] }, target: { pick: ['adult'] }, difficulty: 0.2,
            conclude: '공이 차 사이로 가면 멈추고, 어른께 꺼내 달라고 해요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '공이 차 사이로 가면 ___ 말해요.', answer: '어른께' }] },
    }),
    POP({
      id: 'saf-traffic.e12.popout.activity.alley', type: 'activity', title: '골목 끝 멈춤 자리 찾기',
      method: '골목 끝 멈춤 자리 찾기', tool: 'map', minutes: 14,
      levels: { easy: '골목이 하나씩만 보이는 지도에 꽂고, 꽂으면 칸 이름이 바로 보인다.', base: '골목 세 개가 큰길과 만나는 지도에서 문항마다 멈춤 자리를 꽂는다.', challenge: '헷갈리는 칸(골목 가운데·가게)이 더 있는 지도에서 집 → 학교 차례로 멈춤 자리를 꽂는다.' },
      activity: {
        title: '골목이 큰길과 만나는 곳 찾기', tool: 'map',
        teacher: '"골목이 큰길과 만나는 곳은 왜 멈춰야 할까요?" 핀을 꽂기 전에 골목 끝에서 양쪽이 잘 보이는지 손으로 담장을 그려 보게 한다. "작은 골목은 차가 안 다녀요"라는 학생에게 "작은 골목에서 큰길로 나가려는 차, 큰길에서 골목으로 들어오는 차는 없을까요?"라고 묻는다. 골목 끝에서는 멈추고, 고개만 내밀어 살핀 뒤 걷는다는 점을 짚는다.',
        task: '골목 끝 멈춤 자리에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
        items: (() => {
          const G = [4, 3];
          const HOME = { name: '집', icon: 'house', at: [0, 2] }; const SCH = { name: '학교', icon: 'school', at: [3, 0] };
          const A = { name: '집 골목 끝', icon: 'dot', at: [1, 2] }; const B = { name: '학교 골목 끝', icon: 'dot', at: [3, 1] }; const P = { name: '놀이터 골목 끝', icon: 'dot', at: [1, 0] };
          const MORE = [{ name: '골목 가운데', icon: 'dot', at: [2, 2] }, { name: '가게', icon: 'market', at: [0, 0] }];
          return [
            PIN('집에서 나와 처음 멈출 곳은?', G, [HOME, SCH, A, B, P], [HOME, A], MORE, '집 골목 끝', 0.1),
            PIN('학교 앞에서 멈출 곳은?', G, [HOME, SCH, A, B, P], [SCH, B], MORE, '학교 골목 끝', 0.15),
            PIN('놀이터 골목에서 멈출 곳은?', G, [HOME, SCH, A, B, P], [P, HOME], MORE, '놀이터 골목 끝', 0.2, { conclude: '골목이 큰길과 만나는 곳마다 멈추고 살펴요.' }),
          ];
        })(),
      },
      worksheet: { items: [{ type: 'choice', prompt: '골목 끝에서 무엇을 해요?', options: ['멈추고 살펴요', '뛰어 나가요'], answer: '멈추고 살펴요' }] },
      notes: '문항마다 핀 하나라 "멈춤 자리 모두 꽂기"를 골목마다 한 문항으로 나눴다.',
    }),
    POP({
      id: 'saf-traffic.e12.popout.activity.stop', type: 'activity', title: '멈추고 살피기 동작 연습',
      method: '멈추고 살피기 동작 연습', tool: 'timer', minutes: 15,
      levels: { easy: '연습 한 번이 되게 타이머를 맞추고 교사와 함께 한다.', base: '짝과 두 번 연습하게 맞추고, 해낸 것을 스스로 표시한다.', challenge: '짝과 네 번 연습하게 맞추고, 짝의 동작을 보고 빠진 차례를 말해 준다.' },
      activity: {
        title: '책상 자동차 사이에서 멈추고 살피기', tool: 'timer',
        teacher: '"책상을 주차된 차처럼 두 줄로 놓았어요. 책상 끝에서 바로 나가지 말고 멈춰요. 고개만 살짝 내밀어 보고, 차가 없으면 걸어요." 교사가 먼저 시범을 보이고, 짝 한 명은 운전자 역할로 통로를 천천히 걷는다. 몸 전체를 내미는 학생에게 "몸이 다 나가면 운전자 앞에 바로 서게 돼요. 고개만 내밀어 볼까요?"라고 말해 준다. 마친 뒤 해낸 것만 표시하게 한다.',
        task: '안전 점검을 하고, 연습 차례와 횟수를 맞추고, 해낸 것에 표시해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '연습 전 안전 점검을 해요.', toolOptions: { title: '연습 전 점검', safety: ['책상 사이 넓히기', '의자 넣기', '천천히 걷기'] }, target: { safety: true }, difficulty: 0.1 },
          { prompt: '멈추고 살피는 차례로 놓아요.', toolOptions: { title: '살피기 차례', cards: ['차 없으면 걸어요', '멈춰요', '고개 내밀어 봐요'] }, target: { order: ['멈춰요', '고개 내밀어 봐요', '차 없으면 걸어요'] }, difficulty: 0.15 },
          { prompt: '연습 두 번이 되게 맞춰요.', toolOptions: { title: '연습 횟수', plan: { work: 15, rest: 10, rounds: 3 } }, target: { plan: { rounds: 2 } }, difficulty: 0.15,
            hints: ['짝과 한 번씩 하면 몇 번인지 세어 봐요.', '번 칸이 연습 횟수예요.', '번 칸을 2에 맞춰요.'],
            levels: { easy: { prompt: '연습 한 번이 되게 맞춰요.', target: { plan: { rounds: 1 } } }, challenge: { prompt: '연습 네 번이 되게 맞춰요.', target: { plan: { rounds: 4 } } } } },
          { prompt: '마친 뒤 해낸 것에 표시해요.', toolOptions: { title: '살피기 점검' }, target: { selfCheck: ['멈췄어요', '고개만 내밀었어요', '살피고 걸었어요'] }, difficulty: 0.15, conclude: '차 사이·골목 끝에서는 멈추고, 고개만 내밀어 보고, 차가 없으면 걸어요.' },
        ],
      },
      worksheet: { items: [{ type: 'check', prompt: '연습에서 해낸 것에 ✓ 해요.', options: ['책상 끝에서 멈췄어요', '고개만 내밀어 봤어요', '살핀 뒤 걸었어요'] }] },
      notes: '타이머 초 값은 연습 진행용이다. 운전자 역할 학생은 걷기만 하고 뛰지 않는다.',
    }),
    POP({
      id: 'saf-traffic.e12.popout.activity.choice', type: 'activity', title: '골목 끝에서 할 일 카드 고르기',
      method: '어떻게 할까 카드 고르기', tool: 'mindmap', minutes: 14,
      levels: { easy: '카드 3장 가운데 바른 카드 2장을 담고, 놓으면 바로 맞는지 알려 준다.', base: '카드 5장 가운데 바른 카드를 담고, 해요·안 해요로 나눈다.', challenge: '나누기에 헷갈리는 카드가 섞이고, 바른 카드를 차례 칸에도 놓는다.' },
      activity: {
        title: '골목 끝·차 사이에서 할 일 고르기', tool: 'mindmap',
        teacher: '"골목 끝에 왔어요. 어떤 카드가 바른 행동일까요?" 카드를 담을 때마다 그 동작을 해 본다. "빨리 뛰면 차보다 먼저 지나가요"라는 학생에게 "차는 사람보다 훨씬 빨라요. 뛰다 보면 멈출 수 있을까요?"라고 묻는다. 멈추고, 살피고, 손 들고 걷는 차례를 마지막에 다 같이 해 본다.',
        task: '바른 카드를 담고, 나누고, 차례대로 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          { prompt: '골목 끝에서 할 일만 담아요.', toolOptions: { mode: 'pick', topic: '골목 끝에 왔어요', basket: '골목 끝', cards: ['멈춰요', '뛰어가요', '살펴요', '공 차요', '손 들어요'] }, target: { pick: ['멈춰요', '살펴요', '손 들어요'] }, difficulty: 0.1,
            levels: { easy: { prompt: '골목 끝에서 할 일만 담아요(3장).', toolOptions: { cards: ['멈춰요', '뛰어가요', '살펴요'] }, target: { pick: ['멈춰요', '살펴요'] } } } },
          SORT2(['해요', '안 해요'], '차 사이에서 할 일을 나눠요.', '차 사이', ['멈춰요', '고개 내밀어요', '어른 불러요'], ['뛰어 나가요', '차 밑 숨기', '쪼그려 놀기'], ['차 문 두드리기', '차에 기대기'], 0.15),
          { prompt: '바른 카드를 차례로 놓아요.', toolOptions: { mode: 'order', topic: '골목 끝 차례', slots: 3, cards: ['살펴요', '손 들고 걸어요', '멈춰요'] }, target: { order: ['멈춰요', '살펴요', '손 들고 걸어요'] }, difficulty: 0.2,
            conclude: '골목 끝·차 사이에서는 멈추고, 살피고, 손 들고 걸어요.' },
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '하면 ○, 안 하면 ×를 써요.', columns: ['행동', '○ / ×'], cells: [['골목 끝에서 멈춰요', ''], ['차 사이로 뛰어 나가요', ''], ['고개 내밀어 살펴요', '']], answer: '○, ×, ○' }] },
    }),
    POP({
      id: 'saf-traffic.e12.popout.wrap.tree', type: 'wrap', title: '튀어나오지 않기 그물',
      method: '튀어나오지 않기 그물', tool: 'mindmap', minutes: 6,
      levels: { easy: '교사가 "멈춰요" 가지를 먼저 채워 보이고 나머지를 함께 채운다.', base: '세 가지(멈춰요·살펴요·어른 불러요)에 알맞은 장면 카드를 스스로 넣는다.', challenge: '"뛰어 나가요" 함정 카드를 왜 빼는지 말하며 넣는다.' },
      wrap: {
        teacher: '"이 장면에서는 멈출까요, 살필까요, 어른을 부를까요?" 가지마다 장면 카드를 넣고 그 동작을 해 본다. 출구 2번에서 "꼭 봐요"를 고른 학생에게 "나는 차가 보여도 차 안의 운전자는 작은 나를 못 볼 수 있어요"라고 말해 준다. "멈춰, 고개, 걸어!"를 한 번 외치고 마무리한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '차 사이·골목 끝', slots: ['멈춰요', '살펴요', '어른 불러요'], cards: ['골목 끝에 왔어요', '차 사이에 섰어요', '공이 차 밑에', '뛰어 나가요'] }, prompt: '가지마다 장면 카드를 넣어요.', target: { match: { 멈춰요: '골목 끝에 왔어요', 살펴요: '차 사이에 섰어요', '어른 불러요': '공이 차 밑에' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '내가 차를 보면 운전자도 나를 봐요?', options: ['꼭 봐요', '못 볼 수 있어요'], answer: 1, difficulty: 0.1, explain: '운전자는 작은 나를 못 볼 수 있어요. 그래서 멈추고 살펴요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '차 사이에서 튀어나오지 않아요',
        items: [
          { type: 'check', prompt: '내가 지킬 약속에 ✓ 해요.', options: ['골목 끝에서 멈춰요', '차 사이에서 고개만 내밀어요', '공은 어른께 부탁해요'] },
          { type: 'draw', prompt: '골목 끝에서 멈춘 내 모습을 그려요.' },
        ],
        easy: { note: '"멈춰, 고개, 걸어"를 떠올려요.', items: [{ type: 'draw', prompt: '멈춘 내 발을 그려요.' }] },
      },
    }),
    POP({
      id: 'saf-traffic.e12.popout.wrap.chant', type: 'wrap', title: '"멈춰·고개·걸어" 구호',
      method: '“멈춰·고개·걸어” 구호', tool: 'timer', minutes: 6,
      levels: { easy: '교사가 "멈춰·걸어" 두 박자를 먼저 외치고 함께 따라 한다.', base: '구호 카드 세 장의 차례를 맞추고 세 박자 구호를 동작과 함께 외친다.', challenge: '구호를 외친 뒤 친구 앞에서 이끌어 외친다.' },
      wrap: {
        teacher: '"멈춰! (두 발 모으기) 고개! (고개만 내밀기) 걸어! (손 들고 걷기)" 구호 카드 차례를 맞춘 뒤 손뼉 박자에 맞춰 세 번 외친다. 출구 2번에서 "뛰어요"를 고른 학생에게 "골목 끝은 차가 갑자기 나올 수 있는 곳이에요. 무엇이 먼저였나요?"라고 묻는다. 집에 가는 길 첫 골목 끝에서 구호를 마음속으로 외쳐 보자고 마무리한다.',
        exitTicket: [
          CHANT('멈춰·고개·걸어', ['멈춰', '고개', '걸어']),
          { type: 'choice', prompt: '골목 끝에서 먼저 할 일은?', options: ['뛰어요', '멈춰요', '노래해요'], answer: 1, difficulty: 0.1, explain: '골목 끝에서는 먼저 멈춰요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '멈춰, 고개, 걸어!',
        items: [
          { type: 'blank', prompt: '구호를 따라 써요.', text: '멈춰, ___, 걸어!', answer: '고개' },
          { type: 'draw', prompt: '고개만 내밀어 살피는 모습을 그려요.' },
        ],
      },
    }),
  ];

  // =====================================================================================================
  // 2학년 · 비 오는 날·어두운 날 잘 보이게
  const VIS = MOD('saf-traffic.e12.visible', [2]);
  const WEEK = [['맑음', 3], ['비', 2], ['흐림', 2]];
  const T_VIS = [
    VIS({
      id: 'saf-traffic.e12.visible.intro.night', type: 'intro', title: '누가 더 잘 보일까',
      method: '누가 더 잘 보일까', tool: 'emotion', minutes: 5,
      levels: { easy: '교사가 밝은 옷·어두운 옷 두 카드만 보여 주고 함께 고른다.', base: '네 카드 가운데 잘 보이는 차림(밝은 옷·반사띠)이 바구니에 담기는 시연을 본다.', challenge: '왜 잘 보이는지(빛을 되돌려 줘요) 말한다.' },
      intro: {
        teacher: '"깜깜한 저녁, 차 불빛이 비출 때 누가 더 잘 보일까요?" 교실 불을 잠깐 줄이고 손전등으로 흰 종이와 검은 종이를 비춰 보인 뒤 시연 단추로 잘 보이는 차림이 바구니에 담기는 모습을 보여 준다. "어두운 옷도 차 불빛에 다 보여요"라는 말이 나오면 "방금 손전등에 검은 종이는 어떻게 보였나요?"라고 되묻는다. 오늘은 비 오는 날·어두운 날 잘 보이게 다니는 법을 배운다고 밝힌다.',
        student: '손전등 빛에 더 잘 보인 색을 짝에게 말해 보아요.',
        demo: { tool: 'emotion', options: { mode: 'pick', basket: '잘 보여요', cards: [C('bright', '밝은 옷'), C('dark', '어두운 옷'), C('band', '반사띠'), C('black', '검은 우산')], shuffle: false, weather: false }, sequence: [{ pick: ['bright'] }, { pick: ['bright', 'band'] }] },
        art: { draw: 'a dark paper street at dusk with car headlights shining on two paper children — one in a bright yellow raincoat with a reflective band glowing, one in dark clothes barely visible', banner: '밝게, 잘 보이게' },
      },
      notes: '손전등과 흰 종이·검은 종이·반사띠 실물을 준비하면 좋다.',
    }),
    VIS({
      id: 'saf-traffic.e12.visible.intro.weather', type: 'intro', title: '한 주 날씨 그림그래프 읽기',
      method: '날씨 그림그래프 읽기', tool: 'chart', minutes: 5,
      levels: { easy: '교사가 비 온 날 줄의 별을 함께 세어 보인다.', base: '시연에서 비 온 날이 며칠인지 고르는 모습을 보고 손가락으로 센다.', challenge: '비 온 날 등굣길에 조심할 일을 하나 말한다.' },
      intro: {
        teacher: '"이 그래프는 수업을 위해 지은 가상의 한 주 날씨예요. 별 하나가 하루예요. 비 온 날은 며칠일까요?" 손가락으로 함께 센 뒤 시연 단추로 답이 골라지는 모습을 보여 준다. "비 오는 날엔 빨리 뛰어가야 덜 젖어요"라는 말이 나오면 "젖은 바닥에서 뛰면 어떻게 될까요? 운전하는 사람은 비 오는 날 잘 보일까요?"라고 되묻는다.',
        student: '비 온 날 줄의 별을 손가락으로 세어 보아요.',
        demo: { tool: 'chart', options: { type: 'picture', mode: 'read', title: '한 주 날씨(가상)', unit: '일', data: WEEK, icons: [{ value: 1, name: '1일' }], icon: 'star', question: '비 온 날은 며칠인가요?', choices: ['1일', '2일', '3일'] }, sequence: [{ pick: 1 }] },
        art: { draw: 'a paper calendar week with small paper suns, clouds and raindrops, and a child in a yellow raincoat beside it', banner: '비 오는 날 조심해요', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
      },
    }),
    VIS({
      id: 'saf-traffic.e12.visible.activity.dress', type: 'activity', title: '비 오는 날 차림 고르기',
      method: '비 오는 날 차림 고르기', tool: 'mindmap', minutes: 15,
      levels: { easy: '카드 4장을 옷·우산·신발 가지에 넣고, 놓으면 바로 맞는지 알려 준다.', base: '카드 6장(함정 2장)을 가지에 넣고, 어두운 날 차림을 따로 담는다.', challenge: '카드가 섞여 나오고, 날씨와 차림을 짝 짓는 문항에 헷갈리는 카드가 더 있다.' },
      activity: {
        title: '비 오는 날·어두운 날 차림 고르기', tool: 'mindmap',
        teacher: '"비 오는 날 학교에 갈 때 무엇을 입고, 쓰고, 신을까요?" 카드를 넣을 때마다 왜 그 차림이 좋은지 한마디씩 말하게 한다. "까만 우산이 멋있어요"를 넣으려는 학생에게 "우산이 앞을 가리면 나도 차를 못 보고, 까만색이면 차도 나를 잘 못 봐요. 어떤 우산이 좋을까요?"라고 묻는다. 비 오는 날과 어두운 날 모두 "잘 보이게"가 핵심이라는 점을 짚는다.',
        task: '차림 카드를 알맞은 가지에 넣어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          { prompt: '비 오는 날 차림을 넣어요.', toolOptions: { mode: 'sort', topic: '비 오는 날', slots: ['옷', '우산', '신발'], cards: ['노란 비옷', '어두운 옷', '투명 우산', '깊게 쓴 우산', '미끄럼 덜한 신발', '밝은 옷'] }, target: { sort: { 옷: ['노란 비옷', '밝은 옷'], 우산: ['투명 우산'], 신발: ['미끄럼 덜한 신발'] } }, difficulty: 0.1,
            hints: ['차가 나를 잘 보고, 내가 앞을 잘 보는 차림을 찾아요.', '어둡거나 앞을 가리는 카드는 넣지 않아요.', '노란 비옷·밝은 옷은 옷, 투명 우산은 우산, 미끄럼 덜한 신발은 신발이에요.'],
            levels: { easy: { prompt: '비 오는 날 차림을 넣어요(4장).', toolOptions: { cards: ['노란 비옷', '투명 우산', '미끄럼 덜한 신발', '어두운 옷'] }, target: { sort: { 옷: ['노란 비옷'], 우산: ['투명 우산'], 신발: ['미끄럼 덜한 신발'] } } } } },
          { prompt: '어두운 날 차림만 담아요.', toolOptions: { mode: 'pick', topic: '어두운 날', basket: '어두운 날', cards: ['반사띠', '검은 옷', '밝은 옷', '어두운 모자'] }, target: { pick: ['반사띠', '밝은 옷'] }, difficulty: 0.15 },
          { prompt: '날씨와 차림을 이어요.', toolOptions: { mode: 'match', topic: '날씨와 차림', slots: ['비 오는 날', '어두운 날'], cards: ['투명 우산', '반사띠'] }, target: { match: { '비 오는 날': '투명 우산', '어두운 날': '반사띠' } }, difficulty: 0.2,
            levels: { challenge: { toolOptions: { cards: ['투명 우산', '선글라스', '반사띠'] } } },
            conclude: '비 오는 날·어두운 날에는 밝은 옷, 투명 우산, 반사띠로 잘 보이게 해요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '비 오는 날 좋은 우산은?', options: ['앞이 보이는 투명 우산', '얼굴을 가리는 우산'], answer: '앞이 보이는 투명 우산' }] },
    }),
    VIS({
      id: 'saf-traffic.e12.visible.activity.umbrella', type: 'activity', title: '우산 쓰는 자리 고르기',
      method: '우산 쓰는 자리 고르기', tool: 'body', minutes: 14,
      levels: { easy: '짚은 곳의 이름이 바로 보이고, 우산 드는 높이를 보기 2개 가운데 고른다.', base: '이름 없이 짚고, 우산 드는 높이를 보기 3개 가운데 고른다.', challenge: '바람 부는 날 우산 드는 법까지 보기에서 고른다.' },
      activity: {
        title: '앞과 옆이 보이게 우산 들기', tool: 'body',
        teacher: '"우산을 쓸 때 가리면 안 되는 곳은 어디일까요?" 실제 우산(또는 공책)을 머리 위로 들어 앞이 보이는 높이와 눈을 가리는 높이를 견주어 보게 한다. "우산을 깊게 쓰면 비를 덜 맞아서 안전해요"라는 학생에게 "깊게 쓰면 앞에서 오는 차가 보일까요?"라고 묻는다. 비를 조금 맞더라도 앞과 옆이 보이는 것이 먼저라는 점을 짚는다.',
        task: '종이 몸에서 짚고, 우산 드는 법을 골라요.', levels: { easy: { names: true }, base: {}, challenge: {} },
        items: [
          { prompt: '우산이 가리면 안 되는 곳은?', toolOptions: { mode: 'parts', parts: ['눈', '어깨', '팔꿈치', '무릎', '발목'] }, target: { parts: ['눈'] }, difficulty: 0.1,
            hints: ['앞에서 오는 차를 무엇으로 보는지 떠올려요.', '얼굴에 있는 곳이에요.', '눈을 골라요.'] },
          { prompt: '우산은 어떻게 들어요?', toolOptions: { mode: 'parts', parts: ['눈'], readOnly: true, ask: { q: '우산은 어떻게 들어요?', choices: ['눈 위로 들어요', '얼굴까지 푹 써요', '등 뒤로 메요'] } }, target: { pick: 0 }, difficulty: 0.15,
            levels: { easy: { toolOptions: { ask: { q: '우산은 어떻게 들어요?', choices: ['눈 위로 들어요', '얼굴까지 푹 써요'] } } } } },
          { prompt: '바람이 세게 불어요.', toolOptions: { mode: 'parts', parts: ['손목', '어깨'], readOnly: true, ask: { q: '바람이 불 때 우산은?', choices: ['두 손으로 꼭 잡아요', '한 손으로 빙빙 돌려요', '우산으로 앞을 막아요'] } }, target: { pick: 0 }, difficulty: 0.2,
            conclude: '우산은 눈 위로 들어 앞과 옆이 보이게 하고, 바람이 불면 두 손으로 잡아요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '우산을 쓸 때 꼭 보여야 해요.', options: ['앞과 옆', '내 신발'], answer: '앞과 옆' }] },
      notes: '종이 몸 위에 우산 그림을 얹을 수 없어 가리면 안 되는 곳(눈)을 짚고 드는 높이는 보기로 고른다. 실제 우산은 교실에서 펴지 말고 접은 채 높이만 보여 준다.',
    }),
    VIS({
      id: 'saf-traffic.e12.visible.activity.slip', type: 'activity', title: '미끄러운 날 이야기',
      method: '미끄러운 날 이야기', tool: 'story', minutes: 15,
      levels: { easy: '첫 장면이 놓여 있고, 놓으면 바로 맞는지 알려 준다.', base: '장면 3장 차례 놓기, 바뀐 결말 말풍선 채우기, 빗길 조심 장면 고르기를 한다.', challenge: '차례 놓기에 "물웅덩이 첨벙" 틀린 장면이 섞이고, 자동차도 빗길에 바로 못 서는 장면을 고른다.' },
      activity: {
        title: '빗길에서 뛰다 미끄러질 뻔한 이야기', tool: 'story',
        teacher: '"비 오는 날 하나가 늦을까 봐 뛰다가 미끄러질 뻔했어요. 이야기를 바꾸면 어떻게 끝날까요?" 장면을 놓은 뒤 결말 말풍선을 채운다. "젖은 길도 운동화면 안 미끄러워요"라는 학생에게 "젖은 타일이나 맨홀 뚜껑 위는 어떨까요?"라고 묻는다. 자동차도 젖은 길에서는 바로 서지 못하니 횡단보도 앞에서 더 오래 살핀다는 점을 짚는다.',
        task: '이야기 장면을 놓고, 결말을 채우고, 조심할 장면을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          ORDER3('빗길 이야기를 차례로 놓아요.', [C('rain', '비가 와요', 'cloud'), C('slip', '뛰다 미끄러질 뻔', 'rain'), C('slow', '천천히 걸어요', 'sun')], C('splash', '물웅덩이 첨벙', 'cloud'), 0.1),
          { prompt: '바뀐 결말을 채워요.', toolOptions: { mode: 'fill', slots: [{ id: 'e', who: '하나', label: '빗길에선 천천히 ___.' }], cards: ['걸어요', '뛰어요', '미끄러져요'] }, target: { fill: { e: '걸어요' } }, difficulty: 0.15 },
          { prompt: '빗길에서 조심할 것을 골라요.', toolOptions: { mode: 'pick', basket: '빗길 조심', cards: [C('car', '차도 바로 못 서요', 'cloud'), C('sun', '햇볕이 뜨거워요', 'sun'), C('road', '길이 미끄러워요', 'rain'), C('snow', '눈사람을 만들어요', 'snow')] }, target: { pick: ['car', 'road'] }, difficulty: 0.2,
            conclude: '빗길은 사람도 차도 미끄러워요. 천천히 걷고 더 오래 살펴요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '빗길에서는 ___ 걸어요.', answer: '천천히' }] },
    }),
    VIS({
      id: 'saf-traffic.e12.visible.activity.reflect', type: 'activity', title: '어두운 길 밝은 길 고르기',
      method: '어두운 길 밝은 길 고르기', tool: 'map', minutes: 14,
      levels: { easy: '밝은 길·어두운 길 두 갈래만 있는 지도에 꽂는다.', base: '공사장 옆 길까지 세 갈래가 있는 지도에서 꽂는다.', challenge: '지역 이름을 숨긴 지도에서 색과 자리만 보고 꽂고, 끝 문항에서 어두운 곳을 지날 때 할 일을 고른다.' },
      activity: {
        title: '저녁 학원 가는 길 고르기', tool: 'map',
        teacher: '"저녁에 학원에 가요. 가로등이 있는 밝은 길과 어두운 골목 가운데 어디로 갈까요?" 핀을 꽂기 전에 그 길에서 운전자가 나를 볼 수 있을지 말하게 한다. "어두운 골목이 더 가까워요"라는 학생에게 "가깝지만 차도 사람도 나를 못 보면 어떻게 될까요?"라고 묻는다. 어두운 곳을 꼭 지나야 하면 반사띠를 하고 어른과 함께 간다는 점을 짚는다.',
        task: '알맞은 길에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: { regionNames: false } },
        items: (() => {
          const G = [4, 3];
          const PL = [{ name: '집', icon: 'house', at: [0, 1] }, { name: '학원', icon: 'library', at: [3, 1] }];
          const LIT = { name: '밝은 큰길', cells: [[1, 0], [2, 0], [3, 0]], color: 'buttercup' };
          const DARK = { name: '어두운 골목', cells: [[1, 1], [2, 1]], color: 'lavender' };
          const WORK = { name: '공사장 옆 길', cells: [[1, 2], [2, 2], [3, 2]], color: 'peach' };
          return [
            { prompt: '학원 가는 밝은 길에 꽂아요.', toolOptions: { grid: G, places: PL, regions: [LIT, DARK, WORK] }, target: { region: '밝은 큰길' }, difficulty: 0.1,
              levels: { easy: { toolOptions: { regions: [LIT, DARK] } } } },
            { prompt: '피해야 할 어두운 길에 꽂아요.', toolOptions: { grid: G, places: PL, regions: [LIT, DARK, WORK] }, target: { region: '어두운 골목' }, difficulty: 0.15,
              levels: { easy: { toolOptions: { regions: [LIT, DARK] } } } },
            { prompt: '어두운 곳을 꼭 지나야 해요.', toolOptions: { grid: G, places: PL, regions: [LIT, DARK, WORK], readOnly: true, ask: { q: '어두운 곳을 지나야 하면?', choices: ['반사띠 하고 어른과', '혼자 뛰어가요', '검은 옷 입어요'] } }, target: { pick: 0 }, difficulty: 0.2,
              conclude: '저녁에는 밝은 길로 다니고, 어두운 곳은 반사띠를 하고 어른과 함께 가요.' },
          ];
        })(),
      },
      worksheet: { items: [{ type: 'choice', prompt: '저녁에 어느 길로 가요?', options: ['가로등 있는 밝은 길', '어두운 골목'], answer: '가로등 있는 밝은 길' }] },
      notes: '지도 핀은 한 칸에 하나라 "핀을 옮기며 따라가기" 대신 밝은 길 지역에 꽂는 문항으로 바꾸었다.',
    }),
    VIS({
      id: 'saf-traffic.e12.visible.wrap.tree', type: 'wrap', title: '잘 보이게 그물',
      method: '잘 보이게 그물', tool: 'mindmap', minutes: 6,
      levels: { easy: '교사가 "옷" 가지를 먼저 채워 보이고 나머지를 함께 채운다.', base: '옷·우산·가방 가지에 알맞은 카드를 스스로 넣는다.', challenge: '"검은 옷" 함정 카드를 왜 빼는지 말하며 넣는다.' },
      wrap: {
        teacher: '"잘 보이게 하려면 옷·우산·가방을 어떻게 할까요?" 가지마다 카드를 넣고 우리 반 가방에 반사띠가 있는지 찾아보게 한다. 출구 2번에서 "네"를 고른 학생에게 "깊게 쓰면 비는 덜 맞지만 앞에서 오는 차가 안 보여요"라고 말해 준다. 내일 비가 오면 오늘 고른 차림을 해 보자고 마무리한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '잘 보이게', slots: ['옷', '우산', '가방'], cards: ['밝은 옷', '검은 옷', '투명 우산', '반사띠 가방'] }, prompt: '가지마다 알맞은 카드를 넣어요.', target: { sort: { 옷: ['밝은 옷'], 우산: ['투명 우산'], 가방: ['반사띠 가방'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '우산을 깊게 쓰면 더 안전해요?', options: ['네', '아니요, 앞이 보이게'], answer: 1, difficulty: 0.1, explain: '우산은 앞이 보이게 눈 위로 들어요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '잘 보이게 다녀요',
        items: [
          { type: 'check', prompt: '잘 보이는 차림에 ✓ 해요.', options: ['밝은 옷', '투명 우산', '반사띠'] },
          { type: 'draw', prompt: '비 오는 날 잘 보이는 내 차림을 그려요.' },
        ],
        easy: { note: '밝은 색을 떠올려요.', items: [{ type: 'draw', prompt: '노란 비옷을 색칠해요.' }] },
      },
    }),
    VIS({
      id: 'saf-traffic.e12.visible.wrap.check', type: 'wrap', title: '비 오는 날 스스로 점검',
      method: '비 오는 날 스스로 점검', tool: 'timer', minutes: 6,
      levels: { easy: '교사가 점검 칸 두 개를 읽어 주고 함께 표시한다.', base: '점검 칸 세 개를 스스로 읽고 내일 할 것에 표시한다.', challenge: '표시한 뒤 가족에게 알려 줄 것을 하나 골라 짝에게 말한다.' },
      wrap: {
        teacher: '"내일 비가 온다면 나는 무엇을 할까요?" 점검 칸을 함께 읽고 내일 할 것에 표시하게 한다. 출구 2번에서 "뛰어가요"를 고른 학생에게 "빗길은 미끄럽고 차도 바로 못 서요. 조금 일찍 나와서 천천히 걸어요"라고 말해 준다. 가족에게 투명 우산과 반사띠 이야기를 해 보자고 마무리한다.',
        exitTicket: [
          SELF('비 오는 날 점검', ['밝은 옷 입기', '앞이 보이게 우산', '천천히 걷기']),
          { type: 'choice', prompt: '비 오는 날 어떻게 걸어요?', options: ['뛰어가요', '천천히 걸어요'], answer: 1, difficulty: 0.1, explain: '빗길은 미끄러워 천천히 걸어요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '비 오는 날 점검',
        items: [
          { type: 'table', prompt: '좋으면 ○, 안 되면 ×를 써요.', columns: ['차림·행동', '○ / ×'], cells: [['어두운 옷에 깊은 우산', ''], ['밝은 옷에 투명 우산', ''], ['빗길에서 천천히 걷기', '']], answer: '×, ○, ○' },
          { type: 'draw', prompt: '빗길을 천천히 걷는 모습을 그려요.' },
        ],
      },
    }),
  ];

  // =====================================================================================================
  // 2학년 · 찻길은 놀이터가 아니에요
  const PLAY = MOD('saf-traffic.e12.play', [2]);
  const TOWN = [{ name: '놀이터', icon: 'park', at: [0, 0] }, { name: '운동장', icon: 'school', at: [3, 0] }, { name: '찻길', icon: 'dot', at: [1, 1] }, { name: '주차장', icon: 'dot', at: [2, 2] }];
  const T_PLAY = [
    PLAY({
      id: 'saf-traffic.e12.play.intro.where', type: 'intro', title: '놀아도 되는 곳 찾기',
      method: '놀아도 되는 곳 찾기', tool: 'map', minutes: 5,
      levels: { easy: '교사가 놀이터·찻길 두 칸만 짚어 보이고 "놀아요, 안 놀아요"를 함께 말한다.', base: '네 칸(놀이터·운동장·찻길·주차장) 가운데 놀이터에 핀이 꽂히는 시연을 보고 나머지 칸도 말한다.', challenge: '집에서 놀이터까지 가는 안전한 길을 손가락으로 따라가 본다.' },
      intro: {
        teacher: '"우리 동네에서 놀아도 되는 곳은 어디일까요?" 칸을 하나씩 짚으며 "여기서 놀아요?"라고 묻고 엄지로 답하게 한 뒤 시연 단추로 놀이터에 핀이 꽂히는 모습을 보여 준다. "차가 없을 때는 찻길에서 놀아도 돼요"라는 말이 나오면 "놀다 보면 차가 오는 소리를 들을 수 있을까요?"라고 되묻는다. 오늘은 노는 곳과 찻길을 구별하는 법을 배운다고 밝힌다.',
        student: '놀아도 되는 곳에는 엄지를 위로, 안 되는 곳에는 아래로 해요.',
        demo: { tool: 'map', options: { grid: [4, 3], places: TOWN, title: '우리 동네' }, sequence: [{ pin: [0, 0] }] },
        art: { draw: 'a paper neighborhood with a green paper playground and schoolyard full of playing children, and a gray road and parking lot left empty of play', banner: '노는 곳은 따로 있어요' },
      },
      notes: '핀 색은 바꿀 수 없어 "초록 핀·빨간 핀"은 엄지 위·아래로 대신한다.',
    }),
    PLAY({
      id: 'saf-traffic.e12.play.intro.goodbad', type: 'intro', title: '노는 곳 좋아요·안돼요',
      method: '좋아요·안돼요', tool: 'emotion', minutes: 5,
      levels: { easy: '교사가 장면 두 개(놀이터 그네·주차장 술래잡기)만 읽어 주고 엄지로 답하게 한다.', base: '놀이 장면 네 개가 좋아요·안돼요로 나뉘는 시연을 보며 따라 말한다.', challenge: '안돼요 장면을 어디로 옮기면 좋을지 말한다.' },
      intro: {
        teacher: '"이 친구들은 어디서 놀고 있나요? 좋아요일까요, 안돼요일까요?" 장면을 하나씩 읽어 주며 엄지로 답하게 한 뒤 시연 단추로 두 칸에 나뉘는 모습을 보여 준다. "주차된 차는 안 움직이니까 주차장에서 놀아도 돼요"라는 말이 나오면 "차 안에 사람이 타서 갑자기 움직이면 숨어 있는 나를 볼 수 있을까요?"라고 되묻는다.',
        student: '안돼요 장면을 하나 골라 어디로 옮기면 좋을지 짝에게 말해 보아요.',
        demo: { tool: 'emotion', options: { mode: 'sort', slots: ['좋아요', '안돼요'], cards: [C('swing', '놀이터 그네'), C('tag', '주차장 술래잡기'), C('ball', '골목 공놀이'), C('run', '운동장 달리기')], shuffle: false, weather: false }, sequence: [{ sort: { 좋아요: ['swing', 'run'], 안돼요: ['tag', 'ball'] } }] },
        art: { draw: 'split paper scene: children on swings in a playground on one side, children playing tag between parked cars on the other side with a warning cloud', banner: '어디서 놀까요?' },
      },
    }),
    PLAY({
      id: 'saf-traffic.e12.play.activity.ball', type: 'activity', title: '공이 찻길로 굴러가요',
      method: '공이 찻길로 굴러가요', tool: 'story', minutes: 15,
      levels: { easy: '첫 장면이 놓여 있고, 놓으면 바로 맞는지 알려 준다.', base: '장면 3장 차례 놓기, 어른 올 때까지 할 일 고르기를 하고 친구 말풍선을 채운다.', challenge: '차례 놓기에 "공 보며 뛰어들어요" 틀린 장면이 섞여 빼고 놓는다.' },
      activity: {
        title: '찻길로 간 공, 다음 장면은?', tool: 'story',
        teacher: '"놀이터에서 차던 공이 울타리 밖 찻길로 굴러갔어요. 그다음 장면은 무엇일까요?" 장면을 놓은 뒤 친구가 뛰어가려 할 때 할 말을 채운다. "내 공은 내가 바로 주워야 해요"라는 학생에게 "공을 보며 뛰면 내 눈은 어디를 보고 있을까요? 차를 볼 수 있을까요?"라고 묻는다. 공은 다시 찾을 수 있지만 찻길에 뛰어드는 것은 되돌릴 수 없다는 점을 짚는다.',
        task: '이야기 장면을 놓고, 할 일을 고르고, 말풍선을 채워요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          ORDER3('찻길로 간 공, 차례로 놓아요.', [C('roll', '공이 굴러가요', 'leaf'), C('freeze', '울타리 앞 멈춤', 'tree'), C('call', '어른을 불러요', 'house')], C('dash', '공 보며 뛰어들어요', 'cloud'), 0.1),
          { prompt: '어른이 올 때까지 할 일은?', toolOptions: { mode: 'pick', basket: '기다려요', cards: [C('wait', '보도에서 기다려요', 'tree'), C('edge', '찻길 끝에 서요', 'cloud'), C('peek', '공 보며 다가가요', 'cloud')] }, target: { pick: ['wait'] }, difficulty: 0.15 },
          { prompt: '친구에게 할 말을 채워요.', toolOptions: { mode: 'fill', slots: [{ id: 'f', who: '나', label: '___! 어른 부르자.' }], cards: ['멈춰', '뛰어', '빨리'] }, target: { fill: { f: '멈춰' } }, difficulty: 0.2,
            conclude: '공이 찻길로 가면 멈추고 어른을 불러요. 친구에게도 "멈춰!"라고 말해요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '공이 찻길로 갔어요.', options: ['멈추고 어른을 불러요', '바로 뛰어가 주워요'], answer: '멈추고 어른을 불러요' }] },
    }),
    PLAY({
      id: 'saf-traffic.e12.play.activity.parking', type: 'activity', title: '주차장에서 생긴 일',
      method: '주차장에서 생긴 일', tool: 'emotion', minutes: 14,
      levels: { easy: '보기 2개, 고르면 결과가 바로 보이고 교사가 결과를 읽어 준다.', base: '숨바꼭질 장면·세워 둔 차 장면에서 고르고, 결과는 확인한 뒤에 보인다.', challenge: '장면마다 헷갈리는 보기 1개가 더 있고, 차가 뒤로 움직이는 장면까지 판단한다.' },
      activity: {
        title: '주차장에서 놀자는 친구에게', tool: 'emotion',
        teacher: '"친구가 주차장에서 숨바꼭질하자고 해요. 어떻게 할까요?" 고른 뒤 짝과 친구·나 역할로 말해 본다. "같이 숨으면 재밌어요"를 고른 학생에게 "차 뒤에 숨은 나를 차에 탄 사람이 볼 수 있을까요?"라고 묻는다. 거절할 때는 "놀이터로 가자!"처럼 다른 놀이를 제안하면 친구도 지킬 수 있다는 점을 짚는다.',
        task: '장면을 듣고 어떻게 할지 골라요.', levels: { easy: {}, base: { revealAfterCheck: true }, challenge: { revealAfterCheck: true } },
        items: [
          BRANCH('숨바꼭질하자고 해요.', '주차장 숨바꼭질 하재요.',
            { id: 'move', text: '놀이터로 가자 해요', result: '놀이터에서 신나게 놀았어요.', mood: '신남' },
            { id: 'hide', text: '같이 숨어요', result: '차가 움직이면 나를 못 봐요.', mood: '걱정' },
            { id: 'under', text: '차 밑에 숨어요', result: '아주 위험해요.', mood: '무서움' }, 0.1),
          BRANCH('세워 둔 차 옆에서 놀재요.', '세워 둔 차 옆에서 놀재요.',
            { id: 'say', text: '"차는 움직여" 말해요', result: '친구와 함께 놀이터로 갔어요.', mood: '뿌듯함' },
            { id: 'play', text: '차 옆에서 놀아요', result: '차가 갑자기 출발할 수 있어요.', mood: '놀람' },
            { id: 'lean', text: '차에 기대 쉬어요', result: '차가 움직이면 넘어져요.', mood: '걱정' }, 0.15),
          BRANCH('차가 뒤로 움직여요.', '주차장 차가 뒤로 와요.',
            { id: 'away', text: '멀리 비켜요', result: '차가 지나간 뒤 보도로 갔어요.', mood: '편안함' },
            { id: 'stay', text: '그 자리에 서요', result: '운전자가 뒤에 선 나를 못 볼 수 있어요.', mood: '무서움' },
            { id: 'stop', text: '손으로 막아요', result: '차는 손으로 막을 수 없어요.', mood: '놀람' }, 0.2, { conclude: '주차장은 차가 다니는 곳이에요. 놀이는 놀이터에서 해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '주차장에서 놀자고 해요.', options: ['놀이터로 가자고 해요', '차 뒤에 같이 숨어요'], answer: '놀이터로 가자고 해요' }] },
    }),
    PLAY({
      id: 'saf-traffic.e12.play.activity.wheel', type: 'activity', title: '킥보드·인라인 탈 곳 고르기',
      method: '킥보드·인라인 탈 곳 고르기', tool: 'kitchen', minutes: 15,
      levels: { easy: '장소 카드 3장을 탈 곳·안 될 곳으로 나누고, 놓으면 바로 맞는지 알려 준다.', base: '장소 카드 5장을 나누고, 탈 때 쓸 보호 장구를 담는다.', challenge: '카드가 섞여 나오고, 타기 전 차례 놓기까지 한다.' },
      activity: {
        title: '킥보드·인라인은 어디서 탈까?', tool: 'kitchen',
        teacher: '"어린이 킥보드와 인라인은 어디서 타야 할까요?" 장소 카드를 나눈 뒤 보호 장구를 담으며 몸에 차는 흉내를 낸다. "보도 한가운데는 사람 길이라 괜찮아요"라는 학생에게 "빠르게 달리다 걷는 사람과 부딪히면 어떻게 될까요?"라고 묻는다. 탈 것은 놀이터·운동장처럼 차가 없는 곳에서, 안전모를 쓰고 탄다는 점을 짚는다.',
        task: '장소 카드를 나누고, 보호 장구를 담아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          { prompt: '탈 곳과 안 될 곳을 나눠요.', toolOptions: { mode: 'sort', autoMotif: false, groups: false, slots: [{ id: 'ok', label: '타도 돼요' }, { id: 'no', label: '안 돼요' }], cards: ['놀이터', '찻길', '운동장', '보도 한가운데', '주차장'] }, target: { sort: { ok: ['놀이터', '운동장'], no: ['찻길', '보도 한가운데', '주차장'] } }, difficulty: 0.1,
            levels: { easy: { prompt: '탈 곳과 안 될 곳을 나눠요(3장).', toolOptions: { cards: ['놀이터', '찻길', '운동장'] }, target: { sort: { ok: ['놀이터', '운동장'], no: ['찻길'] } } } } },
          { prompt: '탈 때 쓸 보호 장구를 담아요.', toolOptions: { mode: 'pick', autoMotif: false, basket: '보호 장구', cards: ['안전모', '슬리퍼', '무릎 보호대', '이어폰', '팔꿈치 보호대'] }, target: { pick: ['안전모', '무릎 보호대', '팔꿈치 보호대'] }, difficulty: 0.15 },
          { prompt: '타기 전 차례로 놓아요.', toolOptions: { mode: 'order', autoMotif: false, cards: [C('ride', '천천히 타요'), C('gear', '보호 장구 해요'), C('go', '놀이터로 가요')] }, target: { order: ['gear', 'go', 'ride'] }, difficulty: 0.2,
            conclude: '킥보드·인라인은 차 없는 놀이터·운동장에서, 보호 장구를 하고 타요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '킥보드는 어디서 타요?', options: ['놀이터', '찻길'], answer: '놀이터' }] },
      notes: '탈 것의 종류·나이 기준·도로 규칙은 다루지 않는다(근거 파일에 없음). 보호 장구는 일반 안전 수칙으로 사람 확인 목록에 있다.',
    }),
    PLAY({
      id: 'saf-traffic.e12.play.activity.game', type: 'activity', title: '"멈춰 놀이"',
      method: '“멈춰 놀이”', tool: 'timer', minutes: 14,
      levels: { easy: '놀이 두 번이 되게 타이머를 맞추고, 기록판 두 칸에 잘 멈춘 친구 수를 적는다.', base: '놀이 세 번이 되게 맞추고 멈춘 뒤 할 일 차례를 놓는다.', challenge: '놀이 네 번이 되게 맞추고, 멈출 때 손 들고 좌우 살피기 동작을 더한다.' },
      activity: {
        title: '신호가 울리면 모두 멈추기', tool: 'timer',
        teacher: '"신호음이 울리면 모두 그 자리에 딱 멈춰요! 찻길 앞에서 멈추는 연습이에요." 타이머의 운동 칸은 걷기·제자리 뛰기, 쉬기 칸은 멈추기로 정한 것이 우리 반 놀이 약속이라고 먼저 말한다. 멈춘 뒤 한 발 더 나가는 학생에게 "찻길 앞에서 한 발은 아주 커요. 바로 멈추는 연습을 한 번 더 할까요?"라고 말해 준다. 잘 멈춘 친구 수는 모둠이 세어 적고, 이름은 적지 않는다.',
        task: '안전 점검을 하고, 놀이 횟수를 맞추고, 잘 멈춘 친구 수를 적어요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '놀이 전 안전 점검을 해요.', toolOptions: { title: '놀이 전 점검', safety: ['둘레에 책상 없음', '신발 끈 확인', '밀지 않기'] }, target: { safety: true }, difficulty: 0.1 },
          { prompt: '멈춰 놀이 세 번을 맞춰요.', toolOptions: { title: '놀이 횟수', plan: { work: 10, rest: 5, rounds: 1 } }, target: { plan: { rounds: 3 } }, difficulty: 0.15,
            hints: ['한 번 움직이고 한 번 멈추면 한 번이에요.', '번 칸이 놀이 횟수예요.', '번 칸을 3에 맞춰요.'],
            levels: { easy: { prompt: '멈춰 놀이 두 번을 맞춰요.', target: { plan: { rounds: 2 } } }, challenge: { prompt: '멈춰 놀이 네 번을 맞춰요.', target: { plan: { rounds: 4 } } } } },
          { prompt: '멈춘 뒤 할 일을 차례로 놓아요.', toolOptions: { title: '멈춘 뒤', cards: ['좌우 살펴요', '딱 멈춰요', '손 들어요'] }, target: { order: ['딱 멈춰요', '손 들어요', '좌우 살펴요'] }, difficulty: 0.15 },
          { prompt: '잘 멈춘 친구 수를 적어요.', toolOptions: { title: '잘 멈춘 친구', unit: '명', fields: ['1번', '2번', '3번'] }, target: { records: 2 }, difficulty: 0.15, conclude: '신호에 바로 멈추는 몸이 찻길 앞에서 나를 지켜요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '찻길 앞에서는 딱 ___.', answer: '멈춰요' }] },
      notes: '타이머 초 값은 놀이 진행용이다. 기록판에는 모둠이 센 수만 적는다(학생 이름 없음).',
    }),
    PLAY({
      id: 'saf-traffic.e12.play.wrap.tree', type: 'wrap', title: '안전하게 노는 곳 그물',
      method: '노는 곳 그물', tool: 'mindmap', minutes: 6,
      levels: { easy: '교사가 "놀이터" 가지를 먼저 채워 보이고 나머지를 함께 채운다.', base: '놀이터·운동장 가지에 놀이 카드 4장을 넣고 함정 카드를 남긴다.', challenge: '함정 카드("주차장 술래")를 뺀 까닭을 말한다.' },
      wrap: {
        teacher: '"놀이터에서는 무엇을 하고, 운동장에서는 무엇을 할까요?" 가지마다 카드를 넣고 그 놀이를 몸짓으로 해 본다. "주차장 술래" 카드를 넣으려는 학생에게 "주차장은 차가 드나드는 곳이에요. 어디로 옮기면 좋을까요?"라고 묻는다. 출구 2번에서 "네"를 고른 학생에게 차는 갑자기 나타날 수 있어 찻길에서는 놀지 않는다고 말해 준다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '안전하게 놀아요', slots: ['놀이터', '운동장'], cards: ['그네', '축구', '주차장 술래', '시소', '이어달리기'] }, prompt: '놀이 카드를 가지에 넣어요.', target: { sort: { 놀이터: ['그네', '시소'], 운동장: ['축구', '이어달리기'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '차가 없으면 찻길에서 놀아요?', options: ['네', '아니요'], answer: 1, difficulty: 0.1, explain: '차는 갑자기 올 수 있어요. 찻길에서는 놀지 않아요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '안전하게 노는 곳',
        items: [
          { type: 'table', prompt: '놀아도 되면 ○, 안 되면 ×를 써요.', columns: ['곳', '○ / ×'], cells: [['놀이터', ''], ['주차장', ''], ['운동장', ''], ['찻길', '']], answer: '○, ×, ○, ×' },
          { type: 'draw', prompt: '놀이터에서 노는 내 모습을 그려요.' },
        ],
      },
    }),
    PLAY({
      id: 'saf-traffic.e12.play.wrap.graph', type: 'wrap', title: '우리 반 노는 곳 그림그래프',
      method: '우리 반 노는 곳 그림그래프', tool: 'chart', minutes: 6,
      levels: { easy: '교사가 줄마다 사람 그림을 함께 세고 가장 많은 곳을 고른다.', base: '세 줄을 스스로 세어 가장 많은 곳을 고른다.', challenge: '그곳에 갈 때 조심할 길을 말한다.' },
      wrap: {
        teacher: '"이 그래프는 수업을 위해 지은 가상의 우리 반이에요. 방과 후 어디서 노는지 사람 그림 하나가 친구 한 명이에요." 줄마다 세게 한 뒤 가장 많은 곳을 고른다. "놀이터에 갈 때는 어떤 길로 갈까요?"라고 물어 오늘 배운 보도·횡단보도 약속과 잇는다. 출구 2번에서 "찻길 가운데"를 고른 학생에게 놀이터 가는 길도 보도 안쪽으로 걷는다고 말해 준다.',
        exitTicket: [
          GRAPH('방과 후 노는 곳(가상)', [['놀이터', 6], ['집', 4], ['운동장', 3]], '가장 많이 노는 곳은?', 0, '친구들이 가장 많이 노는 곳을 골라요.'),
          { type: 'choice', prompt: '놀이터에 갈 때 어디로 걸어요?', options: ['보도 안쪽', '찻길 가운데'], answer: 0, difficulty: 0.1, explain: '놀이터 가는 길도 보도 안쪽으로 걸어요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '우리 반은 어디서 놀까?',
        items: [
          { type: 'table', prompt: '그래프를 보고 수를 써요.', columns: ['노는 곳', '친구 수'], cells: [['놀이터', ''], ['집', ''], ['운동장', '']], answer: '6, 4, 3' },
          { type: 'draw', prompt: '놀이터에 가는 길을 그려요.' },
        ],
      },
      notes: '그림그래프 수는 수업용 가상 자료다.',
    }),
  ];

  // =====================================================================================================
  // 2학년 · 버스·지하철 처음 타기
  const TRN = MOD('saf-traffic.e12.transit', [2]);
  const T_TRN = [
    TRN({
      id: 'saf-traffic.e12.transit.intro.line', type: 'intro', title: '정류장 줄 서기 이야기',
      method: '정류장 줄 서기 이야기', tool: 'story', minutes: 5,
      levels: { easy: '교사가 장면 세 장(줄 서요·버스가 서요·타요)만 읽어 주며 놓아 보인다.', base: '장면 네 장(내리는 사람 먼저 더하기)이 차례대로 놓이는 시연을 보고 따라 말한다.', challenge: '새치기 장면을 보여 주고 어떻게 바꿀지 말한다.' },
      intro: {
        teacher: '"버스 정류장에 사람들이 기다려요. 버스가 서면 누가 먼저일까요?" 장면 카드를 읽어 준 뒤 시연 단추로 차례대로 놓이는 모습을 보여 준다. "타는 사람이 먼저 타야 빨라요"라는 말이 나오면 "안에 있는 사람이 못 내리면 문 앞이 어떻게 될까요?"라고 되묻는다. 오늘은 버스·지하철을 처음 탈 때 지킬 약속을 배운다고 밝힌다.',
        student: '"내리는 사람 먼저!"를 따라 말하며 옆으로 비켜서는 흉내를 내요.',
        demo: { tool: 'story', options: { mode: 'order', slots: ['처음', '다음', '그다음', '끝'], cards: [C('off', '내리는 사람 먼저', 'leaf'), C('on', '차례로 타요', 'star'), C('line', '줄 서요', 'tree'), C('stop', '버스가 서요', 'sun')] }, sequence: [{ order: ['line', 'stop', 'off', 'on'] }] },
        art: { draw: 'paper people lined up at a paper bus stop, standing aside as passengers step off a paper city bus before they get on', banner: '내리는 사람 먼저' },
      },
    }),
    TRN({
      id: 'saf-traffic.e12.transit.intro.platform', type: 'intro', title: '승강장 안전선 찾기',
      method: '승강장 안전선 찾기', tool: 'map', minutes: 5,
      levels: { easy: '교사가 안전선 뒤·앞 두 줄만 짚어 보인다.', base: '선로·안전선 앞·안전선 뒤 세 줄 가운데 안전선 뒤에 핀이 꽂히는 시연을 본다.', challenge: '승강기까지 가는 길을 손가락으로 따라가 본다.' },
      intro: {
        teacher: '"지하철 승강장 바닥에 노란 선이 있어요. 우리는 어디에서 기다릴까요?" 지도의 세 줄을 손으로 짚게 한 뒤 시연 단추로 안전선 뒤에 핀이 꽂히는 모습을 보여 준다. "앞에 서야 빨리 타요"라는 말이 나오면 "열차가 들어올 때 바람이 세게 불어요. 선 앞에 서 있으면 어떻게 될까요?"라고 되묻는다.',
        student: '교실 바닥 노란 선 뒤에 두 발을 모으고 서 보아요.',
        demo: { tool: 'map', options: { grid: [4, 3], title: '지하철 승강장', regions: [{ name: '선로', cells: [[0, 0], [1, 0], [2, 0], [3, 0]], color: 'sky' }, { name: '안전선 앞', cells: [[0, 1], [1, 1], [2, 1], [3, 1]], color: 'rose' }, { name: '안전선 뒤', cells: [[0, 2], [1, 2], [2, 2]], color: 'mint' }], places: [{ name: '승강기', icon: 'dot', at: [3, 2] }] }, sequence: [{ pin: [1, 2] }] },
        art: { draw: 'a paper subway platform with a bright yellow safety line, paper children waiting behind it as a paper train pulls in', banner: '노란 선 뒤에서' },
      },
      notes: '교실 바닥에 노란 테이프로 안전선을 붙여 서 보게 한다. 실제 승강장에는 스크린도어가 있는 곳도 있다.',
    }),
    TRN({
      id: 'saf-traffic.e12.transit.intro.sound', type: 'intro', title: '안내 방송 듣고 고르기',
      method: '안내 방송 듣고 고르기', tool: 'emotion', minutes: 5,
      levels: { easy: '교사가 "문이 닫힙니다" 방송을 흉내 내고 두 그림 가운데 함께 고른다.', base: '시연에서 "다음 차 기다려요"가 골라지는 모습을 보고 까닭을 말한다.', challenge: '"버스가 출발합니다" 방송이면 어떻게 할지도 말한다.' },
      intro: {
        teacher: '"딩동, 문이 닫힙니다!" 교사가 방송을 흉내 낸 뒤 "지금 뛰어들까요, 다음 차를 기다릴까요?"라고 묻는다. 시연 단추로 "다음 차 기다려요"가 골라지는 모습을 보여 준다. "뛰면 탈 수 있어요"라는 말이 나오면 "문은 사람이 끼었는지 늘 알아챌 수 있을까요? 다음 차는 곧 와요"라고 되묻는다.',
        student: '"문이 닫힙니다!"를 들으면 두 발을 멈추고 "다음 차!"라고 말해요.',
        demo: { tool: 'emotion', options: { mode: 'branch', situation: '"문이 닫힙니다" 방송이 나와요.', choices: [{ id: 'jump', text: '뛰어들어요', result: '문에 낄 수 있어요.', mood: '무서움' }, { id: 'wait', text: '다음 차 기다려요', result: '다음 차를 편하게 탔어요.', mood: '편안함' }] }, sequence: [{ choice: 'wait' }] },
        art: { draw: 'paper subway doors sliding shut with a speaker icon above, a paper child stopping calmly behind the yellow line', banner: '문 닫히면 다음 차' },
      },
    }),
    TRN({
      id: 'saf-traffic.e12.transit.activity.order', type: 'activity', title: '버스 타는 차례 놓기',
      method: '버스 타는 차례 놓기', tool: 'timeline', minutes: 15,
      levels: { easy: '카드 3장(줄 서요·버스가 서요·타요)만 놓고, 놓으면 바로 맞는지 알려 준다.', base: '카드 5장을 차례로 놓고, 내리는 차례와 기다릴 때·버스 안에서를 나눈다.', challenge: '카드가 섞여 나오고, 내리는 차례에 "버스 앞으로 건너요" 틀린 카드가 섞여 빼고 놓는다.' },
      activity: {
        title: '시간 띠에 버스 타는 차례 놓기', tool: 'timeline',
        teacher: '"시내버스를 처음 타요. 무엇부터 할까요?" 카드를 놓은 뒤 의자를 버스처럼 놓고 차례대로 몸으로 해 본다. "타자마자 자리로 뛰어가요"라는 학생에게 "버스가 출발할 때 손잡이를 안 잡고 있으면 어떻게 될까요?"라고 묻는다. 내릴 때도 버스가 완전히 선 뒤 손잡이를 잡고 내린다는 점을 짚는다.',
        task: '카드를 먼저 할 것부터 왼쪽에 놓고, 때에 맞게 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          { prompt: '버스 타는 차례로 놓아요.', toolOptions: { slots: 5, cards: [C('on', '타요'), C('hold', '손잡이 잡아요'), C('line', '줄 서요'), C('off', '내리는 사람 먼저'), C('stop', '버스가 서요')] }, target: { order: ['line', 'stop', 'off', 'on', 'hold'] }, difficulty: 0.1,
            levels: { easy: { prompt: '버스 타는 차례로 놓아요(3장).', toolOptions: { slots: 3, cards: [C('on', '타요'), C('line', '줄 서요'), C('stop', '버스가 서요')] }, target: { order: ['line', 'stop', 'on'] } } } },
          ORDER3('버스에서 내리는 차례로 놓아요.', [C('stop', '버스가 완전히 서요'), C('step', '손잡이 잡고 내려요'), C('walk', '보도 안쪽으로 가요')], C('front', '버스 앞으로 건너요'), 0.15),
          { prompt: '기다릴 때와 버스 안을 나눠요.', toolOptions: { mode: 'sort', slots: [{ id: 'wait', label: '기다릴 때' }, { id: 'in', label: '버스 안에서' }], cards: ['안전선 뒤 서요', '손잡이 잡아요', '줄 서요', '앉아서 가요'] }, target: { sort: { wait: ['안전선 뒤 서요', '줄 서요'], in: ['손잡이 잡아요', '앉아서 가요'] } }, difficulty: 0.2,
            conclude: '줄 서고, 내리는 사람 먼저, 타면 손잡이를 잡아요.' },
        ].map((it) => Object.assign(it, { toolOptions: Object.assign({ axis: ['먼저', '나중'] }, it.toolOptions) })),
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '버스가 서면 ___ 사람이 먼저예요.', answer: '내리는' }] },
    }),
    TRN({
      id: 'saf-traffic.e12.transit.activity.hold', type: 'activity', title: '손잡이 잡는 자세 고르기',
      method: '손잡이 잡는 자세 고르기', tool: 'body', minutes: 14,
      levels: { easy: '짚은 곳의 이름이 바로 보인다.', base: '이름 없이 잡을 곳·버틸 곳을 짚고, 출발할 때 자세를 보기에서 고른다.', challenge: '자리가 없을 때 기댈 곳까지 보기에서 고른다.' },
      activity: {
        title: '서서 갈 때 잡는 곳과 버티는 곳', tool: 'body',
        teacher: '"버스에서 서서 갈 때 무엇을 잡고, 발은 어떻게 할까요?" 종이 몸을 짚기 전에 자리에서 일어나 짝의 어깨를 손잡이처럼 잡고 발을 살짝 벌려 서 보게 한다. "손 안 잡아도 균형 잡을 수 있어요"라는 학생에게 "버스가 갑자기 서면 내 몸은 어느 쪽으로 쏠릴까요?"라고 묻는다. 문에 기대면 문이 열릴 때 넘어질 수 있다는 점을 짚는다.',
        task: '종이 몸에서 짚고, 자세를 골라요.', levels: { easy: { names: true }, base: {}, challenge: {} },
        items: [
          { prompt: '손잡이를 잡는 곳은요?', toolOptions: { mode: 'parts', parts: ['목', '팔꿈치', '손목', '무릎', '발목'] }, target: { parts: ['손목'] }, difficulty: 0.1,
            hints: ['손잡이와 이어지는 곳을 떠올려요.', '팔 끝 쪽이에요.', '손목을 골라요.'] },
          { prompt: '발을 벌려 버티는 곳은요?', toolOptions: { mode: 'parts', parts: ['어깨', '허리', '무릎', '발목'] }, target: { parts: ['발목'] }, difficulty: 0.15,
            hints: ['바닥에 닿는 쪽을 떠올려요.', '다리 맨 아래쪽이에요.', '발목을 골라요.'] },
          { prompt: '버스가 출발해요. 어떤 자세?', toolOptions: { mode: 'parts', parts: ['손목', '발목'], readOnly: true, ask: { q: '버스가 출발할 때 자세는?', choices: ['잡고 발 벌려요', '손 놓고 서요', '문에 기대요'] } }, target: { pick: 0 }, difficulty: 0.2 },
          { prompt: '자리가 없어요. 어디를 잡아요?', toolOptions: { mode: 'parts', parts: ['손목'], readOnly: true, ask: { q: '자리가 없을 때 잡을 곳은?', choices: ['기둥을 잡아요', '문에 기대요', '친구 가방 잡아요'] } }, target: { pick: 0 }, difficulty: 0.2,
            conclude: '서서 갈 때는 손잡이나 기둥을 잡고 발을 살짝 벌려 버텨요. 문에는 기대지 않아요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '서서 갈 때 무엇을 잡아요?', options: ['손잡이', '문'], answer: '손잡이' }] },
      notes: '종이 몸에 손·발 칸이 없어 잡는 곳은 손목, 버티는 곳은 발목으로 짚는다. 학생은 실제로 서서 자세를 해 본다.',
    }),
    TRN({
      id: 'saf-traffic.e12.transit.activity.door', type: 'activity', title: '문이 닫히려고 해요',
      method: '문이 닫히려고 해요', tool: 'emotion', minutes: 15,
      levels: { easy: '보기 2개, 고르면 결과가 바로 보이고 교사가 결과를 읽어 준다.', base: '친구만 탄 장면·버스 문 장면에서 고르고, 결과는 확인한 뒤에 보인다.', challenge: '장면마다 헷갈리는 보기 1개가 더 있고, 내가 먼저 내린 장면까지 판단한다.' },
      activity: {
        title: '친구와 헤어질 것 같을 때', tool: 'emotion',
        teacher: '"친구는 지하철에 탔는데 내 앞에서 문이 닫히려 해요. 어떻게 할까요?" 고르기 전에 "헤어지면 어떻게 다시 만날까?"를 미리 약속해 두는 것이 좋다고 말한다. "손을 넣으면 문이 다시 열려요"를 고른 학생에게 "문이 손을 못 알아채고 닫히면 어떻게 될까요?"라고 묻는다. 헤어지면 내린 곳에서 기다리고 역무원·기사님 같은 어른께 알린다는 점을 짚는다.',
        task: '장면을 듣고 어떻게 할지 골라요.', levels: { easy: {}, base: { revealAfterCheck: true }, challenge: { revealAfterCheck: true } },
        items: [
          BRANCH('친구만 타고 문이 닫혀요.', '친구만 타고 문이 닫혀요.',
            { id: 'next', text: '다음 차 타요', result: '다음 역에서 친구를 만났어요.', mood: '편안함' },
            { id: 'hand', text: '손을 넣어요', result: '문에 손이 낄 수 있어요.', mood: '무서움' },
            { id: 'bag', text: '가방을 넣어요', result: '가방과 함께 끌려갈 수 있어요.', mood: '걱정' }, 0.1),
          BRANCH('버스 문이 닫히고 있어요.', '버스 문이 닫히고 있어요.',
            { id: 'wait', text: '다음 버스 기다려요', result: '다음 버스를 편하게 탔어요.', mood: '편안함' },
            { id: 'knock', text: '문 두드려요', result: '버스 옆은 기사님이 잘 못 봐요.', mood: '걱정' },
            { id: 'run', text: '버스 따라 뛰어요', result: '찻길로 나가게 돼요.', mood: '무서움' }, 0.15),
          BRANCH('나만 먼저 내렸어요.', '나만 내리고 문이 닫혔어요.',
            { id: 'stay', text: '내린 곳에서 기다려요', result: '어른께 알리고 기다려 다시 만났어요.', mood: '편안함' },
            { id: 'chase', text: '열차를 따라 뛰어요', result: '승강장 끝은 위험해요.', mood: '무서움' },
            { id: 'home', text: '혼자 집에 가요', result: '어른이 나를 찾지 못해요.', mood: '걱정' }, 0.2, { conclude: '닫히는 문에 몸을 넣지 않아요. 헤어지면 그 자리에서 기다리고 어른께 알려요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '문이 닫혀요. 어떻게 해요?', options: ['다음 차를 타요', '손을 넣어요'], answer: '다음 차를 타요' }] },
      notes: '헤어졌을 때 만날 곳은 집마다 다르다. "내린 곳에서 기다리고 어른께 알리기"까지만 정하고, 자세한 약속은 가정과 정하게 한다.',
    }),
    TRN({
      id: 'saf-traffic.e12.transit.activity.gap', type: 'activity', title: '지하철 탈 때 조심할 것',
      method: '지하철 탈 때 조심할 것', tool: 'kitchen', minutes: 14,
      levels: { easy: '점검 카드 3장 가운데 맞는 것만 표시한다.', base: '점검 카드 5장 가운데 맞는 것만 표시하고, 때마다 조심할 것을 짝 짓는다.', challenge: '에스컬레이터 카드까지 섞인 7장에서 표시하고, 에스컬레이터 약속을 담는다.' },
      activity: {
        title: '승강장·열차에서 조심할 것 표시하기', tool: 'kitchen',
        teacher: '"지하철을 탈 때 조심할 것만 골라 표시해 볼까요?" 카드를 하나씩 소리 내어 읽고 맞는 것만 누르게 한다. "문에 기대면 편해요"를 누르려는 학생에게 "다음 역에서 그 문이 열리면 어떻게 될까요?"라고 묻는다. 열차와 승강장 사이 발밑 틈은 작아 보여도 발이 빠질 수 있어 발밑을 보며 탄다는 점을 짚는다.',
        task: '조심할 것만 표시하고, 때와 이어요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '조심할 것만 표시해요.', toolOptions: { mode: 'checklist', title: '지하철 탈 때', items: [C('line', '안전선 뒤 서기'), C('lean', '문에 기대기'), C('gap', '발밑 틈 조심'), C('run', '뛰어서 타기'), C('hold', '손잡이 잡기')] }, target: { checklist: ['line', 'gap', 'hold'] }, difficulty: 0.1,
            levels: {
              easy: { prompt: '조심할 것만 표시해요(3개).', toolOptions: { items: [C('line', '안전선 뒤 서기'), C('lean', '문에 기대기'), C('gap', '발밑 틈 조심')] }, target: { checklist: ['line', 'gap'] } },
              challenge: { prompt: '조심할 것만 표시해요(7개).', toolOptions: { items: [C('line', '안전선 뒤 서기'), C('lean', '문에 기대기'), C('gap', '발밑 틈 조심'), C('esc', '에스컬레이터 걷기'), C('run', '뛰어서 타기'), C('yellow', '노란 선 안 서기'), C('hold', '손잡이 잡기')] }, target: { checklist: ['line', 'gap', 'yellow', 'hold'] } },
            } },
          { prompt: '때와 조심할 것을 이어요.', toolOptions: { mode: 'match', autoMotif: false, slots: [{ id: 'wait', label: '기다릴 때' }, { id: 'on', label: '탈 때' }, { id: 'in', label: '안에서' }], cards: [C('line', '안전선 뒤'), C('gap', '발밑 틈 조심'), C('hold', '손잡이 잡기')] }, target: { match: { wait: 'line', on: 'gap', in: 'hold' } }, difficulty: 0.15 },
          { prompt: '에스컬레이터 약속을 담아요.', toolOptions: { mode: 'pick', autoMotif: false, basket: '에스컬레이터', cards: [C('rail', '손잡이 잡기'), C('walk', '걷거나 뛰기'), C('inside', '노란 선 안'), C('sit', '계단에 앉기')] }, target: { pick: ['rail', 'inside'] }, difficulty: 0.2,
            conclude: '안전선 뒤에서 기다리고, 발밑 틈을 보며 타고, 안에서는 손잡이를 잡아요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '열차를 탈 때 무엇을 봐요?', options: ['발밑 틈', '천장'], answer: '발밑 틈' }] },
    }),
    TRN({
      id: 'saf-traffic.e12.transit.activity.roleplay', type: 'activity', title: '교실 버스 역할놀이',
      method: '교실 버스 역할놀이', tool: 'timer', minutes: 15,
      levels: { easy: '역할놀이 두 번이 되게 타이머를 맞추고, 교사가 기사 역할을 한다.', base: '역할놀이 세 번이 되게 맞추고, 친구가 기사 역할을 번갈아 맡는다.', challenge: '역할놀이 네 번이 되게 맞추고, 출발할 때 넘어지지 않는 자세를 점검 칸으로 확인한다.' },
      activity: {
        title: '의자 버스에서 타고 내리기', tool: 'timer',
        teacher: '"의자를 두 줄로 놓아 버스를 만들었어요. 기사님이 "출발합니다!" 하면 무엇을 잡을까요?" 타이머 운동 칸은 버스가 달리는 시간, 쉬기 칸은 정류장에 선 시간으로 정한 우리 반 놀이 약속이라고 먼저 말한다. 달리는 구간에 일어나는 학생에게 "버스가 달릴 때 일어나면 어떻게 될까요? 서면 일어나요"라고 말해 준다. 기사 역할 학생이 "내리는 사람 먼저!"를 외치게 한다.',
        task: '안전 점검, 타고 내리는 차례, 횟수, 자세 점검을 해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '버스 놀이 전 점검을 해요.', toolOptions: { title: '버스 놀이 전 점검', safety: ['의자 줄 맞추기', '통로 비우기', '밀지 않기'] }, target: { safety: true }, difficulty: 0.1 },
          { prompt: '타고 내리는 차례로 놓아요.', toolOptions: { title: '버스 놀이 차례', cards: ['타요', '줄 서요', '손잡이 잡아요', '내리는 사람 먼저'] }, target: { order: ['줄 서요', '내리는 사람 먼저', '타요', '손잡이 잡아요'] }, difficulty: 0.15 },
          { prompt: '역할놀이 세 번을 맞춰요.', toolOptions: { title: '달리기·서기 되풀이', plan: { work: 15, rest: 10, rounds: 1 } }, target: { plan: { rounds: 3 } }, difficulty: 0.15,
            hints: ['한 번 달리고 한 번 서면 한 번이에요.', '번 칸이 되풀이 수예요.', '번 칸을 3에 맞춰요.'],
            levels: { easy: { prompt: '역할놀이 두 번을 맞춰요.', target: { plan: { rounds: 2 } } }, challenge: { prompt: '역할놀이 네 번을 맞춰요.', target: { plan: { rounds: 4 } } } } },
          { prompt: '출발 때 자세를 표시해요.', toolOptions: { title: '출발 자세 점검' }, target: { selfCheck: ['손잡이 잡았어요', '발을 벌렸어요', '넘어지지 않았어요'] }, difficulty: 0.15, conclude: '내리는 사람 먼저, 타면 손잡이, 달릴 때는 앉거나 잡고 있어요.' },
        ],
      },
      worksheet: { items: [{ type: 'check', prompt: '역할놀이에서 해낸 것에 ✓ 해요.', options: ['줄을 섰어요', '내리는 사람을 기다렸어요', '손잡이를 잡았어요'] }] },
      notes: '타이머 초 값은 놀이 진행용이다. 의자 사이 통로를 넓게 두고 뛰지 않게 한다.',
    }),
    TRN({
      id: 'saf-traffic.e12.transit.activity.getoff-map', type: 'activity', title: '버스에서 내린 뒤 건너기',
      method: '버스에서 내린 뒤 건너기', tool: 'map', minutes: 14,
      levels: { easy: '횡단보도가 한 곳만 있는 지도에 꽂고, 꽂으면 칸 이름이 바로 보인다.', base: '횡단보도 두 곳 가운데 가까운 곳에 꽂고, 버스 앞뒤 피할 곳을 꽂는다.', challenge: '버스가 서 있을 때 기다릴 자리까지 고른다.' },
      activity: {
        title: '정류장에서 집 쪽으로 건너기', tool: 'map',
        teacher: '"버스에서 내렸어요. 길 건너 집으로 가려면 어디로 갈까요?" 핀을 꽂기 전에 횡단보도 두 곳까지 칸을 세어 보게 한다. "버스 뒤로 바로 돌아가면 가까워요"라는 학생에게 "버스 뒤에서 나오는 나를 옆 차선 차가 볼 수 있을까요?"라고 묻는다. 버스가 떠날 때까지 보도에서 기다린 뒤 가까운 횡단보도로 건넌다는 점을 짚는다.',
        task: '알맞은 칸에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
        items: (() => {
          const G = [4, 3];
          const BUS = { name: '버스', icon: 'bus', at: [2, 1] }; const HOME = { name: '집', icon: 'house', at: [0, 0] };
          const NEAR = { name: '가까운 횡단보도', icon: 'dot', at: [0, 1] }; const FAR = { name: '먼 횡단보도', icon: 'dot', at: [3, 1] };
          const WAIT = { name: '정류장 뒤 보도', icon: 'dot', at: [1, 2] }; const STOP = { name: '정류장', icon: 'dot', at: [2, 2] };
          const RED = [{ name: '버스 앞뒤', cells: [[1, 1], [3, 0]], color: 'rose' }];
          return [
            { prompt: '버스가 떠난 뒤 건널 곳은?', toolOptions: { grid: G, places: [BUS, HOME, NEAR, FAR, STOP] }, target: { place: '가까운 횡단보도' }, difficulty: 0.1,
              levels: { easy: { toolOptions: { places: [BUS, HOME, NEAR, STOP] } } } },
            { prompt: '피해야 할 곳에 꽂아요.', toolOptions: { grid: G, places: [BUS, HOME, NEAR, STOP], regions: [{ name: '버스 바로 옆', cells: [[1, 1]], color: 'rose' }] }, target: { region: '버스 바로 옆' }, difficulty: 0.15,
              hints: ['버스 때문에 차가 안 보이는 곳을 찾아요.', '버스와 붙어 있는 찻길 칸이에요.', '빨간 칸에 꽂아요.'] },
            { prompt: '버스가 설 때 기다릴 곳은?', toolOptions: { grid: G, places: [BUS, HOME, NEAR, FAR, STOP, WAIT] }, target: { place: '정류장 뒤 보도' }, difficulty: 0.2,
              conclude: '버스 앞뒤로 건너지 않아요. 버스가 떠날 때까지 보도에서 기다린 뒤 가까운 횡단보도로 건너요.' },
          ];
        })(),
      },
      worksheet: { items: [{ type: 'choice', prompt: '버스가 아직 서 있어요.', options: ['보도에서 기다려요', '버스 뒤로 건너요'], answer: '보도에서 기다려요' }] },
      notes: '1학년 "내린 뒤 어디로 갈까"(ride)와 이어지는 2학년 활동으로, 횡단보도 두 곳 가운데 고르는 단계를 더했다.',
    }),
    TRN({
      id: 'saf-traffic.e12.transit.wrap.tree', type: 'wrap', title: '버스·지하철 약속 그물',
      method: '버스·지하철 약속 그물', tool: 'mindmap', minutes: 6,
      levels: { easy: '교사가 "기다릴 때" 가지를 먼저 채워 보이고 나머지를 함께 채운다.', base: '기다릴 때·탈 때·안에서 가지에 알맞은 카드를 스스로 넣는다.', challenge: '"문에 기대기" 함정 카드를 왜 빼는지 말하며 넣는다.' },
      wrap: {
        teacher: '"버스·지하철에서 기다릴 때, 탈 때, 안에서 무엇을 할까요?" 가지마다 카드를 넣고 그 동작을 몸으로 해 본다. 출구 2번에서 "뛰어 타요"를 고른 학생에게 "문은 늘 사람을 알아채지 못해요. 다음 차는 곧 와요"라고 말해 준다. 처음 버스를 탈 때는 꼭 어른과 함께 타 보자고 마무리한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '버스·지하철', slots: ['기다릴 때', '탈 때', '안에서'], cards: ['안전선 뒤', '문에 기대기', '내리는 사람 먼저', '손잡이 잡기'] }, prompt: '가지마다 알맞은 카드를 넣어요.', target: { sort: { '기다릴 때': ['안전선 뒤'], '탈 때': ['내리는 사람 먼저'], 안에서: ['손잡이 잡기'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '문이 닫힐 때 뛰면 탈 수 있어요?', options: ['뛰어 타요', '다음 차 타요'], answer: 1, difficulty: 0.1, explain: '닫히는 문으로 뛰어들지 않고 다음 차를 타요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '버스·지하철 약속',
        items: [
          { type: 'check', prompt: '내가 지킬 약속에 ✓ 해요.', options: ['안전선 뒤에서 기다려요', '내리는 사람 먼저', '손잡이를 잡아요'] },
          { type: 'draw', prompt: '버스에서 손잡이를 잡은 내 모습을 그려요.' },
        ],
        easy: { note: '"기다리고, 비키고, 잡아요"를 떠올려요.', items: [{ type: 'draw', prompt: '노란 안전선을 그려요.' }] },
      },
    }),
    TRN({
      id: 'saf-traffic.e12.transit.wrap.graph', type: 'wrap', title: '우리 반 타 본 교통수단',
      method: '우리 반 타 본 교통수단', tool: 'chart', minutes: 6,
      levels: { easy: '교사가 줄마다 사람 그림을 함께 세고 가장 많은 줄을 고른다.', base: '세 줄을 스스로 세어 가장 많이 타 본 교통수단을 고른다.', challenge: '가장 많은 교통수단에서 지킬 약속 하나를 말한다.' },
      wrap: {
        teacher: '"이 그래프는 수업을 위해 지은 가상의 우리 반이에요. 타 본 적 있는 교통수단에 사람 그림 하나가 친구 한 명이에요." 줄마다 세게 한 뒤 가장 많은 줄을 고른다. "버스를 탈 때 지킬 약속은 무엇이었나요?"라고 물어 오늘 배운 것과 잇는다. 출구 2번에서 "손 놓고 서요"를 고른 학생에게 버스가 갑자기 서면 몸이 앞으로 쏠린다고 말해 준다.',
        exitTicket: [
          GRAPH('우리 반이 타 본 것(가상)', [['버스', 9], ['지하철', 5], ['기차', 3]], '가장 많이 타 본 것은?', 0, '가장 많이 타 본 교통수단을 골라요.'),
          { type: 'choice', prompt: '버스에서 서서 갈 때는?', options: ['손잡이 잡아요', '손 놓고 서요'], answer: 0, difficulty: 0.1, explain: '서서 갈 때는 손잡이를 꼭 잡아요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '우리 반이 타 본 교통수단',
        items: [
          { type: 'table', prompt: '그래프를 보고 수를 써요.', columns: ['교통수단', '친구 수'], cells: [['버스', ''], ['지하철', ''], ['기차', '']], answer: '9, 5, 3' },
          { type: 'draw', prompt: '버스나 지하철을 탄 내 모습을 그려요.' },
        ],
      },
      notes: '그림그래프 수는 수업용 가상 자료다.',
    }),
    TRN({
      id: 'saf-traffic.e12.transit.wrap.check', type: 'wrap', title: '나의 버스 약속 점검표',
      method: '나의 버스 약속 점검표', tool: 'kitchen', minutes: 6,
      levels: { easy: '교사가 점검표 칸을 하나씩 읽어 주고 함께 표시한다.', base: '그림 점검표 세 칸을 스스로 읽고 지킬 약속에 표시한다.', challenge: '표시한 뒤 가족과 함께 지킬 약속 하나를 골라 짝에게 말한다.' },
      wrap: {
        teacher: '"버스·지하철을 탈 때 나는 무엇을 지킬 수 있나요?" 점검표를 함께 읽고 표시하게 한다. 출구 2번에서 "안전선 앞"을 고른 학생에게 "열차가 들어올 때는 바람이 세요. 노란 선 뒤가 기다리는 자리예요"라고 말해 준다. 다음에 가족과 버스를 탈 때 오늘 약속 하나를 보여 드리자고 마무리한다.',
        exitTicket: [
          CHECK('나의 버스 약속', [C('line', '줄 서기'), C('hold', '손잡이 잡기'), C('nojump', '뛰어들지 않기')], '내가 지킬 약속에 표시해요.'),
          { type: 'choice', prompt: '승강장에서 어디에 서요?', options: ['안전선 앞', '안전선 뒤'], answer: 1, difficulty: 0.1, explain: '노란 안전선 뒤에서 기다려요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '나의 버스 약속',
        items: [
          { type: 'table', prompt: '좋으면 ○, 안 되면 ×를 써요.', columns: ['행동', '○ / ×'], cells: [['닫히는 문에 뛰어들어요', ''], ['내리는 사람을 기다려요', ''], ['손잡이를 잡아요', '']], answer: '×, ○, ○' },
          { type: 'draw', prompt: '줄 서서 버스를 기다리는 모습을 그려요.' },
        ],
      },
    }),
  ];

  PaperLessons.registerModules([].concat(T_SIGNAL, T_CROSS, T_SIDE, T_ROAD, T_RIDE, T_SIGNS, T_POP, T_VIS, T_PLAY, T_TRN));
})();
