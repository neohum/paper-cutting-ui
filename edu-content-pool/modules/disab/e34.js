/* 법정교육 장애인식개선 — 초3-4 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/mandatory.json 의 disab 초3-4.
 * 근거: 장애인복지법 제25조·시행령 제16조(법정 매년 1회 1시간 이상, 범교과 기준 연 2시간) — research-mandatory §1,
 *   초등 주제(장애 이해와 배려, 차별 말·행동 점검) — research-mandatory §2.
 * 초3-4 기준: 상황 판단(그림+짧은 글), 차례 정하기, 고른 이유 말하기, 짝 토의, 간단한 표·그림그래프. 법 조문·통계 해석·긴 글쓰기는 쓰지 않는다.
 * 이 영역의 틀(모든 모듈):
 *   - 장애를 불쌍함·특별함·볼거리로 그리지 않는다. 장면 속 친구(가명)는 좋아하는 것·잘하는 것이 있는 '같은 친구'이고, 불편은 사람이 아니라
 *     규칙·계단·문 같은 환경에서 생긴다고 짚는다. '불쌍해서 도와준다'는 말은 바로잡는 함정 카드로만 쓴다.
 *   - 사람 먼저 쓰는 말('휠체어를 타는 하준', '앞이 잘 보이지 않는 은우')을 쓴다. 비하 표현은 화면·활동지 어디에도 쓰지 않는다.
 *   - 도움은 '먼저 묻고, 친구가 원하는 방법으로, 거절도 존중'이 기본이다.
 *   - 학생 자신이나 가족의 장애 여부를 묻지 않는다. 장면 속 친구 이야기로만 말하고, 우리 반 실제 친구를 예로 짚지 않는다.
 *   - 눈가리개·휠체어 '장애 체험'은 하지 않는다(두려움·동정을 키울 수 있어서). 안내 걷기 연습은 눈을 뜬 채 역할만 정해 한다.
 * 주제 3개(3학년 2 · 4학년 1) — 계획 모듈 25개(play-rules 2·4·2, facilities 2·4·2, ask-first 3·4·2).
 * 체계도 계획대로 못 한 것(교구 한계) — levels 글은 실제 설정대로 적었다:
 *   - map(court-map·class-map·school-walk): 문항마다 핀 하나라 '자리 2곳/4곳·길 하나/둘'은 문항 수(4개)로 같게 두고, 쉬움 = 핀 자리 이름이 보임,
 *     도전 = '왜 여기'·'어떻게 바꿀까' 보기 고르기로 단계를 나눴다. '길을 잇는다'는 교구가 선을 그리지 못해 길이 지나는 칸에 핀을 꽂는 것으로 바꿨다.
 *   - fac-sort: 카드 한 장의 정답 칸은 하나라 '두 칸 모두에 들어가는 시설'은 셋째 문항('두 가지 다 도와요/한 가지만')으로 따로 뺐다.
 *   - collage(rule-poster·limit-scene·ramp-build): 칸 판이 없어 '규칙 n개·조각 n개'는 붙일 조각 수와 점검 항목으로 했다.
 *   - 정리(출구) 질문은 단계별 판이 없어 ask-check '한 문항/두 문항'·fac-promise '한 번/두 번'은 교사 진행과 출구 교구 문항의 단계별 target 으로 나눴다.
 *   - rule-change: 바른 길의 첫 선택을 '먼저 묻기'로 두었다(계획의 도전 '먼저 물어보는 길'을 기본에 넣음). 도전은 해 본 뒤 다시 고치는 셋째 장면이다.
 * 사람 확인: 근거 파일에는 교육 주제 이름뿐이라 아래 사실·수칙은 일반 지식으로 썼다. 확인처는 괄호 안
 *   (보건복지부·한국장애인개발원 장애인식개선교육 자료, 국립특수교육원 장애이해교육 자료, 한국시각장애인연합회·한국농아인협회 안내).
 *   - play-rules.*: 소리 나는 공(방울 공)으로 공 피하기, 깃발 출발 신호, 평평한 마당으로 술래 집 옮기기 같은 규칙 바꾸기 예 (국립특수교육원 통합교육 놀이 자료)
 *   - facilities.*: 경사로·엘리베이터·점자 블록·자막·음성 안내·소리 나는 신호등의 쓰임, '점자 블록은 발바닥·지팡이로 느껴 길과 멈출 곳을 알게 한다',
 *     '점자 블록 위에 물건을 두지 않기', 장애인 주차 구역 비워 두기 (한국장애인개발원 편의시설 안내)
 *   - ask-first.*: '먼저 묻고 원하는 방법으로', '휠체어는 묻지 않고 밀지 않는다', '앞이 잘 보이지 않는 친구에게는 손짓 대신 말로 방향을 알린다',
 *     안내 걷기(팔꿈치를 내주고 반 걸음 앞서 걷기, 계단·문 앞에서 미리 말하기), '듣기 어려운 친구에게는 앞에서 눈을 맞추고 글·몸짓으로'
 *     (한국시각장애인연합회·한국농아인협회 안내, 보건복지부 장애인식개선 자료)
 *   - 그래프 자료(좋아하는 놀이·층별 편의시설 수)는 모두 가상이고 화면 제목에 '가상'을 밝혔다.
 */
