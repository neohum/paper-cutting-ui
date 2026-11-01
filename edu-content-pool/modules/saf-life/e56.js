/* 창체 안전교육 생활안전 — 초5-6 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/safety-a.json 의 saf-life 초5-6.
 * 근거: 「학교안전교육 실시 기준 등에 관한 고시」(교육부고시 제2023-33호) 별표 2 초등학교 생활안전 1~5,
 *       교육부 학교 안전교육 7대 표준안 생활안전 중분류(시설 및 제품이용 안전·신체활동 안전·유괴·미아사고 예방) — sources/changche/research-safety.md.
 * 초5-6 기준: 원인과 결과 잇기, 자기 점검표, 작은 실천 계획, 간단한 자료(그래프) 읽기, 모둠 토의, 갈림길 상황(dilemma)·기준표 글쓰기(rubric-writing).
 *   법 조문 번호·형량·성인 상황은 쓰지 않는다. 그래프 수치는 모두 가상(화면에 '가상'이라고 적는다). 장면·인물은 직접 지은 것이다(가명 한두 글자).
 * 주제 12개(5학년 6 · 6학년 6) × 도입 2 · 활동 4 · 정리 2 = 계획 모듈 96개 전부. 추천 조합은 체계도 sequences(학년마다 12차시).
 */
