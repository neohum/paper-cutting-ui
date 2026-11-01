/* 창체 안전교육 직업안전 — 초3-4 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/safety-b.json 의 saf-job 초3-4.
 * 근거: 「학교안전교육 실시 기준 등에 관한 고시」(교육부고시 제2023-33호) 별표 2 초등학교 직업안전
 *   (1 일터에서 발생하는 산업 재해 알기 / 2 일터 안전시설 현장 체험하기). 근거 파일에는 항목 제목만 있고 세부 수칙은 없다.
 * 초3-4 기준: 상황 판단(그림+짧은 글), 차례 정하기, 고른 이유 말하기, 짝 토의. 법 조문·통계 해석·긴 글쓰기는 쓰지 않는다.
 * 장면·일터·지도는 직접 지은 가상의 것이다. 다친 모습은 그리지 않고 '다칠 뻔'까지만 쓴다. 피해 경험은 묻지 않는다.
 * 주제 2개(3학년 1 · 4학년 1) × 도입 2 · 활동 4 · 정리 2 = 계획 모듈 16개.
 *
 * 사람 확인: (근거 파일에 없는 일반 수칙 — 공식 안내처에서 확인해야 한다)
 *  - work-injury 전체: 일터 사고 유형 이름 '넘어짐·끼임·떨어짐'과 막는 행동(바닥 물기 닦기·통로 정리·기계 덮개·멈춤 단추·
 *    기계를 멈춘 뒤 손 넣기·난간·안전띠·사다리 바르게 쓰기·상자 낮게 쌓기·안전모·안전화·장갑) — 고용노동부·한국산업안전보건공단(KOSHA) 안내.
 *  - work-injury.intro.body-hurt: 끼임은 손목(손)·떨어짐은 발목·허리·무릎(머리)을 다치기 쉽다는 설명 — 한국산업안전보건공단.
 *  - work-injury.activity.warehouse: 높은 선반은 사다리를 쓰고 동료가 잡아 준다 / 벨트에 걸린 물건은 멈춤 단추를 누른 뒤 '고치는 중' 표시를 한다 — 한국산업안전보건공단.
 *  - signs-field 전체: 안전 표지 네 가지(금지=빨간 동그라미와 빗금, 경고=노란 세모, 지시=파란 동그라미, 안내=초록 네모)의 색·모양·이름 — 고용노동부(산업안전보건법 시행규칙 안전보건표지)·한국산업안전보건공단.
 *  - signs-field.activity.lab-tour·field-check: 과학실·급식실의 시설(소화기·눈 씻는 샤워기·환기 장치·가스 잠금 장치·소화전·비상구 표지) 이름과 쓰임 — 학교 시설 담당·소방청.
 *  - signs-field.activity.sign-choice: '출입 금지' 공사 구역에 들어간 물건은 어른이 꺼낸다 — 학교 안전 담당.
 */
