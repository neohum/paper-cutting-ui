/* 창체 계기교육 독도교육 — 초5-6 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md·framework/BRIEF_EVENTS.md, 계획: framework/events-auto.json 의 dokdo 초5-6.
 * 근거: 교육부 「독도교육 활성화 계획」(2025 — 교과·창체 통합 연간 10시간 이상 권장, 독도교육주간), 초등 내용체계(2011: 독도의 중요성 — 자연환경·지리적 특성·역사·정치·군사·경제적 가치),
 *       sources/changche/research-days.md §2. 연도·거리·문서 이름은 체계도 source 가 가리키는 lessons/units/g5-cc-dokdo.js·g6-cc-dokdo.js(외교부 독도 누리집·동북아역사재단 서술) 범위만 쓴다:
 *       512년 『삼국사기』 이사부·우산국, 1454년 『세종실록』 「지리지」(우산·무릉, 맑은 날 바라볼 수 있음), 『신증동국여지승람』 「팔도총도」(이름만, 연대 없음),
 *       1693년 무렵 조선 숙종 때 어부 안용복, 1696년 에도 막부의 울릉도 도해 금지, 1877년 태정관 지령, 1900년 10월 25일 대한제국 칙령 제41호(울도군·석도),
 *       1905년 시마네현 고시, 1946년 연합국 최고사령관 각서 제677호, 1952년 평화선 선언, 6·25전쟁 무렵 울릉도 주민의 독도의용수비대 → 경찰 → 독도경비대,
 *       울릉도~독도 87.4km·오키섬~독도 157.5km, 영해 12해리, 동도·서도, 괭이갈매기·해국·섬기린초, 난류·한류 어장, 가스 하이드레이트, 독도 등대.
 *       독도의 날(10월 25일)은 법정기념일이 아니다(research-days.md).
 * 초5-6 기준: 원인과 결과, 자기 점검표, 간단한 자료(그래프) 읽기, 모둠 토의, 갈림길(dilemma)·기준표 글쓰기(rubric-writing). 법 조문 번호·형량은 쓰지 않는다.
 * 이 영역의 처신(모든 모듈):
 *   - 대한민국 정부의 공식 입장을 사료와 근거로 차분히 다룬다. 다른 나라·그 나라 국민을 탓하거나 미워하게 하는 말을 쓰지 않는다
 *     ('일본 정부의 기록'처럼 기록을 남긴 주체를 말하고, 사람 전체를 가리키지 않는다). 거친 말 예시도 욕설·비하어 없이 '말도 안 돼!' 정도로만 쓴다.
 *   - 사료 인용은 짧게, 기록이 말하는 만큼만 말하게 한다(기록과 짐작을 가른다). 실존 인물(이사부·안용복)에게 지어낸 대사·감정을 붙이지 않는다 —
 *     말풍선은 '기록'이 말하는 꼴로 쓰고, 갈림길·편지의 인물은 '가상'으로 밝힌다(가명 한 글자: 해·담·진·서).
 *   - 정치적 중립: 정당·현직 정치인·현 정부 정책을 말하지 않는다. 그래프의 반 투표·어획 자료는 모두 '가상'이라고 화면에 적는다.
 * 주제 10개(5학년 5 · 6학년 5) × 도입 2 · 활동 4 · 정리 2 = 계획 모듈 80개 전부. 추천 조합은 체계도 sequences(학년마다 10차시).
 *
 * 계획과 다르게 한 곳(교구 한계·처신 — 모듈 levels 글은 실제 설정대로 적었다):
 *  - 안용복 장면 역할극(g5-anyb.activity.role): 실존 인물에게 지어낸 대사를 붙이지 않으려고 '기록 낭독극'으로 바꿨다. 대본은 기록 문장이고,
 *    도전의 '대사 바꾸기'는 기록에 있는 사실만으로 해설 문장을 자기 말로 바꾸기다. 타이머 판은 낭독 차례·발표 시간·스스로 점검을 잰다.
 *  - 말풍선 채우기(story fill): 말하는 이를 '기록'으로 두었다(인물 대사 아님).
 *  - 가장 중요한 기록 고르기(g5-anyb.wrap.pick): '가장 중요'는 사람마다 달라 채점하지 않는다. 분류판은 기록마다 그 기록이 보여 주는 것(까닭 카드)을 넣고,
 *    가장 중요하다고 생각하는 기록과 까닭은 짧은 글 출구 질문으로 쓴다.
 *  - 노력하는 곳 지도(g6-fact.activity.map): 근거에 '연구 장소' 자리가 없어 독도경비대·독도 등대·주민 숙소·선착장 자리(근거 단원의 확대 지도)만 쓴다.
 *  - 지도에 영해 칸 색칠(g6-area.activity.terrain): map 은 칸을 칠하지 못해 독도 둘레 바다 칸에 핀을 꽂는 문항으로 했다. 칸 지도는 줄인 그림이라 12해리와 칸 크기가 같지 않다.
 *  - 평화선과 독도 지도(g6-postwar.activity.map): 평화선 안 바다는 칸 지도 위의 줄인 그림(실제 선 모양과 다름)이다.
 *  - 안용복이 건넌 바닷길(g5-anyb.intro.route): 조선 땅·울릉도·독도·바다 건너 일본 땅을 6×4 칸에 위치 관계만 살려 그렸다.
 *  - 지구본(earth spin)은 나라 경계를 그리지 못한다: 지구를 돌려 우리나라 자리를 찾고, 영역 판단은 보기 고르기(ask)로 한다.
 *  - 콜라주(collage)는 글자를 붙이지 못한다: 모형·포스터의 글(용어·알림 글·출처)은 활동지에 쓰고 점검 칸에 표시한다.
 *  - 어획 자원 그래프(g6-postwar.activity.catch): 근거에 어획량 수치가 없어 '어느 배 하루 잡은 양(가상)' 그래프로 읽기만 한다. 실제 통계로 읽히지 않게 제목에 '가상'.
 *  - 문항 수는 단계마다 같다: '보기 2·3·4개', '장면 3·4장', '가지 2·3·4개' 같은 차이는 교구 설정(카드·칸·보기 수)으로 하고, 정리 출구 질문의 그 밖의 차이는 교사 진행으로 적었다.
 *
 * 사람 확인(공식 자료 — 외교부 독도 누리집·동북아역사재단 독도체험관·교육부 독도교육 자료 — 에서 문구를 확인한다):
 *  - g5-usan.*: 『삼국사기』의 '나무 사자' 이야기, '우산국은 울릉도를 중심으로 둘레 섬(독도)을 아우른 나라'라는 정부 설명의 표현 — 외교부·동북아역사재단.
 *  - g5-maps.*: 「팔도총도」에 우산도가 울릉도 안쪽(서쪽)에 그려진 점, 옛 지도를 붓으로 어림해 그렸다는 일반 설명, 지도 만들기의 차례(붓 지도 → 방위표·축척 지도 → 인공위성 사진 지도) — 동북아역사재단·국토지리정보원.
 *  - g5-anyb.*: 안용복이 일본 어부들과 마주친 뒤 일본으로 가게 된 경위(1693), 바다 건너 일본 땅이 울릉도의 남동쪽이라는 방위(칸 지도 표시) — 외교부·동북아역사재단.
 *  - g5-guard.*: 독도의용수비대를 만든 까닭으로 쓴 '6·25전쟁으로 나라가 어려웠다'는 배경 문장(결성 연도·대장 이름은 근거에 없어 쓰지 않았다) — 동북아역사재단·국가보훈부.
 *  - g5-value.*: 가치 네 갈래(영토·생태·자원·안보)에 넣은 카드 문장, 특히 안보 가치('동해의 바다와 하늘을 살피는 자리') — 외교부·교육부 독도교육 자료.
 *  - g6-area.*: 영공은 영토와 영해 위의 하늘이라는 설명, 다른 나라 영해·영공을 지날 때 그 나라의 허락·규칙을 따른다는 문장 — 외교부·국립해양조사원.
 *  - g6-docs.*: 태정관 지령의 '울릉도 외 한 섬은 일본과 관계없다'는 줄임 표현, 시마네현 고시가 지방 현의 고시였다는 점 — 외교부·동북아역사재단.
 *  - g6-postwar.*: 각서 제677호가 독도를 일본의 통치·행정 범위에서 뺐다는 표현, 평화선이 독도를 우리 바다 안에 넣었다는 표현 — 외교부.
 *  - g6-fact.*: 독도를 지키는 노력(독도경비대 경비·등대 운영·주민 생활·생태 연구와 보호·정부 홍보)과 출처 확인 차례 — 외교부·해양수산부.
 *  - g6-respond.*: 잘못된 정보에 정중하게 답하는 방법(근거·출처·존중하는 말) — 교육부 독도교육 자료·동북아역사재단.
 */
