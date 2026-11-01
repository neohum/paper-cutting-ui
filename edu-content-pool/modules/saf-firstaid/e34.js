/* 창체 안전교육 응급처치 — 초3-4 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/safety-b.json 의 saf-firstaid 초3-4.
 * 근거: 「학교안전교육 실시 기준 등에 관한 고시」(교육부고시 제2023-33호) 별표 2 초등학교 응급처치
 *   (1 응급처치의 상황·의미·중요성·신고·조치 / 2 심폐소생술·자동제세동기 사용법 / 3 상처의 종류와 응급처치 / 4 일상생활 속 응급처치).
 *   근거 파일에는 항목 제목만 있고 처치 순서·수치는 없다. 수치(압박 깊이·빠르기)는 학생 화면에 쓰지 않는다.
 * 심폐소생술 차례·문구는 all_market 시뮬레이션 templates/lesson-materials/visual-series/src/cpr-aed/story.md 와 맞춘다
 *   (주변 안전 → 어깨 두드리며 반응 확인 → 사람을 콕 집어 119 신고·AED 부탁 → 호흡 확인 → 가슴 정중앙 압박, AED 분석 중엔 아무도 닿지 않기).
 * 초3-4 기준: 상황 판단(그림+짧은 글), 차례 정하기, 고른 이유 말하기, 짝 토의. 부상·피 묘사 없이 글과 반창고·구급함 그림만 쓴다.
 * 장면·인물은 직접 지은 가상의 것이다. 다친 경험은 묻지 않는다.
 * 주제 2개(3학년 1 · 4학년 1) × 도입 2 · 활동 4 · 정리 2 = 계획 모듈 16개.
 *
 * 사람 확인: (근거 파일에 없는 수칙 — 질병관리청·소방청·대한적십자사 응급처치 안내에서 확인)
 *  - wound-types 전체: 상처 세 가지(긁힌 상처·베인 상처·멍)와 돌봄 — 긁힌 상처는 흐르는 물로 씻고 깨끗이 덮기 / 베인 상처는
 *    깨끗한 천·거즈로 꾹 누르고 어른께 바로 알리기 / 멍은 차가운 수건을 대고 문지르지 않기 / 연고를 듬뿍 바르지 않기 / 침을 바르지 않기.
 *  - wound-types.activity.care-order: 차례 '손 씻기 → 깨끗한 천으로 누르기 → 씻기 → 덮기'(체계도 계획 문구 그대로), 도전 단계 '어른께 알리기'를
 *    맨 앞에 둔 것, 긁힌 상처 차례(손 씻기 → 흐르는 물로 씻기 → 물기 닦기 → 밴드 붙이기), 멍 차례(멈추기 → 찬 수건 대기 → 쉬기 → 알리기).
 *  - wound-types.activity.pair-cover·wrap.first-aid-box: 처치 전 손 씻기·일회용 장갑, 구급함 기본 물품(거즈·밴드·소독용품·일회용 장갑·찬 물수건) — 보건 선생님 확인.
 *  - wound-types.activity.field-dilemma: 공에 맞아 파래진 곳은 쉬면서 찬 수건을 댄다 / 뜨거운 물 찜질을 하지 않는다.
 *  - collapse-aed 전체: story.md 와 같은 차례·문구(위 줄). 어린이가 할 수 있는 일(외치기·119 전화·AED 가져오기·상담요원 안내 따르기) — 소방청·질병관리청.
 *  - collapse-aed.activity.hand-spot: 가슴 압박 자리 '가슴 정중앙', AED 패드는 맨가슴에 그림대로 붙임 — 2025년 한국 심폐소생술 가이드라인(질병관리청·대한심폐소생협회).
 *    압박 깊이·빠르기 수치는 교사 메모에만 둔다(story.md: 깊이 약 5 cm, 분당 100~120회 — 성인 기준).
 *  - collapse-aed.activity.aed-place: AED를 '먼저 찾아볼 곳'(큰 기차역·공항·경기장·큰 아파트 단지·학교) — 응급의료에 관한 법률 설치 대상, 중앙응급의료센터(E-gen) AED 찾기.
 *  - 이름: 체계도 concepts 대로 '자동제세동기(AED)'를 쓴다(공식 새 이름 '자동심장충격기' 여부 확인).
 */
