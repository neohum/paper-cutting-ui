/* 창체 계기교육 기념일 — 초3-4 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/events-auto.json 의 days 초3-4.
 * 근거: sources/changche/research-days.md §1 총괄표(날짜·주관)·§3 학교급별 주제 제안·§4 논쟁적인 날 처리 지침.
 *   역사 사실은 기존 차시 lessons/units/g3-cc-days.js·g4-cc-days.js 에 실린 범위(교육과정·교과서 수준)를 넘지 않는다.
 *   날짜는 「국경일에 관한 법률」(3·1절·광복절·개천절·한글날)과 「각종 기념일 등에 관한 규정」(과학의 날·5·18·현충일·6·25·6·10·학생독립운동기념일).
 *   지구의 날(4.22)은 법정기념일이 아니다 — 환경·지속가능발전 범교과 주제로 다룬다.
 * 초3-4 기준: 차례 정하기, 상황 판단(그림+짧은 글), 고른 이유 말하기, 짝 토의, 간단한 표·그림그래프. 법 조문·통계 해석·긴 글쓰기는 쓰지 않는다.
 * 정치적 중립(BRIEF_EVENTS.md): 정당·현직 정치인·현 정부 정책을 다루지 않고, 사건을 오늘의 정치 논쟁과 잇지 않는다. 다른 나라 사람 전체를 탓하는 말을 쓰지 않는다.
 *   희생·폭력 장면은 묘사하지 않고 추모·의미 중심으로, 실존 인물에게 지어낸 대사·감정을 붙이지 않는다(피란 가족·이야기꾼은 '가상'으로 밝힌다).
 *   그래프 자료(투표·빗물·기온)는 모두 가상이며 화면 제목에 '가상'을 밝힌다. 학생에게 가족사·개인 견해를 묻거나 채점하지 않는다.
 * 주제 10개(3·4학년 공통 주제, 학년마다 도입 1 · 활동 2 · 정리 1) = 계획 모듈 80개.
 *
 * 사람 확인: research-days.md 에는 날짜·주관 기관만 있다. 아래 사실은 기존 차시(g3·g4-cc-days, 날짜·태극기·사이렌은 g1·g2-cc-days)와
 *   교과서 수준 서술에서 가져왔으므로 발행 전 확인처에서 대조한다.
 *   - days.e34.march1.*: 1919.3.1 독립 선언서 발표→탑골공원 만세→전국·나라 밖 확산 / 유관순: 이화학당 학생, 서울 만세 참여, 학교가 문을 닫은 뒤
 *     고향 천안 아우내 장터 만세(장날, 태극기를 몰래 만듦), 서대문 형무소 / 1919.4 대한민국 임시 정부 수립 — 국가보훈부 공훈전자사료관·국사편찬위원회 우리역사넷
 *   - days.e34.science.*: 첨성대(신라 선덕 여왕 때)·측우기·자격루·앙부일구(조선 세종 때)·자격루와 장영실, 4월 과학의 달 — 국가유산청·국립중앙과학관
 *   - days.e34.earth.*: 지구의 날 1970년 미국에서 시작, 환경의 날 6.5(활동지 보기), 기후 변화 원인·결과 서술(숲의 탄소 흡수, 빙하·해수면) — 환경부·기상청 기후정보포털
 *   - days.e34.may18.*: 1980.5.18 학생 시위 시작~5.27 계엄군 진압(열흘), 1997 국가 기념일, 2011 기록물 세계기록유산, 주먹밥·헌혈·다친 사람 돌보기,
 *     국립5·18민주묘지·5·18민주화운동기록관·5·18기념재단의 하는 일, '5·18 정신'과 잇는 낱말(민주주의·나눔과 연대·인권) — 국가보훈부·5·18기념재단·5·18민주화운동기록관
 *   - days.e34.june.*: 1950.6.25 북한의 남침→낙동강까지 밀림→인천 상륙 작전→1953.7.27 정전 협정(판문점), 부산 피란민·천막 학교, 사이렌 1분 묵념,
 *     현충일에 순국선열·호국영령을 기림 — 국가보훈부·전쟁기념사업회·국가기록원
 *   - days.e34.june10.*: 1987년 6월 직선제 요구→6.10 국민 대회→직선제 수용→헌법 개정→12월 대통령 직접 선거, 선거 4원칙의 뜻,
 *     국민이 직접 뽑는 대표(대통령·국회의원·시장·도지사) — 민주화운동기념사업회·행정안전부·중앙선거관리위원회
 *   - days.e34.liberation.*: 1910 국권 상실·1945.8.15 광복·1948.8.15 정부 수립, 안중근 1909 하얼빈 의거·윤봉길 1932 훙커우 공원 의거·김구 임시 정부·
 *     안창호 교육·조선어학회 우리말 사전·한국광복군, 국경일 태극기는 깃봉에 붙여 달고 현충일은 조기(깃면 너비만큼 내림) — 국가보훈부 공훈전자사료관·행정안전부(국기)
 *     ※ flag3 의 '태극기 다는 차례' 세 장(꺼내기→깃봉 바로 아래 달기→바깥에서 보기)은 교실 정리용 순서로, 법정 절차가 아니다.
 *   - days.e34.foundation.*: 단군 이야기(환웅·웅녀·호랑이·쑥과 마늘·아사달·풍백·우사·운사·홍익인간)가 『삼국유사』·『제왕운기』에 실림, 고인돌·비파형 동검·
 *     미송리식 토기(도전 카드)가 고조선 대표 유물, 고조선의 청동기 문화, 고조선이 요령 지방과 한반도 북부를 중심으로 발전(칸 지도·평양 위치 — 범위·도읍에
 *     여러 학설이 있어 정답처럼 말하지 않는다) — 국사편찬위원회 우리역사넷·동북아역사재단·교과서
 *   - days.e34.hangul.*: 자음 기본 글자 상형 원리와 가획(ㄱ→ㅋ·ㄴ→ㄷ·ㅁ→ㅂ·ㅅ→ㅈ), 1443 창제·1446 반포(해례본)·1926 가갸날·1997 해례본 세계기록유산,
 *     다듬은 말(누리집·누리꾼·댓글·안전문·길도우미·참살이) — 국립국어원·국립한글박물관·국가유산청
 *   - days.e34.student.*: 1929.10 나주역 다툼→11.3 광주 학생 시위→전국 학교로 확산, 학생들의 요구(학생 차별 반대·식민지 교육 반대·조선 독립)
 *     — 국가보훈부·교육부(광주학생독립운동기념회관)
 */
