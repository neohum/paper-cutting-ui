/* 창체 안전교육 생활안전 — 고(10~12학년) 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/safety-a.json 의 saf-life 고.
 * 근거: 「학교안전교육 실시 기준 등에 관한 고시」(교육부고시 제2023-33호) 별표 2 고등학교 생활안전 네 항목
 *   (기호식품의 특성·유해성 및 전기·전자제품의 안전한 사용 방법 알기 / 실험·실습 안전 수칙 이해 및 보호장구의 바른 사용법 알기 /
 *    체육 및 여가활동의 안전한 활동 상해 시 대처방법 알기 / 실종, 유괴, 미아 상황 알고 예방하기) + 7대 표준안 생활안전·약물(고카페인) 분류.
 * 고 기준: 실제 자료 분석·토론(찬반 근거)·제안서·성찰 글·진로·자립 연결·딜레마 결과 추적. 단순 고르기 반복과 초등식 장면은 피한다.
 * 수치 자료는 모두 '가상'이다(상대 크기만). 인물은 직접 지은 가명이다. 피해 경험을 묻지 않는다.
 * 주제 15개 × 8모듈 = 120모듈(체계도 계획 전부). */
(function () {
  const MOD = (topic, grades) => (o) => Object.assign({ schema: 'edu-module.v1', domain: 'saf-life', band: '고', topic: `saf-life.h.${topic}`, grades }, o, { id: `saf-life.h.${topic}.${o.id}` });
  const uniq = (a) => [...new Map(a.map((x) => [JSON.stringify(x), x])).values()];
  const mix = (groups) => { const out = []; const n = Math.max(...groups.map((g) => g.length)); for (let i = 0; i < n; i++) for (const g of groups) if (g[i] != null) out.push(g[i]); return out; };
  const pfx = (p, tag) => `${p.replace(/[.?]$/, '')}(${tag}).`;

  // 나누기 문항(sort): groups = 칸마다 카드 글 목록(글 = 카드 id). 쉬움 = 칸마다 앞 k장, 도전 = hard(칸마다 더할 카드) 덧붙임. traps = 어느 칸에도 넣지 않을 카드
  const SORTQ = (prompt, slots, groups, { k = 2, hard = null, traps = [], d = 0.3, opt = {}, more = {} } = {}) => {
    const tgt = (gs) => ({ sort: Object.fromEntries(slots.map((s, i) => [s, gs[i]])) });
    const base = { prompt, toolOptions: Object.assign({ mode: 'sort', slots, cards: [...mix(groups), ...traps] }, opt), target: tgt(groups), difficulty: d, levels: {} };
    const eg = groups.map((g) => g.slice(0, k));
    base.levels.easy = { prompt: pfx(prompt, `카드 ${eg.flat().length}장`), toolOptions: { cards: mix(eg) }, target: tgt(eg) };
    if (hard) { const hg = groups.map((g, i) => [...g, ...(hard[i] || [])]); base.levels.challenge = { prompt: pfx(prompt, `카드 ${hg.flat().length + traps.length}장`), toolOptions: { cards: [...mix(hg), ...traps] }, target: tgt(hg) }; }
    return Object.assign(base, more);
  };
  // 차례 문항(order): steps = 바른 차례(글 = id). 쉬움 = 앞 k장, traps = 자리에 놓지 않을 함정 카드(기본·도전)
  const ORDERQ = (prompt, steps, { k = 3, traps = [], d = 0.3, opt = {}, more = {} } = {}) => {
    const lay = (s, t) => { const c = [...s, ...t]; return [c[c.length - 1], ...c.slice(0, -1)].reverse(); };
    const it = { prompt, toolOptions: Object.assign({ mode: 'order', slots: steps.length, cards: lay(steps, traps) }, opt), target: { order: steps }, difficulty: d, levels: {} };
    if (k < steps.length) it.levels.easy = { prompt: pfx(prompt, `카드 ${k}장`), toolOptions: { slots: k, cards: lay(steps.slice(0, k), []) }, target: { order: steps.slice(0, k) } };
    else delete it.levels;
    return Object.assign(it, more);
  };
  // 짝 문항(match): pairs = [[칸 글, 카드 글]…]. 쉬움 = 앞 k쌍
  const MATCHQ = (prompt, pairs, { k = 3, extra = [], d = 0.3, opt = {}, more = {} } = {}) => {
    const t = (ps) => ({ match: Object.fromEntries(ps.map(([s, c]) => [s, c])) });
    const it = { prompt, toolOptions: Object.assign({ mode: 'match', slots: pairs.map((p) => p[0]), cards: [...pairs.map((p) => p[1]).reverse(), ...extra] }, opt), target: t(pairs), difficulty: d };
    if (k < pairs.length) { const e = pairs.slice(0, k); it.levels = { easy: { prompt: pfx(prompt, `${k}쌍`), toolOptions: { slots: e.map((p) => p[0]), cards: e.map((p) => p[1]).reverse() }, target: t(e) } }; }
    return Object.assign(it, more);
  };
  // 고르기 문항(pick)
  const PICKQ = (prompt, good, bad, { d = 0.3, opt = {}, more = {} } = {}) => Object.assign({ prompt, toolOptions: Object.assign({ mode: 'pick', cards: mix([good, bad]) }, opt), target: { pick: good }, difficulty: d }, more);
  // 낱말 짝(wordcards match): pairs = [[낱말, 뜻]…]
  const WORDQ = (prompt, pairs, { k = 3, d = 0.3, opt = {}, more = {} } = {}) => {
    const w = (ps) => ps.map(([en, ko]) => ({ en, ko }));
    const t = (ps) => ({ match: Object.fromEntries(ps.map(([en]) => [en, en])) });
    const it = { prompt, toolOptions: Object.assign({ words: w(pairs) }, opt), target: t(pairs), difficulty: d };
    if (k < pairs.length) it.levels = { easy: { prompt: pfx(prompt, `낱말 ${k}개`), toolOptions: { words: w(pairs.slice(0, k)) }, target: t(pairs.slice(0, k)) } };
    return Object.assign(it, more);
  };
  // 갈림길(dilemma): 나무를 depth 단계에서 자른다(잘린 선택은 결과 글이 끝 문장이 된다)
  const cut = (s, n) => Object.assign({}, s, { choices: s.choices.map((c) => { const x = Object.assign({}, c); if (x.next) { if (n <= 1) { delete x.next; if (!x.ending) x.ending = x.result; } else x.next = cut(x.next, n - 1); } return x; }) });
  const depth = (s) => 1 + Math.max(0, ...s.choices.map((c) => (c.next ? depth(c.next) : 0)));
  // 쉬움 = 갈림길 1번, 기본 = 2번, 도전 = 나무 전체(3번). 근거 카드는 모든 단계에서 고른다
  const DILQ = (prompt, scene, paths, reasons, good, { d = 0.4, opt = {}, more = {} } = {}) => {
    const at = (n) => ({ path: uniq(paths.map((p) => p.slice(0, n))), reasons: good });
    const full = depth(scene);
    const it = { prompt, toolOptions: Object.assign({ scene: cut(scene, 2), reasons }, opt), target: at(2), difficulty: d,
      levels: { easy: { prompt: pfx(prompt, '갈림길 하나'), toolOptions: { scene: cut(scene, 1) }, target: at(1) } } };
    if (full > 2) it.levels.challenge = { prompt: pfx(prompt, `갈림길 ${full}개`), toolOptions: { scene }, target: at(full) };
    return Object.assign(it, more);
  };
  // 열린 탐색: 같은 나무의 다른 길까지 끝까지 가 보고 견주기
  const EXPLOREQ = (prompt, scene, reasons, checks, { d = 0.35, more = {} } = {}) => Object.assign({ prompt, toolOptions: { scene, reasons }, target: { explore: 2, selfCheck: checks }, difficulty: d }, more);
  // 기준표 글쓰기: 쉬움 = 문장 틀(starter), 도전 = 기준 하나 더
  const RWQ = (prompt, topic, checks, { min = 40, max = 400, sent = null, must = null, starter = null, sample = null, plus = null, d = 0.4, more = {} } = {}) => {
    const t = (cs) => Object.assign({ selfCheck: cs }, must ? { mustInclude: must } : {}, sent ? { sentences: sent } : {});
    const it = { prompt, toolOptions: Object.assign({ topic, minChars: min, maxChars: max }, sample ? { sample } : {}), target: t(checks), difficulty: d, levels: {} };
    if (starter) it.levels.easy = { toolOptions: { starter } };
    if (plus) it.levels.challenge = { prompt: pfx(prompt, '기준 하나 더'), target: t([...checks, plus]) };
    if (!Object.keys(it.levels).length) delete it.levels;
    return Object.assign(it, more);
  };
  // 점검표(kitchen checklist): items = [[id, 글, 넣을지]…]
  const CHECKQ = (prompt, title, items, { k = 0, d = 0.3, more = {} } = {}) => {
    const mk = (xs) => ({ mode: 'checklist', title, items: xs.map(([id, text]) => ({ id, text })) });
    const it = { prompt, toolOptions: mk(items), target: { checklist: items.filter((x) => x[2]).map((x) => x[0]) }, difficulty: d };
    if (k) { const e = items.slice(0, k); it.levels = { easy: { prompt: pfx(prompt, `항목 ${k}개`), toolOptions: mk(e), target: { checklist: e.filter((x) => x[2]).map((x) => x[0]) } } }; }
    return Object.assign(it, more);
  };
  const MOOD = { type: 'mood', prompt: '오늘 수업을 마친 지금 내 생각과 마음은 어떤가요?' };

  const MODS = [];

  // ======================================================================================================
  // 1. 고카페인 음료 표시와 시험 기간 수면 (10학년)
  // ======================================================================================================
  {
    const M = MOD('caffeine-sleep', [10]);
    const NIGHT = { text: '시험 전날 밤 11시, 아직 두 단원이 남았다. 책상 위에는 친구가 준 에너지 음료가 있다.', who: '서윤', motif: 'moon', choices: [
      { id: 'drink', text: '에너지 음료를 마시고 밤을 새운다', result: '새벽 3시까지 책을 넘기지만 같은 줄을 여러 번 읽는다.', impact: [{ who: '서윤', text: '잠이 모자라 다음 날 머리가 무겁다', tone: -1 }],
        next: { text: '아침 8시, 시험장에 앉았는데 눈이 감기고 손이 떨린다.', choices: [
          { id: 'more', text: '한 캔을 더 마신다', result: '가슴이 두근거리고 문제에 집중이 안 된다.', impact: [{ who: '서윤', text: '몸이 더 불편해진다', tone: -1 }], ending: '카페인을 겹쳐 마시면 몸의 신호가 커진다.' },
          { id: 'tell', text: '감독 선생님께 몸이 안 좋다고 알린다', result: '물을 마시고 잠시 숨을 고른다.', impact: [{ who: '서윤', text: '조금 나아지지만 이미 잠이 모자라다', tone: 0 }], ending: '밤샘의 대가는 시험장에서 갚게 된다.' }] } },
      { id: 'core', text: '핵심만 정리하고 12시 전에 잔다', result: '두 단원 가운데 자주 나오는 부분만 보고 잠든다.', impact: [{ who: '서윤', text: '푹 자고 일어난다', tone: 1 }],
        next: { text: '아침에 일어나니 정리한 내용이 조금 흐릿하다.', choices: [
          { id: 'review', text: '등굣길에 정리 노트를 한 번 더 본다', result: '어젯밤 본 내용이 다시 또렷해진다.', impact: [{ who: '서윤', text: '차분하게 시험을 본다', tone: 1 }],
            next: { text: '시험이 끝났다. 내일도 시험이 하나 더 있다.', choices: [
              { id: 'same', text: '오늘처럼 정리하고 제때 잔다', result: '이틀째에도 집중이 이어진다.', impact: [{ who: '서윤', text: '시험 기간 내내 컨디션이 고르다', tone: 1 }], ending: '잠을 지킨 계획이 이틀째까지 힘이 된다.' },
              { id: 'binge', text: '오늘 잘 봤으니 밤새 몰아서 한다', result: '이틀째 아침에 다시 머리가 무겁다.', impact: [{ who: '서윤', text: '첫날의 좋은 흐름이 끊긴다', tone: -1 }], ending: '하루 잘 잤다고 다음 날 밤샘이 괜찮아지지는 않는다.' }] } },
          { id: 'panic', text: '불안해서 아침에 커피 두 잔을 마신다', result: '손이 떨리고 화장실을 자주 간다.', impact: [{ who: '서윤', text: '긴장이 더 커진다', tone: -1 }], ending: '불안을 카페인으로 누르면 몸이 먼저 흔들린다.' }] } },
      { id: 'dawn', text: '바로 자고 새벽 5시에 일어나 본다', result: '알람을 끄고 다시 잠들 뻔하다 겨우 일어난다.', impact: [{ who: '서윤', text: '잠은 잤지만 공부 시간이 빠듯하다', tone: 0 }], ending: '새벽 공부도 잠을 줄이지 않는 선에서 계획해야 한다.' }] };
    const NIGHT_R = [{ id: 'sleep', text: '잠은 공부한 내용을 정리하고 집중력을 지켜 준다' }, { id: 'core', text: '남은 시간에는 자주 나오는 핵심부터 보는 것이 낫다' }, { id: 'energy', text: '에너지 음료 한 캔이면 밤샘도 괜찮다', why: '카페인은 졸음을 잠시 가릴 뿐 잠을 대신하지 못해요.' }, { id: 'all', text: '다들 시험 전날은 밤을 새운다', why: '여럿이 한다고 내 몸에 맞는 계획이 되지는 않아요.' }];

    MODS.push(
      M({
        id: 'intro.label-hunt', type: 'intro', title: '음료 캔 뒷면에서 정보 찾기',
        method: '음료 캔 뒷면 정보 찾기', tool: 'wordcards', minutes: 6,
        levels: { easy: '가상 음료 한 종의 뒷면만 함께 읽고 낱말 카드를 짝짓는다.', base: '가상 음료 세 종의 뒷면을 견주며 카페인 함량·주의 문구·1회 제공량이 적힌 자리를 찾는다.', challenge: '주의 문구가 누구에게 하는 말인지(어린이·임산부 등) 짚어 말한다.' },
        intro: {
          teacher: '"시험 기간에 편의점에서 음료를 고를 때, 캔 뒷면을 읽어 본 사람 있나요?" 두세 명의 대답을 듣고 시연 단추로 낱말 카드가 표시 자리와 짝지어지는 모습을 보여 준다. "커피만 카페인이 있잖아요"라는 말이 나오면 "에너지 음료·초콜릿 음료·녹차 캔 뒷면에도 같은 칸이 있을까요?"라고 되묻는다. 앞면의 큰 글씨가 아니라 뒷면의 작은 글씨가 내 몸에 대한 정보라는 점을 짚고, 오늘은 그 정보를 읽어 시험 기간 수면 계획까지 고친다고 밝힌다.',
          student: '오늘 고른 음료라고 생각하고, 캔 뒷면에서 카페인 함량·주의 문구·1회 제공량이 적힌 자리를 찾아 낱말과 짝지어 보세요.',
          demo: { tool: 'wordcards', options: { words: [{ en: '카페인 함량', ko: '성분 표시에 적힌, 한 캔에 든 카페인의 양' }, { en: '고카페인 함유', ko: '카페인이 많은 음료에 붙는 표시' }, { en: '1회 제공량', ko: '한 번에 먹는 기준이 되는 양' }, { en: '주의 문구', ko: '어린이·임산부 등에게 섭취를 조심하라고 알리는 글' }] }, sequence: [{ match: { '카페인 함량': '카페인 함량', '고카페인 함유': '고카페인 함유', '1회 제공량': '1회 제공량', '주의 문구': '주의 문구' } }] },
          art: { draw: 'three paper drink cans turned to show their back labels, a magnifying glass made of paper hovering over the small print, a desk lamp and a stack of exam notes', banner: '캔 뒷면을 읽어요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '음료는 모두 가상 제품이다. 특정 상품명·회사명을 쓰지 않는다. 실제 함량 수치를 외우게 하지 않고, 표시를 읽는 습관에 초점을 둔다.',
      }),
      M({
        id: 'intro.allnight-dilemma', type: 'intro', title: '시험 전날 밤 갈림길',
        method: '시험 전날 밤 갈림길과 결과 추적', tool: 'dilemma', minutes: 6,
        levels: { easy: '첫 갈림길에서 고른 결과까지만 함께 본다.', base: '두 번째 갈림길까지 가 보고 고른 근거를 말한다.', challenge: '세 번째 갈림길(이틀째)까지 결과를 따라가 다른 길과 견준다.' },
        intro: {
          teacher: '"시험 전날 밤 11시, 두 단원이 남았다면 여러분은 어떻게 하나요?" 손을 들어 세 선택(밤새기·핵심만 보고 자기·새벽에 일어나기)에 한 번씩 표시하게 한 뒤, 시연 단추로 \'핵심만 보고 자기\' 길이 시험 날 아침까지 이어지는 모습을 보여 준다. "밤을 새우면 공부 시간이 늘어나니까 점수도 오르잖아요"라는 말이 나오면 "새벽 3시에 같은 줄을 몇 번 읽었는지 장면을 다시 볼까요?"라고 되묻는다. 시간을 늘리는 것과 머리에 남는 것은 다르다는 점을 짚는다.',
          student: '서윤이가 되어 시험 전날 밤 어떤 선택을 할지 고르고, 그 선택이 다음 날 시험장에서 어떤 결과로 이어지는지 따라가 보세요.',
          demo: { tool: 'dilemma', options: { scene: cut(NIGHT, 2), reasons: NIGHT_R, title: '시험 전날 밤' }, sequence: [{ path: ['core', 'review'], reasons: ['sleep'] }] },
          art: { draw: 'a paper student at a desk at night under a crescent moon, an energy drink can on one side and a pillow on the other, a fork in a paper path leading to an exam room', banner: '밤샘일까, 잠일까?', extra: [{ motif: 'moon', x: 300, y: 96 }] },
        },
      }),

      M({
        id: 'activity.drink-compare', type: 'activity', title: '가상 음료별 카페인 자료 읽기',
        method: '가상의 음료별 카페인 자료 비교', tool: 'chart', minutes: 19,
        levels: { easy: '막대 끝에 상대 크기 값이 보여 가장 큰 막대와 작은 막대부터 읽는다.', base: '값 표시 없이 막대를 읽고, 하루에 여러 음료를 겹쳐 마신 사례를 계산한다.', challenge: '값 표시 없이 풀고, 그래프만으로 알 수 없는 것(개인차·제품차)을 고른 까닭을 짝에게 설명한다.' },
        activity: {
          title: '음료별 카페인 그래프 읽기', tool: 'chart',
          teacher: '"이 그래프는 실제 제품이 아니라 상대 크기만 나타낸 가상 자료예요. 무엇을 알 수 있고 무엇은 알 수 없을까요?" 먼저 막대를 읽고, 겹쳐 마시는 하루 문항에서는 계산 과정을 짝에게 말로 설명하게 한다. "커피만 줄이면 된다"는 학생에게 커피가 아닌 막대 중 큰 것을 가리키며 "이 음료도 카페인 칸이 있네요. 하루에 둘 다 마시면 어떻게 될까요?"라고 묻는다. 마지막 문항에서 같은 양도 사람마다 몸의 반응이 다르다는 점을 짚는다.',
          task: '가상 자료 막대그래프를 읽고 물음에 답해요.', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            { prompt: '가상 자료에서 카페인 상대 크기가 가장 큰 음료를 고르세요.', toolOptions: { type: 'bar', mode: 'read', title: '음료별 카페인(가상, 상대 크기)', yLabel: '상대 크기', xLabel: '음료', data: [['아메리카노', 9], ['에너지 음료', 8], ['콜라', 3], ['녹차', 4], ['초콜릿 음료', 2]], question: '가장 큰 막대는?', choices: ['아메리카노', '에너지 음료', '콜라', '녹차', '초콜릿 음료'] }, target: { pick: 0 }, difficulty: 0.15 },
            { prompt: '커피가 아닌 음료 가운데 카페인 상대 크기가 가장 큰 음료를 고르세요.', toolOptions: { type: 'bar', mode: 'read', title: '음료별 카페인(가상, 상대 크기)', yLabel: '상대 크기', xLabel: '음료', data: [['아메리카노', 9], ['에너지 음료', 8], ['콜라', 3], ['녹차', 4], ['초콜릿 음료', 2]], question: '커피가 아닌 것 중 가장 큰 막대는?', choices: ['콜라', '녹차', '에너지 음료', '초콜릿 음료'], why: ['콜라 막대보다 큰 막대가 있어요.', '녹차 막대보다 큰 막대가 있어요.', '', '초콜릿 음료는 가장 작은 막대예요.'] }, target: { pick: 2 }, difficulty: 0.2 },
            { prompt: '가상 인물 준호는 하루에 아침 아메리카노, 오후 에너지 음료, 밤 녹차를 마셨어요. 세 음료의 상대 크기를 더하면 얼마인가요?', toolOptions: { type: 'bar', mode: 'read', title: '준호의 하루(가상, 상대 크기)', yLabel: '상대 크기', xLabel: '마신 때', data: [['아침 아메리카노', 9], ['오후 에너지 음료', 8], ['밤 녹차', 4]], question: '하루 합은?' }, target: { value: 21 }, difficulty: 0.35, conclude: '한 잔씩은 적어 보여도 하루에 겹치면 커지고, 밤에 마신 것은 잠들기에 영향을 줘요.' },
            { prompt: '이 가상 그래프만으로는 알 수 없는 것을 고르세요.', toolOptions: { type: 'bar', mode: 'read', title: '음료별 카페인(가상, 상대 크기)', yLabel: '상대 크기', xLabel: '음료', data: [['아메리카노', 9], ['에너지 음료', 8], ['콜라', 3], ['녹차', 4], ['초콜릿 음료', 2]], question: '이 그래프로 알 수 없는 것은?', choices: ['어느 음료가 상대적으로 많은지', '내 몸이 카페인에 얼마나 민감한지', '녹차에도 카페인이 있는지'], why: ['막대 길이로 견줄 수 있어요.', '', '녹차 막대가 있으니 알 수 있어요.'] }, target: { pick: 1 }, difficulty: 0.4, conclude: '같은 음료라도 제품마다 함량이 다르고, 같은 양에도 사람마다 몸의 반응이 달라요. 그래서 내가 마시는 제품의 표시를 읽어요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '하루에 여러 음료를 겹쳐 마시면 생길 수 있는 문제를 그래프 근거와 함께 한 문장으로 쓰세요.' }] },
        notes: '그래프 값은 수업용 가상 상대 크기다. 실제 제품의 함량은 제품 표시를 확인하게 한다.',
      }),
      M({
        id: 'activity.ad-debate', type: 'activity', title: '고카페인 판매 제한 찬반 근거',
        method: '에너지 음료 판매 제한 찬반 근거 고르기', tool: 'mindmap', minutes: 19,
        levels: { easy: '근거 카드 6장을 찬성·반대·근거 약함으로 나눈다.', base: '근거 카드 10장을 나누고, 각 쪽에서 가장 강한 근거를 고른다.', challenge: '헷갈리는 카드 2장이 더해진 12장을 나누고, 활동지에 반대쪽 근거에 대한 반박을 한 줄 쓴다.' },
        activity: {
          title: '판매 제한 찬반 근거 나누기', tool: 'mindmap',
          teacher: '"\'학교 주변 고카페인 음료 판매를 더 제한해야 한다.\' 여러분은 어느 쪽인가요? 오늘은 내 편이 아니라 근거의 힘을 따져 봐요." 카드를 놓을 때마다 "이 근거는 누가 들어도 확인할 수 있나요?"라고 묻는다. "내 친구는 마셔도 괜찮았다"를 찬성이나 반대 칸에 넣는 학생에게 "한 사람의 경험으로 모두에게 맞는 규칙을 정할 수 있을까요?"라고 되묻는다. 찬성과 반대 모두에 강한 근거가 있을 수 있다는 점을 짚는다.',
          task: '근거 카드를 찬성·반대·근거 약함으로 나누고 가장 강한 근거를 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('근거 카드를 찬성·반대·근거 약함 칸으로 나누세요.', ['찬성', '반대', '근거 약함'], [
              ['잠이 부족한 학생이 늘면 수업 집중이 떨어진다', '학교 주변은 학생이 매일 지나는 곳이다', '표시를 읽지 않고 사는 학생이 많다', '어린이 등에게 주의 문구가 붙는 음료다'],
              ['판매만 막으면 다른 곳에서 사 먹을 수 있다', '스스로 조절하는 법을 배우는 것이 더 중요하다', '성인 손님과 가게에도 영향이 있다'],
              ['내 친구는 마셔도 괜찮았다', '맛이 없으니 팔지 말자', '요즘 다들 마신다'],
            ], { k: 2, hard: [['광고가 학생을 겨냥하는 경우가 있다'], ['교육 없이 금지만 하면 몰래 사게 된다']], d: 0.3, opt: { topic: '고카페인 판매 제한' } }),
            MATCHQ('각 쪽에서 가장 강한 근거를 하나씩 짝지으세요.', [['찬성 쪽 가장 강한 근거', '잠이 부족한 학생이 늘면 수업 집중이 떨어진다'], ['반대 쪽 가장 강한 근거', '판매만 막으면 다른 곳에서 사 먹을 수 있다']], { k: 2, extra: ['요즘 다들 마신다', '맛이 없으니 팔지 말자'], d: 0.35, opt: { topic: '가장 강한 근거' }, more: { hints: ['확인할 수 있고, 많은 학생에게 해당하는 근거가 강한 근거예요.'] } }),
            PICKQ('자료나 조사로 사실인지 확인해 볼 수 있는 근거만 고르세요.', ['표시를 읽지 않고 사는 학생이 많다', '잠이 부족한 학생이 늘면 수업 집중이 떨어진다'], ['맛이 없으니 팔지 말자', '내 친구는 마셔도 괜찮았다'], { d: 0.35, opt: { basket: '확인할 수 있는 근거' }, more: { conclude: '강한 근거는 자료로 확인할 수 있고, 한 사람의 경험이나 취향이 아니에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내가 고른 쪽과 반대쪽의 가장 강한 근거를 하나 적고, 그 근거에 대한 내 반박을 한 줄로 쓰세요.' }] },
      }),
      M({
        id: 'activity.sleep-plan', type: 'activity', title: '시험 기간 하루 시간 고치기',
        method: '시험 기간 하루 시간 예산 고치기', tool: 'economy', minutes: 19,
        levels: { easy: '시간 블록 카드 4장을 지킬 것·줄일 것으로 나눈다.', base: '시간 블록 카드 8장을 나누고, 저녁 계획 차례와 시간대 짝을 맞춘다.', challenge: '헷갈리는 블록 2장이 더해지고, 활동지에서 평일·주말 계획을 견주어 쓴다.' },
        activity: {
          title: '잠을 지키는 하루 시간표', tool: 'economy',
          teacher: '"하루 24시간은 돈처럼 더 빌릴 수 없는 예산이에요. 공부 시간을 늘리려면 어디서 가져와야 할까요?" 가상 인물 지후의 시험 기간 하루를 보고 지킬 블록과 줄일 블록을 나누게 한다. 잠 블록을 \'줄일 것\'에 넣는 학생에게 "잠을 줄여 얻은 한 시간과 SNS를 줄여 얻은 한 시간은 다음 날 똑같을까요?"라고 묻는다. 시간 예산을 고칠 때 잠은 마지막까지 지키는 블록이라는 점을 짚는다.',
          task: '지후의 하루 블록을 나누고, 잠을 지키는 계획으로 고쳐요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('지후의 시험 기간 하루 블록을 지킬 것과 줄일 것으로 나누세요.', ['지킬 것', '줄일 것'], [
              ['잠 7시간', '세 끼 식사', '등하교 이동', '쉬는 시간 짧은 산책'],
              ['자기 전 SNS 2시간', '새벽 2시까지 밤샘', '공부하며 영상 틀어 두기', '늦은 밤 게임'],
            ], { k: 2, hard: [['저녁 식사 뒤 짧은 휴식'], ['쉬는 시간마다 에너지 음료 사러 가기']], d: 0.25, opt: { trayLabel: '시간 블록' } }),
            ORDERQ('지후의 저녁 계획을 잠을 지키는 차례로 놓으세요.', ['저녁 식사', '어려운 과목 복습', '쉬운 과목 정리', '씻고 화면 끄기', '밤 11시 30분 잠자리'], { k: 3, d: 0.3, opt: { axis: ['저녁', '밤'] } }),
            MATCHQ('고친 계획에서 시간대와 블록을 짝지으세요.', [['방과 후~저녁 7시', '어려운 과목 복습'], ['밤 10시 30분~11시 30분', '씻고 화면 끄기'], ['밤 11시 30분~아침 6시 30분', '잠'], ['쉬는 시간', '물 마시고 몸 풀기']], { k: 3, extra: ['에너지 음료 마시기'], d: 0.35, more: { conclude: '잠을 지키면서 공부 시간을 찾으려면 화면·딴짓 시간을 먼저 줄여요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '시험 기간 평일과 주말의 내 잠 계획을 견주어 쓰세요.', columns: ['', '평일', '주말'], cells: [['잠자리에 드는 시각', '', ''], ['일어나는 시각', '', ''], ['줄일 블록', '', '']] }] },
        notes: '교구의 예산(budget) 판은 돈(원) 단위만 보여서, 시간 예산은 블록 카드 나누기·차례·짝으로 다룬다. 학생의 실제 하루를 발표시키지 않고 가상 인물로 다룬다.',
      }),
      M({
        id: 'activity.caffeine-clock', type: 'activity', title: '마지막 카페인 시각 정하기',
        method: '마지막 카페인 시각 정하기', tool: 'clock', minutes: 19,
        levels: { easy: '긴바늘이 30분 단위로 맞춰지고, 짧은바늘 자리가 연하게 보인다.', base: '5분 단위로 시각을 나타내고 그렇게 정한 까닭을 짝에게 말한다.', challenge: '작은 눈금 없이 1분 단위로 나타내고, 학원·야간 자율학습이 있는 날까지 반영한다.' },
        activity: {
          title: '잠드는 시각에서 거꾸로 세기', tool: 'clock',
          teacher: '"마지막 카페인은 언제 마셔야 할까요? 정답 하나보다, 잠드는 시각에서 거꾸로 세는 방법이 중요해요." 우리 모둠의 기준(오늘은 잠들기 6시간 전)을 칠판에 적고 시계로 거꾸로 세게 한다. "카페인은 금방 빠져나가니까 저녁에 마셔도 된다"는 학생에게 "저녁 8시에 마신 음료가 밤 11시에도 남아 있다면 잠드는 데 어떤 영향을 줄까요?"라고 묻는다. 모둠 계획끼리 견주며 기준을 더 앞당긴 모둠의 까닭을 듣는다.',
          task: '잠드는 시각과 마지막 카페인 시각을 시계에 나타내요.', levels: { easy: { minuteStep: 30, hourZone: true }, base: { minuteStep: 5 }, challenge: { minuteStep: 1, showMinuteMarks: false } },
          items: [
            { prompt: '시험 기간에 밤 11시에 잠들기로 했어요. 잠드는 시각을 시계에 나타내세요.', toolOptions: {}, target: { h: 11, m: 0 }, difficulty: 0.1 },
            { prompt: '우리 모둠 기준은 잠들기 6시간 전부터 카페인을 마시지 않기예요. 밤 11시에 잔다면 마지막 카페인 시각을 나타내세요.', toolOptions: {}, target: { h: 5, m: 0 }, difficulty: 0.25 },
            { prompt: '밤 11시 30분에 잠드는 날, 같은 기준(6시간 전)으로 마지막 카페인 시각을 나타내세요.', toolOptions: {}, target: { h: 5, m: 30 }, difficulty: 0.35 },
            { prompt: '학원이 밤 10시에 끝나 밤 12시에 잠드는 날, 같은 기준으로 마지막 카페인 시각을 나타내세요.', toolOptions: {}, target: { h: 6, m: 0 }, difficulty: 0.4, conclude: '잠드는 시각이 늦어지는 날에도 마지막 카페인은 잠드는 시각에서 거꾸로 세어 정해요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 일정에 맞춰 잠드는 시각과 마지막 카페인 시각을 정하세요.', columns: ['요일 유형', '잠드는 시각', '마지막 카페인 시각'], cells: [['학원 없는 날', '', ''], ['학원·야자 있는 날', '', '']] }] },
        notes: '\'6시간 전\'은 의학 기준이 아니라 이 수업에서 정한 연습용 모둠 기준이다. 몸에 따라 더 앞당길 수 있다고 말해 준다.',
      }),

      M({
        id: 'wrap.balance-map', type: 'wrap', title: '카페인과 내 몸 마인드맵',
        method: '기호식품과 몸 마인드맵', tool: 'mindmap', minutes: 6,
        levels: { easy: '들어 있는 식품·몸의 변화 두 가지에 카드를 단다.', base: '세 가지(식품·몸의 변화·내 조절 방법)에 카드를 단다.', challenge: '친구에게 권하고 싶은 조절법 하나를 골라 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"\'카페인\' 하면 오늘 무엇이 떠오르나요? 들어 있는 것, 몸에 생기는 일, 내가 할 수 있는 일로 정리해 봐요." 마인드맵 카드를 함께 붙인 뒤 출구 질문으로 넘어간다. 출구 2번에서 "카페인은 많이 마셔도 금방 빠져나간다"를 고른 학생에게 밤에 마신 한 캔이 잠들기에 영향을 준 장면을 떠올리게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '카페인', slots: ['들어 있는 식품', '몸의 변화', '내 조절 방법'], cards: ['에너지 음료', '녹차', '잠들기 어려움', '가슴 두근거림', '뒷면 표시 읽기', '마지막 카페인 시각 정하기'] }, prompt: '카드를 마인드맵 가지에 다세요.', target: { sort: { '들어 있는 식품': ['에너지 음료', '녹차'], '몸의 변화': ['잠들기 어려움', '가슴 두근거림'], '내 조절 방법': ['뒷면 표시 읽기', '마지막 카페인 시각 정하기'] } }, difficulty: 0.2 },
            { type: 'choice', prompt: '오늘 배운 것과 맞지 않는 말을 고르세요.', options: ['커피 말고도 카페인이 든 음료가 있다', '카페인은 많이 마셔도 금방 빠져나간다', '잠은 공부한 내용을 정리하는 시간이다'], answer: 1, difficulty: 0.2, explain: '카페인은 마신 뒤에도 한동안 몸에 남아 잠들기와 잠의 질에 영향을 줘요.' },
            { type: 'short', prompt: '친구에게 권하고 싶은 카페인 조절법 하나를 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '카페인과 내 몸',
          items: [
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '음료를 고를 때는 앞면 광고보다 뒷면의 ___ 정보를 읽는다.', answer: '카페인(성분 표시)' },
            { type: 'check', prompt: '이번 주에 해 볼 것에 표시하세요.', options: ['음료 뒷면 표시 읽기', '마지막 카페인 시각 정하기', '자기 전 화면 끄기', '에너지 음료 대신 물 마시기'] },
          ],
        },
      }),
      M({
        id: 'wrap.sleep-reflection', type: 'wrap', title: '나의 시험 기간 수면 계획 글',
        method: '나의 수면 계획 성찰 글', tool: 'rubric-writing', minutes: 6,
        levels: { easy: '문장 틀("나는 시험 기간에 ~시에 잔다. 왜냐하면 ~")을 보고 쓴다.', base: '네 문장을 쓰고 기준표 세 항목을 스스로 점검한다.', challenge: '계획을 지키지 못한 날의 대안까지 활동지에 덧붙인다.' },
        wrap: {
          teacher: '"다가올 시험 기간, 나는 몇 시에 자고 언제 카페인을 멈출까요? 오늘 정한 시각을 글로 남겨 봐요." 쓰기 전에 기준표 세 항목을 함께 읽는다. "그냥 일찍 잔다"처럼 시각이 없는 글을 쓴 학생에게 "몇 시인지 적어 두면 지켰는지 내가 확인할 수 있을까요?"라고 묻는다. 계획은 남에게 보이려는 것이 아니라 내가 지킬 수 있어야 한다는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'rubric-writing', options: { topic: '다가올 시험 기간의 내 수면·카페인 계획을 네 문장으로 쓰세요.', minChars: 60, maxChars: 400, starter: '나는 시험 기간에 밤 ~시에 잔다. 왜냐하면 ~', sample: '나는 시험 기간에 밤 11시 30분에 잔다. 마지막 카페인은 오후 5시까지만 마신다. 잠을 자야 공부한 내용이 정리되기 때문이다. 학원이 늦게 끝나는 날에는 음료 대신 물을 마시겠다.' }, prompt: '수면 계획을 쓰고 기준표로 점검하세요.', target: { selfCheck: ['잠드는 시각과 마지막 카페인 시각을 썼다', '그렇게 정한 근거를 썼다', '내가 지킬 수 있는 계획인지 따져 보았다'], mustInclude: [['시', '시각']] }, difficulty: 0.3 },
            { type: 'choice', prompt: '좋은 수면 계획에 가장 가까운 것을 고르세요.', options: ['시험 끝날 때까지 하루 4시간만 잔다', '잠드는 시각을 정하고 그 몇 시간 전부터 카페인을 끊는다', '졸리면 그때그때 에너지 음료를 마신다'], answer: 1, difficulty: 0.15, explain: '잠드는 시각을 먼저 정하고 거꾸로 세어 카페인을 멈추는 계획이 지키기 쉬워요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '나의 시험 기간 수면 계획',
          items: [
            { type: 'short', prompt: '내 수면·카페인 계획을 네 문장으로 쓰세요(구체적 시각 넣기).' },
            { type: 'short', prompt: '계획을 지키지 못한 날, 다음 날 어떻게 되돌릴지 대안을 쓰세요.' },
          ],
          easy: { note: '"나는 시험 기간에 ~시에 잔다. 마지막 카페인은 ~시까지. 왜냐하면 ~"', items: [{ type: 'short', prompt: '잠드는 시각과 마지막 카페인 시각을 쓰세요.' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 2. 멀티탭·충전기 사용과 전기 화재 예방 (10학년)
  // ======================================================================================================
  {
    const M = MOD('power-strip', [10]);
    const WATT = [['전기포트', 9], ['헤어드라이어', 8], ['전기장판', 5], ['노트북', 2], ['휴대전화 충전기', 1]];
    const RULE = { text: '겨울 기숙사 자치회의. 방이 춥다며 \'개인 전기장판을 허용하자\'는 안건이 올라왔다. 지금 규칙은 개인 전열기 금지다.', who: '자치회의', motif: 'house', choices: [
      { id: 'allow', text: '조건 없이 모두 허용한다', result: '방마다 전기장판·히터가 하나씩 늘어난다.', impact: [{ who: '학생들', text: '당장은 따뜻하다', tone: 1 }, { who: '기숙사 전체', text: '멀티탭 과열 위험이 커진다', tone: -1 }],
        next: { text: '한 달 뒤, 한 방의 멀티탭에서 탄 냄새가 났다는 보고가 들어왔다.', choices: [
          { id: 'ignore', text: '한 번 일이니 그대로 둔다', result: '다른 방에서도 문어발 꽂기가 이어진다.', impact: [{ who: '기숙사 전체', text: '화재 위험이 그대로 남는다', tone: -1 }], ending: '사고 신호를 흘려보내면 다음 사고를 막을 기회를 잃는다.' },
          { id: 'reban', text: '다시 모두 금지한다', result: '규칙은 바뀌었지만 몰래 쓰는 방이 생긴다.', impact: [{ who: '학생들', text: '불만이 커진다', tone: -1 }], ending: '설명 없는 금지는 몰래 쓰기로 이어질 수 있다.' }] } },
      { id: 'keep', text: '지금처럼 금지하되 까닭을 설명한다', result: '규칙은 그대로지만 추위 문제는 남는다.', impact: [{ who: '추위를 타는 학생', text: '여전히 불편하다', tone: -1 }],
        next: { text: '추위를 호소하는 학생들의 의견이 다시 모였다.', choices: [
          { id: 'compromise', text: '공용 인증 제품만, 타이머·점검 조건으로 허용하자고 제안한다', result: '사감 선생님과 점검 방법을 정하기로 한다.', impact: [{ who: '학생들', text: '안전과 따뜻함을 함께 챙긴다', tone: 1 }],
            next: { text: '조건부 허용안을 투표에 올리기 전, 반대 의견이 나왔다: "점검을 누가 매번 하나요?"', choices: [
              { id: 'duty', text: '방마다 주 1회 점검 당번을 정하고 점검표를 붙인다', result: '반대한 학생도 점검표 만들기에 함께한다.', impact: [{ who: '기숙사 전체', text: '규칙이 지켜질 길이 생긴다', tone: 1 }], ending: '반대 의견을 규칙 안에 담으면 함께 지키는 규칙이 된다.' },
              { id: 'vote', text: '반대 의견은 두고 바로 투표한다', result: '안건은 통과됐지만 점검이 흐지부지된다.', impact: [{ who: '기숙사 전체', text: '조건이 지켜지지 않는다', tone: -1 }], ending: '지킬 방법 없는 조건은 없는 조건과 같다.' }] } },
          { id: 'silence', text: '규칙이니 그냥 참으라고 한다', result: '의견을 낸 학생들이 회의에 나오지 않는다.', impact: [{ who: '학생들', text: '목소리가 사라진다', tone: -1 }], ending: '안전 규칙도 생활의 어려움을 함께 다뤄야 지켜진다.' }] } }] };
    const RULE_R = [{ id: 'load', text: '멀티탭 하나에 전열기가 겹치면 과열된다' }, { id: 'check', text: '조건을 지킬 점검 방법이 있어야 규칙이 된다' }, { id: 'voice', text: '불편을 말한 의견도 안전 규칙 안에 담을 수 있다' }, { id: 'warm', text: '따뜻하면 위험은 상관없다', why: '따뜻함과 안전은 함께 따져야 해요.' }, { id: 'old', text: '새 건물이라 전기 화재는 나지 않는다', why: '전기 화재는 사용 습관에서도 생겨요.' }];

    MODS.push(
      M({
        id: 'intro.dorm-story', type: 'intro', title: '기숙사 방 장면에서 원인 찾기',
        method: '기숙사 방 사진 장면 분석', tool: 'story', minutes: 6,
        levels: { easy: '장면 두 개(멀티탭·이불 위 충전)만 함께 본다.', base: '장면 네 개를 넘겨 보며 화재 원인이 될 곳을 고른다.', challenge: '고른 원인을 과열·누전·발화 가운데 어디에 가까운지 나눠 말한다.' },
        intro: {
          teacher: '"이 방은 가상의 기숙사 방이에요. 불이 난다면 어디서 시작될 것 같나요?" 장면을 넘기며 두세 명에게 고르게 하고, 시연 단추로 위험한 장면이 바구니에 담기는 모습을 보여 준다. "멀티탭 구멍이 여섯 개니까 여섯 개 꽂아도 된다"는 말이 나오면 "구멍 수와 멀티탭이 견딜 수 있는 양은 같을까요?"라고 되묻는다. 오늘은 원인을 분석해 우리 방 점검 기준을 만든다고 밝힌다.',
          student: '가상의 기숙사 방 장면을 넘겨 보며, 전기 화재가 시작될 수 있는 곳을 골라 보세요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '화재 원인이 될 곳', title: '기숙사 302호(가상)', cards: [{ id: 'strip', text: '멀티탭 하나에 전기포트·헤어드라이어', motif: 'house' }, { id: 'bed', text: '이불 위에서 충전 중인 휴대전화', motif: 'moon' }, { id: 'desk', text: '책상 위 스탠드 하나', motif: 'sun' }, { id: 'dust', text: '침대 밑 먼지 쌓인 멀티탭', motif: 'cloud' }], shuffle: false }, sequence: [{ pick: ['strip', 'bed', 'dust'] }] },
          art: { draw: 'a paper dormitory room with a crowded power strip feeding a kettle and a hair dryer, a phone charging on a blanket, dust under the bed, soft warning sparks cut from orange paper', banner: '불은 어디서 시작될까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '사진 대신 가상 장면을 쓴다. 학생 방 사진을 찍어 오게 하지 않는다(사생활).',
      }),
      M({
        id: 'intro.watt-chart', type: 'intro', title: '가전제품 소비전력 견주기',
        method: '가전제품 소비전력 상대 비교', tool: 'chart', minutes: 6,
        levels: { easy: '가장 큰 막대 두 개를 함께 찾는다.', base: '큰 막대 둘을 한 멀티탭에 겹치면 안 되는 조합으로 말한다.', challenge: '제품의 정격 정보가 어디에 적혀 있는지(제품 뒷면·명판·설명서) 말한다.' },
        intro: {
          teacher: '"가상의 그래프예요. 막대가 길수록 전기를 많이 쓰는 제품이에요. 열을 내는 제품은 어느 쪽에 있나요?" 시연 단추로 가장 큰 막대를 고르는 모습을 보이고, 전기포트·헤어드라이어처럼 열을 내는 제품이 큰 쪽에 몰려 있음을 짚는다. "충전기는 작으니 몇 개를 꽂아도 된다"는 말이 나오면 "큰 제품 하나에 작은 것 여러 개가 더해지면 멀티탭은 어떻게 될까요?"라고 되묻는다.',
          student: '가상 그래프에서 전기를 가장 많이 쓰는 제품을 찾고, 한 멀티탭에 함께 꽂으면 안 되는 조합을 생각해 보세요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '제품별 소비전력(가상, 상대 크기)', yLabel: '상대 크기', xLabel: '제품', data: WATT, question: '가장 큰 막대는?', choices: WATT.map((x) => x[0]) }, sequence: [{ pick: 0 }] },
          art: { draw: 'paper bar chart blocks shaped like a kettle, a hair dryer, a heating pad, a laptop and a small charger, the tall ones glowing warm red, a power strip below', banner: '열을 내는 제품은 전기를 많이 써요', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
      }),

      M({
        id: 'activity.cause-map', type: 'activity', title: '전기 화재 원인 분석',
        method: '전기 화재 원인 분석 마인드맵', tool: 'mindmap', minutes: 19,
        levels: { easy: '원인 가지마다 사례 카드 1장씩(4장)을 놓는다.', base: '사례 카드 8장을 네 가지에 나누고, 원인마다 예방법을 짝짓는다.', challenge: '사례 12장을 나누고, 두 원인이 겹친 장면을 골라 가지끼리 잇는다.' },
        activity: {
          title: '자취방 전기 화재 원인 가지', tool: 'mindmap',
          teacher: '"\'자취방 전기 화재\'라는 같은 결과에도 원인은 여러 갈래예요. 사례 카드를 원인 가지에 나눠 봐요." 카드를 놓을 때마다 "이 장면에서 무엇이 뜨거워지나요?"라고 묻는다. "전기 화재는 오래된 집에서만 난다"는 학생에게 새 멀티탭에도 먼지가 쌓이고 전열기가 겹치는 장면을 가리키며 "이것도 건물이 낡아서 생긴 일일까요?"라고 되묻는다. 원인 대부분이 쓰는 사람의 습관에서 시작된다는 점을 짚는다.',
          task: '전기 화재 사례를 원인 가지에 나누고 예방법을 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('사례 카드를 전기 화재 원인 가지에 나누세요.', ['과부하', '접촉 불량', '먼지와 습기', '충전 습관'], [
              ['멀티탭 하나에 전기포트와 히터를 함께 꽂음', '멀티탭에 다른 멀티탭을 이어 꽂음'],
              ['헐거운 콘센트에 플러그가 반쯤 꽂힘', '꺾이고 눌린 전선을 계속 씀'],
              ['침대 밑 멀티탭에 먼지가 쌓임', '젖은 손으로 플러그를 꽂음'],
              ['이불 위에서 밤새 충전함', '인증 표시 없는 충전기를 씀'],
            ], { k: 1, hard: [['헤어드라이어와 전기장판을 함께 켬'], ['플러그 끝에 탄 자국이 있음'], ['욕실 앞에 멀티탭을 둠'], ['충전 중 휴대전화를 베개 밑에 둠']], d: 0.3, opt: { topic: '자취방 전기 화재' } }),
            MATCHQ('원인 가지마다 알맞은 예방법을 짝지으세요.', [['과부하', '전열기는 벽 콘센트에 하나씩 꽂는다'], ['접촉 불량', '헐겁거나 탄 자국이 있으면 쓰지 않고 바꾼다'], ['먼지와 습기', '멀티탭을 바닥 위로 두고 먼지를 닦는다'], ['충전 습관', '단단한 바닥에서 충전하고 다 되면 뽑는다']], { k: 2, d: 0.3, opt: { topic: '원인별 예방법' } }),
            PICKQ('원인 두 가지가 겹쳐 더 위험한 장면만 고르세요.', ['먼지 쌓인 멀티탭에 전기포트와 히터를 함께 꽂음', '탄 자국 난 플러그를 이불 위에서 충전에 씀'], ['벽 콘센트에 스탠드 하나만 꽂음', '다 충전된 충전기를 뽑아 둠'], { d: 0.4, opt: { basket: '겹친 원인' }, more: { conclude: '원인이 겹치면 위험이 더 커지므로, 한 가지만 고쳐도 사고 고리를 끊을 수 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '원인마다 내 방에서 할 예방법을 한 가지씩 쓰세요.', columns: ['원인', '내 방 예방법'], cells: [['과부하', ''], ['접촉 불량', ''], ['먼지와 습기', ''], ['충전 습관', '']] }] },
      }),
      M({
        id: 'activity.strip-checklist', type: 'activity', title: '멀티탭 점검표 만들기',
        method: '멀티탭 안전 점검표 만들기', tool: 'kitchen', minutes: 19,
        levels: { easy: '점검 후보 6개 가운데 넣을 항목을 고른다.', base: '후보 12개 가운데 함정 항목을 걸러 내고, 고칠 일 나누기·점검 차례까지 정한다.', challenge: '활동지에 점검표에 없는 항목 하나를 근거와 함께 더한다.' },
        activity: {
          title: '사감 선생님께 낼 점검표', tool: 'kitchen',
          teacher: '"사감 선생님께 \'우리 기숙사 멀티탭 점검표\'를 제안한다면 어떤 항목을 넣을까요? 점검표는 길수록 좋은 게 아니라 확인할 수 있어야 해요." 후보 가운데 \'구멍이 많은 멀티탭을 산다\'처럼 그럴듯한 함정을 고르는 학생에게 "구멍 수가 늘면 꽂을 수 있는 양도 늘어날까요?"라고 묻는다. 점검표 항목은 눈으로 보고 예·아니요로 답할 수 있어야 한다는 점을 짚는다.',
          task: '멀티탭 점검표에 넣을 항목을 고르고 점검 차례를 정해요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            CHECKQ('기숙사 멀티탭 점검표에 넣을 항목만 표시하세요.', '우리 기숙사 멀티탭 점검표', [
              ['heat', '전열기를 멀티탭에 겹쳐 꽂지 않았다', true], ['many', '구멍이 많은 멀티탭으로 바꾸었다', false], ['dust', '멀티탭에 먼지가 쌓이지 않았다', true], ['burn', '플러그·콘센트에 탄 자국이 없다', true],
              ['color', '멀티탭 색이 방과 어울린다', false], ['cable', '전선이 꺾이거나 가구에 눌리지 않았다', true], ['chain', '멀티탭끼리 이어 꽂지 않았다', true], ['cheap', '가장 싼 멀티탭을 샀다', false],
              ['bed', '이불·침대 위에서 충전하지 않는다', true], ['wet', '물 쓰는 곳 가까이에 두지 않았다', true], ['brand', '친구와 같은 제품을 쓴다', false], ['unplug', '쓰지 않는 플러그는 뽑아 둔다', true],
            ], { k: 6, d: 0.3 }),
            SORTQ('점검에서 나온 문제를 바로 고칠 것과 바꿔야 할 것으로 나누세요.', ['바로 고칠 것', '새것으로 바꿀 것'], [
              ['멀티탭 위 먼지', '이불 위 충전 습관', '전열기 두 개 겹쳐 꽂기'],
              ['탄 자국 난 멀티탭', '피복이 벗겨진 전선', '인증 표시 없는 충전기'],
            ], { k: 2, hard: [['멀티탭끼리 이어 꽂기'], ['헐거워 빠지는 콘센트 구멍']], d: 0.3, opt: { groups: false } }),
            ORDERQ('멀티탭을 점검하는 차례로 카드를 놓으세요.', ['꽂힌 제품의 전원을 끈다', '플러그를 뽑는다', '탄 자국과 전선 상태를 본다', '마른 천으로 먼지를 닦는다', '필요한 것만 다시 꽂는다'], { k: 3, d: 0.3, more: { conclude: '점검은 전원을 끄고 뽑은 뒤에 하고, 다시 꽂을 때는 꼭 필요한 것만 꽂아요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '점검표에 더하고 싶은 항목 하나와 그 근거를 쓰세요.' }] },
      }),
      M({
        id: 'activity.dorm-rule-debate', type: 'activity', title: '기숙사 전열기 규칙 회의',
        method: '기숙사 전열기 금지 규칙 찬반', tool: 'dilemma', minutes: 19,
        levels: { easy: '갈림길 하나에서 고르고 결과를 본 뒤 근거를 고른다.', base: '갈림길 둘을 지나 한 달 뒤 결과를 보고 근거를 고른다.', challenge: '갈림길 셋까지 가서 반대 의견을 존중한 절충안을 고르고, 다른 길과 견준다.' },
        activity: {
          title: '전기장판 허용 회의 갈림길', tool: 'dilemma',
          teacher: '"\'개인 전기장판을 허용하자.\' 춥다는 친구의 말도, 화재를 걱정하는 사감 선생님의 말도 맞아요. 어떤 규칙이 둘 다 지킬까요?" 선택마다 누가 영향을 받는지 소리 내어 읽게 한다. \'조건 없이 허용\'을 고르는 학생에게 "한 달 뒤 장면에서 누구에게 피해가 갔나요?"라고 묻고, \'그냥 참으라\'를 고르는 학생에게는 "의견을 낸 친구들은 다음 회의에 올까요?"라고 묻는다. 안전 규칙은 지킬 방법까지 있어야 규칙이 된다는 점을 짚는다.',
          task: '규칙 회의의 갈림길을 따라가며 결과를 보고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('기숙사 전열기 규칙 회의에서 안전과 의견을 함께 지키는 길을 고르고 근거를 고르세요.', RULE, [['keep', 'compromise', 'duty']], RULE_R, ['load', 'check'], { d: 0.4 }),
            EXPLOREQ('고르지 않은 다른 길도 끝까지 가 보고, 결과를 견주세요.', RULE, RULE_R, ['다른 길의 한 달 뒤 결과를 확인했다', '누가 이익·피해를 보는지 짚었다'], { d: 0.35 }),
            DILQ('룸메이트가 몰래 전기히터를 쓰는 상황에서 알맞은 길을 고르고 근거를 고르세요.', { text: '룸메이트가 밤마다 침대 옆에서 작은 전기히터를 몰래 켠다. "춥잖아, 비밀로 해 줘."', who: '룸메이트', motif: 'moon', choices: [
              { id: 'secret', text: '비밀로 하고 모른 척한다', result: '히터가 이불 가까이에서 밤새 켜진다.', impact: [{ who: '같은 층 학생들', text: '화재 위험을 모른 채 잔다', tone: -1 }], ending: '비밀을 지키는 동안 위험도 함께 지켜진다.' },
              { id: 'talk', text: '위험한 까닭을 말하고 함께 방법을 찾자고 한다', result: '룸메이트가 머뭇거리며 히터를 끈다.', impact: [{ who: '룸메이트', text: '혼나지 않고 고칠 기회를 얻는다', tone: 1 }],
                next: { text: '룸메이트가 "그래도 너무 추워"라고 한다.', choices: [
                  { id: 'ask', text: '함께 사감 선생님께 추위 문제를 말하러 간다', result: '방 난방 점검과 담요 지원을 받는다.', impact: [{ who: '룸메이트', text: '안전하게 따뜻해진다', tone: 1 }], ending: '위험을 숨기지 않고 함께 어른에게 가면 문제와 위험을 함께 푼다.' },
                  { id: 'cover', text: '이불로 히터를 가려 보이지 않게 쓰자고 한다', result: '이불이 히터에 닿아 뜨거워진다.', impact: [{ who: '두 사람', text: '더 큰 위험에 빠진다', tone: -1 }], ending: '가리면 들키지 않지만 불은 더 쉽게 붙는다.' }] } },
              { id: 'report', text: '말없이 바로 사감 선생님께 알린다', result: '히터는 치워지지만 룸메이트가 서운해한다.', impact: [{ who: '같은 층 학생들', text: '위험이 사라진다', tone: 1 }, { who: '룸메이트', text: '믿음에 금이 간다', tone: -1 }], ending: '안전은 지켰지만, 먼저 말해 주었다면 관계도 지킬 수 있었다.' }] },
              [['talk', 'ask']], [{ id: 'fire', text: '히터가 이불 가까이 있으면 불이 붙기 쉽다' }, { id: 'friend', text: '친구의 안전이 비밀보다 먼저다' }, { id: 'quiet', text: '들키지만 않으면 괜찮다', why: '들키지 않아도 위험은 그대로예요.' }], ['fire', 'friend'], { d: 0.35, more: { conclude: '안전한 규칙은 위험을 숨기지 않고, 불편을 말할 길도 열어 두는 규칙이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 기숙사(또는 우리 집)에 맞는 전열기 규칙을 조건과 점검 방법을 넣어 한 문장으로 쓰세요.' }] },
      }),
      M({
        id: 'activity.charge-order', type: 'activity', title: '과열 충전기 대처 차례',
        method: '과열된 충전기 발견 뒤 행동 차례', tool: 'timeline', minutes: 19,
        levels: { easy: '행동 카드 3장을 차례로 놓는다.', base: '카드 5장을 차례로 놓고, 함정 카드(물 붓기 등)는 놓지 않고 남긴다.', challenge: '카드를 섞어 놓고, 함정 카드를 남긴 까닭을 짝에게 설명한다.' },
        activity: {
          title: '탄 냄새가 날 때 차례', tool: 'timeline',
          teacher: '"밤에 책상 쪽에서 탄 냄새가 나요. 무엇부터 할까요?" 카드를 놓기 전에 각자 첫 행동을 말해 보게 한다. "물을 부어 식힌다"를 놓는 학생에게 "전기가 흐르는 물건에 물을 부으면 어떻게 될까요?"라고 묻는다. 불꽃이 보이는 순간부터는 끄기가 아니라 알리고 나가기로 바뀐다는 점을 두 번째 문항에서 짚는다.',
          task: '상황마다 행동 카드를 차례로 놓고 함정 카드는 남겨요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDERQ('밤에 충전기에서 탄 냄새가 나요. 행동 카드를 차례로 놓으세요.', ['냄새 나는 곳을 찾는다', '만질 수 있으면 플러그를 뽑는다', '주변의 탈 물건을 치운다', '사감 선생님께 알린다', '그 충전기는 다시 쓰지 않는다'], { k: 3, traps: ['물을 부어 식힌다'], d: 0.3, opt: { axis: ['먼저', '나중'] } }),
            ORDERQ('충전기에서 불꽃이 보여요. 행동 카드를 차례로 놓으세요.', ['"불이야" 외쳐 알린다', '몸을 낮추고 방을 나간다', '나오면서 방문을 닫는다', '밖에서 119에 신고한다'], { k: 3, traps: ['짐을 챙겨 나간다', '물을 부어 끈다'], d: 0.35, opt: { axis: ['먼저', '나중'] } }),
            ORDERQ('아침에 보니 충전기가 유난히 뜨거워요. 행동 카드를 차례로 놓으세요.', ['충전을 멈추고 뽑는다', '식을 때까지 단단한 바닥에 둔다', '탄 자국·부풂이 있는지 본다', '인증 표시 있는 제품으로 바꾼다'], { k: 3, traps: ['이불로 덮어 식힌다'], d: 0.35, opt: { axis: ['먼저', '나중'] }, more: { conclude: '냄새·열은 멈추고 뽑기, 불꽃은 알리고 나가기 — 상황이 바뀌면 첫 행동도 바뀌어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '\'물을 부어 식힌다\'가 왜 함정 카드인지 까닭을 쓰세요.' }] },
      }),

      M({
        id: 'wrap.electric-words', type: 'wrap', title: '전기 안전 핵심어 정리',
        method: '전기 안전 핵심어 정리', tool: 'wordcards', minutes: 6,
        levels: { easy: '낱말 3개를 뜻과 짝짓는다.', base: '낱말 5개를 뜻과 짝짓는다.', challenge: '짝지은 낱말 둘을 넣어 점검 문장을 만든다.' },
        wrap: {
          teacher: '"오늘 배운 낱말로 우리 방을 설명해 볼까요? 과부하, 접촉 불량, 정격…" 낱말 카드를 뜻과 짝지은 뒤 한두 명에게 낱말 둘을 넣은 점검 문장을 말하게 한다. "정격은 멀티탭 구멍 수"라고 말하는 학생에게 제품 뒷면 명판에 적힌 정보가 정격이라는 점을 다시 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'wordcards', options: { words: [{ en: '과부하', ko: '한 콘센트·멀티탭에 감당할 수 있는 양보다 많은 전기를 씀' }, { en: '접촉 불량', ko: '플러그가 헐겁게 꽂혀 그 자리가 뜨거워짐' }, { en: '정격', ko: '제품·멀티탭에 적힌, 안전하게 쓸 수 있는 기준' }, { en: '플러그 뽑기', ko: '쓰지 않을 때 전기를 끊어 두는 습관' }, { en: '인증 표시', ko: '안전 기준을 확인받은 제품에 붙는 표시' }] }, prompt: '전기 안전 낱말을 뜻과 짝지으세요.', target: { match: { 과부하: '과부하', '접촉 불량': '접촉 불량', 정격: '정격', '플러그 뽑기': '플러그 뽑기', '인증 표시': '인증 표시' } }, difficulty: 0.2 },
            { type: 'choice', prompt: '멀티탭 사용에 대한 말 가운데 옳은 것을 고르세요.', options: ['구멍 수만큼 꽂아도 된다', '전열기는 겹쳐 꽂지 않는다', '충전기는 아무 제품이나 같다'], answer: 1, difficulty: 0.15, explain: '구멍 수가 아니라 정격을 넘지 않게 써야 하고, 열을 내는 제품은 겹쳐 꽂지 않아요.' },
            { type: 'short', prompt: '오늘 배운 낱말 둘을 넣어 우리 방 점검 문장을 쓰세요.' },
          ],
        },
        worksheet: {
          title: '전기 안전 핵심어',
          items: [
            { type: 'table', prompt: '낱말의 뜻을 내 말로 쓰세요.', columns: ['낱말', '내 말로 쓴 뜻'], cells: [['과부하', ''], ['접촉 불량', ''], ['정격', '']] },
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '열을 내는 제품은 멀티탭에 ___ 꽂지 않는다.', answer: '겹쳐' },
          ],
        },
      }),
      M({
        id: 'wrap.room-selfcheck', type: 'wrap', title: '오늘 밤 내 방 전기 점검',
        method: '내 방 전기 스스로 점검', tool: 'timer', minutes: 6,
        levels: { easy: '점검 항목 3개를 스스로 표시한다.', base: '점검 항목 5개를 스스로 표시한다.', challenge: '가족이나 룸메이트와 함께 고칠 것 하나를 정해 쓴다.' },
        wrap: {
          teacher: '"오늘 밤 방에 들어가서 확인할 것을 미리 표시해 봐요. 지금 다 지키고 있지 않아도 괜찮아요. 확인할 약속을 하는 거예요." 점검 칸을 함께 읽고 표시하게 한다. "우리 집은 괜찮아서 할 게 없다"는 학생에게 "침대 옆 충전 자리를 한 번 볼까요?"라고 구체적인 한 곳을 짚어 준다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '오늘 밤 내 방 전기 점검' }, prompt: '오늘 밤 확인할 것을 스스로 표시하세요.', target: { selfCheck: ['멀티탭이 바닥 위, 물기 없는 곳에 있는지 본다', '멀티탭 먼지를 닦는다', '충전은 침구가 아닌 단단한 곳에서 한다', '안 쓰는 플러그를 뽑는다', '탄 자국·꺾인 선이 있는지 본다'] }, difficulty: 0.1 },
            { type: 'choice', prompt: '휴대전화를 충전하기에 가장 알맞은 곳은?', options: ['이불 위', '베개 밑', '책상 위 단단한 바닥'], answer: 2, difficulty: 0.1, explain: '충전 중 열이 빠져나갈 수 있는 단단한 바닥에서 충전해요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '내 방 전기 점검',
          items: [
            { type: 'check', prompt: '오늘 밤 확인한 것에 표시하세요.', options: ['멀티탭 자리', '먼지', '충전 자리', '안 쓰는 플러그', '탄 자국·꺾인 선'] },
            { type: 'short', prompt: '가족이나 룸메이트와 함께 고칠 것 하나와 언제 할지를 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 3. 실험 종류별 보호장구와 약품 사고 대처 (10학년)
  // ======================================================================================================
  {
    const M = MOD('lab-ppe', [10]);
    const FOG = { text: '산 용액을 덜어 쓰는 실험 중, 모둠원 하은이가 "김이 서려서 안 보여"라며 보호안경을 벗으려 한다.', who: '하은', motif: 'cloud', choices: [
      { id: 'ignore', text: '모른 척 내 실험을 계속한다', result: '하은이가 보호안경을 이마에 올리고 실험한다.', impact: [{ who: '하은', text: '눈이 약품에 그대로 드러난다', tone: -1 }], ending: '모른 척한 사이 위험은 모둠 전체의 것이 된다.' },
      { id: 'instead', text: '"내가 대신 할게"라며 하은이 몫까지 맡는다', result: '하은이는 보호안경을 벗은 채 옆에서 지켜본다.', impact: [{ who: '하은', text: '옆자리에서도 튄 약품에 노출된다', tone: -1 }],
        next: { text: '혼자 두 몫을 하느라 손이 바빠졌다.', choices: [
          { id: 'rush', text: '서둘러 끝낸다', result: '용액이 비커 밖으로 조금 튄다.', impact: [{ who: '모둠', text: '사고 위험이 커진다', tone: -1 }], ending: '대신 해 주는 것은 위험을 옮길 뿐 없애지 않는다.' },
          { id: 'stop', text: '멈추고 선생님을 부른다', result: '선생님이 김 서림 방지 보호안경을 건넨다.', impact: [{ who: '하은', text: '다시 안전하게 실험한다', tone: 1 }], ending: '늦었지만 멈추고 알리면 다시 안전해진다.' }] } },
      { id: 'askppe', text: '실험을 멈추고 선생님께 다른 보호안경을 요청한다', result: '선생님이 김 서림 방지 제품으로 바꿔 준다.', impact: [{ who: '하은', text: '보이고 안전하다', tone: 1 }],
        next: { text: '실험이 다시 시작됐다. 잠시 뒤 다른 모둠원이 "우리 모둠만 늦어"라고 재촉한다.', choices: [
          { id: 'hurry', text: '늦은 만큼 보호안경을 벗고 빨리 한다', result: '시간은 줄었지만 다시 위험해진다.', impact: [{ who: '모둠', text: '서두름이 수칙을 이긴다', tone: -1 }], ending: '시간을 이유로 장구를 벗는 순간 처음 결정이 무너진다.' },
          { id: 'steady', text: '수칙대로 하며 늦은 까닭을 선생님께 말한다', result: '선생님이 정리 시간을 조금 늘려 준다.', impact: [{ who: '모둠', text: '서두르지 않고 끝낸다', tone: 1 }],
            next: { text: '실험이 끝났다. 정리하던 중 하은이가 "아까 일 보고까지 해야 해?"라고 묻는다.', choices: [
              { id: 'report', text: '장구가 불편했던 일을 실험 기록에 남기자고 한다', result: '다음 반을 위해 김 서림 방지 보호안경이 더 준비된다.', impact: [{ who: '다음 반 학생들', text: '같은 불편을 겪지 않는다', tone: 1 }], ending: '불편을 기록하면 다음 실험이 더 안전해진다.' },
              { id: 'skip', text: '끝났으니 그냥 넘어간다', result: '다음 반도 같은 보호안경을 받는다.', impact: [{ who: '다음 반 학생들', text: '같은 문제가 되풀이된다', tone: -1 }], ending: '말하지 않은 불편은 다음 사람에게 넘어간다.' }] } }] } }] };
    const FOG_R = [{ id: 'eye', text: '약품이 눈에 튀면 짧은 순간에도 크게 다칠 수 있다' }, { id: 'swap', text: '불편한 장구는 벗지 말고 맞는 장구로 바꾼다' }, { id: 'glasses', text: '안경을 썼으면 보호안경은 필요 없다', why: '일반 안경은 옆과 아래로 튀는 약품을 막지 못해요.' }, { id: 'quick', text: '잠깐이면 벗어도 괜찮다', why: '사고는 그 잠깐에 일어나요.' }];

    MODS.push(
      M({
        id: 'intro.ppe-body', type: 'intro', title: '위험 요인과 몸 부위 잇기',
        method: '위험 요인과 몸 부위 잇기', tool: 'body', minutes: 6,
        levels: { easy: '약품·소음 두 요인이 해칠 부위만 함께 고른다.', base: '약품·열·날카로운 날·소음·분진이 해칠 부위를 고르고 막을 장구를 말한다.', challenge: '눈처럼 장구가 겹쳐 필요한 부위(보호안경과 보안면)를 짚는다.' },
        intro: {
          teacher: '"실험실과 실습실에는 어떤 위험이 있을까요? 약품, 열, 날카로운 날, 시끄러운 소리, 먼지… 각각 몸의 어디를 해칠까요?" 시연 단추로 종이 몸에서 눈·귀·코·피부가 골라지는 모습을 보여 주고, 부위마다 막는 장구 이름을 함께 말한다. "안경을 썼으니 눈은 괜찮다"는 말이 나오면 "일반 안경은 옆이나 아래에서 튀는 약품을 막을 수 있을까요?"라고 되묻는다.',
          student: '종이 몸에서 실험·실습의 위험 요인이 해칠 수 있는 부위를 고르고, 그 부위를 막는 보호장구를 말해 보세요.',
          demo: { tool: 'body', options: { mode: 'parts', parts: ['눈', '귀', '코', '피부', '손목', '무릎'], names: true }, sequence: [{ parts: ['눈', '귀', '코', '피부'] }] },
          art: { draw: 'a paper figure in a lab coat wearing safety goggles, ear muffs and a dust mask, with small paper icons of a flask, a flame, a saw blade and a sound wave around it', banner: '위험마다 막는 장구가 달라요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      M({
        id: 'intro.ppe-story', type: 'intro', title: '목공 선반 앞 위험한 차림',
        method: '목공 선반 작업 장면 분석', tool: 'story', minutes: 6,
        levels: { easy: '장면 두 개에서 위험한 차림을 고른다.', base: '장면 세 개를 넘겨 보며 위험한 차림을 모두 고른다.', challenge: '회전 기계 앞에서 장갑이 오히려 위험한 까닭을 설명한다.' },
        intro: {
          teacher: '"가상의 목공 실습 장면이에요. 선반이 돌아가는 앞에서 위험한 차림은 무엇일까요?" 장면을 넘기며 고르게 한 뒤 시연 단추로 정답 장면을 바구니에 담는다. "장갑을 끼면 손이 보호되잖아요"라는 말이 나오면 "돌아가는 날에 장갑 실이 걸리면 손은 어디로 끌려갈까요?"라고 되묻는다. 보호장구는 작업마다 다르게 골라야 한다는 것이 오늘의 질문이라고 밝힌다.',
          student: '가상의 목공 실습 장면을 넘겨 보며, 돌아가는 기계 앞에서 위험한 차림을 골라 보세요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '위험한 차림', title: '목공 실습실(가상)', cards: [{ id: 'sleeve', text: '소매를 걷지 않고 선반을 돌린다', motif: 'leaf' }, { id: 'glove', text: '면장갑을 낀 채 회전 날 가까이 손을 댄다', motif: 'cloud' }, { id: 'hair', text: '긴 머리를 묶고 보안경을 썼다', motif: 'sun' }], shuffle: false }, sequence: [{ pick: ['sleeve', 'glove'] }] },
          art: { draw: 'a paper wood lathe spinning in a workshop, a paper student with rolled-down sleeves and cotton gloves reaching toward it, a warning triangle cut from yellow paper', banner: '장갑이 위험할 때도 있어요', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
        },
      }),

      M({
        id: 'activity.ppe-plan', type: 'activity', title: '실습별 보호장구 계획표',
        method: '실험별 보호장구 계획표', tool: 'kitchen', minutes: 19,
        levels: { easy: '실습 두 개에 알맞은 장구 묶음을 짝짓는다.', base: '실습 네 개에 장구 묶음을 짝짓고, 장갑을 낄 작업과 벗을 작업을 나눈다.', challenge: '같은 장갑이라도 종류(내화학·내열)를 구분해야 하는 경우를 고른다.' },
        activity: {
          title: '실습마다 맞는 장구 고르기', tool: 'kitchen',
          teacher: '"산·염기 희석, 가열, 목공 절단, 납땜. 네 실습에 같은 장구를 쓰면 될까요?" 실습마다 위험 요인(튐·열·날·연기)을 먼저 말하게 한 뒤 장구를 짝짓는다. "장갑은 어떤 작업에서나 끼는 게 안전하다"는 학생에게 드릴 카드를 가리키며 "돌아가는 날 앞에서도 그럴까요?"라고 묻는다. 장갑도 막는 것이 약품인지 열인지에 따라 종류가 다르다는 점을 짚는다.',
          task: '실습마다 알맞은 보호장구를 짝짓고 장갑 판단을 나눠요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            MATCHQ('실습마다 알맞은 보호장구 묶음을 짝지으세요.', [['산·염기 희석', '보호안경·내화학 장갑·실험복'], ['비커 가열', '보호안경·실험복·내열 장갑'], ['목공 절단', '보안경·귀마개·분진 마스크'], ['납땜', '보호안경·연기 배출 장치 켜기']], { k: 2, extra: ['면장갑 하나'], d: 0.3, opt: { autoMotif: false } }),
            SORTQ('작업을 장갑을 낄 작업과 벗을 작업으로 나누세요.', ['장갑을 낀다', '장갑을 벗는다'], [
              ['산 용액 옮기기', '뜨거운 비커 옮기기', '유리 기구 세척'],
              ['드릴로 구멍 뚫기', '선반 돌리기', '탁상 그라인더 쓰기'],
            ], { k: 2, hard: [['염기 용액 덜기'], ['회전 사포기 쓰기']], d: 0.35, opt: { groups: false, autoMotif: false } }),
            PICKQ('장갑의 종류를 바르게 구분한 말만 고르세요.', ['약품을 다룰 때는 내화학 장갑을 낀다', '뜨거운 것을 잡을 때는 내열 장갑을 낀다'], ['면장갑 하나면 모든 실습에 된다', '회전 기계에도 장갑을 껴야 안전하다'], { d: 0.4, opt: { basket: '바른 구분', autoMotif: false }, more: { conclude: '보호장구는 위험 요인에 맞춰 고르고, 회전 기계 앞에서는 장갑을 벗어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '실습마다 위험 요인과 보호장구를 쓰세요.', columns: ['실습', '위험 요인', '보호장구'], cells: [['산·염기 희석', '', ''], ['목공 절단', '', ''], ['납땜', '', '']] }] },
        notes: '학교 실험실에 실제로 갖춘 장구 이름으로 바꿔 말해도 된다. 장갑 판단은 학교 실습 지침을 함께 확인한다.',
      }),
      M({
        id: 'activity.ppe-dilemma', type: 'activity', title: '김 서린 보호안경 갈림길',
        method: '보호안경이 불편한 친구 갈림길', tool: 'dilemma', minutes: 19,
        levels: { easy: '갈림길 하나에서 고르고 근거를 고른다.', base: '갈림길 둘을 지나 결과를 보고 근거를 고른다.', challenge: '갈림길 셋, 실험이 끝날 때까지 결과를 추적하고 다른 길과 견준다.' },
        activity: {
          title: '보호안경 벗으려는 친구', tool: 'dilemma',
          teacher: '"김이 서려서 안 보인다는 친구의 말은 사실이에요. 그럼 벗어야 할까요?" 선택을 고를 때마다 하은이에게 어떤 영향이 가는지 읽게 한다. \'대신 해 준다\'를 고르는 학생에게 "하은이는 여전히 실험대 옆에 있나요? 보호안경은요?"라고 묻는다. 불편한 장구는 벗는 것이 아니라 맞는 장구로 바꾸는 것이라는 점을 짚는다.',
          task: '갈림길을 따라 실험이 끝날 때까지 결과를 보고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('보호안경이 불편한 모둠원을 두고 안전한 길을 고르고 근거를 고르세요.', FOG, [['askppe', 'steady', 'report']], FOG_R, ['eye', 'swap'], { d: 0.4 }),
            EXPLOREQ('\'대신 해 준다\' 길도 끝까지 가 보고, 처음 고른 길과 결과를 견주세요.', FOG, FOG_R, ['대신 해 주는 길의 결과를 확인했다', '하은이와 모둠에 생긴 영향을 견주었다'], { d: 0.35 }),
            DILQ('실험복 소매를 걷어 올린 친구에게 알맞은 길을 고르고 근거를 고르세요.', { text: '가열 실험 중 모둠원이 덥다며 실험복 소매를 팔꿈치까지 걷어 올렸다.', who: '모둠원', motif: 'sun', choices: [
              { id: 'leave', text: '덥다니 그냥 둔다', result: '맨팔이 뜨거운 비커 가까이 오간다.', impact: [{ who: '모둠원', text: '데일 위험이 커진다', tone: -1 }], ending: '불편함을 이유로 장구를 줄이면 다치는 쪽은 맨살이다.' },
              { id: 'tell', text: '소매를 내리자고 말하고 쉬는 시간을 제안한다', result: '모둠원이 소매를 내리고 잠깐 물을 마시고 온다.', impact: [{ who: '모둠원', text: '더위도 덜고 안전하다', tone: 1 }],
                next: { text: '모둠원이 "그래도 너무 더워"라고 한다.', choices: [
                  { id: 'teacher', text: '선생님께 환기·휴식을 함께 요청한다', result: '창문을 열고 실험 순서를 조정한다.', impact: [{ who: '모둠', text: '모두 안전하게 끝낸다', tone: 1 }], ending: '불편은 장구를 벗어서가 아니라 환경을 바꿔서 줄인다.' },
                  { id: 'roll', text: '조금만 걷어 올리자고 한다', result: '손목 위 맨살이 다시 드러난다.', impact: [{ who: '모둠원', text: '위험이 다시 생긴다', tone: -1 }], ending: '조금 걷은 소매도 열과 약품을 막지 못한다.' }] } }] },
              [['tell', 'teacher']], [{ id: 'skin', text: '실험복은 열과 튄 약품에서 맨살을 막는다' }, { id: 'env', text: '불편은 환기·휴식으로 줄인다' }, { id: 'hot', text: '더우면 장구를 벗어도 된다', why: '더위는 다른 방법으로 덜고 장구는 지켜요.' }], ['skin', 'env'], { d: 0.35, more: { conclude: '보호장구가 불편하면 벗지 말고, 맞는 장구나 환경을 바꿔 달라고 요청해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '보호장구가 불편하다는 친구에게 할 말을, 대안을 넣어 한 문장으로 쓰세요.' }] },
      }),
      M({
        id: 'activity.splash-order', type: 'activity', title: '약품이 튀었을 때 차례',
        method: '약품이 튄 순간부터 보고까지', tool: 'timeline', minutes: 19,
        levels: { easy: '손등 상황 하나에서 카드 3장을 차례로 놓는다.', base: '손등·눈 두 상황에서 카드 5장씩 차례로 놓고, 두 상황의 차이를 나눈다.', challenge: '함정 카드를 남긴 까닭과, 약품 이름·물질 정보를 확인해 알려야 하는 까닭을 덧붙인다.' },
        activity: {
          title: '튄 순간부터 보고까지', tool: 'timeline',
          teacher: '"약품이 손등에 튀었어요. 눈에 튀었다면 무엇이 달라질까요?" 두 상황의 카드를 놓은 뒤 세 번째 문항에서 차이를 나눈다. "작은 튐은 보고하지 않아도 된다"는 학생에게 "보고서가 없으면 다음 반은 무엇을 모른 채 같은 실험을 할까요?"라고 묻는다. 씻기는 짧게 끝내지 않고 흐르는 물로 충분히, 그리고 알리기는 가장 먼저라는 점을 짚는다.',
          task: '상황마다 행동 카드를 차례로 놓고 두 상황을 견주어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDERQ('산 용액이 손등에 튀었어요. 행동 카드를 차례로 놓으세요.', ['멈추고 선생님께 알린다', '흐르는 물로 충분히 씻는다', '젖은 장갑·옷을 벗는다', '보건실에 간다', '사고 보고서를 쓴다'], { k: 3, traps: ['휴지로 문질러 닦는다'], d: 0.3 }),
            ORDERQ('용액이 눈에 튀었어요. 행동 카드를 차례로 놓으세요.', ['"눈에 튀었어요" 크게 알린다', '도움을 받아 세안기로 간다', '눈을 뜬 채 흐르는 물로 오래 씻는다', '보건실·병원으로 간다', '사고 보고서를 쓴다'], { k: 3, traps: ['눈을 손으로 비빈다'], d: 0.35 }),
            SORTQ('두 상황의 행동을 손등일 때·눈일 때·둘 다로 나누세요.', ['손등일 때', '눈일 때', '둘 다'], [
              ['젖은 장갑을 벗는다'], ['세안기로 간다', '눈을 뜬 채 씻는다'], ['먼저 크게 알린다', '흐르는 물로 충분히 씻는다', '사고 보고서를 쓴다'],
            ], { k: 1, traps: ['문질러 닦는다'], d: 0.4, more: { conclude: '어디에 튀었든 알리기·충분히 씻기·보고는 같고, 눈은 세안기로 가는 것이 달라요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '약품이 튀었을 때 약품 이름과 물질 정보를 함께 알려야 하는 까닭을 쓰세요.' }] },
      }),
      M({
        id: 'activity.report-writing', type: 'activity', title: '실험 사고 보고서 쓰기',
        method: '실험 사고 보고서 쓰고 점검', tool: 'rubric-writing', minutes: 19,
        levels: { easy: '칸마다 문장 틀을 보고 쓴다.', base: '경위·조치·재발 방지를 쓰고 기준표로 점검한다.', challenge: '칸마다 기준 하나가 더 붙고, 재발 방지책을 실험실 규칙 제안으로 바꾼다.' },
        activity: {
          title: '가상 사고 보고서 쓰기', tool: 'rubric-writing',
          teacher: '"가상의 사고예요. 화요일 3교시 과학실, 염기 용액을 덜다가 모둠원 손등에 튀었어요. 보고서는 누구를 탓하려고 쓰는 걸까요?" 보고서는 사실만, 일어난 순서대로, 다음 사고를 막는 방법까지 쓰는 글이라는 점을 먼저 말한다. "누가 덜렁대서"처럼 사람을 탓하는 문장을 쓴 학생에게 "그 문장을 읽은 다음 반은 무엇을 바꿀 수 있을까요?"라고 묻는다. 실제 인물 이름 대신 \'모둠원 A\'처럼 쓰게 한다.',
          task: '가상 사고를 보고서 칸에 맞춰 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('사고 경위를 일어난 순서대로 2~3문장으로 쓰세요.', '가상 사고: 화요일 3교시 과학실, 염기 용액을 덜다가 모둠원 A의 손등에 튀었다. 경위를 쓰세요.', ['사실만 썼다(짐작·탓하는 말 없음)', '일어난 순서대로 썼다', '사람 이름 대신 모둠원 A처럼 썼다'], { min: 40, max: 300, sent: [2, 3], must: [['덜', '옮기']], starter: '3교시에 모둠원 A가 ~을 덜다가 ~', plus: '언제·어디서·무엇을 하다가를 모두 넣었다', d: 0.35 }),
            RWQ('사고 직후 한 조치를 차례대로 2~3문장으로 쓰세요.', '사고 직후 모둠과 선생님이 한 조치를 차례대로 쓰세요.', ['알리기·씻기·보건실 차례가 드러난다', '씻은 방법(흐르는 물, 충분히)을 썼다', '한 일만 썼다'], { min: 40, max: 300, sent: [2, 3], must: [['물', '씻']], starter: '먼저 선생님께 알리고, ~', plus: '조치마다 누가 했는지 썼다', d: 0.35 }),
            RWQ('재발 방지책을 구체적으로 2~3문장으로 쓰세요.', '같은 사고가 다시 나지 않도록 할 방법을 쓰세요.', ['누가·언제 할지 구체적이다', '사고 원인과 이어진다', '실험실에서 실제로 할 수 있다'], { min: 40, max: 300, sent: [2, 3], must: [['보호', '장갑', '안경', '규칙']], starter: '앞으로 용액을 덜 때는 ~', plus: '실험실 규칙 제안 한 줄로 바꾸어 썼다', d: 0.4, more: { conclude: '사고 보고서는 누구를 탓하는 글이 아니라 다음 사고를 막는 글이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '보고서 칸을 정리하세요.', columns: ['칸', '쓸 내용'], cells: [['일시·장소', ''], ['경위', ''], ['조치', ''], ['재발 방지', '']] }] },
        notes: '실제 학생이 다친 일을 사례로 쓰지 않는다. 가상의 사고만 다룬다.',
      }),

      M({
        id: 'wrap.ppe-sort', type: 'wrap', title: '바른 착용·잘못된 착용',
        method: '착용 순서와 잘못된 착용 가르기', tool: 'mindmap', minutes: 6,
        levels: { easy: '착용 장면 카드 4장을 나눈다.', base: '착용 장면 카드 6장을 나누고 고칠 말을 고른다.', challenge: '잘못된 착용을 고칠 말을 직접 쓴다.' },
        wrap: {
          teacher: '"오늘 본 장면을 떠올리며, 바르게 쓴 것과 잘못 쓴 것을 나눠 봐요." 카드를 나눈 뒤 잘못된 착용 하나를 골라 고칠 말을 함께 말한다. "보호안경을 이마에 올려도 쓴 것"이라는 학생에게 "약품은 이마로 튀나요, 눈으로 튀나요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '보호장구 착용', slots: ['바른 착용', '잘못된 착용'], cards: ['보호안경을 눈에 맞게 쓴다', '보호안경을 이마에 올린다', '실험복 단추를 모두 잠근다', '실험복 소매를 걷어 올린다', '긴 머리를 묶는다', '회전 기계 앞에서 면장갑을 낀다'] }, prompt: '착용 장면을 바른 착용과 잘못된 착용으로 나누세요.', target: { sort: { '바른 착용': ['보호안경을 눈에 맞게 쓴다', '실험복 단추를 모두 잠근다', '긴 머리를 묶는다'], '잘못된 착용': ['보호안경을 이마에 올린다', '실험복 소매를 걷어 올린다', '회전 기계 앞에서 면장갑을 낀다'] } }, difficulty: 0.2 },
            { type: 'choice', prompt: '"소매를 걷어 올린다"를 고칠 말로 알맞은 것은?', options: ['더우니 그대로 둔다', '소매를 내리고 단추를 잠근다', '장갑을 하나 더 낀다'], answer: 1, difficulty: 0.15, explain: '실험복은 소매를 내리고 단추를 잠가야 맨살을 막아요.' },
            { type: 'short', prompt: '잘못된 착용 하나를 골라 고칠 말을 쓰세요.' },
          ],
        },
        worksheet: {
          title: '보호장구 바른 착용',
          items: [
            { type: 'table', prompt: '잘못된 착용을 고칠 말을 쓰세요.', columns: ['잘못된 착용', '고칠 말'], cells: [['보호안경을 이마에 올림', ''], ['회전 기계 앞 면장갑', '']] },
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '보호장구가 불편하면 벗지 말고 ___ 장구로 바꿔 달라고 한다.', answer: '맞는' },
          ],
        },
      }),
      M({
        id: 'wrap.lab-check', type: 'wrap', title: '다음 실습 전 내 점검',
        method: '실습 전 보호장구 스스로 점검', tool: 'timer', minutes: 6,
        levels: { easy: '점검 항목 3개를 스스로 표시한다.', base: '점검 항목 5개를 스스로 표시한다.', challenge: '내 실습 과목에 맞는 점검 항목을 하나 더해 쓴다.' },
        wrap: {
          teacher: '"다음 실습 시간, 실험대에 서기 전에 무엇을 확인할까요?" 점검 칸을 함께 읽고 표시하게 한다. "세안기 위치는 선생님이 아시니까 몰라도 된다"는 학생에게 "눈에 튀었을 때 눈을 감은 채 찾아가야 할 곳은 누가 알고 있어야 할까요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '다음 실습 전 점검' }, prompt: '다음 실습 전에 확인할 것을 스스로 표시하세요.', target: { selfCheck: ['보호장구가 깨지거나 헐거운 곳이 없는지 본다', '긴 머리를 묶는다', '소매를 내리고 실험복 단추를 잠근다', '세안기·비상 샤워기 위치를 확인한다', '오늘 쓸 약품 이름을 확인한다'] }, difficulty: 0.1 },
            { type: 'choice', prompt: '실습 전 점검으로 알맞지 않은 것은?', options: ['세안기 위치 확인', '보호안경 상태 확인', '실습이 빨리 끝나는지 확인'], answer: 2, difficulty: 0.1, explain: '점검은 내 몸을 지키는 장구와 설비를 확인하는 일이에요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '실습 전 내 점검',
          items: [
            { type: 'check', prompt: '다음 실습 전에 확인할 것에 표시하세요.', options: ['장구 상태', '머리 묶기', '소매·단추', '세안기 위치', '약품 이름'] },
            { type: 'short', prompt: '내 실습 과목(과학·기술·조리 등)에 맞는 점검 항목 하나를 더 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 4. 경기 중 부상 판단과 온열질환 대처 (10학년)
  // ======================================================================================================
  {
    const M = MOD('sports-injury', [10]);
    const FINGER = { text: '반 대항 배구 결승전 3세트. 블로킹하다 손가락을 다쳤는데 점점 붓는다. 친구들이 "너 없으면 진다"고 한다.', who: '도윤', motif: 'ball', choices: [
      { id: 'tape', text: '테이프를 감고 끝까지 뛴다', result: '경기는 이겼지만 손가락이 더 부어 굽혀지지 않는다.', impact: [{ who: '도윤', text: '부상이 커진다', tone: -1 }],
        next: { text: '일주일 뒤에도 손가락이 아파 필기가 힘들다.', choices: [
          { id: 'hide', text: '참고 지낸다', result: '통증이 오래 간다.', impact: [{ who: '도윤', text: '회복이 늦어진다', tone: -1 }], ending: '참으면 지나간다고 믿는 사이 회복할 때를 놓친다.' },
          { id: 'clinic', text: '늦게라도 병원에 간다', result: '처음보다 치료가 길어진다는 말을 듣는다.', impact: [{ who: '도윤', text: '이제라도 치료받는다', tone: 0 }], ending: '늦게라도 알리는 것이 낫지만, 처음 멈췄다면 더 짧게 끝났다.' }] } },
      { id: 'sub', text: '교체를 요청하고 보건실에 간다', result: '보건 선생님이 손가락을 고정하고 차게 해 준다.', impact: [{ who: '도윤', text: '부상이 더 커지지 않는다', tone: 1 }, { who: '팀', text: '한 명이 빠져 불리해진다', tone: -1 }],
        next: { text: '팀이 아쉽게 졌다. 한 친구가 "조금만 참지"라고 한다.', choices: [
          { id: 'explain', text: '부상을 키우면 더 오래 못 뛴다고 말한다', result: '주장이 "다음엔 교체 선수를 미리 정하자"고 한다.', impact: [{ who: '팀', text: '다음 경기 준비가 생긴다', tone: 1 }],
            next: { text: '일주일 뒤, 손가락이 거의 나아 다음 경기에 나설 수 있다.', choices: [
              { id: 'warm', text: '준비운동을 하고 테이핑을 확인한 뒤 뛴다', result: '다시 다치지 않고 경기를 마친다.', impact: [{ who: '도윤', text: '건강하게 돌아온다', tone: 1 }], ending: '멈춘 한 경기가 다음 경기들을 지켜 준다.' },
              { id: 'rush', text: '준비운동 없이 바로 뛴다', result: '나은 손가락이 다시 시큰거린다.', impact: [{ who: '도윤', text: '다시 다칠 위험이 생긴다', tone: -1 }], ending: '돌아올 때도 몸을 살피는 단계가 필요하다.' }] } },
          { id: 'sorry', text: '미안하다며 다음엔 참겠다고 한다', result: '다음 경기에서 아파도 말하지 못하게 된다.', impact: [{ who: '도윤', text: '부상을 숨기는 습관이 생긴다', tone: -1 }], ending: '부상을 미안해할 일로 만들면 다음 부상은 숨겨진다.' }] } },
      { id: 'rest', text: '잠깐 쉬었다가 다시 들어간다', result: '쉬는 동안 붓기가 가라앉는 듯하다 다시 아파진다.', impact: [{ who: '도윤', text: '부상 정도를 모른 채 뛴다', tone: -1 }], ending: '잠깐 쉬기는 판단을 미룰 뿐, 다친 곳을 확인해 주지 않는다.' }] };
    const FINGER_R = [{ id: 'bigger', text: '다친 뒤 계속 뛰면 부상이 커진다' }, { id: 'check', text: '부상 정도는 보건 선생님 같은 어른이 확인해야 한다' }, { id: 'bone', text: '뼈가 부러지지 않았으면 뛰어도 된다', why: '삐거나 인대를 다쳐도 계속 쓰면 오래 낫지 않아요.' }, { id: 'team', text: '팀이 이기는 것이 몸보다 먼저다', why: '한 경기보다 내 몸이 더 오래 남아요.' }];

    MODS.push(
      M({
        id: 'intro.finger-dilemma', type: 'intro', title: '결승전 손가락 부상 갈림길',
        method: '배구 중 손가락 부상 갈림길', tool: 'dilemma', minutes: 6,
        levels: { easy: '첫 갈림길에서 고른 결과까지만 본다.', base: '두 번째 갈림길까지 가 보고 근거를 말한다.', challenge: '주장의 입장에서 같은 상황을 다시 골라 본다.' },
        intro: {
          teacher: '"결승전에서 손가락을 다쳤어요. 친구들은 \'너 없으면 진다\'고 해요. 여러분이라면?" 손을 들어 선택을 표시하게 한 뒤 시연 단추로 \'교체 요청\' 길이 일주일 뒤까지 이어지는 모습을 보여 준다. "뼈만 안 부러지면 뛰어도 된다"는 말이 나오면 "붓고 굽혀지지 않는 손가락을 계속 쓰면 일주일 뒤에는 어떻게 될까요?"라고 되묻는다. 오늘은 경기를 멈출 때를 판단하는 기준을 세운다고 밝힌다.',
          student: '도윤이가 되어 결승전에서 손가락을 다친 순간 어떻게 할지 고르고, 일주일 뒤 결과까지 따라가 보세요.',
          demo: { tool: 'dilemma', options: { scene: cut(FINGER, 2), reasons: FINGER_R, title: '결승전 3세트' }, sequence: [{ path: ['sub', 'explain'], reasons: ['bigger'] }] },
          art: { draw: 'a paper volleyball court with a net, a paper player holding an injured finger near the sideline while teammates call out, a bench and a first aid box nearby', banner: '멈출까, 계속 뛸까?', extra: [{ motif: 'ball', x: 300, y: 96 }] },
        },
      }),
      M({
        id: 'intro.heat-emotion', type: 'intro', title: '"괜찮아"라는 친구의 마음',
        method: '더위 신호를 숨기는 친구 마음', tool: 'emotion', minutes: 6,
        levels: { easy: '친구의 마음 카드 두 장만 고른다.', base: '친구의 마음과 위험 신호를 나눠 고른다.', challenge: '친구가 말하기 쉽게 하는 말을 한 문장 만든다.' },
        intro: {
          teacher: '"운동장 수업 중에 친구가 얼굴이 하얗게 질렸는데 \'괜찮아\'라고 해요. 정말 괜찮은 걸까요?" 시연 단추로 친구의 마음 카드와 몸의 신호 카드가 나뉘는 모습을 보여 준다. "더위 먹은 건 쉬면 저절로 낫는다"는 말이 나오면 "땀이 멈추고 말이 어눌해지면 쉬기만 해도 될까요?"라고 되묻는다. 친구가 숨기는 마음을 알아야 신호를 먼저 알아챌 수 있다는 점을 짚는다.',
          student: '어지러운데 "괜찮아"라고 말하는 친구의 그림을 보고, 친구의 마음과 몸이 보내는 위험 신호를 나누어 보세요.',
          demo: { tool: 'emotion', options: { mode: 'sort', slots: ['친구의 마음', '몸의 위험 신호'], cards: [{ id: 'shy', text: '눈치 보임' }, { id: 'sorry', text: '미안함' }, { id: 'dizzy', text: '어지러움' }, { id: 'head', text: '머리가 아픔' }, { id: 'sweat', text: '땀이 멈춤' }, { id: 'worry', text: '걱정' }], shuffle: false }, sequence: [{ sort: { '친구의 마음': ['shy', 'sorry', 'worry'], '몸의 위험 신호': ['dizzy', 'head', 'sweat'] } }] },
          art: { draw: 'a hot paper sun over a school field, a paper student with a pale face waving "I am fine" while a friend looks concerned, a shady tree on the side', banner: '"괜찮아" 뒤의 신호', extra: [{ motif: 'sun', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),

      M({
        id: 'activity.stop-judge', type: 'activity', title: '부상 장면마다 중단 판단',
        method: '부상 장면마다 경기 중단 판단표', tool: 'mindmap', minutes: 19,
        levels: { easy: '부상 장면 카드 6장을 즉시 중단·잠시 확인·계속 가능으로 나눈다.', base: '카드 9장을 나누고, 머리 충돌을 즉시 중단으로 둔 근거와 추가 정보에 따른 판단을 고른다.', challenge: '헷갈리는 카드 3장이 더해지고, 활동지에 판단을 바꾸는 추가 정보를 쓴다.' },
        activity: {
          title: '경기 중단 판단표', tool: 'mindmap',
          teacher: '"다친 장면을 보고 바로 멈출지, 잠시 확인할지, 계속해도 될지 판단해 봐요. 판단은 심판이 아니라 여러분 몫일 때도 많아요." 카드를 놓을 때마다 "그렇게 본 근거는 무엇인가요?"라고 묻는다. 머리 충돌을 \'계속 가능\'에 두는 학생에게 "피가 안 나도 나중에 어지럽거나 토할 수 있다면, 누가 그 친구를 지켜봐야 할까요?"라고 묻는다. 같은 부상도 추가 정보(붓기·움직임·의식)에 따라 판단이 바뀐다는 점을 짚는다.',
          task: '부상 장면 카드를 판단 칸에 나누고 근거를 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('부상 장면 카드를 즉시 중단·잠시 확인·계속 가능 칸에 나누세요.', ['즉시 중단', '잠시 확인', '계속 가능'], [
              ['머리끼리 세게 부딪힘', '발목이 꺾여 디딜 수 없음', '숨쉬기가 힘들다고 함', '팔이 이상한 모양으로 굽음'],
              ['손가락을 삠', '코피가 남', '넘어져 무릎이 조금 까짐'],
              ['물 마시고 숨 고른 뒤 괜찮음', '신발 끈이 풀림'],
            ], { k: 2, hard: [['넘어진 뒤 멍하니 질문에 답을 못함'], ['공에 맞아 얼굴이 빨개짐'], ['다리에 잠깐 쥐가 났다 풀림']], d: 0.35, opt: { topic: '경기 중단 판단' } }),
            PICKQ('\'머리끼리 세게 부딪힘\'을 즉시 중단으로 판단하는 근거만 고르세요.', ['겉으로 멀쩡해도 나중에 증상이 나타날 수 있다', '어지러움·구토가 생기는지 어른이 지켜봐야 한다'], ['피가 안 나면 괜찮다', '본인이 괜찮다고 하면 계속해도 된다'], { d: 0.35, opt: { basket: '근거' } }),
            MATCHQ('추가 정보가 붙은 장면마다 판단을 짝지으세요.', [['손가락을 삐었는데 붓고 굽혀지지 않음', '즉시 중단'], ['코피가 났다가 눌러 주니 금방 멈춤', '잠시 확인'], ['숨 고르고 나니 어지럽지 않고 잘 걸음', '계속 가능']], { k: 3, d: 0.4, opt: { topic: '판단 바꾸기' }, more: { conclude: '같은 부상도 붓기·움직임·의식 같은 정보에 따라 판단이 달라지고, 애매하면 멈추고 어른에게 확인받아요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '\'잠시 확인\'으로 둔 장면 하나를 골라, 어떤 정보가 더 있으면 \'즉시 중단\'으로 바꿀지 쓰세요.' }] },
      }),
      M({
        id: 'activity.injury-body', type: 'activity', title: '부위별 첫 대처 고르기',
        method: '부위별 첫 대처 고르기', tool: 'body', minutes: 19,
        levels: { easy: '고른 부위 이름이 바로 보이고, 부위와 첫 대처를 함께 고른다.', base: '이름 표시 없이 다친 부위를 찾고 첫 대처를 고른다.', challenge: '이름 표시 없이 풀고, 119·보건실로 넘길 상황(머리·목)의 까닭을 짝에게 설명한다.' },
        activity: {
          title: '다친 곳과 첫 대처', tool: 'body',
          teacher: '"다친 곳을 정확히 짚어야 첫 대처도 맞게 고를 수 있어요." 장면을 읽고 종이 몸에서 다친 부위를 누른 뒤 첫 대처를 고르게 한다. 발목을 접질린 친구에게 "걸어 보게 한다"를 고른 학생에게 "다친 곳에 몸무게를 실으면 어떻게 될까요?"라고 묻는다. 머리·목을 다쳤을 때는 함부로 일으키지 않고 어른과 119를 부르는 것이 첫 대처라는 점을 짚는다. 자세한 응급처치는 응급처치 영역 수업과 이어진다고 말해 준다.',
          task: '장면을 읽고 다친 부위를 누른 뒤 첫 대처를 골라요.', levels: { easy: { names: true }, base: {}, challenge: {} },
          items: [
            { prompt: '농구 중 착지하다 발목을 접질렸어요. 다친 부위를 누르고 첫 대처를 고르세요.', toolOptions: { mode: 'parts', parts: ['발목', '무릎', '손목', '목', '허리'], ask: { q: '첫 대처로 알맞은 것은?', choices: ['움직이지 않게 하고 차게 한 뒤 알린다', '바로 주물러 푼다', '걸어 보게 한다'], why: ['', '다친 곳을 주무르면 더 부을 수 있어요.', '다친 곳에 몸무게를 실으면 부상이 커져요.'] } }, target: { parts: ['발목'], pick: 0 }, difficulty: 0.25 },
            { prompt: '공을 받다 손목이 꺾여 붓기 시작했어요. 다친 부위를 누르고 첫 대처를 고르세요.', toolOptions: { mode: 'parts', parts: ['발목', '무릎', '손목', '목', '팔꿈치'], ask: { q: '첫 대처로 알맞은 것은?', choices: ['계속 써서 풀어 준다', '움직이지 않게 받치고 차게 한다', '뜨거운 물에 담근다'], why: ['다친 곳을 계속 쓰면 붓기가 커져요.', '', '다친 직후에는 차게 해요.'] } }, target: { parts: ['손목'], pick: 1 }, difficulty: 0.3 },
            { prompt: '헤딩 경합에서 넘어져 목을 아파하며 일어나지 못해요. 다친 부위를 누르고 첫 대처를 고르세요.', toolOptions: { mode: 'parts', parts: ['목', '허리', '어깨', '무릎', '발목'], ask: { q: '첫 대처로 알맞은 것은?', choices: ['일으켜 세워 걷게 한다', '움직이지 않게 하고 어른과 119를 부른다', '물을 먹인다'], why: ['머리·목을 다쳤을 때 움직이면 더 크게 다칠 수 있어요.', '', '먼저 움직이지 않게 하고 도움을 불러요.'] } }, target: { parts: ['목'], pick: 1 }, difficulty: 0.4 },
            { prompt: '넘어져 무릎이 까지고 피가 조금 나요. 다친 부위를 누르고 첫 대처를 고르세요.', toolOptions: { mode: 'parts', parts: ['무릎', '발목', '허벅지', '손목', '허리'], ask: { q: '첫 대처로 알맞은 것은?', choices: ['흙을 털고 계속 뛴다', '침을 바른다', '깨끗한 물로 씻고 덮은 뒤 알린다'], why: ['상처에 흙이 남으면 덧날 수 있어요.', '침은 상처를 더럽혀요.', ''] } }, target: { parts: ['무릎'], pick: 2 }, difficulty: 0.25, conclude: '다친 곳은 움직이지 않고, 차게 하거나 깨끗이 하고, 반드시 알려요. 머리·목은 일으키지 말고 도움을 불러요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '부위마다 첫 대처를 쓰세요.', columns: ['다친 곳', '첫 대처'], cells: [['발목', ''], ['손목', ''], ['머리·목', '']] }] },
      }),
      M({
        id: 'activity.heat-order', type: 'activity', title: '쓰러진 친구 돕는 차례',
        method: '쓰러진 친구 돕는 차례', tool: 'timeline', minutes: 19,
        levels: { easy: '행동 카드 3장을 차례로 놓는다.', base: '카드 6장을 차례로 놓고, 세 사람이 맡을 역할을 나눈다.', challenge: '함정 카드(억지로 물 먹이기)를 남긴 까닭을 설명하고, 해야 할 일·하면 안 될 일을 가른다.' },
        activity: {
          title: '쓰러진 친구 돕는 차례', tool: 'timeline',
          teacher: '"운동장에서 친구가 쓰러졌어요. 혼자 다 하려 하지 말고, 차례와 역할을 정해 봐요." 첫 문항을 놓은 뒤 세 명이 한 모둠이 되어 역할을 나눠 맡게 한다. "물을 많이 먹이면 낫는다"는 학생에게 "말을 제대로 못 하는 친구가 물을 삼키다 사레가 들리면 어떻게 될까요?"라고 묻는다. 의식이 흐리면 먹이기보다 식히고 119를 부르는 것이 먼저라는 점을 짚는다.',
          task: '쓰러진 친구를 돕는 행동을 차례로 놓고 역할을 나눠요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDERQ('더운 날 운동장에서 친구가 쓰러졌어요. 행동 카드를 차례로 놓으세요.', ['말을 걸어 의식을 확인한다', '주변 어른을 크게 부른다', '119에 신고한다', '그늘로 옮긴다', '옷을 느슨하게 한다', '물수건·부채로 몸을 식힌다'], { k: 3, traps: ['의식이 흐린데 물을 억지로 먹인다'], d: 0.35 }),
            SORTQ('세 사람이 맡을 일을 역할 칸에 나누세요.', ['119 신고', '어른 모셔 오기', '곁에서 돌보기'], [
              ['119에 장소와 상태를 알린다', '정문에서 구급차를 안내한다'], ['체육 선생님께 달려간다', '보건 선생님을 모셔 온다'], ['그늘에서 옷을 느슨하게 한다', '말을 걸며 의식을 계속 본다'],
            ], { k: 1, d: 0.3 }),
            SORTQ('더위로 쓰러진 친구를 도울 때 해야 할 일과 하면 안 될 일을 나누세요.', ['해야 할 일', '하면 안 될 일'], [
              ['몸을 식힌다', '119와 어른에게 알린다', '곁을 떠나지 않는다'], ['의식이 흐린데 물을 억지로 먹인다', '햇볕 아래 그대로 눕혀 둔다', '혼자 업고 멀리 옮긴다'],
            ], { k: 2, d: 0.3, more: { conclude: '쓰러진 친구는 그늘로 옮겨 식히고, 119와 어른에게 알리며, 의식이 흐리면 억지로 먹이지 않아요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '\'의식이 흐린데 물을 억지로 먹인다\'가 함정인 까닭을 쓰세요.' }] },
      }),
      M({
        id: 'activity.heat-chart', type: 'activity', title: '보건실 방문 기록 해석',
        method: '가상의 학교 보건실 방문 기록 해석', tool: 'chart', minutes: 19,
        levels: { easy: '점 위에 값이 보이고, 가장 높은 달부터 찾는다.', base: '값 표시 없이 늘어나는 경향을 읽고 체육대회 시기를 제안한다.', challenge: '기록의 한계(가상 자료·보건실에 가지 않은 학생)를 짚는 문항까지 근거를 들어 푼다.' },
        activity: {
          title: '더위 관련 방문 꺾은선 읽기', tool: 'chart',
          teacher: '"가상의 학교 보건실 기록이에요. 더위 때문에 보건실에 온 학생 수가 달마다 어떻게 바뀌나요?" 꺾은선을 읽은 뒤 체육대회 날짜와 수업 시간 조정을 제안하게 한다. "기록에 없는 달은 괜찮은 달"이라는 학생에게 "보건실에 가지 않고 참은 학생은 이 그래프 어디에 있을까요?"라고 묻는다. 자료는 판단의 근거가 되지만, 자료가 말하지 못하는 것도 함께 따져야 한다는 점을 짚는다.',
          task: '가상의 보건실 기록 꺾은선을 읽고 제안해요.', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            { prompt: '가상 기록에서 더위 관련 보건실 방문이 가장 많은 달을 고르세요.', toolOptions: { type: 'line', mode: 'read', title: '더위 관련 보건실 방문(가상)', unit: '명', xLabel: '달', yLabel: '방문 학생 수', data: [['4월', 2], ['5월', 6], ['6월', 14], ['7월', 20], ['9월', 12], ['10월', 4]], question: '가장 많은 달은?', choices: ['5월', '6월', '7월', '9월'] }, target: { pick: 2 }, difficulty: 0.15 },
            { prompt: '6월에서 7월로 가며 방문 학생은 몇 명 늘었나요?', toolOptions: { type: 'line', mode: 'read', title: '더위 관련 보건실 방문(가상)', unit: '명', xLabel: '달', yLabel: '방문 학생 수', data: [['4월', 2], ['5월', 6], ['6월', 14], ['7월', 20], ['9월', 12], ['10월', 4]], question: '6월→7월 늘어난 수는?' }, target: { value: 6 }, difficulty: 0.3 },
            { prompt: '보기의 달 가운데, 기록으로 보아 체육대회를 열기에 가장 알맞은 달을 고르세요.', toolOptions: { type: 'line', mode: 'read', title: '더위 관련 보건실 방문(가상)', unit: '명', xLabel: '달', yLabel: '방문 학생 수', data: [['4월', 2], ['5월', 6], ['6월', 14], ['7월', 20], ['9월', 12], ['10월', 4]], question: '체육대회에 알맞은 달은?', choices: ['6월', '7월', '9월', '10월'], why: ['6월은 방문이 크게 늘어나는 달이에요.', '7월은 방문이 가장 많은 달이에요.', '9월도 아직 방문이 많아요.', ''] }, target: { pick: 3 }, difficulty: 0.35 },
            { prompt: '이 가상 기록만으로는 알 수 없는 것을 고르세요.', toolOptions: { type: 'line', mode: 'read', title: '더위 관련 보건실 방문(가상)', unit: '명', xLabel: '달', yLabel: '방문 학생 수', data: [['4월', 2], ['5월', 6], ['6월', 14], ['7월', 20], ['9월', 12], ['10월', 4]], question: '이 기록으로 알 수 없는 것은?', choices: ['방문이 가장 많은 달', '보건실에 가지 않고 참은 학생 수', '6월과 9월 중 어느 달이 더 많은지'], why: ['꺾은선의 가장 높은 점으로 알 수 있어요.', '', '두 점의 높이로 견줄 수 있어요.'] }, target: { pick: 1 }, difficulty: 0.4, conclude: '기록은 보건실에 온 학생만 셉니다. 참은 학생까지 생각하면 더운 달의 위험은 그래프보다 클 수 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '그래프를 근거로 체육 수업 시간이나 체육대회 날짜를 어떻게 바꿀지 한 문장으로 제안하세요.' }] },
        notes: '자료는 가상이다. 우리 학교의 실제 보건실 기록을 쓰려면 개인을 알아볼 수 없는 합계만 보건 선생님께 받는다.',
      }),

      M({
        id: 'wrap.injury-words', type: 'wrap', title: '부상 대처 원칙 낱말',
        method: '부상 대처 원칙 낱말 정리', tool: 'wordcards', minutes: 6,
        levels: { easy: '낱말 3개를 장면과 짝짓는다.', base: '낱말 5개를 장면과 짝짓는다.', challenge: '낱말을 넣어 원칙 문장 두 개를 만든다.' },
        wrap: {
          teacher: '"오늘 배운 부상 대처를 낱말 다섯 개로 줄여 볼까요? 멈추기, 움직이지 않기, 차게, 식히기, 알리기." 장면과 짝지은 뒤 두 낱말을 넣은 원칙 문장을 말하게 한다. "알리기는 마지막에 해도 된다"는 학생에게 "혼자 판단이 어려울 때 알리기가 늦으면 무엇을 놓칠까요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'wordcards', options: { words: [{ en: '멈추기', ko: '다친 순간 경기를 멈추고 더 뛰지 않는다' }, { en: '움직이지 않기', ko: '다친 곳에 힘을 싣거나 쓰지 않는다' }, { en: '차게 하기', ko: '삔 곳에 찬 것을 대어 붓기를 줄인다' }, { en: '식히기', ko: '더위로 쓰러진 친구를 그늘에서 식힌다' }, { en: '알리기', ko: '어른과 119에 상황을 바로 전한다' }] }, prompt: '부상 대처 낱말을 장면과 짝지으세요.', target: { match: { 멈추기: '멈추기', '움직이지 않기': '움직이지 않기', '차게 하기': '차게 하기', 식히기: '식히기', 알리기: '알리기' } }, difficulty: 0.2 },
            { type: 'choice', prompt: '경기 중 친구와 머리를 세게 부딪쳤어요. 알맞은 판단은?', options: ['피가 안 나니 계속 뛴다', '경기를 멈추고 어른에게 알린다', '물 마시고 바로 들어간다'], answer: 1, difficulty: 0.15, explain: '머리 충돌은 겉으로 멀쩡해도 멈추고 어른이 지켜보게 해요.' },
            { type: 'short', prompt: '오늘 낱말 둘을 넣어 부상 대처 원칙을 한 문장으로 쓰세요.' },
          ],
        },
        worksheet: {
          title: '부상 대처 원칙',
          items: [
            { type: 'table', prompt: '장면마다 알맞은 원칙 낱말을 쓰세요.', columns: ['장면', '원칙 낱말'], cells: [['발목을 접질림', ''], ['더위로 쓰러짐', ''], ['머리를 부딪침', '']] },
            { type: 'short', prompt: '원칙 문장 두 개를 쓰세요.' },
          ],
        },
      }),
      M({
        id: 'wrap.proposal-writing', type: 'wrap', title: '체육대회 더위 대책 제안',
        method: '체육대회 더위 대책 제안서', tool: 'rubric-writing', minutes: 6,
        levels: { easy: '제안 틀("~을 위해 ~을 하자. 담당은 ~")을 보고 쓴다.', base: '제안 세 줄을 쓰고 기준표로 점검한다.', challenge: '예상되는 반대 의견에 답하는 문장을 활동지에 덧붙인다.' },
        wrap: {
          teacher: '"오늘 그래프와 차례를 바탕으로 학생회에 낼 체육대회 더위 대책을 세 줄로 써 봐요. 좋은 제안은 근거가 있고, 할 수 있고, 누가 할지 정해져 있어요." 기준표를 함께 읽고 쓰게 한다. "그냥 체육대회를 없애자"처럼 쓴 학생에게 "체육대회를 하고 싶은 친구들도 지키는 제안은 무엇일까요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'rubric-writing', options: { topic: '학생회에 낼 체육대회 더위 대책을 세 줄(세 문장)로 쓰세요.', minChars: 50, maxChars: 300, starter: '~을 위해 ~을 하자. 담당은 ~', sample: '보건실 기록을 보면 7월에 더위 관련 방문이 가장 많으니 체육대회를 10월에 하자. 경기마다 그늘 쉼터와 물을 두자. 반마다 더위 지킴이 두 명이 쉼터를 맡자.' }, prompt: '더위 대책 제안을 쓰고 기준표로 점검하세요.', target: { selfCheck: ['자료나 오늘 배운 것을 근거로 들었다', '학교에서 실제로 할 수 있는 제안이다', '누가 맡을지 담당을 정했다'], sentences: [3, 4] }, difficulty: 0.3 },
            { type: 'choice', prompt: '더위 대책 제안으로 가장 알맞은 것은?', options: ['더우면 각자 알아서 쉰다', '경기마다 그늘 쉼터와 물을 두고 담당을 정한다', '더위에 강해지도록 한낮에 더 뛴다'], answer: 1, difficulty: 0.15, explain: '할 수 있고 담당이 있는 제안이 실제로 지켜져요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '체육대회 더위 대책 제안서',
          items: [
            { type: 'short', prompt: '더위 대책 제안 세 줄을 쓰세요(근거·실행 방법·담당).' },
            { type: 'short', prompt: '예상되는 반대 의견 하나와 그에 대한 내 답을 쓰세요.' },
          ],
          easy: { note: '"~을 위해 ~을 하자. 담당은 ~"', items: [{ type: 'short', prompt: '제안 하나를 틀에 맞춰 쓰세요.' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 5. 수상한 일자리·만남 제안과 실종 의심 대응 (10학년)
  // ======================================================================================================
  {
    const M = MOD('suspicious-offer', [10]);
    const JOB = { text: '방학을 앞둔 민재에게 SNS 메시지가 왔다. "지방 리조트 단기 일, 숙소 제공, 2주에 큰돈. 자세한 건 만나서. 부모님께는 아직 말하지 마."', who: '민재', motif: 'house', choices: [
      { id: 'go', text: '좋은 기회라 바로 가겠다고 답한다', result: '상대가 "신분증 사진과 통장 사진부터 보내"라고 한다.', impact: [{ who: '민재', text: '개인정보가 낯선 사람에게 넘어간다', tone: -1 }],
        next: { text: '상대가 "내일 밤 기차역 앞에서 차로 데리러 갈게"라고 한다.', choices: [
          { id: 'meet', text: '혼자 나간다', result: '연락이 닿지 않는 곳으로 가게 된다.', impact: [{ who: '민재', text: '도움을 받을 수 없는 상황에 놓인다', tone: -1 }], ending: '비밀·급한 만남·신분증 요구가 겹치면 멈춰야 할 신호다.' },
          { id: 'late', text: '불안해져 보호자에게 털어놓는다', result: '보호자와 함께 연락을 끊고 신고 방법을 찾는다.', impact: [{ who: '민재', text: '늦었지만 위험에서 벗어난다', tone: 0 }], ending: '늦게라도 믿을 어른에게 말하면 길을 되돌릴 수 있다.' }] } },
      { id: 'ask', text: '회사 이름·주소·계약서를 먼저 묻는다', result: '상대가 "그런 건 나중에, 믿고 와"라며 얼버무린다.', impact: [{ who: '민재', text: '위험 신호를 하나 더 알아챈다', tone: 1 }],
        next: { text: '상대가 "다른 애들은 다 바로 왔어. 기회 놓친다"고 재촉한다.', choices: [
          { id: 'rush', text: '놓칠까 봐 일단 가기로 한다', result: '확인한 것 없이 약속을 잡는다.', impact: [{ who: '민재', text: '확인 없이 위험에 다가간다', tone: -1 }], ending: '재촉은 확인할 시간을 빼앗으려는 신호다.' },
          { id: 'parent', text: '보호자에게 메시지를 보여 주고 함께 판단한다', result: '보호자와 회사 정보를 찾아보니 실제 사업장 주소가 없다.', impact: [{ who: '민재', text: '혼자 판단하지 않는다', tone: 1 }],
            next: { text: '보호자가 "어떻게 말해야 할지 몰라 망설였니?"라고 묻는다.', choices: [
              { id: 'honest', text: '"큰돈이라 솔직히 끌렸어. 그래서 같이 보고 싶었어"라고 말한다', result: '보호자와 함께 연락을 끊고 112에 상담·신고한다.', impact: [{ who: '민재', text: '안전하게 마무리된다', tone: 1 }, { who: '다른 학생들', text: '같은 제안을 받을 위험이 줄어든다', tone: 1 }], ending: '끌렸던 마음까지 말할 수 있어야 다음에도 먼저 묻게 된다.' },
              { id: 'deny', text: '"그냥 장난 메시지야"라고 넘긴다', result: '보호자는 걱정을 덜었지만 메시지는 그대로 남는다.', impact: [{ who: '다른 학생들', text: '같은 제안이 계속 퍼진다', tone: -1 }], ending: '위험한 제안은 신고해야 다른 사람도 지킨다.' }] } }] } },
      { id: 'block', text: '답하지 않고 차단만 한다', result: '그 계정은 막혔지만 다른 친구에게도 같은 메시지가 간다.', impact: [{ who: '민재', text: '나는 안전하다', tone: 1 }, { who: '다른 친구들', text: '같은 제안을 받는다', tone: -1 }], ending: '차단은 나를 지키지만, 알리기까지 해야 다른 사람도 지킨다.' }] };
    const JOB_R = [{ id: 'signal', text: '쉬운 일·큰돈·비밀·급한 만남이 겹치면 위험 신호다' }, { id: 'adult', text: '판단이 어려운 제안은 보호자와 함께 확인한다' }, { id: 'lucky', text: '돈을 많이 주는 일은 운이 좋은 것이다', why: '정상적인 일자리는 계약과 신원 확인을 먼저 해요.' }, { id: 'adult18', text: '곧 어른이니 혼자 판단해도 된다', why: '나이와 상관없이 위험한 제안은 함께 확인해요.' }];

    MODS.push(
      M({
        id: 'intro.offer-cards', type: 'intro', title: '구인 글 속 신호 문장 찾기',
        method: '구인 글 문장 신호 찾기', tool: 'wordcards', minutes: 6,
        levels: { easy: '가상 구인 글 하나에서 신호 문장을 찾는다.', base: '가상 구인 글 세 개를 견주며 신호 낱말과 문장을 짝짓는다.', challenge: '정상 구인 글과 다른 점을 두 가지로 정리해 말한다.' },
        intro: {
          teacher: '"방학 아르바이트를 찾다 이런 글을 봤어요. \'하루 두 시간, 고수입, 비밀 보장.\' 어떤 느낌이 드나요?" 두세 명의 대답을 듣고 시연 단추로 신호 낱말이 문장과 짝지어지는 모습을 보여 준다. "돈 많이 주면 운이 좋은 거잖아요"라는 말이 나오면 "쉬운 일에 큰돈을 주는 사람은 그 대신 무엇을 원할까요?"라고 되묻는다. 오늘은 신호를 읽는 법과 친구가 위험할 때 기다리지 않는 판단을 배운다고 밝힌다.',
          student: '가상의 구인 글 문장을 읽고, 위험 신호 낱말과 짝지어 보세요.',
          demo: { tool: 'wordcards', options: { words: [{ en: '고수입', ko: '"하루 두 시간, 일당 30만 원 보장"' }, { en: '신분증 먼저', ko: '"면접 전에 신분증 사진부터 보내 주세요"' }, { en: '비밀 유지', ko: '"부모님께는 말하지 마세요"' }, { en: '급한 만남', ko: '"오늘 밤 역 앞에서 바로 봐요"' }] }, sequence: [{ match: { 고수입: '고수입', '신분증 먼저': '신분증 먼저', '비밀 유지': '비밀 유지', '급한 만남': '급한 만남' } }] },
          art: { draw: 'a paper phone screen showing a job post with bright paper stickers saying easy money, a paper magnifying glass and a red flag cut from paper beside it', banner: '이 글, 어디가 이상할까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '구인 글·금액은 수업용 가상 예시다. 실제 업체·계정을 띄우지 않는다.',
      }),
      M({
        id: 'intro.friend-story', type: 'intro', title: '연락이 끊긴 친구 사례',
        method: '연락이 끊긴 친구 사례 읽기', tool: 'story', minutes: 6,
        levels: { easy: '장면 세 개에서 이상 신호를 고른다.', base: '장면 네 개를 넘겨 보며 이상 신호가 보인 지점을 모두 고른다.', challenge: '신호가 보인 지점마다 내가 할 수 있었던 일을 말한다.' },
        intro: {
          teacher: '"가상의 이야기예요. 친구 지아가 SNS로 알게 된 사람을 만나러 간다더니 연락이 끊겼어요. 어디서부터 이상했을까요?" 장면을 넘기며 신호가 보인 장면을 고르게 하고, 시연 단추로 정답 장면을 바구니에 담는다. "친구가 비밀로 해 달라고 했으면 지켜야 한다"는 말이 나오면 "지아가 지금 연락이 안 된다면, 그 비밀은 누구를 지키고 있나요?"라고 되묻는다.',
          student: '연락이 끊긴 가상 친구의 이야기를 넘겨 보며, 이상한 신호가 보인 장면을 골라 보세요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '이상 신호', title: '지아 이야기(가상)', cards: [{ id: 'chat', text: '학교 이야기를 나누며 친해짐', motif: 'house' }, { id: 'secret', text: '"우리 둘만 아는 비밀"이라고 함', motif: 'moon' }, { id: 'place', text: '만날 장소를 당일에 바꿈', motif: 'cloud' }, { id: 'parent', text: '"부모님께 말하지 마"라고 함', motif: 'star' }], shuffle: false }, sequence: [{ pick: ['secret', 'place', 'parent'] }] },
          art: { draw: 'a paper phone with message bubbles fading away, an empty bus stop at dusk, a worried friend holding another phone under a paper streetlight', banner: '어디서부터 이상했을까?', extra: [{ motif: 'moon', x: 300, y: 96 }] },
        },
      }),

      M({
        id: 'activity.offer-compare', type: 'activity', title: '구인 조건 세 갈래 나누기',
        method: '정상 구인과 위험 구인 분석', tool: 'story', minutes: 19,
        levels: { easy: '구인 조건 카드 6장을 정상·위험·확인 필요로 나눈다.', base: '카드 12장을 나누고, 위험으로 본 근거를 고르며, 확인 필요 카드마다 확인 방법을 짝짓는다.', challenge: '카드를 섞어 나누고, 활동지에 확인 방법을 내 말로 쓴다.' },
        activity: {
          title: '구인 조건 세 갈래 나누기', tool: 'story',
          teacher: '"구인 글의 조건을 세 갈래로 나눠 봐요. 정상, 위험, 그리고 아직 판단하기 이른 \'확인 필요\'." 카드를 놓을 때마다 근거를 말하게 한다. \'숙소를 주는 대신 비밀을 지키라 함\'을 정상에 두는 학생에게 "숙소를 주는 것은 좋은 일인데, 왜 비밀까지 지켜야 할까요?"라고 묻는다. \'확인 필요\'는 의심이 아니라 확인할 방법이 있는 칸이라는 점을 짚는다.',
          task: '구인 조건 카드를 정상·위험·확인 필요로 나누고 근거를 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('구인 조건 카드를 정상·위험·확인 필요 칸에 나누세요.', ['정상', '위험', '확인 필요'], [
              ['근로계약서를 쓴다', '면접 장소가 회사 사무실로 공개됨', '하는 일과 근무 장소가 구체적이다', '일하는 시간과 시급이 적혀 있다'],
              ['숙소를 주는 대신 비밀을 지키라 함', '일 시작 전 돈을 먼저 보내라 함', '신분증·통장 사진부터 요구함', '면접을 밤에 차 안에서 보자 함'],
              ['회사 이름만 있고 주소가 없음', '"초보 환영, 쉬운 일"이라고만 씀', '메신저로만 연락하자 함', '후기가 모두 같은 말투임'],
            ], { k: 2, d: 0.35 }),
            PICKQ('\'일 시작 전 돈을 먼저 보내라 함\'을 위험으로 보는 근거만 고르세요.', ['정상적인 일자리는 일할 사람에게 돈을 먼저 받지 않는다', '보낸 돈을 돌려받기 어렵다'], ['큰돈을 벌려면 투자가 필요하다', '다들 처음에는 보낸다'], { d: 0.35, opt: { basket: '근거' } }),
            MATCHQ('확인 필요 카드마다 확인 방법을 짝지으세요.', [['회사 이름만 있고 주소가 없음', '사업장 주소와 연락처를 보호자와 함께 찾아본다'], ['"초보 환영, 쉬운 일"이라고만 씀', '하는 일을 글로 자세히 받아 본다'], ['메신저로만 연락하자 함', '공식 전화번호로 다시 확인한다']], { k: 2, d: 0.4, more: { conclude: '확인 필요 조건은 혼자 믿지 말고, 확인할 방법을 써서 보호자와 함께 확인해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '확인 필요 조건을 하나 골라 확인 방법과 함께 쓰세요.', columns: ['확인 필요 조건', '확인 방법', '함께 확인할 사람'], cells: [['', '', '']] }] },
      }),
      M({
        id: 'activity.offer-dilemma', type: 'activity', title: '고수입 제안 갈림길',
        method: '고수입 제안 갈림길 결과 추적', tool: 'dilemma', minutes: 19,
        levels: { easy: '갈림길 하나에서 고르고 근거를 고른다.', base: '갈림길 둘을 지나 결과를 보고 근거를 고른다.', challenge: '갈림길 셋까지 가서 보호자에게 할 말을 고르고, 다른 길과 견준다.' },
        activity: {
          title: '고수입 제안 갈림길', tool: 'dilemma',
          teacher: '"민재는 방학에 큰돈을 벌고 싶어요. 그 마음은 이상한 게 아니에요. 그럼 어디서 멈춰야 할까요?" 선택마다 상대가 어떤 반응을 보이는지 소리 내어 읽게 한다. \'차단만 한다\'를 고른 학생에게 "민재는 안전해졌지만, 같은 메시지를 받은 다른 친구는요?"라고 묻는다. 끌렸던 마음까지 보호자에게 말할 수 있어야 다음에도 먼저 물어볼 수 있다는 점을 짚는다.',
          task: '제안의 갈림길을 따라 결과를 보고 가장 안전한 판단의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('고수입 제안을 받은 민재에게 가장 안전한 길을 고르고 근거를 고르세요.', JOB, [['ask', 'parent', 'honest']], JOB_R, ['signal', 'adult'], { d: 0.4 }),
            EXPLOREQ('\'바로 가겠다\' 길과 \'차단만\' 길도 끝까지 가 보고 결과를 견주세요.', JOB, JOB_R, ['다른 길의 끝 장면을 확인했다', '나와 다른 친구에게 생긴 영향을 견주었다'], { d: 0.35 }),
            DILQ('친구가 같은 제안을 받았다며 함께 가자고 할 때 알맞은 길을 고르고 근거를 고르세요.', { text: '친구가 "숙소 주는 단기 일 있대, 같이 가면 안 무섭잖아"라며 함께 가자고 한다.', who: '친구', motif: 'house', choices: [
              { id: 'together', text: '둘이면 괜찮으니 함께 간다', result: '둘 다 확인 없이 낯선 곳으로 간다.', impact: [{ who: '두 사람', text: '함께 위험해진다', tone: -1 }], ending: '둘이 간다고 확인되지 않은 제안이 안전해지지는 않는다.' },
              { id: 'check', text: '조건을 같이 확인해 보자고 한다', result: '계약서·주소를 묻자 상대가 답을 피한다.', impact: [{ who: '친구', text: '위험 신호를 함께 본다', tone: 1 }],
                next: { text: '친구가 "그래도 돈이 아깝다"며 망설인다.', choices: [
                  { id: 'adult', text: '함께 담임 선생님이나 보호자에게 보여 주자고 한다', result: '어른과 함께 제안을 끊고 신고 방법을 안내받는다.', impact: [{ who: '친구', text: '안전하게 멈춘다', tone: 1 }], ending: '친구를 지키는 길은 함께 믿을 어른에게 가는 것이다.' },
                  { id: 'alone', text: '"너 알아서 해"라며 빠진다', result: '친구가 혼자 가려 한다.', impact: [{ who: '친구', text: '혼자 위험에 남는다', tone: -1 }], ending: '빠지는 것만으로는 친구를 지키지 못한다.' }] } }] },
              [['check', 'adult']], [{ id: 'two', text: '여럿이 가도 확인되지 않은 제안은 위험하다' }, { id: 'friend', text: '친구의 안전을 위해 믿을 어른과 연결한다' }, { id: 'money', text: '돈이 많으면 조금 위험해도 괜찮다', why: '돈과 바꿀 수 있는 안전은 없어요.' }], ['two', 'friend'], { d: 0.35, more: { conclude: '위험 신호가 겹친 제안은 혼자도, 둘이서도 가지 않고 믿을 어른과 함께 확인해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '수상한 제안을 받았을 때 보호자에게 보여 주며 할 첫 말을 쓰세요.' }] },
      }),
      M({
        id: 'activity.report-order', type: 'activity', title: '실종 의심 때 대응 차례',
        method: '실종 의심 때 대응 차례', tool: 'timeline', minutes: 19,
        levels: { easy: '행동 카드 3장을 차례로 놓는다.', base: '카드 5장을 차례로 놓고 함정 카드(혼자 만남 장소로 가기)를 남긴다.', challenge: '신고할 때 전할 정보를 골라 목록을 만든다.' },
        activity: {
          title: '실종 의심 때 차례', tool: 'timeline',
          teacher: '"친구가 낯선 사람을 만나러 간다더니 몇 시간째 연락이 안 돼요. 실종 신고는 하루가 지나야 할 수 있을까요?" 기다리지 않고 바로 알리고 신고하는 것이 맞다는 점을 먼저 짚고 카드를 놓게 한다. \'혼자 만남 장소로 찾아간다\'를 놓는 학생에게 "친구를 찾으러 간 내가 연락이 끊기면 누가 둘을 찾을까요?"라고 묻는다. 신고할 때 전할 정보는 마지막 연락 기록 안에 있다는 점을 짚는다.',
          task: '실종이 의심될 때 행동 카드를 차례로 놓고 신고 정보를 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDERQ('친구의 실종이 의심돼요. 행동 카드를 차례로 놓으세요.', ['마지막 연락 내용과 시각을 모은다', '친구 보호자에게 바로 알린다', '보호자와 함께 112에 신고한다', '학교(담임 선생님)에 알린다', '새 소식이 오면 경찰과 보호자에게 전한다'], { k: 3, traps: ['혼자 만남 장소로 찾아간다'], d: 0.35 }),
            ORDERQ('친구가 "지금 차에 탔는데 어디로 가는지 모르겠어"라는 메시지를 보냈어요. 차례로 놓으세요.', ['메시지를 지우지 않고 화면을 저장한다', '곧바로 112에 신고한다', '친구 보호자에게 알린다', '친구에게 위치를 보낼 수 있는지 묻는다'], { k: 3, traps: ['장난인지 하루 기다려 본다'], d: 0.4 }),
            PICKQ('112에 신고할 때 전할 정보만 고르세요.', ['마지막으로 연락한 시각', '만나기로 한 장소', '상대의 SNS 계정 이름', '친구의 옷차림'], ['친구의 성적', '친구가 좋아하는 노래'], { d: 0.35, opt: { basket: '신고할 정보' }, more: { conclude: '실종이 의심되면 기다리지 않고 바로 보호자와 112에 알리고, 마지막 연락 기록을 함께 전해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '실종이 의심될 때 \'하루 기다려 본다\'가 위험한 까닭을 쓰세요.' }] },
      }),
      M({
        id: 'activity.help-map', type: 'activity', title: '위험 정도별 도움처',
        method: '도움 기관과 상황 잇기', tool: 'mindmap', minutes: 19,
        levels: { easy: '도움처 두 곳(보호자·선생님, 112)에 상황을 나눈다.', base: '도움처 세 갈래에 상황을 나누고, 급한 정도와 도움처를 짝짓는다.', challenge: '112 문자 신고가 쓰이는 상황을 골라 덧붙인다.' },
        activity: {
          title: '위험 정도별 도움처', tool: 'mindmap',
          teacher: '"\'위험한 제안\'을 받았을 때 도움을 청할 곳은 하나가 아니에요. 급한 정도에 따라 달라져요." 상황 카드를 놓을 때마다 "지금 당장 위험한가요, 고민이 필요한가요?"라고 묻는다. 지금 누가 따라오는 상황을 1388에 두는 학생에게 "상담 전화와 경찰 중 지금 와 줄 수 있는 곳은 어디일까요?"라고 묻는다. 112는 급한 위험, 1388과 상담 선생님은 고민과 상담, 보호자·담임은 함께 판단할 어른이라는 점을 짚는다.',
          task: '상황 카드를 도움처 가지에 나누고 급한 정도와 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('상황 카드를 도움처 가지에 나누세요.', ['보호자·담임', '1388·상담 선생님', '112'], [
              ['수상한 구인 글에 답할지 고민될 때', '제안을 받았는데 판단이 서지 않을 때'],
              ['밤늦게 털어놓을 곳이 필요할 때', '집에 말하기 어려운 고민이 있을 때'],
              ['지금 누군가 따라오거나 위협할 때', '친구와 연락이 끊기고 위험한 만남이 의심될 때'],
            ], { k: 1, d: 0.3, opt: { topic: '위험한 제안' } }),
            MATCHQ('급한 정도마다 먼저 연결할 곳을 짝지으세요.', [['지금 위험하다', '112'], ['고민·상담이 필요하다', '1388·상담 선생님'], ['함께 판단할 어른이 필요하다', '보호자·담임']], { k: 3, d: 0.3, opt: { topic: '급한 정도' } }),
            PICKQ('112 문자 신고가 쓰이는 상황만 고르세요.', ['소리 내어 통화하기 어려운 곳에 있을 때', '말을 하면 상대가 알아챌 때'], ['궁금한 것을 물어볼 때', '친구 연락처를 찾을 때'], { d: 0.35, opt: { basket: '문자 신고' }, more: { conclude: '급한 위험은 112(말하기 어려우면 문자), 고민은 1388·상담 선생님, 판단은 보호자·담임과 함께해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '도움처마다 연결할 상황을 하나씩 쓰세요.', columns: ['도움처', '연결할 상황'], cells: [['보호자·담임', ''], ['1388·상담 선생님', ''], ['112', '']] }] },
      }),

      M({
        id: 'wrap.signal-check', type: 'wrap', title: '제안을 받았을 때 점검',
        method: '제안을 받았을 때 스스로 점검', tool: 'kitchen', minutes: 6,
        levels: { easy: '알맞은 확인 항목 4개만 있는 점검표에 표시한다.', base: '항목 6개 가운데 함정 2개를 빼고 표시한다.', challenge: '점검표에 항목 하나를 더해 쓴다.' },
        wrap: {
          teacher: '"다음에 제안을 받으면 무엇부터 확인할까요? 점검표에서 알맞은 것만 표시해 봐요." 함정 항목 \'일당이 높은지 확인\'에 표시한 학생에게 "일당이 높으면 확인이 끝난 걸까요, 확인을 더 해야 할까요?"라고 묻는다. 확인은 혼자 하지 않고 보호자와 함께라는 점을 다시 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '제안을 받았을 때 확인할 것', items: [{ id: 'contract', text: '계약서를 쓰는가' }, { id: 'address', text: '사업장 주소가 있는가' }, { id: 'parent', text: '보호자와 상의했는가' }, { id: 'nopay', text: '돈을 먼저 내라고 하지 않는가' }, { id: 'pay', text: '일당이 높은가' }, { id: 'fast', text: '오늘 바로 만날 수 있는가' }] }, prompt: '제안을 받았을 때 확인할 것만 표시하세요.', target: { checklist: ['contract', 'address', 'parent', 'nopay'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '친구가 "비밀로 해 줘"라며 수상한 만남을 말했어요. 알맞은 판단은?', options: ['약속이니 끝까지 지킨다', '친구의 안전을 위해 믿을 어른에게 알린다', '나도 따라간다'], answer: 1, difficulty: 0.15, explain: '친구의 안전은 비밀보다 먼저예요.' },
            { type: 'short', prompt: '점검표에 더하고 싶은 항목 하나를 쓰세요.' },
          ],
        },
        worksheet: {
          title: '제안을 받았을 때',
          items: [
            { type: 'check', prompt: '제안을 받았을 때 확인할 것에 표시하세요.', options: ['계약서', '사업장 주소', '보호자와 상의', '선입금 요구 없음'] },
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '실종이 의심되면 기다리지 않고 바로 보호자와 ___에 알린다.', answer: '112' },
          ],
        },
      }),
      M({
        id: 'wrap.friend-reflection', type: 'wrap', title: '친구의 비밀과 안전 성찰',
        method: '친구를 지키는 판단 성찰 글', tool: 'rubric-writing', minutes: 6,
        levels: { easy: '문장 틀("친구의 비밀과 안전이 부딪치면 나는 ~")을 보고 쓴다.', base: '네 문장을 쓰고 기준표로 점검한다.', challenge: '반대 입장(비밀을 지켜야 한다) 하나를 짚고 답하는 문장을 넣는다.' },
        wrap: {
          teacher: '"친구가 비밀로 해 달라고 한 일이 친구를 위험하게 한다면 나는 어떻게 할까요? 정답보다 내 판단의 근거를 써 봐요." 기준표를 함께 읽는다. "고자질하는 것 같아 싫다"는 학생에게 "알리는 것이 친구를 혼나게 하려는 것인가요, 지키려는 것인가요?"라고 묻는다. 친구를 존중하는 말과 도움처를 함께 담는 글을 쓰게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'rubric-writing', options: { topic: '\'친구의 비밀과 친구의 안전이 부딪칠 때\' 나의 판단을 네 문장으로 쓰세요.', minChars: 60, maxChars: 400, starter: '친구의 비밀과 안전이 부딪치면 나는 ~', sample: '친구의 비밀과 안전이 부딪치면 나는 안전을 먼저 지키겠다. 위험한 만남은 혼자 감당할 수 없기 때문이다. 친구에게 먼저 걱정된다고 솔직히 말하겠다. 그래도 위험하면 보호자나 112에 알리겠다.' }, prompt: '나의 판단을 쓰고 기준표로 점검하세요.', target: { selfCheck: ['판단의 근거를 썼다', '친구를 존중하는 말을 넣었다', '연결할 도움처를 썼다'], mustInclude: [['왜냐하면', '때문', '까닭']] }, difficulty: 0.3 },
            { type: 'choice', prompt: '친구를 지키는 판단에 가장 가까운 것은?', options: ['친구가 원하면 무엇이든 숨겨 준다', '걱정을 말하고, 위험하면 믿을 어른과 연결한다', '친구와 연락을 끊는다'], answer: 1, difficulty: 0.15, explain: '친구를 존중하면서도 위험은 믿을 어른과 함께 다뤄요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '친구를 지키는 판단',
          items: [
            { type: 'short', prompt: '친구의 비밀과 안전이 부딪칠 때 나의 판단을 네 문장으로 쓰세요.' },
            { type: 'short', prompt: '"비밀은 지켜야 한다"는 입장에 대한 내 답을 한 문장으로 쓰세요.' },
          ],
          easy: { note: '"친구의 비밀과 안전이 부딪치면 나는 ~. 왜냐하면 ~"', items: [{ type: 'short', prompt: '틀에 맞춰 두 문장을 쓰세요.' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 6. 기호식품 광고·포장 문구 따져 읽기 (11학년)
  // ======================================================================================================
  {
    const M = MOD('ad-literacy', [11]);
    const BUY = [['광고를 보고', 35], ['친구가 마셔서', 25], ['맛이 좋아서', 15], ['졸음을 쫓으려고', 25]];
    const PROMO = { text: 'SNS 팔로워가 많은 고등학생 유나에게 가상 음료 회사가 연락했다. "시험 기간에 우리 에너지 음료 마시는 영상 올려 주면 제품과 돈을 줄게요."', who: '유나', motif: 'star', choices: [
      { id: 'accept', text: '그대로 받아들여 \'한 캔이면 집중 끝\' 영상을 올린다', result: '조회 수가 크게 오른다.', impact: [{ who: '유나', text: '돈과 관심을 얻는다', tone: 1 }, { who: '팔로워', text: '밤샘 음료를 따라 사는 후배가 늘어난다', tone: -1 }],
        next: { text: '한 팔로워가 "언니 보고 하루에 세 캔 마셨는데 잠을 못 잤어요"라는 댓글을 남겼다.', choices: [
          { id: 'delete', text: '댓글을 지운다', result: '비슷한 댓글이 또 달린다.', impact: [{ who: '팔로워', text: '걱정이 외면당한다', tone: -1 }], ending: '문제를 지우면 책임도 사라질까?' },
          { id: 'correct', text: '영상에 바로잡는 글을 붙인다', result: '일부 팔로워가 고마워하지만 회사는 불쾌해한다.', impact: [{ who: '팔로워', text: '정확한 정보를 얻는다', tone: 1 }], ending: '늦게라도 바로잡으면 영향력은 다시 믿음이 된다.' }] } },
      { id: 'terms', text: '광고임을 밝히고 과장 문구는 빼자는 조건을 건다', result: '회사가 "집중력 문구가 핵심인데요"라며 망설인다.', impact: [{ who: '유나', text: '조건을 지키려면 제안을 잃을 수도 있다', tone: 0 }],
        next: { text: '회사가 "그럼 \'피로 싹\'만 넣어 주세요"라고 다시 제안한다.', choices: [
          { id: 'refuse', text: '효과를 보장하는 말은 넣지 않겠다고 한다', result: '회사는 제안을 거두고, 유나는 다른 영상을 계획한다.', impact: [{ who: '팔로워', text: '과장 광고를 보지 않는다', tone: 1 }],
            next: { text: '친구가 "아깝다, 그냥 하지 그랬어"라고 한다. 유나는 다음 영상을 정해야 한다.', choices: [
              { id: 'review', text: '음료 뒷면 표시 읽는 법을 소개하는 영상을 만든다', result: '팔로워들이 "이런 칸이 있는 줄 몰랐다"는 댓글을 단다.', impact: [{ who: '팔로워', text: '스스로 고르는 힘이 생긴다', tone: 1 }], ending: '영향력은 무엇을 팔지보다 무엇을 알릴지에서 나온다.' },
              { id: 'regret', text: '아쉬워서 다음엔 무조건 받겠다고 한다', result: '다음 제안에서 조건을 따지지 않게 된다.', impact: [{ who: '팔로워', text: '다음 과장 광고에 노출된다', tone: -1 }], ending: '한 번 지킨 기준도 다음에 지켜야 기준이 된다.' }] } },
          { id: 'accept2', text: '조금이니 받아들인다', result: '\'피로 싹\' 문구가 든 영상이 올라간다.', impact: [{ who: '팔로워', text: '효과를 믿고 사는 사람이 생긴다', tone: -1 }], ending: '작은 과장도 많은 사람에게 퍼지면 큰 영향이 된다.' }] } },
      { id: 'decline', text: '바로 거절한다', result: '유나는 평소 영상을 계속 올린다.', impact: [{ who: '팔로워', text: '과장 광고를 보지 않는다', tone: 1 }], ending: '거절도 책임 있는 선택이다. 다만 왜 거절했는지 알리면 더 큰 도움이 된다.' }] };
    const PROMO_R = [{ id: 'reach', text: '팔로워가 많을수록 내 말이 주는 영향도 크다' }, { id: 'honest', text: '광고임을 밝히고 효과를 보장하는 말은 쓰지 않는다' }, { id: 'money', text: '돈을 받았으니 회사가 원하는 대로 해야 한다', why: '돈을 받아도 보는 사람에 대한 책임은 남아요.' }, { id: 'adult', text: '보는 사람이 알아서 판단할 일이다', why: '어린 팔로워는 광고와 정보를 가리기 어려울 수 있어요.' }];

    MODS.push(
      M({
        id: 'intro.ad-story', type: 'intro', title: '에너지 음료 광고 네 컷',
        method: '가상 에너지 음료 광고 장면 읽기', tool: 'story', minutes: 6,
        levels: { easy: '세 컷만 보고 광고가 노리는 사람을 고른다.', base: '네 컷을 보고 노리는 사람과 건드리는 감정을 함께 고른다.', challenge: '광고가 보여 주지 않은 정보(성분·주의 문구)를 짐작해 말한다.' },
        intro: {
          teacher: '"가상의 광고 네 컷이에요. 밤샘 공부하는 학생, 한 캔 마시자 눈이 반짝, \'한 캔이면 집중 끝\'. 이 광고는 누구에게, 어떤 마음을 건드리려고 만들었을까요?" 시연 단추로 노리는 사람과 감정 카드가 짝지어지는 모습을 보여 준다. "광고는 정보를 주려고 만드는 것"이라는 말이 나오면 "그럼 이 광고에서 카페인 양은 어디에 나왔나요?"라고 되묻는다. 오늘은 광고와 포장 문구를 표시 정보와 대조해 따져 읽는다고 밝힌다.',
          student: '가상 광고 네 컷을 보고, 광고가 노리는 사람과 건드리는 감정을 골라 보세요.',
          demo: { tool: 'story', options: { mode: 'match', title: '가상 광고 \'한 캔이면 집중 끝\'', slots: [{ id: 'who', label: '노리는 사람' }, { id: 'feel', label: '건드리는 감정' }], cards: [{ id: 'student', text: '시험 앞둔 고등학생' }, { id: 'anxious', text: '시험이 불안한 마음' }, { id: 'kid', text: '어린이' }, { id: 'calm', text: '느긋한 마음' }], shuffle: false }, sequence: [{ match: { who: 'student', feel: 'anxious' } }] },
          art: { draw: 'four paper comic panels: a tired student at night, opening a bright paper can, sparkling eyes, a big slogan banner, with a small hidden label at the corner', banner: '광고는 무엇을 말하지 않을까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '광고·제품은 가상이다. 실제 광고를 쓰면 상표가 보이지 않게 가리고, 특정 회사를 비난하는 수업이 되지 않게 한다.',
      }),
      M({
        id: 'intro.claim-chart', type: 'intro', title: '에너지 음료를 사는 이유',
        method: '가상의 구매 이유 조사 자료', tool: 'chart', minutes: 6,
        levels: { easy: '가장 큰 조각을 함께 찾는다.', base: '네 조각을 견주어 광고의 영향이 큰지 판단한다.', challenge: '이 조사의 한계(몇 명에게, 어떻게 물었는지 모름)를 짚는다.' },
        intro: {
          teacher: '"가상의 고등학생 조사예요. 에너지 음료를 사는 이유를 물었더니 이렇게 나왔어요. 광고의 영향은 클까요?" 시연 단추로 가장 큰 조각을 고르는 모습을 보인 뒤, \'친구가 마셔서\'도 광고와 이어질 수 있는지 묻는다. "광고는 나랑 상관없다"는 말이 나오면 "친구가 마신 그 음료는 친구가 어디서 처음 알았을까요?"라고 되묻는다. 조사는 가상이고, 진짜 조사라면 몇 명에게 어떻게 물었는지도 봐야 한다는 점을 짚는다.',
          student: '가상의 조사 원그래프를 보고, 에너지 음료를 사는 가장 큰 이유와 광고의 영향을 생각해 보세요.',
          demo: { tool: 'chart', options: { type: 'circle', mode: 'read', title: '에너지 음료를 사는 이유(가상 조사)', unit: '%', data: BUY, question: '가장 큰 조각은?', choices: BUY.map((x) => x[0]) }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper pie chart cut into four colored slices floating above a paper school hallway, small paper speech bubbles pointing to each slice', banner: '왜 사게 될까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
      }),

      M({
        id: 'activity.fact-opinion', type: 'activity', title: '포장 문구 사실·주장·과장',
        method: '포장 문구를 사실·주장·과장으로 가르기', tool: 'story', minutes: 19,
        levels: { easy: '포장 문구 카드 6장을 사실·주장·과장으로 나눈다.', base: '카드 12장을 나누고, 표시 정보로 확인할 수 있는 문구를 고르며, 과장 문구에 빠진 것을 짝짓는다.', challenge: '카드를 섞어 나누고, 활동지에 과장 문구 하나를 사실 문구로 고쳐 쓴다.' },
        activity: {
          title: '포장 문구 세 갈래로 가르기', tool: 'story',
          teacher: '"포장에 쓰인 말은 모두 검증된 사실일까요? 사실은 확인할 수 있는 말, 주장은 느낌·판단, 과장은 효과를 보장하는 말이에요." 카드를 놓을 때마다 "이 말은 뒷면 표시로 확인할 수 있나요?"라고 묻는다. \'무설탕이라 마음껏 마셔도 OK\'를 사실에 두는 학생에게 "무설탕은 확인할 수 있지만, \'마음껏 마셔도\'도 확인할 수 있을까요? 카페인은요?"라고 묻는다. 식품 표시·광고는 법(식품 등의 표시·광고에 관한 법률)으로 관리된다는 점을 덧붙인다.',
          task: '포장 문구를 사실·주장·과장으로 나누고 표시로 확인해요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('가상 포장 문구 카드를 사실·주장·과장 칸에 나누세요.', ['사실', '주장', '과장'], [
              ['카페인 함유', '당류 0g 표시', '1캔 250mL', '어린이 섭취 주의 문구'],
              ['상쾌한 맛', '요즘 학생들의 선택', '산뜻한 하루의 시작', '최고의 한 캔'],
              ['한 캔이면 집중 끝', '피로 싹', '성적이 오르는 음료', '무설탕이라 마음껏 마셔도 OK'],
            ], { k: 2, d: 0.35 }),
            PICKQ('뒷면 표시 정보로 사실인지 확인할 수 있는 문구만 고르세요.', ['카페인 함유', '당류 0g 표시'], ['피로 싹', '요즘 학생들의 선택'], { d: 0.3, opt: { basket: '확인할 수 있는 문구' } }),
            MATCHQ('과장 문구마다 빠진 것을 짝지으세요.', [['한 캔이면 집중 끝', '효과를 보장할 근거'], ['무설탕이라 마음껏 마셔도 OK', '카페인 같은 다른 성분 정보'], ['성적이 오르는 음료', '잠과 공부 습관이 성적에 주는 영향']], { k: 2, d: 0.4, more: { conclude: '사실은 표시로 확인하고, 주장은 내 기준으로 판단하고, 과장은 빠진 근거를 찾아 따져 읽어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '과장 문구 하나를 골라 표시 정보로 확인할 수 있는 사실 문구로 고쳐 쓰세요.' }] },
      }),
      M({
        id: 'activity.label-vs-ad', type: 'activity', title: '광고 문구와 표시 대조',
        method: '광고 문구와 표시 정보 대조', tool: 'kitchen', minutes: 19,
        levels: { easy: '광고 문구와 표시 정보 3쌍을 짝짓는다.', base: '5쌍을 짝짓고, 광고만 보면 놓치는 정보를 고르며, 앞면·뒷면 정보를 나눈다.', challenge: '카드를 섞어 풀고, 활동지에 놓친 정보로 생길 문제를 쓴다.' },
        activity: {
          title: '광고 문구 옆에 표시 놓기', tool: 'kitchen',
          teacher: '"광고 문구 하나마다, 그 말을 확인하려면 뒷면의 어느 칸을 봐야 할까요?" 짝짓기를 마친 뒤 \'광고만 보면 놓치는 정보\'를 고르게 한다. \'제품 이름\'을 놓치는 정보로 고른 학생에게 "제품 이름은 앞면에 크게 있지요. 앞면에 없는 것은 무엇일까요?"라고 묻는다. 광고는 팔려는 글이고, 표시는 알려야 하는 정보라는 차이를 짚는다.',
          task: '광고 문구와 표시 정보를 짝짓고 놓치는 정보를 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            MATCHQ('광고 문구마다 확인할 표시 정보를 짝지으세요.', [['한 캔이면 집중 끝', '카페인 함량'], ['당 걱정 없는 상쾌함', '원재료명(감미료)'], ['하루 활력 충전', '1회 제공량과 열량'], ['누구나 즐기는 맛', '어린이·임산부 주의 문구'], ['천연 에너지', '원재료명과 성분 함량']], { k: 3, d: 0.35, opt: { autoMotif: false } }),
            PICKQ('광고만 보면 놓치기 쉬운 정보만 고르세요.', ['주의 문구', '카페인 함량', '1회 제공량'], ['제품 이름', '캔 색깔'], { d: 0.3, opt: { basket: '놓치는 정보', autoMotif: false } }),
            SORTQ('정보를 앞면에서 크게 보이는 것과 뒷면에서만 보이는 것으로 나누세요.', ['앞면', '뒷면'], [
              ['제품 이름', '광고 문구', '캔 그림'], ['카페인 함량', '원재료명', '주의 문구'],
            ], { k: 2, d: 0.25, opt: { groups: false, autoMotif: false }, more: { conclude: '앞면은 팔려는 말, 뒷면은 알려야 하는 정보예요. 고를 때는 뒷면부터 봐요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '광고만 보고 사면 놓치는 정보 하나와, 그 때문에 생길 수 있는 문제를 쓰세요.' }] },
      }),
      M({
        id: 'activity.ad-dilemma', type: 'activity', title: '음료 홍보 제안 갈림길',
        method: '광고 모델 제안 갈림길', tool: 'dilemma', minutes: 19,
        levels: { easy: '갈림길 하나에서 고르고 근거를 고른다.', base: '갈림길 둘을 지나 팔로워 반응을 보고 근거를 고른다.', challenge: '갈림길 셋까지 가서 책임 있는 홍보 조건을 고르고, 다른 길과 견준다.' },
        activity: {
          title: '홍보 제안을 받은 유나', tool: 'dilemma',
          teacher: '"팔로워가 많은 유나에게 음료 홍보 제안이 왔어요. 돈을 받고 광고하는 것 자체가 나쁜 걸까요? 무엇을 지키면 책임 있는 홍보일까요?" 선택마다 팔로워에게 가는 영향을 읽게 한다. \'바로 거절\'만 정답이라고 하는 학생에게 "거절 말고, 조건을 지키며 할 수 있는 길은 없을까요?"라고 묻는다. 광고임을 밝히고 효과를 보장하지 않는 것이 영향력 있는 사람의 책임이라는 점을 짚는다.',
          task: '홍보 제안의 갈림길을 따라 팔로워 반응을 보고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('홍보 제안을 받은 유나가 팔로워에게 책임을 지키는 길을 고르고 근거를 고르세요.', PROMO, [['terms', 'refuse', 'review']], PROMO_R, ['reach', 'honest'], { d: 0.4 }),
            EXPLOREQ('\'그대로 받아들인다\' 길도 끝까지 가 보고, 팔로워 반응을 견주세요.', PROMO, PROMO_R, ['다른 길의 팔로워 반응을 확인했다', '유나와 팔로워가 얻고 잃은 것을 견주었다'], { d: 0.35 }),
            DILQ('친구가 "이 음료 먹으면 밤새도 멀쩡해"라는 영상을 공유했을 때 알맞은 길을 고르고 근거를 고르세요.', { text: '반 단톡방에 친구가 "이 음료 먹으면 밤새도 멀쩡해"라는 짧은 영상을 공유했다.', who: '단톡방', motif: 'cloud', choices: [
              { id: 'share', text: '좋다며 다른 방에도 퍼 나른다', result: '영상이 더 많은 친구에게 퍼진다.', impact: [{ who: '친구들', text: '과장된 정보를 믿게 된다', tone: -1 }], ending: '퍼 나르는 순간 나도 광고를 하는 사람이 된다.' },
              { id: 'check', text: '음료 뒷면 표시를 찾아 함께 보자고 한다', result: '친구들이 카페인 함량과 주의 문구를 확인한다.', impact: [{ who: '친구들', text: '스스로 따져 본다', tone: 1 }],
                next: { text: '영상을 올린 친구가 "그냥 재미로 올린 건데"라며 서운해한다.', choices: [
                  { id: 'kind', text: '"재미있었어. 근데 밤샘은 몸에 무리라서 같이 보자는 거야"라고 말한다', result: '친구가 웃으며 영상 아래에 표시 사진을 덧붙인다.', impact: [{ who: '친구', text: '관계를 지키며 정보를 고친다', tone: 1 }], ending: '비난 없이 정보를 더하면 바로잡기가 쉬워진다.' },
                  { id: 'blame', text: '"너 때문에 다들 속잖아"라고 몰아세운다', result: '친구가 단톡방을 나간다.', impact: [{ who: '친구', text: '상처받고 정보도 고쳐지지 않는다', tone: -1 }], ending: '비난은 사람을 밀어낼 뿐 정보를 고치지 못한다.' }] } }] },
              [['check', 'kind']], [{ id: 'label', text: '효과 주장은 표시 정보로 확인한다' }, { id: 'respect', text: '바로잡을 때는 사람을 비난하지 않는다' }, { id: 'fun', text: '재미로 올린 영상은 따질 필요가 없다', why: '재미로 올려도 보는 사람은 정보로 믿을 수 있어요.' }], ['label', 'respect'], { d: 0.35, more: { conclude: '광고를 알리는 사람도, 퍼 나르는 사람도 보는 사람에 대한 책임이 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '영향력 있는 사람이 음료를 홍보할 때 지켜야 할 조건 두 가지를 쓰세요.' }] },
      }),
      M({
        id: 'activity.consumer-map', type: 'activity', title: '소비자로서 할 수 있는 일',
        method: '소비자로서 할 수 있는 일', tool: 'mindmap', minutes: 19,
        levels: { easy: '가지마다 할 일 카드 1장씩(4장)을 나눈다.', base: '할 일 카드 8장을 네 가지에 나누되 함정 카드 2장은 남기고, 가지마다 기대 효과를 짝짓는다.', challenge: '카드를 섞어 나누고, 우리 학교에서 이번 주에 먼저 할 일을 고른 까닭을 짝에게 말한다.' },
        activity: {
          title: '과장 광고를 봤을 때 할 일', tool: 'mindmap',
          teacher: '"과장 광고를 봤을 때 우리가 할 수 있는 일은 \'안 사기\'뿐일까요?" 할 일을 네 갈래로 나눈 뒤, 가지마다 기대 효과를 짝짓게 한다. 소비자 신고를 \'너무 큰 일\'이라고 하는 학생에게 "표시·광고는 법으로 관리되는데, 문제를 알리는 사람이 없으면 어떻게 될까요?"라고 묻는다. 나 하나의 선택에서 학교 매점 제안까지, 영향의 범위가 달라진다는 점을 짚는다.',
          task: '할 일 카드를 가지에 나누고 기대 효과와 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('할 일 카드를 마인드맵 가지에 나누세요.', ['나의 선택', '친구와 나누기', '학교 매점 제안', '소비자 신고'], [
              ['뒷면 표시를 읽고 고른다', '효과 문구만 보고 사지 않는다'],
              ['표시 읽는 법을 단톡방에 알린다', '과장 영상에 표시 사진을 덧붙인다'],
              ['고카페인 표시 안내문을 매점에 붙이자고 한다', '물·우유 선택지를 늘리자고 학생회에 낸다'],
              ['과장 광고를 식품 표시·광고 신고 창구에 알린다', '광고 화면을 저장해 근거로 낸다'],
            ], { k: 1, traps: ['가격만 보고 고른다', '광고 문구를 그대로 퍼 나른다'], d: 0.35, opt: { topic: '과장 광고를 봤을 때' } }),
            MATCHQ('가지마다 기대 효과를 짝지으세요.', [['나의 선택', '내 몸에 맞게 고른다'], ['친구와 나누기', '주변 친구도 따져 읽게 된다'], ['학교 매점 제안', '학교 안 선택 환경이 바뀐다'], ['소비자 신고', '같은 광고에 속는 사람이 줄어든다']], { k: 2, d: 0.35, opt: { topic: '기대 효과' } }),
            PICKQ('우리 학교에서 이번 주에 바로 해 볼 수 있는 일만 고르세요.', ['표시 읽는 법을 단톡방에 알린다', '매점 안내문을 학생회에 제안한다'], ['광고 회사를 직접 찾아간다', '모든 음료를 학교에서 없앤다'], { d: 0.35, opt: { basket: '이번 주에 할 일' }, more: { conclude: '소비자는 나의 선택에서 친구·학교·신고까지 영향의 범위를 넓힐 수 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '네 가지 가운데 내가 해 볼 일 하나와 기대 효과를 쓰세요.' }] },
      }),

      M({
        id: 'wrap.ad-words', type: 'wrap', title: '광고 따져 읽기 핵심어',
        method: '광고 따져 읽기 핵심어', tool: 'wordcards', minutes: 6,
        levels: { easy: '낱말 3개를 예시 문구와 짝짓는다.', base: '낱말 4개를 예시 문구와 짝짓는다.', challenge: '낱말마다 새 예시 문구를 하나씩 만든다.' },
        wrap: {
          teacher: '"사실, 주장, 과장, 표시 정보. 오늘의 낱말 넷을 예시 문구와 이어 봐요." 짝지은 뒤 한두 명에게 새 예시 문구를 만들게 한다. \'무설탕\'을 과장이라고 하는 학생에게 "무설탕은 확인할 수 있어요. 과장이 되는 건 그 뒤에 무슨 말이 붙을 때일까요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'wordcards', options: { words: [{ en: '사실', ko: '"카페인 함유" — 표시로 확인할 수 있는 말' }, { en: '주장', ko: '"상쾌한 맛" — 만든 쪽의 느낌·판단' }, { en: '과장', ko: '"한 캔이면 집중 끝" — 효과를 보장하는 말' }, { en: '표시 정보', ko: '뒷면의 성분·함량·주의 문구' }] }, prompt: '낱말을 예시 문구와 짝지으세요.', target: { match: { 사실: '사실', 주장: '주장', 과장: '과장', '표시 정보': '표시 정보' } }, difficulty: 0.2 },
            { type: 'choice', prompt: '\'무설탕이면 몸에 좋은 식품이다\'에 대한 판단으로 알맞은 것은?', options: ['맞다, 설탕이 없으니까', '무설탕은 사실이지만 몸에 좋은지는 다른 성분도 봐야 한다', '무설탕은 모두 거짓 표시다'], answer: 1, difficulty: 0.2, explain: '무설탕은 확인할 수 있는 사실이지만, 카페인 같은 다른 성분은 따로 봐야 해요.' },
            { type: 'short', prompt: '\'과장\' 낱말의 새 예시 문구를 하나 만드세요.' },
          ],
        },
        worksheet: {
          title: '광고 따져 읽기',
          items: [
            { type: 'table', prompt: '문구를 사실·주장·과장으로 나눠 쓰세요.', columns: ['문구', '사실 / 주장 / 과장'], cells: [['당류 0g', ''], ['상쾌한 맛', ''], ['피로 싹', '']], answer: '사실, 주장, 과장' },
            { type: 'short', prompt: '광고를 따져 읽을 때 내가 먼저 볼 것 하나를 쓰세요.' },
          ],
        },
      }),
      M({
        id: 'wrap.counter-ad', type: 'wrap', title: '바로잡는 캠페인 문구',
        method: '바로잡는 캠페인 문구와 기준표', tool: 'rubric-writing', minutes: 6,
        levels: { easy: '보기 문구("한 캔이면 집중 끝 → …")를 고쳐 쓴다.', base: '캠페인 문구 두 줄을 쓰고 기준표로 점검한다.', challenge: '다른 모둠 문구를 같은 기준표로 평가해 활동지에 적는다.' },
        wrap: {
          teacher: '"과장 광고를 바로잡는 학교 캠페인 문구를 두 줄로 써 봐요. 정확하고, 짧고, 누구도 깎아내리지 않아야 해요." 기준표를 함께 읽는다. "에너지 음료 마시는 애들은 바보"처럼 쓴 학생에게 "이 문구를 본 친구는 표시를 읽고 싶어질까요, 기분이 상할까요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'rubric-writing', options: { topic: '과장 광고를 바로잡는 학교 캠페인 문구를 두 줄로 쓰세요.', minChars: 20, maxChars: 120, starter: '\'한 캔이면 집중 끝\'? → ~', sample: '한 캔으로 끝나는 집중은 없어요. 뒷면 카페인 칸부터 읽어요.' }, prompt: '캠페인 문구를 쓰고 기준표로 점검하세요.', target: { selfCheck: ['사실과 맞는 정확한 말이다', '짧아서 한눈에 읽힌다', '누구도 깎아내리지 않는다'], sentences: [2, 2] }, difficulty: 0.3 },
            { type: 'choice', prompt: '캠페인 문구로 가장 알맞은 것은?', options: ['에너지 음료 마시는 애들은 바보', '집중은 캔이 아니라 잠에서 와요. 뒷면을 읽어요', '음료 회사는 다 거짓말쟁이'], answer: 1, difficulty: 0.15, explain: '정확하고 짧으며 누구도 깎아내리지 않는 문구예요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '바로잡는 캠페인 문구',
          items: [
            { type: 'short', prompt: '캠페인 문구 두 줄을 쓰세요.' },
            { type: 'table', prompt: '다른 모둠 문구를 기준표로 평가하세요.', columns: ['기준', '○ / △ / ×'], cells: [['정확하다', ''], ['짧다', ''], ['깎아내리지 않는다', '']] },
          ],
          easy: { note: '"\'한 캔이면 집중 끝\'? → 집중은 ~에서 와요."', items: [{ type: 'short', prompt: '보기 문구를 고쳐 한 줄로 쓰세요.' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 7. 충전기 인증·리콜 확인과 배터리 이상 대처 (11학년)
  // ======================================================================================================
  {
    const M = MOD('battery-recall', [11]);
    const CHG = { text: '온라인 쇼핑몰에서 충전기를 고른다. 인증 표시가 없는 제품은 3,000원, 인증 표시가 있는 제품은 12,000원이다.', who: '태오', motif: 'house', choices: [
      { id: 'cheap', text: '싸니까 인증 없는 제품을 산다', result: '처음 한 달은 문제없이 쓴다.', impact: [{ who: '태오', text: '돈을 아낀다', tone: 1 }],
        next: { text: '석 달 뒤, 충전할 때 충전기가 손대기 힘들 만큼 뜨거워진다.', choices: [
          { id: 'keep', text: '아직 되니까 계속 쓴다', result: '어느 밤 탄 냄새가 나며 플러그 끝이 검게 그을린다.', impact: [{ who: '태오', text: '화재 위험에 놓인다', tone: -1 }], ending: '아낀 9,000원이 위험을 산 값이 되었다.' },
          { id: 'stop', text: '쓰기를 멈추고 인증 제품으로 바꾼다', result: '결국 두 번 사게 되었지만 위험은 멈췄다.', impact: [{ who: '태오', text: '늦었지만 안전해진다', tone: 0 }], ending: '처음부터 인증을 확인했다면 한 번에 끝났다.' }] } },
      { id: 'cert', text: '인증 표시가 있는 제품을 산다', result: '가격은 더 들었지만 제품 정보가 분명하다.', impact: [{ who: '태오', text: '안전 기준을 확인한 제품을 쓴다', tone: 1 }],
        next: { text: '석 달 뒤, 같은 모델이 리콜되었다는 소식을 친구에게 듣는다.', choices: [
          { id: 'check', text: '모델명을 확인하고 공식 리콜 안내를 찾아본다', result: '내 제품은 대상이 아니라는 것을 확인한다.', impact: [{ who: '태오', text: '불안을 정보로 바꾼다', tone: 1 }],
            next: { text: '친구의 충전기는 리콜 대상으로 나왔다. 친구는 "귀찮은데 그냥 쓸래"라고 한다.', choices: [
              { id: 'help', text: '교환 신청 방법을 함께 찾아 준다', result: '친구가 무상 교환을 신청한다.', impact: [{ who: '친구', text: '위험한 제품을 쓰지 않게 된다', tone: 1 }], ending: '리콜 정보는 나눌 때 더 많은 사람을 지킨다.' },
              { id: 'leave', text: '친구 일이니 그냥 둔다', result: '친구는 리콜 대상 제품을 계속 쓴다.', impact: [{ who: '친구', text: '위험이 남는다', tone: -1 }], ending: '아는 정보를 나누지 않으면 위험도 그대로 남는다.' }] } },
          { id: 'rumor', text: '소문이니 신경 쓰지 않는다', result: '확인하지 않은 채 계속 쓴다.', impact: [{ who: '태오', text: '내 제품이 대상인지 모른다', tone: 0 }], ending: '리콜은 소문이 아니라 확인할 정보다.' }] } },
      { id: 'used', text: '중고 거래로 제조사 모르는 충전기를 산다', result: '모델명도 설명서도 없다.', impact: [{ who: '태오', text: '리콜·인증을 확인할 길이 없다', tone: -1 }], ending: '정보가 없는 제품은 이상이 생겨도 확인할 곳이 없다.' }] };
    const CHG_R = [{ id: 'cert', text: '인증 표시는 안전 기준을 확인받았다는 뜻이다' }, { id: 'recall', text: '리콜은 모델명으로 확인하고, 대상이면 쓰기를 멈춘다' }, { id: 'same', text: '꽂히기만 하면 충전기는 다 같다', why: '겉모양이 같아도 안전 기준을 지켰는지는 달라요.' }, { id: 'price', text: '가장 싼 것이 가장 합리적이다', why: '안전까지 넣어 따져야 합리적인 선택이에요.' }];

    MODS.push(
      M({
        id: 'intro.charger-dilemma', type: 'intro', title: '싼 충전기 구매 갈림길',
        method: '싼 충전기 구매 갈림길', tool: 'dilemma', minutes: 6,
        levels: { easy: '첫 갈림길(어느 제품을 살지)의 결과만 본다.', base: '석 달 뒤 장면까지 가 보고 근거를 고른다.', challenge: '판매 페이지에서 확인할 것(인증 표시·제조사·모델명)을 말한다.' },
        intro: {
          teacher: '"충전기가 3,000원과 12,000원. 기능은 비슷해 보여요. 여러분이라면 무엇을 살까요?" 손을 들어 고르게 한 뒤 시연 단추로 \'인증 제품\' 길이 석 달 뒤 리콜 확인까지 이어지는 모습을 보여 준다. "꽂히기만 하면 다 같다"는 말이 나오면 "석 달 뒤 뜨거워진 충전기는 어떤 차이에서 생겼을까요?"라고 되묻는다. 전기용품은 안전 인증 표시를 확인하도록 법(전기용품 및 생활용품 안전관리법)으로 정해 두었다는 점을 짚는다.',
          student: '태오가 되어 충전기를 고르고, 석 달 뒤 어떤 일이 이어지는지 따라가 보세요.',
          demo: { tool: 'dilemma', options: { scene: cut(CHG, 2), reasons: CHG_R, title: '충전기 고르기' }, sequence: [{ path: ['cert', 'check'], reasons: ['cert'] }] },
          art: { draw: 'two paper chargers on a shopping screen, one with a small safety mark and one plain and cheap, a paper calendar flipping three months ahead', banner: '싼 게 정말 싼 걸까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      M({
        id: 'intro.battery-emotion', type: 'intro', title: '부푼 태블릿을 본 순간',
        method: '부푼 태블릿을 본 순간', tool: 'emotion', minutes: 6,
        levels: { easy: '그 순간의 마음 카드 두 장을 고른다.', base: '마음 카드와 위험한 충동 카드를 나눈다.', challenge: '충동을 이길 말을 한 문장으로 만든다.' },
        intro: {
          teacher: '"아끼던 태블릿 화면이 들떠 있어요. 배터리가 부풀었대요. 그 순간 어떤 마음이 들까요?" 시연 단추로 마음 카드와 위험한 충동 카드가 나뉘는 모습을 보여 준다. "눌러서 붙이면 다시 쓸 수 있다"는 말이 나오면 "부푼 배터리를 누르면 그 안에서 무슨 일이 생길까요?"라고 되묻는다. 아깝고 귀찮은 마음은 자연스럽지만, 그 마음이 위험한 행동을 고르게 한다는 점을 짚는다.',
          student: '화면이 들뜬 태블릿을 발견한 장면을 보고, 그 순간의 마음과 위험한 충동을 나누어 보세요.',
          demo: { tool: 'emotion', options: { mode: 'sort', slots: ['그 순간의 마음', '위험한 충동'], cards: [{ id: 'waste', text: '아깝다' }, { id: 'lazy', text: '귀찮다' }, { id: 'anx', text: '불안하다' }, { id: 'press', text: '눌러서 화면을 붙인다' }, { id: 'charge', text: '계속 충전해 쓴다' }, { id: 'trash', text: '일반 쓰레기에 버린다' }], shuffle: false }, sequence: [{ sort: { '그 순간의 마음': ['waste', 'lazy', 'anx'], '위험한 충동': ['press', 'charge', 'trash'] } }] },
          art: { draw: 'a paper tablet on a desk with its screen slightly lifted by a puffy battery, a paper student hesitating with one hand reaching out, a warning cloud above', banner: '누르지 마세요!', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
      }),

      M({
        id: 'activity.buy-budget', type: 'activity', title: '예산과 안전 조건 장보기',
        method: '전자제품 구매 예산과 안전 조건', tool: 'economy', minutes: 19,
        levels: { easy: '물건 5개 가운데 예산 안에서 인증 제품을 넣어 고르고, 고른 값의 합계가 보인다.', base: '물건 10개 가운데 필수 조건(인증 제품 셋)을 지켜 고른다.', challenge: '숫자 합계 없이 막대만 보고, 예산이 줄었을 때 무엇을 뺄지 근거를 들어 고른다.' },
        activity: {
          title: '기숙사 장바구니 짜기', tool: 'economy',
          teacher: '"기숙사 생활에 필요한 충전기·멀티탭·보조배터리를 예산 안에서 사 봐요. 조건은 하나, 전기 제품은 인증 표시가 있는 것." 장바구니를 짠 뒤 고른 근거를 짝에게 말하게 한다. 인증 없는 초저가 충전기를 넣어 예산을 맞추는 학생에게 "아낀 돈으로 무엇을 샀고, 대신 무엇을 걸었나요?"라고 묻는다. 예산이 줄면 안전이 아니라 꼭 필요하지 않은 물건을 뺀다는 점을 짚는다.',
          task: '예산 막대를 넘지 않게, 인증 조건을 지켜 장바구니를 짜요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            { prompt: '예산 30,000원. 인증 충전기와 인증 멀티탭은 꼭 넣고, 인증 없는 제품은 빼고 고르세요.', toolOptions: { mode: 'budget', budget: 30000, items: [{ id: 'c1', text: '인증 표시 충전기', price: 12000 }, { id: 'c2', text: '인증 없는 초저가 충전기', price: 3000 }, { id: 's1', text: '인증 표시 멀티탭', price: 15000 }, { id: 'b1', text: '인증 표시 보조배터리', price: 18000 }, { id: 'k', text: '휴대전화 케이스', price: 9000 }] }, target: { budget: { must: ['c1', 's1'], not: ['c2'] } }, difficulty: 0.25 },
            { prompt: '예산 50,000원. 인증 충전기·멀티탭·보조배터리는 꼭 넣고, 인증·정격 정보 없는 제품은 빼고 고르세요.', toolOptions: { mode: 'budget', budget: 50000, items: [{ id: 'c1', text: '인증 표시 충전기', price: 12000 }, { id: 'c2', text: '인증 없는 초저가 충전기', price: 3000 }, { id: 's1', text: '인증 표시 멀티탭', price: 15000 }, { id: 's2', text: '정격 표시 없는 멀티탭', price: 4000 }, { id: 'b1', text: '인증 표시 보조배터리', price: 18000 }, { id: 'b2', text: '제조사 모르는 대용량 보조배터리', price: 7000 }, { id: 'cb', text: '인증 표시 케이블', price: 5000 }, { id: 'u', text: '중고 충전기(모델명 없음)', price: 2000 }, { id: 'e', text: '이어폰', price: 15000 }, { id: 'l', text: '책상 스탠드', price: 20000 }] }, target: { budget: { must: ['c1', 's1', 'b1'], not: ['c2', 's2', 'b2', 'u'] } }, difficulty: 0.35 },
            { prompt: '예산이 25,000원으로 줄었어요. 인증 충전기는 꼭 넣고, 인증 없는 제품은 빼고 고르세요.', toolOptions: { mode: 'budget', budget: 25000, items: [{ id: 'c1', text: '인증 표시 충전기', price: 12000 }, { id: 'c2', text: '인증 없는 초저가 충전기', price: 3000 }, { id: 's1', text: '인증 표시 멀티탭', price: 15000 }, { id: 'cb', text: '인증 표시 케이블', price: 5000 }, { id: 'k', text: '휴대전화 케이스', price: 9000 }, { id: 'u', text: '중고 충전기(모델명 없음)', price: 2000 }] }, target: { budget: { must: ['c1'], not: ['c2', 'u'] } }, difficulty: 0.4, conclude: '예산이 줄면 안전 조건이 아니라 꼭 필요하지 않은 물건을 빼요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '예산이 줄었을 때 뺀 물건과 끝까지 지킨 물건, 그 근거를 쓰세요.' }] },
        notes: '가격은 수업용 가상 값이다. 특정 쇼핑몰·상품을 띄우지 않는다.',
      }),
      M({
        id: 'activity.purchase-check', type: 'activity', title: '구매 전 점검표 만들기',
        method: '구매 전 점검표 만들기', tool: 'kitchen', minutes: 19,
        levels: { easy: '점검 후보 6개 가운데 넣을 항목을 고른다.', base: '후보 10개 가운데 함정을 걸러 내고, 리콜 확인 차례와 믿을 정보를 가린다.', challenge: '카드를 섞어 풀고, 활동지에 리콜 정보를 찾는 방법을 덧붙인다.' },
        activity: {
          title: '충전기 사기 전 점검표', tool: 'kitchen',
          teacher: '"전자제품을 사기 전에 무엇을 확인할까요? 별점이 높으면 안전한 걸까요?" 점검 후보에서 함정을 걸러 내게 한다. \'후기 별점만 본다\'를 넣는 학생에게 "별점은 쓰기 편한지에 대한 말일까요, 안전 기준에 대한 말일까요?"라고 묻는다. 리콜은 소문이 아니라 모델명으로 공식 안내를 찾아 확인하는 정보라는 점을 짚는다.',
          task: '구매 전 점검표에 넣을 항목을 고르고 리콜 확인 차례를 정해요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            CHECKQ('구매 전 점검표에 넣을 항목만 표시하세요.', '전자제품 구매 전 점검표', [
              ['mark', '안전 인증 표시가 있다', true], ['star', '후기 별점이 높다', false], ['maker', '제조사·수입사 정보가 있다', true], ['model', '모델명이 적혀 있다', true], ['recall', '리콜 대상인지 확인했다', true],
              ['cheap', '가장 싸다', false], ['rating', '정격(전압·전류) 정보가 있다', true], ['color', '색이 마음에 든다', false], ['manual', '설명서·주의 문구가 있다', true], ['fast', '배송이 가장 빠르다', false],
            ], { k: 6, d: 0.3 }),
            ORDERQ('내 제품이 리콜 대상인지 확인하는 차례로 놓으세요.', ['제품의 모델명을 확인한다', '제조사·공식 리콜 안내에서 찾아본다', '대상이면 쓰기를 멈춘다', '안내에 따라 교환·수거를 신청한다'], { k: 3, traps: ['친구 말만 듣고 버린다'], d: 0.3 }),
            SORTQ('판매 페이지의 정보를 믿을 정보와 따로 확인할 정보로 나누세요.', ['믿을 정보', '따로 확인할 정보'], [
              ['제품에 찍힌 인증 표시', '제조사 이름과 연락처', '모델명'], ['"KC보다 좋은 품질" 같은 문구', '익명 후기의 "안 뜨거워요"', '"정품급"이라는 말'],
            ], { k: 2, d: 0.35, opt: { groups: false }, more: { conclude: '판매 문구보다 제품에 적힌 인증 표시·제조사·모델명을 확인하고, 리콜은 공식 안내에서 찾아요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내 휴대전화 충전기의 모델명을 어디서 찾을 수 있는지, 리콜은 어떻게 확인할지 쓰세요.' }] },
      }),
      M({
        id: 'activity.swell-order', type: 'activity', title: '부푼 배터리 대처 차례',
        method: '부푼 배터리 발견 뒤 차례', tool: 'timeline', minutes: 19,
        levels: { easy: '행동 카드 3장을 차례로 놓는다.', base: '카드 5장을 차례로 놓고 함정 카드를 남긴다.', challenge: '연기가 날 때 대피·119로 갈라지는 지점을 가르고 그 차례를 놓는다.' },
        activity: {
          title: '부푼 배터리 대처 차례', tool: 'timeline',
          teacher: '"배터리가 부푼 걸 발견했어요. 아깝고 귀찮아도 차례는 정해져 있어요." 카드를 놓기 전에 첫 행동을 말하게 한다. \'눌러서 화면을 붙인다\'를 놓는 학생에게 "부푼 배터리 안에는 무엇이 차 있을까요? 누르면 어떻게 될까요?"라고 묻는다. 연기나 불꽃이 보이는 순간부터는 만지지 않고 나가서 119라는 점을 세 번째 문항에서 짚는다.',
          task: '상황마다 행동 카드를 차례로 놓고 갈라지는 지점을 찾아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDERQ('태블릿 배터리가 부풀었어요. 행동 카드를 차례로 놓으세요.', ['충전을 멈추고 뽑는다', '탈 물건에서 떼어 단단한 바닥에 둔다', '누르거나 뚫지 않는다', '제조사 서비스 센터에 맡긴다', '교체한 배터리는 폐배터리 수거함에 넣는다'], { k: 3, traps: ['눌러서 화면을 붙인다'], d: 0.3 }),
            ORDERQ('보조배터리에서 연기가 나기 시작했어요. 행동 카드를 차례로 놓으세요.', ['가까이 가거나 만지지 않는다', '"불이야" 외쳐 주변에 알린다', '방을 나가며 문을 닫는다', '밖에서 119에 신고한다'], { k: 3, traps: ['집어 들어 창밖으로 던진다'], d: 0.35 }),
            SORTQ('배터리 상황을 \'멈추고 맡기기\'와 \'대피·119\'로 나누세요.', ['멈추고 맡기기', '대피·119'], [
              ['화면이 들떴다', '충전 중 유난히 뜨겁다', '충전이 갑자기 느려졌다'], ['연기가 난다', '불꽃이 튄다', '타는 냄새와 함께 쉭 소리가 난다'],
            ], { k: 2, d: 0.35, more: { conclude: '부풂·열은 멈추고 맡기기, 연기·불꽃은 만지지 말고 나가서 119 — 갈라지는 지점은 연기예요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '부푼 배터리를 일반 쓰레기로 버리면 안 되는 까닭을 쓰세요.' }] },
      }),
      M({
        id: 'activity.cause-analysis', type: 'activity', title: '배터리 발화 원인 분석',
        method: '배터리 사고 원인 분석', tool: 'mindmap', minutes: 19,
        levels: { easy: '원인 가지마다 사례 카드 1장씩(4장)을 놓는다.', base: '사례 8장을 네 가지에 나누고, 원인마다 예방 습관을 짝짓는다.', challenge: '사례를 섞어 나누고, 제조사·판매자·사용자 책임을 가른다.' },
        activity: {
          title: '배터리 발화 원인 가지', tool: 'mindmap',
          teacher: '"배터리 발화는 \'운이 나빠서\' 생길까요? 원인을 네 갈래로 나눠 봐요." 사례를 놓을 때마다 "이 원인은 누가 막을 수 있나요?"라고 묻는다. 모든 원인을 \'사용자 탓\'으로 두는 학생에게 "제품에 결함이 있었다면 사용자가 막을 수 있었을까요?"라고 묻는다. 책임은 나뉘어 있고, 사용자는 그중 습관과 확인을 맡는다는 점을 짚는다.',
          task: '배터리 사고 사례를 원인 가지에 나누고 예방 습관과 책임을 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('사례 카드를 배터리 발화 원인 가지에 나누세요.', ['제품 결함', '충격', '잘못된 충전', '보관 환경'], [
              ['같은 모델이 리콜됨', '분리막이 불량인 제품'], ['휴대전화를 떨어뜨려 모서리가 찌그러짐', '가방 속에서 무거운 책에 눌림'],
              ['인증 없는 충전기로 충전함', '이불 속에서 밤새 충전함'], ['한여름 차 안에 두고 내림', '난로 옆에 보조배터리를 둠'],
            ], { k: 1, d: 0.35, opt: { topic: '배터리 발화' } }),
            MATCHQ('원인 가지마다 예방 습관을 짝지으세요.', [['제품 결함', '리콜 안내를 확인한다'], ['충격', '떨어뜨린 뒤 부풂·열을 살핀다'], ['잘못된 충전', '인증 충전기로 단단한 곳에서 충전한다'], ['보관 환경', '뜨거운 곳에 두지 않는다']], { k: 2, d: 0.35, opt: { topic: '예방 습관' } }),
            SORTQ('배터리 안전을 지킬 일을 책임 칸에 나누세요.', ['제조사', '판매자', '사용자'], [
              ['결함이 확인되면 리콜한다'], ['인증 없는 제품을 팔지 않는다'], ['리콜 안내를 확인한다', '이상이 있으면 쓰기를 멈춘다'],
            ], { k: 1, d: 0.4, more: { conclude: '배터리 안전은 제조사·판매자·사용자가 나눠 지고, 사용자는 습관과 확인을 맡아요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '네 원인 가운데 내 생활에서 가장 일어나기 쉬운 것과 바꿀 습관을 쓰세요.' }] },
      }),

      M({
        id: 'wrap.signal-sort', type: 'wrap', title: '배터리 이상 신호 가르기',
        method: '배터리 이상 신호 가르기', tool: 'mindmap', minutes: 6,
        levels: { easy: '증상 카드 4장을 즉시 사용 중지·점검 필요로 나눈다.', base: '증상 카드 6장을 나눈다.', challenge: '나눈 판단의 근거를 한 줄로 쓴다.' },
        wrap: {
          teacher: '"오늘 본 배터리 신호를 두 칸으로 나눠 봐요. 바로 멈출 신호와 점검을 받아 볼 신호." 카드를 나눈 뒤 한 명에게 근거를 말하게 한다. \'충전이 느림\'을 즉시 중지에 넣은 학생에게 "느린 것과 뜨겁거나 부푼 것은 위험의 크기가 같을까요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '배터리 이상 신호', slots: ['즉시 사용 중지', '점검 필요'], cards: ['부풀었다', '손대기 힘들 만큼 뜨겁다', '탄 냄새가 난다', '충전이 느려졌다', '배터리가 빨리 닳는다', '충전 단자가 헐겁다'] }, prompt: '증상 카드를 두 칸에 나누세요.', target: { sort: { '즉시 사용 중지': ['부풀었다', '손대기 힘들 만큼 뜨겁다', '탄 냄새가 난다'], '점검 필요': ['충전이 느려졌다', '배터리가 빨리 닳는다', '충전 단자가 헐겁다'] } }, difficulty: 0.2 },
            { type: 'choice', prompt: '다 쓴 보조배터리를 버리는 알맞은 방법은?', options: ['일반 쓰레기 봉투에 넣는다', '폐배터리 수거함에 넣는다', '물에 담가 두었다 버린다'], answer: 1, difficulty: 0.1, explain: '배터리는 일반 쓰레기가 아니라 수거함에 따로 버려요.' },
            { type: 'short', prompt: '\'즉시 사용 중지\'로 판단한 근거를 한 줄로 쓰세요.' },
          ],
        },
        worksheet: {
          title: '배터리 이상 신호',
          items: [
            { type: 'table', prompt: '증상마다 할 일을 쓰세요.', columns: ['증상', '할 일'], cells: [['부풀었다', ''], ['충전이 느려졌다', ''], ['연기가 난다', '']] },
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '부푼 배터리는 누르거나 ___ 않는다.', answer: '뚫지' },
          ],
        },
      }),
      M({
        id: 'wrap.device-selfcheck', type: 'wrap', title: '내 기기 스스로 점검',
        method: '내 기기 스스로 점검', tool: 'timer', minutes: 6,
        levels: { easy: '점검 항목 3개를 스스로 표시한다.', base: '점검 항목 5개를 스스로 표시한다.', challenge: '바꿀 물건과 바꿀 시기를 정해 쓴다.' },
        wrap: {
          teacher: '"지금 가방 속 휴대전화·보조배터리·충전기를 떠올려 봐요. 오늘 배운 신호가 있나요?" 점검 칸을 함께 읽고 스스로 표시하게 한다. "아직 멀쩡해서 할 게 없다"는 학생에게 "충전기에 찍힌 인증 표시와 모델명을 오늘 밤 한 번 확인해 볼까요?"라고 구체적인 행동 하나를 짚어 준다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '내 기기 점검' }, prompt: '내 기기 상태를 스스로 점검해 표시하세요.', target: { selfCheck: ['휴대전화·태블릿이 부풀거나 들뜬 곳이 없는지 본다', '충전기에 인증 표시와 모델명이 있는지 본다', '보조배터리가 유난히 뜨거워지지 않는지 본다', '충전 단자·선에 탄 자국이 없는지 본다', '리콜 대상인지 모델명으로 찾아본다'] }, difficulty: 0.1 },
            { type: 'choice', prompt: '친구가 리콜 대상 충전기를 "귀찮아서 그냥 쓴다"고 해요. 알맞은 말은?', options: ['괜찮아, 아직 되잖아', '교환 신청 방법 같이 찾아보자', '버리고 아무거나 사'], answer: 1, difficulty: 0.15, explain: '리콜 정보는 나누고 함께 확인할 때 친구를 지켜요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '내 기기 점검',
          items: [
            { type: 'check', prompt: '확인한 것에 표시하세요.', options: ['부풂·들뜸', '인증 표시·모델명', '보조배터리 열', '탄 자국', '리콜 여부'] },
            { type: 'short', prompt: '바꿀 물건이 있다면 무엇을 언제 바꿀지 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 8. 기계 실습 차림과 실험 뒤처리 (11학년)
  // ======================================================================================================
  {
    const M = MOD('workshop-cleanup', [11]);
    const GLOVE = { text: '기술 실습실. 친구 준서가 "손 다치면 안 되니까"라며 면장갑을 끼고 탁상 드릴 앞에 섰다.', who: '준서', motif: 'house', choices: [
      { id: 'quiet', text: '손을 지키려는 거니 그냥 둔다', result: '드릴이 돌자 장갑 끝 실밥이 날 가까이 흔들린다.', impact: [{ who: '준서', text: '손이 말려들 위험이 커진다', tone: -1 }], ending: '보호하려던 장갑이 위험을 끌어당길 수 있다.' },
      { id: 'tell', text: '회전 기계 앞에서는 장갑을 벗어야 한다고 말한다', result: '준서가 "그럼 손은 어떻게 지켜?"라고 묻는다.', impact: [{ who: '준서', text: '위험을 알게 된다', tone: 1 }],
        next: { text: '준서가 장갑을 벗었지만 불안해한다.', choices: [
          { id: 'clamp', text: '공작물을 바이스에 고정하고 손은 날에서 떨어뜨리자고 한다', result: '손으로 붙잡지 않고도 구멍을 뚫는다.', impact: [{ who: '준서', text: '맨손이지만 더 안전하다', tone: 1 }],
            next: { text: '작업이 끝났다. 준서가 칩(쇳밥)을 손으로 쓸어 내려 한다.', choices: [
              { id: 'brush', text: '기계를 멈춘 뒤 솔로 치우자고 한다', result: '날카로운 칩에 손을 베지 않는다.', impact: [{ who: '준서', text: '끝까지 다치지 않는다', tone: 1 }], ending: '작업 종류에 따라 장갑 판단이 달라지듯, 정리에도 맞는 도구가 있다.' },
              { id: 'hand', text: '조금이니 손으로 쓸어도 된다고 한다', result: '칩에 손가락을 살짝 벤다.', impact: [{ who: '준서', text: '작은 상처를 입는다', tone: -1 }], ending: '마지막 정리까지 수칙이 이어져야 한다.' }] } },
          { id: 'hold', text: '손으로 꽉 잡고 빨리 끝내자고 한다', result: '드릴이 공작물을 돌리며 손이 휘청인다.', impact: [{ who: '준서', text: '손을 다칠 뻔한다', tone: -1 }], ending: '장갑을 벗는 것만으로는 부족하다 — 대신할 보호 방법이 필요하다.' }] } },
      { id: 'thick', text: '더 두꺼운 장갑을 끼라고 한다', result: '손놀림이 둔해지고 장갑은 여전히 말려들 수 있다.', impact: [{ who: '준서', text: '위험이 그대로다', tone: -1 }], ending: '회전 기계 앞에서는 장갑의 두께가 아니라 장갑 자체가 문제다.' }] };
    const GLOVE_R = [{ id: 'catch', text: '회전하는 날에 장갑이 걸리면 손이 함께 말려든다' }, { id: 'kind', text: '약품·열 작업과 회전 기계 작업은 장갑 판단이 다르다' }, { id: 'always', text: '장갑은 언제나 손을 지켜 준다', why: '회전 기계 앞에서는 장갑이 오히려 위험해요.' }, { id: 'quick', text: '빨리 끝내면 위험할 틈이 없다', why: '서두를수록 손이 날 가까이 가기 쉬워요.' }];

    MODS.push(
      M({
        id: 'intro.attire-body', type: 'intro', title: '드릴 앞 차림 점검',
        method: '드릴 앞 차림 점검', tool: 'body', minutes: 6,
        levels: { easy: '말려들 위험이 있는 곳 두 곳(손목·목)을 함께 고른다.', base: '말려들 위험이 있는 곳(손목·팔꿈치·목)과 눈을 모두 고른다.', challenge: '고른 곳마다 고칠 차림(소매·장갑·목걸이·긴 머리·보안경)을 말한다.' },
        intro: {
          teacher: '"탁상 드릴이 돌아가요. 돌아가는 것에 걸려 말려들 수 있는 것은 몸의 어디에 있을까요?" 시연 단추로 종이 몸에서 손목(소매·장갑), 팔꿈치(풀린 소매), 목(목걸이·긴 머리)과 눈이 골라지는 모습을 보여 준다. "장갑을 끼면 손이 안전하다"는 말이 나오면 "돌아가는 날에 장갑 실이 감기면 손은 어떻게 될까요?"라고 되묻는다. 오늘은 기계 실습 차림과 실험 뒤처리를 수칙대로 해 보는 시간이라고 밝힌다.',
          student: '종이 몸에서 드릴 작업 때 옷·장신구·머리카락이 말려들 수 있는 곳과 지켜야 할 곳을 골라 보세요.',
          demo: { tool: 'body', options: { mode: 'parts', parts: ['눈', '목', '어깨', '팔꿈치', '손목', '무릎'], names: true }, sequence: [{ parts: ['눈', '목', '팔꿈치', '손목'] }] },
          art: { draw: 'a paper bench drill with a spinning bit, a paper student tying back long hair, rolling sleeves tight and taking off a necklace, safety goggles on the bench', banner: '돌아가는 기계 앞 차림', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      M({
        id: 'intro.cleanup-story', type: 'intro', title: '실험 뒤 개수대 장면',
        method: '실험 뒤 개수대 장면', tool: 'story', minutes: 6,
        levels: { easy: '장면 두 개에서 문제를 고른다.', base: '장면 네 개를 넘겨 보며 문제 장면을 모두 고른다.', challenge: '문제 장면마다 바른 처리를 말한다.' },
        intro: {
          teacher: '"종이 울리기 직전, 서두르는 모둠의 정리 장면이에요. 무엇이 문제일까요?" 장면을 넘기며 고르게 하고 시연 단추로 문제 장면을 바구니에 담는다. "남은 시약은 물로 희석하면 개수대에 버려도 된다"는 말이 나오면 "개수대 물은 어디로 흘러갈까요? 다른 모둠의 약품과 섞이면요?"라고 되묻는다. 실험은 뒤처리까지가 실험이라는 점을 짚는다.',
          student: '실험이 끝나 서두르는 가상 모둠의 정리 장면을 넘겨 보며, 문제가 있는 장면을 골라 보세요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '문제 장면', title: '종 치기 2분 전(가상)', cards: [{ id: 'sink', text: '남은 시약을 개수대에 붓는다', motif: 'cloud' }, { id: 'tissue', text: '깨진 비커를 휴지로 싸서 쓰레기통에 넣는다', motif: 'leaf' }, { id: 'label', text: '폐액통 표시를 확인하고 붓는다', motif: 'sun' }, { id: 'hand', text: '바닥의 유리 조각을 손으로 줍는다', motif: 'star' }], shuffle: false }, sequence: [{ pick: ['sink', 'tissue', 'hand'] }] },
          art: { draw: 'a paper science lab sink with a student pouring leftover liquid, another wrapping broken glass in tissue, labeled waste bottles waiting unused on a shelf', banner: '실험은 뒤처리까지', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
      }),

      M({
        id: 'activity.machine-check', type: 'activity', title: '기계 작업 전 점검과 순서',
        method: '기계 작업 전 점검과 순서', tool: 'timer', minutes: 19,
        levels: { easy: '작업 순서 카드 3장을 차례로 놓는다.', base: '순서 카드 5장을 놓고 안전 점검 칸을 모두 확인한다.', challenge: '드릴 작업 순서도 놓아 보고, 선반 작업과 다른 단계를 찾는다.' },
        activity: {
          title: '선반·드릴 작업 순서와 점검', tool: 'timer',
          teacher: '"기계 앞에서는 순서가 곧 안전이에요. 전원을 넣기 전에 무엇을 확인할까요?" 순서 카드를 놓고 안전 점검 칸을 함께 확인하게 한다. \'작동\'을 \'덮개 확인\' 앞에 두는 학생에게 "돌아가는 중에 덮개가 열려 있는 걸 알면 어떻게 할까요?"라고 묻는다. 정지 뒤에도 날이 완전히 멈출 때까지 기다리는 것이 순서의 일부라는 점을 짚는다.',
          task: '기계 작업 순서 카드를 차례로 놓고 안전 점검을 표시해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '목공 선반 작업 순서를 놓고, 안전 점검을 모두 확인하세요.', toolOptions: { title: '선반 작업', cards: ['작동', '덮개·고정 확인', '정지 후 정리', '차림 확인', '주변 정리'], safety: ['보안경을 썼다', '소매·긴 머리를 정리했다', '장갑을 벗었다'] }, target: { order: ['차림 확인', '덮개·고정 확인', '주변 정리', '작동', '정지 후 정리'], safety: true }, difficulty: 0.3,
              levels: { easy: { prompt: '목공 선반 작업 순서 카드 3장을 놓으세요(카드 3장).', toolOptions: { cards: ['작동', '차림 확인', '덮개·고정 확인'], safety: [] }, target: { order: ['차림 확인', '덮개·고정 확인', '작동'] } } } },
            { prompt: '탁상 드릴 작업 순서를 놓고, 안전 점검을 모두 확인하세요.', toolOptions: { title: '드릴 작업', cards: ['구멍 뚫기', '공작물을 바이스에 고정', '날이 멈출 때까지 기다리기', '차림 확인', '날 고정 확인'], safety: ['보안경을 썼다', '장갑을 벗었다', '손을 날에서 떨어뜨렸다'] }, target: { order: ['차림 확인', '날 고정 확인', '공작물을 바이스에 고정', '구멍 뚫기', '날이 멈출 때까지 기다리기'], safety: true }, difficulty: 0.35,
              levels: { easy: { prompt: '탁상 드릴 작업 순서 카드 3장을 놓으세요(카드 3장).', toolOptions: { cards: ['구멍 뚫기', '차림 확인', '공작물을 바이스에 고정'], safety: [] }, target: { order: ['차림 확인', '공작물을 바이스에 고정', '구멍 뚫기'] } } } },
            { prompt: '기계 작업을 마친 뒤 정리 순서를 놓으세요.', toolOptions: { title: '작업 뒤 정리', cards: ['칩(쇳밥)을 솔로 치우기', '전원 끄기', '날이 완전히 멈춘 것 확인', '공구 제자리에 두기'] }, target: { order: ['전원 끄기', '날이 완전히 멈춘 것 확인', '칩(쇳밥)을 솔로 치우기', '공구 제자리에 두기'] }, difficulty: 0.3, conclude: '기계 작업은 차림 → 덮개·고정 → 주변 → 작동 → 정지 확인 → 정리 순서로, 멈춘 뒤에도 끝까지 수칙을 지켜요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '선반 작업과 드릴 작업에서 다른 단계를 쓰세요.', columns: ['', '선반', '드릴'], cells: [['고정하는 것', '', ''], ['조심할 점', '', '']] }] },
      }),
      M({
        id: 'activity.glove-dilemma', type: 'activity', title: '드릴 앞 장갑 갈림길',
        method: '드릴 앞 장갑 갈림길', tool: 'dilemma', minutes: 19,
        levels: { easy: '갈림길 하나에서 고르고 근거를 고른다.', base: '갈림길 둘을 지나 결과를 보고, 작업 종류에 따른 장갑 판단 근거를 고른다.', challenge: '갈림길 셋까지 가서 장갑 대신 쓸 보호 방법을 고르고, 다른 길과 견준다.' },
        activity: {
          title: '면장갑 낀 친구와 드릴', tool: 'dilemma',
          teacher: '"준서는 손을 지키려고 장갑을 꼈어요. 마음은 맞는데, 방법도 맞을까요?" 선택마다 준서의 손에 어떤 일이 생기는지 읽게 한다. \'더 두꺼운 장갑\'을 고른 학생에게 "두꺼우면 덜 말려들까요, 손놀림만 둔해질까요?"라고 묻는다. 장갑을 벗는 것만이 아니라 바이스·솔처럼 대신할 보호 방법까지 고르는 것이 이 갈림길의 끝이라는 점을 짚는다.',
          task: '장갑 갈림길을 따라 결과를 보고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('면장갑을 끼고 드릴 앞에 선 친구에게 안전한 길을 고르고 근거를 고르세요.', GLOVE, [['tell', 'clamp', 'brush']], GLOVE_R, ['catch', 'kind'], { d: 0.4 }),
            EXPLOREQ('\'그냥 둔다\'·\'두꺼운 장갑\' 길도 끝까지 가 보고 결과를 견주세요.', GLOVE, GLOVE_R, ['다른 길의 끝 장면을 확인했다', '장갑이 도움이 될 때와 위험할 때를 견주었다'], { d: 0.35 }),
            DILQ('조리 실습에서 뜨거운 냄비를 옮길 때 알맞은 길을 고르고 근거를 고르세요.', { text: '조리 실습에서 끓는 냄비를 옮겨야 한다. 오늘 배운 대로라면 장갑을 벗어야 할까?', who: '모둠', motif: 'sun', choices: [
              { id: 'bare', text: '장갑은 위험하니 맨손으로 옮긴다', result: '손잡이가 뜨거워 냄비를 놓칠 뻔한다.', impact: [{ who: '모둠', text: '데일 위험이 생긴다', tone: -1 }], ending: '장갑 판단은 작업 종류에 따라 달라진다.' },
              { id: 'mitt', text: '내열 장갑을 끼고 두 손으로 옮긴다', result: '안전하게 옮긴다.', impact: [{ who: '모둠', text: '열에서 손을 지킨다', tone: 1 }],
                next: { text: '옮긴 뒤 바로 칼질을 이어서 해야 한다.', choices: [
                  { id: 'off', text: '내열 장갑을 벗고 칼을 잡는다', result: '손놀림이 정확해진다.', impact: [{ who: '모둠', text: '베일 위험이 줄어든다', tone: 1 }], ending: '작업이 바뀌면 장구도 바꾼다.' },
                  { id: 'on', text: '귀찮으니 낀 채 칼질한다', result: '칼이 미끄러진다.', impact: [{ who: '모둠', text: '베일 위험이 커진다', tone: -1 }], ending: '한 작업에 맞는 장구가 다음 작업에도 맞지는 않는다.' }] } }] },
              [['mitt', 'off']], [{ id: 'heat', text: '열을 다루는 작업에는 내열 장갑이 손을 지킨다' }, { id: 'change', text: '작업이 바뀌면 장구 판단도 다시 한다' }, { id: 'never', text: '장갑은 어떤 작업에서도 끼면 안 된다', why: '회전 기계와 달리 열 작업에는 장갑이 필요해요.' }], ['heat', 'change'], { d: 0.35, more: { conclude: '장갑은 회전 기계 앞에서는 벗고, 열·약품 작업에는 맞는 종류로 끼어요. 작업이 바뀌면 판단도 다시 해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '회전 기계 작업에서 장갑 대신 손을 지키는 방법 두 가지를 쓰세요.' }] },
      }),
      M({
        id: 'activity.waste-sort', type: 'activity', title: '실험 폐기물 수거 용기',
        method: '실험 폐기물 분류', tool: 'mindmap', minutes: 19,
        levels: { easy: '폐기물 카드 4장(용기마다 1장)을 수거 용기 칸에 나눈다.', base: '카드 10장을 나누고, 개수대에 버리면 안 되는 까닭을 고르며, 표시 없는 용기 앞에서 할 일의 차례를 놓는다.', challenge: '카드를 섞어 나누고, 활동지에 우리 실험실 용기 표시를 적어 대조한다.' },
        activity: {
          title: '폐기물 수거 용기 나누기', tool: 'mindmap',
          teacher: '"실험이 끝나고 남은 것들, 모두 같은 곳에 버려도 될까요?" 폐기물 카드를 수거 용기 칸에 나누게 한다. 깨진 유리를 일반 쓰레기에 넣는 학생에게 "쓰레기봉투를 묶는 사람의 손은 어떻게 될까요?"라고 묻는다. "물에 희석하면 개수대에 버려도 된다"는 학생에게 섞인 약품끼리 반응할 수 있고 하수로 흘러간다는 점을 짚는다. 수거 용기 이름은 우리 학교 실험실 표시를 따른다고 말해 준다.',
          task: '실험 폐기물을 수거 용기 칸에 나누고 까닭을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('실험 폐기물 카드를 수거 용기 칸에 나누세요.', ['산·염기 폐액통', '유기 용매 폐액통', '깨진 유리 통', '일반 쓰레기'], [
              ['남은 묽은 염산', '남은 수산화나트륨 용액', '중화 실험 뒤 남은 용액'],
              ['쓰고 남은 에탄올', '아세톤 세척액'],
              ['깨진 비커 조각', '깨진 시험관', '부러진 유리 막대'],
              ['약품이 닿지 않은 포장 비닐', '약품이 닿지 않은 종이 상자'],
            ], { k: 1, d: 0.35, opt: { topic: '실험 폐기물' } }),
            PICKQ('남은 시약을 개수대에 버리면 안 되는 까닭만 고르세요.', ['배관을 거쳐 하수와 환경으로 흘러간다', '다른 약품과 섞여 반응할 수 있다'], ['물에 희석하면 안전해진다', '양이 적으면 괜찮다'], { d: 0.35, opt: { basket: '까닭' } }),
            ORDERQ('폐액통에 표시가 없어 어디에 버릴지 모를 때 할 일을 차례로 놓으세요.', ['버리지 않고 비커째 그대로 둔다', '선생님께 약품 이름을 말하고 묻는다', '알맞은 표시 용기를 받아 버린다', '빈 비커는 정해진 방법으로 씻는다'], { k: 3, traps: ['아무 통에나 붓는다'], d: 0.35, opt: { mode: 'order' }, more: { conclude: '폐기물은 표시된 수거 용기에 나눠 버리고, 표시가 없으면 버리지 말고 먼저 물어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 실험실 수거 용기 표시를 적고, 넣을 것을 쓰세요.', columns: ['용기 표시', '넣을 것'], cells: [['', ''], ['', ''], ['', '']] }] },
        notes: '수거 용기 구분은 학교 실험실마다 다를 수 있다. 수업 전에 우리 학교 폐액통 표시를 확인하고 칸 이름을 맞춰 말해 준다.',
      }),
      M({
        id: 'activity.cleanup-rubric', type: 'activity', title: '실험실 뒤처리 안내문',
        method: '실험실 뒤처리 안내문 쓰기', tool: 'rubric-writing', minutes: 19,
        levels: { easy: '단계마다 문장 틀을 보고 쓴다.', base: '다섯 단계 안내문을 나눠 쓰고 기준표로 점검한다.', challenge: '단계마다 기준 하나가 더 붙고, 그림 안내로 바꿀 부분을 활동지에 표시한다.' },
        activity: {
          title: '후배에게 줄 뒤처리 안내문', tool: 'rubric-writing',
          teacher: '"내년에 실험반에 들어올 후배에게 뒤처리 안내문을 남긴다면? 순서가 있고, 까닭이 있고, 위험 경고가 있어야 해요." 다섯 단계를 세 문항으로 나눠 쓰게 한다. "알아서 잘 치운다"처럼 쓴 학생에게 "후배가 이 문장만 읽고 깨진 유리를 어디에 버릴 수 있을까요?"라고 묻는다. 경고 문장은 겁을 주기보다 무엇이 왜 위험한지 알려 주어야 한다는 점을 짚는다.',
          task: '실험실 뒤처리 안내문을 단계별로 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('안내문 1~2단계(남은 시약 처리)를 2~3문장으로 쓰세요.', '후배에게 줄 뒤처리 안내문 1~2단계: 남은 시약은 어떻게 처리할까요?', ['순서대로 썼다', '그렇게 하는 까닭을 썼다', '위험 경고를 한 가지 넣었다'], { min: 40, max: 300, sent: [2, 3], must: [['폐액', '수거']], starter: '1단계: 남은 시약은 개수대가 아니라 ~', plus: '용기 표시를 확인하라는 말을 넣었다', d: 0.35 }),
            RWQ('안내문 3~4단계(깨진 유리·기구 정리)를 2~3문장으로 쓰세요.', '안내문 3~4단계: 깨진 유리와 실험 기구는 어떻게 정리할까요?', ['순서대로 썼다', '그렇게 하는 까닭을 썼다', '위험 경고를 한 가지 넣었다'], { min: 40, max: 300, sent: [2, 3], must: [['유리']], starter: '3단계: 깨진 유리는 손으로 줍지 말고 ~', plus: '도구 이름(빗자루·쓰레받기 등)을 넣었다', d: 0.35 }),
            RWQ('안내문 5단계(마무리 점검)를 1~2문장으로 쓰세요.', '안내문 5단계: 실험실을 나가기 전 무엇을 확인할까요?', ['확인할 것을 구체적으로 썼다', '손 씻기를 넣었다', '읽는 사람이 바로 따라 할 수 있다'], { min: 20, max: 200, sent: [1, 2], must: [['씻']], starter: '5단계: 나가기 전에 ~', plus: '그림으로 바꾸면 좋을 부분을 골랐다', d: 0.3, more: { conclude: '좋은 안내문은 순서·까닭·경고가 있어, 처음 온 사람도 그대로 따라 할 수 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '안내문 가운데 그림으로 바꾸면 더 잘 전달될 단계를 하나 골라 그 까닭을 쓰세요.' }] },
      }),

      M({
        id: 'wrap.rule-timeline', type: 'wrap', title: '실습 하루 흐름 정리',
        method: '실습 하루 흐름 정리', tool: 'timeline', minutes: 6,
        levels: { easy: '단계 카드 3장을 차례로 놓는다.', base: '단계 카드 5장을 차례로 놓는다.', challenge: '단계마다 지킬 수칙을 하나씩 활동지에 직접 쓴다.' },
        wrap: {
          teacher: '"실습 시작부터 뒤처리까지, 오늘의 하루 흐름을 다섯 단계로 정리해 봐요." 카드를 놓은 뒤 단계마다 수칙 하나씩을 반 전체가 말한다. \'뒤처리\'를 빼고 \'작업\'에서 끝내는 학생에게 "작업이 끝났을 때 실험실에 남아 있는 것은 무엇일까요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'timeline', options: { mode: 'order', axis: ['시작', '끝'], slots: 5, cards: ['뒤처리', '차림 확인', '마무리 점검', '작업', '설비·장구 점검'] }, prompt: '실습 하루 흐름을 차례로 놓으세요.', target: { order: ['차림 확인', '설비·장구 점검', '작업', '뒤처리', '마무리 점검'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '깨진 유리 조각을 치우는 알맞은 방법은?', options: ['손으로 주워 휴지에 싼다', '빗자루·쓰레받기로 모아 전용 통에 넣는다', '물로 개수대에 흘려보낸다'], answer: 1, difficulty: 0.1, explain: '유리는 도구로 모아 깨진 유리 전용 통에 버려요.' },
            { type: 'short', prompt: '단계 하나를 골라 지킬 수칙을 쓰세요.' },
          ],
        },
        worksheet: {
          title: '실습 하루 흐름',
          items: [
            { type: 'table', prompt: '단계마다 지킬 수칙을 쓰세요.', columns: ['단계', '수칙'], cells: [['차림 확인', ''], ['작업', ''], ['뒤처리', '']] },
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '남은 시약은 개수대가 아니라 정해진 ___ 용기에 버린다.', answer: '수거(폐액)' },
          ],
        },
      }),
      M({
        id: 'wrap.shop-check', type: 'wrap', title: '실습실 마무리 점검표',
        method: '실습실 마무리 점검표', tool: 'kitchen', minutes: 6,
        levels: { easy: '알맞은 항목 4개만 있는 점검표에 표시한다.', base: '항목 6개 가운데 함정 2개를 빼고 표시한다.', challenge: '점검표에 항목 하나를 더해 쓴다.' },
        wrap: {
          teacher: '"실습실을 나가기 전 마지막 점검이에요. 알맞은 항목만 표시해 봐요." 함정 \'공구는 다음 반이 쓰게 책상에 둔다\'에 표시한 학생에게 "다음 반은 그 공구가 어디 있는지 알까요, 날은 덮여 있을까요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '실습실 마무리 점검', items: [{ id: 'power', text: '기계 전원을 껐다' }, { id: 'tool', text: '공구를 제자리에 두었다' }, { id: 'waste', text: '폐기물을 용기별로 나눴다' }, { id: 'floor', text: '바닥 칩·유리를 치웠다' }, { id: 'leave', text: '공구는 다음 반이 쓰게 책상에 둔다' }, { id: 'sink', text: '남은 시약은 개수대에 버렸다' }] }, prompt: '실습실 마무리 점검에 알맞은 항목만 표시하세요.', target: { checklist: ['power', 'tool', 'waste', 'floor'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '"장갑을 끼면 어떤 기계든 안전하다"에 대한 판단으로 알맞은 것은?', options: ['맞다', '회전 기계 앞에서는 장갑이 말려들 수 있어 벗는다', '두꺼운 장갑이면 맞다'], answer: 1, difficulty: 0.15, explain: '장갑 판단은 작업 종류에 따라 달라요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '실습실 마무리 점검',
          items: [
            { type: 'check', prompt: '실습실을 나가기 전 확인한 것에 표시하세요.', options: ['전원', '공구 제자리', '폐기물 분리', '바닥 정리'] },
            { type: 'short', prompt: '점검표에 더하고 싶은 항목 하나를 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 9. 근력 운동과 겨울 산행의 위험 판단 (11학년)
  // ======================================================================================================
  {
    const M = MOD('training-hiking', [11]);
    const PEAK = { text: '겨울 산행. 정상까지 30분 남았는데 눈발이 굵어지고, 일행 하린이의 장갑이 젖어 손이 시리다고 한다. 지금은 오후 2시다.', who: '산행 일행', motif: 'mountain', choices: [
      { id: 'push', text: '조금만 더 가서 정상을 찍는다', result: '정상에 섰지만 눈이 더 쌓이고 하린이 손이 하얗게 질린다.', impact: [{ who: '하린', text: '추위로 몸이 굳는다', tone: -1 }],
        next: { text: '내려가는 길, 해가 지기 시작하고 길이 미끄럽다.', choices: [
          { id: 'run', text: '서둘러 뛰듯 내려간다', result: '미끄러져 발목을 접질린다.', impact: [{ who: '일행', text: '어두운 산에서 부상자가 생긴다', tone: -1 }], ending: '정상 30분이 하산 몇 시간을 위험하게 만들었다.' },
          { id: 'call', text: '멈춰서 119에 위치를 알린다', result: '구조를 기다리며 떨면서 밤을 맞는다.', impact: [{ who: '일행', text: '도움을 청했지만 위험한 밤을 보낸다', tone: 0 }], ending: '도움 요청은 옳았지만, 돌아설 때를 놓친 대가가 컸다.' }] } },
      { id: 'turn', text: '지금 돌아서 내려가자고 한다', result: '아쉬워하는 일행도 있지만 모두 하산을 시작한다.', impact: [{ who: '하린', text: '더 추워지기 전에 내려간다', tone: 1 }],
        next: { text: '내려가는 길에 하린이 "나 때문에 정상을 못 갔어"라며 미안해한다.', choices: [
          { id: 'gear', text: '여벌 장갑을 건네고 "같이 안전하게 내려가는 게 우리 목표야"라고 말한다', result: '하린이 손을 녹이며 걸음이 가벼워진다.', impact: [{ who: '하린', text: '마음도 몸도 회복된다', tone: 1 }],
            next: { text: '산 아래 도착. 한 일행이 "다음엔 더 일찍 출발하자"고 한다.', choices: [
              { id: 'plan', text: '해 지는 시각으로 돌아설 시각을 미리 정하자고 한다', result: '다음 산행 계획에 \'돌아설 시각\' 칸이 생긴다.', impact: [{ who: '일행', text: '다음 산행이 더 안전해진다', tone: 1 }], ending: '정상에 못 간 산행이 아니라, 모두 돌아온 산행이다.' },
              { id: 'luck', text: '이번엔 운이 나빴을 뿐이라고 한다', result: '다음에도 같은 계획으로 나선다.', impact: [{ who: '일행', text: '같은 위험을 되풀이할 수 있다', tone: -1 }], ending: '운이 아니라 계획이 산행의 안전을 정한다.' }] } },
          { id: 'blame', text: '"다음엔 장갑 좀 잘 챙겨"라고 한다', result: '하린이 말없이 걷고 일행 분위기가 무거워진다.', impact: [{ who: '하린', text: '다음엔 불편을 말하지 않게 된다', tone: -1 }], ending: '불편을 말한 사람을 탓하면 다음 신호는 숨겨진다.' }] } },
      { id: 'split', text: '하린이만 먼저 내려가라고 한다', result: '하린이 혼자 눈길을 내려간다.', impact: [{ who: '하린', text: '혼자 위험에 놓인다', tone: -1 }], ending: '산에서는 흩어지는 순간 도울 사람이 사라진다.' }] };
    const PEAK_R = [{ id: 'sun', text: '해 지는 시각과 날씨로 돌아설 시각을 정한다' }, { id: 'cold', text: '젖은 장갑·옷은 체온을 빼앗는다' }, { id: 'top', text: '정상까지 가지 않으면 실패한 산행이다', why: '산행의 목표는 정상이 아니라 모두 안전하게 돌아오는 것이에요.' }, { id: 'near', text: '30분이면 금방이니 괜찮다', why: '올라간 30분은 내려올 때 더 길고 위험해질 수 있어요.' }];

    MODS.push(
      M({
        id: 'intro.gym-story', type: 'intro', title: '헬스장 첫날 사례',
        method: '헬스장 첫날 사례', tool: 'story', minutes: 6,
        levels: { easy: '장면 세 개에서 위험한 선택을 고른다.', base: '장면 네 개를 넘겨 보며 위험한 선택을 모두 고른다.', challenge: '위험한 선택마다 대안을 말한다.' },
        intro: {
          teacher: '"가상의 친구 시우가 처음 헬스장에 갔어요. 영상에서 본 대로 무거운 덤벨부터 들어요. 어디가 위험할까요?" 장면을 넘기며 고르게 하고 시연 단추로 위험한 장면을 바구니에 담는다. "무게를 빨리 늘릴수록 효과가 크다"는 말이 나오면 "자세가 무너진 채 든 무게는 근육에 갈까요, 관절에 갈까요?"라고 되묻는다. 오늘은 근력 운동과 겨울 산행에서 멈출 때를 판단하는 기준을 세운다고 밝힌다.',
          student: '헬스장에 처음 간 가상 인물의 장면을 넘겨 보며, 위험한 선택을 골라 보세요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '위험한 선택', title: '시우의 헬스장 첫날(가상)', cards: [{ id: 'heavy', text: '영상 속 무게 그대로 덤벨을 든다', motif: 'star' }, { id: 'nowarm', text: '준비운동 없이 바로 시작한다', motif: 'cloud' }, { id: 'alone', text: '보조자 없이 무거운 바벨을 든다', motif: 'moon' }, { id: 'ask', text: '트레이너에게 자세를 묻는다', motif: 'sun' }], shuffle: false }, sequence: [{ pick: ['heavy', 'nowarm', 'alone'] }] },
          art: { draw: 'a paper gym with racks of dumbbells, a paper teenager lifting a too-heavy weight while watching a phone video, a trainer figure nearby ready to help', banner: '처음엔 무엇부터?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      M({
        id: 'intro.sunset-clock', type: 'intro', title: '해 지는 시각으로 돌아서기',
        method: '해 지는 시각으로 돌아설 시각 정하기', tool: 'clock', minutes: 6,
        levels: { easy: '정각 단위로 돌아설 시각을 함께 센다.', base: '분 단위로 세고 여유 시간을 넣는다.', challenge: '일행 가운데 가장 느린 사람의 속도를 반영해 시각을 고친다.' },
        intro: {
          teacher: '"이날 해 지는 시각은 오후 5시 30분(가상 예보), 하산에는 3시간이 걸려요. 여유 30분까지 두면 몇 시에 돌아서야 할까요?" 학생들이 거꾸로 세는 동안 시연 단추로 시계가 2시를 가리키는 모습을 보여 준다. "정상까지 거의 다 왔으면 가야 한다"는 말이 나오면 "돌아설 시각은 정상과의 거리가 아니라 무엇으로 정했나요?"라고 되묻는다.',
          student: '해 지는 시각과 하산에 걸리는 시간을 보고, 산에서 돌아설 시각을 거꾸로 세어 보세요.',
          demo: { tool: 'clock', options: { minuteStep: 5 }, sequence: [{ h: 2, m: 0 }] },
          art: { draw: 'a paper winter mountain with a low orange paper sun near the ridge, a paper clock hanging from a tree branch, hikers with backpacks turning back on a snowy trail', banner: '돌아설 시각을 먼저 정해요', extra: [{ motif: 'snow', x: 300, y: 96 }] },
        },
        notes: '해 지는 시각은 수업용 가상 예보다. 실제 산행 전에는 그날의 일몰 시각과 날씨 예보를 확인하게 한다.',
      }),

      M({
        id: 'activity.lift-plan', type: 'activity', title: '근력 운동 구간 계획',
        method: '근력 운동 구간 계획', tool: 'timer', minutes: 19,
        levels: { easy: '전체 운동 시간이 늘 보이고, 운동 한 가지의 구간을 맞춘다.', base: '구간을 맞추고 운동 차례와 안전 점검(보조자·자세)을 함께 확인한다.', challenge: '전체 시간은 맞힌 뒤에만 보이고, 통증이 생겼을 때 계획을 바꾸는 문항까지 푼다.' },
        activity: {
          title: '세트와 쉬기 계획 세우기', tool: 'timer',
          teacher: '"근력 운동은 무게만이 아니라 세트와 쉬기, 순서까지가 계획이에요." 구간 타이머를 맞춘 뒤 운동 차례와 안전 점검을 함께 표시하게 한다. "아픔은 참고 넘어서야 한다"는 학생에게 "근육이 뻐근한 것과 관절이 찌르듯 아픈 것은 같은 신호일까요?"라고 묻는다. 통증이 생기면 무게를 버티는 것이 아니라 계획을 줄이는 것이 맞는 판단이라는 점을 짚는다.',
          task: '구간 타이머로 근력 운동을 계획하고 안전 점검을 표시해요.', levels: { easy: { showTotal: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            { prompt: '맨몸 스쿼트를 40초 하고 60초 쉬기를 3세트 하도록 타이머를 맞추세요.', toolOptions: { title: '스쿼트 계획', plan: { work: 20, rest: 20, rounds: 1 }, workStep: 5, restStep: 5 }, target: { plan: { work: 40, rest: 60, rounds: 3 } }, difficulty: 0.25 },
            { prompt: '근력 운동 차례 카드를 놓고, 안전 점검을 모두 확인하세요.', toolOptions: { title: '운동 차례와 점검', cards: ['본운동 세트', '정리운동', '준비운동', '가벼운 무게로 자세 연습'], safety: ['보조자가 곁에 있다', '거울로 자세를 확인했다', '바닥에 걸리는 물건이 없다'] }, target: { order: ['준비운동', '가벼운 무게로 자세 연습', '본운동 세트', '정리운동'], safety: true }, difficulty: 0.3 },
            { prompt: '두 번째 세트에서 무릎이 시큰거려요. 쉬기를 90초로 늘리고 전체 2세트로 줄이세요.', toolOptions: { title: '계획 바꾸기', plan: { work: 40, rest: 60, rounds: 3 }, workStep: 5, restStep: 5 }, target: { plan: { rest: 90, rounds: 2 } }, difficulty: 0.35, conclude: '통증 신호가 오면 참고 버티지 말고 계획을 줄이고, 계속 아프면 멈추고 어른에게 알려요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 근력 운동 계획을 쓰세요.', columns: ['운동', '운동 시간', '쉬기', '세트', '멈출 신호'], cells: [['', '', '', '', '']] }] },
      }),
      M({
        id: 'activity.lift-body', type: 'activity', title: '잘못된 자세의 부담 부위',
        method: '잘못된 자세가 부담 주는 부위', tool: 'body', minutes: 19,
        levels: { easy: '고른 부위 이름이 바로 보이고, 운동 한 가지씩 부위와 바른 자세를 고른다.', base: '이름 표시 없이 네 장면의 부담 부위와 바른 자세 조건을 고른다.', challenge: '이름 표시 없이 풀고, 활동지에 부상 신호와 멈출 기준을 쓴다.' },
        activity: {
          title: '자세가 무너지면 어디가?', tool: 'body',
          teacher: '"잘못된 자세 설명을 읽고, 부담이 쏠리는 곳을 종이 몸에서 찾아봐요." 장면마다 부위를 누른 뒤 바른 자세 조건을 고르게 한다. 허리를 굽힌 채 드는 장면에서 \'팔\'이라고 하는 학생에게 "물건을 들 때 굽은 곳은 어디였나요?"라고 묻는다. 무게보다 자세가 먼저이고, 자세가 무너지면 그 무게는 내려놓는 것이 기준이라는 점을 짚는다.',
          task: '잘못된 자세 설명을 읽고 부담 부위를 누른 뒤 바른 자세를 골라요.', levels: { easy: { names: true }, base: {}, challenge: {} },
          items: [
            { prompt: '스쿼트에서 앉을 때 무릎이 안쪽으로 모여요. 부담이 커지는 부위를 누르고 바른 자세를 고르세요.', toolOptions: { mode: 'parts', parts: ['무릎', '허리', '발목', '어깨', '목'], ask: { q: '바른 자세 조건은?', choices: ['무릎이 발끝 방향을 따라간다', '무릎을 더 모은다', '빨리 앉았다 일어난다'], why: ['', '무릎이 안쪽으로 모일수록 부담이 커져요.', '빠르면 자세를 확인하기 어려워요.'] } }, target: { parts: ['무릎'], pick: 0 }, difficulty: 0.3 },
            { prompt: '바닥의 바벨을 들 때 등이 둥글게 굽어요. 부담이 커지는 부위를 누르고 바른 자세를 고르세요.', toolOptions: { mode: 'parts', parts: ['무릎', '허리', '손목', '어깨', '목'], ask: { q: '바른 자세 조건은?', choices: ['허리를 굽혀 팔로 당긴다', '등을 곧게 펴고 다리 힘으로 일어난다', '무게를 더 올린다'], why: ['허리를 굽히면 허리에 부담이 쏠려요.', '', '자세가 무너진 채 무게를 올리면 다쳐요.'] } }, target: { parts: ['허리'], pick: 1 }, difficulty: 0.35 },
            { prompt: '덤벨을 머리 위로 올릴 때 허리를 젖히며 어깨를 으쓱해요. 부담이 커지는 부위를 누르고 바른 자세를 고르세요.', toolOptions: { mode: 'parts', parts: ['무릎', '허리', '손목', '어깨', '목'], ask: { q: '바른 자세 조건은?', choices: ['반동으로 던지듯 올린다', '허리를 더 젖힌다', '가벼운 무게로 몸통을 고정하고 올린다'], why: ['반동은 어깨에 갑자기 힘을 실어요.', '허리를 젖히면 허리에도 부담이 와요.', ''] } }, target: { parts: ['어깨'], pick: 2 }, difficulty: 0.35 },
            { prompt: '팔굽혀펴기에서 손목이 꺾인 채 버텨요. 부담이 커지는 부위를 누르고 바른 자세를 고르세요.', toolOptions: { mode: 'parts', parts: ['손목', '팔꿈치', '어깨', '허리', '무릎'], ask: { q: '바른 자세 조건은?', choices: ['손을 어깨 아래에 두고 손바닥 전체로 받친다', '손끝으로만 버틴다', '아파도 끝까지 한다'], why: ['', '손끝으로 버티면 손목이 더 꺾여요.', '아픔은 멈추라는 신호예요.'] } }, target: { parts: ['손목'], pick: 0 }, difficulty: 0.3, conclude: '무게보다 자세가 먼저예요. 자세가 무너지면 무게를 줄이고, 관절이 아프면 멈춰요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '근력 운동 중 멈춰야 할 부상 신호 두 가지와 멈출 기준을 쓰세요.' }] },
      }),
      M({
        id: 'activity.turnback-dilemma', type: 'activity', title: '겨울 산행 돌아설 때',
        method: '겨울 산행 돌아설 때 갈림길', tool: 'dilemma', minutes: 19,
        levels: { easy: '갈림길 하나에서 고르고 근거를 고른다.', base: '갈림길 둘을 지나 결과를 보고 하산 판단의 근거를 고른다.', challenge: '갈림길 셋까지 가서 리더로서 일행을 설득할 말을 고르고, 다른 길과 견준다.' },
        activity: {
          title: '정상 30분 앞 갈림길', tool: 'dilemma',
          teacher: '"정상까지 30분, 눈발은 굵어지고 하린이의 장갑은 젖었어요. 여러분이 이 산행의 리더라면?" 선택마다 하린이와 일행에게 가는 영향을 읽게 한다. \'정상 찍기\'를 고른 학생에게 "올라간 30분은 내려올 때 몇 분이 될까요? 해는 몇 시에 지나요?"라고 묻는다. \'하린이만 먼저\'를 고른 학생에게 산에서 흩어지면 도울 사람이 사라진다는 점을 짚는다. 정상이 아니라 모두 돌아오는 것이 산행의 목표라는 점을 함께 정리한다.',
          task: '겨울 산행의 갈림길을 따라 결과를 보고 하산 판단의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('정상 30분 앞에서 일행 모두가 안전한 길을 고르고 근거를 고르세요.', PEAK, [['turn', 'gear', 'plan']], PEAK_R, ['sun', 'cold'], { d: 0.4 }),
            EXPLOREQ('\'정상을 찍는다\'·\'먼저 내려가라\' 길도 끝까지 가 보고 결과를 견주세요.', PEAK, PEAK_R, ['다른 길의 끝 장면을 확인했다', '하린이와 일행이 받은 영향을 견주었다'], { d: 0.35 }),
            DILQ('친구가 "운동 앱 기록 깨려면 오늘 꼭 정상까지"라고 할 때 알맞은 길을 고르고 근거를 고르세요.', { text: '맑던 하늘에 먹구름이 몰려온다. 친구가 "운동 앱 기록 깨려면 오늘 꼭 정상까지 가야 해"라고 한다.', who: '친구', motif: 'cloud', choices: [
              { id: 'go', text: '기록을 위해 같이 올라간다', result: '빗방울이 진눈깨비로 바뀐다.', impact: [{ who: '두 사람', text: '젖고 추워진다', tone: -1 }], ending: '기록은 다음에 깰 수 있지만 몸은 하나다.' },
              { id: 'say', text: '날씨가 바뀌면 돌아서기로 한 약속을 꺼낸다', result: '친구가 아쉬워하며 하늘을 본다.', impact: [{ who: '친구', text: '약속을 떠올린다', tone: 1 }],
                next: { text: '친구가 "그럼 너 혼자 내려가"라고 한다.', choices: [
                  { id: 'stay', text: '"같이 왔으니 같이 내려가자. 기록은 다음 맑은 날 깨자"고 한다', result: '두 사람이 함께 하산한다.', impact: [{ who: '두 사람', text: '흩어지지 않고 안전하게 돌아온다', tone: 1 }], ending: '함께 정한 약속을 함께 지키면 설득도 쉬워진다.' },
                  { id: 'alone', text: '혼자 내려간다', result: '친구는 혼자 정상을 향한다.', impact: [{ who: '친구', text: '혼자 위험에 남는다', tone: -1 }], ending: '흩어지면 둘 다 도움을 받기 어려워진다.' }] } }] },
              [['say', 'stay']], [{ id: 'weather', text: '날씨가 바뀌면 돌아서는 것이 계획의 일부다' }, { id: 'together', text: '산에서는 흩어지지 않고 함께 움직인다' }, { id: 'record', text: '기록을 깨는 것이 산행의 목표다', why: '기록보다 모두 안전하게 돌아오는 것이 목표예요.' }], ['weather', 'together'], { d: 0.35, more: { conclude: '돌아설 시각과 날씨 기준은 출발 전에 정하고, 산에서는 흩어지지 않고 함께 지켜요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '리더로서 정상을 앞두고 일행에게 돌아서자고 설득할 말을 한 문장으로 쓰세요.' }] },
      }),
      M({
        id: 'activity.gear-sort', type: 'activity', title: '겨울 산행 준비물 가르기',
        method: '겨울 산행 준비물 가르기', tool: 'mindmap', minutes: 19,
        levels: { easy: '준비물 카드 6장을 꼭·있으면 좋음·필요 없음으로 나눈다.', base: '카드 12장을 나누고, \'꼭\' 물건마다 없을 때 생길 일을 짝지으며, 짐을 줄일 때 뺄 것을 고른다.', challenge: '카드를 섞어 풀고, 활동지에 짐 무게를 줄이며 빼는 기준을 쓴다.' },
        activity: {
          title: '준비물 세 갈래로 나누기', tool: 'mindmap',
          teacher: '"겨울 산행 가방에 무엇을 넣을까요? 많이 넣을수록 좋은 게 아니라 꼭 필요한 것부터예요." 카드를 놓을 때마다 "이것이 없으면 산에서 무슨 일이 생길까요?"라고 묻는다. 여벌 장갑을 \'필요 없음\'에 두는 학생에게 "눈길에서 장갑이 젖으면 손은 어떻게 될까요?"라고 묻는다. 짐을 줄일 때는 있으면 좋은 것부터 빼고, 체온과 연락을 지키는 물건은 남긴다는 점을 짚는다.',
          task: '겨울 산행 준비물을 세 칸에 나누고 없을 때 생길 일을 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('겨울 산행 준비물 카드를 꼭·있으면 좋음·필요 없음 칸에 나누세요.', ['꼭', '있으면 좋음', '필요 없음'], [
              ['여벌 장갑과 양말', '방한 겉옷', '아이젠', '충전된 휴대전화와 보조배터리', '머리 등(헤드랜턴)'],
              ['따뜻한 물이 든 보온병', '초콜릿 같은 간식', '등산 스틱', '얇은 방석'],
              ['무거운 블루투스 스피커', '면 티셔츠 여러 장', '유리병 음료'],
            ], { k: 2, d: 0.35, opt: { topic: '겨울 산행 가방' } }),
            MATCHQ('\'꼭\' 물건마다 없을 때 생길 일을 짝지으세요.', [['여벌 장갑과 양말', '젖은 손발이 얼어 체온이 떨어진다'], ['아이젠', '눈길에서 미끄러져 다친다'], ['충전된 휴대전화와 보조배터리', '길을 잃거나 다쳤을 때 도움을 청하지 못한다'], ['머리 등(헤드랜턴)', '해가 지면 길이 보이지 않는다']], { k: 2, d: 0.35, opt: { topic: '없으면 생길 일' } }),
            PICKQ('짐이 무거워 덜어야 해요. 먼저 뺄 물건만 고르세요.', ['무거운 블루투스 스피커', '유리병 음료'], ['여벌 장갑과 양말', '충전된 휴대전화와 보조배터리'], { d: 0.3, opt: { basket: '뺄 물건' }, more: { conclude: '짐을 줄일 때는 필요 없는 것·있으면 좋은 것부터 빼고, 체온·이동·연락을 지키는 물건은 남겨요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '짐 무게를 줄일 때 빼는 기준을 한 문장으로 쓰세요.' }] },
      }),

      M({
        id: 'wrap.risk-map', type: 'wrap', title: '여가 활동 위험 판단 지도',
        method: '운동·산행 위험 마인드맵', tool: 'mindmap', minutes: 6,
        levels: { easy: '두 가지(몸 상태·날씨)에 확인 질문을 단다.', base: '네 가지(몸 상태·날씨·장비·함께하는 사람)에 확인 질문을 단다.', challenge: '내가 즐기는 여가 활동의 가지를 하나 더해 쓴다.' },
        wrap: {
          teacher: '"근력 운동이든 산행이든, 떠나기 전에 묻는 질문은 비슷해요. 몸 상태, 날씨, 장비, 함께하는 사람." 질문 카드를 가지에 단 뒤 내 여가 활동에 맞는 질문을 하나 더 만들게 한다. \'함께하는 사람\' 가지를 비워 두는 학생에게 "혼자 하다 다치면 누가 알아챌까요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '여가 활동 위험 판단', slots: ['몸 상태', '날씨', '장비', '함께하는 사람'], cards: ['어제 잠은 충분했나?', '해 지는 시각은 몇 시인가?', '젖으면 갈아입을 옷이 있나?', '내 일정을 아는 사람이 있나?'] }, prompt: '확인 질문 카드를 마인드맵 가지에 다세요.', target: { sort: { '몸 상태': ['어제 잠은 충분했나?'], 날씨: ['해 지는 시각은 몇 시인가?'], 장비: ['젖으면 갈아입을 옷이 있나?'], '함께하는 사람': ['내 일정을 아는 사람이 있나?'] } }, difficulty: 0.2 },
            { type: 'choice', prompt: '"정상까지 가지 않으면 실패한 산행이다"에 대한 판단으로 알맞은 것은?', options: ['맞다, 정상이 목표다', '모두 안전하게 돌아오는 것이 목표다', '날씨가 좋을 때만 맞다'], answer: 1, difficulty: 0.15, explain: '산행의 목표는 모두 안전하게 돌아오는 것이에요.' },
            { type: 'short', prompt: '내가 즐기는 여가 활동에 맞는 확인 질문을 하나 만드세요.' },
          ],
        },
        worksheet: {
          title: '여가 활동 위험 판단',
          items: [
            { type: 'table', prompt: '가지마다 확인 질문을 하나씩 쓰세요.', columns: ['가지', '확인 질문'], cells: [['몸 상태', ''], ['날씨', ''], ['장비', ''], ['함께하는 사람', '']] },
            { type: 'short', prompt: '내 여가 활동 가지를 하나 더하고 질문을 쓰세요.' },
          ],
        },
      }),
      M({
        id: 'wrap.plan-writing', type: 'wrap', title: '나의 여가 활동 안전 계획',
        method: '나의 여가 활동 안전 계획', tool: 'rubric-writing', minutes: 6,
        levels: { easy: '문장 틀("나는 ~을 할 때 ~이면 멈춘다")을 보고 쓴다.', base: '네 문장을 쓰고 기준표로 점검한다.', challenge: '날씨가 나쁠 때의 대안을 활동지에 덧붙인다.' },
        wrap: {
          teacher: '"다음에 할 운동이나 산행을 하나 정해 안전 계획을 네 문장으로 써 봐요. 멈출 기준, 장비, 함께할 사람이 들어가야 해요." 기준표를 함께 읽는다. "조심하겠다"처럼만 쓴 학생에게 "무엇이 보이면 멈출지 정해 두면, 그 순간 망설이지 않을까요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'rubric-writing', options: { topic: '다음에 할 운동이나 산행의 안전 계획을 네 문장으로 쓰세요.', minChars: 60, maxChars: 400, starter: '나는 ~을 할 때 ~이면 멈춘다.', sample: '나는 다음 달 친구와 동네 산에 간다. 오후 2시가 되면 정상이 아니어도 돌아선다. 여벌 장갑과 충전된 휴대전화를 챙긴다. 출발 전에 부모님께 일정과 함께 가는 친구를 알린다.' }, prompt: '안전 계획을 쓰고 기준표로 점검하세요.', target: { selfCheck: ['멈출 기준을 구체적으로 썼다', '챙길 장비를 썼다', '함께할 사람이나 일정을 알릴 사람을 썼다'], mustInclude: [['멈', '돌아']] }, difficulty: 0.3 },
            { type: 'choice', prompt: '근력 운동 중 관절이 찌르듯 아파요. 알맞은 판단은?', options: ['참고 끝까지 한다', '멈추고 무게·계획을 줄이며 계속 아프면 알린다', '무게를 더 올려 버틴다'], answer: 1, difficulty: 0.15, explain: '관절 통증은 멈추라는 신호예요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '나의 여가 활동 안전 계획',
          items: [
            { type: 'short', prompt: '여가 활동 안전 계획을 네 문장으로 쓰세요.' },
            { type: 'short', prompt: '날씨가 나쁠 때의 대안을 쓰세요.' },
          ],
          easy: { note: '"나는 ~을 할 때 ~이면 멈춘다. ~을 챙긴다. ~와 함께 간다."', items: [{ type: 'short', prompt: '틀에 맞춰 세 문장을 쓰세요.' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 10. 집을 나온 또래를 향한 유인과 안전한 도움 연결 (11학년)
  // ======================================================================================================
  {
    const M = MOD('runaway-lure', [11]);
    const NIGHT = { text: '밤 11시, 친구 예린이에게서 메시지가 왔다. "집 나왔어. 오늘 하룻밤만 너희 집에서 재워 줘. 부모님께는 절대 말하지 마."', who: '예린', motif: 'moon', choices: [
      { id: 'hide', text: '몰래 재워 주고 아무에게도 말하지 않는다', result: '예린이는 하룻밤 머물지만 다음 날 갈 곳이 없다.', impact: [{ who: '예린', text: '문제는 그대로 남는다', tone: -1 }, { who: '나', text: '혼자 비밀을 떠안는다', tone: -1 }],
        next: { text: '다음 날 예린이가 "SNS에서 재워 준다는 사람 있대. 거기로 갈래"라고 한다.', choices: [
          { id: 'let', text: '예린이의 선택이니 그냥 둔다', result: '예린이가 낯선 사람을 만나러 간다.', impact: [{ who: '예린', text: '위험한 유인에 노출된다', tone: -1 }], ending: '감싸 주기만 하면 친구는 더 위험한 곳으로 갈 수 있다.' },
          { id: 'adult', text: '이제라도 믿을 어른에게 함께 말하자고 한다', result: '담임 선생님과 함께 청소년쉼터를 안내받는다.', impact: [{ who: '예린', text: '안전한 곳으로 연결된다', tone: 1 }], ending: '늦게라도 어른과 연결하면 길이 바뀐다.' }] } },
      { id: 'listen', text: '먼저 어디 있는지 묻고, 걱정된다고 말한다', result: '예린이가 "편의점 앞이야"라고 답한다.', impact: [{ who: '예린', text: '혼자가 아니라고 느낀다', tone: 1 }],
        next: { text: '예린이가 "어른한테 말하면 바로 집에 끌려갈 거야"라며 망설인다.', choices: [
          { id: '1388', text: '"1388에 같이 전화해 보자. 너 마음 먼저 들어 줄 거야"라고 한다', result: '상담 선생님이 오늘 밤 머물 수 있는 청소년쉼터를 안내한다.', impact: [{ who: '예린', text: '안전하게 머물 곳이 생긴다', tone: 1 }],
            next: { text: '예린이가 "고마워. 근데 너도 같이 가 줄 수 있어?"라고 묻는다.', choices: [
              { id: 'withparent', text: '내 보호자에게 알리고 함께 쉼터까지 데려다준다', result: '보호자와 함께 예린이를 쉼터에 데려다준다.', impact: [{ who: '예린', text: '안전하게 도착한다', tone: 1 }, { who: '나', text: '밤길을 혼자 나서지 않는다', tone: 1 }], ending: '친구를 돕는 길은 혼자 감싸기가 아니라 믿을 어른과 함께하기다.' },
              { id: 'goalone', text: '밤늦게 혼자 나가 데리러 간다', result: '어두운 길을 혼자 걷게 된다.', impact: [{ who: '나', text: '나도 위험해진다', tone: -1 }], ending: '친구를 도우려다 나까지 위험해지면 둘 다 지키기 어렵다.' }] } },
          { id: 'promise', text: '"알았어, 아무한테도 말 안 할게"라고 약속한다', result: '예린이는 갈 곳 없이 편의점 앞에 남는다.', impact: [{ who: '예린', text: '밤거리에 혼자 남는다', tone: -1 }], ending: '비밀을 지키는 동안 친구는 위험한 제안에 가까워진다.' }] } },
      { id: 'ignore', text: '부담스러워 답하지 않는다', result: '예린이는 다른 곳에 도움을 구한다.', impact: [{ who: '예린', text: '누구의 도움일지 모르는 손을 잡게 된다', tone: -1 }], ending: '답하지 않으면 친구는 더 위험한 도움에 기댈 수 있다.' }] };
    const NIGHT_R = [{ id: 'link', text: '친구를 돕는 길은 믿을 어른·기관과 연결하는 것이다' }, { id: 'safe', text: '청소년쉼터와 1388은 안전하게 머물고 상담받는 길이다' }, { id: 'loyal', text: '친구가 원하면 숨겨 주는 것이 의리다', why: '숨겨 주는 동안 친구는 더 위험한 곳으로 갈 수 있어요.' }, { id: 'caught', text: '상담하면 바로 집에 알려져 혼난다', why: '상담은 먼저 마음을 듣고 안전한 길을 함께 찾아요.' }];

    MODS.push(
      M({
        id: 'intro.message-story', type: 'intro', title: '"재워 줄게" 메시지 분석',
        method: '가상 메시지 흐름 분석', tool: 'story', minutes: 6,
        levels: { easy: '메시지 화면 세 장에서 신호를 고른다.', base: '메시지 화면 네 장을 넘겨 보며 신호를 모두 고른다.', challenge: '신호마다 노리는 약점(외로움·돈·두려움)을 짚어 말한다.' },
        intro: {
          teacher: '"집을 나온 가상 인물에게 온 메시지예요. \'재워 줄게, 차비도 보내 줄게, 대신 아무에게도 말하지 마.\' 친절해 보이나요?" 화면을 넘기며 신호를 고르게 하고 시연 단추로 정답 화면을 바구니에 담는다. "도와주겠다는 사람은 다 좋은 사람"이라는 말이 나오면 "좋은 도움은 왜 비밀을 요구하지 않을까요?"라고 되묻는다. 오늘은 위험한 제안과 안전한 도움을 가르는 기준과 제도를 배운다고 밝힌다.',
          student: '집을 나온 가상 인물에게 온 메시지 화면을 넘겨 보며, 위험 신호가 든 메시지를 골라 보세요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '위험 신호', title: '익명 계정의 메시지(가상)', cards: [{ id: 'bed', text: '"오늘 밤 우리 집에서 재워 줄게"', motif: 'house' }, { id: 'money', text: '"차비 보내 줄 테니 지금 와"', motif: 'star' }, { id: 'secret', text: '"대신 아무에게도 말하지 마"', motif: 'moon' }, { id: 'shelter', text: '"근처 청소년쉼터 안내해 줄게, 1388에도 같이 물어보자"', motif: 'sun' }], shuffle: false }, sequence: [{ pick: ['bed', 'money', 'secret'] }] },
          art: { draw: 'a paper phone glowing at night on a park bench, message bubbles with a house, coins and a finger-on-lips icon, a warm lit paper shelter building far away', banner: '친절한 말 속의 신호', extra: [{ motif: 'moon', x: 300, y: 96 }] },
        },
        notes: '가출 경험을 묻거나 학생이 자기 이야기를 발표하게 하지 않는다. 가상 인물로만 다룬다.',
      }),
      M({
        id: 'intro.help-dilemma', type: 'intro', title: '하룻밤만 재워 달라는 친구',
        method: '친구가 하룻밤 재워 달라고 할 때', tool: 'dilemma', minutes: 6,
        levels: { easy: '첫 갈림길의 결과까지만 본다.', base: '두 번째 갈림길까지 가 보고 근거를 고른다.', challenge: '친구의 마음을 존중하는 말을 골라 다시 가 본다.' },
        intro: {
          teacher: '"친구가 집을 나왔다며 하룻밤만 재워 달래요. 부모님께는 절대 말하지 말래요. 여러분은?" 손을 들어 고르게 한 뒤 시연 단추로 \'먼저 묻고 걱정을 말하기\' 길이 1388 연결까지 이어지는 모습을 보여 준다. "친구가 원하면 숨겨 주는 게 의리"라는 말이 나오면 "숨겨 준 다음 날, 친구는 어디로 갈 수 있을까요?"라고 되묻는다.',
          student: '집을 나왔다는 친구의 연락을 받았다면 어떻게 할지 고르고, 다음 날까지 이어지는 결과를 따라가 보세요.',
          demo: { tool: 'dilemma', options: { scene: cut(NIGHT, 2), reasons: NIGHT_R, title: '밤 11시의 메시지' }, sequence: [{ path: ['listen', '1388'], reasons: ['link'] }] },
          art: { draw: 'a paper phone lighting up in a dark bedroom, a message bubble asking for help, a paper path splitting toward a hidden room and toward a lit shelter with a counselor', banner: '친구를 지키는 길은?', extra: [{ motif: 'moon', x: 300, y: 96 }] },
        },
      }),

      M({
        id: 'activity.offer-sort', type: 'activity', title: '도움 제안 가르기',
        method: '도움 제안을 안전·위험으로 가르기', tool: 'mindmap', minutes: 19,
        levels: { easy: '도움 제안 카드 6장을 안전·위험으로 나눈다.', base: '카드 10장을 나누고, 위험으로 본 근거를 고르며, 겉보기와 실제가 다른 카드를 짝짓는다.', challenge: '카드를 섞어 풀고, 활동지에 겉보기와 실제가 다른 카드를 설명한다.' },
        activity: {
          title: '도움 제안 가르기', tool: 'mindmap',
          teacher: '"집 밖에서 도움이 필요할 때 오는 제안, 모두 같은 도움일까요?" 카드를 놓을 때마다 "이 도움은 대가나 비밀을 요구하나요? 누가 이 도움을 확인해 줄 수 있나요?"라고 묻는다. \'익명 상대의 숙소 제공\'을 안전에 두는 학생에게 "그 사람이 누구인지, 그 집이 어디인지 확인해 줄 사람은 있나요?"라고 묻는다. 안전한 도움은 공개된 기관과 이어지고 비밀을 요구하지 않는다는 점을 짚는다.',
          task: '도움 제안 카드를 안전·위험으로 나누고 근거를 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('도움 제안 카드를 안전한 도움과 위험한 제안으로 나누세요.', ['안전한 도움', '위험한 제안'], [
              ['청소년쉼터 안내', '상담 선생님 연결', '1388 상담 안내', '담임 선생님과 함께 보호자 상담', '지구대에서 보호 요청'],
              ['익명 상대의 숙소 제공', '차비 송금 뒤 만남 요구', '"아무에게도 말하지 마" 조건', '일자리 주겠다며 바로 차에 타라는 말', '선물 주고 사진을 요구함'],
            ], { k: 3, d: 0.3, opt: { topic: '도움 제안' } }),
            PICKQ('\'차비 송금 뒤 만남 요구\'를 위험으로 보는 근거만 고르세요.', ['돈을 받았다는 부담으로 거절하기 어렵게 만든다', '만나는 사람이 누구인지 확인할 수 없다'], ['차비를 주니 친절한 사람이다', '돈을 주면 믿어도 된다'], { d: 0.35, opt: { basket: '근거' } }),
            MATCHQ('겉보기와 실제가 다른 제안마다 실제 노림을 짝지으세요.', [['"재워 줄게, 아무 조건 없어"', '머무는 동안 빚진 마음을 만든다'], ['"너만 특별히 챙겨 줄게"', '다른 사람과 떨어뜨려 놓는다'], ['"말하면 너만 혼나"', '도움을 청하지 못하게 막는다']], { k: 2, d: 0.4, more: { conclude: '안전한 도움은 공개된 기관과 이어지고 비밀을 요구하지 않아요. 비밀·대가·급한 만남은 위험 신호예요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '겉보기에는 친절하지만 실제로는 위험한 제안 하나를 골라 그 까닭을 쓰세요.' }] },
      }),
      M({
        id: 'activity.help-path', type: 'activity', title: '도움 연결 경로 지도',
        method: '도움 연결 경로 지도', tool: 'map', minutes: 19,
        levels: { easy: '핀을 놓으면 그 칸의 장소 이름이 바로 보인다.', base: '장소 이름을 보고 상황마다 갈 곳에 핀을 꽂는다.', challenge: '지도에 이름 없이 기호만 보고 꽂고, 활동지에 전화로 먼저 연결할 곳까지 정한다.' },
        activity: {
          title: '도움 연결 지도', tool: 'map',
          teacher: '"가상 도시 지도예요. 밤 10시, 집을 나온 친구와 함께 있다면 어디로 가는 게 가장 안전할까요?" 상황마다 핀을 꽂기 전에 "지금 필요한 것은 머물 곳인가요, 보호인가요, 상담인가요?"라고 묻는다. 가까운 공원이나 편의점에 핀을 꽂는 학생에게 "그곳에서 밤새 도와줄 사람은 누구일까요?"라고 묻는다. 밤에는 낯선 장소가 아니라 사람이 지키는 공공 기관으로 간다는 점을 짚는다.',
          task: '상황마다 가장 안전하게 갈 곳에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: { names: false } },
          items: [
            { prompt: '밤 10시, 친구가 오늘 밤 머물 곳이 없어요. 함께 갈 가장 안전한 곳에 핀을 꽂으세요.', toolOptions: { title: '가상 도시', grid: [6, 4], places: [{ name: '청소년쉼터', icon: 'house', at: [4, 0] }, { name: '지구대', icon: 'police', at: [1, 2] }, { name: '학교', icon: 'school', at: [0, 0] }, { name: '상담복지센터', icon: 'office', at: [5, 3] }, { name: '공원', icon: 'park', at: [3, 2] }, { name: '역', icon: 'station', at: [2, 3] }] }, target: { place: '청소년쉼터' }, difficulty: 0.2 },
            { prompt: '쉼터로 가는 길에 누군가 계속 따라와요. 가장 가까이 뛰어갈 곳에 핀을 꽂으세요.', toolOptions: { title: '가상 도시', grid: [6, 4], places: [{ name: '청소년쉼터', icon: 'house', at: [4, 0] }, { name: '지구대', icon: 'police', at: [1, 2] }, { name: '학교', icon: 'school', at: [0, 0] }, { name: '상담복지센터', icon: 'office', at: [5, 3] }, { name: '공원', icon: 'park', at: [3, 2] }, { name: '역', icon: 'station', at: [2, 3] }] }, target: { place: '지구대' }, difficulty: 0.3 },
            { prompt: '다음 날 낮, 친구가 앞으로의 일을 상담받고 싶어 해요. 함께 갈 곳에 핀을 꽂으세요.', toolOptions: { title: '가상 도시', grid: [6, 4], places: [{ name: '청소년쉼터', icon: 'house', at: [4, 0] }, { name: '지구대', icon: 'police', at: [1, 2] }, { name: '학교', icon: 'school', at: [0, 0] }, { name: '상담복지센터', icon: 'office', at: [5, 3] }, { name: '공원', icon: 'park', at: [3, 2] }, { name: '역', icon: 'station', at: [2, 3] }] }, target: { place: '상담복지센터' }, difficulty: 0.3, conclude: '머물 곳은 청소년쉼터, 지금 위험하면 지구대, 앞으로의 고민은 상담복지센터·1388 — 필요에 맞는 곳과 연결해요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '상황마다 먼저 전화로 연결할 곳과 직접 갈 곳을 쓰세요.', columns: ['상황', '먼저 전화할 곳', '직접 갈 곳'], cells: [['오늘 밤 머물 곳이 없다', '', ''], ['누가 따라온다', '', '']] }] },
        notes: '지도는 가상 도시다. 우리 지역의 청소년쉼터·청소년상담복지센터 위치는 학교 상담실과 함께 확인해 안내한다.',
      }),
      M({
        id: 'activity.law-cards', type: 'activity', title: '제도·기관 짝',
        method: '제도와 기관 역할 짝짓기', tool: 'wordcards', minutes: 19,
        levels: { easy: '기관·제도 카드 3개를 역할과 짝짓는다.', base: '카드 4개를 역할과 짝짓고, 상황 세 개에 연결할 곳을 짝짓는다.', challenge: '한 상황에 둘 이상 연결해야 하는 경우를 골라 그 까닭을 설명한다.' },
        activity: {
          title: '제도·기관 짝', tool: 'wordcards',
          teacher: '"도움을 청할 곳의 이름을 아는 것과 그곳이 무엇을 하는지 아는 것은 달라요." 카드를 짝지은 뒤 상황마다 연결할 곳을 고르게 한다. "쉼터나 상담에 가면 바로 집에 알려져 혼난다"는 학생에게 "상담 선생님은 먼저 무엇을 물어볼까요? 안전한지, 무엇이 힘든지 아닐까요?"라고 묻는다. 실종 아동 등을 찾고 보호하는 일은 법(실종아동등의 보호 및 지원에 관한 법률)으로도 정해져 있다는 점을 짚는다.',
          task: '기관·제도 카드를 역할과 짝짓고 상황에 맞는 연결처를 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            WORDQ('기관·제도 카드를 하는 역할과 짝지으세요.', [['1388', '청소년 고민·위기 상담 전화'], ['청소년쉼터', '집을 나온 청소년이 안전하게 머물며 도움받는 곳'], ['112', '지금 위험하거나 실종이 의심될 때 하는 경찰 신고'], ['실종아동 보호 법률', '실종된 아동 등을 찾고 보호하는 일을 정한 법']], { k: 3, d: 0.3 }),
            MATCHQ('상황마다 먼저 연결할 곳을 짝지으세요.', [['밤에 갈 곳이 없어 머물 곳이 필요하다', '청소년쉼터'], ['누군가 차에 타라며 따라온다', '112'], ['집 문제로 누구에게 털어놓을지 모르겠다', '1388']], { k: 3, d: 0.3 }),
            PICKQ('\'집을 나와 오늘 밤 잘 곳이 없고, 고민도 털어놓고 싶은 친구\'에게 함께 연결할 곳을 모두 고르세요.', ['청소년쉼터', '1388'], ['익명 SNS 계정', '혼자 사는 낯선 어른 집'], { d: 0.35, opt: { mode: 'pick', basket: '연결할 곳' }, more: { conclude: '한 상황에도 머물 곳과 상담처럼 필요한 것이 여럿일 수 있어, 둘 이상 연결하기도 해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '한 상황에 둘 이상 연결해야 하는 까닭을 예를 들어 쓰세요.' }] },
      }),
      M({
        id: 'activity.support-reflection', type: 'activity', title: '친구에게 보낼 글',
        method: '친구에게 보내는 메시지 쓰고 점검', tool: 'rubric-writing', minutes: 19,
        levels: { easy: '메시지마다 문장 틀을 보고 쓴다.', base: '첫 메시지·고쳐 쓴 메시지를 쓰고 기준표로 점검한다.', challenge: '메시지마다 기준 하나가 더 붙고, 친구가 거절했을 때 이어 갈 말까지 쓴다.' },
        activity: {
          title: '친구에게 보낼 글', tool: 'rubric-writing',
          teacher: '"집을 나온 가상 친구에게 메시지를 보낸다면 첫마디는 무엇일까요? \'왜 그랬어?\'일까요, \'괜찮아?\'일까요?" 기준표(비난하지 않기·안전한 도움처·함께하겠다는 말)를 읽고 쓰게 한다. "그러니까 집에 들어가"처럼 쓴 학생에게 "친구가 이 말을 들으면 다음에도 나에게 연락할까요?"라고 묻는다. 메시지에 친구의 실제 이름이나 연락처를 쓰지 않게 한다.',
          task: '가상 친구에게 보낼 메시지를 쓰고 기준표로 점검한 뒤 고쳐 써요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('집을 나온 가상 친구에게 보낼 첫 메시지를 2~3문장으로 쓰세요.', '집을 나온 가상 친구에게 보낼 첫 메시지를 쓰세요(실제 이름·연락처는 쓰지 않아요).', ['비난하는 말이 없다', '안전한 도움처를 하나 이상 썼다', '함께하겠다는 말을 넣었다'], { min: 30, max: 300, sent: [2, 3], must: [['쉼터', '1388', '선생님', '112']], starter: '연락해 줘서 고마워. ~', plus: '친구의 안전부터 물었다', d: 0.35 }),
            RWQ('첫 메시지를 기준표로 다시 보고, 더 다정하고 구체적으로 고쳐 쓰세요.', '첫 메시지를 고쳐 쓰세요. 도움처를 어떻게 함께할지 구체적으로 넣어요.', ['비난하는 말이 없다', '도움처와 함께할 방법을 구체적으로 썼다', '친구의 마음을 인정하는 말이 있다'], { min: 30, max: 300, sent: [2, 4], must: [['같이', '함께']], starter: '많이 힘들었겠다. ~', plus: '친구가 선택할 수 있게 물어보는 말이 있다', d: 0.35 }),
            RWQ('친구가 "싫어, 어른한테 말하지 마"라고 답했어요. 이어 갈 메시지를 2~3문장으로 쓰세요.', '친구가 도움을 거절했어요. 관계를 지키며 안전으로 이어 갈 메시지를 쓰세요.', ['친구의 걱정을 먼저 인정했다', '안전이 걱정되는 까닭을 말했다', '다음에 할 수 있는 작은 행동을 제안했다'], { min: 30, max: 300, sent: [2, 3], must: [['걱정', '안전']], starter: '그렇게 걱정되는 거 이해해. 그래도 ~', plus: '위험하면 어른에게 알릴 수밖에 없다는 점을 솔직하게 말했다', d: 0.4, more: { conclude: '친구를 돕는 메시지는 비난 없이 마음을 인정하고, 안전한 도움처와 함께하겠다는 약속을 담아요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내가 쓴 메시지에서 가장 고치고 싶었던 표현과 고친 표현을 쓰세요.' }] },
      }),

      M({
        id: 'wrap.signal-map', type: 'wrap', title: '위험 신호와 안전한 도움',
        method: '위험 신호와 안전한 도움 마인드맵', tool: 'mindmap', minutes: 6,
        levels: { easy: '두 가지에 카드를 2장씩 단다.', base: '두 가지에 카드를 3장씩 단다.', challenge: '\'친구 입장\' 가지를 더해 친구에게 할 말을 쓴다.' },
        wrap: {
          teacher: '"\'집 밖에서 도움이 필요할 때\' 오늘 배운 것을 위험 신호와 안전한 도움 두 가지로 정리해 봐요." 카드를 단 뒤 친구 입장에서 들을 때 힘이 되는 말을 하나씩 말하게 한다. \'1388\'을 위험 신호에 넣은 학생에게 "1388은 누가 운영하는 상담 전화였나요?"라고 다시 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '집 밖에서 도움이 필요할 때', slots: ['위험 신호', '안전한 도움'], cards: ['대가 없는 잘 곳 제안', '비밀 약속 요구', '차비 송금 뒤 만남', '청소년쉼터', '1388', '담임·상담 선생님'] }, prompt: '카드를 두 가지에 나누세요.', target: { sort: { '위험 신호': ['대가 없는 잘 곳 제안', '비밀 약속 요구', '차비 송금 뒤 만남'], '안전한 도움': ['청소년쉼터', '1388', '담임·상담 선생님'] } }, difficulty: 0.2 },
            { type: 'choice', prompt: '친구가 집을 나왔다며 숨겨 달라고 해요. 친구를 돕는 길은?', options: ['몰래 숨겨 준다', '걱정을 말하고 믿을 어른·기관과 함께 연결한다', '모른 척한다'], answer: 1, difficulty: 0.15, explain: '친구를 돕는 길은 혼자 감싸기가 아니라 믿을 어른·기관과 연결하기예요.' },
            { type: 'short', prompt: '친구 입장에서 들을 때 힘이 되는 말을 한 문장 쓰세요.' },
          ],
        },
        worksheet: {
          title: '위험 신호와 안전한 도움',
          items: [
            { type: 'table', prompt: '위험 신호와 안전한 도움을 세 가지씩 쓰세요.', columns: ['위험 신호', '안전한 도움'], cells: [['', ''], ['', ''], ['', '']] },
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '청소년 고민·위기 상담 전화는 ___이다.', answer: '1388' },
          ],
        },
      }),
      M({
        id: 'wrap.help-check', type: 'wrap', title: '친구를 도울 때 점검',
        method: '친구를 도울 때 스스로 점검', tool: 'kitchen', minutes: 6,
        levels: { easy: '알맞은 항목 4개만 있는 점검표에 표시한다.', base: '항목 6개 가운데 함정 2개를 빼고 표시한다.', challenge: '점검표에 항목 하나를 더해 쓴다.' },
        wrap: {
          teacher: '"친구를 도울 때 나도 지켜야 해요. 점검표에서 알맞은 것만 표시해 봐요." 함정 \'친구가 원하면 혼자 데리러 간다\'에 표시한 학생에게 "밤길에 나 혼자 나서면 누가 나를 지켜 줄까요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '친구를 도울 때', items: [{ id: 'adult', text: '믿을 어른에게 알린다' }, { id: 'nomeet', text: '혼자 만남 장소에 가지 않는다' }, { id: 'record', text: '연락 기록을 지우지 않고 남긴다' }, { id: 'link', text: '1388·쉼터 같은 도움처를 함께 찾는다' }, { id: 'alone', text: '친구가 원하면 혼자 데리러 간다' }, { id: 'secret', text: '끝까지 비밀로 한다' }] }, prompt: '친구를 도울 때 할 일만 표시하세요.', target: { checklist: ['adult', 'nomeet', 'record', 'link'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '"쉼터나 상담에 가면 바로 집에 알려져 혼난다"에 대한 판단으로 알맞은 것은?', options: ['맞다, 그러니 가지 않는다', '상담은 먼저 안전과 마음을 듣고 함께 길을 찾는다', '경찰서만 믿을 수 있다'], answer: 1, difficulty: 0.15, explain: '상담은 혼내려는 곳이 아니라 안전한 길을 함께 찾는 곳이에요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '친구를 도울 때',
          items: [
            { type: 'check', prompt: '친구를 도울 때 지킬 것에 표시하세요.', options: ['믿을 어른에게 알리기', '혼자 만남 장소에 가지 않기', '연락 기록 남기기', '도움처 함께 찾기'] },
            { type: 'short', prompt: '점검표에 더하고 싶은 항목 하나를 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 11. 자립 생활의 전기·가스·난방기구 안전 (12학년)
  // ======================================================================================================
  {
    const M = MOD('indep-home', [12]);
    const ROOM = { title: '가상 원룸 평면', grid: [6, 4], places: [{ name: '현관', icon: 'dot', at: [0, 3] }, { name: '가스레인지', icon: 'dot', at: [1, 0] }, { name: '창문', icon: 'dot', at: [5, 0] }, { name: '침대', icon: 'house', at: [4, 2] }, { name: '콘센트', icon: 'dot', at: [3, 3] }] };
    const HEAT = { text: '겨울 첫 자취방. 난방비가 걱정돼 보일러를 끄고 지내려 한다. 밤이 되자 방이 꽤 춥다.', who: '수아', motif: 'snow', choices: [
      { id: 'heater', text: '전기난로를 침대 옆에 켜 두고 잔다', result: '따뜻하게 잠들지만 이불 끝이 난로에 닿을 듯하다.', impact: [{ who: '수아', text: '자는 동안 화재 위험에 놓인다', tone: -1 }],
        next: { text: '사흘째 밤, 이불에서 탄 냄새가 나 잠에서 깬다.', choices: [
          { id: 'keep', text: '난로를 조금 떨어뜨리고 계속 켜고 잔다', result: '위험은 줄었지만 켠 채 자는 습관은 그대로다.', impact: [{ who: '수아', text: '같은 위험이 남는다', tone: -1 }], ending: '난방기구는 켠 채 잠들지 않는 것이 기준이다.' },
          { id: 'off', text: '난로를 끄고 다른 방법을 찾는다', result: '추위를 견딜 방법을 다시 고민한다.', impact: [{ who: '수아', text: '위험을 멈춘다', tone: 1 }], ending: '탄 냄새는 멈추라는 신호다.' }] } },
      { id: 'timer', text: '전기장판에 타이머를 맞추고 이불은 얇게 덮는다', result: '잠들 무렵 따뜻하고 새벽에 자동으로 꺼진다.', impact: [{ who: '수아', text: '과열 위험이 줄어든다', tone: 1 }],
        next: { text: '한 주 뒤, 전기장판 한쪽이 유난히 뜨겁고 접힌 자국이 있다.', choices: [
          { id: 'check', text: '쓰기를 멈추고 접힌 곳·탄 자국을 살핀 뒤 바꾼다', result: '새 인증 제품으로 바꾸고 접어서 보관하지 않는다.', impact: [{ who: '수아', text: '안전하게 겨울을 난다', tone: 1 }],
            next: { text: '전기 요금 고지서가 왔다. 생각보다 많이 나왔다.', choices: [
              { id: 'layer', text: '옷을 겹쳐 입고 문틈 바람을 막아 타이머 시간을 줄인다', result: '요금이 줄고 안전 습관도 지킨다.', impact: [{ who: '수아', text: '비용과 안전을 함께 챙긴다', tone: 1 }], ending: '비용을 줄일 때도 안전 기준은 남겨 둔다.' },
              { id: 'all', text: '요금 때문에 다시 난로를 침대 옆에 켠다', result: '처음의 위험으로 돌아간다.', impact: [{ who: '수아', text: '위험이 되살아난다', tone: -1 }], ending: '비용 때문에 안전 기준을 버리면 더 큰 비용을 치를 수 있다.' }] } },
          { id: 'fold', text: '접힌 채로 계속 쓴다', result: '접힌 곳이 더 뜨거워진다.', impact: [{ who: '수아', text: '과열 위험이 커진다', tone: -1 }], ending: '접힌 전기장판은 열이 한곳에 몰린다.' }] } },
      { id: 'clothes', text: '난방기구 없이 옷만 겹쳐 입고 버틴다', result: '안전하지만 너무 추워 잠을 설친다.', impact: [{ who: '수아', text: '잠과 건강이 상한다', tone: -1 }], ending: '안전과 생활 모두를 지키는 방법을 찾아야 한다.' }] };
    const HEAT_R = [{ id: 'sleep', text: '난방기구는 켠 채 잠들지 않고 탈 물건과 떨어뜨린다' }, { id: 'cost', text: '비용을 줄일 때도 안전 기준은 남긴다' }, { id: 'allnight', text: '전기장판은 밤새 켜도 괜찮다', why: '오래 켜거나 접힌 채 쓰면 과열될 수 있어요.' }, { id: 'cheap', text: '돈이 가장 적게 드는 방법이 가장 좋다', why: '비용과 안전, 건강을 함께 따져야 해요.' }];

    MODS.push(
      M({
        id: 'intro.future-mindmap', type: 'intro', title: '졸업 뒤 생활 위험 예측',
        method: '졸업 뒤 생활 위험 예측', tool: 'mindmap', minutes: 6,
        levels: { easy: '두 가지(집·이동)에 새로 생길 위험을 단다.', base: '네 가지(집·일·이동·여가)에 위험을 하나씩 단다.', challenge: '가장 준비가 안 된 가지를 골라 그 까닭을 말한다.' },
        intro: {
          teacher: '"졸업하고 처음 혼자 사는 방에 들어간다고 생각해 봐요. 지금은 누가 대신 해 주던 일 중에 이제 내가 해야 할 것은?" 시연 단추로 위험 카드가 집·일·이동·여가 가지에 붙는 모습을 보여 준다. "방이 싸고 넓으면 좋은 집"이라는 말이 나오면 "그 방에 화재경보기가 없다면 누가 확인해 줄까요?"라고 되묻는다. 오늘은 자립 생활의 전기·가스·난방 위험을 미리 점검한다고 밝힌다.',
          student: '졸업 뒤 내 생활을 떠올리며, 집·일·이동·여가에서 새로 생길 위험을 하나씩 예측해 보세요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '졸업 뒤 내 생활', slots: ['집', '일', '이동', '여가'], cards: [{ id: 'gas', text: '처음 쓰는 가스레인지' }, { id: 'machine', text: '처음 다루는 일터 기계' }, { id: 'night', text: '늦은 밤 귀갓길' }, { id: 'trip', text: '친구들과 첫 여행' }], shuffle: false }, sequence: [{ sort: { 집: ['gas'], 일: ['machine'], 이동: ['night'], 여가: ['trip'] } }] },
          art: { draw: 'a paper graduate holding a key in front of a tiny paper studio apartment, four paper branches growing from the door toward a house, a workplace, a bus and a backpack', banner: '졸업 뒤, 무엇이 달라질까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      M({
        id: 'intro.room-map', type: 'intro', title: '원룸 평면 둘러보기',
        method: '원룸 평면 칸 지도 둘러보기', tool: 'map', minutes: 6,
        levels: { easy: '위험 지점 두 곳(가스레인지·콘센트)에 핀을 꽂아 본다.', base: '위험 지점과 소화기·화재경보기가 있어야 할 자리를 함께 말한다.', challenge: '불이 났을 때 대피할 두 길(현관·창문)을 말한다.' },
        intro: {
          teacher: '"가상 원룸 평면이에요. 현관, 가스레인지, 창문, 침대, 콘센트. 불이 난다면 어디서 시작될 가능성이 클까요? 소화기는 어디 두면 좋을까요?" 시연 단추로 가스레인지에 핀이 꽂히는 모습을 보여 준다. "소화기는 구석에 두면 된다"는 말이 나오면 "불이 난 쪽 구석에 있다면 꺼내러 갈 수 있을까요? 현관 가까이는 어떨까요?"라고 되묻는다.',
          student: '가상 원룸 평면을 보고, 위험 지점과 소화기·화재경보기가 있어야 할 자리를 생각해 보세요.',
          demo: { tool: 'map', options: ROOM, sequence: [{ place: '가스레인지' }] },
          art: { draw: 'a top-down paper floor plan of a small studio with a stove, a bed, a window and a door, tiny paper fire extinguisher and smoke alarm icons waiting to be placed', banner: '내 첫 방을 둘러봐요', extra: [{ motif: 'house', x: 300, y: 222 }] },
        },
      }),

      M({
        id: 'activity.room-check', type: 'activity', title: '집 보러 가서 쓰는 점검표',
        method: '집 보러 가서 쓰는 안전 점검표', tool: 'mindmap', minutes: 19,
        levels: { easy: '점검 후보 카드 6장을 꼭 확인·집주인에게 요청·안전과 무관으로 나눈다.', base: '카드 12장을 나누고, 꼭 확인할 근거를 고르며, 요청할 항목마다 요청 문장을 짝짓는다.', challenge: '카드를 섞어 풀고, 활동지에 집주인에게 요청할 항목을 따로 정리한다.' },
        activity: {
          title: '집 구할 때 안전 점검', tool: 'mindmap',
          teacher: '"집을 보러 가면 보통 무엇을 보나요? 월세, 넓이, 위치… 안전은 어디서 확인할까요?" 카드를 세 칸에 나누게 한다. \'고장 난 화재경보기\'를 \'안전과 무관\'에 두는 학생에게 "고장 난 경보기는 불이 났을 때 무엇을 못 하나요?"라고 묻는다. 세입자도 안전 설비 점검과 수리를 요청할 수 있다는 점을 짚는다.',
          task: '점검 후보를 세 칸에 나누고 요청 문장과 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('집 구할 때 점검 후보 카드를 세 칸에 나누세요.', ['꼭 확인', '집주인에게 요청', '안전과 무관'], [
              ['화재경보기가 작동하는지', '가스 밸브 위치', '창문 잠금장치', '콘센트 탄 자국', '대피할 길이 두 곳인지'],
              ['고장 난 화재경보기 교체', '헐거운 현관 잠금장치 수리', '소화기 비치'],
              ['벽지 색', '월세만 비교하기', '옷장 크기', '창밖 풍경'],
            ], { k: 2, d: 0.35, opt: { topic: '집 구할 때 점검' } }),
            PICKQ('\'화재경보기가 작동하는지\'를 꼭 확인하는 근거만 고르세요.', ['잠든 사이 불이 나면 경보기가 깨워 준다', '고장 난 경보기는 있어도 없는 것과 같다'], ['경보기는 장식이다', '불은 낮에만 난다'], { d: 0.3, opt: { basket: '근거' } }),
            MATCHQ('요청할 항목마다 집주인에게 보낼 요청 문장을 짝지으세요.', [['고장 난 화재경보기 교체', '"화재경보기 시험 단추를 눌러도 울리지 않아 교체를 부탁드립니다."'], ['헐거운 현관 잠금장치 수리', '"현관 잠금장치가 헐거워 수리를 요청드립니다."'], ['소화기 비치', '"방에 소화기가 없어 비치를 요청드립니다."']], { k: 2, d: 0.35, more: { conclude: '집을 고를 때는 월세와 넓이만이 아니라 안전 설비를 확인하고, 고장 난 것은 집주인에게 요청할 수 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '집주인에게 요청할 항목과 요청 문장을 쓰세요.', columns: ['요청할 항목', '요청 문장'], cells: [['', ''], ['', '']] }] },
      }),
      M({
        id: 'activity.rent-budget', type: 'activity', title: '안전과 비용 함께 방 고르기',
        method: '안전과 비용을 함께 따지는 방 고르기', tool: 'economy', minutes: 19,
        levels: { easy: '후보 4개 가운데 안전 설비를 갖춘 방과 소화기를 고르고, 고른 값의 합계가 보인다.', base: '후보 8개 가운데 필수 안전용품을 넣고 안전 설비가 부족한 방은 빼고 고른다.', challenge: '숫자 합계 없이 막대만 보고, 예산이 줄었을 때 지킬 것과 뺄 것을 고른다.' },
        activity: {
          title: '첫 달 예산으로 방 고르기', tool: 'economy',
          teacher: '"방 B는 싸지만 화재경보기가 고장 났고 창문 잠금이 없어요. 방 A는 7만 원 더 비싸지만 설비가 갖춰져 있어요. 어떻게 고를까요?" 예산 막대를 보며 고르게 한 뒤 근거를 짝에게 말하게 한다. 방 B와 꾸미는 물건을 고른 학생에게 "아낀 돈으로 산 러그와 고장 난 경보기 중 불이 났을 때 나를 지켜 주는 것은?"이라고 묻는다. 예산이 줄면 꾸미는 물건부터 빼고 안전용품은 남긴다는 점을 짚는다.',
          task: '한 달 예산 막대를 넘지 않게, 안전 조건을 지켜 방과 물건을 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            { prompt: '예산 450,000원. 안전 설비가 갖춰진 방 하나와 소화기를 고르세요(설비가 부족한 방은 빼요).', toolOptions: { mode: 'budget', budget: 450000, items: [{ id: 'roomA', text: '방 A 월세(경보기·창문 잠금 있음)', price: 420000 }, { id: 'roomB', text: '방 B 월세(경보기 고장·창문 잠금 없음)', price: 350000 }, { id: 'ext', text: '소화기', price: 20000 }, { id: 'plug', text: '인증 멀티탭', price: 15000 }] }, target: { budget: { must: ['roomA', 'ext'], not: ['roomB'] } }, difficulty: 0.25 },
            { prompt: '예산 500,000원. 방 A와 소화기·문 보조 잠금장치는 꼭 넣고, 설비가 부족한 방은 빼고 고르세요.', toolOptions: { mode: 'budget', budget: 500000, items: [{ id: 'roomA', text: '방 A 월세(설비 갖춤)', price: 420000 }, { id: 'roomB', text: '방 B 월세(경보기 고장)', price: 350000 }, { id: 'roomC', text: '방 C 월세(녹슨 가스 밸브)', price: 380000 }, { id: 'ext', text: '소화기', price: 20000 }, { id: 'plug', text: '인증 멀티탭', price: 15000 }, { id: 'lock', text: '문 보조 잠금장치', price: 25000 }, { id: 'lamp', text: '무드등', price: 30000 }, { id: 'rug', text: '러그', price: 40000 }] }, target: { budget: { must: ['roomA', 'ext', 'lock'], not: ['roomB', 'roomC'] } }, difficulty: 0.35 },
            { prompt: '예산이 460,000원으로 줄었어요. 방 A와 소화기는 지키고, 꾸미는 물건과 설비가 부족한 방은 빼고 고르세요.', toolOptions: { mode: 'budget', budget: 460000, items: [{ id: 'roomA', text: '방 A 월세(설비 갖춤)', price: 420000 }, { id: 'roomB', text: '방 B 월세(경보기 고장)', price: 350000 }, { id: 'ext', text: '소화기', price: 20000 }, { id: 'plug', text: '인증 멀티탭', price: 15000 }, { id: 'lamp', text: '무드등', price: 30000 }, { id: 'rug', text: '러그', price: 40000 }] }, target: { budget: { must: ['roomA', 'ext'], not: ['roomB', 'lamp', 'rug'] } }, difficulty: 0.4, conclude: '예산이 줄면 꾸미는 물건부터 빼고, 안전 설비와 안전용품은 지켜요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '방 A와 방 B 가운데 무엇을 골랐는지, 비용과 안전을 함께 따진 근거를 쓰세요.' }] },
        notes: '월세·가격은 수업용 가상 값이다. 지역·실제 시세를 다루지 않는다.',
      }),
      M({
        id: 'activity.gas-order', type: 'activity', title: '가스 냄새 대응 차례',
        method: '가스 냄새 장면별 대응 순서', tool: 'timeline', minutes: 19,
        levels: { easy: '행동 카드 3장을 차례로 놓는다.', base: '카드 5장을 차례로 놓고 함정 카드(불 켜고 확인)를 남긴다.', challenge: '가스 냄새와 난방기구 과열의 대응을 나누어 견준다.' },
        activity: {
          title: '가스 냄새 날 때 차례', tool: 'timeline',
          teacher: '"퇴근하고 현관문을 열었더니 가스 냄새가 나요. 불부터 켜고 어디서 나는지 찾아볼까요?" 카드를 놓기 전에 첫 행동을 말하게 한다. \'불을 켜고 확인한다\'를 놓는 학생에게 "스위치를 누를 때 생기는 작은 불꽃이 가스와 만나면 어떻게 될까요?"라고 묻는다. 가스는 건드리지 않고·환기하고·잠그고·나가서 신고하는 차례이고, 난방기구 과열은 끄고·뽑고·살피는 차례라는 차이를 짚는다.',
          task: '상황마다 행동 카드를 차례로 놓고 함정 카드는 남겨요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDERQ('현관문을 열었더니 가스 냄새가 나요. 행동 카드를 차례로 놓으세요.', ['전기 스위치·불을 건드리지 않는다', '창문과 문을 열어 환기한다', '가스 밸브를 잠근다', '밖으로 나간다', '밖에서 가스 회사나 119에 신고한다'], { k: 3, traps: ['불을 켜고 냄새 나는 곳을 찾는다'], d: 0.35 }),
            ORDERQ('전기장판 한쪽이 유난히 뜨거워요. 행동 카드를 차례로 놓으세요.', ['전원을 끈다', '플러그를 뽑는다', '이불을 걷어 열을 식힌다', '접힌 곳·탄 자국을 살핀다', '이상이 있으면 쓰지 않고 바꾼다'], { k: 3, traps: ['이불을 더 덮어 둔다'], d: 0.3 }),
            SORTQ('행동을 가스 냄새일 때와 난방기구 과열일 때로 나누세요.', ['가스 냄새', '난방기구 과열'], [
              ['스위치를 건드리지 않는다', '밸브를 잠그고 밖으로 나간다', '밖에서 신고한다'], ['전원을 끄고 플러그를 뽑는다', '탈 물건을 떼어 놓는다', '탄 자국을 살핀다'],
            ], { k: 2, traps: ['불을 켜고 확인한다'], d: 0.35, more: { conclude: '가스는 불꽃을 만들지 않고 나가서 신고, 난방기구는 끄고 뽑고 살펴요 — 상황마다 첫 행동이 달라요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '가스 냄새가 날 때 \'불을 켜고 확인한다\'가 위험한 까닭을 쓰세요.' }] },
      }),
      M({
        id: 'activity.heater-dilemma', type: 'activity', title: '겨울 난방 갈림길',
        method: '겨울 난방 갈림길 결과 추적', tool: 'dilemma', minutes: 19,
        levels: { easy: '갈림길 하나에서 고르고 근거를 고른다.', base: '갈림길 둘을 지나 한 주 동안의 결과를 보고 근거를 고른다.', challenge: '갈림길 셋까지 가서 비용과 안전의 근거를 함께 고르고, 다른 길과 견준다.' },
        activity: {
          title: '첫 겨울 난방 갈림길', tool: 'dilemma',
          teacher: '"자취방 첫 겨울, 난방비를 아끼고 싶은 마음은 당연해요. 그럼 무엇을 지키면서 아낄까요?" 선택마다 한 주 동안 이어지는 결과를 읽게 한다. \'옷만 겹쳐 입고 버틴다\'만 정답이라는 학생에게 "잠을 설치는 것도 비용 아닐까요? 안전과 생활을 함께 지키는 길은 없을까요?"라고 묻는다. 비용을 줄일 때도 \'켠 채 잠들지 않기\' 같은 안전 기준은 남긴다는 점을 짚는다.',
          task: '난방 갈림길을 따라 한 주 동안의 결과를 보고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('첫 겨울 자취방에서 비용과 안전을 함께 지키는 길을 고르고 근거를 고르세요.', HEAT, [['timer', 'check', 'layer']], HEAT_R, ['sleep', 'cost'], { d: 0.4 }),
            EXPLOREQ('\'난로를 침대 옆에\'·\'옷만 겹쳐 입기\' 길도 끝까지 가 보고 결과를 견주세요.', HEAT, HEAT_R, ['다른 길의 끝 장면을 확인했다', '비용·안전·건강을 함께 견주었다'], { d: 0.35 }),
            DILQ('룸메이트가 빨래를 빨리 말리려고 전기난로 앞에 걸어 두었을 때 알맞은 길을 고르고 근거를 고르세요.', { text: '룸메이트가 빨래를 빨리 말리겠다며 전기난로 바로 앞 의자에 걸어 두었다.', who: '룸메이트', motif: 'sun', choices: [
              { id: 'leave', text: '빨리 마르겠다며 그냥 둔다', result: '옷에서 김이 오르며 뜨거워진다.', impact: [{ who: '두 사람', text: '불이 붙을 위험에 놓인다', tone: -1 }], ending: '탈 물건은 난방기구에서 떨어뜨리는 것이 기준이다.' },
              { id: 'move', text: '빨래를 떼어 놓자고 말한다', result: '룸메이트가 "그럼 언제 말려?"라며 투덜댄다.', impact: [{ who: '두 사람', text: '당장의 위험은 사라진다', tone: 1 }],
                next: { text: '룸메이트가 여전히 빨래 말릴 곳이 없다고 한다.', choices: [
                  { id: 'rack', text: '건조대를 창가에 두고 환기하자고 함께 정한다', result: '빨래는 조금 늦게 마르지만 규칙이 생긴다.', impact: [{ who: '두 사람', text: '함께 지킬 규칙이 생긴다', tone: 1 }], ending: '불편을 함께 풀 방법을 정하면 규칙이 지켜진다.' },
                  { id: 'secret', text: '내가 없을 때만 난로 앞에 두라고 한다', result: '보는 사람 없이 위험이 이어진다.', impact: [{ who: '두 사람', text: '위험이 숨겨진다', tone: -1 }], ending: '보는 사람이 없어도 위험은 그대로다.' }] } }] },
              [['move', 'rack']], [{ id: 'away', text: '탈 물건은 난방기구에서 떨어뜨린다' }, { id: 'rule', text: '함께 사는 사람과 지킬 규칙을 정한다' }, { id: 'fast', text: '빨리 마르면 조금 위험해도 괜찮다', why: '편리함과 바꿀 수 있는 안전은 없어요.' }], ['away', 'rule'], { d: 0.35, more: { conclude: '난방기구는 켠 채 잠들지 않고, 탈 물건과 떨어뜨리고, 함께 사는 사람과 규칙을 정해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '난방비를 아끼면서도 지킬 안전 기준 두 가지를 쓰세요.' }] },
      }),

      M({
        id: 'wrap.hazard-sort', type: 'wrap', title: '난방기구 위험 가르기',
        method: '난방기구 위험 가르기', tool: 'mindmap', minutes: 6,
        levels: { easy: '장면 카드 4장(화재 위험·안전한 사용)을 나눈다.', base: '장면 카드 6장을 화재 위험·가스 위험·안전한 사용으로 나눈다.', challenge: '위험 카드 하나를 골라 고칠 말을 쓴다.' },
        wrap: {
          teacher: '"오늘 본 난방기구 장면을 세 칸에 나눠 봐요. 화재 위험, 가스 위험, 그리고 안전한 사용." 나눈 뒤 위험 카드 하나를 골라 고칠 말을 말하게 한다. \'창문 꼭 닫고 가스난로\'를 안전한 사용에 둔 학생에게 "가스를 태우는 기구를 쓸 때 공기는 어디서 들어올까요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '난방기구 사용 장면', slots: ['화재 위험', '가스 위험', '안전한 사용'], cards: ['난로 앞에 빨래 걸기', '전기장판 접어서 쓰기', '창문을 꼭 닫고 가스난로 켜기', '가스 냄새 나는데 불 켜기', '타이머 맞추고 잠들기', '난로를 탈 물건과 떨어뜨리기'] }, prompt: '난방기구 장면을 세 칸에 나누세요.', target: { sort: { '화재 위험': ['난로 앞에 빨래 걸기', '전기장판 접어서 쓰기'], '가스 위험': ['창문을 꼭 닫고 가스난로 켜기', '가스 냄새 나는데 불 켜기'], '안전한 사용': ['타이머 맞추고 잠들기', '난로를 탈 물건과 떨어뜨리기'] } }, difficulty: 0.25 },
            { type: 'choice', prompt: '가스 냄새가 날 때 가장 먼저 하지 말아야 할 일은?', options: ['창문 열기', '전기 스위치 켜기', '밸브 잠그기'], answer: 1, difficulty: 0.15, explain: '스위치의 작은 불꽃이 가스에 불을 붙일 수 있어요.' },
            { type: 'short', prompt: '위험 카드 하나를 골라 고칠 말을 쓰세요.' },
          ],
        },
        worksheet: {
          title: '난방기구 위험',
          items: [
            { type: 'table', prompt: '위험한 장면을 고칠 말을 쓰세요.', columns: ['위험한 장면', '고칠 말'], cells: [['난로 앞에 빨래 걸기', ''], ['전기장판 접어서 쓰기', '']] },
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '난방기구는 켠 채 ___ 않는다.', answer: '잠들지' },
          ],
        },
      }),
      M({
        id: 'wrap.indep-plan', type: 'wrap', title: '첫 방 안전 약속 글',
        method: '자립 주거 안전 계획 성찰 글', tool: 'rubric-writing', minutes: 6,
        levels: { easy: '문장 틀("나는 첫 방에서 ~을 지킨다")을 보고 쓴다.', base: '안전 약속 네 가지를 쓰고 기준표로 점검한다.', challenge: '가족·룸메이트와 나눌 규칙 하나를 활동지에 더한다.' },
        wrap: {
          teacher: '"졸업 뒤 첫 방에서 지킬 안전 약속 네 가지를 써 봐요. 구체적이고, 비용도 생각했고, 내가 정말 지킬 수 있는 약속이어야 해요." 기준표를 함께 읽는다. "불조심한다"처럼만 쓴 학생에게 "무엇을, 언제, 어떻게 할지 넣으면 어떤 문장이 될까요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'rubric-writing', options: { topic: '졸업 뒤 첫 방에서 지킬 안전 약속 네 가지를 쓰세요.', minChars: 60, maxChars: 400, starter: '나는 첫 방에서 ~을 지킨다.', sample: '집을 고를 때 화재경보기가 울리는지 시험 단추를 눌러 본다. 소화기는 현관 옆에 둔다. 전기장판은 타이머를 맞추고 켠 채 잠들지 않는다. 가스 냄새가 나면 스위치를 건드리지 않고 밖에서 신고한다.' }, prompt: '안전 약속을 쓰고 기준표로 점검하세요.', target: { selfCheck: ['약속마다 무엇을 언제 할지 구체적이다', '비용을 생각한 약속이 있다', '내가 정말 지킬 수 있다'], sentences: [4, 6] }, difficulty: 0.3 },
            { type: 'choice', prompt: '"방이 싸고 넓으면 좋은 집이다"에 대한 판단으로 알맞은 것은?', options: ['맞다', '가격·넓이와 함께 안전 설비를 따져야 한다', '안전은 집주인 몫이라 상관없다'], answer: 1, difficulty: 0.15, explain: '좋은 집은 가격과 넓이뿐 아니라 안전 설비까지 갖춘 집이에요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '첫 방 안전 약속',
          items: [
            { type: 'short', prompt: '첫 방에서 지킬 안전 약속 네 가지를 쓰세요.' },
            { type: 'short', prompt: '가족이나 룸메이트와 함께 정할 규칙 하나를 쓰세요.' },
          ],
          easy: { note: '"나는 첫 방에서 ~을 지킨다. ~할 때는 ~한다."', items: [{ type: 'short', prompt: '틀에 맞춰 약속 두 가지를 쓰세요.' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 12. 자립 생활의 기호식품 소비와 건강 관리 (12학년)
  // ======================================================================================================
  {
    const M = MOD('indep-consumption', [12]);
    const SPEND = [['주거', 45], ['식비', 25], ['기호식품', 20], ['교통', 10]];
    const DUE = { text: '과제 마감 전날 밤 12시. 아직 절반이 남았다. 배가 고프고 눈이 감긴다.', who: '하준', motif: 'moon', choices: [
      { id: 'cans', text: '에너지 음료 두 캔을 사 와 밤새 한다', result: '새벽 4시에 과제를 내지만 머리가 멍하다.', impact: [{ who: '하준', text: '잠이 모자라고 지출이 늘어난다', tone: -1 }],
        next: { text: '다음 날 1교시 수업. 졸다가 중요한 공지를 놓친다.', choices: [
          { id: 'again', text: '또 에너지 음료를 마신다', result: '저녁이 되어도 잠이 오지 않는다.', impact: [{ who: '하준', text: '밤샘이 이틀째로 이어진다', tone: -1 }], ending: '카페인으로 미룬 잠은 다음 날 더 큰 피로로 돌아온다.' },
          { id: 'nap', text: '점심시간에 짧게 쉬고 밤에 일찍 잔다', result: '하루 만에 생활이 돌아온다.', impact: [{ who: '하준', text: '회복을 시작한다', tone: 0 }], ending: '무너진 하루는 다음 날 잠으로 되돌린다.' }] } },
      { id: 'delivery', text: '야식을 배달시켜 먹으며 한다', result: '배는 부르지만 졸음이 더 몰려온다.', impact: [{ who: '하준', text: '지출이 늘고 집중이 떨어진다', tone: -1 }], ending: '피로를 먹는 것으로 달래면 몸과 지갑이 함께 무거워진다.' },
      { id: 'sleep', text: '간단히 요기하고 2시간 자고 새벽에 마무리한다', result: '새벽 5시에 일어나 맑은 머리로 마무리한다.', impact: [{ who: '하준', text: '잠과 과제를 함께 챙긴다', tone: 1 }],
        next: { text: '과제를 냈다. 하지만 이번 주에만 마감이 두 번 더 있다.', choices: [
          { id: 'plan', text: '마감 사흘 전부터 나눠 하는 계획을 세운다', result: '다음 마감은 밤 12시 전에 끝낸다.', impact: [{ who: '하준', text: '밤샘이 줄어든다', tone: 1 }],
            next: { text: '한 주를 돌아보니 기호식품 지출이 지난주의 절반이다.', choices: [
              { id: 'record', text: '지출과 잠을 계속 기록하기로 한다', result: '패턴이 보여 다음 주 계획이 쉬워진다.', impact: [{ who: '하준', text: '습관을 스스로 다룬다', tone: 1 }], ending: '기록은 습관을 바꾸는 가장 작은 첫걸음이다.' },
              { id: 'reward', text: '잘했으니 주말에 몰아서 야식을 먹는다', result: '주말 지출이 다시 크게 는다.', impact: [{ who: '하준', text: '줄인 만큼 되돌아간다', tone: -1 }], ending: '보상을 기호식품으로만 하면 같은 고리로 돌아온다.' }] } },
          { id: 'same', text: '이번처럼 그때그때 버틴다', result: '다음 마감도 밤 12시에 시작한다.', impact: [{ who: '하준', text: '같은 밤이 되풀이된다', tone: -1 }], ending: '계획이 없으면 같은 밤이 되풀이된다.' }] } }] };
    const DUE_R = [{ id: 'pattern', text: '피곤할 때 카페인·야식에 기대면 습관이 되기 쉽다' }, { id: 'both', text: '건강과 비용을 함께 따져 선택한다' }, { id: 'only', text: '피곤할 땐 카페인이 유일한 해결책이다', why: '잠·계획·짧은 휴식처럼 다른 방법이 있어요.' }, { id: 'free', text: '혼자 살면 먹고 싶은 대로 먹는 게 자유다', why: '자유로운 선택일수록 그 결과도 내가 감당해요.' }];

    MODS.push(
      M({
        id: 'intro.week-story', type: 'intro', title: '새내기의 일주일',
        method: '새내기의 일주일 사례', tool: 'story', minutes: 6,
        levels: { easy: '장면 세 개에서 몸과 지갑의 변화를 고른다.', base: '장면 다섯 개를 넘겨 보며 몸의 변화와 지갑의 변화를 나눈다.', challenge: '변화의 원인을 이어서 설명한다.' },
        intro: {
          teacher: '"대학 새내기 하준이의 가상 일주일이에요. 밤샘 과제, 에너지 음료, 야식 배달… 주말에 하준이의 몸과 지갑은 어떻게 되었을까요?" 시연 단추로 변화 카드가 몸·지갑 칸에 나뉘는 모습을 보여 준다. "조금씩 사는 건 돈이 안 든다"는 말이 나오면 "하루 한 캔이 일주일이면, 한 달이면 얼마가 될까요?"라고 되묻는다. 오늘은 기호식품 소비를 기록하고 분석해 관리 계획을 세운다고 밝힌다.',
          student: '대학 새내기의 가상 일주일 장면을 보고, 몸과 지갑에 생긴 변화를 나누어 보세요.',
          demo: { tool: 'story', options: { mode: 'sort', title: '하준이의 일주일(가상)', slots: [{ id: 'body', label: '몸의 변화' }, { id: 'wallet', label: '지갑의 변화' }], cards: [{ id: 'tired', text: '아침마다 머리가 무겁다', motif: 'cloud' }, { id: 'sleep', text: '밤에 잠이 잘 안 온다', motif: 'moon' }, { id: 'money', text: '배달비가 쌓였다', motif: 'star' }, { id: 'cans', text: '음료값이 식비만큼 나왔다', motif: 'sun' }], shuffle: false }, sequence: [{ sort: { body: ['tired', 'sleep'], wallet: ['money', 'cans'] } }] },
          art: { draw: 'a paper weekly calendar with seven boxes showing a laptop at night, energy drink cans piling up, delivery bags, and a thin wallet at the end of the week', banner: '일주일 뒤 내 몸과 지갑', extra: [{ motif: 'moon', x: 300, y: 96 }] },
        },
      }),
      M({
        id: 'intro.spend-chart', type: 'intro', title: '한 달 지출 띠그래프',
        method: '가상의 지출 기록 그래프', tool: 'chart', minutes: 6,
        levels: { easy: '가장 큰 칸을 함께 찾는다.', base: '기호식품 칸의 비율을 읽는다.', challenge: '줄일 수 있는 칸과 그 근거를 말한다.' },
        intro: {
          teacher: '"가상 인물의 한 달 지출 띠그래프예요. 주거, 식비, 기호식품, 교통. 기호식품 칸이 생각보다 크지 않나요?" 시연 단추로 가장 큰 칸을 고르는 모습을 보인 뒤 기호식품 칸의 비율을 함께 읽는다. "기호식품은 조금씩이라 별것 아니다"는 말이 나오면 "교통비보다 큰 칸이 된 까닭은 무엇일까요?"라고 되묻는다.',
          student: '가상 인물의 한 달 지출 띠그래프를 보고, 기호식품 칸이 얼마나 큰지 읽어 보세요.',
          demo: { tool: 'chart', options: { type: 'band', mode: 'read', title: '한 달 지출(가상)', unit: '%', data: SPEND, question: '가장 큰 칸은?', choices: SPEND.map((x) => x[0]) }, sequence: [{ pick: 0 }] },
          art: { draw: 'a long paper strip divided into four colored bands labeled with tiny paper icons of a house, a rice bowl, a coffee cup and a bus, a paper magnifier over the coffee band', banner: '어디에 쓰고 있을까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),

      M({
        id: 'activity.habit-map', type: 'activity', title: '소비 습관 원인 분석',
        method: '소비 습관 원인 분석', tool: 'mindmap', minutes: 19,
        levels: { easy: '원인 가지마다 장면 카드 1장씩(4장)을 놓는다.', base: '장면 8장을 네 원인에 나누고, 원인마다 대신할 행동을 짝짓는다.', challenge: '카드를 섞어 풀고, 원인이 서로 이어지는 악순환 장면을 고른다.' },
        activity: {
          title: '자꾸 사게 되는 까닭', tool: 'mindmap',
          teacher: '"\'자꾸 사게 되는 기호식품\', 왜 그럴까요? 의지가 약해서만은 아니에요." 장면 카드를 원인 가지에 나눈 뒤 원인마다 대신할 행동을 짝짓게 한다. "혼자 살면 먹고 싶은 대로 먹는 게 자유"라는 학생에게 "자유롭게 고른 결과를 내 몸과 통장이 감당할 때, 그 선택은 누가 정한 걸까요?"라고 묻는다. 피로가 카페인을, 카페인이 잠 부족을, 잠 부족이 다시 피로를 부르는 고리를 짚는다.',
          task: '소비 장면을 원인 가지에 나누고 대신할 행동과 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('소비 장면 카드를 원인 가지에 나누세요.', ['피로', '스트레스', '광고', '편리함'], [
              ['아침마다 졸려 커피 두 잔', '오후 수업 전 에너지 음료'], ['시험 끝나고 야식 몰아 먹기', '속상한 날 단 음료 여러 개'],
              ['할인 쿠폰 알림에 배달 주문', 'SNS 광고 보고 새 음료 사기'], ['집 앞 편의점에서 매일 간식', '조리하기 귀찮아 배달'],
            ], { k: 1, d: 0.35, opt: { topic: '자꾸 사게 되는 기호식품' } }),
            MATCHQ('원인 가지마다 대신할 행동을 짝지으세요.', [['피로', '잠드는 시각을 정해 지킨다'], ['스트레스', '산책·운동·대화로 푼다'], ['광고', '쿠폰 알림을 끈다'], ['편리함', '간단 조리 재료를 미리 사 둔다']], { k: 2, d: 0.35, opt: { topic: '대신할 행동' } }),
            PICKQ('원인이 서로 이어져 되풀이되는 악순환 장면만 고르세요.', ['밤에 커피를 마셔 잠을 설치고, 아침에 졸려 또 커피를 마신다', '스트레스로 야식을 먹고, 늦게 자서 다음 날 더 지친다'], ['주말에 친구와 카페에 간다', '장을 봐서 일주일 반찬을 만든다'], { d: 0.4, opt: { basket: '악순환' }, more: { conclude: '기호식품 소비는 피로·스트레스·광고·편리함이 이어진 고리라서, 고리 하나를 끊는 대신 행동이 필요해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내 생활에서 끊고 싶은 고리 하나와 대신할 행동을 쓰세요.' }] },
      }),
      M({
        id: 'activity.food-budget', type: 'activity', title: '한 주 식비 예산 짜기',
        method: '한 주 식비 예산 짜기', tool: 'economy', minutes: 19,
        levels: { easy: '항목 5개 가운데 예산 안에서 고르고, 고른 값의 합계가 보인다.', base: '항목 10개 가운데 조건(장보기 넣기·밤 카페인과 잦은 야식 빼기)을 지켜 고른다.', challenge: '숫자 합계 없이 막대만 보고, 시험 주간 계획을 따로 짠다.' },
        activity: {
          title: '한 주 식비 예산 짜기', tool: 'economy',
          teacher: '"한 주 식비가 정해져 있어요. 장보기·학식·배달·음료 가운데 무엇을 넣을까요? 조건은 잠과 건강을 해치는 선택을 줄이는 것." 예산 막대를 보며 고르게 한 뒤 근거를 짝에게 말하게 한다. 예산 안이라며 에너지 음료를 여러 묶음 넣은 학생에게 "예산은 지켰는데, 잠과 건강의 조건은 지켰나요?"라고 묻는다. 돈의 예산과 몸의 예산을 함께 따진다는 점을 짚는다.',
          task: '한 주 식비 예산 막대를 넘지 않게, 조건을 지켜 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            { prompt: '한 주 식비 60,000원. 장보기 묶음은 꼭 넣고, 밤 에너지 음료 묶음은 빼고 고르세요.', toolOptions: { mode: 'budget', budget: 60000, items: [{ id: 'mart', text: '장보기(쌀·달걀·채소)', price: 25000 }, { id: 'cafe', text: '학식 5끼', price: 25000 }, { id: 'night', text: '밤 에너지 음료 5캔', price: 12500 }, { id: 'snack', text: '편의점 간식', price: 8000 }, { id: 'fruit', text: '우유·과일', price: 9000 }] }, target: { budget: { must: ['mart'], not: ['night'] } }, difficulty: 0.25 },
            { prompt: '한 주 식비 80,000원. 장보기와 우유·과일은 꼭 넣고, 밤 에너지 음료와 야식 배달 3번은 빼고 고르세요.', toolOptions: { mode: 'budget', budget: 80000, items: [{ id: 'mart', text: '장보기(쌀·달걀·채소)', price: 25000 }, { id: 'cafe', text: '학식 5끼', price: 25000 }, { id: 'night', text: '밤 에너지 음료 5캔', price: 12500 }, { id: 'del3', text: '야식 배달 3번', price: 60000 }, { id: 'del1', text: '주말 배달 1번', price: 18000 }, { id: 'snack', text: '편의점 간식', price: 8000 }, { id: 'fruit', text: '우유·과일', price: 9000 }, { id: 'coffee', text: '아침 커피 5잔', price: 15000 }, { id: 'tea', text: '보리차 티백', price: 4000 }, { id: 'bread', text: '빵·시리얼', price: 7000 }] }, target: { budget: { must: ['mart', 'fruit'], not: ['night', 'del3'] } }, difficulty: 0.35 },
            { prompt: '시험 주간 식비 70,000원. 장보기는 꼭 넣고, 밤 에너지 음료·야식 배달 3번·아침 커피 5잔은 빼고 고르세요.', toolOptions: { mode: 'budget', budget: 70000, items: [{ id: 'mart', text: '장보기(쌀·달걀·채소)', price: 25000 }, { id: 'cafe', text: '학식 5끼', price: 25000 }, { id: 'night', text: '밤 에너지 음료 5캔', price: 12500 }, { id: 'del3', text: '야식 배달 3번', price: 60000 }, { id: 'coffee', text: '아침 커피 5잔', price: 15000 }, { id: 'fruit', text: '우유·과일', price: 9000 }, { id: 'tea', text: '보리차 티백', price: 4000 }] }, target: { budget: { must: ['mart'], not: ['night', 'del3', 'coffee'] } }, difficulty: 0.4, conclude: '식비 예산은 돈의 한도와 함께 잠·건강의 조건을 지킬 때 좋은 계획이 돼요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '평소 주간과 시험 주간의 식비 계획을 견주어 쓰세요.', columns: ['', '평소 주간', '시험 주간'], cells: [['꼭 넣을 것', '', ''], ['뺄 것', '', '']] }] },
        notes: '가격은 수업용 가상 값이다.',
      }),
      M({
        id: 'activity.choice-dilemma', type: 'activity', title: '과제 마감 밤 갈림길',
        method: '밤 12시 과제 마감 갈림길', tool: 'dilemma', minutes: 19,
        levels: { easy: '갈림길 하나에서 고르고 근거를 고른다.', base: '갈림길 둘을 지나 다음 날 수업과 지출 결과를 보고 근거를 고른다.', challenge: '갈림길 셋까지 가서 일주일 패턴으로 결과를 넓혀 보고, 다른 길과 견준다.' },
        activity: {
          title: '밤 12시 마감 갈림길', tool: 'dilemma',
          teacher: '"밤 12시, 과제는 절반 남았고 배고프고 졸려요. 하준이라면?" 선택마다 다음 날 수업과 지출에 생기는 결과를 읽게 한다. "피곤할 땐 카페인밖에 없다"는 학생에게 "에너지 음료 길에서 다음 날 1교시는 어떻게 되었나요?"라고 묻는다. 한 번의 선택이 일주일의 패턴이 된다는 점을 마지막 갈림길에서 짚는다.',
          task: '마감 전날 밤의 갈림길을 따라 결과를 보고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('과제 마감 전날 밤, 잠과 비용을 함께 지키는 길을 고르고 근거를 고르세요.', DUE, [['sleep', 'plan', 'record']], DUE_R, ['pattern', 'both'], { d: 0.4 }),
            EXPLOREQ('\'에너지 음료 두 캔\'·\'야식 배달\' 길도 끝까지 가 보고 결과를 견주세요.', DUE, DUE_R, ['다른 길의 다음 날 결과를 확인했다', '건강과 지출을 함께 견주었다'], { d: 0.35 }),
            DILQ('아르바이트를 마치고 밤 11시에 귀가했을 때 알맞은 길을 고르고 근거를 고르세요.', { text: '밤 11시, 아르바이트를 마치고 집에 왔다. 배가 고프고, 내일 아침 9시 수업이 있다.', who: '하준', motif: 'moon', choices: [
              { id: 'big', text: '배달 앱으로 야식 세트를 시킨다', result: '자정이 넘어 먹고 늦게 잠든다.', impact: [{ who: '하준', text: '잠이 줄고 지출이 는다', tone: -1 }], ending: '늦은 야식은 잠과 지갑을 함께 줄인다.' },
              { id: 'light', text: '미리 사 둔 우유와 빵으로 가볍게 먹는다', result: '30분 안에 씻고 잠자리에 든다.', impact: [{ who: '하준', text: '잠을 지킨다', tone: 1 }],
                next: { text: '룸메이트가 "치킨 시킬 건데 같이 먹을래?"라고 묻는다.', choices: [
                  { id: 'no', text: '"오늘은 먼저 잘게, 주말에 같이 먹자"고 한다', result: '관계도 지키고 잠도 지킨다.', impact: [{ who: '하준', text: '계획대로 잠든다', tone: 1 }], ending: '거절도 다음 약속과 함께하면 관계를 지킨다.' },
                  { id: 'yes', text: '거절하기 어려워 함께 먹는다', result: '새벽 1시에 잠든다.', impact: [{ who: '하준', text: '아침이 힘들어진다', tone: -1 }], ending: '분위기에 맞춘 선택도 결과는 내 몸이 진다.' }] } }] },
              [['light', 'no']], [{ id: 'prepare', text: '미리 준비해 둔 간단한 음식이 늦은 밤 선택을 바꾼다' }, { id: 'sayno', text: '내 계획을 지키는 거절도 할 수 있다' }, { id: 'mood', text: '분위기를 맞추는 것이 먼저다', why: '관계도 소중하지만 내 몸의 계획도 지킬 수 있어요.' }], ['prepare', 'sayno'], { d: 0.35, more: { conclude: '피곤한 밤의 선택은 미리 준비한 대안과 지킬 기준이 있을 때 바뀌어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '마감이 몰린 주를 위해 미리 세울 계획 하나를 쓰세요.' }] },
      }),
      M({
        id: 'activity.routine-plan', type: 'activity', title: '자립 생활 하루 일과',
        method: '자립 생활 하루 일과 배치', tool: 'timeline', minutes: 19,
        levels: { easy: '일과 카드 4장을 시간 칸에 짝짓는다.', base: '일과 카드 6장을 시간 칸에 짝짓고, 카페인·야식이 끼어들기 쉬운 틈을 고른다.', challenge: '아르바이트가 늦게 끝나는 날의 일과를 차례로 다시 놓는다.' },
        activity: {
          title: '기대지 않는 하루 만들기', tool: 'timeline',
          teacher: '"혼자 사는 하루는 내가 짜야 해요. 기호식품에 기대지 않는 하루는 어떤 모습일까요?" 일과 카드를 시간 칸에 놓은 뒤 카페인·야식이 끼어들기 쉬운 틈을 찾게 한다. 수면을 맨 마지막 \'남는 시간\'에 두는 학생에게 "잠을 남는 시간에 두면 무엇이 잠을 밀어낼까요?"라고 묻는다. 수면 시각을 먼저 정하고 나머지를 배치한다는 점을 짚는다.',
          task: '일과 카드를 시간 칸에 놓고 끼어들기 쉬운 틈을 찾아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            MATCHQ('일과 카드를 알맞은 시간 칸에 짝지으세요.', [['아침 7시', '간단 조리로 아침밥'], ['낮 12시', '학식 점심'], ['오후 3시', '과제'], ['저녁 6시', '장보기·운동'], ['밤 8시', '아르바이트'], ['밤 11시 30분', '수면']], { k: 4, d: 0.3, opt: { axis: ['아침', '밤'] } }),
            PICKQ('카페인·야식이 끼어들기 쉬운 틈만 고르세요.', ['아르바이트 끝난 밤 귀갓길 편의점', '과제 마감 전 새벽'], ['아침 장보기', '점심 학식'], { d: 0.3, opt: { basket: '끼어들기 쉬운 틈' } }),
            ORDERQ('아르바이트가 밤 10시에 끝나는 날의 일과를 차례로 놓으세요.', ['오후에 과제를 먼저 끝낸다', '저녁에 간단히 조리해 먹는다', '밤 아르바이트', '귀가 후 바로 씻는다', '물 한 잔 마시고 잠든다'], { k: 3, traps: ['귀갓길에 에너지 음료와 야식을 산다'], d: 0.35, opt: { axis: ['오후', '밤'] }, more: { conclude: '수면 시각을 먼저 정하고, 끼어들기 쉬운 틈에 대신할 행동을 미리 넣어 두면 하루가 버텨요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 하루에서 끼어들기 쉬운 틈과 미리 넣을 대신할 행동을 쓰세요.', columns: ['틈(시간)', '대신할 행동'], cells: [['', ''], ['', '']] }] },
      }),

      M({
        id: 'wrap.habit-words', type: 'wrap', title: '소비 관리 핵심어',
        method: '소비 관리 핵심어', tool: 'wordcards', minutes: 6,
        levels: { easy: '낱말 3개를 뜻과 짝짓는다.', base: '낱말 4개를 뜻과 짝짓는다.', challenge: '낱말을 넣어 내 다짐 문장을 만든다.' },
        wrap: {
          teacher: '"기록, 패턴, 대체 행동, 예산. 오늘의 낱말 넷으로 습관을 다루는 방법을 정리해 봐요." 짝지은 뒤 낱말 둘을 넣은 다짐 문장을 한두 명에게 말하게 한다. "참으면 된다"는 학생에게 "참는 것 대신 할 행동이 있으면 더 쉬울까요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'wordcards', options: { words: [{ en: '기록', ko: '언제 무엇을 얼마에 샀는지 적어 두기' }, { en: '패턴', ko: '기록에서 되풀이되어 보이는 때와 까닭' }, { en: '대체 행동', ko: '기호식품 대신 할 수 있는 행동' }, { en: '예산', ko: '정해 둔 돈과 시간 안에서 쓰는 계획' }] }, prompt: '소비 관리 낱말을 뜻과 짝지으세요.', target: { match: { 기록: '기록', 패턴: '패턴', '대체 행동': '대체 행동', 예산: '예산' } }, difficulty: 0.2 },
            { type: 'choice', prompt: '"조금씩 사는 것은 돈이 안 든다"에 대한 판단으로 알맞은 것은?', options: ['맞다, 한 번에 적으니까', '자주 사면 쌓여 큰 지출이 된다', '기록하면 오히려 더 쓴다'], answer: 1, difficulty: 0.15, explain: '작은 지출도 자주 되풀이되면 커지고, 기록하면 그 패턴이 보여요.' },
            { type: 'short', prompt: '낱말 둘을 넣어 내 다짐 문장을 쓰세요.' },
          ],
        },
        worksheet: {
          title: '소비 관리 핵심어',
          items: [
            { type: 'table', prompt: '낱말마다 내 생활 예를 쓰세요.', columns: ['낱말', '내 생활 예'], cells: [['기록', ''], ['대체 행동', ''], ['예산', '']] },
            { type: 'short', prompt: '이번 주 내 다짐 문장을 쓰세요.' },
          ],
        },
      }),
      M({
        id: 'wrap.consume-check', type: 'wrap', title: '나의 기호식품 습관 점검',
        method: '나의 기호식품 습관 스스로 점검', tool: 'timer', minutes: 6,
        levels: { easy: '습관 항목 3개를 스스로 표시한다.', base: '습관 항목 5개를 스스로 표시한다.', challenge: '바꿀 습관의 첫 행동을 정해 쓴다.' },
        wrap: {
          teacher: '"요즘 내 습관을 솔직하게 표시해 봐요. 이건 시험이 아니에요. 바꿀 하나를 고르기 위한 점검이에요." 표시한 뒤 바꿀 습관 하나와 첫 행동을 정하게 한다. "다 고쳐야 한다"는 학생에게 "다섯 개를 한 번에 바꾸는 것과 하나를 끝까지 바꾸는 것 중 무엇이 오래갈까요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '내 기호식품 습관 점검' }, prompt: '요즘 내 습관을 스스로 점검해 표시하세요.', target: { selfCheck: ['저녁 늦게 카페인을 마시는지 돌아봤다', '야식을 얼마나 자주 먹는지 돌아봤다', '기호식품 지출을 기록해 볼 방법을 정했다', '피곤할 때 대신할 행동을 하나 골랐다', '바꿀 습관 하나를 골랐다'] }, difficulty: 0.1 },
            { type: 'choice', prompt: '습관을 바꾸는 첫걸음으로 가장 알맞은 것은?', options: ['오늘부터 모두 끊는다', '일주일 동안 기록해 패턴을 본다', '친구가 하는 대로 한다'], answer: 1, difficulty: 0.15, explain: '기록하면 패턴이 보이고, 바꿀 지점이 분명해져요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '나의 기호식품 습관',
          items: [
            { type: 'check', prompt: '요즘 내 습관에 표시하세요.', options: ['늦은 카페인', '잦은 야식', '지출 기록', '대신할 행동', '바꿀 습관 고르기'] },
            { type: 'short', prompt: '바꿀 습관 하나와 내일 할 첫 행동을 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 13. 대학·직장 실험실 첫날 규칙과 설비 (12학년)
  // ======================================================================================================
  {
    const M = MOD('univ-lab', [12]);
    const LAB = { title: '가상 대학 실험실', grid: [6, 4], places: [{ name: '내 자리', icon: 'dot', at: [2, 2] }, { name: '비상 샤워기', icon: 'dot', at: [0, 0] }, { name: '세안기', icon: 'dot', at: [3, 1] }, { name: '소화기', icon: 'fire', at: [5, 2] }, { name: '비상구', icon: 'dot', at: [5, 3] }, { name: '시약장', icon: 'dot', at: [1, 3] }] };
    const VENT = { text: '대학 연구실 신입 첫 달. 내일까지 마감인 실험이 있는데, 후드(환기 장치)가 고장 나 소리만 나고 바람이 약하다. 선배는 퇴근했다.', who: '신입 연구원', motif: 'house', choices: [
      { id: 'goon', text: '마감이 급하니 그대로 실험한다', result: '휘발성 용매 냄새가 실험실에 퍼진다.', impact: [{ who: '신입 연구원', text: '머리가 아프고 어지럽다', tone: -1 }],
        next: { text: '옆자리 대학원생도 냄새가 난다며 기침한다.', choices: [
          { id: 'window', text: '창문만 열고 계속한다', result: '냄새는 조금 줄지만 증상은 남는다.', impact: [{ who: '실험실 사람들', text: '노출이 이어진다', tone: -1 }], ending: '환기 장치를 대신할 수 없는 일은 멈춰야 한다.' },
          { id: 'stopnow', text: '이제라도 멈추고 책임자에게 알린다', result: '실험은 미뤄지고 후드 수리가 잡힌다.', impact: [{ who: '실험실 사람들', text: '노출이 멈춘다', tone: 1 }], ending: '늦게라도 멈추고 알리면 다른 사람까지 지킨다.' }] } },
      { id: 'stop', text: '작업을 멈추고 책임자에게 연락한다', result: '책임 교수가 "내일 아침 수리부터 하자"고 답한다.', impact: [{ who: '신입 연구원', text: '위험한 작업을 피한다', tone: 1 }, { who: '마감', text: '하루 늦어진다', tone: -1 }],
        next: { text: '다음 날 선배가 "그 정도는 그냥 해도 됐는데"라고 말한다.', choices: [
          { id: 'explain', text: '공손하게 수칙과 물질 정보를 근거로 설명한다', result: '선배가 "그건 맞네, 다음엔 나도 확인할게"라고 한다.', impact: [{ who: '선배', text: '수칙을 다시 생각한다', tone: 1 }],
            next: { text: '책임자가 앞으로 같은 일이 생기면 어떻게 할지 메일로 정리해 달라고 한다.', choices: [
              { id: 'mail', text: '상황·요청·까닭을 담아 설비 점검 규칙을 제안하는 메일을 쓴다', result: '연구실에 \'후드 고장 시 작업 중지\' 안내가 붙는다.', impact: [{ who: '연구실 모두', text: '같은 위험을 미리 막는다', tone: 1 }], ending: '멈춘 한 번이 연구실의 규칙이 되었다.' },
              { id: 'skip', text: '귀찮아서 말로만 대충 전한다', result: '규칙은 생기지 않고 다음 신입이 같은 일을 맞는다.', impact: [{ who: '다음 신입', text: '같은 위험에 놓인다', tone: -1 }], ending: '기록으로 남기지 않으면 판단은 다음 사람에게 이어지지 않는다.' }] } },
          { id: 'sorry', text: '"제가 너무 예민했나 봐요"라며 사과한다', result: '다음에 위험해도 멈추기 어려워진다.', impact: [{ who: '신입 연구원', text: '멈출 용기가 줄어든다', tone: -1 }], ending: '옳은 판단을 사과로 바꾸면 다음 판단이 흔들린다.' }] } },
      { id: 'mask', text: '마스크만 쓰고 혼자 빨리 끝낸다', result: '일반 마스크로는 용매 증기를 막지 못한다.', impact: [{ who: '신입 연구원', text: '노출을 막지 못한다', tone: -1 }], ending: '맞지 않는 보호구는 보호구가 아니다.' }] };
    const VENT_R = [{ id: 'stopright', text: '위험하면 작업을 멈추고 책임자에게 묻는다' }, { id: 'info', text: '물질 정보와 설비 상태를 근거로 판단한다' }, { id: 'newbie', text: '신입은 시키는 대로만 하면 된다', why: '안전은 직급과 상관없이 모두의 권리이자 책임이에요.' }, { id: 'senior', text: '선배가 괜찮다고 하면 수칙을 건너뛰어도 된다', why: '수칙은 사람의 말이 아니라 위험을 근거로 정해져요.' }];

    MODS.push(
      M({
        id: 'intro.firstday-map', type: 'intro', title: '실험실 평면에서 설비 찾기',
        method: '실험실 평면에서 설비 찾기', tool: 'map', minutes: 6,
        levels: { easy: '설비 두 곳(세안기·비상구)을 함께 찾는다.', base: '설비 네 곳을 찾고 내 자리에서 가장 가까운 것을 정한다.', challenge: '설비 앞이 짐으로 막혀 있을 때 할 일을 말한다.' },
        intro: {
          teacher: '"대학 실험실 첫날이라고 생각해 봐요. 자리에 앉기 전에 확인할 것이 있어요. 비상 샤워기, 세안기, 소화기, 비상구는 어디 있을까요?" 시연 단추로 세안기에 핀이 꽂히는 모습을 보여 준다. "첫날은 짐 풀고 선배 말만 들으면 된다"는 말이 나오면 "눈에 약품이 튀었을 때 세안기 위치를 그때 물어볼 수 있을까요?"라고 되묻는다. 오늘은 첫날 확인할 설비와 규칙, 멈추고 묻는 권리를 다룬다고 밝힌다.',
          student: '가상 대학 실험실 평면에서 비상 샤워기·세안기·소화기·비상구를 찾고, 내 자리에서 가장 가까운 설비를 생각해 보세요.',
          demo: { tool: 'map', options: LAB, sequence: [{ place: '세안기' }] },
          art: { draw: 'a top-down paper laboratory floor plan with benches, a safety shower, an eyewash station, a fire extinguisher and a green exit sign, a new researcher holding a checklist at the door', banner: '첫날, 설비부터 찾아요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      M({
        id: 'intro.senior-emotion', type: 'intro', title: '선배의 "괜찮아" 앞에서',
        method: "선배의 '괜찮아' 앞에서", tool: 'emotion', minutes: 6,
        levels: { easy: '그 순간 신입의 마음을 함께 짐작한다.', base: '마음을 짐작하고 세 선택 가운데 하나를 골라 결과를 본다.', challenge: '공손하게 확인하는 말을 한 문장 만든다.' },
        intro: {
          teacher: '"첫 주, 선배가 \'이건 보호안경 없이 해도 돼, 다들 그래\'라고 해요. 신입은 어떤 마음일까요?" 시연 단추로 \'공손하게 확인한다\'를 고르면 결과가 이어지는 모습을 보여 준다. "모르는 걸 물으면 무능해 보인다"는 말이 나오면 "모르고 다친 신입과 물어보고 안전했던 신입, 누가 더 믿음직할까요?"라고 되묻는다.',
          student: '선배가 보호안경 없이 해도 된다고 말하는 장면에서, 신입의 마음을 짐작하고 어떻게 할지 골라 보세요.',
          demo: { tool: 'emotion', options: { mode: 'branch', situation: '선배가 "이건 보호안경 없이 해도 돼, 다들 그래"라고 한다.', feeling: '걱정', who: '신입 연구원', choices: [{ id: 'follow', text: '선배 말대로 벗는다', result: '튄 용액이 눈 가까이 묻는다.', mood: '무서움' }, { id: 'ask', text: '"제가 아직 처음이라, 수칙대로 쓰고 해도 될까요?"라고 묻는다', result: '선배가 "그래, 그게 맞지"라며 웃는다.', mood: '편안함' }, { id: 'silent', text: '말없이 혼자 몰래 쓴다', result: '안전하지만 불편한 마음이 남는다.', mood: '걱정' }] }, sequence: [{ choice: 'ask' }] },
          art: { draw: 'a paper lab bench with a senior researcher waving off safety goggles and a new researcher holding goggles with a thoughtful expression, a small paper speech bubble between them', banner: '"괜찮아"라는 말 앞에서', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
      }),

      M({
        id: 'activity.firstday-list', type: 'activity', title: '실험실 첫날 확인 목록',
        method: '실험실 첫날 확인 목록', tool: 'mindmap', minutes: 19,
        levels: { easy: '확인 후보 카드 6장을 첫날 꼭·첫 주 안에·안전과 무관으로 나눈다.', base: '카드 10장을 나누고, 첫날 꼭 확인하는 근거를 고르며, 누구에게 확인할지 짝짓는다.', challenge: '카드를 섞어 풀고, 활동지에 내가 첫날 물어볼 질문을 쓴다.' },
        activity: {
          title: '첫날 확인 목록 만들기', tool: 'mindmap',
          teacher: '"실험실 첫날 확인할 것은 많아요. 그중 오늘 꼭 해야 할 것과 이번 주 안에 하면 될 것은?" 카드를 세 칸에 나누게 한다. \'물질 정보 위치\'를 \'첫 주 안에\'에 두는 학생에게 "첫날 오후에 처음 만지는 약품의 응급조치를 모른다면?"이라고 묻는다. 확인은 혼자 찾는 것이 아니라 안전 책임자·선배에게 묻는 것도 포함한다는 점을 짚는다.',
          task: '첫날 확인 후보를 세 칸에 나누고 확인할 사람과 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('실험실 첫날 확인 후보 카드를 세 칸에 나누세요.', ['첫날 꼭', '첫 주 안에', '안전과 무관'], [
              ['비상 샤워기·세안기 위치', '물질 정보(물질안전보건자료) 위치', '비상 연락처', '대피로와 비상구'],
              ['보호구 지급 요청', '실험실 안전 교육 일정', '폐기물 처리 규칙'],
              ['퇴근 시간만 확인', '자리 꾸미기', '회식 날짜'],
            ], { k: 2, d: 0.35, opt: { topic: '실험실 첫날' } }),
            PICKQ('\'비상 샤워기·세안기 위치\'를 첫날 꼭 확인하는 근거만 고르세요.', ['사고는 첫날에도 날 수 있다', '눈에 튀면 눈을 감은 채 찾아가야 한다'], ['선배가 알려 줄 때까지 기다리면 된다', '첫날은 실험을 안 하니 상관없다'], { d: 0.35, opt: { basket: '근거' } }),
            MATCHQ('확인할 것마다 물어볼 사람을 짝지으세요.', [['물질 정보 위치', '실험실 안전 책임자'], ['보호구 지급', '연구실 책임자(지도 교수·팀장)'], ['오늘 실험의 위험한 단계', '함께 실험하는 선배']], { k: 2, d: 0.35, more: { conclude: '첫날은 설비 위치·물질 정보·비상 연락처를 먼저 확인하고, 모르면 정해진 사람에게 물어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '실험실(또는 일터) 첫날 내가 물어볼 질문 두 가지를 쓰세요.' }] },
        notes: '대학·직장마다 안전 책임자 이름과 체계가 다르다. 진로 분야별로 바꿔 말해도 된다.',
      }),
      M({
        id: 'activity.msds-cards', type: 'activity', title: '물질 정보 핵심 항목',
        method: '물질 정보 읽기 핵심 항목', tool: 'wordcards', minutes: 19,
        levels: { easy: '물질 정보 항목 낱말 2개를 뜻과 짝짓는다.', base: '항목 4개를 뜻과 짝짓고, 상황 질문 네 개에 찾아볼 항목을 짝짓는다.', challenge: '물질 정보 없이 약품을 쓰면 안 되는 까닭을 골라 설명한다.' },
        activity: {
          title: '물질 정보 항목 찾기', tool: 'wordcards',
          teacher: '"물질안전보건자료(물질 정보)는 약품의 설명서예요. 모든 칸을 외울 필요는 없고, 필요한 순간 어느 칸을 찾을지 알면 돼요." 가상 요약을 보며 항목 낱말을 뜻과 짝짓게 한다. 눈에 튄 상황에 \'취급·보관\'을 고르는 학생에게 "지금 필요한 것은 어떻게 보관하는지일까요, 어떻게 응급조치하는지일까요?"라고 묻는다.',
          task: '물질 정보 항목 낱말을 뜻과 짝짓고 상황마다 찾을 항목을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            WORDQ('물질 정보 항목 낱말을 뜻과 짝지으세요.', [['유해성·위험성', '이 물질이 몸과 환경에 어떤 해를 주는지'], ['응급조치 요령', '눈·피부에 닿거나 마셨을 때 할 일'], ['취급 방법', '쓸 때 지킬 주의와 필요한 보호구'], ['저장 방법', '어디에 어떻게 보관하는지']], { k: 2, d: 0.3 }),
            MATCHQ('상황 질문마다 찾아볼 항목을 짝지으세요.', [['눈에 튀었어요. 무엇을 해야 하나요?', '응급조치 요령'], ['어떤 장갑을 껴야 하나요?', '취급 방법'], ['다 쓰고 어디에 두나요?', '저장 방법'], ['얼마나 위험한 물질인가요?', '유해성·위험성']], { k: 2, d: 0.35 }),
            PICKQ('물질 정보를 확인하지 않고 약품을 쓰면 안 되는 까닭만 고르세요.', ['사고가 나도 맞는 응급조치를 모른다', '맞는 보호구를 고를 수 없다'], ['이름만 알면 충분하다', '선배가 쓰던 대로 하면 된다'], { d: 0.35, opt: { mode: 'pick', basket: '까닭' }, more: { conclude: '물질 정보는 쓰기 전에 유해성·취급을, 사고가 나면 응급조치를 찾아보는 약품의 설명서예요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '물질 정보 없이 처음 보는 약품을 쓰면 안 되는 까닭을 쓰세요.' }] },
        notes: '항목 이름은 학생용으로 줄여 썼다. 실제 물질안전보건자료의 항목 이름은 원문을 함께 보여 준다.',
      }),
      M({
        id: 'activity.stopwork-dilemma', type: 'activity', title: '작업을 멈출지 갈림길',
        method: '작업을 멈출지 갈림길 결과 추적', tool: 'dilemma', minutes: 19,
        levels: { easy: '갈림길 하나에서 고르고 근거를 고른다.', base: '갈림길 둘을 지나 결과를 보고 근거를 고른다.', challenge: '갈림길 셋까지 가서 책임자에게 보낼 말을 고르고, 다른 길과 견준다.' },
        activity: {
          title: '후드 고장 난 마감 전날', tool: 'dilemma',
          teacher: '"마감은 내일, 후드는 고장, 선배는 퇴근. 신입인 내가 멈춰도 될까요?" 선택마다 나와 다른 사람에게 생기는 영향을 읽게 한다. "신입은 시키는 대로만 하면 된다"는 학생에게 "위험을 알면서 계속하면 그 결과는 누가 감당할까요?"라고 묻는다. 위험하면 작업을 멈추고 책임자에게 알리는 것은 신입에게도 있는 권리이자 책임이라는 점을 짚는다.',
          task: '작업 중지 갈림길을 따라 결과를 보고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('환기 장치가 고장 난 마감 전날, 안전한 길을 고르고 근거를 고르세요.', VENT, [['stop', 'explain', 'mail']], VENT_R, ['stopright', 'info'], { d: 0.4 }),
            EXPLOREQ('\'그대로 실험\'·\'마스크만 쓰고\' 길도 끝까지 가 보고 결과를 견주세요.', VENT, VENT_R, ['다른 길의 끝 장면을 확인했다', '나와 주변 사람이 받은 영향을 견주었다'], { d: 0.35 }),
            DILQ('아르바이트 첫 주, 매장 냉장고 전선이 탄 냄새를 낼 때 알맞은 길을 고르고 근거를 고르세요.', { text: '아르바이트 첫 주. 매장 냉장고 뒤 전선에서 탄 냄새가 난다. 점장은 "바쁘니 이따 보자"고 한다.', who: '아르바이트생', motif: 'house', choices: [
              { id: 'wait', text: '점장 말대로 나중에 본다', result: '냄새가 점점 진해진다.', impact: [{ who: '매장 사람들', text: '화재 위험이 커진다', tone: -1 }], ending: '바쁨은 위험을 기다려 주지 않는다.' },
              { id: 'again', text: '위험하다는 까닭을 들어 다시 말한다', result: '점장이 와서 냄새를 확인한다.', impact: [{ who: '매장', text: '위험을 함께 본다', tone: 1 }],
                next: { text: '점장이 "플러그만 뽑아 두면 되겠지?"라고 묻는다.', choices: [
                  { id: 'report', text: '뽑은 뒤 쓰지 말고 수리를 부르자고 제안한다', result: '수리 기사가 탄 전선을 바꾼다.', impact: [{ who: '매장 사람들', text: '안전해진다', tone: 1 }], ending: '위험을 말한 한 사람이 매장 전체를 지켰다.' },
                  { id: 'plugback', text: '좀 있다 다시 꽂으면 된다고 한다', result: '냉장고가 다시 탄 냄새를 낸다.', impact: [{ who: '매장', text: '위험이 되돌아온다', tone: -1 }], ending: '원인을 고치지 않으면 위험은 다시 온다.' }] } }] },
              [['again', 'report']], [{ id: 'speak', text: '위험을 알게 되면 직급과 상관없이 알린다' }, { id: 'fix', text: '원인을 고칠 때까지 쓰지 않는다' }, { id: 'boss', text: '윗사람이 괜찮다면 괜찮다', why: '위험은 말이 아니라 상태로 판단해요.' }], ['speak', 'fix'], { d: 0.35, more: { conclude: '위험하면 작업을 멈추고 알리는 것은 신입과 아르바이트생에게도 있는 권리이자 책임이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '작업을 멈추자고 말할 때 공손하면서도 분명하게 쓸 첫 문장을 쓰세요.' }] },
      }),
      M({
        id: 'activity.rights-writing', type: 'activity', title: '안전 요청 메일 쓰기',
        method: '안전 요청 메일 쓰고 점검', tool: 'rubric-writing', minutes: 19,
        levels: { easy: '메일 칸마다 문장 틀을 보고 쓴다.', base: '상황·요청·까닭을 나눠 쓰고 기준표로 점검한다.', challenge: '칸마다 기준 하나가 더 붙고, 답이 없을 때 다음 단계까지 쓴다.' },
        activity: {
          title: '보호구·수리 요청 메일', tool: 'rubric-writing',
          teacher: '"보호구 지급과 후드 수리를 요청하는 메일을 써 봐요. 불평이 아니라 요청이에요. 상황, 요청, 까닭, 예의." 칸을 나눠 쓰게 한다. "빨리 고쳐 주세요"만 쓴 학생에게 "받는 사람이 무엇이 언제부터 어떻게 고장 났는지 알 수 있을까요?"라고 묻는다. 메일에는 실제 이름·연락처 대신 \'○○ 실험실 신입 연구원\'처럼 쓰게 한다.',
          task: '안전 요청 메일을 칸별로 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('메일 첫 부분: 상황을 2~3문장으로 쓰세요.', '가상 메일: ○○ 실험실 후드가 어제부터 바람이 약하고, 보호안경이 부족하다. 받는 사람에게 상황을 알리세요.', ['언제부터 무엇이 어떤지 썼다', '사실만 썼다', '인사와 소속(가상)을 밝혔다'], { min: 40, max: 300, sent: [2, 3], must: [['후드', '환기']], starter: '안녕하세요, ○○ 실험실 신입 연구원입니다. ~', plus: '내가 이미 한 조치(작업 중지)를 썼다', d: 0.35 }),
            RWQ('메일 가운데: 요청과 그 까닭을 2~3문장으로 쓰세요.', '무엇을 요청하는지, 왜 필요한지 쓰세요.', ['요청이 구체적이다(무엇을·언제까지)', '까닭을 안전과 이어 썼다', '공손한 표현이다'], { min: 40, max: 300, sent: [2, 3], must: [['요청', '부탁']], starter: '~을 요청드립니다. 왜냐하면 ~', plus: '물질 정보나 수칙을 근거로 들었다', d: 0.35 }),
            RWQ('답이 없을 때 보낼 다음 메일이나 할 일을 1~2문장으로 쓰세요.', '사흘이 지나도 답이 없어요. 다음 단계로 무엇을 할지 쓰세요.', ['다음에 연락할 곳이나 방법을 썼다', '그동안 위험한 작업은 하지 않는다고 썼다', '예의를 지켰다'], { min: 20, max: 200, sent: [1, 2], must: [['안전', '책임자', '다시']], starter: '지난 메일에 이어 다시 연락드립니다. ~', plus: '기록(메일 날짜)을 남긴다는 점을 썼다', d: 0.4, more: { conclude: '안전 요청은 상황·요청·까닭·예의를 갖춰 글로 남기고, 답이 없으면 다음 단계로 이어 가요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '메일 칸을 정리하세요.', columns: ['칸', '쓸 내용'], cells: [['상황', ''], ['요청', ''], ['까닭', ''], ['답이 없을 때', '']] }] },
      }),

      M({
        id: 'wrap.firstday-timeline', type: 'wrap', title: '첫 주 안전 적응 흐름',
        method: '첫 주 안전 적응 흐름', tool: 'timeline', minutes: 6,
        levels: { easy: '할 일 카드 3장을 차례로 놓는다.', base: '할 일 카드 5장을 차례로 놓는다.', challenge: '함정 카드(선배가 괜찮다면 수칙 건너뛰기)를 걸러 낸다.' },
        wrap: {
          teacher: '"첫날, 첫 실험 전, 첫 주 끝. 오늘 배운 것을 시간 순서로 정리해 봐요." 카드를 놓은 뒤 함정 카드를 왜 남겼는지 한 명에게 말하게 한다. \'첫 실험 뒤에 물질 정보 확인\'으로 놓은 학생에게 "물질 정보는 실험 전에 볼까요, 사고가 난 뒤에 볼까요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'timeline', options: { mode: 'order', axis: ['첫날', '첫 주 끝'], slots: 5, cards: ['보호구 지급 확인', '첫 실험 전 물질 정보 읽기', '설비 위치 확인', '비상 연락처 저장', '첫 주 끝에 궁금한 점 묻기', '선배가 괜찮다면 수칙 건너뛰기'] }, prompt: '첫 주 할 일을 차례로 놓고 함정 카드는 남기세요.', target: { order: ['설비 위치 확인', '비상 연락처 저장', '보호구 지급 확인', '첫 실험 전 물질 정보 읽기', '첫 주 끝에 궁금한 점 묻기'] }, difficulty: 0.25 },
            { type: 'choice', prompt: '"모르는 것을 물으면 무능해 보인다"에 대한 판단으로 알맞은 것은?', options: ['맞다, 혼자 알아내야 한다', '안전에 관한 질문은 일을 잘하려는 준비다', '선배에게만 물으면 된다'], answer: 1, difficulty: 0.15, explain: '모르고 다치는 것보다 묻고 안전한 것이 일을 잘하는 방법이에요.' },
            { type: 'short', prompt: '함정 카드를 남긴 까닭을 쓰세요.' },
          ],
        },
        worksheet: {
          title: '첫 주 안전 적응',
          items: [
            { type: 'table', prompt: '때마다 할 일을 쓰세요.', columns: ['때', '할 일'], cells: [['첫날', ''], ['첫 실험 전', ''], ['첫 주 끝', '']] },
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '위험하면 작업을 ___ 책임자에게 묻는다.', answer: '멈추고' },
          ],
        },
      }),
      M({
        id: 'wrap.career-check', type: 'wrap', title: '진로 분야 안전 점검',
        method: '진로 분야 실습 안전 스스로 점검', tool: 'timer', minutes: 6,
        levels: { easy: '준비 항목 3개를 스스로 표시한다.', base: '준비 항목 5개를 스스로 표시한다.', challenge: '내 진로 분야에 맞는 항목 하나를 더해 쓴다.' },
        wrap: {
          teacher: '"내가 생각하는 진로 분야(연구실·공장·주방·병원·공사 현장…)에서 필요할 안전 준비를 스스로 점검해 봐요." 표시한 뒤 진로 분야 항목 하나를 더하게 한다. "내 진로는 사무직이라 상관없다"는 학생에게 "사무실에도 전기·화재·대피로가 있지 않을까요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '진로 분야 안전 준비' }, prompt: '내 진로 분야의 안전 준비를 스스로 점검해 표시하세요.', target: { selfCheck: ['그 분야에서 쓰는 보호구를 알아보았다', '물질 정보나 설비 설명서를 읽는 법을 안다', '위험하면 멈추고 묻겠다고 다짐했다', '첫날 확인할 목록을 만들었다', '안전 요청을 글로 남기는 법을 안다'] }, difficulty: 0.1 },
            { type: 'choice', prompt: '"선배가 괜찮다고 하면 수칙을 건너뛰어도 된다"에 대한 판단은?', options: ['맞다', '수칙은 위험을 근거로 정해져 있어 지킨다', '바쁠 때만 맞다'], answer: 1, difficulty: 0.1, explain: '수칙은 사람의 말이 아니라 위험을 근거로 정해져요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '진로 분야 안전 준비',
          items: [
            { type: 'check', prompt: '준비한 것에 표시하세요.', options: ['보호구 알아보기', '물질 정보 읽는 법', '멈출 용기', '첫날 확인 목록', '안전 요청 글쓰기'] },
            { type: 'short', prompt: '내 진로 분야에 맞는 안전 준비 항목 하나를 더 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 14. 수상 레저·여행 준비와 상해 대처 (12학년)
  // ======================================================================================================
  {
    const M = MOD('water-leisure', [12]);
    const BEACH = { title: '가상 해수욕장', grid: [6, 4], places: [{ name: '안전요원 망루', icon: 'lighthouse', at: [2, 1] }, { name: '응급의료소', icon: 'hospital', at: [5, 0] }, { name: '샤워장', icon: 'dot', at: [0, 0] }, { name: '매점', icon: 'market', at: [4, 0] }], regions: [{ name: '수영 구역', cells: [[1, 2], [2, 2], [3, 2]] }, { name: '수영 금지 구역', cells: [[4, 2], [5, 2], [4, 3], [5, 3]] }], sea: [[0, 3], [1, 3], [2, 3], [3, 3], [4, 3], [5, 3]] };
    const DRIFT = { text: '졸업 여행 바닷가. 친구 지호의 튜브가 수영 구역 밖으로 떠밀려 간다. 지호가 손을 흔들며 소리친다.', who: '지호', motif: 'cloud', choices: [
      { id: 'swim', text: '바로 헤엄쳐 데리러 간다', result: '물살이 세서 나도 바깥쪽으로 밀린다.', impact: [{ who: '나', text: '구조하려다 나도 위험해진다', tone: -1 }],
        next: { text: '둘 다 튜브에 매달려 지쳐 간다.', choices: [
          { id: 'float', text: '튜브를 붙잡고 힘을 아끼며 손을 흔든다', result: '안전요원이 보트로 둘을 데려온다.', impact: [{ who: '두 사람', text: '구조되지만 큰 위험을 겪었다', tone: 0 }], ending: '구조자가 위험해지면 구조할 사람이 둘로 늘어난다.' },
          { id: 'fight', text: '물살을 거슬러 억지로 헤엄친다', result: '금방 힘이 빠진다.', impact: [{ who: '나', text: '더 위험해진다', tone: -1 }], ending: '물살과 싸우면 힘만 빠진다.' }] } },
      { id: 'guard', text: '"도와주세요!" 외치며 안전요원을 부른다', result: '안전요원이 호루라기를 불며 달려온다.', impact: [{ who: '지호', text: '전문 구조를 받는다', tone: 1 }],
        next: { text: '안전요원이 오는 동안 지호가 점점 멀어진다.', choices: [
          { id: 'throw', text: '물가에서 구명환이나 페트병을 던져 준다', result: '지호가 구명환을 붙잡고 버틴다.', impact: [{ who: '지호', text: '구조될 때까지 버틴다', tone: 1 }],
            next: { text: '구조된 지호가 떨며 "괜찮아, 놀던 거 마저 하자"고 한다.', choices: [
              { id: 'rest', text: '오늘 물놀이는 멈추고 쉬게 한 뒤 응급의료소에 들르자고 한다', result: '지호가 몸을 녹이고 상태를 확인받는다.', impact: [{ who: '지호', text: '몸을 돌본다', tone: 1 }], ending: '구조 뒤에도 몸을 확인하고 쉬는 것까지가 대처다.' },
              { id: 'again', text: '괜찮다니 다시 놀러 들어간다', result: '지친 몸으로 다시 물에 들어간다.', impact: [{ who: '지호', text: '또 위험해질 수 있다', tone: -1 }], ending: '괜찮다는 말보다 몸의 상태를 먼저 본다.' }] } },
          { id: 'watch', text: '그냥 지켜보며 기다린다', result: '지호가 튜브를 놓칠 뻔한다.', impact: [{ who: '지호', text: '버티기 어려워진다', tone: -1 }], ending: '물에 들어가지 않고도 도울 수 있는 일이 있다.' }] } },
      { id: 'phone', text: '휴대전화로 영상을 찍어 단톡방에 올린다', result: '아무도 구조를 시작하지 않는다.', impact: [{ who: '지호', text: '도움이 늦어진다', tone: -1 }], ending: '기록보다 도움 요청이 먼저다.' }] };
    const DRIFT_R = [{ id: 'rescuer', text: '구조하는 사람도 안전해야 한다' }, { id: 'reach', text: '물에 들어가지 말고 외치고, 던지고, 안전요원을 부른다' }, { id: 'swimmer', text: '수영을 잘하면 직접 들어가도 된다', why: '물살이 센 곳에서는 수영 실력과 상관없이 위험해요.' }, { id: 'film', text: '증거를 남기려면 먼저 찍어야 한다', why: '사람이 떠밀려 갈 때는 도움 요청이 먼저예요.' }];

    MODS.push(
      M({
        id: 'intro.trip-mindmap', type: 'intro', title: '졸업 여행 위험 예측',
        method: '졸업 여행 위험 예측', tool: 'mindmap', minutes: 6,
        levels: { easy: '두 가지(활동·날씨)에 위험을 단다.', base: '네 가지(이동·숙소·활동·날씨)에 위험과 확인할 것을 단다.', challenge: '가장 큰 위험을 고르고 그 까닭을 말한다.' },
        intro: {
          teacher: '"졸업 여행을 간다면 어디로, 무엇을 하고 싶나요? 그 계획 속에 숨은 위험도 함께 찾아봐요." 시연 단추로 위험 카드가 이동·숙소·활동·날씨 가지에 붙는 모습을 보여 준다. "업체가 알아서 다 챙겨 준다"는 말이 나오면 "업체가 챙겨 준 구명조끼가 나에게 맞는지는 누가 확인할까요?"라고 되묻는다. 오늘은 수상 레저와 여행의 준비 순서와 상해 대처를 다룬다고 밝힌다.',
          student: '졸업 여행 계획을 떠올리며, 이동·숙소·활동·날씨에서 생길 위험을 하나씩 예측해 보세요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '졸업 여행', slots: ['이동', '숙소', '활동', '날씨'], cards: [{ id: 'drive', text: '밤늦은 이동' }, { id: 'room', text: '비상구 모르는 숙소' }, { id: 'water', text: '처음 타는 수상 레저' }, { id: 'storm', text: '갑자기 바뀌는 바다 날씨' }], shuffle: false }, sequence: [{ sort: { 이동: ['drive'], 숙소: ['room'], 활동: ['water'], 날씨: ['storm'] } }] },
          art: { draw: 'a paper map of a seaside town with a bus, a small hotel, a banana boat and a cloud with wind lines, a group of paper graduates planning with a checklist', banner: '졸업 여행, 무엇을 확인할까?', extra: [{ motif: 'sun', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      M({
        id: 'intro.vest-body', type: 'intro', title: '구명조끼 바른 착용 부위',
        method: '구명조끼 바른 착용 부위', tool: 'body', minutes: 6,
        levels: { easy: '끈과 버클을 확인할 곳 두 곳(가슴·배)을 함께 고른다.', base: '확인할 곳 세 곳(가슴·배·어깨)을 고르고 헐거우면 생길 일을 말한다.', challenge: '어린이와 어른의 구명조끼 크기가 왜 달라야 하는지 짚는다.' },
        intro: {
          teacher: '"구명조끼를 입었다고 끝일까요? 어디를 확인해야 바르게 입은 걸까요?" 시연 단추로 종이 몸에서 가슴·배·어깨가 골라지는 모습을 보여 준다. "수영을 잘하면 구명조끼가 필요 없다"는 말이 나오면 "물이 차갑고 물살이 셀 때도 그럴까요? 지쳤을 때는요?"라고 되묻는다. 헐거운 조끼는 물에서 위로 벗겨져 얼굴을 덮을 수 있다는 점을 짚는다.',
          student: '종이 몸에서 구명조끼 끈과 버클을 확인할 곳을 고르고, 헐거우면 어떤 일이 생길지 말해 보세요.',
          demo: { tool: 'body', options: { mode: 'parts', parts: ['가슴', '배', '어깨', '목', '허리', '무릎'], names: true }, sequence: [{ parts: ['가슴', '배', '어깨'] }] },
          art: { draw: 'a paper figure wearing a bright orange paper life jacket with buckles on the chest and belly, a hand pulling a shoulder strap to test the fit, gentle paper waves below', banner: '끈과 버클을 확인해요', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
      }),

      M({
        id: 'activity.prep-order', type: 'activity', title: '수상 레저 전 준비 순서',
        method: '수상 레저 떠나기 전 준비 순서', tool: 'timeline', minutes: 19,
        levels: { easy: '준비 카드 3장을 차례로 놓는다.', base: '준비 카드를 차례로 놓고 함정 카드(전날 밤샘 파티)를 남긴다.', challenge: '날씨가 바뀌면 다시 돌아갈 단계를 고른다.' },
        activity: {
          title: '떠나기 전 준비 차례', tool: 'timeline',
          teacher: '"수상 레저를 예약했어요. 떠나기 전 무엇부터 할까요?" 카드를 놓기 전에 첫 행동을 말하게 한다. \'전날 밤샘 파티\'를 넣는 학생에게 "피곤한 몸으로 물에 들어가면 위험 신호를 알아챌 수 있을까요?"라고 묻는다. 음주나 피로 상태로는 수상 활동을 하지 않는다는 점, 날씨가 바뀌면 처음 단계로 돌아가 다시 판단한다는 점을 짚는다.',
          task: '준비 카드를 차례로 놓고 함정 카드는 남겨요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDERQ('수상 레저를 떠나기 전 준비 카드를 차례로 놓으세요.', ['날씨·물때를 확인한다', '업체 정보(등록·안전 설명)를 확인한다', '보호자에게 일정과 장소를 알린다', '전날 충분히 잔다', '현장에서 장비를 점검한다', '안전 설명을 끝까지 듣는다'], { k: 3, traps: ['전날 밤샘 파티를 한다'], d: 0.35 }),
            ORDERQ('물에 들어가기 직전 할 일을 차례로 놓으세요.', ['내 몸에 맞는 구명조끼를 고른다', '버클과 끈을 조인다', '안전요원 위치를 확인한다', '함께 다닐 짝을 정한다'], { k: 3, traps: ['수영을 잘하니 조끼를 벗는다'], d: 0.3 }),
            PICKQ('출발 당일 바람이 갑자기 세졌어요. 다시 돌아가 할 단계만 고르세요.', ['날씨·물때를 다시 확인한다', '업체와 활동 여부를 다시 정한다'], ['숙소 예약을 취소한다', '기념품을 먼저 산다'], { d: 0.35, opt: { mode: 'pick', basket: '다시 할 단계' }, more: { conclude: '준비는 날씨 → 업체 → 알리기 → 몸 상태 → 장비 → 안전 설명 순서이고, 날씨가 바뀌면 처음으로 돌아가 다시 판단해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '\'전날 밤샘 파티\'가 수상 레저 준비에서 함정 카드인 까닭을 쓰세요.' }] },
      }),
      M({
        id: 'activity.trip-budget', type: 'activity', title: '여행 예산과 안전 항목',
        method: '여행 예산과 안전 항목', tool: 'economy', minutes: 19,
        levels: { easy: '항목 5개 가운데 예산 안에서 안전 항목을 넣어 고르고, 고른 값의 합계가 보인다.', base: '항목 10개 가운데 조건(안전 설명 있는 업체·여행자 보험)을 지켜 고른다.', challenge: '숫자 합계 없이 막대만 보고, 싼 업체와 견주어 고른다.' },
        activity: {
          title: '졸업 여행 예산 짜기', tool: 'economy',
          teacher: '"졸업 여행 예산 안에서 숙소·이동·활동을 골라 봐요. 조건은 안전 설명이 있는 업체와 여행자 보험 같은 안전 항목을 넣는 것." 예산 막대를 보며 고르게 한 뒤 근거를 짝에게 말하게 한다. 가장 싼 무등록 업체를 고른 학생에게 "그 업체에서 사고가 나면 누가 책임지고, 안전 설명은 누가 해 줄까요?"라고 묻는다. 안전 항목은 예산을 줄일 때 마지막까지 남긴다는 점을 짚는다.',
          task: '여행 예산 막대를 넘지 않게, 안전 조건을 지켜 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            { prompt: '1인 예산 200,000원. 숙소와 안전 설명이 있는 수상 레저 업체를 넣고, 무등록 업체는 빼고 고르세요.', toolOptions: { mode: 'budget', budget: 200000, items: [{ id: 'stay', text: '숙소 1박', price: 70000 }, { id: 'safe', text: '수상 레저(등록·안전 설명 있음)', price: 50000 }, { id: 'cheap', text: '수상 레저(무등록, 설명 없음)', price: 25000 }, { id: 'bus', text: '왕복 버스', price: 40000 }, { id: 'party', text: '밤 파티 대여', price: 60000 }] }, target: { budget: { must: ['stay', 'safe'], not: ['cheap'] } }, difficulty: 0.25 },
            { prompt: '1인 예산 250,000원. 숙소·왕복 버스·안전 설명 있는 업체·여행자 보험은 꼭 넣고, 무등록 업체는 빼고 고르세요.', toolOptions: { mode: 'budget', budget: 250000, items: [{ id: 'stay', text: '숙소 1박', price: 70000 }, { id: 'safe', text: '수상 레저(등록·안전 설명 있음)', price: 50000 }, { id: 'cheap', text: '수상 레저(무등록, 설명 없음)', price: 25000 }, { id: 'bus', text: '왕복 버스', price: 40000 }, { id: 'ins', text: '여행자 보험', price: 8000 }, { id: 'meal', text: '식사 4끼', price: 48000 }, { id: 'party', text: '밤 파티 대여', price: 60000 }, { id: 'photo', text: '스냅 사진 촬영', price: 30000 }, { id: 'gift', text: '기념품', price: 20000 }, { id: 'pack', text: '방수 팩·여벌 옷', price: 12000 }] }, target: { budget: { must: ['stay', 'bus', 'safe', 'ins'], not: ['cheap'] } }, difficulty: 0.35 },
            { prompt: '예산이 180,000원으로 줄었어요. 숙소·버스·안전 설명 있는 업체·보험은 지키고, 무등록 업체와 밤 파티는 빼고 고르세요.', toolOptions: { mode: 'budget', budget: 180000, items: [{ id: 'stay', text: '숙소 1박', price: 70000 }, { id: 'safe', text: '수상 레저(등록·안전 설명 있음)', price: 50000 }, { id: 'cheap', text: '수상 레저(무등록, 설명 없음)', price: 25000 }, { id: 'bus', text: '왕복 버스', price: 40000 }, { id: 'ins', text: '여행자 보험', price: 8000 }, { id: 'party', text: '밤 파티 대여', price: 60000 }, { id: 'gift', text: '기념품', price: 20000 }] }, target: { budget: { must: ['stay', 'bus', 'safe', 'ins'], not: ['cheap', 'party'] } }, difficulty: 0.4, conclude: '예산이 줄면 즐길 거리부터 줄이고, 안전 설명 있는 업체와 보험 같은 안전 항목은 지켜요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '싼 무등록 업체 대신 안전 설명이 있는 업체를 고른 근거를 쓰세요.' }] },
        notes: '가격은 수업용 가상 값이다. \'등록 업체\' 확인 방법은 지역·종목마다 다르므로 실제 여행 전에는 보호자와 함께 확인하게 한다.',
      }),
      M({
        id: 'activity.drift-dilemma', type: 'activity', title: '튜브가 떠밀려 갈 때',
        method: '튜브가 떠밀려 갈 때 갈림길', tool: 'dilemma', minutes: 19,
        levels: { easy: '갈림길 하나에서 고르고 근거를 고른다.', base: '갈림길 둘을 지나 결과를 보고 근거를 고른다.', challenge: '갈림길 셋까지 가서 구조 뒤 대처까지 고르고, 구조자도 안전해야 하는 근거를 견준다.' },
        activity: {
          title: '떠밀려 가는 친구 튜브', tool: 'dilemma',
          teacher: '"친구 튜브가 바깥으로 떠밀려 가요. 친구를 구하고 싶은 마음, 당연해요. 그런데 내가 헤엄쳐 가면?" 선택마다 친구와 나에게 생기는 결과를 읽게 한다. \'바로 헤엄쳐 간다\'를 고른 학생에게 "물살에 나도 밀리면 구조할 사람이 몇 명으로 늘어나나요?"라고 묻는다. 물에 들어가지 않고 외치고·던지고·안전요원을 부르는 것이 구조자도 지키는 방법이라는 점을 짚는다.',
          task: '튜브 갈림길을 따라 결과를 보고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('친구 튜브가 떠밀려 갈 때 친구와 나 모두 안전한 길을 고르고 근거를 고르세요.', DRIFT, [['guard', 'throw', 'rest']], DRIFT_R, ['rescuer', 'reach'], { d: 0.4 }),
            EXPLOREQ('\'헤엄쳐 간다\'·\'영상을 찍는다\' 길도 끝까지 가 보고 결과를 견주세요.', DRIFT, DRIFT_R, ['다른 길의 끝 장면을 확인했다', '구조자와 친구가 받은 영향을 견주었다'], { d: 0.35 }),
            DILQ('친구가 술을 마신 뒤 밤바다에 들어가자고 할 때 알맞은 길을 고르고 근거를 고르세요.', { text: '졸업 여행 밤, 성인이 된 친구 몇이 술을 마신 뒤 "밤바다 들어가자!"고 한다.', who: '친구들', motif: 'moon', choices: [
              { id: 'join', text: '분위기상 함께 들어간다', result: '어두워서 서로가 어디 있는지 보이지 않는다.', impact: [{ who: '모두', text: '물에서 길을 잃을 위험에 놓인다', tone: -1 }], ending: '음주·밤·물이 겹치면 위험이 크게 늘어난다.' },
              { id: 'stop', text: '"밤에, 마신 뒤엔 물에 안 들어가기로 했잖아"라고 말린다', result: '몇 명은 멈추지만 한 친구가 혼자라도 가겠다고 한다.', impact: [{ who: '친구들', text: '대부분 멈춘다', tone: 1 }],
                next: { text: '한 친구가 바다 쪽으로 걸어간다.', choices: [
                  { id: 'hold', text: '함께 붙잡아 숙소로 데려오고 숙소 관리자에게 알린다', result: '친구가 숙소에서 잠든다.', impact: [{ who: '친구', text: '안전하게 밤을 넘긴다', tone: 1 }], ending: '말리는 것에서 끝나지 않고 함께 데려와야 지킬 수 있다.' },
                  { id: 'letgo', text: '말렸으니 할 만큼 했다며 둔다', result: '친구가 혼자 물가에 남는다.', impact: [{ who: '친구', text: '혼자 위험에 남는다', tone: -1 }], ending: '말리고 두면 위험은 그대로 남는다.' }] } }] },
              [['stop', 'hold']], [{ id: 'drink', text: '음주·피로 상태로는 수상 활동을 하지 않는다' }, { id: 'together', text: '위험한 친구는 혼자 두지 않고 함께 데려온다' }, { id: 'adult', text: '성인이면 각자 알아서 하면 된다', why: '성인이어도 위험한 친구를 혼자 두지 않아요.' }], ['drink', 'together'], { d: 0.35, more: { conclude: '물에서는 구조자도 안전해야 하고, 음주·피로·밤에는 물에 들어가지 않아요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '물에 들어가지 않고 떠밀려 가는 친구를 도울 수 있는 방법 세 가지를 쓰세요.' }] },
      }),
      M({
        id: 'activity.injury-map', type: 'activity', title: '해변 지도에서 도움 지점',
        method: '해변 지도에서 도움 지점 찾기', tool: 'map', minutes: 19,
        levels: { easy: '핀을 놓으면 그 칸의 장소 이름이 바로 보인다.', base: '장소·구역 이름을 보고 상황마다 핀을 꽂는다.', challenge: '지도에 이름 없이 기호만 보고 꽂고, 활동지에 119를 부를지 판단 기준을 쓴다.' },
        activity: {
          title: '해변에서 도움 지점 찾기', tool: 'map',
          teacher: '"가상 해수욕장 지도예요. 친구가 바위에 발을 크게 베였다면 어디로 먼저 갈까요?" 상황마다 핀을 꽂기 전에 "지금 필요한 것은 사람인가요, 치료인가요, 피할 곳인가요?"라고 묻는다. "여행 중 다친 건 참고 돌아가서 치료한다"는 학생에게 "피가 멈추지 않는 상처를 몇 시간 버스에서 참을 수 있을까요?"라고 묻는다. 다치면 활동을 멈추고 안전요원·119에 알린다는 점을 짚는다.',
          task: '상황마다 해변 지도에 알맞은 곳을 찾아 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: { names: false, regionNames: false } },
          items: [
            { prompt: '친구가 바위에 발을 크게 베였어요. 가장 먼저 도움을 청할 곳에 핀을 꽂으세요.', toolOptions: BEACH, target: { place: '안전요원 망루' }, difficulty: 0.2 },
            { prompt: '안전요원이 상처를 감싸 준 뒤 치료를 받으러 갈 곳에 핀을 꽂으세요.', toolOptions: BEACH, target: { place: '응급의료소' }, difficulty: 0.25 },
            { prompt: '물살이 세서 들어가면 안 되는 곳에 핀을 꽂으세요.', toolOptions: BEACH, target: { region: '수영 금지 구역' }, difficulty: 0.3, conclude: '다치면 활동을 멈추고 안전요원에게 먼저 알리고, 치료는 응급의료소·119로, 금지 구역에는 들어가지 않아요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '해변에서 다쳤을 때 119를 부를지 판단하는 기준 두 가지를 쓰세요.' }] },
        notes: '지도는 가상 해수욕장이다. 실제 여행지에서는 안전요원 위치와 응급 시설을 먼저 확인하게 한다.',
      }),

      M({
        id: 'wrap.leisure-sort', type: 'wrap', title: '여가 활동 안전 행동 가르기',
        method: '여가 활동 안전 행동 가르기', tool: 'mindmap', minutes: 6,
        levels: { easy: '장면 카드 4장을 안전한 선택·위험한 선택으로 나눈다.', base: '장면 카드 6장을 나누고 위험 카드의 대안을 고른다.', challenge: '위험 카드의 대안을 직접 쓴다.' },
        wrap: {
          teacher: '"오늘 본 여가 활동 장면을 안전한 선택과 위험한 선택으로 나눠 봐요." 나눈 뒤 위험 카드 하나의 대안을 고르게 한다. \'수영 잘하니 조끼 없이\'를 안전한 선택에 둔 학생에게 "지치거나 물이 차가울 때도 그 실력이 그대로일까요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '여가 활동 장면', slots: ['안전한 선택', '위험한 선택'], cards: ['구명조끼 버클을 조인다', '안전 설명을 끝까지 듣는다', '보호자에게 일정을 알린다', '수영 잘하니 조끼 없이 탄다', '밤샘 뒤 바로 물에 들어간다', '다쳐도 참고 계속 논다'] }, prompt: '여가 활동 장면을 두 칸에 나누세요.', target: { sort: { '안전한 선택': ['구명조끼 버클을 조인다', '안전 설명을 끝까지 듣는다', '보호자에게 일정을 알린다'], '위험한 선택': ['수영 잘하니 조끼 없이 탄다', '밤샘 뒤 바로 물에 들어간다', '다쳐도 참고 계속 논다'] } }, difficulty: 0.2 },
            { type: 'choice', prompt: '\'다쳐도 참고 계속 논다\'의 대안으로 알맞은 것은?', options: ['돌아가서 치료한다', '활동을 멈추고 안전요원에게 알린다', '친구에게만 말한다'], answer: 1, difficulty: 0.15, explain: '다치면 바로 멈추고 안전요원·119에 알려요.' },
            { type: 'short', prompt: '위험한 선택 하나를 골라 대안을 쓰세요.' },
          ],
        },
        worksheet: {
          title: '여가 활동 안전 행동',
          items: [
            { type: 'table', prompt: '위험한 선택마다 대안을 쓰세요.', columns: ['위험한 선택', '대안'], cells: [['조끼 없이 타기', ''], ['밤샘 뒤 물놀이', '']] },
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '물에 빠진 친구는 직접 들어가지 말고 외치고, ___ 주고, 안전요원을 부른다.', answer: '던져' },
          ],
        },
      }),
      M({
        id: 'wrap.trip-reflection', type: 'wrap', title: '졸업 여행 안전 약속 글',
        method: '졸업 여행 안전 약속 글', tool: 'rubric-writing', minutes: 6,
        levels: { easy: '문장 틀("우리는 ~ 때 ~하기로 한다")을 보고 쓴다.', base: '안전 약속 네 가지를 쓰고 기준표로 점검한다.', challenge: '약속을 어긴 친구에게 할 말을 활동지에 덧붙인다.' },
        wrap: {
          teacher: '"졸업 여행에서 친구들과 정할 안전 약속 네 가지를 써 봐요. 구체적이고, 모두 동의할 수 있고, 비상 연락이 들어가야 해요." 기준표를 함께 읽는다. "조심하자"처럼만 쓴 학생에게 "무엇을 하면 조심한 건지 친구들이 알 수 있을까요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'rubric-writing', options: { topic: '졸업 여행에서 친구들과 정할 안전 약속 네 가지를 쓰세요.', minChars: 60, maxChars: 400, starter: '우리는 ~ 때 ~하기로 한다.', sample: '우리는 물에 들어갈 때 구명조끼 버클을 서로 확인한다. 밤이나 술을 마신 뒤에는 물에 들어가지 않는다. 다치면 바로 멈추고 안전요원에게 알린다. 일정과 숙소를 각자 보호자에게 알리고 비상 연락처를 서로 저장한다.' }, prompt: '안전 약속을 쓰고 기준표로 점검하세요.', target: { selfCheck: ['약속마다 무엇을 할지 구체적이다', '친구들 모두 동의할 수 있다', '비상 연락 약속이 들어 있다'], sentences: [4, 6] }, difficulty: 0.3 },
            { type: 'choice', prompt: '"업체가 알아서 다 챙겨 준다"에 대한 판단으로 알맞은 것은?', options: ['맞다', '업체 안전 설명과 장비를 내가 함께 확인한다', '보험만 들면 된다'], answer: 1, difficulty: 0.15, explain: '내 몸에 맞는지, 설명을 들었는지는 내가 함께 확인해요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '졸업 여행 안전 약속',
          items: [
            { type: 'short', prompt: '친구들과 정할 안전 약속 네 가지를 쓰세요.' },
            { type: 'short', prompt: '약속을 어긴 친구에게 비난하지 않고 할 말을 쓰세요.' },
          ],
          easy: { note: '"우리는 ~ 때 ~하기로 한다."', items: [{ type: 'short', prompt: '틀에 맞춰 약속 두 가지를 쓰세요.' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 15. 혼자 사는 생활의 귀갓길·현관 안전과 실종 예방 (12학년)
  // ======================================================================================================
  {
    const M = MOD('living-alone-security', [12]);
    const TOWN = { title: '가상 동네', grid: [6, 4], places: [{ name: '아르바이트 가게', icon: 'market', at: [0, 0] }, { name: '집', icon: 'house', at: [5, 3] }, { name: '지구대', icon: 'police', at: [3, 1] }, { name: '편의점', icon: 'market', at: [5, 1] }, { name: '공원', icon: 'park', at: [1, 3] }], roads: [[[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [5, 1], [5, 2], [5, 3]], [[0, 0], [0, 1], [0, 2], [1, 2], [2, 2], [2, 3], [3, 3], [4, 3], [5, 3]]] };
    const DOOR = { text: '혼자 사는 원룸, 밤 12시. 누군가 현관 문고리를 계속 돌린다. 초인종은 누르지 않는다.', who: '혼자 사는 나', motif: 'moon', choices: [
      { id: 'open', text: '누군지 문을 열어 확인한다', result: '낯선 사람이 문틈에 발을 넣는다.', impact: [{ who: '나', text: '직접 위험에 맞닥뜨린다', tone: -1 }], ending: '확인하려고 연 문이 위험을 들인다.' },
      { id: 'shout', text: '"누구세요!" 크게 소리친다', result: '문고리가 잠시 멈췄다가 다시 돌아간다.', impact: [{ who: '나', text: '내가 혼자라는 것을 알린다', tone: -1 }],
        next: { text: '소리가 멈추지 않는다.', choices: [
          { id: 'call', text: '이제라도 문을 잠그고 112에 신고한다', result: '경찰이 와서 주변을 확인한다.', impact: [{ who: '나', text: '도움을 받는다', tone: 1 }], ending: '소리치기보다 잠그고 신고하는 것이 먼저다.' },
          { id: 'wait', text: '가만히 기다린다', result: '불안한 밤이 이어진다.', impact: [{ who: '나', text: '위험이 그대로 남는다', tone: -1 }], ending: '혼자 견디지 말고 알려야 한다.' }] } },
      { id: 'lock', text: '문이 잠겼는지 확인하고 112에 문자로 신고한다', result: '말하지 않고도 주소와 상황을 보낸다.', impact: [{ who: '나', text: '들키지 않고 도움을 청한다', tone: 1 }],
        next: { text: '경찰이 "지금 상황을 더 알려 줄 수 있나요?"라고 문자로 묻는다.', choices: [
          { id: 'info', text: '주소·문고리를 돌린 시각·지금도 계속되는지를 보낸다', result: '경찰이 빠르게 도착한다.', impact: [{ who: '나', text: '정확한 정보로 빨리 도움을 받는다', tone: 1 }],
            next: { text: '경찰이 다녀간 뒤, 다시 혼자 남았다.', choices: [
              { id: 'share', text: '믿을 사람에게 일을 알리고, 관리인에게 출입 기록 확인을 요청한다', result: '다음 날 공동 현관 잠금이 강화된다.', impact: [{ who: '건물 주민', text: '함께 안전해진다', tone: 1 }], ending: '위협은 혼자 견디지 않고 기록하고 알려 다음 위험까지 막는다.' },
              { id: 'alone', text: '창피해서 아무에게도 말하지 않는다', result: '같은 일이 생겨도 아는 사람이 없다.', impact: [{ who: '나', text: '혼자 불안을 떠안는다', tone: -1 }], ending: '알리지 않으면 도움도 이어지지 않는다.' }] } },
          { id: 'vague', text: '"무서워요"라고만 보낸다', result: '경찰이 위치를 다시 묻느라 시간이 걸린다.', impact: [{ who: '나', text: '도움이 늦어진다', tone: 0 }], ending: '신고에는 주소와 상황이 들어가야 빨리 닿는다.' }] } }] };
    const DOOR_R = [{ id: 'record', text: '위협은 혼자 해결하지 않고 기록해 112에 알린다' }, { id: 'nopen', text: '낯선 방문에는 문을 열지 않는다' }, { id: 'check', text: '누가 문고리를 돌리면 직접 확인해야 한다', why: '직접 확인하려다 위험을 들일 수 있어요.' }, { id: 'adult', text: '성인이 되면 실종은 남의 일이다', why: '혼자 사는 성인도 일정 공유와 신고 습관이 필요해요.' }];

    MODS.push(
      M({
        id: 'intro.habit-sort', type: 'intro', title: '현관 습관 장면 가르기',
        method: '현관 습관 장면 가르기', tool: 'mindmap', minutes: 6,
        levels: { easy: '장면 카드 4장을 안전·위험으로 나눈다.', base: '장면 카드 6장을 안전·위험으로 나눈다.', challenge: '위험 카드를 고칠 습관을 말한다.' },
        intro: {
          teacher: '"졸업 뒤 혼자 사는 집 현관이에요. 비밀번호를 누를 때, 택배가 왔을 때, 누가 초인종을 누를 때 나는 어떻게 할까요?" 시연 단추로 장면 카드가 안전·위험으로 나뉘는 모습을 보여 준다. "택배 상자에 이름·주소가 보여도 상관없다"는 말이 나오면 "그 상자를 버린 쓰레기봉투를 누가 볼 수 있을까요?"라고 되묻는다. 오늘은 혼자 사는 생활의 현관·귀갓길 습관과 위협 대응을 다룬다고 밝힌다.',
          student: '혼자 사는 집의 현관 습관 장면을 보고, 안전한 습관과 위험한 습관을 나누어 보세요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '현관 습관', slots: ['안전', '위험'], cards: [{ id: 'cover', text: '비밀번호 누를 때 손으로 가리기' }, { id: 'box', text: '택배 상자 이름 지우고 버리기' }, { id: 'peep', text: '낯선 방문은 문 열지 않고 용건 묻기' }, { id: 'open', text: '초인종 소리에 바로 문 열기' }, { id: 'leave', text: '택배를 밤새 문 앞에 두기' }, { id: 'shout', text: '모르는 번호 전화에 집 주소 알려 주기' }], shuffle: false }, sequence: [{ sort: { 안전: ['cover', 'box', 'peep'], 위험: ['open', 'leave', 'shout'] } }] },
          art: { draw: 'a paper apartment door with a keypad, a hand shielding the code, a parcel box with a crossed-out label, a peephole glowing softly in the dark hallway', banner: '현관 앞 작은 습관', extra: [{ motif: 'house', x: 300, y: 222 }] },
        },
      }),
      M({
        id: 'intro.route-map', type: 'intro', title: '늦은 귀갓길 길 고르기',
        method: '늦은 귀갓길 경로 고르기', tool: 'map', minutes: 6,
        levels: { easy: '두 길 가운데 하나를 고른다.', base: '두 길 가운데 고르고 그 까닭을 말한다.', challenge: '가는 길에 도움받을 곳(지구대·편의점)까지 짚는다.' },
        intro: {
          teacher: '"밤 11시, 아르바이트를 마치고 집에 가요. 윗길은 큰길이라 밝고 가게가 많고, 아랫길은 공원을 지나는 지름길 골목이에요. 어느 길로 갈까요?" 시연 단추로 큰길을 고르는 모습을 보여 준다. "지름길이 빨리 가니 더 안전하다"는 말이 나오면 "빨리 가는 길과 도움을 받을 수 있는 길 중, 밤에는 무엇이 더 중요할까요?"라고 되묻는다.',
          student: '가상 동네 지도에서 밤에 집으로 가는 두 길을 견주고, 더 안전한 길을 골라 보세요.',
          demo: { tool: 'map', options: Object.assign({}, TOWN, { readOnly: true, ask: { q: '밤 11시에 고를 길은?', choices: ['공원을 지나는 지름길 골목', '지구대·편의점이 있는 밝은 큰길'] } }), sequence: [{ pick: 1 }] },
          art: { draw: 'a paper night town map with two paths home, a bright main street with lit shops and a police box, and a dark shortcut alley through a park, a paper figure with a backpack at the fork', banner: '밤에는 어느 길로?', extra: [{ motif: 'moon', x: 300, y: 96 }] },
        },
      }),

      M({
        id: 'activity.share-plan', type: 'activity', title: '일정 공유 약속',
        method: '일정 공유 계획 짜기', tool: 'kitchen', minutes: 19,
        levels: { easy: '일정 공유 카드 3장을 나·믿을 사람 칸에 배치한다.', base: '카드 5장을 배치하고, 공유하지 않아도 될 정보를 가리며, 약속 점검표를 표시한다.', challenge: '카드를 섞어 풀고, 활동지에 연락이 끊겼을 때 믿을 사람이 할 일을 적는다.' },
        activity: {
          title: '일정 공유 약속', tool: 'kitchen',
          teacher: '"혼자 살면 내가 어디 있는지 아는 사람이 없을 수 있어요. 믿을 사람과 어떤 약속을 하면 좋을까요?" 카드를 나와 믿을 사람 칸에 놓게 한다. "성인이 되면 실종은 남의 일"이라는 학생에게 "혼자 사는 사람이 연락이 끊기면, 누가 가장 먼저 알아챌 수 있을까요?"라고 묻는다. 공유는 감시가 아니라 약속이고, 비밀번호처럼 나누지 않을 정보도 있다는 점을 짚는다.',
          task: '일정 공유 카드를 나와 믿을 사람 칸에 놓아 약속을 만들어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('일정 공유 카드를 나와 믿을 사람 칸에 배치하세요.', ['나', '믿을 사람'], [
              ['출발할 때 알린다', '도착하면 알린다', '늦어지면 미리 알린다'], ['약속 시각에 연락이 없으면 먼저 연락한다', '계속 연락이 안 되면 112에 신고한다'],
            ], { k: 2, d: 0.3, opt: { groups: false, autoMotif: false } }),
            PICKQ('믿을 사람과도 공유하지 않아도 될 정보만 고르세요.', ['통장 비밀번호', 'SNS 비밀번호'], ['출발 시각', '도착 예정 시각'], { d: 0.3, opt: { basket: '공유하지 않을 정보', autoMotif: false } }),
            CHECKQ('일정 공유 약속에 넣을 항목만 표시하세요.', '일정 공유 약속', [
              ['late', '늦게 귀가하는 날은 출발·도착을 알린다', true], ['who', '연락할 믿을 사람을 한두 명 정한다', true], ['time', '연락이 없으면 몇 분 뒤 연락할지 정한다', true],
              ['pw', '현관 비밀번호를 단톡방에 올린다', false], ['all', '모든 위치를 하루 종일 공유한다', false], ['call', '연락이 끊기면 112 신고 순서를 정한다', true],
            ], { k: 4, d: 0.3, more: { conclude: '일정 공유는 감시가 아니라 서로 지키는 약속이에요. 필요한 정보만, 정한 사람과 나눠요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '연락이 끊겼을 때 믿을 사람이 할 일을 차례대로 쓰세요.' }] },
      }),
      M({
        id: 'activity.door-dilemma', type: 'activity', title: '문고리 갈림길',
        method: '밤에 문고리가 돌아갈 때 갈림길', tool: 'dilemma', minutes: 19,
        levels: { easy: '갈림길 하나에서 고르고 근거를 고른다.', base: '갈림길 둘을 지나 결과를 보고 근거를 고른다.', challenge: '갈림길 셋까지 가서 신고 때 전할 정보와 그 뒤 할 일을 고르고, 다른 길과 견준다.' },
        activity: {
          title: '문고리 갈림길', tool: 'dilemma',
          teacher: '"밤 12시, 누군가 문고리를 계속 돌려요. 무섭지만 판단해야 해요." 선택마다 나에게 생기는 결과를 읽게 한다. "누군지 직접 확인해야 한다"는 학생에게 "문을 연 순간 확인할 수 있는 것과 잃을 수 있는 것은 무엇일까요?"라고 묻는다. 말하기 어려운 상황에서는 112 문자 신고도 할 수 있고, 신고에는 주소와 상황이 들어가야 한다는 점을 짚는다.',
          task: '문고리 갈림길을 따라 결과를 보고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('밤에 누군가 문고리를 돌릴 때 안전한 길을 고르고 근거를 고르세요.', DOOR, [['lock', 'info', 'share']], DOOR_R, ['record', 'nopen'], { d: 0.4 }),
            EXPLOREQ('\'문 열어 확인\'·\'소리치기\' 길도 끝까지 가 보고 결과를 견주세요.', DOOR, DOOR_R, ['다른 길의 끝 장면을 확인했다', '각 길에서 내가 받은 영향을 견주었다'], { d: 0.35 }),
            DILQ('"택배입니다"라며 문을 열어 달라는 방문이 왔을 때 알맞은 길을 고르고 근거를 고르세요.', { text: '밤 9시, "택배입니다, 서명이 필요해요"라며 문을 열어 달라고 한다. 주문한 물건은 없다.', who: '혼자 사는 나', motif: 'house', choices: [
              { id: 'open', text: '서명만 하면 되니 문을 연다', result: '낯선 사람이 집 안을 들여다본다.', impact: [{ who: '나', text: '혼자 산다는 것이 드러난다', tone: -1 }], ending: '주문하지 않은 택배라면 문을 열 까닭이 없다.' },
              { id: 'ask', text: '문을 열지 않고 "문 앞에 두고 가세요"라고 한다', result: '방문자가 "직접 받아야 해요"라며 버틴다.', impact: [{ who: '나', text: '문은 지킨다', tone: 1 }],
                next: { text: '방문자가 떠나지 않는다.', choices: [
                  { id: 'verify', text: '택배 회사 공식 번호로 배송을 확인하고, 이상하면 112에 알린다', result: '그런 배송이 없다는 답을 듣고 신고한다.', impact: [{ who: '나', text: '확인하고 도움을 청한다', tone: 1 }], ending: '확인은 문 밖의 말이 아니라 공식 경로로 한다.' },
                  { id: 'give', text: '귀찮아서 결국 문을 연다', result: '처음의 위험으로 돌아간다.', impact: [{ who: '나', text: '위험에 노출된다', tone: -1 }], ending: '버티는 방문자일수록 문을 열지 않는다.' }] } }] },
              [['ask', 'verify']], [{ id: 'official', text: '방문 목적은 공식 연락처로 확인한다' }, { id: 'door', text: '주문하지 않은 방문에는 문을 열지 않는다' }, { id: 'polite', text: '예의상 문은 열어 줘야 한다', why: '예의보다 안전이 먼저예요. 문을 열지 않고도 정중할 수 있어요.' }], ['official', 'door'], { d: 0.35, more: { conclude: '낯선 방문에는 문을 열지 않고, 공식 경로로 확인하며, 위협이면 잠그고 112(말하기 어려우면 문자)에 알려요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '112 문자 신고 때 꼭 넣을 정보 세 가지를 쓰세요.' }] },
      }),
      M({
        id: 'activity.threat-order', type: 'activity', title: '위협 뒤 차례',
        method: '위협 메시지를 받은 뒤 차례', tool: 'timeline', minutes: 19,
        levels: { easy: '행동 카드 3장을 차례로 놓는다.', base: '카드 4장을 차례로 놓고 함정 카드(혼자 만나서 해결)를 남긴다.', challenge: '기록을 남기는 까닭을 골라 설명한다.' },
        activity: {
          title: '위협 뒤 차례', tool: 'timeline',
          teacher: '"협박하는 메시지를 받았어요. 너무 무서워서 바로 지우고 싶어요. 그래도 될까요?" 카드를 놓기 전에 첫 행동을 말하게 한다. \'혼자 만나서 해결한다\'를 놓는 학생에게 "협박한 사람과 단둘이 만나면, 누가 나를 지켜 줄까요?"라고 묻는다. 지우지 않고 기록하는 것이 나를 지키는 증거가 된다는 점을 짚는다.',
          task: '위협 상황마다 행동 카드를 차례로 놓고 함정 카드는 남겨요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDERQ('협박 메시지를 받았어요. 행동 카드를 차례로 놓으세요.', ['지우지 않고 화면을 저장한다', '답하지 않는다', '믿을 사람에게 알린다', '112에 신고한다'], { k: 3, traps: ['혼자 만나서 해결한다'], d: 0.35 }),
            ORDERQ('밤 귀갓길에 누군가 계속 따라와요. 행동 카드를 차례로 놓으세요.', ['밝고 사람 많은 큰길로 간다', '가까운 가게나 지구대에 들어간다', '112에 신고한다(말하기 어려우면 문자)', '믿을 사람에게 위치를 알린다'], { k: 3, traps: ['어두운 골목으로 뛰어 숨는다'], d: 0.35 }),
            PICKQ('위협을 받았을 때 기록을 남기는 까닭만 고르세요.', ['신고할 때 증거가 된다', '시간·내용을 정확히 전할 수 있다'], ['상대를 협박하기 위해', '지우면 없던 일이 되므로'], { d: 0.35, opt: { mode: 'pick', basket: '기록하는 까닭' }, more: { conclude: '위협은 혼자 해결하지 않아요. 지우지 않고 기록하고, 답하지 않고, 알리고, 112에 신고해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '위협 메시지를 지우지 않고 남겨야 하는 까닭을 쓰세요.' }] },
      }),
      M({
        id: 'activity.indep-proposal', type: 'activity', title: '자립 안전 계획서',
        method: '자립 생활안전 계획서 쓰기', tool: 'rubric-writing', minutes: 19,
        levels: { easy: '항목마다 문장 틀을 보고 쓴다.', base: '생활안전 네 항목 계획을 쓰고 기준표로 점검한다.', challenge: '항목마다 기준 하나가 더 붙고, 친구와 바꿔 읽은 피드백을 활동지에 반영한다.' },
        activity: {
          title: '자립 안전 계획서', tool: 'rubric-writing',
          teacher: '"고등학교에서 배운 생활안전 네 항목(기호식품·전기제품, 실험·실습, 체육·여가, 실종·유괴 예방)을 졸업 뒤 내 생활에 맞춰 계획서로 써 봐요." 항목마다 한 문항씩 쓰게 한다. 계획이 "조심한다"로만 끝나는 학생에게 "그 계획을 지켰는지 한 달 뒤 내가 확인할 수 있을까요?"라고 묻는다. 계획서에는 실제 주소·학교 이름 같은 개인정보를 쓰지 않게 한다.',
          task: '자립 생활안전 계획서를 항목별로 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('계획서 1: 기호식품·전기제품 안전 계획을 2~3문장으로 쓰세요.', '졸업 뒤 내 생활의 기호식품(카페인·야식)과 전기제품(충전기·난방기구) 안전 계획을 쓰세요.', ['구체적인 행동을 썼다', '지킬 수 있는 계획이다', '왜 필요한지 까닭을 썼다'], { min: 40, max: 300, sent: [2, 3], must: [['카페인', '충전', '전기', '난방']], starter: '나는 ~할 때 ~을 지킨다.', plus: '비용도 함께 따졌다', d: 0.35 }),
            RWQ('계획서 2: 실험·실습(일터) 안전 계획을 2~3문장으로 쓰세요.', '졸업 뒤 실험실·일터에서 지킬 안전 계획을 쓰세요.', ['첫날 확인할 것을 썼다', '위험하면 멈추고 묻겠다는 내용이 있다', '보호구 이야기가 있다'], { min: 40, max: 300, sent: [2, 3], must: [['멈', '보호', '확인']], starter: '첫날에는 ~을 확인한다.', plus: '안전 요청을 글로 남긴다는 내용이 있다', d: 0.35 }),
            RWQ('계획서 3: 체육·여가 안전 계획을 2~3문장으로 쓰세요.', '졸업 뒤 운동·여행·수상 레저에서 지킬 안전 계획을 쓰세요.', ['멈출 기준을 썼다', '챙길 장비를 썼다', '함께할 사람이나 알릴 사람을 썼다'], { min: 40, max: 300, sent: [2, 3], must: [['멈', '돌아', '알리']], starter: '나는 ~을 할 때 ~이면 멈춘다.', plus: '날씨가 나쁠 때 대안을 썼다', d: 0.35 }),
            RWQ('계획서 4: 실종·유괴 예방 계획을 2~3문장으로 쓰세요.', '혼자 사는 생활에서 일정 공유·귀갓길·현관 안전 계획을 쓰세요.', ['일정을 공유할 사람을 정했다', '귀갓길이나 현관 습관을 썼다', '위협 때 신고 방법을 썼다'], { min: 40, max: 300, sent: [2, 3], must: [['112', '공유', '알리']], starter: '늦게 귀가하는 날은 ~에게 ~을 알린다.', plus: '친구 피드백을 반영해 고쳤다', d: 0.4, more: { conclude: '자립 생활안전 계획은 구체적이고, 지킬 수 있고, 함께할 사람이 있을 때 실제로 나를 지켜요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '친구와 계획서를 바꿔 읽고 피드백을 적으세요.', columns: ['항목', '좋은 점', '더할 점'], cells: [['기호식품·전기제품', '', ''], ['실험·실습', '', ''], ['체육·여가', '', ''], ['실종·유괴 예방', '', '']] }] },
      }),

      M({
        id: 'wrap.security-words', type: 'wrap', title: '혼자 사는 생활 안전 핵심어',
        method: '혼자 사는 생활 안전 핵심어', tool: 'wordcards', minutes: 6,
        levels: { easy: '낱말 3개를 장면과 짝짓는다.', base: '낱말 4개를 장면과 짝짓는다.', challenge: '낱말을 넣어 다짐 문장을 만든다.' },
        wrap: {
          teacher: '"일정 공유, 기록, 112 문자 신고, 밝은 길. 오늘의 낱말 넷을 장면과 짝지어 봐요." 짝지은 뒤 낱말 둘을 넣은 다짐 문장을 한두 명에게 말하게 한다. \'기록\'을 \'지우기\'와 헷갈리는 학생에게 "협박 메시지는 지울까요, 남길까요?"라고 다시 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'wordcards', options: { words: [{ en: '일정 공유', ko: '늦게 귀가하는 날 출발·도착을 믿을 사람에게 알리기' }, { en: '기록', ko: '위협 메시지를 지우지 않고 화면을 저장하기' }, { en: '112 문자 신고', ko: '말하기 어려울 때 글로 주소와 상황을 보내기' }, { en: '밝은 길', ko: '밤에는 지름길보다 사람과 가게가 있는 큰길로' }] }, prompt: '안전 낱말을 장면과 짝지으세요.', target: { match: { '일정 공유': '일정 공유', 기록: '기록', '112 문자 신고': '112 문자 신고', '밝은 길': '밝은 길' } }, difficulty: 0.2 },
            { type: 'choice', prompt: '"택배 상자에 이름·주소가 보여도 상관없다"에 대한 판단으로 알맞은 것은?', options: ['맞다', '버리기 전에 이름·주소를 지운다', '상자는 집 안에 계속 둔다'], answer: 1, difficulty: 0.15, explain: '버린 상자의 이름·주소로 혼자 사는 집이 드러날 수 있어요.' },
            { type: 'short', prompt: '낱말 둘을 넣어 다짐 문장을 쓰세요.' },
          ],
        },
        worksheet: {
          title: '혼자 사는 생활 안전',
          items: [
            { type: 'table', prompt: '낱말마다 내가 할 행동을 쓰세요.', columns: ['낱말', '내가 할 행동'], cells: [['일정 공유', ''], ['기록', ''], ['밝은 길', '']] },
            { type: 'short', prompt: '다짐 문장을 쓰세요.' },
          ],
        },
      }),
      M({
        id: 'wrap.final-reflection', type: 'wrap', title: '고교 생활안전 돌아보기',
        method: '고교 생활안전 돌아보기', tool: 'timer', minutes: 6,
        levels: { easy: '실천 항목 3개를 스스로 표시한다.', base: '실천 항목 5개를 스스로 표시한다.', challenge: '졸업 전에 갖출 습관 하나와 첫 행동을 정해 쓴다.' },
        wrap: {
          teacher: '"세 해 동안 배운 생활안전 가운데 지금 실제로 하고 있는 것은 무엇인가요? 솔직하게 표시해 봐요." 표시한 뒤 졸업 전에 갖출 습관 하나를 고르게 한다. "다 알고 있다"는 학생에게 "아는 것과 하고 있는 것 중 무엇이 나를 지켜 줄까요?"라고 묻는다. 고른 습관의 첫 행동을 이번 주 안에 할 수 있는 크기로 정하게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '고교 생활안전 돌아보기' }, prompt: '지금 실천하는 것을 스스로 점검해 표시하세요.', target: { selfCheck: ['음료 뒷면 표시를 읽고 고른다', '충전기·멀티탭을 안전하게 쓴다', '실험·실습 전 보호장구를 확인한다', '다치면 멈추고 알린다', '늦게 귀가하는 날 일정을 공유한다'] }, difficulty: 0.1 },
            { type: 'choice', prompt: '졸업 전에 갖출 습관을 고를 때 가장 알맞은 방법은?', options: ['한꺼번에 모두 바꾼다', '하나를 골라 이번 주에 할 첫 행동을 정한다', '졸업한 뒤에 생각한다'], answer: 1, difficulty: 0.1, explain: '작은 첫 행동부터 시작해야 습관이 돼요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '고교 생활안전 돌아보기',
          items: [
            { type: 'check', prompt: '지금 실천하는 것에 표시하세요.', options: ['음료 표시 읽기', '전기제품 안전 사용', '보호장구 확인', '다치면 멈추고 알리기', '일정 공유'] },
            { type: 'short', prompt: '졸업 전에 갖출 습관 하나와 이번 주 첫 행동을 쓰세요.' },
          ],
        },
      }),
    );
  }

  PaperLessons.registerModules(MODS);
})();
