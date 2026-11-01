/* 법정교육 보건 — 초3-4 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/safety-b.json 의 health 초3-4.
 * 근거: 학교보건법 제9조·제9조의2(보건교육 — 학교급별 1개 학년 이상 연 17차시, 흡연·음주·약물 오남용 예방은 보건교육 내용) — research-mandatory §1 표.
 *   초 보건 주제(개인위생·손씻기, 감염병 예방, 건강한 식생활, 응급처치 기초 — §2, 미검증). 근거 파일에는 주제 이름뿐이라 세부 문장은 아래 '사람 확인'에 모았다.
 * 초3-4 기준: 상황 판단(그림+짧은 글), 차례 정하기, 고른 이유 말하기, 짝 토의, 간단한 표. 법 조문·통계 해석·긴 글쓰기는 쓰지 않는다.
 * 이 파일의 틀(모든 모듈):
 *   - 장면·인물은 모두 직접 지은 가상의 것이다(가명 두 글자). 학생 자신의 몸·건강 상태·검사 결과·간식 습관·걱정·가정 형편·가족의 흡연을 묻거나 채점하지 않는다.
 *   - 음식·몸을 좋다/나쁘다로 나누지 않는다: 간식은 '이에 남기 쉬운/덜 남는', 자세는 '눈이 편한/힘든'처럼 사실로 나누고, 어떤 간식도 '먹으면 안 되는 것'으로 두지 않는다.
 *   - 시간·거리·횟수 수치는 근거 파일에 없어 화면에 쓰지 않았다. 타이머 값은 모두 '우리 반 약속' 연습값이라고 화면 제목에 밝혔다.
 *   - 질병·약은 사실 수준만(병균이 들어오는 곳·옮는 길). 약 이름·병 이름·검사 기준 수치는 쓰지 않는다.
 *   - 같은 학년군 안전교육 장면과 겹치지 않게 했다: saf-drug/e34 간접흡연(버스 정류장 연기·숨길 따라가기·금연 표지 지도·부탁 말 고르기·그림그래프)
 *     대신 공원 벤치 연기·숨길 기관 찾기·도서관 가는 길 지도·타이머 역할 연습을, saf-life/e34 식중독(소풍·손 씻기 30초·손 씻기 그래프·우유)
 *     대신 교실 문손잡이·물병·기침 장면을 썼다.
 * 주제 6개(3·4학년 함께) × 도입 2 · 활동 3 · 정리 2 = 계획 모듈 42개.
 * 체계도 계획대로 못 한 것(교구 한계 — levels 글은 실제 설정대로 적었다):
 *   - body 칸에 입·이·상처·손·눈꺼풀·눈물샘이 없다: germ-routes.intro.enter-body(입 → 혀, 상처 → 피부), checkup.intro.check-parts(이 → 혀, 입 안을 짚는다),
 *     worry-body.intro.body-signal(손 → 손목), eye-screen.intro.eye-parts(눈 칸 하나만 고르고 눈동자·눈꺼풀·눈물은 교사가 그림 자료로 말함),
 *     snack-sugar.intro.tooth-find(몸속 기관 '입'을 찾고 앞니·어금니·잇몸은 교사가 입 모형·그림으로 말함)로 바꿨다.
 *   - map 은 길을 잇지 못한다: checkup.activity.check-route(검사 장소를 차례대로 핀 꽂기 + 까닭 고르기), secondhand-smoke.activity.avoid-map(연기 날 곳·
 *     피해 갈 길·쉬어 갈 곳에 핀 꽂기)으로, germ-routes.activity.class-map 의 범례 표시는 핀 + '언제 닦을까' 보기 고르기로 했다.
 *   - 문항 수는 단계마다 같다: '두 곳/네 곳', '카드 4장/6장', '가지 2개/3개' 같은 계획은 문항마다의 카드·칸 수(쉬움에서 줄임)와 이름 보이기로 나눴다.
 *   - 정리 질문은 단계별 판이 없어 출구 교구 질문의 단계별 판(칸 수·카드 수)과 교사 진행으로 나눴다. '짝 안내판 좋은 점 말하기' 같은 도전은 교사 진행이다.
 *   - collage 판에 글자를 붙일 수 없어 안내판 문구는 판 아래 종이에 쓴다.
 *   - checkup.activity.check-order 의 도전 '걱정될 때 할 일 고르기'는 함정 카드 빼기 + 교사 물음으로, snack-sugar.activity.snack-money 의 '남은 돈 쓰임'은
 *     예산을 줄인 셋째 문항으로 했다.
 * 사람 확인: 근거 파일에는 주제 이름뿐이라 아래 문장은 일반 보건 지식으로 썼다. 확인처는 괄호 안
 *   (질병관리청 국가건강정보포털·감염병 예방 수칙, 교육부 학생 건강검사 안내·보건 교과 지도서, 보건복지부·한국건강증진개발원 금연 자료, 대한구강보건협회·보건복지부 구강 보건 자료).
 *   - germ-routes.*: 병균이 손·기침(재채기)·함께 쓰는 물건으로 옮는다 / 눈·코·입·상처로 들어오기 쉽다 / 막는 행동(비누로 손 씻기·소매나 휴지로 가리기·
 *     물병·수건 따로 쓰기·자주 닿는 곳 닦기·눈 비비지 않기) / 손이 많이 닿는 곳(문손잡이·공용 학용품·자판·수도꼭지) (질병관리청 국가건강정보포털)
 *   - checkup.*: 학교 건강검사에서 시력(글자판·한쪽 눈 가리기)·청력(헤드폰·소리 나면 손 들기)·구강(작은 거울로 이 살피기)을 본다 / 검사 차례 /
 *     결과 안내문을 보호자와 보고 필요하면 병원에 간다 — 실제 학년별 검사 항목·검진 기관은 학교마다 다르니 보건 선생님이 맞춘다 (교육부 학생 건강검사 안내)
 *   - eye-screen.*: 어두운 곳·가까이·오래 보면 눈이 피로해진다 / 밝은 곳·화면 멀리·가끔 멀리 보기·눈 깜빡이기·눈 감기 / 눈물이 눈을 촉촉하게 한다
 *     — 거리·시간 수치는 쓰지 않았다(타이머 값은 '우리 반 약속') (질병관리청 국가건강정보포털 눈 건강)
 *   - snack-sugar.*: 이에 남은 단 음식으로 충치가 생기는 차례(남음 → 세균 → 이 겉이 상함 → 시큰거림) / 끈적한 간식·오래 빨아 먹기·자기 전 간식이
 *     이에 오래 남는다 / 먹은 뒤 물로 헹구고 이 닦기 / 어금니 씹는 면 홈에 충치가 잘 생긴다 / 간식 값은 연습용 가상 값 (대한구강보건협회·보건복지부)
 *   - worry-body.*: 걱정할 때 배·가슴·손에 오는 신호(배 아픔·가슴 두근거림·손에 힘 들어감) / 쉬는 방법(천천히 숨 쉬기·그림 그리기·믿는 어른께 말하기) /
 *     숨 고르기 횟수는 '우리 반 약속' 연습값 / 말할 수 있는 사람(담임·보건·상담 선생님·보호자) (교육부 학생 정서·행동 지원 안내, 보건 교과 지도서)
 *   - secondhand-smoke.*: 담배 연기가 코 → 기관 → 폐로 들어가 숨 쉬는 기관에 해롭다 / 피하는 행동(바람 반대쪽으로 자리 옮기기·창문 열기·어른께 알리기)과
 *     공손한 부탁 말 / '흡연 구역' 표시가 있는 가상 동네 지도 (보건복지부·한국건강증진개발원 금연 자료)
 */
