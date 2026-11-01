/* 창체 안전교육 폭력예방 및 신변보호 — 초5-6 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/safety-a.json 의 saf-violence 초5-6.
 * 근거: 「학교안전교육 실시 기준 등에 관한 고시」(교육부고시 제2023-33호) 별표 2 초등학교 폭력예방 및 신변보호(학교폭력의 예방 및 대처법 /
 *       학교폭력의 종류와 종류별 예방법 / 성폭력 예방 및 대처방안 / 내 몸의 소중함 / 아동학대의 유형 및 대처방안 / 가족폭력의 개념과 대처방안 /
 *       자살 예방 및 생명존중 교육), 교육부 7대 표준안 폭력·신변안전 중분류 — sources/changche/research-safety.md·research-mandatory.md.
 * 초5-6 기준: 사례의 원인과 결과, 자기 점검표, 작은 실천 계획, 간단한 자료(그래프) 읽기, 모둠 토의, 갈림길(dilemma)·기준표 글쓰기(rubric-writing).
 *   법 조문 번호·형량·성인 상황은 쓰지 않는다. 그래프 수치는 모두 가상(화면에 '가상'). 장면·인물은 지어낸 것이다(가명 한 글자: 민·하·준·솔·결·윤).
 * 이 영역의 처신(모든 모듈):
 *   - 학생에게 피해 경험을 묻지 않는다. 장면은 가상 인물로, 무섭거나 자세하지 않게 쓴다(몸·행동 묘사 없이 '이상한 요구', '사진 요구' 정도).
 *   - 잘못은 늘 하는 사람(가해자)에게 있고, 말한 사람·도움을 청한 사람은 잘한 것이라는 틀을 문항·피드백·교사 발문에서 지킨다.
 *   - 도움 받을 곳은 체계도 concepts 에 있는 것만 쓴다: 117(학교폭력 신고, cyberbullying), 112(grooming·abuse-signs), 1388(mind-health·abuse-signs·life-guardian),
 *     믿을 어른(보호자·담임·상담 선생님). 주제의 concepts 에 없는 번호는 그 주제에서 쓰지 않는다.
 *   - 생명존중(life-guardian·mind-health)은 방법 묘사를 하지 않고, 알아차리기·들어 주기·어른께 잇기만 다룬다.
 * 주제 8개(5학년 4 · 6학년 4) × 도입 2 · 활동 4 · 정리 2 = 계획 모듈 64개 전부. 추천 조합은 체계도 sequences(학년마다 8차시).
 *
 * 계획과 다르게 한 곳(교구 한계 — levels 글은 실제 설정대로 적었다):
 *  - 갈림길(dilemma)은 깊이 3까지라, 계획의 '쉬움 2번·기본 3번·도전 압박 갈림길 추가'는 쉬움 1번·기본 2번·도전 3번(셋째가 압박·추가 갈림길)으로 했다.
 *  - 카드 한 장의 정답 칸은 하나라 '두 유형에 걸치는 카드'는 모둠 말하기(talk) 문항과 활동지로 옮겼다(type-sort·signal-sort·role-sort·consent-sort).
 *  - mind-health.activity.time-budget: economy 는 돈(원)만 세므로 24칸 시간 예산 대신 economy 카드 나누기(꼭 지킬 시간·줄일 시간·알맞게)로 하고, 시간 수치는 활동지에서 학생이 스스로 적는다.
 *  - mind-health.intro.stress-body: body 에 머리 칸이 없어 '머리 아픔'은 교사가 말로 짚고, 교구는 어깨·목·배·가슴·눈 칸을 쓴다.
 *  - kitchen 점검표는 '골라 표시'(정확히 이 항목들) 또는 '스스로 점검'(모두 표시)만 된다. '여럿 가운데 내가 할 셋 고르기'(care-plan·guardian-plan)는
 *    교구에서 돌봄·지킴이 실천만 가려 표시하고, 이번 주에 할 것은 짧은 글 출구 질문·활동지에 쓴다.
 *  - 정리 출구 질문은 단계별 판을 바꿀 수 있는 교구 질문만 단계가 달라진다. '이유 말하기·내 말로 바꾸기'는 short·교사 진행으로 했다.
 *
 * 사람 확인: 근거 파일에는 고시 항목 제목만 있다. 아래 문장은 일반 예방교육 내용으로 썼으니 공식 안내처에서 문구를 확인한다.
 *  - cyberbullying.*: 117 = 학교폭력 신고·상담(전화·문자) / 사이버폭력 유형 이름(사이버 언어폭력·따돌림·사진 유포·거짓 소문·계속 따라오는 메시지) /
 *    대처 차례(맞대응하지 않기 → 화면 기록 남기기 → 보호자·선생님께 알리기 → 117·차단·신고 기능) / 올린 글은 공유·캡처로 퍼져 지워도 남을 수 있음 /
 *    공유한 사람도 상처를 키운다 — 교육부·푸른나무재단 학교폭력 예방 안내, 경찰청 117 학교폭력 신고센터, 방송통신위원회 사이버폭력 예방 자료.
 *  - upstander.*: 주변인 네 역할 이름(동조·강화·방관·방어) / 직접 맞서기보다 안전하게 돕기(곁에 있어 주기·데리고 나오기·어른께 알리기) /
 *    알린 사람은 비밀이 지켜진다는 안내 — 교육부 어울림 프로그램·푸른나무재단 방관자 교육 자료.
 *  - consent.*: 동의 = 먼저 묻기·대답 기다리기·대답대로 하기 / 대답 없음·망설임은 동의가 아님 / 한 번 허락해도 언제든 바꿀 수 있음 /
 *    허락 없이 친구 사진을 찍거나 올리지 않음 — 교육부 성교육 표준안·여성가족부 양성평등교육 자료.
 *  - mind-health.*: 스트레스가 몸에 주는 신호(어깨·목 뭉침, 배 아픔, 가슴 답답함, 눈 피로, 잠 못 잠) / 숨쉬기 5초는 '우리 반 연습값'(계획의 4초는 타이머 최소 5초라 5초로 바꿈) /
 *    1388 = 청소년 상담 전화(문자·사이버 상담 포함) / 잠·쉼 시간을 지키기 — 보건복지부·한국청소년상담복지개발원, 교육부 학생 마음건강 자료.
 *  - words-exclusion.*: 별명 → 웃음 → 소문 → 단체방·모둠에서 빼기 → 혼자 남음으로 커지는 단계 / 따돌림은 당하는 쪽의 잘못이 아님 /
 *    학급 언어 약속 제안 — 교육부 학교폭력 예방교육 자료(어울림).
 *  - grooming.*: 온라인 그루밍 단계(친해지기 → 비밀 만들기 → 다른 사람과 멀어지게 하기 → 요구하기)와 경고하는 말 / 대처(대화 멈추기 → 대화 화면 저장 →
 *    보호자·선생님께 알리기 → 112 신고·차단) / 선물·답장을 했어도 피해자 잘못이 아님 / 나이를 속일 수 있음 — 여성가족부·경찰청 디지털 성범죄 예방 자료,
 *    한국여성인권진흥원 디지털성범죄피해자지원센터 안내.
 *  - abuse-signs.*: 아동학대 네 유형(신체·정서·성·방임)의 쉬운 설명 / 가정폭력을 보게 하는 것도 어린이에게 해가 됨 / 신호 카드(설명 못 하는 상처·늘 배고픔·
 *    심하게 겁먹음·씻지 못함·집에 가기 싫어함)는 '걱정 신호'이지 판단 근거가 아님 / 잇는 차례(끝까지 들어 주기 → 탓하지 않기 → 함께 어른께 → 급하면 112, 상담은 1388) /
 *    직접 찾아가 따지지 않기 — 보건복지부·아동권리보장원 아동학대 예방 안내, 경찰청.
 *  - life-guardian.*: 평소와 다른 신호(말이 줄고 혼자 지냄·좋아하던 일에 관심 없음·'다 그만하고 싶다'는 말·잠을 못 잠) / 보고·듣고·말하기 /
 *    생명이 걸린 비밀은 지키지 않고 어른께 알림 / 도움 자원(담임·상담 선생님·보호자·1388) — 보건복지부·한국생명존중희망재단 생명지킴이 교육 자료.
 */