(function () {
  const BASE = { schema: 'edu-module.v1', domain: 'days', band: '초3-4' };
  const T = (topic, grade) => (o) => Object.assign({}, BASE, { topic: `days.e34.${topic}`, grades: [grade] }, o);
  const M = [];
  const strip = (p) => String(p).replace(/[.?!]$/, '');
  const rev = (a) => a.slice().reverse();
  const idOf = (c) => (typeof c === 'string' ? c : c.id);
  const mix = (groups) => { const out = []; const n = Math.max(...groups.map((g) => g.length)); for (let i = 0; i < n; i++) for (const g of groups) if (g[i] != null) out.push(g[i]); return out; };
  const count = (groups) => groups.reduce((a, g) => a + g.length, 0);
  const slotId = (s) => (typeof s === 'string' ? s : s.id);
  const sortT = (slots, groups) => ({ sort: Object.fromEntries(slots.map((s, i) => [slotId(s), groups[i].map(idOf)])) });
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  const CH = (prompt, options, answer, explain, d) => ({ type: 'choice', prompt, options, answer, difficulty: d || 0.15, explain });

  // 반 투표 그림그래프 시연(chart picture read): rows = [[카드 글, 가상의 친구 수], …] — 시연 단추는 가장 많은 줄을 고른다
  const VOTE = (title, rows, question) => {
    const top = rows.reduce((b, r, i) => (r[1] > rows[b][1] ? i : b), 0);
    return {
      tool: 'chart',
      options: { type: 'picture', mode: 'read', title: `${title}(가상의 반 투표)`, unit: '명', xLabel: '고른 카드', yLabel: '고른 친구 수', data: rows, icons: [{ value: 5, name: '5명' }, { value: 1, name: '1명' }], icon: 'person', question, choices: rows.map((r) => r[0]) },
      sequence: [{ pick: top }],
    };
  };

  // 차례 놓기(timeline·story order): 기본 = 장면 전부, 쉬움 = drop 번째를 뺀 판, 도전 = 틀린 카드(trap) 한 장이 섞여 그것을 빼고 놓는다
  //   base.named = 이야기 칸 이름(처음·다음·끝)을 쓴다(story). 없으면 자리 수만 준다(timeline).
  const NAMED = { 2: ['처음', '끝'], 3: ['처음', '다음', '끝'], 4: ['처음', '다음', '그다음', '끝'] };
  const ORD = (prompt, base, steps, drop, trap, d, more) => {
    const o = Object.assign({}, base); const named = o.named; delete o.named;
    const sl = (n) => (named ? NAMED[n] : n);
    const ids = steps.map((c) => c.id);
    const easy = steps.filter((_, i) => i !== drop);
    const mixed = steps.slice(); mixed.splice(Math.min(2, mixed.length), 0, trap);
    const p = strip(prompt);
    return {
      prompt, toolOptions: Object.assign(o, { mode: 'order', slots: sl(steps.length), cards: rev(steps) }), target: { order: ids }, difficulty: d,
      levels: {
        easy: { prompt: `${p}(${easy.length}장).`, toolOptions: { slots: sl(easy.length), cards: rev(easy) }, target: { order: easy.map((c) => c.id) } },
        challenge: { prompt: `${p}. 틀린 카드 한 장은 빼요.`, toolOptions: { cards: rev(mixed) }, target: { order: ids } },
      },
      ...more,
    };
  };

  // 차례 놓기, 도전 = 카드 한 장(add)을 더 놓는다(자리도 하나 늘어남). 쉬움·기본은 ORD 와 같다. timeline 전용(자리 이름 없음)
  const ORDX = (prompt, base, steps, drop, add, d, more) => {
    const r = ORD(prompt, base, steps, drop, add, d, more);
    const all = steps.concat([add]);
    r.levels.challenge = { prompt: `${strip(prompt)}(${all.length}장).`, toolOptions: { slots: all.length, cards: rev(all) }, target: { order: all.map((c) => c.id) } };
    return r;
  };
  // 활동 문항 꼴을 출구 교구 질문으로(옵션 이름만 다르다)
  const EXIT = (tool, it) => ({ type: 'tool', tool, options: it.toolOptions, prompt: it.prompt, target: it.target, difficulty: it.difficulty, levels: it.levels });

  // 짝 잇기(emotion·timeline match): rows = [[왼쪽 말, 카드 글], …]. 쉬움 = 앞 ne줄, 기본 = 앞 nb줄, 도전 = 모든 줄(+ 함정 카드 trap)
  const MT = (prompt, base, rows, ne, nb, trap, d, more) => {
    const slots = rows.map((r, i) => ({ id: `r${i + 1}`, label: r[0] }));
    const tg = (n) => ({ match: Object.fromEntries(rows.slice(0, n).map((r, i) => [`r${i + 1}`, r[1]])) });
    const cardsOf = (n, t) => { const c = rows.slice(0, n).map((r) => r[1]); if (t) c.splice(1, 0, t); return rev(c); };
    const p = strip(prompt); const nc = rows.length;
    const lv = { easy: { prompt: `${p}(${ne}줄).`, toolOptions: { slots: slots.slice(0, ne), cards: cardsOf(ne) }, target: tg(ne) } };
    if (nc > nb || trap) lv.challenge = { prompt: `${p}${nc > nb ? `(${nc}줄)` : ''}${trap ? '. 남는 카드가 하나 있어요' : ''}.`, toolOptions: { slots, cards: cardsOf(nc, trap) }, target: tg(nc) };
    return { prompt, toolOptions: Object.assign({}, base, { mode: 'match', slots: slots.slice(0, nb), cards: cardsOf(nb) }), target: tg(nb), difficulty: d, levels: lv, ...more };
  };

  // 나누기(sortboard 글 카드·mindmap sort): 기본 = groups, 쉬움 = 칸마다 앞에서 ne장, 도전 = 칸마다 hard 카드를 더함
  const SORT = (prompt, base, slots, groups, ne, hard, d, more) => {
    const easyG = groups.map((g, i) => g.slice(0, Array.isArray(ne) ? ne[i] : ne));
    const hardG = groups.map((g, i) => g.concat(hard[i] || []));
    const p = strip(prompt);
    return {
      prompt, toolOptions: Object.assign({}, base, { slots, cards: mix(groups) }), target: sortT(slots, groups), difficulty: d,
      levels: {
        easy: { prompt: `${p}(${count(easyG)}장).`, toolOptions: { cards: mix(easyG) }, target: sortT(slots, easyG) },
        challenge: { prompt: `${p}(${count(hardG)}장).`, toolOptions: { cards: mix(hardG) }, target: sortT(slots, hardG) },
      },
      ...more,
    };
  };

  // 어떻게 할까 고르기(emotion branch): 기본 보기 전부, 쉬움 = 바른 보기 + 첫 틀린 보기, 도전 = 결과·마음은 맞힌 뒤에만 보인다
  const BR = (prompt, situation, choices, ok, d, more) => {
    const easy = [choices.find((c) => c.id === ok), choices.find((c) => c.id !== ok)];
    return {
      prompt, toolOptions: { mode: 'branch', situation, choices }, target: { choice: ok }, difficulty: d,
      levels: { easy: { toolOptions: { choices: easy } }, challenge: { toolOptions: { revealAfterCheck: true } } },
      ...more,
    };
  };

  // 갈림길(dilemma): 기본 = 장면 둘(보기 3개), 쉬움 = 첫 장면만(바른 보기 + 첫 틀린 보기), 도전 = 끝에서 근거 카드 2장 고르기
  //   good: 받는 길 목록(첫 길의 첫 선택이 쉬움 단계의 바른 보기). 바른 첫 보기에는 쉬움 단계 끝 글(ending)을 적는다.
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

  // 칸 지도 핀: 도전 단계는 '왜·어느 쪽' 보기 고르기를 함께 한다(ask)
  const PIN = (map, prompt, target, ask, d, more) => ({
    prompt, toolOptions: map, target, difficulty: d,
    levels: { challenge: { prompt: `${strip(prompt)}. ${ask.tail || '물음에도 답해요'}.`, toolOptions: { ask: { q: ask.q, choices: ask.choices } }, target: Object.assign({}, target, { pick: ask.answer }) } },
    ...more,
  });
  // 지도를 보고 고르기만 하는 문항(핀 잠금)
  const MQ = (prompt, map, q, choices, pick, d, more) => ({ prompt, toolOptions: Object.assign({}, map, { readOnly: true, ask: { q, choices } }), target: { pick }, difficulty: d, ...more });

  // 스스로 점검(timer selfCheck) 출구 질문: 쉬움 앞 2칸, 기본 앞 3칸, 도전 4칸
  const SELF = (title, checks, prompt) => ({
    type: 'tool', tool: 'timer', options: { title }, prompt: prompt || '오늘 한 것에 스스로 표시해요.', target: { selfCheck: checks.slice(0, 3) }, difficulty: 0.1,
    levels: { easy: { target: { selfCheck: checks.slice(0, 2) } }, challenge: { target: { selfCheck: checks.slice(0, 4) } } },
  });

  // 우리나라 칸 지도(한반도를 6×9 칸으로 줄인 그림 — 칸 자리는 위치 관계만 살린다. 위가 북쪽). 기존 차시 g3-cc-days 와 같은 칸.
  const KOR_LAND = [[1, 0], [2, 0], [3, 0], [4, 0], [1, 1], [2, 1], [3, 1], [4, 1], [1, 2], [2, 2], [3, 2], [4, 2],
    [1, 3], [2, 3], [3, 3], [1, 4], [2, 4], [3, 4], [1, 5], [2, 5], [3, 5], [1, 6], [2, 6], [3, 6], [1, 7], [2, 7], [3, 7]];
  const KOR_SEA = [[0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8], [4, 3], [4, 4], [4, 5], [4, 6], [4, 7], [4, 8],
    [5, 2], [5, 3], [5, 4], [5, 5], [5, 6], [5, 7], [5, 8], [1, 8], [2, 8], [3, 8]];
  const KOR = (places, more) => Object.assign({ grid: [6, 9], title: '우리나라 칸 지도', regions: [{ name: '우리나라 땅', cells: KOR_LAND, color: 'mint' }], regionNames: false, sea: KOR_SEA, places }, more || {});
  const P = {
    seoul: { name: '서울', icon: 'capital', at: [2, 5] }, incheon: { name: '인천', icon: 'port', at: [1, 5] },
    cheonan: { name: '천안', icon: 'heritage', at: [2, 6] }, daegu: { name: '대구', icon: 'city', at: [3, 6] },
    gwangju: { name: '광주', icon: 'city', at: [1, 7] }, busan: { name: '부산', icon: 'port', at: [3, 7] },
    jeju: { name: '제주도', icon: 'island', at: [1, 8] }, pyongyang: { name: '평양', icon: 'city', at: [1, 3] },
    najo: { name: '나주', icon: 'station', at: [2, 7] }, gangneung: { name: '강릉', icon: 'city', at: [3, 4] },
    panmun: { name: '판문점', icon: 'dot', at: [2, 4] },
  };
  // 나라 밖 독립운동 칸 지도(위가 북쪽 — 중국 땅과 한반도를 단순하게 줄인 그림, 칸 자리는 방향 관계만 살린다)
  const ABROAD = {
    grid: [6, 5], title: '나라 밖 독립운동 칸 지도', regionNames: true,
    regions: [
      { name: '중국', cells: [[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [1, 1], [2, 1], [3, 1], [0, 2], [1, 2], [2, 2], [3, 2], [0, 3], [1, 3], [2, 3], [0, 4], [1, 4]], color: 'cream' },
      { name: '우리나라', cells: [[4, 1], [4, 2], [5, 2], [4, 3], [5, 3]], color: 'mint' },
    ],
    sea: [[4, 0], [5, 0], [5, 1], [3, 3], [2, 4], [3, 4], [4, 4], [5, 4]],
    places: [{ name: '하얼빈', icon: 'station', at: [3, 0] }, { name: '상하이', icon: 'city', at: [1, 4] }, { name: '서울', icon: 'capital', at: [4, 2] }],
  };
  // 고조선 칸 지도(교과서 서술 '요령 지방과 한반도 북부'를 단순하게 줄인 그림 — 경계는 정확한 국경이 아니다)
  const GOJO = {
    grid: [6, 6], title: '고조선 칸 지도', regionNames: false,
    regions: [
      { name: '고조선 땅', cells: [[0, 0], [1, 0], [2, 0], [0, 1], [1, 1], [2, 1], [3, 1], [2, 2], [3, 2]], color: 'buttercup' },
      { name: '한반도 남쪽', cells: [[2, 3], [3, 3], [2, 4], [3, 4], [3, 5]], color: 'mint' },
    ],
    sea: [[0, 2], [1, 2], [0, 3], [1, 3], [4, 2], [4, 3], [4, 4], [5, 2], [5, 3], [5, 4], [5, 5], [0, 4], [1, 4], [0, 5], [1, 5], [2, 5], [4, 5]],
    places: [{ name: '평양', icon: 'city', at: [2, 2] }, { name: '서울', icon: 'capital', at: [3, 3] }, { name: '부산', icon: 'port', at: [3, 5] }],
  };
  // 활동지 전용 작은 지도(6×4) — 9줄 지도는 인쇄 글자가 작다
  const KORW_LAND = [[1, 0], [2, 0], [3, 0], [1, 1], [2, 1], [3, 1], [1, 2], [2, 2], [3, 2], [2, 3], [3, 3], [1, 3]];
  const KORW_SEA = [[0, 1], [0, 2], [0, 3], [4, 0], [4, 1], [4, 2], [4, 3], [5, 0], [5, 1], [5, 2], [5, 3]];
  const KORW = (places) => ({ grid: [6, 4], regions: [{ name: '우리나라 땅', cells: KORW_LAND, color: 'mint' }], regionNames: false, sea: KORW_SEA, places });
  const PW = {
    seoul: { name: '서울', icon: 'capital', at: [2, 1] }, cheonan: { name: '천안', icon: 'heritage', at: [2, 2] },
    gwangju: { name: '광주', icon: 'city', at: [1, 3] }, busan: { name: '부산', icon: 'port', at: [3, 3] },
    incheon: { name: '인천', icon: 'port', at: [1, 1] },
  };
  // 지도 활동 단계: 쉬움 = 이름·읽기 글자, 기본 = 이름만, 도전 = 문항마다 방위·까닭 보기(PIN)
  const MAP_LV = { easy: { names: true, readout: true }, base: { names: true }, challenge: { names: true } };
  const CARD_LV = { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } };
  const BOARD_LV = { easy: { instant: true, showCount: true }, base: {}, challenge: { shuffle: true } };

  // ======================================================================================================
  // 3·1절 — 만세 운동이 퍼진 길 (3.1 국경일)
  // ======================================================================================================
  {
    const C3 = T('march1', 3); const C4 = T('march1', 4);
    M.push(
      C3({
        id: 'days.e34.march1.intro.why3', type: 'intro', title: '만세 장면, 무엇이 궁금할까',
        method: '만세 장면 보고 궁금한 점 고르기 — 반 투표 그림그래프', tool: 'chart', minutes: 6,
        levels: { easy: '궁금한 점 카드 두 줄(왜·어디까지)만 그림 수를 함께 세어 읽는다.', base: '세 줄의 그림 수를 견주어 가장 많이 고른 궁금한 점을 찾는다.', challenge: '그래프를 읽은 뒤 카드에 없는 내 질문을 하나 만들어 짝에게 말한다.' },
        intro: {
          teacher: '"1919년 3월 1일, 사람들이 태극기를 들고 만세를 불렀어요. 이 그림을 보면 무엇이 궁금한가요?" 가상의 3학년 한 반이 고른 궁금한 점 그림그래프를 보이며 "큰 사람 그림 하나는 5명이에요"라고 알리고, 시연 단추로 가장 많이 고른 줄이 골라지는 것을 보인다(기다릴 반응: "어디까지 퍼졌어요?"). "서울에서만 했어요"라는 말이 나오면 "오늘 시간 띠와 지도로 정말 그런지 확인해 봐요"라고 되물어 둔다.',
          student: '그림그래프를 읽고 친구들이 가장 많이 고른 궁금한 점을 찾아요. 나는 무엇이 궁금한지 짝에게 말해요.',
          demo: VOTE('3·1운동에서 궁금한 점', [['왜 만세를 불렀을까', 7], ['어디까지 퍼졌을까', 11], ['누가 함께했을까', 5]], '가장 많이 고른 궁금한 점은?'),
          art: { draw: 'a crowd of paper people raising small paper flags in front of an old city gate, paper hills and villages behind them', banner: '1919년 3월 1일', extra: [{ motif: 'flower', x: 300, y: 214, color: 'rose', s: 0.6 }] },
        },
        notes: '그래프 수는 가상의 반이다. 우리 반 투표를 따로 할 때는 손을 들어 세고 칠판에 그림을 붙인다.',
      }),
      C3({
        id: 'days.e34.march1.activity.line3', type: 'activity', title: '3·1운동 차례 시간 띠',
        method: '3·1운동 차례 시간 띠', tool: 'timeline', minutes: 14,
        levels: { easy: '카드 한 장이 빠진 판(3장)에 놓고, 놓으면 바로 맞는지 알려 준다.', base: '카드 4장을 다 놓은 뒤 확인한다.', challenge: '틀린 카드 한 장이 섞인 판에서 그것을 빼고 놓은 뒤, 왜 뺐는지 짝에게 설명한다.' },
        activity: {
          title: '3·1운동 차례 시간 띠', tool: 'timeline',
          teacher: '"만세 소리는 한꺼번에 전국에서 터졌을까요, 한 곳에서 시작해 퍼졌을까요?" 카드를 놓을 때마다 "먼저 ○○, 그다음 ○○" 틀로 짝에게 읽게 한다. 1945년 광복 카드를 1919년 사이에 끼우는 학생에게는 "1919와 1945 가운데 어느 수가 더 작아요?"라고 연도를 견주게 한다. 서울에서 시작해 전국과 나라 밖으로 퍼졌다는 것을 짚는다.',
          task: '3·1운동과 관련된 일을 일어난 차례대로 시간 띠에 놓아요.', levels: CARD_LV,
          items: [
            ORD('3·1운동이 퍼진 차례대로 놓아요.', { axis: ['먼저', '나중'] }, [{ id: 'declare', text: '독립 선언서 발표', motif: 'star' }, { id: 'park', text: '탑골공원 만세', motif: 'flower' }, { id: 'nation', text: '전국으로 퍼짐', motif: 'mountain' }, { id: 'abroad', text: '나라 밖으로 퍼짐', motif: 'wave' }], 3,
              { id: 'lib', text: '광복을 맞음', why: '광복은 1945년이라 3·1운동이 퍼진 차례에 들지 않아요.' }, 0.2),
            ORD('나라를 빼앗긴 때부터 차례대로 놓아요.', { axis: ['옛날', '오늘날'] }, [{ id: 'lost', text: '나라를 빼앗김', big: '1910' }, { id: 'mansei', text: '3·1운동', big: '1919' }, { id: 'gov', text: '임시 정부 수립', big: '1919' }, { id: 'lib', text: '광복', big: '1945' }], 2,
              { id: 'wrong', text: '3·1운동', big: '1945', why: '3·1운동은 1919년에 일어났어요.' }, 0.25),
            MT('때와 그때 일어난 일을 이어요.', { axis: ['옛날', '오늘날'] }, [['1919년 3월', '3·1운동'], ['1919년 4월', '임시 정부 수립'], ['1945년 8월', '광복']], 2, 3, '한글 창제', 0.25,
              { conclude: '3·1운동은 1919년 서울에서 시작해 전국과 나라 밖으로 퍼졌고, 한 달 뒤 임시 정부 수립으로 이어졌어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 수를 써요.', text: '3·1운동은 ___년 3월 1일에 일어났어요.', answer: '1919' }] },
      }),
      C3({
        id: 'days.e34.march1.activity.map3', type: 'activity', title: '서울·천안 만세 장소 찾기',
        method: '서울·천안 만세 장소 핀', tool: 'map', minutes: 13,
        levels: { easy: '장소 이름과 핀 자리 읽기 글자가 보이는 지도에 핀을 꽂는다.', base: '장소 이름만 보이는 지도에 핀을 꽂는다.', challenge: '핀을 꽂은 뒤 두 곳이 서로 어느 쪽에 있는지 방위 보기도 고른다.' },
        activity: {
          title: '서울·천안 만세 장소 찾기', tool: 'map',
          teacher: '"지도 위쪽이 북쪽이에요. 탑골공원은 어느 도시에 있을까요?" 먼저 북쪽을 손으로 가리키게 한 뒤 핀을 꽂는다. 유관순이 고향 천안의 아우내 장터에서 만세 운동을 이끌었다는 이야기를 짧게 들려준다. 천안을 바다 칸에 꽂는 학생에게는 "서울에서 아래쪽, 땅 위의 칸을 찾아볼까요?"라고 되묻는다.',
          task: '칸 지도에서 3·1운동과 관련된 곳에 핀을 꽂고 물음에 답해요.', levels: MAP_LV,
          items: [
            PIN(KOR([P.seoul, P.cheonan, P.daegu, P.busan]), '탑골공원이 있는 서울에 핀을 꽂아요.', { place: '서울' }, { q: '서울은 천안의 어느 쪽에 있나요?', choices: ['북쪽', '남쪽'], answer: 0, tail: '방위도 골라요' }, 0.1),
            PIN(KOR([P.seoul, P.cheonan, P.gwangju, P.busan]), '아우내 장터가 있는 천안에 핀을 꽂아요.', { place: '천안' }, { q: '천안은 서울의 어느 쪽에 있나요?', choices: ['북쪽', '남쪽'], answer: 1, tail: '방위도 골라요' }, 0.2),
            MQ('여러 도시를 보고 3·1운동이 일어난 곳을 골라요.', KOR([P.seoul, P.cheonan, P.gwangju, P.busan, P.daegu]), '3·1운동은 어디에서 일어났나요?', ['서울에서만', '서울과 전국 여러 곳'], 1, 0.2,
              { conclude: '3·1운동은 서울에서 시작해 천안처럼 전국 여러 곳으로 퍼졌어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'figure', wide: true, prompt: '지도에서 서울에 ○, 천안에 △ 해요.', tool: 'map', figures: [{ options: KORW([PW.seoul, PW.cheonan, PW.busan]), caption: '우리나라 칸 지도' }], answer: '서울 ○, 서울 아래 천안 △' }] },
      }),
      C3({
        id: 'days.e34.march1.wrap.talk3', type: 'wrap', title: '짝에게 퍼진 길 설명하기',
        method: '짝과 퍼진 길 설명', tool: 'timer', minutes: 7,
        levels: { easy: '한 사람 30초, 퍼진 길을 1문장으로 말한다(점검 1칸).', base: '한 사람 60초, 지도를 짚으며 2문장으로 말한다(점검 2칸).', challenge: '한 사람 90초, 시작·퍼짐·이어짐을 3문장으로 말한다(점검 3칸).' },
        wrap: {
          teacher: '"지도를 손가락으로 짚으면서 3·1운동이 어디에서 시작해 어디로 퍼졌는지 짝에게 말해 볼까요?" 타이머를 함께 맞추고 한 사람이 말하는 동안 다른 사람은 듣고 고개를 끄덕이게 한다. "서울에서만 했어요"라고 말하는 짝이 있으면 듣는 사람이 "천안은?"이라고 물어 주게 한다. 출구 2번에서 1945년을 고른 학생에게는 시간 띠의 1919 카드를 다시 보게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '짝과 번갈아 말하기', labels: ['말하기', '바꾸기'], plan: { work: 20, rest: 10, rounds: 1 } }, prompt: '한 사람 60초씩 두 번 말하도록 맞추고 점검해요.', target: { plan: { work: 60, rounds: 2 }, selfCheck: ['지도를 짚으며 말했어요', '퍼진 차례를 2문장으로'] }, difficulty: 0.15,
              levels: {
                easy: { prompt: '한 사람 30초씩 두 번 말하도록 맞추고 점검해요.', target: { plan: { work: 30, rounds: 2 }, selfCheck: ['퍼진 길을 1문장으로'] } },
                challenge: { prompt: '한 사람 90초씩 두 번 말하도록 맞추고 점검해요.', target: { plan: { work: 90, rounds: 2 }, selfCheck: ['지도를 짚으며 말했어요', '시작·퍼짐·이어짐 3문장', '짝의 말을 듣고 물었어요'] } },
              } },
            CH('3·1운동이 일어난 해는 언제인가요?', ['1919년', '1945년', '1950년'], 0, '3·1운동은 1919년 3월 1일에 일어났어요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '만세 운동이 퍼진 길',
          items: [
            { type: 'choice', prompt: '3·1운동을 시작하며 발표한 것에 ○ 해요.', options: ['독립 선언서', '훈민정음'], answer: '독립 선언서' },
            { type: 'short', prompt: '3·1운동이 퍼진 길을 한 문장으로 써요.' },
          ],
          easy: { note: '"서울에서 시작해 ○○로 퍼졌어요." 틀을 써요.', items: [{ type: 'draw', prompt: '태극기를 들고 만세를 부르는 모습을 그려요.' }] },
        },
      }),

      C4({
        id: 'days.e34.march1.intro.photo4', type: 'intro', title: '이 사람은 무엇을 했을까',
        method: '인물 그림 보고 한 일 짐작 — 반 투표 그림그래프', tool: 'chart', minutes: 6,
        levels: { easy: '한 일 카드 두 줄만 그림 수를 함께 세어 읽는다.', base: '세 줄을 견주어 가장 많이 고른 카드를 찾고, 정말 그랬는지 교사의 설명을 듣는다.', challenge: '고른 카드의 까닭(그림의 무엇을 보고 짐작했는지)을 짝에게 말한다.' },
        intro: {
          teacher: '"한복을 입은 학생이 장터에서 태극기를 들고 있어요. 이 사람은 무엇을 했을까요?" 가상의 4학년 한 반이 짐작한 카드 그림그래프를 함께 읽고 시연 단추로 가장 많이 고른 줄을 보인다. 그다음 "이 사람은 유관순이에요. 이화학당 학생이었고, 고향 천안의 아우내 장터에서 만세 운동을 이끌었어요"라고 사실을 알려 준다. "유관순 혼자 만세를 불렀어요?"라는 질문에는 "장날에 모인 많은 사람과 함께였어요"라고 답한다.',
          student: '그림그래프에서 친구들이 가장 많이 짐작한 카드를 찾아요. 그림의 무엇을 보고 짐작했는지 짝에게 말해요.',
          demo: VOTE('그림 속 사람이 한 일 짐작', [['만세 운동을 이끎', 12], ['학교를 세움', 4], ['책을 씀', 6]], '가장 많이 고른 카드는?'),
          art: { draw: 'a young student in a paper hanbok holding a small paper flag at a busy country market, paper hills behind', banner: '이 사람은 무엇을 했을까', extra: [{ motif: 'flower', x: 300, y: 214, color: 'rose', s: 0.6 }] },
        },
        notes: '그래프 수는 가상의 반이다. 실존 인물의 마음이나 말을 지어내지 않고, 공식 자료에 있는 한 일만 말한다.',
      }),
      C4({
        id: 'days.e34.march1.activity.story4', type: 'activity', title: '유관순 활동 차례 놓기',
        method: '유관순 활동 차례 놓기', tool: 'story', minutes: 14,
        levels: { easy: '장면 3장, 놓으면 바로 맞는지 알려 준다.', base: '장면 4장을 차례대로 놓은 뒤 확인한다.', challenge: '틀린 장면 1장이 섞인 판에서 그것을 빼고 놓고, 셋째 문항의 해설 말풍선 빈칸까지 채운다.' },
        activity: {
          title: '유관순 활동 차례 놓기', tool: 'story',
          teacher: '"학교가 문을 닫은 뒤 유관순은 어디로 갔을까요?" 장면마다 "그래서"로 이어 말하게 한다. 아우내 장터 만세를 서울 만세보다 앞에 두는 학생에게는 "서울에서 먼저 만세 운동을 겪고 고향으로 내려갔어요"라고 짚는다. 형무소 장면은 갇혔다는 사실만 말하고, 고문 같은 장면은 묘사하지 않는다.',
          task: '유관순의 활동과 아우내 장터 만세 운동을 차례대로 놓아요.', levels: CARD_LV,
          items: [
            ORD('유관순의 활동을 차례대로 놓아요.', { named: true, title: '유관순의 활동' }, [{ id: 'seoul', text: '서울 만세에 참여', motif: 'flower' }, { id: 'home', text: '고향 천안으로 감', motif: 'house' }, { id: 'aunae', text: '아우내 장터 만세', motif: 'sun' }, { id: 'prison', text: '서대문 형무소에 갇힘', motif: 'moon' }], 1,
              { id: 'gov', text: '임시 정부를 이끎', why: '임시 정부를 이끈 것은 유관순의 활동이 아니에요.' }, 0.25),
            ORD('아우내 장터 만세 운동을 차례대로 놓아요.', { named: true, title: '아우내 장터' }, [{ id: 'flag', text: '태극기를 몰래 만듦', motif: 'leaf' }, { id: 'gather', text: '장날 사람들이 모임', motif: 'house' }, { id: 'shout', text: '함께 만세를 부름', motif: 'sun' }], 0,
              { id: 'alone', text: '혼자 만세를 부름', why: '장날에 모인 많은 사람이 함께 만세를 불렀어요.' }, 0.2),
            { prompt: '이야기꾼의 해설 빈칸을 채워요.', toolOptions: { mode: 'fill', title: '해설(가상의 이야기꾼)', cards: ['많은 사람', '혼자', '외국 군인'], slots: [{ id: 'b1', who: '이야기꾼', motif: 'sun', label: '장날에 모인 ___이 함께 만세를 불렀어요.' }] }, target: { fill: { b1: '많은 사람' } }, difficulty: 0.15,
              conclude: '유관순은 서울에서 만세 운동에 참여한 뒤 고향 아우내 장터에서 많은 사람과 함께 만세 운동을 이끌었어요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '유관순의 활동을 차례대로 써요.', columns: ['차례', '한 일'], cells: [['1', ''], ['2', ''], ['3', '']], answer: '서울 만세 운동 참여 / 고향 천안으로 내려감 / 아우내 장터 만세 운동을 이끎' }] },
        notes: '이야기꾼은 가상이다. 유관순의 마음이나 말을 지어 말풍선에 넣지 않는다.',
      }),
      C4({
        id: 'days.e34.march1.activity.link4', type: 'activity', title: '3·1운동과 임시 정부 잇기',
        method: '3·1운동과 임시 정부 잇기', tool: 'emotion', minutes: 13,
        levels: { easy: '짝 2줄을 잇는다.', base: '짝 3줄을 잇는다.', challenge: '남는 함정 카드가 하나 섞인 판에서 3줄을 잇고, 고른 근거를 짝에게 말한다.' },
        activity: {
          title: '3·1운동과 임시 정부 잇기', tool: 'emotion',
          teacher: '"이 일이 있었기 때문에 무엇이 생겼을까요?" 왼쪽 글을 읽고 "그래서"를 붙여 오른쪽 카드를 소리 내어 이어 읽게 한다. 임시 정부를 광복 뒤에 두는 학생에게는 "\'임시\'는 잠시 대신한다는 뜻이에요. 나라를 되찾기 전일까요, 뒤일까요?"라고 묻는다. 3·1운동으로 모인 독립의 뜻이 1919년 4월 대한민국 임시 정부 수립으로 이어졌다는 것을 짚는다.',
          task: '3·1운동과 그 뒤에 일어난 일을 까닭과 결과로 이어요.', levels: { easy: { showBack: true }, base: {}, challenge: {} },
          items: [
            MT('까닭과 그 결과를 이어요.', { weather: false }, [['3·1운동으로 독립의 뜻이 모임', '임시 정부 수립'], ['탑골공원에서 만세를 부름', '전국으로 퍼짐'], ['서울의 학교가 문을 닫음', '유관순이 고향에 감']], 2, 3, '한글을 만듦', 0.25),
            MT('때와 그때의 일을 이어요.', { weather: false }, [['1919년 3월', '3·1운동'], ['1919년 4월', '임시 정부 수립'], ['1945년 8월', '광복']], 2, 3, '6·25전쟁', 0.25),
            MT('이름과 한 일을 이어요.', { weather: false }, [['대한민국 임시 정부', '독립운동을 이끎'], ['유관순', '아우내 장터 만세'], ['독립 선언서', '독립을 알림']], 2, 3, '비의 양을 잼', 0.3,
              { conclude: '3·1운동으로 모인 독립의 뜻이 한 달 뒤 대한민국 임시 정부 수립으로 이어졌어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '3·1운동 뒤 1919년 4월에 대한민국 ___ 정부가 세워졌어요.', answer: '임시' }] },
      }),
      C4({
        id: 'days.e34.march1.wrap.letter4', type: 'wrap', title: '고마운 분께 짧은 편지',
        method: '고마운 분께 짧은 편지', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 시작 틀을 보고 빈칸을 채우듯 1~2문장을 쓴다(점검 2칸).', base: '세 문장 편지를 쓰고 기준표 3칸(사실·마음·세 문장)을 점검한다.', challenge: '오늘 배운 사실을 두 가지 넣어 세 문장 이상 쓰고 점검한다.' },
        wrap: {
          teacher: '"3·1운동에 함께한 분들께 고마운 마음을 전한다면 어떤 사실을 넣을까요?" 첫 문장에 누구에게 쓰는지, 둘째 문장에 그분이 한 일(사실), 셋째 문장에 내 마음을 쓰게 한다. "용감하셨어요"만 쓰는 학생에게는 "무엇을 하셔서 용감하다고 느꼈나요? 오늘 놓은 카드에서 찾아볼까요?"라고 묻는다. 이름·주소 같은 내 정보는 쓰지 않게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'rubric-writing', options: { topic: '3·1운동에 함께한 분께 고마운 마음을 세 문장으로 써요.', minChars: 30, maxChars: 200, minSentences: 3, maxSentences: 5, starter: '○○께, ○○해 주셔서 고맙습니다.', placeholder: '내 이름과 주소는 쓰지 않아요.', sample: '유관순 열사께. 아우내 장터에서 많은 사람과 만세 운동을 이끄셨지요. 나라를 되찾으려 애써 주셔서 고맙습니다.' },
              prompt: '고마운 분께 세 문장 편지를 쓰고 점검해요.', target: { selfCheck: ['한 일(사실)을 썼어요', '고마운 마음을 썼어요', '세 문장으로 썼어요'], mustInclude: [['만세', '독립', '태극기', '임시 정부', '선언서']] }, difficulty: 0.2,
              levels: {
                easy: { prompt: '틀을 보고 고마운 마음을 한두 문장으로 써요.', toolOptions: { minChars: 12, minSentences: 1, maxSentences: 2, starter: '○○께, ○○해 주셔서 고맙습니다.' }, target: { selfCheck: ['한 일(사실)을 썼어요', '고마운 마음을 썼어요'], mustInclude: [['만세', '독립', '태극기', '임시 정부', '선언서']] } },
                challenge: { prompt: '배운 사실 두 가지를 넣어 편지를 쓰고 점검해요.', target: { selfCheck: ['한 일(사실)을 썼어요', '고마운 마음을 썼어요', '세 문장으로 썼어요'], mustInclude: [['만세', '태극기', '선언서'], ['임시 정부', '아우내', '독립']] } },
              } },
            CH('3·1운동 뒤 독립운동을 이끌려고 세운 것은?', ['대한민국 임시 정부', '조선 총독부'], 0, '3·1운동 뒤 1919년 4월 대한민국 임시 정부가 세워졌어요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '고마운 분께',
          items: [
            { type: 'choice', prompt: '유관순이 만세 운동을 이끈 곳에 ○ 해요.', options: ['아우내 장터', '하얼빈역'], answer: '아우내 장터' },
            { type: 'short', prompt: '3·1운동이 우리 역사에 남긴 결과를 한 문장으로 써요.' },
          ],
          easy: { note: '"○○께, ○○해 주셔서 고맙습니다." 틀을 써요.', items: [{ type: 'draw', prompt: '고마운 분께 드릴 꽃이나 태극기를 그려요.' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 과학의 날 — 옛 과학과 탐구 과정 (4.21 법정기념일, 과학기술정보통신부)
  // ======================================================================================================
  {
    const C3 = T('science', 3); const C4 = T('science', 4);
    const RAIN = [['월', 12], ['화', 3], ['수', 20], ['목', 8], ['금', 15]];
    M.push(
      C3({
        id: 'days.e34.science.intro.guess3', type: 'intro', title: '이 옛 과학 유산의 이름은?',
        method: '옛 과학 유산 그림 이름 고르기 — 반 투표 그림그래프', tool: 'chart', minutes: 6,
        levels: { easy: '이름 카드 두 줄(첨성대·측우기)만 그림 수를 함께 세어 읽는다.', base: '세 줄을 견주어 가장 많이 고른 이름을 찾고, 맞는 이름을 확인한다.', challenge: '네 줄(앙부일구까지)을 모두 읽고, 그림의 어디를 보고 이름을 골랐는지 말한다.' },
        intro: {
          teacher: '"돌을 둥글게 쌓아 올린 이 탑은 무엇에 쓰였을까요? 이름이 무엇일까요?" 가상의 3학년 한 반이 고른 이름 그림그래프를 함께 읽고 시연 단추로 가장 많이 고른 줄을 보인 뒤, "이것은 신라 선덕 여왕 때 하늘과 별을 살핀 첨성대예요"라고 알린다. "옛날 사람들은 과학을 몰랐어요"라는 말이 나오면 "비의 양을 재고 물로 시각을 알린 기구도 있었어요. 오늘 하나씩 만나 봐요"라고 되묻는다. 과학의 날은 4월 21일이고 4월은 과학의 달이라고 덧붙인다.',
          student: '그림그래프에서 친구들이 가장 많이 고른 이름을 찾아요. 그림의 어디를 보고 골랐는지 짝에게 말해요.',
          demo: VOTE('돌탑 그림의 이름', [['첨성대', 10], ['측우기', 4], ['자격루', 5], ['앙부일구', 3]], '가장 많이 고른 이름은?'),
          art: { draw: 'a round paper stone observatory tower under a starry paper night sky, a paper rain gauge and a water clock nearby', banner: '우리 과학 문화유산', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup', s: 0.6 }] },
        },
        notes: '그래프 수는 가상의 반이다. 문화유산 사진을 함께 보이면 좋다(교과서·국가유산청 자료).',
      }),
      C3({
        id: 'days.e34.science.activity.match3', type: 'activity', title: '과학 유산과 쓰임 잇기',
        method: '유산과 인물·쓰임 잇기', tool: 'emotion', minutes: 14,
        levels: { easy: '짝 2줄을 잇고, 카드 뒷면 설명이 처음부터 보인다.', base: '짝 3줄을 잇는다.', challenge: '짝 4줄을 잇거나, 남는 함정 카드가 섞인 판에서 잇는다.' },
        activity: {
          title: '과학 유산과 쓰임 잇기', tool: 'emotion',
          teacher: '"자격루는 무엇으로 움직였을까요?" 물이 흐르는 힘으로 시각을 스스로 알린 물시계라고 알려 준다. 첨성대를 조선 것으로 잇는 학생에게는 "첨성대는 신라 때 돌을 쌓아 만들었어요. 신라와 조선 가운데 어느 나라가 먼저였을까요?"라고 묻는다. "장영실 혼자 다 만들었어요?"라는 질문에는 "세종 때 여러 학자와 기술자가 함께 만들었어요"라고 답한다.',
          task: '과학 문화유산을 쓰임·관련 인물·만든 때와 이어요.', levels: { easy: { showBack: true }, base: {}, challenge: {} },
          items: [
            MT('과학 유산과 쓰임을 이어요.', { weather: false }, [['측우기', '비의 양 재기'], ['자격루', '물로 시각 알리기'], ['첨성대', '하늘과 별 살피기'], ['앙부일구', '그림자로 시각 알기']], 2, 3, null, 0.25),
            MT('과학 유산과 관련 인물을 이어요.', { weather: false }, [['첨성대', '선덕 여왕'], ['자격루', '장영실'], ['훈민정음', '세종대왕']], 2, 3, '단군왕검', 0.25),
            MT('만든 때와 과학 유산을 이어요.', { weather: false }, [['신라', '첨성대'], ['조선 세종 때', '자격루'], ['오늘날', '기상 위성']], 2, 3, '고인돌', 0.3,
              { conclude: '첨성대는 신라 때, 측우기·자격루·앙부일구는 조선 세종 때 만든 과학 문화유산이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '과학 문화유산의 시대와 쓰임을 써요.', columns: ['문화유산', '시대', '쓰임'], cells: [['첨성대', '', ''], ['측우기', '', ''], ['자격루', '', '']], answer: '신라·하늘(별) 살피기 / 조선·비의 양 재기 / 조선·물로 시각 알리기' }] },
      }),
      C3({
        id: 'days.e34.science.activity.era3', type: 'activity', title: '시대 차례로 놓기',
        method: '시대 차례로 놓기', tool: 'timeline', minutes: 13,
        levels: { easy: '카드 2장(또는 칸마다 한두 장)을 놓고, 놓으면 바로 맞는지 알려 준다.', base: '카드 3장을 시대 차례로 놓거나 시대 칸에 나눈다.', challenge: '틀린 카드가 섞인 판에서 그것을 빼거나 카드를 더해 나누고, 까닭을 설명한다.' },
        activity: {
          title: '시대 차례로 놓기', tool: 'timeline',
          teacher: '"신라와 조선 가운데 어느 나라가 먼저였을까요?" 고조선-삼국-고려-조선 차례를 함께 읽은 뒤 카드를 놓게 한다. 첨성대를 조선 뒤에 두는 학생에게는 "신라는 삼국 시대의 나라예요"라고 알려 준다. 옛날에는 측우기로 비를 재어 기록했고 오늘날에는 기상 관측 자료로 날씨를 알려 준다는 흐름을 짚는다.',
          task: '과학 문화유산과 오늘날의 과학을 시대 차례로 놓아요.', levels: CARD_LV,
          items: [
            ORD('하늘과 날씨를 살핀 방법을 옛날부터 놓아요.', { axis: ['옛날', '오늘날'] }, [{ id: 'cheom', text: '첨성대(신라)', motif: 'star' }, { id: 'rain', text: '측우기(조선)', motif: 'cloud' }, { id: 'sat', text: '기상 위성(오늘날)', motif: 'moon' }], 1,
              { id: 'x', text: '측우기(신라)', why: '측우기는 조선 세종 때 만들었어요.' }, 0.2),
            ORD('날씨를 알아본 방법을 옛날부터 놓아요.', { axis: ['옛날', '오늘날'] }, [{ id: 'gauge', text: '측우기로 비 재기', motif: 'cloud' }, { id: 'radio', text: '라디오 일기 예보', motif: 'sun' }, { id: 'app', text: '휴대폰 날씨 앱', motif: 'star' }], 1,
              { id: 'star', text: '첨성대로 별 보기', why: '이 문항은 날씨를 알아본 방법이에요. 별 보기는 날씨 알기가 아니에요.' }, 0.25),
            SORT('과학 유산을 만든 때에 따라 나누어요.', { mode: 'sort', axis: ['옛날', '오늘날'] }, ['신라', '조선', '오늘날'], [['첨성대'], ['측우기', '자격루'], ['기상 위성']], 1, [[], ['앙부일구'], ['휴대폰 날씨 앱']], 0.3,
              { conclude: '옛날에는 측우기로 비를 재어 기록했고, 오늘날에는 기상 관측 자료로 날씨를 알려 줘요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '자격루를 만든 사람에 ○ 해요.', options: ['장영실', '선덕 여왕'], answer: '장영실' }] },
      }),
      C3({
        id: 'days.e34.science.wrap.rain3', type: 'wrap', title: '빗물 기록 그래프 읽기',
        method: '빗물 재기 기록 그래프', tool: 'chart', minutes: 7,
        levels: { easy: '사흘(3칸) 막대그래프에서 비가 가장 많이 온 날을 고른다.', base: '닷새(5칸) 막대그래프에서 비가 가장 많이 온 날을 고른다.', challenge: '닷새 그래프에서 가장 많이 온 날과 가장 적게 온 날의 차이를 수로 쓴다.' },
        wrap: {
          teacher: '"측우기로 비의 양을 재어 적어 두면 무엇이 좋을까요?" 가상의 닷새 기록 막대그래프를 함께 보고 막대 끝이 닿은 눈금을 읽게 한다. 막대가 짧은 날을 고르는 학생에게는 "막대가 길수록 비가 많이 온 거예요. 가장 긴 막대는 어디일까요?"라고 묻는다. 옛사람들이 비를 재어 기록한 것이 농사 준비에 쓰였다는 점, 오늘날 기상 관측도 기록에서 시작한다는 점을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '닷새 동안 내린 비(가상 기록)', unit: 'mm', xLabel: '요일', yLabel: '비의 양', max: 25, scale: 5, data: RAIN, question: '비가 가장 많이 온 날은?', choices: RAIN.map((r) => r[0]) }, prompt: '그래프를 읽고 비가 가장 많이 온 날을 골라요.', target: { pick: 2 }, difficulty: 0.15,
              levels: {
                easy: { prompt: '사흘 그래프에서 비가 가장 많이 온 날을 골라요.', toolOptions: { title: '사흘 동안 내린 비(가상 기록)', data: RAIN.slice(0, 3), choices: RAIN.slice(0, 3).map((r) => r[0]) }, target: { pick: 2 } },
                challenge: { prompt: '가장 많이 온 날과 적게 온 날의 차이는 몇 mm일까요?', toolOptions: { question: '가장 많은 날과 적은 날의 차이(mm)는?', choices: [] }, target: { value: 17 } },
              } },
            CH('비의 양을 재려고 만든 조선의 기구는?', ['측우기', '자격루'], 0, '측우기는 비의 양을 재는 기구예요. 자격루는 물시계예요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '우리 과학 문화유산',
          items: [
            { type: 'blank', prompt: '빈칸에 알맞은 수를 써요.', text: '과학의 날은 ___월 ___일이에요.', answer: '4, 21' },
            { type: 'short', prompt: '옛 과학 문화유산 하나를 골라 대단한 점을 써요.' },
          ],
          easy: { note: '"○○는 ○○를 할 수 있어서 대단해요." 틀을 써요.', items: [{ type: 'draw', prompt: '측우기로 빗물을 재는 모습을 그려요.' }] },
        },
        notes: '빗물 기록은 가상 자료다. 실제 측우기 기록을 보일 때는 국가기록원·기상청 자료를 쓴다.',
      }),

      C4({
        id: 'days.e34.science.intro.q4', type: 'intro', title: '그림자 그림, 무엇이 궁금할까',
        method: '궁금한 현상 질문 고르기 — 반 투표 그림그래프', tool: 'chart', minutes: 6,
        levels: { easy: '질문 카드 두 줄만 그림 수를 함께 세어 읽는다.', base: '세 줄을 견주어 가장 많이 고른 질문을 찾는다.', challenge: '카드에 없는 내 질문을 "~하면 ~할까?" 꼴로 하나 만들어 짝에게 말한다.' },
        intro: {
          teacher: '"아침과 한낮에 같은 막대의 그림자를 찍었더니 길이가 달라요. 무엇이 궁금한가요?" 가상의 4학년 한 반이 고른 질문 그림그래프를 함께 읽고 시연 단추로 가장 많이 고른 질문을 보인다. "과학자는 궁금하면 바로 답을 정해요"라는 말이 나오면 "답을 정하기 전에 무엇을 해 봐야 할까요?"라고 되물어, 예상하고 실험해 보고 기록한 뒤 결론을 낸다는 오늘의 배움으로 잇는다.',
          student: '그림그래프에서 친구들이 가장 많이 고른 질문을 찾아요. 나라면 무엇을 알아보고 싶은지 짝에게 말해요.',
          demo: VOTE('그림자 그림을 보고 궁금한 점', [['왜 길이가 달라질까', 11], ['언제 가장 짧을까', 7], ['막대가 길면 어떨까', 4]], '가장 많이 고른 질문은?'),
          art: { draw: 'a paper stick standing on paper ground with a long morning shadow and a short noon shadow side by side, a paper sun moving across the sky', banner: '무엇이 궁금할까', extra: [{ motif: 'sun', x: 300, y: 80, color: 'buttercup', s: 0.6 }] },
        },
        notes: '그래프 수는 가상의 반이다. 질문에 바로 답을 주지 않고 정리 시간의 그림자 재기로 이어 간다.',
      }),
      C4({
        id: 'days.e34.science.activity.steps4', type: 'activity', title: '탐구 과정 차례 놓기',
        method: '탐구 과정 차례 놓기', tool: 'story', minutes: 14,
        levels: { easy: '장면 3장, 놓으면 바로 맞는지 알려 준다.', base: '장면 4장(질문→예상→실험→결론)을 놓은 뒤 확인한다.', challenge: '틀린 장면 1장이 섞인 판에서 그것을 빼고 4장을 놓는다.' },
        activity: {
          title: '탐구 과정 차례 놓기', tool: 'story',
          teacher: '"결론은 언제 낼 수 있을까요? 실험 전일까요, 뒤일까요?" 실험 전에 결론을 놓는 학생에게는 "실험 결과를 보기 전에 결론을 알 수 있을까요?"라고 묻는다. 예상이 틀려도 괜찮고, 그것도 새로 알게 된 것이라고 말해 준다. 틀린 장면을 뺄 때는 왜 탐구가 아닌지 한 문장으로 말하게 한다.',
          task: '탐구하는 과정을 질문부터 결론까지 차례대로 놓아요.', levels: CARD_LV,
          items: [
            ORD('탐구하는 과정을 차례대로 놓아요.', { named: true, title: '탐구 과정' }, [{ id: 'q', text: '궁금한 점 정하기', motif: 'star' }, { id: 'guess', text: '결과 예상하기', motif: 'sun' }, { id: 'test', text: '실험하고 기록하기', motif: 'leaf' }, { id: 'end', text: '결론 내리기', motif: 'flower' }], 1,
              { id: 'first', text: '결론부터 정하기', why: '결론은 실험 결과를 보고 내려요.' }, 0.2),
            ORD('빛과 식물 탐구를 차례대로 놓아요.', { named: true, title: '빛과 식물' }, [{ id: 'q', text: '빛이 없으면 어떨까', motif: 'sun' }, { id: 'guess', text: '시들 거라고 예상', motif: 'cloud' }, { id: 'test', text: '상자 안과 밖에 둠', motif: 'house' }, { id: 'end', text: '결과로 결론 내림', motif: 'leaf' }], 2,
              { id: 'copy', text: '친구 결과 베끼기', why: '내가 해 본 결과로 결론을 내려요.' }, 0.25),
            ORD('얼음 탐구를 차례대로 놓아요.', { named: true, title: '소금과 얼음' }, [{ id: 'q', text: '소금이 얼음을 녹일까', motif: 'snow' }, { id: 'guess', text: '빨리 녹을 거라 예상', motif: 'sun' }, { id: 'test', text: '두 얼음을 견줘 봄', motif: 'leaf' }, { id: 'end', text: '결과로 결론 내림', motif: 'flower' }], 0,
              { id: 'change', text: '예상에 맞게 고쳐 적기', why: '결과는 있는 그대로 적어요.' }, 0.3,
              { conclude: '과학자는 궁금한 점을 정하고, 예상하고, 실험해 기록한 뒤 결과로 결론을 내려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '탐구 과정의 빈칸을 채워요.', text: '궁금한 점 → ___ → 실험·기록 → 결론', answer: '예상하기' }] },
      }),
      C4({
        id: 'days.e34.science.activity.attitude4', type: 'activity', title: '과학자의 태도 가려내기',
        method: '과학자의 태도 가려내기', tool: 'sortboard', minutes: 13,
        levels: { easy: '카드 4장을 두 바구니에 나누고, 틀리면 바로 돌아오며 바구니마다 장 수가 보인다.', base: '카드 6장을 나눈 뒤 확인한다.', challenge: '헷갈리는 카드 2장이 더해진 8장을 나누고, 고른 까닭을 짝에게 말한다.' },
        activity: {
          title: '과학자의 태도 가려내기', tool: 'sortboard',
          teacher: '"결과가 마음에 안 들면 바꿔 적어도 될까요?" 정직하게 기록하는 것이 과학의 기본이라고 강조한다. \'한 번 해 보고 포기\'를 필요한 태도로 넣는 학생에게는 "한 번만 해 보면 우연인지 알 수 있을까요?"라고 묻는다. 틀린 예상도 적어 두는 것이 과학자다운 태도라는 점을 짚는다.',
          task: '과학자에게 필요한 태도와 아닌 것을 바구니에 나누어요.', levels: BOARD_LV,
          items: [
            SORT('탐구 태도를 나누어요.', {}, ['필요해요', '아니에요'], [['결과를 정직하게 적기', '여러 번 해 보기', '궁금한 것 묻기'], ['결과를 바꿔 적기', '한 번 해 보고 포기', '남의 결과 베끼기']], 2, [['틀린 예상도 적기'], ['보기 좋게 꾸며 적기']], 0.2),
            SORT('실험할 때의 행동을 나누어요.', {}, ['필요해요', '아니에요'], [['보안경 쓰기', '선생님 안내 따르기', '쓴 도구 정리하기'], ['약품 맛보기', '마음대로 섞기', '실험대에서 장난']], 2, [['손 씻고 마치기'], ['냄새를 코로 바로 맡기']], 0.2),
            SORT('탐구하며 한 말을 나누어요.', {}, ['과학자다운 말', '아닌 말'], [['예상과 달라서 신기해', '한 번 더 해 보자', '기록을 다시 보자'], ['예상에 맞게 고치자', '귀찮으니 그만하자', '친구 것 베끼자']], 2, [['왜 다른지 알아보자'], ['틀렸으니 지우자']], 0.25,
              { conclude: '과학자는 결과를 정직하게 기록하고, 예상과 달라도 다시 해 보며 까닭을 찾아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '과학자다운 태도에 ○ 해요.', options: ['정직하게 기록하기', '결과 바꿔 적기'], answer: '정직하게 기록하기' }] },
      }),
      C4({
        id: 'days.e34.science.wrap.try4', type: 'wrap', title: '짝과 그림자 길이 재기',
        method: '짝과 그림자 길이 재기', tool: 'timer', minutes: 7,
        levels: { easy: '막대 그림자 길이를 한 번 재어 기록판 1칸에 적는다.', base: '짝과 두 번 재어 기록판 2칸에 적는다.', challenge: '수업 앞뒤로 시간을 바꿔 세 번 재어 3칸에 적고 달라진 점을 말한다.' },
        wrap: {
          teacher: '"막대 그림자의 길이를 재어 기록하면 궁금한 점에 답할 수 있을까요?" 교사 진행으로 운동장이나 햇빛 드는 창가에서 막대를 세우고, 한 사람은 잡고 한 사람은 자로 재게 한다. 잰 수를 기록판에 적고 "예상과 같았나요, 달랐나요?"를 묻는다. 수를 예상에 맞게 고쳐 적으려는 학생에게는 "있는 그대로 적는 것이 과학자의 약속이었지요?"라고 짚는다. 해를 맨눈으로 보지 않게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '막대 그림자 길이 기록', fields: [{ label: '1번', unit: 'cm', step: 1 }, { label: '2번', unit: 'cm', step: 1 }] }, prompt: '짝과 두 번 잰 그림자 길이를 기록판에 적어요.', target: { records: true }, difficulty: 0.1,
              levels: {
                easy: { prompt: '한 번 잰 그림자 길이를 기록판에 적어요.', toolOptions: { fields: [{ label: '1번', unit: 'cm', step: 1 }] }, target: { records: true } },
                challenge: { prompt: '시간을 바꿔 세 번 잰 길이를 기록판에 적어요.', toolOptions: { fields: [{ label: '수업 전', unit: 'cm', step: 1 }, { label: '수업 중', unit: 'cm', step: 1 }, { label: '수업 뒤', unit: 'cm', step: 1 }] }, target: { records: true } },
              } },
            CH('실험 결과가 예상과 다를 때 알맞은 태도는?', ['있는 그대로 기록한다', '예상에 맞게 고친다'], 0, '과학자는 결과를 정직하게 기록하고 다시 생각해요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '과학자처럼 탐구해요',
          items: [
            { type: 'table', prompt: '그림자 길이를 재어 적어요.', columns: ['잰 때', '길이(cm)'], cells: [['1번', ''], ['2번', '']], answer: '잰 길이를 있는 그대로 적어요' },
            { type: 'short', prompt: '내가 탐구해 보고 싶은 궁금한 점을 한 가지 써요.' },
          ],
          easy: { note: '"○○하면 ○○할까?" 틀로 써요.', items: [{ type: 'draw', prompt: '막대와 그림자를 그려요.' }] },
        },
        notes: '실제로 재는 활동이라 기록 값은 학급마다 다르다(정답 값을 정하지 않는다). 해를 맨눈으로 보지 않게 하고, 흐린 날은 손전등과 막대로 교실에서 대신한다.',
      }),
    );
  }

  // ======================================================================================================
  // 지구의 날 — 쓰레기의 여행과 기후 변화 (4.22 비법정 — 환경·지속가능발전 범교과 연계)
  // ======================================================================================================
  {
    const C3 = T('earth', 3); const C4 = T('earth', 4);
    M.push(
      C3({
        id: 'days.e34.earth.intro.bottle3', type: 'intro', title: '버린 페트병은 어디로 갈까',
        method: '페트병 그림 보고 어디로 갈지 고르기 — 반 투표 그림그래프', tool: 'chart', minutes: 6,
        levels: { easy: '갈 곳 카드 두 줄만 그림 수를 함께 세어 읽는다.', base: '세 줄을 견주어 가장 많이 고른 곳을 찾는다.', challenge: '고른 곳의 까닭을 짝에게 말하고, 오늘 활동 뒤 생각이 바뀌는지 본다.' },
        intro: {
          teacher: '"길에 버린 페트병은 어디로 갈까요?" 가상의 3학년 한 반이 고른 그림그래프를 함께 읽고 시연 단추로 가장 많이 고른 줄을 보인다(기다릴 반응: "쓰레기통이요", "없어져요"). "땅속으로 사라져요"를 고른 친구가 많다는 것을 짚으며 "비가 오면 빗물에 쓸려 하천과 강을 지나 바다까지 갈 수 있어요. 정말 그런지 차례로 놓아 봐요"라고 되묻는다. 지구의 날(4월 22일)은 법으로 정한 기념일은 아니지만 세계 여러 나라가 지구 환경을 생각하는 날이라고 덧붙인다.',
          student: '그림그래프에서 친구들이 가장 많이 고른 곳을 찾아요. 나는 어디로 간다고 생각하는지 짝에게 말해요.',
          demo: VOTE('길에 버린 페트병이 갈 곳', [['쓰레기통', 6], ['바다', 8], ['땅속으로 사라짐', 9]], '가장 많이 고른 곳은?'),
          art: { draw: 'a paper plastic bottle lying on a street beside a drain, a dotted path leading to a paper river and a blue paper sea with a turtle', banner: '페트병은 어디로 갈까', extra: [{ motif: 'wave', y: 230 }] },
        },
        notes: '그래프 수는 가상의 반이다. 지구의 날은 법정기념일이 아니다(환경·지속가능발전 범교과 주제로 다룬다).',
      }),
      C3({
        id: 'days.e34.earth.activity.trip3', type: 'activity', title: '쓰레기가 바다로 가는 차례',
        method: '쓰레기가 바다로 가는 차례', tool: 'story', minutes: 14,
        levels: { easy: '장면 3장, 놓으면 바로 맞는지 알려 준다.', base: '장면 4장을 차례대로 놓은 뒤 확인한다.', challenge: '틀린 장면이 섞인 판에서 그것을 빼고 놓고, 셋째 문항의 말풍선 빈칸을 채운다.' },
        activity: {
          title: '쓰레기가 바다로 가는 차례', tool: 'story',
          teacher: '"비닐은 바다에 닿기 전에 어디를 지날까요?" 하천과 강의 차례를 짚는다. 바다 동물 장면을 앞에 두는 학생에게는 "바다에 닿기 전에 바다 동물이 비닐을 만날 수 있을까요?"라고 묻는다. "바다는 넓으니까 괜찮아요"라는 말에는 "바다 동물이 비닐을 먹이로 알고 삼킬 수 있어요"라고 답한다.',
          task: '버린 쓰레기가 바다로 가는 장면을 차례대로 놓아요.', levels: CARD_LV,
          items: [
            ORD('비닐봉지가 바다로 가는 차례를 놓아요.', { named: true, title: '비닐봉지의 여행' }, [{ id: 'drop', text: '길에 버려져요', motif: 'house' }, { id: 'rain', text: '빗물에 쓸려요', motif: 'cloud' }, { id: 'river', text: '강을 따라 가요', motif: 'wave' }, { id: 'sea', text: '바다 동물이 삼켜요', motif: 'star' }], 2,
              { id: 'gone', text: '땅속으로 사라져요', why: '비닐은 쉽게 사라지지 않고 빗물에 쓸려 가요.' }, 0.2),
            ORD('페트병이 바닷가에 닿는 차례를 놓아요.', { named: true, title: '페트병의 여행' }, [{ id: 'park', text: '공원에 버려져요', motif: 'tree' }, { id: 'stream', text: '하천으로 흘러가요', motif: 'wave' }, { id: 'beach', text: '바닷가에 쌓여요', motif: 'sun' }], 1,
              { id: 'fly', text: '하늘로 날아가요', why: '페트병은 물길을 따라 흘러가요.' }, 0.2),
            { prompt: '바다를 지키는 친구의 말을 채워요.', toolOptions: { mode: 'fill', title: '해솔의 말(가상)', cards: ['쓰레기통에', '길바닥에', '하천에'], slots: [{ id: 'b1', who: '해솔', motif: 'wave', label: '쓰레기는 꼭 ___ 버려요.' }] }, target: { fill: { b1: '쓰레기통에' } }, difficulty: 0.1,
              conclude: '길에 버린 쓰레기는 빗물·하천·강을 지나 바다까지 갈 수 있어요. 쓰레기는 쓰레기통에 버려요.' },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '쓰레기가 가는 길의 빈칸을 채워요.', text: '길 → 빗물 → ___ → 바다', answer: '강(하천)' }] },
      }),
      C3({
        id: 'days.e34.earth.activity.save3', type: 'activity', title: '에너지 아끼는 길 고르기',
        method: '에너지 아끼는 길 고르고 결과 보기', tool: 'emotion', minutes: 13,
        levels: { easy: '장면마다 보기 2개 가운데 고르고, 결과가 바로 보인다.', base: '장면마다 보기 3개 가운데 고르고 결과를 본다.', challenge: '보기 3개에서 고른 뒤 맞혀야 결과가 보이고, 두 장면의 결과를 견주어 말한다.' },
        activity: {
          title: '에너지 아끼는 길 고르기', tool: 'emotion',
          teacher: '"이렇게 하면 전기나 기름을 아낄 수 있을까요?" 보기를 고를 때마다 결과를 소리 내어 읽고 까닭을 말하게 한다. "불만 끄면 돼요"라는 학생에게는 "걷기나 대기 전력 끄기도 에너지를 아끼는 길일까요?"라고 넓혀 묻는다.',
          task: '전등·물·전기 장면에서 어떻게 할지 고르고 결과를 봐요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            BR('빈 교실 불이 켜져 있어요. 어떻게 할까요?', '체육 시간이라 모두 운동장에 가요. 교실 불이 켜져 있어요.', [
              { id: 'off', text: '나가기 전에 불을 꺼요', result: '아무도 없는 교실에 전기가 들지 않아요.', mood: '뿌듯함' },
              { id: 'leave', text: '금방 오니 켜 둬요', result: '빈 교실에 한 시간 내내 불이 켜져 있어요.', mood: '걱정', why: '빈 곳의 불은 꺼야 전기를 아껴요.' },
              { id: 'more', text: '창가 불까지 더 켜요', result: '쓰지 않는 불이 더 많아졌어요.', mood: '걱정', why: '쓰지 않는 불을 더 켜면 전기를 더 써요.' }], 'off', 0.15),
            BR('양치할 때 물을 어떻게 쓸까요?', '양치를 하려고 세면대 앞에 섰어요.', [
              { id: 'cup', text: '컵에 물을 받아 써요', result: '필요한 만큼만 물을 썼어요.', mood: '뿌듯함' },
              { id: 'run', text: '물을 틀어 놓고 닦아요', result: '양치하는 동안 물이 계속 흘러갔어요.', mood: '걱정', why: '물을 틀어 두면 쓰지 않는 물이 흘러가요.' },
              { id: 'hot', text: '뜨거운 물을 틀어 둬요', result: '물도 물을 데우는 에너지도 더 썼어요.', mood: '걱정', why: '뜨거운 물은 데우는 데 에너지가 더 들어요.' }], 'cup', 0.2),
            BR('컴퓨터를 다 썼어요. 어떻게 할까요?', '숙제를 마치고 컴퓨터를 다 썼어요.', [
              { id: 'tap', text: '전원 끄고 멀티탭도 꺼요', result: '대기 전력까지 아낄 수 있어요.', mood: '뿌듯함' },
              { id: 'on', text: '켜 둔 채 놀러 나가요', result: '아무도 안 쓰는데 전기가 들어요.', mood: '걱정', why: '쓰지 않는 기기는 꺼야 해요.' },
              { id: 'screen', text: '화면만 끄고 나가요', result: '본체와 멀티탭에는 전기가 계속 들어요.', mood: '걱정', why: '화면만 끄면 본체는 계속 켜져 있어요.' }], 'tap', 0.25,
              { conclude: '빈 곳 불 끄기, 물 받아 쓰기, 멀티탭 끄기처럼 작은 행동으로 에너지를 아낄 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '에너지를 아끼는 행동에 ○ 해요.', options: ['안 쓰는 멀티탭 끄기', '빈방 불 켜 두기'], answer: '안 쓰는 멀티탭 끄기' }] },
      }),
      C3({
        id: 'days.e34.earth.wrap.check3', type: 'wrap', title: '우리 반 에너지 점검',
        method: '우리 반 에너지 점검표', tool: 'timer', minutes: 7,
        levels: { easy: '교실을 둘러보고 점검 칸 2개에 표시한다.', base: '점검 칸 3개(전등·창문·컴퓨터)에 표시한다.', challenge: '점검 칸 4개(멀티탭까지)에 표시하고 우리 반 약속 하나를 정한다.' },
        wrap: {
          teacher: '"지금 우리 교실에서 에너지가 새는 곳은 없을까요?" 교사 진행으로 모둠이 전등·창문·컴퓨터를 실제로 둘러보고 한 것에만 표시하게 한다. 둘러보지 않고 다 누르는 학생에게는 "정말 꺼져 있는지 직접 가서 볼까요?"라고 묻는다. 출구 2번에서 \'빈방 불 켜 두기\'를 고른 학생에게는 활동의 결과 장면을 다시 떠올리게 한다.',
          exitTicket: [
            SELF('우리 반 에너지 점검', ['빈 곳 전등을 껐어요', '냉난방 때 창문 닫음', '안 쓰는 컴퓨터 끔', '멀티탭 전원을 끔'], '교실을 둘러보고 한 것에 표시해요.'),
            CH('에너지를 아끼는 행동은 무엇인가요?', ['가까운 길 걷기', '빈방 불 켜 두기'], 0, '가까운 길을 걸으면 자동차 기름을 아낄 수 있어요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '쓰레기는 어디로 갈까',
          items: [
            { type: 'check', prompt: '우리 반에서 확인한 것에 표시해요.', options: ['빈 곳 전등을 껐어요', '안 쓰는 컴퓨터를 껐어요', '쓰레기를 쓰레기통에 버렸어요'] },
            { type: 'short', prompt: '지구의 날에 우리 반이 지킬 약속을 한 가지 써요.' },
          ],
          easy: { note: '"우리 반은 ○○를 꺼요." 틀로 써요.', items: [{ type: 'draw', prompt: '깨끗한 바다를 지키는 모습을 그려요.' }] },
        },
      }),

      C4({
        id: 'days.e34.earth.intro.hot4', type: 'intro', title: '기온 그래프는 어떻게 변할까',
        method: '기온 꺾은선그래프 보고 짐작', tool: 'chart', minutes: 6,
        levels: { easy: '처음과 끝 두 점만 견주어 올랐는지 내렸는지 고른다.', base: '네 점을 차례로 읽어 기온이 어떻게 변했는지 고른다.', challenge: '변화를 고른 뒤 그렇게 변한 까닭을 짐작해 짝에게 말한다.' },
        intro: {
          teacher: '"이 꺾은선그래프는 어느 마을 여름 평균 기온을 10년마다 이어 그린 가상의 자료예요. 선이 어떻게 움직이나요?" 시연 단추로 \'점점 올라감\'을 고르는 모습을 보인다(기다릴 반응: "올라가요"). "날씨와 기후는 같아요"라는 말이 나오면 "오늘 비가 오는 것은 날씨, 오랜 기간의 평균 모습은 기후예요"라고 말해 준다. 석탄·석유 같은 연료를 많이 쓰면 지구의 평균 기온이 오르는 기후 변화가 생긴다고 알리고 원인과 결과를 잇는 활동으로 넘어간다.',
          student: '꺾은선그래프의 선을 손가락으로 따라가며 기온이 어떻게 변했는지 골라요.',
          demo: { tool: 'chart', options: { type: 'line', mode: 'read', title: '어느 마을 여름 평균 기온(가상 자료)', unit: '°C', xLabel: '때', yLabel: '기온', from: 22, max: 27, scale: 1, data: [['처음', 23], ['10년 뒤', 24], ['20년 뒤', 24], ['30년 뒤', 26]], question: '기온은 어떻게 변했나요?', choices: ['점점 올라감', '점점 내려감', '그대로임'] }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper earth with a tall paper thermometer, melting paper ice on one side and a growing paper forest on the other', banner: '지구의 기온', extra: [{ motif: 'leaf', x: 300, y: 200, color: 'mint', s: 0.6 }] },
        },
        notes: '그래프 수치는 가상 자료다(근거 파일에 학교용 기온 수치가 없다). 실제 자료를 보일 때는 기상청 기후 자료를 쓰고 출처를 밝힌다. 기후 변화를 무섭게만 전하지 않고 늦출 수 있는 행동으로 잇는다.',
      }),
      C4({
        id: 'days.e34.earth.activity.cause4', type: 'activity', title: '기후 변화 원인·결과 잇기',
        method: '기후 변화 원인·결과 잇기', tool: 'emotion', minutes: 14,
        levels: { easy: '짝 2줄을 잇고, 카드 뒷면 설명이 처음부터 보인다.', base: '짝 3줄을 잇는다.', challenge: '짝 4줄을 잇거나, 남는 함정 카드가 섞인 판에서 잇는다.' },
        activity: {
          title: '기후 변화 원인·결과 잇기', tool: 'emotion',
          teacher: '"이 일이 생기면 그다음에 무슨 일이 일어날까요?" 왼쪽 원인 글을 먼저 읽고 "그래서"를 붙여 오른쪽 카드를 읽게 한다. 숲이 늘어나는 것을 기온이 오르는 원인으로 잇는 학생에게는 "나무는 이산화탄소를 흡수해요. 숲이 줄면 어떻게 될까요?"라고 묻는다. 원인을 줄이는 행동이 결과도 줄인다는 점을 짚는다.',
          task: '기후 변화의 원인과 결과, 낱말과 뜻을 이어요.', levels: { easy: { showBack: true }, base: {}, challenge: {} },
          items: [
            MT('원인과 그 결과를 이어요.', { weather: false }, [['석탄·석유를 많이 씀', '기온이 올라감'], ['빙하가 녹음', '바닷물 높이가 올라감'], ['숲이 줄어듦', '흡수하는 탄소가 줄어듦'], ['나무를 심음', '탄소를 흡수함']], 2, 3, null, 0.3),
            MT('행동과 그 결과를 이어요.', { weather: false }, [['대중교통 타기', '연료를 덜 씀'], ['빈방 냉방 켜 두기', '전기를 더 씀'], ['가까운 길 걷기', '기름을 아낌'], ['안 쓰는 멀티탭 끄기', '대기 전력을 아낌']], 2, 3, null, 0.25),
            MT('낱말과 뜻을 이어요.', { weather: false }, [['날씨', '하루하루의 비와 바람'], ['기후', '오랜 기간의 평균 모습'], ['기후 변화', '평균 기온 등이 바뀜']], 2, 3, '오늘 아침 기온', 0.3,
              { conclude: '연료를 많이 쓰고 숲이 줄면 기온이 오르는 기후 변화가 생겨요. 원인을 줄이면 변화를 늦출 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '원인과 결과를 써요.', columns: ['원인', '결과'], cells: [['석탄·석유를 많이 씀', ''], ['빙하가 녹음', ''], ['숲이 줄어듦', '']], answer: '기온이 올라감 / 바닷물 높이가 올라감 / 흡수하는 탄소가 줄어듦' }] },
      }),
      C4({
        id: 'days.e34.earth.activity.world4', type: 'activity', title: '지구의 날이 퍼진 차례',
        method: '지구의 날이 퍼진 차례', tool: 'timeline', minutes: 13,
        levels: { easy: '카드 한 장이 빠진 판에 놓고, 놓으면 바로 맞는지 알려 준다.', base: '카드를 모두 차례대로 놓은 뒤 확인한다.', challenge: '틀린 카드가 섞인 판에서 그것을 빼고 놓은 뒤, 왜 뺐는지 설명한다.' },
        activity: {
          title: '지구의 날이 퍼진 차례', tool: 'timeline',
          teacher: '"지구의 날은 처음부터 세계가 함께했을까요?" 1970년 미국에서 시작되어 세계 여러 나라로 퍼졌다고 알린다. 우리나라 법으로 정한 기념일은 아니지만 많은 학교와 기관이 함께한다고 덧붙인다. 4월의 두 날을 거꾸로 놓는 학생에게는 21과 22를 견주게 한다.',
          task: '지구의 날과 관련된 일을 차례대로 시간 띠에 놓아요.', levels: CARD_LV,
          items: [
            ORD('지구의 날이 퍼진 차례를 놓아요.', { axis: ['옛날', '오늘날'] }, [{ id: 'us', text: '미국에서 시작', big: '1970' }, { id: 'world', text: '세계 여러 나라로', motif: 'mountain' }, { id: 'school', text: '오늘 우리 학교 활동', motif: 'star' }], 1,
              { id: 'law', text: '우리나라 법정기념일', why: '지구의 날은 우리나라 법으로 정한 기념일이 아니에요.' }, 0.2),
            ORD('봄의 기념일을 날짜 차례로 놓아요.', { axis: ['1월', '12월'] }, [{ id: 'm1', text: '3·1절', big: '3.1' }, { id: 'sci', text: '과학의 날', big: '4.21' }, { id: 'earth', text: '지구의 날', big: '4.22' }], 0,
              { id: 'wrong', text: '지구의 날', big: '10.22', why: '지구의 날은 4월 22일이에요.' }, 0.2),
            ORD('우리 반 지구의 날 계획을 차례대로 놓아요.', { axis: ['먼저', '나중'] }, [{ id: 'find', text: '교실 낭비 찾기', motif: 'star' }, { id: 'plan', text: '실천 약속 정하기', motif: 'leaf' }, { id: 'do', text: '한 주 실천하기', motif: 'sun' }, { id: 'check', text: '함께 점검하기', motif: 'flower' }], 2,
              { id: 'ignore', text: '낭비를 모른 척하기', why: '낭비를 찾아야 약속을 정할 수 있어요.' }, 0.25,
              { conclude: '지구의 날은 1970년 미국에서 시작해 세계로 퍼졌어요. 우리 반도 찾기-약속-실천-점검 차례로 함께해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 날짜를 써요.', text: '지구의 날은 4월 ___일이에요.', answer: '22' }] },
      }),
      C4({
        id: 'days.e34.earth.wrap.promise4', type: 'wrap', title: '내 실천 약속 쓰기',
        method: '실천 약속 글', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀을 보고 실천 하나를 한 문장으로 쓴다(점검 2칸).', base: '실천 두 가지를 두 문장으로 쓰고 기준표(구체적·할 수 있음)로 점검한다.', challenge: '실천 두 가지와 그 까닭(왜냐하면·때문에)까지 쓰고 점검한다.' },
        wrap: {
          teacher: '"\'지구를 아껴요\'처럼 쓰면 내일 무엇을 해야 할지 알 수 있을까요?" 언제·무엇을 하는지 보이게 쓰는 것이 \'구체적\'이라고 알려 준다. "북극곰을 구해요"처럼 내가 하기 어려운 약속을 쓰는 학생에게는 "내일 교실이나 집에서 내가 바로 할 수 있는 일은 무엇일까요?"라고 묻는다. 출구 2번에서 원인과 결과를 바꿔 고른 학생에게는 \'그래서\'를 넣어 읽게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'rubric-writing', options: { topic: '지구의 날에 내가 할 실천 두 가지를 두 문장으로 써요.', minChars: 20, maxChars: 160, minSentences: 2, maxSentences: 4, starter: '나는 ○○할 때 ○○를 하겠다.', placeholder: '내 이름과 주소는 쓰지 않아요.', sample: '나는 교실을 나갈 때 불을 끄겠다. 양치할 때는 컵에 물을 받아 쓰겠다.' },
              prompt: '실천 두 가지를 쓰고 기준표로 점검해요.', target: { selfCheck: ['언제·무엇을 할지 썼어요', '내가 할 수 있는 일이에요', '실천 두 가지를 썼어요'] }, difficulty: 0.2,
              levels: {
                easy: { prompt: '틀을 보고 실천 하나를 한 문장으로 써요.', toolOptions: { minChars: 10, minSentences: 1, maxSentences: 2 }, target: { selfCheck: ['언제·무엇을 할지 썼어요', '내가 할 수 있는 일이에요'] } },
                challenge: { prompt: '실천 두 가지와 그 까닭까지 쓰고 점검해요.', toolOptions: { minChars: 30, minSentences: 2, maxSentences: 5 }, target: { selfCheck: ['언제·무엇을 할지 썼어요', '내가 할 수 있는 일이에요', '실천 두 가지를 썼어요', '까닭을 썼어요'], mustInclude: [['왜냐하면', '때문에', '하면']] } },
              } },
            CH('기후 변화를 늦추는 행동은 무엇인가요?', ['대중교통 타기', '빈방 냉방 켜 두기'], 0, '대중교통을 타면 연료를 덜 써요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '원인과 결과로 보는 지구',
          items: [
            { type: 'choice', prompt: '지구의 날은 언제인가요?', options: ['4월 22일', '6월 5일'], answer: '4월 22일' },
            { type: 'short', prompt: '우리 반이 지구의 날에 실천할 약속을 써요.' },
          ],
          easy: { note: '"나는 ○○할 때 ○○를 하겠다." 틀로 써요.', items: [{ type: 'draw', prompt: '내가 할 실천 하나를 그려요.' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 5·18민주화운동 기념일 — 흐름과 기록 (5.18 법정기념일, 국가보훈부) · 정치적 중립: 공식 기관 사실만, 평가는 교육과정 서술 범위
  // ======================================================================================================
  {
    const C3 = T('may18', 3); const C4 = T('may18', 4);
    const REASONS = (extra) => [{ id: 'source', text: '출처를 확인해야 해서' }, { id: 'spread', text: '틀린 말이 퍼지면 안 돼서' }, Object.assign({ id: 'fun' }, extra)];
    M.push(
      C3({
        id: 'days.e34.may18.intro.map3', type: 'intro', title: '지도에서 광주 찾기',
        method: '지도에서 광주 찾기', tool: 'map', minutes: 6,
        levels: { easy: '교사가 "서울에서 아래쪽, 서쪽 바다 가까이"라고 힌트를 주며 함께 찾는다.', base: '힌트 없이 지도를 보고 광주 자리를 짐작한 뒤 시연 핀을 본다.', challenge: '광주가 서울의 어느 쪽에 있는지 방위로 말한다.' },
        intro: {
          teacher: '"1·2학년 때 5월 18일에 무엇을 배웠나요?" 대답을 듣고(기다릴 반응: "주먹밥이요", "광주요") "그 일이 일어난 광주는 지도 어디에 있을까요?"라고 묻는다. 지도 위쪽이 북쪽이라고 알린 뒤 시연 단추로 광주에 핀이 꽂히는 것을 보인다. 1980년 5월 광주에서 학생과 시민들이 민주주의를 요구했다고 알린다. 다치고 희생된 분들이 있었다는 사실은 차분하게 전하고 자세한 장면은 다루지 않는다.',
          student: '칸 지도를 보고 광주가 어디쯤인지 손가락으로 짚어 보아요. 서울에서 어느 쪽인지 짝에게 말해요.',
          demo: { tool: 'map', options: KOR([P.seoul, P.gwangju, P.daegu, P.busan]), sequence: [{ pin: [1, 7] }] },
          art: { draw: 'a paper map of Korea with a small paper pin on a south-western city, soft May flowers around the edge', banner: '1980년 5월 광주', extra: [{ motif: 'flower', x: 300, y: 210, color: 'peach', s: 0.6 }] },
        },
        notes: '학교 계기교육 계획과 교육청 안내 자료 범위를 따른다. 현재 정당·정치인 이야기는 하지 않는다. 학생에게 가족의 경험이나 생각을 묻지 않는다.',
      }),
      C3({
        id: 'days.e34.may18.activity.flow3', type: 'activity', title: '5·18 큰 흐름 시간 띠',
        method: '5·18 큰 흐름 시간 띠', tool: 'timeline', minutes: 14,
        levels: { easy: '카드 한 장이 빠진 판(3장)에 놓고, 놓으면 바로 맞는지 알려 준다.', base: '카드 4장(또는 3장)을 다 놓은 뒤 확인한다.', challenge: '틀린 카드가 섞인 판에서 그것을 빼고 놓은 뒤, 왜 뺐는지 설명한다.' },
        activity: {
          title: '5·18 큰 흐름 시간 띠', tool: 'timeline',
          teacher: '"시민들이 함께하게 된 것은 학생들이 시위를 시작한 뒤였을까요, 앞이었을까요?" 장면마다 날짜를 짚으며 놓게 한다. 국가 기념일 지정을 1980년 안에 두는 학생에게는 "오랜 시간이 지나 1997년에 국가 기념일이 되었어요"라고 알려 준다. 자세한 장면을 묻는 학생에게는 "다치고 희생된 분들이 있었어요. 오늘은 그분들을 기억하고, 시민들이 무엇을 바랐는지 배워요"라고 답한다.',
          task: '5·18민주화운동의 큰 흐름을 일어난 차례대로 시간 띠에 놓아요.', levels: CARD_LV,
          items: [
            ORD('1980년 5월의 흐름을 차례대로 놓아요.', { axis: ['먼저', '나중'] }, [{ id: 'st', text: '학생들이 시위함', big: '5.18' }, { id: 'ci', text: '시민들이 함께함', motif: 'flower' }, { id: 'end', text: '계엄군에 진압됨', big: '5.27' }, { id: 'day', text: '국가 기념일이 됨', big: '1997' }], 1,
              { id: 'lib', text: '나라를 되찾음', why: '나라를 되찾은 광복은 1945년의 일이에요.' }, 0.2),
            ORD('5·18을 기억해 온 차례를 놓아요.', { axis: ['옛날', '오늘날'] }, [{ id: 'y80', text: '광주에서 일어남', big: '1980' }, { id: 'y97', text: '국가 기념일 지정', big: '1997' }, { id: 'y11', text: '기록물 세계기록유산', big: '2011' }], 1,
              { id: 'wrong', text: '세계기록유산', big: '1980', why: '기록물은 2011년에 세계기록유산이 되었어요.' }, 0.25),
            MT('날짜와 그때의 일을 이어요.', { axis: ['옛날', '오늘날'] }, [['1980년 5월 18일', '학생 시위가 시작됨'], ['1980년 5월 27일', '계엄군에 진압됨'], ['1997년', '국가 기념일 지정']], 2, 3, '나라를 되찾음', 0.25,
              { conclude: '5·18민주화운동은 1980년 5월 광주에서 열흘 동안 이어졌고, 1997년 국가 기념일이 되었어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 수를 써요.', text: '5·18민주화운동은 ___년 5월 광주에서 일어났어요.', answer: '1980' }] },
      }),
      C3({
        id: 'days.e34.may18.activity.did3', type: 'activity', title: '시민들이 한 일 나누기',
        method: '시민들이 한 일 나누기', tool: 'sortboard', minutes: 13,
        levels: { easy: '카드 4장을 두 바구니에 나누고, 틀리면 바로 돌아오며 바구니마다 장 수가 보인다.', base: '카드 6장을 나눈 뒤 확인한다.', challenge: '카드 2장이 더해진 8장을 나누고, 고른 까닭을 짝에게 말한다.' },
        activity: {
          title: '시민들이 한 일 나누기', tool: 'sortboard',
          teacher: '"시민들은 무엇을 바랐고, 서로 어떻게 도왔을까요?" 두 바구니 이름을 먼저 소리 내어 읽게 한다. 주먹밥 나눔·헌혈처럼 서로 돕는 일과 민주주의를 요구한 일을 나누며, 둘 다 그날 시민들의 모습이라고 정리한다. 어느 바구니인지 헷갈려 하는 학생에게는 "이 일은 무엇을 바란 것인가요, 누구를 도운 것인가요?"라고 묻는다.',
          task: '광주 시민들이 한 일, 기억하는 곳, 5·18 정신과 이어지는 말을 바구니에 나누어요.', levels: BOARD_LV,
          items: [
            SORT('시민들이 한 일을 두 가지로 나누어요.', {}, ['민주주의를 요구했어요', '서로 도왔어요'], [['민주주의 회복 외치기', '비상계엄 반대하기', '함께 모여 뜻 밝히기'], ['주먹밥 나누기', '다친 사람 위해 헌혈', '다친 사람 돌보기']], 2, [['서로 손잡고 함께하기'], ['물과 음식 나누기']], 0.2),
            SORT('5·18을 기억하는 곳을 가려내요.', {}, ['기억하는 곳', '상관없는 곳'], [['국립5·18민주묘지', '5·18민주화운동기록관'], ['놀이공원', '수영장', '백화점']], [1, 2], [['5·18기념재단'], ['영화관']], 0.2),
            SORT('5·18 정신과 이어지는 말을 가려내요.', {}, ['이어지는 말', '아닌 말'], [['민주주의', '나눔과 연대', '서로 돕기'], ['힘으로 누르기', '혼자만 잘살기', '소문 퍼뜨리기']], 2, [['인권'], ['편 가르기']], 0.25,
              { conclude: '광주 시민들은 민주주의를 요구했고, 주먹밥과 헌혈로 서로 도왔어요. 우리는 그 뜻을 기억해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '시민들이 서로 도운 일에 ○ 해요.', options: ['주먹밥 나누기', '놀이공원 가기'], answer: '주먹밥 나누기' }] },
      }),
      C3({
        id: 'days.e34.may18.wrap.quiet3', type: 'wrap', title: '기억하는 1분',
        method: '기억하는 1분', tool: 'timer', minutes: 7,
        levels: { easy: '30초 묵념하도록 타이머를 맞추고 함께 묵념한다.', base: '1분 묵념하도록 타이머를 맞추고 묵념한 뒤 느낌 한 낱말을 말한다.', challenge: '1분 묵념한 뒤 느낌을 한 문장으로 말하고 점검 칸에 표시한다.' },
        wrap: {
          teacher: '"민주주의를 위해 애쓰다 희생된 분들을 기억하며 1분 동안 조용히 묵념해 볼까요?" 교사 진행으로 타이머를 함께 맞추고, 시작 전에 바른 자세(일어서서 고개 숙이기)를 보여 준다. 묵념이 끝나면 느낌 한 낱말을 돌아가며 말하되 말하고 싶지 않은 학생은 건너뛰게 한다. "무서워요"라는 말에는 "그런 마음이 들 수 있어요. 그래서 우리가 함께 기억하는 거예요"라고 받아 준다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '기억하는 시간', labels: ['묵념', '쉬기'], plan: { work: 20, rest: 10, rounds: 1 } }, prompt: '1분 동안 묵념하도록 타이머를 맞춰요.', target: { plan: { work: 60, rounds: 1 } }, difficulty: 0.1,
              levels: {
                easy: { prompt: '30초 동안 묵념하도록 타이머를 맞춰요.', target: { plan: { work: 30, rounds: 1 } } },
                challenge: { prompt: '1분 묵념을 맞추고 느낌을 말한 뒤 표시해요.', target: { plan: { work: 60, rounds: 1 }, selfCheck: ['바른 자세로 묵념했어요', '느낌을 한 문장으로'] } },
              } },
            CH('5·18민주화운동에서 시민들이 바란 것은?', ['민주주의', '전쟁'], 0, '시민들은 비상계엄에 반대하고 민주주의를 요구했어요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '1980년 5월 광주',
          items: [
            { type: 'short', prompt: '5·18을 기억하는 방법을 한 가지 써요.' },
            { type: 'short', prompt: '"민주주의"를 내 말로 쉽게 풀어 써요.' },
          ],
          easy: { note: '"함께 정해요", "서로 도와요" 같은 말을 떠올려요.', items: [{ type: 'draw', prompt: '서로 돕는 모습을 그려요.' }] },
        },
        notes: '느낌 말하기는 채점하지 않고, 말하고 싶지 않은 학생은 건너뛴다.',
      }),

      C4({
        id: 'days.e34.may18.intro.doc4', type: 'intro', title: '기록은 왜 남겼을까',
        method: '기록 사진 보고 왜 남겼을까 — 반 투표 그림그래프', tool: 'chart', minutes: 6,
        levels: { easy: '까닭 카드 두 줄만 그림 수를 함께 세어 읽는다.', base: '세 줄을 견주어 가장 많이 고른 까닭을 찾는다.', challenge: '고른 까닭을 한 문장으로 짝에게 말하고, 다른 까닭과 견준다.' },
        intro: {
          teacher: '"오래전 일을 지금 우리가 어떻게 알 수 있을까요?" 대답을 듣고(기다릴 반응: "책이요", "사진이요") 일기·사진·신문 기사 그림을 보이며 "이 기록을 남긴 사람들은 왜 남겼을까요?"라고 묻는다. 가상의 4학년 한 반이 고른 그림그래프를 함께 읽고 시연 단추로 가장 많이 고른 까닭을 보인다. 5·18민주화운동 때 시민·기자들이 남긴 기록이 모여 2011년 유네스코 세계기록유산이 되었다고 알린다. \'그냥 재미로\'를 고른 친구 수가 적다는 것을 짚으며 기록에는 까닭이 있다고 잇는다.',
          student: '그림그래프에서 친구들이 가장 많이 고른 까닭을 찾아요. 나라면 왜 기록을 남길지 짝에게 말해요.',
          demo: VOTE('기록을 남긴 까닭', [['있었던 일을 알리려고', 13], ['잊지 않으려고', 8], ['그냥 재미로', 2]], '가장 많이 고른 까닭은?'),
          art: { draw: 'paper notebooks, paper photographs and folded paper newspapers stacked neatly in a quiet archive room with soft light', banner: '기록으로 기억해요', extra: [{ motif: 'flower', x: 300, y: 210, color: 'peach', s: 0.6 }] },
        },
        notes: '그래프 수는 가상의 반이다. 기록물 사진을 보일 때는 5·18민주화운동기록관 누리집 자료를 쓰고, 다친 사람이 드러난 사진은 쓰지 않는다.',
      }),
      C4({
        id: 'days.e34.may18.activity.why4', type: 'activity', title: '세계기록유산이 된 까닭',
        method: '세계기록유산이 된 까닭 잇기', tool: 'emotion', minutes: 14,
        levels: { easy: '짝 2줄을 잇고, 카드 뒷면 설명이 처음부터 보인다.', base: '짝 3줄을 잇는다.', challenge: '남는 함정 카드가 섞인 판에서 3줄을 잇고, 이은 근거를 짝에게 말한다.' },
        activity: {
          title: '세계기록유산이 된 까닭', tool: 'emotion',
          teacher: '"기록이 있으면 무엇을 할 수 있을까요?" 왼쪽 글에 "그래서"를 붙여 오른쪽 카드를 이어 읽게 한다. 기록은 일이 있었다는 증거가 되고, 다음 세대가 배울 수 있게 해 준다고 정리한다. 기념 장소를 기록으로 여기는 학생에게는 "묘지는 기억하고 추모하는 곳, 기록관은 기록을 모아 두는 곳이에요"라고 구별해 준다.',
          task: '기록을 남긴 까닭과 그 결과, 기억하는 곳과 하는 일을 이어요.', levels: { easy: { showBack: true }, base: {}, challenge: {} },
          items: [
            MT('까닭과 그 결과를 이어요.', { weather: false }, [['시민·기자가 일기·사진을 남김', '있었던 일의 증거가 됨'], ['흩어진 기록을 모아 지킴', '세계기록유산이 됨'], ['다음 세대가 기록을 읽음', '그때 일을 배움']], 2, 3, '잊어버리게 됨', 0.25),
            MT('기억하는 곳과 하는 일을 이어요.', { weather: false }, [['국립5·18민주묘지', '추모하는 곳'], ['5·18민주화운동기록관', '기록을 모아 둔 곳'], ['5·18기념재단', '기념 사업을 함']], 2, 3, '놀이 기구를 탐', 0.25),
            MT('때와 그때의 일을 이어요.', { weather: false }, [['1980년', '광주에서 일어남'], ['1997년', '국가 기념일 지정'], ['2011년', '세계기록유산 등재']], 2, 3, '훈민정음 반포', 0.25,
              { conclude: '시민들이 남긴 기록은 있었던 일의 증거가 되어 2011년 세계기록유산이 되었어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 수를 써요.', text: '5·18 기록물은 ___년 유네스코 세계기록유산이 되었어요.', answer: '2011' }] },
      }),
      C4({
        id: 'days.e34.may18.activity.rumor4', type: 'activity', title: '갈림길: 소문을 들었어요',
        method: '소문을 들었을 때 확인하기', tool: 'dilemma', minutes: 13,
        levels: { easy: '갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '갈림 2번, 보기 3개씩 고르며 결과를 따라간다.', challenge: '갈림 2번을 지난 뒤 근거 카드 3장 가운데 알맞은 2장을 고른다.' },
        activity: {
          title: '갈림길: 소문을 들었어요', tool: 'dilemma',
          teacher: '"이 말이 사실인지 어떻게 알 수 있을까요?" 보기를 고를 때마다 결과를 소리 내어 읽고 누가 영향을 받는지 짝과 말하게 한다. 국가보훈부·5·18기념재단·5·18민주화운동기록관 같은 공식 기관 자료로 확인하는 습관을 강조한다. 소문을 말한 친구를 놀리는 보기를 고르는 학생에게는 "놀리면 친구와 함께 사실을 찾을 수 있을까요?"라고 묻는다. 소문의 내용 자체는 교실에서 되풀이하지 않는다.',
          task: '장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('출처 모를 영상에서 처음 듣는 말이 나와요.', {
              text: '짧은 영상에서 5·18에 대해 처음 듣는 말이 나와요. 누가 만들었는지 모르겠어요.', motif: 'cloud',
              choices: [
                { id: 'share', text: '재밌어서 바로 퍼뜨린다', result: '확인 안 된 말이 반 친구들에게 퍼졌어요.', impact: [{ who: '반 친구들', text: '틀린 말을 믿을 수 있어요', tone: -1 }] },
                { id: 'check', text: '공식 기관 자료를 찾아본다', result: '기록관 누리집에서 기록을 찾았어요.', ending: '공식 자료로 확인해 틀린 말을 퍼뜨리지 않았어요.', next: {
                  text: '찾아보니 영상의 말이 기록과 달라요. 친구들은 영상을 계속 보고 있어요.', choices: [
                    { id: 'tell', text: '찾은 자료를 차분히 알린다', result: '친구들이 자료를 보고 영상을 다시 생각했어요.', impact: [{ who: '반 친구들', text: '사실을 알게 됐어요', tone: 1 }], ending: '확인한 사실을 근거와 함께 나누었어요.' },
                    { id: 'still', text: '그래도 영상을 퍼뜨린다', result: '틀린 줄 알면서 말을 키웠어요.', impact: [{ who: '반 친구들', text: '헷갈리게 돼요', tone: -1 }] },
                    { id: 'mock', text: '본 친구들을 놀린다', result: '친구들이 화가 나 대화가 끊겼어요.', impact: [{ who: '친구들', text: '속상해요', tone: -1 }] },
                  ] } },
                { id: 'ignore', text: '모르는 척 넘긴다', result: '영상이 계속 퍼졌어요.', impact: [{ who: '영상을 본 사람들', text: '헷갈릴 수 있어요', tone: 0 }] },
              ] }, [['check', 'tell']],
            REASONS({ text: '재밌으면 퍼뜨려도 돼서', why: '재미보다 사실인지가 먼저예요.' }), ['source', 'spread'], 0.2),
            DIL('친구가 들은 소문을 사실처럼 말해요.', {
              text: '친구가 "그 일은 다 지어낸 얘기래"라고 말해요.', motif: 'house',
              choices: [
                { id: 'agree', text: '맞장구치며 퍼뜨린다', result: '근거 없는 말이 더 퍼졌어요.', impact: [{ who: '반 친구들', text: '틀린 말을 믿을 수 있어요', tone: -1 }] },
                { id: 'search', text: '"같이 자료를 찾아보자"', result: '함께 기록관 누리집을 열었어요.', ending: '함께 찾아보자고 해서 친구와 사실을 확인했어요.', next: {
                  text: '기록관에 그때의 일기·사진 기록이 있어요. 친구가 머쓱해해요.', choices: [
                    { id: 'kind', text: '"같이 알게 돼서 좋다"', result: '친구가 웃으며 자료를 더 찾아봤어요.', impact: [{ who: '친구', text: '함께 배웠어요', tone: 1 }], ending: '근거를 함께 찾고 친구 마음도 지켰어요.' },
                    { id: 'brag', text: '"거봐, 너 틀렸지?"', result: '친구가 창피해서 입을 닫았어요.', impact: [{ who: '친구', text: '창피해요', tone: -1 }] },
                    { id: 'gossip', text: '다른 친구에게 흉본다', result: '친구가 알게 되어 사이가 멀어졌어요.', impact: [{ who: '친구', text: '상처받았어요', tone: -1 }] },
                  ] } },
                { id: 'fool', text: '"너 바보야?" 놀린다', result: '친구가 화가 나서 대화가 끝났어요.', impact: [{ who: '친구', text: '화가 났어요', tone: -1 }] },
              ] }, [['search', 'kind']],
            REASONS({ text: '친구를 이기고 싶어서', why: '이기는 것보다 함께 사실을 아는 것이 중요해요.' }), ['source', 'spread'], 0.25),
            DIL('5·18 조사 숙제에 쓸 자료를 골라요.', {
              text: '5·18에 대해 조사해 발표하려고 해요. 어떤 자료를 쓸까요?', motif: 'star',
              choices: [
                { id: 'anon', text: '익명 댓글을 옮겨 적는다', result: '"근거가 뭐예요?"라는 물음에 답하지 못했어요.', impact: [{ who: '듣는 친구들', text: '믿기 어려워요', tone: -1 }] },
                { id: 'official', text: '기념재단·기록관 자료', result: '믿을 수 있는 자료를 모았어요.', ending: '공식 기관 자료로 조사했어요.', next: {
                  text: '발표 자료를 만들고 있어요. 자료의 출처는 어떻게 할까요?', choices: [
                    { id: 'cite', text: '출처를 함께 적는다', result: '친구들이 자료를 직접 찾아볼 수 있었어요.', impact: [{ who: '듣는 친구들', text: '확인할 수 있어요', tone: 1 }], ending: '공식 자료를 쓰고 출처까지 밝혔어요.' },
                    { id: 'mine', text: '내가 아는 것처럼 쓴다', result: '어디서 온 말인지 아무도 몰라요.', impact: [{ who: '듣는 친구들', text: '확인할 수 없어요', tone: -1 }] },
                    { id: 'add', text: '재밌게 꾸며 덧붙인다', result: '사실과 꾸민 말이 섞였어요.', impact: [{ who: '듣는 친구들', text: '헷갈려요', tone: -1 }] },
                  ] } },
                { id: 'video', text: '조회 수 많은 영상', result: '누가 만들었는지 몰라 확인할 수 없었어요.', impact: [{ who: '듣는 친구들', text: '헷갈릴 수 있어요', tone: -1 }] },
              ] }, [['official', 'cite']],
            REASONS({ text: '조회 수가 많으면 맞아서', why: '많이 본 것과 사실인 것은 달라요.' }), ['source', 'spread'], 0.3,
            { conclude: '처음 듣는 말은 퍼뜨리기 전에 공식 기관 자료로 확인하고, 친구와 함께 찾아봐요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '소문을 들었을 때 내가 할 일을 순서대로 써요.' }] },
      }),
      C4({
        id: 'days.e34.may18.wrap.source4', type: 'wrap', title: '믿을 만한 자료 고르기',
        method: '공식 자료 고르기', tool: 'sortboard', minutes: 7,
        levels: { easy: '자료 카드 4장을 두 바구니에 나눈다.', base: '자료 카드 6장을 나눈다.', challenge: '카드 8장을 나누고, 헷갈린 카드 하나의 까닭을 말한다.' },
        wrap: {
          teacher: '"5·18을 바르게 기억하려면 어떤 자료를 봐야 할까요?" 카드마다 "누가 만든 자료인가요?"를 먼저 묻게 한다. \'조회 수 많은 영상\'을 공식 자료로 넣는 학생에게는 "많이 본 것과 누가 만들었는지 아는 것은 같을까요?"라고 되묻는다. 출구 2번에서 국경일을 고른 학생에게는 활동의 2011년 카드를 다시 떠올리게 한다.',
          exitTicket: [
            Object.assign({ type: 'tool', tool: 'sortboard' }, (() => {
              const s = SORT('자료를 공식 기관과 확인 안 됨으로 나누어요.', {}, ['공식 기관 자료', '확인 안 된 자료'], [['5·18기념재단 자료', '국가보훈부 누리집', '5·18민주화운동기록관'], ['출처 없는 영상', '익명 게시글', '누가 했다는 소문']], 2, [['국가기록원 기록'], ['조회 수 많은 영상']], 0.2);
              return { options: s.toolOptions, prompt: s.prompt, target: s.target, difficulty: s.difficulty, levels: s.levels };
            })()),
            CH('5·18 기록물은 무엇으로 지정되었나요?', ['유네스코 세계기록유산', '국경일'], 0, '5·18 기록물은 2011년 유네스코 세계기록유산에 올랐어요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '기록으로 기억해요',
          items: [
            { type: 'choice', prompt: '믿을 만한 자료에 ○ 해요.', options: ['기념재단 자료', '출처 없는 영상'], answer: '기념재단 자료' },
            { type: 'short', prompt: '기록을 남기는 까닭을 한 가지 써요.' },
          ],
          easy: { note: '"누가 만든 자료인지" 먼저 봐요.', items: [{ type: 'draw', prompt: '기록을 남기는 모습(일기·사진)을 그려요.' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 현충일·6·25전쟁 — 전쟁의 차례와 평화 (6.6 현충일·6.25 6·25전쟁일, 국가보훈부) · 안보 주제는 표현 주의(research-days.md §4)
  // ======================================================================================================
  {
    const C3 = T('june', 3); const C4 = T('june', 4);
    M.push(
      C3({
        id: 'days.e34.june.intro.siren3', type: 'intro', title: '사이렌이 울리면',
        method: '사이렌 예절 다시 보기', tool: 'timer', minutes: 6,
        levels: { easy: '교사가 사이렌 예절 세 칸을 하나씩 읽고 한 번 함께 해 본다.', base: '사이렌 소리(또는 교사 신호)에 맞춰 두 번 묵념하며 자세를 점검한다.', challenge: '두 번째 묵념 때 짝의 자세를 보고 점검 칸을 함께 확인한다.' },
        intro: {
          teacher: '"현충일 아침에 사이렌이 울리면 무엇을 할까요?" 1·2학년 때 배운 것을 떠올리게 한 뒤(기다릴 반응: "멈춰요", "묵념해요") 시연 단추로 점검 칸이 하나씩 켜지는 모습을 보인다. 교사 신호에 맞춰 실제로 일어서서 묵념해 본다. 사이렌을 무서워하는 학생에게는 "함께 기억하자고 알리는 소리예요"라고 안심시킨다. 현충일(6월 6일)은 나라를 위해 목숨을 바친 분들을 기억하는 날이라고 알린다.',
          student: '사이렌 예절 세 가지를 읽고 선생님 신호에 맞춰 바른 자세로 묵념해 보아요.',
          demo: { tool: 'timer', options: { title: '사이렌 예절 점검', safety: ['하던 일을 멈춰요', '바른 자세로 서요', '고개 숙여 묵념해요'] }, sequence: [{ safety: [true, false, false] }, { safety: [true, true, true] }] },
          art: { draw: 'a quiet paper memorial with white paper flowers in front of layered paper mountains under a June sky, children standing still with heads bowed', banner: '6월 6일 현충일', extra: [{ motif: 'flower', x: 300, y: 210, color: 'cream', s: 0.6 }] },
        },
      }),
      C3({
        id: 'days.e34.june.activity.line3', type: 'activity', title: '6·25전쟁 차례 놓기',
        method: '6·25전쟁 차례 놓기', tool: 'timeline', minutes: 14,
        levels: { easy: '카드 한 장이 빠진 판(3장)에 놓고, 놓으면 바로 맞는지 알려 준다.', base: '카드 4장(또는 3장)을 다 놓은 뒤 확인한다.', challenge: '틀린 카드가 섞인 판에서 그것을 빼고 놓은 뒤, 왜 뺐는지 설명한다.' },
        activity: {
          title: '6·25전쟁 차례 놓기', tool: 'timeline',
          teacher: '"전쟁이 시작된 뒤 국군과 유엔군은 어디까지 밀렸을까요?" 낙동강까지 밀렸다가 인천 상륙 작전으로 서울을 되찾았다는 흐름을 짚는다. 정전 협정을 1950년에 두는 학생에게는 "전쟁은 3년 넘게 이어졌어요. 1950과 1953 가운데 어느 쪽이 뒤일까요?"라고 묻는다. "지금도 전쟁 중이에요?"라는 질문에는 "1953년 정전 협정으로 싸움을 멈추었어요"라고 답한다. 북한 주민 전체를 미워하는 말이 나오면 전쟁을 일으킨 일과 사람을 나누어 말하게 한다.',
          task: '6·25전쟁의 큰 사건과 6월의 기념일을 차례대로 놓아요.', levels: CARD_LV,
          items: [
            ORD('6·25전쟁의 흐름을 차례대로 놓아요.', { axis: ['먼저', '나중'] }, [{ id: 'start', text: '북한의 남침', motif: 'cloud' }, { id: 'nak', text: '낙동강까지 밀림', motif: 'wave' }, { id: 'land', text: '인천 상륙 작전', motif: 'star' }, { id: 'stop', text: '정전 협정', motif: 'flower' }], 2,
              { id: 'lib', text: '광복을 맞음', why: '광복은 1945년, 6·25전쟁보다 앞선 일이에요.' }, 0.25),
            MT('날짜와 그날의 일을 이어요.', { axis: ['옛날', '오늘날'] }, [['1950년 6월 25일', '전쟁 시작'], ['1953년 7월 27일', '정전 협정']], 1, 2, '광복', 0.2),
            ORD('6월의 기념일을 날짜 차례로 놓아요.', { axis: ['1일', '30일'] }, [{ id: 'h', text: '현충일', big: '6일' }, { id: 'd10', text: '6·10민주항쟁 기념일', big: '10일' }, { id: 'w', text: '6·25전쟁일', big: '25일' }], 1,
              { id: 'wrong', text: '현충일', big: '25일', why: '현충일은 6월 6일이에요.' }, 0.2,
              { conclude: '6·25전쟁은 1950년 6월 25일 시작되어 1953년 7월 27일 정전 협정으로 싸움을 멈추었어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 수를 써요.', text: '6·25전쟁은 ___년에 시작되어 1953년 정전 협정으로 멈추었어요.', answer: '1950' }] },
      }),
      C3({
        id: 'days.e34.june.activity.map3', type: 'activity', title: '인천·부산 자리 찾기',
        method: '인천·부산 자리 찾기', tool: 'map', minutes: 13,
        levels: { easy: '장소 이름과 핀 자리 읽기 글자가 보이는 지도에 핀을 꽂는다.', base: '장소 이름만 보이는 지도에 핀을 꽂는다.', challenge: '핀을 꽂은 뒤 그곳이 서울의 어느 쪽인지, 왜 그곳인지 보기도 고른다.' },
        activity: {
          title: '인천·부산 자리 찾기', tool: 'map',
          teacher: '"인천은 바다에 닿은 도시예요. 서울의 어느 쪽에 있을까요?" 인천 상륙 작전은 바다에서 땅으로 올라온 작전이라 바닷가 도시라는 점을 짚는다. 부산은 전쟁 동안 피란민이 많이 모인 곳이었다고 알려 준다. 판문점은 정전 협정을 맺은 곳이라고 덧붙인다. 인천을 동쪽 바다에 꽂는 학생에게는 "서울에서 왼쪽, 서쪽 바다를 보세요"라고 되묻는다.',
          task: '칸 지도에서 6·25전쟁과 관련된 곳에 핀을 꽂고 물음에 답해요.', levels: MAP_LV,
          items: [
            PIN(KOR([P.seoul, P.incheon, P.busan, P.daegu]), '인천 상륙 작전이 펼쳐진 인천에 핀을 꽂아요.', { place: '인천' }, { q: '인천은 서울의 어느 쪽에 있나요?', choices: ['서쪽', '동쪽'], answer: 0, tail: '방위도 골라요' }, 0.15),
            PIN(KOR([P.seoul, P.incheon, P.busan, P.gwangju]), '피란민이 많이 모인 부산에 핀을 꽂아요.', { place: '부산' }, { q: '부산에 피란민이 많이 모인 까닭은?', choices: ['전쟁에서 먼 남쪽이라서', '가장 북쪽이라서'], answer: 0, tail: '까닭도 골라요' }, 0.2),
            PIN(KOR([P.seoul, P.panmun, P.pyongyang, P.incheon]), '정전 협정을 맺은 판문점에 핀을 꽂아요.', { place: '판문점' }, { q: '판문점은 서울의 어느 쪽에 있나요?', choices: ['북쪽', '남쪽'], answer: 0, tail: '방위도 골라요' }, 0.2,
              { conclude: '인천은 서울 서쪽 바닷가, 부산은 남동쪽 바닷가예요. 판문점에서 정전 협정을 맺었어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'figure', wide: true, prompt: '지도에서 인천에 ○, 부산에 △ 해요.', tool: 'map', figures: [{ options: KORW([PW.seoul, PW.incheon, PW.busan]), caption: '우리나라 칸 지도' }], answer: '서울 왼쪽 인천 ○, 오른쪽 아래 부산 △' }] },
      }),
      C3({
        id: 'days.e34.june.wrap.card3', type: 'wrap', title: '감사 카드 꾸미기',
        method: '감사 카드 꾸미기', tool: 'collage', minutes: 7,
        levels: { easy: '꽃·태극기 조각을 2개 이상 붙여 카드를 꾸민다.', base: '조각을 4개 이상 붙여 카드를 꾸민다.', challenge: '조각을 4개 이상 붙이고, 카드에 담을 감사 문장을 짝에게 말한 뒤 점검한다.' },
        wrap: {
          teacher: '"현충일에 기억하는 분들께 감사 카드를 드린다면 무엇으로 꾸밀까요?" 하얀 꽃(동그라미·나뭇잎)과 태극기 색(빨강·파랑·검정) 조각을 골라 붙이게 한다. 무기나 싸우는 그림을 넣으려는 학생에게는 "기억하고 감사하는 카드에는 무엇이 어울릴까요?"라고 묻는다. 출구 2번에서 \'나라를 세운 날\'을 고른 학생에게는 개천절과 견주어 다시 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'collage', options: { shapes: ['circle', 'leaf', 'heart', 'star', 'rect'], colors: ['하양', '빨강', '파랑', '검정', '노랑', '초록'], sizes: ['s', 'm', 'l'] }, prompt: '꽃·태극기 조각을 4개 이상 붙여 꾸며요.', target: { pieces: { min: 4 } }, difficulty: 0.1,
              levels: {
                easy: { prompt: '꽃·태극기 조각을 2개 이상 붙여 꾸며요.', target: { pieces: { min: 2 } } },
                challenge: { prompt: '조각을 붙이고 감사 문장을 말한 뒤 표시해요.', target: { selfCheck: ['조각 4개 이상 붙였어요', '감사 문장을 말했어요'], minPieces: 4 } },
              } },
            CH('현충일은 어떤 날인가요?', ['나라 위해 희생한 분을 기리는 날', '나라를 세운 날'], 0, '현충일(6월 6일)은 나라를 위해 목숨을 바친 분들을 기억하는 날이에요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '현충일과 6·25전쟁',
          items: [
            { type: 'choice', prompt: '현충일은 언제인가요?', options: ['6월 6일', '6월 25일'], answer: '6월 6일' },
            { type: 'short', prompt: '나라를 지킨 분들께 드리고 싶은 말을 써요.' },
          ],
          easy: { note: '"○○해 주셔서 고맙습니다." 틀로 써요.', items: [{ type: 'draw', prompt: '감사 카드에 하얀 꽃을 그려요.' }] },
        },
      }),

      C4({
        id: 'days.e34.june.intro.bag4', type: 'intro', title: '피란 짐 속 가족의 마음',
        method: '피란 짐 그림 보고 마음 짐작', tool: 'emotion', minutes: 6,
        levels: { easy: '마음 카드 2장(걱정·슬픔)을 함께 골라 바구니에 담는다.', base: '마음 카드 5장 가운데 어울리는 3장을 고른다.', challenge: '고른 마음 하나의 까닭을 그림 속 무엇을 보고 짐작했는지 말한다.' },
        intro: {
          teacher: '"보따리를 머리에 이고 아이 손을 잡은 가족이 남쪽으로 걸어가요. 이 가족은 어떤 마음이었을까요?" 오늘 이야기의 가족은 6·25전쟁 때 모습을 떠올리기 위해 지은 가상의 가족이라고 먼저 밝힌다. 시연 단추로 \'걱정\'·\'슬픔\' 카드가 바구니에 담기는 것을 보인다. "신났을 것 같아요"라는 말이 나오면 "집을 두고 떠나야 했다면 어땠을까요?"라고 되묻는다. 학생에게 가족의 전쟁 이야기를 묻지 않는다.',
          student: '그림 속 가상의 가족이 어떤 마음이었을지 마음 카드를 골라 보아요. 그렇게 짐작한 까닭을 짝에게 말해요.',
          demo: { tool: 'emotion', options: { mode: 'pick', basket: '가족의 마음', cards: ['걱정', '슬픔', '무서움', '신남', '뿌듯함'], shuffle: false }, sequence: [{ pick: ['걱정', '슬픔'] }, { pick: ['걱정', '슬픔', '무서움'] }] },
          art: { draw: 'a paper family carrying cloth bundles walking along a winding paper road toward the south, paper mountains and a distant paper harbor', banner: '피란길', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '이야기 속 가족은 가상이다. 학생에게 집안의 전쟁·피란 이야기를 꺼내게 하지 않는다.',
      }),
      C4({
        id: 'days.e34.june.activity.story4', type: 'activity', title: '피란 가족 이야기 차례',
        method: '피란 가족 이야기 차례', tool: 'story', minutes: 14,
        levels: { easy: '장면 3장, 놓으면 바로 맞는지 알려 준다.', base: '장면 4장을 차례대로 놓은 뒤 확인한다.', challenge: '틀린 장면이 섞인 판에서 그것을 빼고 놓고, 셋째 문항의 말풍선 빈칸을 채운다.' },
        activity: {
          title: '피란 가족 이야기 차례', tool: 'story',
          teacher: '"가족은 어디로 피란을 갔을까요?" 3학년 때 지도에서 찾은 부산을 떠올리게 한다. 가족을 다시 찾는 장면을 피란 앞에 두는 학생에게는 "무엇 때문에 헤어졌을까요?"라고 묻는다. 전쟁과 분단으로 헤어진 가족을 이산가족이라고 한다고 알려 준다. 봄이는 가상의 인물이라고 다시 밝힌다.',
          task: '가상의 피란 가족 이야기를 차례대로 놓아요.', levels: CARD_LV,
          items: [
            ORD('봄이네 피란 이야기를 차례대로 놓아요.', { named: true, title: '봄이네 피란길(가상)' }, [{ id: 'news', text: '전쟁 소식에 놀라요', motif: 'cloud' }, { id: 'walk', text: '남쪽으로 걸어가요', motif: 'mountain' }, { id: 'busan', text: '부산 피란촌에 살아요', motif: 'house' }, { id: 'find', text: '헤어진 삼촌을 찾아요', motif: 'star' }], 1,
              { id: 'over', text: '전쟁이 바로 끝나요', why: '전쟁은 3년 넘게 이어졌어요.' }, 0.25),
            ORD('천막 학교 이야기를 차례대로 놓아요.', { named: true, title: '천막 학교(가상)' }, [{ id: 'none', text: '학교 건물이 없어요', motif: 'cloud' }, { id: 'tent', text: '천막에서 공부해요', motif: 'house' }, { id: 'hope', text: '꿈을 놓지 않아요', motif: 'sun' }], 0,
              { id: 'play', text: '공부를 그만둬요', why: '피란지에서도 천막 학교에서 공부를 이어 갔어요.' }, 0.2),
            { prompt: '헤어진 가족을 그리는 봄이의 말을 채워요.', toolOptions: { mode: 'fill', title: '봄이의 말(가상)', cards: ['다시 만나고', '잊고', '모른 척하고'], slots: [{ id: 'b1', who: '봄이', motif: 'moon', label: '삼촌을 꼭 ___ 싶어요.' }] }, target: { fill: { b1: '다시 만나고' } }, difficulty: 0.15,
              conclude: '6·25전쟁 때 많은 사람이 집을 떠나 피란을 갔고, 헤어진 이산가족도 생겼어요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '봄이에게 위로의 말을 한 문장으로 써요.' }] },
        notes: '봄이네 가족은 가상이다. 피란의 고생은 말하되 다치거나 숨지는 장면은 다루지 않는다.',
      }),
      C4({
        id: 'days.e34.june.activity.peace4', type: 'activity', title: '아픔과 평화 노력 나누기',
        method: '아픔과 평화 노력 나누기', tool: 'sortboard', minutes: 13,
        levels: { easy: '카드 4장을 두 바구니에 나누고, 틀리면 바로 돌아오며 바구니마다 장 수가 보인다.', base: '카드 6장을 나눈 뒤 확인한다.', challenge: '카드 2장이 더해진 8장을 나누고, 고른 까닭을 짝에게 말한다.' },
        activity: {
          title: '아픔과 평화 노력 나누기', tool: 'sortboard',
          teacher: '"전쟁이 끝난 뒤에도 남은 아픔은 무엇일까요? 그 아픔을 기억하고 평화를 지키려고 어떤 일을 할까요?" 현충일 추모, 참전 용사께 감사하기, 이산가족 찾기처럼 기억하고 평화를 지키려는 노력을 함께 나눈다. \'힘으로 이기기\'를 평화를 지키는 행동으로 넣는 학생에게는 "힘으로 이기면 다툼이 끝날까요, 커질까요?"라고 묻는다.',
          task: '전쟁이 남긴 아픔과 기억·평화의 노력, 현충일에 기리는 분을 바구니에 나누어요.', levels: BOARD_LV,
          items: [
            SORT('전쟁이 남긴 것과 평화 노력을 나누어요.', {}, ['전쟁이 남긴 것', '평화 노력'], [['이산가족', '부서진 집과 학교', '피란민의 고생'], ['현충일 추모', '이산가족 찾기', '참전 용사께 감사 편지']], 2, [['가족과 헤어짐'], ['전쟁기념관 방문']], 0.2),
            SORT('생활 속 행동을 나누어요.', {}, ['평화를 지켜요', '다툼을 키워요'], [['다툼을 말로 풀기', '다른 생각 존중하기', '친구 말 끝까지 듣기'], ['힘으로 이기기', '편 갈라 따돌리기', '놀리며 웃기']], 2, [['먼저 사과하기'], ['소문 퍼뜨리기']], 0.2),
            SORT('현충일에 기리는 분을 가려내요.', {}, ['현충일에 기려요', '아니에요'], [['나라를 지키다 희생한 분', '독립운동가'], ['운동선수', '만화 주인공']], 1, [['순국선열'], ['가수']], 0.3,
              { conclude: '현충일에는 순국선열(독립운동가)과 나라를 지키다 희생한 분을 함께 기려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '전쟁이 남긴 아픔에 ○ 해요.', options: ['이산가족', '현충일 추모'], answer: '이산가족' }] },
      }),
      C4({
        id: 'days.e34.june.wrap.wish4', type: 'wrap', title: '평화를 바라는 한 문장',
        method: '평화 바람 한 문장', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀의 빈칸을 채우듯 평화를 바라는 한 문장을 쓴다(점검 2칸).', base: '평화를 바라는 한 문장을 쓰고 기준표 3칸으로 점검한다.', challenge: '바람 한 문장과 내가 할 일 한 문장, 모두 두 문장을 쓰고 점검한다.' },
        wrap: {
          teacher: '"봄이네 이야기를 듣고 평화를 바라는 마음을 한 문장으로 써 볼까요?" \'누구에게·무엇을 바라는지\'가 보이게 쓰도록 한다. 다른 나라 사람을 미워하는 말을 쓰려는 학생에게는 "평화를 바라는 글에는 누구를 미워하는 말보다 무엇이 어울릴까요?"라고 묻는다. 출구 2번에서 \'독립운동가\'를 고른 학생에게는 전쟁과 분단으로 헤어진 가족을 부르는 말을 다시 떠올리게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'rubric-writing', options: { topic: '평화를 바라는 마음을 한 문장으로 써요.', minChars: 10, maxChars: 120, minSentences: 1, maxSentences: 2, starter: '나는 ○○가 ○○하기를 바란다.', placeholder: '내 이름과 주소는 쓰지 않아요.', sample: '나는 헤어진 가족이 다시 만나는 평화로운 날이 오기를 바란다.' },
              prompt: '평화를 바라는 한 문장을 쓰고 점검해요.', target: { selfCheck: ['바라는 것을 썼어요', '평화와 이어지는 말이에요', '미워하는 말이 없어요'], mustInclude: [['바란다', '바라요', '좋겠다', '좋겠어요']] }, difficulty: 0.15,
              levels: {
                easy: { prompt: '틀을 보고 평화를 바라는 문장을 써요.', toolOptions: { minChars: 6 }, target: { selfCheck: ['바라는 것을 썼어요', '미워하는 말이 없어요'], mustInclude: [['바란다', '바라요', '좋겠다', '좋겠어요']] } },
                challenge: { prompt: '바람 한 문장과 내가 할 일 한 문장을 써요.', toolOptions: { minChars: 20, minSentences: 2, maxSentences: 3, starter: '나는 ○○하기를 바란다. 그래서 나는 ○○하겠다.' }, target: { selfCheck: ['바라는 것을 썼어요', '내가 할 일을 썼어요', '미워하는 말이 없어요'], mustInclude: [['바란다', '바라요', '좋겠다', '좋겠어요'], ['하겠다', '할게요', '하겠어요']] } },
              } },
            CH('전쟁으로 가족과 헤어진 사람들을 무엇이라 하나요?', ['이산가족', '독립운동가'], 0, '전쟁과 분단으로 헤어진 가족을 이산가족이라고 해요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '피란길 이야기',
          items: [
            { type: 'blank', prompt: '빈칸에 알맞은 수를 써요.', text: '6·25전쟁은 1950년에 시작되어 ___년 7월 정전 협정을 맺었어요.', answer: '1953' },
            { type: 'short', prompt: '평화를 지키려고 우리 반에서 할 수 있는 일을 써요.' },
          ],
          easy: { note: '"나는 ○○가 ○○하기를 바란다." 틀로 써요.', items: [{ type: 'draw', prompt: '평화로운 마을을 그려요.' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 6·10민주항쟁 기념일 — 직접 뽑기 (6.10 법정기념일, 행정안전부) · 정치적 중립: 현재 정당·정치인·현 정부 정책은 다루지 않는다
  // ======================================================================================================
  {
    const C3 = T('june10', 3); const C4 = T('june10', 4);
    const VOTE_RES = [['피구', 12], ['줄넘기', 7], ['술래잡기', 5]];
    M.push(
      C3({
        id: 'days.e34.june10.intro.who3', type: 'intro', title: '누가 뽑으면 좋을까',
        method: '누가 뽑을까 그림 고르기 — 반 투표 그림그래프', tool: 'chart', minutes: 6,
        levels: { easy: '두 줄(모두 뽑기·대신 뽑기)만 그림 수를 함께 세어 읽는다.', base: '세 줄을 견주어 가장 많이 고른 방법을 찾는다.', challenge: '고른 방법이 좋은 까닭을 한 문장으로 짝에게 말한다.' },
        intro: {
          teacher: '"우리 반 회장을 우리가 모두 직접 뽑는 것과, 몇 사람이 대신 뽑는 것은 어떻게 다를까요?" 가상의 3학년 한 반이 고른 그림그래프를 함께 읽고 시연 단추로 가장 많이 고른 방법을 보인다(기다릴 반응: "직접 뽑는 게 좋아요"). "선생님이 정하면 빨라요"라는 말이 나오면 "빠른 것과 모두의 뜻이 담기는 것 가운데 무엇이 더 중요할까요?"라고 되묻는다. 1987년 6월 많은 시민이 대통령을 국민이 직접 뽑자며 목소리를 냈다고 알린다.',
          student: '그림그래프에서 친구들이 가장 많이 고른 방법을 찾아요. 그 방법이 좋은 까닭을 짝에게 말해요.',
          demo: VOTE('반 회장을 뽑는 방법', [['반 모두가 직접 뽑기', 15], ['몇 명이 대신 뽑기', 4], ['선생님이 정하기', 3]], '가장 많이 고른 방법은?'),
          art: { draw: 'a paper classroom with children lining up to drop folded paper ballots into a paper box, a few children whispering in a corner', banner: '누가 뽑을까', extra: [{ motif: 'star', x: 300, y: 96, color: 'sky', s: 0.6 }] },
        },
        notes: '그래프 수는 가상의 반이다. 현재 정당·정치인·선거 이야기는 다루지 않는다.',
      }),
      C3({
        id: 'days.e34.june10.activity.flow3', type: 'activity', title: '6월 민주항쟁 흐름',
        method: '6월 민주항쟁 흐름 놓기', tool: 'story', minutes: 14,
        levels: { easy: '장면 3장, 놓으면 바로 맞는지 알려 준다.', base: '장면 4장을 차례대로 놓은 뒤 확인한다.', challenge: '틀린 장면이 섞인 판에서 그것을 빼고 놓고, 셋째 문항의 말풍선 빈칸을 채운다.' },
        activity: {
          title: '6월 민주항쟁 흐름', tool: 'story',
          teacher: '"헌법이 바뀐 것은 시위 앞일까요, 뒤일까요?" 장면을 놓은 뒤 처음부터 "그래서"로 이어 읽게 한다. 시민들이 원한 것은 \'대통령 직접 선거\'라는 점을 분명히 한다. 이 일을 오늘의 어느 편과 잇는 말이 나오면 "오늘은 1987년에 시민들이 무엇을 바랐고 무엇이 바뀌었는지만 배워요"라고 돌린다.',
          task: '1987년 6월 민주항쟁의 장면을 차례대로 놓아요.', levels: CARD_LV,
          items: [
            ORD('6월 민주항쟁의 흐름을 차례대로 놓아요.', { named: true, title: '1987년 6월' }, [{ id: 'want', text: '직접 선거를 요구해요', motif: 'star' }, { id: 'rally', text: '6월 10일 전국 시위', motif: 'sun' }, { id: 'accept', text: '직선제를 받아들여요', motif: 'flower' }, { id: 'law', text: '헌법이 바뀌어요', motif: 'leaf' }], 2,
              { id: 'proxy', text: '대표가 대신 뽑아요', why: '시민들은 대통령을 국민이 직접 뽑자고 했어요.' }, 0.25),
            ORD('시민이 뜻을 이루어 가는 차례를 놓아요.', { named: true, title: '뜻을 모으기' }, [{ id: 'think', text: '바라는 것을 정해요', motif: 'star' }, { id: 'together', text: '함께 목소리를 내요', motif: 'sun' }, { id: 'change', text: '제도가 바뀌어요', motif: 'leaf' }], 1,
              { id: 'force', text: '힘으로 밀어붙여요', why: '시민들은 함께 목소리를 내어 뜻을 모았어요.' }, 0.2),
            { prompt: '6월 시민들이 바란 것을 채워요.', toolOptions: { mode: 'fill', title: '시민들의 바람', cards: ['직접 뽑자', '그만 뽑자', '대신 뽑자'], slots: [{ id: 'b1', who: '시민들', motif: 'sun', label: '대통령은 국민이 ___!' }] }, target: { fill: { b1: '직접 뽑자' } }, difficulty: 0.15,
              conclude: '1987년 6월 시민들이 대통령 직접 선거를 요구했고, 그 결과 헌법이 바뀌었어요.' },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '1987년 6월 시민들은 대통령을 국민이 ___ 뽑자고 요구했어요.', answer: '직접' }] },
      }),
      C3({
        id: 'days.e34.june10.activity.sort3', type: 'activity', title: '직접 뽑기·대신 뽑기',
        method: '직접 뽑기·대신 뽑기 나누기', tool: 'sortboard', minutes: 13,
        levels: { easy: '카드 4장을 두 바구니에 나누고, 틀리면 바로 돌아오며 바구니마다 장 수가 보인다.', base: '카드 6장을 나눈 뒤 확인한다.', challenge: '카드 2장이 더해진 8장을 나누고, 고른 까닭을 짝에게 말한다.' },
        activity: {
          title: '직접 뽑기·대신 뽑기', tool: 'sortboard',
          teacher: '"이 방법은 내가 직접 뽑을까요, 다른 사람이 대신 뽑을까요?" 카드를 넣을 때마다 "내 표는 누가 넣나요?"를 묻게 한다. 오늘날 우리나라는 대통령을 국민이 직접 뽑는다고 정리한다. 대신 뽑기가 언제나 나쁘다고 여기는 학생에게는 "모두가 원하는 방법을 함께 정하는 것이 중요해요"라고 말한다.',
          task: '뽑는 방법, 6·10과 이어지는 말, 국민이 뽑는 대표를 바구니에 나누어요.', levels: BOARD_LV,
          items: [
            SORT('뽑는 방법을 나누어요.', {}, ['직접 뽑기', '대신 뽑기'], [['반 모두가 회장 투표', '내가 표에 직접 쓰기', '모두 손 들어 정하기'], ['모둠장만 모여 뽑기', '대표 몇 명만 투표', '반장이 혼자 정하기']], 2, [['내 표는 내가 넣기'], ['친구 표를 대신 넣기']], 0.2),
            SORT('6·10민주항쟁 기념일에 맞는 말을 가려내요.', {}, ['맞아요', '아니에요'], [['1987년 6월', '대통령 직선제', '시민의 목소리'], ['1945년 광복', '훈민정음', '고조선 건국']], 2, [['헌법이 바뀜'], ['정전 협정']], 0.2),
            SORT('국민이 직접 뽑는 대표를 가려내요.', {}, ['국민이 직접 뽑아요', '아니에요'], [['대통령', '국회의원'], ['담임 선생님', '학교 교장 선생님']], 1, [['시장·도지사'], ['반 짝꿍']], 0.3,
              { conclude: '1987년 6월 민주항쟁 뒤 우리나라는 대통령을 국민이 직접 뽑게 되었어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '직접 뽑기에 ○ 해요.', options: ['반 모두가 투표하기', '모둠장만 모여 뽑기'], answer: '반 모두가 투표하기' }] },
      }),
      C3({
        id: 'days.e34.june10.wrap.vote3', type: 'wrap', title: '반 의견 직접 투표',
        method: '반 의견 직접 투표', tool: 'timer', minutes: 7,
        levels: { easy: '보기 2개로 반이 직접 투표하고 표 수를 기록판 2칸에 적는다.', base: '보기 3개로 투표하고 기록판 3칸에 적는다.', challenge: '보기 3개로 투표해 적은 뒤, 고른 까닭을 발표하고 점검 칸에 표시한다.' },
        wrap: {
          teacher: '"체육 시간에 할 놀이를 우리 반이 직접 투표로 정해 볼까요?" 교사 진행으로 한 사람이 한 번씩 손을 들거나 쪽지를 넣게 하고, 센 표 수를 기록판에 함께 적는다. 다른 친구 대신 손을 들어 주는 학생이 있으면 "내 표는 내가 직접 넣는 것이 직접 뽑기예요"라고 짚는다. 결과가 마음에 들지 않는 학생에게는 "함께 정한 결과를 따르고, 다음에 다시 의견을 낼 수 있어요"라고 말한다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '우리 반 직접 투표 결과', unit: '표', fields: ['피구', '줄넘기', '술래잡기'] }, prompt: '우리 반이 직접 투표한 표 수를 기록판에 적어요.', target: { records: true }, difficulty: 0.1,
              levels: {
                easy: { prompt: '두 놀이에 투표한 표 수를 기록판에 적어요.', toolOptions: { fields: ['피구', '줄넘기'] }, target: { records: true } },
                challenge: { prompt: '표 수를 적고 까닭을 발표한 뒤 표시해요.', target: { records: true, selfCheck: ['내 표는 내가 넣었어요', '고른 까닭을 말했어요'] } },
              } },
            CH('6·10민주항쟁 기념일은 언제인가요?', ['6월 10일', '5월 18일'], 0, '6·10민주항쟁 기념일은 6월 10일이에요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '1987년 6월',
          items: [
            { type: 'table', prompt: '우리 반 투표 결과를 적어요.', columns: ['놀이', '표 수'], cells: [['피구', ''], ['줄넘기', ''], ['술래잡기', '']], answer: '우리 반이 센 표 수를 그대로 적어요' },
            { type: 'short', prompt: '내가 직접 뽑는 일이 소중한 까닭을 써요.' },
          ],
          easy: { note: '"내가 직접 뽑으면 ○○해서 좋아요." 틀로 써요.', items: [{ type: 'draw', prompt: '투표함에 내 표를 넣는 모습을 그려요.' }] },
        },
        notes: '실제 투표라 표 수는 학급마다 다르다(정답 값을 정하지 않는다). 놀이 대신 학급 안의 다른 안건으로 바꿔도 된다.',
      }),

      C4({
        id: 'days.e34.june10.intro.rule4', type: 'intro', title: '선거 장면, 무엇이 이상할까',
        method: '선거 장면에서 이상한 점 찾기', tool: 'sortboard', minutes: 6,
        levels: { easy: '장면 카드 2장을 함께 보고 원칙을 어긴 장면 하나를 찾는다.', base: '장면 카드 4장을 지킨 장면·어긴 장면으로 나누는 시연을 보며 함께 말한다.', challenge: '시연 뒤 교사가 말로 더하는 장면 2개(모두 6장)도 어느 쪽인지 말한다.' },
        intro: {
          teacher: '"반장 선거 장면이에요. 이상한 곳이 보이나요?" 장면 카드를 하나씩 읽고 시연 단추로 \'친구 표 대신 넣기\'·\'두 장 받아 넣기\'가 \'어겼어요\' 바구니로 가는 것을 보인다(기다릴 반응: "남의 표를 넣으면 안 돼요"). 도전 단계에서는 "쓰는 걸 엿보기", "나이 되면 누구나 투표"를 말로 더해 묻는다. 3학년 때 1987년 시민들이 바란 것이 대통령 직접 선거였다고 떠올리게 한 뒤, 오늘은 선거의 네 가지 원칙을 배운다고 밝힌다.',
          student: '반장 선거 장면 카드를 보고 원칙을 지킨 장면과 어긴 장면을 찾아 짝에게 말해 보아요.',
          demo: { tool: 'sortboard', options: { slots: ['지켰어요', '어겼어요'], cards: ['칸막이 안에서 쓰기', '친구 표 대신 넣기', '모두 한 장씩 받기', '두 장 받아 넣기'], shuffle: false }, sequence: [{ sort: { 지켰어요: ['칸막이 안에서 쓰기'], 어겼어요: ['친구 표 대신 넣기'] } }, { sort: { 지켰어요: ['칸막이 안에서 쓰기', '모두 한 장씩 받기'], 어겼어요: ['친구 표 대신 넣기', '두 장 받아 넣기'] } }] },
          art: { draw: 'a paper classroom election with a paper voting booth, one paper child peeking at another child writing a ballot, a paper ballot box', banner: '이상한 곳을 찾아요', extra: [{ motif: 'star', x: 300, y: 96, color: 'sky', s: 0.6 }] },
        },
      }),
      C4({
        id: 'days.e34.june10.activity.four4', type: 'activity', title: '선거 네 원칙과 뜻 잇기',
        method: '선거 네 원칙과 뜻 잇기', tool: 'emotion', minutes: 14,
        levels: { easy: '짝 2줄을 잇고, 카드 뒷면 설명이 처음부터 보인다.', base: '짝 4줄을 잇는다.', challenge: '남는 사례 카드가 하나 섞인 판에서 4줄을 잇는다.' },
        activity: {
          title: '선거 네 원칙과 뜻 잇기', tool: 'emotion',
          teacher: '"평등 선거는 무엇이 같다는 뜻일까요?" 원칙마다 우리 반 선거에 빗대어 말하게 한다. 보통 선거와 평등 선거를 헷갈리는 학생에게는 "누가 투표하나(보통)와 몇 표씩인가(평등)로 나누어 볼까요?"라고 묻는다. 직접 선거와 비밀 선거를 헷갈리면 "누가 넣나(직접)와 누가 아나(비밀)"로 나눈다.',
          task: '선거의 네 가지 원칙을 뜻·지킨 장면·어긴 장면과 이어요.', levels: { easy: { showBack: true }, base: {}, challenge: {} },
          items: [
            MT('선거의 원칙과 뜻을 이어요.', { weather: false }, [['보통 선거', '나이 되면 누구나 투표'], ['평등 선거', '한 사람 한 표'], ['직접 선거', '내가 직접 투표'], ['비밀 선거', '누구 뽑았는지 비밀']], 2, 4, '한 사람 두 표', 0.3),
            MT('지킨 장면과 원칙을 이어요.', { weather: false }, [['모두 한 장씩 받아요', '평등 선거'], ['칸막이 안에서 써요', '비밀 선거'], ['내 표는 내가 넣어요', '직접 선거'], ['나이가 되면 누구나 해요', '보통 선거']], 2, 4, '대신 선거', 0.3),
            MT('어긴 장면과 어긴 원칙을 이어요.', { weather: false }, [['친구 표를 대신 넣음', '직접 선거'], ['한 사람이 두 장 받음', '평등 선거'], ['쓰는 걸 엿봄', '비밀 선거'], ['몇몇만 투표하게 함', '보통 선거']], 2, 4, '반장 선거', 0.35,
              { conclude: '선거는 보통·평등·직접·비밀 네 가지 원칙을 지켜요. 하나라도 빠지면 모두의 뜻이 담기기 어려워요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '선거의 원칙과 뜻을 써요.', columns: ['원칙', '뜻'], cells: [['보통 선거', ''], ['평등 선거', ''], ['직접 선거', ''], ['비밀 선거', '']], answer: '일정 나이가 되면 누구나 / 한 사람 한 표 / 본인이 직접 / 누구를 뽑았는지 비밀' }] },
      }),
      C4({
        id: 'days.e34.june10.activity.change4', type: 'activity', title: '1987년 뒤 바뀐 차례',
        method: '1987년 뒤 바뀐 차례', tool: 'timeline', minutes: 13,
        levels: { easy: '카드 2장(또는 칸마다 한 장)을 놓고, 놓으면 바로 맞는지 알려 준다.', base: '카드 3장을 차례대로 놓거나 칸에 나눈다.', challenge: '틀린 카드가 섞인 판에서 그것을 빼거나 카드를 더해 나누고, 까닭을 설명한다.' },
        activity: {
          title: '1987년 뒤 바뀐 차례', tool: 'timeline',
          teacher: '"헌법이 바뀐 다음에는 무엇을 했을까요?" 6월 시민들의 요구가 받아들여진 뒤 헌법을 고치고 그해 12월 국민이 직접 대통령을 뽑았다는 흐름을 짚는다. 6월 민주항쟁을 하루의 일로 여기는 학생에게는 "6월 한 달의 흐름과 그 뒤 헌법을 고치기까지 이어서 볼까요?"라고 묻는다.',
          task: '1987년 6월 이후 바뀐 일과 6월의 기념일을 차례대로 놓아요.', levels: CARD_LV,
          items: [
            ORD('1987년 6월 뒤 바뀐 차례를 놓아요.', { axis: ['먼저', '나중'] }, [{ id: 'accept', text: '직선제를 받아들임', motif: 'star' }, { id: 'law', text: '헌법을 고침', motif: 'leaf' }, { id: 'vote', text: '국민이 직접 투표', motif: 'flower' }], 1,
              { id: 'proxy', text: '대표가 대신 뽑음', why: '1987년 뒤 국민이 대통령을 직접 뽑게 되었어요.' }, 0.25),
            SORT('뽑는 방법을 1987년 앞과 뒤로 나누어요.', { mode: 'sort', axis: ['옛날', '오늘날'] }, ['1987년 개헌 전', '1987년 개헌 뒤'], [['대표들이 대신 뽑음'], ['국민이 직접 뽑음']], 1, [['간접 선거'], ['직접 선거']], 0.3),
            ORD('6월의 기념일을 날짜 차례로 놓아요.', { axis: ['1일', '30일'] }, [{ id: 'd6', text: '현충일', big: '6일' }, { id: 'd10', text: '6·10민주항쟁 기념일', big: '10일' }, { id: 'd25', text: '6·25전쟁일', big: '25일' }], 0,
              { id: 'wrong', text: '6·10민주항쟁 기념일', big: '5일', why: '6·10민주항쟁 기념일은 6월 10일이에요.' }, 0.2,
              { conclude: '1987년 6월 민주항쟁 뒤 헌법을 고쳐 국민이 대통령을 직접 뽑게 되었어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '1987년 6월 민주항쟁 뒤 대통령을 국민이 ___ 뽑게 되었어요.', answer: '직접' }] },
      }),
      C4({
        id: 'days.e34.june10.wrap.result4', type: 'wrap', title: '투표 결과 그래프 읽기',
        method: '투표 결과 그래프 읽기', tool: 'chart', minutes: 7,
        levels: { easy: '두 칸 막대그래프에서 표를 가장 많이 받은 것을 고른다.', base: '세 칸 막대그래프에서 표를 가장 많이 받은 것을 고른다.', challenge: '세 칸 그래프에서 1등과 2등의 표 차이를 수로 쓴다.' },
        wrap: {
          teacher: '"가상의 4학년 한 반이 체육 놀이를 투표했어요. 결과를 어떻게 읽을까요?" 막대 끝이 닿은 눈금을 함께 읽고, 결과를 "○○가 ○표로 가장 많아요" 틀로 말하게 한다. 막대가 짧은 것을 고르는 학생에게는 "막대가 길수록 표가 많아요"라고 짚는다. 결과가 정해지면 모두 따르고, 다른 생각은 다음 회의에서 다시 낼 수 있다는 점을 말한다. 출구 2번에서 평등 선거를 \'누구나 투표\'로 고른 학생에게는 \'몇 표씩인가\'를 다시 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '체육 놀이 투표 결과(가상의 반)', unit: '표', xLabel: '놀이', yLabel: '표 수', max: 14, scale: 2, data: VOTE_RES, question: '표를 가장 많이 받은 놀이는?', choices: VOTE_RES.map((r) => r[0]) }, prompt: '그래프를 읽고 표를 가장 많이 받은 놀이를 골라요.', target: { pick: 0 }, difficulty: 0.15,
              levels: {
                easy: { prompt: '두 칸 그래프에서 표를 더 많이 받은 놀이를 골라요.', toolOptions: { data: VOTE_RES.slice(1), choices: VOTE_RES.slice(1).map((r) => r[0]) }, target: { pick: 0 } },
                challenge: { prompt: '1등과 2등 놀이의 표 차이는 몇 표일까요?', toolOptions: { question: '1등과 2등의 표 차이는?', choices: [] }, target: { value: 5 } },
              } },
            CH('"한 사람이 한 표씩"은 어느 원칙인가요?', ['평등 선거', '보통 선거'], 0, '평등 선거는 누구나 한 표씩 같은 값의 표를 가져요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '선거의 원칙',
          items: [
            { type: 'choice', prompt: '비밀 선거를 지킨 장면에 ○ 해요.', options: ['칸막이 안에서 쓰기', '표 보여 주기'], answer: '칸막이 안에서 쓰기' },
            { type: 'short', prompt: '우리 반 선거에서 꼭 지킬 원칙과 까닭을 써요.' },
          ],
          easy: { note: '"○○ 선거를 지켜요. 왜냐하면 ○○" 틀로 써요.', items: [{ type: 'draw', prompt: '칸막이 안에서 투표하는 모습을 그려요.' }] },
        },
        notes: '투표 결과 그래프는 가상의 반이다.',
      }),
    );
  }

  // ======================================================================================================
  // 광복절 — 독립운동가와 광복 (8.15 국경일)
  // ======================================================================================================
  {
    const C3 = T('liberation', 3); const C4 = T('liberation', 4);
    M.push(
      C3({
        id: 'days.e34.liberation.intro.face3', type: 'intro', title: '그림 속 독립운동가는 누구일까',
        method: '독립운동가 그림 이름 고르기 — 반 투표 그림그래프', tool: 'chart', minutes: 6,
        levels: { easy: '이름 카드 두 줄만 그림 수를 함께 세어 읽는다.', base: '세 줄을 견주어 가장 많이 고른 이름을 찾는다.', challenge: '네 줄을 모두 읽고, 그림의 무엇을 보고 이름을 골랐는지 말한다.' },
        intro: {
          teacher: '"기차역에 선 이 사람은 누구일까요? 나라를 되찾으려고 애쓴 분이에요." 가상의 3학년 한 반이 고른 이름 그림그래프를 함께 읽고 시연 단추로 가장 많이 고른 줄을 보인 뒤, "이분은 하얼빈역에서 의거를 일으킨 안중근이에요"라고 알려 준다. 나라 안팎에서 많은 독립운동가가 애썼고 1945년 8월 15일 광복을 맞았다고 알린다. "광복은 저절로 왔어요"라는 말이 나오면 "많은 사람이 오랫동안 애쓴 일을 오늘 하나씩 이어 봐요"라고 되묻는다.',
          student: '그림그래프에서 친구들이 가장 많이 고른 이름을 찾아요. 들어 본 독립운동가 이름을 짝에게 말해요.',
          demo: VOTE('기차역 그림 속 인물', [['안중근', 9], ['유관순', 6], ['김구', 4], ['윤봉길', 3]], '가장 많이 고른 이름은?'),
          art: { draw: 'a paper railway station platform with a dark-coated paper figure seen from behind, a paper train and a small paper flag, autumn paper leaves', banner: '나라를 되찾기까지', extra: [{ motif: 'sun', x: 300, y: 96, color: 'buttercup', s: 0.6 }] },
        },
        notes: '그래프 수는 가상의 반이다. 인물 사진은 국가보훈부 공훈전자사료관 자료를 쓴다. 의거 장면을 자세히 묘사하지 않는다.',
      }),
      C3({
        id: 'days.e34.liberation.activity.did3', type: 'activity', title: '독립운동가와 한 일 잇기',
        method: '인물과 한 일 잇기', tool: 'emotion', minutes: 14,
        levels: { easy: '짝 2줄을 잇고, 카드 뒷면 설명이 처음부터 보인다.', base: '짝 3줄을 잇는다.', challenge: '짝 4줄을 잇거나, 남는 함정 카드가 섞인 판에서 잇는다.' },
        activity: {
          title: '독립운동가와 한 일 잇기', tool: 'emotion',
          teacher: '"안중근은 어디에서 의거를 일으켰을까요?" 인물마다 한 일을 "○○은 ○○을 했어요" 한 문장으로 말하게 한다. 세종대왕을 독립운동가로 고르는 학생에게는 "세종대왕은 조선의 임금이에요. 독립운동가는 나라를 빼앗긴 1910년부터 1945년 사이에 활동했어요"라고 짚는다. 특정 나라 사람 전체를 미워하는 말이 나오면 "나라를 빼앗은 일이 잘못이에요. 사람을 미워하는 것과는 달라요"라고 바로잡는다.',
          task: '독립운동가와 그들이 한 일, 활동한 곳을 이어요.', levels: { easy: { showBack: true }, base: {}, challenge: {} },
          items: [
            MT('독립운동가와 한 일을 이어요.', { weather: false }, [['유관순', '아우내 장터 만세'], ['안중근', '하얼빈 의거'], ['김구', '임시 정부를 이끎'], ['윤봉길', '훙커우 공원 의거']], 2, 3, null, 0.25),
            MT('한 일과 독립운동가를 이어요.', { weather: false }, [['교육으로 실력을 기름', '안창호'], ['임시 정부를 이끎', '김구'], ['아우내 장터 만세', '유관순']], 2, 3, '세종대왕', 0.25),
            MT('독립운동가와 활동한 곳을 이어요.', { weather: false }, [['유관순', '천안 아우내 장터'], ['안중근', '중국 하얼빈'], ['김구', '중국 상하이']], 2, 3, '경주 첨성대', 0.3,
              { conclude: '독립운동가들은 나라 안의 장터부터 나라 밖의 하얼빈·상하이까지 곳곳에서 나라를 되찾으려 애썼어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '독립운동가와 한 일을 써요.', columns: ['독립운동가', '한 일'], cells: [['유관순', ''], ['안중근', ''], ['김구', '']], answer: '아우내 장터 만세 운동 / 하얼빈 의거 / 대한민국 임시 정부를 이끎' }] },
      }),
      C3({
        id: 'days.e34.liberation.activity.line3', type: 'activity', title: '나라를 되찾기까지',
        method: '나라를 되찾기까지 시간 띠', tool: 'timeline', minutes: 13,
        levels: { easy: '카드 한 장이 빠진 판에 놓고, 놓으면 바로 맞는지 알려 준다.', base: '카드를 모두 놓거나 이은 뒤 확인한다.', challenge: '틀린 카드가 섞인 판에서 그것을 빼고 놓은 뒤, 왜 뺐는지 설명한다.' },
        activity: {
          title: '나라를 되찾기까지', tool: 'timeline',
          teacher: '"광복과 정부 수립 가운데 무엇이 먼저였을까요?" 광복은 1945년, 대한민국 정부 수립은 1948년이며 둘 다 8월 15일이라는 점을 짚는다. 정부 수립을 광복보다 앞에 두는 학생에게는 1945와 1948의 수를 견주게 한다. "빼앗김-외침-되찾음-세움" 네 낱말로 묶어 읽는다.',
          task: '나라를 빼앗긴 때부터 정부를 세우기까지 차례대로 놓아요.', levels: CARD_LV,
          items: [
            ORD('나라를 되찾기까지의 차례를 놓아요.', { axis: ['옛날', '오늘날'] }, [{ id: 'lost', text: '나라를 빼앗김', big: '1910' }, { id: 'mansei', text: '3·1운동', big: '1919' }, { id: 'lib', text: '광복', big: '1945' }, { id: 'gov', text: '정부 수립', big: '1948' }], 1,
              { id: 'wrong', text: '정부 수립', big: '1945', why: '대한민국 정부는 1948년에 세웠어요.' }, 0.25),
            MT('때와 그때의 일을 이어요.', { axis: ['옛날', '오늘날'] }, [['1910년', '나라를 빼앗김'], ['1945년 8월 15일', '광복'], ['1948년 8월 15일', '대한민국 정부 수립']], 2, 3, '6·25전쟁', 0.25),
            ORD('독립운동가의 활동을 차례대로 놓아요.', { axis: ['옛날', '오늘날'] }, [{ id: 'an', text: '안중근 하얼빈 의거', big: '1909' }, { id: 'yu', text: '유관순 만세 운동', big: '1919' }, { id: 'yun', text: '윤봉길 의거', big: '1932' }], 0,
              { id: 'sejong', text: '세종대왕 한글 창제', why: '세종대왕은 독립운동가가 아니라 조선의 임금이에요.' }, 0.3,
              { conclude: '1910년 나라를 빼앗긴 뒤 많은 사람이 애써 1945년 광복을 맞았고, 1948년 대한민국 정부를 세웠어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 수를 써요.', text: '우리나라는 ___년 8월 15일에 광복을 맞았어요.', answer: '1945' }] },
      }),
      C3({
        id: 'days.e34.liberation.wrap.flag3', type: 'wrap', title: '광복절 태극기 달기 점검',
        method: '태극기 달기 점검', tool: 'timer', minutes: 7,
        levels: { easy: '태극기 다는 차례 카드 2장을 놓는다.', base: '차례 카드 3장을 바르게 놓는다.', challenge: '차례 3장을 놓고, 광복절과 현충일의 다는 높이가 다르다는 점검 칸까지 표시한다.' },
        wrap: {
          teacher: '"광복절 아침에 태극기를 단다면 어떤 차례로 할까요?" 차례 카드를 함께 읽고 놓게 한다. 광복절 같은 국경일에는 깃봉과 깃면 사이를 떼지 않고 깃봉 바로 아래에 붙여 단다고 알린다. "현충일과 똑같이 달아요"라는 학생에게는 "현충일은 슬픔을 함께하는 날이라 깃면 너비만큼 내려 다는 조기를 달아요"라고 견주어 준다. 태극기를 땅에 끌거나 장난감처럼 쓰지 않게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '광복절 태극기 달기', cards: ['바깥에서 바르게 보기', '깨끗한 태극기 꺼내기', '깃봉 바로 아래 달기'] }, prompt: '광복절 태극기 다는 차례를 놓아요.', target: { order: ['깨끗한 태극기 꺼내기', '깃봉 바로 아래 달기', '바깥에서 바르게 보기'] }, difficulty: 0.15,
              levels: {
                easy: { prompt: '태극기 다는 차례 두 장을 놓아요.', toolOptions: { cards: ['깃봉 바로 아래 달기', '깨끗한 태극기 꺼내기'] }, target: { order: ['깨끗한 태극기 꺼내기', '깃봉 바로 아래 달기'] } },
                challenge: { prompt: '차례를 놓고 다는 높이까지 점검해요.', target: { order: ['깨끗한 태극기 꺼내기', '깃봉 바로 아래 달기', '바깥에서 바르게 보기'], selfCheck: ['국경일은 붙여 달아요', '현충일은 내려 달아요'] } },
              } },
            CH('광복절에 함께 기념하는 일은 무엇인가요?', ['광복과 정부 수립', '고조선 건국'], 0, '8월 15일은 1945년 광복과 1948년 대한민국 정부 수립을 함께 기념해요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '나라를 되찾기까지',
          items: [
            { type: 'choice', prompt: '광복절 태극기 다는 법에 ○ 해요.', options: ['깃봉에 붙여 달기', '내려 달기'], answer: '깃봉에 붙여 달기' },
            { type: 'short', prompt: '가장 기억에 남는 독립운동가와 그 까닭을 써요.' },
          ],
          easy: { note: '"○○은 ○○을 해서 기억에 남아요." 틀로 써요.', items: [{ type: 'draw', prompt: '광복절에 태극기를 단 집을 그려요.' }] },
        },
      }),

      C4({
        id: 'days.e34.liberation.intro.map4', type: 'intro', title: '나라 밖 독립운동 장소',
        method: '나라 밖 독립운동 장소 핀', tool: 'map', minutes: 6,
        levels: { easy: '교사와 함께 상하이 한 곳을 찾아 핀이 꽂히는 것을 본다.', base: '상하이와 하얼빈 두 곳에 핀이 차례로 꽂히는 것을 본다.', challenge: '두 곳이 서울에서 어느 쪽에 있는지 방위로 말한다.' },
        intro: {
          teacher: '"독립운동은 우리나라 안에서만 했을까요?" 대답을 듣고(기다릴 반응: "다른 나라에서도요") 칸 지도에서 위쪽이 북쪽이라고 알린 뒤 시연 단추로 상하이와 하얼빈에 핀이 꽂히는 것을 보인다. 대한민국 임시 정부는 1919년 중국 상하이에 세워졌고, 안중근은 하얼빈에서 의거를 일으켰다고 알린다. 나라 안에서는 만세 운동·학생 운동·우리말 지키기가, 나라 밖에서는 임시 정부·한국광복군·의거가 이어졌다고 말하며 나누기 활동으로 넘어간다.',
          student: '칸 지도에서 핀이 꽂힌 두 곳의 이름을 읽어요. 서울에서 어느 쪽에 있는지 짝에게 말해요.',
          demo: { tool: 'map', options: ABROAD, sequence: [{ pin: [1, 4] }, { pin: [3, 0] }] },
          art: { draw: 'a simple paper map with a large paper continent and a small peninsula, tiny paper flags standing in two distant cities', banner: '나라 밖 독립운동', extra: [{ motif: 'sun', x: 300, y: 96, color: 'buttercup', s: 0.6 }] },
        },
        notes: '칸 지도는 방향 관계만 살린 단순한 그림이다(실제 거리·국경이 아니다). 다른 나라 사람을 탓하는 말을 쓰지 않는다.',
      }),
      C4({
        id: 'days.e34.liberation.activity.sort4', type: 'activity', title: '나라 안팎의 독립운동',
        method: '나라 안·밖 독립운동 나누기', tool: 'sortboard', minutes: 14,
        levels: { easy: '카드 4장(셋째 문항은 2장)을 바구니에 나누고, 틀리면 바로 돌아오며 장 수가 보인다.', base: '카드 6장을 나눈 뒤 확인한다.', challenge: '카드를 더한 판을 나누고, 헷갈린 카드 하나의 까닭을 짝에게 말한다.' },
        activity: {
          title: '나라 안팎의 독립운동', tool: 'sortboard',
          teacher: '"임시 정부는 어디에 세워졌을까요?" 중국 상하이에 처음 세워졌다는 점을 짚는다. 조선어학회의 우리말 사전 만들기도 나라를 지키려는 독립운동의 하나였다고 알려 준다. 독립운동을 싸움으로만 여기는 학생에게는 "우리말 지키기·교육도 독립운동이었어요. 어느 바구니에 들어갈까요?"라고 넓혀 묻는다.',
          task: '독립운동을 펼친 곳과 방법에 따라 나누고, 광복절에 기념하는 일을 가려내요.', levels: BOARD_LV,
          items: [
            SORT('독립운동을 나라 안과 나라 밖으로 나누어요.', {}, ['나라 안', '나라 밖'], [['아우내 장터 만세', '광주 학생 운동', '우리말 사전 만들기'], ['상하이 임시 정부', '하얼빈 의거', '훙커우 공원 의거']], 2, [['탑골공원 만세'], ['한국광복군 창설']], 0.25),
            SORT('독립운동을 방법에 따라 나누어요.', {}, ['만세·시위', '교육·우리말', '의거·군대'], [['3·1운동', '학생독립운동'], ['교육으로 실력 기르기', '우리말 사전 만들기'], ['하얼빈 의거', '한국광복군']], [2, 1, 1], [['아우내 장터 만세'], ['한글 가르치기'], ['훙커우 공원 의거']], 0.3),
            SORT('광복절에 기념하는 일을 가려내요.', {}, ['광복절에 기념해요', '아니에요'], [['1945년 광복', '1948년 정부 수립'], ['고조선 건국', '훈민정음 반포']], 1, [['나라를 되찾음'], ['정전 협정']], 0.25,
              { conclude: '독립운동은 나라 안팎에서 만세·교육·우리말 지키기·의거 같은 여러 방법으로 이어졌어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '대한민국 임시 정부가 처음 세워진 곳에 ○ 해요.', options: ['중국 상하이', '서울'], answer: '중국 상하이' }] },
      }),
      C4({
        id: 'days.e34.liberation.activity.joy4', type: 'activity', title: '광복의 기쁨과 다짐',
        method: '광복 노래 속 기쁨과 다짐 잇기', tool: 'emotion', minutes: 13,
        levels: { easy: '카드 2장(또는 짝 2줄)을 놓고, 카드 뒷면 설명이 처음부터 보인다.', base: '카드 4장을 기쁨·다짐 칸에 나누거나 짝 3줄을 잇는다.', challenge: '카드를 더한 판에서 나누거나 남는 마음 카드가 섞인 판에서 잇는다.' },
        activity: {
          title: '광복의 기쁨과 다짐', tool: 'emotion',
          teacher: '"광복절 노래에는 두 가지 마음이 담겨 있어요. 다시 찾은 땅을 반기는 기쁨, 그리고 되찾은 나라를 오래 지키자는 다짐이에요." 노래를 함께 들은 뒤 주제어 카드를 기쁨과 다짐으로 나누게 한다(가사를 옮겨 적지 않고 주제어로 말한다). "기쁘기만 하면 돼요"라는 학생에게는 "되찾은 나라를 지키려면 무엇이 필요할까요?"라고 묻는다.',
          task: '광복절 노래의 주제어와 광복을 맞은 사람들의 마음을 기쁨·다짐과 이어요.', levels: { easy: { showBack: true, live: true }, base: {}, challenge: {} },
          items: [
            SORT('노래의 주제어를 기쁨과 다짐으로 나누어요.', { mode: 'sort', weather: false }, ['기쁨', '다짐'], [['다시 찾은 땅', '춤추는 바다'], ['오래 지키기', '함께 가꾸기']], 1, [['환한 만세 소리'], ['잊지 않기']], 0.2),
            MT('광복 때의 장면과 사람들의 마음을 이어요.', {}, [['광복 소식을 들음', '기쁨'], ['독립운동가를 떠올림', '고마움'], ['되찾은 나라를 지키기로 함', '뿌듯함']], 2, 3, '화남', 0.25),
            SORT('광복절에 할 다짐을 가려내요.', { mode: 'sort', weather: false }, ['광복절 다짐', '아니에요'], [['태극기 바르게 달기', '독립운동가 이야기 읽기'], ['태극기 버리기', '종일 게임만 하기']], 1, [['역사 바르게 알기'], ['남을 미워하기']], 0.2,
              { conclude: '광복을 맞은 사람들은 다시 찾은 나라를 기뻐했고, 그 나라를 함께 지켜 가자고 다짐했어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '광복을 맞은 사람들의 마음을 한 문장으로 써요.' }] },
        notes: '광복절 노래는 들려주기만 하고 가사를 활동지에 옮겨 적지 않는다(주제어로 다룬다).',
      }),
      C4({
        id: 'days.e34.liberation.wrap.write4', type: 'wrap', title: '광복절 다짐 글',
        method: '광복절 다짐 글', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀을 보고 다짐 1~2문장을 쓴다(점검 2칸).', base: '세 문장 다짐 글을 쓰고 기준표 3칸으로 점검한다.', challenge: '오늘 배운 사실(연도·인물·장소)을 넣어 세 문장 이상 쓰고 점검한다.' },
        wrap: {
          teacher: '"되찾은 나라를 지키려고 나는 무엇을 할까요?" 첫 문장은 광복절이 어떤 날인지, 둘째 문장은 기억하고 싶은 일, 셋째 문장은 내 다짐으로 쓰게 한다. 다른 나라 사람을 미워하는 말을 쓰려는 학생에게는 "다짐 글에는 미워하는 말보다 내가 할 일이 어울려요"라고 돌린다. 출구 2번에서 서울을 고른 학생에게는 활동의 나라 밖 바구니를 다시 보게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'rubric-writing', options: { topic: '광복절에 나의 다짐을 세 문장으로 써요.', minChars: 30, maxChars: 200, minSentences: 3, maxSentences: 5, starter: '광복절은 ○○한 날이다. 나는 ○○하겠다.', placeholder: '내 이름과 주소는 쓰지 않아요.', sample: '광복절은 1945년에 나라를 되찾은 날이다. 나라 안팎에서 애쓴 독립운동가를 기억하고 싶다. 나는 태극기를 바르게 달고 역사를 바르게 알겠다.' },
              prompt: '광복절 다짐을 세 문장으로 쓰고 점검해요.', target: { selfCheck: ['광복절의 뜻을 썼어요', '내 다짐을 썼어요', '세 문장으로 썼어요'], mustInclude: [['하겠다', '할게요', '하겠어요', '지키']] }, difficulty: 0.2,
              levels: {
                easy: { prompt: '틀을 보고 광복절 다짐을 한두 문장으로 써요.', toolOptions: { minChars: 12, minSentences: 1, maxSentences: 2 }, target: { selfCheck: ['광복절의 뜻을 썼어요', '내 다짐을 썼어요'], mustInclude: [['하겠다', '할게요', '하겠어요', '지키']] } },
                challenge: { prompt: '배운 사실을 넣어 다짐 글을 쓰고 점검해요.', target: { selfCheck: ['광복절의 뜻을 썼어요', '배운 사실을 넣었어요', '내 다짐을 썼어요', '세 문장으로 썼어요'], mustInclude: [['1945', '1948', '임시 정부', '독립운동', '광복군', '상하이'], ['하겠다', '할게요', '하겠어요', '지키']] } },
              } },
            CH('대한민국 임시 정부가 처음 세워진 곳은?', ['중국 상하이', '서울'], 0, '대한민국 임시 정부는 1919년 중국 상하이에 세워졌어요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '나라 안팎의 독립운동',
          items: [
            { type: 'table', prompt: '독립운동을 나라 안과 밖으로 나누어 써요.', columns: ['나라 안', '나라 밖'], cells: [['', ''], ['', '']], answer: '나라 안: 3·1운동, 학생독립운동, 우리말 사전 만들기 / 나라 밖: 임시 정부, 한국광복군, 하얼빈 의거' },
            { type: 'short', prompt: '광복절에 독립운동가께 드리고 싶은 말을 써요.' },
          ],
          easy: { note: '"광복절은 ○○한 날이다." 틀로 써요.', items: [{ type: 'draw', prompt: '광복을 기뻐하는 사람들을 그려요.' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 개천절 — 나라의 차례와 고조선 유물 (10.3 국경일) · 단군 이야기는 옛 책에 실려 전해 오는 건국 이야기
  // ======================================================================================================
  {
    const C3 = T('foundation', 3); const C4 = T('foundation', 4);
    const STORY = ['환웅이 하늘에서 내려옴', '곰과 호랑이가 빎', '곰이 웅녀가 됨', '단군왕검이 나라를 세움'];
    M.push(
      C3({
        id: 'days.e34.foundation.intro.crown3', type: 'intro', title: '가장 오래된 나라는?',
        method: '나라 이름 그림 고르기 — 반 투표 그림그래프', tool: 'chart', minutes: 6,
        levels: { easy: '두 줄(고조선·조선)만 그림 수를 함께 세어 읽는다.', base: '세 줄을 견주어 가장 많이 고른 이름을 찾고 맞는 답을 확인한다.', challenge: '네 줄을 모두 읽고, 고조선과 조선이 다른 나라인 까닭을 짝에게 말한다.' },
        intro: {
          teacher: '"우리 역사에서 가장 오래된 나라는 무엇일까요?" 가상의 3학년 한 반이 고른 그림그래프를 함께 읽고 시연 단추로 가장 많이 고른 줄(조선)을 보인다. "많이 고른 것이 정답일까요?"라고 되물은 뒤, 우리 역사의 첫 나라는 단군왕검이 세웠다고 전해지는 고조선이고 조선은 아주 오랜 뒤의 다른 나라라고 알린다. 개천절(10월 3일)은 고조선을 세운 것을 기념하는 국경일이라고 덧붙인다.',
          student: '그림그래프에서 친구들이 가장 많이 고른 이름을 찾아요. 많이 고른 것이 정답인지 짝과 이야기해요.',
          demo: VOTE('가장 오래된 나라', [['고조선', 8], ['조선', 10], ['고려', 3], ['신라', 2]], '가장 많이 고른 이름은?'),
          art: { draw: 'a long paper ribbon timeline with small paper palaces from ancient to modern times under layered paper mountains', banner: '첫 나라는 어디일까', extra: [{ motif: 'mountain', x: 300, y: 196, color: 'mint', s: 0.6 }] },
        },
        notes: '그래프 수는 가상의 반이다(많이 고른 답이 틀릴 수 있다는 것을 보이려고 조선을 가장 많게 했다).',
      }),
      C3({
        id: 'days.e34.foundation.activity.line3', type: 'activity', title: '나라의 차례 시간 띠',
        method: '나라의 차례 시간 띠', tool: 'timeline', minutes: 14,
        levels: { easy: '카드 3장(또는 칸마다 한 장)을 놓고, 놓으면 바로 맞는지 알려 준다.', base: '카드 4장(또는 3장)을 차례대로 놓거나 나눈다.', challenge: '카드가 하나 더해진 판(첫 문항은 대한민국까지 5장)을 놓거나, 틀린 카드를 뺀다.' },
        activity: {
          title: '나라의 차례 시간 띠', tool: 'timeline',
          teacher: '"고려와 조선 가운데 어느 나라가 먼저일까요?" 나라마다 아는 인물을 하나씩 떠올리게 한다(신라-선덕 여왕, 조선-세종대왕). 삼국을 한 나라로 여기는 학생에게는 "고구려·백제·신라 세 나라예요"라고 알려 준다. 고조선을 조선 바로 앞에 두는 학생에게는 시간 띠의 양 끝에 두 나라를 놓고 견주게 한다.',
          task: '우리 역사의 나라를 세워진 차례대로 놓고, 인물을 나라에 따라 나누어요.', levels: CARD_LV,
          items: [
            ORDX('나라를 세워진 차례대로 놓아요.', { axis: ['옛날', '오늘날'] }, [{ id: 'go', text: '고조선', motif: 'mountain' }, { id: 'sam', text: '고구려·백제·신라', motif: 'house' }, { id: 'kor', text: '고려', motif: 'flower' }, { id: 'jo', text: '조선', motif: 'sun' }], 2,
              { id: 'kr', text: '대한민국', motif: 'star' }, 0.25),
            SORT('인물을 나라에 따라 나누어요.', { mode: 'sort', axis: ['옛날', '오늘날'] }, ['고조선', '신라', '조선'], [['단군왕검'], ['선덕 여왕'], ['세종대왕']], 1, [[], [], ['장영실']], 0.25),
            ORD('조선 다음의 차례를 놓아요.', { axis: ['옛날', '오늘날'] }, [{ id: 'jo', text: '조선', motif: 'sun' }, { id: 'dh', text: '대한제국', motif: 'star' }, { id: 'kr', text: '대한민국', motif: 'flower' }], 1,
              { id: 'go', text: '고조선', why: '고조선은 우리 역사의 맨 처음 나라예요.' }, 0.3,
              { conclude: '우리 역사는 고조선 → 삼국 → 고려 → 조선 → 대한제국 → 대한민국 차례로 이어져요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '나라의 차례 빈칸을 채워요.', text: '고조선 → 삼국 → ___ → 조선 → 대한제국 → 대한민국', answer: '고려' }] },
      }),
      C3({
        id: 'days.e34.foundation.activity.who3', type: 'activity', title: '단군 이야기 인물과 한 일',
        method: '단군 이야기 인물과 한 일', tool: 'emotion', minutes: 13,
        levels: { easy: '짝 2줄을 잇고, 카드 뒷면 설명이 처음부터 보인다.', base: '짝 3줄을 잇는다.', challenge: '짝 4줄을 잇거나, 남는 함정 카드가 섞인 판에서 잇는다.' },
        activity: {
          title: '단군 이야기 인물과 한 일', tool: 'emotion',
          teacher: '"하늘에서 내려온 이는 누구였나요?" 1학년 때 들은 이야기를 떠올리며 잇는다. 단군왕검과 환웅을 헷갈리는 학생에게는 "환웅과 웅녀의 아들이 단군왕검이라고 전해져요"라고 짚는다. 이야기를 그대로 사실로만 여기거나 거짓으로만 여기는 학생에게는 "옛 책에 실려 전해 오는 나라를 세운 이야기예요"라고 알려 준다.',
          task: '단군 이야기 속 인물·물건·낱말과 뜻을 이어요.', levels: { easy: { showBack: true }, base: {}, challenge: {} },
          items: [
            MT('단군 이야기 속 인물과 한 일을 이어요.', { weather: false }, [['환웅', '하늘에서 내려옴'], ['웅녀', '곰이 사람이 됨'], ['단군왕검', '고조선을 세움'], ['호랑이', '참지 못하고 나감']], 2, 3, null, 0.25),
            MT('이야기 속 물건·곳과 뜻을 이어요.', { weather: false }, [['쑥과 마늘', '곰이 먹으며 견딤'], ['아사달', '고조선의 도읍'], ['삼국유사', '이야기가 실린 옛 책']], 2, 3, '측우기', 0.3),
            MT('낱말과 뜻을 이어요.', { weather: false }, [['개천절', '하늘이 열린 날'], ['고조선', '우리 역사의 첫 나라'], ['단군 이야기', '나라를 세운 이야기']], 2, 3, '나라를 되찾은 날', 0.25,
              { conclude: '단군 이야기는 『삼국유사』 같은 옛 책에 실려 전해 오는, 고조선을 세운 이야기예요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '개천절에 기념하는 일에 ○ 해요.', options: ['고조선을 세운 일', '한글을 만든 일'], answer: '고조선을 세운 일' }] },
      }),
      C3({
        id: 'days.e34.foundation.wrap.tell3', type: 'wrap', title: '짝에게 단군 이야기 들려주기',
        method: '짝에게 단군 이야기 들려주기', tool: 'timer', minutes: 7,
        levels: { easy: '이야기 앞뒤 2장면 카드를 차례로 놓고 짝에게 들려준다.', base: '이야기 4장면 카드를 차례로 놓고 장면마다 한 문장씩 들려준다.', challenge: '4장면을 놓고 카드 글 대신 내 말로 들려준 뒤 점검 칸에 표시한다.' },
        wrap: {
          teacher: '"장면 카드를 차례로 놓고, 장면마다 한 문장씩 짝에게 들려줄까요?" 한 사람이 들려주면 다른 사람은 다음 장면을 손으로 짚어 준다. 곰이 사람이 된 장면을 맨 앞에 두는 학생에게는 "곰과 호랑이가 무엇을 바랐는지가 먼저예요"라고 되묻는다. 출구 2번에서 세종대왕을 고른 학생에게는 시간 띠의 고조선 카드를 다시 보게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '단군 이야기 네 장면', cards: [STORY[2], STORY[0], STORY[3], STORY[1]] }, prompt: '단군 이야기 네 장면을 차례대로 놓아요.', target: { order: STORY }, difficulty: 0.15,
              levels: {
                easy: { prompt: '단군 이야기의 처음과 끝 장면을 놓아요.', toolOptions: { cards: [STORY[3], STORY[0]] }, target: { order: [STORY[0], STORY[3]] } },
                challenge: { prompt: '네 장면을 놓고 내 말로 들려준 뒤 표시해요.', target: { order: STORY, selfCheck: ['내 말로 들려줬어요', '짝의 이야기를 들었어요'] } },
              } },
            CH('고조선을 세운 사람은 누구인가요?', ['단군왕검', '세종대왕'], 0, '단군왕검이 우리 역사의 첫 나라 고조선을 세웠다고 전해져요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '첫 나라 고조선',
          items: [
            { type: 'short', prompt: '단군 이야기에서 곰이 사람이 된 까닭을 써요.' },
            { type: 'draw', prompt: '고조선을 세우는 단군왕검을 그려요.' },
          ],
          easy: { note: '"곰은 ○○을 먹으며 ○○했어요." 틀로 써요.', items: [{ type: 'draw', prompt: '쑥과 마늘을 그려요.' }] },
        },
      }),

      C4({
        id: 'days.e34.foundation.intro.word4', type: 'intro', title: '홍익인간은 무슨 뜻일까',
        method: '이야기 낱말 뜻 짐작 — 반 투표 그림그래프', tool: 'chart', minutes: 6,
        levels: { easy: '뜻 카드 두 줄만 그림 수를 함께 세어 읽는다.', base: '세 줄을 견주어 가장 많이 고른 뜻을 찾고 맞는 뜻을 확인한다.', challenge: '고른 뜻의 까닭(낱말의 어느 글자를 보고 짐작했는지)을 짝에게 말한다.' },
        intro: {
          teacher: '"단군 이야기에 \'홍익인간\'이라는 말이 나와요. 무슨 뜻일까요?" 가상의 4학년 한 반이 짐작한 뜻 그림그래프를 함께 읽고 시연 단추로 가장 많이 고른 줄을 보인 뒤, "널리 사람을 이롭게 한다는 뜻이에요"라고 알려 준다. 환웅이 바람·비·구름을 다스리는 풍백·우사·운사와 함께 내려왔다고 전해진다고 덧붙인다. "이야기는 다 지어낸 거예요"라는 말에는 "옛 책에 실려 전해 오는 건국 이야기예요. 그 시대 사람들이 무엇을 소중히 여겼는지 알 수 있어요"라고 답한다.',
          student: '그림그래프에서 친구들이 가장 많이 짐작한 뜻을 찾아요. 나는 어떤 뜻이라고 생각하는지 짝에게 말해요.',
          demo: VOTE('"홍익인간"의 뜻 짐작', [['널리 사람을 이롭게', 11], ['하늘에서 온 사람', 7], ['힘센 사람', 4]], '가장 많이 고른 뜻은?'),
          art: { draw: 'misty layered paper mountains with paper clouds, wind swirls and rain drops above a small paper village', banner: '홍익인간', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '그래프 수는 가상의 반이다.',
      }),
      C4({
        id: 'days.e34.foundation.activity.relic4', type: 'activity', title: '고조선 유물 가려내기',
        method: '고조선 유물 가려내기', tool: 'sortboard', minutes: 14,
        levels: { easy: '카드 4장을 두 바구니에 나누고, 틀리면 바로 돌아오며 바구니마다 장 수가 보인다.', base: '카드 6장을 나눈 뒤 확인한다.', challenge: '카드 2장이 더해진 8장을 나누고, 고른 까닭을 짝에게 말한다.' },
        activity: {
          title: '고조선 유물 가려내기', tool: 'sortboard',
          teacher: '"고인돌은 무엇에 쓰였을까요?" 고인돌은 힘 있는 사람의 무덤이고, 비파형 동검은 청동으로 만든 칼이라고 알려 준다. 이 유물들이 나온 곳을 보면 고조선의 문화가 퍼진 범위를 짐작할 수 있다고 덧붙인다. 측우기를 고조선 바구니에 넣는 학생에게는 "측우기는 3학년 과학의 날에 만난 유물이에요. 어느 나라 때였나요?"라고 묻는다.',
          task: '유물을 고조선 것과 다른 시대 것으로, 고조선에 대한 말과 옛 책을 가려 바구니에 나누어요.', levels: BOARD_LV,
          items: [
            SORT('유물을 고조선과 다른 시대로 나누어요.', {}, ['고조선', '다른 시대'], [['고인돌', '비파형 동검'], ['측우기', '앙부일구', '첨성대', '자격루']], [1, 3], [['미송리식 토기'], ['훈민정음 해례본']], 0.25),
            SORT('고조선에 대한 말을 가려내요.', {}, ['맞아요', '아니에요'], [['우리 역사의 첫 나라', '단군왕검이 세움', '고인돌이 남아 있음'], ['조선과 같은 나라', '세종대왕이 세움', '한글을 만듦']], 2, [['청동기를 씀'], ['임시 정부를 세움']], 0.25),
            SORT('단군 이야기가 실린 옛 책을 가려내요.', {}, ['단군 이야기가 실린 책', '아닌 책'], [['삼국유사', '제왕운기'], ['동의보감', '훈민정음 해례본']], 1, [[], ['난중일기']], 0.35,
              { conclude: '고인돌과 비파형 동검은 고조선 때의 대표 유물이고, 단군 이야기는 『삼국유사』·『제왕운기』에 실려 전해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '고조선의 유물에 ○ 해요.', options: ['비파형 동검', '앙부일구'], answer: '비파형 동검' }] },
      }),
      C4({
        id: 'days.e34.foundation.activity.map4', type: 'activity', title: '고조선 자리 지도에 표시',
        method: '고조선 자리 지도에 표시', tool: 'map', minutes: 13,
        levels: { easy: '지역 이름(힌트)과 핀 자리 읽기 글자가 보이는 지도에 핀을 꽂는다.', base: '지역 이름이 없는 지도에 핀을 꽂는다.', challenge: '핀을 꽂은 뒤 오늘날 지명과 견주는 보기(방위·도시)도 고른다.' },
        activity: {
          title: '고조선 자리 지도에 표시', tool: 'map',
          teacher: '"고조선은 오늘날 우리가 사는 서울보다 어느 쪽에 있었을까요?" 지도 위쪽이 북쪽이라고 먼저 알린다. 교과서는 고조선이 요령 지방과 한반도 북부를 중심으로 발전했다고 쓴다고 알려 주고, 칸 지도는 경계를 단순하게 줄인 그림이라 정확한 국경이 아니라는 점을 밝힌다. 고조선 땅을 남쪽 바닷가에 꽂는 학생에게는 "고인돌과 비파형 동검이 나온 곳을 생각하며 위쪽을 볼까요?"라고 되묻는다.',
          task: '칸 지도에서 고조선 땅과 오늘날의 도시에 핀을 꽂고 물음에 답해요.', levels: { easy: { names: true, readout: true, regionNames: true }, base: { names: true }, challenge: { names: true } },
          items: [
            PIN(GOJO, '고조선이 자리 잡았던 땅에 핀을 꽂아요.', { region: '고조선 땅' }, { q: '고조선 땅은 오늘날 서울의 어느 쪽에 있나요?', choices: ['북쪽', '남쪽'], answer: 0, tail: '방위도 골라요' }, 0.2),
            PIN(GOJO, '오늘날 우리나라의 수도 서울에 핀을 꽂아요.', { place: '서울' }, { q: '평양과 서울 가운데 더 북쪽에 있는 도시는?', choices: ['평양', '서울'], answer: 0, tail: '보기도 골라요' }, 0.15),
            PIN(GOJO, '고조선 땅 안에 있는 오늘날 도시에 핀을 꽂아요.', { place: '평양' }, { q: '이 도시는 한반도의 어느 쪽에 있나요?', choices: ['북부', '남부'], answer: 0, tail: '보기도 골라요' }, 0.25,
              { conclude: '고조선은 오늘날 서울보다 북쪽, 요령 지방과 한반도 북부를 중심으로 발전했어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 방위를 써요.', text: '고조선 땅은 오늘날 서울의 ___쪽에 있었어요.', answer: '북' }] },
        notes: '칸 지도의 고조선 땅은 교과서 서술(요령 지방과 한반도 북부)을 단순하게 줄인 그림이다. 고조선의 범위·도읍에는 여러 의견이 있으므로 경계를 정답처럼 말하지 않는다.',
      }),
      C4({
        id: 'days.e34.foundation.wrap.card4', type: 'wrap', title: '개천절 알림 카드',
        method: '개천절 알림 카드', tool: 'collage', minutes: 7,
        levels: { easy: '유물·이야기를 떠올리는 조각을 2개 이상 붙인다.', base: '조각을 4개 이상 붙여 알림 카드를 꾸민다.', challenge: '조각 4개 이상에 설명 조각(긴 네모) 1개를 붙이고, 무엇을 알리는지 말한 뒤 점검한다.' },
        wrap: {
          teacher: '"개천절을 모르는 동생에게 알림 카드를 만든다면 무엇을 넣을까요?" 고인돌(네모)·산(세모)·해(동그라미)처럼 오늘 배운 것을 떠올리는 조각을 고르게 한다. 도전 단계는 긴 네모 조각을 \'설명 조각\'으로 붙이고, 그 자리에 들어갈 말을 짝에게 말하게 한다. 출구 2번에서 \'한글을 만든 날\'을 고른 학생에게는 10월의 두 국경일(3일·9일)을 견주게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'collage', options: { shapes: ['square', 'triangle', 'circle', 'rect', 'leaf', 'star'], colors: ['갈색', '초록', '노랑', '파랑', '하양', '빨강'], sizes: ['s', 'm', 'l'] }, prompt: '조각을 4개 이상 붙여 개천절 알림 카드를 꾸며요.', target: { pieces: { min: 4 } }, difficulty: 0.1,
              levels: {
                easy: { prompt: '조각을 2개 이상 붙여 알림 카드를 꾸며요.', target: { pieces: { min: 2 } } },
                challenge: { prompt: '설명 조각(긴 네모)을 넣어 꾸미고 표시해요.', target: { has: [{ shape: 'rect', min: 1 }], pieces: { min: 5 }, selfCheck: ['설명 조각을 붙였어요', '알릴 말을 짝에게 했어요'] } },
              } },
            CH('개천절은 무엇을 기념하는 날인가요?', ['고조선을 세운 일', '한글을 만든 일'], 0, '개천절(10월 3일)은 고조선을 세운 것을 기념하는 국경일이에요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '고조선을 찾아서',
          items: [
            { type: 'table', prompt: '낱말과 뜻을 써요.', columns: ['낱말', '뜻'], cells: [['풍백', ''], ['우사', ''], ['운사', ''], ['홍익인간', '']], answer: '바람 / 비 / 구름 / 널리 사람을 이롭게 함' },
            { type: 'blank', prompt: '빈칸에 알맞은 수를 써요.', text: '개천절은 ___월 3일, 고조선을 세운 것을 기념하는 국경일이에요.', answer: '10' },
          ],
          easy: { note: '풍(바람)·우(비)·운(구름) 글자를 떠올려요.', items: [{ type: 'draw', prompt: '고인돌을 그려요.' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 한글날 — 자음 원리와 한글이 걸어온 길 (10.9 국경일)
  // ======================================================================================================
  {
    const C3 = T('hangul', 3); const C4 = T('hangul', 4);
    const PATH = [{ id: 'make', text: '훈민정음 창제', big: '1443' }, { id: 'pub', text: '훈민정음 반포', big: '1446' }, { id: 'gagya', text: '가갸날 기념 시작', big: '1926' }, { id: 'unesco', text: '해례본 세계기록유산', big: '1997' }];
    const BASIC = ['ㄱ', 'ㄴ', 'ㅁ', 'ㅅ', 'ㅇ'];
    M.push(
      C3({
        id: 'days.e34.hangul.intro.mouth3', type: 'intro', title: '소리 낼 때 혀와 목',
        method: '입 모양 그림 보고 소리 고르기', tool: 'body', minutes: 6,
        levels: { easy: 'ㄴ·ㅇ 두 소리를 내며 혀·목 자리가 짚이는 시연을 본다.', base: 'ㄱ·ㄴ·ㅇ 세 소리를 내며 혀·목을 짚고 자기 입술·이도 손으로 짚는다.', challenge: '기본 글자 다섯 소리(ㄱ·ㄴ·ㅁ·ㅅ·ㅇ)를 모두 내며 어디가 움직이는지 짝에게 말한다.' },
        intro: {
          teacher: '"ㄴ을 소리 내 보세요. 혀끝이 어디에 닿나요?" 대답을 듣고(기다릴 반응: "윗니 뒤요", "입천장이요") 시연 단추로 종이 몸의 혀와 목이 차례로 짚이는 것을 보인다. 종이 몸에는 입술과 이 칸이 없으니 ㅁ·ㅅ은 자기 입술과 이를 손가락으로 짚게 한다. 세종대왕이 자음 기본 글자를 소리 낼 때 혀·입·이·목구멍의 모양을 본떠 만들었다고 알린다. "ㄱ은 그냥 꺾은 막대예요"라는 말이 나오면 "혀뿌리가 목구멍을 막는 모양을 본떴어요"라고 알려 준다.',
          student: 'ㄱ, ㄴ, ㅁ, ㅅ, ㅇ을 소리 내 보고 혀·입술·이·목 가운데 어디가 움직이는지 손으로 짚어 보아요.',
          demo: { tool: 'body', options: { mode: 'parts', parts: ['혀', '목', '코', '눈', '귀'], names: true }, sequence: [{ parts: ['혀'] }, { parts: ['혀', '목'] }] },
          art: { draw: 'a paper side view of a face showing a paper tongue and throat beside big paper letters ㄱ ㄴ ㅁ ㅅ ㅇ', banner: '자음은 어떻게 만들었을까', extra: [{ motif: 'leaf', x: 300, y: 206, color: 'buttercup', s: 0.6 }] },
        },
        notes: '종이 몸(body) 교구에 입술·이 칸이 없어 혀·목만 시연하고, ㅁ(입)·ㅅ(이)은 학생이 자기 몸을 짚게 한다.',
      }),
      C3({
        id: 'days.e34.hangul.activity.shape3', type: 'activity', title: '자음과 본뜬 모양 잇기',
        method: '자음 기본 글자와 본뜬 모양 잇기', tool: 'emotion', minutes: 14,
        levels: { easy: '짝 2줄을 잇고, 카드 뒷면 설명이 처음부터 보인다.', base: '짝 3줄을 잇는다.', challenge: '다섯 글자 모두(셋째 문항은 4줄) 잇는다.' },
        activity: {
          title: '자음과 본뜬 모양 잇기', tool: 'emotion',
          teacher: '"소리를 내 보고 혀와 입을 느껴 보세요." 글자마다 직접 소리를 내며 잇게 한다. ㅅ과 ㅇ을 바꾸는 학생에게는 "ㅅ은 이, ㅇ은 목구멍이에요. 소리를 다시 내 볼까요?"라고 짚는다. 모든 자음이 발음 기관을 본떴다고 여기는 학생에게는 "기본 글자 다섯에 획을 더해 나머지를 만들었어요"라고 셋째 문항으로 잇는다.',
          task: '자음 기본 글자와 본뜬 발음 기관, 획을 더한 글자를 이어요.', levels: { easy: { showBack: true }, base: {}, challenge: {} },
          items: [
            MT('자음 기본 글자와 본뜬 모양을 이어요.', { weather: false }, [['ㄱ', '혀뿌리가 목을 막음'], ['ㄴ', '혀끝이 잇몸에 닿음'], ['ㅁ', '입 모양'], ['ㅅ', '이 모양'], ['ㅇ', '목구멍 모양']], 2, 3, null, 0.3),
            MT('본뜬 모양과 자음 기본 글자를 이어요.', { weather: false }, [['입 모양', 'ㅁ'], ['이 모양', 'ㅅ'], ['목구멍 모양', 'ㅇ'], ['혀끝이 잇몸에 닿음', 'ㄴ'], ['혀뿌리가 목을 막음', 'ㄱ']], 2, 3, null, 0.3),
            MT('기본 글자와 획을 더한 글자를 이어요.', { weather: false }, [['ㄱ', 'ㅋ'], ['ㄴ', 'ㄷ'], ['ㅁ', 'ㅂ'], ['ㅅ', 'ㅈ']], 2, 3, null, 0.35,
              { conclude: '자음 기본 글자 ㄱ·ㄴ·ㅁ·ㅅ·ㅇ은 소리 내는 기관을 본떴고, 여기에 획을 더해 ㅋ·ㄷ·ㅂ·ㅈ 같은 글자를 만들었어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '자음 기본 글자와 본뜬 모양을 써요.', columns: ['글자', '본뜬 모양'], cells: [['ㄱ', ''], ['ㄴ', ''], ['ㅁ', ''], ['ㅅ', ''], ['ㅇ', '']], answer: '혀뿌리가 목구멍을 막는 모양 / 혀끝이 윗잇몸에 닿는 모양 / 입 모양 / 이 모양 / 목구멍 모양' }] },
      }),
      C3({
        id: 'days.e34.hangul.activity.build3', type: 'activity', title: '기본 글자로 글자 만들기',
        method: '기본 글자로 글자 만들기', tool: 'hangul', minutes: 13,
        levels: { easy: '모음을 들면 알맞은 자리(오른쪽·아래)가 깜박여 안내한다.', base: '모음 자리를 스스로 골라 글자를 만든다.', challenge: '받침 조각까지 써서 받침 있는 글자를 만든다.' },
        activity: {
          title: '기본 글자로 글자 만들기', tool: 'hangul',
          teacher: '"자음 기본 글자 다섯 개만으로도 글자를 만들 수 있을까요?" 먼저 자음을 놓고 모음을 오른쪽이나 아래에 놓게 한다. ㅗ를 오른쪽에 두려는 학생에게는 "ㅗ는 가로로 길어요. 자음 어디에 놓아야 할까요?"라고 묻는다. 다 만든 글자는 소리 내어 읽고, 그 글자의 자음이 어떤 모양을 본떴는지 한 번 더 말하게 한다.',
          task: '자음 기본 글자와 모음을 모아 글자를 만들어요.', levels: { easy: { slotGuide: true, slotHints: true }, base: {}, challenge: { batchim: BASIC } },
          items: [
            { prompt: 'ㄴ과 모음을 모아 \'나\'를 만들어요.', toolOptions: { consonants: BASIC, vowels: ['ㅏ', 'ㅗ', 'ㅜ', 'ㅣ'] }, target: { syllable: '나' }, difficulty: 0.15,
              levels: { challenge: { prompt: '받침까지 모아 \'난\'을 만들어요.', target: { syllable: '난' } } } },
            { prompt: 'ㅅ과 모음을 모아 \'소\'를 만들어요.', toolOptions: { consonants: BASIC, vowels: ['ㅏ', 'ㅗ', 'ㅜ', 'ㅣ'] }, target: { syllable: '소' }, difficulty: 0.2,
              levels: { challenge: { prompt: '받침까지 모아 \'손\'을 만들어요.', target: { syllable: '손' } } } },
            { prompt: 'ㅁ과 모음을 모아 \'무\'를 만들어요.', toolOptions: { consonants: BASIC, vowels: ['ㅏ', 'ㅗ', 'ㅜ', 'ㅣ'] }, target: { syllable: '무' }, difficulty: 0.2,
              levels: { challenge: { prompt: '받침까지 모아 \'문\'을 만들어요.', target: { syllable: '문' } } },
              conclude: '자음 기본 글자와 모음을 모으면 여러 글자를 만들 수 있어요. 세로 모음은 오른쪽, 가로 모음은 아래에 놓아요.' },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '자음 기본 글자에 ○ 해요.', options: ['ㄴ', 'ㅌ'], answer: 'ㄴ' }] },
      }),
      C3({
        id: 'days.e34.hangul.wrap.line3', type: 'wrap', title: '한글을 만들고 알린 차례',
        method: '한글을 만들고 알린 차례', tool: 'timeline', minutes: 7,
        levels: { easy: '카드 2장(만듦·알림)을 차례대로 놓는다.', base: '카드 3장을 차례대로 놓는다.', challenge: '틀린 카드가 섞인 판에서 그것을 빼고 3장을 놓은 뒤 까닭을 설명한다.' },
        wrap: {
          teacher: '"훈민정음을 만든 해와 백성에게 널리 알린 해는 같을까요?" 1443년에 만들고 1446년에 반포했다는 점을 짚고, 한글날(10월 9일)은 훈민정음 반포를 기념한다고 알린다. 만든 해와 알린 해를 같은 해로 놓는 학생에게는 "만든 해, 알린 해"로 나누어 말하게 한다. 세종대왕이 소리 내는 모양을 본떠 글자를 만든 까닭은 백성이 쉽게 익히게 하려는 뜻이었다고 정리한다.',
          exitTicket: [
            EXIT('timeline', ORD('한글을 만들고 알린 차례를 놓아요.', { axis: ['옛날', '오늘날'] }, [{ id: 'make', text: '훈민정음 창제', big: '1443' }, { id: 'pub', text: '훈민정음 반포', big: '1446' }, { id: 'today', text: '오늘 한글날 기념', motif: 'star' }], 2,
              { id: 'wrong', text: '훈민정음 반포', big: '1945', why: '훈민정음은 1446년에 반포했어요.' }, 0.2)),
            CH('한글날은 무엇을 기념하는 날인가요?', ['훈민정음을 널리 알린 일', '고조선을 세운 일'], 0, '한글날(10월 9일)은 1446년 훈민정음 반포를 기념해요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '자음은 어떻게 만들었을까',
          items: [
            { type: 'blank', prompt: '빈칸에 알맞은 수를 써요.', text: '훈민정음은 ___년에 만들고 1446년에 반포했어요.', answer: '1443' },
            { type: 'short', prompt: '한글이 배우기 쉬운 까닭을 오늘 배운 것으로 써요.' },
          ],
          easy: { note: '"ㄴ은 ○○ 모양을 본떠서" 틀로 써요.', items: [{ type: 'draw', prompt: 'ㅁ을 소리 낼 때 입 모양을 그려요.' }] },
        },
      }),

      C4({
        id: 'days.e34.hangul.intro.eng4', type: 'intro', title: '간판 속 외래어 찾기',
        method: '외래어 간판 그림 고르기 — 반 투표 그림그래프', tool: 'chart', minutes: 6,
        levels: { easy: '간판 카드 두 줄만 그림 수를 함께 세어 읽는다.', base: '세 줄을 견주어 외래어라고 가장 많이 고른 간판을 찾는다.', challenge: '네 줄을 모두 읽고, 그 간판을 우리말로 바꾸면 어떤 이름이 될지 말한다.' },
        intro: {
          teacher: '"거리 간판 그림이에요. 외국에서 온 말로 된 간판은 어느 것일까요?" 가상의 4학년 한 반이 고른 그림그래프를 함께 읽고 시연 단추로 가장 많이 고른 줄을 보인다. "외래어는 다 나쁜 말이에요"라는 말이 나오면 "누구나 알아듣기 쉬운 말을 고르는 것이 중요해요. 오늘은 쉬운 우리말로 다듬은 말을 알아봐요"라고 돌린다. 1926년 처음 \'가갸날\'이라는 이름으로 기념하기 시작해 뒤에 한글날이 되었다고 덧붙인다.',
          student: '그림그래프에서 친구들이 외래어라고 가장 많이 고른 간판을 찾아요. 우리말로 바꾼다면 어떤 이름이 좋을지 짝에게 말해요.',
          demo: VOTE('외래어라고 고른 간판', [['헤어숍', 10], ['빵집', 2], ['카페', 8], ['꽃집', 1]], '가장 많이 고른 간판은?'),
          art: { draw: 'a paper street with small shop signs, some in Korean letters and some in foreign words, paper children pointing at the signs', banner: '간판 속 우리말', extra: [{ motif: 'leaf', x: 300, y: 206, color: 'buttercup', s: 0.6 }] },
        },
        notes: '그래프 수는 가상의 반이다. 실제 가게 이름이나 상표를 쓰지 않는다.',
      }),
      C4({
        id: 'days.e34.hangul.activity.path4', type: 'activity', title: '한글이 걸어온 길',
        method: '한글이 걸어온 길 시간 띠', tool: 'timeline', minutes: 14,
        levels: { easy: '카드 3장(또는 칸마다 한 장)을 놓고, 놓으면 바로 맞는지 알려 준다.', base: '카드 4장을 차례대로 놓거나 잇는다.', challenge: '카드가 하나 더해진 5장을 놓거나 4줄을 모두 잇는다.' },
        activity: {
          title: '한글이 걸어온 길', tool: 'timeline',
          teacher: '"훈민정음 해례본이 세계기록유산이 된 것은 언제일까요?" 연도의 수를 견주며 놓게 한다. 가갸날을 창제 앞에 두는 학생에게는 "한글이 있어야 한글을 기념할 수 있어요"라고 짚는다. 한글날이 1446년부터 있었다고 여기는 학생에게는 기념은 1926년 가갸날에서 시작되었다고 알려 준다.',
          task: '한글과 관련된 일을 차례대로 놓고 연도와 이어요.', levels: CARD_LV,
          items: [
            ORDX('한글이 걸어온 길을 차례대로 놓아요.', { axis: ['옛날', '오늘날'] }, PATH, 2, { id: 'today', text: '오늘 한글날 기념', motif: 'star' }, 0.25),
            MT('연도와 그해의 일을 이어요.', { axis: ['옛날', '오늘날'] }, [['1443년', '훈민정음을 만듦'], ['1446년', '훈민정음을 알림'], ['1926년', '가갸날 기념 시작'], ['1997년', '해례본 세계기록유산']], 2, 3, null, 0.3),
            SORT('일어난 때를 조선과 1900년대 이후로 나누어요.', { mode: 'sort', axis: ['옛날', '오늘날'] }, ['조선 세종 때', '1900년대 이후'], [['훈민정음 창제', '훈민정음 반포'], ['가갸날', '세계기록유산 등재']], 1, [['해례본 펴냄'], ['한글날 기념식']], 0.3,
              { conclude: '한글은 1443년 창제, 1446년 반포 뒤 1926년 가갸날로 기념하기 시작했고, 1997년 해례본이 세계기록유산이 되었어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '한글이 걸어온 길을 써요.', columns: ['연도', '일'], cells: [['1443', ''], ['1446', ''], ['1926', ''], ['1997', '']], answer: '훈민정음 창제 / 훈민정음 반포 / 가갸날 기념 시작 / 훈민정음 해례본 세계기록유산 등재' }] },
      }),
      C4({
        id: 'days.e34.hangul.activity.refine4', type: 'activity', title: '다듬은 우리말로 바꾸기',
        method: '다듬은 우리말로 바꾸기', tool: 'sortboard', minutes: 13,
        levels: { easy: '틀리면 카드가 바로 돌아오고 바구니마다 장 수가 보인다(첫 문항 4장).', base: '외래어 카드를 다듬은 말 바구니에 하나씩 짝지어 넣는다(3짝씩 두 문항).', challenge: '함정 카드나 더한 카드가 섞인 판에서 짝짓고, 활동지에 내가 다듬은 말을 하나 만든다.' },
        activity: {
          title: '다듬은 우리말로 바꾸기', tool: 'sortboard',
          teacher: '"홈페이지를 우리말로 무엇이라고 할까요?" 국립국어원이 외래어를 쉬운 우리말로 다듬어 알리고 있다고 소개한다. 다듬은 말이 어색하다는 학생에게는 "자주 쓰면 익숙해져요. 누구나 알아듣기 쉬운 것이 장점이에요"라고 말한다. 다듬은 말이 없는 카드(함정)를 억지로 넣으려는 학생에게는 "모든 외래어에 다듬은 말이 있는 것은 아니에요"라고 짚는다.',
          task: '외래어와 다듬은 우리말을 나누고, 외래어 카드를 알맞은 다듬은 말 바구니에 넣어요.', levels: BOARD_LV,
          items: [
            SORT('낱말을 외래어와 다듬은 우리말로 나누어요.', {}, ['외래어', '다듬은 우리말'], [['홈페이지', '네티즌', '리플'], ['누리집', '누리꾼', '댓글']], 2, [['스크린도어'], ['안전문']], 0.2),
            { prompt: '외래어 카드를 다듬은 말 바구니에 넣어요.', toolOptions: { slots: ['누리집', '누리꾼', '댓글'], cards: ['리플', '홈페이지', '네티즌'] }, target: { sort: { 누리집: ['홈페이지'], 누리꾼: ['네티즌'], 댓글: ['리플'] } }, difficulty: 0.25,
              levels: { challenge: { prompt: '외래어 카드를 바구니에 넣어요. 남는 카드는 그대로 둬요.', toolOptions: { cards: ['리플', '버스', '홈페이지', '네티즌'] }, target: { sort: { 누리집: ['홈페이지'], 누리꾼: ['네티즌'], 댓글: ['리플'] } } } } },
            { prompt: '생활 속 외래어를 다듬은 말 바구니에 넣어요.', toolOptions: { slots: ['길도우미', '안전문', '참살이'], cards: ['웰빙', '내비게이션', '스크린도어'] }, target: { sort: { 길도우미: ['내비게이션'], 안전문: ['스크린도어'], 참살이: ['웰빙'] } }, difficulty: 0.3,
              levels: { challenge: { prompt: '외래어 카드를 바구니에 넣어요. 남는 카드는 그대로 둬요.', toolOptions: { cards: ['웰빙', '텔레비전', '내비게이션', '스크린도어'] }, target: { sort: { 길도우미: ['내비게이션'], 안전문: ['스크린도어'], 참살이: ['웰빙'] } } } },
              conclude: '외래어를 누구나 알아듣기 쉬운 우리말로 다듬어 쓰면 뜻이 더 잘 통해요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '자주 쓰는 외래어 하나를 골라 우리말로 바꾸어 써요.' }] },
        notes: '\'버스\'·\'텔레비전\'은 이미 우리말처럼 굳어 쓰는 외래어로, 다듬은 말 바구니가 없는 함정 카드다.',
      }),
      C4({
        id: 'days.e34.hangul.wrap.sign4', type: 'wrap', title: '교실 우리말 이름표',
        method: '교실 우리말 이름표 만들기', tool: 'timer', minutes: 7,
        levels: { easy: '모둠이 이름표 2개를 붙이고 점검 칸 2개에 표시한다.', base: '이름표 4개를 붙이고 점검 칸 3개에 표시한다.', challenge: '이름표 6개를 붙이고 점검 칸 4개에 표시한다.' },
        wrap: {
          teacher: '"우리 교실 물건에 다듬은 우리말 이름표를 붙여 볼까요?" 교사 진행으로 모둠마다 교실 물건(게시판·화면·쓰레기통 등)의 이름을 쉬운 우리말로 써서 붙이게 한다. 이름표를 붙인 뒤 모둠이 함께 소리 내어 읽고, 누구나 알아들을 수 있는 말인지 점검한다. 억지로 어려운 말을 지어내는 모둠에는 "1학년 동생도 알아들을까요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '우리말 이름표 점검' }, prompt: '모둠이 한 것에 표시해요.', target: { selfCheck: ['이름표 4개를 붙였어요', '다듬은 말인지 봤어요', '모둠이 함께 읽었어요'] }, difficulty: 0.1,
              levels: {
                easy: { prompt: '모둠이 한 것에 표시해요(2칸).', target: { selfCheck: ['이름표 2개를 붙였어요', '다듬은 말인지 봤어요'] } },
                challenge: { prompt: '모둠이 한 것에 표시해요(4칸).', target: { selfCheck: ['이름표 6개를 붙였어요', '다듬은 말인지 봤어요', '모둠이 함께 읽었어요', '동생도 알 말인지 봤어요'] } },
              } },
            CH('"리플"을 다듬은 우리말은 무엇인가요?', ['댓글', '누리집'], 0, '리플은 댓글, 홈페이지는 누리집으로 다듬었어요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '한글이 걸어온 길',
          items: [
            { type: 'choice', prompt: '"네티즌"을 다듬은 말에 ○ 해요.', options: ['누리꾼', '누리집'], answer: '누리꾼' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '한글날은 처음에 "___날"이라고 불렸어요.', answer: '가갸' },
          ],
          easy: { note: '"○○는 우리말로 ○○예요." 틀로 써요.', items: [{ type: 'draw', prompt: '교실 물건에 우리말 이름표를 붙인 모습을 그려요.' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 학생독립운동기념일 — 퍼진 길과 학생의 권리 (11.3 법정기념일, 교육부·국가보훈부)
  // ======================================================================================================
  {
    const C3 = T('student', 3); const C4 = T('student', 4);
    M.push(
      C3({
        id: 'days.e34.student.intro.start3', type: 'intro', title: '학생 운동이 시작된 곳은?',
        method: '시작된 곳 짐작 — 반 투표 그림그래프', tool: 'chart', minutes: 6,
        levels: { easy: '두 줄(광주·서울)만 그림 수를 함께 세어 읽는다.', base: '세 줄을 견주어 가장 많이 고른 곳을 찾고 맞는 곳을 확인한다.', challenge: '고른 곳의 까닭을 짝에게 말하고, 3·1운동이 시작된 곳과 견준다.' },
        intro: {
          teacher: '"1929년 학생들이 차별에 맞서 거리로 나선 운동은 어디에서 시작되었을까요?" 가상의 3학년 한 반이 짐작한 그림그래프를 함께 읽고 시연 단추로 가장 많이 고른 줄(서울)을 보인다. "많이 고른 곳이 맞을까요?"라고 되물은 뒤, 1929년 10월 나주역에서 일어난 다툼이 계기가 되어 11월 3일 광주의 학생들이 차별에 맞서 거리로 나섰다고 알린다. 3·1운동은 서울에서, 학생독립운동은 광주에서 시작되었다고 견주게 한다.',
          student: '그림그래프에서 친구들이 가장 많이 고른 곳을 찾아요. 많이 고른 곳이 맞는지 짝과 이야기해요.',
          demo: VOTE('학생 운동이 시작된 곳 짐작', [['광주', 7], ['서울', 10], ['부산', 4]], '가장 많이 고른 곳은?'),
          art: { draw: 'students in old paper school uniforms walking from a small paper train station toward a city, autumn paper leaves falling', banner: '1929년의 학생들', extra: [{ motif: 'leaf', x: 300, y: 206, color: 'peach', s: 0.6 }] },
        },
        notes: '그래프 수는 가상의 반이다. 특정 나라 사람 전체를 미워하는 말은 사실과 사람을 나누어 바로잡는다.',
      }),
      C3({
        id: 'days.e34.student.activity.line3', type: 'activity', title: '퍼진 차례 놓기',
        method: '퍼진 차례 놓기', tool: 'timeline', minutes: 14,
        levels: { easy: '카드 2장(또는 3장)을 놓고, 놓으면 바로 맞는지 알려 준다.', base: '카드 3장(또는 4장)을 차례대로 놓거나 잇는다.', challenge: '카드가 하나 더해진 판(첫 문항 4장)을 놓거나, 틀린 카드를 뺀다.' },
        activity: {
          title: '퍼진 차례 놓기', tool: 'timeline',
          teacher: '"광주에서 시작된 운동은 어디까지 퍼졌을까요?" 카드를 놓은 뒤 처음부터 읽게 한다. 3·1운동 이후 가장 큰 민족 운동의 하나로 전국의 학교로 퍼졌다고 정리한다. 1919와 1929를 섞는 학생에게는 두 운동을 시간 띠에 나란히 놓고 수를 견주게 한다. 다툼 자체를 운동의 전부로 여기는 학생에게는 "학생들이 맞선 것은 차별이었어요"라고 짚는다.',
          task: '학생독립운동이 퍼진 차례와 앞뒤의 일을 시간 띠에 놓아요.', levels: CARD_LV,
          items: [
            ORDX('학생독립운동이 퍼진 차례를 놓아요.', { axis: ['먼저', '나중'] }, [{ id: 'najo', text: '나주역 다툼', big: '10월' }, { id: 'gj', text: '광주 학생 시위', big: '11.3' }, { id: 'nation', text: '전국 학교로 퍼짐', motif: 'star' }], 1,
              { id: 'now', text: '기념일로 기억함', motif: 'flower' }, 0.2),
            ORD('나라를 빼앗긴 때부터 차례대로 놓아요.', { axis: ['옛날', '오늘날'] }, [{ id: 'lost', text: '나라를 빼앗김', big: '1910' }, { id: 'mansei', text: '3·1운동', big: '1919' }, { id: 'student', text: '학생독립운동', big: '1929' }, { id: 'lib', text: '광복', big: '1945' }], 2,
              { id: 'wrong', text: '학생독립운동', big: '1919', why: '학생독립운동은 1929년이에요. 1919년은 3·1운동이에요.' }, 0.25),
            MT('때와 그때의 일을 이어요.', { axis: ['옛날', '오늘날'] }, [['1919년', '3·1운동'], ['1929년', '학생독립운동'], ['11월 3일', '학생독립운동기념일']], 2, 3, '광복절', 0.25,
              { conclude: '학생독립운동은 1929년 광주에서 시작해 전국의 학교로 퍼졌고, 11월 3일 기념일로 기억해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 수를 써요.', text: '학생독립운동은 ___년 11월 3일 광주에서 일어났어요.', answer: '1929' }] },
      }),
      C3({
        id: 'days.e34.student.activity.map3', type: 'activity', title: '퍼진 곳 지도에서 찾기',
        method: '퍼진 곳 지도 핀', tool: 'map', minutes: 13,
        levels: { easy: '장소 이름과 핀 자리 읽기 글자가 보이는 지도에 핀을 꽂는다.', base: '장소 이름만 보이는 지도에 핀을 꽂는다.', challenge: '핀을 꽂은 뒤 방위·견주기 보기도 고른다.' },
        activity: {
          title: '퍼진 곳 지도에서 찾기', tool: 'map',
          teacher: '"광주는 서울에서 어느 쪽에 있을까요?" 지도 위쪽이 북쪽이라고 먼저 알린다. 나주는 광주와 가까운 도시라고 알려 준다. 3·1운동처럼 학생독립운동도 한 곳에서 시작해 여러 지역으로 퍼졌다는 점을 견주게 한다. 광주를 동쪽에 꽂는 학생에게는 "서쪽 바다에 가까운 아래쪽 도시를 볼까요?"라고 되묻는다.',
          task: '칸 지도에서 학생독립운동과 관련된 곳에 핀을 꽂고 물음에 답해요.', levels: MAP_LV,
          items: [
            PIN(KOR([P.seoul, P.gwangju, P.daegu, P.busan]), '학생독립운동이 시작된 광주에 핀을 꽂아요.', { place: '광주' }, { q: '광주는 서울의 어느 쪽에 있나요?', choices: ['남쪽', '북쪽'], answer: 0, tail: '방위도 골라요' }, 0.15),
            PIN(KOR([P.seoul, P.gwangju, P.busan, P.pyongyang]), '운동이 퍼져 간 서울에 핀을 꽂아요.', { place: '서울' }, { q: '광주에서 시작된 운동은 어떻게 되었나요?', choices: ['광주에서만 끝남', '서울 등 전국으로 퍼짐'], answer: 1, tail: '보기도 골라요' }, 0.2),
            MQ('지도를 보며 두 운동이 시작된 도시를 골라요.', KOR([P.seoul, P.gwangju, P.busan, P.cheonan]), '두 운동이 처음 시작된 도시를 바르게 짝지은 것은?', ['3·1운동-서울, 학생-광주', '3·1운동-부산, 학생-서울'], 0, 0.3,
              { conclude: '3·1운동은 서울에서, 학생독립운동은 광주에서 시작해 전국으로 퍼졌어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'figure', wide: true, prompt: '지도에서 학생독립운동이 시작된 곳에 ○ 해요.', tool: 'map', figures: [{ options: KORW([PW.seoul, PW.gwangju, PW.busan]), caption: '우리나라 칸 지도' }], answer: '왼쪽 아래 광주 ○' }] },
      }),
      C3({
        id: 'days.e34.student.wrap.fair3', type: 'wrap', title: '공평한 행동 고르기',
        method: '공평한 행동 고르고 결과 보기', tool: 'emotion', minutes: 7,
        levels: { easy: '두 장면 모두 보기 2개 가운데 고르고, 결과가 바로 보인다.', base: '두 장면에서 보기 3개 가운데 고르고 결과를 본다.', challenge: '보기 3개에서 고른 뒤 맞혀야 결과가 보이고, 두 장면의 결과를 견주어 말한다.' },
        wrap: {
          teacher: '"오늘날 학생인 우리는 차별을 보았을 때 무엇을 할 수 있을까요?" 장면을 함께 읽고 고른 뒤 결과와 마음을 소리 내어 읽게 한다. \'같이 웃기\'를 고른 학생에게는 "놀림을 받은 친구는 어떤 마음일까요?"라고 묻는다. 1929년 학생들이 차별에 맞섰던 것처럼 우리 교실에서도 공평하게 대하는 행동이 이어진다고 정리한다. 학생에게 겪은 차별을 털어놓게 하지 않는다.',
          exitTicket: [
            EXIT('emotion', BR('모둠을 만들 때 어떻게 할까요?', '모둠을 만들 때 몇몇이 한 친구만 "너는 안 돼"라며 끼워 주지 않아요.', [
              { id: 'with', text: '"같이 하자" 하고 부른다', result: '친구가 웃으며 모둠에 들어왔어요.', mood: '편안함' },
              { id: 'laugh', text: '같이 웃으며 모른 척한다', result: '친구가 혼자 남아 속상해했어요.', mood: '속상함', why: '한 친구만 빼는 것은 차별이에요.' },
              { id: 'later', text: '나중에 혼자 놀아 준다', result: '모둠에서는 여전히 빠져 있었어요.', mood: '걱정', why: '그 자리에서 함께하자고 말해야 공평해요.' }], 'with', 0.15)),
            EXIT('emotion', BR('말투를 흉내 내요. 어떻게 할까요?', '전학 온 친구의 말투를 몇몇이 흉내 내며 웃어요.', [
              { id: 'stop', text: '"말투로 놀리면 차별이야"', result: '친구들이 놀림을 멈추고 사과했어요.', mood: '편안함' },
              { id: 'join', text: '같이 흉내 내며 웃는다', result: '전학 온 친구가 학교 오기를 싫어해요.', mood: '슬픔', why: '말투나 사는 곳으로 놀리는 것은 차별이에요.' },
              { id: 'pass', text: '못 본 척 지나간다', result: '놀림이 계속되었어요.', mood: '걱정', why: '보고도 지나치면 놀림이 이어져요.' }], 'stop', 0.2)),
            MOOD,
          ],
        },
        worksheet: {
          title: '1929년 광주의 학생들',
          items: [
            { type: 'choice', prompt: '학생들이 맞선 것에 ○ 해요.', options: ['차별', '운동회'], answer: '차별' },
            { type: 'short', prompt: '3·1운동과 학생독립운동이 닮은 점을 한 가지 써요.' },
          ],
          easy: { note: '"둘 다 ○○에서 시작해 ○○로 퍼졌어요." 틀로 써요.', items: [{ type: 'draw', prompt: '친구를 모둠에 부르는 모습을 그려요.' }] },
        },
      }),

      C4({
        id: 'days.e34.student.intro.want4', type: 'intro', title: '1929년 학생들이 바란 것',
        method: '학생들이 바란 것 고르기 — 반 투표 그림그래프', tool: 'chart', minutes: 6,
        levels: { easy: '요구 카드 두 줄만 그림 수를 함께 세어 읽는다.', base: '세 줄을 견주어 가장 많이 고른 카드를 찾는다.', challenge: '네 줄을 모두 읽고, 실제로 학생들이 바란 것과 아닌 것을 가려 말한다.' },
        intro: {
          teacher: '"1929년 광주의 학생들은 무엇을 외쳤을까요?" 가상의 4학년 한 반이 짐작한 그림그래프를 함께 읽고 시연 단추로 가장 많이 고른 줄을 보인다. 학생들이 우리 학생에 대한 차별을 멈추라고, 식민지 교육을 그만두라고, 그리고 조선 독립을 외쳤다고 알린다. \'방학을 늘려라\'처럼 오늘의 바람이 섞인 카드에는 "그때 학생들이 정말 바랐을까요?"라고 되물어 때를 구별하게 한다.',
          student: '그림그래프에서 친구들이 가장 많이 고른 카드를 찾아요. 그때 학생들이 정말 바란 것인지 짝과 이야기해요.',
          demo: VOTE('1929년 학생들이 바란 것 짐작', [['차별을 멈춰라', 11], ['식민지 교육 반대', 6], ['방학을 늘려라', 3], ['시험을 없애라', 2]], '가장 많이 고른 카드는?'),
          art: { draw: 'students holding paper signs on an old paper street, and a modern paper classroom holding a class meeting below', banner: '학생들이 바란 것', extra: [{ motif: 'leaf', x: 300, y: 206, color: 'peach', s: 0.6 }] },
        },
        notes: '그래프 수는 가상의 반이다.',
      }),
      C4({
        id: 'days.e34.student.activity.right4', type: 'activity', title: '권리와 책임 나누기',
        method: '권리·책임 나누기', tool: 'sortboard', minutes: 14,
        levels: { easy: '카드 4장(셋째·둘째 문항은 2장)을 나누고, 틀리면 바로 돌아오며 장 수가 보인다.', base: '카드 6장(또는 4장)을 나눈 뒤 확인한다.', challenge: '카드 2장이 더해진 판을 나누고, 고른 까닭을 짝에게 말한다.' },
        activity: {
          title: '권리와 책임 나누기', tool: 'sortboard',
          teacher: '"권리는 내가 누리는 것, 책임은 내가 다해야 하는 것이에요. 이 카드는 어느 쪽일까요?" 카드를 넣을 때마다 까닭을 한 문장으로 말하게 한다. 권리를 하고 싶은 대로 하는 것으로 여기는 학생에게는 "내가 의견을 말할 권리가 있으면, 친구도 그래요. 그럼 나는 무엇을 해야 할까요?"라고 묻는다. 1929년 학생들이 바란 \'차별 없는 학교\'가 오늘 교실에서 어떻게 이어지는지 생각하게 한다.',
          task: '학생의 권리와 책임, 1929년 학생들의 요구, 권리를 지킨 장면을 바구니에 나누어요.', levels: BOARD_LV,
          items: [
            SORT('학교생활 카드를 권리와 책임으로 나누어요.', {}, ['권리', '책임'], [['의견 말하기', '차별 없이 배우기', '안전하게 지내기'], ['정한 규칙 지키기', '친구 존중하기', '맡은 일 하기']], 2, [['쉬는 시간에 쉬기'], ['물건 아껴 쓰기']], 0.2),
            SORT('1929년 학생들이 요구한 것을 가려내요.', {}, ['요구했어요', '아니에요'], [['학생 차별 반대', '식민지 교육 반대'], ['급식 메뉴 바꾸기', '방학 늘리기']], 1, [['조선 독립'], ['시험 없애기']], 0.25),
            SORT('권리를 지킨 장면과 막은 장면을 나누어요.', {}, ['권리를 지켰어요', '권리를 막았어요'], [['손 들고 의견 말함', '누구나 같은 기회'], ['말투로 놀림', '의견을 못 내게 함']], 1, [['다른 생각도 들음'], ['한 친구만 뺌']], 0.25,
              { conclude: '권리를 누리는 것과 책임을 다하는 것은 함께 가요. 차별 없는 학교는 우리 모두가 만들어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '1929년 학생들이 요구한 것에 ○ 해요.', options: ['학생 차별 반대', '방학 늘리기'], answer: '학생 차별 반대' }] },
      }),
      C4({
        id: 'days.e34.student.activity.pair4', type: 'activity', title: '권리와 책임 짝 짓기',
        method: '권리와 책임 짝 짓기', tool: 'emotion', minutes: 13,
        levels: { easy: '짝 2줄을 잇고, 카드 뒷면 설명이 처음부터 보인다.', base: '짝 3줄을 잇는다.', challenge: '짝 4줄을 잇거나, 남는 함정 카드가 섞인 판에서 잇는다.' },
        activity: {
          title: '권리와 책임 짝 짓기', tool: 'emotion',
          teacher: '"의견을 말할 권리가 있다면, 그와 함께 지킬 책임은 무엇일까요?" 왼쪽 권리를 읽고 "그래서 나는"을 붙여 오른쪽 카드를 이어 읽게 한다. \'뒤에서 불평하기\'를 책임으로 고르는 학생에게는 "회의에서 의견을 말할 자리는 언제일까요?"라고 되묻는다. 상황 문항에서는 권리와 책임을 함께 지키는 행동을 고르게 한다.',
          task: '학생의 권리와 따르는 책임, 기념일과 주인공, 상황과 할 일을 이어요.', levels: { easy: { showBack: true }, base: {}, challenge: {} },
          items: [
            MT('권리와 따르는 책임을 이어요.', { weather: false }, [['의견을 말할 권리', '남의 의견도 듣기'], ['차별 없이 배울 권리', '친구를 차별 않기'], ['안전하게 지낼 권리', '위험한 장난 않기'], ['쉬는 시간에 쉴 권리', '종 치면 자리로']], 2, 3, null, 0.25),
            MT('기념일과 그날의 주인공을 이어요.', { weather: false }, [['3·1절', '온 겨레의 만세 운동'], ['학생독립운동기념일', '차별에 맞선 학생들'], ['개천절', '나라를 세운 단군']], 2, 3, '피란 가족', 0.25),
            MT('상황과 알맞은 행동을 이어요.', { weather: false }, [['투표로 정한 규칙이 싫음', '지키고 다음에 의견'], ['전학 온 친구를 놀림', '"차별이야" 말하기'], ['회의에서 생각이 다름', '손 들고 까닭 말하기']], 2, 3, '뒤에서 불평하기', 0.3,
              { conclude: '권리에는 책임이 따라요. 의견을 말하고, 함께 정한 규칙을 지키고, 친구를 차별하지 않아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '학생의 권리와 책임을 하나씩 써요.', columns: ['권리', '책임'], cells: [['', '']], answer: '예) 의견 말하기 / 정한 규칙 지키기' }] },
      }),
      C4({
        id: 'days.e34.student.wrap.class4', type: 'wrap', title: '우리 반 약속 정하기',
        method: '우리 반 약속 정하기', tool: 'timer', minutes: 7,
        levels: { easy: '반 약속 1개(권리를 담은 것)를 정하고 점검 칸 1개에 표시한다.', base: '권리와 책임을 담은 약속 2개를 정하고 점검 칸 2개에 표시한다.', challenge: '약속 3개를 모두가 함께 정하고 점검 칸 3개에 표시한다.' },
        wrap: {
          teacher: '"1929년 학생들에게 오늘 우리 반 모습을 전한다면, 어떤 약속을 지키는 반이라고 말하고 싶나요?" 교사 진행으로 모둠마다 약속 하나를 내고, 손을 들어 함께 정한다. 약속은 "~하지 않기"보다 "~하기"로 쓰게 한다. 출구 2번에서 \'전쟁과 피란\'을 고른 학생에게는 6월 기념일과 견주어 다시 짚는다. 1년 동안의 기념일을 시간 띠로 다시 떠올리며 마친다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '우리 반 약속 정하기' }, prompt: '우리 반이 한 것에 표시해요.', target: { selfCheck: ['권리를 담은 약속을 정했어요', '책임을 담은 약속을 정했어요'] }, difficulty: 0.1,
              levels: {
                easy: { prompt: '우리 반이 한 것에 표시해요(1칸).', target: { selfCheck: ['권리를 담은 약속을 정했어요'] } },
                challenge: { prompt: '우리 반이 한 것에 표시해요(3칸).', target: { selfCheck: ['권리를 담은 약속을 정했어요', '책임을 담은 약속을 정했어요', '모두 함께 투표로 정했어요'] } },
              } },
            CH('1929년 학생들이 맞선 것은 무엇인가요?', ['학생 차별과 식민지 교육', '전쟁과 피란'], 0, '학생들은 우리 학생 차별과 식민지 교육에 맞섰어요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '학생들이 바란 것',
          items: [
            { type: 'short', prompt: '우리 반이 정한 약속 하나를 써요.' },
            { type: 'short', prompt: '우리 교실에서 차별을 없애려고 할 수 있는 일을 써요.' },
          ],
          easy: { note: '"우리 반은 ○○하기로 해요." 틀로 써요.', items: [{ type: 'draw', prompt: '우리 반 약속을 지키는 모습을 그려요.' }] },
        },
        notes: '학생의 피해 경험을 털어놓게 하지 않는다. 약속은 학급 회의로 정하고 채점하지 않는다.',
      }),
    );
  }

  PaperLessons.registerModules(M);
})();