(function () {
  const BASE = { schema: 'edu-module.v1', domain: 'saf-firstaid', band: '초3-4' };
  const T = (topic, grade) => (o) => Object.assign({}, BASE, { topic: `saf-firstaid.e34.${topic}`, grades: [grade] }, o);
  const M = [];
  const strip = (p) => String(p).replace(/[.?!]$/, '');
  const mix = (gs) => { const out = []; const n = Math.max(...gs.map((g) => g.length)); for (let i = 0; i < n; i++) for (const g of gs) if (g[i] != null) out.push(g[i]); return out; };
  const count = (gs) => gs.reduce((a, g) => a + g.length, 0);
  const tg = (sl, gs) => ({ sort: Object.fromEntries(sl.map((s, i) => [s, gs[i]])) });

  // 나누기(sortboard·mindmap): 쉬움 = ez 칸만(앞 n장), 도전 = 칸마다 hard 카드 + 어느 칸에도 안 맞는 traps
  const SORTX = (tool, prompt, base, slots, groups, ez, hard, traps, d, more) => {
    const eSlots = ez.map(([i]) => slots[i]); const eGroups = ez.map(([i, n]) => groups[i].slice(0, n));
    const hGroups = groups.map((g, i) => g.concat(hard[i] || []));
    const extra = mix(hard.map((h) => h || [])).concat(traps || []);
    const p = strip(prompt);
    return {
      prompt, toolOptions: Object.assign({}, base, { slots, cards: mix(groups) }), target: tg(slots, groups), difficulty: d,
      levels: {
        easy: { prompt: `${p}(${count(eGroups)}장).`, toolOptions: { slots: eSlots, cards: mix(eGroups) }, target: tg(eSlots, eGroups) },
        challenge: { prompt: `${p}(${count(hGroups) + (traps || []).length}장).`, toolOptions: tool === 'sortboard' ? { more: extra } : { cards: mix(groups).concat(extra) }, target: tg(slots, hGroups) },
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

  // 차례 놓기(kitchen order): 기본 4장, 쉬움 = drop 번째를 뺀 3장, 도전 = 맨 앞에 lead 카드가 더해진 5장
  const SL = { 3: ['처음', '다음', '끝'], 4: ['처음', '다음', '그다음', '끝'], 5: ['처음', '둘째', '셋째', '넷째', '끝'] };
  const ORD = (prompt, steps, drop, lead, d, more) => {
    const ids = steps.map((c) => c.id);
    const easy = steps.filter((_, i) => i !== drop);
    const p = strip(prompt);
    return {
      prompt, toolOptions: { mode: 'order', autoMotif: false, slots: SL[4], cards: steps.slice().reverse() }, target: { order: ids }, difficulty: d,
      levels: {
        easy: { prompt: `${p}(3장).`, toolOptions: { slots: SL[3], cards: easy.slice().reverse() }, target: { order: easy.map((c) => c.id) } },
        challenge: { prompt: `${p}. 어른께 알리기 자리도 정해요.`, toolOptions: { slots: SL[5], cards: [steps[2], steps[0], lead, steps[3], steps[1]] }, target: { order: [lead.id].concat(ids) } },
      },
      ...more,
    };
  };
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  const WOUNDS = ['긁힌 상처', '베인 상처', '멍'];

  // ======================================================================================================
  // 3학년 · 상처의 종류와 돌보는 차례 (별표 2 초등 응급처치 3)
  // ======================================================================================================
  {
    const C = T('wound-types', 3);
    M.push(
      C({
        id: 'saf-firstaid.e34.wound-types.intro.wound-sort', type: 'intro', title: '상처 카드를 종류별로',
        method: '상처 그림을 종류별로 나누기', tool: 'sortboard', minutes: 5,
        levels: { easy: '시연 첫 단계(긁힌 상처·베인 상처 두 바구니, 카드 4장)만 함께 본다.', base: '세 바구니에 카드 6장이 나뉘는 시연을 끝까지 본다.', challenge: '시연을 본 뒤 무엇을 보고 나눴는지 기준을 짝에게 말한다.' },
        intro: {
          teacher: '"넘어져 까진 것, 종이에 베인 것, 부딪혀 파래진 것 — 다 같은 상처일까요?" 시연 단추로 상황 카드가 긁힌 상처·베인 상처·멍 바구니에 나뉘는 것을 보인다. "상처는 다 똑같이 밴드 붙이면 돼요"라는 말이 나오면 "부딪혀 파래진 곳에 밴드를 붙이면 나아질까요?"라고 되묻는다. 상처마다 돌보는 방법이 다르다는 것을 오늘 배운다고 밝힌다.',
          student: '상처가 생긴 상황 카드를 보고 긁힌 상처·베인 상처·멍 가운데 무엇인지 말해 보아요.',
          demo: {
            tool: 'sortboard',
            options: { slots: WOUNDS, cards: [{ id: 'knee', text: '넘어져 무릎이 까짐' }, { id: 'paper', text: '종이에 손끝이 베임' }, { id: 'ball', text: '공에 맞아 파래짐' }, { id: 'wall', text: '벽에 팔꿈치 긁힘' }, { id: 'scissor', text: '가위 날에 살짝 베임' }, { id: 'desk', text: '책상에 부딪혀 파래짐' }], shuffle: false },
            sequence: [{ sort: { '긁힌 상처': ['knee', 'wall'], '베인 상처': ['paper', 'scissor'] } }, { sort: { '긁힌 상처': ['knee', 'wall'], '베인 상처': ['paper', 'scissor'], 멍: ['ball', 'desk'] } }],
          },
          art: { draw: 'a paper first aid kit opened on a desk with paper bandages, gauze and a cold towel, three paper baskets on a shelf, no wounds shown', banner: '상처마다 돌봄이 달라요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '"다친 적 있나요?"처럼 겪은 일을 묻지 않는다. 상처 그림은 보이지 않고 상황 글과 구급함 그림만 쓴다.',
      }),
      C({
        id: 'saf-firstaid.e34.wound-types.intro.body-where', type: 'intro', title: '상처가 잘 나는 몸의 곳',
        method: '상처가 잘 나는 곳과 상황 고르기', tool: 'body', minutes: 5,
        levels: { easy: '체육 시간에 다치기 쉬운 무릎·팔꿈치 두 곳이 짚이는 것을 함께 본다.', base: '무릎·팔꿈치에 손목·발목까지 네 곳이 짚이는 것을 보고 상황을 듣는다.', challenge: '네 곳을 본 뒤 상황마다 조심할 행동을 짝에게 말한다.' },
        intro: {
          teacher: '"체육 시간에 넘어지면 몸의 어디가 먼저 바닥에 닿을까요? 미술 시간에 가위를 쓰면요?" 시연 단추로 종이 몸에서 무릎·팔꿈치, 이어서 손목·발목이 짚이는 것을 보인다. 종이 몸에는 손·손가락 칸이 없으니 미술 시간 이야기에서는 학생이 자기 손끝을 짚게 한다. "다치는 곳은 정해져 있지 않아요"라는 말이 나오면 "맞아요, 그래도 자주 닿는 곳을 알면 무엇을 미리 할 수 있을까요?"라고 묻는다.',
          student: '체육·미술 시간에 상처가 나기 쉬운 몸의 곳을 찾아 손으로 짚어 보아요.',
          demo: { tool: 'body', options: { mode: 'parts', parts: ['목', '어깨', '팔꿈치', '손목', '무릎', '발목'], names: true }, sequence: [{ parts: ['무릎', '팔꿈치'] }, { parts: ['무릎', '팔꿈치', '손목', '발목'] }] },
          art: { draw: 'a paper body figure in a gym uniform with small paper bandage stickers placed on the knee and elbow, a pair of safety scissors nearby', banner: '자주 닿는 곳을 알아요', extra: [{ motif: 'leaf', x: 300, y: 96 }] },
        },
        notes: '종이 몸 교구에 손·손가락 칸이 없어 손목으로 대신하고, 손끝은 학생이 자기 몸을 짚게 한다.',
      }),
      C({
        id: 'saf-firstaid.e34.wound-types.activity.care-match', type: 'activity', title: '상처 종류와 돌봄 잇기',
        method: '상처 종류와 돌봄 잇기', tool: 'mindmap', minutes: 14,
        levels: { easy: '가지 2개(긁힌 상처·베인 상처)에 카드 4장, 놓으면 바로 맞는지 알려 준다.', base: '가지 3개에 카드 6장을 나눈 뒤 확인한다.', challenge: '가지 3개에 카드 3장이 더해지고, 하면 안 되는 일 카드 한 장은 어느 가지에도 넣지 않고 뺀다.' },
        activity: {
          title: '상처 종류와 돌봄 잇기', tool: 'mindmap',
          teacher: '"긁힌 상처에는 무엇이 가장 먼저 필요할까요? 베인 상처는요?" 카드를 놓을 때마다 "○○ 상처에는 ○○을 해요." 틀로 말하게 한다. 도전 단계의 "연고 듬뿍 바르기"를 가지에 넣으려는 학생에게 "많이 바를수록 좋을까요? 연고는 언제, 누구와 바를까요?"라고 묻는다. 멍에 "세게 문지르기"를 넣는 학생에게 "문지르면 더 아프지 않을까요? 차갑게 하면 어떨까요?"라고 되묻는다.',
          task: '돌봄 카드를 긁힌 상처·베인 상처·멍 가지에 나누어 넣어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTX('mindmap', '상처마다 하는 돌봄을 가지에 넣어요.', { topic: '상처' }, WOUNDS, [['흐르는 물로 씻기', '깨끗이 덮기'], ['깨끗한 천으로 누르기', '어른께 바로 알리기'], ['차가운 수건 대기', '문지르지 않기']], [[0, 2], [1, 2]], [['흙 털고 씻기'], ['누른 채 기다리기'], ['쉬면서 지켜보기']], ['연고 듬뿍 바르기'], 0.15),
            SORTX('mindmap', '돌보는 까닭을 가지에 넣어요.', { topic: '돌보는 까닭' }, WOUNDS, [['흙을 씻어 내려고', '덧나지 않게 덮으려고'], ['눌러서 멈추려고', '어른이 살펴보게'], ['덜 붓게 하려고', '더 아프지 않게']], [[0, 2], [1, 2]], [['세균이 덜 들게'], ['깊은지 보려고'], ['차갑게 식히려고']], ['침 바르면 나아서'], 0.2),
            SORTX('mindmap', '필요한 물건을 가지에 넣어요.', { topic: '필요한 물건' }, WOUNDS, [['흐르는 물', '밴드'], ['깨끗한 거즈', '일회용 장갑'], ['찬 물수건', '수건에 싼 얼음']], [[0, 2], [1, 2]], [['깨끗한 수건'], ['보건실 선생님'], ['차가운 팩']], ['흙 묻은 손수건'], 0.25, { conclude: '긁힌 상처는 씻고 덮고, 베인 상처는 누르고 알리고, 멍은 차갑게 하고 문지르지 않아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '상처에 맞는 돌봄을 써요.', columns: ['상처', '돌봄'], cells: [['긁힌 상처', ''], ['베인 상처', ''], ['멍', '']], answer: '흐르는 물로 씻기, 깨끗한 천으로 누르기, 차가운 수건 대기' }] },
      }),
      C({
        id: 'saf-firstaid.e34.wound-types.activity.care-order', type: 'activity', title: '상처 돌보는 차례 놓기',
        method: '베인 상처 돌보는 차례 4장', tool: 'kitchen', minutes: 14,
        levels: { easy: '카드 3장을 차례대로 놓고, 놓으면 바로 맞는지 알려 준다.', base: '카드 4장을 차례대로 놓은 뒤 확인한다.', challenge: '카드 4장에 "어른께 알리기"가 더해진 5장에서 그 카드가 들어갈 자리까지 정한다.' },
        activity: {
          title: '상처 돌보는 차례 놓기', tool: 'kitchen',
          teacher: '"상처를 돌보기 전에 내 손은 어떻게 해야 할까요?" 카드를 다 놓으면 모둠이 차례대로 동작으로 따라 한다(손 씻기 → 누르기 → 씻기 → 덮기). 도전 단계에서 "어른께 알리기"를 맨 끝에 두는 학생에게 "다 끝내고 알리면 어른은 언제 상처를 볼 수 있을까요?"라고 묻고, 먼저 알리고 함께 돌본다는 점을 짚는다.',
          task: '상처 돌보는 카드를 하는 차례대로 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORD('베인 상처를 돌보는 차례로 놓아요.', [{ id: 'hand', text: '내 손 씻기' }, { id: 'press', text: '깨끗한 천으로 누르기' }, { id: 'wash', text: '상처 씻기' }, { id: 'cover', text: '거즈로 덮기' }], 2, { id: 'tell', text: '어른께 알리기' }, 0.15),
            ORD('긁힌 상처를 돌보는 차례로 놓아요.', [{ id: 'hand2', text: '내 손 씻기' }, { id: 'rinse', text: '흐르는 물로 씻기' }, { id: 'dry', text: '물기 살살 닦기' }, { id: 'band', text: '밴드 붙이기' }], 2, { id: 'tell2', text: '어른께 알리기' }, 0.2),
            ORD('멍이 들었을 때 차례로 놓아요.', [{ id: 'halt', text: '하던 운동 멈추기' }, { id: 'cold', text: '찬 수건 대기' }, { id: 'rest', text: '앉아서 쉬기' }, { id: 'watch', text: '아픈지 지켜보기' }], 3, { id: 'tell3', text: '어른께 알리기' }, 0.25, { conclude: '먼저 어른께 알리고, 손을 씻고, 상처에 맞는 차례로 돌봐요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '베인 상처 돌보는 차례에 번호를 써요.', columns: ['할 일', '차례'], cells: [['거즈로 덮기', ''], ['내 손 씻기', ''], ['깨끗한 천으로 누르기', ''], ['상처 씻기', '']], answer: '4, 1, 2, 3' }] },
        notes: '차례 카드는 체계도 계획 문구를 따랐다. 실제 차례는 보건 선생님과 확인한다(파일 첫머리 사람 확인).',
      }),
      C({
        id: 'saf-firstaid.e34.wound-types.activity.field-dilemma', type: 'activity', title: '갈림길: 친구가 다쳤을 때',
        method: '운동장 상처 상황 갈림길', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '갈림 2번, 보기 3개씩 고르며 결과를 따라간다.', challenge: '갈림 2번을 지난 뒤 근거 카드 3장 가운데 알맞은 것을 고른다.' },
        activity: {
          title: '갈림길: 친구가 다쳤을 때', tool: 'dilemma',
          teacher: '"친구가 다치면 우리는 무엇부터 해야 할까요? 그 선택 뒤에 친구는 어떻게 될까요?" 보기를 고를 때마다 결과를 소리 내어 읽고, 친구에게 도움이 되었는지 짝과 말하게 한다. "침 바르면 나아요"를 고른 학생을 나무라지 않고 "집에서 그렇게 들었을 수 있어요. 침에는 무엇이 있을까요? 깨끗한 물과 견주면요?"라고 되묻는다.',
          task: '장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('운동장에서 친구 손바닥이 까졌어요.', {
              text: '운동장에서 친구가 넘어져 손바닥이 까졌어요. 흙이 묻었어요.', motif: 'sun',
              choices: [
                { id: 'play', text: '흙 묻은 채 계속 논다', result: '손바닥에 흙이 그대로 남았어요.', impact: [{ who: '친구', text: '덧날 수 있어요', tone: -1 }] },
                { id: 'wash', text: '수돗가에서 씻자고 한다', result: '흐르는 물로 흙을 씻어 냈어요.', ending: '흙을 씻어 상처를 깨끗하게 했어요.', next: {
                  text: '친구가 "괜찮아, 침 바르면 돼"라고 해요.', choices: [
                    { id: 'tell', text: '선생님께 같이 간다', result: '보건실에서 깨끗이 덮어 주셨어요.', impact: [{ who: '친구', text: '잘 돌봄을 받았어요', tone: 1 }], ending: '씻고 어른께 알려 친구를 도왔어요.' },
                    { id: 'spit', text: '침을 바른다', result: '상처가 다시 더러워졌어요.', impact: [{ who: '친구', text: '덧날 수 있어요', tone: -1 }] },
                    { id: 'rub', text: '옷으로 문지른다', result: '친구가 더 아파했어요.', impact: [{ who: '친구', text: '더 아파요', tone: -1 }] },
                  ] } },
                { id: 'hide', text: '아무에게도 말 안 한다', result: '아무도 상처를 돌보지 못했어요.', impact: [{ who: '친구', text: '덧날 수 있어요', tone: -1 }] },
              ] }, [['wash', 'tell']],
            [{ id: 'clean', text: '흙을 씻어야 덧나지 않아서' }, { id: 'adult', text: '어른이 살펴보면 안전해서' }, { id: 'spit', text: '침이 약이라서', why: '침에는 세균이 있어요. 깨끗한 물로 씻어요.' }], ['clean', 'adult'], 0.2),
            DIL('미술 시간에 짝 손끝이 베였어요.', {
              text: '미술 시간에 짝이 두꺼운 종이를 자르다 손끝을 베였어요.', motif: 'star',
              choices: [
                { id: 'ignore', text: '못 본 척 계속 그린다', result: '짝이 혼자 어쩔 줄 몰라 했어요.', impact: [{ who: '짝', text: '도움을 못 받아요', tone: -1 }] },
                { id: 'press', text: '깨끗한 휴지로 누르게 한다', result: '짝이 손끝을 꾹 눌렀어요.', ending: '깨끗한 것으로 누르게 해 짝을 도왔어요.', next: {
                  text: '선생님이 오고 계세요. 짝이 무서워해요.', choices: [
                    { id: 'calm', text: '"괜찮아" 곁에 있어 준다', result: '짝이 숨을 고르고 선생님을 기다렸어요.', impact: [{ who: '짝', text: '마음이 놓였어요', tone: 1 }], ending: '누르고 알리고, 곁에 있어 주었어요.' },
                    { id: 'tease', text: '"겁쟁이" 하고 놀린다', result: '짝이 더 울먹였어요.', impact: [{ who: '짝', text: '마음이 다쳤어요', tone: -1 }] },
                    { id: 'peek', text: '손을 당겨 들여다본다', result: '누르던 손이 떨어졌어요.', impact: [{ who: '짝', text: '더 아파요', tone: -1 }] },
                  ] } },
                { id: 'tape', text: '테이프를 붙여 준다', result: '테이프는 상처에 맞지 않았어요.', impact: [{ who: '짝', text: '덧날 수 있어요', tone: -1 }] },
              ] }, [['press', 'calm']],
            [{ id: 'press', text: '누르면 멈추는 데 도움이 되어서' }, { id: 'heart', text: '곁에 있으면 덜 무서워서' }, { id: 'look', text: '상처를 봐야 재미있어서', why: '구경하면 짝이 더 무섭고 아파요.' }], ['press', 'heart'], 0.25),
            DIL('피구 공에 맞은 팔이 파래졌어요.', {
              text: '피구를 하다 친구 팔이 공에 맞아 파랗게 되었어요.', motif: 'cloud',
              choices: [
                { id: 'rub', text: '세게 문질러 준다', result: '친구가 "아야!" 하고 팔을 뺐어요.', impact: [{ who: '친구', text: '더 아파요', tone: -1 }] },
                { id: 'cold', text: '알리고 찬 수건을 대자', result: '선생님이 찬 수건을 주셨어요.', ending: '알리고 차갑게 해 멍을 돌봤어요.', next: {
                  text: '찬 수건을 대고 있는데 친구가 바로 다시 경기하고 싶대요.', choices: [
                    { id: 'rest', text: '쉬면서 선생님을 기다리자', result: '선생님이 살펴보고 쉬게 하셨어요.', impact: [{ who: '친구', text: '덜 아파요', tone: 1 }], ending: '차갑게 하고 쉬어서 멍을 잘 돌봤어요.' },
                    { id: 'go', text: '바로 같이 뛴다', result: '팔이 또 부딪힐 뻔했어요.', impact: [{ who: '친구', text: '더 아플 수 있어요', tone: -1 }] },
                    { id: 'hot', text: '뜨거운 물을 대 보자', result: '파래진 곳이 더 부었어요.', impact: [{ who: '친구', text: '더 부어요', tone: -1 }] },
                  ] } },
                { id: 'cream', text: '연고를 듬뿍 바른다', result: '끈적이기만 하고 나아지지 않았어요.', impact: [{ who: '친구', text: '그대로예요', tone: 0 }] },
              ] }, [['cold', 'rest']],
            [{ id: 'swell', text: '차갑게 하면 덜 부어서' }, { id: 'rest', text: '쉬어야 더 다치지 않아서' }, { id: 'more', text: '연고는 많을수록 좋아서', why: '연고는 많이 바른다고 더 좋아지지 않아요.' }], ['swell', 'rest'], 0.3, { conclude: '친구가 다치면 어른께 알리고, 상처에 맞게 씻고·누르고·차갑게 하고, 곁에 있어 주어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '흙이 묻은 상처는 흐르는 ___로 씻어요.', answer: '물' }] },
      }),
      C({
        id: 'saf-firstaid.e34.wound-types.activity.pair-cover', type: 'activity', title: '짝과 상처 덮기 연습',
        method: '짝과 상처 덮기 실습', tool: 'timer', minutes: 14,
        levels: { easy: '안전 점검 뒤 선생님 시범을 보며 덮기 차례 3장을 맞추고 따라 한다.', base: '안전 점검, 덮기 차례 4장을 맞추고 짝과 번갈아 해 본다.', challenge: '4장을 맞춘 뒤 차례를 짝에게 말로 설명하며 해 보고 표시한다.' },
        activity: {
          title: '짝과 상처 덮기 연습', tool: 'timer',
          teacher: '"상처를 덮기 전에 내 손과 친구를 지키려면 무엇을 할까요?" 손 씻기와 일회용 장갑 점검을 먼저 하고, 짝의 팔에 붙인 상처 그림 스티커를 깨끗한 거즈로 누르고 덮는 동작을 번갈아 한다. 장갑 없이 바로 거즈를 대려는 학생에게 "내 손에 묻은 것이 친구 상처로 가면 어떻게 될까요?"라고 묻는다. 연습에서도 친구 팔을 세게 누르지 않는다고 미리 약속한다.',
          task: '안전 점검을 하고, 덮기 차례를 맞춘 뒤 짝과 연습해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '연습 전에 안전 점검에 모두 표시해요.', toolOptions: { title: '연습 전 점검', safety: ['손을 씻었어요', '장갑을 꼈어요', '세게 누르지 않기로 했어요'] }, target: { safety: true }, difficulty: 0.1 },
            { prompt: '상처 그림을 덮는 차례대로 놓아요.', toolOptions: { title: '덮기 차례', cards: ['밴드로 고정하기', '거즈 꺼내기', '거즈로 덮기', '살짝 누르기'] }, target: { order: ['거즈 꺼내기', '살짝 누르기', '거즈로 덮기', '밴드로 고정하기'] }, difficulty: 0.2,
              levels: { easy: { prompt: '상처 그림을 덮는 차례대로 3장을 놓아요.', toolOptions: { cards: ['밴드로 고정하기', '거즈 꺼내기', '거즈로 덮기'] }, target: { order: ['거즈 꺼내기', '거즈로 덮기', '밴드로 고정하기'] } } } },
            { prompt: '짝과 번갈아 덮기를 해 보아요.', free: true, toolOptions: { title: '짝 연습', doneLabel: '짝과 번갈아 해 보았어요' },
              levels: { easy: { prompt: '선생님 시범을 보며 덮기를 따라 해요.', toolOptions: { doneLabel: '시범을 따라 해 보았어요' } }, challenge: { prompt: '차례를 짝에게 말하며 덮기를 해요.', toolOptions: { doneLabel: '차례를 말하며 해 보았어요' } } },
              conclude: '손을 씻고 장갑을 낀 뒤, 깨끗한 거즈로 누르고 덮어요.' },
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '연습에서 내가 한 것에 표시해요.', options: ['손을 씻었어요', '장갑을 꼈어요', '거즈로 덮었어요'] }] },
        notes: '상처 그림 스티커는 반창고 그림처럼 단순한 것을 쓴다(상처 모양을 그리지 않는다). 일회용 장갑은 보건실에서 받는다.',
      }),
      C({
        id: 'saf-firstaid.e34.wound-types.wrap.kind-words', type: 'wrap', title: '다친 친구에게 할 말',
        method: '다친 친구에게 할 말 고르기', tool: 'emotion', minutes: 8,
        levels: { easy: '보기 2개 가운데 도움이 되는 말을 고른다.', base: '보기 3개 가운데 도움이 되는 말을 고른다.', challenge: '보기 3개에서 고른 뒤, 내가 지어낸 도움 말 하나를 출구 3번에 쓴다.' },
        wrap: {
          teacher: '"친구가 다쳤을 때 어떤 말을 들으면 마음이 놓일까요?" 보기를 고르고 결과를 읽은 뒤 두세 명에게 까닭을 듣는다. "네가 뛰어서 그래"를 고른 학생에게 "맞는 말일 수도 있지만, 지금 아픈 친구에게 그 말이 도움이 될까요? 다음에 말해 주면 어떨까요?"라고 묻는다. 돌봄은 손으로도, 말로도 한다는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'emotion', options: { mode: 'branch', situation: '짝이 넘어져 무릎이 까졌어요. 울먹이고 있어요.', feeling: '걱정', choices: [{ id: 'help', text: '"괜찮아? 같이 가자"', result: '짝이 고개를 끄덕이며 일어났어요.', mood: '고마움' }, { id: 'tease', text: '"울보래요!"', result: '짝이 더 속상해했어요.', mood: '속상함' }, { id: 'blame', text: '"네가 뛰어서 그래"', result: '짝이 고개를 푹 숙였어요.', mood: '속상함' }] }, prompt: '짝에게 도움이 되는 말을 골라요.', target: { choice: 'help' }, difficulty: 0.15,
              levels: { easy: { toolOptions: { choices: [{ id: 'help', text: '"괜찮아? 같이 가자"', result: '짝이 고개를 끄덕이며 일어났어요.', mood: '고마움' }, { id: 'tease', text: '"울보래요!"', result: '짝이 더 속상해했어요.', mood: '속상함' }] } } } },
            { type: 'choice', prompt: '긁힌 상처에 흙이 묻었을 때 먼저 할 일은?', options: ['침을 발라요', '흐르는 물로 씻어요', '연고를 듬뿍 발라요'], answer: 1, difficulty: 0.1, explain: '흙은 흐르는 물로 씻어 내고, 어른께 알려요.' },
            { type: 'short', prompt: '다친 친구에게 해 줄 말을 하나 지어 써요.' },
          ],
        },
        worksheet: {
          title: '다친 친구를 돕는 말',
          items: [
            { type: 'choice', prompt: '멍이 든 친구에게 해 줄 것은?', options: ['세게 문질러 줘요', '찬 수건을 갖다줘요', '놀려요'], answer: '찬 수건을 갖다줘요' },
            { type: 'short', prompt: '다친 친구에게 해 줄 말을 한 줄로 써요.' },
          ],
          easy: { note: '"괜찮아?"로 시작해 보아요.', items: [{ type: 'choice', prompt: '도움이 되는 말은?', options: ['"괜찮아?"', '"울보래요"'], answer: '"괜찮아?"' }] },
        },
      }),
      C({
        id: 'saf-firstaid.e34.wound-types.wrap.first-aid-box', type: 'wrap', title: '우리 반 구급함 점검',
        method: '우리 반 구급함 점검하기', tool: 'kitchen', minutes: 8,
        levels: { easy: '구급함 물품 3칸 가운데 있는 것에 표시한다.', base: '구급함 물품 5칸 가운데 있는 것에 표시하고 빠진 것을 고른다.', challenge: '5칸에 표시하고 빠진 것을 담임 선생님께 알릴 말을 출구 3번에 쓴다.' },
        wrap: {
          teacher: '"우리 반 구급함을 열어 볼까요? 오늘 배운 돌봄에 필요한 것이 다 있나요?" 모둠마다 구급함을 실제로 열어 보고 있는 물품에 표시하게 한다. 약을 꺼내 보려는 학생에게 "약은 어른과 함께 써요. 우리는 무엇이 있는지만 봐요."라고 말한다. 빠진 물품은 고쳐 놓을 사람(담임 선생님)에게 알리는 것까지가 점검이라는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '우리 반 구급함', items: [{ id: 'gauze', text: '깨끗한 거즈' }, { id: 'band', text: '밴드' }, { id: 'glove', text: '일회용 장갑' }, { id: 'clean', text: '소독용품' }, { id: 'towel', text: '찬 물수건' }] }, prompt: '우리 반 구급함에 있는 것에 표시해요.', target: { selfCheck: true }, difficulty: 0.1,
              levels: { easy: { prompt: '우리 반 구급함에 있는 것에 표시해요(3칸).', toolOptions: { items: [{ id: 'gauze', text: '깨끗한 거즈' }, { id: 'band', text: '밴드' }, { id: 'glove', text: '일회용 장갑' }] } } } },
            { type: 'choice', prompt: '구급함에 장갑이 없으면 어떻게 할까요?', options: ['그냥 둬요', '담임 선생님께 알려요', '집에서 몰래 가져와요'], answer: 1, difficulty: 0.1, explain: '빠진 것은 담임 선생님께 알려 채워 놓아요.' },
            { type: 'short', prompt: '담임 선생님께 알릴 말을 한 줄로 써요.' },
          ],
        },
        worksheet: {
          title: '구급함 점검',
          items: [
            { type: 'check', prompt: '구급함에서 찾은 것에 표시해요.', options: ['거즈', '밴드', '일회용 장갑', '찬 물수건'] },
            { type: 'short', prompt: '우리 반 구급함에 더 있으면 좋을 것을 하나 써요.' },
          ],
        },
        notes: '구급함 물품은 학교 보건실 기준을 따른다. 약품(연고 등)은 학생이 꺼내 쓰지 않는다.',
      }),
    );
  }

  // ======================================================================================================
  // 4학년 · 쓰러진 사람을 보면: 반응 확인·119·AED (별표 2 초등 응급처치 1·2)
  // ======================================================================================================
  {
    const C = T('collapse-aed', 4);
    const SCHOOL = {
      title: '우리 학교 1층(가상 그림 지도)', grid: [6, 4],
      regions: [
        { name: '교실', cells: [[0, 0], [1, 0], [0, 1], [1, 1]] }, { name: '복도', cells: [[2, 0], [2, 1], [3, 1], [4, 1], [5, 1]] },
        { name: '보건실', cells: [[3, 0]] }, { name: '교무실', cells: [[4, 0], [5, 0]] }, { name: '중앙 현관', cells: [[2, 2], [3, 2]] },
        { name: '체육관', cells: [[4, 2], [5, 2], [4, 3], [5, 3]] }, { name: '운동장', cells: [[0, 2], [1, 2], [0, 3], [1, 3], [2, 3], [3, 3]] },
      ],
      places: [{ name: 'AED', icon: 'dot', at: [3, 2], legend: '자동제세동기(AED)' }],
    };
    const BODY = { mode: 'parts', parts: ['목', '어깨', '가슴', '배'] };
    M.push(
      C({
        id: 'saf-firstaid.e34.collapse-aed.intro.find-story', type: 'intro', title: '쓰러진 사람을 발견했어요',
        method: '쓰러진 사람을 발견한 장면 차례 놓기', tool: 'story', minutes: 5,
        levels: { easy: '시연에서 처음과 끝 두 장면만 짚으며 이야기한다.', base: '장면 3장이 차례로 놓이는 것을 보고 이야기를 듣는다.', challenge: '3장을 본 뒤 다음 장면에 내가 할 일을 짝에게 말한다.' },
        intro: {
          teacher: '"공원에서 산책하던 어른이 갑자기 쓰러졌어요. 다음에 무슨 일이 일어나야 할까요?" 시연 단추로 장면 3장이 차례로 놓이는 것을 보인 뒤 생각을 듣는다(기다릴 반응: "어른을 불러요", "119에 전화해요"). "어린이는 아무것도 할 수 없어요"라는 말이 나오면 "큰 소리로 어른을 부르는 것, 119에 전화하는 것은 누가 할 수 있을까요?"라고 되묻는다. 오늘은 쓰러진 사람을 보면 주변 안전 → 반응 확인 → 119·AED 부탁의 차례를 배운다고 밝힌다.',
          student: '쓰러진 사람을 발견한 장면을 차례대로 보고, 다음 장면에 내가 할 일을 생각해 보아요.',
          demo: { tool: 'story', options: { mode: 'order', slots: ['처음', '가운데', '끝'], cards: [{ id: 'see', text: '내가 보고 멈춤', motif: 'star' }, { id: 'fall', text: '갑자기 쓰러짐', motif: 'cloud' }, { id: 'walk', text: '공원에서 산책하는 어른', motif: 'tree' }], shuffle: false }, sequence: [{ order: ['walk', 'fall', 'see'] }] },
          art: { draw: 'a paper park with trees and a bench, a paper adult lying on the path, a paper child stopping and looking around carefully, no injuries shown', banner: '다음엔 무엇을 할까?', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
        },
        notes: '쓰러진 사람을 실제로 본 경험은 묻지 않는다. 그림 속 가상의 일로만 이야기한다.',
      }),
      C({
        id: 'saf-firstaid.e34.collapse-aed.intro.aed-map', type: 'intro', title: '학교 AED 위치 찾기',
        method: '학교 AED 위치 찾기', tool: 'map', minutes: 5,
        levels: { easy: 'AED 기호와 이름이 보이는 지도에서 핀이 꽂히는 것을 함께 본다.', base: '범례를 먼저 읽고 AED 기호를 찾은 뒤 핀이 꽂히는 것을 본다.', challenge: '핀을 본 뒤 우리 교실에서 가는 방향(동서남북)을 짝에게 말한다.' },
        intro: {
          teacher: '"쓰러진 사람에게 AED가 필요할 때, 우리 학교 AED는 어디에 있을까요?" 범례에서 AED 기호를 먼저 읽고, 시연 단추로 중앙 현관에 핀이 꽂히는 것을 보인다. "AED는 의사만 쓸 수 있어요"라는 말이 나오면 "AED는 켜면 말로 안내해 줘요. 우리는 가져오는 일부터 할 수 있어요."라고 말해 준다. "이 지도는 그림이에요. 쉬는 시간에 우리 학교 진짜 AED 자리를 함께 보러 가요."라고 말한다.',
          student: '학교 지도에서 AED 기호를 찾고, 우리 교실에서 어떻게 가는지 말해 보아요.',
          demo: { tool: 'map', options: SCHOOL, sequence: [{ pin: [3, 2] }] },
          art: { draw: 'a paper school building map with a small heart and lightning symbol box hanging on the wall near the main entrance', banner: '우리 학교 AED는 어디?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '수업 전에 우리 학교 AED 실제 위치를 보건 선생님께 확인한다. 방향 말하기는 교실 칠판 쪽을 북으로 정해 둔다.',
      }),
      C({
        id: 'saf-firstaid.e34.collapse-aed.activity.chain-roles', type: 'activity', title: '도움 차례 역할극',
        method: '도움 차례 역할극', tool: 'timer', minutes: 14,
        levels: { easy: '도움 차례 카드 2장을 맞추고 모둠 역할극을 한다.', base: '도움 차례 카드 3장을 맞추고 모둠 역할극을 한다.', challenge: '카드 3장을 맞춘 뒤 역할을 바꿔 역할극을 한 번 더 한다.' },
        activity: {
          title: '도움 차례 역할극', tool: 'timer',
          teacher: '"쓰러진 사람을 보면 가장 먼저 무엇을 할까요?" 차례 카드를 맞춘 뒤 모둠에서 발견하는 사람·부르는 사람·119에 거는 사람·AED 가져오는 사람 역할을 나눠 역할극을 한다. 역할극에서는 쓰러진 사람 역할의 몸을 누르거나 흔들지 않고 어깨를 가볍게 두드리는 시늉만 한다. "누가 하겠지"라며 아무도 부탁하지 않는 모둠에게 "여러 사람이 있을 때 누구에게 부탁해야 바로 움직일까요?"라고 묻고, 사람을 콕 집어 부탁한다는 것을 짚는다.',
          task: '도움 차례 카드를 맞추고 모둠 역할극을 해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '쓰러진 사람을 볼 때 할 일을 차례대로 놓아요.', toolOptions: { title: '도움 차례', cards: ['119·AED 부탁하기', '주변이 안전한지 보기', '어깨 두드려 반응 확인'] }, target: { order: ['주변이 안전한지 보기', '어깨 두드려 반응 확인', '119·AED 부탁하기'] }, difficulty: 0.15,
              levels: { easy: { prompt: '쓰러진 사람을 볼 때 할 일 2장을 차례대로 놓아요.', toolOptions: { cards: ['119·AED 부탁하기', '어깨 두드려 반응 확인'] }, target: { order: ['어깨 두드려 반응 확인', '119·AED 부탁하기'] } } } },
            { prompt: '도움을 부탁할 때 차례대로 놓아요.', toolOptions: { title: '부탁하는 차례', cards: ['"119에 신고해 주세요"', '"도와주세요!" 외치기', '다가온 어른 콕 집기'] }, target: { order: ['"도와주세요!" 외치기', '다가온 어른 콕 집기', '"119에 신고해 주세요"'] }, difficulty: 0.2,
              levels: { easy: { prompt: '도움을 부탁할 때 2장을 차례대로 놓아요.', toolOptions: { cards: ['"119에 신고해 주세요"', '다가온 어른 콕 집기'] }, target: { order: ['다가온 어른 콕 집기', '"119에 신고해 주세요"'] } } } },
            { prompt: '모둠에서 역할을 나누어 역할극을 해요.', free: true, toolOptions: { title: '모둠 역할극', doneLabel: '모둠 역할극을 해 보았어요' },
              levels: { challenge: { prompt: '역할을 바꿔 역할극을 한 번 더 해요.', toolOptions: { doneLabel: '역할을 바꿔 한 번 더 했어요' } } },
              conclude: '주변이 안전한지 보고, 어깨를 두드리며 반응을 확인하고, 사람을 콕 집어 119와 AED를 부탁해요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '도움 차례에 번호를 써요.', columns: ['할 일', '차례'], cells: [['119·AED 부탁하기', ''], ['주변이 안전한지 보기', ''], ['어깨 두드려 반응 확인', '']], answer: '3, 1, 2' }] },
        notes: '역할극에서 실제로 119에 전화하지 않는다. 쓰러진 사람 역할은 교사가 정한 학생이 앉아서 하고, 몸을 누르거나 흔드는 동작은 하지 않는다.',
      }),
      C({
        id: 'saf-firstaid.e34.collapse-aed.activity.park-dilemma', type: 'activity', title: '갈림길: 혼자 할까 함께 할까',
        method: '공원 갈림길: 혼자 할까 함께 할까', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '갈림 2번, 보기 3개씩 고르며 결과를 따라간다.', challenge: '갈림 2번을 지난 뒤 근거 카드 3장 가운데 알맞은 것을 고른다.' },
        activity: {
          title: '갈림길: 쓰러진 사람을 보았을 때', tool: 'dilemma',
          teacher: '"내가 그냥 지나가면 쓰러진 사람은 어떻게 될까요? 내가 외치면 누가 올까요?" 보기를 고를 때마다 결과를 소리 내어 읽고, 혼자 하는 일과 함께하는 일을 짝과 견주게 한다. "흔들면 안 된다니까 그냥 지나가요"를 고른 학생에게 "흔들지 않아도 할 수 있는 일은 무엇일까요?"라고 되묻는다. AED가 분석할 때는 아무도 몸에 닿지 않는다는 것을 짚는다.',
          task: '장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('공원에서 어른이 쓰러졌어요.', {
              text: '공원 산책길에 어른이 쓰러져 있어요. 멀리 사람들이 있어요.', motif: 'tree',
              choices: [
                { id: 'pass', text: '그냥 지나간다', result: '아무도 쓰러진 사람을 보지 못했어요.', impact: [{ who: '쓰러진 사람', text: '도움을 못 받아요', tone: -1 }] },
                { id: 'shout', text: '"도와주세요!" 외친다', result: '어른 두 분이 달려왔어요.', ending: '크게 외쳐 어른을 불렀어요.', next: {
                  text: '어른 두 분이 서로 쳐다보며 머뭇거려요.', choices: [
                    { id: 'point', text: '콕 집어 119를 부탁한다', result: '"노란 옷 아주머니, 119요!" 아주머니가 바로 전화했어요.', impact: [{ who: '쓰러진 사람', text: '구급대가 와요', tone: 1 }], ending: '사람을 콕 집어 부탁해 119가 바로 불렸어요.' },
                    { id: 'wait', text: '누가 하겠지 기다린다', result: '두 분 다 서로 할 거라 생각했어요.', impact: [{ who: '쓰러진 사람', text: '도움이 늦어요', tone: -1 }] },
                    { id: 'leave', text: '어른이 왔으니 간다', result: '어른들은 무엇을 할지 몰라 했어요.', impact: [{ who: '쓰러진 사람', text: '도움이 늦어요', tone: -1 }] },
                  ] } },
                { id: 'photo', text: '사진을 찍는다', result: '사진을 찍는 동안 시간이 지났어요.', impact: [{ who: '쓰러진 사람', text: '도움이 늦어요', tone: -1 }] },
              ] }, [['shout', 'point']],
            [{ id: 'one', text: '콕 집어야 바로 움직여서' }, { id: 'together', text: '함께하면 더 빨리 도와서' }, { id: 'kid', text: '어린이는 할 일이 없어서', why: '어린이도 외치고 119를 부탁할 수 있어요.' }], ['one', 'together'], 0.2),
            DIL('둘레에 아무도 없어요.', {
              text: '놀이터 옆에 할아버지가 쓰러져 있어요. 둘레에 아무도 없어요.', motif: 'house',
              choices: [
                { id: 'home', text: '집에 가서 말한다', result: '집까지 가는 동안 시간이 많이 지났어요.', impact: [{ who: '할아버지', text: '도움이 늦어요', tone: -1 }] },
                { id: 'call', text: '119에 전화한다', result: '119 상담요원이 전화를 받았어요.', ending: '혼자여도 119에 바로 알렸어요.', next: {
                  text: '상담요원이 "어디예요? 숨을 쉬나요?" 하고 물어요.', choices: [
                    { id: 'answer', text: '묻는 대로 답하고 따른다', result: '상담요원이 할 일을 하나씩 알려 주었어요.', impact: [{ who: '할아버지', text: '도움이 오고 있어요', tone: 1 }], ending: '상담요원의 안내를 따라 도왔어요.' },
                    { id: 'hang', text: '무서워 전화를 끊는다', result: '상담요원이 어디인지 알 수 없었어요.', impact: [{ who: '할아버지', text: '도움이 늦어요', tone: -1 }] },
                    { id: 'run', text: '전화를 두고 떠난다', result: '아무도 할아버지 곁에 없었어요.', impact: [{ who: '할아버지', text: '혼자 남았어요', tone: -1 }] },
                  ] } },
                { id: 'shake', text: '세게 흔든다', result: '할아버지가 반응이 없어요. 시간이 지나요.', impact: [{ who: '할아버지', text: '도움이 늦어요', tone: -1 }] },
              ] }, [['call', 'answer']],
            [{ id: 'fast', text: '119가 빨리 알수록 좋아서' }, { id: 'guide', text: '상담요원이 할 일을 알려 줘서' }, { id: 'scared', text: '무서우면 안 해도 돼서', why: '무서워도 119에 걸면 상담요원이 도와줘요.' }], ['fast', 'guide'], 0.25),
            DIL('어른이 AED를 가져와 달래요.', {
              text: '어른이 가슴 압박을 하며 "AED 가져와 줄래?"라고 해요. AED는 현관에 있어요.', motif: 'star',
              choices: [
                { id: 'no', text: '못 한다고 한다', result: '어른은 압박을 멈출 수 없었어요.', impact: [{ who: '쓰러진 사람', text: 'AED가 늦어요', tone: -1 }] },
                { id: 'fetch', text: '현관으로 가 가져온다', result: 'AED를 들고 돌아왔어요.', ending: 'AED를 빨리 가져와 도왔어요.', next: {
                  text: 'AED를 켜자 "분석 중입니다. 환자에게서 떨어지세요."라는 소리가 나요.', choices: [
                    { id: 'away', text: '몸에서 떨어진다', result: 'AED가 바르게 분석했어요.', impact: [{ who: '쓰러진 사람', text: 'AED가 도와요', tone: 1 }], ending: '안내를 따르고 분석 때는 떨어졌어요.' },
                    { id: 'touch', text: '손을 잡아 준다', result: 'AED가 분석을 바르게 하지 못했어요.', impact: [{ who: '쓰러진 사람', text: '도움이 늦어요', tone: -1 }] },
                    { id: 'button', text: '아무 단추나 누른다', result: 'AED 안내를 듣지 못했어요.', impact: [{ who: '쓰러진 사람', text: '도움이 늦어요', tone: -1 }] },
                  ] } },
                { id: 'play', text: 'AED를 열어 본다', result: '가져가지 않고 시간이 지났어요.', impact: [{ who: '쓰러진 사람', text: 'AED가 늦어요', tone: -1 }] },
              ] }, [['fetch', 'away']],
            [{ id: 'voice', text: 'AED가 말로 안내해 줘서' }, { id: 'apart', text: '분석 때 닿으면 바르게 못 읽어서' }, { id: 'doctor', text: 'AED는 의사만 써서', why: 'AED는 안내를 따르면 누구나 쓸 수 있어요.' }], ['voice', 'apart'], 0.3, { conclude: '외치고, 콕 집어 119를 부탁하고, AED를 가져오고, 분석 때는 몸에서 떨어져요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: 'AED가 분석할 때는 쓰러진 사람의 몸에서 ___.', answer: '떨어져요' }] },
      }),
      C({
        id: 'saf-firstaid.e34.collapse-aed.activity.hand-spot', type: 'activity', title: '압박 손 자리 고르기',
        method: '가슴 압박 손 위치 고르기(맛보기)', tool: 'body', minutes: 14,
        levels: { easy: '문항마다 보기 2곳 가운데 고르고, 고른 곳 이름이 바로 보인다.', base: '보기 4곳(목·어깨·가슴·배) 가운데 고른다.', challenge: '보기 4곳에서 고른 뒤 두 손을 겹쳐 깍지 끼고 팔을 곧게 펴는 손 모양을 허공에서 따라 한다(교사 진행).' },
        activity: {
          title: '압박 손 자리 고르기', tool: 'body',
          teacher: '"반응을 확인할 때는 어디를 두드릴까요? 가슴 압박은 어디를 누를까요?" 종이 몸에서 고른 뒤 교사가 연습용 마네킹이나 그림으로 가슴 정중앙을 보여 준다. 배를 고르는 학생에게 "배를 누르면 심장이 있는 가슴까지 힘이 갈까요?"라고 묻는다. 친구 몸을 실제로 누르지 않고 손 모양만 따라 한다고 미리 약속하고, 실제 압박 깊이와 빠르기는 다음 학년 실습에서 배운다고 알려 준다.',
          task: '종이 몸에서 물음에 맞는 곳을 눌러 골라요.', levels: { easy: { names: true }, base: {}, challenge: {} },
          items: [
            { prompt: '"괜찮으세요?" 하며 두드리는 곳을 골라요.', toolOptions: BODY, target: { parts: ['어깨'] }, difficulty: 0.15,
              levels: { easy: { prompt: '"괜찮으세요?" 하며 두드리는 곳을 골라요(2곳 가운데).', toolOptions: { parts: ['어깨', '배'] }, target: { parts: ['어깨'] } } } },
            { prompt: '가슴 압박을 할 자리를 골라요.', toolOptions: BODY, target: { parts: ['가슴'] }, difficulty: 0.2,
              levels: { easy: { prompt: '가슴 압박을 할 자리를 골라요(2곳 가운데).', toolOptions: { parts: ['가슴', '배'] }, target: { parts: ['가슴'] } } } },
            { prompt: 'AED 패드 두 장을 붙이는 곳을 골라요.', toolOptions: BODY, target: { parts: ['가슴'] }, difficulty: 0.25,
              levels: { easy: { prompt: 'AED 패드 두 장을 붙이는 곳을 골라요(2곳 가운데).', toolOptions: { parts: ['가슴', '목'] }, target: { parts: ['가슴'] } } },
              conclude: '어깨를 두드려 반응을 보고, 가슴 정중앙을 누르고, AED 패드는 맨가슴에 그림대로 붙여요.' },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '가슴 압박을 하는 곳은?', options: ['배', '가슴 정중앙', '목'], answer: '가슴 정중앙' }] },
        notes: '맛보기 활동이다. 학생끼리 서로의 몸을 누르지 않는다. 교사 참고(성인 기준, story.md 와 같음): 깊이 약 5 cm, 분당 100~120회, 누른 뒤 가슴이 다 올라오게 — 2025년 한국 심폐소생술 가이드라인. 어린이·영아는 방법이 다르다.',
      }),
      C({
        id: 'saf-firstaid.e34.collapse-aed.activity.aed-place', type: 'activity', title: 'AED를 찾을 곳 나누기',
        method: 'AED가 있는 곳 그림 나누기', tool: 'sortboard', minutes: 14,
        levels: { easy: '바구니 2개에 카드 3장을 나누고, 틀리면 바로 되돌아온다.', base: '바구니 2개에 카드 5장을 나눈 뒤 확인한다.', challenge: '카드 2장이 더해진 7장을 나누고, 우리 동네에서 AED를 본 곳을 짝에게 말한다(교사 진행).' },
        activity: {
          title: 'AED를 찾을 곳 나누기', tool: 'sortboard',
          teacher: '"사람이 많이 모이는 곳에는 AED가 있을 때가 많아요. 어디를 먼저 찾아볼까요?" 카드를 넣을 때마다 왜 그 바구니인지 말하게 한다. 산속 오솔길을 "먼저 찾아볼 곳"에 넣는 학생에게 "사람이 드문 산길에도 AED가 있을까요? 그럴 때는 무엇부터 할까요?"라고 묻고, AED가 없으면 119 상담요원 안내를 따른다는 것을 짚는다. 세 번째 문항에서는 AED가 오면 할 일을 이야기와 같은 차례로 다시 말한다.',
          task: 'AED 카드를 알맞은 바구니에 나누어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTX('sortboard', 'AED를 찾아볼 곳을 나누어요.', {}, ['먼저 찾아볼 곳', '없을 수 있는 곳'], [['큰 기차역', '공항', '큰 경기장'], ['산속 오솔길', '작은 골목']], [[0, 2], [1, 1]], [['큰 아파트 단지'], ['바닷가 바위']], [], 0.15),
            SORTX('sortboard', 'AED를 찾을 때 할 일을 나누어요.', {}, ['도움이 돼요', '도움이 안 돼요'], [['AED 표지 찾기', '안내판 따라가기', '어른께 물어보기'], ['아무 문 열어 보기', '집에 가서 찾기']], [[0, 2], [1, 1]], [['관리실에 묻기'], ['그냥 기다리기']], [], 0.2),
            SORTX('sortboard', 'AED가 오면 할 일을 나누어요.', {}, ['할 일', '하지 말 일'], [['전원 켜기', '안내 음성 따르기', '분석 때 떨어지기'], ['분석 중 몸 만지기', '장난으로 열기']], [[0, 2], [1, 1]], [['패드를 그림대로'], ['안내 무시하기']], [], 0.25, { conclude: 'AED는 사람이 많은 곳에서 먼저 찾고, 켜면 안내를 따르고, 분석 때는 떨어져요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: 'AED를 켜면 무엇을 따라요?', options: ['안내 음성', '친구 말', '내 생각'], answer: '안내 음성' }] },
        notes: 'AED 설치 장소는 지역마다 다르다. 우리 동네 실제 위치는 중앙응급의료센터(E-gen) AED 찾기에서 교사가 미리 확인해 보여 준다.',
      }),
      C({
        id: 'saf-firstaid.e34.collapse-aed.wrap.chain-map', type: 'wrap', title: '도움 사슬 생각 그물',
        method: '도움 사슬 생각 그물 정리', tool: 'mindmap', minutes: 8,
        levels: { easy: '가지 2개(확인·신고)에 카드 4장을 나눈다.', base: '가지 4개에 카드 8장을 나눈다.', challenge: '가지 4개에 카드 10장을 나누고, 출구 3번에 내가 맡을 수 있는 가지를 쓴다.' },
        wrap: {
          teacher: '"오늘 배운 도움 사슬을 네 가지로 정리해 볼까요?" 카드를 다 나누면 가지마다 한 목소리로 읽고, 사슬이 하나라도 끊기면 어떻게 되는지 묻는다. "어른 부르기"와 "신고"를 헷갈리는 학생에게 "옆에 있는 어른에게 하는 일인가요, 119에 하는 일인가요?"라고 되묻는다. 출구 3번에서는 내가 맡을 수 있는 가지를 하나 고르게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { topic: '쓰러진 사람', slots: ['확인', '신고', 'AED', '어른 부르기'], cards: ['주변이 안전한지', '119에 전화', 'AED 가져오기', '"도와주세요!" 외치기', '어깨 두드리기', '묻는 말에 답하기', '분석 때 떨어지기', '어른 콕 집어 부탁'] }, prompt: '도움 카드를 네 가지로 나누어요.', target: { sort: { 확인: ['주변이 안전한지', '어깨 두드리기'], 신고: ['119에 전화', '묻는 말에 답하기'], AED: ['AED 가져오기', '분석 때 떨어지기'], '어른 부르기': ['"도와주세요!" 외치기', '어른 콕 집어 부탁'] } }, difficulty: 0.15,
              levels: {
                easy: { prompt: '도움 카드 4장을 확인과 신고로 나누어요.', toolOptions: { slots: ['확인', '신고'], cards: ['주변이 안전한지', '119에 전화', '어깨 두드리기', '묻는 말에 답하기'] }, target: { sort: { 확인: ['주변이 안전한지', '어깨 두드리기'], 신고: ['119에 전화', '묻는 말에 답하기'] } } },
                challenge: { prompt: '도움 카드 10장을 네 가지로 나누어요.', toolOptions: { cards: ['주변이 안전한지', '119에 전화', 'AED 가져오기', '"도와주세요!" 외치기', '어깨 두드리기', '묻는 말에 답하기', '분석 때 떨어지기', '어른 콕 집어 부탁', '안내 음성 따르기', '어디인지 말하기'] }, target: { sort: { 확인: ['주변이 안전한지', '어깨 두드리기'], 신고: ['119에 전화', '묻는 말에 답하기', '어디인지 말하기'], AED: ['AED 가져오기', '분석 때 떨어지기', '안내 음성 따르기'], '어른 부르기': ['"도와주세요!" 외치기', '어른 콕 집어 부탁'] } } },
              } },
            { type: 'choice', prompt: '쓰러진 사람을 보면 가장 먼저 할 일은?', options: ['주변이 안전한지 봐요', '사진을 찍어요', '그냥 지나가요'], answer: 0, difficulty: 0.1, explain: '먼저 주변이 안전한지 보고, 어깨를 두드리며 반응을 확인해요.' },
            { type: 'short', prompt: '도움 사슬에서 내가 맡을 수 있는 일을 하나 써요.' },
          ],
        },
        worksheet: {
          title: '도움 사슬',
          items: [
            { type: 'table', prompt: '도움 사슬 차례에 번호를 써요.', columns: ['할 일', '차례'], cells: [['119·AED 부탁', ''], ['주변 안전 보기', ''], ['어깨 두드려 반응 확인', '']], answer: '3, 1, 2' },
            { type: 'short', prompt: '119에 전화하면 무엇을 말할지 한 줄로 써요.' },
          ],
        },
      }),
      C({
        id: 'saf-firstaid.e34.collapse-aed.wrap.role-check', type: 'wrap', title: '내가 맡을 역할 약속',
        method: '내가 맡을 역할 약속 점검', tool: 'kitchen', minutes: 8,
        levels: { easy: '내가 할 수 있는 일 2칸에 스스로 표시한다.', base: '내가 할 수 있는 일 4칸에 스스로 표시한다.', challenge: '4칸에 표시하고 출구 3번에 가족에게 알려 줄 약속을 쓴다.' },
        wrap: {
          teacher: '"쓰러진 사람을 보면 나는 무엇을 할 수 있을까요?" 칸을 함께 읽고 할 수 있다고 생각하는 일에 표시하게 한다. 하나도 표시하지 못하는 학생에게 "큰 소리로 \'도와주세요!\' 하는 것은 할 수 있을까요?"라고 묻는다. 출구 2번에서 "가슴을 계속 눌러요"를 고른 학생에게 "AED가 분석할 때는 모두 몸에서 떨어져야 바르게 읽어요."라고 바로잡는다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '내가 할 수 있는 일', items: [{ id: 'shout', text: '큰 소리로 어른 부르기' }, { id: 'call', text: '119에 전화하기' }, { id: 'aed', text: 'AED 가져오기' }, { id: 'follow', text: '상담요원 말 따르기' }] }, prompt: '내가 할 수 있는 일에 스스로 표시해요.', target: { selfCheck: true }, difficulty: 0.1,
              levels: { easy: { prompt: '내가 할 수 있는 일에 스스로 표시해요(2칸).', toolOptions: { items: [{ id: 'shout', text: '큰 소리로 어른 부르기' }, { id: 'call', text: '119에 전화하기' }] } } } },
            { type: 'choice', prompt: 'AED가 분석할 때는?', options: ['몸에서 떨어져요', '가슴을 계속 눌러요', '몸을 흔들어요'], answer: 0, difficulty: 0.1, explain: 'AED가 분석하는 동안과 충격 때는 아무도 몸에 닿지 않아요.' },
            { type: 'short', prompt: '가족에게 알려 줄 약속을 하나 써요.' },
          ],
        },
        worksheet: {
          title: '내가 맡을 역할',
          items: [
            { type: 'check', prompt: '내가 할 수 있는 일에 표시해요.', options: ['어른 부르기', '119에 전화하기', 'AED 가져오기'] },
            { type: 'short', prompt: '우리 학교 AED가 어디 있는지 써요.' },
          ],
        },
      }),
    );
  }

  PaperLessons.registerModules(M);
})();