(function () {
  const M = [];
  // 모듈 머리: mk('g5-exit-crowd', 5)('intro.exit-sign', {...}) → id·type·topic·grades 를 채운다
  const mk = (topic, grade) => (suffix, o) => Object.assign({
    id: `saf-life.e56.${topic}.${suffix}`, schema: 'edu-module.v1', type: suffix.split('.')[0],
    domain: 'saf-life', band: '초5-6', topic: `saf-life.e56.${topic}`, grades: [grade],
  }, o);
  const art = (draw, banner, motif = 'star', color = 'buttercup') => ({ draw, banner, extra: [{ motif, x: 300, y: 96, color }] });
  const cut = (p) => String(p).replace(/[.?]$/, '');

  // ---- 카드 판 문항 ----
  // 나누기: groups = { 칸: [카드…] }. 쉬움 = 칸마다 앞 easy장, 도전 = extra 카드 + 함정 카드(어느 칸에도 넣지 않음)
  const SORT = (prompt, { topic, slots, groups, easy = 2, extra = {}, traps = [], mode }, d, more) => {
    const inter = (g) => { const out = []; const n = Math.max(...slots.map((s) => (g[s] || []).length)); for (let i = 0; i < n; i++) for (const s of slots) if ((g[s] || [])[i]) out.push(g[s][i]); return out; };
    const take = (n) => Object.fromEntries(slots.map((s, i) => [s, groups[s].slice(0, Array.isArray(n) ? n[i] : n)]));
    const full = Object.fromEntries(slots.map((s) => [s, [...groups[s], ...(extra[s] || [])]]));
    const base = { topic, slots, cards: inter(groups) }; if (mode) base.mode = mode;
    const ez = take(easy); const fullCards = inter(full); fullCards.splice(1, 0, ...traps.slice(0, 1)); if (traps[1]) fullCards.push(traps[1]);
    const count = (g) => Object.values(g).reduce((a, b) => a + b.length, 0);
    const lv = { easy: { prompt: `${cut(prompt)}(카드 ${count(ez)}장).`, toolOptions: { cards: inter(ez) }, target: { sort: ez } } };
    if (Object.keys(extra).length || traps.length) lv.challenge = { prompt: `${cut(prompt)}(카드 ${fullCards.length}장${traps.length ? ', 넣지 않을 카드도 있어요' : ''}).`, toolOptions: { cards: fullCards }, target: { sort: full } };
    return Object.assign({ prompt, toolOptions: base, target: { sort: groups }, difficulty: d, levels: lv }, more);
  };
  // 차례: steps = [카드 글…](바른 차례). easy = 쉬움에 남길 칸 번호, trap = 도전에서 끼우는 틀린 장면(카드 칸에 남겨야 함)
  const ORDER = (prompt, steps, { easy = [0, 1, 2], trap, motifs = [], mode } = {}, d, more) => {
    const cards = steps.map((t, i) => (motifs[i] ? { id: t, text: t, motif: motifs[i] } : t));
    const mix = (list) => [list[2], list[0], ...list.slice(3), list[1]].filter((x) => x != null);
    const ez = easy.map((i) => cards[i]); const ezIds = easy.map((i) => steps[i]);
    const lv = { easy: { prompt: `${cut(prompt)}(장면 ${ez.length}장).`, toolOptions: { slots: ez.length, cards: mix(ez) }, target: { order: ezIds } } };
    if (trap) lv.challenge = { prompt: `${cut(prompt)}(틀린 장면 하나는 빼요).`, toolOptions: { slots: steps.length, cards: [...mix(cards), trap] }, target: { order: steps } };
    return Object.assign({ prompt, toolOptions: Object.assign(mode ? { mode } : {}, { slots: steps.length, cards: mix(cards) }), target: { order: steps }, difficulty: d, levels: lv }, more);
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
  // 갈림길 활동 문항 셋: ① 안전한 길 + 근거(쉬움 1번·기본 2번·도전 3번 갈림) ② 다른 길 끝까지 가 보고 견주기 ③ 모둠 토의(말하기)
  const DIL = ({ steps, ending, reasons, good, title, talk, conclude }) => {
    const opt = (n) => ({ title, scene: TREE(steps, n, ending), reasons });
    const r0 = [good[0]];
    return [
      { prompt: `‘${title}’ 갈림길마다 안전한 선택을 고르고, 끝에서 근거를 골라요.`, toolOptions: opt(2), target: { path: [goodPath(steps, 2)], reasons: good.slice(0, 2), some: true }, difficulty: 0.3,
        levels: {
          easy: { prompt: `‘${title}’ 갈림길 한 번에서 안전한 선택을 고르고 근거를 골라요.`, toolOptions: opt(1), target: { path: [goodPath(steps, 1)], reasons: r0, some: true } },
          challenge: { prompt: `‘${title}’ 갈림길 세 번을 지나 안전한 끝까지 가고, 근거를 모두 골라요.`, toolOptions: opt(3), target: { path: [goodPath(steps, 3)], reasons: good } },
        } },
      { prompt: `‘${title}’에서 되돌아가 다른 선택도 끝까지 가 보고 결과를 견주어요.`, toolOptions: opt(2), target: { explore: 2 }, difficulty: 0.25,
        levels: { easy: { toolOptions: opt(1) }, challenge: { prompt: `‘${title}’에서 서로 다른 끝 장면 세 곳을 가 보고 결과를 견주어요.`, toolOptions: opt(3), target: { explore: 3 } } }, conclude },
      { prompt: talk, free: true, talk: true, toolOptions: opt(2) },
    ];
  };

  // ---- 기준표 글쓰기(rubric-writing) ----
  // 쉬움 = 기준 2개 + 문장 틀, 기본 = 기준 3개, 도전 = 기준 3개 + 고쳐 쓰기(꼭 넣을 낱말)
  const RUB = (prompt, { topic, starter, crit, must, chars = [20, 160], title }, d, more) => ({
    prompt, toolOptions: { topic, minChars: chars[0], maxChars: chars[1], title }, target: { selfCheck: crit.slice(0, 3), chars }, difficulty: d,
    levels: {
      easy: { prompt: `${cut(prompt)}(문장 틀을 써도 돼요).`, toolOptions: { starter }, target: { selfCheck: crit.slice(0, 2), chars: [Math.max(10, chars[0] - 10), chars[1]] } },
      challenge: { prompt: `${cut(prompt)}. 다 쓰면 한 군데 고쳐 써요.`, target: { selfCheck: [...crit.slice(0, 3), '한 군데 이상 고쳐 썼다'], chars: [chars[0] + 10, chars[1]], mustInclude: must } },
    },
    ...more,
  });

  // 정리용 기준표 글쓰기 출구 질문(RUB 와 같은 단계)
  const RUBX = (prompt, spec) => { const r = RUB(prompt, spec, 0.2); return { type: 'tool', tool: 'rubric-writing', options: r.toolOptions, prompt, target: r.target, difficulty: 0.2, levels: r.levels }; };
  // 점검표(kitchen checklist): good = 표시할 항목, traps = 표시하지 않을 항목. 쉬움 = 앞 easy개, 기본 = 앞 base개, 도전 = good 전부
  const CHK = (prompt, title, good, traps, { easy = 3, base = 4 } = {}, d, more) => {
    const it = (list) => list.map((t, i) => ({ id: `k${good.indexOf(t) >= 0 ? good.indexOf(t) : 10 + traps.indexOf(t)}`, text: t }));
    const mixIn = (g) => { const out = g.slice(); traps.forEach((t, i) => out.splice(Math.min(out.length, 1 + i * 2), 0, t)); return out; };
    const ids = (g) => g.map((t) => `k${good.indexOf(t)}`);
    const lv = { easy: { prompt: `${cut(prompt)}(${easy}칸).`, toolOptions: { items: it(mixIn(good.slice(0, easy))) }, target: { checklist: ids(good.slice(0, easy)) } } };
    if (good.length > base) lv.challenge = { prompt: `${cut(prompt)}(${good.length}칸).`, toolOptions: { items: it(mixIn(good)) }, target: { checklist: ids(good) } };
    return Object.assign({ prompt, toolOptions: { mode: 'checklist', title, items: it(mixIn(good.slice(0, base))) }, target: { checklist: ids(good.slice(0, base)) }, difficulty: d, levels: lv }, more);
  };
  // ---- 정리: 자기 점검표(timer selfCheck) — 쉬움 2칸·기본 3칸·도전 4칸 ----
  const SELF = (title, list, prompt = '오늘 해낸 것에 스스로 표시해요.') => ({
    type: 'tool', tool: 'timer', options: { title }, prompt, target: { selfCheck: list.slice(0, 3) }, difficulty: 0.1,
    levels: { easy: { prompt: `${cut(prompt)}(두 칸).`, target: { selfCheck: list.slice(0, 2) } }, challenge: { prompt: `${cut(prompt)}(네 칸).`, target: { selfCheck: list.slice(0, 4) } } },
  });
  // 정리: 시간 띠 나누기(timeline sort) — groups = { 구간: [카드…] }, 쉬움 3장·기본 5장·도전 6장(또는 함정 카드)
  const TLX = (prompt, slots, groups, easyPick, basePick) => {
    const all = slots.flatMap((s) => groups[s].map((c) => [s, c]));
    const sel = (ids) => { const g = Object.fromEntries(slots.map((s) => [s, []])); all.filter(([, c]) => ids.includes(c)).forEach(([s, c]) => g[s].push(c)); return g; };
    const order = (ids) => all.map(([, c]) => c).filter((c) => ids.includes(c)).reverse();
    const allIds = all.map(([, c]) => c);
    return {
      type: 'tool', tool: 'timeline', options: { mode: 'sort', slots, cards: order(basePick), axis: ['전', '후'] }, prompt, target: { sort: sel(basePick) }, difficulty: 0.15,
      levels: {
        easy: { prompt: `${cut(prompt)}(카드 ${easyPick.length}장).`, toolOptions: { cards: order(easyPick) }, target: { sort: sel(easyPick) } },
        challenge: { prompt: `${cut(prompt)}(카드 ${allIds.length}장).`, toolOptions: { cards: order(allIds) }, target: { sort: sel(allIds) } },
      },
    };
  };
  // 정리: 말풍선 빈칸 채우기(story fill) — blanks = [[말풍선 글('___' 자리), 넣을 카드]…3], 빈칸 1·2·3개
  const FILLX = (prompt, who, blanks, cards, title) => {
    const sl = blanks.map(([label], i) => ({ id: `b${i + 1}`, who, label }));
    const tg = (n) => ({ fill: Object.fromEntries(blanks.slice(0, n).map(([, c], i) => [`b${i + 1}`, c])) });
    return {
      type: 'tool', tool: 'story', options: { mode: 'fill', title, slots: sl.slice(0, 2), cards }, prompt, target: tg(2), difficulty: 0.15,
      levels: { easy: { prompt: `${cut(prompt)}(빈칸 하나).`, toolOptions: { slots: sl.slice(0, 1) }, target: tg(1) }, challenge: { prompt: `${cut(prompt)}(빈칸 셋).`, toolOptions: { slots: sl }, target: tg(3) } },
    };
  };
  // 정리: 장면에 마음 카드 짝 짓기(emotion match) — 장면 1·2·3개
  const FEEL = (prompt, scenes, cards) => {
    const sl = scenes.map(([label], i) => ({ id: `s${i + 1}`, label }));
    const tg = (n) => ({ match: Object.fromEntries(scenes.slice(0, n).map(([, ok], i) => [`s${i + 1}`, ok])) });
    return {
      type: 'tool', tool: 'emotion', options: { cards, slots: sl.slice(0, 2) }, prompt, target: tg(2), difficulty: 0.15,
      levels: { easy: { prompt: `${cut(prompt)}(장면 하나).`, toolOptions: { slots: sl.slice(0, 1) }, target: tg(1) }, challenge: { prompt: `${cut(prompt)}(장면 셋).`, toolOptions: { slots: sl }, target: tg(3) } },
    };
  };

  // ======== 5학년 · 비상구·대피 안내도와 붐비는 곳 (별표 2 초등 생활안전 1) ========
  {
    const X = mk('g5-exit-crowd', 5);
    const P = (name, at, icon = 'dot', legend) => Object.assign({ name, icon, at }, legend ? { legend } : {});
    // 대피 안내도 칸 지도: 현재 위치 + 비상구 둘(가까운 곳 near). 쉬움 = 비상구 하나만, 도전 = 가까운 쪽 통로가 막힘
    const EVAC = (title, prompt, hereAt, near, far, blockAt, d, more) => {
      const base = [P('현재 위치', hereAt, 'house', '현재 위치'), P(near[0], near[1]), P(far[0], far[1])];
      return Object.assign({
        prompt, toolOptions: { grid: [6, 4], title, places: base, legend: false }, target: { place: near[0] }, difficulty: d,
        levels: {
          easy: { prompt: `${title}에서 비상구를 찾아 핀을 꽂아요.`, toolOptions: { places: [base[0], base[1]], readout: true } },
          challenge: { prompt: `${near[0]}로 가는 통로가 막혔어요. 다른 비상구에 핀을 꽂아요.`, toolOptions: { places: [...base, P('막힌 통로', blockAt)] }, target: { place: far[0] } },
        },
      }, more);
    };
    M.push(
      X('intro.exit-sign', {
        title: '비상구 표시 먼저 찾기', method: '비상구 표시 장면에서 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 표시 두 개(비상구 유도등·대피 안내도)를 짚어 주고 고르게 한다.', base: '표시 세 개를 스스로 고르고 먼저 봐야 하는 까닭을 말한다.', challenge: '표시 네 개를 고르고, 비슷해 보이는 광고판·매점 간판을 가려 낸다.' },
        intro: {
          teacher: '"공연장에 들어가면 가장 먼저 무엇을 볼까요?" 두세 명의 대답을 듣고 시연 단추로 비상구 유도등·대피 안내도·소화기 표시가 바구니에 담기는 모습을 보여 준다. "불이 나면 그때 찾으면 돼요"라는 말이 나오면 "연기가 차면 표시가 잘 보일까요? 그래서 들어가자마자 찾아 둡니다"라고 되묻는다. 오늘은 안내도를 읽고 붐비는 곳에서 멈추는 판단을 배운다고 밝힌다.',
          student: '공연장이나 역에 들어갔을 때 본 표시를 하나 떠올려 짝에게 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'pick', basket: '먼저 찾을 표시', cards: [{ id: 'exit', text: '비상구 유도등' }, { id: 'ad', text: '광고판' }, { id: 'map', text: '대피 안내도' }, { id: 'shop', text: '매점 간판' }, { id: 'ext', text: '소화기 표시' }], shuffle: false }, sequence: [{ pick: ['exit', 'map', 'ext'] }] },
          art: art('paper children entering a paper concert hall and pointing up at a glowing green running-man exit sign above a door', '들어가면 비상구부터'),
        },
        notes: '유도등의 초록 그림(달려 나가는 사람)을 실제 학교 복도 유도등과 견주어 보게 하면 좋다.',
      }),
      X('intro.crowd-cause', {
        title: '붐빔이 위험한 까닭 잇기', method: '붐빔이 위험한 까닭 잇기', tool: 'mindmap', minutes: 5,
        levels: { easy: '카드 3장(좁은 길·밀기·넘어짐)으로 원인과 결과를 함께 나눈다.', base: '카드 5장을 원인·결과 가지에 나눈다.', challenge: '카드 6장을 나누고 원인에서 결과로 이어지는 화살표를 말로 설명한다.' },
        intro: {
          teacher: '"사람이 한꺼번에 몰리면 무슨 일이 생길까요?" 시연 단추로 좁은 길·뒤에서 밀기는 원인 가지로, 넘어짐·빠져나가기 어려움은 결과 가지로 가는 모습을 보인다. "사람이 많아도 빨리 밀고 나가면 돼요"라는 말에는 "모두 그렇게 밀면 앞사람은 어떻게 될까요?"라고 되물어 원인과 결과를 잇게 한다.',
          student: '사람이 많이 몰렸던 곳을 떠올리고, 왜 조심해야 했는지 한 가지 말해 보아요.',
          demo: { tool: 'mindmap', options: { topic: '사람이 몰려요', slots: ['원인', '결과'], cards: ['좁은 길', '넘어짐', '뒤에서 밀기', '빠져나가기 어려움', '한꺼번에 나감'] }, sequence: [{ sort: { 원인: ['좁은 길', '뒤에서 밀기', '한꺼번에 나감'], 결과: ['넘어짐', '빠져나가기 어려움'] } }] },
          art: art('a crowd of paper people squeezing through a narrow paper gate, with small arrows showing pushing from behind', '사람이 몰리면 왜 위험할까?', 'cloud', 'sky'),
        },
      }),
      X('activity.evac-map', {
        title: '대피 안내도 읽고 핀 꽂기', method: '대피 안내도 읽고 경로 핀', tool: 'map', minutes: 14,
        levels: { easy: '현재 위치가 표시된 안내도에 비상구가 하나만 있고, 핀을 놓으면 칸 이름이 보인다.', base: '비상구 두 곳 가운데 현재 위치에서 가까운 곳을 칸을 세어 고른다.', challenge: '가까운 쪽 통로가 막힌 조건에서 다른 비상구를 찾는다.' },
        activity: {
          title: '대피 안내도에서 가까운 비상구 찾기', tool: 'map',
          teacher: '"안내도의 \'현재 위치\'는 내가 서 있는 곳이에요. 거기서 비상구까지 몇 칸인지 세어 볼까요?" 칸을 손가락으로 따라가며 세게 한다. 들어온 문으로만 나가려는 학생에게 "들어온 문이 가장 가까울까요? 칸을 세어 견주어 봐요"라고 묻는다. 도전에서는 막힌 통로를 지나지 않는 길을 말로 설명하게 한다.',
          task: '안내도에서 현재 위치를 찾고, 가장 가까운 비상구에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            EVAC('공연장 안내도', '공연장 안내도에서 현재 위치와 가장 가까운 비상구에 핀을 꽂아요.', [1, 2], ['비상구 가', [0, 3]], ['비상구 나', [5, 0]], [0, 2], 0.2),
            EVAC('역 대합실 안내도', '역 대합실 안내도에서 현재 위치와 가장 가까운 비상구에 핀을 꽂아요.', [4, 1], ['동쪽 비상구', [5, 1]], ['서쪽 비상구', [0, 2]], [5, 2], 0.25),
            EVAC('체육관 안내도', '체육관 안내도에서 현재 위치와 가장 가까운 비상구에 핀을 꽂아요.', [2, 0], ['비상구 1', [2, 3]], ['비상구 2', [5, 0]], [2, 2], 0.3, { conclude: '들어가면 안내도의 현재 위치와 가까운 비상구를 먼저 찾아 둬요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '대피 안내도에서 가장 먼저 찾을 표시는 무엇인가요?', options: ['현재 위치', '매점 위치', '화장실 위치'], answer: '현재 위치' }] },
      }),
      X('activity.crowd-dilemma', {
        title: '행사 끝 출구로 사람이 몰려요', method: '갈림길: 행사 끝, 출구로 사람이 몰려요', tool: 'dilemma', minutes: 13,
        levels: { easy: '갈림 1번에서 밀지 멈출지 고르고 근거 한 장을 고른다.', base: '갈림 2번(비켜서기 → 동생 손 잡기)을 지나 근거를 고른다.', challenge: '갈림 3번(나가는 길까지)을 지나 알맞은 근거를 모두 고르고, 다른 길의 결과와 견준다.' },
        activity: {
          title: '갈림길: 출구로 사람이 몰려요', tool: 'dilemma',
          teacher: '"뒤에서 밀 때 나도 따라 밀면 앞사람은 어떻게 될까요?" 고를 때마다 결과 칸을 소리 내어 읽게 한다. "빨리 나가야 안전해요"라고 하는 학생에게 "모두 빨리 나가려고 밀면 길이 넓어질까요?"라고 묻고, 멈춰 벽 쪽으로 비켜서는 것이 나와 다른 사람을 함께 지킨다는 점을 짚는다.',
          task: '갈림길마다 고르고, 결과를 읽은 뒤 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '행사가 끝났어요',
            steps: [
              { text: '공연이 끝나자 사람들이 한꺼번에 출구로 몰려요. 뒤에서 누가 밀어요.', motif: 'star',
                good: ['wall', '멈춰서 벽 쪽으로 비켜선다', '밀리지 않고 숨 돌릴 자리에 섰어요.', [['나', '넘어지지 않아요', 1], ['앞사람', '덜 밀려요', 1]]],
                bad: ['push', '나도 앞사람을 따라 민다', '앞사람이 휘청이며 넘어질 뻔해요.', '밀면 앞사람도 나도 넘어질 수 있어요.', [['앞사람', '넘어질 위험', -1]]] },
              { text: '벽 쪽에 섰는데 함께 온 동생의 손을 놓칠 것 같아요.', motif: 'house',
                good: ['hold', '동생 손을 잡고 같이 멈춘다', '둘이 같은 자리에서 기다려요.', [['동생', '길을 잃지 않아요', 1]]],
                bad: ['dive', '사람 사이로 뛰어들어 앞으로 간다', '사람들에 밀려 동생과 더 멀어져요.', '붐빌 때 사람 사이로 뛰어들면 더 위험해요.', [['동생', '혼자 남아요', -1]]] },
              { text: '사람이 조금 줄었어요. 어느 쪽으로 나갈까요?', motif: 'tree',
                good: ['sign', '비상구 표시를 따라 천천히 걷는다', '막힘 없이 밖으로 나왔어요.', [['나와 동생', '안전하게 나와요', 1]]],
                bad: ['short', '표시 없는 지름길로 뛴다', '막다른 길이라 다시 돌아와야 해요.', '표시가 없는 길은 막혀 있을 수 있어요.', [['나', '시간을 잃어요', -1]]] },
            ],
            ending: '멈추고 비켜선 판단 덕분에 모두 안전하게 나왔어요.',
            reasons: [{ id: 'stop', text: '붐빌 때는 멈추는 것이 넘어짐을 막는다' }, { id: 'follow', text: '표시를 따라야 막힌 길을 피한다' }, { id: 'fast', text: '빨리 나가는 사람이 가장 안전하다', why: '서두르면 넘어지고 밀려요.' }, { id: 'all', text: '다들 미니까 나도 밀어도 된다', why: '여럿이 밀수록 더 위험해져요.' }],
            good: ['stop', 'follow'],
            talk: '모둠에서 "붐빌 때 멈추면 왜 나와 다른 사람이 안전할까?"를 이야기해요.',
            conclude: '붐비는 곳에서는 밀지 않고 멈춰 벽 쪽으로 비켜서요.',
          }),
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '사람이 몰리면 밀지 말고 ___ 벽 쪽으로 비켜서요.', answer: '멈춰서' }] },
      }),
      X('activity.enter-check', {
        title: '들어가자마자 확인할 것', method: '들어가자마자 확인할 것 점검표', tool: 'kitchen', minutes: 14,
        levels: { easy: '점검 칸 3개에 문장이 미리 쓰여 있고 알맞은 칸만 표시한다.', base: '점검 칸 4개(비상구·안내도·만날 곳·연락)를 가려 표시한다.', challenge: '4개를 고른 뒤 확인하는 차례를 정하고 그 이유를 짝에게 말한다.' },
        activity: {
          title: '들어가자마자 확인할 것 점검표', tool: 'kitchen',
          teacher: '"들어가서 자리에 앉기 전에 무엇을 확인하면 좋을까요?" 모둠이 점검표를 하나씩 소리 내어 읽고 표시하게 한다. 매점·사진 자리를 고르는 학생에게 "그것은 즐거움을 위한 것이죠. 위험할 때 나를 지키는 것은 무엇일까요?"라고 묻는다. 보호자와 헤어졌을 때 만날 곳을 미리 정해 두는 까닭을 짚는다.',
          task: '건물에 들어갈 때 확인할 것만 골라 점검표를 만들어요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '공연장에 들어가자마자 확인할 것만 표시해요.', toolOptions: { mode: 'checklist', title: '들어가자마자 확인', items: [{ id: 'exit', text: '가까운 비상구' }, { id: 'snack', text: '매점 메뉴' }, { id: 'map', text: '대피 안내도' }, { id: 'meet', text: '헤어지면 만날 곳' }, { id: 'photo', text: '사진 찍을 자리' }, { id: 'call', text: '보호자 연락 방법' }] }, target: { checklist: ['exit', 'map', 'meet', 'call'] }, difficulty: 0.15,
              levels: { easy: { prompt: '공연장에 들어가자마자 확인할 것만 표시해요(세 칸).', toolOptions: { items: [{ id: 'exit', text: '가까운 비상구' }, { id: 'snack', text: '매점 메뉴' }, { id: 'map', text: '대피 안내도' }, { id: 'meet', text: '헤어지면 만날 곳' }] }, target: { checklist: ['exit', 'map', 'meet'] } } } },
            ORDER('들어간 뒤 확인하는 차례를 정해 놓아요.', ['안내도에서 현재 위치', '가까운 비상구 찾기', '만날 곳 정하기', '자리에 앉기'], { mode: 'order', trap: '바로 무대 앞으로 뛰기' }, 0.2),
            { prompt: '짝에게 그 차례로 정한 이유를 한 가지씩 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '들어가자마자 확인할 것에 표시해요.', options: ['비상구', '대피 안내도', '만날 곳', '보호자 연락 방법'] }] },
      }),
      X('activity.crowd-plan', {
        title: '행사 전·중·후 계획', method: '행사 가기 전·중·후 계획', tool: 'timeline', minutes: 14,
        levels: { easy: '실천 카드 4장을 가기 전·행사 중·끝날 때로 나눈다.', base: '실천 카드 6장을 나눈다.', challenge: '실천 카드 8장을 나누고, 빠진 실천 하나를 모둠에서 덧붙인다.' },
        activity: {
          title: '행사 가기 전·중·후 실천 나누기', tool: 'timeline',
          teacher: '"축제에 가기 전에 할 일과 끝날 때 할 일은 무엇이 다를까요?" 카드를 놓을 때마다 왜 그 구간인지 말하게 한다. "끝날 때 바로 나가야 해요"를 고르는 학생에게 "모두가 한꺼번에 나가면 어떻게 될까요? 조금 기다렸다 나가는 것은 어때요?"라고 묻는다.',
          task: '실천 카드를 가기 전·행사 중·끝날 때 구간에 나누어요.', levels: { easy: { live: true }, base: {}, challenge: {} },
          items: [
            SORT('불꽃 축제에 갈 때 실천 카드를 구간에 나누어요.', { slots: ['가기 전', '행사 중', '끝날 때'], mode: 'sort', groups: { '가기 전': ['만날 곳 정하기', '보호자 연락 확인'], '행사 중': ['비상구 위치 보기', '난간에 기대지 않기'], '끝날 때': ['붐비면 잠깐 기다리기', '표시 따라 걷기'] }, easy: [2, 1, 1], extra: { '가기 전': ['날씨 확인하기'], '끝날 때': ['손 잡고 함께 걷기'] } }, 0.2),
            SORT('야구장에 갈 때 실천 카드를 구간에 나누어요.', { slots: ['가기 전', '행사 중', '끝날 때'], mode: 'sort', groups: { '가기 전': ['좌석 근처 출구 알아보기', '보호자와 약속 정하기'], '행사 중': ['계단에서 뛰지 않기', '통로에 물건 두지 않기'], '끝날 때': ['밀지 않고 차례로 나가기', '정한 곳에서 만나기'] }, easy: [1, 2, 1], extra: { '행사 중': ['자리 비울 때 알리기'], '끝날 때': ['벽 쪽으로 비켜서기'] } }, 0.25),
            { prompt: '모둠에서 빠진 실천 하나를 생각해 덧붙여 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '행사 때 할 실천을 하나씩 써요.', columns: ['가기 전', '행사 중', '끝날 때'], cells: [['', '', '']] }] },
      }),
      X('wrap.exit-self', {
        title: '비상구 확인 자기 점검표', method: '비상구 확인 자기 점검표', tool: 'timer', minutes: 7,
        levels: { easy: '점검 칸 2개(비상구 찾기·안내도 읽기)를 표시한다.', base: '점검 칸 3개를 표시한다.', challenge: '점검 칸 4개를 표시하고 이번 주 실천 계획을 쓴다.' },
        wrap: {
          teacher: '"오늘 배운 것 가운데 다음에 공연장에 가면 꼭 할 것은 무엇인가요?" 점검 칸을 스스로 읽고 표시하게 한다. 출구 2번에서 "가장 빠른 사람 뒤를 따라가요"를 고른 학생에게 "앞사람이 막힌 길로 가면 어떻게 될까요? 표시를 따라가요"라고 말해 준다.',
          exitTicket: [
            SELF('비상구 확인 점검', ['들어가면 비상구를 찾는다', '안내도에서 현재 위치를 읽는다', '붐비면 멈추고 비켜선다', '헤어지면 만날 곳을 정한다']),
            { type: 'choice', prompt: '연기가 나서 앞이 잘 안 보여요. 무엇을 따라 나가요?', options: ['가장 빠른 사람 뒤', '비상구 유도등', '들어온 문만'], answer: 1, difficulty: 0.2, explain: '비상구 유도등은 나가는 길을 가리켜요.' },
            { type: 'short', prompt: '이번 주에 건물에 들어가면 할 실천 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '들어가면 비상구부터',
          items: [
            { type: 'check', prompt: '오늘 배운 대로 할 수 있는 것에 표시해요.', options: ['비상구 찾기', '안내도에서 현재 위치 읽기', '붐비면 멈추고 비켜서기'] },
            { type: 'short', prompt: '우리 학교 건물에서 가장 가까운 비상구는 어디인지 써요.' },
          ],
          easy: { note: '들어가면 초록색 비상구 표시를 먼저 찾아요.', items: [{ type: 'draw', prompt: '비상구 표시를 찾는 내 모습을 그려요.' }] },
        },
      }),
      X('wrap.crowd-feel', {
        title: '멈춰 선 판단의 마음', method: '멈춰 선 판단의 마음', tool: 'emotion', minutes: 7,
        levels: { easy: '장면 1개에 마음 카드를 짝 짓는다.', base: '장면 2개에 마음 카드를 짝 짓는다.', challenge: '장면 3개에 짝 짓고 그 판단이 가져온 결과를 말한다.' },
        wrap: {
          teacher: '"사람 사이에서 멈추고 비켜섰을 때 마음이 어땠을까요?" 장면마다 마음 카드를 고르고 그 판단의 결과를 한 문장으로 말하게 한다. "멈추면 늦어서 손해예요"라는 말에는 "조금 늦게 나왔지만 넘어진 사람이 없었어요. 무엇이 더 소중할까요?"라고 되묻는다.',
          exitTicket: [
            FEEL('장면과 그때의 마음을 이어요.', [['멈추고 비켜서니 숨이 편해졌어요', '편안함'], ['동생이 덕분에 안 다쳤대요', '뿌듯함'], ['앞사람이 비켜 줘서 안 넘어졌어요', '고마움']], ['편안함', '뿌듯함', '고마움', '화남']),
            { type: 'choice', prompt: '뒤에서 밀려요. 어떻게 하는 것이 가장 안전한가요?', options: ['나도 앞사람을 민다', '멈추고 벽 쪽으로 비킨다', '사람 사이로 뛴다'], answer: 1, difficulty: 0.15, explain: '멈추고 비켜서면 넘어짐을 막을 수 있어요.' },
            { type: 'short', prompt: '멈추고 비켜선 판단이 가져온 좋은 결과를 한 문장으로 써요.' },
          ],
        },
        worksheet: {
          title: '붐비는 곳에서 멈춰요',
          items: [
            { type: 'table', prompt: '안전하면 ○, 위험하면 ×를 써요.', columns: ['행동', '○ / ×'], cells: [['앞사람을 따라 민다', ''], ['벽 쪽으로 비켜선다', ''], ['표시를 따라 걷는다', '']], answer: '×, ○, ○' },
            { type: 'short', prompt: '붐비는 곳에서 친구에게 해 줄 말을 한 문장으로 써요.' },
          ],
        },
      }),
    );
  }

  // ======== 5학년 · 생활 화학제품과 부엌 안전 (별표 2 초등 생활안전 2 + 표준안 '제품') ========
  {
    const X = mk('g5-chem-kitchen', 5);
    const KITCHEN = [
      { name: '가스레인지', cells: [[0, 0], [1, 0]] }, { name: '칼꽂이', cells: [[2, 0]] }, { name: '전자레인지', cells: [[3, 0]] },
      { name: '세제 칸', cells: [[0, 1], [0, 2]] }, { name: '식탁', cells: [[1, 1], [2, 1], [3, 1], [1, 2], [2, 2], [3, 2]] },
    ];
    M.push(
      X('intro.label-read', {
        title: '세제 통 뒷면 표시 고르기', method: '제품 표시 읽고 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 표시 두 개(섞지 마세요·환기하세요)를 읽어 주고 고르게 한다.', base: '꼭 지켜야 할 표시 세 개를 스스로 고른다.', challenge: '표시 네 개를 고르고 그 표시를 지키지 않으면 생길 일을 말한다.' },
        intro: {
          teacher: '"세제 통 뒷면에는 무엇이 쓰여 있을까요?" 실제 세제 통 그림을 보이며 시연 단추로 \'섞지 마세요\'·\'환기하세요\'·\'어린이 손이 닿지 않게\' 표시가 바구니에 담기는 모습을 보인다. "향이 좋으면 안전한 제품이에요"라는 말에는 "향과 안전은 같은 것일까요? 표시를 읽어야 알 수 있어요"라고 되묻는다.',
          student: '집에서 본 세제 통이나 표백제 통을 떠올리고, 뒷면에 무엇이 있었는지 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'pick', basket: '꼭 지킬 표시', cards: [{ id: 'mix', text: '섞지 마세요' }, { id: 'smell', text: '라벤더 향' }, { id: 'air', text: '환기하세요' }, { id: 'new', text: '새 디자인' }, { id: 'kid', text: '어린이 손 닿지 않게' }], shuffle: false }, sequence: [{ pick: ['mix', 'air', 'kid'] }] },
          art: art('a paper child turning a paper detergent bottle around to read warning labels on the back, with a magnifying glass', '뒷면 표시를 읽어요', 'leaf', 'mint'),
        },
        notes: '실제 제품을 교실에 가져와 열지 않는다. 그림이나 빈 통의 표시만 본다.',
      }),
      X('intro.kitchen-map', {
        title: '부엌 지도에 위험 지점 꽂기', method: '부엌 지도에서 위험 지점', tool: 'map', minutes: 5,
        levels: { easy: '가스레인지·칼꽂이 두 곳에 함께 핀을 꽂는다.', base: '세 곳(가스레인지·칼꽂이·전자레인지)에 핀을 꽂는다.', challenge: '세제 칸까지 네 곳에 핀을 꽂고 저마다 조심할 점을 말한다.' },
        intro: {
          teacher: '"부엌에서 다칠 수 있는 곳은 어디일까요?" 시연 단추로 핀이 가스레인지 → 칼꽂이 → 전자레인지 → 세제 칸으로 옮겨 가는 모습을 보인다. "식탁은 위험한 곳이 없어요"라는 말에는 "뜨거운 냄비를 식탁에 올릴 때는 어떨까요?"라고 되물어 위험은 물건과 순간에 따라 생긴다는 점을 짚는다.',
          student: '우리 집 부엌에서 조심해야 할 곳 한 군데를 짝에게 말해 보아요.',
          demo: { tool: 'map', options: { grid: [4, 3], regions: KITCHEN, title: '우리 집 부엌' }, sequence: [{ region: '가스레인지' }, { region: '칼꽂이' }, { region: '전자레인지' }, { region: '세제 칸' }] },
          art: art('a paper kitchen seen from above with tiny paper pins on the stove, the knife block and the microwave', '부엌의 위험한 곳은?', 'house', 'peach'),
        },
      }),
      X('activity.label-sort', {
        title: '바른 보관·위험한 보관', method: '바른 보관/위험한 보관', tool: 'mindmap', minutes: 14,
        levels: { easy: '보관 장면 카드 4장을 두 가지에 나눈다.', base: '카드 6장을 나누고 위험한 보관의 결과를 말한다.', challenge: '카드 8장을 나누고, 위험한 보관마다 생길 결과를 모둠에서 말한다.' },
        activity: {
          title: '세제 보관 장면 나누기', tool: 'mindmap',
          teacher: '"세제를 음료수 병에 옮겨 담으면 어떤 일이 생길까요?" 카드를 놓을 때마다 원인과 결과를 한 문장으로 말하게 한다(예: 음료수 병에 담으면 → 누가 마실 수 있어요). "뚜껑만 닫으면 아무 데나 둬도 돼요"라는 학생에게 "동생 손이 닿는 바닥이라면 어떨까요?"라고 묻는다.',
          task: '세제·표백제 보관 장면을 바른 보관과 위험한 보관으로 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORT('욕실 세제 보관 장면을 나누어요.', { topic: '욕실 세제 보관', slots: ['바른 보관', '위험한 보관'], groups: { '바른 보관': ['뚜껑 꼭 닫아 두기', '원래 통에 담아 두기', '높은 선반에 두기'], '위험한 보관': ['음료수 병에 옮겨 담기', '뚜껑 연 채 두기', '욕조 옆 바닥에 두기'] }, extra: { '바른 보관': ['표시가 보이게 두기'], '위험한 보관': ['두 세제를 한 통에'] } }, 0.2),
            SORT('부엌·베란다 세제 보관 장면을 나누어요.', { topic: '부엌·베란다 보관', slots: ['바른 보관', '위험한 보관'], groups: { '바른 보관': ['음식과 떨어진 칸', '햇빛 없는 곳', '어린이 손 안 닿게'], '위험한 보관': ['쌀통 옆에 두기', '물병에 덜어 두기', '가스레인지 옆에 두기'] }, extra: { '바른 보관': ['쓰고 바로 제자리'], '위험한 보관': ['이름 없는 통에 담기'] } }, 0.25, { conclude: '세제는 원래 통에, 뚜껑을 닫아, 손이 닿지 않는 곳에 둬요.' }),
            { prompt: '모둠에서 위험한 보관 한 가지를 골라 그 결과를 이야기해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '바른 보관이면 ○, 위험하면 ×를 써요.', columns: ['보관 장면', '○ / ×'], cells: [['음료수 병에 옮겨 담기', ''], ['원래 통에 뚜껑 닫기', ''], ['욕조 옆 바닥', '']], answer: '×, ○, ×' }] },
      }),
      X('activity.mix-dilemma', {
        title: '다른 세제를 더 붓자고 해요', method: '갈림길: 욕실 청소 중 다른 세제를 더 붓자고 해요', tool: 'dilemma', minutes: 13,
        levels: { easy: '갈림 1번(섞을지 말지)에서 고르고 근거 한 장을 고른다.', base: '갈림 2번(냄새가 날 때 환기)을 지나 근거를 고른다.', challenge: '갈림 3번(눈이 따가울 때)까지 지나 근거를 모두 고르고 다른 길과 견준다.' },
        activity: {
          title: '갈림길: 세제를 섞자고 해요', tool: 'dilemma',
          teacher: '"두 세제를 섞으면 정말 더 깨끗해질까요?" 결과 칸을 소리 내어 읽게 하고, 제품 뒷면의 \'섞지 마세요\' 표시를 다시 떠올리게 한다. "형이 하자고 하면 따라야 해요"라는 학생에게 "표시를 읽은 내가 먼저 말해 줄 수 있어요. 어떻게 말하면 좋을까요?"라고 묻는다. 냄새가 독하면 하던 일을 멈추고 창문을 열고 나와야 한다는 점을 짚는다.',
          task: '청소하는 상황의 갈림길마다 고르고, 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '욕실 청소를 도와요',
            steps: [
              { text: '욕실 청소를 돕는데 형이 "다른 세제도 같이 부으면 더 깨끗해져"라고 해요.', motif: 'wave',
                good: ['no', '섞지 말자고 말한다', '한 가지 세제만 표시대로 써요.', [['형과 나', '해로운 냄새를 피해요', 1]]],
                bad: ['mix', '두 세제를 함께 붓는다', '코를 찌르는 냄새가 나고 눈이 따가워요.', '세제끼리 섞으면 몸에 해로운 냄새가 날 수 있어요.', [['형과 나', '숨쉬기 힘들어요', -1]]] },
              { text: '한 가지만 썼는데도 욕실 냄새가 독하고 머리가 조금 아파요.', motif: 'cloud',
                good: ['air', '창문을 열고 욕실 밖으로 나온다', '바람이 통하고 머리가 덜 아파요.', [['나', '맑은 공기를 마셔요', 1]]],
                bad: ['stay', '끝까지 청소를 마친다', '머리가 더 아프고 어지러워요.', '몸이 이상하면 먼저 멈추고 밖으로 나와요.', [['나', '더 아파요', -1]]] },
              { text: '밖으로 나왔는데 눈이 계속 따가워요.', motif: 'sun',
                good: ['tell', '어른께 알리고 흐르는 물로 씻는다', '어른의 도움으로 눈이 괜찮아졌어요.', [['나', '빨리 도움을 받아요', 1]]],
                bad: ['rub', '손으로 눈을 비빈다', '눈이 더 따갑고 빨개져요.', '눈을 비비면 더 다칠 수 있어요. 어른께 알려요.', [['나', '눈이 더 아파요', -1]]] },
            ],
            ending: '표시대로 쓰고, 이상하면 멈추고 알려서 모두 괜찮았어요.',
            reasons: [{ id: 'label', text: '제품 표시대로 써야 안전하다' }, { id: 'tell', text: '몸이 이상하면 멈추고 어른께 알린다' }, { id: 'more', text: '많이 섞을수록 깨끗해진다', why: '세제끼리 섞으면 더 위험해질 수 있어요.' }, { id: 'pass', text: '냄새는 참으면 금방 사라진다', why: '냄새가 독하면 참지 말고 나와야 해요.' }],
            good: ['label', 'tell'],
            talk: '모둠에서 "세제를 섞자는 말에 어떻게 대답할까?"를 한 문장씩 말해요.',
            conclude: '세제는 섞지 않고, 냄새가 독하면 창문을 열고 밖으로 나와요.',
          }),
        },
        worksheet: { items: [{ type: 'choice', prompt: '청소 중 냄새가 독해요. 먼저 할 일은 무엇인가요?', options: ['세제를 더 붓는다', '창문을 열고 밖으로 나온다', '참고 끝까지 한다'], answer: '창문을 열고 밖으로 나온다' }] },
      }),
      X('activity.microwave-order', {
        title: '전자레인지 쓰는 차례', method: '전자레인지 쓰는 순서', tool: 'kitchen', minutes: 14,
        levels: { easy: '차례 카드 3장을 놓는다.', base: '차례 카드 4장(그릇 확인 → 뚜껑 살짝 → 시간 → 장갑)을 놓는다.', challenge: '카드 4장 사이에 섞인 함정 카드(금속 그릇)를 빼고 놓는다.' },
        activity: {
          title: '전자레인지 차례대로 쓰기', tool: 'kitchen',
          teacher: '"전자레인지에 넣기 전에 가장 먼저 볼 것은 무엇일까요?" 카드를 놓은 뒤 반 전체가 차례를 손동작으로 따라 하게 한다. "아무 그릇이나 괜찮아요"라는 학생에게 "금속 그릇이나 알루미늄 포일은 불꽃이 튈 수 있어요. 그릇 밑면 표시를 봐요"라고 말해 준다. 꽉 닫은 뚜껑은 김이 빠지지 않아 위험하다는 점도 짚는다.',
          task: '전자레인지를 쓰는 차례 카드를 놓고, 넣어도 되는 것을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDER('남은 밥을 데우는 차례대로 놓아요.', ['그릇 밑면 확인하기', '뚜껑 살짝 열기', '시간 맞추기', '장갑 끼고 꺼내기'], { mode: 'order', easy: [0, 2, 3], trap: '금속 그릇에 담기' }, 0.2),
            { prompt: '전자레인지에 넣어도 되는 것만 골라 담아요.', toolOptions: { mode: 'pick', basket: '넣어도 돼요', cards: ['전자레인지용 그릇', '알루미늄 포일', '전자레인지용 뚜껑', '금속 숟가락', '꽉 닫은 통'] }, target: { pick: ['전자레인지용 그릇', '전자레인지용 뚜껑'] }, difficulty: 0.2 },
            ORDER('데운 음식을 꺼내는 차례대로 놓아요.', ['멈춘 뒤 문 열기', '장갑 끼기', '두 손으로 꺼내기', '김 조심하며 뚜껑 열기'], { mode: 'order', easy: [0, 1, 2], trap: '맨손으로 바로 들기' }, 0.25, { conclude: '그릇을 확인하고, 뚜껑은 살짝 열고, 장갑을 끼고 꺼내요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '전자레인지에는 ___ 그릇이나 알루미늄 포일을 넣지 않아요.', answer: '금속' }] },
      }),
      X('activity.kitchen-story', {
        title: '부엌 위험 순간 이야기', method: '부엌 위험 순간 이야기 차례', tool: 'story', minutes: 14,
        levels: { easy: '이야기 장면 3장을 차례대로 놓는다.', base: '장면 4장을 차례대로 놓는다.', challenge: '장면 4장에 섞인 틀린 장면을 빼고 놓은 뒤 그 장면의 결과를 말한다.' },
        activity: {
          title: '부엌 이야기 차례 놓기', tool: 'story',
          teacher: '"라면을 끓일 때 가장 위험한 순간은 언제일까요?" 장면을 놓을 때마다 그 장면에서 조심할 점을 말하게 한다. "물이 끓을 동안은 잠깐 방에 가도 돼요"라는 학생에게 "그 사이 물이 넘치거나 불이 꺼지면 어떻게 될까요? 불 옆을 떠나지 않아요"라고 말해 준다. 냄비 손잡이를 안쪽으로 돌려 두는 까닭도 묻는다.',
          task: '부엌 이야기 장면을 일이 일어나는 차례대로 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDER('라면 끓이는 이야기를 차례대로 놓아요.', ['물을 올리고 불 켜기', '손잡이를 안쪽으로', '다 끓으면 불 끄기', '식혀서 먹기'], { trap: '끓는 동안 TV 보러 가기', motifs: ['sun', 'house', 'star', 'leaf'] }, 0.2),
            ORDER('달걀 삶는 이야기를 차례대로 놓아요.', ['냄비에 물 붓기', '불 옆 지키기', '불 끄기 확인', '찬물에 식히기'], { easy: [0, 2, 3], trap: '뜨거운 달걀 맨손으로', motifs: ['wave', 'sun', 'star', 'snow'] }, 0.25),
            ORDER('과일 깎는 이야기를 차례대로 놓아요.', ['도마를 바르게 놓기', '칼끝을 아래로 들기', '몸 바깥쪽으로 깎기', '칼을 바로 씻어 두기'], { easy: [0, 2, 3], trap: '칼 들고 장난치기', motifs: ['tree', 'leaf', 'flower', 'wave'] }, 0.3, { conclude: '불 옆을 떠나지 않고, 손잡이는 안쪽으로, 칼은 쓰고 바로 정리해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '라면을 끓일 때 불 옆을 떠나면 생길 수 있는 일을 써요.' }] },
      }),
      X('wrap.chem-self', {
        title: '우리 집 화학제품 점검표', method: '우리 집 화학제품 자기 점검표', tool: 'timer', minutes: 7,
        levels: { easy: '점검 칸 2개(표시 읽기·섞지 않기)를 표시한다.', base: '점검 칸 3개를 표시한다.', challenge: '점검 칸 4개를 표시하고 가족과 함께 할 실천을 쓴다.' },
        wrap: {
          teacher: '"오늘 집에 가서 세제 통 하나를 골라 뒷면을 함께 읽어 볼까요?" 점검 칸을 스스로 읽고 지킬 수 있는 것에 표시하게 한다. 출구 2번에서 "향이 강한 것끼리 섞어요"를 고른 학생에게 "섞지 마세요 표시를 떠올려 봐요"라고 말해 준다.',
          exitTicket: [
            SELF('화학제품 점검', ['제품 뒷면 표시를 읽는다', '세제끼리 섞지 않는다', '손 닿지 않는 곳에 둔다', '쓸 때 창문을 연다']),
            { type: 'choice', prompt: '표백제를 다른 병에 옮겨 담으면 생길 수 있는 일은?', options: ['더 오래 쓸 수 있다', '누가 음료로 잘못 마실 수 있다', '냄새가 사라진다'], answer: 1, difficulty: 0.2, explain: '원래 통이 아니면 무엇인지 알 수 없어 잘못 마실 수 있어요.' },
            { type: 'short', prompt: '가족과 함께 할 화학제품 안전 실천 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '표시를 읽고 섞지 않아요',
          items: [
            { type: 'check', prompt: '집에서 가족과 함께 살펴봐요.', options: ['세제가 원래 통에 있어요', '뚜껑이 닫혀 있어요', '동생 손이 닿지 않아요'] },
            { type: 'short', prompt: '세제 통 뒷면에서 찾은 표시 하나를 옮겨 써요.' },
          ],
          easy: { note: '세제 통 뒷면의 그림 표시를 먼저 찾아요.', items: [{ type: 'draw', prompt: '세제를 바르게 보관한 모습을 그려요.' }] },
        },
      }),
      X('wrap.kitchen-tl', {
        title: '요리 전·중·후 실천', method: '요리 전·중·후 실천', tool: 'timeline', minutes: 7,
        levels: { easy: '실천 카드 3장을 요리 전·중·후에 나눈다.', base: '실천 카드 5장을 나눈다.', challenge: '실천 카드 6장을 나눈다.' },
        wrap: {
          teacher: '"요리를 시작하기 전, 하는 중, 끝난 뒤에 할 일은 무엇일까요?" 시간 띠에 카드를 나눈 뒤 오늘 배운 부엌 위험 순간을 하나씩 떠올리게 한다. "불 끄기는 요리 중에 해요"라고 하는 학생에게 "다 끝났을 때 한 번 더 확인하는 것도 중요해요"라고 짚어 준다.',
          exitTicket: [
            TLX('요리할 때 실천 카드를 시간 띠에 나누어요.', ['요리 전', '요리 중', '요리 후'], { '요리 전': ['손 씻기', '그릇 확인하기'], '요리 중': ['불 옆 지키기', '손잡이 안쪽으로'], '요리 후': ['불 끄기 확인', '칼 바로 씻기'] }, ['손 씻기', '불 옆 지키기', '불 끄기 확인'], ['손 씻기', '그릇 확인하기', '불 옆 지키기', '손잡이 안쪽으로', '불 끄기 확인']),
            { type: 'choice', prompt: '냄비 손잡이를 안쪽으로 돌려 두는 까닭은 무엇인가요?', options: ['보기 좋아서', '지나가다 걸려 쏟지 않게', '빨리 끓으라고'], answer: 1, difficulty: 0.15, explain: '손잡이가 밖으로 나와 있으면 걸려서 뜨거운 것이 쏟아질 수 있어요.' },
            { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '부엌에서 안전하게',
          items: [
            { type: 'table', prompt: '요리할 때 할 일을 하나씩 써요.', columns: ['요리 전', '요리 중', '요리 후'], cells: [['', '', '']] },
            { type: 'choice', prompt: '물이 끓는 동안 어떻게 해요?', options: ['방에 가서 기다린다', '불 옆을 지킨다', '불을 더 세게 한다'], answer: '불 옆을 지킨다' },
          ],
        },
      }),
    );
  }

  // ======== 5학년 · 식중독 예방과 식품 보관 (별표 2 초등 생활안전 2. 식품 안전 알기) ========
  {
    const X = mk('g5-food-storage', 5);
    const SEASON = [['봄', 6], ['여름', 14], ['가을', 8], ['겨울', 4]];
    M.push(
      X('intro.fridge-pick', {
        title: '냉장고 속 잘못 보관 찾기', method: '냉장고 장면에서 잘못 보관 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 잘못 보관한 것 두 개(뚜껑 없는 반찬·밖에 둔 생고기)를 짚어 주고 고르게 한다.', base: '잘못 보관한 것 세 개를 스스로 고른다.', challenge: '네 개를 고르고 저마다 왜 상하기 쉬운지 까닭을 말한다.' },
        intro: {
          teacher: '"이 냉장고에서 음식이 빨리 상할 수 있는 곳은 어디일까요?" 시연 단추로 뚜껑 없는 반찬·밖에 둔 생고기·오래 열어 둔 우유가 바구니에 담기는 모습을 보인다. "냉장고에 넣으면 영원히 안 상해요"라는 말에는 "냉장고 안에서도 시간이 지나면 어떻게 될까요? 차갑게 하면 느려질 뿐이에요"라고 되묻는다.',
          student: '우리 집 냉장고에 무엇이 어떻게 들어 있었는지 떠올려 짝에게 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'pick', basket: '잘못 보관', cards: [{ id: 'open', text: '뚜껑 없는 반찬' }, { id: 'veg', text: '채소 칸의 오이' }, { id: 'meat', text: '밖에 둔 생고기' }, { id: 'frozen', text: '냉동실 만두' }, { id: 'milk', text: '며칠째 열어 둔 우유' }], shuffle: false }, sequence: [{ pick: ['open', 'meat', 'milk'] }] },
          art: art('an open paper refrigerator with paper food containers, one dish without a lid and raw meat left outside on the counter', '어디가 잘못 보관됐을까?', 'snow', 'sky'),
        },
      }),
      X('intro.cause-web', {
        title: '식중독 원인 그물', method: '식중독 원인 그물', tool: 'mindmap', minutes: 5,
        levels: { easy: '원인 카드 3장을 손·온도·시간 가지에 한 장씩 나눈다.', base: '원인 카드 5장을 세 가지에 나눈다.', challenge: '원인 카드 6장을 나누고 가지마다 막는 방법을 말한다.' },
        intro: {
          teacher: '"배탈은 왜 날까요?" 시연 단추로 \'안 씻은 손\'은 손 가지에, \'더운 날 밖에 둔 음식\'은 온도 가지에, \'오래 둔 음식\'은 시간 가지에 가는 모습을 보인다. "끓이면 상한 음식도 괜찮아요"라는 말에는 "상하면서 생긴 나쁜 것은 끓여도 다 없어지지 않을 수 있어요"라고 말해 주고 원인을 미리 막자고 한다.',
          student: '배가 아프지 않으려면 먹기 전에 무엇을 해야 할지 한 가지 말해 보아요.',
          demo: { tool: 'mindmap', options: { topic: '식중독', slots: ['손', '온도', '시간'], cards: ['안 씻은 손', '더운 날 밖에 둔 음식', '오래 둔 음식', '상처 난 손으로 조리', '날짜 지난 우유'] }, sequence: [{ sort: { 손: ['안 씻은 손', '상처 난 손으로 조리'], 온도: ['더운 날 밖에 둔 음식'], 시간: ['오래 둔 음식', '날짜 지난 우유'] } }] },
          art: art('a paper web diagram with three branches showing a hand, a thermometer and a clock around a sad paper lunch box', '식중독은 왜 생길까?', 'sun', 'peach'),
        },
      }),
      X('activity.temp-chart', {
        title: '계절별 배탈 기록 읽기(가상)', method: '가상 자료: 계절별 도시락 주의', tool: 'chart', minutes: 14,
        levels: { easy: '막대 두 개(여름·겨울)만 읽어 견준다.', base: '네 계절 막대를 견주어 가장 많은 계절을 찾는다.', challenge: '네 계절을 견준 뒤 많은 까닭을 추론한 문장을 고른다.' },
        activity: {
          title: '가상 보건실 기록 그래프 읽기', tool: 'chart',
          teacher: '"이 그래프는 우리 학교 보건실 기록처럼 꾸민 가상 자료예요. 배탈로 온 학생이 가장 많은 계절은 언제일까요?" 막대 끝을 눈금에 맞춰 읽게 한다. "겨울에 감기가 많으니 배탈도 겨울이 많아요"라는 학생에게 "그래프에서 겨울 막대는 어디까지 올라왔나요?"라고 되묻는다. 덥고 습할수록 음식이 빨리 상한다는 점과 그래서 여름 도시락에 더 조심한다는 점을 잇는다.',
          task: '가상의 보건실 기록 그래프를 읽고, 많은 계절과 그 까닭을 찾아요.', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            { prompt: '배탈로 보건실에 온 학생이 가장 많은 계절은 언제인가요?(가상 자료)', toolOptions: { type: 'bar', mode: 'read', title: '계절별 배탈 학생 수(가상)', unit: '명', data: SEASON, choices: ['봄', '여름', '가을', '겨울'], question: '가장 많은 계절은?' }, target: { pick: 1 }, difficulty: 0.15,
              levels: { easy: { prompt: '여름과 겨울 가운데 배탈 학생이 더 많은 계절은?(가상 자료)', toolOptions: { data: [SEASON[1], SEASON[3]], choices: ['여름', '겨울'] }, target: { pick: 0 } } } },
            { prompt: '표를 보고 막대그래프를 완성해요(가상 자료).', toolOptions: { type: 'bar', mode: 'build', title: '계절별 배탈 학생 수(가상)', unit: '명', data: SEASON, given: [0], scale: 2 }, target: { build: true }, difficulty: 0.25,
              levels: { easy: { toolOptions: { given: [0, 2] } } } },
            { prompt: '여름 막대가 가장 높은 까닭으로 알맞은 것을 골라요(가상 자료).', toolOptions: { type: 'bar', mode: 'read', title: '계절별 배탈 학생 수(가상)', unit: '명', data: SEASON, choices: ['더워서 음식이 빨리 상한다', '여름에는 손을 안 씻어도 된다', '추워서 배가 차가워진다'], question: '까닭은?', why: ['', '손 씻기는 언제나 해야 해요.', '그래프에서 추운 겨울은 가장 낮아요.'] }, target: { pick: 0 }, difficulty: 0.3, conclude: '더운 계절일수록 음식이 빨리 상해요. 도시락은 시원하게, 빨리 먹어요.' },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '그래프(가상)에서 배탈 학생이 가장 적은 계절은?', options: ['봄', '여름', '가을', '겨울'], answer: '겨울' }] },
        notes: '그래프 수치는 수업용 가상 자료다. 실제 통계처럼 말하지 않는다.',
      }),
      X('activity.prevent-order', {
        title: '식중독 예방 차례', method: '식중독 예방 순서', tool: 'story', minutes: 13,
        levels: { easy: '장면 3장을 차례대로 놓는다.', base: '장면 4장을 차례대로 놓는다.', challenge: '장면 4장에 섞인 틀린 장면을 빼고 놓는다.' },
        activity: {
          title: '식중독 예방 장면 차례 놓기', tool: 'story',
          teacher: '"장을 본 뒤 가장 먼저 할 일은 무엇일까요?" 장면을 놓을 때마다 그 장면이 손·온도·시간 가운데 무엇을 막는지 말하게 한다. "남은 음식은 식을 때까지 밤새 밖에 둬요"라는 학생에게 "따뜻한 채로 오래 두면 어떻게 될까요? 한 김 식으면 빨리 냉장해요"라고 말해 준다.',
          task: '식중독을 막는 장면 카드를 차례대로 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDER('장 보기부터 남은 음식까지 차례대로 놓아요.', ['장 보기', '바로 냉장하기', '손 씻고 조리하기', '남은 음식 빨리 냉장'], { trap: '남은 음식 밤새 밖에', motifs: ['house', 'snow', 'wave', 'snow'] }, 0.2),
            ORDER('체험학습 도시락을 준비하는 차례대로 놓아요.', ['손 씻기', '식힌 뒤 담기', '보냉 가방에 넣기', '점심때 바로 먹기'], { easy: [0, 2, 3], trap: '햇볕 드는 창가에 두기', motifs: ['wave', 'leaf', 'snow', 'sun'] }, 0.25),
            ORDER('수박을 잘라 먹는 차례대로 놓아요.', ['칼·도마 씻기', '자른 뒤 랩 씌우기', '바로 냉장하기', '빨리 먹기'], { easy: [0, 1, 2], trap: '자른 채 밖에 두기', motifs: ['wave', 'leaf', 'snow', 'star'] }, 0.3, { conclude: '손을 씻고, 차갑게 두고, 오래 두지 않으면 식중독을 막을 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '남은 음식은 밖에 오래 두지 말고 빨리 ___ 해요.', answer: '냉장' }] },
      }),
      X('activity.store-sort', {
        title: '식품별 보관 칸 나누기', method: '식품별 보관 칸 나누기', tool: 'kitchen', minutes: 14,
        levels: { easy: '식품 카드 4장을 냉장·냉동·실온 칸에 나눈다.', base: '식품 카드 6장을 나눈다.', challenge: '식품 카드 8장을 나누고, 포장의 보관 방법 표시를 읽고 판단한다.' },
        activity: {
          title: '냉장·냉동·실온 칸 나누기', tool: 'kitchen',
          teacher: '"라면과 우유는 같은 곳에 둘까요?" 카드를 놓기 전에 포장에 \'보관 방법\'이 쓰여 있다는 것을 떠올리게 한다. "과자도 냉장고에 넣으면 더 좋아요"라는 학생에게 "포장에 뭐라고 쓰여 있을까요? 표시대로 두는 것이 바른 보관이에요"라고 묻는다. 도전에서는 표시 카드를 읽고 판단하게 한다.',
          task: '식품 카드를 냉장·냉동·실온 칸에 나누고, 포장 표시를 읽어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORT('집에 사 온 식품을 보관 칸에 나누어요.', { slots: ['냉장', '냉동', '실온'], groups: { 냉장: ['우유', '두부'], 냉동: ['냉동만두', '아이스크림'], 실온: ['라면', '과자'] }, easy: [2, 1, 1], extra: { 냉장: ['요구르트'], 실온: ['통조림'] } }, 0.2),
            SORT('포장의 보관 방법 표시를 읽고 칸에 나누어요.', { slots: ['냉장', '냉동', '실온'], groups: { 냉장: ['냉장 보관', '개봉 후 냉장'], 냉동: ['냉동 보관', '녹으면 다시 얼리지 말 것'], 실온: ['직사광선 피해 보관', '서늘한 곳 보관'] }, easy: [1, 1, 2], extra: { 냉장: ['차갑게 보관하세요'], 냉동: ['얼려서 보관하세요'] } }, 0.25),
            CHK('포장에서 꼭 읽을 표시만 표시해요.', '포장에서 읽을 것', ['유통기한', '보관 방법', '개봉 후 보관', '원재료'], ['광고 문구', '캐릭터 그림'], { easy: 3, base: 4 }, 0.2, { conclude: '포장의 보관 방법과 날짜를 읽고 그대로 보관해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '알맞은 보관 칸을 써요.', columns: ['식품', '냉장·냉동·실온'], cells: [['우유', ''], ['냉동만두', ''], ['라면', '']], answer: '냉장, 냉동, 실온' }] },
        notes: '포장 표시 카드는 식품 포장의 보관 방법 문구 모양으로 지은 것이다. 온도 수치는 다루지 않는다.',
      }),
      X('activity.picnic-dilemma', {
        title: '체험학습 날 남은 김밥', method: '갈림길: 체험학습 날 남은 김밥', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번(먹을지 남길지)에서 고르고 근거 한 장을 고른다.', base: '갈림 2번(친구에게 말하기)을 지나 근거를 고른다.', challenge: '갈림 3번(집에서 정리)까지 지나 근거를 모두 고르고 다른 길과 견준다.' },
        activity: {
          title: '갈림길: 오후까지 남은 김밥', tool: 'dilemma',
          teacher: '"아침에 싼 김밥이 더운 날 오후까지 가방에 있었다면 먹어도 될까요?" 결과 칸을 읽고 손·온도·시간 가운데 무엇이 문제인지 말하게 한다. "냄새가 안 나면 괜찮아요"라는 학생에게 "냄새로 다 알 수 있을까요?"라고 묻고, "데우면 괜찮아요"라는 말에는 상한 음식은 데워도 안전해지지 않는다는 점을 짚는다. 음식이 아까운 마음도 인정해 준다.',
          task: '남은 김밥 상황의 갈림길마다 고르고, 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '체험학습 날 김밥',
            steps: [
              { text: '체험학습 날, 아침에 싼 김밥이 더운 오후까지 가방에 남았어요. 배가 고파요.', motif: 'sun',
                good: ['keep', '먹지 않고 남겨 둔다', '배탈 걱정 없이 일정을 마쳤어요.', [['나', '배탈을 피해요', 1]]],
                bad: ['eat', '배고프니 그냥 먹는다', '저녁에 배가 아파요.', '더운 날 오래 둔 음식은 상했을 수 있어요.', [['나', '배가 아파요', -1]]] },
              { text: '친구가 "냄새 안 나니까 괜찮아"라며 자기 김밥을 먹으려 해요.', motif: 'leaf',
                good: ['say', '상했을 수 있다고 말해 준다', '친구도 먹지 않기로 해요.', [['친구', '배탈을 피해요', 1]]],
                bad: ['quiet', '말없이 지켜본다', '친구가 집에 가서 배가 아파요.', '냄새가 없어도 상했을 수 있어요.', [['친구', '배가 아파요', -1]]] },
              { text: '집에 왔어요. 남은 김밥을 어떻게 할까요?', motif: 'house',
                good: ['adult', '보호자께 말하고 버린다', '깨끗하게 정리했어요.', [['가족', '모두 안전해요', 1]]],
                bad: ['heat', '데워서 저녁에 먹는다', '밤에 배가 아파요.', '상한 음식은 데워도 안전해지지 않아요.', [['나', '배가 아파요', -1]]] },
            ],
            ending: '아깝지만 먹지 않은 판단 덕분에 모두 배탈 없이 지냈어요.',
            reasons: [{ id: 'time', text: '더운 날 오래 둔 음식은 상할 수 있다' }, { id: 'smell', text: '냄새로는 상했는지 다 알 수 없다' }, { id: 'waste', text: '아까우니 꼭 먹어야 한다', why: '아깝더라도 몸이 먼저예요.' }, { id: 'heat', text: '데우면 다 괜찮아진다', why: '상한 음식은 데워도 안전해지지 않아요.' }],
            good: ['time', 'smell'],
            talk: '모둠에서 "체험학습 도시락을 상하지 않게 하려면?"을 한 가지씩 말해요.',
            conclude: '더운 날 오래 둔 음식은 아까워도 먹지 않고 어른께 알려요.',
          }),
        },
        worksheet: { items: [{ type: 'choice', prompt: '더운 날 오후까지 가방에 있던 김밥은 어떻게 할까요?', options: ['데워서 먹는다', '먹지 않고 어른께 알린다', '친구에게 준다'], answer: '먹지 않고 어른께 알린다' }] },
      }),
      X('wrap.food-self5', {
        title: '식품 안전 자기 점검표', method: '식품 안전 자기 점검표', tool: 'timer', minutes: 7,
        levels: { easy: '점검 칸 2개(손 씻기·보관)를 표시한다.', base: '점검 칸 3개를 표시한다.', challenge: '점검 칸 4개를 표시하고 이번 주 실천을 쓴다.' },
        wrap: {
          teacher: '"오늘 배운 것 가운데 이번 주에 꼭 해 볼 것은 무엇인가요?" 점검 칸을 스스로 읽고 표시하게 한다. 출구 2번에서 "냉장고에 넣었으니 오래 둬도 돼요"를 고른 학생에게 "냉장고는 상하는 것을 느리게 할 뿐이에요"라고 말해 준다.',
          exitTicket: [
            SELF('식품 안전 점검', ['먹기 전에 손을 씻는다', '남은 음식은 빨리 냉장한다', '보관 방법 표시를 읽는다', '오래 둔 음식은 먹지 않는다']),
            { type: 'choice', prompt: '냉장고 속 음식에 대해 바른 말은 무엇인가요?', options: ['냉장고에 넣으면 안 상한다', '차가워도 오래 두면 상할 수 있다', '냉장고에선 날짜를 안 봐도 된다'], answer: 1, difficulty: 0.2, explain: '냉장은 상하는 것을 느리게 할 뿐 멈추지는 못해요.' },
            { type: 'short', prompt: '이번 주에 해 볼 식품 안전 실천 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '손·온도·시간을 지켜요',
          items: [
            { type: 'check', prompt: '이번 주에 할 수 있는 것에 표시해요.', options: ['먹기 전에 손 씻기', '남은 음식 빨리 냉장하기', '포장의 날짜 읽기'] },
            { type: 'short', prompt: '식중독을 막는 방법 하나를 가족에게 알려 줄 말로 써요.' },
          ],
          easy: { note: '손, 온도, 시간을 떠올려요.', items: [{ type: 'draw', prompt: '먹기 전에 손을 씻는 내 모습을 그려요.' }] },
        },
      }),
      X('wrap.food-rubric', {
        title: '가족에게 보낼 보관 안내', method: '가족에게 보낼 보관 안내 한 줄', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '기준 2개로 점검하고 문장 틀을 써도 된다.', base: '기준 3개(정확한가·짧은가·실천할 수 있는가)로 점검한다.', challenge: '기준 3개로 점검한 뒤 한 군데를 고쳐 쓰고, 꼭 넣을 낱말을 넣는다.' },
        wrap: {
          teacher: '"가족에게 보낼 냉장고 안내 문구를 한두 문장으로 써 볼까요?" 기준표를 함께 읽고 쓴 뒤 스스로 점검하게 한다. "음식을 조심하세요"처럼 막연하게 쓴 학생에게 "무엇을, 어디에, 언제 하라는 말일까요? 실천할 수 있게 써 봐요"라고 묻는다. 가족 이름이나 집 주소는 쓰지 않게 한다.',
          exitTicket: [
            RUBX('가족에게 보낼 식품 보관 안내를 한두 문장으로 쓰고 기준표로 점검해요.', { topic: '가족에게 보낼 식품 보관 안내(한두 문장)', title: '보관 안내 쓰기', starter: '남은 반찬은 ~에 넣어 주세요. 왜냐하면 ~', crit: ['보관 방법이 정확하다', '한두 문장으로 짧다', '가족이 실천할 수 있다'], must: [['냉장', '냉동', '뚜껑']], chars: [20, 120] }),
            { type: 'choice', prompt: '보관 안내 문구로 가장 알맞은 것은 무엇인가요?', options: ['음식을 조심하세요', '남은 반찬은 뚜껑 덮어 냉장해요', '냉장고를 자주 여세요'], answer: 1, difficulty: 0.2, explain: '무엇을 어떻게 할지 분명한 문구가 실천하기 쉬워요.' },
            { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '우리 집 보관 안내',
          items: [
            { type: 'short', prompt: '가족에게 보낼 식품 보관 안내 한 문장을 다시 써요.' },
            { type: 'check', prompt: '내 안내 문구를 점검해요.', options: ['정확한가요', '짧은가요', '실천할 수 있나요'] },
          ],
        },
      }),
    );
  }

  // ======== 5학년 · 실험·실습 사고 대처와 정리 (별표 2 초등 생활안전 3. 실험·실습 시 안전에 유의하기) ========
  {
    const X = mk('g5-lab-accident', 5);
    const LAB = (extra = []) => [
      { name: '내 자리', icon: 'house', at: [2, 1], legend: '내 자리' }, { name: '소화기 1', icon: 'fire', at: [0, 1], legend: '소화기' },
      { name: '소화기 2', icon: 'fire', at: [5, 3], legend: '소화기' }, { name: '눈 씻는 곳', icon: 'dot', at: [4, 0] },
      { name: '구급함', icon: 'hospital', at: [1, 3], legend: '구급함' }, ...extra,
    ];
    M.push(
      X('intro.lab-moment', {
        title: '실험실에서 멈출 순간 찾기', method: '실험실 사고 순간 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 멈춰야 할 순간 두 개(깨진 비커·손에 묻은 액체)를 짚어 주고 고르게 한다.', base: '멈춰야 할 순간 세 개를 스스로 고른다.', challenge: '세 개를 고르고 저마다 왜 멈춰야 하는지 까닭을 말한다.' },
        intro: {
          teacher: '"실험하다가 이런 일이 생기면 가장 먼저 무엇을 해야 할까요?" 시연 단추로 깨진 비커·손에 묻은 액체·뜨거운 삼발이 장면이 바구니에 담기는 모습을 보인다. "작은 일은 말 안 하고 내가 치우면 돼요"라는 말에는 "작은 유리 조각이 남으면 다음 사람은 어떻게 될까요?"라고 되물어 멈추고 알리는 것이 먼저라는 점을 짚는다.',
          student: '과학 시간에 조심해야 했던 순간을 하나 떠올려 짝에게 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'pick', basket: '멈춰야 할 순간', cards: [{ id: 'glass', text: '깨진 비커' }, { id: 'tidy', text: '정리된 책상' }, { id: 'liquid', text: '손에 묻은 액체' }, { id: 'goggle', text: '보안경 쓴 친구' }, { id: 'hot', text: '방금 쓴 뜨거운 삼발이' }], shuffle: false }, sequence: [{ pick: ['glass', 'liquid', 'hot'] }] },
          art: art('a paper science room with a broken paper beaker on the floor and paper children stepping back and raising a hand', '멈추고 알려요', 'star', 'lavender'),
        },
        notes: '다쳤던 경험을 자세히 말하게 하지 않는다. "본 적 있는 장면"으로 묻는다.',
      }),
      X('intro.lab-cause', {
        title: '실험 사고 원인 그물', method: '사고 원인 그물', tool: 'mindmap', minutes: 5,
        levels: { easy: '카드 3장을 사고 원인·안전한 습관 가지에 나눈다.', base: '카드 5장을 나눈다.', challenge: '카드 6장을 나누고 원인마다 막는 습관을 짝지어 말한다.' },
        intro: {
          teacher: '"실험 사고는 왜 생길까요?" 시연 단추로 서두르기·정리 안 된 책상·장난치기는 원인 가지로, 설명 끝까지 듣기·보안경 쓰기는 습관 가지로 가는 모습을 보인다. "사고는 운이 나빠서 생겨요"라는 말에는 "서두르거나 책상이 어지러우면 어떻게 될까요? 원인을 알면 막을 수 있어요"라고 되묻는다.',
          student: '실험할 때 내가 지키는 습관 하나를 말해 보아요.',
          demo: { tool: 'mindmap', options: { topic: '실험 사고', slots: ['사고 원인', '안전한 습관'], cards: ['서두르기', '설명 끝까지 듣기', '정리 안 된 책상', '보안경 쓰기', '장난치기'] }, sequence: [{ sort: { '사고 원인': ['서두르기', '정리 안 된 책상', '장난치기'], '안전한 습관': ['설명 끝까지 듣기', '보안경 쓰기'] } }] },
          art: art('a paper mind map with a beaker in the middle and branches holding paper cards about hurrying and tidy desks', '사고는 왜 생길까?', 'leaf', 'mint'),
        },
      }),
      X('activity.glass-order', {
        title: '유리가 깨졌을 때 차례', method: '유리가 깨졌을 때 차례', tool: 'story', minutes: 14,
        levels: { easy: '장면 3장을 차례대로 놓는다.', base: '장면 4장(멈추기 → 알리기 → 선생님께 → 정해진 도구로 치우기)을 놓는다.', challenge: '장면 4장에 섞인 틀린 장면(손으로 줍기)을 빼고 놓는다.' },
        activity: {
          title: '사고가 났을 때 장면 차례', tool: 'story',
          teacher: '"비커가 깨졌어요. 가장 먼저 할 일은 무엇일까요?" 장면을 놓은 뒤 반 전체가 \'멈춤 → 손 들기\' 동작을 함께 해 본다. "깨뜨린 사람이 빨리 손으로 치우는 게 예의예요"라는 학생에게 "손으로 주우면 어떻게 될까요? 선생님이 정해 둔 도구로 치워요"라고 말해 준다. 숨기지 않고 알리는 것이 다른 친구를 지킨다는 점을 짚는다.',
          task: '실험·실습 중 사고가 났을 때 할 일을 차례대로 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDER('비커가 깨졌어요. 할 일을 차례대로 놓아요.', ['그 자리에 멈추기', '주변 친구에게 알리기', '선생님께 말하기', '정해진 도구로 치우기'], { trap: '손으로 빨리 줍기', motifs: ['star', 'bird', 'house', 'leaf'] }, 0.2),
            ORDER('시험관 액체를 쏟았어요. 할 일을 차례대로 놓아요.', ['멈추고 물러서기', '친구에게 알리기', '선생님께 말하기', '지시대로 닦기'], { easy: [0, 2, 3], trap: '몰래 휴지로 닦기', motifs: ['wave', 'bird', 'house', 'leaf'] }, 0.25),
            ORDER('바느질하다 바늘에 찔렸어요. 할 일을 차례대로 놓아요.', ['바늘 내려놓기', '선생님께 알리기', '흐르는 물로 씻기', '보건실 가기'], { easy: [0, 1, 3], trap: '참고 계속하기', motifs: ['flower', 'house', 'wave', 'star'] }, 0.3, { conclude: '사고가 나면 멈추고, 알리고, 정해진 방법으로 정리해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '깨진 유리는 ___으로 줍지 않고 선생님께 알려요.', answer: '손' }] },
      }),
      X('activity.splash-dilemma', {
        title: '손에 약품이 묻었어요', method: '갈림길: 손에 약품이 묻었어요', tool: 'dilemma', minutes: 13,
        levels: { easy: '갈림 1번(닦고 넘어갈지 알릴지)에서 고르고 근거 한 장을 고른다.', base: '갈림 2번(충분히 씻기)을 지나 근거를 고른다.', challenge: '갈림 3번(다시 시작할 때)까지 지나 근거를 모두 고르고 다른 길과 견준다.' },
        activity: {
          title: '갈림길: 손에 약품이 묻었어요', tool: 'dilemma',
          teacher: '"따끔하지 않으면 말하지 않아도 될까요?" 고를 때마다 결과를 소리 내어 읽게 한다. "말하면 혼날 것 같아요"라는 학생에게 "선생님이 빨리 알수록 빨리 도와줄 수 있어요. 숨기면 누가 위험해질까요?"라고 묻는다. 흐르는 물로 충분히 씻고, 다시 할 때는 보호 장구를 갖춘다는 점을 짚는다.',
          task: '손에 약품이 묻은 상황의 갈림길마다 고르고, 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '손에 약품이 묻었어요',
            steps: [
              { text: '실험 중 손등에 약품이 조금 묻었어요. 아직 따끔하지는 않아요.', motif: 'wave',
                good: ['tell', '손을 들고 선생님께 알린다', '선생님이 바로 살펴봐요.', [['나', '빨리 도움을 받아요', 1]]],
                bad: ['wipe', '옷에 닦고 계속한다', '조금 뒤 손등이 빨갛게 부어올라요.', '작은 일도 바로 알려야 해요.', [['나', '손이 더 아파요', -1]]] },
              { text: '선생님이 흐르는 물로 씻으라고 해요. 모둠 친구가 빨리 오라고 재촉해요.', motif: 'cloud',
                good: ['wash', '지시대로 충분히 씻는다', '따가움 없이 깨끗해졌어요.', [['나', '약품이 남지 않아요', 1]]],
                bad: ['quick', '잠깐만 헹구고 돌아간다', '손등에 따가움이 남아요.', '충분히 씻어야 약품이 남지 않아요.', [['나', '계속 따가워요', -1]]] },
              { text: '다 씻었어요. 실험을 다시 시작할까요?', motif: 'star',
                good: ['glove', '장갑을 끼고 다시 한다', '다시 묻지 않고 실험을 마쳤어요.', [['모둠', '함께 안전해요', 1]]],
                bad: ['bare', '맨손으로 서둘러 한다', '또 묻을 뻔했어요.', '보호 장구를 갖추고 다시 해요.', [['나', '또 다칠 수 있어요', -1]]] },
            ],
            ending: '바로 알리고 충분히 씻은 판단 덕분에 손이 괜찮았어요.',
            reasons: [{ id: 'tell', text: '작은 사고도 바로 알린다' }, { id: 'wash', text: '흐르는 물로 충분히 씻는다' }, { id: 'ok', text: '아프지 않으면 괜찮다', why: '약품은 조금 뒤에 아플 수 있어요.' }, { id: 'scold', text: '말하면 혼나니 숨긴다', why: '숨기면 더 크게 다칠 수 있어요.' }],
            good: ['tell', 'wash'],
            talk: '모둠에서 "작은 사고도 알려야 하는 까닭"을 한 가지씩 말해요.',
            conclude: '약품이 묻으면 숨기지 말고 알리고, 흐르는 물로 충분히 씻어요.',
          }),
        },
        worksheet: { items: [{ type: 'choice', prompt: '손에 약품이 묻었는데 아프지 않아요. 어떻게 할까요?', options: ['옷에 닦고 계속한다', '선생님께 알리고 물로 씻는다', '아플 때까지 기다린다'], answer: '선생님께 알리고 물로 씻는다' }] },
      }),
      X('activity.tool-count', {
        title: '실습 도구 정리 점검표', method: '실습 도구 정리 점검표', tool: 'kitchen', minutes: 14,
        levels: { easy: '점검 칸 3개를 표시한다.', base: '점검 칸 4개를 표시한다.', challenge: '점검 칸 5개를 표시하고 모둠에서 정리 역할을 나눈다.' },
        activity: {
          title: '실습 뒤 정리 점검표', tool: 'kitchen',
          teacher: '"바늘을 몇 개 받았는지 세어 보지 않으면 어떻게 될까요?" 모둠이 점검표를 소리 내어 읽고 정리할 것만 표시하게 한다. "개수대에 칼을 담가 두면 나중에 씻기 편해요"라는 학생에게 "물속에 칼이 보이지 않으면 다음 사람이 어떻게 될까요?"라고 묻는다. 받은 수와 돌려준 수를 맞추는 습관을 짚는다.',
          task: '실습이 끝난 뒤 정리할 일만 골라 점검표에 표시해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            CHK('바느질 실습 뒤 정리할 일만 표시해요.', '바느질 실습 정리', ['바늘 수 세기', '바늘꽂이에 꽂기', '가위 날 닫기', '실 자투리 버리기', '받은 수만큼 돌려주기'], ['바늘을 책상에 두기'], { easy: 3, base: 4 }, 0.2),
            CHK('조리 실습 뒤 정리할 일만 표시해요.', '조리 실습 정리', ['칼 수 세기', '칼은 씻어 칼꽂이에', '가스 밸브 잠그기', '도마 세워 말리기', '바닥 물기 닦기'], ['칼을 개수대에 담가 두기'], { easy: 3, base: 4 }, 0.25, { conclude: '받은 도구는 수를 세어 돌려주고, 위험한 도구는 제자리에 둬요.' }),
            { prompt: '모둠에서 정리 역할(세는 사람·확인하는 사람·돌려주는 사람)을 나누어 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '받은 수와 돌려준 수를 써요.', columns: ['도구', '받은 수', '돌려준 수'], cells: [['바늘', '', ''], ['가위', '', '']] }] },
      }),
      X('activity.lab-map5', {
        title: '실험실 비상 물품 찾기', method: '실험실 지도에서 비상 물품', tool: 'map', minutes: 14,
        levels: { easy: '비상 물품 하나에 핀을 꽂고, 핀을 놓으면 칸 이름이 보인다.', base: '소화기·눈 씻는 곳·구급함 세 곳에 핀을 꽂는다.', challenge: '세 곳을 찾고, 가까운 소화기 쪽 길이 막힌 조건에서 다른 소화기까지 경로를 고른다.' },
        activity: {
          title: '실험실 지도에 비상 물품 꽂기', tool: 'map',
          teacher: '"우리 실험실 소화기는 어디에 있을까요? 내 자리에서 몇 칸일까요?" 지도 칸을 세며 가까운 곳을 고르게 한다. "비상 물품은 선생님만 알면 돼요"라는 학생에게 "선생님이 다른 곳을 돌보고 있다면요? 모두 알아 두면 더 빨리 도울 수 있어요"라고 말해 준다. 수업 뒤 실제 실험실에서 자리를 확인해 보게 한다.',
          task: '실험실 지도에서 비상 물품이 있는 곳에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            { prompt: '내 자리에서 가장 가까운 소화기에 핀을 꽂아요.', toolOptions: { grid: [6, 4], title: '우리 실험실', places: LAB(), legend: false }, target: { place: '소화기 1' }, difficulty: 0.2,
              levels: { challenge: { prompt: '소화기 1로 가는 통로가 막혔어요. 다른 소화기에 핀을 꽂아요.', toolOptions: { places: LAB([{ name: '막힌 통로', icon: 'dot', at: [1, 1] }]) }, target: { place: '소화기 2' } } } },
            { prompt: '약품이 눈에 튀었을 때 갈 곳에 핀을 꽂아요.', toolOptions: { grid: [6, 4], title: '우리 실험실', places: LAB(), legend: false }, target: { place: '눈 씻는 곳' }, difficulty: 0.2 },
            { prompt: '손을 베였을 때 쓸 구급함이 있는 곳에 핀을 꽂아요.', toolOptions: { grid: [6, 4], title: '우리 실험실', places: LAB(), legend: false }, target: { place: '구급함' }, difficulty: 0.25, conclude: '실험 전에 소화기·눈 씻는 곳·구급함 자리를 먼저 확인해요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 학교 과학실의 소화기는 어디에 있는지 써요.' }] },
        notes: '실험실 칸 지도는 꾸민 것이다. 우리 학교 과학실의 실제 자리와 견주어 보게 한다.',
      }),
      X('wrap.lab-self5', {
        title: '실험 안전 자기 점검표', method: '실험 안전 자기 점검표', tool: 'timer', minutes: 7,
        levels: { easy: '점검 칸 2개를 표시한다.', base: '점검 칸 3개를 표시한다.', challenge: '점검 칸 4개를 표시하고 고칠 습관 하나를 쓴다.' },
        wrap: {
          teacher: '"오늘 실험을 떠올려 보면, 내가 잘 지킨 것과 고칠 것은 무엇인가요?" 점검 칸을 정직하게 표시하게 하고, 표시하지 못한 칸은 고칠 습관으로 쓰게 한다. 출구 2번에서 "깨뜨린 사람이 손으로 치운다"를 고른 학생에게 "손으로 주우면 다칠 수 있어요. 멈추고 알려요"라고 말해 준다.',
          exitTicket: [
            SELF('실험 안전 점검', ['설명을 끝까지 들었다', '책상을 정리하고 시작했다', '사고가 나면 멈추고 알린다', '쓴 도구 수를 세었다']),
            { type: 'choice', prompt: '실험 중 유리가 깨졌어요. 가장 먼저 할 일은?', options: ['손으로 빨리 줍는다', '그 자리에 멈추고 알린다', '모른 척 계속한다'], answer: 1, difficulty: 0.15, explain: '멈추고 알리면 다른 친구도 다치지 않아요.' },
            { type: 'short', prompt: '다음 실험에서 고칠 습관 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '멈추고 알리고 정리해요',
          items: [
            { type: 'check', prompt: '오늘 실험에서 지킨 것에 표시해요.', options: ['설명 끝까지 듣기', '책상 정리하기', '도구 수 세기'] },
            { type: 'short', prompt: '작은 사고도 알려야 하는 까닭을 써요.' },
          ],
          easy: { note: '"멈추고 알려요"를 기억해요.', items: [{ type: 'draw', prompt: '손을 들고 선생님께 알리는 모습을 그려요.' }] },
        },
      }),
      X('wrap.lab-tl5', {
        title: '실험 전·중·후 대처', method: '실험 전·중·후 대처', tool: 'timeline', minutes: 7,
        levels: { easy: '카드 3장을 실험 전·중·후에 나눈다.', base: '카드 5장을 나눈다.', challenge: '카드 6장을 나눈다.' },
        wrap: {
          teacher: '"실험 전에 할 일, 하는 중에 사고가 나면 할 일, 끝난 뒤 할 일을 나누어 볼까요?" 시간 띠에 카드를 나눈 뒤 사고 대처 카드가 어디에 들어갔는지 확인한다. "손 씻기는 실험 전에만 해요"라는 학생에게 "실험이 끝난 뒤 손에 무엇이 남았을까요?"라고 묻는다.',
          exitTicket: [
            TLX('실험 할 일과 사고 대처 카드를 시간 띠에 나누어요.', ['실험 전', '실험 중', '실험 후'], { '실험 전': ['보안경 쓰기', '책상 정리하기'], '실험 중': ['깨지면 멈추고 알리기', '장난치지 않기'], '실험 후': ['도구 수 세기', '손 씻기'] }, ['보안경 쓰기', '깨지면 멈추고 알리기', '손 씻기'], ['보안경 쓰기', '책상 정리하기', '깨지면 멈추고 알리기', '도구 수 세기', '손 씻기']),
            { type: 'choice', prompt: '실습이 끝났어요. 바늘은 어떻게 할까요?', options: ['책상 위에 둔다', '수를 세어 바늘꽂이에 꽂는다', '가방에 넣는다'], answer: 1, difficulty: 0.15, explain: '수를 세어 제자리에 두면 잃어버린 바늘에 다치지 않아요.' },
            { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '실험 전·중·후',
          items: [
            { type: 'table', prompt: '실험할 때 할 일을 하나씩 써요.', columns: ['실험 전', '실험 중', '실험 후'], cells: [['', '', '']] },
            { type: 'choice', prompt: '약품이 손에 묻으면 먼저 어떻게 해요?', options: ['옷에 닦는다', '선생님께 알린다', '그냥 둔다'], answer: '선생님께 알린다' },
          ],
        },
      }),
    );
  }

  // ======== 5학년 · 체육 부상과 캠핑 안전 (별표 2 초등 생활안전 4. 안전한 놀이활동 및 야외 활동 + 표준안 '체육·여가활동') ========
  {
    const X = mk('g5-sports-camp', 5);
    // 부상 장면(가지)마다 알맞은 카드 한 장 잇기: pairs = [[장면, 카드]…], trap = 도전에 끼우는 함정 카드
    const MATCH = (prompt, topic, pairs, trap, d, more) => {
      const sl = pairs.map(([label], i) => ({ id: `b${i + 1}`, label }));
      const tg = (n) => ({ match: Object.fromEntries(pairs.slice(0, n).map(([, c], i) => [`b${i + 1}`, c])) });
      const cards = (n) => pairs.slice(0, n).map(([, c]) => c).reverse();
      return Object.assign({
        prompt, toolOptions: { mode: 'match', topic, slots: sl, cards: cards(3) }, target: tg(3), difficulty: d,
        levels: { easy: { prompt: `${cut(prompt)}(가지 2개).`, toolOptions: { slots: sl.slice(0, 2), cards: cards(2) }, target: tg(2) }, challenge: { prompt: `${cut(prompt)}(함정 카드 하나는 빼요).`, toolOptions: { cards: [...cards(3), trap] } } },
      }, more);
    };
    const CAMP = (extra = []) => [
      { name: '텐트 자리 가', icon: 'dot', at: [1, 1] }, { name: '텐트 자리 나', icon: 'dot', at: [3, 0] }, { name: '텐트 자리 다', icon: 'dot', at: [4, 2] },
      { name: '큰 나무', icon: 'forest', at: [3, 1] }, { name: '관리동', icon: 'office', at: [5, 3], legend: '관리동' }, ...extra,
    ];
    const CAMPMAP = { grid: [6, 4], title: '숲속 캠핑장', rivers: [[[0, 0], [0, 1], [0, 2], [0, 3]]], legend: false };
    M.push(
      X('intro.injury-body', {
        title: '부상이 잘 생기는 부위', method: '부상 잘 생기는 부위', tool: 'body', minutes: 6,
        levels: { easy: '교사가 두 곳(발목·무릎)을 짚어 주고 함께 고른다.', base: '공 경기·줄넘기에서 다치기 쉬운 세 곳을 스스로 고른다.', challenge: '세 곳을 고르고 부위마다 다치기 쉬운 종목을 잇는다.' },
        intro: {
          teacher: '"줄넘기를 하다 착지를 잘못하면 어디를 다치기 쉬울까요? 피구공을 손끝으로 받으면요?" 시연 단추로 종이 몸의 발목·손목·무릎이 차례로 골라지는 모습을 보인다. "조금 아픈 건 참고 계속하면 나아요"라는 말에는 "참고 계속 뛰면 다친 곳이 어떻게 될까요?"라고 되묻고 오늘은 다치지 않는 법과 다쳤을 때 알리는 법을 배운다고 밝힌다.',
          student: '체육 시간에 다치지 않으려고 하는 준비운동 하나를 몸으로 보여 주세요.',
          demo: { tool: 'body', options: { mode: 'parts', parts: ['목', '어깨', '손목', '허리', '무릎', '발목'], names: true }, sequence: [{ parts: ['발목', '손목', '무릎'] }] },
          art: art('paper children doing warm-up stretches before a ball game, with small stars marking ankles, wrists and knees', '다치기 쉬운 곳은?', 'star', 'peach'),
        },
        notes: '종이 몸에는 손가락이 없어 손가락 부상은 손목 자리로 이야기한다.',
      }),
      X('intro.camp-scene', {
        title: '캠핑장 위험한 곳 고르기', method: '캠핑장 장면에서 위험 고르기', tool: 'emotion', minutes: 5,
        levels: { easy: '교사가 위험한 곳 두 개를 짚어 주고 고르게 한다.', base: '위험한 곳 세 개(물가 텐트·불 옆 장난·천둥 때 큰 나무 밑)를 고른다.', challenge: '세 개를 고르고 저마다 왜 위험한지 까닭을 말한다.' },
        intro: {
          teacher: '"이 캠핑장 그림에서 위험한 곳은 어디일까요?" 시연 단추로 물가 바로 옆 텐트·불 옆 장난·천둥 칠 때 큰 나무 밑이 바구니에 담기는 모습을 보인다. "비가 오면 큰 나무 밑이 가장 안전해요"라는 말에는 "천둥과 번개가 칠 때도 그럴까요?"라고 되물어 오늘 활동에서 함께 알아보자고 한다.',
          student: '캠핑이나 야외 활동에서 조심해야 할 곳 한 곳을 짝에게 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'pick', basket: '위험한 곳', cards: [{ id: 'river', text: '물가 바로 옆 텐트' }, { id: 'far', text: '물에서 먼 텐트' }, { id: 'fire', text: '불 옆에서 장난' }, { id: 'adult', text: '어른과 불 피우기' }, { id: 'tree', text: '천둥 때 큰 나무 밑' }], shuffle: false }, sequence: [{ pick: ['river', 'fire', 'tree'] }] },
          art: art('a paper campsite with a tent close to a paper river, a small campfire and a tall tree under dark paper clouds', '캠핑장, 어디가 위험할까?', 'cloud', 'sky'),
        },
      }),
      X('activity.injury-cause', {
        title: '부상 원인과 예방 잇기', method: '부상 원인과 예방 잇기', tool: 'mindmap', minutes: 14,
        levels: { easy: '부상 장면 가지 2개에 원인·예방 카드를 잇는다.', base: '가지 3개에 카드를 잇는다.', challenge: '가지 3개에 잇되 섞인 함정 카드를 빼고, 빠진 예방 하나를 모둠에서 덧붙인다.' },
        activity: {
          title: '부상 장면에 원인·예방 잇기', tool: 'mindmap',
          teacher: '"줄넘기하다 발목을 접질린 까닭은 무엇이었을까요?" 가지에 카드를 이은 뒤 모둠에서 원인 → 결과를 한 문장으로 말하게 한다(예: 준비운동을 안 해서 → 발목을 접질렸어요). "다치는 건 운이 나빠서예요"라는 학생에게 "규칙을 지키고 준비운동을 했다면 어땠을까요?"라고 묻는다.',
          task: '부상 장면 가지마다 알맞은 원인 카드와 예방 카드를 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            MATCH('부상 장면마다 원인 카드를 이어요.', '왜 다쳤을까?', [['줄넘기하다 발목 접질림', '준비운동을 안 함'], ['피구공에 손가락 삐끗', '공을 손끝으로 받음'], ['축구하다 친구와 부딪힘', '앞을 안 보고 달림']], '운동화 끈이 예쁨', 0.2),
            MATCH('부상 장면마다 예방 카드를 이어요.', '어떻게 막을까?', [['줄넘기하다 발목 접질림', '발목 돌리기 준비운동'], ['피구공에 손가락 삐끗', '손바닥으로 공 받기'], ['축구하다 친구와 부딪힘', '고개 들고 앞 보기']], '아파도 참고 뛰기', 0.25, { conclude: '준비운동을 하고 규칙을 지키면 많은 부상을 막을 수 있어요.' }),
            { prompt: '모둠에서 빠진 예방 하나를 생각해 덧붙여 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '부상 장면의 원인과 예방을 써요.', columns: ['부상 장면', '원인', '예방'], cells: [['줄넘기 발목', '', ''], ['피구 손가락', '', '']] }] },
      }),
      X('activity.report-order', {
        title: '다쳤을 때 알리는 차례', method: '다쳤을 때 알리는 차례', tool: 'story', minutes: 13,
        levels: { easy: '장면 3장을 차례대로 놓는다.', base: '장면 4장(멈추기 → 움직이지 않기 → 알리기 → 보건실)을 놓는다.', challenge: '장면 4장에 섞인 틀린 장면(참고 계속 뛰기)을 빼고 놓는다.' },
        activity: {
          title: '다쳤을 때 장면 차례 놓기', tool: 'story',
          teacher: '"다쳤을 때 가장 먼저 무엇을 할까요?" 장면을 놓은 뒤 \'멈추기 → 손 들기\'를 몸으로 해 본다. "조금 아픈 것은 참고 계속하면 나아요"라는 학생에게 "참고 뛰면 다친 곳에 더 힘이 가요. 멈추고 알려야 해요"라고 말해 준다. 친구가 다쳤을 때 억지로 일으키지 않는다는 점도 짚는다.',
          task: '다쳤을 때 할 일 장면을 차례대로 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDER('피구하다 손가락을 다쳤어요. 차례대로 놓아요.', ['그 자리에 멈추기', '다친 곳 움직이지 않기', '선생님께 알리기', '보건실 가기'], { trap: '참고 계속 뛰기', motifs: ['star', 'leaf', 'house', 'flower'] }, 0.2),
            ORDER('친구가 넘어져 무릎을 다쳤어요. 차례대로 놓아요.', ['경기 멈추라고 말하기', '친구 곁에 있기', '선생님 부르기', '보건실 같이 가기'], { easy: [0, 2, 3], trap: '친구를 억지로 일으키기', motifs: ['bird', 'flower', 'house', 'star'] }, 0.25),
            ORDER('줄넘기하다 발목이 아파요. 차례대로 놓아요.', ['줄넘기 멈추기', '앉아서 쉬기', '선생님께 말하기', '보건실 확인 받기'], { easy: [0, 2, 3], trap: '아파도 끝까지 하기', motifs: ['star', 'leaf', 'house', 'flower'] }, 0.3, { conclude: '다치면 멈추고, 움직이지 않고, 바로 알려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '경기 중 발목이 조금 아파요. 어떻게 해요?', options: ['참고 끝까지 뛴다', '멈추고 선생님께 알린다', '친구에게만 말한다'], answer: '멈추고 선생님께 알린다' }] },
      }),
      X('activity.storm-dilemma', {
        title: '캠핑장에 천둥이 쳐요', method: '갈림길: 캠핑장에 천둥이 쳐요', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번(나무 밑이냐 건물이냐)에서 고르고 근거 한 장을 고른다.', base: '갈림 2번(물가 길)을 지나 근거를 고른다.', challenge: '갈림 3번(다시 나갈 때)까지 지나 근거를 모두 고르고 다른 길과 견준다.' },
        activity: {
          title: '갈림길: 천둥이 치는 캠핑장', tool: 'dilemma',
          teacher: '"천둥이 치면 왜 큰 나무 밑이 위험할까요?" 고를 때마다 결과를 읽고, 높은 곳·물가·큰 나무를 피한다는 점을 잇게 한다. "비를 피하려면 나무 밑이 제일이에요"라는 학생에게 "비를 피하는 곳과 번개를 피하는 곳은 같을까요? 건물이나 차 안으로 가요"라고 말해 준다. 그쳐 보여도 어른이 괜찮다고 할 때까지 기다리게 한다.',
          task: '천둥이 치는 캠핑장의 갈림길마다 고르고, 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '천둥 치는 캠핑장',
            steps: [
              { text: '캠핑장에서 놀다가 갑자기 천둥이 치고 비가 쏟아져요.', motif: 'cloud',
                good: ['inside', '관리동 건물 안으로 간다', '비와 번개를 함께 피했어요.', [['나', '안전해요', 1]]],
                bad: ['tree', '큰 나무 밑으로 뛰어간다', '나무 쪽으로 번개가 칠까 무서워요.', '천둥이 칠 때 큰 나무 밑은 위험해요.', [['나', '위험해요', -1]]] },
              { text: '관리동으로 가는 길 가운데 물가를 따라가면 더 가까워요.', motif: 'wave',
                good: ['road', '물가를 피해 안쪽 길로 간다', '조금 멀지만 안전하게 도착했어요.', [['나', '미끄러지지 않아요', 1]]],
                bad: ['river', '물가를 따라 뛰어간다', '물이 불어 길이 미끄러워요.', '비가 오면 물가는 물이 갑자기 불 수 있어요.', [['나', '넘어질 위험', -1]]] },
              { text: '건물 안에 들어왔어요. 친구가 천둥이 그친 것 같다며 나가 놀자고 해요.', motif: 'house',
                good: ['wait', '어른이 괜찮다고 할 때까지 기다린다', '다시 천둥이 쳤지만 안에 있어 괜찮았어요.', [['친구와 나', '함께 안전해요', 1]]],
                bad: ['out', '바로 나가서 논다', '다시 천둥이 쳐서 급히 뛰어 들어왔어요.', '그쳐 보여도 어른이 괜찮다고 할 때까지 기다려요.', [['친구와 나', '다시 위험해요', -1]]] },
            ],
            ending: '건물 안에서 기다린 판단 덕분에 모두 안전했어요.',
            reasons: [{ id: 'build', text: '천둥 칠 때는 건물·차 안이 안전하다' }, { id: 'away', text: '비 오면 물가와 큰 나무를 피한다' }, { id: 'cover', text: '큰 나무가 비를 막아 준다', why: '천둥이 칠 때는 큰 나무 밑이 위험해요.' }, { id: 'run', text: '빨리 뛰면 괜찮다', why: '물가를 뛰면 미끄러져 다칠 수 있어요.' }],
            good: ['build', 'away'],
            talk: '모둠에서 "캠핑 가기 전에 날씨에 대비해 챙길 것"을 말해요.',
            conclude: '천둥이 치면 큰 나무와 물가를 피해 건물이나 차 안으로 가요.',
          }),
        },
        worksheet: { items: [{ type: 'choice', prompt: '천둥이 칠 때 가장 안전한 곳은 어디인가요?', options: ['큰 나무 밑', '건물 안', '물가'], answer: '건물 안' }] },
        notes: '천둥·번개 행동 요령은 일반 안전 수칙이다. 학교 체험학습 안전 지침과 함께 확인한다.',
      }),
      X('activity.camp-map5', {
        title: '캠핑장 안전한 자리 찾기', method: '캠핑장 지도에서 안전한 자리', tool: 'map', minutes: 14,
        levels: { easy: '핀을 놓으면 칸 이름이 보여 안전한 텐트 자리부터 고른다.', base: '안전한 텐트 자리·대피 건물 두 곳을 찾고, 비 올 때 피할 자리도 찾는다.', challenge: '세 곳을 찾은 뒤 저마다 강·나무와 몇 칸 떨어졌는지로 까닭을 설명한다.' },
        activity: {
          title: '캠핑장 지도에 핀 꽂기', tool: 'map',
          teacher: '"물가에서 가깝고 큰 나무 바로 옆인 자리는 왜 피할까요?" 텐트 자리마다 강·나무와 몇 칸 떨어졌는지 세게 한다. "물가가 시원해서 좋아요"라는 학생에게 "밤에 비가 많이 오면 물이 어디까지 올 수 있을까요?"라고 묻는다. 대피할 건물이 어디인지 먼저 알아 두는 까닭을 짚는다.',
          task: '캠핑장 지도에서 안전한 자리와 대피할 곳에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            { prompt: '강과 큰 나무에서 떨어진 텐트 자리에 핀을 꽂아요.', toolOptions: Object.assign({ places: CAMP() }, CAMPMAP), target: { place: '텐트 자리 다' }, difficulty: 0.2 },
            { prompt: '천둥이 치면 대피할 건물에 핀을 꽂아요.', toolOptions: Object.assign({ places: CAMP() }, CAMPMAP), target: { place: '관리동' }, difficulty: 0.15 },
            { prompt: '비가 많이 올 때 가장 피해야 할 텐트 자리에 핀을 꽂아요.', toolOptions: Object.assign({ places: CAMP() }, CAMPMAP), target: { place: '텐트 자리 가' }, difficulty: 0.25, conclude: '텐트는 물가와 큰 나무에서 떨어진 곳에, 대피할 건물은 미리 알아 둬요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '캠핑장에서 텐트 자리를 고를 때 피할 곳 두 가지를 써요.' }] },
      }),
      X('wrap.sports-self', {
        title: '운동 전 자기 점검표', method: '운동 전 자기 점검표', tool: 'timer', minutes: 7,
        levels: { easy: '점검 칸 2개(준비운동·보호대)를 표시한다.', base: '점검 칸 3개를 표시한다.', challenge: '점검 칸 4개를 표시하고 이번 주 실천을 쓴다.' },
        wrap: {
          teacher: '"다음 체육 시간 전에 무엇을 확인할까요?" 점검 칸을 스스로 읽고 표시하게 한다. 출구 2번에서 "아파도 참고 계속한다"를 고른 학생에게 "참으면 더 크게 다칠 수 있어요. 멈추고 알리는 것도 용기예요"라고 말해 준다.',
          exitTicket: [
            SELF('운동 전 점검', ['준비운동을 한다', '보호대·신발을 확인한다', '경기 규칙을 지킨다', '다치면 바로 알린다']),
            { type: 'choice', prompt: '경기 중 손가락이 아파요. 가장 알맞은 행동은?', options: ['아파도 참고 계속한다', '멈추고 선생님께 알린다', '쉬는 시간까지 기다린다'], answer: 1, difficulty: 0.15, explain: '아프면 멈추고 알려야 더 다치지 않아요.' },
            { type: 'short', prompt: '이번 주 체육 시간에 지킬 실천 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '운동 전에 점검해요',
          items: [
            { type: 'check', prompt: '운동 전에 확인할 것에 표시해요.', options: ['준비운동', '운동화 끈', '경기 규칙'] },
            { type: 'short', prompt: '내가 좋아하는 운동에 맞는 준비운동 하나를 써요.' },
          ],
          easy: { note: '준비운동부터 해요.', items: [{ type: 'draw', prompt: '준비운동을 하는 내 모습을 그려요.' }] },
        },
      }),
      X('wrap.camp-check', {
        title: '캠핑 전·중·후 실천', method: '캠핑 전·중·후 실천 정리', tool: 'timeline', minutes: 7,
        levels: { easy: '실천 카드 3장을 나눈다.', base: '실천 카드 5장을 나눈다.', challenge: '실천 카드 6장을 나누고 빠진 실천 하나를 쓴다.' },
        wrap: {
          teacher: '"출발하기 전, 캠핑하는 중, 날씨가 바뀔 때 할 일은 무엇일까요?" 시간 띠에 카드를 나눈 뒤 오늘 배운 천둥·물가 이야기를 한 번 더 떠올리게 한다. "불은 내가 피워도 돼요"라는 학생에게 "불은 꼭 어른과 함께, 어른이 피워요"라고 짚어 준다.',
          exitTicket: [
            TLX('캠핑 실천 카드를 시간 띠에 나누어요.', ['출발 전', '캠핑 중', '날씨가 바뀔 때'], { '출발 전': ['우비 챙기기', '날씨 알아보기'], '캠핑 중': ['불은 어른과', '물가에서 놀지 않기'], '날씨가 바뀔 때': ['천둥 땐 건물로', '물가에서 멀어지기'] }, ['우비 챙기기', '불은 어른과', '천둥 땐 건물로'], ['우비 챙기기', '날씨 알아보기', '불은 어른과', '천둥 땐 건물로', '물가에서 멀어지기']),
            { type: 'choice', prompt: '캠핑장에서 불을 피울 때 바른 것은 무엇인가요?', options: ['친구끼리 피운다', '어른과 함께, 어른이 피운다', '텐트 안에서 피운다'], answer: 1, difficulty: 0.15, explain: '불은 어른과 함께 정해진 곳에서 다뤄요.' },
            { type: 'short', prompt: '빠진 캠핑 안전 실천 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '야외 활동도 안전하게',
          items: [
            { type: 'table', prompt: '캠핑할 때 할 실천을 하나씩 써요.', columns: ['출발 전', '캠핑 중', '날씨가 바뀔 때'], cells: [['', '', '']] },
            { type: 'choice', prompt: '비가 많이 오면 피할 곳은?', options: ['물가', '건물 안', '관리동'], answer: '물가' },
          ],
        },
      }),
    );
  }

  // ======== 5학년 · 온라인 만남 요청과 아동안전지킴이집 (별표 2 초등 생활안전 5. 유괴예방, 미아사고 예방과 대처) ========
  {
    const X = mk('g5-online-safehouse', 5);
    const TOWN = [
      { name: '학교', icon: 'school', at: [0, 0] }, { name: '우리 집', icon: 'house', at: [5, 3], legend: '우리 집' },
      { name: '지킴이집 가', icon: 'market', at: [2, 1], legend: '아동안전지킴이집' }, { name: '지킴이집 나', icon: 'market', at: [2, 3], legend: '아동안전지킴이집' },
      { name: '파출소', icon: 'police', at: [4, 0], legend: '파출소' }, { name: '놀이터', icon: 'park', at: [0, 3], legend: '놀이터' },
    ];
    const TOWNMAP = { grid: [6, 4], title: '우리 동네', places: TOWN, roads: [[[0, 0], [1, 0], [2, 0], [2, 1], [3, 1], [4, 1], [5, 1], [5, 2], [5, 3]]], legend: false };
    M.push(
      X('intro.chat-pick', {
        title: '대화창의 위험한 말 고르기', method: '대화창 장면에서 위험한 말 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 위험한 말 두 개(사진 보내 줘·만나서 선물 줄게)를 읽어 주고 고르게 한다.', base: '위험한 말 세 개를 스스로 고른다.', challenge: '위험한 말 네 개를 고르고 저마다 왜 위험한지 까닭을 말한다.' },
        intro: {
          teacher: '"게임 대화창에 이런 말이 왔어요. 어떤 말이 마음에 걸리나요?" 시연 단추로 \'사진 보내 줘\'·\'만나서 선물 줄게\'·\'어른한테는 비밀\'이 바구니에 담기는 모습을 보인다. "오래 대화했으면 아는 사람이에요"라는 말에는 "얼굴도 이름도 진짜인지 확인할 수 있을까요? 온라인에서만 만난 사람은 낯선 사람이에요"라고 되묻는다.',
          student: '게임이나 대화방에서 모르는 사람이 말을 걸면 어떻게 할지 짝에게 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'pick', basket: '위험한 말', cards: [{ id: 'photo', text: '사진 보내 줘' }, { id: 'fun', text: '오늘 게임 재밌었어' }, { id: 'meet', text: '만나서 선물 줄게' }, { id: 'again', text: '다음에 또 하자' }, { id: 'secret', text: '어른한테는 비밀' }], shuffle: false }, sequence: [{ pick: ['photo', 'meet', 'secret'] }] },
          art: art('a paper tablet showing a game chat window with speech bubbles, and a paper child stepping back with a raised hand', '이 말, 괜찮을까?', 'moon', 'lavender'),
        },
        notes: '학생에게 실제로 받은 메시지나 겪은 일을 말하게 하지 않는다.',
      }),
      X('intro.outing-clock', {
        title: '외출 약속 시각 정하기', method: '외출 약속 시각 정하기', tool: 'clock', minutes: 5,
        levels: { easy: '긴바늘이 6에 놓인 시계로 4시 30분을 읽는다.', base: '4시 30분을 스스로 맞추고 어디·누구와·언제를 말한다.', challenge: '10분 단위 시각(예: 4시 40분)으로 바꿔 맞추고 약속을 말한다.' },
        intro: {
          teacher: '"놀이터에 갈 때 보호자와 무엇을 약속하나요?" 시연 단추로 시계가 4시 30분으로 맞춰지는 모습을 보이고 "어디에, 누구와, 언제까지"를 함께 말한다. "늦어도 연락하지 않으면 돼요"라는 말에는 "약속 시각이 지나도 소식이 없으면 보호자 마음은 어떨까요? 바뀌면 바로 알려요"라고 되묻는다.',
          student: '놀이터에 갈 때 보호자와 정할 약속 세 가지(어디·누구와·언제)를 말해 보아요.',
          demo: { tool: 'clock', options: { minuteStep: 5, showDigital: true }, sequence: [{ h: 4, m: 30 }] },
          art: art('a paper child and a parent looking at a large paper clock showing half past four next to a playground', '어디·누구와·언제까지', 'sun', 'buttercup'),
        },
      }),
      X('activity.online-dilemma', {
        title: '게임 친구가 만나재요', method: '갈림길: 게임 친구가 주말에 만나재요', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번(약속할지 거절할지)에서 고르고 근거 한 장을 고른다.', base: '갈림 2번(비밀로 하자는 말)을 지나 근거를 고른다.', challenge: '갈림 3번(차단·신고)까지 지나 근거를 모두 고르고 다른 길과 견준다.' },
        activity: {
          title: '갈림길: 만나서 아이템 준대요', tool: 'dilemma',
          teacher: '"선물을 준다면 한 번쯤 만나도 될까요?" 고를 때마다 결과를 읽게 한다. "오래 대화했으니 아는 사람이에요"라는 학생에게 "그 사람이 말한 나이와 이름이 진짜인지 확인할 수 있나요?"라고 묻는다. 비밀로 하자는 말일수록 보호자에게 알려야 한다는 점, 대꾸하지 않고 차단·신고하는 법을 짚는다.',
          task: '만나자는 요청을 받은 상황의 갈림길마다 고르고, 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '게임 친구의 만남 요청',
            steps: [
              { text: '게임에서 오래 함께한 친구가 "주말에 만나서 아이템 줄게"라고 해요.', motif: 'star',
                good: ['refuse', '만날 수 없다고 거절한다', '약속을 만들지 않았어요.', [['나', '낯선 만남을 피해요', 1]]],
                bad: ['yes', '좋다고 약속한다', '모르는 사람과 단둘이 만날 약속이 생겼어요.', '온라인에서만 만난 사람은 낯선 사람이에요.', [['나', '위험해질 수 있어요', -1]]] },
              { text: '친구가 "어른한테는 비밀이야. 말하면 아이템 없어"라고 해요.', motif: 'moon',
                good: ['parent', '보호자에게 대화를 보여 준다', '보호자가 함께 살펴봐요.', [['나', '혼자 고민하지 않아요', 1]]],
                bad: ['secret', '비밀을 지킨다', '혼자 고민하며 메시지가 계속 와요.', '비밀로 하자는 말일수록 어른께 알려요.', [['나', '마음이 불안해요', -1]]] },
              { text: '보호자와 함께 이 대화를 어떻게 할까요?', motif: 'house',
                good: ['block', '차단하고 신고 단추를 누른다', '더 이상 메시지가 오지 않아요.', [['다른 친구들', '같은 일을 피해요', 1]]],
                bad: ['reply', '화난 말로 답장한다', '대화가 길어지고 메시지가 계속 와요.', '대꾸하지 말고 차단·신고해요.', [['나', '계속 시달려요', -1]]] },
            ],
            ending: '거절하고 알린 판단 덕분에 안전하게 게임을 즐겨요.',
            reasons: [{ id: 'stranger', text: '온라인에서만 만난 사람은 낯선 사람이다' }, { id: 'tell', text: '비밀로 하자는 말은 어른께 알린다' }, { id: 'long', text: '오래 이야기했으면 아는 사람이다', why: '온라인에서는 나이·이름을 꾸밀 수 있어요.' }, { id: 'gift', text: '선물을 주면 한 번은 만나도 된다', why: '선물은 만나게 하려는 꾀일 수 있어요.' }],
            good: ['stranger', 'tell'],
            talk: '모둠에서 "만나자는 말에 보낼 거절 문장"을 한 가지씩 말해요.',
            conclude: '온라인 친구가 만나자고 하면 거절하고 보호자에게 알려요.',
          }),
        },
        worksheet: { items: [{ type: 'choice', prompt: '온라인 친구가 "비밀로 하고 만나자"고 해요. 어떻게 할까요?', options: ['비밀을 지키고 만난다', '거절하고 보호자에게 알린다', '친구와 같이 만난다'], answer: '거절하고 보호자에게 알린다' }] },
      }),
      X('activity.info-sort', {
        title: '보내도 돼요·안 돼요 정보', method: '보내도 돼요/안 돼요 정보', tool: 'mindmap', minutes: 13,
        levels: { easy: '정보 카드 4장을 두 가지에 나눈다.', base: '정보 카드 6장을 나눈다.', challenge: '정보 카드 8장을 나누고, 안 되는 까닭을 모둠에서 말한다.' },
        activity: {
          title: '정보 카드 두 가지로 나누기', tool: 'mindmap',
          teacher: '"좋아하는 색과 학교 이름은 무엇이 다를까요?" 카드를 놓을 때마다 이 정보로 나를 찾아올 수 있는지 생각하게 한다. "학교 이름 정도는 괜찮아요"라는 학생에게 "학교 이름과 교복 사진이 함께 있으면 어디서 나를 만날 수 있을까요?"라고 묻는다. 친구 사진은 허락 없이 올리지 않는다는 점도 짚는다.',
          task: '온라인에 보내도 되는 정보와 보내면 안 되는 정보를 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORT('게임 대화창에 보낼 정보를 나누어요.', { topic: '게임 대화창', slots: ['보내도 돼요', '보내면 안 돼요'], groups: { '보내도 돼요': ['좋아하는 색', '게임 점수', '좋아하는 동물'], '보내면 안 돼요': ['학교 이름', '집 주소', '얼굴 사진'] }, extra: { '보내도 돼요': ['좋아하는 노래'], '보내면 안 돼요': ['보호자 전화번호'] } }, 0.2),
            SORT('단체 대화방에 올릴 사진을 나누어요.', { topic: '단체 대화방 사진', slots: ['보내도 돼요', '보내면 안 돼요'], groups: { '보내도 돼요': ['하늘 풍경 사진', '내가 그린 그림', '화분 사진'], '보내면 안 돼요': ['교복 입은 사진', '집 앞 사진', '친구 얼굴 사진'] }, extra: { '보내도 돼요': ['만든 종이접기'], '보내면 안 돼요': ['우리 집 호수가 보인 사진'] } }, 0.25, { conclude: '나를 찾아올 수 있는 정보와 사진은 온라인에 보내지 않아요.' }),
            { prompt: '모둠에서 "보내면 안 되는 까닭"을 카드 하나씩 골라 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '보내도 되면 ○, 안 되면 ×를 써요.', columns: ['정보', '○ / ×'], cells: [['좋아하는 색', ''], ['집 주소', ''], ['얼굴 사진', '']], answer: '○, ×, ×' }] },
      }),
      X('activity.safehouse-map', {
        title: '동네 지도에서 도움 받을 곳', method: '동네 지도에서 도움 받을 곳', tool: 'map', minutes: 14,
        levels: { easy: '핀을 놓으면 칸 이름이 보이고, 도움 받을 곳 하나에 핀을 꽂는다.', base: '아동안전지킴이집·파출소·놀이터 근처 도움 장소 세 곳에 핀을 꽂는다.', challenge: '세 곳을 찾은 뒤 학교에서 집까지 지킴이집을 지나는 길을 모둠에 말로 설명한다.' },
        activity: {
          title: '동네 지도에 도움 받을 곳 꽂기', tool: 'map',
          teacher: '"아동안전지킴이집 표지를 본 적 있나요? 위험할 때 들어가 도움을 청할 수 있는 가게예요." 지도에서 길 위에 있는 도움 장소를 찾게 한다. "모르는 어른이 따라오면 집까지 뛰어가요"라는 학생에게 "집이 멀면요? 가까운 지킴이집이나 사람이 많은 곳으로 가요"라고 말해 준다. 우리 동네 실제 지킴이집은 보호자와 함께 걸으며 찾아보게 한다.',
          task: '동네 지도에서 도움 받을 곳을 찾아 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            { prompt: '학교에서 집으로 가는 길에 있는 아동안전지킴이집에 핀을 꽂아요.', toolOptions: TOWNMAP, target: { place: '지킴이집 가' }, difficulty: 0.2 },
            { prompt: '경찰관에게 도움을 청할 수 있는 곳에 핀을 꽂아요.', toolOptions: TOWNMAP, target: { place: '파출소' }, difficulty: 0.15 },
            { prompt: '놀이터에서 가장 가까운 도움 받을 곳에 핀을 꽂아요.', toolOptions: TOWNMAP, target: { place: '지킴이집 나' }, difficulty: 0.3 },
            { prompt: '모둠에서 학교에서 집까지 지킴이집을 지나는 길을 말로 설명해요.', free: true, talk: true, conclude: '위험할 때는 가까운 아동안전지킴이집이나 파출소로 가서 도움을 청해요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 동네에서 도움을 청할 수 있는 곳 한 군데를 써요.' }] },
      }),
      X('activity.outing-plan', {
        title: '외출 약속 점검표', method: '외출 약속 점검표', tool: 'kitchen', minutes: 14,
        levels: { easy: '점검 칸 3개(어디·누구와·언제)를 표시한다.', base: '점검 칸 4개(+ 연락 방법)를 표시한다.', challenge: '4개를 표시하고, 계획이 바뀌면 다시 알리는 차례까지 놓는다.' },
        activity: {
          title: '외출 전 약속 정하기', tool: 'kitchen',
          teacher: '"친구 집에 놀러 갈 때 보호자에게 꼭 말할 것은 무엇일까요?" 점검표를 소리 내어 읽고 약속에 꼭 필요한 것만 표시하게 한다. "친구 집에서 다른 곳으로 가면 그냥 가도 돼요"라는 학생에게 "보호자는 내가 어디 있다고 알고 있을까요? 바뀌면 다시 알려요"라고 묻는다.',
          task: '외출하기 전에 보호자와 정할 약속을 점검표에 표시해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            CHK('외출 전에 보호자와 정할 것만 표시해요.', '외출 약속', ['어디에 가는지', '누구와 가는지', '언제 돌아오는지', '연락 방법'], ['무슨 옷을 입을지', '간식 메뉴'], { easy: 3, base: 4 }, 0.15),
            ORDER('놀다가 계획이 바뀌었어요. 할 일을 차례대로 놓아요.', ['멈추고 생각하기', '보호자에게 연락하기', '허락 받기', '바뀐 곳으로 가기'], { mode: 'order', trap: '말없이 다른 곳 가기' }, 0.2),
            { prompt: '짝에게 이번 주말 외출 약속을 어디·누구와·언제로 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '외출 약속을 정해 써요.', columns: ['어디', '누구와', '언제까지'], cells: [['', '', '']] }] },
      }),
      X('wrap.online-rubric', {
        title: '거절 메시지 쓰고 점검', method: '거절 메시지 쓰고 점검', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '기준 2개로 점검하고 문장 틀을 써도 된다.', base: '기준 3개(분명한가·개인정보 없나·알렸나)로 점검한다.', challenge: '기준 3개로 점검한 뒤 한 군데를 고쳐 쓰고 꼭 넣을 낱말을 넣는다.' },
        wrap: {
          teacher: '"만나자는 요청에 보낼 거절 메시지를 써 볼까요?" 기준표를 함께 읽고 쓴 뒤 스스로 점검하게 한다. "미안해서 다음에 만나자고 썼어요"라는 학생에게 "그러면 또 약속을 잡으려 할 거예요. 분명하게 거절해요"라고 말해 준다. 메시지에 내 이름·학교·연락처를 쓰지 않게 한다.',
          exitTicket: [
            RUBX('만나자는 요청에 보낼 거절 메시지를 쓰고 기준표로 점검해요.', { topic: '온라인 친구의 만남 요청에 보낼 거절 메시지', title: '거절 메시지 쓰기', starter: '미안하지만 만날 수 없어. 그리고 ~', crit: ['거절이 분명하다', '개인정보를 쓰지 않았다', '보호자에게 알린다고 했다'], must: [['보호자', '부모님', '어른']], chars: [20, 120] }),
            { type: 'choice', prompt: '거절 메시지로 가장 알맞은 것은 무엇인가요?', options: ['다음 주에 만나자', '만날 수 없어. 보호자께 말할게', '우리 학교 앞에서 보자'], answer: 1, difficulty: 0.15, explain: '분명하게 거절하고 보호자에게 알려요.' },
            { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '분명하게 거절해요',
          items: [
            { type: 'short', prompt: '만나자는 요청에 보낼 거절 메시지를 다시 써요.' },
            { type: 'check', prompt: '내 메시지를 점검해요.', options: ['거절이 분명한가요', '개인정보가 없나요', '보호자에게 알렸나요'] },
          ],
        },
      }),
      X('wrap.online-feel', {
        title: '거절한 판단의 결과와 마음', method: '거절한 판단의 결과와 마음', tool: 'emotion', minutes: 7,
        levels: { easy: '장면 1개에 마음 카드를 짝 짓는다.', base: '장면 2개에 마음 카드를 짝 짓는다.', challenge: '장면 3개에 짝 짓고 그 판단이 가져온 결과를 말한다.' },
        wrap: {
          teacher: '"만나자는 요청을 거절하고 보호자에게 알렸을 때 마음이 어땠을까요?" 장면마다 마음 카드를 고르고 판단의 결과를 한 문장으로 말하게 한다. "거절하면 친구를 잃을 것 같아 속상해요"라는 말에는 그 마음을 인정해 주고 "나를 지킨 판단은 아주 잘한 일이에요"라고 말해 준다.',
          exitTicket: [
            FEEL('장면과 그때의 마음을 이어요.', [['만나자는 요청을 분명히 거절했어요', '뿌듯함'], ['보호자가 함께 살펴 줬어요', '고마움'], ['차단하고 나니 마음이 놓였어요', '편안함']], ['뿌듯함', '고마움', '편안함', '화남']),
            { type: 'choice', prompt: '온라인 친구가 내 얼굴 사진을 보내 달라고 해요. 어떻게 할까요?', options: ['한 장만 보낸다', '보내지 않고 보호자에게 알린다', '친구 사진을 대신 보낸다'], answer: 1, difficulty: 0.15, explain: '사진은 나를 찾을 수 있는 정보예요. 보내지 않고 알려요.' },
            { type: 'short', prompt: '거절하고 알린 판단이 가져온 좋은 결과를 한 문장으로 써요.' },
          ],
        },
        worksheet: {
          title: '나를 지키는 판단',
          items: [
            { type: 'table', prompt: '안전하면 ○, 위험하면 ×를 써요.', columns: ['행동', '○ / ×'], cells: [['온라인 친구와 몰래 만나기', ''], ['보호자에게 대화 보여 주기', ''], ['차단하고 신고하기', '']], answer: '×, ○, ○' },
            { type: 'short', prompt: '외출할 때 보호자와 지킬 약속 하나를 써요.' },
          ],
        },
      }),
    );
  }

  // ======== 6학년 · 동네 안전 지도와 안전 표지 (별표 2 초등 생활안전 1·5) ========
  {
    const X = mk('g6-town-map', 6);
    const TOWN6 = [
      { name: '공사장', icon: 'factory', at: [4, 0], legend: '공사장' }, { name: '어두운 골목', icon: 'dot', at: [1, 2], legend: '어두운 골목' },
      { name: '지킴이집', icon: 'market', at: [3, 2], legend: '아동안전지킴이집' }, { name: '파출소', icon: 'police', at: [5, 3], legend: '파출소' },
      { name: '학교', icon: 'school', at: [0, 0] }, { name: '우리 집', icon: 'house', at: [5, 1], legend: '우리 집' },
    ];
    const TOWNMAP6 = { grid: [6, 4], title: '우리 동네 안전 지도', places: TOWN6, legend: true };
    const SIGNS = [
      ['금지', ['빨간 사선 원·담배', '빨간 사선 원·휴대폰']], ['경고', ['노란 삼각형·번개', '노란 삼각형·미끄럼']],
      ['지시', ['파란 원·보안경', '파란 원·장갑']], ['안내', ['초록 네모·비상구', '초록 네모·구급함']],
    ];
    const sg = (n, k = 4) => Object.fromEntries(SIGNS.slice(0, k).map(([s, c]) => [s, c.slice(0, n)]));
    const flat = (g) => { const out = []; for (let i = 0; i < 3; i++) for (const s of Object.keys(g)) if (g[s][i]) out.push(g[s][i]); return out; };
    const SIGNX = { 금지: ['빨간 사선 원·불꽃'], 경고: [], 지시: ['파란 원·안전모'], 안내: [] };
    const signFull = Object.fromEntries(SIGNS.map(([s, c]) => [s, [...c, ...(SIGNX[s] || [])]]));
    M.push(
      X('intro.sign-color', {
        title: '표지 색·모양으로 뜻 맞히기', method: '표지 색·모양으로 뜻 맞히기', tool: 'emotion', minutes: 6,
        levels: { easy: '표지 두 개(금지·경고)에 뜻 카드를 함께 짝 짓는다.', base: '표지 네 개에 뜻 카드를 짝 짓는다.', challenge: '표지 여섯 개를 보고 색·모양의 규칙을 말로 정리한다.' },
        intro: {
          teacher: '"빨간 동그라미에 사선이 그어진 표지는 무슨 뜻일까요?" 시연 단추로 빨간 사선 원 → 하지 마세요, 노란 삼각형 → 조심하세요, 파란 원 → 이렇게 하세요, 초록 네모 → 여기 있어요가 짝 지어지는 모습을 보인다. "표지 색은 예쁘게 꾸미려고 정한 거예요"라는 말에는 "모양만 봐도 뜻을 알 수 있다면 어떤 점이 좋을까요?"라고 되묻는다.',
          student: '학교나 동네에서 본 표지 하나를 떠올려 색과 모양을 짝에게 말해 보아요.',
          demo: { tool: 'emotion', options: { cards: ['하지 마세요', '조심하세요', '이렇게 하세요', '여기 있어요'], slots: [{ id: 'red', label: '빨간 사선 원' }, { id: 'yellow', label: '노란 삼각형' }, { id: 'blue', label: '파란 원' }, { id: 'green', label: '초록 네모' }], weather: false, shuffle: false }, sequence: [{ match: { red: '하지 마세요', yellow: '조심하세요', blue: '이렇게 하세요', green: '여기 있어요' } }] },
          art: art('four paper safety signs on a paper wall: a red circle with a slash, a yellow triangle, a blue circle and a green square', '색과 모양이 뜻을 말해요', 'star', 'rose'),
        },
        notes: '표지의 색·모양 규칙(금지 빨강 원, 경고 노랑 삼각형, 지시 파랑 원, 안내 초록 사각형)은 체계도 계획을 따랐다. 실제 표지 사진으로 한 번 더 확인한다.',
      }),
      X('intro.town-mind', {
        title: '우리 동네 위험·도움 떠올리기', method: '우리 동네 위험·도움 떠올리기', tool: 'mindmap', minutes: 5,
        levels: { easy: '카드 3장을 위험 장소·도움 받을 곳 가지에 나눈다.', base: '카드 5장을 나눈다.', challenge: '카드 6장을 나누고 우리 동네의 실제 장소를 하나씩 덧붙여 말한다.' },
        intro: {
          teacher: '"우리 동네에서 지날 때 조심하는 곳과 도움을 청할 수 있는 곳은 어디인가요?" 시연 단추로 공사장·어두운 골목은 위험 장소로, 지킴이집·파출소는 도움 받을 곳으로 가는 모습을 보인다. "우리 동네는 다 아니까 지도가 필요 없어요"라는 말에는 "이사 온 친구나 동생은 어떨까요? 지도로 나누면 모두가 알 수 있어요"라고 되묻는다.',
          student: '우리 동네에서 조심해서 지나는 곳 한 곳을 짝에게 말해 보아요.',
          demo: { tool: 'mindmap', options: { topic: '우리 동네', slots: ['위험 장소', '도움 받을 곳'], cards: ['공사장', '아동안전지킴이집', '어두운 골목', '파출소', '차가 많은 큰길'] }, sequence: [{ sort: { '위험 장소': ['공사장', '어두운 골목', '차가 많은 큰길'], '도움 받을 곳': ['아동안전지킴이집', '파출소'] } }] },
          art: art('a paper neighborhood map with a construction site, a dark alley and a small shop with a safety sticker', '우리 동네 안전 지도', 'house', 'mint'),
        },
      }),
      X('activity.town-pin', {
        title: '동네 안전 지도 만들기', method: '동네 안전 지도 만들기', tool: 'map', minutes: 14,
        levels: { easy: '핀을 놓으면 칸 이름이 보이고, 위험 장소·도움 받을 곳을 하나씩 꽂는다.', base: '범례가 있는 지도에서 위험 장소 2곳·도움 받을 곳 2곳에 핀을 꽂는다.', challenge: '장소 이름이 지워진 지도에서 범례의 기호만 보고 핀 4곳을 꽂는다.' },
        activity: {
          title: '동네 지도에 위험·도움 표시', tool: 'map',
          teacher: '"위험 장소와 도움 받을 곳을 같은 색으로 표시하면 어떤 점이 헷갈릴까요?" 범례가 있어야 지도를 처음 보는 사람도 읽을 수 있다는 점을 짚는다. 공사장을 "놀기 좋은 공터"라고 하는 학생에게 "공사장에는 무엇이 떨어지거나 움직일까요?"라고 묻는다. 지도는 조사 → 표시 → 공유의 차례로 만든다는 것을 알려 준다.',
          task: '동네 지도에 위험 장소와 도움 받을 곳을 표시하고 범례를 채워요.', levels: { easy: { readout: true }, base: {}, challenge: { names: false } },
          items: [
            { prompt: '물건이 떨어질 수 있어 피해야 할 위험 장소에 핀을 꽂아요.', toolOptions: TOWNMAP6, target: { place: '공사장' }, difficulty: 0.15 },
            { prompt: '밤에 어두워 혼자 지나지 않을 곳에 핀을 꽂아요.', toolOptions: TOWNMAP6, target: { place: '어두운 골목' }, difficulty: 0.2 },
            { prompt: '학교와 집 사이에서 도움을 청할 가게에 핀을 꽂아요.', toolOptions: TOWNMAP6, target: { place: '지킴이집' }, difficulty: 0.2 },
            { prompt: '경찰관에게 도움을 청할 곳에 핀을 꽂고, 범례에서 그 기호를 찾아요.', toolOptions: TOWNMAP6, target: { place: '파출소' }, difficulty: 0.25, conclude: '위험 장소와 도움 받을 곳을 범례로 나누어 표시하면 누구나 지도를 읽을 수 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 동네 안전 지도에 넣을 곳을 써요.', columns: ['위험 장소', '도움 받을 곳'], cells: [['', ''], ['', '']] }] },
      }),
      X('activity.survey-chart', {
        title: '가상 설문 그래프 읽기', method: '가상 설문 막대그래프 읽기', tool: 'chart', minutes: 13,
        levels: { easy: '항목 3개의 막대를 완성한다.', base: '항목 4개의 막대를 완성하고 가장 많은 유형을 읽는다.', challenge: '항목 4개를 완성하고 가장 많은 유형의 원인을 추론한 문장을 고른다.' },
        activity: {
          title: '가상 설문 막대그래프 완성·읽기', tool: 'chart',
          teacher: '"이 설문은 수업을 위해 꾸민 가상의 우리 반 자료예요. 무서웠던 곳으로 가장 많이 고른 곳은 어디일까요?" 표의 수를 막대로 옮긴 뒤 가장 높은 막대를 찾게 한다. "가장 많은 곳만 위험하고 나머지는 괜찮아요"라는 학생에게 "적게 고른 곳도 위험할 수 있어요. 지도에는 모두 넣어요"라고 말해 준다.',
          task: '가상의 우리 반 설문 표를 막대그래프로 완성하고, 원인을 추론해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '설문 표를 보고 막대그래프를 완성해요(가상 자료).', toolOptions: { type: 'bar', mode: 'build', title: '무서웠던 곳(가상 설문)', unit: '명', data: [['어두운 골목', 9], ['차 많은 길', 7], ['공사장 근처', 5], ['사람 없는 공원', 3]], given: [0] }, target: { build: true }, difficulty: 0.25,
              levels: { easy: { prompt: '설문 표를 보고 막대 세 개를 완성해요(가상 자료).', toolOptions: { data: [['어두운 골목', 9], ['차 많은 길', 7], ['공사장 근처', 5]] } } } },
            { prompt: '가장 많은 학생이 무서웠다고 고른 곳은 어디인가요?(가상 자료)', toolOptions: { type: 'bar', mode: 'read', title: '무서웠던 곳(가상 설문)', unit: '명', data: [['어두운 골목', 9], ['차 많은 길', 7], ['공사장 근처', 5], ['사람 없는 공원', 3]], choices: ['어두운 골목', '차 많은 길', '공사장 근처', '사람 없는 공원'], question: '가장 많은 곳은?' }, target: { pick: 0 }, difficulty: 0.15 },
            { prompt: '어두운 골목이 가장 많은 까닭으로 알맞은 것을 골라요(가상 자료).', toolOptions: { type: 'bar', mode: 'read', title: '무서웠던 곳(가상 설문)', unit: '명', data: [['어두운 골목', 9], ['차 많은 길', 7], ['공사장 근처', 5], ['사람 없는 공원', 3]], choices: ['어둡고 지나는 사람이 적다', '골목은 언제나 넓다', '공원보다 나무가 많다'], question: '까닭은?', why: ['', '골목이 넓은지는 그래프로 알 수 없어요.', '그래프와 관계없는 말이에요.'] }, target: { pick: 0 }, difficulty: 0.3, conclude: '설문 자료에서 많이 나온 곳은 안전 지도에 꼭 넣고 피하는 길을 함께 적어요.' },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '가상 설문에서 두 번째로 많은 곳은?', options: ['어두운 골목', '차 많은 길', '공사장 근처'], answer: '차 많은 길' }] },
        notes: '설문 수치는 수업용 가상 자료다. 우리 반 실제 설문을 할 때는 이름을 받지 않는다.',
      }),
      X('activity.sign-sort', {
        title: '표지 규칙으로 나누기', method: '표지 규칙으로 나누기', tool: 'mindmap', minutes: 14,
        levels: { easy: '가지 2개(금지·경고)에 표지 카드 4장을 나눈다.', base: '가지 4개에 표지 카드 8장을 나누고 가지마다 공통 규칙을 말한다.', challenge: '가지 4개에 카드 10장을 나누고, 처음 보는 표지의 뜻을 색·모양으로 추론한다.' },
        activity: {
          title: '표지 카드 네 가지로 나누기', tool: 'mindmap',
          teacher: '"노란 삼각형 표지들의 공통점은 무엇일까요?" 카드를 다 나눈 뒤 가지마다 \'색 + 모양 = 뜻\'을 한 문장으로 말하게 한다. "파란 원도 하지 말라는 뜻이에요"라는 학생에게 "빨간 사선 원과 파란 원의 그림을 견주어 볼까요? 파란 원은 이렇게 하라는 뜻이에요"라고 짚는다. 도전에서는 처음 보는 표지를 색·모양만 보고 추론하게 한다.',
          task: '표지 카드를 금지·경고·지시·안내 가지로 나누고 공통 규칙을 찾아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            { prompt: '표지 카드를 색과 모양 규칙에 따라 나누어요.', toolOptions: { topic: '안전 표지', slots: ['금지', '경고', '지시', '안내'], cards: flat(sg(2)) }, target: { sort: sg(2) }, difficulty: 0.25,
              levels: {
                easy: { prompt: '표지 카드를 금지와 경고로 나누어요(카드 4장).', toolOptions: { slots: ['금지', '경고'], cards: flat(sg(2, 2)) }, target: { sort: sg(2, 2) } },
                challenge: { prompt: '처음 보는 표지까지 색과 모양 규칙으로 나누어요(카드 10장).', toolOptions: { cards: flat(signFull) }, target: { sort: signFull } },
              } },
            SORT('표지의 뜻 문장을 알맞은 가지에 나누어요.', { topic: '표지의 뜻', slots: ['금지', '경고', '지시', '안내'], groups: { 금지: ['들어가지 마세요', '만지지 마세요'], 경고: ['떨어질 수 있어요', '바닥이 미끄러워요'], 지시: ['손을 씻으세요', '보안경을 쓰세요'], 안내: ['이쪽이 비상구예요', '구급함이 있어요'] }, easy: 1, extra: { 금지: ['뛰지 마세요'], 경고: ['머리 위 조심'] } }, 0.2, { conclude: '빨간 사선 원은 금지, 노란 삼각형은 경고, 파란 원은 지시, 초록 네모는 안내예요.' }),
            { prompt: '처음 보는 표지 하나를 골라 색과 모양으로 뜻을 추론해 짝에게 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '표지의 색·모양과 뜻을 이어 써요.', columns: ['색·모양', '뜻'], cells: [['빨간 사선 원', ''], ['노란 삼각형', ''], ['파란 원', ''], ['초록 네모', '']], answer: '금지, 경고, 지시, 안내' }] },
        notes: '표지 카드 글은 그림 표지를 말로 옮긴 것이다. 실제 표지 그림 카드를 함께 보여 주면 좋다.',
      }),
      X('activity.map-proposal', {
        title: '안전 지도 설명글 쓰기', method: '안전 지도 설명글 쓰기', tool: 'rubric-writing', minutes: 14,
        levels: { easy: '기준 2개로 점검하고 문장 틀을 써도 된다.', base: '기준 3개(위험 장소·피하는 방법·도움 받을 곳)로 점검한다.', challenge: '기준 3개로 점검한 뒤 한 군데를 고쳐 쓰고 꼭 넣을 낱말을 넣는다.' },
        activity: {
          title: '우리 지도 소개하는 글', tool: 'rubric-writing',
          teacher: '"우리 모둠 지도를 처음 보는 동생에게 소개한다면 무엇을 꼭 말해야 할까요?" 기준표를 함께 읽고 짧게 쓴 뒤 스스로 점검하게 한다. "공사장은 위험해요"에서 멈춘 학생에게 "그럼 어떻게 지나가면 될까요? 피하는 방법까지 써 봐요"라고 묻는다. 집 주소·이름은 쓰지 않게 한다.',
          task: '만든 안전 지도를 소개하는 짧은 글을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RUB('안전 지도를 소개하는 글을 두세 문장으로 쓰고 기준표로 점검해요.', { topic: '우리 모둠 안전 지도 소개(위험 장소 1곳과 피하는 방법)', title: '안전 지도 소개', starter: '우리 지도에서 조심할 곳은 ~예요. 그곳은 ~', crit: ['위험 장소 한 곳을 썼다', '피하는 방법을 썼다', '도움 받을 곳을 썼다'], must: [['피해', '돌아', '조심']], chars: [30, 200] }, 0.25),
            RUB('동생에게 알려 줄 학교 가는 안전한 길을 두세 문장으로 써요.', { topic: '동생에게 알려 줄 학교 가는 안전한 길', title: '안전한 길 안내', starter: '집에서 나와 ~로 가요. 그다음 ~', crit: ['출발과 도착을 썼다', '지나는 장소를 썼다', '조심할 점을 썼다'], must: [['건널목', '큰길', '지킴이집']], chars: [30, 200] }, 0.3),
            { prompt: '짝과 글을 바꿔 읽고, 기준표로 좋은 점 하나를 말해 줘요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 동네 안전 지도에서 가장 조심할 곳과 피하는 방법을 써요.' }] },
      }),
      X('wrap.town-self', {
        title: '안전 지도 자기 점검표', method: '안전 지도 자기 점검표', tool: 'timer', minutes: 7,
        levels: { easy: '점검 칸 2개(위험 장소·도움 받을 곳)를 표시한다.', base: '점검 칸 3개(+ 범례)를 표시한다.', challenge: '점검 칸 4개(+ 안전한 길)를 표시한다.' },
        wrap: {
          teacher: '"우리 지도를 처음 보는 사람이 읽을 수 있을까요?" 점검 칸을 스스로 표시하게 하고, 빠진 칸은 다음 시간에 채울 것으로 적게 한다. 출구 2번에서 "지도는 내가 다 아니까 필요 없다"를 고른 학생에게 "동생이나 새로 온 친구에게도 필요할 거예요"라고 말해 준다.',
          exitTicket: [
            SELF('안전 지도 점검', ['위험 장소를 표시했다', '도움 받을 곳을 표시했다', '범례를 달았다', '안전한 길을 그었다'], '우리 모둠 안전 지도를 스스로 점검해 표시해요.'),
            { type: 'choice', prompt: '안전 지도를 만드는 차례로 알맞은 것은 무엇인가요?', options: ['표시 → 조사 → 공유', '조사 → 표시 → 공유', '공유 → 표시 → 조사'], answer: 1, difficulty: 0.2, explain: '먼저 조사하고, 지도에 표시한 뒤, 친구들과 나눠요.' },
            { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '우리 동네 안전 지도',
          items: [
            { type: 'check', prompt: '우리 지도에 넣은 것에 표시해요.', options: ['위험 장소', '도움 받을 곳', '범례', '안전한 길'] },
            { type: 'short', prompt: '안전 지도를 누구와 나누고 싶은지와 그 까닭을 써요.' },
          ],
          easy: { note: '위험한 곳과 도움 받을 곳을 다른 색으로 표시해요.', items: [{ type: 'draw', prompt: '우리 동네 도움 받을 곳 하나를 그려요.' }] },
        },
      }),
      X('wrap.town-share', {
        title: '안전 지도 발표 말풍선', method: '안전 지도 발표 말풍선', tool: 'story', minutes: 7,
        levels: { easy: '말풍선 빈칸 1개를 채운다.', base: '말풍선 빈칸 2개를 채운다.', challenge: '말풍선 빈칸 3개를 채워 발표를 완성한다.' },
        wrap: {
          teacher: '"우리 지도를 30초 안에 소개한다면 무슨 말부터 할까요?" 말풍선 빈칸을 채운 뒤 모둠 대표가 그대로 읽어 발표하게 한다. 발표 문장에 \'놀이터\'처럼 조심할 곳이 아닌 카드를 넣은 학생에게 "그곳이 조심할 곳일까요? 지도를 다시 봐요"라고 묻는다.',
          exitTicket: [
            FILLX('발표 말풍선 빈칸에 알맞은 카드를 넣어요.', '발표자', [['우리 지도에서 조심할 곳은 ___입니다.', '어두운 골목'], ['그곳을 지날 때는 ___.', '밝은 큰길로 돌아가요'], ['도움이 필요하면 ___로 가요.', '아동안전지킴이집']], ['어두운 골목', '밝은 큰길로 돌아가요', '아동안전지킴이집', '놀이터'], '모둠 발표'),
            { type: 'choice', prompt: '안전 지도 발표에서 꼭 말할 것은 무엇인가요?', options: ['우리 집 주소', '조심할 곳과 피하는 방법', '좋아하는 가게 이름'], answer: 1, difficulty: 0.15, explain: '조심할 곳과 피하는 방법, 도움 받을 곳을 말해요.' },
            { type: 'short', prompt: '친구 모둠 지도에서 배운 점 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '우리 지도를 나눠요',
          items: [
            { type: 'blank', prompt: '발표 문장을 완성해요.', text: '우리 지도에서 조심할 곳은 ___입니다. 도움이 필요하면 ___로 가요.' },
            { type: 'short', prompt: '우리 모둠 지도를 소개하는 한 문장을 써요.' },
          ],
        },
      }),
    );
  }

  // ======== 6학년 · 충전기·배터리 이상 신호 (별표 2 초등 생활안전 2 + 표준안 '제품') ========
  {
    const X = mk('g6-battery', 6);
    const ROOM = [
      { name: '책상', cells: [[0, 0], [1, 0]] }, { name: '침대 이불', cells: [[2, 0], [3, 0], [2, 1], [3, 1]] },
      { name: '커튼 옆', cells: [[0, 2]] }, { name: '책장', cells: [[1, 2]] }, { name: '방바닥', cells: [[0, 1], [1, 1], [2, 2], [3, 2]] },
    ];
    const ROOMMAP = { grid: [4, 3], regions: ROOM, title: '내 방' };
    M.push(
      X('intro.signal-pick', {
        title: '배터리 이상 신호 고르기', method: '이상 신호 그림 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 이상 신호 두 개(부푼 배터리·갈라진 선)를 짚어 주고 고르게 한다.', base: '이상 신호 세 개를 스스로 고른다.', challenge: '이상 신호 네 개를 고르고 저마다 왜 위험한지 까닭을 말한다.' },
        intro: {
          teacher: '"휴대전화나 보조배터리가 이렇게 되면 계속 써도 될까요?" 시연 단추로 부푼 배터리·그을린 충전 단자·갈라진 충전선이 바구니에 담기는 모습을 보인다. "부풀어도 작동만 하면 괜찮아요"라는 말에는 "작동하는 것과 안전한 것은 같을까요?"라고 되묻고 오늘은 이상 신호와 그때 할 일을 배운다고 밝힌다.',
          student: '집에서 충전기를 쓸 때 조심하는 것 하나를 짝에게 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'pick', basket: '이상 신호', cards: [{ id: 'swell', text: '부푼 배터리' }, { id: 'new', text: '새 충전기' }, { id: 'soot', text: '그을린 충전 단자' }, { id: 'clean', text: '깨끗한 선' }, { id: 'crack', text: '갈라진 충전선' }], shuffle: false }, sequence: [{ pick: ['swell', 'soot', 'crack'] }] },
          art: art('a paper phone with a slightly swollen paper battery and a frayed paper charging cable on a desk', '이런 신호가 보이면?', 'star', 'buttercup'),
        },
      }),
      X('intro.charge-cause', {
        title: '충전기 과열 원인 그물', method: '과열 원인 그물', tool: 'mindmap', minutes: 5,
        levels: { easy: '카드 3장을 과열 원인·안전한 습관 가지에 나눈다.', base: '카드 5장을 나눈다.', challenge: '카드 6장을 나누고 원인마다 막는 습관을 짝지어 말한다.' },
        intro: {
          teacher: '"충전기가 뜨거워지는 까닭은 무엇일까요?" 시연 단추로 이불 위 충전·손상된 선·다 찼는데 계속 꽂아 두기는 원인 가지로, 책상 위 충전·인증 표시 확인은 습관 가지로 가는 모습을 보인다. "밤새 베개 밑에서 충전해도 돼요"라는 말에는 "베개 밑은 열이 빠져나갈 수 있을까요?"라고 되묻는다.',
          student: '충전기가 뜨거워졌을 때 어떻게 했는지가 아니라, 어떻게 하면 좋을지 한 가지 말해 보아요.',
          demo: { tool: 'mindmap', options: { topic: '충전기가 뜨거워요', slots: ['과열 원인', '안전한 습관'], cards: ['이불 위에서 충전', '책상 위에서 충전', '손상된 선', '인증 표시 확인', '다 차도 계속 꽂기'] }, sequence: [{ sort: { '과열 원인': ['이불 위에서 충전', '손상된 선', '다 차도 계속 꽂기'], '안전한 습관': ['책상 위에서 충전', '인증 표시 확인'] } }] },
          art: art('a paper charger glowing red on a soft paper blanket next to a cool charger on a wooden paper desk', '왜 뜨거워질까?', 'sun', 'rose'),
        },
      }),
      X('activity.battery-dilemma', {
        title: '보조배터리가 부풀었어요', method: '갈림길: 보조배터리가 부풀었어요', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번(계속 쓸지 멈출지)에서 고르고 근거 한 장을 고른다.', base: '갈림 2번(버리는 곳)을 지나 근거를 고른다.', challenge: '갈림 3번(새 제품 고르기)까지 지나 근거를 모두 고르고 다른 길과 견준다.' },
        activity: {
          title: '갈림길: 부푼 보조배터리', tool: 'dilemma',
          teacher: '"아직 충전이 되는데 버려야 할까요?" 고를 때마다 결과를 읽고 누가 영향을 받는지 말하게 한다. "아까우니 테이프로 감아 쓰면 돼요"라는 학생에게 "겉을 감싸면 속에서 부푼 것이 나아질까요?"라고 묻는다. 다 쓴 배터리는 일반 쓰레기가 아니라 정해진 곳에 버린다는 점을 짚는다.',
          task: '부푼 보조배터리 상황의 갈림길마다 고르고, 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '부푼 보조배터리',
            steps: [
              { text: '가방 속 보조배터리가 볼록하게 부풀었어요. 아직 충전은 돼요.', motif: 'cloud',
                good: ['stop', '쓰지 않고 어른께 알린다', '어른이 살펴보고 쓰지 말자고 해요.', [['나', '사고를 피해요', 1]]],
                bad: ['use', '그대로 계속 쓴다', '충전 중 뜨거워지고 타는 냄새가 나요.', '부푼 배터리는 작동해도 위험해요.', [['가족', '위험해질 수 있어요', -1]]] },
              { text: '어른이 버리자고 해요. 동생이 그냥 쓰레기통에 넣자고 해요.', motif: 'house',
                good: ['drop', '정해진 수거함에 버린다', '안전하게 처리했어요.', [['동네 사람들', '안전해요', 1]]],
                bad: ['trash', '일반 쓰레기통에 넣는다', '쓰레기와 눌리면 불이 날까 걱정돼요.', '배터리는 정해진 수거함에 버려요.', [['청소하는 분', '위험해요', -1]]] },
              { text: '새 보조배터리를 사려고 해요. 어떤 제품을 고를까요?', motif: 'star',
                good: ['cert', '인증 표시가 있는 제품', '믿을 수 있는 제품을 골랐어요.', [['나', '안심하고 써요', 1]]],
                bad: ['cheap', '표시 없는 가장 싼 제품', '쓸 때마다 금방 뜨거워져요.', '인증 표시를 확인하고 골라요.', [['나', '다시 위험해요', -1]]] },
            ],
            ending: '멈추고 알린 판단 덕분에 사고 없이 바꿨어요.',
            reasons: [{ id: 'swell', text: '부푼 배터리는 작동해도 쓰지 않는다' }, { id: 'bin', text: '배터리는 정해진 곳에 버린다' }, { id: 'works', text: '작동하면 괜찮다', why: '작동해도 속은 위험할 수 있어요.' }, { id: 'cheap', text: '싸면 무엇이든 좋다', why: '인증 표시가 있는지 먼저 봐요.' }],
            good: ['swell', 'bin'],
            talk: '모둠에서 "우리 집 배터리를 버릴 때 어디에 버릴까?"를 이야기해요.',
            conclude: '배터리가 부풀거나 뜨거우면 쓰지 말고 어른께 알리고, 정해진 곳에 버려요.',
          }),
        },
        worksheet: { items: [{ type: 'choice', prompt: '보조배터리가 부풀었는데 아직 충전돼요. 어떻게 할까요?', options: ['테이프로 감아 쓴다', '쓰지 않고 어른께 알린다', '친구에게 준다'], answer: '쓰지 않고 어른께 알린다' }] },
        notes: '폐배터리 버리는 곳은 지역마다 다르다. 우리 동네 수거함 위치는 보호자와 함께 확인하게 한다.',
      }),
      X('activity.charge-place', {
        title: '방 지도에서 충전 자리 고르기', method: '방 지도에서 충전 자리 고르기', tool: 'map', minutes: 13,
        levels: { easy: '핀을 놓으면 칸 이름이 보이고, 충전하기 좋은 자리 하나를 고른다.', base: '좋은 자리와 피할 자리에 핀을 꽂는다.', challenge: '좋은 자리·피할 자리 세 곳에 꽂고, 저마다 고른 이유를 모둠에 말한다.' },
        activity: {
          title: '내 방에서 충전 자리 찾기', tool: 'map',
          teacher: '"내 방에서 충전하기 가장 좋은 곳은 어디일까요?" 핀을 꽂기 전에 그 자리의 바닥이 딱딱한지, 둘레에 불에 잘 타는 것이 있는지 말하게 한다. "침대에서 충전하면서 쓰면 편해요"라는 학생에게 "이불이 충전기를 덮으면 열은 어디로 갈까요?"라고 묻는다.',
          task: '방 지도에서 충전하기 좋은 자리와 피할 자리에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            { prompt: '딱딱하고 둘레에 탈 것이 없는 충전 자리에 핀을 꽂아요.', toolOptions: ROOMMAP, target: { region: '책상' }, difficulty: 0.15 },
            { prompt: '열이 빠지지 않아 충전을 피할 자리에 핀을 꽂아요.', toolOptions: ROOMMAP, target: { region: '침대 이불' }, difficulty: 0.2 },
            { prompt: '불이 옮기 쉬운 천 가까이라 피할 자리에 핀을 꽂아요.', toolOptions: ROOMMAP, target: { region: '커튼 옆' }, difficulty: 0.25 },
            { prompt: '모둠에서 각 자리를 고른 이유를 한 가지씩 말해요.', free: true, talk: true, conclude: '충전은 딱딱하고 둘레가 트인 곳에서, 이불·커튼 옆은 피해요.' },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '충전하기 가장 알맞은 자리는 어디인가요?', options: ['이불 위', '책상 위', '커튼 옆'], answer: '책상 위' }] },
      }),
      X('activity.device-check', {
        title: '우리 집 충전기 점검표', method: '우리 집 충전기 점검표', tool: 'kitchen', minutes: 14,
        levels: { easy: '점검 칸 3개를 표시한다.', base: '점검 칸 4개를 표시한다.', challenge: '점검 칸 5개를 표시하고 고칠 점을 차례대로 정한다.' },
        activity: {
          title: '충전기 점검하고 고칠 점 정하기', tool: 'kitchen',
          teacher: '"우리 집 충전기를 점검한다면 무엇부터 볼까요?" 점검표를 소리 내어 읽고 바른 항목만 표시하게 한다. "베개 밑 충전도 괜찮아요"에 표시한 학생에게 "열이 갇히면 어떻게 될까요?"라고 묻는다. 고칠 점이 생기면 먼저 쓰기를 멈추고 어른께 보여 드리는 차례를 짚는다.',
          task: '충전기 점검표를 채우고, 고칠 점을 차례대로 정해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            CHK('우리 집 충전기를 점검할 항목만 표시해요.', '충전기 점검', ['선에 갈라진 곳 없음', '인증 표시 확인', '딱딱한 곳에서 충전', '다 차면 뽑기', '뜨거우면 바로 멈추기'], ['베개 밑에서 충전'], { easy: 3, base: 4 }, 0.2),
            ORDER('충전선이 갈라졌어요. 고칠 차례대로 놓아요.', ['쓰던 것 멈추기', '어른께 보여 드리기', '새 선으로 바꾸기', '충전 자리 다시 보기'], { mode: 'order', trap: '테이프로 감아 쓰기' }, 0.25, { conclude: '이상이 보이면 먼저 멈추고 어른께 보여 드려요.' }),
            { prompt: '모둠에서 우리 집에서 가장 먼저 고칠 점 하나를 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '우리 집 충전기를 점검해 표시해요.', options: ['선이 멀쩡해요', '인증 표시가 있어요', '책상 위에서 충전해요', '다 차면 뽑아요'] }] },
      }),
      X('activity.charge-story', {
        title: '잠들기 전 충전 이야기', method: '잠들기 전 충전 이야기 차례', tool: 'story', minutes: 14,
        levels: { easy: '장면 3장을 차례대로 놓는다.', base: '장면 4장을 차례대로 놓는다.', challenge: '장면 4장에 섞인 틀린 장면을 빼고 놓는다.' },
        activity: {
          title: '충전 이야기 차례 놓기', tool: 'story',
          teacher: '"잠들기 전에 충전기를 어떻게 해 두면 좋을까요?" 장면을 놓을 때마다 그 장면이 막는 위험을 말하게 한다. "충전 중에 뜨거워도 다 찰 때까지 기다려요"라는 학생에게 "뜨거움은 이상 신호예요. 먼저 멈추고 알려요"라고 말해 준다.',
          task: '충전하는 이야기 장면을 차례대로 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDER('잠들기 전 휴대전화 충전 이야기를 차례대로 놓아요.', ['충전 자리 확인', '다 차면 뽑기', '뜨거우면 멈추기', '어른께 알리기'], { trap: '베개 밑에 두고 자기', motifs: ['house', 'star', 'sun', 'bird'] }, 0.2),
            ORDER('태블릿 충전 이야기를 차례대로 놓아요.', ['책상 위에 두기', '인증 충전기 꽂기', '충전 중 덮지 않기', '다 차면 플러그 뽑기'], { easy: [0, 1, 3], trap: '이불 속에서 게임하기', motifs: ['tree', 'star', 'leaf', 'moon'] }, 0.25),
            ORDER('휴대전화를 떨어뜨렸어요. 차례대로 놓아요.', ['떨어진 폰 살피기', '금 간 곳 확인', '이상하면 충전 멈추기', '어른께 보여 드리기'], { easy: [0, 2, 3], trap: '금 간 채 충전하기', motifs: ['star', 'leaf', 'cloud', 'bird'] }, 0.3, { conclude: '자리 확인 → 다 차면 뽑기 → 뜨거우면 멈추고 알리기를 지켜요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '충전 중 충전기가 뜨거우면 ___ 어른께 알려요.', answer: '멈추고' }] },
      }),
      X('wrap.battery-feel', {
        title: '멈추고 알린 판단의 마음', method: '멈추고 알린 판단의 마음', tool: 'emotion', minutes: 7,
        levels: { easy: '장면 1개에 마음 카드를 짝 짓는다.', base: '장면 2개에 마음 카드를 짝 짓는다.', challenge: '장면 3개에 짝 짓고 이번 주 충전 실천 하나를 고른다.' },
        wrap: {
          teacher: '"뜨거운 충전기를 뽑고 어른께 알렸을 때 마음이 어땠을까요?" 장면마다 마음 카드를 고르게 하고, 이번 주에 지킬 충전 실천 하나를 정하게 한다. "괜히 말했다가 혼날까 걱정돼요"라는 말에는 그 마음을 인정하고 "알린 덕분에 위험을 막았어요"라고 말해 준다.',
          exitTicket: [
            FEEL('장면과 그때의 마음을 이어요.', [['뜨거운 충전기를 바로 뽑았어요', '뿌듯함'], ['어른이 새 충전기로 바꿔 줬어요', '고마움'], ['책상 위 충전으로 바꾸니 마음이 놓여요', '편안함']], ['뿌듯함', '고마움', '편안함', '짜증']),
            { type: 'choice', prompt: '이번 주에 지킬 충전 실천으로 알맞은 것은?', options: ['베개 밑에서 충전하기', '다 차면 플러그 뽑기', '갈라진 선 계속 쓰기'], answer: 1, difficulty: 0.15, explain: '다 차면 뽑고, 딱딱한 곳에서 충전해요.' },
            { type: 'short', prompt: '이번 주에 지킬 충전 실천 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '이상하면 멈추고 알려요',
          items: [
            { type: 'table', prompt: '안전하면 ○, 위험하면 ×를 써요.', columns: ['행동', '○ / ×'], cells: [['부푼 배터리 계속 쓰기', ''], ['뜨거우면 뽑고 알리기', ''], ['이불 위에서 충전', '']], answer: '×, ○, ×' },
            { type: 'short', prompt: '가족에게 알려 줄 충전 안전 한 가지를 써요.' },
          ],
        },
      }),
      X('wrap.battery-tl', {
        title: '충전 전·중·후 실천', method: '충전 전·중·후 실천', tool: 'timeline', minutes: 7,
        levels: { easy: '카드 3장을 충전 전·중·후에 나눈다.', base: '카드 5장을 나눈다.', challenge: '카드 6장을 나눈다.' },
        wrap: {
          teacher: '"충전하기 전, 하는 중, 다 된 뒤에 할 일은 무엇일까요?" 시간 띠에 카드를 나눈 뒤 오늘 배운 이상 신호를 한 번 더 떠올리게 한다. "선을 잡아당겨 뽑아요"라는 학생에게 "선이 상하지 않게 플러그를 잡고 뽑아요"라고 짚어 준다.',
          exitTicket: [
            TLX('충전 실천 카드를 시간 띠에 나누어요.', ['충전 전', '충전 중', '충전 후'], { '충전 전': ['선 상태 살피기', '인증 충전기 쓰기'], '충전 중': ['덮지 않기', '뜨거우면 멈추기'], '충전 후': ['다 차면 뽑기', '플러그 잡고 뽑기'] }, ['선 상태 살피기', '뜨거우면 멈추기', '다 차면 뽑기'], ['선 상태 살피기', '인증 충전기 쓰기', '덮지 않기', '뜨거우면 멈추기', '다 차면 뽑기']),
            { type: 'choice', prompt: '충전기를 콘센트에서 뺄 때 바른 방법은?', options: ['선을 잡아당긴다', '플러그를 잡고 뺀다', '발로 밀어 뺀다'], answer: 1, difficulty: 0.15, explain: '선을 당기면 선이 상해요. 플러그를 잡고 빼요.' },
            { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '충전 전·중·후',
          items: [
            { type: 'table', prompt: '충전할 때 할 일을 하나씩 써요.', columns: ['충전 전', '충전 중', '충전 후'], cells: [['', '', '']] },
            { type: 'choice', prompt: '배터리 이상 신호가 아닌 것은?', options: ['부풂', '탄 냄새', '새것처럼 깨끗함'], answer: '새것처럼 깨끗함' },
          ],
        },
      }),
    );
  }

  // ======== 6학년 · 포장 뒷면: 알레르기와 고카페인 (별표 2 초등 생활안전 2. 식품 안전 알기 + 표준안 '고카페인') ========
  {
    const X = mk('g6-food-label', 6);
    const SNACK = {
      pcookie: { id: 'pcookie', text: '땅콩 쿠키', price: 2500 }, energy: { id: 'energy', text: '에너지 음료(고카페인)', price: 2000 },
      fruit: { id: 'fruit', text: '과일 컵', price: 3000 }, rice: { id: 'rice', text: '쌀과자', price: 2000 },
      tea: { id: 'tea', text: '보리차', price: 1000 }, smilk: { id: 'smilk', text: '딸기 우유', price: 1500 },
      pbread: { id: 'pbread', text: '땅콩버터 빵', price: 2500 }, jelly: { id: 'jelly', text: '과일 젤리', price: 1500 },
    };
    const S = (...k) => k.map((x) => SNACK[x]);
    const DRINK = [['물', 40], ['우유', 25], ['과일 주스', 20], ['고카페인 음료', 15]];
    // 친구 알레르기 나누기: 쉬움 친구 1명·기본 2명·도전 3명
    const OKG = { 1: ['사과', '보리차'], 2: ['사과', '쌀과자', '보리차'], 3: ['사과', '쌀과자', '보리차'] };
    const CKG = { 1: ['땅콩 쿠키', '견과류 바'], 2: ['땅콩 쿠키', '견과류 바', '우유 푸딩'], 3: ['땅콩 쿠키', '견과류 바', '우유 푸딩', '달걀 빵', '마요 샌드위치'] };
    const fr = (n) => ({ sort: { '먹어도 돼요': OKG[n], 확인해요: CKG[n] } });
    const frCards = (n) => { const out = []; for (let i = 0; i < 5; i++) { if (CKG[n][i]) out.push(CKG[n][i]); if (OKG[n][i]) out.push(OKG[n][i]); } return out; };
    M.push(
      X('intro.back-label', {
        title: '포장 뒷면 표시 찾기', method: '포장 뒷면에서 표시 찾기', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 알레르기 표시 하나를 짚어 주고 고르게 한다.', base: '알레르기 표시와 고카페인 표시 두 개를 고른다.', challenge: '날짜 표시까지 세 개를 고르고 저마다 뜻을 말한다.' },
        intro: {
          teacher: '"과자 봉지 뒷면에서 내 몸을 지키는 정보는 어디에 있을까요?" 시연 단추로 \'땅콩 함유\' 알레르기 표시와 \'고카페인 함유\' 표시가 바구니에 담기는 모습을 보인다. "조금만 먹으면 알레르기는 안 생겨요"라는 말에는 "알레르기가 있는 친구는 조금만 먹어도 몸이 반응할 수 있어요. 그래서 표시를 읽어요"라고 되묻는다.',
          student: '좋아하는 간식 포장 뒷면에서 본 표시가 있다면 하나 떠올려 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'pick', basket: '꼭 읽을 표시', cards: [{ id: 'allergy', text: '땅콩 함유 표시' }, { id: 'new', text: '신제품 문구' }, { id: 'caffeine', text: '고카페인 함유 표시' }, { id: 'char', text: '캐릭터 그림' }, { id: 'date', text: '날짜 표시' }], shuffle: false }, sequence: [{ pick: ['allergy', 'caffeine'] }] },
          art: art('a paper snack bag turned over to show its back label, with a paper peanut icon and a coffee bean icon highlighted', '포장 뒷면을 읽어요', 'leaf', 'buttercup'),
        },
      }),
      X('intro.allergy-body', {
        title: '알레르기 몸 신호 짚기', method: '알레르기 몸 신호', tool: 'body', minutes: 5,
        levels: { easy: '교사가 두 곳(피부·목)을 짚어 주고 함께 고른다.', base: '알레르기 반응이 나타날 수 있는 세 곳을 고른다.', challenge: '세 곳을 고르고 그런 신호가 보이면 누구에게 알릴지 말한다.' },
        intro: {
          teacher: '"알레르기가 있는 음식을 먹으면 몸 어디에 신호가 나타날까요?" 시연 단추로 종이 몸의 피부(가려움·두드러기), 혀(입안·입술 부음), 목(숨이 답답함)이 차례로 골라지는 모습을 보인다. "가려운 건 참으면 돼요"라는 말에는 "숨이 답답해지면 어떻게 될까요? 신호가 보이면 바로 알려요"라고 되묻는다.',
          student: '친구가 간식을 먹고 몸이 이상하다고 하면 누구에게 알릴지 말해 보아요.',
          demo: { tool: 'body', options: { mode: 'parts', parts: ['눈', '혀', '피부', '목', '배', '무릎'], names: true }, sequence: [{ parts: ['피부', '혀', '목'] }] },
          art: art('a paper body figure with small paper stars on the skin, the mouth and the throat, and a teacher figure nearby', '몸이 보내는 신호', 'star', 'rose'),
        },
        notes: '종이 몸에는 입술이 따로 없어 입안·입술 부음은 혀 자리로 짚는다. 학생 개인의 알레르기 정보를 반 전체에 묻지 않는다.',
      }),
      X('activity.party-budget', {
        title: '친구 생일 간식 고르기', method: '친구 생일 간식 고르기', tool: 'economy', minutes: 14,
        levels: { easy: '간식 4개 가운데 조건 1개(땅콩 빼기)를 지켜 고른다.', base: '간식 6개 가운데 조건 2개(땅콩·고카페인 빼기)를 지켜 고른다.', challenge: '간식 8개 가운데 조건 3개(땅콩·고카페인 빼기, 과일 꼭 넣기)를 지켜 고르고 이유를 말한다.' },
        activity: {
          title: '예산 안에서 배려 간식 고르기', tool: 'economy',
          teacher: '"친구 가온이는 땅콩 알레르기가 있어요. 예산 안에서 모두가 먹을 간식을 골라 볼까요?" 고를 때마다 포장 표시를 떠올리게 한다. "에너지 음료는 신나니까 파티에 좋아요"라는 학생에게 "고카페인 표시가 있는 음료는 어린이에게 알맞을까요?"라고 묻는다. 고른 까닭을 모둠에서 말하게 한다.',
          task: '예산 막대를 넘지 않게, 조건을 지켜 생일 간식을 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '1만 원 안에서 5천 원어치 넘게, 땅콩과 고카페인을 빼고 골라요.', toolOptions: { mode: 'budget', budget: 10000, items: S('pcookie', 'fruit', 'energy', 'rice', 'tea', 'smilk'), ask: '생일 간식 고르기' }, target: { budget: { min: 5000, not: ['pcookie', 'energy'] } }, difficulty: 0.25,
              levels: {
                easy: { prompt: '1만 원 안에서 3천 원어치 넘게, 땅콩 간식을 빼고 골라요.', toolOptions: { items: S('pcookie', 'fruit', 'rice', 'tea') }, target: { budget: { min: 3000, not: ['pcookie'] } } },
                challenge: { prompt: '1만 원 안에서 6천 원어치 넘게, 땅콩·고카페인을 빼고 과일 컵은 꼭 넣어요.', toolOptions: { items: S('pcookie', 'fruit', 'energy', 'rice', 'tea', 'smilk', 'pbread', 'jelly') }, target: { budget: { min: 6000, not: ['pcookie', 'energy', 'pbread'], must: ['fruit'] } } },
              } },
            { prompt: '8천 원 안에서 3천 원어치 넘게, 우유·땅콩·고카페인을 빼고 골라요.', toolOptions: { mode: 'budget', budget: 8000, items: [{ id: 'pud', text: '우유 푸딩', price: 2000 }, { id: 'pgang', text: '땅콩 강정', price: 2500 }, { id: 'apple', text: '사과 주스', price: 1500 }, { id: 'chip', text: '감자칩', price: 2000 }, { id: 'coffee', text: '커피 음료(고카페인)', price: 2500 }, { id: 'corn', text: '옥수수 과자', price: 1500 }], ask: '반 파티 간식 고르기' }, target: { budget: { min: 3000, not: ['pud', 'pgang', 'coffee'] } }, difficulty: 0.3, conclude: '친구의 알레르기와 고카페인 표시를 확인하고 모두가 먹을 수 있는 간식을 골라요.' },
            { prompt: '모둠에서 고른 간식과 그 까닭을 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '땅콩 알레르기가 있는 친구와 나눌 간식 하나와 고른 까닭을 써요.' }] },
        notes: '간식 값은 수업용으로 지은 값이다.',
      }),
      X('activity.label-sort6', {
        title: '먹어도 돼요·확인해요', method: '먹어도 돼요/확인해요', tool: 'mindmap', minutes: 13,
        levels: { easy: '가상 친구 1명(땅콩)의 알레르기를 보고 간식 카드를 나눈다.', base: '가상 친구 2명(땅콩·우유)을 생각해 나눈다.', challenge: '가상 친구 3명(땅콩·우유·달걀)을 생각해 나눈다.' },
        activity: {
          title: '친구 알레르기로 간식 나누기', tool: 'mindmap',
          teacher: '"가상 친구 가온이는 땅콩, 다인이는 우유 알레르기가 있어요. 모두 함께 먹을 수 있는 간식은 무엇일까요?" 카드를 놓을 때마다 어떤 성분 때문인지 말하게 한다. 치즈 과자를 "먹어도 돼요"에 두는 학생에게 "치즈는 무엇으로 만들까요?"라고 묻는다. 실제 반 친구의 알레르기는 묻지 않는다.',
          task: '가상 친구의 알레르기 정보를 보고 간식 카드를 두 가지로 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            { prompt: '가온(땅콩)·다인(우유) 알레르기를 생각해 간식을 나누어요.', toolOptions: { topic: '친구와 나눌 간식', slots: ['먹어도 돼요', '확인해요'], cards: frCards(2) }, target: fr(2), difficulty: 0.25,
              levels: {
                easy: { prompt: '가온(땅콩) 알레르기를 생각해 간식을 나누어요.', toolOptions: { cards: frCards(1) }, target: fr(1) },
                challenge: { prompt: '가온(땅콩)·다인(우유)·라온(달걀) 알레르기를 생각해 나누어요.', toolOptions: { cards: frCards(3) }, target: fr(3) },
              } },
            SORT('가온(땅콩)이 볼 포장 표시를 두 가지로 나누어요.', { topic: '포장 뒷면 표시', slots: ['먹어도 돼요', '확인해요'], groups: { '먹어도 돼요': ['알레르기 표시: 밀', '알레르기 표시: 대두'], 확인해요: ['알레르기 표시: 땅콩', '땅콩과 같은 곳에서 만듦'] }, easy: 1, extra: { 확인해요: ['표시가 없는 간식'] } }, 0.3, { conclude: '포장 뒷면의 알레르기 표시를 읽고, 모르면 먹기 전에 확인해요.' }),
            { prompt: '모둠에서 친구의 알레르기를 배려하는 말 한 가지를 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '땅콩 알레르기 친구가 먹어도 되면 ○, 확인할 것이면 △를 써요.', columns: ['간식', '○ / △'], cells: [['사과', ''], ['땅콩 쿠키', ''], ['표시 없는 간식', '']], answer: '○, △, △' }] },
        notes: '친구 이름(가온·다인·라온)과 알레르기 정보는 지은 것이다.',
      }),
      X('activity.caffeine-chart', {
        title: '음료 선택 원그래프 읽기(가상)', method: '가상 자료: 음료 선택 원그래프', tool: 'chart', minutes: 14,
        levels: { easy: '조각 값이 보이는 원그래프에서 항목 3개를 읽는다.', base: '항목 4개를 견주어 읽는다.', challenge: '항목 4개를 견준 뒤 모둠 토의 제안 문장을 고른다.' },
        activity: {
          title: '가상 우리 반 음료 그래프', tool: 'chart',
          teacher: '"이 원그래프는 수업을 위해 꾸민 가상의 우리 반 음료 선택이에요. 고카페인 음료는 얼마나 될까요?" 조각 크기를 견주게 한다. "에너지 음료는 공부할 때 마셔도 괜찮아요"라는 학생에게 "고카페인 표시는 왜 따로 있을까요? 잠과 몸에 어떤 영향을 줄지 생각해 봐요"라고 묻는다.',
          task: '가상의 음료 선택 원그래프를 읽고, 모둠 토의 제안을 골라요.', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            { prompt: '가장 많은 학생이 고른 음료는 무엇인가요?(가상 자료)', toolOptions: { type: 'circle', mode: 'read', title: '우리 반 음료 선택(가상)', unit: '%', data: DRINK, choices: ['물', '우유', '과일 주스'], question: '가장 많은 음료는?' }, target: { pick: 0 }, difficulty: 0.15 },
            { prompt: '고카페인 음료를 고른 학생은 몇 %인가요?(가상 자료)', toolOptions: { type: 'circle', mode: 'read', title: '우리 반 음료 선택(가상)', unit: '%', data: DRINK, choices: ['5%', '15%', '25%', '40%'], question: '고카페인 음료는?' }, target: { pick: 1 }, difficulty: 0.25 },
            { prompt: '그래프를 보고 모둠 토의 제안으로 알맞은 것을 골라요(가상 자료).', toolOptions: { type: 'circle', mode: 'read', title: '우리 반 음료 선택(가상)', unit: '%', data: DRINK, choices: ['공부할 땐 에너지 음료를 마시자', '목마르면 물을 마시자', '고카페인 음료를 더 사자'], question: '알맞은 제안은?', why: ['고카페인 음료는 어린이에게 알맞지 않아요.', '', '그래프는 고카페인 음료를 늘리자는 근거가 아니에요.'] }, target: { pick: 1 }, difficulty: 0.3, conclude: '음료를 고를 때 고카페인 표시를 보고, 목마를 때는 물을 마셔요.' },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '그래프(가상)에서 두 번째로 많은 음료는?', options: ['물', '우유', '과일 주스'], answer: '우유' }] },
        notes: '그래프 수치는 수업용 가상 자료다. 실제 반 설문으로 바꿀 때는 이름을 받지 않는다.',
      }),
      X('activity.label-dilemma', {
        title: '친구 입술이 부어올랐어요', method: '갈림길: 친구가 입술이 부어올랐어요', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번(기다릴지 알릴지)에서 고르고 근거 한 장을 고른다.', base: '갈림 2번(곁에서 할 일)을 지나 근거를 고른다.', challenge: '갈림 3번(무엇을 먹었는지 알리기)까지 지나 근거를 모두 고르고 다른 길과 견준다.' },
        activity: {
          title: '갈림길: 간식 뒤 몸 신호', tool: 'dilemma',
          teacher: '"친구가 괜찮다고 하면 기다려도 될까요?" 고를 때마다 결과를 읽게 한다. "조금 기다리면 저절로 나아요"라는 학생에게 "숨이 답답해지면 어떻게 될까요? 알레르기 신호는 빨리 알려야 해요"라고 말해 준다. 무엇을 먹었는지 포장을 보여 드리면 원인을 빨리 찾을 수 있다는 점을 짚는다.',
          task: '친구에게 알레르기 신호가 보이는 상황의 갈림길마다 고르고, 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '간식 뒤 친구의 몸 신호',
            steps: [
              { text: '반 파티에서 간식을 먹던 친구가 입술이 부어오르고 가렵다고 해요.', motif: 'flower',
                good: ['tell', '바로 선생님께 알린다', '선생님이 곧바로 오셔요.', [['친구', '빨리 도움을 받아요', 1]]],
                bad: ['wait', '조금 기다려 본다', '친구가 숨이 답답하다고 해요.', '알레르기 신호는 빨리 심해질 수 있어요.', [['친구', '더 힘들어요', -1]]] },
              { text: '선생님이 오시는 동안 친구 곁에서 무엇을 할까요?', motif: 'leaf',
                good: ['stay', '곁에 있으며 간식을 치운다', '친구가 더 먹지 않고 기다려요.', [['친구', '덜 불안해요', 1]]],
                bad: ['give', '다른 간식을 먹여 본다', '그 간식에도 같은 성분이 있을까 걱정돼요.', '원인을 모를 때는 더 먹이지 않아요.', [['친구', '더 위험해질 수 있어요', -1]]] },
              { text: '선생님이 친구가 무엇을 먹었는지 물어요.', motif: 'star',
                good: ['pack', '먹던 간식 포장을 보여 드린다', '포장 뒷면으로 성분을 바로 알았어요.', [['친구', '알맞은 도움을 받아요', 1]]],
                bad: ['guess', '기억나는 대로 대충 말한다', '무엇 때문인지 찾기 어려워요.', '포장 뒷면을 보면 성분을 알 수 있어요.', [['친구', '도움이 늦어요', -1]]] },
            ],
            ending: '바로 알리고 포장을 보여 드린 판단 덕분에 친구가 빨리 도움을 받았어요.',
            reasons: [{ id: 'fast', text: '알레르기 신호가 보이면 바로 알린다' }, { id: 'label', text: '포장 표시로 원인을 찾을 수 있다' }, { id: 'little', text: '조금만 먹었으면 괜찮다', why: '조금만 먹어도 반응이 생길 수 있어요.' }, { id: 'wait', text: '기다리면 저절로 낫는다', why: '신호가 심해질 수 있으니 바로 알려요.' }],
            good: ['fast', 'label'],
            talk: '모둠에서 "알레르기가 있는 친구를 배려하는 파티 규칙"을 하나씩 말해요.',
            conclude: '알레르기 신호가 보이면 기다리지 말고 바로 어른께 알려요.',
          }),
        },
        worksheet: { items: [{ type: 'choice', prompt: '간식을 먹은 친구 입술이 부어올라요. 먼저 할 일은?', options: ['조금 기다린다', '바로 선생님께 알린다', '물을 많이 먹인다'], answer: '바로 선생님께 알린다' }] },
      }),
      X('wrap.label-self', {
        title: '포장 읽기 자기 점검표', method: '포장 읽기 자기 점검표', tool: 'timer', minutes: 7,
        levels: { easy: '점검 칸 2개(알레르기·고카페인)를 표시한다.', base: '점검 칸 3개(+ 날짜)를 표시한다.', challenge: '점검 칸 4개를 표시하고 이번 주 실천을 쓴다.' },
        wrap: {
          teacher: '"간식을 사기 전에 포장 뒷면에서 무엇을 확인할까요?" 점검 칸을 스스로 읽고 표시하게 한다. 출구 2번에서 "에너지 음료로 졸음을 쫓는다"를 고른 학생에게 "졸릴 때 몸에 필요한 것은 무엇일까요? 잠과 쉼이에요"라고 말해 준다.',
          exitTicket: [
            SELF('포장 읽기 점검', ['알레르기 표시를 읽는다', '고카페인 표시를 확인한다', '날짜 표시를 확인한다', '친구 알레르기를 배려한다'], '간식을 고를 때 할 수 있는 것에 스스로 표시해요.'),
            { type: 'choice', prompt: '시험 공부로 졸려요. 가장 알맞은 것은?', options: ['에너지 음료로 졸음을 쫓는다', '잠깐 쉬고 물을 마신다', '커피를 여러 잔 마신다'], answer: 1, difficulty: 0.15, explain: '고카페인 음료 대신 쉬고 물을 마셔요.' },
            { type: 'short', prompt: '이번 주에 간식을 고를 때 지킬 실천 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '포장 뒷면을 읽어요',
          items: [
            { type: 'check', prompt: '간식 포장에서 확인할 것에 표시해요.', options: ['알레르기 표시', '고카페인 표시', '날짜 표시'] },
            { type: 'short', prompt: '내가 좋아하는 간식 포장 뒷면에서 찾은 표시 하나를 써요.' },
          ],
          easy: { note: '알레르기 표시, 고카페인 표시를 찾아요.', items: [{ type: 'draw', prompt: '포장 뒷면을 읽는 내 모습을 그려요.' }] },
        },
      }),
      X('wrap.label-rubric', {
        title: '간식 안내 문구 쓰기', method: '간식 안내 문구 쓰기', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '기준 2개로 점검하고 문장 틀을 써도 된다.', base: '기준 3개(알레르기 배려·짧고 분명·누구나 지킬 수 있음)로 점검한다.', challenge: '기준 3개로 점검한 뒤 한 군데를 고쳐 쓰고 꼭 넣을 낱말을 넣는다.' },
        wrap: {
          teacher: '"반 파티 안내문에 알레르기를 배려하는 한 줄을 넣는다면 어떻게 쓸까요?" 기준표를 함께 읽고 쓴 뒤 스스로 점검하게 한다. "땅콩 알레르기 있는 사람은 먹지 마세요"처럼 한 사람에게만 짐을 지우는 문구를 쓴 학생에게 "모두가 함께 지킬 수 있게 바꾸면 어떨까요?"라고 묻는다.',
          exitTicket: [
            RUBX('반 파티 안내 문구에 알레르기 배려 한 줄을 쓰고 기준표로 점검해요.', { topic: '반 파티 안내문의 알레르기 배려 한 줄', title: '간식 안내 문구', starter: '간식을 가져올 때는 ~을 확인해 주세요.', crit: ['알레르기를 배려했다', '짧고 분명하다', '누구나 지킬 수 있다'], must: [['알레르기', '성분', '표시']], chars: [15, 100] }),
            { type: 'choice', prompt: '알레르기를 배려한 안내 문구로 가장 알맞은 것은?', options: ['아무 간식이나 가져와요', '포장의 알레르기 표시를 확인해 주세요', '땅콩 많은 간식을 가져와요'], answer: 1, difficulty: 0.15, explain: '모두가 표시를 확인하면 친구를 지킬 수 있어요.' },
            { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '모두가 먹을 수 있는 파티',
          items: [
            { type: 'short', prompt: '반 파티 안내 문구를 다시 깨끗하게 써요.' },
            { type: 'check', prompt: '내 문구를 점검해요.', options: ['알레르기를 배려했나요', '짧고 분명한가요', '누구나 지킬 수 있나요'] },
          ],
        },
      }),
    );
  }

  // ======== 6학년 · 실험 계획과 약품·불 사고 대처 (별표 2 초등 생활안전 3. 실험·실습 시 안전에 유의하기) ========
  {
    const X = mk('g6-lab-plan', 6);
    M.push(
      X('intro.plan-pick', {
        title: '실험 준비에서 빠진 것 찾기', method: '실험 계획 장면에서 빠진 것 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 빠진 것 두 개(보안경·소화기 확인)를 짚어 주고 고르게 한다.', base: '빠진 것 세 개를 스스로 고른다.', challenge: '빠진 것 네 개를 고르고 저마다 무엇을 막는지 말한다.' },
        intro: {
          teacher: '"이 모둠은 촛불 실험을 시작하려 해요. 시작하기 전에 빠진 것은 무엇일까요?" 시연 단추로 보안경 없는 친구·소화기 위치 확인 안 함·묶지 않은 긴 머리가 바구니에 담기는 모습을 보인다. "위험은 실험하다 생기면 그때 생각하면 돼요"라는 말에는 "불이 옮겨붙은 뒤에 소화기를 찾으면 어떨까요? 미리 예상해 두어요"라고 되묻는다.',
          student: '실험을 시작하기 전에 꼭 준비하는 것 하나를 짝에게 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'pick', basket: '빠진 것', cards: [{ id: 'goggle', text: '보안경 없는 친구' }, { id: 'order', text: '실험 순서 적기' }, { id: 'ext', text: '소화기 위치 확인 안 함' }, { id: 'apron', text: '앞치마 입은 친구' }, { id: 'hair', text: '묶지 않은 긴 머리' }], shuffle: false }, sequence: [{ pick: ['goggle', 'ext', 'hair'] }] },
          art: art('a paper science table set for a candle experiment, one paper child without goggles and loose hair, a fire extinguisher far away', '시작 전에 빠진 것은?', 'sun', 'peach'),
        },
      }),
      X('intro.risk-mind', {
        title: '실험 위험 예상 그물', method: '실험 위험 예상 그물', tool: 'mindmap', minutes: 5,
        levels: { easy: '예상 위험 카드 3장을 불·유리·약품 가지에 한 장씩 나눈다.', base: '카드 5장을 나눈다.', challenge: '카드 6장을 나누고 가지마다 대비할 보호 장구를 말한다.' },
        intro: {
          teacher: '"촛불 실험에서 생길 수 있는 위험을 미리 적어 볼까요?" 시연 단추로 머리카락에 불이 닿음은 불 가지에, 뜨거운 유리 집기·깨진 비커는 유리 가지에, 눈에 튐은 약품 가지에 가는 모습을 보인다. "촛불은 작아서 위험하지 않아요"라는 말에는 "작은 불도 종이나 머리카락에 옮으면 어떻게 될까요?"라고 되묻는다.',
          student: '오늘 할 실험에서 예상되는 위험 하나를 말해 보아요.',
          demo: { tool: 'mindmap', options: { topic: '촛불 실험', slots: ['불', '유리', '약품'], cards: ['머리카락에 불이 닿음', '뜨거운 유리 집기', '눈에 약품이 튐', '깨진 비커', '종이에 불이 옮음'] }, sequence: [{ sort: { 불: ['머리카락에 불이 닿음', '종이에 불이 옮음'], 유리: ['뜨거운 유리 집기', '깨진 비커'], 약품: ['눈에 약품이 튐'] } }] },
          art: art('a paper candle in a glass jar at the center of a paper mind map with branches for fire, glass and chemicals', '어떤 위험이 있을까?', 'star', 'lavender'),
        },
      }),
      X('activity.plan-check', {
        title: '실험 계획표 점검', method: '실험 계획표 점검', tool: 'kitchen', minutes: 14,
        levels: { easy: '계획표 칸 3개를 표시한다.', base: '계획표 칸 4개(예상 위험·보호 장구·비상 물품·역할)를 표시한다.', challenge: '계획표 칸 5개를 표시하고 모둠 역할을 나눈다.' },
        activity: {
          title: '모둠 실험 계획표 채우기', tool: 'kitchen',
          teacher: '"실험 계획표에 꼭 들어가야 할 것은 무엇일까요?" 모둠이 계획표를 소리 내어 읽고 필요한 칸만 표시하게 한다. "간식 준비"에 표시한 모둠에게 "실험실에서 음식을 먹으면 어떤 일이 생길 수 있을까요?"라고 묻는다. 역할(불 담당·기록·정리)을 나누면 서두르지 않게 된다는 점을 짚는다.',
          task: '모둠 실험 계획표에서 꼭 필요한 칸만 골라 표시해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            CHK('촛불 실험 계획표에 꼭 넣을 것만 표시해요.', '촛불 실험 계획', ['예상 위험 적기', '보안경 준비', '소화기 위치 확인', '젖은 수건 준비', '모둠 역할 나누기'], ['간식 준비'], { easy: 3, base: 4 }, 0.2),
            CHK('식초·베이킹소다 실험 계획표에 꼭 넣을 것만 표시해요.', '거품 실험 계획', ['보안경 쓰기', '환기하기', '눈 씻는 곳 확인', '앞치마 입기', '정한 양만 쓰기'], ['맛보기'], { easy: 3, base: 4 }, 0.25, { conclude: '실험 전에 위험을 예상하고, 보호 장구·비상 물품·역할을 계획표에 적어요.' }),
            { prompt: '모둠에서 역할(불 담당·기록·정리)을 나누고 서로 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 모둠 실험 계획을 써요.', columns: ['예상 위험', '보호 장구', '역할'], cells: [['', '', '']] }] },
      }),
      X('activity.fire-order', {
        title: '불이 번졌을 때 차례', method: '불이 번졌을 때 차례', tool: 'story', minutes: 13,
        levels: { easy: '장면 3장을 차례대로 놓는다.', base: '장면 4장(멈추기 → 알리기 → 지시 따르기 → 덮기·대피)을 놓는다.', challenge: '장면 4장에 섞인 틀린 장면을 빼고 놓는다.' },
        activity: {
          title: '불이 번졌을 때 장면 차례', tool: 'story',
          teacher: '"실험대 종이에 불이 옮았어요. 가장 먼저 할 일은 무엇일까요?" 장면을 놓은 뒤 \'멈추고 크게 알리기\'를 반 전체가 따라 해 본다. "혼자 빨리 꺼야 해요"라는 학생에게 "혼자 끄다 불이 커지면 어떻게 될까요? 선생님 지시에 따라 덮거나 대피해요"라고 말해 준다.',
          task: '실험 중 불이 번졌을 때 할 일 장면을 차례대로 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDER('촛불 실험 중 불이 번졌어요. 차례대로 놓아요.', ['멈추기', '크게 알리기', '선생님 지시 따르기', '덮거나 대피하기'], { trap: '혼자 입으로 불어 끄기', motifs: ['star', 'bird', 'house', 'leaf'] }, 0.2),
            ORDER('실험대 종이에 불이 옮았어요. 차례대로 놓아요.', ['뒤로 물러서기', '선생님께 알리기', '선생님이 덮어 끄기', '모둠 인원 확인'], { easy: [0, 1, 2], trap: '종이를 손으로 털기', motifs: ['leaf', 'bird', 'house', 'star'] }, 0.25),
            ORDER('연기가 많아졌어요. 차례대로 놓아요.', ['멈추고 알리기', '자세 낮추기', '지시대로 대피하기', '밖에서 인원 확인'], { easy: [0, 2, 3], trap: '물건 챙기러 가기', motifs: ['cloud', 'leaf', 'house', 'star'] }, 0.3, { conclude: '불이 번지면 멈추고 알린 뒤, 선생님 지시에 따라 덮거나 대피해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '실험 중 불이 번지면 가장 먼저 할 일은?', options: ['혼자 끈다', '멈추고 크게 알린다', '물건을 챙긴다'], answer: '멈추고 크게 알린다' }] },
        notes: '불을 끄는 방법(덮기·소화기)은 선생님 지시에 따르는 것으로만 다룬다. 학생이 직접 끄는 활동은 하지 않는다.',
      }),
      X('activity.eye-dilemma', {
        title: '친구 눈에 약품이 튀었어요', method: '갈림길: 친구 눈에 약품이 튀었어요', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번(비비게 둘지 알릴지)에서 고르고 근거 한 장을 고른다.', base: '갈림 2번(흐르는 물로 씻기)을 지나 근거를 고른다.', challenge: '갈림 3번(보건실 확인)까지 지나 근거를 모두 고르고 다른 길과 견준다.' },
        activity: {
          title: '갈림길: 눈에 약품이 튀었어요', tool: 'dilemma',
          teacher: '"눈에 약품이 튀면 비벼서 닦으면 될까요?" 고를 때마다 결과를 읽게 한다. "수건으로 닦으면 빨라요"라는 학생에게 "닦으면 약품이 다 빠질까요? 흐르는 물로 오래 씻어요"라고 말해 준다. 괜찮아 보여도 보건실에서 확인을 받는다는 점을 짚는다.',
          task: '친구 눈에 약품이 튄 상황의 갈림길마다 고르고, 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '눈에 튄 약품',
            steps: [
              { text: '실험 중 친구 눈에 약품이 튀었어요. 친구가 눈을 비비려 해요.', motif: 'wave',
                good: ['norub', '비비지 말라고 하고 크게 알린다', '선생님이 바로 달려오셔요.', [['친구', '빨리 도움을 받아요', 1]]],
                bad: ['rub', '비비게 두고 기다린다', '친구 눈이 더 빨개지고 아파요.', '눈을 비비면 더 다칠 수 있어요.', [['친구', '눈이 더 아파요', -1]]] },
              { text: '선생님이 눈 씻는 곳으로 가서 씻으라고 해요.', motif: 'cloud',
                good: ['flow', '흐르는 물로 오래 씻게 돕는다', '따가움이 줄어들어요.', [['친구', '약품이 씻겨요', 1]]],
                bad: ['towel', '수건으로 문질러 닦는다', '약품이 남아 계속 따가워요.', '흐르는 물로 충분히 씻어야 해요.', [['친구', '계속 아파요', -1]]] },
              { text: '다 씻고 나서 친구가 이제 괜찮다고 해요.', motif: 'star',
                good: ['nurse', '보건실에서 확인 받게 한다', '보건 선생님이 눈을 살펴 주셔요.', [['친구', '안심해요', 1]]],
                bad: ['back', '바로 실험을 다시 한다', '조금 뒤 눈이 다시 따갑대요.', '괜찮아 보여도 확인을 받아요.', [['친구', '다시 아파요', -1]]] },
            ],
            ending: '비비지 않고 알리고 씻은 판단 덕분에 친구 눈이 괜찮았어요.',
            reasons: [{ id: 'flow', text: '눈에 튀면 흐르는 물로 씻는다' }, { id: 'tell', text: '비비지 않고 바로 알린다' }, { id: 'rub', text: '비벼서 닦아야 빠진다', why: '비비면 눈이 더 다칠 수 있어요.' }, { id: 'fine', text: '괜찮다고 하면 그냥 둔다', why: '괜찮아 보여도 확인을 받아요.' }],
            good: ['flow', 'tell'],
            talk: '모둠에서 "보안경을 써야 하는 까닭"을 오늘 장면과 이어 말해요.',
            conclude: '눈에 약품이 튀면 비비지 말고 알리고, 흐르는 물로 오래 씻어요.',
          }),
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '눈에 약품이 튀면 비비지 말고 ___ 물로 씻어요.', answer: '흐르는' }] },
      }),
      X('activity.lab-report', {
        title: '실험 안전 계획 한 단락', method: '실험 안전 계획 한 단락', tool: 'rubric-writing', minutes: 14,
        levels: { easy: '기준 2개로 점검하고 문장 틀을 써도 된다.', base: '기준 3개(위험 예상·보호 장구·대처)로 점검한다.', challenge: '기준 3개로 점검한 뒤 한 군데를 고쳐 쓰고 꼭 넣을 낱말을 넣는다.' },
        activity: {
          title: '우리 모둠 실험 안전 계획 쓰기', tool: 'rubric-writing',
          teacher: '"계획표의 칸을 이어 한 단락으로 쓰면 어떻게 될까요?" 기준표를 함께 읽고 쓴 뒤 스스로 점검하게 한다. "조심해서 실험한다"로만 쓴 학생에게 "무엇이 위험하고, 무엇을 쓰고, 사고가 나면 어떻게 할지 써 볼까요?"라고 묻는다.',
          task: '우리 모둠 실험의 위험과 대비를 한 단락으로 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RUB('우리 모둠 실험의 위험과 대비를 한 단락으로 쓰고 점검해요.', { topic: '우리 모둠 실험의 위험과 대비(한 단락)', title: '실험 안전 계획', starter: '우리 실험에서 예상되는 위험은 ~이다. 그래서 ~', crit: ['예상 위험을 썼다', '보호 장구를 썼다', '사고 때 대처를 썼다'], must: [['보안경', '장갑', '앞치마']], chars: [40, 240] }, 0.3),
            RUB('실험을 마친 뒤 안전 계획을 잘 지켰는지 돌아보는 글을 써요.', { topic: '실험 뒤 안전 계획 돌아보기', title: '실험 돌아보기', starter: '계획대로 지킨 것은 ~이다. 다음에는 ~', crit: ['지킨 것을 썼다', '못 지킨 것을 썼다', '다음에 고칠 점을 썼다'], must: [['다음에', '고칠', '바꿀']], chars: [30, 200] }, 0.3),
            { prompt: '짝과 글을 바꿔 읽고, 빠진 대비 하나를 찾아 말해 줘요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 모둠 실험에서 가장 조심할 위험과 대비를 한 문장으로 써요.' }] },
      }),
      X('wrap.lab-self6', {
        title: '실험 안전 자기 점검표', method: '실험 안전 자기 점검표', tool: 'timer', minutes: 7,
        levels: { easy: '점검 칸 2개를 표시한다.', base: '점검 칸 3개를 표시한다.', challenge: '점검 칸 4개를 표시한다.' },
        wrap: {
          teacher: '"오늘 세운 계획을 실험에서 그대로 지켰나요?" 점검 칸을 정직하게 표시하게 하고, 못 한 칸은 다음 실험에서 고칠 점으로 말하게 한다. 출구 2번에서 "눈을 비벼 닦는다"를 고른 학생에게 "비비면 더 다칠 수 있어요. 흐르는 물로 씻어요"라고 말해 준다.',
          exitTicket: [
            SELF('실험 계획 점검', ['계획한 보호 장구를 썼다', '예상한 위험을 지켜봤다', '역할대로 움직였다', '실험 뒤 정리했다'], '오늘 실험에서 계획대로 지킨 것에 스스로 표시해요.'),
            { type: 'choice', prompt: '약품이 눈에 튀었을 때 바른 것은?', options: ['눈을 비벼 닦는다', '흐르는 물로 씻고 알린다', '수건으로 문지른다'], answer: 1, difficulty: 0.15, explain: '비비지 말고 흐르는 물로 씻고 바로 알려요.' },
            { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '계획대로 안전하게',
          items: [
            { type: 'check', prompt: '오늘 실험에서 지킨 것에 표시해요.', options: ['보호 장구', '예상 위험 살피기', '역할 지키기'] },
            { type: 'short', prompt: '다음 실험에서 고칠 점 하나를 써요.' },
          ],
          easy: { note: '보안경, 앞치마, 정리를 떠올려요.', items: [{ type: 'draw', prompt: '보호 장구를 갖춘 내 모습을 그려요.' }] },
        },
      }),
      X('wrap.lab-tl6', {
        title: '실험 전·중·후 대처 정리', method: '실험 전·중·후 대처 정리', tool: 'timeline', minutes: 7,
        levels: { easy: '카드 3장을 예방·대처·정리 구간에 나눈다.', base: '카드 5장을 나눈다.', challenge: '카드 6장을 나눈다.' },
        wrap: {
          teacher: '"실험 전 예방, 사고가 났을 때 대처, 끝난 뒤 정리를 나누어 볼까요?" 시간 띠에 카드를 나눈 뒤 오늘 쓴 계획 글과 견주게 한다. "보안경은 사고가 나면 써요"라는 학생에게 "사고가 난 뒤에 쓰면 늦어요. 실험 전에 써요"라고 짚어 준다.',
          exitTicket: [
            TLX('예방·대처·정리 카드를 시간 띠에 나누어요.', ['실험 전 예방', '사고 때 대처', '실험 뒤 정리'], { '실험 전 예방': ['보안경 쓰기', '소화기 위치 확인'], '사고 때 대처': ['멈추고 알리기', '흐르는 물로 씻기'], '실험 뒤 정리': ['불 꺼짐 확인', '약품 제자리'] }, ['보안경 쓰기', '멈추고 알리기', '불 꺼짐 확인'], ['보안경 쓰기', '소화기 위치 확인', '멈추고 알리기', '흐르는 물로 씻기', '불 꺼짐 확인']),
            { type: 'choice', prompt: '보안경은 언제 써야 하나요?', options: ['사고가 난 뒤에', '실험을 시작하기 전에', '정리할 때만'], answer: 1, difficulty: 0.15, explain: '보호 장구는 사고가 나기 전에 미리 써요.' },
            { type: 'short', prompt: '다음 실험 계획표에 꼭 넣을 것 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '예방·대처·정리',
          items: [
            { type: 'table', prompt: '실험할 때 할 일을 하나씩 써요.', columns: ['예방', '대처', '정리'], cells: [['', '', '']] },
            { type: 'choice', prompt: '실험이 끝난 뒤 할 일은?', options: ['불 꺼짐 확인', '보안경 벗고 장난', '약품 섞어 보기'], answer: '불 꺼짐 확인' },
          ],
        },
      }),
    );
  }

  // ======== 6학년 · 보호 장구와 물에 빠진 사람 돕기 (별표 2 초등 생활안전 4. 안전한 놀이활동 및 야외 활동) ========
  {
    const X = mk('g6-gear-water', 6);
    const GEAR = { 인라인: ['손목 보호대', '무릎 보호대'], 자전거: ['헬멧 끈 조이기', '밝은 옷 입기'], 트램펄린: ['한 명씩 뛰기', '가장자리 피하기'] };
    const gearCards = (g) => { const out = []; for (let i = 0; i < 2; i++) for (const k of Object.keys(g)) if (g[k][i]) out.push(g[k][i]); return out; };
    const GEAR2 = { 인라인: GEAR.인라인, 자전거: GEAR.자전거 };
    M.push(
      X('intro.gear-body', {
        title: '보호 장구가 지키는 부위', method: '보호 장구가 지키는 부위', tool: 'body', minutes: 6,
        levels: { easy: '교사가 두 곳(손목·무릎)을 짚어 주고 함께 고른다.', base: '보호대가 지키는 세 곳(손목·팔꿈치·무릎)을 고른다.', challenge: '네 곳을 고르고(헬멧이 지키는 머리는 말로 덧붙임) 부위마다 맞는 종목을 잇는다.' },
        intro: {
          teacher: '"인라인을 타다 넘어지면 몸 어디가 먼저 바닥에 닿을까요?" 시연 단추로 종이 몸의 손목·팔꿈치·무릎이 차례로 골라지는 모습을 보이고, 헬멧은 머리를 지킨다고 말로 덧붙인다. "헬멧은 빨리 달릴 때만 써요"라는 말에는 "천천히 가다 넘어져도 머리를 부딪칠 수 있을까요?"라고 되묻는다.',
          student: '인라인·자전거를 탈 때 내가 차는 보호 장구 하나를 말해 보아요.',
          demo: { tool: 'body', options: { mode: 'parts', parts: ['목', '어깨', '팔꿈치', '손목', '무릎', '발목'], names: true }, sequence: [{ parts: ['손목', '팔꿈치', '무릎'] }] },
          art: art('a paper child on inline skates wearing a helmet, wrist guards and knee pads, with stars marking each guard', '보호 장구가 지켜요', 'star', 'sky'),
        },
        notes: '종이 몸에는 머리 자리가 없어 헬멧은 말로 다룬다.',
      }),
      X('intro.river-scene', {
        title: '물가에서 바른 도움 고르기', method: '물가 장면에서 바른 도움 고르기', tool: 'emotion', minutes: 5,
        levels: { easy: '카드 2장을 바른 도움·위험한 도움으로 함께 나눈다.', base: '카드 3장을 나눈다.', challenge: '카드 4장을 나누고 위험한 도움이 왜 위험한지 말한다.' },
        intro: {
          teacher: '"강가에서 친구가 물에 빠졌어요. 어떤 도움이 바를까요?" 시연 단추로 어른 부르기·튜브 던지기는 바른 도움으로, 바로 뛰어들기·물에 들어가 손 내밀기는 위험한 도움으로 가는 모습을 보인다. "친구가 빠지면 바로 뛰어들어야 해요"라는 말에는 "나도 물에 휩쓸리면 몇 명이 위험해질까요?"라고 되묻는다.',
          student: '물가에서 놀 때 지키는 약속 하나를 짝에게 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'sort', slots: ['바른 도움', '위험한 도움'], cards: ['어른 크게 부르기', '바로 뛰어들기', '튜브 던지기', '물에 들어가 손 내밀기'], weather: false }, sequence: [{ sort: { '바른 도움': ['어른 크게 부르기', '튜브 던지기'], '위험한 도움': ['바로 뛰어들기', '물에 들어가 손 내밀기'] } }] },
          art: art('a paper riverbank where one paper child throws a ring buoy while another waves to call an adult', '바른 도움은 무엇일까?', 'wave', 'sky'),
        },
      }),
      X('activity.gear-match6', {
        title: '종목과 보호 장구 잇기', method: '종목과 보호 장구 잇기', tool: 'mindmap', minutes: 14,
        levels: { easy: '종목 가지 2개(인라인·자전거)에 카드 4장을 나눈다.', base: '종목 가지 3개에 보호 장구·규칙 카드 6장을 나눈다.', challenge: '가지 3개에 나누되 섞인 함정 카드 두 장을 빼고 놓는다.' },
        activity: {
          title: '종목별 보호 장구·규칙 나누기', tool: 'mindmap',
          teacher: '"트램펄린에서 다치지 않으려면 무엇을 지켜야 할까요?" 카드를 놓을 때마다 그 장구·규칙이 무엇을 지키는지 말하게 한다. "헬멧은 손에 들고만 있어도 돼요"라는 함정 카드를 놓는 학생에게 "손에 든 헬멧이 넘어질 때 머리를 지켜 줄까요?"라고 묻는다.',
          task: '종목 가지마다 알맞은 보호 장구와 규칙 카드를 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            { prompt: '종목마다 알맞은 보호 장구·규칙 카드를 나누어요.', toolOptions: { topic: '놀이 안전', slots: ['인라인', '자전거', '트램펄린'], cards: gearCards(GEAR) }, target: { sort: GEAR }, difficulty: 0.2,
              levels: {
                easy: { prompt: '인라인과 자전거에 알맞은 카드를 나누어요(카드 4장).', toolOptions: { slots: ['인라인', '자전거'], cards: gearCards(GEAR2) }, target: { sort: GEAR2 } },
                challenge: { prompt: '종목마다 카드를 나누어요(함정 카드 두 장은 빼요).', toolOptions: { cards: [...gearCards(GEAR), '헬멧은 손에 들기', '여럿이 함께 뛰기'] } },
              } },
            SORT('장소마다 지킬 규칙 카드를 나누어요.', { topic: '어디서 놀까?', slots: ['평평한 공원', '물가', '놀이터'], groups: { '평평한 공원': ['사람 적은 곳에서 타기', '내리막 피하기'], 물가: ['어른과 함께 가기', '구명조끼 입기'], 놀이터: ['차례 지키기', '높은 곳에서 밀지 않기'] }, easy: 1, extra: { 물가: ['깊이 확인하기'] }, traps: ['찻길에서 타기'] }, 0.25, { conclude: '종목에 맞는 보호 장구를 바르게 차고, 장소에 맞는 규칙을 지켜요.' }),
            { prompt: '모둠에서 함정 카드가 왜 위험한지 하나씩 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '종목에 맞는 보호 장구를 써요.', columns: ['종목', '보호 장구'], cells: [['인라인', ''], ['자전거', '']] }] },
      }),
      X('activity.rescue-order', {
        title: '물에 빠진 사람 돕기 차례', method: '물에 빠진 사람 돕기 차례', tool: 'story', minutes: 13,
        levels: { easy: '장면 3장을 차례대로 놓는다.', base: '장면 4장(알리기 → 119 → 뜰 물건 던지기 → 떨어져 기다리기)을 놓는다.', challenge: '장면 4장에 섞인 틀린 장면(직접 뛰어들기)을 빼고 놓는다.' },
        activity: {
          title: '도움 장면 차례 놓기', tool: 'story',
          teacher: '"물에 빠진 사람을 보면 가장 먼저 무엇을 할까요?" 장면을 놓은 뒤 "사람이 빠졌어요! 도와주세요!"를 반 전체가 크게 외쳐 본다. "수영을 잘하면 들어가도 돼요"라는 학생에게 "물에 빠진 사람은 붙잡는 힘이 세서 함께 가라앉을 수 있어요. 물 밖에서 도와요"라고 말해 준다.',
          task: '물에 빠진 사람을 볼 때 할 일 장면을 차례대로 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDER('강에서 사람이 빠졌어요. 차례대로 놓아요.', ['크게 알리기', '119에 신고하기', '뜰 물건 던지기', '물에서 떨어져 기다리기'], { trap: '직접 뛰어들기', motifs: ['bird', 'house', 'wave', 'tree'] }, 0.2),
            ORDER('수영장에서 친구가 허우적거려요. 차례대로 놓아요.', ['안전요원 부르기', '주변 어른 알리기', '킥판 내밀기', '물가에서 물러서기'], { easy: [0, 2, 3], trap: '손 잡으러 들어가기', motifs: ['bird', 'house', 'wave', 'tree'] }, 0.25),
            ORDER('바닷가에서 사람이 떠밀려 가요. 차례대로 놓아요.', ['멈추고 위치 보기', '큰 소리로 알리기', '119 신고 부탁', '구조대 오면 위치 알리기'], { easy: [1, 2, 3], trap: '혼자 헤엄쳐 가기', motifs: ['wave', 'bird', 'house', 'star'] }, 0.3, { conclude: '물에 직접 들어가지 말고, 알리고 신고하고 뜰 물건을 던져요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '물에 빠진 친구를 보면 하지 말아야 할 것은?', options: ['크게 알린다', '바로 뛰어든다', '튜브를 던진다'], answer: '바로 뛰어든다' }] },
      }),
      X('activity.rescue-dilemma', {
        title: '친구가 깊은 물에서 허우적대요', method: '갈림길: 친구가 깊은 물에서 허우적거려요', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번(뛰어들지 부를지)에서 고르고 근거 한 장을 고른다.', base: '갈림 2번(뜰 물건 던지기)을 지나 근거를 고른다.', challenge: '갈림 3번(위치 알리기)까지 지나 근거를 모두 고르고 다른 길과 견준다.' },
        activity: {
          title: '갈림길: 계곡에서 친구가 빠졌어요', tool: 'dilemma',
          teacher: '"친구를 아끼는 마음과 안전한 도움은 어떻게 같이 갈 수 있을까요?" 고를 때마다 결과를 읽게 한다. "친구니까 내가 들어가야 해요"라는 학생에게 그 마음을 인정하고 "내가 빠지면 친구를 도울 사람이 줄어요. 물 밖에서 할 수 있는 도움은 무엇일까요?"라고 묻는다.',
          task: '계곡에서 친구가 빠진 상황의 갈림길마다 고르고, 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '계곡에서 빠진 친구',
            steps: [
              { text: '계곡에서 친구가 깊은 물에 빠져 허우적거려요.', motif: 'wave',
                good: ['shout', '큰 소리로 어른을 부른다', '어른들이 바로 달려와요.', [['친구', '도움이 빨리 와요', 1]]],
                bad: ['jump', '바로 뛰어들어 구하러 간다', '물살에 나도 휩쓸려요.', '직접 뛰어들면 둘 다 위험해요.', [['나와 친구', '함께 위험해요', -1]]] },
              { text: '어른이 오는 사이, 물가에 튜브와 빈 페트병이 있어요.', motif: 'tree',
                good: ['throw', '튜브를 친구 쪽으로 던진다', '친구가 튜브를 붙잡았어요.', [['친구', '물에 떠 있어요', 1]]],
                bad: ['reach', '물에 들어가 손을 뻗는다', '미끄러져 나도 빠질 뻔해요.', '물 밖에서 뜰 수 있는 물건을 던져요.', [['나', '위험해요', -1]]] },
              { text: '어른이 119에 신고하고 있어요. 나는 무엇을 할까요?', motif: 'bird',
                good: ['spot', '친구 위치를 계속 보며 알린다', '구조대가 친구를 빨리 찾았어요.', [['친구', '빨리 구조돼요', 1]]],
                bad: ['leave', '무서워서 자리를 떠난다', '친구가 어디 있는지 알기 어려워요.', '위치를 알려 주는 것도 큰 도움이에요.', [['친구', '구조가 늦어요', -1]]] },
            ],
            ending: '물 밖에서 도운 판단 덕분에 모두 무사했어요.',
            reasons: [{ id: 'call', text: '직접 뛰어들지 않고 어른과 119를 부른다' }, { id: 'float', text: '물 밖에서 뜰 물건을 던진다' }, { id: 'friend', text: '친구니까 바로 뛰어들어야 한다', why: '내가 빠지면 도울 사람이 줄어요.' }, { id: 'swim', text: '수영을 잘하면 들어가도 된다', why: '깊은 물과 물살은 수영을 잘해도 위험해요.' }],
            good: ['call', 'float'],
            talk: '모둠에서 "물에 빠진 사람을 돕는 말"을 크게 외쳐 보고 차례를 말해요.',
            conclude: '물에 빠진 사람을 보면 뛰어들지 말고 어른과 119를 부르고 뜰 물건을 던져요.',
          }),
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '물에 빠진 사람을 보면 직접 들어가지 말고 ___에 신고해요.', answer: '119' }] },
      }),
      X('activity.play-check6', {
        title: '놀이 전 보호 장구 점검표', method: '놀이 전 보호 장구 점검표', tool: 'kitchen', minutes: 14,
        levels: { easy: '점검 칸 3개를 표시한다.', base: '점검 칸 4개를 표시한다.', challenge: '점검 칸 5개를 표시하고 짝과 서로 확인한다.' },
        activity: {
          title: '놀이 전 점검하고 짝 확인', tool: 'kitchen',
          teacher: '"헬멧 끈이 헐거우면 어떻게 될까요?" 점검표를 하나씩 소리 내어 읽고 맞는 항목만 표시하게 한 뒤, 짝의 장구를 서로 확인하게 한다. "헬멧을 손에 들고 가도 돼요"에 표시한 학생에게 "넘어질 때 헬멧은 어디에 있어야 할까요?"라고 묻는다.',
          task: '놀이 전에 확인할 것만 점검표에 표시하고, 짝과 서로 확인해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            CHK('인라인 타기 전에 확인할 것만 표시해요.', '인라인 타기 전', ['헬멧 끈 조였다', '손목 보호대 찼다', '무릎 보호대 찼다', '평평한 곳인지 봤다', '짝과 서로 확인했다'], ['헬멧을 손에 들었다'], { easy: 3, base: 4 }, 0.2),
            CHK('트램펄린 놀이 전에 확인할 것만 표시해요.', '트램펄린 놀이 전', ['한 명씩 뛰기', '주머니 비우기', '가장자리 피하기', '어른이 지켜보기'], ['여럿이 함께 뛰기'], { easy: 3, base: 4 }, 0.2, { conclude: '놀기 전에 보호 장구와 장소를 점검하고, 짝과 서로 확인해요.' }),
            { prompt: '짝과 보호 장구를 서로 확인하고, 고칠 점 하나를 말해 줘요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '놀이 전에 확인할 것에 표시해요.', options: ['헬멧 끈', '손목·무릎 보호대', '평평한 장소', '짝 확인'] }] },
      }),
      X('wrap.gear-self6', {
        title: '놀이 안전 자기 점검표', method: '놀이 안전 자기 점검표', tool: 'timer', minutes: 7,
        levels: { easy: '점검 칸 2개를 표시한다.', base: '점검 칸 3개를 표시한다.', challenge: '점검 칸 4개를 표시하고 이번 주 실천을 쓴다.' },
        wrap: {
          teacher: '"이번 주말에 놀러 간다면 무엇을 지킬까요?" 점검 칸을 스스로 읽고 표시하게 한다. 출구 2번에서 "수영을 잘하면 들어간다"를 고른 학생에게 "물살이 센 곳은 어른도 위험해요. 물 밖에서 도와요"라고 말해 준다.',
          exitTicket: [
            SELF('놀이 안전 점검', ['보호 장구를 바르게 찬다', '안전한 장소에서 논다', '물가에서는 어른과 함께', '위험하면 도움을 청한다'], '놀이할 때 지킬 수 있는 것에 스스로 표시해요.'),
            { type: 'choice', prompt: '친구가 물에 빠졌어요. 수영을 잘하는 나는 어떻게 할까요?', options: ['바로 들어가 구한다', '어른을 부르고 뜰 물건을 던진다', '집에 가서 말한다'], answer: 1, difficulty: 0.15, explain: '수영을 잘해도 물 밖에서 도와요.' },
            { type: 'short', prompt: '이번 주 놀이에서 지킬 실천 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '놀이도 안전하게',
          items: [
            { type: 'check', prompt: '놀이할 때 지킬 것에 표시해요.', options: ['헬멧 끈 조이기', '보호대 차기', '물가는 어른과'] },
            { type: 'short', prompt: '물에 빠진 사람을 보면 할 일을 차례대로 써요.' },
          ],
          easy: { note: '보호 장구를 바르게 차요.', items: [{ type: 'draw', prompt: '보호 장구를 찬 내 모습을 그려요.' }] },
        },
      }),
      X('wrap.rescue-call', {
        title: '도움을 부르는 말 완성', method: '도움을 부르는 말 완성', tool: 'story', minutes: 7,
        levels: { easy: '말풍선 빈칸 1개를 채운다.', base: '말풍선 빈칸 2개를 채운다.', challenge: '빈칸 3개를 채워 위치 설명까지 넣는다.' },
        wrap: {
          teacher: '"사람이 물에 빠졌을 때 주변 어른에게 무엇을 말해야 빨리 도움이 올까요?" 말풍선 빈칸을 채운 뒤 반 전체가 큰 소리로 읽는다. 위치 칸에 아무 데나 넣은 학생에게 "구조대가 어디로 와야 할지 알 수 있을까요? 눈에 띄는 것을 말해요"라고 짚어 준다.',
          exitTicket: [
            FILLX('도움을 부르는 말풍선의 빈칸을 채워요.', '나', [['사람이 물에 빠졌어요, ___!', '도와주세요'], ['119에 ___ 주세요.', '신고해'], ['여기는 ___ 앞이에요.', '빨간 다리']], ['도와주세요', '신고해', '빨간 다리', '뛰어들어'], '도움을 불러요'),
            { type: 'choice', prompt: '119에 신고할 때 꼭 말할 것은 무엇인가요?', options: ['내가 좋아하는 놀이', '무슨 일이 어디서 생겼는지', '친구의 별명'], answer: 1, difficulty: 0.15, explain: '무슨 일이 어디서 생겼는지 말해야 빨리 와요.' },
            { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '도움을 불러요',
          items: [
            { type: 'blank', prompt: '도움을 부르는 말을 완성해요.', text: '사람이 물에 빠졌어요, ___! 119에 신고해 주세요.', answer: '도와주세요' },
            { type: 'short', prompt: '우리 학교 근처에서 위치를 알릴 때 쓸 눈에 띄는 것 하나를 써요.' },
          ],
        },
      }),
    );
  }

  // ======== 6학년 · 동생과 함께 있을 때·유인 가려내기 (별표 2 초등 생활안전 5 + 한 해 생활안전 실천 계획) ========
  {
    const X = mk('g6-sibling-plan', 6);
    const PLAN = { 집: ['문 잠그고 확인', '충전은 책상 위'], 학교: ['실험 전 보안경', '비상구 확인'], 동네: ['지킴이집 알아 두기', '외출 약속 지키기'], 온라인: ['개인정보 안 보내기', '만남 요청 거절'] };
    const PLAN2 = { 집: PLAN.집, 학교: PLAN.학교 };
    const pc = (g) => { const out = []; for (let i = 0; i < 2; i++) for (const k of Object.keys(g)) if (g[k][i]) out.push(g[k][i]); return out; };
    const YEAR = ['안전 지도 만들기', '충전기 이상 신호', '포장 뒷면 읽기', '실험 계획 세우기', '보호 장구 차기'];
    M.push(
      X('intro.lure-pick6', {
        title: '유인 장면 가려내기', method: '유인 장면 가려내기', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 조심할 장면 두 개(길 묻기·아는 척)를 짚어 주고 고르게 한다.', base: '조심할 장면 세 개를 스스로 고른다.', challenge: '네 개를 고르고 장면들의 공통점(나를 데려가려 함)을 말한다.' },
        intro: {
          teacher: '"이 말들 가운데 따라가면 안 되는 말은 무엇일까요?" 시연 단추로 길 묻기·아는 척·심부름 부탁 장면이 바구니에 담기는 모습을 보인다. "어른이 길을 물으면 따라가서 알려 줘야 예의예요"라는 말에는 "어른이 도움이 필요하면 누구에게 묻는 게 알맞을까요? 어른의 도움은 어른에게 받아요"라고 되묻는다.',
          student: '모르는 어른이 "같이 가자"라고 하면 어떻게 말할지 짝에게 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'pick', basket: '조심할 장면', cards: [{ id: 'way', text: '병원 길 같이 가 줄래?' }, { id: 'teach', text: '선생님이 줄 서자고 해요' }, { id: 'know', text: '엄마 친구야, 데리러 왔어' }, { id: 'friend', text: '친구가 같이 하교하재요' }, { id: 'errand', text: '짐 좀 차까지 들어 줄래?' }], shuffle: false }, sequence: [{ pick: ['way', 'know', 'errand'] }] },
          art: art('a paper child on a paper street stepping back from a stranger figure pointing toward a car, with a shop sign nearby', '따라가지 않아요', 'moon', 'lavender'),
        },
        notes: '실제로 겪은 일을 묻지 않는다. 장면은 모두 지은 것이다.',
      }),
      X('intro.sibling-clock', {
        title: '보호자 오는 시각과 할 일', method: '보호자 오는 시각과 할 일', tool: 'clock', minutes: 5,
        levels: { easy: '30분 단위(6시 30분)로 시계를 읽고 할 일을 말한다.', base: '10분 단위(6시 20분)로 시계를 맞추고 그 사이 할 일을 말한다.', challenge: '6시 20분을 맞춘 뒤 지금 시각부터 남은 시간을 셈하고 할 일을 차례대로 말한다.' },
        intro: {
          teacher: '"보호자는 6시 20분에 와요. 그 사이 동생과 집에 있을 때 무엇을 할까요?" 시연 단추로 시계가 6시 20분으로 맞춰지는 모습을 보이고 "문 잠그기, 보호자와 연락하기, 동생 곁에 있기"를 함께 말한다. "동생은 내가 다 책임지니 어른께 말 안 해도 돼요"라는 말에는 "동생이 다치거나 무슨 일이 생기면 누구와 함께 해결할까요?"라고 되묻는다.',
          student: '보호자가 올 때까지 동생과 집에서 할 일 한 가지를 말해 보아요.',
          demo: { tool: 'clock', options: { minuteStep: 10, showDigital: true }, sequence: [{ h: 6, m: 20 }] },
          art: art('an older paper child and a younger sibling at home looking at a paper wall clock showing twenty past six, a phone on the table', '보호자가 올 때까지', 'house', 'peach'),
        },
      }),
      X('activity.sibling-dilemma', {
        title: '동생이 밖에 나가자고 해요', method: '갈림길: 동생이 밖에 나가자고 해요', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번(나갈지 연락할지)에서 고르고 근거 한 장을 고른다.', base: '갈림 2번(초인종)을 지나 근거를 고른다.', challenge: '갈림 3번(동생이 다쳤을 때)까지 지나 근거를 모두 고르고 다른 길과 견준다.' },
        activity: {
          title: '갈림길: 보호자 없는 저녁', tool: 'dilemma',
          teacher: '"보호자가 없는 시간에 동생이 놀이터에 가자고 하면 어떻게 할까요?" 고를 때마다 결과를 읽고 동생에게 어떤 영향이 있는지 말하게 한다. "택배라면 문을 열어도 돼요"라는 학생에게 "문밖의 사람이 누구인지 어떻게 확인할 수 있을까요? 보호자가 없으면 문을 열지 않아요"라고 말해 준다. 동생 일도 숨기지 말고 어른께 알린다는 점을 짚는다.',
          task: '동생과 집에 있는 상황의 갈림길마다 고르고, 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '보호자 없는 저녁',
            steps: [
              { text: '보호자는 6시 20분에 와요. 동생이 지금 놀이터에 나가 놀자고 해요.', motif: 'house',
                good: ['call', '보호자에게 전화해 묻는다', '보호자가 오시면 같이 가자고 해요.', [['동생', '안전하게 기다려요', 1]]],
                bad: ['go', '동생과 말없이 나간다', '보호자가 와서 우리를 찾느라 걱정해요.', '보호자 없는 시간의 외출은 먼저 허락을 받아요.', [['보호자', '크게 걱정해요', -1]]] },
              { text: '집에서 기다리는데 누가 초인종을 누르며 "택배 왔어요" 해요.', motif: 'moon',
                good: ['nodoor', '문을 열지 않고 보호자에게 알린다', '보호자가 문 앞에 두라고 전해요.', [['나와 동생', '안전해요', 1]]],
                bad: ['open', '문을 열어 준다', '모르는 사람이 문 앞에 서 있어요.', '보호자가 없을 때는 문을 열지 않아요.', [['나와 동생', '위험할 수 있어요', -1]]] },
              { text: '동생이 넘어져 무릎에서 피가 조금 나요.', motif: 'star',
                good: ['tell', '보호자에게 알리고 말씀대로 한다', '보호자 말씀대로 깨끗이 돌봤어요.', [['동생', '제대로 돌봄을 받아요', 1]]],
                bad: ['hide', '혼날까 봐 숨긴다', '상처를 제때 돌보지 못해요.', '동생 일도 어른에게 꼭 알려요.', [['동생', '더 아파요', -1]]] },
            ],
            ending: '연락하고 알린 판단 덕분에 동생과 함께 안전하게 기다렸어요.',
            reasons: [{ id: 'ask', text: '보호자 없는 시간에는 먼저 연락해 묻는다' }, { id: 'share', text: '동생의 안전도 어른과 함께 지킨다' }, { id: 'alone', text: '동생은 내가 다 책임진다', why: '혼자 다 하지 않고 어른과 함께해요.' }, { id: 'short', text: '잠깐이면 괜찮다', why: '잠깐 사이에도 일이 생길 수 있어요.' }],
            good: ['ask', 'share'],
            talk: '모둠에서 "보호자가 없을 때 동생과 정할 약속"을 하나씩 말해요.',
            conclude: '보호자 없는 시간에는 문을 열지 않고, 먼저 연락하고, 동생 일도 알려요.',
          }),
        },
        worksheet: { items: [{ type: 'choice', prompt: '보호자가 없을 때 누가 초인종을 눌러요. 어떻게 할까요?', options: ['바로 문을 연다', '열지 않고 보호자에게 알린다', '동생이 열게 한다'], answer: '열지 않고 보호자에게 알린다' }] },
      }),
      X('activity.lure-sort6', {
        title: '유인 수법 나누기', method: '유인 수법 나누기', tool: 'mindmap', minutes: 13,
        levels: { easy: '말 카드 3장을 길 묻기·아는 척·심부름 가지에 나눈다.', base: '말 카드 6장을 나눈다.', challenge: '말 카드 8장을 나누고 수법마다 안전한 대답을 잇는다.' },
        activity: {
          title: '유인하는 말 나누고 대답 잇기', tool: 'mindmap',
          teacher: '"이 말들은 어떤 방법으로 나를 데려가려 할까요?" 카드를 가지에 나눈 뒤 수법마다 안전한 대답을 큰 소리로 연습한다. "아빠가 다쳤다는 말은 급하니 따라가야 해요"라는 학생에게 "정말인지 누구에게 먼저 확인할 수 있을까요? 보호자에게 직접 전화해요"라고 말해 준다.',
          task: '유인하는 말 카드를 수법별로 나누고, 안전한 대답을 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORT('유인하는 말 카드를 수법별로 나누어요.', { topic: '이런 말 조심', slots: ['길 묻기', '아는 척', '심부름'], groups: { '길 묻기': ['병원 가는 길 같이 가자', '차에 타서 길 알려 줘'], '아는 척': ['엄마 친구야, 같이 가자', '네 이름 알아, 따라와'], 심부름: ['짐 좀 차까지 들어 줘', '강아지 찾는 것 도와줘'] }, easy: 1, extra: { '길 묻기': ['지도 보여 줄게 이리 와'], '아는 척': ['아빠가 다쳐서 데리러 왔어'] } }, 0.25),
            { prompt: '유인하는 말마다 안전한 대답 카드를 이어요.', toolOptions: { mode: 'match', topic: '안전한 대답', slots: [{ id: 'way', label: '병원 가는 길 같이 가자' }, { id: 'know', label: '엄마 친구야, 같이 가자' }, { id: 'errand', label: '짐 좀 차까지 들어 줘' }], cards: ['다른 어른께 부탁하세요', '어른께 길을 물어보세요', '보호자에게 먼저 전화할게요'] }, target: { match: { way: '어른께 길을 물어보세요', know: '보호자에게 먼저 전화할게요', errand: '다른 어른께 부탁하세요' } }, difficulty: 0.3,
              levels: { challenge: { prompt: '유인하는 말마다 안전한 대답 카드를 이어요(함정 카드 하나는 빼요).', toolOptions: { cards: ['다른 어른께 부탁하세요', '어른께 길을 물어보세요', '네, 따라갈게요', '보호자에게 먼저 전화할게요'] } } }, conclude: '어른의 도움은 어른에게, 모르는 사람을 따라가지 않고 보호자에게 먼저 확인해요.' },
            { prompt: '짝과 한 사람은 유인하는 말, 한 사람은 안전한 대답을 번갈아 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '모르는 어른이 "엄마 친구야, 같이 가자"라고 할 때 할 대답을 써요.' }] },
      }),
      X('activity.plan-table', {
        title: '장소별 생활안전 실천 계획표', method: '장소별 생활안전 실천 계획표', tool: 'kitchen', minutes: 14,
        levels: { easy: '칸 2개(집·학교)에 실천 카드 4장을 놓는다.', base: '칸 4개(집·학교·동네·온라인)에 실천 카드 8장을 놓는다.', challenge: '칸 4개에 카드를 놓고, 이번 달 점검 날짜를 정해 짝에게 말한다.' },
        activity: {
          title: '장소별 이번 달 실천 계획', tool: 'kitchen',
          teacher: '"올해 배운 생활안전 가운데 이번 달에 꼭 지킬 것을 장소별로 놓아 볼까요?" 카드를 놓을 때마다 그 실천을 배운 차시를 떠올리게 한다. 한 칸에 카드를 몰아 놓은 학생에게 "온라인에서 지킬 약속은 무엇이 있었나요?"라고 묻는다. 계획은 점검 날짜가 있어야 지켜진다는 점을 짚는다.',
          task: '집·학교·동네·온라인 칸에 이번 달 실천 카드를 놓아 계획표를 완성해요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            { prompt: '장소 칸마다 이번 달 실천 카드를 놓아요.', toolOptions: { slots: ['집', '학교', '동네', '온라인'], cards: pc(PLAN) }, target: { sort: PLAN }, difficulty: 0.2,
              levels: { easy: { prompt: '집과 학교 칸에 실천 카드를 놓아요(카드 4장).', toolOptions: { slots: ['집', '학교'], cards: pc(PLAN2) }, target: { sort: PLAN2 } } } },
            SORT('여름 방학에 지킬 실천 카드를 장소 칸에 놓아요.', { slots: ['집', '물가·캠핑', '동네'], groups: { 집: ['보호자 없을 때 문 안 열기', '세제 섞지 않기'], '물가·캠핑': ['천둥 땐 건물로', '뛰어들지 않고 알리기'], 동네: ['어두운 골목 피하기', '모르는 사람 안 따라가기'] }, easy: 1, extra: { 집: ['남은 음식 빨리 냉장'], '물가·캠핑': ['구명조끼 입기'] } }, 0.25, { conclude: '장소마다 지킬 실천을 정하고, 점검할 날짜를 함께 정해요.' }),
            { prompt: '짝에게 계획을 점검할 날짜(예: 매주 금요일)를 정해 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '이번 달 실천 계획표를 써요.', columns: ['장소', '실천', '점검 날짜'], cells: [['집', '', ''], ['학교', '', ''], ['동네', '', ''], ['온라인', '', '']] }] },
      }),
      X('activity.plan-write', {
        title: '나의 생활안전 다짐 글', method: '나의 생활안전 다짐 글', tool: 'rubric-writing', minutes: 14,
        levels: { easy: '기준 2개로 점검하고 문장 틀을 써도 된다.', base: '기준 3개(구체적인가·지킬 수 있나·점검 방법)로 점검한다.', challenge: '기준 3개로 점검한 뒤 한 군데를 고쳐 쓰고 꼭 넣을 낱말을 넣는다.' },
        activity: {
          title: '한 해를 돌아보는 다짐 글', tool: 'rubric-writing',
          teacher: '"올해 생활안전 시간을 돌아보면 가장 기억에 남는 약속은 무엇인가요?" 기준표를 함께 읽고 다짐 글을 쓴 뒤 스스로 점검하게 한다. "늘 조심하겠다"처럼 막연하게 쓴 학생에게 "언제, 어디서, 무엇을 할지 써야 지킬 수 있어요. 어떻게 점검할까요?"라고 묻는다.',
          task: '한 해 생활안전을 돌아보며 실천 다짐 글을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RUB('나의 생활안전 다짐 글을 두세 문장으로 쓰고 점검해요.', { topic: '한 해를 돌아보는 나의 생활안전 다짐', title: '생활안전 다짐', starter: '나는 ~할 때 ~하겠다. 그리고 ~', crit: ['구체적인 행동을 썼다', '지킬 수 있는 다짐이다', '점검 방법을 썼다'], must: [['점검', '확인', '표시']], chars: [30, 200] }, 0.25),
            RUB('동생에게 알려 줄 생활안전 약속을 두세 문장으로 써요.', { topic: '동생에게 알려 줄 생활안전 약속', title: '동생에게 주는 약속', starter: '혼자 있을 때는 ~해. 모르는 사람이 ~', crit: ['동생이 알아듣기 쉽다', '할 일을 분명히 썼다', '어른께 알리는 말을 넣었다'], must: [['보호자', '어른', '선생님']], chars: [30, 200] }, 0.3),
            { prompt: '모둠에서 서로의 다짐 글을 읽고 가장 지키기 좋은 다짐을 골라 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '나의 생활안전 다짐을 한 문장으로 써요.' }] },
      }),
      X('wrap.sibling-self', {
        title: '보호자 없는 시간 점검표', method: '보호자 없는 시간 자기 점검표', tool: 'timer', minutes: 7,
        levels: { easy: '점검 칸 2개(문 잠금·연락)를 표시한다.', base: '점검 칸 3개(+ 동생 돌봄)를 표시한다.', challenge: '점검 칸 4개를 표시한다.' },
        wrap: {
          teacher: '"보호자가 없는 시간에 내가 할 수 있는 것은 무엇인가요?" 점검 칸을 스스로 읽고 표시하게 한다. 출구 2번에서 "아는 척하면 따라간다"를 고른 학생에게 "정말 아는 사람인지 보호자에게 먼저 확인해요"라고 말해 준다.',
          exitTicket: [
            SELF('보호자 없는 시간 점검', ['문을 잠그고 확인한다', '보호자와 연락한다', '동생 곁을 지킨다', '모르는 사람에게 문을 열지 않는다'], '보호자 없는 시간에 할 수 있는 것에 스스로 표시해요.'),
            { type: 'choice', prompt: '모르는 어른이 "엄마가 보냈어, 같이 가자"라고 해요. 어떻게 할까요?', options: ['따라간다', '보호자에게 먼저 전화해 확인한다', '동생만 보낸다'], answer: 1, difficulty: 0.15, explain: '따라가지 않고 보호자에게 직접 확인해요.' },
            { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '동생과 함께 안전하게',
          items: [
            { type: 'check', prompt: '보호자 없는 시간에 지킬 것에 표시해요.', options: ['문 잠그기', '보호자와 연락하기', '동생 곁에 있기'] },
            { type: 'short', prompt: '동생과 함께 정할 약속 하나를 써요.' },
          ],
          easy: { note: '문 잠그기, 연락하기, 동생 곁에 있기를 떠올려요.', items: [{ type: 'draw', prompt: '동생과 안전하게 기다리는 모습을 그려요.' }] },
        },
      }),
      X('wrap.year-story', {
        title: '한 해 생활안전 이야기', method: '한 해 생활안전 이야기', tool: 'story', minutes: 7,
        levels: { easy: '장면 카드 3장을 배운 차례대로 놓는다.', base: '장면 카드 4장을 놓는다.', challenge: '장면 카드 5장을 놓고 가장 지키고 싶은 약속을 말한다.' },
        wrap: {
          teacher: '"올해 6학년 생활안전 시간에 무엇을 배웠는지 이야기로 이어 볼까요?" 장면 카드를 배운 차례대로 놓은 뒤 한 사람씩 가장 지키고 싶은 약속을 말하게 한다. 차례가 헷갈리는 학생에게 "처음에 우리 동네 지도를 만들었죠. 그다음은 무엇이었나요?"라고 함께 되짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'story', options: { slots: 4, cards: [YEAR[2], YEAR[0], YEAR[3], YEAR[1]], title: '6학년 생활안전 이야기' }, prompt: '올해 배운 생활안전 장면을 배운 차례대로 놓아요.', target: { order: YEAR.slice(0, 4) }, difficulty: 0.2,
              levels: {
                easy: { prompt: '올해 배운 생활안전 장면을 배운 차례대로 놓아요(장면 셋).', toolOptions: { slots: 3, cards: [YEAR[2], YEAR[0], YEAR[1]] }, target: { order: YEAR.slice(0, 3) } },
                challenge: { prompt: '올해 배운 생활안전 장면을 배운 차례대로 놓아요(장면 다섯).', toolOptions: { slots: 5, cards: [YEAR[4], YEAR[2], YEAR[0], YEAR[3], YEAR[1]] }, target: { order: YEAR } },
              } },
            { type: 'short', prompt: '올해 배운 것 가운데 가장 지키고 싶은 약속 하나를 써요.' },
            { type: 'mood', prompt: '한 해 생활안전 공부를 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '한 해 생활안전 돌아보기',
          items: [
            { type: 'short', prompt: '올해 생활안전 시간에 가장 기억에 남는 장면을 써요.' },
            { type: 'draw', prompt: '가장 지키고 싶은 약속을 지키는 내 모습을 그려요.' },
          ],
        },
      }),
    );
  }

  PaperLessons.registerModules(M);
})();