(function () {
  const BASE = { schema: 'edu-module.v1', domain: 'saf-job', band: '초3-4' };
  const T = (topic, grade) => (o) => Object.assign({}, BASE, { topic: `saf-job.e34.${topic}`, grades: [grade] }, o);
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

  // 점검표(kitchen checklist): 해당하는 것만 표시. 쉬움 = easyIdx 칸만
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

  // 칸 지도 핀: 도전 단계는 보기 고르기를 함께 한다(ask)
  const PIN = (map, prompt, region, why, d, more) => ({
    prompt, toolOptions: map, target: { region }, difficulty: d,
    levels: { challenge: { prompt: `${strip(prompt)}. ${why.tail || '고칠 방법도 골라요'}.`, toolOptions: { ask: { q: why.q, choices: why.choices } }, target: { region, pick: why.answer } } },
    ...more,
  });
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };

  // ======================================================================================================
  // 3학년 · 일터에서 다치는 일: 넘어짐·끼임·떨어짐 (별표 2 초등 직업안전 1)
  // ======================================================================================================
  {
    const C = T('work-injury', 3);
    const KINDS = ['넘어짐', '끼임', '떨어짐'];
    const FACTORY = {
      title: '작은 공장(가상 그림 지도)', grid: [6, 4],
      regions: [
        { name: '출입문', cells: [[0, 3]] }, { name: '세척실(물 바닥)', cells: [[0, 0], [1, 0]] }, { name: '높은 선반', cells: [[2, 0], [3, 0]] },
        { name: '2층 작업대', cells: [[4, 0], [5, 0]] }, { name: '돌아가는 기계', cells: [[0, 1], [1, 1]] },
        { name: '통로', cells: [[2, 1], [3, 1], [4, 1], [5, 1], [1, 3], [2, 3]] }, { name: '포장대', cells: [[0, 2], [1, 2], [2, 2]] },
        { name: '상자 쌓는 곳', cells: [[3, 2], [4, 2]] }, { name: '쉼터', cells: [[5, 2], [3, 3], [4, 3], [5, 3]] },
      ],
    };
    M.push(
      C({
        id: 'saf-job.e34.work-injury.intro.scene-sort', type: 'intro', title: '일터 장면을 다치는 모습별로',
        method: '일터 장면을 다치는 모습별로 나누기', tool: 'sortboard', minutes: 5,
        levels: { easy: '시연 첫 단계(넘어짐·끼임 두 바구니)만 함께 보고 장면 하나씩 말한다.', base: '세 바구니(넘어짐·끼임·떨어짐)에 장면이 나뉘는 시연을 끝까지 본다.', challenge: '시연을 본 뒤 장면 하나를 왜 그 바구니에 넣었는지 짝에게 말한다.' },
        intro: {
          teacher: '"공장·창고·식당에서 일하는 사람들은 어떻게 다칠 수 있을까요?" 시연 단추로 장면 카드가 넘어짐·끼임·떨어짐 바구니에 나뉘는 것을 보인다. "다치는 건 운이 나빠서예요"라는 말이 나오면 "젖은 바닥, 돌아가는 기계, 난간 없는 계단 — 운 말고 그 자리에 무엇이 있었나요?"라고 되묻는다. 일터에서 일하다 다치는 것을 산업 재해라고 부르고, 모습마다 막는 방법이 있다는 것을 오늘 배운다고 밝힌다.',
          student: '일터 장면을 보고 넘어짐·끼임·떨어짐 가운데 어떤 모습으로 다칠 수 있는지 말해 보아요.',
          demo: {
            tool: 'sortboard',
            options: { slots: KINDS, cards: [{ id: 'wet', text: '젖은 식당 바닥' }, { id: 'gear', text: '돌아가는 기계 틈' }, { id: 'ladder', text: '흔들리는 사다리' }, { id: 'box', text: '통로에 놓인 상자' }, { id: 'door', text: '닫히는 문틈' }, { id: 'stair', text: '난간 없는 계단' }], shuffle: false },
            sequence: [{ sort: { 넘어짐: ['wet', 'box'], 끼임: ['gear', 'door'] } }, { sort: { 넘어짐: ['wet', 'box'], 끼임: ['gear', 'door'], 떨어짐: ['ladder', 'stair'] } }],
          },
          art: { draw: 'a paper cut workplace scene with a factory floor, a warehouse shelf and a restaurant kitchen, three paper baskets labelled on a shelf, no injured people', banner: '일터에서 다치는 세 가지 모습', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '"일하다 다친 가족이 있나요?"처럼 겪은 일을 묻지 않는다. 그림 속 가상의 일터로만 이야기한다.',
      }),
      C({
        id: 'saf-job.e34.work-injury.intro.body-hurt', type: 'intro', title: '다치기 쉬운 몸의 곳',
        method: '다치기 쉬운 몸의 곳', tool: 'body', minutes: 5,
        levels: { easy: '끼임 때 손목, 떨어짐 때 발목 두 곳이 짚이는 것을 함께 본다.', base: '손목·발목에 허리까지 세 곳이 짚이는 것을 보고 까닭을 듣는다.', challenge: '세 곳을 본 뒤 그곳을 지켜 줄 물건(장갑·안전화·안전모)을 짝에게 말한다.' },
        intro: {
          teacher: '"기계 틈에 끼이면 몸의 어디가 먼저 닿을까요? 높은 곳에서 떨어지면요?" 시연 단추로 종이 몸에서 손목, 발목, 허리가 차례로 짚이는 것을 보인다. 종이 몸에는 손·머리 칸이 없으니 학생이 자기 손과 머리를 손으로 짚어 보게 한다. "조심만 하면 장갑이나 안전모는 필요 없어요"라는 말이 나오면 "아무리 조심해도 위에서 물건이 떨어지면 머리를 무엇이 지켜 줄까요?"라고 되묻는다.',
          student: '끼이거나 떨어질 때 다치기 쉬운 몸의 곳을 찾아 손으로 짚어 보아요.',
          demo: { tool: 'body', options: { mode: 'parts', parts: ['눈', '목', '손목', '허리', '무릎', '발목'], names: true }, sequence: [{ parts: ['손목'] }, { parts: ['손목', '발목'] }, { parts: ['손목', '발목', '허리'] }] },
          art: { draw: 'a paper body figure wearing a paper hard hat, work gloves and safety shoes, small arrows pointing to wrist, ankle and lower back', banner: '몸을 지켜 주는 물건', extra: [{ motif: 'leaf', x: 300, y: 96 }] },
        },
        notes: '종이 몸 교구에 손·머리 칸이 없어 손목으로 대신하고, 머리는 학생이 자기 몸을 짚게 한다.',
      }),
      C({
        id: 'saf-job.e34.work-injury.activity.cause-web', type: 'activity', title: '막는 행동 잇기',
        method: '다치는 모습과 막는 행동 잇기', tool: 'mindmap', minutes: 14,
        levels: { easy: '가지 2개(넘어짐·끼임)에 카드 4장, 놓으면 바로 맞는지 알려 준다.', base: '가지 3개에 막는 행동 카드 6장을 나눈 뒤 확인한다.', challenge: '가지 3개에 카드 3장이 더해지고 어느 가지에도 안 맞는 카드 한 장이 섞인다. 고른 근거를 짝에게 잇는다.' },
        activity: {
          title: '막는 행동 잇기', tool: 'mindmap',
          teacher: '"이 행동은 넘어짐·끼임·떨어짐 가운데 무엇을 막아 줄까요?" 카드를 놓을 때마다 "○○을 하면 ○○을 막아요"라고 한 문장으로 말하게 한다. 도전 단계의 "조심만 하기" 카드를 가지에 넣으려는 학생에게 "조심하는 마음만으로 돌아가는 기계 틈이 막힐까요? 무엇이 더 있어야 할까요?"라고 묻는다. 사람의 행동과 덮개·난간 같은 시설이 함께 있어야 사고를 막는다는 점을 짚는다.',
          task: '막는 행동 카드를 넘어짐·끼임·떨어짐 가지에 나누어 넣어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTX('mindmap', '공장에서 막는 행동을 가지에 넣어요.', { topic: '공장 사고 막기' }, KINDS, [['바닥 물기 닦기', '통로 물건 치우기'], ['기계 덮개 씌우기', '멈춘 뒤 손 넣기'], ['난간 달기', '높은 곳 안전띠']], [[0, 2], [1, 2]], [['미끄럼 막는 신발'], ['멈춤 단추 달기'], ['안전모 쓰기']], ['조심만 하기'], 0.15),
            SORTX('mindmap', '창고에서 막는 행동을 가지에 넣어요.', { topic: '창고 사고 막기' }, KINDS, [['전선 정리하기', '쏟은 것 바로 닦기'], ['문틈에 손 안 두기', '벨트 멈추고 고치기'], ['사다리 잡아 주기', '상자 밟지 않기']], [[0, 2], [1, 2]], [['밝은 전등 켜기'], ['장갑 끼고 옮기기'], ['상자 낮게 쌓기']], ['빨리 끝내기'], 0.2),
            SORTX('mindmap', '식당에서 막는 행동을 가지에 넣어요.', { topic: '식당 사고 막기' }, KINDS, [['미끄럼 표지 세우기', '기름 바로 닦기'], ['반죽기에 손 금지', '끈 고정한 앞치마'], ['발판 사다리 쓰기', '의자 위에 안 서기']], [[0, 2], [1, 2]], [['뛰지 않고 걷기'], ['칼날 덮개 씌우기'], ['선반 손잡이 잡기']], ['운이 좋기 바라기'], 0.25, { conclude: '넘어짐은 바닥을, 끼임은 기계를, 떨어짐은 높은 곳을 살펴요. 행동과 시설이 함께 사고를 막아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '막는 행동이 무엇을 막는지 써요(넘어짐·끼임·떨어짐).', columns: ['막는 행동', '막는 것'], cells: [['바닥 물기 닦기', ''], ['기계 덮개 씌우기', ''], ['난간 달기', '']], answer: '넘어짐, 끼임, 떨어짐' }] },
      }),
      C({
        id: 'saf-job.e34.work-injury.activity.warehouse', type: 'activity', title: '갈림길: 창고에서 일할 때',
        method: '창고 갈림길 상황', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '갈림 2번, 보기 3개씩 고르며 결과를 따라간다.', challenge: '갈림 2번을 지난 뒤 근거 카드 3장 가운데 알맞은 것을 고른다.' },
        activity: {
          title: '갈림길: 창고에서 일할 때', tool: 'dilemma',
          teacher: '"빨리 끝내고 싶을 때 사람들은 어떤 선택을 하기 쉬울까요? 그러면 누가 위험해질까요?" 보기를 고를 때마다 결과를 소리 내어 읽고, 누가 도움을 받거나 위험해지는지 짝과 말하게 한다. "조금만 조심하면 상자를 밟아도 돼요"라는 학생에게 "상자가 흔들리면 조심하는 마음이 잡아 줄 수 있을까요? 무엇을 쓰면 될까요?"라고 묻는다. 바른 도구·시설과 함께하는 동료가 사고를 막는다는 점을 짚는다.',
          task: '창고 장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('맨 위 선반의 상자를 꺼내야 해요.', {
              text: '창고 직원이 맨 위 선반의 상자를 꺼내려 해요. 사다리는 멀리 있어요.', motif: 'house',
              choices: [
                { id: 'climb', text: '상자를 밟고 올라간다', result: '밟은 상자가 흔들려 떨어질 뻔했어요.', impact: [{ who: '직원', text: '떨어질 수 있어요', tone: -1 }] },
                { id: 'ladder', text: '사다리를 가져온다', result: '사다리를 선반 앞에 놓았어요.', ending: '시간이 조금 걸려도 바른 도구를 썼어요.', next: {
                  text: '사다리를 놓았는데 바닥이 조금 기울어 흔들려요.', choices: [
                    { id: 'help', text: '동료에게 잡아 달라 한다', result: '동료가 사다리를 꽉 잡아 주었어요.', impact: [{ who: '직원', text: '안전하게 꺼냈어요', tone: 1 }], ending: '바른 도구와 동료의 도움으로 떨어짐을 막았어요.' },
                    { id: 'alone', text: '혼자 빨리 올라간다', result: '사다리가 기우뚱했어요.', impact: [{ who: '직원', text: '떨어질 수 있어요', tone: -1 }] },
                    { id: 'stretch', text: '맨 위 칸에 서서 당긴다', result: '몸이 뒤로 젖혀졌어요.', impact: [{ who: '직원', text: '떨어질 수 있어요', tone: -1 }] },
                  ] } },
                { id: 'reach', text: '발끝으로 서서 당긴다', result: '상자가 머리 위로 쏟아질 뻔했어요.', impact: [{ who: '직원', text: '맞을 수 있어요', tone: -1 }] },
              ] }, [['ladder', 'help']],
            [{ id: 'tool', text: '사다리가 높은 곳에 맞는 도구라서' }, { id: 'pair', text: '함께하면 흔들림을 막아서' }, { id: 'fast', text: '빨리 끝내야 해서', why: '빨리 하려다 다치면 일이 더 늦어져요.' }], ['tool', 'pair'], 0.2),
            DIL('새 상자를 높이 쌓으려 해요.', {
              text: '새 상자가 많이 왔어요. 통로 옆에 천장까지 쌓으면 금방 끝나요.', motif: 'star',
              choices: [
                { id: 'high', text: '천장까지 높이 쌓는다', result: '맨 위 상자가 기우뚱거려요.', impact: [{ who: '지나가는 사람', text: '상자에 맞을 수 있어요', tone: -1 }] },
                { id: 'low', text: '낮게 나누어 쌓는다', result: '상자 더미가 단단히 섰어요.', ending: '상자를 낮게 쌓아 무너짐을 막았어요.', next: {
                  text: '남은 상자를 둘 곳이 마땅치 않아요. 통로가 비어 있어요.', choices: [
                    { id: 'clear', text: '통로는 비워 둔다', result: '사람과 수레가 잘 지나다녀요.', impact: [{ who: '동료들', text: '걸려 넘어지지 않아요', tone: 1 }], ending: '상자는 낮게, 통로는 비워 넘어짐도 막았어요.' },
                    { id: 'aisle', text: '통로에 잠깐 둔다', result: '수레를 밀던 동료가 상자에 걸렸어요.', impact: [{ who: '동료', text: '넘어질 수 있어요', tone: -1 }] },
                    { id: 'later', text: '내일 치우기로 한다', result: '어두워지자 상자가 잘 안 보였어요.', impact: [{ who: '동료들', text: '걸릴 수 있어요', tone: -1 }] },
                  ] } },
                { id: 'lean', text: '벽에 기대어 쌓는다', result: '벽 쪽 상자가 미끄러져 내렸어요.', impact: [{ who: '직원', text: '맞을 수 있어요', tone: -1 }] },
              ] }, [['low', 'clear']],
            [{ id: 'fall', text: '높이 쌓으면 무너지기 쉬워서' }, { id: 'path', text: '통로가 비어야 안 걸려서' }, { id: 'room', text: '자리가 넓어 보여서', why: '보기 좋은 것보다 다치지 않는 것이 먼저예요.' }], ['fall', 'path'], 0.25),
            DIL('벨트에 상자가 걸렸어요.', {
              text: '돌아가는 벨트에 상자가 걸렸어요. 벨트는 계속 돌고 있어요.', motif: 'sun',
              choices: [
                { id: 'hand', text: '손을 넣어 뺀다', result: '소매가 벨트 쪽으로 끌려갈 뻔했어요.', impact: [{ who: '직원', text: '끼일 수 있어요', tone: -1 }] },
                { id: 'stop', text: '멈춤 단추를 누른다', result: '벨트가 멈췄어요.', ending: '먼저 기계를 멈춰 끼임을 막았어요.', next: {
                  text: '상자를 빼는 동안 다른 사람이 벨트를 다시 켜려고 해요.', choices: [
                    { id: 'tag', text: '"고치는 중" 표시를 단다', result: '다른 사람이 표시를 보고 기다렸어요.', impact: [{ who: '직원', text: '안전하게 고쳤어요', tone: 1 }], ending: '멈추고 알려서 끼임을 막았어요.' },
                    { id: 'quiet', text: '말없이 빨리 뺀다', result: '벨트가 갑자기 움직이기 시작했어요.', impact: [{ who: '직원', text: '끼일 수 있어요', tone: -1 }] },
                    { id: 'run', text: '켜 보고 확인한다', result: '상자가 덜 빠져 다시 걸렸어요.', impact: [{ who: '직원', text: '또 손을 넣게 돼요', tone: -1 }] },
                  ] } },
                { id: 'stick', text: '막대로 쿡 찌른다', result: '막대가 벨트에 끌려 들어갔어요.', impact: [{ who: '직원', text: '끌려갈 수 있어요', tone: -1 }] },
              ] }, [['stop', 'tag']],
            [{ id: 'off', text: '기계가 멈춰야 손이 안 끼여서' }, { id: 'sign', text: '알려야 아무도 안 켜서' }, { id: 'quick', text: '잠깐이면 괜찮아서', why: '기계는 잠깐 사이에도 손을 끌어당겨요.' }], ['off', 'sign'], 0.3, { conclude: '일터에서는 바른 도구를 쓰고, 기계는 멈춘 뒤 고치고, 함께 알리면 사고를 막아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '벨트에 무엇이 걸리면 먼저 ___ 단추를 눌러요.', answer: '멈춤' }] },
      }),
      C({
        id: 'saf-job.e34.work-injury.activity.hazard-map', type: 'activity', title: '공장 지도에서 위험한 곳 찾기',
        method: '일터 그림 지도에서 위험 칸 찾기', tool: 'map', minutes: 14,
        levels: { easy: '문항마다 핀 하나, 핀을 놓으면 그 칸 이름이 바로 보인다.', base: '지도 이름을 보고 미끄러운 곳·끼일 곳·높은 곳 세 문항에 핀을 꽂는다.', challenge: '핀을 꽂은 뒤 그곳을 고칠 방법도 보기에서 고른다.' },
        activity: {
          title: '공장 지도에 핀 꽂기', tool: 'map',
          teacher: '"이 공장에서 미끄러운 곳은 어디일까요? 왜 그곳이 미끄러울까요?" 핀을 꽂기 전에 손가락으로 지도를 짚으며 물·기계·높이를 찾아보게 한다. 쉼터에 핀을 꽂는 학생에게 "쉼터에는 무엇이 있나요? 물이나 기계, 높은 곳이 있나요?"라고 묻는다. 위험한 곳을 찾으면 그곳을 고칠 방법도 함께 떠올린다는 점을 짚는다.',
          task: '작은 공장 지도를 보고 물음에 맞는 곳에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            PIN(FACTORY, '바닥에 물이 많아 미끄러운 곳에 핀을 꽂아요.', '세척실(물 바닥)', { q: '이곳은 어떻게 고칠까요?', choices: ['물기 닦고 표지 세우기', '뛰어서 빨리 지나기', '그냥 두기'], answer: 0 }, 0.15),
            PIN(FACTORY, '손이나 옷이 끼일 수 있는 곳에 핀을 꽂아요.', '돌아가는 기계', { q: '이곳은 어떻게 고칠까요?', choices: ['손을 넣어 빼기', '덮개 씌우고 멈춰 고치기', '소매 늘어뜨리기'], answer: 1 }, 0.2),
            PIN(FACTORY, '높아서 떨어질 수 있는 곳에 핀을 꽂아요.', '2층 작업대', { q: '이곳은 어떻게 고칠까요?', choices: ['끝에 서서 보기', '뛰어 내려오기', '난간 달고 잡기'], answer: 2 }, 0.25, { conclude: '물이 있는 곳, 기계가 도는 곳, 높은 곳을 먼저 살피고 고칠 방법을 정해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '돌아가는 기계를 고칠 때 먼저 할 일은?', options: ['손을 넣어 봐요', '기계를 멈춰요', '빨리 고쳐요'], answer: '기계를 멈춰요' }] },
        notes: '칸 지도는 문항마다 핀 하나만 받는다. 계획의 "한 곳·세 곳"은 쉬움(이름 보이기)·기본(이름 보고 세 문항)으로 나눴다.',
      }),
      C({
        id: 'saf-job.e34.work-injury.activity.pair-talk', type: 'activity', title: '짝과 막는 방법 정하기',
        method: '짝과 막는 방법 정하기', tool: 'timer', minutes: 14,
        levels: { easy: '선생님이 준 장면(젖은 식당 바닥)으로 토의 차례 3장을 맞추고 짝과 방법을 정한다.', base: '장면을 짝과 고르고 토의 차례 4장을 맞춘 뒤 방법을 정한다.', challenge: '방법을 정한 뒤 다른 짝과 견주어 보고 표시한다.' },
        activity: {
          title: '짝과 막는 방법 정하기', tool: 'timer',
          teacher: '"오늘 본 장면 가운데 하나를 골라, 짝과 막는 방법을 하나 정해 볼까요?" 토의 차례를 맞춘 뒤 짝과 정한 방법을 "○○에서는 ○○을 해서 ○○을 막아요." 틀로 말하게 한다. "조심해요"로만 정하는 짝에게 "무엇을 어떻게 조심할까요? 바닥, 기계, 높은 곳 가운데 어디를 바꿀까요?"라고 묻는다. 행동과 시설을 하나씩 넣으면 더 좋은 방법이 된다는 점을 짚는다.',
          task: '짝 토의 차례를 맞추고, 짝과 막는 방법을 정한 뒤 스스로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '짝 토의 차례 카드를 차례대로 놓아요.', toolOptions: { title: '짝 토의 차례', cards: ['방법 정하기', '장면 고르기', '반에 알리기', '다치는 모습 말하기'] }, target: { order: ['장면 고르기', '다치는 모습 말하기', '방법 정하기', '반에 알리기'] }, difficulty: 0.15,
              levels: { easy: { prompt: '받은 장면으로 토의 차례 3장을 놓아요.', toolOptions: { cards: ['방법 정하기', '반에 알리기', '다치는 모습 말하기'] }, target: { order: ['다치는 모습 말하기', '방법 정하기', '반에 알리기'] } } } },
            { prompt: '짝과 장면 하나를 골라 막는 방법을 정해요.', free: true, toolOptions: { title: '짝 토의', doneLabel: '짝과 막는 방법을 정했어요' },
              levels: { easy: { prompt: '젖은 식당 바닥을 막는 방법을 짝과 정해요.' }, challenge: { prompt: '정한 방법을 다른 짝과 견주어 말해요.', toolOptions: { doneLabel: '다른 짝과 방법을 견주었어요' } } } },
            { prompt: '짝 토의에서 한 것에 표시해요.', toolOptions: { title: '짝 토의 점검' }, target: { selfCheck: ['다치는 모습을 말했어요', '막는 행동을 정했어요', '시설도 떠올렸어요'] }, difficulty: 0.1,
              levels: { easy: { prompt: '짝 토의에서 한 것에 표시해요(2칸).', target: { selfCheck: ['다치는 모습을 말했어요', '막는 행동을 정했어요'] } } },
              conclude: '다치는 모습을 알면 막는 방법이 보여요. 행동과 시설을 함께 바꿔요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '짝과 정한 막는 방법을 한 줄로 써요.' }] },
      }),
      C({
        id: 'saf-job.e34.work-injury.wrap.feel-scale', type: 'wrap', title: '안전한 일터의 마음 눈금',
        method: '일하는 사람 마음 눈금', tool: 'emotion', minutes: 8,
        levels: { easy: '눈금 3칸에서 마음 크기를 고른다.', base: '눈금 5칸에서 마음 크기를 고른다.', challenge: '눈금 5칸에서 고르고 그 까닭을 짝에게 말한다(교사 진행).' },
        wrap: {
          teacher: '"난간과 덮개가 있는 공장에서 일하는 사람은 얼마나 마음이 편할까요?" 눈금을 고른 뒤 두세 명에게 까닭을 듣는다. 낮은 칸을 고른 학생도 나무라지 않고 "무엇이 더 있으면 편해질까요?"라고 되묻는다. 출구 2번에서 "조심만 하면 돼요"를 고른 학생에게 "조심하는 사람도 덮개가 없으면 끼일 수 있어요. 둘 다 있어야 해요."라고 바로잡는다.',
          exitTicket: [
            { type: 'tool', tool: 'emotion', options: { mode: 'scale', situation: '난간과 덮개가 있는 공장에서 일해요', feeling: '편안함', steps: 5, scaleLabels: { 1: '조금', 5: '아주 많이' } }, prompt: '일하는 사람의 편안한 마음 크기를 골라요.', target: { level: 'any' }, difficulty: 0.1,
              levels: { easy: { toolOptions: { steps: 3, scaleLabels: { 1: '조금', 3: '아주 많이' } } } } },
            { type: 'choice', prompt: '일터 사고를 막는 바른 생각은?', options: ['조심만 하면 돼요', '시설과 행동이 함께 있어야 해요', '운이 좋으면 안 다쳐요'], answer: 1, difficulty: 0.15, explain: '조심하는 행동과 덮개·난간 같은 시설이 함께 있어야 사고를 막아요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '안전한 일터',
          items: [
            { type: 'choice', prompt: '떨어짐을 막는 시설은?', options: ['난간', '화분', '게시판'], answer: '난간' },
            { type: 'draw', prompt: '안전한 일터에서 일하는 사람을 그려요.' },
          ],
          easy: { note: '바닥·기계·높은 곳을 떠올려요.', items: [{ type: 'choice', prompt: '젖은 바닥은 어떻게 할까요?', options: ['닦아요', '뛰어요'], answer: '닦아요' }] },
        },
      }),
      C({
        id: 'saf-job.e34.work-injury.wrap.tip-check', type: 'wrap', title: '오늘 배운 막는 행동 점검',
        method: '오늘 배운 막는 행동 점검', tool: 'kitchen', minutes: 8,
        levels: { easy: '막는 행동 3칸 가운데 기억나는 것에 표시한다.', base: '막는 행동 5칸 가운데 기억나는 것에 표시한다.', challenge: '5칸에 표시하고 집에서도 쓸 행동 하나를 쓴다.' },
        wrap: {
          teacher: '"오늘 배운 막는 행동 가운데 기억나는 것은 무엇인가요?" 칸을 함께 읽고 기억나는 것에 표시하게 한다. 출구 3번에서 집에서 쓸 행동을 떠올리지 못하는 학생에게 "집에도 젖은 욕실 바닥이나 높은 선반이 있지요? 거기에는 무엇을 쓸까요?"라고 묻는다. 일터의 막는 행동이 집과 학교에서도 그대로 쓰인다는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '기억나는 막는 행동', items: [{ id: 'wipe', text: '바닥 물기 닦기' }, { id: 'cover', text: '기계 덮개 씌우기' }, { id: 'rail', text: '난간 잡기' }, { id: 'stop', text: '멈춘 뒤 고치기' }, { id: 'low', text: '상자 낮게 쌓기' }] }, prompt: '기억나는 막는 행동에 스스로 표시해요.', target: { selfCheck: true }, difficulty: 0.1,
              levels: { easy: { prompt: '기억나는 막는 행동에 스스로 표시해요(3칸).', toolOptions: { items: [{ id: 'wipe', text: '바닥 물기 닦기' }, { id: 'cover', text: '기계 덮개 씌우기' }, { id: 'rail', text: '난간 잡기' }] } } } },
            { type: 'choice', prompt: '높은 선반의 물건을 꺼낼 때는?', options: ['의자를 쌓고 올라가요', '바른 사다리를 써요', '뛰어서 잡아요'], answer: 1, difficulty: 0.1, explain: '높은 곳은 바른 사다리를 쓰고 누가 잡아 주면 더 안전해요.' },
            { type: 'short', prompt: '집에서도 쓸 막는 행동을 하나 써요.' },
          ],
        },
        worksheet: {
          title: '막는 행동 정리',
          items: [
            { type: 'check', prompt: '오늘 배운 것에 표시해요.', options: ['넘어짐을 막는 행동', '끼임을 막는 행동', '떨어짐을 막는 행동'] },
            { type: 'short', prompt: '우리 집에서 넘어질 수 있는 곳과 막는 방법을 한 줄로 써요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 4학년 · 안전 표지의 색·모양과 시설 찾기 현장 체험 (별표 2 초등 직업안전 2)
  // ======================================================================================================
  {
    const C = T('signs-field', 4);
    const SIGNS = ['금지', '경고', '지시', '안내'];
    const SCHOOL = {
      title: '우리 학교 1층(가상 그림 지도)', grid: [6, 4],
      regions: [
        { name: '과학실 실험대', cells: [[0, 0], [1, 0], [0, 1], [1, 1]] }, { name: '과학실 소화기', cells: [[2, 0]] }, { name: '눈 씻는 샤워기', cells: [[2, 1]] },
        { name: '복도', cells: [[3, 0], [3, 1], [3, 2], [3, 3]] }, { name: '보건실', cells: [[4, 0], [5, 0]] }, { name: '비상구', cells: [[5, 1]] },
        { name: '급식실 조리대', cells: [[0, 2], [1, 2], [0, 3]] }, { name: '급식실 소화기', cells: [[2, 2]] }, { name: '가스 잠금 장치', cells: [[1, 3], [2, 3]] },
        { name: '교실', cells: [[4, 1], [4, 2], [5, 2], [4, 3], [5, 3]] },
      ],
    };
    M.push(
      C({
        id: 'saf-job.e34.signs-field.intro.shape-color', type: 'intro', title: '표지 색·모양 규칙 찾기',
        method: '표지 색·모양 규칙 찾기', tool: 'pattern', minutes: 5,
        levels: { easy: '교사가 빨간 동그라미·노란 세모 두 조각이 되풀이되는 규칙 하나만 짚는다.', base: '네 조각(빨간 동그라미·노란 세모·파란 동그라미·초록 네모)이 되풀이되는 규칙으로 빈칸 둘이 채워지는 것을 본다.', challenge: '시연 뒤 교사가 칠판 줄에 규칙에 안 맞는 조각 하나를 섞고 찾게 한다.' },
        intro: {
          teacher: '"이 줄에서 무엇이 되풀이되나요? 빈칸에는 무엇이 올까요?" 시연 단추로 빈칸이 채워지는 것을 보인 뒤, 조각마다 우리 둘레에서 본 표지를 떠올리게 한다(기다릴 반응: "빨간 동그라미는 하지 말라는 거예요", "노란 세모는 조심하래요"). 교구의 분홍 조각은 빨간 표지로 읽는다고 알려 준다. "표지 색은 그냥 예쁘게 정한 거예요"라는 말이 나오면 "빨간색을 보면 어떤 느낌이 드나요? 왜 위험한 곳에 노란색을 쓸까요?"라고 되묻는다. 표지는 색과 모양만 보고도 뜻을 알게 만든 약속이라는 것을 오늘 배운다고 밝힌다.',
          student: '표지 조각 줄에서 되풀이되는 규칙을 찾고, 빈칸에 올 조각을 생각해 보아요.',
          demo: { tool: 'pattern', options: { seq: ['circle:rose', 'triangle:buttercup', 'circle:sky', 'square:mint', 'circle:rose', 'triangle:buttercup', null, null] }, sequence: [{ fill: ['circle:sky', 'square:mint'] }] },
          art: { draw: 'a row of paper safety signs: a red circle with a slash, a yellow triangle, a blue circle and a green square, repeating along a paper wall', banner: '색과 모양에 뜻이 있어요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '규칙 판 교구에 빨강 이름이 없어 분홍(rose) 조각을 빨간 표지로 쓴다. 실제 표지 그림(금지·경고·지시·안내)을 함께 보인다.',
      }),
      C({
        id: 'saf-job.e34.signs-field.intro.sign-story', type: 'intro', title: '표지를 못 본 이야기',
        method: '표지를 못 본 이야기', tool: 'story', minutes: 5,
        levels: { easy: '시연에서 처음과 끝 두 장면만 짚으며 이야기한다.', base: '장면 3장이 차례로 놓이는 것을 보고 이야기를 듣는다.', challenge: '3장을 본 뒤 어느 장면을 바꾸면 좋을지 짝에게 말한다.' },
        intro: {
          teacher: '"이 친구는 무엇을 보지 못했을까요? 표지를 봤다면 이야기가 어떻게 달라졌을까요?" 시연 단추로 장면 3장이 차례로 놓이는 것을 보인다. "글씨를 못 읽으면 표지를 모를 거예요"라는 말이 나오면 "노란 세모 안에 번개 그림이 있으면 글이 없어도 무슨 뜻일까요?"라고 되묻는다. 표지는 그림과 색으로 먼저 알려 준다는 것을 짚는다.',
          student: '표지를 못 보고 지나친 이야기를 차례대로 보고, 바꾸면 좋을 장면을 생각해 보아요.',
          demo: { tool: 'story', options: { mode: 'order', slots: ['처음', '가운데', '끝'], cards: [{ id: 'next', text: '다음엔 표지부터 봄', motif: 'sun' }, { id: 'near', text: '뜨거운 기계에 닿을 뻔', motif: 'cloud' }, { id: 'miss', text: '"만지지 마시오" 못 봄', motif: 'star' }], shuffle: false }, sequence: [{ order: ['miss', 'near', 'next'] }] },
          art: { draw: 'a paper child walking past a yellow triangle warning sign on a paper machine, then stopping and looking back at the sign', banner: '표지를 먼저 봐요', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
        },
      }),
      C({
        id: 'saf-job.e34.signs-field.activity.sign-sort', type: 'activity', title: '표지를 종류별로 나누기',
        method: '표지를 종류별로 나누기', tool: 'sortboard', minutes: 14,
        levels: { easy: '바구니 2개(금지·경고)에 카드 4장을 나누고, 틀리면 바로 되돌아온다.', base: '바구니 4개(금지·경고·지시·안내)에 카드 8장을 나눈 뒤 확인한다.', challenge: '카드 4장이 더해진 12장을 나누고, 카드마다 모양·색 근거를 짝에게 말한다.' },
        activity: {
          title: '표지를 종류별로 나누기', tool: 'sortboard',
          teacher: '"이 표지는 하지 말라는 뜻일까요, 조심하라는 뜻일까요, 꼭 하라는 뜻일까요, 어디 있는지 알려 주는 뜻일까요?" 카드를 넣을 때마다 "○○ 모양에 ○○ 색이라서 ○○ 표지예요." 틀로 말하게 한다. "보안경을 쓰세요"를 금지에 넣는 학생에게 "이 표지는 하지 말라는 걸까요, 꼭 하라는 걸까요?"라고 묻는다. 금지는 빨강, 경고는 노랑, 지시는 파랑, 안내는 초록이라는 짝을 함께 소리 내어 정리한다.',
          task: '표지 카드를 금지·경고·지시·안내 바구니에 나누어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTX('sortboard', '표지 모양과 색을 보고 나누어요.', {}, SIGNS, [['빨간 원에 빗금', '담배에 빗금'], ['노란 세모', '세모 안 번개'], ['파란 동그라미', '파란 원 안 장갑'], ['초록 네모', '초록 네모 비상구']], [[0, 2], [1, 2]], [['휴대폰에 빗금'], ['세모 안 불꽃'], ['파란 원 안 보안경'], ['초록 네모 화살표']], [], 0.15),
            SORTX('sortboard', '표지가 하는 말을 보고 나누어요.', {}, SIGNS, [['들어가지 마세요', '만지지 마세요'], ['뜨거워요 조심', '미끄러워요 조심'], ['보안경을 쓰세요', '장갑을 끼세요'], ['비상구는 이쪽', '구급함 있는 곳']], [[0, 2], [1, 2]], [['뛰지 마세요'], ['떨어질 수 있어요'], ['손을 씻으세요'], ['모이는 곳']], [], 0.2),
            SORTX('sortboard', '급식실·과학실 표지를 나누어요.', {}, SIGNS, [['조리실 출입 금지', '과학실 음식 금지'], ['뜨거운 솥 주의', '깨지는 유리 주의'], ['위생모를 쓰세요', '실험복을 입으세요'], ['소화기 있는 곳', '눈 씻는 샤워기']], [[0, 2], [1, 2]], [['약품 맛보기 금지'], ['젖은 바닥 주의'], ['앞치마를 입으세요'], ['비상 대피로']], [], 0.25, { conclude: '금지는 빨강 동그라미, 경고는 노랑 세모, 지시는 파랑 동그라미, 안내는 초록 네모예요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '표지 종류에 맞는 색을 써요.', columns: ['종류', '색'], cells: [['금지', ''], ['경고', ''], ['지시', ''], ['안내', '']], answer: '빨강, 노랑, 파랑, 초록' }] },
      }),
      C({
        id: 'saf-job.e34.signs-field.activity.lab-tour', type: 'activity', title: '과학실·급식실 시설 지도',
        method: '과학실·급식실 시설 지도', tool: 'map', minutes: 14,
        levels: { easy: '문항마다 핀 하나, 핀을 놓으면 그 칸 이름이 바로 보인다.', base: '지도 이름을 보고 세 시설(소화기·눈 씻는 샤워기·비상구)에 핀을 꽂는다.', challenge: '핀을 꽂은 뒤 그 시설을 언제 쓰는지 보기에서 고르고, 범례 채우기는 활동지 표로 한다.' },
        activity: {
          title: '학교 지도에 시설 핀 꽂기', tool: 'map',
          teacher: '"과학실에서 불이 나면 무엇을 써야 할까요? 그것은 어디에 있나요?" 핀을 꽂은 뒤 실제 우리 학교 과학실·급식실에서 같은 시설을 찾아보러 간다(현장 체험). 가스 잠금 장치에 핀을 꽂는 학생에게 "그곳은 누가 쓰는 곳일까요? 우리는 무엇을 하면 될까요?"라고 묻고, 어린이는 어른께 알린다는 것을 짚는다. 시설마다 쓰는 때가 정해져 있다는 점을 말한다.',
          task: '학교 지도를 보고 물음에 맞는 시설에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            PIN(SCHOOL, '과학실에서 불이 났을 때 쓸 시설에 핀을 꽂아요.', '과학실 소화기', { q: '이 시설은 누가 쓸까요?', choices: ['어른이 쓰고 나는 알린다', '내가 장난으로 뿌린다', '아무도 안 쓴다'], answer: 0, tail: '누가 쓰는지도 골라요' }, 0.15),
            PIN(SCHOOL, '실험 중 눈에 약품이 튀면 쓸 곳에 핀을 꽂아요.', '눈 씻는 샤워기', { q: '언제 쓸까요?', choices: ['물놀이할 때', '눈·몸에 약품이 묻을 때', '손 씻을 때 아무 때나'], answer: 1, tail: '언제 쓰는지도 골라요' }, 0.2),
            PIN(SCHOOL, '대피할 때 밖으로 나가는 곳에 핀을 꽂아요.', '비상구', { q: '이곳 표지는 무슨 색일까요?', choices: ['빨간 동그라미', '노란 세모', '초록 네모'], answer: 2, tail: '표지 색도 골라요' }, 0.25, { conclude: '소화기·눈 씻는 샤워기·비상구가 어디 있는지 미리 알면 위급할 때 바로 써요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '시설과 쓰는 때를 이어 써요(범례 채우기).', columns: ['시설', '쓰는 때'], cells: [['소화기', ''], ['눈 씻는 샤워기', ''], ['비상구', '']], answer: '불이 났을 때, 눈·몸에 약품이 묻을 때, 대피할 때' }] },
        notes: '현장 체험은 과학실·급식실 담당 선생님과 미리 시간을 맞춘다. 급식실 조리 구역 안에는 들어가지 않고 문 앞에서 본다. 지도는 가상이며 우리 학교 실제 자리로 바꿔 이야기한다.',
      }),
      C({
        id: 'saf-job.e34.signs-field.activity.field-check', type: 'activity', title: '현장 체험 시설 점검표',
        method: '현장 체험 점검 목록', tool: 'kitchen', minutes: 14,
        levels: { easy: '점검 3칸 가운데 안전시설에만 표시한다.', base: '점검 5칸(안전시설 아닌 것 섞임) 가운데 안전시설에만 표시한다.', challenge: '5칸에 표시한 뒤 우리 학교에서 찾지 못한 시설을 짝과 말한다(교사 진행).' },
        activity: {
          title: '현장 체험 시설 점검표', tool: 'kitchen',
          teacher: '"오늘 둘러본 곳에서 우리를 지켜 주는 시설은 무엇이었나요?" 점검표를 하나씩 소리 내어 읽고 안전시설에만 표시하게 한다. 게시판 그림이나 화분에 표시하는 학생에게 "이것이 불이 나거나 다칠 때 우리를 지켜 줄까요?"라고 묻는다. 도전 단계에서는 우리 학교에서 못 찾은 시설을 말해 보고, 정말 없는지 담당 선생님께 여쭤보기로 한다.',
          task: '점검표에서 안전을 지켜 주는 시설에만 표시해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            CHK('과학실의 안전시설에만 표시해요.', '과학실', [{ id: 'ext', text: '소화기', ok: true }, { id: 'art', text: '게시판 그림', ok: false }, { id: 'eye', text: '눈 씻는 샤워기', ok: true }, { id: 'fan', text: '환기 장치', ok: true }, { id: 'goggle', text: '보안경', ok: true }], [0, 1, 2], 0.15),
            CHK('급식실의 안전시설에만 표시해요.', '급식실', [{ id: 'slip', text: '미끄럼 주의 표지', ok: true }, { id: 'menu', text: '오늘 메뉴판', ok: false }, { id: 'ext2', text: '소화기', ok: true }, { id: 'gas', text: '가스 잠금 장치', ok: true }, { id: 'wash', text: '손 씻는 곳', ok: true }], [0, 1, 2], 0.2),
            CHK('복도·계단의 안전시설에만 표시해요.', '복도·계단', [{ id: 'exit', text: '비상구 표지', ok: true }, { id: 'pot', text: '화분', ok: false }, { id: 'rail', text: '계단 손잡이', ok: true }, { id: 'hydrant', text: '소화전', ok: true }, { id: 'clock', text: '벽시계', ok: false }], [0, 1, 2], 0.25, { conclude: '안전시설은 위급할 때 우리를 지켜 줘요. 어디 있는지 미리 알아 두어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '현장 체험에서 직접 본 시설에 표시해요.', options: ['소화기', '비상구 표지', '눈 씻는 샤워기'] }] },
      }),
      C({
        id: 'saf-job.e34.signs-field.activity.sign-choice', type: 'activity', title: '갈림길: 표지 앞에서',
        method: '표지 보고 행동 정하기', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '갈림 2번, 보기 3개씩 고르며 결과를 따라간다.', challenge: '갈림 2번을 지난 뒤 근거 카드 3장 가운데 알맞은 것을 고른다.' },
        activity: {
          title: '갈림길: 표지 앞에서', tool: 'dilemma',
          teacher: '"표지를 보고도 궁금하면 어떻게 하고 싶어질까요? 그러면 무슨 일이 생길까요?" 보기를 고를 때마다 결과를 읽고, 표지가 무엇을 막아 주려 했는지 짝과 말하게 한다. 몰래 들어가는 쪽을 고른 학생을 나무라지 않고 "궁금할 수 있어요. 궁금할 때 안전하게 알아내는 방법은 무엇일까요?"라고 되물어 다른 길로 가 보게 한다.',
          task: '표지 앞 장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('"만지지 마시오" 표지 앞에서 어떻게 할까요?', {
              text: '과학실 기구에 빨간 "만지지 마시오" 표지가 있어요. 반짝이는 기구가 궁금해요.', motif: 'star',
              choices: [
                { id: 'touch', text: '살짝 만져 본다', result: '기구가 흔들려 떨어질 뻔했어요.', impact: [{ who: '나와 친구', text: '다칠 수 있어요', tone: -1 }] },
                { id: 'ask', text: '선생님께 여쭤본다', result: '선생님이 "실험 때 함께 써요"라고 하셨어요.', ending: '궁금한 것을 만지지 않고 여쭤봤어요.', next: {
                  text: '선생님이 나가신 사이 친구가 몰래 만지려 해요.', choices: [
                    { id: 'stop', text: '"표지 있어, 만지지 말자"', result: '친구가 손을 거두었어요.', impact: [{ who: '친구', text: '안전해요', tone: 1 }], ending: '표지의 뜻을 친구에게도 알렸어요.' },
                    { id: 'join', text: '같이 만져 본다', result: '기구가 기울며 유리가 부딪쳤어요.', impact: [{ who: '친구와 나', text: '다칠 수 있어요', tone: -1 }] },
                    { id: 'look', text: '못 본 척한다', result: '친구가 기구를 들어 올렸어요.', impact: [{ who: '친구', text: '다칠 수 있어요', tone: -1 }] },
                  ] } },
                { id: 'tap', text: '연필로 톡 건드린다', result: '기구가 데굴 굴렀어요.', impact: [{ who: '나', text: '깨뜨릴 수 있어요', tone: -1 }] },
              ] }, [['ask', 'stop']],
            [{ id: 'mean', text: '빨간 금지 표지는 하지 말라는 뜻이라서' }, { id: 'ask', text: '궁금하면 여쭤보면 되어서' }, { id: 'once', text: '한 번쯤은 괜찮아서', why: '한 번이라도 다칠 수 있어서 표지가 있어요.' }], ['mean', 'ask'], 0.2),
            DIL('"미끄럼 주의" 표지가 있는 바닥이에요.', {
              text: '급식실 앞 바닥에 노란 세모 "미끄럼 주의" 표지가 서 있어요.', motif: 'cloud',
              choices: [
                { id: 'run', text: '빨리 뛰어 지나간다', result: '발이 쭉 미끄러질 뻔했어요.', impact: [{ who: '나', text: '넘어질 수 있어요', tone: -1 }] },
                { id: 'slow', text: '천천히 걸어간다', result: '조심조심 지나갔어요.', ending: '경고 표지를 보고 걸음을 바꿨어요.', next: {
                  text: '친구가 표지를 치우고 그 자리에서 미끄럼 놀이를 하자고 해요.', choices: [
                    { id: 'keep', text: '"표지는 그대로 둬야 해"', result: '친구가 표지를 제자리에 두었어요.', impact: [{ who: '다른 친구들', text: '표지를 보고 조심해요', tone: 1 }], ending: '표지를 지켜 다른 친구들도 지켰어요.' },
                    { id: 'move', text: '같이 표지를 치운다', result: '모르는 친구가 젖은 곳을 밟았어요.', impact: [{ who: '지나가는 친구', text: '미끄러질 수 있어요', tone: -1 }] },
                    { id: 'slide', text: '미끄럼 놀이를 한다', result: '친구와 부딪힐 뻔했어요.', impact: [{ who: '친구와 나', text: '넘어질 수 있어요', tone: -1 }] },
                  ] } },
                { id: 'phone', text: '휴대폰 보며 걷는다', result: '표지를 못 보고 젖은 곳으로 갔어요.', impact: [{ who: '나', text: '넘어질 수 있어요', tone: -1 }] },
              ] }, [['slow', 'keep']],
            [{ id: 'warn', text: '노란 경고 표지는 조심하라는 뜻이라서' }, { id: 'all', text: '표지는 모두를 위한 것이라서' }, { id: 'fun', text: '미끄러지면 재미있어서', why: '재미보다 다치지 않는 것이 먼저예요.' }], ['warn', 'all'], 0.25),
            DIL('"출입 금지" 구역에 공이 들어갔어요.', {
              text: '학교 뒤 공사하는 곳에 "출입 금지" 표지가 있어요. 공이 그 안으로 굴러갔어요.', motif: 'house',
              choices: [
                { id: 'enter', text: '들어가서 공을 줍는다', result: '공사 자재가 흔들리는 곳이었어요.', impact: [{ who: '나', text: '다칠 수 있어요', tone: -1 }] },
                { id: 'tell', text: '어른께 꺼내 달라 한다', result: '어른이 "공사가 끝나면 꺼내 줄게"라고 하셨어요.', ending: '금지 구역에 들어가지 않고 어른께 부탁했어요.', next: {
                  text: '친구가 "지금 아무도 없으니 몰래 들어가자"고 해요.', choices: [
                    { id: 'wait', text: '"어른을 기다리자"', result: '어른이 안전할 때 공을 꺼내 주셨어요.', impact: [{ who: '친구와 나', text: '안전해요', tone: 1 }], ending: '표지를 지키고 어른을 기다렸어요.' },
                    { id: 'sneak', text: '몰래 들어간다', result: '바닥에 구멍이 있었어요.', impact: [{ who: '친구와 나', text: '떨어질 수 있어요', tone: -1 }] },
                    { id: 'fence', text: '울타리를 넘는다', result: '울타리가 기우뚱했어요.', impact: [{ who: '나', text: '떨어질 수 있어요', tone: -1 }] },
                  ] } },
                { id: 'pole', text: '막대로 꺼내 본다', result: '울타리에 기대다 몸이 기울었어요.', impact: [{ who: '나', text: '넘어질 수 있어요', tone: -1 }] },
              ] }, [['tell', 'wait']],
            [{ id: 'danger', text: '금지 구역에는 보이지 않는 위험이 있어서' }, { id: 'adult', text: '어른이 안전하게 꺼낼 수 있어서' }, { id: 'none', text: '아무도 안 보면 괜찮아서', why: '보는 사람이 없어도 위험은 그대로예요.' }], ['danger', 'adult'], 0.3, { conclude: '표지를 보면 뜻을 먼저 생각하고, 궁금하거나 곤란하면 어른께 알려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '"출입 금지" 구역에 물건이 들어가면 ___께 꺼내 달라고 해요.', answer: '어른' }] },
      }),
      C({
        id: 'saf-job.e34.signs-field.wrap.my-sign', type: 'wrap', title: '우리 교실 안전 표지 만들기',
        method: '우리 교실 안전 표지 만들기', tool: 'collage', minutes: 8,
        levels: { easy: '조각 2개 이상으로 표지를 꾸미고 점검 3칸에 표시한다.', base: '조각 3개 이상으로 꾸미고 점검 3칸에 표시한다.', challenge: '조각 3개 이상으로 꾸미고 규칙 설명을 활동지에 써 붙여 점검 4칸에 표시한다.' },
        wrap: {
          teacher: '"우리 교실에 꼭 붙이고 싶은 표지는 무엇인가요? 하지 말라는 표지인가요, 조심하라는 표지인가요?" 종류를 먼저 정하고, 그 종류의 색과 모양 규칙에 맞는 조각을 고르게 한다. 금지 표지를 초록 네모로 만드는 학생에게 "초록 네모는 무엇을 알려 주는 표지였지요?"라고 되묻는다. 만든 표지는 활동지 문구와 함께 교실에 붙인다.',
          exitTicket: [
            { type: 'tool', tool: 'collage', options: { maxPieces: 10 }, prompt: '색종이 조각으로 우리 교실 안전 표지를 꾸며요.', target: { selfCheck: ['표지 종류를 정했어요', '색을 규칙대로 골랐어요', '모양을 규칙대로 골랐어요'], minPieces: 3 }, difficulty: 0.1,
              levels: { easy: { target: { selfCheck: ['표지 종류를 정했어요', '색을 규칙대로 골랐어요', '모양을 규칙대로 골랐어요'], minPieces: 2 } }, challenge: { target: { selfCheck: ['표지 종류를 정했어요', '색을 규칙대로 골랐어요', '모양을 규칙대로 골랐어요', '규칙 설명을 붙였어요'], minPieces: 3 } } } },
            { type: 'choice', prompt: '"꼭 하세요"를 알리는 지시 표지의 색은?', options: ['빨강', '파랑', '노랑'], answer: 1, difficulty: 0.15, explain: '지시 표지는 파란 동그라미예요. 빨강은 금지, 노랑은 경고예요.' },
            { type: 'short', prompt: '내가 만든 표지의 뜻을 한 줄로 써요.' },
          ],
        },
        worksheet: {
          title: '우리 교실 안전 표지',
          items: [
            { type: 'choice', prompt: '조심하라는 경고 표지의 모양은?', options: ['세모', '네모', '별'], answer: '세모' },
            { type: 'draw', prompt: '우리 교실에 붙일 표지를 그리고 뜻을 써요.' },
          ],
        },
      }),
      C({
        id: 'saf-job.e34.signs-field.wrap.sign-web', type: 'wrap', title: '표지 정리 생각 그물',
        method: '표지 정리 생각 그물', tool: 'mindmap', minutes: 8,
        levels: { easy: '가지 2개(금지·안내)에 카드 4장을 나눈다.', base: '가지 4개에 카드 8장을 나눈다.', challenge: '가지 4개에 카드 10장을 나누고 출구 3번에 새 표지 하나를 지어 쓴다.' },
        wrap: {
          teacher: '"오늘 찾은 표지를 네 가지로 정리해 볼까요?" 카드를 다 나누면 가지마다 색과 모양을 한 목소리로 말한다. 경고와 금지를 헷갈리는 학생에게 "하지 말라는 것인가요, 위험하니 조심하라는 것인가요?"라고 묻는다. 출구 3번에서 새 표지를 지을 때는 종류와 색·모양 규칙을 함께 적게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { topic: '안전 표지', slots: SIGNS, cards: ['출입 금지', '뜨거워요 주의', '보안경을 쓰세요', '비상구', '음식 금지', '미끄럼 주의', '장갑을 끼세요', '소화기'] }, prompt: '오늘 찾은 표지를 네 가지로 나누어요.', target: { sort: { 금지: ['출입 금지', '음식 금지'], 경고: ['뜨거워요 주의', '미끄럼 주의'], 지시: ['보안경을 쓰세요', '장갑을 끼세요'], 안내: ['비상구', '소화기'] } }, difficulty: 0.15,
              levels: {
                easy: { prompt: '표지 카드 4장을 금지와 안내로 나누어요.', toolOptions: { slots: ['금지', '안내'], cards: ['출입 금지', '비상구', '음식 금지', '소화기'] }, target: { sort: { 금지: ['출입 금지', '음식 금지'], 안내: ['비상구', '소화기'] } } },
                challenge: { prompt: '표지 카드 10장을 네 가지로 나누어요.', toolOptions: { cards: ['출입 금지', '뜨거워요 주의', '보안경을 쓰세요', '비상구', '음식 금지', '미끄럼 주의', '장갑을 끼세요', '소화기', '깨지는 유리 주의', '구급함'] }, target: { sort: { 금지: ['출입 금지', '음식 금지'], 경고: ['뜨거워요 주의', '미끄럼 주의', '깨지는 유리 주의'], 지시: ['보안경을 쓰세요', '장갑을 끼세요'], 안내: ['비상구', '소화기', '구급함'] } } },
              } },
            { type: 'choice', prompt: '비상구를 알려 주는 안내 표지는?', options: ['빨간 동그라미', '초록 네모', '노란 세모'], answer: 1, difficulty: 0.1, explain: '안내 표지는 초록 네모예요. 비상구와 구급함 자리를 알려 줘요.' },
            { type: 'short', prompt: '새 표지 하나를 지어 종류와 색·모양을 써요.' },
          ],
        },
        worksheet: {
          title: '안전 표지 네 가지',
          items: [
            { type: 'table', prompt: '표지 종류와 모양을 이어 써요.', columns: ['종류', '모양'], cells: [['금지', ''], ['경고', ''], ['지시', ''], ['안내', '']], answer: '동그라미(빗금), 세모, 동그라미, 네모' },
            { type: 'short', prompt: '우리 학교에서 본 표지 하나와 그 뜻을 써요.' },
          ],
        },
      }),
    );
  }

  PaperLessons.registerModules(M);
})();
