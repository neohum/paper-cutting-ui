/* 창체 안전교육 직업안전 — 고(10~12학년) 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/safety-b.json 의 saf-job 고.
 * 근거: 「학교안전교육 실시 기준 등에 관한 고시」(교육부고시 제2023-33호) 별표 2 고등학교 직업안전 세 항목
 *   (직업병의 진단, 예방 및 대처방안 알기 / 작업장의 안전수칙 및 보호장비 알기 / 산업 재해의 의미·유형과 사례별 발생 현황 이해하기)
 *   + 7대 표준안 직업안전(직업안전의식·직업병·산업재해·정리정돈·보호구) + research-mandatory 노동인권(근로계약서·최저임금·산재 — 항목 이름만)·진로교육.
 * 근거 파일에 법 조항·통계 수치가 없으므로 법 조항 번호·벌칙·실제 재해 통계 수치를 쓰지 않는다. 그래프·지도·견적 값은 모두 '예시 자료(실제 통계 아님)' 또는 '가상'이다.
 * 도움 받을 곳은 체계도 concepts('보고 경로'·'도움 요청')에 맞춰 사람(실습처 현장 담당자·학교 담당 선생님·보호자)으로만 적고, 기관 이름·전화번호를 쓰지 않는다.
 * 인물은 가명이다. 학생이 실제로 다치거나 아팠던 일을 묻지 않는다.
 *
 * 사람 확인: (근거 파일에 세부 내용이 없어 일반 안전보건 교육 내용으로 쓴 문장 — 안전보건공단(KOSHA)·고용노동부·근로복지공단·교육부 현장실습 안내로 확인)
 *   - occupational-disease.intro.body-risk·activity.risk-web: 소음→귀(청력), 분진→폐(종이 몸에 폐 칸이 없어 '가슴'으로 바꿈), 되풀이 동작→손목,
 *     콜센터(말하기로 목 혹사·헤드셋 소리·화난 고객 응대의 마음 부담), 사무실(오래 앉기·화면 오래 보기 → 허리·목·눈), 예방(귀마개·방진 마스크·작업 바꿔 하기·스트레칭·모니터 높이).
 *   - occupational-disease.intro.timeline-case·activity.prevent-dilemma: 직업병은 오랜 노출로 천천히 생기고 일찍 알리고 진료받을수록 대처가 쉽다는 흐름, 증상 기록의 쓸모(가상 사례).
 *   - occupational-disease.activity.plan-write: '산재(업무상 질병) 보상 같은 제도'를 묻는 질문 — 제도의 조건·절차는 근로복지공단 안내로 교사가 확인.
 *   - occupational-disease.wrap.posture-timer: '50분 일하고 10분 쉬기'는 연습용 예시 값이다(실제 기준 아님 — 작업마다 다르며 교사가 안내).
 *   - workplace-rules.*: 보호장비 짝(귀마개-소음, 방진 마스크-분진, 보안경-튀는 조각, 안전모-떨어지는 물건, 안전화-무거운 물건, 내화학 장갑-약품, 안전대-높은 곳),
 *     '회전 기계 앞에서는 면장갑을 끼지 않는다', '작업 전 안전교육', '보호구는 쓰기 전에 깨짐·헐거움을 점검한다', 수칙 게시·보호구 보관 자리(출입구 쪽).
 *   - accident-data.*: 재해 유형 이름(떨어짐·넘어짐·끼임·부딪힘)은 일반적 분류 이름이다. 값은 모두 예시 자료 — 실제 현황은 고용노동부 산업재해 현황으로 교사가 바꿔 넣는다.
 *   - field-training.*: '위험하면 작업을 멈추고 묻는다', '실습 전에 안전교육·보호구를 받는다', 보고 경로(실습처 현장 담당자 → 학교 담당 선생님 → 보호자),
 *     '혼자 처음 기계를 다루지 않는다', '근로계약서·실습 협약 내용을 확인한다'. 현장실습 관련 법정 기준·시간은 쓰지 않았다(교육부 직업계고 현장실습 운영 안내로 확인).
 *   - career-risk.*: 직업별 위험 예시(조리사-화상·미끄러짐, 간호사-감염·허리, 프로그래머-눈·손목·오래 앉기, 배달 기사-교통사고·더위).
 *   - safety-proposal.activity.cost-budget: 물품 가격은 가상 견적이다.
 * 전화번호를 쓰지 않는다. */
