/* 창체 안전교육 폭력예방 및 신변보호 — 초3-4 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/safety-a.json 의 saf-violence 초3-4.
 * 근거: 「학교안전교육 실시 기준 등에 관한 고시」(교육부고시 제2023-33호) 별표 2 초등학교 폭력예방 및 신변보호
 *   (학교폭력의 예방 및 대처법 / 학교폭력의 종류와 종류별 예방법 / 성폭력 예방 및 대처방안 / 내 몸의 소중함 / 아동학대의 유형 및 대처방안 /
 *    가족폭력의 개념과 대처방안 / 자살 예방 및 생명존중 교육) + 7대 표준안 폭력·신변안전 소분류.
 * 초3-4 기준: 상황 판단(그림+짧은 글), 차례 정하기, 고른 이유 말하기, 짝 토의, 간단한 표·그림그래프. 법 조문·통계 해석·긴 글쓰기는 쓰지 않는다.
 * 이 영역의 틀(모든 모듈): 피해 경험을 묻지 않는다 — 장면은 모두 가명의 가상 인물 이야기다. 장면은 무섭거나 자세하지 않게 쓴다.
 *   잘못은 늘 한 사람(가해자)에게 있고, 말한 어린이는 잘한 것이다. 참은 길을 고른 학생도 나무라지 않는다.
 *   도움 받을 곳 번호는 체계도 concepts 에 있는 것만 쓴다: 117(학교폭력 신고), 112(경찰), 1388(청소년 상담).
 *   마음 돌봄·친구의 위험한 비밀(생명존중) 주제는 방법을 묘사하지 않고 '믿을 어른에게 함께 간다'에만 머문다.
 * 주제 8개(3학년 4 · 4학년 4) × 도입 2 · 활동 4 · 정리 2 = 계획 모듈 64개.
 * 사람 확인: 근거 파일(research-safety.md)에는 고시 항목 제목뿐이라, 아래 문장은 일반 수칙으로 썼다. 확인처는 괄호 안.
 *   - prank-or-bullying.*: 장난/괴롭힘 기준(상대가 싫어함·되풀이·힘 차이 — 체계도 concepts) / 117 = 학교폭력 신고·상담 번호 /
 *     대처 차례("그만해" → 피하기 → 선생님·보호자께 알리기, 보호자와 함께 117) / "알리기는 고자질이 아니다" (교육부·경찰청 117 학교폭력신고센터)
 *   - body-signals.*: 속옷으로 가리는 곳 = 가슴·엉덩이·생식기, 생식기 세부 이름은 교사가 표준안 그림으로 말함 / 불편할 때 몸 신호(두근거림·배 아픔·화끈함·굳음) /
 *     거절 차례(눈 보기 → 큰 목소리로 "싫어요" → 떠나기 → 알리기) / 보호자 곁 병원 진료는 괜찮은 접촉 / 접촉 세 칸 카드 분류 (교육부 학교 성교육 표준안·여성가족부)
 *   - child-abuse.*: 어린이 권리(보호받을·쉴·배울 권리) / "잘못을 말로 타이름"은 아끼는 행동, "말 안 듣는다고 때림"은 신체학대 / 학교가 닫힌 밤에도 지구대·112 /
 *     청소년 상담 센터(1388) = 청소년상담복지센터 / 주민센터는 지도에만 두고 역할을 쓰지 않았다 / 알리는 말 차례(누가 → 어디서 → 무슨 일 — 계획대로,
 *     family-conflict.activity.call-112 의 '어디인지 먼저'와 다르니 하나로 맞출지 확인) (보건복지부·아동권리보장원·경찰청·여성가족부)
 *   - heart-care.*: 마음 신호등(멈추기 → 숨 고르기 → 말하기) / 숨 고르기 5초·5초·3번은 '우리 반 약속' 연습값 / 1388 = 고민 상담 / 강아지 한살이 단계 이름 /
 *     위기 학생 절차(담임·상담교사·보호자) (보건복지부 중앙자살예방센터·교육부 학생 정서·행동 지원 안내)
 *   - violence-types.*: 여섯 종류(신체폭력·언어폭력·따돌림·빼앗기(금품갈취)·강요·사이버폭력) 이름과 카드 분류, 단체방에서 빼기 = 사이버폭력으로 나눔 /
 *     종류별 예방 행동 카드 / 어른 눈이 닿기 어려운 곳(화장실·운동장 구석) (교육부 학교폭력 예방 교육자료, 학교폭력예방법 정의와 대조)
 *   - online-requests.*: 알려 주면 안 되는 정보(이름·학교·주소·전화번호·비밀번호·학원 가는 시간·얼굴 사진) / 대응 차례(대답 멈추기 → 대화 화면 저장 →
 *     보호자께 보여 주기 → 함께 차단·신고), 저장한 화면은 보호자·선생님께만 / 혼자 만나러 가지 않음 (방송통신위원회·경찰청·여성가족부 디지털 성범죄 예방 안내)
 *   - family-conflict.*: 다툼(말로 의견 차이)과 폭력(몸·물건·위협) 구분 / 어린이는 막으려 끼어들지 않고 피해서 알림 / 믿는 이웃 어른을 보호자와 미리 정하기 /
 *     112에 말할 차례(어디인지 → 무슨 일인지 → 이름)와 끊지 않고 기다리기 (경찰청·여성가족부)
 *   - friend-secret.*: 알려야 하는 비밀을 가르는 물음(누가 다칠 수 있나·위험한가·혼자 감당하기 힘든가) / "사라지고 싶다"는 말은 미루지 않고 바로 함께 어른께 /
 *     방과후에는 교무실에서 선생님을 찾음 (보건복지부 생명지킴이 교육·중앙자살예방센터)
 *   - 그래프 자료(이건 멈춰요 투표·기분이 나아지는 방법·안전하다고 느끼는 곳·이야기하고 싶은 사람)는 모두 가상이고 화면 제목에 '가상'을 밝혔다.
 *   - 번호는 체계도 concepts 의 112·117·1388 만 썼다. */
