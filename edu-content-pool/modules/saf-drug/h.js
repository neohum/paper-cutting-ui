/* 창체 안전교육 약물 중독 예방 — 고(10~12학년) 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/safety-a.json 의 saf-drug 고.
 * 근거: 「학교안전교육 실시 기준 등에 관한 고시」(교육부고시 제2023-33호) 별표 2 고등학교 약물 및 사이버 중독 예방
 *   1 '향정신성 물질에 대한 위험성·피해 알기' / 2 '중독성 물질에 대한 위험성·피해 알기' + 7대 표준안 약물 분류(마약류·흡연·음주) + 「마약류 관리에 관한 법률」(이름과 세 갈래만).
 * 고 기준: 법·제도와 자료 분석, 찬반 토론, 제안서·성찰 글, 진로·자립 연결, 딜레마 결과 추적. 단순 고르기 반복과 초등식 장면은 피한다.
 * 쓰는 원칙: 물질 이름은 체계도에 있는 범주어(마약류·마약·향정신성의약품·대마·액상 대마·필로폰·펜타닐·케타민·수면제·식욕억제제·술·담배·전자담배)까지만.
 *   구하는 법·쓰는 법·은어·효과를 좋게 그리는 묘사는 싣지 않는다. 법 조항 번호·형량 숫자는 쓰지 않는다. 연락처는 체계도 concepts 의 112·119·1388 만.
 *   수치 자료는 모두 '가상'이다(화면 제목에 밝힘). 인물은 직접 지은 두 글자 가명이다. 피해·사용 경험을 묻지 않는다.
 * 주제 9개, 계획 모듈 84개 전부.
 *
 * 사람 확인: (근거 파일 research-*.md 에 세부가 없는 문장 — 수업 전 공식 안내처에서 확인)
 *   - [sns-drug-ads.intro.law · activity.dm · activity.opinion · activity.ripple] 마약류 광고를 퍼뜨리거나 전하는 일도 법이 금지·처벌한다(체계도 concepts '광고·전달도 처벌 대상')
 *       → 「마약류 관리에 관한 법률」 원문(법제처 국가법령정보센터)
 *   - [sns-drug-ads.intro.law · substance-harm.activity.classify · rx-misuse 전체] 필로폰·케타민·처방 수면제·식욕억제제 일부는 향정신성의약품, 펜타닐은 마약, 대마·액상 대마는 대마로 분류된다
 *       → 식품의약품안전처(마약류 안전정보)·「마약류 관리에 관한 법률」 별표
 *   - [sns-drug-ads.activity.report · wrap.route] 플랫폼 신고·차단, 화면 기록 남기기, 112 신고 절차 → 경찰청·각 플랫폼 신고 안내
 *   - [cannabis-myth.intro.brain · activity.sources] 대마가 판단·기억에 영향을 줄 수 있고 청소년기 뇌가 발달 중이다 / 다른 나라 제도와 무관하게 우리나라에서는 마약류로 관리된다
 *       → 식품의약품안전처·질병관리청
 *   - [cannabis-myth.activity.device] 전자담배처럼 생긴 기기에 액상 대마가 들어 있는 경우가 있다 → 식품의약품안전처·경찰청
 *   - [rx-misuse 전체] 처방약은 처방받은 사람만 처방대로 먹는다, 남에게 나눠 주지 않는다, 남은 약은 약국·보건소 등의 폐의약품 수거함에 낸다, 약사·의사에게 묻는다
 *       → 식품의약품안전처(의약품 안전 사용)·지역 보건소
 *   - [substance-harm.intro.organs · activity.timeline · wrap.sos] 물질이 판단·심장 박동·호흡에 영향을 줄 수 있고, 숨쉬기가 이상하면 119가 먼저다 → 식품의약품안전처·질병관리청·소방청
 *   - [substance-harm.activity.debate · essay] '처벌과 치료' 토론 쟁점(치료·재활 제도가 있다는 것) → 식품의약품안전처·보건복지부 안내
 *   - [binge-drinking 전체] 짧은 시간 많은 술은 의식·호흡에 영향을 줄 수 있다 / 찬물 샤워·커피로 술이 깨지 않고 시간이 지나야 한다 /
 *       깨워도 반응이 없으면 119, 토할 수 있으니 옆으로 눕히고 혼자 두지 않는다 → 질병관리청·한국건강증진개발원·소방청(응급처치 안내)
 *   - [adult-transition.activity.work] 일터에서 술을 강요하는 것이 부당한 대우로 다뤄질 수 있고 상담 경로가 있다 → 고용노동부 안내(상담 기관 이름·번호는 싣지 않음)
 *   - [help-system 전체] 112(범죄·위험 신고), 119(응급), 1388(청소년 고민·위기 상담)의 역할 / 상담 내용은 원칙적으로 비밀이 지켜지지만 생명·안전이 위험하면 알릴 수 있다 /
 *       보건소·병원·상담센터에서 약물·음주·흡연 상담을 받을 수 있다 → 여성가족부(1388)·보건복지부·지역 보건소
 *   - [help-system.activity.careers] 약사·상담교사·보건교사·사회복지사·의사가 하는 일 → 한국고용정보원(커리어넷·워크넷 직업 정보)
 *   - [media-critique 전체] 영상의 음주·흡연 장면에 관한 방송 심의 기준이 있다는 언급은 넣지 않았다(근거 없음) — 넣으려면 방송통신심의위원회 기준 확인
 */
(function () {
  const MOD = (topic, grades) => (o) => Object.assign({ schema: 'edu-module.v1', domain: 'saf-drug', band: '고', topic: `saf-drug.h.${topic}`, grades }, o, { id: `saf-drug.h.${topic}.${o.id}` });
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
  // 갈림길(dilemma): 나무를 n 단계에서 자른다(잘린 선택은 결과 글이 끝 문장이 된다)
  const cut = (s, n) => Object.assign({}, s, { choices: s.choices.map((c) => { const x = Object.assign({}, c); if (x.next) { if (n <= 1) { delete x.next; if (!x.ending) x.ending = x.result; } else x.next = cut(x.next, n - 1); } return x; }) });
  // 쉬움 = 갈림길 2번, 기본 = 나무 전체(3번), 도전 = 나무 전체 + 서로 다른 끝 길 2개 이상 가 보기. 근거 카드는 모든 단계에서 고른다
  const DIL3 = (prompt, scene, paths, reasons, good, { d = 0.4, opt = {}, more = {} } = {}) => {
    const at = (n) => ({ path: uniq(paths.map((p) => p.slice(0, n))), reasons: good });
    const it = { prompt, toolOptions: Object.assign({ scene, reasons }, opt), target: at(3), difficulty: d,
      levels: { easy: { prompt: pfx(prompt, '갈림길 둘'), toolOptions: { scene: cut(scene, 2) }, target: at(2) },
        challenge: { prompt: pfx(prompt, '다른 끝 길도 하나 더'), target: Object.assign(at(3), { explore: 2 }) } } };
    return Object.assign(it, more);
  };
  // 갈림길 두 번짜리 짧은 장면: 쉬움 = 갈림길 1번, 기본·도전 = 2번
  const DIL2 = (prompt, scene, paths, reasons, good, { d = 0.35, opt = {}, more = {} } = {}) => {
    const at = (n) => ({ path: uniq(paths.map((p) => p.slice(0, n))), reasons: good });
    return Object.assign({ prompt, toolOptions: Object.assign({ scene, reasons }, opt), target: at(2), difficulty: d,
      levels: { easy: { prompt: pfx(prompt, '갈림길 하나'), toolOptions: { scene: cut(scene, 1) }, target: at(1) } } }, more);
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
  // 찬반 토론 진행판(timer): 진행 차례(쉬움 = 입론·정리만) · 발언 시간 맞추기(쉬움 = 2단계) · 토론 뒤 스스로 점검(도전 = 기준 하나 더)
  const DEBATEQ = (motion, { label, work = 3, rest = 1, checks, plus, conclude }) => [
    { prompt: `'${motion}' 토론의 진행 차례대로 카드를 놓으세요.`, toolOptions: { title: '토론 진행 차례', cards: ['정리', '반론', '입론', '재반론'] }, target: { order: ['입론', '반론', '재반론', '정리'] }, difficulty: 0.2,
      levels: { easy: { prompt: `'${motion}' 토론을 입론과 정리 두 단계로 놓으세요(카드 2장).`, toolOptions: { cards: ['정리', '입론'] }, target: { order: ['입론', '정리'] } } } },
    { prompt: `${label} 토론은 단계마다 발언 ${work}분, 다음 단계 준비 ${rest}분이에요. 네 단계를 진행하도록 타이머를 맞추세요.`, toolOptions: { timeUnit: 'min', title: '발언 시간', plan: { work: 1, rest: 0, rounds: 1 }, showTotal: true }, target: { plan: { work, rest, rounds: 4 } }, difficulty: 0.25,
      levels: { easy: { prompt: `${label} 토론을 발언 ${work}분, 준비 ${rest}분으로 입론·정리 두 단계를 진행하도록 타이머를 맞추세요.`, target: { plan: { work, rest, rounds: 2 } } } } },
    { prompt: `${label} 토론을 마친 뒤 우리 모둠이 지킨 것을 스스로 점검하세요.`, toolOptions: { title: '토론 스스로 점검' }, target: { selfCheck: checks }, difficulty: 0.2, conclude,
      levels: { challenge: { prompt: `${label} 토론을 마친 뒤 우리 모둠이 지킨 것을 스스로 점검하세요(기준 하나 더).`, target: { selfCheck: [...checks, plus] } } } },
  ];
  // 마음 크기(emotion scale) 출구 질문 — 내 생각을 돌아보는 것이라 어느 크기든 맞음
  const SCALE = (prompt, situation, feeling, labels, ask) => ({ type: 'tool', tool: 'emotion', options: { mode: 'scale', situation, feeling, steps: 5, scaleLabels: labels, ask }, prompt, target: { level: 'any' }, difficulty: 0.1 });
  // 문항 꼴(prompt·toolOptions·target)을 출구 질문 꼴로 — 출구에는 단계별 판이 없어 levels 를 버린다
  const EXIT = (tool, it) => { const { toolOptions, levels, ...rest } = it; return Object.assign({ type: 'tool', tool, options: toolOptions }, rest); };
  const MOOD = { type: 'mood', prompt: '오늘 수업을 마친 지금 내 생각과 마음은 어떤가요?' };

  const MODS = [];

  // ======================================================================================================
  // 1. SNS 마약류 광고의 수법과 대응 (10학년)
  // ======================================================================================================
  {
    const M = MOD('sns-drug-ads', [10]);
    const DM = { text: '밤 11시, 모르는 계정에서 DM이 왔다. "시험 스트레스 확 풀리는 거 있어. 첫 체험은 무료, 부모님은 몰라도 돼."', who: '하람', motif: 'moon', choices: [
      { id: 'ignore', text: '읽고 그냥 넘긴다', result: '알림은 사라졌지만 다음 날 같은 계정에서 또 DM이 온다.', impact: [{ who: '하람', text: '계정이 계속 연락할 길이 남는다', tone: 0 }],
        next: { text: '같은 계정이 "답 안 하면 반 친구들한테도 보낼게"라고 보냈다.', choices: [
          { id: 'report2', text: '화면을 기록하고 신고·차단한 뒤 담임 선생님께 알린다', result: '선생님이 기록을 함께 보고 학교 안내를 하기로 한다.', impact: [{ who: '하람', text: '혼자 감당하지 않게 된다', tone: 1 }],
            next: { text: '선생님이 "다른 친구들도 받았는지 알아보자"고 한다.', choices: [
              { id: 'warn', text: '반 친구들에게 신고·차단 방법을 함께 알린다', result: '같은 DM을 받은 친구 둘이 신고에 함께한다.', impact: [{ who: '반 친구들', text: '광고에 답하지 않고 신고한다', tone: 1 }], ending: '한 사람의 신고가 반 전체의 대응으로 번진다.' },
              { id: 'quiet', text: '내 일은 끝났으니 더 말하지 않는다', result: '다른 친구는 같은 DM에 답장을 보낸다.', impact: [{ who: '반 친구', text: '위험한 대화에 끌려 들어간다', tone: -1 }], ending: '나만 피하면 광고는 다음 사람을 찾아간다.' }] } },
          { id: 'reply2', text: '"그만 보내"라고 답장한다', result: '답이 오자 계정이 더 자주 연락한다.', impact: [{ who: '하람', text: '계정이 나를 반응하는 사람으로 기억한다', tone: -1 }], ending: '답장은 거절이어도 광고하는 쪽에는 반응이 된다.' }] } },
      { id: 'report', text: '화면을 기록하고 신고·차단한다', result: '계정이 차단되고 플랫폼에 신고가 들어간다.', impact: [{ who: '하람', text: '더 이상 DM을 받지 않는다', tone: 1 }],
        next: { text: '다음 날 친구 지우가 "나도 그 DM 받았어, 궁금하긴 하더라"라고 한다.', choices: [
          { id: 'tell', text: '신고·차단 방법을 알려 주고 함께 담임 선생님께 알린다', result: '지우도 계정을 신고하고 선생님이 학년 안내를 준비한다.', impact: [{ who: '지우', text: '호기심 대신 도움을 택한다', tone: 1 }],
            next: { text: '선생님이 학년 안내문을 함께 만들자고 한다.', choices: [
              { id: 'help', text: '안내문에 넣을 위험 신호를 함께 정리한다', result: '안내문에 \'무료 체험·비밀 보장\' 같은 위험 신호가 실린다.', impact: [{ who: '학년 전체', text: '같은 광고를 알아보는 눈이 생긴다', tone: 1 }], ending: '내가 알아본 위험 신호가 다른 사람을 지키는 정보가 된다.' },
              { id: 'skip', text: '귀찮아서 빠진다', result: '안내문은 나왔지만 학생 눈높이의 예시가 빠졌다.', impact: [{ who: '학년 전체', text: '실제 수법을 알아보기 어렵다', tone: 0 }], ending: '겪어 본 학생의 눈이 빠지면 안내가 덜 와닿는다.' }] } },
          { id: 'joke', text: '"한번 물어나 봐"라고 농담한다', result: '지우가 정말로 계정에 답장을 보낸다.', impact: [{ who: '지우', text: '위험한 대화를 시작하게 된다', tone: -1 }], ending: '가벼운 농담이 친구를 위험 쪽으로 미는 말이 될 수 있다.' }] } },
      { id: 'reply', text: '"진짜 무료예요?"라고 답장한다', result: '계정이 "받을 주소만 알려 주면 돼"라며 개인정보를 묻는다.', impact: [{ who: '하람', text: '대화가 이어지며 빠져나오기 어려워진다', tone: -1 }],
        next: { text: '계정이 "지금 정하지 않으면 기회 없어"라고 재촉한다.', choices: [
          { id: 'stop', text: '대화를 멈추고 기록을 남긴 뒤 보호자에게 알린다', result: '보호자가 놀랐지만 먼저 하람이 안전한지 묻는다.', impact: [{ who: '하람', text: '도움을 받을 길이 열린다', tone: 1 }],
            next: { text: '보호자와 함께 112에 신고하기로 했다.', choices: [
              { id: 'call', text: '대화 기록을 그대로 들고 함께 신고한다', result: '기록 덕분에 계정 정보가 그대로 전달된다.', impact: [{ who: '하람', text: '혼자 짊어지지 않고 끝맺는다', tone: 1 }], ending: '답장을 했더라도 멈추고 알리면 거기서 끊을 수 있다.' },
              { id: 'delete', text: '혼날까 봐 기록을 먼저 지운다', result: '신고할 때 계정을 찾을 단서가 사라진다.', impact: [{ who: '하람', text: '계정이 다른 이름으로 다시 연락할 수 있다', tone: -1 }], ending: '기록을 지우면 나를 지킬 증거도 함께 사라진다.' }] } },
          { id: 'give', text: '주소를 알려 준다', result: '모르는 사람이 내 집 주소를 알게 된다.', impact: [{ who: '하람', text: '집까지 위험이 다가온다', tone: -1 }], ending: '재촉은 생각할 틈을 빼앗으려는 수법이다.' }] } }] };
    const DM_R = [{ id: 'law', text: '마약류 광고를 퍼뜨리거나 전하는 일도 법이 금지한다' }, { id: 'record', text: '기록을 남겨야 신고와 도움이 쉬워진다' }, { id: 'adult', text: '혼자 해결하지 않고 어른·112와 연결한다' }, { id: 'free', text: '무료 체험이면 손해 볼 것이 없다', why: '무료는 경계를 풀게 하는 미끼예요. 건강·법·안전의 대가가 따라와요.' }, { id: 'secret', text: '부모님이 모르면 문제도 없다', why: '아무도 모르게 하라는 말이 바로 위험 신호예요.' }];
    const GROUP = { text: '반 단체방에 누가 "이거 웃기지 않냐"며 \'살 빠지는 약, 처방 없이 OK\' 광고 화면을 올렸다.', who: '지우', motif: 'house', choices: [
      { id: 'laugh', text: '웃는 이모티콘을 달고 다른 방에도 퍼 나른다', result: '광고 화면이 학년 단체방 세 곳에 퍼진다.', impact: [{ who: '학년 친구들', text: '광고에 닿는 사람이 늘어난다', tone: -1 }],
        next: { text: '한 친구가 "어디서 파는 거야?"라고 묻는다.', choices: [
          { id: 'stopnow', text: '퍼 나른 글을 지우고 "이건 불법 광고야"라고 말한다', result: '퍼지던 흐름이 멈춘다.', impact: [{ who: '학년 친구들', text: '광고를 다시 보게 된다', tone: 1 }], ending: '늦었더라도 멈추면 번짐이 줄어든다.' },
          { id: 'more', text: '"나도 몰라, 찾아봐"라고 답한다', result: '친구가 광고 계정을 찾아 들어간다.', impact: [{ who: '친구', text: '광고하는 쪽과 직접 닿는다', tone: -1 }], ending: '재미로 퍼 나른 화면이 누군가에게는 연결 고리가 된다.' }] } },
      { id: 'name', text: '"이건 불법 광고라 퍼뜨리면 안 돼"라고 단다', result: '올린 친구가 "장난이었어"라며 머뭇거린다.', impact: [{ who: '반 친구들', text: '광고를 다르게 보게 된다', tone: 1 }],
        next: { text: '올린 친구가 "그럼 어떻게 해?"라고 묻는다.', choices: [
          { id: 'guide', text: '화면을 지우고 원래 광고는 플랫폼에 신고하자고 한다', result: '단체방 화면이 지워지고 광고 계정이 신고된다.', impact: [{ who: '반 전체', text: '광고가 더 퍼지지 않는다', tone: 1 }], ending: '말 한마디와 신고가 광고의 길을 끊는다.' },
          { id: 'leave', text: '알아서 하라며 단체방을 나간다', result: '화면은 그대로 남아 다른 친구들이 계속 본다.', impact: [{ who: '반 친구들', text: '광고가 그대로 남는다', tone: 0 }], ending: '바른말 뒤에 할 일을 함께 정해야 끝까지 막을 수 있다.' }] } }] };
    const GROUP_R = [{ id: 'spread', text: '광고 화면을 퍼 나르는 것도 광고를 돕는 일이 된다' }, { id: 'report', text: '지우기와 신고를 함께 해야 번짐이 멈춘다' }, { id: 'joke', text: '웃자고 올린 것이니 괜찮다', why: '올린 뜻과 상관없이 광고는 더 많은 사람에게 닿아요.' }];
    const MAP = { title: '우리 동네(가상)', grid: [4, 3], places: [{ name: '학교 상담실', icon: 'school', at: [0, 0] }, { name: '경찰서', icon: 'police', at: [3, 0] }, { name: '집', icon: 'house', at: [1, 2] }, { name: '역', icon: 'station', at: [3, 2] }, { name: '공원', icon: 'park', at: [2, 1] }] };

    MODS.push(
      M({
        id: 'intro.copy', type: 'intro', title: '가상 광고 문구 첫인상',
        method: '가상 광고 문구 첫인상', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 문구 카드 2장만 소리 내어 읽고, 의심 가는 낱말 하나씩을 함께 고른다.', base: '문구 카드 4장을 넘겨 보며 첫인상을 말하고 의심 가는 말을 바구니에 담는다.', challenge: '담은 문구마다 노리는 대상(시험 앞둔 학생·체중 고민하는 사람 등)을 추론해 말한다.' },
        intro: {
          teacher: '"이 문구들은 수업을 위해 지어낸 가상 광고예요. 처음 봤을 때 끌리는 문구가 있나요?" 두세 명의 첫인상을 들은 뒤 시연 단추로 의심 가는 말이 바구니에 담기는 모습을 보여 준다. "천연이라고 쓰여 있으니 괜찮은 것 아니에요?"라는 말이 나오면 "누가 이 말을 썼고, 확인할 길이 있나요?"라고 되묻는다. 광고는 끌리게 만들려고 쓴 글이라 위험은 말하지 않는다는 점을 짚고, 오늘은 그 수법을 분석해 대응을 세운다고 밝힌다.',
          student: '가상 광고 문구를 읽고 처음 든 느낌을 말한 뒤, 의심 가는 말이 든 문구를 바구니에 담아 보세요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '의심 가는 말', cards: ['100% 천연 성분, 부작용 걱정 없음', '한 번이면 시험 스트레스 끝', '부모님은 몰라도 돼요', '복용 전 의사·약사와 상담하세요'] }, sequence: [{ pick: ['100% 천연 성분, 부작용 걱정 없음', '한 번이면 시험 스트레스 끝', '부모님은 몰라도 돼요'] }] },
          art: { draw: 'a paper smartphone screen showing glossy fake advertisement cards with sparkles, a paper magnifying glass hovering over small warning words, a student silhouette thinking', banner: '이 광고, 믿어도 될까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '문구는 모두 수업용 가상 광고다. 실제 광고 화면·계정·은어·구하는 방법은 보여 주지 않는다. 학생에게 이런 광고를 본 경험을 발표시키지 않는다.',
      }),
      M({
        id: 'intro.law', type: 'intro', title: '법의 세 갈래 다시 보기',
        method: '법의 세 갈래 복습 그물', tool: 'mindmap', minutes: 6,
        levels: { easy: '세 갈래 이름(마약·향정신성의약품·대마)만 함께 읽고 시연을 본다.', base: '설명 카드를 세 갈래에 붙이며 중학교에서 배운 내용을 되살린다.', challenge: '광고·전달하는 행위가 세 갈래 가운데 어디에만 해당하는지 따져 보고 \'모두에 해당한다\'는 까닭을 말한다.' },
        intro: {
          teacher: '"「마약류 관리에 관한 법률」은 마약류를 세 갈래로 나눠요. 중학교 때 배운 이름이 기억나나요?" 시연 단추로 물질 카드가 세 가지에 붙는 모습을 보여 준다. "병원에서도 쓰는 약이면 마약류가 아니잖아요"라는 말이 나오면 "향정신성의약품 가지에 처방 수면제·식욕억제제 일부가 붙는 것을 보세요. 의료용으로 쓰이는 것과 아무나 써도 되는 것은 같을까요?"라고 되묻는다. 오늘 다룰 광고는 이 세 갈래 모두를 대상으로 금지된다는 점을 짚는다.',
          student: '마약류의 세 갈래 그물에 물질 카드가 어디에 붙는지 보고, 중학교에서 배운 내용을 떠올려 보세요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '마약류', slots: ['마약', '향정신성의약품', '대마'], cards: [{ id: 'fen', text: '펜타닐' }, { id: 'meth', text: '필로폰' }, { id: 'ket', text: '케타민' }, { id: 'rx', text: '처방 수면제·식욕억제제 일부' }, { id: 'can', text: '대마' }, { id: 'liq', text: '액상 대마' }], shuffle: false }, sequence: [{ sort: { 마약: ['fen'], 향정신성의약품: ['meth', 'ket', 'rx'], 대마: ['can', 'liq'] } }] },
          art: { draw: 'a paper mind map with three thick branches labeled by law categories, paper cards pinned to each branch, a paper law book with a ribbon bookmark at the center', banner: '마약류는 세 갈래', extra: [{ motif: 'star', x: 300, y: 96 }] },
        },
        notes: '분류는 「마약류 관리에 관한 법률」의 세 갈래 이름만 다룬다. 조문 번호·형량 숫자는 다루지 않는다. 물질별 효과나 쓰는 법은 설명하지 않는다.',
      }),
      M({
        id: 'intro.poll', type: 'intro', title: '수상한 광고 뒤 행동 자료',
        method: '가상 설문 띠그래프 해석', tool: 'chart', minutes: 6,
        levels: { easy: '띠그래프에서 큰 칸 3개(그냥 넘김·신고·차단·어른에게 알림)만 함께 읽는다.', base: '다섯 칸을 모두 읽고 바람직한 행동의 비율을 높일 방법을 말한다.', challenge: '가상 자료의 한계(누구에게 물었는지 모름 등)를 짚고 실제로 조사한다면 어떻게 할지 제안한다.' },
        intro: {
          teacher: '"가상의 학급 설문이에요. SNS에서 수상한 광고를 본 뒤 가장 많이 한 행동은 무엇일까요?" 시연 단추로 가장 큰 칸이 골라지는 모습을 보인다. "그냥 넘기면 아무 일도 없으니 제일 좋은 것 아니에요?"라는 말이 나오면 "넘긴 광고는 다음 날 누구에게 갈까요?"라고 되묻는다. \'신고·차단\' 칸을 키우려면 무엇을 알아야 하는지 묻고, 오늘 그 방법을 배운다고 밝힌다.',
          student: '가상 설문 띠그래프를 읽고 가장 큰 칸과 \'신고·차단\' 칸을 견주어 보세요. 신고·차단 칸을 키우려면 무엇이 필요할까요?',
          demo: { tool: 'chart', options: { type: 'band', mode: 'read', title: '수상한 광고를 본 뒤 한 행동(가상 설문)', unit: '%', data: [['그냥 넘김', 45], ['신고·차단', 20], ['어른에게 알림', 15], ['호기심에 눌러 봄', 12], ['친구에게 공유', 8]], question: '가장 큰 칸은?', choices: ['그냥 넘김', '신고·차단', '어른에게 알림', '호기심에 눌러 봄', '친구에게 공유'] }, sequence: [{ pick: 0 }] },
          art: { draw: 'a long paper band chart split into five colored paper strips, a phone with a blurred suspicious ad, small paper hands pointing at the strips', banner: '본 뒤에 무엇을 했나?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '그래프는 수업용 가상 자료다(실제 조사 결과 아님). 학생에게 광고를 본 경험이 있는지 손을 들게 하지 않는다.',
      }),

      M({
        id: 'activity.tactics', type: 'activity', title: '광고 설득 수법 나누기',
        method: '설득 수법 분류', tool: 'mindmap', minutes: 18,
        levels: { easy: '광고 조각 4장(칸마다 1장)을 네 수법에 나누고, 카드가 놓이자마자 맞는지 보인다.', base: '광고 조각 8장을 네 수법에 나누고, 수법마다 근거 문장을 짝짓는다.', challenge: '광고 조각 12장을 나누고, 처음 보는 새 광고 문구 4개에 수법 이름을 붙인다.' },
        activity: {
          title: '광고 설득 수법 나누기', tool: 'mindmap',
          teacher: '"광고는 우연히 쓰인 글이 아니에요. 끌리게 하려고 고른 말이에요. 이 조각은 어떤 수법일까요?" 조각을 놓을 때마다 "이 말을 믿게 되면 무엇을 안 보게 될까요?"라고 묻는다. \'천연 성분이라 안전\'을 효과 과장 칸에 넣는 학생에게 "이 말은 효과를 부풀리나요, 위험을 가리나요?"라고 되묻는다. 비밀 유도 칸이 가장 위험한 신호라는 점 — 어른에게 말하지 못하게 막으면 도움도 끊긴다 — 을 짚는다.',
          task: '가상 광고 조각을 네 가지 설득 수법으로 나누고, 수법마다 근거를 붙여요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('가상 광고 조각을 네 가지 설득 수법 칸에 나누세요.', ['효과 과장', '위험 숨김', '친근함 연출', '비밀 유도'], [
              ['한 번이면 살이 쏙 빠져요', '시험 기간 집중력 두 배'],
              ['부작용 전혀 없음', '천연 성분이라 안전해요'],
              ['나도 너처럼 고민했었어', '같은 학교 선배가 추천해요'],
              ['부모님은 모르게 할 수 있어요', '대화 기록은 자동으로 지워져요'],
            ], { k: 1, hard: [['후기 만 개, 효과 보장'], ['중독 걱정은 옛날 이야기'], ['또래 모델의 일상 영상'], ['이 글은 곧 사라집니다']], d: 0.3, opt: { topic: '광고의 설득 수법' } }),
            MATCHQ('수법 이름과 그 수법을 알아보는 근거 문장을 짝지으세요.', [['효과 과장', '결과를 보장하거나 부풀린 말을 쓴다'], ['위험 숨김', '부작용·법적 문제를 말하지 않는다'], ['친근함 연출', '친구·또래처럼 다가와 경계를 푼다'], ['비밀 유도', '어른에게 알리지 못하게 막는다']], { k: 3, d: 0.3, opt: { topic: '수법을 알아보는 근거' }, more: { hints: ['광고가 무엇을 크게 말하고 무엇을 감추는지 보세요.'] } }),
            MATCHQ('처음 보는 가상 광고 문구에 수법 이름을 붙이세요.', [['"잠 못 드는 밤, 이거 하나면 끝"', '효과 과장'], ['"병원 처방 필요 없어요"', '위험 숨김'], ['"우리끼리만 아는 정보"', '비밀 유도'], ['"같은 반 친구도 쓰는 중"', '친근함 연출']], { k: 3, d: 0.4, opt: { topic: '새 광고에 수법 이름 붙이기' }, more: { conclude: '광고는 효과를 부풀리고 위험을 감추고, 친근하게 다가와 비밀로 하게 만들어요. 수법을 알아보면 끌리는 마음에서 한 걸음 물러설 수 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '네 수법 가운데 가장 위험하다고 생각하는 것 하나를 고르고 그 까닭을 한 문장으로 쓰세요.' }] },
        notes: '광고 조각은 모두 수업용으로 지은 가상 문구다. 은어·가격·구하는 방법은 넣지 않았다.',
      }),
      M({
        id: 'activity.ripple', type: 'activity', title: '피해가 번지는 고리',
        method: '피해 번짐 고리', tool: 'lifecycle', minutes: 18,
        levels: { easy: '고리 단계 카드 3장을 차례로 놓고(놓자마자 맞는지 보임), 끊는 대응·책임 주체를 2쌍씩 짝짓는다.', base: '고리 단계 5장에 함정 카드 1장이 섞인 판에서 고리를 놓고, 끊는 대응 3쌍과 책임 주체 3쌍을 짝짓는다.', challenge: '카드가 섞인 채로 같은 판을 풀고, 활동지에 지점마다 책임 주체가 할 일을 쓴다.' },
        activity: {
          title: '피해가 번지는 고리', tool: 'lifecycle',
          teacher: '"광고 하나를 본 일이 어디까지 번질 수 있을까요? 나 혼자의 일로 끝날까요?" 단계 카드를 놓은 뒤 \'차례대로 따라가 보기\'로 고리를 한 바퀴 따라가게 한다. "본인이 선택한 일이니 가족이나 학교와는 상관없다"는 학생에게 "가족의 걱정·학교의 불안·치료 비용은 누가 지게 될까요?"라고 묻는다. 고리의 앞쪽에서 끊을수록 피해가 작다는 점, 그리고 끊는 일에는 나뿐 아니라 플랫폼·학교·가정의 몫이 있다는 점을 짚는다.',
          task: '광고 노출에서 사회까지 피해가 번지는 고리를 놓고, 끊을 수 있는 지점에 대응을 짝지어요.', levels: { easy: { live: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDERQ('광고 노출에서 피해가 번지는 차례로 고리에 카드를 놓으세요.', ['광고 노출', '호기심에 연락', '개인의 건강·법 문제', '가족의 걱정과 부담', '학교·사회의 불안과 비용'], { k: 3, traps: ['광고를 본 사람만 손해를 본다'], d: 0.3, opt: { center: '피해가 번지는 고리', cycle: false } }),
            MATCHQ('고리를 끊을 수 있는 지점과 알맞은 대응을 짝지으세요.', [['광고를 처음 봤을 때', '누르지 않고 신고·차단한다'], ['계정이 먼저 연락해 올 때', '답하지 않고 기록을 남겨 어른에게 알린다'], ['친구가 연락해 봤다고 털어놓을 때', '혼자 두지 않고 상담실과 함께 연결한다']], { k: 2, extra: ['궁금하니 한 번만 물어본다'], d: 0.35, opt: { center: '고리를 끊는 지점' } }),
            MATCHQ('고리를 끊는 일과 그 일을 먼저 맡아야 할 주체를 짝지으세요.', [['광고 계정을 찾아 막는다', '플랫폼'], ['수상한 광고를 신고하고 퍼 나르지 않는다', '나와 친구'], ['위험 신호와 도움받을 곳을 알린다', '학교·가정']], { k: 2, d: 0.35, opt: { center: '누가 끊을까' }, more: { conclude: '피해는 나에게서 가족·학교·사회로 번지고, 앞쪽에서 끊을수록 작아져요. 끊는 일은 나·플랫폼·학교·가정이 함께 맡아요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '고리를 끊는 지점마다 책임 주체가 할 일을 쓰세요.', columns: ['지점', '나와 친구', '플랫폼·학교·가정'], cells: [['광고 노출', '', ''], ['계정의 연락', '', '']] }] },
      }),
      M({
        id: 'activity.dm', type: 'activity', title: '무료 체험 DM 갈림길',
        method: '딜레마 결과 추적', tool: 'dilemma', minutes: 18,
        levels: { easy: '갈림길 둘까지 가 보고 근거 카드를 고른다.', base: '갈림길 셋까지 법·건강·관계 결과를 따라가고 근거 카드를 고른다.', challenge: '갈림길 셋을 지난 뒤 되돌아가 다른 끝 길을 하나 더 가 보고 두 길을 근거로 견준다.' },
        activity: {
          title: '무료 체험 DM 갈림길', tool: 'dilemma',
          teacher: '"하람이가 받은 DM은 가상이지만 수법은 실제와 비슷해요. 무시·신고·답장 가운데 무엇을 고르든 다음 장면이 이어져요." 선택마다 누구에게 어떤 영향이 생기는지 소리 내어 읽게 한다. \'답장\'을 고른 학생을 나무라지 않고 "답장했다면 이제 어디서 끊을 수 있을까요?"라고 묻는다. "그냥 무시하면 끝난다"는 학생에게는 무시 길의 다음 장면을 함께 보며 기록과 알리기가 왜 필요한지 짚는다. 어느 길에서든 멈추고 알리면 끊을 수 있다는 점을 강조한다.',
          task: 'DM을 받은 하람이의 선택을 끝까지 따라가 결과를 보고, 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL3('하람이가 되어 끝까지 안전한 길을 고르고, 근거 카드를 고르세요.', DM, [['report', 'tell', 'help'], ['ignore', 'report2', 'warn'], ['reply', 'stop', 'call']], DM_R, ['record', 'adult'], { d: 0.4, opt: { title: '무료 체험 DM(가상)' } }),
            DIL2('단체방에 광고 화면이 올라온 장면에서 번짐을 멈추는 길을 고르고, 근거 카드를 고르세요.', GROUP, [['name', 'guide'], ['laugh', 'stopnow']], GROUP_R, ['spread', 'report'], { d: 0.35, opt: { title: '단체방 광고 화면(가상)' } }),
            EXPLOREQ('DM 장면에서 \'답장\'으로 시작한 길과 \'신고\'로 시작한 길을 모두 끝까지 가 보고 견주세요.', DM, DM_R, ['두 길의 끝 장면을 모두 보았다', '법·건강·관계 가운데 달라진 결과를 찾았다', '답장한 뒤에도 끊을 수 있는 지점을 찾았다'], { d: 0.35, more: { conclude: '무료·비밀·재촉은 생각할 틈을 빼앗는 수법이에요. 어느 길에서든 멈추고, 기록하고, 알리면 끊을 수 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '\'답장\' 길에서 멈출 수 있었던 지점을 하나 고르고, 그때 할 말이나 행동을 한 문장으로 쓰세요.' }] },
        notes: 'DM 문구는 가상이다. 은어·물질 이름·구하는 방법은 넣지 않았다. \'답장\'을 고른 학생을 탓하지 않고 끊는 지점을 찾게 한다.',
      }),
      M({
        id: 'activity.opinion', type: 'activity', title: '광고 금지 까닭 의견문',
        method: '법적 책임 의견문', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '문장 틀(\'나는 ~라고 생각한다. 왜냐하면 ~\')을 보고 주장·근거·반론을 한 문장씩 쓴다.', base: '주장·법 근거·반론 고려를 담아 한 문단으로 쓰고 기준표를 점검한다.', challenge: '기준 하나(반론에 대한 재반론)를 더해 점검한다.' },
        activity: {
          title: '광고 금지 까닭 의견문', tool: 'rubric-writing',
          teacher: '"\'광고를 보기만 하고 공유한 것뿐인데 왜 문제가 되나요?\' 이 질문에 의견문으로 답해 봐요." 쓰기 전에 기준표를 함께 읽고, 형량 숫자가 아니라 \'법이 왜 광고·전달까지 막는가\'라는 까닭에 집중하게 한다. "표현의 자유가 있으니 광고를 막으면 안 된다"는 반론이 나오면 "그 자유가 다른 사람의 건강·안전을 해칠 때도 같을까요?"라고 되묻는다. 반론을 무시하지 않고 글 안에서 다루는 것이 설득력을 키운다는 점을 짚는다.',
          task: '\'마약류 광고를 퍼뜨리는 행위도 막아야 하는 까닭\'에 대한 내 의견을 근거와 함께 써요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('의견문의 주장 문장을 쓰고 기준표로 점검하세요.', '마약류 광고를 퍼뜨리거나 전하는 행위를 막아야 하는지, 내 주장을 한두 문장으로 쓰세요.', ['내 주장이 무엇인지 첫 문장에 썼다', '찬성·반대 가운데 내 입장이 분명하다', '형량 숫자 대신 까닭에 집중했다'], { min: 30, max: 200, starter: '나는 마약류 광고를 퍼뜨리는 행위도 ~라고 생각한다.', d: 0.3 }),
            RWQ('법 근거를 넣어 의견문 본문을 한 문단으로 쓰고 기준표로 점검하세요.', '「마약류 관리에 관한 법률」이 광고·전달까지 막는 까닭을 넣어, 내 주장의 근거를 한 문단으로 쓰세요.', ['법이 광고·전달까지 막는다는 점을 근거로 썼다', '광고가 퍼질 때 생기는 피해를 하나 이상 썼다', '근거와 주장이 이어진다'], { min: 80, max: 500, must: [['법', '법률']], starter: '왜냐하면 법은 ~까지 막고 있고, 광고가 퍼지면 ~하기 때문이다.', plus: '반론에 대한 재반론을 한 문장 넣었다', sample: '광고는 보는 사람이 많아질수록 호기심에 연락하는 사람도 늘어난다. 그래서 「마약류 관리에 관한 법률」은 마약류를 쓰거나 파는 것만이 아니라 광고하고 전하는 일도 막는다. 퍼 나른 사람은 장난이었다 해도 광고가 더 많은 사람에게 닿게 돕는다.', d: 0.4 }),
            RWQ('예상되는 반론과 내 답을 쓰고 기준표로 점검하세요.', '"보기만 하고 공유한 것은 괜찮다"는 반론을 소개하고, 그에 대한 내 답을 두세 문장으로 쓰세요.', ['반론을 공정하게 소개했다', '반론에 대한 내 답에 근거가 있다', '상대를 비난하지 않고 주장을 다뤘다'], { min: 50, max: 300, must: [['하지만', '그러나', '그렇지만']], starter: '어떤 사람은 ~라고 말한다. 하지만 ~', d: 0.45, more: { conclude: '광고·전달을 막는 까닭은 광고가 퍼질수록 더 많은 사람이 위험에 닿기 때문이에요. 숫자보다 그 까닭을 근거로 쓰면 설득력이 생겨요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내 의견문의 주장을 한 문장으로 요약하고, 가장 강한 근거 하나를 쓰세요.' }] },
        notes: '법 이름과 \'광고·전달도 금지·처벌한다\'는 원칙만 다룬다. 조문 번호·형량 숫자는 쓰지 않는다(필요하면 교사가 법제처 원문을 보여 준다).',
      }),
      M({
        id: 'activity.report', type: 'activity', title: '신고 절차 차례 놓기',
        method: '신고 절차 순서', tool: 'kitchen', minutes: 18,
        levels: { easy: '내가 받았을 때 절차 카드 3장을 차례로 놓는다.', base: '절차 카드 4장을 놓고 단계마다 주의할 점을 짝짓는다.', challenge: '친구가 받았을 때 절차에 함정 카드가 섞여 있고, 활동지에 내 절차와 다른 점을 쓴다.' },
        activity: {
          title: '신고 절차 차례 놓기', tool: 'kitchen',
          teacher: '"수상한 광고나 DM을 받았을 때 무엇부터 할까요? 차단부터 하면 어떤 일이 생길까요?" 카드를 놓은 뒤 \'차단\'을 맨 앞에 둔 학생에게 "차단하고 나면 그 계정 화면을 다시 볼 수 있을까요? 신고할 때 필요한 것은 무엇일까요?"라고 묻는다. 링크를 눌러 확인하지 않고 화면만 남긴다는 점, 혼자 끝내지 않고 어른·112와 연결하는 것이 마지막 단계라는 점을 짚는다. 연습할 때 실제 번호로 전화하지 않는다.',
          task: '수상한 광고를 받았을 때 할 일을 차례로 놓고, 단계마다 주의할 점을 짝지어요.', levels: { easy: { live: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDERQ('수상한 광고 DM을 받았을 때 할 일을 차례로 놓으세요.', ['화면 기록', '플랫폼 신고', '계정 차단', '어른·112에 알림'], { k: 3, d: 0.3, opt: { autoMotif: false } }),
            MATCHQ('절차 단계와 그때 주의할 점을 짝지으세요.', [['화면 기록', '링크는 누르지 않고 화면만 남긴다'], ['플랫폼 신고', '신고 사유에서 불법 광고를 고른다'], ['계정 차단', '차단한 뒤에도 기록은 지우지 않는다'], ['어른·112에 알림', '혼자 만나거나 답하지 않고 알린다']], { k: 3, d: 0.35, opt: { autoMotif: false } }),
            ORDERQ('친구가 같은 DM을 받았다고 털어놓았어요. 함께 할 일을 차례로 놓으세요.', ['친구 이야기 끝까지 듣기', '받은 화면 함께 기록', '함께 신고·차단', '어른에게 같이 알리기'], { k: 3, traps: ['대신 답장해 주기'], d: 0.35, opt: { autoMotif: false }, more: { conclude: '기록 → 신고 → 차단 → 알림 차례로 하면 증거를 지키면서 끊을 수 있어요. 친구가 받았을 때는 먼저 듣고, 함께 해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내가 받았을 때와 친구가 받았을 때 절차를 견주어 쓰세요.', columns: ['', '내가 받았을 때', '친구가 받았을 때'], cells: [['첫 단계', '', ''], ['조심할 점', '', '']] }] },
        notes: '플랫폼 신고 메뉴 이름은 서비스마다 다르다. 수업 전 학생들이 많이 쓰는 서비스의 공식 신고 안내를 확인해 보여 준다.',
      }),
      M({
        id: 'activity.debate', type: 'activity', title: '플랫폼 책임 찬반 토론',
        method: '찬반 토론 진행판', tool: 'timer', minutes: 18,
        levels: { easy: '입론·정리 두 단계만 차례로 놓고 두 단계 발언 시간을 맞춘다.', base: '입론·반론·재반론·정리 네 단계를 놓고 네 단계 발언 시간을 맞춘 뒤 스스로 점검한다.', challenge: '스스로 점검에 \'근거 자료의 출처를 밝혔다\'가 더해진다.' },
        activity: {
          title: '플랫폼 책임 찬반 토론', tool: 'timer',
          teacher: '"\'플랫폼이 마약류 광고 차단 책임을 더 져야 한다.\' 찬성과 반대 모둠으로 나눠 토론해요." 진행 차례와 발언 시간을 판으로 함께 맞춘 뒤 시작한다. 반대 모둠이 "이용자가 알아서 조심하면 된다"고만 하면 "이용자가 알아보기 어려운 수법이 있다는 것을 오늘 보았지요? 그래도 책임이 이용자에게만 있을까요?"라고 되묻는다. 찬성 모둠이 "플랫폼이 다 막아야 한다"고만 하면 "모든 글을 미리 걸러 내면 어떤 문제가 생길까요?"라고 묻는다. 상대 주장을 요약한 뒤 반론하게 한다.',
          task: '토론 진행 차례와 발언 시간을 맞추고, 토론 뒤 우리 모둠을 스스로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: DEBATEQ('플랫폼이 마약류 광고 차단 책임을 더 져야 한다', { label: '플랫폼 책임', work: 3, rest: 1,
            checks: ['상대 주장을 요약한 뒤 반론했다', '오늘 배운 광고 수법을 근거로 썼다', '사람이 아니라 주장을 비판했다'], plus: '근거 자료의 출처를 밝혔다',
            conclude: '책임은 한쪽에만 있지 않아요. 플랫폼의 차단과 이용자의 신고가 함께 있어야 광고가 줄어요.' }),
        },
        worksheet: { items: [{ type: 'short', prompt: '토론에서 들은 상대 모둠의 가장 강한 근거를 하나 쓰고, 내 생각이 바뀌었는지 쓰세요.' }] },
        notes: '발언 시간은 학급 사정에 맞게 바꿀 수 있다(판의 값은 연습용). 특정 기업·서비스 이름을 들어 비난하지 않게 한다.',
      }),

      M({
        id: 'wrap.reflect', type: 'wrap', title: '내가 광고를 본다면',
        method: '성찰 글', tool: 'rubric-writing', minutes: 8,
        levels: { easy: '문장 틀을 띄워 주고 함께 첫 문장을 말해 본 뒤 쓴다.', base: '다섯 문장 안팎으로 쓰고 기준표 세 항목을 스스로 점검한다.', challenge: '토론에서 바뀐 생각 한 가지를 활동지 둘째 칸에 덧붙이게 한다.' },
        wrap: {
          teacher: '"내일 내 휴대폰에 그런 광고가 뜬다면, 나는 무엇을 할까요? 오늘 배운 것을 내 행동으로 써 봐요." 쓰기 전에 기준표를 함께 읽는다. "그냥 무시한다"고만 쓴 학생에게 "무시한 다음 그 광고는 누구에게 갈까요? 무시 뒤에 할 한 가지를 더 쓸 수 있을까요?"라고 묻는다. 성찰 글은 남에게 보이려는 다짐이 아니라 그 순간 내가 할 행동을 미리 정해 두는 것이라는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'rubric-writing', options: { topic: '\'내가 SNS에서 수상한 약물 광고를 본다면\' 할 행동을 다섯 문장 안팎으로 쓰세요.', minChars: 60, maxChars: 400, starter: '내가 그런 광고를 본다면 먼저 ~. 왜냐하면 ~', sample: '내가 그런 광고를 본다면 먼저 링크를 누르지 않고 화면을 기록하겠다. 그다음 플랫폼에 신고하고 계정을 차단하겠다. 광고는 위험을 숨기고 비밀로 하라고 하기 때문이다. 친구가 받았다면 함께 선생님께 알리겠다. 혼자 해결하려 하지 않겠다.' }, prompt: '성찰 글을 쓰고 기준표로 점검하세요.', target: { selfCheck: ['그 순간 할 구체적 행동을 썼다', '그렇게 하는 근거를 썼다', '도움을 청할 사람이나 곳을 썼다'], mustInclude: [['신고', '차단', '알리']] }, difficulty: 0.3 },
            { type: 'choice', prompt: '오늘 배운 것과 맞지 않는 말을 고르세요.', options: ['광고 화면을 퍼 나르는 것도 광고를 돕는 일이다', '다이어트용이라고 쓰여 있으면 마약류가 아니다', '비밀로 하라는 말은 위험 신호다'], answer: 1, difficulty: 0.2, explain: '광고 문구가 무엇이라 하든 들어 있는 것이 마약류라면 마약류예요. 광고는 위험을 숨기려고 쓴 글이에요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '내가 광고를 본다면',
          items: [
            { type: 'short', prompt: '수상한 광고를 본 순간 할 행동을 차례대로 쓰세요.' },
            { type: 'short', prompt: '오늘 토론이나 활동에서 바뀐 생각 한 가지를 쓰세요.' },
          ],
          easy: { note: '"내가 그런 광고를 본다면 먼저 ~. 그다음 ~. 왜냐하면 ~"', items: [{ type: 'short', prompt: '광고를 봤을 때 가장 먼저 할 일 하나를 쓰세요.' }] },
        },
      }),
      M({
        id: 'wrap.feel', type: 'wrap', title: '광고 대응 자신감 크기',
        method: '대응 자신감 크기', tool: 'emotion', minutes: 8,
        levels: { easy: '자신감 크기만 고르게 한다.', base: '크기를 고른 뒤 부족한 점 하나를 짝에게 말하게 한다.', challenge: '부족한 점을 채울 방법까지 출구 짧은 답에 쓰게 한다.' },
        wrap: {
          teacher: '"수상한 광고나 DM을 받았을 때 오늘 배운 대로 할 자신이 얼마나 있나요? 정답은 없어요." 눈금을 고른 뒤 짝과 부족한 점을 한 가지씩 말하게 한다. "신고 메뉴를 못 찾을 것 같다"는 말이 나오면 "오늘 집에 가서 내가 쓰는 앱의 신고 메뉴를 한 번 찾아 두면 어떨까요?"라고 묻는다. 자신감이 낮게 나와도 괜찮고, 그 부족한 부분이 바로 내가 준비할 곳이라는 점을 짚는다.',
          exitTicket: [
            SCALE('수상한 광고에 대응할 내 자신감 크기를 고르세요.', '모르는 계정에서 \'무료 체험\' DM이 왔다. 오늘 배운 대로 기록·신고·알리기를 할 수 있을까?', '자신감', { 1: '자신 없음', 5: '자신 있음' }, '나는 얼마나 자신 있나요?'),
            { type: 'short', prompt: '내 대응에서 가장 부족한 점 하나와 그것을 채울 방법을 쓰세요.' },
            { type: 'choice', prompt: '수상한 광고 DM을 받았을 때 가장 먼저 할 일로 알맞은 것을 고르세요.', options: ['링크를 눌러 무엇인지 확인한다', '화면을 기록해 둔다', '"진짜예요?"라고 답장한다'], answer: 1, difficulty: 0.15, explain: '링크를 누르거나 답장하면 대화가 이어져요. 화면을 먼저 남겨야 신고와 도움이 쉬워요.' },
          ],
        },
        worksheet: {
          title: '광고 대응 자신감',
          items: [
            { type: 'check', prompt: '내가 할 수 있는 것에 표시하세요.', options: ['화면 기록하기', '플랫폼 신고하기', '계정 차단하기', '어른에게 알리기', '친구 도와주기'] },
            { type: 'short', prompt: '표시하지 못한 것 하나를 고르고, 그것을 할 수 있게 오늘 준비할 일을 쓰세요.' },
          ],
          easy: { note: '기록 → 신고 → 차단 → 알리기', items: [{ type: 'check', prompt: '내가 할 수 있는 것에 표시하세요.', options: ['화면 기록하기', '플랫폼 신고하기', '어른에게 알리기'] }] },
        },
      }),
      M({
        id: 'wrap.route', type: 'wrap', title: '광고 도움 경로 지도',
        method: '도움 경로 지도', tool: 'map', minutes: 8,
        levels: { easy: '지도 문항은 장소 이름을 함께 소리 내어 읽은 뒤 핀을 꽂게 하고, 연락처 두 문항은 함께 푼다.', base: '지도 1문항과 연락처 2문항(고민 상담·지금 위험)을 스스로 풀고 112·1388의 쓰임을 견준다.', challenge: '친구 대신 알려야 할 때의 경로(누구에게 먼저·누구와 함께)를 짝과 말하게 한다.' },
        wrap: {
          teacher: '"오늘 배운 대응은 누구와 연결될 때 끝까지 가요. 가상 동네 지도에서 상황마다 갈 곳을 찾아봐요." 지도 문항을 푼 뒤 112와 1388의 쓰임을 견주게 한다. "경찰에 알리면 나도 혼날 것 같다"는 학생에게 "지금 위험하거나 협박을 받고 있다면, 가장 빨리 나를 지켜 줄 곳은 어디일까요?"라고 묻는다. 고민은 학교 상담실·1388, 지금의 위험과 협박은 112라는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'map', options: MAP, prompt: '광고 계정이 "답 안 하면 집에 찾아간다"고 협박해요. 보호자와 함께 직접 찾아가 알릴 곳에 핀을 꽂으세요.', target: { place: '경찰서' }, difficulty: 0.2 },
            { type: 'choice', prompt: '광고를 보고 궁금했던 마음이 계속 신경 쓰여 누군가와 이야기하고 싶어요. 알맞은 곳을 고르세요.', options: ['광고를 올린 계정', '학교 상담실이나 1388', '모르는 익명 단체방'], answer: 1, difficulty: 0.15, explain: '고민은 학교 상담실이나 청소년 상담 전화 1388에서 이야기할 수 있어요.' },
            { type: 'choice', prompt: '지금 위험하거나 협박을 받고 있을 때 걸 번호를 고르세요.', options: ['1388', '112', '119'], answer: 1, difficulty: 0.15, explain: '범죄나 협박처럼 지금 위험할 때는 112예요. 1388은 고민 상담, 119는 응급 상황이에요.' },
          ],
        },
        worksheet: {
          title: '나의 도움 경로',
          items: [
            { type: 'table', prompt: '상황마다 연락할 곳과 함께 갈 사람을 쓰세요.', columns: ['상황', '연락할 곳', '함께 갈 사람'], cells: [['광고 계정의 협박', '', ''], ['혼자 고민될 때', '', '']] },
            { type: 'short', prompt: '친구 대신 알려야 할 때 누구에게 먼저 말할지와 그 까닭을 쓰세요.' },
          ],
          easy: { note: '지금 위험 = 112, 고민 상담 = 1388·학교 상담실', items: [{ type: 'short', prompt: '협박을 받으면 연락할 번호를 쓰세요.' }] },
        },
        notes: '지도는 가상 동네다. 실제 우리 지역 경찰서·학교 상담실 위치는 교사가 따로 알려 준다.',
      }),
    );
  }

  // ======================================================================================================
  // 2. 대마에 대한 오해와 사실 (10학년)
  // ======================================================================================================
  {
    const M = MOD('cannabis-myth', [10]);
    const DEVICE = { text: '축제가 끝난 저녁, 친구 태오가 전자담배처럼 생긴 기기를 건네며 말한다. "이건 그냥 향 나는 거야. 괜찮은 거라니까."', who: '도윤', motif: 'moon', choices: [
      { id: 'take', text: '일단 받아 들고 살펴본다', result: '기기를 들자 태오가 "한 번만 해 봐"라고 재촉한다.', impact: [{ who: '도윤', text: '거절하기가 더 어려워진다', tone: -1 }],
        next: { text: '주변 친구들이 "빨리 해 봐"라며 쳐다본다.', choices: [
          { id: 'try', text: '분위기에 밀려 한 번 해 본다', result: '머리가 어지럽고 속이 메스꺼워 자리에 주저앉는다.', impact: [{ who: '도윤', text: '몸이 불편하고 무슨 일인지 몰라 겁이 난다', tone: -1 }],
            next: { text: '태오가 "괜찮아질 거야, 아무한테도 말하지 마"라고 한다.', choices: [
              { id: 'hide', text: '말하지 않고 집에 간다', result: '밤새 어지러움이 이어지지만 누구에게도 묻지 못한다.', impact: [{ who: '도윤', text: '혼자 불안을 견딘다', tone: -1 }], ending: '비밀로 하면 몸에 이상이 있어도 도움을 받지 못한다.' },
              { id: 'tellnow', text: '보호자에게 바로 알리고 도움을 받는다', result: '보호자가 상태를 살피고 병원 상담을 받기로 한다.', impact: [{ who: '도윤', text: '혼자가 아니라 함께 대처한다', tone: 1 }], ending: '이미 했더라도 알리면 거기서부터 도움을 받을 수 있다.' }] } },
          { id: 'giveback', text: '"안에 뭐가 들었는지 모르면 안 해"라며 돌려준다', result: '태오가 머쓱해하며 기기를 넣는다.', impact: [{ who: '도윤', text: '내 기준을 지킨다', tone: 1 }],
            next: { text: '집에 가는 길, 태오가 "다른 애들한테는 말하지 마"라고 문자를 보냈다.', choices: [
              { id: 'counsel', text: '다음 날 상담 선생님께 이 일을 알린다', result: '선생님이 태오도 도움을 받을 수 있게 연결하겠다고 한다.', impact: [{ who: '태오', text: '도움으로 이어질 기회가 생긴다', tone: 1 }], ending: '친구를 지키는 일은 비밀을 지키는 것이 아니라 도움과 잇는 것이다.' },
              { id: 'keep', text: '친구 사이니 모른 척한다', result: '며칠 뒤 태오가 다른 친구에게도 기기를 건넸다는 말이 들린다.', impact: [{ who: '다른 친구들', text: '같은 권유를 받게 된다', tone: -1 }], ending: '모른 척하면 위험이 다른 친구에게 옮겨 간다.' }] } }] } },
      { id: 'ask', text: '"그게 뭔데? 확실하지 않으면 난 안 해"라고 말한다', result: '태오가 "다른 나라에선 다 하는 거야"라며 웃는다.', impact: [{ who: '도윤', text: '분명한 기준을 먼저 말한다', tone: 1 }],
        next: { text: '태오가 "겁쟁이처럼 굴지 마"라고 한 번 더 권한다.', choices: [
          { id: 'firm', text: '"우리나라에선 마약류로 관리돼. 난 빠질게"라고 하고 자리를 뜬다', result: '조금 어색했지만 다른 친구 한 명도 함께 자리를 뜬다.', impact: [{ who: '도윤', text: '관계를 지키면서 위험에서 벗어난다', tone: 1 }],
            next: { text: '함께 나온 친구가 "태오 괜찮을까?"라고 걱정한다.', choices: [
              { id: 'adult', text: '함께 담임이나 상담 선생님께 알리자고 한다', result: '두 사람이 다음 날 상담실을 찾는다.', impact: [{ who: '태오', text: '어른의 도움이 닿는다', tone: 1 }], ending: '거절에서 멈추지 않고 알리면 친구까지 지킬 수 있다.' },
              { id: 'gossip', text: '단체방에 태오 이야기를 퍼뜨린다', result: '태오가 놀림을 받고 오히려 더 숨는다.', impact: [{ who: '태오', text: '도움 대신 낙인을 받는다', tone: -1 }], ending: '소문은 도움이 아니라 숨게 만드는 힘이 된다.' }] } },
          { id: 'give', text: '겁쟁이 소리가 싫어 받아 든다', result: '다시 처음과 같은 재촉이 시작된다.', impact: [{ who: '도윤', text: '기준이 흔들린다', tone: -1 }], ending: '한 번 더 권한다고 위험이 줄어들지는 않는다.' }] } },
      { id: 'leave', text: '말없이 자리를 피한다', result: '그 자리에서는 벗어났지만 태오는 무슨 뜻인지 모른다.', impact: [{ who: '도윤', text: '위험에서는 벗어난다', tone: 1 }],
        next: { text: '다음 날 태오가 "어제 왜 갔어?"라고 묻는다.', choices: [
          { id: 'explain', text: '"모르는 기기는 안 써. 너도 걱정돼"라고 말한다', result: '태오가 잠시 말이 없다가 "사실 나도 좀 찜찜했어"라고 한다.', impact: [{ who: '태오', text: '다시 생각할 계기가 생긴다', tone: 1 }],
            next: { text: '태오가 "그래도 누구한테 말하긴 좀 그래"라고 한다.', choices: [
              { id: 'together', text: '"같이 상담실 가 보자, 혼나러 가는 게 아니야"라고 한다', result: '태오가 망설이다 함께 가기로 한다.', impact: [{ who: '태오', text: '도움을 청할 용기를 낸다', tone: 1 }], ending: '함께 가 주는 한마디가 도움으로 가는 길을 연다.' },
              { id: 'drop', text: '"알아서 해"라며 대화를 끝낸다', result: '태오는 혼자 고민을 안고 간다.', impact: [{ who: '태오', text: '도움과 멀어진다', tone: 0 }], ending: '내 기준을 지킨 뒤 친구에게 손을 내미는 것이 다음 단계다.' }] } },
          { id: 'lie', text: '"그냥 피곤해서"라고 둘러댄다', result: '태오는 다음 모임에서 또 같은 기기를 꺼낸다.', impact: [{ who: '도윤', text: '같은 상황을 다시 만난다', tone: 0 }], ending: '까닭을 말하지 않으면 같은 권유가 되풀이된다.' }] } }] };
    const DEVICE_R = [{ id: 'unknown', text: '생김새로는 기기 안에 무엇이 들었는지 알 수 없다' }, { id: 'law', text: '우리나라에서 대마·액상 대마는 마약류로 관리된다' }, { id: 'help', text: '친구를 지키려면 비밀보다 도움과 이어야 한다' }, { id: 'abroad', text: '다른 나라에서 허용하니 괜찮다', why: '다른 나라의 제도는 우리나라의 법과 내 몸의 위험을 바꾸지 않아요.' }, { id: 'once', text: '한 번쯤은 해 봐도 된다', why: '안에 무엇이 들었는지 모르는 것을 한 번 해 보는 것도 위험해요.' }];
    const VIDEO = { text: '친구가 \'외국에선 합법, 우리만 뒤처졌다\'는 짧은 영상을 보내며 "네 생각은 어때?"라고 묻는다.', who: '도윤', motif: 'star', choices: [
      { id: 'agree', text: '"맞아, 우리만 너무 막는 것 같아"라고 답한다', result: '친구가 영상을 다른 단체방에도 보낸다.', impact: [{ who: '단체방 친구들', text: '출처 모를 주장이 퍼진다', tone: -1 }],
        next: { text: '한 친구가 "그 영상 누가 만든 거야?"라고 묻는다.', choices: [
          { id: 'check', text: '영상을 만든 사람과 근거 자료를 함께 찾아본다', result: '영상에 근거 출처가 없다는 것을 알게 된다.', impact: [{ who: '도윤', text: '판단을 다시 세운다', tone: 1 }], ending: '처음 판단이 틀렸어도 출처를 따지면 바로잡을 수 있다.' },
          { id: 'ignoreq', text: '"그런 게 뭐가 중요해"라고 넘긴다', result: '영상은 근거 없이 계속 공유된다.', impact: [{ who: '단체방 친구들', text: '잘못된 정보가 굳어진다', tone: -1 }], ending: '출처를 묻는 질문을 넘기면 오해가 사실처럼 남는다.' }] } },
      { id: 'source', text: '"누가 만든 영상이야? 근거 자료가 있어?"라고 되묻는다', result: '친구가 영상을 다시 보더니 출처가 없다고 한다.', impact: [{ who: '친구', text: '주장을 다시 보게 된다', tone: 1 }],
        next: { text: '친구가 "그럼 뭘 믿어야 해?"라고 묻는다.', choices: [
          { id: 'public', text: '공공 기관의 마약류 안내를 함께 찾아보자고 한다', result: '우리나라에서는 대마가 마약류로 관리된다는 안내를 함께 읽는다.', impact: [{ who: '친구', text: '근거를 갖고 판단한다', tone: 1 }], ending: '믿을 만한 출처를 함께 찾는 것이 가장 좋은 대답이다.' },
          { id: 'whatever', text: '"몰라, 다 자기 생각이지"라고 끝낸다', result: '친구는 여전히 영상 속 주장을 믿는다.', impact: [{ who: '친구', text: '근거 없는 생각이 남는다', tone: 0 }], ending: '모든 주장이 같은 무게를 갖지는 않는다.' }] } }] };
    const VIDEO_R = [{ id: 'who', text: '누가 왜 만든 영상인지 따져야 한다' }, { id: 'public', text: '공공 기관 자료로 확인할 수 있다' }, { id: 'views', text: '조회수가 많으니 맞는 말이다', why: '조회수는 많이 본 것이지 사실이라는 증거가 아니에요.' }];

    MODS.push(
      M({
        id: 'intro.myth', type: 'intro', title: '대마 오해·사실 판정',
        method: '오해·사실 판정', tool: 'mindmap', minutes: 6,
        levels: { easy: '문장 4개만 함께 읽고 오해·사실 손 들기를 한 뒤 시연을 본다.', base: '문장 6개를 오해·사실로 나누는 시연을 보며 내 판정과 견준다.', challenge: '사실로 판정한 문장마다 확인할 수 있는 출처(공공 기관 자료 등)를 말한다.' },
        intro: {
          teacher: '"오늘 들려줄 여섯 문장 가운데 어떤 것이 오해이고 어떤 것이 사실일까요? 먼저 손으로 판정해 봐요." 손 들기를 한 뒤 시연 단추로 문장이 두 가지에 붙는 모습을 보여 준다. "천연 식물이면 몸에 해롭지 않잖아요"라는 말이 나오면 "독버섯도 천연이에요. 천연이라는 말이 안전하다는 증거가 될까요?"라고 되묻는다. 오늘은 판정의 근거와 출처를 따지는 법을 배운다고 밝힌다.',
          student: '대마에 대한 여섯 문장을 듣고 오해인지 사실인지 먼저 판정한 뒤, 시연과 견주어 보세요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '대마, 맞는 말일까?', slots: ['오해', '사실'], cards: [{ id: 'nat', text: '천연 식물이라 해가 없다' }, { id: 'abroad', text: '다른 나라에서 허용하니 안전하다' }, { id: 'look', text: '전자담배 모양이면 전자담배다' }, { id: 'law', text: '우리나라에서 대마는 마약류로 관리된다' }, { id: 'brain', text: '청소년기 뇌는 아직 자라는 중이다' }, { id: 'src', text: '출처를 따져야 주장을 판단할 수 있다' }], shuffle: false }, sequence: [{ sort: { 오해: ['nat', 'abroad', 'look'], 사실: ['law', 'brain', 'src'] } }] },
          art: { draw: 'two paper baskets labeled myth and fact, paper sentence strips floating between them, a paper magnifying glass and a small paper leaf crossed out', banner: '오해일까, 사실일까?', extra: [{ motif: 'star', x: 300, y: 96 }] },
        },
        notes: '대마의 효과나 쓰는 법은 설명하지 않는다. 다른 나라 제도는 \'나라마다 다르다\'까지만 말하고 특정 나라를 예로 들지 않는다.',
      }),
      M({
        id: 'intro.brain', type: 'intro', title: '판단을 맡는 뇌 찾기',
        method: '영향 기관 찾기', tool: 'body', minutes: 6,
        levels: { easy: '종이 몸에서 뇌를 함께 찾는 시연만 본다.', base: '뇌를 찾은 뒤 \'판단·기억에 영향을 줄 수 있다\'는 설명을 읽고 청소년기와 잇는다.', challenge: '청소년기에 더 위험한 까닭을 \'아직 자라는 중\'이라는 말로 추론해 말한다.' },
        intro: {
          teacher: '"대마는 몸의 어느 곳에 가장 먼저 영향을 줄까요? 종이 몸에서 찾아봐요." 시연 단추로 뇌가 골라지는 모습을 보인 뒤 \'판단·기억을 맡고, 청소년기에 계속 자란다\'는 설명을 읽는다. "어른도 쓰는 나라가 있는데 청소년만 더 위험한 까닭이 있나요?"라는 질문이 나오면 "아직 짓고 있는 건물과 다 지은 건물 가운데 흔들림에 더 약한 곳은 어디일까요?"라고 되묻는다. 효과가 아니라 영향을 받는 곳과 시기를 짚는다.',
          student: '종이 몸에서 판단과 기억을 맡는 기관을 찾고, 그 기관이 청소년기에 어떤 상태인지 읽어 보세요.',
          demo: { tool: 'body', options: { mode: 'find', organs: ['뇌', '심장', '폐', '위'], jobs: { 뇌: '판단·기억을 맡고 청소년기에도 계속 자란다' }, names: true }, sequence: [{ sel: '뇌' }] },
          art: { draw: 'a paper cut-out human body with a softly glowing paper brain, a paper growth ruler beside it, gentle arrows showing the brain still growing', banner: '판단을 맡는 곳은 아직 자라는 중', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
        notes: '\'판단·기억에 영향을 줄 수 있다\'는 수준까지만 말한다. 느낌·효과를 묘사하지 않는다(사람 확인 목록 참고).',
      }),

      M({
        id: 'activity.sources', type: 'activity', title: '주장과 출처 잇기',
        method: '주장과 출처 잇기', tool: 'mindmap', minutes: 18,
        levels: { easy: '주장 카드 3장(출처마다 1장)을 나누고, 놓자마자 맞는지 보인다.', base: '주장 카드 6장을 세 출처에 나누고 믿을 만한 출처의 기준을 고른 뒤 오해마다 판단 근거를 짝짓는다.', challenge: '주장 카드 9장을 나누고, 활동지에 신뢰도 판단 기준을 내 말로 쓴다.' },
        activity: {
          title: '주장과 출처 잇기', tool: 'mindmap',
          teacher: '"같은 대마 이야기라도 누가 했느냐에 따라 믿을 만한 정도가 달라요. 이 주장은 어디서 나왔을까요?" 카드를 놓을 때마다 "이 말을 한 사람은 무엇을 얻나요?"라고 묻는다. 개인 후기 영상을 \'믿을 만하다\'고 보는 학생에게 "한 사람이 괜찮았다는 것이 모두에게 괜찮다는 뜻일까요?"라고 되묻는다. 공공 기관 자료도 날짜를 확인해야 한다는 점, 파는 쪽의 말은 이해관계가 있다는 점을 짚는다.',
          task: '대마에 대한 주장을 출처별로 나누고, 믿을 만한 출처의 기준과 판단 근거를 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('대마에 대한 주장 카드를 나온 곳(출처)에 따라 나누세요.', ['공공 기관 자료', '개인 영상·후기', '광고·판매 글'], [
              ['대마는 마약류로 관리된다는 정부 안내', '청소년 약물 예방 교육 자료의 설명'],
              ['"써 봤는데 아무 일 없었어" 후기', '"외국에선 다 해" 여행 브이로그'],
              ['"천연 성분, 안심하세요" 판매 글', '"후기 인증하면 할인" 홍보 글'],
            ], { k: 1, hard: [['식품의약품안전처의 마약류 안내'], ['"친구도 괜찮대"라는 댓글'], ['"자연에서 온 휴식" 광고 문구']], d: 0.3, opt: { topic: '이 주장은 어디서 왔나' } }),
            PICKQ('믿을 만한 출처인지 판단하는 기준만 고르세요.', ['누가 썼는지 밝혀져 있다', '근거 자료와 날짜가 있다', '팔려는 이해관계가 없다'], ['조회수가 많다', '말투가 친근하다', '멋진 사람이 말한다'], { d: 0.3, opt: { basket: '믿을 만한 출처의 기준' } }),
            MATCHQ('오해 문장과 그것을 바로잡는 판단 근거를 짝지으세요.', [['"다른 나라는 허용했으니 안전하다"', '허용 여부와 몸의 안전은 다른 문제다'], ['"천연 식물이라 해가 없다"', '천연이라는 것이 해가 없다는 뜻은 아니다'], ['"전자담배처럼 생겼으니 담배다"', '생김새로는 안에 든 것을 알 수 없다']], { k: 2, d: 0.35, opt: { topic: '오해를 바로잡는 근거' }, more: { hints: ['주장이 무엇을 근거로 삼는지, 그 근거가 정말 결론을 받쳐 주는지 보세요.'], conclude: '주장은 출처와 이해관계를 따져 판단해요. 우리나라에서 대마가 마약류로 관리된다는 것은 공공 기관 자료로 확인할 수 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '온라인에서 대마 이야기를 볼 때 내가 쓸 신뢰도 판단 기준 두 가지를 내 말로 쓰세요.' }] },
        notes: '카드의 기관 이름은 출처의 예시다. 실제 자료는 식품의약품안전처 등 공공 기관 누리집에서 함께 찾아본다.',
      }),
      M({
        id: 'activity.device', type: 'activity', title: '전자담배 같은 기기 갈림길',
        method: '딜레마 결과 추적', tool: 'dilemma', minutes: 18,
        levels: { easy: '갈림길 둘까지 가 보고 근거 카드 2장을 고른다.', base: '갈림길 셋까지 결과를 따라가고 근거 카드 2장으로 내 선택을 정당화한다.', challenge: '갈림길 셋을 지난 뒤 다른 끝 길을 하나 더 가 보고 견준다.' },
        activity: {
          title: '전자담배 같은 기기 갈림길', tool: 'dilemma',
          teacher: '"태오는 \'괜찮은 거\'라고 말했어요. 도윤이는 그 말을 무엇으로 확인할 수 있을까요?" 선택마다 누가 어떤 영향을 받는지 소리 내어 읽게 한다. \'한 번 해 본다\'를 고른 학생을 나무라지 않고 "이미 했다면 다음 장면에서 무엇을 할 수 있을까요?"라고 묻는다. "친구 일을 알리면 배신이다"라는 말이 나오면 \'모른 척\' 길의 끝 장면을 함께 보며 비밀과 도움 가운데 무엇이 친구를 지키는지 묻는다. 근거 카드는 내 선택을 설명할 수 있는 두 장을 고르게 한다.',
          task: '도윤이의 선택을 끝까지 따라가 결과를 보고, 근거 카드 두 장으로 내 선택을 설명해요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL3('도윤이가 되어 끝까지 안전한 길을 고르고, 근거 카드 2장을 고르세요.', DEVICE, [['ask', 'firm', 'adult'], ['leave', 'explain', 'together'], ['take', 'giveback', 'counsel']], DEVICE_R, ['unknown', 'law'], { d: 0.4, opt: { title: '건네받은 기기(가상)', maxReasons: 2 } }),
            DIL2('친구가 \'외국에선 합법\' 영상을 보낸 장면에서 근거를 따지는 길을 고르고, 근거 카드를 고르세요.', VIDEO, [['source', 'public'], ['agree', 'check']], VIDEO_R, ['who', 'public'], { d: 0.35, opt: { title: '공유된 영상(가상)' } }),
            EXPLOREQ('기기 장면에서 \'받아 든다\'로 시작한 길과 \'자리를 피한다\'로 시작한 길을 끝까지 가 보고 견주세요.', DEVICE, DEVICE_R, ['두 길의 끝 장면을 모두 보았다', '두 길에서 친구 태오에게 생긴 일을 견주었다', '이미 했을 때도 도움받을 수 있는 지점을 찾았다'], { d: 0.35, more: { conclude: '생김새나 친구의 말로는 안에 든 것을 알 수 없어요. 거절하고, 이미 했더라도 알리고, 친구를 도움과 이어 주는 길이 모두를 지켜요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내가 고른 길의 근거 두 가지를 쓰고, 친구 태오를 돕기 위해 할 수 있는 한 가지를 쓰세요.' }] },
        notes: '기기 속 물질의 효과·느낌은 묘사하지 않았다. \'어지러움·메스꺼움\'은 위험 신호로만 썼다. 학생에게 비슷한 경험을 묻지 않는다.',
      }),
      M({
        id: 'activity.debate', type: 'activity', title: '다른 나라 제도 토론 근거',
        method: '토론 근거문', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '문장 틀을 보고 주장·근거·출처를 한 문장씩 쓴다.', base: '주장·근거·출처를 담아 한 문단씩 쓰고 기준표를 점검한다.', challenge: '상대 입장의 근거를 정리하는 글에 기준 하나(상대 근거의 장점 인정)를 더해 점검한다.' },
        activity: {
          title: '다른 나라 제도 토론 근거', tool: 'rubric-writing',
          teacher: '"\'다른 나라 제도를 우리 판단의 근거로 쓸 수 있는가?\' 오늘은 이 질문으로 토론할 근거문을 써요." 쓰기 전에 기준표를 함께 읽고, 근거마다 출처를 밝히게 한다. "외국에서 허용했다는 것 자체가 안전하다는 증거"라고 쓰는 학생에게 "그 나라가 허용한 까닭과 조건, 우리나라 법은 같을까요? 그 정보는 어디서 확인했나요?"라고 묻는다. 다른 나라 사례는 참고 자료가 될 수 있지만 우리나라 법과 내 몸의 위험을 바꾸지는 않는다는 점을 짚는다.',
          task: '\'다른 나라 제도를 우리 판단의 근거로 쓸 수 있는가\' 토론에 쓸 근거문을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('내 입장을 한두 문장으로 쓰고 기준표로 점검하세요.', '\'다른 나라 제도를 우리 판단의 근거로 쓸 수 있는가\'에 대한 내 입장을 한두 문장으로 쓰세요.', ['내 입장이 첫 문장에 분명하다', '\'근거로 쓸 수 있다/없다\'를 조건과 함께 밝혔다', '감정이 아니라 판단으로 썼다'], { min: 30, max: 200, starter: '나는 다른 나라 제도를 우리 판단의 근거로 ~라고 생각한다.', d: 0.3 }),
            RWQ('내 입장을 받치는 근거를 출처와 함께 한 문단으로 쓰고 기준표로 점검하세요.', '내 입장을 받치는 근거 두 가지를 쓰고, 각 근거를 어디서 확인했는지(출처) 밝히세요.', ['근거를 두 가지 썼다', '근거마다 출처를 밝혔다', '우리나라 법이 대마를 마약류로 관리한다는 점을 다뤘다'], { min: 80, max: 500, must: [['출처', '자료', '기관', '안내']], starter: '첫째, ~. 이것은 ~에서 확인했다. 둘째, ~', sample: '다른 나라 사례는 참고할 수 있지만 그대로 근거가 되기는 어렵다. 첫째, 우리나라에서는 「마약류 관리에 관한 법률」에 따라 대마가 마약류로 관리된다(식품의약품안전처 안내). 둘째, 나라마다 허용한 까닭과 조건이 달라서 \'허용\'이 곧 \'안전\'이라는 뜻은 아니다.', d: 0.4 }),
            RWQ('상대 입장의 근거를 정리하고 기준표로 점검하세요.', '나와 반대 입장이 내세울 근거를 공정하게 정리하고, 그에 대한 내 답을 두세 문장으로 쓰세요.', ['상대 근거를 왜곡하지 않고 정리했다', '상대 근거에 대한 내 답에 근거가 있다', '사람이 아니라 주장을 다뤘다'], { min: 50, max: 300, starter: '반대 입장은 ~라고 말할 것이다. 이에 대해 나는 ~', plus: '상대 근거의 장점을 한 가지 인정했다', d: 0.45, more: { conclude: '다른 나라 제도는 참고 자료가 될 수 있지만, 허용의 까닭·조건과 우리나라 법을 함께 따져야 근거가 돼요. 근거에는 늘 출처가 따라와야 해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내 근거문에서 가장 믿을 만한 출처 하나와 그렇게 판단한 까닭을 쓰세요.' }] },
        notes: '특정 나라의 제도를 예로 들어 평가하지 않는다. 학생이 근거를 찾을 때는 공공 기관 누리집을 쓰게 한다.',
      }),
      M({
        id: 'activity.critique', type: 'activity', title: '미화 장면 다시 짜기',
        method: '미화 장면 비평 스토리보드', tool: 'story', minutes: 18,
        levels: { easy: '원래 장면에서 미화 장치를 고르고, 다시 짠 장면 카드 3장을 차례로 놓는다.', base: '미화 장치를 고르고, 결과까지 보이는 네 장면을 차례로 놓은 뒤 장면마다 비평 근거를 짝짓는다.', challenge: '카드가 섞인 채로 풀고, 활동지에 재구성 의도를 쓴다.' },
        activity: {
          title: '미화 장면 다시 짜기', tool: 'story',
          teacher: '"이 장면은 수업을 위해 지어낸 가상 영상 대본이에요. 대마를 어떻게 보이게 만들었나요?" 원래 장면의 음악·웃음·결과 생략을 함께 찾게 한다. "그냥 영상인데 무슨 상관이에요?"라는 말이 나오면 "이 장면만 본 사람은 다음 날 무슨 일이 생긴다고 생각할까요?"라고 되묻는다. 다시 짤 때는 무섭게 과장하는 것이 아니라 생략된 결과(몸·관계·법)를 사실대로 보여 주는 것이 목표라는 점을 짚는다.',
          task: '가상 영상의 미화 장치를 찾고, 결과까지 보이는 장면으로 다시 짜요.', levels: { easy: { live: true }, base: {}, challenge: { shuffle: true } },
          items: [
            { prompt: '가상 영상 대본에서 대마를 가볍게 보이게 만든 장치를 모두 고르세요.', toolOptions: { mode: 'pick', basket: '미화 장치', title: '가상 영상 대본', cards: [{ id: 'music', text: '밝은 음악 속에 웃는 친구들', motif: 'star' }, { id: 'cut', text: '다음 날 장면 없이 끝남', motif: 'cloud' }, { id: 'cool', text: '인기 많은 인물이 권함', motif: 'sun' }, { id: 'warn', text: '화면 끝에 경고 문구', motif: 'house' }] }, target: { pick: ['music', 'cut', 'cool'] }, difficulty: 0.25 },
            { prompt: '결과까지 보이는 네 장면으로 다시 짜도록 카드를 차례로 놓으세요.', toolOptions: { mode: 'order', slots: 4, title: '다시 짠 대본', cards: [{ id: 'next', text: '다음 날 수업에 집중 못 함', motif: 'cloud' }, { id: 'offer', text: '파티에서 기기를 권함', motif: 'star' }, { id: 'month', text: '한 달 뒤 상담실을 찾음', motif: 'sun' }, { id: 'pause', text: '망설이며 손에 듦', motif: 'moon' }] }, target: { order: ['offer', 'pause', 'next', 'month'] }, difficulty: 0.3,
              levels: { easy: { prompt: '결과까지 보이도록 세 장면을 차례로 놓으세요(카드 3장).', toolOptions: { slots: 3, cards: [{ id: 'next', text: '다음 날 수업에 집중 못 함', motif: 'cloud' }, { id: 'offer', text: '파티에서 기기를 권함', motif: 'star' }, { id: 'month', text: '한 달 뒤 상담실을 찾음', motif: 'sun' }] }, target: { order: ['offer', 'next', 'month'] } } } },
            { prompt: '다시 짠 장면과 그렇게 바꾼 비평 근거를 짝지으세요.', toolOptions: { mode: 'match', title: '장면과 비평 근거', slots: [{ id: 'next', label: '다음 날 장면을 넣음' }, { id: 'pause', label: '망설이는 장면을 넣음' }, { id: 'month', label: '도움 청하는 장면을 넣음' }], cards: [{ id: 'cutfix', text: '생략된 결과를 보여 준다' }, { id: 'choice', text: '거절할 수 있는 순간이 있음을 보인다' }, { id: 'hope', text: '도움받을 길이 있음을 보인다' }, { id: 'scare', text: '보는 사람을 겁주려고 과장한다' }] }, target: { match: { next: 'cutfix', pause: 'choice', month: 'hope' } }, difficulty: 0.35, conclude: '미화 장면은 음악·인물 매력·결과 생략으로 위험을 가려요. 비평은 겁주기가 아니라 가려진 결과와 선택의 순간을 사실대로 보여 주는 것이에요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내가 다시 짠 장면이 보는 사람에게 전하려는 것을 한 문장으로 쓰세요.' }] },
        notes: '영상 대본은 가상이다. 실제 영상이나 장면을 틀지 않는다. 다시 짤 때 물질을 쓰는 모습·효과를 그리지 않게 한다.',
      }),

      M({
        id: 'wrap.reflect', type: 'wrap', title: '천연이니 괜찮다 생각 변화',
        method: '생각 변화 크기', tool: 'emotion', minutes: 8,
        levels: { easy: '지금 생각의 크기만 고르게 한다.', base: '수업 전과 지금의 크기를 모두 고르고 견주게 한다.', challenge: '바뀐 근거를 말할 때 어디서 확인한 정보인지(출처) 함께 말하게 한다.' },
        wrap: {
          teacher: '"\'천연이니 괜찮다\'는 생각, 수업 전에는 얼마나 맞다고 느꼈고 지금은 어떤가요? 바뀌지 않았어도 괜찮아요." 두 눈금을 고른 뒤 짝과 바뀐 까닭을 말하게 한다. "그래도 천연이면 화학 약품보다는 낫지 않나요?"라는 말이 나오면 "오늘 본 근거 가운데 그 생각을 받쳐 주는 것과 흔드는 것은 무엇이었나요?"라고 묻는다. 생각이 바뀐 근거에 출처를 붙여 말하는 것이 오늘 배운 판단법이라는 점을 짚는다.',
          exitTicket: [
            SCALE('수업 전 내 생각의 크기를 고르세요.', '수업을 시작하기 전, \'대마는 천연 식물이니 괜찮다\'는 말을 들었을 때', '맞다', { 1: '전혀 아니다', 5: '아주 맞다' }, '수업 전에는 얼마나 맞다고 느꼈나요?'),
            SCALE('지금 내 생각의 크기를 고르세요.', '수업을 마친 지금, \'대마는 천연 식물이니 괜찮다\'는 말을 들으면', '맞다', { 1: '전혀 아니다', 5: '아주 맞다' }, '지금은 얼마나 맞다고 느끼나요?'),
            { type: 'short', prompt: '생각이 바뀌었거나 그대로인 근거 하나를 출처와 함께 쓰세요.' },
          ],
        },
        worksheet: {
          title: '내 생각의 변화',
          items: [
            { type: 'table', prompt: '수업 전과 지금의 내 생각을 견주어 쓰세요.', columns: ['', '수업 전', '지금'], cells: [['\'천연이니 괜찮다\'에 대한 생각', '', ''], ['그렇게 생각한 근거', '', '']] },
            { type: 'short', prompt: '친구가 \'천연이니 괜찮아\'라고 하면 해 줄 말을 한 문장으로 쓰세요.' },
          ],
          easy: { note: '천연 ≠ 안전 · 우리나라에서 대마는 마약류', items: [{ type: 'short', prompt: '지금 내 생각을 한 문장으로 쓰세요.' }] },
        },
      }),
      M({
        id: 'wrap.check', type: 'wrap', title: '온라인 정보 판단 점검표',
        method: '정보 판단 점검표', tool: 'kitchen', minutes: 8,
        levels: { easy: '점검표 항목을 함께 읽고 출처·날짜·이해관계 세 가지부터 표시하게 한다.', base: '점검표 여섯 항목 가운데 알맞은 다섯 가지를 스스로 표시한다.', challenge: '출구 짧은 답에 점검표에 없는 항목 하나를 새로 만들어 쓰게 한다.' },
        wrap: {
          teacher: '"앞으로 SNS에서 약물 이야기를 보면 무엇부터 확인할까요? 오늘 쓴 기준을 점검표로 정리해요." 점검표를 표시한 뒤 \'조회수가 많은가\'를 고른 학생에게 "조회수가 많은 거짓 정보도 있을까요?"라고 묻는다. 점검표는 외우는 목록이 아니라 다음에 영상을 볼 때 손에 들고 쓰는 도구라는 점을 짚는다.',
          exitTicket: [
            EXIT('kitchen', CHECKQ('온라인 정보를 판단할 때 확인할 항목만 표시하세요.', '온라인 정보 판단 점검표', [['who', '누가 만든 정보인가', true], ['date', '언제 만든 정보인가', true], ['gain', '말하는 쪽이 얻는 것이 있는가', true], ['law', '우리나라 법과 맞는가', true], ['public', '공공 기관 자료로 확인되는가', true], ['views', '조회수가 많은가', false]], { d: 0.2 })),
            { type: 'short', prompt: '점검표에 없는 항목 하나를 새로 만들어 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '나의 정보 판단 점검표',
          items: [
            { type: 'check', prompt: '앞으로 영상을 볼 때 쓸 항목에 표시하세요.', options: ['누가 만들었나', '언제 만들었나', '얻는 것이 있나', '법과 맞나', '공공 기관 자료로 확인되나'] },
            { type: 'short', prompt: '내가 새로 만든 점검 항목과 그 까닭을 쓰세요.' },
          ],
          easy: { note: '누가 · 언제 · 얻는 것 · 법 · 공공 자료', items: [{ type: 'check', prompt: '꼭 쓸 항목에 표시하세요.', options: ['누가 만들었나', '언제 만들었나', '얻는 것이 있나'] }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 3. 처방 의약품 오남용 — 수면제·식욕억제제 (10학년)
  // ======================================================================================================
  {
    const M = MOD('rx-misuse', [10]);
    const DIET = { text: '체육 대회를 앞두고 친구 유나가 말한다. "언니 이름으로 처방받은 식욕억제제가 있어. 같이 먹으면 금방 빠진대."', who: '서아', motif: 'house', choices: [
      { id: 'take', text: '"한 알만 줘 봐"라며 받는다', result: '유나가 약봉지에서 두 알을 꺼내 건넨다.', impact: [{ who: '서아', text: '내 몸에 맞는지 모르는 약을 손에 든다', tone: -1 }],
        next: { text: '며칠 뒤 가슴이 두근거리고 밤에 잠이 오지 않는다.', choices: [
          { id: 'more', text: '효과가 나는 중이라며 계속 먹는다', result: '두근거림이 심해지고 수업 중에 손이 떨린다.', impact: [{ who: '서아', text: '몸의 신호가 더 커진다', tone: -1 }], ending: '남의 처방약을 계속 먹으면 몸의 이상 신호를 놓치게 된다.' },
          { id: 'stopask', text: '먹지 않고 보호자에게 알려 약사·의사에게 묻는다', result: '보호자와 함께 병원에서 상태를 살핀다.', impact: [{ who: '서아', text: '전문가의 도움을 받는다', tone: 1 }],
            next: { text: '의사가 "친구도 같은 약을 먹고 있다면 걱정되네요"라고 한다.', choices: [
              { id: 'friend', text: '유나에게 걱정을 전하고 보건 선생님과 함께 이야기하자고 한다', result: '유나가 망설이다 보건실에 함께 간다.', impact: [{ who: '유나', text: '도움을 받을 기회가 생긴다', tone: 1 }], ending: '내가 멈춘 뒤 친구에게도 손을 내밀면 둘 다 지킬 수 있다.' },
              { id: 'silent', text: '내 일만 끝났으니 말하지 않는다', result: '유나는 혼자 약을 계속 먹는다.', impact: [{ who: '유나', text: '위험이 그대로 남는다', tone: -1 }], ending: '나만 멈추면 친구의 위험은 그대로다.' }] } }] } },
      { id: 'refuse', text: '"남의 처방약은 안 먹어"라고 거절한다', result: '유나가 "너만 빠지냐"며 서운해한다.', impact: [{ who: '서아', text: '내 몸을 지킨다', tone: 1 }],
        next: { text: '유나가 혼자라도 먹겠다고 한다.', choices: [
          { id: 'worry', text: '"네 몸이 걱정돼. 보건 선생님께 같이 물어보자"라고 한다', result: '유나가 "혼나는 거 아니야?"라고 묻는다.', impact: [{ who: '유나', text: '다시 생각해 본다', tone: 1 }],
            next: { text: '보건실 앞에서 유나가 망설인다.', choices: [
              { id: 'go', text: '"건강하게 관리하는 법을 묻는 거야"라며 함께 들어간다', result: '보건 선생님이 운동·식사 관리와 약의 위험을 함께 이야기해 준다.', impact: [{ who: '유나', text: '안전한 방법을 알게 된다', tone: 1 }], ending: '거절에 걱정과 도움을 더하면 친구의 선택이 바뀔 수 있다.' },
              { id: 'giveup', text: '"그럼 네가 알아서 해"라며 돌아선다', result: '유나는 약을 계속 먹는다.', impact: [{ who: '유나', text: '혼자 위험을 안고 간다', tone: -1 }], ending: '거절만 하고 돌아서면 친구는 혼자 남는다.' }] } },
          { id: 'shrug', text: '"네 마음대로 해"라고 한다', result: '유나가 약을 챙겨 간다.', impact: [{ who: '유나', text: '위험을 혼자 감당한다', tone: -1 }], ending: '내 몸을 지킨 것에서 한 걸음 더 나가야 친구도 지킬 수 있다.' }] } },
      { id: 'tellnow', text: '"그 약은 언니 몸에 맞춰 처방된 거야"라며 걱정을 말한다', result: '유나가 "그게 무슨 상관이야?"라고 묻는다.', impact: [{ who: '유나', text: '처음으로 약의 처방을 생각한다', tone: 1 }],
        next: { text: '유나가 "그럼 약국에서 그냥 사면 되잖아"라고 한다.', choices: [
          { id: 'explain', text: '"처방이 필요한 약은 의사가 내 몸을 보고 정하는 거야"라고 설명한다', result: '유나가 고개를 끄덕이다 "살은 어떻게 빼지?"라고 묻는다.', impact: [{ who: '유나', text: '약 대신 다른 길을 찾는다', tone: 1 }],
            next: { text: '유나가 함께 방법을 찾자고 한다.', choices: [
              { id: 'plan', text: '보건 선생님께 건강한 관리 방법을 같이 묻는다', result: '둘이 함께 운동 계획을 세운다.', impact: [{ who: '유나', text: '몸을 해치지 않는 목표를 세운다', tone: 1 }], ending: '약 대신 함께 찾는 계획이 친구를 지킨다.' },
              { id: 'web', text: 'SNS에서 빨리 빠지는 방법을 찾아본다', result: '\'처방 없이 구하는 다이어트 약\' 광고가 뜬다.', impact: [{ who: '유나', text: '다시 위험한 광고와 닿는다', tone: -1 }], ending: '빠른 방법을 찾을수록 위험한 광고가 가까워진다.' }] } },
          { id: 'okay', text: '"그럼 그렇게 해"라고 한다', result: '유나가 처방 없이 파는 곳을 찾기 시작한다.', impact: [{ who: '유나', text: '더 위험한 길로 간다', tone: -1 }], ending: '처방이 필요한 약을 처방 없이 구하려 하면 위험이 더 커진다.' }] } }] };
    const DIET_R = [{ id: 'mine', text: '처방약은 처방받은 사람의 몸에 맞춰 정해진다' }, { id: 'share', text: '처방약을 남에게 나눠 주거나 받아 먹지 않는다' }, { id: 'help', text: '친구에게 걱정을 말하고 보건 선생님·약사와 잇는다' }, { id: 'hospital', text: '병원에서 받은 약이니 누가 먹어도 안전하다', why: '병원 약은 처방받은 사람의 상태에 맞춘 약이에요. 다른 사람에게는 위험할 수 있어요.' }, { id: 'more', text: '많이 먹을수록 효과가 크다', why: '정해진 양을 넘기면 효과가 아니라 위험이 커져요.' }];
    const SISTER = { text: '시험 전날 밤, 언니가 "잠 안 오면 내 수면제 하나 줄까?"라고 묻는다.', who: '서아', motif: 'moon', choices: [
      { id: 'yes', text: '"응, 하나만"이라며 받는다', result: '아침에 일어나기 힘들고 시험 시간에 멍하다.', impact: [{ who: '서아', text: '시험을 망칠까 불안하다', tone: -1 }],
        next: { text: '다음 시험 전날 밤에도 잠이 오지 않는다.', choices: [
          { id: 'again', text: '언니에게 또 달라고 한다', result: '약 없이는 잠들기 어렵다고 느끼기 시작한다.', impact: [{ who: '서아', text: '약에 기대는 습관이 생긴다', tone: -1 }], ending: '한 번이 되풀이되면 약 없이는 안 된다고 느끼게 된다.' },
          { id: 'talk', text: '약 대신 보호자와 잠 문제를 이야기한다', result: '보호자와 함께 잠 습관을 고치고 필요하면 병원에 가기로 한다.', impact: [{ who: '서아', text: '바른 도움을 찾는다', tone: 1 }], ending: '처음 선택이 잘못돼도 다음 선택에서 바로잡을 수 있다.' }] } },
      { id: 'no', text: '"그건 언니 처방약이잖아, 괜찮아"라고 거절한다', result: '잠은 늦게 들었지만 아침에 맑은 정신으로 일어난다.', impact: [{ who: '서아', text: '내 몸에 맞지 않는 약을 피한다', tone: 1 }],
        next: { text: '언니가 "나도 요즘 이 약 없으면 못 자"라고 털어놓는다.', choices: [
          { id: 'care', text: '"의사 선생님께 그 이야기도 해 봐"라고 권한다', result: '언니가 다음 진료 때 이야기하겠다고 한다.', impact: [{ who: '언니', text: '도움을 청할 계기가 생긴다', tone: 1 }], ending: '가족의 약 습관도 걱정을 말하고 전문가와 잇는다.' },
          { id: 'pass', text: '"언니 일이니까"라며 넘긴다', result: '언니는 혼자 약에 기대는 습관을 이어 간다.', impact: [{ who: '언니', text: '도움과 멀어진다', tone: 0 }], ending: '가족의 위험 신호를 듣고도 넘기면 도울 기회를 잃는다.' }] } }] };
    const SISTER_R = [{ id: 'mine', text: '내 처방이 아닌 약은 먹지 않는다' }, { id: 'expert', text: '약에 기대는 습관은 의사·약사와 이야기한다' }, { id: 'family', text: '가족이 주는 약이니 안전하다', why: '가족이라도 그 사람 몸에 맞춘 처방이라 나에게는 맞지 않을 수 있어요.' }];
    const TOWN = { title: '우리 동네(가상)', grid: [4, 3], places: [{ name: '약국', icon: 'market', at: [0, 0] }, { name: '병원', icon: 'hospital', at: [3, 0] }, { name: '학교 보건실', icon: 'school', at: [0, 2] }, { name: '학교 상담실', icon: 'office', at: [2, 2] }, { name: '집', icon: 'house', at: [3, 2] }, { name: '공원', icon: 'park', at: [2, 0] }] };

    MODS.push(
      M({
        id: 'intro.case', type: 'intro', title: '수면제 사례 장면 차례',
        method: '사례 장면 차례', tool: 'story', minutes: 6,
        levels: { easy: '앞 장면 세 개만 함께 읽고 차례를 확인한다.', base: '다섯 장면을 차례로 놓는 시연을 보며 문제가 시작된 장면을 고른다.', challenge: '시작점 장면이 생긴 원인(시험 스트레스·몰래 해결하려는 마음)을 분석해 말한다.' },
        intro: {
          teacher: '"서아의 이야기는 가상이지만 흔히 생길 수 있는 일이에요. 문제는 어느 장면에서 시작됐을까요?" 시연 단추로 장면이 차례로 놓이는 모습을 보인 뒤 시작점을 고르게 한다. "잠이 안 온 것 자체가 문제의 시작"이라는 말이 나오면 "잠이 안 오는 것은 누구에게나 생겨요. 그때 무엇을 했느냐가 갈림길이 아닐까요?"라고 되묻는다. 처방약이라도 처방받은 사람이 아니면 위험하다는 점을 오늘 다룬다고 밝힌다.',
          student: '서아의 다섯 장면을 차례대로 보고, 문제가 시작된 장면이 어디인지 골라 보세요.',
          demo: { tool: 'story', options: { mode: 'order', slots: 5, title: '서아의 시험 기간(가상)', cards: [{ id: 'stress', text: '시험 걱정에 잠이 안 온다', motif: 'moon' }, { id: 'find', text: '가족의 수면제를 발견한다', motif: 'house' }, { id: 'secret', text: '몰래 한 알 먹는다', motif: 'cloud' }, { id: 'more', text: '효과가 약하다며 양을 늘린다', motif: 'star' }, { id: 'day', text: '낮에 졸고 기억이 흐려진다', motif: 'rain' }], shuffle: false }, sequence: [{ order: ['stress', 'find', 'secret', 'more', 'day'] }] },
          art: { draw: 'five paper story panels in a row showing a student at a desk at night, a medicine cabinet, a small pill box, and a sleepy classroom, a paper arrow pointing at the third panel', banner: '어디서 시작됐을까?', extra: [{ motif: 'moon', x: 300, y: 96 }] },
        },
        notes: '사례는 가상이다. 약 이름·용량은 쓰지 않는다. 학생에게 집에 있는 약을 말하게 하지 않는다.',
      }),
      M({
        id: 'intro.data', type: 'intro', title: '약 정보 얻는 곳 자료',
        method: '가상 설문 원그래프 해석', tool: 'chart', minutes: 6,
        levels: { easy: '원그래프의 큰 조각 3개(SNS·영상, 약사·의사, 친구)만 함께 읽는다.', base: '다섯 조각을 모두 읽고 믿을 만한 출처 조각의 합을 따진다.', challenge: '가상 자료의 한계(몇 명에게 물었는지·질문 방식)를 짚는다.' },
        intro: {
          teacher: '"가상의 학급 설문이에요. 약에 대한 정보를 어디서 가장 많이 얻을까요?" 시연 단추로 가장 큰 조각이 골라지는 모습을 보인다. "요즘은 영상이 더 자세하게 알려 준다"는 말이 나오면 "그 영상을 만든 사람은 내 몸 상태를 알고 있을까요?"라고 되묻는다. 약사·의사·약 설명서 조각을 합치면 얼마인지 묻고, 그 조각을 키우는 것이 오늘의 목표라고 밝힌다.',
          student: '가상 설문 원그래프에서 가장 큰 조각을 찾고, 믿을 만한 출처(약사·의사, 약 설명서) 조각이 얼마나 되는지 보세요.',
          demo: { tool: 'chart', options: { type: 'circle', mode: 'read', title: '약 정보를 얻는 곳(가상 설문)', unit: '%', data: [['SNS·영상', 35], ['약사·의사', 25], ['친구', 20], ['약 설명서', 15], ['기타', 5]], question: '가장 큰 조각은?', choices: ['SNS·영상', '약사·의사', '친구', '약 설명서', '기타'] }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper pie chart cut into five colored slices, a paper phone on one slice, a paper pharmacist coat and a folded medicine leaflet on others', banner: '약 정보, 어디서 얻나요?', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
        notes: '그래프는 수업용 가상 자료다.',
      }),

      M({
        id: 'activity.rules', type: 'activity', title: '바른 사용과 오남용',
        method: '바른 사용/오남용 분류', tool: 'mindmap', minutes: 18,
        levels: { easy: '행동 카드 4장을 바른 사용·오남용으로 나누고, 놓자마자 맞는지 보인다.', base: '행동 카드 8장을 나누고, 오남용 행동마다 까닭을 짝짓고 경계 사례를 고른다.', challenge: '헷갈리는 카드 2장이 더해진 10장을 나눈다.' },
        activity: {
          title: '바른 사용과 오남용', tool: 'mindmap',
          teacher: '"처방약은 병원에서 받았으니 안전할까요? 안전은 약이 아니라 쓰는 방법에서 정해져요." 카드를 놓을 때마다 "누구의 처방이고, 무슨 목적으로 쓰나요?"라고 묻는다. \'남은 약을 친구에게 나눠 주기\'를 바른 사용에 넣는 학생에게 "친구와 내 몸 상태, 처방받은 까닭이 같을까요?"라고 되묻는다. 수면제·식욕억제제 가운데 일부는 향정신성의약품이라 오남용하면 의존이 생길 수 있어 법으로 관리된다는 점을 짚는다.',
          task: '처방약을 쓰는 행동을 바른 사용과 오남용으로 나누고, 그 까닭을 짝지어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('처방약을 쓰는 행동 카드를 바른 사용과 오남용으로 나누세요.', ['바른 사용', '오남용'], [
              ['처방받은 사람이 처방대로 먹기', '정해진 시간과 양 지키기', '궁금한 점을 약사에게 묻기', '남은 약을 폐의약품 수거함에 내기'],
              ['남은 약을 친구에게 나눠 주기', '효과가 약하다며 양 늘리기', '잠을 줄이려고 다른 목적으로 쓰기', '가족의 약을 몰래 먹기'],
            ], { k: 2, hard: [['부작용이 걱정되면 의사와 상의하기'], ['증상이 비슷해 보여 남의 처방약 먹기']], d: 0.3, opt: { topic: '처방약 쓰기' } }),
            MATCHQ('오남용 행동과 그것이 위험한 까닭을 짝지으세요.', [['나눠 주기', '내 몸에 맞춘 처방은 다른 사람 몸에 맞지 않는다'], ['양 늘리기', '정해진 양을 넘기면 의존과 부작용 위험이 커진다'], ['다른 목적으로 쓰기', '처방받은 목적 밖의 사용은 오남용이다']], { k: 2, d: 0.35, opt: { topic: '오남용이 위험한 까닭' } }),
            PICKQ('경계 사례 가운데 오남용에 해당하는 것만 고르세요.', ['지난번에 남은 수면제를 시험 전날 먹기', '살을 빼려고 언니의 식욕억제제 먹기'], ['처방받은 감기약을 의사 말대로 끝까지 먹기', '먹다 남은 약을 약국 수거함에 내기'], { d: 0.4, opt: { basket: '오남용' }, more: { conclude: '처방약의 안전은 \'처방받은 사람이, 처방받은 목적으로, 정해진 양만큼\' 쓸 때 지켜져요. 남은 약은 수거함에 내요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '\'병원에서 받은 약은 누가 먹어도 안전하다\'는 말이 틀린 까닭을 한 문장으로 쓰세요.' }] },
      }),
      M({
        id: 'activity.consult', type: 'activity', title: '약 상담 갈 곳 지도',
        method: '상담 기관 지도와 질문', tool: 'map', minutes: 18,
        levels: { easy: '핀을 놓으면 그 칸의 장소 이름이 바로 보인다.', base: '장소 이름을 보고 네 상황마다 갈 곳에 핀을 꽂고, 활동지에 물을 질문을 쓴다.', challenge: '맞힌 뒤에야 읽기 글자가 보이고, 활동지에 비밀 보장이 필요한 상황을 골라 쓴다.' },
        activity: {
          title: '약 상담 갈 곳 지도', tool: 'map',
          teacher: '"약이 궁금하거나 걱정될 때 어디에 물어야 할까요? 인터넷 검색보다 빠르고 정확한 곳이 동네에 있어요." 상황마다 핀을 꽂기 전에 "지금 필요한 것은 약 정보인가요, 진료인가요, 마음 상담인가요?"라고 묻는다. \'잠이 안 와 약에 기대고 싶은 마음\'에 약국을 고른 학생에게 "약사가 마음의 고민까지 오래 들어줄 수 있을까요? 학교 안에서 이야기할 곳은 어디일까요?"라고 되묻는다. 상담실에서 한 이야기는 원칙적으로 비밀이 지켜지지만, 생명·안전이 위험하면 도움을 위해 알릴 수 있다는 점을 짚는다.',
          task: '가상 동네 지도에서 상황마다 물어볼 곳에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: { revealAfterCheck: true, readout: true } },
          items: [
            { prompt: '처방받은 약을 먹는 중인데 감기약을 같이 먹어도 되는지 궁금해요. 물어볼 곳에 핀을 꽂으세요.', toolOptions: TOWN, target: { place: '약국' }, difficulty: 0.2 },
            { prompt: '수업 중에 갑자기 어지럽고 졸음이 쏟아져요. 학교에서 먼저 갈 곳에 핀을 꽂으세요.', toolOptions: TOWN, target: { place: '학교 보건실' }, difficulty: 0.2 },
            { prompt: '시험 스트레스로 잠이 안 와 약에 기대고 싶은 마음이 들어요. 이 고민을 털어놓을 곳에 핀을 꽂으세요.', toolOptions: TOWN, target: { place: '학교 상담실' }, difficulty: 0.3 },
            { prompt: '몇 주째 밤마다 잠들기 어려워 낮 생활이 힘들어요. 보호자와 함께 진료받을 곳에 핀을 꽂으세요.', toolOptions: TOWN, target: { place: '병원' }, difficulty: 0.3, conclude: '약 정보는 약국, 학교에서 몸이 이상하면 보건실, 마음의 고민은 상담실, 계속되는 증상은 병원 — 필요에 맞는 곳에 물어요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '상황마다 갈 곳과 그곳에 물을 질문을 쓰세요.', columns: ['상황', '갈 곳', '물을 질문'], cells: [['약을 같이 먹어도 될지 궁금함', '', ''], ['약에 기대고 싶은 마음', '', '']] }] },
        notes: '지도는 가상 동네다. 상담 비밀 보장의 원칙과 예외(생명·안전)는 학교 상담 규정에 맞춰 교사가 확인해 말한다.',
      }),
      M({
        id: 'activity.diet', type: 'activity', title: '식욕억제제 권유 갈림길',
        method: '딜레마 결과 추적', tool: 'dilemma', minutes: 18,
        levels: { easy: '갈림길 둘까지 가 보고 근거 카드를 고른다.', base: '갈림길 셋까지 건강·법·관계 결과를 따라가고 근거 카드를 고른다.', challenge: '친구를 돕는 길과 다른 끝 길을 하나 더 끝까지 가 보고 견준다.' },
        activity: {
          title: '식욕억제제 권유 갈림길', tool: 'dilemma',
          teacher: '"유나는 친구라서 좋은 것을 나누려 했을지도 몰라요. 그런데 그 약은 누구의 처방인가요?" 선택마다 서아와 유나에게 생기는 일을 소리 내어 읽게 한다. \'받는다\'를 고른 학생에게 "이미 받았다면 다음 장면에서 무엇을 할 수 있을까요?"라고 묻는다. "거절하면 됐지 친구까지 챙겨야 하나요?"라는 말이 나오면 \'알아서 해\' 길의 끝 장면을 함께 보며 거절 뒤 한 걸음이 무엇을 바꾸는지 짚는다. 다른 사람 이름으로 받은 처방약을 나눠 먹는 것은 건강만이 아니라 법의 문제도 될 수 있다는 점을 짚는다.',
          task: '서아의 선택을 끝까지 따라가 결과를 보고, 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL3('서아가 되어 끝까지 안전한 길을 고르고, 근거 카드를 고르세요.', DIET, [['refuse', 'worry', 'go'], ['tellnow', 'explain', 'plan'], ['take', 'stopask', 'friend']], DIET_R, ['mine', 'help'], { d: 0.4, opt: { title: '식욕억제제 권유(가상)' } }),
            DIL2('언니가 수면제를 권하는 장면에서 안전한 길을 고르고, 근거 카드를 고르세요.', SISTER, [['no', 'care'], ['yes', 'talk']], SISTER_R, ['mine', 'expert'], { d: 0.35, opt: { title: '시험 전날 밤(가상)' } }),
            EXPLOREQ('식욕억제제 장면에서 \'거절\'로 시작한 길과 \'걱정을 말한다\'로 시작한 길을 끝까지 가 보고 견주세요.', DIET, DIET_R, ['두 길의 끝 장면을 모두 보았다', '두 길에서 유나에게 생긴 일을 견주었다', '친구를 돕는 말 한 가지를 찾았다'], { d: 0.35, more: { conclude: '처방약은 처방받은 사람의 것이에요. 받지 않는 것에서 멈추지 않고 걱정을 말하고 보건 선생님·약사와 이어 주면 친구도 지킬 수 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '유나를 돕기 위해 내가 할 수 있는 말을 한두 문장으로 쓰세요.' }] },
        notes: '약의 효과·양은 다루지 않는다. 다이어트 고민 자체를 나무라지 않고, 약이 아닌 안전한 길(보건 상담·운동·식사)로 잇는다.',
      }),
      M({
        id: 'activity.proposal', type: 'activity', title: '우리 집 의약품 수칙 제안',
        method: '가족 수칙 제안서', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '제안서 틀(문제 → 수칙 → 실천)의 문장 시작 도움말을 보고 쓴다.', base: '문제, 수칙 3개, 실천 방법을 쓰고 기준표를 점검한다.', challenge: '실천 방법 글에 기준 하나(가족의 반응 예상과 설득 방법)를 더해 점검한다.' },
        activity: {
          title: '우리 집 의약품 수칙 제안', tool: 'rubric-writing',
          teacher: '"오늘 배운 것을 우리 집에 적용해 봐요. 가족에게 내밀 수칙 제안서를 써요." 쓰기 전에 기준표를 함께 읽는다. "약은 원래 엄마가 관리하니 나는 상관없다"는 학생에게 "가족 모두가 지킬 수칙이라면 내가 할 일은 없을까요? 남은 약이 어디에 있는지 아는 사람은 누구일까요?"라고 묻는다. 수칙은 \'조심하자\'가 아니라 \'누가·언제·무엇을\' 하는지 보여야 지켜진다는 점을 짚는다. 집에 있는 실제 약 이름은 쓰지 않는다.',
          task: '우리 집 의약품 안전 수칙 제안서를 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('제안서의 \'문제\' 부분을 쓰고 기준표로 점검하세요.', '집에서 약을 다룰 때 생길 수 있는 문제를 두세 문장으로 쓰세요(실제 약 이름은 쓰지 않아요).', ['집에서 생길 수 있는 문제를 구체적으로 썼다', '그 문제가 왜 위험한지 썼다', '가족을 탓하지 않고 썼다'], { min: 40, max: 300, starter: '우리 집에서는 ~할 때 문제가 생길 수 있다. 왜냐하면 ~', d: 0.3 }),
            RWQ('수칙 세 가지를 쓰고 기준표로 점검하세요.', '우리 집 의약품 안전 수칙 세 가지를 \'누가·언제·무엇을\'이 보이게 쓰세요.', ['수칙을 세 가지 썼다', '수칙마다 누가·언제·무엇을 하는지 보인다', '나눠 주기 금지나 남은 약 처리를 하나 이상 넣었다'], { min: 60, max: 400, must: [['처방', '남은 약', '나눠']], starter: '첫째, ~. 둘째, ~. 셋째, ~', sample: '첫째, 처방약은 처방받은 사람만 처방대로 먹는다. 둘째, 남은 약은 한 달에 한 번 함께 모아 약국이나 보건소 수거함에 낸다. 셋째, 약이 궁금하면 인터넷 대신 약사에게 묻는다.', d: 0.4 }),
            RWQ('수칙을 실천하는 방법을 쓰고 기준표로 점검하세요.', '가족이 수칙을 실제로 지키게 할 방법(붙여 두기·정해진 날 등)을 두세 문장으로 쓰세요.', ['실천 방법이 구체적이다', '내가 맡을 일을 썼다', '가족 모두가 할 수 있는 방법이다'], { min: 40, max: 300, starter: '이 수칙을 지키려고 나는 ~', plus: '가족의 반응을 예상하고 설득할 말을 썼다', d: 0.4, more: { conclude: '좋은 수칙은 누가·언제·무엇을 하는지 보여요. 처방대로 먹기, 나눠 주지 않기, 남은 약 수거함에 내기가 우리 집 약 안전의 시작이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내 제안서에서 가장 먼저 실천할 수칙 하나와 그 날짜를 쓰세요.' }] },
        notes: '남은 약을 수거함에 내는 곳은 지역마다 다르다(약국·보건소·주민센터 등). 수업 전 우리 지역 안내를 확인한다. 학생 집의 실제 약을 조사·발표시키지 않는다.',
      }),

      M({
        id: 'wrap.reflect', type: 'wrap', title: '처방약 안전 생각 변화',
        method: '생각 변화 크기', tool: 'emotion', minutes: 8,
        levels: { easy: '지금 생각의 크기만 고르게 한다.', base: '수업 전과 지금의 크기를 모두 고르고 까닭을 말하게 한다.', challenge: '가족에게 전할 말을 출구 짧은 답에 쓰게 한다.' },
        wrap: {
          teacher: '"\'병원에서 받은 약은 안전하다\'는 생각, 수업 전과 지금 얼마나 달라졌나요?" 두 눈금을 고른 뒤 짝과 까닭을 나누게 한다. "그래도 의사가 준 약이니 믿어야 하지 않나요?"라는 말이 나오면 "의사는 누구를 위해 그 약을 정했나요? 그 사람이 아닌 내가 먹어도 같을까요?"라고 묻는다. 약을 믿는 것과 약을 아무나 먹는 것은 다르다는 점을 짚는다.',
          exitTicket: [
            SCALE('수업 전 내 생각의 크기를 고르세요.', '수업 전, \'병원에서 받은 약은 누가 먹어도 안전하다\'는 말을 들었을 때', '맞다', { 1: '전혀 아니다', 5: '아주 맞다' }, '수업 전에는 얼마나 맞다고 느꼈나요?'),
            SCALE('지금 내 생각의 크기를 고르세요.', '수업을 마친 지금, \'병원에서 받은 약은 누가 먹어도 안전하다\'는 말을 들으면', '맞다', { 1: '전혀 아니다', 5: '아주 맞다' }, '지금은 얼마나 맞다고 느끼나요?'),
            { type: 'short', prompt: '오늘 배운 것 가운데 가족에게 꼭 전하고 싶은 말을 한 문장으로 쓰세요.' },
          ],
        },
        worksheet: {
          title: '처방약에 대한 내 생각',
          items: [
            { type: 'table', prompt: '수업 전과 지금의 생각을 견주어 쓰세요.', columns: ['', '수업 전', '지금'], cells: [['처방약은 안전한가', '', ''], ['그렇게 생각한 까닭', '', '']] },
            { type: 'short', prompt: '가족에게 전할 말을 한 문장으로 쓰세요.' },
          ],
          easy: { note: '처방약 = 처방받은 사람이, 처방대로', items: [{ type: 'short', prompt: '지금 내 생각을 한 문장으로 쓰세요.' }] },
        },
      }),
      M({
        id: 'wrap.words', type: 'wrap', title: '처방약 핵심 개념 카드',
        method: '핵심 개념 카드', tool: 'wordcards', minutes: 8,
        levels: { easy: '처방·나눠 주기 금지 두 카드를 함께 읽고 짝짓게 한다.', base: '개념 카드 넷을 뜻과 짝짓고, 짝에게 오늘 사례로 하나를 설명하게 한다.', challenge: '두 개념을 잇는 문장(예: 처방은 ~라서 나눠 주면 안 된다)을 출구 짧은 답에 쓰게 한다.' },
        wrap: {
          teacher: '"오늘 사례를 네 낱말로 정리해 봐요. 서아의 이야기에서 이 낱말이 어디에 나왔나요?" 카드를 짝지은 뒤 짝에게 한 카드씩 사례로 설명하게 한다. \'목적 외 사용\'을 \'많이 먹는 것\'으로만 아는 학생에게 "잠을 줄이려고, 살을 빼려고 쓰는 것은 양의 문제일까요, 목적의 문제일까요?"라고 묻는다. 네 낱말이 모두 \'이 약은 누구의 것이고 무엇을 위한 것인가\'라는 질문으로 이어진다는 점을 짚는다.',
          exitTicket: [
            EXIT('wordcards', WORDQ('처방약 핵심 개념 카드를 뜻과 짝지으세요.', [['처방', '의사가 내 몸 상태를 보고 약과 양을 정하는 것'], ['목적 외 사용', '처방받은 까닭과 다른 목적으로 약을 쓰는 것'], ['나눠 주기 금지', '내 처방약을 다른 사람에게 주지 않는 것'], ['향정신성의약품', '뇌에 작용해 오남용하면 의존이 생길 수 있어 법으로 관리하는 약']], { k: 4, d: 0.2 })),
            { type: 'short', prompt: '두 개념을 이어 한 문장으로 쓰세요(예: 처방은 ~라서 ~).' },
            MOOD,
          ],
        },
        worksheet: {
          title: '처방약 핵심 개념',
          items: [
            { type: 'blank', prompt: '빈칸을 채우세요.', text: '처방약은 처방받은 ___이 처방받은 목적으로 정해진 양만큼 쓴다.', answer: '사람' },
            { type: 'short', prompt: '\'목적 외 사용\'의 예를 오늘 사례에서 하나 찾아 쓰세요.' },
          ],
          easy: { note: '처방 · 목적 외 사용 · 나눠 주기 금지 · 향정신성의약품', items: [{ type: 'short', prompt: '\'나눠 주기 금지\'의 뜻을 한 문장으로 쓰세요.' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 4. 물질별 분류와 피해 — 필로폰·펜타닐·케타민 (11학년)
  // ======================================================================================================
  {
    const M = MOD('substance-harm', [11]);
    const SOS = { text: '밤 10시, 친구 민재에게서 문자가 왔다. "숨쉬기가 좀 이상해. 아까 모르는 약을 먹었어. 근데 아무한테도 말하지 마."', who: '나', motif: 'moon', choices: [
      { id: 'call', text: '바로 119에 신고하고 민재가 있는 곳을 묻는다', result: '민재가 집 주소를 보내고, 구급대가 출발한다.', impact: [{ who: '민재', text: '빨리 도움이 닿는다', tone: 1 }],
        next: { text: '구급대를 기다리는 동안 민재의 답이 점점 느려진다.', choices: [
          { id: 'adult', text: '민재 보호자와 내 보호자에게도 바로 알린다', result: '보호자가 민재 곁으로 가서 구급대를 맞는다.', impact: [{ who: '민재', text: '혼자 있지 않게 된다', tone: 1 }], ending: '숨쉬기가 이상하면 비밀보다 119와 어른이 먼저다.' },
          { id: 'waitonly', text: '구급대가 오니 더 할 일은 없다며 기다린다', result: '민재 집 문이 잠겨 있어 구급대가 들어가는 데 시간이 걸린다.', impact: [{ who: '민재', text: '도움이 늦게 닿는다', tone: -1 }], ending: '신고 뒤에도 곁에 있을 사람을 함께 불러야 한다.' }] } },
      { id: 'wait', text: '조금 기다려 보자며 "괜찮아질 거야"라고 답한다', result: '30분 뒤 민재가 답을 하지 않는다.', impact: [{ who: '민재', text: '위급한 시간이 흘러간다', tone: -1 }],
        next: { text: '전화를 걸어도 받지 않는다.', choices: [
          { id: 'late', text: '이제라도 119에 신고하고 보호자에게 알린다', result: '구급대가 출발하지만 처음보다 시간이 많이 흘렀다.', impact: [{ who: '민재', text: '늦었지만 도움이 닿는다', tone: 0 }], ending: '늦게라도 신고하는 것이 신고하지 않는 것보다 낫다.' },
          { id: 'sleep', text: '잠들었겠지 하고 나도 잔다', result: '아무도 민재의 상태를 모른 채 밤이 지난다.', impact: [{ who: '민재', text: '아무 도움도 받지 못한다', tone: -1 }], ending: '호흡의 이상은 기다려서 나아지는 신호가 아니다.' }] } },
      { id: 'keep', text: '비밀을 지키려고 아무에게도 말하지 않는다', result: '민재가 "고마워"라고 답한 뒤 연락이 끊긴다.', impact: [{ who: '민재', text: '혼자 위험을 견딘다', tone: -1 }],
        next: { text: '마음이 불안해 잠이 오지 않는다.', choices: [
          { id: 'break', text: '비밀을 깨고 119와 보호자에게 알린다', result: '구급대와 보호자가 민재를 찾아간다.', impact: [{ who: '민재', text: '도움이 닿는다', tone: 1 }], ending: '생명이 걸린 비밀은 지키는 것이 아니라 알리는 것이 친구를 지킨다.' },
          { id: 'hold', text: '약속했으니 끝까지 지킨다', result: '다음 날 아침까지 민재의 소식을 모른다.', impact: [{ who: '민재', text: '도움을 받지 못한다', tone: -1 }], ending: '\'말하지 마\'라는 부탁보다 친구의 생명이 먼저다.' }] } }] };
    const SOS_R = [{ id: 'breath', text: '숨쉬기가 이상하면 위급한 상황일 수 있다' }, { id: 'first', text: '생명이 걸린 상황에서는 비밀보다 119가 먼저다' }, { id: 'promise', text: '친구가 말하지 말라고 했으니 지켜야 한다', why: '생명이 걸린 비밀은 알리는 것이 친구를 지키는 일이에요.' }, { id: 'sleepok', text: '자고 나면 괜찮아진다', why: '호흡의 이상은 기다린다고 나아지지 않을 수 있어요.' }];

    MODS.push(
      M({
        id: 'intro.news', type: 'intro', title: '가상 기사 제목 낱말',
        method: '가상 기사 낱말 카드', tool: 'wordcards', minutes: 6,
        levels: { easy: '기사 제목 카드 1장(필로폰 의존)만 함께 읽고 질문 하나를 만든다.', base: '기사 제목 3장을 읽고 물질 이름과 \'의존\'·\'과다 투여\'·\'판단력\' 같은 낱말을 찾아 질문을 만든다.', challenge: '만든 질문을 찬반 토론 주제로 바꿔 말한다.' },
        intro: {
          teacher: '"오늘 기사는 모두 수업을 위해 지은 가상 기사예요. 제목에서 어떤 낱말이 눈에 띄나요?" 시연 단추로 물질 이름이 기사 제목과 짝지어지는 모습을 보인 뒤 \'의존\'·\'과다 투여 사고\' 같은 낱말에 밑줄을 긋게 한다. "의료용으로 쓰는 약이 왜 기사에 나와요?"라는 질문이 나오면 "의료용 쓰임과 기사 속 쓰임은 무엇이 다를까요? 그 질문을 오늘 함께 풀어요"라고 받는다. 쓰는 방법이나 느낌이 아니라 피해와 분류를 다룬다고 밝힌다.',
          student: '가상 기사 제목을 읽고 물질 이름과 눈에 띄는 낱말을 찾아, 궁금한 점을 질문 하나로 만들어 보세요.',
          demo: { tool: 'wordcards', options: { words: [{ en: '필로폰', ko: '[가상 기사] 필로폰 의존 청년 "끊으려 해도 다시 찾게 돼"… 회복 과정 털어놔' }, { en: '펜타닐', ko: '[가상 기사] 의료용 진통제 펜타닐, 목적 밖 사용으로 과다 투여 사고 이어져' }, { en: '케타민', ko: '[가상 기사] 케타민 오남용 뒤 판단력이 흐려져 사고로 이어진 사례' }] }, sequence: [{ match: { 필로폰: '필로폰', 펜타닐: '펜타닐', 케타민: '케타민' } }] },
          art: { draw: 'three paper newspaper clippings with bold headlines pinned to a corkboard, red paper underlines under key words, a question mark cut from paper beside them', banner: '기사 속 낱말에서 질문 만들기', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '기사는 모두 가상이다. 실제 사건·인물·통계를 쓰지 않는다. 물질을 쓰는 방법·양·느낌은 다루지 않는다.',
      }),
      M({
        id: 'intro.organs', type: 'intro', title: '판단·박동·호흡 기관 잇기',
        method: '영향 기관 찾기', tool: 'body', minutes: 6,
        levels: { easy: '종이 몸에서 폐 한 곳만 함께 찾고 \'호흡\' 설명을 읽는다.', base: '뇌·심장·폐 세 곳과 영향 설명을 잇는 시연을 본다.', challenge: '호흡에 영향을 주는 물질이 왜 더 위급한지(숨이 멈추면 몇 분 안에 위험) 추론해 말한다.' },
        intro: {
          teacher: '"마약류는 몸의 어디에 영향을 줄 수 있을까요? 종이 몸에서 세 곳을 찾아 설명과 이어 봐요." 시연 단추로 뇌·심장·폐가 설명과 짝지어지는 모습을 보인다. "한 번은 몸이 견딜 수 있잖아요"라는 말이 나오면 "호흡을 맡은 폐에 영향을 주는 물질이라면, 한 번에도 숨이 느려질 수 있을까요?"라고 되묻는다. 숨쉬기가 이상한 친구를 보면 119가 먼저라는 점을 오늘 정리 때 다시 다룬다고 밝힌다.',
          student: '종이 몸에서 뇌·심장·폐를 찾고, 물질이 판단·심장 박동·호흡에 어떤 영향을 줄 수 있는지 설명과 이어 보세요.',
          demo: { tool: 'body', options: { mode: 'match', organs: ['뇌', '심장', '폐'], jobs: { 뇌: '판단과 기억 — 물질이 흐리게 할 수 있다', 심장: '박동 — 물질이 지나치게 빠르게 하거나 흔들 수 있다', 폐: '호흡 — 물질이 느리게 해 위급해질 수 있다' } }, sequence: [{ match: 'auto' }] },
          art: { draw: 'a paper cut-out body with paper brain, heart and lungs highlighted in soft red, paper label strips connected by dotted lines, a small paper ambulance in the corner', banner: '판단·박동·호흡', extra: [{ motif: 'star', x: 300, y: 96 }] },
        },
        notes: '\'영향을 줄 수 있다\'까지만 말하고 물질별 증상을 자세히 늘어놓지 않는다(사람 확인 목록).',
      }),

      M({
        id: 'activity.classify', type: 'activity', title: '법의 분류와 피해 나누기',
        method: '법의 분류로 나누기', tool: 'mindmap', minutes: 18,
        levels: { easy: '물질 카드 2장(펜타닐·필로폰)을 마약·향정신성의약품 가지에 나누고, 놓자마자 맞는지 보인다.', base: '물질 3장을 나누고, 피해 카드 6장을 몸·생활·사회에 나누고, 의료용과 오남용의 차이를 고른다.', challenge: '처방 수면제 일부가 더해진 물질 4장을 나누고, 활동지에 의료용과 오남용의 차이를 쓴다.' },
        activity: {
          title: '법의 분류와 피해 나누기', tool: 'mindmap',
          teacher: '"「마약류 관리에 관한 법률」은 이 물질들을 어디에 두었을까요? 펜타닐은 병원에서도 쓰는데 왜 마약일까요?" 물질 카드를 나눈 뒤 피해 카드를 몸·생활·사회에 붙이게 한다. "의료용으로 쓰이니 안전하다"는 학생에게 "의사가 정한 목적과 양으로 쓸 때와 그 밖으로 쓸 때, 같은 물질이 같은 결과를 낼까요?"라고 묻는다. 피해가 몸에서 끝나지 않고 생활과 사회로 번진다는 점을 짚는다.',
          task: '물질을 법의 분류에 나누고, 피해를 몸·생활·사회로 정리해요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('물질 카드를 「마약류 관리에 관한 법률」의 분류 가지에 나누세요.', ['마약', '향정신성의약품'], [['펜타닐'], ['필로폰', '케타민']], { k: 1, hard: [[], ['처방 수면제 일부']], d: 0.3, opt: { topic: '법의 분류' } }),
            SORTQ('마약류로 생길 수 있는 피해 카드를 몸·생활·사회 가지에 나누세요.', ['몸', '생활', '사회'], [
              ['의존이 생겨 끊기 어려워진다', '심장 박동·호흡에 영향을 줄 수 있다'],
              ['학업·일을 이어 가기 어려워진다', '가족·친구와의 관계가 무너진다'],
              ['치료·단속에 사회 비용이 든다', '거래가 다른 범죄로 이어진다'],
            ], { k: 1, d: 0.3, opt: { topic: '피해는 어디까지' } }),
            PICKQ('의료용 쓰임과 오남용의 차이를 바르게 말한 것만 고르세요.', ['의사가 정한 목적과 양으로만 쓰는 것이 의료용이다', '같은 물질도 목적 밖으로 쓰면 오남용이다'], ['의료용으로 쓰이니 누구에게나 안전하다', '한 번쯤은 몸이 견딜 수 있다'], { d: 0.35, opt: { basket: '바른 설명' }, more: { conclude: '펜타닐은 마약, 필로폰·케타민은 향정신성의약품으로 법이 관리해요. 의료용으로 쓰이는 물질도 목적 밖으로 쓰면 몸·생활·사회에 피해가 번져요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '\'의료용으로도 쓰이니 안전하다\'는 말이 틀린 까닭을 의료용과 오남용의 차이로 한 문장 쓰세요.' }] },
        notes: '물질의 분류만 다루고 효과·양·쓰는 법은 다루지 않는다. 분류는 수업 전 식품의약품안전처 안내로 다시 확인한다.',
      }),
      M({
        id: 'activity.timeline', type: 'activity', title: '피해가 커지는 시간 띠',
        method: '피해 확산 시간 띠', tool: 'timeline', minutes: 18,
        levels: { easy: '시간 띠 카드 4장을 차례로 놓고, 도움이 닿을 지점 2쌍을 짝짓는다.', base: '시간 띠 카드 6장을 놓고, 도움이 닿을 지점 3쌍을 짝짓고, 의존에 대한 바른 설명을 고른다.', challenge: '카드가 섞인 채로 풀고, 활동지에 칸마다 도움이 닿을 수 있었던 지점을 쓴다.' },
        activity: {
          title: '피해가 커지는 시간 띠', tool: 'timeline',
          teacher: '"진우의 이야기는 가상이에요. 처음 권유를 받은 날부터 법적 문제가 생기기까지, 피해는 한꺼번에 왔을까요?" 카드를 시간 띠에 놓은 뒤 칸 사이를 손으로 짚으며 "여기서 누가 무엇을 했다면 달라졌을까요?"라고 묻는다. "끊지 못한 건 진우가 의지가 약해서"라는 말이 나오면 "\'끊으려 해도 다시 찾게 된다\'는 칸을 보세요. 이것이 의지만의 문제일까요?"라고 되묻는다. 의존은 도움이 필요한 상태이고, 빨리 닿을수록 회복이 쉬워진다는 점을 짚는다.',
          task: '가상 인물 진우의 이야기를 시간 띠에 놓고, 도움이 닿을 수 있었던 지점을 찾아요.', levels: { easy: { live: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDERQ('진우의 이야기를 처음부터 나중까지 차례로 시간 띠에 놓으세요.', ['처음 권유를 받음', '한 번 해 봄', '다시 찾게 됨', '끊으려 해도 어려움', '학업·건강이 무너짐', '법적 문제가 생김'], { k: 4, d: 0.3, opt: { axis: ['처음', '나중'] } }),
            MATCHQ('진우의 시간 띠에서 도움이 닿을 수 있었던 지점과 알맞은 도움을 짝지으세요.', [['처음 권유를 받았을 때', '거절하고 어른에게 알리기'], ['다시 찾게 되었을 때', '상담실·보호자에게 털어놓기'], ['끊으려 해도 어려울 때', '병원·상담 기관에서 치료받기']], { k: 2, extra: ['혼자 의지로 참기'], d: 0.35, opt: { axis: ['처음', '나중'] } }),
            PICKQ('의존에 대해 바르게 말한 것만 고르세요.', ['의존은 의지만으로 끊기 어려운 상태다', '도움이 빨리 닿을수록 회복이 쉬워진다'], ['한 번은 괜찮다', '중독은 개인의 의지 문제일 뿐이다'], { d: 0.35, opt: { basket: '바른 말' }, more: { conclude: '피해는 처음 접촉에서 의존으로, 다시 건강·학업·관계·법으로 번져요. 칸마다 도움이 닿을 자리가 있고, 빨리 닿을수록 좋아요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '진우의 시간 띠에서 도움이 닿을 수 있었던 지점을 쓰세요.', columns: ['칸', '누가', '무엇을'], cells: [['다시 찾게 됨', '', ''], ['끊으려 해도 어려움', '', '']] }] },
        notes: '진우는 가상 인물이다. 학생의 주변 사례를 묻지 않는다.',
      }),
      M({
        id: 'activity.debate', type: 'activity', title: '처벌·치료 찬반 토론',
        method: '찬반 토론 진행판', tool: 'timer', minutes: 18,
        levels: { easy: '입론·정리 두 단계만 차례로 놓고 두 단계 발언 시간을 맞춘다.', base: '네 단계 차례와 발언 시간을 맞추고 토론 뒤 스스로 점검한다.', challenge: '스스로 점검에 \'근거의 출처를 밝혔다\'가 더해진다.' },
        activity: {
          title: '처벌·치료 찬반 토론', tool: 'timer',
          teacher: '"\'마약류 사용자 대책은 처벌보다 치료 중심이어야 한다.\' 찬성과 반대로 나눠 토론해요. 어느 쪽이든 오늘 본 시간 띠와 분류를 근거로 쓰세요." 진행 차례와 발언 시간을 판으로 맞춘 뒤 시작한다. 찬성 쪽이 "처벌은 필요 없다"고만 하면 "거래하는 사람과 의존이 생긴 사람을 같은 대책으로 다뤄야 할까요?"라고 묻는다. 반대 쪽이 "벌을 받아야 다시 안 한다"고만 하면 "의존이 생긴 사람이 벌만 받고 돌아오면 무엇이 달라질까요?"라고 되묻는다. 처벌과 치료가 반드시 하나만 고르는 문제인지도 정리 단계에서 묻는다.',
          task: '토론 진행 차례와 발언 시간을 맞추고, 토론 뒤 우리 모둠을 스스로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: DEBATEQ('마약류 사용자 대책은 처벌보다 치료 중심이어야 한다', { label: '처벌·치료', work: 3, rest: 1,
            checks: ['상대 주장을 요약한 뒤 반론했다', '오늘 본 피해·의존의 근거를 썼다', '사용자를 비난하는 말 대신 대책을 말했다'], plus: '근거의 출처를 밝혔다',
            conclude: '처벌과 치료는 서로 다른 대상과 목적을 가져요. 의존은 도움이 필요한 상태라는 점이 토론의 중요한 근거예요.' }),
        },
        worksheet: { items: [{ type: 'short', prompt: '토론에서 들은 반대쪽 근거 가운데 가장 설득력 있던 것과 그 까닭을 쓰세요.' }] },
        notes: '형량·처벌 조항 숫자는 다루지 않는다. 치료·재활 제도는 수업 전 공식 안내로 확인한다(사람 확인 목록).',
      }),
      M({
        id: 'activity.essay', type: 'activity', title: '처벌과 치료 입장 글',
        method: '입장 글과 기준표', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '문장 틀을 보고 입장·근거·반론 수용을 한 문장씩 쓴다.', base: '입장과 근거를 한 문단으로 쓰고, 반론에 답하는 글을 쓴 뒤 기준표를 점검한다.', challenge: '반론 글에 기준 하나(반론의 옳은 점을 받아들이는 문장)를 더해 점검한다.' },
        activity: {
          title: '처벌과 치료 입장 글', tool: 'rubric-writing',
          teacher: '"토론에서 나온 말 가운데 내 생각을 바꾼 것이 있었나요? 이제 내 입장을 글로 정리해요." 기준표를 함께 읽고, 토론에서 들은 근거를 인용해도 된다고 알린다. "치료가 맞다, 끝"처럼 근거 없이 쓴 학생에게 "왜 그렇게 생각하게 됐나요? 오늘 본 시간 띠의 어느 칸이 근거가 될까요?"라고 묻는다. 반론을 받아들이는 문장은 내 입장을 약하게 하는 것이 아니라 더 단단하게 만든다는 점을 짚는다.',
          task: '\'처벌과 치료\'에 대한 내 입장을 근거와 함께 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('내 입장을 한두 문장으로 쓰고 기준표로 점검하세요.', '마약류 사용자 대책은 처벌과 치료 가운데 무엇을 중심에 두어야 할지 내 입장을 한두 문장으로 쓰세요.', ['내 입장이 첫 문장에 분명하다', '\'처벌\'과 \'치료\'라는 낱말을 정확히 썼다', '사람을 비난하지 않고 대책을 말했다'], { min: 30, max: 200, must: [['치료', '처벌']], starter: '나는 마약류 사용자 대책이 ~ 중심이어야 한다고 생각한다.', d: 0.3 }),
            RWQ('내 입장의 근거를 한 문단으로 쓰고 기준표로 점검하세요.', '내 입장을 받치는 근거를 오늘 배운 피해·의존·분류 가운데에서 찾아 한 문단으로 쓰세요.', ['근거를 두 가지 이상 썼다', '오늘 수업 내용(피해·의존·분류)을 근거로 썼다', '근거와 입장이 이어진다'], { min: 80, max: 500, starter: '그 까닭은 첫째, ~. 둘째, ~', sample: '나는 치료를 중심에 두되 거래에는 처벌이 필요하다고 생각한다. 첫째, 의존은 끊으려 해도 다시 찾게 되는 상태라 벌만으로는 회복이 어렵다. 둘째, 도움이 빨리 닿을수록 피해가 가족과 사회로 번지는 것을 줄일 수 있다.', d: 0.4 }),
            RWQ('나와 다른 입장의 반론을 소개하고 내 답을 쓴 뒤 기준표로 점검하세요.', '나와 다른 입장이 내세울 반론을 하나 소개하고, 그에 대한 내 답을 두세 문장으로 쓰세요.', ['반론을 공정하게 소개했다', '반론에 대한 내 답에 근거가 있다', '내 입장으로 끝맺었다'], { min: 50, max: 300, must: [['하지만', '그러나', '그렇지만']], starter: '반대 입장은 ~라고 말한다. 하지만 ~', plus: '반론의 옳은 점을 받아들이는 문장을 넣었다', d: 0.45, more: { conclude: '좋은 입장 글은 근거가 수업 내용에서 오고, 반론의 옳은 점까지 받아들이며 내 입장으로 끝맺어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '토론 전과 뒤에 내 입장이 어떻게 달라졌는지, 또는 왜 그대로인지 쓰세요.' }] },
      }),

      M({
        id: 'wrap.sos', type: 'wrap', title: '숨쉬기 이상 문자 판단',
        method: '짧은 결과 추적', tool: 'dilemma', minutes: 8,
        levels: { easy: '첫 갈림길에서 고른 결과까지 함께 읽고 교사가 다음 장면을 이어 읽어 준다.', base: '갈림길 둘을 스스로 지나 근거 카드를 고른다.', challenge: '고른 근거 카드를 짝에게 설명하고, 다른 길의 결과와 견주어 말하게 한다.' },
        wrap: {
          teacher: '"오늘 정리는 짧은 갈림길이에요. 친구가 숨쉬기가 이상하다며 말하지 말라고 하면 어떻게 할까요?" 갈림길을 지난 뒤 근거 카드를 고르게 한다. \'비밀을 지킨다\'를 고른 학생에게 "친구가 다음 날 무엇을 바랐을까요? 비밀을 지켜 준 친구일까요, 살려 준 친구일까요?"라고 묻는다. 숨쉬기가 이상하거나 깨워도 반응이 없으면 비밀보다 119와 어른이 먼저라는 점을 짚는다. 연습 때 실제 번호로 전화하지 않는다.',
          exitTicket: [
            { type: 'tool', tool: 'dilemma', options: { scene: cut(SOS, 2), reasons: SOS_R, title: '밤 10시의 문자(가상)' }, prompt: '끝까지 친구를 지키는 길을 고르고, 근거 카드를 고르세요.', target: { path: [['call', 'adult'], ['keep', 'break'], ['wait', 'late']], reasons: ['breath', 'first'] }, difficulty: 0.25 },
            { type: 'choice', prompt: '친구가 숨쉬기가 이상하다고 할 때 가장 먼저 할 일을 고르세요.', options: ['자고 나면 괜찮아질 테니 기다린다', '119에 신고하고 어른에게 알린다', '인터넷에서 증상을 검색해 본다'], answer: 1, difficulty: 0.15, explain: '호흡의 이상은 위급한 신호일 수 있어요. 기다리거나 검색하기보다 119가 먼저예요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '위급한 문자를 받았을 때',
          items: [
            { type: 'short', prompt: '친구가 "말하지 마"라고 해도 알려야 하는 까닭을 한 문장으로 쓰세요.' },
            { type: 'short', prompt: '119에 신고할 때 먼저 말할 것 두 가지를 쓰세요.' },
          ],
          easy: { note: '숨쉬기 이상 = 119 + 어른에게 알리기', items: [{ type: 'short', prompt: '이런 문자를 받으면 가장 먼저 할 일을 쓰세요.' }] },
        },
        notes: '\'늦게라도 신고\' 길도 끝 장면이 \'그래도 낫다\'로 끝나 정답 길에 넣었다. 학생에게 비슷한 일을 겪었는지 묻지 않는다.',
      }),
      M({
        id: 'wrap.reflect', type: 'wrap', title: '의지 문제 생각 변화',
        method: '생각 변화 크기', tool: 'emotion', minutes: 8,
        levels: { easy: '지금 생각의 크기만 고르게 한다.', base: '수업 전과 지금의 크기를 모두 고르고 까닭을 말하게 한다.', challenge: '까닭을 말할 때 토론에서 들은 근거를 인용하게 한다.' },
        wrap: {
          teacher: '"\'중독은 개인의 의지 문제일 뿐이다.\' 수업 전과 지금, 이 말을 얼마나 맞다고 느끼나요?" 두 눈금을 고른 뒤 짝과 까닭을 말하게 한다. "그래도 결국 본인이 시작한 거잖아요"라는 말이 나오면 "시작에는 책임이 있어요. 그런데 끊으려 해도 다시 찾게 되는 상태에서는 무엇이 더 필요할까요?"라고 묻는다. 책임을 묻는 것과 도움을 주는 것이 함께 갈 수 있다는 점을 짚는다.',
          exitTicket: [
            SCALE('수업 전 내 생각의 크기를 고르세요.', '수업 전, \'중독은 개인의 의지 문제일 뿐이다\'라는 말을 들었을 때', '맞다', { 1: '전혀 아니다', 5: '아주 맞다' }, '수업 전에는 얼마나 맞다고 느꼈나요?'),
            SCALE('지금 내 생각의 크기를 고르세요.', '수업을 마친 지금, \'중독은 개인의 의지 문제일 뿐이다\'라는 말을 들으면', '맞다', { 1: '전혀 아니다', 5: '아주 맞다' }, '지금은 얼마나 맞다고 느끼나요?'),
            { type: 'short', prompt: '내 생각에 영향을 준 토론 근거 하나를 인용해 쓰세요.' },
          ],
        },
        worksheet: {
          title: '중독에 대한 내 생각',
          items: [
            { type: 'table', prompt: '수업 전과 지금의 생각을 견주어 쓰세요.', columns: ['', '수업 전', '지금'], cells: [['중독은 의지 문제인가', '', ''], ['그렇게 생각한 근거', '', '']] },
            { type: 'short', prompt: '의존이 생긴 사람에게 필요한 도움 한 가지를 쓰세요.' },
          ],
          easy: { note: '의존 = 끊으려 해도 다시 찾게 되는 상태 → 도움이 필요하다', items: [{ type: 'short', prompt: '지금 내 생각을 한 문장으로 쓰세요.' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 5. 미디어 속 약물·음주·흡연 장면 비평 (11학년)
  // ======================================================================================================
  {
    const M = MOD('media-critique', [11]);
    const CREATOR = { text: '구독자 정체로 고민하던 크리에이터 하율에게 팀원이 말한다. "요즘 술 먹방이 조회수가 잘 나와. 우리도 해 보자."', who: '하율', motif: 'star', choices: [
      { id: 'drink', text: '술 먹방을 그대로 기획한다', result: '첫 영상 조회수가 평소의 두 배가 된다.', impact: [{ who: '하율', text: '조회수는 오른다', tone: 1 }, { who: '어린 시청자', text: '술을 재미있는 놀이로 보게 된다', tone: -1 }],
        next: { text: '댓글에 "저도 따라 마셔 봤어요"라는 중학생 시청자의 글이 달린다.', choices: [
          { id: 'more', text: '조회수가 좋으니 더 센 기획을 한다', result: '\'한 번에 많이 마시기\' 영상이 나가자 항의가 쏟아진다.', impact: [{ who: '하율', text: '채널 평판이 떨어진다', tone: -1 }, { who: '시청자', text: '위험한 따라 하기가 늘어난다', tone: -1 }],
            next: { text: '플랫폼에서 영상에 연령 제한 경고가 붙었다.', choices: [
              { id: 'stopnow', text: '영상을 내리고 사과문을 올린다', result: '구독자 일부가 떠났지만 사과를 받아들이는 댓글이 달린다.', impact: [{ who: '하율', text: '신뢰를 조금씩 되찾는다', tone: 0 }], ending: '늦게라도 책임을 지면 평판을 다시 쌓을 길이 열린다.' },
              { id: 'ignore', text: '경고를 무시하고 비슷한 영상을 이어 올린다', result: '채널이 제재를 받고 협찬이 끊긴다.', impact: [{ who: '하율', text: '조회수와 평판을 함께 잃는다', tone: -1 }], ending: '조회수만 좇은 기획은 결국 채널을 무너뜨린다.' }] } },
          { id: 'reply', text: '"따라 하지 마세요"라는 고정 댓글과 경고를 넣는다', result: '경고는 붙었지만 영상의 재미는 여전히 술에 있다.', impact: [{ who: '어린 시청자', text: '경고보다 장면이 더 기억에 남는다', tone: 0 }], ending: '경고 문구만으로는 장면이 주는 메시지를 다 막지 못한다.' }] } },
      { id: 'swap', text: '술 대신 지역 음식 먹방으로 바꿔 기획한다', result: '첫 영상 조회수는 평소와 비슷하다.', impact: [{ who: '하율', text: '조회수는 그대로다', tone: 0 }, { who: '시청자', text: '편하게 볼 수 있는 영상이 된다', tone: 1 }],
        next: { text: '팀원이 "이러다 구독자 안 늘어"라며 불만을 말한다.', choices: [
          { id: 'idea', text: '시청자 참여 기획(동네 맛집 추천받기)을 더한다', result: '추천 댓글이 늘며 구독자가 천천히 늘어난다.', impact: [{ who: '하율', text: '오래 가는 채널의 색이 생긴다', tone: 1 }],
            next: { text: '한 학교에서 \'청소년이 볼 만한 채널\'로 소개하고 싶다고 연락이 왔다.', choices: [
              { id: 'yes', text: '기쁘게 응하고 기획 원칙을 소개한다', result: '새 시청자층이 생긴다.', impact: [{ who: '하율', text: '평판이 기회로 이어진다', tone: 1 }], ending: '책임 있는 기획이 새로운 기회를 만든다.' },
              { id: 'switch', text: '이제 유명해졌으니 술 먹방으로 바꾼다', result: '학교 소개가 취소되고 기존 시청자가 실망한다.', impact: [{ who: '하율', text: '쌓은 신뢰를 잃는다', tone: -1 }], ending: '쌓은 신뢰는 한 번의 기획으로도 무너질 수 있다.' }] } },
          { id: 'give', text: '팀원 말대로 다시 술 먹방으로 돌아간다', result: '조회수는 오르지만 처음 정한 원칙이 흔들린다.', impact: [{ who: '하율', text: '채널 방향을 잃는다', tone: -1 }], ending: '원칙 없는 기획은 압박이 올 때마다 흔들린다.' }] } },
      { id: 'warn', text: '술 먹방을 하되 첫 화면에 성인 대상이라고 밝힌다', result: '조회수는 오르지만 청소년 시청자도 그대로 본다.', impact: [{ who: '하율', text: '책임을 다했다고 느낀다', tone: 0 }, { who: '청소년 시청자', text: '여전히 장면을 본다', tone: -1 }],
        next: { text: '구독자 분석을 보니 시청자 셋 가운데 하나가 10대다.', choices: [
          { id: 'change', text: '10대 시청자가 많으니 기획을 바꾼다', result: '술 없는 기획으로 바꾸고 그 까닭을 영상으로 설명한다.', impact: [{ who: '시청자', text: '제작자의 책임을 보게 된다', tone: 1 }],
            next: { text: '설명 영상에 "솔직해서 좋다"는 댓글이 많이 달린다.', choices: [
              { id: 'guide', text: '앞으로의 기획 원칙을 채널 소개에 적는다', result: '시청자와 약속한 원칙이 채널의 신뢰가 된다.', impact: [{ who: '하율', text: '평판이 단단해진다', tone: 1 }], ending: '자료를 보고 기획을 바꾸는 것이 제작자의 책임이다.' },
              { id: 'back', text: '반응이 좋을 때 다시 술 먹방을 섞는다', result: '시청자들이 "말이 다르다"고 실망한다.', impact: [{ who: '하율', text: '믿음이 흔들린다', tone: -1 }], ending: '말과 기획이 다르면 설명 영상도 믿음을 잃는다.' }] } },
          { id: 'keepgo', text: '성인 대상이라고 밝혔으니 계속한다', result: '10대 시청자가 늘며 따라 하기 댓글도 늘어난다.', impact: [{ who: '청소년 시청자', text: '위험한 따라 하기가 이어진다', tone: -1 }], ending: '표시를 붙였다고 책임이 끝나지는 않는다.' }] } }] };
    const CREATOR_R = [{ id: 'viewer', text: '누가 보는지 알면 그에 맞게 기획해야 한다' }, { id: 'message', text: '장면은 경고 문구보다 강한 메시지를 준다' }, { id: 'trust', text: '오래 가는 채널은 조회수보다 신뢰로 큰다' }, { id: 'views', text: '조회수가 오르면 좋은 기획이다', why: '조회수는 많이 본 것이지 시청자에게 좋은 영향을 준 것은 아니에요.' }, { id: 'fiction', text: '영상은 재미일 뿐 영향이 없다', why: '따라 마셔 봤다는 댓글처럼 영상은 행동에 영향을 줄 수 있어요.' }];
    const SPONSOR = { text: '하율에게 \'전자담배 액세서리\' 협찬 제안이 왔다. "영상에서 자연스럽게 들고만 있어 주세요."', who: '하율', motif: 'house', choices: [
      { id: 'accept', text: '들고만 있으면 되니 받아들인다', result: '영상 속 하율이 기기를 든 장면이 짧은 클립으로 퍼진다.', impact: [{ who: '청소년 시청자', text: '전자담배를 멋진 물건으로 보게 된다', tone: -1 }],
        next: { text: '시청자가 "협찬이면 협찬이라고 밝혀야죠"라고 댓글을 단다.', choices: [
          { id: 'admit', text: '협찬 사실을 밝히고 다음 협찬은 거절한다', result: '실망한 댓글도 있지만 솔직하다는 반응도 있다.', impact: [{ who: '하율', text: '실수를 바로잡는다', tone: 0 }], ending: '숨긴 협찬을 밝히고 거절하는 것이 책임의 시작이다.' },
          { id: 'hide', text: '모른 척 협찬을 이어 간다', result: '숨긴 협찬이 알려지며 채널이 비판받는다.', impact: [{ who: '하율', text: '신뢰를 잃는다', tone: -1 }], ending: '숨긴 광고는 시청자를 속이는 일이 된다.' }] } },
      { id: 'decline', text: '"제 채널에는 10대 시청자가 많아요"라며 거절한다', result: '협찬비는 놓쳤지만 채널 원칙을 지킨다.', impact: [{ who: '하율', text: '원칙을 지킨다', tone: 1 }],
        next: { text: '다른 크리에이터가 같은 협찬을 받아 영상을 올렸다.', choices: [
          { id: 'share', text: '협찬을 거절한 까닭을 영상으로 이야기한다', result: '시청자들이 장면 속 숨은 광고를 알아보게 된다.', impact: [{ who: '시청자', text: '숨은 광고를 알아보는 눈이 생긴다', tone: 1 }], ending: '거절의 까닭을 나누면 시청자도 비평하는 눈을 갖게 된다.' },
          { id: 'regret', text: '나만 손해 본 것 같아 다음에는 받기로 한다', result: '원칙이 흔들린다.', impact: [{ who: '하율', text: '채널 방향이 흔들린다', tone: -1 }], ending: '남이 한다고 원칙을 버리면 다음 압박도 견디기 어렵다.' }] } }] };
    const SPONSOR_R = [{ id: 'hidden', text: '들고만 있는 장면도 광고가 될 수 있다' }, { id: 'viewer', text: '시청자가 누구인지에 따라 책임이 달라진다' }, { id: 'money', text: '협찬비를 받으면 내용은 상관없다', why: '돈을 받았다고 시청자에게 주는 영향이 사라지지는 않아요.' }];

    MODS.push(
      M({
        id: 'intro.clip', type: 'intro', title: '드라마 장면 첫 느낌',
        method: '가상 장면 첫 느낌', tool: 'emotion', minutes: 6,
        levels: { easy: '장면 설명을 함께 읽고 끌림의 크기만 고른다.', base: '크기를 고른 뒤 그렇게 느낀 까닭(음악·인물·분위기)을 말한다.', challenge: '장면이 보는 사람의 어떤 마음을 노렸는지 써 본다.' },
        intro: {
          teacher: '"가상의 드라마 장면 설명이에요. 읽고 나서 이 장면이 얼마나 멋있게 느껴지는지 솔직하게 골라 봐요." 시연 단추로 눈금이 골라지는 모습을 보인 뒤 몇 명의 까닭을 듣는다. "그냥 드라마인데 멋있으면 안 돼요?"라는 말이 나오면 "멋있게 느껴진 것은 술 때문일까요, 음악·조명·배우 때문일까요?"라고 되묻는다. 오늘은 그 느낌을 만든 연출 장치를 찾아 비평한다고 밝힌다.',
          student: '가상 드라마 장면 설명을 읽고, 이 장면이 얼마나 끌리는지 크기를 골라 보세요. 왜 그렇게 느꼈을까요?',
          demo: { tool: 'emotion', options: { mode: 'scale', situation: '합격 축하 자리, 신나는 음악 속에 주인공이 웃으며 술잔을 부딪친다. 옥상에서는 멋진 선배가 노을을 보며 담배를 문다.', feeling: '끌림', steps: 5, scaleLabels: { 1: '전혀', 5: '아주 많이' }, ask: '이 장면이 얼마나 끌리나요?' }, sequence: [{ level: 3 }] },
          art: { draw: 'a paper film strip with two frames, a celebration table lit in warm gold and a rooftop at sunset, paper music notes floating, a paper critic notepad beside the strip', banner: '왜 멋있어 보일까?', extra: [{ motif: 'star', x: 300, y: 96 }] },
        },
        notes: '장면은 가상이다. 실제 드라마·배우 이름을 쓰지 않는다. 끌림을 고른 학생을 나무라지 않는다 — 끌리게 만든 장치를 찾는 것이 목표다.',
      }),
      M({
        id: 'intro.log', type: 'intro', title: '시청 기록 막대그래프',
        method: '가상 시청 기록 막대그래프', tool: 'chart', minutes: 6,
        levels: { easy: '막대 3개(드라마·예능·영화)만 함께 채운다.', base: '다섯 장르 막대를 채우는 시연을 보고 음주·흡연 장면이 많은 장르를 찾는다.', challenge: '이 기록 방법의 한계(한 사람의 일주일·장면 세는 기준)를 짚는다.' },
        intro: {
          teacher: '"가상 학생 지안이의 일주일 시청 기록이에요. 음주·흡연 장면이 몇 번 나왔는지 막대로 그려 봐요." 시연 단추로 막대가 채워지는 모습을 보인다. "드라마에 많을 줄은 알았는데 예능에도 있네요"라는 말이 나오면 "예능에서는 어떤 모습으로 나올까요? 웃음과 함께 나오면 어떻게 느껴질까요?"라고 묻는다. 한 사람의 기록으로 모두를 말할 수는 없지만, 내가 보는 영상에 생각보다 자주 나온다는 점을 짚는다.',
          student: '가상 학생의 일주일 시청 기록으로 장르별 음주·흡연 장면 수를 막대그래프로 그리고, 가장 많은 장르를 찾아보세요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'build', title: '지안이의 일주일, 음주·흡연 장면 수(가상)', yLabel: '장면 수', xLabel: '장르', unit: '번', max: 10, data: [['드라마', 9], ['영화', 7], ['예능', 6], ['웹 시리즈', 3], ['다큐', 1]] }, sequence: [{ build: true }] },
          art: { draw: 'a paper bar chart with five paper columns rising from a paper television and phone, small paper icons of a glass and a puff of smoke above the tallest column', banner: '일주일에 몇 번 봤을까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '시청 기록은 가상 인물의 가상 자료다. 학생의 실제 시청 기록을 발표시키지 않는다.',
      }),

      M({
        id: 'activity.devices', type: 'activity', title: '연출 장치 나누기',
        method: '연출 장치 분류', tool: 'mindmap', minutes: 18,
        levels: { easy: '장면 요소 4장(칸마다 1장)을 네 장치에 나누고, 놓자마자 맞는지 보인다.', base: '장면 요소 8장을 나누고, 장치마다 시청자에게 주는 영향을 짝짓고, 새 장면 문구에 장치 이름을 붙인다.', challenge: '장면 요소 12장을 나눈다.' },
        activity: {
          title: '연출 장치 나누기', tool: 'mindmap',
          teacher: '"장면을 멋있게 만드는 것은 물질이 아니라 연출이에요. 이 요소는 어떤 장치일까요?" 카드를 놓을 때마다 "이 장치를 빼면 장면이 어떻게 느껴질까요?"라고 묻는다. \'다음 날 아침 장면이 없다\'를 어느 칸에 둘지 망설이는 학생에게 "이것은 보여 준 것일까요, 보여 주지 않은 것일까요?"라고 되묻는다. 결과 생략이 가장 알아차리기 어려운 장치라는 점을 짚는다.',
          task: '가상 장면 요소를 네 가지 연출 장치로 나누고, 장치마다 시청자에게 주는 영향을 짝지어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('가상 장면 요소를 네 가지 연출 장치 칸에 나누세요.', ['음악', '조명·색', '인물 매력', '결과 생략'], [
              ['술잔을 들 때 신나는 음악이 커진다', '담배를 물 때 느린 음악이 깔린다'],
              ['술자리를 따뜻한 노란 조명으로 비춘다', '연기에 역광을 비춰 멋있게 보이게 한다'],
              ['가장 인기 많은 인물이 술을 권한다', '성공한 주인공이 늘 담배를 문다'],
              ['다음 날 아침 장면이 없다', '건강 검진 결과는 나오지 않는다'],
            ], { k: 1, hard: [['건배 소리를 크게 키운다'], ['취한 장면을 흐릿하고 몽환적으로 찍는다'], ['술을 잘 마시는 것을 어른스러움으로 그린다'], ['취해서 한 실수가 웃음으로 끝난다']], d: 0.3, opt: { topic: '장면의 연출 장치' } }),
            MATCHQ('연출 장치와 그 장치가 시청자에게 주는 영향을 짝지으세요.', [['음악', '장면의 기분을 좋게 느끼게 한다'], ['조명·색', '물질을 따뜻하고 멋진 것으로 기억하게 한다'], ['인물 매력', '닮고 싶은 마음을 물질과 묶는다'], ['결과 생략', '위험이 없는 것처럼 믿게 한다']], { k: 3, d: 0.35, opt: { topic: '장치가 주는 영향' } }),
            MATCHQ('처음 보는 가상 장면 문구에 연출 장치 이름을 붙이세요.', [['"실수한 주인공이 다음 장면에서 멀쩡히 웃는다"', '결과 생략'], ['"반짝이는 조명 아래 전자담배 연기가 퍼진다"', '조명·색'], ['"인기 배우가 광고처럼 맥주를 들고 웃는다"', '인물 매력'], ['"클럽 음악이 커지며 술잔이 돈다"', '음악']], { k: 3, d: 0.4, opt: { topic: '새 장면에 적용' }, more: { conclude: '음악·조명·인물 매력은 장면을 멋지게 만들고, 결과 생략은 위험을 보이지 않게 해요. 장치를 알아보면 장면과 내 판단을 떼어 놓을 수 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '최근 본 영상 하나를 떠올려, 그 장면에 쓰인 연출 장치 하나와 그 영향을 쓰세요(제목은 쓰지 않아도 돼요).' }] },
        notes: '장면 요소는 가상 문구다. 실제 작품 장면을 틀지 않는다.',
      }),
      M({
        id: 'activity.rebuild', type: 'activity', title: '결과까지 보이는 장면 짜기',
        method: '장면 재구성 스토리보드', tool: 'story', minutes: 18,
        levels: { easy: '생략된 결과를 고르고, 장면 카드 3장을 차례로 놓는다.', base: '생략된 결과를 고르고, 다음 날·한 달 뒤까지 네 장면을 놓고, 장면마다 재구성 의도를 짝짓는다.', challenge: '카드가 섞인 채로 풀고, 활동지에 재구성 의도를 설명한다.' },
        activity: {
          title: '결과까지 보이는 장면 짜기', tool: 'story',
          teacher: '"원래 장면은 축하 자리에서 끝나요. 다음 날 아침, 한 달 뒤 주인공은 어떻게 됐을까요?" 생략된 결과를 먼저 고르게 한 뒤 장면을 다시 짜게 한다. "결과를 보여 주면 드라마가 재미없어지잖아요"라는 말이 나오면 "결과가 있는 이야기가 더 진짜 같지 않을까요? 재미와 책임을 함께 잡는 방법은 없을까요?"라고 묻는다. 겁주려는 과장이 아니라 실제로 생길 수 있는 결과를 담는 것이 재구성의 기준이라는 점을 짚는다.',
          task: '결과를 생략한 가상 장면을 다음 날·한 달 뒤까지 보이는 장면으로 다시 짜요.', levels: { easy: { live: true }, base: {}, challenge: { shuffle: true } },
          items: [
            { prompt: '원래 장면(합격 축하 자리)에서 보여 주지 않은 결과를 모두 고르세요.', toolOptions: { mode: 'pick', basket: '생략된 결과', title: '원래 장면', cards: [{ id: 'head', text: '다음 날 두통으로 지각한다', motif: 'cloud' }, { id: 'msg', text: '취해서 보낸 메시지를 후회한다', motif: 'moon' }, { id: 'song', text: '축하 노래를 부른다', motif: 'star' }, { id: 'pressure', text: '마시기 싫던 친구가 억지로 마셨다', motif: 'rain' }] }, target: { pick: ['head', 'msg', 'pressure'] }, difficulty: 0.25 },
            { prompt: '결과까지 보이도록 네 장면을 차례로 놓으세요.', toolOptions: { mode: 'order', slots: 4, title: '다시 짠 장면', cards: [{ id: 'morning', text: '다음 날 아침 두통과 지각', motif: 'cloud' }, { id: 'party', text: '합격 축하 자리', motif: 'star' }, { id: 'month', text: '한 달 뒤 술자리를 스스로 조절함', motif: 'sun' }, { id: 'push', text: '분위기에 밀려 연거푸 마심', motif: 'moon' }] }, target: { order: ['party', 'push', 'morning', 'month'] }, difficulty: 0.3,
              levels: { easy: { prompt: '결과까지 보이도록 세 장면을 차례로 놓으세요(카드 3장).', toolOptions: { slots: 3, cards: [{ id: 'morning', text: '다음 날 아침 두통과 지각', motif: 'cloud' }, { id: 'party', text: '합격 축하 자리', motif: 'star' }, { id: 'month', text: '한 달 뒤 술자리를 스스로 조절함', motif: 'sun' }] }, target: { order: ['party', 'morning', 'month'] } } } },
            { prompt: '다시 짠 장면과 그 장면을 넣은 의도를 짝지으세요.', toolOptions: { mode: 'match', title: '장면과 의도', slots: [{ id: 'push', label: '연거푸 마시는 장면' }, { id: 'morning', label: '다음 날 아침 장면' }, { id: 'month', label: '한 달 뒤 장면' }], cards: [{ id: 'force', text: '분위기의 압력을 드러낸다' }, { id: 'result', text: '생략됐던 결과를 보인다' }, { id: 'change', text: '스스로 바꿀 수 있음을 보인다' }, { id: 'fear', text: '무섭게 과장해 겁을 준다' }] }, target: { match: { push: 'force', morning: 'result', month: 'change' } }, difficulty: 0.35, conclude: '결과를 보여 주는 장면은 위험을 사실대로 전하고, 스스로 바꿀 수 있다는 희망도 함께 보여 줄 수 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내가 다시 짠 장면이 원래 장면과 달라진 점과 그렇게 바꾼 의도를 쓰세요.' }] },
      }),
      M({
        id: 'activity.guideline', type: 'activity', title: '청소년 콘텐츠 제작 기준 제안',
        method: '제작 가이드라인 제안서', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '제안서 틀(문제 → 제안 → 표현의 자유)의 문장 시작 도움말을 보고 쓴다.', base: '문제, 제안 3개, 표현의 자유 고려를 쓰고 기준표를 점검한다.', challenge: '표현의 자유 글에 기준 하나(반대 입장에 답하기)를 더해 점검한다.' },
        activity: {
          title: '청소년 콘텐츠 제작 기준 제안', tool: 'rubric-writing',
          teacher: '"청소년이 많이 보는 영상을 만드는 사람에게 어떤 기준을 제안하고 싶나요?" 기준표를 함께 읽은 뒤 쓰게 한다. "그런 장면을 다 금지하면 된다"고 쓰는 학생에게 "모든 장면을 금지하면 이야기가 거짓말이 되지 않을까요? 보여 주되 어떻게 보여 줄지 정할 수는 없을까요?"라고 묻는다. 좋은 제안은 표현의 자유를 존중하면서 결과·대상·연출을 다룬다는 점을 짚는다.',
          task: '청소년이 보는 콘텐츠의 약물·음주·흡연 장면 제작 가이드라인 제안서를 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('제안서의 \'문제\' 부분을 쓰고 기준표로 점검하세요.', '청소년이 보는 영상 속 약물·음주·흡연 장면에서 무엇이 문제인지 두세 문장으로 쓰세요.', ['문제가 되는 장면의 연출 장치를 짚었다', '그 장면이 청소년에게 주는 영향을 썼다', '특정 작품이나 사람을 비난하지 않았다'], { min: 40, max: 300, starter: '청소년이 보는 영상에서는 ~ 때문에 문제가 생긴다.', d: 0.3 }),
            RWQ('제작 가이드라인 세 가지를 쓰고 기준표로 점검하세요.', '제작자에게 제안할 가이드라인 세 가지를 쓰세요.', ['가이드라인을 세 가지 썼다', '가이드라인마다 무엇을 어떻게 하라는지 구체적이다', '오늘 찾은 연출 장치나 결과 생략을 다뤘다'], { min: 60, max: 400, starter: '첫째, ~ 장면에는 ~. 둘째, ~. 셋째, ~', sample: '첫째, 음주 장면을 넣는다면 다음 날의 결과까지 함께 보여 준다. 둘째, 흡연 장면에 멋을 더하는 조명·음악을 쓰지 않는다. 셋째, 청소년 인물이 술·담배를 하는 장면은 권유를 거절하거나 도움을 청하는 흐름과 함께 그린다.', d: 0.4 }),
            RWQ('표현의 자유를 고려한 글을 쓰고 기준표로 점검하세요.', '내 가이드라인이 표현의 자유를 해치지 않는지 따져 보고, 그 까닭을 두세 문장으로 쓰세요.', ['표현의 자유가 무엇을 지키는지 썼다', '내 제안이 장면을 금지하는지, 보여 주는 방법을 정하는지 밝혔다', '두 가치를 함께 지킬 방법을 썼다'], { min: 50, max: 300, must: [['표현', '자유']], starter: '내 제안은 장면을 금지하는 것이 아니라 ~', plus: '반대 입장의 걱정에 답했다', d: 0.45, more: { conclude: '좋은 가이드라인은 장면을 없애기보다 결과·대상·연출을 책임 있게 다뤄, 표현의 자유와 시청자 보호를 함께 지켜요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내 가이드라인 가운데 제작자가 가장 받아들이기 쉬울 것 하나와 그 까닭을 쓰세요.' }] },
        notes: '방송 심의 기준 같은 실제 규정은 근거 자료에 없어 다루지 않았다. 다루려면 방송통신심의위원회 기준을 수업 전 확인한다.',
      }),
      M({
        id: 'activity.creator', type: 'activity', title: '크리에이터 술 먹방 갈림길',
        method: '제작자 딜레마 결과 추적', tool: 'dilemma', minutes: 18,
        levels: { easy: '갈림길 둘까지 가 보고 근거 카드를 고른다.', base: '갈림길 셋까지 조회수·시청자·평판 결과를 따라가고 근거 카드를 고른다.', challenge: '다른 끝 길을 하나 더 끝까지 가 보고 근거로 견준다.' },
        activity: {
          title: '크리에이터 술 먹방 갈림길', tool: 'dilemma',
          teacher: '"이번에는 보는 사람이 아니라 만드는 사람이 되어 봐요. 하율의 선택은 조회수·시청자·평판에 각각 어떤 결과를 낳을까요?" 선택마다 영향 칸의 세 주체를 소리 내어 읽게 한다. "조회수가 오르면 성공 아닌가요?"라는 말이 나오면 \'따라 마셔 봤어요\' 댓글 장면에서 멈춰 "이 조회수에는 누가 들어 있나요?"라고 묻는다. 제작자의 책임은 경고 문구 하나로 끝나지 않고, 누가 보는지 알고 기획을 바꾸는 데까지 간다는 점을 짚는다.',
          task: '크리에이터 하율의 선택을 끝까지 따라가 조회수·시청자·평판의 결과를 보고, 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL3('하율이 되어 책임 있는 길을 끝까지 고르고, 근거 카드를 고르세요.', CREATOR, [['swap', 'idea', 'yes'], ['warn', 'change', 'guide'], ['drink', 'more', 'stopnow']], CREATOR_R, ['viewer', 'trust'], { d: 0.4, opt: { title: '술 먹방 기획(가상)' } }),
            DIL2('전자담배 액세서리 협찬 제안을 받은 장면에서 책임 있는 길을 고르고, 근거 카드를 고르세요.', SPONSOR, [['decline', 'share'], ['accept', 'admit']], SPONSOR_R, ['hidden', 'viewer'], { d: 0.35, opt: { title: '협찬 제안(가상)' } }),
            EXPLOREQ('술 먹방 장면에서 \'그대로 기획\'으로 시작한 길과 \'음식 먹방으로 바꿈\'으로 시작한 길을 끝까지 가 보고 견주세요.', CREATOR, CREATOR_R, ['두 길의 끝 장면을 모두 보았다', '두 길의 조회수와 평판 결과를 견주었다', '시청자에게 생긴 일을 견주었다'], { d: 0.35, more: { conclude: '조회수는 빨리 오를 수 있지만 시청자에게 주는 영향과 평판은 오래 남아요. 누가 보는지 알고 기획하는 것이 제작자의 책임이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내가 크리에이터라면 채널 소개에 적을 기획 원칙 한 가지를 쓰세요.' }] },
        notes: '크리에이터와 채널은 가상이다. 실제 크리에이터를 예로 들어 비난하지 않는다.',
      }),

      M({
        id: 'wrap.check', type: 'wrap', title: '영상 비평 질문 점검표',
        method: '미디어 비평 점검표', tool: 'kitchen', minutes: 8,
        levels: { easy: '점검표를 함께 읽고 \'멋있게 보이게 하나·빠진 결과\' 등 앞 세 항목부터 표시하게 한다.', base: '여섯 항목 가운데 알맞은 다섯 가지를 스스로 표시한다.', challenge: '출구 짧은 답에 비평 질문 하나를 새로 만들어 쓰게 한다.' },
        wrap: {
          teacher: '"앞으로 영상에서 술·담배 장면을 만나면 어떤 질문을 던질까요? 오늘 쓴 질문을 점검표로 정리해요." 점검표를 표시한 뒤 \'주인공이 얼마나 멋있나\'를 고른 학생에게 "그 질문은 장면을 비평하는 질문일까요, 장면에 빠져드는 질문일까요?"라고 묻는다. 비평은 즐기지 말라는 것이 아니라 즐기면서도 장치를 알아보는 눈이라는 점을 짚는다.',
          exitTicket: [
            EXIT('kitchen', CHECKQ('영상 속 술·담배 장면을 비평할 때 던질 질문만 표시하세요.', '영상 비평 질문', [['cool', '무엇을 멋있게 보이게 하나?', true], ['miss', '빠진 결과는 무엇인가?', true], ['gain', '이 장면으로 이익을 보는 쪽이 있나?', true], ['who', '이 영상을 보는 사람은 누구인가?', true], ['next', '실제라면 다음 날 어떻게 될까?', true], ['star', '주인공이 얼마나 멋있나?', false]], { d: 0.2 })),
            { type: 'short', prompt: '점검표에 없는 비평 질문 하나를 새로 만들어 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '나의 영상 비평 질문',
          items: [
            { type: 'check', prompt: '앞으로 영상을 볼 때 던질 질문에 표시하세요.', options: ['무엇을 멋있게 보이게 하나?', '빠진 결과는?', '누가 이익을 보나?', '누가 보는 영상인가?', '실제라면 다음 날은?'] },
            { type: 'short', prompt: '내가 새로 만든 비평 질문과 그 질문이 필요한 까닭을 쓰세요.' },
          ],
          easy: { note: '멋있게? · 빠진 결과? · 누가 이익? · 누가 보나? · 다음 날은?', items: [{ type: 'check', prompt: '꼭 쓸 질문에 표시하세요.', options: ['무엇을 멋있게 보이게 하나?', '빠진 결과는?', '실제라면 다음 날은?'] }] },
        },
      }),
      M({
        id: 'wrap.web', type: 'wrap', title: '미디어 비평 개념 그물',
        method: '비평 개념 그물', tool: 'mindmap', minutes: 8,
        levels: { easy: '교사가 가지마다 카드 1장씩(3장)을 먼저 함께 붙여 보이고, 나머지 3장을 붙이게 한다.', base: '카드 6장을 스스로 세 가지에 붙인다.', challenge: '출구 짧은 답에 두 가지 사이의 관계(장치 → 영향 → 대안)를 한 문장으로 쓰게 한다.' },
        wrap: {
          teacher: '"\'미디어 속 약물 장면\' 하면 오늘 무엇이 떠오르나요? 장치, 그 영향, 그리고 대안으로 정리해요." 카드를 붙인 뒤 "이 장치가 이 영향을 낳았다면, 어떤 대안이 그 고리를 끊을까요?"라고 묻는다. \'경고 문구 넣기\'를 대안 칸에 붙인 학생에게 "오늘 크리에이터 갈림길에서 경고 문구만으로 충분했나요?"라고 되묻는다. 장치·영향·대안이 하나의 고리로 이어진다는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '미디어 속 약물 장면', slots: ['연출 장치', '시청자에게 주는 영향', '대안'], cards: ['신나는 음악', '결과 생략', '위험이 없다고 믿게 됨', '따라 하고 싶어짐', '다음 날 결과까지 보여 주기', '시청자에 맞춰 기획 바꾸기'] }, prompt: '오늘 찾은 카드를 세 가지 가지에 붙이세요.', target: { sort: { '연출 장치': ['신나는 음악', '결과 생략'], '시청자에게 주는 영향': ['위험이 없다고 믿게 됨', '따라 하고 싶어짐'], 대안: ['다음 날 결과까지 보여 주기', '시청자에 맞춰 기획 바꾸기'] } }, difficulty: 0.2 },
            { type: 'short', prompt: '장치 → 영향 → 대안을 이어 한 문장으로 쓰세요.' },
            { type: 'choice', prompt: '오늘 배운 것과 맞지 않는 말을 고르세요.', options: ['영상은 허구라서 보는 사람에게 영향이 없다', '결과를 생략하면 위험이 없는 것처럼 보인다', '비평은 장면을 즐기면서도 장치를 알아보는 것이다'], answer: 0, difficulty: 0.15, explain: '\'따라 마셔 봤어요\' 댓글처럼 영상은 보는 사람의 생각과 행동에 영향을 줄 수 있어요.' },
          ],
        },
        worksheet: {
          title: '미디어 비평 그물',
          items: [
            { type: 'table', prompt: '장치·영향·대안을 이어 정리하세요.', columns: ['연출 장치', '시청자에게 주는 영향', '대안'], cells: [['', '', ''], ['', '', '']] },
            { type: 'short', prompt: '오늘 배운 비평 개념 가운데 친구에게 알려 주고 싶은 것 하나를 쓰세요.' },
          ],
          easy: { note: '장치 → 영향 → 대안', items: [{ type: 'short', prompt: '연출 장치 하나와 그 영향을 쓰세요.' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 6. 또래 압력 딜레마 — 결과를 끝까지 따라가기 (11학년)
  // ======================================================================================================
  {
    const M = MOD('peer-pressure', [11]);
    const SENIOR = { text: '동아리 모임 뒤 골목, 선배가 담배를 내밀며 말한다. "이 정도도 못 해? 우리 동아리 애들은 다 해."', who: '시우', motif: 'moon', choices: [
      { id: 'take', text: '분위기를 깨기 싫어 받는다', result: '선배들이 "역시"라며 어깨를 친다.', impact: [{ who: '시우', text: '그 자리에선 어울린 기분이 든다', tone: 0 }],
        next: { text: '일주일 뒤, 선배가 "오늘도 오지?"라며 단체방에서 부른다.', choices: [
          { id: 'again', text: '빠지면 이상해 보일까 봐 또 간다', result: '담배가 모임마다 당연한 순서가 된다.', impact: [{ who: '시우', text: '한 번이 습관이 되어 간다', tone: -1 }],
            next: { text: '한 학기 뒤, 체육 시간에 숨이 차고 옷에 냄새가 밴다는 말을 듣는다.', choices: [
              { id: 'quit', text: '상담 선생님께 끊고 싶다고 털어놓는다', result: '선생님과 함께 금연 계획을 세운다.', impact: [{ who: '시우', text: '되돌릴 길을 찾는다', tone: 1 }], ending: '늦었다고 느낄 때도 도움을 청하면 다시 시작할 수 있다.' },
              { id: 'stay', text: '이제 와서 끊으면 이상하다며 그대로 둔다', result: '모임 밖에서도 담배를 찾게 된다.', impact: [{ who: '시우', text: '의존이 깊어진다', tone: -1 }], ending: '처음의 \'한 번\'이 한 학기 뒤의 습관이 된다.' }] } },
          { id: 'excuse', text: '"오늘은 학원이라서"라고 둘러댄다', result: '그날은 빠졌지만 다음 주에 또 부른다.', impact: [{ who: '시우', text: '같은 압력이 되풀이된다', tone: 0 }], ending: '둘러대기는 압력을 미룰 뿐 끝내지 못한다.' }] } },
      { id: 'no', text: '"난 안 해요. 먼저 들어갈게요"라고 분명히 말한다', result: '선배가 "재미없네"라며 웃는다.', impact: [{ who: '시우', text: '조금 어색하지만 기준을 지킨다', tone: 1 }],
        next: { text: '일주일 뒤, 단체방에서 선배가 "시우는 빼고 가자"라고 쓴다.', choices: [
          { id: 'other', text: '같은 생각인 친구와 동아리 활동에만 나간다', result: '담배 없는 친구들과 활동 시간이 늘어난다.', impact: [{ who: '시우', text: '내가 있을 자리를 다시 찾는다', tone: 1 }],
            next: { text: '한 학기 뒤, 후배가 같은 권유를 받고 고민한다며 찾아온다.', choices: [
              { id: 'support', text: '"나도 그랬어"라며 거절한 경험과 상담실을 알려 준다', result: '후배가 권유를 거절하고 마음이 가벼워졌다고 한다.', impact: [{ who: '후배', text: '혼자가 아니라고 느낀다', tone: 1 }], ending: '내가 지킨 기준이 다음 사람의 길이 된다.' },
              { id: 'pass', text: '"알아서 해"라고 넘긴다', result: '후배는 혼자 고민하다 선배를 따라간다.', impact: [{ who: '후배', text: '같은 압력에 혼자 맞선다', tone: -1 }], ending: '거절해 본 사람의 한마디가 가장 큰 힘이 될 수 있다.' }] } },
          { id: 'regret', text: '혼자 빠진 게 서운해 다음엔 받기로 한다', result: '다음 모임에서 담배를 받는다.', impact: [{ who: '시우', text: '지킨 기준이 무너진다', tone: -1 }], ending: '소외의 두려움이 기준을 흔드는 가장 큰 압력이다.' }] } },
      { id: 'alt', text: '"담배 말고 편의점 가서 음료 사요"라며 화제를 돌린다', result: '한 친구가 "나도 음료"라며 따라온다.', impact: [{ who: '시우', text: '관계를 지키며 빠져나온다', tone: 1 }],
        next: { text: '일주일 뒤, 선배가 또 담배를 꺼낸다.', choices: [
          { id: 'clear', text: '이번에는 "저는 안 피워요"라고 분명히 말한다', result: '선배가 더는 권하지 않는다.', impact: [{ who: '시우', text: '돌려 말하기에서 분명한 거절로 나간다', tone: 1 }],
            next: { text: '한 학기 뒤, 동아리에 담배 없는 모임 규칙을 만들자는 이야기가 나온다.', choices: [
              { id: 'rule', text: '규칙 만들기에 의견을 낸다', result: '모임이 학교 안에서 열리고 담배가 사라진다.', impact: [{ who: '동아리', text: '모두가 편한 자리가 된다', tone: 1 }], ending: '한 사람의 거절이 모임의 규칙으로 자랄 수 있다.' },
              { id: 'quiet', text: '나서기 싫어 가만히 있는다', result: '규칙 이야기는 흐지부지된다.', impact: [{ who: '동아리', text: '압력이 그대로 남는다', tone: 0 }], ending: '분위기를 바꿀 기회는 목소리를 내야 잡을 수 있다.' }] } },
          { id: 'again2', text: '또 화제를 돌리다 결국 받는다', result: '돌려 말하기가 통하지 않는다.', impact: [{ who: '시우', text: '압력에 밀린다', tone: -1 }], ending: '화제 돌리기는 첫 출구이고, 되풀이되면 분명한 거절이 필요하다.' }] } }] };
    const SENIOR_R = [{ id: 'clear', text: '분명한 거절은 같은 압력이 되풀이되는 것을 막는다' }, { id: 'place', text: '내가 있을 자리는 담배 없는 모임에도 있다' }, { id: 'help', text: '되돌리고 싶을 때는 상담 선생님과 계획을 세운다' }, { id: 'all', text: '모두 하니 위험하지 않다', why: '여럿이 한다고 내 몸에 생기는 일이 줄지는 않아요.' }, { id: 'end', text: '거절하면 관계가 끝난다', why: '거절해도 관계를 지키는 말과 다른 자리가 있어요.' }];
    const CHAT = { text: '반 단체방에 "토요일 뒤풀이, 술 있음. 안 오는 사람은 우리 반 아님ㅋ"이라는 글이 올라왔다.', who: '시우', motif: 'house', choices: [
      { id: 'silent', text: '아무 말 없이 그날 몰래 빠진다', result: '다음 주 단체방에서 "배신자"라는 농담이 돈다.', impact: [{ who: '시우', text: '혼자 놀림을 감당한다', tone: -1 }],
        next: { text: '같이 빠진 친구가 "우리 따로 놀래?"라고 묻는다.', choices: [
          { id: 'plan', text: '술 없는 모임을 따로 만들고 반 전체에 알린다', result: '생각보다 많은 친구가 함께한다.', impact: [{ who: '반 친구들', text: '고를 수 있는 자리가 생긴다', tone: 1 }], ending: '숨어서 빠지기보다 다른 자리를 만들면 압력이 약해진다.' },
          { id: 'hide', text: '조용히 둘이서만 논다', result: '단체방의 분위기는 그대로다.', impact: [{ who: '반 친구들', text: '다음에도 같은 글이 올라온다', tone: 0 }], ending: '압력의 말이 그대로 남으면 다음 사람이 또 흔들린다.' }] } },
      { id: 'speak', text: '"술 없이도 놀 수 있잖아. 난 노래방 가자는 쪽"이라고 쓴다', result: '몇 명이 "나도"라고 답한다.', impact: [{ who: '반 친구들', text: '다른 의견을 말해도 된다는 것을 안다', tone: 1 }],
        next: { text: '글을 올린 친구가 "분위기 깨지 마"라고 답한다.', choices: [
          { id: 'calm', text: '"깨려는 게 아니라 다 같이 오자는 거야"라고 차분히 답한다', result: '단체방 투표에서 노래방 안이 많이 나온다.', impact: [{ who: '반 전체', text: '모두가 갈 수 있는 모임이 된다', tone: 1 }], ending: '관계를 존중하는 말로 대안을 내면 분위기를 바꿀 수 있다.' },
          { id: 'fight', text: '"너나 마셔"라고 날카롭게 답한다', result: '단체방이 말다툼으로 번진다.', impact: [{ who: '반 전체', text: '편이 갈린다', tone: -1 }], ending: '옳은 말도 상대를 공격하면 대안이 묻힌다.' }] } }] };
    const CHAT_R = [{ id: 'alt', text: '대안을 함께 내면 거절이 관계를 지키는 말이 된다' }, { id: 'voice', text: '다른 의견이 하나 나오면 망설이던 사람도 말할 수 있다' }, { id: 'out', text: '안 가면 우리 반이 아니다', why: '모임에 가는지가 소속을 정하지 않아요. 그 말이 바로 압력이에요.' }];
    const ROUTE = { title: '학교와 동네(가상)', grid: [4, 3], places: [{ name: '학교 상담실', icon: 'office', at: [0, 0] }, { name: '담임 교실', icon: 'school', at: [1, 0] }, { name: '경찰서', icon: 'police', at: [3, 0] }, { name: '병원', icon: 'hospital', at: [3, 2] }, { name: '집', icon: 'house', at: [0, 2] }, { name: '공원', icon: 'park', at: [2, 1] }] };

    MODS.push(
      M({
        id: 'intro.scene', type: 'intro', title: '뒤풀이 압력 장면 차례',
        method: '상황 장면 차례', tool: 'story', minutes: 6,
        levels: { easy: '앞 장면 세 개만 함께 읽고 차례를 본다.', base: '다섯 장면을 차례로 놓는 시연을 보며 압력이 가장 커지는 순간을 고른다.', challenge: '압력을 키운 말 한마디를 찾아 그 말이 노린 마음을 말한다.' },
        intro: {
          teacher: '"축제가 끝난 뒤풀이 장면이에요. 처음엔 그냥 즐거운 자리였는데, 어디서부터 분위기가 바뀌었을까요?" 시연 단추로 장면이 차례로 놓이는 모습을 보인 뒤 압력이 가장 커지는 장면을 고르게 한다. "그냥 싫다고 하면 되잖아요"라는 말이 나오면 "\'분위기 깨지 마\'라는 말을 들은 순간에도 쉬울까요? 왜 어려울까요?"라고 되묻는다. 오늘은 압력의 원인을 찾고 결과를 끝까지 따라가 거절·개입 전략을 세운다고 밝힌다.',
          student: '뒤풀이 장면 다섯 개를 차례대로 보고, 압력이 가장 커지는 순간과 그 순간에 나온 말을 찾아보세요.',
          demo: { tool: 'story', options: { mode: 'order', slots: 5, title: '축제 뒤풀이(가상)', cards: [{ id: 'gather', text: '축제가 끝나고 뒤풀이에 모인다', motif: 'star' }, { id: 'out', text: '누군가 술과 전자담배를 꺼낸다', motif: 'moon' }, { id: 'one', text: '"다 같이 한 잔만"이라는 말이 나온다', motif: 'cloud' }, { id: 'eyes', text: '안 하는 친구에게 시선이 몰린다', motif: 'rain' }, { id: 'break', text: '"분위기 깨지 마"라는 말이 나온다', motif: 'cloud' }], shuffle: false }, sequence: [{ order: ['gather', 'out', 'one', 'eyes', 'break'] }] },
          art: { draw: 'five paper story panels of a festival after-party, paper lanterns, a circle of paper silhouettes turning toward one hesitant student, a dark paper cloud growing above', banner: '압력은 언제 커질까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '장면은 가상이다. 학생에게 이런 자리에 가 본 적이 있는지 묻지 않는다.',
      }),
      M({
        id: 'intro.data', type: 'intro', title: '권유받는 상황 자료',
        method: '가상 자료 띠그래프', tool: 'chart', minutes: 6,
        levels: { easy: '큰 칸 3개(친구 모임·선배와의 자리·온라인)만 함께 읽는다.', base: '다섯 칸을 모두 읽고 가장 흔한 유형을 고른다.', challenge: '이 자료를 모은 방법의 한계(누구에게·어떻게 물었는지)를 비판한다.' },
        intro: {
          teacher: '"가상의 학년 조사예요. 술·담배 권유를 가장 많이 받는 상황은 어디일까요?" 시연 단추로 가장 큰 칸이 골라지는 모습을 보인다. "낯선 사람이 권하는 게 제일 위험하지 않아요?"라는 말이 나오면 "자료에서 낯선 사람 칸은 얼마나 큰가요? 거절하기 어려운 사람은 누구일까요?"라고 되묻는다. 권유는 가까운 사람에게서 올 때가 많고, 그래서 거절이 더 어렵다는 점을 짚는다.',
          student: '가상 조사 띠그래프에서 가장 흔한 권유 상황을 찾고, 그 상황에서 거절이 왜 어려운지 생각해 보세요.',
          demo: { tool: 'chart', options: { type: 'band', mode: 'read', title: '술·담배 권유를 받은 상황(가상 조사)', unit: '%', data: [['친구 모임', 40], ['선배와의 자리', 25], ['온라인', 15], ['가족 행사', 12], ['낯선 사람', 8]], question: '가장 큰 칸은?', choices: ['친구 모임', '선배와의 자리', '온라인', '가족 행사', '낯선 사람'] }, sequence: [{ pick: 0 }] },
          art: { draw: 'a long paper band chart with five colored strips, paper silhouettes of friends, seniors and a phone above each strip, the largest strip glowing', banner: '권유는 어디서 올까?', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
        notes: '그래프는 수업용 가상 자료다. 학생의 실제 경험을 조사하지 않는다.',
      }),
      M({
        id: 'intro.self', type: 'intro', title: '나의 거절 습관 점검',
        method: '나의 거절 습관 점검', tool: 'kitchen', minutes: 6,
        levels: { easy: '점검표 앞 네 항목만 함께 읽고 속으로 표시해 본다.', base: '여섯 항목을 읽고 나에게 해당하는 것에 표시한다(발표하지 않음).', challenge: '가장 약하다고 느낀 항목 하나를 골라 그 까닭을 생각해 본다.' },
        intro: {
          teacher: '"나는 부탁이나 권유를 받을 때 어떤 편인가요? 점검표는 남에게 보여 주지 않아도 돼요." 시연 단추로 항목이 표시되는 모습을 보인 뒤, 각자 속으로 표시하게 한다. "저는 거절 잘해요, 해당 없어요"라는 말이 나오면 "친한 친구가 부탁할 때와 선배가 권할 때도 똑같을까요?"라고 묻는다. 표시가 많다고 나쁜 것이 아니라, 어디가 약한지 알면 그 자리에 쓸 말을 미리 준비할 수 있다는 점을 짚는다.',
          student: '나의 거절 습관 점검표를 읽고, 나에게 해당하는 항목에 속으로 표시해 보세요. 결과는 발표하지 않아요.',
          demo: { tool: 'kitchen', options: { mode: 'checklist', title: '나의 거절 습관(예시)', items: [{ id: 'mood', text: '분위기를 깨기 싫어 따라간다' }, { id: 'reason', text: '거절할 까닭을 바로 말하기 어렵다' }, { id: 'sorry', text: '거절하고 나면 미안해진다' }, { id: 'alone', text: '혼자 빠지면 소외될까 걱정된다' }, { id: 'senior', text: '선배에게는 더 거절하기 어렵다' }, { id: 'later', text: '그 자리에서 말 못하고 나중에 후회한다' }] }, sequence: [{ checklist: ['mood', 'alone'] }] },
          art: { draw: 'a paper clipboard checklist with soft pastel check boxes, a paper mirror reflecting a thoughtful student, small paper speech bubbles waiting to be filled', banner: '나는 어떤 편일까?', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
        notes: '점검 결과를 발표·제출시키지 않는다. 시연의 표시는 예시일 뿐이다.',
      }),

      M({
        id: 'activity.path', type: 'activity', title: '선배 담배 권유 갈림길',
        method: '딜레마 결과 추적', tool: 'dilemma', minutes: 18,
        levels: { easy: '갈림길 둘(그날 밤·일주일 뒤)까지 가 보고 근거 카드를 고른다.', base: '갈림길 셋(한 학기 뒤까지) 결과를 따라가고 근거 카드를 고른다.', challenge: '다른 끝 길을 하나 더 끝까지 가 보고 견주며, 활동지에 세 길의 끝을 견주어 쓴다.' },
        activity: {
          title: '선배 담배 권유 갈림길', tool: 'dilemma',
          teacher: '"시우의 선택은 그날 밤에서 끝나지 않아요. 일주일 뒤, 한 학기 뒤까지 따라가 봐요." 장면마다 시간이 흐른다는 것을 짚으며 영향 칸을 읽게 한다. \'받는다\'를 고른 학생에게 "그날 밤엔 어울린 기분이었죠. 한 학기 뒤 시우는 어떤 기분일까요?"라고 묻는다. "거절하면 관계가 끝난다"는 말이 나오면 거절 길의 한 학기 뒤 장면을 함께 보며 무엇이 끝나고 무엇이 새로 생겼는지 견주게 한다. 화제 돌리기는 첫 출구이고, 되풀이되면 분명한 거절이 필요하다는 점을 짚는다.',
          task: '시우의 선택을 그날 밤·일주일 뒤·한 학기 뒤까지 따라가 보고, 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL3('시우가 되어 한 학기 뒤까지 나를 지키는 길을 고르고, 근거 카드를 고르세요.', SENIOR, [['no', 'other', 'support'], ['alt', 'clear', 'rule'], ['take', 'again', 'quit']], SENIOR_R, ['clear', 'place'], { d: 0.4, opt: { title: '선배의 권유(가상)' } }),
            DIL2('반 단체방에 술 뒤풀이 글이 올라온 장면에서 관계를 지키며 대안을 내는 길을 고르고, 근거 카드를 고르세요.', CHAT, [['speak', 'calm'], ['silent', 'plan']], CHAT_R, ['alt', 'voice'], { d: 0.35, opt: { title: '단체방 뒤풀이 글(가상)' } }),
            EXPLOREQ('선배 권유 장면에서 \'받는다\'로 시작한 길과 \'분명히 거절\'로 시작한 길을 한 학기 뒤까지 가 보고 견주세요.', SENIOR, SENIOR_R, ['두 길의 한 학기 뒤 장면을 모두 보았다', '두 길에서 시우의 관계가 어떻게 달라졌는지 견주었다', '받은 뒤에도 되돌릴 수 있는 지점을 찾았다'], { d: 0.35, more: { conclude: '그 자리의 분위기는 하룻밤이지만 선택의 결과는 한 학기를 가요. 분명한 거절과 다른 자리 찾기가 나를 지키고, 이미 받았더라도 되돌릴 길이 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '세 길의 끝을 견주어 쓰세요.', columns: ['처음 선택', '한 학기 뒤 시우', '시우의 관계'], cells: [['받는다', '', ''], ['분명히 거절', '', ''], ['화제 돌리기', '', '']] }] },
        notes: '흡연을 \'해 본\' 장면은 결과로만 다루고 느낌을 묘사하지 않았다.',
      }),
      M({
        id: 'activity.stakes', type: 'activity', title: '거절이 어려운 까닭 그물',
        method: '압력의 원인 그물', tool: 'mindmap', minutes: 18,
        levels: { easy: '가지 2개(소속감·분위기)에 사례 카드 4장을 붙이고, 놓자마자 맞는지 보인다.', base: '가지 4개(소속감·지위·불안·분위기)에 사례 카드 8장을 붙이고, 가지마다 대응 전략을 짝짓는다.', challenge: '카드가 섞인 채로 풀고, 활동지에 가장 약한 가지의 대응 전략을 내 말로 쓴다.' },
        activity: {
          title: '거절이 어려운 까닭 그물', tool: 'mindmap',
          teacher: '"\'싫으면 싫다고 하면 되지\'라는 말이 왜 늘 통하지 않을까요? 거절을 어렵게 만드는 까닭을 가지로 나눠 봐요." 사례 카드를 붙일 때마다 "이 마음은 무엇을 잃을까 봐 생기나요?"라고 묻는다. \'겁쟁이로 보일까 봐\'를 소속감에 넣는 학생에게 "무리에서 빠지는 것이 두려운 걸까요, 무리 안에서 낮게 보이는 것이 두려운 걸까요?"라고 되묻는다. 원인이 다르면 대응도 달라야 한다는 점을 짚는다.',
          task: '거절이 어려운 까닭을 네 가지 가지에 나누고, 가지마다 쓸 수 있는 대응 전략을 짝지어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            { prompt: '거절이 어려운 사례 카드를 원인 가지에 붙이세요.', toolOptions: { mode: 'sort', topic: '왜 거절하기 어려울까', slots: ['소속감', '지위', '불안', '분위기'], cards: ['무리에서 빠질까 봐', '겁쟁이로 보일까 봐', '거절한 뒤 어색해질까 봐', '다들 웃고 있어서', '단체방에서 나만 다른 말을 할까 봐', '선배에게 찍힐까 봐', '무슨 말로 거절할지 몰라서', '흥이 오른 자리라서'] }, target: { sort: { 소속감: ['무리에서 빠질까 봐', '단체방에서 나만 다른 말을 할까 봐'], 지위: ['겁쟁이로 보일까 봐', '선배에게 찍힐까 봐'], 불안: ['거절한 뒤 어색해질까 봐', '무슨 말로 거절할지 몰라서'], 분위기: ['다들 웃고 있어서', '흥이 오른 자리라서'] } }, difficulty: 0.3,
              levels: { easy: { prompt: '거절이 어려운 사례 카드를 두 원인 가지에 붙이세요(가지 2개, 카드 4장).', toolOptions: { slots: ['소속감', '분위기'], cards: ['무리에서 빠질까 봐', '다들 웃고 있어서', '단체방에서 나만 다른 말을 할까 봐', '흥이 오른 자리라서'] }, target: { sort: { 소속감: ['무리에서 빠질까 봐', '단체방에서 나만 다른 말을 할까 봐'], 분위기: ['다들 웃고 있어서', '흥이 오른 자리라서'] } } } } },
            MATCHQ('원인 가지와 그 원인에 맞는 대응 전략을 짝지으세요.', [['소속감', '술·담배 없는 다른 모임을 함께 만든다'], ['지위', '"난 내 기준이 있어"라고 당당하게 말한다'], ['불안', '거절할 말을 미리 한 문장 준비해 둔다'], ['분위기', '음료·노래 같은 대안을 내며 화제를 바꾼다']], { k: 2, d: 0.35, opt: { topic: '원인에 맞는 대응' } }),
            PICKQ('또래 압력에 대해 바르게 말한 것만 고르세요.', ['원인을 알면 그에 맞는 대응을 준비할 수 있다', '거절해도 관계를 지키는 말이 있다'], ['거절하면 관계가 끝난다', '모두 하니 위험하지 않다'], { d: 0.3, opt: { basket: '바른 말' }, more: { conclude: '거절이 어려운 까닭은 소속감·지위·불안·분위기처럼 다양해요. 원인을 알면 그 자리에 쓸 말과 대안을 미리 준비할 수 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '네 가지 가운데 나에게 가장 강하게 작용할 것 같은 원인 하나와 그 대응 전략을 내 말로 쓰세요.' }] },
      }),
      M({
        id: 'activity.script', type: 'activity', title: '거절·개입 대본 쓰기',
        method: '거절·개입 대본', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '대본 틀(권유 → 거절 → 개입)의 문장 시작 도움말을 보고 쓴다.', base: '거절하는 사람과 개입하는 친구의 대사를 모두 여덟 줄 안팎으로 쓰고 기준표를 점검한다.', challenge: '마지막 글에 기준 하나(세 번째 권유까지 이어 쓰기)를 더해 점검한다.' },
        activity: {
          title: '거절·개입 대본 쓰기', tool: 'rubric-writing',
          teacher: '"오늘 대본의 주인공은 둘이에요. 거절하는 사람, 그리고 옆에서 거드는 친구." 기준표 세 항목(분명함·관계 존중·출구 제시)을 함께 읽고 쓰게 한다. "됐어, 꺼져"처럼 날카로운 거절을 쓴 학생에게 "분명하긴 한데, 다음 날 그 친구와 어떻게 지내게 될까요?"라고 묻는다. "미안한데 다음에…"처럼 흐린 거절에는 "상대가 \'다음\'을 약속으로 들으면 어떻게 될까요?"라고 묻는다. 좋은 거절은 분명하고, 관계를 존중하고, 함께 갈 출구를 연다는 점을 짚는다.',
          task: '권유를 거절하는 사람과 개입하는 친구가 나오는 짧은 대본을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('권유를 거절하는 대사를 쓰고 기준표로 점검하세요.', '친구가 "한 번만 해 봐"라며 전자담배를 권해요. 거절하는 사람의 대사를 두세 줄로 쓰세요.', ['거절이 분명하다(\'안 해\'가 들어 있다)', '상대를 깎아내리지 않았다', '함께할 다른 출구를 냈다'], { min: 30, max: 250, starter: '나: "고마운데 난 안 해. 대신 ~"', d: 0.3 }),
            RWQ('옆에서 개입하는 친구의 대사를 쓰고 기준표로 점검하세요.', '권유가 계속될 때 옆 친구가 끼어들어 거드는 대사를 두세 줄로 쓰세요.', ['거절한 친구 편에 섰다', '분위기를 크게 해치지 않았다', '자리를 옮기거나 화제를 바꾸는 출구를 냈다'], { min: 30, max: 250, starter: '친구: "얘 안 한대. 우리 ~ 가자"', d: 0.35 }),
            RWQ('두 사람의 대사를 이어 여덟 줄 안팎의 대본을 완성하고 기준표로 점검하세요.', '권유 → 거절 → 다시 권유 → 개입 → 마무리로 이어지는 대본을 여덟 줄 안팎으로 쓰세요(실제 친구 이름은 쓰지 않아요).', ['권유가 되풀이되어도 거절이 흔들리지 않았다', '개입하는 친구의 대사가 들어 있다', '마지막에 함께 떠나는 출구가 있다'], { min: 120, max: 600, plus: '세 번째 권유까지 이어 쓰고도 거절이 분명하다', sample: '선배: "한 번만 해 봐." 나: "고마운데 난 안 해요. 음료 사러 갈래요?" 선배: "에이, 분위기 깨지 마." 친구: "얘 원래 안 해요. 우리 노래방 가요." 선배: "너도 안 해?" 친구: "네, 저도 안 해요." 나: "다음엔 같이 노래방 가요." 친구: "가자, 늦겠다."', d: 0.45, more: { conclude: '좋은 거절과 개입은 분명하고, 관계를 존중하고, 함께 떠날 출구를 열어요. 대본으로 미리 말해 본 말은 실제 자리에서도 나오기 쉬워요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내 대본에서 실제 자리에서도 쓸 수 있을 것 같은 대사 한 줄을 골라 쓰세요.' }] },
        notes: '대본에는 가명만 쓰게 한다. 원하면 짝과 소리 내어 읽어 보게 하되 강요하지 않는다.',
      }),
      M({
        id: 'activity.bystander', type: 'activity', title: '개입 방식 견주기',
        method: '개입 방식 분류', tool: 'story', minutes: 18,
        levels: { easy: '개입 카드 3장을 도움이 되는 개입·도움이 안 되는 반응으로 나누고, 놓자마자 맞는지 보인다.', base: '개입 카드 5장을 나누고, 상황별로 가장 알맞은 개입을 짝짓고, 직접 말리기가 위험한 상황을 고른다.', challenge: '카드가 섞인 채로 풀고, 활동지에 상황별 최선의 개입과 그 근거를 쓴다.' },
        activity: {
          title: '개입 방식 견주기', tool: 'story',
          teacher: '"친구가 권유에 밀리고 있을 때 옆에 있는 나는 무엇을 할 수 있을까요? 방법마다 효과와 위험이 달라요." 카드를 나눈 뒤 상황별 짝짓기로 넘어간다. "친구 일에 끼어들지 않는 게 의리"라는 말이 나오면 "친구가 나중에 \'그때 왜 아무 말 안 했어?\'라고 하면 어떨까요?"라고 되묻는다. 직접 말리기는 용기 있는 일이지만 상대가 거칠어졌을 때는 함께 자리를 뜨거나 어른에게 알리는 것이 더 안전하다는 점을 짚는다.',
          task: '개입 방식을 효과와 위험에 따라 나누고, 상황에 맞는 개입을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            { prompt: '개입 카드를 도움이 되는 개입과 도움이 안 되는 반응으로 나누세요.', toolOptions: { mode: 'sort', title: '옆에 있는 나', slots: [{ id: 'help', label: '도움이 되는 개입' }, { id: 'nohelp', label: '도움이 안 되는 반응' }], cards: [{ id: 'stop', text: '직접 말리기', motif: 'sun' }, { id: 'topic', text: '화제 돌리기', motif: 'star' }, { id: 'leave', text: '함께 자리 뜨기', motif: 'house' }, { id: 'adult', text: '어른에게 알리기', motif: 'sun' }, { id: 'ignore', text: '모른 척하기', motif: 'cloud' }, { id: 'laugh', text: '같이 웃어넘기기', motif: 'rain' }] }, target: { sort: { help: ['stop', 'topic', 'leave', 'adult'], nohelp: ['ignore', 'laugh'] } }, difficulty: 0.25,
              levels: { easy: { prompt: '개입 카드를 도움이 되는 개입과 도움이 안 되는 반응으로 나누세요(카드 3장).', toolOptions: { cards: [{ id: 'leave', text: '함께 자리 뜨기', motif: 'house' }, { id: 'adult', text: '어른에게 알리기', motif: 'sun' }, { id: 'ignore', text: '모른 척하기', motif: 'cloud' }] }, target: { sort: { help: ['leave', 'adult'], nohelp: ['ignore'] } } } } },
            { prompt: '상황마다 가장 알맞은 개입 방식을 짝지으세요.', toolOptions: { mode: 'match', title: '상황에 맞는 개입', slots: [{ id: 'start', label: '권유가 막 시작됐다' }, { id: 'push', label: '선배가 계속 강요한다' }, { id: 'drunk', label: '친구가 이미 많이 마셔 비틀거린다' }], cards: [{ id: 'topic', text: '화제 돌리기' }, { id: 'leave', text: '함께 자리 뜨기' }, { id: 'adult', text: '어른에게 알리기' }, { id: 'ignore', text: '모른 척하기' }] }, target: { match: { start: 'topic', push: 'leave', drunk: 'adult' } }, difficulty: 0.35,
              levels: { easy: { prompt: '상황마다 가장 알맞은 개입 방식을 짝지으세요(2쌍).', toolOptions: { slots: [{ id: 'start', label: '권유가 막 시작됐다' }, { id: 'drunk', label: '친구가 이미 많이 마셔 비틀거린다' }], cards: [{ id: 'topic', text: '화제 돌리기' }, { id: 'adult', text: '어른에게 알리기' }] }, target: { match: { start: 'topic', drunk: 'adult' } } } } },
            { prompt: '직접 말리기가 위험할 수 있는 상황만 고르세요.', toolOptions: { mode: 'pick', basket: '직접 말리기 대신 다른 방법', title: '직접 말리기의 위험', cards: [{ id: 'angry', text: '상대가 화가 나 거칠어졌다' }, { id: 'calm', text: '분위기가 아직 차분하다' }, { id: 'many', text: '나 혼자 여러 명을 상대해야 한다' }, { id: 'one', text: '친한 친구 한 명이 망설이고 있다' }] }, target: { pick: ['angry', 'many'] }, difficulty: 0.35, conclude: '개입은 상황에 따라 고른다 — 막 시작되면 화제 돌리기, 강요가 이어지면 함께 자리 뜨기, 위급하면 어른에게 알리기. 내가 다칠 수 있으면 직접 말리기 대신 다른 방법을 써요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '상황별 최선의 개입과 그 근거를 쓰세요.', columns: ['상황', '최선의 개입', '근거'], cells: [['권유가 막 시작됐다', '', ''], ['친구가 위급해 보인다', '', '']] }] },
      }),
      M({
        id: 'activity.debate', type: 'activity', title: '비밀 알리기 찬반 토론',
        method: '찬반 토론 진행판', tool: 'timer', minutes: 18,
        levels: { easy: '입론·정리 두 단계만 차례로 놓고 두 단계 발언 시간을 맞춘다.', base: '네 단계 차례와 발언 시간을 맞추고 토론 뒤 스스로 점검한다.', challenge: '스스로 점검에 \'상대 근거를 요약한 뒤 반론했다\'가 더해진다.' },
        activity: {
          title: '비밀 알리기 찬반 토론', tool: 'timer',
          teacher: '"\'친구의 위험한 비밀을 어른에게 알리는 것은 배신이다.\' 찬성과 반대로 나눠 토론해요." 진행 차례와 발언 시간을 판으로 맞춘 뒤 시작한다. 찬성 쪽이 "친구가 믿고 말했으니까"라고만 하면 "그 믿음은 무엇을 바라고 한 말이었을까요? 친구의 안전보다 앞설까요?"라고 묻는다. 반대 쪽이 "무조건 알려야 한다"고만 하면 "알리기 전에 친구에게 먼저 말하는 방법은 없을까요?"라고 되묻는다. 생명·안전이 걸린 비밀과 그렇지 않은 비밀을 나눠 보는 것이 이 토론의 핵심이라는 점을 정리 단계에서 짚는다.',
          task: '토론 진행 차례와 발언 시간을 맞추고, 토론 뒤 우리 모둠을 스스로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: DEBATEQ('친구의 위험한 비밀을 어른에게 알리는 것은 배신이다', { label: '비밀과 배신', work: 2, rest: 1,
            checks: ['생명·안전이 걸린 경우와 아닌 경우를 나눠 말했다', '오늘 본 갈림길의 결과를 근거로 썼다', '사람이 아니라 주장을 비판했다'], plus: '상대 근거를 요약한 뒤 반론했다',
            conclude: '생명·안전이 걸린 비밀을 알리는 것은 친구를 지키는 일이에요. 알리기 전에 친구에게 먼저 말하고 함께 가자고 하는 방법도 있어요.' }),
        },
        worksheet: { items: [{ type: 'short', prompt: '\'알려야 하는 비밀\'과 \'지켜 줄 비밀\'을 나누는 내 기준을 한 문장으로 쓰세요.' }] },
        notes: '학생 자신이나 주변의 실제 비밀을 예로 들게 하지 않는다. 가상 장면으로만 토론한다.',
      }),
      M({
        id: 'activity.loop', type: 'activity', title: '압력이 되풀이되는 고리',
        method: '압력 되풀이 고리', tool: 'lifecycle', minutes: 18,
        levels: { easy: '고리 카드 3장을 차례로 놓고(놓자마자 맞는지 보임), 고리를 끊는 대안 2쌍을 짝짓는다.', base: '고리 카드 4장을 놓고, 지점마다 대안 활동 4쌍을 짝짓고, 대안이 실제로 가능한 조건을 고른다.', challenge: '카드가 섞인 채로 풀고, 활동지에 내 대안이 가능한 조건을 쓴다.' },
        activity: {
          title: '압력이 되풀이되는 고리', tool: 'lifecycle',
          teacher: '"한 번 따르면 끝일까요? 이 고리를 \'차례대로 따라가 보기\'로 돌려 보세요." 고리를 놓은 뒤 화살표가 처음으로 돌아오는 것을 함께 본다. "한 번만 따르면 다음엔 안 시키겠지"라는 말이 나오면 "한 번 따른 사람에게 사람들은 다음에 무엇을 기대할까요?"라고 되묻는다. 고리는 어느 지점에서든 끊을 수 있고, 대안 활동은 \'혼자 빠지기\'가 아니라 \'함께 갈 다른 곳\'이어야 오래간다는 점을 짚는다.',
          task: '압력이 되풀이되는 고리를 놓고, 지점마다 고리를 끊는 대안 활동을 짝지어요.', levels: { easy: { live: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDERQ('압력이 되풀이되는 차례로 고리에 카드를 놓으세요.', ['분위기에 휩쓸림', '한 번 따름', '기대가 커짐', '다시 압력'], { k: 3, d: 0.3, opt: { center: '압력이 되풀이되는 고리', cycle: true }, more: { target: { order: ['분위기에 휩쓸림', '한 번 따름', '기대가 커짐', '다시 압력'], cyclic: true } } }),
            MATCHQ('고리의 지점과 그 자리에서 고리를 끊는 대안 활동을 짝지으세요.', [['분위기에 휩쓸림', '모임 장소를 노래방·체육관으로 제안한다'], ['한 번 따름', '"이번이 마지막"이 아니라 지금 멈춘다고 말한다'], ['기대가 커짐', '내 기준을 친한 친구에게 미리 알려 둔다'], ['다시 압력', '같은 생각인 친구와 함께 자리를 뜬다']], { k: 2, d: 0.35, opt: { center: '고리를 끊는 대안' } }),
            PICKQ('대안 활동이 실제로 가능하려면 필요한 조건만 고르세요.', ['함께할 친구가 한 명 이상 있다', '모두가 갈 수 있는 시간·장소다', '미리 제안할 말을 준비했다'], ['나 혼자 몰래 빠진다', '돈이 많이 드는 곳으로 정한다'], { d: 0.35, opt: { basket: '가능한 조건' }, more: { conclude: '압력은 따를수록 되풀이되는 고리가 돼요. 어느 지점에서든 끊을 수 있고, 함께 갈 다른 곳이 있을 때 대안이 오래가요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내가 고리를 끊을 지점 하나와, 그때 함께할 대안 활동이 가능한 조건을 쓰세요.' }] },
      }),

      M({
        id: 'wrap.reflect', type: 'wrap', title: '내가 정한 선 성찰 글',
        method: '성찰 글', tool: 'rubric-writing', minutes: 8,
        levels: { easy: '문장 틀을 띄워 주고 첫 문장을 함께 말해 본 뒤 쓴다.', base: '다섯 문장 안팎으로 쓰고 기준표 세 항목을 스스로 점검한다.', challenge: '토론이나 갈림길에서 바뀐 생각 하나를 활동지 둘째 칸에 덧붙이게 한다.' },
        wrap: {
          teacher: '"오늘 여러 갈림길을 지나왔어요. 술·담배·약물 권유 앞에서 \'나는 여기까지\'라는 선은 어디인가요?" 쓰기 전에 기준표를 함께 읽는다. "그때그때 다르다"고 쓴 학생에게 "그때 정하면 분위기에 밀리기 쉬워요. 지금 미리 정해 둘 수 있는 것은 무엇일까요?"라고 묻는다. 선은 남에게 보이려는 것이 아니라 흔들릴 때 나를 붙잡는 기준이라는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'rubric-writing', options: { topic: '\'술·담배·약물 권유 앞에서 내가 정한 선\'을 다섯 문장 안팎으로 쓰세요.', minChars: 60, maxChars: 400, starter: '나는 권유를 받으면 ~까지만 한다. 왜냐하면 ~', sample: '나는 술·담배·약물 권유를 받으면 분명히 "안 해"라고 말한다. 분위기에 밀릴 것 같으면 음료나 노래방을 제안한다. 그래도 계속되면 같은 생각인 친구와 자리를 뜬다. 오늘 갈림길에서 한 번 따르면 다시 압력이 온다는 것을 보았기 때문이다. 친구가 위험해 보이면 어른에게 알린다.' }, prompt: '성찰 글을 쓰고 기준표로 점검하세요.', target: { selfCheck: ['나의 기준(선)을 분명히 썼다', '그 기준의 근거를 썼다', '그 기준을 지킬 실천 방법을 썼다'] }, difficulty: 0.3 },
            { type: 'choice', prompt: '오늘 배운 것과 맞지 않는 말을 고르세요.', options: ['거절하면 관계가 반드시 끝난다', '한 번 따르면 같은 압력이 되풀이되기 쉽다', '대안 활동을 함께 내면 거절이 쉬워진다'], answer: 0, difficulty: 0.15, explain: '관계를 존중하는 말로 거절하면 관계를 지킬 수 있고, 함께할 다른 자리도 생겨요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '내가 정한 선',
          items: [
            { type: 'short', prompt: '권유 앞에서 내가 정한 선을 한 문장으로 쓰세요.' },
            { type: 'short', prompt: '오늘 활동에서 바뀐 생각 한 가지를 쓰세요.' },
          ],
          easy: { note: '"나는 권유를 받으면 ~까지만 한다. 왜냐하면 ~"', items: [{ type: 'short', prompt: '내가 정한 선을 쓰세요.' }] },
        },
      }),
      M({
        id: 'wrap.feel', type: 'wrap', title: '거절·개입 자신감 크기',
        method: '자신감 크기', tool: 'emotion', minutes: 8,
        levels: { easy: '자신감 크기만 고르게 한다.', base: '크기를 고른 뒤 짝에게 다짐 하나를 말하게 한다.', challenge: '다짐을 지킬 조건(누구와·어디서)을 출구 짧은 답에 쓰게 한다.' },
        wrap: {
          teacher: '"오늘 대본으로 연습한 거절과 개입, 실제 자리에서 할 자신이 얼마나 있나요? 크기는 정답이 없어요." 두 눈금(거절·개입)을 고른 뒤 짝에게 다짐 하나를 말하게 한다. "거절은 하겠는데 친구 일에 끼어드는 건 자신 없다"는 말이 나오면 "오늘 본 개입 방식 가운데 가장 부담이 적은 것은 무엇이었나요?"라고 묻는다. 자신감이 낮은 쪽이 바로 내가 미리 말을 준비해 둘 곳이라는 점을 짚는다.',
          exitTicket: [
            SCALE('권유를 거절할 내 자신감 크기를 고르세요.', '뒤풀이에서 친구가 "한 잔만"이라며 계속 권한다. 오늘 연습한 대로 거절할 수 있을까?', '자신감', { 1: '자신 없음', 5: '자신 있음' }, '거절할 자신은 얼마나 되나요?'),
            SCALE('친구를 위해 개입할 내 자신감 크기를 고르세요.', '옆 친구가 권유에 밀려 머뭇거린다. 화제를 돌리거나 함께 자리를 뜨자고 할 수 있을까?', '자신감', { 1: '자신 없음', 5: '자신 있음' }, '개입할 자신은 얼마나 되나요?'),
            { type: 'short', prompt: '내 다짐 하나와 그 다짐을 지킬 조건(누구와·어디서)을 쓰세요.' },
          ],
        },
        worksheet: {
          title: '거절·개입 다짐',
          items: [
            { type: 'short', prompt: '거절할 때 쓸 내 한 문장을 쓰세요.' },
            { type: 'short', prompt: '친구를 위해 개입할 때 쓸 내 한 문장을 쓰세요.' },
          ],
          easy: { note: '분명하게 · 관계를 존중하며 · 출구를 열며', items: [{ type: 'short', prompt: '거절할 때 쓸 내 한 문장을 쓰세요.' }] },
        },
      }),
      M({
        id: 'wrap.route', type: 'wrap', title: '권유 상황 도움 경로',
        method: '도움 경로 지도', tool: 'map', minutes: 8,
        levels: { easy: '지도 문항은 장소 이름을 함께 읽은 뒤 핀을 꽂게 하고, 번호 두 문항은 함께 푼다.', base: '지도 1문항과 번호 2문항(응급·위험)을 스스로 푼다.', challenge: '세 상황을 급한 정도에 따라 순서를 정해 짝과 말하게 한다.' },
        wrap: {
          teacher: '"권유나 압력이 내 힘으로 감당하기 어려워지면 누구와 연결할까요? 급한 정도에 따라 달라요." 지도 문항을 푼 뒤 119·112·1388의 쓰임을 견주게 한다. "친구가 술을 많이 마셔 깨워도 반응이 없는데 혼날까 봐 망설여진다"는 말이 나오면 "지금 가장 중요한 것은 혼나지 않는 것일까요, 친구의 숨일까요?"라고 묻는다. 생명이 걸리면 119, 협박·강요는 112, 고민은 상담실·1388이라는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'map', options: ROUTE, prompt: '어제 뒤풀이에서 선배에게 받은 압력이 계속 마음에 걸려요. 오늘 학교에서 이야기하러 갈 곳에 핀을 꽂으세요.', target: { place: '학교 상담실' }, difficulty: 0.2 },
            { type: 'choice', prompt: '술자리에서 친구가 깨워도 반응이 없어요. 가장 먼저 걸 번호를 고르세요.', options: ['1388', '112', '119'], answer: 2, difficulty: 0.15, explain: '깨워도 반응이 없으면 생명이 걸린 응급 상황일 수 있어요. 119가 먼저예요.' },
            { type: 'choice', prompt: '선배가 "안 하면 가만 안 둔다"며 협박해요. 걸 번호를 고르세요.', options: ['112', '119', '1388'], answer: 0, difficulty: 0.15, explain: '협박·강요처럼 지금 위험할 때는 112예요.' },
          ],
        },
        worksheet: {
          title: '급한 정도에 따른 도움',
          items: [
            { type: 'table', prompt: '급한 정도에 따라 연락할 곳을 쓰세요.', columns: ['상황', '급한 정도', '연락할 곳'], cells: [['깨워도 반응이 없다', '', ''], ['협박을 받는다', '', ''], ['압력이 계속 마음에 걸린다', '', '']] },
            { type: 'short', prompt: '세 상황을 급한 순서로 놓고 그 까닭을 쓰세요.' },
          ],
          easy: { note: '생명 = 119 · 협박 = 112 · 고민 = 상담실·1388', items: [{ type: 'short', prompt: '깨워도 반응이 없는 친구를 보면 걸 번호를 쓰세요.' }] },
        },
        notes: '지도는 가상이다. 실제 학교 상담실 위치와 이용 시간을 교사가 알려 준다.',
      }),
    );
  }

  // ======================================================================================================
  // 7. 폭음의 위험과 술자리 관행 (12학년)
  // ======================================================================================================
  {
    const M = MOD('binge-drinking', [12]);
    const PARTY = { text: '졸업 여행 숙소, 밤이 깊었다. 많이 마신 친구 준이 바닥에 누워 있는데 깨워도 대답이 없다. 한 친구가 "그냥 자게 두자"고 한다.', who: '나', motif: 'moon', choices: [
      { id: 'call', text: '숨쉬는지 살피고 바로 119에 신고한다', result: '구급대가 출발하고 상황실에서 기다리는 동안 할 일을 알려 준다.', impact: [{ who: '준', text: '빨리 도움이 닿는다', tone: 1 }],
        next: { text: '구급대를 기다리는 동안 준이 토할 것처럼 몸을 뒤척인다.', choices: [
          { id: 'side', text: '옆으로 눕히고 곁에서 숨쉬는 모습을 지켜본다', result: '토한 것이 숨길을 막지 않고, 구급대가 도착해 준을 데려간다.', impact: [{ who: '준', text: '위험한 순간을 넘긴다', tone: 1 }], ending: '깨워도 반응이 없으면 119, 옆으로 눕히고 혼자 두지 않는다.' },
          { id: 'back', text: '편하게 바로 눕혀 두고 다른 방으로 간다', result: '혼자 남은 준의 숨소리가 거칠어진다.', impact: [{ who: '준', text: '위험한 자세로 혼자 남는다', tone: -1 }], ending: '신고한 뒤에도 곁을 지키는 것까지가 대응이다.' }] } },
      { id: 'sleep', text: '친구 말대로 자게 둔다', result: '모두 잠들고 방이 조용해진다.', impact: [{ who: '준', text: '아무도 상태를 살피지 않는다', tone: -1 }],
        next: { text: '30분 뒤 화장실에 가다 보니 준의 숨이 느리고 얼굴빛이 이상하다.', choices: [
          { id: 'late', text: '이제라도 119에 신고하고 옆으로 눕힌다', result: '구급대가 출발하지만 처음보다 시간이 흘렀다.', impact: [{ who: '준', text: '늦었지만 도움이 닿는다', tone: 0 }], ending: '\'자게 두기\'는 위험을 지켜보지 않는 것이다. 늦게라도 신고한다.' },
          { id: 'morning', text: '아침이면 괜찮겠지 하고 다시 잔다', result: '아침까지 아무도 준의 상태를 모른다.', impact: [{ who: '준', text: '도움을 받지 못한다', tone: -1 }], ending: '술은 자는 동안에도 몸에 남아 위험을 이어 간다.' }] } },
      { id: 'shower', text: '찬물로 씻겨서 깨우자고 한다', result: '준을 끌고 가다 미끄러져 함께 넘어진다.', impact: [{ who: '준', text: '넘어져 다칠 위험이 커진다', tone: -1 }],
        next: { text: '찬물을 맞아도 준은 제대로 눈을 뜨지 못하고 몸을 떤다.', choices: [
          { id: 'stopcall', text: '씻기기를 멈추고 119에 신고한다', result: '상황실이 젖은 옷을 갈아입히고 옆으로 눕히라고 알려 준다.', impact: [{ who: '준', text: '바른 도움으로 바뀐다', tone: 1 }], ending: '찬물은 술을 깨우지 못한다. 반응이 없으면 119가 먼저다.' },
          { id: 'coffee', text: '진한 커피를 먹이려 한다', result: '삼키지 못한 커피에 준이 기침을 한다.', impact: [{ who: '준', text: '숨길이 위험해진다', tone: -1 }], ending: '커피도 술을 깨우지 못하고, 의식이 흐린 사람에게 무엇을 먹이면 위험하다.' }] } }] };
    const PARTY_R = [{ id: 'noresp', text: '깨워도 반응이 없으면 위급한 상황일 수 있다' }, { id: 'side', text: '토할 수 있으니 옆으로 눕히고 혼자 두지 않는다' }, { id: 'time', text: '술이 깨려면 시간이 지나야 한다' }, { id: 'cold', text: '찬물 샤워나 커피로 술을 깨울 수 있다', why: '찬물·커피는 술을 깨우지 못하고 넘어짐·숨막힘 위험을 키워요.' }, { id: 'sleepok', text: '자게 두면 괜찮아진다', why: '자는 동안 숨이 느려지거나 토할 수 있어 곁에서 살펴야 해요.' }];

    MODS.push(
      M({
        id: 'intro.words', type: 'intro', title: '술자리 관행 낱말과 질문',
        method: '관행 낱말과 질문', tool: 'wordcards', minutes: 6,
        levels: { easy: '관행 낱말 2개(원샷·돌려 마시기)만 함께 읽고 질문 하나로 바꾼다.', base: '관행 낱말 4개를 뜻과 짝짓는 시연을 보고 각 관행의 문제를 질문으로 바꾼다.', challenge: '이런 관행이 계속 이어지는 까닭(전통·소속감·눈치)을 추론한다.' },
        intro: {
          teacher: '"대학이나 직장 모임에서 들을 수 있는 말들이에요. 이 관행에는 어떤 문제가 숨어 있을까요?" 시연 단추로 낱말과 뜻이 짝지어지는 모습을 보인 뒤, 낱말마다 \'왜 ~해야 하지?\' 꼴의 질문을 만들게 한다. "원래 다 그렇게 하는 거 아니에요?"라는 말이 나오면 "누가, 언제부터 정한 규칙일까요? 그 규칙으로 누가 위험해질까요?"라고 되묻는다. 관행을 따르는 것과 내 몸을 지키는 것이 부딪칠 때를 오늘 다룬다고 밝힌다.',
          student: '술자리 관행 낱말과 뜻을 짝지어 보고, 낱말마다 그 관행의 문제를 묻는 질문을 하나씩 만들어 보세요.',
          demo: { tool: 'wordcards', options: { words: [{ en: '원샷', ko: '잔을 한 번에 다 비우게 하는 관행' }, { en: '돌려 마시기', ko: '한 잔을 차례로 돌리며 모두 마시게 하는 관행' }, { en: '벌주', ko: '늦게 오거나 게임에 지면 술을 마시게 하는 관행' }, { en: '잔 채우기', ko: '잔이 비면 바로 채워 계속 마시게 하는 관행' }] }, sequence: [{ match: { 원샷: '원샷', '돌려 마시기': '돌려 마시기', 벌주: '벌주', '잔 채우기': '잔 채우기' } }] },
          art: { draw: 'paper word cards scattered on a long paper table with paper cups, a paper question mark rising above each card, a paper calendar showing a welcome party', banner: '그 관행, 왜 따라야 할까?', extra: [{ motif: 'star', x: 300, y: 96 }] },
        },
        notes: '관행 낱말은 문제를 따져 보려고 쓴다. 술 마시는 법이나 게임 규칙을 설명하지 않는다.',
      }),
      M({
        id: 'intro.organs', type: 'intro', title: '많은 술과 뇌·간·폐',
        method: '영향 기관 찾기', tool: 'body', minutes: 6,
        levels: { easy: '종이 몸에서 뇌 한 곳만 함께 찾고 \'의식\' 설명을 읽는다.', base: '뇌·간·폐 세 곳과 설명을 잇는 시연을 본다.', challenge: '짧은 시간에 많은 술이 왜 위급한 상황이 되는지(간의 처리 한계·의식·호흡) 추론한다.' },
        intro: {
          teacher: '"짧은 시간에 많은 술을 마시면 몸의 어디에서 무슨 일이 생길까요?" 시연 단추로 뇌·간·폐가 설명과 짝지어지는 모습을 보인다. "술 센 사람은 괜찮잖아요"라는 말이 나오면 "간이 한 번에 처리할 수 있는 양에 한계가 있다면, 빨리 많이 마실 때 무엇이 남을까요?"라고 되묻는다. 의식이 흐려지면 호흡까지 영향을 받을 수 있어서 깨워도 반응이 없으면 119라는 점을 오늘 다룬다고 밝힌다.',
          student: '종이 몸에서 뇌·간·폐를 찾고, 짧은 시간에 많은 술이 의식과 호흡에 어떤 영향을 줄 수 있는지 설명과 이어 보세요.',
          demo: { tool: 'body', options: { mode: 'match', organs: ['뇌', '간', '폐'], jobs: { 뇌: '의식 — 많은 술이 흐리게 할 수 있다', 간: '술을 분해 — 한 번에 처리할 양에 한계가 있다', 폐: '호흡 — 의식이 흐려지면 함께 느려질 수 있다' } }, sequence: [{ match: 'auto' }] },
          art: { draw: 'a paper cut-out body with paper brain, liver and lungs highlighted, a paper hourglass beside the liver, a small paper clock showing late night', banner: '짧은 시간, 많은 술', extra: [{ motif: 'moon', x: 300, y: 96 }] },
        },
        notes: '혈중 알코올 수치 등 숫자는 근거 자료에 없어 다루지 않는다(사람 확인 목록).',
      }),

      M({
        id: 'activity.myth', type: 'activity', title: '술 깨는 방법 오해와 사실',
        method: '술 깨는 방법 오해·사실', tool: 'mindmap', minutes: 18,
        levels: { easy: '말 카드 4장을 오해·사실로 나누고, 놓자마자 맞는지 보인다.', base: '말 카드 6장을 나누고, 오해마다 위험한 까닭을 짝짓고, 곁에서 할 일을 고른다.', challenge: '헷갈리는 카드 2장이 더해진 8장을 나눈다.' },
        activity: {
          title: '술 깨는 방법 오해와 사실', tool: 'mindmap',
          teacher: '"\'찬물 샤워하면 깬다\', \'커피 마시면 깬다\' — 들어 본 적 있죠? 오늘은 이 말들이 왜 위험할 수 있는지 따져 봐요." 카드를 놓을 때마다 "이 방법이 술을 몸에서 빼 줄까요, 깬 것처럼 느끼게만 할까요?"라고 묻는다. \'자게 두면 괜찮아진다\'를 사실에 넣는 학생에게 "자는 동안 숨이 느려지거나 토하면 누가 알아차릴까요?"라고 되묻는다. 술이 깨려면 시간이 지나야 하고, 그동안 곁을 지키는 것이 중요하다는 점을 짚는다.',
          task: '술 깨는 방법에 대한 말을 오해와 사실로 나누고, 오해가 위험한 까닭을 짝지어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('술 깨는 방법에 대한 말 카드를 오해와 사실로 나누세요.', ['오해', '사실'], [
              ['찬물 샤워를 하면 술이 깬다', '진한 커피를 마시면 술이 깬다', '자게 두면 괜찮아진다'],
              ['술이 깨려면 시간이 지나야 한다', '깨워도 반응이 없으면 119에 신고한다', '토할 수 있으니 혼자 두지 않는다'],
            ], { k: 2, hard: [['토하고 나면 다 깬 것이다'], ['짧은 시간에 많이 마실수록 위험이 크다']], d: 0.3, opt: { topic: '술 깨는 방법' } }),
            MATCHQ('오해와 그 오해가 위험한 까닭을 짝지으세요.', [['찬물 샤워', '몸이 떨리고 넘어질 위험만 커진다'], ['진한 커피', '깬 것처럼 느껴져 더 마시게 될 수 있다'], ['자게 두기', '자는 동안 숨이 느려지거나 토할 수 있다']], { k: 2, d: 0.35, opt: { topic: '오해가 위험한 까닭' } }),
            PICKQ('많이 마신 친구 곁에서 할 일만 고르세요.', ['숨쉬는 모습을 곁에서 살핀다', '토할 수 있으니 옆으로 눕힌다', '반응이 없으면 119에 신고한다'], ['찬물을 끼얹는다', '억지로 토하게 한다', '혼자 재우고 자리를 뜬다'], { d: 0.35, opt: { basket: '곁에서 할 일' }, more: { conclude: '찬물·커피·자게 두기는 술을 깨우지 못해요. 술이 깨려면 시간이 지나야 하고, 그동안 옆으로 눕혀 곁을 지키며 반응이 없으면 119에 알려요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '\'자게 두면 괜찮아진다\'는 말이 위험한 까닭을 한 문장으로 쓰세요.' }] },
        notes: '술 깨는 방법·응급 대처는 수업 전 질병관리청·소방청 응급처치 안내로 확인한다(사람 확인 목록).',
      }),
      M({
        id: 'activity.response', type: 'activity', title: '위급한 친구 돕는 차례',
        method: '위급 대응 순서', tool: 'kitchen', minutes: 18,
        levels: { easy: '대응 카드 3장을 차례로 놓는다(놓자마자 맞는지 보임).', base: '대응 카드 4장을 놓고 단계마다 하지 말 것을 짝지은 뒤 119에 말할 내용을 차례로 놓는다.', challenge: '카드가 섞인 채로 풀고, 활동지에 119에 할 첫마디를 쓴다.' },
        activity: {
          title: '위급한 친구 돕는 차례', tool: 'kitchen',
          teacher: '"친구가 깨워도 반응이 없을 때 무엇부터 할까요? 당황하면 순서가 뒤엉켜요." 카드를 놓은 뒤 \'119 신고\'를 맨 뒤에 둔 학생에게 "혼날까 봐 신고를 미루면 그동안 친구에게 무슨 일이 생길 수 있을까요?"라고 묻는다. 신고할 때 받는 사람이 가장 먼저 알아야 하는 것은 \'어디\'라는 점, 신고 뒤에도 옆으로 눕혀 곁을 지켜야 한다는 점을 짚는다. 연습할 때 실제 번호로 전화하지 않는다.',
          task: '깨워도 반응이 없는 친구를 돕는 차례를 놓고, 단계마다 하지 말 것과 119에 말할 내용을 정리해요.', levels: { easy: { live: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDERQ('깨워도 반응이 없는 친구를 도울 차례로 카드를 놓으세요.', ['반응 확인', '119 신고', '옆으로 눕히기', '곁에서 지켜보기'], { k: 3, d: 0.3, opt: { autoMotif: false } }),
            MATCHQ('대응 단계와 그때 하지 말 것을 짝지으세요.', [['반응 확인', '찬물을 끼얹어 깨우지 않는다'], ['119 신고', '혼날까 봐 미루지 않는다'], ['옆으로 눕히기', '등을 대고 바로 눕히지 않는다'], ['곁에서 지켜보기', '혼자 두고 자리를 뜨지 않는다']], { k: 3, d: 0.35, opt: { autoMotif: false } }),
            ORDERQ('119에 신고할 때 말할 내용을 차례로 놓으세요.', ['있는 곳(위치)', '깨워도 반응이 없는 상황', '숨쉬는 모습', '마신 양과 시간'], { k: 3, d: 0.35, opt: { autoMotif: false }, more: { conclude: '반응 확인 → 119 신고 → 옆으로 눕히기 → 곁에서 지켜보기. 신고할 때는 위치를 먼저, 그다음 상황과 숨쉬는 모습을 말해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '가상의 장소를 정해 119에 할 첫마디를 한 문장으로 쓰세요(실제 주소는 쓰지 않아요).' }] },
        notes: '대응 차례는 일반 응급 안내다. 수업 전 소방청·질병관리청 안내로 확인하고, 옆으로 눕히는 자세는 실물 시범(보건 교사)으로 보여 준다.',
      }),
      M({
        id: 'activity.proposal', type: 'activity', title: '강요된 음주 관행 개선 제안',
        method: '관행 개선 제안서', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '제안서 틀(문제 → 제안 → 실행 가능성)의 문장 시작 도움말을 보고 쓴다.', base: '문제, 제안 3개, 실행 가능성을 쓰고 기준표를 점검한다.', challenge: '실행 가능성 글에 기준 하나(반대 의견에 답하기)를 더해 점검한다.' },
        activity: {
          title: '강요된 음주 관행 개선 제안', tool: 'rubric-writing',
          teacher: '"졸업 뒤 들어갈 대학·일터 모임에 강요된 음주 관행이 있다면, 어떻게 바꾸자고 제안할까요?" 기준표를 함께 읽은 뒤 쓰게 한다. "술을 아예 없애자"고만 쓴 학생에게 "마시고 싶은 사람과 마시고 싶지 않은 사람이 모두 편한 모임은 어떤 모습일까요?"라고 묻는다. 제안은 \'누가·언제·무엇을\'이 보여야 실행된다는 점, 그리고 관행을 바꾸는 것은 마시는 사람을 탓하는 것이 아니라 강요를 없애는 것이라는 점을 짚는다.',
          task: '대학·직장 모임의 강요된 음주 관행을 바꿀 제안서를 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('제안서의 \'문제\' 부분을 쓰고 기준표로 점검하세요.', '강요된 음주 관행(원샷·벌주 등)이 어떤 문제를 낳는지 두세 문장으로 쓰세요.', ['문제가 되는 관행을 구체적으로 짚었다', '그 관행으로 생길 수 있는 위험을 썼다', '마시는 사람이 아니라 강요를 문제로 삼았다'], { min: 40, max: 300, starter: '대학·직장 모임의 ~ 관행은 ~ 문제를 낳는다.', d: 0.3 }),
            RWQ('관행을 바꿀 제안 세 가지를 쓰고 기준표로 점검하세요.', '강요된 음주 관행을 바꿀 제안 세 가지를 \'누가·언제·무엇을\'이 보이게 쓰세요.', ['제안을 세 가지 썼다', '제안마다 누가·언제·무엇을 하는지 보인다', '마시지 않는 사람도 편한 방법이 들어 있다'], { min: 60, max: 400, starter: '첫째, ~. 둘째, ~. 셋째, ~', sample: '첫째, 신입생 환영회는 학생회가 술 없는 1부와 자유 참여 2부로 나눠 연다. 둘째, 원샷·벌주 같은 강요 게임을 모임 규칙으로 금지한다. 셋째, 모임마다 음료를 함께 준비하고, 마시지 않는 사람에게 까닭을 묻지 않는다.', d: 0.4 }),
            RWQ('제안의 실행 가능성을 따져 쓰고 기준표로 점검하세요.', '내 제안이 실제로 실행될 수 있는지, 걸림돌과 그 해결 방법을 두세 문장으로 쓰세요.', ['걸림돌을 하나 이상 짚었다', '걸림돌을 넘을 방법을 썼다', '실행할 사람이나 모임을 밝혔다'], { min: 50, max: 300, starter: '이 제안을 실행할 때 ~가 걸림돌이 될 수 있다. 그래서 ~', plus: '\'전통이라 바꿀 수 없다\'는 반대 의견에 답했다', d: 0.45, more: { conclude: '좋은 관행 개선 제안은 강요를 문제로 삼고, 누가·언제·무엇을 할지 보이며, 걸림돌까지 내다봐요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내 제안 가운데 가장 먼저 실행될 수 있는 것과 그 까닭을 쓰세요.' }] },
      }),
      M({
        id: 'activity.debate', type: 'activity', title: '환영회 음주 금지 찬반 토론',
        method: '찬반 토론 진행판', tool: 'timer', minutes: 18,
        levels: { easy: '입론·정리 두 단계만 차례로 놓고 두 단계 발언 시간을 맞춘다.', base: '네 단계 차례와 발언 시간을 맞추고 토론 뒤 스스로 점검한다.', challenge: '스스로 점검에 \'금지 말고 대안 규칙도 제안했다\'가 더해진다.' },
        activity: {
          title: '환영회 음주 금지 찬반 토론', tool: 'timer',
          teacher: '"\'신입생 환영회에서 음주를 금지하는 규칙이 필요하다.\' 곧 대학생이 될 여러분의 일이에요." 진행 차례와 발언 시간을 판으로 맞춘 뒤 시작한다. 반대 쪽이 "성인이니까 알아서 하면 된다"고만 하면 "오늘 본 원샷·벌주 관행 속에서 \'알아서\'가 가능할까요?"라고 묻는다. 찬성 쪽이 "금지하면 해결된다"고만 하면 "금지하면 모임이 학교 밖으로 옮겨 가지 않을까요?"라고 되묻는다. 정리 단계에서 금지와 대안 규칙을 함께 생각해 보게 한다.',
          task: '토론 진행 차례와 발언 시간을 맞추고, 토론 뒤 우리 모둠을 스스로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: DEBATEQ('신입생 환영회에서 음주를 금지하는 규칙이 필요하다', { label: '환영회 음주 규칙', work: 3, rest: 1,
            checks: ['상대 주장을 요약한 뒤 반론했다', '오늘 본 폭음의 위험을 근거로 썼다', '마시는 사람이 아니라 강요를 문제로 다뤘다'], plus: '금지 말고 대안 규칙도 제안했다',
            conclude: '규칙의 목표는 강요를 없애고 모두가 안전한 모임을 만드는 것이에요. 금지와 대안 규칙을 함께 생각할 수 있어요.' }),
        },
        worksheet: { items: [{ type: 'short', prompt: '토론 뒤 내가 제안하고 싶은 환영회 규칙 하나를 쓰세요.' }] },
      }),

      M({
        id: 'wrap.reflect', type: 'wrap', title: '관행이니 따라야 한다 생각 변화',
        method: '생각 변화 크기', tool: 'emotion', minutes: 8,
        levels: { easy: '지금 생각의 크기만 고르게 한다.', base: '수업 전과 지금의 크기를 모두 고르고 까닭을 말하게 한다.', challenge: '까닭을 말할 때 토론에서 들은 근거를 인용하게 한다.' },
        wrap: {
          teacher: '"\'관행이니까 따라야 한다.\' 수업 전과 지금, 이 말을 얼마나 맞다고 느끼나요?" 두 눈금을 고른 뒤 짝과 까닭을 말하게 한다. "그래도 처음 들어간 곳에서 혼자 튀기 싫어요"라는 말이 나오면 "튀지 않으면서 내 몸을 지킬 말을 오늘 찾았나요?"라고 묻는다. 관행은 사람이 만든 것이라 사람이 바꿀 수 있다는 점을 짚는다.',
          exitTicket: [
            SCALE('수업 전 내 생각의 크기를 고르세요.', '수업 전, \'환영회 음주는 관행이니까 따라야 한다\'는 말을 들었을 때', '맞다', { 1: '전혀 아니다', 5: '아주 맞다' }, '수업 전에는 얼마나 맞다고 느꼈나요?'),
            SCALE('지금 내 생각의 크기를 고르세요.', '수업을 마친 지금, \'환영회 음주는 관행이니까 따라야 한다\'는 말을 들으면', '맞다', { 1: '전혀 아니다', 5: '아주 맞다' }, '지금은 얼마나 맞다고 느끼나요?'),
            { type: 'short', prompt: '내 생각에 영향을 준 토론 근거 하나를 인용해 쓰세요.' },
          ],
        },
        worksheet: {
          title: '관행에 대한 내 생각',
          items: [
            { type: 'table', prompt: '수업 전과 지금의 생각을 견주어 쓰세요.', columns: ['', '수업 전', '지금'], cells: [['관행이니 따라야 하나', '', ''], ['그렇게 생각한 근거', '', '']] },
            { type: 'short', prompt: '강요받을 때 튀지 않으면서 내 몸을 지킬 말을 한 문장으로 쓰세요.' },
          ],
          easy: { note: '관행은 사람이 만든 것 → 사람이 바꿀 수 있다', items: [{ type: 'short', prompt: '지금 내 생각을 한 문장으로 쓰세요.' }] },
        },
      }),
      M({
        id: 'wrap.dilemma', type: 'wrap', title: '깨워도 반응 없는 친구',
        method: '짧은 결과 추적', tool: 'dilemma', minutes: 8,
        levels: { easy: '첫 갈림길에서 고른 결과까지 함께 읽고 교사가 다음 장면을 이어 읽어 준다.', base: '갈림길 둘을 스스로 지나 근거 카드를 고른다.', challenge: '고른 근거 카드를 짝에게 설명하고, 찬물·자게 두기 길의 결과와 견주어 말하게 한다.' },
        wrap: {
          teacher: '"오늘 정리는 짧은 갈림길이에요. 깨워도 반응이 없는 친구 앞에서 \'자게 두자\'는 말이 나오면 어떻게 할까요?" 갈림길을 지난 뒤 근거 카드를 고르게 한다. \'찬물로 씻긴다\'를 고른 학생에게 "오늘 오해·사실 활동에서 찬물이 무엇을 바꾼다고 했나요?"라고 묻는다. 깨워도 반응이 없으면 119, 옆으로 눕히고 혼자 두지 않는다는 점을 다시 짚는다. 연습 때 실제 번호로 전화하지 않는다.',
          exitTicket: [
            { type: 'tool', tool: 'dilemma', options: { scene: cut(PARTY, 2), reasons: PARTY_R, title: '졸업 여행 숙소(가상)' }, prompt: '친구를 지키는 길을 끝까지 고르고, 근거 카드를 고르세요.', target: { path: [['call', 'side'], ['sleep', 'late'], ['shower', 'stopcall']], reasons: ['noresp', 'side'] }, difficulty: 0.25 },
            { type: 'choice', prompt: '깨워도 반응이 없는 친구에게 알맞은 대응을 고르세요.', options: ['찬물로 씻겨 깨운다', '119에 신고하고 옆으로 눕혀 곁을 지킨다', '진한 커피를 먹인다'], answer: 1, difficulty: 0.15, explain: '찬물·커피는 술을 깨우지 못해요. 반응이 없으면 119, 옆으로 눕히고 혼자 두지 않아요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '깨워도 반응이 없을 때',
          items: [
            { type: 'short', prompt: '\'자게 두자\'는 친구에게 해 줄 말을 한 문장으로 쓰세요.' },
            { type: 'short', prompt: '119 신고 뒤 구급대를 기다리는 동안 할 일 두 가지를 쓰세요.' },
          ],
          easy: { note: '반응 없음 = 119 · 옆으로 눕히기 · 혼자 두지 않기', items: [{ type: 'short', prompt: '깨워도 반응이 없는 친구를 보면 가장 먼저 할 일을 쓰세요.' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 8. 성인기 전환 — 권유 속에서 나의 기준 세우기 (12학년)
  // ======================================================================================================
  {
    const M = MOD('adult-transition', [12]);
    const WORK = { text: '아르바이트 첫 회식, 점장이 잔을 내밀며 말한다. "우리 가게 막내는 첫 잔은 원샷이야. 이것도 일이야."', who: '나', motif: 'house', choices: [
      { id: 'drink', text: '일자리를 잃을까 봐 원샷한다', result: '점장이 "역시 잘하네"라며 잔을 또 채운다.', impact: [{ who: '나', text: '관계는 부드러워진 듯하다', tone: 0 }],
        next: { text: '세 번째 잔이 채워지고, 머리가 어지럽기 시작한다.', choices: [
          { id: 'more', text: '분위기를 깨기 싫어 계속 마신다', result: '다음 날 출근 시간에 일어나지 못한다.', impact: [{ who: '나', text: '건강과 일 모두 흔들린다', tone: -1 }],
            next: { text: '점장이 "어제 그렇게 마시고 지각하면 어떡해"라고 한다.', choices: [
              { id: 'talk', text: '"앞으로 회식에서는 음료로 하겠습니다"라고 정중히 말한다', result: '점장이 잠시 멈칫하다 "그래, 알았어"라고 한다.', impact: [{ who: '나', text: '늦었지만 내 기준을 세운다', tone: 1 }], ending: '한 번 따랐더라도 다음부터의 기준을 분명히 말할 수 있다.' },
              { id: 'sorry', text: '사과만 하고 다음 회식도 똑같이 한다', result: '회식마다 같은 일이 되풀이된다.', impact: [{ who: '나', text: '몸과 일이 계속 흔들린다', tone: -1 }], ending: '기준 없이 사과만 하면 같은 강요가 되풀이된다.' }] } },
          { id: 'stopnow', text: '"여기까지 할게요. 물 좀 주세요"라고 말한다', result: '점장이 아쉬워하지만 더 권하지 않는다.', impact: [{ who: '나', text: '중간에서라도 멈춘다', tone: 1 }], ending: '마시던 중에도 멈출 수 있다. 멈추는 말은 미리 준비해 둔다.' }] } },
      { id: 'polite', text: '"저는 음료로 할게요. 건배는 같이 하겠습니다"라고 정중히 말한다', result: '점장이 "막내가 빼면 쓰나"라며 한 번 더 권한다.', impact: [{ who: '나', text: '기준을 먼저 밝힌다', tone: 1 }],
        next: { text: '점장이 "이것도 일이라니까"라며 잔을 앞에 놓는다.', choices: [
          { id: 'firm', text: '"일은 내일 열심히 하겠습니다. 술은 안 마셔요"라고 한 번 더 분명히 말한다', result: '옆자리 선배가 "요즘은 다들 음료 많이 해요"라며 거든다.', impact: [{ who: '나', text: '관계를 지키면서 기준을 지킨다', tone: 1 }],
            next: { text: '며칠 뒤 점장이 "요즘 회식 강요하면 안 된다더라"며 회식 규칙을 바꾸자고 한다.', choices: [
              { id: 'idea', text: '음료와 식사 위주의 회식을 제안한다', result: '다음 회식이 저녁 식사 자리로 바뀐다.', impact: [{ who: '가게 직원들', text: '모두 편한 회식이 된다', tone: 1 }], ending: '정중하고 분명한 거절이 일터의 관행을 바꾸기도 한다.' },
              { id: 'nothing', text: '괜히 나서기 싫어 아무 말 하지 않는다', result: '규칙 이야기는 흐지부지된다.', impact: [{ who: '다음 막내', text: '같은 강요를 받을 수 있다', tone: 0 }], ending: '바꿀 기회가 왔을 때 한마디가 다음 사람을 지킨다.' }] } },
          { id: 'give', text: '두 번 권하니 어쩔 수 없이 마신다', result: '다음 회식에서도 똑같이 권한다.', impact: [{ who: '나', text: '기준이 무너진다', tone: -1 }], ending: '두 번째 권유에서 무너지면 강요가 규칙이 된다.' }] } },
      { id: 'leave', text: '아무 말 없이 화장실에 간다며 자리를 피한다', result: '돌아오니 내 잔이 가득 채워져 있다.', impact: [{ who: '나', text: '잠깐 피했지만 상황은 그대로다', tone: 0 }],
        next: { text: '점장이 "어디 갔다 왔어, 벌주야"라며 잔을 민다.', choices: [
          { id: 'say', text: '"저는 술을 안 마셔요. 음료로 할게요"라고 분명히 말한다', result: '분위기가 잠시 어색했지만 점장이 넘어간다.', impact: [{ who: '나', text: '피하기에서 분명한 거절로 나간다', tone: 1 }],
            next: { text: '회식 뒤에도 점장이 계속 "술 못 하면 승진 못 한다"며 눈치를 준다.', choices: [
              { id: 'report', text: '강요가 계속되면 가게 대표나 일터 고충 상담 창구에 알리기로 한다', result: '대표가 회식 강요를 하지 말라고 공지한다.', impact: [{ who: '나', text: '부당한 대우에 도움을 받는다', tone: 1 }], ending: '강요가 부당한 대우로 이어지면 혼자 참지 않고 도움 경로를 찾는다.' },
              { id: 'quit', text: '말없이 아르바이트를 그만둔다', result: '일자리를 잃고, 강요한 관행은 그대로 남는다.', impact: [{ who: '나', text: '손해를 혼자 떠안는다', tone: -1 }], ending: '참거나 떠나기만 하면 손해는 나에게, 관행은 그대로 남는다.' }] } },
          { id: 'drinknow', text: '벌주라니 어쩔 수 없이 마신다', result: '피한 것이 오히려 더 큰 잔으로 돌아온다.', impact: [{ who: '나', text: '더 많이 마시게 된다', tone: -1 }], ending: '말없이 피하기는 강요를 미룰 뿐 끝내지 못한다.' }] } }] };
    const WORK_R = [{ id: 'polite', text: '정중하고 분명한 거절은 관계를 지키며 기준도 지킨다' }, { id: 'help', text: '강요가 부당한 대우로 이어지면 도움 경로를 찾는다' }, { id: 'stop', text: '마시던 중에도 멈출 수 있다' }, { id: 'job', text: '술도 일이니 따라야 한다', why: '술을 강요받는 것은 일의 일부가 아니에요.' }, { id: 'must', text: '사회생활에서 술자리는 필수다', why: '술 없이도 관계를 맺는 방법과 모임이 있어요.' }];
    const FAMILY = { text: '명절, 큰아버지가 잔을 건네며 말한다. "이제 성인이니 어른한테 술 배워야지. 한 잔 받아라."', who: '나', motif: 'house', choices: [
      { id: 'take', text: '어른 말씀이니 받아 마신다', result: '큰아버지가 "한 잔 더"라며 잔을 채운다.', impact: [{ who: '나', text: '원하지 않는 술을 이어 마신다', tone: -1 }],
        next: { text: '세 번째 잔을 권한다.', choices: [
          { id: 'stopnow', text: '"여기까지만 할게요. 제가 따라 드릴게요"라고 말한다', result: '큰아버지가 웃으며 잔을 받는다.', impact: [{ who: '나', text: '예의를 지키며 멈춘다', tone: 1 }], ending: '어른 앞에서도 예의 있는 말로 멈출 수 있다.' },
          { id: 'keep', text: '거절하면 버릇없어 보일까 봐 계속 마신다', result: '밤늦게까지 속이 좋지 않다.', impact: [{ who: '나', text: '몸이 불편해진다', tone: -1 }], ending: '예의와 내 몸을 함께 지키는 말이 필요하다.' }] } },
      { id: 'kind', text: '"마음만 받을게요. 대신 제가 한 잔 따라 드릴게요"라고 말한다', result: '큰아버지가 "그래, 요즘 애들은 다르구나"라며 잔을 받는다.', impact: [{ who: '나', text: '관계를 지키며 거절한다', tone: 1 }],
        next: { text: '옆에서 사촌이 "형도 한 잔만 해"라고 거든다.', choices: [
          { id: 'firm', text: '"난 술 대신 식혜로 할게"라고 웃으며 말한다', result: '사촌도 "나도 식혜"라며 따라 한다.', impact: [{ who: '사촌', text: '거절해도 된다는 것을 본다', tone: 1 }], ending: '내가 지킨 기준이 옆 사람에게도 길이 된다.' },
          { id: 'give', text: '두 사람이 권하니 결국 받는다', result: '처음의 거절이 무너진다.', impact: [{ who: '나', text: '기준이 흔들린다', tone: -1 }], ending: '한 번 더 권한다고 기준을 바꿀 까닭은 없다.' }] } }] };
    const FAMILY_R = [{ id: 'respect', text: '예의 있는 말로도 분명히 거절할 수 있다' }, { id: 'mine', text: '성인이 되어도 마실지는 내가 정한다' }, { id: 'rude', text: '어른의 권유를 거절하는 것은 버릇없다', why: '예의를 지키는 말로 거절하면 관계를 지킬 수 있어요.' }];

    MODS.push(
      M({
        id: 'intro.year', type: 'intro', title: '졸업 뒤 1년 시간 띠',
        method: '졸업 뒤 1년 시간 띠', tool: 'timeline', minutes: 6,
        levels: { easy: '사건 카드 3장(졸업식·신입생 환영회·아르바이트 회식)만 함께 놓아 본다.', base: '사건 카드 5장을 시간 띠에 놓는 시연을 보고 권유받을 수 있는 순간을 표시한다.', challenge: '표시한 순간마다 미리 준비할 것(말·연락처·귀가 방법)을 말한다.' },
        intro: {
          teacher: '"졸업하고 1년, 여러분 앞에 어떤 일들이 기다리고 있을까요? 시간 띠에 놓아 봐요." 시연 단추로 사건 카드가 차례로 놓이는 모습을 보인 뒤, 술·담배 권유를 받을 수 있는 순간에 손을 들게 한다. "성인이 되면 그때 가서 알아서 하면 된다"는 말이 나오면 "환영회 자리에서 처음 생각하면 쉬울까요, 지금 미리 정해 두면 쉬울까요?"라고 되묻는다. 오늘은 그 순간을 위한 나의 기준을 세운다고 밝힌다.',
          student: '졸업 뒤 1년 동안 만날 사건을 시간 띠에 놓고, 술·담배 권유를 받을 수 있는 순간을 찾아보세요.',
          demo: { tool: 'timeline', options: { mode: 'order', slots: 5, axis: ['졸업', '1년 뒤'], cards: [{ id: 'grad', text: '2월 졸업식' }, { id: 'welcome', text: '3월 신입생 환영회' }, { id: 'job', text: '7월 아르바이트 회식' }, { id: 'club', text: '10월 동아리 모임' }, { id: 'year', text: '12월 연말 모임' }], shuffle: false }, sequence: [{ order: ['grad', 'welcome', 'job', 'club', 'year'] }] },
          art: { draw: 'a long paper timeline ribbon from a graduation cap to a calendar one year later, small paper event flags along it, a few flags marked with a soft warning star', banner: '졸업 뒤 1년, 언제 권유받을까?', extra: [{ motif: 'star', x: 300, y: 96 }] },
        },
        notes: '진로는 학생마다 다르다. 대학 진학만을 전제하지 않고 일터·직업 훈련·군 복무 등도 함께 떠올리게 한다.',
      }),
      M({
        id: 'intro.budget', type: 'intro', title: '가상 첫 월급 예산',
        method: '가상 첫 월급 예산', tool: 'economy', minutes: 6,
        levels: { easy: '자립 목표 항목 3개(저축·월세·식비)만 먼저 함께 넣어 본다.', base: '자립 목표 항목 5개를 먼저 넣은 뒤 남은 자리에 잦은 술자리·담배 지출이 들어갈 수 있는지 따진다.', challenge: '목표를 지키기 위한 조건(한 달 모임 횟수 등)을 정해 말한다.' },
        intro: {
          teacher: '"가상의 첫 월급 180만 원이에요. 무엇부터 넣을까요?" 시연 단추로 자립 목표 항목이 먼저 들어가는 모습을 보인 뒤, 잦은 술자리와 담배가 남은 자리에 들어갈 수 있는지 묻는다. "어른이 되면 그 정도는 써도 되잖아요"라는 말이 나오면 "써도 되는지보다, 그 돈이 내 저축·주거 목표의 어디를 밀어내는지 볼까요?"라고 되묻는다. 건강뿐 아니라 자립 계획의 눈으로도 술·담배를 따져 본다고 밝힌다.',
          student: '가상의 첫 월급 예산에 자립 목표 항목을 먼저 넣고, 술자리·담배 지출이 들어갈 자리가 남는지 따져 보세요.',
          demo: { tool: 'economy', options: { mode: 'budget', budget: 1800000, items: [{ id: 'save', text: '저축', price: 400000 }, { id: 'home', text: '월세·관리비', price: 500000 }, { id: 'food', text: '식비', price: 400000 }, { id: 'move', text: '교통·통신', price: 200000 }, { id: 'study', text: '자격증 공부', price: 150000 }, { id: 'drink', text: '잦은 술자리', price: 300000 }, { id: 'smoke', text: '담배', price: 150000 }], ask: '자립 목표를 먼저 넣으면 무엇이 남나요?' }, sequence: [{ budget: { must: ['save', 'home', 'food', 'move', 'study'], not: ['drink', 'smoke'] } }] },
          art: { draw: 'a paper wallet opening into a long budget bar, paper blocks for savings, rent and food sliding in first, a paper glass and a cigarette pack waiting outside the bar', banner: '첫 월급, 무엇부터?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '금액은 모두 가상이다. 학생 가정의 소득·지출을 묻지 않는다.',
      }),

      M({
        id: 'activity.work', type: 'activity', title: '아르바이트 회식 강권 갈림길',
        method: '직장 딜레마 결과 추적', tool: 'dilemma', minutes: 18,
        levels: { easy: '갈림길 둘까지 가 보고 근거 카드를 고른다.', base: '갈림길 셋까지 관계·건강·일의 결과를 따라가고 근거 카드를 고른다.', challenge: '강요가 부당한 대우로 이어지는 길까지 다른 끝 길을 하나 더 가 보고 도움 경로를 견준다.' },
        activity: {
          title: '회식 강권 갈림길', tool: 'dilemma',
          teacher: '"첫 아르바이트, 첫 회식. 점장이 \'이것도 일\'이라며 잔을 내밀어요. 어떻게 할까요?" 선택마다 관계·건강·일에 생기는 결과를 소리 내어 읽게 한다. "일자리를 잃으면 어떡해요, 마셔야죠"라는 말이 나오면 원샷 길의 다음 날 장면을 보며 "마신 덕분에 일이 지켜졌나요?"라고 묻는다. 술 강요는 일의 일부가 아니고, 계속되면 혼자 참지 않고 가게 대표나 일터 고충 상담 창구 같은 도움 경로를 찾을 수 있다는 점을 짚는다.',
          task: '아르바이트 회식에서의 선택을 끝까지 따라가 관계·건강·일의 결과를 보고, 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL3('내가 되어 끝까지 나를 지키는 길을 고르고, 근거 카드를 고르세요.', WORK, [['polite', 'firm', 'idea'], ['leave', 'say', 'report'], ['drink', 'more', 'talk']], WORK_R, ['polite', 'help'], { d: 0.4, opt: { title: '아르바이트 첫 회식(가상)' } }),
            DIL2('명절에 큰아버지가 술을 권하는 장면에서 예의와 기준을 함께 지키는 길을 고르고, 근거 카드를 고르세요.', FAMILY, [['kind', 'firm'], ['take', 'stopnow']], FAMILY_R, ['respect', 'mine'], { d: 0.35, opt: { title: '명절 가족 모임(가상)' } }),
            EXPLOREQ('회식 장면에서 \'정중히 거절\'로 시작한 길과 \'자리를 피한다\'로 시작한 길을 끝까지 가 보고 견주세요.', WORK, WORK_R, ['두 길의 끝 장면을 모두 보았다', '두 길에서 일과 관계가 어떻게 달라졌는지 견주었다', '강요가 계속될 때의 도움 경로를 찾았다'], { d: 0.35, more: { conclude: '정중하고 분명한 거절은 관계와 기준을 함께 지켜요. 강요가 부당한 대우로 이어지면 혼자 참거나 떠나지 말고 도움 경로를 찾아요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '일터에서 술을 강요받을 때 내가 쓸 첫마디와, 강요가 계속되면 찾을 도움 경로를 쓰세요.' }] },
        notes: '일터 고충 상담 기관의 이름·번호는 근거 자료에 없어 싣지 않았다. 필요하면 수업 전 고용노동부 안내로 확인해 알려 준다.',
      }),
      M({
        id: 'activity.phrases', type: 'activity', title: '상황별 거절 표현 잇기',
        method: '상황별 거절 표현 잇기', tool: 'mindmap', minutes: 18,
        levels: { easy: '상황 2개(직장·동아리)에 알맞은 거절 표현을 잇는다.', base: '상황 3개(직장·동아리·가족)에 표현 6장 가운데 알맞은 것을 잇고, 표현을 세 가지로 나누고, 내 말로 고칠 때 지킬 것을 고른다.', challenge: '카드가 섞인 채로 풀고, 활동지에 표현 하나를 내 말로 고쳐 쓴다.' },
        activity: {
          title: '상황별 거절 표현 잇기', tool: 'mindmap',
          teacher: '"같은 거절도 직장·동아리·가족 앞에서는 말이 달라져요. 상황마다 관계를 지키는 표현을 찾아봐요." 카드를 이을 때마다 "이 말을 들은 상대는 어떤 기분일까요?"라고 묻는다. \'싫어요, 그만 좀 하세요\'를 직장 상황에 잇는 학생에게 "분명하긴 한데, 다음 날 같이 일할 때는 어떨까요?"라고 되묻는다. \'오늘만 마실게요\'는 거절이 아니라 다음 약속이 된다는 점을 짚는다.',
          task: '직장·동아리·가족 상황에 알맞은 거절 표현을 잇고, 관계를 지키는 표현을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            MATCHQ('상황 가지와 그 상황에 알맞은 거절 표현을 이으세요.', [['직장 회식', '"내일 아침 근무라 음료로 할게요. 건배는 같이 해요"'], ['동아리 모임', '"난 술 없이도 잘 놀아. 사이다로 함께할게"'], ['가족 명절', '"마음만 받을게요. 대신 제가 따라 드릴게요"']], { k: 2, extra: ['"싫어요, 그만 좀 하세요"', '"오늘만 마실게요"', '"나중에 마실게요"'], d: 0.3, opt: { topic: '상황별 거절 표현' } }),
            SORTQ('거절 표현 카드를 세 가지로 나누세요.', ['관계를 지키는 거절', '관계를 해치는 거절', '거절이 아닌 말'], [
              ['"저는 음료로 할게요. 건배는 같이 해요"', '"마음만 받을게요"'],
              ['"그만 좀 하세요, 짜증 나요"', '"그런 거 마시는 사람 한심해요"'],
              ['"오늘만 마실게요"', '"다음에 마실게요"'],
            ], { k: 1, d: 0.35, opt: { topic: '거절 표현 나누기' } }),
            PICKQ('거절 표현을 내 말로 고칠 때 지킬 것만 고르세요.', ['\'안 마신다\'는 뜻이 분명하다', '상대를 깎아내리지 않는다', '함께할 다른 방법을 덧붙인다'], ['다음에 마시겠다고 약속한다', '거짓 핑계를 크게 만든다'], { d: 0.3, opt: { basket: '지킬 것' }, more: { conclude: '좋은 거절 표현은 뜻이 분명하고, 상대를 존중하고, 함께할 다른 방법을 열어요. \'다음에\'는 거절이 아니라 약속이 될 수 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '오늘 본 거절 표현 하나를 골라 내가 실제로 쓸 말로 고쳐 쓰세요.' }] },
      }),
      M({
        id: 'activity.plan', type: 'activity', title: '나의 건강 자립 계획서',
        method: '건강 자립 계획서', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '계획서 틀(기준 → 예상 상황 → 대처 → 도움)의 문장 시작 도움말을 보고 쓴다.', base: '기준·예상 상황, 대처, 도움 세 칸을 채우고 기준표를 점검한다.', challenge: '도움 칸 글에 기준 하나(진로·자립 목표와 잇기)를 더해 점검한다.' },
        activity: {
          title: '나의 건강 자립 계획서', tool: 'rubric-writing',
          teacher: '"졸업 뒤의 나에게 건네는 계획서예요. 기준·예상 상황·대처·도움 네 칸으로 써요." 기준표를 함께 읽은 뒤 쓰게 한다. "그때 가서 생각하겠다"고 쓴 학생에게 "오늘 시간 띠에서 찾은 순간 가운데 가장 먼저 올 것은 무엇이었나요? 그 순간에 쓸 말을 지금 정해 둘까요?"라고 묻는다. 계획서는 완벽할 필요가 없고, 흔들릴 때 꺼내 볼 수 있으면 된다는 점을 짚는다. 실제 연락처·주소는 쓰지 않는다.',
          task: '나의 건강 자립 계획서(기준·예상 상황·대처·도움)를 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('계획서의 \'나의 기준\'과 \'예상 상황\'을 쓰고 기준표로 점검하세요.', '졸업 뒤 술·담배에 대한 나의 기준과, 그 기준이 흔들릴 수 있는 상황을 두세 문장으로 쓰세요.', ['나의 기준을 한 문장으로 분명히 썼다', '흔들릴 수 있는 상황을 구체적으로 썼다', '남이 아니라 내가 지킬 기준이다'], { min: 40, max: 300, starter: '나의 기준은 ~이다. 이 기준은 ~ 상황에서 흔들릴 수 있다.', d: 0.3 }),
            RWQ('계획서의 \'대처\'를 쓰고 기준표로 점검하세요.', '예상 상황에서 쓸 거절 말과 행동(자리 옮기기·귀가 방법 등)을 두세 문장으로 쓰세요.', ['그 자리에서 쓸 말을 썼다', '말 말고 할 행동을 썼다', '관계를 지키는 표현이다'], { min: 40, max: 300, starter: '그 상황에서 나는 "~"라고 말하고, ~', d: 0.35 }),
            RWQ('계획서의 \'도움\'을 쓰고 기준표로 점검하세요.', '기준을 지키기 어렵거나 위급할 때 도움을 청할 사람·곳을 쓰세요(실제 연락처는 쓰지 않아요).', ['도움을 청할 사람을 썼다', '위급할 때 연락할 곳(119·112 등)을 썼다', '도움을 청하는 것이 약한 것이 아님을 담았다'], { min: 40, max: 300, starter: '기준을 지키기 어려우면 ~에게 말하고, 위급하면 ~', plus: '나의 진로·자립 목표와 기준을 이었다', sample: '기준을 지키기 어려우면 가장 믿는 친구와 보호자에게 먼저 말하겠다. 친구가 깨워도 반응이 없을 만큼 위급하면 119, 협박을 받으면 112에 연락하겠다. 내가 꿈꾸는 간호사라는 일은 건강한 몸이 먼저라서 이 기준이 내 진로를 지키는 일이기도 하다.', d: 0.4, more: { conclude: '건강 자립 계획은 기준·예상 상황·대처·도움으로 이어져요. 미리 정한 말과 도움 경로가 흔들리는 순간 나를 붙잡아 줘요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '나의 건강 자립 계획서를 네 칸으로 정리하세요.', columns: ['기준', '예상 상황', '대처', '도움'], cells: [['', '', '', '']] }] },
        notes: '계획서는 제출용 평가가 아니라 학생 자신이 간직하는 글이다. 실제 연락처·주소를 쓰지 않게 한다.',
      }),
      M({
        id: 'activity.dialogue', type: 'activity', title: '강요 상황 대처 말풍선',
        method: '강요 상황 대처 대본', tool: 'story', minutes: 18,
        levels: { easy: '빈 말풍선 2개를 알맞은 말로 채운다.', base: '빈 말풍선 4개를 채우고, 두 번째 장면의 말풍선 3개를 채우고, 대화를 차례로 놓는다.', challenge: '카드가 섞인 채로 풀고, 활동지에 세 번째 강요까지 이어 쓴다.' },
        activity: {
          title: '강요 상황 대처 말풍선', tool: 'story',
          teacher: '"강요는 한 번에 끝나지 않고 이어져요. 빈 말풍선에 단호하지만 관계를 지키는 말을 넣어 봐요." 말풍선을 채울 때마다 "이 말 다음에 상대는 뭐라고 할까요?"라고 묻는다. \'한 잔만 마실게요\'를 넣는 학생에게 "그 말을 들은 상대는 거절로 들을까요, 시작으로 들을까요?"라고 되묻는다. 단호함은 크게 말하는 것이 아니라 같은 뜻을 흔들림 없이 되풀이하는 것이라는 점을 짚는다.',
          task: '강요가 이어지는 모임 대화의 빈 말풍선을 채워, 단호하지만 관계를 지키는 대처를 완성해요.', levels: { easy: { live: true }, base: {}, challenge: { shuffle: true } },
          items: [
            { prompt: '동아리 모임에서 선배가 계속 술을 권해요. 빈 말풍선을 알맞은 말로 채우세요.', toolOptions: { mode: 'fill', title: '동아리 모임(가상)', slots: [{ id: 'r1', who: '나', label: '(첫 권유에) ___' }, { id: 'r2', who: '나', label: '(다시 권할 때) ___' }, { id: 'r3', who: '친구', label: '(옆에서 거들며) ___' }, { id: 'r4', who: '나', label: '(마무리하며) ___' }], cards: [{ id: 'a1', text: '"저는 음료로 할게요. 건배는 같이 해요"' }, { id: 'a2', text: '"오늘은 정말 안 마셔요. 마음만 받을게요"' }, { id: 'a3', text: '"저도 음료요. 우리 안주 더 시켜요"' }, { id: 'a4', text: '"다음 모임 장소는 제가 알아볼게요"' }, { id: 'x1', text: '"한 잔만 마실게요"' }, { id: 'x2', text: '"그만 좀 하세요!"' }] }, target: { fill: { r1: 'a1', r2: 'a2', r3: 'a3', r4: 'a4' } }, difficulty: 0.3,
              levels: { easy: { prompt: '선배가 술을 권해요. 빈 말풍선 2개를 알맞은 말로 채우세요.', toolOptions: { slots: [{ id: 'r1', who: '나', label: '(첫 권유에) ___' }, { id: 'r2', who: '나', label: '(다시 권할 때) ___' }], cards: [{ id: 'a1', text: '"저는 음료로 할게요. 건배는 같이 해요"' }, { id: 'a2', text: '"오늘은 정말 안 마셔요. 마음만 받을게요"' }, { id: 'x1', text: '"한 잔만 마실게요"' }] }, target: { fill: { r1: 'a1', r2: 'a2' } } } } },
            { prompt: '대학 친구가 담배를 권하며 "같이 피워야 친해지지"라고 해요. 빈 말풍선을 채우세요.', toolOptions: { mode: 'fill', title: '대학 쉬는 시간(가상)', slots: [{ id: 's1', who: '나', label: '(권유에) ___' }, { id: 's2', who: '나', label: '(친해지자는 말에) ___' }, { id: 's3', who: '나', label: '(대안을 내며) ___' }], cards: [{ id: 'b1', text: '"고마운데 난 담배 안 피워"' }, { id: 'b2', text: '"담배 없이도 친해질 수 있잖아"' }, { id: 'b3', text: '"대신 커피 마시러 갈래?"' }, { id: 'y1', text: '"한 대만 같이 있어 줄게"' }] }, target: { fill: { s1: 'b1', s2: 'b2', s3: 'b3' } }, difficulty: 0.3,
              levels: { easy: { prompt: '대학 친구가 담배를 권해요. 빈 말풍선 2개를 채우세요.', toolOptions: { slots: [{ id: 's1', who: '나', label: '(권유에) ___' }, { id: 's3', who: '나', label: '(대안을 내며) ___' }], cards: [{ id: 'b1', text: '"고마운데 난 담배 안 피워"' }, { id: 'b3', text: '"대신 커피 마시러 갈래?"' }] }, target: { fill: { s1: 'b1', s3: 'b3' } } } } },
            { prompt: '강요가 세 번 이어지는 대화를 차례로 놓으세요.', toolOptions: { mode: 'order', slots: 4, title: '세 번의 강요(가상)', cards: [{ id: 'p3', text: '"다들 마시는데 너만 왜 그래?"' }, { id: 'p1', text: '"한 잔 받아"' }, { id: 'end', text: '"난 안 마셔. 대신 노래방 가자"' }, { id: 'p2', text: '"한 잔도 못 해?"' }] }, target: { order: ['p1', 'p2', 'p3', 'end'] }, difficulty: 0.35, conclude: '강요가 되풀이돼도 같은 뜻을 흔들림 없이 말하고, 함께할 다른 방법을 열면 관계를 지키며 거절할 수 있어요.',
              levels: { easy: { prompt: '강요가 이어지는 대화를 차례로 놓으세요(카드 3장).', toolOptions: { slots: 3, cards: [{ id: 'p2', text: '"한 잔도 못 해?"' }, { id: 'p1', text: '"한 잔 받아"' }, { id: 'end', text: '"난 안 마셔. 대신 노래방 가자"' }] }, target: { order: ['p1', 'p2', 'end'] } } } },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '세 번째 강요("다들 마시는데 너만 왜 그래?")에 내가 할 말을 이어 쓰세요.' }] },
      }),

      M({
        id: 'wrap.check', type: 'wrap', title: '나의 기준 점검표',
        method: '나의 기준 점검표', tool: 'kitchen', minutes: 8,
        levels: { easy: '점검표 앞 세 항목(한계선·거절 표현·도움 연락처)을 함께 읽고 표시하게 한다.', base: '다섯 항목 가운데 지금 준비된 것을 스스로 표시한다.', challenge: '표시하지 못한 항목 하나를 골라 보완할 방법을 출구 짧은 답에 쓰게 한다.' },
        wrap: {
          teacher: '"오늘 세운 기준이 졸업 뒤에도 이어지려면 무엇이 준비돼 있어야 할까요? 지금 준비된 것만 표시해요." 점검표는 남과 견주지 않는다고 미리 말한다. "다 표시했어요"라는 학생에게 "도움 연락처는 휴대폰에 실제로 저장돼 있나요?"라고 묻는다. 표시하지 못한 칸이 오늘 집에 가서 채울 칸이라는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '나의 기준 점검표', items: [{ id: 'line', text: '나의 한계선을 한 문장으로 정했다' }, { id: 'phrase', text: '거절할 때 쓸 말을 준비했다' }, { id: 'contact', text: '도움을 청할 사람·번호를 안다' }, { id: 'home', text: '모임 뒤 귀가 방법을 미리 정한다' }, { id: 'friend', text: '같은 기준을 가진 친구가 있다' }] }, prompt: '지금 준비된 것을 스스로 표시하세요.', target: { selfCheck: true }, difficulty: 0.1 },
            { type: 'short', prompt: '표시하지 못한 항목 하나를 골라 보완할 방법을 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '나의 기준 점검',
          items: [
            { type: 'check', prompt: '지금 준비된 것에 표시하세요.', options: ['나의 한계선', '거절할 말', '도움 연락처', '귀가 방법', '같은 기준의 친구'] },
            { type: 'short', prompt: '이번 주 안에 채울 항목 하나와 채울 방법을 쓰세요.' },
          ],
          easy: { note: '한계선 · 거절할 말 · 도움 연락처', items: [{ type: 'check', prompt: '준비된 것에 표시하세요.', options: ['나의 한계선', '거절할 말', '도움 연락처'] }] },
        },
      }),
      M({
        id: 'wrap.share', type: 'wrap', title: '졸업 뒤의 나에게 다짐',
        method: '다짐 카드 나누기', tool: 'wordcards', minutes: 8,
        levels: { easy: '다짐 카드 가운데 알맞은 것을 고르게 한다.', base: '알맞은 다짐 카드를 고른 뒤 그 까닭을 모둠에게 말하게 한다.', challenge: '고른 카드를 내 말로 고쳐 출구 짧은 답에 쓰게 한다.' },
        wrap: {
          teacher: '"졸업 뒤의 나에게 건넬 다짐 카드를 골라 모둠에게 읽어 줘요." 카드를 고른 뒤 모둠에서 한 사람씩 읽게 한다. \'분위기 깨지 않게 다 맞춘다\'를 고른 학생에게 "오늘 갈림길에서 다 맞춘 길의 끝은 어땠나요?"라고 묻는다. 다짐은 크게 말할수록 좋은 것이 아니라, 내가 지킬 수 있는 작은 말일수록 오래간다는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'wordcards', options: { mode: 'pick', basket: '졸업 뒤의 나에게', cards: ['내 기준을 먼저 말한다', '분위기 깨지 않게 다 맞춘다', '거절할 말을 미리 준비한다', '오늘만 마시고 다음부터 조절한다', '힘들면 도움을 청한다'] }, prompt: '졸업 뒤의 나에게 건넬 다짐으로 알맞은 카드만 고르세요.', target: { pick: ['내 기준을 먼저 말한다', '거절할 말을 미리 준비한다', '힘들면 도움을 청한다'] }, difficulty: 0.15 },
            { type: 'short', prompt: '고른 다짐 하나를 내 말로 고쳐 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '졸업 뒤의 나에게',
          items: [
            { type: 'short', prompt: '졸업 뒤의 나에게 건네는 다짐을 한두 문장으로 쓰세요.' },
            { type: 'short', prompt: '그 다짐을 지키는 데 도움이 될 사람이나 습관을 쓰세요.' },
          ],
          easy: { note: '내 기준을 먼저 말한다 · 거절할 말을 준비한다 · 힘들면 도움을 청한다', items: [{ type: 'short', prompt: '가장 마음에 드는 다짐 하나를 옮겨 쓰세요.' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 9. 도움 기관과 제도 — 회복을 돕는 사회 (12학년)
  // ======================================================================================================
  {
    const M = MOD('help-system', [12]);
    const TELL = { text: '쉬는 시간, 친구 하늘이 조용히 말한다. "사실 우리 아빠가 술을 너무 많이 마셔서 집이 힘들어. 아무한테도 말 안 했어."', who: '나', motif: 'house', choices: [
      { id: 'listen', text: '끝까지 듣고 "말해 줘서 고마워. 지금 넌 괜찮아?"라고 묻는다', result: '하늘이 "솔직히 집에 가기 싫을 때가 있어"라고 더 털어놓는다.', impact: [{ who: '하늘', text: '믿고 말할 사람이 생긴다', tone: 1 }],
        next: { text: '하늘이 "선생님한테 말하면 집에 다 알려질까 봐 무서워"라고 한다.', choices: [
          { id: 'together', text: '"상담 선생님은 네 이야기를 먼저 들어 줘. 같이 가 볼까?"라고 한다', result: '하늘이 망설이다 함께 상담실에 가기로 한다.', impact: [{ who: '하늘', text: '도움과 이어진다', tone: 1 }],
            next: { text: '상담 선생님이 하늘과 이야기한 뒤, 하늘이 "조금 가벼워졌어"라고 한다.', choices: [
              { id: 'stay', text: '"언제든 또 이야기해"라며 곁에 있어 준다', result: '하늘이 힘든 날마다 상담실과 친구에게 말할 수 있게 된다.', impact: [{ who: '하늘', text: '기댈 곳이 둘이 된다', tone: 1 }], ending: '들어 주고, 함께 가 주고, 곁에 남는 것이 친구가 할 수 있는 가장 큰 도움이다.' },
              { id: 'done', text: '이제 상담실이 있으니 나는 빠진다', result: '하늘이 "너한테 말한 게 부담이었나" 하고 다시 입을 닫는다.', impact: [{ who: '하늘', text: '다시 혼자라고 느낀다', tone: -1 }], ending: '전문가와 이어 준 뒤에도 친구의 자리는 남아 있다.' }] } },
          { id: 'promise', text: '"걱정 마, 절대 아무한테도 말 안 할게"라고 약속한다', result: '하늘은 안심하지만 집의 어려움은 그대로다.', impact: [{ who: '하늘', text: '도움과 멀어진다', tone: 0 }], ending: '비밀을 지키는 것만으로는 친구의 안전을 지키기 어렵다.' }] } },
      { id: 'advice', text: '"그럼 네가 아빠한테 끊으라고 말해 봐"라고 바로 해결책을 말한다', result: '하늘이 "그게 되면 벌써 했지"라며 말을 멈춘다.', impact: [{ who: '하늘', text: '이해받지 못한다고 느낀다', tone: -1 }],
        next: { text: '하늘이 "됐어, 말하지 말 걸"이라고 한다.', choices: [
          { id: 'sorry', text: '"내가 너무 빨리 말했네. 네 얘기 더 들을게"라고 사과한다', result: '하늘이 다시 천천히 이야기를 시작한다.', impact: [{ who: '하늘', text: '다시 말할 마음이 생긴다', tone: 1 }],
            next: { text: '하늘이 "어디에 말해야 할지 모르겠어"라고 한다.', choices: [
              { id: 'link', text: '학교 상담실과 1388을 함께 알아보자고 한다', result: '하늘이 상담실 시간을 확인하고 가 보기로 한다.', impact: [{ who: '하늘', text: '도움과 이어진다', tone: 1 }], ending: '실수한 말도 사과하고 다시 들으면 도움으로 이어 갈 수 있다.' },
              { id: 'online', text: '익명 커뮤니티에 올려 보라고 한다', result: '모르는 사람들의 엇갈린 댓글에 하늘이 더 혼란스러워한다.', impact: [{ who: '하늘', text: '믿을 만한 도움을 받지 못한다', tone: -1 }], ending: '고민은 믿을 수 있는 상담 기관과 이어야 한다.' }] } },
          { id: 'leave', text: '"알았어"라며 화제를 돌린다', result: '하늘은 다시 아무에게도 말하지 않는다.', impact: [{ who: '하늘', text: '혼자 견딘다', tone: -1 }], ending: '어긋난 첫마디보다 그 뒤에 등을 돌리는 것이 더 큰 상처가 된다.' }] } },
      { id: 'joke', text: '"우리 집도 그래, 별거 아니야"라며 가볍게 넘긴다', result: '하늘이 웃어 보이지만 더 말하지 않는다.', impact: [{ who: '하늘', text: '힘든 마음이 작게 취급된다', tone: -1 }],
        next: { text: '며칠 뒤 하늘이 "요즘 집에 들어가기 싫어"라는 글을 단체방에 올렸다 지운다.', choices: [
          { id: 'reach', text: '하늘에게 따로 "그때 내가 가볍게 들었어. 다시 얘기해 줄래?"라고 묻는다', result: '하늘이 그날 일을 다시 이야기한다.', impact: [{ who: '하늘', text: '다시 이어질 기회가 생긴다', tone: 1 }],
            next: { text: '하늘이 "집에 있기 너무 힘든 날이 있어"라고 한다.', choices: [
              { id: 'counsel', text: '함께 상담 선생님을 찾아가자고 한다', result: '상담 선생님이 하늘의 안전부터 함께 살핀다.', impact: [{ who: '하늘', text: '안전과 도움을 함께 얻는다', tone: 1 }], ending: '신호를 알아차리고 다시 손을 내밀면 늦지 않았다.' },
              { id: 'wait', text: '"좀 지나면 나아질 거야"라고 한다', result: '하늘은 힘든 날을 혼자 버틴다.', impact: [{ who: '하늘', text: '도움과 멀어진다', tone: -1 }], ending: '기다리라는 말은 혼자 견디라는 말이 되기 쉽다.' }] } },
          { id: 'ignore', text: '지운 글이니 모른 척한다', result: '하늘의 신호가 그대로 묻힌다.', impact: [{ who: '하늘', text: '혼자 남는다', tone: -1 }], ending: '지운 글도 도움을 청하는 신호일 수 있다.' }] } }] };
    const TELL_R = [{ id: 'listen', text: '먼저 끝까지 듣는 것이 도움의 시작이다' }, { id: 'link', text: '친구 혼자 해결하게 두지 않고 상담실·1388과 잇는다' }, { id: 'safe', text: '친구의 안전이 걸리면 비밀보다 도움이 먼저다' }, { id: 'weak', text: '도움을 청하는 것은 약하다는 뜻이다', why: '도움을 청하는 것은 용기이고 회복의 첫걸음이에요.' }, { id: 'secret', text: '상담하면 내용이 모두 알려진다', why: '상담 내용은 원칙적으로 비밀이 지켜지고, 생명·안전이 위험할 때만 도움을 위해 알릴 수 있어요.' }];
    const RELAPSE = { text: '금연을 시작한 지 한 달, 친구 도윤이 "어제 한 대 피웠어. 난 역시 안 되나 봐"라고 말한다.', who: '나', motif: 'cloud', choices: [
      { id: 'cheer', text: '"한 달 버틴 것도 대단해. 다시 시작하면 돼"라고 말한다', result: '도윤이 "그래도 될까?"라며 고개를 든다.', impact: [{ who: '도윤', text: '다시 시도할 힘을 얻는다', tone: 1 }],
        next: { text: '도윤이 "혼자는 자신이 없어"라고 한다.', choices: [
          { id: 'clinic', text: '보건 선생님과 금연 상담을 다시 이어 가자고 한다', result: '도윤이 상담 일정을 다시 잡는다.', impact: [{ who: '도윤', text: '도움을 다시 잇는다', tone: 1 }], ending: '다시 흔들리는 것도 회복 과정의 일부다. 도움을 다시 이으면 된다.' },
          { id: 'alone', text: '"의지로 버텨 봐"라고만 한다', result: '도윤은 혼자 버티다 다시 지친다.', impact: [{ who: '도윤', text: '혼자 감당한다', tone: -1 }], ending: '의지만으로 버티게 두면 다시 흔들리기 쉽다.' }] } },
      { id: 'blame', text: '"거봐, 결국 못 끊잖아"라고 말한다', result: '도윤이 "그럼 그냥 피울래"라며 포기한다.', impact: [{ who: '도윤', text: '다시 시도할 마음을 잃는다', tone: -1 }],
        next: { text: '며칠 뒤 도윤이 다시 담배를 찾는다.', choices: [
          { id: 'fix', text: '"내가 심하게 말했어. 다시 해 보자"라고 사과한다', result: '도윤이 마음을 조금 연다.', impact: [{ who: '도윤', text: '다시 시작할 틈이 생긴다', tone: 1 }], ending: '낙인 찍는 말을 거두면 회복의 문이 다시 열린다.' },
          { id: 'mock', text: '"넌 원래 그래"라며 놀린다', result: '도윤이 친구들과 멀어진다.', impact: [{ who: '도윤', text: '낙인 속에 혼자 남는다', tone: -1 }], ending: '낙인은 회복을 막는 가장 큰 벽이다.' }] } }] };
    const RELAPSE_R = [{ id: 'process', text: '다시 흔들리는 것도 회복 과정의 일부다' }, { id: 'stigma', text: '탓하는 말보다 지지하는 말이 회복을 돕는다' }, { id: 'never', text: '한 번 흔들리면 회복할 수 없다', why: '회복은 여러 번 다시 시도하며 이어져요.' }];
    const TOWN = { title: '우리 지역(가상)', grid: [4, 3], places: [{ name: '보건소', icon: 'hospital', at: [0, 0] }, { name: '병원', icon: 'hospital', at: [3, 0] }, { name: '상담센터', icon: 'office', at: [1, 1] }, { name: '경찰서', icon: 'police', at: [3, 2] }, { name: '학교 상담실', icon: 'school', at: [0, 2] }, { name: '공원', icon: 'park', at: [2, 2] }] };

    MODS.push(
      M({
        id: 'intro.myth', type: 'intro', title: '도움 요청 오해와 사실',
        method: '오해·사실 판정', tool: 'mindmap', minutes: 6,
        levels: { easy: '문장 3개만 함께 읽고 오해·사실 손 들기를 한다.', base: '문장 6개를 오해·사실로 나누는 시연을 보며 내 판정과 견준다.', challenge: '오해 하나를 골라 그 오해가 도움을 막는 피해를 말한다.' },
        intro: {
          teacher: '"약물·술·담배 문제로 힘들 때 도움을 청하는 것, 여러분은 어떻게 생각하나요? 여섯 문장을 먼저 손으로 판정해 봐요." 손 들기를 한 뒤 시연 단추로 문장이 두 가지에 붙는 모습을 보인다. "상담하면 다 소문나잖아요"라는 말이 나오면 "상담 선생님이 지키는 원칙이 무엇인지 알고 있나요? 비밀은 원칙적으로 지켜지고, 생명·안전이 위험할 때만 도움을 위해 알려요"라고 답한다. 오해가 사람을 도움에서 멀어지게 한다는 점을 짚고, 오늘은 회복을 돕는 기관과 제도를 다룬다고 밝힌다.',
          student: '도움 요청과 회복에 대한 여섯 문장을 오해와 사실로 먼저 판정하고, 시연과 견주어 보세요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '도움 요청, 맞는 말일까?', slots: ['오해', '사실'], cards: [{ id: 'weak', text: '도움을 청하면 약하다는 뜻이다' }, { id: 'never', text: '한 번 중독되면 회복할 수 없다' }, { id: 'leak', text: '상담 내용은 모두 알려진다' }, { id: 'can', text: '회복은 가능하고 도움이 빠를수록 좋다' }, { id: 'keep', text: '상담 내용은 원칙적으로 비밀이 지켜진다' }, { id: 'brave', text: '도움을 청하는 것도 용기다' }], shuffle: false }, sequence: [{ sort: { 오해: ['weak', 'never', 'leak'], 사실: ['can', 'keep', 'brave'] } }] },
          art: { draw: 'two paper baskets labeled myth and fact, paper sentence strips between them, a paper hand reaching toward another paper hand in the background', banner: '도움을 청하는 것은?', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
        notes: '상담 비밀 보장의 원칙과 예외는 학교 상담 규정에 맞춰 교사가 확인해 말한다.',
      }),
      M({
        id: 'intro.map', type: 'intro', title: '지역 도움 기관 지도',
        method: '지역 도움 기관 지도', tool: 'map', minutes: 6,
        levels: { easy: '지도에서 기관 3곳(보건소·병원·학교 상담실)을 함께 찾는다.', base: '기관 5곳을 찾고 저마다 무엇을 도와주는지 말한다.', challenge: '학교에서 가장 가까운 기관까지 가는 길을 말해 본다.' },
        intro: {
          teacher: '"가상의 우리 지역 지도예요. 약물·술·담배 문제로 도움이 필요하면 어디로 갈 수 있을까요?" 시연 단추로 보건소에 핀이 꽂히는 모습을 보인 뒤 나머지 기관을 함께 찾는다. "도움받으려면 큰 병원까지 가야 하잖아요"라는 말이 나오면 "학교 상담실과 보건소처럼 가까운 곳에서도 시작할 수 있을까요?"라고 되묻는다. 도움은 생각보다 가까이 있고, 첫걸음은 가까운 곳에서 시작할 수 있다는 점을 짚는다.',
          student: '가상 지역 지도에서 보건소·병원·상담센터·경찰서·학교 상담실을 찾고, 저마다 무엇을 도와줄지 생각해 보세요.',
          demo: { tool: 'map', options: TOWN, sequence: [{ place: '보건소' }] },
          art: { draw: 'a paper town map with small paper buildings for a health center, hospital, counseling center, police station and school, paper path lines connecting them from a school bag', banner: '도움은 가까이 있어요', extra: [{ motif: 'house', x: 300, y: 96 }] },
        },
        notes: '지도는 가상이다. 우리 지역 기관의 실제 위치·이름은 수업 전 확인해 따로 알려 준다.',
      }),
      M({
        id: 'intro.poll', type: 'intro', title: '힘들 때 이야기하는 사람',
        method: '가상 설문 원그래프', tool: 'chart', minutes: 6,
        levels: { easy: '큰 조각 3개(친구·아무에게도 말하지 않음·가족)만 함께 읽는다.', base: '다섯 조각을 읽고 \'아무에게도 말하지 않음\' 조각의 의미를 토의한다.', challenge: '그 조각을 줄일 방법을 제안한다.' },
        intro: {
          teacher: '"가상의 학급 설문이에요. 힘들 때 누구에게 이야기하나요?" 시연 단추로 가장 큰 조각이 골라지는 모습을 보인 뒤 \'아무에게도 말하지 않음\' 조각을 가리킨다. "말 안 하는 건 개인 선택이잖아요"라는 말이 나오면 "말하고 싶어도 못 하는 것이라면, 무엇이 그 사람을 막고 있을까요?"라고 되묻는다. 이 조각을 줄이는 것이 학교와 사회가 할 일이라는 점을 짚는다.',
          student: '가상 설문 원그래프를 읽고, \'아무에게도 말하지 않음\' 조각이 무엇을 뜻하는지 생각해 보세요.',
          demo: { tool: 'chart', options: { type: 'circle', mode: 'read', title: '힘들 때 이야기하는 사람(가상 설문)', unit: '%', data: [['친구', 35], ['아무에게도 말하지 않음', 25], ['가족', 20], ['선생님·상담', 15], ['기타', 5]], question: '가장 큰 조각은?', choices: ['친구', '아무에게도 말하지 않음', '가족', '선생님·상담', '기타'] }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper pie chart with five slices, small paper figures beside each slice, one grey slice showing a lone paper figure sitting quietly', banner: '힘들 때, 누구에게?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '그래프는 수업용 가상 자료다. 학생에게 자신은 누구에게 말하는지 발표시키지 않는다.',
      }),

      M({
        id: 'activity.match', type: 'activity', title: '상황과 도움 기관 잇기',
        method: '상황과 기관 잇기', tool: 'mindmap', minutes: 18,
        levels: { easy: '상황 카드 3장(번호마다 1장)을 119·112·1388·상담실에 나누고, 놓자마자 맞는지 보인다.', base: '상황 카드 6장을 나누고, 기관과 하는 일을 짝짓고, 두 곳 이상에 알려야 할 상황을 고른다.', challenge: '헷갈리는 카드 3장이 더해진 9장을 나눈다.' },
        activity: {
          title: '상황과 도움 기관 잇기', tool: 'mindmap',
          teacher: '"도움 번호를 아는 것과 상황에 맞게 쓰는 것은 달라요. 이 상황에는 어디가 먼저일까요?" 카드를 놓을 때마다 "지금 생명이 걸렸나요, 범죄나 위협이 있나요, 고민인가요?"라고 묻는다. \'친구가 깨워도 반응이 없다\'를 1388에 넣는 학생에게 "상담 전화가 구급차를 보낼 수 있을까요?"라고 되묻는다. 한 상황에 두 곳 이상이 필요할 때도 있다 — 예를 들어 119에 신고하고 보호자에게도 알린다 — 는 점을 짚는다.',
          task: '상황 카드를 알맞은 도움 번호·기관에 나누고, 기관마다 하는 일을 짝지어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('상황 카드를 먼저 연락할 곳 가지에 나누세요.', ['119', '112', '1388·학교 상담실'], [
              ['친구가 깨워도 반응이 없다', '친구가 숨쉬기가 이상하다고 한다'],
              ['모르는 계정이 약물을 권하며 협박한다', '누가 억지로 술을 먹이려 한다'],
              ['술·담배를 끊고 싶은데 혼자 힘들다', '가족의 음주 문제로 마음이 무겁다'],
            ], { k: 1, hard: [['술 마신 친구가 넘어져 머리를 다쳤다'], ['수상한 광고 계정이 내 주소를 안다고 한다'], ['친구가 약에 기대는 것 같아 걱정된다']], d: 0.3, opt: { topic: '어디에 먼저 연락할까' } }),
            MATCHQ('도움 기관과 그곳이 하는 일을 짝지으세요.', [['보건소', '금연 상담 등 지역 주민의 건강을 돕는다'], ['병원', '의존이 생긴 몸과 마음을 진료·치료한다'], ['상담센터', '약물·음주 고민을 듣고 회복을 함께 계획한다'], ['학교 상담실', '학교 안에서 고민을 듣고 필요한 곳과 잇는다']], { k: 3, d: 0.35, opt: { topic: '기관이 하는 일' } }),
            PICKQ('한 곳만이 아니라 두 곳 이상에 알려야 하는 상황만 고르세요.', ['친구가 깨워도 반응이 없다(119와 보호자)', '협박을 받는데 마음도 너무 불안하다(112와 상담실)'], ['금연 상담을 받고 싶다', '광고 DM을 받아 신고했다'], { d: 0.4, opt: { basket: '두 곳 이상에 알릴 상황' }, more: { conclude: '생명이 걸리면 119, 범죄·위협은 112, 고민은 1388·학교 상담실. 한 상황에도 신고와 보호자·상담이 함께 필요할 수 있어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '두 곳 이상에 알려야 하는 상황을 하나 들고, 어디에 어떤 차례로 알릴지 쓰세요.' }] },
        notes: '기관이 하는 일은 일반 안내다. 우리 지역 보건소·상담센터의 실제 프로그램은 수업 전 확인한다(사람 확인 목록).',
      }),
      M({
        id: 'activity.recovery', type: 'activity', title: '회복 과정 장면 차례',
        method: '회복 사례 차례', tool: 'story', minutes: 18,
        levels: { easy: '회복 장면 4장을 차례로 놓는다(놓자마자 맞는지 보임).', base: '회복 장면 6장을 놓고, 장면마다 주변 사람의 역할을 짝짓고, 회복에 대한 바른 말을 고른다.', challenge: '카드가 섞인 채로 풀고, 활동지에 주변 사람이 할 수 있는 일을 쓴다.' },
        activity: {
          title: '회복 과정 장면 차례', tool: 'story',
          teacher: '"가상 인물 은호의 회복 이야기예요. 회복은 한 번에 쭉 나아지는 길일까요?" 장면을 놓은 뒤 \'다시 흔들림\' 카드를 가리키며 "이 장면이 있으면 실패일까요?"라고 묻는다. "한 번 중독되면 회복할 수 없다"는 말이 나오면 은호의 마지막 장면을 함께 보며 무엇이 은호를 다시 일으켰는지 찾게 한다. 회복에는 여러 번 다시 시도하는 과정이 있고, 주변 사람의 지지가 그 힘이 된다는 점을 짚는다.',
          task: '가상 인물의 회복 과정 장면을 차례로 놓고, 주변 사람의 역할을 찾아요.', levels: { easy: { live: true }, base: {}, challenge: { shuffle: true } },
          items: [
            { prompt: '은호의 회복 과정 장면을 차례로 놓으세요.', toolOptions: { mode: 'order', slots: 6, title: '은호의 회복(가상)', cards: [{ id: 'aware', text: '문제가 있다고 알아차림', motif: 'cloud' }, { id: 'ask', text: '용기 내어 도움을 청함', motif: 'sun' }, { id: 'care', text: '상담·치료를 받음', motif: 'house' }, { id: 'shake', text: '힘든 날 다시 흔들림', motif: 'rain' }, { id: 'retry', text: '주변의 지지로 다시 시도함', motif: 'star' }, { id: 'life', text: '일상을 되찾아 감', motif: 'sun' }] }, target: { order: ['aware', 'ask', 'care', 'shake', 'retry', 'life'] }, difficulty: 0.3,
              levels: { easy: { prompt: '은호의 회복 과정 장면을 차례로 놓으세요(카드 4장).', toolOptions: { slots: 4, cards: [{ id: 'aware', text: '문제가 있다고 알아차림', motif: 'cloud' }, { id: 'ask', text: '용기 내어 도움을 청함', motif: 'sun' }, { id: 'care', text: '상담·치료를 받음', motif: 'house' }, { id: 'life', text: '일상을 되찾아 감', motif: 'sun' }] }, target: { order: ['aware', 'ask', 'care', 'life'] } } } },
            { prompt: '회복 장면과 그때 주변 사람이 한 역할을 짝지으세요.', toolOptions: { mode: 'match', title: '주변 사람의 역할', slots: [{ id: 'ask', label: '도움을 청할 때' }, { id: 'shake', label: '다시 흔들릴 때' }, { id: 'life', label: '일상을 되찾을 때' }], cards: [{ id: 'go', text: '친구가 상담실까지 함께 감' }, { id: 'nostigma', text: '가족이 탓하지 않고 다시 해 보자고 함' }, { id: 'invite', text: '친구가 술 없는 모임에 불러 줌' }, { id: 'blame', text: '"거봐, 또 그러네"라고 말함' }] }, target: { match: { ask: 'go', shake: 'nostigma', life: 'invite' } }, difficulty: 0.35,
              levels: { easy: { prompt: '회복 장면과 주변 사람의 역할을 짝지으세요(2쌍).', toolOptions: { slots: [{ id: 'ask', label: '도움을 청할 때' }, { id: 'shake', label: '다시 흔들릴 때' }], cards: [{ id: 'go', text: '친구가 상담실까지 함께 감' }, { id: 'nostigma', text: '가족이 탓하지 않고 다시 해 보자고 함' }] }, target: { match: { ask: 'go', shake: 'nostigma' } } } } },
            { prompt: '회복에 대해 바르게 말한 것만 고르세요.', toolOptions: { mode: 'pick', basket: '바른 말', title: '회복이란', cards: [{ id: 'retry', text: '다시 흔들려도 다시 시도할 수 있다' }, { id: 'never', text: '한 번 중독되면 회복할 수 없다' }, { id: 'support', text: '주변의 지지가 회복을 돕는다' }, { id: 'alone', text: '회복은 혼자 의지로만 하는 것이다' }] }, target: { pick: ['retry', 'support'] }, difficulty: 0.3, conclude: '회복은 알아차림 → 도움 청하기 → 상담·치료 → 흔들림 → 다시 시도로 이어져요. 탓하지 않는 주변 사람의 지지가 큰 힘이 돼요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '은호가 다시 흔들렸을 때 내가 친구라면 해 줄 말을 한 문장으로 쓰세요.' }] },
        notes: '은호는 가상 인물이다. 학생 주변의 실제 사례를 묻지 않는다.',
      }),
      M({
        id: 'activity.disclose', type: 'activity', title: '친구가 털어놓은 고민 갈림길',
        method: '딜레마 결과 추적', tool: 'dilemma', minutes: 18,
        levels: { easy: '갈림길 둘까지 가 보고 근거 카드를 고른다.', base: '갈림길 셋까지 신뢰·안전·도움 연결의 결과를 따라가고 근거 카드를 고른다.', challenge: '다른 끝 길을 하나 더 끝까지 가 보고, 활동지에 비밀 지키기와 도움 연결 사이의 근거를 정리한다.' },
        activity: {
          title: '털어놓은 고민 갈림길', tool: 'dilemma',
          teacher: '"하늘이는 가족의 음주 문제를 처음으로 털어놓았어요. 첫마디가 무엇이냐에 따라 하늘이의 다음 말이 달라져요." 선택마다 신뢰·안전·도움 연결이 어떻게 바뀌는지 읽게 한다. \'바로 해결책\'을 고른 학생에게 "하늘이가 바란 것은 방법이었을까요, 들어 줄 사람이었을까요?"라고 묻는다. "비밀을 지켜야 진짜 친구"라는 말이 나오면 \'절대 말 안 할게\' 길의 끝을 함께 보며 비밀을 지키는 것과 친구를 지키는 것이 같은지 묻는다. 어긋난 첫마디도 사과하고 다시 들으면 이어 갈 수 있다는 점을 짚는다.',
          task: '친구가 털어놓은 고민에 어떻게 반응할지 끝까지 따라가 결과를 보고, 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL3('친구를 도움과 잇는 길을 끝까지 고르고, 근거 카드를 고르세요.', TELL, [['listen', 'together', 'stay'], ['advice', 'sorry', 'link'], ['joke', 'reach', 'counsel']], TELL_R, ['listen', 'link'], { d: 0.4, opt: { title: '털어놓은 고민(가상)' } }),
            DIL2('금연 중이던 친구가 다시 흔들린 장면에서 회복을 돕는 길을 고르고, 근거 카드를 고르세요.', RELAPSE, [['cheer', 'clinic'], ['blame', 'fix']], RELAPSE_R, ['process', 'stigma'], { d: 0.35, opt: { title: '다시 흔들린 친구(가상)' } }),
            EXPLOREQ('고민 장면에서 \'끝까지 듣는다\'로 시작한 길과 \'가볍게 넘긴다\'로 시작한 길을 끝까지 가 보고 견주세요.', TELL, TELL_R, ['두 길의 끝 장면을 모두 보았다', '두 길에서 하늘이의 신뢰가 어떻게 달라졌는지 견주었다', '어긋난 뒤에도 다시 이어 갈 지점을 찾았다'], { d: 0.35, more: { conclude: '고민을 들은 친구가 할 일은 끝까지 듣고, 혼자 해결하게 두지 않고, 상담실·1388과 함께 잇고, 곁에 남는 것이에요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '\'비밀 지키기\'와 \'도움 연결\'이 부딪칠 때 내가 따를 기준과 그 근거를 쓰세요.' }] },
        notes: '하늘은 가상 인물이다. 학생에게 가족의 음주·약물 문제를 묻거나 발표시키지 않는다. 수업 뒤 개별 상담을 원하는 학생이 있으면 상담실로 잇는다.',
      }),
      M({
        id: 'activity.proposal', type: 'activity', title: '학교 예방·회복 지원 제안',
        method: '학교 지원 제안서', tool: 'rubric-writing', minutes: 18,
        levels: { easy: '제안서 틀(문제·대상 → 방법 → 낙인 줄이기)의 문장 시작 도움말을 보고 쓴다.', base: '문제·대상, 제안 3개, 낙인 줄이기를 쓰고 기준표를 점검한다.', challenge: '낙인 줄이기 글에 기준 하나(예산·인력 제약 고려)를 더해 점검한다.' },
        activity: {
          title: '학교 예방·회복 지원 제안', tool: 'rubric-writing',
          teacher: '"우리 학교가 약물·음주·흡연 문제의 예방과 회복을 더 잘 도우려면 무엇이 필요할까요? 학교에 내는 제안서를 써요." 기준표를 함께 읽은 뒤 쓰게 한다. "문제 있는 학생을 찾아 벌주자"고 쓴 학생에게 "벌이 무서우면 도움이 필요한 학생이 먼저 말할까요?"라고 묻는다. 좋은 지원은 낙인을 줄여 도움을 청하기 쉽게 만드는 것이라는 점을 짚는다.',
          task: '학교의 예방·회복 지원 방안 제안서를 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RWQ('제안서의 \'문제와 대상\'을 쓰고 기준표로 점검하세요.', '우리 학교에서 약물·음주·흡연과 관련해 도움이 필요한 문제와 그 대상을 두세 문장으로 쓰세요(실제 학생은 쓰지 않아요).', ['문제를 구체적으로 썼다', '지원이 필요한 대상을 밝혔다', '특정 학생을 떠올리게 쓰지 않았다'], { min: 40, max: 300, starter: '우리 학교에는 ~ 문제가 있고, ~ 학생에게 지원이 필요하다.', d: 0.3 }),
            RWQ('지원 방안 세 가지를 쓰고 기준표로 점검하세요.', '학교가 할 수 있는 예방·회복 지원 방안 세 가지를 \'누가·언제·무엇을\'이 보이게 쓰세요.', ['방안을 세 가지 썼다', '방안마다 누가·언제·무엇을 하는지 보인다', '예방과 회복을 함께 다뤘다'], { min: 60, max: 400, starter: '첫째, ~. 둘째, ~. 셋째, ~', sample: '첫째, 보건실이 학기마다 금연 상담 주간을 열고 원하는 학생은 이름 없이 신청하게 한다. 둘째, 상담실이 \'도움 청하기\' 안내를 누리집과 교실에 붙인다. 셋째, 학생회가 술·담배 없는 축제 뒤풀이를 기획한다.', d: 0.4 }),
            RWQ('낙인을 줄이는 방법을 쓰고 기준표로 점검하세요.', '내 제안이 도움을 청한 학생에게 낙인이 되지 않게 하는 방법을 두세 문장으로 쓰세요.', ['낙인이 무엇인지 드러냈다', '도움을 청한 학생의 비밀을 지키는 방법을 썼다', '모두가 쓰는 지원처럼 보이게 하는 방법을 썼다'], { min: 50, max: 300, must: [['낙인', '비밀', '익명']], starter: '도움을 청한 학생이 ~하지 않도록 ~', plus: '예산·인력 같은 제약을 고려했다', d: 0.45, more: { conclude: '좋은 학교 지원은 예방과 회복을 함께 다루고, 낙인을 줄여 누구나 도움을 청하기 쉽게 만들어요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내 제안서에서 학교가 가장 먼저 해 볼 수 있는 방안 하나와 그 까닭을 쓰세요.' }] },
      }),
      M({
        id: 'activity.debate', type: 'activity', title: '익명 상담 창구 찬반 토론',
        method: '찬반 토론 진행판', tool: 'timer', minutes: 18,
        levels: { easy: '입론·정리 두 단계만 차례로 놓고 두 단계 발언 시간을 맞춘다.', base: '네 단계 차례와 발언 시간을 맞추고 토론 뒤 스스로 점검한다.', challenge: '스스로 점검에 \'제안서 내용과 이어 말했다\'가 더해진다.' },
        activity: {
          title: '익명 상담 창구 찬반 토론', tool: 'timer',
          teacher: '"\'학교에 익명 상담 창구가 필요하다.\' 찬성과 반대로 나눠 토론해요." 진행 차례와 발언 시간을 판으로 맞춘 뒤 시작한다. 반대 쪽이 "이름을 밝혀야 책임 있게 말한다"고만 하면 "오늘 본 설문의 \'아무에게도 말하지 않음\' 조각은 왜 생겼을까요?"라고 묻는다. 찬성 쪽이 "익명이면 다 해결된다"고만 하면 "익명으로 위급한 상황을 알렸을 때 학교는 어떻게 도울 수 있을까요?"라고 되묻는다. 익명의 장점과 한계를 함께 정리하게 한다.',
          task: '토론 진행 차례와 발언 시간을 맞추고, 토론 뒤 우리 모둠을 스스로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: DEBATEQ('학교에 익명 상담 창구가 필요하다', { label: '익명 상담 창구', work: 2, rest: 1,
            checks: ['상대 주장을 요약한 뒤 반론했다', '익명의 장점과 한계를 함께 다뤘다', '사람이 아니라 주장을 비판했다'], plus: '제안서 내용과 이어 말했다',
            conclude: '익명 창구는 말하기 어려운 사람의 첫걸음을 열지만, 위급할 때는 직접 연결이 필요해요. 장점과 한계를 함께 설계해야 해요.' }),
        },
        worksheet: { items: [{ type: 'short', prompt: '익명 상담 창구의 장점과 한계를 하나씩 쓰고, 한계를 보완할 방법을 쓰세요.' }] },
      }),
      M({
        id: 'activity.careers', type: 'activity', title: '돕는 직업과 하는 일',
        method: '관련 직업과 하는 일 나누기', tool: 'kitchen', minutes: 18,
        levels: { easy: '직업 카드 3장을 예방·상담·치료·지원 칸에 나누고, 놓자마자 맞는지 보인다.', base: '직업 카드 5장을 나누고, 직업과 하는 일을 짝짓고, 모든 직업에 필요한 역량을 고른다.', challenge: '카드가 섞인 채로 풀고, 활동지에 관심 있는 직업에 필요한 역량을 쓴다.' },
        activity: {
          title: '돕는 직업과 하는 일', tool: 'kitchen',
          teacher: '"약물·음주·흡연 문제의 예방과 회복을 돕는 사람들이 있어요. 누가 어떤 일을 할까요?" 카드를 나눈 뒤 직업과 하는 일을 짝짓게 한다. "의사만 치료하는 거 아니에요?"라는 말이 나오면 "회복은 진료만으로 끝날까요? 다시 일상으로 돌아가는 길은 누가 도울까요?"라고 되묻는다. 회복은 여러 직업이 함께 돕는 일이고, 그 모두에게 비밀을 지키는 신뢰와 낙인 없이 듣는 태도가 필요하다는 점을 짚는다. 관심 있는 직업이 있다면 진로 활동과 이어 보게 한다.',
          task: '예방·회복을 돕는 직업을 하는 일에 따라 나누고, 필요한 역량을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTQ('직업 카드를 그 직업이 주로 맡는 일 칸에 나누세요.', ['예방', '상담', '치료', '지원'], [
              ['보건교사', '약사'],
              ['상담교사'],
              ['의사'],
              ['사회복지사'],
            ], { k: 1, d: 0.3, opt: { autoMotif: false, trayLabel: '직업 카드' } }),
            MATCHQ('직업과 그 직업이 하는 일을 짝지으세요.', [['약사', '약의 바른 사용과 오남용 위험을 알려 준다'], ['상담교사', '학생의 고민을 듣고 필요한 곳과 잇는다'], ['의사', '의존이 생긴 몸과 마음을 진료한다'], ['사회복지사', '회복 중인 사람이 일상으로 돌아가도록 돕는다']], { k: 3, d: 0.35, opt: { autoMotif: false } }),
            PICKQ('돕는 직업 모두에게 필요한 역량만 고르세요.', ['비밀을 지키는 신뢰', '낙인 없이 듣는 태도', '다른 기관과 잇는 능력'], ['혼자 다 해결하려는 고집', '상대를 판단하는 말투'], { d: 0.3, opt: { autoMotif: false, basket: '필요한 역량' }, more: { conclude: '예방·상담·치료·지원은 여러 직업이 나눠 맡아 함께 회복을 도와요. 모두에게 신뢰와 낙인 없이 듣는 태도가 필요해요.' } }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '관심 있는 직업 하나를 골라 그 직업에 필요한 역량과 내가 지금 준비할 수 있는 것을 쓰세요.' }] },
        notes: '직업이 하는 일은 일반 안내다. 수업 전 커리어넷 등 공식 직업 정보로 확인한다. 직업 칸 나누기는 \'주로 맡는 일\' 기준이며 실제로는 겹칠 수 있다고 말해 준다.',
      }),

      M({
        id: 'wrap.reflect', type: 'wrap', title: '도움을 청하고 돕는 사람',
        method: '성찰 글', tool: 'rubric-writing', minutes: 8,
        levels: { easy: '문장 틀을 띄워 주고 첫 문장을 함께 말해 본 뒤 쓴다.', base: '다섯 문장 안팎으로 쓰고 기준표 세 항목을 스스로 점검한다.', challenge: '내 진로와 이은 문장 하나를 활동지 둘째 칸에 덧붙이게 한다.' },
        wrap: {
          teacher: '"고등학교 약물 단원의 마지막 시간이에요. 나는 도움을 청할 줄 알고, 도울 줄 아는 사람이 될 수 있을까요?" 쓰기 전에 기준표를 함께 읽는다. "나는 그런 일 없을 테니 상관없다"고 쓴 학생에게 "내 주변 누군가가 하늘이처럼 털어놓는다면, 오늘 배운 것 가운데 무엇을 쓸 수 있을까요?"라고 묻는다. 도움을 청하는 것과 돕는 것은 같은 용기에서 나온다는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'rubric-writing', options: { topic: '\'도움을 청하고 돕는 사람\'이 되기 위해 내가 할 일을 다섯 문장 안팎으로 쓰세요.', minChars: 60, maxChars: 400, starter: '내가 힘들 때 나는 ~에게 도움을 청하겠다. 친구가 힘들어하면 ~', sample: '내가 힘들 때 나는 혼자 참지 않고 상담 선생님이나 1388에 도움을 청하겠다. 친구가 털어놓으면 먼저 끝까지 듣겠다. 그리고 친구 혼자 해결하게 두지 않고 함께 상담실에 가겠다. 친구가 다시 흔들려도 탓하지 않겠다. 위급하면 비밀보다 119와 112가 먼저라는 것을 기억하겠다.' }, prompt: '성찰 글을 쓰고 기준표로 점검하세요.', target: { selfCheck: ['내가 도움을 청할 사람이나 곳을 썼다', '친구를 도울 때 할 행동을 썼다', '낙인 없이 대하겠다는 마음을 담았다'] }, difficulty: 0.3 },
            { type: 'choice', prompt: '오늘 배운 것과 맞지 않는 말을 고르세요.', options: ['다시 흔들리는 것도 회복 과정의 일부다', '도움을 청하는 것은 약하다는 뜻이다', '친구의 안전이 걸리면 비밀보다 도움이 먼저다'], answer: 1, difficulty: 0.15, explain: '도움을 청하는 것은 용기이고 회복의 첫걸음이에요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '도움을 청하고 돕는 사람',
          items: [
            { type: 'short', prompt: '내가 힘들 때 도움을 청할 사람·곳을 쓰세요(실제 연락처는 쓰지 않아요).' },
            { type: 'short', prompt: '오늘 배운 것을 내 진로나 앞으로의 삶과 이어 한 문장으로 쓰세요.' },
          ],
          easy: { note: '"내가 힘들 때 나는 ~에게 도움을 청하겠다. 친구가 힘들어하면 ~"', items: [{ type: 'short', prompt: '내가 도움을 청할 사람 한 명을 쓰세요.' }] },
        },
      }),
      M({
        id: 'wrap.feel', type: 'wrap', title: '도움 요청은 약하다 생각 변화',
        method: '생각 변화 크기', tool: 'emotion', minutes: 8,
        levels: { easy: '지금 생각의 크기만 고르게 한다.', base: '수업 전과 지금의 크기를 모두 고르고 까닭을 말하게 한다.', challenge: '친구에게 전할 말을 출구 짧은 답에 쓰게 한다.' },
        wrap: {
          teacher: '"\'도움을 청하는 것은 약하다는 뜻이다.\' 수업 전과 지금, 이 말을 얼마나 맞다고 느끼나요?" 두 눈금을 고른 뒤 짝과 까닭을 말하게 한다. "그래도 혼자 해결하는 게 멋있잖아요"라는 말이 나오면 "오늘 본 은호와 하늘이는 혼자였을 때와 도움을 받았을 때 무엇이 달랐나요?"라고 묻는다. 도움을 청하는 힘도 기를 수 있는 능력이라는 점을 짚는다.',
          exitTicket: [
            SCALE('수업 전 내 생각의 크기를 고르세요.', '수업 전, \'도움을 청하는 것은 약하다는 뜻이다\'라는 말을 들었을 때', '맞다', { 1: '전혀 아니다', 5: '아주 맞다' }, '수업 전에는 얼마나 맞다고 느꼈나요?'),
            SCALE('지금 내 생각의 크기를 고르세요.', '수업을 마친 지금, \'도움을 청하는 것은 약하다는 뜻이다\'라는 말을 들으면', '맞다', { 1: '전혀 아니다', 5: '아주 맞다' }, '지금은 얼마나 맞다고 느끼나요?'),
            { type: 'short', prompt: '도움 청하기를 망설이는 친구에게 전할 말을 한 문장으로 쓰세요.' },
          ],
        },
        worksheet: {
          title: '도움 요청에 대한 내 생각',
          items: [
            { type: 'table', prompt: '수업 전과 지금의 생각을 견주어 쓰세요.', columns: ['', '수업 전', '지금'], cells: [['도움 요청은 약한 것인가', '', ''], ['그렇게 생각한 까닭', '', '']] },
            { type: 'short', prompt: '친구에게 전할 말을 한 문장으로 쓰세요.' },
          ],
          easy: { note: '도움을 청하는 것 = 용기, 회복의 첫걸음', items: [{ type: 'short', prompt: '지금 내 생각을 한 문장으로 쓰세요.' }] },
        },
      }),
      M({
        id: 'wrap.contacts', type: 'wrap', title: '나의 도움 연락처 카드',
        method: '나의 도움 연락처 카드', tool: 'wordcards', minutes: 8,
        levels: { easy: '112·119·1388 세 카드를 함께 읽고 짝짓게 한다.', base: '학교 상담실까지 네 카드를 스스로 짝짓는다.', challenge: '카드마다 연락할 상황을 한 줄씩 활동지에 덧붙이게 한다.' },
        wrap: {
          teacher: '"고등학교를 마치기 전에 꼭 챙겨 갈 카드예요. 번호와 쓰임을 짝지어 나의 도움 연락처 카드를 만들어요." 카드를 짝지은 뒤 활동지 카드에 옮겨 적게 한다. 112와 119를 헷갈리는 학생에게 "숨이 위험하면? 누가 위협하면?"이라고 짧게 묻는다. 휴대폰 연락처에 지금 저장해 두면 위급할 때 찾지 않아도 된다는 점을 짚는다. 연습 때 실제로 전화하지 않는다.',
          exitTicket: [
            EXIT('wordcards', WORDQ('도움 연락처 카드를 그 쓰임과 짝지으세요.', [['112', '범죄·협박처럼 지금 위험할 때 경찰에 신고'], ['119', '깨워도 반응이 없거나 숨쉬기가 이상할 때 응급 신고'], ['1388', '청소년의 고민·위기를 듣는 상담 전화'], ['학교 상담실', '학교 안에서 고민을 듣고 필요한 곳과 잇는 곳']], { k: 4, d: 0.2 })),
            { type: 'short', prompt: '네 연락처 가운데 하나를 골라 연락할 상황을 한 줄로 쓰세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '나의 도움 연락처 카드',
          items: [
            { type: 'table', prompt: '나의 도움 연락처 카드를 완성하세요.', columns: ['연락처', '연락할 상황'], cells: [['112', ''], ['119', ''], ['1388', ''], ['학교 상담실', '']] },
            { type: 'short', prompt: '오늘 집에 가서 휴대폰에 저장할 연락처를 쓰세요.' },
          ],
          easy: { note: '위험·협박 = 112 · 응급 = 119 · 고민 = 1388·학교 상담실', items: [{ type: 'table', prompt: '연락처와 상황을 이어 쓰세요.', columns: ['연락처', '연락할 상황'], cells: [['112', ''], ['119', ''], ['1388', '']] }] },
        },
      }),
    );
  }

  PaperLessons.registerModules(MODS);
})();
