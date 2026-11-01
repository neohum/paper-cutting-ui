/* 창체 법정교육 생명존중·자살예방 — 초5-6 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/mandatory.json 의 life 초5-6,
 * 영역 추가 지침: framework/BRIEF_LIFE.md.
 * 근거: 「자살예방 및 생명존중문화 조성을 위한 법률」 제17조·시행령 제10조의2(연 6시간 이상) — sources/changche/research-mandatory.md §1,
 *       같은 파일 §2 생명존중·자살예방 초(감정 알아차리기·도움 요청·생명의 소중함), 중(스트레스 대처·위험 신호와 생명지킴이)의 초 고학년 기초.
 * 초5-6 기준: 사례의 원인과 결과, 자기 점검표, 작은 실천 계획, 간단한 자료(그래프) 읽기, 모둠 토의, 갈림길(dilemma).
 *   법 조문 번호·형량·성인 상황은 쓰지 않는다. 그래프 수치는 모두 가상(화면에 '가상'). 장면·인물은 지어낸 것이다(가명 한 글자: 윤·하·결·온·서·린).
 * 이 영역의 처신(모든 모듈 — BRIEF_LIFE.md):
 *   - 방법·수단·장소·도구는 쓰지 않는다(암시·은유·그림·장면 묘사 포함). 사례는 "힘들어 보였다" 수준이고, 원인을 하나로 단정하지 않는다.
 *   - 학생에게 자신의 힘든 생각·위기를 묻거나 채점하지 않는다. 채점 문항은 모두 가상 인물이다. 자기 점검은 활동지의 '혼자 보기(내지 않아요)' 칸에만 둔다.
 *   - 친구 돕기는 생명지킴이 틀 "알아차리고 → 묻고 → 들어 주고 → 어른·전문가와 잇기"로 쓰고, 혼자 해결하거나 생명이 걸린 비밀을 지키지 않게 한다.
 *   - 도움 받을 곳: 체계도 life 주제에는 concepts(전화번호)가 없어 번호는 쓰지 않고 '[학교가 확인해 넣는 지역 상담 번호]' 자리와 학교 어른(담임·상담·보건 선생님)·보호자만 쓴다.
 *   - 회복·보호 요인·도움 요청의 긍정 메시지가 중심이다. 겁주기·충격 요법은 쓰지 않는다.
 *   - 같은 학년군 폭력예방(saf-violence/e56 life-guardian)과 말틀(보고·듣고·말하기, '생명이 걸린 비밀은 어른께')은 맞추고 장면은 되풀이하지 않았다
 *     (그쪽: 밤에 온 메시지·생명의 한살이·힘들 때 찾는 사람 그래프·신호 나누기 / 이쪽: 쉬는 시간의 부탁·변화가 겹치는 친구·알린 뒤 마음 그래프·자책하는 말).
 * 주제 6개(5학년 3 · 6학년 3) × 도입 2 · 활동 4 · 정리 2 = 계획 모듈 48개 전부. 추천 조합은 체계도 sequences(학년마다 6차시).
 *
 * 계획과 다르게 한 곳(교구 한계 — levels 글은 실제 설정대로 적었다):
 *  - 도입은 시연(demo)만 있어 단계별 판이 없다. 도입 levels 의 '막대 3개/5개', '30초/1분' 같은 차이는 교사 진행(어디까지 짚고 멈출지)으로 적었다.
 *  - 문항 수는 단계마다 같다. '가지 2개/4개', '장면 1개/2개', '2쌍/4쌍'은 쉬움에서 칸·카드·보기를 줄이는 쪽으로 했다.
 *  - stress-map.activity.self-check·puberty-feel.activity.self-care·help-network.wrap.check: 자기 점검을 채점하지 않으려고 교구는
 *    '점검표에 들어갈 신호·실천 고르기'와 가상 인물 자료 읽기로 하고, 학생 자신의 표시는 활동지 '혼자 보기' 칸(걷지 않음)에 둔다.
 *  - puberty-feel.activity.compare·coping-plan.intro.two-roads·friend-care.activity.dilemma: 갈림길 교구는 장면마다 보기 둘(맞는 길·다른 길)로 지었다.
 *    계획의 세 갈래(계속 비교/산책/말하기, 지킨다/함께 가자/몰래 알린다)는 장면 1·2·3에 나눠 넣었다.
 *  - puberty-feel.activity.body: body 교구는 parts(자리 고르기)+ask(보기 고르기)만 되어 '카드 짝 짓기' 대신 문항마다 자리 하나와 마음 보기 하나를 고른다.
 *  - friend-care.activity.case·self-talk.activity.graph: chart 는 표시를 그릴 수 없어 '대응할 말·대처 표시'는 같은 그래프의 보기 고르기 문항으로 했다.
 *  - help-network.wrap.pocket·self-talk.wrap.card: wordcards 는 한국어 낱말 카드로만 쓴다(flip 은 speak:false, card 는 match — 발음 없음).
 *  - 정리 출구 질문은 단계별 판을 바꿀 수 있는 교구 질문만 단계가 달라진다. 나머지 단계 차이는 교사 진행으로 적었다.
 *
 * 사람 확인: 근거 파일에는 법 조항과 '감정 알아차리기·도움 요청·생명의 소중함·스트레스 대처·위험 신호와 생명지킴이' 항목 이름만 있다.
 *  아래 문장은 일반 예방교육 내용으로 썼으니 보건복지부·중앙자살예방센터·한국생명존중희망재단(생명지킴이 '보고·듣고·말하기' 교육 자료)·
 *  교육부 학생정신건강 자료(학생정신건강지원센터)에서 문구를 확인한다.
 *  - stress-map.*: 스트레스 원인 네 갈래(공부·친구·가족·몸)와 반응 세 갈래(몸: 어깨 뭉침·배 아픔·잠 못 잠 / 마음: 짜증·걱정 / 행동: 말수 줄어듦·손톱 물어뜯기) /
 *    '도움 되는 긴장'과 '도움이 필요한 긴장'을 가르는 기준(오래 이어짐·생활이 힘들 만큼 심함) / 스트레스 신호 점검표 항목(입맛 변화·집중 안 됨 포함) /
 *    신호가 겹치고 오래가면 어른께 말하기 — 교육부 학생정신건강 자료, 국가정신건강정보포털.
 *  - coping-plan.*: 건강한 대처(운동·일기·털어놓기·쉬기)와 피하는 대처(밤새 영상·미루기·혼자 꾹 참기)의 구분 / 시험 주간에도 잠 시간을 지키기 /
 *    잠 9시간 넘게는 '우리 반 약속'(연습값)으로만 썼다 — 실제 권장 수면 시간은 질병관리청 국가건강정보포털에서 확인 /
 *    "계획해도 2주째 힘들면 상담 선생님과 이야기" — 2주는 계획 글(brief)의 값이다. 기준 문구는 교육부·중앙자살예방센터 자료에서 확인.
 *  - help-network.*: 학교 상담실(Wee 클래스)·보건실·보건소·청소년 상담 기관·주민센터가 하는 일 / 상담 오해 바로잡기("상담은 문제 있는 사람만 간다"는 틀림,
 *    고민 이야기는 소중히 다루되 생명·안전이 걸리면 어른이 함께 돕는다) / 상담실 이용 차례(시간 알아보기 → 인사 → 고민 한 줄 → 다음 약속) /
 *    지역 상담 번호는 '[학교가 확인해 넣는 지역 상담 번호]' 자리로 비웠다 — 한국청소년상담복지개발원·지역 청소년상담복지센터·교육청 Wee 센터 안내.
 *  - puberty-feel.*: 사춘기에 감정 변화가 커질 수 있음 / 몸 변화(목소리·여드름·어깨·가슴)와 그때 들 수 있는 마음 / SNS 사진은 생활의 일부만 보여 준다 /
 *    잠·밥·운동·쉬기·말하기 자기 돌봄 / 짜증 날 때 말하기 차례(숨 고르기 → 내 마음 말하기 → 바라는 것 부탁하기) — 교육부 보건교육 자료, 질병관리청.
 *  - friend-care.*: 걱정되는 변화(좋아하던 일을 그만둠·말수가 줄어듦·아끼던 물건을 나눠 줌)가 여러 개 겹치면 더 걱정한다 / 알아차리기 → 다정하게 묻기 → 들어 주기 →
 *    어른께 알리기(보고·듣고·말하기) / 생명과 안전이 걸린 비밀은 지키겠다고 약속하지 않는다 / 걱정된다고 솔직하게 묻는 것은 힘든 생각을 부추기지 않는다(교사 메모) /
 *    들어 주는 말·막는 말 예시 / '알린 뒤 처음엔 서운했지만 나중엔 고마웠다' 그래프는 가상 설문이다 — 한국생명존중희망재단 생명지킴이 교육, 중앙자살예방센터.
 *  - self-talk.*: 자신을 깎아내리는 생각을 사실 찾기·다른 설명·친구라면 뭐라 할까로 바꾸기 / 사실과 생각 나누기 / "실패도 과정" /
 *    어른께 꼭 알릴 말 신호('"나 같은 건 없어도 돼"', '"사라지고 싶어"') / 생각이 계속 무거우면 좋아하는 일 → 믿는 어른 → 상담 선생님 차례 —
 *    교육부 학생정신건강 자료, 중앙자살예방센터 자살 위험 신호 안내.
 *  - 모든 모듈 교사 메모: "위기 신호를 보이는 학생은 학교 위기관리 절차(상담교사·관리자 연계)를 따른다." 지금 위험해 보이면 어른이 곧바로 긴급 신고를 한다.
 */
