/* 창체 안전교육 교통안전 — 초5-6 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/safety-a.json 의 saf-traffic 초5-6.
 * 근거: 「학교안전교육 실시 기준 등에 관한 고시」(교육부고시 제2023-33호) 별표 2 초등학교 교통안전(안전한 통학로 알기 /
 *       교통수단(자전거, 대중교통 등)의 안전한 이용법 알기 / 교통 표지판 등 도로 교통 법규 알기),
 *       교육부 학교 안전교육 7대 표준안 교통안전 소분류(보행자·자전거·오토바이·자동차·대중교통) — sources/changche/research-safety.md.
 * 초5-6 기준: 원인과 결과 잇기, 자기 점검표, 작은 실천 계획, 간단한 자료(그래프) 읽기, 모둠 토의, 갈림길 상황(dilemma)·기준표 글쓰기(rubric-writing).
 *   법 조문 번호·형량·성인 상황은 쓰지 않는다. 그래프 수치·조사 자료는 모두 가상(화면에 '가상'이라고 적는다). 장면·인물은 직접 지은 것이다(가명 한두 글자).
 *   거리·초·속도 같은 수치는 근거에 없으므로 쓰지 않는다(체험 기록은 우리 반이 잰 값, 그래프는 가상).
 * 주제 10개(5학년 5 · 6학년 5) — 계획 모듈 88개 전부. 추천 조합은 체계도 sequences(학년마다 11차시).
 *
 * 사람 확인: 근거 파일에는 고시 항목 제목뿐이라 아래 일반 교통안전 수칙은 공식 안내처에서 문구를 확인해야 한다.
 *   - causes.activity.choose: "초록불이 깜박이면 새로 건너기 시작하지 않고 다음 신호를 기다린다", "우산이 앞을 가리면 들어 올려 좌우를 살핀다" — 도로교통공단 어린이 보행안전 안내
 *   - causes.intro.case·wrap.self: "어두운 날·비 오는 날 밝은 옷을 입으면 운전자가 잘 본다" — 도로교통공단
 *   - causes.activity.sort: 원인 카드(브레이크 고장·닳은 바퀴·멈춤 선 넘기 등)를 사람·차·환경으로 나누는 틀 — 7대 표준안 교통 자동차[원인] 지도 자료로 확인
 *   - stopping.intro.scene·activity.rules·wrap.self: "차가 완전히 선 뒤에 건넌다", "건너기 전 운전자와 눈을 맞춘다", "비 오는 날은 더 기다린다" — 도로교통공단 어린이 보행안전 안내
 *   - stopping.activity.parts·line·road: "차는 알아채는 동안·브레이크를 밟은 뒤에도 더 나아가며, 빠를수록·젖은 길일수록 더 멀리 간다"(정지거리 경향, 수치 없음) — 도로교통공단
 *   - blindspot.intro.seat·intro.guess·activity.zone·activity.sort: "큰 차 바로 앞·옆·뒤는 운전석에서 보이지 않는 사각지대다" — 도로교통공단·한국교통안전공단 대형차 사각지대 안내
 *   - blindspot.activity.turn·wrap.self: "큰 차가 돌 때 뒷바퀴가 앞바퀴보다 안쪽으로 지나간다(내륜차), 모퉁이에서 물러선다" — 도로교통공단
 *   - blindspot.activity.choose·wrap.poster: "버스에서 내리면 버스 앞뒤로 건너지 않고 떠난 뒤 횡단보도로 건넌다", "후진하는 차와 거리를 둔다" — 도로교통공단
 *   - bikerisk.activity.spots·cause·wrap.tell: "주차된 차 옆은 거리를 두고 천천히 지난다(차 문 열림)", "교차로 앞에서 속도를 줄이고 좌우를 살핀다", "내리막에서는 미리 속도를 줄인다" — 도로교통공단 자전거 안전 안내
 *   - bikerisk.activity.downhill: "횡단보도에서는 자전거에서 내려 끌고 건넌다" — 도로교통공단
 *   - bikerisk.activity.check·wrap.plan: 타기 전 점검 항목(브레이크·바퀴 바람·전조등·벨·안전모 끈·바지 끝 체인) — 도로교통공단·한국소비자원 자전거 점검 안내
 *   - bikerisk.intro.helmet: "안전모는 이마를 덮고 끈을 조여 쓴다", 손목·팔꿈치·무릎 보호대 — 도로교통공단
 *   - routeaudit.intro.base·activity.pins·wrap.self: "통학로 조사는 교사·보호자와 함께 보도 안쪽에서만 한다(학생끼리 찻길 조사 금지)" — 학교 현장체험·교외 활동 안전 지침(교육부·시도교육청)으로 확인
 *   - routeaudit.activity.pins·check: 위험 지점 유형(보도 끊김·불법 주차로 시야 가림·신호 없는 횡단보도·어두운 가로등·모퉁이 시야) — 도로교통공단 어린이 통학로 안전 점검 자료
 *   - routeaudit.activity.cause: 해결 주체 나누기(신호등 설치·주차 단속은 지역, 안전 지도 게시는 학교) — 지자체·경찰의 어린이 보호구역 개선 안내(국민재난안전포털·도로교통공단)
 *   - pm.intro.kinds·activity.cause·activity.choose·wrap.self: "전동 킥보드 같은 개인형 이동장치는 면허가 필요한 탈것이라 초등학생은 탈 수 없다", "한 대에 두 사람이 타지 않는다", 전기 자전거·전동 휠을 '전기로 가는 탈것'으로 묶은 분류 — 도로교통공단·경찰청 개인형 이동장치 안내(나이·면허 종류는 일부러 쓰지 않음)
 *   - pm.activity.gear: 안전모(머리)·손목 보호대·무릎 보호대·팔꿈치 보호대 짝 — 도로교통공단
 *   - pm.activity.place: "어린이 킥보드·인라인은 찻길·붐비는 보도가 아닌 공원 광장 같은 곳에서, 공원 내리막에서는 내려서 걷는다" — 도로교통공단·한국소비자원 어린이 승용 완구 안전 안내
 *   - distraction.activity.chain·choose·spots·wrap.self: "걸을 때 휴대전화는 넣고, 메시지는 보도 안쪽에 멈춰 서서 확인한다", "횡단보도·골목 끝·주차장 입구에서는 휴대전화를 보지 않는다" — 도로교통공단 보행 안전 안내
 *   - distraction.activity.chain·wrap.self: "이어폰을 끼면 자전거 종·경적 같은 소리를 늦게 듣는다, 건너기 전 이어폰을 뺀다" — 도로교통공단
 *   - distraction.intro.view: "화면을 보면 보는 범위가 좁아진다" — 도로교통공단(주의 분산 보행 자료)
 *   - transit.intro.why·wrap.self: "승강장 안전선 뒤에서 기다리기, 서 있을 때 손잡이 잡기, 문에 기대지 않기, 닫히는 문에 손·가방 넣지 않기" — 한국교통안전공단·도시철도 운영기관 안전 안내
 *   - transit.intro.brake·activity.case: "급정거 때 몸이 앞으로 쏠리므로 손잡이를 잡고 발을 벌려 선다" — 한국교통안전공단
 *   - transit.activity.emergency·wrap.tell: "열차가 멈추면 안내 방송을 듣고, 이상하면 비상 인터폰으로 직원에게 알리며, 안내 없이 문을 열거나 뛰지 않는다, 불·연기는 119" — 국민재난안전포털(지하철 화재 행동요령)·도시철도 운영기관
 *   - transit.activity.exit: "비상 때는 승강기가 아니라 계단을 쓰고 비상구 표시를 따른다" — 국민재난안전포털·소방청
 *   - afteraccident.intro.order·activity.call·wrap.rule·wrap.card: "사고를 보면 먼저 안전한 곳(보도 안쪽)으로 피하고 어른께 알린 뒤 신고한다", "다친 사람이 있으면 119, 교통사고를 알릴 때는 112" — 소방청·경찰청(112) 신고 안내, 국민재난안전포털
 *   - afteraccident.activity.call·activity.where: "신고할 때 어디인지(가까운 건물·교차로 이름·방위)·무슨 일인지·다친 사람을 차례로 말한다" — 소방청 119 신고 요령
 *   - afteraccident.activity.choose·activity.check: "차와 살짝 부딪쳐 괜찮아 보여도 어른께 알리고 진료로 확인한다", "어린이는 혼자 처리하지 않고 어른이 운전자를 만난다" — 도로교통공단 어린이 교통사고 대처 안내
 *   - campaign.activity.plan: "여유 있게 일찍 나가면 서두르지 않고 멈추고 살필 수 있다"(시각 8:40·20분·2:30 은 연습용 우리 반 약속) — 도로교통공단 어린이 보행안전 안내
 *   - campaign.activity.where·activity.choose: "캠페인은 찻길·횡단보도·주차장이 아닌 학교 안 안전한 자리에서, 문구판을 보도에 두지 않는다" — 학교 안전 담당 교사·도로교통공단 교통안전 캠페인 안내
 *   - campaign.activity.script·activity.slogan: 구호 "멈추고 살피고"와 "차는 바로 서지 못해요" 문구 — 도로교통공단 어린이 보행 3원칙 안내 문구와 대조
 *   - campaign.intro.self·intro.data: 습관 점검 항목(안전모·탈것은 정한 곳·버스 손잡이) — 도로교통공단·한국교통안전공단 안내; 그래프 수치는 가상
 */