(function () {
  const BASE = { schema: 'edu-module.v1', domain: 'health', band: '초3-4' };
  const T = (topic) => (o) => Object.assign({}, BASE, { topic: `health.e34.${topic}`, grades: [3, 4] }, o);
  const M = [];
  const strip = (p) => String(p).replace(/[.?!]$/, '');
  const idOf = (c) => (typeof c === 'string' ? c : c.id);
  const mix = (groups) => { const out = []; const n = Math.max(...groups.map((g) => g.length)); for (let i = 0; i < n; i++) for (const g of groups) if (g[i] != null) out.push(g[i]); return out; };
  const count = (groups) => groups.reduce((a, g) => a + g.length, 0);
  const plain = (list) => list.map((x) => ({ id: x.id, text: x.text }));

  // 가지 나누기(mindmap sort): 쉬움 = ez 가지(번호)만, 가지마다 앞 n장 / 도전 = 가지마다 hard 카드를 더함
  const WEB = (prompt, base, slots, groups, ez, hard, d, more) => {
    const tg = (sl, gs) => ({ sort: Object.fromEntries(sl.map((s, i) => [s, gs[i].map(idOf)])) });
    const eSlots = ez.map(([i]) => slots[i]); const eGroups = ez.map(([i, n]) => groups[i].slice(0, n));
    const hGroups = groups.map((g, i) => g.concat(hard[i] || []));
    const p = strip(prompt);
    return {
      prompt, toolOptions: Object.assign({}, base, { slots, cards: mix(groups) }), target: tg(slots, groups), difficulty: d,
      levels: {
        easy: { prompt: `${p}(가지 ${eSlots.length}개).`, toolOptions: { slots: eSlots, cards: mix(eGroups) }, target: tg(eSlots, eGroups) },
        challenge: { prompt: `${p}(${count(hGroups)}장).`, toolOptions: { cards: mix(hGroups) }, target: tg(slots, hGroups) },
      },
      ...more,
    };
  };

  // 바구니 나누기(sortboard 글 카드 모드): 쉬움 = ez 칸(번호)마다 앞 n장, 도전 = 칸마다 hard 카드를 more 로 더한다
  const BOX = (prompt, slots, groups, ez, hard, d, more) => {
    const tg = (sl, gs) => ({ sort: Object.fromEntries(sl.map((s, i) => [s, gs[i]])) });
    const eSlots = ez.map(([i]) => slots[i]); const eGroups = ez.map(([i, n]) => groups[i].slice(0, n));
    const hGroups = groups.map((g, i) => g.concat(hard[i] || []));
    const p = strip(prompt);
    return {
      prompt, toolOptions: { slots, cards: mix(groups) }, target: tg(slots, groups), difficulty: d,
      levels: {
        easy: { prompt: `${p}(${count(eGroups)}장).`, toolOptions: { slots: eSlots, cards: mix(eGroups) }, target: tg(eSlots, eGroups) },
        challenge: { prompt: `${p}(${count(hGroups)}장).`, toolOptions: { more: mix(hard.map((h) => h || [])) }, target: tg(slots, hGroups) },
      },
      ...more,
    };
  };
  const BOXLV = { easy: { instant: true, showCount: true }, base: {}, challenge: { shuffle: true } };

  // 차례 놓기(story·kitchen·timeline order): 기본 = 카드 전부, 쉬움 = keep 번째 카드들만, 도전 = 틀린 카드(trap) 한 장이 섞인다
  const NAMES = { 2: ['먼저', '다음'], 3: ['처음', '다음', '끝'], 4: ['처음', '다음', '그다음', '끝'], 5: ['1', '2', '3', '4', '5'] };
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

  // 짝 잇기(mindmap·kitchen match): rows = [[칸 글, 카드 글], …], 쉬움 앞 2줄, 도전 = 함정 카드 한 장 더
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

  // 바구니에 고르기(kitchen·mindmap pick): cards = [{ id, text, ok? }], 쉬움 = easyIds 카드만, 도전 = hard 카드를 더함
  const PICK = (prompt, base, cards, easyIds, hard, d, more) => {
    const ok = (list) => list.filter((c) => c.ok).map((c) => c.id);
    const easy = cards.filter((c) => easyIds.includes(c.id));
    const all = cards.concat(hard || []);
    const lv = { easy: { prompt: `${strip(prompt)}(${easy.length}장).`, toolOptions: { cards: plain(easy) }, target: { pick: ok(easy) } } };
    if (hard && hard.length) lv.challenge = { prompt: `${strip(prompt)}(${all.length}장).`, toolOptions: { cards: plain(all) }, target: { pick: ok(all) } };
    return { prompt, toolOptions: Object.assign({ mode: 'pick' }, base, { cards: plain(cards) }), target: { pick: ok(cards) }, difficulty: d, levels: lv, ...more };
  };

  // 칸 지도 핀: 도전 = '왜 여기일까' 보기 고르기를 함께 한다(ask)
  const PIN = (map, prompt, region, why, d, more) => ({
    prompt, toolOptions: map, target: { region }, difficulty: d,
    levels: { challenge: { prompt: `${strip(prompt)}. 까닭도 골라요.`, toolOptions: { ask: { q: why.q, choices: why.choices } }, target: { region, pick: why.answer } } },
    ...more,
  });

  // 스스로 점검(kitchen checklist selfCheck) 출구 질문: 쉬움 = 앞 nE칸, 기본 = 앞 nB칸, 도전 = 전부
  const KSELF = (title, items, nE, nB, prompt) => {
    const it = items.map((t, i) => ({ id: `c${i + 1}`, text: t }));
    return {
      type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title, items: it.slice(0, nB) }, prompt: prompt || '오늘 해 볼 것에 스스로 표시해요.', target: { selfCheck: true }, difficulty: 0.1,
      levels: { easy: { toolOptions: { items: it.slice(0, nE) }, target: { selfCheck: true } }, challenge: { toolOptions: { items: it }, target: { selfCheck: true } } },
    };
  };
  // 색종이 안내판(collage) 출구 질문: 쉬움 = 조각 nE개 이상·점검 2칸, 기본 = nB개·점검 3칸, 도전 = nC개·점검 4칸
  const COL = (prompt, checks, nE, nB, nC, opts) => ({
    type: 'tool', tool: 'collage', options: Object.assign({ maxPieces: 14 }, opts || {}), prompt, target: { selfCheck: checks.slice(0, 3), minPieces: nB }, difficulty: 0.1,
    levels: { easy: { target: { selfCheck: checks.slice(0, 2), minPieces: nE } }, challenge: { target: { selfCheck: checks.slice(0, 4), minPieces: nC } } },
  });
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  const art = (draw, banner, motif, color) => ({ draw, banner, extra: [{ motif, x: 300, y: 96, color }] });

  // ======================================================================================================
  // 병균이 옮는 길과 막는 행동 (보건 초: 감염병 예방)
  // ======================================================================================================
  {
    const C = T('germ-routes');
    const ROOM = {
      title: '우리 교실(가상)', grid: [6, 4],
      regions: [
        { name: '교실 문손잡이', cells: [[0, 0]] }, { name: '칠판', cells: [[1, 0], [2, 0], [3, 0]] }, { name: '창가 화분', cells: [[4, 0], [5, 0]] },
        { name: '함께 쓰는 색연필 통', cells: [[0, 1]] }, { name: '책상 줄', cells: [[1, 1], [2, 1], [3, 1], [1, 2], [2, 2], [3, 2]] }, { name: '교실 컴퓨터 자판', cells: [[4, 1], [5, 1]] },
        { name: '수도꼭지', cells: [[0, 2], [0, 3]] }, { name: '책꽂이', cells: [[1, 3], [2, 3], [3, 3]] }, { name: '사물함', cells: [[4, 2], [5, 2], [4, 3], [5, 3]] },
      ],
    };
    M.push(
      C({
        id: 'health.e34.germ-routes.intro.route-story', type: 'intro', title: '감기가 옮아 간 차례',
        method: '감기가 퍼지는 장면 차례', tool: 'story', minutes: 5,
        levels: { easy: '장면 3장(기침 → 손잡이 → 눈 비비기)이 놓이는 것을 함께 본다.', base: '장면 4장이 차례로 놓이는 것을 보고 어디서 옮았는지 말한다.', challenge: '4장을 보고 막을 수 있었던 장면을 하나 짚어 짝에게 말한다.' },
        intro: {
          teacher: '"하루가 감기에 걸렸는데 다음 날 다온이도 기침을 해요. 병균은 어떻게 다온이에게 갔을까요?" 시연 단추로 기침 → 문손잡이 → 다온이가 잡음 → 눈 비빔 장면이 놓이는 모습을 보인다. "감기는 그냥 옮아요"라는 말이 나오면 "그냥 날아갔을까요? 다온이 손은 무엇을 만졌나요?"라고 되묻는다. 오늘은 병균이 옮는 길을 찾고, 길마다 막는 행동을 정한다고 밝힌다. 감기에 걸린 하루를 탓하지 않는다는 것도 함께 말한다.',
          student: '하루와 다온이의 이야기를 차례대로 보고, 병균이 어디서 다온이에게 옮았는지 찾아요.',
          demo: { tool: 'story', options: { mode: 'order', slots: ['처음', '다음', '그다음', '끝'], cards: [{ id: 'cough', text: '하루가 손에 기침' }, { id: 'knob', text: '하루가 문손잡이 잡음' }, { id: 'touch', text: '다온이가 손잡이 잡음' }, { id: 'rub', text: '다온이가 눈을 비빔' }], shuffle: false },
            sequence: [{ order: ['cough', 'knob', 'rub'] }, { order: ['cough', 'knob', 'touch', 'rub'] }] },
          art: art('four paper story panels in a classroom: a child coughing into a hand, the hand on a paper door knob, another child holding the same knob, then rubbing an eye', '병균은 어디로 갔을까?', 'cloud', 'sky'),
        },
        notes: '장면 인물(하루·다온)은 가상이다. 우리 반에서 누가 감기에 걸렸는지 묻지 않고, 아픈 친구를 탓하는 말이 나오면 "누구나 아플 수 있어요. 우리는 옮는 길을 막아요"라고 바로잡는다.',
      }),
      C({
        id: 'health.e34.germ-routes.intro.enter-body', type: 'intro', title: '병균이 들어오는 몸 자리',
        method: '병균이 들어오는 곳', tool: 'body', minutes: 5,
        levels: { easy: '교사가 눈·코 두 곳을 고르는 모습을 함께 본다.', base: '눈·코·혀(입 안)·피부(상처) 네 곳이 골라지는 것을 본다.', challenge: '네 곳마다 병균이 들어오는 상황(눈 비비기 등)을 짝에게 말한다.' },
        intro: {
          teacher: '"병균은 우리 몸 어디로 들어오기 쉬울까요?" 시연 단추로 종이 몸에서 눈·코를, 이어서 혀(입 안)·피부를 고르는 모습을 보인다. 입 칸이 따로 없으니 혀 칸을 짚으며 "입 안"이라고 말하고, 피부 칸에서는 "다친 상처"라고 말한다. "병균은 피부로 다 들어와요"라는 말이 나오면 "다치지 않은 피부는 병균을 막아 줘요. 그러면 어디가 열려 있을까요?"라고 되묻는다.',
          student: '종이 몸에서 병균이 들어오기 쉬운 곳을 찾아요. 그곳을 손으로 자주 만지면 어떻게 될지 생각해요.',
          demo: { tool: 'body', options: { mode: 'parts', parts: ['눈', '코', '혀', '피부', '무릎', '어깨'], names: true }, sequence: [{ parts: ['눈', '코'] }, { parts: ['눈', '코', '혀', '피부'] }] },
          art: art('a friendly paper body outline with small paper doors drawn on the eyes, the nose, the mouth and a small scratch on the arm, tiny paper germs waiting outside', '병균이 들어오는 문', 'star', 'buttercup'),
        },
        notes: 'body 교구에 입·상처 칸이 없어 혀(입 안)·피부(상처)로 짚는다. 학생 몸의 상처를 보이게 하거나 묻지 않는다.',
      }),
      C({
        id: 'health.e34.germ-routes.activity.route-web', type: 'activity', title: '옮는 길과 막는 행동 잇기',
        method: '옮는 길과 막는 행동 잇기', tool: 'mindmap', minutes: 14,
        levels: { easy: '가지 2개(손·기침)에 카드를 나누고, 놓으면 바로 맞는지 알려 준다.', base: '가지 3개(손·기침·물건)에 카드를 나눈 뒤 확인한다.', challenge: '카드가 가지마다 한 장씩 더해지고, 셋째 문항은 함정 카드가 하나 남는다. 고른 까닭을 짝에게 말한다.' },
        activity: {
          title: '옮는 길과 막는 행동 잇기', tool: 'mindmap',
          teacher: '"이 행동은 어느 길을 막을까요?" 카드를 놓을 때마다 "○○ 길은 ○○로 막아요" 틀로 짝에게 말하게 한다. "소매로 가리기"를 손 가지에 두는 학생에게 "기침이 나올 때 하는 일이지요? 어느 길에서 나오는 병균일까요?"라고 묻는다. "손으로 입을 가리면 돼요"라는 말이 나오면 "가린 손으로 문손잡이를 잡으면 병균은 어디로 갈까요?"라고 되물어 소매·휴지로 가린다는 점을 짚는다.',
          task: '병균이 옮는 길(손·기침·물건) 가지에 맞는 카드를 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            WEB('막는 행동을 옮는 길 가지에 놓아요.', { topic: '병균이 옮는 길' }, ['손', '기침', '물건'], [['비누로 손 씻기', '눈 비비지 않기'], ['소매로 가리기', '휴지로 가리기'], ['물병 따로 쓰기', '수건 따로 쓰기']], [[0, 2], [1, 2]], [['먹기 전 손 씻기'], ['쓴 휴지 버리기'], ['숟가락 따로 쓰기']], 0.15),
            WEB('병균이 옮는 장면을 길 가지에 놓아요.', { topic: '어떻게 옮았을까' }, ['손', '기침', '물건'], [['손잡이 잡고 코 만짐', '안 씻고 간식 먹음'], ['얼굴 앞 재채기', '가리지 않은 기침'], ['물병 돌려 마심', '수건 같이 씀']], [[0, 2], [1, 2]], [['자판 치고 입 만짐'], ['가까이서 큰 기침'], ['리코더 같이 붊']], 0.2),
            MATCH('옮는 길과 막는 행동을 짝 지어요.', { topic: '길마다 막아요' }, [['손으로 옮아요', '비누로 손 씻기'], ['기침으로 옮아요', '소매로 가리기'], ['물건으로 옮아요', '내 물건 따로 쓰기']], '손으로 입 가리기', 0.25, { conclude: '병균은 손·기침·물건으로 옮아요. 손 씻기, 소매로 가리기, 내 물건 따로 쓰기로 길을 막아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '옮는 길에 맞는 막는 행동을 써요.', columns: ['옮는 길', '막는 행동'], cells: [['손', ''], ['기침', ''], ['물건', '']], answer: '손 씻기, 소매로 가리기, 따로 쓰기' }] },
      }),
      C({
        id: 'health.e34.germ-routes.activity.class-map', type: 'activity', title: '손이 많이 닿는 곳 핀 꽂기',
        method: '손이 많이 닿는 곳 핀 찍기', tool: 'map', minutes: 14,
        levels: { easy: '핀을 놓으면 그 칸의 이름이 바로 보인다.', base: '지도의 이름을 보고 물음마다 알맞은 곳에 핀을 꽂는다(네 곳).', challenge: '핀을 꽂은 뒤 그곳을 언제 닦거나 손을 씻을지 보기에서 고른다.' },
        activity: {
          title: '손이 많이 닿는 곳 핀 꽂기', tool: 'map',
          teacher: '"우리 교실에서 하루에 가장 많은 손이 닿는 곳은 어디일까요?" 핀을 꽂기 전에 그곳을 하루에 몇 사람이 만질지 어림해 보게 한다. 칠판이나 화분에 핀을 꽂는 학생에게 "그곳은 친구들이 손으로 자주 만지나요?"라고 묻는다. "그럼 문손잡이를 만지지 말아야 해요"라는 말이 나오면 "만지지 않고는 문을 열 수 없지요. 만진 뒤에 무엇을 하면 될까요?"라고 되물어 손 씻기와 닦기로 잇는다.',
          task: '가상 교실 지도를 보고 물음에 맞는 곳에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            PIN(ROOM, '드나들 때마다 모두가 잡는 곳에 핀을 꽂아요.', '교실 문손잡이', { q: '이곳을 잡은 뒤에는?', choices: ['눈을 비벼요', '먹기 전에 손 씻어요', '그대로 간식 먹어요'], answer: 1 }, 0.15),
            PIN(ROOM, '미술 시간에 여럿이 함께 쓰는 곳에 핀을 꽂아요.', '함께 쓰는 색연필 통', { q: '다 쓴 뒤에는?', choices: ['손을 씻어요', '입에 물어요', '코를 만져요'], answer: 0 }, 0.2),
            PIN(ROOM, '여러 반 친구가 손가락으로 치는 곳에 핀을 꽂아요.', '교실 컴퓨터 자판', { q: '이곳은 언제 닦을까요?', choices: ['정한 때 어른과 닦아요', '닦지 않아요', '침으로 닦아요'], answer: 0 }, 0.2),
            PIN(ROOM, '손 씻기 전에 모두 손을 대는 곳에 핀을 꽂아요.', '수도꼭지', { q: '손을 씻은 뒤 꼭지는?', choices: ['씻은 손으로 잠가요', '발로 차요', '그냥 둬요'], answer: 0 }, 0.25, { conclude: '손이 많이 닿는 곳은 병균이 옮기 쉬워요. 만진 뒤에는 손을 씻고, 정한 때에 닦아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '우리 교실에서 손이 많이 닿는 곳에 표시해요.', options: ['문손잡이', '함께 쓰는 학용품', '창밖 하늘', '수도꼭지'] }] },
        notes: '지도는 가상 교실이다. 닦기는 교사가 정한 때·방법으로 어른과 함께 하고, 학생에게 소독약을 다루게 하지 않는다.',
      }),
      C({
        id: 'health.e34.germ-routes.activity.share-dilemma', type: 'activity', title: '갈림길: 물병 같이 마실래?',
        method: '물병 나눠 마시기 갈림길', tool: 'dilemma', minutes: 14,
        levels: { easy: '장면마다 갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '장면마다 갈림 2번, 보기 3개씩 고르며 결과를 따라간다.', challenge: '갈림 2번을 지난 뒤 근거 카드 3장 가운데 알맞은 2장을 고른다.' },
        activity: {
          title: '갈림길: 같이 쓰자고 할 때', tool: 'dilemma',
          teacher: '"친구 마음도 지키고 병균도 막는 말은 무엇일까요?" 보기를 고를 때마다 결과를 소리 내어 읽고, 친구가 서운해할지·병균이 옮을지 두 가지를 함께 짚는다. 같이 마시는 길을 고른 학생을 나무라지 않고 "친구와 나누고 싶은 마음은 좋아요. 병균은 나누지 않으려면 어떻게 할까요?"라고 되묻는다. 거절해도 다른 방법(물 떠다 주기·컵 따로 쓰기)으로 친구를 도울 수 있다는 것을 짚는다.',
          task: '장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('친구가 물병을 같이 마시자고 해요.', {
              text: '체육이 끝나고 목이 마른데 물병을 두고 왔어요. 시우가 "내 거 같이 마셔" 해요.', motif: 'sun',
              choices: [
                { id: 'sip', text: '입 대고 같이 마신다', result: '시우 물병에 내 침이 묻었어요.', impact: [{ who: '시우와 나', text: '병균이 옮을 수 있어요', tone: -1 }], why: '입을 댄 물병으로 병균이 옮을 수 있어요.' },
                { id: 'thanks', text: '"고마워, 컵에 따라 줄래?"', result: '시우가 웃으며 컵에 따라 줬어요.', ending: '고마운 마음도 전하고 병균도 막았어요.', next: {
                  text: '컵이 하나뿐이라 시우도 그 컵으로 마시려 해요.', choices: [
                    { id: 'wash', text: '"컵 헹궈서 줄게"', result: '헹군 컵으로 시우도 마셨어요.', impact: [{ who: '시우', text: '편하게 마셨어요', tone: 1 }], ending: '컵을 헹구고 따로 써서 둘 다 지켰어요.' },
                    { id: 'same', text: '그냥 같이 쓴다', result: '내 침이 묻은 컵을 시우가 썼어요.', impact: [{ who: '시우', text: '병균이 옮을 수 있어요', tone: -1 }], why: '입을 댄 컵은 헹구거나 따로 써요.' },
                    { id: 'grab', text: '물병째 다 마신다', result: '시우가 마실 물이 없어졌어요.', impact: [{ who: '시우', text: '서운해요', tone: -1 }] },
                  ] } },
                { id: 'grabit', text: '말없이 가져가 마신다', result: '시우가 놀라 물병을 돌려받았어요.', impact: [{ who: '시우', text: '당황했어요', tone: -1 }] },
              ] }, [['thanks', 'wash']],
            [{ id: 'mouth', text: '입 댄 물건으로 병균이 옮아서' }, { id: 'kind', text: '고마운 마음도 말할 수 있어서' }, { id: 'friend', text: '친한 친구는 괜찮아서', why: '친한 친구 사이에도 병균은 옮아요.' }], ['mouth', 'kind'], 0.2),
            DIL('친구가 먹던 아이스크림을 한 입 주려 해요.', {
              text: '쉬는 날 놀이터에서 하린이가 먹던 아이스크림을 "한 입 먹어 봐" 하고 내밀어요.', motif: 'flower',
              choices: [
                { id: 'bite', text: '그대로 한 입 먹는다', result: '하린이 입이 닿은 곳을 먹었어요.', impact: [{ who: '나', text: '병균이 옮을 수 있어요', tone: -1 }], why: '입이 닿은 음식으로 병균이 옮을 수 있어요.' },
                { id: 'no', text: '"마음만 받을게, 고마워"', result: '하린이가 "그래" 하고 웃었어요.', ending: '고맙다고 말하며 정중히 거절했어요.', next: {
                  text: '하린이가 "그럼 내 과자는 같이 먹자" 해요. 둘 다 손을 안 씻었어요.', choices: [
                    { id: 'washfirst', text: '"손 씻고 와서 먹자"', result: '둘이 손을 씻고 와서 나눠 먹었어요.', impact: [{ who: '하린이와 나', text: '깨끗하게 먹었어요', tone: 1 }], ending: '손을 씻고 덜어 먹어 함께 즐겼어요.' },
                    { id: 'dirty', text: '바로 손으로 집어 먹는다', result: '놀이 기구를 만진 손으로 먹었어요.', impact: [{ who: '하린이와 나', text: '병균이 옮을 수 있어요', tone: -1 }], why: '놀고 난 손은 먼저 씻어요.' },
                    { id: 'run', text: '대답 없이 가 버린다', result: '하린이가 서운해했어요.', impact: [{ who: '하린이', text: '서운해요', tone: -1 }] },
                  ] } },
                { id: 'push', text: '"더러워!" 하고 밀친다', result: '하린이가 속상해했어요.', impact: [{ who: '하린이', text: '마음이 다쳤어요', tone: -1 }], why: '거절할 때도 고운 말로 해요.' },
              ] }, [['no', 'washfirst']],
            [{ id: 'saliva', text: '입이 닿은 음식은 병균이 옮아서' }, { id: 'polite', text: '고운 말로 거절할 수 있어서' }, { id: 'once', text: '한 입쯤은 괜찮아서', why: '한 입이라도 입이 닿으면 병균이 옮을 수 있어요.' }], ['saliva', 'polite'], 0.25),
            DIL('친구가 기침하며 내 리코더를 불어 보려 해요.', {
              text: '음악 시간, 기침을 하던 도윤이가 "네 리코더 한 번만 불어 볼게" 해요.', motif: 'star',
              choices: [
                { id: 'lend', text: '그냥 빌려준다', result: '도윤이 침이 리코더에 묻었어요.', impact: [{ who: '나', text: '병균이 옮을 수 있어요', tone: -1 }], why: '입으로 부는 악기는 함께 쓰지 않아요.' },
                { id: 'kindly', text: '"입 대는 건 따로 쓰자"', result: '도윤이가 "아, 맞다" 했어요.', ending: '입 대는 물건은 따로 쓰자고 부드럽게 말했어요.', next: {
                  text: '도윤이가 리코더를 집에 두고 와서 곤란해해요.', choices: [
                    { id: 'teacher', text: '"선생님께 여쭤보자"', result: '선생님이 손뼉 박자 맞추기를 맡기셨어요.', impact: [{ who: '도윤이', text: '함께 참여했어요', tone: 1 }], ending: '어른께 여쭤 다른 방법을 찾았어요.' },
                    { id: 'wipe', text: '옷으로 닦아서 빌려준다', result: '옷으로는 병균이 다 닦이지 않아요.', impact: [{ who: '나', text: '병균이 옮을 수 있어요', tone: -1 }], why: '옷으로 닦아도 입 대는 물건은 따로 써요.' },
                    { id: 'laugh', text: '"기침쟁이!" 놀린다', result: '도윤이가 고개를 숙였어요.', impact: [{ who: '도윤이', text: '창피해요', tone: -1 }], why: '아픈 친구를 놀리지 않아요.' },
                  ] } },
                { id: 'mock', text: '"감기 옮기지 마!" 소리친다', result: '친구들이 도윤이를 쳐다봤어요.', impact: [{ who: '도윤이', text: '마음이 다쳤어요', tone: -1 }], why: '아픈 친구를 탓하지 않고 방법을 말해요.' },
              ] }, [['kindly', 'teacher']],
            [{ id: 'own', text: '입 대는 물건은 따로 써서' }, { id: 'nofault', text: '아픈 친구 탓이 아니라서' }, { id: 'wipeok', text: '옷으로 닦으면 깨끗해서', why: '옷으로 닦아도 병균은 남아요.' }], ['own', 'nofault'], 0.3, { conclude: '입이 닿는 물건은 따로 써요. 거절할 때는 고운 말로, 아픈 친구는 탓하지 않아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '친구가 물병을 같이 마시자고 할 때 알맞은 말은?', options: ['"컵에 따라 줄래?"', '"더러워!"', '입 대고 마셔요'], answer: '"컵에 따라 줄래?"' }] },
        notes: '장면 인물은 가상이다. 아픈 친구를 피하거나 놀리는 말이 나오면 병균과 사람을 나누어 "병균을 막지, 친구를 막지 않아요"라고 말한다.',
      }),
      C({
        id: 'health.e34.germ-routes.wrap.guard-check', type: 'wrap', title: '병균 막기 스스로 점검',
        method: '병균 막기 점검표', tool: 'kitchen', minutes: 8,
        levels: { easy: '점검 칸 3개(손 씻기·소매·물건 따로)에 해 볼 것을 표시한다.', base: '점검 칸 4개(눈 비비지 않기 더함)에 표시한다.', challenge: '점검 칸 5개에 표시하고, 내일 더할 행동 하나를 활동지에 쓴다.' },
        wrap: {
          teacher: '"오늘 배운 막는 행동 가운데 내일 해 볼 것에 표시해 볼까요?" 칸을 하나씩 읽어 주고 스스로 표시하게 한다. 이것은 시험이 아니라 다짐이라서 다 표시하지 않아도 된다고 말한다. 출구 2번에서 "손으로 입 가리기"를 고른 학생에게 "가린 손으로 무엇을 만지게 될까요?"라고 되묻는다.',
          exitTicket: [
            KSELF('병균 막기 다짐', ['비누로 손 씻기', '소매로 가리기', '물병 따로 쓰기', '눈 비비지 않기', '쓴 휴지 버리기'], 3, 4),
            { type: 'choice', prompt: '재채기가 갑자기 나올 때 알맞은 것은?', options: ['손바닥으로 가려요', '소매로 가려요', '친구 쪽으로 해요'], answer: 1, difficulty: 0.15, explain: '손으로 가리면 그 손으로 병균이 옮아요. 소매나 휴지로 가려요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '병균 막기',
          items: [
            { type: 'check', prompt: '병균을 막는 행동에 표시해요.', options: ['비누로 손 씻기', '소매로 가리기', '물병 돌려 마시기', '내 수건 쓰기'] },
            { type: 'short', prompt: '내일 학교에서 해 볼 막는 행동을 하나 써요.' },
          ],
          easy: { note: '병균은 손·기침·물건으로 옮아요.', items: [{ type: 'choice', prompt: '밥 먹기 전에 할 일은?', options: ['손 씻기', '눈 비비기'], answer: '손 씻기' }] },
        },
      }),
      C({
        id: 'health.e34.germ-routes.wrap.poster', type: 'wrap', title: '병균 막는 안내판 꾸미기',
        method: '병균 막는 안내판 꾸미기', tool: 'collage', minutes: 8,
        levels: { easy: '색종이 조각 2개 이상을 붙이고 점검 2칸에 표시한다.', base: '조각 3개 이상을 붙이고 판 아래 종이에 문구 하나를 쓴 뒤 점검 3칸에 표시한다.', challenge: '조각 5개 이상을 붙이고 점검 4칸에 표시한 뒤 짝 안내판의 좋은 점을 말한다(교사 진행).' },
        wrap: {
          teacher: '"교실 문에 붙일 안내판이에요. 문을 열 친구가 한눈에 알아볼 그림은 무엇일까요?" 동그라미(비누 거품)·물방울(나뭇잎 조각)·소매(긴 네모) 조각으로 꾸미고, 문구는 판 아래 종이에 쓰게 한다. 무서운 병균 그림만 크게 꾸미는 학생에게 "보는 친구가 무엇을 하면 되는지도 알 수 있을까요?"라고 묻는다. 안내판에는 친구 이름을 쓰지 않는다.',
          exitTicket: [
            COL('색종이 조각으로 "병균 막기" 안내판을 꾸며요.', ['막는 행동 그림을 붙였어요', '문구를 하나 썼어요', '보는 친구를 생각했어요', '짝 안내판을 보았어요'], 2, 3, 5, { shapes: ['circle', 'rect', 'leaf', 'star', 'heart', 'square'] }),
            { type: 'choice', prompt: '안내판에 넣을 알맞은 문구는?', options: ['"손 씻고 들어와요"', '"아픈 친구 오지 마"', '"문 만지지 마"'], answer: 0, difficulty: 0.1, explain: '안내판은 누구를 탓하지 않고 할 일을 알려 줘요.' },
          ],
        },
        worksheet: {
          title: '병균 막는 안내판',
          items: [
            { type: 'draw', prompt: '교실 문에 붙일 병균 막기 안내판을 그려요.' },
            { type: 'short', prompt: '안내판에 쓸 문구를 한 줄로 써요.' },
          ],
          easy: { note: '"손 씻기", "소매로 가리기" 가운데 하나를 그려요.', items: [{ type: 'choice', prompt: '안내판에 그릴 것은?', options: ['손 씻는 모습', '무서운 얼굴'], answer: '손 씻는 모습' }] },
        },
        notes: '색종이 판에는 글자를 붙일 수 없어 문구는 판 아래 종이에 쓴다.',
      }),
    );
  }

  // ======================================================================================================
  // 건강검사가 하는 일 (보건 초 — 세부 주제는 근거 파일에 없음)
  // ======================================================================================================
  {
    const C = T('checkup');
    const SCHOOL = {
      title: '건강검사 날 학교(가상)', grid: [6, 4],
      regions: [
        { name: '우리 교실', cells: [[0, 0], [1, 0]] }, { name: '복도', cells: [[2, 0], [3, 0], [2, 1], [3, 1], [2, 2], [3, 2]] }, { name: '보건실(눈 검사)', cells: [[4, 0], [5, 0]] },
        { name: '조용한 방(귀 검사)', cells: [[4, 1], [5, 1]] }, { name: '도서관', cells: [[0, 1], [1, 1]] }, { name: '상담실(이 검사)', cells: [[4, 2], [5, 2]] },
        { name: '체육관', cells: [[0, 2], [1, 2], [0, 3], [1, 3]] }, { name: '급식실', cells: [[2, 3], [3, 3], [4, 3], [5, 3]] },
      ],
    };
    const k = (id, text) => ({ id, text });
    M.push(
      C({
        id: 'health.e34.checkup.intro.check-feel', type: 'intro', title: '건강검사 날 떨리는 마음 크기',
        method: '건강검사 날 마음 눈금', tool: 'emotion', minutes: 5,
        levels: { easy: '교사가 눈금에서 "조금" 쪽을 고르는 모습을 함께 본다(손으로 셋까지 셈).', base: '눈금 5칸에서 마음 크기가 커졌다 작아지는 모습을 보고 그 까닭을 말한다.', challenge: '마음이 편해질 말 한마디("선생님이 옆에 계셔")를 짝에게 해 준다.' },
        intro: {
          teacher: '"오늘 서아네 반은 건강검사 날이에요. 보건실 앞에 줄을 섰을 때 서아 마음은 얼마나 떨릴까요?" 시연 단추로 마음 눈금이 올라갔다 내려가는 모습을 보인다. "검사하면 주사 맞아요"라는 걱정이 나오면 "오늘 검사는 보고·듣고·입을 벌리는 검사예요. 아프게 하는 것이 아니에요"라고 알려 준다. 떨리는 마음은 누구에게나 생길 수 있고, 무엇을 하는지 알면 줄어든다는 것을 짚는다.',
          student: '건강검사 날 서아의 떨리는 마음이 얼마나 큰지 눈금으로 보아요. 마음이 줄어드는 까닭을 생각해요.',
          demo: { tool: 'emotion', options: { mode: 'scale', situation: '서아는 건강검사 날 보건실 앞에 줄을 섰어요.', feeling: '걱정', steps: 5, scaleLabels: { 1: '조금', 5: '아주 많이' }, after: '무엇을 하는지 알면 마음이 줄어요.' }, sequence: [{ level: 4 }, { level: 2 }] },
          art: art('a paper school corridor with a short line of paper children waiting at a door marked with a small paper cross, one child holding a paper heart gauge', '떨려도 괜찮아', 'cloud', 'lavender'),
        },
        notes: '학생 자신의 검사 경험이나 결과를 묻지 않는다. 서아(가상)의 마음으로만 이야기한다.',
      }),
      C({
        id: 'health.e34.checkup.intro.check-parts', type: 'intro', title: '건강검사로 살피는 몸 자리',
        method: '검사하는 몸의 곳 고르기', tool: 'body', minutes: 5,
        levels: { easy: '눈·귀 두 곳이 골라지는 것을 함께 본다.', base: '눈·귀·혀(입 안 — 이) 세 곳이 골라지는 것을 본다.', challenge: '세 곳마다 쓰는 검사 도구(글자판·헤드폰·작은 거울)를 짝에게 말한다.' },
        intro: {
          teacher: '"건강검사에서는 몸의 어느 곳을 살필까요?" 시연 단추로 눈·귀를 고르고, 이어서 혀 칸을 짚으며 "입 안의 이도 살펴요"라고 말한다. 이 칸이 따로 없어 혀 칸으로 입 안을 가리킨다. "검사는 아픈 사람만 해요"라는 말이 나오면 "아프지 않아도 미리 살펴 두면 무엇이 좋을까요?"라고 되물어 일찍 알아차린다는 뜻을 짚는다.',
          student: '종이 몸에서 건강검사로 살피는 곳을 찾아요. 그곳을 어떻게 살필지 생각해요.',
          demo: { tool: 'body', options: { mode: 'parts', parts: ['눈', '귀', '혀', '코', '무릎', '어깨'], names: true }, sequence: [{ parts: ['눈', '귀'] }, { parts: ['눈', '귀', '혀'] }] },
          art: art('a paper body outline with three small paper tools floating beside it: a letter chart near the eyes, headphones near the ears and a tiny mirror near the mouth', '무엇을 살필까?', 'star', 'mint'),
        },
        notes: 'body 교구에 이(입) 칸이 없어 혀 칸으로 입 안을 짚는다. 검사 항목은 학교마다 다르니 보건 선생님 안내에 맞춰 말한다(사람 확인).',
      }),
      C({
        id: 'health.e34.checkup.activity.item-match', type: 'activity', title: '검사와 살피는 힘 나누기',
        method: '검사와 하는 일 나누기', tool: 'sortboard', minutes: 14,
        levels: { easy: '바구니 2개(보는 힘·듣는 힘)에 카드 4장을 나누고, 틀리면 바로 되돌아온다.', base: '바구니 3개(이 건강 더함)에 카드 6장을 나눈 뒤 확인한다.', challenge: '헷갈리는 카드가 바구니마다 한 장씩 더해진 9장을 나누고, 결과를 함께 볼 사람을 짝에게 말한다(교사 진행).' },
        activity: {
          title: '검사와 살피는 힘 나누기', tool: 'sortboard',
          teacher: '"이 카드는 보는 힘, 듣는 힘, 이 건강 가운데 무엇을 살필까요?" 카드를 넣을 때마다 그 검사를 몸짓으로 따라 해 보게 한다(한쪽 눈 가리기·손 들기·입 벌리기). "헤드폰은 노래 듣는 거예요"라는 말이 나오면 "검사에서는 작은 소리가 들릴 때 손을 들어요. 무엇을 알아보려는 걸까요?"라고 묻는다. 검사는 잘하고 못하고를 겨루는 것이 아니라 몸을 살피는 것이라는 점을 짚는다.',
          task: '건강검사 카드를 보는 힘·듣는 힘·이 건강 바구니에 나누어요.', levels: BOXLV,
          items: [
            BOX('검사에서 하는 일을 나누어요.', ['보는 힘', '듣는 힘', '이 건강'], [['글자판 읽기', '한쪽 눈 가리기'], ['삐 소리 듣기', '소리 나면 손 들기'], ['입 크게 벌리기', '이 사이 살피기']], [[0, 2], [1, 2]], [['멀리 보고 말하기'], ['헤드폰 쓰기'], ['혀 내밀기']], 0.15),
            BOX('검사로 알 수 있는 것을 나누어요.', ['보는 힘', '듣는 힘', '이 건강'], [['먼 글자가 보이는지', '안경이 필요한지'], ['작은 소리 듣는지', '두 귀 다 듣는지'], ['충치가 있는지', '잇몸이 건강한지']], [[0, 2], [1, 2]], [['두 눈이 잘 보는지'], ['한쪽 귀만 듣는지'], ['이가 고르게 났는지']], 0.2),
            BOX('검사에 쓰는 물건을 나누어요.', ['보는 힘', '듣는 힘', '이 건강'], [['글자판', '눈 가리개'], ['헤드폰', '소리 나는 기계'], ['작은 거울', '밝은 불빛']], [[0, 2], [1, 2]], [['가리킴 막대'], ['손 드는 신호'], ['일회용 장갑']], 0.25, { conclude: '건강검사는 보는 힘·듣는 힘·이 건강을 살펴요. 미리 살피면 일찍 알아차려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '검사가 살피는 것을 써요.', columns: ['검사', '살피는 것'], cells: [['시력 검사', ''], ['청력 검사', ''], ['구강 검사', '']], answer: '보는 힘, 듣는 힘, 이 건강' }] },
        notes: '학생 자신의 시력·청력·충치를 묻거나 견주지 않는다. 안경 쓴 친구를 예로 들지 않는다.',
      }),
      C({
        id: 'health.e34.checkup.activity.check-route', type: 'activity', title: '검사 장소를 차례로 찾기',
        method: '검사 장소 도는 길', tool: 'map', minutes: 14,
        levels: { easy: '핀을 놓으면 그 칸의 이름이 바로 보인다.', base: '안내 순서대로 검사 장소 네 곳에 하나씩 핀을 꽂는다.', challenge: '핀을 꽂은 뒤 그곳에서 검사하는 까닭을 보기에서 고른다.' },
        activity: {
          title: '검사 장소를 차례로 찾기', tool: 'map',
          teacher: '"오늘 검사 안내문이에요. 눈 검사 → 귀 검사 → 이 검사 → 교실 차례예요. 다음은 어디로 갈까요?" 핀을 꽂기 전에 손가락으로 복도를 따라 걸어 보게 한다. 귀 검사를 급식실에서 한다고 고른 학생에게 "작은 소리를 들으려면 어떤 곳이 좋을까요?"라고 묻는다. 길은 지도가 잇지 못하니 교사가 칠판에 화살표로 이어 보인다.',
          task: '가상 학교 지도를 보고 안내 순서에 맞는 곳에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            PIN(SCHOOL, '첫째, 눈 검사를 하는 곳에 핀을 꽂아요.', '보건실(눈 검사)', { q: '눈 검사는 어떻게 할까요?', choices: ['글자판을 읽어요', '소리를 들어요', '달리기를 해요'], answer: 0 }, 0.15),
            PIN(SCHOOL, '둘째, 귀 검사를 하는 곳에 핀을 꽂아요.', '조용한 방(귀 검사)', { q: '왜 조용한 방일까요?', choices: ['작은 소리를 들으려고', '놀려고', '숨으려고'], answer: 0 }, 0.2),
            PIN(SCHOOL, '셋째, 이 검사를 하는 곳에 핀을 꽂아요.', '상담실(이 검사)', { q: '이 검사 전에 할 일은?', choices: ['사탕 먹기', '물로 입 헹구기', '뛰어오기'], answer: 1 }, 0.2),
            PIN(SCHOOL, '검사를 다 마치고 돌아갈 곳에 핀을 꽂아요.', '우리 교실', { q: '복도를 지날 때는?', choices: ['뛰어가요', '천천히 걸어요', '혼자 딴 데 가요'], answer: 1 }, 0.25, { conclude: '안내 순서대로 검사 장소를 돌고, 다 마치면 교실로 돌아와요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '귀 검사를 조용한 방에서 하는 까닭은?', options: ['작은 소리를 들으려고', '빨리 끝내려고', '시원해서'], answer: '작은 소리를 들으려고' }] },
        notes: '지도와 검사 장소는 가상이다. 우리 학교의 실제 검사 장소·차례는 보건 선생님 안내에 맞춰 바꾸어 말한다.',
      }),
      C({
        id: 'health.e34.checkup.activity.check-order', type: 'activity', title: '검사 받는 차례 놓기',
        method: '검사 받는 차례', tool: 'kitchen', minutes: 14,
        levels: { easy: '카드 3장을 차례로 놓는다.', base: '카드 4장을 차례로 놓는다.', challenge: '카드 4장에 틀린 카드 한 장이 섞이고, 그 카드는 뺀다. 걱정될 때 할 일을 짝과 말한다(교사 진행).' },
        activity: {
          title: '검사 받는 차례 놓기', tool: 'kitchen',
          teacher: '"검사 차례를 알면 마음이 덜 떨려요. 무엇을 먼저 할까요?" 카드를 놓은 뒤 차례대로 몸짓으로 따라 해 본다. "결과는 친구들에게 다 말해요"라는 카드를 고르려는 학생에게 "검사 결과는 내 몸 이야기예요. 누구와 함께 보면 좋을까요?"라고 묻는다. 걱정될 때는 줄을 서서 "선생님, 떨려요"라고 말해도 된다는 것을 짚는다.',
          task: '건강검사 카드를 받는 차례대로 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORD('눈 검사 받는 차례를 놓아요.', { autoMotif: false, title: '눈 검사' }, [k('line', '줄 서서 기다리기'), k('name', '이름 말하기'), k('chart', '한 눈 가리고 읽기'), k('result', '결과 듣기')], [0, 2, 3], k('peek', '가린 눈으로 보기'), 0.15),
            ORD('귀 검사 받는 차례를 놓아요.', { autoMotif: false, title: '귀 검사' }, [k('sit', '조용히 앉기'), k('phone', '헤드폰 쓰기'), k('hand', '들리면 손 들기'), k('off', '헤드폰 벗기')], [0, 1, 2], k('talk', '떠들며 기다리기'), 0.2),
            ORD('이 검사 받는 차례를 놓아요.', { autoMotif: false, title: '이 검사' }, [k('rinse', '물로 입 헹구기'), k('chair', '의자에 앉기'), k('open', '입 크게 벌리기'), k('hear', '결과 듣기')], [0, 2, 3], k('candy', '사탕 물고 앉기'), 0.25, { conclude: '검사 차례를 알면 마음이 편해요. 결과는 보호자·선생님과 함께 봐요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '눈 검사 차례를 번호로 써요.', columns: ['할 일', '차례'], cells: [['결과 듣기', ''], ['줄 서서 기다리기', ''], ['한 눈 가리고 읽기', '']], answer: '3, 1, 2' }] },
      }),
      C({
        id: 'health.e34.checkup.wrap.after-story', type: 'wrap', title: '결과를 들은 뒤 이야기',
        method: '결과를 들은 뒤 이야기', tool: 'story', minutes: 8,
        levels: { easy: '장면 2장(안내문 받기 → 보호자와 보기)을 차례로 놓는다.', base: '장면 3장(필요하면 병원 가기 더함)을 차례로 놓는다.', challenge: '3장에 틀린 장면 한 장이 섞이고 그 장면은 뺀다. 장면마다 까닭을 짝에게 말한다(교사 진행).' },
        wrap: {
          teacher: '"서아는 검사 결과 안내문을 받았어요. 그다음에는 어떻게 할까요?" 장면을 놓은 뒤 "왜 보호자와 함께 볼까요?"라고 묻는다. "결과가 나쁘면 숨겨요"라는 말이 나오면 "안내문은 몸을 돌보라는 알림이에요. 숨기면 누가 도와줄 수 있을까요?"라고 되묻는다. 결과는 성적이 아니고, 친구와 견주지 않는다는 것을 짚는다.',
          exitTicket: [
            Object.assign({ type: 'tool', tool: 'story' }, (() => { const q = ORD('서아가 결과를 들은 뒤 할 일을 차례로 놓아요.', {}, [k('paper', '안내문 받기'), k('family', '보호자와 보기'), k('clinic', '필요하면 병원 가기')], [0, 1], k('hide', '안내문 숨기기'), 0.15); return { prompt: q.prompt, options: q.toolOptions, target: q.target, difficulty: q.difficulty, levels: q.levels }; })()),
            { type: 'choice', prompt: '검사 결과를 함께 볼 사람은?', options: ['보호자·선생님', '반 친구 모두', '아무도 안 봐요'], answer: 0, difficulty: 0.1, explain: '결과는 내 몸 이야기라서 보호자·선생님과 함께 봐요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '검사 결과를 들은 뒤',
          items: [
            { type: 'table', prompt: '결과를 들은 뒤 할 일을 차례로 써요.', columns: ['차례', '할 일'], cells: [['1', '안내문 받기'], ['2', ''], ['3', '']], answer: '보호자와 보기, 필요하면 병원 가기' },
            { type: 'choice', prompt: '검사 결과는 무엇일까요?', options: ['몸을 돌보는 알림', '친구와 겨루는 점수'], answer: '몸을 돌보는 알림' },
          ],
          easy: { note: '안내문은 보호자와 함께 봐요.', items: [{ type: 'choice', prompt: '안내문을 받으면?', options: ['보호자께 보여 드려요', '숨겨요'], answer: '보호자께 보여 드려요' }] },
        },
        notes: '학생 자신의 결과를 묻거나 발표하게 하지 않는다. 서아(가상) 이야기로만 진행한다.',
      }),
      C({
        id: 'health.e34.checkup.wrap.why-write', type: 'wrap', title: '건강검사가 필요한 까닭 한 문장',
        method: '건강검사가 필요한 까닭 한 문장', tool: 'rubric-writing', minutes: 8,
        levels: { easy: '"건강검사는 ~해서 필요하다" 틀에 맞춰 한 문장을 쓰고 기준 2개에 표시한다.', base: '한두 문장을 쓰고 기준 2개(까닭·내 말)에 표시한다.', challenge: '두 문장까지 쓰고 기준 3개(짝 문장 읽기 더함)에 표시한다.' },
        wrap: {
          teacher: '"건강검사는 왜 필요할까요? 오늘 배운 말로 한 문장을 써 볼까요?" 틀을 함께 읽고, 까닭에는 "일찍 알아차려요", "미리 돌봐요" 같은 말이 들어가면 된다고 알려 준다. "선생님이 하라고 해서요"라고 쓰려는 학생에게 "검사를 하면 내 몸에 무엇이 좋을까요?"라고 묻는다. 글에 자기 검사 결과는 쓰지 않는다고 말한다.',
          exitTicket: [
            { type: 'tool', tool: 'rubric-writing', options: { topic: '건강검사가 필요한 까닭을 한 문장으로 써요.', minChars: 12, maxChars: 80, minSentences: 1, maxSentences: 2, starter: '건강검사는 ~해서 필요하다.', placeholder: '내 검사 결과는 쓰지 않아요.', sample: '건강검사는 눈·귀·이를 미리 살펴 일찍 돌볼 수 있어서 필요하다.' }, prompt: '건강검사가 필요한 까닭을 한 문장으로 써요.', target: { selfCheck: ['까닭을 썼어요', '내 말로 썼어요'], mustInclude: ['필요'] }, difficulty: 0.15,
              levels: { easy: { toolOptions: { minChars: 8, maxSentences: 1 }, target: { selfCheck: ['까닭을 썼어요', '틀에 맞게 썼어요'], mustInclude: ['필요'] } }, challenge: { toolOptions: { minChars: 16 }, target: { selfCheck: ['까닭을 썼어요', '내 말로 썼어요', '짝 문장을 읽었어요'], mustInclude: ['필요'] } } } },
            { type: 'choice', prompt: '건강검사를 하는 까닭으로 알맞은 것은?', options: ['몸을 미리 살피려고', '친구와 겨루려고', '수업을 쉬려고'], answer: 0, difficulty: 0.1, explain: '미리 살피면 일찍 알아차리고 돌볼 수 있어요.' },
          ],
        },
        worksheet: {
          title: '건강검사가 필요한 까닭',
          items: [
            { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '건강검사는 몸을 미리 ___ 일찍 돌볼 수 있어서 필요하다.', answer: '살펴서' },
            { type: 'short', prompt: '건강검사가 필요한 까닭을 내 말로 한 줄 써요.' },
          ],
          easy: { note: '"미리 살펴요", "일찍 알아요"를 넣어 써요.', items: [{ type: 'choice', prompt: '건강검사는 무엇을 하나요?', options: ['몸을 살펴요', '달리기를 겨뤄요'], answer: '몸을 살펴요' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 가까이 보는 습관과 눈 건강 (보건 초 — 세부 주제는 근거 파일에 없음)
  // ======================================================================================================
  {
    const C = T('eye-screen');
    const k = (id, text) => ({ id, text });
    M.push(
      C({
        id: 'health.e34.eye-screen.intro.habit-branch', type: 'intro', title: '어두운 방에서 화면 보는 서준이',
        method: '어두운 곳에서 화면 보는 장면', tool: 'emotion', minutes: 5,
        levels: { easy: '보기 2개(계속 보기·불 켜고 멀리 두기) 가운데 교사가 고르는 결과를 함께 본다.', base: '보기 3개의 결과를 차례로 보고 눈이 편한 쪽을 말한다.', challenge: '고른 보기의 까닭을 "눈이 ~해서" 틀로 짝에게 말한다.' },
        intro: {
          teacher: '"불 꺼진 방에서 서준이가 태블릿을 얼굴 가까이 대고 보고 있어요. 서준이 눈은 어떨까요?" 시연 단추로 보기를 고르고 결과가 나오는 모습을 보인다. "눈은 쉬지 않아도 돼요"라는 말이 나오면 "오래 걸으면 다리가 뻐근하지요? 눈도 오래 가까이 보면 힘들어해요"라고 되묻는다. 오늘은 눈이 편한 습관을 찾는다고 밝힌다.',
          student: '어두운 방에서 화면을 가까이 보는 서준이에게 어떤 행동이 좋을지 보고, 그 까닭을 생각해요.',
          demo: { tool: 'emotion', options: { mode: 'branch', situation: '불 꺼진 방에서 서준이가 태블릿을 얼굴 가까이 대고 봐요.', ask: '서준이는 어떻게 할까요?', motif: 'cloud', choices: [{ id: 'keep', text: '그대로 계속 본다', result: '눈이 따갑고 뻑뻑해졌어요.', mood: '걱정' }, { id: 'light', text: '불 켜고 화면을 멀리 둔다', result: '눈이 한결 편해졌어요.', mood: '편안함' }, { id: 'rub', text: '눈을 비비며 본다', result: '눈이 빨개졌어요.', mood: '걱정' }] }, sequence: [{ choice: 'keep' }, { choice: 'light' }] },
          art: art('a dark paper bedroom with a child holding a glowing paper tablet very close to the face, a paper lamp switch and a paper moon in the window', '눈이 힘들어요', 'cloud', 'sky'),
        },
        notes: '학생 자신의 화면 보는 시간을 묻거나 견주지 않는다. 서준이(가상)의 일로 이야기한다.',
      }),
      C({
        id: 'health.e34.eye-screen.intro.eye-parts', type: 'intro', title: '눈 자리와 눈물이 하는 일',
        method: '눈의 생김새 찾기', tool: 'body', minutes: 5,
        levels: { easy: '종이 몸에서 눈 한 곳이 골라지는 것을 함께 본다.', base: '눈을 고른 뒤 교사가 그림 자료로 눈동자·눈꺼풀·눈물을 짚는 것을 본다.', challenge: '눈물이 하는 일을 보기에서 고르는 모습을 보고, 눈꺼풀이 하는 일을 짝에게 말한다.' },
        intro: {
          teacher: '"눈은 어디에 있고, 눈을 지키는 것은 무엇일까요?" 시연 단추로 종이 몸의 눈을 고르고, 교사가 준비한 눈 그림 자료로 눈동자(빛이 들어가는 곳)·눈꺼풀(덮어 주는 곳)·눈물(촉촉하게 하는 것)을 짚는다. 이어서 눈물이 하는 일 보기에서 바른 것이 골라지는 모습을 보인다. "눈물은 울 때만 나와요"라는 말이 나오면 "눈을 깜빡일 때마다 조금씩 나와 눈을 적셔 줘요"라고 알려 준다.',
          student: '종이 몸에서 눈을 찾고, 눈물이 무슨 일을 하는지 골라요. 화면을 오래 보면 깜빡임이 줄어든다는 것을 생각해요.',
          demo: { tool: 'body', options: { mode: 'parts', parts: ['눈', '귀', '코', '혀', '목', '어깨'], names: true, ask: { q: '눈물은 무슨 일을 할까요?', choices: ['눈을 촉촉하게 해요', '소리를 들어요', '냄새를 맡아요'] } }, sequence: [{ parts: ['눈'] }, { parts: ['눈'], pick: 0 }] },
          art: art('a large paper eye with layered paper eyelids and a tiny paper tear drop at the corner, a paper body outline small beside it', '눈을 지키는 것', 'star', 'sky'),
        },
        notes: 'body 교구에 눈동자·눈꺼풀·눈물 칸이 없어 눈 칸 하나만 고르고, 세부 생김새는 교사가 눈 그림 자료로 짚는다.',
      }),
      C({
        id: 'health.e34.eye-screen.activity.posture-sort', type: 'activity', title: '눈이 편한 자세·힘든 자세',
        method: '눈을 아끼는 자세 나누기', tool: 'sortboard', minutes: 14,
        levels: { easy: '문항마다 카드 4장을 바구니 2개에 나누고, 틀리면 바로 되돌아온다.', base: '문항마다 카드 4장을 나눈 뒤 확인한다(밝기·거리·쉬기 세 문항).', challenge: '헷갈리는 카드 2장이 더해진 6장을 나누고, 짝과 다르게 나눈 카드를 두고 까닭을 말한다(교사 진행).' },
        activity: {
          title: '눈이 편한 자세·힘든 자세', tool: 'sortboard',
          teacher: '"이 모습은 눈이 편할까요, 힘들까요?" 카드를 넣을 때마다 그 자세를 자리에서 따라 해 보게 한다(책 세워 보기·화면 멀리 두기). "엎드려 보면 편해요"라는 말이 나오면 "몸은 편해도 눈과 책 사이가 어떻게 될까요?"라고 묻는다. 거리나 시간은 숫자로 정하지 않고, 우리 반 약속으로 "가끔 멀리 보기"를 정한다.',
          task: '눈 쓰는 모습 카드를 눈이 편해요·눈이 힘들어요 바구니에 나누어요.', levels: BOXLV,
          items: [
            BOX('밝기에 따라 나누어요.', ['눈이 편해요', '눈이 힘들어요'], [['불 켜고 책 보기', '밝은 창가에서 읽기'], ['불 끈 방 화면', '이불 속 손전등 책']], [[0, 2], [1, 2]], [['스탠드 켜고 숙제'], ['해 질 녘 그늘 책']], 0.15),
            BOX('거리에 따라 나누어요.', ['눈이 편해요', '눈이 힘들어요'], [['화면 멀리 두기', '책을 세워 보기'], ['코앞 화면 보기', '엎드려 책 보기']], [[0, 2], [1, 2]], [['바르게 앉아 보기'], ['누워서 화면 보기']], 0.2),
            BOX('쉬는 모습에 따라 나누어요.', ['눈이 편해요', '눈이 힘들어요'], [['가끔 멀리 보기', '눈 자주 깜빡이기'], ['쉬지 않고 보기', '눈 비비며 보기']], [[0, 2], [1, 2]], [['눈 감고 쉬기'], ['밤늦게 화면 보기']], 0.25, { conclude: '밝은 곳에서, 멀리 두고, 가끔 쉬면 눈이 편해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '눈이 편한 모습은?', options: ['불 켜고 책 보기', '이불 속에서 화면 보기', '엎드려 책 보기'], answer: '불 켜고 책 보기' }] },
      }),
      C({
        id: 'health.e34.eye-screen.activity.rest-timer', type: 'activity', title: '쉬는 시간 눈 체조',
        method: '쉬는 시간 눈 체조', tool: 'timer', minutes: 14,
        levels: { easy: '눈 체조 카드 2장(멀리 보기·눈 감기)의 차례를 놓고, 타이머를 1번으로 맞춘다.', base: '카드 3장(화면 보기·멀리 보기·눈 감기)의 차례를 놓고, 타이머를 2번으로 맞춘다.', challenge: '카드 4장(깜빡이기 더함)을 놓고 타이머 번 수를 3번으로 맞춘 뒤 스스로 점검 4칸에 표시한다.' },
        activity: {
          title: '쉬는 시간 눈 체조', tool: 'timer',
          teacher: '"화면을 본 뒤에 눈을 어떻게 쉬게 할까요?" 차례를 정한 뒤 타이머를 켜고 다 같이 창밖 멀리 보기·눈 감기를 해 본다. 타이머 값은 우리 반이 연습하려고 정한 약속이라고 말한다. "눈 감으면 졸려요"라는 말에는 "잠깐 감았다 뜨면 눈이 촉촉해져요"라고 답한다. 눈이 계속 아프거나 잘 안 보이면 보건 선생님이나 보호자에게 말한다는 것을 짚는다.',
          task: '눈 쉬기 차례를 정하고, 우리 반 약속대로 타이머를 맞춰 함께 해 보아요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '눈 쉬기 카드를 차례로 놓아요.', toolOptions: { title: '눈 쉬기 차례', cards: ['눈 감기', '화면 보기', '멀리 보기'] }, target: { order: ['화면 보기', '멀리 보기', '눈 감기'] }, difficulty: 0.15,
              levels: { easy: { prompt: '눈 쉬기 카드 2장을 차례로 놓아요.', toolOptions: { cards: ['눈 감기', '멀리 보기'] }, target: { order: ['멀리 보기', '눈 감기'] } },
                challenge: { prompt: '눈 쉬기 카드 4장을 차례로 놓아요.', toolOptions: { cards: ['눈 감기', '깜빡이기', '화면 보기', '멀리 보기'] }, target: { order: ['화면 보기', '멀리 보기', '깜빡이기', '눈 감기'] } } } },
            { prompt: '보기·쉬기를 2번 하도록 타이머를 맞춰요.', toolOptions: { title: '눈 체조(우리 반 약속)', labels: ['보기', '쉬기'], plan: { work: 30, rest: 10, rounds: 1 } }, target: { plan: { rounds: 2 } }, difficulty: 0.15,
              levels: { easy: { prompt: '보기·쉬기를 1번 하도록 타이머를 맞춰요.', toolOptions: { plan: { work: 30, rest: 10, rounds: 3 } }, target: { plan: { rounds: 1 } } }, challenge: { prompt: '보기·쉬기를 3번 하도록 타이머를 맞춰요.', target: { plan: { rounds: 3 } } } } },
            { prompt: '눈 체조를 해 보고 한 것에 스스로 표시해요.', toolOptions: { title: '눈 체조 점검' }, target: { selfCheck: ['멀리 보았어요', '눈을 감았어요', '천천히 깜빡였어요'] }, difficulty: 0.1,
              levels: { easy: { prompt: '눈 체조를 해 보고 한 것 2칸에 표시해요.', target: { selfCheck: ['멀리 보았어요', '눈을 감았어요'] } }, challenge: { prompt: '눈 체조를 해 보고 한 것 4칸에 표시해요.', target: { selfCheck: ['멀리 보았어요', '눈을 감았어요', '천천히 깜빡였어요', '눈을 비비지 않았어요'] } } },
              conclude: '화면을 본 뒤에는 멀리 보고, 눈을 감고, 깜빡여 눈을 쉬게 해요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '눈 쉬기 차례를 번호로 써요.', columns: ['할 일', '차례'], cells: [['눈 감기', ''], ['화면 보기', ''], ['멀리 보기', '']], answer: '3, 1, 2' }] },
        notes: '타이머의 초와 번 수는 연습용 우리 반 약속이다. 공식 권장 시간으로 말하지 않는다(사람 확인).',
      }),
      C({
        id: 'health.e34.eye-screen.activity.screen-dilemma', type: 'activity', title: '갈림길: 한 판만 더 하자',
        method: '게임 한 판 더 갈림길', tool: 'dilemma', minutes: 14,
        levels: { easy: '장면마다 갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '장면마다 갈림 2번, 보기 3개씩 고르며 결과를 따라간다.', challenge: '갈림 2번을 지난 뒤 근거 카드 3장 가운데 알맞은 2장을 고른다.' },
        activity: {
          title: '갈림길: 눈이 힘들다고 할 때', tool: 'dilemma',
          teacher: '"눈이 뻐근한데 친구가 한 판만 더 하자고 해요. 눈과 친구 마음을 둘 다 지키는 방법은?" 보기를 고를 때마다 결과를 소리 내어 읽고, 눈이 어떻게 되는지·친구 마음이 어떤지 함께 짚는다. 계속하는 길을 고른 학생을 나무라지 않고 "더 하고 싶은 마음은 당연해요. 눈은 지금 무엇을 말하고 있을까요?"라고 되묻는다.',
          task: '장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('눈이 뻐근한데 한 판 더 하자고 해요.', {
              text: '주원이 집에서 게임을 한 지 꽤 됐어요. 눈이 뻐근한데 주원이가 "한 판만 더!" 해요.', motif: 'star',
              choices: [
                { id: 'more', text: '"좋아" 하고 계속한다', result: '눈이 더 따갑고 머리도 띵해졌어요.', impact: [{ who: '나', text: '눈이 힘들어요', tone: -1 }], why: '눈이 보내는 신호를 들어요.' },
                { id: 'rest', text: '"눈이 아파, 잠깐 쉬자"', result: '주원이가 "그래" 하고 화면을 껐어요.', ending: '눈이 보내는 신호를 듣고 쉬자고 말했어요.', next: {
                  text: '쉬는 동안 주원이가 심심해해요.', choices: [
                    { id: 'out', text: '"밖에서 공놀이하자"', result: '창밖 멀리 보며 신나게 놀았어요.', impact: [{ who: '나와 주원이', text: '눈도 쉬고 즐거워요', tone: 1 }], ending: '화면 대신 다른 놀이로 눈을 쉬게 했어요.' },
                    { id: 'phone', text: '휴대폰 영상을 본다', result: '또 화면을 가까이 보게 됐어요.', impact: [{ who: '나', text: '눈이 못 쉬어요', tone: -1 }], why: '쉴 때는 화면이 아닌 것을 해요.' },
                    { id: 'rubeye', text: '눈을 세게 비빈다', result: '눈이 빨개졌어요.', impact: [{ who: '나', text: '눈이 아파요', tone: -1 }], why: '눈은 비비지 말고 감고 쉬어요.' },
                  ] } },
                { id: 'leave', text: '말없이 집에 간다', result: '주원이가 서운해했어요.', impact: [{ who: '주원이', text: '서운해요', tone: -1 }] },
              ] }, [['rest', 'out']],
            [{ id: 'signal', text: '뻐근함은 쉬라는 신호라서' }, { id: 'say', text: '쉬자고 말해도 친구가 알아줘서' }, { id: 'last', text: '마지막 한 판은 괜찮아서', why: '눈이 힘들 때는 한 판도 쉬고 하는 게 좋아요.' }], ['signal', 'say'], 0.2),
            DIL('차 안에서 화면을 보다 눈이 어지러워요.', {
              text: '할머니 댁에 가는 차 안에서 이준이가 태블릿을 보다 눈이 어지러워졌어요.', motif: 'cloud',
              choices: [
                { id: 'keepwatch', text: '끝까지 본다', result: '어지럽고 속이 울렁거렸어요.', impact: [{ who: '이준이', text: '몸이 힘들어요', tone: -1 }], why: '흔들리는 차에서는 화면 보기를 멈춰요.' },
                { id: 'stop', text: '끄고 창밖 멀리 본다', result: '어지러움이 조금 나아졌어요.', ending: '화면을 끄고 멀리 보며 눈을 쉬게 했어요.', next: {
                  text: '그래도 눈이 조금 따가워요.', choices: [
                    { id: 'tell', text: '함께 탄 어른께 말한다', result: '어른이 창문을 열고 쉬게 해 주셨어요.', impact: [{ who: '이준이', text: '마음이 놓여요', tone: 1 }], ending: '불편함을 어른께 말해 도움을 받았어요.' },
                    { id: 'rubhard', text: '눈을 계속 비빈다', result: '눈이 더 빨개졌어요.', impact: [{ who: '이준이', text: '눈이 아파요', tone: -1 }], why: '눈은 비비지 않아요.' },
                    { id: 'again', text: '다시 태블릿을 켠다', result: '어지러움이 다시 심해졌어요.', impact: [{ who: '이준이', text: '몸이 힘들어요', tone: -1 }] },
                  ] } },
                { id: 'closer', text: '더 가까이 대고 본다', result: '눈이 더 피곤해졌어요.', impact: [{ who: '이준이', text: '눈이 힘들어요', tone: -1 }] },
              ] }, [['stop', 'tell']],
            [{ id: 'far', text: '멀리 보면 눈이 쉬어서' }, { id: 'adult', text: '불편하면 어른이 도와줘서' }, { id: 'hold', text: '참으면 저절로 나아서', why: '불편함은 참지 말고 말해요.' }], ['far', 'adult'], 0.25),
            DIL('친구가 어두운 데서 책을 읽자고 해요.', {
              text: '캠핑 텐트 안, 불을 끈 뒤 하린이가 "손전등 들고 책 읽자" 해요.', motif: 'tree',
              choices: [
                { id: 'dark', text: '어둠 속에서 오래 읽는다', result: '눈이 침침하고 피곤해졌어요.', impact: [{ who: '나', text: '눈이 힘들어요', tone: -1 }], why: '어두운 곳에서 오래 읽으면 눈이 힘들어요.' },
                { id: 'tomorrow', text: '"내일 밝을 때 읽자"', result: '하린이가 "그래, 이야기하자" 했어요.', ending: '밝을 때 읽자고 말해 눈을 아꼈어요.', next: {
                  text: '아침이 되었어요. 텐트 안은 아직 조금 어두워요.', choices: [
                    { id: 'outside', text: '밖 밝은 의자에서 읽는다', result: '글자가 또렷하게 보였어요.', impact: [{ who: '나와 하린이', text: '눈이 편해요', tone: 1 }], ending: '밝은 곳을 골라 눈이 편하게 읽었어요.' },
                    { id: 'stillin', text: '텐트 안에서 엎드려 읽는다', result: '책이 눈에 너무 가까웠어요.', impact: [{ who: '나', text: '눈이 힘들어요', tone: -1 }], why: '밝은 곳에서 바르게 앉아 읽어요.' },
                    { id: 'skip', text: '책을 안 읽는다', result: '하린이가 아쉬워했어요.', impact: [{ who: '하린이', text: '아쉬워요', tone: 0 }] },
                  ] } },
                { id: 'phone2', text: '휴대폰 불빛으로 읽는다', result: '눈이 부시고 따가웠어요.', impact: [{ who: '나', text: '눈이 힘들어요', tone: -1 }] },
              ] }, [['tomorrow', 'outside']],
            [{ id: 'bright', text: '밝은 곳이 눈에 편해서' }, { id: 'plan', text: '읽을 때를 바꿀 수 있어서' }, { id: 'young', text: '어린이 눈은 안 지쳐서', why: '어린이 눈도 어두운 곳에서는 지쳐요.' }], ['bright', 'plan'], 0.3, { conclude: '눈이 뻐근하면 쉬자고 말하고, 밝은 곳에서 멀리 두고 봐요. 불편하면 어른께 알려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '눈이 뻐근할 때 알맞은 말은?', options: ['"잠깐 쉬자"', '"한 판만 더"', '눈을 비벼요'], answer: '"잠깐 쉬자"' }] },
        notes: '장면 인물은 가상이다. 학생 집의 게임·화면 사용을 묻지 않는다.',
      }),
      C({
        id: 'health.e34.eye-screen.wrap.day-line', type: 'wrap', title: '하루 줄에 화면 볼 때·쉴 때',
        method: '내 하루 화면 보는 때', tool: 'timeline', minutes: 8,
        levels: { easy: '카드 3장을 하루 차례로 놓는다.', base: '카드 5장(화면 보기·쉬기가 번갈아)을 하루 차례로 놓는다.', challenge: '5장에 틀린 카드 한 장이 섞이고 그 카드는 뺀다. 쉬는 때를 더 넣을 곳을 짝과 말한다(교사 진행).' },
        wrap: {
          teacher: '"가상 친구 서준이의 하루예요. 화면 보는 때 사이사이 언제 눈을 쉬게 할까요?" 카드를 놓은 뒤 "화면 다음에는 늘 무엇이 오나요?"라고 묻는다. "잠자기 전에 영상 보기"를 넣으려는 학생에게 "잠자기 전에는 눈과 몸이 쉴 때예요"라고 말한다. 학생 자신의 하루 화면 시간을 적게 하지 않는다.',
          exitTicket: [
            { type: 'tool', tool: 'timeline', options: { mode: 'order', axis: ['아침', '밤'], slots: 5, cards: [k('bed', '자기 전 화면 끄기'), k('far', '창밖 멀리 보기'), k('class', '수업 화면 보기'), k('close', '눈 감고 쉬기'), k('home', '숙제 화면 보기')] }, prompt: '서준이의 하루 카드를 차례로 놓아요.', target: { order: ['class', 'far', 'home', 'close', 'bed'] }, difficulty: 0.15,
              levels: { easy: { prompt: '서준이의 하루 카드 3장을 차례로 놓아요.', toolOptions: { slots: 3, cards: [k('bed', '자기 전 화면 끄기'), k('far', '창밖 멀리 보기'), k('class', '수업 화면 보기')] }, target: { order: ['class', 'far', 'bed'] } },
                challenge: { prompt: '하루 카드를 차례로 놓고 틀린 카드 한 장은 빼요.', toolOptions: { cards: [k('bed', '자기 전 화면 끄기'), k('far', '창밖 멀리 보기'), k('late', '밤새 영상 보기'), k('class', '수업 화면 보기'), k('close', '눈 감고 쉬기'), k('home', '숙제 화면 보기')] }, target: { order: ['class', 'far', 'home', 'close', 'bed'] } } } },
            { type: 'choice', prompt: '화면을 본 다음에 하면 좋은 것은?', options: ['멀리 보며 쉬기', '바로 또 화면 보기', '눈 비비기'], answer: 0, difficulty: 0.1, explain: '화면을 본 뒤에는 멀리 보거나 눈을 감고 쉬어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '화면 볼 때와 쉴 때',
          items: [
            { type: 'choice', prompt: '잠자기 전에 알맞은 것은?', options: ['화면 끄기', '영상 더 보기', '어둠 속 게임'], answer: '화면 끄기' },
            { type: 'short', prompt: '화면을 본 뒤 눈을 쉬는 방법을 하나 써요.' },
          ],
          easy: { note: '화면 다음에는 쉬기를 넣어요.', items: [{ type: 'choice', prompt: '화면을 본 뒤에는?', options: ['멀리 봐요', '더 가까이 봐요'], answer: '멀리 봐요' }] },
        },
      }),
      C({
        id: 'health.e34.eye-screen.wrap.eye-check', type: 'wrap', title: '눈 지키기 스스로 점검',
        method: '눈 지키기 점검', tool: 'kitchen', minutes: 8,
        levels: { easy: '점검 칸 2개(밝은 곳·멀리 보기)에 해 볼 것을 표시한다.', base: '점검 칸 4개(깜빡이기·비비지 않기 더함)에 표시한다.', challenge: '점검 칸 5개에 표시하고, 가족에게 알려 줄 것 하나를 활동지에 쓴다.' },
        wrap: {
          teacher: '"오늘 배운 눈 지키기 가운데 해 볼 것에 표시해 볼까요?" 칸을 하나씩 읽어 주고 스스로 표시하게 한다. 다 표시하지 않아도 되고, 해 볼 것을 고르는 다짐이라고 말한다. 출구 2번에서 "눈 비비기"를 고른 학생에게 "손에 있던 병균이 어디로 들어갈까요?"라고 되묻는다.',
          exitTicket: [
            KSELF('눈 지키기 다짐', ['밝은 곳에서 보기', '중간에 멀리 보기', '눈 자주 깜빡이기', '눈 비비지 않기', '자기 전 화면 끄기'], 2, 4),
            { type: 'choice', prompt: '눈이 뻐근할 때 할 일은?', options: ['눈 감고 쉬기', '눈 세게 비비기', '더 가까이 보기'], answer: 0, difficulty: 0.1, explain: '눈은 비비지 말고 감고 쉬어요. 계속 아프면 어른께 말해요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '눈 지키기',
          items: [
            { type: 'check', prompt: '눈이 편한 습관에 표시해요.', options: ['밝은 곳에서 보기', '중간에 멀리 보기', '어둠 속 화면 보기', '눈 감고 쉬기'] },
            { type: 'short', prompt: '가족에게 알려 줄 눈 지키기를 한 줄 써요.' },
          ],
          easy: { note: '밝은 곳에서, 멀리 두고, 가끔 쉬어요.', items: [{ type: 'choice', prompt: '책은 어디에서 읽나요?', options: ['밝은 곳', '어두운 곳'], answer: '밝은 곳' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 간식과 충치 (보건 초: 건강한 식생활 — 이 건강)
  // ======================================================================================================
  {
    const C = T('snack-sugar');
    const k = (id, text, ok) => (ok ? { id, text, ok: true } : { id, text });
    const EX = (tool, it) => ({ type: 'tool', tool, prompt: it.prompt, options: it.toolOptions, target: it.target, difficulty: it.difficulty, levels: it.levels });
    const SHOP = { milk: ['흰 우유', 700], apple: ['사과', 600], caramel: ['캐러멜', 900], jelly: ['젤리', 1000], water: ['물', 400], cheese: ['치즈', 800], lolly: ['막대사탕', 500] };
    const S = (...ids) => ids.map((id) => ({ id, text: SHOP[id][0], price: SHOP[id][1] }));
    M.push(
      C({
        id: 'health.e34.snack-sugar.intro.decay-story', type: 'intro', title: '충치가 생기는 차례',
        method: '충치가 생기는 차례 장면', tool: 'story', minutes: 5,
        levels: { easy: '장면 3장(간식 → 이에 남음 → 시큰거림)이 놓이는 것을 함께 본다.', base: '장면 4장(이 겉이 상함 더함)이 차례로 놓이는 것을 보고 까닭을 말한다.', challenge: '4장 사이에 막을 장면(물로 헹구기·이 닦기)을 어디에 끼울지 짝에게 말한다.' },
        intro: {
          teacher: '"로아는 끈적한 간식을 먹고 이를 닦지 않았어요. 며칠 뒤 찬물을 마시자 이가 시큰했어요. 그 사이에 무슨 일이 있었을까요?" 시연 단추로 장면이 차례로 놓이는 모습을 보인다. "단 것을 먹으면 바로 이가 썩어요"라는 말이 나오면 "먹은 것보다 이에 오래 남은 것이 문제예요. 남지 않게 하려면?"이라고 되묻는다. 간식은 먹을 수 있고, 먹은 뒤 할 일이 있다는 것을 오늘 알아본다고 밝힌다.',
          student: '로아의 이에 무슨 일이 있었는지 장면을 차례대로 보고, 어디에서 막을 수 있었는지 생각해요.',
          demo: { tool: 'story', options: { mode: 'order', slots: ['처음', '다음', '그다음', '끝'], cards: [{ id: 'eat', text: '끈적한 간식 먹기' }, { id: 'stay', text: '이에 찌꺼기 남음' }, { id: 'acid', text: '이 겉이 조금씩 상함' }, { id: 'pain', text: '찬물에 이가 시큰' }], shuffle: false },
            sequence: [{ order: ['eat', 'stay', 'pain'] }, { order: ['eat', 'stay', 'acid', 'pain'] }] },
          art: art('four paper story panels: a child eating a sticky paper caramel, a big paper tooth with crumbs stuck on it, tiny paper germs on the tooth, the child holding a cold paper cup and wincing', '이에 무슨 일이?', 'star', 'buttercup'),
        },
        notes: '로아는 가상 인물이다. 학생 자신의 충치·치과 경험이나 간식 습관을 묻지 않는다.',
      }),
      C({
        id: 'health.e34.snack-sugar.intro.tooth-find', type: 'intro', title: '입 자리와 충치가 잘 생기는 곳',
        method: '충치가 잘 생기는 곳 찾기', tool: 'body', minutes: 5,
        levels: { easy: '종이 몸에서 입 한 곳이 골라지는 것을 함께 본다.', base: '입을 고른 뒤 교사가 입 모형·그림으로 앞니·어금니·잇몸을 짚는 것을 본다.', challenge: '충치가 잘 생기는 곳 보기가 골라지는 것을 보고 그 까닭(홈이 있어 남기 쉬움)을 짝에게 말한다.' },
        intro: {
          teacher: '"음식이 처음 들어가는 곳은 어디일까요?" 시연 단추로 종이 몸의 입을 고르고, 입 모형이나 그림으로 앞니(자르는 이)·어금니(씹는 이)·잇몸을 짚는다. 이어서 "충치가 잘 생기는 곳은?" 보기에서 어금니 씹는 면이 골라지는 모습을 보인다. "앞니가 제일 잘 썩어요"라는 말이 나오면 "어금니 위를 보면 울퉁불퉁 홈이 있지요? 음식이 어디에 더 오래 남을까요?"라고 되묻는다.',
          student: '종이 몸에서 입을 찾고, 이 가운데 충치가 잘 생기는 곳을 골라요. 그곳에 음식이 왜 오래 남는지 생각해요.',
          demo: { tool: 'body', options: { mode: 'find', organs: ['코', '입', '식도', '위', '폐'], names: true, ask: { q: '충치가 잘 생기는 곳은?', choices: ['어금니 씹는 면', '혀 위', '입술 겉'] } }, sequence: [{ sel: '입' }, { sel: '입', pick: 0 }] },
          art: art('a large paper mouth model with paper front teeth, bumpy paper back molars and pink paper gums, a tiny paper crumb caught in a molar groove', '어디에 남을까?', 'star', 'peach'),
        },
        notes: 'body 교구에 이·잇몸 칸이 없어 몸속 기관 "입"을 찾고, 앞니·어금니·잇몸은 교사가 입 모형·그림으로 짚는다.',
      }),
      C({
        id: 'health.e34.snack-sugar.activity.snack-sort', type: 'activity', title: '이에 남기 쉬운 간식 나누기',
        method: '이에 남기 쉬운 간식 나누기', tool: 'sortboard', minutes: 14,
        levels: { easy: '문항마다 카드 4장을 바구니 2개에 나누고, 틀리면 바로 되돌아온다.', base: '문항마다 카드 6장을 나눈 뒤 확인한다.', challenge: '헷갈리는 카드 2장이 더해진 8장을 나누고, 나눈 기준(끈적함·오래 머묾)을 짝에게 말한다(교사 진행).' },
        activity: {
          title: '이에 남기 쉬운 간식 나누기', tool: 'sortboard',
          teacher: '"이 간식은 이에 오래 남을까요, 덜 남을까요? 손가락으로 만지면 끈적한지 떠올려 보세요." 카드를 넣을 때마다 까닭을 "끈적해서", "오래 빨아서"로 말하게 한다. "캐러멜은 나쁜 간식이에요"라는 말이 나오면 "캐러멜도 먹을 수 있어요. 다만 이에 오래 남으니 먹은 뒤 무엇을 하면 될까요?"라고 되물어, 간식을 좋다·나쁘다로 나누지 않고 먹은 뒤 할 일로 잇는다.',
          task: '간식과 먹는 모습 카드를 이에 남기 쉬워요·덜 남아요 바구니에 나누어요.', levels: BOXLV,
          items: [
            BOX('간식을 나누어요.', ['이에 남기 쉬워요', '덜 남아요'], [['캐러멜', '젤리', '엿'], ['흰 우유', '오이 스틱', '치즈']], [[0, 2], [1, 2]], [['찹쌀떡'], ['삶은 달걀']], 0.15),
            BOX('먹는 모습을 나누어요.', ['이에 남기 쉬워요', '덜 남아요'], [['사탕 오래 빨기', '자기 직전 간식', '온종일 조금씩'], ['정한 때 먹기', '먹고 물로 헹구기', '먹고 이 닦기']], [[0, 2], [1, 2]], [['단 음료 홀짝홀짝'], ['물과 함께 먹기']], 0.2),
            BOX('마실 것과 먹을 것을 나누어요.', ['이에 남기 쉬워요', '덜 남아요'], [['단 음료 오래 마심', '꿀 바른 빵', '초코 과자'], ['물', '방울토마토', '삶은 감자']], [[0, 2], [1, 2]], [['말린 과일'], ['흰 우유 한 컵']], 0.25, { conclude: '끈적하거나 오래 입에 머무는 간식은 이에 남기 쉬워요. 먹은 뒤 물로 헹구고 이를 닦아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '이에 오래 남기 쉬운 먹는 모습은?', options: ['사탕을 오래 빨기', '먹고 물로 헹구기', '정한 때 먹기'], answer: '사탕을 오래 빨기' }] },
        notes: '간식을 "나쁜 것"으로 부르지 않는다. 학생이 좋아하는 간식을 말하게 하거나 집 간식을 묻지 않는다.',
      }),
      C({
        id: 'health.e34.snack-sugar.activity.snack-basket', type: 'activity', title: '이를 생각한 간식 바구니',
        method: '이를 생각한 간식 바구니', tool: 'kitchen', minutes: 14,
        levels: { easy: '간식 카드 3장 가운데 이에 덜 남는 것을 담는다.', base: '간식 카드 5장 가운데 담고, 둘째 문항에서 간식마다 까닭 카드를 잇는다.', challenge: '카드가 더해진 판에서 담고, 셋째 문항에서 먹은 뒤 할 일까지 고른다.' },
        activity: {
          title: '이를 생각한 간식 바구니', tool: 'kitchen',
          teacher: '"가상 친구 로아의 소풍 간식 바구니예요. 이를 생각하면 무엇을 담을까요?" 담은 뒤 까닭 카드를 이으며 "○○는 ○○해서 담았어요" 틀로 말하게 한다. 캐러멜을 담은 학생을 고치라고만 하지 않고 "캐러멜을 먹는다면 먹은 뒤 무엇을 챙길까요?"라고 물어 셋째 문항으로 잇는다. 어떤 간식이든 먹은 뒤 헹구고 닦는 것이 함께 간다는 점을 짚는다.',
          task: '로아의 간식 바구니에 이를 생각한 간식을 담고, 까닭과 먹은 뒤 할 일을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            PICK('이에 덜 남는 간식을 바구니에 담아요.', { basket: '로아의 소풍 간식' }, [k('milk', '우유', 1), k('caramel', '캐러멜'), k('apple', '사과', 1), k('jelly', '젤리'), k('cheese', '치즈', 1)], ['milk', 'caramel', 'apple'], [k('cucumber', '오이', 1), k('yeot', '엿')], 0.15),
            MATCH('간식과 까닭을 이어요.', { autoMotif: true, title: '간식과 까닭' }, [['우유', '이에 덜 남아요'], ['캐러멜', '먹고 꼭 헹궈요'], ['사과', '씹으면 침이 나와요']], '많이 먹어도 돼요', 0.2),
            PICK('간식을 먹은 뒤 할 일을 담아요.', { basket: '먹은 뒤 할 일', autoMotif: false }, [k('rinse', '물로 헹구기', 1), k('more', '사탕 더 먹기'), k('brush', '이 닦기', 1), k('sleep', '바로 누워 자기')], ['rinse', 'more', 'brush'], [k('water', '물 마시기', 1), k('skip', '닦지 않고 놀기')], 0.25, { conclude: '이에 덜 남는 간식을 고르고, 어떤 간식이든 먹은 뒤 물로 헹구고 이를 닦아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '간식을 먹은 뒤 할 일을 써요.', columns: ['간식', '먹은 뒤 할 일'], cells: [['캐러멜', ''], ['젤리', '']], answer: '물로 헹구기, 이 닦기' }] },
        notes: '"사과를 씹으면 침이 나온다"는 일반 지식이다(사람 확인). 소풍 바구니는 로아(가상)의 것이고 학생 집 간식은 묻지 않는다.',
      }),
      C({
        id: 'health.e34.snack-sugar.activity.snack-money', type: 'activity', title: '가상 용돈으로 간식 고르기',
        method: '가상 용돈으로 간식 고르기', tool: 'economy', minutes: 14,
        levels: { easy: '간식 3개가 놓인 가게에서 예산 막대를 넘지 않게 고른다.', base: '간식 5개가 놓인 가게에서 꼭 넣을 간식을 넣어 예산 안에서 고른다.', challenge: '간식 7개가 놓인 가게에서 고르고, 셋째 문항은 줄어든 돈으로 간식과 물을 함께 고른다.' },
        activity: {
          title: '가상 용돈으로 간식 고르기', tool: 'economy',
          teacher: '"이 돈은 연습용 가상 용돈이에요. 값과 이 건강을 둘 다 생각해 볼까요?" 막대가 예산을 넘으면 무엇을 빼야 할지 짝과 말하게 한다. "제일 비싼 게 제일 좋아요"라는 말이 나오면 "값이 비싸면 이에도 좋을까요? 값과 이 건강은 따로 따져요"라고 되묻는다. 남은 돈은 다음에 쓰려고 남겨 두어도 된다는 것을 짚는다. 가격은 모두 가상 값이다.',
          task: '가상 용돈으로 간식 가게에서 예산 안에 간식을 골라요. 꼭 넣을 간식을 넣어요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            { prompt: '2,000원 안에서 흰 우유를 꼭 넣어 간식을 골라요.', toolOptions: { mode: 'budget', budget: 2000, items: S('milk', 'caramel', 'apple', 'jelly', 'water'), ask: '로아의 간식(가상 값)' }, target: { budget: { must: ['milk'] } }, difficulty: 0.15,
              levels: { easy: { toolOptions: { items: S('milk', 'caramel', 'water') } }, challenge: { toolOptions: { items: S('milk', 'caramel', 'apple', 'jelly', 'water', 'cheese', 'lolly') } } } },
            { prompt: '1,500원 안에서 물과 사과를 꼭 넣어 골라요.', toolOptions: { mode: 'budget', budget: 1500, items: S('jelly', 'water', 'caramel', 'apple', 'milk'), ask: '체험 학습 간식(가상 값)' }, target: { budget: { must: ['water', 'apple'] } }, difficulty: 0.2,
              levels: { easy: { toolOptions: { items: S('water', 'jelly', 'apple') } }, challenge: { toolOptions: { items: S('jelly', 'water', 'lolly', 'caramel', 'apple', 'cheese', 'milk') } } } },
            { prompt: '1,000원뿐이에요. 물과 간식 하나, 모두 2개를 골라요.', toolOptions: { mode: 'budget', budget: 1000, items: S('caramel', 'water', 'apple', 'jelly', 'milk'), ask: '남은 용돈(가상 값)' }, target: { budget: { must: ['water'], count: 2 } }, difficulty: 0.25,
              levels: { easy: { toolOptions: { items: S('water', 'jelly', 'apple') } }, challenge: { toolOptions: { items: S('caramel', 'water', 'lolly', 'apple', 'jelly', 'cheese', 'milk') } } },
              conclude: '값과 이 건강을 함께 따져 골라요. 남은 돈은 남겨 두어도 돼요.' },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '간식을 고를 때 함께 따질 것은?', options: ['값과 이 건강', '포장 색깔', '친구가 고른 것'], answer: '값과 이 건강' }] },
        notes: '용돈·가격은 연습용 가상 값이다. 학생 자신의 용돈이나 집 형편을 묻지 않는다.',
      }),
      C({
        id: 'health.e34.snack-sugar.wrap.after-snack', type: 'wrap', title: '간식 뒤 할 일 차례',
        method: '간식 뒤 할 일 차례', tool: 'timer', minutes: 8,
        levels: { easy: '카드 2장(간식 먹기 → 물로 헹구기)을 차례로 놓는다.', base: '카드 3장(이 닦기 더함)을 차례로 놓는다.', challenge: '카드 4장(칫솔 말려 두기 더함)을 차례로 놓고, 학교에서 이를 못 닦을 때 할 일을 짝과 말한다(교사 진행).' },
        wrap: {
          teacher: '"간식을 먹은 뒤에는 무엇부터 할까요?" 카드를 놓은 뒤 자리에서 물로 헹구는 흉내를 함께 해 본다. "이 닦기 전에 또 간식 먹어요"라는 말이 나오면 "먹을 때마다 이에 남는 것이 늘어나요. 정한 때에 먹고 닦아요"라고 말한다. 학교에서 칫솔이 없을 때는 물로 헹구는 것부터 한다는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '간식 뒤 할 일', cards: ['이 닦기', '간식 먹기', '물로 헹구기'] }, prompt: '간식 뒤 할 일 카드를 차례로 놓아요.', target: { order: ['간식 먹기', '물로 헹구기', '이 닦기'] }, difficulty: 0.15,
              levels: { easy: { prompt: '간식 뒤 할 일 카드 2장을 차례로 놓아요.', toolOptions: { cards: ['물로 헹구기', '간식 먹기'] }, target: { order: ['간식 먹기', '물로 헹구기'] } },
                challenge: { prompt: '간식 뒤 할 일 카드 4장을 차례로 놓아요.', toolOptions: { cards: ['칫솔 말려 두기', '이 닦기', '간식 먹기', '물로 헹구기'] }, target: { order: ['간식 먹기', '물로 헹구기', '이 닦기', '칫솔 말려 두기'] } } } },
            { type: 'choice', prompt: '학교에서 칫솔이 없을 때 간식 뒤 할 일은?', options: ['물로 입 헹구기', '그냥 두기', '사탕 더 먹기'], answer: 0, difficulty: 0.1, explain: '칫솔이 없으면 물로 헹구고, 나중에 이를 닦아요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '간식을 먹은 뒤',
          items: [
            { type: 'table', prompt: '간식 뒤 할 일을 차례로 써요.', columns: ['차례', '할 일'], cells: [['1', '간식 먹기'], ['2', ''], ['3', '']], answer: '물로 헹구기, 이 닦기' },
            { type: 'choice', prompt: '자기 직전에 간식을 먹었다면?', options: ['이를 닦고 자요', '그냥 자요'], answer: '이를 닦고 자요' },
          ],
          easy: { note: '먹고 → 헹구고 → 닦아요.', items: [{ type: 'choice', prompt: '간식을 먹은 다음에는?', options: ['물로 헹궈요', '바로 자요'], answer: '물로 헹궈요' }] },
        },
      }),
      C({
        id: 'health.e34.snack-sugar.wrap.snack-web', type: 'wrap', title: '이를 아끼는 간식 습관 그물',
        method: '나의 간식 습관 그물', tool: 'mindmap', minutes: 8,
        levels: { easy: '가지 2개(언제·먹은 뒤)에 카드를 나눈다.', base: '가지 3개(언제·무엇·먹은 뒤)에 카드를 나눈다.', challenge: '카드가 가지마다 한 장씩 더해진 판에서 나누고, 바꿔 볼 점 하나를 활동지에 쓴다.' },
        wrap: {
          teacher: '"이를 아끼는 간식 습관은 언제·무엇을·먹은 뒤로 나누어 볼 수 있어요." 카드를 가지에 놓은 뒤 가지마다 한 문장으로 읽어 준다. 이 그물은 우리 반이 함께 만드는 습관 지도이고, 각자 집 간식을 적거나 발표하지 않는다고 말한다. "흰 우유"를 "언제" 가지에 두는 학생에게 "우유는 때일까요, 먹을 것일까요?"라고 묻는다.',
          exitTicket: [
            EX('mindmap', WEB('간식 습관 카드를 가지에 나누어요.', { topic: '이를 아끼는 간식' }, ['언제', '무엇', '먹은 뒤'], [['정한 간식 때', '밥 먹고 나서'], ['흰 우유', '방울토마토'], ['물로 헹구기', '이 닦기']], [[0, 2], [2, 2]], [['자기 한참 전'], ['치즈 한 조각'], ['칫솔 챙기기']], 0.15)),
            { type: 'choice', prompt: '간식을 먹기에 알맞은 때는?', options: ['정한 간식 때', '잠자기 직전', '온종일 조금씩'], answer: 0, difficulty: 0.1, explain: '정한 때에 먹고 헹구면 이에 덜 남아요.' },
          ],
        },
        worksheet: {
          title: '이를 아끼는 간식 습관',
          items: [
            { type: 'table', prompt: '빈칸에 알맞은 습관을 써요.', columns: ['언제', '먹은 뒤'], cells: [['정한 간식 때', '']], answer: '물로 헹구기 또는 이 닦기' },
            { type: 'short', prompt: '이를 아끼려고 바꿔 볼 점을 하나 써요.' },
          ],
          easy: { note: '정한 때에 먹고, 먹은 뒤 헹궈요.', items: [{ type: 'choice', prompt: '간식 뒤 할 일은?', options: ['이 닦기', '바로 자기'], answer: '이 닦기' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 걱정이 보내는 몸 신호와 쉬는 법 (생명존중 초: 감정 알아차리기·도움 요청 — 미검증)
  // ======================================================================================================
  {
    const C = T('worry-body');
    const EX = (tool, it) => ({ type: 'tool', tool, prompt: it.prompt, options: it.toolOptions, target: it.target, difficulty: it.difficulty, levels: it.levels });
    M.push(
      C({
        id: 'health.e34.worry-body.intro.worry-weather', type: 'intro', title: '발표 전 도윤이의 마음 날씨',
        method: '발표 전 마음 날씨', tool: 'emotion', minutes: 5,
        levels: { easy: '마음 카드 3장 가운데 교사가 하나를 고르는 모습을 함께 본다.', base: '마음 카드 5장 가운데 두 장이 골라지는 것을 보고 그 마음이 왜 생겼는지 말한다.', challenge: '고른 마음의 이름을 넣어 "도윤이는 ~해서 ~해요" 틀로 짝에게 말한다.' },
        intro: {
          teacher: '"도윤이는 곧 반 친구들 앞에서 발표를 해요. 도윤이 마음 날씨는 어떨까요?" 시연 단추로 마음 카드가 바구니에 담기는 모습을 보인다. "걱정하면 겁쟁이예요"라는 말이 나오면 "걱정은 누구에게나 오는 마음이에요. 걱정이 오면 몸도 신호를 보내요"라고 말한다. 오늘은 걱정할 때 몸 신호를 알아차리고 쉬는 방법을 찾는다고 밝힌다.',
          student: '발표를 앞둔 도윤이의 마음 날씨 카드를 보아요. 그런 마음이 드는 까닭을 생각해요.',
          demo: { tool: 'emotion', options: { mode: 'pick', basket: '발표 전 도윤이 마음', cards: ['걱정', '설렘', '기쁨', '무서움', '편안함'], shuffle: false }, sequence: [{ pick: ['걱정'] }, { pick: ['걱정', '설렘'] }] },
          art: art('a paper classroom with a small paper stage and a child holding a paper sheet, a little paper rain cloud and a paper sun peeking above the child', '도윤이의 마음 날씨', 'cloud', 'lavender'),
        },
        notes: '도윤이는 가상 인물이다. 학생에게 자기 걱정을 털어놓게 하지 않는다. 스스로 말하고 싶은 학생은 수업 뒤 따로 이야기를 듣는다.',
      }),
      C({
        id: 'health.e34.worry-body.intro.body-signal', type: 'intro', title: '걱정할 때 몸이 보내는 신호',
        method: '걱정할 때 몸 신호 찾기', tool: 'body', minutes: 5,
        levels: { easy: '배·가슴 두 곳이 골라지는 것을 함께 본다.', base: '배·가슴·손목(손) 세 곳이 골라지는 것을 본다.', challenge: '세 곳마다 어떤 느낌(배가 살살·가슴이 두근·손에 땀)인지 짝에게 말한다.' },
        intro: {
          teacher: '"도윤이가 발표 순서를 기다릴 때 몸에서는 어떤 일이 생길까요?" 시연 단추로 배·가슴을 고르고, 이어서 손목 칸을 짚으며 "손에 땀이 나거나 주먹에 힘이 들어가요"라고 말한다. 손 칸이 따로 없어 손목 칸으로 손을 가리킨다. "배가 아프면 꾀병이에요"라는 말이 나오면 "걱정할 때 정말로 배가 아플 수 있어요. 몸이 보내는 신호예요"라고 바로잡는다.',
          student: '종이 몸에서 걱정할 때 신호가 오는 곳을 찾아요. 그곳이 어떤 느낌일지 생각해요.',
          demo: { tool: 'body', options: { mode: 'parts', parts: ['배', '가슴', '손목', '무릎', '귀', '어깨'], names: true }, sequence: [{ parts: ['배', '가슴'] }, { parts: ['배', '가슴', '손목'] }] },
          art: art('a paper body outline with soft glowing paper circles on the tummy, the chest and the wrist, a small paper heart beating fast', '몸이 보내는 신호', 'cloud', 'peach'),
        },
        notes: 'body 교구에 손 칸이 없어 손목 칸으로 손을 짚는다. 몸 신호가 자주 계속되면 보건 선생님께 알리도록 안내한다.',
      }),
      C({
        id: 'health.e34.worry-body.activity.breath', type: 'activity', title: '천천히 숨 고르기 따라 하기',
        method: '숨 고르기 따라 하기', tool: 'timer', minutes: 14,
        levels: { easy: '숨 고르기 카드 2장(들이쉬기·내쉬기)의 차례를 놓고, 타이머를 2번으로 맞춘다.', base: '카드 3장(멈추기 더함)의 차례를 놓고, 타이머를 3번으로 맞춘다.', challenge: '카드 4장(마음 이름 말하기 더함)을 놓고 타이머를 4번으로 맞춘 뒤, 짝에게 손 신호를 주며 이끈다(교사 진행).' },
        activity: {
          title: '천천히 숨 고르기 따라 하기', tool: 'timer',
          teacher: '"걱정으로 가슴이 두근거릴 때 숨을 천천히 쉬면 몸이 조금씩 가라앉아요." 차례를 정한 뒤 타이머를 켜고 다 같이 코로 들이쉬고 입으로 길게 내쉰다. 타이머 값은 우리 반이 연습하려고 정한 약속이라고 말한다. 숨을 너무 세게 쉬는 학생에게 "풍선을 살살 부는 것처럼 천천히 해 볼까요?"라고 말한다. 어지러우면 바로 멈추고 보통 숨으로 돌아간다.',
          task: '숨 고르기 차례를 정하고, 우리 반 약속대로 타이머를 맞춰 함께 해 보아요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '숨 고르기 카드를 차례로 놓아요.', toolOptions: { title: '숨 고르기 차례', cards: ['천천히 내쉬기', '잠깐 멈추기', '천천히 들이쉬기'] }, target: { order: ['잠깐 멈추기', '천천히 들이쉬기', '천천히 내쉬기'] }, difficulty: 0.15,
              levels: { easy: { prompt: '숨 고르기 카드 2장을 차례로 놓아요.', toolOptions: { cards: ['천천히 내쉬기', '천천히 들이쉬기'] }, target: { order: ['천천히 들이쉬기', '천천히 내쉬기'] } },
                challenge: { prompt: '숨 고르기 카드 4장을 차례로 놓아요.', toolOptions: { cards: ['마음 이름 말하기', '천천히 내쉬기', '잠깐 멈추기', '천천히 들이쉬기'] }, target: { order: ['잠깐 멈추기', '천천히 들이쉬기', '천천히 내쉬기', '마음 이름 말하기'] } } } },
            { prompt: '들이쉬기·내쉬기를 3번 하도록 타이머를 맞춰요.', toolOptions: { title: '숨 고르기(우리 반 약속)', labels: ['들이쉬기', '내쉬기'], plan: { work: 4, rest: 4, rounds: 1 }, workStep: 1, restStep: 1 }, target: { plan: { rounds: 3 } }, difficulty: 0.15,
              levels: { easy: { prompt: '들이쉬기·내쉬기를 2번 하도록 타이머를 맞춰요.', target: { plan: { rounds: 2 } } }, challenge: { prompt: '들이쉬기·내쉬기를 4번 하도록 타이머를 맞춰요.', target: { plan: { rounds: 4 } } } } },
            { prompt: '숨 고르기를 해 보고 한 것에 스스로 표시해요.', toolOptions: { title: '숨 고르기 점검' }, target: { selfCheck: ['천천히 들이쉬었어요', '길게 내쉬었어요', '어깨 힘을 뺐어요'] }, difficulty: 0.1,
              levels: { easy: { prompt: '숨 고르기를 해 보고 한 것 2칸에 표시해요.', target: { selfCheck: ['천천히 들이쉬었어요', '길게 내쉬었어요'] } }, challenge: { prompt: '숨 고르기를 해 보고 한 것 4칸에 표시해요.', target: { selfCheck: ['천천히 들이쉬었어요', '길게 내쉬었어요', '어깨 힘을 뺐어요', '짝과 함께 했어요'] } } },
              conclude: '걱정으로 몸이 두근거리면 멈추고, 천천히 들이쉬고 길게 내쉬어요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '숨 고르기 차례를 번호로 써요.', columns: ['할 일', '차례'], cells: [['천천히 내쉬기', ''], ['잠깐 멈추기', ''], ['천천히 들이쉬기', '']], answer: '3, 1, 2' }] },
        notes: '타이머의 초와 번 수는 연습용 우리 반 약속이다. 숨 고르기는 걱정을 없애는 약이 아니라 잠깐 쉬는 방법이고, 걱정이 오래가면 어른께 말한다는 것을 함께 말한다.',
      }),
      C({
        id: 'health.e34.worry-body.activity.rest-sort', type: 'activity', title: '도움 되는 쉬는 방법 나누기',
        method: '쉬는 방법 나누기', tool: 'sortboard', minutes: 14,
        levels: { easy: '문항마다 카드 4장을 바구니 2개에 나누고, 틀리면 바로 되돌아온다.', base: '문항마다 카드 6장을 나눈 뒤 확인한다.', challenge: '헷갈리는 카드 2장이 더해진 8장을 나누고, 그 가운데 도윤이에게 맞을 것 같은 방법을 짝에게 말한다(교사 진행).' },
        activity: {
          title: '도움 되는 쉬는 방법 나누기', tool: 'sortboard',
          teacher: '"걱정이 올 때 이 방법은 도움이 될까요?" 카드를 넣을 때마다 까닭을 말하게 한다. "혼자 꾹 참으면 돼요"라는 말이 나오면 "참는 동안 걱정은 어디로 갈까요? 누군가에게 말하면 어떻게 될까요?"라고 되묻는다. 사람마다 맞는 방법이 다를 수 있지만 혼자 참거나 숨기는 것보다 믿는 어른에게 말하는 것이 더 도움 된다는 것을 짚는다.',
          task: '쉬는 방법과 말 카드를 도움 돼요·도움 안 돼요 바구니에 나누어요.', levels: BOXLV,
          items: [
            BOX('걱정될 때 쉬는 방법을 나누어요.', ['도움 돼요', '도움 안 돼요'], [['천천히 숨 쉬기', '그림 그리기', '믿는 어른께 말하기'], ['혼자 꾹 참기', '밤새 걱정만 하기', '소리 지르기']], [[0, 2], [1, 2]], [['좋아하는 노래 듣기'], ['걱정 숨기기']], 0.15),
            BOX('걱정하는 친구에게 할 일을 나누어요.', ['도움 돼요', '도움 안 돼요'], [['"괜찮아?" 묻기', '끝까지 들어 주기', '같이 선생님께 가기'], ['"별것 아냐" 하기', '걱정을 놀리기', '다른 친구에게 퍼뜨리기']], [[0, 2], [1, 2]], [['옆에 있어 주기'], ['"너만 그래" 하기']], 0.2),
            BOX('몸 신호가 계속될 때 할 일을 나누어요.', ['도움 돼요', '도움 안 돼요'], [['보건실에 가기', '보호자께 말하기', '선생님께 알리기'], ['아픈 걸 숨기기', '혼자 참고 있기', '약을 혼자 먹기']], [[0, 2], [1, 2]], [['쉬는 시간 갖기'], ['아무 말 안 하기']], 0.25, { conclude: '걱정이 오면 숨 고르기·좋아하는 일로 쉬고, 계속되면 믿는 어른께 말해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '걱정이 계속될 때 도움 되는 것은?', options: ['믿는 어른께 말하기', '혼자 꾹 참기', '걱정 숨기기'], answer: '믿는 어른께 말하기' }] },
        notes: '학생에게 자기가 쓰는 방법이나 요즘 걱정을 발표하게 하지 않는다. 카드 판의 인물 상황으로만 나눈다.',
      }),
      C({
        id: 'health.e34.worry-body.activity.worry-dilemma', type: 'activity', title: '갈림길: 걱정돼서 잠이 안 와요',
        method: '시험 전날 밤 갈림길', tool: 'dilemma', minutes: 14,
        levels: { easy: '장면마다 갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '장면마다 갈림 2번, 보기 3개씩 고르며 결과를 따라간다.', challenge: '갈림 2번을 지난 뒤 근거 카드 3장 가운데 알맞은 2장을 고른다.' },
        activity: {
          title: '갈림길: 걱정이 올 때', tool: 'dilemma',
          teacher: '"나은이가 걱정돼서 잠이 안 와요. 나은이에게 어떤 길이 도움 될까요?" 보기를 고를 때마다 결과를 소리 내어 읽고, 나은이 몸과 마음이 어떻게 되는지 함께 짚는다. 혼자 참는 길을 고른 학생을 나무라지 않고 "말하기 어려운 마음도 있어요. 그래도 누구에게라면 말할 수 있을까요?"라고 되묻는다. 이 장면은 가상 인물 이야기이고, 각자의 걱정을 말할 필요는 없다고 미리 알린다.',
          task: '나은이와 친구들의 장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('시험 전날 밤, 걱정돼서 잠이 안 와요.', {
              text: '받아쓰기 시험 전날 밤, 나은이는 틀릴까 봐 걱정돼서 잠이 안 와요.', motif: 'cloud',
              choices: [
                { id: 'awake', text: '누워서 계속 걱정한다', result: '밤이 깊도록 잠을 못 잤어요.', impact: [{ who: '나은이', text: '아침에 피곤해요', tone: -1 }], why: '걱정을 혼자 붙잡고 있으면 더 커질 수 있어요.' },
                { id: 'tell', text: '보호자께 걱정을 말한다', result: '보호자가 "말해 줘서 고마워" 하셨어요.', ending: '걱정을 말해 마음이 조금 가벼워졌어요.', next: {
                  text: '보호자가 "같이 마음을 가라앉혀 볼까?" 하세요.', choices: [
                    { id: 'breathe', text: '함께 천천히 숨 쉰다', result: '두근거림이 가라앉고 잠이 왔어요.', impact: [{ who: '나은이', text: '푹 잤어요', tone: 1 }], ending: '말하고 숨을 고르며 쉬었어요.' },
                    { id: 'study', text: '밤새 받아쓰기를 한다', result: '더 피곤해지고 걱정도 그대로예요.', impact: [{ who: '나은이', text: '몸이 지쳐요', tone: -1 }], why: '잠도 공부만큼 중요해요.' },
                    { id: 'game', text: '침대에서 게임을 한다', result: '눈이 말똥말똥해졌어요.', impact: [{ who: '나은이', text: '잠이 더 안 와요', tone: -1 }] },
                  ] } },
                { id: 'hide', text: '"괜찮아" 하고 숨긴다', result: '걱정은 그대로 남았어요.', impact: [{ who: '나은이', text: '마음이 무거워요', tone: -1 }] },
              ] }, [['tell', 'breathe']],
            [{ id: 'share', text: '걱정을 말하면 가벼워져서' }, { id: 'rest', text: '숨 고르기가 몸을 쉬게 해서' }, { id: 'weak', text: '걱정하는 건 약한 거라서', why: '걱정은 누구에게나 오는 마음이에요.' }], ['share', 'rest'], 0.2),
            DIL('수영 수업 전에 배가 살살 아파요.', {
              text: '처음 가는 수영 수업 날 아침, 지호는 물이 무서워 배가 살살 아파요.', motif: 'rain',
              choices: [
                { id: 'endure', text: '아무 말 없이 참는다', result: '수영장에서도 배가 계속 아팠어요.', impact: [{ who: '지호', text: '몸도 마음도 힘들어요', tone: -1 }], why: '몸 신호는 참지 말고 말해요.' },
                { id: 'teacher', text: '선생님께 "무서워요" 말한다', result: '선생님이 "말해 줘서 고마워" 하셨어요.', ending: '무서운 마음을 말해 도움을 받았어요.', next: {
                  text: '선생님이 "처음엔 물가에서 발만 담가 볼까?" 하세요.', choices: [
                    { id: 'try', text: '발만 담가 본다', result: '조금씩 물이 덜 무서워졌어요.', impact: [{ who: '지호', text: '마음이 놓여요', tone: 1 }], ending: '작은 것부터 해 보며 걱정이 줄었어요.' },
                    { id: 'run', text: '탈의실에 숨는다', result: '선생님과 친구들이 지호를 찾았어요.', impact: [{ who: '지호', text: '더 걱정돼요', tone: -1 }], why: '숨기보다 어른 곁에 있어요.' },
                    { id: 'jump', text: '깊은 곳에 뛰어든다', result: '물을 먹고 놀랐어요.', impact: [{ who: '지호', text: '위험했어요', tone: -1 }], why: '무섭다고 서두르지 말고 선생님 말을 들어요.' },
                  ] } },
                { id: 'fake', text: '"배 안 아파" 거짓말한다', result: '아픈 배를 아무도 몰랐어요.', impact: [{ who: '지호', text: '혼자 힘들어요', tone: -1 }] },
              ] }, [['teacher', 'try']],
            [{ id: 'signal', text: '배 아픔은 몸이 보내는 신호라서' }, { id: 'help', text: '말하면 어른이 도울 수 있어서' }, { id: 'fakeok', text: '아픈 건 꾀병이라서', why: '걱정할 때 정말 배가 아플 수 있어요.' }], ['signal', 'help'], 0.25),
            DIL('친구가 걱정으로 손을 떨고 있어요.', {
              text: '발표를 기다리는 서윤이가 손을 떨며 "망치면 어떡해" 해요.', motif: 'cloud',
              choices: [
                { id: 'tease', text: '"떨긴 왜 떨어" 웃는다', result: '서윤이가 더 움츠러들었어요.', impact: [{ who: '서윤이', text: '창피해요', tone: -1 }], why: '걱정하는 친구를 놀리지 않아요.' },
                { id: 'listen', text: '"걱정되는구나" 들어 준다', result: '서윤이가 고개를 끄덕였어요.', ending: '친구 마음을 알아주었어요.', next: {
                  text: '서윤이가 "가슴이 계속 두근거려" 해요.', choices: [
                    { id: 'together', text: '"같이 숨 천천히 쉬어 보자"', result: '서윤이 손 떨림이 줄었어요.', impact: [{ who: '서윤이', text: '마음이 놓여요', tone: 1 }], ending: '함께 숨을 고르며 친구를 도왔어요.' },
                    { id: 'nothing', text: '"별것 아냐" 한다', result: '서윤이 걱정은 그대로예요.', impact: [{ who: '서윤이', text: '외로워요', tone: -1 }], why: '걱정을 작게 말하지 말고 알아줘요.' },
                    { id: 'spread', text: '다른 친구에게 알린다', result: '여러 친구가 서윤이를 쳐다봤어요.', impact: [{ who: '서윤이', text: '더 떨려요', tone: -1 }], why: '친구 걱정을 퍼뜨리지 않아요.' },
                  ] } },
                { id: 'ignore', text: '모르는 척한다', result: '서윤이는 혼자 떨었어요.', impact: [{ who: '서윤이', text: '외로워요', tone: -1 }] },
              ] }, [['listen', 'together']],
            [{ id: 'notice', text: '친구 마음을 알아주면 힘이 돼서' }, { id: 'calm', text: '함께 숨 쉬면 몸이 가라앉아서' }, { id: 'small', text: '걱정은 별것 아니라서', why: '누구의 걱정도 작지 않아요.' }], ['notice', 'calm'], 0.3, { conclude: '걱정이 오면 몸 신호를 알아차리고, 숨을 고르고, 믿는 어른께 말해요. 친구의 걱정은 알아줘요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '걱정돼서 잠이 안 올 때 알맞은 것은?', options: ['보호자께 말하기', '밤새 걱정하기', '숨기기'], answer: '보호자께 말하기' }] },
        notes: '장면 인물(나은·지호·서윤)은 가상이다. 학생 자신의 시험·발표 걱정을 묻지 않는다.',
      }),
      C({
        id: 'health.e34.worry-body.wrap.helper-web', type: 'wrap', title: '걱정될 때 말할 수 있는 사람',
        method: '말할 수 있는 사람 그물', tool: 'mindmap', minutes: 8,
        levels: { easy: '가지 2개(선생님·가족 어른)에 카드를 나눈다.', base: '가지 3개(친구 더함)에 카드를 나눈다.', challenge: '카드가 가지마다 한 장씩 더해진 판에서 나누고, 둘째 문항에서 말할 첫마디를 고른다.' },
        wrap: {
          teacher: '"걱정이 계속될 때 말할 수 있는 사람은 누구일까요?" 카드를 가지에 놓은 뒤 가지마다 한 명씩 소리 내어 읽어 준다. 누구에게 말할지 정하는 것은 각자 마음속으로 하고, 발표하지 않아도 된다고 말한다. "말할 사람이 없어요"라는 말이 나오면 "보건 선생님, 상담 선생님도 있어요. 학교에는 늘 들어 줄 어른이 있어요"라고 알려 준다.',
          exitTicket: [
            EX('mindmap', WEB('말할 수 있는 사람 카드를 가지에 나누어요.', { topic: '걱정될 때 말할 사람' }, ['선생님', '가족 어른', '친구'], [['담임 선생님', '보건 선생님'], ['보호자', '함께 사는 어른'], ['믿는 친구', '짝꿍']], [[0, 2], [1, 2]], [['상담 선생님'], ['돌봐 주는 어른'], ['같은 모둠 친구']], 0.15)),
            { type: 'choice', prompt: '걱정을 말할 첫마디로 알맞은 것은?', options: ['"선생님, 할 말 있어요"', '"아무것도 아니에요"', '말하지 않아요'], answer: 0, difficulty: 0.1, explain: '첫마디만 꺼내면 어른이 이어서 들어 줘요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '걱정될 때 말할 사람',
          items: [
            { type: 'check', prompt: '걱정될 때 말할 수 있는 사람에 표시해요.', options: ['담임 선생님', '보건 선생님', '보호자', '처음 본 사람'] },
            { type: 'short', prompt: '걱정을 말할 때 쓸 첫마디를 한 줄 써요.' },
          ],
          easy: { note: '학교에는 들어 줄 어른이 있어요.', items: [{ type: 'choice', prompt: '걱정이 계속되면?', options: ['어른께 말해요', '혼자 참아요'], answer: '어른께 말해요' }] },
        },
        notes: '가족 형태를 하나로 가정하지 않도록 "보호자·함께 사는 어른·돌봐 주는 어른"으로 썼다. 말할 사람을 적은 활동지는 걷지 않고 학생이 가진다.',
      }),
      C({
        id: 'health.e34.worry-body.wrap.calm-collage', type: 'wrap', title: '마음 쉼터 꾸미기',
        method: '마음 쉼터 꾸미기', tool: 'collage', minutes: 8,
        levels: { easy: '색종이 조각 2개 이상을 붙이고 점검 2칸에 표시한다.', base: '조각 4개 이상을 붙이고 점검 3칸에 표시한다.', challenge: '조각 5개 이상을 붙이고 점검 4칸에 표시한 뒤 짝에게 하나를 소개한다(교사 진행).' },
        wrap: {
          teacher: '"걱정이 올 때 나를 편하게 해 주는 것들로 마음 쉼터를 꾸며 볼까요?" 해(따뜻함)·나뭇잎(숲)·하트(좋아하는 사람)·별(좋아하는 일) 조각을 고르게 한다. 쉼터에 무엇을 넣었는지는 말하고 싶은 학생만 짝에게 소개한다. "아무것도 편하지 않아요"라는 학생에게는 "오늘 배운 숨 고르기를 쉼터에 넣어 볼까요?"라고 권한다.',
          exitTicket: [
            COL('색종이 조각으로 나만의 마음 쉼터를 꾸며요.', ['편해지는 것을 골랐어요', '조각을 붙였어요', '숨 고르기를 떠올렸어요', '짝에게 하나 소개했어요'], 2, 4, 5, { shapes: ['circle', 'leaf', 'heart', 'star', 'semi', 'square'] }),
            { type: 'choice', prompt: '마음 쉼터에 넣기 알맞은 것은?', options: ['천천히 숨 쉬기', '혼자 꾹 참기', '밤새 걱정하기'], answer: 0, difficulty: 0.1, explain: '나를 편하게 하는 방법을 모아 두면 걱정이 올 때 꺼내 쓸 수 있어요.' },
          ],
        },
        worksheet: {
          title: '나의 마음 쉼터',
          items: [
            { type: 'draw', prompt: '나를 편하게 하는 것으로 마음 쉼터를 그려요.' },
            { type: 'choice', prompt: '걱정이 오래가면 어떻게 할까요?', options: ['믿는 어른께 말해요', '쉼터에만 숨어요'], answer: '믿는 어른께 말해요' },
          ],
          easy: { note: '좋아하는 것 두 가지를 그려요.', items: [{ type: 'choice', prompt: '걱정이 오면?', options: ['숨을 천천히 쉬어요', '소리 질러요'], answer: '숨을 천천히 쉬어요' }] },
        },
        notes: '색종이 판에는 글자를 붙일 수 없다. 쉼터 내용은 학생 것이니 발표를 강요하지 않는다.',
      }),
    );
  }

  // ======================================================================================================
  // 간접흡연 피하기 (학교보건법 제9조 — 흡연 예방은 보건교육 내용)
  // ======================================================================================================
  {
    const C = T('secondhand-smoke');
    const TOWN = {
      title: '도서관 가는 동네(가상)', grid: [6, 4],
      regions: [
        { name: '우리 집', cells: [[0, 0]] }, { name: '큰길 인도', cells: [[1, 0], [2, 0], [3, 0], [4, 0]] }, { name: '가게 앞 흡연 구역', cells: [[5, 0], [5, 1]] },
        { name: '공원 산책길', cells: [[0, 1], [0, 2], [1, 2], [2, 2], [3, 2], [4, 2]] }, { name: '놀이터', cells: [[1, 1], [2, 1]] }, { name: '주차장', cells: [[3, 1], [4, 1]] },
        { name: '도서관', cells: [[5, 2], [5, 3], [4, 3]] }, { name: '연못', cells: [[0, 3], [1, 3], [2, 3], [3, 3]] },
      ],
    };
    M.push(
      C({
        id: 'health.e34.secondhand-smoke.intro.smoke-scene', type: 'intro', title: '공원 벤치로 연기가 날아와요',
        method: '연기 나는 장면 마음 고르기', tool: 'emotion', minutes: 5,
        levels: { easy: '보기 2개(그대로 앉기·자리 옮기기)의 결과를 함께 본다.', base: '보기 3개의 결과를 차례로 보고 내 마음과 할 행동을 말한다.', challenge: '고른 행동의 까닭을 "연기가 ~해서" 틀로 짝에게 말한다.' },
        intro: {
          teacher: '"하율이가 공원 벤치에서 쉬는데 옆에서 담배 연기가 날아와요. 하율이 마음은 어떨까요? 어떻게 하면 좋을까요?" 시연 단추로 보기를 고르고 결과가 나오는 모습을 보인다. "담배 피우는 사람은 나쁜 사람이에요"라는 말이 나오면 "사람을 나쁘다고 하기보다, 연기를 피해 내 몸을 지키는 방법을 찾아요"라고 말한다. 오늘은 담배 연기가 숨 쉬는 곳에 들어가면 왜 해로운지, 어떻게 피하는지 배운다고 밝힌다.',
          student: '공원에서 담배 연기를 만난 하율이의 마음과 할 행동을 골라 보아요. 그 까닭을 생각해요.',
          demo: { tool: 'emotion', options: { mode: 'branch', situation: '공원 벤치에서 쉬는데 옆 어른의 담배 연기가 날아와요.', ask: '하율이는 어떻게 할까요?', motif: 'wind', choices: [{ id: 'stay', text: '그대로 앉아 있는다', result: '연기를 마셔 기침이 났어요.', mood: '걱정' }, { id: 'move', text: '바람 반대쪽으로 옮긴다', result: '맑은 공기를 마셨어요.', mood: '편안함' }, { id: 'yell', text: '"냄새나요!" 소리친다', result: '어른도 하율이도 기분이 상했어요.', mood: '화남' }] }, sequence: [{ choice: 'stay' }, { choice: 'move' }] },
          art: art('a paper park with a wooden paper bench, a gray paper smoke cloud drifting toward a child, a paper arrow showing the wind and a sunny spot on the other side', '연기를 피해요', 'wind', 'mint'),
        },
        notes: '하율이는 가상 인물이다. 학생 가족의 흡연 여부를 묻거나 말하게 하지 않는다. 담배를 피우는 사람을 나쁜 사람으로 부르지 않는다.',
      }),
      C({
        id: 'health.e34.secondhand-smoke.intro.lung-find', type: 'intro', title: '숨이 지나는 기관 찾기',
        method: '숨이 지나는 길 찾기', tool: 'body', minutes: 5,
        levels: { easy: '종이 몸에서 폐 한 곳이 골라지는 것을 함께 본다.', base: '코 → 기관 → 폐가 하나씩 골라지는 것을 본다.', challenge: '연기가 폐까지 들어가면 생기는 일(기침·숨이 답답함)을 짝에게 말한다.' },
        intro: {
          teacher: '"숨을 들이쉬면 공기는 어디로 들어갈까요?" 시연 단추로 종이 몸에서 코, 기관, 폐를 하나씩 고르는 모습을 보인다. "연기는 코에서 멈춰요"라는 말이 나오면 "공기가 가는 길로 연기도 함께 가요. 끝은 어디였나요?"라고 되묻는다. 담배 연기를 내가 피우지 않아도 옆에서 마시면 숨 쉬는 기관이 힘들어한다는 것을 짚는다.',
          student: '종이 몸에서 숨이 지나는 기관을 차례로 찾아요. 연기도 그 길로 들어간다는 것을 생각해요.',
          demo: { tool: 'body', options: { mode: 'find', organs: ['코', '기관', '폐', '심장', '위'], names: true }, sequence: [{ sel: '코' }, { sel: '기관' }, { sel: '폐' }] },
          art: art('a paper body outline with a soft paper breath line from the nose down the windpipe into two pink paper lungs, a little gray paper smoke puff at the nose', '숨이 가는 길', 'leaf', 'sky'),
        },
        notes: '같은 학년군 약물 중독 예방(saf-drug)은 숨길을 따라 잇기(path)로 했고, 이 모듈은 기관을 하나씩 찾는(find) 것으로 한다.',
      }),
      C({
        id: 'health.e34.secondhand-smoke.activity.avoid-map', type: 'activity', title: '연기를 피해 도서관 가기',
        method: '동네에서 연기 피하는 길', tool: 'map', minutes: 14,
        levels: { easy: '핀을 놓으면 그 칸의 이름이 바로 보인다.', base: '지도의 이름을 보고 연기 날 곳·피해 갈 길·쉬어 갈 곳에 핀을 꽂는다.', challenge: '핀을 꽂은 뒤 그곳을 고른 까닭이나 할 행동을 보기에서 고른다.' },
        activity: {
          title: '연기를 피해 도서관 가기', tool: 'map',
          teacher: '"하율이는 집에서 도서관에 가요. 큰길로 가면 가게 앞 흡연 구역을 지나요. 어느 길로 갈까요?" 핀을 꽂기 전에 손가락으로 두 길(큰길·공원 산책길)을 따라가 견주어 보게 한다. 길은 지도가 잇지 못하니 교사가 칠판에 두 길을 화살표로 그려 보인다. "숨 참고 뛰어가면 돼요"라는 말이 나오면 "돌아갈 수 있는 길이 있다면 어떤 길이 더 안전할까요?"라고 묻는다.',
          task: '가상 동네 지도를 보고 물음에 맞는 곳에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            PIN(TOWN, '담배 연기가 날 수 있다고 표시된 곳에 핀을 꽂아요.', '가게 앞 흡연 구역', { q: '이곳 앞을 지날 때는?', choices: ['멀리 돌아가요', '가까이서 구경해요', '그 앞에서 놀아요'], answer: 0 }, 0.15),
            PIN(TOWN, '흡연 구역을 피해 도서관에 가는 길에 핀을 꽂아요.', '공원 산책길', { q: '왜 이 길로 갈까요?', choices: ['연기를 피하려고', '더 멀어서', '심심해서'], answer: 0 }, 0.2),
            PIN(TOWN, '연기 때문에 기침이 나면 쉬어 갈 실내에 핀을 꽂아요.', '도서관', { q: '기침이 계속 나면?', choices: ['어른께 말해요', '꾹 참아요', '연기 쪽으로 가요'], answer: 0 }, 0.25, { conclude: '연기가 날 수 있는 곳은 멀리 돌아가고, 기침이 나면 맑은 곳에서 쉬며 어른께 말해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '가는 길에 담배 연기가 나는 곳이 있으면?', options: ['다른 길로 돌아가요', '숨 참고 지나가요', '그 앞에서 기다려요'], answer: '다른 길로 돌아가요' }] },
        notes: '동네 지도는 가상이다. 학생 집 근처의 실제 장소를 말하게 하지 않는다. 계획의 "길 잇기·범례 만들기"는 지도 교구가 하지 못해 핀 꽂기와 교사 칠판 화살표로 했다.',
      }),
      C({
        id: 'health.e34.secondhand-smoke.activity.say-polite', type: 'activity', title: '"창문 열어 주세요" 부탁하기',
        method: '"창문 열어 주세요" 부탁하기', tool: 'timer', minutes: 14,
        levels: { easy: '부탁 말 카드 3장을 차례로 놓고, 교사 문장을 따라 하도록 타이머를 1번으로 맞춘다.', base: '카드 4장을 차례로 놓고, 짝과 번갈아 하도록 타이머를 2번으로 맞춘다.', challenge: '카드 4장을 놓고 타이머를 4번으로 맞춘 뒤, 스스로 점검 4칸(내 말로 바꾸기 더함)에 표시한다.' },
        activity: {
          title: '"창문 열어 주세요" 부탁하기', tool: 'timer',
          teacher: '"가상 장면이에요. 하율이가 간 식당 안에 담배 냄새가 남아 있어요. 어른께 어떻게 부탁할까요?" 차례를 정한 뒤 타이머를 켜고 짝과 손님·직원 역할을 번갈아 맡아 말해 본다. 타이머 값은 우리 반 연습 약속이다. 화난 목소리로 말하는 학생에게 "같은 말을 부드럽게 하면 듣는 사람 마음이 어떨까요?"라고 묻는다. 부탁해도 바뀌지 않으면 그 자리를 떠나 함께 온 어른께 알리면 된다는 것을 짚는다.',
          task: '공손한 부탁 말의 차례를 정하고, 우리 반 약속대로 짝과 번갈아 연습해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '공손한 부탁 말 카드를 차례로 놓아요.', toolOptions: { title: '부탁 말 차례', cards: ['"고맙습니다"', '"냄새가 나요"', '"저기요, 죄송해요"', '"창문 열어 주세요"'] }, target: { order: ['"저기요, 죄송해요"', '"냄새가 나요"', '"창문 열어 주세요"', '"고맙습니다"'] }, difficulty: 0.15,
              levels: { easy: { prompt: '공손한 부탁 말 카드 3장을 차례로 놓아요.', toolOptions: { cards: ['"고맙습니다"', '"저기요, 죄송해요"', '"창문 열어 주세요"'] }, target: { order: ['"저기요, 죄송해요"', '"창문 열어 주세요"', '"고맙습니다"'] } } } },
            { prompt: '짝과 번갈아 2번 연습하도록 타이머를 맞춰요.', toolOptions: { title: '역할 연습(우리 반 약속)', labels: ['부탁', '바꾸기'], plan: { work: 20, rest: 10, rounds: 1 } }, target: { plan: { rounds: 2 } }, difficulty: 0.15,
              levels: { easy: { prompt: '선생님을 따라 1번 연습하도록 타이머를 맞춰요.', toolOptions: { plan: { work: 20, rest: 10, rounds: 3 } }, target: { plan: { rounds: 1 } } }, challenge: { prompt: '짝과 번갈아 4번 연습하도록 타이머를 맞춰요.', target: { plan: { rounds: 4 } } } } },
            { prompt: '부탁하기를 연습하고 한 것에 스스로 표시해요.', toolOptions: { title: '부탁하기 점검' }, target: { selfCheck: ['공손하게 말했어요', '짝 말을 들었어요', '역할을 바꿨어요'] }, difficulty: 0.1,
              levels: { easy: { prompt: '부탁하기를 연습하고 한 것 2칸에 표시해요.', target: { selfCheck: ['공손하게 말했어요', '짝 말을 들었어요'] } }, challenge: { prompt: '부탁하기를 연습하고 한 것 4칸에 표시해요.', target: { selfCheck: ['공손하게 말했어요', '짝 말을 들었어요', '역할을 바꿨어요', '내 말로 바꿔 했어요'] } } },
              conclude: '연기나 냄새가 불편하면 공손하게 부탁하고, 안 되면 자리를 옮겨 어른께 알려요.' },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '"저기요, 죄송하지만 창문 ___ 주세요."', answer: '열어' }] },
        notes: '역할 장면은 식당(가상)이다. 학생 집에서 가족에게 부탁하는 장면으로 바꾸지 않는다. 타이머 값은 연습용 우리 반 약속이다.',
      }),
      C({
        id: 'health.e34.secondhand-smoke.activity.avoid-sort', type: 'activity', title: '연기 피하는 행동 나누기',
        method: '연기 피하는 행동 나누기', tool: 'sortboard', minutes: 14,
        levels: { easy: '문항마다 카드 4장을 바구니 2개에 나누고, 틀리면 바로 되돌아온다.', base: '문항마다 카드 6장을 나눈 뒤 확인한다.', challenge: '헷갈리는 카드 2장이 더해진 8장을 나누고, 가장 좋은 행동 하나를 골라 짝에게 까닭을 말한다(교사 진행).' },
        activity: {
          title: '연기 피하는 행동 나누기', tool: 'sortboard',
          teacher: '"연기가 올 때 이 행동은 내 숨을 지켜 줄까요?" 카드를 넣을 때마다 까닭을 말하게 한다. "그냥 참으면 돼요"라는 말이 나오면 "참는 동안에도 연기는 코로 들어와요. 무엇을 하면 들어오지 않을까요?"라고 되묻는다. 연기를 피우는 사람을 탓하는 말 카드는 아쉬운 행동이라는 점, 사람이 아니라 연기를 피한다는 점을 짚는다.',
          task: '연기를 만났을 때의 행동 카드를 좋은 행동·아쉬운 행동 바구니에 나누어요.', levels: BOXLV,
          items: [
            BOX('밖에서 연기가 올 때 행동을 나누어요.', ['좋은 행동', '아쉬운 행동'], [['자리 옮기기', '어른께 알리기', '바람 반대쪽 서기'], ['그냥 참기', '연기 쪽에 앉기', '"냄새나!" 소리치기']], [[0, 2], [1, 2]], [['코 가리고 비키기'], ['흡연 구역 앞 놀기']], 0.15),
            BOX('안으로 연기가 들어올 때 행동을 나누어요.', ['좋은 행동', '아쉬운 행동'], [['연기 쪽 창문 닫기', '어른께 말하기', '다른 방으로 가기'], ['그대로 있기', '연기 쪽 창문 열기', '모른 척하기']], [[0, 2], [1, 2]], [['공기 바꿔 달라 부탁'], ['기침 꾹 참기']], 0.2),
            BOX('친구에게 할 말을 나누어요.', ['좋은 행동', '아쉬운 행동'], [['"저쪽으로 가자"', '"어른께 말하자"', '"코 가리고 비키자"'], ['"참으면 돼"', '"가서 구경하자"', '"저 사람 나빠"']], [[0, 2], [1, 2]], [['"맑은 데서 놀자"'], ['"괜찮아, 여기 있자"']], 0.25, { conclude: '연기가 오면 자리를 옮기고, 창문을 닫고, 어른께 알려요. 사람을 탓하지 않고 연기를 피해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '담배 연기가 날아올 때 좋은 행동은?', options: ['자리를 옮겨요', '그냥 참아요', '연기 쪽에 앉아요'], answer: '자리를 옮겨요' }] },
      }),
      C({
        id: 'health.e34.secondhand-smoke.wrap.smoke-check', type: 'wrap', title: '간접흡연 피하기 스스로 점검',
        method: '간접흡연 피하기 점검', tool: 'kitchen', minutes: 8,
        levels: { easy: '점검 칸 2개(자리 옮기기·어른께 알리기)에 해 볼 것을 표시한다.', base: '점검 칸 4개(공손한 부탁·바람 반대쪽 더함)에 표시한다.', challenge: '점검 칸 5개에 표시하고, 가족과 나눌 말 한 줄을 활동지에 쓴다.' },
        wrap: {
          teacher: '"오늘 배운 연기 피하기 가운데 해 볼 것에 표시해 볼까요?" 칸을 하나씩 읽어 주고 스스로 표시하게 한다. 다 표시하지 않아도 되는 다짐이라고 말한다. 활동지의 "가족과 나눌 말"은 쓰고 싶은 학생만 쓰고, 집에서 누가 담배를 피우는지는 쓰지 않는다고 미리 알린다.',
          exitTicket: [
            KSELF('연기 피하기 다짐', ['연기 오면 자리 옮기기', '어른께 알리기', '공손하게 부탁하기', '바람 반대쪽 서기', '맑은 곳에서 놀기'], 2, 4),
            { type: 'choice', prompt: '담배 연기는 숨 쉬는 길 어디까지 들어갈까요?', options: ['폐까지', '코에서 멈춰요', '입에서 멈춰요'], answer: 0, difficulty: 0.15, explain: '연기는 공기처럼 코와 기관을 지나 폐까지 들어가요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '간접흡연 피하기',
          items: [
            { type: 'check', prompt: '연기를 피하는 행동에 표시해요.', options: ['자리 옮기기', '어른께 알리기', '연기 쪽에 앉기', '공손하게 부탁하기'] },
            { type: 'short', prompt: '연기를 피하는 방법 가운데 가족과 나누고 싶은 말을 한 줄 써요.' },
          ],
          easy: { note: '연기가 오면 자리를 옮겨요.', items: [{ type: 'choice', prompt: '담배 연기가 오면?', options: ['자리를 옮겨요', '그냥 있어요'], answer: '자리를 옮겨요' }] },
        },
      }),
      C({
        id: 'health.e34.secondhand-smoke.wrap.clean-air', type: 'wrap', title: '맑은 공기 안내판 꾸미기',
        method: '맑은 공기 안내판 꾸미기', tool: 'collage', minutes: 8,
        levels: { easy: '색종이 조각 2개 이상을 붙이고 점검 2칸에 표시한다.', base: '조각 3개 이상을 붙이고 판 아래 종이에 문구 하나를 쓴 뒤 점검 3칸에 표시한다.', challenge: '조각 5개 이상을 붙이고 점검 4칸에 표시한 뒤 짝 안내판의 좋은 점을 말한다(교사 진행).' },
        wrap: {
          teacher: '"우리 반이 지키고 싶은 맑은 공기를 안내판으로 꾸며 볼까요?" 나뭇잎(나무)·동그라미(해)·반원(바람) 조각으로 꾸미고, 문구는 판 아래 종이에 쓴다. "담배 피우는 사람 그림에 가위표"를 하려는 학생에게 "보는 사람이 무엇을 하면 되는지 알려 주는 안내판이면 더 좋겠지요?"라고 말한다. 안내판에는 이름을 쓰지 않는다.',
          exitTicket: [
            COL('색종이 조각으로 "맑은 공기" 안내판을 꾸며요.', ['맑은 공기 그림을 붙였어요', '문구를 하나 썼어요', '보는 사람을 생각했어요', '짝 안내판을 보았어요'], 2, 3, 5, { shapes: ['leaf', 'circle', 'semi', 'star', 'heart', 'rect'] }),
            { type: 'choice', prompt: '맑은 공기 안내판에 알맞은 문구는?', options: ['"연기 없는 곳에서 놀아요"', '"담배 피우는 사람 미워"', '"숨 참고 다녀요"'], answer: 0, difficulty: 0.1, explain: '안내판은 사람을 탓하지 않고 할 일을 알려 줘요.' },
          ],
        },
        worksheet: {
          title: '맑은 공기 안내판',
          items: [
            { type: 'draw', prompt: '맑은 공기를 지키는 안내판을 그려요.' },
            { type: 'short', prompt: '안내판에 쓸 문구를 한 줄로 써요.' },
          ],
          easy: { note: '나무·해·바람을 그려요.', items: [{ type: 'choice', prompt: '안내판에 그릴 것은?', options: ['맑은 하늘과 나무', '무서운 얼굴'], answer: '맑은 하늘과 나무' }] },
        },
        notes: '색종이 판에는 글자를 붙일 수 없어 문구는 판 아래 종이에 쓴다.',
      }),
    );
  }

  PaperLessons.registerModules(M);
})();
