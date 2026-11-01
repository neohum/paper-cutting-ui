/* 창체 법정교육 생명존중·자살예방 — 초3-4 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/mandatory.json 의 life 초3-4,
 * 영역 추가 지침: framework/BRIEF_LIFE.md(발행 전 사람이 직접 보는 민감 영역).
 * 근거: research-mandatory §1(연 6시간 이상)·§2(초: 감정 알아차리기·도움 요청·생명의 소중함). 보건복지부·한국생명존중희망재단 안전한 소통 원칙을 따른다.
 * 초3-4 기준: 상황 판단(그림+짧은 글), 차례 정하기, 고른 이유 말하기, 짝 토의, 간단한 표·그림그래프. 법 조문·통계 해석·긴 글쓰기는 쓰지 않는다.
 * 이 학년군은 감정·몸 신호·마음 달래기·도움 요청·친구 마음·생명의 한살이 수준이다. 학생이 보는 글에 '자살'이라는 낱말을 쓰지 않는다(체계도 concepts 에 없음).
 * 방법·수단·장소·도구는 어디에도 쓰지 않는다. 채점 문항의 인물은 모두 가상(가명 다온·서진·서아·지우)이고, 학생 자신의 위기·자해 생각을 묻거나 채점하지 않는다.
 * 그래프 자료(마음 날씨·도움 방법·물 주기·줄넘기)는 수업용으로 지은 가상 자료다. 상담 전화번호는 체계도 concepts 에 없어 '[학교가 확인해 넣는 상담 번호]' 자리로 둔다.
 * 주제 6개(3학년 3 · 4학년 3) × 도입 2 · 활동 4 · 정리 2 = 계획 모듈 48개.
 *
 * 사람 확인: (근거 파일에 세부가 없는 일반 지식 문장 — 확인처: 보건복지부·중앙자살예방센터·한국생명존중희망재단·교육부 학생정신건강 자료, 몸·숨쉬기는 질병관리청)
 *   - life.e34.feel-signals.activity.body-map: 걱정하면 배가 아플 수 있고, 화나면 주먹에 힘이 들어가고, 긴장하면 어깨가 굳을 수 있다(몸 신호는 사람마다 다르다).
 *   - life.e34.feel-signals.wrap.name-it: 마음을 꾹 숨기면 더 커질 수도 있고, 이름을 붙여 말하면 작아지기 쉽다.
 *   - life.e34.calm-toolbox.intro.square-breath: 네모 숨쉬기(넷까지 세며 들이쉬기·멈추기·내쉬기·멈추기)가 마음을 가라앉히는 데 도움이 된다. 숨을 오래 참게 하지 않는다.
 *   - life.e34.calm-toolbox.activity.music: 느리고 낮아지는 가락이 마음을 가라앉히는 데 도움이 될 수 있다.
 *   - life.e34.calm-toolbox.* : 산책·그림 그리기·물 마시기·음악 듣기·말하기가 건강한 마음 달래기 방법이다.
 *   - life.e34.ask-help.activity.map: 학교 상담실(위클래스)·보건실·주민센터·도서관에서 도움을 받을 수 있다(우리 학교·지역 기관 이름은 학교가 확인).
 *   - life.e34.ask-help.wrap.card: [학교가 확인해 넣는 상담 번호] — 학교가 확인한 지역 상담 번호만 교사가 적어 준다.
 *   - life.e34.friend-signals.*: 평소와 다른 말·행동(말이 없어짐·혼자 있음·밥을 잘 안 먹음)은 도움이 필요하다는 신호일 수 있다. 친구가 힘들다며 비밀을 부탁해도
 *     안전과 관련된 비밀은 지키지 않고 믿는 어른에게 함께 알린다(생명지킴이 보고·듣고·말하기 틀).
 *   - life.e34.life-cycle.activity.body-wonder: 뇌는 생각하고 몸을 움직이게 하고, 폐는 숨을 쉬게 하고, 심장은 피를 온몸에 보낸다.
 *   - life.e34.strength.*: 강점·생각 바꾸기·도움 받기가 어려움을 견디는 힘(보호 요인)이 된다.
 */