(function () {
  const M = [];
  // 모듈 머리: mk('stress-map', 5)('intro.bucket', {...}) → id·type·topic·grades 를 채운다
  const mk = (topic, grade) => (suffix, o) => Object.assign({
    id: `life.e56.${topic}.${suffix}`, schema: 'edu-module.v1', type: suffix.split('.')[0],
    domain: 'life', band: '초5-6', topic: `life.e56.${topic}`, grades: [grade],
  }, o);
  const art = (draw, banner, motif = 'star', color = 'buttercup') => ({ draw, banner, extra: [{ motif, x: 300, y: 96, color }] });
  const cut = (p) => String(p).replace(/[.?]$/, '');
  const CRISIS = '위기 신호를 보이는 학생은 학교 위기관리 절차(상담교사·관리자 연계)를 따른다.';
  const NUM = '[학교가 확인해 넣는 지역 상담 번호]';

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
  // 바구니 하나에 하나씩(바꾸기 짝): pairs = [[바구니 이름, 넣을 카드]…]. 쉬움 = 앞 easy쌍, 도전 = 함정 카드 더함
  const SWAP = (prompt, pairs, { easy = 2, traps = [], mode } = {}, d, more) => {
    const slots = pairs.map(([s]) => s);
    const cardsOf = (n) => { const c = pairs.slice(0, n).map(([, c]) => c); return [...c.slice(1), c[0]]; };
    const tg = (n) => ({ sort: Object.fromEntries(pairs.slice(0, n).map(([s, c]) => [s, [c]])) });
    const o = Object.assign(mode ? { mode } : {}, { slots, cards: cardsOf(pairs.length) });
    const lv = { easy: { prompt: `${cut(prompt)}(${easy}쌍).`, toolOptions: { slots: slots.slice(0, easy), cards: cardsOf(easy) }, target: tg(easy) } };
    if (traps.length) lv.challenge = { prompt: `${cut(prompt)}(넣지 않을 카드도 있어요).`, toolOptions: { cards: [...cardsOf(pairs.length), ...traps] }, target: tg(pairs.length) };
    return Object.assign({ prompt, toolOptions: o, target: tg(pairs.length), difficulty: d, levels: lv }, more);
  };
  // 차례: steps = [카드 글…](바른 차례). easy = 쉬움에 남길 칸 번호, trap = 도전에서 끼우는 틀린 카드(카드 칸에 남겨야 함)
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
  // 고르기(pick): good = 고를 카드, traps = 고르지 않을 카드. 쉬움 = good 앞 easy장 + 함정 easyTraps장, 도전 = 함정 더
  const PICK = (prompt, basket, good, traps, { easy = 1, easyTraps = 1, extraTraps = [], mode = 'pick', title, topic } = {}, d, more) => {
    const mixIn = (g, t) => { const out = g.slice(); t.forEach((x, i) => out.splice(Math.min(out.length, 1 + i * 2), 0, x)); return out; };
    const o = Object.assign({ mode, basket }, title ? { title } : {}, topic ? { topic } : {}, { cards: mixIn(good, traps) });
    const lv = { easy: { prompt: `${cut(prompt)}(${easy}장).`, toolOptions: { cards: mixIn(good.slice(0, easy), traps.slice(0, easyTraps)) }, target: { pick: good.slice(0, easy) } } };
    if (extraTraps.length) lv.challenge = { prompt: `${cut(prompt)}(헷갈리는 카드도 있어요).`, toolOptions: { cards: mixIn(good, [...traps, ...extraTraps]) }, target: { pick: good } };
    return Object.assign({ prompt, toolOptions: o, target: { pick: good }, difficulty: d, levels: lv }, more);
  };
  // 말풍선 빈칸 채우기(story fill): blanks = [[말풍선 글('___' 자리), 넣을 카드]…]. 쉬움 = 앞 easy칸, 기본 = 앞 base칸, 도전 = 전부
  const FILL = (prompt, who, blanks, cards, { easy = 1, base = 2, title } = {}, d, more) => {
    const sl = blanks.map(([label], i) => ({ id: `b${i + 1}`, who, label }));
    const tg = (n) => ({ fill: Object.fromEntries(blanks.slice(0, n).map(([, c], i) => [`b${i + 1}`, c])) });
    const lv = { easy: { prompt: `${cut(prompt)}(빈칸 ${easy}개).`, toolOptions: { slots: sl.slice(0, easy) }, target: tg(easy) } };
    if (blanks.length > base) lv.challenge = { prompt: `${cut(prompt)}(빈칸 ${blanks.length}개).`, toolOptions: { slots: sl }, target: tg(blanks.length) };
    return Object.assign({ prompt, toolOptions: Object.assign({ mode: 'fill', slots: sl.slice(0, base), cards }, title ? { title } : {}), target: tg(base), difficulty: d, levels: lv }, more);
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

  // 정리용 출구 질문 꼴로 바꾸기(활동 문항 모양 → { type: 'tool', tool, options, … })
  const EX = (tool, it) => Object.assign({ type: 'tool', tool, options: it.toolOptions, prompt: it.prompt, target: it.target, difficulty: it.difficulty || 0.15 }, it.levels ? { levels: it.levels } : {});
  // 점검표(kitchen checklist): good = 표시할 항목, traps = 표시하지 않을 항목. 쉬움 = 앞 easy개, 기본 = 앞 base개, 도전 = good 전부
  const CHK = (prompt, title, good, traps, { easy = 3, base = 4 } = {}, d, more) => {
    const it = (list) => list.map((t) => ({ id: `k${good.indexOf(t) >= 0 ? good.indexOf(t) : 10 + traps.indexOf(t)}`, text: t }));
    const mixIn = (g) => { const out = g.slice(); traps.forEach((t, i) => out.splice(Math.min(out.length, 1 + i * 2), 0, t)); return out; };
    const ids = (g) => g.map((t) => `k${good.indexOf(t)}`);
    const lv = { easy: { prompt: `${cut(prompt)}(${easy}칸).`, toolOptions: { items: it(mixIn(good.slice(0, easy))) }, target: { checklist: ids(good.slice(0, easy)) } } };
    if (good.length > base) lv.challenge = { prompt: `${cut(prompt)}(${good.length}칸).`, toolOptions: { items: it(mixIn(good)) }, target: { checklist: ids(good) } };
    return Object.assign({ prompt, toolOptions: { mode: 'checklist', title, items: it(mixIn(good.slice(0, base))) }, target: { checklist: ids(good.slice(0, base)) }, difficulty: d, levels: lv }, more);
  };
  // 정리: 콜라주 판 — 쉬움 조각 easyMin개·점검 2칸, 기본 조각 baseMin개·점검 3칸, 도전 점검 4칸
  const COLX = (prompt, crit, { easyMin = 3, baseMin = 5, shapes = ['heart', 'circle', 'star', 'square', 'leaf', 'semi'], colors = ['빨강', '주황', '노랑', '초록', '파랑', '보라', '분홍', '하양'] } = {}) => ({
    type: 'tool', tool: 'collage', options: { shapes, colors, maxPieces: 16 }, prompt, target: { selfCheck: crit.slice(0, 3), minPieces: baseMin }, difficulty: 0.1,
    levels: {
      easy: { prompt: `${cut(prompt)}(조각 ${easyMin}개 이상).`, target: { selfCheck: crit.slice(0, 2), minPieces: easyMin } },
      challenge: { prompt: `${cut(prompt)}(점검 네 칸).`, target: { selfCheck: crit.slice(0, 4), minPieces: baseMin } },
    },
  });
  // 막대·꺾은선·그림그래프 읽기 문항(chart read). data = [[이름, 값]…]
  const READ = (prompt, { type = 'bar', title, unit = '명', data, choices, question, xLabel, yLabel, from, showValues }, pick, d, more) => ({
    prompt, toolOptions: Object.assign({ type, mode: 'read', title, unit, data, choices: choices || data.map((x) => x[0]), question }, xLabel ? { xLabel } : {}, yLabel ? { yLabel } : {}, from != null ? { from } : {}, showValues ? { showValues } : {}),
    target: { pick }, difficulty: d, ...more,
  });
  // 갈림 보기(emotion branch) 문항: choices = [[id, 글, 결과, mood?]…], good = 맞는 id
  const BRANCH = (prompt, situation, choices, good, { who, motif, ask, feeling } = {}, d, more) => ({
    prompt, toolOptions: Object.assign({ mode: 'branch', situation, ask: ask || '어떻게 할까요?', choices: choices.map(([id, text, result, mood]) => Object.assign({ id, text, result }, mood ? { mood } : {})) }, who ? { who } : {}, motif ? { motif } : {}, feeling ? { feeling } : {}),
    target: { choice: good }, difficulty: d, ...more,
  });

  // ======== 5학년 · 스트레스의 원인과 반응 (§2 초: 감정 알아차리기; 중: 스트레스 대처 기초) ========
  {
    const X = mk('stress-map', 5);
    const BUCKET = [['시험 걱정', 4], ['친구와 다툼', 3], ['잠 부족', 2], ['숙제 몰림', 2], ['동생과 말다툼', 1]];
    // 학교 칸 지도(가상): 상담실·보건실·담임 교실 + 헷갈리는 곳
    const SCHOOL = [
      { name: '상담실', icon: 'office', at: [1, 0] }, { name: '보건실', icon: 'hospital', at: [4, 0] }, { name: '5학년 2반 교실', icon: 'school', at: [2, 2] },
      { name: '도서관', icon: 'library', at: [0, 3] }, { name: '급식실', icon: 'market', at: [5, 3] },
    ];
    M.push(
      X('intro.bucket', {
        title: '윤의 스트레스 물통 읽기', method: '스트레스 물통 그림', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 앞 막대 3개(시험 걱정·친구와 다툼·잠 부족)만 짚어 읽어 주고, 물통을 가장 많이 채운 일을 함께 고른다.', base: '막대 5개를 모두 읽고 칸을 더해 물통(10칸)이 넘칠 듯한 까닭을 말한다.', challenge: '물을 빼는 활동(산책·털어놓기·잠)을 칠판에 막대로 더 그려 물통이 얼마나 줄지 말한다.' },
        intro: {
          teacher: '"마음에도 물통이 있다고 해 볼까요? 걱정이 생길 때마다 물이 조금씩 차요." 지어낸 5학년 윤의 하루 물통 그래프를 띄우고 시연 단추로 \'시험 걱정\'을 고르는 모습을 보인다. 막대를 더하면 10칸 물통이 넘칠 듯하다는 것을 함께 센다. "스트레스는 나쁜 거니까 없어야 해요"라는 말에는 "누구나 물이 차요. 넘치기 전에 빼는 방법을 아는 게 중요해요"라고 말해 준다. 숫자는 가상이라고 밝힌다.',
          student: '윤의 물통을 가장 많이 채운 일은 무엇인지 찾고, 물을 조금 뺄 수 있는 일을 하나 짝에게 말해 보아요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '윤의 하루 스트레스 물통(가상, 10칸이면 가득)', unit: '칸', xLabel: '일', yLabel: '찬 물', data: BUCKET, max: 10, question: '물통을 가장 많이 채운 일은?', choices: BUCKET.map((x) => x[0]) }, sequence: [{ pick: 0 }] },
          art: art('a paper water bucket nearly full, with small paper drops labeled by worries falling in and a paper child holding a cup to scoop some out', '내 마음의 물통', 'cloud', 'sky'),
        },
        notes: '그래프 수치는 수업용 가상 자료다. 학생의 스트레스 정도를 발표하게 하지 않는다. ' + CRISIS,
      }),
      X('intro.stretch-scan', {
        title: '1분 몸 훑기', method: '몸 훑기 1분', tool: 'timer', minutes: 6,
        levels: { easy: '타이머를 30초 훑기로 맞춘 첫 시연만 하고, 어깨·목 두 곳만 살핀다.', base: '1분 훑기로 머리부터 발끝까지 살피고 가장 굳은 곳을 마음속으로 고른다.', challenge: '1분 훑기 → 10초 풀기 → 1분 다시 훑기(두 번)로 맞춰, 풀기 전과 뒤가 어떻게 다른지 살핀다.' },
        intro: {
          teacher: '"스트레스는 몸에도 나타나요. 1분 동안 머리부터 발끝까지 힘이 들어간 곳을 찾아볼까요?" 시연 단추로 타이머가 30초 → 1분 → 1분 두 번(사이 10초 풀기)으로 바뀌는 모습을 보인다. 정수리·이마·턱·어깨·배·무릎·발끝 차례로 천천히 말해 준다. 굳은 곳은 마음속으로만 고르고 발표하지 않아도 된다. "몸은 스트레스랑 상관없어요"라는 말에는 "걱정이 많은 날 어깨가 올라가 있던 적이 있나요? 몸이 먼저 알려 줄 때가 있어요"라고 되묻는다.',
          student: '눈을 감거나 바닥을 보며 머리부터 발끝까지 차례로 살피고, 가장 힘이 들어간 곳을 마음속으로 골라 보아요.',
          demo: { tool: 'timer', options: { title: '몸 훑기', labels: ['훑기', '풀기'], plan: { work: 15, rest: 0, rounds: 1 } }, sequence: [{ plan: { work: 30, rest: 0, rounds: 1 } }, { plan: { work: 60, rest: 0, rounds: 1 } }, { plan: { work: 60, rest: 10, rounds: 2 } }] },
          art: art('a calm paper child sitting on a chair with eyes closed, soft paper light moving from the top of the head down to the toes', '몸이 알려 주는 신호', 'leaf', 'mint'),
        },
        notes: '몸이 불편한 학생은 앉은 채 눈만 감거나 바닥을 보게 한다. 굳은 곳을 발표시키지 않는다.',
      }),
      X('activity.cause-web', {
        title: '스트레스 원인과 반응 그물', method: '스트레스 원인 그물', tool: 'mindmap', minutes: 13,
        levels: { easy: '원인 가지 2개(공부·친구)에 카드 4장을 나누고, 반응은 가지마다 1장, 사슬은 카드 3장을 놓는다.', base: '원인 가지 4개(공부·친구·가족·몸)에 카드 8장, 반응 가지 3개(몸·마음·행동)에 카드 6장을 나누고 사슬 카드 4장을 놓는다.', challenge: '원인 가지에 넣지 않을 카드가 섞이고, 반응 카드가 늘며, 사슬에 끼어든 틀린 카드 하나를 빼고 원인에서 반응이 이어지는 차례를 말한다.' },
        activity: {
          title: '원인 가지와 반응 가지 잇기', tool: 'mindmap',
          teacher: '"스트레스는 어디에서 올까요? 공부·친구·가족·몸으로 나누어 볼까요?" 카드를 붙일 때마다 "이 일이 생기면 몸·마음·행동에 무엇이 나타날까?"를 묻는다. "스트레스는 공부 때문에만 생겨요"라는 말에는 "친구나 몸에서 오는 것도 있어요. 원인은 여러 가지예요"라고 말해 준다. 셋째 문항에서는 원인 하나가 잠·기분·행동으로 이어지는 사슬을 소리 내어 말하게 한다.',
          task: '원인 카드를 공부·친구·가족·몸 가지에 나누고, 반응 카드를 몸·마음·행동 가지에 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTN('스트레스 원인 카드를 가지에 나누어요.', { topic: '스트레스는 어디에서?', slots: ['공부', '친구', '가족', '몸'], easySlots: ['공부', '친구'],
              groups: { 공부: ['시험 점수 걱정', '숙제가 밀림'], 친구: ['단짝과 다툼', '모둠에서 혼자 됨'], 가족: ['동생과 자주 다툼', '보호자와 생각이 다름'], 몸: ['잠이 모자람', '감기가 오래감'] },
              traps: ['맛있는 간식'] }, 0.2),
            SORT('윤의 스트레스 반응 카드를 몸·마음·행동 가지에 나누어요.', { topic: '윤에게 나타난 반응', slots: ['몸', '마음', '행동'], groups: { 몸: ['어깨가 뭉침', '배가 아픔'], 마음: ['짜증이 남', '자꾸 걱정됨'], 행동: ['말수가 줄어듦', '손톱을 물어뜯음'] }, easy: 1, extra: { 몸: ['잠을 설침'], 행동: ['혼자 있으려 함'] } }, 0.2),
            ORDER('‘시험 점수 걱정’에서 시작하는 사슬을 차례대로 놓아요.', ['시험 점수 걱정', '밤에 잠을 설침', '아침에 몸이 무거움', '친구에게 짜증 냄'], { mode: 'order', easy: [0, 1, 3], trap: '시험이 끝나 신남' }, 0.25,
              { conclude: '원인은 여러 가지이고, 몸·마음·행동으로 이어져 나타나요. 이어진 곳을 알면 끊을 곳도 보여요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '윤의 원인과 반응을 하나씩 써요.', columns: ['원인', '몸 반응', '마음 반응'], cells: [['', '', '']] }] },
        notes: '가족 원인 카드는 가볍게 다룬다. 학생 자신의 가족 이야기를 꺼내게 하지 않는다.',
      }),
      X('activity.cause-effect', {
        title: '발표 걱정 사슬 끊기', method: '사례의 원인과 결과', tool: 'story', minutes: 14,
        levels: { easy: '장면 카드 3장(걱정 → 잠 못 잠 → 짜증)을 차례로 놓고, 끊는 행동 1장을 함정 1장과 섞인 판에서 고른다.', base: '장면 카드 4장을 차례로 놓고, 끊는 행동 1장을 함정 2장 가운데 고른다.', challenge: '틀린 장면 하나를 빼고 4장을 놓은 뒤, 두 군데에서 끊는 행동 2장을 모두 고른다.' },
        activity: {
          title: '원인에서 결과까지 장면 놓기', tool: 'story',
          teacher: '"하는 내일 발표가 걱정돼 밤에 잠을 못 잤어요. 아침에는 어떻게 되었을까요?" 장면을 놓은 뒤 "어디에서 끊으면 짜증까지 가지 않았을까요?"라고 묻는다. "걱정은 참으면 없어져요"라는 학생에게 "참기만 하면 밤에 더 커지기도 해요. 걱정을 말하거나 미리 준비하면 사슬이 끊겨요"라고 말해 준다. 이야기는 지어낸 것이다.',
          task: '하의 장면 카드를 원인에서 결과 차례로 놓고, 사슬을 끊을 수 있는 행동을 골라요.', levels: { easy: { live: true }, base: {}, challenge: {} },
          items: [
            ORDER('하의 장면 카드를 원인에서 결과 차례로 놓아요.', ['내일 발표가 걱정됨', '밤늦게까지 잠을 못 잠', '아침에 일어나기 힘듦', '친구에게 짜증을 냄'], { easy: [0, 1, 3], trap: '발표를 마쳐 뿌듯함', motifs: ['cloud', 'moon', 'sun', 'storm'] }, 0.2),
            { prompt: '하의 사슬을 끊을 수 있는 행동 카드를 골라요.', toolOptions: { mode: 'pick', basket: '사슬을 끊는 행동', cards: ['밤새 영상 보기', '보호자께 걱정 말하기', '아침에 친구 탓하기'] }, target: { pick: ['보호자께 걱정 말하기'] }, difficulty: 0.2,
              levels: {
                easy: { prompt: '하의 사슬을 끊을 수 있는 행동 카드를 골라요(카드 2장).', toolOptions: { cards: ['밤새 영상 보기', '보호자께 걱정 말하기'] } },
                challenge: { prompt: '두 군데에서 사슬을 끊는 행동 카드를 모두 골라요.', toolOptions: { cards: ['밤새 영상 보기', '보호자께 걱정 말하기', '아침에 친구 탓하기', '자기 전 발표 연습 한 번'] }, target: { pick: ['보호자께 걱정 말하기', '자기 전 발표 연습 한 번'] } },
              },
              conclude: '걱정을 말하거나 미리 준비하면 걱정 → 잠 → 짜증으로 이어지는 사슬을 끊을 수 있어요.' },
            { prompt: '모둠에서 다른 걱정 하나로 원인과 결과 사슬을 지어 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '발표 걱정 → ___ → 아침에 짜증', answer: '잠을 못 잠' }] },
      }),
      X('activity.self-check', {
        title: '스트레스 신호 점검표 만들기', method: '나의 스트레스 신호 점검표', tool: 'kitchen', minutes: 13,
        levels: { easy: '점검표에 넣을 신호 4칸을 함정 카드와 가려 표시한다.', base: '점검표에 넣을 신호 8칸을 가려 표시한다.', challenge: '8칸을 가린 뒤 둘째 문항에서 신호가 많을 때 할 일을 모두 고르고, 내 점검은 활동지 혼자 보기 칸에 한다.' },
        activity: {
          title: '스트레스 신호 점검표', tool: 'kitchen',
          teacher: '"스트레스가 쌓이면 어떤 신호가 나타날까요? 점검표에 넣을 칸을 함께 골라 볼까요?" 칸을 고를 때마다 몸·마음·행동 가운데 어디인지 말하게 한다. 내 신호 표시는 활동지 \'혼자 보기\' 칸에만 하고 걷지 않는다고 먼저 말한다. 점수를 매기지 않으며, 신호가 여럿 겹치고 오래가면 믿는 어른과 이야기하면 된다고 짚는다. "신호가 많으면 내가 이상한 거예요"라는 말에는 "누구나 신호가 나타나요. 알아차린 게 첫 번째 힘이에요"라고 말해 준다.',
          task: '스트레스 신호 점검표에 넣을 칸만 고르고, 신호가 많을 때 할 일을 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            CHK('스트레스 신호 점검표에 넣을 칸만 표시해요.', '스트레스 신호 점검표', ['배가 자주 아픔', '짜증이 늘어남', '잠을 잘 못 잠', '입맛이 달라짐', '어깨가 자주 뭉침', '집중이 잘 안 됨', '혼자 있고만 싶음', '눈물이 자주 남'], ['운동 뒤 배고픔', '친구와 크게 웃음'], { easy: 4, base: 8 }, 0.2),
            CHK('신호가 많고 오래갈 때 할 일만 표시해요.', '신호가 많을 때', ['믿는 어른께 말하기', '잠과 밥 챙기기', '상담 선생님 찾아가기'], ['혼자 꾹 참기', '신호를 숨기기'], { easy: 2, base: 3 }, 0.2,
              { conclude: '신호를 알아차리면 쉬고, 챙기고, 믿는 어른과 이야기해요. 혼자 참지 않아도 돼요.' }),
            { prompt: '신호가 여럿 겹치고 오래가면 왜 어른께 말할지 짝과 이야기해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '혼자 보기(내지 않아요): 이번 주 나에게 보인 신호에 표시해요.', options: ['배 아픔', '짜증', '잠 못 잠', '입맛 변화', '아무것도 없음'] }] },
        notes: '활동지의 혼자 보기 칸은 걷거나 확인하지 않는다. 점수·판정을 하지 않는다. 걱정되는 표시를 스스로 보인 학생은 따로 살피고 상담 교사와 잇는다. ' + CRISIS,
      }),
      X('activity.good-stress', {
        title: '도움 되는 긴장, 힘든 긴장', method: '도움이 되는 긴장, 힘든 긴장', tool: 'emotion', minutes: 14,
        levels: { easy: '상황 카드 2장을 두 칸에 나눈다.', base: '상황 카드 4장을 나누고, 도움이 필요한 기준 카드 1장을 고른다.', challenge: '상황 카드 6장을 나누고, 도움이 필요한 쪽의 기준(오래·심하게) 2장을 모두 고른다.' },
        activity: {
          title: '긴장의 두 얼굴 나누기', tool: 'emotion',
          teacher: '"경기 전 두근거림과 몇 주째 이어지는 걱정은 같을까요?" 카드를 놓을 때마다 "이 긴장이 나를 돕나요, 아니면 힘들게 하나요?"라고 묻는다. "긴장은 다 나쁜 거예요"라는 말에는 "조금 긴장하면 집중이 잘 되기도 해요. 오래가거나 너무 심하면 도움이 필요해요"라고 말해 준다. 셋째 문항에서 결에게 해 줄 말을 고르게 한다.',
          task: '상황 카드를 도움 되는 긴장과 도움이 필요한 긴장으로 나누고, 그 기준을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            SORT('상황 카드를 두 칸에 나누어요.', { slots: ['도움 되는 긴장', '도움이 필요한 긴장'], mode: 'sort', groups: { '도움 되는 긴장': ['경기 전 설렘', '발표 전 두근거림'], '도움이 필요한 긴장': ['몇 주째 계속되는 걱정', '잠 못 잘 만큼 불안함'] }, easy: 1, extra: { '도움 되는 긴장': ['시험 앞 집중'], '도움이 필요한 긴장': ['밥맛을 잃을 만큼 걱정'] } }, 0.2),
            PICK('도움이 필요한 긴장의 기준 카드를 골라요.', '도움이 필요한 기준', ['오래 이어짐', '생활이 힘들 만큼 심함'], ['한 번 두근거림', '좋은 일 앞 설렘'], { easy: 1, easyTraps: 1, mode: 'pick' }, 0.2),
            BRANCH('결에게 해 줄 말을 골라요.', '결이 몇 주째 걱정 때문에 잠을 설친대요.', [['wait', '"참으면 괜찮아질 거야"', '결은 혼자 계속 참아요.', '걱정'], ['tell', '"믿는 어른께 같이 말해 보자"', '결이 담임 선생님과 이야기하기로 해요.', '편안함'], ['skip', '"신경 쓰지 마"', '결은 더 말하지 않아요.', '속상함']], 'tell', { who: '결', motif: 'moon', feeling: '걱정' }, 0.2,
              { conclude: '오래가거나 생활이 힘들 만큼 심한 긴장은 도움이 필요한 신호예요. 믿는 어른과 이야기해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '도움이 필요한 긴장은 무엇인가요?', options: ['경기 전 설렘', '몇 주째 계속되는 걱정', '발표 전 두근거림'], answer: '몇 주째 계속되는 걱정' }] },
      }),
      X('wrap.group-talk', {
        title: '우리 반 스트레스 줄이기 토의', method: '모둠 토의: 우리 반 스트레스 줄이기', tool: 'timer', minutes: 6,
        levels: { easy: '모둠이 4분 토의로 방법 하나를 정해 발표한다.', base: '4분 토의 → 1분 정리로 맞추고 방법과 까닭을 함께 발표한다.', challenge: '방법·까닭에 더해 활동지에 실천 날짜를 정해 적는다.' },
        wrap: {
          teacher: '"우리 반 모두가 함께 할 수 있는 스트레스 줄이기 방법은 무엇일까요? 4분 동안 모둠에서 하나를 정해 봐요." 타이머를 맞춘 뒤 토의를 시작한다. "공부를 없애요"처럼 할 수 없는 방법이 나오면 "우리가 정말 할 수 있는 작은 방법은 무엇일까요?"라고 되묻는다. 발표 뒤 반 전체가 실천할 방법 하나를 고른다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '모둠 토의 시간', labels: ['토의', '정리'], timeUnit: 'min', plan: { work: 2, rest: 2, rounds: 1 } }, prompt: '모둠 토의 4분, 정리 1분으로 타이머를 맞춰요.', target: { plan: { work: 4, rest: 1, rounds: 1 } }, difficulty: 0.1,
              levels: { easy: { prompt: '모둠 토의 4분으로 타이머를 맞춰요.', target: { plan: { work: 4 } } } } },
            { type: 'choice', prompt: '우리 반이 함께 할 수 있는 스트레스 줄이기 방법은?', options: ['쉬는 시간에 함께 몸 펴기', '숙제를 모두 없애기', '걱정을 꾹 참기'], answer: 0, difficulty: 0.15, explain: '모두가 할 수 있는 작은 방법이 오래가요.' },
            { type: 'short', prompt: '모둠이 정한 방법과 까닭을 한 문장으로 써요.' },
          ],
        },
        worksheet: {
          title: '우리 반 스트레스 줄이기',
          items: [
            { type: 'table', prompt: '모둠이 정한 방법을 써요.', columns: ['방법', '까닭', '실천 날짜'], cells: [['', '', '']] },
            { type: 'check', prompt: '오늘 배운 것에 표시해요.', options: ['원인은 여러 가지', '몸·마음·행동에 신호', '오래가면 어른께 말하기'] },
          ],
          easy: { note: '방법 하나만 써도 돼요.', items: [{ type: 'draw', prompt: '우리 반이 함께 스트레스를 줄이는 모습을 그려요.' }] },
        },
      }),
      X('wrap.help-line', {
        title: '혼자 감당하기 어려울 때', method: '혼자 감당하기 어려울 때', tool: 'map', minutes: 6,
        levels: { easy: '이름이 보이는 학교 칸 지도에서 상담실·보건실 두 곳에 핀을 꽂는다.', base: '이름 없이 기호만 보이는 지도에서 두 곳에 핀을 꽂고, 담임 교실까지 세 곳을 말한다.', challenge: '방과 후에 도움받을 곳(지역 상담 번호)을 고르고, 활동지에 옮겨 적는다.' },
        wrap: {
          teacher: '"마음이 너무 무거워 혼자 감당하기 어려울 때, 학교에서 어디로 가면 될까요?" 학교 칸 지도에서 상담실·보건실·담임 교실을 함께 짚는다. 학교가 확인한 지역 상담 번호를 칠판에 적어 보여 준다. "상담실은 큰일이 있을 때만 가요"라는 말에는 "작은 고민도 괜찮아요. 일찍 가면 더 쉽게 가벼워져요"라고 말해 준다.',
          exitTicket: [
            { type: 'tool', tool: 'map', options: { grid: [6, 4], title: '우리 학교(가상 칸 지도)', places: SCHOOL, names: false }, prompt: '고민을 들어 줄 상담 선생님이 계신 곳에 핀을 꽂아요.', target: { place: '상담실' }, difficulty: 0.15,
              levels: { easy: { toolOptions: { names: true } } } },
            { type: 'tool', tool: 'map', options: { grid: [6, 4], title: '우리 학교(가상 칸 지도)', places: SCHOOL, names: false }, prompt: '배가 아프고 마음도 무거울 때 갈 수 있는 곳에 핀을 꽂아요.', target: { place: '보건실' }, difficulty: 0.15,
              levels: { easy: { toolOptions: { names: true } } } },
            { type: 'choice', prompt: '방과 후 학교 밖에서 도움받을 수 있는 곳은?', options: [NUM, '게임 채팅방', '모르는 사람의 누리집'], answer: 0, difficulty: 0.15, explain: '학교가 확인해 알려 준 상담 번호로 연락해요.' },
          ],
        },
        worksheet: {
          title: '혼자 감당하기 어려울 때',
          items: [
            { type: 'short', prompt: '우리 학교 상담실과 보건실은 어디에 있는지 써요.' },
            { type: 'short', prompt: `선생님이 알려 준 ${NUM}를 옮겨 적어요.` },
          ],
        },
        notes: '지역 상담 번호는 학교가 확인해 칠판·활동지에 넣는다. ' + CRISIS,
      }),
    );
  }

  // ======== 5학년 · 건강한 대처, 나만의 계획 (§2 초: 감정 알아차리기·도움 요청 — 대처 전략은 일반 지식) ========
  {
    const X = mk('coping-plan', 5);
    const ROADS = [
      { text: '윤이 시험을 망쳐 속상해요. 집에 오자마자 어떻게 할까요?', motif: 'cloud',
        good: ['walk', '친구와 잠깐 산책하며 이야기한다', '바람을 쐬니 속상한 마음이 조금 가라앉아요.', [['윤', '마음이 가벼워져요', 1]]],
        bad: ['game', '저녁 내내 게임만 한다', '잠깐 잊었지만 밤에 다시 걱정이 몰려와요.', '피하기만 하면 걱정이 나중에 더 커지기도 해요.', [['윤', '밤에 더 무거워요', -1]]] },
      { text: '마음이 가라앉은 뒤, 다음 시험은 어떻게 준비할까요?', motif: 'sun',
        good: ['plan', '틀린 문제를 보고 작은 계획을 세운다', '하루 10분 다시 보기로 정했어요.', [['윤', '할 수 있다고 느껴요', 1]]],
        bad: ['quit', '"나는 원래 못해" 하고 손을 놓는다', '다음 시험도 걱정만 커져요.', '한 번의 결과가 나를 다 말해 주지는 않아요.', [['윤', '자신감이 줄어요', -1]]] },
      { text: '계획을 사흘 지켰는데 하루를 빼먹었어요.', motif: 'star',
        good: ['again', '"괜찮아, 내일 다시 하자"고 다시 시작한다', '다음 날 다시 계획을 이어 가요.', [['윤', '꾸준히 해 나가요', 1]]],
        bad: ['stop', '하루 빼먹었으니 계획을 버린다', '처음으로 돌아가 버려요.', '빼먹은 날이 있어도 다시 시작하면 돼요.', [['윤', '다시 막막해요', -1]]] },
    ];
    const POLL = [['운동', 7], ['음악 듣기', 9], ['잠자기', 5], ['말하기', 4]];
    M.push(
      X('intro.two-roads', {
        title: '시험 망친 날, 두 갈래 길', method: '두 갈래 길 이야기', tool: 'dilemma', minutes: 6,
        levels: { easy: '교사가 첫 갈림(게임만/산책) 하나만 시연하고 결과를 읽어 준다.', base: '갈림 두 번(산책 → 작은 계획)을 지나는 시연을 보고 끝에서 근거를 고른다.', challenge: '근거 두 개(피하면 나중에 커짐·작은 계획은 다시 시작할 힘)를 모두 말한다.' },
        intro: {
          teacher: '"시험을 망친 날, 여러분이라면 어떤 길로 갈까요?" 지어낸 인물 윤의 갈림길을 띄우고 시연 단추로 산책 → 작은 계획 길을 따라가며 결과 칸을 읽는다. "게임하면 잊히니까 좋은 대처예요"라는 말에는 "잠깐 쉬는 건 괜찮아요. 그런데 피하기만 하면 밤에 어떻게 되었나요?"라고 되묻는다. 오늘은 피하는 대처와 건강한 대처를 가려 나만의 작은 계획을 세운다고 밝힌다.',
          student: '윤이 고른 두 길의 결과를 견주고, 내가 속상할 때 해 볼 수 있는 건강한 대처를 하나 짝에게 말해 보아요.',
          demo: { tool: 'dilemma', options: { title: '시험 망친 날', scene: TREE(ROADS, 2, '산책하고 작은 계획을 세운 덕분에 윤은 다시 해 볼 힘이 생겼어요.'), reasons: [{ id: 'later', text: '피하기만 하면 걱정이 나중에 커진다' }, { id: 'small', text: '작은 계획은 다시 시작할 힘이 된다' }, { id: 'forget', text: '잊어버리면 문제가 사라진다', why: '잊은 듯해도 걱정은 남아 있어요.' }] }, sequence: [{ path: ['walk'] }, { path: ['walk', 'plan'], reasons: ['later', 'small'] }] },
          art: art('a paper path splitting in two: one side a dim paper room with a glowing screen, the other a sunny paper street with two friends walking', '어느 길로 갈까?', 'sun', 'peach'),
        },
      }),
      X('intro.quick-poll', {
        title: '우리 반 대처 그림그래프', method: '나의 대처 그림그래프', tool: 'chart', minutes: 6,
        levels: { easy: '완성된 그림그래프에서 가장 많은 대처를 읽는다.', base: '시연에서 그림 단위(5명·1명)로 그래프를 만드는 차례를 보고 가장 많은 대처를 읽는다.', challenge: '건강한 대처가 전체 25명 가운데 얼마쯤인지 말로 어림한다.' },
        intro: {
          teacher: '"속상할 때 어떤 방법을 쓰나요? 어느 5학년 반을 꾸며 만든 가상 자료로 그림그래프를 만들어 볼까요?" 시연 단추로 큰 그림(5명)과 작은 그림(1명)이 줄마다 채워지는 모습을 보인다. 가장 많은 대처를 읽게 한다. "음악만 들으면 다 해결돼요"라는 말에는 "음악은 좋은 대처예요. 그런데 고민이 오래가면 무엇을 더 하면 좋을까요?"라고 묻고 \'말하기\'를 짚는다. 학생 각자의 대처를 발표하게 하지 않는다.',
          student: '그림그래프에서 가장 많은 대처를 찾고, 말하기가 왜 적을지 짝과 까닭을 하나 말해 보아요.',
          demo: { tool: 'chart', options: { type: 'picture', mode: 'build', title: '속상할 때 쓰는 대처(가상, 25명)', unit: '명', xLabel: '대처', yLabel: '학생 수', data: POLL, icons: [{ value: 5, name: '5명' }, { value: 1, name: '1명' }], icon: 'person' }, sequence: [{ icons: [[1, 2], [0, 0], [0, 0], [0, 0]] }, { icons: [[1, 2], [1, 4], [1, 0], [0, 4]] }] },
          art: art('a paper picture graph with rows of little paper people next to icons of a ball, headphones, a pillow and a speech bubble', '속상할 때 우리는?', 'star', 'buttercup'),
        },
        notes: '그래프 수치는 수업용 가상 자료다.',
      }),
      X('activity.sort', {
        title: '건강한 대처·피하는 대처 나누기', method: '건강한 대처·피하는 대처', tool: 'sortboard', minutes: 13,
        levels: { easy: '대처 카드 4장을 두 바구니에 나누고, 넣을 때 바로 맞는지 알려 주며 바구니마다 장 수가 보인다.', base: '대처 카드 6장을 나누고, 둘째 문항에서 피하는 대처 3개마다 바꿀 대처를 넣는다.', challenge: '대처 카드 8장(넣지 않을 카드 포함)을 나누고, 바꿀 대처 짝에 함정 카드가 섞인다.' },
        activity: {
          title: '대처 카드 두 바구니', tool: 'sortboard',
          teacher: '"밤새 영상 보기는 마음을 쉬게 할까요, 피하게 할까요?" 카드를 넣을 때마다 "하고 나면 문제가 줄어드나요, 그대로인가요?"를 묻는다. "쉬는 건 다 피하는 거예요"라는 말에는 "잠깐 쉬고 다시 해 보는 것은 건강한 대처예요. 계속 미루기만 하면 피하는 대처예요"라고 말해 준다. 둘째 문항에서 피하는 대처를 건강한 대처로 바꿔 넣게 한다.',
          task: '대처 카드를 건강한 대처와 피하는 대처 바구니에 나누고, 피하는 대처를 바꿀 대처를 찾아요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            SORT('대처 카드를 두 바구니에 나누어요.', { slots: ['건강한 대처', '피하는 대처'], groups: { '건강한 대처': ['운동하기', '일기 쓰기', '친구에게 털어놓기'], '피하는 대처': ['밤새 영상 보기', '숙제 미루기', '혼자 꾹 참기'] }, extra: { '건강한 대처': ['잠깐 쉬고 다시 하기'] }, traps: ['오늘 날씨 보기'] }, 0.2),
            SWAP('피하는 대처 바구니마다 바꿀 대처 카드를 넣어요.', [['밤새 영상 보기 대신', '정한 시각에 끄고 자기'], ['숙제 미루기 대신', '작은 것부터 10분 하기'], ['혼자 꾹 참기 대신', '믿는 사람에게 말하기']], { easy: 2, traps: ['영상 하나만 더 보기'] }, 0.25,
              { conclude: '피하는 대처를 알아차리면 건강한 대처로 바꿀 수 있어요. 작은 것부터 바꿔요.' }),
            { prompt: '모둠에서 내가 바꿔 보고 싶은 대처 하나를 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '피하는 대처를 바꿀 대처를 써요.', columns: ['피하는 대처', '바꿀 대처'], cells: [['밤새 영상 보기', ''], ['숙제 미루기', '']] }] },
      }),
      X('activity.week-plan', {
        title: '하루 마음 돌봄 일과 짜기', method: '일주일 마음 돌봄 계획', tool: 'kitchen', minutes: 14,
        levels: { easy: '일과 칸 3개에 알맞은 돌봄 카드를 놓는다.', base: '일과 칸 5개(운동·좋아하는 일·가족 이야기·화면 끄기·잠)에 카드를 놓는다.', challenge: '5칸을 채운 뒤 둘째 문항에서 시험 주간에도 지킬 것과 줄일 것을 나눈다.' },
        activity: {
          title: '윤의 하루 돌봄 일과', tool: 'kitchen',
          teacher: '"윤은 하루 일과에 운동·쉬기·좋아하는 일·잠을 넣기로 했어요. 어느 칸에 무엇을 넣으면 좋을까요?" 칸 이름을 소리 내어 읽고 카드를 놓게 한다. "시험 주간에는 잠을 줄여 공부해야 해요"라는 말에는 "잠이 모자라면 외운 것이 잘 떠오를까요? 시험 주간에도 잠은 지켜요"라고 말해 준다. 이 일주일 계획은 활동지에 내 것으로 다시 짜게 한다.',
          task: '윤의 일과 칸마다 알맞은 마음 돌봄 카드를 놓아요.', levels: { easy: { live: true }, base: {}, challenge: {} },
          items: [
            MATCH('윤의 일과 칸마다 알맞은 돌봄 카드를 놓아요.', [['해가 있는 오후', '밖에서 줄넘기'], ['숙제를 마친 뒤', '좋아하는 그림 그리기'], ['잠자기 30분 전', '화면 끄고 책 읽기'], ['저녁 먹는 시간', '가족과 오늘 이야기'], ['밤 9시 30분', '잠자리에 들기']], { easy: 3, mode: 'match' }, 0.2),
            SORT('시험 주간 카드를 두 칸에 나누어요.', { slots: ['시험 주간에도 지킬 것', '시험 주간에 줄일 것'], mode: 'sort', groups: { '시험 주간에도 지킬 것': ['정한 시각에 자기', '짧은 산책'], '시험 주간에 줄일 것': ['늦은 밤 게임', '밤늦도록 공부'] }, easy: 1, extra: { '시험 주간에도 지킬 것': ['아침밥 먹기'] } }, 0.25,
              { conclude: '바쁜 주에도 잠·운동·좋아하는 일을 조금씩 지키면 마음이 덜 지쳐요.' }),
            { prompt: '짝과 서로의 계획에서 가장 지키기 쉬운 칸을 하나씩 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '나의 하루 돌봄 일과를 짜요.', columns: ['언제', '무엇을'], cells: [['방과 후', ''], ['저녁', ''], ['잠자기 전', '']] }] },
        notes: '밤 9시 30분 잠자리는 지어낸 인물의 계획이다. 학생의 실제 일과를 발표하게 하지 않는다.',
      }),
      X('activity.clock', {
        title: '윤의 잠 시계', method: '잠과 쉬는 시간 시계', tool: 'clock', minutes: 13,
        levels: { easy: '정각만 맞추고(긴바늘 12 고정) 짧은바늘 자리가 연하게 칠해져 있으며, 잔 시간을 정각 보기에서 고른다.', base: '30분 단위로 잠자리 시각과 일어나는 시각을 맞추고, 잔 시간이 우리 반 약속(9시간 넘게)에 맞는지 고른다.', challenge: '30분 단위로 맞춘 뒤 셋째 문항에서 9시간 30분을 자려면 몇 시에 자야 할지 바늘을 옮긴다.' },
        activity: {
          title: '잠자리 시각과 일어나는 시각', tool: 'clock',
          teacher: '"윤은 밤 10시에 자고 아침 7시 30분에 일어나요. 몇 시간 잤을까요?" 바늘을 맞춘 뒤 시계에서 시간을 세게 한다. 우리 반 약속(9시간 넘게 자기)은 연습용 값이라고 밝힌다. "잠은 주말에 몰아 자면 돼요"라는 말에는 "날마다 비슷한 때 자고 일어나는 게 몸과 마음을 지켜요"라고 말해 준다. 학생의 실제 잠 시간을 발표하게 하지 않는다.',
          task: '윤의 잠자리 시각과 일어나는 시각을 시계에 나타내고, 잠이 충분한지 판단해요.', levels: { easy: { hourOnly: true, hourZone: true }, base: { minuteStep: 30 }, challenge: { minuteStep: 30, showMinuteMarks: false } },
          items: [
            { prompt: '윤은 밤 10시에 잠자리에 들어요. 시계에 나타내요.', toolOptions: {}, target: { h: 10, m: 0 }, difficulty: 0.1 },
            { prompt: '윤은 아침 7시 30분에 일어나요. 시계에 나타내요.', toolOptions: {}, target: { h: 7, m: 30 }, difficulty: 0.15,
              levels: { easy: { prompt: '윤은 아침 7시에 일어나요. 시계에 나타내요.', target: { h: 7, m: 0 } } } },
            { prompt: '밤 10시에 자서 이 시각에 일어났어요. 몇 시간 잤나요?', toolOptions: { readOnly: true, start: { h: 7, m: 30 }, ask: '윤이 잔 시간은?', choices: ['9시간 30분', '8시간', '10시간 30분'] }, target: { pick: 0 }, difficulty: 0.2,
              levels: {
                easy: { prompt: '밤 10시에 자서 이 시각에 일어났어요. 몇 시간 잤나요?', toolOptions: { start: { h: 7, m: 0 }, choices: ['9시간', '7시간', '10시간'] }, target: { pick: 0 } },
                challenge: { prompt: '아침 7시에 일어나며 9시간 30분 자려면 몇 시에 잘지 바늘을 놓아요.', toolOptions: { readOnly: false, start: { h: 11, m: 0 } }, target: { h: 9, m: 30 } },
              },
              conclude: '잠은 마음을 돌보는 가장 큰 쉼이에요. 날마다 비슷한 때 자고 일어나요.' },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '밤 10시에 자서 아침 7시에 일어나면 ___시간 자요.', answer: '9' }] },
        notes: '잠 시각은 지어낸 인물의 값이고, 9시간 넘게는 우리 반 약속(연습값)이다. 실제 권장 수면 시간은 질병관리청 국가건강정보포털에서 확인해 말해 준다.',
      }),
      X('activity.case', {
        title: '친구의 대처 바꿔 주기', method: '모둠 사례: 친구의 대처 바꿔 주기', tool: 'story', minutes: 14,
        levels: { easy: '하의 장면 2개에 건강한 대처 카드를 채운다.', base: '장면 3개에 건강한 대처 카드를 채우고, 둘째 문항에서 바꾼 까닭 1장을 고른다.', challenge: '장면 3개를 채우고, 바꾼 까닭 카드 2장을 함정 카드 가운데서 모두 고른다.' },
        activity: {
          title: '하의 세 장면 대처 바꾸기', tool: 'story',
          teacher: '"하는 속상할 때마다 피하는 대처를 했어요. 모둠이 하에게 건강한 대처를 알려 준다면?" 장면마다 피하는 대처를 소리 내어 읽고 빈칸에 바꿀 카드를 넣게 한다. "그냥 참으면 하가 강해져요"라는 말에는 "참기만 하면 마음이 계속 무거워요. 말하고 쉬는 것도 강한 거예요"라고 말해 준다. 이야기는 지어낸 것이다.',
          task: '하의 장면마다 피하는 대처 대신 건강한 대처 카드를 빈칸에 넣어요.', levels: { easy: { live: true }, base: {}, challenge: {} },
          items: [
            FILL('하의 장면 빈칸에 건강한 대처 카드를 넣어요.', '하', [['시험을 망쳤을 때, 방에 숨는 대신 ___.', '보호자께 마음 말하기'], ['단짝과 다퉜을 때, 밤새 영상 보는 대신 ___.', '하루 지나 먼저 말 걸기'], ['발표가 걱정될 때, 미루는 대신 ___.', '짧게 연습해 보기']], ['보호자께 마음 말하기', '하루 지나 먼저 말 걸기', '짧게 연습해 보기', '밤새 게임하기'], { easy: 2, base: 3 }, 0.2),
            PICK('하의 대처를 바꾼 까닭 카드를 골라요.', '바꾼 까닭', ['몸과 마음이 다시 힘을 얻어요', '문제를 풀 길이 보여요'], ['피하면 문제가 사라져요', '참으면 저절로 나아져요'], { easy: 1, easyTraps: 1, mode: 'pick', extraTraps: ['어른은 몰라도 돼요'] }, 0.2,
              { conclude: '피하는 대처를 건강한 대처로 바꾸면 몸과 마음이 다시 힘을 얻고 풀 길이 보여요.' }),
            { prompt: '모둠에서 하에게 해 줄 응원 한마디를 정해 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '하에게 알려 줄 건강한 대처 하나를 한 문장으로 써요.' }] },
      }),
      X('wrap.my-plan', {
        title: '이번 주 작은 실천 하나', method: '작은 실천 한 가지 정하기', tool: 'mindmap', minutes: 6,
        levels: { easy: '언제·어디서 가지 2개에 카드를 나눈다.', base: '언제·어디서·누구와 가지 3개에 카드를 나눈다.', challenge: '가지 3개에 더해, 넣지 않을 카드가 섞이고 활동지에 못 했을 때 다음 방법을 쓴다.' },
        wrap: {
          teacher: '"이번 주에 해 볼 작은 대처 하나를 언제·어디서·누구와 할지 정해 볼까요?" 생각 그물로 카드의 갈래를 함께 나눈 뒤 내 실천은 짧은 글로 쓰게 한다. "매일 두 시간 운동할래요"처럼 큰 계획이 나오면 "작게 시작하면 오래 할 수 있어요. 10분은 어때요?"라고 말해 준다. 못 한 날이 있어도 다음 날 다시 하면 된다고 짚는다.',
          exitTicket: [
            EX('mindmap', SORTN('실천 계획 카드를 언제·어디서·누구와 가지에 나누어요.', { topic: '이번 주 나의 대처', slots: ['언제', '어디서', '누구와'], easySlots: ['언제', '어디서'], groups: { 언제: ['저녁 먹은 뒤', '토요일 아침'], 어디서: ['동네 공원', '내 방 책상'], 누구와: ['동생과 함께', '혼자서'] }, traps: ['아무 때나 대충'] }, 0.15)),
            { type: 'short', prompt: '이번 주 나의 작은 실천을 언제·어디서·누구와 넣어 한 문장으로 써요.' },
            { type: 'choice', prompt: '작은 실천 계획으로 가장 알맞은 것은?', options: ['매일 두 시간 운동하기', '저녁 먹고 10분 걷기', '다시는 걱정하지 않기'], answer: 1, difficulty: 0.15, explain: '작고 구체적인 계획이 오래 지켜져요.' },
          ],
        },
        worksheet: {
          title: '이번 주 나의 대처',
          items: [
            { type: 'table', prompt: '이번 주 나의 작은 실천을 써요.', columns: ['언제', '어디서', '누구와'], cells: [['', '', '']] },
            { type: 'short', prompt: '못 한 날이 있으면 다음에 어떻게 할지 써요.' },
          ],
          easy: { note: '"저녁 먹고, 공원에서, 동생과 걷기"처럼 써도 돼요.', items: [{ type: 'draw', prompt: '이번 주 내가 할 작은 실천을 그려요.' }] },
        },
      }),
      X('wrap.adult-step', {
        title: '계획으로도 힘들면 다음 단계', method: '계획으로도 힘들면 다음 단계', tool: 'emotion', minutes: 6,
        levels: { easy: '첫 장면(윤)을 교사와 함께 읽고 할 일을 고른다.', base: '두 장면(윤·결)에서 할 일을 고르고 결과를 본다.', challenge: '셋째 질문에서 상담 선생님께 할 첫마디를 함정 카드 가운데서 고른다.' },
        wrap: {
          teacher: '"대처 계획을 해 봐도 2주째 마음이 무겁다면, 다음에는 무엇을 할까요?" 장면마다 고른 뒤 결과 글을 읽게 한다. "계획을 못 지켜서 그런 거예요, 더 참아야 해요"라는 말에는 "계획이 모자라서가 아니에요. 이럴 때는 상담 선생님과 이야기하는 것이 다음 단계예요"라고 말해 준다. 상담 선생님께 첫마디를 짧게 해도 충분하다고 짚는다.',
          exitTicket: [
            EX('emotion', BRANCH('윤에게 알맞은 다음 단계를 골라요.', '계획대로 해 봐도 2주째 마음이 무겁다는 윤.', [['more', '"더 참아 봐"라고 한다', '윤은 혼자 더 무거워져요.', '걱정'], ['counsel', '"상담 선생님과 이야기해 보자"', '이야기한 뒤 윤의 마음이 조금 가벼워져요.', '편안함'], ['bigger', '"계획을 두 배로 늘려"라고 한다', '윤은 더 지쳐요.', '속상함']], 'counsel', { who: '윤', motif: 'cloud', feeling: '걱정' }, 0.15)),
            EX('emotion', BRANCH('결에게 알맞은 다음 단계를 골라요.', '잠자기 전 화면 끄기를 지켜도 2주째 잠을 못 잔다는 결.', [['tell', '보호자와 상담 선생님께 알린다', '보호자와 선생님이 함께 도울 방법을 찾아요.', '편안함'], ['secret', '아무에게도 말하지 않는다', '결은 계속 피곤해요.', '걱정']], 'tell', { who: '결', motif: 'moon', feeling: '걱정' }, 0.15)),
            EX('emotion', PICK('상담 선생님께 할 첫마디 카드를 골라요.', '상담 선생님께 첫마디', ['"요즘 마음이 계속 무거워요"'], ['"아무 일도 아니에요"', '"그냥 왔어요, 갈게요"'], { easy: 1, easyTraps: 1, mode: 'pick' }, 0.15)),
          ],
        },
        worksheet: {
          title: '계획으로도 힘들면',
          items: [
            { type: 'choice', prompt: '대처 계획을 해도 오래 힘들면 어떻게 하나요?', options: ['더 참는다', '상담 선생님과 이야기한다', '아무에게도 말하지 않는다'], answer: '상담 선생님과 이야기한다' },
            { type: 'short', prompt: '상담 선생님께 할 첫마디를 한 문장으로 써요.' },
          ],
        },
        notes: '2주는 계획 글의 값이며, 교사는 그 전이라도 걱정되면 상담 교사와 잇는다. ' + CRISIS,
      }),
    );
  }

  // ======== 5학년 · 나를 지키는 도움 그물 (§2 초: 도움 요청) ========
  {
    const X = mk('help-network', 5);
    const NET = [['줄 1개', 2], ['줄 3개', 6], ['줄 5개', 9]];
    const TOWN = [
      { name: '우리 집', icon: 'house', at: [0, 3], legend: '우리 집' }, { name: '학교 상담실', icon: 'school', at: [2, 1] }, { name: '보건소', icon: 'hospital', at: [5, 0] },
      { name: '청소년 상담 기관', icon: 'library', at: [4, 2] }, { name: '주민센터', icon: 'office', at: [1, 0] },
    ];
    const MEAN = { school: '학교 상담실', hospital: '보건소', library: '청소년 상담 기관', office: '주민센터' };
    M.push(
      X('intro.net', {
        title: '줄이 많은 그물, 덜 떨어져요', method: '그물이 넓으면 덜 떨어져요', tool: 'chart', minutes: 6,
        levels: { easy: '그래프에서 공을 가장 많이 받아 낸 그물을 읽는다.', base: '줄이 늘수록 받아 낸 횟수가 늘어나는 까닭(한 줄이 끊겨도 다른 줄이 받친다)을 고른다.', challenge: '내 도움 그물의 줄(도와줄 사람) 수를 마음속으로 세어 본다(발표하지 않음).' },
        intro: {
          teacher: '"그물 줄이 1개일 때와 5개일 때, 공을 10번 던지면 몇 번 받아 낼까요?" 가상 실험 그래프를 띄우고 시연 단추로 \'줄 5개\'를 고르는 모습을 보인다. "한 줄이 끊겨도 다른 줄이 받쳐 줘요. 도움도 그래요"라고 잇는다. "도와줄 사람은 한 명이면 충분해요"라는 말에는 "그 사람이 바쁘거나 멀리 있으면 어떻게 될까요?"라고 되묻는다. 숫자는 가상이다.',
          student: '그물 줄이 여럿이면 왜 공이 덜 떨어지는지 말하고, 사람에게도 도움 줄이 여럿이면 좋은 까닭을 짝에게 말해 보아요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '그물 줄 수와 받아 낸 공(가상, 10번 던짐)', unit: '번', xLabel: '그물', yLabel: '받아 낸 횟수', data: NET, max: 10, question: '공을 가장 많이 받아 낸 그물은?', choices: NET.map((x) => x[0]) }, sequence: [{ pick: 2 }] },
          art: art('a wide paper safety net woven from many paper strings catching a small paper ball, with a single-string net beside it', '도움 줄이 많으면 든든해요', 'heart', 'peach'),
        },
        notes: '그래프는 가상 실험이다. 학생의 도와줄 사람 수를 발표하게 하지 않는다.',
      }),
      X('intro.myth', {
        title: '상담에 대한 오해 OX', method: '상담 오해 OX', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 말 카드 3장을 읽어 주고 맞아요/아니에요 칸에 넣는 시연을 본다.', base: '말 카드 5장이 칸에 들어가는 시연을 보고 카드마다 까닭을 말한다.', challenge: '\'아니에요\' 카드를 바른 말로 고쳐 짝에게 말한다.' },
        intro: {
          teacher: '"상담실에 대해 들어 본 말이 있나요? 맞는 말일까요?" 시연 단추로 말 카드가 맞아요·아니에요 칸으로 들어가는 모습을 보이고, 카드마다 까닭을 짧게 말해 준다. "상담은 문제 있는 아이만 가요"라는 말에는 "고민은 누구에게나 있어요. 작은 고민도, 친구 걱정도 이야기할 수 있어요"라고 말해 준다. 고민 이야기는 소중히 다뤄지지만, 생명·안전이 걸리면 어른들이 함께 돕는다는 점도 짚는다.',
          student: '\'아니에요\' 칸에 들어간 말 하나를 골라, 바른 말로 고쳐 짝에게 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'sort', slots: ['맞아요', '아니에요'], cards: ['상담은 문제 있는 사람만 가요', '작은 고민도 상담할 수 있어요', '도움 요청은 약한 사람이 해요', '친구 걱정도 상담할 수 있어요', '상담하면 반 친구들이 다 알게 돼요'], shuffle: false }, sequence: [{ sort: { 맞아요: ['작은 고민도 상담할 수 있어요'], 아니에요: ['상담은 문제 있는 사람만 가요', '도움 요청은 약한 사람이 해요'] } }, { sort: { 맞아요: ['작은 고민도 상담할 수 있어요', '친구 걱정도 상담할 수 있어요'], 아니에요: ['상담은 문제 있는 사람만 가요', '도움 요청은 약한 사람이 해요', '상담하면 반 친구들이 다 알게 돼요'] } }] },
          art: art('a friendly paper door labeled with a heart, with paper speech bubbles marked O and X floating beside it', '상담실, 오해와 사실', 'heart', 'lavender'),
        },
        notes: '상담 내용이 언제 다른 어른과 나뉘는지(생명·안전)는 학교 상담 교사의 안내 문구로 확인해 말해 준다.',
      }),
      X('activity.map', {
        title: '우리 동네 도움 지도', method: '우리 동네 도움 지도', tool: 'map', minutes: 13,
        levels: { easy: '도움 기관 2곳(학교 상담실·보건소)의 범례를 채우고, 이름이 보이는 지도에서 핀을 꽂으며, 거리는 칸 번호가 보이는 길로 잰다.', base: '도움 기관 4곳의 범례를 채우고, 이름 없이 기호로 핀을 꽂은 뒤 축척으로 거리를 잰다.', challenge: '4곳 범례에 헷갈리는 이름이 섞이고, 칸 번호 없이 축척으로 집에서 주민센터까지 거리를 잰다.' },
        activity: {
          title: '도움 기관 기호와 거리', tool: 'map',
          teacher: '"우리 동네에서 도움을 받을 수 있는 곳은 어디일까요? 기호를 보고 범례를 채워 봐요." 기관마다 어떤 도움을 주는지 한 문장씩 말해 준다(상담실: 고민 듣기, 보건소: 몸과 마음 건강, 청소년 상담 기관: 방과 후 고민 상담, 주민센터: 생활 도움 안내). "기관은 어른만 가는 곳이에요"라는 말에는 "어린이도 보호자와 함께 갈 수 있어요"라고 말해 준다. 실제 기관 번호는 학교가 확인해 활동지에 넣는다.',
          task: '가상 동네 칸 지도에서 도움 기관 기호의 범례를 채우고, 핀을 꽂고, 축척으로 거리를 재요.', levels: { easy: { showCells: true }, base: {}, challenge: {} },
          items: [
            { prompt: '도움 기관 기호마다 범례의 이름을 골라요.', toolOptions: { mode: 'legend', grid: [6, 4], title: '가상 우리 동네', places: TOWN, meanings: MEAN }, target: { legend: MEAN }, difficulty: 0.2,
              levels: {
                easy: { prompt: '도움 기관 기호 두 개의 범례 이름을 골라요.', toolOptions: { places: [TOWN[1], TOWN[2]], meanings: { school: MEAN.school, hospital: MEAN.hospital } }, target: { legend: { school: MEAN.school, hospital: MEAN.hospital } } },
                challenge: { prompt: '헷갈리는 이름도 섞였어요. 기호마다 범례 이름을 골라요.', toolOptions: { extra: ['게임방', '편의점'] } },
              } },
            { prompt: '방과 후 청소년 고민을 들어 주는 곳에 핀을 꽂아요.', toolOptions: { grid: [6, 4], title: '가상 우리 동네', places: TOWN, names: false }, target: { place: '청소년 상담 기관' }, difficulty: 0.2,
              levels: { easy: { prompt: '방과 후 고민을 들어 주는 곳에 핀을 꽂아요(이름 보임).', toolOptions: { names: true } } } },
            { prompt: '축척을 보고 우리 집에서 주민센터까지 거리를 넣어요.', toolOptions: { mode: 'scale', grid: [6, 4], title: '가상 우리 동네', places: TOWN, scale: { cell: 100, unit: 'm' } }, target: { from: '우리 집', to: '주민센터' }, difficulty: 0.25,
              conclude: '우리 동네에는 학교 밖에도 도움 기관이 여럿 있어요. 가까운 곳을 알아 두면 필요할 때 찾아가기 쉬워요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '도움 기관과 하는 일을 써요.', columns: ['기관', '하는 일'], cells: [['학교 상담실', ''], ['보건소', ''], ['청소년 상담 기관', '']], answer: '고민 듣기, 몸과 마음 건강, 방과 후 고민 상담' }] },
        notes: `지도는 가상 동네다. 실제 동네 기관 이름·위치·번호는 학교가 확인해 ${NUM} 자리에 넣는다. 학생의 집 위치를 묻거나 그리게 하지 않는다.`,
      }),
      X('activity.who-what', {
        title: '도와주는 어른과 하는 일 잇기', method: '도움 자원과 하는 일 잇기', tool: 'mindmap', minutes: 14,
        levels: { easy: '가지 2개(담임·상담 선생님)에 하는 일 카드 4장을 잇고, 상황 카드는 가지마다 1장을 놓는다.', base: '가지 4개(담임·상담·보건 선생님·보호자)에 하는 일 카드 8장을 잇고, 상황 카드 4장을 놓는다.', challenge: '하는 일 가지에 넣지 않을 카드가 섞이고, 상황 카드가 6장으로 늘어난다.' },
        activity: {
          title: '어른마다 도울 수 있는 일', tool: 'mindmap',
          teacher: '"담임 선생님, 상담 선생님, 보건 선생님, 보호자는 각각 어떤 일을 도와줄 수 있을까요?" 카드를 이을 때마다 "그분께 이 일을 부탁하면 어떻게 도와줄까?"를 묻는다. "아무 선생님께나 말하면 안 돼요"라는 말에는 "어느 분께 말해도 괜찮아요. 그분이 알맞은 분과 이어 줘요"라고 말해 준다. 둘째 문항에서는 가장 먼저 찾아갈 분을 고르게 한다.',
          task: '도와주는 어른 가지마다 그분이 할 수 있는 일 카드를 잇고, 상황 카드를 알맞은 가지에 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTN('하는 일 카드를 도와주는 어른 가지에 이어요.', { topic: '나를 도와주는 어른', slots: ['담임 선생님', '상담 선생님', '보건 선생님', '보호자'], easySlots: ['담임 선생님', '상담 선생님'],
              groups: { '담임 선생님': ['반 친구 관계 살펴 주기', '수업 중 어려움 듣기'], '상담 선생님': ['고민을 오래 들어 주기', '마음 상담 이어 가기'], '보건 선생님': ['아플 때 돌봐 주기', '잠·몸 건강 알려 주기'], 보호자: ['집에서 곁에 있어 주기', '기관에 함께 가 주기'] },
              traps: ['숙제 대신 해 주기'] }, 0.2),
            SORT('상황 카드를 가장 먼저 찾아갈 어른 가지에 놓아요.', { topic: '누구에게 먼저?', slots: ['담임 선생님', '상담 선생님', '보건 선생님', '보호자'], groups: { '담임 선생님': ['모둠에서 자꾸 혼자 남음'], '상담 선생님': ['친구 관계 고민이 오래감'], '보건 선생님': ['쉬는 시간마다 배가 아픔'], 보호자: ['집에서 밤에 잠이 안 옴'] }, easy: [1, 1, 0, 0], extra: { '상담 선생님': ['걱정이 몇 주째 이어짐'], '보건 선생님': ['머리가 자꾸 무거움'] } }, 0.25,
              { conclude: '어른마다 도울 수 있는 일이 달라요. 누구에게 말해도 그분이 알맞은 분과 이어 줘요.' }),
            { prompt: '모둠에서 "어느 분께 먼저 말할지 헷갈린 상황"을 하나 골라 이야기해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '도와주는 어른과 부탁할 일을 써요.', columns: ['어른', '부탁할 일'], cells: [['상담 선생님', ''], ['보건 선생님', '']] }] },
      }),
      X('activity.role', {
        title: '상담실 문 두드리기', method: '상담실 문 두드리기 역할극', tool: 'story', minutes: 13,
        levels: { easy: '상담실에 처음 간 장면의 말풍선 1개(인사)를 채우고, 상담실 가는 차례 카드 3장을 놓는다.', base: '말풍선 3개(인사·고민 한 줄·부탁)를 채우고 차례 카드 4장을 놓은 뒤 모둠에서 해 본다.', challenge: '말풍선 4개(쪽지로 신청하기 더함)를 채우고, 차례 카드에서 틀린 카드 하나를 뺀다.' },
        activity: {
          title: '처음 가는 상담실 말풍선', tool: 'story',
          teacher: '"상담실에 처음 가면 무슨 말부터 할까요?" 말풍선을 채운 뒤 모둠이 상담 선생님·학생 역할을 나눠 짧게 해 보게 한다. 대본은 "친구 일로 고민이 있어서 왔어요"처럼 가볍게 쓰고, 자기 고민을 꺼내 말하게 하지 않는다. "무슨 말을 할지 몰라서 못 가요"라는 말에는 "고민 한 줄이면 충분해요. 말이 어려우면 쪽지로 신청할 수도 있어요"라고 말해 준다.',
          task: '상담실에 처음 간 온의 말풍선을 채우고, 상담실에 가는 차례를 놓아요.', levels: { easy: { live: true }, base: {}, challenge: {} },
          items: [
            FILL('온의 말풍선 빈칸에 알맞은 카드를 넣어요.', '온', [['(문을 두드리며) ___', '"안녕하세요, 5학년 온이에요"'], ['고민 한 줄: ___', '"친구 일로 고민이 있어요"'], ['부탁: ___', '"이야기를 들어 주실 수 있나요?"'], ['쪽지로 신청할 때: ___', '"상담하고 싶어요. 쉬는 시간 가능해요"']], ['"안녕하세요, 5학년 온이에요"', '"친구 일로 고민이 있어요"', '"이야기를 들어 주실 수 있나요?"', '"상담하고 싶어요. 쉬는 시간 가능해요"', '"그냥 지나가다 왔어요"'], { easy: 1, base: 3 }, 0.2),
            ORDER('상담실에 가는 차례 카드를 놓아요.', ['상담실 시간 알아보기', '문 두드리고 인사하기', '고민 한 줄 말하기', '다음 약속 정하기'], { easy: [0, 1, 2], trap: '친구들에게 먼저 알리기' }, 0.2,
              { conclude: '상담실은 시간을 알아보고, 인사하고, 고민 한 줄만 말해도 시작할 수 있어요.' }),
            { prompt: '모둠에서 상담 선생님과 학생 역할을 나눠 말풍선대로 해 봐요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '상담실에 처음 가면 할 첫마디를 한 문장으로 써요.' }] },
        notes: '역할극은 친구 일·작은 고민처럼 가벼운 장면만 한다. 학생 자신의 고민을 연기하거나 발표하게 하지 않는다. 학교 상담실 신청 방법(쪽지·신청함·누리집)은 실제 방법으로 바꿔 말해 준다.',
      }),
      X('activity.net-make', {
        title: '나의 도움 그물 꾸미기', method: '나의 도움 그물 만들기', tool: 'collage', minutes: 14,
        levels: { easy: '가정(하트)·학교(네모)·지역(동그라미) 조각을 하나씩, 모두 3개 이상 붙인다.', base: '세 갈래 조각을 붙여 매듭 5개 이상을 만들고 점검 3칸을 표시한다.', challenge: '매듭 5개에 연락 방법을 아는 매듭마다 별 조각을 2개 이상 붙이고 점검 4칸을 표시한다.' },
        activity: {
          title: '도움 그물 매듭 붙이기', tool: 'collage',
          teacher: '"하트는 가정, 네모는 학교, 동그라미는 지역 도움이에요. 내 그물에 매듭을 붙여 볼까요?" 조각을 붙이며 매듭마다 누구인지 마음속으로 떠올리게 한다(이름을 쓰거나 발표하지 않는다). "나는 도와줄 사람이 없어요"라는 말이 나오면 "학교 선생님들과 지역 기관도 그물 줄이 돼요. 오늘 하나를 더 이어 봐요"라고 말해 주고 뒤에 따로 살핀다. 연락 방법을 아는 매듭에는 별을 붙이게 한다.',
          task: '가정·학교·지역 도움 조각을 붙여 나의 도움 그물을 꾸미고 점검 칸에 표시해요.', levels: { easy: { shapes: ['heart', 'square', 'circle'] }, base: { shapes: ['heart', 'square', 'circle', 'star'] }, challenge: { shapes: ['heart', 'square', 'circle', 'star', 'leaf'] } },
          items: [
            { prompt: '가정·학교·지역 조각을 하나씩 붙여 그물 매듭을 만들어요.', toolOptions: {}, target: { has: [{ shape: 'heart', min: 1 }, { shape: 'square', min: 1 }, { shape: 'circle', min: 1 }], pieces: { min: 5 } }, difficulty: 0.1,
              levels: { easy: { prompt: '가정·학교·지역 조각을 하나씩 붙여요(조각 3개 이상).', target: { has: [{ shape: 'heart', min: 1 }, { shape: 'square', min: 1 }, { shape: 'circle', min: 1 }], pieces: { min: 3 } } } } },
            { prompt: '연락 방법을 아는 매듭 옆에 별 조각을 붙여요.', toolOptions: {}, target: { has: [{ shape: 'star', min: 1 }], pieces: { min: 5 } }, difficulty: 0.15,
              levels: { easy: { prompt: '연락 방법을 아는 매듭 옆에 별 조각을 붙여요.', toolOptions: { shapes: ['heart', 'square', 'circle', 'star'] }, target: { has: [{ shape: 'star', min: 1 }], pieces: { min: 3 } } }, challenge: { prompt: '연락 방법을 아는 매듭마다 별 조각을 2개 이상 붙여요.', target: { has: [{ shape: 'star', min: 2 }], pieces: { min: 6 } } } } },
            { prompt: '그물을 다 꾸미고 해낸 것에 스스로 표시해요.', toolOptions: {}, target: { selfCheck: ['가정 매듭을 붙였다', '학교 매듭을 붙였다', '지역 매듭을 붙였다'], minPieces: 5 }, difficulty: 0.1,
              levels: { easy: { prompt: '그물을 꾸미고 해낸 것에 스스로 표시해요(두 칸).', target: { selfCheck: ['가정 매듭을 붙였다', '학교 매듭을 붙였다'], minPieces: 3 } }, challenge: { prompt: '그물을 꾸미고 해낸 것에 스스로 표시해요(네 칸).', target: { selfCheck: ['가정 매듭을 붙였다', '학교 매듭을 붙였다', '지역 매듭을 붙였다', '연락 방법을 별로 표시했다'], minPieces: 6 } } },
              conclude: '도움 그물은 여러 줄일수록 든든해요. 가정·학교·지역에 한 줄씩 이어 두어요.' },
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '혼자 보기(내지 않아요): 내 그물에 있는 줄에 표시해요.', options: ['집 어른', '학교 어른', '지역 기관', '믿는 친구'] }] },
        notes: '그물에 사람 이름을 쓰게 하지 않는다. "도와줄 사람이 없다"는 말을 한 학생은 수업 뒤 따로 살피고 상담 교사와 잇는다. ' + CRISIS,
      }),
      X('wrap.check', {
        title: '도움 그물 점검표', method: '도움 그물 점검표', tool: 'kitchen', minutes: 6,
        levels: { easy: '튼튼한 도움 그물의 점검 칸 3개를 함정 카드와 가려 표시한다.', base: '점검 칸 5개를 가려 표시하고, 빈 곳을 채울 계획을 고른다.', challenge: '점검 칸 5개를 표시한 뒤 활동지에 빈 곳을 채울 날짜를 정해 쓴다.' },
        wrap: {
          teacher: '"튼튼한 도움 그물에는 무엇이 있어야 할까요?" 점검 칸을 함께 읽고 표시하게 한다. 내 그물 점검은 활동지 혼자 보기 칸에 하고 걷지 않는다. \'게임 속 모르는 사람\'을 고른 학생에게 "얼굴을 모르는 사람보다 가까이에서 도와줄 어른이 그물을 튼튼하게 해요"라고 말해 준다. 빈 곳이 있으면 이번 주에 한 줄을 더 잇는 계획을 고르게 한다.',
          exitTicket: [
            EX('kitchen', CHK('튼튼한 도움 그물에 있으면 좋은 것만 표시해요.', '도움 그물 점검표', ['집 어른 1명', '학교 어른 2명', '연락 방법 알기', '믿는 친구 1명', '지역 상담 번호 알기'], ['게임 속 모르는 사람', '비밀만 지켜 주는 친구'], { easy: 3, base: 5 }, 0.15)),
            { type: 'choice', prompt: '도움 그물에 빈 곳이 있을 때 알맞은 계획은?', options: ['이번 주에 상담실 위치 알아 두기', '빈 곳은 그냥 두기', '모르는 사람에게 부탁하기'], answer: 0, difficulty: 0.15, explain: '작은 한 줄을 더 이으면 그물이 튼튼해져요.' },
            { type: 'short', prompt: '이번 주에 도움 그물에 더 이을 줄 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '나의 도움 그물 점검',
          items: [
            { type: 'check', prompt: '혼자 보기(내지 않아요): 내 그물에 있는 것에 표시해요.', options: ['집 어른 1명', '학교 어른 2명', '연락 방법 알기', '믿는 친구 1명'] },
            { type: 'table', prompt: '빈 곳을 채울 계획을 써요.', columns: ['채울 줄', '언제'], cells: [['', '']] },
          ],
        },
        notes: '혼자 보기 칸은 걷거나 확인하지 않는다. ' + CRISIS,
      }),
      X('wrap.pocket', {
        title: '지갑 속 도움 카드', method: '지갑 도움 카드', tool: 'wordcards', minutes: 6,
        levels: { easy: '상황 카드 3장 가운데 학교 안 어른에게 갈 카드 2장을 뒤집는다.', base: '상황 카드 5장 가운데 학교 안 어른에게 갈 카드 3장을 뒤집어 찾아갈 사람을 확인한다.', challenge: '카드를 뒤집은 뒤 친구에게 줄 도움 카드 하나를 짧은 글로 더 만든다.' },
        wrap: {
          teacher: '"앞면은 상황, 뒷면은 찾아갈 사람이에요. 학교 안 어른에게 갈 상황만 뒤집어 볼까요?" 뒤집기 전에 누구일지 먼저 말해 보게 한다. "밤에 걱정되면 아침까지 참아요"라는 말에는 "집에 계신 보호자께 바로 말해요. 학교 밖에서는 학교가 알려 준 상담 번호도 있어요"라고 말해 준다. 내 도움 카드는 활동지에 써서 가져가게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'wordcards', options: { mode: 'flip', speak: false, words: [{ en: '보건 선생님', ko: '쉬는 시간마다 배가 아파요' }, { en: '보호자', ko: '밤에 걱정돼 잠이 안 와요' }, { en: '상담 선생님', ko: '고민이 몇 주째 이어져요' }, { en: '지역 상담 번호', ko: '방학 중 혼자 걱정돼요' }, { en: '담임 선생님', ko: '모둠에서 자꾸 혼자 남아요' }] }, prompt: '학교 안 어른에게 갈 상황 카드만 뒤집어요.', target: { flip: ['보건 선생님', '상담 선생님', '담임 선생님'] }, difficulty: 0.15,
              levels: { easy: { prompt: '학교 안 어른에게 갈 상황 카드만 뒤집어요(3장 가운데).', toolOptions: { words: [{ en: '보건 선생님', ko: '쉬는 시간마다 배가 아파요' }, { en: '보호자', ko: '밤에 걱정돼 잠이 안 와요' }, { en: '상담 선생님', ko: '고민이 몇 주째 이어져요' }] }, target: { flip: ['보건 선생님', '상담 선생님'] } } } },
            { type: 'choice', prompt: '방학 중 집에서 혼자 걱정될 때 먼저 할 일은?', options: ['보호자께 말한다', '개학까지 참는다', '모르는 사람에게 묻는다'], answer: 0, difficulty: 0.15, explain: '가까이 있는 보호자께 먼저 말해요.' },
            { type: 'short', prompt: '친구에게 줄 도움 카드 한 장을 상황과 찾아갈 사람으로 써요.' },
          ],
        },
        worksheet: {
          title: '지갑 속 도움 카드',
          items: [
            { type: 'table', prompt: '내 도움 카드를 만들어요.', columns: ['이럴 때', '찾아갈 사람'], cells: [['', ''], ['', '']] },
            { type: 'short', prompt: `선생님이 알려 준 ${NUM}를 카드에 옮겨 적어요.` },
          ],
          easy: { note: '"배가 아프면 → 보건 선생님"처럼 써요.', items: [{ type: 'draw', prompt: '내 도움 카드의 앞면을 그려요.' }] },
        },
      }),
    );
  }

  // ======== 6학년 · 사춘기 마음 변화와 자기 돌봄 (§2 초: 감정 알아차리기 — 사춘기 정서 변화는 일반 지식) ========
  {
    const X = mk('puberty-feel', 6);
    const WAVE = [['아침', 6], ['1교시', 5], ['점심', 8], ['5교시', 3], ['방과 후', 5], ['잠자기 전', 6]];
    const COMPARE = [
      { text: '온이 밤에 친구들의 여행 사진을 보다가 "나만 별로야"라는 생각에 마음이 가라앉았어요.', motif: 'moon',
        good: ['off', '앱을 끄고 잠깐 밖에 나가 걷는다', '바람을 쐬니 마음이 조금 가라앉아요.', [['온', '기분이 조금 나아져요', 1]]],
        bad: ['scroll', '계속 사진을 넘겨 보며 견준다', '견줄수록 마음이 더 무거워져요.', '계속 견주면 마음이 더 가라앉기 쉬워요.', [['온', '더 우울해져요', -1]]] },
      { text: '다음 날에도 사진을 보면 마음이 가라앉아요.', motif: 'cloud',
        good: ['talk', '믿는 친구나 보호자에게 마음을 말한다', '"사진은 좋은 순간만 골라 올린대"라는 말을 들어요.', [['온', '덜 외로워요', 1]]],
        bad: ['hide', '아무렇지 않은 척 숨긴다', '혼자 생각만 커져요.', '마음을 숨기면 혼자 더 무거워져요.', [['온', '혼자 무거워요', -1]]] },
      { text: '며칠이 지나도 비슷한 마음이 자주 들어요.', motif: 'wind',
        good: ['counsel', '보호자와 함께 상담 선생님을 찾아간다', '견주는 마음을 다루는 방법을 함께 찾아요.', [['온', '도움을 받아요', 1]]],
        bad: ['alone', '친구들을 모두 피하고 혼자 지낸다', '좋아하던 친구들과도 멀어져요.', '피하기보다 도움을 청하면 마음이 나아질 수 있어요.', [['온', '더 외로워져요', -1]]] },
    ];
    // 학교 칸 지도(가상, 6학년): 보건실·상담실 + 헷갈리는 곳
    const SCHOOL6 = [
      { name: '보건실', icon: 'hospital', at: [0, 1] }, { name: '상담실', icon: 'office', at: [3, 3] }, { name: '6학년 1반 교실', icon: 'school', at: [5, 1] },
      { name: '과학실', icon: 'museum', at: [2, 0] }, { name: '도서관', icon: 'library', at: [4, 0] },
    ];
    M.push(
      X('intro.wave', {
        title: '하의 마음 파도 그래프', method: '마음 파도 그래프', tool: 'chart', minutes: 6,
        levels: { easy: '꺾은선그래프에서 기분이 가장 낮은 때를 함께 읽는다.', base: '기분이 크게 바뀐 때(점심 → 5교시)를 찾고, 교사가 들려주는 까닭 가운데 알맞은 것을 고른다.', challenge: '파도를 잔잔하게 할 행동(숨 고르기·짝에게 말하기)을 그래프의 그때에 말로 표시한다.' },
        intro: {
          teacher: '"이 그래프는 지어낸 6학년 하의 하루 기분이에요. 숫자는 가상이에요. 기분이 가장 크게 바뀐 때는 언제일까요?" 시연 단추로 \'5교시\'를 고르는 모습을 보인다. "점심에 친구들과 웃다가 5교시 발표에서 실수했대요"라고 까닭을 들려준다. "기분이 자주 바뀌면 내가 이상한 거예요"라는 말에는 "사춘기에는 마음의 파도가 커질 수 있어요. 자연스러운 일이고, 잔잔하게 하는 방법도 있어요"라고 말해 준다.',
          student: '하의 기분이 크게 바뀐 때를 찾고, 그때 하가 해 볼 수 있는 일을 하나 짝에게 말해 보아요.',
          demo: { tool: 'chart', options: { type: 'line', mode: 'read', title: '하의 하루 기분(가상, 10점이 가장 좋음)', unit: '점', xLabel: '때', yLabel: '기분', data: WAVE, max: 10, question: '기분이 가장 낮은 때는?', choices: WAVE.map((x) => x[0]) }, sequence: [{ pick: 3 }] },
          art: art('a gentle paper wave line rising and falling across a paper sky, with a small paper surfer child balancing on it', '마음에도 파도가 있어요', 'wind', 'sky'),
        },
        notes: '그래프 수치는 수업용 가상 자료다. 학생의 기분을 점수로 발표하게 하지 않는다.',
      }),
      X('intro.anon-box', {
        title: '선생님의 예시 고민 상자', method: '익명 고민 상자 열기', tool: 'mindmap', minutes: 6,
        levels: { easy: '교사가 예시 고민 카드 4장을 외모·친구 가지 2개에 나누는 시연을 본다.', base: '예시 고민 카드 8장이 외모·친구·성적·가족 가지 4개로 나뉘는 시연을 본다.', challenge: '가장 카드가 많은 가지를 고르고, 그 고민은 누구에게 이야기하면 좋을지 말한다.' },
        intro: {
          teacher: '"선생님이 여러 6학년의 고민을 떠올려 예시 카드를 만들었어요. 여러분의 고민을 묻는 게 아니에요." 시연 단추로 카드가 외모·친구·성적·가족 가지로 나뉘는 모습을 보인다. "이런 고민은 나만 해요"라는 말에는 "많은 친구가 비슷한 고민을 해요. 이야기하면 덜 무거워져요"라고 말해 준다. 오늘은 마음의 변화를 알고 스스로 돌보는 방법을 배운다고 밝힌다.',
          student: '예시 고민 가운데 6학년이 많이 할 것 같은 고민 가지를 하나 고르고, 그 까닭을 짝에게 말해 보아요.',
          demo: { tool: 'mindmap', options: { topic: '6학년 예시 고민', slots: ['외모', '친구', '성적', '가족'], cards: ['여드름이 신경 쓰여요', '단짝이 다른 친구와 놀아요', '수학 점수가 걱정돼요', '동생만 칭찬받는 것 같아요', '키가 늦게 자라요', '단톡방에서 빠진 것 같아요', '시험이 부담돼요', '보호자와 자주 부딪혀요'] }, sequence: [{ sort: { 외모: ['여드름이 신경 쓰여요', '키가 늦게 자라요'], 친구: ['단짝이 다른 친구와 놀아요', '단톡방에서 빠진 것 같아요'] } }, { sort: { 외모: ['여드름이 신경 쓰여요', '키가 늦게 자라요'], 친구: ['단짝이 다른 친구와 놀아요', '단톡방에서 빠진 것 같아요'], 성적: ['수학 점수가 걱정돼요', '시험이 부담돼요'], 가족: ['동생만 칭찬받는 것 같아요', '보호자와 자주 부딪혀요'] } }] },
          art: art('a paper box with a heart-shaped slot and folded paper notes spilling out into four small paper baskets', '고민은 누구에게나 있어요', 'heart', 'lavender'),
        },
        notes: '카드는 모두 교사가 지어낸 예시다. 실제로 학생 고민을 받는 상자를 쓰려면 이름을 쓰지 않게 하고, 걱정되는 쪽지는 상담 교사와 잇는다. ' + CRISIS,
      }),
      X('activity.self-care', {
        title: '자기 돌봄 점검표 읽기', method: '자기 돌봄 점검표', tool: 'kitchen', minutes: 13,
        levels: { easy: '자기 돌봄 칸 3개를 함정 카드와 가려 표시하고, 하의 기록에서 부족한 하나를 고르며, 계획 짝 2쌍을 잇는다.', base: '자기 돌봄 칸 5개(잠·밥·운동·쉬기·말하기)를 표시하고 부족한 하나를 고른 뒤 계획 짝 3쌍을 잇는다.', challenge: '계획 짝에 맞지 않는 카드가 섞이고, 내 점검은 활동지 혼자 보기 칸에 해 부족한 항목의 작은 계획을 쓴다.' },
        activity: {
          title: '하의 일주일 돌봄 기록', tool: 'kitchen',
          teacher: '"마음이 출렁일 때 나를 돌보는 다섯 가지는 무엇일까요? 잠·밥·운동·쉬기·말하기예요." 점검표 칸을 함께 고른 뒤, 지어낸 인물 하의 일주일 기록에서 가장 부족한 것을 찾게 한다. 내 점검은 활동지 혼자 보기 칸에만 하고 걷지 않는다. "속상할 땐 혼자 삭이는 게 나아요"라는 말에는 "말하기도 나를 돌보는 방법이에요"라고 말해 준다.',
          task: '자기 돌봄 칸을 고르고, 하의 기록에서 가장 부족한 것을 찾아 작은 계획과 이어요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            CHK('자기 돌봄 점검표에 넣을 칸만 표시해요.', '자기 돌봄 점검표', ['정한 시각에 잠들기', '아침밥 챙겨 먹기', '하루 한 번 몸 움직이기', '좋아하는 일로 쉬기', '믿는 사람과 이야기하기'], ['밤늦게 화면 보기', '속상해도 혼자 삭이기'], { easy: 3, base: 5 }, 0.15),
            { prompt: '하의 일주일 기록을 보고 가장 부족한 것을 골라요.', toolOptions: { mode: 'pick', basket: '가장 부족한 것', cards: ['잠: 7일 가운데 6일 지킴', '밥: 7일 모두 지킴', '운동: 7일 가운데 1일 함', '말하기: 7일 가운데 4일 함'] }, target: { pick: ['운동: 7일 가운데 1일 함'] }, difficulty: 0.2,
              levels: { easy: { toolOptions: { cards: ['밥: 7일 모두 지킴', '운동: 7일 가운데 1일 함'] } } } },
            MATCH('부족한 것마다 알맞은 작은 계획을 이어요.', [['운동이 부족해요', '쉬는 시간 줄넘기 5분'], ['잠이 부족해요', '잠자기 전 화면 끄기'], ['말하기가 부족해요', '저녁에 오늘 일 하나 말하기']], { easy: 2, mode: 'match', traps: ['주말에 몰아서 자기'] }, 0.2,
              { conclude: '잠·밥·운동·쉬기·말하기 가운데 부족한 하나를 작게 채우면 마음의 파도가 잔잔해져요.' }),
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '혼자 보기(내지 않아요): 이번 주 내가 지킨 돌봄에 표시해요.', options: ['잠', '밥', '운동', '쉬기', '말하기'] }] },
        notes: '하의 기록은 지어낸 것이다. 활동지 혼자 보기 칸은 걷지 않는다.',
      }),
      X('activity.compare', {
        title: 'SNS 사진과 견주는 마음', method: 'SNS 비교 판단', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번(계속 견주기/앱 끄고 걷기)에서 고르고 근거 한 장을 고른다.', base: '갈림 2번(숨기기/마음 말하기)을 지나 근거를 고른다.', challenge: '갈림 3번(혼자 피하기/상담 선생님 찾기)까지 지나 근거 두 개를 모두 고르고 다른 길과 견준다.' },
        activity: {
          title: '갈림길: 친구들의 여행 사진', tool: 'dilemma',
          teacher: '"친구들의 멋진 사진을 보다가 마음이 가라앉은 적, 누구에게나 있을 수 있어요. 온이라면 어떻게 할까요?" 고를 때마다 결과 칸을 읽게 한다. "다른 사람들은 다 행복한데 나만 아니에요"라는 말에는 "사진은 좋은 순간만 골라 올린 거예요. 사진 밖의 하루는 보이지 않아요"라고 말해 준다. 이야기는 지어낸 것이다.',
          task: '온의 갈림길마다 고르고, 결과를 읽은 뒤 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '친구들의 여행 사진',
            steps: COMPARE,
            ending: '앱을 끄고, 마음을 말하고, 도움을 청한 덕분에 온의 마음이 다시 단단해졌어요.',
            reasons: [{ id: 'part', text: 'SNS 사진은 생활의 일부만 보여 준다' }, { id: 'share', text: '마음을 말하면 덜 무거워진다' }, { id: 'better', text: '다른 사람은 모두 나보다 낫다', why: '사진은 좋은 순간만 골라 올린 거예요.' }, { id: 'hide', text: '힘든 마음은 숨겨야 한다', why: '숨기면 혼자 더 무거워져요.' }],
            good: ['part', 'share'],
            talk: '모둠에서 "견주는 마음이 들 때 나에게 해 줄 말"을 한 가지씩 말해요.',
            conclude: '견주는 마음이 들면 잠깐 멈추고, 마음을 말하고, 오래가면 도움을 청해요.',
          }),
        },
        worksheet: { items: [{ type: 'choice', prompt: 'SNS 사진을 보며 견주는 마음이 들 때 알맞은 것은?', options: ['계속 넘겨 본다', '앱을 끄고 믿는 사람에게 말한다', '혼자 숨긴다'], answer: '앱을 끄고 믿는 사람에게 말한다' }] },
      }),
      X('activity.body', {
        title: '몸 변화와 마음 변화 잇기', method: '몸 변화와 마음 변화 잇기', tool: 'body', minutes: 13,
        levels: { easy: '문항마다 몸 자리 이름이 보이고, 마음 보기 두 개 가운데 고른다.', base: '네 문항(목·피부·어깨·가슴)에서 몸 자리를 짚고 마음 보기 세 개 가운데 고른다.', challenge: '같은 자리를 짚은 뒤 마음 대신 친구에게 해 줄 도움이 되는 말을 고른다.' },
        activity: {
          title: '종이 몸에서 변화와 마음 짝 짓기', tool: 'body',
          teacher: '"사춘기에는 몸이 달라지면서 마음도 함께 출렁일 수 있어요." 자리를 짚을 때마다 "그때 어떤 마음이 들 수 있을까?"를 묻는다. "이런 마음이 드는 건 이상한 거예요"라는 보기를 고르는 학생에게 "그런 마음은 자연스러워요. 언제 오는지도 사람마다 달라요"라고 말해 준다. 학생 자신의 몸 변화는 묻지 않는다.',
          task: '종이 몸에서 사춘기에 달라지는 자리를 짚고, 그때 들 수 있는 마음을 골라요.', levels: { easy: { names: true }, base: {}, challenge: {} },
          items: [
            { prompt: '목소리가 달라지는 자리를 짚고, 그때 들 수 있는 마음을 골라요.', toolOptions: { mode: 'parts', parts: ['목', '피부', '어깨', '가슴', '무릎'], ask: { q: '그때 들 수 있는 마음은?', choices: ['말하기가 쑥스러울 수 있어요', '이런 마음은 이상한 거예요', '아무 느낌이 없어야 해요'] } }, target: { parts: ['목'], pick: 0 }, difficulty: 0.15,
              levels: {
                easy: { toolOptions: { ask: { q: '그때 들 수 있는 마음은?', choices: ['말하기가 쑥스러울 수 있어요', '이런 마음은 이상한 거예요'] } } },
                challenge: { prompt: '목소리가 달라지는 자리를 짚고, 친구에게 해 줄 말을 골라요.', toolOptions: { ask: { q: '친구에게 해 줄 말은?', choices: ['"누구나 겪는 변화야"', '"목소리 이상해"', '"말하지 마"'] } }, target: { parts: ['목'], pick: 0 } },
              } },
            { prompt: '여드름이 날 수 있는 자리를 짚고, 그때 들 수 있는 마음을 골라요.', toolOptions: { mode: 'parts', parts: ['목', '피부', '어깨', '가슴', '무릎'], ask: { q: '그때 들 수 있는 마음은?', choices: ['나만 이런 것 같아요', '거울 볼 때 신경 쓰일 수 있어요', '절대 신경 쓰면 안 돼요'] } }, target: { parts: ['피부'], pick: 1 }, difficulty: 0.15,
              levels: {
                easy: { toolOptions: { ask: { q: '그때 들 수 있는 마음은?', choices: ['절대 신경 쓰면 안 돼요', '거울 볼 때 신경 쓰일 수 있어요'] } }, target: { parts: ['피부'], pick: 1 } },
                challenge: { prompt: '여드름이 날 수 있는 자리를 짚고, 친구에게 해 줄 말을 골라요.', toolOptions: { ask: { q: '친구에게 해 줄 말은?', choices: ['"얼굴이 왜 그래?"', '"자라는 중이라 그래"', '"다 너 때문이야"'] } }, target: { parts: ['피부'], pick: 1 } },
              } },
            { prompt: '어깨가 넓어지며 몸이 커지는 자리를 짚고, 들 수 있는 마음을 골라요.', toolOptions: { mode: 'parts', parts: ['목', '피부', '어깨', '가슴', '무릎'], ask: { q: '그때 들 수 있는 마음은?', choices: ['아무렇지 않아야 해요', '부끄러워 숨겨야 해요', '몸이 낯설게 느껴질 수 있어요'] } }, target: { parts: ['어깨'], pick: 2 }, difficulty: 0.2,
              levels: {
                easy: { prompt: '어깨가 넓어지는 자리를 짚고, 들 수 있는 마음을 골라요(보기 둘).', toolOptions: { ask: { q: '그때 들 수 있는 마음은?', choices: ['부끄러워 숨겨야 해요', '몸이 낯설게 느껴질 수 있어요'] } }, target: { parts: ['어깨'], pick: 1 } },
                challenge: { prompt: '어깨가 넓어지는 자리를 짚고, 친구에게 해 줄 말을 골라요.', toolOptions: { ask: { q: '친구에게 해 줄 말은?', choices: ['"왜 그렇게 커졌어?"', '"놀리지 않을게"', '"옷이 안 어울려"'] } }, target: { parts: ['어깨'], pick: 1 } },
              } },
            { prompt: '가슴이 자라는 자리를 짚고, 그때 들 수 있는 마음을 골라요.', toolOptions: { mode: 'parts', parts: ['목', '피부', '어깨', '가슴', '무릎'], ask: { q: '그때 들 수 있는 마음은?', choices: ['다른 사람 눈이 신경 쓰일 수 있어요', '이 변화는 잘못된 거예요', '아무에게도 물으면 안 돼요'] } }, target: { parts: ['가슴'], pick: 0 }, difficulty: 0.2,
              levels: {
                easy: { toolOptions: { ask: { q: '그때 들 수 있는 마음은?', choices: ['다른 사람 눈이 신경 쓰일 수 있어요', '이 변화는 잘못된 거예요'] } } },
                challenge: { prompt: '가슴이 자라는 자리를 짚고, 궁금할 때 할 일을 골라요.', toolOptions: { ask: { q: '궁금할 때 할 일은?', choices: ['보건 선생님께 묻는다', '친구 몸을 놀린다', '혼자 걱정만 한다'] } }, target: { parts: ['가슴'], pick: 0 } },
              },
              conclude: '몸이 달라지면 마음도 출렁일 수 있어요. 자연스러운 일이고, 궁금하면 보건 선생님께 물어요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '몸 변화와 그때 들 수 있는 마음을 써요.', columns: ['몸 변화', '들 수 있는 마음'], cells: [['목소리가 달라짐', ''], ['여드름이 남', '']] }] },
        notes: '종이 몸은 옷 입은 모습으로 다룬다. 학생 자신의 몸 변화를 묻거나 견주지 않는다.',
      }),
      X('activity.talk', {
        title: '가족에게 짜증 날 때 할 말', method: '모둠 토의: 짜증이 날 때', tool: 'timer', minutes: 14,
        levels: { easy: '토의 5분 타이머를 맞추고, 말하기 차례 카드 2장을 놓은 뒤 정한 말 한 가지를 점검한다.', base: '토의 5분·정리 1분으로 맞추고 차례 카드 3장을 놓은 뒤 정한 말 세 가지를 점검 3칸에 표시한다.', challenge: '점검 4칸(상대 마음까지 생각해 고쳐 말하기 더함)을 표시한다.' },
        activity: {
          title: '짜증 날 때 말하기 토의', tool: 'timer',
          teacher: '"가족에게 짜증이 날 때, 상처 주지 않고 내 마음을 말하려면 어떻게 할까요? 모둠이 5분 동안 세 가지를 정해 봐요." 타이머를 맞추고 말하기 차례(숨 고르기 → 내 마음 말하기 → 바라는 것 부탁하기)를 먼저 놓게 한다. "짜증 날 땐 문 쾅 닫고 들어가면 돼요"라는 말에는 "잠깐 떨어지는 건 좋아요. 그다음 내 마음을 말로 전하면 어떨까요?"라고 말해 준다. 실제 집안 다툼 이야기는 꺼내지 않는다.',
          task: '토의 타이머를 맞추고, 짜증 날 때 말하기 차례를 놓은 뒤, 모둠이 정한 말을 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '모둠 토의 5분, 정리 1분으로 타이머를 맞춰요.', toolOptions: { title: '짜증 날 때 할 말 토의', labels: ['토의', '정리'], timeUnit: 'min', plan: { work: 2, rest: 3, rounds: 1 } }, target: { plan: { work: 5, rest: 1, rounds: 1 } }, difficulty: 0.1,
              levels: { easy: { prompt: '모둠 토의 5분으로 타이머를 맞춰요.', target: { plan: { work: 5 } } } } },
            { prompt: '짜증 날 때 말하기 차례 카드를 놓아요.', toolOptions: { title: '짜증 날 때 말하기 차례', cards: ['바라는 것 부탁하기', '잠깐 숨 고르기', '내 마음 말하기'] }, target: { order: ['잠깐 숨 고르기', '내 마음 말하기', '바라는 것 부탁하기'] }, difficulty: 0.15,
              levels: { easy: { prompt: '짜증 날 때 말하기 차례 카드를 놓아요(카드 2장).', toolOptions: { cards: ['내 마음 말하기', '잠깐 숨 고르기'] }, target: { order: ['잠깐 숨 고르기', '내 마음 말하기'] } } } },
            { prompt: '모둠 토의를 마치고 해낸 것에 스스로 표시해요.', toolOptions: { title: '모둠 토의 점검' }, target: { selfCheck: ['할 말 하나를 정했다', '할 말 세 가지를 적었다', '"나는 ~해서 속상해" 꼴로 썼다'] }, difficulty: 0.1,
              levels: { easy: { prompt: '모둠 토의를 마치고 해낸 것에 스스로 표시해요(한 칸).', target: { selfCheck: ['할 말 하나를 정했다'] } }, challenge: { prompt: '모둠 토의를 마치고 해낸 것에 스스로 표시해요(네 칸).', target: { selfCheck: ['할 말 하나를 정했다', '할 말 세 가지를 적었다', '"나는 ~해서 속상해" 꼴로 썼다', '상대 마음을 생각해 고쳤다'] } } },
              conclude: '짜증이 날 때는 숨을 고르고, 내 마음을 말하고, 바라는 것을 부탁해요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '모둠이 정한 "짜증 날 때 할 말"을 써요.', columns: ['할 말'], cells: [[''], [''], ['']] }] },
      }),
      X('wrap.kind-self', {
        title: '나에게 하는 다정한 말', method: '나에게 하는 다정한 말', tool: 'story', minutes: 6,
        levels: { easy: '"나는 ___해도 괜찮아" 빈칸 하나를 채운다.', base: '빈칸 둘("오늘 ___는 잘했어" 더함)을 채운다.', challenge: '빈칸 셋(친구에게 해 줄 말로 바꾼 문장 더함)을 채운다.' },
        wrap: {
          teacher: '"마음이 출렁인 날, 나에게 어떤 말을 해 주면 좋을까요?" 빈칸을 채운 뒤 마음속으로 한 번 읽어 보게 한다. \'모두 망쳤어\' 카드를 넣는 학생에게 "그 말을 친구에게도 할 수 있을까요? 나에게도 친구처럼 다정하게 말해 줘요"라고 말해 준다. 다정한 말은 발표하지 않아도 된다.',
          exitTicket: [
            { type: 'tool', tool: 'story', options: { mode: 'fill', title: '나에게 하는 말', slots: [{ id: 'b1', who: '나', label: '"나는 ___해도 괜찮아."' }, { id: 'b2', who: '나', label: '"오늘 ___는 잘했어."' }], cards: ['실수', '끝까지 해 본 것', '천천히', '모두 망쳤어'] }, prompt: '나에게 하는 다정한 말의 빈칸을 채워요.', target: { fill: { b1: '실수', b2: '끝까지 해 본 것' } }, difficulty: 0.15,
              levels: {
                easy: { prompt: '나에게 하는 다정한 말의 빈칸을 채워요(빈칸 하나).', toolOptions: { slots: [{ id: 'b1', who: '나', label: '"나는 ___해도 괜찮아."' }] }, target: { fill: { b1: '실수' } } },
                challenge: { prompt: '다정한 말 빈칸 셋을 채워요(셋째는 친구에게).', toolOptions: { slots: [{ id: 'b1', who: '나', label: '"나는 ___해도 괜찮아."' }, { id: 'b2', who: '나', label: '"오늘 ___는 잘했어."' }, { id: 'b3', who: '친구에게', label: '"너도 ___ 해도 괜찮아."' }] }, target: { fill: { b1: '실수', b2: '끝까지 해 본 것', b3: '천천히' } } },
              } },
            { type: 'choice', prompt: '마음이 출렁인 날 나에게 해 줄 말로 알맞은 것은?', options: ['"넌 늘 이 모양이야"', '"오늘 힘들었지, 괜찮아"', '"아무도 신경 안 써"'], answer: 1, difficulty: 0.15, explain: '친구에게 하듯 나에게도 다정하게 말해요.' },
            { type: 'short', prompt: '오늘 나에게 해 주고 싶은 다정한 말을 한 문장으로 써요.' },
          ],
        },
        worksheet: {
          title: '나에게 다정하게',
          items: [
            { type: 'blank', prompt: '빈칸을 채워 다정한 말을 완성해요.', text: '나는 ___해도 괜찮아.', answer: '실수' },
            { type: 'short', prompt: '친구가 속상해할 때 해 줄 다정한 말을 써요.' },
          ],
          easy: { note: '"나는 실수해도 괜찮아"로 시작해도 돼요.', items: [{ type: 'draw', prompt: '나에게 다정한 말을 건네는 내 모습을 그려요.' }] },
        },
      }),
      X('wrap.helper', {
        title: '보건실·상담실 찾아가기', method: '보건·상담 선생님 찾기', tool: 'map', minutes: 6,
        levels: { easy: '이름이 보이는 학교 칸 지도에서 보건실 한 곳에 핀을 꽂는다.', base: '보건실·상담실 기호의 범례를 채우고(이용 시간은 학교가 넣는다) 보건실에 핀을 꽂는다.', challenge: '찾아갈 때 할 첫마디를 고른다.' },
        wrap: {
          teacher: '"몸이 달라져 궁금하거나 마음이 출렁일 때, 학교에서 누구를 찾아갈까요?" 학교 칸 지도에서 보건실·상담실을 함께 짚고, 학교가 확인한 이용 시간을 칠판에 적어 준다. "보건실은 다쳤을 때만 가요"라는 말에는 "몸이 궁금하거나 마음이 힘들 때도 보건 선생님과 이야기할 수 있어요"라고 말해 준다.',
          exitTicket: [
            { type: 'tool', tool: 'map', options: { grid: [6, 4], title: '우리 학교(가상 칸 지도)', places: SCHOOL6, names: false }, prompt: '몸 변화가 궁금할 때 찾아갈 보건실에 핀을 꽂아요.', target: { place: '보건실' }, difficulty: 0.15,
              levels: { easy: { toolOptions: { names: true } } } },
            { type: 'tool', tool: 'map', options: { mode: 'legend', grid: [6, 4], title: '우리 학교(가상 칸 지도)', places: SCHOOL6, meanings: { hospital: '보건실', office: '상담실' } }, prompt: '보건실과 상담실 기호의 범례 이름을 골라요.', target: { legend: { hospital: '보건실', office: '상담실' } }, difficulty: 0.15 },
            { type: 'choice', prompt: '보건실이나 상담실에 찾아갈 때 할 첫마디로 알맞은 것은?', options: ['"요즘 궁금한 게 있어서 왔어요"', '"아무것도 아니에요"', '(말없이 서 있기)'], answer: 0, difficulty: 0.15, explain: '짧은 첫마디면 충분해요.' },
          ],
        },
        worksheet: {
          title: '보건실·상담실 찾아가기',
          items: [
            { type: 'table', prompt: '선생님이 알려 준 이용 시간을 써요.', columns: ['곳', '이용 시간'], cells: [['보건실', ''], ['상담실', '']] },
            { type: 'short', prompt: '찾아갈 때 할 첫마디를 한 문장으로 써요.' },
          ],
        },
        notes: '보건실·상담실의 실제 위치와 이용 시간은 학교가 확인해 칠판·활동지에 넣는다.',
      }),
    );
  }

  // ======== 6학년 · 힘들어 보이는 친구 곁에서 (§2 초: 도움 요청; 중: 위험 신호와 생명지킴이 기초) ========
  {
    const X = mk('friend-care', 6);
    const SECRET = [
      { text: '쉬는 시간, 결이 "요즘 다 힘들어. 아무한테도 말하지 마"라고 해요.', motif: 'cloud',
        good: ['ask', '"말해 줘서 고마워. 무슨 일 있어?"라고 묻고 들어 준다', '결이 요즘 잠도 못 자고 혼자인 것 같다고 털어놓아요.', [['결', '들어 주는 사람이 생겨요', 1]]],
        bad: ['promise', '"알았어, 비밀 지킬게"라고 약속한다', '결은 고개를 끄덕이지만 걱정은 그대로예요.', '생명과 안전이 걸릴 수 있는 이야기는 비밀로 약속하지 않아요.', [['결', '도움에서 멀어져요', -1]]] },
      { text: '결이 "그래도 선생님한테는 말하지 마"라고 해요.', motif: 'wind',
        good: ['together', '"너를 지키고 싶어. 같이 선생님께 가자"고 말한다', '결이 망설이다가 함께 가 보기로 해요.', [['결', '혼자가 아니에요', 1]]],
        bad: ['keep', '비밀을 지키고 혼자 걱정한다', '나 혼자 무거운 마음을 안고 지내요.', '친구를 돕는 일은 어른과 함께해요.', [['결', '도움을 못 받아요', -1], ['나', '혼자 무거워요', -1]]] },
      { text: '상담실 앞에서 결이 "역시 안 갈래"라며 돌아서요.', motif: 'house',
        good: ['tell', '결 곁에 있다가 담임 선생님께 바로 알린다', '선생님이 결과 이야기하고 상담 선생님과 이어 줘요.', [['결', '도움이 닿아요', 1], ['나', '용기를 냈어요', 1]]],
        bad: ['wait', '결이 마음을 바꿀 때까지 기다린다', '도움이 늦어져요.', '친구가 거절해도 어른께 알려야 도움이 닿아요.', [['결', '계속 힘들어요', -1]]] },
    ];
    const AFTER = [['알린 날 서운함', 14], ['알린 날 고마움', 6], ['한 달 뒤 서운함', 3], ['한 달 뒤 고마움', 17]];
    M.push(
      X('intro.notice', {
        title: '변화가 겹치는 친구', method: '달라진 친구 알아차리기', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 변화 2개(좋아하던 운동을 안 함·말수 줄어듦)를 읽어 주고 걱정 크기가 오르는 시연을 본다.', base: '변화 4개가 하나씩 더해질 때마다 걱정 크기가 오르는 시연을 보고 까닭을 말한다.', challenge: '변화가 여러 개 겹칠 때 왜 더 걱정하고 어른께 알려야 하는지 말한다.' },
        intro: {
          teacher: '"친구 린이 요즘 좋아하던 축구를 안 해요. 걱정 크기는 얼마쯤일까요?" 시연 단추로 걱정 크기가 2 → 3 → 4 → 5로 오르는 모습을 보이며, 변화를 하나씩 더해 읽는다(축구를 안 함 → 말수가 줄어듦 → 혼자 지냄 → 아끼던 물건을 친구들에게 나눠 줌). "한두 가지 변화는 누구에게나 있어요. 여러 개가 겹치고 이어지면 더 걱정하고 어른께 알려요"라고 짚는다. 이야기는 지어낸 것이다.',
          student: '린의 변화 가운데 걱정을 가장 크게 만든 것은 무엇인지, 왜 겹치면 더 걱정되는지 짝에게 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'scale', situation: '린이 좋아하던 축구를 안 하고, 말수가 줄고, 아끼던 물건을 나눠 줘요', feeling: '걱정', steps: 5, scaleLabels: { 1: '조금', 5: '아주 많이' } }, sequence: [{ level: 2 }, { level: 3 }, { level: 4 }, { level: 5 }] },
          art: art('a paper child sitting alone on a bench at the edge of a paper playground, while a friend notices from a distance with a gentle look', '친구가 요즘 달라졌어요', 'cloud', 'lavender'),
        },
        notes: '변화 신호는 걱정 신호이지 판단 근거가 아니다. 학생이 친구를 진단하거나 이름을 말하게 하지 않는다. ' + CRISIS,
      }),
      X('intro.trust', {
        title: '믿고 기대기 놀이', method: '믿고 기대기 놀이', tool: 'timer', minutes: 6,
        levels: { easy: '타이머를 15초 기대기로 맞춘 첫 시연만 하고 짝과 손바닥을 맞댄다.', base: '30초 기대기로 짝과 서로 균형을 잡는다.', challenge: '30초 기대기 → 10초 쉬기를 두 번 하고, 두 번째는 셋이서 손을 맞대 본다.' },
        intro: {
          teacher: '"짝과 손바닥을 맞대고 서로 조금씩 기대 볼까요? 먼저 \'손 맞대도 돼?\'라고 물어요." 시연 단추로 타이머가 15초 → 30초 → 30초 두 번으로 바뀌는 모습을 보인다. 놀이 뒤 "한쪽만 힘을 빼면 어떻게 되었나요? 서로 기대야 균형이 잡혀요. 힘들 때 기댈 사람이 있다는 게 이런 거예요"라고 잇는다. 기대는 것을 싫어하는 학생은 벽에 손을 대고 해도 된다.',
          student: '짝에게 먼저 손을 맞대도 되는지 묻고, 30초 동안 서로 기대며 균형을 잡아 보아요. 기댈 사람이 있을 때 어떤 느낌인지 말해 보아요.',
          demo: { tool: 'timer', options: { title: '믿고 기대기', labels: ['기대기', '쉬기'], plan: { work: 10, rest: 0, rounds: 1 } }, sequence: [{ plan: { work: 15, rest: 0, rounds: 1 } }, { plan: { work: 30, rest: 0, rounds: 1 } }, { plan: { work: 30, rest: 10, rounds: 2 } }] },
          art: art('two paper children pressing palms together and leaning gently toward each other, forming a paper arch', '기댈 사람이 있어요', 'heart', 'peach'),
        },
        notes: '몸을 세게 밀지 않게 한다. 손 맞대기를 원하지 않는 학생은 벽에 손을 대거나 지켜보게 한다.',
      }),
      X('activity.dilemma', {
        title: '"아무한테도 말하지 마"라고 할 때', method: '친구가 "아무한테도 말하지 마"라고 할 때', tool: 'dilemma', minutes: 13,
        levels: { easy: '갈림 1번(비밀 약속/묻고 들어 주기)에서 고르고 근거 한 장을 고른다.', base: '갈림 2번(혼자 지키기/같이 선생님께 가자)을 지나 근거를 고른다.', challenge: '갈림 3번(친구가 돌아설 때 기다리기/어른께 알리기)까지 지나 근거 두 개를 모두 고르고, 친구에게 할 말을 견준다.' },
        activity: {
          title: '갈림길: 쉬는 시간의 부탁', tool: 'dilemma',
          teacher: '"친구가 힘들다며 비밀로 해 달라고 하면 어떻게 할까요?" 고를 때마다 결과 칸을 읽게 한다. "친구 비밀을 말하면 배신이에요"라는 말에는 "친구를 지키려고 어른께 알리는 것은 배신이 아니에요. 생명과 안전은 비밀보다 먼저예요"라고 분명히 말한다. "친구가 싫어하면 어떡해요?"라는 걱정은 인정하고 "처음엔 서운해할 수 있어요. 그래도 곁에 있어 주면 돼요"라고 말해 준다. 이야기는 지어낸 것이다.',
          task: '결의 갈림길마다 고르고, 결과를 읽은 뒤 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '쉬는 시간의 부탁',
            steps: SECRET,
            ending: '들어 주고, 함께 가자고 하고, 어른께 알린 덕분에 결이 도움을 받기 시작했어요.',
            reasons: [{ id: 'first', text: '생명과 안전은 비밀보다 먼저다' }, { id: 'adult', text: '친구를 돕는 일은 어른과 함께한다' }, { id: 'betray', text: '어른께 말하면 친구를 배신하는 것이다', why: '친구를 지키려고 알리는 것은 배신이 아니에요.' }, { id: 'solo', text: '내가 혼자 해결해 줘야 한다', why: '어린이 혼자 안기에는 무거운 일이에요. 어른과 함께해요.' }],
            good: ['first', 'adult'],
            talk: '모둠에서 "선생님께 같이 가자"고 말할 때 덧붙일 다정한 말을 한 가지씩 말해요.',
            conclude: '힘들다는 친구의 비밀은 지키겠다고 약속하지 않고, 곁에 있으며 어른께 알려요.',
          }),
        },
        worksheet: { items: [{ type: 'choice', prompt: '친구가 힘들다며 비밀로 해 달라고 하면?', options: ['비밀을 지켜 준다', '곁에 있으며 믿는 어른께 알린다', '다른 친구들에게 의논한다'], answer: '곁에 있으며 믿는 어른께 알린다' }] },
        notes: '이야기는 지어낸 것이며 위험의 구체적인 내용은 다루지 않는다. 지금 위험해 보이는 상황이면 보호자·교사가 곧바로 긴급 신고를 한다는 점을 교사가 알고 있어야 한다. ' + CRISIS,
      }),
      X('activity.listen', {
        title: '들어 주는 말·막는 말', method: '들어 주는 말·막는 말', tool: 'sortboard', minutes: 14,
        levels: { easy: '말 카드 4장을 두 바구니에 나누고, 넣을 때 바로 맞는지 알려 주며 바구니마다 장 수가 보인다.', base: '말 카드 6장을 나누고, 둘째 문항에서 막는 말 3개를 들어 주는 말로 바꿔 넣는다.', challenge: '말 카드 8장(넣지 않을 카드 포함)을 나누고, 바꾸는 짝에 함정 카드가 섞인다.' },
        activity: {
          title: '말 카드 두 바구니', tool: 'sortboard',
          teacher: '"힘들다는 친구에게 \'그런 걸로 뭘 그래\'라고 하면 친구는 더 말하고 싶을까요?" 카드를 넣기 전에 친구 처지에서 소리 내어 읽어 보게 한다. "\'나도 그래, 별거 아냐\'는 위로 아니에요?"라는 질문에는 "같은 편이라는 뜻일 수 있지만, 친구 마음이 작아 보이게 할 수 있어요. \'많이 힘들었겠다\'가 더 들어 주는 말이에요"라고 말해 준다. 걱정된다고 솔직하게 물어보는 것은 괜찮다고 짚는다.',
          task: '말 카드를 들어 주는 말과 막는 말 바구니에 나누고, 막는 말을 들어 주는 말로 바꿔요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            SORT('말 카드를 두 바구니에 나누어요.', { slots: ['들어 주는 말', '막는 말'], groups: { '들어 주는 말': ['"그랬구나"', '"많이 힘들었겠다"', '"말해 줘서 고마워"'], '막는 말': ['"그런 걸로 뭘 그래"', '"나도 그래, 별거 아냐"', '"그만 좀 울어"'] }, extra: { '들어 주는 말': ['"내가 곁에 있을게"'] }, traps: ['"오늘 급식 뭐야?"'] }, 0.2),
            SWAP('막는 말 바구니마다 바꿀 들어 주는 말을 넣어요.', [['"그런 걸로 뭘 그래" 대신', '"그 일이 많이 컸구나"'], ['"나도 그래, 별거 아냐" 대신', '"네 마음 더 말해 줄래?"'], ['"그만 좀 울어" 대신', '"울어도 괜찮아, 기다릴게"']], { easy: 2, traps: ['"빨리 잊어버려"'] }, 0.25,
              { conclude: '들어 주는 말은 친구 마음을 작게 만들지 않아요. 끝까지 듣고 "말해 줘서 고마워"라고 해요.' }),
            { prompt: '짝과 들어 주는 말로 30초씩 서로 이야기를 들어 줘 봐요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '막는 말을 들어 주는 말로 바꿔 써요.', columns: ['막는 말', '들어 주는 말'], cells: [['"그런 걸로 뭘 그래"', ''], ['"그만 좀 울어"', '']] }] },
      }),
      X('activity.steps', {
        title: '알아차리고·묻고·알리기', method: '알아차리고·묻고·알리기 차례', tool: 'story', minutes: 13,
        levels: { easy: '장면 카드 3장(알아차리기·묻기·알리기)을 차례로 놓고, 말풍선 1개를 채우며, 어른이 없을 때 할 일 1장을 고른다.', base: '장면 카드 4장(들어 주기 더함)을 놓고 말풍선 2개를 채운다.', challenge: '틀린 장면 하나를 빼고 4장을 놓고, 말풍선 3개를 채우며, 어른이 바로 없을 때 할 일 2장을 함정 가운데서 모두 고른다.' },
        activity: {
          title: '지킴이 네 장면', tool: 'story',
          teacher: '"친구가 힘들어 보일 때 무엇부터 할까요?" 장면 카드를 놓은 뒤 말풍선을 채워 실제로 소리 내어 말해 보게 한다. "다정하게 묻기"에서는 "요즘 힘들어 보여서 걱정돼. 괜찮아?"처럼 걱정된다고 솔직하게 묻는 것이 친구를 돕는다고 짚는다. "비밀 지킬게" 카드를 넣는 학생에게는 "생명과 안전이 걸릴 수 있는 이야기는 비밀로 약속하지 않아요"라고 말해 준다. 어른이 바로 없을 때도 혼자 기다리지 않고 다른 어른을 찾는다는 점을 짚는다.',
          task: '지킴이 장면을 차례로 놓고, 말풍선을 채우고, 어른이 바로 없을 때 할 일을 골라요.', levels: { easy: { live: true }, base: {}, challenge: {} },
          items: [
            ORDER('친구가 힘들어 보일 때 지킴이 장면을 차례로 놓아요.', ['평소와 다른 모습 알아차리기', '"괜찮아?" 다정하게 묻기', '끝까지 들어 주기', '믿는 어른께 함께 알리기'], { easy: [0, 1, 3], trap: '"비밀 지킬게" 약속하기', motifs: ['cloud', 'heart', 'leaf', 'house'] }, 0.2),
            FILL('지킴이 말풍선 빈칸에 알맞은 카드를 넣어요.', '나', [['묻기: ___', '"요즘 힘들어 보여, 괜찮아?"'], ['들어 주기: ___', '"그랬구나, 더 말해 줄래?"'], ['알리기: ___', '"같이 선생님께 가 보자"']], ['"요즘 힘들어 보여, 괜찮아?"', '"그랬구나, 더 말해 줄래?"', '"같이 선생님께 가 보자"', '"그런 걸로 왜 그래?"'], { easy: 1, base: 2 }, 0.2),
            PICK('어른이 바로 곁에 없을 때 할 일 카드를 골라요.', '어른이 바로 없을 때', ['보호자께 전화로 알리기', '다른 선생님 찾아가기'], ['내일까지 혼자 기다리기', '친구들에게 퍼뜨리기'], { easy: 1, easyTraps: 1, mode: 'pick', extraTraps: ['혼자 해결해 주기'] }, 0.25,
              { conclude: '알아차리고, 묻고, 들어 주고, 어른께 알려요. 어른이 바로 없으면 다른 어른을 찾아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '알아차리기 → 묻기 → 들어 주기 → ___께 알리기', answer: '믿는 어른' }] },
        notes: '걱정된다고 솔직하게 묻는 것은 힘든 생각을 부추기지 않는다(생명지킴이 교육의 안내 — 사람 확인). 학생이 친구 위기를 혼자 판단·해결하지 않게 하고, 학교 위기관리 절차로 잇는다.',
      }),
      X('activity.case', {
        title: '어른에게 알린 뒤 친구의 마음', method: '모둠 사례: 어른에게 알린 뒤', tool: 'chart', minutes: 14,
        levels: { easy: '값이 보이는 가상 설문 그래프에서 한 달 뒤 가장 많은 마음을 읽고, 달라진 점을 고른다.', base: '값 없이 그래프를 읽고 처음과 한 달 뒤의 차이를 고른 뒤 모둠에서 까닭을 토의한다.', challenge: '토의 뒤 친구가 서운해할 때 대응할 말을 같은 그래프 문항에서 고른다.' },
        activity: {
          title: '알린 날과 한 달 뒤 그래프', tool: 'chart',
          teacher: '"친구 일을 어른께 알린 뒤, 도움을 받은 친구들의 마음은 어떻게 바뀌었을까요? 꾸며 만든 가상 설문이에요." 막대를 견주며 "알린 날에는 서운함이 많았는데 한 달 뒤에는 어떤가요?"라고 묻는다. "친구가 서운해하면 알린 게 잘못이에요"라는 말에는 "처음엔 서운할 수 있어요. 도움을 받고 나면 고마워하는 친구가 많아요. 그래도 알린 건 친구를 지킨 일이에요"라고 말해 준다.',
          task: '가상 설문 그래프를 읽고, 알린 날과 한 달 뒤 친구의 마음이 어떻게 바뀌었는지 알아봐요.', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            READ('한 달 뒤 가장 많은 마음을 그래프에서 골라요.', { title: '어른께 알린 뒤 친구의 마음(가상 설문 40명)', data: AFTER, xLabel: '때와 마음', yLabel: '학생 수', question: '한 달 뒤 가장 많은 마음은?' }, 3, 0.2),
            READ('알린 날과 한 달 뒤, 무엇이 달라졌는지 골라요.', { title: '어른께 알린 뒤 친구의 마음(가상 설문 40명)', data: AFTER, xLabel: '때와 마음', yLabel: '학생 수', question: '무엇이 달라졌나요?', choices: ['서운함이 줄고 고마움이 늘었다', '서운함이 더 늘었다', '달라진 것이 없다'] }, 0, 0.2),
            READ('친구가 "왜 말했어?"라며 서운해할 때 할 말을 골라요.', { title: '어른께 알린 뒤 친구의 마음(가상 설문 40명)', data: AFTER, xLabel: '때와 마음', yLabel: '학생 수', question: '서운해하는 친구에게 할 말은?', choices: ['"너를 지키고 싶었어"', '"네가 약해서 그래"', '"다시는 말 안 할게"'] }, 0, 0.2,
              { conclude: '처음엔 서운해도 도움을 받으면 고마워하는 친구가 많아요. 알린 뒤에도 곁에 있어 줘요.' }),
            { prompt: '모둠에서 처음엔 서운했다가 나중에 고마워진 까닭을 이야기해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '친구가 서운해할 때 해 줄 말을 한 문장으로 써요.' }] },
        notes: '그래프 수치는 수업용 가상 설문이다. 화면 제목에 \'가상\'을 밝혔다.',
      }),
      X('wrap.promise', {
        title: '우리 반 지킴이 약속 포스터', method: '우리 반 지킴이 약속', tool: 'collage', minutes: 6,
        levels: { easy: '조각 2개 이상으로 약속 포스터를 꾸미고 점검 2칸을 표시한다.', base: '조각 4개 이상으로 꾸미고 점검 3칸(혼자 두지 않기·어른께 알리기·들어 주기)을 표시한다.', challenge: '점검 4칸(모둠이 약속 문구를 정함 더함)을 표시하고 문구를 짧은 글로 쓴다.' },
        wrap: {
          teacher: '"우리 반 지킴이 약속을 포스터로 만들어 볼까요? 하트는 \'혼자 두지 않기\', 집 모양 네모는 \'어른께 알리기\'예요." 조각을 붙이며 약속을 소리 내어 말하게 한다. "지킴이는 친구 일을 다 해결해야 해요"라는 말에는 "지킴이는 곁에 있고 어른께 잇는 사람이에요. 해결은 어른과 함께해요"라고 말해 준다.',
          exitTicket: [
            COLX('우리 반 지킴이 약속 포스터를 꾸미고 스스로 표시해요', ['"혼자 두지 않기"를 넣었다', '"어른께 알리기"를 넣었다', '"끝까지 들어 주기"를 넣었다', '모둠이 약속 문구를 정했다'], { easyMin: 2, baseMin: 4, shapes: ['heart', 'square', 'circle', 'star', 'leaf'] }),
            { type: 'choice', prompt: '우리 반 지킴이 약속으로 알맞은 것은?', options: ['힘든 친구를 혼자 두지 않기', '친구 비밀은 무엇이든 지키기', '혼자 해결해 주기'], answer: 0, difficulty: 0.15, explain: '곁에 있고 어른께 알리는 것이 지킴이의 약속이에요.' },
            { type: 'short', prompt: '우리 모둠이 정한 지킴이 약속 문구를 써요.' },
          ],
        },
        worksheet: {
          title: '우리 반 지킴이 약속',
          items: [
            { type: 'check', prompt: '지킴이 약속에 표시해요.', options: ['혼자 두지 않기', '끝까지 들어 주기', '어른께 알리기', '비밀로 혼자 안기'] },
            { type: 'short', prompt: '포스터에 넣을 우리 반 약속 문구를 한 문장으로 써요.' },
          ],
          easy: { note: '"혼자 두지 않아요, 어른께 알려요"로 써도 돼요.', items: [{ type: 'draw', prompt: '우리 반 지킴이 약속 포스터를 그려요.' }] },
        },
      }),
      X('wrap.help-card', {
        title: '알릴 어른 목록', method: '알릴 어른 목록', tool: 'kitchen', minutes: 6,
        levels: { easy: '알릴 어른 목록 2칸(학교 어른·집 어른)을 함정 카드와 가려 표시한다.', base: '3칸(지역 상담 번호 더함)을 가려 표시한다.', challenge: '4칸을 표시한 뒤, 어른께 알릴 때 할 말을 고른다.' },
        wrap: {
          teacher: '"친구가 걱정될 때 알릴 어른 목록을 만들어 볼까요?" 목록 칸을 함께 읽고 표시하게 한다. 학교가 확인한 지역 상담 번호를 칠판에 적어 준다. \'비밀을 지켜 줄 친구만\'을 고른 학생에게 "친구도 어린이예요. 어른께 알려야 친구를 지킬 수 있어요"라고 말해 준다. 알릴 때는 "친구가 걱정돼서 왔어요"처럼 짧게 말해도 된다고 짚는다.',
          exitTicket: [
            EX('kitchen', CHK('친구가 걱정될 때 알릴 곳만 표시해요.', '알릴 어른 목록', ['학교 어른: 담임 선생님', '집 어른: 보호자', '지역 상담 번호(학교가 넣음)', '학교 어른: 상담 선생님'], ['비밀을 지켜 줄 친구만', '익명 게시판에 올리기'], { easy: 2, base: 3 }, 0.15)),
            { type: 'choice', prompt: '어른께 친구 일을 알릴 때 첫마디로 알맞은 것은?', options: ['"친구가 걱정돼서 왔어요"', '"별일 아닌데요"', '"아무한테도 말하지 마세요"'], answer: 0, difficulty: 0.15, explain: '걱정된다는 짧은 말이면 충분해요.' },
            { type: 'short', prompt: '친구가 걱정될 때 가장 먼저 알릴 어른과 할 말을 써요.' },
          ],
        },
        worksheet: {
          title: '알릴 어른 목록',
          items: [
            { type: 'table', prompt: '알릴 어른 목록을 써요.', columns: ['학교 어른', '집 어른', '지역 상담 번호'], cells: [['', '', NUM]] },
            { type: 'short', prompt: '어른께 알릴 때 할 말을 한 문장으로 써요.' },
          ],
        },
        notes: `지역 상담 번호는 학교가 확인해 ${NUM} 자리에 넣는다. ` + CRISIS,
      }),
    );
  }

  // ======== 6학년 · 나를 지키는 생각 습관 (§2 초: 생명의 소중함 — 인지 재구성은 일반 지식) ========
  {
    const X = mk('self-talk', 6);
    const PRACTICE = [['1주', 3], ['2주', 4], ['3주', 3], ['4주', 6], ['5주', 7], ['6주', 9]];
    M.push(
      X('intro.bubble', {
        title: '생각 풍선과 마음 날씨', method: '생각 풍선 터뜨리기', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 생각 풍선 2개에 마음 날씨가 짝 지어지는 시연을 읽어 준다.', base: '생각 풍선 4개와 마음 날씨가 짝 지어지는 시연을 보고 생각마다 마음이 왜 다른지 말한다.', challenge: '같은 일(시험 점수)에 다른 생각을 한 풍선 둘을 견주어 말한다.' },
        intro: {
          teacher: '"같은 일이 생겨도 머릿속 생각 풍선에 따라 마음 날씨가 달라져요." 시연 단추로 \'나는 늘 망쳐\' 풍선에는 속상함, \'틀린 것만 다시 보자\' 풍선에는 편안함이 짝 지어지는 모습을 보인다. "생각은 사실이니까 바꿀 수 없어요"라는 말에는 "생각은 내 머릿속 풍선이에요. 사실인지 살펴보고 바꿔 볼 수 있어요"라고 말해 준다. 오늘은 나를 깎아내리는 생각을 알아차리고 바꾸는 법을 배운다고 밝힌다.',
          student: '같은 점수를 받고 다르게 생각한 두 풍선을 보고, 어느 풍선이 다음에 더 힘이 날지 짝에게 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'p1', label: '"나는 늘 망쳐"' }, { id: 'p2', label: '"틀린 것만 다시 보자"' }, { id: 'p3', label: '"다들 나를 싫어해"' }, { id: 'p4', label: '"다음엔 더 해 볼래"' }], cards: ['속상함', '편안함', '걱정', '뿌듯함'] }, sequence: [{ match: { p1: '속상함', p2: '편안함' } }, { match: { p1: '속상함', p2: '편안함', p3: '걱정', p4: '뿌듯함' } }] },
          art: art('paper thought balloons floating above a paper child, some gray with little paper rain clouds and some bright with paper suns', '생각이 마음 날씨를 바꿔요', 'cloud', 'sky'),
        },
      }),
      X('intro.case', {
        title: '같은 점수, 다른 생각', method: '시험 결과를 받은 두 친구', tool: 'story', minutes: 6,
        levels: { easy: '교사가 장면 3장(같은 점수 → 다른 생각 → 다른 결과)이 놓이는 시연을 읽어 준다.', base: '장면 4장이 차례로 놓이는 시연을 보고 두 인물의 결과를 견준다.', challenge: '두 인물의 다음 행동을 하나씩 말한다.' },
        intro: {
          teacher: '"하와 서는 같은 점수를 받았어요. 그런데 생각이 달랐대요." 시연 단추로 장면이 같은 점수 → 하의 생각 → 서의 생각 → 결과 차례로 놓이는 모습을 보인다. "점수가 낮으면 \'난 원래 못해\'가 맞는 말이에요"라는 말에는 "한 번의 점수가 나를 다 말해 주지는 않아요. 서는 어떻게 생각했나요?"라고 되묻는다. 이야기는 지어낸 것이다.',
          student: '하와 서 가운데 누구의 생각이 다음 시험에 힘이 될지 고르고, 그 까닭을 짝에게 말해 보아요.',
          demo: { tool: 'story', options: { mode: 'order', slots: 4, title: '같은 점수, 다른 생각', cards: [{ id: 'same', text: '하와 서가 같은 점수를 받음', motif: 'star' }, { id: 'ha', text: '하: "난 원래 못해"', motif: 'cloud' }, { id: 'seo', text: '서: "틀린 것만 다시 보자"', motif: 'sun' }, { id: 'end', text: '하는 손을 놓고, 서는 다시 연습함', motif: 'leaf' }] }, sequence: [{ order: ['same', 'ha', 'seo'] }, { order: ['same', 'ha', 'seo', 'end'] }] },
          art: art('two paper children holding the same paper test sheet, one under a small paper rain cloud and one under a small paper sun', '같은 점수, 다른 생각', 'sun', 'buttercup'),
        },
      }),
      X('activity.reframe', {
        title: '"나는 못해" 생각 바꾸기', method: '생각 바꾸기 짝 짓기', tool: 'mindmap', minutes: 13,
        levels: { easy: '"사실 찾기" 한 가지 바구니에 알맞은 카드 2장을 골라 넣고, 바꾼 문장 1장을 고른다.', base: '가지 3개(사실 찾기·다른 설명·친구라면)에 카드 6장을 잇고, 바꾼 문장을 고른다.', challenge: '가지 3개에 넣지 않을 카드가 섞이고, 바꾼 문장 고르기에 헷갈리는 카드가 더해진다.' },
        activity: {
          title: '세 가지 질문으로 생각 바꾸기', tool: 'mindmap',
          teacher: '"\'나는 못해\'라는 생각이 들 때 세 가지를 물어봐요. 사실은 어땠지? 다른 까닭은 없을까? 친구라면 뭐라고 할까?" 카드를 이을 때마다 그 질문을 소리 내어 읽게 한다. "좋은 생각만 하라는 거죠?"라는 말에는 "억지로 좋게가 아니라, 사실에 맞게 바꾸는 거예요"라고 말해 준다.',
          task: '가운데 "나는 못해" 생각에서 사실 찾기·다른 설명·친구라면 가지에 카드를 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            { prompt: '"나는 못해" 생각의 가지마다 알맞은 카드를 이어요.', toolOptions: { topic: '"나는 못해"', slots: ['사실 찾기', '다른 설명', '친구라면'], cards: ['지난번 줄넘기는 해냈어', '오늘은 잠이 모자랐어', '"연습하면 늘 거야"', '이번엔 한 문제만 틀렸어', '처음 해 보는 거라 그래', '"한 번 실수한 거야"'] },
              target: { sort: { '사실 찾기': ['지난번 줄넘기는 해냈어', '이번엔 한 문제만 틀렸어'], '다른 설명': ['오늘은 잠이 모자랐어', '처음 해 보는 거라 그래'], 친구라면: ['"연습하면 늘 거야"', '"한 번 실수한 거야"'] } }, difficulty: 0.2,
              levels: {
                easy: { prompt: '"사실 찾기" 바구니에 사실 카드만 골라 넣어요(2장).', toolOptions: { mode: 'pick', basket: '사실 찾기', cards: ['지난번 줄넘기는 해냈어', '"나는 원래 바보야"', '이번엔 한 문제만 틀렸어'] }, target: { pick: ['지난번 줄넘기는 해냈어', '이번엔 한 문제만 틀렸어'] } },
                challenge: { prompt: '가지마다 알맞은 카드를 이어요(넣지 않을 카드도 있어요).', toolOptions: { cards: ['지난번 줄넘기는 해냈어', '"역시 나는 안 돼"', '오늘은 잠이 모자랐어', '"연습하면 늘 거야"', '이번엔 한 문제만 틀렸어', '처음 해 보는 거라 그래', '"한 번 실수한 거야"'] } },
              } },
            PICK('"나는 못해"를 바꾼 문장 카드를 골라요.', '바꾼 생각', ['"아직 연습 중이야"'], ['"나는 못해"', '"다 내 탓이야"'], { easy: 1, easyTraps: 1, mode: 'pick', extraTraps: ['"어차피 소용없어"'] }, 0.2,
              { conclude: '사실을 찾고, 다른 까닭을 생각하고, 친구에게 하듯 말하면 "나는 못해"가 "아직 연습 중이야"로 바뀌어요.' }),
            { prompt: '짝에게 "친구라면 뭐라고 할까" 질문으로 응원하는 말을 해 줘요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '"나는 못해"를 세 질문으로 바꿔 써요.', columns: ['사실은?', '다른 까닭은?', '친구라면?'], cells: [['', '', '']] }] },
      }),
      X('activity.evidence', {
        title: '사실과 생각 나누기', method: '사실과 생각 나누기', tool: 'sortboard', minutes: 14,
        levels: { easy: '카드 4장을 사실·생각 바구니에 나누고, 넣을 때 바로 맞는지 알려 주며 바구니마다 장 수가 보인다.', base: '카드 6장을 나누고, 둘째 문항에서 생각 카드 2개를 사실에 맞게 고친 카드로 바꿔 넣는다.', challenge: '카드 8장(넣지 않을 카드 포함)을 나누고, 고친 카드 짝에 함정 카드가 섞인다.' },
        activity: {
          title: '발표 날 사실과 생각', tool: 'sortboard',
          teacher: '"서는 발표에서 한 번 틀렸어요. 그 뒤 머릿속에 여러 말이 떠올랐대요. 어느 것이 사실이고 어느 것이 생각일까요?" 카드를 넣기 전에 "눈으로 본 것인가, 내 머릿속 짐작인가?"를 묻는다. "모두 나를 비웃었다는 것도 사실 같아요"라는 말에는 "모두가 정말 웃었나요? 몇 명이 웃었나요?"라고 되물어 짐작과 사실을 가르게 한다. 이야기는 지어낸 것이다.',
          task: '서의 발표 날 카드를 사실과 생각 바구니에 나누고, 생각 카드를 사실에 맞게 고쳐요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            SORT('서의 발표 날 카드를 사실과 생각 바구니에 나누어요.', { slots: ['사실', '생각'], groups: { 사실: ['발표에서 한 번 틀렸다', '친구 두 명이 웃었다', '선생님이 다시 해 보자고 했다'], 생각: ['모두 나를 비웃었다', '나는 발표를 망치는 사람이다', '다시는 발표 못 한다'] }, extra: { 사실: ['끝까지 발표를 마쳤다'] }, traps: ['내일 날씨는 맑다'] }, 0.2),
            SWAP('생각 바구니마다 사실에 맞게 고친 카드를 넣어요.', [['"모두 비웃었다" 대신', '두 명이 웃었을 뿐이다'], ['"발표를 망치는 사람" 대신', '한 번 틀린 것뿐이다'], ['"다시는 못 한다" 대신', '연습하면 다음엔 낫다']], { easy: 2, traps: ['역시 나는 안 된다'] }, 0.25,
              { conclude: '머릿속 생각과 실제 사실을 가르면, 나를 깎아내리는 생각을 사실에 맞게 고칠 수 있어요.' }),
            { prompt: '모둠에서 "생각인데 사실처럼 느껴졌던 말" 예시를 하나 지어 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '사실이면 ○, 생각이면 △를 써요.', columns: ['말', '○ / △'], cells: [['발표에서 한 번 틀렸다', ''], ['모두 나를 비웃었다', ''], ['선생님이 다시 해 보자고 했다', '']], answer: '○, △, ○' }] },
      }),
      X('activity.graph', {
        title: '리코더 연습 그래프', method: '연습과 실력 그래프', tool: 'chart', minutes: 13,
        levels: { easy: '값이 보이는 꺾은선그래프에서 점수가 떨어진 주를 찾는다.', base: '값 없이 그래프를 읽고 "실패도 과정"인 까닭을 고른다.', challenge: '떨어진 주에 알맞은 대처를 고른다.' },
        activity: {
          title: '윤의 6주 리코더 연습', tool: 'chart',
          teacher: '"윤의 리코더 점수가 3주에 떨어졌어요. 그때 그만두었다면 어떻게 되었을까요?" 꺾은선을 손가락으로 따라가며 오르내림을 읽게 한다. "한 번 떨어지면 재능이 없는 거예요"라는 말에는 "떨어진 다음 주에 무슨 일이 있었나요? 떨어짐도 자라는 과정이에요"라고 말해 준다. 그래프 수치는 가상이다.',
          task: '윤의 연습 점수 꺾은선그래프를 읽고, 떨어진 주와 그 뒤의 변화를 알아봐요.', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            READ('점수가 떨어진 주를 그래프에서 골라요.', { type: 'line', title: '윤의 주별 리코더 점수(가상, 10점 만점)', unit: '점', data: PRACTICE, xLabel: '주', yLabel: '점수', question: '점수가 떨어진 주는?' }, 2, 0.2),
            READ('"실패도 과정"인 까닭을 그래프를 보고 골라요.', { type: 'line', title: '윤의 주별 리코더 점수(가상, 10점 만점)', unit: '점', data: PRACTICE, xLabel: '주', yLabel: '점수', question: '"실패도 과정"인 까닭은?', choices: ['떨어진 뒤에도 연습해 더 올랐다', '한 번 떨어지면 계속 떨어진다', '처음부터 잘해야 한다'] }, 0, 0.2),
            READ('3주에 윤이 할 대처로 알맞은 것을 골라요.', { type: 'line', title: '윤의 주별 리코더 점수(가상, 10점 만점)', unit: '점', data: PRACTICE, xLabel: '주', yLabel: '점수', question: '3주에 할 대처는?', choices: ['어려운 곳만 천천히 다시 연습', '"난 소질 없어" 하고 그만두기', '아무에게도 묻지 않기'] }, 0, 0.2,
              { conclude: '점수가 떨어져도 다시 연습하면 오를 수 있어요. 떨어짐은 실패가 아니라 과정이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '무언가가 잘 안 될 때 나에게 해 줄 말을 한 문장으로 써요.' }] },
        notes: '그래프 수치는 수업용 가상 자료다.',
      }),
      X('activity.role', {
        title: '친구의 자책에 답하기', method: '친구의 자책에 답하기 역할극', tool: 'emotion', minutes: 14,
        levels: { easy: '첫 장면(서: "난 쓸모없어")에서 할 말을 고르고 결과를 본 뒤, 어른께 알릴 말 신호 1장을 고른다.', base: '두 장면(며칠째 같은 말이 이어짐 더함)에서 할 말을 고르고, 말 신호 2장을 고른다.', challenge: '말 신호 고르기에 헷갈리는 카드가 더해지고, 역할극에서 들어 주는 말로 답해 본다.' },
        activity: {
          title: '"난 쓸모없어"에 답하기', tool: 'emotion',
          teacher: '"친구가 \'난 쓸모없어\'라고 하면 뭐라고 답할까요?" 장면마다 고른 뒤 결과를 읽고, 짝과 역할을 나눠 들어 주는 말로 답해 보게 한다. "그런 말은 장난이에요"라는 말에는 "장난일 수도 있지만, 도와 달라는 신호일 수 있어요. 가볍게 넘기지 않아요"라고 말해 준다. 같은 말이 며칠 이어지거나 \'없어도 돼\' 같은 말이 들리면 꼭 어른께 알린다고 분명히 짚는다. 대본은 가벼운 장면만 쓴다.',
          task: '서의 장면마다 할 말을 고르고 결과를 본 뒤, 어른께 꼭 알릴 말 신호를 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            BRANCH('서에게 할 말을 골라요.', '모둠 발표가 끝난 뒤 서가 "난 쓸모없어"라고 해요.', [['agree', '"맞아, 좀 그랬어"', '서는 고개를 숙이고 말이 없어져요.', '속상함'], ['listen', '"그렇게 느꼈구나. 무슨 일 있었어?"', '서가 발표에서 실수해서 속상했다고 말해요.', '편안함'], ['stop', '"그런 말 하지 마"', '서는 더 말하지 않아요.', '걱정']], 'listen', { who: '서', motif: 'cloud', feeling: '속상함' }, 0.2),
            BRANCH('며칠째 같은 말을 하는 서에게 할 일을 골라요.', '며칠째 서가 "나 같은 건 없어도 돼"라고 해요.', [['laugh', '"장난이지?" 하고 웃어넘긴다', '서는 다시 입을 다물어요.', '걱정'], ['adult', '"걱정돼. 같이 선생님께 가자"', '선생님이 서와 이야기하고 상담 선생님과 이어 줘요.', '편안함'], ['secret', '"나만 알고 있을게"', '서의 걱정은 그대로 남아요.', '걱정']], 'adult', { who: '서', motif: 'storm', feeling: '걱정' }, 0.2,
              { levels: { easy: { prompt: '며칠째 같은 말을 하는 서에게 할 일을 골라요.', toolOptions: { choices: [{ id: 'laugh', text: '"장난이지?" 하고 웃어넘긴다', result: '서는 다시 입을 다물어요.', mood: '걱정' }, { id: 'adult', text: '"걱정돼. 같이 선생님께 가자"', result: '선생님이 서와 이야기하고 상담 선생님과 이어 줘요.', mood: '편안함' }] } } } }),
            PICK('어른께 꼭 알릴 말 신호 카드를 골라요.', '어른께 꼭 알릴 말', ['"나 같은 건 없어도 돼"', '"사라지고 싶어"'], ['"시험이 걱정돼"', '"오늘 좀 피곤해"'], { easy: 1, easyTraps: 1, mode: 'pick', extraTraps: ['"발표 떨려"'] }, 0.2,
              { conclude: '자책하는 말에는 먼저 들어 주고, "없어도 돼"·"사라지고 싶어" 같은 말은 꼭 어른께 알려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '친구가 "난 쓸모없어"라고 할 때 해 줄 말을 한 문장으로 써요.' }] },
        notes: '역할극은 첫 장면(발표 실수)처럼 가벼운 장면만 연기한다. 말 신호 카드는 소리 내어 연기하지 않고 읽기만 한다. ' + CRISIS,
      }),
      X('wrap.card', {
        title: '나를 응원하는 말 카드', method: '나를 응원하는 말 카드', tool: 'wordcards', minutes: 6,
        levels: { easy: '자책하는 말 3개 옆에 바꾼 말 카드를 짝 짓는다.', base: '자책하는 말 5개 옆에 바꾼 말 카드를 짝 짓는다.', challenge: '짝 지은 뒤 나만의 응원 카드 한 장을 짧은 글로 쓴다.' },
        wrap: {
          teacher: '"자책하는 말을 응원하는 말로 바꿔 볼까요? 왼쪽 말 옆에 바꾼 말 카드를 놓아요." 다 놓은 뒤 바꾼 말을 반 전체가 한 번 따라 읽는다. "이렇게 말해도 기분은 그대로예요"라는 말에는 "한 번에 바뀌지 않아도 괜찮아요. 자주 말해 주면 생각 습관이 돼요"라고 말해 준다. 나만의 카드는 활동지에 써서 가져가게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'wordcards', options: { mode: 'match', words: [{ en: '아직 연습 중이야', ko: '나는 못해' }, { en: '한 번 실수한 거야', ko: '나는 늘 망쳐' }, { en: '도움을 청해도 돼', ko: '나 혼자 다 해야 해' }, { en: '나는 소중한 사람이야', ko: '나는 쓸모없어' }, { en: '다음엔 다르게 해 보자', ko: '다 내 탓이야' }] }, prompt: '자책하는 말 옆에 바꾼 말 카드를 놓아요.', target: { match: { '아직 연습 중이야': '아직 연습 중이야', '한 번 실수한 거야': '한 번 실수한 거야', '도움을 청해도 돼': '도움을 청해도 돼', '나는 소중한 사람이야': '나는 소중한 사람이야', '다음엔 다르게 해 보자': '다음엔 다르게 해 보자' } }, difficulty: 0.15,
              levels: { easy: { prompt: '자책하는 말 옆에 바꾼 말 카드를 놓아요(3장).', toolOptions: { words: [{ en: '아직 연습 중이야', ko: '나는 못해' }, { en: '한 번 실수한 거야', ko: '나는 늘 망쳐' }, { en: '나는 소중한 사람이야', ko: '나는 쓸모없어' }] }, target: { match: { '아직 연습 중이야': '아직 연습 중이야', '한 번 실수한 거야': '한 번 실수한 거야', '나는 소중한 사람이야': '나는 소중한 사람이야' } } } } },
            { type: 'short', prompt: '나만의 응원하는 말 카드 한 장을 써요.' },
            { type: 'choice', prompt: '"나는 늘 망쳐"를 바꾼 말로 알맞은 것은?', options: ['"한 번 실수한 거야"', '"역시 나는 안 돼"', '"아무도 몰라줘"'], answer: 0, difficulty: 0.15, explain: '한 번의 일이 나를 다 말해 주지는 않아요.' },
          ],
        },
        worksheet: {
          title: '나를 응원하는 말',
          items: [
            { type: 'table', prompt: '자책하는 말을 응원하는 말로 바꿔 써요.', columns: ['자책하는 말', '응원하는 말'], cells: [['나는 못해', ''], ['다 내 탓이야', '']] },
            { type: 'short', prompt: '나만의 응원 카드에 쓸 말을 한 문장으로 써요.' },
          ],
          easy: { note: '"아직 연습 중이야"를 그대로 써도 돼요.', items: [{ type: 'draw', prompt: '나를 응원하는 말 카드를 꾸며 그려요.' }] },
        },
      }),
      X('wrap.plan', {
        title: '생각이 계속 무거우면', method: '생각이 계속 무거우면', tool: 'kitchen', minutes: 6,
        levels: { easy: '점검 차례 카드 3장(생각 바꾸기 → 믿는 어른 → 상담 선생님)을 놓는다.', base: '차례 카드 4장(좋아하는 일 더함)을 놓는다.', challenge: '틀린 카드 하나를 빼고 4장을 놓은 뒤, 언제 다음 칸으로 갈지 기준을 고른다.' },
        wrap: {
          teacher: '"생각 바꾸기를 해 봐도 마음이 계속 무거우면 다음엔 무엇을 할까요?" 차례 카드를 놓고 칸마다 소리 내어 읽게 한다. "상담 선생님께 가면 큰일 난 거예요"라는 말에는 "상담 선생님은 마음이 무거울 때 함께 길을 찾는 분이에요. 일찍 갈수록 좋아요"라고 말해 준다. 무거운 생각이 며칠 이어지면 다음 칸으로 가면 된다고 짚는다.',
          exitTicket: [
            EX('kitchen', ORDER('생각이 계속 무거울 때 할 일을 차례대로 놓아요.', ['생각 바꾸기 해 보기', '좋아하는 일로 쉬기', '믿는 어른에게 말하기', '상담 선생님 찾아가기'], { mode: 'order', easy: [0, 2, 3], trap: '혼자 꾹 참기' }, 0.15)),
            { type: 'choice', prompt: '언제 다음 칸(어른·상담 선생님)으로 가면 좋을까요?', options: ['생각을 바꿔도 며칠째 무거울 때', '한 번 기분이 나쁠 때만', '절대 가지 않는다'], answer: 0, difficulty: 0.15, explain: '무거운 마음이 이어지면 어른과 함께해요.' },
            { type: 'short', prompt: '생각이 계속 무거울 때 내가 먼저 말할 어른을 써요.' },
          ],
        },
        worksheet: {
          title: '생각이 계속 무거우면',
          items: [
            { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '생각 바꾸기 → 좋아하는 일 → 믿는 어른 → ___', answer: '상담 선생님' },
            { type: 'short', prompt: '생각이 무거울 때 나를 돕는 좋아하는 일을 써요.' },
          ],
        },
        notes: CRISIS,
      }),
    );
  }

  PaperLessons.registerModules(M);
})();
