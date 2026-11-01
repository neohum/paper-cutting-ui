/* 창체 안전교육 직업안전 — 초5-6 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/safety-b.json 의 saf-job 초5-6.
 * 근거: 「학교안전교육 실시 기준 등에 관한 고시」(교육부고시 제2023-33호) 별표 2 초등학교 직업안전 1(일터에서 발생하는 산업 재해 알기)·
 *       2(일터 안전시설 현장 체험하기), 표준안 직업안전(예방관리: 산업재해·정리정돈·보호구) — sources/changche/research-safety.md.
 * 초5-6 기준: 사례의 원인과 결과, 자기 점검표, 작은 실천 계획, 간단한 자료(그래프) 읽기, 모둠 토의, 갈림길(dilemma)·기준표 글쓰기(rubric-writing).
 *   법 조문 번호·형량은 쓰지 않는다. 사례·인물·장소(마을 빵집·택배 창고)는 직접 지은 가상이다(가명 한두 글자). 그래프 수치는 모두 가상이고 화면에 밝힌다.
 *   다친 모습은 그리지 않는다('넘어질 뻔'·'며칠 일을 쉼' 정도로만).
 * 주제 2개(5학년 1 · 6학년 1) × 도입 2 · 활동 4 · 정리 2 = 계획 모듈 16개 전부. 추천 조합은 체계도 sequences(학년마다 2차시).
 *
 * 사람 확인: 근거 파일에는 고시 항목 제목뿐이라, 아래 문장은 일반 안전 수칙으로 쓴 것이다. 안전보건공단(KOSHA)·고용노동부 산업안전 안내,
 *   국민재난안전포털(소방시설) 가운데 알맞은 곳에서 확인한다.
 *   - accident-chain 전체: 사고 원인을 '사람·시설·환경' 세 갈래로 나누는 틀, 넘어짐·끼임·떨어짐·부딪힘을 대표 사고 모습으로 든 것(안전보건공단 재해 형태 분류).
 *   - accident-chain.intro.example-chart: 사고 모습별 수는 가상 예시다. '넘어짐이 가장 많다'는 그래프 모양이 실제 통계와 같은지 확인하지 않았다(화면에 '가상'으로 밝힘).
 *   - accident-chain.activity.chain-dilemma·prevent-plan: '젖은 바닥은 바로 닦고 미끄럼 주의 표시를 세운다', '통로에 물건을 쌓지 않는다', '움직이는 기계에 손을 넣지 않는다',
 *     '기계 덮개를 벗기고 쓰지 않는다', '흔들리는 사다리는 쓰지 않는다', '고장 난 전등은 어른께 알려 고친다'.
 *   - accident-chain.activity.prevent-plan: 고치는 차례(위험 찾기 → 어른께 알리기 → 고치기 → 다시 점검)는 이 자료가 정한 수업용 차례다.
 *   - facility-survey 전체: 조사 목록(소화기·비상구 유도등·미끄럼 방지 매트·보호구·비상벨·구급함)이 학교 일터에 있는 시설로 알맞은지 학교 시설 담당과 확인한다.
 *   - facility-survey.activity.report-dilemma: '유도등이 꺼져 있거나 비상구 앞이 막혀 있으면 어른(담임·행정실)께 알린다' — 학교의 실제 신고 경로(행정실·시설 담당)는 학교마다 다르다.
 *   - facility-survey.activity.result-chart: 장소별 시설 수는 가상 조사 결과다. 실제 조사 뒤에는 학급이 센 수로 바꾼다.
 *   - 현장 조사(급식실·과학실·행정실 방문)는 학교 일과·위생 규칙에 맞춰 담당 선생님과 미리 약속하고 들어간다(급식실 조리 공간 출입 여부 확인).
 */