(function () {
  const BASE = { schema: 'edu-module.v1', domain: 'life', band: '초3-4' };
  const T = (topic, grade) => (o) => Object.assign({}, BASE, { topic: `life.e34.${topic}`, grades: [grade] }, o);
  const M = [];
  const CRISIS = '위기 신호를 보이는 학생은 학교 위기관리 절차(상담교사·관리자 연계)를 따른다.';
  const note = (s) => (s ? `${s} ${CRISIS}` : CRISIS);
  const strip = (p) => String(p).replace(/[.?!]$/, '');
  const idOf = (c) => (typeof c === 'string' ? c : c.id);
  const mix = (groups) => { const out = []; const n = Math.max(...groups.map((g) => g.length)); for (let i = 0; i < n; i++) for (const g of groups) if (g[i] != null) out.push(g[i]); return out; };
  const count = (groups) => groups.reduce((a, g) => a + g.length, 0);
  const slotId = (s) => (typeof s === 'string' ? s : s.id);
  const sortT = (slots, groups) => ({ sort: Object.fromEntries(slots.map((s, i) => [slotId(s), groups[i].map(idOf)])) });

  // 분류판(sortboard 글 카드): 기본 = groups, 쉬움 = 칸마다 앞 ne장, 도전 = more 카드(칸마다 hard[i])를 더한다
  const SB = (prompt, slots, groups, ne, hard, d, more) => {
    const easyG = groups.map((g) => g.slice(0, ne));
    const hardG = groups.map((g, i) => g.concat(hard[i] || []));
    const p = strip(prompt);
    return {
      prompt, toolOptions: { slots, cards: mix(groups) }, target: sortT(slots, groups), difficulty: d,
      levels: {
        easy: { prompt: `${p}(${count(easyG)}장).`, toolOptions: { cards: mix(easyG) }, target: sortT(slots, easyG) },
        challenge: { prompt: `${p}(${count(hardG)}장).`, toolOptions: { more: [].concat(...hard) }, target: sortT(slots, hardG) },
      },
      ...more,
    };
  };

  // 생각 그물(mindmap sort): 기본 = 가지 전부, 쉬움 = 앞 가지 ns개만, 도전 = 함정 카드(어느 가지에도 안 맞음)를 더한다
  const WEB = (prompt, base, slots, groups, ns, traps, d, more) => {
    const p = strip(prompt);
    return {
      prompt, toolOptions: Object.assign({}, base, { slots, cards: mix(groups) }), target: sortT(slots, groups), difficulty: d,
      levels: {
        easy: { prompt: `${p}(가지 ${ns}개).`, toolOptions: { slots: slots.slice(0, ns), cards: mix(groups.slice(0, ns)) }, target: sortT(slots.slice(0, ns), groups.slice(0, ns)) },
        challenge: { prompt: `${p}. 어디에도 안 맞는 카드는 남겨요.`, toolOptions: { cards: mix(groups).concat(traps) }, target: sortT(slots, groups) },
      },
      ...more,
    };
  };

  // 차례 놓기(story·kitchen·timeline order): 기본 = 장면 전부, 쉬움 = 첫 장면이 놓여 있음, 도전 = 틀린 장면(trap) 한 장이 섞인다
  const SLOTS = { 3: ['처음', '다음', '끝'], 4: ['처음', '다음', '그다음', '끝'] };
  const ORD = (prompt, base, steps, trap, d, more) => {
    const ids = steps.map((c) => c.id);
    const at = Object.fromEntries(ids.map((id, i) => [id, i === 0 ? 0 : null]));
    return {
      prompt, toolOptions: Object.assign({ mode: 'order', slots: SLOTS[steps.length] }, base, { cards: steps.slice().reverse() }), target: { order: ids }, difficulty: d,
      levels: {
        easy: { state: { at } },
        challenge: { prompt: `${strip(prompt)}. 틀린 카드 한 장은 빼요.`, toolOptions: { cards: [steps[1], trap].concat(steps.slice(2), [steps[0]]) }, target: { order: ids } },
      },
      ...more,
    };
  };

  // 갈림길(dilemma): 기본 = 장면 둘(보기 3개), 쉬움 = 첫 장면만(바른 보기 + 첫 틀린 보기), 도전 = 끝에서 근거 카드 고르기
  const DIL = (prompt, scene, good, reasons, okReasons, d, more) => {
    const g0 = good[0][0];
    const easyScene = Object.assign({}, scene, {
      choices: scene.choices.filter((c) => c.id === g0 || c.id === scene.choices.find((x) => x.id !== g0).id)
        .map((c) => (c.id === g0 ? { id: c.id, text: c.text, result: c.result, impact: c.impact, ending: c.ending } : c)),
    });
    return {
      prompt, toolOptions: { scene }, target: { path: good }, difficulty: d,
      levels: {
        easy: { prompt: `${strip(prompt)}(한 번 골라요).`, toolOptions: { scene: easyScene }, target: { path: [[g0]] } },
        challenge: { prompt: `${strip(prompt)}. 끝에서 근거도 골라요.`, toolOptions: { reasons }, target: { path: good, reasons: okReasons } },
      },
      ...more,
    };
  };

  // 해야 할 것만 표시하는 점검표(kitchen checklist): 기본 = 항목 전부, 쉬움 = easyIdx 항목만
  const CHK = (prompt, title, items, easyIdx, d, more) => {
    const ok = (list) => list.filter((x) => x.ok).map((x) => x.id);
    const bare = (list) => list.map((x) => ({ id: x.id, text: x.text }));
    const easy = easyIdx.map((i) => items[i]);
    return {
      prompt, toolOptions: { mode: 'checklist', title, items: bare(items) }, target: { checklist: ok(items) }, difficulty: d,
      levels: { easy: { prompt: `${strip(prompt)}(${easy.length}칸).`, toolOptions: { items: bare(easy) }, target: { checklist: ok(easy) } } },
      ...more,
    };
  };

  // 짝 잇기(emotion·kitchen match): rows = [[칸 글, 카드 글], …], 쉬움 앞 2줄, 도전 = 함정 카드 한 장 더
  const MATCH = (prompt, base, rows, trap, d, more) => {
    const slots = rows.map((r, i) => ({ id: `r${i + 1}`, label: r[0] }));
    const cards = rows.map((r) => r[1]);
    const tg = (n) => ({ match: Object.fromEntries(rows.slice(0, n).map((r, i) => [`r${i + 1}`, r[1]])) });
    return {
      prompt, toolOptions: Object.assign({}, base, { mode: 'match', slots, cards: cards.slice().reverse() }), target: tg(rows.length), difficulty: d,
      levels: {
        easy: { prompt: `${strip(prompt)}(2줄).`, toolOptions: { slots: slots.slice(0, 2), cards: cards.slice(0, 2).reverse() }, target: tg(2) },
        challenge: { prompt: `${strip(prompt)}. 남는 카드가 하나 있어요.`, toolOptions: { cards: [cards[1], trap, cards[2], cards[0]].concat(cards.slice(3)) }, target: tg(rows.length) },
      },
      ...more,
    };
  };

  // 마음 갈림(emotion branch): 쉬움 = 바른 보기 + 첫 틀린 보기, 도전 = 헷갈리는 보기(extra) 하나 더
  const BR = (prompt, situation, who, choices, good, extra, d, more) => {
    const g = [].concat(good);
    const firstBad = choices.find((c) => !g.includes(c.id));
    return {
      prompt, toolOptions: { mode: 'branch', situation, who, choices }, target: { choice: good }, difficulty: d,
      levels: {
        easy: { toolOptions: { choices: choices.filter((c) => g.includes(c.id) || c === firstBad) } },
        challenge: { prompt: `${strip(prompt)}. 헷갈리는 보기가 하나 더 있어요.`, toolOptions: { choices: choices.concat([extra]) } },
      },
      ...more,
    };
  };

  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };

  // ======================================================================================================
  // 3학년 · 감정의 크기와 몸의 신호 (§2 초: 감정 알아차리기)
  // ======================================================================================================
  {
    const C = T('feel-signals', 3);
    const WEEK = [['기쁨', 3], ['걱정', 2], ['속상함', 1], ['편안함', 1]];
    const WPIC = { type: 'picture', title: '다온이의 일주일 마음 날씨(가상)', unit: '일', icon: 'circle', icons: [{ value: 1, name: '1일' }], xLabel: '마음', yLabel: '날 수' };
    const WORRY = [['월', 1], ['화', 1], ['수', 2], ['목', 4], ['금', 3], ['토', 1], ['일', 1]];
    const WLINE = { type: 'line', mode: 'read', title: '다온이의 걱정 크기(가상)', unit: '칸', xLabel: '요일', yLabel: '걱정 크기', max: 5, scale: 1 };
    M.push(
      C({
        id: 'life.e34.feel-signals.intro.word-web', type: 'intro', title: '마음 낱말 그물 모으기',
        method: '감정 낱말 모으기', tool: 'mindmap', minutes: 6,
        levels: { easy: '가지 2개(기쁨·슬픔)에 낱말 카드 2장이 놓이는 시연을 본다.', base: '가지 4개(기쁨·슬픔·화남·걱정)에 비슷한 낱말 카드 4장이 하나씩 놓이는 시연을 본다.', challenge: '카드가 다 놓인 뒤 가지마다 그런 마음이 드는 상황을 하나씩 짝에게 말한다.' },
        intro: {
          teacher: '"오늘 아침 내 마음에 이름을 붙인다면 무엇일까요?" 두세 명의 답을 듣고(기다릴 반응: "좋아요", "졸려요") 시연 단추로 "신나다"는 기쁨 가지에, "속상하다"는 슬픔 가지에 놓이는 모습을 보인다. "마음은 좋다·나쁘다 두 가지뿐이에요"라는 말이 나오면 "속상한 것과 짜증 나는 것은 같은 마음일까요?"라고 되묻는다. 마음에 알맞은 이름을 붙이면 내 마음을 알고 남에게 말하기도 쉬워진다고 밝힌다.',
          student: '가운데 "마음"에서 뻗은 가지에 비슷한 마음 낱말을 모아 보고, 떠오르는 낱말을 짝에게 말해요.',
          demo: { tool: 'mindmap', options: { topic: '마음', slots: ['기쁨', '슬픔', '화남', '걱정'], cards: [{ id: 'fun', text: '신나다' }, { id: 'sad', text: '속상하다' }, { id: 'mad', text: '짜증 나다' }, { id: 'nerv', text: '초조하다' }], shuffle: false },
            sequence: [{ sort: { 기쁨: ['fun'], 슬픔: ['sad'], 화남: [], 걱정: [] } }, { sort: { 기쁨: ['fun'], 슬픔: ['sad'], 화남: ['mad'], 걱정: ['nerv'] } }] },
          art: { draw: 'a paper mind map with a paper heart in the center and four paper branches in yellow, blue, red and gray, small paper word cards hanging on each branch', banner: '마음에 이름을 붙여요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      C({
        id: 'life.e34.feel-signals.intro.thermo', type: 'intro', title: '마음 온도계 눈금 맞히기',
        method: '감정 온도계 맞히기', tool: 'emotion', minutes: 6,
        levels: { easy: '상황 하나(새치기)에 눈금이 3에 놓이는 시연을 보고 손가락으로 따라 낸다.', base: '교사가 상황 넷을 읽을 때마다 손가락 1~5로 화남 크기를 내고 짝과 견준다.', challenge: '짝과 크기가 다른 상황에서 서로 다른 까닭을 말한다.' },
        intro: {
          teacher: '"이럴 때 화가 얼마나 날까요? 손가락 하나는 조금, 다섯은 아주 많이예요." 시연 단추로 눈금이 3에 놓이는 것을 보인 뒤 상황 넷(줄에서 새치기, 짝이 말없이 지우개를 가져감, 놀이 차례를 건너뜀, 내 그림에 낙서함)을 읽고 손가락으로 크기를 내게 한다. "짝이랑 크기가 다르면 내가 틀린 거예요"라는 말이 나오면 "같은 일도 사람마다 마음의 크기가 달라요. 틀린 게 아니에요"라고 말해 준다. 마음이 작을 때 알아차리면 커지기 전에 달랠 수 있다고 밝힌다.',
          student: '상황을 듣고 화가 난 크기를 손가락 1~5로 나타낸 뒤 짝과 견주어 보아요.',
          demo: { tool: 'emotion', options: { mode: 'scale', situation: '줄을 서 있는데 친구가 내 앞에 새치기했어요.', feeling: '화남', steps: 5, scaleLabels: { 1: '조금', 5: '아주 많이' } }, sequence: [{ level: 3 }] },
          art: { draw: 'a tall paper thermometer with five colored levels from yellow to red, a paper child pointing at the middle level next to a short paper queue', banner: '마음 온도계', extra: [{ motif: 'storm', x: 300, y: 96 }] },
        },
      }),
      C({
        id: 'life.e34.feel-signals.activity.body-map', type: 'activity', title: '마음이 나타나는 몸 지도',
        method: '감정이 나타나는 몸 지도', tool: 'body', minutes: 13,
        levels: { easy: '종이 몸의 네 곳 가운데 고르고, 고른 곳의 이름이 보인다.', base: '종이 몸의 여섯 곳 가운데 걱정·화남·긴장 신호가 오는 곳을 고른다.', challenge: '곳을 고른 뒤 같은 신호가 다른 마음일 수도 있는지 보기를 고른다.' },
        activity: {
          title: '마음이 나타나는 몸 지도', tool: 'body',
          teacher: '"걱정이 커지면 몸 어디가 먼저 알려 줄까요?" 누르기 전에 자기 몸의 같은 곳을 살짝 짚어 보게 한다. "몸 신호는 다 똑같아요"라는 학생에게 "가슴이 두근거리는 건 걱정일 때만일까요, 신날 때도 그럴까요?"라고 묻는다. 신호는 사람마다 다를 수 있고, 몸 신호를 알아차리면 마음이 커지기 전에 달랠 수 있다는 점을 짚는다.',
          task: '마음이 커질 때 신호가 오는 몸의 곳을 종이 몸에서 골라요.', levels: { easy: { names: true }, base: {}, challenge: {} },
          items: [
            { prompt: '걱정이 커지면 배가 살살 아파요. 그곳을 골라요.', toolOptions: { mode: 'parts', parts: ['배', '무릎', '어깨', '발목', '눈', '허벅지'] }, target: { parts: ['배'] }, difficulty: 0.1,
              hints: ['걱정할 때 "살살 아파요" 하는 곳을 떠올려요.', '몸 가운데쯤, 밥이 들어가는 곳이에요.', '배를 눌러요.'],
              levels: { easy: { toolOptions: { parts: ['배', '무릎', '어깨', '발목'] } }, challenge: { prompt: '배를 고르고, 이 신호가 오는 마음도 골라요.', toolOptions: { ask: { q: '배가 살살 아픈 마음은?', choices: ['걱정일 때만요', '설렐 때도 그래요'] } }, target: { parts: ['배'], pick: 1 } } } },
            { prompt: '화가 커져 주먹을 꽉 쥐면 힘이 들어가는 곳은?', toolOptions: { mode: 'parts', parts: ['손목', '무릎', '귀', '허리', '발목', '코'] }, target: { parts: ['손목'] }, difficulty: 0.15,
              hints: ['주먹을 꽉 쥐어 보고 힘이 들어가는 곳을 느껴요.', '팔 끝, 손과 이어진 곳이에요.', '손목을 눌러요.'],
              levels: { easy: { toolOptions: { parts: ['손목', '무릎', '귀', '발목'] } }, challenge: { prompt: '손목을 고르고, 주먹을 쥐는 마음도 골라요.', toolOptions: { ask: { q: '주먹을 꽉 쥐는 마음은?', choices: ['화날 때만요', '긴장될 때도 그래요'] } }, target: { parts: ['손목'], pick: 1 } } } },
            { prompt: '긴장되면 딱딱하게 굳는 곳을 골라요.', toolOptions: { mode: 'parts', parts: ['어깨', '귀', '팔꿈치', '무릎', '발목', '코'] }, target: { parts: ['어깨'] }, difficulty: 0.2,
              hints: ['발표 전처럼 긴장될 때 몸이 움츠러드는 곳을 떠올려요.', '목 양옆, 가방을 메는 곳이에요.', '어깨를 눌러요.'],
              levels: { easy: { toolOptions: { parts: ['어깨', '귀', '무릎', '발목'] } }, challenge: { prompt: '어깨를 고르고, 이 신호가 오는 마음도 골라요.', toolOptions: { ask: { q: '어깨가 굳는 마음은?', choices: ['긴장일 때만요', '걱정할 때도 그래요'] } }, target: { parts: ['어깨'], pick: 1 } } },
              conclude: '마음이 커지면 몸이 먼저 알려 줘요. 몸 신호를 알아차리면 마음을 달랠 수 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '마음과 몸 신호를 이어 써요.', columns: ['마음', '몸 신호'], cells: [['걱정', ''], ['화남', ''], ['긴장', '']], answer: '배가 아파요, 주먹에 힘이 들어가요, 어깨가 굳어요' }] },
        notes: '종이 몸에 손·얼굴 칸이 없어 주먹은 손목으로 바꾸고, "얼굴이 화끈해요"는 교사가 말로 더한다. 몸 신호는 사람마다 다를 수 있다고 말하고, 배가 자주 아프다는 학생은 보건 선생님과 잇는다.',
      }),
      C({
        id: 'life.e34.feel-signals.activity.day-chart', type: 'activity', title: '일주일 마음 날씨 그래프',
        method: '일주일 마음 날씨 그래프', tool: 'chart', minutes: 14,
        levels: { easy: '3일 자료로 그림그래프를 채우고, 3일 꺾은선에서 걱정이 커진 날을 고른다.', base: '7일 자료로 그림그래프를 채우고 가장 많은 마음과 걱정이 커진 날을 찾는다.', challenge: '걱정이 커진 날에 무슨 일이 있었을지 짐작하는 보기를 고른다.' },
        activity: {
          title: '일주일 마음 날씨 그래프(가상)', tool: 'chart',
          teacher: '"이 그래프는 다온이라는 가상 친구의 일주일 마음이에요. 동그라미 하나가 하루예요." 표의 수만큼 그림을 채운 뒤 손가락으로 세어 보게 한다. "마음은 늘 똑같아요"라는 학생에게 "목요일에 그래프가 어떻게 되었나요? 마음은 날마다 바뀔 수 있어요"라고 묻는다. 걱정이 커진 날에는 까닭이 있을 수 있고, 그런 날 믿는 어른에게 말하면 도움이 된다는 점을 짚는다.',
          task: '다온이의 마음 날씨 표를 보고 그래프를 채우고, 그래프를 읽어 답을 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '표를 보고 마음 날씨 그림그래프를 채워요.', toolOptions: Object.assign({}, WPIC, { data: WEEK }), target: { build: true }, difficulty: 0.1,
              levels: { easy: { prompt: '표를 보고 3일 마음 날씨 그래프를 채워요.', toolOptions: { data: [['기쁨', 2], ['걱정', 1]] } } } },
            { prompt: '다온이의 일주일에서 가장 많았던 마음은?', toolOptions: Object.assign({}, WPIC, { mode: 'read', data: WEEK, question: '가장 많았던 마음은?', choices: WEEK.map((x) => x[0]) }), target: { pick: 0 }, difficulty: 0.15,
              levels: { easy: { prompt: '3일 가운데 가장 많았던 마음은?', toolOptions: { data: [['기쁨', 2], ['걱정', 1]], choices: ['기쁨', '걱정'] } } } },
            { prompt: '꺾은선그래프에서 걱정이 가장 커진 날은?', toolOptions: Object.assign({}, WLINE, { data: WORRY, question: '걱정이 가장 커진 날은?', choices: ['수', '목', '토'] }), target: { pick: 1 }, difficulty: 0.2,
              levels: {
                easy: { prompt: '3일 가운데 걱정이 가장 커진 날은?', toolOptions: { data: [['수', 2], ['목', 4], ['금', 3]], choices: ['수', '목', '금'] } },
                challenge: { prompt: '금요일에 발표가 있었어요. 목요일에 걱정이 커진 까닭은?', toolOptions: { question: '걱정이 커진 까닭 짐작은?', choices: ['다음 날 발표라서', '걱정은 까닭이 없어서', '그래프가 틀려서'], explain: '마음이 바뀐 날에는 까닭이 있을 수 있어요.' }, target: { pick: 0 } },
              },
              conclude: '마음 날씨는 날마다 바뀌어요. 걱정이 커진 날은 믿는 어른에게 말해요.' },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '다온이의 걱정이 커진 날, 도움이 될 일은?', options: ['혼자 꾹 참기', '믿는 어른에게 말하기'], answer: '믿는 어른에게 말하기' }] },
        notes: '그래프는 수업용으로 지은 가상 인물의 자료다. 우리 반 학생의 마음 기록을 모아 그래프로 보이지 않는다.',
      }),
      C({
        id: 'life.e34.feel-signals.activity.situation', type: 'activity', title: '상황 보고 마음 낱말 넣기',
        method: '상황 보고 감정 판단', tool: 'story', minutes: 13,
        levels: { easy: '상황 2개의 말풍선을 채우고, 놓으면 바로 맞는지 알려 준다.', base: '상황 3개의 말풍선을 채우고, 한 장면에 든 두 마음을 고른다.', challenge: '헷갈리는 낱말 카드가 더 섞인 판에서 고르고, 두 마음이 섞인 까닭을 짝에게 말한다.' },
        activity: {
          title: '상황 보고 마음 낱말 넣기', tool: 'story',
          teacher: '"발표 전 다온이는 어떤 마음일까요? 왜 그렇게 생각했나요?" 카드를 넣을 때마다 그림 속 단서(손을 꼭 쥠, 웃는 얼굴)를 짚게 한다. "칭찬을 들으면 기쁘기만 해요"라는 학생에게 "기쁘면서 쑥스러울 수도 있을까요?"라고 묻는다. 한 장면에 마음이 두 가지 들 수 있고, 두 마음 모두 자연스러운 내 마음이라는 점을 짚는다.',
          task: '그림 속 인물의 말풍선 빈칸에 알맞은 마음 낱말 카드를 넣어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            { prompt: '세 장면의 말풍선에 마음 낱말을 넣어요.', toolOptions: { mode: 'fill', slots: [{ id: 'p1', who: '다온', label: '"발표 전이라 ___."' }, { id: 'p2', who: '서진', label: '"친구와 다퉈서 ___."' }, { id: 'p3', who: '다온', label: '"칭찬을 들어 ___."' }], cards: ['뿌듯해요', '졸려요', '속상해요', '떨려요'] },
              target: { fill: { p1: '떨려요', p2: '속상해요', p3: '뿌듯해요' } }, difficulty: 0.15,
              levels: {
                easy: { prompt: '두 장면의 말풍선에 마음 낱말을 넣어요.', toolOptions: { slots: [{ id: 'p1', who: '다온', label: '"발표 전이라 ___."' }, { id: 'p3', who: '다온', label: '"칭찬을 들어 ___."' }], cards: ['뿌듯해요', '졸려요', '떨려요'] }, target: { fill: { p1: '떨려요', p3: '뿌듯해요' } } },
                challenge: { toolOptions: { cards: ['뿌듯해요', '졸려요', '속상해요', '배고파요', '떨려요'] } },
              } },
            { prompt: '다른 세 장면의 말풍선에 마음 낱말을 넣어요.', toolOptions: { mode: 'fill', slots: [{ id: 'p1', who: '서진', label: '"짝이 말없이 가져가서 ___."' }, { id: 'p2', who: '다온', label: '"좋아하는 간식이라 ___."' }, { id: 'p3', who: '서진', label: '"처음 가는 곳이라 ___."' }], cards: ['걱정돼요', '신나요', '심심해요', '화나요'] },
              target: { fill: { p1: '화나요', p2: '신나요', p3: '걱정돼요' } }, difficulty: 0.2,
              levels: {
                easy: { prompt: '두 장면의 말풍선에 마음 낱말을 넣어요(다른 장면).', toolOptions: { slots: [{ id: 'p1', who: '서진', label: '"짝이 말없이 가져가서 ___."' }, { id: 'p2', who: '다온', label: '"좋아하는 간식이라 ___."' }], cards: ['신나요', '심심해요', '화나요'] }, target: { fill: { p1: '화나요', p2: '신나요' } } },
                challenge: { toolOptions: { cards: ['걱정돼요', '신나요', '심심해요', '졸려요', '화나요'] } },
              } },
            { prompt: '새 학년 첫날 서진이에게 든 두 마음을 골라요.', toolOptions: { mode: 'pick', basket: '서진이의 두 마음', cards: ['화나요', '설레요', '졸려요', '걱정돼요'] }, target: { pick: ['설레요', '걱정돼요'] }, difficulty: 0.25,
              levels: { easy: { toolOptions: { cards: ['화나요', '설레요', '걱정돼요'] } }, challenge: { toolOptions: { cards: ['화나요', '설레요', '졸려요', '심심해요', '걱정돼요'] } } },
              conclude: '한 장면에 마음이 두 가지 들 수도 있어요. 둘 다 자연스러운 내 마음이에요.' },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 마음 낱말을 써요.', text: '칭찬을 들으면 ___ 마음이 들어요.', answer: '뿌듯한' }] },
      }),
      C({
        id: 'life.e34.feel-signals.activity.pair-talk', type: 'activity', title: '짝과 몸 신호 이야기',
        method: '짝 토의: 감정 신호 알아차리기', tool: 'timer', minutes: 14,
        levels: { easy: '짝과 1분씩 번갈아 말하게 타이머를 맞추고 듣는 차례 카드 3장을 놓는다.', base: '짝과 2분씩 번갈아 말하게 맞추고, 그림 카드를 보며 말한 뒤 점검표 3칸에 표시한다.', challenge: '점검표에 짝의 신호와 내 신호의 같은 점을 찾은 칸까지 4칸에 표시한다.' },
        activity: {
          title: '짝과 몸 신호 이야기', tool: 'timer',
          teacher: '"화가 날 때 내 몸은 어떻게 될까요? 칠판의 그림 카드(주먹·찡그린 얼굴·빨간 얼굴)를 보며 짝에게 말해 봐요." 타이머를 맞춘 뒤 한 사람이 말하는 동안 다른 사람은 끝까지 듣고 들은 신호를 되말하게 한다. "화나는 건 나쁜 거라 말하기 싫어요"라는 학생에게 "화는 누구나 드는 마음이에요. 화날 때 몸 신호를 알면 미리 달랠 수 있어요"라고 말해 준다. 말하기 싫은 학생은 듣는 역할만 해도 된다고 알린다.',
          task: '짝과 번갈아 "화가 날 때 내 몸은?"을 말하고, 들은 것을 점검표에 표시해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '짝과 2분씩 번갈아 말하게 맞춰요.', toolOptions: { title: '짝 이야기(우리 반 약속)', labels: ['말하기', '바꾸기'], plan: { work: 60, rest: 10, rounds: 1 } }, target: { plan: { work: 120, rounds: 2 } }, difficulty: 0.15,
              hints: ['한 사람이 말하는 시간과 몇 번 하는지 생각해요.', '말하기 칸은 초, 번 칸은 몇 사람이 하는지예요.', '말하기 120초, 번 2에 맞춰요.'],
              levels: { easy: { prompt: '짝과 1분씩 번갈아 말하게 맞춰요.', target: { plan: { work: 60, rounds: 2 } } } } },
            { prompt: '짝 말을 들을 때 하는 차례대로 놓아요.', toolOptions: { title: '잘 듣는 차례', cards: ['들은 신호 되말하기', '짝 눈 보기', '끝까지 듣기'] }, target: { order: ['짝 눈 보기', '끝까지 듣기', '들은 신호 되말하기'] }, difficulty: 0.15 },
            { prompt: '그림 카드를 보며 "화가 날 때 내 몸은?"을 짝과 말해요.', free: true, talk: true },
            { prompt: '짝 이야기에서 한 것에 스스로 표시해요.', toolOptions: { title: '짝 이야기 점검' }, target: { selfCheck: ['끝까지 들었어요', '내 몸 신호를 말했어요', '짝 신호를 되말했어요'] }, difficulty: 0.1,
              levels: { challenge: { prompt: '같은 점을 찾은 것까지 표시해요.', target: { selfCheck: ['끝까지 들었어요', '내 몸 신호를 말했어요', '짝 신호를 되말했어요', '같은 점을 찾았어요'] } } },
              conclude: '화가 날 때 몸 신호는 사람마다 달라요. 내 신호를 알면 미리 마음을 달랠 수 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '짝이 말한 몸 신호에 ✓ 해요.', options: ['배가 아파요', '주먹을 쥐어요', '얼굴이 뜨거워요', '어깨가 굳어요'] }] },
        notes: '타이머 초는 우리 반 약속 값이다. 그림 카드는 교사가 칠판에 붙인다. 겪은 일을 자세히 말하게 하지 않고 "몸이 어떻게 되는지"만 말한다.',
      }),
      C({
        id: 'life.e34.feel-signals.wrap.name-it', type: 'wrap', title: '마음에 이름 붙이기',
        method: '감정에 이름 붙이기 연습', tool: 'wordcards', minutes: 6,
        levels: { easy: '장면 2개에 낱말 카드 4장 가운데 알맞은 것을 놓는다.', base: '장면 4개에 낱말 카드 6장 가운데 알맞은 것을 놓는다.', challenge: '짜증·화남, 걱정·무서움처럼 비슷한 낱말이 든 장면 4개에 놓는다.' },
        wrap: {
          teacher: '"이를 꽉 물고 얼굴이 빨개진 친구는 어떤 마음일까요?" 장면을 읽어 주고 카드를 놓을 때마다 반 전체가 그 낱말을 따라 말한다. 출구 2번에서 "금방 사라져요"를 고른 학생에게 "꾹 눌러 둔 마음은 어떻게 될까요? 이름을 붙여 말하면 작아지기 쉬워요"라고 말해 준다. 오늘 배운 마음 낱말 하나를 골라 집에서 써 보자고 한다.',
          exitTicket: [
            { type: 'tool', tool: 'wordcards', prompt: '장면 카드에 알맞은 마음 낱말을 놓아요.',
              options: { mode: 'match', slots: [{ id: 's1', label: '이를 꽉 물고 얼굴이 빨개요' }, { id: 's2', label: '눈물이 글썽글썽해요' }, { id: 's3', label: '두 손을 번쩍 들고 웃어요' }, { id: 's4', label: '손톱을 만지작거려요' }], cards: ['화남', '슬픔', '신남', '걱정', '졸림', '배고픔'] },
              target: { match: { s1: '화남', s2: '슬픔', s3: '신남', s4: '걱정' } }, difficulty: 0.15,
              levels: {
                easy: { prompt: '장면 카드 2장에 알맞은 마음 낱말을 놓아요.', toolOptions: { slots: [{ id: 's1', label: '이를 꽉 물고 얼굴이 빨개요' }, { id: 's2', label: '눈물이 글썽글썽해요' }], cards: ['화남', '슬픔', '신남', '걱정'] }, target: { match: { s1: '화남', s2: '슬픔' } } },
                challenge: { prompt: '비슷한 마음 낱말을 잘 견주어 놓아요.', toolOptions: { slots: [{ id: 's1', label: '작은 일에 자꾸 툴툴대요' }, { id: 's2', label: '참다가 크게 소리쳐요' }, { id: 's3', label: '내일 일이 자꾸 떠올라요' }, { id: 's4', label: '깜깜한 데서 몸이 떨려요' }], cards: ['짜증', '화남', '걱정', '무서움', '신남', '졸림'] }, target: { match: { s1: '짜증', s2: '화남', s3: '걱정', s4: '무서움' } } },
              } },
            { type: 'choice', prompt: '속상한 마음을 꾹 숨기면 어떻게 될까요?', options: ['금방 사라져요', '더 커질 수도 있어요', '아무 일도 없어요'], answer: 1, difficulty: 0.15, explain: '마음은 이름을 붙이고 말하면 작아지기 쉬워요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '마음에 이름 붙이기',
          items: [
            { type: 'blank', prompt: '빈칸에 알맞은 마음 낱말을 써요.', text: '눈물이 글썽글썽하면 ___ 마음이에요.', answer: '슬픈' },
            { type: 'short', prompt: '오늘 배운 마음 낱말 하나를 골라 써요.' },
          ],
          easy: { note: '얼굴과 몸짓을 보고 마음을 떠올려요.', items: [{ type: 'draw', prompt: '신나는 마음일 때 내 얼굴을 그려요.' }] },
        },
        notes: 'wordcards 를 한국어 글 카드 짝 잇기(match)로만 쓴다(영어 발음이 나는 flip·listen 은 쓰지 않는다).',
      }),
      C({
        id: 'life.e34.feel-signals.wrap.tell-plan', type: 'wrap', title: '큰 마음은 누구와 나눌까',
        method: '큰 감정은 누구와 나눌까', tool: 'sortboard', minutes: 6,
        levels: { easy: '카드 3장(어른 2·낯선 사람 1)을 나누고, 놓으면 바로 맞는지 알려 준다.', base: '카드 5장을 믿고 말할 사람과 낯선 사람으로 나눈다.', challenge: '믿고 말할 어른 카드 5장을 학교 안 어른과 학교 밖 어른으로 나눈다.' },
        wrap: {
          teacher: '"마음 온도계가 4·5칸까지 올라가면 혼자 견디지 않고 누구와 나눌까요?" 카드를 하나씩 읽어 주고 바구니에 넣은 뒤 반 전체가 "나눌 어른이 있어요"라고 말한다. "인터넷에서 만난 사람한테 말하면 돼요"라는 학생에게 "얼굴을 모르는 사람은 나를 지켜 줄 수 있을까요? 얼굴을 아는 믿는 어른에게 말해요"라고 묻는다. 출구 2번에서 "혼자 꾹 참아요"를 고른 학생에게 "큰 마음일수록 나누면 가벼워져요"라고 말해 준다.',
          exitTicket: [
            { type: 'tool', tool: 'sortboard', prompt: '마음 온도가 4·5칸일 때 말할 사람을 바구니에 넣어요.',
              options: { slots: ['믿고 말할 사람', '낯선 사람'], cards: ['보호자', '처음 본 사람', '담임 선생님', '인터넷 낯선 사람', '상담 선생님'] },
              target: { sort: { '믿고 말할 사람': ['보호자', '담임 선생님', '상담 선생님'], '낯선 사람': ['처음 본 사람', '인터넷 낯선 사람'] } }, difficulty: 0.1,
              levels: {
                easy: { prompt: '마음 온도가 4·5칸일 때 말할 사람을 넣어요(3장).', toolOptions: { cards: ['보호자', '처음 본 사람', '담임 선생님'], instant: true }, target: { sort: { '믿고 말할 사람': ['보호자', '담임 선생님'], '낯선 사람': ['처음 본 사람'] } } },
                challenge: { prompt: '믿고 말할 어른을 학교 안과 밖으로 나누어요.', toolOptions: { slots: ['학교 안 어른', '학교 밖 어른'], cards: ['담임 선생님', '보호자', '상담 선생님', '할머니·할아버지', '보건 선생님'] }, target: { sort: { '학교 안 어른': ['담임 선생님', '상담 선생님', '보건 선생님'], '학교 밖 어른': ['보호자', '할머니·할아버지'] } } },
              } },
            { type: 'choice', prompt: '마음 온도가 5칸까지 올랐어요. 어떻게 할까요?', options: ['혼자 꾹 참아요', '믿는 어른에게 말해요', '잊으려고 해요'], answer: 1, difficulty: 0.1, explain: '큰 마음은 믿는 어른과 나누면 가벼워져요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '큰 마음은 나눠요',
          items: [
            { type: 'check', prompt: '마음이 클 때 말할 수 있는 사람에 ✓ 해요.', options: ['보호자', '담임 선생님', '상담 선생님', '보건 선생님'] },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '마음 온도가 4·5칸이면 믿는 ___에게 말해요.', answer: '어른' },
          ],
        },
        notes: note('함께 사는 보호자는 엄마·아빠만이 아니라 할머니·할아버지 등 누구든 된다고 말해 준다.'),
      }),
    );
  }

  // ======================================================================================================
  // 3학년 · 나만의 마음 달래기 도구상자 (§2 초: 감정 알아차리기 — 진정 방법은 일반 지식, 사람 확인)
  // ======================================================================================================
  {
    const C = T('calm-toolbox', 3);
    M.push(
      C({
        id: 'life.e34.calm-toolbox.intro.square-breath', type: 'intro', title: '네모 숨쉬기 함께 하기',
        method: '네모 숨쉬기', tool: 'timer', minutes: 6,
        levels: { easy: '네모를 한 바퀴 따라 숨을 쉰다.', base: '시연대로 타이머를 두 바퀴에 맞추고 네모 숨쉬기를 두 바퀴 한다.', challenge: '세 바퀴를 하고, 하기 전과 뒤의 마음 크기를 손가락으로 견주어 본다.' },
        intro: {
          teacher: '"네모의 변을 손가락으로 따라가며 숨을 쉬어 볼까요? 윗변에서 넷까지 세며 들이쉬고, 오른쪽 변에서 멈추고, 아랫변에서 내쉬고, 왼쪽 변에서 멈춰요." 칠판에 큰 네모를 그리고 시연 단추로 타이머가 두 바퀴에 맞춰지는 것을 보인 뒤 함께 해 본다. 숨을 오래 참으려는 학생에게 "편안하게 해요. 어지러우면 바로 보통 숨으로 돌아와요"라고 말해 준다. "숨쉬기는 늘 하는데 무슨 도움이 돼요?"라는 말에는 "천천히 쉬고 나니 빨리 뛰던 가슴이 어떤가요?"라고 되묻는다.',
          student: '손가락으로 네모를 따라가며 넷까지 세어 들이쉬고, 멈추고, 내쉬고, 멈춰요.',
          demo: { tool: 'timer', options: { title: '네모 숨쉬기(우리 반 약속)', labels: ['숨 쉬기', '멈추기'], plan: { work: 4, rest: 4, rounds: 1 } }, sequence: [{ plan: { work: 4, rest: 4, rounds: 2 } }] },
          art: { draw: 'a big paper square with small arrows going around its four sides, a calm paper child tracing the square with one finger and breathing slowly', banner: '네모 따라 숨쉬기', extra: [{ motif: 'leaf', x: 300, y: 96 }] },
        },
        notes: '타이머 초와 바퀴 수는 우리 반 약속 값이다. 숨을 오래 참게 하지 않는다(사람 확인 목록).',
      }),
      C({
        id: 'life.e34.calm-toolbox.intro.tool-guess', type: 'intro', title: '도구상자 속 물건 맞히기',
        method: '도구상자 속 물건 맞히기', tool: 'emotion', minutes: 6,
        levels: { easy: '물건 2개(공·느린 음악)에 마음 카드가 놓이는 시연을 본다.', base: '물건 4개에 마음 카드가 모두 놓이는 시연을 보고, 내 생각과 같은지 손을 든다.', challenge: '같은 물건이 사람마다 다른 마음에 도움이 될 수 있는 까닭을 짝에게 말한다.' },
        intro: {
          teacher: '"마음 달래기 도구상자에 공, 느린 음악, 물 한 잔, 그림책이 들어 있어요. 어떤 마음일 때 도움이 될까요?" 시연 단추로 공은 화남에, 느린 음악은 걱정에 놓이는 모습을 보인 뒤 나머지를 묻는다. "도구는 하나만 있으면 돼요"라는 말이 나오면 "공 차기는 비 오는 날 교실에서도 할 수 있을까요?"라고 되묻는다. 사람마다, 때마다 맞는 도구가 달라서 여러 개를 모아 두면 좋다고 밝힌다.',
          student: '도구상자 속 물건을 보고, 어떤 마음일 때 도움이 될지 짝과 이야기해요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'ball', label: '공 차기' }, { id: 'music', label: '느린 음악 듣기' }, { id: 'water', label: '물 한 잔 마시기' }, { id: 'book', label: '그림책 읽기' }], cards: ['화남', '걱정', '편안함', '속상함'], shuffle: false },
            sequence: [{ match: { ball: '화남', music: '걱정' } }, { match: { ball: '화남', music: '걱정', water: '편안함', book: '속상함' } }] },
          art: { draw: 'an open paper toolbox holding a paper ball, a music note, a glass of water and a small picture book, soft paper clouds above', banner: '마음 달래기 도구상자', extra: [{ motif: 'flower', x: 300, y: 96, color: 'peach' }] },
        },
      }),
      C({
        id: 'life.e34.calm-toolbox.activity.sort-ways', type: 'activity', title: '도움 되는·다치게 하는 방법',
        method: '건강한 방법·다치게 하는 방법', tool: 'sortboard', minutes: 13,
        levels: { easy: '카드 4장, 바구니 옆에 든 장 수가 보이고 틀리면 까닭을 듣고 되돌아온다.', base: '카드 6장을 다 넣은 뒤 확인한다.', challenge: '헷갈리는 카드 2장을 더한 8장을 나누고, 활동지에 다치게 하는 방법 대신 쓸 방법을 적는다.' },
        activity: {
          title: '도움 되는·다치게 하는 방법', tool: 'sortboard',
          teacher: '"이 방법을 쓰면 나와 친구는 어떻게 될까요?" 카드를 넣기 전에 그 방법을 쓴 뒤의 모습을 한 문장으로 말하게 한다. "물건을 던지면 화가 풀려요"라는 학생에게 "던진 물건에 누가 맞거나 물건이 망가지면, 그다음 마음은 어떨까요?"라고 묻는다. 마음이 아무리 커도 나와 남을 다치게 하지 않는 방법을 고를 수 있다는 점을 짚는다.',
          task: '마음 달래기 방법 카드를 도움 되는 방법과 다치게 하는 방법 바구니에 나누어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            SB('화가 날 때 쓰는 방법을 나누어요.', ['도움 되는 방법', '다치게 하는 방법'], [['산책하기', '그림 그리기', '친구에게 말하기'], ['물건 던지기', '친구에게 소리치기', '친구 밀치기']], 2, [['선생님께 말하기'], ['욕하기']], 0.15),
            SB('걱정될 때 쓰는 방법을 나누어요.', ['도움 되는 방법', '다치게 하는 방법'], [['숨 크게 쉬기', '보호자에게 말하기', '좋아하는 책 읽기'], ['동생에게 짜증 내기', '물건 발로 차기', '친구에게 화풀이']], 2, [['물 한 잔 마시기'], ['문 쾅 닫기']], 0.2),
            SB('속상할 때 쓰는 방법을 나누어요.', ['도움 되는 방법', '다치게 하는 방법'], [['음악 듣기', '일기 쓰기', '몸 쭉 펴기'], ['친구 물건 망가뜨리기', '동생 때리기', '책 찢기']], 2, [['산책하며 걷기'], ['친구 탓하기']], 0.25,
              { conclude: '마음이 클 때도 나와 남을 다치게 하지 않는 방법을 골라 써요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '다치게 하는 방법 대신 쓸 방법을 써요.', columns: ['다치게 하는 방법', '대신할 방법'], cells: [['물건 던지기', ''], ['친구에게 소리치기', '']], answer: '예: 산책하기, 친구에게 말하기' }] },
      }),
      C({
        id: 'life.e34.calm-toolbox.activity.music', type: 'activity', title: '마음을 가라앉히는 가락',
        method: '마음을 가라앉히는 가락', tool: 'keyboard', minutes: 14,
        levels: { easy: '느린 가락 세 음을 듣는 동안 건반이 비치고, 짓기도 세 음으로 한다.', base: '느린 가락 네·다섯 음을 듣고 따라 치고, 도로 끝나는 네 음 가락을 짓는다.', challenge: '따라 친 뒤 솔로 시작해 도로 끝나는 나만의 느린 가락 네 음을 짓는다.' },
        activity: {
          title: '마음을 가라앉히는 가락', tool: 'keyboard',
          teacher: '"선생님이 먼저 손뼉으로 빠르게 치는 가락과 천천히 내려가는 가락을 들려줄게요. 어느 쪽이 마음을 차분하게 해 줄까요?" 두 가락을 들려준 뒤 느린 가락을 \'가락 듣기\'로 듣고 따라 치게 한다. "빠른 가락이 더 신나서 좋아요"라는 학생에게 "신날 때는 빠른 가락도 좋아요. 그런데 화가 날 때 빠른 가락을 들으면 마음이 어떻게 될까요?"라고 묻는다. 다 친 뒤 손가락(1~5)으로 지금 마음 크기를 나타내 보게 하되 걷거나 적지 않는다.',
          task: '느린 가락을 듣고 건반으로 따라 친 뒤, 나만의 느린 가락을 지어요.', levels: { easy: { from: '도', to: '높은도', showWhileListening: true }, base: { from: '도', to: '높은도' }, challenge: { from: '도', to: '높은도' } },
          items: [
            { prompt: '천천히 내려가는 가락 "솔 미 레 도"를 따라 쳐요.', toolOptions: { melody: ['솔', '미', '레', '도'], tempo: 60 }, target: { notes: ['솔', '미', '레', '도'] }, difficulty: 0.1,
              levels: { easy: { prompt: '천천히 내려가는 세 음 "미 레 도"를 따라 쳐요.', toolOptions: { melody: ['미', '레', '도'] }, target: { notes: ['미', '레', '도'] } } } },
            { prompt: '조용히 내려가는 가락 "라 솔 미 레 도"를 쳐요.', toolOptions: { melody: ['라', '솔', '미', '레', '도'], tempo: 60 }, target: { notes: ['라', '솔', '미', '레', '도'] }, difficulty: 0.15,
              levels: { easy: { prompt: '조용히 내려가는 세 음 "솔 레 도"를 쳐요.', toolOptions: { melody: ['솔', '레', '도'] }, target: { notes: ['솔', '레', '도'] } } } },
            { prompt: '"도"로 끝나는 나만의 느린 가락 네 음을 지어요.', toolOptions: { tempo: 60 }, target: { compose: { length: 4, endOn: '도' } }, difficulty: 0.2,
              levels: { easy: { prompt: '"도"로 끝나는 느린 가락 세 음을 지어요.', target: { compose: { length: 3, endOn: '도' } } }, challenge: { prompt: '솔로 시작해 도로 끝나는 네 음을 지어요.', target: { compose: { length: 4, startOn: '솔', endOn: '도' } } } },
              conclude: '느리고 낮아지는 가락은 마음을 천천히 가라앉히는 데 도움이 될 수 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '마음을 가라앉힐 때 들어 볼 가락은?', options: ['빠르고 높아지는 가락', '느리고 낮아지는 가락'], answer: '느리고 낮아지는 가락' }] },
        notes: '가락은 수업용으로 지은 것이다. 소리는 건반이나 \'가락 듣기\'를 누를 때만 난다. 음악이 마음을 가라앉힌다는 말은 "도움이 될 수 있다"로만 한다(사람 확인 목록).',
      }),
      C({
        id: 'life.e34.calm-toolbox.activity.order', type: 'activity', title: '화가 날 때 하는 차례',
        method: '화가 날 때 차례', tool: 'story', minutes: 13,
        levels: { easy: '첫 장면(멈추기)이 놓여 있어 남은 장면만 놓고, 말풍선은 한 칸만 채운다.', base: '세 장면을 차례로 놓고 "말로 하기" 말풍선 두 칸을 채운 뒤, 속상할 때 차례도 놓는다.', challenge: '틀린 장면(물건 던지기·혼자 꾹 숨기기)이 섞인 판에서 빼고 놓는다.' },
        activity: {
          title: '화가 날 때 하는 차례', tool: 'story',
          teacher: '"화가 확 났을 때 맨 먼저 할 일은 무엇일까요?" 장면을 놓은 뒤 반 전체가 "멈춰! 후우— 말로 해요" 하고 몸으로 따라 한다. "말로 하기"를 맨 앞에 놓는 학생에게 "화가 가장 클 때 바로 말하면 어떤 말이 나올까요?"라고 묻는다. 셋째 문항에서 속상할 때도 멈추고 숨 쉰 뒤 믿는 사람에게 말한다는 것을 짚는다.',
          task: '화가 날 때 하는 차례대로 장면을 놓고, 말로 하기 말풍선을 채워요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORD('화가 날 때 하는 차례대로 장면을 놓아요.', {}, [{ id: 'stop', text: '멈추기' }, { id: 'breath', text: '숨 크게 쉬기' }, { id: 'talk', text: '말로 하기' }], { id: 'throw', text: '물건 던지기', why: '던지면 나와 친구가 다칠 수 있어요.' }, 0.1),
            { prompt: '말로 하기 장면의 말풍선 두 칸을 채워요.', toolOptions: { mode: 'fill', slots: [{ id: 'b1', who: '다온', label: '"네가 ___ 속상했어."' }, { id: 'b2', who: '다온', label: '"다음엔 ___."' }], cards: ['네가 미워서', '말없이 가져가서', '먼저 물어봐 줘', '다시는 놀지 마'] },
              target: { fill: { b1: '말없이 가져가서', b2: '먼저 물어봐 줘' } }, difficulty: 0.2,
              levels: {
                easy: { prompt: '말로 하기 장면의 말풍선 한 칸을 채워요.', toolOptions: { slots: [{ id: 'b1', who: '다온', label: '"네가 ___ 속상했어."' }], cards: ['네가 미워서', '말없이 가져가서'] }, target: { fill: { b1: '말없이 가져가서' } } },
                challenge: { toolOptions: { cards: ['네가 미워서', '말없이 가져가서', '먼저 물어봐 줘', '다시는 놀지 마', '너 때문에 망쳤어'] } },
              } },
            ORD('속상할 때 하는 차례대로 장면을 놓아요.', {}, [{ id: 'pause', text: '잠깐 멈추기' }, { id: 'slow', text: '숨 천천히 쉬기' }, { id: 'tell', text: '믿는 사람에게 말하기' }], { id: 'hide', text: '혼자 꾹 숨기기', why: '꾹 숨기면 마음이 더 커질 수 있어요.' }, 0.25,
              { conclude: '화가 나거나 속상할 때는 멈추고, 숨 쉬고, 말로 해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '화가 나면 ___ → 숨 크게 쉬기 → 말로 하기', answer: '멈추기' }] },
      }),
      C({
        id: 'life.e34.calm-toolbox.activity.box-make', type: 'activity', title: '내 도구상자 꾸미기',
        method: '도구상자 꾸미기', tool: 'collage', minutes: 14,
        levels: { easy: '조각 모양 4가지만 고르개에 있고, 조각 2개(잎·하트)를 붙이면 된다.', base: '도구 네 가지(잎·하트·동그라미·별)를 하나씩 붙이고 짝에게 이름을 말한다.', challenge: '네 가지를 붙이고 어떤 마음일 때 쓸지 색(화남은 빨강, 걱정은 파랑)을 정했는지 표시한다.' },
        activity: {
          title: '내 도구상자 꾸미기', tool: 'collage',
          teacher: '"잎은 숨쉬기, 하트는 말하기, 동그라미는 몸 움직이기, 별은 좋아하는 활동이에요. 나에게 맞는 도구를 골라 상자를 꾸며 볼까요?" 칠판에 조각 뜻을 그려 두고, 조각을 붙일 때마다 "이 조각은 어떤 도구예요? 언제 쓸 거예요?"라고 묻는다. 조각만 많이 붙이고 뜻을 말하지 못하는 학생에게 "이 별은 어떤 좋아하는 활동일까요?"라고 묻는다. 도구는 많을수록, 내게 맞을수록 좋다는 점을 짚는다.',
          task: '마음 달래기 도구 조각을 골라 상자에 붙이고, 조각마다 어떤 도구인지 말해요.', levels: { easy: { shapes: ['leaf', 'heart', 'circle', 'star'] }, base: { shapes: ['leaf', 'heart', 'circle', 'star', 'square'] }, challenge: {} },
          items: [
            { prompt: '숨쉬기 잎과 말하기 하트를 상자에 붙여요.', toolOptions: {}, target: { has: [{ shape: 'leaf', min: 1 }, { shape: 'heart', min: 1 }] }, difficulty: 0.1 },
            { prompt: '도구 네 가지(잎·하트·동그라미·별)를 하나씩 붙여요.', toolOptions: {}, target: { has: [{ shape: 'leaf', min: 1 }, { shape: 'heart', min: 1 }, { shape: 'circle', min: 1 }, { shape: 'star', min: 1 }] }, difficulty: 0.15,
              levels: { easy: { prompt: '도구 조각을 2개 붙여요.', target: { pieces: { min: 2 } } } } },
            { prompt: '도구상자를 꾸미고 스스로 표시해요.', toolOptions: {}, target: { selfCheck: ['도구를 골라 붙였어요', '도구 이름을 짝에게 말했어요'], minPieces: 4 }, difficulty: 0.15,
              levels: { easy: { prompt: '도구 2개로 꾸미고 스스로 표시해요.', target: { selfCheck: ['도구를 골라 붙였어요', '도구 이름을 짝에게 말했어요'], minPieces: 2 } }, challenge: { prompt: '마음마다 색을 정해 꾸미고 표시해요.', target: { selfCheck: ['도구를 골라 붙였어요', '도구 이름을 짝에게 말했어요', '마음마다 색을 정했어요'], minPieces: 4 } } },
              conclude: '마음 달래기 도구는 여러 개 모아 두고, 그때 맞는 것을 골라 써요.' },
          ],
        },
        worksheet: { items: [{ type: 'draw', prompt: '내 마음 달래기 도구상자를 그리고 도구 이름을 써요.' }] },
        notes: '콜라주 판은 이름표를 달지 못해 조각 모양으로 도구를 정한다(잎 = 숨쉬기, 하트 = 말하기, 동그라미 = 몸 움직이기, 별 = 좋아하는 활동). 이름표는 활동지에 쓴다.',
      }),
      C({
        id: 'life.e34.calm-toolbox.wrap.checklist', type: 'wrap', title: '오늘 써 본 방법 점검',
        method: '오늘 써 본 방법 점검', tool: 'kitchen', minutes: 6,
        levels: { easy: '점검 칸 2개(네모 숨쉬기·느린 가락)에 표시한다.', base: '점검 칸 4개 가운데 오늘 해 본 방법에 표시하고, 다음에 써 볼 방법을 하나 쓴다.', challenge: '점검 칸 6개에 쓸 때(쉬는 시간·집) 칸을 더해 표시한다.' },
        wrap: {
          teacher: '"오늘 써 본 마음 달래기 방법은 무엇이었나요? 그중 내게 가장 잘 맞은 것은요?" 점검 칸을 함께 읽고 스스로 표시하게 한다. 출구 2번에서 "하나만 있으면 돼요"를 고른 학생에게 "교실에서는 공을 찰 수 없을 때 무엇을 쓸까요?"라고 되묻는다. 다음에 써 볼 방법은 정답이 없고, 사람마다 다르다고 말해 준다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', prompt: '오늘 해 본 방법에 스스로 표시해요.', options: { mode: 'checklist', title: '오늘 해 본 방법', items: [{ id: 'breath', text: '네모 숨쉬기' }, { id: 'walk', text: '몸 움직이기' }, { id: 'music', text: '느린 가락 치기' }, { id: 'talk', text: '말로 하기' }] },
              target: { selfCheck: ['breath', 'music'] }, difficulty: 0.1,
              levels: {
                easy: { toolOptions: { items: [{ id: 'breath', text: '네모 숨쉬기' }, { id: 'music', text: '느린 가락 치기' }] } },
                challenge: { prompt: '해 본 방법과 쓸 때까지 표시해요.', toolOptions: { items: [{ id: 'breath', text: '네모 숨쉬기' }, { id: 'walk', text: '몸 움직이기' }, { id: 'music', text: '느린 가락 치기' }, { id: 'talk', text: '말로 하기' }, { id: 'rest', text: '쉬는 시간에 쓸래요' }, { id: 'home', text: '집에서 쓸래요' }] } },
              } },
            { type: 'choice', prompt: '마음 달래기 방법은 몇 개 있으면 좋을까요?', options: ['하나만 있으면 돼요', '여러 개 두고 골라 써요'], answer: 1, difficulty: 0.1, explain: '때와 곳마다 맞는 방법이 달라서 여러 개가 있으면 좋아요.' },
            { type: 'short', prompt: '다음에 써 볼 마음 달래기 방법 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '마음 달래기 도구',
          items: [
            { type: 'check', prompt: '내 도구상자에 넣을 방법에 ✓ 해요.', options: ['네모 숨쉬기', '산책하기', '느린 음악 듣기', '믿는 사람에게 말하기'] },
            { type: 'short', prompt: '쉬는 시간에 쓸 방법 하나를 써요.' },
          ],
        },
        notes: '점검표는 학생이 스스로 표시하는 것이며 걷거나 견주지 않는다. 출구 1의 점검 항목은 3차시(네모 숨쉬기·느린 가락)에 맞춘 것이다 — 다른 조합에서는 해 본 방법을 말로 바꿔 읽어 준다.',
      }),
      C({
        id: 'life.e34.calm-toolbox.wrap.last-tool', type: 'wrap', title: '마지막 도구는 믿는 어른',
        method: '마지막 도구는 어른', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 장면을 읽어 주고 반 전체가 함께 고른다.', base: '장면 두 개에서 스스로 고르고 결과를 본다.', challenge: '첫 장면에서 선생님께 할 첫마디까지 고른다.' },
        wrap: {
          teacher: '"도구상자의 방법을 다 써 봐도 며칠째 마음이 무거우면 어떻게 할까요?" 보기를 고를 때마다 결과를 소리 내어 읽는다. "어른한테 말하면 귀찮아하실 거예요"라는 학생에게 "선생님은 그런 이야기를 들으려고 여기 있어요. 말해 주면 고마워요"라고 말해 준다. 둘째 장면에서 선생님이 바빠 보여도 다시 말하거나 다른 어른에게 말하면 된다는 것을 짚는다. 마지막 도구는 언제나 믿는 어른이라고 마무리한다.',
          exitTicket: [
            { type: 'tool', tool: 'emotion', prompt: '방법을 써도 계속 힘들 때 다온이는 어떻게 할까요?',
              options: { mode: 'branch', who: '다온', situation: '여러 방법을 써 봐도 며칠째 마음이 무거워요.', choices: [
                { id: 'tell', text: '선생님께 말해요', result: '선생님이 끝까지 들어 주셨어요.', mood: '편안함' },
                { id: 'hide', text: '계속 혼자 참아요', result: '마음이 점점 더 무거워졌어요.', mood: '슬픔', why: '방법을 써도 힘들 때는 어른과 나눠요.' },
                { id: 'none', text: '아무 말 안 해요', result: '아무도 다온이 마음을 몰랐어요.', mood: '걱정', why: '말해야 어른이 도울 수 있어요.' },
              ] },
              target: { choice: 'tell' }, difficulty: 0.1,
              levels: { challenge: { prompt: '다온이가 선생님께 할 첫마디를 골라요.', toolOptions: { ask: '선생님께 할 첫마디는?', choices: [
                { id: 'first', text: '"드릴 말이 있어요"', result: '선생님이 "그래, 이야기해 줄래?" 하셨어요.', mood: '편안함' },
                { id: 'nothing', text: '"아니에요, 없어요"', result: '말을 꺼내지 못했어요.', mood: '걱정', why: '"드릴 말이 있어요" 한마디로 시작해요.' },
                { id: 'later', text: '"그냥 됐어요"', result: '선생님이 다온이 마음을 모르셨어요.', mood: '슬픔', why: '어렵더라도 첫마디를 꺼내 봐요.' },
              ] }, target: { choice: 'first' } } } },
            { type: 'tool', tool: 'emotion', prompt: '선생님이 바빠 보여요. 다온이는 어떻게 할까요?',
              options: { mode: 'branch', who: '다온', situation: '말하려고 갔는데 선생님이 바빠 보여요.', choices: [
                { id: 'again', text: '쉬는 시간에 다시 말해요', result: '쉬는 시간에 선생님이 들어 주셨어요.', mood: '편안함' },
                { id: 'quit', text: '말하기를 그만둬요', result: '마음이 그대로 무거웠어요.', mood: '슬픔', why: '바빠 보여도 다시 말하거나 다른 어른께 말해요.' },
                { id: 'other', text: '보건 선생님께 말해요', result: '보건 선생님이 담임 선생님과 이어 주셨어요.', mood: '고마움' },
              ] },
              target: { choice: ['again', 'other'] }, difficulty: 0.15 },
            MOOD,
          ],
        },
        worksheet: {
          title: '마지막 도구는 믿는 어른',
          items: [
            { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '방법을 써도 계속 힘들면 믿는 ___에게 말해요.', answer: '어른' },
            { type: 'short', prompt: '선생님께 말을 꺼낼 첫마디를 써요.' },
          ],
        },
        notes: note('장면은 가상 인물의 일이다. 학생에게 지금 힘든 일이 있는지 묻지 않는다.'),
      }),
    );
  }

  // ======================================================================================================
  // 3학년 · 도움 요청, 누구에게 어떻게 (§2 초: 도움 요청)
  // ======================================================================================================
  {
    const C = T('ask-help', 3);
    const SCHOOL = [{ name: '상담실', icon: 'dot', legend: '상담실', at: [0, 0] }, { name: '보건실', icon: 'hospital', legend: '보건실', at: [3, 0] }, { name: '교실', icon: 'school', legend: '교실', at: [2, 1] }, { name: '교무실', icon: 'office', legend: '교무실', at: [1, 2] }, { name: '도서실', icon: 'library', legend: '도서실', at: [3, 2] }];
    const pl = (...names) => SCHOOL.filter((p) => names.includes(p.name));
    const TOWN = [{ name: '집', icon: 'house', at: [0, 2] }, { name: '학교', icon: 'school', at: [3, 0] }, { name: '주민센터', icon: 'office', legend: '주민센터', at: [1, 0] }, { name: '도서관', icon: 'library', legend: '도서관', at: [3, 2] }];
    const HELP = [['직접 말하기', 9], ['쪽지 쓰기', 6], ['전화로 말하기', 3]];
    const HPIC = { type: 'picture', title: '말하기 편한 도움 요청 방법(가상)', unit: '명', icon: 'person', icons: [{ value: 5, name: '5명' }, { value: 1, name: '1명' }], xLabel: '방법', yLabel: '고른 사람' };
    M.push(
      C({
        id: 'life.e34.ask-help.intro.hero', type: 'intro', title: '도움을 청한 다온이 이야기',
        method: '도움을 청한 인물 이야기', tool: 'story', minutes: 6,
        levels: { easy: '장면 2장(걱정·말하기)이 놓이는 시연을 본다.', base: '장면 3장이 차례로 놓이는 시연을 보고 다온이의 마음이 어떻게 바뀌었는지 말한다.', challenge: '장면마다 다온이의 마음 낱말(걱정 → 떨림 → 편안함)을 붙여 말한다.' },
        intro: {
          teacher: '"다온이는 숙제 걱정에 며칠째 잠을 잘 못 잤어요. 그다음에 어떻게 했을까요?" 시연 단추로 걱정 → 선생님께 말함 → 함께 계획을 세워 나아짐 장면이 놓이는 모습을 보인다. "선생님께 말하면 혼나요"라는 말이 나오면 "다온이는 혼났나요? 선생님은 무엇을 해 주셨나요?"라고 되묻는다. 도움을 청하는 것은 약한 게 아니라 용기 있는 일이라고 밝힌다.',
          student: '다온이가 도움을 청한 이야기를 차례대로 보고, 다온이의 마음이 어떻게 바뀌었는지 말해요.',
          demo: { tool: 'story', options: { mode: 'order', slots: ['처음', '다음', '끝'], cards: [{ id: 'worry', text: '숙제 걱정에 잠 못 잠' }, { id: 'tell', text: '선생님께 말함' }, { id: 'better', text: '함께 계획 세워 나아짐' }], shuffle: false },
            sequence: [{ order: ['worry', 'tell'] }, { order: ['worry', 'tell', 'better'] }] },
          art: { draw: 'three paper story panels: a paper child awake at night with a worried face, the child talking to a paper teacher, then both smiling over a small paper plan', banner: '도움을 청하는 것도 용기', extra: [{ motif: 'sun', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      C({
        id: 'life.e34.ask-help.intro.when-help', type: 'intro', title: '도움이 필요할 때 손 들기',
        method: '도움이 필요할 때 손 들기', tool: 'timer', minutes: 6,
        levels: { easy: '상황 4개에 5초씩 생각하고 손 들기·박수로 답한다.', base: '시연대로 상황 6개에 5초씩 답한다.', challenge: '애매한 상황(어려운 수학 문제)에서 고른 까닭을 말한다.' },
        intro: {
          teacher: '"선생님이 상황을 읽으면 5초 동안 생각해요. 어른의 도움이 필요하면 손 들기, 혼자 해도 되면 박수예요." 시연 단추로 타이머가 여섯 번에 맞춰지는 것을 보이고 상황을 읽는다(연필을 떨어뜨림, 신발 끈이 풀림, 며칠째 잠이 잘 안 옴, 친구가 계속 놀림, 수학 문제 하나가 어려움, 친구가 크게 다쳐 울고 있음). "혼자 해결 못 하면 약한 거예요"라는 말이 나오면 "어른도 힘들면 도움을 청해요. 알맞을 때 청하는 게 지혜예요"라고 말해 준다.',
          student: '상황을 듣고 5초 안에 도움이 필요하면 손을 들고, 혼자 해도 되면 박수를 쳐요.',
          demo: { tool: 'timer', options: { title: '도움 손 들기(우리 반 약속)', labels: ['생각', '손 들기'], plan: { work: 5, rest: 3, rounds: 1 } }, sequence: [{ plan: { work: 5, rest: 3, rounds: 6 } }] },
          art: { draw: 'a paper classroom where some paper children raise their hands and others clap, a big paper timer on the board', banner: '손 들기? 박수?', extra: [{ motif: 'star', x: 300, y: 96, color: 'sky' }] },
        },
        notes: '타이머 초는 놀이 진행용 우리 반 약속 값이다.',
      }),
      C({
        id: 'life.e34.ask-help.activity.judge', type: 'activity', title: '혼자·친구와·어른께 나누기',
        method: '상황 판단: 혼자/친구/어른', tool: 'sortboard', minutes: 13,
        levels: { easy: '카드 3장, 바구니 옆에 든 장 수가 보이고 틀리면 까닭을 듣고 되돌아온다.', base: '카드 6장을 세 바구니에 다 넣은 뒤 확인한다.', challenge: '헷갈리는 카드 3장을 더한 9장을 나누고, 활동지에서 어른께 가야 하는 까닭을 고른다.' },
        activity: {
          title: '혼자·친구와·어른께 나누기', tool: 'sortboard',
          teacher: '"이 일은 혼자 할 수 있을까요, 친구와 하면 될까요, 어른께 가야 할까요?" 카드를 넣을 때마다 까닭을 한 문장으로 말하게 한다. "며칠째 잠이 안 와요"를 혼자 칸에 넣는 학생에게 "며칠째 이어지면 혼자 고칠 수 있을까요? 몸과 마음이 오래 힘든 일은 어른께 가요"라고 묻는다. 오래 이어지거나 위험하거나 마음이 많이 힘든 일은 어른께 간다는 기준을 짚는다.',
          task: '상황 카드를 혼자 해결·친구와·어른께 바구니에 나누어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            SB('학교에서 생긴 일을 바구니에 나누어요.', ['혼자 해결', '친구와', '어른께'], [['연필 깎기', '신발 끈 묶기'], ['줄넘기 같이 연습', '모둠 역할 나누기'], ['친구가 크게 다침', '며칠째 잠이 안 옴']], 1, [['준비물 챙기기'], ['책상 함께 옮기기'], ['누가 계속 놀림']], 0.15),
            SB('집과 놀이에서 생긴 일을 나누어요.', ['혼자 해결', '친구와', '어른께'], [['내 방 정리', '물 마시기'], ['놀이 규칙 정하기', '보드게임 정리'], ['모르는 사람이 따라옴', '마음이 오래 무거움']], 1, [['양치하기'], ['같이 놀 친구 찾기'], ['밤마다 무서운 꿈']], 0.2),
            SB('마음에 생긴 일을 나누어요.', ['혼자 해결', '친구와', '어른께'], [['조금 심심함', '잠깐 짜증 남'], ['발표 연습하기', '같이 웃을 일 찾기'], ['걱정에 밥을 못 먹음', '혼자라 많이 외로움']], 1, [['살짝 졸림'], ['새 놀이 배우기'], ['자꾸 울고 싶음']], 0.25,
              { conclude: '오래 이어지거나, 위험하거나, 마음이 많이 힘든 일은 어른께 도움을 청해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '"며칠째 잠이 안 와요"를 어른께 말하는 까닭은?', options: ['오래 이어져 혼자 고치기 어려워서', '어른은 잠을 안 자서', '친구가 싫어해서'], answer: '오래 이어져 혼자 고치기 어려워서' }] },
      }),
      C({
        id: 'life.e34.ask-help.activity.map', type: 'activity', title: '학교와 동네 도움 지도',
        method: '우리 동네 도움 지도', tool: 'map', minutes: 14,
        levels: { easy: '지도에 장소 두 곳만 있고, 범례도 두 칸만 채운다.', base: '장소 네·다섯 곳 지도에서 핀을 꽂고 동네 지도 범례 네 칸을 채운다.', challenge: '핀을 꽂은 뒤 그곳에서 받을 도움을 고르고, 범례에 헷갈리는 이름 두 개가 더 섞인다.' },
        activity: {
          title: '학교와 동네 도움 지도', tool: 'map',
          teacher: '"마음이 힘들 때 이야기 나눌 곳은 학교 어디에 있을까요?" 핀을 꽂기 전에 그곳에 누가 있는지 말하게 한다. "상담실은 큰 문제가 있는 사람만 가요"라는 학생에게 "상담 선생님은 작은 걱정도 들어 주세요. 누구나 갈 수 있어요"라고 말해 준다. 셋째 문항에서 동네에도 도움을 받을 수 있는 곳이 있다는 것을 기호와 이름으로 익히게 한다.',
          task: '칸 지도에서 도움 받을 곳에 핀을 꽂고, 동네 지도 범례 빈칸을 채워요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '마음이 힘들 때 이야기 나눌 곳에 핀을 꽂아요.', toolOptions: { title: '우리 학교', grid: [4, 3], places: SCHOOL }, target: { place: '상담실' }, difficulty: 0.1,
              levels: { easy: { toolOptions: { places: pl('상담실', '도서실') } }, challenge: { prompt: '상담실에 핀을 꽂고 받을 도움도 골라요.', toolOptions: { ask: { q: '상담실에서는?', choices: ['마음 이야기를 들어 줘요', '책을 빌려줘요'] } }, target: { place: '상담실', pick: 0 } } } },
            { prompt: '몸이 아플 때 가는 곳에 핀을 꽂아요.', toolOptions: { title: '우리 학교', grid: [4, 3], places: SCHOOL }, target: { place: '보건실' }, difficulty: 0.15,
              levels: { easy: { toolOptions: { places: pl('보건실', '교실') } }, challenge: { prompt: '보건실에 핀을 꽂고 받을 도움도 골라요.', toolOptions: { ask: { q: '보건실에서는?', choices: ['아픈 곳을 살펴 줘요', '숙제를 내 줘요'] } }, target: { place: '보건실', pick: 0 } } } },
            { prompt: '동네 지도 범례 빈칸에 기호의 이름을 채워요.', toolOptions: { mode: 'legend', title: '우리 동네', grid: [4, 3], places: TOWN }, target: { legend: { house: '집', school: '학교', office: '주민센터', library: '도서관' } }, difficulty: 0.2,
              levels: { easy: { prompt: '동네 지도 범례 빈칸 두 칸을 채워요.', toolOptions: { places: TOWN.filter((p) => ['학교', '주민센터'].includes(p.name)) }, target: { legend: { school: '학교', office: '주민센터' } } }, challenge: { toolOptions: { extra: ['소방서', '시장'] } } },
              conclude: '학교에는 상담실·보건실, 동네에는 주민센터·도서관처럼 도움을 받을 곳이 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '곳과 받을 수 있는 도움을 이어 써요.', columns: ['곳', '받을 수 있는 도움'], cells: [['상담실', ''], ['보건실', '']], answer: '마음 이야기를 들어 줘요, 아픈 곳을 살펴 줘요' }] },
        notes: '칸 지도는 수업용 예시다. 우리 학교 상담실 이름(위클래스 등)과 자리, 지역 기관의 실제 상담 운영은 학교가 확인해 말로 바꿔 부른다(사람 확인 목록). 계획의 "집에서 가까운 곳까지 길 찾기"는 칸 지도가 길 찾기를 하지 않아 도전 단계 "받을 도움 고르기"로 바꾸었다.',
      }),
      C({
        id: 'life.e34.ask-help.activity.script', type: 'activity', title: '도움 말하기 3단계 연습',
        method: '도움 말하기 3단계 연습', tool: 'story', minutes: 13,
        levels: { easy: '두 칸은 채워져 있어 빈칸 하나만 채우고, 놓으면 바로 맞는지 알려 준다.', base: '누구·무엇·부탁 빈칸 셋을 채우고, 만든 말을 짝에게 소리 내어 한다.', challenge: '"됐어요"처럼 도움을 멈추게 하는 카드가 섞인 판에서 고른다.' },
        activity: {
          title: '도움 말하기 3단계 연습', tool: 'story',
          teacher: '"도움을 청할 때는 누구에게(선생님), 무엇이 힘든지(요즘 잠을 못 자요), 무엇을 부탁하는지(이야기 들어 주실래요?) 세 가지를 말해요." 손가락 셋을 차례로 펴며 함께 말해 본 뒤 빈칸을 채운다. "그냥 \'힘들어요\'만 하면 돼요"라는 학생에게 "선생님이 무엇을 도와주면 될지 알 수 있을까요?"라고 묻는다. 셋 다 말하지 못해도 첫마디만 꺼내면 어른이 이어서 물어봐 준다고 말해 준다.',
          task: '도움 말하기 3단계(누구·무엇·부탁) 빈칸에 알맞은 카드를 넣어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            { prompt: '잠을 못 자는 다온이의 도움 말을 채워요.', toolOptions: { mode: 'fill', slots: [{ id: 'who', who: '다온', label: '누구: "___,"' }, { id: 'what', who: '다온', label: '무엇: "요즘 ___."' }, { id: 'ask', who: '다온', label: '부탁: "___?"' }], cards: ['이야기 들어 주실래요', '선생님', '몰라요', '잠을 못 자요'] },
              target: { fill: { who: '선생님', what: '잠을 못 자요', ask: '이야기 들어 주실래요' } }, difficulty: 0.15,
              levels: { easy: { state: { at: { 선생님: 0, '잠을 못 자요': 1 } } }, challenge: { toolOptions: { cards: ['이야기 들어 주실래요', '선생님', '몰라요', '됐어요', '잠을 못 자요'] } } } },
            { prompt: '친구와 자꾸 다투는 서진이의 도움 말을 채워요.', toolOptions: { mode: 'fill', slots: [{ id: 'who', who: '서진', label: '누구: "___,"' }, { id: 'what', who: '서진', label: '무엇: "요즘 ___."' }, { id: 'ask', who: '서진', label: '부탁: "___?"' }], cards: ['친구랑 자꾸 다퉈요', '같이 방법 찾아 주실래요', '상담 선생님', '혼자 할게요'] },
              target: { fill: { who: '상담 선생님', what: '친구랑 자꾸 다퉈요', ask: '같이 방법 찾아 주실래요' } }, difficulty: 0.2,
              levels: { easy: { state: { at: { '상담 선생님': 0, '친구랑 자꾸 다퉈요': 1 } } }, challenge: { toolOptions: { cards: ['친구랑 자꾸 다퉈요', '같이 방법 찾아 주실래요', '상담 선생님', '혼자 할게요', '아무 일 없어요'] } } } },
            { prompt: '배가 자주 아픈 다온이의 도움 말을 채워요.', toolOptions: { mode: 'fill', slots: [{ id: 'who', who: '다온', label: '누구: "___,"' }, { id: 'what', who: '다온', label: '무엇: "요즘 ___."' }, { id: 'ask', who: '다온', label: '부탁: "___?"' }], cards: ['좀 봐 주실래요', '배가 자주 아파요', '그냥 참을게요', '보건 선생님'] },
              target: { fill: { who: '보건 선생님', what: '배가 자주 아파요', ask: '좀 봐 주실래요' } }, difficulty: 0.25,
              levels: { easy: { state: { at: { '보건 선생님': 0, '배가 자주 아파요': 1 } } }, challenge: { toolOptions: { cards: ['좀 봐 주실래요', '배가 자주 아파요', '그냥 참을게요', '됐어요', '보건 선생님'] } } } },
            { prompt: '내가 만든 도움 말을 짝에게 소리 내어 해 봐요.', free: true, talk: true, conclude: '누구에게, 무엇이 힘든지, 무엇을 부탁하는지 말하면 어른이 돕기 쉬워요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '도움 말하기 3단계를 채워요.', columns: ['누구', '무엇', '부탁'], cells: [['선생님', '', '']], answer: '예: 요즘 잠을 못 자요, 이야기 들어 주실래요' }] },
        notes: '연습하는 말은 가상 인물의 일이다. 짝 연습에서 자기 실제 고민을 말하게 하지 않는다.',
      }),
      C({
        id: 'life.e34.ask-help.activity.pair-role', type: 'activity', title: '말하고 들어 주는 역할놀이',
        method: '짝 역할놀이 — 말하고 들어 주기', tool: 'emotion', minutes: 14,
        levels: { easy: '역할놀이를 한 번 하고, 마음 잇기는 한 칸, 듣는 태도 보기는 둘에서 고른다.', base: '역할을 바꿔 두 번 하고, 두 사람의 마음을 잇고 좋은 말·듣는 태도를 고른다.', challenge: '좋은 말 카드와 듣는 태도 보기에 헷갈리는 것이 더 섞인다.' },
        activity: {
          title: '말하고 들어 주는 역할놀이', tool: 'emotion',
          teacher: '"한 사람은 도움을 청하는 다온이, 한 사람은 들어 주는 친구예요. 다온이의 말은 \'요즘 숙제 걱정에 잠이 잘 안 와\'로 정해요." 정해진 대사로 역할놀이를 한 뒤 바꿔서 한 번 더 한다. "들어 줄 때 바로 해결해 줘야 해요"라는 학생에게 "끝까지 들어 주기만 해도 다온이 마음이 어떨까요? 해결은 어른과 함께 해요"라고 말해 준다. 들어 준 뒤에는 "같이 선생님께 가자"고 말할 수 있다는 점을 짚는다.',
          task: '짝과 도움 청하기·들어 주기 역할을 해 본 뒤, 마음과 좋은 말을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            { prompt: '짝과 역할을 바꿔 가며 정해진 대사로 해 봐요.', free: true, talk: true },
            { prompt: '역할놀이를 한 두 사람의 마음을 이어요.', toolOptions: { mode: 'match', slots: [{ id: 'asker', label: '도움을 청한 사람' }, { id: 'listener', label: '끝까지 들어 준 사람' }], cards: ['편안함', '화남', '뿌듯함', '무서움'] },
              target: { match: { asker: ['편안함', '뿌듯함'], listener: ['뿌듯함', '편안함'] } }, difficulty: 0.15,
              levels: { easy: { prompt: '도움을 청한 사람의 마음을 이어요.', toolOptions: { slots: [{ id: 'asker', label: '도움을 청한 사람' }] }, target: { match: { asker: ['편안함', '뿌듯함'] } } } } },
            { prompt: '들어 주는 사람이 할 좋은 말을 골라요.', toolOptions: { mode: 'pick', basket: '들어 주는 좋은 말', cards: ['"말해 줘서 고마워"', '"그게 뭐가 힘들어"', '"끝까지 들을게"', '"나중에 해"'] }, target: { pick: ['"말해 줘서 고마워"', '"끝까지 들을게"'] }, difficulty: 0.15,
              levels: { challenge: { prompt: '들어 주는 좋은 말 세 가지를 골라요.', toolOptions: { cards: ['"말해 줘서 고마워"', '"그게 뭐가 힘들어"', '"끝까지 들을게"', '"나중에 해"', '"같이 선생님께 가자"', '"너만 그래"'] }, target: { pick: ['"말해 줘서 고마워"', '"끝까지 들을게"', '"같이 선생님께 가자"'] } } } },
            BR('짝이 "요즘 잠이 안 와"라고 해요. 어떻게 들을까요?', '짝이 "요즘 숙제 걱정에 잠이 안 와"라고 해요.', '짝', [
              { id: 'eye', text: '눈을 보고 끝까지 들어요', result: '짝이 마음을 더 이야기했어요.', mood: '편안함' },
              { id: 'change', text: '다른 이야기로 바꿔요', result: '짝이 하던 말을 멈췄어요.', mood: '속상함', why: '말을 돌리면 짝이 더 말하기 어려워요.' },
              { id: 'laugh', text: '"별거 아니네" 웃어요', result: '짝이 다시는 말하지 않았어요.', mood: '슬픔', why: '웃어넘기면 짝 마음이 더 아파요.' },
            ], 'eye', { id: 'fix', text: '바로 해결책만 말해요', result: '짝이 아직 할 말이 남았는데 끝났어요.', mood: '걱정', why: '먼저 끝까지 들어 주는 게 좋아요.' }, 0.2,
            { conclude: '들어 줄 때는 눈을 보고 끝까지 듣고, "같이 선생님께 가자"고 말해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '들어 줄 때 한 것에 ✓ 해요.', options: ['눈을 봤어요', '끝까지 들었어요', '"말해 줘서 고마워" 했어요'] }] },
        notes: '역할놀이 대사는 가상 인물의 것으로 정해 준다. 학생 자신의 실제 고민으로 역할놀이를 하지 않는다.',
      }),
      C({
        id: 'life.e34.ask-help.wrap.help-chart', type: 'wrap', title: '도움 요청 방법 그래프',
        method: '우리 반 도움 요청 방법 그래프', tool: 'chart', minutes: 6,
        levels: { easy: '두 줄이 미리 그려져 있어 한 줄만 채우고 그래프를 읽는다.', base: '세 줄을 다 채우고 가장 적은 방법을 읽는다.', challenge: '가장 적은 방법을 쓰기 쉽게 할 생각을 고르고 짝에게 말한다.' },
        wrap: {
          teacher: '"이 그래프는 가상의 3학년 한 반이 \'말하기 편한 도움 요청 방법\'을 고른 거예요. 큰 사람 그림 하나는 5명, 작은 그림 하나는 1명이에요." 이 자료는 수업용으로 지은 것이라고 먼저 말한다. 그래프를 채운 뒤 "직접 말하기가 어려운 친구는 어떤 방법을 쓸 수 있을까요?"라고 묻는다. 출구 3번에서 쪽지나 전화도 똑같이 좋은 도움 요청이라는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'chart', prompt: '표를 보고 도움 요청 방법 그림그래프를 채워요.', options: Object.assign({}, HPIC, { data: HELP }), target: { build: true }, difficulty: 0.15,
              levels: { easy: { toolOptions: { given: [0, 1] } } } },
            { type: 'tool', tool: 'chart', prompt: '가장 적게 고른 방법은 무엇인가요?', options: Object.assign({}, HPIC, { mode: 'read', data: HELP, question: '가장 적은 방법은?', choices: HELP.map((x) => x[0]) }), target: { pick: 2 }, difficulty: 0.15 },
            { type: 'choice', prompt: '전화로 말하기를 쓰기 쉽게 하려면?', options: ['번호를 카드에 적어 둬요', '쓰지 말라고 해요', '몰래만 써요'], answer: 0, difficulty: 0.15, explain: '번호를 미리 적어 두면 필요할 때 바로 쓸 수 있어요.' },
          ],
        },
        worksheet: {
          title: '도움 요청 방법',
          items: [
            { type: 'choice', prompt: '도움 요청 방법으로 알맞은 것을 모두 고른다면?', options: ['직접 말하기만', '직접·쪽지·전화 모두'], answer: '직접·쪽지·전화 모두' },
            { type: 'short', prompt: '내가 말하기 편한 도움 요청 방법을 써요.' },
          ],
        },
        notes: note('그래프 수는 수업용 가상 자료다. 실제로 우리 반에서 조사할 때는 "말하기 편한 방법"만 묻고, 누가 무슨 고민이 있는지는 묻지 않는다.'),
      }),
      C({
        id: 'life.e34.ask-help.wrap.card', type: 'wrap', title: '나의 도움 카드 만들기',
        method: '나의 도움 카드', tool: 'collage', minutes: 6,
        levels: { easy: '도와줄 어른 별 1개와 번호 네모 1개를 붙인다.', base: '도와줄 어른 별 2개와 번호 네모 1개를 붙인다.', challenge: '붙인 뒤 카드를 둘 곳(필통·가방)을 정했는지까지 스스로 표시한다.' },
        wrap: {
          teacher: '"별은 나를 도와줄 어른, 네모는 상담 번호 칸이에요. 나만의 도움 카드를 만들어 볼까요?" 조각을 붙인 뒤 활동지 카드에 어른 두 명과 선생님이 알려 주는 상담 번호를 옮겨 쓰게 한다. "도와줄 어른이 없어요"라는 학생이 있으면 "담임 선생님, 상담 선생님, 보건 선생님은 언제나 우리 반 친구 편이에요"라고 말해 주고 따로 살핀다. 카드는 필통이나 가방처럼 늘 보이는 곳에 둔다.',
          exitTicket: [
            { type: 'tool', tool: 'collage', prompt: '도와줄 어른 별 2개와 번호 네모를 붙여요.', options: { shapes: ['star', 'square', 'heart', 'circle'], colors: ['노랑', '파랑', '분홍', '초록'], sizes: ['s', 'm', 'l'] },
              target: { has: [{ shape: 'star', min: 2 }, { shape: 'square', min: 1 }] }, difficulty: 0.1,
              levels: { easy: { prompt: '도와줄 어른 별 1개와 번호 네모를 붙여요.', target: { has: [{ shape: 'star', min: 1 }, { shape: 'square', min: 1 }] } }, challenge: { prompt: '카드를 꾸미고 둘 곳까지 표시해요.', target: { selfCheck: ['어른 별을 붙였어요', '번호 칸을 붙였어요', '카드 둘 곳을 정했어요'], minPieces: 3 } } } },
            { type: 'choice', prompt: '도움 카드는 언제 꺼내 볼까요?', options: ['마음이 힘들 때', '시험 볼 때', '버릴 때'], answer: 0, difficulty: 0.1, explain: '마음이 힘들 때 카드를 보고 어른에게 연락해요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '나의 도움 카드',
          items: [
            { type: 'short', prompt: '나를 도와줄 어른 두 명을 써요(예: 담임 선생님).' },
            { type: 'blank', prompt: '선생님이 알려 주는 번호를 옮겨 써요.', text: '상담 번호: [학교가 확인해 넣는 상담 번호] → ___', answer: '선생님이 알려 준 번호' },
            { type: 'check', prompt: '카드를 둘 곳에 ✓ 해요.', options: ['필통', '가방', '책상 서랍'] },
          ],
        },
        notes: note('상담 번호는 학교가 확인한 번호만 교사가 [학교가 확인해 넣는 상담 번호] 자리에 적어 준다(사람 확인 목록). 카드에 학생 이름·주소·전화번호는 쓰지 않는다. 콜라주 판은 사람 그림을 그리지 못해 별 = 도와줄 어른, 네모 = 번호 칸으로 정한다.'),
      }),
    );
  }

  // ======================================================================================================
  // 4학년 · 친구의 힘든 마음에 다가가기 (§2 초: 도움 요청, 중: 또래 지지 기초 — 보고·듣고·말하기 틀)
  // ======================================================================================================
  {
    const C = T('friend-signals', 4);
    M.push(
      C({
        id: 'life.e34.friend-signals.intro.change', type: 'intro', title: '평소와 달라진 친구',
        method: '평소와 달라진 친구', tool: 'emotion', minutes: 6,
        levels: { easy: '그림 2장(예전·요즘)에 마음 카드가 놓이는 시연을 본다.', base: '시연을 본 뒤 요즘 서아에게서 달라진 점을 두 가지 말한다.', challenge: '달라진 점을 세 가지(말·놀이·밥) 찾아 짝에게 말한다.' },
        intro: {
          teacher: '"서아는 늘 웃으며 친구들과 놀았어요. 그런데 요즘은 말이 없고 쉬는 시간에 혼자 있어요. 서아의 마음은 어떨까요?" 시연 단추로 예전 그림에는 기쁨, 요즘 그림에는 외로움 카드가 놓이는 모습을 보인다. "그냥 혼자 있고 싶은 거예요"라는 말이 나오면 "그럴 수도 있어요. 그래도 평소와 달라졌다면 \'괜찮아?\' 하고 물어볼 수 있을까요?"라고 되묻는다. 친구가 평소와 다르면 알아차리는 것이 돕기의 첫걸음이라고 밝힌다.',
          student: '예전 서아와 요즘 서아를 견주어 보고, 달라진 점과 서아의 마음을 짝에게 말해요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'before', label: '늘 웃으며 같이 놀던 서아' }, { id: 'now', label: '요즘 말없이 혼자 있는 서아' }], cards: ['기쁨', '외로움', '화남', '신남'], shuffle: false },
            sequence: [{ match: { before: '기쁨', now: '외로움' } }] },
          art: { draw: 'two paper scenes side by side: a paper child laughing with friends in a playground, and the same child sitting alone on a bench looking down', banner: '평소와 달라졌어요', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: note('그림 속 친구는 가상 인물이다. 우리 반의 특정 친구를 떠올려 이름을 말하게 하지 않는다.'),
      }),
      C({
        id: 'life.e34.friend-signals.intro.listen-game', type: 'intro', title: '잘 듣기 놀이',
        method: '잘 듣기 놀이', tool: 'timer', minutes: 6,
        levels: { easy: '짝이 20초 동안 말하면 듣고 하나를 되말한다.', base: '시연대로 30초씩 말하고 듣고, 하나를 되말한다.', challenge: '들은 것과 함께 짝의 마음(신나 보였어)까지 되말한다.' },
        intro: {
          teacher: '"짝이 30초 동안 좋아하는 것을 말하면, 듣는 사람은 끝까지 들은 뒤 \'너는 ○○를 좋아하는구나\' 하고 되말해요." 시연 단추로 타이머가 말하기 30초·되말하기 10초, 두 번에 맞춰지는 것을 보이고 놀이를 한다. 중간에 끼어드는 학생에게 "끝까지 들어야 짝이 하고 싶은 말을 다 할 수 있어요"라고 말해 준다. 잘 듣는 것이 힘든 친구에게 다가가는 첫 기술이라고 밝힌다.',
          student: '짝이 좋아하는 것을 말하면 끝까지 듣고, 들은 것 하나를 되말해요.',
          demo: { tool: 'timer', options: { title: '잘 듣기 놀이(우리 반 약속)', labels: ['말하기', '되말하기'], plan: { work: 20, rest: 10, rounds: 1 } }, sequence: [{ plan: { work: 30, rest: 10, rounds: 2 } }] },
          art: { draw: 'two paper children sitting face to face, one talking with a small paper speech bubble with a star, the other leaning in and nodding', banner: '끝까지 들어요', extra: [{ motif: 'star', x: 300, y: 96, color: 'lavender' }] },
        },
        notes: '타이머 초는 놀이 진행용 우리 반 약속 값이다. 말하는 주제는 "좋아하는 것"으로만 한다.',
      }),
      C({
        id: 'life.e34.friend-signals.activity.listen-dos', type: 'activity', title: '들어 주는 태도 고르기',
        method: '들어 주는 태도 고르기', tool: 'sortboard', minutes: 13,
        levels: { easy: '카드 4장, 바구니 옆에 든 장 수가 보이고 틀리면 까닭을 듣고 되돌아온다.', base: '카드 6장을 다 넣은 뒤 확인하고, 좋은 태도 하나를 짝에게 해 본다.', challenge: '헷갈리는 카드 2장을 더한 8장을 나누고, 좋은 태도 하나를 짝에게 해 본다.' },
        activity: {
          title: '들어 주는 태도 고르기', tool: 'sortboard',
          teacher: '"내가 힘든 이야기를 할 때 친구가 이렇게 들으면 어떤 마음이 들까요?" 카드를 넣기 전에 그 태도를 몸으로 잠깐 흉내 내 보게 한다. "그게 뭐가 힘들어"를 좋은 태도에 넣으려는 학생에게 "기운 내라는 뜻이어도, 듣는 친구는 내 마음을 몰라준다고 느낄 수 있어요"라고 말해 준다. 셋째 문항에서 힘든 이야기를 듣고 혼자 비밀로 품지 않고 함께 어른에게 간다는 점을 짚는다.',
          task: '들어 주는 몸짓·말·행동 카드를 좋은 태도와 안 좋은 태도 바구니에 나누어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            SB('들을 때 몸짓을 바구니에 나누어요.', ['좋은 태도', '안 좋은 태도'], [['눈 맞추기', '끄덕이기', '몸을 친구 쪽으로'], ['말 자르기', '휴대폰 보기', '딴 데 보기']], 2, [['조용히 기다리기'], ['하품하며 듣기']], 0.15),
            SB('들을 때 하는 말을 나누어요.', ['좋은 태도', '안 좋은 태도'], [['"그랬구나"', '"더 말해 줄래?"', '"힘들었겠다"'], ['"그게 뭐가 힘들어"', '"빨리 말해"', '"너만 그래"']], 2, [['"말해 줘서 고마워"'], ['"별거 아니네"']], 0.2),
            SB('다 들은 뒤 하는 일을 나누어요.', ['좋은 태도', '안 좋은 태도'], [['같이 선생님께 가기', '곁에 있어 주기', '"또 말해 줘" 하기'], ['다른 친구에게 퍼뜨리기', '못 들은 척하기', '혼자 비밀로 품기']], 2, [['보호자께 함께 알리기'], ['놀리며 웃기']], 0.25,
              { conclude: '눈을 보고 끝까지 듣고, 힘든 이야기는 혼자 품지 않고 함께 어른에게 가요.' }),
            { prompt: '좋은 태도 하나를 골라 짝에게 해 봐요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '좋은 태도면 ○, 안 좋은 태도면 ×를 써요.', columns: ['태도', '○ / ×'], cells: [['눈 맞추기', ''], ['말 자르기', ''], ['"그랬구나"', ''], ['다른 친구에게 퍼뜨리기', '']], answer: '○, ×, ○, ×' }] },
      }),
      C({
        id: 'life.e34.friend-signals.activity.dilemma', type: 'activity', title: '갈림길: 비밀로 해 달래요',
        method: '친구가 "비밀로 해 줘"라고 할 때', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '갈림 2번(비밀 부탁 → 어른에게 가기), 보기 3개씩 고르며 결과를 따라간다.', challenge: '갈림 2번을 지난 뒤 "친구의 안전이 먼저" 같은 근거 카드를 고른다.' },
        activity: {
          title: '갈림길: 친구가 비밀로 해 달래요', tool: 'dilemma',
          teacher: '"친구가 \'아무한테도 말하지 마\'라고 했어요. 약속을 지키는 게 맞을까요?" 보기를 고를 때마다 결과를 소리 내어 읽고, 친구가 어떻게 되는지 짝과 말하게 한다. "약속은 무조건 지켜야 해요"라는 학생에게 "친구가 계속 혼자 힘들어도 그 약속을 지켜야 할까요? 몸과 마음의 안전에 관한 비밀은 지키지 않고 믿는 어른에게 함께 가요"라고 말해 준다. 어른에게 알리는 것은 고자질이 아니라 친구를 지키는 일이라는 점을 짚는다.',
          task: '장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('서아가 "비밀로 해 줘"라고 해요. 어떻게 할까요?', {
              text: '쉬는 시간, 서아가 "요즘 너무 힘들어. 아무한테도 말하지 마"라고 해요.', motif: 'cloud',
              choices: [
                { id: 'keep', text: '알았다고 비밀로 한다', result: '서아는 며칠째 혼자 힘들어했어요.', impact: [{ who: '서아', text: '계속 혼자 힘들어요', tone: -1 }] },
                { id: 'together', text: '"같이 선생님께 가자"고 한다', result: '서아가 "혼날까 봐 무서워"라고 해요.', ending: '함께 가자고 해서 서아가 어른과 이어졌어요.', next: {
                  text: '서아가 "혼날까 봐 무서워"라며 망설여요.', choices: [
                    { id: 'go', text: '"혼나는 게 아니라 돕는 거야" 하고 함께 간다', result: '선생님이 서아 이야기를 끝까지 들어 주셨어요.', impact: [{ who: '서아', text: '도움을 받기 시작했어요', tone: 1 }], ending: '친구의 안전을 먼저 생각해 함께 어른에게 갔어요.' },
                    { id: 'forget', text: '알았다고 하고 잊는다', result: '서아는 다시 혼자가 되었어요.', impact: [{ who: '서아', text: '도움을 받지 못했어요', tone: -1 }] },
                    { id: 'spread', text: '반 친구들에게 말한다', result: '친구들이 수군거려 서아가 더 속상했어요.', impact: [{ who: '서아', text: '더 힘들어졌어요', tone: -1 }] },
                  ] } },
                { id: 'ignore', text: '"별일 아니야" 하고 넘긴다', result: '서아가 더는 말하지 않았어요.', impact: [{ who: '서아', text: '마음을 닫았어요', tone: -1 }] },
              ] }, [['together', 'go']],
            [{ id: 'safe', text: '친구의 안전이 약속보다 먼저라서' }, { id: 'adult', text: '어른은 도울 힘이 있어서' }, { id: 'promise', text: '약속은 무조건 지켜야 해서', why: '친구가 힘들어하는 비밀은 지키지 않고 어른에게 함께 가요.' }], ['safe', 'adult'], 0.2),
            DIL('지우가 요즘 달라졌어요. 어떻게 할까요?', {
              text: '늘 밥을 잘 먹던 지우가 요즘 급식을 거의 안 먹고 혼자 엎드려 있어요.', motif: 'rain',
              choices: [
                { id: 'ask', text: '"요즘 괜찮아?" 하고 묻는다', result: '지우가 "그냥 힘들어"라고 작게 말했어요.', ending: '다정하게 물어서 지우가 마음을 조금 열었어요.', next: {
                  text: '지우가 "그냥 힘들어"라고만 해요.', choices: [
                    { id: 'tell', text: '"선생님께 같이 말해 볼까?" 한다', result: '지우와 함께 선생님께 갔어요.', impact: [{ who: '지우', text: '어른의 도움을 받아요', tone: 1 }], ending: '알아차리고, 묻고, 들은 뒤 어른과 이었어요.' },
                    { id: 'fix', text: '"내가 다 해결해 줄게" 한다', result: '어떻게 도울지 몰라 둘 다 막막했어요.', impact: [{ who: '지우와 나', text: '혼자 감당하기 어려워요', tone: -1 }] },
                    { id: 'leave', text: '"알았어" 하고 자리를 뜬다', result: '지우는 계속 혼자 엎드려 있었어요.', impact: [{ who: '지우', text: '혼자 남았어요', tone: -1 }] },
                  ] } },
                { id: 'laugh', text: '"왜 저래" 하고 웃는다', result: '지우가 더 고개를 숙였어요.', impact: [{ who: '지우', text: '더 외로워졌어요', tone: -1 }] },
                { id: 'skip', text: '모른 척 지나간다', result: '아무도 지우의 마음을 몰랐어요.', impact: [{ who: '지우', text: '도움을 받지 못했어요', tone: -1 }] },
              ] }, [['ask', 'tell']],
            [{ id: 'notice', text: '평소와 다르면 도움이 필요할 수 있어서' }, { id: 'adult', text: '어른과 함께해야 잘 도울 수 있어서' }, { id: 'alone', text: '친구 문제는 내가 다 풀어야 해서', why: '친구를 돕는 일은 혼자 하지 않고 어른과 함께해요.' }], ['notice', 'adult'], 0.25),
            DIL('밤에 친구 문자가 왔어요. 어떻게 할까요?', {
              text: '저녁에 서아에게서 "나 너무 힘들어. 비밀이야"라는 문자가 왔어요.', motif: 'moon',
              choices: [
                { id: 'carer', text: '보호자께 바로 보여 드린다', result: '보호자가 "말해 줘서 고마워. 같이 도울게"라고 하셨어요.', ending: '혼자 품지 않고 곁의 어른에게 바로 알렸어요.', next: {
                  text: '보호자가 "서아에게 뭐라고 답할까?"라고 물으세요.', choices: [
                    { id: 'reply', text: '"말해 줘서 고마워, 어른께 같이 알리자"', result: '보호자가 서아네 보호자·선생님과 이어 주셨어요.', impact: [{ who: '서아', text: '어른의 도움을 받아요', tone: 1 }], ending: '친구에게 다정하게 답하고 어른이 돕게 했어요.' },
                    { id: 'hush', text: '"응, 비밀 지킬게"', result: '서아는 그날 밤 혼자 견뎌야 했어요.', impact: [{ who: '서아', text: '혼자 힘들어요', tone: -1 }] },
                    { id: 'delete', text: '문자를 지우고 잔다', result: '아무도 서아의 마음을 몰랐어요.', impact: [{ who: '서아', text: '도움을 받지 못했어요', tone: -1 }] },
                  ] } },
                { id: 'wait', text: '내일 생각하기로 한다', result: '서아는 밤새 답을 기다렸어요.', impact: [{ who: '서아', text: '혼자 기다렸어요', tone: -1 }] },
                { id: 'share', text: '다른 친구 단톡방에 올린다', result: '여러 사람이 서아 이야기를 알게 되었어요.', impact: [{ who: '서아', text: '더 상처받았어요', tone: -1 }] },
              ] }, [['carer', 'reply']],
            [{ id: 'now', text: '힘들다는 말은 바로 어른과 나눠서' }, { id: 'kind', text: '친구에게도 다정하게 답해서' }, { id: 'secret', text: '비밀이라고 했으니까', why: '친구가 힘들다는 비밀은 지키지 않고 어른에게 알려요.' }], ['now', 'kind'], 0.3,
            { conclude: '친구가 힘들다며 비밀을 부탁해도, 그 비밀은 지키지 않고 믿는 어른에게 함께 가요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '친구가 힘들다며 "비밀로 해 줘"라고 하면?', options: ['비밀을 꼭 지켜요', '믿는 어른에게 함께 알려요', '다른 친구에게 말해요'], answer: '믿는 어른에게 함께 알려요' }] },
        notes: note('장면은 가상 인물의 일이고 "힘들어 보였다" 수준으로만 쓴다. 학생에게 이런 비밀을 들은 적이 있는지 묻지 않는다. 수업 뒤 따로 이야기하고 싶은 학생을 위해 상담 선생님이 있는 곳과 시간을 알려 둔다.'),
      }),
      C({
        id: 'life.e34.friend-signals.activity.kind-ask', type: 'activity', title: '다정하게 묻는 말 만들기',
        method: '다정하게 묻는 말 만들기', tool: 'story', minutes: 13,
        levels: { easy: '한 칸은 채워져 있어 빈칸 하나만 채우고, 놓으면 바로 맞는지 알려 준다.', base: '말풍선 빈칸 둘을 채우고, 만든 말을 짝에게 소리 내어 해 본다.', challenge: '대답이 없을 때 할 말(기다릴게·곁에 있을게) 빈칸까지 셋을 채운다.' },
        activity: {
          title: '다정하게 묻는 말 만들기', tool: 'story',
          teacher: '"친구가 평소와 달라 보일 때 어떻게 물으면 친구가 말하기 쉬울까요?" 말풍선을 채운 뒤 짝과 다정한 목소리로 해 본다. "왜 그래? 이상해"처럼 묻는 학생에게 "그 말을 들으면 친구는 말하고 싶을까요, 숨고 싶을까요?"라고 묻는다. 친구가 대답하지 않아도 "기다릴게, 언제든 말해 줘"라고 하고, 걱정되면 어른에게 알린다는 점을 짚는다.',
          task: '말풍선 빈칸에 알맞은 카드를 넣어 다정하게 묻는 말을 만들어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            { prompt: '말이 없어진 서아에게 묻는 말을 만들어요.', toolOptions: { mode: 'fill', slots: [{ id: 'b1', who: '나', label: '"요즘 ___ 보여."' }, { id: 'b2', who: '나', label: '"___ 있어?"' }], cards: ['이상해', '무슨 일', '기운이 없어', '시끄러워'] },
              target: { fill: { b1: '기운이 없어', b2: '무슨 일' } }, difficulty: 0.15,
              levels: { easy: { state: { at: { '무슨 일': 1 } } }, challenge: { prompt: '대답이 없을 때 할 말까지 세 칸을 채워요.', toolOptions: { slots: [{ id: 'b1', who: '나', label: '"요즘 ___ 보여."' }, { id: 'b2', who: '나', label: '"___ 있어?"' }, { id: 'b3', who: '나', label: '"말하기 싫으면 ___."' }], cards: ['이상해', '무슨 일', '기다릴게', '기운이 없어', '시끄러워'] }, target: { fill: { b1: '기운이 없어', b2: '무슨 일', b3: '기다릴게' } } } } },
            { prompt: '혼자 있는 지우에게 묻는 말을 만들어요.', toolOptions: { mode: 'fill', slots: [{ id: 'b1', who: '나', label: '"요즘 ___ 같아."' }, { id: 'b2', who: '나', label: '"내가 이야기 ___ 줄까?"' }], cards: ['혼자 있는 것', '놀리는 것', '들어', '몰라'] },
              target: { fill: { b1: '혼자 있는 것', b2: '들어' } }, difficulty: 0.2,
              levels: { easy: { state: { at: { 들어: 1 } } }, challenge: { prompt: '대답이 없을 때 할 말까지 세 칸을 채워요(지우).', toolOptions: { slots: [{ id: 'b1', who: '나', label: '"요즘 ___ 같아."' }, { id: 'b2', who: '나', label: '"내가 이야기 ___ 줄까?"' }, { id: 'b3', who: '나', label: '"언제든 ___."' }], cards: ['혼자 있는 것', '놀리는 것', '말해 줘', '들어', '몰라'] }, target: { fill: { b1: '혼자 있는 것', b2: '들어', b3: '말해 줘' } } } } },
            { prompt: '밥을 잘 안 먹는 서진이에게 묻는 말을 만들어요.', toolOptions: { mode: 'fill', slots: [{ id: 'b1', who: '나', label: '"요즘 밥을 ___."' }, { id: 'b2', who: '나', label: '"혹시 ___ 있어?"' }], cards: ['많이 먹네', '걱정거리', '잘 안 먹네', '웃긴 일'] },
              target: { fill: { b1: '잘 안 먹네', b2: '걱정거리' } }, difficulty: 0.25,
              levels: { easy: { state: { at: { 걱정거리: 1 } } }, challenge: { prompt: '대답이 없을 때 할 말까지 세 칸을 채워요(서진).', toolOptions: { slots: [{ id: 'b1', who: '나', label: '"요즘 밥을 ___."' }, { id: 'b2', who: '나', label: '"혹시 ___ 있어?"' }, { id: 'b3', who: '나', label: '"대답 안 해도 ___."' }], cards: ['많이 먹네', '걱정거리', '곁에 있을게', '잘 안 먹네', '웃긴 일'] }, target: { fill: { b1: '잘 안 먹네', b2: '걱정거리', b3: '곁에 있을게' } } } } },
            { prompt: '만든 말을 짝에게 다정한 목소리로 해 봐요.', free: true, talk: true, conclude: '"요즘 ○○해 보여. 무슨 일 있어?" 하고 다정하게 묻고, 대답이 없어도 곁에 있어 줘요.' },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '다정하게 묻는 말을 완성해요.', text: '"요즘 기운이 없어 보여. 무슨 ___ 있어?"', answer: '일' }] },
      }),
      C({
        id: 'life.e34.friend-signals.activity.together', type: 'activity', title: '함께 어른에게 가는 차례',
        method: '함께 어른에게 가는 차례', tool: 'kitchen', minutes: 14,
        levels: { easy: '점검표 3칸에서 할 일만 표시하고, 차례 카드는 3장을 놓는다.', base: '점검표 6칸에서 할 일 4개만 표시하고, 차례 카드 4장을 놓는다.', challenge: '차례 카드에 틀린 카드 한 장이 섞이고, 선생님이 안 계실 때 찾아갈 다음 어른을 고른다.' },
        activity: {
          title: '함께 어른에게 가는 차례', tool: 'kitchen',
          teacher: '"힘들어 보이는 친구에게 묻고 나서 무엇을 할까요?" 점검표를 채운 뒤 "묻기 → 함께 갈지 묻기 → 선생님께 가기 → 곁에서 기다리기"를 손가락으로 세며 함께 말한다. "혼자 해결해 주면 더 멋져요"라는 학생에게 "친구의 힘든 마음은 어른이 함께 도와야 해요. 어른에게 데려가는 것이 가장 멋진 도움이에요"라고 말해 준다. 셋째 문항에서 담임 선생님이 안 계시면 다른 선생님이나 보호자에게 간다는 것을 짚는다.',
          task: '친구를 도울 때 할 일만 표시하고, 함께 어른에게 가는 차례대로 놓아요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            CHK('힘들어 보이는 친구를 도울 때 할 일만 표시해요.', '친구 돕기 점검표', [{ id: 'ask', text: '친구에게 묻기', ok: true }, { id: 'rumor', text: '다른 친구에게 퍼뜨리기' }, { id: 'go', text: '함께 갈지 묻기', ok: true }, { id: 'alone', text: '혼자 다 해결하기' }, { id: 'teacher', text: '선생님께 가기', ok: true }, { id: 'wait', text: '곁에서 기다리기', ok: true }], [0, 1, 4], 0.15),
            ORD('함께 어른에게 가는 차례대로 놓아요.', { autoMotif: false }, [{ id: 'ask', text: '친구에게 묻기' }, { id: 'go', text: '함께 갈지 묻기' }, { id: 'teacher', text: '선생님께 가기' }, { id: 'wait', text: '곁에서 기다리기' }], { id: 'rumor', text: '반에 소문내기', why: '소문을 내면 친구가 더 힘들어져요.' }, 0.2),
            CHK('담임 선생님이 안 계실 때 찾아갈 어른만 표시해요.', '다음에 찾아갈 어른', [{ id: 'health', text: '보건 선생님', ok: true }, { id: 'counsel', text: '상담 선생님', ok: true }, { id: 'stranger', text: '처음 본 어른' }, { id: 'office', text: '교무실 선생님', ok: true }, { id: 'carer', text: '보호자', ok: true }, { id: 'none', text: '아무도 안 찾기' }], [0, 1, 2], 0.25,
              { conclude: '묻고, 함께 가자고 하고, 어른께 가요. 담임 선생님이 안 계시면 다른 믿는 어른께 가요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '힘든 친구에게 묻고, 함께 ___께 가요.', answer: '선생님' }] },
        notes: note('kitchen 순서 판은 음식 그림이 붙지 않게 autoMotif 를 끈다.'),
      }),
      C({
        id: 'life.e34.friend-signals.wrap.poster', type: 'wrap', title: '"혼자 두지 않기" 작은 포스터',
        method: '"혼자 두지 않기" 작은 포스터', tool: 'collage', minutes: 6,
        levels: { easy: '조각 2개(손잡기 하트·구호 별)를 붙인다.', base: '조각 4개 이상(하트 2·별 1 포함)을 붙인다.', challenge: '조각을 붙이고 우리 반 구호를 직접 정해 말했는지 스스로 표시한다.' },
        wrap: {
          teacher: '"하트는 손잡기, 별은 구호예요. \'혼자 두지 않기\' 포스터를 꾸며 볼까요?" 조각을 붙인 뒤 반 전체가 구호(예: "알아차리고, 묻고, 함께 가요")를 크게 말한다. 출구 2번에서 "말하지 말라면 안 알려요"를 고른 학생에게 "친구가 힘들어하는 일은 비밀로 하지 않고 어른과 함께 지켜요"라고 말해 준다. 완성한 포스터는 교실에 붙여 둔다.',
          exitTicket: [
            { type: 'tool', tool: 'collage', prompt: '손잡기 하트 2개와 구호 별을 붙여요.', options: { shapes: ['heart', 'star', 'circle', 'square'], colors: ['분홍', '노랑', '하늘', '초록'], sizes: ['s', 'm', 'l'] },
              target: { has: [{ shape: 'heart', min: 2 }, { shape: 'star', min: 1 }], pieces: { min: 4 } }, difficulty: 0.1,
              levels: { easy: { prompt: '손잡기 하트와 구호 별을 하나씩 붙여요.', target: { has: [{ shape: 'heart', min: 1 }, { shape: 'star', min: 1 }] } }, challenge: { prompt: '포스터를 꾸미고 구호를 정해 표시해요.', target: { selfCheck: ['하트와 별을 붙였어요', '우리 반 구호를 정했어요'], minPieces: 4 } } } },
            { type: 'choice', prompt: '힘든 친구가 "말하지 마"라고 하면?', options: ['말하지 말라면 안 알려요', '어른에게 함께 알려요'], answer: 1, difficulty: 0.1, explain: '친구가 힘들어하는 일은 비밀로 하지 않고 어른과 함께 지켜요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '혼자 두지 않기',
          items: [
            { type: 'short', prompt: '우리 반 "혼자 두지 않기" 구호를 써요.' },
            { type: 'check', prompt: '힘든 친구에게 내가 할 수 있는 일에 ✓ 해요.', options: ['알아차리기', '다정하게 묻기', '끝까지 듣기', '어른에게 함께 가기'] },
          ],
        },
        notes: '콜라주 판은 손 그림을 그리지 못해 하트 = 손잡기, 별 = 구호 글자로 정한다. 구호 글자는 활동지에 쓴다.',
      }),
      C({
        id: 'life.e34.friend-signals.wrap.role-check', type: 'wrap', title: '내가 할 일·어른이 할 일',
        method: '내가 할 일·어른이 할 일', tool: 'mindmap', minutes: 6,
        levels: { easy: '카드 4장을 두 가지에 나눈다.', base: '카드 6장을 두 가지에 나눈다.', challenge: '어디에도 맞지 않는 카드 2장(혼자 다 해결하기 등)이 섞인 판에서 나눈다.' },
        wrap: {
          teacher: '"힘든 친구를 도울 때 내가 할 일과 어른이 할 일은 무엇일까요?" 카드를 하나씩 읽고 가지에 놓을 때 까닭을 말하게 한다. "친구 문제는 내가 다 해결해야 해요"라는 학생에게 "친구를 돕는 것은 여럿이 함께하는 일이에요. 나는 알아차리고 이어 주고, 어른은 지켜 줘요"라고 말해 준다. 출구 2번으로 오늘의 오개념을 다시 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', prompt: '내가 할 일과 어른이 할 일로 나누어요.', options: { topic: '힘든 친구', slots: ['내가 할 일', '어른이 할 일'], cards: ['다정하게 묻기', '상담 이어 주기', '끝까지 들어 주기', '보호자와 이야기', '같이 어른께 가기', '도울 방법 찾기'] },
              target: { sort: { '내가 할 일': ['다정하게 묻기', '끝까지 들어 주기', '같이 어른께 가기'], '어른이 할 일': ['상담 이어 주기', '보호자와 이야기', '도울 방법 찾기'] } }, difficulty: 0.15,
              levels: {
                easy: { prompt: '내가 할 일과 어른이 할 일로 나누어요(4장).', toolOptions: { cards: ['다정하게 묻기', '상담 이어 주기', '끝까지 들어 주기', '보호자와 이야기'] }, target: { sort: { '내가 할 일': ['다정하게 묻기', '끝까지 들어 주기'], '어른이 할 일': ['상담 이어 주기', '보호자와 이야기'] } } },
                challenge: { prompt: '나누고, 어디에도 안 맞는 카드는 남겨요.', toolOptions: { cards: ['다정하게 묻기', '상담 이어 주기', '혼자 다 해결하기', '끝까지 들어 주기', '보호자와 이야기', '같이 어른께 가기', '비밀로 품기', '도울 방법 찾기'] } },
              } },
            { type: 'choice', prompt: '친구가 "어른한테 말하지 마"라고 하면?', options: ['약속이니 말하지 않아요', '친구를 위해 어른에게 알려요', '다른 친구와 의논해요'], answer: 1, difficulty: 0.15, explain: '친구가 힘들어하는 비밀은 지키지 않고 어른에게 알려요. 그것이 친구를 돕는 일이에요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '함께 돕는 일',
          items: [
            { type: 'table', prompt: '할 일을 나누어 써요.', columns: ['내가 할 일', '어른이 할 일'], cells: [['', ''], ['', '']], answer: '예: 다정하게 묻기·같이 어른께 가기 / 상담 이어 주기·보호자와 이야기' },
            { type: 'short', prompt: '힘든 친구에게 할 다정한 첫마디를 써요.' },
          ],
        },
        notes: CRISIS,
      }),
    );
  }

  // ======================================================================================================
  // 4학년 · 생명의 한살이와 소중함 (§2 초: 생명의 소중함)
  // ======================================================================================================
  {
    const C = T('life-cycle', 4);
    const WATER = [['가 화분', 7], ['나 화분', 4], ['다 화분', 1]];
    const GROW = [['가 화분', 12], ['나 화분', 8], ['다 화분', 3]];
    const BAR = { type: 'bar', unit: '일', xLabel: '화분', yLabel: '물 준 날', max: 7, scale: 1 };
    M.push(
      C({
        id: 'life.e34.life-cycle.intro.butterfly', type: 'intro', title: '나비의 한살이 둥근 판',
        method: '나비의 한살이', tool: 'lifecycle', minutes: 6,
        levels: { easy: '알·애벌레·번데기 3단계가 놓이는 시연을 본다.', base: '나비까지 4단계가 둥근 판에 놓이고 다시 알로 이어지는 시연을 본다.', challenge: '단계마다 필요한 돌봄(먹이 잎·조용한 곳)을 짝에게 말한다.' },
        intro: {
          teacher: '"배추흰나비는 어떻게 자랄까요?" 시연 단추로 알 → 애벌레 → 번데기 → 나비가 둥근 판에 놓이고, 나비가 다시 알을 낳아 이어지는 모습을 보인다. \'차례대로 따라가 보기\'로 함께 짚는다. "나비는 처음부터 나비예요"라는 말이 나오면 "알에서 바로 날개가 나올까요? 그사이 무엇이 있었나요?"라고 되묻는다. 모든 생명은 자라는 차례가 있고 다음 생명으로 이어진다는 것을 오늘 생각해 본다고 밝힌다.',
          student: '나비가 자라는 차례를 둥근 판에서 따라가 보고, 생명이 어떻게 이어지는지 짝과 말해요.',
          demo: { tool: 'lifecycle', options: { center: '나비의 한살이', slots: 4, cards: [{ id: 'egg', text: '알', motif: 'egg' }, { id: 'larva', text: '애벌레', motif: 'larva' }, { id: 'pupa', text: '번데기', motif: 'pupa' }, { id: 'adult', text: '나비', motif: 'butterfly' }], shuffle: false },
            sequence: [{ order: ['egg', 'larva', 'pupa'] }, { order: ['egg', 'larva', 'pupa', 'adult'], cyclic: true }] },
          art: { draw: 'a round paper wheel showing a tiny egg on a cabbage leaf, a green caterpillar, a chrysalis and a white butterfly, gentle paper arrows going around', banner: '생명은 자라고 이어져요', extra: [{ motif: 'leaf', x: 300, y: 96 }] },
        },
      }),
      C({
        id: 'life.e34.life-cycle.intro.question', type: 'intro', title: '"생명이 소중한 까닭" 손 들기',
        method: '"생명이 소중한 까닭" 손 들기', tool: 'timer', minutes: 6,
        levels: { easy: '까닭 2개에 5초씩 생각하고 손을 든다.', base: '시연대로 까닭 4개에 손을 들고 짝과 하나를 고른다.', challenge: '내가 생각한 까닭 하나를 덧붙여 말한다.' },
        intro: {
          teacher: '"선생님이 \'생명이 소중한 까닭\'을 읽을게요. 맞다고 생각하면 5초 안에 손을 들어요." 시연 단추로 타이머가 네 번에 맞춰지는 것을 보이고 까닭(세상에 하나뿐이다, 서로 이어져 있다, 한 번 잃으면 되돌릴 수 없다, 모두 함께 살아간다)을 읽는다. "작은 벌레는 별로 안 소중해요"라는 말이 나오면 "벌레도 알에서 자라 다음 생명으로 이어져요. 크기와 상관없이 하나뿐이에요"라고 말해 준다. 짝과 가장 마음에 드는 까닭 하나를 고르게 한다.',
          student: '까닭을 듣고 맞다고 생각하면 손을 들고, 짝과 가장 마음에 드는 까닭 하나를 골라요.',
          demo: { tool: 'timer', options: { title: '생명이 소중한 까닭(우리 반 약속)', labels: ['듣기', '손 들기'], plan: { work: 5, rest: 3, rounds: 1 } }, sequence: [{ plan: { work: 5, rest: 3, rounds: 4 } }] },
          art: { draw: 'a paper classroom with raised paper hands, above them a paper sprout, a paper bird and a paper child joined by a soft paper ribbon', banner: '생명은 하나뿐이에요', extra: [{ motif: 'sprout', x: 300, y: 96 }] },
        },
        notes: '타이머 초는 놀이 진행용 우리 반 약속 값이다. 죽음을 자세히 이야기하지 않고 "한 번 잃으면 되돌릴 수 없다"는 말까지만 한다.',
      }),
      C({
        id: 'life.e34.life-cycle.activity.my-timeline', type: 'activity', title: '이어지는 생명 시간 띠',
        method: '가족 속 나의 이어짐', tool: 'timeline', minutes: 13,
        levels: { easy: '첫 카드가 놓여 있어 남은 카드만 놓고, 놓으면 바로 맞는지 알려 준다.', base: '카드 4장(윗세대 → 돌보는 어른 → 나 → 어른이 된 나)을 시간 띠에 놓는다.', challenge: '틀린 카드("다시 아기가 된 나" 등) 한 장이 섞인 판에서 빼고 놓는다.' },
        activity: {
          title: '이어지는 생명 시간 띠', tool: 'timeline',
          teacher: '"할머니·할아버지에게서 나를 돌보는 어른으로, 그리고 나에게로 생명이 이어져요." 카드를 놓은 뒤 띠를 손가락으로 따라가며 "이어져요"를 함께 말한다. 가족은 엄마·아빠가 아니어도, 할머니나 이모, 위탁·입양 가족처럼 여러 모양이라고 먼저 말해 준다. "생명은 다시 되돌릴 수 있어요"라는 학생에게 "시간 띠가 거꾸로 갈 수 있을까요? 그래서 지금의 생명이 소중해요"라고 묻는다.',
          task: '생명이 이어지는 차례대로 카드를 시간 띠에 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORD('생명이 이어지는 차례대로 놓아요.', { axis: ['먼저', '나중'] }, [{ id: 'grand', text: '할머니·할아버지' }, { id: 'carer', text: '나를 돌보는 어른' }, { id: 'me', text: '어린이인 나' }, { id: 'future', text: '어른이 된 나' }], { id: 'back', text: '다시 아기가 된 나', why: '생명은 거꾸로 돌아가지 않고 앞으로 이어져요.' }, 0.15),
            ORD('한 사람이 자라는 차례대로 놓아요.', { axis: ['태어남', '나이 듦'] }, [{ id: 'baby', text: '아기' }, { id: 'kid', text: '어린이' }, { id: 'adult', text: '어른' }, { id: 'old', text: '할머니·할아버지' }], { id: 'reset', text: '처음으로 돌아감', why: '사람은 한 방향으로 자라고 나이 들어요.' }, 0.2),
            ORD('나무 생명이 이어지는 차례대로 놓아요.', { axis: ['먼저', '나중'] }, [{ id: 'seed', text: '씨앗' }, { id: 'sprout', text: '싹' }, { id: 'tree', text: '큰 나무' }, { id: 'newseed', text: '새 씨앗' }], { id: 'stone', text: '돌멩이', why: '돌멩이는 자라거나 이어지는 생명이 아니에요.' }, 0.25,
              { conclude: '생명은 앞으로만 자라고 다음 생명으로 이어져요. 그래서 하나뿐이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '생명은 거꾸로 돌아가지 않고 앞으로 ___.', answer: '이어져요' }] },
        notes: '가족 형태는 다양하다(한부모·조부모·위탁·입양 가족 등). "나를 돌보는 어른"으로 부르고 학생의 가족 사정을 묻지 않는다. 계획의 "다양한 가족 그림으로 다시 놓기"는 카드 판이 가족 그림을 따로 그리지 못해 교사가 말로 안내하고, 도전 단계는 틀린 카드 빼기로 했다.',
      }),
      C({
        id: 'life.e34.life-cycle.activity.pet-chart', type: 'activity', title: '반려식물 돌봄 기록표',
        method: '반려식물 돌봄 기록표', tool: 'chart', minutes: 14,
        levels: { easy: '막대 두 개가 미리 그려져 있어 하나만 채우고 그래프를 읽는다.', base: '물 준 날 막대그래프 세 개를 다 채우고, 물 준 날과 자란 키를 읽는다.', challenge: '두 그래프를 견주어 돌봄과 자람의 관계를 고른다.' },
        activity: {
          title: '반려식물 돌봄 기록표(가상)', tool: 'chart',
          teacher: '"가상의 4학년 한 반이 화분 세 개에 일주일 동안 물을 준 날을 적었어요." 표를 보고 막대를 채운 뒤 자란 키 그래프와 견주어 보게 한다. "물을 많이 줄수록 무조건 좋아요"라는 학생에게 "물을 너무 많이 부으면 뿌리가 어떻게 될까요? 알맞게 돌보는 게 중요해요"라고 묻는다. 생명은 꾸준히 돌볼 때 잘 자란다는 점을 짚는다.',
          task: '표를 보고 물 준 날 막대그래프를 완성하고, 그래프를 읽어 답을 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '표를 보고 물 준 날 막대그래프를 완성해요.', toolOptions: Object.assign({}, BAR, { title: '일주일 물 준 날(가상)', data: WATER }), target: { build: true }, difficulty: 0.15,
              levels: { easy: { toolOptions: { given: [0, 1] } } } },
            { prompt: '물을 가장 자주 준 화분은 어느 것인가요?', toolOptions: Object.assign({}, BAR, { mode: 'read', title: '일주일 물 준 날(가상)', data: WATER, question: '가장 자주 준 화분은?', choices: WATER.map((x) => x[0]) }), target: { pick: 0 }, difficulty: 0.15 },
            { prompt: '일주일 뒤 가장 잘 자란 화분은 어느 것인가요?', toolOptions: { type: 'bar', mode: 'read', title: '일주일 뒤 자란 키(가상)', unit: 'cm', xLabel: '화분', yLabel: '자란 키', max: 12, scale: 2, data: GROW, question: '가장 잘 자란 화분은?', choices: GROW.map((x) => x[0]) }, target: { pick: 0 }, difficulty: 0.2,
              levels: { challenge: { prompt: '두 그래프를 견주면 돌봄과 자람은 어떤 관계일까요?', toolOptions: { question: '돌봄과 자람의 관계는?', choices: ['알맞게 돌볼수록 잘 자라요', '돌봄과 상관없어요', '물만 많이 부으면 돼요'], explain: '물을 알맞게 꾸준히 준 화분이 가장 잘 자랐어요.' }, target: { pick: 0 } } },
              conclude: '생명은 알맞게, 꾸준히 돌볼 때 잘 자라요.' },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '화분을 잘 자라게 하는 돌봄은?', options: ['한 번에 물을 많이 붓기', '알맞게 꾸준히 물 주기'], answer: '알맞게 꾸준히 물 주기' }] },
        notes: '그래프 수는 수업용 가상 자료다. 실제 화분 기록을 쓸 때도 반 친구끼리 견주어 탓하지 않는다.',
      }),
      C({
        id: 'life.e34.life-cycle.activity.respect', type: 'activity', title: '생명을 대하는 행동 고르기',
        method: '생명을 대하는 말과 행동 판단', tool: 'emotion', minutes: 13,
        levels: { easy: '상황마다 보기 2개 가운데 고르고 결과를 본다.', base: '상황 4개에서 보기 3개 가운데 생명을 아끼는 행동을 고르고 결과를 본다.', challenge: '헷갈리는 보기가 하나 더 섞인 판에서 대신할 바른 행동을 고른다.' },
        activity: {
          title: '생명을 대하는 행동 고르기', tool: 'emotion',
          teacher: '"이렇게 하면 곤충(꽃, 고양이)은 어떻게 될까요?" 보기를 고를 때마다 결과를 소리 내어 읽고, 그 생명의 마음이 되어 한마디씩 말해 보게 한다. "작은 벌레는 괜찮아요"라는 학생에게 "작아도 하나뿐인 생명이에요. 관찰한 뒤에는 살던 곳으로 돌려보내요"라고 말해 준다. 생명을 아끼는 말과 행동은 사람에게도 똑같이 이어진다는 점을 짚는다.',
          task: '상황을 읽고 생명을 아끼는 행동을 골라 결과를 보아요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: false } },
          items: [
            BR('관찰한 곤충이 힘이 없어 보여요. 어떻게 할까요?', '관찰 상자 속 곤충이 힘이 없어 보여요.', '서진', [
              { id: 'free', text: '살던 풀숲에 놓아줘요', result: '곤충이 풀숲으로 기어갔어요.', mood: '뿌듯함' },
              { id: 'keep', text: '상자에 계속 가둬요', result: '곤충이 점점 움직이지 않았어요.', mood: '슬픔', why: '관찰한 뒤에는 살던 곳으로 돌려보내요.' },
              { id: 'shake', text: '상자를 흔들어 깨워요', result: '곤충이 더 힘들어했어요.', mood: '걱정', why: '흔들면 작은 생명이 다칠 수 있어요.' },
            ], 'free', { id: 'water', text: '물을 잔뜩 부어 줘요', result: '상자가 물에 잠겼어요.', mood: '걱정', why: '물을 부으면 곤충이 살기 어려워요.' }, 0.15),
            BR('꽃밭의 꽃을 갖고 싶어요. 어떻게 할까요?', '학교 꽃밭에 예쁜 꽃이 피었어요. 갖고 싶어요.', '다온', [
              { id: 'look', text: '눈으로 보고 그림을 그려요', result: '꽃이 그대로 피어 모두가 봤어요.', mood: '기쁨' },
              { id: 'pick', text: '몰래 꺾어 가요', result: '꽃이 금방 시들었어요.', mood: '슬픔', why: '꺾은 꽃은 다시 자라지 못해요.' },
              { id: 'step', text: '밟고 들어가 가까이 봐요', result: '옆의 싹이 밟혀 꺾였어요.', mood: '속상함', why: '꽃밭에 들어가면 다른 생명이 밟혀요.' },
            ], 'look', { id: 'leaf', text: '잎만 몇 장 뜯어 가요', result: '꽃이 힘을 잃었어요.', mood: '슬픔', why: '잎도 꽃이 사는 데 꼭 필요해요.' }, 0.2),
            BR('친구들이 길고양이를 놀려요. 어떻게 할까요?', '친구들이 길고양이를 쫓아다니며 놀려요.', '지우', [
              { id: 'stop', text: '"그만하자" 하고 어른께 알려요', result: '고양이가 안전한 곳으로 갔어요.', mood: '뿌듯함' },
              { id: 'join', text: '같이 쫓아가요', result: '고양이가 겁에 질려 도망쳤어요.', mood: '무서움', why: '쫓으면 고양이가 무섭고 다칠 수 있어요.' },
              { id: 'watch', text: '재미있게 구경해요', result: '고양이가 계속 괴롭힘을 받았어요.', mood: '슬픔', why: '구경만 하면 괴롭힘이 이어져요.' },
            ], 'stop', { id: 'feed', text: '과자를 던져 줘요', result: '고양이가 사람 음식을 먹고 탈이 났어요.', mood: '걱정', why: '사람 과자는 고양이에게 좋지 않아요.' }, 0.25),
            BR('물 당번인데 화분 잎이 시들었어요. 어떻게 할까요?', '내가 물 당번인데 교실 화분 잎이 시들었어요.', '서아', [
              { id: 'care', text: '알맞게 물을 주고 살펴요', result: '며칠 뒤 잎이 다시 섰어요.', mood: '뿌듯함' },
              { id: 'pass', text: '다음 당번에게 미뤄요', result: '화분이 더 시들었어요.', mood: '슬픔', why: '맡은 생명은 내가 돌봐요.' },
              { id: 'flood', text: '물을 아주 많이 부어요', result: '흙이 질척해져 뿌리가 상했어요.', mood: '걱정', why: '물은 알맞게 줘야 해요.' },
            ], 'care', { id: 'cut', text: '시든 화분을 버려요', result: '살릴 수 있던 화분이 없어졌어요.', mood: '슬픔', why: '시들어도 돌보면 살아날 수 있어요.' }, 0.3,
            { conclude: '작은 생명도 하나뿐이에요. 보고, 아끼고, 알맞게 돌봐요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '관찰한 곤충은 어떻게 할까요?', options: ['계속 가둬 둬요', '살던 곳에 놓아줘요'], answer: '살던 곳에 놓아줘요' }] },
      }),
      C({
        id: 'life.e34.life-cycle.activity.body-wonder', type: 'activity', title: '내 몸이 하는 놀라운 일',
        method: '내 몸이 하는 놀라운 일', tool: 'body', minutes: 14,
        levels: { easy: '기관 2개(뇌·심장)의 하는 일을 잇고, 찾기 문항에서 이름이 보인다.', base: '기관 3개(뇌·폐·심장)의 하는 일을 잇고, 하는 일을 듣고 기관을 찾는다.', challenge: '기관을 찾은 뒤 그 기관을 아끼는 습관 보기를 고른다.' },
        activity: {
          title: '내 몸이 하는 놀라운 일', tool: 'body',
          teacher: '"우리가 잠을 잘 때도 쉬지 않고 일하는 곳이 있어요. 어디일까요?" 가슴에 손을 얹어 콩닥콩닥 뛰는 것을 느끼게 한 뒤 하는 일을 잇는다. "몸은 내가 시켜야만 움직여요"라는 학생에게 "숨 쉬라고 매번 시키나요? 심장과 폐는 쉬지 않고 나를 지켜요"라고 말해 준다. 내 몸이 쉬지 않고 나를 지키니 나도 내 몸을 아낀다는 점을 짚는다.',
          task: '심장·폐·뇌가 하는 일을 잇고, 하는 일을 듣고 몸에서 찾아요.', levels: { easy: { names: true }, base: {}, challenge: {} },
          items: [
            { prompt: '기관과 하는 일을 이어요.', toolOptions: { mode: 'match', matchBy: 'job', organs: ['뇌', '폐', '심장'], jobs: { 뇌: '생각하고 몸을 움직여요', 폐: '숨을 쉬게 해요', 심장: '피를 온몸에 보내요' } }, target: { match: 'auto' }, difficulty: 0.15,
              levels: { easy: { prompt: '뇌와 심장이 하는 일을 이어요.', toolOptions: { organs: ['뇌', '심장'] } } } },
            { prompt: '잠잘 때도 쉬지 않고 피를 보내는 곳을 찾아요.', toolOptions: { mode: 'find', organs: ['뇌', '폐', '심장', '위'] }, target: { sel: '심장' }, difficulty: 0.15,
              levels: { challenge: { prompt: '심장을 찾고, 심장을 아끼는 습관도 골라요.', toolOptions: { ask: { q: '심장을 아끼는 습관은?', choices: ['꾸준히 뛰어놀기', '온종일 앉아만 있기'] } }, target: { sel: '심장', pick: 0 } } } },
            { prompt: '숨을 쉬어 몸에 공기를 넣는 곳을 찾아요.', toolOptions: { mode: 'find', organs: ['뇌', '폐', '심장', '위'] }, target: { sel: '폐' }, difficulty: 0.2,
              levels: { challenge: { prompt: '폐를 찾고, 폐를 아끼는 습관도 골라요.', toolOptions: { ask: { q: '폐를 아끼는 습관은?', choices: ['담배 연기 피하기', '먼지 속에서 놀기'] } }, target: { sel: '폐', pick: 0 } } },
              conclude: '내 몸은 쉬지 않고 나를 지켜요. 그래서 나도 내 몸을 아끼고 돌봐요.' },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '심장·폐·뇌는 쉬지 않고 나를 ___.', answer: '지켜요' }] },
        notes: '"쉬지 않고 나를 지켜요" 문장은 활동지 빈칸으로 완성한다. 몸의 기능은 과학 교과 수준의 일반 지식이다(사람 확인 목록).',
      }),
      C({
        id: 'life.e34.life-cycle.wrap.thank-letter', type: 'wrap', title: '생명에게 고마운 한 줄',
        method: '생명에게 고마운 한 줄', tool: 'story', minutes: 6,
        levels: { easy: '앞 칸이 채워져 있어 "왜냐하면" 빈칸 하나만 채운다.', base: '"___야, 고마워. 왜냐하면 ___" 빈칸 둘을 채운다.', challenge: '내 몸에게 쓰는 한 줄 빈칸까지 셋을 채운다.' },
        wrap: {
          teacher: '"우리 반 화분에게, 내 몸에게 고맙다고 말해 볼까요?" 빈칸을 채운 뒤 한 줄을 소리 내어 읽는다. 출구 2번에서 "되돌릴 수 있어요"를 고른 학생에게 "꺾인 꽃이 다시 붙을 수 있을까요? 생명은 한 번 잃으면 되돌릴 수 없어서 하나뿐이고 소중해요"라고 담담하게 말해 준다. 활동지에 나만의 고마운 한 줄을 쓰게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'story', prompt: '고마운 한 줄의 빈칸을 채워요.', options: { mode: 'fill', slots: [{ id: 'who', who: '나', label: '"___, 고마워."' }, { id: 'why', who: '나', label: '"왜냐하면 ___."' }], cards: ['숙제가 많아서', '작은 화분아', '늘 초록 잎을 보여 줘서', '시끄러운 소리'] },
              target: { fill: { who: '작은 화분아', why: '늘 초록 잎을 보여 줘서' } }, difficulty: 0.15,
              levels: {
                easy: { state: { at: { '작은 화분아': 0 } } },
                challenge: { prompt: '내 몸에게 쓰는 한 줄까지 채워요.', toolOptions: { slots: [{ id: 'who', who: '나', label: '"___, 고마워."' }, { id: 'why', who: '나', label: '"왜냐하면 ___."' }, { id: 'body', who: '나', label: '"내 몸아, ___."' }], cards: ['숙제가 많아서', '작은 화분아', '쉬지 않고 지켜 줘서 고마워', '늘 초록 잎을 보여 줘서', '시끄러운 소리'] }, target: { fill: { who: '작은 화분아', why: '늘 초록 잎을 보여 줘서', body: '쉬지 않고 지켜 줘서 고마워' } } },
              } },
            { type: 'choice', prompt: '생명은 다시 되돌릴 수 있을까요?', options: ['되돌릴 수 있어요', '하나뿐이라 되돌릴 수 없어요'], answer: 1, difficulty: 0.1, explain: '생명은 하나뿐이라 소중히 아끼고 돌봐요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '생명에게 고마운 한 줄',
          items: [
            { type: 'blank', prompt: '고마운 한 줄을 완성해요.', text: '___야, 고마워. 왜냐하면 ___', answer: '예: 화분아, 고마워. 왜냐하면 늘 초록 잎을 보여 줘서' },
            { type: 'short', prompt: '내 몸에게 고마운 한 줄을 써요.' },
          ],
        },
      }),
      C({
        id: 'life.e34.life-cycle.wrap.song', type: 'wrap', title: '"하나뿐인 생명" 가락',
        method: '생명 노래 지어 부르기', tool: 'keyboard', minutes: 6,
        levels: { easy: '"하나뿐인 생명" 가락 여섯 음을 듣는 동안 건반이 비친다.', base: '가락을 따라 친 뒤 끝 "생명" 두 음을 도로 끝나게 바꿔 짓는다.', challenge: '바꾼 가락에 가사 한 줄을 붙여 활동지에 쓴다.' },
        wrap: {
          teacher: '"하-나-뿐-인 생-명" 가락을 먼저 불러 준 뒤 \'가락 듣기\'로 듣고 따라 치게 한다. 끝 두 음을 바꿀 때는 "도로 끝나면 노래가 편안하게 끝나요"라고 알려 준다. 음을 몇 번 쳤는지 헷갈리는 학생에게 "노래 글자 하나에 건반 한 번이에요"라고 말해 준다. 끝에 반 전체가 "하나뿐인 생명, 소중한 우리"를 함께 부르며 마친다.',
          exitTicket: [
            { type: 'tool', tool: 'keyboard', prompt: '"하나뿐인 생명" 가락을 듣고 따라 쳐요.', options: { from: '도', to: '높은도', melody: ['미', '솔', '라', '솔', '미', '도'] }, target: { notes: ['미', '솔', '라', '솔', '미', '도'] }, difficulty: 0.15,
              levels: { easy: { toolOptions: { showWhileListening: true } } } },
            { type: 'tool', tool: 'keyboard', prompt: '"생명" 두 음을 내 마음대로 바꿔 지어요(끝은 도).', options: { from: '도', to: '높은도' }, target: { compose: { length: 2, endOn: '도' } }, difficulty: 0.15 },
            MOOD,
          ],
        },
        worksheet: {
          title: '하나뿐인 생명 노래',
          items: [
            { type: 'blank', prompt: '노랫말을 따라 써요.', text: '하나뿐인 ___', answer: '생명' },
            { type: 'short', prompt: '내가 지은 가락에 붙일 가사 한 줄을 써요.' },
          ],
        },
        notes: '가락은 수업용으로 지은 짧은 노래다. 소리는 건반이나 \'가락 듣기\'를 누를 때만 난다.',
      }),
    );
  }

  // ======================================================================================================
  // 4학년 · 어려움을 견디는 나의 힘 (§2 초: 생명의 소중함·도움 요청 — 회복탄력성은 일반 지식, 사람 확인)
  // ======================================================================================================
  {
    const C = T('strength', 4);
    const ROPE = [['1일', 5], ['2일', 8], ['3일', 12], ['4일', 9], ['5일', 15], ['6일', 20]];
    const RPIC = { type: 'picture', title: '지우의 줄넘기 연습(가상)', unit: '번', icon: 'star', icons: [{ value: 10, name: '10번' }, { value: 1, name: '1번' }], xLabel: '날', yLabel: '넘은 횟수' };
    M.push(
      C({
        id: 'life.e34.strength.intro.story', type: 'intro', title: '넘어져도 다시 일어난 지우',
        method: '넘어져도 일어난 인물', tool: 'story', minutes: 6,
        levels: { easy: '장면 2장(넘어짐·다시 타 봄)이 놓이는 시연을 본다.', base: '장면 4장이 차례로 놓이는 시연을 보고 지우가 쓴 힘을 말한다.', challenge: '지우가 쓴 힘(다시 해 보기·도움 받기)을 둘 다 찾아 말한다.' },
        intro: {
          teacher: '"지우는 자전거를 배우다 여러 번 넘어졌어요. 그다음 어떻게 되었을까요?" 시연 단추로 넘어짐 → 다시 타 봄 → 친구가 뒤를 잡아 줌 → 혼자 달림 장면이 놓이는 모습을 보인다. "지우는 원래 잘하는 아이예요"라는 말이 나오면 "처음에는 넘어졌죠? 무엇이 지우를 달리게 했을까요?"라고 되묻는다. 다시 해 보는 힘과 도움을 받는 힘이 모두 지우의 힘이었다고 밝힌다.',
          student: '지우의 이야기를 차례대로 보고, 지우가 어떤 힘으로 다시 일어났는지 짝에게 말해요.',
          demo: { tool: 'story', options: { mode: 'order', slots: ['처음', '다음', '그다음', '끝'], cards: [{ id: 'fall', text: '자전거에서 넘어짐' }, { id: 'again', text: '다시 타 봄' }, { id: 'help', text: '친구가 뒤를 잡아 줌' }, { id: 'ride', text: '혼자 달림' }], shuffle: false },
            sequence: [{ order: ['fall', 'again'] }, { order: ['fall', 'again', 'help', 'ride'] }] },
          art: { draw: 'four paper panels: a paper child falling off a bicycle, getting back on, a friend holding the back of the seat, then riding alone with a big smile', banner: '넘어져도 다시', extra: [{ motif: 'sun', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      C({
        id: 'life.e34.strength.intro.power-pose', type: 'intro', title: '힘 나는 자세 따라 하기',
        method: '힘 나는 자세 따라 하기', tool: 'timer', minutes: 6,
        levels: { easy: '한 자세(어깨 펴기)를 15초 한다.', base: '시연대로 세 자세를 15초씩 차례로 한다.', challenge: '세 자세를 한 뒤 나만의 힘 나는 자세를 만들어 보인다.' },
        intro: {
          teacher: '"어깨를 쭉 펴고, 주먹을 꼭 쥐었다 펴고, 크게 숨을 쉬어 볼까요?" 시연 단추로 자세 카드가 차례로 놓이고 타이머가 15초씩 세 번에 맞춰지는 것을 보인 뒤 함께 한다. 장난스럽게 하는 학생에게 "몸을 펴면 마음도 조금 펴질 수 있어요. 진지하게 한 번 해 볼까요?"라고 말해 준다. 힘든 일 앞에서 몸을 펴고 숨을 고르는 것도 나를 돕는 방법이라고 밝힌다.',
          student: '어깨 펴기, 주먹 쥐었다 펴기, 크게 숨쉬기를 15초씩 따라 해요.',
          demo: { tool: 'timer', options: { title: '힘 나는 자세(우리 반 약속)', labels: ['자세', '쉬기'], plan: { work: 15, rest: 5, rounds: 1 }, cards: ['크게 숨쉬기', '어깨 펴기', '주먹 쥐었다 펴기'] },
            sequence: [{ order: ['어깨 펴기', '주먹 쥐었다 펴기', '크게 숨쉬기'] }, { order: ['어깨 펴기', '주먹 쥐었다 펴기', '크게 숨쉬기'], plan: { work: 15, rest: 5, rounds: 3 } }] },
          art: { draw: 'paper children standing tall with shoulders back and arms open wide, a small paper sun rising behind them', banner: '힘 나는 자세', extra: [{ motif: 'star', x: 300, y: 96, color: 'peach' }] },
        },
        notes: '타이머 초는 우리 반 약속 값이다. 자세는 제자리에서만 한다.',
      }),
      C({
        id: 'life.e34.strength.activity.strength-web', type: 'activity', title: '나의 힘 그물',
        method: '강점 그물', tool: 'mindmap', minutes: 13,
        levels: { easy: '가지 2개(끈기·친절)에 카드 4장을 나누고, 놓으면 바로 맞는지 알려 준다.', base: '가지 4개(끈기·친절·유머·도움 청하기)에 카드 8장을 나눈다.', challenge: '어디에도 맞지 않는 카드 2장이 섞인 판에서 나누고, 내 강점 하나를 짝에게 말한다.' },
        activity: {
          title: '나의 힘 그물', tool: 'mindmap',
          teacher: '"이 행동은 어떤 힘일까요?" 카드를 놓을 때마다 그 힘을 가진 사람을 떠올려 말하게 한다. "도움을 청하는 건 힘이 아니에요"라는 학생에게 "지우가 친구 도움으로 자전거를 탔죠? 도움을 청하는 것도 어려움을 이기는 큰 힘이에요"라고 말해 준다. 다 나눈 뒤 내 강점 가지 하나를 골라 짝에게 말하게 한다.',
          task: '행동 카드를 끈기·친절·유머·도움 청하기 가지에 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            WEB('학교에서 쓰는 힘을 가지에 나누어요.', { topic: '나의 힘' }, ['끈기', '친절', '유머', '도움 청하기'], [['틀린 문제 다시 풀기', '줄넘기 매일 연습'], ['친구 짐 들어 주기', '먼저 인사하기'], ['재미있는 말로 웃기기', '실수해도 웃어넘기기'], ['모를 때 손 들기', '"도와줄래?" 말하기']], 2, ['친구 놀리기', '바로 포기하기'], 0.15),
            WEB('집과 놀이에서 쓰는 힘을 나누어요.', { topic: '나의 힘' }, ['끈기', '친절', '유머', '도움 청하기'], [['퍼즐 끝까지 맞추기', '악기 날마다 연습'], ['동생 도와주기', '"고마워" 말하기'], ['가족 웃게 하기', '놀이에 져도 웃기'], ['보호자께 묻기', '어려우면 같이 하자 하기']], 2, ['혼자 꾹 참기', '남 탓하기'], 0.2),
            WEB('힘든 일이 생겼을 때 쓰는 힘을 나누어요.', { topic: '나의 힘' }, ['끈기', '친절', '유머', '도움 청하기'], [['다시 해 보기', '조금씩 나눠 하기'], ['힘든 친구 곁에 있기', '나에게 다정한 말'], ['웃을 일 찾아보기', '실수를 농담으로'], ['선생님께 말하기', '상담 선생님 찾기']], 2, ['아무에게도 안 말하기', '물건 던지기'], 0.25,
              { conclude: '끈기·친절·유머, 그리고 도움 청하기도 어려움을 견디는 나의 힘이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내가 가진 힘 하나와 그 힘을 쓴 때를 써요.' }] },
      }),
      C({
        id: 'life.e34.strength.activity.think-change', type: 'activity', title: '생각 바꾸기 판단',
        method: '생각 바꾸기 판단', tool: 'emotion', minutes: 14,
        levels: { easy: '생각 2줄을 바꾼 생각과 잇고, 갈림 상황에서는 보기 2개 가운데 고른다.', base: '생각 4줄을 바꾼 생각과 잇고, 갈림 상황 3개에서 보기 3개 가운데 고른다.', challenge: '남는 함정 카드와 헷갈리는 보기가 하나씩 더 섞인 판에서 바꾼 생각을 직접 고른다.' },
        activity: {
          title: '생각 바꾸기 판단', tool: 'emotion',
          teacher: '"\'나는 못해\'라고 생각하면 마음과 행동이 어떻게 될까요? \'연습하면 할 수 있어\'라고 바꾸면요?" 생각을 이을 때마다 바꾼 생각을 소리 내어 읽게 한다. "생각만 바꾼다고 달라져요?"라는 학생에게 "생각이 바뀌면 다시 해 볼 마음이 생겨요. 결과 장면을 볼까요?"라고 묻는다. 생각을 바꿔도 계속 힘들면 도움을 청하는 것도 좋은 생각이라는 점을 짚는다.',
          task: '힘 빠지는 생각을 힘 나는 생각으로 바꾸고, 상황에서 바꾼 생각을 골라 결과를 보아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            MATCH('힘 빠지는 생각에 바꾼 생각을 이어요.', {}, [['"나는 못해"', '"연습하면 할 수 있어"'], ['"또 틀렸어, 끝이야"', '"틀리면서 배워"'], ['"나만 어려워"', '"도움을 청해 볼까"'], ['"처음부터 잘해야 해"', '"처음엔 다 서툴러"']], '"그냥 포기하자"', 0.15),
            BR('받아쓰기에서 또 틀렸어요. 생각을 어떻게 바꿀까요?', '받아쓰기에서 또 틀렸어요. 다온이는 어떤 생각을 할까요?', '다온', [
              { id: 'try', text: '"다음엔 연습해서 해 볼래"', result: '다시 연습해 한 개 더 맞혔어요.', mood: '뿌듯함' },
              { id: 'quit', text: '"나는 원래 못해"', result: '연습을 그만두었어요.', mood: '슬픔', why: '"원래 못해"는 다시 해 볼 마음을 막아요.' },
              { id: 'blame', text: '"문제가 이상해"', result: '틀린 까닭을 찾지 못했어요.', mood: '짜증', why: '남 탓을 하면 배울 기회를 놓쳐요.' },
            ], 'try', { id: 'hide', text: '"아무도 못 보게 숨길래"', result: '도움을 받을 기회를 놓쳤어요.', mood: '걱정', why: '숨기기보다 다시 해 보거나 도움을 청해요.' }, 0.2),
            BR('줄넘기가 자꾸 걸려요. 생각을 어떻게 바꿀까요?', '줄넘기가 자꾸 발에 걸려요. 지우는 어떤 생각을 할까요?', '지우', [
              { id: 'ask', text: '"친구에게 방법을 물어볼래"', result: '친구가 손목 돌리는 법을 알려 줬어요.', mood: '고마움' },
              { id: 'never', text: '"다시는 안 할래"', result: '줄넘기를 구석에 두었어요.', mood: '속상함', why: '한 번 더 해 보거나 도움을 청할 수 있어요.' },
              { id: 'angry', text: '"줄을 던져 버릴래"', result: '줄이 엉키고 마음이 더 상했어요.', mood: '화남', why: '던지면 나도 물건도 상해요.' },
            ], 'ask', { id: 'alone', text: '"혼자 몰래 해야 해"', result: '혼자 하다 같은 데서 계속 걸렸어요.', mood: '걱정', why: '도움을 받으면 더 빨리 늘어요.' }, 0.25),
            BR('발표하다 말이 막혔어요. 생각을 어떻게 바꿀까요?', '발표하다 말이 막혔어요. 서아는 어떤 생각을 할까요?', '서아', [
              { id: 'breath', text: '"숨 쉬고 다시 해 보자"', result: '숨을 고르고 끝까지 발표했어요.', mood: '뿌듯함' },
              { id: 'stop', text: '"다시는 발표 안 해"', result: '다음 발표가 더 무서워졌어요.', mood: '무서움', why: '막혀도 숨 쉬고 다시 할 수 있어요.' },
              { id: 'laugh', text: '"다들 날 비웃을 거야"', result: '고개를 숙이고 들어왔어요.', mood: '슬픔', why: '친구들은 기다려 줄 수 있어요.' },
            ], 'breath', { id: 'run', text: '"그냥 자리로 돌아갈래"', result: '하고 싶던 말을 하지 못했어요.', mood: '속상함', why: '잠깐 멈추고 다시 이어 갈 수 있어요.' }, 0.3,
            { conclude: '"못해"를 "연습하면 할 수 있어", "도움을 청해 볼까"로 바꾸면 다시 도전할 힘이 생겨요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '생각을 바꿔 써요.', text: '"나는 못해" → "___하면 할 수 있어"', answer: '연습' }] },
      }),
      C({
        id: 'life.e34.strength.activity.graph', type: 'activity', title: '연습하면 늘어요 그래프',
        method: '연습하면 늘어요 그래프', tool: 'chart', minutes: 13,
        levels: { easy: '3일 자료로 그림그래프를 채우고 가장 많은 날을 읽는다.', base: '6일 자료로 그림그래프를 채우고, 가장 많은 날과 늘어난 횟수를 읽는다.', challenge: '4일에 줄어든 뒤 다시 늘린 방법을 짐작하는 보기를 고른다.' },
        activity: {
          title: '연습하면 늘어요 그래프(가상)', tool: 'chart',
          teacher: '"지우가 날마다 줄넘기를 연습하고 넘은 횟수를 적었어요. 큰 별은 10번, 작은 별은 1번이에요." 표를 보고 그래프를 채운 뒤 늘어난 모습을 손가락으로 따라가 보게 한다. "4일에 줄었으니 실패예요"라는 학생에게 "그다음 날은 어떻게 되었나요? 줄어든 날이 있어도 다시 늘 수 있어요"라고 묻는다. 꾸준히 해 보는 힘과 도움을 받는 힘이 함께 늘게 한다는 점을 짚는다.',
          task: '줄넘기 연습 표를 보고 그림그래프를 채우고, 그래프를 읽어 답을 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '표를 보고 줄넘기 그림그래프를 채워요.', toolOptions: Object.assign({}, RPIC, { data: ROPE }), target: { build: true }, difficulty: 0.15,
              levels: { easy: { prompt: '표를 보고 3일 줄넘기 그림그래프를 채워요.', toolOptions: { data: ROPE.slice(0, 3) } } } },
            { prompt: '가장 많이 넘은 날은 언제인가요?', toolOptions: Object.assign({}, RPIC, { mode: 'read', data: ROPE, question: '가장 많이 넘은 날은?', choices: ROPE.map((x) => x[0]) }), target: { pick: 5 }, difficulty: 0.15,
              levels: { easy: { prompt: '3일 가운데 가장 많이 넘은 날은?', toolOptions: { data: ROPE.slice(0, 3), choices: ['1일', '2일', '3일'] }, target: { pick: 2 } } } },
            { prompt: '1일보다 6일에 몇 번 더 넘었나요?', toolOptions: Object.assign({}, RPIC, { mode: 'read', data: ROPE, question: '6일은 1일보다 몇 번 더?', choices: ['10번', '15번', '20번'] }), target: { pick: 1 }, difficulty: 0.2,
              levels: {
                easy: { prompt: '1일보다 3일에 몇 번 더 넘었나요?', toolOptions: { data: ROPE.slice(0, 3), question: '3일은 1일보다 몇 번 더?', choices: ['5번', '7번', '12번'] }, target: { pick: 1 } },
                challenge: { prompt: '4일에 줄었다가 다시 늘었어요. 다시 늘린 방법 짐작은?', toolOptions: { question: '다시 늘린 방법은?', choices: ['포기하지 않고 연습했어요', '연습을 그만두었어요', '줄을 버렸어요'], explain: '줄어든 날이 있어도 다시 해 보면 늘 수 있어요.' }, target: { pick: 0 } },
              },
              conclude: '줄어든 날이 있어도 다시 해 보면 늘어요. 연습하는 힘이 나를 자라게 해요.' },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '연습한 날이 쌓이면 줄넘기 횟수는?', options: ['늘어날 수 있어요', '늘 똑같아요'], answer: '늘어날 수 있어요' }] },
        notes: '그래프 수는 수업용 가상 자료다. 우리 반 학생의 기록을 서로 견주지 않는다.',
      }),
      C({
        id: 'life.e34.strength.activity.shield', type: 'activity', title: '나의 힘 방패 만들기',
        method: '나의 힘 방패 만들기', tool: 'collage', minutes: 14,
        levels: { easy: '방패 두 칸(강점 별·도와주는 사람 하트)을 붙인다.', base: '방패 네 칸(별·하트·동그라미·네모)을 하나씩 채우고 짝에게 말한다.', challenge: '네 칸을 채우고 친구 방패에 칭찬 한마디를 해 준 것까지 표시한다.' },
        activity: {
          title: '나의 힘 방패 만들기', tool: 'collage',
          teacher: '"별은 내 강점, 하트는 나를 도와주는 사람, 동그라미는 내가 좋아하는 것, 네모는 힘 나는 말이에요. 나만의 힘 방패를 만들어 볼까요?" 칠판에 방패 네 칸의 뜻을 그려 두고 조각을 붙이게 한다. "나는 강점이 없어요"라는 학생에게 "오늘 친구에게 \'고마워\'라고 했죠? 그것도 친절이라는 힘이에요"라고 구체적으로 찾아 준다. 방패의 네 칸이 모두 어려움을 견디는 힘이라는 점을 짚는다.',
          task: '방패 네 칸에 나의 힘 조각을 붙이고, 칸마다 무엇인지 짝에게 말해요.', levels: { easy: { guide: 'vertical' }, base: { guide: 'vertical' }, challenge: { guide: 'vertical' } },
          items: [
            { prompt: '강점 별과 도와주는 사람 하트를 붙여요.', toolOptions: {}, target: { has: [{ shape: 'star', min: 1 }, { shape: 'heart', min: 1 }] }, difficulty: 0.1 },
            { prompt: '방패 네 칸(별·하트·동그라미·네모)을 채워요.', toolOptions: {}, target: { has: [{ shape: 'star', min: 1 }, { shape: 'heart', min: 1 }, { shape: 'circle', min: 1 }, { shape: 'square', min: 1 }] }, difficulty: 0.15,
              levels: { easy: { prompt: '방패 조각을 2개 붙여요.', target: { pieces: { min: 2 } } } } },
            { prompt: '방패를 만들고 스스로 표시해요.', toolOptions: {}, target: { selfCheck: ['방패 칸을 채웠어요', '짝에게 내 힘을 말했어요'], minPieces: 4 }, difficulty: 0.15,
              levels: { easy: { prompt: '방패 두 칸을 만들고 표시해요.', target: { selfCheck: ['방패 칸을 채웠어요', '짝에게 내 힘을 말했어요'], minPieces: 2 } }, challenge: { prompt: '친구 방패도 칭찬하고 표시해요.', target: { selfCheck: ['방패 칸을 채웠어요', '짝에게 내 힘을 말했어요', '친구 방패를 칭찬했어요'], minPieces: 4 } } },
              conclude: '나의 강점, 도와주는 사람, 좋아하는 것, 힘 나는 말이 나를 지키는 방패예요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '나의 힘 방패 네 칸을 채워요.', columns: ['칸', '나의 것'], cells: [['내 강점', ''], ['도와주는 사람', ''], ['좋아하는 것', ''], ['힘 나는 말', '']], answer: '예: 끈기, 담임 선생님, 그림 그리기, "다시 해 보자"' }] },
        notes: '콜라주 판은 글을 붙이지 못해 조각 모양으로 칸을 정한다(별 = 강점, 하트 = 도와주는 사람, 동그라미 = 좋아하는 것, 네모 = 힘 나는 말). 칸 이름은 활동지에 쓴다. 친구 방패 칭찬은 교사가 말로 진행한다.',
      }),
      C({
        id: 'life.e34.strength.wrap.cheer', type: 'wrap', title: '서로 응원 구호 리듬',
        method: '서로 응원 구호', tool: 'keyboard', minutes: 6,
        levels: { easy: '마디마다 박 수가 보이는 리듬 띠에 구호 리듬을 놓는다.', base: '구호 리듬 블록을 놓은 뒤 반 전체가 두 번 외친다.', challenge: '모둠별로 박자를 바꿔 돌림으로 외친다.' },
        wrap: {
          teacher: '"넘어져도(빠른 손뼉 넷) 괜찮아(빠른 둘, 한 번), 같이(둘) 일어나(빠른 둘, 한 번)!" 리듬을 손뼉으로 보인 뒤 블록을 놓고 반 전체가 외친다. 블록 수를 헷갈리는 학생에게 "글자 하나에 손뼉 하나예요. 빠른 글자는 짧은 블록이에요"라고 말해 준다. 출구 2번에서 도움을 받는 것도 힘이라는 것을 다시 짚고, 친구가 넘어지면 이 구호로 응원하자고 한다.',
          exitTicket: [
            { type: 'tool', tool: 'keyboard', prompt: '"넘어져도 괜찮아, 같이 일어나" 리듬을 놓아요.', options: { mode: 'rhythm', meter: 4, measures: 2, blocks: ['q', 'e', 'h', 'qr'] }, target: { rhythm: ['e', 'e', 'e', 'e', 'e', 'e', 'q', 'q', 'q', 'e', 'e', 'q'] }, difficulty: 0.2,
              levels: { easy: { toolOptions: { showBeats: true } } } },
            { type: 'choice', prompt: '힘든 일을 이겨 내는 진짜 강한 사람은?', options: ['혼자서만 이겨 내는 사람', '필요할 때 도움도 받는 사람'], answer: 1, difficulty: 0.1, explain: '도움을 청하고 받는 것도 어려움을 이기는 큰 힘이에요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '서로 응원해요',
          items: [
            { type: 'blank', prompt: '응원 구호를 따라 써요.', text: '넘어져도 괜찮아, 같이 ___', answer: '일어나' },
            { type: 'short', prompt: '힘든 친구에게 해 줄 응원 한마디를 써요.' },
          ],
        },
      }),
      C({
        id: 'life.e34.strength.wrap.help-is-power', type: 'wrap', title: '도움 받기도 힘이에요',
        method: '도움 받기도 힘', tool: 'sortboard', minutes: 6,
        levels: { easy: '카드 4장을 나누고, 놓으면 바로 맞는지 알려 준다.', base: '카드 6장을 스스로 할 일과 어른께 부탁할 일로 나눈다.', challenge: '나눈 뒤 어른께 부탁할 때 할 말을 고른다.' },
        wrap: {
          teacher: '"이 일은 스스로 할 수 있을까요, 어른께 부탁할까요?" 카드를 하나씩 읽고 넣기 전에 반 전체가 손으로 ○(스스로)·□(어른께)를 낸다. "다 혼자 해야 진짜 강해요"라는 학생에게 "지우도 친구 도움으로 자전거를 탔어요. 알맞을 때 도움을 청하는 게 강한 거예요"라고 말해 준다. 오래 이어지는 힘든 마음은 꼭 어른께 부탁할 일이라는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'sortboard', prompt: '힘든 일 카드를 스스로 할 일과 어른께 부탁할 일로 나누어요.',
              options: { slots: ['스스로 할 일', '어른께 부탁할 일'], cards: ['준비물 챙기기', '며칠째 잠이 안 옴', '숙제 시작하기', '친구가 계속 놀림', '신발 정리하기', '마음이 오래 무거움'] },
              target: { sort: { '스스로 할 일': ['준비물 챙기기', '숙제 시작하기', '신발 정리하기'], '어른께 부탁할 일': ['며칠째 잠이 안 옴', '친구가 계속 놀림', '마음이 오래 무거움'] } }, difficulty: 0.15,
              levels: { easy: { prompt: '힘든 일 카드를 나누어요(4장).', toolOptions: { cards: ['준비물 챙기기', '며칠째 잠이 안 옴', '숙제 시작하기', '친구가 계속 놀림'], instant: true }, target: { sort: { '스스로 할 일': ['준비물 챙기기', '숙제 시작하기'], '어른께 부탁할 일': ['며칠째 잠이 안 옴', '친구가 계속 놀림'] } } } } },
            { type: 'choice', prompt: '어른께 부탁할 때 하면 좋은 말은?', options: ['"도와주실 수 있나요?"', '"됐어요, 혼자 할게요"', '"아무 일 없어요"'], answer: 0, difficulty: 0.1, explain: '"도와주실 수 있나요?" 한마디로 도움이 시작돼요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '도움 받기도 힘',
          items: [
            { type: 'table', prompt: '스스로 할 일이면 "스", 어른께 부탁할 일이면 "어"를 써요.', columns: ['일', '스 / 어'], cells: [['준비물 챙기기', ''], ['마음이 오래 무거움', ''], ['숙제 시작하기', '']], answer: '스, 어, 스' },
            { type: 'short', prompt: '어른께 부탁할 때 할 첫마디를 써요.' },
          ],
        },
        notes: note('카드의 힘든 일은 가상 예시다. 학생에게 지금 어른께 부탁할 일이 있는지 묻지 않는다.'),
      }),
    );
  }

  PaperLessons.registerModules(M);
})();