(function () {
  const MOD = (topic, grades) => (o) => Object.assign({ schema: 'edu-module.v1', domain: 'saf-job', band: '고', topic: `saf-job.h.${topic}`, grades }, o, { id: `saf-job.h.${topic}.${o.id}` });
  const uniq = (a) => [...new Map(a.map((x) => [JSON.stringify(x), x])).values()];
  const mix = (groups) => { const out = []; const n = Math.max(...groups.map((g) => g.length)); for (let i = 0; i < n; i++) for (const g of groups) if (g[i] != null) out.push(g[i]); return out; };
  const pfx = (p, tag) => `${p.replace(/[.?]$/, '')}(${tag}).`;

  // 나누기 문항(sort): groups = 칸마다 카드 글(글 = 카드 id). 쉬움 = 칸마다 앞 k장(es 를 주면 앞 es칸만), 도전 = hard 덧붙임. traps = 어느 칸에도 넣지 않을 카드
  const SORTQ = (prompt, slots, groups, { k = 2, es = 0, hard = null, traps = [], d = 0.3, opt = {}, more = {} } = {}) => {
    const tgt = (ss, gs) => ({ sort: Object.fromEntries(ss.map((s, i) => [s, gs[i]])) });
    const base = { prompt, toolOptions: Object.assign({ mode: 'sort', slots, cards: [...mix(groups), ...traps] }, opt), target: tgt(slots, groups), difficulty: d, levels: {} };
    const es2 = es || slots.length; const eg = groups.slice(0, es2).map((g) => g.slice(0, k));
    base.levels.easy = { prompt: pfx(prompt, es ? `가지 ${es2}개` : `카드 ${eg.flat().length}장`), toolOptions: Object.assign({ cards: mix(eg) }, es ? { slots: slots.slice(0, es2) } : {}), target: tgt(slots.slice(0, es2), eg) };
    if (hard) { const hg = groups.map((g, i) => [...g, ...(hard[i] || [])]); base.levels.challenge = { prompt: pfx(prompt, `카드 ${hg.flat().length + traps.length}장`), toolOptions: { cards: [...mix(hg), ...traps] }, target: tgt(slots, hg) }; }
    return Object.assign(base, more);
  };
  // 차례 문항(order): steps = 바른 차례. 쉬움 = 앞 k장, 도전 = plus(끼워 넣을 [자리, 카드]) 로 한 장 더
  const ORDERQ = (prompt, steps, { k = 3, traps = [], plus = null, d = 0.3, opt = {}, more = {} } = {}) => {
    const lay = (s, t) => { const c = [...s, ...t]; return [c[c.length - 1], ...c.slice(0, -1)].reverse(); };
    const it = { prompt, toolOptions: Object.assign({ mode: 'order', slots: steps.length, cards: lay(steps, traps) }, opt), target: { order: steps }, difficulty: d, levels: {} };
    if (k < steps.length) it.levels.easy = { prompt: pfx(prompt, `카드 ${k}장`), toolOptions: { slots: k, cards: lay(steps.slice(0, k), []) }, target: { order: steps.slice(0, k) } };
    if (plus) { const s2 = [...steps]; s2.splice(plus[0], 0, plus[1]); it.levels.challenge = { prompt: pfx(prompt, `카드 ${s2.length}장`), toolOptions: { slots: s2.length, cards: lay(s2, traps) }, target: { order: s2 } }; }
    if (!Object.keys(it.levels).length) delete it.levels;
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
  // 갈림길(dilemma): 나무를 n단계에서 자른다(잘린 선택은 결과 글이 끝 문장이 된다)
  const cut = (s, n) => Object.assign({}, s, { choices: s.choices.map((c) => { const x = Object.assign({}, c); if (x.next) { if (n <= 1) { delete x.next; if (!x.ending) x.ending = x.result; } else x.next = cut(x.next, n - 1); } return x; }) });
  const depth = (s) => 1 + Math.max(0, ...s.choices.map((c) => (c.next ? depth(c.next) : 0)));
  // 쉬움 = 갈림길 e번, 기본 = b번, 도전 = 나무 전체 + (chal 이 있으면) 근거 카드 더하기
  const DILQ = (prompt, scene, paths, reasons, good, { e = 1, b = 2, chal = null, d = 0.4, opt = {}, more = {} } = {}) => {
    const full = depth(scene);
    const at = (n, g) => ({ path: uniq(paths.map((p) => p.slice(0, n))), reasons: g || good });
    const it = { prompt, toolOptions: Object.assign({ scene: cut(scene, b), reasons }, opt), target: at(b), difficulty: d,
      levels: { easy: { prompt: pfx(prompt, `갈림길 ${e}개`), toolOptions: { scene: cut(scene, e) }, target: at(e) } } };
    if (full > b || chal) it.levels.challenge = { prompt: pfx(prompt, chal ? `갈림길 ${full}개, 근거 하나 더` : `갈림길 ${full}개`), toolOptions: Object.assign({ scene }, chal ? { reasons: [...reasons, ...chal.reasons] } : {}), target: at(full, chal ? [...good, ...chal.good] : good) };
    return Object.assign(it, more);
  };
  // 열린 탐색: 같은 나무의 다른 길까지 끝까지 가 보고 견주기
  const EXPLOREQ = (prompt, scene, reasons, checks, { d = 0.35, more = {} } = {}) => Object.assign({ prompt, toolOptions: { scene, reasons }, target: { explore: 2, selfCheck: checks }, difficulty: d }, more);
  // 기준표 글쓰기: 쉬움 = 문장 틀 + (easy 를 주면) 기준 줄이기, 도전 = 기준 하나 더
  const RWQ = (prompt, topic, checks, { min = 40, max = 400, sent = null, must = null, starter = null, sample = null, plus = null, easy = null, d = 0.4, more = {} } = {}) => {
    const t = (cs) => Object.assign({ selfCheck: cs }, must ? { mustInclude: must } : {}, sent ? { sentences: sent } : {});
    const it = { prompt, toolOptions: Object.assign({ topic, minChars: min, maxChars: max }, sample ? { sample } : {}), target: t(checks), difficulty: d, levels: {} };
    if (starter || easy) it.levels.easy = Object.assign({}, starter ? { toolOptions: { starter } } : {}, easy ? { prompt: pfx(prompt, `기준 ${easy.length}개`), target: t(easy) } : {});
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
  // 1. 직업병의 진단·예방·대처 (10학년)
  // ======================================================================================================
  {
    const M = MOD('occupational-disease', [10]);
    const WRIST = { text: '물류센터에서 하루 종일 상자를 테이프로 감는 가상 노동자 서진. 몇 주째 손목이 저리고 밤에 손이 시큰거린다.', who: '서진', motif: 'house', choices: [
      { id: 'endure', text: '바쁜 철이니 참고 일한다', result: '저림이 점점 길어지고 아침에도 손이 굳는다.', impact: [{ who: '서진', text: '증상이 쌓인다', tone: -1 }],
        next: { text: '몇 달 뒤, 컵을 들다 떨어뜨렸다.', choices: [
          { id: 'late', text: '이제야 진료를 받으러 간다', result: '증상이 오래돼 치료와 쉬는 기간이 길어진다.', impact: [{ who: '서진', text: '일을 오래 쉬게 된다', tone: -1 }], ending: '늦게 알릴수록 대처할 길이 좁아진다.' },
          { id: 'more', text: '파스를 붙이고 계속 참는다', result: '일하는 속도가 떨어지고 손이 더 아프다.', impact: [{ who: '서진', text: '몸과 일 모두 힘들어진다', tone: -1 }], ending: '참는 것은 대처가 아니라 미루기다.' }] } },
      { id: 'tell', text: '관리자에게 증상을 알린다', result: '관리자가 "이번 주만 참아 줘"라고 한다.', impact: [{ who: '서진', text: '말은 했지만 바뀐 것은 없다', tone: 0 }],
        next: { text: '그 주가 지나도 저림이 그대로다.', choices: [
          { id: 'record', text: '증상과 작업 시간을 적어 다시 알리고 진료를 받는다', result: '진료에서 초기에 발견해 다행이라는 말을 듣는다.', impact: [{ who: '서진', text: '일찍 대처할 수 있다', tone: 1 }],
            next: { text: '의사는 같은 동작을 오래 하지 말라고 했다. 일터에 어떻게 말할까?', choices: [
              { id: 'rotate', text: '작업을 바꿔 가며 하고 쉬는 때를 정하자고 함께 제안한다', result: '관리자가 포장·분류 작업을 돌아가며 맡기기로 한다.', impact: [{ who: '서진', text: '손목을 쉬게 하며 일한다', tone: 1 }, { who: '동료들', text: '같은 위험이 함께 줄어든다', tone: 1 }], ending: '개인의 증상을 알리면 일터 전체의 위험이 바뀔 수 있다.' },
              { id: 'hide', text: '불이익이 걱정돼 진료 사실을 숨긴다', result: '같은 작업을 계속 맡는다.', impact: [{ who: '서진', text: '증상이 되돌아온다', tone: -1 }], ending: '숨기면 진료로 얻은 기회도 사라진다.' }] } },
          { id: 'quiet', text: '한 번 말했으니 더는 말하지 않는다', result: '저림이 계속된다.', impact: [{ who: '서진', text: '증상이 쌓인다', tone: -1 }], ending: '한 번 말하고 멈추면 아무것도 바뀌지 않을 수 있다.' }] } }] };
    const WRIST_R = [{ id: 'early', text: '직업병은 일찍 알리고 진료받을수록 대처가 쉽다' }, { id: 'record', text: '증상과 작업을 적어 두면 말에 근거가 생긴다' }, { id: 'young', text: '젊으니 쉬면 금방 낫는다', why: '나이와 상관없이 같은 동작이 오래 쌓이면 생길 수 있어요.' }, { id: 'nopain', text: '아프지 않은 날이 있으면 괜찮은 것이다', why: '증상이 오락가락해도 노출은 계속 쌓이고 있어요.' }];
    const WRIST_X = [{ id: 'org', text: '작업 방식을 바꾸면 동료의 위험도 함께 줄어든다' }, { id: 'boss', text: '회사가 알아서 바꿔 줄 때까지 기다린다', why: '위험을 가장 먼저 아는 것은 일하는 사람이에요. 알려야 바뀌어요.' }];
    const LINE = (extra) => Object.assign({ type: 'line', mode: 'read', title: '노출 기간별 증상을 말한 사람 수(예시 자료, 실제 통계 아님)', xLabel: '같은 작업을 한 기간', yLabel: '증상을 말한 사람 수', unit: '명', data: [['1년', 1], ['3년', 2], ['5년', 4], ['7년', 6], ['9년', 7]] }, extra || {});

    MODS.push(
      M({
        id: 'intro.body-risk', type: 'intro', title: '일의 위험이 닿는 몸',
        method: '직업별 위험이 닿는 몸의 곳', tool: 'body', minutes: 7,
        levels: { easy: '교사가 소음→귀, 되풀이 동작→손목 두 곳만 함께 짚는다.', base: '소음·분진·되풀이 동작이 닿는 귀·가슴(폐)·손목 세 곳을 고른다.', challenge: '세 곳을 고르며 그곳에 닿는 위험 요인 이름을 함께 말한다.' },
        intro: {
          teacher: '"일하다 다친다고 하면 무엇이 떠오르나요? 떨어지기, 베이기… 그런데 소리나 먼지처럼 다치는 순간이 안 보이는 위험도 있어요." 시연 단추로 종이 몸의 귀·가슴·손목이 골라지는 모습을 보여 주고, 폐는 종이 몸에 칸이 없어 가슴으로 짚는다고 말한다. "직업병은 사고처럼 한 번에 생긴다"는 말이 나오면 "오늘 한 번 시끄러운 곳에 갔다고 귀가 나빠질까요, 몇 년 동안 날마다 가면 어떨까요?"라고 되묻는다.',
          student: '종이 몸에서 소음·분진(먼지)·같은 동작 되풀이가 오래 닿으면 영향을 받는 곳을 골라 보세요.',
          demo: { tool: 'body', options: { mode: 'parts', parts: ['눈', '귀', '코', '가슴', '손목', '허리', '무릎'], names: true }, sequence: [{ parts: ['귀', '가슴', '손목'] }] },
          art: { draw: 'a paper human figure standing between a loud paper machine with sound waves, a paper cloud of dust and a paper conveyor belt with boxes, small paper tags on the ear, chest and wrist', banner: '안 보이는 위험도 있어요', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '종이 몸에 폐 칸이 없어 \'가슴\'으로 짚는다. 학생 가족의 직업병 경험을 묻지 않는다.',
      }),
      M({
        id: 'intro.timeline-case', type: 'intro', title: '몇 년에 걸쳐 쌓이는 증상',
        method: '노출이 쌓이는 가상 사례 시간 띠', tool: 'timeline', minutes: 7,
        levels: { easy: '교사가 카드 3장(1년 차·3년 차 검진·6년 차)만 시간 띠에 놓는다.', base: '카드 5장을 시간 차례로 놓는다.', challenge: '5장을 놓은 뒤 어느 카드에서 알아챘다면 가장 좋았을지(조기 발견 지점)를 짚는다.' },
        intro: {
          teacher: '"가상 노동자 민재는 시끄러운 공장에서 일해요. 몇 년 동안 귀에 무슨 일이 있었는지 카드로 따라가 볼까요?" 카드를 섞어 보인 뒤 시연 단추로 시간 차례를 놓는다. "증상이 없으면 문제없다"는 말이 나오면 "1년 차 카드에서 민재는 아프다고 느꼈을까요? 그때 몸 안에서는 아무 일도 없었을까요?"라고 되묻는다. 검진 카드가 왜 중요한지 짚는다.',
          student: '가상 노동자 민재의 몇 년 동안의 증상 카드를 시간 차례로 놓고, 언제 알아챘다면 좋았을지 생각해 보세요.',
          demo: { tool: 'timeline', options: { mode: 'order', slots: 5, axis: ['입사', '몇 년 뒤'], cards: [{ id: 'y3', text: '3년 차 검진: 청력 변화를 처음 발견' }, { id: 'y1', text: '1년 차: 큰 소리에 귀가 멍하다 곧 괜찮다' }, { id: 'y6', text: '6년 차: 조용한 집에서도 TV 소리를 키운다' }, { id: 'y2', text: '2년 차: 퇴근 뒤에도 귀에서 소리가 난다' }, { id: 'y4', text: '4년 차: 시끄러운 곳에서 말소리가 잘 안 들린다' }], shuffle: false }, sequence: [{ order: ['y1', 'y2', 'y3', 'y4', 'y6'] }] },
          art: { draw: 'a long paper timeline strip with five small paper calendar pages, a paper ear growing fainter from left to right and a paper stethoscope at the middle page', banner: '천천히 쌓여요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '가상 사례다. 실제 질병 진단 기준이나 수치를 다루지 않는다.',
      }),

      M({
        id: 'activity.risk-web', type: 'activity', title: '직업과 위험 요인 그물',
        method: '직업과 위험 요인 잇기', tool: 'mindmap', minutes: 16,
        levels: { easy: '가지 2개(콜센터·공장)에 위험 요인과 예방 카드를 단다.', base: '가지 3개(콜센터·공장·사무실)에 카드를 단다.', challenge: '가지 3개에 카드가 더해지고, 예방 카드마다 근거 카드를 잇는다.' },
        activity: {
          title: '직업과 위험 요인 그물', tool: 'mindmap',
          teacher: '"콜센터, 공장, 사무실 — 가장 직업병과 거리가 먼 곳은 어디일까요?" 대부분 사무실을 고르는 것을 확인하고 카드를 달게 한다. "사무직은 위험이 없다"는 학생에게 "하루 여덟 시간 같은 자세로 화면을 보면 허리와 눈은 어떨까요?"라고 묻는다. 콜센터의 \'화난 고객 응대\' 카드에서 마음의 부담도 일의 위험이라는 점을 짚는다.',
          task: '직업 가지마다 위험 요인과 예방 카드를 달고 근거를 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('위험 요인 카드를 맞는 직업 가지에 다세요.', ['콜센터', '공장', '사무실'], [
              ['하루 종일 말해 목을 많이 쓴다', '화난 고객을 응대하는 마음 부담'],
              ['큰 기계 소음', '공기 중 먼지(분진)'],
              ['같은 자세로 오래 앉아 있다', '화면을 오래 본다'],
            ], { k: 2, es: 2, hard: [['헤드셋으로 오래 듣는다'], ['같은 동작을 수없이 되풀이한다'], []], d: 0.3, opt: { topic: '직업과 위험 요인' } }),
            SORTQ('예방 카드를 맞는 직업 가지에 다세요.', ['콜센터', '공장', '사무실'], [
              ['목을 쉬게 하는 쉬는 시간', '마음 부담을 털어놓을 상담'],
              ['귀마개·방진 마스크 쓰기', '작업을 바꿔 가며 하기'],
              ['일어나 몸 풀기', '모니터 높이 맞추기'],
            ], { k: 1, es: 2, hard: [[], ['정기 건강검진 받기'], []], d: 0.35, opt: { topic: '직업과 예방' } }),
            MATCHQ('예방 방법과 그 근거를 짝지으세요.', [['귀마개 쓰기', '소음 피해는 쌓이면 되돌리기 어렵다'], ['작업 바꿔 가며 하기', '한 부위에 같은 힘이 쌓이는 것을 막는다'], ['정기 건강검진', '증상이 없을 때 변화를 일찍 찾는다']], { k: 2, extra: ['남들도 다 하니까'], d: 0.4, opt: { topic: '예방의 근거' }, more: { conclude: '직업병은 오래 쌓여 생기므로, 예방도 날마다 쌓는 습관과 일하는 방식에서 나와요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '\'사무직은 직업병과 상관없다\'는 말에 오늘 그물의 카드를 근거로 한 문장으로 답하세요.' }] },
      }),
      M({
        id: 'activity.prevent-dilemma', type: 'activity', title: '손목 통증 노동자 갈림길',
        method: '증상이 시작된 노동자 갈림길', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림길 2개(참기·알리기 → 다시 알리기)까지 가서 근거를 고른다.', base: '갈림길 3개(일터에 제안하기)까지 가서 결과를 추적한다.', challenge: '갈림길 3개를 지나, 반론 카드가 더해진 판에서 근거를 하나 더 고른다.' },
        activity: {
          title: '손목 통증 노동자 갈림길', tool: 'dilemma',
          teacher: '"서진이는 손목이 저려요. 바쁜 철에 알리면 눈치가 보이고, 참으면 몸이 상해요. 여러분이라면?" 갈림길마다 서진이와 동료들에게 어떤 영향이 가는지 읽게 한다. \'참는다\'를 고른 학생에게 "몇 달 뒤 장면에서 서진이가 잃은 것은 무엇인가요?"라고 묻는다. 한 번 말하고 멈추지 않고 기록을 근거로 다시 말하는 것, 개인의 증상이 일터 전체를 바꾸는 계기가 될 수 있다는 점을 짚는다.',
          task: '증상이 시작된 노동자의 갈림길을 따라가며 결과를 보고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('서진이의 몸과 일을 함께 지키는 길을 끝까지 고르고 근거를 고르세요.', WRIST, [['tell', 'record', 'rotate']], WRIST_R, ['early', 'record'], { e: 2, b: 3, chal: { reasons: WRIST_X, good: ['org'] }, d: 0.4 }),
            EXPLOREQ('참고 일하는 길도 끝까지 가 보고 결과를 견주세요.', WRIST, WRIST_R, ['참은 길에서 서진이가 잃은 것을 짚었다', '알린 길과 무엇이 달랐는지 말할 수 있다'], { d: 0.35 }),
            { prompt: '서진이가 관리자에게 다시 알리려 해요. 들고 갈 것을 고르고 근거가 되는 기록 카드를 고르세요.', toolOptions: { title: '다시 알리러 가는 길', scene: { text: '서진이가 관리자에게 다시 알리려 한다. 무엇을 들고 갈까?', who: '서진', motif: 'house', choices: [{ id: 'note', text: '증상과 작업 시간을 적은 기록을 들고 간다', result: '관리자가 기록을 보고 작업 순환을 검토한다.', ending: '기록은 말에 힘을 실어 준다.' }, { id: 'talk', text: '"그냥 아파요"라고만 말한다', result: '관리자가 "조금 더 지켜보자"고 한다.', ending: '근거 없는 말은 쉽게 미뤄진다.' }] }, reasons: [{ id: 'when', text: '저림이 시작된 때와 이어진 기간' }, { id: 'hours', text: '하루에 같은 동작을 한 시간' }, { id: 'rumor', text: '동료들의 소문', why: '소문은 확인할 수 없어 근거가 약해요.' }, { id: 'other', text: '다른 일터는 더 편하다는 말', why: '비교는 서진이의 증상을 설명하지 못해요.' }] }, target: { path: ['note'], reasons: ['when', 'hours'] }, difficulty: 0.3, conclude: '증상과 작업을 적은 기록은 알리기를 불평이 아니라 근거 있는 요청으로 만들어요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '서진이가 관리자에게 다시 할 말을 기록을 넣어 두 문장으로 쓰세요.' }] },
        notes: '가상 인물이다. 학생이나 가족이 일하다 아팠던 일을 꺼내게 하지 않는다.',
      }),
      M({
        id: 'activity.data-read', type: 'activity', title: '노출 기간과 증상 그래프',
        method: '예시 자료 그래프 해석', tool: 'chart', minutes: 16,
        levels: { easy: '꺾은선 점마다 값이 보인다.', base: '값 없이 꺾은선을 읽는다.', challenge: '값 없이 읽고, 마지막 문항이 \'이 그래프로 원인을 단정할 수 없는 까닭\'(상관과 인과)으로 바뀐다.' },
        activity: {
          title: '노출 기간과 증상 그래프', tool: 'chart',
          teacher: '"이 그래프는 실제 통계가 아니라 수업용 예시 자료예요. 같은 작업을 오래 할수록 무엇이 달라지나요?" 먼저 점을 읽고 모양을 말하게 한다. "그래프를 보니 소음이 원인이 확실하다"는 학생에게 "오래 일한 사람은 나이도 많을 텐데, 그것도 이 선에 섞여 있지 않을까요?"라고 묻는다. 함께 늘어나는 것(상관)과 그것 때문에 생긴 것(인과)을 구별하는 것이 자료 읽기의 핵심이라는 점을 짚는다.',
          task: '예시 자료 꺾은선그래프를 읽고 물음에 답해요.', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            { prompt: '예시 자료에서 증상을 말한 사람이 가장 많은 기간을 고르세요.', toolOptions: LINE({ question: '가장 높은 점은?', choices: ['1년', '3년', '5년', '7년', '9년'] }), target: { pick: 4 }, difficulty: 0.15 },
            { prompt: '같은 작업을 5년 한 사람들 가운데 증상을 말한 사람은 몇 명인가요?', toolOptions: LINE({ question: '5년일 때 값은?' }), target: { value: 4 }, difficulty: 0.25 },
            { prompt: '꺾은선의 모양을 가장 잘 설명한 것을 고르세요.', toolOptions: LINE({ question: '선의 모양은?', choices: ['기간이 길수록 늘어난다', '기간과 상관없이 같다', '기간이 길수록 줄어든다'], why: ['', '점의 높이가 기간마다 달라요.', '오른쪽으로 갈수록 점이 높아져요.'] }), target: { pick: 0 }, difficulty: 0.25 },
            { prompt: '이 예시 그래프만으로 말할 수 있는 것을 고르세요.', toolOptions: LINE({ question: '말할 수 있는 것은?', choices: ['오래 일한 사람일수록 증상을 말한 수가 많다', '소음이 증상의 유일한 원인이다', '1년만 일하면 전혀 위험하지 않다'], why: ['', '그래프에는 소음 말고 다른 원인이 섞여 있을 수 있어요.', '1년에도 증상을 말한 사람이 있어요.'] }), target: { pick: 0 }, difficulty: 0.35,
              levels: { challenge: { prompt: '이 그래프로 \'오래 일해서 증상이 생겼다\'고 단정할 수 없는 까닭을 고르세요.', toolOptions: { question: '단정할 수 없는 까닭은?', choices: ['오래 일한 사람은 나이 같은 다른 조건도 다르다', '꺾은선그래프는 믿을 수 없다', '9년 값이 가장 크다'], why: ['', '그래프 종류가 아니라 섞인 조건이 문제예요.', '값이 크다는 것은 까닭이 되지 못해요.'] }, target: { pick: 0 } } },
              conclude: '함께 늘어난다고 그것 때문이라고 단정할 수는 없어요. 다른 조건을 같게 맞춘 자료가 더 필요해요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '이 그래프로 알 수 있는 것과 알 수 없는 것을 하나씩 쓰세요.' }] },
        notes: '그래프는 예시 자료다. 실제 직업병 통계를 쓰려면 교사가 공식 자료로 바꿔 넣고 출처를 밝힌다.',
      }),
      M({
        id: 'activity.plan-write', type: 'activity', title: '관심 직업 직업병 예방 계획',
        method: '직업병 예방 계획서 쓰기', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '칸마다 문장 틀을 보고 쓰고 기준 2개로 점검한다.', base: '위험·예방·대처 칸을 기준 3개로 점검한다.', challenge: '칸마다 \'제도(산재 보상 등)와 연결할 질문을 하나 적었다\' 기준이 더해진다.' },
        activity: {
          title: '관심 직업 직업병 예방 계획', tool: 'rubric-writing',
          teacher: '"관심 있는 직업 하나를 골라요. 그 일을 20년 한다면 몸의 어디가 가장 걱정될까요?" 위험·예방·대처의 세 칸을 차례로 쓰게 한다. "조심하면 된다"처럼 쓴 학생에게 "무엇을, 언제, 어떻게 조심하나요?"라고 묻는다. 대처 칸에서는 증상이 생겼을 때 누구에게 알리고 무엇을 기록할지 쓰게 하고, 제도는 정답을 외우기보다 물어볼 질문을 적게 한다.',
          task: '관심 직업 하나의 직업병 위험·예방·대처를 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('관심 직업의 직업병 위험을 2~3문장으로 쓰세요.', '내가 관심 있는 직업 하나를 골라, 오래 일하면 생길 수 있는 직업병 위험을 쓰세요.', ['직업 이름을 밝혔다', '위험 요인(소리·먼지·자세 등)을 구체적으로 썼다', '몸의 어느 곳에 닿는지 썼다'], { min: 40, max: 300, sent: [2, 3], starter: '내가 관심 있는 ~은 ~ 때문에 ~이 걱정된다.', easy: ['직업 이름을 밝혔다', '위험 요인(소리·먼지·자세 등)을 구체적으로 썼다'], plus: '제도(산재 보상 등)와 연결할 질문을 하나 적었다', d: 0.35 }),
            RWQ('예방 방법을 2~3문장으로 쓰세요.', '그 위험을 줄이는 방법을 나와 일터로 나누어 쓰세요.', ['내가 할 예방을 썼다', '일터가 할 예방을 썼다', '언제·얼마나 할지 구체적이다'], { min: 40, max: 300, sent: [2, 3], must: [['예방', '줄이', '막']], starter: '나는 ~을 하고, 일터는 ~', easy: ['내가 할 예방을 썼다', '일터가 할 예방을 썼다'], plus: '제도(산재 보상 등)와 연결할 질문을 하나 적었다', d: 0.4 }),
            RWQ('증상이 생겼을 때의 대처를 2~3문장으로 쓰세요.', '증상이 생기면 누구에게 알리고 무엇을 할지 쓰세요.', ['알릴 사람을 썼다', '기록할 것을 썼다', '진료를 받는 때를 썼다'], { min: 40, max: 300, sent: [2, 3], must: [['알리', '말하']], starter: '증상이 생기면 먼저 ~에게 알리고 ~', easy: ['알릴 사람을 썼다', '진료를 받는 때를 썼다'], plus: '제도(산재 보상 등)와 연결할 질문을 하나 적었다', d: 0.4, more: { conclude: '예방 계획은 위험을 알고, 날마다 줄이고, 생기면 일찍 알리는 세 칸이 이어질 때 쓸모가 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 직업병 예방 계획을 정리하세요.', columns: ['칸', '내 계획'], cells: [['위험', ''], ['예방(나)', ''], ['예방(일터)', ''], ['대처', '']] }] },
        notes: '제도(산재 보상 등)의 조건·절차는 근거 파일에 없어 정답으로 가르치지 않는다. 학생이 적은 질문은 교사가 근로복지공단 안내로 함께 확인한다.',
      }),

      M({
        id: 'wrap.posture-timer', type: 'wrap', title: '되풀이 작업의 일·쉬기 계획',
        method: '작업 중 쉬기 계획 세우기', tool: 'timer', minutes: 10,
        levels: { easy: '교사가 예시 계획(50분 일·10분 쉬기·3번)을 칠판에 적어 주고 그대로 맞춘다.', base: '예시 조건을 읽고 학생이 직접 타이머 칸을 맞춘다.', challenge: '맞춘 뒤 다른 직업(콜센터·사무실) 하나와 쉬는 방법이 어떻게 다를지 견주어 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"같은 동작을 쉬지 않고 오래 하면 몸이 회복할 틈이 없어요. 오늘은 예시 숫자로 일·쉬기 계획을 세워 봐요. 실제 기준은 작업마다 달라요." 타이머 칸을 맞춘 뒤 출구 질문으로 넘어간다. "쉬는 시간에 휴대폰을 보면 쉰 것"이라는 학생에게 "손목과 목은 그동안 쉬었을까요?"라고 묻는다. 쉬기는 시간만이 아니라 다른 부위를 쓰는 것이라는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '포장 작업 일·쉬기 예시 계획', timeUnit: 'min', plan: { work: 30, rest: 5, rounds: 2 } }, prompt: '예시 계획: 50분 일하고 10분 쉬기를 3번 하도록 타이머를 맞추세요(연습용 예시 값).', target: { plan: { work: 50, rest: 10, rounds: 3 } }, difficulty: 0.2 },
            { type: 'choice', prompt: '쉬는 시간을 가장 잘 쓴 것을 고르세요.', options: ['같은 자세로 휴대폰을 본다', '일어나 손목·목을 풀어 준다', '쉬지 않고 일을 빨리 끝낸다'], answer: 1, difficulty: 0.15, explain: '쉬는 시간에는 일하며 쓴 부위를 풀어 주고 자세를 바꿔요.' },
            { type: 'short', prompt: '다른 직업 하나를 골라 쉬는 방법이 어떻게 달라야 할지 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '일·쉬기 계획',
          items: [
            { type: 'table', prompt: '두 직업의 쉬기 계획을 견주어 쓰세요.', columns: ['', '포장 작업', '내가 고른 직업'], cells: [['많이 쓰는 부위', '', ''], ['쉬는 방법', '', '']] },
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '직업병은 사고처럼 한 번에 생기기보다 오랜 ___으로 생긴다.', answer: '노출' },
          ],
        },
        notes: '50분·10분·3번은 연습용 예시 값이다. 실제 작업의 쉬는 기준은 작업마다 다르므로 교사가 안내한다.',
      }),
      M({
        id: 'wrap.self-check', type: 'wrap', title: '내 생활 속 반복 노출 점검',
        method: '나의 생활 속 노출 점검', tool: 'kitchen', minutes: 10,
        levels: { easy: '교사가 항목 3개(자세·화면·이어폰)를 골라 함께 읽고 표시한다.', base: '항목 5개를 스스로 표시한다.', challenge: '5개를 표시한 뒤 바꿀 습관 하나를 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"직업병은 먼 이야기 같지만, 우리도 날마다 같은 자세와 같은 소리에 노출돼요. 지금 내 생활을 점검해 봐요." 지금 이미 하고 있는 것만 표시하게 하고, 표시하지 못한 것을 부끄러워하지 않게 한다. "젊으니까 상관없다"는 학생에게 "오늘 민재의 1년 차 카드에서 민재도 그렇게 생각하지 않았을까요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '내 생활 속 노출 점검', items: [{ id: 'back', text: '공부할 때 허리를 펴고 앉는다' }, { id: 'screen', text: '화면을 오래 보면 먼 곳을 본다' }, { id: 'ear', text: '이어폰 소리를 줄여 듣는다' }, { id: 'neck', text: '휴대폰을 눈높이로 들고 본다' }, { id: 'move', text: '오래 앉았으면 일어나 몸을 푼다' }] }, prompt: '지금 이미 하고 있는 것을 스스로 표시하세요.', target: { selfCheck: true }, difficulty: 0.1 },
            { type: 'choice', prompt: '오늘 배운 것과 맞는 말을 고르세요.', options: ['증상이 없으면 문제없다', '젊으면 직업병과 상관없다', '노출은 증상이 없을 때도 쌓인다'], answer: 2, difficulty: 0.15, explain: '증상이 나타나기 전에도 노출은 쌓여요. 그래서 예방과 검진이 필요해요.' },
            { type: 'short', prompt: '이번 주에 바꿀 습관 하나를 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '내 생활 속 노출',
          items: [
            { type: 'check', prompt: '이번 주에 해 볼 것에 표시하세요.', options: ['허리 펴고 앉기', '이어폰 소리 줄이기', '휴대폰 눈높이로 들기', '한 시간마다 일어나기'] },
            { type: 'short', prompt: '내 생활에서 가장 오래 되풀이하는 자세나 소리 하나와 줄일 방법을 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 2. 작업장 안전수칙과 보호장비 (10학년)
  // ======================================================================================================
  {
    const M = MOD('workplace-rules', [10]);
    const COVER = { text: '마감 30분 전 가상 공장. 기계의 보호 덮개를 떼면 부품을 더 빨리 넣을 수 있다. 옆 동료가 "다들 떼고 해"라고 한다.', who: '하준', motif: 'house', choices: [
      { id: 'remove', text: '덮개를 떼고 빨리 넣는다', result: '속도는 빨라지지만 손이 돌아가는 부분 가까이 들어간다.', impact: [{ who: '하준', text: '끼일 위험이 커진다', tone: -1 }],
        next: { text: '마감은 맞췄다. 다음 날도 바쁘다.', choices: [
          { id: 'again', text: '어제 괜찮았으니 또 뗀다', result: '덮개 없는 작업이 습관이 된다.', impact: [{ who: '하준', text: '위험이 날마다 되풀이된다', tone: -1 }], ending: '사고가 안 난 날이 쌓이면 위험이 안 보이게 된다.' },
          { id: 'putback', text: '덮개를 다시 달고 일한다', result: '조금 느리지만 손이 안전한 거리에 있다.', impact: [{ who: '하준', text: '위험이 줄어든다', tone: 1 }], ending: '어제의 운을 오늘의 수칙으로 바꾼다.' }] } },
      { id: 'ask', text: '덮개를 단 채로 하고, 늦어질 것 같다고 담당자에게 알린다', result: '담당자가 마감을 조금 늦추고 한 사람을 더 붙인다.', impact: [{ who: '하준', text: '안전하게 일한다', tone: 1 }],
        next: { text: '동료가 "너 때문에 늦었잖아" 하고 투덜댄다.', choices: [
          { id: 'explain', text: '덮개가 왜 있는지 까닭을 말하고 함께 속도를 낼 방법을 묻는다', result: '동료가 부품 정리 순서를 바꾸자고 한다.', impact: [{ who: '동료', text: '수칙의 까닭을 알게 된다', tone: 1 }],
            next: { text: '다음 주 안전 회의에서 덮개 이야기가 나왔다.', choices: [
              { id: 'propose', text: '덮개를 단 채 빨라지는 방법(부품 정리 순서)을 제안한다', result: '팀 작업 순서가 바뀌고 덮개 떼기가 사라진다.', impact: [{ who: '팀 전체', text: '빠르고 안전해진다', tone: 1 }], ending: '수칙을 지키며 빨라지는 길을 찾으면 지름길이 필요 없어진다.' },
              { id: 'silent', text: '회의에서는 아무 말도 하지 않는다', result: '다른 조는 여전히 덮개를 뗀다.', impact: [{ who: '다른 조', text: '위험이 남는다', tone: -1 }], ending: '내 자리만 바뀌고 일터의 습관은 그대로다.' }] } },
          { id: 'give', text: '미안해서 다음부터는 떼고 하겠다고 한다', result: '하준이도 지름길에 들어선다.', impact: [{ who: '하준', text: '위험이 커진다', tone: -1 }], ending: '눈치 때문에 수칙을 버리면 위험은 내가 진다.' }] } }] };
    const COVER_R = [{ id: 'why', text: '보호 덮개는 손이 돌아가는 부분에 닿지 않게 하려고 있다' }, { id: 'tell', text: '늦어질 때는 수칙을 버리지 않고 알린다' }, { id: 'all', text: '다들 떼니까 괜찮다', why: '여럿이 한다고 위험이 줄지는 않아요.' }, { id: 'luck', text: '어제 사고가 없었으니 안전하다', why: '사고가 없었던 것은 운일 수 있어요.' }];
    const SHOP = { grid: [6, 4], title: '가상 실습 작업장', places: [{ name: '출입구', icon: 'house', at: [0, 3] }, { name: '출입구 옆 벽', icon: 'dot', at: [1, 3] }, { name: '작업 구역 문 옆', icon: 'dot', at: [2, 2] }, { name: '연삭기 옆', icon: 'factory', at: [4, 1] }, { name: '창고 구석', icon: 'dot', at: [0, 0] }, { name: '휴게실', icon: 'house', at: [5, 0] }, { name: '비상 통로', icon: 'dot', at: [5, 2] }] };

    MODS.push(
      M({
        id: 'intro.rule-why', type: 'intro', title: '수칙 뒤에 숨은 사고',
        method: '수칙 뒤에 숨은 사고 찾기', tool: 'story', minutes: 7,
        levels: { easy: '교사가 사고 장면 1장과 그 수칙 1장(2장)만 놓는다.', base: '사고 장면과 수칙 카드 4장을 사고 → 수칙 차례로 놓는다.', challenge: '4장을 놓은 뒤 수칙 하나를 처음 온 실습생도 알아듣게 고쳐 말한다.' },
        intro: {
          teacher: '"작업장 벽에 붙은 수칙은 누가, 왜 만들었을까요? 수칙 대부분은 누군가 다친 뒤에 생겼어요." 사고 장면과 수칙 카드를 섞어 보인 뒤 시연 단추로 사고 → 수칙 차례로 놓는다. "수칙은 형식일 뿐"이라는 말이 나오면 "이 수칙이 없던 날, 무슨 일이 있었는지 카드를 다시 볼까요?"라고 되묻는다. 오늘은 수칙의 까닭을 알고 보호장비를 고르는 기준을 세운다고 밝힌다.',
          student: '가상 사고 장면과 그 사고 뒤에 생긴 수칙 카드를 차례로 놓고, 수칙마다 어떤 사고를 막으려는지 말해 보세요.',
          demo: { tool: 'story', options: { mode: 'order', slots: 4, title: '수칙이 생긴 까닭(가상)', cards: [{ id: 'r1', text: '수칙: 회전 기계 앞에서는 면장갑을 끼지 않는다', motif: 'star' }, { id: 'a2', text: '가상 사고: 바닥의 기름에 미끄러졌다', motif: 'cloud' }, { id: 'a1', text: '가상 사고: 돌아가는 드릴에 장갑 실이 감겼다', motif: 'cloud' }, { id: 'r2', text: '수칙: 흘린 기름은 바로 닦고 표지를 세운다', motif: 'star' }], shuffle: false }, sequence: [{ order: ['a1', 'r1', 'a2', 'r2'] }] },
          art: { draw: 'a paper workshop wall with a paper rule poster, behind it a faded paper scene of a spinning drill and a slippery floor, a paper magnifying glass looking behind the poster', banner: '수칙 뒤에는 사고가 있어요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '사고 장면은 가상이다. 다친 모습을 묘사하지 않고 \'무엇이 일어났는지\'만 말한다.',
      }),
      M({
        id: 'intro.shortcut', type: 'intro', title: '덮개를 떼면 빨라질 때',
        method: '지름길 유혹 갈림길', tool: 'dilemma', minutes: 7,
        levels: { easy: '교사가 첫 갈림길(떼기·알리기)의 결과만 함께 읽는다.', base: '두 번째 갈림길(동료의 투덜거림)까지 가서 근거를 고른다.', challenge: '교사가 세 번째 갈림길(안전 회의)까지 이어 보이고 고른 근거를 말하게 한다.' },
        intro: {
          teacher: '"마감 30분 전, 덮개를 떼면 빨라져요. 옆 사람은 다들 그렇게 한대요. 여러분이라면?" 손을 들어 두 선택에 한 번씩 표시하게 한 뒤 시연 단추로 \'알리기\' 길을 따라간다. "한 번쯤은 괜찮다"는 말이 나오면 "어제 괜찮았다는 것이 오늘도 괜찮다는 증거가 될까요?"라고 되묻는다. 지름길의 유혹은 수칙을 몰라서가 아니라 바빠서 생긴다는 점을 짚는다.',
          student: '하준이가 되어 덮개를 떼면 빨라지는 상황에서 어떤 선택을 할지 고르고, 그 결과를 따라가 보세요.',
          demo: { tool: 'dilemma', options: { scene: cut(COVER, 2), reasons: COVER_R, title: '마감 30분 전' }, sequence: [{ path: ['ask', 'explain'], reasons: ['why', 'tell'] }] },
          art: { draw: 'a paper factory machine with a paper safety cover half lifted, a paper clock showing almost closing time, and a fork in a paper path', banner: '지름길일까, 수칙일까?', extra: [{ motif: 'moon', x: 300, y: 96 }] },
        },
      }),

      M({
        id: 'activity.gear-select', type: 'activity', title: '작업별 보호장비 고르기',
        method: '작업별 보호장비 선택', tool: 'kitchen', minutes: 16,
        levels: { easy: '작업 2개(연마·약품 옮기기)에 보호장비 카드를 나눈다.', base: '작업 3개에 보호장비 카드를 나누고 위험과 장비를 짝짓는다.', challenge: '작업 3개에 헷갈리는 장비 카드가 더해지고, 장비를 고른 근거를 고른다.' },
        activity: {
          title: '작업별 보호장비 고르기', tool: 'kitchen',
          teacher: '"보호장비만 있으면 수칙은 필요 없을까요? 장비도 작업에 맞아야 보호가 돼요." 작업 카드마다 \'무엇이 날아오거나, 들리거나, 닿거나, 떨어지나?\'를 먼저 묻고 장비를 고르게 한다. 회전 기계에 면장갑을 고른 학생에게 "장갑 실이 돌아가는 날에 걸리면 손은 어디로 끌려갈까요?"라고 묻는다. 장비는 쓰기 전에 깨짐·헐거움을 점검해야 한다는 점을 마지막 문항에서 짚는다.',
          task: '작업마다 맞는 보호장비를 칸에 나누고 위험과 짝지어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('보호장비 카드를 맞는 작업 칸에 나누세요.', ['연마기로 쇠 갈기', '약품 통 옮기기', '높은 선반 정리'], [
              ['보안경', '귀마개'],
              ['내화학 장갑', '보호 앞치마'],
              ['안전모', '안전대'],
            ], { k: 2, es: 2, hard: [['보안면'], [], ['안전화']], traps: ['회전 기계 앞 면장갑'], d: 0.3, opt: { autoMotif: false } }),
            MATCHQ('위험과 그것을 막는 보호장비를 짝지으세요.', [['큰 기계 소음', '귀마개'], ['공기 중 먼지', '방진 마스크'], ['튀는 쇳조각', '보안경'], ['떨어지는 물건', '안전모']], { k: 3, extra: ['면장갑'], d: 0.3, opt: { autoMotif: false } }),
            PICKQ('돌아가는 기계 앞에서 장비를 고르는 근거로 알맞은 것만 고르세요.', ['장갑이 날에 감기면 손이 끌려 들어갈 수 있다', '튀는 조각은 눈을 다치게 할 수 있다'], ['장갑을 끼면 무엇이든 안전하다', '보호장비만 있으면 수칙은 필요 없다'], { d: 0.35, opt: { basket: '알맞은 근거', autoMotif: false } }),
            CHECKQ('보호장비를 쓰기 전에 점검할 것만 표시하세요.', '쓰기 전 보호장비 점검', [['crack', '보안경에 금이 갔는지 본다', true], ['strap', '안전모 끈이 헐겁지 않은지 본다', true], ['color', '장비 색이 마음에 드는지 본다', false], ['fit', '내 몸에 맞는 크기인지 본다', true], ['brand', '비싼 상표인지 본다', false]], { k: 3, d: 0.25, more: { conclude: '보호장비는 작업에 맞게 고르고, 쓰기 전에 점검해야 보호가 돼요. 장비가 수칙을 대신하지는 않아요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '\'보호장비만 있으면 수칙은 필요 없다\'는 말이 왜 틀렸는지 오늘 카드 하나를 근거로 쓰세요.' }] },
      }),
      M({
        id: 'activity.site-plan', type: 'activity', title: '작업장 배치도에 수칙 두기',
        method: '작업장 배치도에 수칙 배치', tool: 'map', minutes: 16,
        levels: { easy: '핀을 꽂으면 그 칸의 이름이 바로 보인다.', base: '이름을 보고 수칙 게시·보호구 보관·기계 수칙·비워 둘 곳 네 자리에 핀을 꽂는다.', challenge: '보호구 보관 문항에서 그 자리를 고른 까닭 보기까지 고른다.' },
        activity: {
          title: '작업장 배치도에 수칙 두기', tool: 'map',
          teacher: '"수칙이 아무리 좋아도 아무도 안 보는 곳에 붙어 있으면 소용없어요. 어디에 두어야 할까요?" 문항마다 "이 자리를 누가, 언제 지나가나요?"라고 묻는다. 창고 구석에 보호구를 두려는 학생에게 "작업 구역에 들어가기 전에 그곳까지 다녀올까요?"라고 묻는다. 비상 통로는 무엇을 둘 곳이 아니라 비워 둘 곳이라는 점을 마지막에 짚는다.',
          task: '가상 작업장 배치도에서 수칙과 보호구를 둘 자리에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            { prompt: '작업장 전체 안전수칙 게시판을 둘 자리에 핀을 꽂으세요. 들어오는 사람 모두가 보는 곳이어야 해요.', toolOptions: SHOP, target: { place: '출입구 옆 벽' }, difficulty: 0.2 },
            { prompt: '보호구 보관대를 둘 자리에 핀을 꽂으세요. 작업 구역에 들어가기 직전에 챙길 수 있어야 해요.', toolOptions: SHOP, target: { place: '작업 구역 문 옆' }, difficulty: 0.3,
              levels: { challenge: { prompt: '보호구 보관대를 둘 자리에 핀을 꽂고, 그 자리를 고른 까닭을 고르세요.', toolOptions: { ask: { q: '그 자리를 고른 까닭은?', choices: ['작업 구역에 들어가기 직전에 챙길 수 있어서', '눈에 안 띄어 깔끔해서', '휴게실과 가까워 편해서'], why: ['', '눈에 안 띄면 챙기는 것을 잊기 쉬워요.', '쉬러 갈 때가 아니라 일하러 들어갈 때 챙겨야 해요.'] } }, target: { place: '작업 구역 문 옆', pick: 0 } } } },
            { prompt: '연삭기 사용 수칙 카드를 붙일 자리에 핀을 꽂으세요. 그 기계를 쓰는 순간에 보여야 해요.', toolOptions: SHOP, target: { place: '연삭기 옆' }, difficulty: 0.25 },
            { prompt: '물건을 절대 쌓아 두지 말고 비워 둘 곳에 핀을 꽂으세요.', toolOptions: SHOP, target: { place: '비상 통로' }, difficulty: 0.3, conclude: '수칙은 보아야 할 순간에 보이는 자리에, 보호구는 챙겨야 할 순간에 손이 닿는 자리에 둬요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 학교 실습실(또는 과학실)에서 수칙이 붙어 있는 자리가 알맞은지 한 문장으로 평가하세요.' }] },
        notes: '배치도는 가상이다. 실제 실습실 배치는 학교 실습실 안전 담당 선생님과 함께 본다.',
      }),
      M({
        id: 'activity.rule-write', type: 'activity', title: '흐릿한 수칙 다시 쓰기',
        method: '작업 수칙 다시 쓰기', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '문장 틀을 보고 수칙을 다시 쓴다.', base: '흐릿한 수칙을 행동·때·까닭이 드러나게 다시 쓰고 기준표로 점검한다.', challenge: '칸마다 \'처음 온 실습생에게 맞춘 말로 썼다\' 기준이 더해진다.' },
        activity: {
          title: '흐릿한 수칙 다시 쓰기', tool: 'rubric-writing',
          teacher: '"\'조심해서 작업한다.\' 이 수칙을 읽은 사람은 무엇을 할까요?" 흐릿한 수칙은 사람마다 다르게 읽힌다는 점을 먼저 말한다. 다시 쓸 때는 \'무엇을·언제·왜\'가 들어가야 한다고 칠판에 적는다. "주의한다", "잘한다"를 그대로 쓴 학생에게 "그 수칙을 지켰는지 남이 보고 확인할 수 있나요?"라고 묻는다.',
          task: '흐릿한 수칙을 누구나 같은 행동으로 읽게 다시 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('\'조심해서 작업한다\'를 구체적인 수칙으로 다시 쓰세요.', '흐릿한 수칙 \'조심해서 작업한다\'를 한 작업(예: 연마기 쓰기)에 맞춰 1~2문장으로 다시 쓰세요.', ['무엇을 할지 행동으로 썼다', '언제 할지 썼다', '왜 하는지 까닭을 붙였다'], { min: 30, max: 200, sent: [1, 2], starter: '연마기를 켜기 전에 ~한다. 왜냐하면 ~', plus: '처음 온 실습생에게 맞춘 쉬운 말로 썼다', d: 0.35 }),
            RWQ('\'보호구를 잘 착용한다\'를 구체적인 수칙으로 다시 쓰세요.', '흐릿한 수칙 \'보호구를 잘 착용한다\'를 1~2문장으로 다시 쓰세요.', ['어떤 보호구인지 이름을 썼다', '쓰기 전 점검을 넣었다', '왜 하는지 까닭을 붙였다'], { min: 30, max: 200, sent: [1, 2], must: [['점검', '확인', '살펴']], starter: '작업 구역에 들어가기 전에 ~을 쓰고 ~을 확인한다.', plus: '처음 온 실습생에게 맞춘 쉬운 말로 썼다', d: 0.4 }),
            RWQ('\'정리정돈을 잘한다\'를 구체적인 수칙으로 다시 쓰세요.', '흐릿한 수칙 \'정리정돈을 잘한다\'를 1~2문장으로 다시 쓰세요.', ['어디를 어떻게 할지 썼다', '언제 할지 썼다', '어떤 사고를 막는지 썼다'], { min: 30, max: 200, sent: [1, 2], starter: '작업이 끝나면 ~을 ~에 두고 ~', plus: '처음 온 실습생에게 맞춘 쉬운 말로 썼다', d: 0.4, more: { conclude: '좋은 수칙은 누가 읽어도 같은 행동을 하게 만들고, 지켰는지 눈으로 확인할 수 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 학교 실습실(또는 교실)의 흐릿한 규칙 하나를 골라 구체적으로 다시 쓰세요.' }] },
      }),

      M({
        id: 'wrap.rule-web', type: 'wrap', title: '수칙과 까닭 잇기',
        method: '수칙-까닭 정리', tool: 'mindmap', minutes: 10,
        levels: { easy: '교사가 수칙 두 가지만 함께 까닭을 단다.', base: '수칙 세 가지에 까닭 카드를 단다.', challenge: '까닭을 단 뒤 \'이 수칙을 안 지켜도 괜찮았던 날\'이라는 반례에 어떻게 답할지 짝과 말한다.' },
        wrap: {
          teacher: '"오늘 본 수칙마다 까닭이 있었어요. 까닭을 알면 처음 보는 작업장에서도 수칙을 지킬 수 있어요." 마인드맵을 채운 뒤 출구 질문으로 넘어간다. "수칙을 안 지켜도 아무 일 없던 날이 많았다"는 반례가 나오면 "그날은 수칙이 틀린 날일까요, 운이 좋았던 날일까요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '수칙의 까닭', slots: ['면장갑 끼지 않기', '덮개 떼지 않기', '비상 통로 비우기'], cards: ['장갑 실이 날에 감기지 않게', '손이 돌아가는 부분에 닿지 않게', '불이 나면 바로 나갈 수 있게', '돌아가는 날에 손이 끌려가지 않게', '부품을 넣다 끼이지 않게', '넘어지는 사람이 없게'] }, prompt: '수칙 가지마다 까닭 카드를 다세요.', target: { sort: { '면장갑 끼지 않기': ['장갑 실이 날에 감기지 않게', '돌아가는 날에 손이 끌려가지 않게'], '덮개 떼지 않기': ['손이 돌아가는 부분에 닿지 않게', '부품을 넣다 끼이지 않게'], '비상 통로 비우기': ['불이 나면 바로 나갈 수 있게', '넘어지는 사람이 없게'] } }, difficulty: 0.2 },
            { type: 'choice', prompt: '오늘 배운 것과 맞는 말을 고르세요.', options: ['수칙은 형식이다', '보호장비만 있으면 수칙은 필요 없다', '수칙에는 그것이 막으려는 사고가 있다'], answer: 2, difficulty: 0.15, explain: '수칙은 대부분 누군가 다친 뒤에 생겼어요. 까닭을 알면 지키기 쉬워요.' },
            { type: 'short', prompt: '\'안 지켜도 괜찮았던 날\'이라는 말에 한 문장으로 답하세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '수칙과 까닭',
          items: [
            { type: 'table', prompt: '수칙과 까닭을 정리하세요.', columns: ['수칙', '막으려는 사고'], cells: [['회전 기계 앞 면장갑 끼지 않기', ''], ['보호 덮개 떼지 않기', ''], ['비상 통로 비우기', '']] },
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '보호장비는 작업에 맞게 고르고 쓰기 전에 ___한다.', answer: '점검' },
          ],
        },
      }),
      M({
        id: 'wrap.commit', type: 'wrap', title: '실습실에서 지킬 수칙 점검',
        method: '수칙 실천 점검', tool: 'timer', minutes: 10,
        levels: { easy: '교사가 점검 항목 3개를 골라 함께 읽고 표시한다.', base: '점검 항목 5개를 스스로 표시한다.', challenge: '5개를 표시한 뒤 짝과 서로의 점검표를 바꿔 보고 하나씩 짚어 준다.' },
        wrap: {
          teacher: '"다음 실습 시간, 나는 무엇을 지킬까요? 남이 시켜서가 아니라 내가 고른 수칙이어야 지켜져요." 점검 항목을 스스로 표시하게 한 뒤 짝과 바꿔 본다. "선생님이 볼 때만 지키면 된다"는 학생에게 "기계는 선생님이 보는지 알까요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '다음 실습에서 지킬 수칙' }, prompt: '다음 실습(실험)에서 지킬 것을 스스로 표시하세요.', target: { selfCheck: ['작업 전 안전교육 내용을 다시 읽는다', '보호구를 쓰기 전에 점검한다', '회전 기계 앞에서 장갑을 벗는다', '덮개·안전장치를 떼지 않는다', '모르는 기계는 혼자 켜지 않고 묻는다'] }, difficulty: 0.1 },
            { type: 'choice', prompt: '바빠서 수칙을 건너뛰고 싶을 때 가장 알맞은 행동을 고르세요.', options: ['한 번만 건너뛴다', '늦어질 것 같다고 알린다', '남들이 하는지 보고 따라 한다'], answer: 1, difficulty: 0.15, explain: '바쁠 때는 수칙을 버리지 않고 늦어진다고 알려요.' },
            { type: 'short', prompt: '짝의 점검표에서 좋았던 점 하나를 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '나의 실습 수칙',
          items: [
            { type: 'check', prompt: '다음 실습에서 지킬 것에 표시하세요.', options: ['안전교육 다시 읽기', '보호구 점검', '장갑 벗기(회전 기계)', '모르면 묻기'] },
            { type: 'short', prompt: '내가 가장 건너뛰기 쉬운 수칙 하나와 지킬 방법을 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 3. 산업 재해 유형·현황 자료 분석 (11학년)
  // ======================================================================================================
  {
    const M = MOD('accident-data', [11]);
    const HEAD = { text: '예시 자료: 가 업종은 사고 수가 가장 많지만 일하는 사람 수도 가장 많다. 같은 자료로 두 기사 제목이 나왔다.', who: '편집부', motif: 'house', choices: [
      { id: 'scary', text: '제목 1 "가 업종, 가장 위험한 일터"를 고른다', result: '읽는 사람은 가 업종에서 일하는 것이 가장 위험하다고 믿는다.', impact: [{ who: '독자', text: '수와 위험을 같은 것으로 오해한다', tone: -1 }],
        next: { text: '한 독자가 "일하는 사람 수로 나누면 다른 업종이 더 높다"는 댓글을 달았다.', choices: [
          { id: 'fix', text: '제목을 고치고 사람 수를 함께 실은 정정 기사를 낸다', result: '독자들이 수와 비율을 함께 보게 된다.', impact: [{ who: '독자', text: '바르게 이해한다', tone: 1 }], ending: '틀린 제목은 고치면 되지만, 처음부터 바르게 쓰는 것이 낫다.' },
          { id: 'ignore', text: '많이 읽혔으니 그대로 둔다', result: '오해가 퍼진다.', impact: [{ who: '다른 업종 노동자', text: '자기 일터의 위험을 낮게 본다', tone: -1 }], ending: '눈길을 끄는 제목이 다른 일터의 위험을 가린다.' }] } },
      { id: 'exact', text: '제목 2 "가 업종 사고 수 가장 많아… 사람 수와 함께 봐야"를 고른다', result: '읽는 사람이 수와 비율을 구별해 본다.', impact: [{ who: '독자', text: '자료를 바르게 읽는다', tone: 1 }],
        next: { text: '편집장이 "제목이 길고 심심하다"며 줄이자고 한다.', choices: [
          { id: 'keep', text: '줄이더라도 \'사고 수\'라는 말은 남긴다', result: '"가 업종 사고 수 1위, 비율은 따로 봐야"로 정한다.', impact: [{ who: '독자', text: '짧아도 정확하다', tone: 1 }], ending: '짧은 제목도 무엇을 센 것인지 밝히면 정확할 수 있다.' },
          { id: 'cut', text: '"가 업종, 위험 1위"로 줄인다', result: '제목이 다시 수와 위험을 섞는다.', impact: [{ who: '독자', text: '다시 오해한다', tone: -1 }], ending: '줄이다 핵심 낱말을 빼면 정확함도 빠진다.' }] } }] };
    const HEAD_R = [{ id: 'count', text: '사고 수가 많은 것과 위험이 큰 것은 다르다' }, { id: 'rate', text: '일하는 사람 수로 나눈 비율을 함께 봐야 한다' }, { id: 'click', text: '눈길을 끄는 제목이 좋은 제목이다', why: '눈길을 끌어도 자료와 다르면 독자를 속이게 돼요.' }];
    const TYPES = [['떨어짐', 30], ['넘어짐', 25], ['끼임', 20], ['부딪힘', 15], ['그 밖', 10]];
    const BAND = (extra) => Object.assign({ type: 'band', mode: 'read', title: '유형별 사고 비율(예시 자료, 실제 통계 아님)', unit: '%', data: TYPES }, extra || {});
    const AREA = { grid: [4, 3], title: '가상 지역 칸 지도 — 지역별 사고 보고(예시 자료)', unit: '건', choropleth: true, regions: [
      { name: '가 지역', cells: [[0, 0], [1, 0], [0, 1]], value: 3 }, { name: '나 지역', cells: [[2, 0], [3, 0], [3, 1], [3, 2]], value: 8 },
      { name: '다 지역', cells: [[1, 1], [2, 1], [2, 2]], value: 5 }, { name: '라 지역', cells: [[0, 2], [1, 2]], value: 2 }],
      places: [{ name: '도심 사무실', icon: 'office', at: [0, 0] }, { name: '공단', icon: 'factory', at: [3, 1] }, { name: '건설 현장', icon: 'apartment', at: [2, 1] }, { name: '농촌', icon: 'field', at: [0, 2] }] };

    MODS.push(
      M({
        id: 'intro.question-map', type: 'intro', title: '산업 재해 자료에 묻고 싶은 것',
        method: '자료로 묻고 싶은 질문', tool: 'mindmap', minutes: 7,
        levels: { easy: '교사가 \'얼마나\'·\'누구에게\' 두 가지에 질문 카드를 함께 단다.', base: '세 가지(얼마나·누구에게·왜)에 질문 카드를 단다.', challenge: '단 질문 가운데 자료로 답을 확인할 수 있는 질문을 골라 말한다.' },
        intro: {
          teacher: '"\'산업 재해\'라는 말을 들으면 무엇이 궁금한가요? 오늘은 답보다 먼저 좋은 질문을 모아요." 질문 카드를 읽어 주고 시연 단추로 가지에 단다. "왜 사고가 나느냐는 그래프 하나로 알 수 있다"는 말이 나오면 "그래프는 \'얼마나\'를 보여 주지만 \'왜\'까지 보여 줄까요?"라고 되묻는다. 질문의 종류에 따라 필요한 자료가 다르다는 점을 짚는다.',
          student: '\'산업 재해\'에 대해 묻고 싶은 질문 카드를 얼마나·누구에게·왜 가지로 나눠 보세요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '산업 재해', slots: ['얼마나', '누구에게', '왜'], cards: ['해마다 몇 건이 일어날까?', '어느 업종에서 많이 일어날까?', '왜 그 유형이 많을까?', '어떤 유형이 가장 많을까?', '어느 나이대에서 많이 일어날까?', '무엇을 바꾸면 줄어들까?'] }, sequence: [{ sort: { 얼마나: ['해마다 몇 건이 일어날까?', '어떤 유형이 가장 많을까?'], 누구에게: ['어느 업종에서 많이 일어날까?', '어느 나이대에서 많이 일어날까?'], 왜: ['왜 그 유형이 많을까?', '무엇을 바꾸면 줄어들까?'] } }] },
          art: { draw: 'a paper mind map with a central paper hard hat, three paper branches holding small paper question-mark cards, and a paper bar chart in the corner', banner: '먼저 좋은 질문을', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      M({
        id: 'intro.headline', type: 'intro', title: '같은 자료, 두 기사 제목',
        method: '기사 제목 갈림길', tool: 'dilemma', minutes: 7,
        levels: { easy: '교사가 첫 갈림길(제목 1·제목 2)의 결과만 함께 읽는다.', base: '두 번째 갈림길(댓글·편집장)까지 가서 근거를 고른다.', challenge: '두 갈림길을 지난 뒤 \'눈길을 끄는 제목이 좋은 제목\'이라는 반론에 답한다.' },
        intro: {
          teacher: '"같은 예시 자료로 두 기자가 제목을 썼어요. \'가 업종, 가장 위험한 일터\'와 \'가 업종 사고 수 가장 많아… 사람 수와 함께 봐야\'. 어느 쪽이 정확할까요?" 손을 들어 고르게 한 뒤 시연 단추로 제목 2의 길을 따라간다. "수가 많으면 위험도 크다"는 말이 나오면 "학생 1000명 학교의 지각생 30명과 100명 학교의 지각생 20명, 어느 학교가 지각이 잦을까요?"라고 되묻는다.',
          student: '같은 자료로 쓴 두 기사 제목 가운데 어느 쪽이 정확한지 고르고, 그 선택이 독자에게 어떤 영향을 주는지 따라가 보세요.',
          demo: { tool: 'dilemma', options: { scene: HEAD, reasons: HEAD_R, title: '같은 자료, 두 제목' }, sequence: [{ path: ['exact', 'keep'], reasons: ['count', 'rate'] }] },
          art: { draw: 'two paper newspaper front pages side by side with different headline strips, the same small paper bar chart printed on both, a paper pencil hovering between them', banner: '어느 제목이 정확할까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '자료와 업종은 가상이다. 실제 업종 이름이나 실제 기사를 쓰지 않는다.',
      }),

      M({
        id: 'activity.type-chart', type: 'activity', title: '유형별 사고 띠그래프 읽기',
        method: '유형별 자료 그래프', tool: 'chart', minutes: 16,
        levels: { easy: '띠그래프 칸마다 비율 값이 보인다.', base: '값 없이 칸 너비로 읽고, 두 일터의 수와 비율을 견준다.', challenge: '값 없이 풀고, 4번 문항(100명당 비율)을 짝에게 계산으로 설명한다.' },
        activity: {
          title: '유형별 사고 띠그래프 읽기', tool: 'chart',
          teacher: '"이 띠그래프는 예시 자료예요. 최신 공식 자료가 있으면 선생님이 바꿔 넣을 수 있어요. 무엇이 가장 큰 칸인가요?" 먼저 칸을 읽고, 수와 비율 문항에서는 계산을 말로 설명하게 한다. "사고 수가 많은 일터가 더 위험하다"는 학생에게 "일하는 사람이 열 배 많다면, 사고 수도 열 배일 때 위험은 같을까요?"라고 묻는다. 비율은 무엇으로 나눴는지(비교 기준)를 꼭 밝혀야 한다는 점을 짚는다.',
          task: '예시 자료 그래프를 읽고 수와 비율을 구별해요.', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            { prompt: '예시 자료에서 가장 큰 비율을 차지하는 사고 유형을 고르세요.', toolOptions: BAND({ question: '가장 큰 칸은?', choices: TYPES.map((x) => x[0]) }), target: { pick: 0 }, difficulty: 0.15 },
            { prompt: '예시 자료에서 끼임은 전체의 몇 %인가요?', toolOptions: BAND({ question: '끼임은 몇 %?' }), target: { value: 20 }, difficulty: 0.25 },
            { prompt: '두 가상 일터의 사고 수를 견주어 사고 수가 더 많은 곳을 고르세요.', toolOptions: { type: 'bar', mode: 'read', title: '두 일터의 사고 수(예시 자료)', yLabel: '사고 수', xLabel: '일터', unit: '건', data: [['가 일터(100명)', 10], ['나 일터(1000명)', 30]], question: '사고 수가 많은 곳은?', choices: ['가 일터(100명)', '나 일터(1000명)'] }, target: { pick: 1 }, difficulty: 0.2 },
            { prompt: '가 일터는 100명 가운데 10건, 나 일터는 1000명 가운데 30건이에요. 100명당 사고가 더 많은 곳을 고르세요.', toolOptions: { type: 'bar', mode: 'read', title: '두 일터의 사고 수(예시 자료)', yLabel: '사고 수', xLabel: '일터', unit: '건', data: [['가 일터(100명)', 10], ['나 일터(1000명)', 30]], question: '100명당 사고가 많은 곳은?', choices: ['가 일터(100명)', '나 일터(1000명)'], why: ['', '1000명 가운데 30건은 100명당 3건이에요.'] }, target: { pick: 0 }, difficulty: 0.4, conclude: '수는 나 일터가 많지만 100명당으로 나누면 가 일터가 더 높아요. 위험을 견줄 때는 무엇으로 나눴는지 함께 봐요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '\'사고 수가 많으면 위험도 크다\'는 말이 맞지 않을 수 있는 까닭을 오늘 4번 문항으로 설명하세요.' }] },
        notes: '그래프 값은 예시 자료다. 실제 산업 재해 현황은 고용노동부 공식 자료로 교사가 바꿔 넣고 출처·연도를 밝힌다.',
      }),
      M({
        id: 'activity.sector-map', type: 'activity', title: '지역별 사고 지도 읽기',
        method: '업종별 지역 자료 지도', tool: 'map', minutes: 16,
        levels: { easy: '지역 이름 옆에 값이 보인다.', base: '값 없이 색의 진하기로 가장 큰·작은 지역을 찾는다.', challenge: '3번 문항에서 값이 큰 까닭에 대한 가설 보기까지 고른다.' },
        activity: {
          title: '지역별 사고 지도 읽기', tool: 'map',
          teacher: '"가상 지역 지도예요. 색이 진할수록 사고 보고가 많아요(예시 자료). 가장 진한 곳은 어디고, 왜 그럴까요?" 핀을 꽂은 뒤 지역의 장소 기호(공단·건설 현장·농촌)를 함께 보게 한다. "나 지역 사람들이 조심성이 없어서"라고 말하는 학생에게 "그 지역에 어떤 일터가 모여 있는지 기호를 볼까요? 일하는 사람 수는요?"라고 묻는다. 지도는 \'어디에\'를 보여 주지만 \'왜\'는 가설로 세우고 다른 자료로 확인해야 한다는 점을 짚는다.',
          task: '가상 지역 지도에서 사고 보고가 많은·적은 지역을 찾고 까닭을 생각해요.', levels: { easy: { regionValues: true }, base: {}, challenge: {} },
          items: [
            { prompt: '예시 자료에서 사고 보고가 가장 많은 지역에 핀을 꽂으세요.', toolOptions: AREA, target: { most: true }, difficulty: 0.2 },
            { prompt: '예시 자료에서 사고 보고가 가장 적은 지역에 핀을 꽂으세요.', toolOptions: AREA, target: { least: true }, difficulty: 0.2 },
            { prompt: '공단이 있는 지역에 핀을 꽂으세요.', toolOptions: AREA, target: { region: '나 지역' }, difficulty: 0.25,
              levels: { challenge: { prompt: '공단이 있는 지역에 핀을 꽂고, 그 지역 값이 큰 까닭으로 세울 수 있는 가설을 고르세요.', toolOptions: { ask: { q: '세울 수 있는 가설은?', choices: ['기계를 쓰는 일터와 일하는 사람이 많아서일 수 있다', '그 지역 사람들이 조심성이 없어서다', '지도 색이 진해서다'], why: ['', '사람의 성격으로 단정하면 일터의 조건을 놓쳐요.', '색은 값을 나타낼 뿐 까닭이 아니에요.'] } }, target: { region: '나 지역', pick: 0 } } } },
            { prompt: '건설 현장이 있는 지역에 핀을 꽂으세요.', toolOptions: AREA, target: { region: '다 지역' }, difficulty: 0.25, conclude: '지도는 어디에 많은지 보여 줘요. 왜 많은지는 일터 종류·일하는 사람 수 같은 다른 자료로 확인해야 해요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '나 지역 값이 큰 까닭을 확인하려면 어떤 자료가 더 필요한지 쓰세요.' }] },
        notes: '지역과 값은 모두 가상 예시다. 실제 지역 통계를 쓸 때는 교사가 공식 자료로 바꾸고 일하는 사람 수 같은 비교 기준을 함께 보인다.',
      }),
      M({
        id: 'activity.case-line', type: 'activity', title: '안전 조치와 사고 수 변화',
        method: '가상 일터 안전 조치와 사고 수 시간 띠', tool: 'timeline', minutes: 16,
        levels: { easy: '카드 3장을 시간 차례로 놓는다.', base: '카드 5장을 시간 차례로 놓고 조치와 줄어든 유형을 짝짓는다.', challenge: '카드 5장에 함정 카드가 더해지고, 조치 때문에 줄었다고 단정하기 어려운 까닭을 고른다.' },
        activity: {
          title: '안전 조치와 사고 수 변화', tool: 'timeline',
          teacher: '"가상 일터 \'보람 물류\'는 3년 동안 안전 조치를 두 번 했어요. 사고 보고는 어떻게 바뀌었을까요?" 카드를 시간 차례로 놓은 뒤 조치와 변화를 이어 보게 한다. "조치를 했더니 줄었으니 조치 덕분이 확실하다"는 학생에게 "그 사이 일하는 사람 수나 물량은 그대로였을까요?"라고 묻는다. 시간 띠는 차례를 보여 주지만 원인은 다른 조건을 함께 봐야 판단할 수 있다는 점을 짚는다.',
          task: '가상 일터의 안전 조치와 사고 보고 변화 카드를 시간 띠에 놓고 판단해요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDERQ('보람 물류(가상)의 3년을 시간 차례로 카드를 놓으세요.', ['1년 차: 사고 보고 9건(가상)', '2년 차 초: 통로 표시·정리정돈 시작', '2년 차: 사고 보고 6건(가상)', '3년 차 초: 끼임 방지 덮개 설치', '3년 차: 사고 보고 3건(가상)'], { k: 3, traps: ['4년 차: 사고 0건 확정'], d: 0.3, opt: { axis: ['1년 차', '3년 차'] } }),
            MATCHQ('조치와 그 조치가 줄이려던 사고 유형을 짝지으세요.', [['통로 표시·정리정돈', '넘어짐'], ['끼임 방지 덮개', '끼임'], ['난간 설치', '떨어짐']], { k: 2, extra: ['감기'], d: 0.3, opt: { topic: '조치와 유형' } }),
            PICKQ('이 시간 띠만으로 \'조치 때문에 줄었다\'고 단정하기 어려운 까닭만 고르세요.', ['그 사이 일하는 사람 수가 바뀌었을 수 있다', '보고하는 방식이 바뀌었을 수 있다'], ['카드가 시간 차례로 놓였다', '사고 수가 줄었다'], { d: 0.4, opt: { basket: '단정하기 어려운 까닭' } }),
            PICKQ('조치의 효과를 더 잘 판단하려면 함께 볼 자료만 고르세요.', ['해마다 일한 사람 수', '조치 전후 유형별 사고 수'], ['회사 건물 색', '사장의 나이'], { d: 0.35, opt: { basket: '함께 볼 자료' }, more: { conclude: '조치 뒤에 줄었다는 것은 출발점이에요. 사람 수·물량·보고 방식이 같았는지 확인해야 효과라고 말할 수 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '보람 물류의 조치가 효과가 있었다고 말하려면 무엇을 더 확인해야 하는지 쓰세요.' }] },
        notes: '일터와 수치는 가상이다.',
      }),
      M({
        id: 'activity.brief-write', type: 'activity', title: '자료 분석 요약 쓰기',
        method: '자료 분석 요약과 한계 쓰기', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '칸마다 문장 틀을 보고 쓰고 기준 2개로 점검한다.', base: '요약·한계·우선순위 칸을 기준 3개로 점검한다.', challenge: '칸마다 \'더 필요한 자료 하나를 제안했다\' 기준이 더해진다.' },
        activity: {
          title: '자료 분석 요약 쓰기', tool: 'rubric-writing',
          teacher: '"오늘 본 그래프와 지도를 한 장 요약으로 써요. 요약은 자료가 말하는 것, 말하지 못하는 것, 그래서 우리가 할 일로 이뤄져요." 쓰기 전에 \'예시 자료\'라는 말을 꼭 밝히게 한다. "떨어짐이 가장 위험하다"처럼 수와 위험을 섞은 학생에게 "그 그래프는 무엇을 센 그래프였나요?"라고 묻는다.',
          task: '자료 분석 요약을 칸마다 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('자료가 말하는 것을 2~3문장으로 요약하세요.', '오늘 본 예시 자료(유형별 띠그래프·지역 지도)가 보여 주는 것을 쓰세요.', ['무엇을 센 자료인지 밝혔다', '가장 큰 값과 작은 값을 짚었다', '예시 자료라는 것을 밝혔다'], { min: 40, max: 300, sent: [2, 3], must: [['예시']], starter: '이 예시 자료는 ~을 센 것이다. 가장 큰 것은 ~', easy: ['무엇을 센 자료인지 밝혔다', '예시 자료라는 것을 밝혔다'], plus: '더 필요한 자료 하나를 제안했다', d: 0.35 }),
            RWQ('자료가 말하지 못하는 것(한계)을 2~3문장으로 쓰세요.', '이 자료만으로는 알 수 없는 것을 쓰세요.', ['알 수 없는 것을 하나 이상 썼다', '수와 비율을 구별했다', '왜 알 수 없는지 까닭을 붙였다'], { min: 40, max: 300, sent: [2, 3], starter: '이 자료만으로는 ~을 알 수 없다. 왜냐하면 ~', easy: ['알 수 없는 것을 하나 이상 썼다', '왜 알 수 없는지 까닭을 붙였다'], plus: '더 필요한 자료 하나를 제안했다', d: 0.4 }),
            RWQ('예방 우선순위를 2~3문장으로 제안하세요.', '자료를 근거로 무엇부터 막아야 할지 제안하세요.', ['자료를 근거로 들었다', '우선순위를 하나 정했다', '실제로 할 수 있는 조치를 썼다'], { min: 40, max: 300, sent: [2, 3], must: [['우선', '1순위']], starter: '자료를 보면 ~이므로 우선 ~', easy: ['자료를 근거로 들었다', '우선순위를 하나 정했다'], plus: '더 필요한 자료 하나를 제안했다', d: 0.4, more: { conclude: '좋은 요약은 자료가 말하는 것과 말하지 못하는 것을 나누고, 그 위에서 할 일을 제안해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '요약을 정리하세요.', columns: ['칸', '내용'], cells: [['자료가 말하는 것', ''], ['말하지 못하는 것', ''], ['우선순위', '']] }] },
      }),

      M({
        id: 'wrap.priority', type: 'wrap', title: '모둠 예방 우선순위 정하기',
        method: '모둠 우선순위 기록판', tool: 'timer', minutes: 10,
        levels: { easy: '교사가 후보 3개(떨어짐·넘어짐·끼임 막기)만 칠판에 적고 표를 받는다.', base: '후보를 모둠이 정해 표를 적는다.', challenge: '표를 적은 뒤 소수 의견(반대 의견) 하나를 활동지에 기록한다.' },
        wrap: {
          teacher: '"예방에 쓸 시간과 돈은 한정돼 있어요. 우리 모둠은 무엇부터 막을까요?" 모둠마다 후보에 표를 던지고 기록판에 적은 뒤 \'해 보았어요\'처럼 기록을 마치게 한다. 가장 많은 표가 나온 것만 옳다고 여기는 모둠에게 "표가 적었던 의견은 어떤 근거였나요? 그 근거가 자료와 맞나요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '우리 모둠 우선순위 표', fields: [{ label: '떨어짐 막기', unit: '표' }, { label: '넘어짐 막기', unit: '표' }, { label: '끼임 막기', unit: '표' }] }, prompt: '모둠에서 예방 우선순위 후보마다 받은 표 수를 기록판에 적으세요.', target: { records: true }, difficulty: 0.15 },
            { type: 'choice', prompt: '우선순위를 정할 때 가장 알맞은 기준을 고르세요.', options: ['자료와 실행 가능성을 함께 본다', '가장 무서워 보이는 것부터 한다', '가장 쉬운 것만 한다'], answer: 0, difficulty: 0.15, explain: '자료가 보여 주는 크기와, 실제로 할 수 있는지를 함께 따져 정해요.' },
            { type: 'short', prompt: '우리 모둠의 1순위와 그 근거를 한 문장으로 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '모둠 우선순위',
          items: [
            { type: 'table', prompt: '모둠 우선순위를 정리하세요.', columns: ['순위', '후보', '근거'], cells: [['1', '', ''], ['2', '', ''], ['3', '', '']] },
            { type: 'short', prompt: '표가 적었던 의견 하나와 그 근거를 기록하세요.' },
          ],
        },
      }),
      M({
        id: 'wrap.limit-check', type: 'wrap', title: '자료 해석 스스로 점검',
        method: '해석 점검 항목 스스로 점검', tool: 'kitchen', minutes: 10,
        levels: { easy: '교사가 항목 3개(출처·단위·예시 자료 여부)를 함께 읽고 표시한다.', base: '항목 4개를 스스로 표시한다.', challenge: '4개를 표시한 뒤 오늘 쓴 요약에서 고칠 문장 하나를 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"오늘 쓴 요약을 다시 읽어 봐요. 내가 자료를 바르게 읽었는지 네 가지로 점검해요." 이미 확인한 것만 표시하게 한다. "그래프 하나로 원인을 알 수 있다"는 학생에게 "오늘 보람 물류 시간 띠에서 원인을 단정할 수 있었나요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '자료 해석 점검', items: [{ id: 'src', text: '자료의 출처와 연도를 확인했다' }, { id: 'unit', text: '단위(건·%·명)를 확인했다' }, { id: 'base', text: '무엇으로 나눈 비교인지 확인했다' }, { id: 'fake', text: '예시 자료인지 실제 자료인지 밝혔다' }] }, prompt: '오늘 요약에서 이미 확인한 것을 스스로 표시하세요.', target: { selfCheck: true }, difficulty: 0.1 },
            { type: 'choice', prompt: '오늘 배운 것과 맞지 않는 말을 고르세요.', options: ['그래프 하나로 원인을 알 수 있다', '수와 비율은 다를 수 있다', '자료에는 말하지 못하는 것이 있다'], answer: 0, difficulty: 0.15, explain: '그래프는 크기와 변화를 보여 주지만, 원인은 다른 조건을 함께 봐야 판단할 수 있어요.' },
            { type: 'short', prompt: '내 요약에서 고칠 문장 하나를 고쳐 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '자료 해석 점검',
          items: [
            { type: 'check', prompt: '다음에 자료를 읽을 때 확인할 것에 표시하세요.', options: ['출처·연도', '단위', '비교 기준', '예시인지 실제인지'] },
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '사고 수가 많아도 일하는 사람 수로 나눈 ___이 낮을 수 있다.', answer: '비율' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 4. 현장실습 안전수칙 (11학년)
  // ======================================================================================================
  {
    const M = MOD('field-training', [11]);
    const NEW = { text: '현장실습 사흘째, 가상 실습생 유나에게 처음 보는 절단기 작업이 맡겨졌다. "보면 알아, 혼자 해 봐." 보호구는 받지 못했다.', who: '유나', motif: 'house', choices: [
      { id: 'just', text: '처음이라 묻기 어려워 그냥 해 본다', result: '사용법을 몰라 손이 날 가까이 간다.', impact: [{ who: '유나', text: '다칠 위험이 크다', tone: -1 }], ending: '처음이라 묻기 어려울수록 위험은 커진다.' },
      { id: 'stop', text: '작업을 멈추고 현장 담당자에게 사용법과 보호구를 묻는다', result: '담당자가 "바빠, 그냥 해"라고 한다.', impact: [{ who: '유나', text: '아직 답을 못 받았다', tone: 0 }],
        next: { text: '현장 담당자는 다시 자리를 떴다. 절단기는 그대로 켜져 있다.', choices: [
          { id: 'school', text: '기계를 끄고 학교 담당 선생님께 상황을 알린다', result: '선생님이 실습처와 이야기해 다음 날 안전교육을 받고 보호구를 받는다.', impact: [{ who: '유나', text: '배운 뒤에 작업한다', tone: 1 }],
            next: { text: '다음 주, 또 처음 보는 작업이 맡겨졌다. 현장 담당자 표정이 굳어 있다.', choices: [
              { id: 'again', text: '이번에도 시작 전에 사용법과 위험을 묻는다', result: '담당자가 직접 시범을 보여 준다.', impact: [{ who: '유나', text: '묻는 것이 습관이 된다', tone: 1 }, { who: '다음 실습생', text: '물어도 되는 분위기가 생긴다', tone: 1 }], ending: '한 번 물었다고 끝이 아니라, 새 작업마다 묻는 것이 수칙이다.' },
              { id: 'skip', text: '눈치가 보여 이번에는 그냥 한다', result: '모르는 채로 기계를 켠다.', impact: [{ who: '유나', text: '위험이 되돌아온다', tone: -1 }], ending: '눈치는 지나가지만 다친 몸은 남는다.' }] } },
          { id: 'alone', text: '혼자 해 본다', result: '보호구 없이 기계를 다룬다.', impact: [{ who: '유나', text: '다칠 위험이 크다', tone: -1 }], ending: '답을 못 받았을 때 혼자 하지 않고 다음 사람에게 알린다.' }] } }] };
    const NEW_R = [{ id: 'ask', text: '모르는 작업은 시작 전에 묻는 것이 수칙이다' }, { id: 'path', text: '현장에서 답을 못 받으면 학교 담당 선생님께 알린다' }, { id: 'obey', text: '실습생은 시키는 대로만 하면 된다', why: '실습생도 위험을 알리고 물을 수 있어요. 그래야 배우는 실습이에요.' }, { id: 'endure', text: '처음이라 묻기 어려우면 참는다', why: '처음일수록 모르는 것이 많아 위험해요.' }];
    const NEW_X = [{ id: 'next', text: '내가 물으면 다음 실습생도 묻기 쉬워진다' }, { id: 'blame', text: '다치면 실습처 책임이니 나는 상관없다', why: '책임을 따지기 전에 내 몸을 지키는 것이 먼저예요.' }];
    const NEAR = { text: '같은 실습처의 다른 실습생이 기계에 소매가 끼일 뻔했다. 다친 사람은 없다. "말하면 혼나니까 비밀로 하자."', who: '유나', motif: 'cloud', choices: [
      { id: 'report', text: '현장 담당자와 학교 담당 선생님께 아차 사고로 알린다', result: '실습처가 소매 단속과 덮개 점검을 시작한다.', impact: [{ who: '실습생들', text: '같은 사고를 막는다', tone: 1 }],
        next: { text: '그 실습생이 "왜 말했어?" 하고 서운해한다.', choices: [
          { id: 'why', text: '다친 사람이 없을 때 알려야 다음 사고를 막는다고 말한다', result: '실습생이 고개를 끄덕인다.', impact: [{ who: '실습생', text: '알리는 까닭을 이해한다', tone: 1 }], ending: '아차 사고를 알리는 것은 고자질이 아니라 예방이다.' },
          { id: 'sorry', text: '미안하다며 다음부터는 말하지 않겠다고 한다', result: '다음 아차 사고는 묻힌다.', impact: [{ who: '실습생들', text: '위험 신호가 사라진다', tone: -1 }], ending: '알리지 않기로 약속하면 다음 위험도 묻힌다.' }] } },
      { id: 'hide', text: '아무도 안 다쳤으니 비밀로 한다', result: '기계와 차림은 그대로다.', impact: [{ who: '실습생들', text: '같은 위험이 남는다', tone: -1 }], ending: '다친 사람이 없을 때가 고치기 가장 좋은 때다.' }] };
    const NEAR_R = [{ id: 'prevent', text: '다친 사람이 없는 아차 사고도 알려야 다음 사고를 막는다' }, { id: 'snitch', text: '알리면 친구를 고자질하는 것이다', why: '알리는 까닭은 사람을 탓하려는 것이 아니라 위험을 고치려는 거예요.' }];
    const SAY = (prompt, topic, checks, sent, esent, plus, starter, d) => {
      const it = { prompt, toolOptions: { topic, minChars: 40, maxChars: 400 }, target: { selfCheck: checks, sentences: sent }, difficulty: d,
        levels: { easy: { prompt: pfx(prompt, `${esent[0]}~${esent[1]}문장`), toolOptions: { starter }, target: { selfCheck: checks, sentences: esent } } } };
      if (plus) it.levels.challenge = { prompt: pfx(prompt, '기준 하나 더'), target: { selfCheck: [...checks, plus], sentences: sent } };
      return it;
    };

    MODS.push(
      M({
        id: 'intro.phase-line', type: 'intro', title: '실습 전·중·뒤에 확인할 것',
        method: '실습 단계별 확인 시간 띠', tool: 'timeline', minutes: 7,
        levels: { easy: '교사가 카드 3장(안전교육·멈추고 묻기·돌아보기)만 시간 띠에 놓는다.', base: '카드 5장을 실습 전·중·뒤 차례로 놓는다.', challenge: '5장을 놓은 뒤 빠진 확인 사항 하나를 짝과 찾아 말한다.' },
        intro: {
          teacher: '"현장실습은 일이면서 배움이에요. 실습 전·중·뒤에 무엇을 확인해야 할까요?" 카드를 섞어 보인 뒤 시연 단추로 차례를 놓는다. "실습생은 시키는 대로만 하면 된다"는 말이 나오면 "시킨 일이 위험한지 모를 때, 묻지 않으면 누가 알려 줄까요?"라고 되묻는다. 오늘은 위험할 때 누구에게 어떻게 도움을 청할지 경로를 정한다고 밝힌다.',
          student: '현장실습 전·중·뒤에 확인할 카드를 시간 차례로 놓고, 빠진 것이 없는지 생각해 보세요.',
          demo: { tool: 'timeline', options: { mode: 'order', slots: 5, axis: ['실습 전', '실습 뒤'], cards: [{ id: 'mid', text: '작업 중 모르면 멈추고 묻기' }, { id: 'pact', text: '실습 협약·근로 조건 확인하기' }, { id: 'after', text: '실습 뒤 학교 선생님과 돌아보기' }, { id: 'edu', text: '실습 전 안전교육 받기' }, { id: 'gear', text: '첫날 보호구 받고 점검하기' }], shuffle: false }, sequence: [{ order: ['pact', 'edu', 'gear', 'mid', 'after'] }] },
          art: { draw: 'a paper timeline strip from a school building to a paper workshop and back, with small paper cards for a contract, a hard hat, a question mark and a notebook', banner: '전·중·뒤에 확인해요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '현장실습 관련 법정 기준·시간은 근거 파일에 없어 다루지 않는다. 학교의 현장실습 운영 안내를 교사가 함께 보인다.',
      }),
      M({
        id: 'intro.worry-scale', type: 'intro', title: '현장실습 걱정의 크기',
        method: '현장실습 걱정 크기 눈금', tool: 'emotion', minutes: 7,
        levels: { easy: '교사가 눈금을 세 칸(조금·보통·많이)으로 읽어 주고 손으로 표시하게 한다.', base: '다섯 칸 눈금에 걱정 크기를 표시하고 그 이유를 떠올린다.', challenge: '표시한 뒤 그 걱정을 줄일 대비책 하나를 짝에게 말한다.' },
        intro: {
          teacher: '"처음 가는 실습처, 처음 보는 기계, 처음 만나는 어른들. 걱정이 되는 것이 자연스러워요." 정답이 없는 눈금이라고 먼저 말하고 시연 단추로 가운데 칸을 짚는다. "걱정하면 약한 것"이라는 말이 나오면 "걱정은 무엇을 준비해야 하는지 알려 주는 신호가 아닐까요?"라고 되묻는다. 걱정의 크기는 발표하지 않는다고 약속한다.',
          student: '현장실습 첫날을 떠올리며 걱정의 크기를 눈금에 표시하고, 무엇이 가장 걱정되는지 생각해 보세요.',
          demo: { tool: 'emotion', options: { mode: 'scale', situation: '현장실습 첫날, 처음 보는 기계 앞에서 "해 봐"라는 말을 들었다.', feeling: '걱정', steps: 5, scaleLabels: { 1: '조금', 5: '아주 많이' }, ask: '이때 걱정은 얼마나 클까요?' }, sequence: [{ level: 3 }] },
          art: { draw: 'a paper student standing at the door of a paper workshop with a small paper rain cloud above, and a paper umbrella labeled as preparation leaning by the door', banner: '걱정은 준비의 신호', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '걱정의 크기를 발표시키지 않는다. 실습 중 힘들었던 일을 묻지 않는다.',
      }),

      M({
        id: 'activity.help-path', type: 'activity', title: '처음 보는 기계 앞 실습생',
        method: '위험한 작업을 맡은 실습생 갈림길', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림길 2개(멈추고 묻기 → 학교에 알리기)까지 가서 근거를 고른다.', base: '갈림길 3개(다음 주 새 작업)까지 가서 결과를 추적한다.', challenge: '갈림길 3개를 지나 근거 카드가 더해진 판에서 근거를 하나 더 고른다.' },
        activity: {
          title: '처음 보는 기계 앞 실습생', tool: 'dilemma',
          teacher: '"\'보면 알아, 혼자 해 봐.\' 실습 사흘째 유나가 들은 말이에요. 유나는 무엇을 할 수 있을까요?" 갈림길마다 "지금 유나가 도움을 청할 수 있는 사람은 누구인가요?"라고 묻는다. \'그냥 해 본다\'를 고른 학생에게 "처음이라 묻기 어렵다는 마음과 다칠 위험, 어느 쪽이 더 오래 남을까요?"라고 되묻는다. 현장 담당자 → 학교 담당 선생님 → 보호자의 경로를 칠판에 적는다.',
          task: '실습생의 갈림길을 따라가며 도움을 청하는 경로를 찾고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('유나가 몸을 지키며 배우는 길을 끝까지 고르고 근거를 고르세요.', NEW, [['stop', 'school', 'again']], NEW_R, ['ask', 'path'], { e: 2, b: 3, chal: { reasons: NEW_X, good: ['next'] }, d: 0.4 }),
            EXPLOREQ('혼자 해 보는 길도 끝까지 가 보고 결과를 견주세요.', NEW, NEW_R, ['혼자 한 길에서 유나에게 남은 위험을 짚었다', '도움을 청한 길과 무엇이 달랐는지 말할 수 있다'], { d: 0.35 }),
            DILQ('아차 사고를 본 유나가 고를 길과 근거를 고르세요.', NEAR, [['report', 'why']], NEAR_R, ['prevent'], { e: 1, b: 2, d: 0.35, more: { conclude: '모르면 멈추고 묻고, 답이 없으면 다음 사람에게 알리고, 아차 사고도 알려요. 그것이 실습생의 안전 경로예요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '유나가 학교 담당 선생님께 상황을 알릴 때 할 말을 두 문장으로 쓰세요.' }] },
        notes: '가상 인물이다. 학생이 실습·아르바이트에서 겪은 일을 꺼내게 하지 않는다. 실제 고민이 있는 학생은 따로 상담으로 잇는다.',
      }),
      M({
        id: 'activity.prep-check', type: 'activity', title: '실습 첫날 준비 점검',
        method: '실습 준비 항목 고르기', tool: 'kitchen', minutes: 16,
        levels: { easy: '항목 4개 가운데 준비할 것을 고른다.', base: '항목 6개 가운데 준비할 것을 고르고, 첫날 물어볼 안전 질문을 고른다.', challenge: '항목 6개를 고른 뒤, 실습 전·중·뒤로 확인할 것을 나누고 내가 물어볼 질문을 하나 더 활동지에 쓴다.' },
        activity: {
          title: '실습 첫날 준비 점검', tool: 'kitchen',
          teacher: '"실습 첫날 아침, 가방 말고 머릿속에 챙길 것은 무엇일까요?" 점검표를 고르게 한 뒤 고르지 않은 항목의 까닭을 묻는다. \'시키는 대로 다 하겠다고 다짐한다\'를 고른 학생에게 "시킨 일이 위험할 때도 그 다짐을 지켜야 할까요?"라고 묻는다. 담당자와 선생님의 연락 방법은 수업 중에 실제 번호를 적지 않고 각자 휴대전화에 저장한다고 말한다.',
          task: '실습 첫날 준비할 것과 물어볼 안전 질문을 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            CHECKQ('실습 첫날 전에 준비할 것만 표시하세요.', '실습 첫날 준비', [['pact', '실습 협약서 내용을 확인한다', true], ['edu', '실습 전 안전교육 일정을 확인한다', true], ['obey', '무엇이든 시키는 대로 하겠다고 다짐한다', false], ['who', '현장 담당자 이름과 연락 방법을 안다', true], ['school', '학교 담당 선생님 연락 방법을 저장한다', true], ['hide', '모르는 것은 티 내지 않기로 한다', false]], { k: 4, d: 0.25 }),
            CHECKQ('첫날 현장 담당자에게 물어볼 안전 질문만 표시하세요.', '첫날 안전 질문', [['exit', '비상시 대피 길은 어디인가요?', true], ['gear', '제가 쓸 보호구는 무엇인가요?', true], ['first', '위험할 때 누구에게 먼저 알리나요?', true], ['fast', '얼마나 빨리 끝내야 하나요?', false], ['new', '처음 하는 작업은 누가 알려 주시나요?', true], ['photo', '작업장 사진을 올려도 되나요?', false]], { k: 4, d: 0.3 }),
            SORTQ('확인할 것을 실습 전·중·뒤 칸에 나누세요.', ['실습 전', '실습 중', '실습 뒤'], [
              ['안전교육을 받는다', '보호구를 받아 점검한다'],
              ['모르면 멈추고 묻는다', '아차 사고를 알린다'],
              ['학교 선생님과 돌아본다', '고칠 점을 기록한다'],
            ], { k: 1, d: 0.3, opt: { autoMotif: false }, more: { conclude: '준비는 첫날 전에, 묻기와 알리기는 실습 중에, 돌아보기는 실습 뒤에 — 세 때마다 할 일이 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '첫날 내가 꼭 물어볼 안전 질문 하나를 더 쓰세요.' }] },
      }),
      M({
        id: 'activity.talk-script', type: 'activity', title: '위험을 묻는 말 대본',
        method: '담당자에게 위험을 묻는 대본 쓰기', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '문장 틀을 보고 2~3문장으로 쓴다.', base: '4~5문장 대본을 쓰고 기준표로 점검한다.', challenge: '4~5문장에 \'담당자가 그냥 하라고 할 때 이어 할 말\' 기준이 더해진다.' },
        activity: {
          title: '위험을 묻는 말 대본', tool: 'rubric-writing',
          teacher: '"묻기가 어려운 까닭은 무엇을 어떻게 말할지 몰라서일 때가 많아요. 오늘은 그 말을 미리 써 둬요." 대본은 공손하되 분명하게, 무엇이 위험한지와 무엇을 바라는지를 넣게 한다. "죄송한데 혹시…"로만 끝나는 대본을 쓴 학생에게 "담당자가 이 말을 듣고 무엇을 해 주면 될지 알 수 있을까요?"라고 묻는다. 짝과 대본을 소리 내어 읽어 보게 한다.',
          task: '현장 담당자에게 위험을 묻고 멈추겠다고 말하는 대본을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            SAY('처음 보는 기계의 사용법과 위험을 묻는 대본을 쓰세요.', '처음 보는 기계를 맡았을 때 현장 담당자에게 사용법·위험·보호구를 묻는 대본을 쓰세요.', ['무엇이 처음인지 밝혔다', '알고 싶은 것(사용법·위험·보호구)을 구체적으로 물었다', '공손하지만 분명하게 썼다'], [4, 5], [2, 3], '담당자가 그냥 하라고 할 때 이어 할 말을 넣었다', '처음 하는 작업이라서 ~을 여쭤봐도 될까요?', 0.35),
            SAY('위험해 보여 작업을 멈추겠다고 말하는 대본을 쓰세요.', '보호구 없이 작업하라는 말을 들었을 때 멈추고 알리는 대본을 쓰세요.', ['무엇이 위험한지 썼다', '멈추겠다는 말을 분명히 했다', '무엇을 바라는지(보호구·교육) 썼다'], [4, 5], [2, 3], '담당자가 그냥 하라고 할 때 이어 할 말을 넣었다', '보호구 없이 하면 ~이 위험해서 잠시 멈추겠습니다.', 0.4),
            SAY('현장에서 답을 못 받아 학교 담당 선생님께 알리는 대본을 쓰세요.', '현장 담당자에게 답을 못 받았을 때 학교 담당 선생님께 상황을 알리는 대본을 쓰세요.', ['언제·어떤 작업인지 사실대로 썼다', '현장에서 이미 물어본 것을 썼다', '바라는 도움을 썼다'], [4, 5], [2, 3], '실습처를 탓하는 말 대신 사실로 썼다', '선생님, 오늘 ~ 작업을 맡았는데 ~', 0.4),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내 대본에서 가장 말하기 어려운 문장 하나를 골라 더 말하기 쉽게 고쳐 쓰세요.' }] },
      }),

      M({
        id: 'wrap.route-web', type: 'wrap', title: '도움을 청하는 경로',
        method: '실습처·학교·가족 연락 경로 정리', tool: 'mindmap', minutes: 10,
        levels: { easy: '교사가 실습처·학교 두 가지만 함께 채운다.', base: '실습처·학교·가족 세 가지에 연락 경로 카드를 단다.', challenge: '세 가지를 채운 뒤 위험한 순간 누구에게 먼저 알릴지 차례를 활동지에 쓴다.' },
        wrap: {
          teacher: '"위험한 순간, 내가 알릴 수 있는 사람은 생각보다 많아요. 세 곳으로 나눠 정리해 봐요." 마인드맵을 채운 뒤 출구 질문으로 넘어간다. "학교 선생님께 말하면 실습처에 피해가 간다"는 학생에게 "선생님은 실습생을 지키는 역할도 맡고 있어요. 말하지 않으면 누가 알 수 있을까요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '도움을 청하는 경로', slots: ['실습처', '학교', '가족'], cards: ['현장 담당자에게 바로 알린다', '실습처 안전 담당자에게 알린다', '학교 담당 선생님께 알린다', '담임 선생님과 상의한다', '보호자에게 이야기한다', '보호자와 함께 학교에 알린다'] }, prompt: '연락 경로 카드를 실습처·학교·가족 가지에 다세요.', target: { sort: { 실습처: ['현장 담당자에게 바로 알린다', '실습처 안전 담당자에게 알린다'], 학교: ['학교 담당 선생님께 알린다', '담임 선생님과 상의한다'], 가족: ['보호자에게 이야기한다', '보호자와 함께 학교에 알린다'] } }, difficulty: 0.2 },
            { type: 'choice', prompt: '오늘 배운 것과 맞는 말을 고르세요.', options: ['실습생은 시키는 대로만 하면 된다', '처음이라 묻기 어려우면 참는다', '현장에서 답을 못 받으면 학교 담당 선생님께 알린다'], answer: 2, difficulty: 0.15, explain: '현장에서 답을 못 받으면 멈추고 학교 담당 선생님께 알려요. 실습생도 위험을 말할 수 있어요.' },
            { type: 'short', prompt: '위험한 순간 내가 가장 먼저 알릴 사람과 그 까닭을 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '나의 도움 경로',
          items: [
            { type: 'table', prompt: '위험할 때 알릴 차례를 정하세요(실제 연락처는 적지 않아요).', columns: ['차례', '누구에게', '어떻게'], cells: [['1', '', ''], ['2', '', ''], ['3', '', '']] },
            { type: 'short', prompt: '도움을 청하기 어려운 마음이 들 때 나에게 해 줄 말을 쓰세요.' },
          ],
        },
        notes: '연락처는 수업 중에 적지 않고 각자 휴대전화에 저장한다. 기관 이름·전화번호는 근거 파일에 없어 넣지 않았다 — 학교가 안내하는 도움처는 교사가 덧붙인다.',
      }),
      M({
        id: 'wrap.pledge', type: 'wrap', title: '실습에서 지킬 나의 수칙',
        method: '지킬 수칙 스스로 점검', tool: 'timer', minutes: 10,
        levels: { easy: '교사가 점검 항목 3개를 골라 함께 읽고 표시한다.', base: '점검 항목 5개를 스스로 표시한다.', challenge: '5개를 표시한 뒤 짝과 서로의 수칙을 하나씩 나눈다.' },
        wrap: {
          teacher: '"오늘 정한 경로와 대본을 실습에서 쓰려면 지금 나와 약속해 둬야 해요." 점검 항목을 스스로 표시하게 하고, 짝과 하나씩 나눈다. "실습 가서 생각하면 된다"는 학생에게 "처음 보는 기계 앞에서 새로 생각할 여유가 있을까요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '실습에서 지킬 나의 수칙' }, prompt: '실습에서 지킬 것을 스스로 표시하세요.', target: { selfCheck: ['처음 하는 작업은 시작 전에 묻는다', '보호구 없이 위험한 작업을 하지 않는다', '위험하면 멈추고 알린다', '아차 사고도 알린다', '답을 못 받으면 학교 담당 선생님께 알린다'] }, difficulty: 0.1 },
            { type: 'choice', prompt: '다친 사람이 없는 아차 사고를 봤을 때 알맞은 행동을 고르세요.', options: ['아무도 안 다쳤으니 넘어간다', '현장 담당자와 학교 선생님께 알린다', '다친 사람이 생기면 그때 알린다'], answer: 1, difficulty: 0.15, explain: '다친 사람이 없을 때 알려야 다음 사고를 막을 수 있어요.' },
            { type: 'short', prompt: '짝과 나눈 수칙 가운데 내 것에 더하고 싶은 것을 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '나의 실습 수칙',
          items: [
            { type: 'check', prompt: '실습 전에 해 둘 것에 표시하세요.', options: ['안전 질문 정하기', '대본 소리 내어 읽기', '연락 방법 저장하기', '보호구 확인하기'] },
            { type: 'short', prompt: '내 실습 수칙 하나를 내 말로 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 5. 내 진로 직업의 위험과 대비 (12학년)
  // ======================================================================================================
  {
    const M = MOD('career-risk', [12]);
    const TWO = { text: '졸업을 앞둔 가상 인물 지호에게 두 일자리 제안이 왔다. 가 회사는 급여가 조금 더 높지만 안전교육이 없고 보호구는 직접 사야 한다. 나 회사는 급여가 조금 낮지만 첫 주에 안전교육을 하고 보호구를 준다.', who: '지호', motif: 'house', choices: [
      { id: 'pay', text: '급여가 높은 가 회사를 고른다', result: '첫 주부터 교육 없이 현장에 들어간다.', impact: [{ who: '지호', text: '수입은 조금 많다', tone: 1 }, { who: '지호', text: '모르는 위험에 바로 노출된다', tone: -1 }],
        next: { text: '한 달 뒤, 낡은 보호안경을 계속 쓰고 있다. 새것은 내 돈으로 사야 한다.', choices: [
          { id: 'buy', text: '내 돈으로 새 보호안경을 사고, 회사에 보호구 지급을 건의한다', result: '회사가 건의를 검토하겠다고 한다.', impact: [{ who: '지호', text: '당장은 안전해진다', tone: 1 }, { who: '동료들', text: '건의가 함께 걸린다', tone: 0 }], ending: '개인의 대비는 지금을 지키고, 조직에 건의하는 것은 모두를 지킨다.' },
          { id: 'old', text: '아직 쓸 만하니 그냥 쓴다', result: '긁힌 안경 너머로 시야가 흐리다.', impact: [{ who: '지호', text: '눈이 위험해진다', tone: -1 }], ending: '급여의 차이보다 다친 뒤의 손실이 더 클 수 있다.' }] } },
      { id: 'safe', text: '안전교육과 보호구가 있는 나 회사를 고른다', result: '첫 주에 작업별 위험과 보호구를 배운다.', impact: [{ who: '지호', text: '위험을 알고 일을 시작한다', tone: 1 }],
        next: { text: '친구가 "가 회사가 더 받는데 왜 거기 갔어?"라고 묻는다.', choices: [
          { id: 'explain', text: '안전교육·보호구가 급여만큼 중요한 조건이라고 설명한다', result: '친구가 자기 일자리의 조건도 다시 본다.', impact: [{ who: '친구', text: '일자리를 보는 기준이 넓어진다', tone: 1 }],
            next: { text: '1년 뒤 지호는 신입 교육을 돕게 되었다.', choices: [
              { id: 'teach', text: '자기가 배운 안전교육을 신입에게 그대로 전한다', result: '신입들이 묻기 쉬운 분위기가 생긴다.', impact: [{ who: '신입', text: '안전하게 시작한다', tone: 1 }], ending: '안전한 일터를 고르는 것에서 안전한 일터를 만드는 것으로 이어진다.' },
              { id: 'skip', text: '바쁘니 교육은 짧게 넘긴다', result: '신입이 모르는 채 현장에 들어간다.', impact: [{ who: '신입', text: '위험에 노출된다', tone: -1 }], ending: '내가 받은 교육이 다음 사람에게서 끊긴다.' }] } },
          { id: 'regret', text: '급여가 아쉬워 다음에는 가 회사로 옮기겠다고 한다', result: '안전 조건을 따지지 않고 옮길 준비를 한다.', impact: [{ who: '지호', text: '위험을 다시 고려하지 않는다', tone: -1 }], ending: '일자리를 고를 때마다 안전 조건을 함께 본다.' }] } }] };
    const TWO_R = [{ id: 'cond', text: '안전교육과 보호구는 급여만큼 중요한 일자리 조건이다' }, { id: 'both', text: '위험 대비는 개인과 회사가 함께 한다' }, { id: 'company', text: '위험은 회사만 책임지면 된다', why: '회사의 책임이 크지만, 나도 위험을 알고 묻고 알리는 대비가 필요해요.' }, { id: 'money', text: '급여가 높으면 위험은 감수해도 된다', why: '다친 뒤의 손실은 급여 차이로 메우기 어려워요.' }];
    const TWO_X = [{ id: 'pass', text: '내가 배운 안전을 다음 사람에게 전하는 것도 대비다' }, { id: 'luck', text: '사고는 운이라 대비해도 소용없다', why: '대비하면 같은 상황에서도 위험이 줄어요.' }];
    const COOK = [['뜨거운 기름 화상', 5], ['젖은 바닥 미끄러짐', 4], ['칼 다루기', 4], ['무거운 냄비 들기', 3], ['오래 서 있기', 2]];
    const BAR = (title, data, extra) => Object.assign({ type: 'bar', mode: 'build', title, yLabel: '걱정 점수', xLabel: '위험 항목', unit: '점', max: 5, data }, extra || {});

    MODS.push(
      M({
        id: 'intro.career-web', type: 'intro', title: '희망 직업에 숨은 위험',
        method: '희망 직업 위험 마인드맵', tool: 'mindmap', minutes: 7,
        levels: { easy: '교사가 조리사·간호사 두 직업만 함께 채운다.', base: '조리사·간호사·프로그래머 세 직업에 위험 카드를 단다.', challenge: '세 직업을 채운 뒤 카드 하나의 근거를 어디서 찾을지(인터뷰·공식 자료) 말한다.' },
        intro: {
          teacher: '"졸업하면 어떤 일을 하고 싶나요? 그 일에는 어떤 위험이 있을까요?" 시연 단추로 세 직업 가지에 위험 카드가 달리는 모습을 보여 준다. "사무직은 위험이 없다"는 말이 나오면 "프로그래머 가지에 달린 카드를 볼까요?"라고 되묻는다. 위험을 아는 것이 그 직업을 포기하는 것이 아니라 준비하는 것이라는 점을 짚는다.',
          student: '세 직업 가지에 떠오르는 위험 카드를 달아 보고, 내 희망 직업에는 어떤 위험이 있을지 떠올려 보세요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '직업과 위험', slots: ['조리사', '간호사', '프로그래머'], cards: ['뜨거운 기름 화상', '환자를 옮기다 허리 부담', '화면을 오래 보는 눈 피로', '젖은 바닥 미끄러짐', '감염병 노출', '오래 앉아 생기는 허리·손목 부담'] }, sequence: [{ sort: { 조리사: ['뜨거운 기름 화상', '젖은 바닥 미끄러짐'], 간호사: ['환자를 옮기다 허리 부담', '감염병 노출'], 프로그래머: ['화면을 오래 보는 눈 피로', '오래 앉아 생기는 허리·손목 부담'] } }] },
          art: { draw: 'a paper mind map with three paper job icons — a chef hat, a nurse cap and a laptop — each branch holding small paper warning cards', banner: '모든 일에 위험이 있어요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      M({
        id: 'intro.day-line', type: 'intro', title: '배달 기사의 하루와 위험',
        method: '가상 직업인의 하루 일과 시간 띠', tool: 'timeline', minutes: 7,
        levels: { easy: '교사가 카드 3장(아침·점심·밤)만 시간 띠에 놓는다.', base: '카드 5장을 하루 차례로 놓고 위험한 때를 짚는다.', challenge: '5장을 놓은 뒤 위험한 때마다 어울리는 대비를 말한다.' },
        intro: {
          teacher: '"가상 배달 기사 태오의 하루를 따라가 볼까요? 언제가 가장 위험할까요?" 카드를 섞어 보인 뒤 시연 단추로 하루 차례를 놓는다. "운전만 조심하면 된다"는 말이 나오면 "폭염 속 대기, 피곤한 밤은 운전과 상관없을까요?"라고 되묻는다. 같은 직업도 시간·날씨·피로에 따라 위험이 달라진다는 점을 짚는다.',
          student: '가상 배달 기사의 하루 카드를 시간 차례로 놓고, 어느 때 어떤 위험이 있는지 짚어 보세요.',
          demo: { tool: 'timeline', options: { mode: 'order', slots: 5, axis: ['아침', '밤'], cards: [{ id: 'eve', text: '저녁: 비 오는 길을 달린다' }, { id: 'am', text: '아침: 오토바이 브레이크를 점검한다' }, { id: 'night', text: '밤: 피곤한 채 마지막 배달을 한다' }, { id: 'noon', text: '점심: 주문이 몰려 서두른다' }, { id: 'pm', text: '오후: 폭염 속에서 기다린다' }], shuffle: false }, sequence: [{ order: ['am', 'noon', 'pm', 'eve', 'night'] }] },
          art: { draw: 'a paper timeline from a paper sunrise to a paper moon, a small paper delivery scooter moving along it past a paper sun, rain clouds and a sleepy paper moon', banner: '하루 안에도 위험이 바뀌어요', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
        notes: '가상 인물이다. 실제 사고 사례를 다루지 않는다.',
      }),

      M({
        id: 'activity.risk-matrix', type: 'activity', title: '직업 위험 걱정 점수 그래프',
        method: '조사한 위험 항목 막대그래프 정리', tool: 'chart', minutes: 16,
        levels: { easy: '위험 항목 3개의 막대만 만든다.', base: '위험 항목 5개의 막대를 만들고 가장 높은 항목을 읽는다.', challenge: '두 직업의 그래프를 견주어 공통으로 높은 위험을 찾는다.' },
        activity: {
          title: '직업 위험 걱정 점수 그래프', tool: 'chart',
          teacher: '"모둠이 조사한 위험마다 걱정 점수(1~5점)를 매겨 그래프로 정리해요. 오늘 점수는 예시예요 — 실제 조사로 바꿔 넣어도 돼요." 막대를 만든 뒤 가장 높은 항목부터 대비하자고 말한다. "점수가 낮은 위험은 무시해도 된다"는 학생에게 "점수가 낮아도 날마다 되풀이되는 위험은 어떨까요?"라고 묻는다. 점수는 우리가 매긴 판단이라 근거를 함께 적어야 한다는 점을 짚는다.',
          task: '조사한 위험 항목의 걱정 점수(예시)로 막대그래프를 만들고 읽어요.', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            { prompt: '표를 보고 조리사의 위험 항목별 걱정 점수(예시) 막대그래프를 완성하세요.', toolOptions: BAR('조리사 위험 걱정 점수(모둠 조사 예시)', COOK, { showTable: true }), target: { build: true }, difficulty: 0.25,
              levels: { easy: { prompt: '표를 보고 조리사의 걱정 점수 막대그래프를 완성하세요(항목 3개).', toolOptions: BAR('조리사 위험 걱정 점수(모둠 조사 예시)', COOK.slice(0, 3), { showTable: true }), target: { build: true } } } },
            { prompt: '조리사 그래프에서 가장 먼저 대비할 위험을 고르세요.', toolOptions: { type: 'bar', mode: 'read', title: '조리사 위험 걱정 점수(모둠 조사 예시)', yLabel: '걱정 점수', xLabel: '위험 항목', unit: '점', max: 5, data: COOK, question: '가장 높은 막대는?', choices: COOK.map((x) => x[0]) }, target: { pick: 0 }, difficulty: 0.2 },
            { prompt: '표를 보고 간호사의 위험 항목별 걱정 점수(예시) 막대그래프를 완성하세요.', toolOptions: BAR('간호사 위험 걱정 점수(모둠 조사 예시)', [['환자 옮기기 허리 부담', 5], ['감염병 노출', 4], ['밤 근무 피로', 4]], { showTable: true }), target: { build: true }, difficulty: 0.3 },
            { prompt: '두 그래프를 견주어 볼 때 두 직업에 공통으로 있는 위험을 고르세요.', toolOptions: { type: 'bar', mode: 'read', title: '두 직업 공통 위험(모둠 조사 예시)', yLabel: '걱정 점수', xLabel: '위험 항목', unit: '점', max: 5, data: [['무거운 것 들기(허리)', 4], ['미끄러짐', 3], ['화면 보기', 1]], question: '두 직업 모두에 있는 위험은?', choices: ['무거운 것 들기(허리)', '화면 보기', '없다'], why: ['', '두 직업 모두 화면을 오래 보는 일이 중심은 아니에요.', '조리사의 냄비, 간호사의 환자 옮기기 모두 허리에 부담을 줘요.'] }, target: { pick: 0 }, difficulty: 0.4, conclude: '직업은 달라도 허리처럼 공통으로 대비할 위험이 있어요. 그래프는 무엇부터 대비할지 정하는 도구예요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 희망 직업의 위험 세 가지와 걱정 점수, 근거를 쓰세요.', columns: ['위험', '걱정 점수(1~5)', '근거'], cells: [['', '', ''], ['', '', ''], ['', '', '']] }] },
        notes: '점수는 모둠이 매긴 예시 판단이다. 실제 위험 정도를 나타내는 통계가 아니다.',
      }),
      M({
        id: 'activity.choice-dilemma', type: 'activity', title: '급여와 안전, 두 일자리',
        method: '급여와 안전 환경이 다른 일자리 갈림길', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림길 2개까지 가서 근거를 고른다.', base: '갈림길 3개까지 가서 1년 뒤 결과까지 추적한다.', challenge: '갈림길 3개를 지나 반론 카드가 더해진 판에서 근거를 하나 더 고른다.' },
        activity: {
          title: '급여와 안전, 두 일자리', tool: 'dilemma',
          teacher: '"급여가 조금 더 높은 일자리와 안전교육·보호구가 있는 일자리, 무엇을 고를까요? 정답을 고르기보다 무엇을 따졌는지가 중요해요." 갈림길마다 누가 영향을 받는지 소리 내어 읽게 한다. "위험은 회사만 책임진다"는 학생에게 "회사가 보호구를 안 줄 때 지호가 할 수 있는 일은 없을까요?"라고 묻는다. 개인의 대비와 조직의 대비가 함께 있어야 한다는 점을 짚는다.',
          task: '두 일자리 갈림길을 따라가며 결과를 보고 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DILQ('지호가 몸과 진로를 함께 지키는 길을 끝까지 고르고 근거를 고르세요.', TWO, [['safe', 'explain', 'teach'], ['pay', 'buy']], TWO_R, ['cond', 'both'], { e: 2, b: 3, chal: { reasons: TWO_X, good: ['pass'] }, d: 0.45 }),
            EXPLOREQ('고르지 않은 일자리의 길도 끝까지 가 보고 결과를 견주세요.', TWO, TWO_R, ['다른 길에서 지호가 얻은 것과 잃은 것을 짚었다', '개인 대비와 조직 대비를 구별했다'], { d: 0.35 }),
            { prompt: '면접 끝에 "궁금한 것 있어요?"라는 말을 들었어요. 고를 길과 근거를 고르세요.', toolOptions: { title: '면접 마지막 질문', scene: { text: '면접 끝에 면접관이 "궁금한 것 있어요?"라고 묻는다. 지호는 안전교육이 있는지 궁금하지만 괜히 까다로워 보일까 걱정된다.', who: '지호', motif: 'house', choices: [{ id: 'ask', text: '"입사하면 안전교육과 보호구는 어떻게 받나요?" 하고 묻는다', result: '면접관이 첫 주 교육 일정을 설명해 준다.', ending: '안전 조건을 묻는 것은 까다로운 것이 아니라 일을 제대로 하려는 준비다.' }, { id: 'none', text: '"없습니다" 하고 나온다', result: '안전교육이 있는지 모른 채 입사를 결정해야 한다.', ending: '묻지 않으면 중요한 조건을 모른 채 고르게 된다.' }] }, reasons: [{ id: 'right', text: '안전 조건은 일자리를 고를 때 확인할 정보다' }, { id: 'prep', text: '묻는 사람이 위험을 알고 준비하는 사람이다' }, { id: 'rude', text: '안전을 물으면 일할 의지가 없어 보인다', why: '안전을 묻는 것은 일을 오래 잘하려는 마음을 보여 줘요.' }] }, target: { path: ['ask'], reasons: ['right', 'prep'] }, difficulty: 0.3, conclude: '일자리를 고를 때 안전교육·보호구·알릴 사람을 묻는 것도 진로 준비예요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내가 일자리를 고를 때 급여 말고 꼭 확인할 안전 조건 두 가지를 쓰세요.' }] },
        notes: '급여 액수·최저임금 같은 수치는 근거 파일에 없어 쓰지 않는다. 근로계약서·근로 조건은 노동인권교육에서 따로 다룬다.',
      }),
      M({
        id: 'activity.plan-write', type: 'activity', title: '희망 직업 위험 대비 계획',
        method: '희망 직업의 위험과 대비 계획 쓰기', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '칸마다 문장 틀을 보고 쓰고 기준 2개로 점검한다.', base: '위험·개인 대비·조직 대비 칸을 기준 3개로 점검한다.', challenge: '마지막 칸에 \'조직(회사·업계)에 낼 제안 하나\' 기준이 더해진다.' },
        activity: {
          title: '희망 직업 위험 대비 계획', tool: 'rubric-writing',
          teacher: '"오늘 조사한 위험을 내 진로 계획에 넣어요. 나는 무엇을 준비하고, 일터에는 무엇을 바랄까요?" 쓰기 전에 개인 대비(내가)와 조직 대비(회사·동료가)를 칠판에 나눠 적는다. "조심하겠다"만 쓴 학생에게 "그 조심은 어떤 행동인가요? 언제부터 할 수 있나요?"라고 묻는다.',
          task: '희망 직업의 위험과 대비 계획을 칸마다 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('희망 직업의 주요 위험을 2~3문장으로 쓰세요.', '내 희망 직업의 사고 위험과 직업병 위험을 하나씩 쓰세요.', ['직업 이름을 밝혔다', '사고 위험과 직업병 위험을 나눠 썼다', '조사한 근거를 밝혔다'], { min: 40, max: 300, sent: [2, 3], starter: '내 희망 직업 ~의 사고 위험은 ~, 직업병 위험은 ~', easy: ['직업 이름을 밝혔다', '사고 위험과 직업병 위험을 나눠 썼다'], d: 0.35 }),
            RWQ('내가 할 대비를 2~3문장으로 쓰세요.', '그 위험에 대비해 지금부터·취업 뒤에 내가 할 일을 쓰세요.', ['지금부터 할 일을 썼다', '취업 뒤 할 일을 썼다', '구체적인 행동으로 썼다'], { min: 40, max: 300, sent: [2, 3], must: [['지금', '취업']], starter: '지금부터 나는 ~을 하고, 취업 뒤에는 ~', easy: ['지금부터 할 일을 썼다', '구체적인 행동으로 썼다'], d: 0.4 }),
            RWQ('일터(조직)가 할 대비를 2~3문장으로 쓰세요.', '회사·동료가 함께 해야 할 대비와, 그것이 없을 때 내가 할 일을 쓰세요.', ['조직이 할 대비를 썼다', '없을 때 내가 묻거나 알릴 방법을 썼다', '개인 대비와 구별했다'], { min: 40, max: 300, sent: [2, 3], starter: '일터는 ~을 해야 하고, 없으면 나는 ~', easy: ['조직이 할 대비를 썼다', '없을 때 내가 묻거나 알릴 방법을 썼다'], plus: '조직(회사·업계)에 낼 제안 하나를 썼다', d: 0.4, more: { conclude: '진로 계획에 안전을 넣으면, 위험을 아는 것이 포기가 아니라 준비가 돼요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 진로 안전 계획을 정리하세요.', columns: ['칸', '내 계획'], cells: [['위험', ''], ['개인 대비', ''], ['조직 대비', '']] }] },
      }),
      M({
        id: 'activity.interview', type: 'activity', title: '직업인 안전 인터뷰 준비',
        method: '인터뷰 질문 흐름 정하기', tool: 'story', minutes: 16,
        levels: { easy: '인터뷰 질문 카드 3장을 흐름대로 놓는다.', base: '카드 5장을 흐름대로 놓고 좋은 질문을 고른다.', challenge: '카드 5장을 놓은 뒤 질문마다 이어 물을 후속 질문을 짝짓는다.' },
        activity: {
          title: '직업인 안전 인터뷰 준비', tool: 'story',
          teacher: '"희망 직업에서 일하는 어른 한 분을 인터뷰한다면, 무엇을 어떤 차례로 물을까요?" 질문 카드를 흐름대로 놓게 한다. "가장 크게 다친 일이 뭐예요?"처럼 아픈 경험을 캐묻는 질문을 고른 학생에게 "그 질문 대신, 하루 중 가장 조심하는 작업을 물으면 어떨까요?"라고 묻는다. 인터뷰는 상대의 경험을 존중하며 대비 방법을 배우는 시간이라는 점을 짚는다.',
          task: '직업인 안전 인터뷰의 질문 흐름을 정하고 좋은 질문·후속 질문을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDERQ('인터뷰 질문 카드를 흐름대로 놓으세요.', ['인터뷰 목적을 말하고 허락을 구한다', '하루 일과를 묻는다', '하루 중 가장 조심하는 작업을 묻는다', '그 위험을 줄이는 방법을 묻는다', '신입에게 해 줄 안전 조언을 묻는다'], { k: 3, d: 0.3 }),
            PICKQ('안전 인터뷰에 알맞은 질문만 고르세요.', ['"처음 일할 때 가장 몰랐던 위험은 무엇인가요?"', '"위험을 줄이려고 일터가 바꾼 것이 있나요?"'], ['"가장 크게 다친 일을 자세히 말해 주세요"', '"월급이 얼마인가요?"'], { d: 0.3, opt: { basket: '알맞은 질문' } }),
            MATCHQ('질문과 이어 물을 후속 질문을 짝지으세요.', [['가장 조심하는 작업을 묻기', '"그 작업에서 무엇을 쓰시나요?"'], ['줄이는 방법을 묻기', '"그 방법은 누가 정했나요?"'], ['신입 조언을 묻기', '"신입이 가장 많이 놓치는 것은요?"']], { k: 2, extra: ['"다른 직업으로 바꿀 생각은 없나요?"'], d: 0.4, opt: { topic: '후속 질문' }, more: { conclude: '좋은 인터뷰는 아픈 경험을 캐묻지 않고, 대비 방법을 깊게 묻는 질문으로 이어져요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '인터뷰하고 싶은 직업인과, 꼭 묻고 싶은 질문 하나를 쓰세요(실제 이름 대신 직업으로).' }] },
        notes: '인터뷰 대상의 개인정보(이름·연락처)를 활동지에 적지 않는다. 다친 경험을 캐묻지 않도록 질문을 미리 점검한다.',
      }),

      M({
        id: 'wrap.share-timer', type: 'wrap', title: '모둠 계획 돌아가며 발표',
        method: '모둠 돌아가며 발표와 피드백 기록', tool: 'timer', minutes: 10,
        levels: { easy: '교사가 발표 2명만 정해 시간을 재고 피드백 수를 함께 센다.', base: '4명이 돌아가며 발표하도록 타이머를 맞추고 피드백 수를 적는다.', challenge: '발표 뒤 질문을 받는 시간까지 넣어 진행하고, 받은 질문을 활동지에 적는다.' },
        wrap: {
          teacher: '"오늘 세운 진로 안전 계획을 모둠에서 돌아가며 나눠요. 우리 반 약속: 한 사람 2분 발표, 1분 질문." 타이머를 맞춘 뒤 발표를 시작하고, 들은 사람은 \'좋은 점 하나, 물어볼 것 하나\'를 말한다. "내 계획은 부끄러워서"라는 학생에게 "친구의 질문이 내 계획의 빈칸을 찾아 줄 수 있어요"라고 말한다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '모둠 발표 시간(우리 반 약속)', timeUnit: 'min', plan: { work: 3, rest: 2, rounds: 2 } }, prompt: '우리 반 약속대로 한 사람 2분 발표, 1분 질문을 4명이 돌아가며 하도록 타이머를 맞추세요.', target: { plan: { work: 2, rest: 1, rounds: 4 } }, difficulty: 0.2 },
            { type: 'choice', prompt: '친구 발표에 줄 피드백으로 가장 알맞은 것을 고르세요.', options: ['"별로야"', '"개인 대비는 좋고, 회사가 할 일도 넣으면 좋겠어"', '"내 계획이 더 나아"'], answer: 1, difficulty: 0.15, explain: '좋은 점과 더할 점을 구체적으로 말하면 계획이 단단해져요.' },
            { type: 'short', prompt: '친구에게 받은 피드백 가운데 내 계획에 넣을 것을 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '모둠 발표 기록',
          items: [
            { type: 'table', prompt: '모둠 발표에서 들은 피드백을 적으세요.', columns: ['발표한 사람(역할로)', '좋은 점', '더할 점'], cells: [['1', '', ''], ['2', '', ''], ['3', '', ''], ['4', '', '']] },
            { type: 'short', prompt: '내가 받은 질문 하나와 내 대답을 쓰세요.' },
          ],
        },
        notes: '\'2분 발표·1분 질문\'은 우리 반 약속(연습 값)이다.',
      }),
      M({
        id: 'wrap.self-check', type: 'wrap', title: '진로 준비 속 안전 점검',
        method: '진로 준비 안전 항목 스스로 점검', tool: 'kitchen', minutes: 10,
        levels: { easy: '교사가 항목 3개를 골라 함께 읽고 표시한다.', base: '항목 5개를 스스로 표시한다.', challenge: '5개를 표시한 뒤 다음에 할 일 하나를 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"진로 준비에는 자격증·포트폴리오만 있는 게 아니에요. 안전 준비도 넣어 봐요." 이미 하고 있는 것만 표시하게 한다. "취업하면 회사가 다 알려 준다"는 학생에게 "오늘 가 회사처럼 교육이 없는 곳이라면요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '진로 준비 속 안전', items: [{ id: 'know', text: '희망 직업의 주요 위험을 안다' }, { id: 'gear', text: '그 직업의 보호구 이름을 안다' }, { id: 'ask', text: '일자리 조건에서 안전교육을 확인할 줄 안다' }, { id: 'talk', text: '위험할 때 할 말을 정해 두었다' }, { id: 'body', text: '지금 생활에서 몸을 아끼는 습관이 있다' }] }, prompt: '지금 이미 준비된 것을 스스로 표시하세요.', target: { selfCheck: true }, difficulty: 0.1 },
            { type: 'choice', prompt: '오늘 배운 것과 맞지 않는 말을 고르세요.', options: ['사무직에도 위험이 있다', '위험은 회사만 책임진다', '일자리를 고를 때 안전 조건도 본다'], answer: 1, difficulty: 0.15, explain: '회사의 책임이 크지만, 나도 위험을 알고 묻고 알리는 대비를 함께 해요.' },
            { type: 'short', prompt: '다음 한 달 안에 할 진로 안전 준비 하나를 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '진로 안전 준비',
          items: [
            { type: 'check', prompt: '이번 달에 해 볼 것에 표시하세요.', options: ['희망 직업 위험 조사하기', '직업인 인터뷰 질문 만들기', '보호구 이름 알아 두기', '위험할 때 할 말 연습하기'] },
            { type: 'short', prompt: '내 진로 계획표에 넣을 안전 항목 하나를 쓰세요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 6. 일터 안전 개선 제안서 (12학년)
  // ======================================================================================================
  {
    const M = MOD('safety-proposal', [12]);
    const SITES = { grid: [6, 4], title: '가상 학교와 동네 칸 지도', places: [{ name: '학교 급식실', icon: 'school', at: [1, 1] }, { name: '기술 실습실', icon: 'factory', at: [2, 0] }, { name: '학교 앞 공사장', icon: 'apartment', at: [3, 2] }, { name: '동네 편의점', icon: 'market', at: [5, 1] }, { name: '도서관', icon: 'library', at: [0, 3] }, { name: '공원', icon: 'park', at: [4, 3] }] };
    const PROP = { text: '학생회가 급식실 바닥 안전 제안서 두 편을 받았다. 제안서 가는 "바닥이 너무 미끄러워 짜증 난다. 빨리 고쳐라." 제안서 나는 "점심 뒤 바닥 물기를 3주 동안 관찰했고, 미끄럼 표지와 밀대를 두자."', who: '학생회', motif: 'house', choices: [
      { id: 'angry', text: '목소리가 큰 제안서 가를 학교에 올린다', result: '학교는 "무엇을 고치라는 것인지" 되묻는다.', impact: [{ who: '급식실 이용자', text: '바뀌는 것이 없다', tone: -1 }],
        next: { text: '학교가 근거와 개선안을 달라고 했다.', choices: [
          { id: 'redo', text: '관찰 기록과 개선안을 붙여 다시 쓴다', result: '학교가 표지 설치를 검토한다.', impact: [{ who: '급식실 이용자', text: '늦게나마 바뀐다', tone: 1 }], ending: '불평은 문제를 알리고, 제안은 문제를 푸는 길을 보여 준다.' },
          { id: 'drop', text: '학교가 안 들어준다며 그만둔다', result: '바닥은 그대로다.', impact: [{ who: '급식실 이용자', text: '위험이 남는다', tone: -1 }], ending: '근거가 없으면 설득도 멈춘다.' }] } },
      { id: 'evidence', text: '관찰 근거와 개선안이 있는 제안서 나를 올린다', result: '학교가 비용과 담당을 묻는다.', impact: [{ who: '학생회', text: '논의가 시작된다', tone: 1 }],
        next: { text: '"돈이 많이 들지 않나요?"라는 질문이 나왔다.', choices: [
          { id: 'cost', text: '가상 견적과 우선순위를 보여 준다', result: '가장 싼 표지부터 먼저 하기로 한다.', impact: [{ who: '급식실 이용자', text: '바로 할 수 있는 것부터 바뀐다', tone: 1 }], ending: '실행 가능성을 보여 주면 제안이 결정으로 바뀐다.' },
          { id: 'vague', text: '"알아서 해 주세요"라고 답한다', result: '논의가 다음으로 미뤄진다.', impact: [{ who: '학생회', text: '설득이 약해진다', tone: -1 }], ending: '반론에 답할 준비가 없으면 좋은 근거도 힘을 잃는다.' }] } }] };
    const PROP_R = [{ id: 'basis', text: '관찰·자료 같은 근거가 있어야 설득된다' }, { id: 'doable', text: '할 수 있는 개선안과 비용이 있으면 결정하기 쉽다' }, { id: 'loud', text: '강하게 말할수록 설득된다', why: '강한 말은 관심을 끌지만 무엇을 할지 알려 주지 않아요.' }, { id: 'same', text: '제안은 불평과 같다', why: '불평은 문제를 말하고, 제안은 근거와 해결 방법까지 보여 줘요.' }];
    const ITEMS = [{ id: 'sign', text: '미끄럼 주의 표지', price: 10000 }, { id: 'mop', text: '물기 제거 밀대', price: 20000 }, { id: 'mat', text: '미끄럼 방지 매트', price: 40000 }, { id: 'shoe', text: '미끄럼 방지 실내화 2켤레', price: 50000 }, { id: 'tv', text: '휴게실 텔레비전', price: 80000 }];

    MODS.push(
      M({
        id: 'intro.site-pick', type: 'intro', title: '제안할 일터 고르기',
        method: '학교·지역 지도에서 제안할 일터 고르기', tool: 'map', minutes: 7,
        levels: { easy: '교사가 후보 2곳(급식실·실습실)만 함께 짚는다.', base: '후보 4곳 가운데 우리 모둠이 제안할 곳에 핀을 꽂는다.', challenge: '핀을 꽂은 뒤 그곳을 고른 근거(이용하는 사람 수·관찰할 수 있는지)를 말한다.' },
        intro: {
          teacher: '"우리 둘레에도 일터가 있어요. 급식실, 실습실, 학교 앞 공사장, 동네 편의점. 이 가운데 우리가 직접 관찰하고 제안할 수 있는 곳은 어디일까요?" 시연 단추로 급식실에 핀을 꽂는 모습을 보여 준다. "공사장이 제일 위험하니 거기"라는 말이 나오면 "우리가 안에 들어가 관찰하고 면담할 수 있을까요?"라고 되묻는다. 제안할 곳은 위험과 함께 우리가 근거를 모을 수 있는지로 고른다는 점을 짚는다.',
          student: '가상 지도에서 우리 모둠이 안전 개선을 제안할 일터를 골라 핀을 꽂고, 고른 까닭을 생각해 보세요.',
          demo: { tool: 'map', options: SITES, sequence: [{ place: '학교 급식실' }] },
          art: { draw: 'a paper map of a school and neighborhood with a cafeteria, a workshop, a construction site and a convenience store, a paper pin standing on the cafeteria and a paper clipboard nearby', banner: '어디를 바꿀까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '공사장·가게처럼 학교 밖 일터는 관찰만 하고 안에 들어가지 않는다. 면담은 교사가 미리 허락을 받은 곳에서만 한다.',
      }),
      M({
        id: 'intro.good-bad', type: 'intro', title: '설득력 있는 제안서 고르기',
        method: '두 제안서 견주기 갈림길', tool: 'dilemma', minutes: 7,
        levels: { easy: '교사가 첫 갈림길(가·나 고르기)의 결과만 함께 읽는다.', base: '두 번째 갈림길까지 가서 근거를 고른다.', challenge: '두 갈림길을 지난 뒤 \'강하게 말할수록 설득된다\'는 반론에 답한다.' },
        intro: {
          teacher: '"두 제안서 가운데 어느 쪽이 실제로 급식실을 바꿀까요?" 두 제안서를 소리 내어 읽고 손을 들어 고르게 한 뒤 시연 단추로 제안서 나의 길을 따라간다. "제안은 불평과 같다"는 말이 나오면 "제안서 가를 받은 학교는 내일 무엇을 해야 할지 알까요?"라고 되묻는다. 근거·개선안·실행 가능성이 제안서의 뼈대라는 점을 밝힌다.',
          student: '두 제안서 가운데 설득력 있는 쪽을 고르고, 그 선택이 어떤 결과로 이어지는지 따라가 보세요.',
          demo: { tool: 'dilemma', options: { scene: PROP, reasons: PROP_R, title: '두 제안서' }, sequence: [{ path: ['evidence', 'cost'], reasons: ['basis', 'doable'] }] },
          art: { draw: 'two paper proposal sheets on a desk, one with a big angry scribble and one with neat paper charts and a checklist, a paper scale weighing them', banner: '불평일까, 제안일까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
      }),

      M({
        id: 'activity.evidence-web', type: 'activity', title: '문제와 근거 잇기',
        method: '문제 가지에 근거 카드 잇기', tool: 'mindmap', minutes: 16,
        levels: { easy: '가지 2개(관찰·자료)에 근거 카드를 단다.', base: '가지 3개(관찰·자료·면담)에 근거 카드를 단다.', challenge: '가지 3개에 카드가 더해지고, 근거를 강한 근거·약한 근거로 다시 나눈다.' },
        activity: {
          title: '문제와 근거 잇기', tool: 'mindmap',
          teacher: '"\'급식실 바닥이 미끄럽다\'는 문제를 증명하려면 어떤 근거가 필요할까요?" 관찰·자료·면담 세 종류를 먼저 칠판에 적는다. "다들 그렇게 말한다"를 근거로 넣는 학생에게 "그 말을 누가, 언제 했는지 적을 수 있나요?"라고 묻는다. 근거는 종류를 섞을수록 단단해지고, 확인할 수 있는 것이 강한 근거라는 점을 짚는다.',
          task: '문제 가지마다 관찰·자료·면담 근거를 달고 근거의 강도를 나눠요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('\'급식실 바닥이 미끄럽다\'의 근거 카드를 종류별 가지에 다세요.', ['관찰', '자료', '면담'], [
              ['점심 뒤 바닥에 물기가 남아 있다', '미끄럼 주의 표지가 없다'],
              ['보건실 방문 기록(가상)', '작년 시설 점검표(가상)'],
              ['조리 실무사님의 말', '급식 도우미 학생의 말'],
            ], { k: 2, es: 2, hard: [['3주 동안 날짜별로 적은 관찰 기록'], [], []], traps: ['다들 그렇다고 한다'], d: 0.3, opt: { topic: '급식실 바닥이 미끄럽다' } }),
            SORTQ('근거 카드를 강한 근거와 약한 근거로 나누세요.', ['강한 근거', '약한 근거'], [
              ['3주 동안 날짜별로 적은 관찰 기록', '보건실 방문 기록(가상)', '조리 실무사님의 말(날짜·자리 기록)'],
              ['다들 그렇다고 한다', '어제 한 번 미끄러질 뻔했다는 느낌'],
            ], { k: 1, d: 0.35, opt: { topic: '근거의 강도' } }),
            PICKQ('제안서에 넣을 근거로 알맞은 것만 고르세요.', ['날짜별 물기 관찰 기록', '실무사님 면담 내용'], ['바닥 색이 마음에 안 든다', '다른 학교는 더 좋다는 소문'], { d: 0.3, opt: { basket: '제안서에 넣을 근거' }, more: { conclude: '확인할 수 있고, 문제와 바로 이어지고, 종류가 섞인 근거가 제안을 단단하게 해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 모둠 제안의 근거를 정리하세요.', columns: ['종류', '근거', '강도(강·약)'], cells: [['관찰', '', ''], ['자료', '', ''], ['면담', '', '']] }] },
        notes: '보건실 기록 등 자료는 가상이다. 실제 학교 기록을 쓸 때는 학생 개인이 드러나지 않는 집계만 교사가 확인해 준다.',
      }),
      M({
        id: 'activity.proposal-write', type: 'activity', title: '일터 안전 개선 제안서',
        method: '제안서 쓰고 기준표 점검', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '칸마다 문장 틀을 보고 쓰고 기준 2개로 점검한다.', base: '문제·근거·개선안·실행 가능성 기준으로 칸마다 점검한다.', challenge: '마지막 칸에 \'예상 비용과 반론 대응\' 기준이 더해진다.' },
        activity: {
          title: '일터 안전 개선 제안서', tool: 'rubric-writing',
          teacher: '"오늘 모은 근거로 제안서를 써요. 받는 사람이 읽고 바로 결정할 수 있게요." 문제·근거·개선안·실행 가능성의 네 칸을 차례로 쓰게 한다. "위험하니 고쳐 주세요"처럼 쓴 학생에게 "무엇을, 어디에, 누가, 언제까지 하면 되나요?"라고 묻는다. 받는 사람의 처지(비용·담당)를 미리 생각하면 설득이 쉬워진다는 점을 짚는다.',
          task: '일터 안전 개선 제안서를 칸마다 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('문제와 근거를 2~3문장으로 쓰세요.', '우리 모둠이 고른 일터의 위험 문제와 그 근거를 쓰세요.', ['문제를 한 문장으로 밝혔다', '관찰·자료·면담 근거를 하나 이상 들었다', '사람을 탓하지 않고 사실로 썼다'], { min: 40, max: 300, sent: [2, 3], must: [['관찰', '기록', '면담', '자료']], starter: '~에서는 ~이 문제다. ~ 동안 관찰한 결과 ~', easy: ['문제를 한 문장으로 밝혔다', '관찰·자료·면담 근거를 하나 이상 들었다'], d: 0.35 }),
            RWQ('개선안과 실행 가능성을 2~3문장으로 쓰세요.', '무엇을 어떻게 바꾸자고 하는지, 실제로 할 수 있는지 쓰세요.', ['바꿀 것을 구체적으로 썼다', '누가 맡을지 썼다', '실제로 할 수 있는 방법이다'], { min: 40, max: 300, sent: [2, 3], starter: '~에 ~을 두고, ~이 맡는다.', easy: ['바꿀 것을 구체적으로 썼다', '누가 맡을지 썼다'], d: 0.4 }),
            RWQ('받는 사람에게 드리는 마무리를 2~3문장으로 쓰세요.', '제안서를 받을 분과, 그분께 좋은 점을 쓰세요.', ['받을 사람을 밝혔다', '받는 사람에게 좋은 점을 썼다', '정중하게 끝맺었다'], { min: 40, max: 300, sent: [2, 3], starter: '~께 이 제안을 드립니다. 이렇게 하면 ~', plus: '예상 비용과 반론 하나에 대한 대응을 썼다', d: 0.4, more: { conclude: '좋은 제안서는 받는 사람이 읽고 바로 결정할 수 있게, 문제부터 실행까지 한 줄로 이어져요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 제안서에 대해 받는 사람이 할 만한 질문 하나와 우리의 답을 쓰세요.' }] },
      }),
      M({
        id: 'activity.cost-budget', type: 'activity', title: '예산 안에서 개선 물품 고르기',
        method: '예산 막대 안에서 개선 물품 고르기', tool: 'economy', minutes: 16,
        levels: { easy: '물품 3개 가운데 예산 안에서 고른다.', base: '물품 5개 가운데 꼭 필요한 것을 넣어 예산 안에서 고른다.', challenge: '예산이 줄어든 문항에서 우선순위를 정해 고르고, 그 근거를 활동지에 쓴다.' },
        activity: {
          title: '예산 안에서 개선 물품 고르기', tool: 'economy',
          teacher: '"학생회 가상 예산은 10만 원이에요. 급식실 바닥 문제를 푸는 데 무엇부터 살까요?" 가격은 수업용 가상 견적이라고 먼저 밝힌다. 텔레비전을 고른 학생에게 "그 물건이 오늘 제안한 문제를 푸나요?"라고 묻는다. 예산이 줄어들면 가장 싸고 효과가 바로 나는 것부터 고른다는 우선순위의 근거를 말하게 한다.',
          task: '가상 예산 안에서 급식실 바닥 문제를 푸는 물품을 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '가상 예산 10만 원 안에서, 미끄럼 주의 표지를 꼭 넣고 문제와 상관없는 물품은 빼고 고르세요.', toolOptions: { mode: 'budget', items: ITEMS, budget: 100000 }, target: { budget: { max: 100000, must: ['sign'], not: ['tv'] } }, difficulty: 0.3,
              levels: { easy: { prompt: '가상 예산 10만 원 안에서 미끄럼 주의 표지를 꼭 넣어 고르세요(물품 3개).', toolOptions: { items: ITEMS.slice(0, 3) }, target: { budget: { max: 100000, must: ['sign'] } } } } },
            { prompt: '표지와 밀대를 꼭 넣고 가상 예산 10만 원 안에서 고르세요.', toolOptions: { mode: 'budget', items: ITEMS, budget: 100000 }, target: { budget: { max: 100000, must: ['sign', 'mop'], not: ['tv'] } }, difficulty: 0.35,
              levels: { easy: { prompt: '표지와 밀대를 꼭 넣고 가상 예산 10만 원 안에서 고르세요(물품 3개).', toolOptions: { items: ITEMS.slice(0, 3) }, target: { budget: { max: 100000, must: ['sign', 'mop'] } } } } },
            { prompt: '예산이 3만 원으로 줄었어요. 가장 먼저 할 것만 골라 예산 안에 맞추세요.', toolOptions: { mode: 'budget', items: ITEMS, budget: 30000 }, target: { budget: { max: 30000, must: ['sign', 'mop'] } }, difficulty: 0.4,
              levels: { easy: { prompt: '예산이 3만 원으로 줄었어요. 가장 먼저 할 것만 고르세요(물품 3개).', toolOptions: { items: ITEMS.slice(0, 3) }, target: { budget: { max: 30000, must: ['sign', 'mop'] } } } },
              conclude: '예산이 줄면 문제와 바로 이어지고, 싸고, 바로 효과가 나는 것부터 골라요. 그 근거가 제안서의 우선순위가 돼요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '예산이 줄었을 때 고른 물품의 우선순위와 그 근거를 쓰세요.' }] },
        notes: '물품 가격은 수업용 가상 견적이다. 실제 제안 때는 학교 행정실과 견적을 확인한다.',
      }),

      M({
        id: 'wrap.pitch', type: 'wrap', title: '제안 발표 차례 정하기',
        method: '발표 순서 카드 놓기', tool: 'story', minutes: 10,
        levels: { easy: '교사가 첫 카드(문제 한 문장)를 놓아 주고 나머지를 놓는다.', base: '발표 카드 4장을 차례로 놓는다.', challenge: '4장을 놓은 뒤 예상 질문 하나에 답하는 연습을 짝과 한다.' },
        wrap: {
          teacher: '"제안서를 학생회나 선생님 앞에서 2분 동안 말한다면 무엇부터 말할까요?" 카드를 놓은 뒤 출구 질문으로 넘어간다. 개선안부터 말하겠다는 학생에게 "듣는 사람이 문제를 모르는데 해결책부터 들으면 왜 필요한지 알까요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'story', options: { mode: 'order', slots: 4, title: '제안 발표 차례', cards: [{ id: 'plan', text: '개선안과 가상 비용을 말한다', motif: 'star' }, { id: 'qa', text: '예상 질문에 답한다', motif: 'cloud' }, { id: 'prob', text: '문제를 한 문장으로 말한다', motif: 'house' }, { id: 'basis', text: '관찰·자료 근거를 보여 준다', motif: 'sun' }], shuffle: false }, prompt: '제안 발표 카드를 차례로 놓으세요.', target: { order: ['prob', 'basis', 'plan', 'qa'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '\'돈이 많이 들지 않나요?\'라는 질문에 가장 알맞은 답을 고르세요.', options: ['"알아서 해 주세요"', '"가장 싼 표지부터 먼저 하면 됩니다"', '"돈은 상관없어요"'], answer: 1, difficulty: 0.15, explain: '비용과 우선순위를 보여 주면 반론이 결정으로 바뀌어요.' },
            { type: 'short', prompt: '우리 제안을 한 문장으로 말해 보세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '제안 발표 준비',
          items: [
            { type: 'table', prompt: '발표 차례마다 할 말을 쓰세요.', columns: ['차례', '할 말'], cells: [['문제', ''], ['근거', ''], ['개선안·비용', ''], ['예상 질문 답', '']] },
            { type: 'short', prompt: '발표에서 받을 것 같은 반론 하나와 우리의 답을 쓰세요.' },
          ],
        },
      }),
      M({
        id: 'wrap.peer-check', type: 'wrap', title: '친구 제안서 점검하기',
        method: '친구 제안서 기준 목록 점검', tool: 'kitchen', minutes: 10,
        levels: { easy: '교사가 기준 3개를 먼저 읽어 주고 점검 기준만 고른다.', base: '기준 4개를 고르고 친구 제안서에 대어 본다.', challenge: '기준을 고르고 친구에게 줄 조언 한 줄을 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"친구 제안서를 바꿔 읽어요. 좋은 점검은 \'좋다·별로다\'가 아니라 기준으로 하는 거예요." 점검 기준만 고르게 한 뒤 친구 제안서에 대어 보게 한다. \'글씨가 예쁜가\'를 고른 학생에게 "그 기준이 급식실 바닥을 바꾸는 데 도움이 될까요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '제안서 점검 기준', items: [{ id: 'prob', text: '문제가 한 문장으로 분명한가' }, { id: 'pretty', text: '글씨가 예쁜가' }, { id: 'basis', text: '확인할 수 있는 근거가 있는가' }, { id: 'long', text: '글이 길고 많은가' }, { id: 'plan', text: '개선안이 구체적인가' }, { id: 'doable', text: '실제로 할 수 있는가' }] }, prompt: '친구 제안서를 점검할 기준만 표시하세요.', target: { checklist: ['prob', 'basis', 'plan', 'doable'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '친구에게 줄 조언으로 가장 알맞은 것을 고르세요.', options: ['"근거에 관찰 날짜를 넣으면 더 단단해질 것 같아"', '"그냥 별로야"', '"내 것을 베껴"'], answer: 0, difficulty: 0.15, explain: '기준에 대어 무엇을 더하면 좋을지 구체적으로 말해요.' },
            { type: 'short', prompt: '친구 제안서에 줄 조언 한 줄을 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '친구 제안서 점검',
          items: [
            { type: 'table', prompt: '친구 제안서를 기준마다 점검하세요.', columns: ['기준', '○/△', '조언'], cells: [['문제가 분명한가', '', ''], ['근거가 있는가', '', ''], ['개선안이 구체적인가', '', ''], ['실제로 할 수 있는가', '', '']] },
            { type: 'short', prompt: '친구 제안서에서 배운 점 하나를 쓰세요.' },
          ],
        },
      }),
    );
  }

  PaperLessons.registerModules(MODS);
})();
