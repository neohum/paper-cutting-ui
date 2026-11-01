/* 창체 안전교육 교통안전 — 초3-4 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/safety-a.json 의 saf-traffic 초3-4.
 * 근거: 「학교안전교육 실시 기준 등에 관한 고시」(교육부고시 제2023-33호) 별표 2 초등학교 교통안전
 *   ("안전한 통학로 알기" / "교통수단(자전거, 대중교통 등)의 안전한 이용법 알기" / "교통 표지판 등 도로 교통 법규 알기") + 7대 표준안 교통 소분류.
 * 초3-4 기준: 상황 판단(그림+짧은 글), 차례 정하기, 고른 이유 말하기, 짝 토의, 간단한 표·그림그래프. 법 조문·통계 해석·긴 글쓰기는 쓰지 않는다.
 * 장면·인물·학급 자료(위험 지점 조사, 투표, 안전띠 습관 표)는 직접 지은 가상의 것이다(가명). 시각(8시 10분 등)은 연습용 값이다. 피해 경험은 묻지 않는다.
 * 주제 9개(3학년 5 · 4학년 4) = 계획 모듈 88개.
 * 사람 확인: 근거 파일(research-safety.md)에는 고시 항목 제목뿐이라, 아래 수칙 문장은 일반 안전 수칙으로 썼다. 확인처는 괄호 안.
 *   - routemap.*: 골목 끝·주차장 입구·신호 없는 횡단보도·내리막을 위험 지점으로 꼽음 / "초록불이 깜박이면 건너기 시작하지 않는다"(activity.pair) /
 *     "물웅덩이는 찻길로 내려가 피하지 않고 보도 안쪽으로 돌아간다"(activity.pair) (도로교통공단)
 *   - corner.*: 초록불에도 도는 차가 횡단보도로 올 수 있음 / 방향 지시등의 뜻 / 대각선 쪽은 횡단보도 두 번에 건넘 / 운전자와 눈을 맞추고 차가 멈춘 것을 본 뒤 건넘 /
 *     운전자가 손짓해도 다른 차를 한 번 더 살핌 (도로교통공단)
 *   - driveway.*: 흰 불 = 후진등 / 경고음 없이 움직이는 차도 있음 / 차 바로 뒤 낮은 곳은 운전석·거울에서 잘 안 보임(높이 수치는 쓰지 않음) (도로교통공단·한국교통안전공단)
 *   - bikecheck.*: 타기 전 점검 항목(브레이크·바퀴 바람·체인·안장 높이) / 안전모 쓰는 차례(크기 → 눈썹 위 → 끈 → 턱 밑 손가락 하나) / 금 간 안전모는 바꿈 /
 *     장바구니 물건 값은 가상의 값 (도로교통공단·한국소비자원)
 *   - transit.*: 버스가 완전히 선 뒤 타고 내림·내리는 사람 먼저 / 승강장 노란 선 뒤에서 기다림 / 닫히는 문에 손·가방을 넣지 않음(다시 열린다는 보장 없음) /
 *     가방이 끼면 어른께 알려 비상 연락 장치로 알림 / 에스컬레이터 손잡이·노란 선 안·신발 끈 / 급정거 때 몸이 앞으로 쏠림 / 내린 뒤 버스가 떠난 다음 횡단보도로 건넘 /
 *     선로에 떨어진 물건은 역무원에게 알림 (도로교통공단·국민재난안전포털·지하철 운영기관 안내)
 *   - signrule.*: 무리와 모양·색(주의 = 노란 세모, 규제 = 빨간 테두리 동그라미·일시 정지는 빨간 거꾸로 세모, 지시 = 파란 바탕) / 카드의 표지판 이름과 무리
 *     (주의: 미끄러운 길·공사 중·내리막 경사·낙석 주의·자전거 주의·야생 동물 보호 / 규제: 진입 금지·자전거 금지·주차 금지·보행자 통행 금지·일시 정지·앞지르기 금지 /
 *     지시: 자전거 전용·보행자 전용·오른쪽으로(우회전)·자전거 횡단도·직진·좌회전) / activity.design 의 장소-표지판 짝 (도로교통공단, 도로표지 규칙)
 *   - bikeride.*: 수신호(왼쪽 = 왼팔 옆으로 수평, 오른쪽 = 왼팔 굽혀 손을 위로, 멈춤 = 팔을 비스듬히 아래로) / 횡단보도는 내려서 끌고 건넘 / 겸용 도로·보도에서는 걷는 사람이 먼저 /
 *     한 줄로·두 손으로·이어폰 빼고 탐 (도로교통공단)
 *   - weather.*: 젖은 길·눈길에서는 차가 서는 데 더 오래 걸림(수치는 쓰지 않음) / 밝은 옷·반사띠·앞이 보이는 투명 우산 / 밤에는 밝은 길 (도로교통공단).
 *     걸리는 시간(평소 20분·눈 오는 날 30분)과 출발 시각은 연습용 값
 *   - saferoute.*: 길을 고르는 조건(보도·신호등·밝기) (도로교통공단). 걸리는 시간·투표 자료는 가상
 *   - carride.*: 어린이는 뒷좌석 / 안전띠 어깨끈은 어깨·가슴 가운데, 허리끈은 배가 아니라 골반 아래 / 어른이 안고 타면 위험 / 보도 쪽 문으로, 열기 전 뒤를 살핌 /
 *     큰 짐은 트렁크 / 창밖으로 손·머리를 내밀지 않음 (도로교통공단·한국교통안전공단). 어린이 보호 장구가 필요한 키·나이 기준은 쓰지 않았다
 *   - 그래프 자료(위험 지점·출입구·대중교통·날씨 느낌·퀴즈 틀린 수·길 투표·안전띠 습관)는 모두 가상이고 화면 제목에 '가상'을 밝혔다. */