(function () {
  const M = [];
  const mk = (topic, grade) => (suffix, o) => Object.assign({
    id: `saf-job.e56.${topic}.${suffix}`, schema: 'edu-module.v1', type: suffix.split('.')[0],
    domain: 'saf-job', band: '초5-6', topic: `saf-job.e56.${topic}`, grades: [grade],
  }, o);
  const art = (draw, banner, motif = 'star', color = 'buttercup') => ({ draw, banner, extra: [{ motif, x: 300, y: 96, color }] });
  const cut = (p) => String(p).replace(/[.?]$/, '');
  const EX = (tool, item) => ({ type: 'tool', tool, options: item.toolOptions, prompt: item.prompt, target: item.target, difficulty: item.difficulty, levels: item.levels });

  // ---- 카드 판 나누기(sortboard 글 카드·mindmap sort) ----
  // groups = { 칸: [카드…] }. 쉬움 = easySlots 칸만(칸마다 앞 2장), 기본 = 모든 칸, 도전 = extra 카드 + 함정 카드(어느 칸에도 넣지 않음)
  const inter = (slots, g) => { const out = []; const n = Math.max(...slots.map((s) => (g[s] || []).length)); for (let i = 0; i < n; i++) for (const s of slots) if ((g[s] || [])[i]) out.push(g[s][i]); return out; };
  const SORTX = (prompt, { slots, groups, easySlots, easy = 2, extra = {}, traps = [], topic }, d, more) => {
    const es = easySlots || slots;
    const ez = Object.fromEntries(es.map((s) => [s, groups[s].slice(0, easy)]));
    const full = Object.fromEntries(slots.map((s) => [s, [...groups[s], ...(extra[s] || [])]]));
    const fullCards = inter(slots, full); traps.forEach((t, i) => fullCards.splice(Math.min(fullCards.length, 1 + i * 3), 0, t));
    const count = (g) => Object.values(g).reduce((a, b) => a + b.length, 0);
    const base = Object.assign({ slots, cards: inter(slots, groups) }, topic ? { topic } : {});
    return Object.assign({
      prompt, toolOptions: base, target: { sort: groups }, difficulty: d,
      levels: {
        easy: { prompt: `${cut(prompt)}(칸 ${es.length}개·카드 ${count(ez)}장).`, toolOptions: { slots: es, cards: inter(es, ez) }, target: { sort: ez } },
        challenge: { prompt: `${cut(prompt)}(카드 ${fullCards.length}장${traps.length ? ', 넣지 않을 카드도 있어요' : ''}).`, toolOptions: { cards: fullCards }, target: { sort: full } },
      },
    }, more);
  };
  // 차례(story·kitchen order): steps = 바른 차례. easy = 쉬움에 남길 칸 번호, trap = 도전에서 끼우는 틀린 카드
  const mix = (list) => [list[2], list[0], ...list.slice(3), list[1]].filter((x) => x != null);
  const ORDER = (prompt, steps, { easy = [0, 1, 2], trap, motifs = [], mode, title } = {}, d, more) => {
    const cards = steps.map((t, i) => (motifs[i] ? { id: t, text: t, motif: motifs[i] } : t));
    const ez = easy.map((i) => cards[i]);
    const lv = { easy: { prompt: `${cut(prompt)}(카드 ${ez.length}장).`, toolOptions: { slots: ez.length, cards: mix(ez) }, target: { order: easy.map((i) => steps[i]) } } };
    if (trap) lv.challenge = { prompt: `${cut(prompt)}(틀린 카드 하나는 빼요).`, toolOptions: { slots: steps.length, cards: [...mix(cards), trap] }, target: { order: steps } };
    return Object.assign({ prompt, toolOptions: Object.assign(mode ? { mode } : {}, title ? { title } : {}, { slots: steps.length, cards: mix(cards) }), target: { order: steps }, difficulty: d, levels: lv }, more);
  };
  // 점검표(kitchen checklist): good = 표시할 항목, traps = 표시하지 않을 항목. 쉬움 = good 앞 easy개 + 함정 1, 기본 = good 앞 base개 + 함정 2, 도전 = good 전부 + 함정 전부
  const CHK = (prompt, title, good, traps, { easy = 3, base = 5 } = {}, d, more) => {
    const id = (t) => (good.indexOf(t) >= 0 ? `k${good.indexOf(t)}` : `t${traps.indexOf(t)}`);
    const build = (g, tr) => { const out = g.slice(); tr.forEach((t, i) => out.splice(Math.min(out.length, 1 + i * 2), 0, t)); return out.map((t) => ({ id: id(t), text: t })); };
    const ids = (g) => g.map(id);
    const lv = { easy: { prompt: `${cut(prompt)}(${easy}칸).`, toolOptions: { items: build(good.slice(0, easy), traps.slice(0, 1)) }, target: { checklist: ids(good.slice(0, easy)) } } };
    if (good.length > base || traps.length > 2) lv.challenge = { prompt: `${cut(prompt)}(${good.length}칸, 넣지 않을 것도 있어요).`, toolOptions: { items: build(good, traps) }, target: { checklist: ids(good) } };
    return Object.assign({ prompt, toolOptions: { mode: 'checklist', title, items: build(good.slice(0, base), traps.slice(0, 2)) }, target: { checklist: ids(good.slice(0, base)) }, difficulty: d, levels: lv }, more);
  };

  // ---- 갈림길(dilemma) ----
  // steps[i] = { text, ask?, motif?, good: [id, 글, 결과, [[누구, 영향, tone]…]], bad: [id, 글, 결과, 틀렸을 때 한 문장, [[…]], 끝 글?] }
  const imp = (list) => (list || []).map(([who, text, tone]) => ({ who, text, tone }));
  const TREE = (steps, depth, ending) => {
    const build = (i) => {
      const s = steps[i];
      const good = { id: s.good[0], text: s.good[1], result: s.good[2], impact: imp(s.good[3]) };
      if (i === depth - 1) good.ending = ending; else good.next = build(i + 1);
      const bad = { id: s.bad[0], text: s.bad[1], result: s.bad[2], why: s.bad[3], impact: imp(s.bad[4]), ending: s.bad[5] || '다른 길을 골랐다면 어땠을지 되돌아가 견주어 봐요.' };
      return { text: s.text, ask: s.ask || '어떻게 할까요?', motif: s.motif || 'house', choices: i % 2 ? [good, bad] : [bad, good] };
    };
    return build(0);
  };
  const goodPath = (steps, n) => steps.slice(0, n).map((s) => s.good[0]);
  // 갈림길 활동 문항 셋: ① 안전한 길 + 근거(쉬움 1번·기본 2번·도전 max번) ② 다른 길 끝까지 가 보고 견주기 ③ 모둠 토의(말하기)
  const DIL = ({ steps, ending, reasons, good, title, talk, conclude, max = 3 }) => {
    const opt = (n) => ({ title, scene: TREE(steps, n, ending), reasons });
    return [
      { prompt: `‘${title}’ 갈림길마다 안전한 선택을 고르고, 끝에서 근거를 골라요.`, toolOptions: opt(2), target: { path: [goodPath(steps, 2)], reasons: good.slice(0, 1), some: true }, difficulty: 0.3,
        levels: {
          easy: { prompt: `‘${title}’ 갈림길 한 번에서 안전한 선택을 고르고 근거를 골라요.`, toolOptions: opt(1), target: { path: [goodPath(steps, 1)], reasons: good.slice(0, 1), some: true } },
          challenge: { prompt: `‘${title}’ 갈림길 ${max === 3 ? '세' : '두'} 번을 지나 안전한 끝까지 가고, 알맞은 근거를 모두 골라요.`, toolOptions: opt(max), target: { path: [goodPath(steps, max)], reasons: good } },
        } },
      { prompt: `‘${title}’에서 되돌아가 다른 선택도 끝까지 가 보고 결과를 견주어요.`, toolOptions: opt(2), target: { explore: 2 }, difficulty: 0.25,
        levels: { easy: { toolOptions: opt(1) }, challenge: { prompt: `‘${title}’에서 서로 다른 끝 장면 세 곳을 가 보고 결과를 견주어요.`, toolOptions: opt(max), target: { explore: 3 } } }, conclude },
      { prompt: talk, free: true, talk: true, toolOptions: opt(2) },
    ];
  };

  // ---- 기준표 글쓰기(rubric-writing) 출구 ----
  // 쉬움 = 기준 2개 + 문장 틀 + 문장 수 sent[0], 기본 = 기준 3개 + 문장 수 sent[1], 도전 = 기준 3개 + crit[3](덧붙인 기준) + 꼭 넣을 낱말
  const RUBX = (prompt, { topic, starter, crit, must, chars = [30, 220], title, sent }) => ({
    type: 'tool', tool: 'rubric-writing', prompt, difficulty: 0.2,
    options: { topic, minChars: chars[0], maxChars: chars[1], title },
    target: { selfCheck: crit.slice(0, 3), chars, sentences: sent[1] },
    levels: {
      easy: { prompt: `${cut(prompt)}(문장 틀을 써도 돼요).`, toolOptions: { starter }, target: { selfCheck: crit.slice(0, 2), chars: [Math.max(15, chars[0] - 15), chars[1]], sentences: sent[0] } },
      challenge: { prompt: `${cut(prompt)}. ${crit[3]}`, target: { selfCheck: crit.slice(0, 4), chars: [chars[0] + 10, chars[1]], sentences: sent[1], mustInclude: must } },
    },
  });

  // ======== 5학년 · 산업 재해의 원인과 결과 (별표 2 초등 직업안전 1. 일터에서 발생하는 산업 재해 알기) ========
  {
    const X = mk('accident-chain', 5);
    // 가상 사례: 마을 빵집 창고의 하루(장면 카드)
    const CASE = [
      { id: 'busy', text: '바쁜 아침, 상자를 통로에 쌓아 둠', motif: 'house' },
      { id: 'rain', text: '비가 와서 입구 바닥이 젖음', motif: 'cloud' },
      { id: 'slip', text: '쟁반을 든 직원이 미끄러짐', motif: 'star' },
      { id: 'rest', text: '직원이 며칠 일을 쉬고 빵이 모자람', motif: 'leaf' },
    ];
    const KIND = [['넘어짐', 12], ['부딪힘', 7], ['끼임', 5], ['떨어짐', 4]];
    M.push(
      X('intro.case-order', {
        title: '빵집 창고 사례 차례 놓기', method: '가상 사례 장면 차례 놓기', tool: 'story', minutes: 5,
        levels: { easy: '교사가 장면 3장(쌓아 둔 상자·미끄러짐·일을 쉼)을 함께 놓는다.', base: '장면 4장을 학생이 차례대로 놓도록 묻는다.', challenge: '장면 4장을 놓은 뒤 원인이 된 장면 두 장을 손으로 짚어 말하게 한다.' },
        intro: {
          teacher: '"이것은 지어낸 마을 빵집 이야기예요. 무슨 일이 어떤 차례로 일어났을까요?" 시연 단추로 장면 4장이 차례대로 놓이는 모습을 보인다. "미끄러진 사람이 조심을 안 해서 그래요"라는 말이 나오면 "상자는 누가 쌓았고, 바닥은 왜 젖었을까요? 원인이 하나뿐일까요?"라고 되묻는다. 오늘은 사고의 원인을 사람·시설·환경으로 나누어 보고 막을 수 있었던 지점을 찾는다고 밝힌다.',
          student: '이야기 장면을 보고, 사고가 일어나기 전에 무엇이 달랐다면 좋았을지 한 가지 짝에게 말해 보아요.',
          demo: { tool: 'story', options: { mode: 'order', slots: 4, cards: [CASE[2], CASE[0], CASE[3], CASE[1]], title: '마을 빵집 창고(가상 사례)' }, sequence: [{ order: CASE.map((c) => c.id) }] },
          art: art('a paper-cut bakery storeroom with boxes piled in the aisle and a wet floor near the door on a rainy morning', '사고는 어떤 차례로 생겼을까?', 'cloud', 'sky'),
        },
        notes: '사례는 지어낸 것이다. 다친 모습은 말하지 않고 "일을 쉬게 됐다"까지만 다룬다.',
      }),
      X('intro.example-chart', {
        title: '일터 사고 모습 그림그래프', method: '예시 자료 그래프 읽기', tool: 'chart', minutes: 5,
        levels: { easy: '교사가 그림 수를 함께 세어 값을 말해 준다.', base: '값을 말하지 않고 학생이 그림을 세어 가장 많은 모습을 찾는다.', challenge: '가장 많은 모습을 찾고, 그것이 많을 수 있는 까닭을 하나 짐작해 말한다.' },
        intro: {
          teacher: '"이 그래프는 실제 통계가 아니라 수업을 위해 만든 예시예요. 어떤 사고 모습이 가장 많게 그려져 있나요?" 시연 단추로 \'넘어짐\'이 골라지는 모습을 보인다. "넘어지는 건 작은 사고라 괜찮아요"라는 말에는 "넘어지면서 무거운 물건을 떨어뜨리면 어떻게 될까요? 작은 원인이 큰 결과로 이어질 수 있어요"라고 되묻는다.',
          student: '그래프에서 가장 많은 사고 모습을 찾고, 학교나 집에서 비슷한 일이 생길 만한 곳을 하나 떠올려 보아요.',
          demo: { tool: 'chart', options: { type: 'picture', mode: 'read', title: '일터 사고 모습(가상 예시)', unit: '건', xLabel: '사고 모습', yLabel: '건수', data: KIND, icons: [{ value: 10, name: '10건' }, { value: 1, name: '1건' }], icon: 'star', question: '가장 많은 모습은?', choices: KIND.map(([n]) => n) }, sequence: [{ pick: 0 }] },
          art: art('a paper picture graph with rows of small paper stars beside icons of slipping, bumping, a caught hand and a falling box', '어떤 사고가 많을까?(예시)', 'star', 'buttercup'),
        },
        notes: '그래프 수치는 가상이다. 실제 산업 재해 통계라고 말하지 않는다.',
      }),
      X('activity.cause-sort', {
        title: '원인을 사람·시설·환경으로', method: '원인을 사람·시설·환경으로 나누기', tool: 'sortboard', minutes: 14,
        levels: { easy: '칸 2개(사람·시설)에 카드 4장을 나누고, 틀린 칸에 넣으면 까닭을 듣고 되돌아온다.', base: '칸 3개(사람·시설·환경)에 카드 6장을 나눈다.', challenge: '칸 3개에 카드 8장과 원인이 아닌 함정 카드를 나누고, 두 칸에 걸치는 원인은 모둠 말하기 문항에서 따진다.' },
        activity: {
          title: '사고 원인 바구니에 나누기', tool: 'sortboard',
          teacher: '"\'통로에 상자를 쌓아 둠\'은 사람이 한 일일까요, 시설의 문제일까요?" 카드를 넣을 때마다 왜 그 바구니인지 한 문장으로 말하게 한다. "다친 사람만 조심하면 사고가 안 나요"라는 학생에게 "고장 난 전등이나 젖은 바닥은 그 사람이 조심한다고 사라질까요? 원인은 여러 개가 겹쳐요"라고 묻는다. 비·어둠처럼 사람이 바꾸기 어려운 것은 환경 칸이라는 점을 짚는다.',
          task: '빵집과 급식실 사례의 원인 카드를 사람·시설·환경 바구니에 나누어 넣어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTX('빵집 창고 사례(가상)의 원인 카드를 바구니에 나누어요.', { slots: ['사람', '시설', '환경'], easySlots: ['사람', '시설'],
              groups: { 사람: ['상자를 통로에 쌓아 둠', '바빠서 뛰어다님'], 시설: ['창고 전등이 고장 남', '미끄럼 방지 매트가 없음'], 환경: ['비가 와서 바닥이 젖음', '아침이라 창고가 어두움'] },
              extra: { 사람: ['젖은 바닥을 닦지 않음'], 시설: ['선반이 모자람'] }, traps: ['빵 냄새가 좋음'] }, 0.25),
            SORTX('급식실 사례(가상)의 원인 카드를 바구니에 나누어요.', { slots: ['사람', '시설', '환경'], easySlots: ['사람', '시설'],
              groups: { 사람: ['장갑 없이 뜨거운 통을 듦', '바닥 물기를 그대로 둠'], 시설: ['배수구 덮개가 깨짐', '손잡이 없는 큰 통'], 환경: ['김이 차서 앞이 흐림', '한여름이라 매우 더움'] },
              extra: { 사람: ['혼자 무거운 통을 옮김'], 환경: ['점심 전이라 몹시 바쁨'] }, traps: ['급식 메뉴가 맛있음'] }, 0.3, { conclude: '사고에는 사람·시설·환경 원인이 겹쳐 있어요. 하나만 고쳐도 사고를 줄일 수 있어요.' }),
            { prompt: '모둠에서 \'바쁜 아침이라 상자를 쌓아 둠\'이 사람·환경 어느 쪽인지, 두 쪽 다인지 이야기해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '빵집 사례의 원인을 칸마다 하나씩 써요.', columns: ['사람', '시설', '환경'], cells: [['', '', '']] }] },
        notes: '카드 한 장의 정답 바구니는 하나다. 두 칸에 걸치는 원인은 세 번째 말하기 문항에서 다룬다.',
      }),
      X('activity.chain-dilemma', {
        title: '바쁜 빵집, 정리를 미룰까', method: '결과가 이어지는 일터 갈림길', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번(상자를 쌓아 둘지)에서 고르고 근거 한 장을 고른다.', base: '갈림 2번(젖은 바닥)을 지나 근거를 고른다.', challenge: '갈림 3번(깜빡이는 전등)까지 지나 알맞은 근거를 모두 고르고, 다른 길의 결과와 견준다.' },
        activity: {
          title: '갈림길: 바쁜 빵집의 아침', tool: 'dilemma',
          teacher: '"조금 늦어지더라도 정리를 먼저 하면 무엇이 달라질까요?" 고를 때마다 결과 칸과 영향 칸을 소리 내어 읽게 한다. "바쁠 때는 빨리 하는 게 먼저예요"라는 학생에게 "통로에 둔 상자 하나가 넘어짐으로 이어지면, 오히려 더 오래 일을 못 하게 되지 않을까요?"라고 묻는다. 작은 미룸이 이어져 큰 결과가 된다는 점, 원인 하나만 없애도 사슬이 끊긴다는 점을 짚는다.',
          task: '빵집 일을 돕는 소이가 되어 갈림길마다 고르고, 결과를 읽은 뒤 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '바쁜 빵집의 아침',
            steps: [
              { text: '소이는 가족 빵집 일을 도와요. 밀가루 상자가 한꺼번에 와서 모두 바빠요.', motif: 'house',
                good: ['shelf', '통로를 비우고 선반에 올린다', '조금 늦었지만 통로가 넓어요.', [['일하는 사람', '걸려 넘어지지 않아요', 1]]],
                bad: ['pile', '바쁘니 통로에 그냥 쌓아 둔다', '쟁반을 든 삼촌이 상자에 걸릴 뻔해요.', '통로에 쌓은 물건은 걸려 넘어지는 원인이 돼요.', [['일하는 사람', '걸려 넘어질 위험', -1]]] },
              { text: '비가 와서 입구 바닥이 젖었어요. 곧 손님이 들어와요.', motif: 'cloud',
                good: ['wipe', '바로 닦고 미끄럼 주의 표시를 세운다', '손님도 직원도 조심해서 걸어요.', [['손님', '미끄러지지 않아요', 1]]],
                bad: ['later', '손님이 다 가면 닦기로 한다', '들어오던 손님이 미끄러질 뻔해요.', '젖은 바닥은 미루지 말고 바로 닦아요.', [['손님', '미끄러질 위험', -1]]] },
              { text: '창고 전등이 깜빡거려 안이 어두워요.', motif: 'star',
                good: ['tell', '어른께 알려 전등을 고치게 한다', '밝아진 창고에서 상자가 잘 보여요.', [['일하는 사람', '잘 보고 다녀요', 1]]],
                bad: ['used', '익숙한 곳이니 그냥 쓴다', '어두운 곳에서 상자 모서리에 부딪혀요.', '고장 난 시설은 알려서 고쳐야 사고가 줄어요.', [['일하는 사람', '부딪힐 위험', -1]]] },
            ],
            ending: '정리하고 닦고 알린 덕분에 사고의 사슬이 끊겼어요.',
            reasons: [{ id: 'remove', text: '원인을 미리 없애면 사고를 막는다' }, { id: 'chain', text: '작은 미룸이 이어지면 큰 사고가 된다' }, { id: 'luck', text: '사고는 운이 나빠서 생긴다', why: '원인을 찾으면 막을 수 있는 사고가 많아요.' }, { id: 'self', text: '다친 사람만 조심하면 된다', why: '바닥·전등·통로처럼 함께 고칠 원인이 있어요.' }],
            good: ['remove', 'chain'],
            talk: '모둠에서 "바쁠수록 정리를 먼저 해야 하는 까닭"을 한 문장씩 말해요.',
            conclude: '바빠도 정리·청소·고장 알리기를 미루지 않으면 사고의 사슬이 끊겨요.',
          }),
        },
        worksheet: { items: [{ type: 'choice', prompt: '입구 바닥이 젖었어요. 가장 먼저 할 일은 무엇인가요?', options: ['손님이 다 간 뒤 닦는다', '바로 닦고 주의 표시를 세운다', '빨리 지나가라고 말한다'], answer: '바로 닦고 주의 표시를 세운다' }] },
        notes: '소이는 지어낸 인물이다. 학생이 일하는 상황이 아니라 가족 가게를 돕는 장면으로 다룬다.',
      }),
      X('activity.prevent-plan', {
        title: '막을 지점 점검표', method: '막을 지점 계획하기', tool: 'kitchen', minutes: 14,
        levels: { easy: '고칠 점 3칸(함정 1칸 섞임)을 고르고 고치는 차례 카드 3장을 놓는다.', base: '고칠 점 5칸(함정 2칸 섞임)을 고르고 차례 카드 4장을 놓는다.', challenge: '고칠 점 5칸에 함정이 더 섞인 점검표를 고르고, 차례 카드 4장 사이의 틀린 카드를 빼고 놓는다.' },
        activity: {
          title: '사고를 막을 지점 고르고 차례 정하기', tool: 'kitchen',
          teacher: '"빵집 사례에서 무엇을 고쳤다면 사고가 나지 않았을까요?" 점검표를 하나씩 소리 내어 읽고, 고를 때마다 사람·시설·환경 가운데 무엇을 고치는 것인지 말하게 한다. "빵 진열을 예쁘게 바꿔요"를 고르는 학생에게 "그것이 넘어짐을 막아 줄까요?"라고 묻는다. 고친 뒤에도 다시 점검해야 같은 일이 되풀이되지 않는다는 점을 짚는다.',
          task: '사례에서 고칠 점을 점검표에 표시하고, 고치는 차례를 정해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            CHK('빵집 창고(가상 사례)에서 고칠 점만 표시해요.', '빵집 창고 고칠 점', ['통로의 상자 치우기', '젖은 바닥 바로 닦기', '고장 난 전등 고치기', '미끄럼 방지 매트 깔기', '무거운 것은 둘이 들기'], ['빵 진열 예쁘게 하기', '간판 색 바꾸기', '음악 크게 틀기'], { easy: 3, base: 5 }, 0.2),
            CHK('급식실(가상 사례)에서 고칠 점만 표시해요.', '급식실 고칠 점', ['깨진 배수구 덮개 바꾸기', '바닥 물기 바로 닦기', '뜨거운 통은 장갑 끼고 들기', '손잡이 있는 통 쓰기', '김이 차면 환기하기'], ['반찬 가짓수 늘리기', '식판 색 바꾸기', '배식 시간 앞당기기'], { easy: 3, base: 5 }, 0.25),
            ORDER('위험을 고치는 차례대로 카드를 놓아요.', ['위험한 곳 찾기', '어른께 알리기', '함께 고치기', '다시 점검하기'], { mode: 'order', easy: [0, 1, 2], trap: '보고도 모른 척하기' }, 0.25, { conclude: '찾고, 알리고, 고치고, 다시 점검하면 같은 사고가 되풀이되지 않아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '빵집 사례에서 가장 먼저 고치고 싶은 점 하나와 그 까닭을 써요.' }] },
      }),
      X('activity.team-talk', {
        title: '모둠 토의: 누가 무엇을', method: '모둠 토의: 누가 무엇을', tool: 'timer', minutes: 14,
        levels: { easy: '역할을 교사가 정해 주고, 토의 차례 카드 3장·토의 시간 1번·기록 칸 2개를 쓴다.', base: '모둠이 역할을 정하고, 토의 차례 카드 4장·토의 시간 2번·기록 칸 3개를 쓴다.', challenge: '차례 카드 4장·기록 칸 3개에 토의 시간 3번을 맞추고, 전체 시간을 본 뒤 기록한 수를 다른 모둠과 견주어 말한다.' },
        activity: {
          title: '사례 맡아 토의하고 원인 수 적기', tool: 'timer',
          teacher: '"모둠마다 사례 하나를 맡아요. 읽는 사람, 적는 사람, 발표할 사람을 정해 볼까요?" 토의 시간 타이머를 맞춘 뒤 원인을 사람·시설·환경으로 세어 기록판에 적게 한다. "고칠 사람은 사장님 한 명이에요"라는 학생에게 "바닥을 닦는 사람, 전등을 고치는 사람, 상자를 옮기는 사람은 같은 사람일까요? 모두가 함께 맡아요"라고 묻는다. 시간은 우리 반 약속이라는 점을 밝힌다.',
          task: '토의 차례를 정하고 시간을 맞춘 뒤, 모둠이 찾은 원인 수를 기록판에 적어요.', levels: { easy: {}, base: {}, challenge: { showTotal: true } },
          items: [
            { prompt: '모둠 토의 차례 카드를 바르게 놓아요.', toolOptions: { title: '모둠 토의 차례', cards: mix(['사례 읽기', '원인 찾기', '고칠 사람·시설 정하기', '발표하기']) }, target: { order: ['사례 읽기', '원인 찾기', '고칠 사람·시설 정하기', '발표하기'] }, difficulty: 0.2,
              levels: {
                easy: { prompt: '모둠 토의 차례 카드를 바르게 놓아요(카드 3장).', toolOptions: { cards: mix(['사례 읽기', '원인 찾기', '발표하기']) }, target: { order: ['사례 읽기', '원인 찾기', '발표하기'] } },
              } },
            { prompt: '토의 3분을 2번 하도록 타이머를 맞춰요(우리 반 약속).', toolOptions: { title: '토의 시간(우리 반 약속)', timeUnit: 'min', plan: { work: 1, rest: 0, rounds: 1 } }, target: { plan: { work: 3, rounds: 2 } }, difficulty: 0.2,
              levels: { easy: { prompt: '토의 3분을 1번 하도록 타이머를 맞춰요(우리 반 약속).', target: { plan: { work: 3, rounds: 1 } } }, challenge: { prompt: '토의 3분을 3번 하도록 타이머를 맞춰요(우리 반 약속).', target: { plan: { work: 3, rounds: 3 } } } } },
            { prompt: '우리 모둠이 찾은 원인 수를 기록판에 적어요.', toolOptions: { title: '우리 모둠 원인 기록', fields: [{ label: '사람', unit: '개', step: 1 }, { label: '시설', unit: '개', step: 1 }, { label: '환경', unit: '개', step: 1 }] }, target: { records: true }, difficulty: 0.15,
              levels: { easy: { prompt: '우리 모둠이 찾은 사람·시설 원인 수를 적어요.', toolOptions: { fields: [{ label: '사람', unit: '개', step: 1 }, { label: '시설', unit: '개', step: 1 }] } } } },
            { prompt: '다른 모둠의 기록과 견주어, 고칠 사람과 시설을 한 가지씩 발표해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 모둠의 역할과 고칠 것을 써요.', columns: ['역할', '맡은 사람(별명)', '고칠 것'], cells: [['읽기', '', ''], ['적기', '', ''], ['발표', '', '']] }] },
        notes: '토의 시간은 우리 반 약속 값이다. 모둠 수가 많으면 사례(빵집·급식실)를 나누어 맡긴다.',
      }),
      X('wrap.lesson-write', {
        title: '사례에서 배운 점 쓰기', method: '사례에서 배운 점 쓰기', tool: 'rubric-writing', minutes: 8,
        levels: { easy: '문장 틀을 쓰고 2문장, 기준 2개(원인·결과)로 점검한다.', base: '3문장을 쓰고 기준 3개(원인·결과·예방)로 점검한다.', challenge: '3문장을 쓰고 기준 3개에 더해 친구 글 하나를 기준표로 점검했는지 표시한다.' },
        wrap: {
          teacher: '"빵집 사례에서 배운 점을 원인 → 결과 → 막는 방법 차례로 써 볼까요?" 기준표를 함께 읽고 쓴 뒤 스스로 점검하게 한다. "조심해야겠다"처럼 막연하게 쓴 학생에게 "무엇을, 누가, 어떻게 고치면 될까요?"라고 물어 예방을 구체적으로 쓰게 한다. 도전 학생은 짝과 글을 바꿔 기준표로 점검해 준다.',
          exitTicket: [
            RUBX('빵집 사례에서 배운 점을 원인·결과·예방이 들어가게 써요.', { topic: '빵집 사례(가상)에서 배운 점(원인 → 결과 → 예방)', title: '배운 점 쓰기', starter: '사고의 원인은 ~이었다. 그래서 ~. 앞으로는 ~', crit: ['원인을 썼다', '결과를 썼다', '막는 방법을 썼다', '친구 글 하나를 기준표로 점검했다'], must: [['원인', '때문에']], chars: [40, 240], sent: [[2, 3], [3, 4]] }),
            { type: 'choice', prompt: '빵집 사례에 대한 말로 알맞은 것은 무엇인가요?', options: ['미끄러진 사람만 잘못했다', '여러 원인이 겹쳐 사고가 났다', '비가 와서 어쩔 수 없었다'], answer: 1, difficulty: 0.2, explain: '상자·젖은 바닥·어두운 창고처럼 여러 원인이 겹쳤어요.' },
            { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '원인을 알면 막을 수 있어요',
          items: [
            { type: 'short', prompt: '사례에서 배운 점을 원인·결과·예방이 들어가게 한 문장으로 써요.' },
            { type: 'check', prompt: '내 글을 점검해요.', options: ['원인이 있나요', '결과가 있나요', '막는 방법이 있나요'] },
          ],
          easy: { note: '원인 → 결과 → 막는 방법 차례로 써요.', items: [{ type: 'draw', prompt: '사고를 막은 빵집 창고 모습을 그려요.' }] },
        },
      }),
      X('wrap.cause-web', {
        title: '결과와 원인 그물 정리', method: '원인-결과 그물 정리', tool: 'mindmap', minutes: 8,
        levels: { easy: '결과 가지 2개(넘어짐·부딪힘)에 원인 카드 4장을 잇는다.', base: '결과 가지 3개에 원인 카드 6장을 잇는다.', challenge: '결과 가지 3개에 원인 카드 8장과 함정 카드를 나누고, 고른 까닭을 말로 덧붙인다.' },
        wrap: {
          teacher: '"넘어짐이라는 결과에는 어떤 원인들이 이어져 있었나요?" 가지에 원인 카드를 잇고 한 가지를 골라 "○○ 때문에 ○○이 생겼다"로 말하게 한다. "끼임은 기계가 나빠서만 생겨요"라는 학생에게 "덮개를 벗긴 사람, 손을 넣은 행동은 어떤가요?"라고 되물어 사람·시설 원인이 함께 있음을 짚는다.',
          exitTicket: [
            EX('mindmap', SORTX('결과 가지마다 이어지는 원인 카드를 넣어요.', { topic: '일터 사고', slots: ['넘어짐', '부딪힘', '끼임'], easySlots: ['넘어짐', '부딪힘'],
              groups: { 넘어짐: ['젖은 바닥', '통로에 쌓은 상자'], 부딪힘: ['어두운 창고', '뛰어다니기'], 끼임: ['덮개 벗긴 기계', '움직이는 기계에 손 넣기'] },
              extra: { 넘어짐: ['미끄럼 매트 없음'], 부딪힘: ['모서리 보호대 없음'] }, traps: ['빵 냄새'] }, 0.2)),
            { type: 'choice', prompt: '사고를 막는 방법으로 가장 알맞은 것은 무엇인가요?', options: ['다친 뒤에 조심한다', '원인을 미리 찾아 없앤다', '운이 좋기를 바란다'], answer: 1, difficulty: 0.15, explain: '원인을 미리 없애면 결과로 이어지지 않아요.' },
            { type: 'short', prompt: '그물에서 원인 하나를 골라 "○○ 때문에 ○○이 생긴다"로 써요.' },
          ],
        },
        worksheet: {
          title: '결과에는 원인이 이어져 있어요',
          items: [
            { type: 'table', prompt: '결과마다 원인을 하나씩 써요.', columns: ['결과', '원인'], cells: [['넘어짐', ''], ['부딪힘', ''], ['끼임', '']] },
            { type: 'short', prompt: '우리 학교에서 넘어짐을 막으려면 무엇을 고치면 좋을지 써요.' },
          ],
        },
      }),
    );
  }

  // ======== 6학년 · 일터 안전시설 조사와 체험 보고 (별표 2 초등 직업안전 2. 일터 안전시설 현장 체험하기) ========
  {
    const X = mk('facility-survey', 6);
    const SCHOOL = [
      { name: '우리 교실', icon: 'school', at: [0, 0] }, { name: '급식실', icon: 'market', at: [5, 3] }, { name: '행정실', icon: 'office', at: [2, 0] },
      { name: '과학실', icon: 'dot', at: [4, 1] }, { name: '보건실', icon: 'hospital', at: [1, 2] }, { name: '체육 창고', icon: 'house', at: [3, 3] },
    ];
    const FOUND = [['급식실', 5], ['과학실', 4], ['행정실', 3], ['체육 창고', 1]];
    M.push(
      X('intro.guess-scale', {
        title: '우리 학교 안전 점수 짐작', method: '우리 학교 안전 점수 짐작', tool: 'emotion', minutes: 5,
        levels: { easy: '눈금 1·3·5 세 곳 가운데 골라 손을 들게 한다.', base: '눈금 5칸 가운데 하나를 고르게 한다.', challenge: '눈금을 고르고, 그렇게 짐작한 근거 하나를 말하게 한다.' },
        intro: {
          teacher: '"우리 학교 급식실은 일하는 분들에게 얼마나 안전할까요? 눈금으로 짐작해 볼까요?" 시연 단추로 눈금이 움직이는 모습을 보인다. "소화기가 있으니까 아주 안전해요"라는 말에는 "소화기가 어디 있는지, 쓸 수 있는 상태인지는 어떻게 알까요? 있다고 저절로 안전한 것은 아니에요"라고 되묻는다. 오늘은 짐작이 아니라 직접 조사해서 확인한다고 밝힌다.',
          student: '급식실·행정실·과학실 가운데 한 곳을 골라 얼마나 안전할지 짐작하고, 그렇게 생각한 까닭을 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'scale', situation: '우리 학교 급식실은 일하는 분들에게 얼마나 안전할까요?', feeling: '편안함', steps: 5, scaleLabels: { 1: '조금 걱정돼요', 5: '아주 안전해요' } }, sequence: [{ level: 2 }, { level: 4 }] },
          art: art('a paper school building cut open to show a cafeteria kitchen, an office and a science room, with a paper scale gauge beside it', '우리 학교 일터는 얼마나 안전할까?', 'sun', 'mint'),
        },
      }),
      X('intro.survey-map', {
        title: '조사할 곳 지도에 찍기', method: '조사할 곳 지도에 찍기', tool: 'map', minutes: 5,
        levels: { easy: '교사가 한 곳(급식실)을 함께 찍는다.', base: '조사할 일터 세 곳(급식실·행정실·과학실)을 차례로 찍는다.', challenge: '세 곳을 찍고 우리 교실에서 출발하는 이동 차례를 말로 정한다.' },
        intro: {
          teacher: '"학교에도 어른들이 일하는 일터가 있어요. 어디일까요?" 시연 단추로 급식실 → 과학실 → 행정실에 핀이 꽂히는 모습을 보인다. "일터는 회사나 공장만 있어요"라는 말에는 "급식실에서 일하는 분들, 행정실에서 일하는 분들의 일터는 어디일까요?"라고 되묻는다. 조사 때는 담당 선생님과 약속한 시간에만 들어간다는 점을 미리 말한다.',
          student: '우리 학교에서 어른들이 일하는 곳을 떠올리고, 그 가운데 조사하고 싶은 곳 하나를 말해 보아요.',
          demo: { tool: 'map', options: { grid: [6, 4], title: '우리 학교(칸 지도)', legend: false, places: SCHOOL }, sequence: [{ pin: [5, 3] }, { pin: [4, 1] }, { pin: [2, 0] }] },
          art: art('a paper-cut school map seen from above with paper pins on the cafeteria, the office and the science room', '어디를 조사할까?', 'house', 'peach'),
        },
        notes: '칸 지도는 우리 학교 배치에 맞게 교사가 말로 바꾸어 안내한다. 급식실 조리 공간 출입은 담당 선생님과 미리 약속한다.',
      }),
      X('activity.survey-check', {
        title: '현장 조사 점검표', method: '현장 조사 점검표', tool: 'kitchen', minutes: 14,
        levels: { easy: '조사 목록 4칸(함정 1칸 섞임)에서 조사할 것을 고른다.', base: '조사 목록 6칸(함정 2칸 섞임)에서 고른다.', challenge: '조사 목록 6칸에 함정이 더 섞인 표에서 고르고, 현장에서 본 시설의 상태를 짝에게 메모처럼 말한다.' },
        activity: {
          title: '안전시설 조사 목록과 현장 확인', tool: 'kitchen',
          teacher: '"조사할 때 무엇을 볼지 미리 정해 두면 빠뜨리지 않아요." 점검표를 하나씩 소리 내어 읽고 조사할 것만 고르게 한다. "사진만 찍어 오면 조사 끝이에요"라는 학생에게 "사진에 소화기가 쓸 수 있는 상태인지, 비상구 앞이 비어 있는지까지 보일까요? 보고, 적고, 물어보는 것이 조사예요"라고 묻는다. 현장에서는 "만지지 말고 눈으로 보고 적어요"라고 미리 약속한다.',
          task: '급식실과 과학실에서 조사할 안전시설을 고르고, 현장에서 실제로 본 것을 표시해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            CHK('급식실에서 조사할 안전시설만 표시해요.', '급식실 조사 목록', ['소화기', '비상구 유도등', '미끄럼 방지 매트', '조리용 장갑·앞치마', '비상벨', '구급함'], ['오늘 메뉴', '식탁 색깔', '창문 커튼 무늬'], { easy: 4, base: 6 }, 0.2),
            CHK('과학실에서 조사할 안전시설만 표시해요.', '과학실 조사 목록', ['소화기', '눈 씻는 곳', '보안경', '환기 장치', '비상구 유도등', '구급함'], ['실험 책 표지', '칠판 크기', '화분 개수'], { easy: 4, base: 6 }, 0.25),
            { prompt: '현장 조사에서 실제로 확인한 것에 스스로 표시해요.', toolOptions: { mode: 'checklist', title: '현장에서 확인했어요', items: [{ id: 'where', text: '시설 자리 확인' }, { id: 'state', text: '쓸 수 있는 상태인지 보기' }, { id: 'clear', text: '앞이 막혀 있지 않은지' }, { id: 'ask', text: '일하는 분께 물어보기' }] }, target: { selfCheck: true }, difficulty: 0.1, conclude: '조사는 자리·상태·막힘을 보고, 적고, 물어보는 것까지예요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '조사한 시설의 자리와 상태를 써요.', columns: ['시설', '자리', '상태(좋음·고칠 점)'], cells: [['소화기', '', ''], ['비상구 유도등', '', ''], ['미끄럼 방지 매트', '', '']] }] },
        notes: '현장 조사는 학교 일과에 맞춰 담당 선생님과 약속한 뒤 짧게 한다. 시설을 만지거나 작동시키지 않는다.',
      }),
      X('activity.result-chart', {
        title: '조사 결과 막대그래프', method: '조사 결과 그래프 만들기', tool: 'chart', minutes: 14,
        levels: { easy: '조사 장소 3곳의 막대를 그리고(첫 막대는 그려 줌) 값이 보이는 그래프를 읽는다.', base: '조사 장소 4곳의 막대를 그리고 가장 적은 곳을 읽는다.', challenge: '4곳의 막대를 그린 뒤 그래프로 알 수 있는 것과 없는 것을 가려 부족한 곳을 판단한다.' },
        activity: {
          title: '시설 수 막대그래프 그리고 읽기', tool: 'chart',
          teacher: '"이 수는 수업용으로 만든 가상 조사 결과예요. 실제로 조사한 뒤에는 우리가 센 수로 바꿔요." 막대 끝을 눈금에 맞추게 한다. "시설이 가장 많은 급식실이 가장 안전해요"라는 학생에게 "시설 수가 많으면 다 쓸 수 있는 상태일까요? 그래프는 수만 보여 줘요. 상태는 점검표에서 봐야 해요"라고 묻는다.',
          task: '가상 조사 결과로 막대그래프를 그리고, 시설이 부족한 곳을 찾아요.', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            { prompt: '조사 결과 표를 보고 장소별 안전시설 수 막대그래프를 완성해요(가상 자료).', toolOptions: { type: 'bar', mode: 'build', title: '장소별 안전시설 수(가상 조사)', unit: '개', xLabel: '장소', yLabel: '시설 수', data: FOUND, given: [0], max: 6 }, target: { build: true }, difficulty: 0.25,
              levels: { easy: { prompt: '장소 세 곳의 안전시설 수 막대그래프를 완성해요(가상 자료).', toolOptions: { data: FOUND.slice(0, 3) } } } },
            { prompt: '안전시설이 가장 적은 곳은 어디인가요?(가상 자료)', toolOptions: { type: 'bar', mode: 'read', title: '장소별 안전시설 수(가상 조사)', unit: '개', data: FOUND, max: 6, choices: FOUND.map(([n]) => n), question: '가장 적은 곳은?' }, target: { pick: 3 }, difficulty: 0.15,
              levels: { easy: { prompt: '세 곳 가운데 안전시설이 가장 적은 곳은?(가상 자료)', toolOptions: { data: FOUND.slice(0, 3), choices: FOUND.slice(0, 3).map(([n]) => n) }, target: { pick: 2 } } } },
            { prompt: '그래프로 알 수 있는 것으로 알맞은 것을 골라요(가상 자료).', toolOptions: { type: 'bar', mode: 'read', title: '장소별 안전시설 수(가상 조사)', unit: '개', data: FOUND, max: 6, choices: ['체육 창고는 시설 수가 가장 적다', '급식실 시설은 모두 쓸 수 있다', '과학실이 가장 위험하다'], question: '알 수 있는 것은?', why: ['', '그래프는 수만 보여 줘요. 상태는 점검표에서 봐요.', '그래프에서 과학실은 가장 적지 않아요.'] }, target: { pick: 0 }, difficulty: 0.3,
              conclude: '그래프는 시설 수를 보여 줘요. 쓸 수 있는 상태인지는 점검표로 함께 판단해요.' },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '그래프(가상)에서 시설을 더 살펴봐야 할 곳은?', options: ['급식실', '과학실', '행정실', '체육 창고'], answer: '체육 창고' }] },
        notes: '그래프 수치는 수업용 가상 자료다. 실제 조사를 했다면 학급이 센 수로 바꾸어 다시 그린다.',
      }),
      X('activity.improve-web', {
        title: '장소별 개선점 그물', method: '개선점 생각 그물', tool: 'mindmap', minutes: 14,
        levels: { easy: '장소 가지 2개(급식실·체육 창고)에 개선점 카드 4장을 넣는다.', base: '장소 가지 3개에 개선점 카드 6장을 넣는다.', challenge: '가지 3개에 카드 8장과 함정 카드를 나누고, 근거 잇기 문항에서 장소마다 근거 카드를 하나씩 잇는다.' },
        activity: {
          title: '장소 가지에 개선점 넣기', tool: 'mindmap',
          teacher: '"조사에서 찾은 고칠 점을 장소별로 모아 볼까요?" 카드를 넣을 때마다 "왜 이 장소에 필요할까?"를 한 문장으로 말하게 한다. "시설이 있으니 더 고칠 것이 없어요"라는 학생에게 "소화기가 있어도 앞에 상자가 쌓여 있으면 어떨까요? 있는 것을 쓸 수 있게 하는 것도 개선이에요"라고 묻는다.',
          task: '장소 가지마다 알맞은 개선점 카드를 넣고, 개선이 필요한 근거를 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTX('장소 가지마다 알맞은 개선점 카드를 넣어요.', { topic: '우리 학교 일터', slots: ['급식실', '체육 창고', '과학실'], easySlots: ['급식실', '체육 창고'],
              groups: { 급식실: ['젖은 바닥에 매트 깔기', '뜨거운 통은 둘이 들기'], '체육 창고': ['높은 선반 물건 내리기', '어두운 창고에 전등 달기'], 과학실: ['보안경 수 채우기', '눈 씻는 곳 앞 비우기'] },
              extra: { 급식실: ['비상구 앞 상자 치우기'], '체육 창고': ['공 바구니 바닥에 두기'] }, traps: ['교실 게시판 꾸미기'] }, 0.25),
            { prompt: '장소마다 개선이 필요한 근거 카드를 하나씩 이어요.', toolOptions: { topic: '왜 고쳐야 할까?', mode: 'match', slots: ['급식실', '체육 창고', '과학실'], cards: ['바닥이 자주 젖는다', '물건이 머리 위에 있다', '보안경이 모자란다', '벽 색이 어둡다'] }, target: { match: { 급식실: '바닥이 자주 젖는다', '체육 창고': '물건이 머리 위에 있다', 과학실: '보안경이 모자란다' } }, difficulty: 0.3,
              hints: ['조사 점검표에서 그 장소의 고칠 점을 떠올려요.'],
              levels: { easy: { prompt: '두 장소에 개선이 필요한 근거 카드를 하나씩 이어요.', toolOptions: { slots: ['급식실', '체육 창고'], cards: ['바닥이 자주 젖는다', '물건이 머리 위에 있다', '벽 색이 어둡다'] }, target: { match: { 급식실: '바닥이 자주 젖는다', '체육 창고': '물건이 머리 위에 있다' } } } },
              conclude: '조사에서 찾은 근거가 있어야 개선 제안이 힘을 얻어요.' },
            { prompt: '모둠에서 가장 먼저 고쳐야 할 개선점 하나를 고르고 그 까닭을 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '장소마다 개선점과 근거를 써요.', columns: ['장소', '개선점', '근거'], cells: [['급식실', '', ''], ['체육 창고', '', '']] }] },
      }),
      X('activity.report-dilemma', {
        title: '고장 난 시설, 알릴까', method: '보고할까 말까 갈림길', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번(알릴지 말지)에서 고르고 근거 한 장을 고른다.', base: '갈림 2번(선생님이 바쁘실 때)을 지나 근거를 고른다.', challenge: '갈림 2번을 지나 알맞은 근거를 모두 고르고, 서로 다른 끝 장면 세 곳을 견준다.' },
        activity: {
          title: '갈림길: 꺼진 비상구 유도등', tool: 'dilemma',
          teacher: '"누군가 이미 알렸겠지, 하고 지나가면 어떻게 될까요?" 결과와 영향 칸을 소리 내어 읽게 한다. "내가 말하면 고자질 같아요"라는 학생에게 "시설 고장을 알리는 것은 친구 잘못을 이르는 것과 같을까요? 모두를 지키는 일이에요"라고 묻는다. 알릴 때는 장소·모습·본 때를 적어 전하면 빨리 고칠 수 있다는 점을 짚는다.',
          task: '조사하다 고장 난 시설을 발견했어요. 갈림길마다 고르고 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '꺼진 비상구 유도등', max: 2,
            steps: [
              { text: '조사하다 보니 급식실 옆 비상구 유도등 불이 꺼져 있어요.', motif: 'star',
                good: ['tell', '담임 선생님께 바로 알린다', '선생님이 행정실에 전해 주세요.', [['급식실에서 일하는 분', '고장을 빨리 고쳐요', 1]]],
                bad: ['pass', '누가 알렸겠지 하고 지나간다', '며칠이 지나도 불이 꺼져 있어요.', '모두 그렇게 생각하면 아무도 알리지 않아요.', [['급식실에서 일하는 분', '비상시 길을 찾기 어려워요', -1]]] },
              { text: '선생님이 회의 중이라 "이따가 말해 줄래?"라고 하세요.', motif: 'house',
                good: ['note', '장소·모습·본 때를 쪽지에 적어 둔다', '회의가 끝나자 쪽지로 바로 전했어요.', [['학교', '정확히 알고 고쳐요', 1]]],
                bad: ['forget', '그냥 잊어버린다', '고장이 그대로 남아요.', '바쁠 때는 적어 두었다가 꼭 다시 알려요.', [['학교', '고장을 몰라요', -1]]] },
            ],
            ending: '장소와 모습을 적어 알린 덕분에 유도등이 빨리 고쳐졌어요.',
            reasons: [{ id: 'all', text: '고장을 알리면 일하는 분 모두를 지킨다' }, { id: 'exact', text: '장소·모습을 적어야 빨리 고친다' }, { id: 'someone', text: '누군가 이미 알렸을 것이다', why: '모두 그렇게 생각하면 아무도 알리지 않아요.' }, { id: 'tattle', text: '알리는 것은 고자질이다', why: '시설 고장을 알리는 것은 모두를 지키는 일이에요.' }],
            good: ['all', 'exact'],
            talk: '모둠에서 "고장을 알릴 때 무엇을 적으면 좋을까?"를 한 가지씩 말해요.',
            conclude: '고장 난 시설을 보면 장소·모습·본 때를 적어 어른께 꼭 알려요.',
          }),
        },
        worksheet: { items: [{ type: 'check', prompt: '고장을 알릴 때 적을 것에 표시해요.', options: ['장소', '고장 난 모습', '본 때'] }] },
        notes: '학교마다 시설 고장을 알리는 길(담임·행정실·시설 담당)이 다르다. 우리 학교의 길을 미리 확인해 알려 준다.',
      }),
      X('wrap.report-write', {
        title: '조사 보고서 쓰기', method: '조사 보고서 쓰기', tool: 'rubric-writing', minutes: 8,
        levels: { easy: '문장 틀을 쓰고 3문장, 기준 2개(장소·발견)로 점검한다.', base: '4문장을 쓰고 기준 3개(장소·발견·제안)로 점검한다.', challenge: '4문장을 쓰고 기준 3개에 더해 그래프 결과를 인용했는지 점검한다(꼭 넣을 낱말: 그래프).' },
        wrap: {
          teacher: '"조사한 장소, 발견한 것, 제안을 넣어 보고 글을 써 볼까요?" 기준표를 함께 읽고 쓴 뒤 스스로 점검하게 한다. "안전했다"로만 쓴 학생에게 "무엇을 보고 그렇게 판단했나요? 발견한 것을 수나 모습으로 써 봐요"라고 묻는다. 일하는 분의 이름은 쓰지 않는다.',
          exitTicket: [
            RUBX('조사 결과 보고 글을 장소·발견·제안이 들어가게 써요.', { topic: '우리 학교 일터 안전시설 조사 보고(장소 → 발견 → 제안)', title: '조사 보고 쓰기', starter: '우리 모둠은 ~을 조사했다. ~을 발견했다. 그래서 ~을 제안한다.', crit: ['조사한 장소를 썼다', '발견한 것을 썼다', '제안을 썼다', '그래프 결과를 인용했다'], must: [['그래프']], chars: [50, 300], sent: [[3, 4], [4, 5]] }),
            { type: 'choice', prompt: '조사 보고에 대한 말로 알맞은 것은 무엇인가요?', options: ['사진만 붙이면 된다', '본 것과 제안을 함께 쓴다', '좋은 점만 쓴다'], answer: 1, difficulty: 0.2, explain: '본 것(발견)과 고칠 점(제안)이 함께 있어야 보고가 쓸모 있어요.' },
            { type: 'short', prompt: '보고서에 덧붙이고 싶은 질문 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '우리 학교 일터 조사 보고',
          items: [
            { type: 'table', prompt: '보고 글의 뼈대를 써요.', columns: ['장소', '발견한 것', '제안'], cells: [['', '', '']] },
            { type: 'check', prompt: '내 보고 글을 점검해요.', options: ['장소가 있나요', '발견한 것이 있나요', '제안이 있나요'] },
          ],
          easy: { note: '장소 → 발견 → 제안 차례로 써요.', items: [{ type: 'draw', prompt: '조사한 곳에서 발견한 안전시설을 그려요.' }] },
        },
      }),
      X('wrap.share-story', {
        title: '보고 발표 차례 정하기', method: '보고 발표 차례 정하기', tool: 'story', minutes: 8,
        levels: { easy: '발표 카드 3장(소개·발견·질문)을 차례대로 놓는다.', base: '발표 카드 4장(소개·발견·제안·질문)을 차례대로 놓는다.', challenge: '카드 4장 사이의 틀린 카드를 빼고 놓은 뒤, 받을 질문 하나를 미리 적는다.' },
        wrap: {
          teacher: '"보고를 발표할 때 무엇부터 말하면 듣는 사람이 잘 알아들을까요?" 카드를 놓은 뒤 모둠마다 그 차례로 1분씩 발표하게 한다. "사진만 보여 주면 다 알아요"라는 학생에게 "사진에 없는 상태와 제안은 어떻게 전할까요?"라고 묻는다. 질문을 미리 생각해 두면 발표가 더 단단해진다는 점을 짚는다.',
          exitTicket: [
            EX('story', ORDER('조사 보고 발표 카드를 차례대로 놓아요.', ['조사한 곳 소개', '발견한 것', '개선 제안', '질문 받기'], { mode: 'order', easy: [0, 1, 3], trap: '사진만 보여 주고 끝내기', title: '조사 보고 발표' }, 0.15)),
            { type: 'choice', prompt: '발표 뒤 친구가 질문하면 어떻게 할까요?', options: ['모르는 척한다', '조사한 것을 바탕으로 답한다', '질문을 받지 않는다'], answer: 1, difficulty: 0.15, explain: '조사한 사실을 바탕으로 답하면 믿을 수 있는 보고가 돼요.' },
            { type: 'short', prompt: '우리 발표에서 받을 것 같은 질문 하나를 미리 써요.' },
          ],
        },
        worksheet: {
          title: '보고 발표 준비',
          items: [
            { type: 'table', prompt: '발표 차례마다 할 말을 짧게 써요.', columns: ['소개', '발견', '제안', '질문'], cells: [['', '', '', '']] },
            { type: 'short', prompt: '친구 발표를 듣고 궁금한 점 하나를 써요.' },
          ],
        },
      }),
    );
  }

  PaperLessons.registerModules(M);
})();