(function () {
  const BASE = { schema: 'edu-module.v1', domain: 'saf-violence', band: '초3-4' };
  const T = (topic, grade) => (o) => Object.assign({}, BASE, { topic: `saf-violence.e34.${topic}`, grades: [grade] }, o);
  const M = [];
  const strip = (p) => String(p).replace(/[.?!]$/, '');
  const idOf = (c) => (typeof c === 'string' ? c : c.id);
  const mix = (groups) => { const out = []; const n = Math.max(...groups.map((g) => g.length)); for (let i = 0; i < n; i++) for (const g of groups) if (g[i] != null) out.push(g[i]); return out; };
  const count = (groups) => groups.reduce((a, g) => a + g.length, 0);
  const slotId = (s) => (typeof s === 'string' ? s : s.id);
  const sortT = (slots, groups) => ({ sort: Object.fromEntries(slots.map((s, i) => [slotId(s), groups[i].map(idOf)])) });

  // 나누기(mindmap sort): 기본 = groups, 쉬움 = 칸마다 앞에서 ne장, 도전 = 칸마다 hard 카드를 더함
  const SORT = (prompt, base, slots, groups, ne, hard, d, more) => {
    const easyG = groups.map((g, i) => g.slice(0, Array.isArray(ne) ? ne[i] : ne));
    const hardG = groups.map((g, i) => g.concat(hard[i] || []));
    const p = strip(prompt);
    return {
      prompt, toolOptions: Object.assign({}, base, { slots, cards: mix(groups) }), target: sortT(slots, groups), difficulty: d,
      levels: {
        easy: { prompt: `${p}(${count(easyG)}장).`, toolOptions: { cards: mix(easyG) }, target: sortT(slots, easyG) },
        challenge: { prompt: `${p}(${count(hardG)}장).`, toolOptions: { cards: mix(hardG) }, target: sortT(slots, hardG) },
      },
      ...more,
    };
  };
  // 나누기(칸 셋 이상): 쉬움 = 앞의 칸 두 개만(칸마다 카드 그대로), 기본 = 칸 전부, 도전 = 칸마다 hard 카드를 더함
  const SORT2 = (prompt, base, slots, groups, hard, d, more) => {
    const hardG = groups.map((g, i) => g.concat(hard[i] || []));
    const p = strip(prompt);
    return {
      prompt, toolOptions: Object.assign({}, base, { slots, cards: mix(groups) }), target: sortT(slots, groups), difficulty: d,
      levels: {
        easy: { prompt: `${p}(가지 2개).`, toolOptions: { slots: slots.slice(0, 2), cards: mix(groups.slice(0, 2)) }, target: sortT(slots.slice(0, 2), groups.slice(0, 2)) },
        challenge: { prompt: `${p}(${count(hardG)}장).`, toolOptions: { cards: mix(hardG) }, target: sortT(slots, hardG) },
      },
      ...more,
    };
  };

  // 차례 놓기(story·kitchen order): 기본 = 카드 전부, 쉬움 = keep 번째 카드들만, 도전 = 틀린 카드(trap) 한 장이 섞인다
  const NAMES = { 2: ['먼저', '다음'], 3: ['처음', '다음', '끝'], 4: ['처음', '다음', '그다음', '끝'] };
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

  // 갈림길(dilemma): 기본 = 장면 둘(보기 3개), 쉬움 = 첫 장면만(바른 보기 + 첫 틀린 보기), 도전 = 끝에서 근거 카드 고르기
  // good: 받는 길 목록(첫 길의 첫 선택이 쉬움 단계의 바른 보기). 바른 첫 보기에는 쉬움 단계 끝 글(ending)을 적는다.
  const easySceneOf = (scene, g0) => Object.assign({}, scene, {
    choices: scene.choices.filter((c) => c.id === g0 || c.id === scene.choices.find((x) => x.id !== g0).id)
      .map((c) => (c.id === g0 ? { id: c.id, text: c.text, result: c.result, impact: c.impact, ending: c.ending } : c)),
  });
  const DIL = (prompt, scene, good, reasons, okReasons, d, more) => {
    const g0 = good[0][0];
    return {
      prompt, toolOptions: { scene }, target: { path: good }, difficulty: d,
      levels: {
        easy: { prompt: `${strip(prompt)}(한 번 골라요).`, toolOptions: { scene: easySceneOf(scene, g0) }, target: { path: [[g0]] } },
        challenge: { prompt: `${strip(prompt)}. 끝에서 근거도 골라요.`, toolOptions: { reasons }, target: { path: good, reasons: okReasons } },
      },
      ...more,
    };
  };

  // 해야 할 것만 표시하는 점검표(kitchen checklist): 쉬움 = easyIdx 번째 항목만, 도전 = 함정 항목(traps)을 더함
  const plain = (list) => list.map((x) => ({ id: x.id, text: x.text }));
  const okOf = (list) => list.filter((x) => x.ok).map((x) => x.id);
  const CHK = (prompt, title, items, easyIdx, traps, d, more) => {
    const easy = easyIdx.map((i) => items[i]);
    const hard = items.concat(traps || []);
    const lv = { easy: { prompt: `${strip(prompt)}(${easy.length}칸).`, toolOptions: { items: plain(easy) }, target: { checklist: okOf(easy) } } };
    if (traps && traps.length) lv.challenge = { prompt: `${strip(prompt)}(${hard.length}칸).`, toolOptions: { items: plain(hard) }, target: { checklist: okOf(hard) } };
    return { prompt, toolOptions: { mode: 'checklist', title, items: plain(items) }, target: { checklist: okOf(items) }, difficulty: d, levels: lv, ...more };
  };

  // 짝 잇기(mindmap·kitchen·wordcards match): rows = [[칸 글, 카드 글], …] 기본 전부, 쉬움 앞 2줄, 도전 = 함정 카드 한 장 더
  const MATCH = (prompt, base, rows, trap, d, more) => {
    const slots = rows.map((r, i) => ({ id: `r${i + 1}`, label: r[0] }));
    const cards = rows.map((r) => r[1]);
    const tg = (n) => ({ match: Object.fromEntries(rows.slice(0, n).map((r, i) => [`r${i + 1}`, r[1]])) });
    return {
      prompt, toolOptions: Object.assign({}, base, { mode: 'match', slots, cards: cards.slice().reverse() }), target: tg(rows.length), difficulty: d,
      levels: {
        easy: { prompt: `${strip(prompt)}(2줄).`, toolOptions: { slots: slots.slice(0, 2), cards: cards.slice(0, 2).reverse() }, target: tg(2) },
        challenge: { prompt: `${strip(prompt)}. 남는 카드가 하나 있어요.`, toolOptions: { cards: [cards[1], trap, cards[0]].concat(cards.slice(2)) }, target: tg(rows.length) },
      },
      ...more,
    };
  };

  // 바구니에 고르기(emotion·wordcards·story pick): cards = [{ id, text, ok? }], 쉬움 = easyIds 카드만, 도전 = hard 카드를 더함
  const PICK = (prompt, base, cards, easyIds, hard, d, more) => {
    const ok = (list) => list.filter((c) => c.ok).map((c) => c.id);
    const easy = cards.filter((c) => easyIds.includes(c.id));
    const all = cards.concat(hard || []);
    const lv = { easy: { prompt: `${strip(prompt)}(${easy.length}장).`, toolOptions: { cards: plain(easy) }, target: { pick: ok(easy) } } };
    if (hard && hard.length) lv.challenge = { prompt: `${strip(prompt)}(${all.length}장).`, toolOptions: { cards: plain(all) }, target: { pick: ok(all) } };
    return { prompt, toolOptions: Object.assign({ mode: 'pick' }, base, { cards: plain(cards) }), target: { pick: ok(cards) }, difficulty: d, levels: lv, ...more };
  };

  // 말풍선 채우기(story·wordcards fill): rows = [[말풍선 글(___ 빈칸), 정답 카드], …], wrong = 함정 카드. 쉬움 = 첫 칸, 기본 = 앞 두 칸, 도전 = 전부
  const FILL = (prompt, who, rows, wrong, d, more) => {
    const slots = rows.map((r, i) => ({ id: `b${i + 1}`, who: Array.isArray(who) ? who[i] : who, label: r[0] }));
    const tg = (k) => ({ fill: Object.fromEntries(rows.slice(0, k).map((r, i) => [`b${i + 1}`, r[1]])) });
    const cardsOf = (k) => rows.slice(0, k).map((r) => r[1]).concat(wrong.slice(0, Math.max(1, k - 1))).reverse();
    const p = strip(prompt);
    const n = Math.min(2, rows.length);
    return {
      prompt, toolOptions: { mode: 'fill', slots: slots.slice(0, n), cards: cardsOf(n) }, target: tg(n), difficulty: d,
      levels: {
        easy: { prompt: `${p}(1칸).`, toolOptions: { slots: slots.slice(0, 1), cards: cardsOf(1) }, target: tg(1) },
        challenge: { prompt: `${p}(${rows.length}칸).`, toolOptions: { slots, cards: cardsOf(rows.length) }, target: tg(rows.length) },
      },
      ...more,
    };
  };

  // 칸 지도 핀: 쉬움 = 핀 자리 이름이 바로 보임(readout은 activity.levels), 도전 = '왜 여기일까' 보기 고르기를 함께 한다(ask)
  const PIN = (map, prompt, region, why, d, more) => ({
    prompt, toolOptions: map, target: { region }, difficulty: d,
    levels: { challenge: { prompt: `${strip(prompt)}. 까닭도 골라요.`, toolOptions: { ask: { q: why.q, choices: why.choices } }, target: { region, pick: why.answer } } },
    ...more,
  });

  // 갈림 상황 하나(emotion branch): 쉬움 = 보기 2개(바른 것 + 첫 틀린 것), 기본 = 보기 3개, 도전 = 결과를 맞힌 뒤에만 보임
  const BR = (prompt, situation, choices, good, d, more) => {
    const two = choices.filter((c) => c.id === good || c.id === choices.find((x) => x.id !== good).id);
    return {
      prompt, toolOptions: { mode: 'branch', situation, choices }, target: { choice: good }, difficulty: d,
      levels: { easy: { toolOptions: { choices: two } }, challenge: { toolOptions: { revealAfterCheck: true } } },
      ...more,
    };
  };

  // 스스로 점검(timer selfCheck) 출구 질문: 쉬움 앞 2칸, 기본 앞 3칸(또는 baseN), 도전 4칸
  const SELF = (title, checks, prompt, baseN) => ({
    type: 'tool', tool: 'timer', options: { title }, prompt: prompt || '오늘 한 것에 스스로 표시해요.', target: { selfCheck: checks.slice(0, baseN || 3) }, difficulty: 0.1,
    levels: { easy: { target: { selfCheck: checks.slice(0, 2) } }, challenge: { target: { selfCheck: checks.slice(0, 4) } } },
  });
  // 활동 문항 모양 → 출구 교구 질문 모양
  const EX = (tool, it) => ({ type: 'tool', tool, prompt: it.prompt, options: it.toolOptions, target: it.target, difficulty: it.difficulty, levels: it.levels });
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  const PEOPLE = [{ value: 5, name: '5명' }, { value: 1, name: '1명' }];

  // ======================================================================================================
  // 3학년 · 장난일까 괴롭힘일까 (별표 2 초등 폭력예방 및 신변보호 '학교폭력의 예방 및 대처법 알기')
  // ======================================================================================================
  {
    const C = T('prank-or-bullying', 3);
    const VOTE = [['별명 부르기', 12], ['물건 숨기기', 8], ['끼워 주지 않기', 6]];
    const VPIC = { type: 'picture', title: '"이건 멈춰요" 투표(가상의 우리 반)', unit: '명', xLabel: '행동', yLabel: '친구 수', icons: PEOPLE, icon: 'person' };
    M.push(
      C({
        id: 'saf-violence.e34.prank-or-bullying.intro.two-scenes', type: 'intro', title: '두 쉬는 시간, 무엇이 다를까',
        method: '두 쉬는 시간 장면 비교하기', tool: 'story', minutes: 6,
        levels: { easy: '교사가 두 친구 얼굴을 손으로 짚어 주고, 다른 점 1개를 함께 고른다.', base: '두 장면을 보고 다른 점 2개를 고른다.', challenge: '다른 점 2개를 고른 뒤 짝에게 "왜냐하면"으로 이유를 말한다.' },
        intro: {
          teacher: '"두 그림 모두 쉬는 시간이에요. 무엇이 다른가요?" 첫 그림은 둘 다 웃으며 술래잡기를 하고, 둘째 그림은 한 친구만 웃고 별명을 듣는 친구는 얼굴이 굳어 있다. 시연 단추로 다른 점 카드가 바구니에 담기는 것을 보인다. "둘 다 놀이니까 똑같아요"라는 말이 나오면 "별명을 듣는 친구 얼굴을 볼까요? 저 친구도 재미있을까요?"라고 되묻는다. 오늘은 장난과 괴롭힘을 가르는 눈을 기른다고 밝힌다.',
          student: '두 쉬는 시간 그림을 보고 다른 점을 골라요. 친구들의 얼굴을 잘 살펴보아요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '다른 점', cards: [{ id: 'both', text: '둘 다 웃어요' }, { id: 'one', text: '한 명만 웃어요' }, { id: 'stiff', text: '얼굴이 굳었어요' }, { id: 'turn', text: '번갈아 술래해요' }, { id: 'again', text: '날마다 그래요' }], shuffle: false }, sequence: [{ pick: ['one'] }, { pick: ['one', 'stiff'] }] },
          art: { draw: 'two paper school playground panels side by side: on the left two paper children laughing together while playing tag, on the right one paper child grinning and pointing while another child stands still with a stiff face', banner: '무엇이 다를까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '"놀림 받은 적 있나요?"처럼 겪은 일을 묻지 않는다. 그림 속 가상 친구의 일로만 이야기한다.',
      }),
      C({
        id: 'saf-violence.e34.prank-or-bullying.intro.two-faces', type: 'intro', title: '숨긴 친구와 가방 주인의 마음',
        method: '같은 장면 속 두 친구 마음 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '마음 카드 4장 가운데 두 사람 마음을 함께 고른다.', base: '마음 카드 6장 가운데 두 사람의 마음을 각각 고른다.', challenge: '두 사람 마음이 왜 다른지 한 문장으로 짝에게 말한다.' },
        intro: {
          teacher: '"민이가 준이 가방을 숨기고 웃어요. 민이의 마음은요? 가방을 찾는 준이의 마음은요?" 시연 단추로 두 사람 칸에 마음 카드가 놓이는 것을 보인다. "준이도 웃으면 재미있는 거예요"라는 말이 나오면 "웃는 얼굴 뒤에 걱정이 숨어 있을 수도 있을까요?"라고 되묻는다. 같은 장면에서도 두 사람 마음이 다를 수 있고, 장난인지는 상대 마음으로 정해진다는 것을 짚는다.',
          student: '가방을 숨긴 친구와 가방 주인의 마음을 하나씩 골라요. 두 마음이 같은지 달라요?',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'hider', label: '가방을 숨긴 민이' }, { id: 'owner', label: '가방을 찾는 준이' }], cards: ['신남', '속상함', '걱정', '편안함', '화남', '뿌듯함'], shuffle: false }, sequence: [{ match: { hider: '신남' } }, { match: { hider: '신남', owner: '속상함' } }] },
          art: { draw: 'a paper classroom where one paper child hides a school bag behind a cabinet and giggles, while another paper child looks around the empty desk with a worried face', banner: '두 사람의 마음은 같을까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
      }),
      C({
        id: 'saf-violence.e34.prank-or-bullying.activity.criteria-sort', type: 'activity', title: '장난과 괴롭힘 나누기',
        method: '장난·괴롭힘 장면 나누고 기준 고르기', tool: 'mindmap', minutes: 14,
        levels: { easy: '나누기 카드 4장(놓으면 바로 맞는지 알림), 기준 잇기 2줄.', base: '나누기 카드 6장, 기준 3개(싫어함·되풀이·힘 차이)를 장면과 잇는다.', challenge: '헷갈리는 카드 2장이 더해진 8장을 나누고, 기준 잇기에 남는 카드 한 장을 가려낸 뒤 짝과 기준을 토의한다.' },
        activity: {
          title: '장난과 괴롭힘 나누기', tool: 'mindmap',
          teacher: '"이 장면에서 상대도 즐거운가요? 한 번인가요, 계속인가요? 한쪽만 힘이 센가요?" 카드를 놓을 때마다 세 물음 가운데 하나로 까닭을 말하게 한다. "나는 장난이었어요"라는 카드에서 멈추게 하고 "장난인지는 하는 사람이 정할까요, 받는 사람이 정할까요?"라고 묻는다. 웃고 있어도 싫을 수 있고, "그만"이라고 하면 바로 멈추는 것이 장난이라는 것을 짚는다.',
          task: '장면 카드를 장난과 괴롭힘으로 나누고, 괴롭힘인 까닭을 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORT('쉬는 시간 장면을 장난과 괴롭힘으로 나누어요.', { topic: '쉬는 시간' }, ['장난', '괴롭힘'], [['서로 간지럼 태우기', '둘 다 웃는 술래잡기', '번갈아 술래 하기'], ['매일 별명 부르기', '한 명만 계속 술래', '싫다는데 툭툭 치기']], 2, [['"그만" 하자 멈춤'], ['웃지만 싫은 놀림']], 0.15),
            SORT('교실 장면을 장난과 괴롭힘으로 나누어요.', { topic: '교실에서' }, ['장난', '괴롭힘'], [['함께 웃는 말장난', '돌아가며 정한 역할', '서로 바꾼 자리 놀이'], ['여럿이 한 명 흉내', '힘센 친구가 자리 뺏기', '날마다 필통 숨기기']], 2, [['같이 만든 별명 놀이'], ['"장난이야" 하며 계속']], 0.2),
            MATCH('괴롭힘 장면과 그 까닭을 이어요.', { topic: '왜 괴롭힘일까' }, [['싫다는데 계속 놀려요', '상대가 싫어해요'], ['날마다 별명을 불러요', '계속 되풀이돼요'], ['힘센 친구가 뺏어 가요', '힘이 한쪽만 세요']], '나는 재미있어요', 0.25, { conclude: '상대가 싫어하거나, 계속되거나, 힘이 한쪽만 세면 장난이 아니라 괴롭힘이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '장난과 괴롭힘을 가르는 것은 누구의 마음인가요?', options: ['하는 사람 마음', '받는 사람 마음', '구경하는 사람 마음'], answer: '받는 사람 마음' }] },
        notes: '장면 카드의 인물은 모두 가상이다. 우리 반 실제 친구 이름을 카드에 넣지 않는다.',
      }),
      C({
        id: 'saf-violence.e34.prank-or-bullying.activity.nickname-choice', type: 'activity', title: '갈림길: 별명이 계속될 때',
        method: '별명이 계속될 때 갈림길', tool: 'dilemma', minutes: 13,
        levels: { easy: '갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '갈림 2번, 보기 3개씩 고르며 결과를 따라간다(셋째 문항은 주변 친구 입장).', challenge: '갈림 2번을 지난 뒤 근거 카드 3장 가운데 알맞은 것을 고른다.' },
        activity: {
          title: '갈림길: 별명이 계속될 때', tool: 'dilemma',
          teacher: '"이 길을 고르면 누구의 마음이 어떻게 될까요?" 결과 장면을 소리 내어 읽고 다음 장면에서 다시 고른다. 혼자 참는 길을 고른 학생을 나무라지 않고 "참는 마음도 이해해요. 그런데 혼자 참으면 별명이 멈출까요?"라고 되물어 다른 길도 가 보게 한다. "알리면 고자질이에요"라는 말에는 "고자질은 친구를 혼나게 하려는 것, 알리기는 친구를 지키려는 것이에요"라고 구분해 준다. 놀리는 쪽이 잘못이지 별명을 듣는 친구 잘못이 아니라는 것을 꼭 말한다.',
          task: '장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('듣기 싫은 별명이 날마다 들려요.', {
              text: '반 친구들이 날마다 하늘이를 "느림보"라고 불러요. 하늘이는 그 별명이 싫어요. 내가 하늘이라면?', motif: 'cloud',
              choices: [
                { id: 'say', text: '"그만해, 싫어" 분명히 말한다', result: '친구들이 잠깐 멈칫했어요.', ending: '싫다고 분명히 말한 것은 용기 있는 일이에요.', next: {
                  text: '다음 날 친구들이 "장난인데?" 하며 또 불러요.', choices: [
                    { id: 'tell', text: '선생님께 알린다', result: '선생님이 반 친구들과 이야기를 나누셨어요.', impact: [{ who: '하늘이', text: '마음이 놓였어요', tone: 1 }], ending: '알렸더니 별명이 멈췄어요. 알린 것은 잘한 일이에요.' },
                    { id: 'back', text: '똑같이 별명으로 갚는다', result: '서로 별명을 부르다 다툼이 커졌어요.', impact: [{ who: '하늘이와 친구들', text: '모두 속상해졌어요', tone: -1 }], why: '똑같이 갚으면 다툼이 커져요. 어른께 알려요.' },
                    { id: 'hide', text: '혼자 꾹 참는다', result: '별명이 계속되고 마음이 무거워요.', impact: [{ who: '하늘이', text: '혼자 힘들어요', tone: -1 }], why: '혼자 참지 않아도 돼요. 믿는 어른께 알려요.' },
                  ] } },
                { id: 'laugh', text: '같이 웃어 넘긴다', result: '친구들은 하늘이도 좋아한다고 생각했어요.', impact: [{ who: '하늘이', text: '싫은 마음을 몰라줘요', tone: -1 }], why: '웃으면 싫은 마음이 전해지지 않아요. 분명히 말해요.' },
                { id: 'cry', text: '아무 말 없이 자리를 피한다', result: '그 자리는 피했지만 다음 날 또 들렸어요.', impact: [{ who: '하늘이', text: '별명이 멈추지 않았어요', tone: 0 }] },
              ] }, [['say', 'tell']],
            [{ id: 'stop', text: '싫다고 해도 계속되면 괴롭힘이라서' }, { id: 'help', text: '어른은 괴롭힘을 멈추게 도울 수 있어서' }, { id: 'tattle', text: '알리면 고자질이라서', why: '알리기는 친구와 나를 지키는 일이에요. 고자질과 달라요.' }], ['stop', 'help'], 0.2),
            DIL('친구가 별명 놀이에 같이 하재요.', {
              text: '짝 하준이가 "너도 하늘이 느림보라고 불러 봐. 재밌잖아"라고 해요.', motif: 'house',
              choices: [
                { id: 'no', text: '"하늘이가 싫어해. 안 할래"', result: '하준이가 머쓱해했어요.', ending: '함께하지 않은 것만으로도 하늘이를 지켰어요.', next: {
                  text: '하준이는 혼자 계속 부르고, 하늘이가 고개를 숙여요.', choices: [
                    { id: 'with', text: '하늘이 곁에 가서 함께 선생님께 간다', result: '선생님이 하늘이 이야기를 들어 주셨어요.', impact: [{ who: '하늘이', text: '혼자가 아니에요', tone: 1 }], ending: '곁에 있어 주고 함께 알려서 하늘이를 지켰어요.' },
                    { id: 'watch', text: '못 본 척 자리로 간다', result: '하늘이는 혼자 남았어요.', impact: [{ who: '하늘이', text: '외로워요', tone: -1 }], why: '보고만 있으면 괴롭힘이 계속될 수 있어요.' },
                    { id: 'fight', text: '하준이와 몸싸움한다', result: '둘이 다툼이 나 더 큰 일이 됐어요.', impact: [{ who: '나와 하준이', text: '다칠 수 있어요', tone: -1 }], why: '싸우지 말고 어른께 알려요.' },
                  ] } },
                { id: 'join', text: '같이 별명을 부른다', result: '하늘이 얼굴이 더 어두워졌어요.', impact: [{ who: '하늘이', text: '더 아파요', tone: -1 }], why: '함께 부르면 나도 괴롭힘을 하는 사람이 돼요.' },
                { id: 'giggle', text: '옆에서 웃기만 한다', result: '하준이가 더 신나서 불렀어요.', impact: [{ who: '하늘이', text: '모두 놀리는 것 같아요', tone: -1 }], why: '웃어 주면 놀리는 친구가 더 신나요.' },
              ] }, [['no', 'with']],
            [{ id: 'feel', text: '하늘이 마음이 싫다고 말해서' }, { id: 'tell', text: '알리면 하늘이를 지킬 수 있어서' }, { id: 'all', text: '다들 하니까 괜찮아서', why: '여럿이 한다고 괜찮아지지 않아요.' }], ['feel', 'tell'], 0.25),
            DIL('주변 친구라면 어떻게 할까요?', {
              text: '복도에서 하늘이가 또 별명을 듣고 혼자 서 있는 것을 보았어요.', motif: 'star',
              choices: [
                { id: 'near', text: '"괜찮아?" 하고 곁에 간다', result: '하늘이가 조금 웃었어요.', ending: '곁에 가 준 것만으로도 하늘이에게 힘이 됐어요.', next: {
                  text: '하늘이가 "말하면 더 놀릴까 봐 걱정돼"라고 해요.', choices: [
                    { id: 'go', text: '"같이 선생님께 가자"', result: '둘이 함께 담임 선생님께 갔어요.', impact: [{ who: '하늘이', text: '든든해요', tone: 1 }], ending: '함께 알리면 걱정도 반으로 줄어요.' },
                    { id: 'secret', text: '"그럼 비밀로 해 줄게"', result: '별명은 그 뒤에도 계속됐어요.', impact: [{ who: '하늘이', text: '계속 힘들어요', tone: -1 }], why: '괴롭힘은 비밀로 두면 멈추지 않아요.' },
                    { id: 'solo', text: '내가 대신 혼내 준다', result: '말다툼이 커졌어요.', impact: [{ who: '나', text: '다툼에 끼었어요', tone: -1 }], why: '혼자 해결하려 하지 말고 어른과 함께해요.' },
                  ] } },
                { id: 'pass', text: '못 본 척 지나간다', result: '하늘이는 혼자 서 있었어요.', impact: [{ who: '하늘이', text: '외로워요', tone: -1 }], why: '보고 지나치면 괴롭힘이 계속돼요.' },
                { id: 'look', text: '멀리서 구경한다', result: '구경하는 친구가 늘었어요.', impact: [{ who: '하늘이', text: '더 창피해요', tone: -1 }], why: '구경도 놀리는 친구에게 힘을 줘요.' },
              ] }, [['near', 'go']],
            [{ id: 'with', text: '함께 가면 하늘이가 덜 걱정해서' }, { id: 'adult', text: '어른이 놀림을 멈출 수 있어서' }, { id: 'none', text: '내 일이 아니라서', why: '주변 친구도 괴롭힘을 멈추게 도울 수 있어요.' }], ['with', 'adult'], 0.3, { conclude: '싫다고 말하고, 혼자 참지 말고, 친구와 함께 어른께 알려요. 잘못은 놀리는 쪽에 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '괴롭힘을 알리는 것은 고자질이 아니라 친구를 ___ 일이에요.', answer: '지키는' }] },
      }),
      C({
        id: 'saf-violence.e34.prank-or-bullying.activity.response-order', type: 'activity', title: '괴롭힘 대처 차례 놓기',
        method: '괴롭힘 대처 차례 놓기', tool: 'kitchen', minutes: 14,
        levels: { easy: '카드 3장을 차례대로 놓는다(놓으면 바로 맞는지 알림).', base: '카드 4장을 차례대로 놓는다.', challenge: '필요 없는 카드(똑같이 갚기 등) 한 장이 섞인 5장에서 그것을 빼고 4장을 놓는다.' },
        activity: {
          title: '괴롭힘 대처 차례 놓기', tool: 'kitchen',
          teacher: '"맨 먼저 할 일은 무엇일까요? 말해도 계속되면요?" 카드를 다 놓으면 모둠이 차례대로 소리 내어 읽는다. "똑같이 갚기" 카드를 넣으려는 학생에게 "똑같이 하면 괴롭힘이 멈출까요, 커질까요?"라고 묻는다. 117은 학교폭력을 알리고 도움을 받는 번호라는 것, 선생님·보호자께 먼저 말해도 된다는 것을 짚는다.',
          task: '괴롭힘을 받거나 보았을 때 할 일 카드를 차례대로 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORD('괴롭힘을 받을 때 할 일을 차례로 놓아요.', { autoMotif: false, title: '괴롭힘을 받을 때' }, [{ id: 'stop', text: '"그만해" 말하기' }, { id: 'leave', text: '그 자리 피하기' }, { id: 'teacher', text: '선생님께 알리기' }, { id: 'parent', text: '보호자께도 알리기' }], [0, 1, 2], { id: 'revenge', text: '똑같이 갚기', why: '똑같이 갚으면 다툼이 커져요.' }, 0.15),
            ORD('괴롭힘을 본 친구가 할 일을 차례로 놓아요.', { autoMotif: false, title: '괴롭힘을 보았을 때' }, [{ id: 'near', text: '친구 곁에 가 주기' }, { id: 'move', text: '함께 자리 옮기기' }, { id: 'tell', text: '선생님께 같이 알리기' }, { id: 'care', text: '다음 날도 살펴 주기' }], [0, 2, 3], { id: 'watch', text: '구경만 하기', why: '구경하면 놀리는 친구가 더 신나요.' }, 0.2),
            ORD('117에 도움을 청할 때 차례로 놓아요.', { autoMotif: false, title: '117에 알릴 때' }, [{ id: 'adult', text: '보호자께 먼저 말하기' }, { id: 'call', text: '함께 117 누르기' }, { id: 'what', text: '있었던 일 말하기' }, { id: 'follow', text: '안내 잘 듣기' }], [1, 2, 3], { id: 'prank', text: '장난 전화 하기', why: '장난 전화는 도움이 꼭 필요한 친구를 막아요.' }, 0.25, { conclude: '"그만해" → 피하기 → 선생님·보호자께 알리기. 117에서도 도움을 받을 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '학교폭력을 알리고 도움을 받는 번호는?', options: ['117', '친구 집 번호', '번호는 없어요'], answer: '117' }] },
      }),
      C({
        id: 'saf-violence.e34.prank-or-bullying.activity.stop-role', type: 'activity', title: '"그만해" 역할놀이',
        method: "짝과 '그만해' 역할놀이와 점검", tool: 'timer', minutes: 13,
        levels: { easy: '연습 전 안전 점검, 몸짓 차례 맞추기, 짝 점검 2칸(목소리·눈).', base: '안전 점검, 몸짓 차례, 짝 점검 3칸(목소리·눈·몸).', challenge: '짝 점검 3칸을 한 뒤 짝에게 좋았던 점 한 가지를 말해 준다(교사 진행).' },
        activity: {
          title: '"그만해" 역할놀이', tool: 'timer',
          teacher: '"작은 목소리로 고개를 숙이고 \'그만해\'라고 하면 상대가 알아들을까요?" 교사가 두 가지 말투를 보여 준 뒤 짝과 역할을 바꿔 가며 연습한다. 놀리는 역할은 "흉내만, 실제 별명은 안 써요"라고 정해 준다. 웃음이 터지면 "연습도 진지하게 해야 진짜 때 몸이 기억해요"라고 말한다. 연습이 끝나면 짝이 해낸 칸에 표시해 주게 한다.',
          task: '연습 전 안전 점검을 하고, 몸짓 차례를 맞춘 뒤, 짝이 해낸 것에 표시해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '역할놀이 전에 안전 약속에 모두 표시해요.', toolOptions: { title: '역할놀이 약속', safety: ['몸은 닿지 않아요', '진짜 별명은 안 써요', '역할을 바꿔 해요'] }, target: { safety: true }, difficulty: 0.1 },
            { prompt: '"그만해"를 말하는 몸짓을 차례대로 놓아요.', toolOptions: { title: '"그만해" 몸짓', cards: ['자리를 떠나요', '눈을 봐요', '몸을 바로 세워요', '단호하게 말해요'] }, target: { order: ['몸을 바로 세워요', '눈을 봐요', '단호하게 말해요', '자리를 떠나요'] }, difficulty: 0.2 },
            { prompt: '짝이 해낸 것에 표시해 주어요.', toolOptions: { title: '짝 점검' }, target: { selfCheck: ['또렷한 목소리', '눈을 봤어요', '몸을 세웠어요'] }, difficulty: 0.1,
              levels: { easy: { prompt: '짝이 해낸 것에 표시해 주어요(2칸).', target: { selfCheck: ['또렷한 목소리', '눈을 봤어요'] } } },
              conclude: '몸을 세우고, 눈을 보고, 또렷하게 "그만해". 그래도 계속되면 떠나서 알려요.' },
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '연습에서 내가 한 것에 표시해요.', options: ['몸을 바로 세웠어요', '눈을 보고 말했어요', '또렷한 목소리로 말했어요'] }] },
        notes: '역할놀이에서 실제 친구의 별명이나 놀림말을 쓰지 않는다. 놀리는 역할은 교사가 정해 준 짧은 말("야, 느림보!")만 쓴다.',
      }),
      C({
        id: 'saf-violence.e34.prank-or-bullying.wrap.criteria-words', type: 'wrap', title: '괴롭힘을 가르는 말 고르기',
        method: '괴롭힘을 가르는 말 3개 고르기', tool: 'wordcards', minutes: 7,
        levels: { easy: '낱말 카드 4장 가운데 기준 2장을 고른다.', base: '낱말 카드 6장 가운데 기준 3장을 고른다.', challenge: '기준 3장을 고른 뒤 기준마다 오늘 본 장면 하나씩을 짝에게 말한다(교사 진행).' },
        wrap: {
          teacher: '"오늘 장난과 괴롭힘을 가른 말 세 가지는 무엇이었나요?" 카드를 고른 뒤 고른 기준마다 오늘 본 장면을 하나씩 떠올려 말하게 한다. "장난이었어"를 고른 학생에게 "하는 사람이 장난이라고 하면 받는 사람 마음은 괜찮아질까요?"라고 되묻는다.',
          exitTicket: [
            EX('wordcards', PICK('장난과 괴롭힘을 가르는 기준을 골라요.', { basket: '괴롭힘 기준' }, [{ id: 'hate', text: '상대가 싫어해요', ok: true }, { id: 'fun', text: '나는 재미있어요' }, { id: 'again', text: '계속 되풀이돼요', ok: true }, { id: 'all', text: '다들 해요' }, { id: 'power', text: '힘이 한쪽만 세요', ok: true }, { id: 'joke', text: '장난이었어요' }], ['hate', 'fun', 'again', 'all'], null, 0.15)),
            { type: 'choice', prompt: '친구가 "그만해"라고 하면 장난은 어떻게 해요?', options: ['더 재미있게 해요', '바로 멈춰요', '웃으면 계속해요'], answer: 1, difficulty: 0.1, explain: '"그만해"를 들으면 바로 멈추는 것이 장난의 약속이에요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '장난일까 괴롭힘일까',
          items: [
            { type: 'check', prompt: '괴롭힘을 가르는 기준에 표시해요.', options: ['상대가 싫어해요', '계속 되풀이돼요', '힘이 한쪽만 세요', '나는 재미있어요'] },
            { type: 'short', prompt: '친구가 싫어할 때 내가 할 말을 한 줄로 써요.' },
          ],
          easy: { note: '받는 친구의 얼굴을 떠올려 보아요.', items: [{ type: 'choice', prompt: '친구가 싫어하면?', options: ['멈춰요', '계속해요'], answer: '멈춰요' }] },
        },
      }),
      C({
        id: 'saf-violence.e34.prank-or-bullying.wrap.stop-graph', type: 'wrap', title: '"이건 멈춰요" 투표 그래프',
        method: "'이건 멈춰요' 투표 그림그래프 만들기", tool: 'chart', minutes: 7,
        levels: { easy: '항목 2개의 그림그래프를 완성한다(첫 항목 그림은 미리 놓여 있다).', base: '항목 3개의 그림그래프를 완성하고 가장 많은 행동을 고른다.', challenge: '그래프를 완성하고 가장 많이 고른 행동과 그 까닭을 말한다(교사 진행).' },
        wrap: {
          teacher: '"우리 반(가상)이 \'이건 꼭 멈춰요\'로 가장 많이 고른 행동은 무엇일까요?" 표의 수를 함께 읽고 그림그래프를 완성한다. 큰 그림을 1명으로 세는 학생에게 "큰 그림 하나는 몇 명이었나요?"라고 되묻는다. 가장 많은 행동을 찾으면 "이 행동이 왜 괴롭힘이 될 수 있을까요?"라고 오늘 배운 기준으로 까닭을 말하게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'chart', options: Object.assign({}, VPIC, { mode: 'build', data: VOTE }), prompt: '표를 보고 "이건 멈춰요" 그림그래프를 완성해요.', target: { build: true }, difficulty: 0.2,
              levels: { easy: { prompt: '표를 보고 항목 2개의 그림그래프를 완성해요.', toolOptions: { data: VOTE.slice(0, 2), given: [0] }, target: { build: true } } } },
            { type: 'choice', prompt: '그래프에서 가장 많이 고른 행동은?', options: ['별명 부르기', '물건 숨기기', '끼워 주지 않기'], answer: 0, difficulty: 0.15, explain: '별명 부르기가 12명으로 가장 많아요.' },
            { type: 'short', prompt: '우리 반에서 멈추고 싶은 행동과 까닭을 한 줄로 써요.' },
          ],
        },
        worksheet: {
          title: '"이건 멈춰요" 투표(가상)',
          items: [
            { type: 'table', prompt: '표의 빈칸을 채워요.', columns: ['행동', '친구 수(명)'], cells: [['별명 부르기', '12'], ['물건 숨기기', ''], ['끼워 주지 않기', '6']], answer: '8' },
            { type: 'short', prompt: '"끼워 주지 않기"를 멈추려면 우리 반이 무엇을 할 수 있을까요?' },
          ],
        },
        notes: '그래프 자료는 가상이다. 실제 반 투표를 할 때는 손들기나 무기명 쪽지로 하고, 특정 친구를 떠올리게 하는 항목은 넣지 않는다.',
      }),
    );
  }

  // ======================================================================================================
  // 3학년 · 몸의 신호와 경계 지키기 (별표 2 초등 폭력예방 및 신변보호 '성폭력 예방 및 대처방안 알기'·'내 몸의 소중함을 알기')
  // ======================================================================================================
  {
    const C = T('body-signals', 3);
    M.push(
      C({
        id: 'saf-violence.e34.body-signals.intro.body-names', type: 'intro', title: '몸의 바른 이름 알기',
        method: '몸의 바른 이름 고르기', tool: 'body', minutes: 6,
        levels: { easy: '몸 그림에서 부위 4곳(어깨·팔꿈치·무릎·발목)의 이름을 함께 짚는다.', base: '부위 6곳(가슴·배 더함)을 짚고, 속옷으로 가리는 곳의 바른 이름을 교사와 함께 말한다.', challenge: '6곳을 짚은 뒤 "왜 바른 이름을 알아야 할까"에 짝과 까닭을 말한다(교사 진행).' },
        intro: {
          teacher: '"우리 몸의 이름을 바르게 알면 무엇이 좋을까요?" 시연 단추로 종이 몸에 어깨·팔꿈치·무릎·발목, 이어서 가슴·배가 짚이는 것을 보인다. 그다음 학교 성교육 그림 자료를 보이며 "속옷으로 가리는 곳은 가슴·엉덩이·생식기예요. 이곳도 다른 곳처럼 바른 이름이 있어요"라고 차분히 말한다. 웃음이 나오면 "부끄러운 말이 아니라 내 몸의 이름이에요"라고 말해 준다. 바른 이름을 알면 아프거나 불편할 때 어른에게 정확히 말할 수 있다는 것을 짚는다.',
          student: '몸 그림에서 짚는 곳의 바른 이름을 따라 말해요. 속옷으로 가리는 곳의 이름도 알아보아요.',
          demo: { tool: 'body', options: { mode: 'parts', parts: ['어깨', '팔꿈치', '무릎', '발목', '가슴', '배'], names: true }, sequence: [{ parts: ['어깨', '팔꿈치', '무릎', '발목'] }, { parts: ['어깨', '팔꿈치', '무릎', '발목', '가슴', '배'] }] },
          art: { draw: 'a friendly paper body outline of a child in a plain t-shirt and shorts standing with arms open, small paper name tags floating near the shoulder, elbow, knee and ankle', banner: '내 몸의 바른 이름', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '몸 교구에는 엉덩이·생식기 칸이 없어 가슴·배까지만 짚는다. 속옷으로 가리는 곳의 이름은 학교 성교육 표준안 그림 자료를 함께 보이며 교사가 말한다. 학생의 몸을 짚게 하거나 만지게 하지 않는다.',
      }),
      C({
        id: 'saf-violence.e34.body-signals.intro.signal-faces', type: 'intro', title: '불편할 때 몸이 보내는 신호',
        method: '불편할 때 몸의 신호 그림 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '신호 카드 3장 가운데 2장을 함께 고른다.', base: '카드 5장 가운데 불편할 때의 신호를 모두 고른다.', challenge: '신호를 고른 뒤 그 신호가 들면 무엇을 할지 짝에게 말한다(교사 진행).' },
        intro: {
          teacher: '"그림 속 별이는 누가 싫다는데 계속 안으려 해서 불편해요. 별이 몸은 어떤 신호를 보낼까요?" 시연 단추로 신호 카드가 바구니에 담기는 것을 보인다. "신호는 그냥 참으면 사라져요"라는 말이 나오면 "몸이 보내는 신호는 \'지금 싫어, 도움이 필요해\'라는 뜻일 수 있어요. 들어 주어야 할까요?"라고 되묻는다. 이 신호가 들면 거절하고, 떠나고, 알리면 된다고 짚는다.',
          student: '그림 속 친구가 불편할 때 몸에 나타나는 신호를 골라요.',
          demo: { tool: 'emotion', options: { mode: 'pick', basket: '불편할 때 신호', cards: [{ id: 'heart', text: '가슴이 두근두근' }, { id: 'tummy', text: '배가 살살 아파요' }, { id: 'hot', text: '얼굴이 화끈해요' }, { id: 'smile', text: '편하게 웃어요' }, { id: 'stiff', text: '몸이 굳어요' }], shuffle: false }, sequence: [{ pick: ['heart', 'tummy'] }, { pick: ['heart', 'tummy', 'hot', 'stiff'] }] },
          art: { draw: 'a paper child standing with arms crossed and a small worried face, little paper wiggle lines drawn around the chest and tummy to show a racing heart and a tight stomach', banner: '몸이 보내는 신호', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '그림 속 가상 인물의 신호로만 이야기한다. "이런 느낌이 든 적 있어요?"라고 묻지 않는다.',
      }),
      C({
        id: 'saf-violence.e34.body-signals.activity.touch-three', type: 'activity', title: '접촉 장면 세 칸 나누기',
        method: '접촉 장면 세 칸 나누기', tool: 'mindmap', minutes: 14,
        levels: { easy: '두 칸(괜찮아요·불편해요)에 카드 4장을 나눈다(놓으면 바로 맞는지 알림).', base: '세 칸(괜찮아요·불편해요·꼭 알려요)에 카드 6장을 나눈다.', challenge: '같은 행동이 상황에 따라 달라지는 카드가 칸마다 더해진 9장을 나누고 까닭을 말한다.' },
        activity: {
          title: '접촉 장면 세 칸 나누기', tool: 'mindmap',
          teacher: '"이 접촉은 두 사람 모두 괜찮나요? 한 사람이 싫어하나요? 속옷으로 가리는 곳이거나 \'비밀\'이라고 하나요?" 세 물음으로 칸을 고르게 한다. "가족이 하는 건 다 괜찮아요"라는 학생에게 "가족이어도 싫다고 했는데 계속하면 어떤 칸일까요?"라고 묻는다. 병원 진료처럼 보호자가 곁에 있고 까닭이 있는 접촉은 다르다는 것, 그래도 불편하면 말해도 된다는 것을 짚는다.',
          task: '접촉 장면 카드를 괜찮아요·불편해요·꼭 알려요 칸에 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORT2('친구·학교에서의 접촉을 나누어요.', { topic: '이 접촉은?' }, ['괜찮아요', '불편해요', '꼭 알려요'], [['반가운 하이파이브', '넘어져 손잡아 줌'], ['싫다는데 계속 간지럼', '허락 없이 볼 꼬집기'], ['속옷 가린 곳 만짐', '"비밀" 하며 몸 만짐']], [['허락받고 어깨 토닥'], ['계속 따라와 끌어안기'], ['몸 사진 찍으려 함']], 0.15),
            SORT2('집·친척과의 접촉을 나누어요.', { topic: '가족이라도' }, ['괜찮아요', '불편해요', '꼭 알려요'], [['자기 전 꼭 안아 줌', '보호자 곁 병원 진료'], ['싫다는데 무릎에 앉힘', '싫다는데 뽀뽀 요구'], ['속옷 가린 곳 보려 함', '"엄마한테 말하지 마"']], [['아플 때 이마 짚기'], ['그만해도 계속 장난'], ['몸 보여 달라는 말']], 0.2),
            MATCH('불편한 접촉 장면에 할 일을 이어요.', { topic: '이럴 땐 이렇게' }, [['싫다는데 계속 안아요', '"싫어요" 말하기'], ['그만해도 계속해요', '그 자리 떠나기'], ['"비밀이야"라고 해요', '믿는 어른께 알리기']], '꾹 참기', 0.25, { conclude: '내 몸이 불편하면 "싫어요", 떠나기, 알리기. 가족이어도 싫다고 할 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '친척 어른이 싫다는데 계속 안으려 할 때 바른 생각은?', options: ['가족이니 참아야 해요', '싫다고 말해도 돼요', '말하면 버릇없어요'], answer: '싫다고 말해도 돼요' }] },
        notes: '장면은 그림 없이 짧은 글 카드로만 다룬다. 카드 장면을 몸으로 흉내 내게 하지 않는다.',
      }),
      C({
        id: 'saf-violence.e34.body-signals.activity.lap-choice', type: 'activity', title: '갈림길: 싫다는데 계속할 때',
        method: '친척 어른이 계속 요구할 때 갈림길', tool: 'dilemma', minutes: 13,
        levels: { easy: '갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '갈림 2번, 보기 3개씩 고르며 결과를 따라간다(거절한 뒤 누구에게 알릴지까지).', challenge: '갈림 2번을 지난 뒤 근거 카드 3장 가운데 알맞은 것을 고른다.' },
        activity: {
          title: '갈림길: 싫다는데 계속할 때', tool: 'dilemma',
          teacher: '"싫다고 말하면 버릇없는 걸까요?" 결과를 소리 내어 읽고 다음 장면에서 다시 고른다. 참는 길을 고른 학생을 나무라지 않고 "어른이니까 참아야 할 것 같았군요. 그런데 내 몸이 불편하다면 어떻게 해도 될까요?"라고 되묻는다. 싫다고 말하는 것은 버릇없는 것이 아니라 내 몸을 지키는 일이고, 계속 요구하는 쪽이 잘못이라는 것을 짚는다.',
          task: '장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('명절에 친척 어른이 계속 무릎에 앉으래요.', {
              text: '명절에 친척 어른이 "우리 강이 이리 와" 하며 무릎에 앉으라고 해요. 강이는 싫어요.', motif: 'house',
              choices: [
                { id: 'no', text: '"싫어요" 하고 옆에 앉는다', result: '어른이 "알았어" 하셨어요.', ending: '싫다고 말한 것은 내 몸을 지키는 일이에요.', next: {
                  text: '조금 뒤 그 어른이 다시 팔을 잡아끌어요.', choices: [
                    { id: 'parent', text: '보호자 곁으로 가서 말한다', result: '보호자가 "강이가 싫대요" 하고 막아 주셨어요.', impact: [{ who: '강이', text: '마음이 편해졌어요', tone: 1 }], ending: '거절하고 보호자께 알려서 도움을 받았어요.' },
                    { id: 'give', text: '할 수 없이 앉는다', result: '마음이 계속 불편했어요.', impact: [{ who: '강이', text: '불편함이 남았어요', tone: -1 }], why: '참지 않아도 돼요. 보호자께 알려요.' },
                    { id: 'cry', text: '혼자 방에 숨는다', result: '아무도 강이 마음을 몰랐어요.', impact: [{ who: '강이', text: '혼자 속상해요', tone: -1 }], why: '숨기보다 믿는 어른께 말하면 도와줄 수 있어요.' },
                  ] } },
                { id: 'sit', text: '어른이니까 참고 앉는다', result: '어른은 강이가 좋아하는 줄 알았어요.', impact: [{ who: '강이', text: '불편해요', tone: -1 }], why: '가족이어도 싫으면 "싫어요"라고 말해도 돼요.' },
                { id: 'quiet', text: '아무 말 없이 굳어 있는다', result: '어른은 강이 마음을 알지 못했어요.', impact: [{ who: '강이', text: '마음이 답답해요', tone: 0 }] },
              ] }, [['no', 'parent']],
            [{ id: 'mine', text: '내 몸의 주인은 나라서' }, { id: 'tell', text: '보호자는 나를 지켜 줄 수 있어서' }, { id: 'rude', text: '거절하면 버릇없어서', why: '싫다고 말하는 것은 버릇없는 일이 아니에요.' }], ['mine', 'tell'], 0.2),
            DIL('이웃 어른이 볼을 자꾸 만져요.', {
              text: '승강기에서 만난 이웃 어른이 "귀엽다"며 해솔이 볼을 자꾸 만져요. 해솔이는 싫어요.', motif: 'house',
              choices: [
                { id: 'say', text: '"만지지 마세요" 말하고 물러선다', result: '어른이 손을 거두었어요.', ending: '분명히 말하고 물러서서 내 몸을 지켰어요.', next: {
                  text: '다음에 또 만나자 그 어른이 또 다가와요.', choices: [
                    { id: 'tell', text: '집에 와서 보호자께 말한다', result: '보호자가 함께 다니며 살펴 주셨어요.', impact: [{ who: '해솔이', text: '든든해요', tone: 1 }], ending: '알렸더니 보호자가 함께 지켜 주셨어요.' },
                    { id: 'keep', text: '말하면 혼날까 봐 숨긴다', result: '해솔이 혼자 계속 걱정했어요.', impact: [{ who: '해솔이', text: '걱정이 커져요', tone: -1 }], why: '말한 어린이는 혼나지 않아요. 잘한 일이에요.' },
                    { id: 'run', text: '계단으로 뛰어 내려간다', result: '피하긴 했지만 계단에서 넘어질 뻔했어요.', impact: [{ who: '해솔이', text: '다칠 수 있어요', tone: -1 }], why: '서두르지 말고 어른께 알려요.' },
                  ] } },
                { id: 'smile', text: '웃으면서 가만히 있는다', result: '어른은 해솔이도 좋아한다고 생각했어요.', impact: [{ who: '해솔이', text: '싫은 마음이 안 전해져요', tone: -1 }], why: '웃으면 싫은 마음이 전해지지 않아요.' },
                { id: 'freeze', text: '얼어서 고개만 숙인다', result: '어른은 계속 볼을 만졌어요.', impact: [{ who: '해솔이', text: '불편해요', tone: 0 }] },
              ] }, [['say', 'tell']],
            [{ id: 'clear', text: '분명히 말해야 싫은 마음이 전해져서' }, { id: 'safe', text: '알린 어린이는 잘한 것이라서' }, { id: 'adult', text: '어른 말은 다 따라야 해서', why: '내 몸이 싫은 일은 어른 말이라도 거절해요.' }], ['clear', 'safe'], 0.25),
            DIL('사촌 형이 "우리끼리 비밀 놀이"를 하재요.', {
              text: '사촌 형이 "우리끼리 하는 비밀 놀이야. 아무한테도 말하지 마" 하며 방문을 닫재요. 다온이는 불편해요.', motif: 'house',
              choices: [
                { id: 'out', text: '"싫어" 하고 방에서 나온다', result: '거실로 나와 어른들 곁에 앉았어요.', ending: '불편한 느낌을 믿고 그 자리를 떠났어요.', next: {
                  text: '형이 "말하면 다시는 안 놀아 준다"라고 해요.', choices: [
                    { id: 'tell', text: '보호자께 바로 말한다', result: '보호자가 "말해 줘서 고마워" 하고 꼭 안아 주셨어요.', impact: [{ who: '다온이', text: '안심했어요', tone: 1 }], ending: '불편한 비밀은 지키지 않고 알려도 돼요. 잘했어요.' },
                    { id: 'promise', text: '비밀을 지키기로 한다', result: '다온이 마음이 계속 무거웠어요.', impact: [{ who: '다온이', text: '혼자 걱정해요', tone: -1 }], why: '불편한 비밀은 지키지 않아도 돼요. 어른께 알려요.' },
                    { id: 'sorry', text: '"내가 잘못했나?" 걱정만 한다', result: '혼자 끙끙 앓았어요.', impact: [{ who: '다온이', text: '마음이 아파요', tone: -1 }], why: '다온이 잘못이 아니에요. 믿는 어른께 말해요.' },
                  ] } },
                { id: 'stay', text: '형이 하자니까 따라간다', result: '마음이 점점 불편해졌어요.', impact: [{ who: '다온이', text: '불편해요', tone: -1 }], why: '불편한 느낌이 들면 따라가지 않아도 돼요.' },
                { id: 'wait', text: '문 앞에서 머뭇거린다', result: '형이 다시 들어오라고 불렀어요.', impact: [{ who: '다온이', text: '헷갈려요', tone: 0 }] },
              ] }, [['out', 'tell']],
            [{ id: 'secret', text: '불편한 비밀은 알려야 하는 비밀이라서' }, { id: 'notme', text: '내 잘못이 아니라서' }, { id: 'friend', text: '형과 계속 놀고 싶어서', why: '함께 노는 것보다 내 몸과 마음이 먼저예요.' }], ['secret', 'notme'], 0.3, { conclude: '싫으면 "싫어", 그 자리를 떠나고, 믿는 어른께 알려요. 말하지 말라는 비밀은 알려야 하는 비밀이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '싫다고 말하는 것은 버릇없는 것이 아니라 내 몸을 ___ 일이에요.', answer: '지키는' }] },
        notes: '장면은 "불편해요"까지만 쓰고 무슨 일이 있었는지 자세히 그리지 않는다. 학생에게 비슷한 일이 있었는지 묻지 않는다. 수업 뒤 따로 이야기하려는 학생이 있으면 조용한 자리에서 듣고 학교의 절차를 따른다.',
      }),
      C({
        id: 'saf-violence.e34.body-signals.activity.refuse-practice', type: 'activity', title: '거절 말하기 연습',
        method: '거절 말하기 연습과 짝 점검', tool: 'timer', minutes: 14,
        levels: { easy: '거절 순서 카드 2장(싫어요·떠나기)을 맞추고 짝 점검 2칸을 한다.', base: '순서 카드 3장(눈 보기·싫어요·떠나기)을 맞추고 짝 점검 2칸, 연습 기록 2번.', challenge: '순서 카드 3장, 짝 점검 3칸, 역할을 바꿔 3번 연습한 기록을 적는다.' },
        activity: {
          title: '거절 말하기 연습', tool: 'timer',
          teacher: '"\'싫어요\'를 작게 웃으며 말하면 상대가 알아들을까요?" 교사가 작은 목소리와 큰 목소리 두 가지를 보여 준 뒤, 순서 카드를 맞추고 짝과 번갈아 연습한다. 요구하는 역할은 "같이 가자" 같은 짧은 말만 쓰고 몸은 닿지 않게 한다. 웃음이 나오면 "진짜처럼 연습해야 진짜 때 목소리가 나와요"라고 말한다.',
          task: '거절하는 순서 카드를 맞추고, 짝과 연습한 뒤 짝이 해낸 것과 연습 횟수를 적어요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '거절하는 순서 카드를 차례대로 놓아요.', toolOptions: { title: '거절하는 순서', cards: ['자리를 떠나요', '눈을 봐요', '큰 목소리로 "싫어요"'] }, target: { order: ['눈을 봐요', '큰 목소리로 "싫어요"', '자리를 떠나요'] }, difficulty: 0.15,
              levels: { easy: { prompt: '거절하는 순서 카드를 차례대로 놓아요(2장).', toolOptions: { cards: ['자리를 떠나요', '큰 목소리로 "싫어요"'] }, target: { order: ['큰 목소리로 "싫어요"', '자리를 떠나요'] } } } },
            { prompt: '짝이 해낸 것에 표시해 주어요.', toolOptions: { title: '짝 점검' }, target: { selfCheck: ['눈을 보고 말했어요', '큰 목소리였어요'] }, difficulty: 0.1,
              levels: { challenge: { prompt: '짝이 해낸 것에 표시해 주어요(3칸).', target: { selfCheck: ['눈을 보고 말했어요', '큰 목소리였어요', '바로 떠났어요'] } } } },
            { prompt: '역할을 바꿔 연습한 것을 한 번마다 적어요.', toolOptions: { title: '연습 기록', unit: '번', fields: ['1번째', '2번째'] }, target: { records: 2 }, difficulty: 0.1,
              levels: { easy: { prompt: '연습한 것을 적어요(1번).', toolOptions: { fields: ['1번째'] }, target: { records: 1 } }, challenge: { prompt: '역할을 바꿔 연습한 것을 적어요(3번).', toolOptions: { fields: ['1번째', '2번째', '3번째'] }, target: { records: 3 } } },
              conclude: '눈을 보고, 큰 목소리로 "싫어요", 그리고 떠나요. 몸이 기억할 때까지 연습해요.' },
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '연습에서 내가 한 것에 표시해요.', options: ['눈을 보고 말했어요', '큰 목소리로 "싫어요" 했어요', '그 자리를 떠났어요'] }] },
        notes: '연습 기록 칸에는 "말한 횟수"를 적는다(1 또는 2처럼). 요구하는 역할은 몸이 닿지 않는 짧은 말만 쓴다.',
      }),
      C({
        id: 'saf-violence.e34.body-signals.activity.secret-story', type: 'activity', title: '"비밀이야"라는 말을 들었을 때',
        method: "'비밀 지켜'라는 말 들은 친구 이야기", tool: 'story', minutes: 13,
        levels: { easy: '장면 3컷을 차례대로 놓는다(놓으면 바로 맞는지 알림).', base: '장면 4컷을 놓고, 장면과 인물의 마음을 잇고, 보호자께 할 말 2칸을 채운다.', challenge: '틀린 장면 한 장을 빼고 4컷을 놓고, 마음 잇기에 남는 카드를 가려내고, 말 3칸을 채운다.' },
        activity: {
          title: '"비밀이야"라는 말을 들었을 때', tool: 'story',
          teacher: '"누리는 왜 마음이 무거웠을까요? 언제 마음이 가벼워졌나요?" 장면을 놓은 뒤 인물의 마음이 바뀐 곳을 짚게 한다. "비밀은 꼭 지켜야 해요"라는 학생에게 "깜짝 선물 비밀과, 불편한데 말하지 말라는 비밀은 같을까요?"라고 묻는다. 누리가 말한 것은 잘한 일이고, 불편한 일을 하고 비밀로 하라고 한 사람이 잘못이라는 것을 짚는다.',
          task: '가상 인물 누리가 불편한 비밀을 보호자께 알리기까지의 장면을 놓고, 마음과 말을 채워요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORD('누리 이야기를 차례대로 놓아요.', { title: '누리의 이야기' }, [{ id: 'odd', text: '불편한 일이 생겼어요' }, { id: 'secret', text: '"비밀이야" 말을 들어요' }, { id: 'heavy', text: '마음이 무거워요' }, { id: 'tell', text: '보호자께 말해요' }], [0, 2, 3], { id: 'hide', text: '꼭꼭 숨겨요', why: '불편한 비밀은 숨기지 않고 알려요.' }, 0.15),
            MATCH('장면과 누리의 마음을 이어요.', { title: '누리의 마음' }, [['"비밀이야"를 들었을 때', '헷갈려요'], ['혼자 생각할 때', '무거워요'], ['보호자가 안아 줄 때', '안심돼요']], '신나요', 0.2),
            FILL('누리가 보호자께 할 말을 채워요.', '누리', [['불편한 일이 있었는데 ___.', '"비밀"이래요'], ['그래서 마음이 ___.', '무거워요'], ['저를 ___ 주세요.', '도와']], ['괜찮아요', '숨길래요'], 0.25, { conclude: '불편한데 말하지 말라는 비밀은 알려야 하는 비밀이에요. 말하면 마음이 가벼워져요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '알려야 하는 비밀은 어느 것인가요?', options: ['깜짝 생일 선물', '불편한데 말하지 말래요', '좋아하는 음식'], answer: '불편한데 말하지 말래요' }] },
        notes: '"불편한 일"이 무엇인지 자세히 묻거나 그리지 않는다.',
      }),
      C({
        id: 'saf-violence.e34.body-signals.wrap.self-check', type: 'wrap', title: '내 몸 지키기 점검표',
        method: '내 몸 지키기 스스로 점검', tool: 'kitchen', minutes: 7,
        levels: { easy: '점검표 항목 3개에서 할 일에 표시한다.', base: '항목 4개에서 할 일에 표시한다.', challenge: '함정 항목 1개가 섞인 5개에서 할 일에만 표시한다.' },
        wrap: {
          teacher: '"오늘 배운 것 가운데 내가 할 수 있는 것은 무엇인가요?" 점검표를 함께 읽고 표시하게 한다. "남에게도 먼저 물어요"에서 멈추고 "내가 친구를 안고 싶을 때도 먼저 물어볼까요?"라고 묻는다. 함정 항목 "싫어도 참아요"에 표시한 학생에게 "오늘 강이와 해솔이는 참았나요, 말했나요?"라고 되묻는다.',
          exitTicket: [
            EX('kitchen', CHK('내가 지킬 것에만 표시해요.', '내 몸 지키기', [{ id: 'name', text: '바른 이름 알아요', ok: true }, { id: 'no', text: '싫으면 말해요', ok: true }, { id: 'secret', text: '불편한 비밀은 알려요', ok: true }, { id: 'ask', text: '남에게도 먼저 물어요', ok: true }], [0, 1, 2], [{ id: 'bear', text: '싫어도 참아요' }], 0.15)),
            { type: 'choice', prompt: '친구를 안아 주고 싶을 때 먼저 할 일은?', options: ['그냥 꼭 안아요', '"안아도 돼?" 물어요', '몰래 뒤에서 안아요'], answer: 1, difficulty: 0.1, explain: '내 몸이 소중하듯 친구 몸도 소중해요. 먼저 물어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '내 몸은 소중해요',
          items: [
            { type: 'check', prompt: '내가 지킬 것에 표시해요.', options: ['싫으면 "싫어요" 말해요', '불편한 비밀은 알려요', '친구 몸에도 먼저 물어요'] },
            { type: 'short', prompt: '불편할 때 말할 믿는 어른을 한 명 써요(가족·선생님 등).' },
          ],
          easy: { note: '"싫어요", 떠나기, 알리기를 떠올려요.', items: [{ type: 'choice', prompt: '불편한 비밀은?', options: ['알려요', '숨겨요'], answer: '알려요' }] },
        },
      }),
      C({
        id: 'saf-violence.e34.body-signals.wrap.owner-sentence', type: 'wrap', title: '내 몸 주인 선언',
        method: '내 몸 주인 선언 문장 고르기', tool: 'wordcards', minutes: 7,
        levels: { easy: '문장 카드 3장 가운데 1장을 고른다.', base: '문장 카드 5장 가운데 선언 문장 2장을 고른다.', challenge: '고른 문장을 짝에게 이유와 함께 말한다(교사 진행).' },
        wrap: {
          teacher: '"오늘 배운 것을 한 문장으로 선언해 볼까요?" 문장 카드를 고른 뒤 반 전체가 함께 소리 내어 읽는다. "싫어도 참아야 해"를 고른 학생에게 "오늘 누리는 참았을 때 마음이 어땠나요? 말했을 때는요?"라고 되묻는다. 불편한 일이 생겼다면 그건 결코 내 잘못이 아니라는 말을 꼭 함께 읽는다.',
          exitTicket: [
            EX('wordcards', PICK('내 몸을 지키는 선언 문장을 골라요.', { basket: '나의 선언' }, [{ id: 'owner', text: '내 몸의 주인은 나', ok: true }, { id: 'bear', text: '싫어도 참아야 해' }, { id: 'fault', text: '네 잘못이 아니야', ok: true }, { id: 'keep', text: '비밀은 다 지켜' }, { id: 'quiet', text: '어른 말엔 가만히' }], ['owner', 'bear', 'keep'], null, 0.15)),
            { type: 'choice', prompt: '불편한 일이 생겼다면 누구의 잘못인가요?', options: ['말한 어린이', '불편하게 한 사람', '아무도 아니에요'], answer: 1, difficulty: 0.1, explain: '불편하게 한 사람이 잘못이에요. 말한 어린이는 잘한 거예요.' },
            { type: 'short', prompt: '내가 고른 선언 문장을 한 번 더 써요.' },
          ],
        },
        worksheet: {
          title: '내 몸의 주인은 나',
          items: [
            { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '내 몸의 ___은 나예요.', answer: '주인' },
            { type: 'draw', prompt: '"싫어요"라고 또렷하게 말하는 내 모습을 그려요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 3학년 · 아동학대 알고 도움받기 (별표 2 초등 폭력예방 및 신변보호 '아동학대의 유형 및 대처방안 알기')
  // ======================================================================================================
  {
    const C = T('child-abuse', 3);
    // 카드 판 문항에 함정(목록에 없는) 카드를 더한다 — 기본·도전 판에만
    const withX = (it, extra) => {
      it.toolOptions.cards = it.toolOptions.cards.concat(extra);
      if (it.levels && it.levels.challenge) it.levels.challenge.toolOptions.cards = it.levels.challenge.toolOptions.cards.concat(extra);
      return it;
    };
    const TOWN = {
      title: '우리 동네 도움 지도', grid: [6, 4],
      regions: [
        { name: '학교', cells: [[0, 0], [1, 0], [0, 1], [1, 1]] }, { name: '주민센터', cells: [[2, 0], [3, 0]] }, { name: '지구대(112)', cells: [[4, 0], [5, 0]] },
        { name: '큰길', cells: [[2, 1], [3, 1], [4, 1], [5, 1], [0, 2], [1, 2], [2, 2], [3, 2]] }, { name: '청소년 상담 센터(1388)', cells: [[4, 2], [5, 2]] },
        { name: '우리 집', cells: [[0, 3], [1, 3]] }, { name: '놀이터', cells: [[2, 3], [3, 3]] }, { name: '가게', cells: [[4, 3], [5, 3]] },
      ],
    };
    M.push(
      C({
        id: 'saf-violence.e34.child-abuse.intro.care-list', type: 'intro', title: '어린이가 받아야 할 돌봄',
        method: '어린이가 받아야 할 돌봄 표시', tool: 'kitchen', minutes: 6,
        levels: { easy: '돌봄 항목 4개(밥·잠·병원·안전한 집)에 함께 표시한다.', base: '항목 6개(학교·따뜻한 말 더함)에 표시한다.', challenge: '돌봄과 섞인 "게임 시간 마음대로" 항목이 왜 돌봄 목록이 아닌지 가려 말한다.' },
        intro: {
          teacher: '"어린이라면 누구나 받아야 하는 것은 무엇일까요?" 시연 단추로 목록에 표시가 하나씩 생기는 것을 보인다. "착한 어린이만 받아요"라는 말이 나오면 "밥과 잠, 아플 때 병원은 착할 때만 받는 상일까요?"라고 되묻는다. 이것들은 상이 아니라 모든 어린이가 받아야 할 돌봄이고, 어른은 이것을 지켜 줄 책임이 있다는 것을 짚는다. 게임 시간은 가족이 함께 정하는 약속이지 돌봄 목록과는 다르다고 구분한다.',
          student: '어린이라면 누구나 받아야 할 돌봄에 표시해요. 착할 때만 받는 상이 아니에요.',
          demo: { tool: 'kitchen', options: { mode: 'checklist', title: '어린이가 받아야 할 돌봄', items: [{ id: 'meal', text: '밥' }, { id: 'sleep', text: '편한 잠' }, { id: 'doctor', text: '아플 때 병원' }, { id: 'home', text: '안전한 집' }, { id: 'school', text: '학교에 다니기' }, { id: 'warm', text: '따뜻한 말' }, { id: 'game', text: '게임 시간 마음대로' }] }, sequence: [{ checklist: ['meal', 'sleep', 'doctor', 'home'] }, { checklist: ['meal', 'sleep', 'doctor', 'home', 'school', 'warm'] }] },
          art: { draw: 'a warm paper house with a paper child at a table with a bowl of rice, a small bed, a school bag by the door and a paper adult smiling, soft paper hearts in the air', banner: '모든 어린이가 받아야 할 돌봄', extra: [{ motif: 'house', x: 300, y: 96 }] },
        },
        notes: '학생 집의 돌봄 사정을 묻지 않는다("밥 못 먹은 날 있어요?" 금지). 목록은 모든 어린이의 것으로만 이야기한다.',
      }),
      C({
        id: 'saf-violence.e34.child-abuse.intro.rights-cards', type: 'intro', title: '어린이 권리 그림 카드',
        method: '어린이 보호받을 권리 그림 카드', tool: 'wordcards', minutes: 6,
        levels: { easy: '권리 카드 2쌍(보호받을 권리·쉴 권리)을 함께 잇는다.', base: '권리 카드 3쌍(배울 권리 더함)을 잇는다.', challenge: '권리마다 그 권리가 지켜지는 장면 하나를 짝에게 말한다(교사 진행).' },
        intro: {
          teacher: '"어린이에게는 누구도 빼앗을 수 없는 권리가 있어요." 시연 단추로 권리 이름 옆에 설명 카드가 놓이는 것을 보인다. "어린이는 어른 말만 들으면 돼요"라는 말이 나오면 "어른 말을 듣는 것도 중요하지만, 위험에서 지켜질 권리는 누구에게나 있을까요?"라고 되묻는다. 권리가 지켜지지 않을 때는 믿는 어른에게 말해 도움을 받을 수 있다는 것을 짚는다.',
          student: '어린이의 권리 이름과 그 뜻을 이어 보아요.',
          demo: { tool: 'wordcards', options: { mode: 'match', slots: [{ id: 'safe', label: '보호받을 권리' }, { id: 'rest', label: '쉴 권리' }, { id: 'learn', label: '배울 권리' }], cards: [{ id: 'r', text: '푹 쉬고 놀아요' }, { id: 'l', text: '학교에서 배워요' }, { id: 's', text: '위험에서 지켜져요' }], shuffle: false }, sequence: [{ match: { safe: 's', rest: 'r' } }, { match: { safe: 's', rest: 'r', learn: 'l' } }] },
          art: { draw: 'three paper cards standing in a row with a paper umbrella over a child, a child resting on a paper bed and a child reading a paper book', banner: '어린이의 권리', extra: [{ motif: 'sun', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      C({
        id: 'saf-violence.e34.child-abuse.activity.four-types', type: 'activity', title: '아끼는 행동과 아동학대',
        method: '어른 행동을 네 가지 모습으로 나누기', tool: 'mindmap', minutes: 14,
        levels: { easy: '두 칸(아끼는·아프게 하는) 문항은 카드 4장, 네 칸 문항은 칸마다 1장(놓으면 바로 맞는지 알림).', base: '두 칸 6장, 네 칸 8장(아끼는 행동 카드는 어느 칸에도 넣지 않고 남긴다).', challenge: '훈육과 학대가 헷갈리는 카드(말 안 듣는다고 때림 등)가 더해진 판을 나누고 짝과 토의한다.' },
        activity: {
          title: '아끼는 행동과 아동학대', tool: 'mindmap',
          teacher: '"이 어른의 행동은 어린이를 아끼는 것일까요, 아프게 하는 것일까요?" 아프게 하는 행동은 몸을, 마음을, 원치 않는 곳을, 돌봄을 다치게 한다는 네 칸으로 다시 나누게 한다. "말을 안 들으면 맞아도 돼요"라는 학생에게 "잘못은 말로 알려 줄 수 있어요. 때리는 것이 어린이를 아끼는 방법일까요?"라고 묻는다. 아동학대는 어떤 까닭이 있어도 어린이 잘못이 아니라는 것을 꼭 말한다.',
          task: '가상 장면 속 어른의 행동 카드를 아끼는 행동과 아동학대의 네 가지 모습으로 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORT('어른의 행동을 두 칸으로 나누어요.', { topic: '어른의 행동' }, ['아끼는 행동', '아프게 하는 행동'], [['아플 때 병원 가기', '밥을 챙겨 줌', '"사랑해" 말하기'], ['심하게 때리기', '"넌 필요 없어"', '씻기·옷 안 챙김']], 2, [['잘못을 말로 타이름'], ['말 안 듣는다고 때림']], 0.15),
            withX(SORT('아프게 하는 행동을 네 가지로 나누어요.', { topic: '아동학대의 모습' }, ['몸을 아프게', '마음을 아프게', '원치 않는 곳 만짐', '돌보지 않음'], [['심하게 때리기', '세게 밀쳐 넘어뜨림'], ['"넌 필요 없어"', '늘 겁주는 큰소리'], ['속옷 가린 곳 만짐', '몸 사진을 찍음'], ['아파도 병원 안 감', '며칠째 밥 안 줌']], 1, [['말 안 듣는다고 때림'], ['"다 너 때문이야"'], [], ['밤에 혼자 오래 둠']], 0.2), ['숙제를 함께 봐 줌']),
            withX(SORT('다른 장면도 네 가지로 나누어요.', { topic: '이것도 학대예요' }, ['몸을 아프게', '마음을 아프게', '원치 않는 곳 만짐', '돌보지 않음'], [['세게 꼬집기', '발로 차기'], ['"바보" 늘 놀림', '형제와 늘 비교'], ['몸 보여 달라 함', '"비밀" 하며 만짐'], ['다쳐도 치료 안 함', '학교에 안 보냄']], 1, [['벌이라며 때림'], ['무시하고 말 안 함'], [], ['씻지 못하게 둠']], 0.25), ['안전띠 매 줌'], { conclude: '몸·마음을 아프게 하기, 원치 않는 곳 만지기, 돌보지 않기는 모두 아동학대예요. 어린이 잘못이 아니에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '아동학대에 해당하는 것에 표시해요.', options: ['심하게 때리기', '"넌 필요 없어" 말하기', '아플 때 병원에 데려가기', '아파도 돌보지 않기'] }] },
        notes: '카드 장면은 모두 가상의 어른 이야기다. 학생 집에서 비슷한 일이 있는지 묻지 않는다. 수업 중 걱정되는 말을 듣게 되면 그 자리에서 캐묻지 말고 수업 뒤 조용히 듣고 학교의 아동학대 신고 절차를 따른다.',
      }),
      C({
        id: 'saf-violence.e34.child-abuse.activity.help-map', type: 'activity', title: '동네 도움 지도에 핀 꽂기',
        method: '동네 지도에 도움 받을 곳 핀', tool: 'map', minutes: 13,
        levels: { easy: '핀을 놓으면 그 칸의 이름이 바로 보인다.', base: '상황 4개(학교·지구대·상담 센터, 학교가 닫힌 밤)에 맞는 곳에 핀을 꽂는다.', challenge: '핀을 꽂은 뒤 그곳을 고른 까닭도 보기에서 고른다.' },
        activity: {
          title: '동네 도움 지도에 핀 꽂기', tool: 'map',
          teacher: '"이럴 때는 어디로 가면 도움을 받을까요?" 핀을 꽂기 전에 손가락으로 집에서 그곳까지 가는 길을 따라가 보게 한다. 지금 위험한데 놀이터에 핀을 꽂는 학생에게 "놀이터에서는 누가 나를 지켜 줄 수 있을까요?"라고 묻는다. 112는 지금 위험할 때, 1388은 고민을 들어 주는 상담 번호라는 것, 학교가 닫힌 밤에도 지구대와 112는 도움을 준다는 것을 짚는다.',
          task: '동네 칸 지도에서 상황에 맞는 도움 받을 곳에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            PIN(TOWN, '선생님께 말하고 싶을 때 갈 곳에 핀을 꽂아요.', '학교', { q: '왜 이곳일까요?', choices: ['믿을 어른을 날마다 만나서', '놀이 기구가 있어서', '물건을 사려고'], answer: 0 }, 0.15),
            PIN(TOWN, '지금 위험해서 경찰이 필요할 때 갈 곳에 핀을 꽂아요.', '지구대(112)', { q: '갈 수 없으면 어떻게 할까요?', choices: ['그냥 참는다', '112에 전화한다', '모르는 사람을 따라간다'], answer: 1 }, 0.2),
            PIN(TOWN, '마음 고민을 상담하고 싶을 때 갈 곳에 핀을 꽂아요.', '청소년 상담 센터(1388)', { q: '전화로는 몇 번일까요?', choices: ['1388', '112', '117'], answer: 0 }, 0.2),
            PIN(TOWN, '밤이라 학교가 닫혔는데 위험할 때 갈 곳에 핀을 꽂아요.', '지구대(112)', { q: '왜 이곳일까요?', choices: ['밤에도 경찰이 도와줘서', '불이 꺼져 있어서', '가까워서 놀려고'], answer: 0 }, 0.25, { conclude: '학교의 선생님, 지구대와 112, 상담 1388. 도움 받을 곳은 여러 곳이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '상황에 맞는 번호를 써요.', columns: ['상황', '번호'], cells: [['지금 위험할 때', ''], ['고민을 상담할 때', '']], answer: '112, 1388' }] },
        notes: '지도는 가상의 동네다. 학생의 실제 집 위치를 묻지 않는다. 우리 학교 둘레의 실제 지구대 위치는 교사가 말로 알려 준다.',
      }),
      C({
        id: 'saf-violence.e34.child-abuse.activity.bruise-choice', type: 'activity', title: '갈림길: 친구가 걱정될 때',
        method: '친구의 걱정되는 모습에 갈림길', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '갈림 2번, 보기 3개씩 고르며 결과를 따라간다(둘째 문항은 친구가 "비밀"이라고 할 때).', challenge: '갈림 2번을 지난 뒤 근거 카드 3장 가운데 알맞은 것을 고른다.' },
        activity: {
          title: '갈림길: 친구가 걱정될 때', tool: 'dilemma',
          teacher: '"친구가 걱정될 때 내가 할 수 있는 일은 무엇일까요?" 결과를 소리 내어 읽고 다음 장면에서 다시 고른다. 친구를 캐묻는 길을 고른 학생에게 "친구가 다 말하지 않아도 돼요. 우리 몫은 무엇일까요?"라고 되물어, 들어 주고 선생님께 함께 가는 것이 우리 몫이라는 것을 짚는다. "가족 일은 밖에 말하면 안 돼요"라는 말에는 "어린이가 아프거나 돌봄을 못 받는 일은 어른들이 함께 도와야 하는 일이에요"라고 말한다.',
          task: '장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('친구가 자주 다친 채로 와요.', {
              text: '친구 바다가 요즘 자주 다친 곳이 있고, 아침을 못 먹었다고 해요.', motif: 'cloud',
              choices: [
                { id: 'ask', text: '"괜찮아?" 다정하게 묻는다', result: '바다가 "응…" 하고 말끝을 흐려요.', ending: '다정하게 물어본 것이 바다에게 힘이 됐어요.', next: {
                  text: '바다가 고개를 숙이고 아무 말도 안 해요.', choices: [
                    { id: 'go', text: '"같이 선생님께 가 볼래?"', result: '선생님이 바다 이야기를 차분히 들어 주셨어요.', impact: [{ who: '바다', text: '도움을 받기 시작했어요', tone: 1 }], ending: '함께 선생님께 가서 바다가 도움을 받았어요.' },
                    { id: 'push', text: '"빨리 말해 봐!" 캐묻는다', result: '바다가 더 움츠러들었어요.', impact: [{ who: '바다', text: '마음이 닫혔어요', tone: -1 }], why: '캐묻지 말고 믿는 어른께 함께 가요.' },
                    { id: 'rumor', text: '다른 친구들에게 말한다', result: '반에 소문이 퍼졌어요.', impact: [{ who: '바다', text: '창피하고 속상해요', tone: -1 }], why: '걱정은 친구들이 아니라 선생님께 알려요.' },
                  ] } },
                { id: 'ignore', text: '못 본 척한다', result: '바다는 계속 혼자였어요.', impact: [{ who: '바다', text: '도움을 못 받았어요', tone: -1 }], why: '걱정되는 모습을 보면 지나치지 말아요.' },
                { id: 'tease', text: '"또 다쳤어?" 놀린다', result: '바다가 더 속상해했어요.', impact: [{ who: '바다', text: '마음이 아파요', tone: -1 }], why: '놀리지 말고 다정하게 다가가요.' },
              ] }, [['ask', 'go']],
            [{ id: 'help', text: '어른이 바다를 도울 수 있어서' }, { id: 'right', text: '모든 어린이는 돌봄을 받아야 해서' }, { id: 'none', text: '남의 집 일이라서', why: '어린이가 다치거나 돌봄을 못 받는 일은 함께 도와야 해요.' }], ['help', 'right'], 0.2),
            DIL('친구가 "비밀이야"라고 해요.', {
              text: '바다가 "집에서 무서운 일이 있었어. 아무한테도 말하지 마"라고 해요.', motif: 'house',
              choices: [
                { id: 'thank', text: '"말해 줘서 고마워" 들어 준다', result: '바다가 조금 마음을 놓았어요.', ending: '끝까지 들어 준 것은 아주 잘한 일이에요.', next: {
                  text: '바다가 "선생님이 알면 우리 집 혼나?" 하고 걱정해요.', choices: [
                    { id: 'with', text: '"선생님은 너를 도와주셔. 같이 가자"', result: '둘이 함께 선생님께 갔어요.', impact: [{ who: '바다', text: '든든해요', tone: 1 }], ending: '위험한 비밀은 어른께 알려 바다를 지켰어요.' },
                    { id: 'keep', text: '"그럼 비밀로 할게"', result: '바다는 계속 무서운 집에 혼자 있었어요.', impact: [{ who: '바다', text: '계속 무서워요', tone: -1 }], why: '위험한 비밀은 지키지 않고 어른께 알려요.' },
                    { id: 'blame', text: '"네가 말을 안 들어서야"', result: '바다가 울음을 터뜨렸어요.', impact: [{ who: '바다', text: '자기 탓이라 생각해요', tone: -1 }], why: '아동학대는 어린이 잘못이 아니에요.' },
                  ] } },
                { id: 'skip', text: '"우리 집 일 아니야" 넘긴다', result: '바다는 말한 것을 후회했어요.', impact: [{ who: '바다', text: '외로워요', tone: -1 }], why: '용기 내 말한 친구 이야기를 들어 주어요.' },
                { id: 'spread', text: '반 친구들에게 알린다', result: '소문이 퍼져 바다가 숨어 버렸어요.', impact: [{ who: '바다', text: '창피해요', tone: -1 }], why: '친구들이 아니라 믿는 어른께 알려요.' },
              ] }, [['thank', 'with']],
            [{ id: 'danger', text: '무서운 일은 알려야 하는 비밀이라서' }, { id: 'notfault', text: '바다 잘못이 아니라서' }, { id: 'promise', text: '약속은 꼭 지켜야 해서', why: '위험한 비밀은 약속보다 친구의 안전이 먼저예요.' }], ['danger', 'notfault'], 0.25),
            DIL('친구가 "집에 밥이 없어"라고 해요.', {
              text: '바다가 며칠째 같은 옷을 입고 "집에 먹을 게 없어"라고 해요.', motif: 'sun',
              choices: [
                { id: 'listen', text: '곁에 앉아 이야기를 들어 준다', result: '바다가 요즘 혼자 있는 날이 많다고 해요.', ending: '들어 준 것만으로도 바다에게 큰 힘이 됐어요.', next: {
                  text: '바다가 "선생님께 말해도 될까?" 하고 물어요.', choices: [
                    { id: 'yes', text: '"응, 같이 가자"', result: '선생님이 바다를 도와줄 어른들과 이야기하셨어요.', impact: [{ who: '바다', text: '돌봄을 받게 됐어요', tone: 1 }], ending: '돌보지 않는 것도 아동학대예요. 알려서 바다를 도왔어요.' },
                    { id: 'snack', text: '"내가 간식 줄게, 비밀로 하자"', result: '간식은 나눴지만 바다는 계속 혼자예요.', impact: [{ who: '바다', text: '돌봄이 계속 없어요', tone: -1 }], why: '혼자 해결하려 하지 말고 어른과 함께해요.' },
                    { id: 'home', text: '"그건 집안일이야"', result: '바다는 더 말하지 않았어요.', impact: [{ who: '바다', text: '도움을 못 받아요', tone: -1 }], why: '어린이가 돌봄을 못 받으면 어른들이 함께 도와야 해요.' },
                  ] } },
                { id: 'mock', text: '"옷이 더러워" 놀린다', result: '바다가 친구들을 피하기 시작했어요.', impact: [{ who: '바다', text: '마음이 아파요', tone: -1 }], why: '놀리지 말고 걱정하는 마음으로 다가가요.' },
                { id: 'away', text: '모른 척 지나간다', result: '바다는 그날도 배가 고팠어요.', impact: [{ who: '바다', text: '혼자예요', tone: -1 }], why: '걱정되는 모습을 보면 어른께 알려요.' },
              ] }, [['listen', 'yes']],
            [{ id: 'care', text: '어린이는 돌봄을 받아야 해서' }, { id: 'adult', text: '어른이 함께 도울 수 있어서' }, { id: 'alone', text: '내가 매일 도와주면 돼서', why: '어린이 혼자 해결할 일이 아니에요. 어른께 알려요.' }], ['care', 'adult'], 0.3, { conclude: '친구가 걱정되면 다정하게 들어 주고, 함께 선생님께 가요. 아동학대는 어린이 잘못이 아니에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '친구가 "집에서 무서운 일이 있었어. 비밀이야"라고 하면?', options: ['비밀을 꼭 지켜요', '들어 주고 함께 선생님께 가요', '반 친구들에게 알려요'], answer: '들어 주고 함께 선생님께 가요' }] },
        notes: '장면은 "다친 곳이 있다", "무서운 일"까지만 쓰고 무슨 일인지 그리지 않는다. 바다는 가상 인물이다.',
      }),
      C({
        id: 'saf-violence.e34.child-abuse.activity.after-telling', type: 'activity', title: '알린 뒤에 생기는 일',
        method: '알린 뒤 도움받는 이야기 차례', tool: 'story', minutes: 13,
        levels: { easy: '장면 3컷을 차례대로 놓는다(놓으면 바로 맞는지 알림).', base: '장면 4컷을 놓고, 장면마다 인물의 마음을 잇고, 선생님 말 2칸을 채운다.', challenge: '틀린 장면 한 장을 빼고 4컷을 놓고, 마음 잇기에 남는 카드를 가려내고, 선생님 말 3칸을 채운다.' },
        activity: {
          title: '알린 뒤에 생기는 일', tool: 'story',
          teacher: '"가람이가 선생님께 말한 뒤에는 어떤 일이 생길까요?" 장면을 놓은 뒤 가람이 마음이 어떻게 바뀌었는지 짚게 한다. "알리면 내가 혼나요"라는 학생에게 "선생님이 가람이에게 처음 한 말은 무엇이었나요?"라고 묻고 "말해 줘서 고마워. 네 잘못이 아니야"를 함께 읽는다. 알리면 도와줄 어른들이 여럿 함께한다는 것을 짚는다.',
          task: '가상 인물 가람이가 선생님께 알린 뒤 도움받는 이야기를 차례대로 놓고, 마음과 말을 채워요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORD('가람이 이야기를 차례대로 놓아요.', { title: '가람이의 이야기' }, [{ id: 'tell', text: '선생님께 말해요' }, { id: 'listen', text: '끝까지 들어 주세요' }, { id: 'thanks', text: '"말해 줘서 고마워"' }, { id: 'team', text: '도울 어른들이 함께해요' }], [0, 1, 3], { id: 'hide', text: '다시 혼자 숨겨요', why: '알린 뒤에는 어른들이 함께 도와요. 다시 숨기지 않아요.' }, 0.15),
            MATCH('장면과 가람이의 마음을 이어요.', { title: '가람이의 마음' }, [['말하기 바로 전', '떨려요'], ['선생님이 들어 줄 때', '고마워요'], ['어른들이 함께할 때', '든든해요']], '신나요', 0.2),
            FILL('선생님이 가람이에게 한 말을 채워요.', '선생님', [['말해 줘서 ___.', '고마워'], ['이건 네 ___ 아니야.', '잘못이'], ['선생님이 ___.', '도와줄게']], ['네 탓이야', '비밀로 해'], 0.25, { conclude: '알리면 혼나는 것이 아니라 도움을 받아요. 말한 어린이는 잘한 거예요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '선생님 말을 채워요.', text: '"말해 줘서 고마워. 이건 네 ___이 아니야."', answer: '잘못' }] },
      }),
      C({
        id: 'saf-violence.e34.child-abuse.wrap.not-fault', type: 'wrap', title: '"네 잘못이 아니야"를 들으면',
        method: "'네 잘못이 아니야' 듣고 마음 고르기", tool: 'emotion', minutes: 7,
        levels: { easy: '마음 카드 3장 가운데 고른다.', base: '마음 카드 5장 가운데 고른다.', challenge: '마음을 고른 뒤 그 친구에게 덧붙일 말을 고른다(출구 2번).' },
        wrap: {
          teacher: '"그림 속 친구가 \'네 잘못이 아니야, 말해 줘서 고마워\'라는 말을 들었어요. 마음이 어떨까요?" 카드를 고른 뒤 반 전체가 그 말을 소리 내어 함께 읽는다. "미안함"을 고른 학생에게 "그 친구가 미안해야 할 일을 했을까요?"라고 되묻고, 잘못은 아프게 한 어른에게 있다는 것을 짚는다.',
          exitTicket: [
            EX('emotion', PICK('"네 잘못이 아니야"를 들은 친구의 마음을 골라요.', { basket: '들은 뒤 마음' }, [{ id: '안심', text: '안심', ok: true }, { id: '미안함', text: '미안함' }, { id: '고마움', text: '고마움', ok: true }, { id: '화남', text: '화남' }, { id: '편안함', text: '편안함', ok: true }], ['안심', '미안함', '고마움'], null, 0.15)),
            { type: 'choice', prompt: '그 친구에게 덧붙여 줄 말은?', options: ['다음엔 조심해', '언제든 또 말해도 돼', '왜 이제 말했어'], answer: 1, difficulty: 0.1, explain: '언제든 다시 말해도 된다는 말이 친구에게 힘이 돼요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '네 잘못이 아니야',
          items: [
            { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '아동학대는 어린이 ___이 아니에요.', answer: '잘못' },
            { type: 'short', prompt: '힘든 친구에게 해 줄 따뜻한 말을 한 줄로 써요.' },
          ],
          easy: { note: '"네 잘못이 아니야", "말해 줘서 고마워"를 떠올려요.', items: [{ type: 'choice', prompt: '말한 어린이는?', options: ['잘했어요', '혼나요'], answer: '잘했어요' }] },
        },
      }),
      C({
        id: 'saf-violence.e34.child-abuse.wrap.tell-order', type: 'wrap', title: '112·1388에 알리는 말',
        method: '112·1388에 알리는 말 순서', tool: 'timer', minutes: 7,
        levels: { easy: '알리는 말 카드 2장(누가·무슨 일)을 차례대로 놓는다.', base: '카드 3장(누가·어디서·무슨 일)을 놓고 짝과 말해 본다.', challenge: '카드 3장을 놓고 짝과 연습할 때 정해 둔 가명으로 이름까지 말한다(교사 진행).' },
        wrap: {
          teacher: '"전화로 알릴 때 무엇부터 말하면 도와주는 사람이 잘 알아들을까요?" 카드를 놓은 뒤 짝과 "누가, 어디서, 무슨 일"로 말해 본다. 연습에서는 진짜 이름·주소·번호 대신 정해 둔 가명과 "○○동 놀이터"처럼 꾸민 장소를 쓴다. 112와 1388을 헷갈리는 학생에게 "지금 바로 위험하면 몇 번일까요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '알리는 말 차례', cards: ['무슨 일인지', '누가 그랬는지', '어디에서인지'] }, prompt: '알리는 말을 차례대로 놓아요.', target: { order: ['누가 그랬는지', '어디에서인지', '무슨 일인지'] }, difficulty: 0.15,
              levels: { easy: { prompt: '알리는 말을 차례대로 놓아요(2장).', toolOptions: { cards: ['무슨 일인지', '누가 그랬는지'] }, target: { order: ['누가 그랬는지', '무슨 일인지'] } } } },
            { type: 'choice', prompt: '지금 바로 위험할 때 누르는 번호는?', options: ['112', '1388', '117'], answer: 0, difficulty: 0.1, explain: '지금 위험하면 112, 고민을 상담할 때는 1388이에요.' },
            { type: 'choice', prompt: '용기 내어 알린 어린이는 어떤 어린이인가요?', options: ['잘한 어린이', '고자질한 어린이', '혼날 어린이'], answer: 0, difficulty: 0.1, explain: '알린 어린이는 자신과 친구를 지킨 잘한 어린이예요.' },
          ],
        },
        worksheet: {
          title: '도움을 청하는 말',
          items: [
            { type: 'table', prompt: '알맞은 번호를 써요.', columns: ['언제', '번호'], cells: [['지금 바로 위험할 때', ''], ['고민을 들어 줄 상담', '']], answer: '112, 1388' },
            { type: 'short', prompt: '전화로 알릴 때 말할 차례를 써요(누가 → 어디서 → 무슨 일).' },
          ],
        },
        notes: '연습할 때 학생의 실제 이름·주소·전화번호를 말하거나 적게 하지 않는다. 진짜 번호를 누르지 않도록 장난감 전화나 그림 전화로 연습한다.',
      }),
    );
  }

  // ======================================================================================================
  // 3학년 · 마음이 힘들 때 도움 청하기 (별표 2 초등 폭력예방 및 신변보호 '자살 예방 및 생명존중 교육' — 생명존중·마음 돌봄 중심)
  // ======================================================================================================
  {
    const C = T('heart-care', 3);
    const FEEL = [['운동하기', 10], ['이야기하기', 8], ['음악 듣기', 6], ['그림 그리기', 4]];
    const BAR = { type: 'bar', title: '기분이 나아지는 방법(가상의 3학년 반)', unit: '명', xLabel: '방법', yLabel: '친구 수', max: 12, scale: 2 };
    M.push(
      C({
        id: 'saf-violence.e34.heart-care.intro.emotion-names', type: 'intro', title: '그림 속 마음에 이름 붙이기',
        method: '그림 속 친구 마음에 감정 이름 붙이기', tool: 'emotion', minutes: 6,
        levels: { easy: '장면 2개(발표 전·생일)에 마음 카드를 함께 붙인다.', base: '장면 3개(친구 전학 더함)에 마음 카드를 붙인다.', challenge: '한 장면에 마음이 두 가지일 수 있음을 짝과 이야기한다(교사 진행).' },
        intro: {
          teacher: '"이 친구의 마음에 이름을 붙여 볼까요?" 시연 단추로 장면마다 마음 카드가 놓이는 것을 보인다. "기쁜 마음만 좋은 마음이에요"라는 말이 나오면 "떨리는 마음, 서운한 마음은 나쁜 마음일까요?"라고 되묻고, 모든 마음은 자연스럽고 이름을 붙이면 돌보기 쉬워진다는 것을 짚는다. 친한 친구가 전학 가는 장면에서는 서운하면서 응원하는 마음이 함께 들 수 있다고 말한다.',
          student: '그림 속 친구들의 마음에 알맞은 이름 카드를 붙여요. 모든 마음은 소중해요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'talk', label: '발표하기 바로 전' }, { id: 'bday', label: '내 생일 아침' }, { id: 'move', label: '친한 친구가 전학 감' }], cards: ['떨림', '기쁨', '서운함'], shuffle: false }, sequence: [{ match: { talk: '떨림', bday: '기쁨' } }, { match: { talk: '떨림', bday: '기쁨', move: '서운함' } }] },
          art: { draw: 'three small paper scenes: a child holding a paper note before speaking in front of the class, a child with a paper birthday cake, and two children waving goodbye beside a paper moving truck', banner: '내 마음에 이름 붙이기', extra: [{ motif: 'rainbow', x: 300, y: 96 }] },
        },
      }),
      C({
        id: 'saf-violence.e34.heart-care.intro.puppy-life', type: 'intro', title: '강아지 한살이와 돌봄',
        method: '강아지 한살이로 생명 돌봄 보기', tool: 'lifecycle', minutes: 6,
        levels: { easy: '강아지 한살이 3단계를 함께 놓아 본다.', base: '4단계를 차례대로 놓는 모습을 본다.', challenge: '4단계를 놓은 뒤 단계마다 필요한 돌봄(젖·산책·병원)을 짝과 말한다(교사 진행).' },
        intro: {
          teacher: '"강아지는 태어나서 어떻게 자랄까요? 자라는 동안 무엇이 필요할까요?" 시연 단추로 한살이 카드가 둥근 판에 차례대로 놓이는 것을 보인다. 단계마다 "이때 강아지에게 필요한 돌봄은?"이라고 묻는다(기다릴 반응: "젖", "산책", "아프면 병원"). 생명은 하나뿐이라 소중하고, 강아지처럼 우리도 자라는 동안 돌봄과 도움이 필요하며, 힘들 때 도움을 청하는 것은 자연스럽다는 것을 짚는다.',
          student: '강아지가 자라는 차례를 보고, 단계마다 필요한 돌봄을 떠올려 보아요.',
          demo: { tool: 'lifecycle', options: { center: '강아지의 한살이', cycle: false, cards: [{ id: 'adult', text: '다 자란 개' }, { id: 'newborn', text: '갓 태어난 강아지' }, { id: 'play', text: '뛰노는 강아지' }, { id: 'milk', text: '눈 뜨고 젖 먹기' }], shuffle: false }, sequence: [{ order: ['newborn', 'milk', 'play'] }, { order: ['newborn', 'milk', 'play', 'adult'] }] },
          art: { draw: 'a round paper board with four paper puppies growing from a tiny newborn puppy to a grown dog, a paper child gently holding a water bowl', banner: '생명은 소중해요', extra: [{ motif: 'flower', x: 300, y: 96 }] },
        },
      }),
      C({
        id: 'saf-violence.e34.heart-care.activity.feel-better-chart', type: 'activity', title: '기분이 나아지는 방법 그래프',
        method: '기분 좋아지는 방법 막대그래프 읽기', tool: 'chart', minutes: 14,
        levels: { easy: '방법 3개의 막대를 그린다(첫 막대는 미리 그려져 있다).', base: '방법 4개의 막대를 그리고, 가장 많은 방법과 둘째로 많은 방법을 고른다.', challenge: '그래프를 완성한 뒤 두 방법의 차이를 말하고 내가 해 볼 방법을 짝과 견준다(교사 진행).' },
        activity: {
          title: '기분이 나아지는 방법 그래프', tool: 'chart',
          teacher: '"눈금 한 칸은 몇 명일까요? 10명은 어디까지 그릴까요?" 표의 수를 소리 내어 읽고 막대를 그리게 한다. 눈금 한 칸을 1명으로 세는 학생에게 "눈금 숫자가 몇씩 커지나요?"라고 묻는다. 그래프를 다 그리면 "가장 많은 방법이 꼭 나에게 맞는 방법일까요?"라고 묻고, 사람마다 맞는 방법이 다르며 이야기하기처럼 다른 사람과 나누는 방법도 있다는 것을 짚는다.',
          task: '가상의 3학년 반 조사 표를 보고 막대그래프를 완성한 뒤, 그래프를 읽고 물음에 답해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '표를 보고 기분이 나아지는 방법 막대그래프를 완성해요.', toolOptions: Object.assign({}, BAR, { mode: 'build', data: FEEL }), target: { build: true }, difficulty: 0.2,
              levels: { easy: { prompt: '표를 보고 방법 3개의 막대그래프를 완성해요.', toolOptions: { data: FEEL.slice(0, 3), given: [0] }, target: { build: true } } } },
            { prompt: '그래프에서 가장 많은 친구가 고른 방법은?', toolOptions: Object.assign({}, BAR, { mode: 'read', data: FEEL, question: '가장 많은 방법은?', choices: FEEL.map((d) => d[0]) }), target: { pick: 0 }, difficulty: 0.15 },
            { prompt: '그래프에서 둘째로 많은 친구가 고른 방법은?', toolOptions: Object.assign({}, BAR, { mode: 'read', data: FEEL, question: '둘째로 많은 방법은?', choices: FEEL.map((d) => d[0]) }), target: { pick: 1 }, difficulty: 0.2, conclude: '마음을 돌보는 방법은 여러 가지예요. 이야기하기처럼 누군가와 나누는 방법도 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '표의 빈칸을 채워요.', columns: ['방법', '친구 수(명)'], cells: [['운동하기', '10'], ['이야기하기', ''], ['음악 듣기', '6']], answer: '8' }] },
        notes: '그래프 자료는 가상이다. 반에서 실제로 조사할 때는 손들기로 "좋아하는 방법"만 묻고, 힘들었던 일은 묻지 않는다.',
      }),
      C({
        id: 'saf-violence.e34.heart-care.activity.mind-signal', type: 'activity', title: '마음 신호등 따라 하기',
        method: '마음 신호등 동작 따라 하기', tool: 'timer', minutes: 13,
        levels: { easy: '신호등 카드 2장(멈춰요·숨 고르기)을 놓고, 숨 고르기 타이머를 맞춰 따라 한다.', base: '카드 3장(멈춰요·숨 고르기·말해요) 차례를 놓고 타이머에 맞춰 따라 한 뒤 스스로 점검 2칸.', challenge: '스스로 점검 3칸을 하고, 교사가 읽어 주는 상황 카드에 신호등 단계로 대답한다(교사 진행).' },
        activity: {
          title: '마음 신호등 따라 하기', tool: 'timer',
          teacher: '"화가 나거나 속상할 때 바로 소리 지르면 어떻게 될까요? 신호등처럼 해 볼까요?" 빨강에서 몸을 멈추고, 노랑에서 숨을 천천히 쉬고, 초록에서 마음을 말로 하는 것을 교사가 먼저 보인다. 타이머에 맞춰 반 전체가 숨 고르기를 따라 한다. 숨을 빨리 몰아쉬는 학생에게 "풍선을 천천히 부는 것처럼 해 볼까요?"라고 말해 준다. 숨을 골라도 마음이 계속 힘들면 믿는 어른에게 말하는 것이 초록 신호라는 것을 짚는다.',
          task: '마음 신호등 카드를 차례대로 놓고, 숨 고르기 타이머를 맞춰 따라 한 뒤, 해낸 것에 표시해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '마음 신호등 카드를 차례대로 놓아요.', toolOptions: { title: '마음 신호등', cards: ['초록: 말해요', '빨강: 멈춰요', '노랑: 숨 고르기'] }, target: { order: ['빨강: 멈춰요', '노랑: 숨 고르기', '초록: 말해요'] }, difficulty: 0.15,
              levels: { easy: { prompt: '마음 신호등 카드를 차례대로 놓아요(2장).', toolOptions: { cards: ['노랑: 숨 고르기', '빨강: 멈춰요'] }, target: { order: ['빨강: 멈춰요', '노랑: 숨 고르기'] } } } },
            { prompt: '숨 고르기 타이머를 우리 반 약속(들이쉬기 5초, 내쉬기 5초, 3번)으로 맞춰요.', toolOptions: { title: '숨 고르기(우리 반 약속)', plan: { work: 10, rest: 0, rounds: 1 } }, target: { plan: { work: 5, rest: 5, rounds: 3 } }, difficulty: 0.2 },
            { prompt: '따라 해 본 것에 스스로 표시해요.', toolOptions: { title: '마음 신호등 점검' }, target: { selfCheck: ['몸을 멈췄어요', '숨을 천천히 쉬었어요'] }, difficulty: 0.1,
              levels: { challenge: { prompt: '따라 해 본 것에 스스로 표시해요(3칸).', target: { selfCheck: ['몸을 멈췄어요', '숨을 천천히 쉬었어요', '마음을 말로 했어요'] } } },
              conclude: '멈추고, 숨 고르고, 말해요. 계속 힘들면 믿는 어른에게 말하는 것이 초록 신호예요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '신호등 색에 할 일을 써요.', columns: ['색', '할 일'], cells: [['빨강', ''], ['노랑', ''], ['초록', '']], answer: '멈춰요, 숨 고르기, 말해요' }] },
        notes: '숨 고르기 시간(들이쉬기 5초·내쉬기 5초·3번)은 우리 반 연습용 약속이다. 어지러워하는 학생은 그냥 편히 쉬게 한다.',
      }),
      C({
        id: 'saf-violence.e34.heart-care.activity.friend-choice', type: 'activity', title: '갈림길: "다 싫어"라는 친구',
        method: "친구가 '다 싫어'라고 할 때 갈림길", tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '갈림 2번, 보기 3개씩 고르며 결과를 따라간다(둘째 문항은 친구가 말리지 말라고 할 때).', challenge: '갈림 2번을 지난 뒤 근거 카드 3장 가운데 알맞은 것을 고른다.' },
        activity: {
          title: '갈림길: "다 싫어"라는 친구', tool: 'dilemma',
          teacher: '"친구가 \'다 싫어\'라고 할 때 내가 할 수 있는 일은 무엇일까요?" 결과를 소리 내어 읽고 다음 장면에서 다시 고른다. 친구 고민을 혼자 다 해결해 주려는 학생에게 "친구를 아끼는 마음이 크네요. 그런데 어린이 혼자 다 해결할 수 있을까요?"라고 되물어, 들어 주고 어른께 함께 가는 것이 우리 몫이라는 것을 짚는다. "도움을 청하면 약한 거예요"라는 말에는 "도움을 청하는 것은 용기 있는 일이에요"라고 말한다.',
          task: '장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('요즘 말이 없어진 친구가 "다 싫어"라고 해요.', {
              text: '요즘 말이 없어진 친구 솔이가 쉬는 시간에 "다 싫어"라고 해요.', motif: 'cloud',
              choices: [
                { id: 'sit', text: '곁에 앉아 "무슨 일 있어?" 묻는다', result: '솔이가 "아무도 내 마음 몰라"라고 해요.', ending: '곁에 앉아 물어본 것이 솔이에게 힘이 됐어요.', next: {
                  text: '솔이가 고개를 숙이고 한숨을 쉬어요.', choices: [
                    { id: 'go', text: '"많이 힘들었구나. 같이 선생님께 가자"', result: '선생님이 솔이 이야기를 들어 주셨어요.', impact: [{ who: '솔이', text: '마음이 조금 가벼워졌어요', tone: 1 }], ending: '들어 주고 어른께 함께 가서 솔이가 도움을 받았어요.' },
                    { id: 'change', text: '"그런 말 하지 마" 말을 돌린다', result: '솔이가 다시 입을 닫았어요.', impact: [{ who: '솔이', text: '마음을 몰라줘요', tone: -1 }], why: '마음을 끝까지 들어 주어요.' },
                    { id: 'leave', text: '"나도 몰라" 하고 간다', result: '솔이는 혼자 남았어요.', impact: [{ who: '솔이', text: '외로워요', tone: -1 }], why: '힘든 친구 곁에 있어 주고 어른께 함께 가요.' },
                  ] } },
                { id: 'annoy', text: '"또 왜 그래?" 짜증 낸다', result: '솔이가 더 움츠러들었어요.', impact: [{ who: '솔이', text: '마음이 아파요', tone: -1 }], why: '짜증 대신 걱정하는 마음으로 물어요.' },
                { id: 'deaf', text: '못 들은 척한다', result: '솔이는 그날 내내 혼자였어요.', impact: [{ who: '솔이', text: '외로워요', tone: -1 }], why: '힘든 마음을 말하는 친구를 지나치지 말아요.' },
              ] }, [['sit', 'go']],
            [{ id: 'listen', text: '들어 주면 마음이 가벼워져서' }, { id: 'adult', text: '어른이 함께 도울 수 있어서' }, { id: 'weak', text: '도움을 청하면 약한 거라서', why: '도움을 청하는 것은 용기 있는 일이에요.' }], ['listen', 'adult'], 0.2),
            DIL('친구가 "아무한테도 말하지 마"라고 해요.', {
              text: '솔이가 "요즘 다 싫어. 그런데 선생님한테는 말하지 마"라고 해요.', motif: 'cloud',
              choices: [
                { id: 'care', text: '"네가 소중해서 어른께 같이 말하고 싶어"', result: '솔이가 머뭇거려요.', ending: '솔이가 소중하다고 말해 준 것이 큰 힘이 됐어요.', next: {
                  text: '솔이가 "선생님이 뭐라고 할까 봐 걱정돼"라고 해요.', choices: [
                    { id: 'with', text: '"내가 곁에 있을게" 함께 간다', result: '둘이 함께 상담 선생님을 찾아갔어요.', impact: [{ who: '솔이', text: '든든해요', tone: 1 }], ending: '함께 가 주어서 솔이가 용기를 냈어요.' },
                    { id: 'secret', text: '"그럼 비밀로 할게"', result: '솔이는 계속 혼자 힘들어했어요.', impact: [{ who: '솔이', text: '계속 힘들어요', tone: -1 }], why: '많이 힘든 마음은 어른께 알려야 하는 비밀이에요.' },
                    { id: 'solo', text: '"내가 다 해결해 줄게"', result: '나도 솔이도 지쳐 버렸어요.', impact: [{ who: '나와 솔이', text: '둘 다 힘들어요', tone: -1 }], why: '어린이 혼자 해결하려 하지 말고 어른과 함께해요.' },
                  ] } },
                { id: 'promise', text: '약속하고 아무에게도 말 안 한다', result: '솔이 마음은 그대로 무거웠어요.', impact: [{ who: '솔이', text: '도움을 못 받아요', tone: -1 }], why: '친구가 많이 힘들면 비밀보다 친구가 먼저예요.' },
                { id: 'gossip', text: '다른 친구들에게 이야기한다', result: '솔이가 창피해서 더 숨었어요.', impact: [{ who: '솔이', text: '속상해요', tone: -1 }], why: '친구들이 아니라 믿는 어른께 알려요.' },
              ] }, [['care', 'with']],
            [{ id: 'precious', text: '솔이가 소중해서' }, { id: 'help', text: '어른과 함께하면 더 잘 도울 수 있어서' }, { id: 'betray', text: '말하면 배신이라서', why: '친구를 지키려고 알리는 것은 배신이 아니에요.' }], ['precious', 'help'], 0.25),
            DIL('나도 "다 싫어" 하는 마음이 든다면?', {
              text: '만약 내가 요즘 "다 싫어" 하는 마음이 계속 든다면 어떻게 할까요?', motif: 'rain',
              choices: [
                { id: 'say', text: '믿는 어른께 "요즘 힘들어요" 말한다', result: '어른이 "말해 줘서 고마워" 하셨어요.', ending: '힘든 마음을 말한 것은 용기 있는 일이에요.', next: {
                  text: '어른이 "어떤 마음인지 더 들려줄래?" 물어요.', choices: [
                    { id: 'share', text: '내 마음을 천천히 이야기한다', result: '어른이 함께 방법을 찾아 주셨어요.', impact: [{ who: '나', text: '마음이 가벼워졌어요', tone: 1 }], ending: '마음을 나누니 함께 방법을 찾을 수 있었어요.' },
                    { id: 'deny', text: '"아니에요, 괜찮아요" 숨긴다', result: '마음은 그대로 무거웠어요.', impact: [{ who: '나', text: '계속 힘들어요', tone: -1 }], why: '괜찮은 척하지 않아도 돼요. 천천히 말해도 돼요.' },
                    { id: 'angry', text: '화를 내고 나가 버린다', result: '이야기를 끝까지 나누지 못했어요.', impact: [{ who: '나', text: '도움을 못 받았어요', tone: -1 }], why: '숨 고르기를 하고 다시 이야기해 봐요.' },
                  ] } },
                { id: 'bear', text: '아무에게도 말 안 하고 참는다', result: '힘든 마음이 점점 커졌어요.', impact: [{ who: '나', text: '혼자 힘들어요', tone: -1 }], why: '힘든 마음은 숨기지 않아도 돼요. 믿는 어른께 말해요.' },
                { id: 'hide', text: '"도움 청하면 약한 거야" 참는다', result: '혼자 끙끙 앓았어요.', impact: [{ who: '나', text: '마음이 무거워요', tone: -1 }], why: '도움을 청하는 것은 약한 것이 아니라 용기예요.' },
              ] }, [['say', 'share']],
            [{ id: 'brave', text: '도움을 청하는 것은 용기라서' }, { id: 'together', text: '함께하면 방법을 찾을 수 있어서' }, { id: 'hidebest', text: '힘든 마음은 숨기는 게 좋아서', why: '힘든 마음은 숨기지 않고 나누면 가벼워져요.' }], ['brave', 'together'], 0.3, { conclude: '나나 친구가 많이 힘들면 들어 주고, 믿는 어른에게 함께 말해요. 생명은 소중해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '친구가 많이 힘들어할 때 내가 할 일은?', options: ['혼자 다 해결해 줘요', '들어 주고 어른께 함께 가요', '모른 척해요'], answer: '들어 주고 어른께 함께 가요' }] },
        notes: '장면은 "다 싫어"까지만 쓰고 그 이상의 말이나 행동을 그리지 않는다. 학생 가운데 걱정되는 말을 하는 학생이 있으면 수업 뒤 조용히 듣고 학교의 위기 학생 절차(담임·상담교사·보호자 연락)를 따른다.',
      }),
      C({
        id: 'saf-violence.e34.heart-care.activity.helper-map', type: 'activity', title: '나를 도와줄 사람 그물',
        method: '나를 도와줄 사람 생각 그물', tool: 'mindmap', minutes: 13,
        levels: { easy: '도와줄 사람 잇기 2줄, 고르기 카드 4장, 나누기 카드 4장(놓으면 바로 맞는지 알림).', base: '도와줄 사람 4가지(보호자·담임·상담 선생님·1388)와 할 일 잇기, 카드 6장 고르기·나누기.', challenge: '남는 카드를 가려내고, 빠진 사람(보건 선생님·이웃 어른 등)을 더해 짝과 견준다.' },
        activity: {
          title: '나를 도와줄 사람 그물', tool: 'mindmap',
          teacher: '"힘들 때 나를 도와줄 사람은 누가 있을까요? 그 사람은 무엇을 해 줄 수 있을까요?" 가지마다 할 일 카드를 붙이게 한다. "도와줄 사람이 없어요"라는 학생에게 "학교에는 누가 있지요? 전화로 들어 주는 곳도 있었지요?"라고 함께 찾는다. 1388은 고민을 들어 주는 상담 번호이고, 지금 바로 위험할 때는 112라는 것을 구분해 준다.',
          task: '가운데 "힘들 때"에서 나를 도와줄 사람 가지를 잇고, 각자 도와줄 수 있는 일을 붙여요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            MATCH('도와줄 사람과 도와줄 수 있는 일을 이어요.', { topic: '힘들 때' }, [['보호자', '집에서 곁에 있어요'], ['담임 선생님', '학교에서 바로 도와요'], ['상담 선생님', '마음 이야기를 들어요'], ['1388', '전화로 고민을 들어요']], '혼자 참아야 해요', 0.15),
            PICK('힘들 때 도와줄 수 있는 사람만 골라 담아요.', { basket: '도와줄 사람' }, [{ id: 'parent', text: '보호자', ok: true }, { id: 'online', text: '처음 본 채팅 상대' }, { id: 'teacher', text: '담임 선생님', ok: true }, { id: 'none', text: '아무도 없어' }, { id: 'counsel', text: '상담 선생님', ok: true }, { id: 'line', text: '1388 상담', ok: true }], ['parent', 'online', 'teacher', 'none'], [{ id: 'nurse', text: '보건 선생님', ok: true }, { id: 'bear', text: '"참아" 하는 친구' }], 0.2),
            SORT('도와줄 사람을 학교 안과 학교 밖으로 나누어요.', { topic: '어디에 있을까' }, ['학교 안', '학교 밖'], [['담임 선생님', '상담 선생님', '보건 선생님'], ['보호자', '할머니·할아버지', '1388 전화 상담']], 2, [['방과후 선생님'], ['믿는 이웃 어른']], 0.25, { conclude: '힘들 때 도와줄 사람은 학교 안에도 밖에도 있어요. 혼자 참지 않아도 돼요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '힘들 때 이야기할 수 있는 사람을 두 명 써요(가족·선생님 등).' }] },
      }),
      C({
        id: 'saf-violence.e34.heart-care.wrap.care-plan', type: 'wrap', title: '이번 주 마음 돌봄 고르기',
        method: '오늘부터 할 마음 돌봄 고르기', tool: 'kitchen', minutes: 7,
        levels: { easy: '마음 돌봄 항목 4개 가운데 해 볼 것에 표시한다.', base: '항목 6개 가운데 이번 주에 해 볼 것 두 가지에 표시한다.', challenge: '고른 것을 언제 할지 한 마디 덧붙인다(출구 3번).' },
        wrap: {
          teacher: '"이번 주에 내 마음을 돌보려고 해 볼 것은 무엇인가요?" 목록을 함께 읽고 두 가지를 고르게 한다. 하나도 못 고르는 학생에게 "오늘 신호등 숨 고르기는 해 볼 만했나요?"라고 함께 찾는다. "어른께 마음 말하기"는 마음이 많이 힘들 때 꼭 하는 일이라는 것을 다시 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '이번 주 마음 돌봄', items: [{ id: 'song', text: '좋아하는 노래 듣기' }, { id: 'talk', text: '친구와 이야기하기' }, { id: 'breath', text: '숨 천천히 쉬기' }, { id: 'run', text: '밖에서 뛰어놀기' }, { id: 'draw', text: '그림·일기 쓰기' }, { id: 'adult', text: '어른께 마음 말하기' }] }, prompt: '이번 주에 해 볼 마음 돌봄에 표시해요.', target: { selfCheck: true }, difficulty: 0.1,
              levels: { easy: { toolOptions: { items: [{ id: 'song', text: '좋아하는 노래 듣기' }, { id: 'talk', text: '친구와 이야기하기' }, { id: 'breath', text: '숨 천천히 쉬기' }, { id: 'adult', text: '어른께 마음 말하기' }] } } } },
            { type: 'choice', prompt: '마음이 많이 힘들 때 꼭 할 일은?', options: ['혼자 꾹 참기', '믿는 어른께 말하기', '아무 일 없는 척'], answer: 1, difficulty: 0.1, explain: '많이 힘들 때는 믿는 어른께 말해요. 1388에서도 들어 줘요.' },
            { type: 'short', prompt: '고른 마음 돌봄을 언제 할지 써요.' },
          ],
        },
        worksheet: {
          title: '나의 마음 돌봄',
          items: [
            { type: 'check', prompt: '이번 주에 해 볼 것에 표시해요.', options: ['숨 천천히 쉬기', '친구와 이야기하기', '어른께 마음 말하기'] },
            { type: 'short', prompt: '힘들 때 이야기할 믿는 어른 한 명을 써요.' },
          ],
          easy: { note: '노래, 이야기, 숨 고르기를 떠올려요.', items: [{ type: 'choice', prompt: '많이 힘들 때는?', options: ['어른께 말해요', '혼자 참아요'], answer: '어른께 말해요' }] },
        },
      }),
      C({
        id: 'saf-violence.e34.heart-care.wrap.cheer-words', type: 'wrap', title: '힘이 되는 말 카드',
        method: '힘이 되는 말 카드', tool: 'wordcards', minutes: 7,
        levels: { easy: '말 카드 3장 가운데 힘이 되는 말을 고른다.', base: '말 카드 5장 가운데 힘이 되는 말을 모두 고른다.', challenge: '고른 말을 어느 장면에서 건넬지 짝과 잇는다(교사 진행).' },
        wrap: {
          teacher: '"힘든 친구에게 어떤 말을 건네면 힘이 될까요?" 카드를 고른 뒤 짝에게 실제로 말하듯 건네게 한다. "그건 별거 아냐"를 고른 학생에게 "친구에게는 큰일일 수도 있어요. 들은 친구 마음은 어떨까요?"라고 되묻는다. 말을 건넨 뒤에도 친구가 많이 힘들어하면 함께 어른께 간다는 것을 다시 짚는다.',
          exitTicket: [
            EX('wordcards', PICK('힘든 친구에게 힘이 되는 말을 골라요.', { basket: '힘이 되는 말' }, [{ id: 'thanks', text: '말해 줘서 고마워', ok: true }, { id: 'small', text: '그건 별거 아냐' }, { id: 'with', text: '같이 가 줄게', ok: true }, { id: 'weak', text: '울지 마, 약해 보여' }, { id: 'precious', text: '너는 소중해', ok: true }], ['thanks', 'small', 'with'], null, 0.15)),
            { type: 'choice', prompt: '친구가 "힘들어"라고 할 때 먼저 할 일은?', options: ['끝까지 들어 주기', '바로 충고하기', '다른 이야기 하기'], answer: 0, difficulty: 0.1, explain: '끝까지 들어 주는 것이 가장 먼저예요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '힘이 되는 말',
          items: [
            { type: 'check', prompt: '힘이 되는 말에 표시해요.', options: ['말해 줘서 고마워', '같이 가 줄게', '그건 별거 아냐'] },
            { type: 'short', prompt: '내가 들으면 힘이 날 것 같은 말을 한 줄로 써요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 4학년 · 학교폭력 종류별 예방법 (별표 2 초등 '학교폭력의 종류를 알고, 종류별 예방법 알기' + 7대 표준안 학교폭력 소분류)
  // ======================================================================================================
  {
    const C = T('violence-types', 4);
    const TYPES = ['신체폭력', '언어폭력', '따돌림', '빼앗기', '강요', '사이버폭력'];
    const SAFE = [['교실', 18], ['운동장', 14], ['복도', 10], ['화장실', 6]];
    const SBAR = { type: 'bar', title: '안전하다고 느끼는 곳(가상의 4학년 반)', unit: '명', xLabel: '곳', yLabel: '친구 수', max: 20, scale: 2 };
    const SCHOOL = {
      title: '우리 학교', grid: [6, 4],
      regions: [
        { name: '교실', cells: [[0, 0], [1, 0]] }, { name: '교무실', cells: [[2, 0]] }, { name: '도서관', cells: [[3, 0]] }, { name: '화장실', cells: [[4, 0], [5, 0]] },
        { name: '복도', cells: [[0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1]] },
        { name: '운동장', cells: [[0, 2], [1, 2], [2, 2], [3, 2], [0, 3], [1, 3], [2, 3], [3, 3]] }, { name: '운동장 구석', cells: [[4, 2], [5, 2], [4, 3], [5, 3]] },
      ],
    };
    M.push(
      C({
        id: 'saf-violence.e34.violence-types.intro.type-names', type: 'intro', title: '학교폭력 종류 이름 알기',
        method: '폭력 종류 이름과 그림 짝 짓기', tool: 'wordcards', minutes: 6,
        levels: { easy: '종류 이름 3쌍(신체·언어·따돌림)을 함께 잇는다.', base: '종류 이름 6쌍을 잇는다.', challenge: '6쌍을 이은 뒤 헷갈린 짝을 짝과 이야기한다(교사 진행).' },
        intro: {
          teacher: '"학교폭력에는 때리는 것만 있을까요?" 시연 단추로 장면 옆에 종류 이름 카드가 놓이는 것을 보인다. "때리지 않으면 폭력이 아니에요"라는 말이 나오면 "말로 놀리거나, 혼자만 빼거나, 단체방에서 욕하는 것은 마음을 다치게 할까요?"라고 되묻는다. 종류마다 막는 방법이 달라서 이름을 알아 두면 예방하기 쉽다는 것을 짚는다.',
          student: '학교폭력 장면과 종류 이름을 이어요. 때리는 것만 폭력이 아니에요.',
          demo: { tool: 'wordcards', options: { mode: 'match', slots: [{ id: 'hit', label: '밀치고 때려요' }, { id: 'word', label: '외모를 놀려요' }, { id: 'out', label: '혼자만 빼고 놀아요' }, { id: 'take', label: '물건을 뺏어 가요' }, { id: 'force', label: '억지로 시켜요' }, { id: 'net', label: '단체방에서 욕해요' }], cards: TYPES.slice().reverse(), shuffle: false }, sequence: [{ match: { hit: '신체폭력', word: '언어폭력', out: '따돌림' } }, { match: { hit: '신체폭력', word: '언어폭력', out: '따돌림', take: '빼앗기', force: '강요', net: '사이버폭력' } }] },
          art: { draw: 'six small paper cards in two rows, each with a simple paper icon: a pushing hand, a speech bubble with a jagged edge, one child left outside a circle of friends, a pencil case being snatched, a finger pointing at a chore, and a paper phone with an angry message', banner: '학교폭력의 여러 모습', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      C({
        id: 'saf-violence.e34.violence-types.intro.risk-spots', type: 'intro', title: '어른 눈이 닿기 어려운 곳',
        method: '학교 지도에 다툼 잦은 곳 핀', tool: 'map', minutes: 6,
        levels: { easy: '화장실 한 곳에 핀이 꽂히는 것을 함께 본다.', base: '화장실과 운동장 구석 두 곳에 핀이 꽂히는 것을 본다.', challenge: '두 곳을 보고 그곳을 안전하게 할 방법을 짝과 말한다(교사 진행).' },
        intro: {
          teacher: '"학교에서 선생님 눈이 잘 닿지 않는 곳은 어디일까요?" 시연 단추로 화장실과 운동장 구석에 핀이 꽂히는 것을 보인다. "그곳에는 절대 가면 안 돼요"라는 말이 나오면 "꼭 가야 할 때는 어떻게 하면 더 안전할까요?"라고 되물어, 친구와 함께 가기·일이 생기면 바로 알리기를 끌어낸다. 장소가 나쁜 것이 아니라 어른이 보기 어려운 곳일수록 서로 살펴야 한다는 것을 짚는다.',
          student: '학교 지도에서 어른 눈이 닿기 어려운 곳을 찾아보고, 그곳을 안전하게 할 방법을 떠올려요.',
          demo: { tool: 'map', options: SCHOOL, sequence: [{ pin: [4, 0] }, { pin: [5, 3] }] },
          art: { draw: 'a paper cut school map with classrooms, a long hallway, restrooms and a quiet corner of the playground behind a paper tree, two small paper pins standing on the restroom and the corner', banner: '서로 살펴요', extra: [{ motif: 'tree', x: 300, y: 222 }] },
        },
      }),
      C({
        id: 'saf-violence.e34.violence-types.activity.type-sort', type: 'activity', title: '장면을 종류별로 나누기',
        method: '장면 카드를 종류별로 나누기', tool: 'mindmap', minutes: 14,
        levels: { easy: '세 칸 문항은 칸마다 1장(3장), 여섯 칸 문항은 앞의 두 칸만 나눈다(놓으면 바로 맞는지 알림).', base: '세 칸 문항 6장씩, 여섯 칸 문항 6장을 나눈다.', challenge: '칸마다 헷갈리는 카드가 더해진 판을 나누고, 두 종류에 걸칠 수 있는 장면(때리며 뺏기 등)은 짝과 토의한다.' },
        activity: {
          title: '장면을 종류별로 나누기', tool: 'mindmap',
          teacher: '"이 장면은 몸을 다치게 하나요, 말로 다치게 하나요, 끼워 주지 않나요?" 카드를 놓을 때마다 종류 이름과 까닭을 함께 말하게 한다. "온라인에서 한 말은 괜찮아요"라는 학생에게 "단체방에 올린 욕을 읽은 친구 마음은 교실에서 들은 것과 다를까요?"라고 묻는다. 단체방에서 한 친구만 빼는 것처럼 온라인에서 일어나는 괴롭힘은 사이버폭력으로 나눈다고 정해 준다.',
          task: '학교폭력 장면 카드를 종류 칸에 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORT('몸·말·따돌림 장면을 나누어요.', { topic: '어떤 폭력일까' }, ['신체폭력', '언어폭력', '따돌림'], [['밀치고 때리기', '발 걸어 넘어뜨림'], ['외모 놀리기', '욕하고 겁주기'], ['모둠에 안 끼워 줌', '말을 걸면 무시']], 1, [['일부러 세게 부딪침'], ['소문 지어 퍼뜨림'], ['"쟤랑 놀지 마"']], 0.15),
            SORT('빼앗기·강요·사이버폭력 장면을 나누어요.', { topic: '이것도 폭력' }, ['빼앗기', '강요', '사이버폭력'], [['준비물 빼앗기', '돈 달라고 뺏기'], ['심부름 강요', '숙제 대신 시킴'], ['단체방에서 빼기', '몰래 사진 올림']], 1, [['빌린다며 안 줌'], ['"안 하면 안 놀아"'], ['악플 달기']], 0.2),
            SORT2('여섯 종류에 장면을 하나씩 나누어요.', { topic: '학교폭력 여섯 모습' }, TYPES, [['세게 꼬집기'], ['"바보" 놀림'], ['혼자만 빼고 놀기'], ['간식 빼앗기'], ['억지로 춤추게 함'], ['단체방 욕설']], [[], ['별명 계속 부르기'], [], [], [], ['몰래 찍어 올리기']], 0.25, { conclude: '학교폭력은 몸·말·따돌림·빼앗기·강요·사이버폭력처럼 여러 모습이에요. 때리지 않아도 폭력이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '장면에 맞는 종류를 써요.', columns: ['장면', '종류'], cells: [['외모 놀리기', ''], ['단체방에서 빼기', ''], ['심부름 강요', '']], answer: '언어폭력, 사이버폭력, 강요' }] },
      }),
      C({
        id: 'saf-violence.e34.violence-types.activity.prevent-match', type: 'activity', title: '종류마다 예방 행동 짝 짓기',
        method: '종류마다 예방 행동 짝 짓기', tool: 'kitchen', minutes: 13,
        levels: { easy: '종류와 예방 행동 2쌍을 잇는다(놓으면 바로 맞는지 알림).', base: '3쌍씩 세 문항(여섯 종류와 보았을 때)을 잇는다.', challenge: '예방이 아닌 함정 카드가 한 장씩 섞인 판에서 그것을 빼고 잇는다.' },
        activity: {
          title: '종류마다 예방 행동 짝 짓기', tool: 'kitchen',
          teacher: '"이 종류의 폭력을 막으려면 내가 먼저 할 수 있는 일은 무엇일까요?" 한 줄을 이을 때마다 "○○를 막으려면 ○○해요" 틀로 말하게 한다. 함정 카드 "똑같이 갚기"를 넣으려는 학생에게 "갚으면 폭력이 멈출까요, 하나 더 생길까요?"라고 묻는다. 예방은 내가 하지 않기, 친구를 지키기, 일이 생기면 알리기 세 가지라는 것을 짚는다.',
          task: '학교폭력 종류 칸 옆에 알맞은 예방 행동 카드를 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            MATCH('몸·말·따돌림을 막는 행동을 이어요.', { autoMotif: false, title: '종류 → 예방' }, [['신체폭력', '손은 내 몸에'], ['언어폭력', '바르고 고운 말'], ['따돌림', '"같이 하자" 말하기']], '못 본 척하기', 0.15),
            MATCH('빼앗기·강요·사이버폭력을 막는 행동을 이어요.', { autoMotif: false, title: '종류 → 예방' }, [['빼앗기', '비싼 물건은 집에'], ['강요', '"안 해" 분명히 거절'], ['사이버폭력', '올리기 전 생각하기']], '똑같이 갚기', 0.2),
            MATCH('이럴 때 주변 친구가 할 일을 이어요.', { autoMotif: false, title: '보았을 때' }, [['친구가 놀림 받을 때', '곁에 가 주기'], ['단체방에 욕이 올라올 때', '화면 저장해 알리기'], ['억지 심부름을 시킬 때', '선생님께 알리기']], '시키는 대로 하기', 0.25, { conclude: '내가 하지 않기, 친구 곁에 가기, 보면 어른께 알리기가 학교폭력 예방이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '사이버폭력을 막는 행동은?', options: ['재미있으면 바로 올려요', '올리기 전에 한 번 더 생각해요', '친구 사진을 몰래 올려요'], answer: '올리기 전에 한 번 더 생각해요' }] },
      }),
      C({
        id: 'saf-violence.e34.violence-types.activity.errand-choice', type: 'activity', title: '갈림길: 심부름을 시킬 때',
        method: '심부름을 강요받을 때 갈림길', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '갈림 2번, 보기 3개씩 고르며 결과를 따라간다(셋째 문항은 "안 하면 단체방에서 뺄 거야" 압박).', challenge: '갈림 2번을 지난 뒤 근거 카드 3장 가운데 알맞은 것을 고른다.' },
        activity: {
          title: '갈림길: 심부름을 시킬 때', tool: 'dilemma',
          teacher: '"시키는 대로 하면 그 친구는 멈출까요?" 결과를 소리 내어 읽고 다음 장면에서 다시 고른다. 시키는 대로 하는 길을 고른 학생을 나무라지 않고 "무서우면 그럴 수 있어요. 그다음엔 무엇을 해 볼까요?"라고 되물어 다른 길도 가 보게 한다. "같이 안 논다"는 말로 겁주는 것도 강요라는 것, 잘못은 시키는 친구에게 있다는 것을 짚는다.',
          task: '장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('힘센 친구가 날마다 간식을 사 오래요.', {
              text: '힘센 친구 태오가 날마다 은호에게 "간식 사 와"라고 시켜요. 내가 은호라면?', motif: 'house',
              choices: [
                { id: 'no', text: '"싫어, 안 사 와" 분명히 말한다', result: '태오가 잠깐 멈칫했어요.', ending: '분명히 거절한 것은 용기 있는 일이에요.', next: {
                  text: '태오가 "안 하면 같이 안 논다"라고 해요.', choices: [
                    { id: 'tell', text: '선생님과 보호자께 알린다', result: '선생님이 태오와 이야기를 나누셨어요.', impact: [{ who: '은호', text: '마음이 놓였어요', tone: 1 }], ending: '거절하고 알려서 강요가 멈췄어요.' },
                    { id: 'give', text: '무서워서 사다 준다', result: '다음 날 또 시켰어요.', impact: [{ who: '은호', text: '계속 힘들어요', tone: -1 }], why: '시키는 대로 하면 강요가 계속돼요. 어른께 알려요.' },
                    { id: 'money', text: '용돈을 몰래 더 쓴다', result: '용돈이 다 떨어지고 걱정이 커졌어요.', impact: [{ who: '은호', text: '혼자 끙끙 앓아요', tone: -1 }], why: '혼자 감당하지 말고 어른께 알려요.' },
                  ] } },
                { id: 'obey', text: '시키는 대로 사다 준다', result: '태오가 다음 날 더 많이 시켰어요.', impact: [{ who: '은호', text: '부담이 커져요', tone: -1 }], why: '한 번 따르면 강요가 커질 수 있어요.' },
                { id: 'pass', text: '다른 친구에게 대신 시킨다', result: '다른 친구도 힘들어졌어요.', impact: [{ who: '다른 친구', text: '같이 괴로워요', tone: -1 }], why: '괴롭힘을 넘기면 피해 친구가 늘어요.' },
              ] }, [['no', 'tell']],
            [{ id: 'force', text: '억지로 시키는 것은 폭력이라서' }, { id: 'help', text: '어른이 강요를 멈출 수 있어서' }, { id: 'once', text: '한 번쯤은 해 줘도 돼서', why: '한 번이 되풀이되는 강요가 될 수 있어요.' }], ['force', 'help'], 0.2),
            DIL('친구가 날마다 가방을 들고 다녀요.', {
              text: '태오가 윤이에게 날마다 자기 가방을 들게 하는 것을 보았어요.', motif: 'star',
              choices: [
                { id: 'ask', text: '윤이에게 "괜찮아?" 묻는다', result: '윤이가 "말하면 더 시킬까 봐 무서워"라고 해요.', ending: '물어봐 준 것만으로도 윤이에게 힘이 됐어요.', next: {
                  text: '윤이가 고개를 숙이고 가방을 다시 들어요.', choices: [
                    { id: 'go', text: '"같이 선생님께 가자"', result: '선생님이 윤이 이야기를 들어 주셨어요.', impact: [{ who: '윤이', text: '든든해요', tone: 1 }], ending: '함께 알려서 윤이를 지켰어요.' },
                    { id: 'bear', text: '"그냥 참아" 말한다', result: '윤이는 계속 가방을 들었어요.', impact: [{ who: '윤이', text: '계속 힘들어요', tone: -1 }], why: '참으라고 하지 말고 함께 어른께 가요.' },
                    { id: 'fight', text: '태오와 대신 싸운다', result: '다툼이 커져 둘 다 다칠 뻔했어요.', impact: [{ who: '나와 태오', text: '다칠 수 있어요', tone: -1 }], why: '싸우지 말고 어른께 알려요.' },
                  ] } },
                { id: 'laugh', text: '구경하며 웃는다', result: '태오가 더 신나서 시켰어요.', impact: [{ who: '윤이', text: '더 창피해요', tone: -1 }], why: '웃어 주면 강요하는 친구에게 힘을 줘요.' },
                { id: 'skip', text: '모른 척한다', result: '윤이는 혼자 남았어요.', impact: [{ who: '윤이', text: '외로워요', tone: -1 }], why: '보고 지나치면 강요가 계속돼요.' },
              ] }, [['ask', 'go']],
            [{ id: 'with', text: '함께 가면 윤이가 덜 무서워서' }, { id: 'stop', text: '알려야 강요가 멈춰서' }, { id: 'mine', text: '내가 시킨 게 아니라서', why: '주변 친구도 학교폭력을 멈추게 도울 수 있어요.' }], ['with', 'stop'], 0.25),
            DIL('"안 하면 단체방에서 뺄 거야"라고 해요.', {
              text: '태오가 "숙제 대신 해 와. 안 하면 단체방에서 뺄 거야"라고 해요.', motif: 'cloud',
              choices: [
                { id: 'refuse', text: '"안 해" 하고 보호자께 말한다', result: '보호자가 "말해 줘서 고마워"라고 하셨어요.', ending: '압박에도 거절하고 말한 것은 아주 잘한 일이에요.', next: {
                  text: '보호자가 "선생님께도 같이 알리자"라고 해요.', choices: [
                    { id: 'both', text: '보호자와 함께 선생님께 알린다', result: '선생님이 단체방과 강요를 함께 살펴 주셨어요.', impact: [{ who: '나', text: '안심했어요', tone: 1 }], ending: '보호자·선생님과 함께해서 압박이 멈췄어요.' },
                    { id: 'regret', text: '"괜히 말했나" 하고 그만둔다', result: '태오의 압박이 계속됐어요.', impact: [{ who: '나', text: '계속 걱정돼요', tone: -1 }], why: '말한 것은 잘한 일이에요. 끝까지 어른과 함께해요.' },
                    { id: 'do', text: '그냥 숙제를 해 준다', result: '다음엔 더 많은 숙제를 시켰어요.', impact: [{ who: '나', text: '부담이 커져요', tone: -1 }], why: '겁주며 시키는 것은 강요예요. 따르지 않아도 돼요.' },
                  ] } },
                { id: 'help', text: '숙제를 대신 해 준다', result: '태오가 다음에도 시켰어요.', impact: [{ who: '나', text: '계속 시달려요', tone: -1 }], why: '겁주며 시키는 것은 강요예요. 어른께 알려요.' },
                { id: 'worry', text: '혼자 고민만 한다', result: '밤에 잠이 잘 안 왔어요.', impact: [{ who: '나', text: '마음이 무거워요', tone: -1 }], why: '혼자 고민하지 말고 믿는 어른께 말해요.' },
              ] }, [['refuse', 'both']],
            [{ id: 'threat', text: '겁주며 시키는 것도 강요라서' }, { id: 'adults', text: '어른들이 함께 지켜 줄 수 있어서' }, { id: 'lose', text: '단체방에서 빠지면 안 돼서', why: '단체방보다 내 마음과 안전이 먼저예요.' }], ['threat', 'adults'], 0.3, { conclude: '억지로 시키거나 겁주며 시키는 것은 강요예요. "안 해"라고 거절하고 어른께 알려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '"안 하면 같이 안 논다"며 억지로 시키는 것도 ___예요.', answer: '강요' }] },
      }),
      C({
        id: 'saf-violence.e34.violence-types.activity.safe-place-chart', type: 'activity', title: '안전하다고 느끼는 곳 그래프',
        method: '안전하다고 느끼는 곳 막대그래프 읽기', tool: 'chart', minutes: 13,
        levels: { easy: '곳 3개의 막대를 그리고(첫 막대는 미리 그려져 있다) 가장 높은 곳·낮은 곳을 찾는다.', base: '곳 4개의 막대를 그리고, 가장 높은·낮은 곳과 낮은 곳을 안전하게 할 방법 1개를 고른다.', challenge: '방법을 고른 뒤 짝과 방법을 하나 더 정하고 까닭을 말한다(교사 진행).' },
        activity: {
          title: '안전하다고 느끼는 곳 그래프', tool: 'chart',
          teacher: '"눈금 한 칸은 몇 명일까요? 18명은 어디까지 그릴까요?" 막대를 그린 뒤 가장 낮은 곳을 찾게 한다. 화장실이 낮게 나온 까닭을 물어 "어른이 잘 안 보여서" 같은 생각을 끌어낸다. "화장실에 안 가면 돼요"라는 학생에게 "꼭 가야 하는 곳이라면 어떻게 하면 더 안전할까요?"라고 묻고 우리 반이 정할 수 있는 방법을 함께 찾는다.',
          task: '가상의 4학년 반 조사 표를 보고 막대그래프를 완성한 뒤, 그래프를 읽고 물음에 답해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '표를 보고 안전하다고 느끼는 곳 막대그래프를 완성해요.', toolOptions: Object.assign({}, SBAR, { mode: 'build', data: SAFE }), target: { build: true }, difficulty: 0.2,
              levels: { easy: { prompt: '표를 보고 곳 3개의 막대그래프를 완성해요.', toolOptions: { data: SAFE.slice(0, 3), given: [0] }, target: { build: true } } } },
            { prompt: '안전하다고 느끼는 친구가 가장 많은 곳은?', toolOptions: Object.assign({}, SBAR, { mode: 'read', data: SAFE, question: '가장 많은 곳은?', choices: SAFE.map((d) => d[0]) }), target: { pick: 0 }, difficulty: 0.15 },
            { prompt: '안전하다고 느끼는 친구가 가장 적은 곳은?', toolOptions: Object.assign({}, SBAR, { mode: 'read', data: SAFE, question: '가장 적은 곳은?', choices: SAFE.map((d) => d[0]) }), target: { pick: 3 }, difficulty: 0.2 },
            { prompt: '가장 적은 곳을 더 안전하게 할 방법은?', toolOptions: Object.assign({}, SBAR, { mode: 'read', data: SAFE, question: '화장실을 더 안전하게 하려면?', choices: ['친구와 함께 가요', '불을 꺼 둬요', '일이 생겨도 참아요'] }), target: { pick: 0 }, difficulty: 0.2, conclude: '어른 눈이 닿기 어려운 곳일수록 친구와 함께 가고, 일이 생기면 바로 알려요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '표의 빈칸을 채워요.', columns: ['곳', '친구 수(명)'], cells: [['교실', '18'], ['운동장', ''], ['화장실', '6']], answer: '14' }] },
        notes: '그래프 자료는 가상이다. 반에서 조사할 때는 무기명 쪽지로 "안전하다고 느끼는 곳"만 묻고, 무슨 일이 있었는지는 묻지 않는다.',
      }),
      C({
        id: 'saf-violence.e34.violence-types.wrap.prevent-map', type: 'wrap', title: '학교폭력 예방 그물',
        method: '종류별 예방법 생각 그물 완성', tool: 'mindmap', minutes: 7,
        levels: { easy: '가지 2개(신체·언어)에 예방 카드를 붙인다.', base: '가지 6개에 예방 카드를 하나씩 붙인다.', challenge: '6개를 붙인 뒤 우리 반에 가장 필요한 예방법 하나를 정해 말한다(교사 진행).' },
        wrap: {
          teacher: '"오늘 배운 여섯 종류마다 막는 방법을 하나씩 붙여 볼까요?" 그물을 완성한 뒤 "우리 반에 가장 필요한 것은 무엇일까요?"라고 묻고 손들기로 하나를 정한다. "올리기 전 생각"을 따돌림에 붙인 학생에게 "이 방법은 어디에서 일어나는 폭력을 막을까요?"라고 되묻는다.',
          exitTicket: [
            EX('mindmap', SORT2('종류마다 예방 행동을 붙여요.', { topic: '학교폭력 예방' }, TYPES, [['손은 내 몸에'], ['바른 말 쓰기'], ['"같이 하자" 말하기'], ['비싼 물건은 집에'], ['"안 해" 거절하기'], ['올리기 전 생각']], [], 0.2)),
            { type: 'choice', prompt: '학교폭력을 보았을 때 가장 알맞은 행동은?', options: ['구경해요', '어른께 알려요', '똑같이 해요'], answer: 1, difficulty: 0.1, explain: '보았을 때는 친구 곁에 가고 어른께 알려요. 117에서도 도움을 받아요.' },
            { type: 'short', prompt: '우리 반에 가장 필요한 예방 행동을 한 줄로 써요.' },
          ],
        },
        worksheet: {
          title: '학교폭력 예방',
          items: [
            { type: 'table', prompt: '종류에 맞는 예방 행동을 써요.', columns: ['종류', '예방 행동'], cells: [['신체폭력', ''], ['사이버폭력', '']], answer: '손은 내 몸에, 올리기 전 생각하기' },
            { type: 'short', prompt: '학교폭력을 보았을 때 내가 할 일을 써요.' },
          ],
        },
      }),
      C({
        id: 'saf-violence.e34.violence-types.wrap.self-check', type: 'wrap', title: '나의 예방 행동 점검',
        method: '나의 예방 행동 스스로 점검', tool: 'timer', minutes: 7,
        levels: { easy: '점검 칸 2개에 표시한다.', base: '점검 칸 4개에 표시한다.', challenge: '4개에 표시한 뒤 지키기 어려운 것 하나를 골라 방법을 쓴다(출구 3번).' },
        wrap: {
          teacher: '"이번 주에 내가 지킬 예방 행동은 무엇인가요?" 점검 칸을 함께 읽고 스스로 표시하게 한다. 모두 다 잘한다고 표시한 학생에게 "그 가운데 가장 어려운 것은 무엇일까요?"라고 물어 출구 3번에 적게 한다. 출구 2번에서 "온라인은 괜찮아요"를 고른 학생에게 "단체방 글을 읽는 친구도 진짜 마음이 있을까요?"라고 되묻는다.',
          exitTicket: [
            SELF('나의 예방 행동 점검', ['바른 말을 써요', '친구를 끼워 줘요', '온라인에서도 예의', '보면 어른께 알려요'], '이번 주에 지킬 것에 스스로 표시해요.', 4),
            { type: 'choice', prompt: '단체방에서 한 친구 흉을 보면?', options: ['온라인이니 괜찮아요', '사이버폭력이에요', '재미있으면 돼요'], answer: 1, difficulty: 0.1, explain: '온라인에서 한 말도 친구 마음을 다치게 하는 폭력이에요.' },
            { type: 'short', prompt: '지키기 어려운 예방 행동 하나와 지킬 방법을 써요.' },
          ],
        },
        worksheet: {
          title: '나의 예방 행동',
          items: [
            { type: 'check', prompt: '이번 주에 지킬 것에 표시해요.', options: ['바른 말 쓰기', '친구 끼워 주기', '온라인에서도 예의 지키기', '보면 어른께 알리기'] },
            { type: 'short', prompt: '친구를 끼워 줄 때 할 말을 한 줄로 써요.' },
          ],
          easy: { note: '바른 말, 같이 하자, 알리기를 떠올려요.', items: [{ type: 'choice', prompt: '친구가 혼자 있으면?', options: ['"같이 하자"', '모른 척'], answer: '"같이 하자"' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 4학년 · 온라인에서 사진·만남을 요구할 때 (별표 2 초등 '성폭력 예방 및 대처방안 알기' + 7대 표준안 성폭력 '예방' 소분류)
  // ======================================================================================================
  {
    const C = T('online-requests', 4);
    M.push(
      C({
        id: 'saf-violence.e34.online-requests.intro.game-chat', type: 'intro', title: '게임 채팅 속 이상한 말',
        method: '게임 채팅 장면 보기', tool: 'story', minutes: 6,
        levels: { easy: '채팅 말풍선 가운데 이상한 말 1개를 함께 고른다.', base: '이상한 말 2개를 고른다.', challenge: '이상한 말을 고른 뒤 왜 이상한지 짝에게 말한다(교사 진행).' },
        intro: {
          teacher: '"게임에서 처음 만난 사람이 이런 말을 했어요. 어느 말이 이상할까요?" 시연 단추로 이상한 말 카드가 바구니에 담기는 것을 보인다. "칭찬해 주니까 좋은 사람이에요"라는 말이 나오면 "칭찬한 다음에 무엇을 달라고 했나요? 좋은 친구라면 사진이나 학교를 물어볼까요?"라고 되묻는다. 칭찬으로 시작해 사진·정보를 달라고 하면 멈추어야 하는 신호라는 것을 짚는다.',
          student: '게임 채팅 말풍선 가운데 이상한 말을 골라요. 왜 이상한지도 생각해 보아요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '이상한 말', cards: [{ id: 'nice', text: '너 게임 진짜 잘한다!' }, { id: 'again', text: '한 판 더 할래?' }, { id: 'photo', text: '사진 한 장 보내 줘' }, { id: 'school', text: '학교 어디 다녀?' }, { id: 'gg', text: '좋은 경기였어' }], shuffle: false }, sequence: [{ pick: ['photo'] }, { pick: ['photo', 'school'] }] },
          art: { draw: 'a large paper tablet screen showing a game chat window with several paper speech bubbles, one bubble asking for a photo glowing with a small warning star, a paper child holding the tablet and pausing', banner: '이 말, 이상해!', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '학생에게 실제로 이런 메시지를 받은 적이 있는지 묻지 않는다. 가상 장면으로만 다룬다.',
      }),
      C({
        id: 'saf-violence.e34.online-requests.intro.chat-feeling', type: 'intro', title: '사진을 달라는 말을 들으면',
        method: '그 말을 들은 친구 마음 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '마음 카드 3장 가운데 함께 고른다.', base: '마음 카드 5장 가운데 그림 속 친구의 마음을 고른다.', challenge: '그 마음이 보내는 신호를 한 마디로 말한다(교사 진행).' },
        intro: {
          teacher: '"사진을 보내 달라는 말을 들은 그림 속 친구는 어떤 마음일까요?" 시연 단추로 마음 카드가 바구니에 담기는 것을 보인다. "기분 좋아요"라는 말이 나오면 "칭찬받을 때는 그럴 수 있어요. 그런데 사진을 달라고 하니 마음이 어떻게 바뀌었을까요?"라고 되묻는다. 헷갈리고 불안한 마음은 "멈추고 어른께 알려"라는 신호라는 것을 짚는다.',
          student: '사진을 보내 달라는 말을 들은 그림 속 친구의 마음을 골라요.',
          demo: { tool: 'emotion', options: { mode: 'pick', basket: '그때 마음', cards: ['헷갈림', '불안함', '걱정', '신남', '뿌듯함'], shuffle: false }, sequence: [{ pick: ['헷갈림'] }, { pick: ['헷갈림', '불안함', '걱정'] }] },
          art: { draw: 'a paper child looking at a paper phone with a puzzled face, small paper question marks and a grey paper cloud floating above', banner: '이 마음은 신호예요', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
      }),
      C({
        id: 'saf-violence.e34.online-requests.activity.info-sort', type: 'activity', title: '알려 줘도 되는 것·안 되는 것',
        method: '알려 줘도 되는 것·안 되는 것 나누기', tool: 'mindmap', minutes: 14,
        levels: { easy: '카드 4장을 두 칸에 나눈다(놓으면 바로 맞는지 알림).', base: '카드 6장을 나눈다.', challenge: '카드 8장을 나누고, 상황에 따라 달라질 카드(좋아하는 노래 등)를 짝과 토의한다.' },
        activity: {
          title: '알려 줘도 되는 것·안 되는 것', tool: 'mindmap',
          teacher: '"이 정보를 알면 모르는 사람이 나를 찾아올 수 있을까요?" 카드를 놓을 때마다 이 물음으로 가르게 한다. "이름은 괜찮아요"라는 학생에게 "이름과 학교를 같이 알면 나를 찾을 수 있을까요?"라고 묻는다. 내 얼굴 사진도 나를 알아보게 하는 정보라는 것, 질문과 요구를 나눌 때는 "보내 줘, 만나자"처럼 무엇을 하라는 말인지를 본다는 것을 짚는다.',
          task: '정보 카드와 채팅 말 카드를 알맞은 칸에 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORT('온라인에서 알려 줘도 되는 것과 안 되는 것을 나누어요.', { topic: '내 정보' }, ['알려 줘도 돼요', '알려 주면 안 돼요'], [['좋아하는 색', '좋아하는 게임', '좋아하는 동물'], ['진짜 이름', '다니는 학교', '집 주소']], 2, [['좋아하는 노래'], ['내 얼굴 사진']], 0.15),
            SORT('다른 정보도 두 칸으로 나누어요.', { topic: '이것도 정보' }, ['알려 줘도 돼요', '알려 주면 안 돼요'], [['좋아하는 음식', '게임 속 별명', '좋아하는 책'], ['전화번호', '비밀번호', '학원 가는 시간']], 2, [['응원하는 팀'], ['교복 입은 사진']], 0.2),
            SORT('채팅 말을 괜찮은 말과 위험한 요구로 나누어요.', { topic: '채팅 말' }, ['괜찮은 말', '위험한 요구'], [['"이 판 재밌었지?"', '"다음에 또 하자"', '"좋은 경기였어"'], ['"사진 보내 줘"', '"몰래 만나자"', '"집이 어디야?"']], 2, [['"좋아하는 캐릭터는?"'], ['"영상 통화 하자"']], 0.25, { conclude: '나를 찾아낼 수 있는 정보와 사진은 알려 주지 않아요. 보내 달라, 만나자는 요구는 위험 신호예요.' }),
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '온라인에서 알려 주면 안 되는 것에 표시해요.', options: ['집 주소', '좋아하는 색', '다니는 학교', '내 얼굴 사진'] }] },
      }),
      C({
        id: 'saf-violence.e34.online-requests.activity.meet-choice', type: 'activity', title: '갈림길: 만나자고 할 때',
        method: '만나자는 요구에 갈림길', tool: 'dilemma', minutes: 13,
        levels: { easy: '갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '갈림 2번, 보기 3개씩 고르며 결과를 따라간다(둘째 문항은 "부모님께 말하지 마" 조건).', challenge: '갈림 2번을 지난 뒤 근거 카드 3장 가운데 알맞은 것을 고른다.' },
        activity: {
          title: '갈림길: 만나자고 할 때', tool: 'dilemma',
          teacher: '"선물을 주겠다는데 왜 혼자 나오라고 할까요?" 결과를 소리 내어 읽고 다음 장면에서 다시 고른다. "말하면 내가 혼나요"라는 학생에게 "보호자는 혼내려는 것이 아니라 지켜 주려는 거예요. 화면을 보여 준 어린이는 잘한 거예요"라고 말해 준다. 메시지를 지우면 도움을 주기 어려우니 지우지 말고 보여 준다는 것, 잘못은 요구한 사람에게 있다는 것을 짚는다.',
          task: '장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('온라인 친구가 혼자 만나자고 해요.', {
              text: '게임에서 친해진 사람이 "선물 줄게. 혼자 놀이터로 나와"라고 해요.', motif: 'house',
              choices: [
                { id: 'stop', text: '"싫어요" 하고 대화를 멈춘다', result: '대화창을 닫았어요.', ending: '대화를 멈춘 것이 나를 지키는 첫걸음이에요.', next: {
                  text: '그 사람이 계속 메시지를 보내요.', choices: [
                    { id: 'show', text: '화면을 보호자께 보여 준다', result: '보호자가 함께 차단하고 신고했어요.', impact: [{ who: '나', text: '안전해졌어요', tone: 1 }], ending: '보호자께 보여 주어 함께 막았어요.' },
                    { id: 'go', text: '몰래 나가 본다', result: '혼자 나가는 것은 아주 위험해요.', impact: [{ who: '나', text: '위험할 수 있어요', tone: -1 }], why: '온라인에서 만난 사람을 혼자 만나러 가지 않아요.' },
                    { id: 'erase', text: '메시지를 다 지운다', result: '나중에 보호자가 도와주기 어려웠어요.', impact: [{ who: '나', text: '증거가 사라졌어요', tone: -1 }], why: '지우지 말고 저장해서 보호자께 보여 줘요.' },
                  ] } },
                { id: 'meet', text: '선물 받으러 혼자 나간다', result: '혼자 나가는 것은 아주 위험해요.', impact: [{ who: '나', text: '위험할 수 있어요', tone: -1 }], why: '선물을 준다 해도 혼자 만나러 가지 않아요.' },
                { id: 'when', text: '"언제 만나?" 대답한다', result: '그 사람이 시간과 곳을 더 물어요.', impact: [{ who: '나', text: '정보가 새요', tone: -1 }], why: '대답하지 말고 대화를 멈춰요.' },
              ] }, [['stop', 'show']],
            [{ id: 'danger', text: '혼자 만나자는 것은 위험 신호라서' }, { id: 'adult', text: '보호자가 함께 막아 줄 수 있어서' }, { id: 'gift', text: '선물을 주니 좋은 사람이라서', why: '선물이나 칭찬으로 꾀는 것은 위험 신호예요.' }], ['danger', 'adult'], 0.2),
            DIL('"부모님께 말하지 마"라고 해요.', {
              text: '그 사람이 "이건 우리 비밀이야. 부모님께 말하지 마"라고 해요.', motif: 'cloud',
              choices: [
                { id: 'tell', text: '"비밀은 싫어" 하고 보호자께 말한다', result: '보호자가 "말해 줘서 고마워"라고 하셨어요.', ending: '말하지 말라는 비밀은 꼭 알려야 해요. 잘했어요.', next: {
                  text: '보호자가 함께 차단하고 신고하자고 해요.', choices: [
                    { id: 'block', text: '보호자와 함께 차단·신고한다', result: '그 사람의 메시지가 더 오지 않았어요.', impact: [{ who: '나', text: '안심했어요', tone: 1 }], ending: '보호자와 함께해서 안전해졌어요.' },
                    { id: 'secret', text: '혼날까 봐 몰래 대화를 이어 간다', result: '요구가 점점 커졌어요.', impact: [{ who: '나', text: '걱정이 커져요', tone: -1 }], why: '말한 어린이는 혼나지 않아요. 보호자와 함께해요.' },
                    { id: 'school', text: '그 사람에게 학교를 알려 준다', result: '나를 찾아올 수 있는 정보가 새어 나갔어요.', impact: [{ who: '나', text: '위험해요', tone: -1 }], why: '나를 찾을 수 있는 정보는 알려 주지 않아요.' },
                  ] } },
                { id: 'keep', text: '비밀을 지키기로 한다', result: '혼자 걱정이 점점 커졌어요.', impact: [{ who: '나', text: '마음이 무거워요', tone: -1 }], why: '어른께 말하지 말라는 비밀은 꼭 알려야 하는 비밀이에요.' },
                { id: 'alone', text: '혼자 고민만 한다', result: '밤에도 그 생각이 났어요.', impact: [{ who: '나', text: '불안해요', tone: -1 }], why: '혼자 고민하지 말고 믿는 어른께 말해요.' },
              ] }, [['tell', 'block']],
            [{ id: 'secret', text: '숨기라는 비밀은 위험 신호라서' }, { id: 'safe', text: '알린 어린이는 잘한 것이라서' }, { id: 'scold', text: '말하면 혼나니까', why: '보호자는 혼내려는 것이 아니라 지켜 주려는 거예요.' }], ['secret', 'safe'], 0.25),
            DIL('친구가 온라인 친구를 만나러 간대요.', {
              text: '친구 하루가 "온라인 친구랑 주말에 몰래 만나기로 했어"라고 해요.', motif: 'star',
              choices: [
                { id: 'worry', text: '"걱정돼. 보호자께 꼭 말해"', result: '하루가 "말하면 못 만나게 할 거야"라고 해요.', ending: '걱정하는 마음을 말해 준 것은 친구를 지키는 일이에요.', next: {
                  text: '하루가 그래도 몰래 가겠다고 해요.', choices: [
                    { id: 'teacher', text: '"같이 선생님께 이야기하자"', result: '선생님이 하루와 하루 보호자와 이야기하셨어요.', impact: [{ who: '하루', text: '위험을 피했어요', tone: 1 }], ending: '친구를 지키려고 어른께 알린 것은 옳은 일이에요.' },
                    { id: 'ok', text: '"그럼 몰래 다녀와"', result: '하루가 혼자 나갔어요.', impact: [{ who: '하루', text: '위험할 수 있어요', tone: -1 }], why: '위험한 약속은 비밀로 두지 않고 어른께 알려요.' },
                    { id: 'join', text: '"나도 같이 갈게"', result: '어린이 둘이 가도 위험은 그대로예요.', impact: [{ who: '하루와 나', text: '함께 위험해요', tone: -1 }], why: '어린이끼리 가도 위험해요. 어른께 알려요.' },
                  ] } },
                { id: 'cool', text: '"멋지다! 잘 다녀와"', result: '하루가 신나서 약속을 정했어요.', impact: [{ who: '하루', text: '위험할 수 있어요', tone: -1 }], why: '온라인에서 만난 사람을 몰래 만나는 것은 위험해요.' },
                { id: 'ignore', text: '못 들은 척한다', result: '아무도 하루를 말리지 않았어요.', impact: [{ who: '하루', text: '혼자 위험해져요', tone: -1 }], why: '친구가 위험해 보이면 어른께 알려요.' },
              ] }, [['worry', 'teacher']],
            [{ id: 'friend', text: '친구를 지키는 것이 먼저라서' }, { id: 'adult', text: '어른이 함께 막아 줄 수 있어서' }, { id: 'betray', text: '알리면 친구를 배신하는 거라서', why: '친구를 지키려고 알리는 것은 배신이 아니에요.' }], ['friend', 'adult'], 0.3, { conclude: '온라인에서 만난 사람이 만나자거나 비밀로 하자면, 대답을 멈추고 저장해서 보호자께 보여 줘요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '온라인 친구가 "혼자 나와"라고 하면?', options: ['선물 받으러 나가요', '대화를 멈추고 보호자께 보여 줘요', '친구와 둘이 가요'], answer: '대화를 멈추고 보호자께 보여 줘요' }] },
      }),
      C({
        id: 'saf-violence.e34.online-requests.activity.response-order', type: 'activity', title: '위험한 요구 받았을 때 차례',
        method: '위험한 요구 받았을 때 차례 놓기', tool: 'kitchen', minutes: 14,
        levels: { easy: '카드 3장을 차례대로 놓는다(놓으면 바로 맞는지 알림).', base: '카드 4장을 차례대로 놓는다.', challenge: '함정 카드("사진 지우고 숨기기" 등) 한 장이 섞인 5장에서 그것을 빼고 4장을 놓는다.' },
        activity: {
          title: '위험한 요구 받았을 때 차례', tool: 'kitchen',
          teacher: '"사진을 달라는 말을 받았어요. 맨 먼저 할 일은요?" 카드를 다 놓으면 모둠이 차례대로 소리 내어 읽는다. "지우고 숨기기"를 넣으려는 학생에게 "지우면 보호자가 무슨 일이 있었는지 알 수 있을까요?"라고 묻는다. 화면 저장은 요구한 말이 남게 하려는 것이고, 저장한 것은 보호자·선생님께만 보여 준다는 것을 짚는다.',
          task: '온라인에서 위험한 요구를 받았을 때 할 일 카드를 차례대로 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORD('사진을 달라는 요구를 받았을 때 차례로 놓아요.', { autoMotif: false, title: '사진을 달래요' }, [{ id: 'stop', text: '대답 멈추기' }, { id: 'save', text: '대화 화면 저장' }, { id: 'show', text: '보호자께 보여 주기' }, { id: 'block', text: '함께 차단·신고' }], [0, 2, 3], { id: 'erase', text: '사진 지우고 숨기기', why: '지우고 숨기면 어른이 도와주기 어려워요.' }, 0.15),
            ORD('만나자는 요구를 받았을 때 차례로 놓아요.', { autoMotif: false, title: '만나재요' }, [{ id: 'close', text: '대화창 닫기' }, { id: 'keep', text: '메시지 남겨 두기' }, { id: 'teacher', text: '선생님께 알리기' }, { id: 'cut', text: '보호자와 차단하기' }], [0, 1, 2], { id: 'alone', text: '혼자 나가 보기', why: '온라인에서 만난 사람을 혼자 만나러 가지 않아요.' }, 0.2),
            ORD('친구가 위험한 요구를 받았다고 할 때 차례로 놓아요.', { autoMotif: false, title: '친구가 받았대요' }, [{ id: 'listen', text: '이야기 들어 주기' }, { id: 'notfault', text: '"네 잘못 아니야"' }, { id: 'with', text: '함께 어른께 말하기' }, { id: 'stay', text: '다음에도 곁에 있기' }], [0, 2, 3], { id: 'rumor', text: '반에 소문 내기', why: '소문은 친구를 더 아프게 해요. 어른께만 알려요.' }, 0.25, { conclude: '멈추기 → 저장하기 → 보호자·선생님께 보여 주기 → 함께 차단·신고. 요구한 사람이 잘못이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '위험한 요구를 받으면 지우지 말고 화면을 저장해 ___께 보여 줘요.', answer: '보호자' }] },
      }),
      C({
        id: 'saf-violence.e34.online-requests.activity.refuse-words', type: 'activity', title: '거절하는 말 고르기',
        method: '거절하는 말 카드 고르기', tool: 'wordcards', minutes: 13,
        levels: { easy: '말 카드 3장 가운데 분명한 거절 1장을 고르고, 1칸을 채운다.', base: '카드 6장 가운데 분명한 거절 3장을 고르고, 분명한 말과 애매한 말을 나누고, 2칸을 채운다.', challenge: '애매한 말 카드가 더해진 판을 나누고, "나중에 줄게"가 왜 위험한지 짝에게 말한다(교사 진행).' },
        activity: {
          title: '거절하는 말 고르기', tool: 'wordcards',
          teacher: '"\'나중에 줄게\'라고 하면 상대는 그만둘까요?" 카드를 고른 뒤 짝과 짧고 분명하게 소리 내어 연습한다. 애매한 말을 고른 학생에게 "이 말을 들은 사람은 \'그럼 언제?\'라고 다시 물을까요?"라고 묻는다. 거절은 짧고 분명하게 하고, 거절한 뒤에는 대화를 멈추고 보호자께 알린다는 것을 짚는다.',
          task: '분명하게 거절하는 말 카드를 고르고, 거절하는 말을 완성해 짝과 소리 내어 연습해요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            PICK('분명하게 거절하는 말만 골라 담아요.', { basket: '분명한 거절' }, [{ id: 'no', text: '"싫어"', ok: true }, { id: 'later', text: '"음… 나중에"' }, { id: 'one', text: '"한 장만 줄게"' }, { id: 'wont', text: '"안 보내"', ok: true }, { id: 'think', text: '"생각해 볼게"' }, { id: 'end', text: '"대화 그만할게"', ok: true }], ['no', 'later', 'one'], null, 0.15),
            SORT('말 카드를 분명한 거절과 애매한 말로 나누어요.', { mode: 'sort' }, ['분명한 거절', '애매한 말'], [['"싫어, 안 해"', '"보내지 않을 거야"'], ['"나중에 줄게"', '"생각해 볼게"']], 1, [['"차단할게"'], ['"한 번만이야"']], 0.2),
            FILL('거절하는 말을 완성해요.', '나', [['"___, 사진은 안 보내."', '싫어'], ['"이 대화는 ___."', '그만할게'], ['"보호자께 ___."', '말할 거야']], ['좋아', '나중에'], 0.25, { conclude: '거절은 짧고 분명하게. 거절한 뒤에는 대화를 멈추고 보호자께 알려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '가장 분명한 거절은?', options: ['"나중에 줄게"', '"싫어, 안 보내"', '"생각해 볼게"'], answer: '"싫어, 안 보내"' }] },
      }),
      C({
        id: 'saf-violence.e34.online-requests.wrap.self-check', type: 'wrap', title: '온라인 안전 약속 점검',
        method: '온라인 안전 약속 스스로 점검', tool: 'timer', minutes: 7,
        levels: { easy: '점검 칸 2개에 표시한다.', base: '점검 칸 3개에 표시한다.', challenge: '점검 칸 4개에 표시하고 집에서 보호자와 정할 약속 하나를 쓴다(출구 3번).' },
        wrap: {
          teacher: '"오늘 배운 온라인 안전 약속 가운데 내가 지킬 것은 무엇인가요?" 점검 칸을 함께 읽고 스스로 표시하게 한다. 출구 2번에서 "몰래 지워요"를 고른 학생에게 "지우면 보호자가 도와줄 수 있을까요?"라고 되묻는다. 집에 가서 보호자와 "이상한 메시지가 오면 바로 보여 주기" 같은 약속을 정해 보라고 권한다.',
          exitTicket: [
            SELF('온라인 안전 약속', ['개인정보를 지켜요', '사진을 보내지 않아요', '이상하면 알려요', '보호자와 약속을 정해요']),
            { type: 'choice', prompt: '이상한 메시지를 받았을 때 바른 행동은?', options: ['몰래 지워요', '저장해서 보호자께 보여 줘요', '답장을 보내요'], answer: 1, difficulty: 0.1, explain: '지우지 말고 저장해서 보호자께 보여 주면 함께 막을 수 있어요.' },
            { type: 'short', prompt: '집에서 보호자와 정할 온라인 약속을 하나 써요.' },
          ],
        },
        worksheet: {
          title: '온라인에서 나를 지켜요',
          items: [
            { type: 'check', prompt: '내가 지킬 약속에 표시해요.', options: ['내 정보와 사진을 보내지 않아요', '이상하면 대화를 멈춰요', '보호자께 바로 보여 줘요'] },
            { type: 'short', prompt: '온라인에서 거절할 때 쓸 말을 한 줄로 써요.' },
          ],
          easy: { note: '멈추기, 저장하기, 보여 주기를 떠올려요.', items: [{ type: 'choice', prompt: '사진을 달라고 하면?', options: ['안 보내요', '보내요'], answer: '안 보내요' }] },
        },
      }),
      C({
        id: 'saf-violence.e34.online-requests.wrap.protect-map', type: 'wrap', title: '온라인에서 나를 지키는 그물',
        method: '온라인에서 나를 지키는 방법 생각 그물', tool: 'mindmap', minutes: 7,
        levels: { easy: '가지 2개(지킬 정보·거절하는 말)에 카드를 붙인다.', base: '가지 3개(알릴 사람 더함)에 카드를 2장씩 붙인다.', challenge: '가지마다 카드가 한 장씩 더해진 판을 완성한다.' },
        wrap: {
          teacher: '"온라인에서 나를 지키려면 무엇을 지키고, 어떻게 말하고, 누구에게 알릴까요?" 가지마다 카드를 붙인 뒤 반 전체가 그물을 소리 내어 읽는다. "비밀번호"를 거절하는 말에 붙인 학생에게 "비밀번호는 말일까요, 지킬 정보일까요?"라고 되묻는다.',
          exitTicket: [
            EX('mindmap', SORT2('온라인에서 나를 지키는 그물을 완성해요.', { topic: '온라인 안전' }, ['지킬 정보', '거절하는 말', '알릴 사람'], [['집 주소', '다니는 학교'], ['"싫어, 안 보내"', '"대화 그만할게"'], ['보호자', '담임 선생님']], [['비밀번호'], ['"차단할게"'], ['상담 선생님']], 0.2)),
            { type: 'choice', prompt: '"부모님께 말하지 마"라는 말을 들으면?', options: ['비밀을 지켜요', '보호자께 꼭 말해요', '혼자 고민해요'], answer: 1, difficulty: 0.1, explain: '말하지 말라는 비밀은 꼭 알려야 하는 위험 신호예요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '온라인 안전 그물',
          items: [
            { type: 'table', prompt: '그물의 빈칸을 채워요.', columns: ['가지', '예'], cells: [['지킬 정보', ''], ['거절하는 말', ''], ['알릴 사람', '']], answer: '집 주소, "싫어, 안 보내", 보호자' },
            { type: 'draw', prompt: '이상한 메시지를 보호자께 보여 주는 내 모습을 그려요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 4학년 · 다툼과 폭력은 달라요 (별표 2 초등 폭력예방 및 신변보호 '가족폭력의 개념과 대처방안 알기')
  // ======================================================================================================
  {
    const C = T('family-conflict', 4);
    const TOWN = {
      title: '우리 동네(가상)', grid: [6, 4],
      regions: [
        { name: '우리 집', cells: [[0, 0], [1, 0], [0, 1], [1, 1]] }, { name: '이웃 할머니 댁', cells: [[2, 0], [3, 0]] }, { name: '학교', cells: [[4, 0], [5, 0], [4, 1], [5, 1]] },
        { name: '놀이터', cells: [[2, 1], [3, 1]] }, { name: '길', cells: [[0, 2], [1, 2], [2, 2], [3, 2]] }, { name: '지구대(112)', cells: [[4, 2], [5, 2]] },
        { name: '공원', cells: [[0, 3], [1, 3], [2, 3], [3, 3], [4, 3], [5, 3]] },
      ],
    };
    M.push(
      C({
        id: 'saf-violence.e34.family-conflict.intro.family-meeting', type: 'intro', title: '의견이 달라도 차례로',
        method: '가족회의 장면 보기', tool: 'story', minutes: 6,
        levels: { easy: '좋은 말하기 장면 1개를 함께 고른다.', base: '좋은 말하기 장면 2개를 고른다.', challenge: '고른 장면이 왜 좋은지 짝에게 말한다(교사 진행).' },
        intro: {
          teacher: '"이 가족은 주말에 어디 갈지 의견이 달라요. 어떻게 정하고 있나요?" 시연 단추로 좋은 말하기 장면 카드가 바구니에 담기는 것을 보인다. "의견이 다르면 싸우는 거예요"라는 말이 나오면 "생각이 다른 것과 상대를 아프게 하는 것은 같을까요?"라고 되묻는다. 가족도 의견이 다를 수 있고, 차례로 말하고 들으면 함께 정할 수 있다는 것을 짚는다.',
          student: '의견이 다른 가족의 회의 장면에서 좋은 말하기 장면을 골라요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '좋은 말하기', cards: [{ id: 'turn', text: '차례로 말해요' }, { id: 'listen', text: '끝까지 들어요' }, { id: 'ask', text: '"네 생각은?"' }, { id: 'cut', text: '말 끊고 소리쳐요' }, { id: 'slam', text: '문 쾅 닫기' }], shuffle: false }, sequence: [{ pick: ['turn'] }, { pick: ['turn', 'listen'] }] },
          art: { draw: 'a paper family sitting around a round paper table with a paper calendar, one child raising a hand to speak while the others listen with calm faces', banner: '의견이 달라도 차례로', extra: [{ motif: 'sun', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      C({
        id: 'saf-violence.e34.family-conflict.intro.caring-check', type: 'intro', title: '서로 아끼는 가족 행동',
        method: '서로 아끼는 가족 행동 표시', tool: 'kitchen', minutes: 6,
        levels: { easy: '행동 항목 3개 가운데 아끼는 행동에 함께 표시한다.', base: '항목 5개 가운데 아끼는 행동에 표시한다.', challenge: '함정 항목 2개(물건 던지기·"넌 빠져")가 왜 아끼는 행동이 아닌지 말한다(교사 진행).' },
        intro: {
          teacher: '"그림 속 가족이 서로 아끼는 행동은 무엇일까요?" 시연 단추로 아끼는 행동에 표시가 생기는 것을 보인다. "화나면 물건 던질 수도 있어요"라는 말이 나오면 "화가 나는 마음은 괜찮아요. 그런데 물건을 던지면 가족은 어떤 마음일까요?"라고 되묻는다. 화는 말로 표현하고, 몸이나 물건으로 겁주는 것은 아끼는 행동이 아니라는 것을 짚는다.',
          student: '그림 속 가족의 행동 가운데 서로 아끼는 행동에 표시해요.',
          demo: { tool: 'kitchen', options: { mode: 'checklist', title: '서로 아끼는 행동', items: [{ id: 'turn', text: '차례로 말하기' }, { id: 'thanks', text: '"고마워" 말하기' }, { id: 'throw', text: '물건 던지기' }, { id: 'decide', text: '함께 정하기' }, { id: 'out', text: '"넌 빠져" 하기' }] }, sequence: [{ checklist: ['turn', 'thanks'] }, { checklist: ['turn', 'thanks', 'decide'] }] },
          art: { draw: 'a paper family in a cozy living room, a parent and child setting a table together and another child saying thank you, small paper hearts between them', banner: '서로 아끼는 가족', extra: [{ motif: 'house', x: 300, y: 96 }] },
        },
        notes: '학생 가족의 실제 모습을 묻지 않는다. 그림 속 가상 가족으로만 이야기한다.',
      }),
      C({
        id: 'saf-violence.e34.family-conflict.activity.conflict-sort', type: 'activity', title: '다툼과 폭력 나누기',
        method: '다툼·폭력 장면 나누기', tool: 'mindmap', minutes: 14,
        levels: { easy: '카드 4장을 다툼과 폭력으로 나눈다(놓으면 바로 맞는지 알림).', base: '카드 6장을 나누고, 폭력이 생겼을 때 어린이가 할 일을 고른다.', challenge: '애매한 카드 2장이 더해진 8장을 나누고 가른 이유를 짝에게 말한다.' },
        activity: {
          title: '다툼과 폭력 나누기', tool: 'mindmap',
          teacher: '"이 장면은 생각이 달라 말로 다투는 것인가요, 몸이나 물건·무서운 말로 아프게 하는 것인가요?" 카드를 놓을 때마다 이 물음으로 까닭을 말하게 한다. "가족끼리 때리는 것은 집안일이라 괜찮아요"라는 학생에게 "가족 사이여도 몸을 아프게 하면 다툼일까요, 폭력일까요?"라고 묻는다. 폭력은 가족 사이여도 폭력이고, 어린이가 막으려고 끼어들지 않고 피해서 알린다는 것을 짚는다.',
          task: '가상 가족 장면 카드를 다툼과 폭력으로 나누고, 폭력이 생겼을 때 할 일을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORT('가족 장면을 다툼과 폭력으로 나누어요.', { topic: '다툼일까 폭력일까' }, ['다툼', '폭력'], [['목소리 높여 의견 말함', '생각이 달라 토라짐', '주말 계획 말다툼'], ['때리기', '물건 던지기', '무섭게 위협함']], 2, [['화해하고 다시 정함'], ['세게 밀침']], 0.15),
            SORT('다른 가족 장면도 나누어요.', { topic: '이 장면은?' }, ['다툼', '폭력'], [['TV 채널로 말다툼', '방 청소로 티격태격', '"네 말도 맞아" 사과'], ['물건을 부숨', '"가만 안 둬" 겁주기', '꼬집고 할퀴기']], 2, [['서로 사과하고 안음'], ['문을 막고 못 나가게']], 0.2),
            PICK('폭력이 생겼을 때 어린이가 할 일만 골라 담아요.', { basket: '내가 할 일' }, [{ id: 'safe', text: '안전한 곳으로 피하기', ok: true }, { id: 'stop', text: '막으려고 끼어들기' }, { id: 'tell', text: '믿는 어른께 알리기', ok: true }, { id: 'good', text: '착하게 굴면 멈춰요' }, { id: 'call', text: '위험하면 112', ok: true }, { id: 'me', text: '다 내 탓이에요' }], ['safe', 'stop', 'tell', 'good'], null, 0.25, { conclude: '의견이 달라 말로 다투는 것과, 몸·물건·무서운 말로 아프게 하는 폭력은 달라요. 폭력은 피하고 알려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '가족 사이 폭력에 대한 바른 생각은?', options: ['집안일이라 괜찮아요', '가족 사이여도 폭력이에요', '내가 착하면 멈춰요'], answer: '가족 사이여도 폭력이에요' }] },
        notes: '카드 장면은 가상 가족 이야기다. 학생 집에서 다툼이나 폭력이 있는지 묻지 않는다. 걱정되는 말을 듣게 되면 수업 뒤 조용히 듣고 학교의 신고 절차를 따른다.',
      }),
      C({
        id: 'saf-violence.e34.family-conflict.activity.child-feeling', type: 'activity', title: '폭력을 본 아이의 마음',
        method: '폭력을 본 아이 마음 고르기', tool: 'emotion', minutes: 13,
        levels: { easy: '마음 카드 3장, 필요한 도움 카드 3장에서 고르고, 갈림 보기는 2개.', base: '마음 카드 5장, 갈림 보기 3개, 필요한 도움 카드 5장에서 고른다.', challenge: '갈림 결과는 맞힌 뒤에만 보이고, 필요한 도움 카드가 더해진 판에서 고른다.' },
        activity: {
          title: '폭력을 본 아이의 마음', tool: 'emotion',
          teacher: '"그림 속 아이는 집에서 큰 소리와 물건 깨지는 소리를 들었어요. 마음이 어떨까요?" 마음 카드를 고른 뒤 "네 잘못이 아니야"를 반 전체가 함께 읽는다. "아이가 착하게 굴면 멈출 거예요"라는 학생에게 "어른들의 폭력이 아이 때문일까요?"라고 묻는다. 무섭고 걱정되는 마음은 당연하고, 그 아이에게는 안전한 곳과 믿는 어른의 도움이 필요하다는 것을 짚는다.',
          task: '가족 사이 폭력을 본 그림 속 아이의 마음과, 그 아이에게 해 줄 말과 필요한 도움을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            PICK('그림 속 아이의 마음을 골라 담아요.', { basket: '아이의 마음' }, [{ id: '무서움', text: '무서움', ok: true }, { id: '걱정', text: '걱정', ok: true }, { id: '신남', text: '신남' }, { id: '슬픔', text: '슬픔', ok: true }, { id: '뿌듯함', text: '뿌듯함' }], ['무서움', '걱정', '신남'], null, 0.15),
            BR('아이에게 해 줄 말을 골라요.', '그림 속 아이가 "집에서 큰일이 난 건 내 탓이야"라고 해요.', [{ id: 'not', text: '"네 잘못이 아니야"', result: '아이 얼굴이 조금 풀렸어요.', mood: '안심' }, { id: 'good', text: '"네가 더 착하게 굴어"', result: '아이는 더 자기 탓을 했어요.', mood: '슬픔' }, { id: 'quiet', text: '아무 말 안 해요', result: '아이는 혼자 걱정했어요.', mood: '걱정' }], 'not', 0.2),
            PICK('그 아이에게 필요한 도움을 골라 담아요.', { basket: '필요한 도움' }, [{ id: 'place', text: '안전한 곳', ok: true }, { id: 'bear', text: '혼자 참기' }, { id: 'adult', text: '믿는 어른', ok: true }, { id: 'nice', text: '더 착하게 굴기' }, { id: 'call', text: '위험하면 112', ok: true }], ['place', 'bear', 'adult'], [{ id: 'teacher', text: '담임 선생님', ok: true }, { id: 'hide', text: '아무에게도 비밀' }], 0.25, { conclude: '가족 사이 폭력은 어린이 잘못이 아니에요. 안전한 곳으로 피하고 믿는 어른과 112에 알려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '가족 사이 폭력은 어린이 ___이 아니에요.', answer: '잘못' }] },
        notes: '장면은 "큰 소리"까지만 쓰고 폭력 장면을 그리지 않는다.',
      }),
      C({
        id: 'saf-violence.e34.family-conflict.activity.safe-route', type: 'activity', title: '도움 받을 곳 지도',
        method: '집 칸 지도에 안전한 곳과 도움 받을 곳 핀', tool: 'map', minutes: 14,
        levels: { easy: '핀을 놓으면 그 칸의 이름이 바로 보인다.', base: '상황 3개(이웃 어른·지구대·학교)에 맞는 곳에 핀을 꽂는다.', challenge: '핀을 꽂은 뒤 그곳을 고른 까닭(가장 빨리 갈 수 있는 곳 등)도 보기에서 고른다.' },
        activity: {
          title: '도움 받을 곳 지도', tool: 'map',
          teacher: '"집에서 무서운 일이 생기면 잠시 어디로 피할 수 있을까요? 누구에게 도움을 청할까요?" 핀을 꽂기 전에 손가락으로 집에서 그곳까지 가는 길을 따라가 보게 한다. 공원에 핀을 꽂는 학생에게 "공원에는 나를 도와줄 어른이 늘 있을까요?"라고 묻는다. 우리 집 둘레에 믿는 이웃 어른이 누구인지 집에서 보호자와 미리 정해 두면 좋다는 것, 지금 위험하면 112라는 것을 짚는다.',
          task: '가상 동네 칸 지도에서 잠시 피할 곳과 도움 받을 곳에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            PIN(TOWN, '잠시 피해 도움을 청할 믿는 이웃 어른 댁에 핀을 꽂아요.', '이웃 할머니 댁', { q: '왜 이곳일까요?', choices: ['가깝고 믿는 어른이 있어서', '놀 수 있어서', '아무도 없어서'], answer: 0 }, 0.15),
            PIN(TOWN, '경찰에게 직접 도움을 청할 곳에 핀을 꽂아요.', '지구대(112)', { q: '갈 수 없을 만큼 급하면?', choices: ['112에 전화해요', '혼자 참아요', '집에 숨어요'], answer: 0 }, 0.2),
            PIN(TOWN, '낮에 선생님께 말할 곳에 핀을 꽂아요.', '학교', { q: '선생님께 말하면 어떻게 될까요?', choices: ['혼나요', '도와줄 어른들과 함께 도와요', '아무 일 없어요'], answer: 1 }, 0.25, { conclude: '믿는 이웃 어른, 지구대와 112, 학교 선생님. 도움 받을 곳을 미리 알아 두어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 집 둘레에서 도움을 청할 수 있는 믿는 어른을 보호자와 정해 써 와요.' }] },
        notes: '지도는 가상의 동네다. 학생 집의 실제 위치나 구조를 묻지 않는다. 활동지의 "믿는 어른"은 집에서 보호자와 함께 정해 오는 과제로 두고, 발표시키지 않는다.',
      }),
      C({
        id: 'saf-violence.e34.family-conflict.activity.call-112', type: 'activity', title: '112 신고 말하기 연습',
        method: '112 신고 말하기 순서 연습', tool: 'timer', minutes: 13,
        levels: { easy: '연습 약속 점검, 말하기 카드 2장(어디·무슨 일) 차례, 짝 점검 2칸.', base: '연습 약속 점검, 카드 3장(어디·무슨 일·내 이름) 차례, 짝 점검 2칸.', challenge: '카드 4장(끊지 않고 기다리기 더함) 차례, 짝 점검 3칸.' },
        activity: {
          title: '112 신고 말하기 연습', tool: 'timer',
          teacher: '"112에 전화하면 무엇부터 말해야 경찰이 빨리 올 수 있을까요?" 카드를 맞춘 뒤 짝과 장난감 전화로 번갈아 연습한다. 받는 역할은 "112입니다. 무슨 일이세요?"라고만 하게 한다. 연습에서는 진짜 이름 대신 정해 둔 가명과 "○○동 놀이터 앞"처럼 꾸민 곳을 쓴다. 다 말한 뒤 바로 끊는 학생에게 "경찰이 더 물어볼 수도 있어요. 언제 끊을까요?"라고 묻는다.',
          task: '연습 약속을 점검하고, 112에 말할 차례 카드를 맞춘 뒤, 짝이 해낸 것에 표시해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '연습하기 전에 약속에 모두 표시해요.', toolOptions: { title: '연습 약속', safety: ['장난감 전화로 해요', '진짜 번호는 안 눌러요', '가명으로 연습해요'] }, target: { safety: true }, difficulty: 0.1 },
            { prompt: '112에 말할 차례 카드를 놓아요.', toolOptions: { title: '112에 말할 차례', cards: ['내 이름(가명)', '무슨 일인지', '어디인지'] }, target: { order: ['어디인지', '무슨 일인지', '내 이름(가명)'] }, difficulty: 0.2,
              levels: { easy: { prompt: '112에 말할 차례 카드를 놓아요(2장).', toolOptions: { cards: ['무슨 일인지', '어디인지'] }, target: { order: ['어디인지', '무슨 일인지'] } }, challenge: { prompt: '112에 말할 차례 카드를 놓아요(4장).', toolOptions: { cards: ['끊지 않고 기다리기', '내 이름(가명)', '무슨 일인지', '어디인지'] }, target: { order: ['어디인지', '무슨 일인지', '내 이름(가명)', '끊지 않고 기다리기'] } } } },
            { prompt: '짝이 해낸 것에 표시해 주어요.', toolOptions: { title: '짝 점검' }, target: { selfCheck: ['또박또박 말했어요', '어디인지 먼저 말했어요'] }, difficulty: 0.1,
              levels: { challenge: { prompt: '짝이 해낸 것에 표시해 주어요(3칸).', target: { selfCheck: ['또박또박 말했어요', '어디인지 먼저 말했어요', '끊지 않고 기다렸어요'] } } },
              conclude: '어디인지 → 무슨 일인지 → 내 이름. 경찰이 끊으라고 할 때까지 기다려요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '112에 말할 차례를 써요.', columns: ['차례', '말할 것'], cells: [['1', ''], ['2', ''], ['3', '']], answer: '어디인지, 무슨 일인지, 내 이름' }] },
        notes: '진짜 112를 누르지 않도록 장난감 전화나 그림 전화로만 연습한다. 학생의 실제 이름·주소는 쓰지 않는다.',
      }),
      C({
        id: 'saf-violence.e34.family-conflict.wrap.trusted-cards', type: 'wrap', title: '믿을 어른·112·1388 카드',
        method: '믿을 어른·112·1388 카드', tool: 'wordcards', minutes: 7,
        levels: { easy: '상황과 카드 2쌍을 잇는다.', base: '상황과 카드 4쌍을 잇는다.', challenge: '남는 카드 한 장을 가려내고, 지금 바로 위험할 때를 고른다(출구 2번).' },
        wrap: {
          teacher: '"이럴 때는 누구에게, 몇 번에 알릴까요?" 카드를 이은 뒤 반 전체가 "지금 위험하면 112, 고민은 1388"을 함께 말한다. 112와 1388을 바꾼 학생에게 "경찰이 와야 할 만큼 지금 위험한 때는 어느 쪽일까요?"라고 되묻는다.',
          exitTicket: [
            EX('wordcards', MATCH('상황과 도와줄 사람·번호를 이어요.', {}, [['학교에서 바로 말하고 싶을 때', '담임 선생님'], ['마음 이야기를 오래 하고 싶을 때', '상담 선생님'], ['지금 바로 위험할 때', '112'], ['전화로 고민을 상담할 때', '1388']], '모르는 사람', 0.2)),
            { type: 'choice', prompt: '집에서 지금 바로 위험한 일이 생기면?', options: ['112에 전화해요', '내일 말해요', '혼자 참아요'], answer: 0, difficulty: 0.1, explain: '지금 바로 위험하면 안전한 곳에서 112에 전화해요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '도움을 청할 곳',
          items: [
            { type: 'table', prompt: '알맞은 사람이나 번호를 써요.', columns: ['언제', '누구·몇 번'], cells: [['지금 바로 위험할 때', ''], ['전화로 고민 상담', ''], ['학교에서 말하고 싶을 때', '']], answer: '112, 1388, 담임 선생님' },
            { type: 'short', prompt: '내가 믿는 어른 한 명을 써요.' },
          ],
        },
      }),
      C({
        id: 'saf-violence.e34.family-conflict.wrap.friend-choice', type: 'wrap', title: '집 이야기를 털어놓는 친구',
        method: '친구가 집 이야기를 털어놓을 때 짧은 갈림길', tool: 'dilemma', minutes: 7,
        levels: { easy: '갈림 1번, 보기 2개 가운데 고른다.', base: '갈림 2번, "들어 주고 선생님께 함께 가기"까지 고른다.', challenge: '갈림 2번을 지난 뒤 근거 카드를 고른다.' },
        wrap: {
          teacher: '"친구가 집 이야기를 털어놓으면 무엇을 해 줄 수 있을까요?" 갈림길을 끝까지 간 뒤 "들어 주고, 함께 가요"를 함께 말한다. "집안일은 말하면 안 돼"를 고른 학생에게 "친구가 무서웠다면 혼자 견뎌야 할까요?"라고 되묻는다. 친구 이야기를 반에서 다시 하지 않고 선생님께만 알린다는 것도 짚는다.',
          exitTicket: [
            EX('dilemma', DIL('친구가 집 이야기를 털어놓아요.', {
              text: '친구 하람이가 "어젯밤 집에서 큰 소리가 나서 무서웠어"라고 해요.', motif: 'house',
              choices: [
                { id: 'hear', text: '"많이 무서웠겠다" 들어 준다', result: '하람이가 조금 마음을 놓았어요.', ending: '마음을 알아주며 들어 준 것은 잘한 일이에요.', next: {
                  text: '하람이가 "선생님한테 말해도 될까?"라고 물어요.', choices: [
                    { id: 'with', text: '"응, 같이 가 줄게"', result: '선생님이 하람이 이야기를 들어 주셨어요.', impact: [{ who: '하람이', text: '든든해요', tone: 1 }], ending: '들어 주고 함께 가서 하람이가 도움을 받았어요.' },
                    { id: 'home', text: '"집안일은 말하면 안 돼"', result: '하람이는 다시 혼자 걱정했어요.', impact: [{ who: '하람이', text: '외로워요', tone: -1 }], why: '무서운 일은 집안일이어도 어른께 알려요.' },
                    { id: 'small', text: '"별일 아니야"', result: '하람이가 입을 닫았어요.', impact: [{ who: '하람이', text: '마음을 몰라줘요', tone: -1 }], why: '친구의 무서운 마음을 작게 여기지 않아요.' },
                  ] } },
                { id: 'skip', text: '"그런 얘기 하지 마"', result: '하람이가 고개를 숙였어요.', impact: [{ who: '하람이', text: '말한 걸 후회해요', tone: -1 }], why: '용기 내 말한 친구 이야기를 들어 주어요.' },
                { id: 'spread', text: '다른 친구에게 전한다', result: '소문이 나서 하람이가 속상해했어요.', impact: [{ who: '하람이', text: '창피해요', tone: -1 }], why: '친구 이야기는 반이 아니라 선생님께만 알려요.' },
              ] }, [['hear', 'with']],
            [{ id: 'listen', text: '들어 주면 친구가 덜 외로워서' }, { id: 'adult', text: '선생님이 함께 도울 수 있어서' }, { id: 'family', text: '가족 일은 비밀이라서', why: '무서운 일은 비밀이 아니라 알려야 하는 일이에요.' }], ['listen', 'adult'], 0.2)),
            { type: 'choice', prompt: '친구가 털어놓은 집 이야기는 누구에게 알려요?', options: ['반 친구들', '선생님', '아무에게도'], answer: 1, difficulty: 0.1, explain: '친구 이야기는 반에 퍼뜨리지 않고 선생님께만 알려요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '친구 곁에 있어 주기',
          items: [
            { type: 'blank', prompt: '친구에게 해 줄 말을 채워요.', text: '"많이 무서웠겠다. 선생님께 같이 ___ 줄게."', answer: '가' },
            { type: 'short', prompt: '힘든 이야기를 털어놓은 친구에게 해 줄 말을 한 줄로 써요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 4학년 · 친구의 위험한 비밀, 함께 어른께 (별표 2 초등 '자살 예방 및 생명존중 교육'·'학교폭력의 예방 및 대처법 알기')
  // ======================================================================================================
  {
    const C = T('friend-secret', 4);
    const TALK = [['가족', 12], ['친구', 9], ['담임 선생님', 6], ['상담 선생님', 3]];
    const SCHOOL = {
      title: '우리 학교', grid: [6, 4],
      regions: [
        { name: '우리 교실(담임 선생님)', cells: [[0, 0], [1, 0]] }, { name: '보건실', cells: [[2, 0]] }, { name: '상담실', cells: [[3, 0]] }, { name: '교무실', cells: [[4, 0], [5, 0]] },
        { name: '복도', cells: [[0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1]] }, { name: '도서관', cells: [[0, 2], [1, 2]] }, { name: '방과후 교실', cells: [[2, 2], [3, 2]] },
        { name: '운동장', cells: [[4, 2], [5, 2], [0, 3], [1, 3], [2, 3], [3, 3], [4, 3], [5, 3]] },
      ],
    };
    M.push(
      C({
        id: 'saf-violence.e34.friend-secret.intro.tired-signs', type: 'intro', title: '친구가 보내는 힘든 신호',
        method: '친구 얼굴에서 힘든 신호 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '힘든 신호 2개를 함께 고른다.', base: '신호 카드 5장 가운데 힘든 신호 3개를 고른다.', challenge: '신호마다 그때 해 줄 말을 짝과 잇는다(교사 진행).' },
        intro: {
          teacher: '"그림 속 친구가 요즘 달라졌어요. 어떤 모습이 힘들다는 신호일까요?" 시연 단추로 신호 카드가 바구니에 담기는 것을 보인다. "그냥 피곤한 거예요"라는 말이 나오면 "그럴 수도 있어요. 그런데 이런 모습이 며칠씩 계속되면 어떻게 할까요?"라고 되묻는다. 신호를 알아차렸다면 다가가 묻고, 들어 주고, 어른께 함께 간다는 것을 오늘 배운다고 밝힌다.',
          student: '그림 속 친구가 보내는 힘든 신호를 골라요.',
          demo: { tool: 'emotion', options: { mode: 'pick', basket: '힘든 신호', cards: [{ id: 'down', text: '혼자 엎드려 있어요' }, { id: 'nosmile', text: '웃음이 없어졌어요' }, { id: 'noeat', text: '밥을 잘 안 먹어요' }, { id: 'play', text: '신나게 뛰어놀아요' }, { id: 'chat', text: '친구와 수다 떨어요' }], shuffle: false }, sequence: [{ pick: ['down', 'nosmile'] }, { pick: ['down', 'nosmile', 'noeat'] }] },
          art: { draw: 'a paper classroom during break time, one paper child resting head on a desk alone while classmates play in the back, a friend looking over with a caring face', banner: '친구의 신호를 알아차려요', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '그림 속 가상 친구의 모습으로만 이야기한다. 반의 실제 친구를 떠올려 이름을 말하게 하지 않는다.',
      }),
      C({
        id: 'saf-violence.e34.friend-secret.intro.talk-to-graph', type: 'intro', title: '힘들 때 이야기하고 싶은 사람',
        method: '힘들 때 이야기하고 싶은 사람 그림그래프', tool: 'chart', minutes: 6,
        levels: { easy: '그래프에서 가장 많은 것을 함께 찾는다.', base: '많은 차례를 읽는다.', challenge: '친구에게만 말할 때 생길 어려움을 짝과 말한다(교사 진행).' },
        intro: {
          teacher: '"가상의 4학년 반 친구들은 힘들 때 누구에게 이야기하고 싶다고 했을까요?" 시연 단추로 가장 많은 쪽이 골라지는 것을 보인다. 그래프를 함께 읽고 "친구에게 이야기하는 사람도 많네요. 그런데 이야기를 들은 친구가 혼자 감당하기 어려울 만큼 큰일이면 어떻게 할까요?"라고 묻는다. 친구에게 들은 힘든 이야기는 함께 어른께 가지고 간다는 것이 오늘 배울 것이라고 밝힌다.',
          student: '그림그래프를 보고 힘들 때 이야기하고 싶은 사람을 많은 차례로 읽어요.',
          demo: { tool: 'chart', options: { type: 'picture', mode: 'read', title: '힘들 때 이야기하고 싶은 사람(가상의 4학년 반)', unit: '명', xLabel: '사람', yLabel: '친구 수', icons: PEOPLE, icon: 'person', data: TALK, question: '가장 많은 사람은?', choices: TALK.map((d) => d[0]) }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper picture graph on a classroom board with rows of small paper people icons beside labels for family, friends and teachers, a paper child pointing at the longest row', banner: '힘들 때 누구에게?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '그래프 자료는 가상이다.',
      }),
      C({
        id: 'saf-violence.e34.friend-secret.activity.secret-sort', type: 'activity', title: '지켜도 되는 비밀·알려야 하는 비밀',
        method: '지켜도 되는 비밀·알려야 하는 비밀 나누기', tool: 'mindmap', minutes: 14,
        levels: { easy: '카드 4장을 두 칸에 나눈다(놓으면 바로 맞는지 알림).', base: '카드 6장을 나누고, 가르는 기준 물음을 고른다.', challenge: '카드 8장을 나누고, 기준 고르기에 카드가 더해진 판에서 고른 뒤 까닭을 말한다.' },
        activity: {
          title: '지켜도 되는 비밀·알려야 하는 비밀', tool: 'mindmap',
          teacher: '"이 비밀을 지키면 누군가 다치거나 위험해질까요?" 카드를 놓을 때마다 이 물음 하나로 가르게 한다. "친구 비밀을 말하면 배신이에요"라는 학생에게 "깜짝 선물 비밀과, 친구가 \'사라지고 싶다\'는 말을 한 비밀은 같을까요? 친구를 지키려고 알리는 것도 배신일까요?"라고 묻는다. 누군가 다치거나 위험한 비밀은 친구와 함께 어른께 알리는 비밀이라는 것을 짚는다.',
          task: '비밀 카드를 지켜도 되는 비밀과 알려야 하는 비밀로 나누고, 가르는 기준을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORT('비밀 카드를 두 칸으로 나누어요.', { topic: '이 비밀은?' }, ['지켜도 돼요', '알려야 해요'], [['깜짝 생일 선물', '좋아하는 친구 이름', '숨겨 둔 보물 자리'], ['누가 자꾸 때려요', '"사라지고 싶어"라는 말', '불편한 비밀 놀이']], 2, [['가족 여행 깜짝 계획'], ['누가 돈을 자꾸 뺏음']], 0.15),
            SORT('다른 비밀도 두 칸으로 나누어요.', { topic: '이것도 비밀' }, ['지켜도 돼요', '알려야 해요'], [['친구가 좋아하는 가수', '방학 깜짝 공연', '내 일기장 내용'], ['모르는 어른이 만나재요', '"집에 가기 무서워"', '단체방에서 놀림당함']], 2, [['친구 생일 파티 준비'], ['"아무도 날 안 좋아해"']], 0.2),
            PICK('알려야 하는 비밀을 가르는 물음만 골라 담아요.', { basket: '가르는 물음' }, [{ id: 'hurt', text: '누가 다칠 수 있나요?', ok: true }, { id: 'angry', text: '친구가 화낼까요?' }, { id: 'danger', text: '위험한 일인가요?', ok: true }, { id: 'fun', text: '재미있는 비밀인가요?' }], ['hurt', 'angry', 'danger'], [{ id: 'alone', text: '혼자 감당하기 힘든가요?', ok: true }, { id: 'promise', text: '약속했나요?' }], 0.25, { conclude: '누군가 다치거나 위험하거나 혼자 감당하기 힘든 비밀은 친구와 함께 어른께 알려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '어른께 알려야 하는 비밀은?', options: ['깜짝 생일 선물', '친구가 "사라지고 싶다"고 한 말', '좋아하는 가수'], answer: '친구가 "사라지고 싶다"고 한 말' }] },
        notes: '"사라지고 싶다"는 말은 카드 글로만 다루고 그 이상의 말이나 방법을 쓰거나 묻지 않는다. 수업 중 걱정되는 말을 하는 학생이 있으면 수업 뒤 조용히 듣고 학교의 위기 학생 절차(담임·상담교사·보호자 연락)를 바로 따른다.',
      }),
      C({
        id: 'saf-violence.e34.friend-secret.activity.dont-tell-choice', type: 'activity', title: '갈림길: "아무한테도 말하지 마"',
        method: "'아무한테도 말하지 마' 갈림길", tool: 'dilemma', minutes: 13,
        levels: { easy: '갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '갈림 2번, 보기 3개씩 고르며 결과를 따라간다(셋째 문항은 친구가 화낼까 걱정되는 마음).', challenge: '갈림 2번을 지난 뒤 근거 카드 3장 가운데 알맞은 것을 고른다.' },
        activity: {
          title: '갈림길: "아무한테도 말하지 마"', tool: 'dilemma',
          teacher: '"친구와의 약속과 친구의 안전 가운데 무엇이 먼저일까요?" 결과를 소리 내어 읽고 다음 장면에서 다시 고른다. 비밀을 지키는 길을 고른 학생을 나무라지 않고 "친구를 아끼는 마음이 보여요. 그런데 친구가 많이 힘들 때 비밀만 지키면 친구는 도움을 받을까요?"라고 되묻는다. "내가 혼자 해결해 줘야 해요"라는 말에는 "어린이 혼자 감당할 일이 아니에요. 함께 어른께 가는 것이 친구를 지키는 일이에요"라고 말한다.',
          task: '장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('친구가 힘든 이야기를 비밀로 해 달래요.', {
              text: '친구 다현이가 "요즘 너무 힘들어. 아무한테도 말하지 마"라고 해요.', motif: 'cloud',
              choices: [
                { id: 'listen', text: '"말해 줘서 고마워" 끝까지 듣는다', result: '다현이가 조금 마음을 놓았어요.', ending: '끝까지 들어 준 것은 다현이에게 큰 힘이에요.', next: {
                  text: '다현이가 "약속해. 비밀이야"라고 해요.', choices: [
                    { id: 'with', text: '"너를 지키고 싶어. 같이 선생님께 가자"', result: '둘이 함께 상담 선생님을 찾아갔어요.', impact: [{ who: '다현이', text: '도움을 받기 시작했어요', tone: 1 }], ending: '친구를 지키려고 함께 어른께 간 것은 옳은 일이에요.' },
                    { id: 'keep', text: '"응, 약속할게" 아무에게도 안 한다', result: '다현이는 계속 혼자 힘들어했어요.', impact: [{ who: '다현이', text: '도움을 못 받아요', tone: -1 }], why: '친구가 많이 힘들면 비밀보다 친구가 먼저예요.' },
                    { id: 'scold', text: '"그런 말 하지 마" 화를 낸다', result: '다현이가 입을 닫았어요.', impact: [{ who: '다현이', text: '마음을 몰라줘요', tone: -1 }], why: '화내지 말고 마음을 알아주어요.' },
                  ] } },
                { id: 'small', text: '"별거 아니야" 하고 넘긴다', result: '다현이가 더 말하지 않았어요.', impact: [{ who: '다현이', text: '외로워요', tone: -1 }], why: '친구의 힘든 마음을 작게 여기지 않아요.' },
                { id: 'spread', text: '다른 친구들에게 퍼뜨린다', result: '다현이가 창피해서 숨어 버렸어요.', impact: [{ who: '다현이', text: '상처받았어요', tone: -1 }], why: '친구 이야기는 반이 아니라 믿는 어른께만 알려요.' },
              ] }, [['listen', 'with']],
            [{ id: 'safe', text: '친구의 안전이 약속보다 먼저라서' }, { id: 'adult', text: '어른이 함께 도울 수 있어서' }, { id: 'betray', text: '말하면 배신이라서', why: '친구를 지키려고 알리는 것은 배신이 아니에요.' }], ['safe', 'adult'], 0.2),
            DIL('친구가 "사라지고 싶어"라고 해요.', {
              text: '다현이가 "가끔 다 그만두고 사라지고 싶어"라고 해요.', motif: 'rain',
              choices: [
                { id: 'now', text: '"말해 줘서 고마워. 지금 같이 어른께 가자"', result: '다현이가 머뭇거려요.', ending: '바로 어른께 가자고 한 것이 다현이를 지키는 일이에요.', next: {
                  text: '다현이가 "선생님이 혼낼 거야"라고 해요.', choices: [
                    { id: 'go', text: '"혼내지 않으셔. 내가 곁에 있을게"', result: '함께 담임 선생님께 갔고, 선생님이 상담 선생님과 보호자와 함께 도와주셨어요.', impact: [{ who: '다현이', text: '혼자가 아니에요', tone: 1 }], ending: '이런 말을 들으면 바로 함께 어른께 가요. 아주 잘했어요.' },
                    { id: 'later', text: '"그럼 내일 가자" 미룬다', result: '다현이는 그날 밤 혼자였어요.', impact: [{ who: '다현이', text: '도움이 늦어져요', tone: -1 }], why: '이런 말은 미루지 않고 바로 어른께 알려요.' },
                    { id: 'only', text: '혼자 계속 달래기만 한다', result: '나도 다현이도 지쳐 버렸어요.', impact: [{ who: '나와 다현이', text: '둘 다 힘들어요', tone: -1 }], why: '어린이 혼자 감당하지 말고 어른과 함께해요.' },
                  ] } },
                { id: 'joke', text: '"농담이지?" 웃어넘긴다', result: '다현이가 다시 입을 닫았어요.', impact: [{ who: '다현이', text: '마음이 닫혔어요', tone: -1 }], why: '이런 말은 농담으로 넘기지 않고 어른께 알려요.' },
                { id: 'deaf', text: '못 들은 척한다', result: '다현이는 혼자 남았어요.', impact: [{ who: '다현이', text: '외로워요', tone: -1 }], why: '친구가 보내는 신호를 지나치지 말아요.' },
              ] }, [['now', 'go']],
            [{ id: 'life', text: '생명은 무엇보다 소중해서' }, { id: 'quick', text: '바로 알려야 빨리 도울 수 있어서' }, { id: 'joke', text: '그냥 하는 말일 테니까', why: '이런 말은 그냥 넘기지 않고 어른께 알려요.' }], ['life', 'quick'], 0.25),
            DIL('알렸더니 친구가 화를 내요.', {
              text: '선생님께 말한 뒤 다현이가 "왜 말했어!" 하고 화를 내요.', motif: 'cloud',
              choices: [
                { id: 'calm', text: '"네가 소중해서 그랬어" 차분히 말한다', result: '다현이가 아무 말 없이 자리로 갔어요.', ending: '친구를 지키려고 알린 것은 옳은 일이에요.', next: {
                  text: '다현이가 며칠 동안 말을 잘 안 해요.', choices: [
                    { id: 'wait', text: '곁에서 기다리며 인사한다', result: '며칠 뒤 다현이가 "고마워"라고 했어요.', impact: [{ who: '다현이', text: '마음이 열렸어요', tone: 1 }], ending: '알린 뒤에도 곁에 있어 준 것이 진짜 친구예요.' },
                    { id: 'sorry', text: '"미안해, 다시는 안 말할게"', result: '다음에 또 힘들 때 다현이가 숨길 수 있어요.', impact: [{ who: '다현이', text: '다음 도움이 어려워요', tone: -1 }], why: '다음에도 위험하면 알려요. 미안해할 일이 아니에요.' },
                    { id: 'away', text: '나도 화를 내며 멀어진다', result: '둘 사이가 서먹해졌어요.', impact: [{ who: '나와 다현이', text: '외로워요', tone: -1 }], why: '화를 내기보다 곁에서 기다려 주어요.' },
                  ] } },
                { id: 'regret', text: '말한 것을 후회하며 숨는다', result: '나도 마음이 무거워졌어요.', impact: [{ who: '나', text: '마음이 무거워요', tone: -1 }], why: '알린 것은 잘한 일이에요. 후회하지 않아도 돼요.' },
                { id: 'blame', text: '"선생님이 말하랬어" 탓한다', result: '다현이가 선생님도 믿지 않게 됐어요.', impact: [{ who: '다현이', text: '믿을 곳이 줄었어요', tone: -1 }], why: '솔직하게 "네가 소중해서"라고 말해요.' },
              ] }, [['calm', 'wait']],
            [{ id: 'right', text: '친구를 지키려고 알린 것은 옳아서' }, { id: 'stay', text: '곁에 있으면 마음이 다시 열려서' }, { id: 'wrong', text: '친구가 화내면 내가 잘못한 것이라서', why: '친구를 지키려고 알린 것은 잘못이 아니에요.' }], ['right', 'stay'], 0.3, { conclude: '친구가 위험한 비밀을 말하면 끝까지 듣고, 바로 함께 어른께 가요. 알린 것은 친구를 지키는 일이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '친구를 지키려고 어른께 알리는 것은 ___이 아니에요.', answer: '배신' }] },
        notes: '장면은 "사라지고 싶어"라는 말까지만 쓰고 그 뒤의 말이나 방법을 쓰지 않는다. 이 활동 뒤 걱정되는 말을 하는 학생이 있으면 그날 바로 학교의 위기 학생 절차를 따른다.',
      }),
      C({
        id: 'saf-violence.e34.friend-secret.activity.listen-role', type: 'activity', title: '들어 주고 함께 가기 역할놀이',
        method: '들어 주고 함께 가기 역할놀이', tool: 'timer', minutes: 14,
        levels: { easy: '순서 카드 2장(들어 주기·같이 가자)을 놓고, 짝 점검 2칸, 연습 1번.', base: '순서 카드 3장(마음 알아주기 더함), 짝 점검 2칸, 연습 2번.', challenge: '카드 3장, 짝 점검 3칸, 역할을 바꿔 3번 연습한다.' },
        activity: {
          title: '들어 주고 함께 가기 역할놀이', tool: 'timer',
          teacher: '"친구가 \'요즘 힘들어\'라고 할 때 바로 충고부터 하면 어떨까요?" 교사가 충고부터 하는 모습과 끝까지 듣는 모습을 견주어 보인 뒤, 순서 카드를 맞추고 짝과 역할을 바꿔 가며 연습한다. 힘든 역할은 "요즘 힘들어"처럼 정해 준 짧은 말만 쓰고 자기 이야기를 꺼내지 않게 한다. 들어 주는 역할이 끝에 "같이 선생님께 가자"를 꼭 말하게 한다.',
          task: '들어 주고 함께 가는 순서 카드를 놓고, 짝과 역할놀이를 한 뒤 짝이 해낸 것과 연습 횟수를 적어요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '들어 주고 함께 가는 순서 카드를 놓아요.', toolOptions: { title: '들어 주고 함께 가기', cards: ['"같이 선생님께 가자"', '끝까지 들어 주기', '"많이 힘들었구나"'] }, target: { order: ['끝까지 들어 주기', '"많이 힘들었구나"', '"같이 선생님께 가자"'] }, difficulty: 0.15,
              levels: { easy: { prompt: '들어 주고 함께 가는 순서 카드를 놓아요(2장).', toolOptions: { cards: ['"같이 선생님께 가자"', '끝까지 들어 주기'] }, target: { order: ['끝까지 들어 주기', '"같이 선생님께 가자"'] } } } },
            { prompt: '짝이 해낸 것에 표시해 주어요.', toolOptions: { title: '짝 점검' }, target: { selfCheck: ['끝까지 들었어요', '마음을 알아줬어요'] }, difficulty: 0.1,
              levels: { challenge: { prompt: '짝이 해낸 것에 표시해 주어요(3칸).', target: { selfCheck: ['끝까지 들었어요', '마음을 알아줬어요', '함께 가자고 했어요'] } } } },
            { prompt: '역할을 바꿔 연습한 것을 한 번마다 적어요.', toolOptions: { title: '연습 기록', unit: '번', fields: ['1번째', '2번째'] }, target: { records: 2 }, difficulty: 0.1,
              levels: { easy: { prompt: '연습한 것을 적어요(1번).', toolOptions: { fields: ['1번째'] }, target: { records: 1 } }, challenge: { prompt: '역할을 바꿔 연습한 것을 적어요(3번).', toolOptions: { fields: ['1번째', '2번째', '3번째'] }, target: { records: 3 } } },
              conclude: '끝까지 듣고, 마음을 알아주고, "같이 선생님께 가자". 이것이 친구를 지키는 차례예요.' },
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '역할놀이에서 내가 한 것에 표시해요.', options: ['끝까지 들었어요', '"많이 힘들었구나" 말했어요', '"같이 선생님께 가자" 말했어요'] }] },
        notes: '역할놀이에서 학생이 자기 실제 고민을 꺼내지 않도록, 힘든 역할의 말은 교사가 정해 준다.',
      }),
      C({
        id: 'saf-violence.e34.friend-secret.activity.adult-map', type: 'activity', title: '함께 갈 어른 찾기 지도',
        method: '학교 지도에 함께 갈 어른 핀', tool: 'map', minutes: 13,
        levels: { easy: '핀을 놓으면 그 칸의 이름이 바로 보인다.', base: '상황 4개(담임·상담실·보건실·방과후)에 맞는 곳에 핀을 꽂는다.', challenge: '핀을 꽂은 뒤 그곳을 고른 까닭(쉬는 시간에 가장 빨리 갈 곳 등)도 보기에서 고른다.' },
        activity: {
          title: '함께 갈 어른 찾기 지도', tool: 'map',
          teacher: '"친구와 함께 어른께 가려면 학교 어디로 가면 될까요?" 핀을 꽂기 전에 손가락으로 우리 교실에서 그곳까지 가는 길을 따라가 보게 한다. 도서관에 핀을 꽂는 학생에게 "도서관에서 마음 이야기를 오래 들어 줄 선생님을 만날 수 있을까요?"라고 묻는다. 우리 학교의 실제 상담실·보건실 자리와 방과후에 선생님을 찾을 곳을 교사가 말로 알려 준다.',
          task: '학교 칸 지도에서 친구와 함께 갈 어른이 있는 곳에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            PIN(SCHOOL, '쉬는 시간에 담임 선생님을 바로 만날 곳에 핀을 꽂아요.', '우리 교실(담임 선생님)', { q: '왜 이곳이 가장 빠를까요?', choices: ['늘 가까이 계셔서', '책이 많아서', '넓어서'], answer: 0 }, 0.15),
            PIN(SCHOOL, '마음 이야기를 오래 나눌 곳에 핀을 꽂아요.', '상담실', { q: '이곳에서는 누가 도와줄까요?', choices: ['상담 선생님', '운동부 친구', '아무도 없어요'], answer: 0 }, 0.2),
            PIN(SCHOOL, '친구 몸이 아플 때 함께 갈 곳에 핀을 꽂아요.', '보건실', { q: '이곳에서는 누가 도와줄까요?', choices: ['보건 선생님', '도서관 친구', '모르는 사람'], answer: 0 }, 0.2),
            PIN(SCHOOL, '방과후에 선생님을 찾을 곳에 핀을 꽂아요.', '교무실', { q: '왜 이곳일까요?', choices: ['여러 선생님이 계셔서', '놀 수 있어서', '문이 닫혀서'], answer: 0 }, 0.25, { conclude: '담임 선생님, 상담실, 보건실, 교무실. 친구와 함께 갈 어른은 학교 곳곳에 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 학교 상담실은 어디에 있는지 써요.' }] },
        notes: '지도는 가상의 학교다. 우리 학교의 실제 상담실·보건실 자리와 방과후에 선생님을 찾을 곳은 교사가 말로 알려 준다.',
      }),
      C({
        id: 'saf-violence.e34.friend-secret.wrap.friend-words', type: 'wrap', title: '힘든 친구에게 건넬 말',
        method: '친구에게 건넬 말 고르기', tool: 'wordcards', minutes: 7,
        levels: { easy: '말 카드 3장 가운데 건넬 말을 고른다.', base: '말 카드 5장 가운데 건넬 말을 모두 고른다.', challenge: '도움이 안 되는 말이 왜 그런지 고른다(출구 2번).' },
        wrap: {
          teacher: '"힘든 친구에게 어떤 말을 건넬까요?" 카드를 고른 뒤 짝에게 실제로 말하듯 건네게 한다. "너만 그런 거 아냐"를 고른 학생에게 "위로하려는 마음은 좋아요. 그런데 이 말을 들으면 친구는 마음을 알아줬다고 느낄까요?"라고 되묻는다.',
          exitTicket: [
            EX('wordcards', PICK('힘든 친구에게 건넬 말을 골라요.', { basket: '건넬 말' }, [{ id: 'hard', text: '많이 힘들었구나', ok: true }, { id: 'bear', text: '그 정도는 참아' }, { id: 'go', text: '같이 가 줄게', ok: true }, { id: 'you', text: '너만 그런 거 아냐' }, { id: 'side', text: '나는 네 편이야', ok: true }], ['hard', 'bear', 'go'], null, 0.15)),
            { type: 'choice', prompt: '"너만 그런 거 아냐"가 도움이 안 되는 까닭은?', options: ['친구 마음을 작게 여겨서', '너무 다정해서', '말이 짧아서'], answer: 0, difficulty: 0.15, explain: '먼저 친구 마음을 알아주는 말이 힘이 돼요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '힘든 친구에게',
          items: [
            { type: 'check', prompt: '힘든 친구에게 건넬 말에 표시해요.', options: ['많이 힘들었구나', '같이 가 줄게', '그 정도는 참아'] },
            { type: 'short', prompt: '친구에게 "같이 선생님께 가자"고 말할 때 덧붙일 말을 써요.' },
          ],
        },
      }),
      C({
        id: 'saf-violence.e34.friend-secret.wrap.guardian-check', type: 'wrap', title: '친구 지킴이 약속',
        method: '친구 지킴이 약속 표시', tool: 'kitchen', minutes: 7,
        levels: { easy: '약속 항목 2개에 표시한다.', base: '약속 항목 3개에 표시한다.', challenge: '항목 4개와 함정 1개가 섞인 판에서 지킬 것에만 표시한다.' },
        wrap: {
          teacher: '"오늘부터 나는 어떤 친구 지킴이가 될까요?" 약속을 함께 읽고 표시하게 한다. 함정 "약속은 무조건 비밀"에 표시한 학생에게 "오늘 다현이 이야기에서 비밀만 지켰다면 다현이는 어떻게 됐을까요?"라고 되묻는다. 친구 지킴이는 혼자 해결하는 사람이 아니라 어른께 함께 가는 사람이라는 것을 다시 짚는다.',
          exitTicket: [
            EX('kitchen', CHK('친구 지킴이 약속에 표시해요.', '친구 지킴이 약속', [{ id: 'listen', text: '끝까지 들어 줘요', ok: true }, { id: 'tell', text: '위험한 비밀은 알려요', ok: true }, { id: 'notalone', text: '혼자 해결 안 해요', ok: true }], [0, 1], [{ id: 'with', text: '어른께 함께 가요', ok: true }, { id: 'keep', text: '약속은 무조건 비밀' }], 0.15)),
            { type: 'choice', prompt: '친구가 "사라지고 싶어"라고 하면 언제 어른께 알려요?', options: ['바로 알려요', '일주일 뒤에', '친구가 허락하면'], answer: 0, difficulty: 0.1, explain: '이런 말은 미루지 않고 바로 함께 어른께 알려요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '나는 친구 지킴이',
          items: [
            { type: 'check', prompt: '내가 지킬 약속에 표시해요.', options: ['끝까지 들어 줘요', '위험한 비밀은 알려요', '어른께 함께 가요'] },
            { type: 'short', prompt: '친구와 함께 갈 수 있는 학교 어른을 한 명 써요.' },
          ],
          easy: { note: '듣기, 알리기, 함께 가기를 떠올려요.', items: [{ type: 'choice', prompt: '위험한 비밀은?', options: ['어른께 알려요', '꼭 지켜요'], answer: '어른께 알려요' }] },
        },
      }),
    );
  }


  PaperLessons.registerModules(M);
})();