(function () {
  const M = [];
  // 모듈 머리: mk('cyberbullying', 5)('intro.group-chat', {...}) → id·type·topic·grades 를 채운다
  const mk = (topic, grade) => (suffix, o) => Object.assign({
    id: `saf-violence.e56.${topic}.${suffix}`, schema: 'edu-module.v1', type: suffix.split('.')[0],
    domain: 'saf-violence', band: '초5-6', topic: `saf-violence.e56.${topic}`, grades: [grade],
  }, o);
  const art = (draw, banner, motif = 'star', color = 'buttercup') => ({ draw, banner, extra: [{ motif, x: 300, y: 96, color }] });
  const cut = (p) => String(p).replace(/[.?]$/, '');

  // ---- 카드 판 문항 ----
  // 나누기: groups = { 칸: [카드…] }. 쉬움 = 칸마다 앞 easy장, 도전 = extra 카드 + 함정 카드(어느 칸에도 넣지 않음)
  const SORT = (prompt, { topic, slots, groups, easy = 2, extra = {}, traps = [], mode }, d, more) => {
    const inter = (g) => { const out = []; const n = Math.max(...slots.map((s) => (g[s] || []).length)); for (let i = 0; i < n; i++) for (const s of slots) if ((g[s] || [])[i]) out.push(g[s][i]); return out; };
    const take = (n) => Object.fromEntries(slots.map((s, i) => [s, groups[s].slice(0, Array.isArray(n) ? n[i] : n)]));
    const full = Object.fromEntries(slots.map((s) => [s, [...groups[s], ...(extra[s] || [])]]));
    const base = { slots, cards: inter(groups) }; if (topic) base.topic = topic; if (mode) base.mode = mode;
    const ez = take(easy); const fullCards = inter(full); fullCards.splice(1, 0, ...traps.slice(0, 1)); if (traps[1]) fullCards.push(traps[1]);
    const count = (g) => Object.values(g).reduce((a, b) => a + b.length, 0);
    const lv = { easy: { prompt: `${cut(prompt)}(카드 ${count(ez)}장).`, toolOptions: { cards: inter(ez) }, target: { sort: ez } } };
    if (Object.keys(extra).length || traps.length) lv.challenge = { prompt: `${cut(prompt)}(카드 ${fullCards.length}장${traps.length ? ', 넣지 않을 카드도 있어요' : ''}).`, toolOptions: { cards: fullCards }, target: { sort: full } };
    return Object.assign({ prompt, toolOptions: base, target: { sort: groups }, difficulty: d, levels: lv }, more);
  };
  // 칸 수가 단계마다 다른 나누기: 쉬움 = easySlots 칸만(그 칸 카드만), 기본 = slots 전부, 도전 = 함정 카드 더함
  const SORTN = (prompt, { topic, slots, groups, easySlots, traps = [], mode }, d, more) => {
    const inter = (sl) => { const out = []; const n = Math.max(...sl.map((s) => groups[s].length)); for (let i = 0; i < n; i++) for (const s of sl) if (groups[s][i]) out.push(groups[s][i]); return out; };
    const pick = (sl) => Object.fromEntries(sl.map((s) => [s, groups[s]]));
    const base = { slots, cards: inter(slots) }; if (topic) base.topic = topic; if (mode) base.mode = mode;
    const n = (sl) => sl.reduce((a, s) => a + groups[s].length, 0);
    const lv = { easy: { prompt: `${cut(prompt)}(${easySlots.length}칸, 카드 ${n(easySlots)}장).`, toolOptions: { slots: easySlots, cards: inter(easySlots) }, target: { sort: pick(easySlots) } } };
    if (traps.length) { const c = inter(slots); c.splice(2, 0, ...traps); lv.challenge = { prompt: `${cut(prompt)}(넣지 않을 카드도 있어요).`, toolOptions: { cards: c }, target: { sort: pick(slots) } }; }
    return Object.assign({ prompt, toolOptions: base, target: { sort: pick(slots) }, difficulty: d, levels: lv }, more);
  };
  // 차례: steps = [카드 글…](바른 차례). easy = 쉬움에 남길 칸 번호, trap = 도전에서 끼우는 틀린 장면(카드 칸에 남겨야 함)
  const ORDER = (prompt, steps, { easy = [0, 1, 2], trap, motifs = [], mode, title } = {}, d, more) => {
    const cards = steps.map((t, i) => (motifs[i] ? { id: t, text: t, motif: motifs[i] } : t));
    const mix = (list) => [list[2], list[0], ...list.slice(3), list[1]].filter((x) => x != null);
    const ez = easy.map((i) => cards[i]); const ezIds = easy.map((i) => steps[i]);
    const lv = { easy: { prompt: `${cut(prompt)}(카드 ${ez.length}장).`, toolOptions: { slots: ez.length, cards: mix(ez) }, target: { order: ezIds } } };
    if (trap) lv.challenge = { prompt: `${cut(prompt)}(틀린 카드 하나는 빼요).`, toolOptions: { slots: steps.length, cards: [...mix(cards), trap] }, target: { order: steps } };
    const o = Object.assign(mode ? { mode } : {}, title ? { title } : {}, { slots: steps.length, cards: mix(cards) });
    return Object.assign({ prompt, toolOptions: o, target: { order: steps }, difficulty: d, levels: lv }, more);
  };
  // 짝 잇기: pairs = [[왼쪽 말, 카드]…]. 쉬움 = 앞 easy쌍, 도전 = 함정 카드 더함
  const MATCH = (prompt, pairs, { easy = 2, traps = [], mode = 'match', title, topic } = {}, d, more) => {
    const sl = pairs.map(([label], i) => ({ id: `m${i + 1}`, label }));
    const cardsOf = (n) => { const c = pairs.slice(0, n).map(([, c]) => c); return [...c.slice(1), c[0]]; };
    const tg = (n) => ({ match: Object.fromEntries(pairs.slice(0, n).map(([, c], i) => [`m${i + 1}`, c])) });
    const o = Object.assign(mode ? { mode } : {}, title ? { title } : {}, topic ? { topic } : {}, { slots: sl, cards: cardsOf(pairs.length) });
    const lv = { easy: { prompt: `${cut(prompt)}(${easy}쌍).`, toolOptions: { slots: sl.slice(0, easy), cards: cardsOf(easy) }, target: tg(easy) } };
    if (traps.length) lv.challenge = { prompt: `${cut(prompt)}(맞지 않는 카드도 있어요).`, toolOptions: { cards: [...cardsOf(pairs.length), ...traps] }, target: tg(pairs.length) };
    return Object.assign({ prompt, toolOptions: o, target: tg(pairs.length), difficulty: d, levels: lv }, more);
  };
  // 고르기(pick): good = 고를 카드, traps = 고르지 않을 카드. 쉬움 = good 앞 easy장 + 함정 한 장, 도전 = 함정 더
  const PICK = (prompt, basket, good, traps, { easy = 1, easyTraps = 1, extraTraps = [], mode = 'pick', title, topic } = {}, d, more) => {
    const mixIn = (g, t) => { const out = g.slice(); t.forEach((x, i) => out.splice(Math.min(out.length, 1 + i * 2), 0, x)); return out; };
    const o = Object.assign({ mode, basket }, title ? { title } : {}, topic ? { topic } : {}, { cards: mixIn(good, traps) });
    const lv = { easy: { prompt: `${cut(prompt)}(${easy}장).`, toolOptions: { cards: mixIn(good.slice(0, easy), traps.slice(0, easyTraps)) }, target: { pick: good.slice(0, easy) } } };
    if (extraTraps.length) lv.challenge = { prompt: `${cut(prompt)}(헷갈리는 카드도 있어요).`, toolOptions: { cards: mixIn(good, [...traps, ...extraTraps]) }, target: { pick: good } };
    return Object.assign({ prompt, toolOptions: o, target: { pick: good }, difficulty: d, levels: lv }, more);
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
  // 갈림길 활동 문항 셋: ① 알맞은 길 + 근거(쉬움 1번·기본 2번·도전 3번 갈림) ② 다른 길 끝까지 가 보고 견주기 ③ 모둠 토의(말하기)
  const DIL = ({ steps, ending, reasons, good, title, talk, conclude }) => {
    const opt = (n) => ({ title, scene: TREE(steps, n, ending), reasons });
    return [
      { prompt: `‘${title}’ 갈림길마다 알맞은 선택을 고르고, 끝에서 근거를 골라요.`, toolOptions: opt(2), target: { path: [goodPath(steps, 2)], reasons: good.slice(0, 2), some: true }, difficulty: 0.3,
        levels: {
          easy: { prompt: `‘${title}’ 갈림길 한 번에서 알맞은 선택을 고르고 근거를 골라요.`, toolOptions: opt(1), target: { path: [goodPath(steps, 1)], reasons: [good[0]], some: true } },
          challenge: { prompt: `‘${title}’ 갈림길 세 번을 지나 끝까지 가고, 알맞은 근거를 모두 골라요.`, toolOptions: opt(3), target: { path: [goodPath(steps, 3)], reasons: good } },
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
  // 정리용 출구 질문 꼴로 바꾸기(활동 문항 모양 → { type: 'tool', tool, options, … })
  const EX = (tool, it) => Object.assign({ type: 'tool', tool, options: it.toolOptions, prompt: it.prompt, target: it.target, difficulty: it.difficulty || 0.15 }, it.levels ? { levels: it.levels } : {});
  const RUBX = (prompt, spec) => EX('rubric-writing', RUB(prompt, spec, 0.2));
  // 점검표(kitchen checklist): good = 표시할 항목, traps = 표시하지 않을 항목. 쉬움 = 앞 easy개, 기본 = 앞 base개, 도전 = good 전부
  const CHK = (prompt, title, good, traps, { easy = 3, base = 4 } = {}, d, more) => {
    const it = (list) => list.map((t) => ({ id: `k${good.indexOf(t) >= 0 ? good.indexOf(t) : 10 + traps.indexOf(t)}`, text: t }));
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
  // 정리: 장면에 마음 카드 짝 짓기(emotion match) — 장면 1·2·3개
  const FEEL = (prompt, scenes, cards) => {
    const sl = scenes.map(([label], i) => ({ id: `s${i + 1}`, label }));
    const tg = (n) => ({ match: Object.fromEntries(scenes.slice(0, n).map(([, ok], i) => [`s${i + 1}`, ok])) });
    return {
      type: 'tool', tool: 'emotion', options: { cards, slots: sl.slice(0, 2) }, prompt, target: tg(2), difficulty: 0.15,
      levels: { easy: { prompt: `${cut(prompt)}(장면 하나).`, toolOptions: { slots: sl.slice(0, 1) }, target: tg(1) }, challenge: { prompt: `${cut(prompt)}(장면 셋).`, toolOptions: { slots: sl }, target: tg(3) } },
    };
  };
  // 막대·원그래프 읽기 문항(chart read). data = [[이름, 값]…]
  const READ = (prompt, { type = 'bar', title, unit = '명', data, choices, question, why, xLabel, yLabel, from }, pick, d, more) => ({
    prompt, toolOptions: Object.assign({ type, mode: 'read', title, unit, data, choices: choices || data.map((x) => x[0]), question }, why ? { why } : {}, xLabel ? { xLabel } : {}, yLabel ? { yLabel } : {}, from != null ? { from } : {}),
    target: { pick }, difficulty: d, ...more,
  });

  // ======== 5학년 · 사이버폭력의 여러 모양과 대처 (별표 2 '학교폭력의 종류를 알고, 종류별 예방법 알기' + 표준안 언어·사이버) ========
  {
    const X = mk('cyberbullying', 5);
    const SEEN = [['놀리는 댓글', 12], ['단체방 빼기', 8], ['사진 퍼뜨리기', 5]];
    M.push(
      X('intro.group-chat', {
        title: '가상 단체방에서 문제 장면 찾기', method: '가상 단체방 장면 읽기', tool: 'story', minutes: 6,
        levels: { easy: '교사가 문제 장면 하나(초대하자마자 모두 나감)를 짚어 주고 고르게 한다.', base: '문제 장면 두 개를 스스로 고른다.', challenge: '두 장면을 고르고, 장면마다 놀림 받은 친구가 받을 영향을 말한다.' },
        intro: {
          teacher: '"이 단체방은 우리가 지어낸 반 단체방이에요. 어느 장면이 친구 마음을 아프게 할까요?" 시연 단추로 \'초대하자마자 모두 나감\'과 \'합성 사진에 놀리는 말\'이 바구니에 담기는 모습을 보인다. "글로 한 건 장난이에요"라는 말이 나오면 "화면 너머의 친구도 같은 마음을 느낄까요?"라고 되묻는다. 오늘은 사이버폭력의 모양과 대처 순서를 배운다고 밝힌다.',
          student: '가상 단체방 장면을 읽고, 화면 속 친구가 어떤 마음일지 짝에게 한 가지 말해 보아요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '문제 장면', title: '5학년 2반 단체방(지어낸 장면)', cards: [{ id: 'out', text: '초대하자마자 모두 나감', motif: 'house' }, { id: 'time', text: '모둠 숙제 시간 정하기', motif: 'sun' }, { id: 'fake', text: '합성 사진에 놀리는 말', motif: 'cloud' }, { id: 'bday', text: '생일 축하 이모티콘', motif: 'star' }], shuffle: false }, sequence: [{ pick: ['out', 'fake'] }] },
          art: art('a paper smartphone screen showing a group chat with speech bubbles, one sad paper child figure alone at the edge of the screen', '화면 너머에도 마음이 있어요', 'cloud', 'sky'),
        },
        notes: '반 단체방 화면을 실제로 띄우지 않는다. 지어낸 장면만 쓰고, 학생에게 겪은 일을 묻지 않는다.',
      }),
      X('intro.seen-chart', {
        title: '가상 설문으로 사이버폭력 읽기', method: '가상 설문 막대그래프로 경향 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '가장 많은 것 하나를 고른다.', base: '가장 많은 것과 가장 적은 것을 견주어 말한다.', challenge: '막대 두 개의 차이를 읽고 왜 그럴지 까닭을 추측한다.' },
        intro: {
          teacher: '"이 그래프는 어느 5학년이 했다고 꾸민 가상 설문이에요. 가장 높은 막대는 무엇일까요?" 시연 단추로 \'놀리는 댓글\'을 고르는 모습을 보인다. "적은 건 별일 아니에요"라는 말에는 "막대가 낮아도 그 일을 겪는 친구 한 명에게는 큰일일 수 있어요"라고 말해 준다. 숫자는 가상이라는 점을 꼭 밝힌다.',
          student: '그래프의 세 가지 가운데 친구 마음을 가장 아프게 할 것 같은 것을 하나 골라 까닭을 말해 보아요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '단체방에서 본 일(가상 설문)', unit: '명', xLabel: '일', yLabel: '학생 수', data: SEEN, question: '가장 많은 것은?', choices: SEEN.map((x) => x[0]) }, sequence: [{ pick: 0 }] },
          art: art('a paper bar chart with three paper bars of different heights beside a paper smartphone', '가상 설문을 읽어요', 'star', 'buttercup'),
        },
        notes: '그래프 수치는 수업용 가상 자료다. 실제 통계처럼 말하지 않는다.',
      }),
      X('activity.type-sort', {
        title: '사이버폭력 유형 나누기', method: '사이버폭력 유형 나누기', tool: 'mindmap', minutes: 14,
        levels: { easy: '세 칸(언어폭력·따돌림·사진 유포)에 카드 6장을 나눈다.', base: '다섯 칸(거짓 소문·따라오는 메시지 더함)에 카드를 나눈다.', challenge: '다섯 칸에 넣지 않을 카드가 섞이고, 두 유형에 걸치는 카드를 모둠에서 말한다(셋째 문항).' },
        activity: {
          title: '사이버폭력 유형 나누기', tool: 'mindmap',
          teacher: '"욕설 메시지와 단체방 강제 퇴장은 같은 모양일까요?" 카드를 놓을 때마다 왜 그 칸인지 한 문장으로 말하게 한다. "웃자고 한 말은 폭력이 아니에요"라는 학생에게 "웃자고 했는지보다, 받은 친구가 어떤 마음인지가 중요해요"라고 짚는다. 셋째 문항에서는 합성 사진에 욕설이 달린 것처럼 두 칸에 걸치는 경우도 있다는 점을 이야기하게 한다.',
          task: '화면 카드를 사이버폭력 유형 칸에 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTN('화면 카드를 사이버폭력 유형 칸에 나누어요.', { topic: '사이버폭력', slots: ['언어폭력', '따돌림', '사진 유포', '거짓 소문', '따라오는 메시지'], easySlots: ['언어폭력', '따돌림', '사진 유포'],
              groups: { 언어폭력: ['욕설 메시지', '외모 놀리는 댓글'], 따돌림: ['단체방 강제 퇴장', '한 명만 빼고 새 방'], '사진 유포': ['허락 없이 사진 올리기', '합성 사진 퍼뜨리기'], '거짓 소문': ['지어낸 소문 글'], '따라오는 메시지': ['싫다는데 계속 메시지'] },
              traps: ['모둠 숙제 알림'] }, 0.25),
            SORTN('또 다른 화면 카드를 유형 칸에 나누어요.', { topic: '사이버폭력', slots: ['언어폭력', '따돌림', '사진 유포', '거짓 소문', '따라오는 메시지'], easySlots: ['언어폭력', '따돌림', '사진 유포'],
              groups: { 언어폭력: ['게임 채팅 욕설', '별명 부르는 댓글'], 따돌림: ['초대 뒤 모두 나가기', '답장 일부러 안 하기'], '사진 유포': ['몰래 찍은 영상 올리기', '사진에 놀림 글 붙이기'], '거짓 소문': ['훔쳤다는 거짓 글'], '따라오는 메시지': ['차단해도 새 계정으로'] },
              traps: ['생일 축하 글'] }, 0.3, { conclude: '사이버폭력에는 말·따돌림·사진·소문·따라오기 같은 여러 모양이 있어요. 모양이 달라도 받는 친구는 아파요.' }),
            { prompt: '두 칸에 다 걸치는 카드(예: 합성 사진에 욕설)를 골라 왜 그런지 모둠에서 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '알맞은 유형을 써요.', columns: ['화면', '유형'], cells: [['욕설 메시지', ''], ['단체방 강제 퇴장', ''], ['허락 없이 사진 올리기', '']], answer: '언어폭력, 따돌림, 사진 유포' }] },
      }),
      X('activity.response-order', {
        title: '사이버폭력 대처 순서', method: '사이버폭력 대처 순서 세우기', tool: 'kitchen', minutes: 13,
        levels: { easy: '대처 카드 3장(맞대응하지 않기·기록 남기기·알리기)을 차례대로 놓는다.', base: '대처 카드 4장(117 신고·차단 더함)을 놓는다.', challenge: '카드 4장 사이에 섞인 함정 카드(바로 다 지우기)를 빼고 놓은 뒤, 그 함정의 결과를 모둠에서 말한다.' },
        activity: {
          title: '사이버폭력 대처 차례 놓기', tool: 'kitchen',
          teacher: '"기분 나쁜 메시지를 받으면 똑같이 욕으로 답하고 싶을 수 있어요. 그러면 어떻게 될까요?" 카드를 놓은 뒤 반 전체가 차례를 소리 내어 읽게 한다. "바로 지우면 끝나요"라는 학생에게 "지우기 전에 화면을 남겨 두면 어른이 도울 때 무엇이 좋을까요?"라고 묻는다. 117은 학교폭력을 신고하고 상담하는 번호라는 점, 알리는 것은 고자질이 아니라 지키는 일이라는 점을 짚는다.',
          task: '사이버폭력을 받았을 때 할 일 카드를 차례대로 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDER('기분 나쁜 메시지가 계속 올 때 할 일을 차례대로 놓아요.', ['맞대응하지 않기', '화면 기록 남기기', '보호자·선생님께 알리기', '117 신고·차단하기'], { mode: 'order', trap: '바로 다 지우기' }, 0.2),
            ORDER('내 사진에 놀림 글이 달렸을 때 할 일을 차례대로 놓아요.', ['같이 놀리지 않기', '화면 캡처해 두기', '선생님께 알리기', '신고 기능으로 내리기'], { mode: 'order', easy: [0, 1, 2], trap: '몰래 같은 글로 갚기' }, 0.25,
              { conclude: '맞대응하지 않고, 기록을 남기고, 어른께 알려요. 117에 신고하고 상담할 수 있어요.' }),
            { prompt: '\'바로 다 지우기\'를 하면 어떤 일이 생길지 모둠에서 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 번호를 써요.', text: '학교폭력을 신고하고 상담하는 번호는 ___ 이에요.', answer: '117' }] },
        notes: '117 은 경찰청 학교폭력 신고센터 번호다. 학생이 직접 걸어 보게 하지 않는다.',
      }),
      X('activity.photo-choice', {
        title: '놀리는 사진이 올라왔어요', method: '놀리는 사진이 올라왔을 때 갈림길', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번(공유할지 멈춰 달라고 쓸지)에서 고르고 근거 한 장을 고른다.', base: '갈림 2번(올린 친구가 장난이라고 할 때)을 지나 근거를 고른다.', challenge: '갈림 3번(친구들이 "너도 웃어"라고 압박할 때)까지 지나 근거를 모두 고르고 다른 길과 견준다.' },
        activity: {
          title: '갈림길: 놀리는 사진이 올라왔어요', tool: 'dilemma',
          teacher: '"내가 처음 올린 게 아니면 공유해도 괜찮을까요?" 고를 때마다 결과 칸과 사진 속 친구가 받는 영향을 소리 내어 읽게 한다. "다들 웃는데 나만 안 웃으면 이상해요"라는 학생의 마음을 먼저 인정하고 "그 사진 속 친구는 지금 웃고 있을까요?"라고 묻는다. 잘못은 사진을 올리고 퍼뜨린 쪽에 있고, 멈춰 달라고 하거나 알린 사람은 잘한 것이라고 분명히 말한다.',
          task: '갈림길마다 고르고, 결과를 읽은 뒤 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '단체방의 놀림 사진',
            steps: [
              { text: '반 단체방에 한 친구를 놀리는 합성 사진이 올라왔어요. 웃는 이모티콘이 달려요.', motif: 'cloud',
                good: ['stop', '"이런 사진은 내리자"고 쓴다', '몇 명이 이모티콘을 멈춰요.', [['사진 속 친구', '혼자가 아니에요', 1]]],
                bad: ['share', '재밌어서 다른 방에 공유한다', '사진이 다른 반까지 퍼져요.', '처음 올리지 않았어도 공유하면 상처가 커져요.', [['사진 속 친구', '더 많은 사람이 봐요', -1]]] },
              { text: '올린 친구가 "장난인데 왜 그래?"라고 답해요.', motif: 'house',
                good: ['tell', '화면을 남기고 선생님께 알린다', '사진이 내려가고 이야기 시간이 생겨요.', [['사진 속 친구', '보호받아요', 1], ['올린 친구', '잘못을 알게 돼요', 0]]],
                bad: ['drop', '그냥 넘어간다', '사진이 그대로 남아 있어요.', '장난이라는 말로 상처가 없어지지 않아요.', [['사진 속 친구', '계속 아파요', -1]]] },
              { text: '다른 친구들이 "너도 웃어, 분위기 깨지 마"라고 해요.', motif: 'star',
                good: ['ask', '웃지 않고 사진 속 친구에게 괜찮은지 묻는다', '사진 속 친구가 "고마워"라고 답해요.', [['사진 속 친구', '힘을 얻어요', 1]]],
                bad: ['laugh', '같이 웃는 이모티콘을 단다', '놀림이 다시 커져요.', '여럿이 웃으면 그 친구는 더 외로워져요.', [['사진 속 친구', '더 외로워요', -1]]] },
            ],
            ending: '멈춰 달라고 하고 어른께 알린 덕분에 사진 속 친구가 보호받았어요.',
            reasons: [{ id: 'right', text: '누구나 자기 사진이 함부로 퍼지지 않을 권리가 있다' }, { id: 'spread', text: '퍼진 사진은 지우기 어려워 상처가 오래간다' }, { id: 'first', text: '처음 올린 사람만 책임이 있다', why: '공유하고 웃은 사람도 상처를 키워요.' }, { id: 'joke', text: '장난이면 괜찮다', why: '받는 친구가 아프면 장난이 아니에요.' }],
            good: ['right', 'spread'],
            talk: '모둠에서 "놀리는 사진에 어떻게 답하면 좋을까?"를 한 문장씩 말해요.',
            conclude: '놀리는 사진은 공유하지 않고, 멈춰 달라고 하거나 어른께 알려요. 잘못은 퍼뜨린 쪽에 있어요.',
          }),
        },
        worksheet: { items: [{ type: 'choice', prompt: '처음 올리지 않은 놀림 사진을 공유하면?', options: ['책임이 없다', '상처를 더 크게 만든다', '사진이 사라진다'], answer: '상처를 더 크게 만든다' }] },
      }),
      X('activity.spread-steps', {
        title: '글 하나가 퍼지는 과정', method: '글 하나가 퍼지는 과정 차례 놓기', tool: 'timeline', minutes: 13,
        levels: { easy: '퍼지는 단계 카드 3장을 차례대로 놓는다.', base: '단계 카드 5장(올림→공유→캡처→다른 방→지워도 남음)을 놓는다.', challenge: '5장을 놓고, 둘째 문항에서 단계 네 곳마다 멈출 수 있었던 행동 카드를 잇는다(함정 카드 섞임).' },
        activity: {
          title: '글이 퍼지는 차례와 멈출 자리', tool: 'timeline',
          teacher: '"한 사람이 올린 글이 반 전체, 다른 학교까지 가는 데 몇 번의 손이 필요할까요?" 카드를 놓을 때마다 그 단계에서 누가 무엇을 했는지 말하게 한다. "올린 사람이 지우면 다 사라져요"라는 학생에게 "캡처한 사람이 있다면 어떨까요?"라고 되묻는다. 단계마다 멈출 수 있는 사람이 있었다는 점, 멈춘 사람이 친구를 지킨다는 점을 짚는다.',
          task: '글이 퍼지는 단계를 차례대로 놓고, 단계마다 멈출 행동을 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDER('놀리는 글 하나가 퍼지는 단계를 차례대로 놓아요.', ['글 올리기', '친구가 공유', '누군가 캡처', '다른 방에 퍼짐', '지워도 남음'], { easy: [0, 1, 3], motifs: ['star', 'leaf', 'cloud', 'wind', 'rain'] }, 0.2),
            MATCH('단계마다 퍼짐을 멈출 수 있는 행동을 이어요.', [['올리기 전', '다시 읽고 안 올리기'], ['공유하자는 말', '공유하지 않기'], ['캡처본을 받음', '퍼 나르지 않고 알리기'], ['다른 방에 퍼짐', '어른께 내려 달라 하기']], { easy: 2, traps: ['웃는 이모티콘 달기'] }, 0.25,
              { conclude: '글은 공유·캡처로 퍼지고 지워도 남을 수 있어요. 단계마다 멈추는 사람이 친구를 지켜요.' }),
            { prompt: '내가 멈출 수 있는 단계 하나를 골라 짝에게 어떻게 멈출지 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '올린 글은 공유와 캡처로 퍼져서 ___ 남을 수 있어요.', answer: '지워도' }] },
      }),
      X('wrap.defend-reply', {
        title: '친구를 지키는 답장 쓰기', method: '친구를 지키는 답장 쓰고 기준표 점검', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀을 보고 답장을 쓰고 기준 2개를 점검한다.', base: '한두 문장 답장을 쓰고 기준 3개(비난 없음·멈춤 요청·도움 안내)를 점검한다.', challenge: '기준 3개를 점검한 뒤 한 군데를 고쳐 쓰고, \'선생님·어른·117\' 가운데 하나를 넣는다.' },
        wrap: {
          teacher: '"놀림 글에 똑같이 욕으로 답하면 친구를 지킬 수 있을까요?" 기준표를 함께 읽고 답장을 쓰게 한다. 상대를 깎아내리는 말을 쓴 학생에게 "멈춰 달라는 말은 그대로 두고, 비난하는 말만 바꿔 볼까요?"라고 말해 준다. "실제 이름은 쓰지 않아요"라고 다시 말해 준다.',
          exitTicket: [
            RUBX('놀림 글에 친구를 지키는 답장을 써요', { topic: '단체방에 친구를 놀리는 글이 올라왔어요. 친구를 지키는 답장을 한두 문장으로 써요(이름은 쓰지 않아요).', starter: '이런 글은 ___. 그만하고 ___.', crit: ['누구도 비난하지 않았다', '멈춰 달라고 썼다', '도움 받을 길을 알렸다'], must: [['선생님', '어른', '117']], chars: [15, 120], title: '친구를 지키는 답장' }),
            { type: 'choice', prompt: '놀림 글을 지우기 전에 먼저 해 두면 좋은 일은?', options: ['똑같이 욕하기', '화면 기록 남기기', '다른 방에 알리기'], answer: 1, difficulty: 0.2, explain: '기록이 있으면 어른이 도울 때 큰 힘이 돼요.' },
            { type: 'short', prompt: '단체방에서 친구를 지키려고 내가 할 수 있는 일 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '화면 너머의 친구를 지켜요',
          items: [
            { type: 'short', prompt: '놀림 글에 보낼 친구를 지키는 답장을 한 문장으로 써요.' },
            { type: 'check', prompt: '사이버폭력을 보았을 때 할 일에 표시해요.', options: ['맞대응하지 않기', '화면 기록 남기기', '어른께 알리기', '117에 신고·상담'] },
          ],
          easy: { note: '"이런 글은 하지 말자"처럼 짧게 써도 돼요.', items: [{ type: 'draw', prompt: '친구를 지키는 답장을 보내는 내 모습을 그려요.' }] },
        },
      }),
      X('wrap.habit-check', {
        title: '나의 온라인 말 습관 점검', method: '나의 온라인 말 습관 자기 점검표', tool: 'kitchen', minutes: 7,
        levels: { easy: '좋은 습관 3칸을 골라 표시한다(함정 섞임).', base: '좋은 습관 4칸을 골라 표시한다.', challenge: '좋은 습관 5칸을 골라 표시하고, 가장 어려운 것의 실천 방법을 한 줄 쓴다.' },
        wrap: {
          teacher: '"온라인에서 나를 지키고 친구도 지키는 습관은 무엇일까요?" 점검표를 스스로 읽고 좋은 습관만 표시하게 한다. \'웃기면 바로 퍼 나르기\'를 고른 학생에게 "그 글 속 친구는 웃고 있을까요?"라고 되묻는다. 끝으로 가장 어려운 습관 하나와 그것을 지킬 방법을 쓰게 한다.',
          exitTicket: [
            EX('kitchen', CHK('나를 지키고 친구도 지키는 온라인 습관만 표시해요.', '나의 온라인 말 습관', ['올리기 전 다시 읽기', '허락 없이 사진 안 올리기', '놀리는 글 공유 안 하기', '이상하면 어른께 알리기', '초대·내보내기 조심하기'], ['웃기면 바로 퍼 나르기'], { easy: 3, base: 4 }, 0.15)),
            { type: 'choice', prompt: '"지우면 다 사라진다"는 말이 틀린 까닭은?', options: ['캡처나 공유로 남을 수 있어서', '지우기 단추가 없어서', '글은 원래 안 보여서'], answer: 0, difficulty: 0.2, explain: '누군가 캡처하거나 공유했다면 지워도 남아요.' },
            { type: 'short', prompt: '가장 지키기 어려운 습관 하나와 그것을 지킬 방법을 한 줄로 써요.' },
          ],
        },
        worksheet: {
          title: '나의 온라인 말 습관',
          items: [
            { type: 'check', prompt: '내가 지키는 습관에 표시해요.', options: ['올리기 전 다시 읽기', '허락 없이 사진 안 올리기', '놀리는 글 공유 안 하기', '이상하면 어른께 알리기'] },
            { type: 'short', prompt: '이번 주에 더 잘 지킬 습관 하나를 써요.' },
          ],
        },
      }),
    );
  }

  // ======== 5학년 · 방관자에서 방어자로 (별표 2 '학교폭력의 예방 및 대처법 알기') ========
  {
    const X = mk('upstander', 5);
    const REACT = [['모른 척', 40], ['같이 웃기', 25], ['말리기', 20], ['알리기', 15]];
    M.push(
      X('intro.bystander-faces', {
        title: '같은 장면 속 여러 마음', method: '같은 장면 속 피해 학생·주변 학생 마음 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 가운데 친구와 구경하는 친구, 두 사람의 마음만 짝 지어 보인다.', base: '세 사람(가운데 친구·웃는 친구·망설이는 친구)의 마음을 짝 짓는다.', challenge: '세 사람을 짝 지은 뒤, 망설이는 친구가 왜 망설이는지 까닭을 말한다.' },
        intro: {
          teacher: '"복도에서 친구 몇 명이 한 친구를 둘러싸고 웃고 있어요. 이 장면에 있는 사람들은 저마다 어떤 마음일까요?" 시연 단추로 가운데 친구에게 \'무서움\', 웃는 친구에게 \'신남\', 망설이는 친구에게 \'걱정\'이 이어지는 모습을 보인다. "구경만 하는 사람은 상관없어요"라는 말에는 "구경하는 사람이 많으면 가운데 친구는 어떤 마음이 들까요?"라고 되묻는다. 오늘은 주변에 있는 사람이 상황을 바꿀 수 있다는 것을 배운다고 밝힌다.',
          student: '그림 속 망설이는 친구가 되어, 무엇이 마음에 걸리는지 짝에게 한 가지 말해 보아요.',
          demo: { tool: 'emotion', options: { slots: [{ id: 'mid', label: '가운데 친구' }, { id: 'laugh', label: '웃는 친구' }, { id: 'look', label: '망설이는 친구' }], cards: ['무서움', '신남', '걱정', '편안함'] }, sequence: [{ match: { mid: '무서움', laugh: '신남' } }, { match: { mid: '무서움', laugh: '신남', look: '걱정' } }] },
          art: art('a paper school hallway where a few paper children stand around one child, and one paper child at the side looks worried', '주변 사람도 장면 속에 있어요', 'cloud', 'sky'),
        },
        notes: '장면은 지어낸 것이다. 학생에게 이런 장면을 겪었는지 묻지 않는다.',
      }),
      X('intro.reaction-circle', {
        title: '주변인 반응 원그래프 읽기', method: '주변인 반응 원그래프 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '가장 큰 조각 하나를 고른다.', base: '조각을 큰 차례로 말한다.', challenge: '말리기·알리기 조각이 커지면 장면이 어떻게 바뀔지 추측한다.' },
        intro: {
          teacher: '"이 원그래프는 어느 반이 \'친구가 괴롭힘 받는 걸 보면 어떻게 하나요?\'에 답했다고 꾸민 가상 자료예요. 가장 큰 조각은 무엇일까요?" 시연 단추로 \'모른 척\'을 고르는 모습을 보인다. "모른 척은 아무 편도 아니니 괜찮아요"라는 말에는 "가운데 친구 눈에는 모른 척하는 사람이 어떻게 보일까요?"라고 되묻는다. 숫자는 가상이라고 밝힌다.',
          student: '원그래프에서 \'말리기\'와 \'알리기\' 조각이 더 커지면 무엇이 달라질지 짝에게 말해 보아요.',
          demo: { tool: 'chart', options: { type: 'circle', mode: 'read', title: '친구가 괴롭힘 받을 때 나는(가상)', unit: '%', data: REACT, question: '가장 큰 조각은?', choices: REACT.map((x) => x[0]) }, sequence: [{ pick: 0 }] },
          art: art('a paper pie chart split into four colored paper slices beside a group of paper children', '주변 사람들은 어떻게 할까?', 'star', 'buttercup'),
        },
        notes: '그래프 수치는 수업용 가상 자료다.',
      }),
      X('activity.role-sort', {
        title: '주변인 역할 네 가지 나누기', method: '주변인 역할 네 가지 나누기', tool: 'story', minutes: 14,
        levels: { easy: '두 칸(돕는 행동·돕지 않는 행동)에 카드 4장을 나눈다.', base: '네 칸(동조·강화·방관·방어)에 카드 8장을 나눈다.', challenge: '네 칸에 넣지 않을 카드가 섞이고, 같은 행동이 상황에 따라 다른 역할이 되는 경우를 모둠에서 말한다(셋째 문항).' },
        activity: {
          title: '주변인 역할 나누기', tool: 'story',
          teacher: '"같이 놀리는 것과 옆에서 웃는 것은 같은 역할일까요, 다른 역할일까요?" 칸 이름(동조=같이 하기, 강화=부추기기, 방관=못 본 척, 방어=돕기)을 먼저 함께 읽는다. "가만히 있으면 중립이에요"라는 학생에게 "가운데 친구는 가만히 있는 사람을 자기 편이라고 느낄까요?"라고 묻는다. 방어는 맞서 싸우는 것만이 아니라 곁에 있어 주거나 알리는 것도 된다는 점을 짚는다.',
          task: '장면 속 행동 카드를 주변인 역할 칸에 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            { prompt: '복도 장면의 행동 카드를 주변인 역할 칸에 나누어요.', toolOptions: { mode: 'sort', title: '복도 장면(지어낸 이야기)', slots: ['동조', '강화', '방관', '방어'], cards: ['같이 놀리기', '웃으며 박수 치기', '못 본 척 지나가기', '"그만해"라고 말하기', '밀치는 데 끼기', '"더 해 봐" 외치기', '멀리서 구경만 하기', '선생님께 알리기'] },
              target: { sort: { 동조: ['같이 놀리기', '밀치는 데 끼기'], 강화: ['웃으며 박수 치기', '"더 해 봐" 외치기'], 방관: ['못 본 척 지나가기', '멀리서 구경만 하기'], 방어: ['"그만해"라고 말하기', '선생님께 알리기'] } }, difficulty: 0.25,
              levels: {
                easy: { prompt: '복도 장면의 행동 카드를 돕는 행동과 돕지 않는 행동으로 나누어요(카드 4장).', toolOptions: { slots: ['돕는 행동', '돕지 않는 행동'], cards: ['같이 놀리기', '"그만해"라고 말하기', '못 본 척 지나가기', '선생님께 알리기'] }, target: { sort: { '돕는 행동': ['"그만해"라고 말하기', '선생님께 알리기'], '돕지 않는 행동': ['같이 놀리기', '못 본 척 지나가기'] } } },
                challenge: { prompt: '복도 장면의 행동 카드를 역할 칸에 나누어요(넣지 않을 카드도 있어요).', toolOptions: { cards: ['같이 놀리기', '웃으며 박수 치기', '급식 줄 서기', '못 본 척 지나가기', '"그만해"라고 말하기', '밀치는 데 끼기', '"더 해 봐" 외치기', '멀리서 구경만 하기', '선생님께 알리기'] } },
              } },
            { prompt: '단체 놀이 장면의 행동 카드를 주변인 역할 칸에 나누어요.', toolOptions: { mode: 'sort', title: '운동장 놀이(지어낸 이야기)', slots: ['동조', '강화', '방관', '방어'], cards: ['같이 안 끼워 주기', '"쟤 빼자" 맞장구', '모르는 척 놀기', '"같이 하자" 부르기', '공을 일부러 피하기', '키득키득 웃기', '자리를 피하기', '혼자인 친구 곁에 서기'] },
              target: { sort: { 동조: ['같이 안 끼워 주기', '공을 일부러 피하기'], 강화: ['"쟤 빼자" 맞장구', '키득키득 웃기'], 방관: ['모르는 척 놀기', '자리를 피하기'], 방어: ['"같이 하자" 부르기', '혼자인 친구 곁에 서기'] } }, difficulty: 0.3,
              levels: { easy: { prompt: '운동장 놀이 카드를 돕는 행동과 돕지 않는 행동으로 나누어요(카드 4장).', toolOptions: { slots: ['돕는 행동', '돕지 않는 행동'], cards: ['같이 안 끼워 주기', '"같이 하자" 부르기', '모르는 척 놀기', '혼자인 친구 곁에 서기'] }, target: { sort: { '돕는 행동': ['"같이 하자" 부르기', '혼자인 친구 곁에 서기'], '돕지 않는 행동': ['같이 안 끼워 주기', '모르는 척 놀기'] } } } },
              conclude: '주변인은 동조·강화·방관·방어 가운데 하나가 돼요. 가만히 있는 것도 상황을 이어 가게 해요.' },
            { prompt: '\'자리를 피하기\'가 방어가 될 때(예: 선생님을 부르러 감)를 모둠에서 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '행동에 알맞은 역할을 써요.', columns: ['행동', '역할'], cells: [['웃으며 박수 치기', ''], ['못 본 척 지나가기', ''], ['선생님께 알리기', '']], answer: '강화, 방관, 방어' }] },
      }),
      X('activity.bag-choice', {
        title: '가방을 던지는 장면', method: '가방을 던지는 장면 결과 따라가기', tool: 'dilemma', minutes: 13,
        levels: { easy: '갈림 1번(그만하라고 할지 같이 던질지)에서 고르고 근거 한 장을 고른다.', base: '갈림 2번(윤의 곁에 갈지)을 지나 근거를 고른다.', challenge: '갈림 3번(무리 친구가 나에게 가방을 건넬 때)까지 지나 근거를 모두 고르고 다른 길과 견준다.' },
        activity: {
          title: '갈림길: 친구 가방이 날아다녀요', tool: 'dilemma',
          teacher: '"친구 가방을 돌려 던지는 걸 보면 무엇을 할 수 있을까요? 꼭 싸워서 막아야 할까요?" 고를 때마다 결과 칸과 윤의 마음이 어떻게 바뀌는지 읽게 한다. "말리면 나도 괴롭힘당해요"라는 걱정에는 그 마음을 인정하고 "혼자 맞서지 않아도 돼요. 곁에 가거나 선생님께 알리는 것도 돕는 거예요. 알린 사람의 이름은 지켜져요"라고 말해 준다. 잘못은 던진 쪽에 있다는 점을 분명히 한다.',
          task: '갈림길마다 고르고, 윤의 마음과 상황이 어떻게 바뀌는지 읽은 뒤 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '날아다니는 가방',
            steps: [
              { text: '쉬는 시간, 몇 명이 윤의 가방을 서로 던지며 웃어요. 윤은 "돌려줘"라고 해요.', motif: 'star',
                good: ['say', '"그만해, 돌려줘"라고 말한다', '던지던 친구들이 잠깐 멈칫해요.', [['윤', '편이 있다고 느껴요', 1]]],
                bad: ['watch', '재밌어 보여서 구경한다', '구경꾼이 늘자 더 세게 던져요.', '구경하는 사람이 많을수록 괴롭힘이 커질 수 있어요.', [['윤', '더 외로워요', -1]]] },
              { text: '가방이 바닥에 떨어졌어요. 윤은 울 것 같은 얼굴이에요.', motif: 'cloud',
                good: ['near', '윤 곁에 가서 같이 가방을 줍는다', '윤이 조금 숨을 돌려요.', [['윤', '혼자가 아니에요', 1]]],
                bad: ['leave', '모른 척 자리로 간다', '윤 혼자 가방을 주워요.', '곁에 있어 주는 것만으로도 큰 도움이 돼요.', [['윤', '혼자 남아요', -1]]] },
              { text: '다음 날 무리 친구가 나에게 윤의 가방을 건네며 "너도 던져 봐"라고 해요.', motif: 'wind',
                good: ['give', '가방을 윤에게 돌려주고 선생님께 알린다', '선생님이 함께 이야기 시간을 열어요.', [['윤', '보호받아요', 1], ['무리 친구', '멈출 기회가 생겨요', 0]]],
                bad: ['throw', '분위기 때문에 던진다', '나도 괴롭힘에 끼게 됐어요.', '"다들 하니까"는 까닭이 되지 않아요.', [['윤', '더 아파요', -1]]] },
            ],
            ending: '말하고, 곁에 있고, 알린 덕분에 윤이 보호받았어요.',
            reasons: [{ id: 'safe', text: '싸우지 않고도 곁에 있거나 알려서 도울 수 있다' }, { id: 'more', text: '구경꾼이 줄면 괴롭힘이 멈추기 쉽다' }, { id: 'neutral', text: '가만히 있으면 아무 편도 아니다', why: '가만히 있으면 괴롭힘이 계속되기 쉬워요.' }, { id: 'reason', text: '괴롭힘 받는 쪽에도 이유가 있다', why: '잘못은 괴롭히는 쪽에 있어요.' }],
            good: ['safe', 'more'],
            talk: '모둠에서 "혼자 맞서기 어려울 때 안전하게 도울 방법"을 하나씩 말해요.',
            conclude: '맞서 싸우지 않아도 돼요. 멈춰 달라고 하고, 곁에 있고, 어른께 알리는 것이 방어예요.',
          }),
        },
        worksheet: { items: [{ type: 'choice', prompt: '혼자 맞서기 어려울 때 안전하게 돕는 방법은?', options: ['같이 던진다', '곁에 있어 주고 어른께 알린다', '모른 척한다'], answer: '곁에 있어 주고 어른께 알린다' }] },
      }),
      X('activity.safe-help-map', {
        title: '안전하게 돕는 방법 그물', method: '안전하게 돕는 방법 모둠 생각 그물', tool: 'mindmap', minutes: 14,
        levels: { easy: '가지 2개(그 자리에서·어른께 알리기)에 방법 카드를 붙인다.', base: '가지 4개(나중에·곁에 있어 주기 더함)에 방법 카드를 붙인다.', challenge: '가지 4개에 붙인 뒤, 둘째 문항에서 방법을 안전한 방법·위험한 방법으로 가른다(넣지 않을 카드 섞임).' },
        activity: {
          title: '방어자가 할 수 있는 일 그물', tool: 'mindmap',
          teacher: '"방어자가 할 수 있는 일은 \'그만해\' 말고 또 무엇이 있을까요?" 모둠이 카드를 하나씩 소리 내어 읽고 가지에 붙이게 한다. "주먹으로 막아 주는 게 진짜 방어예요"라는 학생에게 "그러면 나도 다치거나 싸움이 커질 수 있어요. 나도 안전하게 도울 길은 무엇일까요?"라고 묻는다. 나중에 건네는 위로의 말도 방어라는 점을 짚는다.',
          task: '가운데 \'방어자\'에서 가지마다 할 수 있는 방법 카드를 붙여요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTN('방어자가 할 수 있는 방법 카드를 가지에 붙여요.', { topic: '방어자', slots: ['그 자리에서', '어른께 알리기', '나중에', '곁에 있어 주기'], easySlots: ['그 자리에서', '어른께 알리기'],
              groups: { '그 자리에서': ['"그만해" 말하기', '"같이 가자" 부르기'], '어른께 알리기': ['담임 선생님께 말하기', '보호자께 알리기'], 나중에: ['"괜찮아?" 묻기', '쪽지로 마음 전하기'], '곁에 있어 주기': ['쉬는 시간 같이 있기', '급식 때 옆자리 앉기'] },
              traps: ['주먹으로 막아 주기'] }, 0.25),
            SORT('돕는 방법을 안전한 방법과 위험한 방법으로 나누어요.', { topic: '돕는 방법', slots: ['안전한 방법', '위험한 방법'], groups: { '안전한 방법': ['여럿이 함께 말리기', '선생님 모시고 오기', '혼자 남은 친구 곁에 서기'], '위험한 방법': ['혼자 끼어들어 밀치기', '똑같이 욕해 주기', '몰래 보복 계획 짜기'] }, extra: { '안전한 방법': ['보건실에 같이 가 주기'], '위험한 방법': ['단체방에 폭로하기'] } }, 0.25,
              { conclude: '방어는 나도 안전하게: 그 자리에서 말하기, 곁에 있기, 나중에 위로하기, 어른께 알리기.' }),
            { prompt: '모둠 그물에서 내가 해 볼 수 있는 방법 하나를 골라 까닭과 함께 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '안전하면 ○, 위험하면 ×를 써요.', columns: ['방법', '○ / ×'], cells: [['혼자 끼어들어 밀치기', ''], ['선생님 모시고 오기', ''], ['혼자 남은 친구 곁에 서기', '']], answer: '×, ○, ○' }] },
      }),
      X('activity.defender-role', {
        title: '방어자 역할놀이', method: '방어자 역할놀이와 모둠 점검', tool: 'timer', minutes: 13,
        levels: { easy: '순서 카드 2장(다가가기·어른께 알리기)을 놓는다.', base: '순서 카드 3장(다가가기→"같이 가자"→어른께 알리기)을 놓고, 역할놀이 뒤 점검 3칸을 표시한다.', challenge: '카드 3장·점검 4칸을 마치고, 역할을 바꿔 한 번 더 한 뒤 더 나아진 점을 말한다(셋째 문항).' },
        activity: {
          title: '방어자 차례와 역할놀이 점검', tool: 'timer',
          teacher: '"방어자가 다가갈 때 가장 먼저 무엇을 할까요?" 순서 카드를 놓은 뒤 모둠이 \'혼자 있는 친구·방어자·지나가는 친구\' 역할을 나눠 짧게 해 보게 한다. 괴롭히는 역할은 두지 않는다. "같이 가자"라는 말이 작게 나오면 "친구가 들을 수 있게, 다정하지만 또렷하게 말해 볼까요?"라고 말해 준다. 끝나면 점검 칸을 스스로 표시하게 한다.',
          task: '방어자 차례 카드를 놓고, 모둠 역할놀이를 한 뒤 점검 칸에 표시해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '방어자가 혼자 남은 친구를 돕는 차례대로 카드를 놓아요.', toolOptions: { title: '방어자 차례', cards: ['어른께 알리기', '다가가기', '"같이 가자" 데리고 나오기'] }, target: { order: ['다가가기', '"같이 가자" 데리고 나오기', '어른께 알리기'] }, difficulty: 0.2,
              levels: { easy: { prompt: '방어자가 돕는 차례대로 카드를 놓아요(카드 2장).', toolOptions: { cards: ['어른께 알리기', '다가가기'] }, target: { order: ['다가가기', '어른께 알리기'] } } } },
            { prompt: '모둠 역할놀이를 한 뒤 해낸 것에 스스로 표시해요.', toolOptions: { title: '역할놀이 점검' }, target: { selfCheck: ['친구에게 다가갔다', '"같이 가자"를 또렷하게 말했다', '어른께 알리는 장면까지 했다'] }, difficulty: 0.1,
              levels: { easy: { prompt: '모둠 역할놀이를 한 뒤 해낸 것에 스스로 표시해요(두 칸).', target: { selfCheck: ['친구에게 다가갔다', '어른께 알리는 장면까지 했다'] } }, challenge: { prompt: '모둠 역할놀이를 한 뒤 해낸 것에 스스로 표시해요(네 칸).', target: { selfCheck: ['친구에게 다가갔다', '"같이 가자"를 또렷하게 말했다', '어른께 알리는 장면까지 했다', '역할을 바꿔 한 번 더 했다'] } } },
              conclude: '다가가고, 데리고 나오고, 어른께 알려요. 나도 안전한 방법으로 도와요.' },
            { prompt: '역할을 바꿔 한 번 더 하고, 처음보다 나아진 점을 모둠에서 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '혼자 남은 친구에게 다가가 건넬 말을 한 문장으로 써요.' }] },
        notes: '역할놀이에서 괴롭히는 역할은 두지 않는다. 혼자 있는 친구 역할은 돌아가며 맡고 끝나면 역할에서 나오는 인사를 한다.',
      }),
      X('wrap.comfort-note', {
        title: '혼자였던 친구에게 쪽지 쓰기', method: '피해 친구에게 위로 쪽지 쓰고 기준표 점검', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀을 보고 쪽지를 쓰고 기준 2개(마음 알아주기·탓하지 않기)를 점검한다.', base: '두세 문장 쪽지를 쓰고 기준 3개(도움 제안 더함)를 점검한다.', challenge: '기준 3개를 점검한 뒤 한 군데를 고쳐 쓰고, 도와줄 구체적 행동(같이·곁에·선생님 가운데 하나)을 넣는다.' },
        wrap: {
          teacher: '"오늘 이야기 속 윤에게 쪽지를 건넨다면 어떤 말이 힘이 될까요?" 기준표를 함께 읽고 쪽지를 쓰게 한다. "네가 좀 참지 그랬어" 같은 문장이 보이면 "그 말을 들으면 윤은 자기 잘못이라고 느낄 수 있어요. 잘못은 던진 친구들에게 있어요"라고 말해 주고 고쳐 쓰게 한다. 쪽지 속 이름은 지어낸 이름만 쓴다.',
          exitTicket: [
            RUBX('지어낸 친구 윤에게 위로 쪽지를 써요', { topic: '가방을 빼앗겼던 지어낸 친구 윤에게 힘이 되는 쪽지를 두세 문장으로 써요.', starter: '윤아, 많이 ___. 네 잘못이 아니야. 내가 ___.', crit: ['윤의 마음을 알아주었다', '윤을 탓하지 않았다', '도와줄 일을 제안했다'], must: [['같이', '곁에', '선생님']], chars: [20, 140], title: '윤에게 쓰는 쪽지' }),
            { type: 'choice', prompt: '괴롭힘을 받은 친구에게 하면 안 되는 말은?', options: ['네 잘못이 아니야', '네가 참았어야지', '내가 곁에 있을게'], answer: 1, difficulty: 0.15, explain: '참았어야 한다는 말은 잘못을 받은 친구에게 돌려요.' },
            { type: 'mood', prompt: '친구를 돕는 방법을 배운 지금 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '나는 방어자',
          items: [
            { type: 'short', prompt: '혼자였던 친구에게 건넬 위로의 말을 한 문장으로 써요.' },
            { type: 'check', prompt: '내가 할 수 있는 방어 행동에 표시해요.', options: ['"그만해" 말하기', '곁에 있어 주기', '나중에 "괜찮아?" 묻기', '어른께 알리기'] },
          ],
          easy: { note: '"네 잘못이 아니야"로 시작해도 돼요.', items: [{ type: 'draw', prompt: '혼자인 친구 곁에 서 있는 내 모습을 그려요.' }] },
        },
      }),
      X('wrap.class-chant', {
        title: '우리 반 방어자 구호', method: '우리 반 방어자 구호 고르기', tool: 'wordcards', minutes: 7,
        levels: { easy: '카드 3장 가운데 방어자 구호 1장을 고른다.', base: '카드 5장 가운데 방어자 구호 3장을 고른다.', challenge: '헷갈리는 카드까지 섞인 판에서 구호 3장을 고르고, 하나를 우리 반 말로 고쳐 쓴다.' },
        wrap: {
          teacher: '"우리 반이 함께 외칠 방어자 구호를 골라 볼까요?" 고른 구호를 반 전체가 한 번 함께 읽는다. \'못 본 척이 제일 편해\'를 고른 학생에게 "편한 것과 옳은 것은 같을까요? 가운데 친구에게는 어떨까요?"라고 되묻는다. 마지막으로 구호 하나를 우리 반 말투로 고쳐 써 교실에 붙이자고 제안한다.',
          exitTicket: [
            EX('wordcards', PICK('방어자가 외칠 구호만 골라요.', '우리 반 구호', ['보면 말해요, 그만!', '혼자 두지 않아요', '알리는 건 지키는 거예요'], ['못 본 척이 제일 편해', '이기는 편에 서자'], { easy: 1, easyTraps: 2, extraTraps: ['웃으면 다 장난이야'] }, 0.15)),
            { type: 'short', prompt: '고른 구호 하나를 우리 반 말로 고쳐 써요.' },
            { type: 'choice', prompt: '"가만히 있으면 중립이다"에 대한 알맞은 생각은?', options: ['맞다, 아무 편도 아니다', '괴롭힘이 계속되게 둘 수 있다', '가만히 있는 게 가장 좋다'], answer: 1, difficulty: 0.2, explain: '가만히 있으면 괴롭히는 쪽이 계속해도 된다고 느낄 수 있어요.' },
          ],
        },
        worksheet: {
          title: '우리 반 방어자 구호',
          items: [
            { type: 'short', prompt: '우리 반 방어자 구호를 한 줄로 지어 써요.' },
            { type: 'choice', prompt: '방어자 구호로 알맞은 것은?', options: ['못 본 척이 제일 편해', '혼자 두지 않아요', '이기는 편에 서자'], answer: '혼자 두지 않아요' },
          ],
        },
      }),
    );
  }

  // ======== 5학년 · 동의 구하기와 거절 존중하기 (별표 2 '성폭력 예방 및 대처방안 알기') ========
  {
    const X = mk('consent', 5);
    const ASK = [['늘 묻는다', 9], ['가끔 묻는다', 13], ['안 묻는다', 6]];
    const ASKT = '사진 올리기 전 친구에게 묻나요?(가상)';
    M.push(
      X('intro.photo-scene', {
        title: '\'올려도 돼?\' 두 장면 견주기', method: '\'올려도 돼?\' 장면 읽기', tool: 'story', minutes: 6,
        levels: { easy: '교사가 다른 점 하나(올리기 전에 물어봄)를 짚어 주고 고르게 한다.', base: '두 장면의 다른 점 두 개를 스스로 고른다.', challenge: '다른 점 두 개를 고르고, 장면마다 그 뒤에 생길 일을 추측해 말한다.' },
        intro: {
          teacher: '"두 장면 모두 체험학습에서 친구 사진을 찍었어요. 무엇이 다를까요?" 시연 단추로 \'찍기 전에 물어봄\'과 \'올리기 전 "괜찮아?" 물음\'이 바구니에 담기는 모습을 보인다. "친한 친구면 안 물어봐도 돼요"라는 말에는 "친한 친구도 그 사진이 마음에 안 들 수 있지 않을까요?"라고 되묻는다. 오늘은 몸과 사진에서 먼저 묻고 대답을 존중하는 \'동의\'를 배운다고 밝힌다.',
          student: '두 장면 가운데 내가 사진 속 친구라면 어느 쪽이 더 마음 편할지 짝에게 까닭과 함께 말해 보아요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '두 장면의 다른 점', title: '체험학습 사진(지어낸 장면)', cards: [{ id: 'ask1', text: '찍기 전에 물어봄', motif: 'sun' }, { id: 'place', text: '사진 찍은 장소', motif: 'tree' }, { id: 'ask2', text: '올리기 전 "괜찮아?"', motif: 'star' }, { id: 'sky', text: '그날의 날씨', motif: 'cloud' }], shuffle: false }, sequence: [{ pick: ['ask1'] }, { pick: ['ask1', 'ask2'] }] },
          art: art('two paper scenes side by side: on the left a paper child takes a friend photo without asking, on the right a paper child holds a phone and asks with a speech bubble', '올려도 돼?', 'star', 'buttercup'),
        },
      }),
      X('intro.ask-wait-respect', {
        title: '묻기·기다리기·존중하기', method: '묻기·기다리기·존중하기 3단계 동작', tool: 'timer', minutes: 6,
        levels: { easy: '순서 카드 2장(묻기·대답대로 하기)을 함께 놓고 따라 한다.', base: '순서 카드 3장(묻기→기다리기→대답대로 하기)을 놓고 짝과 따라 한다.', challenge: '3장을 놓고, 짝이 "잘 모르겠어"라고 답하는 경우까지 해 본다.' },
        intro: {
          teacher: '"친구 어깨에 손을 올리고 싶을 때, 무엇부터 할까요?" 시연 단추로 순서 카드가 묻기 → 대답 기다리기 → 대답대로 하기로 놓이는 모습을 보인다. 짝과 "어깨동무해도 돼?" "응/아니"를 주고받게 한다. "대답이 없으면 좋다는 뜻이에요"라는 말에는 "대답이 없을 때는 아직 허락이 아니에요. 멈추고 기다려요"라고 말해 준다.',
          student: '짝에게 "하이파이브해도 돼?"라고 묻고, 짝의 대답대로 해 보아요.',
          demo: { tool: 'timer', options: { title: '동의 3단계', cards: ['대답대로 하기', '묻기', '대답 기다리기'] }, sequence: [{ order: ['묻기', '대답 기다리기', '대답대로 하기'] }] },
          art: art('two paper children facing each other, one raising a hand for a high five and waiting, with three small numbered paper cards above them', '묻고, 기다리고, 존중해요', 'sun', 'mint'),
        },
        notes: '몸에 닿는 연습은 하이파이브·어깨동무처럼 가벼운 것만, 짝이 원하지 않으면 말로만 한다.',
      }),
      X('activity.consent-sort', {
        title: '동의 있음·없음·다시 묻기', method: '동의 있음·없음·다시 물어야 함 나누기', tool: 'mindmap', minutes: 14,
        levels: { easy: '두 칸(동의 있음·동의 없음)에 카드 4장을 나눈다.', base: '세 칸(다시 물어야 함 더함)에 카드 6장을 나눈다.', challenge: '세 칸에 넣지 않을 카드가 섞이고, 몸짓 신호 카드를 고른 근거를 모둠에서 말한다(셋째 문항).' },
        activity: {
          title: '대답 장면 세 칸에 나누기', tool: 'mindmap',
          teacher: '"고개를 돌리고 아무 말이 없으면 좋다는 뜻일까요?" 카드를 놓을 때마다 왜 그 칸인지 말하게 한다. "가만히 있으면 동의한 거예요"라는 학생에게 "가만히 있는 친구 마음은 어떨지 알 수 있을까요? 모르면 다시 물어요"라고 묻는다. 처음에 좋다고 했어도 "그만"이라고 하면 바로 멈춘다는 점, 어제 허락한 것도 오늘 다시 묻는다는 점을 짚는다.',
          task: '친구의 대답 장면 카드를 동의 있음·동의 없음·다시 물어야 함 칸에 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTN('어깨동무를 하자고 했을 때 친구의 대답을 칸에 나누어요.', { topic: '어깨동무해도 돼?', slots: ['동의 있음', '동의 없음', '다시 물어야 함'], easySlots: ['동의 있음', '동의 없음'],
              groups: { '동의 있음': ['웃으며 "좋아"', '"응, 그래"'], '동의 없음': ['대답 없이 고개 돌림', '처음엔 좋다더니 "그만"'], '다시 물어야 함': ['"음… 잘 모르겠어"', '어제는 된다고 했음'] },
              traps: ['묻기 전에 먼저 함'] }, 0.25),
            SORTN('사진을 올려도 되냐고 물었을 때 친구의 대답을 칸에 나누어요.', { topic: '올려도 돼?', slots: ['동의 있음', '동의 없음', '다시 물어야 함'], easySlots: ['동의 있음', '동의 없음'],
              groups: { '동의 있음': ['"그 사진 좋아, 올려"', '고개 끄덕이며 "응"'], '동의 없음': ['"내 얼굴은 빼 줘"', '몸을 뒤로 빼며 침묵'], '다시 물어야 함': ['"다른 사진은 안 돼?"', '바빠서 대답 못 함'] },
              traps: ['다들 올리니까 올림'] }, 0.3, { conclude: '분명한 "좋아"만 동의예요. 대답이 없거나 망설이면 다시 묻고, "그만"이면 바로 멈춰요.' }),
            { prompt: '\'몸을 뒤로 빼며 침묵\'을 고른 칸의 근거를 모둠에서 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '알맞은 칸 이름을 써요.', columns: ['친구의 대답', '칸'], cells: [['웃으며 "좋아"', ''], ['대답 없이 고개 돌림', ''], ['"음… 잘 모르겠어"', '']], answer: '동의 있음, 동의 없음, 다시 물어야 함' }] },
      }),
      X('activity.hug-choice', {
        title: '장난 포옹과 사진 게시', method: '장난 포옹·사진 게시 갈림길', tool: 'dilemma', minutes: 13,
        levels: { easy: '갈림 1번(싫은 장난 포옹에 어떻게 말할지)에서 고르고 근거 한 장을 고른다.', base: '갈림 2번(내 사진을 올리려 할 때)을 지나 근거를 고른다.', challenge: '갈림 3번(이번엔 내가 묻는 쪽)까지 지나 근거를 모두 고르고 다른 길과 견준다.' },
        activity: {
          title: '갈림길: 싫은 장난과 내 사진', tool: 'dilemma',
          teacher: '"친한 친구가 장난으로 계속 안으려 하는데 나는 싫어요. 어떻게 말하면 좋을까요?" 고를 때마다 결과 칸을 읽게 한다. "친구가 서운해할까 봐 말 못 해요"라는 마음을 인정하고 "싫다고 말하는 건 내 권리예요. 그리고 묻지 않고 한 쪽이 먼저 멈춰야 해요"라고 말해 준다. 마지막 갈림에서는 내가 묻는 쪽이 되어 상대의 대답을 존중하게 한다.',
          task: '갈림길마다 고르고, 결과를 읽은 뒤 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '싫은 장난과 내 사진',
            steps: [
              { text: '쉬는 시간마다 준이 장난으로 나를 꽉 안으려 해요. 나는 싫어요.', motif: 'wind',
                good: ['no', '"싫어, 하지 마"라고 분명히 말한다', '준이 놀라서 멈춰요.', [['나', '내 몸을 지켜요', 1], ['준', '내 마음을 알게 돼요', 0]]],
                bad: ['bear', '웃으며 꾹 참는다', '준은 내가 좋아하는 줄 알고 또 해요.', '싫은 마음은 말로 알려도 돼요. 참지 않아도 괜찮아요.', [['나', '계속 불편해요', -1]]] },
              { text: '이번엔 준이 내 얼굴이 나온 사진을 보이며 "이거 올려도 되지?"라고 해요.', motif: 'star',
                good: ['refuse', '"이 사진은 올리지 마"라고 말한다', '준이 "알겠어"라며 사진을 지워요.', [['나', '내 사진을 지켜요', 1]]],
                bad: ['skip', '대답 없이 넘어간다', '준이 허락한 줄 알고 사진을 올려요.', '대답이 없는 건 허락이 아니에요. 싫으면 말로 알려도 돼요.', [['나', '원치 않는 사진이 퍼져요', -1]]] },
              { text: '며칠 뒤, 내가 솔과 함께 찍은 사진을 올리고 싶어요.', motif: 'sun',
                good: ['ask', '솔에게 묻고 대답을 기다린다', '솔이 "그 사진 말고 이걸로"라고 골라 줘요.', [['솔', '존중받아요', 1]]],
                bad: ['post', '친하니까 그냥 올린다', '솔이 속상해서 연락이 없어요.', '친한 사이여도 먼저 묻고 대답대로 해요.', [['솔', '속상해요', -1]]] },
            ],
            ending: '분명히 말하고, 먼저 묻고 기다린 덕분에 서로 존중했어요.',
            reasons: [{ id: 'mine', text: '내 몸과 내 사진은 내가 정할 수 있다' }, { id: 'ask', text: '먼저 묻고 대답대로 해야 서로 존중한다' }, { id: 'close', text: '친하면 묻지 않아도 된다', why: '친한 사이에도 묻고 기다려요.' }, { id: 'quiet', text: '가만히 있으면 허락한 것이다', why: '대답이 없으면 아직 허락이 아니에요.' }],
            good: ['mine', 'ask'],
            talk: '모둠에서 "친구가 서운해하지 않게 거절하는 말"을 한 문장씩 말해요.',
            conclude: '싫으면 분명히 말해도 돼요. 묻는 쪽은 기다리고, 대답대로 해요.',
          }),
        },
        worksheet: { items: [{ type: 'choice', prompt: '친구가 아무 대답을 하지 않으면?', options: ['허락한 것이다', '아직 허락이 아니다', '두 번 물으면 된다'], answer: '아직 허락이 아니다' }] },
      }),
      X('activity.refuse-respect', {
        title: '거절하는 말·존중하는 말', method: '거절 표현·거절 존중 표현 짝 짓기', tool: 'wordcards', minutes: 14,
        levels: { easy: '거절하는 말 2개에 존중하는 대답 카드를 짝 짓는다.', base: '거절하는 말 4개에 존중하는 대답을 짝 짓고, 존중하지 않는 말 카드 2장은 남긴다.', challenge: '4쌍을 짝 지은 뒤, 남긴 카드가 왜 문제인지 짝에게 말한다(셋째 문항).' },
        activity: {
          title: '거절과 존중 말 짝 짓기', tool: 'wordcards',
          teacher: '"친구가 \'싫어\'라고 하면 어떻게 대답해야 할까요?" 짝 지은 말을 짝과 주고받으며 소리 내어 읽게 한다. "한 번만 더 부탁하면 돼요"라는 학생에게 "거절한 친구에게 다시 조르면 그 친구는 어떤 마음일까요?"라고 묻는다. 거절을 존중하는 것은 상대를 아끼는 일이고, 거절당해도 내가 싫은 사람이 된 것은 아니라는 점을 짚는다.',
          task: '거절하는 말에 존중하는 대답 카드를 짝 짓고, 존중하지 않는 말은 걸러 내요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            { prompt: '거절하는 말 옆에 존중하는 대답 카드를 놓아요(맞지 않는 카드도 있어요).', toolOptions: { mode: 'match', slots: [{ id: 'r1', label: '"싫어"' }, { id: 'r2', label: '"지금은 안 돼"' }, { id: 'r3', label: '"사진 올리지 마"' }, { id: 'r4', label: '"그만해"' }], cards: ['알겠어, 안 할게', '"왜? 한 번만 하자"', '그래, 나중에 다시 물을게', '말해 줘서 고마워', '"장난인데 뭘 그래"', '미안, 바로 멈출게'] },
              target: { match: { r1: '알겠어, 안 할게', r2: '그래, 나중에 다시 물을게', r3: '말해 줘서 고마워', r4: '미안, 바로 멈출게' } }, difficulty: 0.25,
              levels: { easy: { prompt: '거절하는 말 옆에 존중하는 대답 카드를 놓아요(2쌍).', toolOptions: { slots: [{ id: 'r1', label: '"싫어"' }, { id: 'r4', label: '"그만해"' }], cards: ['미안, 바로 멈출게', '알겠어, 안 할게'] }, target: { match: { r1: '알겠어, 안 할게', r4: '미안, 바로 멈출게' } } } } },
            PICK('거절을 들었을 때 존중하는 대답만 골라요.', '존중하는 대답', ['"응, 알겠어"', '"다른 걸 하자"', '"알려 줘서 고마워"'], ['"치사하게 왜 그래"', '"너 진짜 이상해"'], { easy: 2, extraTraps: ['"그럼 너랑 안 놀아"'] }, 0.2,
              { conclude: '거절은 "싫어"라고 분명히, 거절을 들으면 "알겠어"라고 존중해요.' }),
            { prompt: '남긴 카드 \'왜? 한 번만 하자\'가 왜 문제인지 짝에게 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '친구가 "싫어"라고 했을 때 할 존중하는 대답을 써요.' }] },
      }),
      X('activity.ask-first-chart', {
        title: '사진 올리기 전 묻기 그래프', method: '사진 올리기 전 묻기 막대그래프 해석', tool: 'chart', minutes: 13,
        levels: { easy: '막대 두 개(늘 묻는다·안 묻는다)를 견주어 더 많은 것을 읽는다.', base: '막대 세 개에서 가장 많은 것과 차이를 읽고, 묻지 않을 때의 결과 하나를 고른다.', challenge: '같은 문항을 푼 뒤, 묻지 않는 까닭과 결과를 이어 모둠에서 토의한다(넷째 문항).' },
        activity: {
          title: '가상 조사 그래프 읽고 토의', tool: 'chart',
          teacher: '"이 막대그래프는 어느 5학년 반의 가상 조사예요. \'가끔 묻는다\'가 가장 많다는 건 무슨 뜻일까요?" 막대 끝을 눈금에 맞춰 읽게 한다. "가끔 물으면 충분해요"라는 학생에게 "묻지 않은 그 \'가끔\'에 사진 속 친구가 싫었다면 어떻게 될까요?"라고 묻는다. 결과와 함께 \'왜 묻지 않을까\'의 원인(귀찮음·친하다는 생각)을 이어 보게 한다.',
          task: '가상 조사 그래프를 읽고, 묻지 않을 때 생길 결과와 원인을 찾아요.', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            READ('가장 많은 학생이 고른 답은 무엇인가요?(가상 자료)', { title: ASKT, data: ASK, question: '가장 많은 답은?' }, 1, 0.15,
              { levels: { easy: { prompt: '\'늘 묻는다\'와 \'안 묻는다\' 가운데 더 많은 답은?(가상 자료)', toolOptions: { data: [ASK[0], ASK[2]], choices: ['늘 묻는다', '안 묻는다'] }, target: { pick: 0 } } } }),
            READ('\'늘 묻는다\'는 \'안 묻는다\'보다 몇 명 더 많나요?(가상 자료)', { title: ASKT, data: ASK, choices: ['3명', '6명', '9명'], question: '몇 명 더 많나요?' }, 0, 0.25),
            READ('묻지 않고 올리면 생길 수 있는 결과로 알맞은 것은?(가상 자료)', { title: ASKT, data: ASK, choices: ['사진 속 친구가 속상할 수 있다', '모두가 늘 기뻐한다', '아무 일도 생기지 않는다'], question: '알맞은 결과는?', why: ['', '사진이 마음에 안 드는 친구도 있어요.', '허락 없는 사진은 상처가 될 수 있어요.'] }, 0, 0.25,
              { conclude: '묻지 않으면 사진 속 친구가 속상할 수 있어요. 올리기 전에 늘 물어요.' }),
            { prompt: '모둠에서 "왜 묻지 않을까?(원인)"와 "그러면 어떻게 될까?(결과)"를 이어 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '친구 사진을 올리기 전에 할 말을 한 문장으로 써요.' }] },
        notes: '그래프 수치는 수업용 가상 자료다.',
      }),
      X('wrap.consent-promise', {
        title: '나의 동의 약속 쓰기', method: '동의 약속 문장 쓰고 기준표 점검', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀을 보고 약속 한 문장을 쓰고 기준 2개를 점검한다.', base: '약속 한두 문장을 쓰고 기준 3개(구체적 상황·존중 표현·실천 가능)를 점검한다.', challenge: '기준 3개를 점검한 뒤 한 군데를 고쳐 쓰고, 몸·온라인 약속을 함께 넣는다(\'물어\'·\'묻\'을 넣음).' },
        wrap: {
          teacher: '"오늘 배운 \'묻기·기다리기·존중하기\'를 내 약속으로 바꾸어 볼까요?" 기준표를 함께 읽고 쓰게 한다. "착하게 지내겠다"처럼 막연한 문장에는 "언제, 어떤 상황에서 묻겠다는 걸까요?"라고 되물어 구체적으로 고치게 한다.',
          exitTicket: [
            RUBX('\'나는 ~할 때 먼저 묻겠다\' 약속을 써요', { topic: '몸에 닿을 때나 사진을 올릴 때 지킬 나의 동의 약속을 한두 문장으로 써요.', starter: '나는 ___ 할 때 먼저 물어보고, 친구가 ___ 하면 그대로 하겠다.', crit: ['언제인지 상황을 구체적으로 썼다', '대답을 존중하는 말을 넣었다', '내가 지킬 수 있는 약속이다'], must: [['물어', '묻']], chars: [20, 140], title: '나의 동의 약속' }),
            { type: 'choice', prompt: '어제 허락받은 사진을 오늘 다시 올리려면?', options: ['어제 허락했으니 그냥 올린다', '오늘 다시 물어본다', '몰래 올린다'], answer: 1, difficulty: 0.2, explain: '한 번 허락했어도 마음은 바뀔 수 있어요. 다시 물어요.' },
            { type: 'short', prompt: '이번 주에 지킬 동의 약속 하나를 짧게 써요.' },
          ],
        },
        worksheet: {
          title: '먼저 묻고, 대답대로',
          items: [
            { type: 'short', prompt: '몸에 닿을 때 지킬 나의 동의 약속을 써요.' },
            { type: 'short', prompt: '사진을 올릴 때 지킬 나의 동의 약속을 써요.' },
          ],
          easy: { note: '"나는 ~할 때 먼저 물어보겠다"로 써요.', items: [{ type: 'draw', prompt: '친구에게 먼저 묻는 내 모습을 그려요.' }] },
        },
      }),
      X('wrap.rejected-feeling', {
        title: '거절당했을 때 내 마음', method: '거절당했을 때 마음 다루기', tool: 'emotion', minutes: 7,
        levels: { easy: '거절을 들은 장면 1개에 마음 카드를 짝 짓는다.', base: '장면 2개에 마음 카드를 짝 짓고, 서운해도 존중하는 행동을 고른다.', challenge: '장면 3개에 짝 지은 뒤, 서운한 마음을 말로 표현하는 문장을 고른다.' },
        wrap: {
          teacher: '"거절을 들으면 서운하거나 민망할 수 있어요. 그 마음은 이상한 게 아니에요." 장면마다 마음 카드를 짝 짓게 한다. "거절당하면 화내도 돼요"라는 말에는 "서운한 마음은 괜찮아요. 하지만 그 마음 때문에 친구를 탓하거나 조르면 어떨까요?"라고 되묻는다. 서운함은 말로 표현하고 친구의 대답은 존중하는 것이 함께 갈 수 있다는 점을 짚는다.',
          exitTicket: [
            FEEL('거절을 들은 장면과 그때의 마음을 이어요.', [['"같이 놀자"에 "지금은 싫어"', '서운함'], ['어깨동무하려다 "하지 마"', '민망함'], ['"사진 빼 줘"라는 말', '아쉬움']], ['서운함', '민망함', '아쉬움', '신남']),
            { type: 'choice', prompt: '거절을 들어 서운할 때 존중하는 행동은?', options: ['계속 조른다', '"알겠어" 하고 다른 놀이를 한다', '친구 흉을 본다'], answer: 1, difficulty: 0.15, explain: '서운해도 친구의 대답은 존중해요.' },
            { type: 'choice', prompt: '서운한 마음을 말로 알맞게 표현한 문장은?', options: ['"너 정말 치사하다"', '"조금 서운하지만 알겠어"', '"다시는 말 안 해"'], answer: 1, difficulty: 0.2, explain: '내 마음을 말하면서도 친구를 탓하지 않아요.' },
          ],
        },
        worksheet: {
          title: '서운해도 존중해요',
          items: [
            { type: 'short', prompt: '거절을 들었을 때 내 마음을 달래는 방법 하나를 써요.' },
            { type: 'choice', prompt: '거절을 들었을 때 알맞은 대답은?', options: ['"알겠어, 말해 줘서 고마워"', '"한 번만 하자"', '"너랑 안 놀아"'], answer: '"알겠어, 말해 줘서 고마워"' },
          ],
        },
      }),
    );
  }

  // ======== 5학년 · 마음 건강 돌보기 (별표 2 '자살 예방 및 생명존중 교육' + 표준안 자살 중분류 — 스트레스 관리·도움 요청 중심) ========
  {
    const X = mk('mind-health', 5);
    const MOOD = [['월', 3], ['화', 2], ['수', 4], ['목', 1], ['금', 3], ['토', 5], ['일', 4]];
    const MOODT = '지어낸 친구 하의 일주일 기분 점수(가상)';
    const LINE = (prompt, choices, pick, d, more) => READ(prompt, { type: 'line', title: MOODT, unit: '점', xLabel: '요일', yLabel: '기분 점수', data: MOOD, choices, question: '알맞은 것은?' }, pick, d, more);
    M.push(
      X('intro.thermometer', {
        title: '감정 온도계로 마음 크기 재기', method: '감정 온도계로 감정 크기 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 장면 두 개를 읽어 주고 그림 속 친구의 감정 이름만 고르게 한다.', base: '장면 세 개(시험 전날·친구와 다툼·숙제가 많음)마다 감정과 크기(온도)를 고른다.', challenge: '같은 장면이라도 사람마다 온도가 다른 까닭을 말한다.' },
        intro: {
          teacher: '"시험 전날 밤, 그림 속 친구 마음의 온도는 몇 칸쯤일까요?" 시연 단추로 \'걱정\' 온도계가 다섯 칸 가운데 네 칸까지 오르는 모습을 보인다. 이어 \'친구와 다툼\'·\'숙제가 많음\' 장면을 말로 들려주고 손가락으로 온도를 표시하게 한다. "걱정하는 건 약한 거예요"라는 말에는 "걱정은 누구나 느끼는 신호예요. 신호를 알아차리면 돌볼 수 있어요"라고 말해 준다.',
          student: '그림 속 친구의 마음 온도를 손가락 다섯 개 가운데 몇 개로 나타낼지 짝과 견주어 보아요.',
          demo: { tool: 'emotion', options: { mode: 'scale', situation: '그림 속 친구가 시험 전날 밤 잠이 안 와요', feeling: '걱정', steps: 5, scaleLabels: { 1: '조금', 5: '아주 많이' } }, sequence: [{ level: 4 }] },
          art: art('a paper thermometer with five segments beside a paper child lying awake in bed under a paper moon', '내 마음의 온도는?', 'moon', 'sky'),
        },
        notes: '학생 자신의 감정 온도를 공개적으로 말하게 하지 않는다. 그림 속 친구의 마음으로 이야기한다.',
      }),
      X('intro.stress-body', {
        title: '스트레스가 몸에 주는 신호', method: '스트레스가 몸에 주는 신호 고르기', tool: 'body', minutes: 6,
        levels: { easy: '교사가 두 곳(어깨·배)을 짚어 보인다.', base: '네 곳(어깨·목·가슴·배)에 신호가 오는 모습을 함께 본다.', challenge: '네 곳을 본 뒤 신호마다 돌봄 방법(어깨 풀기·숨 고르기 등)을 말로 잇는다.' },
        intro: {
          teacher: '"마음이 힘들면 몸도 신호를 보내요. 어디에서 느껴질까요?" 시연 단추로 어깨·배가 먼저, 이어 목·가슴이 골라지는 모습을 보인다. 머리가 아픈 것도 흔한 신호라는 점은 말로 덧붙인다(몸 그림에 머리 칸은 없다). "배가 아프면 무조건 배탈이에요"라는 말에는 "걱정이 많을 때도 배가 아플 수 있어요. 몸과 마음은 이어져 있어요"라고 말해 준다.',
          student: '그림 속 친구가 걱정이 많을 때 몸 어디가 불편할지 한 곳을 짚고 짝에게 말해 보아요.',
          demo: { tool: 'body', options: { mode: 'parts', parts: ['눈', '목', '어깨', '가슴', '배', '무릎'], names: true }, sequence: [{ parts: ['어깨', '배'] }, { parts: ['목', '어깨', '가슴', '배'] }] },
          art: art('a paper child figure with small glowing paper sparks on the shoulders and stomach, a gentle paper cloud above the head', '몸이 보내는 마음 신호', 'cloud', 'peach'),
        },
        notes: '몸 그림에 머리 칸이 없어 머리 아픔은 교사가 말로 짚는다. 학생 자신의 증상을 발표하게 하지 않는다.',
      }),
      X('activity.mood-line', {
        title: '일주일 기분 그래프 읽기', method: '일주일 기분 꺾은선 읽고 원인 찾기', tool: 'chart', minutes: 14,
        levels: { easy: '기분이 가장 낮은 날을 찾는다(점수가 보임).', base: '가장 낮은 날·높은 날을 찾고 일기 쪽지의 원인과 잇는다.', challenge: '원인을 이은 뒤, 내가 바꿀 수 있는 원인과 바꿀 수 없는 원인으로 가르는 모둠 토의를 한다(넷째 문항).' },
        activity: {
          title: '지어낸 친구 하의 기분 그래프', tool: 'chart',
          teacher: '"이 꺾은선그래프는 지어낸 친구 하의 일주일 기분이에요. 하의 일기 쪽지에는 \'목: 친구와 말다툼\', \'토: 가족과 산책, 푹 잠\'이라고 쓰여 있어요." 쪽지를 칠판에 적고 그래프와 잇게 한다. "기분이 낮은 날은 하가 잘못해서예요"라는 말에는 "기분이 내려가는 건 누구에게나 생기는 일이에요. 무엇이 기분을 다시 올렸는지 찾아볼까요?"라고 묻는다.',
          task: '하의 일주일 기분 그래프와 일기 쪽지를 읽고, 기분이 바뀐 원인을 찾아요.', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            LINE('하의 기분이 가장 낮은 요일은 언제인가요?(가상 자료)', MOOD.map((x) => x[0]), 3, 0.15),
            LINE('쪽지(목: 말다툼, 토: 산책·푹 잠)를 보면 토요일 기분이 오른 까닭은?', ['가족과 산책하고 푹 잤다', '숙제가 많았다', '친구와 말다툼했다'], 0, 0.25),
            LINE('목요일처럼 기분이 내려갈 때 하에게 도움이 될 방법은?(가상 자료)', ['혼자 꾹 참기', '믿는 사람에게 이야기하기', '밤늦게까지 게임하기'], 1, 0.25,
              { conclude: '기분은 일마다 오르내려요. 원인을 알아차리고 쉬기·이야기하기로 돌볼 수 있어요.' }),
            { prompt: '하의 원인 가운데 하가 바꿀 수 있는 것과 없는 것을 모둠에서 갈라 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '그래프(가상)에서 하의 기분이 가장 높은 요일은?', options: ['월', '목', '토', '일'], answer: '토' }] },
        notes: '그래프는 지어낸 인물의 가상 자료다. 학생 자신의 기분 그래프를 걷거나 공개하지 않는다.',
      }),
      X('activity.time-budget', {
        title: '하루 시간에 쉼 지키기', method: '하루 시간 예산으로 쉼 시간 확보하기', tool: 'economy', minutes: 13,
        levels: { easy: '하루 시간 카드 4장을 꼭 지킬 시간·줄일 시간으로 나눈다.', base: '카드 6장(잠·쉼·밥 / 잠들기 전 게임 등)을 나눈다.', challenge: '카드 8장을 나누고, 둘째 문항에서 화면을 끄고 쉬는 저녁 계획 차례를 함정 카드를 빼고 놓는다.' },
        activity: {
          title: '꼭 지킬 시간·줄일 시간', tool: 'economy',
          teacher: '"하루는 누구에게나 24시간이에요. 잠과 쉼은 어디에 넣어야 할까요?" 카드를 나눌 때마다 그 시간이 몸과 마음에 어떤 영향을 주는지 말하게 한다. "잠을 줄이면 놀 시간이 늘어서 좋아요"라는 학생에게 "잠이 모자라면 다음 날 기분과 몸은 어떨까요?"라고 묻는다. 정해진 시간표가 집집마다 다르니 내 하루 시간 수는 활동지에 스스로 적게 한다.',
          task: '하루 시간 카드를 꼭 지킬 시간과 줄일 시간으로 나누고, 쉼이 있는 저녁 차례를 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORT('하루 시간 카드를 꼭 지킬 시간과 줄일 시간으로 나누어요.', { slots: ['꼭 지킬 시간', '줄일 시간'], groups: { '꼭 지킬 시간': ['밤에 푹 자기', '쉬는 시간', '밥 먹는 시간'], '줄일 시간': ['잠들기 전 게임', '밤늦게 영상 보기', '쉬지 않고 몰아 하기'] }, extra: { '꼭 지킬 시간': ['몸 움직이는 놀이'], '줄일 시간': ['밥 먹으며 화면 보기'] } }, 0.2),
            ORDER('화면을 끄고 쉬는 저녁 계획을 차례대로 놓아요.', ['숙제하기', '쉬며 놀기', '씻기', '화면 끄고 잠자리'], { mode: 'order', easy: [0, 2, 3], trap: '누워서 게임 한 판 더' }, 0.25,
              { conclude: '잠과 쉬는 시간은 꼭 지키고, 잠들기 전 화면 시간은 줄여요.' }),
            { prompt: '짝과 서로의 저녁 계획에서 쉼 시간을 하나씩 더 찾아 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 하루 시간을 어림해 써요(시간).', columns: ['잠', '학교', '숙제', '놀이·쉼', '화면'], cells: [['', '', '', '', '']] }] },
        notes: '교구의 economy 는 돈(원)만 세므로 시간 예산은 카드 나누기·차례로 하고, 시간 수치는 활동지에 학생이 스스로 적는다(채점하지 않음).',
      }),
      X('activity.breath-routine', {
        title: '5초 숨쉬기와 어깨 풀기', method: '5초 숨쉬기·근육 풀기 따라 하고 기록', tool: 'timer', minutes: 14,
        levels: { easy: '숨쉬기 타이머를 들이쉬기 5초·내쉬기 5초 2번으로 맞추고 따라 한다.', base: '4번으로 맞추고 따라 한 뒤, 어깨 풀기 차례를 놓고 하기 전·한 뒤 기분 점수를 적는다.', challenge: '같은 순서를 마친 뒤, 하기 전·한 뒤 기분 차이를 짝에게 말한다(넷째 문항).' },
        activity: {
          title: '숨쉬기 타이머와 기분 기록', tool: 'timer',
          teacher: '"마음이 출렁일 때 숨을 천천히 쉬면 몸이 먼저 조용해져요." 타이머의 \'운동\' 칸은 들이쉬기, \'쉬기\' 칸은 내쉬기로 쓰자고 약속하고, 5초는 우리 반 연습값이라고 밝힌다. 시작 단추를 누르고 다 같이 따라 한다. "숨쉬기로 고민이 다 없어져요"라는 말에는 "고민이 사라지진 않아도, 생각할 힘이 생겨요. 그래도 힘들면 어른께 말해요"라고 말해 준다.',
          task: '숨쉬기 타이머를 맞추어 따라 하고, 어깨 풀기 뒤 기분 점수를 적어요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '들이쉬기 5초·내쉬기 5초를 4번 하도록 타이머를 맞춰요(우리 반 연습값).', toolOptions: { title: '숨쉬기 타이머', plan: { work: 10, rest: 10, rounds: 2 } }, target: { plan: { work: 5, rest: 5, rounds: 4 } }, difficulty: 0.2,
              levels: { easy: { prompt: '들이쉬기 5초·내쉬기 5초를 2번 하도록 타이머를 맞춰요.', target: { plan: { work: 5, rest: 5, rounds: 2 } } } } },
            { prompt: '어깨 근육을 푸는 차례대로 카드를 놓아요.', toolOptions: { title: '어깨 풀기', cards: ['툭 내려놓기', '어깨 귀까지 올리기', '꽉 힘주고 멈추기'] }, target: { order: ['어깨 귀까지 올리기', '꽉 힘주고 멈추기', '툭 내려놓기'] }, difficulty: 0.15 },
            { prompt: '숨쉬기·어깨 풀기를 하기 전과 한 뒤의 기분 점수(1~5)를 적어요.', toolOptions: { title: '기분 기록', fields: [{ label: '하기 전 기분', unit: '점' }, { label: '한 뒤 기분', unit: '점' }] }, target: { records: true }, difficulty: 0.1,
              conclude: '숨을 천천히 쉬고 어깨를 풀면 몸과 마음이 함께 편해져요. 그래도 힘들면 도움을 청해요.' },
            { prompt: '하기 전과 한 뒤 기분이 어떻게 달랐는지 짝에게 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '마음이 출렁일 때는 ___ 천천히 쉬고 어깨를 풀어요.', answer: '숨을' }] },
        notes: '기분 점수는 학생이 스스로 적는 값으로 채점하지 않는다. 숨을 오래 참게 하지 않고, 어지러우면 멈춘다.',
      }),
      X('activity.relief-map', {
        title: '마음 돌봄 방법 그물', method: '스트레스 해소 방법과 도움 줄 사람 모둠 그물', tool: 'mindmap', minutes: 13,
        levels: { easy: '가지 2개(몸 쓰기·도움 청하기)에 방법 카드를 붙인다.', base: '가지 4개(쉬기·표현하기 더함)에 방법 카드를 붙인다.', challenge: '가지 4개에 넣지 않을 카드가 섞이고, 둘째 문항에서 도움이 안 되는 방법을 가려낸다.' },
        activity: {
          title: '마음 돌봄 생각 그물', tool: 'mindmap',
          teacher: '"마음이 힘들 때 할 수 있는 일을 네 가지 길로 모아 볼까요?" 모둠이 카드를 하나씩 읽고 가지에 붙이게 한다. "상담은 큰 문제가 있을 때만 받아요"라는 학생에게 "작은 고민일 때 이야기하면 더 빨리 가벼워질 수 있어요. 상담 선생님과 1388은 작은 고민도 들어 줘요"라고 말해 준다. 1388은 청소년 상담 번호라는 점을 짚는다.',
          task: '가운데 \'마음 돌봄\'에서 가지마다 방법 카드를 붙이고, 도움이 안 되는 방법은 걸러 내요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTN('마음 돌봄 방법 카드를 가지에 붙여요.', { topic: '마음 돌봄', slots: ['몸 쓰기', '도움 청하기', '쉬기', '표현하기'], easySlots: ['몸 쓰기', '도움 청하기'],
              groups: { '몸 쓰기': ['줄넘기·산책', '어깨 쭉 펴기'], '도움 청하기': ['보호자께 말하기', '상담 선생님 찾기', '1388에 전화·문자'], 쉬기: ['좋아하는 음악 듣기', '일찍 잠자리'], 표현하기: ['일기에 쓰기', '그림으로 그리기'] },
              traps: ['혼자 꾹 참기'] }, 0.25),
            SORT('마음 돌봄 방법을 도움 되는 방법과 도움 안 되는 방법으로 나누어요.', { topic: '어떤 방법일까', slots: ['도움 되는 방법', '도움 안 되는 방법'], groups: { '도움 되는 방법': ['믿는 사람에게 말하기', '숨 천천히 쉬기', '바깥에서 걷기'], '도움 안 되는 방법': ['밤새 게임으로 잊기', '아무에게도 말 안 하기', '물건에 화풀이'] }, extra: { '도움 되는 방법': ['1388에 문자 상담'], '도움 안 되는 방법': ['잠 줄여 바쁘게'] } }, 0.25,
              { conclude: '몸 쓰기·쉬기·표현하기·도움 청하기로 마음을 돌봐요. 상담은 작은 고민도 괜찮아요.' }),
            { prompt: '도움 안 되는 방법 하나를 도움 되는 방법으로 바꿔 모둠에서 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '마음이 힘들 때 내가 이야기할 수 있는 사람이나 곳을 하나 써요.' }] },
        notes: '1388 은 청소년 상담 전화다(문자·사이버 상담도 있다). 학생 고민을 발표하게 하지 않는다.',
      }),
      X('wrap.care-plan', {
        title: '나의 마음 돌봄 계획', method: '나의 마음 돌봄 실천 계획 고르기', tool: 'kitchen', minutes: 7,
        levels: { easy: '마음 돌봄 실천 2칸을 골라 표시한다(함정 섞임).', base: '마음 돌봄 실천 3칸을 골라 표시한다.', challenge: '실천 5칸을 골라 표시하고, 이번 주에 할 세 가지와 언제 할지를 쓴다.' },
        wrap: {
          teacher: '"오늘 배운 마음 돌봄 가운데 이번 주에 해 볼 것은 무엇인가요?" 점검표에서 마음을 돌보는 실천만 골라 표시하게 한다. \'밤새 게임으로 잊기\'를 고른 학생에게 "잠깐 잊을 수는 있어도 다음 날 몸과 마음은 어떨까요?"라고 되묻는다. 이번 주에 할 세 가지와 언제 할지는 짧은 글로 쓰게 한다.',
          exitTicket: [
            EX('kitchen', CHK('마음을 돌보는 실천만 골라 표시해요.', '나의 마음 돌봄 계획', ['자기 전 화면 끄기', '숨 천천히 4번', '바깥에서 몸 움직이기', '하루 한 번 쉬기', '힘들면 어른께 말하기'], ['밤새 게임으로 잊기', '혼자 꾹 참기'], { easy: 2, base: 3 }, 0.15)),
            { type: 'short', prompt: '이번 주에 할 마음 돌봄 세 가지와 언제 할지 써요.' },
            { type: 'choice', prompt: '1388은 어떤 전화인가요?', options: ['청소년 상담 전화', '날씨 안내 전화', '물건 주문 전화'], answer: 0, difficulty: 0.15, explain: '1388은 청소년 상담 전화예요. 작은 고민도 이야기할 수 있어요.' },
          ],
        },
        worksheet: {
          title: '나의 마음 돌봄 계획',
          items: [
            { type: 'table', prompt: '이번 주 마음 돌봄 계획을 써요.', columns: ['무엇을', '언제', '어디서'], cells: [['', '', ''], ['', '', '']] },
            { type: 'short', prompt: '마음이 힘들 때 이야기할 사람을 한 명 써요(이름 대신 \'보호자\'처럼 써도 돼요).' },
          ],
          easy: { note: '숨쉬기·쉬기·말하기 가운데 하나를 골라요.', items: [{ type: 'draw', prompt: '마음을 돌보는 내 모습을 그려요.' }] },
        },
      }),
      X('wrap.cheer-self', {
        title: '나에게 보내는 응원 문장', method: '나에게 보내는 응원 문장 고르기', tool: 'wordcards', minutes: 7,
        levels: { easy: '카드 3장 가운데 응원 문장 1장을 고른다.', base: '카드 5장 가운데 응원 문장 3장을 고른다.', challenge: '헷갈리는 카드까지 섞인 판에서 응원 문장 3장을 고르고, 하나를 내 말로 바꿔 쓴다.' },
        wrap: {
          teacher: '"친구에게 해 주는 다정한 말을 나에게도 해 줄 수 있어요." 응원 문장을 고른 뒤 마음속으로 한 번 읽게 한다. \'참아야 강한 거야\'를 고른 학생에게 "힘들 때 쉬고 도움을 청하는 것도 강한 거예요"라고 말해 준다. 고른 문장을 내 말로 바꿔 쓰게 하고 발표는 원하는 학생만 한다.',
          exitTicket: [
            EX('wordcards', PICK('나에게 보낼 응원 문장만 골라요.', '나에게 보내는 말', ['오늘도 애썼어', '힘들면 쉬어도 돼', '도움 청하는 건 용기야'], ['이것도 못 하다니', '참아야 강한 거야'], { easy: 1, easyTraps: 2, extraTraps: ['남보다 잘해야 해'] }, 0.15)),
            { type: 'short', prompt: '고른 응원 문장 하나를 내 말로 바꿔 써요.' },
            { type: 'choice', prompt: '"스트레스는 참으면 저절로 없어진다"는 생각에 알맞은 답은?', options: ['맞다, 참으면 된다', '알아차리고 돌봐야 한다', '스트레스는 없다'], answer: 1, difficulty: 0.15, explain: '신호를 알아차리고 쉬거나 도움을 청해야 가벼워져요.' },
          ],
        },
        worksheet: {
          title: '나에게 보내는 응원',
          items: [
            { type: 'short', prompt: '나에게 보내는 응원 문장을 한 줄로 써요.' },
            { type: 'choice', prompt: '마음이 힘들 때 알맞은 생각은?', options: ['혼자 참아야 씩씩하다', '쉬고 도움을 청해도 된다', '아무도 몰라야 한다'], answer: '쉬고 도움을 청해도 된다' },
          ],
        },
      }),
    );
  }

  // ======== 6학년 · 언어폭력과 집단따돌림의 원인과 결과 (별표 2 '학교폭력의 종류를 알고, 종류별 예방법 알기' + 표준안 언어·집단따돌림) ========
  {
    const X = mk('words-exclusion', 6);
    const WORDS = [['고마워', 14], ['같이 하자', 9], ['괜찮아', 11], ['잘했어', 6]];
    const CASE = [{ id: 'nick', text: '별명 "느림보"로 부름', motif: 'leaf' }, { id: 'laugh', text: '다들 따라 부르며 웃음', motif: 'star' }, { id: 'rumor', text: '"쟤 이상하대" 소문', motif: 'wind' }, { id: 'out', text: '모둠에서 빼 버림', motif: 'cloud' }];
    M.push(
      X('intro.case-story', {
        title: '별명에서 따돌림까지 가상 사례', method: '별명에서 따돌림까지 번진 가상 사례 읽기', tool: 'story', minutes: 6,
        levels: { easy: '교사가 네 컷을 읽어 주고 처음 시작된 장면 하나를 고르게 한다.', base: '시작 장면과, 말이 행동으로 바뀐 전환 장면을 고른다.', challenge: '두 장면을 고른 뒤, 멈출 수 있었던 장면과 그 까닭을 말한다.' },
        intro: {
          teacher: '"지어낸 친구 결의 이야기 네 컷이에요. 모든 일은 어디서 시작됐을까요?" 시연 단추로 \'별명\' 장면이 먼저, 이어 \'소문\' 장면이 바구니에 담기는 모습을 보인다. "별명은 그냥 말이라 괜찮아요"라는 말에는 "그 말이 넷째 컷까지 이어졌어요. 말은 마음도, 관계도 다치게 할 수 있어요"라고 되묻는다. 오늘은 말이 따돌림으로 커지는 원인과 결과를 따진다고 밝힌다.',
          student: '네 컷 가운데 한 사람이라도 멈췄다면 달라졌을 장면을 하나 골라 짝에게 말해 보아요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '처음·바뀐 장면', title: '결의 이야기(지어낸 사례)', cards: CASE, shuffle: false }, sequence: [{ pick: ['nick'] }, { pick: ['nick', 'rumor'] }] },
          art: art('four small paper comic panels in a row, words turning into paper clouds that grow bigger until one paper child stands alone', '말 한마디가 어디까지 갈까?', 'wind', 'sky'),
        },
        notes: '사례 속 별명은 지어낸 것이다. 반 학생의 실제 별명을 예로 들지 않는다.',
      }),
      X('intro.power-words-chart', {
        title: '힘이 나는 말 그래프', method: '힘이 나는 말 막대그래프 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '가장 많은 말 하나를 고른다.', base: '네 말을 많은 차례로 말한다.', challenge: '가장 적은 말을 늘릴 방법을 말한다.' },
        intro: {
          teacher: '"어느 6학년 반에 \'들으면 힘이 나는 말\'을 물었다고 꾸민 가상 설문이에요. 가장 많은 말은 무엇일까요?" 시연 단추로 \'고마워\'를 고르는 모습을 보인다. "말은 그냥 말일 뿐이에요"라는 말에는 "말 한마디가 힘이 되기도, 상처가 되기도 해요"라고 말해 준다. 가장 적은 \'잘했어\'를 우리 반에서 늘릴 방법을 묻는다.',
          student: '그래프의 네 말 가운데 오늘 친구에게 건네고 싶은 말을 하나 골라 짝에게 말해 보아요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '들으면 힘이 나는 말(가상 설문)', unit: '명', xLabel: '말', yLabel: '학생 수', data: WORDS, question: '가장 많은 말은?', choices: WORDS.map((x) => x[0]) }, sequence: [{ pick: 0 }] },
          art: art('paper speech bubbles of different heights like a bar chart, each holding a warm word', '힘이 나는 말', 'sun', 'buttercup'),
        },
        notes: '그래프 수치는 수업용 가상 자료다.',
      }),
      X('activity.escalation-steps', {
        title: '따돌림이 커진 단계 놓기', method: '따돌림이 커진 단계 차례 놓기', tool: 'timeline', minutes: 14,
        levels: { easy: '단계 카드 3장(별명·소문·혼자 남음)을 차례대로 놓는다.', base: '단계 카드 5장을 놓고, 단계마다 바꿀 수 있는 행동을 잇는다.', challenge: '같은 순서를 마치고 둘째 문항에 섞인 함정 카드를 남긴 뒤, 내가 바꿀 단계를 모둠에서 말한다.' },
        activity: {
          title: '말이 따돌림으로 커진 차례', tool: 'timeline',
          teacher: '"결의 이야기에서 일이 점점 커진 차례를 놓아 볼까요?" 카드를 놓을 때마다 그 단계에서 누가 무엇을 했는지 말하게 한다. "결이 느리니까 그럴 만했어요"라는 말이 나오면 "느린 것은 잘못일까요? 따돌림은 받는 쪽의 잘못이 아니에요. 단계마다 멈출 수 있었던 사람이 있었어요"라고 분명히 말한다.',
          task: '따돌림이 커진 단계를 차례대로 놓고, 단계마다 바꿀 수 있는 행동을 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDER('결의 이야기에서 일이 커진 단계를 차례대로 놓아요.', ['별명 부르기', '따라 웃기', '소문 퍼뜨리기', '단체방에서 빼기', '혼자 남음'], { easy: [0, 2, 4], motifs: ['leaf', 'star', 'wind', 'cloud', 'rain'] }, 0.2),
            MATCH('단계마다 다른 결과로 바꿀 수 있는 행동을 이어요.', [['별명을 부를 때', '"이름으로 부르자"'], ['다들 웃을 때', '웃지 않고 멈추기'], ['소문을 들었을 때', '옮기지 않기'], ['단체방에서 뺄 때', '"같이 있자" 다시 초대']], { easy: 2, traps: ['나도 소문 보태기'] }, 0.25,
              { conclude: '말은 따돌림으로 커질 수 있어요. 단계마다 한 사람이 멈추면 결과가 달라져요.' }),
            { prompt: '다섯 단계 가운데 내가 가장 먼저 멈출 수 있는 단계를 골라 모둠에서 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '소문을 들었을 때 내가 할 수 있는 행동을 써요.' }] },
      }),
      X('activity.cause-effect', {
        title: '따돌림의 원인과 결과 나누기', method: '원인과 결과 나누기', tool: 'mindmap', minutes: 13,
        levels: { easy: '카드 4장을 원인·결과 가지에 나눈다.', base: '카드 6장을 나누고, 둘째 문항에서 원인과 결과 두 쌍을 잇는다.', challenge: '카드 8장을 나누고 원인·결과 세 쌍을 이은 뒤, 결과가 다시 원인이 되는 고리를 모둠에서 찾는다(셋째 문항).' },
        activity: {
          title: '원인과 결과 생각 그물', tool: 'mindmap',
          teacher: '"오해, 소문 퍼 나르기는 원인일까요, 결과일까요?" 카드를 놓을 때마다 \'~때문에 ~해졌다\'로 이어 말하게 한다. "따돌림 받는 친구에게 이유가 있어요"라는 말에는 "이유를 찾는다면 따돌린 쪽의 행동에서 찾아야 해요"라고 말해 준다. 외로움 때문에 더 말이 없어지고 그것이 다시 오해를 부르는 고리가 있다는 점도 짚는다.',
          task: '카드를 원인과 결과 가지에 나누고, 원인과 결과를 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORT('따돌림 사례 카드를 원인과 결과 가지에 나누어요.', { topic: '집단따돌림', slots: ['원인', '결과'], groups: { 원인: ['오해', '소문 퍼 나르기', '무리 압력'], 결과: ['외로움', '학교 가기 싫음', '관계가 끊김'] }, extra: { 원인: ['재미로 붙인 별명'], 결과: ['자신감이 줄어듦'] } }, 0.2),
            MATCH('원인 옆에 이어지는 결과 카드를 놓아요.', [['소문 퍼 나르기', '모두가 오해함'], ['무리 압력', '아무도 말리지 않음'], ['재미로 붙인 별명', '자신감이 줄어듦']], { mode: 'match', topic: '원인 → 결과', easy: 2, traps: ['더 친해짐'] }, 0.25,
              { conclude: '따돌림의 원인은 따돌리는 쪽의 말과 행동에 있어요. 결과는 받는 친구의 마음과 관계를 다치게 해요.' }),
            { prompt: '\'외로움\'이 다시 다른 원인이 되는 고리를 모둠에서 찾아 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '따돌림은 받는 친구의 ___ 이 아니에요.', answer: '잘못' }] },
      }),
      X('activity.group-choice', {
        title: '모둠에서 한 친구를 빼자고 해요', method: '모둠에서 한 친구를 빼자고 할 때 갈림길', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번(빼자는 말에 어떻게 할지)에서 고르고 근거 한 장을 고른다.', base: '갈림 2번(나에게도 "너도 빠져"라고 할 때)을 지나 근거를 고른다.', challenge: '갈림 3번(내가 모둠장이 된 조건)까지 지나 근거를 모두 고르고 다른 길과 견준다.' },
        activity: {
          title: '갈림길: 모둠에서 빼자고 해요', tool: 'dilemma',
          teacher: '"다들 빼자고 할 때 나 하나쯤 따라가도 괜찮을까요?" 고를 때마다 모둠 분위기와 결의 마음이 어떻게 바뀌는지 결과 칸을 읽게 한다. "나도 빠지게 될까 봐 무서워요"라는 마음을 인정하고 "그럴 땐 혼자 버티지 말고 선생님께 역할 정하기를 도와 달라고 해도 돼요"라고 말해 준다. 마지막 갈림에서는 모둠장이 모두에게 역할을 나누는 힘이 있다는 점을 짚는다.',
          task: '갈림길마다 고르고, 모둠 분위기와 친구의 마음이 어떻게 바뀌는지 읽은 뒤 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '모둠 과제 회의',
            steps: [
              { text: '모둠 과제 회의에서 한 친구가 "결은 느리니까 빼고 하자"고 해요.', motif: 'house',
                good: ['with', '"같이 하자, 역할을 나누자"고 말한다', '몇 명이 고개를 끄덕여요.', [['결', '함께라고 느껴요', 1]]],
                bad: ['nod', '말없이 고개를 끄덕인다', '결이 모둠에서 빠지게 돼요.', '말없이 따르면 따돌림에 힘을 보태게 돼요.', [['결', '혼자 남아요', -1]]] },
              { text: '빼자던 친구가 나에게 "그럼 너도 빠져"라고 해요.', motif: 'wind',
                good: ['teacher', '선생님께 모둠 역할 정하기를 도와 달라고 한다', '선생님과 모둠이 역할을 다시 나눠요.', [['결', '자리가 생겨요', 1], ['나', '혼자 버티지 않아요', 1]]],
                bad: ['give', '빠지기 싫어서 결을 뺀다', '나는 남았지만 마음이 무거워요.', '"나 하나쯤"이 모이면 따돌림이 돼요.', [['결', '더 외로워요', -1]]] },
              { text: '다음 과제에서 내가 모둠장이 되었어요. 결에게 어떤 역할을 줄까요?', motif: 'star',
                good: ['ask', '결에게 잘하는 일을 묻고 함께 정한다', '결이 그림을 맡아 모둠 작품이 더 좋아져요.', [['결', '인정받아요', 1], ['모둠', '더 잘해요', 1]]],
                bad: ['none', '아무 역할도 주지 않는다', '결은 할 일이 없어 구경만 해요.', '모둠장은 모두에게 자리를 만들 수 있어요.', [['결', '또 빠져요', -1]]] },
            ],
            ending: '"같이 하자"는 말과 역할 나누기 덕분에 모둠 모두가 함께했어요.',
            reasons: [{ id: 'fault', text: '느린 것은 빼도 되는 까닭이 아니다' }, { id: 'one', text: '한 사람의 "같이 하자"가 분위기를 바꾼다' }, { id: 'all', text: '다들 하니까 나 하나쯤은 괜찮다', why: '"나 하나쯤"이 모여 따돌림이 돼요.' }, { id: 'reason', text: '빠지는 친구에게 이유가 있다', why: '따돌림은 받는 친구의 잘못이 아니에요.' }],
            good: ['fault', 'one'],
            talk: '모둠에서 "누구도 빠지지 않는 역할 나누기 방법"을 하나씩 말해요.',
            conclude: '따돌림은 받는 친구의 잘못이 아니에요. "같이 하자"는 한마디와 역할 나누기가 모둠을 바꿔요.',
          }),
        },
        worksheet: { items: [{ type: 'choice', prompt: '모둠에서 한 친구를 빼자고 할 때 알맞은 말은?', options: ['"그래, 빼자"', '"같이 하자, 역할을 나누자"', '"나는 모르겠어"'], answer: '"같이 하자, 역할을 나누자"' }] },
      }),
      X('activity.class-proposal', {
        title: '학급 언어 약속 제안서', method: '학급 언어 약속 제안서 쓰고 기준표 점검', tool: 'rubric-writing', minutes: 13,
        levels: { easy: '제안서 틀(문제·약속·지키는 방법)의 빈칸을 채우고 기준 2개를 점검한다.', base: '세 칸을 모두 쓰고 기준 3개(구체적·모두 지킬 수 있음·존중)를 점검한다.', challenge: '기준 3개를 점검하고 한 군데를 고쳐 쓴 뒤, 둘째 문항에서 예상 반대 의견과 답을 덧붙인다.' },
        activity: {
          title: '학급 회의에 낼 언어 약속', tool: 'rubric-writing',
          teacher: '"우리 반에 꼭 필요한 말 약속을 학급 회의에 낸다면 무엇을 쓸까요?" 기준표를 함께 읽은 뒤 쓰게 한다. "나쁜 말 금지"처럼 막연한 약속에는 "어떤 말을, 언제, 어떻게 바꾸자는 걸까요?"라고 되묻는다. 친구 이름이나 실제 있었던 일은 쓰지 않고 우리 모두의 약속으로 쓰게 한다.',
          task: '학급 회의에 낼 언어 약속 제안서를 쓰고, 기준표로 스스로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RUB('학급 언어 약속 제안서(문제·약속·지키는 방법)를 써요', { topic: '학급 회의에 낼 언어 약속 제안서를 써요. 문제, 약속, 지키는 방법을 차례로 써요(친구 이름은 쓰지 않아요).', starter: '문제: ___. 약속: ___. 지키는 방법: ___.', crit: ['약속을 구체적인 말로 썼다', '모두 지킬 수 있는 방법이다', '누구도 깎아내리지 않았다'], must: [['약속', '하자']], chars: [40, 220], title: '학급 언어 약속 제안서' }, 0.25),
            RUB('예상되는 반대 의견과 내 답을 써요', { topic: '"별명은 친해서 부르는 건데?" 같은 반대 의견이 나오면 어떻게 답할지 한두 문장으로 써요.', starter: '친해서 부르는 별명이라도 ___ 때문에 ___.', crit: ['반대 의견을 인정했다', '내 답의 까닭을 썼다', '부드러운 말로 썼다'], must: [['때문에', '왜냐하면']], chars: [20, 140], title: '반대 의견에 답하기' }, 0.25,
              { conclude: '좋은 약속은 구체적이고, 모두 지킬 수 있고, 누구도 깎아내리지 않아요.' }),
            { prompt: '모둠에서 서로의 제안서를 읽고 가장 지키기 쉬운 약속 하나를 골라 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '학급 언어 약속 제안서를 써요.', columns: ['문제', '약속', '지키는 방법'], cells: [['', '', '']] }] },
      }),
      X('wrap.speech-check', {
        title: '나의 말 습관 점검', method: '나의 말 습관 자기 점검', tool: 'kitchen', minutes: 7,
        levels: { easy: '좋은 말 습관 3칸을 골라 표시한다(함정 섞임).', base: '좋은 말 습관 4칸을 골라 표시한다.', challenge: '좋은 말 습관 5칸을 골라 표시하고, 고칠 습관 하나와 방법을 한 줄 쓴다.' },
        wrap: {
          teacher: '"오늘 배운 것을 내 말 습관에 비추어 볼까요?" 점검표에서 좋은 말 습관만 골라 표시하게 한다. \'다들 하면 따라 하기\'를 고른 학생에게 "다들 할 때 멈추는 한 사람이 되는 건 어때요?"라고 되묻는다. 고칠 습관은 남에게 보이지 않게 써도 된다고 말해 준다.',
          exitTicket: [
            EX('kitchen', CHK('친구를 아끼는 말 습관만 골라 표시해요.', '나의 말 습관', ['별명 대신 이름 부르기', '소문 옮기지 않기', '혼자인 친구 끼워 주기', '고운 말 쓰기', '장난 말도 상대 마음 보기'], ['다들 하면 따라 하기'], { easy: 3, base: 4 }, 0.15)),
            { type: 'short', prompt: '내가 고칠 말 습관 하나와 고칠 방법을 한 줄로 써요.' },
            { type: 'choice', prompt: '"말은 몸을 다치게 하지 않으니 괜찮다"에 알맞은 생각은?', options: ['맞다, 말은 괜찮다', '말도 마음과 관계를 다치게 한다', '말은 금방 잊힌다'], answer: 1, difficulty: 0.15, explain: '말은 따돌림으로 커질 수 있고, 마음에 오래 남아요.' },
          ],
        },
        worksheet: {
          title: '나의 말 습관',
          items: [
            { type: 'check', prompt: '내가 지키는 말 습관에 표시해요.', options: ['별명 대신 이름 부르기', '소문 옮기지 않기', '혼자인 친구 끼워 주기', '고운 말 쓰기'] },
            { type: 'short', prompt: '이번 주에 친구에게 건넬 힘이 나는 말을 써요.' },
          ],
        },
      }),
      X('wrap.inclusion-map', {
        title: '함께하는 우리 반 그물', method: '우리 반 함께하기 실천 그물', tool: 'mindmap', minutes: 7,
        levels: { easy: '가지 2개(말·행동)에 실천 카드 4장을 붙인다.', base: '가지 3개(온라인 더함)에 실천 카드 6장을 붙인다.', challenge: '가지 3개에 넣지 않을 카드가 섞인 판에서 붙이고, 가지마다 예시 하나를 더 말한다.' },
        wrap: {
          teacher: '"함께하는 우리 반을 만들려면 말·행동·온라인에서 무엇을 할까요?" 실천 카드를 가지에 붙인 뒤 가지마다 한 명씩 예시를 더 말하게 한다. "온라인은 학교 밖이라 상관없어요"라는 말에는 "단체방의 말도 교실까지 이어져요"라고 말해 준다.',
          exitTicket: [
            EX('mindmap', SORTN('함께하기 실천 카드를 가지에 붙여요.', { topic: '함께하는 우리 반', slots: ['말', '행동', '온라인'], easySlots: ['말', '행동'],
              groups: { 말: ['이름으로 부르기', '"같이 하자" 말하기'], 행동: ['혼자인 친구 곁에 앉기', '모둠 역할 나누기'], 온라인: ['단체방에 모두 초대', '놀리는 글 안 올리기'] }, traps: ['소문 단체방 만들기'] }, 0.15)),
            { type: 'short', prompt: '내일 우리 반에서 해 볼 함께하기 실천 하나를 써요.' },
            { type: 'mood', prompt: '함께하는 반을 생각한 지금 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '함께하는 우리 반',
          items: [
            { type: 'table', prompt: '함께하기 실천을 하나씩 써요.', columns: ['말', '행동', '온라인'], cells: [['', '', '']] },
            { type: 'choice', prompt: '따돌림을 멈추는 데 알맞은 행동은?', options: ['소문 옮기기', '혼자인 친구 끼워 주기', '모른 척하기'], answer: '혼자인 친구 끼워 주기' },
          ],
        },
      }),
    );
  }

  // ======== 6학년 · 온라인 그루밍 알아차리기 (별표 2 '성폭력 예방 및 대처방안 알기' — 디지털 성범죄 예방) ========
  {
    const X = mk('grooming', 6);
    M.push(
      X('intro.gift-chat', {
        title: '선물·칭찬으로 다가오는 대화', method: '선물·칭찬으로 다가오는 대화 읽기', tool: 'story', minutes: 6,
        levels: { easy: '교사가 이상한 말 하나(부모님께는 비밀)를 짚어 주고 고르게 한다.', base: '이상한 말 두 개를 스스로 고른다.', challenge: '두 말을 고르고, 상대가 그런 말을 하는 까닭을 추측해 말한다.' },
        intro: {
          teacher: '"지어낸 게임 채팅이에요. 게임에서 만난 사람이 아이템을 선물하고 칭찬을 많이 해요. 어떤 말이 이상할까요?" 시연 단추로 \'부모님께는 비밀이야\'와 \'너만 나를 이해해\'가 바구니에 담기는 모습을 보인다. "잘해 주는 사람은 좋은 사람이에요"라는 말에는 "잘해 주면서 비밀을 만들자고 하면, 왜 어른이 몰라야 할까요?"라고 되묻는다. 오늘은 온라인에서 이런 신호를 알아차리고 대처하는 법을 배운다고 밝힌다.',
          student: '채팅 속 말 가운데 가장 마음에 걸리는 말 하나를 골라 왜 그런지 짝에게 말해 보아요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '이상한 말', title: '게임 채팅(지어낸 대화)', cards: [{ id: 'gift', text: '"아이템 선물 줄게"', motif: 'star' }, { id: 'secret', text: '"부모님께는 비밀이야"', motif: 'moon' }, { id: 'play', text: '"오늘 몇 판 했어?"', motif: 'sun' }, { id: 'only', text: '"너만 나를 이해해"', motif: 'cloud' }], shuffle: false }, sequence: [{ pick: ['secret'] }, { pick: ['secret', 'only'] }] },
          art: art('a paper game screen with a chat window, a paper gift box icon and a small paper lock symbol beside one message', '이 말, 이상하지 않나요?', 'moon', 'sky'),
        },
        notes: '대화는 지어낸 것이다. 학생에게 이런 대화를 받은 적이 있는지 묻지 않는다. 걱정되는 일이 있으면 수업 뒤 따로 말해도 된다고만 알린다.',
      }),
      X('intro.alarm-words', {
        title: '경보가 울리는 말 고르기', method: '경보가 울리는 말 카드 고르기', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 카드 4장 가운데 경보 말 2장을 함께 고른다.', base: '카드 6장 가운데 경보 말을 모두 고른다.', challenge: '평범한 말(오늘 뭐 했어?)도 경보가 되는 조건(비밀·모르는 사람·자주 묻기)을 말한다.' },
        intro: {
          teacher: '"이 말을 들으면 마음속 경보가 울려야 해요. 어떤 말일까요?" 시연 단추로 \'우리만의 비밀이야\'·\'사진 한 장 보내 줘\'·\'너만 나를 이해해\'·\'어디 사는지 알려 줘\'가 바구니에 담기는 모습을 보인다. "\'오늘 뭐 했어?\'는 괜찮아요"라는 말에는 "친구라면 괜찮아요. 그런데 잘 모르는 사람이 매일 묻고 비밀로 하자고 하면 어떨까요?"라고 되묻는다.',
          student: '경보 말 카드 가운데 하나를 골라, 그 말을 들으면 무엇을 할지 짝에게 말해 보아요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '경보 말', cards: ['우리만의 비밀이야', '숙제 다 했어?', '사진 한 장 보내 줘', '너만 나를 이해해', '오늘 뭐 했어?', '어디 사는지 알려 줘'] }, sequence: [{ pick: ['우리만의 비밀이야', '사진 한 장 보내 줘'] }, { pick: ['우리만의 비밀이야', '사진 한 장 보내 줘', '너만 나를 이해해', '어디 사는지 알려 줘'] }] },
          art: art('a paper alarm bell ringing above a paper chat bubble, small paper sparks around it', '마음속 경보가 울려요', 'star', 'peach'),
        },
      }),
      X('activity.grooming-steps', {
        title: '그루밍 단계 차례 놓기', method: '그루밍 단계 차례 놓기', tool: 'timeline', minutes: 14,
        levels: { easy: '단계 카드 3장(친해지기·비밀 만들기·요구하기)을 차례대로 놓는다.', base: '단계 카드 4장을 놓고, 단계마다 보이는 말 카드를 잇는다.', challenge: '같은 문항에 함정 카드가 섞이고, 셋째 문항에서 단계마다 빠져나올 행동을 잇는다.' },
        activity: {
          title: '그루밍 단계와 빠져나올 길', tool: 'timeline',
          teacher: '"그루밍은 처음부터 무서운 말로 시작하지 않아요. 어떤 차례로 다가올까요?" 단계 카드를 놓은 뒤 단계마다 말 카드를 잇게 한다. "나이를 비슷하게 말하면 또래예요"라는 학생에게 "온라인에서는 나이와 사진을 속일 수 있어요"라고 말해 준다. 어느 단계에서든 빠져나와 알릴 수 있고, 그것은 늦지 않다는 점을 짚는다.',
          task: '그루밍 단계를 차례대로 놓고, 단계마다 보이는 말과 빠져나올 행동을 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDER('온라인 그루밍이 다가오는 단계를 차례대로 놓아요.', ['친해지기', '비밀 만들기', '멀어지게 하기', '요구하기'], { easy: [0, 1, 3], motifs: ['star', 'moon', 'wind', 'cloud'] }, 0.2),
            MATCH('단계마다 보이는 말 카드를 이어요.', [['친해지기', '"선물 줄게, 넌 특별해"'], ['비밀 만들기', '"부모님께는 말하지 마"'], ['멀어지게 하기', '"네 친구들은 널 몰라"'], ['요구하기', '"사진 보내 줘"']], { easy: 2, traps: ['"숙제 다 했어?"'] }, 0.25),
            MATCH('단계마다 빠져나올 수 있는 행동을 이어요.', [['친해지기', '내 정보 말하지 않기'], ['비밀 만들기', '비밀이라도 보호자께 말하기'], ['멀어지게 하기', '친구·가족과 이야기하기'], ['요구하기', '대화 멈추고 알리기']], { easy: 2, traps: ['선물 받았으니 들어주기'] }, 0.3,
              { conclude: '그루밍은 친해지기→비밀→멀어지게 하기→요구하기로 다가와요. 어느 단계에서든 멈추고 알릴 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '"우리만의 ___ 이야"라는 말을 들으면 보호자께 알려요.', answer: '비밀' }] },
      }),
      X('activity.response-order', {
        title: '그루밍 대처 순서', method: '그루밍 대처 순서 세우기', tool: 'kitchen', minutes: 13,
        levels: { easy: '대처 카드 3장(대화 멈추기·저장·알리기)을 차례대로 놓는다.', base: '대처 카드 4장(112 신고·차단 더함)을 놓는다.', challenge: '카드 4장 사이에 섞인 함정 카드(혼자 지우고 숨기기)를 빼고 놓은 뒤, 그 함정의 결과를 모둠에서 말한다.' },
        activity: {
          title: '그루밍 대처 차례 놓기', tool: 'kitchen',
          teacher: '"이상한 요구를 받으면 무엇부터 할까요?" 카드를 놓은 뒤 반 전체가 차례를 소리 내어 읽게 한다. "혼날까 봐 지우고 싶어요"라는 마음을 먼저 인정하고 "알려 준 사람은 혼나지 않아요. 대화가 남아 있어야 어른과 경찰이 도울 수 있어요"라고 말해 준다. 112는 경찰에 알리는 번호라는 점을 짚는다.',
          task: '이상한 요구를 받았을 때 할 일 카드를 차례대로 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDER('게임 채팅에서 이상한 요구를 받았을 때 할 일을 차례대로 놓아요.', ['대화 멈추기', '대화 화면 저장', '보호자·선생님께 알리기', '112 신고·차단'], { mode: 'order', trap: '혼자 지우고 숨기기' }, 0.2),
            ORDER('"사진 안 보내면 다 말할 거야"라는 메시지가 왔을 때 할 일을 차례대로 놓아요.', ['답장하지 않기', '메시지 캡처하기', '보호자께 보여 주기', '함께 112에 신고'], { mode: 'order', easy: [0, 2, 3], trap: '시키는 대로 보내기' }, 0.25,
              { conclude: '멈추고, 저장하고, 알리고, 112에 신고해요. 알린 사람은 잘한 거예요.' }),
            { prompt: '\'혼자 지우고 숨기기\'를 하면 어떤 일이 생길지 모둠에서 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '이상한 요구가 담긴 대화는 어떻게 하나요?', options: ['바로 지운다', '저장해 두고 어른께 보여 준다', '친구들에게 퍼뜨린다'], answer: '저장해 두고 어른께 보여 준다' }] },
        notes: '112 는 경찰 신고 번호다. 학생이 직접 걸어 보게 하지 않는다.',
      }),
      X('activity.item-choice', {
        title: '선물 받은 뒤 사진 요구', method: '선물 받은 뒤 사진 요구 갈림길', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번(사진 요구에 어떻게 할지)에서 고르고 근거 한 장을 고른다.', base: '갈림 2번("선물 돌려줘, 비밀이야" 압박)을 지나 근거를 고른다.', challenge: '갈림 3번(이미 몇 번 답장한 뒤에도 알릴지)까지 지나 근거를 모두 고르고 다른 길과 견준다.' },
        activity: {
          title: '갈림길: 선물 뒤의 요구', tool: 'dilemma',
          teacher: '"선물을 받았으면 부탁을 들어줘야 할까요?" 고를 때마다 결과 칸을 읽게 한다. "이미 답장했으면 내 잘못이에요"라는 말이 나오면 "답장을 했어도, 선물을 받았어도 잘못은 요구한 사람에게 있어요. 언제 알려도 늦지 않아요"라고 분명히 말한다. 이야기 속 인물은 지어낸 사람이라는 점을 밝히고, 장면을 자세히 꾸며 말하지 않는다.',
          task: '갈림길마다 고르고, 결과를 읽은 뒤 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '선물 뒤의 요구',
            steps: [
              { text: '게임에서 친해진 "형"이 비싼 아이템을 선물하더니 "네 사진 한 장만 보내 줘"라고 해요.', motif: 'star',
                good: ['stop', '보내지 않고 대화를 멈춘다', '요구가 더 이어지지 않아요.', [['나', '나를 지켜요', 1]]],
                bad: ['send', '선물을 받았으니 보낸다', '"더 보내 줘"라는 요구가 이어져요.', '선물을 받았어도 요구를 들어줄 까닭은 없어요.', [['나', '요구가 커져요', -1]]] },
              { text: '"안 보내면 선물 돌려줘. 부모님께는 비밀이야"라는 메시지가 와요.', motif: 'moon',
                good: ['tell', '대화를 저장하고 보호자께 보여 준다', '보호자가 함께 차단하고 신고해요.', [['나', '혼자가 아니에요', 1]]],
                bad: ['hide', '혼날까 봐 혼자 지우고 숨긴다', '메시지가 계속 와서 혼자 무서워요.', '알려도 혼나지 않아요. 어른이 함께 막아 줘요.', [['나', '혼자 무서워요', -1]]] },
              { text: '사실은 그 전에 몇 번 답장을 했어요. 이제라도 말해도 될까요?', motif: 'cloud',
                good: ['still', '그래도 보호자께 알리고 112에 신고한다', '어른과 경찰이 함께 도와요.', [['나', '보호받아요', 1]]],
                bad: ['shame', '내 잘못 같아 말하지 않는다', '혼자 고민이 깊어져요.', '답장했어도 잘못은 요구한 사람에게 있어요.', [['나', '혼자 힘들어요', -1]]] },
            ],
            ending: '멈추고 알린 덕분에 어른들이 함께 막았어요. 잘못은 요구한 사람에게 있어요.',
            reasons: [{ id: 'gift', text: '선물을 받았다고 요구를 들어줄 필요는 없다' }, { id: 'notyou', text: '잘못은 요구한 사람에게 있고, 알리면 도움을 받는다' }, { id: 'peer', text: '나이가 비슷하다고 했으니 또래다', why: '온라인에서는 나이와 사진을 속일 수 있어요.' }, { id: 'late', text: '이미 답장했으면 말하면 안 된다', why: '언제 알려도 늦지 않아요.' }],
            good: ['gift', 'notyou'],
            talk: '모둠에서 "망설이는 친구에게 알리라고 어떻게 말해 줄까?"를 한 문장씩 말해요.',
            conclude: '요구를 받으면 멈추고, 저장하고, 보호자께 알리고 112에 신고해요. 잘못은 요구한 사람에게 있어요.',
          }),
        },
        worksheet: { items: [{ type: 'choice', prompt: '온라인에서 선물을 받은 뒤 사진을 보내라고 하면?', options: ['선물을 받았으니 보낸다', '보내지 않고 보호자께 알린다', '비밀로 한다'], answer: '보내지 않고 보호자께 알린다' }] },
        notes: '장면은 지어낸 것이다. 사진의 내용이나 요구를 자세히 묘사하지 않는다. 수업 뒤 걱정을 말하는 학생이 있으면 학교의 절차(담임·상담 교사·보호자 연락)를 따른다.',
      }),
      X('activity.safety-guide', {
        title: '동생에게 줄 온라인 안전 안내문', method: '동생에게 줄 온라인 안전 안내문 쓰기', tool: 'rubric-writing', minutes: 13,
        levels: { easy: '안내문 틀(경보 말·할 일·알릴 사람)의 빈칸을 채우고 기준 2개를 점검한다.', base: '세 칸을 모두 쓰고 기준 3개(쉬운 말·바른 차례·알릴 곳)를 점검한다.', challenge: '기준 3개를 점검하고 한 군데 고쳐 쓴 뒤, 둘째 문항에서 안내문에 넣을 그림을 한 줄로 설명한다.' },
        activity: {
          title: '저학년 동생을 위한 안내문', tool: 'rubric-writing',
          teacher: '"2학년 동생이 읽는다면 어떤 말이 쉬울까요?" 기준표를 함께 읽고 쓰게 한다. \'그루밍\' 같은 어려운 말만 쓴 학생에게 "동생이 그 낱말을 알까요? \'비밀로 하자는 말\'처럼 바꿔 볼까요?"라고 말해 준다. 할 일은 멈추기→저장→알리기 차례로, 알릴 곳은 보호자·선생님·112를 넣게 한다.',
          task: '저학년 동생에게 줄 온라인 안전 안내문을 쓰고, 기준표로 스스로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RUB('동생에게 줄 온라인 안전 안내문을 써요', { topic: '저학년 동생에게 줄 온라인 안전 안내문을 써요. 경보 말, 할 일, 알릴 사람을 차례로 써요.', starter: '이런 말은 위험해: ___. 그러면 ___. 꼭 ___ 에게 말해.', crit: ['동생이 알아들을 쉬운 말로 썼다', '할 일을 바른 차례로 썼다', '알릴 사람과 112를 넣었다'], must: [['112']], chars: [40, 220], title: '동생을 위한 온라인 안전 안내문' }, 0.25),
            RUB('안내문에 넣을 그림을 한 줄로 설명해요', { topic: '안내문에 넣을 그림을 한 줄로 설명해요. 예: 채팅 화면 옆에 경보 종이 울리는 그림.', starter: '___ 옆에 ___ 하는 그림', crit: ['무엇을 그릴지 썼다', '안내문 내용과 이어진다', '무섭지 않은 그림이다'], must: [['그림']], chars: [10, 80], title: '안내문 그림 설명' }, 0.2,
              { conclude: '좋은 안내문은 쉬운 말로, 할 일을 차례대로, 알릴 곳까지 알려 줘요.' }),
            { prompt: '모둠에서 안내문을 바꿔 읽고 동생이 헷갈릴 낱말 하나를 찾아 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '동생에게 줄 안내문을 정리해요.', columns: ['위험한 말', '할 일', '알릴 사람'], cells: [['', '', '']] }] },
      }),
      X('wrap.not-your-fault', {
        title: '알린 친구의 마음', method: '도움 청하는 것은 잘못이 아님 — 마음 고르기', tool: 'emotion', minutes: 7,
        levels: { easy: '보호자에게 알린 장면 1개에 마음 카드를 짝 짓는다.', base: '장면 2개에 마음 카드를 짝 짓는다.', challenge: '장면 3개에 짝 지은 뒤, 망설이는 친구에게 해 줄 말을 고른다.' },
        wrap: {
          teacher: '"보호자에게 말한 그림 속 친구가 \'네 잘못이 아니야\'라는 말을 들었어요. 마음이 어떻게 바뀌었을까요?" 장면마다 마음 카드를 짝 짓게 한다. \'부끄러움\'을 고른 학생에게 "부끄러워할 사람은 요구한 사람이에요. 말한 친구는 용기를 낸 거예요"라고 말해 준다.',
          exitTicket: [
            FEEL('알린 뒤의 장면과 그때의 마음을 이어요.', [['보호자가 "네 잘못이 아니야"', '안심'], ['선생님이 "말해 줘서 고마워"', '고마움'], ['함께 신고하고 차단함', '편안함']], ['안심', '고마움', '편안함', '부끄러움']),
            { type: 'choice', prompt: '알릴까 망설이는 친구에게 해 줄 알맞은 말은?', options: ['"네가 답장해서 그래"', '"네 잘못이 아니야, 같이 말하자"', '"모른 척하면 끝나"'], answer: 1, difficulty: 0.15, explain: '잘못은 요구한 사람에게 있어요. 함께 알리자고 말해 줘요.' },
            { type: 'short', prompt: '이상한 요구를 받으면 내가 알릴 사람을 써요(이름 대신 \'보호자\'처럼 써도 돼요).' },
          ],
        },
        worksheet: {
          title: '말한 사람은 잘한 거예요',
          items: [
            { type: 'short', prompt: '알린 친구에게 해 줄 말을 한 문장으로 써요.' },
            { type: 'choice', prompt: '온라인에서 이상한 요구를 받았을 때 경찰에 신고하는 번호는?', options: ['112', '1388'], answer: '112' },
          ],
          easy: { note: '"네 잘못이 아니야"를 꼭 넣어요.', items: [{ type: 'draw', prompt: '보호자에게 이야기하는 장면을 그려요.' }] },
        },
      }),
      X('wrap.online-check', {
        title: '온라인 안전 스스로 점검', method: '온라인 안전 스스로 점검', tool: 'timer', minutes: 7,
        levels: { easy: '점검 칸 2개를 표시한다.', base: '점검 칸 3개(비밀 만들지 않기·사진 보내지 않기·경보 말이면 알리기)를 표시한다.', challenge: '점검 칸 4개를 표시하고, 보호자와 정할 약속 하나를 쓴다.' },
        wrap: {
          teacher: '"오늘 배운 것 가운데 내가 지킬 수 있는 것은 무엇인가요?" 점검 칸을 스스로 읽고 표시하게 한다. 출구 둘째 질문에서 \'나이가 같다고 하면 믿는다\'를 고른 학생에게 "온라인에서는 나이와 사진을 속일 수 있어요"라고 말해 준다. 보호자와 정할 약속은 집에서 함께 이야기해 보자고 권한다.',
          exitTicket: [
            SELF('온라인 안전 점검', ['모르는 사람과 비밀 만들지 않기', '사진·내 정보 보내지 않기', '경보 말이 오면 알리기', '보호자와 온라인 약속 정하기']),
            { type: 'choice', prompt: '게임에서 만난 사람이 "나도 6학년이야"라고 해요. 알맞은 생각은?', options: ['또래니까 믿어도 된다', '온라인에서는 나이를 속일 수 있다', '사진을 보내 확인한다'], answer: 1, difficulty: 0.2, explain: '온라인에서는 나이와 사진을 속일 수 있어요.' },
            { type: 'short', prompt: '보호자와 함께 정할 온라인 약속 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '온라인에서 나를 지켜요',
          items: [
            { type: 'check', prompt: '내가 지킬 수 있는 것에 표시해요.', options: ['비밀 만들자는 말은 알리기', '사진·내 정보 보내지 않기', '이상하면 대화 멈추기', '보호자·선생님께 알리기'] },
            { type: 'short', prompt: '보호자와 정한 온라인 약속을 써요.' },
          ],
        },
      }),
    );
  }

  // ======== 6학년 · 친구에게 보이는 학대 신호와 도움 잇기 (별표 2 '아동학대의 유형 및 대처방안 알기'·'가족폭력의 개념과 대처방안 알기') ========
  {
    const X = mk('abuse-signs', 6);
    const TYPES = [{ en: '신체학대', ko: '어린이를 때리거나 다치게 하는 일' }, { en: '정서학대', ko: '무서운 말·무시로 마음을 다치게 하는 일' }, { en: '성학대', ko: '어린이 몸을 함부로 만지거나 부끄러운 것을 보게 하는 일' }, { en: '방임', ko: '밥·씻기·병원 같은 돌봄을 하지 않는 일' }];
    const P = (name, icon, at) => ({ name, icon, at });
    const TOWN = [P('학교 상담실', 'school', [1, 1]), P('지구대(112)', 'police', [4, 0]), P('청소년상담복지센터(1388)', 'office', [4, 3]), P('주민센터', 'office', [0, 3]), P('민의 집', 'house', [2, 2]), P('공원', 'park', [5, 2])];
    const HELP = (prompt, target, d, more) => Object.assign({
      prompt, toolOptions: { grid: [6, 4], title: '우리 동네 도움 지도(가상)', places: TOWN }, target: { place: target }, difficulty: d,
      levels: { easy: { prompt: `${cut(prompt)}(장소 두 곳).`, toolOptions: { places: [TOWN.find((p) => p.name === target), TOWN[4]], readout: true } } },
    }, more);
    M.push(
      X('intro.four-types', {
        title: '아동학대 네 유형 알기', method: '아동학대 네 유형 이름과 설명 짝 짓기', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 두 유형(신체학대·방임)을 설명과 짝 지어 보인다.', base: '네 유형을 쉬운 설명과 짝 짓는다.', challenge: '네 유형을 짝 지은 뒤, 집에서 어른끼리 폭력을 쓰는 것을 보게 하는 것도 어린이에게 해가 된다는 설명을 잇는다.' },
        intro: {
          teacher: '"어린이는 누구나 안전하게 돌봄받을 권리가 있어요. 그 권리를 해치는 일을 아동학대라고 해요." 시연 단추로 네 유형 이름이 쉬운 설명 옆에 놓이는 모습을 보인다. "부모님이 하는 일은 학대가 아니에요"라는 말에는 "누가 하든 어린이를 아프게 하거나 돌보지 않으면 안 돼요. 그리고 그건 어린이 잘못이 아니에요"라고 말해 준다. 집에서 어른끼리 다투며 폭력을 쓰는 것을 보게 하는 것도 어린이 마음을 다치게 한다고 덧붙인다.',
          student: '네 유형 가운데 처음 알게 된 것 하나를 골라, 어린이에게 왜 해로운지 짝에게 말해 보아요.',
          demo: { tool: 'wordcards', options: { words: TYPES }, sequence: [{ match: { 신체학대: '신체학대', 방임: '방임' } }, { match: { 신체학대: '신체학대', 정서학대: '정서학대', 성학대: '성학대', 방임: '방임' } }] },
          art: art('four paper cards in a row, each with a small paper shield, around a paper child holding an umbrella', '어린이는 안전하게 돌봄받아요', 'rainbow', 'mint'),
        },
        notes: '학생에게 집안 일을 묻거나 발표하게 하지 않는다. 수업 뒤 걱정을 말하는 학생이 있으면 학교의 아동학대 대응 절차(관리자 보고·신고)를 따른다.',
      }),
      X('intro.observe-diary', {
        title: '친구의 달라진 모습 일기', method: '가상 친구의 달라진 모습 관찰 일기 읽기', tool: 'story', minutes: 6,
        levels: { easy: '교사가 걱정되는 점 하나(자주 다친 채 옴)를 짚어 주고 고르게 한다.', base: '걱정되는 점 두 개를 스스로 고른다.', challenge: '두 개를 고른 뒤, 섣불리 단정하지 않고 어른께 알려야 하는 까닭을 말한다.' },
        intro: {
          teacher: '"지어낸 친구 민의 옆자리 친구가 쓴 관찰 일기예요. 어떤 모습이 걱정될까요?" 시연 단추로 \'자주 다친 채 등교함\'과 \'늦게까지 집에 안 가려 함\'이 바구니에 담기는 모습을 보인다. "그럼 민의 집에 학대가 있는 거예요"라는 말에는 "우리는 판단하는 사람이 아니에요. 걱정되는 모습을 알아차리고 어른께 잇는 사람이에요"라고 말해 준다.',
          student: '민의 일기 가운데 걱정되는 모습을 하나 골라, 그때 민에게 어떤 말을 건넬지 짝에게 말해 보아요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '걱정되는 모습', title: '민의 옆자리 친구 일기(지어낸 이야기)', cards: [{ id: 'hurt', text: '자주 다친 채 등교함', motif: 'cloud' }, { id: 'shoe', text: '새 운동화를 자랑함', motif: 'star' }, { id: 'late', text: '늦게까지 집에 안 가려 함', motif: 'moon' }, { id: 'ball', text: '점심시간에 축구함', motif: 'sun' }], shuffle: false }, sequence: [{ pick: ['hurt'] }, { pick: ['hurt', 'late'] }] },
          art: art('a paper diary page with small paper drawings of a school day, a paper child sitting alone after school under a paper moon', '친구의 달라진 모습', 'moon', 'sky'),
        },
      }),
      X('activity.signal-sort', {
        title: '걱정 신호를 유형별로 나누기', method: '신호 카드를 유형별로 나누기', tool: 'mindmap', minutes: 14,
        levels: { easy: '두 칸(신체학대·방임)에 카드 4장을 나눈다.', base: '다섯 칸(정서학대·성학대·더 알아봐야 함 더함)에 카드 8장을 나눈다.', challenge: '다섯 칸에 넣지 않을 카드가 섞이고, 여러 유형에 걸치는 신호를 모둠에서 말한다(셋째 문항).' },
        activity: {
          title: '걱정 신호 나누기', tool: 'mindmap',
          teacher: '"\'늘 배고파함\'은 어느 유형의 신호일까요?" 카드를 놓을 때마다 까닭을 말하게 한다. "신호가 있으면 학대가 확실해요"라는 학생에게 "신호는 \'걱정된다\'는 뜻이지 확인이 아니에요. 그래서 \'더 알아봐야 함\' 칸이 있어요. 알아보는 일은 어른이 해요"라고 말해 준다. 친구를 의심하거나 소문 내는 것이 아니라 걱정을 어른께 잇는 것이 목표라는 점을 짚는다.',
          task: '친구에게 보이는 걱정 신호 카드를 유형 칸에 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTN('걱정 신호 카드를 유형 칸에 나누어요.', { topic: '걱정 신호', slots: ['신체학대', '방임', '정서학대', '성학대', '더 알아봐야 함'], easySlots: ['신체학대', '방임'],
              groups: { 신체학대: ['설명 못 하는 상처', '자주 멍이 듦'], 방임: ['늘 배고파함', '며칠째 씻지 못함'], 정서학대: ['심하게 겁먹음', '"난 쓸모없어"라는 말'], 성학대: ['몸에 대한 이상한 비밀'], '더 알아봐야 함': ['집에 가기 싫어함'] },
              traps: ['새 필통 자랑'] }, 0.3),
            SORT('민의 모습을 걱정 신호와 평범한 모습으로 나누어요.', { topic: '민의 하루', slots: ['걱정 신호', '평범한 모습'], groups: { '걱정 신호': ['아파도 병원에 못 감', '큰 소리에 몸을 움츠림', '추운 날 얇은 옷만'], '평범한 모습': ['짝과 웃으며 이야기', '체육 시간에 뜀', '급식을 맛있게 먹음'] }, extra: { '걱정 신호': ['"집에 가면 혼나"'], '평범한 모습': ['그림 그리기 좋아함'] } }, 0.25,
              { conclude: '걱정 신호는 확인이 아니라 알아차림이에요. 판단은 어른이 하고, 우리는 어른께 잇는 사람이에요.' }),
            { prompt: '\'집에 가기 싫어함\'이 여러 유형에 걸칠 수 있는 까닭을 모둠에서 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '알맞은 유형을 써요.', columns: ['신호', '유형'], cells: [['설명 못 하는 상처', ''], ['늘 배고파함', ''], ['심하게 겁먹음', '']], answer: '신체학대, 방임, 정서학대' }] },
      }),
      X('activity.help-map', {
        title: '동네 도움 지도에 핀 꽂기', method: '동네 지도에 도움 받을 곳과 연락처 핀', tool: 'map', minutes: 13,
        levels: { easy: '장소 두 곳만 있는 지도에서 알맞은 곳에 핀을 꽂는다(이름이 보임).', base: '여섯 곳이 있는 지도에서 상황 셋마다 알맞은 곳에 핀을 꽂는다.', challenge: '같은 문항을 마친 뒤, 넷째 문항에서 밤·주말 상황의 가장 빠른 도움 방법을 고른다.' },
        activity: {
          title: '도움 받을 곳 지도', tool: 'map',
          teacher: '"민을 돕고 싶을 때, 학교에서는 어디로 갈까요? 지금 위험하면요?" 상황을 소리 내어 읽고 핀을 꽂게 한다. "주민센터는 언제나 열려 있어요"라는 학생에게 "밤이나 주말에는 문을 닫을 수 있어요. 급할 때는 112에 전화해요"라고 말해 준다. 1388은 청소년이 고민을 상담하는 번호라는 점을 짚는다. 지도는 지어낸 동네다.',
          task: '상황을 읽고 도움 지도에서 알맞은 곳에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            HELP('학교에서 선생님께 민의 이야기를 하고 싶어요. 갈 곳에 핀을 꽂아요.', '학교 상담실', 0.15),
            HELP('지금 누가 다칠 것처럼 위험해요. 경찰이 있는 곳에 핀을 꽂아요.', '지구대(112)', 0.2),
            HELP('방과 후 고민을 상담받고 싶어요. 1388과 이어진 곳에 핀을 꽂아요.', '청소년상담복지센터(1388)', 0.25),
            { prompt: '토요일 밤, 친구가 지금 위험해 보여요. 가장 빠른 도움 방법을 골라요.', toolOptions: { grid: [6, 4], title: '우리 동네 도움 지도(가상)', places: TOWN, readOnly: true, ask: { q: '토요일 밤, 지금 위험해요. 어떻게 할까요?', choices: ['112에 전화하기', '월요일에 상담실 가기', '주민센터 찾아가기'], why: ['', '지금 위험하면 기다리지 않아요.', '밤·주말에는 문을 닫을 수 있어요.'] } }, target: { pick: 0 }, difficulty: 0.25,
              conclude: '학교에서는 선생님·상담실, 지금 위험하면 112, 상담은 1388로 이어요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '상황에 알맞은 도움 받을 곳을 써요.', columns: ['상황', '도움 받을 곳'], cells: [['학교에서 이야기하고 싶어요', ''], ['지금 위험해요', ''], ['고민을 상담하고 싶어요', '']], answer: '담임·상담 선생님, 112, 1388' }] },
        notes: '지도는 지어낸 동네다. 우리 학교 둘레 실제 기관을 넣으려면 교사가 지역의 지구대·청소년상담복지센터 위치를 따로 확인한다.',
      }),
      X('activity.dont-go-home-choice', {
        title: '"집에 가기 싫어, 비밀이야"', method: '\'집에 가기 싫어, 비밀이야\' 갈림길 결과 추적', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번(민의 말을 어떻게 들을지)에서 고르고 근거 한 장을 고른다.', base: '갈림 2번("비밀 지켜 줄 거지?")을 지나 근거를 고른다.', challenge: '갈림 3번(민이 화를 낸 뒤에도 알릴지)까지 지나 근거를 모두 고르고 다른 길과 견준다.' },
        activity: {
          title: '갈림길: 비밀로 해 달래요', tool: 'dilemma',
          teacher: '"친구가 비밀로 해 달라고 하면 꼭 지켜야 할까요?" 고를 때마다 민의 안전과 마음이 어떻게 바뀌는지 결과 칸을 읽게 한다. "비밀을 말하면 배신이에요"라는 말에는 "친구를 다치게 하는 비밀은 지키는 게 아니라 알려야 친구를 지켜요"라고 말해 준다. "맞을 만한 일을 했겠지"라는 말이 나오면 "어떤 까닭으로도 어린이를 아프게 하면 안 돼요. 민의 잘못이 아니에요"라고 분명히 한다.',
          task: '갈림길마다 고르고, 민의 안전과 마음이 어떻게 바뀌는지 읽은 뒤 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '민의 비밀',
            steps: [
              { text: '방과 후 민이 "집에 가기 싫어. 아무한테도 말하지 마"라고 해요.', motif: 'moon',
                good: ['listen', '끝까지 들어 주고 "말해 줘서 고마워"라고 한다', '민이 조금 마음을 열어요.', [['민', '혼자가 아니에요', 1]]],
                bad: ['skip', '"에이, 별일 아니겠지" 하고 넘긴다', '민이 입을 닫아 버려요.', '친구의 말은 가볍게 넘기지 않고 끝까지 들어요.', [['민', '더 외로워요', -1]]] },
              { text: '민이 "비밀 지켜 줄 거지?"라고 다시 물어요.', motif: 'cloud',
                good: ['safe', '"너를 지키려면 선생님께 같이 가야 해"라고 한다', '민이 망설이다 고개를 끄덕여요.', [['민', '도움에 가까워져요', 1]]],
                bad: ['keep', '"응, 비밀 지킬게"라고 약속한다', '민은 그날도 혼자 집에 가요.', '안전이 걸린 비밀은 지키지 않고 어른께 알려요.', [['민', '도움을 못 받아요', -1]]] },
              { text: '민이 "말하면 너랑 안 놀아"라며 화를 내요.', motif: 'wind',
                good: ['still', '그래도 담임 선생님께 알리고 민 곁에 있어 준다', '선생님이 민을 돕기 시작해요.', [['민', '보호받아요', 1], ['나', '용기를 냈어요', 1]]],
                bad: ['drop', '친구를 잃을까 봐 그만둔다', '민의 걱정은 그대로 남아요.', '화가 나도 나중에는 지켜 준 마음을 알 수 있어요.', [['민', '계속 위험해요', -1]]] },
            ],
            ending: '들어 주고, 비밀보다 안전을 먼저 생각해 어른께 이은 덕분에 민이 도움을 받기 시작했어요.',
            reasons: [{ id: 'safe', text: '친구의 안전이 비밀보다 먼저다' }, { id: 'adult', text: '친구 잘못이 아니고, 돕는 일은 어른이 할 수 있다' }, { id: 'parents', text: '부모가 하는 일은 학대가 아니다', why: '누가 하든 어린이를 아프게 하면 안 돼요.' }, { id: 'deserve', text: '맞을 만한 일을 했을 것이다', why: '어떤 까닭으로도 어린이를 아프게 하면 안 돼요.' }],
            good: ['safe', 'adult'],
            talk: '모둠에서 "비밀로 해 달라는 친구에게 어떻게 말하면 좋을까?"를 한 문장씩 말해요.',
            conclude: '다치게 하는 비밀은 지키지 않고 어른께 알려요. 친구 잘못이 아니에요.',
          }),
        },
        worksheet: { items: [{ type: 'choice', prompt: '친구가 다칠 수 있는 비밀을 말하며 지켜 달라고 하면?', options: ['꼭 지킨다', '친구를 지키려고 어른께 알린다', '다른 친구들에게 말한다'], answer: '친구를 지키려고 어른께 알린다' }] },
        notes: '이야기는 지어낸 것이다. 학대 장면을 묘사하지 않는다.',
      }),
      X('activity.link-order', {
        title: '어른에게 잇는 순서', method: '어른에게 잇는 순서 세우기', tool: 'kitchen', minutes: 13,
        levels: { easy: '잇는 카드 3장(들어 주기·탓하지 않기·같이 선생님께)을 차례대로 놓는다.', base: '카드 4장(급하면 112·상담은 1388 더함)을 놓는다.', challenge: '카드 4장 사이에 섞인 함정 카드(직접 찾아가 따지기)를 빼고 놓은 뒤, 그 함정의 결과를 모둠에서 말한다.' },
        activity: {
          title: '친구를 어른에게 잇는 차례', tool: 'kitchen',
          teacher: '"민이 이야기를 꺼냈어요. 우리는 무엇부터 할까요?" 카드를 놓은 뒤 반 전체가 차례를 읽게 한다. "제가 민의 집에 가서 따질래요"라는 학생의 마음은 고맙다고 말해 주고 "그러면 나도 민도 위험해질 수 있어요. 돕는 일은 어른과 경찰이 해요"라고 말해 준다. 급할 때는 112, 상담은 1388이라는 점을 짚는다.',
          task: '친구 이야기를 들었을 때 어른에게 잇는 차례 카드를 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDER('친구가 걱정되는 이야기를 꺼냈을 때 할 일을 차례대로 놓아요.', ['끝까지 들어 주기', '탓하지 않기', '"같이 선생님께 가자"', '급하면 112·상담은 1388'], { mode: 'order', trap: '직접 찾아가 따지기' }, 0.2),
            ORDER('친구에게 건넬 말을 차례대로 놓아요.', ['"말해 줘서 고마워"', '"네 잘못이 아니야"', '"어른께 같이 가자"', '"내가 곁에 있을게"'], { mode: 'order', easy: [0, 1, 2], trap: '"너도 잘못했네"' }, 0.25,
              { conclude: '들어 주고, 탓하지 않고, 함께 어른께 가요. 급하면 112, 상담은 1388이에요.' }),
            { prompt: '\'직접 찾아가 따지기\'를 하면 어떤 일이 생길지 모둠에서 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '친구가 걱정되는 이야기를 하면 끝까지 듣고, "네 ___ 이 아니야"라고 말해요.', answer: '잘못' }] },
      }),
      X('wrap.note', {
        title: '"네 잘못이 아니야" 쪽지', method: '\'네 잘못이 아니야\' 쪽지 쓰고 기준표 점검', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀을 보고 쪽지를 쓰고 기준 2개(탓하지 않기·마음 알아주기)를 점검한다.', base: '두세 문장 쪽지를 쓰고 기준 3개(함께 어른께 가자는 제안 더함)를 점검한다.', challenge: '기준 3개를 점검하고 한 군데 고쳐 쓴 뒤, 민이 걱정할 점(말하면 혼날까)에 답하는 문장을 넣는다(\'같이\'·\'함께\'를 넣음).' },
        wrap: {
          teacher: '"민에게 쪽지를 건넨다면 어떤 말이 가장 힘이 될까요?" 기준표를 함께 읽고 쓰게 한다. "왜 진작 말 안 했어?" 같은 문장이 보이면 "그 말은 민이 자기 탓이라고 느끼게 할 수 있어요. 말해 준 것에 고맙다고 해 볼까요?"라고 말해 준다. 쪽지 속 이름은 지어낸 이름만 쓴다.',
          exitTicket: [
            RUBX('지어낸 친구 민에게 쪽지를 써요', { topic: '걱정되는 이야기를 꺼낸 지어낸 친구 민에게 힘이 되는 쪽지를 두세 문장으로 써요.', starter: '민아, 말해 줘서 ___. 네 잘못이 아니야. 우리 ___.', crit: ['민을 탓하지 않았다', '민의 마음을 알아주었다', '함께 어른께 가자고 했다'], must: [['같이', '함께']], chars: [20, 140], title: '민에게 쓰는 쪽지' }),
            { type: 'choice', prompt: '걱정되는 이야기를 꺼낸 친구에게 하면 안 되는 말은?', options: ['"말해 줘서 고마워"', '"네가 뭘 잘못했겠지"', '"같이 선생님께 가자"'], answer: 1, difficulty: 0.15, explain: '어떤 까닭으로도 어린이를 아프게 하면 안 돼요. 친구 잘못이 아니에요.' },
            { type: 'short', prompt: '친구가 걱정될 때 내가 이야기할 어른을 써요(이름 대신 \'담임 선생님\'처럼 써요).' },
          ],
        },
        worksheet: {
          title: '네 잘못이 아니야',
          items: [
            { type: 'short', prompt: '걱정되는 이야기를 한 친구에게 건넬 말을 한 문장으로 써요.' },
            { type: 'check', prompt: '친구를 어른에게 잇는 차례를 떠올리며 표시해요.', options: ['끝까지 들어 주기', '탓하지 않기', '같이 선생님께 가기', '급하면 112, 상담은 1388'] },
          ],
          easy: { note: '"말해 줘서 고마워"로 시작해도 돼요.', items: [{ type: 'draw', prompt: '친구와 함께 선생님께 가는 모습을 그려요.' }] },
        },
      }),
      X('wrap.brave-feeling', {
        title: '용기 낸 친구의 마음', method: '용기 낸 친구 마음 고르기', tool: 'emotion', minutes: 7,
        levels: { easy: '장면 1개(민이 이야기를 마침)에 마음 카드를 짝 짓는다.', base: '장면 2개(함께 간 친구 더함)에 짝 짓는다.', challenge: '장면 3개에 짝 지은 뒤, 두 사람 마음이 다른 까닭을 말한다.' },
        wrap: {
          teacher: '"선생님께 이야기를 마친 민과, 함께 간 친구는 어떤 마음일까요?" 장면마다 마음 카드를 짝 짓게 한다. \'미안함\'을 고른 학생에게 "민이 미안해할 일일까요? 말한 사람은 용기를 낸 거예요"라고 말해 준다. 두 사람의 마음이 왜 다를 수 있는지 이야기하게 한다.',
          exitTicket: [
            FEEL('장면과 그때의 마음을 이어요.', [['민이 선생님께 이야기를 마침', '안심'], ['함께 간 친구가 민 곁에 앉음', '뿌듯함'], ['상담 선생님이 계속 돕기로 함', '고마움']], ['안심', '뿌듯함', '고마움', '미안함']),
            { type: 'choice', prompt: '친구 일로 고민될 때 상담받을 수 있는 번호와 지금 위험할 때의 번호를 바르게 짝 지은 것은?', options: ['상담 1388, 위험 112', '상담 112, 위험 1388'], answer: 0, difficulty: 0.15, explain: '고민 상담은 1388, 지금 위험하면 112예요.' },
            { type: 'mood', prompt: '친구를 어른에게 잇는 법을 배운 지금 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '말한 사람은 용기를 낸 거예요',
          items: [
            { type: 'short', prompt: '용기 내어 말한 친구에게 해 줄 말을 써요.' },
            { type: 'choice', prompt: '지금 친구가 위험할 때 거는 번호는?', options: ['112', '1388'], answer: '112' },
          ],
        },
      }),
    );
  }

  // ======== 6학년 · 생명존중과 친구 지킴이 (별표 2 '자살 예방 및 생명존중 교육' — 알아차리기·들어 주기·어른께 잇기 중심, 방법 묘사 없음) ========
  {
    const X = mk('life-guardian', 6);
    const HELPER = [['친구', 15], ['보호자', 8], ['담임 선생님', 4], ['상담 선생님', 3]];
    M.push(
      X('intro.life-cycle', {
        title: '이어지는 생명의 한살이', method: '생명의 한살이로 이어지는 소중함 보기', tool: 'lifecycle', minutes: 6,
        levels: { easy: '나무의 한살이 3단계(씨앗·새싹·큰 나무)를 함께 놓는다.', base: '4단계를 놓고 단계마다 생명이 이어지려면 무엇이 필요한지(햇빛·물·돌봄) 말한다.', challenge: '4단계를 놓은 뒤 사람의 자람과 견주어 한 문장으로 말한다.' },
        intro: {
          teacher: '"작은 씨앗이 숲이 되기까지 무엇이 필요할까요?" 시연 단추로 씨앗 → 새싹 → 큰 나무 → 숲과 새 씨앗이 둥근 판에 놓이는 모습을 보인다. 단계마다 햇빛·물·돌봄 같은 필요한 것을 말하게 한다. "작은 새싹 하나쯤은 없어도 돼요"라는 말에는 "그 새싹이 있어야 숲이 이어져요. 사람도 하나하나가 소중해요"라고 말해 준다. 오늘은 나와 친구의 생명을 지키는 지킴이가 되는 법을 배운다고 밝힌다.',
          student: '나무가 자라는 데 필요한 것과 사람이 자라는 데 필요한 것을 하나씩 짝에게 말해 보아요.',
          demo: { tool: 'lifecycle', options: { center: '나무의 한살이', slots: 4, cards: [{ id: 'tree', text: '큰 나무', motif: 'tree' }, { id: 'seed', text: '씨앗', motif: 'seed' }, { id: 'forest', text: '숲과 새 씨앗', motif: 'leaf' }, { id: 'sprout', text: '새싹', motif: 'sprout' }] }, sequence: [{ order: ['seed', 'sprout', 'tree', 'forest'] }] },
          art: art('a paper ring showing a seed, a sprout, a tall paper tree and a small forest, with soft paper sunlight above', '생명은 이어져요', 'sun', 'mint'),
        },
      }),
      X('intro.helper-chart', {
        title: '힘들 때 찾는 사람 그래프', method: '힘들 때 도움 받고 싶은 사람 막대그래프', tool: 'chart', minutes: 6,
        levels: { easy: '가장 많은 사람 하나를 고른다.', base: '많은 차례를 말하고, 친구에게만 몰릴 때의 어려움 하나를 말한다.', challenge: '어른의 도움을 늘릴 방법을 말한다.' },
        intro: {
          teacher: '"어느 6학년 반에 \'힘들 때 누구에게 말하고 싶나요?\'를 물었다고 꾸민 가상 설문이에요. 가장 많은 사람은 누구일까요?" 시연 단추로 \'친구\'를 고르는 모습을 보인다. "친구에게 말하면 충분해요"라는 말에는 "친구도 우리처럼 어린이예요. 큰 걱정을 친구 혼자 안고 있으면 어떨까요?"라고 되묻는다. 숫자는 가상이라고 밝힌다.',
          student: '친구가 나에게만 힘든 이야기를 한다면 나는 어떤 마음일지, 누구와 함께 도울지 짝에게 말해 보아요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '힘들 때 말하고 싶은 사람(가상 설문)', unit: '명', xLabel: '사람', yLabel: '학생 수', data: HELPER, question: '가장 많은 사람은?', choices: HELPER.map((x) => x[0]) }, sequence: [{ pick: 0 }] },
          art: art('a paper bar chart where the tallest bar is shaped like two paper friends, with smaller bars shaped like a parent and teachers', '힘들 때 누구에게 말할까?', 'star', 'buttercup'),
        },
        notes: '그래프 수치는 수업용 가상 자료다. 학생 자신이 힘들 때 누구에게 말하는지 발표하게 하지 않는다.',
      }),
      X('activity.signal-sort', {
        title: '평소와 다른 신호 알아차리기', method: '평소와 다른 신호 알아차리기', tool: 'story', minutes: 14,
        levels: { easy: '두 칸(말·행동)에 신호 카드 4장을 나눈다.', base: '세 칸(기분 더함)에 신호 카드 6장을 나눈다.', challenge: '세 칸에 넣지 않을 카드가 섞이고, 둘째 문항에서 평소에도 있는 일과 평소와 다른 신호를 가른 근거를 모둠에서 말한다.' },
        activity: {
          title: '친구의 평소와 다른 신호', tool: 'story',
          teacher: '"친구가 평소와 다를 때, 말·행동·기분 가운데 어디에서 알 수 있을까요?" 카드를 놓을 때마다 까닭을 말하게 한다. "힘들다는 말은 관심 끌려고 하는 거예요"라는 학생에게 "그 말이 도와 달라는 신호일 수 있어요. 가볍게 넘기지 않아요"라고 말해 준다. 하루 피곤한 것과 오래 이어지는 변화는 다르며, 판단보다 알아차리고 어른께 잇는 것이 지킴이의 일이라는 점을 짚는다.',
          task: '친구에게 보이는 신호 카드를 말·행동·기분 칸에 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTN('친구에게 보이는 평소와 다른 신호를 칸에 나누어요.', { mode: 'sort', slots: ['말', '행동', '기분'], easySlots: ['말', '행동'],
              groups: { 말: ['"다 그만하고 싶어"', '"아무도 날 몰라"'], 행동: ['말이 줄고 혼자 지냄', '좋아하던 놀이를 그만둠'], 기분: ['늘 기운이 없어 보임', '자주 눈물을 보임'] },
              traps: ['새 게임 이야기'] }, 0.25),
            { prompt: '카드를 평소에도 있는 일과 오래 이어지는 평소와 다른 신호로 나누어요.', toolOptions: { mode: 'sort', slots: ['평소에도 있는 일', '평소와 다른 신호'], cards: ['시험 전날 긴장함', '몇 주째 혼자 지냄', '하루 피곤해함', '잠을 못 잔다고 자주 말함'] },
              target: { sort: { '평소에도 있는 일': ['시험 전날 긴장함', '하루 피곤해함'], '평소와 다른 신호': ['몇 주째 혼자 지냄', '잠을 못 잔다고 자주 말함'] } }, difficulty: 0.25,
              levels: { challenge: { prompt: '카드 6장을 평소에도 있는 일과 오래 이어지는 평소와 다른 신호로 나누어요.', toolOptions: { cards: ['시험 전날 긴장함', '몇 주째 혼자 지냄', '하루 피곤해함', '잠을 못 잔다고 자주 말함', '좋아하던 일에 관심 없음', '경기에 져서 속상함'] }, target: { sort: { '평소에도 있는 일': ['시험 전날 긴장함', '하루 피곤해함', '경기에 져서 속상함'], '평소와 다른 신호': ['몇 주째 혼자 지냄', '잠을 못 잔다고 자주 말함', '좋아하던 일에 관심 없음'] } } } },
              conclude: '평소와 다른 말·행동·기분이 이어지면 도움 신호일 수 있어요. 알아차리고 어른께 이어요.' },
            { prompt: '둘째 문항에서 둘을 가른 근거(얼마나 오래·얼마나 자주)를 모둠에서 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '도움이 필요할 수 있는 신호에 표시해요.', options: ['말이 줄고 혼자 지냄', '"다 그만하고 싶어"라는 말', '시험 전날 긴장함', '좋아하던 일에 관심 없음'] }] },
      }),
      X('activity.see-listen-tell', {
        title: '보고·듣고·말하기 역할놀이', method: '보고·듣고·말하기 역할놀이', tool: 'timer', minutes: 13,
        levels: { easy: '순서 카드 2장(알아차리기·어른께 알리기)을 놓는다.', base: '순서 카드 3장(알아차리기→판단하지 않고 들어 주기→어른께 함께 알리기)을 놓고, 역할놀이 뒤 점검 3칸을 표시한다.', challenge: '카드 3장·점검 4칸을 마친 뒤, 역할을 바꿔 하고 들어 주는 말을 모둠에서 말한다(셋째 문항).' },
        activity: {
          title: '지킴이 차례와 역할놀이 점검', tool: 'timer',
          teacher: '"친구가 힘들어 보이면 무엇부터 할까요?" 순서 카드를 놓은 뒤 모둠이 \'힘든 친구·지킴이\' 역할을 나눠 짧게 해 보게 한다. 대본은 "요즘 기운 없어 보여. 괜찮아?"처럼 가볍게 쓰고, 위험한 장면은 연기하지 않는다. "고민을 들으면 바로 해결해 줘야 해요"라는 말에는 "해결은 어른과 함께 해요. 지킴이는 끝까지 들어 주고 어른께 이어요"라고 말해 준다.',
          task: '지킴이 차례 카드를 놓고, 모둠 역할놀이를 한 뒤 점검 칸에 표시해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '친구가 힘들어 보일 때 지킴이가 할 일을 차례대로 놓아요.', toolOptions: { title: '보고·듣고·말하기', cards: ['믿을 어른께 함께 알리기', '알아차리기', '판단하지 않고 들어 주기'] }, target: { order: ['알아차리기', '판단하지 않고 들어 주기', '믿을 어른께 함께 알리기'] }, difficulty: 0.2,
              levels: { easy: { prompt: '지킴이가 할 일을 차례대로 놓아요(카드 2장).', toolOptions: { cards: ['믿을 어른께 함께 알리기', '알아차리기'] }, target: { order: ['알아차리기', '믿을 어른께 함께 알리기'] } } } },
            { prompt: '모둠 역할놀이를 한 뒤 해낸 것에 스스로 표시해요.', toolOptions: { title: '지킴이 역할놀이 점검' }, target: { selfCheck: ['"괜찮아?"라고 먼저 물었다', '말을 끊지 않고 끝까지 들었다', '"같이 선생님께 가자"고 말했다'] }, difficulty: 0.1,
              levels: { easy: { prompt: '모둠 역할놀이를 한 뒤 해낸 것에 스스로 표시해요(두 칸).', target: { selfCheck: ['"괜찮아?"라고 먼저 물었다', '"같이 선생님께 가자"고 말했다'] } }, challenge: { prompt: '모둠 역할놀이를 한 뒤 해낸 것에 스스로 표시해요(네 칸).', target: { selfCheck: ['"괜찮아?"라고 먼저 물었다', '말을 끊지 않고 끝까지 들었다', '"같이 선생님께 가자"고 말했다', '역할을 바꿔 한 번 더 했다'] } } },
              conclude: '보고(알아차리기), 듣고(판단 없이), 말해요(어른께 함께). 해결은 어른과 함께 해요.' },
            { prompt: '역할을 바꿔 해 보고, 들어 줄 때 쓴 좋은 말을 모둠에서 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '힘들어 보이는 친구에게 먼저 건넬 말을 한 문장으로 써요.' }] },
        notes: '역할놀이는 가벼운 안부 장면만 한다. 위험한 말이나 행동은 연기하지 않는다. 수업 중 걱정되는 반응을 보이는 학생은 따로 살피고 상담 교사와 잇는다.',
      }),
      X('activity.message-choice', {
        title: '"다 그만하고 싶어" 메시지', method: '\'다 그만하고 싶어\' 메시지 갈림길', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번(메시지에 어떻게 답할지)에서 고르고 근거 한 장을 고른다.', base: '갈림 2번("아무한테도 말하지 마")을 지나 근거를 고른다.', challenge: '갈림 3번("말하면 절교야")까지 지나 근거를 모두 고르고 다른 길과 견준다.' },
        activity: {
          title: '갈림길: 밤에 온 메시지', tool: 'dilemma',
          teacher: '"밤에 친구에게서 \'다 그만하고 싶어\'라는 메시지가 왔어요. 장난으로 넘겨도 될까요?" 고를 때마다 결과 칸을 읽게 한다. "친구 비밀은 무엇이든 지켜야 해요"라는 말에는 "생명이 걸린 비밀은 지키는 게 아니라 알려야 친구를 지켜요"라고 분명히 말한다. "말하면 친구를 잃어요"라는 걱정은 인정하고 "친구가 안전해야 다시 화해할 수도 있어요"라고 말해 준다. 이야기는 지어낸 것이다.',
          task: '갈림길마다 고르고, 결과를 읽은 뒤 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '밤에 온 메시지',
            steps: [
              { text: '밤에 친구 솔에게서 "다 그만하고 싶어"라는 메시지가 왔어요.', motif: 'moon',
                good: ['reply', '"걱정돼. 이야기해 줄래?"라고 답장한다', '솔이 "요즘 너무 힘들어"라고 답해요.', [['솔', '혼자가 아니라고 느껴요', 1]]],
                bad: ['joke', '장난이겠지 하고 넘긴다', '솔에게서 더 연락이 없어요.', '힘들다는 말은 도와 달라는 신호일 수 있어요.', [['솔', '혼자 남아요', -1]]] },
              { text: '솔이 "아무한테도 말하지 마"라고 해요.', motif: 'cloud',
                good: ['tell', '바로 보호자께 메시지를 보여 드린다', '보호자가 솔의 가족과 선생님께 곧바로 연락해요.', [['솔', '도움이 닿아요', 1]]],
                bad: ['keep', '비밀을 지켜 준다', '나 혼자 밤새 걱정만 해요.', '생명이 걸린 비밀은 지키지 않고 어른께 알려요.', [['솔', '도움을 못 받아요', -1], ['나', '혼자 무거워요', -1]]] },
              { text: '다음 날 솔이 "말하면 절교야"라고 해요.', motif: 'wind',
                good: ['still', '"너를 잃고 싶지 않아서야"라고 말하고 상담 선생님께 함께 간다', '상담 선생님이 솔을 계속 돕기로 해요.', [['솔', '보호받아요', 1], ['나', '용기를 냈어요', 1]]],
                bad: ['stop', '절교가 무서워 혼자 지켜본다', '솔의 걱정은 그대로 남아요.', '친구가 안전해야 다시 화해할 수도 있어요.', [['솔', '계속 힘들어요', -1]]] },
            ],
            ending: '답장하고 바로 어른께 알린 덕분에 솔이 도움을 받기 시작했어요.',
            reasons: [{ id: 'life', text: '생명은 어떤 비밀보다 소중하다' }, { id: 'adult', text: '친구를 지키는 일은 어른과 함께 한다' }, { id: 'attn', text: '힘들다는 말은 관심을 끌려는 것이다', why: '그 말은 도와 달라는 신호일 수 있어요.' }, { id: 'lose', text: '어른에게 말하면 친구를 잃는다', why: '친구가 안전해야 관계도 이어질 수 있어요.' }],
            good: ['life', 'adult'],
            talk: '모둠에서 "힘든 친구에게 보낼 답장"을 한 문장씩 말해요.',
            conclude: '힘들다는 말은 가볍게 넘기지 않고, 생명이 걸린 비밀은 바로 어른께 알려요.',
          }),
        },
        worksheet: { items: [{ type: 'choice', prompt: '친구가 "다 그만하고 싶어"라며 비밀로 해 달라고 하면?', options: ['비밀을 지켜 준다', '바로 보호자·선생님께 알린다', '장난으로 넘긴다'], answer: '바로 보호자·선생님께 알린다' }] },
        notes: '이야기는 지어낸 것이며 방법·장소 같은 구체적인 내용은 다루지 않는다. 지금 위험해 보이는 상황이면 보호자·교사가 곧바로 긴급 신고를 한다는 점을 교사가 알고 있어야 한다.',
      }),
      X('activity.resource-map', {
        title: '도움 자원 생각 그물', method: '도움 자원 생각 그물', tool: 'mindmap', minutes: 13,
        levels: { easy: '가지 2개(학교·집)에 연락 방법 카드를 붙인다.', base: '가지 3개(전화·문자 1388 더함)에 연락 방법 카드 6장을 붙인다.', challenge: '가지 3개에 넣지 않을 카드가 섞이고, 둘째 문항에서 \'내가 힘들 때\' 가지를 더해 나눈다.' },
        activity: {
          title: '친구가 힘들 때 도움 자원', tool: 'mindmap',
          teacher: '"친구가 힘들 때 우리가 이을 수 있는 어른은 누구일까요? 언제, 어떻게 연락할까요?" 모둠이 카드를 하나씩 읽고 가지에 붙이게 한다. "상담 선생님은 문제 있는 사람만 가요"라는 말에는 "상담 선생님은 누구의 고민이든 들어 주는 분이에요"라고 말해 준다. 1388은 청소년 상담 전화로, 전화·문자로 연락할 수 있다는 점을 짚는다. 지킴이인 나도 힘들면 도움을 받아도 된다는 점을 덧붙인다.',
          task: '가운데 \'친구가 힘들 때\'에서 가지마다 도움 자원과 연락 방법 카드를 붙여요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTN('도움 자원 카드를 가지에 붙여요.', { topic: '친구가 힘들 때', slots: ['학교', '집', '전화·문자'], easySlots: ['학교', '집'],
              groups: { 학교: ['담임 선생님께 말하기', '상담 선생님 찾아가기'], 집: ['보호자께 바로 알리기', '메시지 보여 드리기'], '전화·문자': ['1388에 전화하기', '1388 문자 상담'] },
              traps: ['혼자 비밀 지키기'] }, 0.25),
            SORT('할 일 카드를 친구가 힘들 때와 내가 힘들 때로 나누어요.', { topic: '누가 힘들까', slots: ['친구가 힘들 때', '내가 힘들 때'], groups: { '친구가 힘들 때': ['끝까지 들어 주기', '함께 어른께 가기'], '내가 힘들 때': ['내 마음 말하기', '쉬고 숨 고르기'] }, extra: { '친구가 힘들 때': ['곁에 있어 주기'], '내가 힘들 때': ['상담 선생님께 내 고민'] } }, 0.25,
              { conclude: '친구가 힘들 때도, 내가 힘들 때도 담임·상담 선생님·보호자·1388에 이어요.' }),
            { prompt: '모둠 그물에서 가장 빨리 연락할 수 있는 도움 자원을 골라 까닭과 함께 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '친구가 힘들 때 이을 곳을 써요.', columns: ['학교', '집', '전화·문자'], cells: [['', '', '']] }] },
      }),
      X('wrap.pledge', {
        title: '생명존중 다짐 글', method: '생명존중 다짐 글 쓰고 기준표 점검', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀을 보고 다짐 글을 쓰고 기준 2개를 점검한다.', base: '세 문장 다짐 글을 쓰고 기준 3개(생명의 소중함·구체적 행동·도움 요청)를 점검한다.', challenge: '기준 3개를 점검하고 한 군데 고쳐 쓴 뒤, 도움 받을 곳(어른·선생님·보호자·1388)을 넣는다.' },
        wrap: {
          teacher: '"오늘 배운 지킴이의 일을 나와 친구를 위한 다짐으로 써 볼까요?" 기준표를 함께 읽고 쓰게 한다. "힘들어도 혼자 참겠다"는 문장이 보이면 "힘들 때 도움을 청하는 것도 생명을 아끼는 일이에요"라고 말해 주고 고쳐 쓰게 한다. 다짐 글은 발표하지 않아도 된다고 말해 준다.',
          exitTicket: [
            RUBX('나와 친구를 위한 생명존중 다짐 글을 써요', { topic: '나와 친구의 생명을 아끼기 위한 다짐을 세 문장 안팎으로 써요.', starter: '나와 친구는 모두 ___. 친구가 힘들어 보이면 ___. 나도 힘들면 ___.', crit: ['생명의 소중함을 썼다', '할 행동을 구체적으로 썼다', '도움을 청하는 말을 넣었다'], must: [['어른', '선생님', '보호자', '1388']], chars: [30, 180], title: '나의 생명존중 다짐' }),
            { type: 'choice', prompt: '친구의 생명이 걸린 비밀을 들었을 때 알맞은 것은?', options: ['끝까지 지킨다', '믿을 어른께 알린다', '다른 친구들과 의논만 한다'], answer: 1, difficulty: 0.15, explain: '생명이 걸린 비밀은 어른께 알려야 친구를 지켜요.' },
            { type: 'mood', prompt: '지킴이가 되는 법을 배운 지금 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '나는 마음 지킴이',
          items: [
            { type: 'short', prompt: '나와 친구를 위한 다짐을 한 문장으로 써요.' },
            { type: 'check', prompt: '지킴이가 할 일에 표시해요.', options: ['평소와 다른 신호 알아차리기', '판단하지 않고 들어 주기', '믿을 어른께 함께 알리기', '나도 힘들면 도움 청하기'] },
          ],
          easy: { note: '"나와 친구는 모두 소중해"로 시작해도 돼요.', items: [{ type: 'draw', prompt: '친구 곁에서 이야기를 들어 주는 모습을 그려요.' }] },
        },
      }),
      X('wrap.guardian-plan', {
        title: '마음 지킴이 실천 계획', method: '마음 지킴이 실천 계획 표시', tool: 'kitchen', minutes: 7,
        levels: { easy: '지킴이 실천 2칸을 골라 표시한다(함정 섞임).', base: '지킴이 실천 3칸을 골라 표시한다.', challenge: '지킴이 실천 5칸을 골라 표시하고, 이번 주에 할 두 가지와 언제 할지를 쓴다.' },
        wrap: {
          teacher: '"이번 주에 마음 지킴이로서 해 볼 것은 무엇인가요?" 점검표에서 지킴이 실천만 골라 표시하게 한다. \'혼자서만 해결하기\'를 고른 학생에게 "지킴이도 혼자 다 안지 않아요. 어른과 함께해요"라고 말해 준다. 이번 주에 할 두 가지와 언제 할지는 짧은 글로 쓰게 한다.',
          exitTicket: [
            EX('kitchen', CHK('마음 지킴이 실천만 골라 표시해요.', '마음 지킴이 실천 계획', ['친구에게 안부 묻기', '끝까지 들어 주기', '위험한 비밀은 어른께', '내 마음도 돌보기', '힘들면 상담 선생님·1388'], ['힘든 말은 장난으로 넘기기', '혼자서만 해결하기'], { easy: 2, base: 3 }, 0.15)),
            { type: 'short', prompt: '이번 주에 할 지킴이 실천 두 가지와 언제 할지 써요.' },
            { type: 'choice', prompt: '"힘들다는 말은 관심을 끌려는 것이다"에 알맞은 생각은?', options: ['맞다, 모른 척한다', '도움 신호일 수 있어 귀 기울인다', '장난으로 받아친다'], answer: 1, difficulty: 0.15, explain: '힘들다는 말은 도와 달라는 신호일 수 있어요.' },
          ],
        },
        worksheet: {
          title: '마음 지킴이 실천 계획',
          items: [
            { type: 'table', prompt: '이번 주 지킴이 실천 계획을 써요.', columns: ['무엇을', '언제'], cells: [['', ''], ['', '']] },
            { type: 'choice', prompt: '1388은 어떤 전화인가요?', options: ['청소년 상담 전화', '날씨 안내 전화', '물건 주문 전화'], answer: '청소년 상담 전화' },
          ],
        },
      }),
    );
  }

  PaperLessons.registerModules(M);
})();