(function () {
  const BASE = { schema: 'edu-module.v1', domain: 'saf-traffic', band: '초3-4' };
  const T = (topic, grade) => (o) => Object.assign({}, BASE, { topic: `saf-traffic.e34.${topic}`, grades: [grade] }, o);
  const M = [];
  const strip = (p) => String(p).replace(/[.?!]$/, '');
  const idOf = (c) => (typeof c === 'string' ? c : c.id);
  const mix = (groups) => { const out = []; const n = Math.max(...groups.map((g) => g.length)); for (let i = 0; i < n; i++) for (const g of groups) if (g[i] != null) out.push(g[i]); return out; };
  const count = (groups) => groups.reduce((a, g) => a + g.length, 0);
  const slotId = (s) => (typeof s === 'string' ? s : s.id);
  const sortT = (slots, groups) => ({ sort: Object.fromEntries(slots.map((s, i) => [slotId(s), groups[i].map(idOf)])) });

  // 나누기(mindmap·kitchen·story sort): 기본 = 칸 전부, 쉬움 = 앞의 칸 두 개만(칸마다 카드 그대로), 도전 = 칸마다 hard 카드를 더함
  const SORT = (prompt, base, slots, groups, hard, d, more) => {
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

  // 나누기(칸 둘): 쉬움 = 칸마다 앞에서 ne장, 기본 = groups, 도전 = 칸마다 hard 카드를 더함
  const SORTC = (prompt, base, slots, groups, ne, hard, d, more) => {
    const easyG = groups.map((g) => g.slice(0, ne));
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

  // 차례 놓기(timeline·story order): 기본 = 카드 전부, 쉬움 = keep 번째 카드들만, 도전 = 틀린 카드(trap) 한 장이 섞인다
  const NAMES = { 3: ['처음', '다음', '끝'], 4: ['처음', '다음', '그다음', '끝'], 5: ['1', '2', '3', '4', '5'], 6: ['1', '2', '3', '4', '5', '6'], 7: ['1', '2', '3', '4', '5', '6', '7'] };
  const ORD = (prompt, base, steps, keep, trap, d, more) => {
    const ids = steps.map((c) => c.id);
    const easy = keep.map((i) => steps[i]);
    const p = strip(prompt);
    const shuffled = (list) => list.slice(1).concat(list[0]).reverse();
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

  // 해야 할 것만 표시하는 점검표(kitchen checklist): 기본 4칸, 쉬움 2칸(easy 번호), 도전은 기본과 같은 판(짝 점검은 교사 몫)
  const CHK = (prompt, title, items, easyIdx, d, more) => {
    const ok = (list) => list.filter((x) => x.ok).map((x) => x.id);
    const plain = (list) => list.map((x) => ({ id: x.id, text: x.text }));
    const easy = easyIdx.map((i) => items[i]);
    return {
      prompt, toolOptions: { mode: 'checklist', title, items: plain(items) }, target: { checklist: ok(items) }, difficulty: d,
      levels: { easy: { prompt: `${strip(prompt)}(2칸).`, toolOptions: { items: plain(easy) }, target: { checklist: ok(easy) } } },
      ...more,
    };
  };

  // 짝 잇기(mindmap·kitchen·story match): rows = [[칸 글, 카드 글], …] 기본 전부, 쉬움 앞 2줄, 도전 = 함정 카드 한 장 더
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

  // 말풍선 채우기(story fill): rows = [[말풍선 글(___ 빈칸), 정답 카드], …], wrong = 함정 카드. 쉬움 = 첫 말풍선, 기본 = 앞의 두 개(또는 base 개), 도전 = 전부
  const FILL = (prompt, who, rows, wrong, d, more, baseN) => {
    const n = baseN || Math.min(2, rows.length);
    const slots = rows.map((r, i) => ({ id: `b${i + 1}`, who: Array.isArray(who) ? who[i] : who, label: r[0] }));
    const tg = (k) => ({ fill: Object.fromEntries(rows.slice(0, k).map((r, i) => [`b${i + 1}`, r[1]])) });
    const cardsOf = (k) => rows.slice(0, k).map((r) => r[1]).concat(wrong.slice(0, Math.max(1, k - 1))).reverse();
    const p = strip(prompt);
    return {
      prompt, toolOptions: { mode: 'fill', slots: slots.slice(0, n), cards: cardsOf(n) }, target: tg(n), difficulty: d,
      levels: {
        easy: { prompt: `${p}(말풍선 1개).`, toolOptions: { slots: slots.slice(0, 1), cards: cardsOf(1) }, target: tg(1) },
        challenge: { prompt: `${p}(말풍선 ${rows.length}개).`, toolOptions: { slots, cards: cardsOf(rows.length) }, target: tg(rows.length) },
      },
      ...more,
    };
  };

  // 칸 지도 핀: 쉬움 = 핀 자리 이름이 바로 보임(readout), 도전 = '왜 여기일까' 보기 고르기를 함께 한다(ask)
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

  // 스스로 점검(timer selfCheck) 출구 질문: 쉬움 앞 2칸, 기본 앞 3칸, 도전 4칸
  const SELF = (title, checks, prompt) => ({
    type: 'tool', tool: 'timer', options: { title }, prompt: prompt || '오늘 한 것에 스스로 표시해요.', target: { selfCheck: checks.slice(0, 3) }, difficulty: 0.1,
    levels: { easy: { target: { selfCheck: checks.slice(0, 2) } }, challenge: { target: { selfCheck: checks.slice(0, 4) } } },
  });
  // 약속 척도(emotion scale) 출구 질문: 고른 칸 아무것이나 받는다. 쉬움 = 3칸 척도
  const SCALE = (prompt, situation, feeling) => ({
    type: 'tool', tool: 'emotion', options: { mode: 'scale', situation, feeling, steps: 5, scaleLabels: { 1: '어려워요', 5: '잘 지켜요' } }, prompt, target: { level: 'any' }, difficulty: 0.1,
    levels: { easy: { toolOptions: { steps: 3, scaleLabels: { 1: '어려워요', 3: '잘 지켜요' } } } },
  });
  // 활동 문항 모양 → 출구 교구 질문 모양
  const EX = (tool, it) => ({ type: 'tool', tool, prompt: it.prompt, options: it.toolOptions, target: it.target, difficulty: it.difficulty, levels: it.levels });
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  const PEOPLE = [{ value: 5, name: '5명' }, { value: 1, name: '1명' }];

  // 우리 동네 통학로 칸 지도(3학년). 칸: [열, 행], 0행이 위(학교 쪽)
  const ROUTE = {
    title: '우리 동네 통학로', grid: [6, 4],
    regions: [
      { name: '공원', cells: [[0, 0], [1, 0]] }, { name: '언덕 아래 길', cells: [[2, 0], [3, 0]] }, { name: '학교', cells: [[4, 0], [5, 0]] },
      { name: '찻길', cells: [[0, 1], [1, 1], [2, 1], [3, 1], [4, 1]] }, { name: '신호등 횡단보도', cells: [[5, 1]] },
      { name: '보도', cells: [[0, 2], [2, 2], [3, 2]] }, { name: '주차장 입구', cells: [[1, 2]] }, { name: '신호 없는 횡단보도', cells: [[4, 2]] }, { name: '가게 앞', cells: [[5, 2]] },
      { name: '우리 집', cells: [[0, 3]] }, { name: '좁은 골목', cells: [[1, 3], [2, 3]] }, { name: '골목 끝', cells: [[3, 3]] }, { name: '놀이터', cells: [[4, 3], [5, 3]] },
    ],
  };

  // ======================================================================================================
  // 3학년 · 우리 동네 통학로 위험 지점 지도 (별표 2 초등 교통안전 "안전한 통학로 알기")
  // ======================================================================================================
  {
    const C = T('routemap', 3);
    const SPOTS = [['골목 끝', 9], ['주차장 입구', 6], ['신호 없는 횡단보도', 7]];
    const PIC = { type: 'picture', title: '위험하다고 꼽은 곳(가상의 우리 반)', unit: '명', xLabel: '곳', yLabel: '친구 수', icons: PEOPLE, icon: 'person' };
    M.push(
      C({
        id: 'saf-traffic.e34.routemap.intro.scene', type: 'intro', title: '동네 장면에서 조심할 곳 고르기',
        method: '동네 장면에서 위험한 곳 고르기', tool: 'emotion', minutes: 5,
        levels: { easy: '조심할 장면 2개(골목 끝·주차장 입구)가 바구니에 담기는 것을 함께 본다.', base: '장면 6개 가운데 조심할 4곳이 담기는 것을 보고 까닭을 말한다.', challenge: '4곳 가운데 가장 조심할 곳 하나를 골라 까닭을 짝에게 말한다.' },
        intro: {
          teacher: '"우리 동네에서 걸을 때 \'조심해요\' 마음이 드는 곳은 어디일까요?" 시연 단추로 좁은 골목 끝·큰 교차로·주차장 입구·언덕 아래 길 카드가 바구니에 담기는 것을 보이고, 곳마다 왜 조심해야 하는지 묻는다(기다릴 반응: "차가 갑자기 나와요", "앞이 안 보여요"). "매일 다니는 길이라 괜찮아요"라는 말이 나오면 "매일 다니는 길에서도 차는 매일 다른 때에 나와요. 익숙한 길에서 더 조심을 놓치지 않을까요?"라고 되묻는다.',
          student: '동네 장면 가운데 조심해야 할 곳을 고르고, 왜 그런지 짝에게 짧게 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'pick', basket: '조심해요', cards: [{ id: 'alley', text: '좁은 골목 끝' }, { id: 'wide', text: '넓은 보도 안쪽' }, { id: 'cross', text: '큰 교차로' }, { id: 'park', text: '주차장 입구' }, { id: 'yard', text: '놀이터 안' }, { id: 'hill', text: '언덕 아래 길' }], shuffle: false }, sequence: [{ pick: ['alley', 'park'] }, { pick: ['alley', 'cross', 'park', 'hill'] }] },
          art: { draw: 'a paper cut neighborhood with a narrow alley opening onto a road, a parking lot entrance, a big crossroads and a sloped street, small paper children walking on the sidewalk', banner: '어디를 조심할까?', extra: [{ motif: 'house', x: 300, y: 96 }] },
        },
        notes: '"다칠 뻔한 적 있나요?"처럼 겪은 일을 묻지 않는다. 그림 속 동네로만 이야기한다.',
      }),
      C({
        id: 'saf-traffic.e34.routemap.intro.legend', type: 'intro', title: '통학로 지도 기호 읽기',
        method: '통학로 지도 기호 읽기', tool: 'map', minutes: 5,
        levels: { easy: '기호 3개(학교·집·버스 정류장)의 뜻이 범례에 채워지는 것을 함께 본다.', base: '기호 5개의 뜻이 채워지는 것을 보고 우리 동네에서는 어디인지 말한다.', challenge: '기호를 보고 집에서 학교까지 가는 길을 말로 설명한다.' },
        intro: {
          teacher: '"지도에서 이 그림은 무엇을 뜻할까요?" 시연 단추로 범례 빈칸에 학교·우리 집·버스 정류장, 이어서 공원·가게가 채워지는 것을 보인다. "지도는 어른들만 보는 거예요"라는 말이 나오면 "지도에 위험한 곳을 표시해 두면 동생이나 친구도 미리 알 수 있지 않을까요?"라고 되묻는다. 횡단보도·신호등·주차장은 이 지도에 그림 기호가 없으니, 칠판에 선생님이 정한 기호(줄무늬·신호등 동그라미·P)를 그려 함께 보인다.',
          student: '지도 그림 기호의 뜻을 읽고, 우리 동네에서는 그곳이 어디인지 짝과 말해 보아요.',
          demo: { tool: 'map', options: { mode: 'legend', title: '통학로 지도 기호', grid: [6, 4], places: [{ name: '학교', icon: 'school', at: [5, 0] }, { name: '우리 집', icon: 'house', at: [0, 3] }, { name: '버스 정류장', icon: 'bus', at: [3, 1] }, { name: '공원', icon: 'park', at: [0, 0] }, { name: '가게', icon: 'market', at: [5, 2] }], meanings: { school: '학교', house: '우리 집', bus: '버스 정류장', park: '공원', market: '가게' }, legendIcons: ['school', 'house', 'bus', 'park', 'market'] }, sequence: [{ legend: { school: '학교', house: '우리 집', bus: '버스 정류장' } }, { legend: { school: '학교', house: '우리 집', bus: '버스 정류장', park: '공원', market: '가게' } }] },
          art: { draw: 'a paper cut town map with tiny paper symbols for a school, a house, a bus stop, a park and a shop, and an empty legend box at the corner being filled in', banner: '기호를 읽어요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '교구 지도에는 횡단보도·신호등·주차장 그림 기호가 없다. 칠판이나 실물 지도로 그 기호를 따로 보인다.',
      }),
      C({
        id: 'saf-traffic.e34.routemap.activity.pins', type: 'activity', title: '통학로 위험 지점 핀 꽂기',
        method: '위험 지점 핀 꽂기', tool: 'map', minutes: 15,
        levels: { easy: '핀을 놓으면 그 칸의 이름이 바로 보인다(위험 지점 4곳을 하나씩).', base: '지도의 이름을 보고 위험 지점 4곳에 하나씩 핀을 꽂는다.', challenge: '핀을 꽂을 때마다 그곳이 위험한 까닭도 보기에서 고르고, 짝과 고른 까닭을 견주어 말한다.' },
        activity: {
          title: '통학로 위험 지점 핀 꽂기', tool: 'map',
          teacher: '"집에서 학교까지 손가락으로 먼저 따라가 볼까요? 지나는 곳 가운데 차가 불쑥 나올 수 있는 곳은 어디예요?" 핀을 꽂을 때마다 "왜 여기예요?"라고 묻는다. "위험한 곳은 큰 찻길뿐이에요"라는 학생에게 "좁은 골목 끝에서 차가 나오면 운전자는 나를 언제 볼까요?"라고 되묻는다. 위험 지점은 큰길만이 아니라 골목 끝·출입구처럼 차와 사람이 만나는 곳이라는 것을 짚는다.',
          task: '통학로 지도에서 물음에 맞는 위험 지점에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            PIN(ROUTE, '골목에서 찻길로 나가는 곳에 핀을 꽂아요.', '골목 끝', { q: '이곳이 위험한 까닭은?', choices: ['꽃이 많아요', '차가 불쑥 나와요', '길이 넓어요'], answer: 1 }, 0.15),
            PIN(ROUTE, '차가 보도를 가로질러 드나드는 곳에 핀을 꽂아요.', '주차장 입구', { q: '이곳에서 할 일은?', choices: ['뛰어서 지나가요', '멈춰서 살펴요', '친구와 장난쳐요'], answer: 1 }, 0.2),
            PIN(ROUTE, '신호등 없이 길을 건너는 곳에 핀을 꽂아요.', '신호 없는 횡단보도', { q: '이곳에서 할 일은?', choices: ['손만 들고 뛰어요', '앞만 보고 건너요', '차가 멈췄는지 봐요'], answer: 2 }, 0.2),
            PIN(ROUTE, '내리막에서 차가 빨라지는 곳에 핀을 꽂아요.', '언덕 아래 길', { q: '이곳이 위험한 까닭은?', choices: ['차가 빨라져요', '차가 없어요', '조용해요'], answer: 0 }, 0.25, { conclude: '위험 지점은 큰길만이 아니에요. 골목 끝·출입구·신호 없는 곳·내리막을 미리 알아 두어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '골목 끝에서 찻길로 나갈 때 할 일은?', options: ['뛰어 나가요', '멈춰서 좌우를 봐요', '눈을 감고 가요'], answer: '멈춰서 좌우를 봐요' }] },
      }),
      C({
        id: 'saf-traffic.e34.routemap.activity.why', type: 'activity', title: '왜 위험할까 그물',
        method: '왜 위험할까 그물', tool: 'mindmap', minutes: 14,
        levels: { easy: '가지 2개(차가 갑자기 나와요·앞이 안 보여요)에 장소 카드를 나눈다.', base: '가지 3개에 장소 카드 6장을 나눈다.', challenge: '헷갈리는 카드 3장이 더해진 9장을 나누고, 두 가지에 다 맞을 것 같은 곳의 까닭을 짝에게 말한다.' },
        activity: {
          title: '왜 위험할까 그물', tool: 'mindmap',
          teacher: '"이곳은 차가 갑자기 나와서 위험할까요, 앞이 안 보여서 위험할까요, 차가 빨라서 위험할까요?" 카드를 놓을 때마다 "왜냐하면"으로 한 문장 말하게 한다. "트럭 옆은 차가 서 있으니 괜찮아요"라는 학생에게 "트럭 뒤에서 다른 차가 오면, 그 차 운전자는 트럭 뒤의 나를 볼 수 있을까요?"라고 묻는다. 위험한 까닭을 알면 그곳에서 할 일(멈추기·살피기·돌아가기)이 정해진다는 것을 짚는다.',
          task: '장소 카드를 위험한 까닭 가지에 나누어 넣어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORT('등굣길 장소를 위험한 까닭으로 나누어요.', { topic: '위험 지점' }, ['차가 갑자기 나와요', '앞이 안 보여요', '차가 빨라요'], [['주차장 입구', '아파트 출입구'], ['굽은 길 모퉁이', '큰 트럭 옆'], ['넓은 찻길', '내리막 찻길']], [['가게 앞 주차 칸'], ['높은 담장 옆'], ['신호 없는 큰길']], 0.15),
            SORT('하굣길 장소를 위험한 까닭으로 나누어요.', { topic: '하굣길' }, ['차가 갑자기 나와요', '앞이 안 보여요', '차가 빨라요'], [['골목 끝', '건물 주차장 문'], ['세워 둔 차 사이', '키 큰 나무 뒤'], ['쭉 뻗은 큰길', '고개 넘는 길']], [['택배 차 뒤'], ['어두운 굴다리'], ['차 많은 넓은 길']], 0.2),
            SORT('위험한 까닭에 맞는 할 일을 나누어요.', { topic: '이럴 땐' }, ['차가 갑자기 나와요', '앞이 안 보여요', '차가 빨라요'], [['출입구 앞 멈추기', '소리 듣고 살피기'], ['차 사이로 안 가기', '보이는 곳에 서기'], ['찻길 멀리 걷기', '신호등에서 건너기']], [['골목 끝 멈추기'], ['밝은 옷 입기'], ['뛰지 않기']], 0.25, { conclude: '왜 위험한지 알면 할 일이 보여요. 나오는 곳은 멈추고, 안 보이는 곳은 피하고, 빠른 길은 멀리 걸어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '장소가 위험한 까닭을 골라 번호를 써요(① 갑자기 나와요 ② 안 보여요 ③ 빨라요).', columns: ['장소', '번호'], cells: [['주차장 입구', ''], ['큰 트럭 옆', ''], ['내리막 찻길', '']], answer: '①, ②, ③' }] },
      }),
      C({
        id: 'saf-traffic.e34.routemap.activity.pair', type: 'activity', title: '갈림길: 빠른 골목? 큰길 보도?',
        method: '빠른 골목? 큰길 보도?', tool: 'dilemma', minutes: 15,
        levels: { easy: '갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '갈림 2번, 보기 3개씩 고르며 결과를 따라간다.', challenge: '갈림 2번을 지난 뒤 근거 카드 3장 가운데 알맞은 것을 고르고, 짝과 다른 선택의 결과를 견주어 말한다.' },
        activity: {
          title: '갈림길: 빠른 길과 안전한 길', tool: 'dilemma',
          teacher: '"늦었을 때 빠른 길을 고르면 무엇을 얻고 무엇을 잃을까요?" 보기를 고를 때마다 결과 장면을 소리 내어 읽고, 짝과 "나라면" 한 문장을 나눈다. "빠른 길이 늘 좋은 길이에요"라는 학생에게 "골목 끝에서 트럭이 나오면 몇 분 아낀 것이 무슨 소용일까요? 조금 늦는 것과 다치는 것 가운데 무엇이 더 큰일일까요?"라고 묻는다. 늦을 때는 길을 바꾸지 말고 선생님께 늦는다고 알리면 된다는 것을 짚는다.',
          task: '장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('늦잠을 잤어요. 어느 길로 갈까요?', {
              text: '늦잠을 잔 아침, 지름길 골목과 조금 먼 큰길 보도가 있어요.', motif: 'sun',
              choices: [
                { id: 'alley', text: '지름길 골목으로 뛴다', result: '골목 끝에서 트럭이 나와 급히 멈췄어요.', impact: [{ who: '나', text: '부딪힐 뻔했어요', tone: -1 }] },
                { id: 'walk', text: '큰길 보도로 걷는다', result: '보도 안쪽으로 걸어 횡단보도에 닿았어요.', ending: '조금 늦어도 안전한 길로 걸었어요.', next: {
                  text: '횡단보도 초록불이 깜박이기 시작했어요.', choices: [
                    { id: 'wait', text: '다음 초록불을 기다린다', result: '다음 신호에 좌우를 살피며 건넜어요.', impact: [{ who: '나', text: '안전하게 건넜어요', tone: 1 }], ending: '늦어도 신호를 기다려 안전하게 갔어요.' },
                    { id: 'dash', text: '깜박일 때 뛰어 건넌다', result: '중간에 빨간불로 바뀌어 차 앞에 섰어요.', impact: [{ who: '나', text: '차와 부딪힐 수 있어요', tone: -1 }] },
                    { id: 'jay', text: '옆 찻길로 가로지른다', result: '달려오던 차가 경적을 울렸어요.', impact: [{ who: '나와 운전자', text: '크게 놀랐어요', tone: -1 }] },
                  ] } },
                { id: 'ride', text: '친구 킥보드를 빌려 탄다', result: '보도에서 사람과 부딪힐 뻔했어요.', impact: [{ who: '걷는 사람', text: '다칠 수 있어요', tone: -1 }] },
              ] }, [['walk', 'wait']],
            [{ id: 'safe', text: '조금 늦어도 안전이 먼저라서' }, { id: 'signal', text: '깜박이는 불은 건너기 시작하지 않아서' }, { id: 'late', text: '지각하면 혼나니까', why: '늦으면 선생님께 알리면 돼요. 서두르다 다치는 것이 더 큰일이에요.' }], ['safe', 'signal'], 0.2),
            DIL('친구가 놀이터를 가로질러 가재요.', {
              text: '하굣길, 친구가 놀이터를 지나 주차장 입구로 빠지면 빠르대요.', motif: 'flower',
              choices: [
                { id: 'go', text: '친구를 따라 뛴다', result: '주차장 입구에서 나오는 차와 마주쳤어요.', impact: [{ who: '나와 친구', text: '부딪힐 뻔했어요', tone: -1 }] },
                { id: 'usual', text: '늘 다니는 보도로 가자고 한다', result: '친구가 잠깐 망설여요.', ending: '익숙한 안전한 길로 가자고 말했어요.', next: {
                  text: '친구가 "그럼 너 혼자 가"라고 해요.', choices: [
                    { id: 'why', text: '까닭을 말하고 같이 간다', result: '"주차장 입구는 차가 나와"라고 하자 친구도 따라왔어요.', impact: [{ who: '친구', text: '안전하게 갔어요', tone: 1 }], ending: '까닭을 말해 친구와 함께 안전한 길로 갔어요.' },
                    { id: 'follow', text: '혼자 되기 싫어 따라간다', result: '주차장 입구 앞에서 차가 후진해 나왔어요.', impact: [{ who: '나와 친구', text: '다칠 수 있어요', tone: -1 }] },
                    { id: 'race', text: '누가 먼저 가나 내기한다', result: '서로 뛰다가 길에서 넘어질 뻔했어요.', impact: [{ who: '나와 친구', text: '다칠 수 있어요', tone: -1 }] },
                  ] } },
                { id: 'fence', text: '울타리를 넘어 찻길로 간다', result: '울타리 너머는 차가 다니는 길이었어요.', impact: [{ who: '나', text: '크게 다칠 수 있어요', tone: -1 }] },
              ] }, [['usual', 'why']],
            [{ id: 'exit', text: '주차장 입구는 차가 나와서' }, { id: 'reason', text: '까닭을 말하면 친구도 바꿔서' }, { id: 'alone', text: '혼자 가기 싫어서', why: '혼자가 싫어도 위험한 길은 따라가지 않아요.' }], ['exit', 'reason'], 0.25),
            DIL('비가 와서 보도에 물웅덩이가 있어요.', {
              text: '비 온 뒤 보도에 큰 물웅덩이가 있어요. 옆은 찻길이에요.', motif: 'rain',
              choices: [
                { id: 'road', text: '찻길로 내려가 피한다', result: '뒤에서 오던 차가 물을 튀기며 가까이 지나갔어요.', impact: [{ who: '나', text: '차에 부딪힐 수 있어요', tone: -1 }] },
                { id: 'around', text: '보도 안쪽으로 돌아간다', result: '담장 쪽으로 붙어 웅덩이를 돌아갔어요.', ending: '찻길로 내려가지 않고 보도 안쪽으로 돌아갔어요.', next: {
                  text: '앞에 웅덩이가 또 있어 보도가 좁아졌어요.', choices: [
                    { id: 'slow', text: '천천히 한 줄로 지난다', result: '친구와 한 줄로 서서 천천히 지났어요.', impact: [{ who: '나와 친구', text: '안전해요', tone: 1 }], ending: '좁은 곳은 한 줄로 천천히 지나 안전했어요.' },
                    { id: 'jump', text: '웅덩이를 뛰어넘는다', result: '미끄러져 찻길 쪽으로 넘어질 뻔했어요.', impact: [{ who: '나', text: '다칠 수 있어요', tone: -1 }] },
                    { id: 'push', text: '친구를 밀고 먼저 간다', result: '친구가 찻길 쪽으로 밀렸어요.', impact: [{ who: '친구', text: '다칠 수 있어요', tone: -1 }] },
                  ] } },
                { id: 'splash', text: '첨벙첨벙 장난친다', result: '미끄러져 엉덩방아를 찧었어요.', impact: [{ who: '나', text: '다쳤어요', tone: -1 }] },
              ] }, [['around', 'slow']],
            [{ id: 'sidewalk', text: '찻길은 차가 다니는 곳이라서' }, { id: 'line', text: '좁은 곳은 한 줄이 안전해서' }, { id: 'quick', text: '빨리 지나가면 괜찮아서', why: '빨리보다 찻길에서 멀리 걷는 것이 먼저예요.' }], ['sidewalk', 'line'], 0.3, { conclude: '빠른 길보다 안전한 길이 좋은 길이에요. 늦을 때도 길을 바꾸지 않고 신호를 기다려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '늦은 날에도 지름길보다 ___ 길로 가요.', answer: '안전한' }] },
      }),
      C({
        id: 'saf-traffic.e34.routemap.activity.table', type: 'activity', title: '우리 반 위험 지점 그림그래프',
        method: '우리 반 위험 지점 표', tool: 'chart', minutes: 14,
        levels: { easy: '항목 2개, 첫 항목 그림은 미리 놓여 있다.', base: '항목 3개의 그림을 모두 놓아 완성한다.', challenge: '3개를 완성하고 가장 많이 꼽힌 곳을 고른 뒤, 그곳에서 지킬 일을 짝에게 말한다.' },
        activity: {
          title: '우리 반 위험 지점 그림그래프', tool: 'chart',
          teacher: '"큰 그림 하나는 5명이에요. 9명은 큰 그림 몇 개, 작은 그림 몇 개일까요?" 표의 수를 소리 내어 읽고 그림을 놓게 한다. 작은 그림만 9개 놓는 학생에게 "큰 그림을 쓰면 더 빨리 셀 수 있을까요?"라고 묻는다. 이 표는 가상의 반 자료라는 것을 밝히고, 우리 반도 조사하면 결과가 다를 수 있다고 말한다. 많이 꼽힌 곳이 곧 "더 조심할 곳"이라는 것을 그래프로 짚는다.',
          task: '표를 보고 그림그래프를 완성한 뒤, 그래프를 읽고 물음에 답해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '표를 보고 위험 지점 그림그래프를 완성해요.', toolOptions: Object.assign({}, PIC, { mode: 'build', data: SPOTS }), target: { build: true }, difficulty: 0.2,
              levels: { easy: { prompt: '표를 보고 두 곳의 그림그래프를 완성해요.', toolOptions: { data: SPOTS.slice(0, 2), given: [0] }, target: { build: true } } } },
            { prompt: '가장 많은 친구가 위험하다고 꼽은 곳은?', toolOptions: Object.assign({}, PIC, { mode: 'read', data: SPOTS, question: '가장 많이 꼽힌 곳은?', choices: ['골목 끝', '주차장 입구', '신호 없는 횡단보도'] }), target: { pick: 0 }, difficulty: 0.15 },
            { prompt: '주차장 입구와 신호 없는 횡단보도 가운데 더 많이 꼽힌 곳은?', toolOptions: Object.assign({}, PIC, { mode: 'read', data: SPOTS, question: '둘 가운데 더 많이 꼽힌 곳은?', choices: ['주차장 입구', '신호 없는 횡단보도'] }), target: { pick: 1 }, difficulty: 0.2, conclude: '많이 꼽힌 곳일수록 우리 반이 함께 더 조심할 곳이에요. 그곳에서 지킬 일을 정해요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '그래프를 보고 빈칸을 채워요(가상의 우리 반).', columns: ['곳', '친구 수(명)'], cells: [['골목 끝', '9'], ['주차장 입구', ''], ['신호 없는 횡단보도', '7']], answer: '6' }] },
        notes: '그래프 자료는 가상이다. 시간이 되면 우리 반이 직접 꼽은 곳으로 같은 표를 만들어 본다(실제 사고·다친 일은 묻지 않는다).',
      }),
      C({
        id: 'saf-traffic.e34.routemap.wrap.myroute', type: 'wrap', title: '나의 통학로 말풍선',
        method: '나의 통학로 이야기', tool: 'story', minutes: 6,
        levels: { easy: '위험 지점 말풍선 빈칸 1개를 채운다.', base: '말풍선 빈칸 2개를 채운다.', challenge: '말풍선 빈칸 3개에 곳마다 다른 행동을 넣는다.' },
        wrap: {
          teacher: '"내 등굣길의 위험 지점에서 나는 무엇을 할까요?" 말풍선을 채운 뒤 짝에게 "나는 ○○에서 ○○해요"로 소리 내어 말하게 한다. 출구 2번에서 "매일 다니는 길은 괜찮아요"를 고른 학생에게 "오늘 지도에서 찾은 위험 지점이 매일 다니는 길에도 있었나요?"라고 되묻는다.',
          exitTicket: [
            EX('story', FILL('등굣길 위험 지점에서 할 일을 채워요.', '나', [['골목 끝에서는 ___.', '멈춰서 살펴요'], ['주차장 입구에서는 ___.', '차를 기다려요'], ['신호 없는 곳에서는 ___.', '차가 서면 건너요']], ['뛰어 나가요', '장난쳐요'], 0.15)),
            { type: 'choice', prompt: '매일 다니는 등굣길에 대한 바른 생각은?', options: ['익숙하니 안 살펴도 돼요', '익숙해도 위험 지점은 살펴요', '빨리 뛰어가면 돼요'], answer: 1, difficulty: 0.1, explain: '익숙한 길에도 골목 끝·출입구 같은 위험 지점이 있어요.' },
            { type: 'short', prompt: '내 등굣길에서 가장 조심할 곳과 할 일을 한 줄로 써요.' },
          ],
        },
        worksheet: {
          title: '나의 통학로 위험 지점',
          items: [
            { type: 'draw', prompt: '집에서 학교까지 길을 그리고 위험 지점에 ★를 그려요.' },
            { type: 'short', prompt: '★ 한 곳에서 내가 할 일을 써요.' },
          ],
          easy: { note: '골목 끝·주차장 입구·횡단보도를 떠올려요.', items: [{ type: 'choice', prompt: '골목 끝에서는?', options: ['멈춰요', '뛰어요'], answer: '멈춰요' }] },
        },
      }),
      C({
        id: 'saf-traffic.e34.routemap.wrap.self', type: 'wrap', title: '통학로 약속 지킬 마음',
        method: '통학로 약속 마음 나누기', tool: 'emotion', minutes: 6,
        levels: { easy: '약속 하나를 3칸 척도(어려워요~잘 지켜요)로 고른다.', base: '약속 두 개를 5칸 척도로 고른다.', challenge: '5칸 척도로 고른 뒤 어려운 약속 하나와 그 까닭을 짝에게 말한다.' },
        wrap: {
          teacher: '"이 약속을 나는 얼마나 잘 지킬 수 있을까요? 솔직하게 골라요." 척도를 고른 뒤 \'어려워요\' 쪽을 고른 학생에게 "어떤 때 지키기 어려울까요? 그때 도와줄 방법이 있을까요?"라고 묻는다. 점수를 견주지 않고, 어려운 약속을 말한 학생을 칭찬한다.',
          exitTicket: [
            SCALE('골목 끝에서 멈추기를 얼마나 잘 지킬 수 있나요?', '골목 끝에서 멈춰 좌우를 살펴요', '뿌듯함'),
            SCALE('주차장 입구 살피기를 얼마나 잘 지킬 수 있나요?', '주차장 입구에서 차를 살펴요', '편안함'),
            { type: 'choice', prompt: '약속을 지키기 어려울 때 좋은 방법은?', options: ['그냥 안 지켜요', '가족과 같이 연습해요', '친구 탓을 해요'], answer: 1, difficulty: 0.1, explain: '어려운 약속은 가족·친구와 함께 연습하면 지키기 쉬워져요.' },
          ],
        },
        worksheet: {
          title: '통학로 약속',
          items: [
            { type: 'check', prompt: '내가 지킬 통학로 약속에 표시해요.', options: ['골목 끝에서 멈춰요', '주차장 입구를 살펴요', '횡단보도로 건너요'] },
            { type: 'short', prompt: '지키기 어려운 약속 하나와 도와줄 방법을 써요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 3학년 · 교차로에서 도는 차 살피기 (별표 2 초등 교통안전 "교통 표지판 등 도로 교통 법규 알기")
  // ======================================================================================================
  {
    const C = T('corner', 3);
    const SIDE = [[0, 0], [1, 0], [3, 0], [4, 0], [0, 1], [1, 1], [3, 1], [4, 1], [0, 3], [1, 3], [3, 3], [4, 3], [0, 4], [1, 4], [3, 4], [4, 4]];
    const CROSS = {
      title: '네거리 교차로', grid: [5, 5],
      regions: [
        { name: '보도', cells: SIDE }, { name: '북쪽 횡단보도', cells: [[2, 1]] }, { name: '남쪽 횡단보도', cells: [[2, 3]] }, { name: '서쪽 횡단보도', cells: [[1, 2]] }, { name: '동쪽 횡단보도', cells: [[3, 2]] },
        { name: '교차로 가운데', cells: [[2, 2]] }, { name: '찻길', cells: [[2, 0], [2, 4], [0, 2], [4, 2]] },
      ],
      roads: [[[2, 4], [2, 3], [2, 2], [3, 2], [4, 2]]],
    };
    const TL = { axis: ['먼저', '나중'] };
    M.push(
      C({
        id: 'saf-traffic.e34.corner.intro.signal', type: 'intro', title: '깜박이는 불빛의 뜻',
        method: '깜박이는 불빛의 뜻', tool: 'emotion', minutes: 5,
        levels: { easy: '장면 하나(차 옆 불빛이 깜박여요)에서 뜻을 함께 고른다.', base: '두 장면(오른쪽 깜박·왼쪽 깜박)을 보고 뜻을 고른다.', challenge: '불빛이 왼쪽·오른쪽 가운데 어디서 깜박이는지 보고 차가 돌 쪽을 말한다.' },
        intro: {
          teacher: '"초록불인데 차 옆에서 노란 불이 깜박깜박해요. 이 불은 무슨 뜻일까요?" 시연 단추로 \'돌려는 차예요\'가 골라지는 것을 보인다. "예쁜 장식 불이에요"라는 말이 나오면 "운전자가 일부러 켜는 불이에요. 왜 켤까요? 오른쪽에서 깜박이면 차는 어느 쪽으로 갈까요?"라고 되묻는다. 초록불이어도 도는 차는 횡단보도 쪽으로 올 수 있다는 것을 오늘 배운다고 밝힌다.',
          student: '차 옆에서 깜박이는 불빛을 보고, 차가 무엇을 하려는지 골라 짝에게 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'branch', situation: '교차로에서 차 옆 노란 불이 깜박여요.', choices: [{ id: 'turn', text: '돌려는 차예요', result: '맞아요. 방향 지시등이에요.', mood: '놀람' }, { id: 'deco', text: '그냥 장식이에요', result: '장식이 아니라 돌겠다는 신호예요.', mood: '걱정' }] }, sequence: [{ choice: 'turn' }] },
          art: { draw: 'a paper cut crossroads with a small paper car at the corner, a yellow paper turn signal light blinking on its right side, children waiting on the sidewalk', banner: '깜박깜박, 무슨 뜻일까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      C({
        id: 'saf-traffic.e34.corner.intro.view', type: 'intro', title: '교차로 지도 둘러보기',
        method: '교차로 칸 지도 둘러보기', tool: 'map', minutes: 5,
        levels: { easy: '횡단보도 2곳에 핀이 꽂히는 것을 함께 본다.', base: '횡단보도 4곳에 차례로 핀이 꽂히는 것을 본다.', challenge: '진한 길(남쪽에서 동쪽으로 도는 차)과 겹치는 횡단보도를 찾아 말한다.' },
        intro: {
          teacher: '"네거리에는 횡단보도가 몇 개일까요?" 시연 단추로 북·남·서·동 횡단보도에 핀이 차례로 꽂히는 것을 보인 뒤, 지도의 진한 길(남쪽에서 와서 동쪽으로 도는 차가 가는 길)을 손가락으로 따라가게 한다. "도는 차는 횡단보도를 안 지나요"라는 말이 나오면 "진한 길이 지나는 횡단보도를 찾아볼까요?"라고 되묻는다.',
          student: '교차로 지도에서 횡단보도 네 곳을 찾고, 도는 차가 지나는 횡단보도를 짝과 찾아보아요.',
          demo: { tool: 'map', options: CROSS, sequence: [{ pin: [2, 1] }, { pin: [2, 3] }, { pin: [1, 2] }, { pin: [3, 2] }] },
          art: { draw: 'a paper cut map of a four way crossroads with four striped paper crosswalks and a curved paper arrow showing a car turning right', banner: '횡단보도는 어디에?', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
        },
      }),
      C({
        id: 'saf-traffic.e34.corner.activity.order', type: 'activity', title: '교차로 건너는 차례',
        method: '교차로 건너는 차례', tool: 'timeline', minutes: 15,
        levels: { easy: '카드 3장, 놓으면 바로 맞는지 알려 준다.', base: '카드 4장을 차례대로 놓은 뒤 확인한다(셋째 문항은 대각선 쪽을 두 번에 건너는 차례).', challenge: '틀린 카드 1장이 섞인 5장에서 그것을 빼고 4장을 놓는다.' },
        activity: {
          title: '교차로 건너는 차례', tool: 'timeline',
          teacher: '"초록불이 켜지면 바로 건너도 될까요? 그 전에 무엇을 한 번 더 볼까요?" 카드를 다 놓으면 모둠이 일어나 차례대로 몸으로 따라 한다(서기 → 신호 보기 → 고개 돌려 도는 차 보기 → 살피며 건너기). "초록불이면 차가 모두 멈춰요"라는 학생에게 "도는 차에게도 초록불일 수 있어요. 그 차는 어디로 올까요?"라고 묻는다. 건너는 동안에도 살핀다는 것을 짚는다.',
          task: '카드를 하는 차례대로 시간 띠에 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORD('교차로 횡단보도를 건너는 차례로 놓아요.', TL, [{ id: 'stand', text: '보도 안쪽에 서요' }, { id: 'light', text: '신호를 봐요' }, { id: 'turn', text: '도는 차를 살펴요' }, { id: 'go', text: '살피며 건너요' }], [0, 1, 3], { id: 'run', text: '초록불에 바로 뛰어요', why: '초록불이어도 도는 차가 올 수 있어 먼저 살펴요.' }, 0.15),
            ORD('도는 차가 다가올 때 차례로 놓아요.', TL, [{ id: 'stop', text: '건너기 전 멈춰요' }, { id: 'look', text: '깜박이 불을 봐요' }, { id: 'wait', text: '차가 설 때까지' }, { id: 'eyes', text: '운전자를 보고 건너요' }], [0, 2, 3], { id: 'wave', text: '손 흔들며 앞을 막아요', why: '차 앞을 막으면 운전자가 놀라 위험해요.' }, 0.2),
            ORD('대각선 쪽으로 갈 때 두 번에 건너는 차례로 놓아요.', TL, [{ id: 'first', text: '첫 횡단보도 건너요' }, { id: 'corner', text: '모퉁이 보도에 서요' }, { id: 'next', text: '다음 신호를 기다려요' }, { id: 'second', text: '둘째 횡단보도 건너요' }], [0, 1, 3], { id: 'diag', text: '가운데로 가로질러요', why: '교차로 가운데는 차가 도는 곳이라 가로지르지 않아요.' }, 0.25, { conclude: '교차로에서는 신호를 보고, 도는 차를 살피고, 건너는 동안에도 살펴요. 대각선 쪽은 두 번에 건너요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '초록불이 켜져도 ___ 차를 살피고 건너요.', answer: '도는' }] },
      }),
      C({
        id: 'saf-traffic.e34.corner.activity.choose', type: 'activity', title: '갈림길: 초록불인데 차가 돌아요',
        method: '초록불인데 차가 돌아요', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '갈림 2번, 보기 3개씩 고르며 결과를 따라간다.', challenge: '갈림 2번을 지난 뒤 근거 카드 3장 가운데 알맞은 두 장을 고른다.' },
        activity: {
          title: '갈림길: 도는 차를 만났을 때', tool: 'dilemma',
          teacher: '"내가 초록불이니까 차가 알아서 서 줄까요?" 보기를 고를 때마다 결과를 소리 내어 읽고, 운전자에게 내가 보였는지 짝과 말하게 한다. "차가 알아서 멈춰 줄 거예요"라는 학생에게 "운전자가 다른 쪽을 보고 있었다면요? 내가 먼저 살피면 무엇이 달라질까요?"라고 묻는다. 운전자가 손짓해도 다른 차가 오는지 한 번 더 본다는 것을 짚는다.',
          task: '장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('초록불인데 도는 차가 다가와요. 어떻게 할까요?', {
              text: '초록불에 건너려는데 오른쪽으로 도는 차가 횡단보도 쪽으로 와요.', motif: 'sun',
              choices: [
                { id: 'go', text: '초록불이니 그냥 건넌다', result: '차가 급히 멈추며 큰 소리가 났어요.', impact: [{ who: '나', text: '부딪힐 뻔했어요', tone: -1 }] },
                { id: 'wait', text: '멈춰서 차를 살핀다', result: '차가 횡단보도 앞에서 천천히 멈췄어요.', ending: '멈춰서 살펴 도는 차를 먼저 알아챘어요.', next: {
                  text: '운전자가 "먼저 가렴" 하고 손짓해요.', choices: [
                    { id: 'check', text: '다른 차가 오는지 보고 건넌다', result: '옆 차로에 오는 차가 없는 것을 보고 건넜어요.', impact: [{ who: '나', text: '안전하게 건넜어요', tone: 1 }], ending: '손짓을 보고도 한 번 더 살피고 건넜어요.' },
                    { id: 'dash', text: '고마워서 뛰어 건넌다', result: '뛰다가 옆에서 오던 자전거와 부딪힐 뻔했어요.', impact: [{ who: '나와 자전거', text: '다칠 수 있어요', tone: -1 }] },
                    { id: 'phone', text: '휴대전화를 보며 건넌다', result: '앞을 못 보고 천천히 걷다 신호가 바뀌었어요.', impact: [{ who: '나', text: '길 가운데 남았어요', tone: -1 }] },
                  ] } },
                { id: 'back', text: '놀라서 뒤로 뛴다', result: '뒤에 서 있던 친구와 부딪혔어요.', impact: [{ who: '친구', text: '넘어질 뻔했어요', tone: -1 }] },
              ] }, [['wait', 'check']],
            [{ id: 'turn', text: '초록불에도 도는 차가 와서' }, { id: 'more', text: '손짓 뒤에도 다른 차가 올 수 있어서' }, { id: 'green', text: '초록불이면 차가 다 서서', why: '초록불이어도 도는 차는 움직일 수 있어요.' }], ['turn', 'more'], 0.2),
            DIL('깜박이를 켠 차가 멈추지 않고 와요.', {
              text: '건너려는데 왼쪽으로 깜박이를 켠 차가 속도를 줄이지 않아요.', motif: 'cloud',
              choices: [
                { id: 'stay', text: '보도에서 기다린다', result: '차가 그대로 돌아 지나갔어요.', ending: '멈추지 않는 차를 보고 보도에서 기다렸어요.', next: {
                  text: '차가 지나가고 초록불이 아직 켜져 있어요.', choices: [
                    { id: 'look', text: '다시 좌우를 보고 건넌다', result: '뒤따르는 차가 없는 것을 보고 건넜어요.', impact: [{ who: '나', text: '안전하게 건넜어요', tone: 1 }], ending: '차가 지난 뒤 다시 살피고 건넜어요.' },
                    { id: 'follow', text: '바로 뒤따라 뛴다', result: '뒤에 오던 차도 돌아오고 있었어요.', impact: [{ who: '나', text: '부딪힐 뻔했어요', tone: -1 }] },
                    { id: 'yell', text: '차에게 소리를 지른다', result: '소리를 지르느라 신호를 놓쳤어요.', impact: [{ who: '나', text: '건널 때를 놓쳤어요', tone: 0 }] },
                  ] } },
                { id: 'hand', text: '손을 들고 앞으로 나간다', result: '차가 나를 늦게 보고 급히 섰어요.', impact: [{ who: '나', text: '부딪힐 뻔했어요', tone: -1 }] },
                { id: 'run', text: '차보다 먼저 뛰어 건넌다', result: '차와 가까이 스쳐 지나갔어요.', impact: [{ who: '나와 운전자', text: '크게 놀랐어요', tone: -1 }] },
              ] }, [['stay', 'look']],
            [{ id: 'see', text: '차가 나를 못 봤을 수 있어서' }, { id: 'again', text: '한 대 뒤에 또 올 수 있어서' }, { id: 'fast', text: '빨리 건너면 괜찮아서', why: '차보다 빨리 갈 수는 없어요. 기다리는 것이 안전해요.' }], ['see', 'again'], 0.25),
            DIL('친구가 "차 오기 전에 빨리 가자"고 해요.', {
              text: '교차로에서 초록불이 막 켜졌는데 도는 차가 보여요. 친구가 빨리 가재요.', motif: 'flower',
              choices: [
                { id: 'friend', text: '친구 손을 잡고 뛴다', result: '둘이 뛰다 도는 차 앞에 섰어요.', impact: [{ who: '나와 친구', text: '부딪힐 뻔했어요', tone: -1 }] },
                { id: 'say', text: '"차가 돌아, 기다리자"고 한다', result: '친구가 걸음을 멈췄어요.', ending: '도는 차를 알려 친구와 함께 멈췄어요.', next: {
                  text: '도는 차가 멈춰 서고 운전자가 우리를 봐요.', choices: [
                    { id: 'together', text: '운전자를 보고 함께 건넌다', result: '운전자와 눈을 맞추고 살피며 건넜어요.', impact: [{ who: '나와 친구', text: '안전하게 건넜어요', tone: 1 }], ending: '서로 보았는지 확인하고 함께 건넜어요.' },
                    { id: 'play', text: '건너며 장난친다', result: '장난치다 신호가 깜박이기 시작했어요.', impact: [{ who: '나와 친구', text: '길 가운데 남을 수 있어요', tone: -1 }] },
                    { id: 'stop', text: '횡단보도 가운데서 멈춘다', result: '뒤에서 오던 차가 머뭇거렸어요.', impact: [{ who: '운전자', text: '헷갈렸어요', tone: -1 }] },
                  ] } },
                { id: 'alone', text: '친구만 먼저 보낸다', result: '친구 혼자 도는 차 앞을 지나갔어요.', impact: [{ who: '친구', text: '다칠 수 있어요', tone: -1 }] },
              ] }, [['say', 'together']],
            [{ id: 'tell', text: '알려 주면 친구도 멈춰서' }, { id: 'eyes', text: '서로 보았는지 확인해야 해서' }, { id: 'quick', text: '차보다 먼저 가면 돼서', why: '차보다 먼저 가려고 뛰는 것이 가장 위험해요.' }], ['tell', 'eyes'], 0.3, { conclude: '초록불이어도 도는 차를 살피고, 운전자가 나를 보았는지 확인한 뒤 건너요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '초록불인데 도는 차가 다가오면?', options: ['그냥 건너요', '멈춰서 차를 살펴요', '뛰어서 먼저 가요'], answer: '멈춰서 차를 살펴요' }] },
      }),
      C({
        id: 'saf-traffic.e34.corner.activity.drill', type: 'activity', title: '교차로 건너기 모의 연습',
        method: '교차로 건너기 모의 연습', tool: 'timer', minutes: 15,
        levels: { easy: '연습 기록 칸 1개(교사 안내로 한 번).', base: '기록 칸 2개(짝과 번갈아 두 번, 짝 점검).', challenge: '기록 칸 3개(도는 차 역할을 넣어 세 번).' },
        activity: {
          title: '교실 교차로 건너기 연습', tool: 'timer',
          teacher: '"바닥 테이프 횡단보도 앞에 서 볼까요? 연습을 시작하기 전에 안전부터 살펴요." 책상을 밀어 교실 바닥에 테이프로 교차로를 만들고, 도는 차 역할은 천천히 걷게 한다. 순서 카드를 맞춘 뒤 짝과 번갈아 건너고, 짝이 고개 돌리기를 했는지 봐 준다. 고개를 돌리지 않고 앞만 보는 학생에게 "도는 차는 어느 쪽에서 왔나요? 그쪽을 먼저 봐요"라고 말해 준다.',
          task: '연습 전 안전 점검, 건너는 순서 맞추기, 짝이 점검한 횟수 적기를 해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '연습하기 전에 교실 안전 점검 칸에 모두 표시해요.', toolOptions: { title: '연습 전 점검', safety: ['바닥에 가방이 없어요', '한 명씩 건너요', '차 역할은 걸어요'] }, target: { safety: true }, difficulty: 0.1 },
            { prompt: '교차로를 건너는 순서 카드를 바르게 놓아요.', toolOptions: { title: '건너는 순서', cards: ['살피며 건너요', '도는 차를 봐요', '보도 안쪽에 서요', '신호를 봐요'] }, target: { order: ['보도 안쪽에 서요', '신호를 봐요', '도는 차를 봐요', '살피며 건너요'] }, difficulty: 0.2 },
            { prompt: '짝이 고개 돌려 살핀 횟수를 연습마다 적어요.', toolOptions: { title: '짝 점검 기록', unit: '번', fields: ['1번째', '2번째'] }, target: { records: 2 }, difficulty: 0.15,
              levels: { easy: { prompt: '고개 돌려 살핀 횟수를 적어요(1번 연습).', toolOptions: { fields: ['1번째'] }, target: { records: 1 } }, challenge: { prompt: '고개 돌려 살핀 횟수를 적어요(3번 연습).', toolOptions: { fields: ['1번째', '2번째', '3번째'] }, target: { records: 3 } } },
              conclude: '몸으로 연습하면 길에서도 저절로 고개가 돌아가요. 신호 → 도는 차 → 건너며 살피기예요.' },
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '연습에서 내가 한 것에 표시해요.', options: ['보도 안쪽에 섰어요', '도는 차 쪽으로 고개를 돌렸어요', '뛰지 않고 걸었어요'] }] },
        notes: '책상을 밀고 테이프로 교차로를 만든다. 도는 차 역할은 반드시 걷게 하고, 한 번에 한 명씩 건넌다.',
      }),
      C({
        id: 'saf-traffic.e34.corner.activity.eyes', type: 'activity', title: '운전자와 눈 맞추기 대화',
        method: '운전자와 눈 맞추기 대화', tool: 'story', minutes: 14,
        levels: { easy: '말풍선 빈칸 1개를 채운다.', base: '말풍선 빈칸 3개를 채운다.', challenge: '말풍선 빈칸 4개를 채운다(운전자가 나를 못 본 장면 포함).' },
        activity: {
          title: '운전자와 눈 맞추기 대화', tool: 'story',
          teacher: '"운전자가 나를 보았는지 어떻게 알 수 있을까요?" 말풍선을 채운 뒤 짝과 운전자·아이 역할을 나눠 실제로 주고받게 한다. "차가 알아서 서 줄 거예요"라는 학생에게 "운전자 얼굴이 다른 쪽을 보고 있으면 나를 봤을까요?"라고 묻는다. 눈이 마주치고 차가 멈춘 것을 확인한 뒤 건넌다는 것을 짚는다.',
          task: '운전자와 아이의 말풍선 빈칸에 알맞은 카드를 넣어 이야기를 완성해요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            FILL('운전자가 멈춰 준 장면의 말풍선을 채워요.', ['운전자', '나', '나', '운전자'], [['먼저 ___.', '가렴'], ['___, 고맙습니다.', '눈을 맞추고'], ['좌우를 ___ 건널게요.', '살피며'], ['조심히 ___.', '건너렴']], ['뛰어', '안 보고'], 0.15, {}, 3),
            FILL('운전자가 나를 못 본 장면의 말풍선을 채워요.', ['나', '나', '친구', '나'], [['운전자가 ___ 봐요.', '다른 쪽을'], ['차가 설 때까지 ___.', '기다릴래요'], ['손을 들어 ___?', '알려 볼까'], ['멈춘 걸 보고 ___.', '건너자']], ['그냥 가자', '뛰자'], 0.2, {}, 3),
            FILL('친구에게 눈 맞추기를 알려 주는 말을 채워요.', ['나', '친구', '나', '친구'], [['운전자 ___ 봐.', '얼굴을'], ['눈이 ___ 건너?', '마주치면'], ['차가 ___ 확인해.', '멈췄는지'], ['알았어, ___.', '같이 살피자']], ['그냥 뛰자', '안 봐도 돼'], 0.25, { conclude: '운전자와 눈을 맞추고, 차가 멈춘 것을 확인한 뒤 살피며 건너요.' }, 3),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '운전자와 눈을 맞추고 차가 ___ 것을 본 뒤 건너요.', answer: '멈춘' }] },
      }),
      C({
        id: 'saf-traffic.e34.corner.wrap.tree', type: 'wrap', title: '교차로 약속 그물',
        method: '교차로 약속 그물', tool: 'mindmap', minutes: 6,
        levels: { easy: '가지 2개(서는 자리·살필 것)에 카드 4장을 넣는다.', base: '가지 3개에 카드 6장을 넣는다.', challenge: '함정 카드 1장이 섞인 7장에서 그것을 빼고 넣는다.' },
        wrap: {
          teacher: '"교차로에서 서는 자리, 살필 것, 건너는 법을 한 그물로 모아 볼까요?" 카드를 다 넣으면 가지마다 한 목소리로 읽는다. 함정 카드 \'초록불이면 바로 뛰기\'를 넣으려는 학생에게 "초록불일 때 오는 차는 누구였나요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '교차로', slots: ['서는 자리', '살필 것', '건너는 법'], cards: ['보도 안쪽', '신호등', '살피며 걷기', '모퉁이 보도', '도는 차', '두 번에 건너기'] }, prompt: '교차로 약속 카드를 가지에 넣어요.', target: { sort: { '서는 자리': ['보도 안쪽', '모퉁이 보도'], '살필 것': ['신호등', '도는 차'], '건너는 법': ['살피며 걷기', '두 번에 건너기'] } }, difficulty: 0.15,
              levels: {
                easy: { prompt: '교차로 약속 카드를 두 가지에 넣어요.', toolOptions: { slots: ['서는 자리', '살필 것'], cards: ['보도 안쪽', '신호등', '모퉁이 보도', '도는 차'] }, target: { sort: { '서는 자리': ['보도 안쪽', '모퉁이 보도'], '살필 것': ['신호등', '도는 차'] } } },
                challenge: { prompt: '교차로 약속 카드를 넣고 틀린 카드는 빼요.', toolOptions: { cards: ['보도 안쪽', '신호등', '살피며 걷기', '초록불이면 바로 뛰기', '모퉁이 보도', '도는 차', '두 번에 건너기'] }, target: { sort: { '서는 자리': ['보도 안쪽', '모퉁이 보도'], '살필 것': ['신호등', '도는 차'], '건너는 법': ['살피며 걷기', '두 번에 건너기'] } } },
              } },
            { type: 'choice', prompt: '방향 지시등이 깜박이는 차는?', options: ['멈춰 있을 차예요', '돌려는 차예요', '장식한 차예요'], answer: 1, difficulty: 0.1, explain: '방향 지시등은 운전자가 돌겠다고 알리는 불빛이에요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '교차로에서 도는 차 살피기',
          items: [
            { type: 'table', prompt: '교차로 약속을 가지에 맞게 써요.', columns: ['서는 자리', '살필 것', '건너는 법'], cells: [['', '', '']], answer: '보도 안쪽, 도는 차, 살피며 걷기' },
            { type: 'draw', prompt: '교차로에서 도는 차를 살피는 내 모습을 그려요.' },
          ],
        },
      }),
      C({
        id: 'saf-traffic.e34.corner.wrap.self', type: 'wrap', title: '교차로 스스로 점검',
        method: '교차로 스스로 점검', tool: 'kitchen', minutes: 6,
        levels: { easy: '점검 칸 2개에서 오늘 한 것을 표시한다.', base: '점검 칸 3개에서 오늘 한 것을 표시한다.', challenge: '3개를 표시한 뒤 짝에게 잘한 점 한 가지를 칭찬한다.' },
        wrap: {
          teacher: '"오늘 연습에서 내가 실제로 한 것만 정직하게 표시해요." 점검표를 한 칸씩 읽어 준다. 표시하지 못한 칸이 있는 학생에게 "다음 길에서는 그 칸 하나만 꼭 해 볼까요?"라고 말한다. 짝끼리 "너는 ○○을 잘했어" 칭찬을 한 가지씩 주고받는다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '교차로 점검', items: [{ id: 'light', text: '신호를 확인했어요' }, { id: 'turn', text: '도는 차를 살폈어요' }, { id: 'walk', text: '뛰지 않았어요' }] }, prompt: '오늘 연습에서 한 것에 표시해요.', target: { selfCheck: true }, difficulty: 0.1,
              levels: { easy: { toolOptions: { items: [{ id: 'light', text: '신호를 확인했어요' }, { id: 'turn', text: '도는 차를 살폈어요' }] } } } },
            { type: 'choice', prompt: '교차로를 건너는 동안 할 일은?', options: ['앞만 보고 뛰어요', '계속 살피며 걸어요', '휴대전화를 봐요'], answer: 1, difficulty: 0.1, explain: '건너는 동안에도 도는 차가 올 수 있어 계속 살펴요.' },
            { type: 'short', prompt: '짝이 잘한 점을 한 가지 써요.' },
          ],
        },
        worksheet: {
          title: '교차로 스스로 점검',
          items: [
            { type: 'check', prompt: '내일 길에서 지킬 것에 표시해요.', options: ['신호 확인', '도는 차 살피기', '건너며 살피기'] },
            { type: 'short', prompt: '교차로에서 꼭 지킬 일을 한 줄로 써요.' },
          ],
          easy: { note: '신호 → 도는 차 → 건너며 살피기를 떠올려요.', items: [{ type: 'choice', prompt: '초록불이면 차가 다 설까요?', options: ['도는 차는 와요', '다 서요'], answer: '도는 차는 와요' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 3학년 · 주차장 입구와 뒤로 가는 차 (별표 2 초등 교통안전 "안전한 통학로 알기")
  // ======================================================================================================
  {
    const C = T('driveway', 3);
    const TOWN = {
      title: '출입구가 많은 우리 동네', grid: [6, 4],
      regions: [
        { name: '아파트', cells: [[0, 0], [1, 0]] }, { name: '아파트 출입구', cells: [[2, 0]] }, { name: '공원', cells: [[3, 0], [4, 0], [5, 0]] },
        { name: '보도', cells: [[0, 1], [1, 1], [3, 1], [5, 1], [1, 3], [2, 3], [4, 3]] }, { name: '주차장 입구', cells: [[2, 1]] }, { name: '가게 앞 주차 칸', cells: [[4, 1]] },
        { name: '찻길', cells: [[0, 2], [1, 2], [2, 2], [3, 2], [4, 2], [5, 2]] },
        { name: '학교', cells: [[0, 3]] }, { name: '건물 주차장 문', cells: [[3, 3]] }, { name: '놀이터', cells: [[5, 3]] },
      ],
    };
    const TL = { axis: ['먼저', '나중'] };
    const HOME = [['출입구 있음', 14], ['출입구 없음', 10]];
    M.push(
      C({
        id: 'saf-traffic.e34.driveway.intro.sound', type: 'intro', title: '삐삐 소리와 흰 불빛',
        method: '삐삐 소리와 흰 불빛', tool: 'emotion', minutes: 5,
        levels: { easy: '흰 불이 켜지고 삐삐 소리가 나는 장면 하나에서 차가 갈 쪽을 함께 고른다.', base: '두 번 시연(흰 불 장면 → 소리 없이 바퀴가 도는 장면)을 보고 고른다.', challenge: '소리가 없어도 차가 움직일 수 있는 까닭을 말한다.' },
        intro: {
          teacher: '"주차된 차 뒤에서 흰 불이 켜지고 \'삐삐\' 소리가 나요. 차는 어디로 움직일까요?" 시연 단추로 \'뒤로 와요\'가 골라지는 것을 보인다. "주차된 차는 안 움직여요"라는 말이 나오면 "흰 불은 뒤로 가는 차가 켜는 불이에요. 지금 그 차 뒤에 누가 있나요?"라고 되묻는다. 경고음이 없는 차도 있으니 소리가 없다고 안심하지 않는다는 것을 짚는다.',
          student: '흰 불빛과 삐삐 소리를 보고, 차가 어느 쪽으로 움직일지 골라 짝에게 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'branch', situation: '주차된 차 뒤에 흰 불이 켜지고 삐삐 소리가 나요.', choices: [{ id: 'back', text: '뒤로 와요', result: '맞아요. 뒤로 가는 차예요. 차 뒤에서 비켜요.', mood: '놀람' }, { id: 'front', text: '앞으로 가요', result: '흰 불은 뒤로 갈 때 켜져요.', mood: '걱정' }, { id: 'still', text: '안 움직여요', result: '불이 켜지면 곧 움직여요.', mood: '걱정' }] }, sequence: [{ choice: 'back' }] },
          art: { draw: 'a paper parking lot where a small paper car has white reverse lights on and small sound waves behind it, a paper child stepping back onto the sidewalk', banner: '흰 불, 삐삐 소리', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '모든 차에 경고음이 있는 것은 아니다. "소리가 없으면 안 움직인다"는 오개념을 꼭 짚는다.',
      }),
      C({
        id: 'saf-traffic.e34.driveway.intro.body', type: 'intro', title: '운전석에서 안 보이는 내 몸',
        method: '운전석에서 보이지 않는 키', tool: 'body', minutes: 5,
        levels: { easy: '차 뒤에 선 아이의 낮은 곳(무릎·발목)이 골라지는 것을 함께 본다.', base: '차 뒤에서 가려지는 곳 네 곳(허리·허벅지·무릎·발목)이 골라지는 것을 본다.', challenge: '쪼그려 앉으면 가려지는 곳이 어떻게 달라질지 짝과 말한다.' },
        intro: {
          teacher: '"키가 작은 친구가 차 바로 뒤에 서 있으면, 운전석의 어른 눈에는 어디까지 보일까요?" 시연 단추로 종이 몸의 무릎·발목, 이어서 허리·허벅지까지 골라지는 것을 보이며 "차 뒤 트렁크보다 낮은 곳은 거울로도 잘 안 보여요"라고 말한다. "나는 차가 보이니까 운전자도 나를 봐요"라는 말이 나오면 "내가 높은 차를 올려다보는 것과 운전자가 낮은 나를 내려다보는 것이 같을까요?"라고 되묻는다. 쪼그려 앉아 놀면 몸 전체가 가려진다는 것을 짚는다.',
          student: '차 바로 뒤에 섰을 때 운전석에서 가려지는 내 몸의 부분을 손으로 짚어 보아요.',
          demo: { tool: 'body', options: { mode: 'parts', parts: ['눈', '목', '가슴', '배', '허리', '허벅지', '무릎', '발목'], names: true }, sequence: [{ parts: ['무릎', '발목'] }, { parts: ['허리', '허벅지', '무릎', '발목'] }] },
          art: { draw: 'a paper car seen from the side with a paper child standing right behind it, a dotted paper line from the driver mirror passing over the child head, the lower body hidden behind the trunk', banner: '차 뒤는 안 보여요', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '가려지는 높이는 차마다 다르다. 종이 몸 칸에 머리가 없어 "머리까지 가려질 수도 있어요"는 말로 덧붙인다.',
      }),
      C({
        id: 'saf-traffic.e34.driveway.activity.pins', type: 'activity', title: '출입구 멈춤 핀 꽂기',
        method: '출입구 위험 지점 찾기', tool: 'map', minutes: 15,
        levels: { easy: '핀을 놓으면 그 칸의 이름이 바로 보인다(멈춤 자리 4곳을 하나씩).', base: '지도의 이름을 보고 멈춤 자리 4곳에 하나씩 핀을 꽂는다.', challenge: '핀마다 그곳에서 할 일을 보기에서 고르고, 집 앞 출입구를 지나는 차례를 말한다.' },
        activity: {
          title: '출입구 멈춤 핀 꽂기', tool: 'map',
          teacher: '"보도를 걷다가 차가 가로질러 나오는 곳은 어디일까요?" 핀을 꽂기 전에 보도를 손가락으로 따라가며 차가 드나드는 곳마다 "멈춤!" 하고 말하게 한다. "보도는 사람 길이라 차가 안 와요"라는 학생에게 "주차장 입구는 차가 보도를 가로질러 지나가요. 그곳은 누구의 길일까요?"라고 묻는다.',
          task: '동네 지도에서 차가 드나드는 곳을 찾아 멈춤 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            PIN(TOWN, '아파트 차가 드나드는 곳에 멈춤 핀을 꽂아요.', '아파트 출입구', { q: '이곳에서 할 일은?', choices: ['빨리 뛰어 지나요', '멈춰서 소리를 들어요', '친구를 불러요'], answer: 1 }, 0.15),
            PIN(TOWN, '차가 보도를 지나 주차장으로 가는 곳에 꽂아요.', '주차장 입구', { q: '이곳에서 할 일은?', choices: ['차 앞을 막아요', '차 뒤로 지나가요', '차가 다 지나가면 걸어요'], answer: 2 }, 0.2),
            PIN(TOWN, '차가 뒤로 빠져나오는 가게 앞에 꽂아요.', '가게 앞 주차 칸', { q: '이곳이 위험한 까닭은?', choices: ['뒤로 나오는 차가 나를 못 봐요', '가게가 시끄러워요', '보도가 넓어요'], answer: 0 }, 0.2),
            PIN(TOWN, '건물 아래로 차가 드나드는 곳에 꽂아요.', '건물 주차장 문', { q: '이곳에서 할 일은?', choices: ['문 앞에서 놀아요', '차 불빛을 봐요', '눈을 감아요'], answer: 1 }, 0.25, { conclude: '보도라도 출입구에서는 차가 가로질러요. 출입구마다 멈춰서 소리 듣고 불빛을 봐요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '보도를 걷다 주차장 입구를 만나면?', options: ['그대로 걸어요', '멈춰서 차를 살펴요', '뛰어서 지나요'], answer: '멈춰서 차를 살펴요' }] },
      }),
      C({
        id: 'saf-traffic.e34.driveway.activity.judge', type: 'activity', title: '이럴 땐 어떻게 할까',
        method: '이럴 땐 어떻게', tool: 'emotion', minutes: 14,
        levels: { easy: '보기 2개 가운데 고르고 결과를 본다.', base: '보기 3개 가운데 고르고 결과를 본다.', challenge: '보기 3개 가운데 고르면 결과는 맞힌 뒤에만 보이고, 고른 까닭을 짝에게 말한다.' },
        activity: {
          title: '이럴 땐 어떻게 할까', tool: 'emotion',
          teacher: '"천천히 오는 차 뒤로는 지나가도 될까요?" 장면마다 고른 뒤 결과를 소리 내어 읽고, 고른 까닭을 "왜냐하면"으로 말하게 한다. "천천히 오니까 괜찮아요"라는 학생에게 "운전자가 나를 못 보면, 천천히 와도 나에게 닿지 않을까요?"라고 묻는다. 뒤로 가는 차는 완전히 지나갈 때까지 기다린다는 것을 짚는다.',
          task: '장면을 읽고 어떻게 할지 골라요. 결과를 보고 까닭을 말해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            BR('천천히 후진하는 차 뒤로 지나가재요.', '친구가 천천히 뒤로 가는 차 뒤로 지나가재요.', [{ id: 'wait', text: '차가 다 갈 때까지 기다려요', result: '차가 다 빠진 뒤 안전하게 지났어요.', mood: '편안함' }, { id: 'go', text: '천천히니까 지나가요', result: '운전자가 나를 못 봐 부딪힐 뻔했어요.', mood: '무서움' }, { id: 'run', text: '뛰어서 빨리 지나가요', result: '뛰다 차 바로 뒤에서 넘어질 뻔했어요.', mood: '무서움' }], 'wait', 0.15),
            BR('주차된 차 사이에서 공이 굴러갔어요.', '주차된 차 사이로 공이 굴러갔어요.', [{ id: 'adult', text: '어른께 꺼내 달라고 해요', result: '어른이 차를 살피고 공을 꺼내 주셨어요.', mood: '고마움' }, { id: 'crawl', text: '차 밑으로 기어들어가요', result: '차가 움직이면 나를 볼 수 없어요.', mood: '무서움' }, { id: 'kick', text: '차 사이로 뛰어들어요', result: '나오던 차가 급히 섰어요.', mood: '놀람' }], 'adult', 0.2),
            BR('주차장 입구 앞, 소리는 안 들려요.', '주차장 입구 앞인데 차 소리가 안 들려요.', [{ id: 'look', text: '멈춰서 불빛도 봐요', result: '조용한 차가 불을 켜고 나오는 것을 봤어요.', mood: '편안함' }, { id: 'pass', text: '소리 없으니 지나가요', result: '조용한 차가 바로 앞까지 나왔어요.', mood: '놀람' }, { id: 'play', text: '입구 앞에서 놀아요', result: '나오던 차가 경적을 울렸어요.', mood: '무서움' }], 'look', 0.25, { conclude: '뒤로 가는 차는 다 지나갈 때까지 기다리고, 소리가 없어도 불빛과 바퀴를 살펴요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '천천히 후진하는 차가 있을 때는?', options: ['차 뒤로 지나가요', '다 갈 때까지 기다려요', '차를 두드려요'], answer: '다 갈 때까지 기다려요' }] },
      }),
      C({
        id: 'saf-traffic.e34.driveway.activity.order', type: 'activity', title: '출입구 지나는 차례',
        method: '출입구 지나는 차례', tool: 'timeline', minutes: 15,
        levels: { easy: '카드 3장, 놓으면 바로 맞는지 알려 준다.', base: '카드 4장을 먼저 할 것부터 놓은 뒤 확인한다.', challenge: '함정 카드 1장(손 흔들며 뛰어요 등)이 섞인 5장에서 그것을 빼고 놓는다.' },
        activity: {
          title: '출입구 지나는 차례', tool: 'timeline',
          teacher: '"출입구 앞에서 맨 먼저 할 일은 무엇일까요?" 카드를 다 놓으면 교실 문을 출입구로 삼아 모둠이 차례대로 따라 해 본다(멈춤 → 귀 기울이기 → 불빛 보기 → 걷기). "손을 흔들면 운전자가 볼 거예요"라는 학생에게 "운전자가 나를 볼 수 없는 자리라면 손을 흔들어도 알 수 있을까요?"라고 묻는다.',
          task: '출입구 앞에서 할 일 카드를 먼저 할 것부터 시간 띠에 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORD('주차장 입구를 지나는 차례로 놓아요.', TL, [{ id: 'stop', text: '입구 앞에서 멈춰요' }, { id: 'hear', text: '차 소리를 들어요' }, { id: 'light', text: '차 불빛을 봐요' }, { id: 'walk', text: '차가 없으면 걸어요' }], [0, 2, 3], { id: 'wave', text: '손 흔들며 뛰어요', why: '뛰면 차가 나를 보기도 전에 앞에 닿아요.' }, 0.15),
            ORD('뒤로 가는 차를 만났을 때 차례로 놓아요.', TL, [{ id: 'see', text: '흰 불을 알아채요' }, { id: 'step', text: '차 뒤에서 물러나요' }, { id: 'wait', text: '차가 다 나올 때까지' }, { id: 'go', text: '살피고 지나가요' }], [0, 1, 3], { id: 'behind', text: '차 뒤로 빨리 지나요', why: '뒤로 가는 차의 운전자는 차 뒤의 나를 잘 못 봐요.' }, 0.2),
            ORD('아파트 출입구를 자전거 끌고 지나는 차례로 놓아요.', TL, [{ id: 'off', text: '자전거에서 내려요' }, { id: 'stop', text: '출입구 앞에 서요' }, { id: 'look', text: '좌우와 안쪽을 봐요' }, { id: 'push', text: '끌고 지나가요' }], [1, 2, 3], { id: 'ride', text: '탄 채로 빨리 지나요', why: '탄 채 지나면 나오는 차를 피하기 어려워요.' }, 0.25, { conclude: '출입구에서는 멈추고, 듣고, 보고, 차가 없을 때 지나가요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '출입구에서 할 일을 차례대로 번호를 써요.', columns: ['할 일', '차례'], cells: [['차 불빛을 봐요', ''], ['입구 앞에서 멈춰요', ''], ['차가 없으면 걸어요', '']], answer: '2, 1, 3' }] },
      }),
      C({
        id: 'saf-traffic.e34.driveway.activity.two-eyes', type: 'activity', title: '운전자 눈과 내 눈',
        method: '운전자 눈·내 눈', tool: 'story', minutes: 14,
        levels: { easy: '말풍선 빈칸 1개를 채운다.', base: '말풍선 빈칸 2개를 채운다.', challenge: '말풍선 빈칸 3개를 채운다(둘 다 서로 보려면 어떻게 할지 포함).' },
        activity: {
          title: '운전자 눈과 내 눈', tool: 'story',
          teacher: '"나는 차를 봤어요. 그럼 운전자도 나를 봤을까요?" 말풍선을 채운 뒤 짝과 운전자·아이 자리를 바꿔 앉아 보며(의자에 앉은 사람이 책상 뒤 쪼그린 친구를 볼 수 있는지) 직접 확인한다. "내가 보이면 운전자도 나를 봐요"라는 학생에게 "의자에 앉아 보니 책상 뒤 친구가 보였나요?"라고 묻는다.',
          task: '운전자와 아이의 말풍선 빈칸에 알맞은 카드를 넣어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            FILL('출입구 장면에서 아이의 말풍선을 채워요.', ['나', '운전자', '나'], [['나는 차를 봤지만 ___는 나를 못 봤어요.', '운전자'], ['어? 차 뒤에 ___?', '누가 있나'], ['운전자가 볼 수 있게 ___ 서요.', '차 옆 보도에']], ['친구', '그냥 지나'], 0.15),
            FILL('후진하는 차 장면의 말풍선을 채워요.', ['나', '나', '친구'], [['흰 불이 켜졌으니 ___.', '뒤로 와요'], ['차 뒤에서 ___.', '물러날게요'], ['차가 ___ 같이 가자.', '다 나오면']], ['앞으로 가요', '숨을게요'], 0.2),
            FILL('서로 볼 수 있게 하는 말을 채워요.', ['나', '운전자', '나'], [['운전자 눈에 ___ 기다려요.', '보이는 곳에서'], ['아이가 ___. 먼저 가렴.', '보이는구나'], ['차가 멈춘 걸 ___ 지나가요.', '보고']], ['차 뒤에서', '안 보고'], 0.25, { conclude: '내가 차를 봐도 운전자는 나를 못 볼 수 있어요. 보이는 곳에서 기다리고 차가 멈춘 것을 본 뒤 지나가요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '내가 차를 봐도 운전자는 나를 ___ 수 있어요.', answer: '못 볼' }] },
      }),
      C({
        id: 'saf-traffic.e34.driveway.wrap.graph', type: 'wrap', title: '우리 반 집 앞 출입구 표',
        method: '우리 반 출입구 조사 표', tool: 'chart', minutes: 6,
        levels: { easy: '항목 2개, 첫 항목 그림은 미리 놓여 있다.', base: '항목 2개의 그림을 모두 놓고, 출구 2번에서 합계를 고른다.', challenge: '그래프를 완성한 뒤 출입구가 있는 친구들이 지킬 일을 말한다.' },
        wrap: {
          teacher: '"우리 반(가상) 친구 가운데 집 앞에 출입구가 있는 친구는 몇 명일까요?" 그림그래프를 완성한 뒤 두 줄의 그림을 더해 모두 몇 명인지 함께 센다. 큰 그림을 1명으로 세는 학생에게 "큰 그림 하나는 몇 명이었나요?"라고 되묻는다. 출입구가 있는 친구는 날마다 지나는 그곳에서 오늘 배운 차례를 지킨다고 말한다.',
          exitTicket: [
            { type: 'tool', tool: 'chart', options: { type: 'picture', mode: 'build', title: '집 앞 출입구(가상의 우리 반)', unit: '명', xLabel: '집 앞', yLabel: '친구 수', icons: PEOPLE, icon: 'person', data: HOME }, prompt: '표를 보고 집 앞 출입구 그림그래프를 완성해요.', target: { build: true }, difficulty: 0.2,
              levels: { easy: { toolOptions: { given: [0] } } } },
            { type: 'choice', prompt: '그래프의 두 줄을 더하면 모두 몇 명인가요?', options: ['14명', '24명', '10명'], answer: 1, difficulty: 0.15, explain: '출입구 있음 14명과 없음 10명을 더하면 24명이에요.' },
            { type: 'short', prompt: '집 앞 출입구를 지날 때 지킬 일을 한 줄로 써요.' },
          ],
        },
        worksheet: {
          title: '집 앞 출입구 조사(가상)',
          items: [
            { type: 'table', prompt: '표의 빈칸을 채워요.', columns: ['집 앞', '친구 수(명)'], cells: [['출입구 있음', '14'], ['출입구 없음', ''], ['합계', '']], answer: '10, 24' },
            { type: 'short', prompt: '우리 집 둘레에서 차가 드나드는 곳을 하나 써요.' },
          ],
        },
        notes: '그래프 자료는 가상이다. 우리 반 조사는 손들기로만 하고 집 주소는 묻지 않는다.',
      }),
      C({
        id: 'saf-traffic.e34.driveway.wrap.tree', type: 'wrap', title: '뒤로 가는 차 약속 그물',
        method: '뒤로 가는 차 약속', tool: 'mindmap', minutes: 6,
        levels: { easy: '가지 2개에 카드 4장을 넣는다.', base: '가지 2개에 카드 6장을 넣는다.', challenge: '함정 카드 1장이 섞인 7장에서 그것을 빼고 넣는다.' },
        wrap: {
          teacher: '"뒤로 가는 차를 알아채는 방법과 기다리는 방법을 모아 볼까요?" 카드를 다 넣으면 두 가지를 번갈아 한 목소리로 읽는다. 함정 카드 \'천천히면 뒤로 지나기\'를 넣으려는 학생에게 "운전자가 나를 볼 수 있었나요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '뒤로 가는 차', slots: ['알아채기', '기다리기'], cards: ['흰 불 보기', '보도로 물러나기', '삐삐 소리 듣기', '다 나올 때까지', '바퀴 보기', '보이는 곳에 서기'] }, prompt: '뒤로 가는 차 약속 카드를 가지에 넣어요.', target: { sort: { 알아채기: ['흰 불 보기', '삐삐 소리 듣기', '바퀴 보기'], 기다리기: ['보도로 물러나기', '다 나올 때까지', '보이는 곳에 서기'] } }, difficulty: 0.15,
              levels: {
                easy: { prompt: '약속 카드 4장을 가지에 넣어요.', toolOptions: { cards: ['흰 불 보기', '보도로 물러나기', '삐삐 소리 듣기', '다 나올 때까지'] }, target: { sort: { 알아채기: ['흰 불 보기', '삐삐 소리 듣기'], 기다리기: ['보도로 물러나기', '다 나올 때까지'] } } },
                challenge: { prompt: '약속 카드를 넣고 틀린 카드는 빼요.', toolOptions: { cards: ['흰 불 보기', '보도로 물러나기', '천천히면 뒤로 지나기', '삐삐 소리 듣기', '다 나올 때까지', '바퀴 보기', '보이는 곳에 서기'] }, target: { sort: { 알아채기: ['흰 불 보기', '삐삐 소리 듣기', '바퀴 보기'], 기다리기: ['보도로 물러나기', '다 나올 때까지', '보이는 곳에 서기'] } } },
              } },
            { type: 'choice', prompt: '경고음이 안 들리는 주차장 입구에서는?', options: ['차가 없으니 뛰어요', '멈춰서 불빛도 봐요', '입구에서 놀아요'], answer: 1, difficulty: 0.1, explain: '소리 없이 움직이는 차도 있어 불빛과 바퀴를 함께 봐요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '뒤로 가는 차 약속',
          items: [
            { type: 'check', prompt: '내가 지킬 약속에 표시해요.', options: ['흰 불을 보면 물러나요', '차가 다 나올 때까지 기다려요', '차 사이에서 놀지 않아요'] },
            { type: 'draw', prompt: '출입구 앞에서 멈춰 기다리는 내 모습을 그려요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 3학년 · 자전거 타기 전 점검과 보호 장구 (별표 2 초등 교통안전 "교통수단(자전거, 대중교통 등)의 안전한 이용법 알기")
  // ======================================================================================================
  {
    const C = T('bikecheck', 3);
    const TL = { axis: ['먼저', '나중'] };
    const GEAR = [
      { id: 'helmet', text: '안전모', price: 15000 }, { id: 'knee', text: '무릎 보호대', price: 6000 }, { id: 'elbow', text: '팔꿈치 보호대', price: 5000 },
      { id: 'light', text: '전조등', price: 7000 }, { id: 'reflect', text: '반사판', price: 2000 }, { id: 'sticker', text: '장식 스티커', price: 4000 },
    ];
    const G = (...ids) => ids.map((id) => GEAR.find((x) => x.id === id));
    M.push(
      C({
        id: 'saf-traffic.e34.bikecheck.intro.parts', type: 'intro', title: '넘어질 때 지켜야 할 몸',
        method: '보호해야 할 몸', tool: 'body', minutes: 5,
        levels: { easy: '팔꿈치 한 곳이 골라지는 것을 보고, 각자 자기 머리를 손으로 짚는다.', base: '팔꿈치·손목·무릎 세 곳이 골라지는 것을 보고 머리와 함께 보호 장구를 짝 짓는다.', challenge: '왜 머리를 가장 먼저 지켜야 하는지 까닭을 짝에게 말한다.' },
        intro: {
          teacher: '"자전거를 타다 넘어지면 몸의 어디가 먼저 땅에 닿을까요?" 시연 단추로 종이 몸의 팔꿈치·손목·무릎이 골라지는 것을 보이고, 각자 자기 머리를 두 손으로 감싸게 한다(종이 몸에는 머리 칸이 없다). 곳마다 지켜 주는 보호 장구를 묻는다(기다릴 반응: "안전모요", "무릎 보호대요"). "가까운 데만 가니까 안전모는 안 써도 돼요"라는 말이 나오면 "가까운 길에서 넘어지면 머리는 덜 다칠까요?"라고 되묻는다.',
          student: '넘어질 때 다치기 쉬운 곳을 찾고, 그곳을 지켜 줄 보호 장구를 짝과 짝 지어 말해 보아요.',
          demo: { tool: 'body', options: { mode: 'parts', parts: ['눈', '목', '어깨', '팔꿈치', '손목', '허리', '무릎', '발목'], names: true }, sequence: [{ parts: ['팔꿈치'] }, { parts: ['팔꿈치', '손목', '무릎'] }] },
          art: { draw: 'a paper child on a small paper bicycle wearing a paper helmet, elbow pads and knee pads, soft paper stars marking the protected spots', banner: '어디를 지킬까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '종이 몸에 머리 칸이 없다. 머리는 학생이 자기 손으로 짚게 하고 안전모와 짝 짓는다.',
      }),
      C({
        id: 'saf-traffic.e34.bikecheck.intro.odd', type: 'intro', title: '무엇이 빠졌을까',
        method: '무엇이 빠졌을까', tool: 'emotion', minutes: 5,
        levels: { easy: '그림 카드 가운데 안전모가 없는 장면 하나가 담기는 것을 함께 본다.', base: '고쳐 줄 장면 2장(안전모 없음·끈 안 맴)이 담기는 것을 보고 무엇이 빠졌는지 말한다.', challenge: '고쳐 줄 장면마다 바르게 고쳐 줄 말을 짝에게 말한다.' },
        intro: {
          teacher: '"이 그림들 가운데 고쳐 주고 싶은 친구는 누구일까요?" 시연 단추로 \'안전모 없이 탐\'과 \'끈 안 맨 안전모\'가 바구니에 담기는 것을 보인다. "안전모는 머리에 얹기만 하면 돼요"라는 말이 나오면 "끈을 안 매면 넘어질 때 안전모가 어디로 갈까요?"라고 되묻는다.',
          student: '자전거 타는 친구 그림에서 무엇이 빠졌는지 찾아 고르고, 고쳐 줄 말을 해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'pick', basket: '고쳐 줄래요', cards: [{ id: 'none', text: '안전모 없이 탐' }, { id: 'good', text: '안전모 끈 딸깍' }, { id: 'loose', text: '끈 안 맨 안전모' }, { id: 'pads', text: '보호대 차고 탐' }], shuffle: false }, sequence: [{ pick: ['none'] }, { pick: ['none', 'loose'] }] },
          art: { draw: 'three paper cut panels of children on bicycles: one without a helmet, one with the helmet strap hanging loose, one wearing the helmet with the strap fastened', banner: '무엇이 빠졌을까?', extra: [{ motif: 'leaf', x: 300, y: 96 }] },
        },
      }),
      C({
        id: 'saf-traffic.e34.bikecheck.activity.check', type: 'activity', title: '자전거 점검표 따라 하기',
        method: '자전거 점검표 따라 하기', tool: 'timer', minutes: 15,
        levels: { easy: '점검 칸 2개를 확인하며 표시한다.', base: '점검 칸 4개를 확인하며 표시한다.', challenge: '점검 칸 4개를 표시한 뒤 짝의 자전거 그림에서 문제 하나를 찾아 알려 준다.' },
        activity: {
          title: '자전거 점검표 따라 하기', tool: 'timer',
          teacher: '"자전거를 타기 전에 무엇을 살펴볼까요?" 점검 칸을 하나씩 읽고, 손으로 브레이크 잡기·바퀴 누르기 흉내를 내며 표시하게 한다(학교에 자전거가 있으면 실물로 한다). "점검은 고장 났을 때만 해요"라는 학생에게 "브레이크가 약한 것을 타고 가다 알게 되면 어떻게 될까요?"라고 묻는다. 문제가 보이면 타지 않고 어른께 알린다는 것을 짚는다.',
          task: '그림 순서대로 점검 칸을 하나씩 확인하며 표시해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '자전거를 타기 전 점검 칸에 모두 표시해요.', toolOptions: { title: '자전거 점검', safety: ['브레이크 잡아 보기', '바퀴 눌러 보기', '체인 보기', '안장 높이 보기'] }, target: { safety: true }, difficulty: 0.15,
              levels: { easy: { prompt: '자전거 점검 칸 2개에 표시해요.', toolOptions: { safety: ['브레이크 잡아 보기', '바퀴 눌러 보기'] }, target: { safety: true } } } },
            { prompt: '내 몸에 착용한 보호 장구 칸에 모두 표시해요.', toolOptions: { title: '보호 장구 점검', safety: ['안전모 끈 채움', '팔꿈치 보호대', '무릎 보호대', '신발 끈 묶음'] }, target: { safety: true }, difficulty: 0.2,
              levels: { easy: { prompt: '보호 장구 칸 2개에 표시해요.', toolOptions: { safety: ['안전모 끈 채움', '신발 끈 묶음'] }, target: { safety: true } } } },
            { prompt: '자전거를 탈 곳의 안전 칸에 모두 표시해요.', toolOptions: { title: '탈 곳 점검', safety: ['차가 없는 곳', '어른과 함께', '바닥이 평평함', '밝은 낮'] }, target: { safety: true }, difficulty: 0.25,
              levels: { easy: { prompt: '탈 곳 점검 칸 2개에 표시해요.', toolOptions: { safety: ['차가 없는 곳', '어른과 함께'] }, target: { safety: true } } },
              conclude: '타기 전에 자전거·내 몸·탈 곳을 살펴요. 문제가 보이면 타지 않고 어른께 알려요.' },
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '자전거를 타기 전에 살필 것에 표시해요.', options: ['브레이크', '바퀴 바람', '체인', '안장 높이'] }] },
        notes: '학교에 자전거가 있으면 실물로 함께 점검한다. 바퀴 바람·체인 상태를 고치는 일은 어른이 한다.',
      }),
      C({
        id: 'saf-traffic.e34.bikecheck.activity.helmet', type: 'activity', title: '안전모 쓰는 차례',
        method: '안전모 쓰는 차례', tool: 'timeline', minutes: 14,
        levels: { easy: '카드 3장, 놓으면 바로 맞는지 알려 준다.', base: '카드 4장을 차례대로 놓은 뒤 확인한다.', challenge: '틀린 카드 1장이 섞인 5장에서 그것을 빼고 놓고, 틀린 착용이 어느 차례를 빠뜨렸는지 말한다.' },
        activity: {
          title: '안전모 쓰는 차례', tool: 'timeline',
          teacher: '"안전모를 쓸 때 맨 먼저 할 일은 무엇일까요?" 카드를 다 놓으면 안전모(없으면 모자)를 쓰는 시늉으로 차례를 따라 한다. "머리에 얹기만 하면 돼요"라는 학생에게 "고개를 흔들어도 안전모가 움직이지 않으려면 무엇을 해야 할까요?"라고 묻는다. 끈을 채운 뒤 턱 밑에 손가락이 하나 들어가는지 서로 봐 주게 한다.',
          task: '카드를 하는 차례대로 시간 띠에 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORD('안전모를 쓰는 차례로 놓아요.', TL, [{ id: 'size', text: '크기를 맞춰요' }, { id: 'brow', text: '눈썹 위로 써요' }, { id: 'strap', text: '끈을 채워요' }, { id: 'finger', text: '손가락 하나 들어가게' }], [0, 2, 3], { id: 'back', text: '뒤로 젖혀 써요', why: '뒤로 젖혀 쓰면 이마가 드러나 지켜 주지 못해요.' }, 0.15),
            ORD('자전거를 타기 전 할 일을 차례로 놓아요.', TL, [{ id: 'check', text: '자전거를 점검해요' }, { id: 'gear', text: '보호 장구를 차요' }, { id: 'helmet', text: '안전모 끈 딸깍' }, { id: 'start', text: '천천히 출발해요' }], [0, 2, 3], { id: 'hurry', text: '바로 달려 나가요', why: '점검과 착용을 건너뛰면 다칠 수 있어요.' }, 0.2),
            ORD('자전거를 다 탄 뒤 할 일을 차례로 놓아요.', TL, [{ id: 'slow', text: '천천히 멈춰요' }, { id: 'off', text: '내려서 세워요' }, { id: 'lock', text: '잠금장치를 채워요' }, { id: 'hang', text: '안전모를 걸어 둬요' }], [0, 1, 3], { id: 'jump', text: '달리며 뛰어내려요', why: '달리며 내리면 넘어지거나 자전거에 부딪혀요.' }, 0.25, { conclude: '안전모는 크기 맞추기 → 눈썹 위로 → 끈 채우기 → 손가락 하나 확인 차례로 써요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '안전모 끈을 채운 뒤 턱 밑에 손가락이 ___ 들어가는지 봐요.', answer: '하나' }] },
      }),
      C({
        id: 'saf-traffic.e34.bikecheck.activity.gear', type: 'activity', title: '안전 장구 장바구니',
        method: '안전 장구 장바구니', tool: 'economy', minutes: 15,
        levels: { easy: '물건 4개, 예산이 넉넉하다(안전모는 꼭).', base: '물건 6개 가운데 예산 안에서 고른다(꼭 담을 것이 있다).', challenge: '예산이 빠듯해 장식 스티커를 빼야 하고, 뺀 까닭을 짝에게 말한다.' },
        activity: {
          title: '안전 장구 장바구니', tool: 'economy',
          teacher: '"예산 안에서 무엇을 먼저 담아야 할까요?" 물건 값은 이 수업에서 정한 가상의 값이라고 밝힌다. 장식 스티커를 먼저 담는 학생에게 "스티커는 넘어질 때 무엇을 지켜 줄까요? 꼭 필요한 것부터 담아 볼까요?"라고 묻는다. 담은 뒤 "나는 ○○을 먼저 담았어요. 왜냐하면 ○○이기 때문이에요."로 짝에게 말하게 한다.',
          task: '예산 안에서 자전거 안전 장구를 골라 장바구니에 담아요. 꼭 필요한 것을 먼저 담아요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '3만 원 안에서 안전모를 꼭 넣어 골라요.', toolOptions: { mode: 'budget', budget: 30000, items: GEAR, ask: '자전거 안전 장구' }, target: { budget: { must: ['helmet'] } }, difficulty: 0.15,
              levels: { easy: { prompt: '4만 원 안에서 안전모를 꼭 넣어 골라요.', toolOptions: { budget: 40000, items: G('helmet', 'knee', 'reflect', 'sticker') }, target: { budget: { must: ['helmet'] } } } } },
            { prompt: '밤에 탈 일이 있어요. 3만 원 안에서 전조등과 반사판을 꼭 넣어요.', toolOptions: { mode: 'budget', budget: 30000, items: GEAR, ask: '밤길 자전거 준비' }, target: { budget: { must: ['light', 'reflect'] } }, difficulty: 0.2,
              levels: { easy: { prompt: '4만 원 안에서 전조등과 반사판을 꼭 넣어요.', toolOptions: { budget: 40000, items: G('helmet', 'light', 'reflect', 'sticker') }, target: { budget: { must: ['light', 'reflect'] } } } } },
            { prompt: '2만 6천 원 안에서 안전모와 무릎 보호대를 꼭 넣고 스티커는 빼요.', toolOptions: { mode: 'budget', budget: 26000, items: GEAR, ask: '빠듯한 예산' }, target: { budget: { must: ['helmet', 'knee'], not: ['sticker'] } }, difficulty: 0.3,
              levels: { easy: { prompt: '3만 원 안에서 안전모와 무릎 보호대를 꼭 넣어요.', toolOptions: { budget: 30000, items: G('helmet', 'knee', 'elbow', 'sticker') }, target: { budget: { must: ['helmet', 'knee'] } } } },
              conclude: '예산이 모자라면 꾸미는 것보다 몸을 지키는 안전 장구를 먼저 담아요.' },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '예산이 모자랄 때 먼저 뺄 것은?', options: ['안전모', '장식 스티커', '무릎 보호대'], answer: '장식 스티커' }] },
        notes: '물건 값은 수업용 가상의 값이다. 실제 제품 이름·가게 이름은 쓰지 않는다.',
      }),
      C({
        id: 'saf-traffic.e34.bikecheck.activity.fix', type: 'activity', title: '고장 난 곳과 할 일 잇기',
        method: '고장 난 곳과 할 일 잇기', tool: 'mindmap', minutes: 14,
        levels: { easy: '줄 2개에 할 일 카드를 잇는다.', base: '줄 3개에 할 일 카드를 잇는다.', challenge: '남는 함정 카드 1장이 섞인 판에서 잇고, 어른께 맡길 일과 내가 할 일을 나눠 말한다.' },
        activity: {
          title: '고장 난 곳과 할 일 잇기', tool: 'mindmap',
          teacher: '"브레이크가 약하면 어떻게 할까요? 내가 고칠까요, 어른께 맡길까요?" 카드를 이을 때마다 그렇게 하는 까닭을 말하게 한다. "조금 이상해도 그냥 타요"라는 학생에게 "내리막에서 브레이크가 안 들으면 어떻게 될까요?"라고 묻는다. 고치는 일은 어른이 하고, 나는 알아채고 타지 않고 알리는 일을 한다는 것을 짚는다.',
          task: '고장 난 곳 가지에 알맞은 할 일 카드를 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            MATCH('고장 난 곳에 알맞은 할 일을 이어요.', { topic: '타기 전 점검' }, [['브레이크가 약해요', '타지 않고 알려요'], ['바퀴 바람이 없어요', '바람을 넣어요'], ['체인이 빠졌어요', '어른께 맡겨요']], '그냥 타요', 0.15),
            MATCH('점검에서 본 것에 알맞은 할 일을 이어요.', { topic: '이럴 땐' }, [['안장이 너무 높아요', '높이를 맞춰요'], ['전조등이 안 켜져요', '밤엔 타지 않아요'], ['핸들이 흔들려요', '어른께 맡겨요']], '세게 흔들어요', 0.2),
            MATCH('안전모를 보고 알맞은 할 일을 이어요.', { topic: '안전모 점검' }, [['끈이 늘어났어요', '끈을 줄여요'], ['금이 갔어요', '새것으로 바꿔요'], ['너무 커요', '크기를 맞춰요']], '테이프로 붙여요', 0.25, { conclude: '점검에서 문제를 보면 타지 않고, 내가 할 수 있는 것은 하고, 고치는 일은 어른께 맡겨요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '할 일을 써요(어른께 맡길 일이면 "어른").', columns: ['고장 난 곳', '할 일'], cells: [['브레이크가 약해요', ''], ['바퀴 바람이 없어요', '']], answer: '어른(타지 않고 알려요), 바람을 넣어요' }] },
        notes: '"금이 간 안전모는 바꿔요"는 일반 수칙이다. 실물 안전모가 있으면 금·끈을 함께 살핀다.',
      }),
      C({
        id: 'saf-traffic.e34.bikecheck.wrap.tale', type: 'wrap', title: '점검하는 하루 이야기',
        method: '점검하는 하루 이야기', tool: 'story', minutes: 6,
        levels: { easy: '장면 카드 3장을 차례로 놓는다.', base: '장면 카드 4장을 차례로 놓는다.', challenge: '틀린 장면 1장이 섞인 5장에서 그것을 빼고, 점검을 건너뛴 이야기의 결말을 바꿔 말한다.' },
        wrap: {
          teacher: '"민이가 자전거를 타러 나가요. 이야기를 차례로 놓아 볼까요?" 장면을 다 놓으면 한 장씩 소리 내어 읽는다. 출구 2번에서 \'가까우니 안 써요\'를 고른 학생에게 "가까운 길에서도 넘어질 수 있을까요?"라고 되묻는다. 점검을 건너뛴 이야기라면 결말이 어떻게 달라질지 짝과 한 문장으로 바꿔 말한다.',
          exitTicket: [
            EX('story', ORD('민이가 자전거를 타러 가는 장면을 차례로 놓아요.', {}, [{ id: 'check', text: '브레이크 점검' }, { id: 'helmet', text: '안전모 쓰기' }, { id: 'strap', text: '끈 딸깍 채우기' }, { id: 'go', text: '천천히 출발' }], [0, 1, 3], { id: 'skip', text: '점검 없이 출발', why: '점검을 건너뛰면 고장을 모른 채 타게 돼요.' }, 0.15)),
            { type: 'choice', prompt: '집 앞에서만 자전거를 탈 때 안전모는?', options: ['가까우니 안 써요', '가까워도 꼭 써요', '손에 들고 타요'], answer: 1, difficulty: 0.1, explain: '가까운 곳에서도 넘어질 수 있어 안전모를 꼭 써요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '타기 전 점검과 안전모',
          items: [
            { type: 'table', prompt: '이야기 차례대로 번호를 써요.', columns: ['장면', '차례'], cells: [['안전모 쓰기', ''], ['브레이크 점검', ''], ['천천히 출발', '']], answer: '2, 1, 3' },
            { type: 'draw', prompt: '안전모와 보호대를 바르게 한 내 모습을 그려요.' },
          ],
        },
      }),
      C({
        id: 'saf-traffic.e34.bikecheck.wrap.self', type: 'wrap', title: '나의 자전거 습관 나누기',
        method: '나의 자전거 습관 나누기', tool: 'emotion', minutes: 6,
        levels: { easy: '습관 하나를 3칸 척도(어려워요~잘 지켜요)로 고른다.', base: '습관 두 개를 5칸 척도로 고른다.', challenge: '5칸 척도로 고른 뒤 더 노력할 습관 하나와 가족과 점검할 날을 말한다.' },
        wrap: {
          teacher: '"나는 이 습관을 얼마나 잘 지키고 있나요? 솔직하게 골라요." 척도를 고른 뒤 낮게 고른 학생에게 "가족과 언제 같이 점검해 볼 수 있을까요? 주말에 할까요?"라고 묻는다. 점수를 견주지 않는다. 자전거가 없는 학생은 친구·가족이 탈 때 알려 줄 말로 고르게 한다.',
          exitTicket: [
            SCALE('안전모 끈 채우기를 얼마나 잘 지키나요?', '자전거를 탈 때 안전모 끈을 딸깍 채워요', '뿌듯함'),
            SCALE('타기 전 점검을 얼마나 잘 하나요?', '타기 전에 브레이크와 바퀴를 살펴요', '편안함'),
            { type: 'short', prompt: '더 노력할 습관과 가족과 점검할 날을 써요.' },
          ],
        },
        worksheet: {
          title: '나의 자전거 습관',
          items: [
            { type: 'check', prompt: '이번 주에 지킬 습관에 표시해요.', options: ['안전모 쓰기', '끈 채우기', '브레이크 점검', '바퀴 점검'] },
            { type: 'short', prompt: '가족과 함께 점검할 날을 써요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 3학년 · 버스·지하철 안전하게 이용하기 (별표 2 초등 교통안전 "교통수단(자전거, 대중교통 등)의 안전한 이용법 알기")
  // ======================================================================================================
  {
    const C = T('transit', 3);
    const TL = { axis: ['먼저', '나중'] };
    const PLATFORM = {
      title: '지하철 승강장', grid: [6, 3],
      regions: [
        { name: '선로', cells: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0]] },
        { name: '안전선 앞', cells: [[0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1]] },
        { name: '엘리베이터', cells: [[0, 2]] }, { name: '기다리는 곳', cells: [[1, 2], [2, 2], [3, 2], [4, 2]] }, { name: '출구 계단', cells: [[5, 2]] },
      ],
    };
    const STOP = {
      title: '버스 정류장 앞', grid: [6, 4],
      regions: [
        { name: '가게', cells: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0]] },
        { name: '보도', cells: [[0, 1], [1, 1], [3, 1], [4, 1], [5, 1]] }, { name: '정류장', cells: [[2, 1]] },
        { name: '먼 횡단보도', cells: [[0, 2]] }, { name: '버스 뒤 찻길', cells: [[1, 2]] }, { name: '서 있는 버스', cells: [[2, 2], [3, 2]] }, { name: '버스 앞 찻길', cells: [[4, 2]] }, { name: '가까운 횡단보도', cells: [[5, 2]] },
        { name: '건너편 보도', cells: [[0, 3], [1, 3], [2, 3], [3, 3], [4, 3], [5, 3]] },
      ],
    };
    const RIDE = [['버스', 12], ['지하철', 7], ['마을버스', 5]];
    M.push(
      C({
        id: 'saf-traffic.e34.transit.intro.scene', type: 'intro', title: '정류장에서 바르게 기다리기',
        method: '정류장 장면 고르기', tool: 'emotion', minutes: 5,
        levels: { easy: '바르게 기다리는 장면 하나가 바구니에 담기는 것을 함께 본다.', base: '장면 4개 가운데 바른 장면 2개가 담기는 것을 보고 까닭을 말한다.', challenge: '고른 까닭을 "왜냐하면"으로 한 문장 말한다.' },
        intro: {
          teacher: '"버스를 기다리는 친구들이에요. 바르게 기다리는 친구는 누구일까요?" 시연 단추로 \'보도 안쪽에 서요\'와 \'줄 서서 기다려요\'가 담기는 것을 보인다. "버스가 오기 전에 차도에 내려가 있어야 빨리 타요"라는 말이 나오면 "버스가 들어올 때 차도에 서 있으면 버스는 어디로 올까요?"라고 되묻는다.',
          student: '정류장 그림에서 바르게 기다리는 친구를 고르고, 왜 그런지 짝에게 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'pick', basket: '바르게 기다려요', cards: [{ id: 'road', text: '차도에 내려가요' }, { id: 'inside', text: '보도 안쪽에 서요' }, { id: 'play', text: '정류장에서 장난' }, { id: 'line', text: '줄 서서 기다려요' }], shuffle: false }, sequence: [{ pick: ['inside'] }, { pick: ['inside', 'line'] }] },
          art: { draw: 'a paper bus stop with a shelter, children waiting in a line on the sidewalk away from the curb, one child stepping down onto the road', banner: '어디서 기다릴까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
      }),
      C({
        id: 'saf-traffic.e34.transit.intro.platform', type: 'intro', title: '승강장 지도 읽기',
        method: '승강장 지도 읽기', tool: 'map', minutes: 5,
        levels: { easy: '기다리는 곳 한 칸에 핀이 꽂히는 것을 함께 본다.', base: '기다리는 곳·엘리베이터·출구 계단에 차례로 핀이 꽂히는 것을 본다.', challenge: '지하철에서 내린 뒤 출구까지 가는 길을 칸으로 설명한다.' },
        intro: {
          teacher: '"지하철을 기다릴 때 어디에 서야 할까요?" 시연 단추로 기다리는 곳, 이어서 엘리베이터와 출구 계단에 핀이 꽂히는 것을 보인다. "안전선 앞에 바짝 서야 빨리 타요"라는 말이 나오면 "열차가 들어올 때 선로 쪽 가까이에 있으면 어떻게 될까요?"라고 되묻는다. 안전선(노란 선) 뒤에서 기다린다는 것을 짚는다.',
          student: '승강장 지도에서 기다릴 곳과 엘리베이터·출구를 찾아 짝에게 말해 보아요.',
          demo: { tool: 'map', options: PLATFORM, sequence: [{ pin: [2, 2] }, { pin: [0, 2] }, { pin: [5, 2] }] },
          art: { draw: 'a paper cut subway platform seen from above with a yellow paper safety line, children waiting behind it, an elevator and exit stairs at the ends', banner: '노란 선 뒤에서', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      C({
        id: 'saf-traffic.e34.transit.intro.clock', type: 'intro', title: '여유 있게 정류장 가기',
        method: '여유 있게 정류장 가기', tool: 'clock', minutes: 5,
        levels: { easy: '버스 오는 8시 10분을 시계로 함께 읽는다.', base: '걸어서 10분이면 8시, 여유 10분을 더하면 7시 50분에 나선다는 것을 시계로 본다.', challenge: '7시 50분과 8시 출발을 견주어 어느 쪽이 뛰지 않고 갈 수 있는지 까닭을 말한다.' },
        intro: {
          teacher: '"버스가 8시 10분에 와요. 집에서 정류장까지 걸어서 10분이면 몇 시에 나서야 할까요?" 시연 단추로 시계가 8시 10분, 이어서 7시 50분으로 움직이는 것을 보인다. "8시에 나서면 딱 맞아요"라는 말이 나오면 "신발 끈이 풀리거나 신호를 기다리면요? 딱 맞으면 어떻게 하게 될까요?"라고 되묻는다. 시각은 이 수업에서 정한 연습용 값이라고 말한다.',
          student: '버스 오는 시각과 걸리는 시간을 보고, 뛰지 않고 갈 수 있는 출발 시각을 짝과 정해 보아요.',
          demo: { tool: 'clock', options: { minuteStep: 10, showDigital: true }, sequence: [{ h: 8, m: 10 }, { h: 7, m: 50 }] },
          art: { draw: 'a paper wall clock showing ten to eight beside a paper front door, a child tying shoes calmly, a bus stop sign far down the road', banner: '여유 있게 나서요', extra: [{ motif: 'sun', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '시각·걸리는 시간은 연습용 값이다. 학생 집 주소나 실제 통학 시간은 묻지 않는다.',
      }),
      C({
        id: 'saf-traffic.e34.transit.activity.order', type: 'activity', title: '버스 타고 내리는 차례',
        method: '버스 타고 내리는 차례', tool: 'timeline', minutes: 15,
        levels: { easy: '카드 4장, 놓으면 바로 맞는지 알려 준다.', base: '카드 5~6장을 차례대로 놓은 뒤 확인한다.', challenge: '틀린 카드 1장이 섞인 판에서 그것을 빼고 놓고, 차례가 바뀌면 생길 일을 말한다.' },
        activity: {
          title: '버스 타고 내리는 차례', tool: 'timeline',
          teacher: '"버스가 들어오면 바로 문 앞으로 뛰어가도 될까요?" 카드를 다 놓으면 교실 의자로 버스를 만들어 모둠이 차례대로 따라 해 본다. "버스가 서기 전에 문 앞에 가 있어야 해요"라는 학생에게 "버스가 아직 움직일 때 문 앞에 서 있으면 어떻게 될까요?"라고 묻는다. 내릴 때도 버스가 완전히 선 뒤 움직인다는 것을 짚는다.',
          task: '버스를 타고 내리는 카드를 차례대로 시간 띠에 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORD('버스를 탈 때 차례로 놓아요.', TL, [{ id: 'line', text: '보도에 줄 서요' }, { id: 'stop', text: '버스가 완전히 서요' }, { id: 'off', text: '내리는 사람 먼저' }, { id: 'on', text: '차례로 타요' }, { id: 'hold', text: '손잡이나 자리' }], [0, 1, 3, 4], { id: 'rush', text: '움직일 때 문 앞으로', why: '버스가 서기 전에 다가가면 버스에 부딪힐 수 있어요.' }, 0.15),
            ORD('버스에서 내릴 때 차례로 놓아요.', TL, [{ id: 'bell', text: '미리 벨을 눌러요' }, { id: 'sit', text: '설 때까지 기다려요' }, { id: 'door', text: '문이 열리면 일어나요' }, { id: 'step', text: '발밑 보며 내려요' }, { id: 'away', text: '보도 안쪽으로 가요' }, { id: 'gone', text: '버스가 떠나길 기다려요' }], [0, 1, 3, 4], { id: 'early', text: '달릴 때 문 앞에 서요', why: '달리는 버스에서 서 있으면 넘어질 수 있어요.' }, 0.2),
            ORD('지하철을 탈 때 차례로 놓아요.', TL, [{ id: 'line', text: '노란 선 뒤에 서요' }, { id: 'stop', text: '열차가 멈춰요' }, { id: 'off', text: '내리는 사람 먼저' }, { id: 'gap', text: '틈을 보고 타요' }, { id: 'hold', text: '손잡이를 잡아요' }], [0, 2, 3, 4], { id: 'run', text: '닫히는 문에 뛰어요', why: '닫히는 문에 뛰어들면 몸이나 가방이 끼일 수 있어요.' }, 0.25, { conclude: '버스·지하철은 완전히 선 뒤에, 내리는 사람이 먼저, 그다음 차례로 타요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '버스를 탈 때는 ___ 사람이 먼저예요.', answer: '내리는' }] },
      }),
      C({
        id: 'saf-traffic.e34.transit.activity.door', type: 'activity', title: '갈림길: 문이 닫히려 할 때',
        method: '문이 닫히려 할 때', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '갈림 2번, 보기 3개씩 고르며 결과를 따라간다.', challenge: '갈림 2번을 지난 뒤 근거 카드 3장 가운데 알맞은 두 장을 고른다.' },
        activity: {
          title: '갈림길: 문이 닫히려 할 때', tool: 'dilemma',
          teacher: '"친구가 먼저 탔는데 문이 닫히려 해요. 손을 넣으면 문이 다시 열릴까요?" 보기를 고를 때마다 결과를 소리 내어 읽고 짝과 "나라면" 한 문장을 나눈다. "손을 넣으면 문이 다시 열려요"라는 학생에게 "문이 손이나 가방 끈을 못 알아채면 어떻게 될까요?"라고 묻는다. 떨어지면 다음 역에서 만나기로 미리 정해 두면 된다는 것을 짚는다.',
          task: '장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('친구가 탄 지하철 문이 닫히려 해요.', {
              text: '친구가 먼저 탔는데 지하철 문이 닫히려고 해요. 나는 아직 승강장이에요.', motif: 'cloud',
              choices: [
                { id: 'hand', text: '손을 넣어 문을 막는다', result: '문에 손이 끼일 뻔했어요.', impact: [{ who: '나', text: '다칠 수 있어요', tone: -1 }] },
                { id: 'stay', text: '타지 않고 다음 열차를 기다린다', result: '문이 닫히고 친구가 손을 흔들었어요.', ending: '무리하게 타지 않고 다음 열차를 기다렸어요.', next: {
                  text: '친구와 떨어졌어요. 어떻게 만날까요?', choices: [
                    { id: 'next', text: '다음 역에서 내려 기다리자고 한다', result: '친구가 다음 역 승강장에서 기다렸어요.', impact: [{ who: '나와 친구', text: '다시 만났어요', tone: 1 }], ending: '미리 정한 방법으로 다음 역에서 만났어요.' },
                    { id: 'run', text: '승강장을 뛰어다니며 찾는다', result: '사람들과 부딪힐 뻔했어요.', impact: [{ who: '둘레 사람', text: '다칠 수 있어요', tone: -1 }] },
                    { id: 'cry', text: '아무에게도 말하지 않는다', result: '친구는 어디서 기다릴지 몰라요.', impact: [{ who: '친구', text: '걱정해요', tone: -1 }] },
                  ] } },
                { id: 'jump', text: '닫히는 문 사이로 뛰어든다', result: '가방이 문에 끼였어요.', impact: [{ who: '나', text: '끌려갈 수 있어요', tone: -1 }] },
              ] }, [['stay', 'next']],
            [{ id: 'pinch', text: '닫히는 문은 몸을 끼울 수 있어서' }, { id: 'plan', text: '만날 곳을 정하면 다시 만나서' }, { id: 'open', text: '손을 넣으면 꼭 열려서', why: '문이 늘 다시 열리는 것은 아니에요. 손을 넣지 않아요.' }], ['pinch', 'plan'], 0.2),
            DIL('버스 문이 닫히는데 내 정류장이에요.', {
              text: '내릴 정류장인데 이야기하다 늦어 버스 문이 닫히려 해요.', motif: 'sun',
              choices: [
                { id: 'push', text: '사람을 밀고 뛰어 내린다', result: '밀다가 계단에서 넘어질 뻔했어요.', impact: [{ who: '나와 둘레 사람', text: '다칠 수 있어요', tone: -1 }] },
                { id: 'say', text: '"내려요!" 말하고 기다린다', result: '기사님이 문을 다시 열어 주셨어요.', ending: '말로 알리고 문이 열린 뒤 내렸어요.', next: {
                  text: '문이 열렸어요. 계단 앞에 사람이 많아요.', choices: [
                    { id: 'step', text: '손잡이 잡고 발밑 보며 내린다', result: '천천히 내려 보도에 섰어요.', impact: [{ who: '나', text: '안전하게 내렸어요', tone: 1 }], ending: '서두르지 않고 발밑을 보며 내렸어요.' },
                    { id: 'jump', text: '계단을 건너뛰어 내린다', result: '착지하다 발목을 삐끗할 뻔했어요.', impact: [{ who: '나', text: '다칠 수 있어요', tone: -1 }] },
                    { id: 'phone', text: '휴대전화를 보며 내린다', result: '발밑을 못 봐 헛디딜 뻔했어요.', impact: [{ who: '나', text: '넘어질 수 있어요', tone: -1 }] },
                  ] } },
                { id: 'hand', text: '닫히는 문에 손을 댄다', result: '문에 손가락이 끼일 뻔했어요.', impact: [{ who: '나', text: '다칠 수 있어요', tone: -1 }] },
              ] }, [['say', 'step']],
            [{ id: 'tell', text: '말로 알리면 문을 열어 줘서' }, { id: 'feet', text: '내릴 때 발밑이 위험해서' }, { id: 'quick', text: '빨리 내리는 게 먼저라서', why: '빨리보다 다치지 않게 내리는 것이 먼저예요.' }], ['tell', 'feet'], 0.25),
            DIL('가방 끈이 문에 낀 것 같아요.', {
              text: '지하철에 탔는데 문이 닫히며 가방 끈 끝이 문에 끼였어요.', motif: 'star',
              choices: [
                { id: 'pull', text: '힘껏 잡아당긴다', result: '끈이 안 빠지고 몸이 문에 붙었어요.', impact: [{ who: '나', text: '다칠 수 있어요', tone: -1 }] },
                { id: 'tell', text: '둘레 어른께 바로 알린다', result: '어른이 비상 연락 장치로 알려 주셨어요.', ending: '혼자 당기지 않고 어른께 알렸어요.', next: {
                  text: '다음 역에서 문이 열려 가방이 빠졌어요.', choices: [
                    { id: 'front', text: '가방을 앞으로 메고 문에서 떨어진다', result: '문에서 떨어져 손잡이를 잡았어요.', impact: [{ who: '나', text: '안전해요', tone: 1 }], ending: '가방을 앞으로 메고 문에서 떨어져 섰어요.' },
                    { id: 'lean', text: '문에 기대어 선다', result: '문이 열릴 때 휘청했어요.', impact: [{ who: '나', text: '넘어질 수 있어요', tone: -1 }] },
                    { id: 'swing', text: '가방을 빙빙 돌린다', result: '옆 사람에게 가방이 닿았어요.', impact: [{ who: '옆 사람', text: '불편해요', tone: -1 }] },
                  ] } },
                { id: 'hide', text: '창피해서 가만히 있는다', result: '아무도 몰라 계속 끼여 있어요.', impact: [{ who: '나', text: '위험해요', tone: -1 }] },
              ] }, [['tell', 'front']],
            [{ id: 'adult', text: '어른은 알리는 방법을 알아서' }, { id: 'away', text: '문에서 떨어지면 끼이지 않아서' }, { id: 'shame', text: '창피하면 참는 게 나아서', why: '창피해도 알려야 다치지 않아요.' }], ['adult', 'away'], 0.3, { conclude: '닫히는 문에는 손·발·가방을 넣지 않고, 떨어지면 다음 역에서 만나요. 끼이면 바로 어른께 알려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '지하철 문이 닫히려 할 때는?', options: ['손을 넣어 막아요', '다음 열차를 기다려요', '뛰어들어요'], answer: '다음 열차를 기다려요' }] },
      }),
      C({
        id: 'saf-traffic.e34.transit.activity.inside', type: 'activity', title: '차 안에서 지킬 일 나누기',
        method: '차 안에서 지킬 일', tool: 'kitchen', minutes: 15,
        levels: { easy: '카드 4장, 놓으면 바로 맞는지 알려 준다.', base: '카드 6장을 지킬 일·안 될 일로 나눈다.', challenge: '카드 8장을 나누고, 안 될 일 하나를 바른 행동으로 바꿔 말한다.' },
        activity: {
          title: '차 안에서 지킬 일 나누기', tool: 'kitchen',
          teacher: '"버스·지하철 안에서 이 행동은 지킬 일일까요, 안 될 일일까요?" 카드를 놓을 때마다 왜 그런지 한 문장으로 말하게 한다. "출입문에 기대면 편해요"라는 학생에게 "문이 열리면 기대 있던 몸은 어디로 갈까요?"라고 묻는다. 안 될 일 카드는 바른 행동으로 바꿔 말해 보게 한다.',
          task: '차 안 행동 카드를 지킬 일과 안 될 일로 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTC('버스 안 행동을 나누어요.', { autoMotif: false, title: '버스 안' }, ['지킬 일', '안 될 일'], [['손잡이 잡기', '가방 앞으로 메기', '자리에 앉기'], ['통로에서 뛰기', '출입문에 기대기', '창밖으로 손']], 2, [['벨은 미리 누르기'], ['달릴 때 일어서기']], 0.15),
            SORTC('지하철 안 행동을 나누어요.', { autoMotif: false, title: '지하철 안' }, ['지킬 일', '안 될 일'], [['문에서 떨어져 서기', '손잡이 잡기', '작은 소리로 말하기'], ['문에 기대기', '봉에 매달리기', '칸 사이로 다니기']], 2, [['내릴 역 미리 보기'], ['닫히는 문 막기']], 0.2),
            SORTC('정류장·승강장 행동을 나누어요.', { autoMotif: false, title: '기다릴 때' }, ['지킬 일', '안 될 일'], [['노란 선 뒤 서기', '보도 안쪽 서기', '줄 서서 기다리기'], ['선로 쪽 내려다보기', '차도에 내려가기', '줄에서 장난치기']], 2, [['엘리베이터 이용'], ['떨어진 물건 줍기']], 0.25, { conclude: '차 안에서는 손잡이를 잡고 문에서 떨어져요. 뛰거나 기대거나 매달리지 않아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '지킬 일이면 ○, 안 될 일이면 ×를 써요.', columns: ['행동', '○ / ×'], cells: [['손잡이 잡기', ''], ['출입문에 기대기', ''], ['가방 앞으로 메기', ''], ['통로에서 뛰기', '']], answer: '○, ×, ○, ×' }] },
        notes: '"선로에 떨어진 물건은 직접 줍지 않고 역무원에게 알린다"를 도전 카드와 함께 짚는다.',
      }),
      C({
        id: 'saf-traffic.e34.transit.activity.escalator', type: 'activity', title: '에스컬레이터 이야기',
        method: '에스컬레이터 이야기', tool: 'story', minutes: 14,
        levels: { easy: '첫 문항은 장면 3장, 말풍선 문항은 빈칸 1개를 채운다.', base: '장면 4장을 차례로 놓고, 말풍선 빈칸 2개를 채운다.', challenge: '틀린 장면 1장을 빼고 놓고, 말풍선 빈칸 3개(신발 끈이 풀린 장면 포함)를 채운다.' },
        activity: {
          title: '에스컬레이터 이야기', tool: 'story',
          teacher: '"에스컬레이터에서는 뛰어도 될까요?" 장면을 놓고 말풍선을 채운 뒤 짝에게 친구 말을 소리 내어 읽어 주게 한다. "에스컬레이터에서 뛰면 빨리 가요"라는 학생에게 "움직이는 계단에서 넘어지면 뒤의 사람은 어떻게 될까요?"라고 묻는다. 손잡이를 잡고 노란 선 안에 서며, 신발 끈·긴 옷자락이 끼이지 않게 한다는 것을 짚는다.',
          task: '에스컬레이터 장면을 차례로 놓고, 친구 말풍선의 빈칸을 채워요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORD('에스컬레이터를 타는 장면을 차례로 놓아요.', {}, [{ id: 'look', text: '발밑을 보고 서요' }, { id: 'rail', text: '손잡이를 잡아요' }, { id: 'stand', text: '노란 선 안에 서요' }, { id: 'off', text: '끝에서 바로 비켜요' }], [0, 1, 3], { id: 'run', text: '계단 위를 뛰어요', why: '움직이는 계단에서 뛰면 넘어져 여럿이 다칠 수 있어요.' }, 0.15),
            FILL('친구에게 알려 주는 말풍선을 채워요.', '나', [['손잡이 ___ 노란 선 안에 서요.', '잡고'], ['계단에서는 ___.', '뛰지 않아요'], ['내리면 ___ 비켜요.', '바로']], ['놓고', '뛰어요'], 0.2),
            FILL('신발 끈이 풀린 장면의 말풍선을 채워요.', ['친구', '나', '나'], [['어? 신발 끈이 ___!', '풀렸어'], ['타기 전에 ___ 탈게.', '묶고'], ['끈은 ___ 끼일 수 있어.', '틈에']], ['그냥 타자', '괜찮아'], 0.25, { conclude: '에스컬레이터에서는 손잡이를 잡고 노란 선 안에 서요. 신발 끈은 묶고 타요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '에스컬레이터에서는 손잡이를 잡고 ___ 선 안에 서요.', answer: '노란' }] },
      }),
      C({
        id: 'saf-traffic.e34.transit.activity.getoff', type: 'activity', title: '급정거할 때 자세',
        method: '급정거할 때 자세', tool: 'body', minutes: 15,
        levels: { easy: '첫 문항은 손잡이를 잡는 손목 한 곳만 고른다.', base: '손목과 벌려 디딜 발목을 함께 고르고, 쏠리는 쪽을 보기에서 고른다.', challenge: '서 있을 때와 앉아 있을 때 지킬 일을 보기에서 견주어 고른다.' },
        activity: {
          title: '급정거할 때 자세', tool: 'body',
          teacher: '"버스가 갑자기 서면 서 있는 내 몸은 어느 쪽으로 쏠릴까요?" 자리에서 일어나 발을 어깨너비로 벌리고 손잡이를 잡는 흉내를 낸 뒤, 선생님이 "급정거!" 하면 몸이 앞으로 쏠리는 것을 버티는 시늉을 한다(밀거나 넘어뜨리지 않는다). "손잡이 없이도 버틸 수 있어요"라는 학생에게 "두 발로만 서 있다가 앞으로 쏠리면 무엇을 잡을까요?"라고 묻는다.',
          task: '종이 몸에서 지킬 곳을 고르고, 갑자기 설 때 몸의 쏠림을 보기에서 골라요.', levels: { easy: { names: true }, base: {}, challenge: {} },
          items: [
            { prompt: '서서 갈 때 손잡이를 잡는 곳과 벌려 디딜 곳을 골라요.', toolOptions: { mode: 'parts', parts: ['목', '어깨', '팔꿈치', '손목', '허리', '무릎', '발목'] }, target: { parts: ['손목', '발목'] }, difficulty: 0.15,
              levels: { easy: { prompt: '서서 갈 때 손잡이를 잡는 곳을 골라요.', target: { parts: ['손목'] } } } },
            { prompt: '버스가 갑자기 서면 몸은 어느 쪽으로 쏠릴까요?', toolOptions: { mode: 'parts', parts: ['손목', '발목'], readOnly: true, ask: { q: '갑자기 설 때 내 몸은?', choices: ['앞쪽으로 쏠려요', '뒤쪽으로 쏠려요', '그대로 있어요'] } }, target: { pick: 0 }, difficulty: 0.2 },
            { prompt: '자리에 앉아 갈 때 지킬 일을 골라요.', toolOptions: { mode: 'parts', parts: ['허리', '발목'], readOnly: true, ask: { q: '앉아 갈 때는?', choices: ['등을 기대고 앉아요', '통로에 발을 뻗어요', '무릎 꿇고 창밖 봐요'] } }, target: { pick: 0 }, difficulty: 0.25, conclude: '서서 갈 때는 손잡이를 꼭 잡고 발을 벌려 디뎌요. 앉아서는 등을 기대고 발은 내 자리에 둬요.' },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '버스에서 서서 갈 때 바른 자세는?', options: ['손잡이 잡고 발 벌리기', '두 손 놓고 서기', '문에 기대기'], answer: '손잡이 잡고 발 벌리기' }] },
        notes: '종이 몸에 손·발 칸이 없어 손목·발목으로 고른다. 몸으로 해 볼 때 서로 밀지 않는다.',
      }),
      C({
        id: 'saf-traffic.e34.transit.activity.cross', type: 'activity', title: '버스에서 내린 뒤 건너는 길',
        method: '내린 뒤 건너는 길', tool: 'map', minutes: 14,
        levels: { easy: '핀을 놓으면 그 칸의 이름이 바로 보인다.', base: '지도의 이름을 보고 횡단보도 두 곳 가운데 알맞은 곳을 고르며 핀을 꽂는다.', challenge: '핀마다 까닭도 보기에서 고르고, 버스가 서 있을 때 기다릴 곳의 까닭을 말한다.' },
        activity: {
          title: '버스에서 내린 뒤 건너는 길', tool: 'map',
          teacher: '"버스에서 내렸어요. 건너편 집으로 가려면 어디로 건널까요?" 핀을 꽂기 전에 손가락으로 정류장에서 횡단보도까지 보도를 따라가게 한다. "버스 바로 앞으로 건너면 빨라요"라는 학생에게 "서 있는 버스 앞에서 나오면, 옆 차로 운전자는 버스에 가려진 나를 볼 수 있을까요?"라고 묻는다. 버스가 떠난 뒤 가까운 횡단보도로 건넌다는 것을 짚는다.',
          task: '정류장 지도에서 물음에 맞는 곳에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            PIN(STOP, '버스에서 내려 먼저 설 곳에 핀을 꽂아요.', '정류장', { q: '왜 여기에 먼저 설까요?', choices: ['버스가 잘 보여서', '빨리 뛰려고', '보도라서 차가 안 와요'], answer: 2 }, 0.15),
            PIN(STOP, '건너편으로 갈 때 건널 가까운 곳에 꽂아요.', '가까운 횡단보도', { q: '왜 여기서 건널까요?', choices: ['횡단보도라서', '버스 옆이라서', '사람이 없어서'], answer: 0 }, 0.2),
            PIN(STOP, '버스가 서 있을 때 건너면 안 되는 곳에 꽂아요.', '버스 앞 찻길', { q: '여기가 위험한 까닭은?', choices: ['길이 넓어요', '버스에 가려 안 보여요', '가게가 있어요'], answer: 1 }, 0.25, { conclude: '버스에서 내리면 보도로 가서 버스가 떠나길 기다리고, 가까운 횡단보도로 건너요. 버스 앞뒤로 건너지 않아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '버스에서 내린 뒤 길을 건널 때는?', options: ['버스 앞으로 바로', '버스가 떠난 뒤 횡단보도로', '버스 뒤로 뛰어서'], answer: '버스가 떠난 뒤 횡단보도로' }] },
      }),
      C({
        id: 'saf-traffic.e34.transit.wrap.tree', type: 'wrap', title: '대중교통 약속 그물',
        method: '대중교통 약속 그물', tool: 'mindmap', minutes: 6,
        levels: { easy: '가지 2개(기다릴 때·탈 때)에 카드 4장을 넣는다.', base: '가지 4개에 카드 8장을 넣는다.', challenge: '함정 카드 1장이 섞인 9장에서 그것을 빼고 넣는다.' },
        wrap: {
          teacher: '"버스·지하철 약속을 때마다 모아 볼까요?" 카드를 다 넣으면 가지마다 한 목소리로 읽는다. 함정 카드 \'닫히는 문에 손 넣기\'를 넣으려는 학생에게 "문이 손을 못 알아채면 어떻게 될까요?"라고 되묻는다. 출구 2번은 내린 뒤 건너는 길을 다시 떠올리게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '버스·지하철', slots: ['기다릴 때', '탈 때', '안에서', '내릴 때'], cards: ['노란 선 뒤', '내리는 사람 먼저', '손잡이 잡기', '발밑 보기', '줄 서기', '완전히 선 뒤', '문에서 떨어지기', '떠난 뒤 건너기'] }, prompt: '대중교통 약속 카드를 가지에 넣어요.', target: { sort: { '기다릴 때': ['노란 선 뒤', '줄 서기'], '탈 때': ['내리는 사람 먼저', '완전히 선 뒤'], 안에서: ['손잡이 잡기', '문에서 떨어지기'], '내릴 때': ['발밑 보기', '떠난 뒤 건너기'] } }, difficulty: 0.2,
              levels: {
                easy: { prompt: '약속 카드를 두 가지에 넣어요.', toolOptions: { slots: ['기다릴 때', '탈 때'], cards: ['노란 선 뒤', '내리는 사람 먼저', '줄 서기', '완전히 선 뒤'] }, target: { sort: { '기다릴 때': ['노란 선 뒤', '줄 서기'], '탈 때': ['내리는 사람 먼저', '완전히 선 뒤'] } } },
                challenge: { prompt: '약속 카드를 넣고 틀린 카드는 빼요.', toolOptions: { cards: ['노란 선 뒤', '내리는 사람 먼저', '닫히는 문에 손', '손잡이 잡기', '발밑 보기', '줄 서기', '완전히 선 뒤', '문에서 떨어지기', '떠난 뒤 건너기'] }, target: { sort: { '기다릴 때': ['노란 선 뒤', '줄 서기'], '탈 때': ['내리는 사람 먼저', '완전히 선 뒤'], 안에서: ['손잡이 잡기', '문에서 떨어지기'], '내릴 때': ['발밑 보기', '떠난 뒤 건너기'] } } },
              } },
            { type: 'choice', prompt: '버스에서 내린 뒤 건널 때 바른 것은?', options: ['버스 앞으로 건너요', '버스가 떠난 뒤 횡단보도로', '버스 뒤로 뛰어요'], answer: 1, difficulty: 0.1, explain: '서 있는 버스는 나를 가려요. 버스가 떠난 뒤 횡단보도로 건너요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '버스·지하철 약속',
          items: [
            { type: 'table', prompt: '때마다 지킬 약속을 하나씩 써요.', columns: ['기다릴 때', '탈 때', '안에서', '내릴 때'], cells: [['', '', '', '']], answer: '노란 선 뒤, 내리는 사람 먼저, 손잡이 잡기, 발밑 보기' },
            { type: 'draw', prompt: '버스에서 손잡이를 잡고 선 내 모습을 그려요.' },
          ],
        },
      }),
      C({
        id: 'saf-traffic.e34.transit.wrap.graph', type: 'wrap', title: '우리 반 대중교통 그림그래프',
        method: '우리 반 대중교통 이용 그림그래프', tool: 'chart', minutes: 6,
        levels: { easy: '항목 2개, 첫 항목 그림은 미리 놓여 있다.', base: '항목 3개의 그림을 모두 놓아 완성한다.', challenge: '완성한 뒤 가장 많이 쓰는 교통수단의 약속을 말한다.' },
        wrap: {
          teacher: '"우리 반(가상) 친구들이 한 달에 가장 많이 탄 것은 무엇일까요?" 그림그래프를 완성한 뒤 가장 긴 줄을 함께 찾는다. 이 자료는 가상이라고 밝힌다. 가장 많이 쓰는 교통수단이 나오면 그때 지킬 약속 하나를 반 전체가 말한다. 큰 그림을 1번으로 세는 학생에게 "큰 그림 하나는 몇 번이었나요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'chart', options: { type: 'picture', mode: 'build', title: '한 달 동안 탄 횟수(가상의 우리 반)', unit: '번', xLabel: '교통수단', yLabel: '횟수', icons: [{ value: 5, name: '5번' }, { value: 1, name: '1번' }], icon: 'person', data: RIDE }, prompt: '표를 보고 대중교통 그림그래프를 완성해요.', target: { build: true }, difficulty: 0.2,
              levels: { easy: { prompt: '표를 보고 두 줄의 그림그래프를 완성해요.', toolOptions: { data: RIDE.slice(0, 2), given: [0] } } } },
            { type: 'choice', prompt: '그래프에서 가장 많이 탄 것은?', options: ['버스', '지하철', '마을버스'], answer: 0, difficulty: 0.1, explain: '버스가 12번으로 가장 많아요.' },
            { type: 'short', prompt: '버스를 탈 때 지킬 약속을 한 줄로 써요.' },
          ],
        },
        worksheet: {
          title: '우리 반 대중교통(가상)',
          items: [
            { type: 'table', prompt: '표의 빈칸을 채워요.', columns: ['교통수단', '횟수(번)'], cells: [['버스', '12'], ['지하철', ''], ['마을버스', '5']], answer: '7' },
            { type: 'short', prompt: '가장 많이 탄 교통수단에서 지킬 약속을 써요.' },
          ],
        },
      }),
      C({
        id: 'saf-traffic.e34.transit.wrap.self', type: 'wrap', title: '대중교통 스스로 점검',
        method: '대중교통 스스로 점검', tool: 'timer', minutes: 6,
        levels: { easy: '점검 칸 2개에 표시한다.', base: '점검 칸 3개에 표시한다.', challenge: '점검 칸 4개에 표시하고 짝에게 지킬 것 하나를 약속한다.' },
        wrap: {
          teacher: '"이번 주 버스·지하철을 탈 때 꼭 지킬 것에 표시해요." 점검 칸을 함께 읽는다. 대중교통을 잘 타지 않는 학생은 가족과 탈 때를 떠올리게 한다. 짝끼리 "나는 ○○을 지킬게"라고 약속을 주고받는다. 출구 2번에서 \'버스 앞으로\'를 고른 학생에게 지도에서 버스에 가려진 칸을 다시 떠올리게 한다.',
          exitTicket: [
            SELF('대중교통 점검', ['안전선 뒤에서 기다려요', '내리는 사람 먼저', '손잡이를 잡아요', '내린 뒤 횡단보도로'], '이번 주에 지킬 것에 표시해요.'),
            { type: 'choice', prompt: '지하철을 기다릴 때 서는 곳은?', options: ['노란 선 앞', '노란 선 뒤', '선로 가까이'], answer: 1, difficulty: 0.1, explain: '열차가 들어올 때 다치지 않게 노란 선 뒤에서 기다려요.' },
            { type: 'short', prompt: '짝에게 약속한 것을 한 줄로 써요.' },
          ],
        },
        worksheet: {
          title: '대중교통 스스로 점검',
          items: [
            { type: 'check', prompt: '이번 주에 지킬 것에 표시해요.', options: ['안전선 뒤', '내리는 사람 먼저', '손잡이 잡기', '내린 뒤 횡단보도'] },
            { type: 'draw', prompt: '노란 선 뒤에서 기다리는 내 모습을 그려요.' },
          ],
          easy: { note: '기다릴 때·탈 때·안에서·내릴 때를 떠올려요.', items: [{ type: 'choice', prompt: '버스에 탈 때 먼저인 사람은?', options: ['내리는 사람', '타는 사람'], answer: '내리는 사람' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 4학년 · 표지판의 모양과 색이 하는 말 (별표 2 초등 교통안전 "교통 표지판 등 도로 교통 법규 알기")
  // ======================================================================================================
  {
    const C = T('signrule', 4);
    const SIGNS = {
      title: '표지판이 있는 동네', grid: [6, 4],
      regions: [
        { name: '학교', cells: [[0, 0], [1, 0]] }, { name: '어린이 보호구역', cells: [[2, 0], [3, 0], [2, 1], [3, 1]] }, { name: '공원', cells: [[4, 0], [5, 0]] },
        { name: '보도', cells: [[0, 1], [1, 1], [4, 1], [5, 1]] }, { name: '횡단보도', cells: [[1, 2]] }, { name: '찻길', cells: [[0, 2], [2, 2], [3, 2], [4, 2], [5, 2]] },
        { name: '자전거 전용 도로', cells: [[0, 3], [1, 3], [2, 3]] }, { name: '진입 금지 골목', cells: [[3, 3]] }, { name: '공사 중인 길', cells: [[4, 3], [5, 3]] },
      ],
    };
    const MISS = [['주의', 3], ['규제', 7], ['지시', 5]];
    const s = (id, text, sub) => ({ id, text, sub });
    M.push(
      C({
        id: 'saf-traffic.e34.signrule.intro.guess', type: 'intro', title: '처음 보는 표지판 뜻 짐작하기',
        method: '처음 보는 표지판 뜻 짐작하기', tool: 'emotion', minutes: 5,
        levels: { easy: '표지판 두 가지(노란 세모·빨간 동그라미)의 뜻이 짝 지어지는 것을 함께 본다.', base: '표지판 세 가지의 뜻이 짝 지어지는 것을 보고 짐작한 까닭을 말한다.', challenge: '모양과 색 가운데 무엇을 보고 짐작했는지 말한다.' },
        intro: {
          teacher: '"이 표지판은 처음 보지요? 그래도 뜻을 짐작할 수 있을까요?" 칠판에 실물 표지판 그림(노란 세모·빨간 테두리 동그라미·파란 네모)을 붙이고, 시연 단추로 \'조심하래요·하지 말래요·이렇게 하래요\'가 짝 지어지는 것을 보인다. "표지판은 하나하나 다 외워야 알아요"라는 말이 나오면 "처음 본 표지판인데도 노란 세모를 보고 뜻을 짐작했지요? 무엇을 보고 짐작했나요?"라고 되묻는다.',
          student: '표지판의 모양과 색을 보고 무슨 뜻일지 짐작해 고르고, 그렇게 짐작한 까닭을 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'yellow', label: '노란 세모 표지판' }, { id: 'red', label: '빨간 테두리 동그라미' }, { id: 'blue', label: '파란 네모 표지판' }], cards: ['하지 말래요', '이렇게 하래요', '조심하래요'], weather: false }, sequence: [{ match: { yellow: '조심하래요', red: '하지 말래요' } }, { match: { yellow: '조심하래요', red: '하지 말래요', blue: '이렇게 하래요' } }] },
          art: { draw: 'three paper cut road signs on poles: a yellow triangle with a red border, a white circle with a red border, and a blue square, a paper child looking up and thinking', banner: '모양과 색이 말해요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '교구는 표지판 그림을 그리지 못한다. 실물 사진이나 그림 카드를 칠판에 붙여 함께 보인다.',
      }),
      C({
        id: 'saf-traffic.e34.signrule.intro.walk', type: 'intro', title: '동네 지도 표지판 산책',
        method: '동네 지도 표지판 산책', tool: 'map', minutes: 5,
        levels: { easy: '어린이 보호구역·횡단보도에 핀이 꽂히는 것을 함께 본다.', base: '표지판이 있는 곳 다섯 곳에 차례로 핀이 꽂히는 것을 보고 표지판 뜻을 말한다.', challenge: '핀이 꽂힌 곳을 같은 무리(주의·규제·지시) 표지판끼리 묶어 말한다.' },
        intro: {
          teacher: '"동네를 걸으며 표지판을 찾아볼까요? 이곳에는 어떤 표지판이 있을까요?" 시연 단추로 어린이 보호구역·횡단보도·자전거 전용 도로·진입 금지 골목·공사 중인 길에 핀이 차례로 꽂히는 것을 보이고, 곳마다 표지판 그림 카드를 칠판에 붙인다. "보행자는 표지판을 몰라도 돼요"라는 말이 나오면 "진입 금지 골목에서 차가 거꾸로 오지 않을 거라 믿고 걸어도 될까요? 공사 중 표지판은 누구에게 하는 말일까요?"라고 되묻는다.',
          student: '지도에서 표지판이 있는 곳을 따라가며, 그 표지판이 나에게 무엇을 알려 주는지 말해 보아요.',
          demo: { tool: 'map', options: SIGNS, sequence: [{ pin: [2, 0] }, { pin: [1, 2] }, { pin: [0, 3] }, { pin: [3, 3] }, { pin: [4, 3] }] },
          art: { draw: 'a paper cut town map with tiny paper road signs standing at a school zone, a crosswalk, a bike lane, a no entry alley and a road under construction', banner: '표지판을 찾아요', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
        },
        notes: '계획의 "범례 빈칸 채우기"는 교구 기호에 표지판이 없어 핀 산책으로 바꿨다. 곳마다 실물 표지판 그림을 붙인다.',
      }),
      C({
        id: 'saf-traffic.e34.signrule.activity.sort', type: 'activity', title: '표지판 세 무리로 나누기',
        method: '표지판 세 무리로 나누기', tool: 'mindmap', minutes: 15,
        levels: { easy: '가지 2개(주의·규제)에 표지판 카드를 나눈다(가지 아래 뜻 설명이 보인다).', base: '가지 3개에 카드 6장을 나눈다.', challenge: '카드 9장을 나누고, 나눈 기준(모양·색)을 짝에게 설명한다.' },
        activity: {
          title: '표지판 세 무리로 나누기', tool: 'mindmap',
          teacher: '"이 표지판은 조심하라는 말일까요, 하지 말라는 말일까요, 이렇게 하라는 말일까요?" 카드마다 모양과 색(카드 아래 작은 글)을 먼저 읽고 가지를 고르게 한다. 진입 금지를 지시에 두는 학생에게 "빨간 테두리는 무슨 말이었나요?"라고 묻는다. 셋째 문항은 이름 없이 모양과 색만 보고 나누므로, 규칙을 알면 처음 보는 표지판도 짐작할 수 있다는 것을 짚는다.',
          task: '표지판 카드를 주의·규제·지시 가지에 나누어 넣어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORT('표지판 카드를 세 무리로 나누어요.', { topic: '교통 표지판' }, [{ id: '주의', label: '주의', sub: '조심하래요' }, { id: '규제', label: '규제', sub: '하지 말래요' }, { id: '지시', label: '지시', sub: '이렇게 하래요' }], [[s('slip', '미끄러운 길', '노란 세모'), s('work', '공사 중', '노란 세모')], [s('noentry', '진입 금지', '빨간 동그라미'), s('nobike', '자전거 금지', '빨간 동그라미')], [s('bikeway', '자전거 전용', '파란 동그라미'), s('walkway', '보행자 전용', '파란 동그라미')]], [[s('down', '내리막 경사', '노란 세모')], [s('nopark', '주차 금지', '빨간 동그라미')], [s('right', '오른쪽으로', '파란 동그라미')]], 0.15),
            SORT('이름만 보고 표지판을 나누어요.', { topic: '이름만 보고' }, [{ id: '주의', label: '주의' }, { id: '규제', label: '규제' }, { id: '지시', label: '지시' }], [['낙석 주의', '자전거 주의'], ['보행자 통행 금지', '일시 정지'], ['자전거 횡단도', '직진']], [['야생 동물 보호'], ['앞지르기 금지'], ['좌회전']], 0.2),
            SORT('모양과 색만 보고 표지판을 나누어요.', { topic: '모양과 색' }, [{ id: '주의', label: '주의' }, { id: '규제', label: '규제' }, { id: '지시', label: '지시' }], [['노란 세모 빨간 테', '노란 바탕 세모'], ['빨간 테 흰 동그라미', '빨간 거꾸로 세모'], ['파란 동그라미', '파란 바탕 네모']], [['노란 세모 느낌표'], ['빨간 테 빗금'], ['파란 화살표 원']], 0.25, { conclude: '노란 세모는 주의, 빨간 테두리는 규제, 파란 바탕은 지시예요. 모양과 색을 알면 처음 보는 표지판도 짐작해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '모양과 색에 맞는 무리를 써요.', columns: ['모양과 색', '무리'], cells: [['노란 세모', ''], ['빨간 테두리 동그라미', ''], ['파란 바탕', '']], answer: '주의, 규제, 지시' }] },
        notes: '카드는 표지판 이름과 모양·색만 글로 보인다. 실물 표지판 그림을 칠판에 함께 붙인다. 일시 정지는 빨간 거꾸로 세모(규제)라 예외로 짚는다.',
      }),
      C({
        id: 'saf-traffic.e34.signrule.activity.road', type: 'activity', title: '표지판 보며 걷는 길',
        method: '표지판 보며 걷는 길', tool: 'story', minutes: 14,
        levels: { easy: '첫 문항은 장면 3장, 말풍선 문항은 빈칸 1개를 채운다.', base: '장면 4장을 차례로 놓고, 말풍선 빈칸 2개를 채운다.', challenge: '틀린 장면 1장을 빼고 놓고, 말풍선 빈칸 3개를 채운 뒤 표지판을 놓친 장면에서 생길 일을 말한다.' },
        activity: {
          title: '표지판 보며 걷는 길', tool: 'story',
          teacher: '"학원까지 가는 길에 만난 표지판이 하는 말을 들어 볼까요?" 장면을 차례로 놓고 말풍선을 채운 뒤, 짝에게 "이 표지판은 ○○래요. 그래서 나는 ○○해요."로 말하게 한다. "표지판은 차에게만 하는 말이에요"라는 학생에게 "공사 중 표지판을 못 보고 그쪽으로 걸어가면 어떻게 될까요?"라고 묻는다.',
          task: '학원 가는 길 장면을 차례로 놓고, 표지판이 하는 말을 말풍선에 채워요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORD('학원까지 표지판을 만나는 장면을 차례로 놓아요.', {}, [{ id: 'school', text: '어린이 보호구역' }, { id: 'cross', text: '횡단보도 표지' }, { id: 'work', text: '공사 중 표지' }, { id: 'arrive', text: '학원 도착' }], [0, 1, 3], { id: 'ignore', text: '표지판 안 보고 뛰기', why: '표지판을 안 보면 공사 중인 곳으로 갈 수 있어요.' }, 0.15),
            FILL('표지판이 하는 말을 말풍선에 채워요.', '나', [['노란 세모: 여기는 ___래요.', '조심하'], ['빨간 테: 이 길은 ___래요.', '들어가지 말'], ['파란 바탕: 여기로 ___래요.', '다니']], ['뛰어가', '놀다 가'], 0.2),
            FILL('표지판을 보고 할 일을 말풍선에 채워요.', '나', [['공사 중: 다른 길로 ___.', '돌아가요'], ['진입 금지 골목은 차가 ___.', '못 들어가요'], ['자전거 전용: 걸을 때는 ___ 걸어요.', '보도로']], ['그냥 가요', '가운데로'], 0.25, { conclude: '표지판은 걷는 나에게도 말해요. 보고, 뜻을 알고, 할 일을 정해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '공사 중 표지판을 보면 다른 길로 ___.', answer: '돌아가요' }] },
      }),
      C({
        id: 'saf-traffic.e34.signrule.activity.quiz', type: 'activity', title: '표지판 모둠 퀴즈',
        method: '표지판 모둠 퀴즈', tool: 'timer', minutes: 15,
        levels: { easy: '퀴즈 계획을 4문제·30초(넉넉하게)로 맞추고 맞힌 수 2칸을 적는다.', base: '6문제·20초로 맞추고 맞힌 수 3칸을 적는다.', challenge: '6문제·15초로 맞추고 4칸을 적은 뒤, 모둠이 문제를 내고 다른 모둠이 맞힌다.' },
        activity: {
          title: '표지판 모둠 퀴즈', tool: 'timer',
          teacher: '"한 문제에 몇 초를 줄까요?" 퀴즈 계획을 타이머로 맞춘 뒤 모둠마다 표지판 그림 카드를 들고 시작 단추를 누른다. 한 사람이 카드를 들면 나머지가 "무리 → 뜻 → 할 일" 차례로 말한다. 뜻만 말하고 할 일을 빼는 학생에게 "그래서 길에서 나는 무엇을 해야 할까요?"라고 묻는다. 맞힌 수를 기록판에 옮겨 적는다.',
          task: '퀴즈 계획을 타이머에 맞추고, 순서 카드를 놓고, 모둠이 맞힌 수를 적어요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '한 문제 20초, 쉬기 5초, 6문제로 타이머를 맞춰요.', toolOptions: { title: '퀴즈 계획', plan: { work: 10, rest: 10, rounds: 2 } }, target: { plan: { work: 20, rest: 5, rounds: 6 } }, difficulty: 0.2,
              levels: { easy: { prompt: '한 문제 30초, 쉬기 5초, 4문제로 맞춰요.', target: { plan: { work: 30, rest: 5, rounds: 4 } } }, challenge: { prompt: '한 문제 15초, 쉬기 5초, 6문제로 맞춰요.', target: { plan: { work: 15, rest: 5, rounds: 6 } } } } },
            { prompt: '카드를 들면 말할 순서대로 놓아요.', toolOptions: { title: '말하는 순서', cards: ['할 일 말하기', '무리 말하기', '뜻 말하기'] }, target: { order: ['무리 말하기', '뜻 말하기', '할 일 말하기'] }, difficulty: 0.15 },
            { prompt: '모둠이 맞힌 수를 판마다 기록판에 적어요.', toolOptions: { title: '맞힌 수', unit: '개', fields: ['1판', '2판', '3판'] }, target: { records: 3 }, difficulty: 0.15,
              levels: { easy: { prompt: '모둠이 맞힌 수를 두 판 적어요.', toolOptions: { fields: ['1판', '2판'] }, target: { records: 2 } }, challenge: { prompt: '모둠이 맞힌 수를 네 판 적어요.', toolOptions: { fields: ['1판', '2판', '3판', '4판'] }, target: { records: 4 } } },
              conclude: '표지판을 보면 무리 → 뜻 → 할 일 차례로 떠올려요. 할 일까지 말해야 길에서 쓸 수 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 모둠이 맞힌 수를 적어요.', columns: ['1판', '2판', '3판'], cells: [['', '', '']] }] },
        notes: '표지판 그림 카드(실물 사진)는 교사가 따로 준비한다. 교구는 시간·순서·기록만 맡는다.',
      }),
      C({
        id: 'saf-traffic.e34.signrule.activity.design', type: 'activity', title: '학교 앞에 필요한 표지판',
        method: '우리 학교 앞에 필요한 표지판', tool: 'kitchen', minutes: 14,
        levels: { easy: '장소 칸 2개에 표지판 카드를 짝 지어 놓는다.', base: '장소 칸 3개에 짝 지어 놓는다.', challenge: '남는 함정 카드 1장이 섞인 판에서 짝 짓고, 표지판이 없는 곳에 무엇이 필요할지 까닭을 말한다.' },
        activity: {
          title: '학교 앞에 필요한 표지판', tool: 'kitchen',
          teacher: '"이곳에는 어떤 표지판이 있어야 안전할까요?" 장소마다 무엇이 위험한지 먼저 말하고 표지판을 고르게 한다. "표지판이 많을수록 좋아요"라는 학생에게 "표지판이 너무 많으면 운전자가 다 볼 수 있을까요? 꼭 필요한 곳에 꼭 맞는 것이 좋아요"라고 말해 준다. 다 고르면 우리 학교 앞에서 실제로 본 표지판을 떠올려 견준다.',
          task: '장소 칸에 알맞은 표지판 카드를 짝 지어 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            MATCH('학교 둘레 장소에 맞는 표지판을 놓아요.', { autoMotif: false, title: '학교 둘레' }, [['학교 정문 앞', '어린이 보호'], ['자전거만 다니는 길', '자전거 전용'], ['정문 앞 건너는 곳', '횡단보도']], '앞지르기 금지', 0.15),
            MATCH('조심할 장소에 맞는 표지판을 놓아요.', { autoMotif: false, title: '조심할 곳' }, [['비 오면 미끄러운 언덕', '미끄러운 길'], ['차가 잠깐 서야 할 골목 끝', '일시 정지'], ['길을 고치는 곳', '공사 중']], '자전거 전용', 0.2),
            MATCH('하지 말아야 할 곳에 맞는 표지판을 놓아요.', { autoMotif: false, title: '하지 말 곳' }, [['차가 들어오면 안 되는 골목', '진입 금지'], ['차를 세우면 위험한 정문 앞', '주차 금지'], ['사람만 다니는 길', '보행자 전용']], '직진', 0.25, { conclude: '표지판은 그곳의 위험에 꼭 맞게 세워요. 우리 학교 앞 표지판도 까닭이 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 학교 앞에 더 있으면 좋을 표지판과 그 까닭을 써요.' }] },
      }),
      C({
        id: 'saf-traffic.e34.signrule.wrap.table', type: 'wrap', title: '표지판 퀴즈 결과 그래프',
        method: '우리 반 표지판 퀴즈 결과', tool: 'chart', minutes: 6,
        levels: { easy: '무리 2개, 첫 막대는 미리 그려져 있다.', base: '무리 3개의 막대를 모두 그린다.', challenge: '막대그래프에서 가장 헷갈린 무리를 고른 뒤, 헷갈린 까닭을 짝과 말한다.' },
        wrap: {
          teacher: '"우리 반(가상)이 퀴즈에서 가장 많이 틀린 무리는 어디일까요?" 막대그래프를 완성하고 가장 긴 막대를 찾는다. 이 자료는 가상이라고 밝힌다. 규제가 많이 틀린 까닭을 물어(기다릴 반응: "일시 정지가 세모라서요") 예외 표지판을 다시 짚는다. 눈금 한 칸을 2로 세는 학생에게 "눈금 숫자를 다시 볼까요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'build', title: '퀴즈에서 틀린 수(가상의 우리 반)', unit: '개', xLabel: '무리', yLabel: '틀린 수', max: 8, data: MISS }, prompt: '표를 보고 무리별 틀린 수 막대그래프를 완성해요.', target: { build: true }, difficulty: 0.2,
              levels: { easy: { prompt: '표를 보고 두 무리의 막대를 그려요.', toolOptions: { data: MISS.slice(0, 2), given: [0] } } } },
            { type: 'choice', prompt: '가장 많이 틀린(헷갈린) 무리는?', options: ['주의', '규제', '지시'], answer: 1, difficulty: 0.15, explain: '규제가 7개로 가장 많이 틀렸어요.' },
            { type: 'short', prompt: '헷갈렸던 표지판 하나와 그 뜻을 써요.' },
          ],
        },
        worksheet: {
          title: '표지판 퀴즈 결과(가상)',
          items: [
            { type: 'table', prompt: '표의 빈칸을 채워요.', columns: ['무리', '틀린 수(개)'], cells: [['주의', '3'], ['규제', ''], ['지시', '5']], answer: '7' },
            { type: 'short', prompt: '다음에 헷갈리지 않으려면 무엇을 볼지 써요.' },
          ],
        },
      }),
      C({
        id: 'saf-traffic.e34.signrule.wrap.self', type: 'wrap', title: '자신 있는 표지판 고르기',
        method: '자신 있는 표지판 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '표지판 무리 하나를 3칸 척도(헷갈려요~자신 있어요)로 고른다.', base: '무리 두 개를 5칸 척도로 고른다.', challenge: '척도를 고른 뒤 헷갈리는 표지판을 짝에게 물어 고친다.' },
        wrap: {
          teacher: '"이 무리 표지판은 얼마나 자신 있나요?" 척도를 고른 뒤, 낮게 고른 학생은 짝에게 그 무리 표지판 하나를 물어보게 한다. 점수를 견주지 않고 "헷갈리는 것을 찾은 것이 오늘 공부의 반이에요"라고 말해 준다.',
          exitTicket: [
            { type: 'tool', tool: 'emotion', options: { mode: 'scale', situation: '노란 세모 주의 표지판 뜻 알기', feeling: '뿌듯함', steps: 5, scaleLabels: { 1: '헷갈려요', 5: '자신 있어요' } }, prompt: '주의 표지판은 얼마나 자신 있나요?', target: { level: 'any' }, difficulty: 0.1,
              levels: { easy: { toolOptions: { steps: 3, scaleLabels: { 1: '헷갈려요', 3: '자신 있어요' } } } } },
            { type: 'tool', tool: 'emotion', options: { mode: 'scale', situation: '빨간 테두리 규제 표지판 뜻 알기', feeling: '편안함', steps: 5, scaleLabels: { 1: '헷갈려요', 5: '자신 있어요' } }, prompt: '규제 표지판은 얼마나 자신 있나요?', target: { level: 'any' }, difficulty: 0.1,
              levels: { easy: { toolOptions: { steps: 3, scaleLabels: { 1: '헷갈려요', 3: '자신 있어요' } } } } },
            { type: 'choice', prompt: '빨간 테두리 동그라미 표지판의 뜻은?', options: ['조심하래요', '하지 말래요', '이렇게 하래요'], answer: 1, difficulty: 0.1, explain: '빨간 테두리는 하지 말라는 규제 표지예요.' },
          ],
        },
        worksheet: {
          title: '표지판의 모양과 색',
          items: [
            { type: 'table', prompt: '무리마다 아는 표지판을 하나씩 써요.', columns: ['주의', '규제', '지시'], cells: [['', '', '']] },
            { type: 'draw', prompt: '노란 세모 주의 표지판 하나를 그려요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 4학년 · 자전거 바르게 타기 (별표 2 초등 교통안전 "교통수단(자전거, 대중교통 등)의 안전한 이용법 알기")
  // ======================================================================================================
  {
    const C = T('bikeride', 4);
    // 수신호 고르기: 종이 몸은 보기만 하고(팔 칸 조작은 휴대폰 누름 영역이 작아 쓰지 않음) 보기로 고른다. 쉬움 = 보기 2개
    const ARMS = { mode: 'parts', parts: ['어깨', '팔꿈치', '손목'], readOnly: true };
    // choices[0] = 바른 보기, at = 판에 놓일 자리
    const SIG = (prompt, q, choices, at, d, more) => {
      const all = choices.slice(1); all.splice(at, 0, choices[0]);
      const two = at % 2 ? [choices[1], choices[0]] : [choices[0], choices[1]];
      return {
        prompt, toolOptions: Object.assign({}, ARMS, { ask: { q, choices: all } }), target: { pick: at }, difficulty: d,
        levels: { easy: { prompt: `${strip(prompt)}(보기 2개)`, toolOptions: { ask: { q, choices: two } }, target: { pick: at % 2 } } },
        ...more,
      };
    };
    const TL = { axis: ['먼저', '나중'] };
    const LANES = {
      title: '자전거로 가는 동네 길', grid: [6, 4],
      regions: [
        { name: '우리 집', cells: [[0, 0]] }, { name: '자전거 전용 도로', cells: [[1, 0], [2, 0], [3, 0], [4, 0]] }, { name: '공원', cells: [[5, 0]] },
        { name: '찻길', cells: [[0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1]] },
        { name: '횡단보도', cells: [[4, 2]] }, { name: '보도', cells: [[0, 2], [1, 2], [2, 2], [3, 2], [5, 2]] },
        { name: '자전거·보행자 겸용 도로', cells: [[0, 3], [1, 3], [2, 3], [3, 3]] }, { name: '도서관', cells: [[4, 3], [5, 3]] },
      ],
    };
    M.push(
      C({
        id: 'saf-traffic.e34.bikeride.intro.scene', type: 'intro', title: '자전거 장면 좋아요·위험해요',
        method: '자전거 장면 좋은 점·위험한 점', tool: 'emotion', minutes: 5,
        levels: { easy: '장면 2장이 좋아요·위험해요 칸에 하나씩 놓이는 것을 함께 본다.', base: '장면 4장이 두 칸으로 나뉘는 것을 보고 까닭을 말한다.', challenge: '위험해요 장면을 바르게 고쳐 말한다.' },
        intro: {
          teacher: '"이 친구들 가운데 바르게 타는 친구는 누구일까요?" 시연 단추로 장면 카드가 좋아요·위험해요 칸으로 나뉘는 것을 보인다. "친구와 나란히 타면 이야기할 수 있어 좋아요"라는 말이 나오면 "나란히 달리면 앞에서 오는 사람이나 차는 어디로 비켜야 할까요?"라고 되묻는다. 위험해요 장면은 어떻게 고치면 좋을지 한 가지씩 말하게 한다.',
          student: '자전거 타는 장면을 보고 좋아요와 위험해요로 나눈 뒤, 위험한 장면을 바르게 고쳐 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'sort', slots: ['좋아요', '위험해요'], cards: [{ id: 'line', text: '안전모 쓰고 한 줄로' }, { id: 'side', text: '둘이 나란히 달리기' }, { id: 'both', text: '두 손으로 핸들' }, { id: 'phone', text: '한 손에 휴대전화' }], shuffle: false }, sequence: [{ sort: { 좋아요: ['line'], 위험해요: ['phone'] } }, { sort: { 좋아요: ['line', 'both'], 위험해요: ['side', 'phone'] } }] },
          art: { draw: 'paper children riding bicycles: two side by side chatting, one holding a phone with one hand, and two riding in a single line wearing helmets', banner: '바르게 타고 있나요?', extra: [{ motif: 'sun', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      C({
        id: 'saf-traffic.e34.bikeride.intro.lanes', type: 'intro', title: '자전거 다니는 길 찾기',
        method: '자전거 다니는 길 찾기', tool: 'map', minutes: 5,
        levels: { easy: '자전거 전용 도로·겸용 도로에 핀이 꽂히는 것을 함께 본다.', base: '전용 도로·겸용 도로·횡단보도 세 곳에 핀이 꽂히는 것을 보고 길마다 다른 점을 말한다.', challenge: '집에서 도서관까지 가는 길에서 자전거에서 내려야 할 칸을 찾아 말한다.' },
        intro: {
          teacher: '"자전거는 어느 길로 다닐까요?" 시연 단추로 자전거 전용 도로, 자전거·보행자 겸용 도로, 횡단보도에 차례로 핀이 꽂히는 것을 보인다. 겸용 도로에서는 걷는 사람이 먼저라는 것, 횡단보도에서는 내려서 끌고 건넌다는 것을 말한다. "자전거는 횡단보도를 타고 건너도 돼요"라는 말이 나오면 "횡단보도는 누구를 위한 길일까요? 타고 건너면 걷는 사람과 차에게 어떤 일이 생길까요?"라고 되묻는다.',
          student: '동네 지도에서 자전거가 다니는 길을 찾고, 자전거에서 내려야 할 곳을 짝과 말해 보아요.',
          demo: { tool: 'map', options: LANES, sequence: [{ pin: [2, 0] }, { pin: [1, 3] }, { pin: [4, 2] }] },
          art: { draw: 'a paper cut map with a green paper bicycle lane, a shared path with walking people and a striped crosswalk where a child walks a bicycle', banner: '자전거 길은 어디?', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
        },
      }),
      C({
        id: 'saf-traffic.e34.bikeride.activity.signals', type: 'activity', title: '수신호 몸으로 익히기',
        method: '수신호 몸으로 익히기', tool: 'body', minutes: 15,
        levels: { easy: '수신호 세 가지를 보기 2개 가운데 고르고 선생님을 따라 한다.', base: '수신호 세 가지(왼쪽·오른쪽·멈춤)를 보기 3개 가운데 고르고 짝과 따라 한다.', challenge: '보기 3개 가운데 고른 뒤, 짝이 몸으로 한 수신호를 보고 뜻을 맞힌다.' },
        activity: {
          title: '수신호 몸으로 익히기', tool: 'body',
          teacher: '"자전거는 깜박이가 없어요. 돌거나 멈출 때 뒤 사람에게 어떻게 알릴까요?" 문항마다 종이 팔을 움직인 뒤 모두 일어나 왼팔로 따라 한다(왼쪽: 왼팔을 옆으로 쭉, 오른쪽: 왼팔을 굽혀 손을 위로, 멈춤: 팔을 비스듬히 아래로). "손을 놓으면 위험하니 수신호는 안 해요"라는 학생에게 "그래서 멈춰 있을 때나 천천히 갈 때 잠깐만 해요. 수신호를 안 하면 뒤 사람은 내가 돌 줄 알까요?"라고 묻는다. 수신호는 넓고 차 없는 곳에서 어른과 먼저 연습한다고 말한다.',
          task: '수신호 보기를 고르고, 일어나서 왼팔로 따라 해 보아요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            SIG('왼쪽으로 돈다는 수신호는 무엇일까요?', '왼쪽으로 돌 때는?', ['왼팔을 옆으로 쭉 펴요', '두 손을 흔들어요', '손뼉을 쳐요'], 0, 0.15),
            SIG('오른쪽으로 돈다는 수신호는 무엇일까요?', '오른쪽으로 돌 때는?', ['왼팔을 굽혀 손을 위로', '발을 굴러요', '고개를 끄덕여요'], 1, 0.2),
            SIG('멈춘다는 수신호는 무엇일까요?', '멈출 때는?', ['팔을 비스듬히 아래로', '두 팔을 위로 흔들어요', '손뼉을 쳐요'], 2, 0.2, { conclude: '수신호로 뒤 사람에게 내가 할 일을 미리 알려요. 왼쪽은 쭉, 오른쪽은 굽혀 위로, 멈춤은 비스듬히 아래로예요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '자전거로 왼쪽으로 돌 때 수신호는?', options: ['왼팔을 옆으로 쭉', '두 손을 흔들기', '손뼉 치기'], answer: '왼팔을 옆으로 쭉' }] },
        notes: '계획은 종이 몸 팔 자세 고르기였으나, 팔 굽히기 칸은 휴대폰 누름 영역(44px)을 채우지 못해 보기 고르기로 바꿨다. 수신호 모양은 교사가 몸으로 보이고 학생이 따라 한다.',
      }),
      C({
        id: 'saf-traffic.e34.bikeride.activity.match', type: 'activity', title: '길마다 지킬 일 잇기',
        method: '길마다 지킬 일 잇기', tool: 'mindmap', minutes: 14,
        levels: { easy: '가지 2개에 지킬 일 카드를 잇는다.', base: '가지 3개에 지킬 일 카드를 잇는다.', challenge: '남는 함정 카드(횡단보도 타고 건너기 등) 1장이 섞인 판에서 잇고, 그 카드가 왜 틀렸는지 말한다.' },
        activity: {
          title: '길마다 지킬 일 잇기', tool: 'mindmap',
          teacher: '"자전거로 이 길을 지날 때 지킬 일은 무엇일까요?" 카드를 이을 때마다 그 길에서 함께 다니는 사람이 누구인지 먼저 말하게 한다. "보도에서는 빨리 달려도 돼요"라는 학생에게 "보도에는 누가 걷고 있나요? 갑자기 아이가 뛰어나오면 멈출 수 있을까요?"라고 묻는다. 함정 카드가 남으면 그 행동이 왜 위험한지 짝과 말하게 한다.',
          task: '자전거로 지나는 길 가지에 알맞은 지킬 일 카드를 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            MATCH('자전거로 지나는 길에 지킬 일을 이어요.', { topic: '자전거로 갈 때' }, [['자전거 전용 도로', '한 줄로 오른쪽'], ['보도·겸용 도로', '천천히, 사람 먼저'], ['횡단보도', '내려서 끌고 건너요']], '타고 빨리 건너요', 0.15),
            MATCH('이럴 때 지킬 일을 이어요.', { topic: '이럴 땐' }, [['앞에 걷는 사람', '속도를 줄여요'], ['골목에서 큰길로', '멈춰서 좌우 봐요'], ['친구와 함께', '한 줄로 달려요']], '나란히 달려요', 0.2),
            MATCH('타는 자세에 지킬 일을 이어요.', { topic: '타는 자세' }, [['핸들 잡기', '두 손으로 꼭'], ['귀', '이어폰은 빼요'], ['눈', '앞을 보며 달려요']], '한 손에 휴대전화', 0.25, { conclude: '길마다 함께 다니는 사람이 달라요. 전용 도로는 한 줄로, 보도는 천천히, 횡단보도는 내려서 끌고 건너요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '길마다 지킬 일을 써요.', columns: ['길', '지킬 일'], cells: [['보도·겸용 도로', ''], ['횡단보도', '']], answer: '천천히, 사람 먼저 / 내려서 끌고 건너요' }] },
      }),
      C({
        id: 'saf-traffic.e34.bikeride.activity.choose', type: 'activity', title: '갈림길: 친구와 나란히 달릴까',
        method: '친구와 나란히 달릴까', tool: 'dilemma', minutes: 15,
        levels: { easy: '갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '갈림 2번, 보기 3개씩 고르며 결과를 따라간다.', challenge: '갈림 2번을 지난 뒤 근거 카드 3장 가운데 알맞은 두 장을 고른다.' },
        activity: {
          title: '갈림길: 친구와 자전거를 탈 때', tool: 'dilemma',
          teacher: '"친구와 이야기하고 싶을 때 나란히 달리면 어떤 일이 생길까요?" 보기를 고를 때마다 결과를 소리 내어 읽고, 누가 비켜야 하는지 짝과 말하게 한다. "이어폰을 끼고 타도 앞은 보이니까 괜찮아요"라는 학생에게 "뒤에서 오는 자전거의 종소리나 차 소리는 어떻게 알아챌까요?"라고 묻는다. 이야기는 멈춰서 하면 된다는 것을 짚는다.',
          task: '장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('친구가 나란히 달리며 이야기하재요.', {
              text: '겸용 도로에서 친구가 "나란히 달리면서 이야기하자"고 해요.', motif: 'sun',
              choices: [
                { id: 'side', text: '나란히 달리며 이야기한다', result: '길을 다 차지해 걷는 사람이 비켜섰어요.', impact: [{ who: '걷는 사람', text: '부딪힐 뻔했어요', tone: -1 }] },
                { id: 'line', text: '한 줄로 달리자고 한다', result: '친구가 내 뒤를 따라 한 줄로 달렸어요.', ending: '한 줄로 달려 길을 나눠 썼어요.', next: {
                  text: '앞에서 유모차를 민 사람이 걸어와요.', choices: [
                    { id: 'slow', text: '속도를 줄이고 비켜 간다', result: '천천히 옆으로 비켜 안전하게 지났어요.', impact: [{ who: '걷는 사람', text: '편안해요', tone: 1 }], ending: '사람이 먼저인 길에서 속도를 줄여 비켰어요.' },
                    { id: 'bell', text: '종을 계속 울리며 지나간다', result: '깜짝 놀란 사람이 휘청했어요.', impact: [{ who: '걷는 사람', text: '놀랐어요', tone: -1 }] },
                    { id: 'fast', text: '빨리 사이로 빠져나간다', result: '유모차와 아주 가깝게 스쳤어요.', impact: [{ who: '아기와 어른', text: '다칠 수 있어요', tone: -1 }] },
                  ] } },
                { id: 'race', text: '누가 빠른지 내기한다', result: '속도를 내다 길모퉁이에서 넘어질 뻔했어요.', impact: [{ who: '나와 친구', text: '다칠 수 있어요', tone: -1 }] },
              ] }, [['line', 'slow']],
            [{ id: 'share', text: '한 줄로 가야 길을 나눠 써서' }, { id: 'first', text: '걷는 사람이 먼저라서' }, { id: 'talk', text: '이야기가 더 재미있어서', why: '이야기는 멈춰서 해도 돼요. 달릴 때는 안전이 먼저예요.' }], ['share', 'first'], 0.2),
            DIL('친구가 이어폰 한쪽을 빌려줬어요.', {
              text: '자전거를 타려는데 친구가 "같이 노래 듣자"며 이어폰 한쪽을 줘요.', motif: 'star',
              choices: [
                { id: 'wear', text: '끼고 탄다', result: '뒤에서 울린 종소리를 못 들었어요.', impact: [{ who: '나', text: '부딪힐 뻔했어요', tone: -1 }] },
                { id: 'no', text: '"탈 때는 빼자"고 한다', result: '친구가 이어폰을 주머니에 넣었어요.', ending: '소리를 들을 수 있게 이어폰을 뺐어요.', next: {
                  text: '친구가 "그럼 휴대전화로 노래를 크게 틀자"고 해요.', choices: [
                    { id: 'stopnext', text: '도착해서 듣자고 한다', result: '도착해서 쉬며 함께 노래를 들었어요.', impact: [{ who: '나와 친구', text: '안전하게 즐겼어요', tone: 1 }], ending: '탈 때는 둘레 소리를 듣고, 노래는 도착해서 들었어요.' },
                    { id: 'hand', text: '한 손에 휴대전화를 든다', result: '한 손으로 핸들을 잡다 휘청했어요.', impact: [{ who: '나', text: '넘어질 수 있어요', tone: -1 }] },
                    { id: 'loud', text: '크게 틀고 달린다', result: '차 소리가 노래에 묻혔어요.', impact: [{ who: '나와 친구', text: '위험해요', tone: -1 }] },
                  ] } },
                { id: 'both', text: '두 쪽 다 끼고 탄다', result: '둘레 소리가 하나도 안 들렸어요.', impact: [{ who: '나', text: '아주 위험해요', tone: -1 }] },
              ] }, [['no', 'stopnext']],
            [{ id: 'hear', text: '둘레 소리를 들어야 피해서' }, { id: 'hands', text: '두 손으로 핸들을 잡아야 해서' }, { id: 'one', text: '한쪽만 끼면 괜찮아서', why: '한쪽만 껴도 소리를 놓칠 수 있어요.' }], ['hear', 'hands'], 0.25),
            DIL('친구가 횡단보도를 타고 건너재요.', {
              text: '횡단보도 초록불이에요. 친구가 "내리기 귀찮아, 타고 건너자"고 해요.', motif: 'flower',
              choices: [
                { id: 'ride', text: '타고 건넌다', result: '걷는 사람 사이로 지나다 부딪힐 뻔했어요.', impact: [{ who: '걷는 사람', text: '다칠 수 있어요', tone: -1 }] },
                { id: 'walk', text: '내려서 끌고 건너자고 한다', result: '둘 다 내려 자전거를 끌었어요.', ending: '내려서 끌고 건너 걷는 사람과 함께 건넜어요.', next: {
                  text: '건너편에 닿았어요. 바로 다시 탈까요?', choices: [
                    { id: 'look', text: '보도에서 둘레를 보고 탄다', result: '사람이 없는 것을 보고 천천히 출발했어요.', impact: [{ who: '나와 친구', text: '안전하게 출발했어요', tone: 1 }], ending: '건넌 뒤 둘레를 살피고 다시 탔어요.' },
                    { id: 'jump', text: '횡단보도 끝에서 바로 올라탄다', result: '뒤에 오던 사람과 엉켰어요.', impact: [{ who: '뒤 사람', text: '부딪힐 뻔했어요', tone: -1 }] },
                    { id: 'race', text: '먼저 타는 사람이 이기기', result: '서두르다 넘어질 뻔했어요.', impact: [{ who: '나', text: '다칠 수 있어요', tone: -1 }] },
                  ] } },
                { id: 'alone', text: '친구만 먼저 타고 보낸다', result: '친구 혼자 타고 건너다 차가 급히 섰어요.', impact: [{ who: '친구', text: '다칠 수 있어요', tone: -1 }] },
              ] }, [['walk', 'look']],
            [{ id: 'walker', text: '횡단보도는 걷는 사람 길이라서' }, { id: 'look', text: '다시 탈 때도 둘레를 봐야 해서' }, { id: 'lazy', text: '내리면 귀찮아서', why: '귀찮아도 횡단보도에서는 내려서 끌어요.' }], ['walker', 'look'], 0.3, { conclude: '자전거는 한 줄로, 두 손으로, 소리를 들으며 타요. 횡단보도에서는 내려서 끌고 건너요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '자전거로 횡단보도를 건널 때는 ___ 끌고 건너요.', answer: '내려서' }] },
      }),
      C({
        id: 'saf-traffic.e34.bikeride.activity.cross', type: 'activity', title: '자전거로 횡단보도 건너는 차례',
        method: '횡단보도 건너는 차례', tool: 'timeline', minutes: 14,
        levels: { easy: '카드 3장, 놓으면 바로 맞는지 알려 준다.', base: '카드 4~5장을 차례대로 놓은 뒤 확인한다.', challenge: '틀린 카드 1장이 섞인 판에서 그것을 빼고 바른 차례로 고친다.' },
        activity: {
          title: '자전거로 횡단보도 건너는 차례', tool: 'timeline',
          teacher: '"횡단보도에 닿으면 맨 먼저 무엇을 할까요?" 카드를 다 놓으면 교실 바닥 테이프 횡단보도에서 자전거를 끄는 흉내로 차례를 따라 한다. "내리는 건 건너는 중에 해도 돼요"라는 학생에게 "횡단보도 가운데에서 내리면 뒤에 오는 사람은 어떻게 될까요?"라고 묻는다. 건넌 뒤에도 둘레를 살피고 다시 탄다는 것을 짚는다.',
          task: '카드를 하는 차례대로 시간 띠에 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORD('자전거로 횡단보도를 건너는 차례로 놓아요.', TL, [{ id: 'stop', text: '앞에서 멈춰요' }, { id: 'off', text: '자전거에서 내려요' }, { id: 'push', text: '끌고 가요' }, { id: 'look', text: '좌우 살피며 건너요' }, { id: 'ride', text: '건넌 뒤 다시 타요' }], [0, 1, 3], { id: 'pedal', text: '타고 그대로 건너요', why: '횡단보도는 걷는 사람 길이라 내려서 끌어요.' }, 0.15),
            ORD('보도에 사람이 많을 때 차례로 놓아요.', TL, [{ id: 'see', text: '사람이 많아요' }, { id: 'slow', text: '속도를 줄여요' }, { id: 'off', text: '내려서 끌어요' }, { id: 'pass', text: '사람 사이 지나요' }, { id: 'again', text: '한산하면 타요' }], [0, 1, 2], { id: 'zig', text: '사이사이로 달려요', why: '사람 사이를 달리면 부딪히기 쉬워요.' }, 0.2),
            ORD('골목에서 큰길로 나갈 때 차례로 놓아요.', TL, [{ id: 'stop', text: '골목 끝에서 멈춰요' }, { id: 'look', text: '좌우를 봐요' }, { id: 'sign', text: '수신호를 해요' }, { id: 'go', text: '천천히 나가요' }], [0, 1, 3], { id: 'rush', text: '멈추지 않고 나가요', why: '골목 끝에서 멈추지 않으면 큰길 차와 부딪힐 수 있어요.' }, 0.25, { conclude: '자전거로 건널 때는 멈추고, 내리고, 끌고, 살피며 건넌 뒤 다시 타요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '건너는 차례대로 번호를 써요.', columns: ['할 일', '차례'], cells: [['자전거에서 내려요', ''], ['앞에서 멈춰요', ''], ['끌고 가요', '']], answer: '2, 1, 3' }] },
      }),
      C({
        id: 'saf-traffic.e34.bikeride.wrap.self', type: 'wrap', title: '자전거 스스로 점검',
        method: '자전거 스스로 점검', tool: 'timer', minutes: 6,
        levels: { easy: '점검 칸 2개에 표시한다.', base: '점검 칸 3개에 표시한다.', challenge: '점검 칸 4개에 표시하고 지키기 어려운 것과 까닭을 말한다.' },
        wrap: {
          teacher: '"자전거를 탈 때 내가 지키는 것에 정직하게 표시해요." 점검 칸을 함께 읽는다. 자전거가 없는 학생은 탈 때 지킬 것을 고르게 한다. 지키기 어려운 칸을 말한 학생에게 "어떤 때 어려워요? 그때 무엇을 바꿔 볼까요?"라고 묻는다. 출구 2번에서 \'타고 건너요\'를 고른 학생에게 오늘 만든 차례를 다시 떠올리게 한다.',
          exitTicket: [
            SELF('자전거 점검', ['안전모를 써요', '한 줄로 달려요', '두 손으로 핸들', '횡단보도는 내려 끌어요'], '자전거를 탈 때 지키는 것에 표시해요.'),
            { type: 'choice', prompt: '자전거로 횡단보도를 건널 때는?', options: ['타고 빨리 건너요', '내려서 끌고 건너요', '한 손으로 건너요'], answer: 1, difficulty: 0.1, explain: '횡단보도는 걷는 사람 길이라 내려서 끌고 건너요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '자전거 바르게 타기',
          items: [
            { type: 'check', prompt: '자전거를 탈 때 지킬 것에 표시해요.', options: ['안전모', '한 줄로', '두 손으로', '이어폰 빼기'] },
            { type: 'short', prompt: '지키기 어려운 것과 바꿀 방법을 써요.' },
          ],
          easy: { note: '안전모·한 줄·두 손·내려 끌기를 떠올려요.', items: [{ type: 'choice', prompt: '핸들은 몇 손으로?', options: ['두 손', '한 손'], answer: '두 손' }] },
        },
      }),
      C({
        id: 'saf-traffic.e34.bikeride.wrap.tale', type: 'wrap', title: '자전거 약속 말풍선',
        method: '자전거 약속 말풍선', tool: 'story', minutes: 6,
        levels: { easy: '말풍선 빈칸 1개를 채운다.', base: '말풍선 빈칸 2개를 채운다.', challenge: '말풍선 빈칸 3개를 채운다.' },
        wrap: {
          teacher: '"자전거를 처음 타는 동생에게 무엇을 알려 줄까요?" 말풍선을 채운 뒤 짝에게 동생에게 말하듯 읽어 주게 한다. 출구 2번에서 \'한쪽만 끼면 돼요\'를 고른 학생에게 "한쪽 귀로 노래를 들으면 뒤의 종소리를 잘 들을 수 있을까요?"라고 되묻는다.',
          exitTicket: [
            EX('story', FILL('동생에게 알려 주는 자전거 약속을 채워요.', '나', [['횡단보도에서는 ___.', '내려서 끌어요'], ['이어폰은 ___.', '빼고 타요'], ['핸들은 ___ 잡아요.', '두 손으로']], ['타고 건너요', '한쪽만 껴요'], 0.15)),
            { type: 'choice', prompt: '자전거를 탈 때 이어폰은?', options: ['한쪽만 끼면 돼요', '빼고 타요', '두 쪽 다 껴요'], answer: 1, difficulty: 0.1, explain: '둘레 소리를 들어야 종소리와 차 소리를 알아채요.' },
            { type: 'short', prompt: '동생에게 알려 줄 자전거 약속을 하나 더 써요.' },
          ],
        },
        worksheet: {
          title: '자전거 약속',
          items: [
            { type: 'blank', prompt: '말풍선을 채워요.', text: '"자전거로 횡단보도에서는 ___ 끌어요."', answer: '내려서' },
            { type: 'draw', prompt: '횡단보도에서 자전거를 끌고 건너는 내 모습을 그려요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 4학년 · 날씨와 밤에 달라지는 길 (별표 2 초등 교통안전 "안전한 통학로 알기")
  // ======================================================================================================
  {
    const C = T('weather', 4);
    const TL = {};
    const FEEL = [['맑은 날', 2], ['비 오는 날', 11], ['눈 오는 날', 8]];
    const PIC = { type: 'picture', title: '등굣길이 위험하다고 느낀 친구(가상의 우리 반)', unit: '명', xLabel: '날씨', yLabel: '친구 수', icons: PEOPLE, icon: 'person' };
    const NIGHT = {
      title: '학원에서 집으로 가는 밤길', grid: [6, 4],
      regions: [
        { name: '학원', cells: [[0, 0]] }, { name: '가로등 길', cells: [[1, 0], [2, 0], [3, 0], [4, 0]] }, { name: '가게 앞 밝은 길', cells: [[5, 0], [5, 1]] },
        { name: '공사장 옆 골목', cells: [[0, 1], [1, 1], [0, 2]] }, { name: '어두운 공원 길', cells: [[2, 1], [3, 1], [1, 2], [2, 2], [3, 2]] }, { name: '찻길', cells: [[4, 1], [4, 2]] },
        { name: '신호등 횡단보도', cells: [[5, 2]] }, { name: '굴다리 아래', cells: [[0, 3], [1, 3], [2, 3]] }, { name: '아파트 앞 보도', cells: [[3, 3], [4, 3]] }, { name: '우리 집', cells: [[5, 3]] },
      ],
    };
    M.push(
      C({
        id: 'saf-traffic.e34.weather.intro.see', type: 'intro', title: '운전석에서 본 비 오는 길',
        method: '운전석에서 본 비 오는 길', tool: 'emotion', minutes: 5,
        levels: { easy: '그림 2장(맑은 낮·비 오는 밤)에 잘 보이는 정도 카드가 짝 지어지는 것을 함께 본다.', base: '그림 3장(안개 포함)에 짝 지어지는 것을 보고 찾기 어려운 까닭을 말한다.', challenge: '잘 보이려면 내가 무엇을 바꿀지 말한다.' },
        intro: {
          teacher: '"운전석에서 앞을 보면 길가의 아이가 어디 있는지 보일까요?" 맑은 낮·비 오는 밤·안개 낀 아침 그림을 보이고, 시연 단추로 \'잘 보여요 / 잘 안 보여요 / 거의 안 보여요\'가 짝 지어지는 것을 보인다. "내가 차 불빛을 보면 운전자도 나를 봐요"라는 말이 나오면 "밝은 불빛을 보는 나와 어두운 옷을 입은 나를 찾는 운전자, 누가 더 잘 볼까요?"라고 되묻는다.',
          student: '날씨마다 운전석에서 아이가 얼마나 잘 보이는지 짝 짓고, 잘 안 보이는 까닭을 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'sunny', label: '맑은 낮 운전석' }, { id: 'rain', label: '비 오는 밤 운전석' }, { id: 'fog', label: '안개 낀 아침 운전석' }], cards: ['거의 안 보여요', '잘 보여요', '잘 안 보여요'] }, sequence: [{ match: { sunny: '잘 보여요', rain: '잘 안 보여요' } }, { match: { sunny: '잘 보여요', rain: '잘 안 보여요', fog: '거의 안 보여요' } }] },
          art: { draw: 'two paper cut views through a car windshield side by side: a sunny street with a child clearly visible, and a rainy night street where a child in dark clothes is hard to see behind wiper streaks', banner: '운전자 눈에는?', extra: [{ motif: 'rain', x: 300, y: 96 }] },
        },
      }),
      C({
        id: 'saf-traffic.e34.weather.intro.chart', type: 'intro', title: '날씨별 등굣길 느낌 그래프',
        method: '날씨별 등굣길 느낌 표', tool: 'chart', minutes: 5,
        levels: { easy: '그림그래프에서 가장 많은 날씨가 골라지는 것을 함께 본다.', base: '세 날씨의 그림 수를 함께 세며 가장 많은 날씨를 찾는다.', challenge: '가장 많은 날씨에 위험하다고 느끼는 까닭을 짝과 말한다.' },
        intro: {
          teacher: '"우리 반(가상) 친구들은 어느 날씨에 등굣길이 가장 위험하다고 느꼈을까요?" 그림그래프의 줄마다 그림을 함께 센 뒤, 시연 단추로 \'비 오는 날\'이 골라지는 것을 보인다. 이 자료는 가상이라고 밝힌다. "비 오는 날도 차는 똑같이 멈춰요"라는 말이 나오면 "젖은 바닥에서 뛰다 멈추면 내 발은 바로 서나요?"라고 되묻는다.',
          student: '그래프에서 등굣길이 위험하다고 느낀 친구가 가장 많은 날씨를 찾고, 왜 그럴지 말해 보아요.',
          demo: { tool: 'chart', options: Object.assign({}, PIC, { mode: 'read', data: FEEL, question: '가장 많은 날씨는?', choices: ['맑은 날', '비 오는 날', '눈 오는 날'] }), sequence: [{ pick: 1 }] },
          art: { draw: 'a paper picture graph with rows of small paper people under a sun, a rain cloud and a snowflake, the rain row being the longest', banner: '언제 더 위험할까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '그래프 자료는 가상이다.',
      }),
      C({
        id: 'saf-traffic.e34.weather.activity.brake', type: 'activity', title: '빗길에서 차가 멈추는 이야기',
        method: '빗길에서 차가 멈추는 이야기', tool: 'story', minutes: 15,
        levels: { easy: '첫 문항은 장면 3장, 말풍선 문항은 빈칸 1개를 채운다.', base: '장면 4장을 차례로 놓고, 말풍선 빈칸 2개를 채운다.', challenge: '틀린 장면 1장을 빼고 놓고, 눈 오는 날 장면까지 말풍선 빈칸 3개를 채운다.' },
        activity: {
          title: '빗길에서 차가 멈추는 이야기', tool: 'story',
          teacher: '"비 오는 날 차가 브레이크를 밟으면 바로 설까요?" 장면을 차례로 놓은 뒤, 교실에서 젖은 걸레 위와 마른 바닥에서 장난감 차를 같은 힘으로 밀어 미끄러지는 거리를 견주어 보인다(교사만 시연). "비 오는 날도 차는 똑같이 멈춰요"라는 학생에게 "젖은 길에서는 조금 더 미끄러져 가요. 그러면 나는 차가 어떻게 된 걸 보고 건너야 할까요?"라고 묻는다.',
          task: '빗길 장면을 차례로 놓고, 아이 말풍선의 빈칸을 채워요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORD('빗길에서 차가 멈추는 장면을 차례로 놓아요.', TL, [{ id: 'rain', text: '비로 길이 젖었어요' }, { id: 'brake', text: '브레이크를 밟아요' }, { id: 'slide', text: '조금 더 미끄러져요' }, { id: 'stop', text: '겨우 멈췄어요' }], [0, 1, 3], { id: 'instant', text: '그 자리에 바로 서요', why: '젖은 길에서는 바로 서지 못하고 더 미끄러져 가요.' }, 0.15),
            FILL('빗길 횡단보도에서 아이 말풍선을 채워요.', '나', [['차가 ___ 서는 걸 보고 건너요.', '완전히'], ['빗길에서는 차가 ___ 가요.', '더 미끄러져'], ['우산은 ___ 들어요.', '앞이 보이게']], ['조금만', '깊게 숙여'], 0.2),
            FILL('눈 오는 날 아이 말풍선을 채워요.', ['나', '친구', '나'], [['눈길에서는 ___ 걸어요.', '천천히'], ['차가 ___ 수 있어.', '못 멈출'], ['차가 멀리 있어도 ___.', '기다리자']], ['뛰어서', '빨리 가자'], 0.25, { conclude: '비·눈 오는 날은 차가 서는 데 더 오래 걸려요. 차가 완전히 선 것을 보고 건너요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '비 오는 날은 차가 ___ 선 것을 보고 건너요.', answer: '완전히' }] },
        notes: '장난감 차 견주기는 교사만 시연하고 미끄러운 바닥은 바로 닦는다.',
      }),
      C({
        id: 'saf-traffic.e34.weather.activity.dress', type: 'activity', title: '날씨별 차림 고르기',
        method: '날씨별 차림 고르기', tool: 'kitchen', minutes: 14,
        levels: { easy: '칸 2개(비 오는 날·밤)에 차림 카드를 놓는다.', base: '칸 3개(비·밤·눈)에 차림 카드 6장을 놓는다.', challenge: '카드 9장을 놓고, 여러 칸에 다 맞을 것 같은 카드의 까닭을 말한다.' },
        activity: {
          title: '날씨별 차림 고르기', tool: 'kitchen',
          teacher: '"이 차림은 비 오는 날에 가장 쓸모 있을까요, 밤에 가장 쓸모 있을까요, 눈 오는 날에 가장 쓸모 있을까요?" 카드마다 운전자에게 내가 잘 보이게 하는지, 내가 잘 보게 하는지, 미끄러지지 않게 하는지 먼저 말하게 한다. "우산을 깊게 쓰면 비를 안 맞아 안전해요"라는 학생에게 "우산을 깊게 쓰면 앞에서 오는 차가 보일까요?"라고 묻는다. 밝은 옷처럼 여러 칸에 다 쓸모 있는 카드는 짝과 까닭을 말하게 한다.',
          task: '차림 카드를 가장 쓸모 있는 날씨 칸에 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORT('차림 카드를 날씨 칸에 놓아요.', { autoMotif: false, title: '날씨별 차림' }, ['비 오는 날', '밤', '눈 오는 날'], [['투명 우산', '밝은 비옷'], ['반사띠', '작은 손전등'], ['미끄럼 덜한 신발', '장갑 끼기']], [['장화'], ['밝은 가방 덮개'], ['털모자 귀 열기']], 0.15),
            SORT('날씨마다 걷는 법을 칸에 놓아요.', { autoMotif: false, title: '날씨별 걷는 법' }, ['비 오는 날', '밤', '눈 오는 날'], [['웅덩이 돌아가기', '우산 앞 들기'], ['밝은 길로 가기', '가로등 아래 기다리기'], ['보폭 작게 걷기', '얼음 위 피하기']], [['물 튀김 피하기'], ['어두운 골목 피하기'], ['주머니 손 빼기']], 0.2),
            SORT('날씨마다 미리 할 일을 칸에 놓아요.', { autoMotif: false, title: '날씨별 미리 할 일' }, ['비 오는 날', '밤', '눈 오는 날'], [['투명 우산 챙기기', '젖은 신발 갈기'], ['가족에게 알리기', '반사띠 달기'], ['일찍 나서기', '계단 손잡이']], [['비옷 꺼내 두기'], ['함께 갈 사람 정하기'], ['신발 바닥 보기']], 0.25, { conclude: '비 오는 날은 앞을 보고, 밤에는 나를 보이게, 눈 오는 날은 미끄러지지 않게 차려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '밤에 걸을 때 운전자가 나를 잘 보게 하는 것은?', options: ['검은 옷', '반사띠', '깊게 쓴 모자'], answer: '반사띠' }] },
      }),
      C({
        id: 'saf-traffic.e34.weather.activity.route', type: 'activity', title: '밤길 밝은 길 고르기',
        method: '밤길 밝은 길 고르기', tool: 'map', minutes: 15,
        levels: { easy: '핀을 놓으면 그 칸의 이름이 바로 보인다.', base: '지도의 이름을 보고 밝은 길·피할 곳에 하나씩 핀을 꽂는다.', challenge: '핀마다 까닭도 보기에서 고르고, 빠른 길과 밝은 길이 다를 때 고른 까닭을 말한다.' },
        activity: {
          title: '밤길 밝은 길 고르기', tool: 'map',
          teacher: '"학원이 끝나 밤이 되었어요. 어느 길로 집에 갈까요?" 핀을 꽂기 전에 손가락으로 학원에서 집까지 길을 두세 가지 따라가 보게 한다. "공원 길로 가로지르면 빨라요"라는 학생에게 "어두운 공원 길에서는 운전자도, 둘레 어른도 나를 잘 볼 수 있을까요?"라고 묻는다. 밤에는 조금 돌아가도 밝고 사람이 다니는 길로 간다는 것을 짚는다.',
          task: '밤길 지도에서 물음에 맞는 곳에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            PIN(NIGHT, '학원에서 나와 먼저 걸을 밝은 길에 핀을 꽂아요.', '가로등 길', { q: '왜 이 길로 갈까요?', choices: ['가장 짧아서', '조용해서', '밝아서 서로 잘 보여요'], answer: 2 }, 0.15),
            PIN(NIGHT, '빨라도 밤에는 피할 곳에 핀을 꽂아요.', '어두운 공원 길', { q: '왜 피할까요?', choices: ['어두워 잘 안 보여요', '나무가 많아요', '길이 넓어요'], answer: 0 }, 0.2),
            PIN(NIGHT, '찻길을 건널 곳에 핀을 꽂아요.', '신호등 횡단보도', { q: '왜 여기서 건널까요?', choices: ['차가 빨라서', '신호등이 있고 밝아서', '아무 데나 같아서'], answer: 1 }, 0.2),
            PIN(NIGHT, '건넌 뒤 집까지 걸을 곳에 핀을 꽂아요.', '아파트 앞 보도', { q: '왜 굴다리 대신 이 길일까요?', choices: ['더 어두워요', '물이 고여요', '밝고 사람이 다녀요'], answer: 2 }, 0.25, { conclude: '밤에는 조금 돌아가도 밝고 사람이 다니는 길로, 신호등이 있는 곳에서 건너요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '밤에 집에 갈 때 고를 길은?', options: ['어두운 지름길', '밝은 가로등 길', '공사장 옆 골목'], answer: '밝은 가로등 길' }] },
      }),
      C({
        id: 'saf-traffic.e34.weather.activity.time', type: 'activity', title: '눈 오는 날 출발 시각',
        method: '눈 오는 날 출발 시각', tool: 'clock', minutes: 14,
        levels: { easy: '긴바늘이 30분 단위로 맞춰지고 짧은바늘 자리가 연하게 보인다(시각도 30분 단위).', base: '10분 단위로 시각을 나타낸다.', challenge: '5분 단위로, 작은 눈금 없이 나타내고 두 경우의 차이를 말한다.' },
        activity: {
          title: '눈 오는 날 출발 시각', tool: 'clock',
          teacher: '"평소보다 천천히 걸으면 몇 분 더 걸릴까요? 그럼 몇 시에 나서야 뛰지 않을까요?" 그림으로 준 걸리는 시간(평소 20분, 눈 오는 날 30분 — 연습용 값)을 칠판에 적고 거꾸로 세게 한다. "늦으면 뛰면 돼요"라는 학생에게 "눈길에서 뛰면 어떻게 될까요? 뛰지 않으려면 언제 나서야 할까요?"라고 묻는다.',
          task: '물음에 맞는 출발 시각을 시계 바늘로 나타내요.', levels: { easy: { minuteStep: 30, hourZone: true }, base: { minuteStep: 10 }, challenge: { minuteStep: 5, showMinuteMarks: false } },
          items: [
            { prompt: '평소 집에서 나서는 8시 20분을 시계에 나타내요.', toolOptions: {}, target: { h: 8, m: 20 }, difficulty: 0.1,
              levels: { easy: { prompt: '평소 집에서 나서는 8시 30분을 시계에 나타내요.', target: { h: 8, m: 30 } }, challenge: { prompt: '평소 집에서 나서는 8시 25분을 시계에 나타내요.', target: { h: 8, m: 25 } } } },
            { prompt: '눈 오는 날은 10분 더 걸려요. 8시 20분보다 10분 일찍을 나타내요.', toolOptions: {}, target: { h: 8, m: 10 }, difficulty: 0.25,
              levels: { easy: { prompt: '눈 오는 날은 30분 일찍, 8시에 나서요. 시계에 나타내요.', target: { h: 8, m: 0 } }, challenge: { prompt: '눈 오는 날은 15분 더 걸려요. 8시 25분보다 15분 일찍을 나타내요.', target: { h: 8, m: 10 } } } },
            { prompt: '눈이 많이 와 20분 더 걸려요. 8시 20분보다 20분 일찍을 나타내요.', toolOptions: {}, target: { h: 8, m: 0 }, difficulty: 0.3,
              levels: { easy: { prompt: '눈이 많이 와 1시간 일찍, 7시 30분에 나서요.', target: { h: 7, m: 30 } }, challenge: { prompt: '눈이 많이 와 25분 더 걸려요. 8시 25분보다 25분 일찍을 나타내요.', target: { h: 8, m: 0 } } },
              conclude: '눈·비 오는 날은 걸리는 시간이 늘어요. 거꾸로 세어 일찍 나서면 뛰지 않고 갈 수 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '나서는 시각을 써요(연습용 값).', columns: ['날', '걸리는 시간', '나서는 시각'], cells: [['맑은 날', '20분', '8시 20분'], ['눈 오는 날', '30분', '']], answer: '8시 10분' }] },
        notes: '걸리는 시간과 시각은 연습용 값이다.',
      }),
      C({
        id: 'saf-traffic.e34.weather.wrap.tree', type: 'wrap', title: '날씨별 약속 그물',
        method: '날씨별 약속 그물', tool: 'mindmap', minutes: 6,
        levels: { easy: '가지 2개(비·밤)에 카드 4장을 넣는다.', base: '가지 3개에 카드 6장을 넣는다.', challenge: '함정 카드 1장이 섞인 7장에서 그것을 빼고 넣는다.' },
        wrap: {
          teacher: '"날씨가 바뀌면 무엇을 바꿀까요? 가지마다 모아 봐요." 카드를 다 넣으면 비·눈·밤 차례로 한 목소리로 읽는다. 함정 카드 \'우산 깊게 쓰기\'를 넣으려는 학생에게 "우산을 깊게 쓰면 차가 보이나요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '날씨가 바뀌면', slots: ['비', '밤', '눈'], cards: ['우산 앞 들기', '반사띠 달기', '보폭 작게', '웅덩이 피하기', '밝은 길로', '일찍 나서기'] }, prompt: '날씨별 약속 카드를 가지에 넣어요.', target: { sort: { 비: ['우산 앞 들기', '웅덩이 피하기'], 밤: ['반사띠 달기', '밝은 길로'], 눈: ['보폭 작게', '일찍 나서기'] } }, difficulty: 0.15,
              levels: {
                easy: { prompt: '약속 카드를 두 가지에 넣어요.', toolOptions: { slots: ['비', '밤'], cards: ['우산 앞 들기', '반사띠 달기', '웅덩이 피하기', '밝은 길로'] }, target: { sort: { 비: ['우산 앞 들기', '웅덩이 피하기'], 밤: ['반사띠 달기', '밝은 길로'] } } },
                challenge: { prompt: '약속 카드를 넣고 틀린 카드는 빼요.', toolOptions: { cards: ['우산 앞 들기', '반사띠 달기', '우산 깊게 쓰기', '보폭 작게', '웅덩이 피하기', '밝은 길로', '일찍 나서기'] }, target: { sort: { 비: ['우산 앞 들기', '웅덩이 피하기'], 밤: ['반사띠 달기', '밝은 길로'], 눈: ['보폭 작게', '일찍 나서기'] } } },
              } },
            { type: 'choice', prompt: '비 오는 날 차가 멈출 때 바른 생각은?', options: ['맑은 날과 똑같이 서요', '더 미끄러져 가요', '빨리 서요'], answer: 1, difficulty: 0.1, explain: '젖은 길에서는 차가 서는 데 더 오래 걸려요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '날씨와 밤에 달라지는 길',
          items: [
            { type: 'table', prompt: '날씨마다 지킬 일을 써요.', columns: ['비', '밤', '눈'], cells: [['', '', '']], answer: '우산 앞 들기, 반사띠, 보폭 작게' },
            { type: 'draw', prompt: '비 오는 날 투명 우산을 앞이 보이게 든 내 모습을 그려요.' },
          ],
        },
      }),
      C({
        id: 'saf-traffic.e34.weather.wrap.self', type: 'wrap', title: '내일 날씨 스스로 점검',
        method: '오늘 날씨 스스로 점검', tool: 'timer', minutes: 6,
        levels: { easy: '점검 칸 2개에 표시한다.', base: '점검 칸 3개에 표시한다.', challenge: '점검 칸 4개에 표시하고 가족에게 알려 줄 것을 정한다.' },
        wrap: {
          teacher: '"내일 날씨를 떠올려 봐요. 내일 아침 할 것에 표시해요." 점검 칸을 함께 읽는다. 날씨 예보를 모르는 학생은 오늘 날씨로 고르게 한다. 가족에게 알려 줄 것을 하나 정해 짝에게 말한다. 출구 2번에서 \'깊게 써요\'를 고른 학생에게 우산을 깊게 쓰고 앞을 보는 흉내를 내 보게 한다.',
          exitTicket: [
            SELF('날씨 점검', ['밝은 옷을 입어요', '앞이 보이는 우산', '뛰지 않아요', '여유 있게 나서요'], '내일 아침 할 것에 표시해요.'),
            { type: 'choice', prompt: '비 오는 날 우산은 어떻게 들까요?', options: ['깊게 써요', '앞이 보이게 들어요', '접고 뛰어요'], answer: 1, difficulty: 0.1, explain: '앞이 보여야 오는 차와 사람을 알아채요.' },
            { type: 'short', prompt: '가족에게 알려 줄 날씨 약속을 한 줄로 써요.' },
          ],
        },
        worksheet: {
          title: '날씨 스스로 점검',
          items: [
            { type: 'check', prompt: '내일 아침 할 것에 표시해요.', options: ['밝은 옷', '앞이 보이는 우산', '뛰지 않기', '여유 있게 나서기'] },
            { type: 'short', prompt: '가족에게 알려 줄 것을 써요.' },
          ],
          easy: { note: '비·밤·눈 가운데 하나를 골라 떠올려요.', items: [{ type: 'choice', prompt: '밤에는 어떤 옷?', options: ['밝은 옷', '검은 옷'], answer: '밝은 옷' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 4학년 · 빠른 길과 안전한 길 (별표 2 초등 교통안전 "안전한 통학로 알기")
  // ======================================================================================================
  {
    const C = T('saferoute', 4);
    const TWO = {
      title: '집에서 학교까지 두 갈래 길', grid: [6, 4],
      regions: [
        { name: '우리 집', cells: [[0, 3]] }, { name: '학교', cells: [[5, 0]] },
        { name: '짧은 골목길', cells: [[1, 3], [1, 2], [2, 2], [3, 2], [3, 1], [4, 1]] }, { name: '공사장', cells: [[2, 3], [3, 3]] }, { name: '주차장 입구', cells: [[2, 1]] },
        { name: '조금 먼 보도 길', cells: [[0, 2], [0, 1], [0, 0], [1, 0], [2, 0], [3, 0]] }, { name: '신호등 횡단보도', cells: [[4, 0]] },
        { name: '어두운 공원 길', cells: [[4, 3], [5, 3], [4, 2], [5, 2], [5, 1]] }, { name: '찻길', cells: [[1, 1]] },
      ],
    };
    const VOTE = [['보도 길', 16], ['골목길', 6], ['공원 길', 4]];
    const BAR = { type: 'bar', title: '어느 길로 갈까(가상의 우리 반 투표)', unit: '명', xLabel: '길', yLabel: '친구 수', max: 18, scale: 2 };
    M.push(
      C({
        id: 'saf-traffic.e34.saferoute.intro.two', type: 'intro', title: '두 갈래 길 견주기',
        method: '두 갈래 길 견주기', tool: 'map', minutes: 5,
        levels: { easy: '짧은 골목길과 보도 길에 핀이 하나씩 꽂히는 것을 함께 본다.', base: '두 길과 지나는 곳(공사장·주차장 입구·신호등 횡단보도)에 차례로 핀이 꽂히는 것을 보고 견준다.', challenge: '셋째 길(어두운 공원 길)까지 견주어 말한다.' },
        intro: {
          teacher: '"집에서 학교까지 두 길이 있어요. 어느 길이 더 안전할까요?" 시연 단추로 짧은 골목길, 조금 먼 보도 길, 이어서 골목길 옆 공사장·주차장 입구와 보도 길의 신호등 횡단보도에 핀이 꽂히는 것을 보인다. 길마다 지나는 곳을 손가락으로 세어 보게 한다. "가장 짧은 길이 가장 좋은 길이에요"라는 말이 나오면 "짧은 길에서 공사장 옆과 주차장 입구를 지나는 것과, 조금 먼 길에서 신호등을 건너는 것을 견주면 어떨까요?"라고 되묻는다.',
          student: '지도에서 두 길을 따라가며 지나는 곳을 세어 보고, 어느 길이 더 안전할지 짝과 말해 보아요.',
          demo: { tool: 'map', options: TWO, sequence: [{ pin: [1, 2] }, { pin: [0, 1] }, { pin: [2, 3] }, { pin: [2, 1] }, { pin: [4, 0] }] },
          art: { draw: 'a paper cut map with two paths from a house to a school: a short narrow alley passing a construction site and a parking entrance, and a longer sidewalk path with a traffic light crosswalk', banner: '어느 길이 안전할까?', extra: [{ motif: 'house', x: 300, y: 96 }] },
        },
      }),
      C({
        id: 'saf-traffic.e34.saferoute.intro.feel', type: 'intro', title: '이 길을 걸을 때 마음',
        method: '이 길을 걸을 때 마음', tool: 'emotion', minutes: 5,
        levels: { easy: '장면 2개에 마음 카드가 짝 지어지는 것을 함께 본다.', base: '장면 3개에 마음 카드가 짝 지어지는 것을 보고 까닭을 말한다.', challenge: '나와 마음이 다른 친구의 까닭을 들어 본다.' },
        intro: {
          teacher: '"이 길을 걸을 때 내 마음은 어떨까요?" 시연 단추로 좁은 골목에 \'걱정\', 넓은 보도에 \'편안함\', 어두운 공원 길에 \'무서움\'이 짝 지어지는 것을 보인다. 마음은 사람마다 다를 수 있다고 말하고 두세 명의 다른 마음을 듣는다. "친구들이 다 다니는 길은 안전해요"라는 말이 나오면 "친구가 많이 다녀도 보도가 없으면 차와 얼마나 가까이 걸을까요?"라고 되묻는다.',
          student: '길 장면마다 걸을 때의 마음을 짝 짓고, 그 마음이 드는 까닭을 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'alley', label: '좁은 골목' }, { id: 'wide', label: '넓은 보도' }, { id: 'park', label: '어두운 공원 길' }], cards: ['무서움', '걱정', '편안함'] }, sequence: [{ match: { alley: '걱정', wide: '편안함' } }, { match: { alley: '걱정', wide: '편안함', park: '무서움' } }] },
          art: { draw: 'three paper cut street scenes in a row: a narrow alley with parked cars, a wide bright sidewalk with trees, and a dark park path under one dim lamp', banner: '어떤 마음이 들까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
      }),
      C({
        id: 'saf-traffic.e34.saferoute.activity.table', type: 'activity', title: '길 견주기 점검표',
        method: '길 견주기 표 만들기', tool: 'kitchen', minutes: 15,
        levels: { easy: '점검 칸 2개 가운데 그 길에 맞는 것만 표시한다.', base: '점검 칸 4개 가운데 그 길에 맞는 것만 표시한다.', challenge: '칸 4개를 표시한 뒤 표시가 많은 길이 늘 좋은지 짝과 말한다.' },
        activity: {
          title: '길 견주기 점검표', tool: 'kitchen',
          teacher: '"이 길에는 보도가 있나요? 신호등은요?" 점검표 머리의 길 설명을 소리 내어 읽고 그 길에 맞는 칸에만 표시하게 한다. 세 길의 표시를 칠판 표로 옮겨 견준다. 표시가 많은 공원 길을 고르려는 학생에게 "밤이 되면 \'밝아요\' 칸은 어떻게 바뀔까요? 언제 걷는지도 함께 봐요"라고 묻는다.',
          task: '점검표 머리의 길 설명을 읽고, 그 길에 맞는 칸에만 표시해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            CHK('짧은 골목길에 맞는 칸만 표시해요.', '골목길: 보도·신호등 없음, 어둡고 차 적음', [{ id: 'few', text: '차가 적어요', ok: true }, { id: 'walk', text: '보도가 있어요', ok: false }, { id: 'light', text: '신호등이 있어요', ok: false }, { id: 'bright', text: '밝아요', ok: false }], [0, 1], 0.15),
            CHK('조금 먼 보도 길에 맞는 칸만 표시해요.', '보도 길: 보도·신호등 있음, 밝고 차 많음', [{ id: 'walk', text: '보도가 있어요', ok: true }, { id: 'light', text: '신호등이 있어요', ok: true }, { id: 'bright', text: '밝아요', ok: true }, { id: 'few', text: '차가 적어요', ok: false }], [0, 3], 0.2),
            CHK('공원 길(낮)에 맞는 칸만 표시해요.', '공원 길(낮): 보도 있음, 신호등 없음, 밝고 차 없음', [{ id: 'walk', text: '보도가 있어요', ok: true }, { id: 'light', text: '신호등이 있어요', ok: false }, { id: 'bright', text: '밝아요', ok: true }, { id: 'few', text: '차가 적어요', ok: true }], [1, 2], 0.25, { conclude: '길을 고를 때는 거리보다 보도·신호등·밝기를 따져요. 같은 길도 밤에는 달라질 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '두 길을 견주어 ○, ×를 써요.', columns: ['조건', '골목길', '보도 길'], cells: [['보도가 있어요', '', ''], ['신호등이 있어요', '', ''], ['밝아요', '', '']], answer: '×○, ×○, ×○' }] },
      }),
      C({
        id: 'saf-traffic.e34.saferoute.activity.debate', type: 'activity', title: '갈림길: 늦은 날 어느 길로',
        method: '늦은 날 어느 길로', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '갈림 2번, 보기 3개씩 고르며 결과를 따라간다.', challenge: '갈림 2번을 지난 뒤 근거 카드 3장 가운데 알맞은 두 장을 고르고, 짝과 다른 선택의 결과를 견주어 말한다.' },
        activity: {
          title: '갈림길: 늦은 날 어느 길로', tool: 'dilemma',
          teacher: '"지각할 것 같을 때 무엇을 먼저 생각해야 할까요?" 보기를 고를 때마다 결과를 소리 내어 읽고, 짝이 다른 길을 골랐다면 결과를 견주게 한다. "안전한 길은 하나뿐이에요"라는 학생에게 "보도 길 말고도 조건이 괜찮은 길이 있을까요? 그 길의 조건은 무엇이에요?"라고 묻는다. 늦을 때는 가족이나 선생님께 알리는 방법도 있다는 것을 짚는다.',
          task: '장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('지각할 것 같은 아침이에요.', {
              text: '시계를 보니 늦었어요. 짧은 골목길과 조금 먼 보도 길이 있어요.', motif: 'sun',
              choices: [
                { id: 'alley', text: '골목길로 뛰어간다', result: '공사장 트럭이 골목으로 들어와 급히 멈췄어요.', impact: [{ who: '나', text: '부딪힐 뻔했어요', tone: -1 }] },
                { id: 'sidewalk', text: '보도 길로 빠르게 걷는다', result: '보도로 걸어 신호등 횡단보도에 닿았어요.', ending: '늦어도 조건이 좋은 보도 길을 골랐어요.', next: {
                  text: '신호가 막 빨간불로 바뀌었어요. 1분쯤 기다려야 해요.', choices: [
                    { id: 'wait', text: '기다렸다 초록불에 건넌다', result: '초록불에 좌우를 보고 건넜어요.', impact: [{ who: '나', text: '안전하게 도착했어요', tone: 1 }], ending: '1분 늦어도 신호를 지켜 안전하게 갔어요.' },
                    { id: 'jay', text: '차 사이로 건넌다', result: '차가 경적을 울리며 급히 섰어요.', impact: [{ who: '나와 운전자', text: '크게 다칠 뻔했어요', tone: -1 }] },
                    { id: 'back', text: '골목길로 되돌아간다', result: '더 늦고 골목 끝 주차장 입구도 지나게 됐어요.', impact: [{ who: '나', text: '위험이 늘었어요', tone: -1 }] },
                  ] } },
                { id: 'park', text: '공원 길로 가로지른다', result: '공원 길은 신호등 없는 찻길로 이어졌어요.', impact: [{ who: '나', text: '차와 마주칠 수 있어요', tone: -1 }] },
              ] }, [['sidewalk', 'wait']],
            [{ id: 'cond', text: '보도와 신호등이 있는 길이라서' }, { id: 'minute', text: '1분 늦는 것보다 다치는 게 큰일이라서' }, { id: 'short', text: '짧은 길이 늘 좋아서', why: '짧은 길이 늘 좋은 길은 아니에요. 조건을 따져요.' }], ['cond', 'minute'], 0.2),
            DIL('친구들이 다 골목길로 가요.', {
              text: '하굣길, 친구들이 다 짧은 골목길로 가자고 해요.', motif: 'flower',
              choices: [
                { id: 'follow', text: '다들 가니까 따라간다', result: '골목길에서 친구들이 차 옆으로 바짝 붙어 걸었어요.', impact: [{ who: '나와 친구들', text: '차와 가까워요', tone: -1 }] },
                { id: 'suggest', text: '보도 길로 가자고 까닭을 말한다', result: '"보도가 있어서 차랑 떨어져 걸어"라고 하자 몇 명이 따라왔어요.', ending: '까닭을 말해 보도 길로 함께 갔어요.', next: {
                  text: '한 친구가 "그래도 골목이 더 재미있어"라고 해요.', choices: [
                    { id: 'together', text: '같이 보도 길로 가며 이야기한다', result: '보도 길에서 이야기하며 함께 걸었어요.', impact: [{ who: '친구', text: '함께 안전하게 갔어요', tone: 1 }], ending: '재미도 지키고 안전도 지켰어요.' },
                    { id: 'leave', text: '말없이 혼자 간다', result: '친구 혼자 골목길로 갔어요.', impact: [{ who: '친구', text: '혼자 위험한 길로 갔어요', tone: -1 }] },
                    { id: 'race', text: '누가 먼저 가나 내기한다', result: '뛰다가 주차장 입구 앞에서 넘어질 뻔했어요.', impact: [{ who: '나와 친구', text: '다칠 수 있어요', tone: -1 }] },
                  ] } },
                { id: 'quiet', text: '혼자 보도 길로 몰래 간다', result: '친구들은 왜 갔는지 몰라요.', impact: [{ who: '친구들', text: '위험한 길로 갔어요', tone: -1 }] },
              ] }, [['suggest', 'together']],
            [{ id: 'many', text: '많이 다녀도 보도가 없으면 위험해서' }, { id: 'say', text: '까닭을 말하면 친구도 바꿔서' }, { id: 'all', text: '다 같이 가면 안전해서', why: '여럿이 가도 차와 가까운 길은 위험해요.' }], ['many', 'say'], 0.25),
            DIL('보도 길에 공사가 시작됐어요.', {
              text: '늘 다니던 보도 길에 공사 중 표지판이 서 있어요.', motif: 'star',
              choices: [
                { id: 'through', text: '공사장 옆으로 그냥 지나간다', result: '공사 차가 뒤로 나오며 경고음이 울렸어요.', impact: [{ who: '나', text: '부딪힐 뻔했어요', tone: -1 }] },
                { id: 'other', text: '다른 안전한 길을 찾는다', result: '공원 길(낮)이 보도도 있고 밝았어요.', ending: '안전한 길은 하나뿐이 아니어서 다른 길을 찾았어요.', next: {
                  text: '공원 길 끝에서 신호등 없는 찻길을 건너야 해요.', choices: [
                    { id: 'cross', text: '가까운 횡단보도로 가서 건넌다', result: '조금 걸어 횡단보도에서 차가 선 걸 보고 건넜어요.', impact: [{ who: '나', text: '안전하게 건넜어요', tone: 1 }], ending: '새 길에서도 횡단보도를 찾아 건넜어요.' },
                    { id: 'dash', text: '차가 없을 때 뛰어 건넌다', result: '굽은 길에서 차가 갑자기 나타났어요.', impact: [{ who: '나', text: '부딪힐 뻔했어요', tone: -1 }] },
                    { id: 'middle', text: '찻길 가운데서 기다린다', result: '양쪽에서 차가 바짝 지나갔어요.', impact: [{ who: '나', text: '아주 위험해요', tone: -1 }] },
                  ] } },
                { id: 'home', text: '가족에게 데리러 와 달라 한다', result: '가족이 오는 동안 20분을 기다렸어요.', impact: [{ who: '나', text: '많이 늦었어요', tone: 0 }] },
              ] }, [['other', 'cross']],
            [{ id: 'more', text: '안전한 길은 하나뿐이 아니라서' }, { id: 'check', text: '새 길도 조건을 다시 따져야 해서' }, { id: 'usual', text: '늘 가던 길이 늘 안전해서', why: '늘 가던 길도 공사·날씨로 바뀔 수 있어요.' }], ['more', 'check'], 0.3, { conclude: '길은 거리보다 보도·신호등·밝기로 골라요. 늦어도, 친구가 다 가도, 공사로 바뀌어도 조건을 다시 따져요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '길을 고를 때 먼저 따질 것은?', options: ['가장 짧은 길', '보도·신호등·밝기', '친구가 많이 가는 길'], answer: '보도·신호등·밝기' }] },
      }),
      C({
        id: 'saf-traffic.e34.saferoute.activity.reason', type: 'activity', title: '내가 고른 길의 까닭',
        method: '내가 고른 길의 까닭', tool: 'mindmap', minutes: 15,
        levels: { easy: '가지 2개(보도·신호등)에 근거 카드를 잇는다.', base: '가지 3개(보도·신호등·밝기)에 근거 카드 6장을 나눈다.', challenge: '카드 9장을 나누고 짝의 근거 하나를 더해 내 근거를 고친다.' },
        activity: {
          title: '내가 고른 길의 까닭', tool: 'mindmap',
          teacher: '"보도 길을 고른 까닭을 조건마다 모아 볼까요?" 카드를 놓을 때마다 "이 길은 ○○이 있어서 ○○해요."로 말하게 한다. "그냥 좋아서요"라고 말하는 학생에게 "보도가 있으면 무엇이 좋아요? 신호등이 있으면요?"라고 조건을 짚어 묻는다. 셋째 문항은 고르지 않은 길의 문제를 같은 조건으로 따져 보게 한다.',
          task: '근거 카드를 보도·신호등·밝기 가지에 나누어 넣어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORT('보도 길을 고른 근거를 나누어요.', { topic: '내가 고른 길' }, ['보도', '신호등', '밝기'], [['차와 떨어져 걸어요', '넘어져도 찻길 밖'], ['차가 멈춘 뒤 건너요', '건널 때를 알려 줘요'], ['운전자가 나를 봐요', '발밑이 잘 보여요']], [['유모차도 다녀요'], ['신호를 기다려요'], ['가게 불빛도 있어요']], 0.15),
            SORT('공원 길(낮)을 고른 근거를 나누어요.', { topic: '공원 길(낮)' }, ['보도', '신호등', '밝기'], [['산책로가 넓어요', '차가 안 들어와요'], ['끝의 횡단보도로', '신호등 쪽 돌아가기'], ['낮에는 환해요', '사람이 많이 보여요']], [['자전거와 나눠 써요'], ['초록불 기다리기'], ['나무 그늘도 밝아요']], 0.2),
            SORT('골목길을 고르지 않은 까닭을 나누어요.', { topic: '고르지 않은 길' }, ['보도', '신호등', '밝기'], [['차 옆에 붙어 걸어요', '가게 짐이 길을 막아요'], ['아무 데서나 건너요', '골목 끝 신호가 없어요'], ['담장 그늘이 어두워요', '저녁엔 깜깜해요']], [['공사장 옆을 지나요'], ['차가 갑자기 나와요'], ['가로등이 하나뿐']], 0.25, { conclude: '길을 고른 까닭은 보도·신호등·밝기 같은 조건으로 말해요. 고르지 않은 길도 같은 조건으로 따져요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내가 고른 길의 근거를 조건마다 써요.', columns: ['보도', '신호등', '밝기'], cells: [['', '', '']] }] },
      }),
      C({
        id: 'saf-traffic.e34.saferoute.activity.vote', type: 'activity', title: '우리 반 길 투표 막대그래프',
        method: '우리 반은 어느 길을', tool: 'chart', minutes: 14,
        levels: { easy: '길 2개, 첫 막대는 미리 그려져 있다.', base: '길 3개의 막대를 모두 그려 완성한다.', challenge: '완성한 뒤 가장 적게 고른 길의 좋은 점도 찾아 말한다.' },
        activity: {
          title: '우리 반 길 투표 막대그래프', tool: 'chart',
          teacher: '"눈금 한 칸은 몇 명일까요? 16명은 어디까지 그릴까요?" 표의 수를 소리 내어 읽고 막대를 그리게 한다. 이 투표는 가상의 반 자료라고 밝힌다. 많이 고른 길의 까닭을 짐작하게 한 뒤, "가장 적게 고른 공원 길은 나쁜 길일까요? 언제는 좋은 길일까요?"라고 묻는다. 눈금을 1명씩 세는 학생에게 "눈금 숫자를 다시 볼까요?"라고 되묻는다.',
          task: '표를 보고 막대그래프를 완성한 뒤, 그래프를 읽고 물음에 답해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '표를 보고 길 투표 막대그래프를 완성해요.', toolOptions: Object.assign({}, BAR, { mode: 'build', data: VOTE }), target: { build: true }, difficulty: 0.2,
              levels: { easy: { prompt: '표를 보고 두 길의 막대그래프를 완성해요.', toolOptions: { data: VOTE.slice(0, 2), given: [0] }, target: { build: true } } } },
            { prompt: '우리 반이 가장 많이 고른 길은?', toolOptions: Object.assign({}, BAR, { mode: 'read', data: VOTE, question: '가장 많이 고른 길은?', choices: ['보도 길', '골목길', '공원 길'] }), target: { pick: 0 }, difficulty: 0.15 },
            { prompt: '골목길과 공원 길 가운데 더 적게 고른 길은?', toolOptions: Object.assign({}, BAR, { mode: 'read', data: VOTE, question: '둘 가운데 더 적게 고른 길은?', choices: ['골목길', '공원 길'] }), target: { pick: 1 }, difficulty: 0.2, conclude: '많이 고른 길에는 까닭이 있어요. 적게 고른 길도 언제 좋은지 조건으로 따져 봐요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '그래프를 보고 빈칸을 채워요(가상의 우리 반).', columns: ['길', '친구 수(명)'], cells: [['보도 길', ''], ['골목길', '6'], ['공원 길', '4']], answer: '16' }] },
        notes: '투표 자료는 가상이다. 우리 반 투표를 할 때는 집 위치를 묻지 않고 "어느 조건의 길을 고르겠나"로 묻는다.',
      }),
      C({
        id: 'saf-traffic.e34.saferoute.wrap.myroute', type: 'wrap', title: '나의 안전한 길 소개',
        method: '나의 안전한 길 소개', tool: 'story', minutes: 6,
        levels: { easy: '소개 말풍선 빈칸 1개를 채운다.', base: '말풍선 빈칸 2개를 채운다.', challenge: '말풍선 빈칸 3개에 까닭을 두 가지 넘게 넣는다.' },
        wrap: {
          teacher: '"내가 고른 길을 친구에게 소개해 볼까요?" 말풍선을 채운 뒤 짝에게 "이 길은 ○○이 있어서 안전해요"로 소개하게 한다. 출구 2번에서 \'친구가 많이 가는 길\'을 고른 학생에게 "친구가 많아도 보도가 없으면요?"라고 되묻는다.',
          exitTicket: [
            EX('story', FILL('내가 고른 길을 소개하는 말을 채워요.', '나', [['이 길은 ___ 안전해요.', '보도가 있어서'], ['찻길은 ___ 건너요.', '신호등에서'], ['밤에는 ___ 다녀요.', '밝은 길로']], ['짧아서', '아무 데서'], 0.15)),
            { type: 'choice', prompt: '안전한 길을 고르는 까닭으로 알맞은 것은?', options: ['친구가 많이 가서', '보도와 신호등이 있어서', '가장 짧아서'], answer: 1, difficulty: 0.1, explain: '길은 보도·신호등·밝기 같은 조건으로 골라요.' },
            { type: 'short', prompt: '내가 고른 길과 그 까닭을 한 줄로 써요.' },
          ],
        },
        worksheet: {
          title: '나의 안전한 길',
          items: [
            { type: 'draw', prompt: '내가 고른 안전한 길을 그리고 보도·신호등을 표시해요.' },
            { type: 'short', prompt: '이 길이 안전한 까닭 두 가지를 써요.' },
          ],
          easy: { note: '보도·신호등·밝기를 떠올려요.', items: [{ type: 'choice', prompt: '안전한 길은?', options: ['보도가 있는 길', '보도가 없는 길'], answer: '보도가 있는 길' }] },
        },
      }),
      C({
        id: 'saf-traffic.e34.saferoute.wrap.time', type: 'wrap', title: '안전한 길로 가는 출발 시각',
        method: '안전한 길로 가는 출발 시각', tool: 'clock', minutes: 6,
        levels: { easy: '30분 단위로 출발 시각을 나타낸다.', base: '10분 단위로 나타낸다.', challenge: '5분 단위로 나타내고 가족과 정할 시각을 말한다.' },
        wrap: {
          teacher: '"보도 길은 골목길보다 조금 더 걸려요. 그럼 몇 분 일찍 나서면 될까요?" 걸리는 시간(연습용 값)을 칠판에 적고 거꾸로 세어 시계를 맞추게 한다. "늦으면 골목길로 가면 돼요"라는 학생에게 "처음부터 일찍 나서면 골목길로 바꿀 일이 생길까요?"라고 되묻는다. 정한 시각을 가족과 함께 정해 보라고 말한다.',
          exitTicket: [
            { type: 'tool', tool: 'clock', options: { minuteStep: 10 }, prompt: '보도 길은 10분 더 걸려요. 8시 20분보다 10분 일찍을 나타내요.', target: { h: 8, m: 10 }, difficulty: 0.2,
              levels: { easy: { prompt: '안전한 길로 가려고 8시에 나서요. 시계를 맞춰요.', toolOptions: { minuteStep: 30, hourZone: true }, target: { h: 8, m: 0 } }, challenge: { prompt: '보도 길은 5분 더 걸려요. 8시 20분보다 5분 일찍을 나타내요.', toolOptions: { minuteStep: 5 }, target: { h: 8, m: 15 } } } },
            { type: 'choice', prompt: '안전한 길이 조금 더 걸릴 때 좋은 방법은?', options: ['늦으면 골목길로', '조금 일찍 나서요', '뛰어가요'], answer: 1, difficulty: 0.1, explain: '조금 일찍 나서면 안전한 길로 뛰지 않고 갈 수 있어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '안전한 길로 가는 출발 시각',
          items: [
            { type: 'table', prompt: '나서는 시각을 써요(연습용 값).', columns: ['길', '더 걸리는 시간', '나서는 시각'], cells: [['골목길', '0분', '8시 20분'], ['보도 길', '10분', '']], answer: '8시 10분' },
            { type: 'short', prompt: '가족과 정하고 싶은 출발 시각을 써요.' },
          ],
        },
        notes: '걸리는 시간·시각은 연습용 값이다. 학생 집 위치는 묻지 않는다.',
      }),
    );
  }

  // ======================================================================================================
  // 4학년 · 자동차 탈 때와 내릴 때 (별표 2 초등 교통안전 "교통수단(자전거, 대중교통 등)의 안전한 이용법 알기")
  // ======================================================================================================
  {
    const C = T('carride', 4);
    const TL = { axis: ['먼저', '나중'] };
    // 세운 차(가운데 두 칸 폭)와 둘레 — 보도가 왼쪽인 길 / 오른쪽인 길
    const CAR_L = {
      title: '보도 옆에 세운 차(보도가 왼쪽)', grid: [5, 5],
      regions: [
        { name: '보도', cells: [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4]] },
        { name: '차 앞', cells: [[1, 0], [2, 0]] }, { name: '보도 쪽 문', cells: [[1, 1], [1, 2]] }, { name: '찻길 쪽 문', cells: [[2, 1], [2, 2]] },
        { name: '차 뒤', cells: [[2, 3]] }, { name: '뒤에서 오는 자전거', cells: [[1, 3], [1, 4]] }, { name: '찻길', cells: [[3, 0], [3, 1], [3, 2], [3, 3], [3, 4], [4, 0], [4, 1], [4, 2], [4, 3], [4, 4], [2, 4]] },
      ],
    };
    const CAR_R = {
      title: '보도 옆에 세운 차(보도가 오른쪽)', grid: [5, 5],
      regions: [
        { name: '보도', cells: [[4, 0], [4, 1], [4, 2], [4, 3], [4, 4]] },
        { name: '차 앞', cells: [[2, 4], [3, 4]] }, { name: '보도 쪽 문', cells: [[3, 2], [3, 3]] }, { name: '찻길 쪽 문', cells: [[2, 2], [2, 3]] },
        { name: '차 뒤', cells: [[2, 1]] }, { name: '뒤에서 오는 자전거', cells: [[3, 0], [3, 1]] }, { name: '찻길', cells: [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [1, 0], [1, 1], [1, 2], [1, 3], [1, 4], [2, 0]] },
      ],
    };
    const BELT = [['늘 맴', 18], ['가끔 맴', 6]];
    const PIC = { type: 'picture', title: '차에서 안전띠를 매는 습관(가상의 우리 반)', unit: '명', xLabel: '습관', yLabel: '친구 수', icons: PEOPLE, icon: 'person' };
    M.push(
      C({
        id: 'saf-traffic.e34.carride.intro.scene', type: 'intro', title: '차 안 장면 고르기',
        method: '차 안 장면 고르기', tool: 'emotion', minutes: 5,
        levels: { easy: '안전한 장면 하나가 바구니에 담기는 것을 함께 본다.', base: '장면 4개 가운데 안전한 장면 2개가 담기는 것을 보고 까닭을 말한다.', challenge: '위험한 장면을 바르게 고쳐 말한다.' },
        intro: {
          teacher: '"차 안 그림이에요. 안전하게 탄 친구는 누구일까요?" 시연 단추로 \'뒷좌석 안전띠\'와 \'등 붙이고 앉기\'가 담기는 것을 보인다. "어른이 안고 타면 안전해요"라는 말이 나오면 "차가 갑자기 서면 어른 팔이 아이를 끝까지 잡고 있을 수 있을까요?"라고 되묻는다. "가까운 길은 안전띠를 안 매도 돼요"라는 말도 함께 짚는다.',
          student: '차 안 그림에서 안전하게 탄 장면을 고르고, 위험한 장면은 어떻게 고칠지 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'pick', basket: '안전해요', cards: [{ id: 'belt', text: '뒷좌석 안전띠' }, { id: 'lap', text: '앞좌석 무릎에' }, { id: 'hand', text: '창밖으로 손' }, { id: 'back', text: '등 붙이고 앉기' }], shuffle: false }, sequence: [{ pick: ['belt'] }, { pick: ['belt', 'back'] }] },
          art: { draw: 'a paper cut car interior seen from the side: a child in the back seat with a seat belt fastened and sitting upright, another paper child on an adult lap in the front, a small hand out of a window', banner: '안전하게 탔나요?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      C({
        id: 'saf-traffic.e34.carride.intro.belt', type: 'intro', title: '안전띠 지나는 자리',
        method: '안전띠 지나는 자리', tool: 'body', minutes: 5,
        levels: { easy: '어깨끈이 지나는 어깨·가슴이 골라지는 것을 함께 본다.', base: '어깨끈(어깨·가슴)과 허리끈(허벅지 윗부분)이 지나는 곳이 모두 골라지는 것을 본다.', challenge: '끈이 목이나 배에 걸리면 왜 위험한지 말한다.' },
        intro: {
          teacher: '"안전띠는 몸의 어디를 지나야 할까요?" 시연 단추로 종이 몸에서 어깨·가슴, 이어서 허벅지가 골라지는 것을 보이며 "어깨끈은 어깨와 가슴 가운데로, 허리끈은 배가 아니라 골반 아래 허벅지 윗부분에 걸쳐요"라고 말한다(종이 몸에 골반 칸이 없어 허벅지로 고른다). "안전띠는 매기만 하면 어디를 지나든 같아요"라는 말이 나오면 "끈이 목에 걸린 채 차가 갑자기 서면 어디가 눌릴까요?"라고 되묻는다. 키가 작아 끈이 목에 걸리면 어른께 알린다고 말한다.',
          student: '안전띠 어깨끈과 허리끈이 지나야 할 곳을 내 몸에서 손으로 짚어 보아요.',
          demo: { tool: 'body', options: { mode: 'parts', parts: ['목', '어깨', '가슴', '배', '허리', '허벅지'], names: true }, sequence: [{ parts: ['어깨', '가슴'] }, { parts: ['어깨', '가슴', '허벅지'] }] },
          art: { draw: 'a paper child sitting in a car seat with a paper seat belt crossing from the shoulder over the middle of the chest and a lap belt low across the hips, dotted marks on the neck and tummy showing where it should not go', banner: '안전띠는 어디로?', extra: [{ motif: 'leaf', x: 300, y: 96 }] },
        },
        notes: '종이 몸에 골반 칸이 없다. 허리끈 자리는 "배가 아니라 골반 아래"라고 말로 짚는다. 어린이 보호 장구(카시트·부스터)가 필요한 키·나이 기준은 이 모듈에서 수치로 말하지 않는다.',
      }),
      C({
        id: 'saf-traffic.e34.carride.intro.trip', type: 'intro', title: '가족 나들이 출발 시각',
        method: '가족 나들이 출발 시각', tool: 'clock', minutes: 5,
        levels: { easy: '나들이 출발 10시를 시계로 함께 읽는다.', base: '안전띠·짐 정리 시간 10분을 두면 9시 50분에 차로 간다는 것을 시계로 본다.', challenge: '준비 시간을 넣어 거꾸로 세는 방법을 짝에게 설명한다.' },
        intro: {
          teacher: '"10시에 나들이를 떠나요. 차에 타서 안전띠를 매고 짐을 정리하려면 몇 분이 필요할까요?" 시연 단추로 시계가 10시, 이어서 9시 50분으로 움직이는 것을 보인다. "늦으면 달리면서 안전띠를 매면 돼요"라는 말이 나오면 "차가 출발한 뒤에 안전띠를 찾으면 그동안은 어떻게 될까요?"라고 되묻는다. 시각은 연습용 값이라고 말한다.',
          student: '출발 전에 안전띠·짐 정리를 할 시간을 두고, 몇 시에 차로 가야 할지 짝과 정해 보아요.',
          demo: { tool: 'clock', options: { minuteStep: 10, showDigital: true }, sequence: [{ h: 10, m: 0 }, { h: 9, m: 50 }] },
          art: { draw: 'a paper clock showing ten to ten beside a paper family car with its trunk open, a child placing a bag in the trunk before getting in', banner: '출발 전에 준비해요', extra: [{ motif: 'sun', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      C({
        id: 'saf-traffic.e34.carride.activity.order', type: 'activity', title: '자동차 타고 내리는 차례',
        method: '타고 내리는 차례', tool: 'timeline', minutes: 15,
        levels: { easy: '카드 4장, 놓으면 바로 맞는지 알려 준다.', base: '카드 4장(탈 때·내릴 때)과 셋째 문항은 7장(타고 내리기 모두)을 놓는다.', challenge: '틀린 카드 1장이 섞인 판에서 그것을 빼고, 차례가 바뀌면 생길 일을 말한다.' },
        activity: {
          title: '자동차 타고 내리는 차례', tool: 'timeline',
          teacher: '"차에 탈 때 맨 먼저 할 일은 무엇일까요? 내릴 때는요?" 카드를 다 놓으면 의자 두 개로 차를 만들어 타고 내리는 차례를 몸으로 해 본다. "차 문은 아무 쪽이나 열어도 돼요"라는 학생에게 "찻길 쪽 문을 열면 옆으로 지나가는 차나 자전거는 어떻게 될까요?"라고 묻는다. 안전띠는 딸깍 소리 뒤에 한 번 당겨 확인한다는 것을 짚는다.',
          task: '자동차를 타고 내리는 카드를 차례대로 시간 띠에 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORD('자동차에 탈 때 차례로 놓아요.', TL, [{ id: 'side', text: '보도 쪽에서 타요' }, { id: 'sit', text: '뒷좌석에 앉아요' }, { id: 'click', text: '안전띠 딸깍' }, { id: 'pull', text: '당겨서 확인해요' }], [0, 1, 2, 3], { id: 'later', text: '출발 뒤에 매요', why: '출발 전에 안전띠를 매야 처음부터 몸을 지켜요.' }, 0.15),
            ORD('자동차에서 내릴 때 차례로 놓아요.', TL, [{ id: 'stop', text: '차가 완전히 서요' }, { id: 'look', text: '창으로 뒤를 봐요' }, { id: 'door', text: '보도 쪽 문으로' }, { id: 'away', text: '보도 안쪽으로 가요' }], [0, 1, 2, 3], { id: 'road', text: '찻길 쪽 문 열어요', why: '찻길 쪽 문을 열면 지나가는 차·자전거와 부딪혀요.' }, 0.2),
            ORD('나들이를 타고 내리는 차례를 모두 놓아요.', TL, [{ id: 'side', text: '보도 쪽에서 타요' }, { id: 'sit', text: '뒷좌석에 앉아요' }, { id: 'click', text: '안전띠 딸깍' }, { id: 'ride', text: '바른 자세로 가요' }, { id: 'stop', text: '차가 완전히 서요' }, { id: 'look', text: '뒤를 살펴요' }, { id: 'door', text: '보도 쪽 문으로' }], [0, 2, 4, 6], { id: 'unbelt', text: '서기 전 띠 풀기', why: '차가 완전히 서기 전에 안전띠를 풀면 몸이 쏠려요.' }, 0.25, { conclude: '탈 때는 보도 쪽·뒷좌석·안전띠 확인, 내릴 때는 완전히 선 뒤·뒤 살피기·보도 쪽 문이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '차에서 내릴 때는 뒤를 보고 ___ 쪽 문으로 내려요.', answer: '보도' }] },
      }),
      C({
        id: 'saf-traffic.e34.carride.activity.door', type: 'activity', title: '어느 쪽 문으로 내릴까',
        method: '어느 쪽 문으로 내릴까', tool: 'map', minutes: 14,
        levels: { easy: '핀을 놓으면 그 칸의 이름이 바로 보인다.', base: '지도의 이름을 보고 핀을 꽂는다(셋째 문항은 보도가 반대쪽인 차).', challenge: '핀마다 까닭도 보기에서 고르고, 자전거가 올 때 기다릴 까닭을 말한다.' },
        activity: {
          title: '어느 쪽 문으로 내릴까', tool: 'map',
          teacher: '"이 차에서 내릴 문은 어느 쪽일까요?" 핀을 꽂기 전에 보도가 어느 쪽인지 먼저 손가락으로 짚게 한다. 셋째 문항에서 "늘 오른쪽 문으로 내려요"라는 학생에게 "이 차는 보도가 어느 쪽에 있나요? 오른쪽·왼쪽이 아니라 보도 쪽을 찾아요"라고 묻는다. 보도 쪽 문도 뒤에서 오는 자전거가 있을 수 있어 열기 전에 뒤를 본다는 것을 짚는다.',
          task: '세운 차 지도에서 물음에 맞는 칸에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            PIN(CAR_L, '이 차에서 내릴 문 칸에 핀을 꽂아요.', '보도 쪽 문', { q: '왜 이 문일까요?', choices: ['내리면 바로 보도라서', '문이 커서', '가까워서'], answer: 0 }, 0.15),
            PIN(CAR_L, '문을 열기 전에 살필, 뒤에서 오는 것이 있는 칸에 꽂아요.', '뒤에서 오는 자전거', { q: '자전거가 오면 어떻게 할까요?', choices: ['문을 빨리 열어요', '지나갈 때까지 기다려요', '손을 내밀어요'], answer: 1 }, 0.2),
            PIN(CAR_R, '보도가 반대쪽인 차에서 내릴 문 칸에 꽂아요.', '보도 쪽 문', { q: '내릴 문을 고르는 방법은?', choices: ['늘 오른쪽이에요', '늘 왼쪽이에요', '보도가 있는 쪽을 봐요'], answer: 2 }, 0.25, { conclude: '내릴 문은 오른쪽·왼쪽이 아니라 보도 쪽이에요. 열기 전에 뒤에서 오는 자전거·차를 살펴요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '자동차에서 내릴 문은?', options: ['보도 쪽 문', '찻길 쪽 문', '아무 문'], answer: '보도 쪽 문' }] },
      }),
      C({
        id: 'saf-traffic.e34.carride.activity.distract', type: 'activity', title: '갈림길: 동생이 안전띠를 풀었어요',
        method: '동생이 안전띠를 풀었어요', tool: 'dilemma', minutes: 15,
        levels: { easy: '갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '갈림 2번, 보기 3개씩 고르며 결과를 따라간다.', challenge: '갈림 2번을 지난 뒤 근거 카드 3장 가운데 알맞은 두 장을 고른다.' },
        activity: {
          title: '갈림길: 차 안에서 생긴 일', tool: 'dilemma',
          teacher: '"동생이 답답하다고 안전띠를 풀었어요. 내가 할 수 있는 일은 무엇일까요?" 보기를 고를 때마다 결과를 소리 내어 읽고, 운전하는 어른에게 어떻게 알리면 좋을지 짝과 말하게 한다. "운전하는 어른께 말 걸면 안 돼요"라는 학생에게 "꼭 알려야 할 일은 짧고 또렷하게 말하면 돼요. 무엇을 알려야 할까요?"라고 묻는다. 내 안전띠를 풀고 도와주지 않는다는 것을 짚는다.',
          task: '장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('달리는 차에서 동생이 안전띠를 풀었어요.', {
              text: '달리는 차 뒷좌석에서 동생이 "답답해" 하며 안전띠를 풀었어요.', motif: 'cloud',
              choices: [
                { id: 'ignore', text: '모른 척한다', result: '차가 갑자기 서자 동생이 앞으로 쏠렸어요.', impact: [{ who: '동생', text: '다칠 수 있어요', tone: -1 }] },
                { id: 'tell', text: '"동생 띠 풀렸어요" 어른께 알린다', result: '어른이 안전한 곳에 차를 세우셨어요.', ending: '짧고 또렷하게 알려 어른이 도와주셨어요.', next: {
                  text: '어른이 차를 세우고 동생 띠를 매 주셨어요. 동생이 또 답답하대요.', choices: [
                    { id: 'help', text: '같이 노래 부르며 달래 준다', result: '동생이 띠를 맨 채 웃으며 갔어요.', impact: [{ who: '동생', text: '안전하게 갔어요', tone: 1 }], ending: '띠를 풀지 않게 동생을 달래며 함께 갔어요.' },
                    { id: 'mine', text: '내 띠를 풀고 안아 준다', result: '나도 띠 없이 앉게 되었어요.', impact: [{ who: '나와 동생', text: '둘 다 위험해요', tone: -1 }] },
                    { id: 'scold', text: '소리 질러 혼낸다', result: '동생이 울고 운전하는 어른이 놀랐어요.', impact: [{ who: '운전하는 어른', text: '운전에 방해돼요', tone: -1 }] },
                  ] } },
                { id: 'reach', text: '내 띠를 풀고 매 준다', result: '몸을 뻗다 차가 흔들려 부딪혔어요.', impact: [{ who: '나', text: '다칠 수 있어요', tone: -1 }] },
              ] }, [['tell', 'help']],
            [{ id: 'belt', text: '가까운 길도 안전띠가 몸을 지켜서' }, { id: 'adult', text: '어른께 알리면 안전하게 도와줘서' }, { id: 'short', text: '금방 도착하니까 괜찮아서', why: '가까운 길에서도 갑자기 설 수 있어요.' }], ['belt', 'adult'], 0.2),
            DIL('장난감이 발밑으로 떨어졌어요.', {
              text: '달리는 차에서 장난감이 앞좌석 밑으로 굴러갔어요.', motif: 'star',
              choices: [
                { id: 'unbelt', text: '띠를 풀고 줍는다', result: '몸을 숙인 사이 차가 서서 앞좌석에 부딪혔어요.', impact: [{ who: '나', text: '다쳤어요', tone: -1 }] },
                { id: 'wait', text: '차가 설 때까지 기다린다', result: '휴게소에 차가 멈췄어요.', ending: '띠를 풀지 않고 차가 설 때까지 기다렸어요.', next: {
                  text: '차가 멈췄어요. 장난감을 꺼내려면?', choices: [
                    { id: 'ask', text: '어른께 꺼내 달라고 한다', result: '어른이 차 문을 열고 꺼내 주셨어요.', impact: [{ who: '나', text: '안전하게 찾았어요', tone: 1 }], ending: '멈춘 뒤 어른께 부탁해 안전하게 찾았어요.' },
                    { id: 'road', text: '찻길 쪽 문을 열고 내린다', result: '옆으로 차가 지나가 문이 부딪힐 뻔했어요.', impact: [{ who: '나', text: '다칠 수 있어요', tone: -1 }] },
                    { id: 'crawl', text: '앞좌석 밑으로 기어간다', result: '어른이 출발하려다 깜짝 놀라셨어요.', impact: [{ who: '운전하는 어른', text: '놀랐어요', tone: -1 }] },
                  ] } },
                { id: 'kick', text: '발로 끌어당기려고 뻗는다', result: '자세가 흐트러져 띠가 목 쪽으로 올라왔어요.', impact: [{ who: '나', text: '다칠 수 있어요', tone: -1 }] },
              ] }, [['wait', 'ask']],
            [{ id: 'stay', text: '달릴 때는 띠를 풀지 않아서' }, { id: 'stopped', text: '멈춘 뒤에 어른과 해야 안전해서' }, { id: 'quick', text: '빨리 주우면 괜찮아서', why: '잠깐이라도 띠를 풀면 몸을 지키지 못해요.' }], ['stay', 'stopped'], 0.25),
            DIL('친구가 창문을 열고 손을 내밀재요.', {
              text: '친구 가족 차를 탔는데 친구가 "창밖으로 손 내밀면 시원해"라고 해요.', motif: 'sun',
              choices: [
                { id: 'out', text: '같이 손을 내민다', result: '옆으로 큰 차가 바짝 지나갔어요.', impact: [{ who: '나와 친구', text: '팔을 다칠 수 있어요', tone: -1 }] },
                { id: 'no', text: '"손은 안에 두자"고 한다', result: '친구가 손을 거두었어요.', ending: '손과 머리는 창 안에 두자고 말했어요.', next: {
                  text: '친구가 "그럼 창문 버튼 놀이 하자"고 해요.', choices: [
                    { id: 'other', text: '창문 대신 끝말잇기를 하자고 한다', result: '둘이 앉은 채 끝말잇기를 했어요.', impact: [{ who: '나와 친구', text: '안전하게 놀았어요', tone: 1 }], ending: '운전을 방해하지 않는 놀이로 바꿨어요.' },
                    { id: 'button', text: '창문을 올렸다 내렸다 한다', result: '창문에 손가락이 끼일 뻔했어요.', impact: [{ who: '친구', text: '다칠 수 있어요', tone: -1 }] },
                    { id: 'loud', text: '크게 소리 지르며 논다', result: '운전하는 어른이 깜짝 놀랐어요.', impact: [{ who: '운전하는 어른', text: '운전에 방해돼요', tone: -1 }] },
                  ] } },
                { id: 'head', text: '머리를 내밀어 본다', result: '바람과 지나가는 차에 깜짝 놀랐어요.', impact: [{ who: '나', text: '크게 다칠 수 있어요', tone: -1 }] },
              ] }, [['no', 'other']],
            [{ id: 'inside', text: '손·머리는 창 안이 안전해서' }, { id: 'driver', text: '운전을 방해하지 않아야 해서' }, { id: 'cool', text: '시원하면 괜찮아서', why: '시원해도 창밖으로 내민 손은 다칠 수 있어요.' }], ['inside', 'driver'], 0.3, { conclude: '달리는 차에서는 안전띠를 풀지 않고, 손·머리는 창 안에, 꼭 알릴 일은 짧고 또렷하게 어른께 말해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '달리는 차에서 동생이 안전띠를 풀면?', options: ['모른 척해요', '어른께 바로 알려요', '내 띠를 풀고 도와요'], answer: '어른께 바로 알려요' }] },
      }),
      C({
        id: 'saf-traffic.e34.carride.activity.pack', type: 'activity', title: '차에 타기 전 점검표',
        method: '차에 타기 전 점검표', tool: 'kitchen', minutes: 14,
        levels: { easy: '점검 칸 2개 가운데 할 일만 표시한다.', base: '점검 칸 4개 가운데 할 일만 골라 표시한다.', challenge: '칸 4개를 표시한 뒤 우리 가족 차에서 바꿀 것 하나를 고른다.' },
        activity: {
          title: '차에 타기 전 할 일만 표시하기', tool: 'kitchen',
          teacher: '"차에 타기 전에 무엇을 해 두면 안전할까요?" 점검표를 한 칸씩 소리 내어 읽고 할 일에만 표시하게 한다. 하지 말아야 할 칸까지 누르는 학생에게 "이 칸대로 하면 더 안전해질까요?"라고 다시 읽게 한다. "무거운 가방은 무릎에 두면 편해요"라는 학생에게 "차가 갑자기 서면 무릎 위 가방은 어디로 갈까요?"라고 묻는다.',
          task: '점검표에서 차에 타기 전에 할 일만 골라 표시해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            CHK('차에 타기 전에 할 일만 표시해요.', '타기 전 점검', [{ id: 'back', text: '뒷좌석에 앉기', ok: true }, { id: 'front', text: '앞좌석에 서기', ok: false }, { id: 'belt', text: '안전띠 딸깍', ok: true }, { id: 'pull', text: '띠 당겨 확인', ok: true }], [0, 1], 0.15),
            CHK('짐을 둘 때 할 일만 표시해요.', '짐 정리 점검', [{ id: 'trunk', text: '큰 짐은 트렁크', ok: true }, { id: 'lap', text: '가방은 무릎 위', ok: false }, { id: 'feet', text: '작은 짐은 발밑', ok: true }, { id: 'shelf', text: '뒷창 앞에 물건', ok: false }], [0, 1], 0.2),
            CHK('가는 동안 지킬 일만 표시해요.', '가는 동안 점검', [{ id: 'window', text: '창문 장난 안 하기', ok: true }, { id: 'hand', text: '손 창밖으로', ok: false }, { id: 'quiet', text: '운전 방해 않기', ok: true }, { id: 'sit', text: '등 붙이고 앉기', ok: true }], [2, 1], 0.25, { conclude: '타기 전에 뒷좌석·안전띠·짐 정리를 하고, 가는 동안 창문·운전 방해를 조심해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '우리 가족 차에서 지킬 것에 표시해요.', options: ['뒷좌석에 앉기', '안전띠 당겨 확인', '큰 짐은 트렁크'] }] },
      }),
      C({
        id: 'saf-traffic.e34.carride.activity.talk', type: 'activity', title: '운전하는 가족에게 하는 말',
        method: '운전하는 가족에게 하는 말', tool: 'story', minutes: 15,
        levels: { easy: '말풍선 빈칸 1개를 채운다.', base: '말풍선 빈칸 4개를 채운다.', challenge: '말풍선 빈칸 5개를 채우고, 운전에 방해되는 말을 바르게 바꾼다.' },
        activity: {
          title: '운전하는 가족에게 하는 말', tool: 'story',
          teacher: '"운전하는 가족에게 어떤 말을 하면 서로 안전할까요?" 말풍선을 채운 뒤 짝과 가족·아이 역할을 나눠 주고받는다. "운전할 때 \'저것 봐!\' 하고 크게 부르면 어떨까요?"라고 물어 운전에 방해되는 말을 짚고, 짧고 또렷한 말로 바꿔 보게 한다. 꼭 알릴 일(안전띠가 풀렸어요)은 바로 말한다는 것을 짚는다.',
          task: '운전하는 가족과 아이의 말풍선 빈칸에 알맞은 카드를 넣어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            FILL('출발할 때 주고받는 말을 채워요.', ['가족', '나', '가족', '나', '나'], [['출발한다, 안전띠 ___?', '맸니'], ['네, ___ 했어요.', '당겨서 확인'], ['짐은 ___ 두었지?', '발밑에'], ['네, 창문 ___ 안 할게요.', '장난은'], ['내리기 전에 ___ 볼게요.', '뒤를']], ['안 맸어요', '무릎에', '앞을'], 0.15, {}, 4),
            FILL('가는 동안 주고받는 말을 채워요.', ['나', '가족', '나', '나', '가족'], [['동생 띠가 ___!', '풀렸어요'], ['알려 줘서 ___.', '고마워'], ['도착하면 ___.', '말할게요'], ['저기 보세요 대신 ___.', '서면 볼게요'], ['그래, 세운 뒤에 ___.', '같이 보자']], ['저것 봐!', '빨리 가요', '지금 봐요'], 0.2, {}, 4),
            FILL('내릴 때 주고받는 말을 채워요.', ['가족', '나', '나', '가족', '나'], [['다 왔다. 차가 ___ 기다려.', '완전히 설 때까지'], ['뒤에 자전거가 ___.', '와요'], ['___ 쪽 문으로 내릴게요.', '보도'], ['좋아, 보도 ___ 가렴.', '안쪽으로'], ['문은 ___ 닫을게요.', '살살']], ['찻길', '빨리 열게요', '쾅'], 0.25, { conclude: '운전하는 가족에게는 짧고 또렷하게 말하고, 꼭 알릴 일은 바로 말해요. 보고 싶은 것은 차가 선 뒤에 봐요.' }, 4),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '운전하는 가족에게 하고 싶은 안전한 말을 한 줄로 써요.' }] },
      }),
      C({
        id: 'saf-traffic.e34.carride.activity.survey', type: 'activity', title: '우리 반 안전띠 습관 그림그래프',
        method: '우리 반 안전띠 습관 표', tool: 'chart', minutes: 14,
        levels: { easy: '항목 2개, 첫 항목 그림은 미리 놓여 있다.', base: '항목 2개의 그림을 모두 놓고 합계를 고른다.', challenge: '완성한 뒤 가끔 매는 까닭을 짐작해 짝과 말한다.' },
        activity: {
          title: '우리 반 안전띠 습관 그림그래프', tool: 'chart',
          teacher: '"우리 반(가상)에서 안전띠를 늘 매는 친구는 몇 명일까요?" 그림을 놓고 두 줄을 더해 모두 몇 명인지 함께 센다. 이 자료는 가상이라고 밝힌다. 가끔 매는 까닭을 짐작하게 하면(기다릴 반응: "가까운 길이라서요") "가까운 길에서는 사고가 안 날까요?"라고 되묻는다. 누가 가끔 맸는지 찾거나 묻지 않는다.',
          task: '표를 보고 그림그래프를 완성한 뒤, 그래프를 읽고 물음에 답해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '표를 보고 안전띠 습관 그림그래프를 완성해요.', toolOptions: Object.assign({}, PIC, { mode: 'build', data: BELT }), target: { build: true }, difficulty: 0.2,
              levels: { easy: { toolOptions: { given: [0] }, target: { build: true } } } },
            { prompt: '그래프의 두 줄을 더하면 모두 몇 명인가요?', toolOptions: Object.assign({}, PIC, { mode: 'read', data: BELT, question: '모두 몇 명인가요?', choices: ['18명', '24명', '6명'] }), target: { pick: 1 }, difficulty: 0.2 },
            { prompt: '늘 매는 친구는 가끔 매는 친구보다 몇 명 더 많나요?', toolOptions: Object.assign({}, PIC, { mode: 'read', data: BELT, question: '몇 명 더 많나요?', choices: ['6명', '12명', '18명'] }), target: { pick: 1 }, difficulty: 0.25, conclude: '가까운 길이라도 안전띠는 늘 매요. 우리 반 모두가 "늘 맴" 줄에 들어가도록 해요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '표의 빈칸을 채워요(가상의 우리 반).', columns: ['습관', '친구 수(명)'], cells: [['늘 맴', '18'], ['가끔 맴', ''], ['합계', '']], answer: '6, 24' }] },
        notes: '그래프 자료는 가상이다. 우리 반 조사를 하더라도 누가 가끔 매는지 밝히지 않는다.',
      }),
      C({
        id: 'saf-traffic.e34.carride.wrap.tree', type: 'wrap', title: '자동차 약속 그물',
        method: '자동차 약속 그물', tool: 'mindmap', minutes: 6,
        levels: { easy: '가지 2개(탈 때·가는 동안)에 카드 4장을 넣는다.', base: '가지 3개에 카드 6장을 넣는다.', challenge: '함정 카드 1장이 섞인 7장에서 그것을 빼고 넣는다.' },
        wrap: {
          teacher: '"자동차 약속을 탈 때·가는 동안·내릴 때로 모아 볼까요?" 카드를 다 넣으면 가지마다 한 목소리로 읽는다. 함정 카드 \'어른 무릎에 앉기\'를 넣으려는 학생에게 "차가 갑자기 서면 어른 팔이 끝까지 잡아 줄까요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '자동차', slots: ['탈 때', '가는 동안', '내릴 때'], cards: ['뒷좌석 앉기', '바른 자세', '뒤 살피기', '안전띠 딸깍', '운전 방해 않기', '보도 쪽 문'] }, prompt: '자동차 약속 카드를 가지에 넣어요.', target: { sort: { '탈 때': ['뒷좌석 앉기', '안전띠 딸깍'], '가는 동안': ['바른 자세', '운전 방해 않기'], '내릴 때': ['뒤 살피기', '보도 쪽 문'] } }, difficulty: 0.15,
              levels: {
                easy: { prompt: '약속 카드를 두 가지에 넣어요.', toolOptions: { slots: ['탈 때', '가는 동안'], cards: ['뒷좌석 앉기', '바른 자세', '안전띠 딸깍', '운전 방해 않기'] }, target: { sort: { '탈 때': ['뒷좌석 앉기', '안전띠 딸깍'], '가는 동안': ['바른 자세', '운전 방해 않기'] } } },
                challenge: { prompt: '약속 카드를 넣고 틀린 카드는 빼요.', toolOptions: { cards: ['뒷좌석 앉기', '바른 자세', '어른 무릎에 앉기', '뒤 살피기', '안전띠 딸깍', '운전 방해 않기', '보도 쪽 문'] }, target: { sort: { '탈 때': ['뒷좌석 앉기', '안전띠 딸깍'], '가는 동안': ['바른 자세', '운전 방해 않기'], '내릴 때': ['뒤 살피기', '보도 쪽 문'] } } },
              } },
            { type: 'choice', prompt: '가까운 길을 갈 때 안전띠는?', options: ['가까우니 안 매요', '가까워도 꼭 매요', '반만 매요'], answer: 1, difficulty: 0.1, explain: '가까운 길에서도 차는 갑자기 설 수 있어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '자동차 탈 때와 내릴 때',
          items: [
            { type: 'table', prompt: '때마다 지킬 약속을 써요.', columns: ['탈 때', '가는 동안', '내릴 때'], cells: [['', '', '']], answer: '안전띠 딸깍, 바른 자세, 보도 쪽 문' },
            { type: 'draw', prompt: '뒷좌석에서 안전띠를 바르게 맨 내 모습을 그려요.' },
          ],
        },
      }),
      C({
        id: 'saf-traffic.e34.carride.wrap.family', type: 'wrap', title: '가족과 함께 지킬 약속',
        method: '가족과 함께 지킬 약속', tool: 'kitchen', minutes: 6,
        levels: { easy: '가족 약속 칸 2개에서 함께 지킬 것을 표시한다.', base: '가족 약속 칸 3개에서 함께 지킬 것을 표시한다.', challenge: '3개를 표시한 뒤 가족에게 할 말을 한 문장으로 정한다.' },
        wrap: {
          teacher: '"집에 가서 가족과 함께 지킬 약속을 골라 볼까요?" 점검표를 한 칸씩 읽고 우리 가족과 지킬 것에 표시하게 한다. 가족 차가 없는 학생은 다른 차(학원 차·친척 차)를 탈 때로 고르게 한다. 가족에게 할 말을 "우리 가족 모두 ○○해요" 한 문장으로 정해 짝에게 말해 본다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '우리 가족 약속', items: [{ id: 'all', text: '모두 안전띠 매기' }, { id: 'look', text: '내릴 때 뒤 보기' }, { id: 'quiet', text: '운전 방해 않기' }] }, prompt: '가족과 함께 지킬 약속에 표시해요.', target: { selfCheck: true }, difficulty: 0.1,
              levels: { easy: { toolOptions: { items: [{ id: 'all', text: '모두 안전띠 매기' }, { id: 'look', text: '내릴 때 뒤 보기' }] } } } },
            { type: 'choice', prompt: '어른이 아이를 안고 차에 타는 것은?', options: ['안전해요', '안전하지 않아요', '가까우면 괜찮아요'], answer: 1, difficulty: 0.1, explain: '차가 갑자기 서면 어른 팔로는 아이를 지킬 수 없어요. 아이도 자리에 앉아 안전띠를 매요.' },
            { type: 'short', prompt: '가족에게 할 말을 한 문장으로 써요.' },
          ],
        },
        worksheet: {
          title: '우리 가족 자동차 약속',
          items: [
            { type: 'check', prompt: '가족과 함께 지킬 약속에 표시해요.', options: ['모두 안전띠', '내릴 때 뒤 보기', '운전 방해 않기'] },
            { type: 'short', prompt: '가족에게 할 말을 써요.' },
          ],
        },
      }),
      C({
        id: 'saf-traffic.e34.carride.wrap.self', type: 'wrap', title: '자동차 안전 스스로 점검',
        method: '오늘 배운 것 스스로 점검', tool: 'timer', minutes: 6,
        levels: { easy: '점검 칸 2개에 표시한다.', base: '점검 칸 3개에 표시한다.', challenge: '점검 칸 4개에 표시하고 모르는 것을 짝에게 물어 고친다.' },
        wrap: {
          teacher: '"오늘 배운 것 가운데 자신 있게 아는 것에 표시해요." 점검 칸을 함께 읽는다. 표시하지 못한 칸이 있는 학생은 짝에게 물어 고치게 한다. 출구 2번에서 \'아무 문\'을 고른 학생에게 오늘 지도에서 찾은 \'보도 쪽 문\'을 다시 떠올리게 한다.',
          exitTicket: [
            SELF('자동차 안전 점검', ['뒷좌석에 앉아요', '안전띠를 당겨 확인해요', '보도 쪽 문으로 내려요', '내리기 전 뒤를 봐요'], '자신 있게 아는 것에 표시해요.'),
            { type: 'choice', prompt: '자동차에서 내리기 전에 할 일은?', options: ['아무 문이나 열어요', '뒤를 보고 보도 쪽 문으로', '차가 움직일 때 미리 열어요'], answer: 1, difficulty: 0.1, explain: '차가 완전히 선 뒤 뒤를 살피고 보도 쪽 문으로 내려요.' },
            { type: 'short', prompt: '짝에게 물어 고친 것을 한 줄로 써요.' },
          ],
        },
        worksheet: {
          title: '자동차 안전 스스로 점검',
          items: [
            { type: 'check', prompt: '자신 있게 아는 것에 표시해요.', options: ['뒷좌석', '안전띠 확인', '보도 쪽 문', '뒤 살피기'] },
            { type: 'short', prompt: '아직 헷갈리는 것을 써요.' },
          ],
          easy: { note: '탈 때·가는 동안·내릴 때를 떠올려요.', items: [{ type: 'choice', prompt: '내릴 문은?', options: ['보도 쪽', '찻길 쪽'], answer: '보도 쪽' }] },
        },
      }),
    );
  }

  PaperLessons.registerModules(M);
})();