(function () {
  const M = [];
  const mk = (topic, grade) => (suffix, o) => Object.assign({
    id: `saf-traffic.e56.${topic}.${suffix}`, schema: 'edu-module.v1', type: suffix.split('.')[0],
    domain: 'saf-traffic', band: '초5-6', topic: `saf-traffic.e56.${topic}`, grades: [grade],
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
  // 가지(칸)마다 알맞은 카드 한 장 잇기(mindmap·emotion match): pairs = [[가지 이름, 카드]…3], trap = 도전에 끼우는 함정 카드
  const MATCH = (prompt, topic, pairs, trap, d, more) => {
    const sl = pairs.map(([label], i) => ({ id: `b${i + 1}`, label }));
    const tg = (n) => ({ match: Object.fromEntries(pairs.slice(0, n).map(([, c], i) => [`b${i + 1}`, c])) });
    const cards = (n) => pairs.slice(0, n).map(([, c]) => c).reverse();
    return Object.assign({
      prompt, toolOptions: Object.assign(topic ? { topic } : {}, { mode: 'match', slots: sl, cards: cards(3) }), target: tg(3), difficulty: d,
      levels: { easy: { prompt: `${cut(prompt)}(가지 2개).`, toolOptions: { slots: sl.slice(0, 2), cards: cards(2) }, target: tg(2) }, challenge: { prompt: `${cut(prompt)}(함정 카드 하나는 빼요).`, toolOptions: { cards: [...cards(3), trap] } } },
    }, more);
  };
  // 카드 판 문항을 정리 출구 질문으로(SORT·ORDER·MATCH 결과 → { type:'tool' })
  const AS_EXIT = (tool, q) => ({ type: 'tool', tool, options: q.toolOptions, prompt: q.prompt, target: q.target, difficulty: q.difficulty, levels: q.levels });

  // ======== 5학년 · 교통사고는 왜 날까 (별표 2 초등 교통안전 "교통 표지판 등 도로 교통 법규 알기" + 표준안 자동차[원인]) ========
  {
    const X = mk('causes', 5);
    // 가상 동네 칸 지도: 사고 지점 넷(가~라)과 둘레 칸
    const TOWN = [
      { name: '사고 지점 가', icon: 'dot', at: [1, 0], legend: '사고 지점' }, { name: '골목 끝', icon: 'house', at: [0, 0] },
      { name: '사고 지점 나', icon: 'dot', at: [3, 1], legend: '사고 지점' }, { name: '주차된 차 줄', icon: 'bus', at: [4, 1] },
      { name: '사고 지점 다', icon: 'dot', at: [2, 3], legend: '사고 지점' }, { name: '신호 없는 횡단보도', icon: 'dot', at: [1, 3] },
      { name: '사고 지점 라', icon: 'dot', at: [5, 3], legend: '사고 지점' }, { name: '학교', icon: 'school', at: [5, 0] },
    ];
    const CAUSE = [['사람 원인', 12], ['차 원인', 4], ['환경 원인', 6]];
    M.push(
      X('intro.case', {
        title: '사고 장면 앞뒤 잇기', method: '사고 장면 앞뒤 잇기', tool: 'story', minutes: 5,
        levels: { easy: '교사가 장면 3장(비 오는 저녁·어두운 옷·뛰어나감)만 짚으며 시연을 보고 겹친 것을 말한다.', base: '장면 5장이 차례로 놓이는 시연을 보고 무엇이 겹쳤는지 짝과 말한다.', challenge: '장면 하나(어두운 옷 → 밝은 옷)를 바꾸면 결과가 어떻게 달라질지 짝과 말한다.' },
        intro: {
          teacher: '"이 사고는 한 가지 때문에 났을까요?" 시연 단추로 비 오는 저녁 → 어두운 옷 → 주차된 차 사이 → 뛰어나감 → 운전자가 늦게 봄 장면이 차례로 놓이는 모습을 보인다. "운이 나빠서 그래요"라는 말이 나오면 "이 가운데 하나만 달랐다면 어땠을까요?"라고 되물어 여러 원인이 겹쳤다는 점을 짚는다. 오늘은 사고의 원인을 사람·차·환경으로 나누어 본다고 밝힌다.',
          student: '장면 가운데 하나만 바뀌었다면 사고를 막을 수 있었을지 짝과 말해 보아요.',
          demo: { tool: 'story', options: { mode: 'order', slots: 5, title: '비 오는 저녁의 사고(지어낸 이야기)', cards: [{ id: 'rain', text: '비 오는 저녁', motif: 'cloud' }, { id: 'dark', text: '어두운 옷', motif: 'moon' }, { id: 'park', text: '주차된 차 사이', motif: 'house' }, { id: 'run', text: '뛰어나가요', motif: 'star' }, { id: 'late', text: '운전자가 늦게 봐요', motif: 'sun' }], shuffle: false }, sequence: [{ order: ['rain', 'dark', 'park', 'run', 'late'] }] },
          art: art('a rainy evening paper street with parked paper cars, a child in a dark raincoat stepping out between them and a car with headlights', '무엇이 겹쳤을까?', 'cloud', 'sky'),
        },
        notes: '이야기는 지어낸 사례다. 학생에게 자기나 가족이 다친 일을 말하게 하지 않는다.',
      }),
      X('intro.map', {
        title: '사고가 난 곳 지도 읽기', method: '사고가 난 곳 지도 읽기', tool: 'map', minutes: 5,
        levels: { easy: '교사가 사고 지점 2곳(가·나)의 둘레 칸만 짚어 주고 공통점을 함께 찾는다.', base: '사고 지점 4곳의 둘레 칸을 읽고 공통점을 찾는다.', challenge: '공통점이 덜 보이는 지점(라)의 둘레를 보고 까닭을 짐작해 말한다.' },
        intro: {
          teacher: '"이 지도는 꾸민 동네예요. 사고 지점 둘레에는 무엇이 있나요?" 시연 단추로 핀이 사고 지점 가 → 나 → 다 → 라로 옮겨 가는 모습을 보이고, 지점마다 옆 칸(골목 끝·주차된 차 줄·신호 없는 횡단보도)을 소리 내어 읽게 한다. "사고는 아무 데서나 나요"라는 말에는 "지점 둘레에 무엇이 자주 있나요? 앞이 가려지는 곳이 많지 않나요?"라고 되묻는다.',
          student: '사고 지점 둘레 칸에서 앞이 가려지는 곳을 찾아 짝에게 말해 보아요.',
          demo: { tool: 'map', options: { grid: [6, 4], places: TOWN, title: '가상의 우리 동네', legend: false }, sequence: [{ pin: [1, 0] }, { pin: [3, 1] }, { pin: [2, 3] }, { pin: [5, 3] }] },
          art: art('a paper town map seen from above with small red paper pins next to an alley corner, a row of parked cars and a crosswalk without lights', '사고가 난 곳에는 무엇이?', 'house', 'peach'),
        },
        notes: '지도는 가상의 동네다. 실제 사고 통계처럼 말하지 않는다.',
      }),
      X('activity.sort', {
        title: '원인 세 갈래로 나누기', method: '원인 세 갈래로 나누기', tool: 'mindmap', minutes: 15,
        levels: { easy: '원인 카드 6장(갈래마다 2장)을 사람·차·환경 가지에 나누고, 놓자마자 맞는지 보인다.', base: '원인 카드 9장을 세 가지에 나눈다.', challenge: '카드 11장(함정 카드 1장)을 나누고, 두 갈래에 다 걸칠 만한 카드를 모둠에서 골라 까닭을 말한다.' },
        activity: {
          title: '교통사고 원인 세 갈래 나누기', tool: 'mindmap',
          teacher: '"\'브레이크 고장\'은 사람·차·환경 가운데 어디일까요?" 카드를 놓을 때마다 "그 원인이 있으면 어떤 결과가 생길까요?"라고 묻는다. "사고는 늘 운전자 잘못이에요"라는 학생에게 "차 사이로 뛰어나온 사람, 어두운 가로등은요?"라고 되물어 원인이 여러 갈래라는 점을 짚는다. 도전에서는 \'비 오는 날 서두르기\'처럼 두 갈래에 걸칠 만한 카드를 말로 견주게 한다.',
          task: '교통사고 원인 카드를 사람·차·환경 가지에 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORT('사고 원인 카드를 세 가지에 나누어요.', { topic: '교통사고 원인', slots: ['사람', '차', '환경'], groups: { 사람: ['차 사이로 뛰어나와요', '휴대전화 보며 걸어요', '신호를 안 지켜요'], 차: ['브레이크 고장', '너무 빨리 달려요', '전조등이 꺼졌어요'], 환경: ['비에 젖은 길', '어두운 가로등', '시야를 가린 간판'] }, extra: { 사람: ['어두운 옷을 입었어요'], 환경: ['눈이 쌓인 길'] }, traps: ['운이 나빴어요'] }, 0.25),
            SORT('등굣길 사례의 원인 카드를 나누어요.', { topic: '등굣길 사고 원인', slots: ['사람', '차', '환경'], groups: { 사람: ['늦어서 뛰어요', '이어폰을 끼었어요', '친구와 장난쳐요'], 차: ['멈춤 선을 넘었어요', '닳은 바퀴', '깜빡이를 안 켰어요'], 환경: ['보도가 끊겼어요', '안개 낀 아침', '불법 주차 차량'] }, extra: { 차: ['고장 난 와이퍼'], 환경: ['꺼진 신호등'] }, traps: ['날씨가 좋아요'] }, 0.3, { conclude: '사고는 사람·차·환경 원인이 겹쳐서 나요. 원인을 알면 막을 수 있어요.' }),
            { prompt: '모둠에서 두 갈래에 다 걸칠 만한 카드를 하나 골라 까닭을 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '원인을 하나씩 써요.', columns: ['사람 원인', '차 원인', '환경 원인'], cells: [['', '', '']] }] },
        notes: '카드 한 장은 한 가지에만 놓인다. 두 갈래에 걸치는 카드는 셋째 문항에서 말로 다룬다.',
      }),
      X('activity.chain', {
        title: '원인→결과 사슬 잇기', method: '원인→결과 사슬 잇기', tool: 'timeline', minutes: 14,
        levels: { easy: '사건 카드 3장을 먼저→나중 차례로 놓는다.', base: '사건 카드 5장을 차례로 놓는다.', challenge: '카드 5장 사이에 섞인 틀린 장면을 빼고 놓은 뒤, 사슬을 끊는 행동 카드를 고른다.' },
        activity: {
          title: '사건 카드로 원인→결과 사슬 잇기', tool: 'timeline',
          teacher: '"휴대전화를 본 것이 어떻게 부딪칠 뻔한 일까지 이어졌을까요?" 카드를 놓은 뒤 앞 카드가 뒤 카드의 원인이 되는지 "그래서"를 넣어 소리 내어 읽게 한다. "부딪칠 뻔한 건 차가 빨리 와서예요"라는 학생에게 "그 앞에서 무엇이 먼저 있었나요?"라고 되물어 사슬의 앞쪽을 보게 한다. 셋째 문항에서는 어느 자리에서 끊으면 사고까지 가지 않는지 고르게 한다.',
          task: '사건 카드를 먼저 일어난 차례대로 시간 띠에 놓고, 사슬을 끊을 행동을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDER('휴대전화를 보며 건너다 생긴 일을 차례대로 놓아요.', ['휴대전화를 봐요', '신호를 놓쳐요', '고개 숙인 채 건너요', '차를 늦게 봐요', '부딪칠 뻔해요'], { easy: [0, 3, 4], trap: '좌우를 살펴요' }, 0.2),
            ORDER('비 오는 날 서두르다 생긴 일을 차례대로 놓아요.', ['늦게 일어나요', '우산 쓰고 뛰어요', '우산이 앞을 가려요', '차를 못 봐요', '미끄러질 뻔해요'], { easy: [0, 1, 4], trap: '천천히 걸어요' }, 0.25),
            { prompt: '휴대전화 사슬을 끊을 수 있는 행동만 골라 담아요.', toolOptions: { mode: 'pick', basket: '사슬을 끊는 행동', cards: ['건너기 전 휴대전화 넣기', '신호 보고 기다리기', '더 빨리 뛰어 건너기', '좌우 살피며 건너기', '고개 숙인 채 걷기'] }, target: { pick: ['건너기 전 휴대전화 넣기', '신호 보고 기다리기', '좌우 살피며 건너기'] }, difficulty: 0.25, conclude: '사슬의 앞쪽에서 한 가지만 바꿔도 사고까지 가지 않아요.' },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '휴대전화를 보며 걸으면 차를 ___ 보게 돼요.', answer: '늦게' }] },
      }),
      X('activity.choose', {
        title: '그 순간 어떻게 할까', method: '그 순간 어떻게 할까', tool: 'dilemma', minutes: 15,
        levels: { easy: '갈림길 1번(우산을 든 채 건널지 살필지)에서 고르고 근거 한 장을 고른다.', base: '갈림길 2번(초록불이 깜박여요)을 지나 근거를 고른다.', challenge: '갈림길 3번까지 지나 근거를 모두 고르고, 다른 선택의 결과까지 끝까지 따라가 견준다.' },
        activity: {
          title: '갈림길: 비 오는 아침에 서둘러요', tool: 'dilemma',
          teacher: '"늦었을 때 서두르면 무엇이 달라질까요?" 고를 때마다 결과 칸을 소리 내어 읽게 한다. "늦으면 뛰어도 돼요"라는 학생에게 "뛰면 우산 밑으로 차가 잘 보일까요? 몇 분 늦는 것과 다치는 것 가운데 무엇이 더 클까요?"라고 묻는다. 초록불이 깜박일 때는 새로 건너기 시작하지 않는다는 점을 짚는다.',
          task: '갈림길마다 고르고, 결과를 읽은 뒤 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '비 오는 아침',
            steps: [
              { text: '비 오는 아침, 늦어서 우산을 푹 쓰고 서둘러요. 횡단보도 앞에 왔어요.', motif: 'cloud',
                good: ['look', '우산을 들어 올리고 좌우를 살핀다', '오는 차가 보여서 멈춰 기다려요.', [['나', '차를 먼저 봐요', 1]]],
                bad: ['go', '우산을 쓴 채 바로 건넌다', '옆에서 오던 차가 급히 멈춰요.', '우산이 눈을 가리면 차를 늦게 봐요.', [['운전자', '깜짝 놀라요', -1]]] },
              { text: '초록불로 바뀌어 건너려는데 곧 초록불이 깜박이기 시작해요.', motif: 'star',
                good: ['wait', '건너지 않고 다음 신호를 기다린다', '다음 초록불에 여유 있게 건너요.', [['나', '서두르지 않아요', 1]]],
                bad: ['dash', '뛰어서 건넌다', '젖은 길에 미끄러질 뻔해요.', '깜박일 때는 새로 건너기 시작하지 않아요.', [['나', '넘어질 위험', -1]]] },
              { text: '건너편에서 친구가 부르며 주차된 차 사이로 오라고 해요.', motif: 'house',
                good: ['walk', '횡단보도 끝까지 걸어가서 만난다', '친구와 보도에서 안전하게 만나요.', [['친구와 나', '함께 안전해요', 1]]],
                bad: ['cut', '차 사이로 질러간다', '나오던 차가 나를 늦게 봐요.', '차 사이에서는 운전자가 나를 못 봐요.', [['나', '부딪칠 위험', -1]]] },
            ],
            ending: '늦더라도 멈추고 살핀 덕분에 젖은 길에서도 안전하게 학교에 왔어요.',
            reasons: [{ id: 'see', text: '앞이 가려지면 차를 늦게 본다' }, { id: 'blink', text: '깜박이면 다음 신호를 기다린다' }, { id: 'late', text: '늦으면 뛰어도 괜찮다', why: '서두르면 살피는 것을 놓쳐요.' }, { id: 'luck', text: '조심해도 사고는 운이다', why: '원인을 알면 막을 수 있어요.' }],
            good: ['see', 'blink'],
            talk: '모둠에서 "늦었을 때 서두르지 않으려면 무엇을 바꿀까?"를 한 가지씩 말해요.',
            conclude: '늦어도 멈추고 살피면 사고의 사슬을 끊을 수 있어요.',
          }),
        },
        worksheet: { items: [{ type: 'choice', prompt: '초록불이 깜박이기 시작했어요. 어떻게 할까요?', options: ['뛰어서 건넌다', '다음 신호를 기다린다', '친구를 따라 건넌다'], answer: '다음 신호를 기다린다' }] },
      }),
      X('activity.graph', {
        title: '가상의 사고 원인 그래프 읽기', method: '가상의 사고 원인 그래프 읽기', tool: 'chart', minutes: 14,
        levels: { easy: '항목 3개 막대그래프를 눈금 1칸=1건으로 완성하고 막대 끝 값이 보인다.', base: '항목 3개 막대그래프를 눈금 1칸=2건으로 완성하고 가장 큰 원인을 찾는다.', challenge: '눈금 1칸=2건 그래프를 읽고, 그래프만으로는 알 수 없는 것을 고른다.' },
        activity: {
          title: '가상 조사 자료로 막대그래프 완성하기', tool: 'chart',
          teacher: '"이 자료는 수업을 위해 꾸민 가상 자료예요. 어느 원인이 가장 많을까요?" 표를 먼저 읽고 막대를 세운 뒤 막대 끝을 눈금에 맞춰 읽게 한다. "가장 많은 원인만 막으면 사고가 없어져요"라는 학생에게 "다른 막대도 0은 아니죠? 원인이 겹친다는 것을 떠올려 봐요"라고 묻는다. 도전에서는 그래프에 없는 내용(날씨별·시간대별)은 알 수 없다는 점을 짚는다.',
          task: '가상의 우리 지역 조사 자료로 막대그래프를 완성하고, 가장 큰 원인을 찾아요.', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            { prompt: '표를 보고 원인별 막대그래프를 완성해요(가상 자료).', toolOptions: { type: 'bar', mode: 'build', title: '원인별 사고 건수(가상)', unit: '건', data: CAUSE, given: [1], scale: 2 }, target: { build: true }, difficulty: 0.25,
              levels: { easy: { prompt: '표를 보고 원인별 막대그래프를 완성해요(가상 자료, 1칸=1건).', toolOptions: { scale: 1 } } } },
            { prompt: '가상의 조사에서 가장 많은 원인은 무엇인가요?', toolOptions: { type: 'bar', mode: 'read', title: '원인별 사고 건수(가상)', unit: '건', data: CAUSE, scale: 2, choices: ['사람 원인', '차 원인', '환경 원인'], question: '가장 많은 원인은?' }, target: { pick: 0 }, difficulty: 0.15 },
            { prompt: '가상의 조사에서 가장 적은 원인은 무엇인가요?', toolOptions: { type: 'bar', mode: 'read', title: '원인별 사고 건수(가상)', unit: '건', data: CAUSE, scale: 2, choices: ['사람 원인', '차 원인', '환경 원인'], question: '가장 적은 원인은?' }, target: { pick: 1 }, difficulty: 0.2,
              levels: { challenge: { prompt: '이 그래프(가상)만으로는 알 수 없는 것을 골라요.', toolOptions: { choices: ['가장 많은 원인', '비 오는 날 사고 수', '원인별 건수'], question: '알 수 없는 것은?', why: ['막대 높이로 알 수 있어요.', '', '막대 끝 눈금으로 알 수 있어요.'] }, target: { pick: 1 } } },
              conclude: '사람 원인이 가장 많았지만, 차·환경 원인도 함께 줄여야 해요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '그래프(가상)에서 가장 많은 원인을 줄이려면 내가 할 일을 써요.' }] },
        notes: '그래프 수치는 수업용 가상 자료다. 실제 통계처럼 말하지 않는다.',
      }),
      X('wrap.self', {
        title: '내가 줄일 수 있는 원인', method: '내가 줄일 수 있는 원인', tool: 'mindmap', minutes: 6,
        levels: { easy: '원인 카드 3장을 \'내가 줄일 수 있어요\'·\'어른과 함께 바꿔요\' 가지에 나눈다.', base: '원인 카드 5장을 두 가지에 나눈다.', challenge: '원인 카드 6장을 나누고, 가장 먼저 바꿀 하나와 방법을 쓴다.' },
        wrap: {
          teacher: '"오늘 찾은 원인 가운데 내가 내일부터 줄일 수 있는 것은 무엇일까요?" 카드를 나눈 뒤 \'내가 줄일 수 있어요\' 가지에서 하나를 골라 방법을 말하게 한다. "어두운 가로등도 내가 고칠 수 있어요"라는 학생에게 "가로등은 누가 고칠까요? 우리는 어른께 알릴 수 있어요"라고 말해 준다.',
          exitTicket: [
            AS_EXIT('mindmap', SORT('원인 카드를 두 가지에 나누어요.', { topic: '사고 원인', slots: ['내가 줄일 수 있어요', '어른과 함께 바꿔요'], groups: { '내가 줄일 수 있어요': ['뛰어나가기', '휴대전화 보며 걷기', '어두운 옷'], '어른과 함께 바꿔요': ['어두운 가로등', '끊긴 보도'] }, easy: [2, 1], extra: { '어른과 함께 바꿔요': ['불법 주차 차량'] } }, 0.15)),
            { type: 'choice', prompt: '사고 원인에 대해 바른 말은 무엇인가요?', options: ['사고는 운이 나빠서 난다', '여러 원인이 겹쳐서 난다', '늘 운전자 잘못이다'], answer: 1, difficulty: 0.15, explain: '사람·차·환경 원인이 겹치면 사고가 나요.' },
            { type: 'short', prompt: '내가 가장 먼저 바꿀 원인 하나와 방법을 써요.' },
          ],
        },
        worksheet: {
          title: '내가 줄일 수 있는 원인',
          items: [
            { type: 'check', prompt: '내가 줄일 수 있는 것에 표시해요.', options: ['차 사이로 뛰어나가지 않기', '걸을 때 휴대전화 넣기', '어두운 날 밝은 옷 입기'] },
            { type: 'short', prompt: '어른께 알려 고칠 수 있는 원인 하나를 써요.' },
          ],
          easy: { note: '사람·차·환경 세 갈래를 떠올려요.', items: [{ type: 'draw', prompt: '멈추고 살피는 내 모습을 그려요.' }] },
        },
      }),
      X('wrap.tell', {
        title: '오늘 생각이 바뀐 것', method: '오늘 생각이 바뀐 것', tool: 'emotion', minutes: 6,
        levels: { easy: '생각 카드 2장을 \'전에는 그랬어요\'·\'이제는 달라요\' 칸에 나눈다.', base: '생각 카드 4장을 두 칸에 나눈다.', challenge: '생각 카드 5장을 나누고, 바뀐 까닭을 친구 생각과 견주어 말한다.' },
        wrap: {
          teacher: '"오늘 공부하기 전에는 어떻게 생각했나요? 지금은요?" 생각 카드를 나눈 뒤 한두 명이 바뀐 까닭을 말하게 하고, 다른 친구의 생각과 견주게 한다. "저는 처음부터 다 알았어요"라는 학생에게 "그럼 친구에게 무엇을 알려 주고 싶나요?"라고 물어 말로 정리하게 한다.',
          exitTicket: [
            AS_EXIT('emotion', SORT('생각 카드를 전에는·이제는 칸에 나누어요.', { slots: ['전에는 그랬어요', '이제는 달라요'], mode: 'sort', groups: { '전에는 그랬어요': ['사고는 운이에요', '늘 운전자 잘못이에요'], '이제는 달라요': ['원인이 겹쳐서 나요', '나도 줄일 수 있어요'] }, easy: 1, extra: { '전에는 그랬어요': ['원인은 하나뿐이에요'] } }, 0.15)),
            { type: 'choice', prompt: '휴대전화를 보며 걷다 생긴 사고의 사슬을 끊는 가장 좋은 자리는?', options: ['부딪친 뒤', '건너기 전에 휴대전화를 넣을 때', '차가 멈춘 뒤'], answer: 1, difficulty: 0.2, explain: '사슬의 앞쪽에서 끊을수록 사고까지 가지 않아요.' },
            { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '바뀐 내 생각',
          items: [
            { type: 'table', prompt: '내 생각이 어떻게 바뀌었는지 써요.', columns: ['전에는', '이제는'], cells: [['', '']] },
            { type: 'short', prompt: '바뀐 생각을 친구에게 알려 줄 한 문장으로 써요.' },
          ],
        },
      }),
    );
  }

  // ======== 5학년 · 차는 바로 서지 못해요 (별표 2 초등 교통안전 "교통 표지판 등 도로 교통 법규 알기" + 표준안 자동차[원인]) ========
  {
    const X = mk('stopping', 5);
    // 빠르기별 '멈춤 신호 뒤 더 나아간 발자국'(가상 자료 — 실제 차의 거리가 아니다)
    const STEP = [['천천히 걷기', 1], ['걷기', 2], ['빨리 걷기', 4], ['뛰기', 7]];
    const WET = [['천천히 걷기', 2], ['걷기', 3], ['빨리 걷기', 6], ['뛰기', 10]];
    // 도로 칸 지도: 차·브레이크 밟은 곳·횡단보도 + 칸 가(앞)·나(지나서)
    const ROAD = (extra = []) => [
      { name: '차', icon: 'bus', at: [0, 1] }, { name: '브레이크 밟은 곳', icon: 'dot', at: [2, 1] },
      { name: '칸 가', icon: 'dot', at: [1, 1] }, { name: '칸 나', icon: 'dot', at: [4, 1] },
      { name: '횡단보도', icon: 'dot', at: [5, 1] }, ...extra,
    ];
    // 말풍선 빈칸 채우기(story fill) 활동 문항 — blanks = [[말풍선 글('___'), 카드]…3], 쉬움 1·기본 2·도전 3칸
    const FILL = (prompt, who, blanks, cards, title, d, more) => {
      const sl = blanks.map(([label], i) => ({ id: `b${i + 1}`, who, label }));
      const tg = (n) => ({ fill: Object.fromEntries(blanks.slice(0, n).map(([, c], i) => [`b${i + 1}`, c])) });
      return Object.assign({ prompt, toolOptions: { mode: 'fill', title, slots: sl.slice(0, 2), cards }, target: tg(2), difficulty: d,
        levels: { easy: { prompt: `${cut(prompt)}(빈칸 하나).`, toolOptions: { slots: sl.slice(0, 1) }, target: tg(1) }, challenge: { prompt: `${cut(prompt)}(빈칸 셋).`, toolOptions: { slots: sl }, target: tg(3) } } }, more);
    };
    M.push(
      X('intro.run', {
        title: '달리다 멈추기 체험', method: '달리다 멈추기 체험', tool: 'timer', minutes: 5,
        levels: { easy: '걷기·뛰기 두 번만 해 보고 멈춤 신호 뒤 더 나아간 발자국을 기록판에 적는다.', base: '세 가지 빠르기(천천히 걷기·걷기·뛰기)로 해 보고 기록을 견준다.', challenge: '짝의 기록과 견주어 빠를수록 어떻게 되는지 경향을 말한다.' },
        intro: {
          teacher: '"\'멈춰!\' 소리를 듣자마자 섰는데, 왜 몇 발자국 더 나갔을까요?" 복도나 운동장 안전한 곳에서 몇 명이 해 보게 하고, 시연 단추로 기록판에 우리 반 기록이 적히는 모습을 보인다. "빠르게 가도 바로 멈출 수 있어요"라는 말이 나오면 "뛸 때와 걸을 때 몇 발자국 차이가 났나요?"라고 되묻는다. 사람도 이런데 무거운 차는 어떨지 오늘 알아본다고 밝힌다.',
          student: '멈춤 소리를 듣고 섰을 때 몇 발자국 더 나갔는지 짝과 견주어 말해 보아요.',
          demo: { tool: 'timer', options: { title: '멈춤 신호 뒤 더 나간 발자국(예시)', unit: '발', fields: ['천천히 걷기', '걷기', '뛰기'] }, sequence: [{ records: [1, 2, 6] }] },
          art: art('paper children walking and running on a paper playground, one child sliding a little forward after a teacher raises a stop sign', '멈춰! 바로 설 수 있을까?', 'star', 'peach'),
        },
        notes: '뛰는 체험은 넘어지지 않게 넓고 평평한 곳에서 짧게 한다. 기록판의 수는 예시이며 우리 반이 잰 값으로 바꾼다.',
      }),
      X('intro.scene', {
        title: '건널까 기다릴까', method: '건널까 기다릴까', tool: 'emotion', minutes: 5,
        levels: { easy: '교사가 마른 길 장면 하나를 읽어 주고 함께 고른 뒤 결과를 본다.', base: '마른 길과 젖은 길 장면을 차례로 떠올리며 고르고 결과를 견준다.', challenge: '고른 까닭을 "빠를수록·젖을수록" 같은 경향으로 말한다.' },
        intro: {
          teacher: '"저 차는 천천히 오는 것처럼 보여요. 지금 건너도 될까요?" 시연 단추로 \'차가 선 뒤에 건넌다\'가 골라지고 결과가 나오는 모습을 보인다. "천천히 오는 차 앞은 괜찮아요"라는 말에는 "운전자가 나를 늦게 보면 브레이크를 밟아도 차는 바로 설까요?"라고 되묻고, 비에 젖은 길이면 어떨지 함께 떠올리게 한다.',
          student: '차가 다가올 때 언제 건너는 것이 안전한지 짝과 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'branch', situation: '횡단보도 앞, 멀리서 차가 천천히 다가와요.', ask: '어떻게 할까요?', feeling: '걱정', choices: [{ id: 'go', text: '천천히 오니 지금 건넌다', result: '차가 생각보다 빨리 다가와 급히 멈춰요.' }, { id: 'wait', text: '차가 완전히 선 뒤에 건넌다', result: '차가 멈춘 것을 보고 여유 있게 건너요.' }] }, sequence: [{ choice: 'wait' }] },
          art: art('a paper crosswalk with a child waiting at the curb while a paper car slowly approaches on a wet shiny road', '건널까, 기다릴까?', 'cloud', 'sky'),
        },
      }),
      X('activity.line', {
        title: '빠르기와 멈춤 거리 그래프', method: '빠르기와 멈춤 거리 그래프', tool: 'chart', minutes: 15,
        levels: { easy: '항목 3개(천천히 걷기·걷기·빨리 걷기)로 그래프를 완성하고 값이 보이며, 같은 자료의 꺾은선그래프를 읽는다.', base: '항목 4개로 그래프를 완성하고, 점 4개 꺾은선그래프에서 빠를수록 어떻게 되는지 읽는다.', challenge: '셋째 문항에서 젖은 길 가상 자료 그래프를 읽고 마른 길과 견준다.' },
        activity: {
          title: '빠르기별 멈춤 거리 꺾은선그래프', tool: 'chart',
          teacher: '"이 자료는 수업을 위해 꾸민 가상 자료예요. 빠를수록 선은 어느 쪽으로 가나요?" 막대를 세운 뒤 같은 자료의 꺾은선그래프에서 선이 올라가는 모습을 손가락으로 따라가게 한다. "조금 빨라지면 조금만 더 가요"라는 학생에게 "빨리 걷기와 뛰기 사이에서 선이 얼마나 가팔라졌나요?"라고 묻는다. 도전에서는 젖은 길에서는 같은 빠르기에도 더 미끄러져 나간다는 점을 짚는다.',
          task: '빠르기별 멈춤 신호 뒤 더 나아간 발자국(가상)을 그래프로 정리하고, 꺾은선그래프에서 경향을 읽어요.', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            { prompt: '표를 보고 빠르기별 막대그래프를 먼저 완성해요(가상 자료).', toolOptions: { type: 'bar', mode: 'build', title: '멈춤 뒤 더 나간 발자국(가상)', unit: '발', xLabel: '빠르기', yLabel: '발자국', data: STEP, given: [0] }, target: { build: true }, difficulty: 0.25,
              levels: { easy: { prompt: '표를 보고 막대그래프를 먼저 완성해요(가상 자료, 막대 3개).', toolOptions: { data: STEP.slice(0, 3) } } } },
            { prompt: '가상 자료 그래프에서 가장 많이 더 나아간 빠르기는 무엇인가요?', toolOptions: { type: 'line', mode: 'read', title: '멈춤 뒤 더 나간 발자국(가상)', unit: '발', xLabel: '빠르기', yLabel: '발자국', data: STEP, choices: STEP.map((x) => x[0]), question: '가장 많이 나간 빠르기는?' }, target: { pick: 3 }, difficulty: 0.15 },
            { prompt: '그래프(가상)를 보고 알맞은 말을 골라요.', toolOptions: { type: 'line', mode: 'read', title: '멈춤 뒤 더 나간 발자국(가상)', unit: '발', xLabel: '빠르기', yLabel: '발자국', data: STEP, choices: ['빠를수록 더 나아간다', '빠르기와 상관없다', '빠를수록 덜 나아간다'], question: '알맞은 말은?', why: ['', '선이 오른쪽으로 갈수록 올라가요.', '선이 내려가는지 다시 봐요.'] }, target: { pick: 0 }, difficulty: 0.2,
              levels: { challenge: { prompt: '젖은 길 그래프(가상)를 보고 마른 길과 견준 말을 골라요.', toolOptions: { title: '젖은 길에서 더 나간 발자국(가상)', data: WET, choices: ['마른 길보다 더 나아간다', '마른 길과 똑같다', '마른 길보다 덜 나아간다'], why: ['', '뛰기 값을 마른 길과 견주어 봐요.', '젖은 길은 더 미끄러워요.'] }, target: { pick: 0 } } },
              conclude: '빠를수록, 길이 젖을수록 멈추기까지 더 나아가요. 차도 마찬가지예요.' },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '빠를수록 멈추기까지 ___ 나아가요.', answer: '더 많이' }] },
        notes: '그래프 수치는 수업용 가상 자료다. 사람 발자국 체험을 차의 실제 멈춤 거리처럼 말하지 않는다.',
      }),
      X('activity.parts', {
        title: '멈추기까지 세 장면', method: '멈추기까지 세 장면', tool: 'story', minutes: 14,
        levels: { easy: '장면 3장을 차례로 놓고(놓자마자 맞는지 보임), 말풍선 빈칸 하나를 채운다.', base: '장면 3장을 차례로 놓고 말풍선 빈칸 둘을 채운다.', challenge: '말풍선 빈칸 셋을 채우고, 휴대전화를 보는 운전자 장면 4장을 차례로 놓아 결과를 견준다.' },
        activity: {
          title: '차가 멈추기까지 장면과 말풍선', tool: 'story',
          teacher: '"운전자가 아이를 본 순간 차는 바로 섰을까요?" 장면을 놓은 뒤 장면마다 차가 계속 나아가는 까닭을 말풍선으로 채우게 한다. "브레이크를 밟으면 그 자리에서 서요"라는 학생에게 "발을 옮기는 동안, 브레이크가 걸린 뒤에도 차는 어떻게 되나요?"라고 묻는다. 휴대전화를 보던 운전자는 아이를 더 늦게 보아 더 멀리 간다는 점을 견주게 한다.',
          task: '차가 멈추기까지의 장면을 차례대로 놓고, 차가 계속 나아가는 까닭을 말풍선에 채워요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDER('운전자가 아이를 보고 차가 서기까지 차례대로 놓아요.', ['운전자가 아이를 봐요', '발을 브레이크로 옮겨요', '미끄러지며 서요'], { motifs: ['sun', 'star', 'wave'] }, 0.2),
            FILL('장면마다 차가 계속 나아가는 까닭을 말풍선에 채워요.', '운전자', [['아이를 보고 알아채는 동안 차는 ___', '계속 달려요'], ['발을 옮기는 동안에도 차는 ___', '앞으로 가요'], ['브레이크가 걸려도 차는 ___', '미끄러져 나가요']], ['계속 달려요', '앞으로 가요', '미끄러져 나가요', '바로 멈춰요'], '멈추기까지', 0.25),
            ORDER('휴대전화를 보던 운전자 장면을 차례대로 놓아요.', ['운전자가 휴대전화를 봐요', '아이를 늦게 봐요', '발을 브레이크로 옮겨요', '더 멀리 가서 서요'], { easy: [0, 1, 3], motifs: ['moon', 'sun', 'star', 'wave'] }, 0.3, { conclude: '알아채고, 발을 옮기고, 미끄러지는 동안 차는 계속 나아가요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '운전자가 휴대전화를 보면 차가 더 멀리 가서 서는 까닭을 써요.' }] },
      }),
      X('activity.road', {
        title: '멈출 자리 찾기', method: '멈출 자리 찾기', tool: 'map', minutes: 15,
        levels: { easy: '세 문항 모두 핀을 놓으면 칸 이름이 보인다(차 1대부터).', base: '차 1대 문항과 빠르기가 다른 차 2대 문항에서 차가 설 칸을 짐작한다.', challenge: '셋째 문항에 젖은 길 칸이 더해진 조건에서 다시 짐작한다.' },
        activity: {
          title: '도로 칸 지도에서 차가 설 칸 짐작하기', tool: 'map',
          teacher: '"차는 브레이크를 밟은 칸에서 바로 설까요, 몇 칸 더 갈까요?" 칸을 손가락으로 짚으며 차가 가는 쪽을 따라가게 한다. "브레이크 밟은 칸에 서요"라고 핀을 꽂는 학생에게 "오늘 그래프에서 멈춤 신호 뒤에도 더 나아갔죠?"라고 되묻는다. 차가 설 칸이 횡단보도와 가까울수록 건너는 사람이 위험하다는 점을 잇는다.',
          task: '도로 칸 지도에서 차가 설 수 있는 칸을 짐작해 핀을 꽂고, 횡단보도와 견주어요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            { prompt: '차가 브레이크를 밟았어요. 차가 설 수 있는 칸에 핀을 꽂아요.', toolOptions: { grid: [6, 3], title: '찻길(가상)', places: ROAD(), legend: false }, target: { place: '칸 나' }, difficulty: 0.2 },
            { prompt: '빠른 차와 느린 차가 같은 곳에서 브레이크를 밟았어요. 빠른 차가 설 칸에 핀을 꽂아요.', toolOptions: { grid: [6, 3], title: '찻길 두 줄(가상)', places: [{ name: '느린 차', icon: 'bus', at: [0, 0] }, { name: '빠른 차', icon: 'bus', at: [0, 2] }, { name: '느린 차가 선 곳', icon: 'dot', at: [3, 0] }, { name: '칸 가', icon: 'dot', at: [2, 2] }, { name: '칸 나', icon: 'dot', at: [5, 2] }], legend: false }, target: { place: '칸 나' }, difficulty: 0.25 },
            { prompt: '같은 차가 마른 길에서 선 곳이 칸 나예요. 이번에는 어디쯤 설지 핀을 꽂아요.', toolOptions: { grid: [6, 3], title: '찻길(가상)', places: ROAD([{ name: '칸 다', icon: 'dot', at: [3, 2] }]), legend: false }, target: { place: '칸 나' }, difficulty: 0.25,
              levels: { challenge: { prompt: '길이 비에 젖었어요. 마른 길에서 선 칸 나보다 어디쯤 설지 핀을 꽂아요.', toolOptions: { places: [{ name: '차', icon: 'bus', at: [0, 1] }, { name: '브레이크 밟은 곳', icon: 'dot', at: [2, 1] }, { name: '칸 나(마른 길)', icon: 'dot', at: [3, 1] }, { name: '칸 다', icon: 'dot', at: [5, 1] }, { name: '젖은 길', icon: 'dot', at: [4, 2] }, { name: '칸 가', icon: 'dot', at: [1, 1] }] }, target: { place: '칸 다' } } },
              conclude: '차는 브레이크를 밟은 뒤에도 더 나아가요. 그래서 차가 완전히 선 뒤에 건너요.' },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '비에 젖은 길에서 차가 서는 자리는 마른 길과 견주어 어떤가요?', options: ['더 가까이 선다', '더 멀리 가서 선다', '똑같다'], answer: '더 멀리 가서 선다' }] },
        notes: '칸 지도는 차가 서는 경향을 보이는 그림이며 실제 거리를 나타내지 않는다.',
      }),
      X('activity.rules', {
        title: '그래서 나는 이렇게', method: '그래서 나는 이렇게', tool: 'mindmap', minutes: 14,
        levels: { easy: '가지 2개(건너기 전·비 오는 날)에 행동 카드와 근거 카드를 한 장씩 잇는다.', base: '가지 3개(건너기 전·비 오는 날·차가 빠를 때)에 행동 카드와 근거 카드를 잇는다.', challenge: '가지 3개에 잇되 섞인 함정 카드를 빼고 잇는다.' },
        activity: {
          title: '차는 바로 못 서요 — 나의 행동 잇기', tool: 'mindmap',
          teacher: '"차가 바로 못 선다는 것을 알았으니, 나는 무엇을 바꿀까요?" 가지에 행동 카드를 이은 뒤 둘째 문항에서 그 행동의 근거를 잇게 한다. "비 오는 날은 우산이 있으니 괜찮아요"라는 학생에게 "젖은 길에서 차는 어떻게 된다고 했나요?"라고 되묻는다. 함정 카드(빨리 뛰어 건너기)가 왜 틀렸는지도 말하게 한다.',
          task: '가지마다 알맞은 행동 카드와 근거 카드를 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            MATCH('가지마다 알맞은 행동 카드를 이어요.', '차는 바로 못 서요', [['건너기 전', '차가 완전히 섰나 봐요'], ['비 오는 날', '더 멀리서부터 기다려요'], ['차가 빠를 때', '지나간 뒤에 건너요']], '빨리 뛰어 건너요', 0.2),
            MATCH('가지마다 알맞은 근거 카드를 이어요.', '왜 그럴까요?', [['건너기 전', '브레이크 뒤에도 차가 나가요'], ['비 오는 날', '젖은 길은 더 미끄러워요'], ['차가 빠를 때', '빠를수록 서는 데 오래 걸려요']], '차는 바로 서요', 0.25, { hints: ['오늘 그래프와 장면에서 알게 된 근거를 떠올려요.'], conclude: '차가 바로 못 서는 까닭을 알면 기다리는 행동을 고를 수 있어요.' }),
            { prompt: '모둠에서 오늘 고른 행동 가운데 가장 지키기 어려운 것과 지킬 방법을 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '상황마다 나의 행동을 써요.', columns: ['건너기 전', '비 오는 날', '차가 빠를 때'], cells: [['', '', '']] }] },
      }),
      X('wrap.self', {
        title: '건너기 전 확인 차례', method: '건너기 전 확인 차례', tool: 'timeline', minutes: 6,
        levels: { easy: '확인 카드 3장(멈춰요·차가 섰나 봐요·건너요)을 차례로 놓는다.', base: '확인 카드 5장을 차례로 놓는다.', challenge: '젖은 길일 때 더할 카드(더 기다려요)까지 6장을 차례로 놓는다.' },
        wrap: {
          teacher: '"건너기 전에 무엇을 어떤 차례로 확인할까요?" 카드를 놓은 뒤 반 전체가 차례대로 몸짓으로 따라 해 본다. "운전자와 눈 맞추기는 건너면서 해요"라는 학생에게 "건너기 전에 나를 봤는지 확인해야 안전하겠죠?"라고 말해 준다. 출구 2번에서 "천천히 오면 건넌다"를 고른 학생에게 차는 바로 서지 못한다는 점을 다시 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'timeline', options: { mode: 'order', axis: ['먼저', '나중'], slots: 5, cards: ['차가 완전히 섰나 봐요', '멈춰요', '건너요', '차 빠르기 봐요', '운전자와 눈 맞춰요'] }, prompt: '건너기 전 확인 카드를 차례대로 놓아요.', target: { order: ['멈춰요', '차 빠르기 봐요', '차가 완전히 섰나 봐요', '운전자와 눈 맞춰요', '건너요'] }, difficulty: 0.15,
              levels: {
                easy: { prompt: '건너기 전 확인 카드를 차례대로 놓아요(카드 3장).', toolOptions: { slots: 3, cards: ['건너요', '멈춰요', '차가 완전히 섰나 봐요'] }, target: { order: ['멈춰요', '차가 완전히 섰나 봐요', '건너요'] } },
                challenge: { prompt: '젖은 길일 때 확인 카드를 차례대로 놓아요(카드 6장).', toolOptions: { slots: 6, cards: ['차가 완전히 섰나 봐요', '멈춰요', '젖은 길이면 더 기다려요', '건너요', '차 빠르기 봐요', '운전자와 눈 맞춰요'] }, target: { order: ['멈춰요', '차 빠르기 봐요', '젖은 길이면 더 기다려요', '차가 완전히 섰나 봐요', '운전자와 눈 맞춰요', '건너요'] } },
              } },
            { type: 'choice', prompt: '차가 천천히 다가와요. 언제 건너는 것이 안전한가요?', options: ['천천히 오니 바로', '차가 완전히 선 뒤', '차 앞으로 뛰어서'], answer: 1, difficulty: 0.15, explain: '차는 브레이크를 밟아도 바로 서지 못해요.' },
            { type: 'short', prompt: '내일 등굣길에 건너기 전 꼭 확인할 것 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '건너기 전 확인 차례',
          items: [
            { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '멈추고, 차가 완전히 ___ 확인한 뒤에 건너요.', answer: '섰는지' },
            { type: 'short', prompt: '비 오는 날 건너기 전에 더 할 일을 써요.' },
          ],
          easy: { note: '멈추고, 차가 섰는지 보고, 건너요.', items: [{ type: 'draw', prompt: '차가 선 것을 보고 건너는 내 모습을 그려요.' }] },
        },
      }),
      X('wrap.tell', {
        title: '한 문장 정리 고르기', method: '한 문장 정리 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '정리 문장 카드 3장 가운데 바른 문장 하나를 고른다.', base: '정리 문장 카드 5장 가운데 바른 문장 둘을 고르고, 틀린 문장을 고친다.', challenge: '바른 문장 둘을 고르고 틀린 문장을 고친 뒤, 오늘 배운 것을 내 말로 한 문장 쓴다.' },
        wrap: {
          teacher: '"오늘 배운 것을 가장 잘 나타낸 문장은 무엇일까요?" 카드를 고른 뒤 "차는 바로 서요"처럼 틀린 문장을 어떻게 고치면 될지 말하게 한다. "천천히 오는 차 앞은 괜찮아요"를 고른 학생에게 "그래프에서 천천히 걸어도 0발자국이었나요?"라고 되묻는다. 도전 단계 학생에게는 셋째 질문을 내 말로 쓰게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'emotion', options: { mode: 'pick', basket: '바른 정리 문장', cards: ['차는 바로 서요', '차는 바로 서지 못해요', '천천히 오는 차 앞은 괜찮아요', '빠를수록 서는 데 오래 걸려요', '젖은 길도 똑같아요'] }, prompt: '오늘 배운 것을 바르게 나타낸 문장만 골라 담아요.', target: { pick: ['차는 바로 서지 못해요', '빠를수록 서는 데 오래 걸려요'] }, difficulty: 0.15,
              levels: { easy: { prompt: '오늘 배운 것을 바르게 나타낸 문장 하나를 골라 담아요(카드 3장).', toolOptions: { cards: ['차는 바로 서요', '차는 바로 서지 못해요', '젖은 길도 똑같아요'] }, target: { pick: ['차는 바로 서지 못해요'] } } } },
            { type: 'choice', prompt: '"차는 브레이크를 밟으면 바로 서요"를 바르게 고친 것은?', options: ['차는 밟기 전에 서요', '차는 밟은 뒤에도 더 나아가요', '차는 밟으면 뒤로 가요'], answer: 1, difficulty: 0.2, explain: '알아채고 발을 옮기고 미끄러지는 동안 차는 나아가요.' },
            { type: 'short', prompt: '오늘 배운 것을 내 말로 한 문장 써요.' },
          ],
        },
        worksheet: {
          title: '차는 바로 서지 못해요',
          items: [
            { type: 'table', prompt: '바른 말이면 ○, 틀린 말이면 ×를 써요.', columns: ['문장', '○ / ×'], cells: [['차는 바로 서요', ''], ['빠를수록 서는 데 오래 걸려요', ''], ['젖은 길에서는 더 미끄러져요', '']], answer: '×, ○, ○' },
            { type: 'short', prompt: '틀린 문장 하나를 골라 바르게 고쳐 써요.' },
          ],
        },
      }),
    );
  }

  // ======== 5학년 · 큰 차의 보이지 않는 자리 (별표 2 초등 교통안전 "교통수단(자전거, 대중교통 등)의 안전한 이용법 알기" + 표준안 자동차[원인·예방]) ========
  {
    const X = mk('blindspot', 5);
    // 큰 차 둘레 칸 지도(가상): 트럭 한 대와 둘레 칸
    const TRUCK = (extra = []) => [
      { name: '트럭', icon: 'bus', at: [2, 1] }, { name: '앞 바로 아래', icon: 'dot', at: [3, 1] },
      { name: '오른쪽 옆 바로', icon: 'dot', at: [2, 2] }, { name: '뒤 바로', icon: 'dot', at: [1, 1] },
      { name: '멀리 앞 보도', icon: 'house', at: [5, 0] }, ...extra,
    ];
    const blank = (who, label) => ({ who, label });
    M.push(
      X('intro.seat', {
        title: '운전석 높이에서 보이는 것', method: '운전석 높이에서 보이는 것', tool: 'body', minutes: 5,
        levels: { easy: '교사가 한 부분(무릎)을 짚어 주며 운전석에서 가려지는지 함께 본다.', base: '큰 차 바로 앞에 선 아이에게서 운전석에서 가려질 부분을 모두 고른다.', challenge: '쪼그려 앉았을 때는 어디까지 가려질지 견주어 말한다.' },
        intro: {
          teacher: '"큰 버스 운전석은 아주 높아요. 차 바로 앞에 선 친구의 어디까지 보일까요?" 종이 몸 옆에 큰 차 운전석 그림을 놓고, 시연 단추로 가슴·배·허벅지·무릎·발목이 \'가려지는 부분\'으로 골라지는 모습을 보인다. "높이 앉으면 다 보여요"라는 말에는 "높은 곳에서 바로 아래를 내려다보면 차 앞부분이 가리지 않을까요?"라고 되묻는다. 쪼그려 앉으면 더 많이 가려진다는 점을 짚는다.',
          student: '큰 차 바로 앞에 서 있으면 운전자에게 내가 보일지 짝과 말해 보아요.',
          demo: { tool: 'body', options: { mode: 'parts', parts: ['눈', '목', '어깨', '가슴', '배', '허벅지', '무릎', '발목'], names: true }, sequence: [{ parts: ['가슴', '배', '허벅지', '무릎', '발목'] }] },
          art: art('a tall paper bus with a driver sitting high up, and a small paper child standing right in front of the bumper, partly hidden by the hood', '운전석에서 내가 보일까?', 'sun', 'buttercup'),
        },
        notes: '종이 몸에는 머리 칸이 없어 머리는 눈·목 칸으로 이야기한다. 실제로 버스에 다가가 보지 않고 그림으로만 다룬다.',
      }),
      X('intro.guess', {
        title: '어디가 안 보일까', method: '어디가 안 보일까', tool: 'emotion', minutes: 5,
        levels: { easy: '교사가 안 보이는 자리 2곳(앞 바로 아래·오른쪽 옆 바로)을 짚어 주고 고른다.', base: '트럭 둘레 자리 가운데 운전자가 볼 수 없을 것 같은 자리를 모두 고른다.', challenge: '거울에 비치는 자리와 비치지 않는 자리를 견주어 말한다.' },
        intro: {
          teacher: '"트럭을 위에서 내려다본 그림이에요. 운전자가 볼 수 없는 자리는 어디일까요?" 시연 단추로 앞 바로 아래·오른쪽 옆 바로·뒤 바로가 바구니에 담기는 모습을 보인다. "거울이 있으니 다 보여요"라는 말에는 "거울에 비치지 않는 자리도 있어요. 그 자리를 \'사각지대\'라고 해요"라고 말해 준다.',
          student: '큰 차 둘레에서 운전자가 나를 못 볼 것 같은 자리를 하나 골라 짝에게 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'pick', basket: '안 보이는 자리', cards: [{ id: 'front', text: '앞 바로 아래' }, { id: 'far', text: '멀리 앞' }, { id: 'side', text: '오른쪽 옆 바로' }, { id: 'eye', text: '운전자와 눈 맞춘 자리' }, { id: 'back', text: '뒤 바로' }], shuffle: false }, sequence: [{ pick: ['front', 'side', 'back'] }] },
          art: art('a paper truck seen from above with shaded paper areas around its front, right side and back, and small side mirrors', '어디가 안 보일까?', 'cloud', 'lavender'),
        },
      }),
      X('activity.zone', {
        title: '사각지대 칸 찾기', method: '사각지대 칸 칠하기', tool: 'map', minutes: 15,
        levels: { easy: '트럭 1대 지도에서 핀을 놓으면 칸 이름이 보인다(칸 힌트).', base: '트럭 1대 지도에서 운전자가 볼 수 없는 칸과 기다릴 안전한 칸을 찾는다.', challenge: '셋째 문항에서 버스와 트럭 두 대가 함께 있는 지도로 판단한다.' },
        activity: {
          title: '큰 차 칸 지도에서 사각지대와 기다릴 곳', tool: 'map',
          teacher: '"이 칸에 서 있으면 운전자가 나를 볼 수 있을까요?" 칸마다 운전석에서 보이는지 손가락으로 짚어 보게 한다. "트럭 바로 옆이 가까워서 잘 보여요"라는 학생에게 "가까울수록 거울과 차 몸이 가려요. 그래서 바로 옆은 오히려 안 보여요"라고 말해 준다. 기다릴 곳은 차에서 멀고 운전자와 눈을 맞출 수 있는 곳이라는 점을 짚는다.',
          task: '큰 차 칸 지도에서 운전자가 볼 수 없는 칸과 기다릴 안전한 칸에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            { prompt: '트럭 운전자가 볼 수 없는 앞쪽 칸에 핀을 꽂아요.', toolOptions: { grid: [6, 3], title: '트럭 둘레(가상)', places: TRUCK(), legend: false }, target: { place: '앞 바로 아래' }, difficulty: 0.2 },
            { prompt: '트럭이 지나가기를 기다릴 안전한 칸에 핀을 꽂아요.', toolOptions: { grid: [6, 3], title: '트럭 둘레(가상)', places: TRUCK(), legend: false }, target: { place: '멀리 앞 보도' }, difficulty: 0.2 },
            { prompt: '트럭 운전자가 볼 수 없는 옆쪽 칸에 핀을 꽂아요.', toolOptions: { grid: [6, 3], title: '트럭 둘레(가상)', places: TRUCK(), legend: false }, target: { place: '오른쪽 옆 바로' }, difficulty: 0.25,
              levels: { challenge: { prompt: '버스와 트럭이 함께 서 있어요. 두 차 모두에서 안전한 기다릴 칸에 핀을 꽂아요.', toolOptions: { title: '버스와 트럭 둘레(가상)', places: [{ name: '트럭', icon: 'bus', at: [1, 1] }, { name: '버스', icon: 'bus', at: [4, 1] }, { name: '두 차 사이', icon: 'dot', at: [2, 1] }, { name: '버스 앞 바로', icon: 'dot', at: [5, 1] }, { name: '트럭 옆 바로', icon: 'dot', at: [1, 2] }, { name: '보도 안쪽', icon: 'house', at: [3, 0] }] }, target: { place: '보도 안쪽' } } },
              conclude: '큰 차 바로 앞·옆·뒤는 운전자가 못 봐요. 멀리 떨어져 기다려요.' },
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '큰 차 운전자가 볼 수 없는 자리에 표시해요.', options: ['앞 바로 아래', '오른쪽 옆 바로', '뒤 바로', '멀리 앞 보도'] }] },
        notes: '칸 지도는 꾸민 그림이다. 사각지대의 넓이는 차마다 다르므로 "큰 차일수록 넓다"는 경향으로만 말한다.',
      }),
      X('activity.turn', {
        title: '모퉁이를 도는 트럭', method: '모퉁이를 도는 트럭', tool: 'story', minutes: 14,
        levels: { easy: '장면 3장을 차례로 놓고(놓자마자 맞는지 보임) 말풍선 빈칸 하나를 채운다.', base: '장면 4장을 차례로 놓고 말풍선 빈칸 둘을 채운다.', challenge: '장면 4장에 섞인 틀린 장면을 빼고 놓고, 말풍선 빈칸 셋을 채운다(셋째 문항은 자전거를 탄 경우).' },
        activity: {
          title: '모퉁이를 도는 트럭 장면과 말풍선', tool: 'story',
          teacher: '"트럭이 모퉁이를 돌 때 뒷바퀴는 앞바퀴와 같은 길로 지나갈까요?" 장면을 놓은 뒤 뒷바퀴가 안쪽으로 더 들어오는 모습을 손으로 그려 보게 한다. "트럭이 돌기 전에 빨리 건너면 돼요"라는 학생에게 "운전자가 그때 나를 볼 수 있을까요? 모퉁이에서는 한 걸음 물러서요"라고 말해 준다. 자전거를 탄 경우에도 트럭 옆으로 끼어들지 않고 뒤에서 기다린다는 점을 잇는다.',
          task: '모퉁이를 도는 트럭 장면을 차례대로 놓고, 말풍선에 알맞은 카드를 넣어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDER('트럭이 모퉁이를 도는 장면을 차례대로 놓아요.', ['트럭이 깜빡이를 켜요', '앞바퀴가 모퉁이를 돌아요', '뒷바퀴가 안쪽으로 지나요', '다 돈 뒤에 건너요'], { easy: [0, 1, 2], trap: '트럭 옆으로 빨리 건너요', motifs: ['star', 'sun', 'wave', 'house'] }, 0.2),
            { prompt: '모퉁이에서 기다리는 아이의 말풍선을 채워요.', toolOptions: { mode: 'fill', title: '모퉁이에서', slots: [Object.assign({ id: 'b1' }, blank('나', '모퉁이에서는 한 걸음 ___')), Object.assign({ id: 'b2' }, blank('나', '뒷바퀴는 ___ 지나가요'))], cards: ['물러서요', '안쪽으로', '앞으로 가요', '바깥쪽으로'] }, target: { fill: { b1: '물러서요', b2: '안쪽으로' } }, difficulty: 0.25,
              levels: {
                easy: { prompt: '모퉁이에서 기다리는 아이의 말풍선을 채워요(빈칸 하나).', toolOptions: { slots: [Object.assign({ id: 'b1' }, blank('나', '모퉁이에서는 한 걸음 ___'))] }, target: { fill: { b1: '물러서요' } } },
                challenge: { prompt: '모퉁이에서 기다리는 아이의 말풍선을 채워요(빈칸 셋).', toolOptions: { slots: [Object.assign({ id: 'b1' }, blank('나', '모퉁이에서는 한 걸음 ___')), Object.assign({ id: 'b2' }, blank('나', '뒷바퀴는 ___ 지나가요')), Object.assign({ id: 'b3' }, blank('나', '트럭이 다 돈 ___ 건너요'))], cards: ['물러서요', '안쪽으로', '앞으로 가요', '바깥쪽으로', '뒤에'] }, target: { fill: { b1: '물러서요', b2: '안쪽으로', b3: '뒤에' } } },
              } },
            ORDER('자전거를 타고 모퉁이에서 트럭을 만난 장면을 차례대로 놓아요.', ['모퉁이 앞에 왔어요', '트럭 깜빡이를 봐요', '멈춰서 뒤에서 기다려요', '트럭이 다 돈 뒤 가요'], { easy: [0, 2, 3], trap: '트럭 옆으로 끼어들어요', motifs: ['house', 'star', 'leaf', 'sun'] }, 0.3, { conclude: '큰 차가 돌 때 뒷바퀴는 안쪽으로 지나요. 모퉁이에서는 물러서서 기다려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '트럭이 모퉁이를 돌 때 뒷바퀴는 앞바퀴보다 ___으로 지나가요.', answer: '안쪽' }] },
      }),
      X('activity.choose', {
        title: '버스에서 내렸어요', method: '버스에서 내렸어요', tool: 'dilemma', minutes: 15,
        levels: { easy: '갈림길 1번(버스 앞으로 건널지 기다릴지)에서 고르고 근거 한 장을 고른다.', base: '갈림길 2번(버스가 떠나요)을 지나 근거를 고른다.', challenge: '갈림길 3번까지 지나 근거 두 가지를 모두 고르고, 모둠에서 친구에게 할 말을 정한다.' },
        activity: {
          title: '갈림길: 버스에서 내렸어요', tool: 'dilemma',
          teacher: '"버스 바로 앞으로 건너면 누가 나를 못 볼까요?" 고를 때마다 결과를 소리 내어 읽게 한다. "버스 앞은 버스가 서 있으니 안전해요"라는 학생에게 "버스 운전자도, 옆 차선에서 오는 차도 버스에 가려 나를 못 봐요"라고 말해 준다. 버스가 떠난 뒤에도 횡단보도까지 가서 신호를 지킨다는 점을 짚는다.',
          task: '버스에서 내린 상황의 갈림길마다 고르고, 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '버스에서 내렸어요',
            steps: [
              { text: '버스에서 내리자 길 건너에서 친구 "민"이 손을 흔들며 불러요.', motif: 'house',
                good: ['wait', '보도에서 버스가 떠나기를 기다린다', '버스가 떠나고 길이 잘 보여요.', [['나', '차를 볼 수 있어요', 1]]],
                bad: ['front', '버스 바로 앞으로 건넌다', '옆 차선 차가 급히 멈춰요.', '버스에 가려 운전자들이 나를 못 봐요.', [['옆 차 운전자', '깜짝 놀라요', -1]]] },
              { text: '버스가 떠났어요. 길 건너 친구가 빨리 오라고 해요.', motif: 'star',
                good: ['cross', '횡단보도까지 걸어가 신호를 기다린다', '초록불에 좌우를 살피고 건너요.', [['나', '안전하게 건너요', 1]]],
                bad: ['dash', '그 자리에서 바로 뛰어 건넌다', '버스 뒤에서 오던 차가 경적을 울려요.', '버스가 떠나도 다른 차가 와요.', [['나', '부딪칠 위험', -1]]] },
              { text: '건너편에서 친구를 만났어요. 친구가 내일도 버스 앞으로 오라고 해요.', motif: 'sun',
                good: ['tell', '버스 앞은 안 보인다고 알려 준다', '친구도 내일부터 기다리기로 해요.', [['친구', '위험을 알아요', 1]]],
                bad: ['ok', '알겠다고 한다', '다음 날 둘 다 버스 앞으로 뛰어요.', '위험한 약속은 바꾸자고 말해요.', [['친구와 나', '함께 위험해요', -1]]] },
            ],
            ending: '버스가 떠난 뒤 횡단보도로 건너 친구와 안전하게 만났어요.',
            reasons: [{ id: 'hide', text: '버스 앞뒤는 운전자가 나를 못 본다' }, { id: 'more', text: '버스가 떠나도 다른 차가 올 수 있다' }, { id: 'stop', text: '버스가 서 있으니 앞은 안전하다', why: '서 있는 버스가 나를 가려요.' }, { id: 'friend', text: '친구가 부르면 빨리 가야 한다', why: '친구는 기다려 줄 수 있어요.' }],
            good: ['hide', 'more'],
            talk: '모둠에서 "버스 앞으로 오라는 친구에게 할 말"을 한 문장씩 정해요.',
            conclude: '버스에서 내리면 버스가 떠난 뒤 횡단보도로 건너요.',
          }),
        },
        worksheet: { items: [{ type: 'choice', prompt: '버스에서 내린 뒤 길을 건너려면 어떻게 할까요?', options: ['버스 바로 앞으로 건넌다', '버스가 떠난 뒤 횡단보도로 건넌다', '버스 뒤로 돌아 건넌다'], answer: '버스가 떠난 뒤 횡단보도로 건넌다' }] },
        notes: '친구 이름은 가명(민)이다.',
      }),
      X('activity.sort', {
        title: '보이는 곳·안 보이는 곳', method: '보이는 곳·안 보이는 곳', tool: 'mindmap', minutes: 14,
        levels: { easy: '위치 카드 4장을 보여요·안 보여요 가지에 나누고(놓자마자 맞는지 보임), 둘째 문항은 가지 2개에 행동을 잇는다.', base: '위치 카드 6장을 나누고, 둘째 문항은 가지 3개에 행동을 잇는다.', challenge: '위치 카드 8장(함정 1장)을 나누고, 행동 잇기에서도 함정 카드를 뺀다.' },
        activity: {
          title: '큰 차 둘레 위치 나누기', tool: 'mindmap',
          teacher: '"\'오른쪽 옆 바로\'는 보일까요, 안 보일까요?" 카드를 놓을 때마다 운전석에 앉았다고 상상하며 고개를 돌려 보게 한다. "가까울수록 잘 보여요"라는 학생에게 "차 바로 옆은 차 몸이 가려요. 멀리 앞이 오히려 잘 보이죠?"라고 묻는다. 둘째 문항에서 자리마다 할 행동을 잇게 한다.',
          task: '큰 차 둘레 위치 카드를 보여요·안 보여요 가지에 나누고, 자리마다 할 행동을 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORT('큰 차 둘레 위치 카드를 두 가지에 나누어요.', { topic: '큰 차 둘레', slots: ['보여요', '안 보여요'], groups: { 보여요: ['멀리 앞', '운전자와 눈 맞춘 자리', '거울에 비친 자리'], '안 보여요': ['앞 가까이', '옆 바로', '뒤 가까이'] }, extra: { '안 보여요': ['바퀴 바로 옆'] }, traps: ['차 지붕 위'] }, 0.25),
            MATCH('자리마다 할 행동 카드를 이어요.', '큰 차 둘레에서', [['앞 가까이', '뒤로 물러서요'], ['옆 바로', '차에서 떨어져요'], ['뒤 가까이', '후진 차와 거리 둬요']], '바퀴 옆에서 놀아요', 0.25, { conclude: '큰 차 가까이는 안 보이는 자리예요. 떨어져서 운전자와 눈을 맞춰요.' }),
            { prompt: '모둠에서 등굣길에 큰 차를 만나는 곳과 그때 할 행동을 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '자리마다 보이는지 쓰고 할 행동을 써요.', columns: ['자리', '보여요/안 보여요', '할 행동'], cells: [['앞 가까이', '', ''], ['멀리 앞', '', '']] }] },
      }),
      X('wrap.self', {
        title: '큰 차 둘레 스스로 점검', method: '큰 차 둘레 스스로 점검', tool: 'timer', minutes: 6,
        levels: { easy: '점검 칸 2개(모퉁이에서 물러서기·버스 떠난 뒤 건너기)를 표시한다.', base: '점검 칸 3개를 표시한다.', challenge: '점검 칸 4개를 표시하고 등굣길에서 큰 차를 만나는 곳을 쓴다.' },
        wrap: {
          teacher: '"내일 큰 차를 만나면 나는 무엇을 할까요?" 점검 칸을 스스로 읽고 지킬 것에 표시하게 한다. 출구 2번에서 "트럭이 돌기 전에 빨리 건넌다"를 고른 학생에게 "운전자가 그 자리를 볼 수 있을까요?"라고 되묻는다.',
          exitTicket: [
            SELF('큰 차 둘레 점검', ['모퉁이에서 한 걸음 물러선다', '버스가 떠난 뒤에 건넌다', '후진하는 차와 거리를 둔다', '운전자와 눈을 맞춘다'], '오늘 다짐한 것에 스스로 표시해요.'),
            { type: 'choice', prompt: '트럭이 모퉁이를 돌려고 해요. 어떻게 할까요?', options: ['돌기 전에 빨리 건넌다', '한 걸음 물러서서 기다린다', '트럭 옆에 바짝 선다'], answer: 1, difficulty: 0.15, explain: '돌 때 뒷바퀴가 안쪽으로 지나가요.' },
            { type: 'short', prompt: '등굣길에서 큰 차를 만나는 곳 한 군데를 써요.' },
          ],
        },
        worksheet: {
          title: '큰 차 둘레에서',
          items: [
            { type: 'check', prompt: '내가 지킬 것에 표시해요.', options: ['모퉁이에서 물러서기', '버스 떠난 뒤 건너기', '후진하는 차와 거리 두기'] },
            { type: 'short', prompt: '큰 차 바로 옆에 서면 안 되는 까닭을 써요.' },
          ],
          easy: { note: '큰 차 가까이는 운전자가 못 봐요.', items: [{ type: 'draw', prompt: '큰 차에서 멀리 떨어져 기다리는 내 모습을 그려요.' }] },
        },
      }),
      X('wrap.poster', {
        title: '저학년에게 알려 줄 세 가지', method: '저학년에게 알려 줄 세 가지', tool: 'story', minutes: 6,
        levels: { easy: '동생에게 하는 말풍선 빈칸 하나에 알맞은 카드를 넣는다(카드 5장 중).', base: '말풍선 빈칸 둘을 채운다.', challenge: '말풍선 빈칸 셋을 채우고 고른 까닭을 한 문장씩 말한다.' },
        wrap: {
          teacher: '"1·2학년 동생에게 큰 차에 대해 꼭 알려 줄 말은 무엇일까요?" 말풍선을 채운 뒤 동생이 알아듣기 쉬운 말인지 소리 내어 읽어 보게 한다. "무서우니까 큰 차 근처에 가지 마"처럼 겁주는 말을 고르려는 학생에게 "무엇을 하면 되는지 알려 주는 말이 더 도움이 돼요"라고 말해 준다.',
          exitTicket: [
            FILLX('6학년이 동생에게 하는 말풍선을 채워요.', '6학년 형', [['큰 차 모퉁이에서는 ___', '뒤로 물러서요'], ['버스에서 내리면 ___', '떠난 뒤 건너요'], ['큰 차 바로 앞뒤는 ___', '운전자가 못 봐요']], ['뒤로 물러서요', '떠난 뒤 건너요', '운전자가 못 봐요', '빨리 뛰어가요', '버스 앞으로 가요'], '동생에게 알려 줘요'),
            { type: 'choice', prompt: '동생에게 하는 말로 가장 알맞은 것은?', options: ['큰 차는 무서워', '버스가 떠난 뒤 건너자', '빨리 지나가면 돼'], answer: 1, difficulty: 0.15, explain: '무엇을 하면 되는지 알려 주는 말이 좋아요.' },
            { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '동생에게 알려 줘요',
          items: [
            { type: 'short', prompt: '동생에게 알려 줄 큰 차 안전 한 가지를 동생 눈높이 말로 써요.' },
            { type: 'draw', prompt: '큰 차에서 떨어져 기다리는 모습을 동생에게 보여 줄 그림으로 그려요.' },
          ],
        },
      }),
    );
  }

  // ======== 5학년 · 자전거 사고의 원인과 예방 (별표 2 초등 교통안전 "교통수단(자전거, 대중교통 등)의 안전한 이용법 알기" + 표준안 자전거[타기·관리]) ========
  {
    const X = mk('bikerisk', 5);
    const P = (name, at, icon = 'dot') => ({ name, icon, at });
    // 가상 동네 칸 지도: 자전거 위험 지점 셋 + 헷갈리는 칸
    const BIKE = {
      cross: P('신호 없는 교차로', [2, 1]), park: P('주차된 차 줄', [4, 2], 'bus'), hill: P('언덕 내리막길', [0, 3], 'mountain'),
      home: P('우리 집', [0, 0], 'house'), school: P('학교', [5, 0], 'school'), lane: P('자전거 쉼터', [5, 3], 'park'), wide: P('넓은 공원 길', [2, 3], 'park'),
    };
    const BMAP = (keys) => ({ grid: [6, 4], title: '가상의 우리 동네 자전거 길', legend: false, places: keys.map((k) => BIKE[k]) });
    const SPOT = (prompt, place, d, more) => Object.assign({
      prompt, toolOptions: BMAP(['home', 'cross', 'park', 'hill', 'school']), target: { place }, difficulty: d,
      levels: {
        easy: { toolOptions: BMAP(['home', 'cross', 'park', 'hill']) },
        challenge: { toolOptions: BMAP(['home', 'cross', 'park', 'hill', 'school', 'lane', 'wide']) },
      },
    }, more);
    M.push(
      X('intro.case', {
        title: '자전거 사례 장면 잇기', method: '자전거 사례 장면 잇기', tool: 'story', minutes: 5,
        levels: { easy: '교사가 장면 3장(차 옆 지나기·문이 열림·급히 멈춤)만 짚으며 시연을 보고 원인을 말한다.', base: '장면 4장이 차례로 놓이는 시연을 보고 원인을 짝과 말한다.', challenge: '사례 속 사람마다(자전거 탄 아이·차 안 사람) 할 수 있었던 일을 짝과 말한다.' },
        intro: {
          teacher: '"자전거를 타고 주차된 차 옆을 지나는데 갑자기 문이 열리면 어떻게 될까요?" 시연 단추로 차 옆에 바짝 붙어 달려요 → 차 문이 열려요 → 급히 브레이크를 잡아요 → 넘어질 뻔해요 장면이 차례로 놓이는 모습을 보인다. "문을 연 사람 잘못이니 나는 상관없어요"라는 말이 나오면 "자전거 탄 사람이 미리 할 수 있었던 일은 없을까요?"라고 되물어 원인이 둘 다에게 있다는 점을 짚는다.',
          student: '장면을 보고 자전거 탄 아이와 차 안 사람이 저마다 무엇을 했으면 좋았을지 짝과 말해 보아요.',
          demo: { tool: 'story', options: { mode: 'order', slots: 4, title: '차 문이 열렸어요(지어낸 이야기)', cards: [{ id: 'close', text: '차 옆에 바짝 붙어요', motif: 'house' }, { id: 'door', text: '차 문이 열려요', motif: 'star' }, { id: 'brake', text: '급히 브레이크', motif: 'wind' }, { id: 'fall', text: '넘어질 뻔해요', motif: 'cloud' }], shuffle: false }, sequence: [{ order: ['close', 'door', 'brake', 'fall'] }] },
          art: art('a paper child riding a paper bicycle close to a row of parked paper cars while one car door swings open suddenly', '왜 부딪칠 뻔했을까?', 'wind', 'mint'),
        },
        notes: '이야기는 지어낸 사례다. 학생에게 자기가 넘어지거나 다친 일을 말하게 하지 않는다.',
      }),
      X('intro.helmet', {
        title: '넘어질 때 몸', method: '넘어질 때 몸', tool: 'body', minutes: 5,
        levels: { easy: '종이 몸에는 머리 칸이 없어 교사가 자기 머리를 짚으며 "가장 먼저 지킬 곳"이라고 말하고, 학생도 자기 머리를 짚는다.', base: '머리를 짚은 뒤 종이 몸에서 손목·팔꿈치·무릎 세 곳이 골라지는 시연을 보고 보호대와 짝 지어 말한다.', challenge: '안전모를 바르게(이마를 덮고 끈을 조여) 써야 하는 까닭을 짝과 말한다.' },
        intro: {
          teacher: '"자전거에서 넘어지면 몸의 어디가 먼저 땅에 닿을까요?" 먼저 모두 자기 머리를 손으로 짚게 하고 "여기는 안전모가 지켜요"라고 말한다. 시연 단추로 종이 몸의 손목 → 팔꿈치 → 무릎이 골라지는 모습을 보이고 손목·팔꿈치 보호대와 무릎 보호대를 잇는다. "가까운 데 갈 때는 안전모를 안 써도 돼요"라는 말에는 "넘어지는 곳이 멀리만 있을까요?"라고 되묻는다.',
          student: '내 머리를 손으로 짚고, 종이 몸에서 넘어질 때 땅에 먼저 닿는 곳을 짝과 말해 보아요.',
          demo: { tool: 'body', options: { mode: 'parts', parts: ['목', '어깨', '팔꿈치', '손목', '허리', '무릎', '발목'], names: true }, sequence: [{ parts: ['손목'] }, { parts: ['손목', '팔꿈치'] }, { parts: ['손목', '팔꿈치', '무릎'] }] },
          art: art('a paper child wearing a paper helmet, wrist guards and knee pads standing beside a paper bicycle', '넘어질 때 지킬 곳', 'star', 'peach'),
        },
        notes: '종이 몸에는 머리 칸이 없다. 머리는 학생이 자기 머리를 짚어 다루고, 종이 몸으로는 손목·팔꿈치·무릎을 고른다.',
      }),
      X('activity.spots', {
        title: '자전거 위험 지점 지도', method: '자전거 위험 지점 지도', tool: 'map', minutes: 15,
        levels: { easy: '칸 지도에 지점 4곳(집과 위험 지점 셋)만 있고, 문항마다 원인에 맞는 위험 지점 하나에 핀을 꽂는다.', base: '학교 칸까지 5곳 가운데 원인에 맞는 위험 지점에 핀을 꽂는다(문항 3개).', challenge: '헷갈리는 칸(자전거 쉼터·넓은 공원 길)이 더해진 7곳에서 고르고, 피해 갈 다른 길은 모둠에서 말로 정한다.' },
        activity: {
          title: '원인에 맞는 자전거 위험 지점 찾기', tool: 'map',
          teacher: '"차 문이 갑자기 열릴 수 있는 곳은 지도의 어디일까요?" 문항의 원인을 소리 내어 읽고 그 원인이 생기는 칸을 찾게 한다. "넓은 길은 다 안전해요"라는 학생에게 "넓어도 내리막이면 속도가 어떻게 될까요?"라고 묻는다. 셋째 문항 뒤에 집에서 학교까지 위험 지점을 피해 가는 길을 손가락으로 짚어 보게 한다.',
          task: '문항에 적힌 원인을 읽고, 그 원인으로 자전거 사고가 나기 쉬운 지점에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            SPOT('양쪽에서 차와 자전거가 갑자기 만날 수 있는 곳에 핀을 꽂아요.', '신호 없는 교차로', 0.2),
            SPOT('차 문이 갑자기 열릴 수 있는 곳에 핀을 꽂아요.', '주차된 차 줄', 0.2),
            SPOT('속도가 저절로 빨라져 멈추기 어려운 곳에 핀을 꽂아요.', '언덕 내리막길', 0.25, { conclude: '교차로·주차된 차 옆·내리막에서는 미리 속도를 줄이고 살펴요.' }),
            { prompt: '모둠에서 집에서 학교까지 위험 지점을 피해 가는 길을 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '위험 지점과 원인을 써요.', columns: ['위험 지점', '원인'], cells: [['교차로', ''], ['주차된 차 옆', ''], ['내리막', '']] }] },
        notes: '칸 지도는 가상의 동네다. 수업 뒤 우리 동네에서 비슷한 지점을 떠올려 보게 한다.',
      }),
      X('activity.cause', {
        title: '자전거 사고 원인과 예방 잇기', method: '원인과 예방 잇기', tool: 'mindmap', minutes: 14,
        levels: { easy: '가지 2개(교차로·차 문)에 원인 카드와 예방 카드를 잇는다.', base: '가지 3개(교차로·차 문·내리막)에 원인 카드와 예방 카드를 잇는다.', challenge: '가지 3개에 잇되 섞인 함정 카드를 빼고, 예방 카드 하나를 내가 직접 고친 말로 바꿔 말한다.' },
        activity: {
          title: '사고 장소마다 원인·예방 카드 잇기', tool: 'mindmap',
          teacher: '"교차로에서 자전거 사고는 왜 날까요? 그럼 어떻게 막을까요?" 원인 카드를 먼저 잇고, 같은 가지에 예방 카드를 이어 "○○ 때문에 사고가 나니까 △△해요"로 소리 내어 말하게 한다. "브레이크만 좋으면 내리막도 괜찮아요"라는 학생에게 "빠를수록 브레이크를 잡아도 더 나아가요. 미리 속도를 줄이는 것과 무엇이 다를까요?"라고 묻는다.',
          task: '사고 장소 가지마다 알맞은 원인 카드와 예방 카드를 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            MATCH('사고 장소마다 원인 카드를 이어요.', '자전거 사고 원인', [['교차로', '좌우를 안 살폈어요'], ['차 문', '차에 바짝 붙어 달렸어요'], ['내리막', '속도를 안 줄였어요']], '자전거가 새것이에요', 0.2),
            MATCH('사고 장소마다 예방 카드를 이어요.', '자전거 사고 예방', [['교차로', '멈추고 좌우 살피기'], ['차 문', '차와 거리 두고 달리기'], ['내리막', '미리 속도 줄이기']], '더 빨리 지나가기', 0.25, { conclude: '사고가 나는 까닭을 알면 그 앞에서 미리 막을 수 있어요.' }),
            { prompt: '예방 카드 하나를 골라 내가 직접 고친 말로 바꿔 짝에게 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '장소마다 원인과 예방을 써요.', columns: ['장소', '원인', '예방'], cells: [['교차로', '', ''], ['차 문', '', ''], ['내리막', '', '']] }] },
      }),
      X('activity.downhill', {
        title: '내리막에서 친구가 앞서가요', method: '갈림길: 내리막에서 친구가 앞서가요', tool: 'dilemma', minutes: 15,
        levels: { easy: '갈림길 1번(따라 달릴지 속도를 줄일지)에서 고르고 근거 한 장을 고른다.', base: '갈림길 2번(앞에 횡단보도)을 지나 근거를 고른다.', challenge: '갈림길 3번까지 지나 근거를 모두 고르고, 다른 선택의 결과도 끝까지 따라가 견준다.' },
        activity: {
          title: '갈림길: 내리막에서 친구가 앞서가요', tool: 'dilemma',
          teacher: '"친구가 \'빨리 와!\' 하고 앞서가면 따라가고 싶은 마음이 들지요. 그래도 내리막에서 빨라지면 무엇이 어려워질까요?" 고를 때마다 결과를 소리 내어 읽게 한다. "브레이크가 좋으니 괜찮아요"라는 학생에게 "빠를 때 잡으면 바로 설까요?"라고 묻는다. 횡단보도에서는 내려서 끌고 건너는 까닭도 짚는다.',
          task: '내리막 상황의 갈림길마다 고르고, 결과를 읽은 뒤 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '내리막길 자전거',
            steps: [
              { text: '긴 내리막에서 친구가 "빨리 내려가자!" 하며 앞서 달려 나가요.', motif: 'wind',
                good: ['slow', '브레이크를 살살 잡아 속도를 줄인다', '내 속도로 천천히 내려가요.', [['나', '멈출 수 있어요', 1]]],
                bad: ['race', '친구를 따라 힘껏 달린다', '속도가 너무 빨라져 손이 떨려요.', '내리막에서 빨라지면 멈추기 어려워요.', [['나', '넘어질 위험', -1]]] },
              { text: '내리막 끝에 횡단보도가 보이고, 사람들이 건너고 있어요.', motif: 'star',
                good: ['stop', '횡단보도 앞에서 멈춰 내린다', '사람들이 다 건넌 뒤 끌고 건너요.', [['걷는 사람', '놀라지 않아요', 1]]],
                bad: ['ring', '벨을 울리며 사이로 지나간다', '걷던 사람이 놀라 비켜서다 휘청여요.', '횡단보도에서는 내려서 끌고 건너요.', [['걷는 사람', '부딪칠 위험', -1]]] },
              { text: '앞서간 친구가 다음 내리막에서도 경주하자고 해요.', motif: 'house',
                good: ['say', '천천히 가자고 말하고 내 속도로 간다', '친구도 속도를 줄여 함께 가요.', [['친구와 나', '함께 안전해요', 1]]],
                bad: ['follow', '지기 싫어 또 경주한다', '굽은 길에서 멈추지 못할 뻔해요.', '경주는 앞을 살필 틈을 없애요.', [['친구와 나', '다칠 위험', -1]]] },
            ],
            ending: '내 속도로 내려간 판단 덕분에 친구와 안전하게 집에 왔어요.',
            reasons: [{ id: 'speed', text: '빠를수록 멈추기 어렵다' }, { id: 'walk', text: '횡단보도에서는 내려서 끌고 간다' }, { id: 'brake', text: '브레이크가 좋으면 괜찮다', why: '빠를 때는 브레이크를 잡아도 더 나아가요.' }, { id: 'friend', text: '친구가 하니 따라 해도 된다', why: '친구를 따라가면 내가 살필 틈이 없어요.' }],
            good: ['speed', 'walk'],
            talk: '모둠에서 "친구가 경주하자고 할 때 뭐라고 말할까?"를 한 문장씩 말해요.',
            conclude: '내리막에서는 미리 속도를 줄이고, 횡단보도에서는 내려서 끌고 건너요.',
          }),
        },
        worksheet: { items: [{ type: 'choice', prompt: '내리막 끝 횡단보도에 사람들이 있어요. 어떻게 할까요?', options: ['벨을 울리며 지나간다', '멈춰 내려서 끌고 건넌다', '속도를 더 낸다'], answer: '멈춰 내려서 끌고 건넌다' }] },
      }),
      X('activity.check', {
        title: '타기 전·타는 중 점검', method: '타기 전·타는 중 점검', tool: 'timer', minutes: 14,
        levels: { easy: '점검 칸 2개를 표시하고 순서 카드 2장을 놓는다.', base: '점검 칸 3개(브레이크·바퀴·전조등)를 표시하고 순서 카드 3장을 놓는다.', challenge: '점검 3개·순서 3장을 마친 뒤, 짝의 점검표를 보고 빠진 것을 알려 준다(셋째 문항).' },
        activity: {
          title: '자전거 점검과 교차로 차례', tool: 'timer',
          teacher: '"자전거를 타기 전에 무엇을 손으로 확인해 볼까요?" 점검 칸을 하나씩 소리 내어 읽고 실제 자전거라면 어떻게 확인할지 손동작으로 해 보게 한다. "어제 탔으니 오늘은 안 봐도 돼요"라는 학생에게 "밤사이 바퀴 바람이 빠졌을 수도 있지 않을까요?"라고 묻는다. 순서 카드는 교차로 앞에서 속도부터 줄인다는 점을 짚는다.',
          task: '타기 전 점검 칸을 모두 표시하고, 타는 중 할 일 카드를 바른 차례로 놓아요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '타기 전 점검을 모두 표시하고, 교차로 앞 차례를 놓아요.', toolOptions: { title: '자전거 타기 전·교차로 앞', safety: ['브레이크가 잘 잡혀요', '바퀴 바람이 넉넉해요', '전조등이 켜져요'], cards: ['교차로 건너기', '교차로 앞 속도 줄이기', '좌우 살피기'] }, target: { safety: true, order: ['교차로 앞 속도 줄이기', '좌우 살피기', '교차로 건너기'] }, difficulty: 0.2,
              levels: { easy: { prompt: '타기 전 점검 두 칸을 표시하고, 교차로 앞 차례를 놓아요.', toolOptions: { safety: ['브레이크가 잘 잡혀요', '바퀴 바람이 넉넉해요'], cards: ['교차로 건너기', '교차로 앞 속도 줄이기'] }, target: { safety: true, order: ['교차로 앞 속도 줄이기', '교차로 건너기'] } } } },
            { prompt: '출발 전 몸 점검을 표시하고, 주차된 차 옆을 지나는 차례를 놓아요.', toolOptions: { title: '출발 전·주차된 차 옆', safety: ['안전모 끈을 조였어요', '바지 끝이 체인에 안 닿아요', '벨 소리가 나요'], cards: ['천천히 지나가기', '차와 거리 두기', '차 안에 사람 있나 보기'] }, target: { safety: true, order: ['차와 거리 두기', '차 안에 사람 있나 보기', '천천히 지나가기'] }, difficulty: 0.25,
              levels: { easy: { prompt: '출발 전 몸 점검 두 칸을 표시하고, 주차된 차 옆 차례를 놓아요.', toolOptions: { safety: ['안전모 끈을 조였어요', '바지 끝이 체인에 안 닿아요'], cards: ['천천히 지나가기', '차와 거리 두기'] }, target: { safety: true, order: ['차와 거리 두기', '천천히 지나가기'] } } },
              conclude: '타기 전에는 자전거와 몸을 점검하고, 타는 중에는 위험한 곳 앞에서 속도부터 줄여요.' },
            { prompt: '짝의 점검표를 보고 빠진 점검 하나를 알려 줘요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '자전거를 타기 전에 점검할 것에 표시해요.', options: ['브레이크', '바퀴 바람', '전조등', '안전모 끈'] }] },
        notes: '실제 자전거가 있으면 교실 밖에서 브레이크·바퀴를 함께 확인해 보게 한다.',
      }),
      X('wrap.plan', {
        title: '나의 자전거 실천 계획', method: '나의 자전거 실천 계획', tool: 'timeline', minutes: 6,
        levels: { easy: '실천 카드 3장을 타기 전·타는 중·다 탄 뒤 칸에 나눈다.', base: '실천 카드 5장을 세 칸에 나눈다.', challenge: '실천 카드 6장을 나누고, 가족과 함께 지킬 항목 하나를 활동지 요일 칸에 더한다.' },
        wrap: {
          teacher: '"오늘 배운 것 가운데 이번 주에 자전거를 탈 때 무엇부터 지킬까요?" 카드를 칸에 나눈 뒤 활동지의 요일 칸(월·수·금·주말)에 내가 할 일을 적게 한다. "다 탄 뒤에는 할 일이 없어요"라는 학생에게 "다음에 탈 때를 위해 무엇을 해 두면 좋을까요?"라고 묻는다.',
          exitTicket: [
            TLX('자전거 실천 카드를 타기 전·타는 중·다 탄 뒤 칸에 나누어요.', ['타기 전', '타는 중', '다 탄 뒤'], { '타기 전': ['브레이크 점검', '안전모 끈 확인'], '타는 중': ['교차로 앞 속도 줄이기', '차와 거리 두기'], '다 탄 뒤': ['정해진 곳에 세우기', '고장 나면 어른께'] }, ['브레이크 점검', '교차로 앞 속도 줄이기', '정해진 곳에 세우기'], ['브레이크 점검', '안전모 끈 확인', '교차로 앞 속도 줄이기', '차와 거리 두기', '정해진 곳에 세우기']),
            { type: 'choice', prompt: '자전거를 타기 전에 가장 먼저 할 일은 무엇인가요?', options: ['친구와 경주 약속', '브레이크와 바퀴 점검', '벨을 크게 울리기'], answer: 1, difficulty: 0.15, explain: '타기 전에 자전거가 안전한지 먼저 점검해요.' },
            { type: 'short', prompt: '이번 주에 가족과 함께 지킬 자전거 약속 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '나의 자전거 실천 계획',
          items: [
            { type: 'table', prompt: '요일마다 지킬 일을 써요.', columns: ['월', '수', '금', '주말'], cells: [['', '', '', '']] },
            { type: 'check', prompt: '이번 주에 할 것에 표시해요.', options: ['타기 전 점검', '교차로 앞 속도 줄이기', '안전모 끈 확인'] },
          ],
          easy: { note: '타기 전·타는 중·다 탄 뒤를 떠올려요.', items: [{ type: 'draw', prompt: '안전모를 쓰고 자전거를 점검하는 내 모습을 그려요.' }] },
        },
        notes: '요일별 계획은 학생마다 달라 채점하지 않는다. 교구에서는 실천 카드를 탈 때의 차례로 나누고, 요일 칸은 활동지에 쓴다.',
      }),
      X('wrap.tell', {
        title: '오늘 바뀐 자전거 생각', method: '오늘 바뀐 생각', tool: 'emotion', minutes: 6,
        levels: { easy: '생각 카드 2장을 \'전에는 그랬어요\'·\'이제는 달라요\' 칸에 나눈다.', base: '생각 카드 4장을 두 칸에 나눈다.', challenge: '생각 카드 5장을 나누고, 바뀐 까닭을 친구 생각과 견주어 말한다.' },
        wrap: {
          teacher: '"자전거는 작아서 덜 위험하다고 생각했던 사람이 있나요? 지금은 어때요?" 생각 카드를 나눈 뒤 한두 명이 바뀐 까닭을 말하게 하고, 다른 친구 생각과 견주게 한다. "보도에서는 마음대로 달려도 돼요" 카드를 \'이제는\' 칸에 넣는 학생에게 "보도에서 걷는 사람은 어떨까요?"라고 되묻는다.',
          exitTicket: [
            AS_EXIT('emotion', SORT('자전거 생각 카드를 전에는·이제는 칸에 나누어요.', { slots: ['전에는 그랬어요', '이제는 달라요'], mode: 'sort', groups: { '전에는 그랬어요': ['작아서 덜 위험해요', '브레이크만 좋으면 돼요'], '이제는 달라요': ['미리 속도를 줄여요', '걷는 사람을 먼저 지켜요'] }, easy: 1, extra: { '전에는 그랬어요': ['보도는 마음대로 달려요'] } }, 0.15)),
            { type: 'choice', prompt: '주차된 차 옆을 자전거로 지날 때 가장 알맞은 것은?', options: ['차에 바짝 붙어 빨리', '거리를 두고 천천히', '벨만 계속 울리기'], answer: 1, difficulty: 0.15, explain: '차 문이 열려도 부딪치지 않게 거리를 두고 천천히 지나요.' },
            { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '바뀐 내 자전거 생각',
          items: [
            { type: 'table', prompt: '내 생각이 어떻게 바뀌었는지 써요.', columns: ['전에는', '이제는'], cells: [['', '']] },
            { type: 'short', prompt: '친구에게 알려 줄 자전거 안전 한 문장을 써요.' },
          ],
        },
      }),
    );
  }

  // ======== 5학년 · 우리 통학로 안전 조사와 개선 제안 (별표 2 초등 교통안전 "안전한 통학로 알기" + 표준안 보행자[보행], 모둠 조사는 재량) ========
  {
    const X = mk('routeaudit', 5);
    // 학교 둘레 칸 지도(가상): 출발·도착 후보와 조사 구간의 지점
    const P = (name, at, icon = 'dot', legend) => Object.assign({ name, icon, at }, legend ? { legend } : {});
    const AROUND = [
      P('학교 정문', [5, 0], 'school', '학교'), P('아파트 정문', [0, 3], 'apartment', '아파트'), P('버스 정류장', [0, 0], 'bus', '정류장'),
      P('문구점 앞', [3, 1], 'market', '가게'), P('큰길 횡단보도', [2, 2]), P('놀이터 옆 길', [4, 3], 'park', '놀이터'),
    ];
    // 조사 구간 지도: 위험 지점 넷 + 안전한 칸(도전에서 헷갈리는 칸 더함)
    const ROUTE = [
      P('보도 끊긴 골목', [1, 0]), P('불법 주차 줄', [3, 0]), P('신호 없는 횡단보도', [2, 2]), P('어두운 가로등 길', [4, 3]),
      P('넓은 보도', [0, 2]), P('학교 정문', [5, 1], 'school', '학교'),
    ];
    const ROUTE_HARD = [...ROUTE, P('보도 넓은 골목', [0, 0]), P('신호 있는 횡단보도', [5, 3]), P('밝은 가로등 길', [1, 3])];
    const PIN = (prompt, place, d, more) => Object.assign({
      prompt, toolOptions: { grid: [6, 4], title: '조사 구간(가상)', places: ROUTE, legend: false }, target: { place }, difficulty: d,
      levels: { challenge: { toolOptions: { places: ROUTE_HARD } } },
    }, more);
    const FIX = [['주차 차량 많음', 9], ['보도 끊김', 7], ['어두운 가로등', 4], ['신호등 없음', 3]];
    const FIX_B = [['주차 차량 많음', 6], ['보도 끊김', 8], ['어두운 가로등', 2], ['신호등 없음', 5]];
    // 기준표 4개짜리 글쓰기: 쉬움 = 기준 2개 + 문장 틀, 기본 = 기준 4개, 도전 = 기준 4개 + 근거 낱말 꼭 넣기
    const RUB4 = (prompt, { topic, starter, crit, must, chars, title }, d, more) => ({
      prompt, toolOptions: { topic, minChars: chars[0], maxChars: chars[1], title }, target: { selfCheck: crit, chars }, difficulty: d,
      levels: {
        easy: { prompt: `${cut(prompt)}(문장 틀을 써도 돼요).`, toolOptions: { starter }, target: { selfCheck: crit.slice(0, 2), chars: [Math.max(10, chars[0] - 20), chars[1]] } },
        challenge: { prompt: `${cut(prompt)}. 근거로 그래프나 지도 자료를 넣어요.`, target: { selfCheck: crit, chars: [chars[0] + 10, chars[1]], mustInclude: must } },
      },
      ...more,
    });
    const CYCLE = ['조사하기', '정리하기', '제안하기', '실천하기', '돌아보기'];
    M.push(
      X('intro.base', {
        title: '조사할 통학로 정하기', method: '조사할 통학로 정하기', tool: 'map', minutes: 5,
        levels: { easy: '교사가 구간 하나(아파트 정문 → 학교 정문)를 정해 주고 시작·끝 칸을 함께 짚는다.', base: '모둠이 구간 하나를 정하고, 둘레 칸 이름(문구점 앞·큰길 횡단보도)을 소리 내어 읽는다.', challenge: '두 구간(아파트 쪽·정류장 쪽)을 견주어 조사할 구간을 고르고 그 까닭을 말한다.' },
        intro: {
          teacher: '"우리 반 친구들이 가장 많이 걷는 길은 어디일까요?" 시연 단추로 핀이 아파트 정문(시작) → 학교 정문(끝)으로 옮겨 가는 모습을 보인다. "위험한 곳은 어른들이 다 알아요"라는 말이 나오면 "날마다 그 길을 걷는 사람은 누구일까요? 우리 눈으로 본 것도 근거가 돼요"라고 되묻는다. 실제 조사는 선생님과 함께 다니고, 오늘은 그림 지도로 구간을 정한다고 밝힌다.',
          student: '우리 모둠이 조사할 길의 시작과 끝을 정하고, 그 길을 고른 까닭을 짝에게 말해 보아요.',
          demo: { tool: 'map', options: { grid: [6, 4], places: AROUND, title: '학교 둘레(가상)', legend: false }, sequence: [{ pin: [0, 3] }, { pin: [5, 0] }] },
          art: art('a paper school neighborhood map with a dotted paper path from an apartment gate to the school gate and two small flags', '어느 길을 조사할까?', 'house', 'mint'),
        },
        notes: '지도는 가상의 학교 둘레다. 실제 통학로 조사는 반드시 교사·보호자와 함께 다니고, 학생끼리 찻길을 조사하지 않는다.',
      }),
      X('intro.roles', {
        title: '조사 모둠 역할 정하기', method: '조사 모둠 역할 정하기', tool: 'story', minutes: 5,
        levels: { easy: '교사가 역할 2개(지도·기록)만 짚으며 말풍선이 채워지는 시연을 본다.', base: '역할 4개(지도·기록·그림·발표) 말풍선이 채워지는 시연을 보고 모둠 역할을 나눈다.', challenge: '역할마다 지킬 안전 약속(선생님 곁에서 걷기 등)을 한 가지씩 말로 더한다.' },
        intro: {
          teacher: '"조사를 할 때 모두가 같은 일을 하면 어떻게 될까요?" 시연 단추로 말풍선에 지도·기록·그림·발표 역할이 차례로 들어가는 모습을 보인다. "기록하는 사람은 찻길 가까이 가서 자세히 봐야 해요"라는 말에는 "자세히 보는 것보다 먼저 지킬 것은 무엇일까요? 보도 안쪽, 선생님 곁에서 봐요"라고 되묻는다. 사진 대신 그림으로 남긴다는 점도 밝힌다.',
          student: '우리 모둠에서 내가 맡고 싶은 역할과 그 역할에서 지킬 약속을 하나 말해 보아요.',
          demo: { tool: 'story', options: { mode: 'fill', title: '조사 모둠 역할', slots: [{ id: 'b1', who: '가온', label: '나는 ___ 담당이야.' }, { id: 'b2', who: '나래', label: '나는 본 것을 적는 ___ 담당.' }, { id: 'b3', who: '다솜', label: '사진 대신 ___로 남길게.' }, { id: 'b4', who: '로운', label: '정리해서 ___할게.' }], cards: ['지도', '기록', '그림', '발표'] }, sequence: [{ fill: { b1: '지도', b2: '기록', b3: '그림', b4: '발표' } }] },
          art: art('four paper children around a paper clipboard and a map, each holding a different tool: a map, a pencil, a crayon and a megaphone', '누가 무엇을 맡을까?', 'star', 'buttercup'),
        },
        notes: '이름은 가명이다. 조사 중 사진을 찍지 않고 그림·글로 남긴다(사람 얼굴·차 번호판을 남기지 않는다).',
      }),
      X('intro.time', {
        title: '조사 시간 계획', method: '조사 시간 계획', tool: 'clock', minutes: 5,
        levels: { easy: '교사가 정각 시각(8시 시작·9시 끝)을 시계로 보이며 함께 정한다.', base: '10분 단위로 시작·끝 시각을 정하는 시연을 보고 모둠 시각을 정한다.', challenge: '5분 단위로 구간마다 다닐 시각을 나누어 말한다.' },
        intro: {
          teacher: '"통학로가 가장 붐비는 때는 언제일까요?" 시연 단추로 시계가 8시 10분 → 8시 40분으로 움직이는 모습을 보이고 등교 시간대에 조사하는 까닭을 묻는다. "아무 때나 가도 결과가 같아요"라는 말에는 "아무도 안 다니는 낮과 등교 시간은 길 모습이 같을까요?"라고 되묻는다. 조사는 선생님과 함께 다닐 수 있는 시각으로 정한다고 밝힌다.',
          student: '조사를 시작할 시각과 끝낼 시각을 정하고, 그때를 고른 까닭을 말해 보아요.',
          demo: { tool: 'clock', options: { minuteStep: 10, showDigital: true }, sequence: [{ h: 8, m: 10 }, { h: 8, m: 40 }] },
          art: art('a paper wall clock above a paper school gate with children arriving in the morning', '언제 조사할까?', 'sun', 'peach'),
        },
        notes: '시각은 우리 반 약속으로 정한다. 조사는 교사가 함께 다닐 수 있는 시간에만 한다.',
      }),
      X('activity.pins', {
        title: '위험 지점 조사 지도', method: '위험 지점 조사 지도', tool: 'map', minutes: 15,
        levels: { easy: '조사 지도(가상)에 지점 이름이 보이고, 핀을 놓으면 칸 이름이 읽힌다.', base: '까닭 카드를 읽고 위험 지점 세 곳에 차례로 핀을 꽂는다.', challenge: '이름이 비슷한 안전한 칸(보도 넓은 골목·신호 있는 횡단보도)이 섞인 지도에서 위험 지점을 가려 꽂는다.' },
        activity: {
          title: '조사 구간 지도에 위험 지점 꽂기', tool: 'map',
          teacher: '"보도가 끊긴 곳에서는 사람이 어디로 걷게 될까요?" 핀을 꽂을 때마다 그 지점이 왜 위험한지 까닭을 한 문장으로 말하게 한다. "넓은 길이 더 위험해요, 차가 많으니까요"라는 학생에게 "넓은 보도가 있으면 사람은 어디로 걸을까요? 사람과 차가 가까워지는 곳을 찾아요"라고 묻는다. 마지막 문항에서는 지점마다 위험 정도를 세 단계로 매겨 모둠이 말하게 한다.',
          task: '조사 구간 지도(가상)를 보고, 까닭에 맞는 위험 지점에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            PIN('보도가 없어 차와 가까이 걷게 되는 지점에 핀을 꽂아요.', '보도 끊긴 골목', 0.2),
            PIN('주차된 차가 앞을 가려 건너는 아이가 안 보이는 지점에 핀을 꽂아요.', '불법 주차 줄', 0.25),
            PIN('신호등이 없어 차가 멈출지 알기 어려운 지점에 핀을 꽂아요.', '신호 없는 횡단보도', 0.25, { conclude: '사람과 차가 가까워지거나 앞이 가려지는 곳이 위험 지점이에요.' }),
            { prompt: '모둠에서 지점마다 위험 정도를 세 단계(조금·보통·많이)로 매겨 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '조사한 위험 지점과 까닭을 써요.', columns: ['위험 지점', '까닭'], cells: [['', ''], ['', '']] }] },
        notes: '조사 지도는 가상이다. 실제 통학로 조사는 교사와 함께 보도 안쪽에서만 하고, 학생끼리 찻길에 나가 조사하지 않는다.',
      }),
      X('activity.check', {
        title: '통학로 점검표', method: '통학로 점검표', tool: 'kitchen', minutes: 14,
        levels: { easy: '점검표에서 점검할 항목 3개를 고른다(섞인 함정 항목은 두지 않는다).', base: '점검할 항목 5개를 고르고 함정 항목은 두지 않는다.', challenge: '항목 5개를 고른 뒤 우리 모둠만의 점검 항목 하나를 말로 더한다.' },
        activity: {
          title: '통학로 점검표 만들기', tool: 'kitchen',
          teacher: '"점검표에 \'가게가 많아요\'를 넣으면 안전 조사에 도움이 될까요?" 모둠이 항목을 소리 내어 읽고 안전과 관계있는 것만 표시하게 한다. "느낌으로 위험하면 됐지, 점검표는 필요 없어요"라는 학생에게 "모둠마다 느낌이 다르면 무엇을 근거로 견줄까요? 같은 점검표로 보면 견줄 수 있어요"라고 묻는다.',
          task: '통학로를 조사할 때 쓸 점검 항목만 골라 점검표에 표시해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            CHK('걷는 길을 점검할 항목만 표시해요.', '걷는 길 점검', ['보도가 끊겨요', '가로등이 어두워요', '주차 차량이 많아요', '앞을 가리는 간판', '보도에 물건이 쌓여요'], ['가게가 많아요', '나무가 예뻐요'], { easy: 3, base: 5 }, 0.2),
            CHK('건너는 곳을 점검할 항목만 표시해요.', '건너는 곳 점검', ['신호등이 없어요', '횡단보도 선이 지워졌어요', '모퉁이가 안 보여요', '차가 빨리 달려요', '기다릴 자리가 좁아요'], ['간판이 커요', '꽃집이 있어요'], { easy: 3, base: 5 }, 0.25, { conclude: '같은 점검표로 보면 느낌이 아니라 근거로 견줄 수 있어요.' }),
            { prompt: '우리 모둠만의 점검 항목 하나를 정해 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '우리 모둠 점검표에 넣을 항목에 표시해요.', options: ['보도가 끊겨요', '신호등이 없어요', '가로등이 어두워요', '주차 차량이 많아요'] }] },
      }),
      X('activity.graph', {
        title: '조사 결과 그래프', method: '조사 결과 그래프', tool: 'chart', minutes: 15,
        levels: { easy: '항목 3개 막대그래프(가상)를 완성하고 막대 끝 값이 보인다.', base: '항목 4개 막대그래프(가상)를 완성하고 가장 많이 나온 문제를 찾는다.', challenge: '다른 모둠 그래프(가상)와 견주어 두 모둠에 함께 많이 나온 문제를 고른다.' },
        activity: {
          title: '모둠 점검 결과 막대그래프', tool: 'chart',
          teacher: '"이 수는 수업을 위해 꾸민 가상 자료예요. 우리 구간에서 가장 많이 나온 문제는 무엇일까요?" 표를 읽고 막대를 세운 뒤 막대 끝을 눈금에 맞춰 읽게 한다. "가장 많이 나온 것만 고치면 끝이에요"라는 학생에게 "적게 나와도 크게 위험한 곳은 없을까요? 수와 위험 정도를 함께 봐요"라고 묻는다.',
          task: '모둠 점검 결과(가상)를 막대그래프로 그리고, 가장 많이 나온 문제를 찾아요.', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            { prompt: '표를 보고 점검 결과 막대그래프를 완성해요(가상 자료).', toolOptions: { type: 'bar', mode: 'build', title: '우리 모둠 점검 결과(가상)', unit: '곳', data: FIX, given: [0] }, target: { build: true }, difficulty: 0.25,
              levels: { easy: { toolOptions: { data: FIX.slice(0, 3) } } } },
            { prompt: '우리 모둠 조사(가상)에서 가장 많이 나온 문제는 무엇인가요?', toolOptions: { type: 'bar', mode: 'read', title: '우리 모둠 점검 결과(가상)', unit: '곳', data: FIX, choices: FIX.map((x) => x[0]), question: '가장 많은 문제는?' }, target: { pick: 0 }, difficulty: 0.15,
              levels: { easy: { toolOptions: { data: FIX.slice(0, 3), choices: FIX.slice(0, 3).map((x) => x[0]) } } } },
            { prompt: '옆 모둠 조사(가상)에서 가장 많이 나온 문제는 무엇인가요?', toolOptions: { type: 'bar', mode: 'read', title: '옆 모둠 점검 결과(가상)', unit: '곳', data: FIX_B, choices: FIX_B.map((x) => x[0]), question: '가장 많은 문제는?' }, target: { pick: 1 }, difficulty: 0.2,
              levels: {
                easy: { toolOptions: { data: FIX_B.slice(0, 3), choices: FIX_B.slice(0, 3).map((x) => x[0]) } },
                challenge: { prompt: '두 모둠 그래프(가상)에 함께 많이 나온 문제를 골라요.', toolOptions: { choices: ['어두운 가로등', '보도 끊김', '신호등 없음'], question: '두 모둠 공통 문제는?', why: ['우리 모둠 4곳, 옆 모둠 2곳으로 적어요.', '', '우리 모둠에서는 가장 적어요.'] }, target: { pick: 1 } },
              },
              conclude: '조사 결과를 그래프로 정리하면 무엇부터 고칠지 근거가 생겨요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '그래프(가상)에서 가장 많이 나온 문제와 그 수를 써요.' }] },
        notes: '그래프 수치는 수업용 가상 자료다. 실제 조사 결과를 쓸 때도 학생 이름·집 위치는 적지 않는다.',
      }),
      X('activity.cause', {
        title: '문제와 해결 잇기', method: '문제와 해결 잇기', tool: 'mindmap', minutes: 14,
        levels: { easy: '문제 가지 2개에 해결 카드를 한 장씩 잇는다.', base: '문제 가지 3개에 해결 카드를 잇는다.', challenge: '함정 카드 하나를 빼고 잇고, 해결 카드를 누가 할 일(우리·학교·지역)로 나눈다.' },
        activity: {
          title: '통학로 문제에 해결 잇기', tool: 'mindmap',
          teacher: '"주차 차량이 많은 문제는 누가 어떻게 고칠 수 있을까요?" 가지에 카드를 이은 뒤 해결마다 \'누가\'를 붙여 소리 내어 읽게 한다. "위험한 곳은 어른만 고칠 수 있어요"라는 학생에게 "고치는 동안 우리가 지킬 일은 없을까요? 알리는 것도 우리가 할 수 있어요"라고 묻는다.',
          task: '우리 통학로 문제 가지마다 알맞은 해결 카드를 잇고, 누가 할 일인지 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            MATCH('문제 가지마다 알맞은 해결 카드를 이어요.', '우리 통학로', [['신호 없는 횡단보도', '횡단보도 신호등 요청'], ['보도 끊긴 골목', '보행로 표시 요청'], ['불법 주차 줄', '주차 단속 요청']], '길을 막고 놀기', 0.25),
            SORT('해결 카드를 누가 할 일로 나누어요.', { topic: '누가 할까', slots: ['우리', '학교', '지역'], groups: { 우리: ['보도 안쪽으로 걷기', '위험한 곳 알리기'], 학교: ['안전 지도 게시', '교통안전 수업'], 지역: ['신호등 설치', '주차 단속'] }, easy: 1, extra: { 우리: ['모퉁이에서 멈추기'], 지역: ['가로등 고치기'] } }, 0.3, { conclude: '해결에는 우리·학교·지역이 할 일이 함께 있어요.' }),
            { prompt: '모둠에서 우리가 내일부터 할 해결 하나를 정해 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '문제와 해결, 할 사람을 써요.', columns: ['문제', '해결', '누가'], cells: [['', '', ''], ['', '', '']] }] },
      }),
      X('activity.debate', {
        title: '무엇부터 고칠까', method: '무엇부터 고칠까', tool: 'dilemma', minutes: 15,
        levels: { easy: '갈림길 1번(어느 곳부터 고칠지)에서 고르고 근거 한 장을 고른다.', base: '갈림길 2번(고치는 동안 할 일)을 지나 근거를 고른다.', challenge: '갈림길 3번까지 지나 근거를 모두 고르고, 다른 모둠이 고른 길의 결과와 견주어 말한다.' },
        activity: {
          title: '갈림길: 무엇부터 고칠까', tool: 'dilemma',
          teacher: '"올해는 한 곳만 먼저 고칠 수 있대요. 무엇을 기준으로 고를까요?" 고를 때마다 결과 칸의 \'아이들이 다니는 길\'이 어떻게 달라지는지 읽게 한다. "우리 집 앞부터 고쳐야 해요"라는 학생에게 "가장 많은 친구가 위험하게 다니는 곳은 어디였나요? 조사 자료를 다시 봐요"라고 묻는다. 정해진 순서가 없는 일도 근거로 정한다는 점을 짚는다.',
          task: '갈림길마다 고칠 곳과 할 일을 고르고, 결과를 읽은 뒤 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '무엇부터 고칠까',
            steps: [
              { text: '올해는 한 곳만 먼저 고칠 수 있어요. 많은 아이가 건너는 신호 없는 횡단보도와 공원 뒤 낡은 벽이 있어요.', motif: 'house',
                good: ['cross', '많이 건너는 횡단보도부터 고친다', '신호등이 생겨 아이들이 기다렸다 건너요.', [['등교하는 아이들', '덜 위험해요', 1]]],
                bad: ['wall', '보기 좋게 벽부터 칠한다', '벽은 예뻐졌지만 횡단보도는 그대로예요.', '많이 다니는 위험한 곳이 먼저예요.', [['등교하는 아이들', '여전히 위험해요', -1]]] },
              { text: '신호등 공사가 끝나려면 몇 달 걸린대요. 그동안 어떻게 할까요?', motif: 'star',
                good: ['ask', '학교에 임시 안내와 지킴이를 요청한다', '공사 동안 어른이 건너는 곳을 지켜요.', [['동생들', '안전하게 건너요', 1]]],
                bad: ['wait', '공사가 끝날 때까지 그냥 기다린다', '몇 달 동안 위험이 그대로 남아요.', '고치는 동안에도 할 수 있는 일이 있어요.', [['동생들', '계속 위험해요', -1]]] },
              { text: '모둠 친구가 "다음엔 우리 집 앞 골목부터!"라고 크게 우겨요.', motif: 'cloud',
                good: ['data', '조사 그래프를 보고 함께 정한다', '모두가 근거를 보고 다음 순서에 동의해요.', [['모둠', '함께 정해요', 1]]],
                bad: ['loud', '목소리 큰 친구 말대로 정한다', '다른 친구들은 왜 그곳인지 몰라 서운해요.', '우기는 쪽이 아니라 근거로 정해요.', [['모둠', '믿음이 줄어요', -1]]] },
            ],
            ending: '많이 다니는 위험한 곳부터, 근거를 보고 정해서 모두가 받아들였어요.',
            reasons: [{ id: 'many', text: '많은 사람이 다니는 위험한 곳부터 고친다' }, { id: 'data', text: '조사 자료가 순서를 정하는 근거다' }, { id: 'pretty', text: '보기 좋은 곳을 먼저 고친다', why: '안전이 먼저예요.' }, { id: 'loud', text: '많이 우기는 쪽을 따른다', why: '근거 없이 정하면 모두가 받아들이기 어려워요.' }],
            good: ['many', 'data'],
            talk: '모둠에서 "우리 모둠은 무엇부터 고칠까, 그 근거는?"을 말하고 다른 모둠과 견주어요.',
            conclude: '고칠 순서는 위험 정도와 다니는 사람 수, 조사 자료를 근거로 정해요.',
          }),
        },
        worksheet: { items: [{ type: 'choice', prompt: '한 곳만 먼저 고칠 수 있을 때 알맞은 기준은?', options: ['보기 좋은 곳', '많이 다니는 위험한 곳', '우리 집 앞'], answer: '많이 다니는 위험한 곳' }] },
      }),
      X('activity.write', {
        title: '개선 제안 글 쓰기', method: '개선 제안 글 쓰기', tool: 'rubric-writing', minutes: 14,
        levels: { easy: '문장 틀을 쓰고 기준 2개(문제·바라는 점)로 점검한다.', base: '기준 4개(문제·근거·바라는 점·우리가 할 일)로 점검한다.', challenge: '기준 4개로 점검하고, 근거로 그래프나 지도 자료 낱말(그래프·조사·지도)을 넣는다.' },
        activity: {
          title: '학교에 내는 개선 제안 글', tool: 'rubric-writing',
          teacher: '"\'길이 위험해요, 고쳐 주세요\'만 쓰면 읽는 사람이 무엇을 알 수 있을까요?" 기준표를 함께 읽고 쓴 뒤 스스로 점검하게 한다. "제안은 불편한 것을 적는 거예요"라는 학생에게 "불평과 제안은 무엇이 다를까요? 근거와 바라는 점, 우리가 할 일이 있으면 제안이에요"라고 묻는다. 학생 이름·집 주소는 쓰지 않게 한다.',
          task: '학교에 낼 통학로 개선 제안 글을 쓰고, 기준표로 스스로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RUB4('통학로 개선 제안 글을 서너 문장으로 쓰고 기준표로 점검해요.', { topic: '학교에 내는 통학로 개선 제안(문제·근거·바라는 점·우리가 할 일)', title: '개선 제안 글', starter: '○○에서 ~ 문제가 있어요. 조사해 보니 ~. 그래서 ~를 바라요. 우리는 ~ 할게요.', crit: ['문제를 썼다', '근거를 썼다', '바라는 점을 썼다', '우리가 할 일을 썼다'], must: [['그래프', '조사', '지도']], chars: [50, 300] }, 0.3),
            RUB('우리가 지킬 약속 한 문장을 따로 써서 제안 글 끝에 붙여요.', { topic: '제안 글 끝에 붙일 우리 모둠 약속 한 문장', title: '우리 모둠 약속', starter: '고쳐질 때까지 우리는 ~ 할게요.', crit: ['행동이 분명하다', '지킬 수 있다', '한 문장이다'], must: [['보도', '멈춰', '살펴']], chars: [15, 80] }, 0.2, { conclude: '제안 글에는 문제·근거·바라는 점과 우리가 할 일이 함께 들어가요.' }),
            { prompt: '짝과 제안 글을 바꿔 읽고, 근거가 분명한지 한 가지씩 말해 줘요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '제안 글에 넣은 근거 하나를 다시 써요.' }] },
        notes: '제안 글은 학교(교사)에 내는 것으로 다룬다. 학생 이름·주소·연락처는 쓰지 않는다.',
      }),
      X('wrap.share', {
        title: '모둠 발표 듣고 마음 나누기', method: '모둠 발표 듣고 마음 나누기', tool: 'emotion', minutes: 6,
        levels: { easy: '제안 카드 2장을 \'꼭 필요해요\'·\'더 알고 싶어요\' 칸에 나눈다.', base: '제안 카드 4장을 두 칸에 나눈다.', challenge: '카드 5장을 나누고, \'더 알고 싶어요\' 제안에 물을 질문 하나를 쓴다.' },
        wrap: {
          teacher: '"근거가 있는 제안과 근거가 더 필요한 제안은 어떻게 다를까요?" 다른 모둠 제안 카드를 나눈 뒤 \'더 알고 싶어요\' 칸의 제안에 물을 질문을 만들게 한다. "마음에 안 드는 제안은 다 별로예요"라는 학생에게 "근거를 물어보면 더 좋아질 수 있어요. 어떤 질문을 하면 좋을까요?"라고 되묻는다.',
          exitTicket: [
            AS_EXIT('emotion', SORT('제안 카드를 두 칸에 나누어요.', { slots: ['꼭 필요해요(근거 있음)', '더 알고 싶어요(근거 필요)'], mode: 'sort', groups: { '꼭 필요해요(근거 있음)': ['조사 9곳 주차 단속', '그래프 보고 신호등'], '더 알고 싶어요(근거 필요)': ['그냥 길을 넓혀요', '다 고쳐 주세요'] }, easy: 1, extra: { '더 알고 싶어요(근거 필요)': ['느낌상 위험해요'] } }, 0.15)),
            { type: 'choice', prompt: '좋은 개선 제안에 꼭 들어갈 것은 무엇인가요?', options: ['불편한 마음만', '문제와 근거와 바라는 점', '고칠 사람 이름'], answer: 1, difficulty: 0.15, explain: '근거와 바라는 점이 있어야 제안이 돼요.' },
            { type: 'short', prompt: '다른 모둠 제안에 묻고 싶은 질문 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '친구 제안 듣고 나누기',
          items: [
            { type: 'short', prompt: '가장 꼭 필요하다고 생각한 다른 모둠 제안을 써요.' },
            { type: 'short', prompt: '그 제안에 더하고 싶은 근거나 질문을 써요.' },
          ],
          easy: { note: '근거가 있는지 먼저 살펴요.', items: [{ type: 'draw', prompt: '고쳐진 통학로를 그려요.' }] },
        },
      }),
      X('wrap.self', {
        title: '조사 활동 스스로 점검', method: '조사 활동 스스로 점검', tool: 'timer', minutes: 6,
        levels: { easy: '점검 칸 2개(역할·안전하게 다니기)를 표시한다.', base: '점검 칸 3개(역할·안전·근거)를 표시한다.', challenge: '점검 칸 4개를 표시하고 다음 조사에서 바꿀 점을 쓴다.' },
        wrap: {
          teacher: '"조사하면서 내 역할을 해냈나요? 다니는 동안 약속을 지켰나요?" 점검 칸을 정직하게 표시하게 하고, 표시하지 못한 칸은 다음 조사에서 바꿀 점으로 쓰게 한다. 출구 2번에서 "자세히 보려고 찻길로 나간다"를 고른 학생에게 "보도 안쪽, 선생님 곁에서도 충분히 볼 수 있어요"라고 말해 준다.',
          exitTicket: [
            SELF('조사 활동 점검', ['맡은 역할을 했다', '보도 안쪽에서 안전하게 다녔다', '근거를 찾아 적었다', '다음에 바꿀 점을 정했다']),
            { type: 'choice', prompt: '통학로를 조사할 때 가장 알맞은 행동은 무엇인가요?', options: ['자세히 보려고 찻길로 나간다', '선생님 곁 보도 안쪽에서 본다', '혼자 먼저 가 본다'], answer: 1, difficulty: 0.15, explain: '조사보다 내 안전이 먼저예요.' },
            { type: 'short', prompt: '다음 조사에서 바꿀 점 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '조사 활동 돌아보기',
          items: [
            { type: 'check', prompt: '조사 활동에서 해낸 것에 표시해요.', options: ['역할 하기', '안전하게 다니기', '근거 적기'] },
            { type: 'short', prompt: '우리 모둠 조사에서 가장 잘한 점을 써요.' },
          ],
          easy: { note: '조사보다 안전이 먼저예요.', items: [{ type: 'draw', prompt: '선생님과 함께 보도 안쪽에서 조사하는 모습을 그려요.' }] },
        },
      }),
      X('wrap.path', {
        title: '안전 지도 고쳐 쓰기 순환', method: '안전 지도 고쳐 쓰기 순환', tool: 'lifecycle', minutes: 6,
        levels: { easy: '카드 3장(조사·제안·실천)을 둥근 판에 차례로 놓는다.', base: '카드 5장(조사·정리·제안·실천·돌아보기)을 둥근 판에 놓는다.', challenge: '카드 5장을 놓고, 우리 모둠의 다음 단계에서 할 일을 쓴다.' },
        wrap: {
          teacher: '"제안을 내고 나면 조사는 끝일까요?" 둥근 판에 카드를 놓은 뒤 우리 모둠이 지금 어디에 있는지 손가락으로 짚게 한다. "한 번 고치면 끝이에요"라는 학생에게 "고친 뒤에 정말 나아졌는지는 어떻게 알까요? 돌아보고 다시 조사해요"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'lifecycle', options: { center: '안전 지도 고쳐 쓰기', slots: 5, cards: [CYCLE[2], CYCLE[0], CYCLE[4], CYCLE[1], CYCLE[3]] }, prompt: '안전 지도를 고쳐 쓰는 차례를 둥근 판에 놓아요.', target: { order: CYCLE, cyclic: true }, difficulty: 0.2,
              levels: { easy: { prompt: '안전 지도를 고쳐 쓰는 차례를 둥근 판에 놓아요(카드 셋).', toolOptions: { slots: 3, cards: [CYCLE[3], CYCLE[0], CYCLE[2]] }, target: { order: [CYCLE[0], CYCLE[2], CYCLE[3]], cyclic: true } } } },
            { type: 'choice', prompt: '제안한 곳이 고쳐진 뒤에 할 일은 무엇인가요?', options: ['조사를 끝낸다', '나아졌는지 돌아보고 다시 조사한다', '다른 학교에 맡긴다'], answer: 1, difficulty: 0.15, explain: '고친 뒤에도 돌아보아야 정말 안전해졌는지 알 수 있어요.' },
            { type: 'short', prompt: '우리 모둠이 다음 단계에서 할 일 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '조사는 계속 돌아요',
          items: [
            { type: 'short', prompt: '우리 모둠은 지금 순환의 어느 단계에 있는지 써요.' },
            { type: 'short', prompt: '다음 단계에서 할 일 하나를 써요.' },
          ],
        },
      }),
    );
  }

  // ======== 6학년 · 킥보드·전동 킥보드 같은 탈것의 위험 (별표 2 초등 교통안전 "교통수단의 안전한 이용법 알기" + 표준안 오토바이[원인·주의] 보충) ========
  {
    const X = mk('pm', 6);
    const P = (name, at, icon = 'dot') => ({ name, icon, at });
    const RIDE = {
      plaza: P('공원 광장', [1, 1], 'park'), road: P('찻길', [3, 0], 'bus'), crowd: P('붐비는 보도', [4, 2], 'market'), school: P('학교', [5, 0], 'school'),
      lot: P('주차장 입구', [0, 3], 'dot'), cross: P('횡단보도', [3, 3], 'dot'), slope: P('공원 내리막', [1, 3], 'mountain'),
    };
    const RMAP = (keys) => ({ grid: [6, 4], title: '가상의 우리 동네 탈것 지도', legend: false, places: keys.map((k) => RIDE[k]) });
    const BASE6 = ['plaza', 'road', 'crowd', 'school', 'lot', 'cross'];
    const PLACE = (prompt, place, d, more, ch) => Object.assign({
      prompt, toolOptions: RMAP(BASE6), target: { place }, difficulty: d,
      levels: Object.assign({ easy: { toolOptions: RMAP(['plaza', 'road', 'crowd', 'school']) } }, ch ? { challenge: ch } : {}),
    }, more);
    const GEAR = ['목', '어깨', '팔꿈치', '손목', '배', '허벅지', '무릎', '발목'];
    M.push(
      X('intro.kinds', {
        title: '탈것 무리 나누기', method: '탈것 무리 나누기', tool: 'mindmap', minutes: 5,
        levels: { easy: '교사가 카드 4장(킥보드·인라인·자전거·전동 킥보드)이 나뉘는 시연을 짚으며 함께 본다.', base: '카드 6장이 \'사람 힘으로 가요\'·\'전기로 가요\'에 나뉘는 시연을 보고 까닭을 말한다.', challenge: '전기로 가는 탈것의 공통점(빠르기·면허)을 짝과 말한다.' },
        intro: {
          teacher: '"킥보드와 전동 킥보드는 이름이 비슷한데 같은 탈것일까요?" 시연 단추로 킥보드·인라인·자전거는 \'사람 힘으로 가요\'에, 전동 킥보드·전기 자전거·전동 휠은 \'전기로 가요\'에 가는 모습을 보인다. "전동 킥보드는 장난감이라 누구나 타요"라는 말에는 "전기로 가는 탈것은 면허가 있어야 탈 수 있어요. 왜 그럴까요?"라고 되묻는다.',
          student: '전기로 가는 탈것에는 어떤 공통점이 있는지 짝과 말해 보아요.',
          demo: { tool: 'mindmap', options: { topic: '탈것', slots: ['사람 힘으로 가요', '전기로 가요'], cards: ['킥보드', '전동 킥보드', '인라인', '전기 자전거', '자전거', '전동 휠'] }, sequence: [{ sort: { '사람 힘으로 가요': ['킥보드', '인라인', '자전거'], '전기로 가요': ['전동 킥보드', '전기 자전거', '전동 휠'] } }] },
          art: art('paper kick scooters, inline skates, a bicycle and an electric scooter lined up in two paper groups with a lightning symbol over one group', '사람 힘? 전기?', 'star', 'lavender'),
        },
        notes: '전동 킥보드 같은 개인형 이동장치는 면허가 필요한 탈것이라 초등학생은 탈 수 없다는 점만 다룬다. 나이·면허 종류·속도 수치는 말하지 않는다.',
      }),
      X('intro.scene', {
        title: '이 장면 괜찮을까', method: '이 장면 괜찮을까', tool: 'emotion', minutes: 5,
        levels: { easy: '교사가 장면 2개(둘이 타요·보호대 하고 천천히)를 짚으며 \'위험해요\'로 고르는 시연을 본다.', base: '장면 5개 가운데 위험한 장면 3개가 담기는 시연을 보고 까닭을 말한다.', challenge: '위험한 장면마다 원인을 둘 이상 짝과 말한다.' },
        intro: {
          teacher: '"이 장면들 가운데 위험한 것은 무엇일까요?" 시연 단추로 \'둘이 타요\'·\'안전모 없이 타요\'·\'찻길에서 타요\'가 바구니에 담기는 모습을 보인다. "보호대만 하면 어디서 타도 돼요"라는 말에는 "찻길에서는 보호대가 차를 막아 줄까요?"라고 되물어 장소와 장비가 함께 필요하다는 점을 짚는다.',
          student: '위험해 보이는 장면을 하나 골라 무엇 때문에 위험한지 짝에게 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'pick', basket: '위험해요', cards: [{ id: 'two', text: '둘이 타요' }, { id: 'gear', text: '보호대 하고 천천히' }, { id: 'nohelmet', text: '안전모 없이 타요' }, { id: 'plaza', text: '공원 광장에서 타요' }, { id: 'road', text: '찻길에서 타요' }], shuffle: false }, sequence: [{ pick: ['two', 'nohelmet', 'road'] }] },
          art: art('paper children on kick scooters in a park plaza, on a crowded sidewalk and near a paper road, one pair riding together on one scooter', '이 장면 괜찮을까?', 'cloud', 'sky'),
        },
      }),
      X('activity.cause', {
        title: '사고 사례 원인 찾기', method: '사고 사례 원인 찾기', tool: 'story', minutes: 15,
        levels: { easy: '사례 장면 3장을 차례로 놓고, 원인 말풍선 빈칸 2개를 채운다.', base: '사례 장면 4장을 차례로 놓고, 원인 말풍선 빈칸 3개를 채운다.', challenge: '장면 4장 사이에 섞인 틀린 장면을 빼고 놓고, 장면 하나를 바꾸면 결과가 어떻게 달라질지 모둠에서 말한다.' },
        activity: {
          title: '사례 장면과 원인 말풍선', tool: 'story',
          teacher: '"이 사례(지어낸 이야기)에서 넘어진 까닭은 하나뿐일까요?" 장면을 놓은 뒤 말풍선마다 "왜냐하면"을 붙여 소리 내어 읽게 한다. "둘이 타도 균형만 잡으면 괜찮아요"라는 학생에게 "둘이 타면 무게가 늘어 내리막에서 어떻게 될까요?"라고 묻는다. 면허가 필요한 탈것을 어린이가 탄 것부터가 원인이라는 점을 짚는다.',
          task: '전동 킥보드 사례 장면을 일어난 차례로 놓고, 장면마다 원인 말풍선을 채워요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDER('두 사람이 전동 킥보드를 타다 넘어진 사례를 차례대로 놓아요.', ['빌린 전동 킥보드에 둘이 타요', '안전모 없이 출발해요', '내리막에서 빨라져요', '턱에 걸려 넘어져요'], { easy: [0, 2, 3], trap: '내려서 끌고 걸어요', motifs: ['star', 'cloud', 'wind', 'storm'] }, 0.2),
            { prompt: '장면마다 원인 말풍선의 빈칸에 알맞은 카드를 넣어요.', toolOptions: { mode: 'fill', title: '왜 넘어졌을까?', slots: [{ id: 'b1', who: '첫 장면', label: '어린이는 ___ 탈것이에요.' }, { id: 'b2', who: '둘째 장면', label: '두 사람이 타면 ___.' }, { id: 'b3', who: '셋째 장면', label: '안전모가 없으면 ___.' }], cards: ['면허가 있어야 타는', '균형을 잃기 쉬워요', '머리를 지키지 못해요', '더 재미있어요'] }, target: { fill: { b1: '면허가 있어야 타는', b2: '균형을 잃기 쉬워요', b3: '머리를 지키지 못해요' } }, difficulty: 0.25,
              levels: { easy: { prompt: '원인 말풍선 두 칸의 빈칸에 알맞은 카드를 넣어요.', toolOptions: { slots: [{ id: 'b1', who: '첫 장면', label: '어린이는 ___ 탈것이에요.' }, { id: 'b2', who: '둘째 장면', label: '두 사람이 타면 ___.' }], cards: ['면허가 있어야 타는', '균형을 잃기 쉬워요', '더 재미있어요'] }, target: { fill: { b1: '면허가 있어야 타는', b2: '균형을 잃기 쉬워요' } } } },
              conclude: '탈 수 없는 탈것, 두 사람 타기, 보호 장구 없음이 겹쳐 사고가 났어요.' },
            { prompt: '모둠에서 장면 하나를 바꾸면 결과가 어떻게 달라질지 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '사례의 원인과 바꿀 행동을 써요.', columns: ['원인', '바꿀 행동'], cells: [['두 사람이 탔어요', ''], ['안전모가 없었어요', '']] }] },
        notes: '사례는 지어낸 이야기다. 실제 사고나 학생의 경험을 묻지 않는다.',
      }),
      X('activity.choose', {
        title: '같이 타자는 말에 어떻게 할까', method: '갈림길: 친구가 같이 타자고 해요', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림길 1번(같이 탈지 거절할지)에서 고르고 근거 한 장을 고른다.', base: '갈림길 2번(어떻게 거절할까)을 지나 근거를 고른다.', challenge: '갈림길 3번까지 지나 근거를 모두 고르고, 다른 선택의 결과와 견준 뒤 거절하는 말을 모둠에서 다듬는다.' },
        activity: {
          title: '갈림길: 중학생 형이 같이 타자고 해요', tool: 'dilemma',
          teacher: '"아는 형이 \'짧게만 같이 타자\'고 하면 거절하기 어렵지요. 그래도 무엇이 걱정될까요?" 고를 때마다 결과를 소리 내어 읽게 한다. "형이 운전하니까 괜찮아요"라는 학생에게 "한 대에 둘이 타면 형도 균형을 잡기 어려워요. 그리고 면허가 있어야 하는 탈것이에요"라고 짚는다. 거절할 때 까닭과 다른 놀이를 함께 말하면 덜 어색하다는 점을 알려 준다.',
          task: '같이 타자는 상황의 갈림길마다 고르고, 결과를 읽은 뒤 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '같이 타자고 해요',
            steps: [
              { text: '놀이터 앞에서 아는 중학생 형이 전동 킥보드를 보여 주며 "뒤에 타, 같이 가자!"라고 해요.', motif: 'star',
                good: ['no', '타지 않겠다고 말한다', '형이 잠깐 머뭇거려요.', [['나', '다칠 위험을 피해요', 1]]],
                bad: ['ride', '뒤에 올라탄다', '출발하자마자 휘청여 넘어질 뻔해요.', '한 대에 둘이 타면 균형을 잃기 쉬워요.', [['나와 형', '넘어질 위험', -1]]] },
              { text: '형이 "겁쟁이네, 짧게만 타자"라며 다시 권해요.', motif: 'cloud',
                good: ['why', '까닭을 말하고 다른 놀이를 하자고 한다', '형도 "그래, 그럼 공 차자"라고 해요.', [['형', '기분 상하지 않아요', 1]]],
                bad: ['give', '놀림이 싫어 한 번만 탄다', '내리막에서 속도가 붙어 무서웠어요.', '놀려도 위험한 일은 거절해요.', [['나', '다칠 위험', -1]]] },
              { text: '집에 와서 오늘 일을 떠올려요.', motif: 'house',
                good: ['tell', '보호자께 있었던 일을 말한다', '보호자가 잘 거절했다고 말해 줘요.', [['나', '도움을 받아요', 1]]],
                bad: ['hide', '아무에게도 말하지 않는다', '다음에도 형이 또 권할까 봐 걱정돼요.', '어른께 말하면 다음에 도움을 받을 수 있어요.', [['나', '혼자 걱정해요', -1]]] },
            ],
            ending: '까닭을 말하고 거절한 덕분에 형과도 다치지 않고 지냈어요.',
            reasons: [{ id: 'license', text: '면허가 필요한 탈것은 내가 탈 수 없다' }, { id: 'two', text: '둘이 타면 균형을 잃기 쉽다' }, { id: 'short', text: '짧게 타면 괜찮다', why: '짧은 길에서도 넘어질 수 있어요.' }, { id: 'older', text: '형이 운전하면 안전하다', why: '한 대에 둘이 타면 누가 운전해도 위험해요.' }],
            good: ['license', 'two'],
            talk: '모둠에서 형에게 할 거절하는 말을 하나 골라 더 부드럽게 다듬어 말해요.',
            conclude: '면허가 필요한 탈것은 타지 않고, 같이 타자는 말은 까닭을 들어 거절해요.',
          }),
        },
        worksheet: { items: [{ type: 'short', prompt: '친구가 전동 킥보드를 같이 타자고 할 때 할 거절하는 말을 써요.' }] },
      }),
      X('activity.gear', {
        title: '보호 장구와 지키는 곳', method: '보호 장구와 지키는 곳', tool: 'body', minutes: 15,
        levels: { easy: '종이 몸에서 넘어질 때 다치기 쉬운 곳 두 곳(팔꿈치·무릎)을 고르고, 그림에 없는 머리는 보기에서 고른다.', base: '종이 몸에서 세 곳(손목·팔꿈치·무릎)을 고르고 머리는 보기에서 골라 네 곳을 찾은 뒤, 보호 장구마다 지키는 곳을 고른다.', challenge: '네 곳과 보호 장구를 짝 지은 뒤, 보호 장구로도 막지 못하는 위험을 모둠에서 말한다(셋째 문항).' },
        activity: {
          title: '보호 장구 짝 짓기', tool: 'body',
          teacher: '"킥보드를 타다 앞으로 넘어지면 몸의 어디가 먼저 땅에 닿을까요?" 종이 몸에는 머리 칸이 없으니 모두 자기 머리를 손으로 짚게 한 뒤 시작한다. "보호대만 하면 어떤 일이 있어도 안 다쳐요"라는 학생에게 "찻길에서 차와 부딪친다면 무릎 보호대가 지켜 줄까요?"라고 되묻는다. 보호 장구는 다치는 정도를 줄이는 것이지 탈 장소와 속도를 대신하지 못한다는 점을 짚는다.',
          task: '종이 몸에서 넘어질 때 다치기 쉬운 곳을 고르고, 보호 장구마다 지키는 곳을 짝 지어요.', levels: { easy: { names: true }, base: {}, challenge: {} },
          items: [
            { prompt: '넘어질 때 땅에 먼저 닿아 다치기 쉬운 곳을 모두 고르고, 그림에 없는 곳을 보기에서 골라요.', toolOptions: { mode: 'parts', parts: GEAR, ask: { q: '그림에 없지만 가장 크게 다치기 쉬운 곳은?', choices: ['머리', '두 귀', '배 둘레'], why: ['', '귀보다 더 크게 다치는 곳이 있어요.', '앞으로 넘어질 때 배보다 먼저 닿는 곳이 있어요.'] } }, target: { parts: ['팔꿈치', '손목', '무릎'], pick: 0 }, difficulty: 0.25,
              levels: { easy: { prompt: '넘어질 때 다치기 쉬운 두 곳을 고르고, 그림에 없는 곳을 보기에서 골라요.', toolOptions: { parts: ['목', '팔꿈치', '배', '허벅지', '무릎', '발목'] }, target: { parts: ['팔꿈치', '무릎'], pick: 0 } } } },
            { prompt: '손목 보호대가 지키는 곳을 종이 몸에서 고르고, 무릎을 지키는 보호 장구를 골라요.', toolOptions: { mode: 'parts', parts: GEAR, ask: { q: '무릎을 지키는 것은?', choices: ['무릎 보호대', '안전모', '장갑'], why: ['', '안전모는 머리를 지켜요.', '장갑은 손을 지켜요.'] } }, target: { parts: ['손목'], pick: 0 }, difficulty: 0.2 },
            { prompt: '안전모가 지키는 곳은 어디인가요?', toolOptions: { mode: 'parts', parts: GEAR, readOnly: true, ask: { q: '안전모가 지키는 곳은?', choices: ['발목', '머리', '배 둘레'], why: ['발목은 신발과 보호대가 도와요.', '', '배는 안전모가 덮지 못해요.'] } }, target: { pick: 1 }, difficulty: 0.15,
              levels: { challenge: { prompt: '보호 장구를 다 해도 막지 못하는 위험을 골라요.', toolOptions: { ask: { q: '보호 장구로 막지 못하는 것은?', choices: ['무릎이 까짐', '찻길에서 차와 부딪침', '손목을 삠'], why: ['무릎 보호대가 줄여 줘요.', '', '손목 보호대가 줄여 줘요.'] } }, target: { pick: 1 } } },
              conclude: '보호 장구는 다치는 정도를 줄여요. 탈 수 있는 곳에서 천천히 타는 것이 먼저예요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '보호 장구와 지키는 곳을 이어 써요.', columns: ['보호 장구', '지키는 곳'], cells: [['안전모', ''], ['손목 보호대', ''], ['무릎 보호대', '']], answer: '머리, 손목, 무릎' }] },
        notes: '종이 몸에는 머리 칸이 없다. 머리는 보기 고르기와 학생이 자기 머리를 짚는 것으로 다룬다.',
      }),
      X('activity.place', {
        title: '탈 수 있는 곳 찾기', method: '탈 수 있는 곳 찾기', tool: 'map', minutes: 14,
        levels: { easy: '칸 지도에 4곳만 있고, 핀을 놓으면 칸 이름이 보인다.', base: '6곳 가운데 문항마다 알맞은 곳 하나에 핀을 꽂는다.', challenge: '공원 내리막 칸이 더해지고, 셋째 문항에서 공원 안에서도 조심할 칸을 찾는다.' },
        activity: {
          title: '어린이 탈것을 탈 곳·안 될 곳 찾기', tool: 'map',
          teacher: '"어린이 킥보드나 인라인은 어디에서 타면 좋을까요?" 문항을 소리 내어 읽고 칸을 고른 까닭을 말하게 한다. "보도에서는 빨리 달려도 돼요"라는 학생에게 "보도는 누가 걷는 길일까요? 사람이 많으면 어떻게 될까요?"라고 묻는다. 도전에서는 공원 안에서도 내리막처럼 속도가 붙는 곳은 내려서 걷는다는 점을 짚는다.',
          task: '칸 지도에서 어린이 킥보드·인라인을 타기 알맞은 곳과 타면 안 되는 곳에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            PLACE('어린이 킥보드·인라인을 타기 알맞은 곳에 핀을 꽂아요.', '공원 광장', 0.15),
            PLACE('차가 다녀서 탈것을 타면 안 되는 곳에 핀을 꽂아요.', '찻길', 0.2),
            PLACE('걷는 사람이 많아 부딪치기 쉬운 곳에 핀을 꽂아요.', '붐비는 보도', 0.25, { conclude: '어린이 탈것은 차와 사람이 붐비지 않는 곳에서, 천천히 타요.' },
              { prompt: '공원 안에서도 속도가 붙어 내려서 걸어야 할 곳에 핀을 꽂아요.', toolOptions: RMAP([...BASE6, 'slope']), target: { place: '공원 내리막' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '탈 곳이면 ○, 안 될 곳이면 ×를 써요.', columns: ['장소', '○ / ×'], cells: [['공원 광장', ''], ['찻길', ''], ['붐비는 보도', '']], answer: '○, ×, ×' }] },
        notes: '칸 지도는 가상의 동네다. 우리 동네에서 어린이 탈것을 탈 수 있는 곳은 보호자와 함께 정하게 한다.',
      }),
      X('wrap.rule', {
        title: '탈것 안전 약속 세 줄 쓰기', method: '탈것 안전 약속 세 줄 쓰기', tool: 'rubric-writing', minutes: 6,
        levels: { easy: '문장 틀을 써도 되고, 기준 2개(구체적인가·까닭이 있나)로 점검한다.', base: '약속 세 줄을 직접 쓰고 기준 3개(구체적인가·까닭이 있나·지킬 수 있나)로 점검한다.', challenge: '세 줄에 거절하는 말 한 줄을 더하고 기준 4개로 점검한다.' },
        wrap: {
          teacher: '"\'조심하기\'처럼 쓰면 무엇을 지키는지 알 수 있을까요?" 기준표를 함께 읽은 뒤 약속을 행동으로 쓰게 한다(예: 안전모 끈을 조이고 탄다). "다 지킬게요"처럼 막연하게 쓴 학생에게 "언제, 어디서, 무엇을 할지 넣어 볼까요?"라고 묻는다. 이름·주소는 쓰지 않게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'rubric-writing', options: { topic: '나와 친구를 위한 탈것 안전 약속(세 줄)', title: '탈것 안전 약속', minChars: 30, maxChars: 200 }, prompt: '나와 친구를 위한 탈것 안전 약속 세 줄을 쓰고 기준표로 점검해요.', target: { selfCheck: ['행동이 구체적이다', '까닭이 있다', '내가 지킬 수 있다'], chars: [30, 200] }, difficulty: 0.2,
              levels: {
                easy: { prompt: '탈것 안전 약속을 쓰고 기준표로 점검해요(문장 틀을 써도 돼요).', toolOptions: { starter: '나는 탈것을 탈 때 ~한다. 왜냐하면 ~' }, target: { selfCheck: ['행동이 구체적이다', '까닭이 있다'], chars: [20, 200] } },
                challenge: { prompt: '탈것 안전 약속 세 줄에 거절하는 말 한 줄을 더해 쓰고 점검해요.', target: { selfCheck: ['행동이 구체적이다', '까닭이 있다', '내가 지킬 수 있다', '거절하는 말을 한 줄 넣었다'], chars: [40, 200] } },
              } },
            { type: 'choice', prompt: '탈것 안전 약속으로 가장 알맞은 것은 무엇인가요?', options: ['조심해서 탄다', '안전모 끈을 조이고 공원 광장에서 탄다', '빨리 타고 빨리 끝낸다'], answer: 1, difficulty: 0.2, explain: '무엇을 어디서 할지 분명한 약속이 지키기 쉬워요.' },
            { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '나의 탈것 안전 약속',
          items: [
            { type: 'short', prompt: '가장 먼저 지킬 탈것 약속 한 줄을 다시 써요.' },
            { type: 'check', prompt: '내 약속을 점검해요.', options: ['구체적인가요', '까닭이 있나요', '지킬 수 있나요'] },
          ],
        },
      }),
      X('wrap.self', {
        title: '탈것 습관 나누기', method: '탈것 습관 나누기', tool: 'emotion', minutes: 6,
        levels: { easy: '습관 카드 3장을 \'계속 지킬래요\'·\'바꿀래요\' 칸에 나눈다.', base: '습관 카드 4장을 두 칸에 나눈다.', challenge: '습관 카드 6장을 나누고, 바꿀 습관을 언제부터 할지 쓴다.' },
        wrap: {
          teacher: '"오늘 배운 것으로 보면 계속 지킬 습관과 바꿀 습관은 무엇일까요?" 카드를 나눈 뒤 출구 질문에 내 습관 가운데 바꿀 것을 언제부터 할지 쓰게 한다. "안전모는 머리 모양이 망가져서 싫어요"라는 학생의 마음은 인정하되 "넘어질 때 머리를 지켜 주는 것은 무엇일까요?"라고 되묻는다.',
          exitTicket: [
            AS_EXIT('emotion', SORT('탈것 습관 카드를 계속 지킬 습관과 바꿀 습관으로 나누어요.', { slots: ['계속 지킬래요', '바꿀래요'], mode: 'sort', groups: { '계속 지킬래요': ['안전모 쓰고 타기', '혼자 타기'], 바꿀래요: ['둘이 타기', '찻길에서 타기'] }, easy: [2, 1], extra: { '계속 지킬래요': ['보호대 하고 타기'], 바꿀래요: ['붐비는 보도에서 빨리'] } }, 0.15)),
            { type: 'choice', prompt: '전동 킥보드에 대해 바른 말은 무엇인가요?', options: ['장난감이라 누구나 탄다', '면허가 있어야 타는 탈것이다', '둘이 타면 더 안전하다'], answer: 1, difficulty: 0.15, explain: '전동 킥보드는 면허가 필요한 탈것이라 초등학생은 탈 수 없어요.' },
            { type: 'short', prompt: '바꿀 습관 하나와 언제부터 할지 써요.' },
          ],
        },
        worksheet: {
          title: '나의 탈것 습관',
          items: [
            { type: 'check', prompt: '내가 지금 지키는 습관에 표시해요.', options: ['안전모 쓰기', '보호대 하기', '혼자 타기', '탈 수 있는 곳에서 타기'] },
            { type: 'short', prompt: '바꿀 습관과 시작할 날을 써요.' },
          ],
          easy: { note: '안전모·보호대·혼자·탈 수 있는 곳을 떠올려요.', items: [{ type: 'draw', prompt: '안전모와 보호대를 하고 탈것을 타는 내 모습을 그려요.' }] },
        },
        notes: '계획의 \'지금 지켜요/바꿀래요\'는 학생마다 달라 채점할 수 없어, 교구에서는 습관을 \'계속 지킬 습관/바꿀 습관\'으로 나누고 내 습관은 활동지 체크와 출구 글로 적는다.',
      }),
    );
  }

  // ======== 6학년 · 스마트폰·이어폰 보며 걷지 않기 (별표 2 초등 교통안전 "안전한 통학로 알기" + 표준안 보행자[보행]) ========
  {
    const X = mk('distraction', 6);
    const HABIT = [['안 봐요', 40], ['가끔 봐요', 35], ['자주 봐요', 25]];
    const HABIT2 = [['안 봐요', 40], ['봐요', 60]];
    // 통학로 칸 지도: 집·학교 + 위험 칸 넷 + 멈춰 설 쉼터
    const ROUTE = {
      home: { name: '집', icon: 'house', at: [0, 3] }, school: { name: '학교', icon: 'school', at: [5, 0] },
      cross: { name: '횡단보도', icon: 'dot', at: [2, 2] }, alley: { name: '골목 끝', icon: 'dot', at: [1, 1] },
      park: { name: '주차장 입구', icon: 'dot', at: [4, 2] }, bus: { name: '버스 정류장', icon: 'bus', at: [3, 0] },
      rest: { name: '보도 안쪽 쉼터', icon: 'park', at: [3, 3] },
    };
    const PL = (...k) => k.map((x) => ROUTE[x]);
    const SPOT = (prompt, place, easyKeys, more) => Object.assign({
      prompt, toolOptions: { grid: [6, 4], title: '우리 통학로(가상)', places: PL('home', 'school', 'cross', 'alley', 'park', 'bus', 'rest'), legend: false }, target: { place }, difficulty: 0.2,
      levels: { easy: { toolOptions: { places: PL('home', 'school', ...easyKeys), readout: true } } },
    }, more);
    M.push(
      X('intro.test', {
        title: '보며 걷기 짧은 체험', method: '보며 걷기 짧은 체험', tool: 'timer', minutes: 5,
        levels: { easy: '두 번(카드 보며 걷기·앞 보고 걷기)을 해 보고 놓친 장애물 수를 기록판에 적는다.', base: '세 번(멈춰 서서 카드 읽기까지)을 해 보고 기록을 견준다.', challenge: '세 번의 기록을 짝의 기록과 견주어 어떤 경향이 있는지 말한다.' },
        intro: {
          teacher: '"걸으면서 카드를 읽으면 바닥의 종이컵을 몇 개나 놓칠까요?" 시연 단추로 체험 차례 카드(짝이 카드 들기 → 걸으며 읽기 → 앞 보고 걷기 → 놓친 수 적기)가 놓이는 모습을 보인다. "나는 보면서도 다 볼 수 있어요"라는 말이 나오면 "정말 그런지 우리 반 기록으로 확인해 볼까요?"라고 되묻는다. 장애물은 종이컵처럼 밟아도 다치지 않는 것만 쓴다.',
          student: '카드를 보며 걸을 때와 앞을 보고 걸을 때, 놓친 장애물 수가 어떻게 다를지 먼저 짐작해 보아요.',
          demo: { tool: 'timer', options: { title: '보며 걷기 체험', cards: ['걸으며 카드 읽기', '놓친 수 적기', '짝이 카드 들기', '앞 보고 걷기'], fields: [{ label: '카드 보며 걷기', unit: '개' }, { label: '앞 보고 걷기', unit: '개' }, { label: '멈춰서 읽기', unit: '개' }] }, sequence: [{ order: ['짝이 카드 들기', '걸으며 카드 읽기', '앞 보고 걷기', '놓친 수 적기'] }] },
          art: art('a paper classroom aisle with small paper cups on the floor, one child walking while reading a card and another walking with eyes up', '보면서 걸으면 무엇을 놓칠까?', 'star', 'mint'),
        },
        notes: '기록은 우리 반이 잰 값이다. 교실 통로를 비우고 종이컵처럼 부드러운 장애물만 쓴다. 뛰지 않고 천천히 걷게 한다.',
      }),
      X('intro.view', {
        title: '고개 숙인 아이의 눈', method: '고개 숙인 아이의 눈', tool: 'emotion', minutes: 5,
        levels: { easy: '교사가 그림 2장(고개 숙임·고개 듦)을 나란히 보이며 놓친 것 두 가지를 함께 고른다.', base: '그림 3장(멈춰 서서 보기까지)을 견주며 놓친 것을 스스로 고른다.', challenge: '눈으로 놓친 것에 더해 귀로 놓친 소리(경적·자전거 종)도 말한다.' },
        intro: {
          teacher: '"휴대전화를 보는 아이의 눈에는 무엇이 들어올까요?" 고개 숙인 그림과 고개 든 그림을 나란히 보이고, 시연 단추로 바뀐 신호·다가오는 자전거·친구의 손짓이 \'놓친 것\' 바구니에 담기는 모습을 보인다. "횡단보도에서만 안 보면 돼요"라는 말에는 "골목 끝이나 주차장 입구에서는 차가 안 나올까요?"라고 되묻는다.',
          student: '고개를 숙이고 걸을 때 놓칠 수 있는 것을 두 가지 짝에게 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'pick', basket: '고개 숙이면 놓쳐요', cards: [{ id: 'signal', text: '바뀐 신호' }, { id: 'screen', text: '휴대전화 화면' }, { id: 'bike', text: '다가오는 자전거' }, { id: 'cloud', text: '하늘의 구름' }, { id: 'wave', text: '친구의 손짓' }], shuffle: false }, sequence: [{ pick: ['signal', 'bike', 'wave'] }] },
          art: art('two paper panels side by side: a child looking down at a glowing phone seeing only the screen, and the same child looking up seeing a traffic light and a bicycle', '고개를 숙이면 무엇이 안 보일까?', 'sun', 'sky'),
        },
      }),
      X('activity.data', {
        title: '우리 반 걸으며 휴대전화 습관 그래프', method: '우리 반 걸으며 휴대전화 습관 그래프', tool: 'chart', minutes: 15,
        levels: { easy: '항목 2개(안 봐요·봐요) 원그래프를 읽고, 조각마다 값이 보인다.', base: '항목 3개(안 봐요·가끔 봐요·자주 봐요) 원그래프에서 가장 큰 조각과 작은 조각을 찾는다.', challenge: '항목 3개 그래프를 읽고, 그래프만으로는 알 수 없는 것을 고른다.' },
        activity: {
          title: '가상 조사 원그래프 읽기', tool: 'chart',
          teacher: '"이 원그래프는 우리 반 조사처럼 꾸민 가상 자료예요. 가장 큰 조각은 무엇인가요?" 조각 크기를 견주게 한 뒤 \'가끔\'과 \'자주\'를 더하면 \'안 봐요\'보다 큰지 묻는다. "가끔은 괜찮아요"라는 학생에게 "가끔 본 그 순간이 횡단보도 앞이라면요?"라고 되묻는다. 도전에서는 언제·어디서 보는지는 그래프에 없다는 점을 짚는다.',
          task: '가상의 우리 반 조사 원그래프를 읽고, 가장 큰 부분과 그 뜻을 찾아요.', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            { prompt: '걸으며 휴대전화를 보는 습관에서 가장 큰 부분은 무엇인가요?(가상 자료)', toolOptions: { type: 'circle', mode: 'read', title: '걸으며 휴대전화 보기(가상)', unit: '%', data: HABIT, choices: ['안 봐요', '가끔 봐요', '자주 봐요'], question: '가장 큰 부분은?' }, target: { pick: 0 }, difficulty: 0.15,
              levels: { easy: { prompt: '안 봐요·봐요 두 부분 가운데 더 큰 부분은 무엇인가요?(가상 자료)', toolOptions: { data: HABIT2, choices: ['안 봐요', '봐요'] }, target: { pick: 1 } } } },
            { prompt: '휴대전화를 보는 학생을 모두 합하면 안 보는 학생보다 많은가요?(가상 자료)', toolOptions: { type: 'circle', mode: 'read', title: '걸으며 휴대전화 보기(가상)', unit: '%', data: HABIT, choices: ['더 많다', '더 적다', '같다'], question: '보는 학생을 합하면?' }, target: { pick: 0 }, difficulty: 0.25,
              levels: { easy: { toolOptions: { data: HABIT2 } } } },
            { prompt: '걸으며 휴대전화를 보는 습관에서 가장 작은 부분은 무엇인가요?(가상 자료)', toolOptions: { type: 'circle', mode: 'read', title: '걸으며 휴대전화 보기(가상)', unit: '%', data: HABIT, choices: ['안 봐요', '가끔 봐요', '자주 봐요'], question: '가장 작은 부분은?' }, target: { pick: 2 }, difficulty: 0.2,
              levels: {
                easy: { prompt: '안 봐요·봐요 두 부분 가운데 더 작은 부분은 무엇인가요?(가상 자료)', toolOptions: { data: HABIT2, choices: ['안 봐요', '봐요'] }, target: { pick: 0 } },
                challenge: { prompt: '이 원그래프(가상)만으로는 알 수 없는 것을 골라요.', toolOptions: { choices: ['가장 큰 부분', '어디에서 보는지', '자주 보는 학생 비율'], question: '알 수 없는 것은?', why: ['조각 크기로 알 수 있어요.', '', '조각 값으로 알 수 있어요.'] }, target: { pick: 1 } },
              },
              conclude: '가끔이라도 걸으며 보는 학생이 많아요. 그 순간이 위험한 곳이면 사고로 이어질 수 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '원그래프(가상)에서 가장 큰 부분은?', options: ['안 봐요', '가끔 봐요', '자주 봐요'], answer: '안 봐요' }] },
        notes: '그래프 수치는 수업용 가상 자료다. 실제 조사처럼 말하지 않는다. 우리 반이 직접 조사할 때는 이름을 적지 않고 손들기 수만 센다.',
      }),
      X('activity.chain', {
        title: '알아채기까지 늦어지는 차례', method: '알아채기까지 늦어지는 차례', tool: 'timeline', minutes: 14,
        levels: { easy: '사건 카드 3장을 먼저→나중 차례로 놓는다.', base: '사건 카드 4장을 차례로 놓는다.', challenge: '카드 4장 사이에 섞인 틀린 장면을 빼고 놓은 뒤, 사슬을 끊는 행동 카드를 고르고 끊는 자리마다 할 행동을 말한다.' },
        activity: {
          title: '늦게 알아채는 사슬 잇기', tool: 'timeline',
          teacher: '"메시지를 본 순간부터 늦게 알아챌 때까지 무슨 일이 이어졌을까요?" 카드를 놓은 뒤 "그래서"를 넣어 앞 카드에서 뒤 카드로 소리 내어 읽게 한다. "음악을 들어도 차 소리는 들려요"라는 학생에게 "자전거 종소리처럼 작은 소리는 어떨까요?"라고 되묻는다. 셋째 문항에서 사슬의 앞쪽에서 끊을수록 좋다는 점을 짚는다.',
          task: '늦게 알아채기까지의 사건 카드를 먼저 일어난 차례대로 놓고, 사슬을 끊을 행동을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDER('메시지를 보며 걷다 생긴 일을 차례대로 놓아요.', ['메시지를 봐요', '신호가 바뀌어요', '차 소리를 못 들어요', '늦게 알아채요'], { easy: [0, 2, 3], trap: '고개 들고 신호 봐요' }, 0.2),
            ORDER('이어폰을 끼고 걷다 생긴 일을 차례대로 놓아요.', ['이어폰을 껴요', '소리를 크게 키워요', '자전거 종을 못 들어요', '부딪칠 뻔해요'], { easy: [0, 2, 3], trap: '이어폰을 빼요' }, 0.25),
            { prompt: '늦게 알아채는 사슬을 끊는 행동만 골라 담아요.', toolOptions: { mode: 'pick', basket: '사슬을 끊는 행동', cards: ['휴대전화는 주머니에', '걸으며 답장 쓰기', '건너기 전 이어폰 빼기', '소리를 더 키우기', '멈춰 서서 확인하기'] }, target: { pick: ['휴대전화는 주머니에', '건너기 전 이어폰 빼기', '멈춰 서서 확인하기'] }, difficulty: 0.25, conclude: '눈과 귀를 길에 두면 위험을 일찍 알아챌 수 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '메시지는 걸으면서 보지 않고 ___ 서서 확인해요.', answer: '멈춰' }] },
      }),
      X('activity.choose', {
        title: '친구 메시지가 왔어요', method: '친구 메시지가 왔어요', tool: 'dilemma', minutes: 15,
        levels: { easy: '갈림길 1번(횡단보도 앞에서 답장할지)에서 고르고 근거 한 장을 고른다.', base: '갈림길 2번(보도 안쪽에 멈춰 서기)을 지나 근거를 고른다.', challenge: '갈림길 3번(골목 끝 이어폰)까지 지나 근거를 모두 고르고, 친구에게 답할 좋은 때를 모둠에서 정한다.' },
        activity: {
          title: '갈림길: 급한 메시지가 왔어요', tool: 'dilemma',
          teacher: '"\'빨리 답해!\'라는 메시지가 오면 마음이 급해지죠. 그래도 지금 답해야 할까요?" 고를 때마다 결과 칸을 소리 내어 읽게 한다. "짧게 답하면 괜찮아요"라는 학생에게 "짧게 쓰는 동안에도 눈은 어디에 있나요?"라고 묻는다. 메시지는 사라지지 않으니 안전한 곳에 멈춰 서서 답해도 늦지 않다는 점을 짚는다.',
          task: '메시지가 온 상황의 갈림길마다 고르고, 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '급한 메시지',
            steps: [
              { text: '횡단보도 앞에서 신호를 기다리는데 친구 메시지가 와요. "빨리 답해!"', motif: 'star',
                good: ['pocket', '휴대전화를 넣고 신호를 본다', '초록불에 좌우를 살피고 건너요.', [['나', '신호를 놓치지 않아요', 1]]],
                bad: ['reply', '답장을 쓰며 건넌다', '신호가 바뀐 줄 모르고 차가 경적을 울려요.', '건너는 동안에는 눈을 길에 둬요.', [['운전자', '깜짝 놀라요', -1]]] },
              { text: '길을 건넜어요. 메시지가 또 와서 휴대전화가 울려요.', motif: 'house',
                good: ['stop', '보도 안쪽에 멈춰 서서 확인한다', '안전한 곳에서 답장을 보냈어요.', [['친구', '답을 받아요', 1], ['나', '안전해요', 1]]],
                bad: ['walk', '걸으면서 메시지를 읽는다', '앞에서 오던 자전거와 부딪칠 뻔해요.', '걸을 때 보려면 먼저 멈춰 서요.', [['자전거 탄 사람', '급히 멈춰요', -1]]] },
              { text: '골목 끝에 왔어요. 이어폰으로 음성 메시지가 나오고 있어요.', motif: 'tree',
                good: ['ear', '이어폰을 빼고 좌우를 살핀다', '나오던 차 소리를 듣고 기다려요.', [['나', '차를 먼저 알아채요', 1]]],
                bad: ['music', '들으며 그대로 지나간다', '골목에서 나오던 차가 급히 서요.', '골목 끝에서는 귀로도 살펴요.', [['운전자', '급히 멈춰요', -1]]] },
            ],
            ending: '메시지는 멈춘 뒤에 확인한 덕분에 친구에게 답도 하고 안전하게 왔어요.',
            reasons: [{ id: 'stop', text: '걸을 때는 멈춰 서서 본다' }, { id: 'eyes', text: '길에서는 눈과 귀를 길에 둔다' }, { id: 'fast', text: '급한 메시지는 바로 답해야 한다', why: '메시지는 멈춘 뒤에 답해도 늦지 않아요.' }, { id: 'multi', text: '나는 보면서도 다 본다', why: '화면을 보면 보는 범위가 좁아져요.' }],
            good: ['stop', 'eyes'],
            talk: '모둠에서 "친구에게 답하기 좋은 때와 곳은 언제, 어디일까?"를 정해 말해요.',
            conclude: '메시지는 걸으면서 보지 않고, 안전한 곳에 멈춰 서서 확인해요.',
          }),
        },
        worksheet: { items: [{ type: 'choice', prompt: '걷는 중 메시지가 왔어요. 어떻게 할까요?', options: ['걸으며 바로 읽는다', '보도 안쪽에 멈춰 서서 본다', '뛰어가며 답한다'], answer: '보도 안쪽에 멈춰 서서 본다' }] },
      }),
      X('activity.spots', {
        title: '휴대전화를 넣어 둘 곳', method: '휴대전화를 넣어 둘 곳', tool: 'map', minutes: 14,
        levels: { easy: '집·학교와 고를 칸 2개만 있는 지도에서 핀을 꽂고, 핀을 놓으면 칸 이름이 보인다.', base: '위험 칸 4개(횡단보도·골목 끝·주차장 입구·버스 정류장)와 쉼터가 있는 지도에서 고른다.', challenge: '같은 지도에서 위험 칸을 고른 뒤, 셋째 문항에서 멈춰 서서 확인할 안전한 칸을 고른다.' },
        activity: {
          title: '통학로 지도에 넣어 둘 곳 꽂기', tool: 'map',
          teacher: '"이 통학로에서 휴대전화를 꼭 넣어 둬야 할 곳은 어디일까요?" 집에서 학교까지 손가락으로 길을 따라가며 칸마다 무엇이 있는지 읽게 한다. "횡단보도에서만 넣으면 돼요"라는 학생에게 "주차장 입구에서는 차가 어디서 나올까요?"라고 되묻는다. 도전에서는 메시지를 확인해도 되는 안전한 칸을 고르고 까닭을 말하게 한다.',
          task: '통학로 지도에서 휴대전화를 꼭 넣어 둘 곳에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            SPOT('신호를 기다리며 꼭 휴대전화를 넣어 둘 곳에 핀을 꽂아요.', '횡단보도', ['cross', 'rest']),
            SPOT('차가 갑자기 나올 수 있어 휴대전화를 넣어 둘 골목 칸에 핀을 꽂아요.', '골목 끝', ['alley', 'rest']),
            SPOT('차가 드나들어 휴대전화를 넣어 둘 곳에 핀을 꽂아요.', '주차장 입구', ['park', 'bus'], {
              difficulty: 0.25,
              levels: { easy: { toolOptions: { places: PL('home', 'school', 'park', 'bus'), readout: true } }, challenge: { prompt: '메시지가 오면 멈춰 서서 확인해도 되는 안전한 칸에 핀을 꽂아요.', target: { place: '보도 안쪽 쉼터' } } },
              conclude: '건너는 곳·골목 끝·차가 드나드는 곳에서는 휴대전화를 넣고, 확인은 안전한 곳에 멈춰서 해요.',
            }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 통학로에서 휴대전화를 꼭 넣어 둘 곳 하나를 써요.' }] },
        notes: '통학로 칸 지도는 가상이다. 학생 집 주소나 실제 집 위치를 적게 하지 않는다.',
      }),
      X('wrap.pledge', {
        title: '나의 걷기 다짐 글', method: '나의 걷기 다짐 글', tool: 'rubric-writing', minutes: 6,
        levels: { easy: '기준 2개로 점검하고 문장 틀(걸을 때 나는 ~)을 써도 된다.', base: '두세 문장을 쓰고 기준 3개(행동·장소·까닭)로 점검한다.', challenge: '기준 3개로 점검한 뒤 한 군데 고쳐 쓰고 장소 낱말을 넣으며, 친구에게 권하는 문장은 활동지에 더한다.' },
        wrap: {
          teacher: '"\'조심할게요\' 말고, 어디에서 무엇을 할지 써 볼까요?" 기준표를 함께 읽고 쓴 뒤 스스로 점검하게 한다. "휴대전화를 안 볼게요"처럼 막연하게 쓴 학생에게 "언제, 어디에서요? 그리고 왜 그렇게 할까요?"라고 묻는다. 이름이나 사는 곳은 쓰지 않게 한다.',
          exitTicket: [
            RUBX('"걸을 때 나는 ___" 다짐 글을 두세 문장으로 쓰고 기준표로 점검해요.', { topic: '걸을 때 나의 다짐(두세 문장)', title: '걷기 다짐 쓰기', starter: '걸을 때 나는 ~에서 ~. 왜냐하면 ~', crit: ['무엇을 할지 행동을 썼다', '어디에서 할지 장소를 썼다', '왜 그런지 까닭을 썼다'], must: [['횡단보도', '골목', '건널', '길']], chars: [25, 160] }),
            { type: 'choice', prompt: '다짐 글로 가장 알맞은 것은 무엇인가요?', options: ['조심할게요', '횡단보도 앞에서는 휴대전화를 넣을게요', '휴대전화를 빨리 볼게요'], answer: 1, difficulty: 0.15, explain: '어디에서 무엇을 할지 분명해야 지키기 쉬워요.' },
            { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '나의 걷기 다짐',
          items: [
            { type: 'short', prompt: '내 걷기 다짐을 한 문장으로 다시 써요.' },
            { type: 'short', prompt: '친구에게 함께 지키자고 권하는 문장을 써요.' },
          ],
        },
      }),
      X('wrap.self', {
        title: '일주일 걷기 습관 계획', method: '일주일 걷기 습관 계획', tool: 'timeline', minutes: 6,
        levels: { easy: '습관 카드 2장을 나서기 전·걷는 중·건너기 전 띠에 나눈다.', base: '습관 카드 3장을 나눈다.', challenge: '습관 카드 5장을 나누고, 가족도 함께 점검하자고 제안할 말을 쓴다.' },
        wrap: {
          teacher: '"이번 주에 걸을 때 지킬 습관을 언제 할지 정해 볼까요?" 카드를 띠에 나눈 뒤 활동지 표에 요일마다 지켰는지 표시할 칸을 만든다. "이어폰은 건널 때만 빼면 돼요"라는 학생에게 "골목 끝에서는 어떨까요? 나서기 전에 가방에 넣어 두면 더 쉬워요"라고 말해 준다.',
          exitTicket: [
            TLX('걷기 습관 카드를 시간 띠에 나누어요.', ['나서기 전', '걷는 중', '건너기 전'], { '나서기 전': ['이어폰은 가방에', '휴대전화는 주머니에'], '걷는 중': ['메시지는 멈춰서'], '건너기 전': ['고개 들고 신호 보기', '좌우 살피기'] }, ['이어폰은 가방에', '고개 들고 신호 보기'], ['이어폰은 가방에', '메시지는 멈춰서', '고개 들고 신호 보기']),
            { type: 'choice', prompt: '이어폰을 끼고 걸으면 무엇을 놓치기 쉬운가요?', options: ['자전거 종소리', '신발 끈', '날씨'], answer: 0, difficulty: 0.15, explain: '이어폰을 끼면 다가오는 소리를 늦게 들어요.' },
            { type: 'short', prompt: '가족에게 함께 점검하자고 할 말을 한 문장으로 써요.' },
          ],
        },
        worksheet: {
          title: '일주일 걷기 습관',
          items: [
            { type: 'table', prompt: '지킨 날에 ○를 해요.', columns: ['습관', '월', '화', '수', '목', '금'], cells: [['휴대전화는 주머니에', '', '', '', '', ''], ['건너기 전 이어폰 빼기', '', '', '', '', '']] },
            { type: 'short', prompt: '일주일 뒤 가장 잘 지킨 습관을 써요.' },
          ],
          easy: { note: '눈과 귀를 길에 둬요.', items: [{ type: 'draw', prompt: '고개를 들고 걷는 내 모습을 그려요.' }] },
        },
        notes: '시간 띠의 요일 칸은 정답이 정해지지 않아, 교구는 걷기 구간(나서기 전·걷는 중·건너기 전)으로 나누고 요일별 계획은 활동지 표로 한다.',
      }),
    );
  }

  // ======== 6학년 · 대중교통 안전수칙과 비상 상황 (별표 2 초등 교통안전 "교통수단(자전거, 대중교통 등)의 안전한 이용법 알기" + 표준안 대중교통) ========
  {
    const X = mk('transit', 6);
    // 역 칸 지도: 현재 위치 + 가까운 곳(near)·먼 곳(far). 쉬움 = 하나만, 도전 = 가까운 쪽이 막힘
    const P = (name, at, icon = 'dot', legend) => Object.assign({ name, icon, at }, legend ? { legend } : {});
    const EXIT = (title, prompt, hereAt, near, far, blockAt, d, more) => {
      const base = [P('현재 위치', hereAt, 'house', '현재 위치'), P(near[0], near[1], 'station'), P(far[0], far[1], 'station'), P('매표소', [2, 0], 'office')];
      return Object.assign({
        prompt, toolOptions: { grid: [6, 4], title, places: base, legend: false }, target: { place: near[0] }, difficulty: d,
        levels: {
          easy: { prompt: `${title}에서 ${near[0]}에 핀을 꽂아요.`, toolOptions: { places: [base[0], base[1], base[3]], readout: true } },
          challenge: { prompt: `${near[0]} 쪽 길이 막혔어요. ${title}에서 다른 곳에 핀을 꽂아요.`, toolOptions: { places: [...base, P('막힌 길', blockAt)] }, target: { place: far[0] } },
        },
      }, more);
    };
    // 말풍선 빈칸(story fill) 문항: blanks = [[말풍선 글('___'), 카드]…3], 쉬움 = 빈칸 2개
    const FILL = (prompt, who, blanks, cards, title, d, more) => {
      const sl = blanks.map(([label], i) => ({ id: `b${i + 1}`, who, label }));
      const tg = (n) => ({ fill: Object.fromEntries(blanks.slice(0, n).map(([, c], i) => [`b${i + 1}`, c])) });
      return Object.assign({ prompt, toolOptions: { mode: 'fill', title, slots: sl, cards }, target: tg(3), difficulty: d,
        levels: { easy: { prompt: `${cut(prompt)}(빈칸 둘).`, toolOptions: { slots: sl.slice(0, 2) }, target: tg(2) } } }, more);
    };
    M.push(
      X('intro.why', {
        title: '수칙과 까닭 잇기', method: '수칙과 까닭 잇기', tool: 'mindmap', minutes: 5,
        levels: { easy: '교사가 가지 2개(안전선 뒤·손잡이 잡기)에 까닭 카드가 이어지는 시연을 함께 읽는다.', base: '가지 3개(문에 기대지 않기까지)의 시연을 보고 까닭을 짝과 말한다.', challenge: '까닭 카드의 글을 내 말로 바꿔 짝에게 설명한다.' },
        intro: {
          teacher: '"지하철 승강장에서 왜 안전선 뒤에 서야 할까요?" 시연 단추로 안전선 뒤 → \'들어오는 열차와 떨어져요\', 손잡이 잡기 → \'급정거 때 버텨요\', 문에 기대지 않기 → \'문이 열리면 넘어져요\'가 이어지는 모습을 보인다. "수칙은 그냥 지키라고 있는 거예요"라는 말에는 "까닭을 알면 처음 가는 곳에서도 지킬 수 있어요"라고 되묻는다.',
          student: '버스나 지하철에서 지킨 수칙 하나를 떠올리고, 그 까닭을 짝에게 말해 보아요.',
          demo: { tool: 'mindmap', options: { mode: 'match', topic: '대중교통 수칙', slots: [{ id: 'line', label: '안전선 뒤에 서기' }, { id: 'grip', label: '손잡이 잡기' }, { id: 'door', label: '문에 기대지 않기' }], cards: ['문이 열리면 넘어져요', '들어오는 열차와 떨어져요', '급정거 때 버텨요'] }, sequence: [{ match: { line: '들어오는 열차와 떨어져요', grip: '급정거 때 버텨요', door: '문이 열리면 넘어져요' } }] },
          art: art('a paper subway platform with a yellow safety line, paper children waiting behind it and a train arriving', '수칙에는 까닭이 있어요', 'star', 'sky'),
        },
      }),
      X('intro.brake', {
        title: '급정거 때 몸의 움직임', method: '급정거 때 몸의 움직임', tool: 'body', minutes: 5,
        levels: { easy: '교사가 종이 몸의 손목(손잡이 잡기) 한 곳을 짚는 시연을 함께 본다.', base: '손목(손잡이)과 무릎(발 벌리고 무릎 살짝 굽히기) 두 곳 시연을 보고 몸이 쏠리는 쪽을 말한다.', challenge: '서 있을 때와 앉아 있을 때 버티는 자세를 견주어 말한다.' },
        intro: {
          teacher: '"버스가 갑자기 서면 몸은 어느 쪽으로 쏠릴까요?" 학생 한 명이 제자리에서 앞으로 살짝 기울어지는 시늉을 보이게 하고, 시연 단추로 종이 몸의 손목 → 무릎이 골라지는 모습을 보인다. "다리 힘만 세면 안 넘어져요"라는 말에는 "버스가 세게 서면 다리만으로 버틸 수 있을까요? 손잡이를 잡아야 해요"라고 되묻는다.',
          student: '버스가 갑자기 설 때 넘어지지 않으려면 몸의 어디에 힘을 줄지 짝에게 말해 보아요.',
          demo: { tool: 'body', options: { mode: 'parts', parts: ['손목', '팔꿈치', '허리', '무릎', '발목'], names: true, ask: { q: '버스가 갑자기 서면 몸은 어느 쪽으로 쏠릴까요?', choices: ['앞쪽', '뒤쪽', '그대로'] } }, sequence: [{ parts: ['손목'] }, { parts: ['손목', '무릎'] }, { parts: ['손목', '무릎'], pick: 0 }] },
          art: art('a paper bus interior with a child holding a hanging strap, feet apart and knees slightly bent, small arrows showing the body leaning forward', '갑자기 서면 몸이 쏠려요', 'cloud', 'peach'),
        },
        notes: '종이 몸에는 손·발 칸이 없어 손잡이를 잡는 손은 손목 칸, 발 벌리고 서기는 무릎 칸으로 이야기한다. 학생이 자기 손·발을 짚어 보게 한다.',
      }),
      X('activity.case', {
        title: '급정거 사례 원인과 결과', method: '급정거 사례 원인과 결과', tool: 'story', minutes: 15,
        levels: { easy: '사례 장면 3장을 차례대로 놓고 원인·결과 말풍선 빈칸 2개를 채운다.', base: '장면 4장을 놓고 말풍선 빈칸 3개를 채운다.', challenge: '장면 4장에 섞인 틀린 장면을 빼고 놓은 뒤 빈칸 3개를 채우고, 다른 행동을 했을 때의 결과를 고른다.' },
        activity: {
          title: '버스 급정거 사례 잇기', tool: 'story',
          teacher: '"이 친구는 왜 넘어졌을까요? 한 가지 때문일까요?" 장면을 놓은 뒤 말풍선에 \'~해서 → ~했어요\'로 원인과 결과를 이어 읽게 한다. "운전기사님이 갑자기 세워서 그래요"라는 학생에게 "버스는 앞차나 사람 때문에 갑자기 설 수 있어요. 그때 나는 무엇을 하고 있었나요?"라고 되묻는다. 셋째 문항에서 다른 행동이 결과를 바꾼다는 점을 짚는다.',
          task: '버스 안 급정거 사례 장면을 차례대로 놓고, 원인과 결과 말풍선을 채워요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDER('버스에서 넘어진 사례(지어낸 이야기)를 차례대로 놓아요.', ['휴대전화 보며 서 있어요', '손잡이를 안 잡았어요', '버스가 갑자기 서요', '앞으로 넘어져요'], { easy: [0, 2, 3], trap: '손잡이를 꼭 잡아요', motifs: ['sun', 'house', 'star', 'cloud'] }, 0.2),
            FILL('사례 속 원인과 결과를 말풍선에 채워요.', '선', [['손잡이를 안 잡아서 ___.', '몸을 버티지 못했어요'], ['화면만 보고 있어서 ___.', '멈추는 걸 몰랐어요'], ['문 앞에 서 있어서 ___.', '내리는 사람과 부딪혔어요']], ['멈추는 걸 몰랐어요', '내리는 사람과 부딪혔어요', '몸을 버티지 못했어요', '자리에 앉았어요'], '버스 안 이야기', 0.25),
            { prompt: '넘어지지 않았을 행동만 골라 담아요.', toolOptions: { mode: 'pick', basket: '넘어지지 않았을 행동', cards: ['손잡이 잡고 서기', '휴대전화는 가방에', '문에 기대어 서기', '발 벌리고 서기', '걸어 다니며 자리 찾기'] }, target: { pick: ['손잡이 잡고 서기', '휴대전화는 가방에', '발 벌리고 서기'] }, difficulty: 0.25, conclude: '버스 안에서는 손잡이를 잡고, 화면보다 둘레를 보면 급정거에도 버틸 수 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '버스에서 서 있을 때는 ___를 꼭 잡아요.', answer: '손잡이' }] },
        notes: '사례는 지어낸 이야기다. 학생에게 다쳤던 일을 말하게 하지 않는다.',
      }),
      X('activity.emergency', {
        title: '지하철이 멈추고 연기 냄새가 나요', method: '지하철이 멈추고 연기 냄새가 나요', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림길 1번(방송을 들을지 문을 열지)에서 고르고 근거 한 장을 고른다.', base: '갈림길 2번(직원에게 알리기)을 지나 근거를 고른다.', challenge: '갈림길 3번(안내대로 이동)까지 지나, 119로 알리는 근거를 포함해 근거 두 장을 모두 고르고 다른 길과 견준다.' },
        activity: {
          title: '갈림길: 지하철이 멈췄어요', tool: 'dilemma',
          teacher: '"열차가 멈추면 겁이 날 수 있어요. 그때 가장 먼저 무엇을 들어야 할까요?" 고를 때마다 결과를 소리 내어 읽게 한다. "비상 때는 먼저 뛰어나가야 해요"라는 학생에게 "모두 한꺼번에 뛰면 어떻게 될까요? 방송과 직원 안내가 가장 안전한 길을 알려 줘요"라고 말해 준다. 이상한 냄새가 나면 비상 인터폰으로 직원에게 알리고, 필요하면 119에 신고한다는 점을 짚는다.',
          task: '지하철이 멈춘 상황의 갈림길마다 고르고, 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '지하철이 멈췄어요',
            steps: [
              { text: '지하철이 역 사이에서 멈추고 "잠시 기다려 주세요" 방송이 나와요. 옅은 탄 냄새가 나요.', motif: 'cloud',
                good: ['listen', '보호자 곁에서 방송을 듣는다', '다음 안내를 놓치지 않고 들어요.', [['나', '침착해져요', 1]]],
                bad: ['door', '문을 억지로 열려고 한다', '문이 열리지 않고 사람들이 놀라 술렁여요.', '안내 없이 문을 열면 더 위험해요.', [['둘레 사람들', '더 불안해져요', -1]]] },
              { text: '냄새가 조금 더 나는 것 같아요. 칸 끝에 비상 인터폰이 보여요.', motif: 'star',
                good: ['call', '비상 인터폰으로 직원에게 알린다', '직원이 상황을 알고 안내를 해 줘요.', [['직원', '빨리 알아요', 1]]],
                bad: ['run', '다른 칸으로 뛰어간다', '사람들과 부딪혀 넘어질 뻔해요.', '뛰지 말고 알리는 것이 먼저예요.', [['나', '넘어질 위험', -1]]] },
              { text: '방송이 내릴 방향과 순서를 알려 줘요.', motif: 'house',
                good: ['follow', '안내대로 천천히 따라간다', '차례대로 안전하게 역으로 나왔어요.', [['모두', '함께 안전해요', 1]]],
                bad: ['first', '혼자 먼저 앞질러 간다', '보호자와 떨어지고 길을 헤매요.', '안내 순서를 따라야 모두 안전해요.', [['보호자', '나를 찾아요', -1]]] },
            ],
            ending: '방송을 듣고 알리고 따른 덕분에 모두 침착하게 밖으로 나왔어요.',
            reasons: [{ id: 'guide', text: '비상 때는 방송과 직원 안내를 따른다' }, { id: 'tell', text: '이상하면 직원에게 알리고 필요하면 119에 알린다' }, { id: 'first', text: '먼저 뛰어나가야 안전하다', why: '한꺼번에 뛰면 넘어지고 밀려요.' }, { id: 'self', text: '어른들이 하니 나는 몰라도 된다', why: '나도 알리고 따르는 방법을 알아야 해요.' }],
            good: ['guide', 'tell'],
            talk: '모둠에서 "비상 때 겁이 나면 무엇부터 할까?"를 한 가지씩 말해요.',
            conclude: '비상 때는 뛰지 말고, 방송을 듣고, 직원에게 알리고, 안내를 따라요.',
          }),
        },
        worksheet: { items: [{ type: 'choice', prompt: '지하철에서 불이나 연기를 보면 어디에 신고하나요?', options: ['112', '119', '1388'], answer: '119' }] },
        notes: '겁을 주는 장면을 덧붙이지 않는다. 방송·직원 안내를 따르는 침착한 행동에 초점을 둔다.',
      }),
      X('activity.exit', {
        title: '역 안 대피 길 찾기', method: '역 안 대피 길 찾기', tool: 'map', minutes: 15,
        levels: { easy: '갈 곳이 한 곳만 있는 역 지도에서 핀을 꽂고, 핀을 놓으면 칸 이름이 보인다.', base: '계단·출구 두 곳 가운데 현재 위치에서 가까운 곳을 칸을 세어 고른다.', challenge: '가까운 쪽 길이 막힌 조건에서 다른 계단·출구를 찾는다.' },
        activity: {
          title: '역 지도에서 가까운 계단·출구 찾기', tool: 'map',
          teacher: '"역 안내도의 \'현재 위치\'에서 출구까지 몇 칸일까요?" 칸을 손가락으로 따라가며 세게 한다. "들어온 출구로만 나가야 해요"라는 학생에게 "들어온 곳이 가장 가까울까요? 비상구 표시와 안내도를 따라가요"라고 묻는다. 도전에서는 막힌 길을 지나지 않는 다른 길을 말로 설명하게 한다. 비상 때 승강기가 아니라 계단을 쓴다는 점도 짚는다.',
          task: '역 안내도에서 현재 위치를 찾고, 가장 가까운 계단이나 출구에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            EXIT('승강장 안내도', '승강장에서 현재 위치와 가장 가까운 계단에 핀을 꽂아요.', [2, 2], ['계단 가', [0, 2]], ['계단 나', [5, 1]], [1, 2], 0.2),
            EXIT('대합실 안내도', '대합실에서 현재 위치와 가장 가까운 출구에 핀을 꽂아요.', [4, 1], ['1번 출구', [5, 3]], ['2번 출구', [0, 3]], [5, 2], 0.25),
            EXIT('환승 통로 안내도', '환승 통로에서 현재 위치와 가장 가까운 출구에 핀을 꽂아요.', [1, 1], ['3번 출구', [0, 0]], ['4번 출구', [4, 3]], [0, 1], 0.3, { conclude: '역에 들어가면 안내도의 현재 위치와 가까운 출구를 먼저 찾아 둬요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '역에서 비상 상황이 생기면 무엇을 따라 나가요?', options: ['가장 빠른 사람', '비상구 표시와 안내 방송', '승강기'], answer: '비상구 표시와 안내 방송' }] },
        notes: '역 칸 지도는 꾸민 것이다. 실제로 자주 가는 역의 안내도와 견주어 보게 한다. 교구는 문항마다 한 곳에 핀을 꽂으므로 길 전체 대신 가까운 계단·출구를 고르게 한다.',
      }),
      X('activity.care', {
        title: '배려와 안전 함께 지키기', method: '배려와 안전 함께 지키기', tool: 'kitchen', minutes: 14,
        levels: { easy: '장면 칸 2개에 알맞은 행동 카드를 짝 짓는다.', base: '장면 칸 3개에 행동 카드를 짝 짓는다.', challenge: '장면 칸 3개에 짝 짓되 섞인 함정 카드를 빼고, 안전과 배려가 함께 되는 까닭을 모둠에서 말한다.' },
        activity: {
          title: '장면에 배려하는 행동 짝 짓기', tool: 'kitchen',
          teacher: '"어르신이 버스에 타실 때, 나는 무엇을 할 수 있을까요?" 장면마다 행동 카드를 놓고 그 행동이 누구를 어떻게 지키는지 말하게 한다. "배려는 착한 일이고 안전과는 상관없어요"라는 학생에게 "유모차가 내릴 때 문 앞을 비켜 주면 누가 안전해질까요?"라고 되묻는다.',
          task: '대중교통 장면 칸마다 알맞은 행동 카드를 짝 지어 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            MATCH('버스 장면마다 알맞은 행동 카드를 놓아요.', null, [['어르신이 버스에 타요', '자리를 비켜 드려요'], ['유모차가 내려요', '문 앞을 비켜 줘요'], ['버스 안이 붐벼요', '가방을 앞으로 메요']], '문 앞에 버텨 서요', 0.2),
            MATCH('지하철 장면마다 알맞은 행동 카드를 놓아요.', null, [['문이 닫히려 해요', '다음 열차를 기다려요'], ['휠체어 이용자가 타요', '타는 길을 비켜 줘요'], ['에스컬레이터가 붐벼요', '손잡이 잡고 멈춰 서요']], '닫히는 문에 손 넣기', 0.25, { conclude: '배려하는 행동은 다른 사람도 나도 함께 안전하게 해요.' }),
            { prompt: '모둠에서 안전과 배려가 함께 되는 까닭을 한 가지씩 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '장면에 알맞은 행동을 써요.', columns: ['장면', '나의 행동'], cells: [['어르신이 타요', ''], ['문이 닫히려 해요', '']] }] },
      }),
      X('wrap.self', {
        title: '대중교통 스스로 점검', method: '대중교통 스스로 점검', tool: 'timer', minutes: 6,
        levels: { easy: '점검 칸 2개(안전선·손잡이)를 표시한다.', base: '점검 칸 3개를 표시한다.', challenge: '점검 칸 4개를 표시하고, 가족 나들이 때 알려 줄 것을 쓴다.' },
        wrap: {
          teacher: '"다음에 버스나 지하철을 타면 꼭 지킬 것은 무엇인가요?" 점검 칸을 스스로 읽고 지킬 수 있는 것에 표시하게 한다. 출구 2번에서 "손을 넣으면 문이 다시 열린다"를 고른 학생에게 "문에 손이 끼이면 다칠 수 있어요. 다음 열차를 기다려요"라고 말해 준다.',
          exitTicket: [
            SELF('대중교통 점검', ['안전선 뒤에서 기다린다', '서 있을 때 손잡이를 잡는다', '문이 닫힐 때는 다음을 기다린다', '비상 때는 방송을 따른다']),
            { type: 'choice', prompt: '지하철 문이 닫히고 있어요. 어떻게 할까요?', options: ['손을 넣어 다시 연다', '뛰어서 탄다', '다음 열차를 기다린다'], answer: 2, difficulty: 0.15, explain: '닫히는 문에 손이나 가방을 넣으면 끼일 수 있어요.' },
            { type: 'short', prompt: '가족 나들이 때 가족에게 알려 줄 대중교통 수칙 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '대중교통을 안전하게',
          items: [
            { type: 'check', prompt: '다음에 탈 때 지킬 것에 표시해요.', options: ['안전선 뒤에서 기다리기', '손잡이 잡기', '닫히는 문에 뛰어들지 않기'] },
            { type: 'short', prompt: '수칙 하나와 그 까닭을 써요.' },
          ],
          easy: { note: '안전선 뒤, 손잡이를 떠올려요.', items: [{ type: 'draw', prompt: '손잡이를 잡고 서 있는 내 모습을 그려요.' }] },
        },
      }),
      X('wrap.tell', {
        title: '비상 때 내 마음 다스리기', method: '비상 때 내 마음 다스리기', tool: 'emotion', minutes: 6,
        levels: { easy: '마음 장면 1개에 가라앉히는 행동 카드를 짝 짓는다.', base: '마음 장면 2개에 행동 카드를 짝 짓는다.', challenge: '마음 장면 3개에 짝 짓고, 친구가 겁낼 때 해 줄 말을 고른다.' },
        wrap: {
          teacher: '"갑자기 멈추거나 이상한 일이 생기면 놀라는 것은 당연해요. 그 마음을 어떻게 가라앉힐까요?" 장면마다 행동 카드를 짝 짓고, 숨을 천천히 쉬어 보는 동작을 반 전체가 함께 해 본다. "겁나면 아무 생각도 안 나요"라는 학생에게 "그래서 미리 연습해 두는 거예요. 숨 고르기부터 해 볼까요?"라고 말해 준다.',
          exitTicket: [
            FEEL('마음 장면에 가라앉히는 행동을 이어요.', [['갑자기 서서 깜짝 놀랐어요', '천천히 숨 고르기'], ['무슨 일인지 몰라 걱정돼요', '안내 방송 듣기'], ['혼자일까 봐 무서워요', '어른 곁에 있기']], ['천천히 숨 고르기', '안내 방송 듣기', '어른 곁에 있기', '문 쪽으로 뛰기']),
            { type: 'choice', prompt: '친구가 멈춘 지하철에서 겁을 내요. 무슨 말을 해 줄까요?', options: ['빨리 뛰어나가자', '같이 숨 고르고 방송을 듣자', '무서우면 울어'], answer: 1, difficulty: 0.15, explain: '함께 숨을 고르고 안내를 들으면 마음이 가라앉아요.' },
            { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '비상 때 침착하게',
          items: [
            { type: 'table', prompt: '마음과 가라앉히는 행동을 써요.', columns: ['마음', '나의 행동'], cells: [['놀람', ''], ['걱정', '']] },
            { type: 'short', prompt: '겁내는 친구에게 해 줄 말을 한 문장으로 써요.' },
          ],
        },
      }),
    );
  }

  // ======== 6학년 · 교통사고가 났을 때 (별표 2 초등 교통안전 "교통 표지판 등 도로 교통 법규 알기" + 표준안 자동차[예방], 사고 뒤 대처는 재량 보충) ========
  {
    const X = mk('afteraccident', 6);
    // 신고 전화 말풍선 빈칸(story fill): blanks = [[말풍선 글('___' 자리), 넣을 카드]…3], 쉬움 = 빈칸 2개, 도전 = 함정 카드 하나 더
    const CALL = (prompt, blanks, extra, trap, d, more) => {
      const sl = blanks.map(([label], i) => ({ id: `b${i + 1}`, who: '나', label }));
      const tg = (n) => ({ fill: Object.fromEntries(blanks.slice(0, n).map(([, c], i) => [`b${i + 1}`, c])) });
      const cards = (n) => [...blanks.slice(0, n).map(([, c]) => c).reverse(), ...extra];
      return Object.assign({
        prompt, toolOptions: { mode: 'fill', title: '신고 전화(연습)', slots: sl, cards: cards(3) }, target: tg(3), difficulty: d,
        levels: {
          easy: { prompt: `${cut(prompt)}(빈칸 2개).`, toolOptions: { slots: sl.slice(0, 2), cards: cards(2) }, target: tg(2) },
          challenge: { prompt: `${cut(prompt)}(맞지 않는 카드도 있어요).`, toolOptions: { cards: [...cards(3), trap] } },
        },
      }, more);
    };
    const STREET = [
      { name: '사고 난 곳', icon: 'dot', at: [3, 2], legend: '사고 난 곳' }, { name: '편의점', icon: 'market', at: [1, 2] },
      { name: '우체국', icon: 'post', at: [3, 0] }, { name: '도서관', icon: 'library', at: [5, 2] },
      { name: '학교', icon: 'school', at: [0, 0] }, { name: '공원', icon: 'park', at: [3, 3] },
    ];
    M.push(
      X('intro.order', {
        title: '먼저 할 일 차례', method: '먼저 할 일 차례', tool: 'timeline', minutes: 5,
        levels: { easy: '교사가 카드 3장(피하기·알리기·신고하기)만 짚으며 시연을 보고 차례를 따라 말한다.', base: '카드 4장이 차례로 놓이는 시연을 보고 왜 그 차례인지 짝과 말한다.', challenge: '차례가 바뀌면(신고부터 하려고 찻길에 서 있으면) 생길 일을 짝과 말한다.' },
        intro: {
          teacher: '"길에서 사고를 보았다면 가장 먼저 무엇을 해야 할까요?" 시연 단추로 안전한 곳으로 피해요 → 어른에게 알려요 → 신고해요(112·119) → 기다려요 카드가 시간 띠에 놓이는 모습을 보인다. "빨리 다가가서 봐야 도울 수 있어요"라는 말이 나오면 "찻길 한가운데 서 있으면 내가 또 다칠 수 있지 않을까요? 나부터 안전한 곳으로 가요"라고 되묻는다. 오늘은 지어낸 사고 장면으로 할 일을 익힌다고 밝힌다.',
          student: '사고를 보았을 때 첫 번째로 할 일이 왜 \'피하기\'인지 짝에게 말해 보아요.',
          demo: { tool: 'timeline', options: { mode: 'order', axis: ['먼저', '나중'], slots: 4, cards: [{ id: 'away', text: '안전한 곳으로 피해요' }, { id: 'tell', text: '어른에게 알려요' }, { id: 'call', text: '112·119에 신고해요' }, { id: 'wait', text: '기다려요' }] }, sequence: [{ order: ['away', 'tell', 'call', 'wait'] }] },
          art: art('a paper street corner after a small bicycle and car bump, a paper child stepping back onto the sidewalk and waving to an adult', '먼저 안전한 곳으로', 'star', 'peach'),
        },
        notes: '사고 장면은 지어낸 것이다. 학생에게 자기나 가족이 다친 일을 말하게 하지 않는다. 신고 번호는 112·119만 다룬다.',
      }),
      X('intro.scene', {
        title: '사고를 봤을 때 마음', method: '사고를 봤을 때 마음', tool: 'emotion', minutes: 5,
        levels: { easy: '교사가 장면 하나를 읽어 주고 놀람·걱정 마음을 함께 고른 뒤 첫 행동 보기를 고른다.', base: '시연 장면을 보고 내 마음과 그 마음일 때 할 첫 행동을 짝과 말한다.', challenge: '친구가 겁낼 때 해 줄 말을 하나 골라 짝에게 말한다.' },
        intro: {
          teacher: '"길에서 자전거와 차가 부딪치는 것을 보았다면 어떤 마음이 들까요?" 놀람·걱정 같은 마음은 당연하다고 먼저 말해 준다. 시연 단추로 \'보도 안쪽으로 물러나 어른을 찾는다\' 보기가 골라지는 모습을 보인다. "무서우면 그냥 달아나도 돼요"라는 말에는 "무서울 때일수록 한 가지만 해 봐요. 안전한 곳에서 어른을 부르는 거예요"라고 말해 준다.',
          student: '놀란 마음일 때 할 수 있는 첫 행동 하나를 짝에게 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'branch', situation: '길 건너에서 자전거와 차가 부딪치는 것을 보았어요.', feeling: '놀람', ask: '먼저 무엇을 할까요?', choices: [{ id: 'near', text: '가까이 뛰어가서 본다', result: '찻길로 들어서서 내가 위험해져요.' }, { id: 'safe', text: '보도 안쪽에서 어른을 찾는다', result: '어른이 와서 신고를 도와줘요.' }, { id: 'go', text: '못 본 척 지나간다', result: '도움이 늦어질 수 있어요.' }] }, sequence: [{ choice: 'safe' }] },
          art: art('a paper child on a sidewalk looking surprised at a small paper bicycle and car bump across the street, an adult coming to help', '놀랐을 때 첫 행동은?', 'cloud', 'sky'),
        },
      }),
      X('activity.call', {
        title: '신고 전화 대화 완성', method: '신고 전화 대화 완성', tool: 'story', minutes: 15,
        levels: { easy: '신고 전화 말풍선의 빈칸 2개(어디인지·무슨 일인지)에 카드를 넣는다.', base: '빈칸 3개(어디인지·무슨 일인지·다친 사람)에 카드를 넣는다.', challenge: '빈칸 3개를 채우되, 위치가 분명하지 않은 함정 카드를 가려 낸다.' },
        activity: {
          title: '신고 전화 말풍선 채우기', tool: 'story',
          teacher: '"전화를 받는 사람은 사고 난 곳을 볼 수 없어요. 무엇을 먼저 알려 줘야 할까요?" 말풍선을 소리 내어 읽으며 어디인지 → 무슨 일인지 → 다친 사람 차례를 짚는다. "여기요, 빨리 와 주세요"만 말하면 된다는 학생에게 "\'여기\'가 어디인지 전화 건너편에서 알 수 있을까요? 가까운 건물·횡단보도 이름을 말해요"라고 묻는다. 다친 사람이 있으면 119, 사고를 알릴 때는 112라는 점을 짚는다. 도전에서는 \'저기 그 길\' 같은 카드를 빼게 한다.',
          task: '신고 전화 대화의 빈칸에 알맞은 말 카드를 넣어 대화를 완성해요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            CALL('자전거와 차가 부딪친 장면을 신고하는 대화를 완성해요.', [['여기는 ___ 앞 횡단보도예요.', '우체국'], ['자전거와 차가 ___.', '부딪쳤어요'], ['자전거 탄 사람이 ___.', '다리를 다쳤어요']], ['문구점'], '저기 그 길', 0.2),
            CALL('길에서 넘어진 사람을 보고 119에 거는 대화를 완성해요.', [['___ 정문 앞 보도예요.', '도서관'], ['어떤 분이 ___.', '넘어졌어요'], ['그분이 ___.', '일어나지 못해요']], ['수영장'], '우리 동네 어딘가', 0.25),
            CALL('차끼리 부딪친 장면을 112에 알리는 대화를 완성해요.', [['___ 앞 사거리예요.', '편의점'], ['차 두 대가 ___.', '부딪쳤어요'], ['다친 사람은 ___.', '안 보여요']], ['놀이터'], '아까 그쪽', 0.3, { conclude: '신고할 때는 어디인지, 무슨 일인지, 다친 사람이 있는지를 차례로 말해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '신고 전화에서 가장 먼저 알려야 할 것은?', options: ['내 이름과 나이', '사고 난 곳이 어디인지', '오늘 날씨'], answer: '사고 난 곳이 어디인지' }] },
        notes: '연습 대화다. 실제로 112·119에 전화를 걸어 보게 하지 않는다. 학생 이름·연락처는 쓰지 않는다.',
      }),
      X('activity.where', {
        title: '어디라고 알릴까', method: '어디라고 알릴까', tool: 'map', minutes: 14,
        levels: { easy: '방위 4개 가운데 고르고, 방위표를 돌리면 읽기 글자가 보인다.', base: '가까운 건물에서 사고 난 곳이 어느 방위인지 방위 4개 가운데 고른다.', challenge: '방위 8개 가운데 고르고, 두 건물을 기준으로 위치를 설명한다.' },
        activity: {
          title: '건물과 방위로 사고 위치 알리기', tool: 'map',
          teacher: '"사고 난 곳은 편의점에서 어느 쪽인가요?" 지도에서 건물을 먼저 찾고, 그 건물에서 사고 난 곳까지 손가락으로 따라가며 방위를 말하게 한다. "그냥 \'큰길\'이라고 하면 돼요"라는 학생에게 "큰길은 여러 개예요. 건물 이름과 방위를 함께 말하면 더 빨리 찾아와요"라고 말해 준다. 셋째 문항은 전화를 받는 사람이 되어 설명을 듣고 핀을 꽂게 한다.',
          task: '가상의 동네 지도에서 건물을 기준으로 사고 난 곳의 방위를 찾고, 설명을 듣고 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: { points: 8 } },
          items: [
            { prompt: '편의점에서 보면 사고 난 곳은 어느 방위인가요?', toolOptions: { mode: 'compass', grid: [6, 4], title: '가상의 우리 동네', places: STREET, points: 4, legend: false }, target: { from: '편의점', to: '사고 난 곳' }, difficulty: 0.2 },
            { prompt: '우체국에서 보면 사고 난 곳은 어느 방위인가요?', toolOptions: { mode: 'compass', grid: [6, 4], title: '가상의 우리 동네', places: STREET, points: 4, legend: false }, target: { from: '우체국', to: '사고 난 곳' }, difficulty: 0.25,
              levels: { challenge: { prompt: '도서관에서 보면 사고 난 곳은 어느 방위인가요?', target: { from: '도서관', to: '사고 난 곳' } } } },
            { prompt: '"학교에서 동쪽으로 두 칸이에요." 설명을 듣고 그 자리에 핀을 꽂아요.', toolOptions: { grid: [6, 4], title: '가상의 우리 동네', places: STREET.slice(1), legend: false }, target: { from: '학교', dir: '동', steps: 2 }, difficulty: 0.3, conclude: '가까운 건물 이름과 방위를 함께 말하면 위치를 정확하게 알릴 수 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '위치를 알릴 때는 가까운 ___ 이름과 방위를 함께 말해요.', answer: '건물' }] },
        notes: '지도는 가상의 동네다. 수업 뒤 학교 둘레의 큰 건물 이름을 함께 떠올려 보게 한다. 학생 집 주소는 다루지 않는다.',
      }),
      X('activity.choose', {
        title: '부딪쳤는데 괜찮대요', method: '부딪쳤는데 괜찮대요', tool: 'dilemma', minutes: 15,
        levels: { easy: '갈림길 1번(그냥 갈지 어른께 알릴지)에서 고르고 근거 한 장을 고른다.', base: '갈림길 2번(집에 와서 말할지)을 지나 근거를 고른다.', challenge: '갈림길 3번까지 지나 근거를 모두 고르고, 다른 선택의 결과와 견주어 어른께 말할 것을 정한다.' },
        activity: {
          title: '갈림길: 살짝 부딪쳤는데 괜찮대요', tool: 'dilemma',
          teacher: '"안 아프면 그냥 가도 될까요?" 고를 때마다 결과를 소리 내어 읽게 한다. "혼날까 봐 말 안 할래요"라는 학생에게 "어른은 혼내려는 게 아니라 다친 곳이 없는지 살피려는 거예요. 지금은 괜찮아 보여도 나중에 아플 수 있어요"라고 말해 준다. 이야기는 지어낸 것이고, 자기 일을 말하지 않아도 된다는 점을 먼저 밝힌다.',
          task: '지어낸 이야기의 갈림길마다 고르고, 결과를 읽은 뒤 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '살짝 부딪쳤어요',
            steps: [
              { text: '자전거를 타다 골목에서 나오던 차와 살짝 부딪쳤어요. 운전자가 "괜찮니? 그냥 가" 해요.', motif: 'star',
                good: ['tell', '보도로 옮겨 어른께 알린다', '어른이 와서 운전자와 이야기해요.', [['나', '도움을 받아요', 1]]],
                bad: ['leave', '괜찮다며 그냥 간다', '아무도 사고를 모르게 돼요.', '괜찮아 보여도 어른께 꼭 알려야 해요.', [['나', '도움이 늦어요', -1]]] },
              { text: '집에 왔는데 무릎이 조금 욱신거려요. 혼날까 봐 걱정돼요.', motif: 'house',
                good: ['say', '보호자께 있었던 일을 다 말한다', '보호자가 무릎을 살펴봐 줘요.', [['나', '마음이 놓여요', 1]]],
                bad: ['hide', '혼날까 봐 말하지 않는다', '밤에 무릎이 더 아파요.', '숨기면 다친 곳을 늦게 알게 돼요.', [['나', '더 아파요', -1]]] },
              { text: '보호자가 병원에서 확인해 보자고 해요. 지금은 많이 아프지 않아요.', motif: 'sun',
                good: ['check', '함께 가서 확인을 받는다', '다친 곳이 없는지 확실히 알게 됐어요.', [['가족', '모두 안심해요', 1]]],
                bad: ['skip', '괜찮다며 가지 않는다', '아픈 까닭을 모른 채 지내요.', '아프지 않아 보여도 확인을 받아요.', [['나', '걱정이 남아요', -1]]] },
            ],
            ending: '괜찮아 보여도 어른께 알리고 확인을 받아 마음이 놓였어요.',
            reasons: [{ id: 'later', text: '괜찮아 보여도 나중에 아플 수 있다' }, { id: 'adult', text: '어른께 알려야 도움을 받는다' }, { id: 'ok', text: '안 아프면 그냥 가도 된다', why: '다친 곳은 나중에 알 수도 있어요.' }, { id: 'scold', text: '혼날까 봐 숨기는 게 낫다', why: '숨기면 도움이 늦어져요.' }],
            good: ['later', 'adult'],
            talk: '모둠에서 "어른께 무엇을 말하면 좋을까?"(어디서·무슨 일·아픈 곳)를 정해 말해요.',
            conclude: '사고가 나면 괜찮아 보여도 그 자리에서, 집에 와서 어른께 꼭 알려요.',
          }),
        },
        worksheet: { items: [{ type: 'choice', prompt: '차와 살짝 부딪쳤는데 안 아파요. 어떻게 할까요?', options: ['그냥 집에 간다', '어른께 알린다', '친구에게만 말한다'], answer: '어른께 알린다' }] },
      }),
      X('activity.check', {
        title: '사고 뒤 점검표', method: '사고 뒤 점검표', tool: 'kitchen', minutes: 14,
        levels: { easy: '사례를 읽고 점검 칸 2개 가운데 한 일만 표시한다(함정 칸 섞임).', base: '사례를 읽고 점검 칸 4개 가운데 한 일만 표시한다.', challenge: '점검 칸 4개를 표시하고, 빠뜨린 일이 있는 사례에서 빠진 일을 골라 고친다.' },
        activity: {
          title: '사례 속 사고 뒤 점검표', tool: 'kitchen',
          teacher: '"사례 속 아이는 무엇을 했고, 무엇을 하지 않았나요?" 사례 글을 소리 내어 읽고 한 일만 표시하게 한다. "보도로 피했으니 다 했어요"라는 학생에게 "어른께 알렸나요? 다친 곳은 말했나요?"라고 하나씩 묻는다. 셋째 문항에서 빠진 일을 고른 뒤 그 아이에게 해 줄 말을 짝과 말하게 한다.',
          task: '지어낸 사례를 읽고 사고 뒤에 한 일만 점검표에 표시하고, 빠진 일을 찾아요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            CHK('사례: 하나는 보도로 피하고, 어른께 알리고, 아픈 곳을 말했어요. 한 일만 표시해요.', '하나가 한 일', ['안전한 곳에 있었다', '어른에게 알렸다', '아픈 곳을 말했다', '어른이 운전자를 만났다'], ['혼자 집에 갔다'], { easy: 2, base: 4 }, 0.2),
            CHK('사례: 민이는 보도로 피했고, 어른이 와서 운전자를 만났어요. 한 일만 표시해요.', '민이가 한 일', ['안전한 곳에 있었다', '어른이 운전자를 만났다', '어른에게 알렸다', '아픈 곳을 살폈다'], ['찻길에 서 있었다'], { easy: 2, base: 4 }, 0.25),
            { prompt: '사례: 준이는 부딪친 뒤 보도로 피하고 그냥 집에 갔어요. 빠뜨린 일을 골라요.', toolOptions: { mode: 'pick', basket: '빠뜨린 일', cards: ['어른께 알리기', '보도로 피하기', '아픈 곳 말하기', '찻길에서 기다리기'] }, target: { pick: ['어른께 알리기', '아픈 곳 말하기'] }, difficulty: 0.3, conclude: '사고 뒤에는 피하기, 어른께 알리기, 아픈 곳 말하기를 빠뜨리지 않아요.' },
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '사고 뒤에 할 일에 표시해요.', options: ['안전한 곳으로 피하기', '어른께 알리기', '아픈 곳 말하기'] }] },
        notes: '사례는 지어낸 것이고 이름은 가명이다. 민이 사례는 \'어른에게 알렸다\'(어른이 왔음)도 한 일로 본다.',
      }),
      X('wrap.rule', {
        title: '사고 대처 그물', method: '사고 대처 그물', tool: 'mindmap', minutes: 6,
        levels: { easy: '행동 카드 3장을 피하기·알리기·말하기 가지에 한 장씩 나눈다.', base: '행동 카드 6장을 세 가지에 나눈다.', challenge: '카드 8장(함정 카드 \'혼자 해결해요\' 포함)을 나누고, 함정 카드를 뺀 까닭을 말한다.' },
        wrap: {
          teacher: '"사고가 나면 할 일을 세 가지로 묶어 볼까요?" 카드를 나눈 뒤 가지마다 한 장씩 소리 내어 읽게 한다. "혼자 해결하면 어른 걱정을 덜어 줘요"라는 학생에게 "혼자 해결하면 다친 곳을 누가 살펴 줄까요?"라고 되물어 함정 카드를 빼게 한다.',
          exitTicket: [
            AS_EXIT('mindmap', SORT('사고가 났을 때 할 행동 카드를 세 가지에 나누어요.', { topic: '사고가 나면', slots: ['피하기', '알리기', '말하기'], groups: { 피하기: ['보도 안쪽으로 가요', '찻길에 서 있지 않아요'], 알리기: ['어른을 불러요', '112·119에 신고해요'], 말하기: ['아픈 곳을 말해요', '있었던 일을 말해요'] }, easy: 1, extra: { 피하기: ['멀리서 지켜봐요'] }, traps: ['혼자 해결해요'] }, 0.15)),
            { type: 'choice', prompt: '다친 사람이 있을 때 거는 번호는 무엇인가요?', options: ['119', '114', '1388'], answer: 0, difficulty: 0.15, explain: '다친 사람이 있으면 119에 알려요.' },
            { type: 'short', prompt: '사고가 나면 가장 먼저 할 일을 한 문장으로 써요.' },
          ],
        },
        worksheet: {
          title: '사고가 나면',
          items: [
            { type: 'table', prompt: '가지마다 할 일을 하나씩 써요.', columns: ['피하기', '알리기', '말하기'], cells: [['', '', '']] },
            { type: 'choice', prompt: '사고 뒤 안 아프면 어떻게 해요?', options: ['그냥 지나간다', '어른께 꼭 말한다', '혼자 해결한다'], answer: '어른께 꼭 말한다' },
          ],
          easy: { note: '피하기 → 알리기 → 말하기를 떠올려요.', items: [{ type: 'draw', prompt: '보도 안쪽에서 어른을 부르는 내 모습을 그려요.' }] },
        },
      }),
      X('wrap.card', {
        title: '내 안전 메모 쓰기', method: '내 안전 메모 쓰기', tool: 'rubric-writing', minutes: 6,
        levels: { easy: '문장 틀을 쓰고, 기준 2개(차례가 맞나·신고 번호가 맞나)로 점검한다.', base: '할 일 3가지를 직접 쓰고 기준 3개로 점검한다.', challenge: '기준 3개로 점검한 뒤 동생에게 설명하는 말로 한 군데 고쳐 쓰고, 신고 번호를 꼭 넣는다.' },
        wrap: {
          teacher: '"가방에 넣어 둘 \'사고 때 할 일\' 메모를 세 줄로 써 볼까요?" 기준표를 함께 읽고 쓴 뒤 스스로 점검하게 한다. "집 전화번호를 적어 둘래요"라는 학생에게 "오늘 메모에는 번호나 이름 같은 개인정보는 쓰지 않아요. 할 일만 써요"라고 말해 준다. 차례가 \'신고 → 피하기\'로 된 학생에게는 "찻길에서 전화하면 어떻게 될까요?"라고 묻는다.',
          exitTicket: [
            RUBX('사고 때 할 일 3가지를 차례대로 메모하고 기준표로 점검해요.', { topic: '사고 때 할 일 3가지(이름·연락처는 쓰지 않아요)', title: '내 안전 메모', starter: '1. 먼저 ~로 피해요. 2. ~에게 알려요. 3. ~', crit: ['차례가 맞다', '신고 번호가 맞다', '짧고 분명하다'], must: [['112', '119']], chars: [20, 120] }),
            { type: 'choice', prompt: '안전 메모에 쓰지 않을 것은 무엇인가요?', options: ['안전한 곳으로 피하기', '내 집 주소', '어른께 알리기'], answer: 1, difficulty: 0.15, explain: '메모에는 할 일만 쓰고 개인정보는 쓰지 않아요.' },
            { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '사고 때 할 일 메모',
          items: [
            { type: 'short', prompt: '사고 때 할 일 3가지를 차례대로 다시 써요.' },
            { type: 'check', prompt: '내 메모를 점검해요.', options: ['차례가 맞나요', '신고 번호가 맞나요', '짧고 분명한가요'] },
          ],
        },
      }),
    );
  }

  // ======== 6학년 · 우리 학교 교통안전 실천 계획과 캠페인 (별표 2 초등 교통안전 세 항목 종합 + 표준안 보행자·자전거·대중교통, 캠페인은 재량) ========
  {
    const X = mk('campaign', 6);
    const HABIT = [['횡단보도', 18], ['자전거', 11], ['탈것', 9], ['휴대전화', 6], ['대중교통', 15]];
    const GATE = [
      { name: '정문 안쪽', icon: 'school', at: [2, 1] }, { name: '현관 앞', icon: 'house', at: [3, 0] },
      { name: '찻길 옆 보도', icon: 'dot', at: [2, 3] }, { name: '횡단보도 앞', icon: 'dot', at: [4, 3] },
      { name: '주차장 입구', icon: 'bus', at: [0, 2] }, { name: '운동장', icon: 'park', at: [5, 0] },
    ];
    const ROLE = [{ id: 'stop', text: '횡단보도 앞에서 멈춰요', motif: 'star' }, { id: 'look', text: '왼쪽·오른쪽을 살펴요', motif: 'sun' }, { id: 'hand', text: '손 들고 걸어서 건너요', motif: 'bird' }, { id: 'safe', text: '보도에서 친구를 만나요', motif: 'house' }];
    const CYCLE = [{ id: '점검', text: '점검' }, { id: '계획', text: '계획' }, { id: '실천', text: '실천' }, { id: '돌아보기', text: '돌아보기' }];
    M.push(
      X('intro.self', {
        title: '나의 교통안전 습관 점검', method: '나의 교통안전 습관 점검', tool: 'kitchen', minutes: 5,
        levels: { easy: '교사가 항목 3개(횡단보도·자전거·휴대전화)를 읽어 주고 늘 지키는 것에 표시한다.', base: '항목 5개를 스스로 읽고 늘 지키는 것에 표시한다.', challenge: '항목 5개를 표시한 뒤, 표시하지 못한 가장 약한 항목과 그 까닭을 짝에게 말한다.' },
        intro: {
          teacher: '"그동안 배운 교통안전 습관 가운데 나는 무엇을 늘 지키고 있을까요?" 시연 단추로 점검표 몇 칸이 표시되는 모습을 보이고, 늘 지키는 것에만 정직하게 표시하자고 한다. "저는 이미 다 지켜요"라는 말에는 "비 오는 날, 늦은 날에도 그런가요? 가끔 놓치는 것이 있다면 그게 오늘 우리 계획의 출발점이에요"라고 말해 준다.',
          student: '점검표에서 표시하지 못한 항목 하나를 골라, 왜 가끔 놓치는지 짝에게 말해 보아요.',
          demo: { tool: 'kitchen', options: { mode: 'checklist', title: '나의 교통안전 습관(늘 지켜요)', items: [{ id: 'cross', text: '멈추고 살피고 건너요' }, { id: 'bike', text: '자전거 안전모를 써요' }, { id: 'pm', text: '탈것은 정한 곳에서' }, { id: 'phone', text: '걸을 때 휴대전화 넣어요' }, { id: 'bus', text: '버스에서 손잡이 잡아요' }] }, sequence: [{ checklist: ['cross', 'bike', 'bus'] }] },
          art: art('a paper child holding a paper checklist with traffic icons: a crosswalk, a bicycle helmet, a phone and a bus handle', '나는 무엇을 지키고 있을까?', 'star', 'mint'),
        },
        notes: '점검표는 \'늘 지켜요\'만 표시한다(가끔·안 지킴 칸은 따로 없다). 표시하지 않은 칸이 가끔·안 지킴이다. 점검 결과로 학생을 견주지 않는다.',
      }),
      X('intro.data', {
        title: '우리 반 습관 그래프', method: '우리 반 습관 그래프', tool: 'chart', minutes: 5,
        levels: { easy: '교사가 막대 3개(횡단보도·대중교통·휴대전화)를 짚어 읽어 준다.', base: '막대 5개 가운데 가장 낮은 습관이 골라지는 시연을 보고 까닭을 짐작한다.', challenge: '캠페인 주제로 고를 항목과 그 근거(막대 높이)를 짝에게 말한다.' },
        intro: {
          teacher: '"이 그래프는 우리 반 점검 결과처럼 꾸민 가상 자료예요. \'늘 지켜요\'가 가장 적은 습관은 무엇일까요?" 시연 단추로 가장 낮은 막대가 골라지는 모습을 보인다. "가장 높은 걸 캠페인 하면 쉬워요"라는 말에는 "이미 잘 지키는 것보다 가장 약한 것을 알리면 무엇이 달라질까요?"라고 되묻는다.',
          student: '그래프(가상)에서 가장 낮은 막대를 찾고, 캠페인 주제로 알맞은지 짝과 말해 보아요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '늘 지키는 학생 수(가상)', unit: '명', data: HABIT, question: '가장 약한 습관은?', choices: HABIT.map((x) => x[0]) }, sequence: [{ pick: 3 }] },
          art: art('a paper bar chart on a classroom board with five paper bars, the shortest one marked with a paper star', '가장 약한 습관은?', 'sun', 'buttercup'),
        },
        notes: '그래프 수치는 수업용 가상 자료다. 실제 우리 반 결과를 쓰려면 이름 없이 손들기로 세어 칠판에 적는다.',
      }),
      X('intro.target', {
        title: '저학년 동생의 마음 짐작', method: '저학년 동생의 마음 짐작', tool: 'emotion', minutes: 5,
        levels: { easy: '교사가 장면 2개를 읽어 주고 알맞은 마음 카드를 함께 고른다.', base: '장면 3개에 마음 카드가 짝 지어지는 시연을 보고 캠페인에서 도울 점을 말한다.', challenge: '동생 눈높이 말(짧고 쉬운 말)로 도울 점을 바꿔 말한다.' },
        intro: {
          teacher: '"1·2학년 동생들은 등굣길에서 어떤 마음일까요?" 시연 단추로 \'늦어서 뛰어가요\'에는 \'서둘러요\', \'신호등 뜻을 헷갈려요\'에는 \'잘 몰라요\'가 짝 지어지는 모습을 보인다. "동생들은 말해도 안 들어요"라는 말에는 "동생 마음을 알면 어떻게 말해야 들을까요? 겁주는 말보다 따라 하기 쉬운 말이 좋아요"라고 되묻는다.',
          student: '동생이 서두를 때 해 주고 싶은 짧은 말 하나를 짝에게 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 's1', label: '늦어서 뛰어가요' }, { id: 's2', label: '신호등 뜻을 헷갈려요' }, { id: 's3', label: '형이 건너니 따라가요' }], cards: ['서둘러요', '잘 몰라요', '친구 따라가요'] }, sequence: [{ match: { s1: '서둘러요', s2: '잘 몰라요', s3: '친구 따라가요' } }] },
          art: art('small paper first graders walking to school, one running, one looking puzzled at a traffic light, one following an older child', '동생들은 어떤 마음일까?', 'heart', 'peach'),
        },
      }),
      X('activity.plan', {
        title: '등하굣길 시간표', method: '나의 실천 계획 시간표', tool: 'clock', minutes: 15,
        levels: { easy: '디지털 시각이 함께 보이고 긴바늘이 10분 단위로 맞춰진다.', base: '긴바늘이 10분 단위로 맞춰지고 바늘로만 시각을 나타낸다.', challenge: '긴바늘이 5분 단위로 맞춰지고, 서두르지 않으려면 무엇을 바꿀지 모둠에서 정한다.' },
        activity: {
          title: '등하굣길 시각 정하기', tool: 'clock',
          teacher: '"서두르면 무엇을 놓치게 될까요? 그래서 오늘은 \'여유 있게 나가는 시각\'을 정해요." 문항의 시각은 연습용 우리 반 약속이라는 점을 먼저 밝힌다. 바늘을 맞춘 뒤 "몇 분 더 일찍 나가면 신호를 기다릴 여유가 생길까요?"라고 묻는다. "늦으면 뛰면 돼요"라는 학생에게 "뛰는 사이에 살피기를 빼먹지 않을까요?"라고 되묻는다.',
          task: '연습용 시각으로 등교 출발·여유 있는 출발·하굣길 점검 시각을 시계에 나타내요.', levels: { easy: { showDigital: true, minuteStep: 10 }, base: { minuteStep: 10 }, challenge: { minuteStep: 5 } },
          items: [
            { prompt: '연습 약속: 8시 40분까지 학교에 가고, 걸어서 20분 걸려요. 출발 시각을 나타내요.', toolOptions: {}, target: { h: 8, m: 20 }, difficulty: 0.25 },
            { prompt: '신호를 기다릴 여유를 두려고 10분 더 일찍 나가요. 새 출발 시각을 나타내요.', toolOptions: {}, target: { h: 8, m: 10 }, difficulty: 0.25 },
            { prompt: '연습 약속: 2시 30분에 수업이 끝나고 10분 뒤 교문에서 안전 점검을 해요. 그 시각을 나타내요.', toolOptions: {}, target: { h: 2, m: 40 }, difficulty: 0.3, conclude: '여유 있게 나가면 서두르지 않고 멈추고 살필 수 있어요.' },
            { prompt: '모둠에서 서두르지 않으려면 아침에 무엇을 바꿀지 하나씩 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '나의 등하굣길 계획을 써요.', columns: ['할 일', '시각'], cells: [['여유 있게 집에서 나가기', ''], ['하굣길 안전 점검', '']] }] },
        notes: '시각은 연습용 약속이다. 학생 집 위치나 실제 통학 시간을 공개하게 하지 않는다.',
      }),
      X('activity.goal', {
        title: '캠페인 주제와 메시지', method: '캠페인 주제와 메시지', tool: 'mindmap', minutes: 14,
        levels: { easy: '아이디어 카드 4장을 \'누구에게\'·\'무엇을\' 가지 2개에 나눈다.', base: '아이디어 카드 6장을 누구에게·무엇을·어떻게 가지 3개에 나눈다.', challenge: '가지 3개에 카드를 나누고, 근거 카드(우리 반 그래프)를 무엇을 가지에 함께 잇는다.' },
        activity: {
          title: '캠페인 아이디어 가지 나누기', tool: 'mindmap',
          teacher: '"캠페인을 하려면 무엇을 먼저 정해야 할까요? 누구에게, 무엇을, 어떻게요." 카드를 놓을 때마다 왜 그 가지인지 말하게 한다. "포스터만 붙이면 캠페인이에요"라는 학생에게 "동생들이 포스터를 보고 바로 따라 할 수 있을까요? 구호나 역할극은 어때요?"라고 묻는다. 도전에서는 \'우리 반 그래프에서 가장 낮았어요\' 카드를 근거로 잇게 한다.',
          task: '캠페인 아이디어 카드를 누구에게·무엇을·어떻게 가지에 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            { prompt: '등굣길 캠페인 아이디어 카드를 가지에 나누어요.', toolOptions: { topic: '우리 캠페인', slots: ['누구에게', '무엇을', '어떻게'], cards: ['1·2학년 동생', '멈추고 살피기', '짧은 구호', '아침 등굣길 친구', '휴대전화 넣기', '역할극'] }, target: { sort: { 누구에게: ['1·2학년 동생', '아침 등굣길 친구'], 무엇을: ['멈추고 살피기', '휴대전화 넣기'], 어떻게: ['짧은 구호', '역할극'] } }, difficulty: 0.2,
              levels: {
                easy: { prompt: '캠페인 아이디어 카드를 두 가지에 나누어요(카드 4장).', toolOptions: { slots: ['누구에게', '무엇을'], cards: ['1·2학년 동생', '멈추고 살피기', '아침 등굣길 친구', '휴대전화 넣기'] }, target: { sort: { 누구에게: ['1·2학년 동생', '아침 등굣길 친구'], 무엇을: ['멈추고 살피기', '휴대전화 넣기'] } } },
                challenge: { prompt: '캠페인 아이디어와 근거 카드를 가지에 나누어요(근거는 무엇을 가지에).', toolOptions: { cards: ['1·2학년 동생', '멈추고 살피기', '짧은 구호', '아침 등굣길 친구', '휴대전화 넣기', '역할극', '그래프에서 가장 낮음'] }, target: { sort: { 누구에게: ['1·2학년 동생', '아침 등굣길 친구'], 무엇을: ['멈추고 살피기', '휴대전화 넣기', '그래프에서 가장 낮음'], 어떻게: ['짧은 구호', '역할극'] } } },
              } },
            { prompt: '하굣길 자전거 캠페인 아이디어 카드를 가지에 나누어요.', toolOptions: { topic: '자전거 캠페인', slots: ['누구에게', '무엇을', '어떻게'], cards: ['자전거 타는 친구', '안전모 끈 확인', '점검 카드 나눠 주기', '3·4학년 동생', '교차로 앞 속도 줄이기', '따라 하는 몸짓'] }, target: { sort: { 누구에게: ['자전거 타는 친구', '3·4학년 동생'], 무엇을: ['안전모 끈 확인', '교차로 앞 속도 줄이기'], 어떻게: ['점검 카드 나눠 주기', '따라 하는 몸짓'] } }, difficulty: 0.25,
              levels: {
                easy: { prompt: '자전거 캠페인 카드를 두 가지에 나누어요(카드 4장).', toolOptions: { slots: ['누구에게', '무엇을'], cards: ['자전거 타는 친구', '안전모 끈 확인', '3·4학년 동생', '교차로 앞 속도 줄이기'] }, target: { sort: { 누구에게: ['자전거 타는 친구', '3·4학년 동생'], 무엇을: ['안전모 끈 확인', '교차로 앞 속도 줄이기'] } } },
                challenge: { prompt: '자전거 캠페인 카드를 나누어요(넣지 않을 카드도 있어요).', toolOptions: { cards: ['자전거 타는 친구', '안전모 끈 확인', '점검 카드 나눠 주기', '3·4학년 동생', '무섭게 겁주기', '교차로 앞 속도 줄이기', '따라 하는 몸짓'] } },
              }, conclude: '캠페인은 누구에게·무엇을·어떻게를 먼저 정하고, 근거로 주제를 고르면 분명해져요.' },
            { prompt: '모둠에서 우리 캠페인의 주제 한 가지와 그 근거를 정해 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 모둠 캠페인 계획을 써요.', columns: ['누구에게', '무엇을', '어떻게'], cells: [['', '', '']] }] },
      }),
      X('activity.slogan', {
        title: '캠페인 문구 쓰기', method: '캠페인 문구 쓰기', tool: 'rubric-writing', minutes: 15,
        levels: { easy: '문구 틀을 쓰고 기준 2개(짧은가·행동이 분명한가)로 점검한다.', base: '문구 두 개를 직접 쓰고 기준 3개로 점검한다.', challenge: '기준 3개로 점검한 뒤 한 군데 고쳐 쓰고, 행동 낱말(멈춰요·살펴요 등)을 꼭 넣는다.' },
        activity: {
          title: '저학년을 위한 캠페인 문구', tool: 'rubric-writing',
          teacher: '"동생들이 한 번 듣고 따라 할 수 있는 문구는 어떤 모양일까요?" 기준표를 함께 읽고 쓰게 한다. "안 지키면 큰일 나요!"처럼 겁주는 문구를 쓴 학생에게 "겁을 주면 무엇을 하라는 건지 알 수 있을까요? 할 행동을 말해 줘요"라고 묻는다. 셋째 문항에서는 짝의 문구를 소리 내어 읽어 주고 기준표로 함께 본다.',
          task: '1·2학년 동생을 위한 짧은 교통안전 캠페인 문구를 쓰고, 기준표로 스스로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RUB('횡단보도 캠페인 문구 두 개를 쓰고 기준표로 점검해요.', { topic: '횡단보도 캠페인 문구 두 개(동생이 따라 할 말)', title: '캠페인 문구 쓰기', starter: '멈춰요, ~해요! / ~하고 건너요!', crit: ['짧다', '할 행동이 분명하다', '겁주지 않는다'], must: [['멈춰', '살펴', '손 들', '기다려']], chars: [15, 100] }, 0.25),
            RUB('걸을 때 휴대전화 캠페인 문구를 쓰고 기준표로 점검해요.', { topic: '걸을 때 휴대전화 캠페인 문구(동생이 따라 할 말)', title: '캠페인 문구 쓰기', starter: '걸을 때는 ~, 건널 때는 ~!', crit: ['짧다', '할 행동이 분명하다', '겁주지 않는다'], must: [['넣어', '멈춰', '고개 들']], chars: [15, 100] }, 0.3),
            { prompt: '짝의 문구를 소리 내어 읽어 주고, 동생이 따라 하기 쉬운지 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '가장 마음에 드는 캠페인 문구를 옮겨 쓰고, 그림 아이디어를 한 줄 더해요.' }] },
      }),
      X('activity.where', {
        title: '캠페인 할 자리 정하기', method: '캠페인 할 자리 정하기', tool: 'map', minutes: 14,
        levels: { easy: '핀을 놓으면 칸 이름이 보인다.', base: '학교 둘레 칸 지도에서 캠페인 할 안전한 자리에 핀을 꽂는다.', challenge: '찻길 가까운 헷갈리는 칸이 하나 더 있고, 자리마다 까닭과 안전 약속을 말한다.' },
        activity: {
          title: '학교 둘레 지도에서 안전한 자리 찾기', tool: 'map',
          teacher: '"캠페인은 동생들이 많이 지나가는 곳에서 하면 좋겠죠. 그런데 찻길 옆은 어떨까요?" 핀을 꽂은 뒤 그 자리가 왜 안전한지 말하게 한다. "횡단보도 앞에서 해야 잘 보여요"라는 학생에게 "우리가 서 있으면 동생들이 길을 건너다 멈칫하지 않을까요? 학교 안쪽에서 해요"라고 말해 준다. 캠페인은 교사와 함께 학교 안에서만 한다는 약속을 짚는다.',
          task: '학교 둘레 칸 지도에서 캠페인을 할 안전한 자리에 핀을 꽂아요(찻길 가까운 칸은 피해요).', levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            { prompt: '등굣길 동생들을 만날 안전한 자리(학교 정문 안쪽)에 핀을 꽂아요.', toolOptions: { grid: [6, 4], title: '우리 학교 둘레(가상)', places: GATE.slice(0, 5), legend: false }, target: { place: '정문 안쪽' }, difficulty: 0.2,
              levels: { challenge: { toolOptions: { places: [...GATE.slice(0, 5), { name: '정문 밖 찻길 쪽', icon: 'dot', at: [2, 2] }] } } } },
            { prompt: '비 오는 날 캠페인을 할 지붕 있는 자리(현관 앞)에 핀을 꽂아요.', toolOptions: { grid: [6, 4], title: '우리 학교 둘레(가상)', places: GATE, legend: false }, target: { place: '현관 앞' }, difficulty: 0.2 },
            { prompt: '자전거 점검 카드를 나눠 줄 차가 다니지 않는 넓은 자리(운동장)에 핀을 꽂아요.', toolOptions: { grid: [6, 4], title: '우리 학교 둘레(가상)', places: GATE, legend: false }, target: { place: '운동장' }, difficulty: 0.25,
              levels: { challenge: { toolOptions: { places: [...GATE, { name: '주차장 안', icon: 'bus', at: [0, 3] }] } } }, conclude: '캠페인은 찻길과 주차장을 피해 학교 안 안전한 자리에서 해요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 모둠이 고른 캠페인 자리와 그 까닭을 써요.' }] },
        notes: '지도는 가상의 학교 둘레다. 실제 캠페인은 교사와 함께 학교 안 안전한 자리(정문 안쪽·현관)에서만 하고 찻길·횡단보도·주차장에는 서지 않는다.',
      }),
      X('activity.script', {
        title: '캠페인 역할극 대본', method: '캠페인 역할극 대본', tool: 'story', minutes: 15,
        levels: { easy: '역할극 장면 3장을 차례대로 놓고, 말풍선 빈칸 2개를 채운다.', base: '장면 4장을 차례대로 놓고, 말풍선 빈칸 2개(바른 행동·까닭)를 채운다.', challenge: '틀린 장면 하나를 빼고 장면 4장을 놓고, 말풍선 빈칸 3개(동생이 따라 할 구호 포함)를 채운다.' },
        activity: {
          title: '역할극 장면과 말풍선 채우기', tool: 'story',
          teacher: '"동생들 앞에서 보여 줄 역할극은 어떤 차례로 하면 좋을까요?" 장면을 놓은 뒤 모둠이 한 장면씩 몸으로 해 보게 한다. "재미있게 하려면 일부러 차 앞으로 뛰는 장면도 넣어요"라는 학생에게 "동생들이 그 장면을 따라 하면 어떻게 될까요? 바른 행동만 보여 줘요"라고 말해 준다. 말풍선에는 행동과 까닭을 함께 넣게 한다.',
          task: '역할극 장면 카드를 차례대로 놓고, 말풍선 빈칸에 바른 행동과 까닭을 채워요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDER('횡단보도 역할극 장면을 차례대로 놓아요.', ROLE.map((c) => c.text), { easy: [0, 2, 3], trap: '차 앞으로 뛰어가요', motifs: ROLE.map((c) => c.motif) }, 0.2),
            { prompt: '역할극 말풍선 빈칸에 알맞은 말 카드를 넣어요.', toolOptions: { mode: 'fill', title: '역할극 대본', slots: [{ id: 'b1', who: '언니·형', label: '횡단보도 앞에서는 ___.' }, { id: 'b2', who: '언니·형', label: '왜냐하면 차가 ___.' }], cards: ['바로 서지 못해요', '먼저 멈춰요', '구호: 멈추고 살피고'] }, target: { fill: { b1: '먼저 멈춰요', b2: '바로 서지 못해요' } }, difficulty: 0.25,
              levels: {
                easy: { prompt: '역할극 말풍선 빈칸에 알맞은 말 카드를 넣어요(빈칸 2개).', toolOptions: { cards: ['바로 서지 못해요', '먼저 멈춰요'] } },
                challenge: { prompt: '역할극 말풍선 빈칸 3개에 구호까지 넣어요.', toolOptions: { slots: [{ id: 'b1', who: '언니·형', label: '횡단보도 앞에서는 ___.' }, { id: 'b2', who: '언니·형', label: '왜냐하면 차가 ___.' }, { id: 'b3', who: '모두', label: '다 함께 ___!' }], cards: ['바로 서지 못해요', '먼저 멈춰요', '구호: 멈추고 살피고', '빨리 뛰어요'] }, target: { fill: { b1: '먼저 멈춰요', b2: '바로 서지 못해요', b3: '구호: 멈추고 살피고' } } },
              } },
            { prompt: '모둠에서 역할극 장면 하나를 골라 몸으로 해 보고 바꿀 점을 말해요.', free: true, talk: true, conclude: '역할극은 바른 행동만 보여 주고, 말풍선에 까닭을 함께 넣어요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 모둠 역할극에서 동생들이 따라 할 구호를 써요.' }] },
      }),
      X('activity.choose', {
        title: '캠페인 날 생긴 일', method: '캠페인 날 생긴 일', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림길 1번(찻길 쪽으로 갈지)에서 고르고 근거 한 장을 고른다.', base: '갈림길 2번(동생이 다가올 때)을 지나 근거를 고른다.', challenge: '갈림길 3번까지 지나 근거를 모두 고르고, 모둠 약속을 한 줄 더해 말한다.' },
        activity: {
          title: '갈림길: 캠페인 날 찻길 쪽으로 가자고 해요', tool: 'dilemma',
          teacher: '"더 많은 사람에게 보이려면 찻길 쪽이 좋을까요?" 고를 때마다 결과를 소리 내어 읽게 한다. "장난이니까 잠깐은 괜찮아요"라는 학생에게 "우리가 찻길에 서 있으면 동생들은 무엇을 배울까요? 캠페인은 우리가 먼저 지키는 모습을 보여 주는 거예요"라고 말해 준다.',
          task: '캠페인 날 갈림길마다 고르고, 결과를 읽은 뒤 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '캠페인 날',
            steps: [
              { text: '캠페인 날 아침, 친구가 장난으로 "찻길 쪽에서 홍보하면 더 잘 보여" 해요.', motif: 'star',
                good: ['inside', '정한 자리(정문 안쪽)에 있자고 한다', '모둠이 정문 안쪽에서 구호를 외쳐요.', [['모둠', '함께 안전해요', 1]]],
                bad: ['road', '찻길 쪽으로 따라간다', '지나던 차가 속도를 줄이며 경적을 울려요.', '캠페인하는 우리가 먼저 위험해져요.', [['모둠', '차와 가까워져요', -1]]] },
              { text: '구호를 듣던 1학년 동생이 우리에게 오려고 찻길 쪽으로 돌아와요.', motif: 'bird',
                good: ['wave', '그 자리에서 보도로 오라고 손짓한다', '동생이 보도로 걸어와 함께 구호를 따라 해요.', [['동생', '안전하게 와요', 1]]],
                bad: ['run', '동생에게 뛰어간다', '우리도 동생도 찻길 가까이 서게 돼요.', '뛰어가면 나도 위험해져요. 손짓으로 불러요.', [['동생', '더 위험해요', -1]]] },
              { text: '캠페인이 끝났어요. 친구가 문구판을 길가에 세워 두고 가자고 해요.', motif: 'house',
                good: ['tidy', '선생님과 정리해 학교 안에 둔다', '다음 날도 깨끗한 자리에서 캠페인을 해요.', [['지나는 사람', '길이 막히지 않아요', 1]]],
                bad: ['leave', '길가에 세워 두고 간다', '문구판이 보도를 막아 사람들이 찻길로 비켜 가요.', '길가 물건은 보행을 막아요.', [['지나는 사람', '찻길로 비켜요', -1]]] },
            ],
            ending: '우리가 먼저 안전 약속을 지켜서 동생들도 바른 모습을 배웠어요.',
            reasons: [{ id: 'model', text: '캠페인은 우리가 먼저 지키는 모습이다' }, { id: 'place', text: '정한 안전한 자리에서만 한다' }, { id: 'seen', text: '잘 보이면 찻길도 괜찮다', why: '잘 보이는 것보다 안전이 먼저예요.' }, { id: 'joke', text: '장난이니까 잠깐은 괜찮다', why: '장난이어도 차는 바로 서지 못해요.' }],
            good: ['model', 'place'],
            talk: '모둠에서 캠페인 날 지킬 모둠 약속을 한 줄 더 정해 말해요.',
            conclude: '캠페인 날에도 정한 안전한 자리에서, 우리가 먼저 약속을 지켜요.',
          }),
        },
        worksheet: { items: [{ type: 'choice', prompt: '캠페인을 할 알맞은 자리는 어디인가요?', options: ['찻길 옆 보도', '학교 정문 안쪽', '횡단보도 한가운데'], answer: '학교 정문 안쪽' }] },
      }),
      X('wrap.review', {
        title: '캠페인 스스로 점검', method: '캠페인 스스로 점검', tool: 'timer', minutes: 6,
        levels: { easy: '점검 칸 2개(메시지가 분명했나·안전하게 했나)를 표시한다.', base: '점검 칸 3개를 표시한다.', challenge: '점검 칸 4개를 표시하고 다음에 바꿀 점을 하나 쓴다.' },
        wrap: {
          teacher: '"오늘 계획한 캠페인을 돌아보면, 우리 모둠은 무엇을 잘했나요?" 점검 칸을 정직하게 표시하게 하고, 표시하지 못한 칸은 다음에 바꿀 점으로 쓰게 한다. 출구 2번에서 "포스터를 많이 붙이면 된다"를 고른 학생에게 "동생들이 무엇을 따라 하게 될까요? 행동이 분명한 메시지가 먼저예요"라고 말해 준다.',
          exitTicket: [
            SELF('캠페인 점검', ['메시지가 분명했다', '안전한 자리에서 했다', '맡은 역할을 했다', '동생 눈높이로 말했다']),
            { type: 'choice', prompt: '좋은 캠페인에 가장 필요한 것은 무엇인가요?', options: ['포스터를 많이 붙이기', '따라 할 행동이 분명한 메시지', '무섭게 겁주기'], answer: 1, difficulty: 0.15, explain: '할 행동이 분명해야 동생들이 따라 할 수 있어요.' },
            { type: 'short', prompt: '다음 캠페인에서 바꿀 점 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '우리 캠페인 돌아보기',
          items: [
            { type: 'check', prompt: '우리 모둠이 해낸 것에 표시해요.', options: ['메시지가 분명했어요', '안전한 자리에서 했어요', '맡은 역할을 했어요'] },
            { type: 'short', prompt: '우리 캠페인에서 가장 잘된 점을 써요.' },
          ],
          easy: { note: '누구에게·무엇을·어떻게를 떠올려요.', items: [{ type: 'draw', prompt: '동생들에게 구호를 알려 주는 모습을 그려요.' }] },
        },
      }),
      X('wrap.feedback', {
        title: '동생들 반응 돌아보기', method: '동생들 반응 돌아보기', tool: 'emotion', minutes: 6,
        levels: { easy: '반응 카드 2장을 \'잘됐어요\'·\'고칠래요\' 칸에 나눈다.', base: '반응 카드 4장을 두 칸에 나눈다.', challenge: '반응 카드 5장을 나누고, 고칠 점을 우리 문구에 반영해 말한다.' },
        wrap: {
          teacher: '"동생들이 어떻게 반응했을지 떠올려 볼까요? 따라 한 것은 잘된 점, 헷갈린 것은 고칠 점이에요." 카드를 나눈 뒤 고칠 칸의 카드 하나를 골라 문구를 어떻게 바꿀지 말하게 한다. "재미있어했으니 다 잘된 거예요"라는 학생에게 "재미있었는데 행동은 기억할까요?"라고 묻는다.',
          exitTicket: [
            AS_EXIT('emotion', SORT('동생들 반응 카드를 두 칸에 나누어요.', { slots: ['잘됐어요', '고칠래요'], mode: 'sort', groups: { 잘됐어요: ['구호를 따라 했어요', '멈춰 서서 살폈어요'], 고칠래요: ['말이 길어 헷갈렸어요', '무섭다고 했어요'] }, easy: 1, extra: { 고칠래요: ['뒤쪽은 안 들렸어요'] } }, 0.15)),
            { type: 'choice', prompt: '동생들이 문구를 헷갈려 했어요. 어떻게 고칠까요?', options: ['더 길게 설명한다', '짧고 행동이 분명하게 바꾼다', '그대로 둔다'], answer: 1, difficulty: 0.15, explain: '짧고 행동이 분명한 말이 따라 하기 쉬워요.' },
            { type: 'mood', prompt: '오늘 캠페인 준비를 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '동생들 반응과 고칠 점',
          items: [
            { type: 'table', prompt: '반응과 고칠 점을 써요.', columns: ['잘된 점', '고칠 점'], cells: [['', '']] },
            { type: 'short', prompt: '고친 캠페인 문구를 한 줄로 써요.' },
          ],
        },
        notes: '실제로 동생들 앞에서 하기 전이면 \'예상한 반응\'으로 이야기한다.',
      }),
      X('wrap.cycle', {
        title: '실천 계획 되돌아보기 순환', method: '실천 계획 되돌아보기 순환', tool: 'lifecycle', minutes: 6,
        levels: { easy: '카드 3장(점검·계획·실천)을 둥근 판에 차례대로 놓는다.', base: '카드 4장(점검·계획·실천·돌아보기)을 차례대로 놓는다.', challenge: '카드 4장을 놓고, 돌아보기에서 바꿀 계획 하나와 한 달 뒤 다시 점검할 날을 쓴다.' },
        wrap: {
          teacher: '"계획을 한 번 세우면 끝일까요?" 둥근 판에 카드를 놓은 뒤 돌아보기에서 다시 점검으로 이어지는 화살표를 짚는다. "계획은 크게 세울수록 좋아요"라는 학생에게 "한 달 동안 지킬 수 있는 작은 계획이 더 오래가요. 돌아보고 고치면 돼요"라고 말해 준다. 한 달 뒤 다시 점검할 날을 함께 정한다.',
          exitTicket: [
            { type: 'tool', tool: 'lifecycle', options: { center: '나의 교통안전 실천', cards: [CYCLE[2], CYCLE[0], CYCLE[3], CYCLE[1]] }, prompt: '실천 계획의 단계를 둥근 판에 차례대로 놓아요.', target: { order: ['점검', '계획', '실천', '돌아보기'], cyclic: true }, difficulty: 0.15,
              levels: { easy: { prompt: '실천 계획의 단계를 둥근 판에 차례대로 놓아요(카드 3장).', toolOptions: { cycle: false, cards: [CYCLE[2], CYCLE[0], CYCLE[1]] }, target: { order: ['점검', '계획', '실천'] } } } },
            { type: 'short', prompt: '돌아보기에서 바꿀 계획 하나와 다시 점검할 날을 써요.' },
            { type: 'mood', prompt: '6학년 교통안전 공부를 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '점검 → 계획 → 실천 → 돌아보기',
          items: [
            { type: 'short', prompt: '한 달 동안 지킬 나의 교통안전 실천 한 가지를 써요.' },
            { type: 'table', prompt: '한 달 뒤 다시 점검해요.', columns: ['다시 점검할 날', '지켰나요(○/△/×)'], cells: [['', '']] },
          ],
        },
      }),
    );
  }

  PaperLessons.registerModules(M);
})();