(function () {
  const BASE = { schema: 'edu-module.v1', domain: 'disab', band: '초3-4' };
  const T = (topic, grade) => (o) => Object.assign({}, BASE, { topic: `disab.e34.${topic}`, grades: [grade] }, o);
  const M = [];
  const strip = (p) => String(p).replace(/[.?!]$/, '');
  const idOf = (c) => (typeof c === 'string' ? c : c.id);
  const mix = (groups) => { const out = []; const n = Math.max(...groups.map((g) => g.length)); for (let i = 0; i < n; i++) for (const g of groups) if (g[i] != null) out.push(g[i]); return out; };
  const count = (groups) => groups.reduce((a, g) => a + g.length, 0);
  const slotId = (s) => (typeof s === 'string' ? s : s.id);
  const sortT = (slots, groups) => ({ sort: Object.fromEntries(slots.map((s, i) => [slotId(s), groups[i].map(idOf)])) });
  const plain = (list) => list.map((x) => ({ id: x.id, text: x.text }));

  // 나누기(sortboard·mindmap sort): 기본 = groups, 쉬움 = 칸마다 앞에서 ne장, 도전 = 칸마다 hard 카드를 더함(traps = 어느 칸에도 안 들어가는 카드)
  const SORT = (prompt, base, slots, groups, ne, hard, d, more, traps) => {
    const easyG = groups.map((g, i) => g.slice(0, Array.isArray(ne) ? ne[i] : ne));
    const hardG = groups.map((g, i) => g.concat(hard[i] || []));
    const p = strip(prompt);
    const tr = traps || [];
    return {
      prompt, toolOptions: Object.assign({}, base, { slots, cards: mix(groups) }), target: sortT(slots, groups), difficulty: d,
      levels: {
        easy: { prompt: `${p}(${count(easyG)}장).`, toolOptions: { cards: mix(easyG) }, target: sortT(slots, easyG) },
        challenge: { prompt: `${p}(${count(hardG) + tr.length}장).`, toolOptions: { cards: mix(hardG).concat(tr) }, target: sortT(slots, hardG) },
      },
      ...more,
    };
  };
  // 가지 수가 달라지는 나누기(mindmap): 쉬움 = 앞 k가지만, 기본 = 전부, 도전 = 카드 더함 + 함정 카드
  const SORTK = (prompt, base, slots, groups, k, hard, traps, d, more) => {
    const p = strip(prompt);
    const hardG = groups.map((g, i) => g.concat(hard[i] || []));
    return {
      prompt, toolOptions: Object.assign({}, base, { slots, cards: mix(groups) }), target: sortT(slots, groups), difficulty: d,
      levels: {
        easy: { prompt: `${p}(가지 ${k}개).`, toolOptions: { slots: slots.slice(0, k), cards: mix(groups.slice(0, k)) }, target: sortT(slots.slice(0, k), groups.slice(0, k)) },
        challenge: { prompt: `${p}. 남는 카드가 있어요.`, toolOptions: { cards: mix(hardG).concat(traps) }, target: sortT(slots, hardG) },
      },
      ...more,
    };
  };

  // 차례 놓기(timeline order): 기본 = 카드 전부, 쉬움 = keep 번째 카드들만, 도전 = 틀린 카드(trap) 한 장이 섞인다
  const NAMES = { 2: ['먼저', '다음'], 3: ['처음', '다음', '끝'], 4: ['처음', '다음', '그다음', '끝'], 5: ['처음', '다음', '그다음', '그 뒤', '끝'] };
  const shuffled = (list) => list.slice(1).concat(list[0]).reverse();
  const ORD = (prompt, base, steps, keep, trap, d, more) => {
    const ids = steps.map((c) => c.id);
    const easy = keep.map((i) => steps[i]);
    const p = strip(prompt);
    return {
      prompt, toolOptions: Object.assign({}, base, { mode: 'order', slots: NAMES[steps.length], cards: shuffled(steps) }), target: { order: ids }, difficulty: d,
      levels: {
        easy: { prompt: `${p}(${easy.length}장).`, toolOptions: { slots: NAMES[easy.length], cards: shuffled(easy) }, target: { order: easy.map((c) => c.id) } },
        challenge: { prompt: `${p}. 틀린 카드 한 장은 빼요.`, toolOptions: { cards: shuffled(steps).concat(trap) }, target: { order: ids } },
      },
      ...more,
    };
  };

  // 갈림길(dilemma): 기본 = 장면 둘(보기 3개), 쉬움 = 첫 장면만(바른 보기 + 첫 틀린 보기), 도전 = 바른 길 끝에 셋째 장면(extra.third, 바른 보기 extra.pick)
  const easySceneOf = (scene, g0) => Object.assign({}, scene, {
    choices: scene.choices.filter((c) => c.id === g0 || c.id === scene.choices.find((x) => x.id !== g0).id)
      .map((c) => (c.id === g0 ? { id: c.id, text: c.text, result: c.result, impact: c.impact, ending: c.ending } : c)),
  });
  const deepen = (scene, path, third) => Object.assign({}, scene, {
    choices: scene.choices.map((c) => {
      if (c.id !== path[0]) return c;
      if (path.length > 1) return Object.assign({}, c, { next: deepen(c.next, path.slice(1), third) });
      const out = Object.assign({}, c, { next: third }); delete out.ending; return out;
    }),
  });
  const DIL = (prompt, scene, good, extra, d, more) => {
    const g0 = good[0][0];
    const p = strip(prompt);
    return {
      prompt, toolOptions: { scene }, target: { path: good }, difficulty: d,
      levels: {
        easy: { prompt: `${p}(한 번 골라요).`, toolOptions: { scene: easySceneOf(scene, g0) }, target: { path: [[g0]] } },
        challenge: { prompt: `${p}. 셋째 장면까지 가요.`, toolOptions: { scene: deepen(scene, good[0], extra.third) }, target: { path: good.map((g) => g.concat(extra.pick)) } },
      },
      ...more,
    };
  };

  // 짝 잇기(timeline·mindmap·wordcards match): rows = [[칸 글, 카드 글], …] 기본 nBase줄, 쉬움 nEasy줄, 도전 = 전부 + 함정 카드
  const MATCH = (prompt, base, rows, nEasy, nBase, trap, d, more) => {
    const slots = rows.map((r, i) => ({ id: `r${i + 1}`, label: r[0] }));
    const cardsOf = (n) => rows.slice(0, n).map((r) => r[1]).reverse();
    const tg = (n) => ({ match: Object.fromEntries(rows.slice(0, n).map((r, i) => [`r${i + 1}`, r[1]])) });
    const p = strip(prompt);
    return {
      prompt, toolOptions: Object.assign({}, base, { mode: 'match', slots: slots.slice(0, nBase), cards: cardsOf(nBase) }), target: tg(nBase), difficulty: d,
      levels: {
        easy: { prompt: `${p}(${nEasy}줄).`, toolOptions: { slots: slots.slice(0, nEasy), cards: cardsOf(nEasy) }, target: tg(nEasy) },
        challenge: { prompt: `${p}(${rows.length}줄). 남는 카드가 있어요.`, toolOptions: { slots, cards: [trap].concat(cardsOf(rows.length)) }, target: tg(rows.length) },
      },
      ...more,
    };
  };

  // 바구니에 고르기(emotion·wordcards pick): cards = [{ id, text, ok? }], 쉬움 = easyIds 카드만, 도전 = hard 카드를 더함
  const PICK = (prompt, base, cards, easyIds, hard, d, more) => {
    const ok = (list) => list.filter((c) => c.ok).map((c) => c.id);
    const easy = cards.filter((c) => easyIds.includes(c.id));
    const all = cards.concat(hard || []);
    const lv = { easy: { prompt: `${strip(prompt)}(${easy.length}장).`, toolOptions: { cards: plain(easy) }, target: { pick: ok(easy) } } };
    if (hard && hard.length) lv.challenge = { prompt: `${strip(prompt)}(${all.length}장).`, toolOptions: { cards: plain(all) }, target: { pick: ok(all) } };
    return { prompt, toolOptions: Object.assign({ mode: 'pick' }, base, { cards: plain(cards) }), target: { pick: ok(cards) }, difficulty: d, levels: lv, ...more };
  };

  // 어떻게 할까(emotion branch): 쉬움 = 바른 보기 + 첫 틀린 보기
  const BRANCH = (prompt, situation, feeling, choices, good, d, more) => {
    const g = choices.find((c) => c.id === good);
    const bad = choices.find((c) => c.id !== good);
    return {
      prompt, toolOptions: { mode: 'branch', situation, feeling, choices }, target: { choice: good }, difficulty: d,
      levels: { easy: { prompt: `${strip(prompt)}(보기 2개).`, toolOptions: { choices: [g, bad] }, target: { choice: good } } },
      ...more,
    };
  };

  // 칸 지도 핀: 쉬움 = 핀 자리 이름이 바로 보임(readout은 activity.levels), 도전 = 보기 고르기를 함께 한다(ask)
  const PIN = (map, prompt, region, why, d, more) => ({
    prompt, toolOptions: map, target: { region }, difficulty: d,
    levels: { challenge: { prompt: `${strip(prompt)}. ${why.tail || '까닭도 골라요.'}`, toolOptions: { ask: { q: why.q, choices: why.choices } }, target: { region, pick: why.answer } } },
    ...more,
  });

  // 스스로 점검(timer selfCheck) 출구 질문: 쉬움 앞 2칸, 기본 앞 3칸, 도전 4칸
  const SELF = (title, checks, prompt) => ({
    type: 'tool', tool: 'timer', options: { title }, prompt: prompt || '오늘 한 것에 스스로 표시해요.', target: { selfCheck: checks.slice(0, 3) }, difficulty: 0.1,
    levels: { easy: { target: { selfCheck: checks.slice(0, 2) } }, challenge: { target: { selfCheck: checks.slice(0, 4) } } },
  });
  // 콜라주 판 출구 질문: 쉬움 easyN조각, 기본 baseN조각, 도전 baseN조각 + 점검 한 칸 더
  const POSTER = (prompt, options, checks, extraCheck, easyN, baseN) => ({
    type: 'tool', tool: 'collage', options, prompt, target: { selfCheck: checks, minPieces: baseN }, difficulty: 0.1,
    levels: { easy: { target: { selfCheck: checks, minPieces: easyN } }, challenge: { target: { selfCheck: checks.concat(extraCheck), minPieces: baseN } } },
  });
  // 활동 문항 모양 → 출구 교구 질문 모양
  const EX = (tool, it) => ({ type: 'tool', tool, prompt: it.prompt, options: it.toolOptions, target: it.target, difficulty: it.difficulty, levels: it.levels });
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  const PEOPLE = [{ value: 5, name: '5명' }, { value: 1, name: '1명' }];
  const CARD_LV = { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } };
  const BOARD_LV = { easy: { instant: true, showCount: true }, base: {}, challenge: { shuffle: true } };
  const FICTION = '장면 속 친구(하준·서윤·다은·서진·은우)는 모두 가명의 가상 인물이다. "너도 장애가 있니?", "가족 중에 있니?"처럼 학생이나 가족의 장애 여부를 묻지 않고, 우리 반 실제 친구를 예로 짚지 않는다.';
  const PITY = '"불쌍해요", "도와줘야 해요"라는 말이 나오면 나무라지 말고 "친구가 불쌍한 걸까요, 놀이 규칙이나 계단이 친구를 막고 있는 걸까요?"라고 되물어 불편이 환경에서 생긴다는 쪽으로 돌린다.';

  // ======================================================================================================
  // 3학년 · 모두 함께하는 놀이로 규칙 바꾸기 (research-mandatory §2 초: 장애 이해와 배려)
  // ======================================================================================================
  {
    const C = T('play-rules', 3);
    const GAMES = [['술래잡기', 9], ['피구', 7], ['공기놀이', 5], ['보물찾기', 4]];
    const GPIC = { type: 'picture', title: '우리 반이 좋아하는 놀이(가상의 25명)', unit: '명', xLabel: '놀이', yLabel: '친구 수', icons: PEOPLE, icon: 'person' };
    const YARD = {
      title: '우리 학교 운동장(가상)', grid: [6, 4],
      regions: [
        { name: '평평한 마당', cells: [[0, 0], [1, 0], [0, 1], [1, 1]] }, { name: '모래밭', cells: [[2, 0], [3, 0], [2, 1], [3, 1]] },
        { name: '계단 입구', cells: [[4, 0], [5, 0]] }, { name: '경사로', cells: [[4, 1], [5, 1]] },
        { name: '잔디밭', cells: [[0, 2], [1, 2], [0, 3], [1, 3]] }, { name: '턱 있는 길', cells: [[2, 2], [3, 2]] },
        { name: '넓은 포장길', cells: [[2, 3], [3, 3], [4, 3], [5, 3], [4, 2], [5, 2]] },
      ],
    };
    M.push(
      C({
        id: 'disab.e34.play-rules.intro.rule-look', type: 'intro', title: '술래잡기 그림에서 끼기 어려운 곳',
        method: '놀이 그림에서 어려운 점 찾기', tool: 'emotion', minutes: 6,
        levels: { easy: '술래잡기 그림에서 하준이가 끼기 어려운 곳 한 곳을 함께 고르고 하준이 마음을 말한다.', base: '끼기 어려운 곳 두 곳을 고르고, 하준이 마음을 짐작해 짝에게 말한다.', challenge: '목발을 짚은 친구에게 어려운 곳(모래밭)도 함께 찾아 고른다.' },
        intro: {
          teacher: '"쉬는 시간 술래잡기 그림이에요. 휠체어를 타는 하준이도 같이 하고 싶어 해요. 하준이가 끼기 어려운 곳은 어디일까요?" 시연 단추로 계단 위 술래 집, 바퀴가 빠지는 모래밭이 차례로 바구니에 담기는 것을 보인다(기다릴 반응: "계단이요", "모래요"). 그때 하준이 마음을 묻고(기다릴 반응: "아쉬워요", "같이 놀고 싶어요") ' + PITY + ' 오늘은 모두 함께할 수 있게 놀이 규칙을 바꿔 본다고 밝힌다.',
          student: '술래잡기 그림을 보고 하준이가 끼기 어려운 곳을 골라요. 그때 하준이 마음도 짐작해 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'pick', basket: '끼기 어려운 곳', cards: [{ id: 'stair', text: '계단 위 술래 집' }, { id: 'flat', text: '평평한 마당' }, { id: 'sand', text: '울퉁불퉁 모래밭' }, { id: 'wide', text: '넓은 포장길' }], shuffle: false }, sequence: [{ pick: ['stair'] }, { pick: ['stair', 'sand'] }] },
          art: { draw: 'a paper cut schoolyard where paper children play tag, the tagger base drawn on top of a few steps, a paper child in a wheelchair smiling at the edge beside a sandy patch', banner: '어디가 끼기 어려울까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: FICTION,
      }),
      C({
        id: 'disab.e34.play-rules.intro.game-chart', type: 'intro', title: '우리 반 좋아하는 놀이 그래프',
        method: '우리 반 좋아하는 놀이 그림그래프', tool: 'chart', minutes: 6,
        levels: { easy: '놀이 3가지(술래잡기·피구·공기놀이) 그림만 함께 세어 가장 많은 놀이를 고른다.', base: '놀이 4가지 그림그래프를 읽고 가장 많은 놀이를 고른다.', challenge: '그래프의 놀이 가운데 모두 함께하기 쉬운 놀이와 바꿀 규칙을 짝과 말한다(교사 진행).' },
        intro: {
          teacher: '"가상의 우리 반 25명이 좋아하는 놀이를 그림그래프로 나타냈어요. 큰 사람 그림 하나는 5명이에요. 가장 많은 놀이는 무엇일까요?" 시연 단추로 술래잡기가 골라지는 것을 보이고 9명·7명·5명·4명을 함께 읽는다. "가장 많은 놀이를 하면 모두 즐거워요"라는 말이 나오면 "이 놀이를 할 때 함께하기 어려운 친구는 없을까요? 규칙을 조금 바꾸면 어떨까요?"라고 되묻는다. 자료는 가상이라고 밝힌다.',
          student: '우리 반이 좋아하는 놀이 그림그래프를 읽고 가장 많은 놀이를 찾아요. 모두 함께하려면 무엇을 바꿀지 떠올려 보아요.',
          demo: { tool: 'chart', options: Object.assign({}, GPIC, { mode: 'read', data: GAMES, question: '가장 많은 놀이는?', choices: GAMES.map((g) => g[0]) }), sequence: [{ pick: 0 }] },
          art: { draw: 'a paper picture graph on a classroom board with small paper person icons in four rows for tag, dodgeball, jacks and a treasure hunt', banner: '우리 반은 어떤 놀이를?', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
        notes: '그래프는 가상 자료다. 실제 반에서 조사할 때는 손들기 대신 쪽지로 모아 누가 무엇을 골랐는지 드러나지 않게 한다.',
      }),
      C({
        id: 'disab.e34.play-rules.activity.rule-change', type: 'activity', title: '갈림길: 규칙을 바꿀까?',
        method: '규칙 바꾸기 상황 판단', tool: 'dilemma', minutes: 13,
        levels: { easy: '갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '갈림 2번 — 먼저 친구에게 묻고, 친구 말에 맞는 규칙을 고른다(보기 3개씩).', challenge: '갈림 3번 — 바꾼 규칙으로 해 본 뒤 생긴 문제를 다시 고치는 셋째 장면까지 간다.' },
        activity: {
          title: '갈림길: 규칙을 바꿀까?', tool: 'dilemma',
          teacher: '"이 길을 고르면 서윤이는 놀이를 즐길 수 있을까요? 다른 친구들은요?" 결과 장면을 소리 내어 읽고 다음 장면에서 다시 고른다. "우리끼리 알아서 바꿔 주면 돼요"라는 학생에게 "서윤이에게 무엇이 편한지는 누가 가장 잘 알까요?"라고 묻는다. "불쌍하니까 봐주자"는 보기를 고른 학생은 나무라지 말고 결과 장면에서 친구가 한 말("나도 똑같이 놀고 싶어")을 함께 읽는다. 바꾼 규칙은 다른 친구에게도 재미있어야 모두의 놀이가 된다는 것을 짚는다.',
          task: '장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('공 피하기 놀이에 서윤이도 함께해요. 어떻게 할까요?', {
              text: '공 피하기 놀이를 해요. 앞이 잘 보이지 않는 서윤이도 같이 하고 싶어 해요.', motif: 'sun',
              choices: [
                { id: 'same', text: '규칙을 그대로 한다', result: '서윤이는 공이 오는 것을 알기 어려웠어요.', impact: [{ who: '서윤', text: '함께 즐기기 어려워요', tone: -1 }], why: '규칙이 그대로면 서윤이는 공을 알기 어려워요.' },
                { id: 'ask', text: '서윤이에게 좋은 방법을 묻는다', result: '서윤이가 "소리 나는 공이면 알 수 있어" 했어요.', ending: '먼저 물으니 서윤이에게 맞는 방법을 알았어요.', next: {
                  text: '서윤이 말을 듣고 규칙을 정해요.', choices: [
                    { id: 'bell', text: '소리 나는 공으로 바꾼다', result: '모두 공 소리를 듣고 피했어요.', impact: [{ who: '모두', text: '함께 즐거워요', tone: 1 }], ending: '친구 말대로 규칙을 바꾸니 모두 함께 놀았어요.' },
                    { id: 'judge', text: '서윤이는 심판만 하라고 한다', result: '서윤이는 공을 피해 보지 못했어요.', impact: [{ who: '서윤', text: '놀이에서 빠졌어요', tone: -1 }], why: '하고 싶은 친구를 빼면 함께하는 놀이가 아니에요.' },
                    { id: 'forget', text: '들은 말은 잊고 그대로 한다', result: '서윤이는 또 공을 알기 어려웠어요.', impact: [{ who: '서윤', text: '서운해요', tone: -1 }], why: '물어본 뒤에는 친구 말을 따라요.' },
                  ] } },
                { id: 'watch', text: '서윤이는 구경하라고 한다', result: '서윤이 혼자 의자에 앉아 있었어요.', impact: [{ who: '서윤', text: '외로워요', tone: -1 }], why: '구경만 하게 하면 함께 노는 게 아니에요.' },
              ] }, [['ask', 'bell']],
            { third: { text: '해 보니 공이 빨라서 소리를 듣고 피하기 어려워요.', choices: [
              { id: 'roll', text: '"공을 굴려서 하자" 다시 고친다', result: '공이 굴러 오는 소리를 모두 잘 들었어요.', impact: [{ who: '모두', text: '더 재미있어요', tone: 1 }], ending: '해 보고 다시 고치니 더 좋은 규칙이 되었어요.' },
              { id: 'quit', text: '놀이를 그만한다', result: '모두 아쉬워하며 교실로 갔어요.', impact: [{ who: '모두', text: '아쉬워요', tone: -1 }], why: '안 되면 그만두지 말고 규칙을 다시 고쳐요.' },
              { id: 'blame', text: '"서윤이 때문에 어려워" 한다', result: '서윤이가 고개를 숙였어요.', impact: [{ who: '서윤', text: '속상해요', tone: -1 }], why: '어려운 것은 서윤이가 아니라 규칙이에요. 규칙을 고쳐요.' },
            ] }, pick: 'roll' }, 0.2),
            DIL('술래 집이 계단 위에 있어요. 어떻게 할까요?', {
              text: '술래잡기의 술래 집이 계단 위예요. 휠체어를 타는 하준이도 함께해요.', motif: 'house',
              choices: [
                { id: 'keep', text: '계단 위 술래 집 그대로', result: '하준이는 술래 집에 갈 수 없었어요.', impact: [{ who: '하준', text: '끼기 어려워요', tone: -1 }], why: '계단은 휠체어로 오르기 어려워요.' },
                { id: 'ask', text: '하준이에게 어디가 좋을지 묻는다', result: '하준이가 "평평한 마당이 좋아" 했어요.', ending: '먼저 물으니 하준이가 좋은 자리를 알려 줬어요.', next: {
                  text: '하준이가 평평한 마당을 골랐어요. 어떻게 할까요?', choices: [
                    { id: 'move', text: '술래 집을 마당으로 옮긴다', result: '모두 마당에서 신나게 달렸어요.', impact: [{ who: '모두', text: '함께 놀아요', tone: 1 }], ending: '자리를 바꾸니 모두가 같은 놀이를 즐겼어요.' },
                    { id: 'tagger', text: '하준이는 술래만 하라고 한다', result: '하준이는 한 번도 숨지 못했어요.', impact: [{ who: '하준', text: '서운해요', tone: -1 }], why: '한 역할만 맡기지 말고 똑같이 놀아요.' },
                    { id: 'stairs', text: '"계단이 재밌어" 그대로 한다', result: '하준이는 또 끼지 못했어요.', impact: [{ who: '하준', text: '외로워요', tone: -1 }], why: '물어본 뒤에는 친구 말을 따라요.' },
                  ] } },
                { id: 'pity', text: '"하준이는 안 잡기" 봐준다', result: '하준이가 "나도 똑같이 놀고 싶어" 했어요.', impact: [{ who: '하준', text: '봐주기는 싫어요', tone: -1 }], why: '봐주기가 아니라 모두 똑같이 즐기는 규칙을 찾아요.' },
              ] }, [['ask', 'move']],
            { third: { text: '놀다 보니 마당 끝 모래에 바퀴가 빠지려 해요.', choices: [
              { id: 'line', text: '모래 앞까지 선을 긋자고 한다', result: '선 안에서만 놀기로 해서 아무도 빠지지 않았어요.', impact: [{ who: '모두', text: '안전하게 놀아요', tone: 1 }], ending: '놀이 자리를 다시 고쳐 모두 즐겁게 놀았어요.' },
              { id: 'push', text: '말없이 휠체어를 민다', result: '하준이가 깜짝 놀랐어요.', impact: [{ who: '하준', text: '놀랐어요', tone: -1 }], why: '휠체어를 밀기 전에는 먼저 물어요.' },
              { id: 'stop', text: '놀이를 끝낸다', result: '모두 아쉬워했어요.', impact: [{ who: '모두', text: '아쉬워요', tone: -1 }], why: '안 되는 곳만 바꾸면 계속 놀 수 있어요.' },
            ] }, pick: 'line' }, 0.25),
            DIL('달리기 출발 신호를 어떻게 할까요?', {
              text: '이어달리기 출발 신호가 "준비, 땅!" 소리예요. 소리를 듣기 어려운 다은이도 함께해요.', motif: 'star',
              choices: [
                { id: 'louder', text: '더 크게 소리친다', result: '다은이는 여전히 신호를 알기 어려웠어요.', impact: [{ who: '다은', text: '늦게 출발해요', tone: -1 }], why: '소리를 키우는 것보다 다은이에게 맞는 방법을 물어요.' },
                { id: 'ask', text: '다은이에게 좋은 신호를 묻는다', result: '다은이가 "깃발을 들면 보여" 하고 손짓했어요.', ending: '먼저 물으니 다은이에게 맞는 신호를 알았어요.', next: {
                  text: '다은이가 깃발 신호를 골랐어요. 어떻게 할까요?', choices: [
                    { id: 'flag', text: '깃발 신호를 함께 쓴다', result: '모두 깃발을 보고 같이 출발했어요.', impact: [{ who: '모두', text: '공평하게 달려요', tone: 1 }], ending: '모두가 볼 수 있는 신호로 바꾸니 함께 달렸어요.' },
                    { id: 'late', text: '다은이만 늦게 출발하라고 한다', result: '다은이 팀이 늘 뒤처졌어요.', impact: [{ who: '다은', text: '억울해요', tone: -1 }], why: '한 사람만 손해 보는 규칙은 공평하지 않아요.' },
                    { id: 'cheer', text: '다은이는 응원만 하라고 한다', result: '다은이는 달리지 못했어요.', impact: [{ who: '다은', text: '서운해요', tone: -1 }], why: '하고 싶은 친구를 빼지 않아요.' },
                  ] } },
                { id: 'out', text: '다은이 팀만 따로 한다', result: '다은이는 다른 친구들과 떨어졌어요.', impact: [{ who: '다은', text: '외로워요', tone: -1 }], why: '따로 하면 함께하는 놀이가 아니에요.' },
              ] }, [['ask', 'flag']],
            { third: { text: '깃발이 앞 친구에게 가려 잘 안 보여요.', choices: [
              { id: 'front', text: '모두 보이는 앞에서 깃발을 든다', result: '모두 깃발을 한눈에 보고 출발했어요.', impact: [{ who: '모두', text: '잘 보여요', tone: 1 }], ending: '해 보고 고치니 모두에게 더 좋은 신호가 되었어요.' },
              { id: 'giveup', text: '다시 소리 신호로 바꾼다', result: '다은이는 또 늦게 출발했어요.', impact: [{ who: '다은', text: '속상해요', tone: -1 }], why: '안 되는 곳을 고치면 되지 처음으로 돌아가지 않아요.' },
              { id: 'say', text: '"다은이가 못 봐서 그래" 한다', result: '다은이가 얼굴을 붉혔어요.', impact: [{ who: '다은', text: '창피해요', tone: -1 }], why: '안 보이게 든 깃발이 문제예요. 자리를 고쳐요.' },
            ] }, pick: 'front' }, 0.3, { conclude: '먼저 친구에게 묻고, 친구 말대로 규칙을 바꾸고, 해 보고 다시 고치면 모두의 놀이가 돼요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '함께 놀 규칙을 바꿀 때 먼저 할 일은?', options: ['함께할 친구에게 물어요', '우리끼리 정해요', '어려운 친구는 구경해요'], answer: '함께할 친구에게 물어요' }] },
        notes: FICTION,
      }),
      C({
        id: 'disab.e34.play-rules.activity.rule-order', type: 'activity', title: '새 놀이 규칙 정하는 차례',
        method: '새 놀이 규칙 차례 정하기', tool: 'timeline', minutes: 14,
        levels: { easy: '차례 카드 3장을 놓고(놓으면 바로 맞는지 알려 줌), 단계와 할 말 2줄을 잇는다.', base: '차례 카드 4장(묻기 → 정하기 → 해 보기 → 고치기)을 놓고, 할 말 3줄을 잇는다.', challenge: '틀린 카드 한 장을 빼고 4장을 놓고, 고치기 단계에 들어갈 말까지 4줄을 잇는다(남는 카드 하나).' },
        activity: {
          title: '새 놀이 규칙 정하는 차례', tool: 'timeline',
          teacher: '"규칙을 바꿀 때 맨 먼저 할 일은 무엇일까요?" 카드를 다 놓으면 차례대로 소리 내어 읽게 한다. "규칙은 정하면 끝이에요"라는 학생에게 "해 보니 불편한 점이 생기면 어떻게 할까요?"라고 묻고, 해 본 뒤 다시 고치는 것도 규칙 만들기의 한 단계라는 것을 짚는다. "우리끼리 정하기" 카드를 넣는 학생에게는 "함께할 친구 말을 듣지 않으면 그 친구에게 맞을까요?"라고 묻는다.',
          task: '모두 함께 놀 규칙을 정하는 차례 카드를 놓고, 단계마다 할 말을 이어요.', levels: CARD_LV,
          items: [
            ORD('함께 놀 규칙을 정하는 차례로 놓아요.', { axis: ['먼저', '나중'] },
              [{ id: 'ask', text: '친구에게 물어보기' }, { id: 'set', text: '규칙 정하기' }, { id: 'try', text: '함께 해 보기' }, { id: 'fix', text: '다시 고치기' }],
              [0, 1, 2], { id: 'alone', text: '우리끼리 정하기', why: '함께할 친구 말을 듣지 않고 정하면 그 친구에게 맞지 않을 수 있어요.' }, 0.15),
            ORD('공 피하기 규칙을 바꾼 차례로 놓아요.', { axis: ['먼저', '나중'] },
              [{ id: 'ask', text: '서윤이에게 묻기' }, { id: 'bell', text: '소리 공 고르기' }, { id: 'play', text: '굴려서 해 보기' }, { id: 'fix', text: '빠르기 고치기' }],
              [0, 1, 2], { id: 'watch', text: '서윤이는 구경', why: '구경만 하게 하면 규칙을 바꾼 까닭이 없어요.' }, 0.2),
            MATCH('단계마다 할 말을 이어요.', { axis: ['먼저', '나중'] },
              [['물어보기', '"어떤 게 편해?"'], ['규칙 정하기', '"공을 굴리자"'], ['함께 해 보기', '"자, 시작!"'], ['다시 고치기', '"불편한 점 있어?"']],
              2, 3, '"너 때문에 졌어"', 0.25, { conclude: '묻기 → 정하기 → 해 보기 → 고치기. 해 보고 불편한 점을 다시 물으면 모두의 규칙이 돼요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '규칙을 정하는 차례를 써요.', columns: ['차례', '할 일'], cells: [['1', '친구에게 물어보기'], ['2', ''], ['3', '함께 해 보기'], ['4', '']], answer: '규칙 정하기, 다시 고치기' }] },
      }),
      C({
        id: 'disab.e34.play-rules.activity.court-map', type: 'activity', title: '모두의 놀이터 지도',
        method: '모두의 놀이터 지도', tool: 'map', minutes: 13,
        levels: { easy: '핀을 놓으면 그 칸의 자리 이름이 바로 보인다(문항 4개).', base: '휠체어로 갈 길과 놀 자리, 피할 곳을 문항마다 지도에서 찾아 핀을 꽂는다(문항 4개).', challenge: '핀을 꽂은 뒤 그 자리를 고른 까닭을 고르고, 턱이 있는 곳에서는 돌아갈 길을 보기에서 고른다.' },
        activity: {
          title: '모두의 놀이터 지도', tool: 'map',
          teacher: '"하준이가 교실에서 운동장까지 가려면 어느 길로 가야 할까요? 놀 자리는 어디가 좋을까요?" 핀을 꽂을 때마다 그 칸이 왜 좋은지, 왜 피하는지 짝과 말하게 한다. "모래밭은 하준이가 못 가니까 하준이는 못 놀아요"라는 말이 나오면 "하준이가 못 가는 게 아니라 바퀴가 빠지는 땅이에요. 놀 자리를 바꾸면 어떨까요?"라고 되묻는다. 모두가 갈 수 있는 길과 자리를 고르면 다른 친구에게도 편하다는 것을 짚는다.',
          task: '운동장 칸 지도에서 문항이 말하는 길과 자리를 찾아 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            PIN(YARD, '하준이가 휠체어로 운동장에 내려갈 길에 핀을 꽂아요.', '경사로', { q: '왜 이 길일까요?', choices: ['턱 없이 이어져서', '가장 짧아서', '계단이 재미있어서'], answer: 0 }, 0.15),
            PIN(YARD, '함께 술래잡기할 평평한 자리에 핀을 꽂아요.', '평평한 마당', { q: '왜 이 자리일까요?', choices: ['바퀴가 잘 굴러서', '모래가 많아서', '구석이라서'], answer: 0 }, 0.15),
            PIN(YARD, '바퀴가 빠지기 쉬워 놀이 자리에서 뺄 곳에 핀을 꽂아요.', '모래밭', { q: '왜 뺄까요?', choices: ['바퀴가 빠져서', '너무 넓어서', '그늘이 없어서'], answer: 0 }, 0.2),
            PIN(YARD, '턱이 있어 휠체어가 지나기 어려운 길에 핀을 꽂아요.', '턱 있는 길', { q: '어디로 돌아갈까요?', choices: ['넓은 포장길로', '턱을 그냥 넘어서', '놀이를 그만두고'], answer: 0, tail: '돌아갈 길도 골라요.' }, 0.25,
              { conclude: '턱 없는 길과 평평한 자리를 고르면 휠체어를 타는 친구도, 유모차를 탄 동생도 함께 놀 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '모두 함께 놀기 좋은 우리 학교 자리를 한 곳 쓰고 까닭을 한 줄로 써요.' }] },
        notes: '지도는 가상의 운동장이다. 우리 학교를 살펴볼 때는 장소를 찾는 데 그치고, 특정 학생의 이동을 예로 들지 않는다.',
      }),
      C({
        id: 'disab.e34.play-rules.activity.pair-talk', type: 'activity', title: '바꾼 규칙에 이름 붙이기',
        method: '짝 토의: 바꾼 규칙 이름 짓기', tool: 'mindmap', minutes: 14,
        levels: { easy: '가운데 "모두 놀이"에서 가지 2개(공·속도 바꾸기)에 규칙 카드를 붙인다(놓으면 바로 알려 줌).', base: '가지 3개(공·속도·자리 바꾸기)에 규칙 카드를 붙이고, 규칙마다 도움 되는 친구를 3줄 잇는다.', challenge: '카드가 더해지고 남는 카드(구경만 하기)를 가려내며, 도움 되는 친구 4줄을 잇고 짝과 규칙 이름을 짓는다.' },
        activity: {
          title: '바꾼 규칙에 이름 붙이기', tool: 'mindmap',
          teacher: '"오늘 바꾼 규칙을 가지마다 모아 볼까요? 이 규칙은 무엇을 바꾼 걸까요?" 카드를 붙인 뒤 짝과 규칙 이름(예: "소리 공 피구")을 지어 발표하게 한다. 둘째 문항에서 "이 규칙은 그 친구한테만 좋아요"라는 말이 나오면 "공을 굴리면 처음 하는 동생은 어떨까요? 평평한 자리는 넘어지기 쉬운 친구에게는요?"라고 물어 바꾼 규칙이 모두에게 좋을 때가 많다는 것을 짚는다. 셋째 문항 짝 토의에서 지은 이름을 칠판에 모은다.',
          task: '가운데 "모두 놀이"에서 바꾼 규칙 카드를 가지마다 붙이고, 짝과 규칙 이름을 지어요.', levels: CARD_LV,
          items: [
            SORTK('바꾼 규칙 카드를 무엇을 바꿨는지 가지에 붙여요.', { topic: '모두 놀이' }, ['공 바꾸기', '속도 바꾸기', '자리 바꾸기'],
              [['소리 나는 공', '부드러운 공'], ['천천히 걷기', '굴려서 던지기'], ['평평한 마당', '술래 집 옮기기']],
              2, [['큰 공'], ['차례로 던지기'], ['넓은 자리']], [{ id: 'watch', text: '한 명은 구경만', why: '구경만 하게 하는 것은 바꾼 규칙이 아니에요.' }], 0.15),
            MATCH('바꾼 규칙과 도움 되는 친구를 이어요.', {}, [['소리 나는 공', '앞이 잘 안 보이는 친구'], ['평평한 마당', '휠체어 타는 친구'], ['깃발 출발 신호', '소리 듣기 어려운 친구'], ['굴려서 던지기', '처음 하는 동생']],
              2, 3, '아무에게도 아님', 0.2),
            { prompt: '짝과 바꾼 규칙 하나를 골라 놀이 이름을 지어 말해요.', free: true, talk: true,
              conclude: '규칙을 조금 바꾸면 더 많은 친구가 함께 놀 수 있어요. 바꾼 규칙에 우리만의 이름을 붙여요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '짝과 지은 "모두 놀이" 이름과 바꾼 규칙을 한 줄로 써요.' }] },
        notes: FICTION,
      }),
      C({
        id: 'disab.e34.play-rules.wrap.rule-poster', type: 'wrap', title: '우리 반 함께 놀이 규칙판',
        method: '우리 반 함께 놀이 규칙판', tool: 'collage', minutes: 6,
        levels: { easy: '규칙 하나를 떠올리며 조각 1개 이상을 붙이고 점검 3칸에 표시한다.', base: '오늘 정한 규칙 셋을 떠올리며 조각 3개 이상을 붙이고 점검 3칸에 표시한다.', challenge: '조각 3개 이상을 붙이고 규칙판 제목을 짝과 정해 점검 4칸에 표시한다.' },
        wrap: {
          teacher: '"오늘 바꾼 규칙 가운데 우리 반 규칙판에 올릴 것을 하나씩 조각으로 붙여 볼까요? 소리 공은 동그라미, 평평한 마당은 네모처럼요." 조각마다 어떤 규칙인지 짝에게 말하게 한다. 출구 2번에서 "어려운 친구는 빼기"를 고른 학생에게 "오늘 갈림길에서 친구를 뺐을 때 그 친구 마음이 어땠는지 떠올려 볼까요?"라고 되묻는다.',
          exitTicket: [
            POSTER('색종이 조각으로 우리 반 함께 놀이 규칙판을 꾸며요.', { maxPieces: 12 }, ['바꾼 규칙을 떠올렸어요', '규칙마다 조각을 붙였어요', '짝에게 규칙을 말했어요'], '규칙판 제목을 정했어요', 1, 3),
            { type: 'choice', prompt: '함께 놀 규칙을 정할 때 먼저 할 일은?', options: ['함께할 친구에게 묻기', '우리끼리 빨리 정하기', '어려운 친구는 빼기'], answer: 0, difficulty: 0.1, explain: '함께할 친구에게 무엇이 편한지 먼저 물어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '우리 반 함께 놀이 규칙',
          items: [
            { type: 'table', prompt: '바꾼 규칙과 그 규칙으로 좋아진 점을 써요.', columns: ['바꾼 규칙', '좋아진 점'], cells: [['소리 나는 공', ''], ['평평한 마당에서 놀기', '']], answer: '공이 오는 것을 소리로 알 수 있어요, 휠체어도 잘 다닐 수 있어요' },
            { type: 'draw', prompt: '우리 반 함께 놀이 규칙판을 그려요.' },
          ],
        },
      }),
      C({
        id: 'disab.e34.play-rules.wrap.why-say', type: 'wrap', title: '고른 규칙의 이유 말하기',
        method: '고른 규칙 이유 말하기', tool: 'sortboard', minutes: 6,
        levels: { easy: '이유 카드 2장을 "좋은 이유" 바구니에 넣는다(넣으면 바로 알려 줌).', base: '이유 카드 5장을 "좋은 이유"와 "이유가 아니에요"로 나눈다.', challenge: '카드를 나눈 뒤 내가 고른 이유를 "왜냐하면"으로 짝에게 말한다(출구 2번).' },
        wrap: {
          teacher: '"우리가 규칙을 바꾼 까닭은 무엇이었나요?" 카드를 나눈 뒤 한두 명에게 "나는 ○○ 규칙이 좋아요. 왜냐하면 ○○이기 때문이에요." 틀로 말하게 한다. "친구가 불쌍해서"를 좋은 이유에 넣는 학생에게 "하준이는 \'나도 똑같이 놀고 싶어\'라고 했어요. 불쌍해서일까요, 함께 놀 수 있어야 해서일까요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'sortboard', options: { slots: ['좋은 이유', '이유가 아니에요'], cards: [{ id: 'all', text: '모두 참여할 수 있어서' }, { id: 'pity', text: '친구가 불쌍해서', why: '불쌍해서가 아니라 누구나 함께 놀 수 있어야 해서 바꿔요.' }, { id: 'fun', text: '재미가 같아서' }, { id: 'told', text: '선생님이 시켜서', why: '시켜서가 아니라 함께 놀려고 바꿔요.' }, { id: 'want', text: '친구가 원해서' }] },
              prompt: '규칙을 바꾼 이유 카드를 바구니에 나누어요.', target: { sort: { '좋은 이유': ['all', 'fun', 'want'], '이유가 아니에요': ['pity', 'told'] } }, difficulty: 0.15,
              levels: { easy: { toolOptions: { cards: [{ id: 'all', text: '모두 참여할 수 있어서' }, { id: 'want', text: '친구가 원해서' }], instant: true }, target: { sort: { '좋은 이유': ['all', 'want'], '이유가 아니에요': [] } } } } },
            { type: 'short', prompt: '내가 가장 좋다고 생각한 규칙과 이유를 "왜냐하면"으로 써요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '규칙을 바꾼 이유',
          items: [
            { type: 'check', prompt: '규칙을 바꾼 좋은 이유에 표시해요.', options: ['모두 참여할 수 있어서', '친구가 불쌍해서', '친구가 원해서', '재미가 같아서'] },
            { type: 'short', prompt: '"나는 ○○ 규칙이 좋아요. 왜냐하면 ○○" 틀로 한 줄을 써요.' },
          ],
          easy: { note: '"모두 함께 놀 수 있어서"를 떠올려요.', items: [{ type: 'choice', prompt: '규칙을 바꾼 까닭은?', options: ['모두 함께 놀려고', '친구를 봐주려고'], answer: '모두 함께 놀려고' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 3학년 · 모두를 위한 편의시설 찾기 (research-mandatory §2 초: 장애 이해와 배려)
  // ======================================================================================================
  {
    const C = T('facilities', 3);
    const SCHOOL = {
      title: '우리 학교 1층(가상)', grid: [6, 4],
      regions: [
        { name: '교실', cells: [[0, 0], [1, 0], [0, 1], [1, 1]] }, { name: '도서관', cells: [[2, 0], [3, 0], [2, 1], [3, 1]] },
        { name: '화장실', cells: [[4, 0], [5, 0], [4, 1]] }, { name: '엘리베이터', cells: [[5, 1]] },
        { name: '1층 복도', cells: [[0, 2], [1, 2], [2, 2], [3, 2], [4, 2], [5, 2]] },
        { name: '정문 경사로', cells: [[0, 3], [1, 3]] }, { name: '현관', cells: [[2, 3], [3, 3]] }, { name: '계단', cells: [[4, 3], [5, 3]] },
      ],
    };
    const FAC = [['1층', 7], ['2층', 4], ['3층', 2]];
    const FPIC = { type: 'picture', title: '층별 편의시설 수(가상 조사)', unit: '개', xLabel: '층', yLabel: '편의시설 수', icons: [{ value: 5, name: '5개' }, { value: 1, name: '1개' }], icon: 'square' };
    const STAIRS = [{ shape: 'square', color: '갈색', size: 'm', x: 160, y: 320, r: 0 }, { shape: 'square', color: '갈색', size: 'm', x: 200, y: 280, r: 0 }, { shape: 'square', color: '갈색', size: 'm', x: 240, y: 240, r: 0 }];
    const ENTRY = { shapes: ['triangle', 'rect', 'square', 'circle'], maxPieces: 14 };
    M.push(
      C({
        id: 'disab.e34.facilities.intro.who-uses', type: 'intro', title: '경사로를 쓰는 사람은 누구?',
        method: '경사로를 쓰는 사람 고르기', tool: 'wordcards', minutes: 6,
        levels: { easy: '사람 카드 2장(휠체어·유모차)을 경사로 바구니에 함께 담는다.', base: '사람 카드 4장을 모두 담아 경사로를 쓰는 사람이 여럿임을 본다.', challenge: '엘리베이터를 쓰는 사람도 같은 방법으로 짝과 떠올려 말한다(교사 진행).' },
        intro: {
          teacher: '"이 경사로는 누구를 위해 만들었을까요?" 대부분 "휠체어 탄 사람이요"라고 답하면 시연 단추로 휠체어 탄 사람, 유모차 미는 사람, 짐수레 끄는 사람, 자전거 끄는 사람이 차례로 바구니에 담기는 것을 보인다. "경사로는 장애인만 쓰는 거예요"라는 말이 나오면 "무거운 짐을 든 택배 기사님은 계단과 경사로 중 어디가 편할까요?"라고 되묻는다. 오늘은 편의시설이 누구에게나 도움이 된다는 것을 찾아본다고 밝힌다.',
          student: '경사로 그림을 보고 이 길을 쓰는 사람 카드를 골라 바구니에 담아요. 누가 더 있을지 떠올려 보아요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '경사로를 쓰는 사람', shuffle: false, cards: [{ id: 'wheel', text: '휠체어 탄 사람' }, { id: 'stroller', text: '유모차 미는 사람' }, { id: 'cart', text: '짐수레 끄는 사람' }, { id: 'bike', text: '자전거 끄는 사람' }] }, sequence: [{ pick: ['wheel', 'stroller'] }, { pick: ['wheel', 'stroller', 'cart', 'bike'] }] },
          art: { draw: 'a paper cut building entrance with a gentle ramp beside a few steps, a paper person in a wheelchair, a parent pushing a stroller and a delivery worker with a cart all going up the ramp', banner: '경사로는 누가 쓸까?', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
      }),
      C({
        id: 'disab.e34.facilities.intro.school-walk', type: 'intro', title: '학교 지도에서 편의시설 찾기',
        method: '우리 학교 편의시설 떠올리기', tool: 'map', minutes: 6,
        levels: { easy: '정문 경사로 한 곳에 핀이 꽂히는 것을 함께 본다.', base: '정문 경사로와 엘리베이터 두 곳에 핀이 꽂히는 것을 보고 쓰임을 말한다.', challenge: '지도에 없는 곳 가운데 편의시설이 생기면 좋을 자리를 짝과 정해 말한다(교사 진행).' },
        intro: {
          teacher: '"가상의 우리 학교 1층 지도예요. 계단 말고도 위아래로 다닐 수 있는 길은 어디일까요?" 시연 단추로 정문 경사로와 엘리베이터에 핀이 차례로 꽂히는 것을 보이고, 곳마다 누가 쓰면 좋을지 묻는다(기다릴 반응: "다리를 다친 친구요", "무거운 짐 나르는 분이요"). "엘리베이터는 장난치면 재밌어요"라는 말이 나오면 "그 사이 꼭 타야 하는 사람이 기다리면 어떨까요?"라고 되묻는다.',
          student: '학교 칸 지도에서 편의시설이 있는 곳을 찾고, 그 시설이 누구에게 도움이 될지 짝과 말해 보아요.',
          demo: { tool: 'map', options: SCHOOL, sequence: [{ pin: [0, 3] }, { pin: [5, 1] }] },
          art: { draw: 'a paper cut school floor map with a ramp at the front gate, an elevator door, a hallway with yellow tactile paving and small paper pins standing on them', banner: '우리 학교 편의시설', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '지도는 가상이다. 실제 학교를 살펴볼 때는 교사와 함께 다니며 시설만 세고, 시설을 쓰는 사람을 따라가거나 사진을 찍지 않는다.',
      }),
      C({
        id: 'disab.e34.facilities.activity.use-right', type: 'activity', title: '편의시설 바르게 쓰기',
        method: '바르게 쓰기 상황 판단', tool: 'emotion', minutes: 13,
        levels: { easy: '행동 카드 3장 가운데 바른 행동을 고르고(바로 알려 줌), 상황 문항은 보기 2개에서 고른다.', base: '행동 카드 5장에서 바른 행동을 고르고, 두 상황에서 바로잡는 행동을 보기 3개 가운데 고른다.', challenge: '헷갈리는 카드 2장이 더해진 7장에서 고르고, 상황마다 고른 행동의 까닭을 짝에게 말한다.' },
        activity: {
          title: '편의시설 바르게 쓰기', tool: 'emotion',
          teacher: '"경사로에 자전거를 잠깐 세워 두면 누가 곤란할까요?" 카드마다 그 행동 때문에 누가 다니기 어려워지는지 말하게 한다. "잠깐인데 괜찮아요"라는 학생에게 "그 잠깐 사이에 휠체어나 유모차가 지나가야 하면 어떻게 될까요?"라고 묻는다. 상황 문항에서는 바로잡는 방법(함께 옮기기, 어른께 알리기)을 짚고, 남을 혼내는 말보다 함께 고치는 말을 고르게 한다.',
          task: '편의시설을 바르게 쓰는 행동을 고르고, 잘못 쓴 상황에서 바로잡는 행동을 골라요.', levels: CARD_LV,
          items: [
            PICK('편의시설을 바르게 쓰는 행동만 바구니에 담아요.', { basket: '바르게 써요' },
              [{ id: 'ramp', text: '경사로 비워 두기', ok: true }, { id: 'bike', text: '경사로에 자전거' }, { id: 'elev', text: '엘리베이터 양보', ok: true }, { id: 'pot', text: '점자 블록 위 화분' }, { id: 'park', text: '장애인 주차 구역 비우기', ok: true }],
              ['ramp', 'bike', 'elev'], [{ id: 'block', text: '점자 블록에서 비키기', ok: true }, { id: 'play', text: '엘리베이터 장난' }], 0.15),
            BRANCH('경사로를 막은 자전거, 어떻게 할까요?', '경사로 가운데에 친구 자전거가 세워져 있어요.', '걱정',
              [{ id: 'move', text: '친구와 같이 옆으로 옮긴다', result: '경사로가 다시 넓게 열렸어요.', mood: '뿌듯함' }, { id: 'pass', text: '나는 지나가니까 둔다', result: '유모차가 경사로 앞에서 멈췄어요.', mood: '걱정' }, { id: 'more', text: '내 자전거도 옆에 둔다', result: '경사로가 더 좁아졌어요.', mood: '속상함' }], 'move', 0.2),
            BRANCH('점자 블록 위 화분, 어떻게 할까요?', '복도 점자 블록 위에 우리 반 화분이 놓였어요.', '걱정',
              [{ id: 'move', text: '화분을 옆으로 옮긴다', result: '점자 블록이 끝까지 이어졌어요.', mood: '뿌듯함' }, { id: 'pretty', text: '예쁘니까 그대로 둔다', result: '지팡이를 쓰는 사람이 화분에 부딪힐 수 있어요.', mood: '걱정' }, { id: 'add', text: '화분을 하나 더 놓는다', result: '길이 더 막혔어요.', mood: '속상함' }], 'move', 0.25,
              { conclude: '편의시설은 비워 두고 양보해요. 막힌 것을 보면 함께 옮기거나 어른께 알려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '바르게 쓰면 ○, 아니면 ×를 써요.', columns: ['행동', '○ / ×'], cells: [['경사로 비워 두기', ''], ['점자 블록 위 화분', ''], ['엘리베이터 양보', '']], answer: '○, ×, ○' }] },
      }),
      C({
        id: 'disab.e34.facilities.activity.fac-count', type: 'activity', title: '층별 편의시설 그림그래프',
        method: '편의시설 수 그림그래프', tool: 'chart', minutes: 14,
        levels: { easy: '1층·2층 두 층의 그림그래프를 완성한다(1층 그림은 미리 놓여 있다).', base: '1~3층 세 층의 그림그래프를 완성하고 가장 적은 층을 찾는다.', challenge: '가장 많은 층과 적은 층의 차이를 읽고, 적은 층에 무엇이 더 있으면 좋을지 짝과 말한다(넷째 문항).' },
        activity: {
          title: '층별 편의시설 그림그래프', tool: 'chart',
          teacher: '"가상의 학교에서 층마다 경사로·엘리베이터 문·점자 블록 길을 세었어요. 큰 네모 하나는 5개예요." 표의 수를 함께 읽고 그래프를 완성한다. 큰 그림을 1개로 세는 학생에게 "큰 네모는 몇 개를 나타냈죠? 7개는 큰 그림 몇 개와 작은 그림 몇 개일까요?"라고 묻는다. 3층이 가장 적은 것을 찾으면 "3층 교실에 가야 하는 친구는 어떨까요? 무엇이 더 있으면 좋을까요?"라고 물어 그래프로 고칠 곳을 찾는다는 것을 짚는다. 자료는 가상이라고 밝힌다.',
          task: '층별 편의시설 수 표를 보고 그림그래프를 완성한 뒤, 그래프를 읽어 답을 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '표를 보고 층별 편의시설 그림그래프를 완성해요.', toolOptions: Object.assign({}, FPIC, { mode: 'build', data: FAC, showTable: true }), target: { build: true }, difficulty: 0.2,
              levels: { easy: { prompt: '표를 보고 두 층의 그림그래프를 완성해요.', toolOptions: { data: FAC.slice(0, 2), given: [0] }, target: { build: true } } } },
            { prompt: '편의시설이 가장 적은 층은 어디인가요?', toolOptions: Object.assign({}, FPIC, { mode: 'read', data: FAC, question: '가장 적은 층은?', choices: ['1층', '2층', '3층'] }), target: { pick: 2 }, difficulty: 0.15,
              levels: { easy: { prompt: '1층과 2층 가운데 편의시설이 더 적은 층은 어디인가요?', toolOptions: { data: FAC.slice(0, 2), choices: ['1층', '2층'] }, target: { pick: 1 } } } },
            { prompt: '가장 많은 층과 가장 적은 층은 몇 개 차이인가요?', toolOptions: Object.assign({}, FPIC, { mode: 'read', data: FAC, question: '많은 층과 적은 층의 차이는?', choices: ['3개', '5개', '7개'] }), target: { pick: 1 }, difficulty: 0.25,
              levels: { easy: { prompt: '1층과 2층은 편의시설이 몇 개 차이인가요?', toolOptions: { data: FAC.slice(0, 2) }, target: { pick: 0 } } } },
            { prompt: '편의시설이 가장 적은 층에 무엇이 더 있으면 좋을지 짝과 말해요.', free: true, talk: true,
              conclude: '그래프로 보면 편의시설이 모자란 곳을 찾을 수 있어요. 모자란 곳을 고치면 누구나 다니기 편해요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '그래프를 보고 층별 편의시설 수를 써요.', columns: ['층', '편의시설 수(개)'], cells: [['1층', '7'], ['2층', ''], ['3층', '']], answer: '4, 2' }] },
        notes: '그래프는 가상 조사 자료다. 우리 학교를 세어 볼 때는 교사와 함께 다니며 시설 수만 센다.',
      }),
      C({
        id: 'disab.e34.facilities.activity.ramp-build', type: 'activity', title: '누구나 들어오는 입구 꾸미기',
        method: '우리 교실 앞 경사로 꾸미기', tool: 'collage', minutes: 13,
        levels: { easy: '계단 옆에 경사로(세모) 1개와 손잡이(긴 네모) 1개, 조각 2개를 붙인다.', base: '경사로 1개와 양쪽 손잡이 2개, 조각 3개를 붙이고 넓은 문을 크게 붙인다.', challenge: '경사로·손잡이에 더해 입구 앞에 점자 블록(노랑 네모) 2개 이상을 붙이고 점검표에 표시한다.' },
        activity: {
          title: '누구나 들어오는 입구 꾸미기', tool: 'collage',
          teacher: '"계단만 있는 입구예요. 휠체어를 탄 친구, 유모차를 끄는 보호자, 다리를 다친 친구가 모두 들어오려면 무엇을 붙여야 할까요?" 세모는 경사로, 긴 네모는 손잡이, 노랑 네모는 점자 블록이라고 칠판에 적어 둔다. "경사로를 붙이면 계단은 없애도 돼요"라는 학생에게 "계단이 더 편한 사람도 있어요. 둘 다 있으면 고를 수 있어요"라고 말해 준다. 다 꾸민 뒤 점검표로 누구나 들어올 수 있는지 스스로 확인하게 한다.',
          task: '계단만 있는 입구에 경사로·손잡이·넓은 문 조각을 붙여 누구나 들어오는 입구로 꾸며요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '계단 옆에 경사로(세모)와 손잡이(긴 네모)를 붙여요.', toolOptions: ENTRY, state: { pieces: STAIRS }, target: { has: [{ shape: 'triangle', min: 1 }, { shape: 'rect', min: 2 }] }, difficulty: 0.15,
              levels: {
                easy: { prompt: '계단 옆에 경사로(세모) 1개와 손잡이(긴 네모) 1개를 붙여요.', target: { has: [{ shape: 'triangle', min: 1 }, { shape: 'rect', min: 1 }] } },
                challenge: { prompt: '경사로·손잡이 2개와 점자 블록(노랑 네모) 2개를 붙여요.', target: { has: [{ shape: 'triangle', min: 1 }, { shape: 'rect', min: 2 }, { shape: 'square', color: '노랑', min: 2 }] } },
              } },
            { prompt: '경사로(세모)를 붙이고, 휠체어도 들어갈 넓은 문(큰 긴 네모)을 붙여요.', toolOptions: ENTRY, state: { pieces: STAIRS }, target: { has: [{ shape: 'triangle', min: 1 }, { shape: 'rect', size: 'l', min: 1 }] }, difficulty: 0.15 },
            { prompt: '완성한 입구를 보고 점검 칸에 표시해요.', toolOptions: ENTRY, state: { pieces: STAIRS }, target: { selfCheck: ['계단 말고 다른 길이 있어요', '잡을 손잡이가 있어요', '누구나 들어올 수 있어요'], minPieces: 5 }, difficulty: 0.1,
              conclude: '계단 옆 경사로와 손잡이, 넓은 문이 있으면 누구나 들어올 수 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'draw', prompt: '누구나 들어올 수 있는 우리 교실 입구를 그리고 붙인 것에 이름을 써요.' }] },
        notes: '콜라주 조각에는 이름이 없다. 세모 = 경사로, 긴 네모 = 손잡이, 큰 긴 네모 = 넓은 문, 노랑 네모 = 점자 블록이라고 칠판에 적어 둔다.',
      }),
      C({
        id: 'disab.e34.facilities.activity.fac-sort', type: 'activity', title: '편의시설과 쓰임 짝 짓기',
        method: '편의시설과 쓰임 짝 짓기', tool: 'sortboard', minutes: 14,
        levels: { easy: '시설 카드 3장을 "다니기 편해요"·"알기 편해요"에 나눈다(넣으면 바로 알려 주고 장 수가 보임).', base: '학교와 기차역 시설 카드를 4장씩 두 바구니에 나누고, 셋째 판에서 두 가지를 다 돕는 시설을 가른다.', challenge: '판마다 카드가 더해지고, 두 가지 다 돕는 시설이 왜 그런지 짝에게 말한다.' },
        activity: {
          title: '편의시설과 쓰임 짝 짓기', tool: 'sortboard',
          teacher: '"이 시설은 다니기를 돕나요, 알기를 돕나요?" 카드를 넣을 때마다 누가 어떻게 쓰는지 한 문장으로 말하게 한다. "자막은 장애인만 봐요"라는 학생에게 "시끄러운 곳에서 텔레비전을 볼 때 자막이 있으면 누구에게 좋을까요?"라고 묻는다. 셋째 판에서 점자 블록은 발바닥이나 지팡이로 느껴 길을 따라 다니게 하고, 멈출 곳도 알려 준다는 것을 짚는다.',
          task: '편의시설 카드를 "다니기 편해요"와 "알기 편해요" 바구니에 나누어요.', levels: BOARD_LV,
          items: [
            SORT('학교 편의시설 카드를 쓰임에 맞게 나누어요.', {}, ['다니기 편해요', '알기 편해요'], [['경사로', '엘리베이터'], ['영상 자막', '음성 안내']], [2, 1], [['자동문'], ['점자 안내판']], 0.15),
            SORT('기차역(가상) 시설 카드를 쓰임에 맞게 나누어요.', {}, ['다니기 편해요', '알기 편해요'], [['승강장 엘리베이터', '넓은 개찰구'], ['전광판 글자 안내', '안내 방송']], [2, 1], [['낮은 매표 창구'], ['그림 안내 표지']], 0.2),
            SORT('두 가지를 다 돕는 시설과 한 가지만 돕는 시설을 나누어요.', {}, ['두 가지 다 도와요', '한 가지만 도와요'], [['점자 블록', '소리 나는 신호등'], ['경사로', '영상 자막']], [1, 2], [[], ['엘리베이터']], 0.25,
              { conclude: '편의시설은 다니기와 알기를 도와요. 장애가 있는 사람뿐 아니라 누구에게나 편리해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '영상 자막은 무엇을 돕는 시설인가요?', options: ['다니기 편해요', '알기 편해요'], answer: '알기 편해요' }] },
      }),
      C({
        id: 'disab.e34.facilities.wrap.fac-promise', type: 'wrap', title: '"경사로·블록은 비워요" 약속',
        method: '편의시설 지키기 약속', tool: 'timer', minutes: 6,
        levels: { easy: '약속을 한 번 외치도록 타이머를 맞추고 점검 2칸에 표시한다.', base: '약속을 동작과 함께 두 번 외치도록 타이머를 맞추고 점검 3칸에 표시한다.', challenge: '두 번 외치며 짝과 동작을 맞추고 점검 4칸에 표시한다.' },
        wrap: {
          teacher: '"경사로·블록은 비워요!" 하며 두 팔로 길을 여는 동작을 함께 정한다. 타이머 번 수를 맞춘 뒤 신호에 맞춰 반 전체가 외친다. 출구 3번에서 "잠깐은 괜찮아요"를 고른 학생에게 "그 잠깐 사이에 꼭 지나가야 하는 사람이 있다면요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '약속 외치기', labels: ['외치기', '쉬기'], plan: { work: 5, rest: 5, rounds: 4 } }, prompt: '약속을 두 번 외치도록 타이머 번 수를 맞춰요.', target: { plan: { rounds: 2 } }, difficulty: 0.1,
              levels: { easy: { prompt: '약속을 한 번 외치도록 타이머 번 수를 맞춰요.', target: { plan: { rounds: 1 } } } } },
            SELF('편의시설 약속 점검', ['경사로를 비워 둘게요', '점자 블록 위에 물건을 두지 않을게요', '엘리베이터를 양보할게요', '짝과 동작을 맞췄어요']),
            { type: 'choice', prompt: '경사로에 자전거를 잠깐 세워도 될까요?', options: ['잠깐은 괜찮아요', '아니요, 비워 둬요', '사람이 없으면 돼요'], answer: 1, difficulty: 0.1, explain: '잠깐 사이에도 꼭 지나가야 하는 사람이 있을 수 있어요.' },
          ],
        },
        worksheet: {
          title: '편의시설 지키기 약속',
          items: [
            { type: 'blank', prompt: '약속의 빈칸을 채워요.', text: '경사로·점자 블록은 ___.', answer: '비워요' },
            { type: 'check', prompt: '내가 지킬 약속에 표시해요.', options: ['경사로 비워 두기', '점자 블록 위에 물건 두지 않기', '엘리베이터 양보하기'] },
          ],
        },
      }),
      C({
        id: 'disab.e34.facilities.wrap.fac-best', type: 'wrap', title: '가장 쓸모 있는 시설과 까닭',
        method: '가장 쓸모 있는 시설 고르고 이유 말하기', tool: 'emotion', minutes: 6,
        levels: { easy: '사람 카드 3장 가운데 경사로가 돕는 사람을 고른다.', base: '사람 카드 5장 가운데 경사로가 돕는 사람을 모두 고르고, 가장 쓸모 있는 시설과 까닭을 쓴다.', challenge: '카드 6장에서 고르고, 고른 시설이 돕는 사람을 두 명 이상 넣어 까닭을 쓴다.' },
        wrap: {
          teacher: '"오늘 본 시설 가운데 가장 쓸모 있다고 생각한 것은 무엇인가요? 그 시설은 누구를 돕나요?" 출구 1번을 한 뒤 두세 명에게 까닭을 듣는다. "경사로는 휠체어만 써요"라고 고르는 학생에게 오늘 처음 본 그림(유모차·짐수레)을 떠올리게 한다. 출구 3번은 시설 하나와 까닭을 쓰게 한다.',
          exitTicket: [
            EX('emotion', PICK('경사로가 돕는 사람을 모두 골라요.', { basket: '경사로가 도와요' },
              [{ id: 'wheel', text: '휠체어 탄 사람', ok: true }, { id: 'stroller', text: '유모차 미는 사람', ok: true }, { id: 'bike', text: '경사로에 둔 자전거' }, { id: 'cart', text: '짐수레 끄는 사람', ok: true }, { id: 'hurt', text: '다리 다친 친구', ok: true }],
              ['wheel', 'stroller', 'bike'], [{ id: 'old', text: '무릎 아픈 할머니', ok: true }], 0.15)),
            { type: 'choice', prompt: '편의시설은 누구를 위한 것인가요?', options: ['장애가 있는 사람만', '누구나', '어른만'], answer: 1, difficulty: 0.1, explain: '편의시설은 장애가 있는 사람뿐 아니라 누구에게나 편리해요.' },
            { type: 'short', prompt: '가장 쓸모 있다고 생각한 시설과 까닭을 한 줄로 써요.' },
          ],
        },
        worksheet: {
          title: '모두를 위한 편의시설',
          items: [
            { type: 'table', prompt: '시설이 돕는 사람을 두 명씩 써요.', columns: ['시설', '돕는 사람'], cells: [['경사로', ''], ['영상 자막', '']], answer: '휠체어 탄 사람·유모차 미는 사람, 듣기 어려운 사람·시끄러운 곳에 있는 사람' },
            { type: 'short', prompt: '우리 학교에 더 있으면 좋을 편의시설과 까닭을 써요.' },
          ],
          easy: { note: '경사로 그림을 떠올려요.', items: [{ type: 'choice', prompt: '경사로를 쓰는 사람은?', options: ['여러 사람', '한 사람만'], answer: '여러 사람' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 4학년 · 먼저 묻고 원하는 방법으로 (research-mandatory §2 초: 장애 이해와 배려, 차별 말·행동 점검)
  // ======================================================================================================
  {
    const C = T('ask-first', 4);
    const ASK = ['e', 'e', 'q', 'q', 'qr', 'e', 'e', 'e', 'e', 'q', 'qr'];
    const REPLY = ['q', 'q', 'q', 'qr', 'q', 'q', 'q', 'qr'];
    const ROOM = {
      title: '우리 교실(가상)', grid: [6, 4],
      regions: [
        { name: '앞문', cells: [[0, 0]] }, { name: '넓은 통로', cells: [[0, 1], [0, 2], [0, 3], [1, 3], [2, 3], [3, 3]] },
        { name: '1모둠 책상', cells: [[1, 0], [2, 0], [1, 1], [2, 1]] }, { name: '좁은 틈', cells: [[1, 2], [2, 2]] },
        { name: '2모둠 책상', cells: [[3, 0], [4, 0], [3, 1], [4, 1]] }, { name: '교탁 앞', cells: [[3, 2], [4, 2]] },
        { name: '사물함', cells: [[5, 0], [5, 1], [5, 2]] }, { name: '책 바구니', cells: [[4, 3], [5, 3]] },
      ],
    };
    M.push(
      C({
        id: 'disab.e34.ask-first.intro.diff-pick', type: 'intro', title: '지안이와 하준이의 같은 점',
        method: '나와 친구의 다른 점·같은 점', tool: 'sortboard', minutes: 6,
        levels: { easy: '카드 4장을 "지안만"·"하준만"·"둘 다"에 함께 나눈다.', base: '카드 6장을 나누고 "둘 다" 칸이 얼마나 되는지 본다.', challenge: '"둘 다" 칸에 들어갈 카드를 짝과 더 떠올려 말한다(교사 진행).' },
        intro: {
          teacher: '"지안이는 안경을 쓰고, 하준이는 휠체어를 타요. 둘은 다른 점만 있을까요?" 시연 단추로 카드가 "지안만"·"하준만"·"둘 다" 바구니에 차례로 들어가는 것을 보인다. 안경과 휠체어가 모두 생활을 돕는 도구라는 것을 짚는다(기다릴 반응: "안경도 도구예요"). "하준이는 우리랑 달라요"라는 말이 나오면 "둘 다 칸을 볼까요? 떡볶이도 좋아하고 만화책도 즐겨 봐요"라고 되묻는다. 오늘은 다름이 있는 친구를 도울 때 무엇을 먼저 할지 배운다고 밝힌다.',
          student: '지안이와 하준이의 카드를 "지안만"·"하준만"·"둘 다"로 나누어요. 둘이 같은 점도 찾아보아요.',
          demo: { tool: 'sortboard', options: { slots: ['지안만', '하준만', '둘 다'], cards: ['안경을 써요', '휠체어를 타요', '떡볶이 좋아해요', '만화책 즐겨 봐요', '피아노를 쳐요', '탁구를 잘해요'] },
            sequence: [{ sort: { 지안만: ['안경을 써요'], 하준만: ['휠체어를 타요'], '둘 다': ['떡볶이 좋아해요', '만화책 즐겨 봐요'] } }, { sort: { 지안만: ['안경을 써요', '피아노를 쳐요'], 하준만: ['휠체어를 타요', '탁구를 잘해요'], '둘 다': ['떡볶이 좋아해요', '만화책 즐겨 봐요'] } }] },
          art: { draw: 'two paper children side by side at a snack table, one wearing glasses and one sitting in a wheelchair, both laughing over the same comic book and a plate of rice cakes', banner: '다른 점, 같은 점', extra: [{ motif: 'heart', x: 300, y: 96 }] },
        },
        notes: FICTION + ' 학생끼리 "나와 짝의 다른 점"을 찾게 할 때는 몸이나 장애가 아니라 좋아하는 것·잘하는 것으로만 하게 한다.',
      }),
      C({
        id: 'disab.e34.ask-first.intro.ask-song', type: 'intro', title: '"도와줄까?" 리듬 따라 하기',
        method: '"도와줄까?" 리듬 따라 하기', tool: 'keyboard', minutes: 6,
        levels: { easy: '"도와줄까?" 한 마디 리듬을 함께 따라 외친다.', base: '"도와줄까? 어떻게 할까?" 두 마디 리듬 블록을 보고 따라 외친다.', challenge: '대답 리듬("괜찮아, 고마워")을 이어 네 마디로 짝과 주고받는다.' },
        intro: {
          teacher: '"도와주고 싶을 때 먼저 하는 말을 리듬으로 외쳐 볼게요. 도-와-줄-까(쉼), 어-떻-게-할-까(쉼)." 시연 단추로 리듬 블록이 한 마디, 두 마디, 대답 마디까지 놓이는 것을 보이고 손뼉을 치며 따라 외친다. "도와주는 건 좋은 일이니까 그냥 해 주면 돼요"라는 말이 나오면 "친구가 혼자 하고 싶을 때 갑자기 도와주면 어떨까요?"라고 되묻는다. 대답 "괜찮아"도 존중하는 말이라는 것을 짚는다.',
          student: '리듬 블록을 보며 "도와줄까? 어떻게 할까?"를 손뼉에 맞춰 외쳐요. 짝이 "괜찮아, 고마워"로 대답해 보아요.',
          demo: { tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 4, blocks: ['q', 'e', 'qr'], pattern: ASK.concat(REPLY) }, sequence: [{ rhythm: ASK.slice(0, 5) }, { rhythm: ASK }, { rhythm: ASK.concat(REPLY) }] },
          art: { draw: 'paper rhythm blocks in four bars with small paper notes, two paper children facing each other and clapping, a speech bubble asking may I help', banner: '도와줄까? 어떻게 할까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      C({
        id: 'disab.e34.ask-first.intro.limit-scene', type: 'intro', title: '불편한 곳은 어디일까',
        method: '불편한 곳은 어디일까', tool: 'collage', minutes: 6,
        levels: { easy: '계단 앞에서 막히는 곳 한 곳에 별 표시가 붙는 것을 본다.', base: '계단과 좁은 문, 두 곳에 별 표시가 붙는 것을 본다.', challenge: '막힌 곳 옆에 경사로(세모) 조각이 붙어 길이 열리는 것까지 보고 무엇이 바뀌었는지 말한다.' },
        intro: {
          teacher: '"하준이가 문구점에 가려고 해요. 계단만 있는 가게 앞이에요. 막히는 곳은 어디일까요?" 시연 단추로 계단 앞과 좁은 문에 별 표시가 붙고, 마지막에 경사로 조각이 붙는 것을 보인다. "하준이가 다리가 불편해서 못 가요"라는 말이 나오면 "경사로가 생기니 어떻게 되었나요? 하준이가 바뀌었나요, 가게 입구가 바뀌었나요?"라고 되묻는다. 장애는 생활의 불편함이고, 그 불편은 둘레가 바뀌면 줄어든다는 것을 짚는다.',
          student: '계단만 있는 가게 그림에서 하준이가 막히는 곳을 찾아요. 무엇을 붙이면 길이 열릴지 말해 보아요.',
          demo: { tool: 'collage', options: { readOnly: true }, sequence: [
            { has: [{ shape: 'square', color: '갈색', n: 3 }, { shape: 'circle', color: '파랑', n: 1 }, { shape: 'star', color: '노랑', n: 1 }] },
            { has: [{ shape: 'square', color: '갈색', n: 3 }, { shape: 'circle', color: '파랑', n: 1 }, { shape: 'star', color: '노랑', n: 2 }] },
            { has: [{ shape: 'square', color: '갈색', n: 3 }, { shape: 'circle', color: '파랑', n: 1 }, { shape: 'star', color: '노랑', n: 2 }, { shape: 'triangle', color: '초록', n: 1 }] },
          ] },
          art: { draw: 'a paper cut stationery shop with only steps at the entrance and a narrow door, a paper child in a wheelchair at the bottom, small yellow paper stars marking the blocked spots and a green paper ramp being added', banner: '어디가 막혔을까?', extra: [{ motif: 'house', x: 300, y: 96 }] },
        },
        notes: FICTION,
      }),
      C({
        id: 'disab.e34.ask-first.activity.ask-dilemma', type: 'activity', title: '갈림길: 도울까, 물을까',
        method: '도울까 물을까 갈림길', tool: 'dilemma', minutes: 13,
        levels: { easy: '갈림 1번, 바로 돕기와 먼저 묻기 가운데 고르고 결과를 본다.', base: '갈림 2번 — 먼저 묻고, 친구가 "내가 할게" 하며 거절한 뒤 할 말을 고른다(보기 3개씩).', challenge: '갈림 3번 — 다음 장면에서 친구가 바라는 것이 바뀌었을 때 할 행동까지 고른다.' },
        activity: {
          title: '갈림길: 도울까, 물을까', tool: 'dilemma',
          teacher: '"도와주려는 마음은 좋아요. 그런데 묻지 않고 바로 하면 친구는 어떨까요?" 결과 장면을 소리 내어 읽고 다음 장면에서 다시 고른다. 친구가 "내가 할게"라고 하면 서운하다는 학생에게 "스스로 하고 싶은 마음도 존중받아야 해요. 거절은 나를 싫어한다는 뜻이 아니에요"라고 말해 준다. 바로 도운 길을 고른 학생을 나무라지 않고 결과 장면을 함께 읽고 다른 길도 가 보게 한다.',
          task: '장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('목발을 짚은 서진이가 문 앞에 섰어요.', {
              text: '목발을 짚은 서진이가 무거운 교실 문 앞에 섰어요.', motif: 'house',
              choices: [
                { id: 'grab', text: '묻지 않고 바로 문을 확 연다', result: '서진이가 깜짝 놀라 휘청했어요.', impact: [{ who: '서진', text: '놀랐어요', tone: -1 }], why: '도움도 먼저 물어야 친구가 준비할 수 있어요.' },
                { id: 'ask', text: '"문 열어 줄까?" 먼저 묻는다', result: '서진이가 "내가 열게, 고마워" 했어요.', ending: '먼저 물어서 서진이가 원하는 것을 알았어요.', next: {
                  text: '서진이가 스스로 열겠다고 해요. 어떻게 할까요?', choices: [
                    { id: 'wait', text: '"알겠어" 하고 기다린다', result: '서진이가 천천히 문을 열고 들어갔어요.', impact: [{ who: '서진', text: '스스로 해서 뿌듯해요', tone: 1 }], ending: '친구의 결정을 따르니 서로 마음이 편했어요.' },
                    { id: 'force', text: '"내가 할게" 하고 연다', result: '서진이 얼굴이 굳었어요.', impact: [{ who: '서진', text: '속상해요', tone: -1 }], why: '친구가 원하지 않는 도움은 하지 않아요.' },
                    { id: 'huff', text: '"그럼 마음대로 해" 한다', result: '서진이가 서운해했어요.', impact: [{ who: '서진', text: '서운해요', tone: -1 }], why: '거절을 들어도 친절하게 대답해요.' },
                  ] } },
                { id: 'pass', text: '못 본 척 지나간다', result: '서진이가 혼자 오래 애썼어요.', impact: [{ who: '서진', text: '힘들었어요', tone: 0 }], why: '먼저 물어보면 필요한 도움을 알 수 있어요.' },
              ] }, [['ask', 'wait']],
            { third: { text: '다음 날 서진이가 "오늘은 문 좀 잡아 줄래?" 해요.', choices: [
              { id: 'hold', text: '"그래!" 하고 문을 잡는다', result: '서진이가 편하게 들어갔어요.', impact: [{ who: '서진', text: '고마워요', tone: 1 }], ending: '그날그날 친구가 원하는 대로 도왔어요.' },
              { id: 'remind', text: '"어제는 싫다며?" 한다', result: '서진이가 머쓱해했어요.', impact: [{ who: '서진', text: '민망해요', tone: -1 }], why: '바라는 것은 날마다 다를 수 있어요. 지금 말을 따라요.' },
              { id: 'ignore', text: '못 들은 척 먼저 들어간다', result: '문이 서진이 앞에서 닫혔어요.', impact: [{ who: '서진', text: '서운해요', tone: -1 }], why: '도움을 청하면 들어 줘요.' },
            ] }, pick: 'hold' }, 0.2),
            DIL('은우가 식판을 들고 자리를 찾아요.', {
              text: '앞이 잘 보이지 않는 은우가 식판을 들고 빈자리를 찾아요.', motif: 'sun',
              choices: [
                { id: 'take', text: '식판을 확 가져가 옮긴다', result: '은우가 놀라 식판을 놓칠 뻔했어요.', impact: [{ who: '은우', text: '놀랐어요', tone: -1 }], why: '묻지 않고 물건을 가져가면 친구가 놀라요.' },
                { id: 'ask', text: '"자리 안내해 줄까?" 묻는다', result: '은우가 "응, 빈자리가 어디야?" 했어요.', ending: '먼저 물어서 은우가 원하는 도움을 알았어요.', next: {
                  text: '은우가 빈자리를 물어요. 어떻게 알려 줄까요?', choices: [
                    { id: 'tell', text: '"오른쪽 두 걸음 앞이야" 말한다', result: '은우가 그 자리에 잘 앉았어요.', impact: [{ who: '은우', text: '편해요', tone: 1 }], ending: '손짓 대신 말로 알려 은우가 스스로 찾았어요.' },
                    { id: 'point', text: '"저기!" 손으로 가리킨다', result: '은우는 어디인지 알 수 없었어요.', impact: [{ who: '은우', text: '헷갈려요', tone: -1 }], why: '앞이 잘 안 보이면 손짓 대신 말로 방향을 알려요.' },
                    { id: 'pull', text: '은우 팔을 끌고 간다', result: '은우가 깜짝 놀랐어요.', impact: [{ who: '은우', text: '불편해요', tone: -1 }], why: '몸을 이끌기 전에 어떻게 할지 물어요.' },
                  ] } },
                { id: 'shout', text: '"은우 조심해!" 크게 외친다', result: '모두가 은우를 쳐다봤어요.', impact: [{ who: '은우', text: '창피해요', tone: -1 }], why: '크게 외치기보다 다가가 조용히 물어요.' },
              ] }, [['ask', 'tell']],
            { third: { text: '자리에 앉은 은우가 "수저는 어디 있어?" 해요.', choices: [
              { id: 'say', text: '"식판 오른쪽 위에 있어" 말한다', result: '은우가 수저를 찾아 밥을 먹었어요.', impact: [{ who: '은우', text: '스스로 해요', tone: 1 }], ending: '필요한 것만 말로 알려 은우가 스스로 했어요.' },
              { id: 'all', text: '"내가 다 해 줄게" 한다', result: '은우가 "나도 할 수 있어" 했어요.', impact: [{ who: '은우', text: '답답해요', tone: -1 }], why: '친구가 할 수 있는 일은 스스로 하게 해요.' },
              { id: 'there', text: '"거기 있잖아" 한다', result: '은우는 어디인지 몰랐어요.', impact: [{ who: '은우', text: '헷갈려요', tone: -1 }], why: '"거기"보다 오른쪽·왼쪽처럼 말해요.' },
            ] }, pick: 'say' }, 0.25),
            DIL('하준이가 경사로를 천천히 올라요.', {
              text: '휠체어를 타는 하준이가 경사로를 천천히 오르고 있어요.', motif: 'star',
              choices: [
                { id: 'push', text: '말없이 뒤에서 민다', result: '하준이가 놀라 바퀴를 꽉 잡았어요.', impact: [{ who: '하준', text: '깜짝 놀랐어요', tone: -1 }], why: '휠체어는 하준이 몸과 같아요. 밀기 전에 물어요.' },
                { id: 'ask', text: '"밀어 줄까?" 먼저 묻는다', result: '하준이가 "괜찮아, 혼자 할 수 있어" 했어요.', ending: '먼저 물어서 하준이의 결정을 알았어요.', next: {
                  text: '하준이가 혼자 오르겠다고 해요. 어떻게 할까요?', choices: [
                    { id: 'wait', text: '"위에서 기다릴게" 한다', result: '하준이가 스스로 올라와 웃었어요.', impact: [{ who: '하준', text: '뿌듯해요', tone: 1 }], ending: '친구의 결정을 존중하고 함께 기다렸어요.' },
                    { id: 'again', text: '"그래도 내가 밀게" 한다', result: '하준이가 바퀴를 멈추고 한숨을 쉬었어요.', impact: [{ who: '하준', text: '답답해요', tone: -1 }], why: '친구가 괜찮다고 하면 그 말을 따라요.' },
                    { id: 'slow', text: '"느려서 답답해" 한다', result: '하준이가 고개를 숙였어요.', impact: [{ who: '하준', text: '속상해요', tone: -1 }], why: '친구의 빠르기를 탓하지 않아요.' },
                  ] } },
                { id: 'stare', text: '멈춰서 빤히 쳐다본다', result: '하준이가 불편해했어요.', impact: [{ who: '하준', text: '불편해요', tone: -1 }], why: '빤히 보지 말고 평소 친구처럼 대해요.' },
              ] }, [['ask', 'wait']],
            { third: { text: '위에 닿은 하준이가 "같이 도서관 갈래?" 해요.', choices: [
              { id: 'go', text: '"좋아, 같이 가자!" 한다', result: '둘이 이야기하며 도서관에 갔어요.', impact: [{ who: '하준', text: '즐거워요', tone: 1 }], ending: '먼저 묻고, 기다리고, 같은 친구로 함께 지냈어요.' },
              { id: 'rest', text: '"힘들 텐데 쉬어" 한다', result: '하준이가 "나 안 힘들어" 했어요.', impact: [{ who: '하준', text: '서운해요', tone: -1 }], why: '친구가 하고 싶은 일은 친구가 정해요.' },
              { id: 'alone', text: '혼자 먼저 간다', result: '하준이가 혼자 남았어요.', impact: [{ who: '하준', text: '외로워요', tone: -1 }], why: '함께 가자고 하면 같이 가요.' },
            ] }, pick: 'go' }, 0.3, { conclude: '도울 때는 먼저 묻고, 친구가 원하는 방법을 따르고, "괜찮아"라는 대답도 존중해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '친구가 "괜찮아, 혼자 할게"라고 하면?', options: ['"알겠어, 필요하면 말해"', '그래도 도와준다', '"마음대로 해"'], answer: '"알겠어, 필요하면 말해"' }] },
        notes: FICTION,
      }),
      C({
        id: 'disab.e34.ask-first.activity.way-order', type: 'activity', title: '돕는 차례 정하기',
        method: '돕는 차례 정하기', tool: 'timeline', minutes: 14,
        levels: { easy: '돕는 차례 카드 3장을 놓는다(놓으면 바로 맞는지 알려 줌).', base: '돕는 차례 카드 4장(묻기 → 듣기 → 그대로 하기 → 고마운 마음)을 놓는다.', challenge: '첫 문항은 "모르면 다시 묻기"가 들어간 5장을 놓고, 둘째·셋째 문항은 틀린 카드 한 장을 빼고 놓는다.' },
        activity: {
          title: '돕는 차례 정하기', tool: 'timeline',
          teacher: '"도울 때 맨 먼저 할 일은? 친구 말을 들은 다음에는?" 카드를 놓은 뒤 처음부터 끝까지 짝과 역할을 나눠 말해 보게 한다. "말없이 다 치워 주기" 카드를 넣으려는 학생에게 "친구는 그 책을 어떻게 놓고 싶었을까요? 물어보지 않으면 알 수 있을까요?"라고 묻는다. 셋째 문항에서 듣기 어려운 친구에게는 뒤에서 부르지 않고 앞에서 눈을 맞춘다는 것을 짚는다.',
          task: '친구를 도울 때의 차례 카드를 처음부터 끝까지 차례대로 놓아요.', levels: CARD_LV,
          items: [
            { prompt: '친구를 돕는 차례로 놓아요.', toolOptions: { axis: ['먼저', '나중'], mode: 'order', slots: NAMES[4], cards: [{ id: 'thanks', text: '고마운 마음 나누기' }, { id: 'do', text: '들은 대로 하기' }, { id: 'ask', text: '"도와줄까?" 묻기' }, { id: 'listen', text: '원하는 방법 듣기' }] }, target: { order: ['ask', 'listen', 'do', 'thanks'] }, difficulty: 0.15,
              levels: {
                easy: { prompt: '친구를 돕는 차례로 놓아요(3장).', toolOptions: { slots: NAMES[3], cards: [{ id: 'do', text: '들은 대로 하기' }, { id: 'ask', text: '"도와줄까?" 묻기' }, { id: 'listen', text: '원하는 방법 듣기' }] }, target: { order: ['ask', 'listen', 'do'] } },
                challenge: { prompt: '"모르면 다시 묻기"를 넣어 5장을 차례로 놓아요.', toolOptions: { slots: NAMES[5], cards: [{ id: 'thanks', text: '고마운 마음 나누기' }, { id: 'again', text: '모르면 다시 묻기' }, { id: 'do', text: '들은 대로 하기' }, { id: 'ask', text: '"도와줄까?" 묻기' }, { id: 'listen', text: '원하는 방법 듣기' }] }, target: { order: ['ask', 'listen', 'again', 'do', 'thanks'] } },
              } },
            ORD('하준이가 떨어뜨린 책을 함께 줍는 차례로 놓아요.', { axis: ['먼저', '나중'] },
              [{ id: 'ask', text: '"주워 줄까?" 묻기' }, { id: 'hear', text: '"저 책만" 듣기' }, { id: 'pick', text: '말한 책 주워 주기' }, { id: 'thanks', text: '"고마워" "응!"' }],
              [0, 1, 2], { id: 'all', text: '말없이 다 치우기', why: '묻지 않고 다 치우면 친구가 원한 대로가 아닐 수 있어요.' }, 0.2),
            ORD('소리 듣기 어려운 다은이와 모둠 활동하는 차례로 놓아요.', { axis: ['먼저', '나중'] },
              [{ id: 'face', text: '앞에서 눈 맞추기' }, { id: 'how', text: '"어떻게 말할까?" 쓰기' }, { id: 'share', text: '글·몸짓으로 나누기' }, { id: 'done', text: '함께 끝내기' }],
              [0, 2, 3], { id: 'call', text: '뒤에서 크게 부르기', why: '뒤에서는 보이지 않아요. 앞에서 눈을 맞추고 말해요.' }, 0.25,
              { conclude: '묻기 → 원하는 방법 듣기 → 그대로 하기 → 고마운 마음 나누기. 잘 모르면 다시 물어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '돕는 차례를 써요.', columns: ['차례', '할 일'], cells: [['1', '"도와줄까?" 묻기'], ['2', ''], ['3', '들은 대로 하기'], ['4', '']], answer: '원하는 방법 듣기, 고마운 마음 나누기' }] },
        notes: FICTION,
      }),
      C({
        id: 'disab.e34.ask-first.activity.guide-walk', type: 'activity', title: '팔꿈치 내주고 안내하기',
        method: '안내할 때 팔 내주기 동작', tool: 'timer', minutes: 13,
        levels: { easy: '안내 차례 카드 2장을 놓고, 연습 타이머를 15초로 맞춘다.', base: '안내 차례 카드 3장(묻기 → 팔꿈치 내주기 → 반 걸음 앞서 걷기)을 놓고, 연습 타이머를 30초로 맞춰 짝과 연습한다.', challenge: '연습 전 점검에 "계단이야" 미리 말하기를 더해 4칸을 확인하고 30초 연습한다.' },
        activity: {
          title: '팔꿈치 내주고 안내하기', tool: 'timer',
          teacher: '"앞이 잘 보이지 않는 친구가 길 안내를 원할 때, 먼저 무엇을 할까요?" 차례를 놓은 뒤 교사가 한 학생과 시범을 보인다: 먼저 "안내해 줄까?" 묻기 → 친구가 원하면 팔꿈치를 내주기 → 반 걸음 앞서 천천히 걷기. 눈은 가리지 않고, 짝과 안내하는 사람·안내받는 사람 역할만 바꾼다. "손을 잡고 끌면 더 빨라요"라는 학생에게 "끌려가는 사람은 어디로 가는지 몰라 불안해요. 내 팔꿈치를 잡으면 내가 움직이는 것을 느낄 수 있어요"라고 말해 준다.',
          task: '안내하는 차례를 놓고, 타이머를 맞춰 짝과 안내 걷기를 연습해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '친구를 안내하는 차례로 놓아요.', toolOptions: { title: '안내하는 차례', cards: ['반 걸음 앞서 걷기', '"안내해 줄까?"', '팔꿈치 내주기'] }, target: { order: ['"안내해 줄까?"', '팔꿈치 내주기', '반 걸음 앞서 걷기'] }, difficulty: 0.15,
              levels: { easy: { prompt: '친구를 안내하는 차례로 놓아요(2장).', toolOptions: { cards: ['팔꿈치 내주기', '"안내해 줄까?"'] }, target: { order: ['"안내해 줄까?"', '팔꿈치 내주기'] } } } },
            { prompt: '안내 걷기 연습을 30초 하도록 타이머를 맞춰요.', toolOptions: { title: '안내 걷기 연습', labels: ['안내', '바꾸기'], plan: { work: 10, rest: 10, rounds: 2 } }, target: { plan: { work: 30 } }, difficulty: 0.15,
              levels: { easy: { prompt: '안내 걷기 연습을 15초 하도록 타이머를 맞춰요.', target: { plan: { work: 15 } } } } },
            { prompt: '연습하기 전에 점검 칸을 모두 확인해요.', toolOptions: { title: '연습 전 점검', safety: ['먼저 묻고 시작해요', '길에 걸릴 것을 치워요', '천천히 걸어요'] }, target: { safety: true }, difficulty: 0.1,
              levels: { challenge: { prompt: '연습하기 전에 점검 4칸을 모두 확인해요.', toolOptions: { safety: ['먼저 묻고 시작해요', '길에 걸릴 것을 치워요', '천천히 걸어요', '"계단이야" 미리 말해요'] }, target: { safety: true } } } },
            { prompt: '짝과 역할을 바꿔 가며 안내 걷기를 해 보아요.', free: true, toolOptions: { title: '짝 연습', doneLabel: '짝과 안내 걷기를 해 보았어요' },
              conclude: '먼저 묻고, 원하면 팔꿈치를 내주고, 반 걸음 앞서 천천히 걸어요. 계단·문 앞에서는 미리 말해 줘요.' },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '안내할 때는 먼저 묻고, 친구가 원하면 ___를 내주어요.', answer: '팔꿈치' }] },
        notes: '눈가리개를 쓰는 "장애 체험"은 하지 않는다(두려움이나 동정이 커질 수 있다). 눈을 뜬 채 역할만 정해 연습하고, 교실 안 넓은 곳에서 천천히 걷는다.',
      }),
      C({
        id: 'disab.e34.ask-first.activity.class-map', type: 'activity', title: '교실에서 다니기 편한 길',
        method: '교실에서 다니기 편한 길', tool: 'map', minutes: 14,
        levels: { easy: '핀을 놓으면 그 칸의 자리 이름이 바로 보인다(문항 3개 + 짝 토의).', base: '앞문에서 들어오는 넓은 길, 막힌 틈, 사물함까지 가는 끝 자리를 찾아 핀을 꽂고, 짝과 물어볼 말을 정한다.', challenge: '핀을 꽂은 뒤 막힌 곳을 어떻게 바꿀지, 왜 그 길인지 보기에서 고른다.' },
        activity: {
          title: '교실에서 다니기 편한 길', tool: 'map',
          teacher: '"하준이가 앞문으로 들어와 자기 사물함까지 가려면 어느 길이 좋을까요? 막힌 곳은 어디일까요?" 핀을 꽂을 때마다 그 길이 왜 편한지 말하게 한다. "하준이 자리를 문 앞에만 두면 돼요"라는 말이 나오면 "하준이도 사물함·교탁·친구 자리에 가고 싶을 거예요. 길을 넓히면 어떨까요?"라고 되묻는다. 마지막 문항에서 책상을 옮기기 전에 하준이에게 먼저 물어볼 말을 짝과 정하게 한다.',
          task: '교실 칸 지도에서 문항이 말하는 길과 자리를 찾아 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            PIN(ROOM, '앞문으로 들어온 하준이가 지나갈 넓은 길에 핀을 꽂아요.', '넓은 통로', { q: '왜 이 길일까요?', choices: ['넓어서 바퀴가 지나가요', '가장 어두워서', '책상이 많아서'], answer: 0 }, 0.15),
            PIN(ROOM, '가방이 놓여 휠체어가 못 지나가는 곳에 핀을 꽂아요.', '좁은 틈', { q: '어떻게 바꿀까요?', choices: ['가방을 걸고 틈을 넓혀요', '억지로 지나가요', '하준이만 돌아가요'], answer: 0, tail: '바꿀 방법도 골라요.' }, 0.2),
            PIN(ROOM, '하준이가 가려는 끝 자리, 사물함에 핀을 꽂아요.', '사물함', { q: '사물함까지 가려면?', choices: ['넓은 통로로 돌아가요', '책상 위로 넘어가요', '친구가 다 가져다줘요'], answer: 0, tail: '갈 길도 골라요.' }, 0.25),
            { prompt: '책상을 옮기기 전에 하준이에게 물어볼 말을 짝과 정해요.', free: true, talk: true,
              conclude: '길을 넓히면 휠체어를 타는 친구도, 짐을 든 친구도 편해요. 바꾸기 전에 먼저 물어요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 교실에서 다니기 편하게 바꿀 곳 한 곳과 바꿀 방법을 써요.' }] },
        notes: '지도는 가상의 교실이다. 우리 반 자리를 바꿀 때 특정 학생을 이유로 들지 않는다.',
      }),
      C({
        id: 'disab.e34.ask-first.wrap.ask-check', type: 'wrap', title: '먼저 묻기 스스로 점검',
        method: '먼저 묻기 스스로 점검', tool: 'emotion', minutes: 6,
        levels: { easy: '첫 문항("먼저 물었나요?")에만 얼굴 눈금(1~3)을 고르고, 둘째 문항은 교사와 함께 한다.', base: '두 문항에 얼굴 눈금(1~3)을 고른다.', challenge: '두 문항에 눈금을 고르고 다음에 바꿀 점을 한 줄로 쓴다(출구 3번).' },
        wrap: {
          teacher: '"오늘 갈림길과 연습에서 나는 먼저 물었나요? 친구가 말한 방법을 따랐나요?" 눈금은 잘하고 못하고를 재는 것이 아니라 나를 돌아보는 것이라고 말한다. 눈금을 1로 고른 학생에게 "솔직하게 골랐네요. 다음에 한 가지만 바꾼다면 무엇을 할까요?"라고 묻는다. 쉬움 단계 학생은 첫 문항만 스스로 하고 둘째 문항은 교사가 함께 읽어 준다.',
          exitTicket: [
            { type: 'tool', tool: 'emotion', options: { mode: 'scale', situation: '오늘 돕기 전에 먼저 물었나요?', feeling: '뿌듯함', steps: 3, scaleLabels: { 1: '아직', 2: '조금', 3: '잘했어요' } }, prompt: '먼저 물었는지 얼굴 눈금을 골라요.', target: { level: 'any' }, difficulty: 0.1 },
            { type: 'tool', tool: 'emotion', options: { mode: 'scale', situation: '친구가 원하는 방법을 따랐나요?', feeling: '편안함', steps: 3, scaleLabels: { 1: '아직', 2: '조금', 3: '잘했어요' } }, prompt: '친구 말을 따랐는지 얼굴 눈금을 골라요.', target: { level: 'any' }, difficulty: 0.1 },
            { type: 'short', prompt: '다음에 친구를 도울 때 바꿀 점을 한 가지 써요.' },
          ],
        },
        worksheet: {
          title: '먼저 묻기 점검',
          items: [
            { type: 'check', prompt: '오늘 한 것에 표시해요.', options: ['도와주기 전에 먼저 물었어요', '친구가 원하는 방법을 들었어요', '"괜찮아"도 존중했어요'] },
            { type: 'short', prompt: '친구가 "혼자 할게"라고 했을 때 내가 할 말을 써요.' },
          ],
          easy: { note: '"도와줄까?"를 떠올려요.', items: [{ type: 'choice', prompt: '도와주기 전에 먼저 할 일은?', options: ['물어봐요', '바로 해 줘요'], answer: '물어봐요' }] },
        },
      }),
      C({
        id: 'disab.e34.ask-first.wrap.ask-card', type: 'wrap', title: '먼저 묻기 말 카드 묶음',
        method: '먼저 묻기 말 카드 만들기', tool: 'wordcards', minutes: 6,
        levels: { easy: '카드 2장 가운데 먼저 묻는 말 1장을 내 말 카드에 넣는다.', base: '카드 5장 가운데 먼저 묻는 말 3장("도와줄까?"·"어떻게 할까?"·"알겠어")을 골라 넣는다.', challenge: '거절을 들었을 때의 말 카드가 더해진 7장에서 알맞은 4장을 골라 넣는다.' },
        wrap: {
          teacher: '"내 말 카드 묶음에 넣을 말을 골라 볼까요? 언제 쓰는 말인가요?" 카드를 고른 뒤 짝과 한 장면을 정해 소리 내어 주고받게 한다. "불쌍해서 도와줄게"를 넣으려는 학생에게 "이 말을 들은 친구는 어떤 마음일까요? 우리는 친구니까 돕는 거예요"라고 말해 준다.',
          exitTicket: [
            EX('wordcards', PICK('내 말 카드 묶음에 넣을 말을 골라요.', { basket: '내 말 카드' },
              [{ id: 'help', text: '"도와줄까?"', ok: true }, { id: 'pity', text: '"불쌍해서 도와줄게"' }, { id: 'how', text: '"어떻게 할까?"', ok: true }, { id: 'all', text: '"내가 다 해 줄게"' }, { id: 'ok', text: '"알겠어"', ok: true }],
              ['help', 'pity'], [{ id: 'later', text: '"필요하면 말해"', ok: true }, { id: 'why', text: '"왜 싫다고 해?"' }], 0.15)),
            { type: 'choice', prompt: '친구가 "괜찮아, 혼자 할게" 했어요. 할 말은?', options: ['"알겠어, 필요하면 말해"', '"그래도 해 줄게"', '"왜 싫어해?"'], answer: 0, difficulty: 0.1, explain: '친구의 결정을 존중하고 필요할 때 말하라고 해요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '먼저 묻기 말 카드',
          items: [
            { type: 'check', prompt: '내 말 카드에 넣을 말에 표시해요.', options: ['"도와줄까?"', '"어떻게 할까?"', '"내가 다 해 줄게"', '"알겠어"'] },
            { type: 'short', prompt: '내 말 카드에 새로 넣고 싶은 말을 한 줄로 써요.' },
          ],
        },
      }),
    );
  }

  PaperLessons.registerModules(M);
})();