(function () {
  const M = [];
  // 모듈 머리: mk('g5-usan', 5)('intro.old', {...}) → id·type·topic·grades 를 채운다
  const mk = (topic, grade) => (suffix, o) => Object.assign({
    id: `dokdo.e56.${topic}.${suffix}`, schema: 'edu-module.v1', type: suffix.split('.')[0],
    domain: 'dokdo', band: '초5-6', topic: `dokdo.e56.${topic}`, grades: [grade],
  }, o);
  const art = (draw, banner, motif = 'wave', color = 'sky') => ({ draw, banner, extra: [{ motif, x: 300, y: 96, color }] });
  const cut = (p) => String(p).replace(/[.?]$/, '');
  const inter = (slots, g) => { const out = []; const n = Math.max(0, ...slots.map((s) => (g[s] || []).length)); for (let i = 0; i < n; i++) for (const s of slots) if ((g[s] || [])[i]) out.push(g[s][i]); return out; };
  const mixIn = (g, t) => { const out = g.slice(); t.forEach((x, i) => out.splice(Math.min(out.length, 1 + i * 2), 0, x)); return out; };

  // ---- 카드 판 문항 ----
  // 나누기(mindmap·timeline sort): groups = { 칸: [카드…] }. 쉬움 = 칸마다 앞 easy장, 도전 = extra 카드 + 함정 카드
  const SORT = (prompt, { topic, slots, groups, easy = 2, extra = {}, traps = [], mode, axis }, d, more) => {
    const take = (n) => Object.fromEntries(slots.map((s, i) => [s, groups[s].slice(0, Array.isArray(n) ? n[i] : n)]));
    const full = Object.fromEntries(slots.map((s) => [s, [...groups[s], ...(extra[s] || [])]]));
    const base = Object.assign(topic ? { topic } : {}, { slots, cards: inter(slots, groups) }, mode ? { mode } : {}, axis ? { axis } : {});
    const ez = take(easy); const fullCards = inter(slots, full); fullCards.splice(1, 0, ...traps.slice(0, 1)); if (traps[1]) fullCards.push(traps[1]);
    const count = (g) => Object.values(g).reduce((a, b) => a + b.length, 0);
    const lv = { easy: { prompt: `${cut(prompt)}(카드 ${count(ez)}장).`, toolOptions: { cards: inter(slots, ez) }, target: { sort: ez } } };
    if (Object.keys(extra).length || traps.length) lv.challenge = { prompt: `${cut(prompt)}(카드 ${fullCards.length}장${traps.length ? ', 넣지 않을 카드도 있어요' : ''}).`, toolOptions: { cards: fullCards }, target: { sort: full } };
    return Object.assign({ prompt, toolOptions: base, target: { sort: groups }, difficulty: d, levels: lv }, more);
  };
  // 분류판 글 카드 모드(sortboard): 쉬움 = 앞 easy장(limit), 도전 = more(더할 카드 + 함정 카드)
  const SB = (prompt, { slots, groups, easy = 4, extra = {}, traps = [] }, d, more) => {
    const cards = inter(slots, groups);
    const add = inter(slots, extra); add.splice(1, 0, ...traps);
    const pick = (list) => Object.fromEntries(slots.map((s) => [s, [...(groups[s] || []), ...(extra[s] || [])].filter((c) => list.includes(c))]));
    const lv = { easy: { prompt: `${cut(prompt)}(카드 ${easy}장).`, toolOptions: { limit: easy }, target: { sort: pick(cards.slice(0, easy)) } } };
    if (add.length) lv.challenge = { prompt: `${cut(prompt)}(카드 ${cards.length + add.length}장${traps.length ? ', 넣지 않을 카드도 있어요' : ''}).`, toolOptions: { more: add }, target: { sort: pick([...cards, ...add]) } };
    return Object.assign({ prompt, toolOptions: { slots, cards }, target: { sort: pick(cards) }, difficulty: d, levels: lv }, more);
  };
  // 차례(story·timeline order): steps = [카드 글…](바른 차례). easy = 쉬움에 남길 칸 번호, trap = 도전에서 끼우는 틀린 카드, add = 도전에서 더하는 카드(바른 자리 번호와 함께)
  const ORDER = (prompt, steps, { easy = [0, 1, 2], trap, opts = {}, add } = {}, d, more) => {
    const mix = (list) => [list[2], list[0], ...list.slice(3), list[1]].filter((x) => x != null);
    const ez = easy.map((i) => steps[i]);
    const lv = { easy: { prompt: `${cut(prompt)}(카드 ${ez.length}장).`, toolOptions: { slots: ez.length, cards: mix(ez) }, target: { order: ez } } };
    if (trap) lv.challenge = { prompt: `${cut(prompt)}(틀린 카드 하나는 빼요).`, toolOptions: { slots: steps.length, cards: [...mix(steps), trap] }, target: { order: steps } };
    if (add) { const all = steps.slice(); all.splice(add[1], 0, add[0]); lv.challenge = { prompt: `${cut(prompt)}(카드 ${all.length}장).`, toolOptions: { slots: all.length, cards: mix(all) }, target: { order: all } }; }
    return Object.assign({ prompt, toolOptions: Object.assign({}, opts, { slots: steps.length, cards: mix(steps) }), target: { order: steps }, difficulty: d, levels: lv }, more);
  };
  // 짝 짓기(match): pairs = [[칸 이름, 맞는 카드]…]. 쉬움 = 앞 easy칸, 기본 = 앞 base칸, 도전 = 모든 칸. traps = 남는 카드
  const MAT = (prompt, pairs, traps = [], { easy = 2, base = 3, opts = {} } = {}, d, more) => {
    const sl = pairs.map(([label], i) => ({ id: `m${i + 1}`, label }));
    const cardsOf = (n) => { const c = pairs.slice(0, n).map(([, x]) => x).reverse(); c.splice(1, 0, ...traps); return c; };
    const tg = (n) => ({ match: Object.fromEntries(pairs.slice(0, n).map(([, x], i) => [`m${i + 1}`, x])) });
    const lv = { easy: { prompt: `${cut(prompt)}(칸 ${easy}개).`, toolOptions: { slots: sl.slice(0, easy), cards: cardsOf(easy) }, target: tg(easy) } };
    if (pairs.length > base) lv.challenge = { prompt: `${cut(prompt)}(칸 ${pairs.length}개).`, toolOptions: { slots: sl, cards: cardsOf(pairs.length) }, target: tg(pairs.length) };
    return Object.assign({ prompt, toolOptions: Object.assign({ mode: 'match' }, opts, { slots: sl.slice(0, base), cards: cardsOf(base) }), target: tg(base), difficulty: d, levels: lv }, more);
  };
  // 고르기(pick): good = 담을 카드, traps = 남길 카드. 쉬움 = good 앞 easy장 + 함정 easyTraps장, 도전 = extraTraps 더함
  const PICK = (prompt, basket, good, traps, { easy = 1, easyTraps = 1, extraTraps = [], opts = {} } = {}, d, more) => {
    const o = Object.assign({ mode: 'pick', basket }, opts, { cards: mixIn(good, traps) });
    const lv = { easy: { prompt: `${cut(prompt)}(카드 ${easy + easyTraps}장).`, toolOptions: { cards: mixIn(good.slice(0, easy), traps.slice(0, easyTraps)) }, target: { pick: good.slice(0, easy) } } };
    if (extraTraps.length) lv.challenge = { prompt: `${cut(prompt)}(헷갈리는 카드도 있어요).`, toolOptions: { cards: mixIn(good, [...traps, ...extraTraps]) }, target: { pick: good } };
    return Object.assign({ prompt, toolOptions: o, target: { pick: good }, difficulty: d, levels: lv }, more);
  };
  // 빈칸 채우기(story·wordcards fill): blanks = [[칸 글('___' 자리), 넣을 카드]…]. 빈칸 1·2·3개(쉬움·기본·도전). who = 말풍선 주인(story)
  const FILL = (prompt, blanks, cards, { who, motifs = [], opts = {} } = {}, d, more) => {
    const sl = blanks.map(([label], i) => Object.assign({ id: `b${i + 1}`, label }, who ? { who } : {}, motifs[i] ? { motif: motifs[i] } : {}));
    const tg = (n) => ({ fill: Object.fromEntries(blanks.slice(0, n).map(([, c], i) => [`b${i + 1}`, c])) });
    const lv = { easy: { prompt: `${cut(prompt)}(빈칸 하나).`, toolOptions: { slots: sl.slice(0, 1) }, target: tg(1) } };
    if (blanks.length > 2) lv.challenge = { prompt: `${cut(prompt)}(빈칸 셋).`, toolOptions: { slots: sl }, target: tg(3) };
    return Object.assign({ prompt, toolOptions: Object.assign({ mode: 'fill' }, opts, { slots: sl.slice(0, 2), cards }), target: tg(2), difficulty: d, levels: lv }, more);
  };
  // 고르기 문항(emotion branch): 상황 + 보기. 결과는 맞힌 뒤에도 보인다
  const BR = (prompt, situation, choices, ok, d, more) => ({ prompt, toolOptions: { mode: 'branch', situation, choices: choices.map(([id, text, result, why]) => Object.assign({ id, text, result }, why ? { why } : {})) }, target: { choice: ok }, difficulty: d, ...more });

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
  // 쉬움 = 기준 2개 + 문장 틀, 기본 = 기준 3개, 도전 = 기준 3개 + chCrit(꼭 넣을 낱말 must). sents = [쉬움, 기본, 도전] 최소 문장 수
  const RUB = (prompt, { topic, starter, crit, must, chars = [20, 200], title, sents, chCrit = '한 군데 이상 고쳐 썼다' }, d, more) => {
    const sn = (k) => (sents ? { sentences: [sents[k], 6] } : {});
    return Object.assign({
      prompt, toolOptions: { topic, minChars: chars[0], maxChars: chars[1], title }, target: Object.assign({ selfCheck: crit.slice(0, 3), chars }, sn(1)), difficulty: d,
      levels: {
        easy: { prompt: `${cut(prompt)}(문장 틀을 써도 돼요).`, toolOptions: { starter }, target: Object.assign({ selfCheck: crit.slice(0, 2), chars: [Math.max(10, chars[0] - 10), chars[1]] }, sn(0)) },
        challenge: { prompt: `${cut(prompt)}. 다 쓰면 한 군데 고쳐 써요.`, target: Object.assign({ selfCheck: [...crit.slice(0, 3), chCrit], chars: [chars[0] + 10, chars[1]], mustInclude: must }, sn(2)) },
      },
    }, more);
  };
  // 정리용 출구 질문 꼴로 바꾸기(활동 문항 모양 → { type: 'tool', tool, options, … })
  const EX = (tool, it) => Object.assign({ type: 'tool', tool, options: it.toolOptions, prompt: it.prompt, target: it.target, difficulty: it.difficulty || 0.15 }, it.levels ? { levels: it.levels } : {});
  const RUBX = (prompt, spec) => EX('rubric-writing', RUB(prompt, spec, 0.2));
  // 자기 점검표(timer selfCheck) — 쉬움 easy칸·기본 base칸·도전 list 전부(base 보다 많을 때)
  const SELF = (title, list, prompt = '오늘 해낸 것에 스스로 표시해요.', { easy = 2, base = 3 } = {}) => {
    const lv = { easy: { prompt: `${cut(prompt)}(${easy}칸).`, target: { selfCheck: list.slice(0, easy) } } };
    if (list.length > base) lv.challenge = { prompt: `${cut(prompt)}(${list.length}칸).`, target: { selfCheck: list } };
    return { type: 'tool', tool: 'timer', options: { title }, prompt, target: { selfCheck: list.slice(0, base) }, difficulty: 0.1, levels: lv };
  };
  // 발표·토의 시간 계획(timer plan) — 우리 반 약속 값(초)
  const PLAN = (prompt, labels, start, want, d, more) => ({ prompt, toolOptions: { title: labels.join('·'), labels, plan: start, showTotal: true }, target: { plan: want }, difficulty: d, ...more });
  // 콜라주 모형·포스터 — 쉬움 조각 3개·점검 2칸, 기본 조각 5개·점검 3칸, 도전 점검 4칸
  const COL = (prompt, crit, { shapes = ['square', 'rect', 'triangle', 'circle', 'semi', 'diamond', 'leaf', 'star'], colors = ['초록', '파랑', '하늘', '노랑', '주황', '분홍', '보라', '하양'], add = {} } = {}, d = 0.1) => ({
    prompt, toolOptions: { shapes, colors, maxPieces: 16 }, target: { selfCheck: crit.slice(0, 3), minPieces: 5 }, difficulty: d,
    levels: {
      easy: { prompt: `${cut(prompt)}(조각 3개 이상).`, target: { selfCheck: crit.slice(0, 2), minPieces: 3 } },
      challenge: { prompt: `${cut(prompt)}(점검 네 칸).`, target: Object.assign({ selfCheck: crit.slice(0, 4), minPieces: 5 }, add) },
    },
  });
  // 그래프 읽기(chart read): data = [[이름, 값]…], q·choices = 질문·보기(보기 수는 단계마다 easyN·전부)
  const CHR = (prompt, { type = 'bar', title, unit, data, question, choices, pick, why, easyChoices, chChoices, xLabel, yLabel }, d, more) => {
    const o = Object.assign({ type, mode: 'read', title, unit, data, question, choices }, xLabel ? { xLabel } : {}, yLabel ? { yLabel } : {}, why ? { why } : {});
    const lv = {};
    if (easyChoices) lv.easy = { toolOptions: { choices: easyChoices.c, showValues: true }, target: { pick: easyChoices.pick } };
    else lv.easy = { toolOptions: { showValues: true } };
    if (chChoices) lv.challenge = { toolOptions: { choices: chChoices.c }, target: { pick: chChoices.pick } };
    if (easyChoices && easyChoices.pick !== pick) lv.easy.prompt = prompt;
    if (chChoices && chChoices.pick !== pick) lv.challenge.prompt = prompt;
    return Object.assign({ prompt, toolOptions: o, target: { pick }, difficulty: d, levels: lv }, more);
  };

  // ---- 칸 지도 ----
  // 우리나라 칸 지도(한반도를 6×9 칸으로 줄인 그림 — 칸 자리는 위치 관계만 살린다). 독도 [5,5]는 울릉도 [4,4]의 남동쪽
  const KOR_LAND = [[1, 0], [2, 0], [3, 0], [4, 0], [1, 1], [2, 1], [3, 1], [4, 1], [1, 2], [2, 2], [3, 2], [4, 2],
    [1, 3], [2, 3], [3, 3], [1, 4], [2, 4], [3, 4], [1, 5], [2, 5], [3, 5], [1, 6], [2, 6], [3, 6], [1, 7], [2, 7], [3, 7]];
  const KOR_SEA = [[0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8], [4, 3], [4, 4], [4, 5], [4, 6], [4, 7], [4, 8],
    [5, 2], [5, 3], [5, 4], [5, 5], [5, 6], [5, 7], [5, 8], [1, 8], [2, 8], [3, 8]];
  const KOR = (places, more) => Object.assign({ grid: [6, 9], title: '우리나라 칸 지도', regions: [{ name: '우리나라 땅', cells: KOR_LAND, color: 'mint' }], regionNames: false, sea: KOR_SEA, places }, more || {});
  const P = {
    seoul: { name: '서울', icon: 'capital', at: [2, 5] }, busan: { name: '부산', icon: 'port', at: [3, 7] },
    jeju: { name: '제주도', icon: 'island', at: [1, 8] }, baekdu: { name: '백두산', icon: 'mountain', at: [2, 0] },
    ulleung: { name: '울릉도', icon: 'island', at: [4, 4] }, dokdo: { name: '독도', icon: 'island', at: [5, 5] },
    pohang: { name: '포항', icon: 'port', at: [3, 6] },
  };
  // 활동지 전용 작은 지도(6×4) — 9줄 지도는 인쇄 글자가 작다
  const KORW_LAND = [[1, 0], [2, 0], [3, 0], [1, 1], [2, 1], [3, 1], [1, 2], [2, 2], [3, 2], [2, 3], [3, 3]];
  const KORW_SEA = [[0, 2], [0, 3], [4, 0], [4, 1], [4, 2], [4, 3], [5, 0], [5, 1], [5, 2], [5, 3], [1, 3]];
  const KORW = (places) => ({ grid: [6, 4], regions: [{ name: '우리나라 땅', cells: KORW_LAND, color: 'mint' }], regionNames: false, sea: KORW_SEA, places });
  const PW = { seoul: { name: '서울', icon: 'capital', at: [2, 1] }, ulleung: { name: '울릉도', icon: 'island', at: [4, 1] }, dokdo: { name: '독도', icon: 'island', at: [5, 2] }, jeju: { name: '제주도', icon: 'island', at: [1, 3] } };
  // 독도 확대 칸 지도(서쪽 서도, 동쪽 동도)
  const DK_SEO = [[1, 1], [1, 2], [2, 2]];
  const DK_DONG = [[3, 1], [4, 1], [4, 2]];
  const DK_SEA = [];
  for (let r = 0; r < 4; r++) for (let c = 0; c < 6; c++) if (![...DK_SEO, ...DK_DONG].some(([x, y]) => x === c && y === r)) DK_SEA.push([c, r]);
  const DK = (places, more) => Object.assign({ grid: [6, 4], title: '독도 확대 지도', regions: [{ name: '서도', cells: DK_SEO, color: 'mint' }, { name: '동도', cells: DK_DONG, color: 'peach' }], sea: DK_SEA, places }, more || {});
  const DP = {
    guard: { name: '독도경비대', icon: 'police', at: [3, 1] }, light: { name: '독도 등대', icon: 'lighthouse', at: [4, 1] },
    house: { name: '주민 숙소', icon: 'house', at: [1, 2] }, port: { name: '선착장', icon: 'port', at: [4, 2] },
  };
  // 지도 문항: 핀(target 그대로) / 읽고 고르기(readOnly + ask)
  const MI = (prompt, toolOptions, target, d, more) => ({ prompt, toolOptions, target, difficulty: d, ...more });
  const MQ = (prompt, toolOptions, q, choices, pick, d, more) => ({ prompt, toolOptions: Object.assign({}, toolOptions, { readOnly: true, ask: { q, choices } }), target: { pick }, difficulty: d, ...more });

  // 5학년 기록 카드(시간 띠)
  const R5 = { y512: '512년 『삼국사기』 우산국', y1454: '1454년 『세종실록』 「지리지」', y1693: '1693년 무렵 안용복', y1696: '1696년 막부 도해 금지', y1900: '1900년 칙령 제41호', guard: '독도의용수비대', now: '오늘의 독도경비대' };
  const AX = { axis: ['옛날', '오늘날'] };

  // ======== 5학년 · 우산국과 『세종실록』 「지리지」 (초 내용체계: 독도의 중요성 — 역사적 특성) ========
  {
    const X = mk('g5-usan', 5);
    M.push(
      X('intro.old', {
        title: '옛 책 그림 보고 질문 고르기', method: '옛 책 그림 보고 궁금한 점 고르기', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 질문 카드 두 장(누가 썼을까·무엇이 적혔을까)을 읽어 주고 하나를 고르게 한다.', base: '질문 카드 세 장 가운데 묻고 싶은 것을 스스로 고른다.', challenge: '카드에 없는 질문을 하나 만들어 짝에게 묻는다.' },
        intro: {
          teacher: '"옛날 책 한 권이 있어요. 이 책에 대해 무엇을 묻고 싶나요?" 시연 단추로 질문 카드가 바구니에 담기는 모습을 보인다. 대답을 듣고 오늘 읽을 두 책이 『삼국사기』와 『세종실록』 「지리지」이며, 두 책에 울릉도와 독도 이야기가 있다고 밝힌다. "옛 책 이야기는 그냥 옛날이야기예요"라는 말이 나오면 "나라에서 만든 역사책에 적혔다면 무엇을 알려 줄까요?"라고 되묻는다.',
          student: '옛 책 그림을 보고 가장 묻고 싶은 질문 카드를 하나 골라 짝에게 말해 보아요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '묻고 싶은 질문', cards: ['누가 쓴 책일까?', '책 무게는 얼마일까?', '언제 쓴 책일까?', '무엇이 적혔을까?'], shuffle: false }, sequence: [{ pick: ['누가 쓴 책일까?'] }, { pick: ['누가 쓴 책일까?', '언제 쓴 책일까?', '무엇이 적혔을까?'] }] },
          art: art('an old paper-cut book opened on a desk, with a tiny paper island drawing on its page and a paper child holding a question mark card', '옛 책에 무엇이 적혔을까?', 'cloud', 'sky'),
        },
      }),
      X('intro.map', {
        title: '우산국 자리 지도에 표시', method: '우산국 자리 지도에 표시', tool: 'map', minutes: 6,
        levels: { easy: '교사가 울릉도 한 곳에 함께 핀을 꽂는다.', base: '울릉도와 독도 두 곳에 핀을 꽂아 우산국 범위를 손가락으로 그린다.', challenge: '두 섬에 핀을 꽂은 뒤 신라가 있던 동남쪽 땅을 가리키며 바다 건너 거리를 어림한다.' },
        intro: {
          teacher: '"옛날 동해 바다 한가운데에 \'우산국\'이라는 나라가 있었어요. 어디였을까요?" 시연 단추로 울릉도와 독도에 핀이 차례로 꽂히는 모습을 보인다. 우산국은 울릉도를 중심으로 둘레 섬(독도)을 아우른 나라로 본다는 것이 우리 정부의 설명이라고 알려 준다. "우산국은 비 오는 나라예요"처럼 이름으로 짐작하는 학생에게는 "이름은 옛사람이 부른 말이에요. 기록에서 확인해 볼까요?"라고 말한다.',
          student: '지도에서 울릉도와 독도를 찾고, 우산국이 어디쯤이었을지 손가락으로 그려 보아요.',
          demo: { tool: 'map', options: KOR([P.ulleung, P.dokdo, P.pohang]), sequence: [{ place: '울릉도' }, { place: '독도' }] },
          art: art('a paper-cut sea with two small paper islands, one big and one tiny, and an old paper flag on the big island', '우산국은 어디였을까?', 'wave', 'sky'),
        },
        notes: '칸 지도는 줄인 그림이라 칸 수가 실제 거리와 같지 않다고 먼저 밝힌다.',
      }),
      X('activity.story', {
        title: '이사부 이야기 차례 놓기', method: '이사부 이야기 차례 놓기', tool: 'story', minutes: 14,
        levels: { easy: '장면 카드 3장을 차례대로 놓고, 말풍선 빈칸 하나를 채운다.', base: '장면 카드 4장을 놓고, 말풍선 빈칸 두 개를 채운다.', challenge: '틀린 장면 하나를 빼고 4장을 놓은 뒤, 말풍선 빈칸 세 개를 채운다.' },
        activity: {
          title: '『삼국사기』 우산국 이야기', tool: 'story',
          teacher: '"『삼국사기』에는 512년 신라 지증왕 때 이사부가 우산국을 신라에 속하게 했다는 기록이 있어요. 무엇이 먼저였을까요?" 장면을 놓을 때마다 "그래서 어떻게 되었나요?"라고 물어 원인과 결과로 잇게 한다. 나무로 만든 사자를 배에 싣고 갔다는 이야기는 역사책에 실린 이야기라는 점을 짚는다. 말풍선은 이사부의 말이 아니라 \'기록\'이 알려 주는 문장이라고 밝힌다.',
          task: '『삼국사기』에 실린 우산국 이야기 장면을 차례대로 놓고, 기록 말풍선의 빈칸을 채워요.', levels: { easy: { live: true }, base: {}, challenge: {} },
          items: [
            ORDER('『삼국사기』 우산국 이야기를 차례대로 놓아요.', ['울릉도에 우산국이 있었어요', '신라 이사부가 우산국에 가요', '나무 사자를 배에 싣고 가요', '우산국이 신라에 속해요'], { easy: [0, 1, 3], trap: '이사부가 우산국 왕이 돼요' }, 0.2),
            FILL('기록 말풍선의 빈칸에 알맞은 카드를 넣어요.', [['512년 신라의 ___가 우산국으로 갔어요.', '이사부'], ['이사부는 나무로 만든 ___를 배에 실었어요.', '사자'], ['그 뒤 우산국은 ___에 속했어요.', '신라']], ['이사부', '사자', '신라', '고려', '호랑이'], { who: '기록', motifs: ['wave', 'leaf', 'sun'] }, 0.2, { conclude: '『삼국사기』는 512년 우산국이 신라에 속했다고 기록했어요.' }),
            { prompt: '이 이야기가 나라의 역사책에 실렸다는 것은 무엇을 알려 줄까요? 모둠에서 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 수를 써요.', text: '___년, 신라 이사부가 우산국을 신라에 속하게 했다.', answer: '512' }] },
      }),
      X('activity.meaning', {
        title: '기록이 보여 주는 것 고르기', method: '기록이 보여 주는 것 고르기', tool: 'sortboard', minutes: 13,
        levels: { easy: '카드 4장을 \'기록이 보여 주는 것\'과 \'기록에 없는 것\'으로 나눈다.', base: '카드 6장을 나눈다.', challenge: '카드 8장을 나누고, 헷갈린 카드 하나의 까닭을 짝에게 말한다.' },
        activity: {
          title: '『삼국사기』가 보여 주는 것', tool: 'sortboard',
          teacher: '"기록에 적힌 것과 우리가 짐작한 것을 나누어 볼까요?" 카드마다 "책에 그렇게 적혀 있나요?"라고 물어 근거를 찾게 한다. "우산국에 큰 성이 있었을 거예요"를 보여 주는 것에 넣는 학생에게 "그럴 수도 있지만, 기록에 적혀 있나요? 짐작과 기록을 나누어요"라고 말한다. 옛 기록은 이야기일 뿐이라는 생각에는 "나라가 펴낸 역사책은 그때 사람들이 무엇을 알았는지 보여 주는 자료예요"라고 짚는다.',
          task: '『삼국사기』 우산국 기록 카드를 \'기록이 보여 주는 것\'과 \'기록에 없는 것\'으로 나누어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            SB('우산국 기록 카드를 두 바구니에 나누어요.', { slots: ['기록이 보여 주는 것', '기록에 없는 것'], groups: { '기록이 보여 주는 것': ['512년에 우산국이 있었다', '우산국이 신라에 속했다', '이사부가 우산국에 갔다'], '기록에 없는 것': ['우산국 사람 수', '우산국 왕의 얼굴', '이사부의 키'] }, extra: { '기록이 보여 주는 것': ['옛사람이 섬을 알고 있었다'], '기록에 없는 것': ['우산국 성의 크기'] } }, 0.2),
            SB('기록과 짐작을 나누어요.', { slots: ['기록', '짐작'], groups: { 기록: ['『삼국사기』에 실렸다', '신라 지증왕 때 일이다', '나무 사자 이야기가 있다'], 짐작: ['우산국은 비가 많았다', '이사부는 바다를 무서워했다', '우산국 배가 아주 컸다'] } }, 0.25, { conclude: '기록은 적힌 만큼만 말하고, 짐작은 짐작이라고 밝혀요.' }),
            { prompt: '헷갈렸던 카드 하나를 골라, 왜 그 바구니에 넣었는지 짝에게 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '『삼국사기』 우산국 기록이 보여 주는 것은?', options: ['우산국이 신라에 속했다', '우산국 사람 수', '이사부의 키'], answer: 0 }] },
      }),
      X('activity.see', {
        title: '맑은 날 보인다는 구절', method: '맑은 날 서로 보인다는 구절 풀기', tool: 'mindmap', minutes: 14,
        levels: { easy: '가지 2개(우산·무릉)에 오늘의 섬 이름 카드를 잇는다.', base: '가지 4개(우산·무릉·맑은 날·보인다)에 뜻 카드를 잇는다.', challenge: '가지 4개를 잇고, 구절의 뜻을 한 문장으로 말한다.' },
        activity: {
          title: '『세종실록』 「지리지」 구절 풀기', tool: 'mindmap',
          teacher: '"1454년에 만든 『세종실록』 「지리지」에는 \'우산과 무릉 두 섬은 서로 거리가 멀지 않아 날씨가 맑으면 바라볼 수 있다\'고 적혀 있어요. 낱말마다 무슨 뜻일까요?" 가지에 카드를 붙일 때마다 오늘의 지도와 견주게 한다. 우산과 무릉을 바꾸어 붙이는 학생에게 "우산은 작은 섬, 무릉은 큰 섬의 옛 이름이에요. 오늘은 어떻게 부르지요?"라고 묻는다. 기록이 말하는 것(두 섬이 보일 만큼 가깝다)과 말하지 않는 것을 가르게 한다.',
          task: '「지리지」 구절의 낱말 가지에 알맞은 뜻 카드를 잇고, 구절의 뜻을 골라요.', levels: { easy: { live: true }, base: {}, challenge: {} },
          items: [
            MAT('구절의 낱말 가지에 알맞은 뜻 카드를 이어요.', [['우산', '오늘의 독도'], ['무릉', '오늘의 울릉도'], ['맑은 날', '날씨가 맑을 때'], ['보인다', '눈으로 바라볼 수 있다']], ['배로 건너갔다'], { easy: 2, base: 4, opts: { topic: '맑은 날 서로 보인다' } }, 0.2),
            PICK('「지리지」 구절의 뜻으로 알맞은 카드를 골라요.', '구절의 뜻', ['두 섬은 가까워 맑으면 보인다'], ['두 섬은 아주 멀다', '두 섬은 한 섬의 두 이름'], { easy: 1, easyTraps: 1, extraTraps: ['두 섬에 사람이 살았다'], opts: { topic: '맑은 날 서로 보인다' } }, 0.2, { conclude: '「지리지」는 우산(독도)과 무릉(울릉도)을 함께 적고, 맑은 날 서로 보인다고 했어요.' }),
            { prompt: '구절의 뜻을 \'우산과 무릉은 …\'으로 시작하는 한 문장으로 짝에게 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 오늘의 섬 이름을 써요.', text: '옛 이름 우산은 오늘의 ___, 무릉은 오늘의 울릉도이다.', answer: '독도' }] },
      }),
      X('activity.distance', {
        title: '두 섬이 보이는 까닭', method: '두 섬 보이는 까닭 자료 읽기', tool: 'chart', minutes: 13,
        levels: { easy: '막대 끝에 거리 값이 보이고, 보기 2개 가운데 고른다.', base: '값 없이 막대를 읽고 보기 3개 가운데 고른다.', challenge: '보기 4개 가운데 고르고, 자료를 근거로 까닭을 말한다.' },
        activity: {
          title: '독도까지 거리 막대 읽기', tool: 'chart',
          teacher: '"외교부 자료에 따르면 독도는 울릉도에서 약 87.4km, 일본 오키섬에서 약 157.5km 떨어져 있어요. 막대가 짧은 쪽은 무엇을 뜻할까요?" 막대 길이와 거리를 손가락으로 짚게 한다. 큰 수가 더 가깝다고 읽는 학생에게 "거리는 작을수록 가까워요. 어느 막대가 짧은가요?"라고 묻는다. 87.4를 874로 읽으면 점(소수점)의 자리를 다시 보게 한다. 「지리지」의 \'맑으면 바라볼 수 있다\'와 자료를 잇게 한다.',
          task: '독도까지 거리 막대그래프를 읽고, 맑은 날 울릉도에서 독도가 보일 수 있는 까닭을 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            CHR('막대그래프를 보고 독도와 더 가까운 섬을 골라요.', { title: '독도까지 거리(외교부 자료)', unit: 'km', data: [['울릉도에서', 87.4], ['오키섬에서', 157.5]], question: '독도와 더 가까운 섬은?', choices: ['울릉도', '오키섬'], pick: 0, xLabel: '출발한 섬', yLabel: '거리' }, 0.15),
            CHR('맑은 날 울릉도에서 독도가 보일 수 있는 까닭을 골라요.', { title: '독도까지 거리(외교부 자료)', unit: 'km', data: [['울릉도에서', 87.4], ['오키섬에서', 157.5]], question: '맑은 날 울릉도에서 독도가 보이는 까닭은?', choices: ['두 섬이 87.4km로 가까워서', '독도가 아주 높은 산이어서', '울릉도에 큰 망원경이 있어서'], pick: 0, easyChoices: { c: ['두 섬이 87.4km로 가까워서', '울릉도에 큰 망원경이 있어서'], pick: 0 }, chChoices: { c: ['두 섬이 87.4km로 가까워서', '독도가 아주 높은 산이어서', '울릉도에 큰 망원경이 있어서', '바닷물이 아주 맑아서'], pick: 0 } }, 0.2, { conclude: '울릉도와 독도는 87.4km로 가까워 맑은 날 눈으로 보여요.' }),
            { prompt: '그래프의 수를 넣어 \'맑은 날 두 섬이 보이는 까닭\'을 짝에게 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 수를 써요.', text: '독도는 울릉도에서 약 ___km 떨어져 있다.', answer: '87.4' }] },
        notes: '거리는 외교부 독도 누리집의 서술이다. 다른 거리를 지어 넣지 않는다.',
      }),
      X('wrap.check', {
        title: '기록 이름·연도·뜻 점검', method: '자기 점검표로 이해 확인', tool: 'timer', minutes: 7,
        levels: { easy: '점검 칸 2개(기록 이름·연도)를 표시한다.', base: '점검 칸 3개(이름·연도·뜻)를 표시한다.', challenge: '점검 칸 4개를 표시하고 짝과 서로 묻고 답해 점검한다.' },
        wrap: {
          teacher: '"오늘 만난 두 기록의 이름, 연도, 뜻을 말할 수 있나요?" 점검 칸을 스스로 읽고 표시하게 한다. 출구 2번에서 \'두 섬에 사람이 많이 살았다\'를 고른 학생에게 "「지리지」 구절에 그 말이 있었나요? 기록이 말한 만큼만 말해요"라고 짚는다. 도전 학생은 짝에게 "1454년에 만든 책은?"처럼 묻게 한다.',
          exitTicket: [
            SELF('두 기록 점검', ['두 기록의 이름을 말할 수 있다', '기록의 연도를 말할 수 있다', '기록이 보여 주는 뜻을 말할 수 있다', '짝과 서로 묻고 답했다']),
            { type: 'choice', prompt: '『세종실록』 「지리지」에 우산과 무릉은 어떻다고 적혀 있나요?', options: ['맑은 날 서로 바라볼 수 있다', '두 섬에 사람이 많이 살았다', '두 섬은 아주 멀다'], answer: 0, difficulty: 0.15, explain: '「지리지」는 두 섬이 멀지 않아 맑으면 보인다고 했어요.' },
            { type: 'short', prompt: '오늘 기록 공부에서 가장 기억에 남는 것을 한 문장으로 써요.' },
          ],
        },
        worksheet: {
          title: '두 기록 점검',
          items: [
            { type: 'table', prompt: '두 기록을 정리해요.', columns: ['기록 이름', '연도', '보여 주는 것'], cells: [['『삼국사기』', '', ''], ['『세종실록』 「지리지」', '', '']], answer: '512년·우산국이 신라에 속함 / 1454년·우산·무릉이 맑은 날 보임' },
            { type: 'short', prompt: '옛 기록이 근거가 될 수 있는 까닭을 한 문장으로 써요.' },
          ],
          easy: { note: '512년은 『삼국사기』, 1454년은 『세종실록』 「지리지」예요.', items: [{ type: 'choice', prompt: '1454년에 만든 기록은?', options: ['『삼국사기』', '『세종실록』 「지리지」'], answer: 1 }] },
        },
      }),
      X('wrap.line', {
        title: '두 기록 시간 띠', method: '두 기록을 시간 띠에 놓기', tool: 'timeline', minutes: 7,
        levels: { easy: '두 기록 카드를 시간 띠에 놓으면 맞은 카드에 바로 초록 테두리가 보인다.', base: '두 기록 카드를 놓고, 출구 2번에서 기록이 보여 주는 설명을 고른다.', challenge: '연도 칸에 설명 카드를 직접 골라 잇는다(남는 함정 카드 하나).' },
        wrap: {
          teacher: '"두 기록 가운데 무엇이 먼저 쓰였을까요?" 시간 띠에 놓은 뒤 "두 기록 사이에 900년이 넘게 흘렀어요. 그동안에도 섬을 알고 있었다는 뜻이에요"라고 말해 준다. 도전에서 \'울도군이 석도 관할\'을 고른 학생에게 "그것은 다음 시간에 배울 1900년 기록이에요"라고 알려 준다.',
          exitTicket: [
            EX('timeline', { prompt: '두 기록 카드를 시간 띠에 차례대로 놓아요.', toolOptions: { axis: ['옛날', '오늘날'], slots: 2, cards: [R5.y1454, R5.y512] }, target: { order: [R5.y512, R5.y1454] }, difficulty: 0.1,
              levels: { easy: { toolOptions: { live: true } }, challenge: { prompt: '연도 칸에 기록이 보여 주는 설명 카드를 이어요.', toolOptions: { mode: 'match', slots: [{ id: 'y512', label: '512년 『삼국사기』' }, { id: 'y1454', label: '1454년 「지리지」' }], cards: ['두 섬이 맑은 날 보임', '울도군이 석도 관할', '우산국이 신라에 속함'] }, target: { match: { y512: '우산국이 신라에 속함', y1454: '두 섬이 맑은 날 보임' } } } } }),
            { type: 'choice', prompt: '1454년 「지리지」 기록이 보여 주는 것은?', options: ['우산국이 신라에 속했다', '우산·무릉 두 섬이 맑은 날 보인다', '울도군이 생겼다'], answer: 1, difficulty: 0.15, explain: '「지리지」는 두 섬을 함께 적었어요.' },
            { type: 'short', prompt: '두 기록이 함께 알려 주는 것을 한 문장으로 써요.' },
          ],
        },
        worksheet: {
          title: '두 기록 시간 띠',
          items: [
            { type: 'blank', prompt: '빈칸에 알맞은 수를 써요.', text: '『세종실록』 「지리지」는 ___년에 만들어졌다.', answer: '1454' },
            { type: 'short', prompt: '두 기록 가운데 먼저 쓰인 것과 그 연도를 써요.' },
          ],
        },
      }),
    );
  }

  // ======== 5학년 · 옛 지도 속 우산도 (초 내용체계: 독도의 중요성 — 역사적 특성) ========
  {
    const X = mk('g5-maps', 5);
    M.push(
      X('intro.look', {
        title: '옛 지도·오늘 지도 견주기', method: '옛 지도와 오늘 지도 다른 점 찾기', tool: 'sortboard', minutes: 6,
        levels: { easy: '교사가 카드 4장을 읽어 주며 함께 \'같아요/달라요\'에 나눈다.', base: '카드 6장을 스스로 나눈다.', challenge: '카드를 나눈 뒤 \'달라요\' 카드 하나가 왜 다른지 까닭을 말한다.' },
        intro: {
          teacher: '"조선 시대 지리책 『신증동국여지승람』에 실린 「팔도총도」에는 울릉도와 함께 우산도가 그려져 있어요. 오늘 지도와 무엇이 같고 무엇이 다를까요?" 시연 단추로 카드가 \'같아요\'·\'달라요\' 바구니에 나뉘는 모습을 보인다. "섬 자리가 다르니 틀린 지도예요"라는 말에는 "자리가 조금 달라도 두 섬을 함께 그렸다는 것은 무엇을 알려 줄까요?"라고 되묻는다.',
          student: '두 지도 그림을 보고 같은 점 하나, 다른 점 하나를 찾아 짝에게 말해 보아요.',
          demo: { tool: 'sortboard', options: { slots: ['같아요', '달라요'], cards: ['동해에 두 섬이 있다', '섬 자리가 조금 다르다', '울릉도가 그려져 있다', '방위표·축척이 있다'] }, sequence: [{ sort: { 같아요: ['동해에 두 섬이 있다', '울릉도가 그려져 있다'], 달라요: ['섬 자리가 조금 다르다', '방위표·축척이 있다'] } }] },
          art: art('two paper-cut maps side by side, an old brush-painted map with two small islands and a modern map with a compass rose', '옛 지도와 오늘 지도', 'leaf', 'mint'),
        },
        notes: '「팔도총도」 그림은 교사가 공식 자료(동북아역사재단·외교부 누리집)의 그림을 화면에 띄워 보인다. 지도 이름·연대는 지어 말하지 않는다.',
      }),
      X('intro.guess', {
        title: '옛사람은 지도를 어떻게?', method: '옛사람은 지도를 어떻게 그렸을까', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 보기 2개(붓과 종이·인공위성)를 읽어 주고 옛날에 쓴 것을 고르게 한다.', base: '보기 3개 가운데 옛날에 쓴 것을 어림해 고른다.', challenge: '고른 까닭을 \'그때는 … 없어서\'로 말한다.' },
        intro: {
          teacher: '"옛사람은 하늘에서 내려다볼 수 없었어요. 그럼 지도를 어떻게 그렸을까요?" 시연 단추로 \'붓과 종이\'·\'걸으며 본 모습\' 카드가 바구니에 담기는 모습을 보인다. "옛 지도는 대충 그린 거라 믿을 수 없어요"라는 말에는 "재는 도구가 달랐을 뿐, 알고 있는 땅을 정성껏 그렸어요. 무엇을 알고 있었는지 볼까요?"라고 말한다.',
          student: '옛날 지도를 그린 사람이 쓴 도구를 어림해 고르고, 오늘날 도구와 무엇이 다른지 말해 보아요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '옛날에 쓴 것', cards: ['붓과 종이', '인공위성 사진', '걸으며 본 모습', '위치 알림 기계'], shuffle: false }, sequence: [{ pick: ['붓과 종이', '걸으며 본 모습'] }] },
          art: art('a paper-cut scholar in a traditional hat drawing a map with a brush on a long paper scroll, mountains and sea around', '옛사람은 어떻게 그렸을까?', 'mountain', 'mint'),
        },
      }),
      X('activity.pin', {
        title: '오늘 지도에 두 섬 핀 꽂기', method: '오늘 지도에 두 섬 핀 꽂기', tool: 'map', minutes: 14,
        levels: { easy: '장소 이름이 보이고 핀을 놓으면 칸 이름이 읽힌다.', base: '장소 이름은 보이고 읽기 글자 없이 핀을 꽂는다.', challenge: '장소 이름이 없는 지도에서 두 섬을 찾고, 방위표로 울릉도에서 본 독도의 방위를 고른다.' },
        activity: {
          title: '오늘 지도에서 옛 섬 찾기', tool: 'map',
          teacher: '"옛 지도의 우산도는 오늘의 어느 섬일까요? 함께 그려진 큰 섬은요?" 핀을 꽂은 뒤 옛 지도 그림과 견주게 한다. 제주도에 꽂는 학생에게 "동해에 있는 섬인가요? 해 뜨는 쪽 바다를 보세요"라고 말한다. 방위를 고를 때는 방위표 북쪽을 지도 위쪽에 먼저 맞추게 한다.',
          task: '오늘의 지도에서 옛 우산도(독도)와 무릉(울릉도)을 찾아 핀을 꽂고, 방위를 알아봐요.', levels: { easy: { readout: true }, base: {}, challenge: { names: false } },
          items: [
            MI('옛 지도의 우산도인 오늘의 섬에 핀을 꽂아요.', KOR([P.dokdo, P.ulleung, P.jeju, P.seoul]), { place: '독도' }, 0.15),
            MI('옛 지도에 우산도와 함께 그려진 큰 섬에 핀을 꽂아요.', KOR([P.ulleung, P.dokdo, P.busan]), { place: '울릉도' }, 0.15),
            MI('방위표를 지도 북쪽에 맞추고, 울릉도에서 본 독도의 방위를 골라요.', KOR([P.ulleung, P.dokdo], { mode: 'compass' }), { from: '울릉도', to: '독도', align: true }, 0.25, { conclude: '독도는 울릉도의 남동쪽에 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'figure', wide: true, prompt: '오늘의 지도에서 옛 우산도인 섬에 ○ 하세요.', tool: 'map', figures: [{ options: KORW([PW.dokdo, PW.ulleung, PW.jeju]), caption: '우리나라 칸 지도' }], answer: '독도' }] },
      }),
      X('activity.compare', {
        title: '두 지도 견주기 생각그물', method: '옛 지도·오늘 지도 견주기 생각그물', tool: 'mindmap', minutes: 13,
        levels: { easy: '가지 2개(옛 지도·오늘 지도)에 카드 4장을 붙인다.', base: '가지 3개(옛 지도·오늘 지도·두 지도 모두)에 카드 6장을 붙인다.', challenge: '가지 4개(+ 다른 까닭)에 카드 8장을 붙인다.' },
        activity: {
          title: '옛 지도와 오늘 지도 생각그물', tool: 'mindmap',
          teacher: '"두 지도에 모두 있는 것은 무엇일까요?" 카드를 붙일 때마다 "옛 지도에도 있었나요?"라고 묻는다. \'울릉도와 우산도(독도)가 있다\'를 한쪽에만 붙이는 학생에게 "옛 지도에도, 오늘 지도에도 있지요? 두 지도 모두 가지에 붙여요"라고 말한다. 옛 지도의 섬 자리가 다르면 그 섬은 없던 것이라는 생각에는 "있는 줄 알았기에 그렸어요"라고 짚는다.',
          task: '옛 지도와 오늘 지도의 특징 카드를 알맞은 가지에 붙여요.', levels: { easy: { live: true }, base: {}, challenge: {} },
          items: (() => {
            const G = { '옛 지도': ['붓으로 그렸다', '우산도라는 옛 이름', '섬 자리가 조금 다르다'], '오늘 지도': ['독도라는 이름', '방위표와 축척', '인공위성 사진으로 확인'], '두 지도 모두': ['울릉도가 있다', '동해에 작은 섬이 있다'], '다른 까닭': ['재는 도구가 달랐다', '눈으로 어림해 그렸다'] };
            const lvl = (names, k) => { const g = Object.fromEntries(names.map((n) => [n, G[n].slice(0, k)])); return { slots: names, cards: inter(names, g), g }; };
            const e = lvl(['옛 지도', '오늘 지도'], 2); const b = lvl(['옛 지도', '오늘 지도', '두 지도 모두'], 2); const c = lvl(['옛 지도', '오늘 지도', '두 지도 모두', '다른 까닭'], 2);
            return [
              { prompt: '두 지도의 특징 카드를 알맞은 가지에 붙여요.', toolOptions: { topic: '두 지도 견주기', slots: b.slots, cards: b.cards }, target: { sort: b.g }, difficulty: 0.2,
                levels: { easy: { prompt: '두 지도의 특징 카드를 알맞은 가지에 붙여요(가지 2개).', toolOptions: { slots: e.slots, cards: e.cards }, target: { sort: e.g } }, challenge: { prompt: '두 지도의 특징 카드를 알맞은 가지에 붙여요(가지 4개).', toolOptions: { slots: c.slots, cards: c.cards }, target: { sort: c.g } } } },
              PICK('두 지도에 모두 있는 것만 골라요.', '두 지도 모두', ['울릉도가 있다', '동해에 작은 섬이 있다'], ['인공위성 사진', '붓으로 그린 선'], { easy: 1, easyTraps: 1, extraTraps: ['방위표와 축척'], opts: { topic: '두 지도 견주기' } }, 0.2, { conclude: '옛 지도도 오늘 지도도 동해의 두 섬을 함께 보여 줘요.' }),
              { prompt: '옛 지도에 우산도가 그려졌다는 것이 무엇을 보여 주는지 모둠에서 말해요.', free: true, talk: true },
            ];
          })(),
        },
        worksheet: { items: [{ type: 'table', prompt: '두 지도를 견주어 써요.', columns: ['', '옛 지도', '오늘 지도'], cells: [['독도의 이름', '', ''], ['그린 방법', '', '']], answer: '우산도 / 독도, 붓으로 어림해 그림 / 방위표·축척·위성 사진' }] },
      }),
      X('activity.order', {
        title: '지도 시대 차례 놓기', method: '지도 시대 차례 놓기', tool: 'timeline', minutes: 14,
        levels: { easy: '지도 카드 2장(붓으로 그린 지도·오늘의 지도)을 시대 순으로 놓는다.', base: '지도 카드 3장을 시대 순으로 놓는다.', challenge: '카드 3장을 놓고, 시대 칸마다 설명 카드를 이어 붙인다.' },
        activity: {
          title: '지도 만들기 시대 차례', tool: 'timeline',
          teacher: '"지도를 만드는 방법은 시대에 따라 어떻게 바뀌었을까요?" 카드를 놓을 때마다 "그때는 무엇으로 땅을 쟀을까요?"라고 묻는다. 인공위성 사진 지도를 맨 앞에 두는 학생에게 "조선 시대에 인공위성이 있었을까요?"라고 되묻는다. 방법은 달라졌어도 두 섬은 늘 지도에 있었다는 점을 짚는다.',
          task: '지도 카드를 옛날에서 오늘날 차례로 놓고, 시대마다 설명을 이어요.', levels: { easy: { live: true }, base: {}, challenge: {} },
          items: [
            ORDER('지도 카드를 옛날에서 오늘날 차례로 놓아요.', ['조선 시대 붓으로 그린 지도', '방위표·축척이 있는 지도', '인공위성 사진 지도'], { easy: [0, 2], opts: AX }, 0.15),
            MAT('시대 칸에 알맞은 설명 카드를 이어요.', [['조선 시대 지도', '눈으로 보고 붓으로 그렸다'], ['오늘날 지도', '하늘에서 찍은 사진으로 그린다'], ['두 시대 모두', '동해의 두 섬을 그렸다']], ['섬을 하나도 안 그렸다'], { easy: 2, base: 3, opts: AX }, 0.2, { conclude: '지도 그리는 방법은 바뀌었어도 두 섬은 늘 지도에 있었어요.' }),
            { prompt: '시대마다 지도에 무엇이 달라졌는지 짝에게 한 가지씩 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '조선 시대 지도를 그린 방법은?', options: ['인공위성 사진', '눈으로 보고 붓으로', '위치 알림 기계'], answer: 1 }] },
      }),
      X('activity.why', {
        title: '위치가 다르게 그려진 까닭', method: '위치가 다르게 그려진 까닭 고르기', tool: 'emotion', minutes: 13,
        levels: { easy: '결과 칸 2개에 원인 카드를 잇는다.', base: '결과 칸 3개에 원인 카드를 잇고, 친구 말에 알맞은 답을 고른다.', challenge: '결과 칸 4개에 잇고, 고른 답의 근거를 짝에게 말한다.' },
        activity: {
          title: '다르게 그려진 까닭 잇기', tool: 'emotion',
          teacher: '"「팔도총도」에는 우산도가 울릉도 안쪽(서쪽)에 그려져 있어요. 왜 그랬을까요?" 결과 카드마다 원인을 고르게 한다. "자리가 틀렸으니 그 섬은 없던 섬이에요"라는 말에는 "섬 이름까지 적어 그렸다면 그 섬을 알았다는 뜻이 아닐까요? 자리와 있음을 나누어 생각해요"라고 짚는다.',
          task: '옛 지도에 보이는 결과 칸에 알맞은 원인 카드를 잇고, 친구 말에 답을 골라요.', levels: { easy: { live: true }, base: {}, challenge: {} },
          items: [
            MAT('옛 지도의 결과 칸에 알맞은 원인 카드를 이어요.', [['섬 자리가 실제와 조금 다르다', '재는 도구가 달랐다'], ['섬 크기가 실제와 다르다', '눈으로 어림해 그렸다'], ['독도가 우산도로 적혔다', '그때 부르던 이름이다'], ['두 섬을 함께 그렸다', '두 섬을 알고 있었다']], ['섬이 바다에 없었다'], { easy: 2, base: 3 }, 0.2),
            BR('친구의 말에 알맞은 답을 골라요.', '친구가 "옛 지도에 섬 자리가 다르니 그 섬은 없던 거야"라고 해요.', [['a', '맞아, 없던 섬이야', '근거 없이 섬이 없었다고 하게 돼요.', '자리가 달라도 이름을 적어 그렸다면 알던 섬이에요.'], ['b', '자리는 달라도 알던 섬이라 그렸어', '친구가 옛 지도를 다시 들여다봐요.'], ['c', '옛 지도는 볼 필요 없어', '중요한 자료를 놓치게 돼요.', '옛 지도도 그때 사람들이 안 것을 보여 주는 자료예요.']], 'b', 0.2, { conclude: '자리가 조금 달라도 옛사람은 우산도를 알고 지도에 그렸어요.' }),
            { prompt: '고른 답의 근거를 \'옛 지도에 … 때문이야\'로 짝에게 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '옛 지도의 섬 자리가 다른 것은 재는 ___가 달랐기 때문이다.', answer: '도구' }] },
      }),
      X('wrap.team', {
        title: '모둠 지도 해설사 발표', method: '모둠 지도 해설사 발표', tool: 'timer', minutes: 7,
        levels: { easy: '모둠이 해설 한 문장을 정해 차례로 말한다(교사가 말틀을 칠판에 적는다).', base: '모둠이 세 문장 해설을 1분 안에 말한다.', challenge: '해설 뒤 다른 모둠의 질문 하나에 답한다(교사가 질문 시간을 준다).' },
        wrap: {
          teacher: '"모둠마다 지도 한 장을 맡아 1분 해설사가 되어 볼까요? \'이 지도는 … 그렸고, … 보여 줍니다\' 말틀을 써도 좋아요." 해설 시간·바꾸는 시간을 타이머에 맞추게 한다. 해설에 "섬 자리가 틀렸으니 엉터리예요"라는 말이 나오면 "무엇을 보여 주는 지도인지로 말해 볼까요?"라고 돕는다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '해설·바꾸기', labels: ['해설', '바꾸기'], plan: { work: 30, rest: 10, rounds: 2 }, showTotal: true }, prompt: '우리 반 약속: 모둠마다 해설 60초, 바꾸기 20초, 4모둠이에요. 타이머를 맞춰요.', target: { plan: { work: 60, rest: 20, rounds: 4 } }, difficulty: 0.15 },
            { type: 'choice', prompt: '옛 지도 해설에 넣기 알맞은 문장은?', options: ['자리가 틀려 엉터리 지도다', '울릉도와 함께 우산도를 그렸다', '옛 지도는 볼 필요 없다'], answer: 1, difficulty: 0.15, explain: '지도가 보여 주는 사실로 말해요.' },
            { type: 'short', prompt: '우리 모둠 해설의 첫 문장을 써요.' },
          ],
        },
        worksheet: {
          title: '지도 해설사',
          items: [
            { type: 'short', prompt: '우리 모둠이 맡은 지도를 한 문장으로 소개해요.' },
            { type: 'check', prompt: '해설에 넣은 것에 표시해요.', options: ['지도 이름', '그려진 섬', '지도가 보여 주는 것'] },
          ],
        },
      }),
      X('wrap.sum', {
        title: '"옛 지도는 ___을 보여 준다"', method: '알게 된 점 한 문장 쓰기', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀(옛 지도는 ___을 보여 준다)을 보며 한 문장을 쓰고 기준 2개를 점검한다.', base: '한 문장을 쓰고 기준 3개(보여 주는 것·근거·출처)를 점검한다.', challenge: '두 문장으로 쓰고 \'우산도\'를 넣어 한 군데 고쳐 쓴다.' },
        wrap: {
          teacher: '"오늘 알게 된 것을 \'옛 지도는 ___을 보여 준다\'로 써 볼까요? 지도 이름을 출처로 밝히면 더 믿을 만해요." 기준표를 하나씩 소리 내어 읽게 한다. 출구 2번에서 \'자리가 다르면 없던 섬\'을 고른 학생에게 "옛사람이 이름을 적어 그렸다는 점을 떠올려요"라고 말한다.',
          exitTicket: [
            RUBX('옛 지도가 보여 주는 것을 써요.', { topic: '"옛 지도는 ___을 보여 준다"를 넣어 알게 된 점을 쓰세요.', starter: '「팔도총도」 같은 옛 지도는 ___을 보여 준다.', crit: ['옛 지도가 보여 주는 것을 썼다', '근거(그려진 섬)를 썼다', '출처(지도 이름)를 밝혔다'], must: ['우산도'], chars: [15, 160], sents: [1, 1, 2], title: '알게 된 점' }),
            { type: 'choice', prompt: '옛 지도의 섬 자리가 조금 다를 때 알맞은 생각은?', options: ['그 섬은 없던 섬이다', '재는 도구가 달랐지만 섬을 알았다', '옛 지도는 모두 틀렸다'], answer: 1, difficulty: 0.15, explain: '이름까지 적어 그렸다면 알던 섬이에요.' },
          ],
        },
        worksheet: {
          title: '옛 지도가 보여 주는 것',
          items: [
            { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '옛 지도에는 울릉도와 함께 ___가 그려져 있다.', answer: '우산도' },
            { type: 'short', prompt: '"옛 지도는 ___을 보여 준다" 문장을 완성해요.' },
          ],
        },
      }),
    );
  }

  // ======== 5학년 · 안용복과 대한제국 칙령 제41호 (초 내용체계: 역사적 특성 · research-days: 독도의 날은 비법정) ========
  {
    const X = mk('g5-anyb', 5);
    // 바닷길 칸 지도(6×4): 왼쪽 조선 땅, 가운데 바다의 울릉도·독도, 오른쪽 아래 바다 건너 일본 땅 — 위치 관계만 살린 줄인 그림
    const RT_LAND = [[0, 0], [0, 1], [0, 2], [0, 3], [1, 2], [1, 3]];
    const RT_JP = [[5, 2], [4, 3], [5, 3]];
    const RT_SEA = [];
    for (let r = 0; r < 4; r++) for (let c = 0; c < 6; c++) if (![...RT_LAND, ...RT_JP].some(([x, y]) => x === c && y === r)) RT_SEA.push([c, r]);
    const RT = (places, more) => Object.assign({ grid: [6, 4], title: '바닷길 칸 지도', regions: [{ name: '조선 땅', cells: RT_LAND, color: 'mint' }, { name: '바다 건너 일본 땅', cells: RT_JP, color: 'peach' }], sea: RT_SEA, places }, more || {});
    const RP = { ul: { name: '울릉도', icon: 'island', at: [2, 0] }, dk: { name: '독도', icon: 'island', at: [3, 1] } };
    M.push(
      X('intro.who', {
        title: '안용복 그림 보고 질문 고르기', method: '인물 그림 보고 질문 고르기', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 질문 카드 2장을 읽어 주고 하나를 고르게 한다.', base: '질문 카드 3장 가운데 묻고 싶은 것을 고른다.', challenge: '카드에 없는 질문을 하나 만들어 활동지에 적는다.' },
        intro: {
          teacher: '"조선 숙종 때 울릉도에서 고기를 잡던 어부 안용복이 있었어요. 이 사람에게 무엇을 묻고 싶나요?" 시연 단추로 질문 카드가 바구니에 담기는 모습을 보인다. "안용복은 장군이었어요"라는 말에는 "기록에는 어부라고 나와요. 어부가 왜 바다를 건넜을까요?"라고 되묻는다. 오늘은 기록에 남은 안용복의 일과 1900년 칙령 제41호를 배운다고 밝힌다.',
          student: '어부 안용복 그림을 보고 가장 묻고 싶은 질문 카드를 골라 보아요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '묻고 싶은 질문', cards: ['왜 일본에 갔을까?', '좋아한 음식은?', '어디서 고기를 잡았을까?', '무엇이라고 말했을까?'], shuffle: false }, sequence: [{ pick: ['왜 일본에 갔을까?'] }, { pick: ['왜 일본에 갔을까?', '어디서 고기를 잡았을까?', '무엇이라고 말했을까?'] }] },
          art: art('a paper-cut fisherman in a small wooden boat on a layered paper sea, with a distant island and seagulls', '어부 안용복에게 묻고 싶은 것', 'wave', 'sky'),
        },
        notes: '인물 그림은 상상해 그린 것이라고 밝힌다. 실존 인물의 생김새·말을 지어 말하지 않는다.',
      }),
      X('intro.route', {
        title: '안용복이 건넌 바닷길', method: '안용복이 건넌 바닷길 지도에 핀 꽂기', tool: 'map', minutes: 6,
        levels: { easy: '교사와 함께 울릉도·독도 두 곳에 차례로 핀을 꽂는다.', base: '울릉도 → 독도 → 바다 건너 일본 땅 세 곳에 차례로 핀을 꽂는다.', challenge: '세 곳에 핀을 꽂고 울릉도에서 일본 땅이 어느 방위인지 말한다.' },
        intro: {
          teacher: '"안용복은 울릉도에서 고기를 잡다가 바다를 건너 일본까지 가게 되었어요. 어떤 길이었을까요?" 시연 단추로 핀이 울릉도 → 독도 → 바다 건너 일본 땅으로 옮겨 가는 모습을 보인다. 칸 지도는 위치 관계만 살린 줄인 그림이라 실제 거리·모양과 다르다고 먼저 밝힌다. "작은 배로 그 먼 길을 갔대요?"라는 말에는 "그래서 기록에 남을 만한 일이었어요"라고 답한다.',
          student: '바닷길 지도에서 울릉도·독도·바다 건너 일본 땅을 차례로 짚어 보아요.',
          demo: { tool: 'map', options: RT([RP.ul, RP.dk]), sequence: [{ place: '울릉도' }, { place: '독도' }, { region: '바다 건너 일본 땅' }] },
          art: art('a paper-cut sea route with a dotted line from a big island past a tiny island to a far coast, a small wooden boat on the way', '바다를 건넌 길', 'wave', 'sky'),
        },
      }),
      X('activity.order', {
        title: '안용복 이야기 차례 놓기', method: '안용복 활동 차례 놓기', tool: 'story', minutes: 14,
        levels: { easy: '장면 카드 3장을 놓고, 기록 말풍선 빈칸 하나를 채운다.', base: '장면 카드 4장을 놓고, 빈칸 두 개를 채운다.', challenge: '틀린 장면 하나를 빼고 4장을 놓은 뒤, 빈칸 세 개를 채운다.' },
        activity: {
          title: '기록 속 안용복 이야기', tool: 'story',
          teacher: '"조선 숙종 때인 1693년, 울릉도에서 고기를 잡던 안용복은 일본 어부들과 마주쳐 일본으로 가게 되었어요. 그 뒤 일본에 울릉도와 우산도(독도)가 조선 땅이라고 말했다는 기록이 있어요." 장면마다 "그다음에는?"이라고 물으며 차례를 놓게 한다. 말풍선은 안용복의 말을 지어낸 것이 아니라 기록이 알려 주는 문장이라고 밝힌다. 일본 사람 전체를 탓하는 말이 나오면 "기록에 남은 일과 사람을 나누어 사실로 말해요"라고 짚는다.',
          task: '기록 속 안용복 이야기 장면을 차례대로 놓고, 기록 말풍선의 빈칸을 채워요.', levels: { easy: { live: true }, base: {}, challenge: {} },
          items: [
            ORDER('안용복 이야기 장면을 차례대로 놓아요.', ['울릉도에서 고기를 잡았어요', '일본 어부들과 마주쳤어요', '일본으로 가게 되었어요', '조선 땅이라고 말했어요'], { easy: [0, 2, 3], trap: '안용복이 장군이 되었어요' }, 0.2),
            FILL('기록 말풍선의 빈칸에 알맞은 카드를 넣어요.', [['안용복은 조선 ___ 임금 때의 어부였어요.', '숙종'], ['___년 무렵 울릉도에서 고기를 잡았어요.', '1693'], ['울릉도와 ___가 조선 땅이라고 말했어요.', '우산도']], ['숙종', '1693', '우산도', '세종', '1900'], { who: '기록', motifs: ['house', 'wave', 'leaf'] }, 0.25, { conclude: '기록에 따르면 안용복은 울릉도와 우산도(독도)가 조선 땅이라고 말했어요.' }),
            { prompt: '안용복 이야기에서 기록에 있는 일과 우리가 짐작한 일을 하나씩 짝에게 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '안용복은 울릉도와 ___도가 조선 땅이라고 말했다.', answer: '우산' }] },
      }),
      X('activity.role', {
        title: '안용복 기록 낭독극', method: '안용복 장면 역할극', tool: 'timer', minutes: 13,
        levels: { easy: '교사가 나누어 준 기록 대본을 보며 낭독하고, 낭독 차례 카드를 놓는다.', base: '기록 대본을 외워 낭독하고, 발표 시간을 타이머에 맞춘다.', challenge: '기록에 있는 사실만으로 해설 문장 하나를 자기 말로 바꾸어 낭독하고 스스로 점검한다.' },
        activity: {
          title: '기록 낭독극 준비하기', tool: 'timer',
          teacher: '"안용복의 말을 지어내지 않고, 기록에 적힌 문장으로 낭독극을 만들어 볼까요?" 모둠마다 해설·기록 읽기·장면 보이기 역할을 나눈다. 대사를 지어 넣으려는 학생에게 "기록에 그렇게 적혀 있나요? 기록이 말한 만큼만 낭독해요"라고 말한다. 다른 나라 사람을 탓하는 말이 들어가지 않게 대본을 함께 살핀다.',
          task: '기록 낭독극의 차례를 놓고, 발표 시간을 맞춘 뒤, 낭독하고 스스로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '기록 낭독극 차례 카드를 바르게 놓아요.', toolOptions: { title: '낭독극 차례', cards: ['연습하기', '역할 나누기', '발표하기', '기록 대본 읽기', '잘한 점 말하기'] }, target: { order: ['역할 나누기', '기록 대본 읽기', '연습하기', '발표하기', '잘한 점 말하기'] }, difficulty: 0.15 },
            PLAN('우리 반 약속: 모둠 낭독 90초, 바꾸기 30초, 4모둠이에요. 타이머를 맞춰요.', ['낭독', '바꾸기'], { work: 60, rest: 20, rounds: 2 }, { work: 90, rest: 30, rounds: 4 }, 0.15),
            { prompt: '낭독극을 마치고 스스로 점검해요.', toolOptions: { title: '낭독극 점검' }, target: { selfCheck: ['기록에 있는 사실만 말했다', '장면을 차례대로 보였다', '다른 나라 사람을 탓하지 않았다'] }, difficulty: 0.1 },
            { prompt: '낭독을 보고 기록에서 가장 중요한 장면이 무엇이었는지 모둠에서 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 모둠 낭독극에서 내가 읽은 기록 문장을 써요.' }] },
        notes: '실존 인물의 대사를 지어 연기하지 않는다. 대본은 교사가 기록 문장(1693년 울릉도 고기잡이 → 일본으로 감 → 울릉도·우산도가 조선 땅이라고 말함)으로 만든다.',
      }),
      X('activity.decree', {
        title: '칙령 제41호 빈칸 채우기', method: '칙령 내용 빈칸 채우기', tool: 'wordcards', minutes: 14,
        levels: { easy: '빈칸 하나에 보기 카드 2장 가운데 고른다.', base: '빈칸 하나에 보기 카드 3장 가운데 고른다.', challenge: '관할 섬과 반포 날짜 두 빈칸을 보기 5장 가운데 골라 채운다.' },
        activity: {
          title: '1900년 칙령 제41호 읽기', tool: 'wordcards',
          teacher: '"1900년 10월 25일 대한제국은 칙령 제41호를 내려 울릉도를 울도군으로 만들고 석도(독도)를 관할하게 했어요." 칙령은 나라가 내린 명령이라고 풀어 준다. 석도와 울릉도를 헷갈리는 학생에게 "울도군은 울릉도에 둔 군이에요. 함께 다스린 다른 섬은 어디였지요?"라고 묻는다. 독도의 날은 법으로 정한 기념일은 아니지만, 이날을 기억하며 독도 교육을 하는 학교가 많다고 덧붙인다.',
          task: '칙령 제41호 문장의 빈칸에 알맞은 카드를 넣고, 바른 설명을 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '칙령 제41호 문장의 빈칸에 알맞은 카드를 넣어요.', toolOptions: { mode: 'fill', slots: [{ id: 'b1', label: '울도군이 ___(독도)을 관할한다.' }], cards: ['석도', '울릉도', '제주도'] }, target: { fill: { b1: '석도' } }, difficulty: 0.2,
              levels: {
                easy: { prompt: '칙령 제41호 문장의 빈칸에 알맞은 카드를 넣어요(보기 2장).', toolOptions: { cards: ['석도', '제주도'] } },
                challenge: { prompt: '칙령 제41호 문장의 두 빈칸에 알맞은 카드를 넣어요(보기 5장).', toolOptions: { slots: [{ id: 'b1', label: '울도군이 ___(독도)을 관할한다.' }, { id: 'b2', label: '대한제국이 ___ 10월 25일에 내렸다.' }], cards: ['석도', '울릉도', '1900년', '1905년', '제주도'] }, target: { fill: { b1: '석도', b2: '1900년' } } },
              } },
            PICK('칙령 제41호에 대한 바른 설명 카드를 골라요.', '칙령 제41호', ['대한제국이 내렸다', '울릉도를 울도군으로 했다'], ['조선 세종 때 내렸다', '독도를 다른 나라에 주었다'], { easy: 1, easyTraps: 1, extraTraps: ['1693년에 내렸다'] }, 0.2),
            PICK('10월 25일을 \'독도의 날\'이라 부르는 까닭 카드를 골라요.', '독도의 날 까닭', ['칙령 제41호를 내린 날'], ['독도가 생긴 날', '안용복이 태어난 날'], { easy: 1, easyTraps: 1, extraTraps: ['법으로 정한 국경일'] }, 0.2, { conclude: '10월 25일은 1900년 칙령 제41호를 내린 날이라 독도의 날이라고 불러요(법정기념일은 아니에요).' }),
            { prompt: '칙령 제41호가 무엇을 보여 주는지 \'나라가 …\'로 시작해 짝에게 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 섬 이름을 써요.', text: '1900년 칙령 제41호로 울도군이 ___(독도)를 관할하게 되었다.', answer: '석도' }] },
      }),
      X('activity.line', {
        title: '512년~1900년 기록 시간 띠', method: '512년~1900년 기록 시간 띠', tool: 'timeline', minutes: 13,
        levels: { easy: '기록 카드 3장을 시간 띠에 놓는다.', base: '기록 카드 4장을 놓는다.', challenge: '기록 카드 5장(1696년 막부 도해 금지 더함)을 놓고, 연도 칸에 설명 카드를 잇는다.' },
        activity: {
          title: '512년~1900년 기록 잇기', tool: 'timeline',
          teacher: '"지금까지 배운 기록을 시간 띠에 놓아 볼까요? 나라(시대) 이름을 먼저 말하고 놓아요." 안용복을 「지리지」보다 앞에 두는 학생에게 "세종과 숙종 가운데 누가 먼저 임금이었을까요?"라고 묻는다. 칙령을 안용복보다 앞에 두면 조선과 대한제국의 차례를 짚는다. 1,400년 가까이 기록이 이어졌다는 점을 말해 준다.',
          task: '512년부터 1900년까지의 기록 카드를 시간 띠에 차례대로 놓고, 기록마다 보여 주는 것을 이어요.', levels: { easy: { live: true }, base: {}, challenge: {} },
          items: [
            ORDER('기록 카드를 옛날부터 차례대로 놓아요.', [R5.y512, R5.y1454, R5.y1693, R5.y1900], { easy: [0, 1, 3], add: [R5.y1696, 3], opts: AX }, 0.2),
            MAT('연도 칸에 기록이 보여 주는 것 카드를 이어요.', [['512년', '우산국이 신라에 속함'], ['1454년', '두 섬이 맑은 날 보임'], ['1693년 무렵', '조선 땅이라고 말함'], ['1900년', '울도군이 석도 관할']], ['독도에 공항이 생김'], { easy: 2, base: 3, opts: AX }, 0.25, { conclude: '512년부터 1900년까지 여러 기록이 독도를 우리 역사 속에 담고 있어요.' }),
            { prompt: '시간 띠를 보고 기록이 이어진 흐름을 \'처음에는 … 그 뒤 …\'로 짝에게 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '기록을 시간 차례로 써요.', columns: ['연도', '기록'], cells: [['512년', ''], ['1454년', ''], ['1900년', '']], answer: '『삼국사기』 우산국 / 『세종실록』 「지리지」 / 대한제국 칙령 제41호' }] },
      }),
      X('wrap.news', {
        title: '독도의 날 유래 기사', method: '독도의 날 유래 신문 기사 쓰기', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '빈칸이 있는 기사 틀을 보며 쓰고 기준 2개(날짜·근거)를 점검한다.', base: '세 문장 기사를 쓰고 기준 3개(날짜·근거·출처)를 점검한다.', challenge: '세 문장 이상 쓰고 \'칙령\'을 넣어 한 군데 고쳐 쓴다.' },
        wrap: {
          teacher: '"신문 기자가 되어 \'독도의 날은 왜 10월 25일일까?\' 기사를 세 문장으로 써 볼까요?" 날짜·근거·출처를 기준표로 점검하게 한다. 출구 2번에서 \'법으로 정한 국가 기념일\'을 고른 학생에게 "독도의 날은 법정기념일은 아니에요. 칙령을 기억하는 날로 불러요"라고 바로잡는다.',
          exitTicket: [
            RUBX('독도의 날 유래를 세 문장 기사로 써요.', { topic: '「독도의 날은 왜 10월 25일일까?」 기사를 쓰세요.', starter: '10월 25일은 ___년 대한제국이 칙령 제41호를 내린 날이다. 이 칙령으로 ___', crit: ['날짜(10월 25일)를 썼다', '칙령 제41호를 근거로 썼다', '출처(외교부 자료 등)를 밝혔다'], must: ['칙령'], chars: [30, 220], sents: [2, 3, 3], title: '독도의 날 기사' }),
            { type: 'choice', prompt: '독도의 날(10월 25일)에 대해 바른 것은?', options: ['법으로 정한 국가 기념일이다', '칙령 제41호를 기억하는 날이다', '1905년에 정한 날이다'], answer: 1, difficulty: 0.2, explain: '독도의 날은 법정기념일이 아니고, 1900년 칙령 제41호를 기억하는 날이에요.' },
          ],
        },
        worksheet: {
          title: '독도의 날 기사',
          items: [
            { type: 'blank', prompt: '빈칸에 알맞은 수를 써요.', text: '___년 10월 25일, 대한제국은 칙령 제41호를 내렸다.', answer: '1900' },
            { type: 'short', prompt: '독도의 날 기사의 제목을 지어 써요.' },
          ],
        },
      }),
      X('wrap.pick', {
        title: '기록마다 보여 주는 것', method: '가장 중요한 기록 고르고 까닭', tool: 'sortboard', minutes: 7,
        levels: { easy: '까닭 카드 2장을 알맞은 기록 바구니에 넣는다.', base: '까닭 카드 3장을 기록 바구니 3개에 하나씩 넣는다.', challenge: '까닭 카드 6장을 바구니마다 2장씩 넣고, 함정 카드 하나는 남긴다.' },
        wrap: {
          teacher: '"기록마다 무엇을 보여 주는지 까닭 카드를 넣어 볼까요? 그다음 가장 중요하다고 생각하는 기록 하나를 골라 까닭을 써요." 가장 중요한 기록은 사람마다 달라도 괜찮다고 밝힌다. 까닭으로 \'사람들이 많이 말해서\'를 넣으려는 학생에게 "기록에 적힌 내용이 까닭이 되어야 해요"라고 말한다.',
          exitTicket: [
            EX('sortboard', SB('기록 바구니에 그 기록이 보여 주는 까닭 카드를 넣어요.', { slots: ['『삼국사기』', '「지리지」', '칙령 제41호'], groups: { '『삼국사기』': ['우산국이 신라에 속했다'], '「지리지」': ['두 섬이 맑은 날 보인다'], '칙령 제41호': ['울도군이 석도를 관할했다'] }, easy: 2, extra: { '『삼국사기』': ['512년의 일이다'], '「지리지」': ['1454년에 만들었다'], '칙령 제41호': ['대한제국이 내렸다'] }, traps: ['사람들이 많이 말했다'] }, 0.15)),
            { type: 'short', prompt: '가장 중요하다고 생각하는 기록 하나와 그 까닭을 써요.' },
            { type: 'choice', prompt: '기록이 근거가 되려면 무엇이 필요할까요?', options: ['기록에 적힌 내용', '많은 사람의 느낌', '그림의 예쁨'], answer: 0, difficulty: 0.15, explain: '기록에 적힌 내용이 근거가 돼요.' },
          ],
        },
        worksheet: {
          title: '가장 중요한 기록',
          items: [
            { type: 'choice', prompt: '울도군이 석도를 관할하게 한 기록은?', options: ['『삼국사기』', '칙령 제41호', '「지리지」'], answer: 1 },
            { type: 'short', prompt: '내가 고른 가장 중요한 기록과 까닭을 써요.' },
          ],
        },
      }),
    );
  }

  // ======== 5학년 · 독도의용수비대 (초 내용체계: 역사적 특성) ========
  {
    const X = mk('g5-guard', 5);
    M.push(
      X('intro.photo', {
        title: '배 타고 섬으로 가는 사람들', method: '사람들 그림 보고 무엇을 하는지 고르기', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 보기 카드 2장을 읽어 주고 그림 속 사람들이 하는 일을 고르게 한다.', base: '보기 카드 3장 가운데 알맞은 것을 고른다.', challenge: '고른 뒤 왜 그렇게 생각했는지 그림에서 찾은 단서로 말한다.' },
        intro: {
          teacher: '"배를 타고 작은 섬으로 가는 사람들이 있어요. 군인 옷이 아니라 평소 옷을 입었네요. 무엇을 하러 갈까요?" 시연 단추로 \'섬을 지키러 가요\' 카드가 바구니에 담기는 모습을 보인다. "섬은 군인만 지켜요"라는 말에는 "6·25전쟁 무렵에는 울릉도 주민들이 스스로 나서 독도를 지켰다는 기록이 있어요"라고 알려 준다.',
          student: '그림 속 사람들이 무엇을 하러 섬에 가는지 골라 보고, 그렇게 생각한 단서를 말해 보아요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '사람들이 하는 일', cards: ['섬을 지키러 가요', '놀러 가요', '이사를 가요'], shuffle: false }, sequence: [{ pick: ['섬을 지키러 가요'] }] },
          art: art('paper-cut villagers in plain clothes rowing a small boat toward a rocky paper island at dawn', '무엇을 하러 갈까?', 'sun', 'buttercup'),
        },
        notes: '그림은 상상해 그린 장면이라고 밝힌다. 실제 인물의 얼굴·이름을 지어 붙이지 않는다.',
      }),
      X('intro.map', {
        title: '울릉도에서 독도로 가는 길', method: '울릉도에서 독도로 가는 길 핀', tool: 'map', minutes: 6,
        levels: { easy: '교사와 함께 독도 한 곳에 핀을 꽂는다.', base: '울릉도와 독도 두 곳에 차례로 핀을 꽂는다.', challenge: '두 곳에 핀을 꽂고 울릉도에서 독도로 가는 방위(남동쪽)를 말한다.' },
        intro: {
          teacher: '"의용수비대는 어디에서 출발해 어디로 갔을까요?" 시연 단추로 울릉도에서 독도로 핀이 옮겨 가는 모습을 보인다. 독도가 울릉도에서 87.4km 떨어진 남동쪽에 있다고 알려 준다. 포항에서 출발했다고 말하는 학생에게는 "수비대를 만든 사람들은 어디 주민이었지요?"라고 묻는다.',
          student: '지도에서 울릉도와 독도를 찾아 손가락으로 길을 이어 보아요.',
          demo: { tool: 'map', options: KOR([P.ulleung, P.dokdo, P.pohang]), sequence: [{ place: '울릉도' }, { place: '독도' }] },
          art: art('a paper-cut map with a dotted boat path from a big island to two small rocky islands to the southeast', '울릉도에서 독도로', 'wave', 'sky'),
        },
      }),
      X('activity.order', {
        title: '수비대 활동 차례 놓기', method: '수비대 활동 차례 놓기', tool: 'story', minutes: 14,
        levels: { easy: '장면 카드 3장을 놓고, 기록 말풍선 빈칸 하나를 채운다.', base: '장면 카드 4장을 놓고, 빈칸 두 개를 채운다.', challenge: '틀린 장면 하나를 빼고 4장을 놓은 뒤, 빈칸 세 개를 채운다.' },
        activity: {
          title: '독도의용수비대 이야기', tool: 'story',
          teacher: '"6·25전쟁 무렵 울릉도 주민들이 스스로 독도의용수비대를 만들어 독도를 지켰고, 그 뒤 경찰이 이어받아 오늘의 독도경비대가 되었어요." 장면마다 "누가, 왜 했을까요?"라고 묻는다. 의용수비대를 군대로 여기는 학생에게 "\'의용\'은 스스로 나섰다는 뜻이에요"라고 풀어 준다. 연도·사람 수는 확인된 자료에 있는 것만 말하게 한다.',
          task: '독도의용수비대 이야기 장면을 차례대로 놓고, 기록 말풍선의 빈칸을 채워요.', levels: { easy: { live: true }, base: {}, challenge: {} },
          items: [
            ORDER('독도의용수비대 이야기 장면을 차례대로 놓아요.', ['울릉도 주민들이 모였어요', '독도의용수비대를 만들었어요', '배를 타고 독도로 갔어요', '독도를 지켰어요'], { easy: [0, 1, 3], trap: '군대가 주민을 데려갔어요' }, 0.2),
            FILL('기록 말풍선의 빈칸에 알맞은 카드를 넣어요.', [['___ 주민들이 독도의용수비대를 만들었어요.', '울릉도'], ['주민들은 ___ 나서 독도를 지켰어요.', '스스로'], ['그 뒤 ___이 이어받아 독도경비대가 되었어요.', '경찰']], ['울릉도', '스스로', '경찰', '제주도', '억지로'], { who: '기록', motifs: ['house', 'star', 'sun'] }, 0.2, { conclude: '울릉도 주민들이 스스로 나서 독도를 지켰고, 경찰이 이어받았어요.' }),
            { prompt: '주민들이 스스로 나섰다는 것이 무엇을 보여 주는지 모둠에서 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '___ 주민들이 스스로 독도의용수비대를 만들어 독도를 지켰다.', answer: '울릉도' }] },
      }),
      X('activity.why', {
        title: '주민이 나선 까닭 잇기', method: '주민이 나선 까닭 원인 잇기', tool: 'emotion', minutes: 13,
        levels: { easy: '원인 칸 2개에 결과 카드를 잇는다.', base: '원인 칸 3개에 결과 카드를 잇고, 친구 말에 알맞은 답을 고른다.', challenge: '원인 칸 3개를 잇고, 고른 답의 근거를 짝에게 말한다.' },
        activity: {
          title: '원인과 결과 잇기', tool: 'emotion',
          teacher: '"무슨 일이 있었기에 주민들이 나섰을까요? 그 결과 무엇이 이어졌을까요?" 원인 칸을 읽고 결과 카드를 고르게 한다. "독도는 군인만 지켜 왔어요"라는 말에는 "의용수비대는 누구였지요? 오늘은 경비대원·등대원·주민·연구자가 함께 지켜요"라고 넓혀 준다.',
          task: '원인 칸에 알맞은 결과 카드를 잇고, 친구 말에 알맞은 답을 골라요.', levels: { easy: { live: true }, base: {}, challenge: {} },
          items: [
            MAT('원인 칸에 알맞은 결과 카드를 이어요.', [['6·25전쟁으로 나라가 어려웠다', '주민들이 스스로 나섰다'], ['주민들이 스스로 나섰다', '의용수비대가 생겼다'], ['수비대가 독도를 지켰다', '경찰이 이어받았다']], ['독도를 떠났다'], { easy: 2, base: 3 }, 0.2),
            BR('독도를 지킨 사람에 대한 친구 말에 답을 골라요.', '친구가 "독도는 옛날부터 군인만 지켜 왔어"라고 해요.', [['a', '맞아, 군인만 지켰어', '주민들이 지킨 일이 빠져요.', '광복 뒤 울릉도 주민들이 스스로 지킨 기록이 있어요.'], ['b', '주민들이 스스로 지킨 때도 있어', '친구가 의용수비대 이야기를 궁금해해요.'], ['c', '누가 지켰는지는 중요하지 않아', '지켜 온 사람들의 노력을 놓치게 돼요.', '누가 어떻게 지켰는지 아는 것도 중요해요.']], 'b', 0.2, { conclude: '독도는 주민·경찰·경비대 등 여러 사람이 지켜 왔어요.' }),
            { prompt: '고른 답의 근거를 \'기록에 따르면 …\'으로 짝에게 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '독도의용수비대를 만든 사람들은?', options: ['울릉도 주민', '다른 나라 군인', '제주도 어부'], answer: 0 }] },
      }),
      X('activity.dilemma', {
        title: '내가 그때 주민이라면', method: '내가 그때 주민이라면', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번에서 고르고 근거 한 장을 고른다.', base: '갈림 2번을 지나 근거를 고른다.', challenge: '갈림 3번을 지나 알맞은 근거 2장을 고르고, 다른 길의 결과와 견준다.' },
        activity: {
          title: '갈림길: 그때 울릉도 주민이라면', tool: 'dilemma',
          teacher: '"가상의 울릉도 주민 \'해\'가 되어 볼까요? 해는 어떤 선택을 할 수 있었을까요?" 고를 때마다 결과 칸을 소리 내어 읽게 한다. 혼자 몰래 배를 띄우는 길을 고른 학생에게 "마음은 용감하지만, 혼자 하면 어떤 일이 생길까요? 함께 의논하는 길과 견주어 봐요"라고 묻는다. 지키는 일은 여러 사람이 각자 할 수 있는 몫을 맡는 것이라고 정리한다.',
          task: '가상의 주민이 되어 갈림길마다 고르고, 결과를 읽은 뒤 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '그때 울릉도 주민이라면',
            steps: [
              { text: '(가상) 6·25전쟁 무렵, 울릉도 마을에 "독도를 지킬 사람이 없다"는 걱정이 퍼졌어요.', motif: 'house',
                good: ['meet', '마을 사람들과 방법을 의논한다', '여러 사람이 모여 지킬 방법을 찾기 시작해요.', [['마을', '힘을 모아요', 1]]],
                bad: ['ignore', '내 일이 아니라고 모른 척한다', '걱정만 커지고 아무것도 바뀌지 않아요.', '모른 척하면 섬을 돌볼 사람이 없어요.', [['독도', '돌볼 사람이 없어요', -1]]] },
              { text: '사람들이 모여 독도를 지키기로 했어요. 해는 무엇을 맡을까요?', motif: 'star',
                good: ['role', '할 수 있는 몫을 맡는다(배 고치기·물자 나르기)', '저마다 몫을 맡아 준비가 빨라져요.', [['수비대', '든든해요', 1]]],
                bad: ['alone', '혼자 몰래 배를 띄운다', '혼자 바다에 나가 위험해지고 준비가 흩어져요.', '마음은 용감하지만 혼자 하면 더 위험해요.', [['해', '위험해요', -1]]] },
              { text: '시간이 흘러 경찰이 독도 경비를 이어받게 되었어요.', motif: 'sun',
                good: ['pass', '알게 된 것을 넘겨주고 함께 돕는다', '지키는 일이 끊기지 않고 이어져요.', [['독도', '꾸준히 지켜져요', 1]]],
                bad: ['quit', '이제 끝났다며 모든 기록을 버린다', '지켜 온 이야기가 잊혀요.', '지켜 온 기록도 다음 사람에게 소중해요.', [['다음 세대', '이야기를 몰라요', -1]]] },
            ],
            ending: '여러 사람이 힘을 모아 지키는 일이 오늘까지 이어졌어요.',
            reasons: [{ id: 'together', text: '여럿이 힘을 모으면 더 잘 지킨다' }, { id: 'share', text: '저마다 할 수 있는 몫이 있다' }, { id: 'alone', text: '혼자 하는 것이 가장 용감하다', why: '혼자 하면 위험하고 오래 지키기 어려워요.' }, { id: 'none', text: '내 일이 아니면 몰라도 된다', why: '공동체의 일은 함께 돌봐야 해요.' }],
            good: ['together', 'share'],
            talk: '모둠에서 "오늘 우리가 독도를 위해 맡을 수 있는 몫은 무엇일까?"를 이야기해요.',
            conclude: '독도는 주민들이 힘을 모아 지켰고, 그 일이 경찰·경비대로 이어졌어요.',
          }),
        },
        worksheet: { items: [{ type: 'short', prompt: '내가 그때 주민이었다면 맡았을 몫을 한 문장으로 써요.' }] },
        notes: '\'해\'는 지어낸 가상 인물이다. 실제 수비대원의 이름·말을 지어 쓰지 않는다. 위험한 행동을 영웅처럼 그리지 않는다.',
      }),
      X('activity.line', {
        title: '광복 뒤 기록 시간 띠', method: '광복 뒤 기록 시간 띠 잇기', tool: 'timeline', minutes: 13,
        levels: { easy: '카드 3장(1900년 칙령·광복·의용수비대)을 시간 띠에 놓는다.', base: '카드 4장(+ 독도경비대)을 놓는다.', challenge: '카드 4장을 놓고, 시대 칸마다 설명 카드를 잇는다.' },
        activity: {
          title: '1900년부터 오늘까지', tool: 'timeline',
          teacher: '"1900년 칙령에서 오늘의 독도경비대까지 어떤 일이 이어졌을까요?" 나라(시대) 이름을 먼저 말하고 놓게 한다. 의용수비대를 칙령보다 앞에 두는 학생에게 "대한제국 때와 광복 뒤 가운데 무엇이 먼저였을까요?"라고 묻는다. 지킴이 끊기지 않고 이어졌다는 점을 짚는다.',
          task: '1900년부터 오늘까지의 카드를 시간 띠에 놓고, 시대마다 설명을 이어요.', levels: { easy: { live: true }, base: {}, challenge: {} },
          items: [
            ORDER('1900년부터 오늘까지 카드를 차례대로 놓아요.', [R5.y1900, '광복', R5.guard, R5.now], { easy: [0, 1, 2], opts: AX }, 0.2),
            MAT('시대 칸에 알맞은 설명 카드를 이어요.', [['대한제국', '울도군이 석도 관할'], ['광복 뒤', '주민들이 스스로 지킴'], ['오늘날', '경비대가 독도를 지킴']], ['독도를 아무도 모름'], { easy: 2, base: 3, opts: AX }, 0.2, { conclude: '대한제국의 칙령에서 주민의 지킴, 오늘의 경비대까지 지킴이 이어졌어요.' }),
            { prompt: '시간 띠를 보고 \'독도를 지킨 사람들\'을 차례대로 짝에게 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '시대마다 독도를 지킨 일을 써요.', columns: ['시대', '한 일'], cells: [['대한제국(1900년)', ''], ['광복 뒤', ''], ['오늘날', '']], answer: '칙령 제41호로 석도 관할 / 독도의용수비대 / 독도경비대' }] },
      }),
      X('wrap.thanks', {
        title: '수비대에게 쓰는 편지', method: '고마운 마음 편지 쓰기', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '편지 틀을 보며 쓰고 기준 2개(알게 된 사실·고마운 마음)를 점검한다.', base: '세 문장 편지를 쓰고 기준 3개를 점검한다.', challenge: '세 문장 이상 쓰고 \'울릉도\'를 넣어 한 군데 고쳐 쓴다.' },
        wrap: {
          teacher: '"독도의용수비대에게 고마운 마음을 세 문장 편지로 써 볼까요? 오늘 알게 된 사실을 하나 넣으면 마음이 더 잘 전해져요." 기준표를 함께 읽는다. 다른 나라를 탓하는 문장을 쓰려는 학생에게 "고마운 마음과 알게 된 사실로 채워 볼까요?"라고 말한다. 편지에 내 이름 대신 \'5학년 친구가\'처럼 쓰게 한다.',
          exitTicket: [
            RUBX('독도의용수비대에게 세 문장 편지를 써요.', { topic: '독도의용수비대에게 고마운 마음 편지를 쓰세요(내 이름 대신 \'5학년 친구가\').', starter: '독도의용수비대 여러분, 저는 오늘 ___을 알게 되었어요. 고마운 까닭은 ___', crit: ['알게 된 사실을 하나 넣었다', '고마운 마음을 썼다', '세 문장으로 썼다'], must: ['울릉도'], chars: [30, 220], sents: [2, 3, 3], title: '고마운 마음 편지' }),
            { type: 'choice', prompt: '독도의용수비대에 대해 바른 것은?', options: ['울릉도 주민들이 스스로 만들었다', '다른 나라가 보낸 군대였다', '독도에 처음 사람을 살게 했다'], answer: 0, difficulty: 0.15, explain: '울릉도 주민들이 스스로 나서 만들었어요.' },
          ],
        },
        worksheet: {
          title: '고마운 마음 편지',
          items: [
            { type: 'short', prompt: '편지에 넣을 알게 된 사실 하나를 써요.' },
            { type: 'short', prompt: '독도의용수비대에게 고마운 까닭을 한 문장으로 써요.' },
          ],
        },
      }),
      X('wrap.share', {
        title: '짝과 편지 바꿔 읽기', method: '짝과 편지 바꿔 읽기', tool: 'timer', minutes: 7,
        levels: { easy: '짝의 편지에서 좋은 문장 1개에 표시하고 점검 칸 1개를 표시한다.', base: '좋은 문장 2개에 표시하고 점검 칸 2개를 표시한다.', challenge: '좋은 문장 2개와 고칠 점 하나를 말하고 점검 칸 3개를 표시한다.' },
        wrap: {
          teacher: '"짝과 편지를 바꿔 읽고, 마음에 드는 문장에 밑줄을 그어 줄까요? 고칠 점은 \'이렇게 바꾸면 더 좋겠어\'처럼 부드럽게 말해요." 읽는 시간·말하는 시간을 타이머로 보여 준다. 짝의 글을 놀리는 말이 나오면 "짝이 정성껏 쓴 편지예요. 좋은 점부터 말해 볼까요?"라고 돌린다.',
          exitTicket: [
            SELF('편지 바꿔 읽기', ['짝의 편지를 끝까지 읽었다', '좋은 문장에 표시했다', '고칠 점 하나를 부드럽게 말했다'], '짝과 편지를 바꿔 읽고 한 것에 표시해요.', { easy: 1, base: 2 }),
            { type: 'choice', prompt: '짝의 편지에 고칠 점을 말할 때 알맞은 말은?', options: ['"이건 별로야"', '"이렇게 바꾸면 더 좋겠어"', '"다시 써"'], answer: 1, difficulty: 0.1, explain: '부드럽게 말하면 짝이 기쁘게 고쳐요.' },
            { type: 'short', prompt: '짝의 편지에서 가장 좋았던 문장을 옮겨 써요.' },
          ],
        },
        worksheet: {
          title: '편지 바꿔 읽기',
          items: [
            { type: 'short', prompt: '짝의 편지에서 좋았던 문장을 옮겨 써요.' },
            { type: 'short', prompt: '짝에게 해 준 고칠 점을 한 문장으로 써요.' },
          ],
        },
      }),
    );
  }

  // ======== 5학년 · 독도의 가치 (초 내용체계: 정치·군사·경제적 가치) ========
  {
    const X = mk('g5-value', 5);
    const V4 = { 영토: ['동도·서도와 바위섬으로 된 섬', '울릉군 울릉읍 독도리 주소'], 생태: ['괭이갈매기가 둥지를 튼다', '해국·섬기린초가 자란다'], 자원: ['난류·한류가 만나는 어장', '바다 밑 가스 하이드레이트'], 안보: ['동해 바다를 살피는 자리', '독도경비대가 지킨다'] };
    M.push(
      X('intro.guess', {
        title: '독도가 소중한 까닭 어림하기', method: '독도가 소중한 까닭 어림하기', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 까닭 카드 2장을 읽어 주고 먼저 떠오르는 것을 고르게 한다.', base: '까닭 카드 4장 가운데 먼저 떠오르는 것을 고른다.', challenge: '고른 까닭을 \'왜냐하면 …\'으로 말한다.' },
        intro: {
          teacher: '"독도는 작은 섬인데 왜 소중할까요? 먼저 떠오르는 까닭 카드를 골라 볼까요?" 시연 단추로 까닭 카드가 바구니에 담기는 모습을 보인다. "작은 섬이라 가치가 적어요"라는 말에는 "섬 둘레 바다와 하늘까지 생각하면 어떨까요? 오늘 네 갈래로 나누어 살펴봐요"라고 되묻는다.',
          student: '독도가 소중한 까닭 카드 가운데 가장 먼저 떠오르는 것을 골라 짝에게 말해 보아요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '먼저 떠오르는 까닭', cards: ['우리 땅이에요', '바다 생물이 많아요', '바다 밑 자원이 있어요', '동해를 지켜요'], shuffle: false }, sequence: [{ pick: ['우리 땅이에요'] }, { pick: ['우리 땅이에요', '바다 생물이 많아요'] }] },
          art: art('a small paper-cut rocky island with seagulls, flowers, fish under the waves and a lighthouse, glowing like a treasure', '작은 섬이 왜 소중할까?', 'star', 'buttercup'),
        },
      }),
      X('intro.map', {
        title: '독도 둘레 바다 넓이 보기', method: '독도 둘레 바다 넓이 보기', tool: 'map', minutes: 6,
        levels: { easy: '교사가 독도 둘레 바다 칸을 하나씩 짚어 준다.', base: '독도 둘레 바다 칸을 스스로 눌러 보고 섬 칸과 견준다.', challenge: '울릉도 둘레 바다 칸과 독도 둘레 바다 칸을 견주어 말한다.' },
        intro: {
          teacher: '"독도는 작은 섬이지만 둘레에는 넓은 바다가 있어요. 지도에서 독도 둘레 바다를 눌러 볼까요?" 시연 단추로 독도 북쪽·서쪽·남쪽 바다 칸에 핀이 차례로 꽂히는 모습을 보인다. 섬만 보는 학생에게 "섬 둘레 바다도 우리 바다예요. 섬보다 넓지요?"라고 말한다. 칸 지도는 줄인 그림이라고 밝힌다.',
          student: '지도에서 독도와 그 둘레 바다 칸을 짚어 보고, 섬과 바다 가운데 무엇이 더 넓은지 말해 보아요.',
          demo: { tool: 'map', options: KOR([P.dokdo, P.ulleung]), sequence: [{ from: '독도', dir: '북', steps: 1 }, { from: '독도', dir: '서', steps: 1 }, { from: '독도', dir: '남', steps: 1 }] },
          art: art('a tiny paper-cut island in the middle of wide layered paper waves, with dotted circles of sea around it', '섬 둘레의 넓은 바다', 'wave', 'sky'),
        },
      }),
      X('activity.four', {
        title: '가치 네 갈래 나누기', method: '가치 네 갈래 나누기', tool: 'sortboard', minutes: 14,
        levels: { easy: '바구니 2칸(영토·생태)에 카드 4장을 나눈다.', base: '바구니 4칸(영토·생태·자원·안보)에 카드 4장을 하나씩 나눈다.', challenge: '바구니 4칸에 카드 8장을 나눈다.' },
        activity: {
          title: '독도의 가치 네 갈래', tool: 'sortboard',
          teacher: '"독도의 가치를 영토·생태·자원·안보 네 바구니로 나누어 볼까요?" 카드를 넣을 때마다 "이 사실은 어떤 가치를 보여 주나요?"라고 묻는다. 괭이갈매기 카드를 자원에 넣는 학생에게 "새와 꽃이 사는 곳은 생태예요. 자원은 우리가 쓰는 것이지요"라고 구별해 준다. 안보는 나라를 지키는 일이라고 풀어 준다.',
          task: '독도의 사실 카드를 영토·생태·자원·안보 바구니에 나누어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            (() => {
              const S4 = ['영토', '생태', '자원', '안보'];
              const one = Object.fromEntries(S4.map((k) => [k, V4[k].slice(0, 1)]));
              return { prompt: '독도의 사실 카드를 가치 바구니에 나누어요.', toolOptions: { slots: S4, cards: inter(S4, one) }, target: { sort: one }, difficulty: 0.25,
                levels: {
                  easy: { prompt: '독도의 사실 카드를 영토·생태 바구니에 나누어요(카드 4장).', toolOptions: { slots: ['영토', '생태'], cards: inter(['영토', '생태'], V4) }, target: { sort: { 영토: V4.영토, 생태: V4.생태 } } },
                  challenge: { prompt: '독도의 사실 카드를 가치 바구니에 나누어요(카드 8장).', toolOptions: { more: S4.map((k) => V4[k][1]) }, target: { sort: V4 } },
                } };
            })(),
            SB('가치를 보여 주는 사실과 근거 없는 말을 나누어요.', { slots: ['확인된 사실', '근거 없는 말'], groups: { '확인된 사실': ['울릉도에서 87.4km', '괭이갈매기 번식지', '독도 등대가 있다'], '근거 없는 말': ['자원 양이 다 밝혀졌다', '사람이 아무도 안 간다', '독도는 아주 큰 섬이다'] } }, 0.2, { conclude: '독도는 영토·생태·자원·안보 네 갈래로 소중해요. 근거 없는 숫자는 쓰지 않아요.' }),
            { prompt: '네 가치 가운데 가장 놀라웠던 것 하나를 골라 까닭을 짝에게 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '가치마다 독도의 예를 하나씩 써요.', columns: ['가치', '독도의 예'], cells: [['영토', ''], ['생태', ''], ['자원', ''], ['안보', '']], answer: '동도·서도 / 괭이갈매기·해국 / 어장·가스 하이드레이트 / 동해를 살피는 자리' }] },
      }),
      X('activity.chart', {
        title: '가치 순위 막대그래프', method: '가치 순위 모둠 막대그래프', tool: 'chart', minutes: 13,
        levels: { easy: '막대 두 개가 미리 그려져 있고 나머지 두 개를 그린다.', base: '막대 네 개를 모두 그린다.', challenge: '막대를 그린 뒤 그래프를 읽고, 표가 가장 많은 가치를 고른 까닭을 말한다.' },
        activity: {
          title: '우리 반 가치 투표 그래프', tool: 'chart',
          teacher: '"우리 반이 가장 중요하다고 고른 가치를 막대그래프로 나타내 볼까요? 이 표는 예로 만든 가상 자료예요." 표의 수를 하나씩 읽고 막대 높이를 맞추게 한다. 눈금 한 칸이 몇 표인지 먼저 보게 한다. "표가 적은 가치는 중요하지 않아요"라는 말에는 "고른 사람이 적을 뿐, 네 가치 모두 독도의 가치예요"라고 짚는다.',
          task: '반 투표 표(가상)를 보고 막대그래프를 완성하고, 그래프를 읽어요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '반 투표 표(가상)를 보고 막대그래프를 완성해요.', toolOptions: { type: 'bar', mode: 'build', title: '가장 중요한 독도의 가치(가상 투표)', unit: '표', data: [['영토', 9], ['생태', 6], ['자원', 5], ['안보', 4]], xLabel: '가치', yLabel: '표 수' }, target: { build: true }, difficulty: 0.15,
              levels: { easy: { toolOptions: { given: [0, 1] } } } },
            CHR('그래프를 보고 표가 가장 많은 가치를 골라요.', { title: '가장 중요한 독도의 가치(가상 투표)', unit: '표', data: [['영토', 9], ['생태', 6], ['자원', 5], ['안보', 4]], question: '표가 가장 많은 가치는?', choices: ['영토', '생태', '자원', '안보'], pick: 0, xLabel: '가치', yLabel: '표 수' }, 0.15, { conclude: '그래프는 우리 반 생각을 보여 줄 뿐, 네 가치 모두 독도의 가치예요.' }),
            { prompt: '우리 모둠은 어떤 가치를 가장 중요하게 골랐는지, 까닭과 함께 짝에게 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내가 가장 중요하다고 고른 독도의 가치와 까닭을 써요.' }] },
      }),
      X('activity.debate', {
        title: '모둠 토의로 순위 정하기', method: '모둠 토의로 순위 정하기', tool: 'timer', minutes: 14,
        levels: { easy: '두 가치(영토·생태)의 순위를 토의하고 차례 카드를 놓는다.', base: '네 가치의 순위를 토의하고 토의 시간을 타이머에 맞춘다.', challenge: '순위를 정한 뒤 모둠 대표가 근거를 발표하고 스스로 점검한다.' },
        activity: {
          title: '가치 순위 모둠 토의', tool: 'timer',
          teacher: '"모둠에서 네 가치의 순위를 정해 볼까요? 정답은 없어요. 까닭을 들어 말하고 친구 말을 끝까지 들어요." 토의 차례 카드와 타이머로 시간을 나눈다. 큰 목소리로 정하려는 모둠에게 "까닭이 더 좋은 쪽은 어디일까요? 근거로 견주어 봐요"라고 말한다. 순위는 기록판(칠판)에 적게 한다.',
          task: '토의 차례를 정하고, 토의 시간을 맞춘 뒤, 가치 순위를 정하고 스스로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '모둠 토의 차례 카드를 바르게 놓아요.', toolOptions: { title: '토의 차례', cards: ['순위 정하기', '각자 고른 가치 말하기', '기록판에 적기', '까닭 듣고 묻기'] }, target: { order: ['각자 고른 가치 말하기', '까닭 듣고 묻기', '순위 정하기', '기록판에 적기'] }, difficulty: 0.15 },
            PLAN('우리 반 약속: 한 사람 말하기 40초, 듣고 묻기 20초, 4명이에요. 타이머를 맞춰요.', ['말하기', '묻기'], { work: 20, rest: 10, rounds: 2 }, { work: 40, rest: 20, rounds: 4 }, 0.15),
            { prompt: '토의를 마치고 스스로 점검해요.', toolOptions: { title: '토의 점검' }, target: { selfCheck: ['친구 말을 끝까지 들었다', '까닭을 들어 말했다', '순위를 기록판에 적었다'] }, difficulty: 0.1 },
            { prompt: '모둠 대표가 정한 순위와 1위의 근거를 반에 발표해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 모둠이 정한 가치 순위를 써요.', columns: ['순위', '가치', '까닭'], cells: [['1', '', ''], ['2', '', '']] }] },
      }),
      X('activity.link', {
        title: '역사 기록과 가치 잇기', method: '역사 기록과 가치 잇기', tool: 'mindmap', minutes: 13,
        levels: { easy: '가지 2개(영토·안보)에 기록 카드를 붙인다.', base: '가지 3개(영토·안보·자원)에 기록 카드를 붙인다.', challenge: '가지 4개(+ 생태)에 카드를 붙인다.' },
        activity: {
          title: '기록이 보여 주는 가치', tool: 'mindmap',
          teacher: '"5학년에 배운 기록은 어떤 가치와 이어질까요?" 카드를 붙일 때마다 "이 기록은 무엇을 보여 주었지요?"라고 묻는다. 칙령 제41호를 자원에 붙이는 학생에게 "칙령은 나라가 섬을 다스렸다는 기록이에요. 어느 가치와 가까울까요?"라고 되묻는다. 하나의 기록이 여러 가치와 이어질 수도 있다고 말해 주되, 판에서는 가장 가까운 가지 하나에 붙이게 한다.',
          task: '배운 역사 기록 카드를 가장 가까운 가치 가지에 붙여요.', levels: { easy: { live: true }, base: {}, challenge: {} },
          items: (() => {
            const G = { 영토: ['1900년 칙령 제41호', '『삼국사기』 우산국'], 안보: ['독도의용수비대', '오늘의 독도경비대'], 자원: ['안용복의 울릉도 고기잡이', '「지리지」 두 섬 기록'], 생태: ['천연보호구역 지정', '괭이갈매기 번식지 보호'] };
            const lvl = (names) => { const g = Object.fromEntries(names.map((n) => [n, G[n]])); return { slots: names, cards: inter(names, g), g }; };
            const e = lvl(['영토', '안보']); const b = lvl(['영토', '안보', '자원']); const c = lvl(['영토', '안보', '자원', '생태']);
            return [
              { prompt: '역사 기록 카드를 가장 가까운 가치 가지에 붙여요.', toolOptions: { topic: '기록과 가치', slots: b.slots, cards: b.cards }, target: { sort: b.g }, difficulty: 0.25,
                hints: ['기록이 무엇을 보여 주었는지 먼저 떠올려 보세요. 나라가 다스림·지킴·바다에서 일함 가운데 무엇일까요?'],
                levels: { easy: { prompt: '역사 기록 카드를 가장 가까운 가치 가지에 붙여요(가지 2개).', toolOptions: { slots: e.slots, cards: e.cards }, target: { sort: e.g } }, challenge: { prompt: '역사 기록과 오늘의 일 카드를 가치 가지에 붙여요(가지 4개).', toolOptions: { slots: c.slots, cards: c.cards }, target: { sort: c.g } } } },
              PICK('나라가 독도를 다스렸다는 영토 가치를 보여 주는 기록만 골라요.', '영토 가치를 보여 줘요', ['1900년 칙령 제41호'], ['독도 자원은 수백조 원', '독도는 아주 큰 섬'], { easy: 1, easyTraps: 1, extraTraps: ['인터넷 소문 글'], opts: { topic: '기록과 가치' } }, 0.2, { conclude: '역사 기록은 독도가 오래전부터 우리 영토였다는 가치를 보여 줘요.' }),
              { prompt: '하나의 기록이 두 가치와 이어질 수 있는지, 예를 들어 짝에게 말해요.', free: true, talk: true },
            ];
          })(),
        },
        worksheet: { items: [{ type: 'short', prompt: '칙령 제41호가 보여 주는 독도의 가치를 한 문장으로 써요.' }] },
      }),
      X('wrap.write', {
        title: '독도의 가치 소개 글', method: '독도의 가치 소개 글', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '빈칸 글 틀을 보며 가치 하나를 소개하고 기준 2개를 점검한다.', base: '가치 두 개를 세 문장으로 소개하고 기준 3개를 점검한다.', challenge: '세 문장 이상 쓰고 자료 근거(\'87.4km\' 같은 수나 기록 이름)를 넣어 한 군데 고쳐 쓴다.' },
        wrap: {
          teacher: '"네 가치 가운데 두 가지를 골라 독도를 소개하는 글을 써 볼까요? 확인된 사실을 근거로 넣어요." 기준표를 함께 읽는다. 출구 2번에서 \'작은 섬이라 가치가 적다\'를 고른 학생에게 "둘레 바다·생물·하늘까지 생각해 볼까요?"라고 말한다. 출처 없는 숫자(\'자원 수백조 원\')는 쓰지 않게 한다.',
          exitTicket: [
            RUBX('독도의 가치 두 가지를 소개하는 글을 써요.', { topic: '독도의 가치 두 가지를 골라 소개하는 글을 쓰세요.', starter: '독도는 ___ 가치가 있다. 왜냐하면 ___. 또 ___', crit: ['가치 두 가지를 썼다', '확인된 사실을 근거로 썼다', '출처 없는 숫자를 쓰지 않았다'], must: [['87.4km', '칙령', '괭이갈매기', '어장', '「지리지」']], chars: [30, 220], sents: [2, 3, 3], title: '독도의 가치 소개' }),
            { type: 'choice', prompt: '"독도는 작은 섬이라 가치가 적다"에 알맞은 생각은?', options: ['맞다, 작으면 가치가 적다', '둘레 바다·생물·하늘까지 소중하다', '사람이 적어 가치가 없다'], answer: 1, difficulty: 0.15, explain: '섬과 둘레 바다, 생물, 하늘이 모두 가치를 지녀요.' },
          ],
        },
        worksheet: {
          title: '독도의 가치',
          items: [
            { type: 'check', prompt: '내가 소개한 가치에 표시해요.', options: ['영토', '생태', '자원', '안보'] },
            { type: 'short', prompt: '소개 글에 넣은 근거 하나를 써요.' },
          ],
        },
      }),
      X('wrap.sum', {
        title: '5학년 독도 시간 띠 정리', method: '5학년 독도 시간 띠 정리', tool: 'timeline', minutes: 7,
        levels: { easy: '기록 카드 4장을 시간 띠에 놓는다.', base: '기록 카드 5장을 놓는다.', challenge: '기록 카드 6장을 놓고, 출구 2번에서 기록과 가치를 잇는다.' },
        wrap: {
          teacher: '"5학년에 만난 기록을 모두 시간 띠에 놓아 볼까요?" 나라(시대) 이름을 먼저 말하고 놓게 한다. 의용수비대를 칙령보다 앞에 두면 "대한제국과 광복 뒤 가운데 무엇이 먼저였을까요?"라고 묻는다. 시간 띠를 보며 "1,500년 가까이 기록과 지킴이 이어졌어요"라고 정리한다.',
          exitTicket: [
            EX('timeline', ORDER('5학년에 배운 기록 카드를 옛날부터 차례대로 놓아요.', [R5.y512, R5.y1454, R5.y1693, R5.y1900, R5.guard], { easy: [0, 1, 3, 4], add: [R5.now, 5], opts: AX }, 0.15)),
            { type: 'choice', prompt: '칙령 제41호가 가장 잘 보여 주는 독도의 가치는?', options: ['영토', '생태', '자원'], answer: 0, difficulty: 0.15, explain: '나라가 섬을 다스렸다는 영토의 가치를 보여 줘요.' },
            { type: 'short', prompt: '5학년 독도 공부를 한 문장으로 정리해요.' },
          ],
        },
        worksheet: {
          title: '5학년 독도 시간 띠',
          items: [
            { type: 'table', prompt: '시간 띠의 기록을 정리해요.', columns: ['때', '기록·일'], cells: [['512년', ''], ['1454년', ''], ['1693년 무렵', ''], ['1900년', ''], ['광복 뒤', '']], answer: '『삼국사기』 우산국 / 「지리지」 / 안용복 / 칙령 제41호 / 독도의용수비대' },
            { type: 'short', prompt: '가장 기억에 남는 기록과 그 까닭을 써요.' },
          ],
        },
      }),
    );
  }

  // 6학년 기록 카드(시간 띠)
  const R6 = { y1696: '1696년 에도 막부 도해 금지', y1877: '1877년 태정관 지령', y1900: '1900년 대한제국 칙령 제41호', y1905: '1905년 시마네현 고시', y1946: '1946년 각서 제677호', y1952: '1952년 평화선 선언' };

  // ======== 6학년 · 영토·영해·영공과 독도 (초 내용체계: 정치·군사·경제적 가치) ========
  {
    const X = mk('g6-area', 6);
    M.push(
      X('intro.three', {
        title: '땅·바다·하늘 그림 나누기', method: '땅·바다·하늘 그림 나누기', tool: 'sortboard', minutes: 6,
        levels: { easy: '교사가 카드 3장을 읽어 주며 땅·바다·하늘에 하나씩 나눈다.', base: '카드 6장을 스스로 나눈다.', challenge: '나눈 바구니에 영토·영해·영공 용어를 붙여 말한다.' },
        intro: {
          teacher: '"나라의 영역은 땅뿐일까요? 그림 카드를 땅·바다·하늘로 나누어 볼까요?" 시연 단추로 \'동도와 서도\'는 땅, \'독도 둘레 바다\'는 바다, \'독도 위 하늘\'은 하늘 바구니에 담기는 모습을 보인다. "나라는 땅만 가지고 있어요"라는 말에는 "땅에 붙은 바다와 그 위의 하늘도 나라의 영역이에요"라고 알려 준다.',
          student: '독도 그림 카드를 땅·바다·하늘로 나누어 보고, 나라의 영역이 어디까지일지 말해 보아요.',
          demo: { tool: 'sortboard', options: { slots: ['땅', '바다', '하늘'], cards: ['동도와 서도', '독도 둘레 바다', '독도 위 하늘', '바위섬', '고기 잡는 바다', '나는 갈매기 위 하늘'] }, sequence: [{ sort: { 땅: ['동도와 서도', '바위섬'], 바다: ['독도 둘레 바다', '고기 잡는 바다'], 하늘: ['독도 위 하늘', '나는 갈매기 위 하늘'] } }] },
          art: art('a paper-cut island with layered bands of green land, blue sea and pale sky above it, like a three-layer diorama', '땅·바다·하늘', 'cloud', 'sky'),
        },
      }),
      X('intro.ask', {
        title: '"여기는 누구 하늘?"', method: '"여기는 누구 하늘?" 질문 고르기', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 질문 카드 2장을 읽어 주고 하나를 고르게 한다.', base: '질문 카드 3장 가운데 묻고 싶은 것을 고른다.', challenge: '카드에 없는 질문을 하나 만들어 짝에게 묻는다.' },
        intro: {
          teacher: '"독도 위 하늘을 비행기가 날고 있어요. 이 하늘은 누구의 하늘일까요?" 시연 단추로 질문 카드가 바구니에 담기는 모습을 보인다. "하늘은 모두의 것이라 주인이 없어요"라는 말에는 "나라의 땅과 바다 위 하늘은 그 나라의 영공이에요. 오늘 함께 알아봐요"라고 답한다.',
          student: '독도 위를 나는 비행기 그림을 보고 가장 묻고 싶은 질문 카드를 골라 보아요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '묻고 싶은 질문', cards: ['하늘에도 주인이 있을까?', '비행기는 무슨 색일까?', '하늘은 어디까지일까?', '허락 없이 날아도 될까?'], shuffle: false }, sequence: [{ pick: ['하늘에도 주인이 있을까?'] }, { pick: ['하늘에도 주인이 있을까?', '하늘은 어디까지일까?', '허락 없이 날아도 될까?'] }] },
          art: art('a paper-cut airplane flying over a small rocky island with a question mark cloud', '여기는 누구 하늘?', 'cloud', 'sky'),
        },
      }),
      X('activity.terrain', {
        title: '지도에서 독도 영해 찾기', method: '지도에 영해 칸 색칠하기', tool: 'map', minutes: 14,
        levels: { easy: '핀을 놓으면 칸 읽기 글자가 보여 영해 칸인지 확인할 수 있다.', base: '읽기 글자 없이 독도 둘레 바다 칸에 핀을 꽂는다.', challenge: '핀을 꽂은 뒤 영해 위 하늘(영공)을 설명하는 보기를 고른다.' },
        activity: {
          title: '독도 둘레 영해 찾기', tool: 'map',
          teacher: '"우리나라 영해는 기준선에서 12해리까지예요. 독도 둘레 바다도 우리 영해예요." 칸 지도는 줄인 그림이라 실제 12해리와 칸 크기가 같지 않다는 점을 먼저 밝힌다. 육지 칸에 꽂는 학생에게 "그곳은 땅인가요, 바다인가요?"라고 묻는다. 영공을 우주 전체로 여기는 학생에게는 "영토와 영해 위의 하늘이에요"라고 정리한다.',
          task: '독도 둘레 바다(영해) 칸에 핀을 꽂고, 영역에 대한 바른 설명을 골라요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            MI('독도 바로 북쪽의 바다 칸(독도 영해의 한 곳)에 핀을 꽂아요.', KOR([P.dokdo, P.ulleung, P.seoul]), { from: '독도', dir: '북', steps: 1 }, 0.2),
            MI('독도에서 남쪽으로 한 칸 간 바다 칸에 핀을 꽂아요.', KOR([P.dokdo, P.ulleung, P.busan]), { from: '독도', dir: '남', steps: 1 }, 0.2),
            MQ('지도를 보고 독도의 영역에 대한 바른 설명을 골라요.', KOR([P.dokdo, P.ulleung]), '바른 설명은?', ['섬·둘레 바다·위 하늘이 모두 우리 영역', '섬만 우리 영역이다', '바다만 우리 영역이다'], 0, 0.25, { conclude: '독도와 둘레 12해리 바다, 그 위 하늘이 모두 우리 영역이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'figure', wide: true, prompt: '지도에서 독도와 둘레 바다(영해)에 동그라미를 그려요.', tool: 'map', figures: [{ options: KORW([PW.dokdo, PW.ulleung, PW.seoul]), caption: '우리나라 칸 지도' }], answer: '독도와 둘레 바다' }] },
      }),
      X('activity.match', {
        title: '영토·영해·영공 뜻 잇기', method: '용어와 뜻 잇기', tool: 'emotion', minutes: 13,
        levels: { easy: '용어 칸 3개에 뜻 카드를 잇는다(보기 3장).', base: '용어 칸 3개에 뜻 카드를 잇는다(헷갈리는 보기 2장 더).', challenge: '뜻을 이은 뒤 독도의 예 카드를 용어 칸에 하나씩 더 잇는다.' },
        activity: {
          title: '세 용어의 뜻과 독도의 예', tool: 'emotion',
          teacher: '"영토·영해·영공, 세 낱말의 \'영\'은 나라가 다스리는 곳이라는 뜻이에요. 토·해·공은 무엇일까요?" 땅(토)·바다(해)·하늘(공)을 칠판에 적는다. 영해를 \'아무 바다\'로 잇는 학생에게 "나라의 땅에 붙은 바다예요. 먼 바다 한가운데도 그럴까요?"라고 묻는다. 뜻을 이은 뒤 독도의 예로 말하게 한다.',
          task: '영토·영해·영공 칸에 알맞은 뜻 카드를 잇고, 독도의 예를 이어요.', levels: { easy: { live: true }, base: {}, challenge: {} },
          items: [
            { prompt: '영토·영해·영공 칸에 알맞은 뜻 카드를 이어요.', toolOptions: { mode: 'match', slots: [{ id: 'land', label: '영토' }, { id: 'sea', label: '영해' }, { id: 'air', label: '영공' }], cards: ['땅과 바다 위 하늘', '나라의 땅', '먼 바다 한가운데', '땅에 붙은 바다', '우주 전체'] }, target: { match: { land: '나라의 땅', sea: '땅에 붙은 바다', air: '땅과 바다 위 하늘' } }, difficulty: 0.2,
              levels: { easy: { prompt: '영토·영해·영공 칸에 알맞은 뜻 카드를 이어요(보기 3장).', toolOptions: { cards: ['땅과 바다 위 하늘', '나라의 땅', '땅에 붙은 바다'] } } } },
            MAT('용어 칸에 독도의 예 카드를 이어요.', [['영토', '동도와 서도'], ['영해', '독도 둘레 12해리 바다'], ['영공', '독도 위 하늘']], ['먼 남쪽 바다'], { easy: 2, base: 3 }, 0.2, { conclude: '독도의 땅·바다·하늘이 모두 우리 영토·영해·영공이에요.' }),
            { prompt: '세 용어 가운데 하나를 골라 독도의 예를 들어 짝에게 설명해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '용어의 뜻과 독도의 예를 써요.', columns: ['용어', '뜻', '독도의 예'], cells: [['영토', '', ''], ['영해', '', ''], ['영공', '', '']], answer: '나라의 땅·동도와 서도 / 땅에 붙은 바다·둘레 12해리 / 땅과 바다 위 하늘·독도 위 하늘' }] },
      }),
      X('activity.earth', {
        title: '지구본에서 우리나라 찾기', method: '지구본에서 우리나라 영역 보기', tool: 'earth', minutes: 14,
        levels: { easy: '지구본을 돌려 우리나라가 낮이 되게 맞춘다(읽기 글자가 보인다).', base: '지구본을 돌린 뒤 우리나라 영역에 드는 바다를 보기에서 고른다.', challenge: '이웃 나라에도 영역이 있음을 알고, 다른 나라 영역을 지날 때의 바른 생각을 고른다.' },
        activity: {
          title: '지구본에서 보는 우리 영역', tool: 'earth',
          teacher: '"지구본을 돌려 우리나라를 찾아볼까요? 우리나라가 낮이 되게 돌려 보세요." 지구가 시계 반대 방향으로 돈다는 것을 먼저 보인다. 바다는 모두 아무 나라 것도 아니라고 말하는 학생에게 "우리 땅에 붙은 바다는 영해예요. 먼 바다는 여러 나라가 함께 쓰는 바다예요"라고 구별해 준다. 이웃 나라도 저마다 영역이 있다는 점을 짚고, 서로의 영역을 존중한다고 정리한다.',
          task: '지구본을 돌려 우리나라를 찾고, 우리나라 영역과 이웃 나라 영역에 대한 바른 생각을 골라요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            { prompt: '지구본을 돌려 우리나라가 낮(한낮)이 되게 맞춰요.', toolOptions: { mode: 'spin', start: { hour: 0 } }, target: { phase: '낮' }, difficulty: 0.15 },
            { prompt: '지구본 속 우리나라를 보고, 우리 영역에 드는 바다를 골라요.', state: { hour: 12 }, toolOptions: { mode: 'spin', readOnly: true, ask: { q: '우리나라 영역에 드는 바다는?', choices: ['독도 둘레 12해리 바다', '먼 바다 한가운데', '다른 나라 땅에 붙은 바다'] } }, target: { pick: 0 }, difficulty: 0.2 },
            { prompt: '이웃 나라 영역에 대한 바른 생각을 골라요.', state: { hour: 12 }, toolOptions: { mode: 'spin', readOnly: true, ask: { q: '다른 나라 영해·영공을 지날 때는?', choices: ['그 나라의 규칙을 따른다', '아무렇게나 지나도 된다', '우리 영역이라고 우긴다'] } }, target: { pick: 0 }, difficulty: 0.25, conclude: '나라마다 영역이 있어요. 우리 영역을 지키듯 다른 나라 영역도 존중해요.' },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '우리나라 영해에 드는 바다는?', options: ['독도 둘레 12해리 바다', '먼 바다 한가운데', '다른 나라 땅에 붙은 바다'], answer: 0 }] },
      }),
      X('activity.model', {
        title: '색종이 영역 모형 꾸미기', method: '색종이로 영역 모형 꾸미기', tool: 'collage', minutes: 13,
        levels: { easy: '조각 3개 이상으로 땅·바다 두 겹을 만들고 점검 칸 2개를 표시한다.', base: '조각 5개 이상으로 땅·바다·하늘 세 겹을 만들고 점검 칸 3개를 표시한다.', challenge: '세 겹 모형을 만들고 용어 설명을 활동지에 붙일 글로 써서 점검 칸 4개를 표시한다.' },
        activity: {
          title: '독도 영역 모형 만들기', tool: 'collage',
          teacher: '"초록 조각으로 섬(영토), 파랑 조각으로 둘레 바다(영해), 하늘색 조각으로 그 위 하늘(영공)을 겹쳐 볼까요?" 칠판에 세 겹을 그려 보인다. 바다를 섬보다 작게 만드는 학생에게 "섬 둘레 바다는 섬보다 넓어요"라고 말한다. 콜라주는 글자를 붙이지 못하니 용어 이름은 활동지에 쓰게 한다.',
          task: '색 조각으로 땅·바다·하늘을 겹쳐 독도 영역 모형을 만들고 스스로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            COL('색 조각으로 독도 영역 모형을 만들고 점검해요.', ['초록 조각으로 섬(영토)을 만들었다', '파랑 조각으로 둘레 바다(영해)를 만들었다', '하늘색 조각으로 위 하늘(영공)을 겹쳤다', '용어 설명을 활동지에 썼다']),
            COL('모형에 동도·서도 두 섬이 보이게 다시 꾸미고 점검해요.', ['동도·서도 두 섬을 만들었다', '바다가 섬보다 넓게 보인다', '하늘이 맨 위에 있다', '짝에게 모형을 설명했다'], {}, 0.15),
            { prompt: '모형을 가리키며 영토·영해·영공을 짝에게 차례로 설명해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'draw', prompt: '땅·바다·하늘 세 겹으로 독도 영역 그림을 그리고 용어를 써요.' }] },
        notes: '콜라주는 글자를 붙이지 못한다. 용어 이름표는 활동지나 종이띠에 따로 쓴다.',
      }),
      X('wrap.explain', {
        title: '짝에게 영역 설명하기', method: '짝에게 영역 설명하기', tool: 'timer', minutes: 7,
        levels: { easy: '영역 하나를 설명하고 점검 칸 1개를 표시한다.', base: '영역 세 가지를 설명하고 점검 칸 3개를 표시한다.', challenge: '세 가지를 설명하고 독도의 예와 이어 점검 칸 4개를 표시한다.' },
        wrap: {
          teacher: '"모형을 가리키며 짝에게 영토·영해·영공을 설명해 볼까요? 한 사람 1분씩이에요." 설명이 끝나면 들은 짝이 점검 칸을 함께 본다. 영공을 우주로 설명하는 학생에게 "영토와 영해 위의 하늘이에요"라고 바로잡는다.',
          exitTicket: [
            SELF('영역 설명 점검', ['영토를 설명했다', '영해를 설명했다', '영공을 설명했다', '독도의 예와 이어 말했다'], '짝에게 설명한 것에 스스로 표시해요.', { easy: 1, base: 3 }),
            { type: 'choice', prompt: '영공에 대한 바른 설명은?', options: ['우주 전체', '영토와 영해 위의 하늘', '비행기가 나는 곳 모두'], answer: 1, difficulty: 0.15, explain: '영공은 영토와 영해 위의 하늘이에요.' },
            { type: 'short', prompt: '짝의 설명에서 잘한 점 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '영역 설명하기',
          items: [
            { type: 'short', prompt: '영해의 뜻을 내 말로 써요.' },
            { type: 'check', prompt: '짝에게 설명한 것에 표시해요.', options: ['영토', '영해', '영공'] },
          ],
        },
      }),
      X('wrap.sum', {
        title: '"독도와 둘레 바다는 ___"', method: '한 문장 정리', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '빈칸 문장 틀을 보며 쓰고 기준 2개를 점검한다.', base: '한 문장을 쓰고 기준 3개(용어·독도의 예·바른 뜻)를 점검한다.', challenge: '두 문장으로 쓰고 \'영공\'을 넣어 한 군데 고쳐 쓴다.' },
        wrap: {
          teacher: '"\'독도와 둘레 바다는 ___\' 문장을 영역 용어를 넣어 완성해 볼까요?" 용어를 바르게 썼는지 기준표로 점검한다. 출구 2번에서 \'섬만 우리 영역\'을 고른 학생에게 "둘레 바다와 하늘은요?"라고 되묻는다.',
          exitTicket: [
            RUBX('영역 용어를 넣어 독도를 한 문장으로 정리해요.', { topic: '"독도와 둘레 바다는 ___" 문장을 영역 용어를 넣어 완성하세요.', starter: '독도와 둘레 바다는 우리나라의 ___이다.', crit: ['영토·영해·영공 가운데 용어를 썼다', '독도의 예를 넣었다', '용어의 뜻에 맞게 썼다'], must: ['영공'], chars: [15, 160], sents: [1, 1, 2], title: '영역 한 문장' }),
            { type: 'choice', prompt: '"나라의 영역은 땅뿐이다"에 알맞은 생각은?', options: ['맞다', '땅·바다·하늘이 모두 영역이다', '바다만 영역이다'], answer: 1, difficulty: 0.15, explain: '영토·영해·영공이 모두 나라의 영역이에요.' },
          ],
        },
        worksheet: {
          title: '영역 한 문장',
          items: [
            { type: 'blank', prompt: '빈칸에 알맞은 수를 써요.', text: '우리나라 영해는 기준선에서 ___해리까지이다.', answer: '12' },
            { type: 'short', prompt: '"독도와 둘레 바다는 ___" 문장을 완성해요.' },
          ],
        },
      }),
    );
  }

  // ======== 6학년 · 일본의 기록도 보여 주는 것 (초 내용체계: 역사적 특성 — 일본 주장은 근거 확인 수준) ========
  {
    const X = mk('g6-docs', 6);
    M.push(
      X('intro.order', {
        title: '네 기록 차례 어림하기', method: '네 기록 어림 차례', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 기록 카드 2장을 읽어 주고 먼저라고 생각하는 것을 고르게 한다.', base: '기록 카드 4장 가운데 가장 먼저라고 생각하는 것을 고른다.', challenge: '고른 뒤 연도를 보며 그렇게 생각한 까닭을 말한다.' },
        intro: {
          teacher: '"오늘은 네 기록을 만나요. 일본 정부가 남긴 기록 둘, 대한제국의 칙령, 일본 시마네현의 고시예요. 가장 먼저 쓰인 것은 무엇일까요?" 시연 단추로 \'1696년 에도 막부 도해 금지\' 카드가 바구니에 담기는 모습을 보인다. "나중에 나온 기록이 더 힘이 세요"라는 말에는 "먼저 있었던 사실을 나중 기록이 지울 수 있을까요? 오늘 따져 봐요"라고 되묻는다.',
          student: '네 기록 카드 가운데 가장 먼저 쓰였다고 생각하는 것을 골라 짝에게 까닭을 말해 보아요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '가장 먼저 쓰인 기록', cards: [R6.y1905, R6.y1696, R6.y1900, R6.y1877], shuffle: false }, sequence: [{ pick: [R6.y1696] }] },
          art: art('four paper-cut scrolls with different seals lying on a desk, with a paper timeline arrow below them', '어느 기록이 먼저일까?', 'leaf', 'mint'),
        },
      }),
      X('intro.who', {
        title: '누가 남긴 기록일까', method: '누가 남긴 기록인지 나누기', tool: 'sortboard', minutes: 6,
        levels: { easy: '교사가 카드 2장을 읽어 주며 함께 나눈다.', base: '기록 카드 4장을 \'조선·대한제국\'과 \'일본\' 바구니에 나눈다.', challenge: '나눈 뒤 \'일본이 남긴 기록\'이 왜 더 눈여겨볼 만한지 말한다.' },
        intro: {
          teacher: '"기록마다 누가 남겼는지 나누어 볼까요?" 시연 단추로 칙령은 \'조선·대한제국\', 막부의 도해 금지와 태정관 지령·시마네현 고시는 \'일본\' 바구니에 담기는 모습을 보인다. 일본 쪽 기록이 \'울릉도·독도는 일본과 관계없다\'고 적은 것이 있다는 점을 알려 주고, 기록을 남긴 주체와 그 나라 사람들은 나누어 생각한다고 밝힌다.',
          student: '기록 카드를 누가 남겼는지에 따라 나누어 보고, 어느 쪽 기록이 더 많은지 말해 보아요.',
          demo: { tool: 'sortboard', options: { slots: ['조선·대한제국', '일본'], cards: [R6.y1696, R6.y1900, R6.y1877, R6.y1905] }, sequence: [{ sort: { '조선·대한제국': [R6.y1900], 일본: [R6.y1696, R6.y1877, R6.y1905] } }] },
          art: art('two paper-cut baskets on a shelf, scrolls with different seals being sorted into them', '누가 남긴 기록일까?', 'leaf', 'mint'),
        },
      }),
      X('activity.line', {
        title: '1696~1905 시간 띠 놓기', method: '1696~1905 시간 띠 놓기', tool: 'timeline', minutes: 14,
        levels: { easy: '기록 카드 3장을 시간 띠에 놓는다.', base: '기록 카드 4장을 놓는다.', challenge: '카드 4장을 놓고, 연도 칸마다 설명 카드를 잇는다.' },
        activity: {
          title: '네 기록 시간 띠', tool: 'timeline',
          teacher: '"1696년, 1877년, 1900년, 1905년. 차례대로 놓아 볼까요?" 기록마다 만든 주체를 함께 말하게 한다. 시마네현 고시를 칙령보다 앞에 두는 학생에게 "1900과 1905 가운데 어느 수가 작은가요?"라고 묻는다. 시마네현 고시는 일본 중앙 정부의 대외 발표가 아니라 지방 현의 고시였다는 점도 덧붙인다.',
          task: '1696년부터 1905년까지의 기록 카드를 시간 띠에 놓고, 기록마다 설명을 이어요.', levels: { easy: { live: true }, base: {}, challenge: {} },
          items: [
            ORDER('네 기록 카드를 옛날부터 차례대로 놓아요.', [R6.y1696, R6.y1877, R6.y1900, R6.y1905], { easy: [0, 2, 3], opts: AX }, 0.2),
            MAT('연도 칸에 알맞은 설명 카드를 이어요.', [['1696년', '울릉도 건너가기 금지'], ['1877년', '울릉도 외 한 섬은 무관'], ['1900년', '울도군이 석도 관할'], ['1905년', '현에 넣는다고 고시']], ['독도에 공항을 지음'], { easy: 2, base: 3, opts: AX }, 0.25, { conclude: '칙령 제41호(1900)는 시마네현 고시(1905)보다 5년 앞섰어요.' }),
            { prompt: '시간 띠를 보고 1900년과 1905년 가운데 앞선 기록이 무엇인지 짝에게 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '기록을 시간 차례로 써요.', columns: ['연도', '기록', '남긴 곳'], cells: [['1696년', '', ''], ['1900년', '', ''], ['1905년', '', '']], answer: '도해 금지·에도 막부 / 칙령 제41호·대한제국 / 시마네현 고시·시마네현' }] },
      }),
      X('activity.meaning', {
        title: '기록마다 보여 주는 것', method: '기록마다 보여 주는 것 잇기', tool: 'emotion', minutes: 13,
        levels: { easy: '기록 칸 2개에 뜻 카드를 잇는다.', base: '기록 칸 3개에 뜻 카드를 잇는다.', challenge: '기록 칸 4개에 뜻 카드를 잇는다.' },
        activity: {
          title: '기록과 뜻 잇기', tool: 'emotion',
          teacher: '"1877년 일본 메이지 정부의 태정관은 \'울릉도 외 한 섬은 일본과 관계없다\'고 했어요. 이 기록은 무엇을 보여 줄까요?" 기록 칸을 읽고 뜻 카드를 잇게 한다. 태정관 지령을 1696년에 잇는 학생에게 "막부와 메이지 정부의 차례를 다시 볼까요?"라고 묻는다. 기록이 말한 만큼만 뜻으로 고르게 한다.',
          task: '기록 칸에 그 기록이 보여 주는 뜻 카드를 이어요.', levels: { easy: { live: true }, base: {}, challenge: {} },
          items: [
            MAT('기록 칸에 그 기록이 보여 주는 뜻 카드를 이어요.', [['1877년 태정관 지령', '일본 정부도 무관하다 함'], ['1900년 칙령 제41호', '대한제국이 석도를 다스림'], ['1696년 막부 도해 금지', '울릉도에 건너가지 말라 함'], ['1905년 시마네현 고시', '칙령보다 5년 뒤의 일']], ['독도를 처음 발견함'], { easy: 2, base: 3 }, 0.25),
            BR('친구 말에 알맞은 답을 골라요.', '친구가 "일본 기록이 있으니 독도는 일본 땅이 맞잖아"라고 해요.', [['a', '맞아, 일본 기록이 있으니까', '기록이 무엇을 말하는지 읽지 않게 돼요.', '일본 정부의 기록도 울릉도 외 한 섬은 무관하다고 했어요.'], ['b', '일본 정부 기록도 무관하다고 했어', '친구가 태정관 지령을 함께 읽어 봐요.'], ['c', '상대 기록은 볼 필요 없어', '중요한 근거를 놓치게 돼요.', '기록은 누가 남겼든 무엇을 말하는지 읽고 따져요.']], 'b', 0.25, { conclude: '일본 정부가 남긴 기록도 울릉도와 독도가 일본과 관계없다고 보여 줘요.' }),
            { prompt: '\'일본 정부의 기록도 보여 준다\'는 말이 왜 힘이 있는지 모둠에서 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 수를 써요.', text: '___년 태정관 지령은 울릉도 외 한 섬이 일본과 관계없다고 했다.', answer: '1877' }] },
      }),
      X('activity.dilemma', {
        title: '앞선 기록과 나중 기록', method: '앞선 기록과 나중 기록, 무엇이 근거일까', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번에서 고르고 근거 한 장을 고른다.', base: '갈림 2번을 지나 근거를 고른다.', challenge: '갈림 3번을 지나 알맞은 근거 2장을 고르고, 다른 길의 결과와 견준다.' },
        activity: {
          title: '갈림길: 어느 기록이 근거일까', tool: 'dilemma',
          teacher: '"가상의 친구 \'진\'이 1905년 고시만 보고 판단하려 해요. 어떻게 따져야 할까요?" 고를 때마다 결과를 소리 내어 읽게 한다. \'나중 기록이 더 힘이 세다\'를 고르는 학생에게 "앞서 이미 다스리고 있었다면, 나중에 넣는다고 한 고시가 그 사실을 지울 수 있을까요?"라고 묻는다. 감정이 아니라 연도와 출처로 따지게 한다.',
          task: '갈림길마다 기록을 따지는 방법을 고르고, 결과를 읽은 뒤 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '어느 기록이 근거일까',
            steps: [
              { text: '(가상) 진이 "1905년 시마네현 고시가 있으니 그게 맞겠지"라고 해요.', motif: 'house',
                good: ['date', '두 기록의 연도부터 견주어 보자고 한다', '1900년 칙령이 5년 앞선다는 것을 알게 돼요.', [['진', '기록을 다시 봐요', 1]]],
                bad: ['later', '나중 기록이 더 힘이 세다고 맞장구친다', '앞선 기록을 보지 않고 판단하게 돼요.', '나중 기록이 앞선 사실을 지우지 못해요.', [['진', '잘못 알게 돼요', -1]]] },
              { text: '연도를 견주니 칙령이 앞서요. 진은 "칙령은 우리 쪽 기록이잖아"라고 해요.', motif: 'star',
                good: ['jp', '일본 정부의 기록(태정관 지령)도 함께 본다', '일본 정부도 무관하다고 한 기록을 알게 돼요.', [['진', '고개를 끄덕여요', 1]]],
                bad: ['angry', '목소리를 높여 무조건 우리 땅이라고 한다', '진이 말을 멈추고 대화가 끊겨요.', '목소리보다 근거가 더 힘이 있어요.', [['진', '마음이 상해요', -1]]] },
              { text: '진이 "그 기록은 어디서 볼 수 있어?"라고 물어요.', motif: 'sun',
                good: ['source', '외교부 독도 누리집 같은 공식 출처를 알려 준다', '진이 직접 확인해 보겠다고 해요.', [['진', '스스로 확인해요', 1]]],
                bad: ['rumor', '어디서 봤는지 모르는 글을 보여 준다', '진이 믿을 수 없다고 해요.', '출처가 분명해야 근거가 돼요.', [['나', '믿음을 잃어요', -1]]] },
            ],
            ending: '연도·기록·출처로 따지니 차분하게 이야기를 나눌 수 있었어요.',
            reasons: [{ id: 'first', text: '앞선 기록이 먼저 있었던 사실을 보여 준다' }, { id: 'both', text: '일본 정부의 기록도 함께 보면 더 분명하다' }, { id: 'loud', text: '목소리가 큰 쪽이 맞다', why: '근거가 아니라 목소리로 정할 수는 없어요.' }, { id: 'late', text: '나중 기록이 늘 더 힘이 세다', why: '나중 기록이 앞선 사실을 지우지 못해요.' }],
            good: ['first', 'both'],
            talk: '모둠에서 "기록으로 따질 때 꼭 볼 것 세 가지(연도·남긴 곳·출처)"를 이야기해요.',
            conclude: '1900년 칙령은 1905년 고시보다 앞섰고, 일본 정부의 기록도 이를 보여 줘요.',
          }),
        },
        worksheet: { items: [{ type: 'short', prompt: '앞선 기록이 근거가 되는 까닭을 한 문장으로 써요.' }] },
        notes: '\'진\'은 지어낸 가상 인물이다. 상대를 이기는 말싸움이 아니라 기록을 함께 확인하는 대화로 이끈다.',
      }),
      X('activity.bar', {
        title: '기록 사이 햇수 막대', method: '기록 간 햇수 막대 견주기', tool: 'chart', minutes: 13,
        levels: { easy: '막대 2개(1900년·1877년)의 값이 보이고, 더 앞선 기록을 고른다.', base: '막대 3개(1696년 더함)를 읽고 고른다.', challenge: '막대 3개를 읽고 1900년 칙령이 몇 해 앞섰는지 차이를 고른다.' },
        activity: {
          title: '1905년보다 몇 해 앞섰나', tool: 'chart',
          teacher: '"1905년 시마네현 고시보다 각 기록이 몇 해 앞섰는지 막대로 나타냈어요. 1905에서 기록의 연도를 빼면 돼요." 1905−1900=5를 칠판에 적어 보인다. 막대가 짧으면 덜 중요하다고 읽는 학생에게 "막대는 몇 해 앞섰는지일 뿐이에요. 짧아도 앞선 것은 앞선 거예요"라고 말한다.',
          task: '1905년보다 몇 해 앞섰는지 나타낸 막대그래프를 읽고 질문에 답해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            CHR('막대그래프에서 가장 오래전 기록을 골라요.', { title: '1905년 고시보다 몇 해 앞섰나', unit: '년', data: [['1900년 칙령', 5], ['1877년 지령', 28], ['1696년 도해 금지', 209]], question: '가장 오래전 기록은?', choices: ['1900년 칙령', '1877년 지령', '1696년 도해 금지'], pick: 2, easyChoices: { c: ['1900년 칙령', '1696년 도해 금지'], pick: 1 }, xLabel: '기록', yLabel: '앞선 햇수' }, 0.2),
            CHR('그래프를 보고 1900년 칙령이 1905년 고시보다 몇 해 앞섰는지 골라요.', { title: '1905년 고시보다 몇 해 앞섰나', unit: '년', data: [['1900년 칙령', 5], ['1877년 지령', 28], ['1696년 도해 금지', 209]], question: '칙령은 고시보다 몇 해 앞섰나?', choices: ['5년', '28년', '209년'], pick: 0, easyChoices: { c: ['5년', '209년'], pick: 0 }, chChoices: { c: ['5년', '28년', '209년', '앞서지 않았다'], pick: 0 }, xLabel: '기록', yLabel: '앞선 햇수' }, 0.2, { conclude: '세 기록 모두 1905년 고시보다 앞서요. 칙령은 5년 앞섰어요.' }),
            { prompt: '그래프의 수를 넣어 \'앞선 기록\'에 대해 짝에게 한 문장으로 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 수를 써요.', text: '1900년 칙령은 1905년 시마네현 고시보다 ___년 앞섰다.', answer: '5' }] },
      }),
      X('wrap.talk', {
        title: '모둠 근거 말하기 연습', method: '모둠 근거 말하기 연습', tool: 'timer', minutes: 7,
        levels: { easy: '말틀(\'앞선 기록은 ___\')로 한 사람씩 말하고 점검 칸 2개를 표시한다.', base: '한 문장으로 근거를 말하고 점검 칸 3개를 표시한다.', challenge: '두 문장(근거 + 출처)으로 말하고 점검 칸 4개를 표시한다.' },
        wrap: {
          teacher: '"모둠에서 \'앞선 기록은 ___\' 말틀로 한 사람씩 근거를 말해 볼까요? 한 사람 30초예요." 차례 시간을 타이머로 보인다. 감정 섞인 말이 나오면 "연도와 기록 이름으로 다시 말해 볼까요?"라고 돌린다. 다른 나라 사람을 탓하는 말은 근거가 아니라고 짚는다.',
          exitTicket: [
            SELF('근거 말하기 점검', ['연도를 넣어 말했다', '기록 이름을 넣어 말했다', '차분한 말로 말했다', '출처를 함께 말했다'], '모둠에서 근거를 말한 뒤 스스로 표시해요.'),
            { type: 'choice', prompt: '근거로 말하기에 알맞은 문장은?', options: ['그냥 내 말이 맞아', '1900년 칙령이 1905년 고시보다 앞서', '큰 소리로 말하면 이겨'], answer: 1, difficulty: 0.15, explain: '연도와 기록 이름이 근거가 돼요.' },
            { type: 'short', prompt: '내가 말한 근거 문장을 써요.' },
          ],
        },
        worksheet: {
          title: '근거 말하기',
          items: [
            { type: 'short', prompt: '"앞선 기록은 ___" 말틀로 근거 문장을 써요.' },
            { type: 'check', prompt: '내 근거 문장에 넣은 것에 표시해요.', options: ['연도', '기록 이름', '출처'] },
          ],
        },
      }),
      X('wrap.write', {
        title: '근거 두 개로 짧은 글', method: '근거 두 개로 짧은 글', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀을 보며 근거 하나를 넣어 쓰고 기준 2개를 점검한다.', base: '근거 두 개를 넣어 세 문장으로 쓰고 기준 3개(연도·출처·정중함)를 점검한다.', challenge: '세 문장 이상 쓰고 \'태정관\'을 넣어 반론 하나에 답하는 문장으로 고쳐 쓴다.' },
        wrap: {
          teacher: '"근거 두 개를 넣어 \'독도가 우리 땅인 까닭\'을 세 문장으로 써 볼까요? 연도·출처·정중한 말, 세 가지를 기준표로 봐요." 출구 2번에서 \'나중 기록이 더 힘이 세다\'를 고른 학생에게 "앞선 사실을 나중 기록이 지울 수 있을까요?"라고 되묻는다.',
          exitTicket: [
            RUBX('근거 두 개를 넣어 세 문장으로 써요.', { topic: '독도가 우리 땅인 까닭을 근거 두 개를 넣어 쓰세요.', starter: '첫째, ___년 ___에 따르면 ___. 둘째, ___', crit: ['연도를 넣은 근거를 썼다', '출처(기록 이름)를 밝혔다', '정중한 말로 썼다'], must: ['태정관'], chars: [30, 240], sents: [2, 3, 3], title: '근거 두 개' }),
            { type: 'choice', prompt: '"기록은 나중 것이 더 힘이 세다"에 알맞은 생각은?', options: ['맞다', '앞선 사실을 나중 기록이 지우지 못한다', '기록은 모두 소용없다'], answer: 1, difficulty: 0.2, explain: '1900년 칙령은 1905년 고시보다 앞섰어요.' },
          ],
        },
        worksheet: {
          title: '근거 두 개로 쓰기',
          items: [
            { type: 'short', prompt: '내가 쓴 근거 두 개를 기록 이름과 연도로 써요.' },
            { type: 'choice', prompt: '1905년 시마네현 고시보다 앞선 대한제국 기록은?', options: ['칙령 제41호', '평화선 선언', '각서 제677호'], answer: 0 },
          ],
        },
      }),
    );
  }

  // ======== 6학년 · 광복 뒤 문서와 독도 바다 자원 (초 내용체계: 역사적 특성 · 정치·군사·경제적 가치) ========
  {
    const X = mk('g6-postwar', 6);
    // 평화선 칸 지도: 우리나라 둘레 바다 가운데 '평화선 안 바다'(줄인 그림 — 실제 선 모양과 다름)
    const PEACE = [[4, 3], [4, 4], [4, 5], [4, 6], [4, 7], [5, 3], [5, 4], [5, 5], [5, 6], [0, 5], [0, 6], [0, 7], [1, 8], [2, 8], [3, 8], [4, 8]];
    const KP = (places) => KOR(places, { regions: [{ name: '우리나라 땅', cells: KOR_LAND, color: 'mint' }, { name: '평화선 안 바다', cells: PEACE, color: 'sky' }], regionNames: true, title: '평화선 칸 지도(줄인 그림)' });
    M.push(
      X('intro.doc', {
        title: '옛 문서 그림 보고 질문 고르기', method: '문서 그림 보고 질문 고르기', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 질문 카드 2장을 읽어 주고 하나를 고르게 한다.', base: '질문 카드 3장 가운데 묻고 싶은 것을 고른다.', challenge: '카드에 없는 질문을 하나 만들어 짝에게 묻는다.' },
        intro: {
          teacher: '"광복 뒤에도 독도에 관한 문서가 있었을까요? 이 문서 그림을 보고 무엇을 묻고 싶나요?" 시연 단추로 질문 카드가 바구니에 담기는 모습을 보인다. "광복 뒤에는 독도 문서가 없어요"라는 말에는 "1946년 연합국과 1952년 우리 정부가 남긴 문서가 있어요. 오늘 읽어 봐요"라고 답한다.',
          student: '옛 문서 그림을 보고 가장 묻고 싶은 질문 카드를 골라 짝에게 말해 보아요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '묻고 싶은 질문', cards: ['누가 만든 문서일까?', '종이는 무슨 색일까?', '언제 만들었을까?', '독도를 뭐라고 했을까?'], shuffle: false }, sequence: [{ pick: ['누가 만든 문서일까?'] }, { pick: ['누가 만든 문서일까?', '언제 만들었을까?', '독도를 뭐라고 했을까?'] }] },
          art: art('a paper-cut typed document with a stamp beside a small map of islands, on a wooden desk', '광복 뒤의 문서', 'leaf', 'mint'),
        },
      }),
      X('intro.sea', {
        title: '독도 바다 자원 고르기', method: '바다 자원 그림 고르기', tool: 'sortboard', minutes: 6,
        levels: { easy: '교사가 카드 4장을 읽어 주며 \'독도 바다 자원\'과 \'아닌 것\'으로 함께 나눈다.', base: '카드 6장을 스스로 나눈다.', challenge: '나눈 뒤 \'아닌 것\' 카드가 왜 아닌지 까닭을 말한다.' },
        intro: {
          teacher: '"독도 둘레 바다에서는 무엇이 날까요?" 시연 단추로 오징어·독도새우·미역은 \'독도 바다 자원\'에, 바나나·소나무는 \'아닌 것\'에 담기는 모습을 보인다. 독도 바다는 난류와 한류가 만나 좋은 어장이 되고, 바다 밑에는 가스 하이드레이트 같은 자원이 있는 것으로 알려져 있다고 말해 준다. 숫자로 자원의 양을 묻는 학생에게는 "확인된 자료에 없는 숫자는 쓰지 않아요"라고 답한다.',
          student: '그림 카드를 \'독도 바다 자원\'과 \'아닌 것\'으로 나누어 보고, 왜 그렇게 나누었는지 말해 보아요.',
          demo: { tool: 'sortboard', options: { slots: ['독도 바다 자원', '아닌 것'], cards: ['오징어', '바나나', '독도새우', '소나무', '미역', '가스 하이드레이트'] }, sequence: [{ sort: { '독도 바다 자원': ['오징어', '독도새우', '미역', '가스 하이드레이트'], '아닌 것': ['바나나', '소나무'] } }] },
          art: art('paper-cut squid, shrimp and seaweed swimming in layered blue waves around a rocky island', '독도 바다에는 무엇이?', 'wave', 'sky'),
        },
      }),
      X('activity.line', {
        title: '1946·1952 시간 띠 잇기', method: '1946·1952 시간 띠 잇기', tool: 'timeline', minutes: 14,
        levels: { easy: '두 문서 카드(1946·1952)를 시간 띠에 놓는다.', base: '앞서 배운 두 기록에 두 문서를 이어 4장을 놓는다.', challenge: '6장(1696년부터 1952년까지)을 놓는다.' },
        activity: {
          title: '광복 앞뒤 기록 잇기', tool: 'timeline',
          teacher: '"1946년 연합국 최고사령관 각서 제677호는 독도를 일본의 통치·행정 범위에서 뺐어요. 1952년 우리 정부는 평화선을 선언해 독도를 그 안에 넣었어요." 광복을 기준으로 앞뒤를 나누게 한다. 평화선을 각서보다 앞에 두는 학생에게 "1946과 1952를 견주어 볼까요?"라고 묻는다. 각서는 연합국(제3자)의 문서, 평화선은 우리 정부의 선언이라는 점을 짚는다.',
          task: '광복 앞뒤의 기록과 문서 카드를 시간 띠에 차례대로 놓아요.', levels: { easy: { live: true }, base: {}, challenge: {} },
          items: [
            { prompt: '기록과 문서 카드를 옛날부터 차례대로 놓아요.', toolOptions: Object.assign({}, AX, { slots: 4, cards: [R6.y1946, R6.y1900, R6.y1952, R6.y1905] }), target: { order: [R6.y1900, R6.y1905, R6.y1946, R6.y1952] }, difficulty: 0.2,
              levels: {
                easy: { prompt: '두 문서 카드를 옛날부터 차례대로 놓아요(카드 2장).', toolOptions: { slots: 2, cards: [R6.y1952, R6.y1946] }, target: { order: [R6.y1946, R6.y1952] } },
                challenge: { prompt: '기록과 문서 카드를 옛날부터 차례대로 놓아요(카드 6장).', toolOptions: { slots: 6, cards: [R6.y1946, R6.y1877, R6.y1952, R6.y1696, R6.y1905, R6.y1900] }, target: { order: [R6.y1696, R6.y1877, R6.y1900, R6.y1905, R6.y1946, R6.y1952] } },
              } },
            SORT('카드를 광복 전과 광복 뒤로 나누어요.', { slots: ['광복 전', '광복 뒤'], groups: { '광복 전': [R6.y1900, R6.y1905], '광복 뒤': [R6.y1946, R6.y1952] }, easy: 1, extra: { '광복 전': [R6.y1877] }, mode: 'sort', axis: ['전', '후'] }, 0.2, { conclude: '광복 뒤 1946년 각서와 1952년 평화선도 독도에 관한 문서예요.' }),
            { prompt: '시간 띠를 보고 광복 뒤 두 문서를 만든 곳(연합국·우리 정부)을 짝에게 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 수를 써요.', text: '평화선은 ___년에 우리 정부가 선언했다.', answer: '1952' }] },
      }),
      X('activity.mean', {
        title: '두 문서가 보여 주는 것', method: '문서와 보여 주는 것 잇기', tool: 'emotion', minutes: 13,
        levels: { easy: '문서 칸 2개에 뜻 카드를 잇는다(보기 2장).', base: '문서 칸 2개에 뜻 카드를 잇는다(헷갈리는 보기 2장 더).', challenge: '뜻을 이은 뒤, 각서가 말하지 않는 것을 가려 알맞은 설명을 고른다.' },
        activity: {
          title: '각서 제677호와 평화선', tool: 'emotion',
          teacher: '"두 문서는 독도에 대해 무엇을 보여 줄까요?" 문서 칸을 읽고 뜻 카드를 잇게 한다. 각서를 \'독도를 우리에게 주었다\'로 잇는 학생에게 "각서는 일본의 통치 범위에서 독도를 뺐다는 문서예요. 문서가 말하는 만큼만 말해요"라고 짚는다.',
          task: '두 문서 칸에 알맞은 뜻 카드를 잇고, 문서에 대한 바른 설명을 골라요.', levels: { easy: { live: true }, base: {}, challenge: {} },
          items: [
            { prompt: '두 문서 칸에 그 문서가 보여 주는 뜻 카드를 이어요.', toolOptions: { mode: 'match', slots: [{ id: 'scap', label: '1946년 각서 제677호' }, { id: 'peace', label: '1952년 평화선 선언' }], cards: ['독도를 우리 바다 안에 넣음', '독도를 처음 발견함', '일본 통치 범위에서 뺌', '독도에 사람이 살게 함'] }, target: { match: { scap: '일본 통치 범위에서 뺌', peace: '독도를 우리 바다 안에 넣음' } }, difficulty: 0.2,
              levels: { easy: { prompt: '두 문서 칸에 그 문서가 보여 주는 뜻 카드를 이어요(보기 2장).', toolOptions: { cards: ['독도를 우리 바다 안에 넣음', '일본 통치 범위에서 뺌'] } } } },
            BR('각서 제677호에 대한 설명으로 알맞은 것을 골라요.', '1946년 연합국 최고사령관 각서 제677호를 읽었어요.', [['a', '독도를 일본의 통치·행정 범위에서 뺐다', '문서가 말한 만큼 바르게 읽었어요.'], ['b', '독도를 처음 지도에 그렸다', '문서에 없는 말이에요.', '각서는 통치 범위에 대한 문서예요.'], ['c', '평화선보다 늦게 나왔다', '연도를 거꾸로 읽었어요.', '1946년은 1952년보다 앞서요.']], 'a', 0.2, { conclude: '각서는 독도를 일본 통치 범위에서 뺐고, 평화선은 독도를 우리 바다 안에 넣었어요.' }),
            { prompt: '각서가 말하는 것과 말하지 않는 것을 하나씩 짝에게 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '1952년 평화선 선언이 독도에 대해 한 일은?', options: ['독도를 우리 바다 안에 넣었다', '독도를 처음 발견했다', '독도를 일본에 주었다'], answer: 0 }] },
      }),
      X('activity.catch', {
        title: '어획 자원 그래프 읽기', method: '어획 자원 그래프 읽기', tool: 'chart', minutes: 14,
        levels: { easy: '막대 끝에 값이 보이는 그래프에서 보기 2개 가운데 가장 많은 것을 고른다.', base: '값 없이 막대 4개를 읽고 가장 많은 것을 고른다.', challenge: '두 번째로 많은 것을 골라 견주어 말한다.' },
        activity: {
          title: '독도 바다 하루 어획(가상)', tool: 'chart',
          teacher: '"이 그래프는 어느 배가 하루 잡은 양을 예로 만든 가상 자료예요. 실제 통계가 아니라는 점을 꼭 기억해요." 막대 높이를 견주게 한다. 그래프 수를 독도 바다 전체 수로 말하는 학생에게 "이 그래프는 가상의 배 한 척 이야기예요. 실제 양은 확인된 자료로만 말해요"라고 짚는다. 자원은 지키며 써야 다시 자란다는 점을 덧붙인다.',
          task: '가상 어획 막대그래프를 읽고 질문에 답해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            CHR('가상 그래프에서 가장 많이 잡은 것을 골라요.', { title: '어느 배의 하루 어획(가상)', unit: '상자', data: [['오징어', 12], ['독도새우', 5], ['미역', 8], ['전복', 3]], question: '가장 많이 잡은 것은?', choices: ['오징어', '독도새우', '미역', '전복'], pick: 0, easyChoices: { c: ['오징어', '전복'], pick: 0 }, xLabel: '자원', yLabel: '상자 수' }, 0.15),
            CHR('가상 그래프에서 두 번째로 많이 잡은 것을 골라요.', { title: '어느 배의 하루 어획(가상)', unit: '상자', data: [['오징어', 12], ['독도새우', 5], ['미역', 8], ['전복', 3]], question: '두 번째로 많이 잡은 것은?', choices: ['오징어', '독도새우', '미역', '전복'], pick: 2, easyChoices: { c: ['미역', '전복'], pick: 0 }, xLabel: '자원', yLabel: '상자 수' }, 0.2, { conclude: '독도 바다는 여러 수산 자원이 나는 곳이에요. 그래프 수는 가상이에요.' }),
            { prompt: '자원을 지키며 쓰려면 무엇이 필요할지 모둠에서 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '독도 바다의 수산 자원을 두 가지 써요.' }] },
        notes: '근거에 어획량 수치가 없다. 그래프는 \'가상\'이라고 화면에 밝히고, 실제 어획량처럼 말하지 않는다. 전복은 근거 단원(g3)의 독도 바다 생물이다.',
      }),
      X('activity.map', {
        title: '평화선과 독도 지도', method: '평화선과 독도 지도 보기', tool: 'map', minutes: 13,
        levels: { easy: '핀을 놓으면 그 칸이 \'평화선 안 바다\'인지 읽기 글자가 보인다.', base: '읽기 글자 없이 독도와 둘레 바다 칸에 핀을 꽂는다.', challenge: '핀을 꽂은 뒤 평화선이 보여 주는 것을 설명하는 보기를 고른다.' },
        activity: {
          title: '평화선 안의 독도', tool: 'map',
          teacher: '"1952년 평화선은 우리 바다를 둘러 그은 선이에요. 독도는 그 안에 있었을까요?" 칸 지도는 줄인 그림이라 실제 선 모양과 다르다고 먼저 밝힌다. 평화선 밖 칸에 꽂는 학생에게 "하늘색 칸이 평화선 안 바다예요. 독도는 어느 칸에 있지요?"라고 묻는다.',
          task: '평화선 칸 지도에서 독도와 둘레 바다 칸에 핀을 꽂고, 평화선이 보여 주는 것을 골라요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            MI('평화선 칸 지도에서 독도에 핀을 꽂아요.', KP([P.dokdo, P.ulleung, P.busan]), { place: '독도' }, 0.15),
            MI('독도에서 서쪽으로 한 칸 간 바다 칸에 핀을 꽂아요.', KP([P.dokdo, P.ulleung]), { from: '독도', dir: '서', steps: 1 }, 0.2),
            MQ('지도를 보고 평화선이 보여 주는 것을 골라요.', KP([P.dokdo, P.ulleung]), '평화선이 보여 주는 것은?', ['독도가 우리 바다 안에 있다', '독도가 평화선 밖에 있다', '평화선은 땅에 그은 선이다'], 0, 0.25, { conclude: '1952년 평화선 안에 독도가 들어 있었어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'figure', wide: true, prompt: '지도에서 독도에 ○ 하고, 평화선 안에 있는지 써요.', tool: 'map', figures: [{ options: KORW([PW.dokdo, PW.ulleung, PW.seoul]), caption: '우리나라 칸 지도' }], answer: '독도 ○, 평화선 안' }] },
      }),
      X('wrap.present', {
        title: '모둠 1분 문서 발표', method: '모둠 1분 발표', tool: 'timer', minutes: 7,
        levels: { easy: '모둠이 맡은 문서를 한 문장으로 발표한다(교사가 말틀을 적어 준다).', base: '모둠이 세 문장(문서 이름·연도·보여 주는 것)으로 1분 발표한다.', challenge: '발표 뒤 다른 모둠의 질문 하나에 답한다.' },
        wrap: {
          teacher: '"모둠마다 각서 제677호나 평화선 가운데 하나를 맡아 1분 발표를 해 볼까요? 문서 이름, 연도, 보여 주는 것을 넣어요." 발표·바꾸기 시간을 타이머로 맞춘다. 발표에서 문서에 없는 말이 나오면 "문서가 그렇게 말했나요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '발표·바꾸기', labels: ['발표', '바꾸기'], plan: { work: 30, rest: 10, rounds: 2 }, showTotal: true }, prompt: '우리 반 약속: 모둠 발표 60초, 바꾸기 15초, 5모둠이에요. 타이머를 맞춰요.', target: { plan: { work: 60, rest: 15, rounds: 5 } }, difficulty: 0.15 },
            { type: 'choice', prompt: '문서 발표에 꼭 넣을 것으로 알맞은 것은?', options: ['문서 이름·연도·보여 주는 것', '문서 종이 색', '내 기분만'], answer: 0, difficulty: 0.1, explain: '문서 이름·연도·보여 주는 것이 발표의 뼈대예요.' },
            { type: 'short', prompt: '우리 모둠 발표의 첫 문장을 써요.' },
          ],
        },
        worksheet: {
          title: '문서 발표',
          items: [
            { type: 'short', prompt: '우리 모둠이 맡은 문서를 한 문장으로 소개해요.' },
            { type: 'check', prompt: '발표에 넣은 것에 표시해요.', options: ['문서 이름', '연도', '보여 주는 것'] },
          ],
        },
      }),
      X('wrap.write', {
        title: '자원의 가치 글쓰기', method: '자원의 가치 글', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '빈칸 글 틀을 보며 쓰고 기준 2개를 점검한다.', base: '세 문장으로 쓰고 기준 3개(자원 예·가치·지키며 쓰기)를 점검한다.', challenge: '세 문장 이상 쓰고 \'어장\'을 넣어 자료 근거가 드러나게 한 군데 고쳐 쓴다.' },
        wrap: {
          teacher: '"독도 바다 자원의 가치를 세 문장으로 써 볼까요? 자원의 예, 그 가치, 지키며 쓰는 방법을 넣어요." 출처 없는 숫자를 쓰려는 학생에게 "확인된 자료에 있는 숫자인가요?"라고 묻는다. 출구 2번에서 \'많으니 마구 써도 된다\'를 고른 학생에게 "다 잡으면 다시 자랄 수 있을까요?"라고 되묻는다.',
          exitTicket: [
            RUBX('독도 바다 자원의 가치를 세 문장으로 써요.', { topic: '독도 바다 자원의 가치를 쓰세요.', starter: '독도 바다에는 ___이 있다. 이 자원은 ___ 가치가 있다. 그래서 ___', crit: ['자원의 예를 썼다', '자원의 가치를 썼다', '지키며 쓰는 방법을 썼다'], must: ['어장'], chars: [30, 220], sents: [2, 3, 3], title: '자원의 가치' }),
            { type: 'choice', prompt: '독도 바다 자원을 대하는 바른 생각은?', options: ['많으니 마구 써도 된다', '지키며 오래 쓸 수 있게 한다', '아무도 쓰면 안 된다'], answer: 1, difficulty: 0.15, explain: '생태를 지키며 쓰면 자원이 다시 자라요.' },
          ],
        },
        worksheet: {
          title: '독도 바다 자원',
          items: [
            { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '독도 바다는 난류와 ___가 만나 좋은 어장이 된다.', answer: '한류' },
            { type: 'short', prompt: '독도 바다 자원을 지키며 쓰는 방법을 하나 써요.' },
          ],
        },
      }),
    );
  }

  // ======== 6학년 · 사실·의견·근거 없는 주장 가리기 (초 내용체계: 정치·군사·경제적 가치) ========
  {
    const X = mk('g6-fact', 6);
    M.push(
      X('intro.post', {
        title: '독도 글 믿을까 말까', method: '독도 글 보고 믿을지 고르기', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 글 카드 2장을 읽어 주고 믿을 만한 것을 고르게 한다.', base: '글 카드 3장 가운데 믿을 만한 것을 고른다.', challenge: '고른 뒤 믿을 만하다고 생각한 까닭(출처·숫자)을 말한다.' },
        intro: {
          teacher: '"인터넷에서 독도 글 세 개를 봤어요. 어느 글을 믿을 수 있을까요?" 시연 단추로 \'외교부 누리집: 울릉도에서 87.4km\' 카드가 바구니에 담기는 모습을 보인다. "많이 공유된 글은 사실이에요"라는 말에는 "많이 퍼졌다고 사실일까요? 출처를 보면 알 수 있어요"라고 되묻는다.',
          student: '독도 글 카드를 보고 믿을 만한 글을 골라 보고, 무엇을 보고 골랐는지 말해 보아요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '믿을 만한 글', cards: ['외교부: 울릉도서 87.4km', '공유 1만: 독도 자원 수백조', '누가 그러던데 독도가…'], shuffle: false }, sequence: [{ pick: ['외교부: 울릉도서 87.4km'] }] },
          art: art('a paper-cut phone screen with three message bubbles, one with an official seal, and a magnifying glass over them', '믿을까, 말까?', 'cloud', 'sky'),
        },
      }),
      X('intro.effort', {
        title: '지키는 노력 그림 나누기', method: '지키는 노력 그림 나누기', tool: 'sortboard', minutes: 6,
        levels: { easy: '교사와 함께 카드를 \'경비\'·\'생활\' 바구니 2칸에 나눈다.', base: '카드를 경비·등대·주민 생활·연구 바구니 4칸에 나눈다.', challenge: '나눈 뒤 바구니마다 그 일을 하는 사람(경비대원·등대원·주민·연구자)을 말한다.' },
        intro: {
          teacher: '"오늘 독도는 누가, 어떻게 지키고 있을까요?" 시연 단추로 경비·등대·주민 생활·연구 바구니에 카드가 담기는 모습을 보인다. 독도경비대의 경비, 등대 운영, 주민 생활, 생태 연구와 보호 같은 여러 노력이 함께 독도를 지킨다고 알려 준다. "지키는 건 경비대만 해요"라는 말에는 "등대를 켜고, 섬에서 살고, 새와 꽃을 연구하는 것도 지키는 일이에요"라고 넓혀 준다.',
          student: '독도를 지키는 노력 그림 카드를 바구니에 나누어 보고, 가장 해 보고 싶은 일을 말해 보아요.',
          demo: { tool: 'sortboard', options: { slots: ['경비', '등대', '주민 생활', '연구'], cards: ['바다를 살피는 경비대', '밤새 등대 불 켜기', '섬에 주소 두고 살기', '괭이갈매기 조사'] }, sequence: [{ sort: { 경비: ['바다를 살피는 경비대'], 등대: ['밤새 등대 불 켜기'], '주민 생활': ['섬에 주소 두고 살기'], 연구: ['괭이갈매기 조사'] } }] },
          art: art('a paper-cut island with a guard post, a lighthouse, a small house and a researcher with binoculars watching seagulls', '독도를 지키는 사람들', 'star', 'buttercup'),
        },
      }),
      X('activity.three', {
        title: '사실·의견·근거 없는 주장', method: '사실·의견·근거 없는 주장 나누기', tool: 'sortboard', minutes: 14,
        levels: { easy: '문장 카드 4장을 세 바구니에 나눈다.', base: '문장 카드 6장을 나눈다.', challenge: '문장 카드 8장을 나눈다(넣지 않을 카드 하나).' },
        activity: {
          title: '독도 문장 세 갈래 나누기', tool: 'sortboard',
          teacher: '"\'사실\'은 자료로 확인되는 말, \'의견\'은 생각이나 느낌, \'근거 없는 주장\'은 확인할 자료가 없는데 사실처럼 말하는 것이에요." 문장마다 "이 말을 확인할 자료가 있나요?"라고 묻는다. \'독도는 아름답다\'를 사실에 넣는 학생에게 "모두가 같은 답을 확인할 수 있는 말인가요, 내 느낌인가요?"라고 되묻는다. 많이 공유된 글도 자료로 확인해야 한다고 짚는다.',
          task: '독도에 관한 문장 카드를 사실·의견·근거 없는 주장 바구니에 나누어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            SB('독도 문장 카드를 세 바구니에 나누어요.', { slots: ['사실', '의견', '근거 없는 주장'], groups: { 사실: ['울릉도에서 87.4km 떨어져 있다', '1900년 칙령 제41호가 있다'], 의견: ['독도는 정말 아름답다', '꼭 가 보고 싶은 섬이다'], '근거 없는 주장': ['독도 자원은 수백조 원이다', '독도에는 아무도 안 간다'] }, easy: 4, extra: { 사실: ['독도에는 등대가 있다'], 의견: ['괭이갈매기가 귀엽다'] }, traps: ['오늘 날씨가 덥다'] }, 0.25),
            SB('뉴스 속 문장을 사실과 의견으로 나누어요.', { slots: ['사실', '의견'], groups: { 사실: ['독도경비대가 섬을 지킨다', '각서 제677호는 1946년 문서'], 의견: ['독도 공부가 가장 재미있다', '독도 노래가 감동적이다'] } }, 0.2, { conclude: '사실은 자료로 확인되는 말이에요. 근거 없는 주장은 출처를 찾아 확인해요.' }),
            { prompt: '근거 없는 주장 카드 하나를 골라, 어디서 확인하면 좋을지 짝에게 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '문장이 사실이면 ○, 의견이면 △, 근거 없는 주장이면 ×를 써요.', columns: ['문장', '○ / △ / ×'], cells: [['독도는 울릉도에서 87.4km 떨어져 있다', ''], ['독도는 정말 아름답다', ''], ['독도 자원은 수백조 원이다', '']], answer: '○, △, ×' }] },
      }),
      X('activity.check', {
        title: '출처 확인 차례 놓기', method: '출처 확인 차례 놓기', tool: 'story', minutes: 13,
        levels: { easy: '확인 차례 카드 2장(글 읽기·출처 찾기)을 놓는다.', base: '확인 차례 카드 3장(+ 공식 자료와 견주기)을 놓는다.', challenge: '카드 3장을 놓고, 견준 결과에 따른 판단을 고른다.' },
        activity: {
          title: '독도 글 확인하는 차례', tool: 'story',
          teacher: '"독도 글을 봤을 때 무엇부터 할까요?" 차례 카드를 놓을 때마다 "그다음에는?"이라고 묻는다. 바로 공유하기를 첫 차례로 두려는 학생에게 "확인하기 전에 퍼뜨리면 어떻게 될까요?"라고 되묻는다. 공식 자료로는 외교부 독도 누리집, 동북아역사재단 자료를 예로 든다.',
          task: '독도 글을 확인하는 차례 카드를 놓고, 견준 결과에 따라 알맞은 판단을 골라요.', levels: { easy: { live: true }, base: {}, challenge: {} },
          items: [
            ORDER('독도 글을 확인하는 차례 카드를 놓아요.', ['글을 끝까지 읽기', '글의 출처 찾기', '공식 자료와 견주기'], { easy: [0, 1], trap: '먼저 친구에게 공유하기' }, 0.15),
            PICK('공식 자료와 견주었더니 다른 숫자였어요. 알맞은 판단 카드를 골라요.', '알맞은 판단', ['공유하지 않고 바로잡는다'], ['그래도 공유한다', '모르는 척한다'], { easy: 1, easyTraps: 1, extraTraps: ['숫자를 내 맘대로 고친다'] }, 0.2, { conclude: '글을 읽고, 출처를 찾고, 공식 자료와 견준 뒤에 판단해요.' }),
            { prompt: '내가 독도 글을 확인할 때 쓸 공식 자료 한 곳을 짝에게 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '독도 글을 확인하는 차례 세 가지를 순서대로 써요.' }] },
      }),
      X('activity.dilemma', {
        title: '친구가 보낸 독도 글', method: '친구가 보낸 독도 글, 어떻게 할까', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번에서 고르고 근거 한 장을 고른다.', base: '갈림 2번을 지나 근거를 고른다.', challenge: '갈림 3번을 지나 알맞은 근거 2장을 고르고, 다른 길의 결과와 견준다.' },
        activity: {
          title: '갈림길: 친구가 보낸 독도 글', tool: 'dilemma',
          teacher: '"가상의 친구 \'서\'가 \'독도 자원 수백조 원! 모두 공유!\'라는 글을 보냈어요. 어떻게 할까요?" 고를 때마다 결과를 읽게 한다. 바로 공유하는 길을 고른 학생에게 "확인하지 않은 숫자가 퍼지면 누가 어떤 영향을 받을까요?"라고 묻는다. 친구를 탓하지 않고 함께 확인하자고 말하는 방법을 짚는다.',
          task: '친구가 보낸 글을 두고 갈림길마다 고르고, 결과를 읽은 뒤 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '친구가 보낸 독도 글',
            steps: [
              { text: '(가상) 서가 "독도 자원 수백조 원! 모두 공유!"라는 글을 보냈어요. 출처는 없어요.', motif: 'cloud',
                good: ['check', '공유하기 전에 출처부터 찾아본다', '글에 출처가 없다는 것을 알게 돼요.', [['반 친구들', '틀린 정보를 받지 않아요', 1]]],
                bad: ['share', '바로 반 단톡방에 공유한다', '확인 안 된 숫자가 빠르게 퍼져요.', '확인하기 전에 퍼뜨리면 틀린 정보가 퍼져요.', [['반 친구들', '틀린 정보를 믿어요', -1]]] },
              { text: '외교부 독도 누리집에는 그런 숫자가 없었어요.', motif: 'star',
                good: ['tell', '서에게 "함께 확인해 보자"고 말한다', '서가 고맙다며 글을 지워요.', [['서', '기분 상하지 않고 바로잡아요', 1]]],
                bad: ['blame', '"넌 맨날 가짜만 보내"라고 탓한다', '서가 서운해하고 대화가 끊겨요.', '친구를 탓하기보다 함께 확인하자고 말해요.', [['서', '마음이 상해요', -1]]] },
              { text: '다른 친구들도 그 글을 봤을지 몰라요.', motif: 'house',
                good: ['fix', '확인한 출처를 붙여 바로잡는 글을 쓴다', '친구들이 바른 정보를 알게 돼요.', [['반 친구들', '바른 정보를 알아요', 1]]],
                bad: ['quiet', '내 일이 아니라며 그냥 둔다', '틀린 숫자가 그대로 남아요.', '바로잡는 글이 있어야 틀린 정보가 멈춰요.', [['반 친구들', '계속 잘못 알아요', -1]]] },
            ],
            ending: '확인하고, 함께 바로잡으니 틀린 정보가 멈췄어요.',
            reasons: [{ id: 'source', text: '출처가 분명해야 믿을 수 있다' }, { id: 'kind', text: '친구를 탓하지 않고 함께 확인한다' }, { id: 'many', text: '많이 공유되면 사실이다', why: '많이 퍼져도 출처가 없으면 확인해야 해요.' }, { id: 'fast', text: '빨리 퍼뜨리는 것이 독도를 지키는 일이다', why: '틀린 정보를 퍼뜨리면 오히려 믿음을 잃어요.' }],
            good: ['source', 'kind'],
            talk: '모둠에서 "출처 없는 독도 글을 받으면 어떻게 할지" 우리 반 약속을 이야기해요.',
            conclude: '출처 없는 글은 공유하기 전에 공식 자료로 확인하고, 함께 바로잡아요.',
          }),
        },
        worksheet: { items: [{ type: 'short', prompt: '출처 없는 독도 글을 받았을 때 친구에게 할 말을 한 문장으로 써요.' }] },
        notes: '\'서\'는 지어낸 가상 인물이다. 실제 앱·서비스 이름을 쓰지 않는다.',
      }),
      X('activity.map', {
        title: '독도를 지키는 곳 찾기', method: '노력하는 곳 지도에 표시', tool: 'map', minutes: 13,
        levels: { easy: '장소 이름이 보이고 핀을 놓으면 칸 이름이 읽힌다(장소 2곳).', base: '장소 3곳이 있는 지도에서 핀을 꽂는다.', challenge: '장소 4곳이 있는 지도에서 핀을 꽂는다.' },
        activity: {
          title: '독도 확대 지도의 지킴 자리', tool: 'map',
          teacher: '"독도 확대 지도에서 독도를 지키는 곳을 찾아볼까요?" 범례에서 기호를 먼저 찾고 지도에서 같은 기호를 찾게 한다. 서도에 등대를 꽂는 학생에게 "해 뜨는 쪽 섬은 어느 섬이었지요?"라고 묻는다. 등대는 밤새 불을 켜 배의 길을 알려 준다고 덧붙인다.',
          task: '독도 확대 지도에서 독도를 지키는 일을 하는 곳에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            { prompt: '바다를 살피며 독도를 지키는 곳에 핀을 꽂아요.', toolOptions: DK([DP.guard, DP.light, DP.house]), target: { place: '독도경비대' }, difficulty: 0.15,
              levels: { easy: { prompt: '바다를 살피며 독도를 지키는 곳에 핀을 꽂아요(장소 2곳).', toolOptions: { places: [DP.guard, DP.house] } }, challenge: { prompt: '바다를 살피며 독도를 지키는 곳에 핀을 꽂아요(장소 4곳).', toolOptions: { places: [DP.guard, DP.light, DP.house, DP.port] } } } },
            { prompt: '밤새 불을 켜 배의 길을 알려 주는 곳에 핀을 꽂아요.', toolOptions: DK([DP.light, DP.guard, DP.port]), target: { place: '독도 등대' }, difficulty: 0.15,
              levels: { easy: { prompt: '밤새 불을 켜 배의 길을 알려 주는 곳에 핀을 꽂아요(장소 2곳).', toolOptions: { places: [DP.light, DP.port] } }, challenge: { prompt: '밤새 불을 켜 배의 길을 알려 주는 곳에 핀을 꽂아요(장소 4곳).', toolOptions: { places: [DP.light, DP.guard, DP.port, DP.house] } } } },
            { prompt: '독도에 주소를 두고 지내는 주민이 머무는 곳에 핀을 꽂아요.', toolOptions: DK([DP.house, DP.light, DP.port]), target: { place: '주민 숙소' }, difficulty: 0.2, conclude: '경비대·등대·주민의 생활이 함께 독도를 지켜요.',
              levels: { easy: { prompt: '독도에 주소를 두고 지내는 주민이 머무는 곳에 핀을 꽂아요(장소 2곳).', toolOptions: { places: [DP.house, DP.guard] } }, challenge: { prompt: '독도에 주소를 두고 지내는 주민이 머무는 곳에 핀을 꽂아요(장소 4곳).', toolOptions: { places: [DP.house, DP.light, DP.port, DP.guard] } } } },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '독도를 지키는 곳과 하는 일을 이어 써요.', columns: ['곳', '하는 일'], cells: [['독도경비대', ''], ['독도 등대', ''], ['주민 숙소', '']], answer: '바다를 살피며 지킴 / 밤새 불을 켜 배를 도움 / 주민이 지냄' }] },
      }),
      X('wrap.pair', {
        title: '짝과 문장 판정 겨루기', method: '짝과 문장 판정 겨루기', tool: 'timer', minutes: 7,
        levels: { easy: '짝이 낸 문장 2개를 판정하고 점검 칸 2개를 표시한다.', base: '문장 4개를 판정하고 점검 칸 3개를 표시한다.', challenge: '문장 4개를 판정하고 판정마다 근거를 말한 뒤 점검 칸 4개를 표시한다.' },
        wrap: {
          teacher: '"짝에게 독도 문장을 하나씩 내고, 사실·의견·근거 없는 주장 가운데 무엇인지 판정해 볼까요? 한 판 30초예요." 판정 뒤 \'왜냐하면\'으로 근거를 말하게 한다. 판정이 다르면 다툼 대신 "어떤 자료로 확인할까?"를 함께 찾게 한다.',
          exitTicket: [
            SELF('문장 판정 겨루기', ['짝에게 문장을 냈다', '짝의 문장을 판정했다', '판정의 근거를 말했다', '판정이 다를 때 자료로 확인했다'], '짝과 판정 겨루기를 하고 스스로 표시해요.'),
            { type: 'choice', prompt: '"독도는 정말 아름답다"는 무엇인가요?', options: ['사실', '의견', '근거 없는 주장'], answer: 1, difficulty: 0.15, explain: '느낌을 말한 문장이라 의견이에요.' },
            { type: 'short', prompt: '짝에게 낸 독도 문장과 그 판정을 써요.' },
          ],
        },
        worksheet: {
          title: '문장 판정 겨루기',
          items: [
            { type: 'short', prompt: '내가 짝에게 낸 사실 문장 하나를 써요.' },
            { type: 'short', prompt: '판정이 어려웠던 문장과 그 까닭을 써요.' },
          ],
        },
      }),
      X('wrap.sum', {
        title: '가리는 방법 생각그물', method: '가리는 방법 생각그물', tool: 'mindmap', minutes: 7,
        levels: { easy: '가지 2개(출처·날짜)에 카드를 붙인다.', base: '가지 3개(출처·날짜·공식 기관)에 카드를 붙인다.', challenge: '가지 4개(+ 함께 확인)에 카드를 붙인다.' },
        wrap: {
          teacher: '"오늘 배운 \'확인 방법\'을 생각그물로 정리해 볼까요?" 가지마다 카드를 붙이게 한다. \'많이 공유됨\' 카드를 확인 방법에 붙이는 학생에게 "많이 퍼진 것이 확인이 될까요?"라고 되묻는다.',
          exitTicket: [
            (() => {
              const G = { 출처: ['누가 쓴 글인지 본다'], 날짜: ['언제 쓴 글인지 본다'], '공식 기관': ['외교부 누리집과 견준다'], '함께 확인': ['친구와 자료를 같이 본다'] };
              const lv = (names) => ({ slots: names, cards: [...names.map((n) => G[n][0]), '많이 공유됐는지 본다'], sort: Object.fromEntries(names.map((n) => [n, G[n]])) });
              const e = lv(['출처', '날짜']); const b = lv(['출처', '날짜', '공식 기관']); const c = lv(['출처', '날짜', '공식 기관', '함께 확인']);
              return { type: 'tool', tool: 'mindmap', options: { topic: '확인 방법', slots: b.slots, cards: b.cards }, prompt: '확인 방법 가지에 알맞은 카드를 붙여요(넣지 않을 카드도 있어요).', target: { sort: b.sort }, difficulty: 0.15,
                levels: { easy: { prompt: '확인 방법 가지에 알맞은 카드를 붙여요(가지 2개).', toolOptions: { slots: e.slots, cards: e.cards }, target: { sort: e.sort } }, challenge: { prompt: '확인 방법 가지에 알맞은 카드를 붙여요(가지 4개).', toolOptions: { slots: c.slots, cards: c.cards }, target: { sort: c.sort } } } };
            })(),
            { type: 'choice', prompt: '"많이 공유된 글은 사실이다"에 알맞은 생각은?', options: ['맞다', '많이 퍼져도 출처를 확인해야 한다', '공유 수가 많을수록 사실이다'], answer: 1, difficulty: 0.15, explain: '공유 수는 사실의 근거가 아니에요.' },
            { type: 'short', prompt: '독도 글을 확인할 때 내가 꼭 볼 것 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '확인 방법',
          items: [
            { type: 'check', prompt: '독도 글을 확인하는 방법에 표시해요.', options: ['출처 보기', '날짜 보기', '공식 기관 자료와 견주기', '공유 수 보기'] },
            { type: 'short', prompt: '독도 글을 확인할 공식 기관 한 곳을 써요.' },
          ],
        },
      }),
    );
  }

  // ======== 6학년 · 근거로 정중하게, 독도 알림 글 (초 내용체계: 독도의 중요성 · research-days: 혐오 표현 배제) ========
  {
    const X = mk('g6-respond', 6);
    M.push(
      X('intro.msg', {
        title: '두 답글, 읽는 사람 마음', method: '두 답글 중 더 좋은 답글 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 답글 2개를 읽어 주고 마음 카드를 함께 짝 짓는다.', base: '답글 3개에 읽는 사람 마음 카드를 짝 짓는다.', challenge: '짝 지은 뒤 어느 답글이 상대의 생각을 바꿀 수 있을지 까닭을 말한다.' },
        intro: {
          teacher: '"독도에 대해 잘못 쓴 글에 두 사람이 답글을 달았어요. 읽는 사람은 어떤 마음일까요?" 시연 단추로 거친 답글에는 \'화남\', 정중한 답글에는 \'고마움\' 카드가 붙는 모습을 보인다. "틀린 말에는 세게 맞서야 해요"라는 말에는 "화가 난 사람이 내 근거를 귀 기울여 들을까요?"라고 되묻는다.',
          student: '두 답글을 읽고 글쓴이가 느낄 마음을 짝 지은 뒤, 어느 답글이 더 좋은지 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'r1', label: '"말도 안 돼! 모르면 가만있어!"' }, { id: 'r2', label: '"1900년 칙령 자료를 함께 볼래요?"' }, { id: 'r3', label: '"출처를 알려 주면 같이 확인할게요"' }], cards: ['화남', '고마움', '편안함', '신남'], shuffle: false }, sequence: [{ match: { r1: '화남', r2: '고마움' } }, { match: { r1: '화남', r2: '고마움', r3: '편안함' } }] },
          art: art('two paper-cut speech bubbles, one jagged red and one soft round mint, facing a puzzled paper child', '어떤 답글이 좋을까?', 'cloud', 'sky'),
        },
      }),
      X('intro.recall', {
        title: '초등 독도 공부 떠올리기', method: '초등 독도 공부 떠올리기', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 공부 카드를 읽어 주고 기억나는 것 2장을 고르게 한다.', base: '기억나는 공부 카드 3장을 고른다.', challenge: '기억나는 공부 카드 4장을 고르고 하나를 짝에게 설명한다.' },
        intro: {
          teacher: '"초등학교에서 독도를 공부하며 무엇을 배웠나요? 기억나는 카드를 골라 볼까요?" 시연 단추로 \'칙령 제41호\'·\'영토·영해·영공\'·\'사실과 의견\' 카드가 담기는 모습을 보인다. 기억이 잘 안 나는 학생에게 "시간 띠에 놓았던 기록을 떠올려 볼까요?"라고 돕는다. 오늘은 배운 것을 근거로 알림 글을 쓴다고 밝힌다.',
          student: '초등학교 독도 공부 카드 가운데 기억나는 것을 골라 보고, 하나를 짝에게 설명해 보아요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '기억나는 공부', cards: ['울릉도에서 87.4km', '1900년 칙령 제41호', '영토·영해·영공', '사실과 의견 가리기', '괭이갈매기와 해국'], shuffle: false }, sequence: [{ pick: ['1900년 칙령 제41호', '영토·영해·영공'] }, { pick: ['1900년 칙령 제41호', '영토·영해·영공', '사실과 의견 가리기'] }] },
          art: art('a paper-cut scrapbook opened with small cards of an island, a scroll, a map and a seagull pinned on its pages', '초등 독도 공부 돌아보기', 'star', 'buttercup'),
        },
      }),
      X('activity.reply', {
        title: '정중한 답글 고르기', method: '정중한 답글 고르고 결과 보기', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번에서 고르고 근거 한 장을 고른다.', base: '갈림 2번을 지나 근거를 고른다.', challenge: '갈림 3번을 지나 알맞은 근거 2장을 고르고, 다른 길의 결과와 견준다.' },
        activity: {
          title: '갈림길: 잘못된 독도 글에 답하기', tool: 'dilemma',
          teacher: '"누리집 게시판에 \'독도는 그냥 바위라 아무 가치가 없다\'는 글이 올라왔어요(가상). 어떻게 답할까요?" 고를 때마다 결과를 읽게 한다. 거친 말을 고르는 학생에게 "읽는 사람이 화가 나면 내 근거가 전해질까요?"라고 묻는다. 글쓴이나 그 나라 사람을 탓하는 말은 근거가 아니라고 짚는다.',
          task: '잘못된 글에 답하는 갈림길마다 고르고, 결과를 읽은 뒤 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '잘못된 독도 글에 답하기',
            steps: [
              { text: '(가상) 게시판에 "독도는 그냥 바위라 아무 가치가 없다"는 글이 올라왔어요.', motif: 'cloud',
                good: ['polite', '"독도에는 괭이갈매기 번식지가 있어요"라고 근거로 답한다', '글쓴이가 "그런 줄 몰랐어요"라고 답해요.', [['글쓴이', '새로운 사실을 알아요', 1]]],
                bad: ['rough', '"말도 안 돼! 모르면 가만있어!"라고 쓴다', '글쓴이가 화가 나 말다툼이 시작돼요.', '거친 말은 근거를 가리고 다툼만 키워요.', [['글쓴이', '마음이 상해요', -1]]] },
              { text: '글쓴이가 "그 말의 출처가 어디예요?"라고 물어요.', motif: 'star',
                good: ['source', '외교부 독도 누리집 같은 공식 출처를 알려 준다', '글쓴이가 직접 확인해 보겠다고 해요.', [['글쓴이', '스스로 확인해요', 1]]],
                bad: ['noref', '"그냥 다 아는 거예요"라고만 한다', '글쓴이가 믿을 수 없다고 해요.', '출처를 밝혀야 근거가 힘을 가져요.', [['나', '믿음을 잃어요', -1]]] },
              { text: '다른 사람이 글쓴이를 놀리는 댓글을 달았어요.', motif: 'house',
                good: ['calm', '"놀리지 말고 자료로 이야기해요"라고 쓴다', '게시판 분위기가 차분해져요.', [['게시판', '존중하는 대화가 돼요', 1]]],
                bad: ['join', '함께 놀리는 댓글을 단다', '놀림이 커지고 독도 이야기는 사라져요.', '놀림에 끼면 대화가 아니라 다툼이 돼요.', [['글쓴이', '상처를 받아요', -1]]] },
            ],
            ending: '근거와 출처로 정중하게 답하니 대화가 이어졌어요.',
            reasons: [{ id: 'evidence', text: '근거와 출처가 상대를 설득한다' }, { id: 'respect', text: '정중한 말이 대화를 이어 준다' }, { id: 'win', text: '세게 말해야 이긴다', why: '세게 말하면 다툼만 커져요.' }, { id: 'blame', text: '상대를 깎아내려도 된다', why: '사람을 깎아내리는 말은 근거가 아니에요.' }],
            good: ['evidence', 'respect'],
            talk: '모둠에서 "정중하게 답하는 말 세 가지"를 정해 이야기해요.',
            conclude: '잘못된 정보에는 근거와 출처를 들어 정중하게 답해요.',
          }),
        },
        worksheet: { items: [{ type: 'short', prompt: '잘못된 독도 글에 쓸 정중한 답글을 한 문장으로 써요.' }] },
        notes: '게시판 글은 지어낸 가상 장면이다. 실제 누리집·서비스 이름이나 실제 글을 옮기지 않는다.',
      }),
      X('activity.words', {
        title: '정중한 말·거친 말 나누기', method: '정중한 말·거친 말 나누기', tool: 'sortboard', minutes: 13,
        levels: { easy: '답글 카드 4장을 두 바구니에 나눈다.', base: '답글 카드 6장을 나눈다.', challenge: '카드 8장을 나눈 뒤, 거친 말 하나를 정중한 말로 고쳐 짝에게 말한다.' },
        activity: {
          title: '답글 말투 나누기', tool: 'sortboard',
          teacher: '"답글 카드를 정중한 말과 거친 말로 나누어 볼까요?" 카드를 넣을 때마다 "읽는 사람은 어떤 마음일까요?"라고 묻는다. \'너는 아무것도 몰라\'를 정중한 말에 넣는 학생에게 "이 말을 들으면 자료를 보고 싶어질까요?"라고 되묻는다. 거친 말은 사람을 깎아내리고, 정중한 말은 자료로 초대한다고 정리한다.',
          task: '독도 답글 카드를 정중한 말과 거친 말 바구니에 나누어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            SB('독도 답글 카드를 두 바구니에 나누어요.', { slots: ['정중한 말', '거친 말'], groups: { '정중한 말': ['자료를 함께 볼래요?', '출처를 알려 드릴게요', '이런 기록도 있어요'], '거친 말': ['말도 안 되는 소리 마!', '모르면 가만있어!', '너는 아무것도 몰라'] }, easy: 4, extra: { '정중한 말': ['다른 생각도 들어 볼게요'], '거친 말': ['그런 글 쓰지 마!'] } }, 0.2),
            SB('거친 말 "모르면 가만있어!"를 고쳐 쓴 카드를 나누어요.', { slots: ['잘 고쳐 쓴 말', '아직 거친 말'], groups: { '잘 고쳐 쓴 말': ['이 자료를 함께 볼래요?', '이런 기록도 있어요, 같이 봐요'], '아직 거친 말': ['더 크게 말할게!', '너랑 말 안 해'] }, easy: 2 }, 0.2, { conclude: '거친 말 대신 자료로 초대하는 정중한 말을 써요.' }),
            { prompt: '거친 말 카드 하나를 골라 정중한 말로 고쳐 짝에게 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"모르면 가만있어!"를 정중한 말로 고쳐 써요.' }] },
      }),
      X('activity.notice', {
        title: '출처 밝힌 알림 글 쓰기', method: '출처 밝힌 알림 글 쓰기', tool: 'rubric-writing', minutes: 14,
        levels: { easy: '빈칸 글 틀을 보며 사료 하나를 넣어 쓰고 기준 2개를 점검한다.', base: '사료 하나와 공식 자료 하나를 넣어 네 문장으로 쓰고 기준 3개(근거·출처·정중함)를 점검한다.', challenge: '외국 친구에게 보내는 알림 글로 쉬운 말을 골라 네 문장 이상 쓰고, \'칙령\'을 넣어 한 군데 고쳐 쓴다.' },
        activity: {
          title: '독도 알림 글 쓰기', tool: 'rubric-writing',
          teacher: '"독도를 알리는 글을 네 문장으로 써 볼까요? 사료 하나(예: 1900년 칙령 제41호), 공식 자료 하나(예: 외교부 독도 누리집)를 꼭 넣어요." 기준표를 함께 읽는다. 감정적인 말을 쓰려는 학생에게 "읽는 사람이 외국 친구라면 어떤 말이 잘 전해질까요?"라고 묻는다. 다른 나라 사람을 탓하는 문장은 넣지 않게 한다.',
          task: '사료 하나와 공식 자료 하나를 넣어 독도 알림 글을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RUB('사료와 공식 자료를 넣어 독도 알림 글을 네 문장으로 써요.', { topic: '독도를 알리는 글을 쓰세요(사료 하나 + 공식 자료 하나).', starter: '독도는 ___. ___년 ___에 따르면 ___. (출처: ___)', crit: ['사료를 근거로 넣었다', '출처(공식 자료)를 밝혔다', '정중한 말로 썼다'], must: ['칙령'], chars: [40, 300], sents: [3, 4, 4], title: '독도 알림 글' }, 0.25),
            { prompt: '알림 글의 첫 문장을 쓰고 기준을 점검해요.', toolOptions: { topic: '알림 글의 첫 문장(독도를 소개하는 문장)을 쓰세요.', minChars: 10, maxChars: 100, title: '첫 문장' }, target: { selfCheck: ['독도가 어디 있는지 썼다', '한 문장으로 썼다'], chars: [10, 100] }, difficulty: 0.15 },
            { prompt: '짝과 알림 글을 바꿔 읽고, 출처가 잘 보이는지 말해 줘요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '알림 글에 넣은 사료와 공식 자료를 하나씩 써요.' }] },
      }),
      X('activity.poster', {
        title: '독도 알림 포스터 꾸미기', method: '알림 포스터 꾸미기', tool: 'collage', minutes: 13,
        levels: { easy: '조각 3개 이상으로 꾸미고 점검 칸 2개를 표시한다.', base: '조각 5개 이상으로 섬·바다·생물을 꾸미고 점검 칸 3개를 표시한다.', challenge: '조각 5개 이상으로 꾸미고 출처 칸 자리를 남겨 활동지에 출처를 쓴 뒤 점검 칸 4개를 표시한다.' },
        activity: {
          title: '알림 포스터 그림판', tool: 'collage',
          teacher: '"알림 글을 붙일 포스터 그림판을 만들어 볼까요? 섬은 세모와 반원, 바다는 파란 네모, 괭이갈매기는 하양 조각으로 만들어요." 칠판에 예를 보인다. 무섭거나 화난 그림으로 꾸미려는 학생에게 "보는 사람이 독도를 알고 싶어지게 하는 그림이 더 힘이 있어요"라고 말한다. 글과 출처는 콜라주에 붙이지 못하니 활동지에 써서 붙인다.',
          task: '색 조각으로 독도 알림 포스터 그림을 꾸미고 스스로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            COL('색 조각으로 독도 알림 포스터 그림을 꾸미고 점검해요.', ['섬(동도·서도)을 만들었다', '바다를 넣었다', '독도의 생물을 넣었다', '출처 칸 자리를 남겼다']),
            COL('포스터에 등대나 경비대 같은 지킴의 모습을 넣어 다시 꾸미고 점검해요.', ['지키는 모습을 넣었다', '밝고 차분한 색을 썼다', '알림 글 붙일 자리를 남겼다', '짝에게 포스터를 소개했다'], {}, 0.15),
            { prompt: '포스터를 보여 주며 알림 글의 핵심 한 문장을 짝에게 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '포스터에 붙일 출처를 써요.' }] },
        notes: '콜라주는 글자를 붙이지 못한다. 알림 글·출처는 활동지에 써서 포스터 옆에 붙인다.',
      }),
      X('wrap.gallery', {
        title: '알림 글 돌아보기와 다짐', method: '알림 글 돌아보기와 다짐 발표', tool: 'timer', minutes: 7,
        levels: { easy: '알림 글 1개를 읽고 점검 칸 1개를 표시한 뒤 다짐을 말한다.', base: '알림 글 3개를 읽고 점검 칸 3개를 표시한다.', challenge: '알림 글 3개를 읽고 칭찬 쪽지를 남긴 뒤 점검 칸 4개를 표시한다.' },
        wrap: {
          teacher: '"교실 둘레에 붙인 알림 글을 돌아보며 읽어 볼까요? 다 읽으면 한 사람씩 \'나는 독도를 위해 ___하겠다\' 다짐을 말해요." 돌아보는 시간과 다짐 시간을 타이머로 보인다. 친구 글의 흠만 말하는 학생에게 "좋은 근거 하나를 먼저 찾아 칭찬해 볼까요?"라고 돌린다.',
          exitTicket: [
            SELF('돌아보기와 다짐', ['친구 알림 글을 읽었다', '출처가 있는지 살폈다', '다짐을 말했다', '칭찬 쪽지를 남겼다'], '돌아보기와 다짐을 하고 스스로 표시해요.', { easy: 1, base: 3 }),
            { type: 'choice', prompt: '독도를 위한 다짐으로 알맞은 것은?', options: ['출처 없는 글도 마구 퍼뜨린다', '바르게 알고 근거로 정중하게 알린다', '거친 말로 맞선다'], answer: 1, difficulty: 0.1, explain: '바르게 알고 근거로 알리는 것이 독도를 지키는 일이에요.' },
            { type: 'short', prompt: '"나는 독도를 위해 ___하겠다" 다짐을 써요.' },
          ],
        },
        worksheet: {
          title: '돌아보기와 다짐',
          items: [
            { type: 'short', prompt: '친구 알림 글에서 좋았던 근거 하나를 써요.' },
            { type: 'short', prompt: '"나는 독도를 위해 ___하겠다" 다짐을 써요.' },
          ],
        },
      }),
      X('wrap.sum', {
        title: '근거·가치·실천 생각그물', method: '근거·가치·실천 생각그물', tool: 'mindmap', minutes: 7,
        levels: { easy: '가지 2개(근거·가치)에 카드를 붙인다.', base: '가지 3개(근거·가치·실천)에 카드를 붙인다.', challenge: '가지 3개에 카드를 2장씩 붙인다.' },
        wrap: {
          teacher: '"초등 독도 공부를 근거·가치·실천 세 가지로 정리해 볼까요?" 가지마다 카드를 붙이게 한다. \'거친 말로 맞서기\' 카드를 실천에 붙이려는 학생에게 "그것이 독도를 지키는 실천일까요?"라고 되묻는다. 6년 동안 배운 것을 하나로 묶어 정리한다.',
          exitTicket: [
            (() => {
              const G = { 근거: ['1900년 칙령 제41호', '1877년 태정관 지령'], 가치: ['영토·영해·영공', '괭이갈매기 번식지'], 실천: ['출처 밝혀 알리기', '정중하게 바로잡기'] };
              const one = (names) => Object.fromEntries(names.map((n) => [n, G[n].slice(0, 1)]));
              const e = one(['근거', '가치']); const b = one(['근거', '가치', '실천']);
              return { type: 'tool', tool: 'mindmap', options: { topic: '초등 독도 공부', slots: ['근거', '가치', '실천'], cards: inter(['근거', '가치', '실천'], b) }, prompt: '초등 독도 공부 카드를 근거·가치·실천 가지에 붙여요.', target: { sort: b }, difficulty: 0.15,
                levels: { easy: { prompt: '초등 독도 공부 카드를 근거·가치 가지에 붙여요(가지 2개).', toolOptions: { slots: ['근거', '가치'], cards: inter(['근거', '가치'], e) }, target: { sort: e } },
                  challenge: { prompt: '초등 독도 공부 카드를 가지마다 2장씩 붙여요(넣지 않을 카드도 있어요).', toolOptions: { cards: [...inter(['근거', '가치', '실천'], G), '거친 말로 맞서기'] }, target: { sort: G } } } };
            })(),
            { type: 'choice', prompt: '독도를 지키는 실천으로 알맞은 것은?', options: ['출처를 밝혀 바르게 알린다', '확인 안 된 글을 퍼뜨린다', '거친 말로 맞선다'], answer: 0, difficulty: 0.1, explain: '바르게 알고 출처를 밝혀 알리는 것이 실천이에요.' },
            { type: 'short', prompt: '초등 독도 공부에서 가장 기억에 남는 근거·가치·실천을 하나씩 써요.' },
          ],
        },
        worksheet: {
          title: '초등 독도 공부 정리',
          items: [
            { type: 'table', prompt: '초등 독도 공부를 정리해요.', columns: ['근거', '가치', '실천'], cells: [['', '', '']] },
            { type: 'short', prompt: '중학교에 가서 더 알아보고 싶은 독도 이야기를 써요.' },
          ],
        },
      }),
    );
  }

  PaperLessons.registerModules(M);
})();
