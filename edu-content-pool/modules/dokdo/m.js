/* 창체 계기교육 독도교육 — 중학교(7~9학년) 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/events-auto.json 의 dokdo 중.
 * 근거: 교육부 「독도교육 활성화 계획」(2025, 연 10시간 이상 권장), 독도교육 내용체계 중학교(2011) — 영유권 이해(역사·지리·국제법상 근거, 지도·문헌,
 *   일본의 침탈 과정, 일본 주장의 문제점). sources/changche/research-days.md §2. 사료 이름·연도·문구는 같은 학년 단원 재료
 *   lessons/units/g7·g8·g9-cc-dokdo.js(외교부 독도 누리집·동북아역사재단 자료 서술)에 있는 것만 쓴다. 사료 인용은 짧게.
 * 정치적 중립·혐오 표현 금지(framework/BRIEF_EVENTS.md): 대한민국 정부 공식 입장을 사료 근거와 함께 차분히 다루고, 일본 정부의 주장은
 *   '문제점을 근거로 따지는' 대상으로만 둔다. 일본 국민 전체를 탓하거나 비하하는 말은 쓰지 않는다. 정당·현직 정치인·현 정부 정책은 언급하지 않는다.
 *   의용수비대·경찰 경비의 연도는 쓰지 않는다(g9 단원과 같은 원칙). 그래프 점수·인원은 수업용 가상 자료이고 화면에 '가상'·'우리 반 기준'으로 밝힌다.
 *   인물은 가명(하린·도윤 등) 가상 인물이고, 실존 인물(안용복·심흥택)에게 지어낸 대사·감정을 붙이지 않는다(대본은 '해설'로 사실만 말한다).
 * 주제 15개 × 8모듈 = 120모듈. 7학년 5주제(사료 비판·조선 기록·안용복 사건·이름과 위치·일본 정부 주장), 8학년 5주제(태정관 지령·칙령 제41호·
 *   시마네현 고시·무주지 선점·카드뉴스), 9학년 5주제(연합국 각서·강화조약·실효적 지배·주장 유형·토론).
 *
 * 사람 확인: (모두 근거 파일 research-*.md 에는 없고 단원 재료 g7~g9-cc-dokdo.js 의 서술을 옮겼다 — 외교부 독도 누리집(dokdo.mofa.go.kr)·
 *   동북아역사재단 독도연구소 자료에서 확인한다)
 *   - 울릉도~독도 약 87.4km, 오키섬~독도 약 157.5km, 주소 경상북도 울릉군 울릉읍 독도리 (g7-joseon.intro.map, g7-name.*, g7-anyb.intro.route)
 *   - 『삼국사기』 512년 이사부 우산국 복속, 『세종실록』 「지리지」(1454) "우산·무릉 두 섬이 (울진)현 정동쪽 바다에… 날씨가 맑으면 바라볼 수 있다…
 *     신라 때 우산국", 『신증동국여지승람』(1531) 팔도총도의 우산도(위치가 실제와 다름), 『동국문헌비고』(1770) "우산은 왜인들이 말하는 송도",
 *     『만기요람』(1808) "울릉·우산은 모두 우산국 땅" (g7-joseon.*, g7-source.*)
 *   - 1693년 안용복 등 일본 어민에게 끌려감 → 두 나라 교섭 → 1695년 돗토리번 답변(울릉도·독도 모두 돗토리번 소속 아님) → 1696년 1월 막부의 울릉도 도해 금지 (g7-anyb.*)
 *   - 일본은 예전에 울릉도를 다케시마(죽도), 독도를 마쓰시마(송도)로 불렀고 1905년에 독도 이름을 다케시마로 바꿈. 공문서에 '독도'가 처음 나온 것은 1906년 울도 군수 보고서 (g7-name.*)
 *   - 1785년 하야시 시헤이 「삼국접양지도」(울릉도·독도를 조선과 같은 색, "조선의 것"), 1877년 태정관 지령 "죽도 외 일도는 일본과 관계없음"·기죽도약도,
 *     시마네현 질의 → 내무성 조사 → 태정관 판단 (g8-dajo.*)
 *   - 1900년 10월 25일 칙령 제41호(울릉도를 울도로 고쳐 군으로 올리고 울릉전도·죽도·석도 관할, 관보 공포), 돌섬·독섬 → 뜻은 석도·소리는 독도,
 *     죽도 = 울릉도 옆 댓섬(죽서도), 1904년 일본 군함 기록 "한국인은 이 섬을 독도라 쓴다" (g8-chik.*)
 *   - 1904년 러일전쟁·한일의정서, 1905년 2월 시마네현 고시(대한제국에 알리지 않음), 1905년 11월 을사늑약, 1906년 심흥택 보고 "본군 소속 독도"·
 *     참정대신 지령 제3호 "독도 영지설은 전혀 근거가 없다", 1910년 국권 피탈 (g8-1905.*)
 *   - 무주지 선점 요건(주인 없는 땅·국가의 영유 의사·실제 지배) — 기초 수준 설명 (g8-terra.*)
 *   - 1943년 카이로 선언 "폭력과 탐욕으로 탈취한 모든 지역", 1945년 포츠담 선언, 1946년 1월 각서 제677호(울릉도·독도·제주도를 일본 통치·행정 범위에서 제외),
 *     1946년 6월 각서 제1033호(일본 배·선원 독도 12해리 접근 금지), 1951년 강화조약 제2조(제주도·거문도·울릉도를 포함하는 한국), 한국 섬 3천여 개 (g9-scap.*, g9-treaty.*)
 *   - 1952년 1월 「인접 해양의 주권에 대한 대통령 선언」(평화선, 독도 포함), 울릉도 주민의 독도의용수비대 → 경찰 → 독도경비대, 독도 등대·천연보호구역,
 *     실효적 지배 = 평화적·계속적·공개적 국가 권한 행사, 국제사법재판소 회부 제안에 정부는 분쟁이 없다는 입장 (g9-control.*, g9-claims.*)
 *   - 일본 정부 주장 세 유형(고유영토론·무주지 선점론·조약 해석론)과 그 모순 (g9-claims.*, g7-claim.*)
 *   - 일본 정부의 "각서는 최종 결정이 아니다" 주장과 "그 뒤 연합국이 이 조치를 바꾼 적이 없다"는 정부 설명 (g9-scap.activity.dil·read)
 *   - 혐오 표현을 '고를 수 없는 보기·함정 카드'로 보여 주는 장면(g7-claim.activity.dil, g7-claim.activity.match, g9-claims.activity.contra) — 문구가 수업에 알맞은지
 * 계획과 달리 쓴 곳: g8-dajo.activity.comp 지도 4장 → 3장(근거 자료에서 확인한 옛 지도가 3장), g9-control.activity.chart 분류 '연구' → '시설'
 *   (g9·g10 단원의 영역 분류), g7-anyb.activity.script 교섭 장면 대사 → 가상 진행자·해설자 방송 대본(실존 인물 대사 금지),
 *   g8-news.activity.design 색종이 판은 글을 못 써서 칸 배치·대비·점검만(문구는 activity.caption), g9-debate 상대 역 = 일본 정부 주장 검토 역.
 */
(function () {
  const ALL = [];
  // 주제마다 공통 칸을 채우는 모듈 틀. sid = '<intro|activity|wrap>.<이름>'
  const MK = (topic, grades) => (sid, o) => Object.assign({ id: `dokdo.m.${topic}.${sid}`, schema: 'edu-module.v1', type: sid.split('.')[0], domain: 'dokdo', band: '중', topic: `dokdo.m.${topic}`, grades }, o);
  const sid = (s) => (typeof s === 'string' ? s : s.id || s.label);

  // ---- 카드 판 문항 조각: { prompt, toolOptions, target } ----
  const strip = (cards) => cards.map((c) => { const x = Object.assign({}, c); delete x.to; delete x.ok; return x; });
  // 나누기: cards [{ id, text, to: 칸 }] — to 가 없으면 남겨야 하는 함정 카드
  const SB = (prompt, slots, cards, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'sort', slots, cards: strip(cards) }, opt), target: { sort: Object.fromEntries(slots.map((s) => [sid(s), cards.filter((c) => c.to === sid(s)).map((c) => c.id)])) } });
  // 차례: cards 를 바른 차례로 적는다(화면에서는 섞여 나온다). trap = 함정 카드
  const OB = (prompt, cards, opt, trap) => ({ prompt, toolOptions: Object.assign({ mode: 'order', slots: cards.length, cards: [...cards, ...(trap || [])] }, opt), target: { order: cards.map((c) => c.id) } });
  // 짝: pairs [[칸 글, 카드 글]] + 함정 카드 글
  const MB = (prompt, pairs, extra, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'match', slots: pairs.map((p, i) => ({ id: `s${i + 1}`, label: p[0] })), cards: [...pairs.map((p, i) => ({ id: `k${i + 1}`, text: p[1] })), ...(extra || []).map((t, i) => ({ id: `x${i + 1}`, text: t }))] }, opt), target: { match: Object.fromEntries(pairs.map((p, i) => [`s${i + 1}`, `k${i + 1}`])) } });
  // 시간 띠 짝: pairs [[눈금 글, 카드 글, 연도]] — 눈금이 연도 비례로 놓인다
  const TM = (prompt, pairs, extra, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'match', slots: pairs.map((p, i) => ({ id: `s${i + 1}`, label: p[0], at: p[2] })), cards: [...pairs.map((p, i) => ({ id: `k${i + 1}`, text: p[1] })), ...(extra || []).map((t, i) => ({ id: `x${i + 1}`, text: t }))] }, opt), target: { match: Object.fromEntries(pairs.map((p, i) => [`s${i + 1}`, `k${i + 1}`])) } });
  // 빈칸: pairs [['…___…', 카드 글]]
  const FB = (prompt, pairs, extra, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'fill', slots: pairs.map((p, i) => ({ id: `f${i + 1}`, label: p[0] })), cards: [...pairs.map((p, i) => ({ id: `w${i + 1}`, text: p[1] })), ...(extra || []).map((t, i) => ({ id: `y${i + 1}`, text: t }))] }, opt), target: { fill: Object.fromEntries(pairs.map((p, i) => [`f${i + 1}`, `w${i + 1}`])) } });
  // 고르기: cards [{ id, text, ok }]
  const PB = (prompt, basket, cards, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'pick', basket, cards: strip(cards) }, opt), target: { pick: cards.filter((c) => c.ok).map((c) => c.id) } });
  const IT = (base, easy, challenge, more) => Object.assign({}, base, { levels: Object.assign({}, easy ? { easy } : {}, challenge ? { challenge } : {}) }, more);
  const pickCards = (cards, ids) => ids.map((i) => cards.find((c) => c.id === i));
  // 정리 출구용 교구 문항: 조각(SB·MB…)을 출구 모양으로
  const EX = (tool, piece, diff) => ({ type: 'tool', tool, options: piece.toolOptions, prompt: piece.prompt, target: piece.target, difficulty: diff || 0.2 });
  const LV = (piece) => ({ prompt: piece.prompt, toolOptions: piece.toolOptions, target: piece.target });

  // ---- 갈림길(dilemma): 깊이 2(또는 3) 나무 하나로 쉬움(1단)·기본(2단)·도전(근거 2장 정확히 또는 3단) 판 ----
  const cut = (sc, d) => Object.assign({}, sc, { choices: sc.choices.map((c) => {
    const x = Object.assign({}, c); delete x.end;
    if (c.next && d > 1) x.next = cut(c.next, d - 1);
    else { delete x.next; if (c.next) x.ending = c.end || '다음 단계에서 이어지는 장면을 따라가 봐요.'; }
    return x;
  }) });
  const paths = (good, d) => { const out = []; for (const g of good) { const p = g.slice(0, d); if (!out.some((q) => q.join('>') === p.join('>'))) out.push(p); } return out; };
  // p = { easy, base, challenge } 문항 글, good = 바른 길 목록, R = 근거 카드, ok = 기본 판 맞는 근거(하나 이상), more = { reasons, ok, depth } 도전 판
  const DIL = (p, title, tree, good, R, ok, more, extra) => {
    const dc = (more && more.depth) || 2;
    return Object.assign({
      prompt: p.base, toolOptions: { title, scene: cut(tree, 2), reasons: R, compare: true }, target: { path: paths(good, 2), reasons: ok, some: true },
      levels: {
        easy: { prompt: p.easy, toolOptions: { scene: cut(tree, 1), reasons: [] }, target: { path: paths(good, 1) } },
        challenge: { prompt: p.challenge, toolOptions: { scene: cut(tree, dc), reasons: [...R, ...((more && more.reasons) || [])] }, target: Object.assign({ path: paths(good, dc) }, more && more.ok ? { reasons: more.ok } : { reasons: ok, some: true }) },
      },
    }, extra);
  };

  // ---- 기준표 글쓰기(rubric-writing): 기본·쉬움(틀 starter + 기준 줄임)·도전(기준 더함) ----
  const RW = (prompt, opt, crit, easy, challenge, more) => IT({ prompt, toolOptions: opt, target: { selfCheck: crit } },
    easy ? { prompt: easy.prompt, toolOptions: easy.toolOptions || {}, target: { selfCheck: easy.crit } } : null,
    challenge ? { prompt: challenge.prompt, toolOptions: challenge.toolOptions || {}, target: { selfCheck: challenge.crit } } : null, more);
  const RWX = (prompt, opt, crit, easy, challenge, diff) => IT({ type: 'tool', tool: 'rubric-writing', options: opt, prompt, target: { selfCheck: crit }, difficulty: diff || 0.3 },
    easy ? { prompt: easy.prompt, toolOptions: easy.toolOptions || {}, target: { selfCheck: easy.crit } } : null,
    challenge ? { prompt: challenge.prompt, toolOptions: challenge.toolOptions || {}, target: { selfCheck: challenge.crit } } : null);

  // ---- 그래프(chart) ----
  const CB = (title, unit, data, extra) => Object.assign({ type: 'bar', mode: 'build', title, unit, data }, extra);
  const CR = (title, unit, data, extra) => Object.assign({ type: 'bar', mode: 'read', title, unit, data }, extra);

  // ---- 칸 지도 공통: 동해 어림 칸 지도(실제 축척 지도가 아니다 — 화면 제목에 '어림'을 밝힌다) ----
  const LAND = (cells) => [{ name: '한반도', cells, color: 'cream' }];

  // ==== 7학년 · 누가·언제·왜 남긴 기록인가 (dokdo.m.g7-source) ====
  {
    const M = MK('g7-source', [7]);
    const DIFF2 = [
      { id: 'a', text: '나라에서 펴낸 책 / 이름 모를 개인', to: '만든 사람' }, { id: 'b', text: '1454년 / 날짜가 없음', to: '때' },
      { id: 'c', text: '나라 땅을 정리 / 조회수 모으기', to: '목적' }, { id: 'd', text: '관리가 조사해 적음 / 들은 말을 옮김', to: '만든 사람' },
    ];
    const Q4 = [
      { id: 'q1', text: '이 글을 쓴 사람은 누구일까?', to: '누가' }, { id: 'q2', text: '이름을 밝힌 기관인가?', to: '누가' },
      { id: 'q3', text: '언제 쓴 글일까?', to: '언제' }, { id: 'q4', text: '사건과 얼마나 가까운 때인가?', to: '언제' },
      { id: 'q5', text: '무엇을 위해 남겼을까?', to: '왜' }, { id: 'q6', text: '누구에게 보이려 했을까?', to: '왜' },
      { id: 'q7', text: '직접 보고 적었을까?', to: '어떻게' }, { id: 'q8', text: '원문을 확인할 수 있을까?', to: '어떻게' },
    ];
    // 점검 칸 네 개(만든 이를 밝힘·때를 밝힘·원문을 확인할 수 있음·공식 기관) 가운데 채운 수 — 우리 반 기준표로 매긴 점수
    const RATE = [['외교부 독도 누리집', 4], ['『세종실록』 「지리지」', 4], ['동북아역사재단 자료', 4], ['닉네임 블로그 글', 1], ['출처 없는 카드뉴스', 0]];
    const D1 = { text: '단톡방에 "독도는 1950년에 처음 우리 땅이 됐대!"라는 글이 출처 없이 올라왔다. 친구 도윤이 퍼 나르자고 한다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'share', text: '재미있으니 바로 다른 방에도 퍼 나른다', result: '틀린 연도가 여러 방으로 퍼진다.', impact: [{ who: '읽는 친구들', text: '잘못 알게 된다', tone: -1 }], why: '출처 없는 글은 퍼뜨리기 전에 먼저 확인해요.', ending: '틀린 정보가 빠르게 퍼졌어요.' },
      { id: 'check', text: '공식 기관 누리집에서 먼저 확인해 보자고 한다', result: '외교부 누리집에서 우리 기록이 512년 우산국부터 이어진다는 설명을 찾는다.', impact: [{ who: '도윤', text: '확인하는 법을 알게 된다', tone: 1 }], end: '공식 자료로 확인했어요.',
        next: { text: '확인해 보니 글의 연도는 근거가 없었다. 글은 이미 방에 올라와 있다.', choices: [
          { id: 'fix', text: '"공식 자료와 달라"라며 확인한 출처를 함께 올린다', result: '친구들이 출처를 눌러 보고 글을 다시 읽는다.', impact: [{ who: '단톡방 친구들', text: '바른 정보를 얻는다', tone: 1 }] },
          { id: 'mock', text: '"이런 것도 믿냐"며 올린 친구를 놀린다', result: '올린 친구가 기분이 상해 방을 나간다.', impact: [{ who: '올린 친구', text: '창피함을 느낀다', tone: -1 }], why: '바로잡을 때는 사람을 놀리지 않고 근거를 보여 줘요.' }] } },
      { id: 'ignore', text: '못 본 척 넘어간다', result: '글이 그대로 남아 다른 친구가 또 퍼 나른다.', impact: [{ who: '읽는 친구들', text: '틀린 정보를 믿는다', tone: -1 }], why: '알고도 두면 틀린 정보가 남아요. 확인해서 바로잡을 수 있어요.', ending: '글이 그대로 남았어요.' }] };
    const R1 = [{ id: 'r1', text: '출처를 모르는 글은 공식 자료로 먼저 확인한다' }, { id: 'r2', text: '바로잡을 때는 확인한 출처를 함께 보인다' },
      { id: 'r3', text: '많이 퍼진 글일수록 믿을 만하다', why: '많이 퍼졌다고 사실이 되지는 않아요.' }, { id: 'r4', text: '틀린 글을 올린 사람을 망신 주어야 한다', why: '사람을 탓하면 대화가 닫혀요. 근거로 바로잡아요.' }];
    const D2 = { text: '영상 댓글에 "옛 지도 하나면 끝난다"며 출처 없는 지도 그림이 달렸다. 그림에는 만든 사람도 연도도 없다.', ask: '이 그림을 어떻게 다룰까?', motif: 'cloud', choices: [
      { id: 'use', text: '내 발표 자료에 그대로 넣는다', result: '발표 때 "누가 만든 지도예요?"라는 질문에 답하지 못한다.', impact: [{ who: '나', text: '발표의 믿음이 떨어진다', tone: -1 }], why: '만든 사람·때를 모르는 지도는 근거로 쓰기 어려워요.', ending: '근거를 설명하지 못했어요.' },
      { id: 'trace', text: '만든 사람·때를 찾아본다', result: '같은 그림을 찾지 못하고, 대신 동북아역사재단 자료에서 출처가 밝혀진 옛 지도를 찾는다.', impact: [{ who: '나', text: '출처 있는 자료를 얻는다', tone: 1 }], end: '출처 있는 자료를 찾았어요.',
        next: { text: '찾은 옛 지도는 섬 위치가 실제와 조금 다르게 그려져 있다.', choices: [
          { id: 'say', text: '지도를 쓰되 "위치가 실제와 다르다"는 한계도 함께 말한다', result: '듣는 사람이 자료를 더 믿는다.', impact: [{ who: '듣는 친구들', text: '자료를 바르게 이해한다', tone: 1 }] },
          { id: 'hide', text: '한계는 빼고 좋은 점만 말한다', result: '질문을 받자 당황해 대답하지 못한다.', impact: [{ who: '나', text: '믿음을 잃는다', tone: -1 }], why: '한계를 먼저 밝히면 오히려 설득력이 커져요.' }] } },
      { id: 'reply', text: '"가짜 지도"라고 댓글을 단다', result: '확인한 근거 없이 단 댓글이라 말다툼만 길어진다.', impact: [{ who: '댓글 쓴 사람', text: '기분이 상한다', tone: -1 }], why: '가짜인지 아닌지도 확인한 뒤에 말해요.', ending: '말다툼만 길어졌어요.' }] };
    const R2 = [{ id: 'r1', text: '만든 사람·때가 밝혀진 자료를 근거로 쓴다' }, { id: 'r2', text: '자료의 한계를 함께 밝히면 더 믿을 만하다' },
      { id: 'r3', text: '그림이 그럴듯하면 근거가 된다', why: '그럴듯함은 근거가 아니에요. 출처를 봐요.' }, { id: 'r4', text: '댓글이 많이 달린 자료가 정확하다', why: '댓글 수는 정확성과 상관없어요.' }];
    const D3 = { text: '모둠 숙제로 독도 자료를 모으는데, 하린이 "어느 개인 블로그에 독도 연도가 잔뜩 정리돼 있어"라며 그대로 옮기자고 한다.', ask: '어떻게 할까?', motif: 'leaf', choices: [
      { id: 'copy', text: '빨리 끝내려고 그대로 옮긴다', result: '연도 하나가 공식 자료와 달라 선생님께 다시 확인하라는 말을 듣는다.', impact: [{ who: '모둠', text: '숙제를 다시 한다', tone: -1 }], why: '정리된 글이라도 원래 출처와 견주어 봐야 해요.', ending: '다시 해야 했어요.' },
      { id: 'compare', text: '블로그의 연도를 공식 자료와 하나씩 견준다', result: '대부분 맞지만 하나가 틀린 것을 찾는다.', impact: [{ who: '모둠', text: '정확한 자료를 얻는다', tone: 1 }], end: '하나씩 견주어 틀린 곳을 찾았어요.',
        next: { text: '틀린 곳 하나를 찾았다. 하린은 "그래도 거의 맞으니 블로그를 출처로 쓰자"고 한다.', choices: [
          { id: 'official', text: '출처 칸에는 확인한 공식 자료를 적자고 한다', result: '모둠 자료의 출처가 분명해진다.', impact: [{ who: '읽는 사람', text: '출처를 따라가 확인할 수 있다', tone: 1 }] },
          { id: 'blog', text: '블로그를 출처로 적는다', result: '읽는 사람이 블로그의 틀린 연도까지 믿게 될 수 있다.', impact: [{ who: '읽는 사람', text: '헷갈릴 수 있다', tone: -1 }], why: '출처에는 내가 확인한 원래 자료를 적어요.' }] } }] };
    const R3 = [{ id: 'r1', text: '정리된 글도 원래 자료와 견주어 확인한다' }, { id: 'r2', text: '출처 칸에는 확인한 공식 자료를 적는다' },
      { id: 'r3', text: '대부분 맞으면 모두 믿어도 된다', why: '하나라도 틀리면 그 부분이 근거를 흔들어요.' }, { id: 'r4', text: '빨리 끝내는 것이 가장 중요하다', why: '틀린 자료는 결국 다시 해야 해요.' }];
    const CRIT_MORE = { reasons: [{ id: 'r5', text: '확인한 뒤에는 친구도 확인할 수 있게 길을 알려 준다' }, { id: 'r6', text: '퍼 나르기 전 10초만 멈춰 출처를 본다' }], ok: ['r1', 'r5'] };

    ALL.push(
      M('intro.two', {
        title: '같은 이야기, 두 기록 견주기', method: '같은 사건 두 기록 견주기', tool: 'sortboard', minutes: 6,
        levels: { easy: '다른 점 카드 3장을 \'만든 사람·때\' 두 칸에 나누는 시연을 본다.', base: '다른 점 카드 4장을 \'만든 사람·때·목적\' 세 칸에 나누는 시연을 보고 짝과 까닭을 말한다.', challenge: '두 기록이 왜 다르게 적혔는지 까닭을 한 줄로 말한다.' },
        intro: {
          teacher: '"같은 이야기를 적은 두 글이 있어요. 어느 쪽을 더 믿을 수 있을까요?" 기록 가는 1454년 『세종실록』 「지리지」의 "날씨가 맑으면 바라볼 수 있다" 구절이고, 기록 나는 날짜·글쓴이 없이 "울릉도에서 독도는 늘 보인다"고 쓴 가상의 블로그 글이라고 보여 준다. 시연 단추로 다른 점 카드가 \'만든 사람·때·목적\' 바구니에 담기는 모습을 보인다. "옛날 기록이니까 무조건 맞아요"라는 말에는 "오래됐다는 것과 누가 왜 남겼는지는 같은 질문일까요?"라고 되묻는다.',
          student: '같은 이야기를 적은 두 기록을 보고, 다른 점을 \'만든 사람·때·목적\'으로 나눠 보아요. 어느 기록이 왜 더 믿을 만한지 짝과 한 문장으로 말해요.',
          demo: { tool: 'sortboard', options: { slots: ['만든 사람', '때', '목적'], cards: strip(DIFF2), shuffle: false }, sequence: [{ sort: { '만든 사람': ['a', 'd'], 때: ['b'], 목적: ['c'] } }] },
          art: { draw: 'two paper documents side by side on a desk, an old bound Joseon-era book with brush writing on the left and a modern smartphone blog post on the right, with a magnifying glass between them', banner: '누가·언제·왜 남겼을까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '기록 나는 수업용 가상 글이다. 실제 블로그·개인을 찾아 비판하지 않는다.',
      }),
      M('intro.who', {
        title: '짧은 기록에 질문 가지 달기', method: '이 글은 누가 왜 썼을까 질문 만들기', tool: 'mindmap', minutes: 6,
        levels: { easy: '질문 가지 2개(누가·언제)에 질문 카드가 붙는 시연을 본다.', base: '질문 가지 4개(누가·언제·왜·어떻게)에 질문 카드 8장이 붙는 시연을 보고 하나를 골라 말한다.', challenge: '카드에 없는 질문을 직접 하나 만들어 말한다.' },
        intro: {
          teacher: '"이 한 줄 기록을 읽으면 어떤 질문부터 떠오르나요?" 칠판에 "우산은 왜인들이 말하는 송도이다(『동국문헌비고』, 1770)"를 적고, 가운데 기록에 누가·언제·왜·어떻게 질문 가지가 붙는 시연을 보인다. "내용만 맞으면 누가 썼는지는 상관없어요"라는 말에는 "같은 말을 나라의 책과 낙서가 했다면 무게가 같을까요?"라고 되묻는다. 오늘은 사료를 읽기 전에 던질 네 가지 질문을 익힌다고 밝힌다.',
          student: '가운데 기록 한 줄을 보고, 누가·언제·왜·어떻게 가지에 붙일 질문을 떠올려요. 가장 먼저 묻고 싶은 질문 하나를 골라 말해요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '"우산은 왜인들이 말하는 송도"', slots: ['누가', '언제', '왜', '어떻게'], cards: strip(Q4), shuffle: false }, sequence: [{ sort: { 누가: ['q1', 'q2'], 언제: ['q3', 'q4'], 왜: ['q5', 'q6'], 어떻게: ['q7', 'q8'] } }] },
          art: { draw: 'a single line of old Korean brush writing on paper in the center with four paper-cut branches labeled with question marks spreading out', banner: '이 기록, 무엇부터 물을까?', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
        },
      }),
      M('activity.rate', {
        title: '출처별 믿을 정도 막대', method: '출처별 믿을 만한 정도 매기기', tool: 'chart', minutes: 16,
        levels: { easy: '출처 3개의 점수 막대를 그리고, 막대 끝에 값이 보인다.', base: '출처 5개의 점수 막대를 그리고 가장 낮은 출처와 점수를 높일 방법을 고른다.', challenge: '마지막 문항에서 점수가 같은 출처끼리도 쓰임이 다른 까닭을 고르고, 활동지에 까닭을 쓴다.' },
        activity: {
          title: '출처별 믿을 정도 막대', tool: 'chart',
          teacher: '"점검 칸 네 개 — 만든 이를 밝혔나, 때를 밝혔나, 원문을 확인할 수 있나, 공식 기관인가 — 를 몇 개 채웠는지로 점수를 매겨 봅시다." 표의 점수는 우리 반 기준표로 매긴 것이라고 먼저 밝히고, 막대를 그린 뒤 낮은 출처의 까닭을 말하게 한다. "블로그는 다 거짓말"이라는 학생에게 "블로그 글이 원문과 출처를 밝히면 점수가 어떻게 될까요?"라고 되묻는다. 점수는 출처를 따지는 연습이지 사람을 깎아내리는 표가 아님을 짚는다.',
          task: '점검 칸 네 개로 매긴 출처 점수(우리 반 기준) 막대그래프를 그리고, 점수가 낮은 까닭과 높일 방법을 골라요.',
          levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            IT({ prompt: '표를 보고 출처 다섯 곳의 점수 막대를 그리세요(점검 칸 4개 가운데 채운 수).', toolOptions: CB('출처 점수(우리 반 기준표)', '점', RATE, { xLabel: '출처', yLabel: '채운 점검 칸', max: 4, scale: 1 }), target: { build: true } },
              { prompt: '표를 보고 출처 세 곳의 점수 막대를 그리세요.', toolOptions: { data: [RATE[0], RATE[3], RATE[4]] } }),
            IT({ prompt: '점수가 가장 낮은 출처를 그래프에서 고르세요.', toolOptions: CR('출처 점수(우리 반 기준표)', '점', RATE, { xLabel: '출처', yLabel: '채운 점검 칸', max: 4, scale: 1, question: '점수가 가장 낮은 출처는?', choices: RATE.map((d) => d[0]) }), target: { pick: 4 } },
              { prompt: '출처 세 곳 가운데 점수가 가장 낮은 곳을 고르세요.', toolOptions: { data: [RATE[0], RATE[3], RATE[4]], choices: [RATE[0][0], RATE[3][0], RATE[4][0]] }, target: { pick: 2 } }),
            IT({ prompt: '블로그 글의 점수를 높이려면 무엇을 더해야 할지 고르세요.', toolOptions: CR('출처 점수(우리 반 기준표)', '점', RATE, { xLabel: '출처', yLabel: '채운 점검 칸', max: 4, scale: 1, question: '블로그 글이 점수를 얻으려면?', choices: ['원문과 출처를 밝힌다', '글을 더 길게 쓴다', '공감 수를 늘린다'] }), target: { pick: 0 } },
              null,
              { prompt: '점수가 4점으로 같은 세 출처 가운데 『세종실록』 「지리지」만의 쓰임을 고르세요.', toolOptions: { question: '「지리지」만 할 수 있는 일은?', choices: ['그때 사람들의 인식을 직접 보여 준다', '오늘의 정부 입장을 알려 준다', '기사보다 짧다'] }, target: { pick: 0 } },
              { conclude: '믿을 만한 정도는 이름값이 아니라 만든 사람·때·원문·기관을 따져 매겨요. 점수가 같아도 1차 사료와 오늘의 설명 자료는 쓰임이 달라요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '출처 없는 카드뉴스를 근거로 쓰기 어려운 까닭을 점검 칸 두 개를 들어 써요.' }] },
      }),
      M('activity.dil', {
        title: '출처 모를 독도 글 갈림길', method: '출처 모를 독도 글을 만났을 때', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림길 1번에서 고르고 결과 장면을 본다.', base: '갈림길 2번을 끝까지 가 본 뒤 알맞은 근거 카드를 하나 이상 고른다.', challenge: '갈림길 2번을 간 뒤, 더 섞인 근거 카드 가운데 맞는 근거 2장을 정확히 고른다.' },
        activity: {
          title: '출처 모를 독도 글 갈림길', tool: 'dilemma',
          teacher: '"우리 땅을 지키는 글이라면 확인 없이 퍼뜨려도 괜찮을까요?" 학생마다 한 길을 끝까지 가 본 뒤 되돌아가 다른 길의 결과와 견주게 한다. "좋은 뜻이면 연도가 좀 틀려도 된다"는 학생에게 "틀린 연도 하나를 상대가 짚으면 맞는 근거까지 의심받지 않을까요?"라고 되묻는다. 바로잡을 때도 사람을 놀리지 않고 출처를 보여 주는 길을 고르게 한다.',
          task: '출처 모를 독도 글을 만났을 때 길을 골라 결과를 따라가고, 끝에서 내 판단의 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '출처 없는 글이 단톡방에 올라왔어요. 한 번 골라 결과를 보세요.', base: '출처 없는 글이 단톡방에 올라왔어요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '출처 없는 글이 단톡방에 올라왔어요. 두 번 골라 끝까지 가고 맞는 근거 2장을 정확히 고르세요.' },
              '단톡방의 출처 없는 글', D1, [['check', 'fix']], R1, ['r1', 'r2'], CRIT_MORE),
            DIL({ easy: '출처 없는 지도 그림이 댓글에 달렸어요. 한 번 골라 결과를 보세요.', base: '출처 없는 지도 그림이 댓글에 달렸어요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '출처 없는 지도 그림이 댓글에 달렸어요. 두 번 골라 끝까지 가고 맞는 근거 2장을 정확히 고르세요.' },
              '댓글의 옛 지도 그림', D2, [['trace', 'say']], R2, ['r1', 'r2'], { reasons: [{ id: 'r5', text: '지도 하나보다 여러 기록을 함께 본다' }, { id: 'r6', text: '그림은 크게 보일수록 정확하다' }], ok: ['r1', 'r2'] }),
            DIL({ easy: '모둠 숙제에 블로그 글을 옮기자고 해요. 한 번 골라 결과를 보세요.', base: '모둠 숙제에 블로그 글을 옮기자고 해요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '모둠 숙제에 블로그 글을 옮기자고 해요. 두 번 골라 끝까지 가고 맞는 근거 2장을 정확히 고르세요.' },
              '블로그 연도 옮기기', D3, [['compare', 'official']], R3, ['r1', 'r2'], { reasons: [{ id: 'r5', text: '블로그 글쓴이를 찾아가 따진다' }], ok: ['r1', 'r2'] },
              { conclude: '출처를 모르는 글은 퍼뜨리기 전에 공식 자료로 확인하고, 바로잡을 때는 사람이 아니라 근거를 보여 줘요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '출처 없는 독도 글을 받았을 때 가장 먼저 할 일은?', options: ['바로 퍼 나른다', '공식 기관 자료로 확인한다', '올린 사람을 놀린다'], answer: '공식 기관 자료로 확인한다' }] },
      }),
      M('activity.kind', {
        title: '사료 종류와 뜻 잇기', method: '사료 종류 나누기', tool: 'wordcards', minutes: 16,
        levels: { easy: '사료 종류 3개와 뜻을 잇고, 놓으면 바로 맞는지 알려 준다.', base: '사료 종류 4개와 뜻을 잇고, 빈칸 문장에 종류 이름을 넣는다.', challenge: '종류마다 예시 사료를 붙이는 문항까지 하고, 함정 카드가 섞인다.' },
        activity: {
          title: '사료 종류와 뜻 잇기', tool: 'wordcards',
          teacher: '"지리지와 지도는 둘 다 땅을 다루는데 무엇이 다를까요?" 종류와 뜻을 이은 뒤 종류마다 우리가 배울 사료 하나를 떠올리게 한다. "역사책이면 다 같은 무게"라는 학생에게 "나라가 펴낸 책과 개인이 쓴 여행기는 만든 사람이 같을까요?"라고 되묻는다. 외교 문서는 두 나라 사이에 오간 공식 문서라서 상대국의 생각도 함께 보여 준다는 점을 짚는다.',
          task: '관찬 사서·지리지·지도·외교 문서 카드를 뜻과 잇고, 우리가 배울 사료가 어느 종류인지 붙여요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            IT(MB('사료 종류와 그 뜻을 이어 보세요. 맞지 않는 카드는 남겨요.', [['관찬 사서', '나라가 펴낸 역사책'], ['지리지', '지역의 땅·산물·섬을 적은 책'], ['지도', '땅의 모양과 자리를 그린 것'], ['외교 문서', '나라 사이에 오간 공식 문서']], ['아무나 쓴 짧은 메모']),
              MB('사료 종류 세 개와 뜻을 이어 보세요.', [['관찬 사서', '나라가 펴낸 역사책'], ['지리지', '지역의 땅·산물·섬을 적은 책'], ['지도', '땅의 모양과 자리를 그린 것']], [])),
            IT(FB('빈칸에 알맞은 사료 종류를 넣으세요.', [['『세종실록』 「지리지」는 땅과 섬을 적은 ___이다.', '지리지'], ['팔도총도는 우산도를 그린 ___이다.', '지도'], ['『삼국사기』는 나라가 펴낸 ___이다.', '관찬 사서']], ['개인 일기'])),
            IT(MB('종류마다 알맞은 예시 사료를 이어 보세요.', [['관찬 사서', '『삼국사기』'], ['지리지', '『세종실록』 「지리지」'], ['지도', '「팔도총도」']], ['출처 없는 카드뉴스']),
              null,
              MB('종류마다 알맞은 예시 사료를 이어 보세요(함정 카드 포함).', [['관찬 사서', '『삼국사기』'], ['지리지', '『세종실록』 「지리지」'], ['지도', '「팔도총도」'], ['외교 문서', '울릉도를 두고 오간 교섭 문서']], ['출처 없는 카드뉴스', '개인 블로그 연표']),
              { conclude: '사료는 종류마다 보여 주는 것이 달라요. 무엇을 증명하고 싶은지에 따라 알맞은 종류를 골라요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '사료 종류마다 뜻을 짧게 써요.', columns: ['종류', '뜻'], cells: [['관찬 사서', ''], ['지리지', ''], ['외교 문서', '']], answer: '나라가 펴낸 역사책, 지역의 땅·섬을 적은 책, 나라 사이 공식 문서' }] },
      }),
      M('activity.check', {
        title: '사료 비판 네 문장', method: '사료 비판 점검표 써 보기', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '문장 틀(빈칸)을 채워 문단마다 쓰고 기준 2개로 점검한다.', base: '사료 하나로 누가·언제·왜·믿을 정도 네 문장을 세 문단에 나눠 쓰고 기준 3개로 점검한다.', challenge: '마지막 문단에 그 사료의 한계 한 문장을 더 쓰고 기준 4개로 점검한다.' },
        activity: {
          title: '사료 비판 네 문장', tool: 'rubric-writing',
          teacher: '"『세종실록』 「지리지」를 누가, 언제, 왜 만들었는지 한 문장씩 말해 볼까요?" 칠판에 「지리지」(1454, 조선 정부가 펴낸 지리 기록)와 팔도총도(『신증동국여지승람』, 1531) 두 사료를 적고 하나를 고르게 한다. "믿을 정도는 \'아주 믿을 만하다\'라고만 쓰면 된다"는 학생에게 "왜 그런지 점검 칸 하나를 들어 줄 수 있을까요?"라고 되묻는다. 팔도총도처럼 위치가 실제와 다른 한계도 숨기지 않고 쓰는 것이 사료 비판이라는 점을 짚는다.',
          task: '사료 하나를 골라 \'누가·언제\', \'왜\', \'믿을 정도\'를 문단마다 쓰고 기준표로 스스로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RW('첫 문단: 고른 사료를 누가, 언제 만들었는지 두 문장으로 쓰세요.',
              { topic: '첫 문단 — 『세종실록』 「지리지」와 팔도총도 가운데 하나를 골라, 만든 사람(기관)과 때를 두 문장으로 쓰세요.', minChars: 30, maxChars: 200, minSentences: 2, maxSentences: 3, title: '사료 비판 ① 누가·언제', lines: 3 },
              ['사료 이름을 정확히 썼다', '만든 사람(기관)을 썼다', '만든 때(연도)를 썼다'],
              { prompt: '첫 문단: 틀을 따라 사료의 만든 사람과 때를 쓰세요.', toolOptions: { starter: '___는 ___가 만들었다. 만든 때는 ___년이다.' }, crit: ['만든 사람(기관)을 썼다', '만든 때(연도)를 썼다'] }),
            RW('둘째 문단: 그 사료를 왜 만들었을지 한 문장으로 쓰세요.',
              { topic: '둘째 문단 — 그 사료를 만든 목적을 한두 문장으로 쓰세요(예: 나라의 땅과 섬을 정리하려고).', minChars: 20, maxChars: 160, minSentences: 1, maxSentences: 2, title: '사료 비판 ② 왜', lines: 3 },
              ['만든 목적을 썼다', '목적이 만든 사람과 어울린다', '추측이면 \'~였을 것이다\'로 썼다'],
              { prompt: '둘째 문단: 틀을 따라 만든 목적을 쓰세요.', toolOptions: { starter: '이 사료는 ___하려고 만들었을 것이다.' }, crit: ['만든 목적을 썼다', '추측이면 \'~였을 것이다\'로 썼다'] }),
            RW('셋째 문단: 이 사료를 얼마나 믿을 수 있는지 까닭과 함께 쓰세요.',
              { topic: '셋째 문단 — 이 사료를 근거로 얼마나 믿을 수 있는지, 점검 칸 하나 이상을 까닭으로 들어 쓰세요.', minChars: 30, maxChars: 200, minSentences: 1, maxSentences: 3, title: '사료 비판 ③ 믿을 정도', lines: 3 },
              ['믿을 정도를 밝혔다', '점검 칸 하나 이상을 까닭으로 들었다', '과장하지 않고 썼다'],
              { prompt: '셋째 문단: 틀을 따라 믿을 정도와 까닭을 쓰세요.', toolOptions: { starter: '이 사료는 ___ 믿을 만하다. 왜냐하면 ___ 때문이다.' }, crit: ['믿을 정도를 밝혔다', '점검 칸 하나 이상을 까닭으로 들었다'] },
              { prompt: '셋째 문단: 믿을 정도와 까닭에 이어 이 사료의 한계도 한 문장 더 쓰세요.', toolOptions: { maxSentences: 4, starter: '다만 이 사료는 ___라는 한계가 있다.' }, crit: ['믿을 정도를 밝혔다', '점검 칸 하나 이상을 까닭으로 들었다', '과장하지 않고 썼다', '사료의 한계를 한 문장 썼다'] },
              { conclude: '사료 비판은 사료를 깎아내리는 일이 아니라, 누가·언제·왜 만들었는지 알고 믿을 만한 정도와 한계를 함께 말하는 일이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '내가 쓴 사료 비판 글에 들어간 것에 표시해요.', options: ['만든 사람', '만든 때', '만든 목적', '믿을 정도와 까닭'] }] },
      }),
      M('wrap.rule', {
        title: '사료 읽기 규칙 세 가지', method: '사료 읽기 규칙 세 줄 고르기', tool: 'sortboard', minutes: 7,
        levels: { easy: '규칙 후보 4장을 \'꼭 지킬 규칙·뺄 규칙\'에 나누고, 놓으면 바로 알려 준다.', base: '규칙 후보 6장에서 꼭 지킬 세 가지를 고르고 나머지를 뺀다.', challenge: '나눈 뒤 뺀 규칙 하나를 바르게 고쳐 쓴다.' },
        wrap: {
          teacher: '"오늘 익힌 따지는 법을 우리 반 규칙 세 줄로 만든다면 무엇을 남길까요?" 학생이 나누면 뺀 카드마다 왜 빼야 하는지 한 사람씩 말하게 한다. "우리에게 유리한 자료만 모으면 된다"는 카드를 남긴 학생에게 "상대가 우리 자료의 한계를 먼저 짚으면 어떻게 될까요?"라고 되묻는다.',
          exitTicket: [
            IT(EX('sortboard', SB('사료 읽기 규칙 후보를 \'꼭 지킬 규칙\'과 \'뺄 규칙\'으로 나눠요.', ['꼭 지킬 규칙', '뺄 규칙'], [
              { id: 'k1', text: '만든 사람과 때를 먼저 확인한다', to: '꼭 지킬 규칙' }, { id: 'k2', text: '원문에 없는 말을 덧붙이지 않는다', to: '꼭 지킬 규칙' },
              { id: 'k3', text: '자료의 한계도 함께 말한다', to: '꼭 지킬 규칙' }, { id: 'b1', text: '많이 퍼진 글을 먼저 믿는다', to: '뺄 규칙' },
              { id: 'b2', text: '우리에게 유리한 자료만 모은다', to: '뺄 규칙' }, { id: 'b3', text: '오래된 기록은 따지지 않는다', to: '뺄 규칙' }])),
            LV(SB('규칙 후보 네 장을 두 바구니에 나눠요.', ['꼭 지킬 규칙', '뺄 규칙'], [
              { id: 'k1', text: '만든 사람과 때를 먼저 확인한다', to: '꼭 지킬 규칙' }, { id: 'k2', text: '원문에 없는 말을 덧붙이지 않는다', to: '꼭 지킬 규칙' },
              { id: 'b1', text: '많이 퍼진 글을 먼저 믿는다', to: '뺄 규칙' }, { id: 'b2', text: '우리에게 유리한 자료만 모은다', to: '뺄 규칙' }]))),
            { type: 'choice', prompt: '"오래된 기록이니까 따질 필요 없다"는 말에 대한 반박으로 가장 알맞은 것은?', options: ['오래된 기록은 모두 틀렸다', '오래된 기록도 누가·왜 만들었는지 알아야 바르게 쓸 수 있다', '새 기록만 근거가 된다'], answer: 1, difficulty: 0.2, explain: '오래된 정도가 아니라 만든 사람·때·목적을 따져야 해요.' },
            { type: 'short', prompt: '뺀 규칙 하나를 골라 지킬 만한 규칙으로 고쳐 써요.' },
          ],
        },
        worksheet: {
          title: '우리 반 사료 읽기 규칙',
          items: [
            { type: 'table', prompt: '꼭 지킬 사료 읽기 규칙 세 가지를 써요.', columns: ['차례', '규칙'], cells: [['1', ''], ['2', ''], ['3', '']], answer: '만든 사람·때 확인, 원문에 없는 말 덧붙이지 않기, 한계도 함께 말하기' },
            { type: 'short', prompt: '세 규칙 가운데 내가 가장 지키기 어려울 것 같은 규칙과 그 까닭을 써요.' },
          ],
          easy: { note: '규칙 카드의 글을 그대로 옮겨 써도 돼요.', items: [{ type: 'check', prompt: '꼭 지킬 규칙에 표시해요.', options: ['만든 사람과 때를 확인한다', '많이 퍼진 글을 먼저 믿는다', '자료의 한계도 말한다'] }] },
        },
      }),
      M('wrap.exit', {
        title: '따지는 법 짝 점검', method: '출구 문장: 오늘 배운 따지는 법', tool: 'timer', minutes: 7, delivery: 'guided',
        levels: { easy: '점검 칸 2개(출처·때)에 표시하고 짝에게 30초 말한다.', base: '점검 칸 3개(출처·때·목적)에 표시하고 짝과 30초씩 번갈아 말한다.', challenge: '짝이 말한 문장을 듣고 빠진 칸을 짚어 준다(교사 진행).' },
        wrap: {
          teacher: '"오늘 배운 따지는 법을 짝에게 30초 안에 한 문장으로 말해 볼까요?" 타이머를 말하기 30초·듣기 30초로 두 번 맞추게 한 뒤 짝끼리 번갈아 말하게 한다. "출처만 보면 된다"고 말하는 학생에게 "출처를 알아도 왜 썼는지 모르면 무엇을 놓칠까요?"라고 되묻는다. 짝의 말에 빠진 칸을 짚어 줄 때는 "틀렸어"가 아니라 "○○도 넣으면 좋겠어"로 말하게 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'timer', options: { title: '짝에게 30초 말하기', labels: ['말하기', '듣기'], plan: { work: 20, rest: 20, rounds: 1 }, safety: ['출처(만든 사람)를 따졌다', '만든 때를 따졌다', '만든 목적을 따졌다'] },
              prompt: '말하기 30초·듣기 30초를 2번 하도록 맞추고, 오늘 따진 칸을 모두 표시해요.', target: { plan: { work: 30, rest: 30, rounds: 2 }, safety: true }, difficulty: 0.15 },
            { prompt: '말하기 30초·듣기 30초를 2번 맞추고, 따진 칸 두 개를 표시해요.', toolOptions: { safety: ['출처(만든 사람)를 따졌다', '만든 때를 따졌다'] } }),
            { type: 'choice', prompt: '사료를 읽을 때 오늘 배운 세 질문을 바르게 모은 것은?', options: ['누가·언제·왜', '얼마나 길게·몇 쪽·몇 명', '좋아요 수·댓글 수·조회수'], answer: 0, difficulty: 0.1, explain: '만든 사람·때·목적을 물어야 믿을 정도를 따질 수 있어요.' },
            { type: 'short', prompt: '짝에게 말한 \'오늘 배운 따지는 법\' 문장을 그대로 적어요.' },
          ],
        },
        worksheet: {
          title: '오늘 배운 따지는 법',
          items: [
            { type: 'check', prompt: '오늘 짝에게 말할 때 넣은 칸에 표시해요.', options: ['만든 사람', '만든 때', '만든 목적'] },
            { type: 'short', prompt: '다음에 독도 글을 읽을 때 가장 먼저 던질 질문 하나를 써요.' },
          ],
        },
        notes: '교사가 진행하는 정리다. 짝 활동이 어려운 학급은 교사가 한 학생씩 골라 말하게 하고 나머지는 점검 칸만 표시한다.',
      }),
    );
  }

  // ==== 7학년 · 조선의 지리지와 지도를 시대 순으로 (dokdo.m.g7-joseon) ====
  {
    const M = MK('g7-joseon', [7]);
    const BOOKS = [
      { id: 'b1', text: '『삼국사기』 — 512년 우산국' }, { id: 'b2', text: '『세종실록』 「지리지」(1454)' },
      { id: 'b3', text: '『신증동국여지승람』(1531)' }, { id: 'b4', text: '『동국문헌비고』(1770)' }, { id: 'b5', text: '『만기요람』(1808)' },
    ];
    // 「지리지」 뒤 몇 해 뒤의 기록인가(연도 차 — 근거의 연도에서 셈)
    const GAP = [['『신증동국여지승람』', 77], ['『동국문헌비고』', 316], ['『만기요람』', 354]];
    // 동해 어림 칸 지도 — 울릉도·독도 4칸(한 칸 약 22km, 어림)
    const EASTSEA = { mode: 'scale', grid: [7, 4], title: '울릉도와 독도(어림 칸 지도)', scale: { cell: 22, unit: 'km' }, places: [
      { name: '울릉도', icon: 'island', at: [1, 1] }, { name: '독도', icon: 'island', at: [5, 1] }], regions: LAND([[0, 3]]) };

    ALL.push(
      M('intro.q', {
        title: '언제부터 기록에 있었을까', method: '지난 시간 질문에 답할 기록 찾기', tool: 'wordcards', minutes: 6,
        levels: { easy: '보기 2장 가운데 질문에 답할 기록을 고르는 시연을 본다.', base: '보기 4장(함정 2장) 가운데 답할 기록 2장을 고르는 시연을 본다.', challenge: '고른 기록이 왜 답이 되는지 까닭을 한 줄 말한다.' },
        intro: {
          teacher: '"울릉도와 독도는 언제부터 우리 기록에 나올까요?" 지난 시간 사료 질문을 다시 꺼내고, 시연 단추로 『삼국사기』(512년 우산국)와 『세종실록』 「지리지」(1454) 카드가 바구니에 담기는 모습을 보인다. "독도라는 이름이 나와야 독도 기록"이라는 말에는 "이름이 바뀌어도 같은 섬을 가리킬 수 있을까요? 그건 다음에 따져 봐요"라고 답한다. 오늘은 조선의 기록을 시대 순으로 놓고 「지리지」 구절을 직접 풀어 본다고 밝힌다.',
          student: '"언제부터 우리 기록에 있었나?"라는 질문에 답이 될 기록 카드를 골라요. 고르지 않은 카드는 왜 답이 아닌지 짝과 말해요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '질문에 답할 기록', cards: [{ id: 'p1', text: '『삼국사기』 — 512년 우산국' }, { id: 'p2', text: '『세종실록』 「지리지」(1454)' }, { id: 'p3', text: '오늘 올라온 블로그 연표' }, { id: 'p4', text: '1905년 시마네현 고시' }], shuffle: false }, sequence: [{ pick: ['p1', 'p2'] }] },
          art: { draw: 'a stack of old paper-cut Korean books tied with string, the top one open showing two small islands in an ink-wash sea', banner: '언제부터 기록에 있었을까?', extra: [{ motif: 'wave', y: 230 }] },
        },
      }),
      M('intro.map', {
        title: '울릉도~독도 거리 재기', method: '울릉도·독도 거리와 보임 지도 확인', tool: 'map', minutes: 6,
        levels: { easy: '길 위 칸 번호를 보며 칸 수만 센다.', base: '칸 수에 축척(한 칸 약 22km)을 곱해 거리를 어림한다.', challenge: '어림한 거리를 "날씨가 맑으면 바라볼 수 있다" 구절과 잇는 한 문장을 말한다.' },
        intro: {
          teacher: '"울릉도에서 독도까지 칸을 세어 보면 몇 km쯤일까요?" 어림 칸 지도(한 칸 약 22km)에서 시연 단추로 두 섬 사이 거리가 재어지는 모습을 보이고, 외교부 누리집이 밝힌 거리 약 87.4km와 견준다. "그렇게 멀면 보일 리 없다"는 말에는 『세종실록』 「지리지」의 "날씨가 맑으면 바라볼 수 있다" 구절을 읽어 주고 "늘 보인다가 아니라 맑은 날에 보인다는 말이에요"라고 짚는다. 이 지도는 칸으로 단순하게 그린 어림 지도라는 점을 먼저 밝힌다.',
          student: '어림 칸 지도에서 울릉도와 독도 사이 칸을 세어 거리를 어림해요. 그 거리를 "날씨가 맑으면 바라볼 수 있다" 구절과 이어 짝에게 말해요.',
          demo: { tool: 'map', options: Object.assign({}, EASTSEA, { showCells: true }), sequence: [{ from: '울릉도', to: '독도' }] },
          art: { draw: 'a paper-cut seascape seen from Ulleungdo island on a clear day with the small twin rocky islets of Dokdo faintly visible on the horizon', banner: '맑은 날이면 보이는 섬', extra: [{ motif: 'sun', x: 410, y: 58 }] },
        },
        notes: '칸 지도는 실제 축척 지도가 아니다. 거리는 외교부 독도 누리집(약 87.4km)을 함께 보인다.',
      }),
      M('activity.line', {
        title: '조선 기록 시간 띠', method: '조선 기록 다섯을 시간 띠에', tool: 'timeline', minutes: 16,
        levels: { easy: '기록 카드 3장을 차례로 놓고, 놓으면 바로 맞는지 알려 준다.', base: '기록 카드 5장을 차례로 놓고 연도 눈금에 책 이름을 잇는다.', challenge: '책마다 그 기록이 말하는 내용 설명 카드를 붙인다(함정 카드가 섞인다).' },
        activity: {
          title: '조선 기록 시간 띠', tool: 'timeline',
          teacher: '"『세종실록』 「지리지」 뒤에도 우산도 기록이 이어졌을까요?" 다섯 기록을 시간 띠에 놓은 뒤 1454년부터 1808년까지 몇 백 년이 흘렀는지 함께 셈한다. "기록이 하나면 충분하다"는 학생에게 "한 번 적은 것과 여러 세기에 걸쳐 거듭 적은 것은 무엇이 다를까요?"라고 되묻는다. 『삼국사기』는 신라 때 우산국 이야기를 담은 책이라 조선 기록보다 앞에 놓는다는 점을 짚는다.',
          task: '울릉도·우산도를 적은 우리 기록 다섯 개를 시간 띠에 차례로 놓고, 연도와 설명을 이어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            IT(OB('우산국·우산도를 적은 기록을 옛날부터 차례로 놓으세요.', BOOKS, { axis: ['옛날', '오늘날'] }),
              OB('기록 세 개를 옛날부터 차례로 놓으세요.', [BOOKS[0], BOOKS[1], BOOKS[4]], { axis: ['옛날', '오늘날'] })),
            IT(TM('연도 눈금에 알맞은 책을 이어 보세요.', [['1454년', '『세종실록』 「지리지」', 1454], ['1531년', '『신증동국여지승람』', 1531], ['1770년', '『동국문헌비고』', 1770], ['1808년', '『만기요람』', 1808]], ['대한제국 칙령 제41호'], { axis: ['옛날', '오늘날'] }),
              TM('연도 눈금 세 곳에 알맞은 책을 이어 보세요.', [['1454년', '『세종실록』 「지리지」', 1454], ['1770년', '『동국문헌비고』', 1770], ['1808년', '『만기요람』', 1808]], [], { axis: ['옛날', '오늘날'] })),
            IT(TM('책마다 그 기록이 말하는 내용을 이어 보세요.', [['1454년 「지리지」', '맑은 날 서로 보이는 두 섬', 1454], ['1531년 승람', '팔도총도에 우산도', 1531], ['1770년 문헌비고', '우산은 왜인이 말하는 송도', 1770]], [], { axis: ['옛날', '오늘날'] }),
              null,
              TM('책마다 그 기록이 말하는 내용을 이어 보세요(함정 카드 포함).', [['1454년 「지리지」', '맑은 날 서로 보이는 두 섬', 1454], ['1531년 승람', '팔도총도에 우산도', 1531], ['1770년 문헌비고', '우산은 왜인이 말하는 송도', 1770], ['1808년 만기요람', '울릉·우산은 모두 우산국 땅', 1808]], ['독도에 마을 백 가구', '1905년 다케시마로 바꿈'], { axis: ['옛날', '오늘날'] }),
              { conclude: '조선은 1454년부터 1808년까지 여러 세기에 걸쳐 관찬 기록에 우산도를 꾸준히 적었어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '시간 띠의 기록과 연도를 써요.', columns: ['연도', '기록'], cells: [['1454', ''], ['1531', ''], ['1808', '']], answer: '『세종실록』 「지리지」, 『신증동국여지승람』, 『만기요람』' }] },
      }),
      M('activity.read', {
        title: '「지리지」 구절 풀어 쓰기', method: '「지리지」 구절마다 풀어 쓰기', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '낱말 풀이가 든 문장 틀을 따라 구절마다 풀어 쓴다.', base: '세 구절을 현대어로 두 문장씩 풀어 쓰고 기준(정확성·근거)으로 점검한다.', challenge: '마지막 구절에서 이 기록이 갖는 의미 한 문장을 더 쓴다.' },
        activity: {
          title: '「지리지」 구절 풀어 쓰기', tool: 'rubric-writing',
          teacher: '"\'두 섬이 서로 멀지 않아 날씨가 맑으면 바라볼 수 있다\'를 오늘날 말로 바꾸면 무엇일까요?" 구절을 하나씩 칠판에 적고 낱말 풀이(정동쪽=바로 동쪽, 바라볼 수 있다=눈으로 볼 수 있다)를 함께 읽는다. "늘 보인다는 뜻"이라고 쓰는 학생에게 "\'날씨가 맑으면\'이라는 조건을 빼면 뜻이 어떻게 달라질까요?"라고 되묻는다. 원문에 없는 내용(섬 사람 수 등)을 덧붙이면 근거가 약해진다는 점을 짚는다.',
          task: '『세종실록』 「지리지」(1454)의 우산·무릉 구절을 하나씩 오늘날 말로 풀어 쓰고, 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RW('구절 ①: "우산과 무릉 두 섬이 현의 정동쪽 바다 가운데 있다"를 오늘날 말로 풀어 쓰세요.',
              { topic: '구절 ① "우산·무릉 두 섬이 (울진)현의 정동쪽 바다 가운데 있다" — 오늘날 말로 두 문장 안팎으로 풀어 쓰세요.', minChars: 25, maxChars: 180, minSentences: 1, maxSentences: 2, title: '구절 ① 자리', lines: 3 },
              ['두 섬을 모두 썼다', '정동쪽의 뜻을 바르게 풀었다', '원문에 없는 말을 덧붙이지 않았다'],
              { prompt: '구절 ①: 풀이(정동쪽=바로 동쪽)를 보고 틀을 채우세요.', toolOptions: { starter: '우산과 무릉 두 섬은 울진에서 바로 ___쪽 바다에 있다.' }, crit: ['두 섬을 모두 썼다', '정동쪽의 뜻을 바르게 풀었다'] }),
            RW('구절 ②: "두 섬이 서로 멀지 않아 날씨가 맑으면 바라볼 수 있다"를 풀어 쓰세요.',
              { topic: '구절 ② "두 섬이 서로 멀지 않아 날씨가 맑으면 바라볼 수 있다" — 오늘날 말로 두 문장으로 풀어 쓰세요.', minChars: 25, maxChars: 180, minSentences: 2, maxSentences: 2, title: '구절 ② 보임', lines: 3 },
              ['\'날씨가 맑으면\' 조건을 살렸다', '\'바라볼 수 있다\'를 바르게 풀었다', '원문에 없는 말을 덧붙이지 않았다'],
              { prompt: '구절 ②: 풀이(바라볼 수 있다=눈으로 볼 수 있다)를 보고 틀을 채우세요.', toolOptions: { starter: '두 섬은 멀지 않아서 날씨가 ___ 서로 눈으로 볼 수 있다.', minSentences: 1 }, crit: ['\'날씨가 맑으면\' 조건을 살렸다', '\'바라볼 수 있다\'를 바르게 풀었다'] }),
            RW('구절 ③: "신라 때 우산국이라 했다"를 풀어 쓰세요.',
              { topic: '구절 ③ "신라 때 우산국이라 일컬었다" — 오늘날 말로 한두 문장으로 풀어 쓰세요.', minChars: 15, maxChars: 160, minSentences: 1, maxSentences: 2, title: '구절 ③ 옛 이름', lines: 3 },
              ['신라 때라는 시기를 썼다', '우산국이라는 이름을 썼다', '원문에 없는 말을 덧붙이지 않았다'],
              { prompt: '구절 ③: 틀을 채워 풀어 쓰세요.', toolOptions: { starter: '이 섬들은 ___ 때 ___이라고 불렸다.' }, crit: ['신라 때라는 시기를 썼다', '우산국이라는 이름을 썼다'] },
              { prompt: '구절 ③을 풀어 쓴 뒤, 세 구절이 함께 보여 주는 의미를 한 문장 더 쓰세요.', toolOptions: { maxSentences: 3, starter: '이 세 구절은 조선이 ___을 보여 준다.' }, crit: ['신라 때라는 시기를 썼다', '우산국이라는 이름을 썼다', '원문에 없는 말을 덧붙이지 않았다', '세 구절의 의미를 한 문장으로 썼다'] },
              { conclude: '「지리지」는 두 섬의 자리, 맑은 날 서로 보이는 거리, 신라 때부터의 이름을 함께 적어 조선이 두 섬을 함께 알고 있었음을 보여 줘요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '구절의 뜻을 채워요.', text: '두 섬은 서로 멀지 않아 날씨가 ___ 바라볼 수 있다.', answer: '맑으면' }] },
      }),
      M('activity.comp', {
        title: '지리지·지도 기록 비교표', method: '지리지와 지도 기록 비교표', tool: 'chart', minutes: 16,
        levels: { easy: '사료 3개의 막대를 그리고 막대 끝에 값이 보인다.', base: '「지리지」 뒤 몇 해 뒤 기록인지 막대를 그리고, 기록이 이어진 햇수와 공통점을 읽는다.', challenge: '공통점 보기에 함정이 섞이고, 활동지에 공통점 문장을 쓴다.' },
        activity: {
          title: '지리지·지도 기록 비교표', tool: 'chart',
          teacher: '"「지리지」(1454) 뒤 몇 해 지나서 다음 기록들이 나왔을까요?" 표의 햇수는 기록 연도를 빼서 구한 값이라고 밝히고 막대를 그리게 한다. "오래 지난 기록일수록 덜 중요하다"는 학생에게 "354년 뒤에도 같은 섬을 적었다는 것은 무엇을 뜻할까요?"라고 되묻는다. 막대 길이보다 기록이 끊기지 않고 이어졌다는 공통점을 읽게 한다.',
          task: '「지리지」(1454) 뒤 몇 해 지나 나온 기록인지 막대그래프를 그리고, 기록이 이어진 햇수와 공통점을 읽어요.',
          levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            IT({ prompt: '표를 보고 「지리지」(1454) 뒤 몇 해 뒤 나온 기록인지 막대를 그리세요.', toolOptions: CB('「지리지」(1454) 뒤 몇 해 뒤의 기록인가', '해', GAP, { xLabel: '기록', yLabel: '지난 햇수', max: 400, scale: 50, step: 1 }), target: { build: true } },
              { prompt: '표를 보고 기록 두 개의 막대를 그리세요.', toolOptions: { data: [GAP[0], GAP[2]] } }),
            IT({ prompt: '「지리지」부터 『만기요람』까지 기록이 이어진 햇수를 그래프에서 읽어 쓰세요.', toolOptions: CR('「지리지」(1454) 뒤 몇 해 뒤의 기록인가', '해', GAP, { xLabel: '기록', yLabel: '지난 햇수', max: 400, scale: 50, question: '「지리지」부터 『만기요람』까지 몇 해?' }), target: { value: 354 } }),
            IT({ prompt: '다섯 기록의 공통점으로 알맞은 것을 고르세요.', toolOptions: CR('「지리지」(1454) 뒤 몇 해 뒤의 기록인가', '해', GAP, { xLabel: '기록', yLabel: '지난 햇수', max: 400, scale: 50, question: '「지리지」·승람·문헌비고·만기요람의 공통점은?', choices: ['모두 우산(도)을 적었다', '모두 같은 해에 나왔다', '모두 개인이 쓴 책이다'] }), target: { pick: 0 } },
              null,
              { prompt: '공통점과 그 뜻을 바르게 이은 보기를 고르세요.', toolOptions: { question: '공통점이 뜻하는 것은?', choices: ['여러 세기 동안 나라가 우산도를 꾸준히 알고 적었다', '기록이 많을수록 위치가 늘 정확했다', '오래된 기록만 근거가 된다'] }, target: { pick: 0 } },
              { conclude: '「지리지」부터 『만기요람』까지 350년 넘게 조선의 관찬 기록이 우산도를 이어 적었어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '네 기록의 공통점을 한 문장으로 써요.' }] },
      }),
      M('activity.gap', {
        title: '기록이 보여 주는 것·한계', method: '기록마다 보여 주는 것·못 보여 주는 것', tool: 'sortboard', minutes: 16,
        levels: { easy: '설명 카드 4장을 \'보여 줌·한계\' 바구니에 나누고, 틀리면 까닭을 말하고 되돌아온다.', base: '설명 카드 6장을 나누고, 근거로 쓸 때 정확한 말과 지나친 말을 가른다.', challenge: '함정 카드가 더 섞이고, 활동지에 한계 하나를 바르게 고쳐 쓴다.' },
        activity: {
          title: '기록이 보여 주는 것·한계', tool: 'sortboard',
          teacher: '"팔도총도는 우산도를 울릉도 서쪽에 그렸어요. 이 지도는 근거로 쓸 수 없을까요?" 카드를 나눈 뒤 \'한계\' 바구니의 카드마다 그래도 무엇을 보여 주는지 말하게 한다. "한계는 숨기는 게 낫다"는 학생에게 "상대가 그 한계를 먼저 짚으면 우리 말을 믿어 줄까요?"라고 되묻는다. 한계를 먼저 밝히는 것이 오히려 설득력을 높인다는 점을 짚는다.',
          task: '조선 기록에 대한 설명 카드를 \'보여 줌\'과 \'한계\' 바구니에 나누고, 근거로 쓸 때의 말을 가려요.',
          levels: { easy: { live: true, instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            IT(SB('설명 카드를 \'보여 줌\'과 \'한계\'로 나누세요.', ['보여 줌', '한계'], [
              { id: 'g1', text: '「지리지」: 맑은 날 두 섬이 서로 보인다고 적었다', to: '보여 줌' }, { id: 'g2', text: '문헌비고: 우산을 일본이 말한 송도라 적었다', to: '보여 줌' },
              { id: 'g3', text: '여러 세기에 걸쳐 같은 섬을 적었다', to: '보여 줌' }, { id: 'l1', text: '팔도총도: 우산도 위치가 실제와 다르다', to: '한계' },
              { id: 'l2', text: '「지리지」: 섬에 사는 사람 이야기는 없다', to: '한계' }, { id: 'l3', text: '옛 지도는 거리를 정확히 재지 않았다', to: '한계' }]),
              { prompt: '설명 카드 4장을 \'보여 줌\'과 \'한계\'로 나누세요.', toolOptions: { limit: 4, cards: [{ id: 'g1', text: '「지리지」: 맑은 날 두 섬이 서로 보인다고 적었다' }, { id: 'l1', text: '팔도총도: 우산도 위치가 실제와 다르다' }, { id: 'g2', text: '문헌비고: 우산을 일본이 말한 송도라 적었다' }, { id: 'l3', text: '옛 지도는 거리를 정확히 재지 않았다' }] }, target: { sort: { '보여 줌': ['g1', 'g2'], 한계: ['l1', 'l3'] } } },
              { prompt: '설명 카드를 나누세요. 둘 다 아닌 함정 카드는 남겨요.', toolOptions: { more: [{ id: 't1', text: '옛 기록은 모두 틀렸다' }, { id: 't2', text: '지도 한 장이면 모든 것이 증명된다' }] } }),
            IT(SB('근거로 쓸 때 \'정확한 말\'과 \'지나친 말\'을 나누세요.', ['정확한 말', '지나친 말'], [
              { id: 'a1', text: '조선은 우산도를 여러 세기 동안 기록했다', to: '정확한 말' }, { id: 'a2', text: '「지리지」는 두 섬을 함께 인식했음을 보여 준다', to: '정확한 말' },
              { id: 'a3', text: '팔도총도는 위치가 다르지만 우산도를 그렸다', to: '정확한 말' }, { id: 'o1', text: '「지리지」에 독도 주민 수가 적혀 있다', to: '지나친 말' },
              { id: 'o2', text: '팔도총도는 거리까지 정확하다', to: '지나친 말' }, { id: 'o3', text: '기록 하나로 모든 주장이 끝난다', to: '지나친 말' }]),
              { prompt: '카드 4장을 \'정확한 말\'과 \'지나친 말\'로 나누세요.', toolOptions: { limit: 4, cards: [{ id: 'a1', text: '조선은 우산도를 여러 세기 동안 기록했다' }, { id: 'o1', text: '「지리지」에 독도 주민 수가 적혀 있다' }, { id: 'a2', text: '「지리지」는 두 섬을 함께 인식했음을 보여 준다' }, { id: 'o2', text: '팔도총도는 거리까지 정확하다' }] }, target: { sort: { '정확한 말': ['a1', 'a2'], '지나친 말': ['o1', 'o2'] } } }),
            IT(SB('팔도총도를 근거로 쓸 때 \'함께 할 말\'과 \'하지 않을 말\'을 나누세요.', ['함께 할 말', '하지 않을 말'], [
              { id: 'h1', text: '1531년 관찬 책에 실린 지도다', to: '함께 할 말' }, { id: 'h2', text: '위치는 실제와 다르게 그렸다', to: '함께 할 말' },
              { id: 'h3', text: '다른 기록과 함께 본다', to: '함께 할 말' }, { id: 'n1', text: '위치가 틀렸다는 말은 숨긴다', to: '하지 않을 말' },
              { id: 'n2', text: '이 지도만으로 충분하다고 한다', to: '하지 않을 말' }]), null, null,
              { conclude: '기록이 보여 주는 것과 한계를 함께 말하면, 상대가 먼저 짚기 전에 근거를 단단하게 만들 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '팔도총도의 한계를 밝히면서도 근거로 쓰는 문장을 하나 써요.' }] },
      }),
      M('wrap.pick', {
        title: '가장 힘 있는 기록 고르기', method: '가장 힘 있는 기록 하나와 까닭', tool: 'emotion', minutes: 7,
        levels: { easy: '보기 2개 가운데 기록 하나를 고르고 까닭 1짝을 잇는다.', base: '보기 3개(함정 1개) 가운데 기록을 고르고 까닭 3짝을 잇는다.', challenge: '고른 기록의 까닭 두 가지를 활동지에 쓴다.' },
        wrap: {
          teacher: '"오늘 본 기록 가운데 외국 친구에게 하나만 보여 준다면 무엇을 고를까요?" 학생마다 고른 기록이 달라도 되고, 까닭이 기록의 내용과 맞는지가 중요하다고 먼저 말한다. "가장 오래된 게 가장 힘 있다"는 학생에게 "오래된 것과 내용이 분명한 것 가운데 무엇을 볼까요?"라고 되묻는다. 출처 없는 연표를 고르면 오늘 세운 사료 읽기 규칙을 다시 떠올리게 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'emotion', options: { mode: 'branch', situation: '외국 친구에게 독도의 옛 기록 하나만 보여 줄 수 있어요.', who: '나', ask: '어떤 기록을 고를까?', motif: 'leaf', choices: [
              { id: 'jiri', text: '『세종실록』 「지리지」(1454)', result: '맑은 날 서로 보이는 두 섬을 함께 적은 나라의 기록이에요.', mood: '뿌듯함' },
              { id: 'munheon', text: '『동국문헌비고』(1770)', result: '우산을 일본이 말한 송도라고 적어, 두 나라 이름을 이어 줘요.', mood: '뿌듯함' },
              { id: 'blog', text: '출처 없는 블로그 연표', result: '친구가 "누가 만든 거야?"라고 물으면 답하기 어려워요.', mood: '걱정', why: '출처를 밝힐 수 있는 기록을 골라요.' }] },
              prompt: '외국 친구에게 보여 줄 기록 하나를 고르세요.', target: { choice: ['jiri', 'munheon'] }, difficulty: 0.15 },
            { prompt: '두 기록 가운데 외국 친구에게 보여 줄 기록을 고르세요.', toolOptions: { choices: [
              { id: 'jiri', text: '『세종실록』 「지리지」(1454)', result: '맑은 날 서로 보이는 두 섬을 함께 적은 나라의 기록이에요.', mood: '뿌듯함' },
              { id: 'blog', text: '출처 없는 블로그 연표', result: '친구가 "누가 만든 거야?"라고 물으면 답하기 어려워요.', mood: '걱정', why: '출처를 밝힐 수 있는 기록을 골라요.' }] }, target: { choice: 'jiri' } }),
            IT(EX('emotion', MB('기록과 그 기록이 힘 있는 까닭을 이어요.', [['「지리지」(1454)', '두 섬이 맑은 날 서로 보인다고 적었다'], ['『동국문헌비고』(1770)', '우산을 일본이 말한 송도라 적었다'], ['『만기요람』(1808)', '울릉·우산을 모두 우산국 땅이라 했다']], ['인터넷에 가장 많이 퍼졌다']), 0.2),
              LV(MB('기록과 그 까닭 한 짝을 이어요.', [['「지리지」(1454)', '두 섬이 맑은 날 서로 보인다고 적었다']], ['인터넷에 가장 많이 퍼졌다']))),
            { type: 'short', prompt: '내가 고른 기록이 힘 있는 까닭을 기록의 내용을 들어 써요.' },
          ],
        },
        worksheet: {
          title: '가장 힘 있는 기록',
          items: [
            { type: 'short', prompt: '내가 고른 기록과 그 기록이 힘 있는 까닭 두 가지를 써요.' },
            { type: 'choice', prompt: '"우산은 왜인들이 말하는 송도"라고 적은 책은?', options: ['『동국문헌비고』', '『삼국사기』', '『만기요람』'], answer: '『동국문헌비고』' },
          ],
        },
      }),
      M('wrap.pair', {
        title: '시간 띠 1분 설명', method: '짝에게 1분 설명', tool: 'timer', minutes: 7, delivery: 'guided',
        levels: { easy: '말하기 30초로 맞추고 짝이 점검 칸 2개를 표시한다.', base: '말하기 1분·질문 30초로 맞추고 짝이 점검 칸 3개를 표시한다.', challenge: '설명 뒤 짝의 질문 하나에 기록 이름을 들어 답한다(교사 진행).' },
        wrap: {
          teacher: '"시간 띠를 손가락으로 짚으며 짝에게 1분 동안 설명해 볼까요?" 타이머를 설명 1분·질문 30초로 맞추고 짝이 듣는 동안 점검 칸에 표시하게 한다. 설명이 연도만 늘어놓으면 "그 기록에 무엇이 적혀 있었는지도 한마디 넣어 볼까요?"라고 돕는다. 짝을 바꿔 한 번 더 하고, 점검 칸이 빠진 짝에게는 무엇을 넣으면 될지 짚어 준다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'timer', options: { title: '짝에게 1분 설명', labels: ['설명', '질문'], plan: { work: 30, rest: 10, rounds: 1 }, safety: ['연도를 바르게 말했다', '기록 이름을 말했다', '시간 띠를 가리키며 말했다'] },
              prompt: '설명 60초·질문 30초를 2번(짝 바꿔) 하도록 맞추고, 짝이 지킨 칸을 모두 표시해요.', target: { plan: { work: 60, rest: 30, rounds: 2 }, safety: true }, difficulty: 0.15 },
            { prompt: '설명 30초·질문 10초를 2번 하도록 맞추고, 짝이 지킨 칸 두 개를 표시해요.', toolOptions: { safety: ['연도를 바르게 말했다', '기록 이름을 말했다'] }, target: { plan: { work: 30, rest: 10, rounds: 2 }, safety: true } }),
            { type: 'choice', prompt: '다음 가운데 가장 앞선 시기의 기록은?', options: ['『만기요람』', '『세종실록』 「지리지」', '『동국문헌비고』'], answer: 1, difficulty: 0.15, explain: '「지리지」는 1454년, 『동국문헌비고』는 1770년, 『만기요람』은 1808년이에요.' },
          ],
        },
        worksheet: {
          title: '짝 설명 점검',
          items: [
            { type: 'check', prompt: '짝의 설명에 들어간 것에 표시해요.', options: ['연도', '기록 이름', '기록에 적힌 내용', '시간 띠 가리키기'] },
            { type: 'short', prompt: '짝에게 받은 질문과 내 답을 한 줄씩 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 7학년 · 안용복 사건과 막부의 결정 (dokdo.m.g7-anyb) ====
  {
    const M = MK('g7-anyb', [7]);
    const AX = { axis: ['먼저', '나중'] };
    const EV4 = [{ id: 'e1', text: '울릉도에서 고기잡이' }, { id: 'e2', text: '일본 어민에게 끌려감(1693)' }, { id: 'e3', text: '두 나라의 교섭' }, { id: 'e5', text: '막부의 울릉도 도해 금지(1696)' }];
    const EV5 = [EV4[0], EV4[1], EV4[2], { id: 'e4', text: '돗토리번의 답변(1695)' }, EV4[3]];
    const SEA = { grid: [7, 4], title: '동해의 섬들(어림 칸 지도)', places: [
      { name: '울릉도', icon: 'island', at: [1, 1] }, { name: '독도', icon: 'island', at: [3, 1] }, { name: '오키섬', icon: 'island', at: [5, 2] }],
      regions: [{ name: '한반도 쪽', cells: [[0, 0], [0, 1], [0, 2], [0, 3]], color: 'cream' }, { name: '일본 쪽', cells: [[6, 2], [6, 3], [5, 3]], color: 'mint' }] };
    const T1 = { text: '친구 하린이 "막부의 도해 금지는 그냥 고기잡이 규칙일 뿐이야"라고 말한다.', ask: '어떻게 답할까?', motif: 'wave', choices: [
      { id: 'agree', text: '"그렇구나" 하고 넘어간다', result: '도해 금지가 무엇을 막았는지 따져 보지 못한다.', impact: [{ who: '하린', text: '결정의 뜻을 놓친다', tone: -1 }], why: '결정이 무엇을 막았는지 사료로 확인해 봐요.', ending: '결정의 뜻을 따져 보지 못했어요.' },
      { id: 'check', text: '도해 금지가 무엇을 막았는지 사료로 확인하자고 한다', result: '일본인이 바다를 건너 울릉도에 가는 것을 막은 결정이었다는 것을 확인한다.', impact: [{ who: '하린', text: '결정의 내용을 안다', tone: 1 }], end: '결정의 내용을 확인했어요.',
        next: { text: '하린이 "그럼 그 결정이 뜻하는 건 뭐야?"라고 묻는다.', choices: [
          { id: 'mean', text: '"막부가 울릉도를 일본 땅으로 보지 않았다는 뜻으로 읽을 수 있어"라고 답한다', result: '하린이 고개를 끄덕이며 돗토리번 답변도 찾아보자고 한다.', impact: [{ who: '하린', text: '근거를 이어 생각한다', tone: 1 }] },
          { id: 'over', text: '"이걸로 모든 게 끝났어"라고 크게 말한다', result: '하린이 "그 뒤 일은?"이라고 물어 대답이 막힌다.', impact: [{ who: '나', text: '설명이 과장된다', tone: -1 }], why: '한 결정이 보여 주는 만큼만 말하고, 다른 기록과 이어요.' }] } }] };
    const TR1 = [{ id: 'r1', text: '결정이 무엇을 막았는지 사료로 확인했다' }, { id: 'r2', text: '보여 주는 만큼만 말했다' },
      { id: 'r3', text: '큰 소리로 말하면 설득된다', why: '목소리가 아니라 근거가 설득해요.' }, { id: 'r4', text: '결정의 뜻은 따질 필요 없다', why: '뜻을 따져야 근거로 쓸 수 있어요.' }];
    const T2 = { text: '모둠 발표를 준비하는데 도윤이 "안용복 혼자 독도를 지켰다"는 문장으로 시작하자고 한다.', ask: '발표 첫 문장을 어떻게 할까?', motif: 'star', choices: [
      { id: 'hero', text: '영웅 이야기로만 꾸민다', result: '듣는 반에서 "정부는 무엇을 했어요?"라는 질문이 나온다.', impact: [{ who: '모둠', text: '질문에 답하지 못한다', tone: -1 }], why: '개인의 일은 두 나라 정부 문서와 함께 볼 때 근거가 돼요.', ending: '질문에 답하지 못했어요.' },
      { id: 'both', text: '사건과 함께 두 나라 정부의 교섭·결정을 넣자고 한다', result: '발표에 1693년 사건, 교섭, 1696년 결정이 차례로 들어간다.', impact: [{ who: '듣는 반', text: '흐름을 이해한다', tone: 1 }], end: '정부 문서까지 넣었어요.',
        next: { text: '도윤이 "실감 나게 안용복이 했을 법한 말을 지어 넣자"고 한다.', choices: [
          { id: 'fact', text: '실제 인물의 말은 지어내지 말고 해설로 사실만 말하자고 한다', result: '발표가 사료에 있는 사실로만 채워진다.', impact: [{ who: '듣는 반', text: '사실과 상상을 헷갈리지 않는다', tone: 1 }] },
          { id: 'make', text: '그럴듯한 대사를 지어 넣는다', result: '듣는 사람이 지어낸 말을 사료로 믿을 수 있다.', impact: [{ who: '듣는 반', text: '사실과 상상이 섞인다', tone: -1 }], why: '실존 인물에게 지어낸 말을 붙이면 사실처럼 퍼질 수 있어요.' }] } }] };
    const TR2 = [{ id: 'r1', text: '개인의 일은 정부 문서와 함께 볼 때 더 힘 있다' }, { id: 'r2', text: '실존 인물에게 지어낸 말을 붙이지 않는다' },
      { id: 'r3', text: '영웅 이야기가 가장 좋은 근거다', why: '감동과 근거는 달라요. 문서를 함께 봐요.' }, { id: 'r4', text: '재미있으면 지어내도 된다', why: '지어낸 말은 사실처럼 퍼질 수 있어요.' }];
    const T3 = { text: '토론 상대가 "막부 결정은 울릉도 이야기일 뿐 독도와 관계없다"고 말한다.', ask: '어떻게 답할까?', motif: 'cloud', choices: [
      { id: 'cut', text: '"그건 틀렸어요!" 하고 말을 끊는다', result: '상대가 기분이 상해 대화가 끊긴다.', impact: [{ who: '상대', text: '말을 끝까지 못 한다', tone: -1 }], why: '말을 끊기보다 근거를 보여 줘요.', ending: '대화가 끊겼어요.' },
      { id: 'doc', text: '1695년 돗토리번 답변서를 근거로 든다', result: '돗토리번이 울릉도와 독도 모두 자기 번에 속하지 않는다고 답한 기록을 보여 준다.', impact: [{ who: '상대', text: '새 근거를 듣는다', tone: 1 }], end: '돗토리번 답변서를 보여 줬어요.',
        next: { text: '상대가 "그건 지방 관청의 답이잖아요"라고 다시 묻는다.', choices: [
          { id: 'link', text: '그 답변을 받은 뒤 막부가 도해 금지를 결정했다는 흐름을 함께 말한다', result: '답변과 결정이 이어진 흐름이 드러난다.', impact: [{ who: '상대', text: '흐름을 이해한다', tone: 1 }] },
          { id: 'repeat', text: '같은 말을 더 크게 되풀이한다', result: '새 근거 없이 대화가 제자리를 맴돈다.', impact: [{ who: '듣는 사람', text: '지루해한다', tone: -1 }], why: '같은 말보다 이어지는 사료를 보여 줘요.' }] } }] };
    const TR3 = [{ id: 'r1', text: '돗토리번 답변서는 두 섬 모두를 다룬다' }, { id: 'r2', text: '답변과 막부 결정을 흐름으로 잇는다' },
      { id: 'r3', text: '상대 말을 끊어야 이긴다', why: '말을 끊으면 근거를 보여 줄 기회도 잃어요.' }, { id: 'r4', text: '같은 말을 되풀이하면 설득된다', why: '새 근거가 있어야 설득돼요.' }];

    ALL.push(
      M('intro.scene', {
        title: '1693년 바다 장면과 질문', method: '1693년 장면 보고 질문 고르기', tool: 'wordcards', minutes: 6,
        levels: { easy: '질문 카드 2장 가운데 이어질 일을 묻는 질문을 고르는 시연을 본다.', base: '질문 카드 3장(함정 1장) 가운데 2장을 고르는 시연을 보고 하나를 골라 말한다.', challenge: '카드에 없는 질문을 직접 만들어 말한다.' },
        intro: {
          teacher: '"1693년, 울릉도에서 고기잡이하던 조선 사람들이 일본 어민에게 끌려간 일이 있었어요. 그다음 무슨 일이 이어졌을까요?" 장면 그림을 보이고 시연 단추로 \'두 나라 정부는 무엇을 했을까?\' 같은 질문 카드가 담기는 모습을 보인다. "그 사람 혼자 다 해결했겠죠"라는 말이 나오면 "나라와 나라 사이의 일이 되면 누가 나설까요?"라고 되묻는다. 오늘은 이 일이 두 나라의 교섭과 1696년 막부의 결정으로 이어진 차례를 사료로 따라간다고 밝힌다.',
          student: '1693년 울릉도 바다 장면을 보고, 이어질 일을 알아보려면 어떤 질문이 필요할지 골라요. 내가 가장 궁금한 질문을 짝에게 말해요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '이어질 일을 묻는 질문', cards: [{ id: 'q1', text: '두 나라 정부는 무엇을 했을까?' }, { id: 'q2', text: '이 일은 어떤 결정으로 이어졌을까?' }, { id: 'q3', text: '그날 잡은 물고기는 몇 마리?' }], shuffle: false }, sequence: [{ pick: ['q1', 'q2'] }] },
          art: { draw: 'a paper-cut 17th century wooden fishing boat near the cliffs of Ulleungdo island with nets in the water and seagulls overhead', banner: '1693년, 울릉도 바다', extra: [{ motif: 'bird', x: 330, y: 90 }] },
        },
        notes: '실존 인물(안용복)의 감정·대사를 지어 말하지 않는다. "끌려간 일"이라는 사실만 전한다.',
      }),
      M('intro.route', {
        title: '두 나라 사이 바다의 섬', method: '울릉도·일본 사이 바닷길 짚기', tool: 'map', minutes: 6,
        levels: { easy: '울릉도·독도 두 곳에 핀이 꽂히는 시연을 본다.', base: '울릉도·독도·오키섬 세 곳에 차례로 핀이 꽂히는 시연을 본다.', challenge: '독도에서 오키섬이 어느 방위에 있고 칸이 몇 칸인지 말한다.' },
        intro: {
          teacher: '"울릉도와 일본 사이 바다에는 어떤 섬들이 있을까요?" 어림 칸 지도에서 시연 단추로 울릉도·독도·오키섬에 차례로 핀이 꽂히는 모습을 보인다. "독도는 일본에 더 가깝다"는 말이 나오면 외교부 누리집의 거리(울릉도에서 약 87.4km, 오키섬에서 약 157.5km)를 함께 읽게 한다. 이 지도는 섬의 자리만 단순하게 그린 어림 지도이고, 옛사람이 다닌 뱃길을 그린 것은 아니라고 밝힌다.',
          student: '어림 칸 지도에서 울릉도·독도·오키섬의 자리를 차례로 짚어 보고, 독도가 두 섬 가운데 어디에 더 가까운지 말해요.',
          demo: { tool: 'map', options: SEA, sequence: [{ place: '울릉도' }, { place: '독도' }, { place: '오키섬' }] },
          art: { draw: 'a paper-cut map of the East Sea with three small islands and a dotted line of waves between the Korean coast and the Japanese coast', banner: '두 나라 사이 바다의 섬', extra: [{ motif: 'wave', y: 230 }] },
        },
      }),
      M('activity.order', {
        title: '사건과 교섭 흐름', method: '사건과 교섭 흐름 차례 놓기', tool: 'timeline', minutes: 16,
        levels: { easy: '사건 카드 3장을 차례로 놓고, 놓으면 바로 맞는지 알려 준다.', base: '사건 카드 4장을 차례로 놓고 연도 눈금에 사건을 잇는다.', challenge: '1695년 돗토리번 답변 카드까지 넣어 5장을 놓고, 시기별로 나눈다.' },
        activity: {
          title: '사건과 교섭 흐름', tool: 'timeline',
          teacher: '"끌려간 일이 어떻게 두 나라 정부의 일이 되었을까요?" 카드를 놓은 뒤 앞 카드가 뒤 카드의 원인이 되는지 한 칸씩 말하게 한다. "도해 금지가 끌려간 바로 다음 해에 나왔다"고 놓는 학생에게 1693년과 1696년 사이에 교섭이 있었다는 점을 짚는다. 도해 금지는 \'바다를 건너 그 섬에 가는 것을 막았다\'는 뜻이라고 풀어 준다.',
          task: '1693년 사건부터 1696년 막부의 울릉도 도해 금지까지의 흐름을 차례로 놓고, 연도와 사건을 이어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            IT(OB('사건에서 결정까지 일어난 차례대로 놓으세요.', EV4, AX),
              OB('사건 세 개를 일어난 차례대로 놓으세요.', [EV4[1], EV4[2], EV4[3]], AX),
              OB('돗토리번 답변까지 넣어 일어난 차례대로 놓으세요.', EV5, AX)),
            IT(TM('연도 눈금에 알맞은 사건을 이어 보세요.', [['1693년', '일본 어민에게 끌려감', 1693], ['1696년', '막부의 울릉도 도해 금지', 1696]], ['일본 마을을 세움'], AX),
              null,
              TM('연도 눈금에 알맞은 사건을 이어 보세요(함정 카드 포함).', [['1693년', '일본 어민에게 끌려감', 1693], ['1695년', '돗토리번의 답변', 1695], ['1696년', '막부의 울릉도 도해 금지', 1696]], ['일본 마을을 세움', '시마네현 고시'], AX)),
            IT({ prompt: '일을 두 시기로 나눠 보세요.', toolOptions: { mode: 'sort', slots: ['1693~1694년', '1695~1696년'], cards: [{ id: 'a', text: '일본 어민에게 끌려감' }, { id: 'b', text: '두 나라 교섭이 시작됨' }, { id: 'c', text: '돗토리번의 답변' }, { id: 'd', text: '막부의 도해 금지' }], axis: ['옛날', '오늘날'] }, target: { sort: { '1693~1694년': ['a', 'b'], '1695~1696년': ['c', 'd'] } } },
              null, null, { conclude: '1693년 사건은 두 나라의 교섭으로 이어졌고, 1696년 막부가 일본인의 울릉도 도해를 금지하는 결정으로 마무리됐어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '사건의 흐름을 차례대로 써요.', columns: ['차례', '일'], cells: [['1', ''], ['2', ''], ['3', '']], answer: '끌려감(1693), 두 나라 교섭, 막부 도해 금지(1696)' }] },
      }),
      M('activity.script', {
        title: '역사 해설 방송 대본', method: '역할극 대본 이어 쓰기', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '해설자 대사 1줄을 문장 틀로 채워 쓴다.', base: '진행자 질문마다 해설자 대사를 써서 모두 3줄을 잇고 기준표로 점검한다.', challenge: '마지막 대사에 화면 아래 해설 자막 한 줄을 더 쓴다.' },
        activity: {
          title: '역사 해설 방송 대본', tool: 'rubric-writing',
          teacher: '"오늘은 역사 해설 방송 대본을 써요. 가상 진행자가 묻고, 해설자가 사료로 답합니다." 실존 인물의 말은 지어 넣지 않고 해설자가 사실만 말한다는 약속을 먼저 칠판에 적는다. "실감 나게 안용복의 대사를 만들자"는 학생에게 "지어낸 말이 사실처럼 퍼지면 어떻게 될까요?"라고 되묻는다. 대사마다 연도나 사료 이름이 하나는 들어가야 한다고 짚는다.',
          task: '가상 진행자의 질문에 해설자가 사료 사실로 답하는 방송 대본 대사를 이어 쓰고, 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RW('진행자: "1693년에 무슨 일이 있었나요?" 해설자 대사를 쓰세요.',
              { topic: '진행자(가상): "1693년 울릉도에서 무슨 일이 있었나요?" — 해설자 대사를 한두 문장으로 쓰세요.', minChars: 20, maxChars: 150, minSentences: 1, maxSentences: 2, title: '대본 ① 1693년', lines: 3 },
              ['연도(1693년)를 썼다', '사료에 있는 사실만 썼다', '실존 인물의 말을 지어내지 않았다'],
              { prompt: '틀을 채워 해설자 대사를 쓰세요.', toolOptions: { starter: '해설자: ___년 울릉도에서 고기잡이하던 조선 사람들이 ___.' }, crit: ['연도(1693년)를 썼다', '사료에 있는 사실만 썼다'] }),
            RW('진행자: "그 뒤 두 나라는 무엇을 했나요?" 해설자 대사를 쓰세요.',
              { topic: '진행자(가상): "그 뒤 두 나라는 무엇을 했나요?" — 교섭과 돗토리번 답변(1695)을 넣어 해설자 대사를 한두 문장으로 쓰세요.', minChars: 20, maxChars: 160, minSentences: 1, maxSentences: 2, title: '대본 ② 교섭', lines: 3 },
              ['두 나라의 교섭을 썼다', '돗토리번 답변의 내용을 썼다', '사료에 있는 사실만 썼다'],
              { prompt: '틀을 채워 해설자 대사를 쓰세요.', toolOptions: { starter: '해설자: 두 나라는 울릉도를 두고 ___했습니다. 돗토리번은 두 섬이 ___고 답했습니다.' }, crit: ['두 나라의 교섭을 썼다', '돗토리번 답변의 내용을 썼다'] }),
            RW('진행자: "1696년 결정은 무엇이었나요?" 해설자 대사를 쓰세요.',
              { topic: '진행자(가상): "1696년 막부의 결정은 무엇이었나요?" — 해설자 대사를 한두 문장으로 쓰세요.', minChars: 20, maxChars: 150, minSentences: 1, maxSentences: 2, title: '대본 ③ 1696년', lines: 3 },
              ['1696년 결정을 썼다', '도해 금지의 뜻을 풀어 썼다', '사료에 있는 사실만 썼다'],
              { prompt: '틀을 채워 해설자 대사를 쓰세요.', toolOptions: { starter: '해설자: 1696년 막부는 일본인이 ___ 것을 금지했습니다.' }, crit: ['1696년 결정을 썼다', '도해 금지의 뜻을 풀어 썼다'] },
              { prompt: '해설자 대사에 이어 화면 아래 해설 자막 한 줄을 더 쓰세요.', toolOptions: { maxSentences: 3, starter: '(자막) ___' }, crit: ['1696년 결정을 썼다', '도해 금지의 뜻을 풀어 썼다', '사료에 있는 사실만 썼다', '자막을 한 줄로 짧게 썼다'] },
              { conclude: '역사 대본은 실감보다 사실이 먼저예요. 실존 인물에게 말을 지어 붙이지 않고, 해설로 사료의 사실을 전해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내 대본에서 사료 이름이나 연도가 들어간 대사 하나를 옮겨 써요.' }] },
      }),
      M('activity.act', {
        title: '모둠 해설극 발표', method: '모둠 역할극 발표', tool: 'timer', minutes: 16, delivery: 'guided',
        levels: { easy: '대본을 보며 2분 발표하고, 발표 시간과 사실 점검 칸 3개를 맞춘다.', base: '대본을 외워 2분 발표하고, 진행 차례와 사실 점검 칸 4개를 맞춘다.', challenge: '발표 뒤 1분 질의응답까지 넣어 시간을 맞추고 질문에 사료로 답한다.' },
        activity: {
          title: '모둠 해설극 발표', tool: 'timer',
          teacher: '"한 모둠이 2분 발표하면, 듣는 모둠은 사실 점검 칸에 표시해 주세요." 교사가 사회를 보며 타이머로 발표·준비 시간을 맞추고 모둠 차례를 부른다. 발표 중 지어낸 대사가 나오면 끝난 뒤 "그 말은 사료에 있었나요?"라고 묻고, 해설로 바꿔 말하게 한다. 점검은 잘잘못을 가리는 것이 아니라 사실을 함께 확인하는 일이라고 짚는다.',
          task: '모둠마다 대본으로 2분 해설극을 하고, 듣는 모둠은 사실 점검 칸에 표시해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '모둠 4개가 2분(120초) 발표하고 사이에 30초 준비하도록 타이머를 맞추세요.', toolOptions: { title: '모둠 해설극 시간', labels: ['발표', '준비'], plan: { work: 60, rest: 20, rounds: 2 }, workStep: 10 }, target: { plan: { work: 120, rest: 30, rounds: 4 } } },
              null,
              { prompt: '발표 120초 뒤 질의응답 60초를 모둠 4개가 하도록 맞추세요.', toolOptions: { labels: ['발표', '질의응답'] }, target: { plan: { work: 120, rest: 60, rounds: 4 } } }),
            IT({ prompt: '해설극을 진행하는 차례를 놓으세요.', toolOptions: { title: '해설극 진행 차례', cards: ['사실 점검 표시', '대본 읽으며 연습', '2분 발표', '고칠 점 말해 주기'] }, target: { order: ['대본 읽으며 연습', '2분 발표', '사실 점검 표시', '고칠 점 말해 주기'] } },
              { prompt: '해설극 진행 차례 세 단계를 놓으세요.', toolOptions: { cards: ['2분 발표', '대본 읽으며 연습', '사실 점검 표시'] }, target: { order: ['대본 읽으며 연습', '2분 발표', '사실 점검 표시'] } }),
            IT({ prompt: '들은 해설극에서 확인한 사실 칸을 모두 표시하세요.', toolOptions: { title: '사실 점검', safety: ['1693년 사건을 바르게 말했다', '두 나라의 교섭을 말했다', '1696년 도해 금지를 말했다', '실존 인물의 말을 지어내지 않았다'] }, target: { safety: true } },
              { prompt: '들은 해설극에서 확인한 사실 칸 세 개를 표시하세요.', toolOptions: { safety: ['1693년 사건을 바르게 말했다', '1696년 도해 금지를 말했다', '실존 인물의 말을 지어내지 않았다'] }, target: { safety: true } },
              null, { conclude: '발표 시간을 지키고 사실을 함께 점검하면, 모든 모둠이 같은 사료 위에서 이야기할 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '다른 모둠 해설극에서 확인한 것에 표시해요.', options: ['1693년 사건', '두 나라 교섭', '1696년 도해 금지', '지어낸 대사 없음'] }] },
        notes: '교사가 사회를 보는 활동이다. 모둠 수가 4개가 아니면 타이머 번 수를 학급에 맞춰 바꿔 말해 준다.',
      }),
      M('activity.mean', {
        title: '도해 금지의 뜻 갈림길', method: '도해 금지가 보여 주는 것 고르기', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림길 1번에서 고르고 결과 장면을 본다.', base: '갈림길 2번을 끝까지 가 본 뒤 알맞은 근거 카드를 하나 이상 고른다.', challenge: '갈림길 2번을 간 뒤, 섞인 근거 카드 가운데 맞는 근거 2장을 정확히 고른다.' },
        activity: {
          title: '도해 금지의 뜻 갈림길', tool: 'dilemma',
          teacher: '"막부가 일본인이 울릉도에 건너가는 것을 막았다면, 그 결정은 무엇을 뜻할까요?" 학생마다 길을 끝까지 가 본 뒤, 과장한 길과 보여 주는 만큼 말한 길의 결과를 견주게 한다. "이 결정 하나로 모든 게 끝났다"는 학생에게 "그 뒤의 기록도 함께 보아야 하지 않을까요?"라고 되묻는다. 안용복에게 지어낸 말을 붙이자는 길이 왜 위험한지도 짚는다.',
          task: '막부의 도해 금지를 두고 나온 말에 어떻게 답할지 길을 골라 결과를 보고, 끝에서 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '"도해 금지는 고기잡이 규칙일 뿐"이라는 말을 들었어요. 한 번 골라 보세요.', base: '"도해 금지는 고기잡이 규칙일 뿐"이라는 말을 들었어요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '"도해 금지는 고기잡이 규칙일 뿐"이라는 말을 들었어요. 두 번 골라 끝까지 가고 맞는 근거 2장을 정확히 고르세요.' },
              '도해 금지의 뜻', T1, [['check', 'mean']], TR1, ['r1', 'r2'], { reasons: [{ id: 'r5', text: '결정 하나로 모든 쟁점이 끝난다' }], ok: ['r1', 'r2'] }),
            DIL({ easy: '발표를 영웅 이야기로만 꾸미자고 해요. 한 번 골라 보세요.', base: '발표를 영웅 이야기로만 꾸미자고 해요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '발표를 영웅 이야기로만 꾸미자고 해요. 두 번 골라 끝까지 가고 맞는 근거 2장을 정확히 고르세요.' },
              '발표 첫 문장', T2, [['both', 'fact']], TR2, ['r1', 'r2'], { reasons: [{ id: 'r5', text: '듣는 사람이 감동하면 근거가 된다' }], ok: ['r1', 'r2'] }),
            DIL({ easy: '"막부 결정은 독도와 관계없다"는 말을 들었어요. 한 번 골라 보세요.', base: '"막부 결정은 독도와 관계없다"는 말을 들었어요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '"막부 결정은 독도와 관계없다"는 말을 들었어요. 두 번 골라 끝까지 가고 맞는 근거 2장을 정확히 고르세요.' },
              '토론 속 반론', T3, [['doc', 'link']], TR3, ['r1', 'r2'], { reasons: [{ id: 'r5', text: '상대가 말할 때 끝까지 듣는다' }], ok: ['r1', 'r2'] },
              { conclude: '도해 금지는 막부가 울릉도를 일본 땅으로 보지 않았음을 보여 줘요. 돗토리번 답변과 이어 읽되, 보여 주는 만큼만 말해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '막부의 울릉도 도해 금지(1696)가 막은 일은?', options: ['일본인이 바다를 건너 울릉도에 가는 일', '조선 사람이 고기를 잡는 일', '두 나라가 교섭하는 일'], answer: '일본인이 바다를 건너 울릉도에 가는 일' }] },
      }),
      M('wrap.card', {
        title: '연도와 사건 잇기', method: '사건 핵심 낱말 잇기', tool: 'emotion', minutes: 7,
        levels: { easy: '연도 2개와 사건을 잇는다.', base: '연도 3개와 사건을 잇는다.', challenge: '「지리지」(1454)까지 연도 4개와 사건을 잇는다(함정 카드 포함).' },
        wrap: {
          teacher: '"1693, 1695, 1696 — 세 숫자만 보고 무슨 일이 있었는지 말할 수 있나요?" 연도와 사건을 이은 뒤 숫자 하나씩 골라 한 문장으로 말하게 한다. 1695년과 1696년을 바꿔 잇는 학생에게 "답변이 먼저일까요, 결정이 먼저일까요?"라고 물어 원인과 결과로 기억하게 한다.',
          exitTicket: [
            IT(EX('emotion', MB('연도와 그해의 일을 이어요.', [['1693년', '일본 어민에게 끌려감'], ['1695년', '돗토리번의 답변'], ['1696년', '막부의 도해 금지']], ['시마네현 고시']), 0.2),
              LV(MB('연도 두 개와 그해의 일을 이어요.', [['1693년', '일본 어민에게 끌려감'], ['1696년', '막부의 도해 금지']], [])),
              LV(MB('연도 네 개와 그해의 일을 이어요.', [['1454년', '「지리지」의 우산·무릉'], ['1693년', '일본 어민에게 끌려감'], ['1695년', '돗토리번의 답변'], ['1696년', '막부의 도해 금지']], ['시마네현 고시', '칙령 제41호']))),
            { type: 'choice', prompt: '안용복 사건을 독도의 근거로 쓸 때 가장 알맞은 방법은?', options: ['영웅 이야기만 크게 말한다', '조선 기록과 일본 쪽 문서(돗토리번 답변·도해 금지)를 함께 든다', '지어낸 대사를 넣어 실감 나게 말한다'], answer: 1, difficulty: 0.2, explain: '양쪽 문서를 함께 들면 설득력이 커져요.' },
            { type: 'short', prompt: '돗토리번 답변이 무엇을 보여 주는지 한 문장으로 써요.' },
          ],
        },
        worksheet: {
          title: '안용복 사건 연도 정리',
          items: [
            { type: 'table', prompt: '연도와 그해의 일을 써요.', columns: ['연도', '일'], cells: [['1693', ''], ['1695', ''], ['1696', '']], answer: '일본 어민에게 끌려감, 돗토리번 답변, 막부의 울릉도 도해 금지' },
            { type: 'blank', prompt: '빈칸을 채워요.', text: '돗토리번은 울릉도와 ___가 돗토리번에 속하지 않는다고 답했다.', answer: '독도' },
          ],
        },
      }),
      M('wrap.note', {
        title: '시점 그래프로 세 줄 요약', method: '세 줄 요약 쓰기', tool: 'chart', minutes: 7,
        levels: { easy: '두 시점(1693·1696)의 점을 찍고 값이 보인다.', base: '세 시점(1693·1695·1696)의 점을 찍고 세 줄 요약을 쓴다.', challenge: '요약에 이어 이 흐름이 뜻하는 것을 한 줄 더 쓴다.' },
        wrap: {
          teacher: '"사건이 일어난 해를 꺾은선 점으로 찍어 보면, 일이 얼마나 빨리 이어졌는지 보일까요?" 점을 찍은 뒤 점마다 한 줄씩 무슨 일이었는지 적어 세 줄 요약을 만들게 한다. "3년이면 아주 오래 걸린 것"이라는 학생에게 "두 나라 정부가 오가며 교섭하는 데 걸린 시간으로 보면 어떨까요?"라고 되묻는다. 그래프는 연도를 눈으로 보이게 하는 도구일 뿐, 요약의 핵심은 무슨 일이 왜 이어졌는지라고 짚는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'chart', options: { type: 'line', mode: 'build', title: '안용복 사건의 시점', unit: '년', xLabel: '일', yLabel: '연도', from: 1692, max: 1697, scale: 1, data: [['끌려감', 1693], ['돗토리번 답변', 1695], ['도해 금지', 1696]] },
              prompt: '표를 보고 세 일이 일어난 해를 꺾은선 점으로 찍어요.', target: { build: true }, difficulty: 0.2 },
            { prompt: '표를 보고 두 일이 일어난 해를 점으로 찍어요.', toolOptions: { data: [['끌려감', 1693], ['도해 금지', 1696]], showValues: true } }),
            { type: 'choice', prompt: '그래프에서 끌려간 일부터 도해 금지까지 걸린 햇수는?', options: ['1년', '3년', '10년'], answer: 1, difficulty: 0.15, explain: '1696 − 1693 = 3년이에요.' },
            { type: 'short', prompt: '점 세 개에 맞춰 사건 흐름을 세 줄로 요약해 써요.' },
          ],
        },
        worksheet: {
          title: '안용복 사건 세 줄 요약',
          items: [
            { type: 'table', prompt: '시점마다 한 줄씩 요약해요.', columns: ['연도', '요약 한 줄'], cells: [['1693', ''], ['1695', ''], ['1696', '']], answer: '끌려감, 돗토리번이 두 섬이 소속 아니라고 답함, 막부가 울릉도 도해 금지' },
            { type: 'short', prompt: '이 흐름이 독도 역사에서 갖는 뜻을 한 줄로 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 7학년 · 독도 이름과 위치 정보로 소개하기 (dokdo.m.g7-name) ====
  {
    const M = MK('g7-name', [7]);
    const AX = { axis: ['옛날', '오늘날'] };
    const NAMES = [{ id: 'n1', text: '우산도 — 「지리지」(1454)' }, { id: 'n2', text: '석도 — 칙령 제41호(1900)' }, { id: 'n3', text: '독도 — 울도 군수 보고서(1906)' }];
    const POS = { mode: 'compass', grid: [7, 4], points: 8, title: '울릉도와 독도(어림 칸 지도)', places: [
      { name: '울릉도', icon: 'island', at: [1, 1] }, { name: '독도', icon: 'island', at: [5, 1] }, { name: '오키섬', icon: 'island', at: [6, 3] }], regions: LAND([[0, 3]]) };
    const INFO = [
      { id: 'i1', text: '울릉도에서 약 87.4km(외교부 누리집)', to: '넣을 정보' }, { id: 'i2', text: '주소: 경상북도 울릉군 울릉읍 독도리', to: '넣을 정보' },
      { id: 'o1', text: '독도는 늘 맑다(출처 없음)', to: '뺄 정보' }, { id: 'o2', text: '독도는 강원도에 속한다', to: '뺄 정보' },
      { id: 'i3', text: '동도·서도와 여러 바위섬으로 이루어짐', to: '넣을 정보' }, { id: 'o3', text: '상대 나라를 깎아내리는 말', to: '뺄 정보' },
    ];
    const INFO_MORE = [{ id: 'i4', text: '오키섬에서 약 157.5km(외교부 누리집)', to: '넣을 정보' }, { id: 'o4', text: '둘레가 100km라는 소문(출처 없음)', to: '뺄 정보' }];
    const C1 = { text: '일본 옛 기록을 본 도윤이 "옛날부터 독도를 다케시마라고 불렀네!"라고 말한다.', ask: '어떻게 할까?', motif: 'cloud', choices: [
      { id: 'yes', text: '"그렇구나" 하고 맞장구친다', result: '도윤이 잘못 안 채로 발표 자료에 적는다.', impact: [{ who: '도윤', text: '이름을 헷갈린다', tone: -1 }], why: '그 시절 일본의 다케시마는 울릉도를 가리켰어요.', ending: '잘못 안 채로 넘어갔어요.' },
      { id: 'check', text: '그 시절 다케시마가 어느 섬이었는지 확인하자고 한다', result: '예전 일본은 울릉도를 다케시마, 독도를 마쓰시마라 불렀다는 것을 찾는다.', impact: [{ who: '도윤', text: '이름 혼동을 바로잡는다', tone: 1 }], end: '옛 이름을 확인했어요.',
        next: { text: '도윤이 "그럼 지금은 왜 독도를 다케시마라고 해?"라고 묻는다.', choices: [
          { id: 'table', text: '1905년에 일본이 독도 이름을 다케시마로 바꾸었다고 표로 정리해 준다', result: '도윤이 시대마다 이름이 다르다는 것을 표로 이해한다.', impact: [{ who: '도윤', text: '시대별 이름을 정리한다', tone: 1 }] },
          { id: 'blame', text: '"그것도 몰라?" 하고 핀잔을 준다', result: '도윤이 더 묻지 않는다.', impact: [{ who: '도윤', text: '묻기를 꺼린다', tone: -1 }], why: '핀잔보다 정리한 표가 친구를 돕는 길이에요.' }] } }] };
    const CR1 = [{ id: 'r1', text: '예전 일본의 다케시마는 울릉도였다' }, { id: 'r2', text: '이름이 쓰인 시대를 함께 따진다' },
      { id: 'r3', text: '이름이 같으면 늘 같은 섬이다', why: '시대마다 같은 이름이 다른 섬을 가리킬 수 있어요.' }, { id: 'r4', text: '헷갈린 친구에게는 핀잔이 약이다', why: '핀잔은 묻기를 막아요.' }];
    const C2 = { text: '퀴즈에서 "\'독도\'라는 이름이 우리 공문서에 처음 나온 해는?"이라는 문제가 나왔다. 짝은 1905년이라고 한다.', ask: '어떻게 답할까?', motif: 'star', choices: [
      { id: 'y1905', text: '짝을 따라 1905년이라고 쓴다', result: '1905년은 일본 시마네현 고시의 해라 오답이 된다.', impact: [{ who: '나', text: '두 해를 헷갈린다', tone: -1 }], why: '1905년은 일본의 고시, 1906년은 우리 공문서예요.', ending: '1905년과 1906년을 헷갈렸어요.' },
      { id: 'y1906', text: '1906년 울도 군수 보고서를 떠올려 1906년이라고 쓴다', result: '정답이다. 짝이 "왜 1905년이 아니야?"라고 묻는다.', impact: [{ who: '짝', text: '까닭을 궁금해한다', tone: 0 }], end: '1906년이라고 답했어요.',
        next: { text: '짝에게 두 해의 차이를 설명해야 한다.', choices: [
          { id: 'pair', text: '"1905년은 일본 고시, 1906년은 우리 보고서"로 짝지어 말해 준다', result: '짝이 두 해를 문서와 함께 기억한다.', impact: [{ who: '짝', text: '헷갈리지 않는다', tone: 1 }] },
          { id: 'just', text: '"그냥 외워"라고 말한다', result: '짝이 다음에 또 헷갈린다.', impact: [{ who: '짝', text: '다시 헷갈린다', tone: -1 }], why: '연도는 문서와 짝지어야 오래 남아요.' }] } }] };
    const CR2 = [{ id: 'r1', text: '1905년은 일본 시마네현 고시의 해다' }, { id: 'r2', text: '공문서 첫 \'독도\'는 1906년 울도 군수 보고서다' },
      { id: 'r3', text: '두 해는 1년 차이라 같은 셈이다', why: '1년 차이라도 누가 만든 문서인지가 완전히 달라요.' }, { id: 'r4', text: '연도는 외우기만 하면 된다', why: '문서와 짝지어야 헷갈리지 않아요.' }];
    const C3 = { text: '친구가 만든 독도 소개 글에 "독도는 강원도에 속한 섬"이라고 적혀 있다.', ask: '어떻게 할까?', motif: 'leaf', choices: [
      { id: 'pass', text: '동해에 있으니 맞을 거라며 넘어간다', result: '틀린 주소가 소개 글에 남는다.', impact: [{ who: '읽는 사람', text: '틀린 주소를 믿는다', tone: -1 }], why: '독도의 주소는 경상북도 울릉군이에요.', ending: '틀린 주소가 남았어요.' },
      { id: 'addr', text: '행정 주소를 함께 찾아보자고 한다', result: '경상북도 울릉군 울릉읍 독도리라는 주소를 찾는다.', impact: [{ who: '친구', text: '바른 주소를 안다', tone: 1 }], end: '바른 주소를 찾았어요.',
        next: { text: '친구가 "주소는 어디서 확인한 거야?"라고 묻는다.', choices: [
          { id: 'src', text: '확인한 공식 누리집을 출처로 함께 적자고 한다', result: '소개 글에 주소와 출처가 함께 들어간다.', impact: [{ who: '읽는 사람', text: '출처를 따라가 확인할 수 있다', tone: 1 }] },
          { id: 'nosrc', text: '"내가 봤으니 믿어"라고 한다', result: '친구가 반신반의한다.', impact: [{ who: '친구', text: '믿기 어렵다', tone: -1 }], why: '출처를 적어야 다른 사람도 확인할 수 있어요.' }] } }] };
    const CR3 = [{ id: 'r1', text: '독도 주소는 경상북도 울릉군 울릉읍 독도리다' }, { id: 'r2', text: '주소에도 출처를 밝힌다' },
      { id: 'r3', text: '동해에 있으면 모두 강원도다', why: '바다의 자리와 행정 구역은 달라요.' }, { id: 'r4', text: '친구 글은 고쳐 주지 않는 것이 예의다', why: '정중하게 출처와 함께 알려 주는 것이 친구를 돕는 길이에요.' }];

    ALL.push(
      M('intro.names', {
        title: '가장 오래된 이름 어림', method: '이름 카드 어림 차례', tool: 'wordcards', minutes: 6,
        levels: { easy: '이름 카드 2장(우산도·독도) 가운데 오래된 이름을 고르는 시연을 본다.', base: '이름 카드 3장 가운데 가장 오래된 이름을 고르는 시연을 본다.', challenge: '그 이름을 고른 까닭을 기록 이름을 들어 말한다.' },
        intro: {
          teacher: '"우산도·석도·독도 — 이 가운데 가장 오래된 이름은 무엇일까요?" 먼저 어림해 손을 들게 한 뒤 시연 단추로 \'우산도\' 카드가 담기는 모습을 보인다. "독도가 제일 오래됐을 것 같아요"라는 대답이 많으면 "『세종실록』 「지리지」에는 어떤 이름이 적혀 있었지요?"라고 되묻는다. 오늘은 이름이 바뀐 차례와 일본 옛 이름의 혼동을 정리하고, 위치 정보로 독도를 소개한다고 밝힌다.',
          student: '우산도·석도·독도 가운데 가장 오래된 이름을 어림해 골라요. 왜 그렇게 생각했는지 짝에게 말해요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '가장 오래된 이름', cards: [{ id: 'u', text: '우산도' }, { id: 's', text: '석도' }, { id: 'd', text: '독도' }], shuffle: false }, sequence: [{ pick: ['u'] }] },
          art: { draw: 'three paper name tags hanging from strings over a small rocky twin island, each tag in a different pastel color', banner: '어느 이름이 가장 오래됐을까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'lavender' }] },
        },
      }),
      M('intro.pos', {
        title: '방위로 독도 자리 말하기', method: '위도·방위로 독도 자리 말하기', tool: 'map', minutes: 6,
        levels: { easy: '울릉도에서 본 독도의 방위만 읽는 시연을 본다.', base: '방위를 읽고, 외교부 누리집 거리(약 87.4km)를 넣어 한 문장으로 말한다.', challenge: '울릉도와 오키섬 두 기준점에서 각각 방위와 거리를 말한다.' },
        intro: {
          teacher: '"울릉도에서 보면 독도는 어느 쪽에 있을까요?" 방위 모드 어림 칸 지도에서 시연 단추로 방위표를 맞추고 울릉도→독도 방위가 \'동\'으로 읽히는 모습을 보인다. 이 지도는 칸으로 단순하게 그린 어림 지도라 실제로는 동쪽에서 조금 남쪽으로 기운 쪽이라고 덧붙인다. "독도는 오키섬 바로 옆"이라는 말에는 두 거리(약 87.4km·약 157.5km)를 견주게 한다.',
          student: '어림 칸 지도에서 울릉도를 기준으로 독도의 방위를 읽고, 거리 정보를 넣어 "독도는 울릉도에서 ___쪽으로 약 ___km"라고 말해요.',
          demo: { tool: 'map', options: POS, sequence: [{ from: '울릉도', to: '독도' }] },
          art: { draw: 'a paper-cut compass rose floating over a simple grid map of the East Sea with Ulleungdo and Dokdo islands', banner: '독도는 울릉도의 어느 쪽?', extra: [{ motif: 'sun', x: 410, y: 58 }] },
        },
        notes: '칸 지도는 어림이다. 실제 방위·거리는 외교부 독도 누리집의 지도를 함께 띄워 보인다.',
      }),
      M('activity.line', {
        title: '이름이 바뀐 차례', method: '이름이 바뀐 차례 시간 띠', tool: 'timeline', minutes: 16,
        levels: { easy: '이름 카드 2장(우산도·독도)을 차례로 놓고, 놓으면 바로 맞는지 알려 준다.', base: '이름 카드 3장을 차례로 놓고 연도 눈금에 이름을 잇는다.', challenge: '이름마다 근거 사료를 붙이고, 일본 쪽 이름 차례도 놓는다(함정 카드 포함).' },
        activity: {
          title: '이름이 바뀐 차례', tool: 'timeline',
          teacher: '"이름이 바뀌었다고 다른 섬이 되는 걸까요?" 우산도→석도→독도를 시간 띠에 놓은 뒤 이름마다 그 이름이 나온 기록을 붙이게 한다. 1905년과 1906년을 헷갈리는 학생에게 "1905년은 일본의 고시, 1906년은 우리 공문서에 \'독도\'가 처음 나온 해"라고 짝지어 준다. 일본은 예전에 울릉도를 다케시마, 독도를 마쓰시마라 불렀다는 이름 혼동도 함께 짚는다.',
          task: '독도를 가리킨 우리 이름이 바뀐 차례를 시간 띠에 놓고, 이름마다 근거 사료를 이어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            IT(OB('독도를 가리킨 우리 이름을 옛날부터 차례로 놓으세요.', NAMES, AX),
              OB('이름 두 개를 옛날부터 차례로 놓으세요.', [NAMES[0], NAMES[2]], AX)),
            IT(TM('연도 눈금에 그때 쓰인 이름을 이어 보세요.', [['1454년', '우산도', 1454], ['1900년', '석도', 1900], ['1906년', '독도', 1906]], ['마쓰시마'], AX),
              TM('연도 눈금 두 곳에 그때 쓰인 이름을 이어 보세요.', [['1454년', '우산도', 1454], ['1906년', '독도', 1906]], [], AX)),
            IT(OB('일본 쪽에서 독도를 부른 이름을 옛날부터 차례로 놓으세요.', [{ id: 'j1', text: '마쓰시마(송도) — 예전 이름' }, { id: 'j2', text: '다케시마 — 1905년에 바꾼 이름' }], AX, [{ id: 'jx', text: '울릉도를 부른 다케시마' }]),
              null,
              TM('이름마다 그 이름이 나온 사료를 이어 보세요(함정 카드 포함).', [['우산도', '『세종실록』 「지리지」', 1454], ['석도', '대한제국 칙령 제41호', 1900], ['독도', '울도 군수 보고서', 1906]], ['시마네현 고시', '출처 없는 블로그'], AX),
              { conclude: '독도는 우산도·석도·독도로 이름이 바뀌어 왔지만 같은 섬을 가리켜요. 일본의 옛 이름 다케시마는 울릉도를 가리켰어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '이름과 그 이름이 나온 기록을 써요.', columns: ['이름', '기록(연도)'], cells: [['우산도', ''], ['석도', ''], ['독도', '']], answer: '「지리지」(1454), 칙령 제41호(1900), 울도 군수 보고서(1906)' }] },
      }),
      M('activity.confuse', {
        title: '헷갈리는 이름·연도 갈림길', method: '헷갈리는 이름·연도 바로잡기', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림길 1번에서 고르고 결과 장면을 본다.', base: '갈림길 2번을 끝까지 가 본 뒤 바로잡는 근거를 하나 이상 고른다.', challenge: '갈림길 2번을 간 뒤, 섞인 근거 카드 가운데 맞는 근거 2장을 정확히 고른다.' },
        activity: {
          title: '헷갈리는 이름·연도 갈림길', tool: 'dilemma',
          teacher: '"\'다케시마=독도\'는 언제나 맞는 말일까요?" 길을 끝까지 간 뒤, 바로잡을 때 핀잔을 준 길과 표·출처로 알려 준 길의 결과를 견주게 한다. "1905년이나 1906년이나 비슷하다"는 학생에게 "그 해의 문서는 누가 만들었나요?"라고 되묻는다. 친구의 실수를 바로잡을 때도 출처를 함께 보이는 것이 가장 힘 있는 방법이라고 짚는다.',
          task: '헷갈리기 쉬운 이름·연도·주소 상황에서 길을 골라 결과를 보고, 바로잡는 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '"옛날부터 독도를 다케시마라 불렀다"는 말을 들었어요. 한 번 골라 보세요.', base: '"옛날부터 독도를 다케시마라 불렀다"는 말을 들었어요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '"옛날부터 독도를 다케시마라 불렀다"는 말을 들었어요. 두 번 골라 끝까지 가고 맞는 근거 2장을 고르세요.' },
              '다케시마는 어느 섬?', C1, [['check', 'table']], CR1, ['r1', 'r2'], { reasons: [{ id: 'r5', text: '지금 이름으로 옛 기록을 읽는다' }], ok: ['r1', 'r2'] }),
            DIL({ easy: '\'독도\'가 공문서에 처음 나온 해를 묻는 퀴즈예요. 한 번 골라 보세요.', base: '\'독도\'가 공문서에 처음 나온 해를 묻는 퀴즈예요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '\'독도\'가 공문서에 처음 나온 해를 묻는 퀴즈예요. 두 번 골라 끝까지 가고 맞는 근거 2장을 고르세요.' },
              '1905년? 1906년?', C2, [['y1906', 'pair']], CR2, ['r1', 'r2'], { reasons: [{ id: 'r5', text: '짝이 말하면 따라 쓴다' }], ok: ['r1', 'r2'] }),
            DIL({ easy: '소개 글에 주소가 틀리게 적혔어요. 한 번 골라 보세요.', base: '소개 글에 주소가 틀리게 적혔어요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '소개 글에 주소가 틀리게 적혔어요. 두 번 골라 끝까지 가고 맞는 근거 2장을 고르세요.' },
              '독도의 주소', C3, [['addr', 'src']], CR3, ['r1', 'r2'], { reasons: [{ id: 'r5', text: '주소는 지도 색으로 정한다' }], ok: ['r1', 'r2'] },
              { conclude: '헷갈리는 이름·연도·주소는 그 시대의 문서와 출처로 바로잡고, 친구에게는 핀잔 대신 정리한 표와 출처로 알려 줘요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '예전 일본에서 \'다케시마\'라고 부른 섬은?', options: ['울릉도', '독도', '오키섬'], answer: '울릉도' }] },
      }),
      M('activity.info', {
        title: '소개에 넣을 정보 고르기', method: '소개에 넣을 정보 고르기', tool: 'sortboard', minutes: 16,
        levels: { easy: '정보 카드 4장을 \'넣을·뺄\' 바구니에 나누고, 틀리면 까닭을 말하고 되돌아온다.', base: '정보 카드 6장을 나누고, 넣을 정보를 위치·이름 정보로 다시 나눈다.', challenge: '정보 카드 8장(출처 없는 소문 포함)을 나누고, 출처 있는 정보만 가려낸다.' },
        activity: {
          title: '소개에 넣을 정보 고르기', tool: 'sortboard',
          teacher: '"독도를 처음 듣는 친구에게 소개한다면 어떤 정보를 넣고 무엇을 뺄까요?" 카드를 나눈 뒤 \'뺄 정보\'마다 왜 빼야 하는지 출처·정확성·표현으로 말하게 한다. "강한 말을 넣어야 기억에 남는다"는 학생에게 "상대 나라를 깎아내리는 말을 들은 외국 친구는 우리 정보를 믿어 줄까요?"라고 되묻는다. 숫자 정보 옆에는 출처를 꼭 붙인다는 점을 짚는다.',
          task: '독도 소개 글에 넣을 정보와 뺄 정보를 나누고, 넣을 정보는 출처가 있는지 확인해요.',
          levels: { easy: { live: true, instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            IT(SB('정보 카드를 \'넣을 정보\'와 \'뺄 정보\'로 나누세요.', ['넣을 정보', '뺄 정보'], INFO),
              { prompt: '정보 카드 4장을 \'넣을 정보\'와 \'뺄 정보\'로 나누세요.', toolOptions: { limit: 4 }, target: { sort: { '넣을 정보': ['i1', 'i2'], '뺄 정보': ['o1', 'o2'] } } },
              { prompt: '정보 카드 8장을 \'넣을 정보\'와 \'뺄 정보\'로 나누세요.', toolOptions: { more: strip(INFO_MORE) }, target: { sort: { '넣을 정보': ['i1', 'i2', 'i3', 'i4'], '뺄 정보': ['o1', 'o2', 'o3', 'o4'] } } }),
            IT(SB('넣을 정보를 \'위치 정보\'와 \'이름 정보\'로 나누세요.', ['위치 정보', '이름 정보'], [
              { id: 'p1', text: '울릉도에서 약 87.4km', to: '위치 정보' }, { id: 'p2', text: '경상북도 울릉군 울릉읍 독도리', to: '위치 정보' },
              { id: 'p3', text: '오키섬에서 약 157.5km', to: '위치 정보' }, { id: 'm1', text: '조선 기록의 이름은 우산도', to: '이름 정보' },
              { id: 'm2', text: '1900년 칙령의 이름은 석도', to: '이름 정보' }, { id: 'm3', text: '공문서 첫 \'독도\'는 1906년', to: '이름 정보' }]),
              { prompt: '정보 카드 4장을 \'위치 정보\'와 \'이름 정보\'로 나누세요.', toolOptions: { limit: 4, cards: [{ id: 'p1', text: '울릉도에서 약 87.4km' }, { id: 'm1', text: '조선 기록의 이름은 우산도' }, { id: 'p2', text: '경상북도 울릉군 울릉읍 독도리' }, { id: 'm2', text: '1900년 칙령의 이름은 석도' }] }, target: { sort: { '위치 정보': ['p1', 'p2'], '이름 정보': ['m1', 'm2'] } } }),
            IT(SB('정보를 \'출처 있음\'과 \'확인 필요\'로 나누세요.', ['출처 있음', '확인 필요'], [
              { id: 's1', text: '거리 87.4km — 외교부 누리집', to: '출처 있음' }, { id: 's2', text: '우산도 — 『세종실록』 「지리지」', to: '출처 있음' },
              { id: 's3', text: '독도 — 1906년 울도 군수 보고서', to: '출처 있음' }, { id: 'c1', text: '"독도엔 늘 바람이 없다더라"', to: '확인 필요' },
              { id: 'c2', text: '친구가 들었다는 섬 넓이', to: '확인 필요' }]), null, null,
              { conclude: '소개 글에는 출처가 있는 위치·이름 정보를 넣고, 소문·틀린 주소·깎아내리는 말은 빼요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내 소개 글에 꼭 넣을 정보 두 가지와 그 출처를 써요.' }] },
      }),
      M('activity.write', {
        title: '독도 소개 글 다섯 문장', method: '정보 소개 글 쓰기', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '빈칸 글 틀을 채워 문단마다 쓰고 기준 2개로 점검한다.', base: '위치·거리, 이름, 마무리 세 문단으로 다섯 문장 소개 글을 쓰고 기준(정확성·출처)으로 점검한다.', challenge: '마무리 문단을 외국 친구가 읽을 쉬운 말로 다시 쓰고 기준 4개로 점검한다.' },
        activity: {
          title: '독도 소개 글 다섯 문장', tool: 'rubric-writing',
          teacher: '"\'독도는 우리 땅!\'과 \'독도는 울릉도에서 동쪽으로 약 87.4km 떨어진 섬이다\' 가운데 어느 쪽이 소개 글일까요?" 두 문장을 견주어 읽은 뒤 문단마다 기준표를 함께 본다. 숫자에 출처를 빠뜨리는 학생에게 "읽는 사람이 이 숫자를 어디서 확인할 수 있을까요?"라고 되묻는다. 상대 나라를 깎아내리는 표현은 쓰지 않고 정보로 소개한다는 약속을 짚는다.',
          task: '위치·거리, 이름, 마무리 세 문단으로 독도 소개 글을 쓰고 기준표(정확성·출처)로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RW('첫 문단: 독도의 위치·주소·거리를 두 문장으로 쓰세요.',
              { topic: '첫 문단 — 독도의 위치(방위)·주소·거리를 두 문장으로 쓰세요. 거리에는 출처를 붙여요.', minChars: 40, maxChars: 220, minSentences: 2, maxSentences: 2, title: '소개 글 ① 위치', lines: 4 },
              ['방위와 거리를 썼다', '주소를 바르게 썼다', '거리의 출처를 밝혔다'],
              { prompt: '첫 문단: 틀을 채워 위치를 쓰세요.', toolOptions: { starter: '독도는 울릉도에서 ___쪽으로 약 ___km 떨어져 있다. 주소는 ___이다.' }, crit: ['방위와 거리를 썼다', '주소를 바르게 썼다'] }),
            RW('둘째 문단: 독도 이름이 바뀐 차례를 두 문장으로 쓰세요.',
              { topic: '둘째 문단 — 우산도·석도·독도로 이어진 이름을 근거 기록과 함께 두 문장으로 쓰세요.', minChars: 40, maxChars: 220, minSentences: 2, maxSentences: 2, title: '소개 글 ② 이름', lines: 4 },
              ['이름 셋을 차례대로 썼다', '이름마다 기록을 하나 이상 밝혔다', '1905년과 1906년을 헷갈리지 않았다'],
              { prompt: '둘째 문단: 틀을 채워 이름을 쓰세요.', toolOptions: { starter: '조선 기록에는 ___로, 1900년 칙령에는 ___로 나온다. 1906년 보고서에 ___라는 이름이 처음 나온다.' }, crit: ['이름 셋을 차례대로 썼다', '이름마다 기록을 하나 이상 밝혔다'] }),
            RW('셋째 문단: 소개 글을 마무리하는 문장을 쓰세요.',
              { topic: '셋째 문단 — 읽는 사람이 더 알아볼 수 있게 마무리하는 문장 하나를 쓰세요(예: 확인할 수 있는 곳 안내).', minChars: 15, maxChars: 150, minSentences: 1, maxSentences: 2, title: '소개 글 ③ 마무리', lines: 3 },
              ['읽는 사람을 생각한 마무리다', '깎아내리는 표현이 없다', '더 알아볼 곳을 알려 주었다'],
              { prompt: '셋째 문단: 틀을 채워 마무리하세요.', toolOptions: { starter: '독도에 대해 더 알고 싶다면 ___에서 확인할 수 있다.' }, crit: ['읽는 사람을 생각한 마무리다', '더 알아볼 곳을 알려 주었다'] },
              { prompt: '셋째 문단: 외국 친구가 읽는다고 생각하고 쉬운 말로 마무리 두 문장을 쓰세요.', toolOptions: { maxSentences: 3 }, crit: ['읽는 사람을 생각한 마무리다', '깎아내리는 표현이 없다', '더 알아볼 곳을 알려 주었다', '처음 듣는 사람도 알 쉬운 말로 썼다'] },
              { conclude: '좋은 소개 글은 정확한 위치·이름 정보에 출처를 붙이고, 상대를 깎아내리지 않고 차분하게 전해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내 소개 글의 첫 문장을 옮겨 쓰고, 그 문장의 출처를 적어요.' }] },
      }),
      M('wrap.peer', {
        title: '짝 소개 글 기준표 점검', method: '짝 글 기준표로 봐 주기', tool: 'timer', minutes: 7, delivery: 'guided',
        levels: { easy: '짝 글을 읽고 기준 칸 1개(거리 정보)만 점검한다.', base: '짝 글을 읽고 기준 칸 3개를 점검한 뒤 고칠 점 하나를 말해 준다.', challenge: '고칠 점을 말할 때 고친 문장까지 제안한다(교사 진행).' },
        wrap: {
          teacher: '"짝의 글을 1분 동안 읽고, 30초 동안 고칠 점 하나를 말해 주세요." 타이머를 읽기 1분·말해 주기 30초로 맞추고 짝을 바꿔 한 번 더 하게 한다. 고칠 점을 "별로야"라고 말하는 학생에게 "기준표의 어느 칸이 비었는지로 말해 볼까요?"라고 되묻는다. 받은 쪽은 고마움을 말하고 한 문장을 바로 고쳐 쓰게 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'timer', options: { title: '짝 글 점검', labels: ['읽기', '말해 주기'], plan: { work: 30, rest: 20, rounds: 1 }, safety: ['거리 정보가 정확하다', '출처를 밝혔다', '이름 차례가 맞다'] },
              prompt: '읽기 60초·말해 주기 30초를 2번 하도록 맞추고, 짝 글에서 지킨 칸을 표시해요.', target: { plan: { work: 60, rest: 30, rounds: 2 }, safety: true }, difficulty: 0.15 },
            { prompt: '읽기 60초·말해 주기 30초를 2번 맞추고, 거리 정보 칸을 표시해요.', toolOptions: { safety: ['거리 정보가 정확하다'] } }),
            { type: 'choice', prompt: '짝에게 고칠 점을 말하는 방법으로 가장 알맞은 것은?', options: ['"별로야"라고 짧게 말한다', '"거리에 출처를 붙이면 더 좋겠어"처럼 기준 칸으로 말한다', '아무 말도 하지 않는다'], answer: 1, difficulty: 0.15, explain: '기준표의 칸으로 말하면 짝이 무엇을 고칠지 알 수 있어요.' },
            { type: 'short', prompt: '짝에게 받은 고칠 점을 반영해 고친 문장 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '짝 글 점검',
          items: [
            { type: 'check', prompt: '짝 글에서 지킨 칸에 표시해요.', options: ['거리 정보가 정확하다', '출처를 밝혔다', '이름 차례가 맞다', '깎아내리는 표현이 없다'] },
            { type: 'short', prompt: '짝에게 말해 준 고칠 점을 한 문장으로 써요.' },
          ],
        },
      }),
      M('wrap.bar', {
        title: '거리 자료 막대로 확인', method: '거리 자료 막대로 다시 보기', tool: 'chart', minutes: 7,
        levels: { easy: '두 거리 막대를 그리고 값이 보인다.', base: '두 거리 막대를 작은 눈금(10km)에 맞춰 그린다.', challenge: '두 거리의 차이를 그래프에서 읽어 쓴다.' },
        wrap: {
          teacher: '"내 소개 글의 거리 숫자를 막대로 그리면 글과 맞을까요?" 외교부 누리집의 두 거리를 막대로 그린 뒤 글의 숫자와 견주게 한다. 막대 길이를 보고 "독도는 일본 쪽 섬에 더 가깝다"고 말하는 학생에게 두 막대를 다시 짚어 보게 한다. 거리는 지리적 근거의 하나일 뿐, 역사·국제법 근거와 함께 말할 때 힘이 커진다는 점을 짚는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'chart', options: CB('독도까지의 거리(외교부 누리집)', 'km', [['울릉도에서', 87.4], ['오키섬에서', 157.5]], { xLabel: '기준점', yLabel: '거리', max: 160, scale: 20, step: 0.1 }),
              prompt: '외교부 누리집의 두 거리를 막대그래프로 그려요.', target: { build: true }, difficulty: 0.2 },
            { prompt: '두 거리를 막대그래프로 그려요(값이 보여요).', toolOptions: { showValues: true } },
            { prompt: '두 거리를 10km 눈금에 맞춰 막대그래프로 그려요.', toolOptions: { scale: 10 } }),
            { type: 'tool', tool: 'chart', options: CR('독도까지의 거리(외교부 누리집)', 'km', [['울릉도에서', 87.4], ['오키섬에서', 157.5]], { xLabel: '기준점', yLabel: '거리', max: 160, scale: 20, showValues: true, question: '두 거리의 차이는 몇 km인가요?' }), prompt: '두 거리의 차이를 그래프에서 읽어 써요.', target: { value: 70.1 }, difficulty: 0.25 },
            { type: 'choice', prompt: '거리 자료를 소개 글에 쓸 때 가장 알맞은 태도는?', options: ['거리만으로 영토가 정해진다고 쓴다', '출처를 밝히고 다른 근거와 함께 쓴다', '숫자를 크게 부풀려 쓴다'], answer: 1, difficulty: 0.15, explain: '거리는 지리 근거의 하나예요. 출처와 다른 근거를 함께 써요.' },
          ],
        },
        worksheet: {
          title: '거리 자료 확인',
          items: [
            { type: 'table', prompt: '두 거리를 써요.', columns: ['기준점', '독도까지 거리'], cells: [['울릉도', ''], ['오키섬', '']], answer: '약 87.4km, 약 157.5km' },
            { type: 'short', prompt: '내 소개 글의 거리 숫자가 그래프와 맞는지 확인하고 결과를 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 7학년 · 일본 정부 주장과 반박 근거 (dokdo.m.g7-claim) ====
  // 일본 정부의 주장은 문제점을 근거로 따지는 대상으로만 다룬다. 정부의 주장과 일본 사람 한 명 한 명의 생각을 구별한다.
  {
    const M = MK('g7-claim', [7]);
    const CLAIMS = ['우산도는 독도가 아니다', '17세기에 영유권을 확립했다'];
    const EVI = [
      { id: 'e1', text: '「지리지」: 맑은 날에만 보이는 두 섬', to: '우산도는 독도가 아니다' }, { id: 'e2', text: '문헌비고: 우산은 일본이 말한 송도', to: '우산도는 독도가 아니다' },
      { id: 'e3', text: '1695년 돗토리번 답변서', to: '17세기에 영유권을 확립했다' }, { id: 'e4', text: '1696년 막부의 울릉도 도해 금지', to: '17세기에 영유권을 확립했다' },
      { id: 'x1', text: '"우리 땅이니까"라는 구호' }, { id: 'x2', text: '독도가 더 가깝다는 느낌' },
    ];
    const D1 = { text: '토론에서 상대 학생이 "막부의 도해 금지는 1905년 일이니 상관없어요"라고 틀린 연도를 말했다.', ask: '어떻게 반박할까?', motif: 'star', choices: [
      { id: 'laugh', text: '"연도도 모르면서!"라며 웃는다', result: '상대가 얼굴이 붉어지고 토론 분위기가 거칠어진다.', impact: [{ who: '상대', text: '창피함을 느낀다', tone: -1 }], why: '틀린 연도는 놀리지 않고 근거로 바로잡아요.', ending: '분위기가 거칠어졌어요.' },
      { id: 'fix', text: '"1696년 결정이에요"라고 근거와 함께 바로잡는다', result: '상대가 자료를 다시 확인한다.', impact: [{ who: '상대', text: '바른 연도를 안다', tone: 1 }], end: '근거로 바로잡았어요.',
        next: { text: '상대가 "그래도 그건 울릉도 이야기잖아요"라고 다시 말한다.', choices: [
          { id: 'more', text: '돗토리번 답변서가 두 섬을 함께 다뤘다는 것을 차분히 보여 준다', result: '토론이 사료를 두고 이어진다.', impact: [{ who: '청중', text: '두 사료를 함께 본다', tone: 1 }] },
          { id: 'stop', text: '"아무튼 우리 땅이에요"라고 끝낸다', result: '청중이 근거를 듣지 못한다.', impact: [{ who: '청중', text: '판단할 근거가 없다', tone: -1 }], why: '"아무튼"은 근거가 아니에요. 사료를 하나 더 보여 줘요.' }] } }] };
    const DR1 = [{ id: 'r1', text: '틀린 연도는 근거와 함께 바로잡는다' }, { id: 'r2', text: '반론에는 사료를 하나 더 보여 준다' },
      { id: 'r3', text: '상대가 틀리면 놀려도 된다', why: '놀리면 상대도 청중도 귀를 닫아요.' }, { id: 'r4', text: '"아무튼"이면 토론이 끝난다', why: '근거 없는 마무리는 설득하지 못해요.' }];
    const D2 = { text: '내가 발표에서 "「지리지」는 1531년 책"이라고 말했는데, 상대가 "1454년 아닌가요?"라고 짚었다.', ask: '어떻게 할까?', motif: 'leaf', choices: [
      { id: 'deny', text: '틀리지 않았다고 우긴다', result: '자료를 보니 내가 틀렸고, 다른 근거까지 의심받는다.', impact: [{ who: '나', text: '믿음을 잃는다', tone: -1 }], why: '내 실수도 인정해야 다른 근거를 지킬 수 있어요.', ending: '내 말 전체가 의심받았어요.' },
      { id: 'admit', text: '"맞아요, 1454년이에요. 고마워요"라고 인정한다', result: '청중이 내 말을 더 믿게 된다.', impact: [{ who: '청중', text: '발표를 믿는다', tone: 1 }], end: '실수를 인정했어요.',
        next: { text: '발표를 이어 가야 한다.', choices: [
          { id: 'go', text: '바로잡은 연도로 근거를 다시 말하고 발표를 잇는다', result: '근거가 정확해져 발표가 단단해진다.', impact: [{ who: '청중', text: '정확한 근거를 듣는다', tone: 1 }] },
          { id: 'quit', text: '당황해 발표를 그만둔다', result: '준비한 다른 근거를 말하지 못한다.', impact: [{ who: '모둠', text: '준비가 아깝다', tone: -1 }], why: '실수를 고친 뒤에는 남은 근거로 이어 가요.' }] } }] };
    const DR2 = [{ id: 'r1', text: '내 실수를 인정하면 다른 근거가 지켜진다' }, { id: 'r2', text: '바로잡은 사실로 근거를 다시 말한다' },
      { id: 'r3', text: '한 번 말한 것은 끝까지 우긴다', why: '우기면 맞는 근거까지 의심받아요.' }, { id: 'r4', text: '실수하면 발표를 그만둔다', why: '고친 뒤 이어 가면 돼요.' }];
    const D3 = { text: '토론을 보던 친구 하나가 "일본 사람들은 다 나빠"라고 외친다.', ask: '토론하는 나는 어떻게 할까?', motif: 'cloud', choices: [
      { id: 'cheer', text: '같이 박수를 친다', result: '토론이 사료가 아니라 미움을 겨루는 자리가 된다.', impact: [{ who: '교실', text: '혐오 표현이 퍼진다', tone: -1 }], why: '정부의 주장과 사람들을 구별하고, 미워하는 말에는 동참하지 않아요.', ending: '토론이 미움으로 흘렀어요.' },
      { id: 'sep', text: '"우리는 정부의 주장을 근거로 따지는 중이야"라고 말한다', result: '교실이 조용해지고 토론이 사료로 돌아온다.', impact: [{ who: '교실', text: '차분해진다', tone: 1 }], end: '토론을 사료로 되돌렸어요.',
        next: { text: '친구가 "그래도 화가 나"라고 한다.', choices: [
          { id: 'calm', text: '"화날 수 있어. 그래서 더 정확한 근거로 말하자"고 한다', result: '친구가 자료 찾기를 돕겠다고 한다.', impact: [{ who: '친구', text: '마음을 근거로 돌린다', tone: 1 }] },
          { id: 'join', text: '"맞아, 다 나빠"라고 맞장구친다', result: '미워하는 말이 더 커진다.', impact: [{ who: '교실', text: '혐오가 커진다', tone: -1 }], why: '사람 전체를 탓하는 말은 근거가 아니고, 듣는 사람에게 상처가 돼요.' }] } }] };
    const DR3 = [{ id: 'r1', text: '정부의 주장과 그 나라 사람들을 구별한다' }, { id: 'r2', text: '화가 날수록 정확한 근거로 말한다' },
      { id: 'r3', text: '상대 나라를 미워해야 땅을 지킨다', why: '미움은 근거가 되지 않아요. 사료가 땅을 지켜요.' }, { id: 'r4', text: '여럿이 외치면 옳은 말이 된다', why: '여럿이 외쳐도 혐오 표현은 옳지 않아요.' }];

    ALL.push(
      M('intro.read', {
        title: '주장 문장, 무엇을 확인할까', method: '주장 문장 보고 확인할 점 고르기', tool: 'wordcards', minutes: 6,
        levels: { easy: '질문 카드 2장 가운데 확인할 질문을 고르는 시연을 본다.', base: '질문 카드 3장(함정 1장) 가운데 2장을 고르는 시연을 본다.', challenge: '카드에 없는 확인 질문을 직접 만들어 말한다.' },
        intro: {
          teacher: '"상대의 주장을 반박하려면 먼저 무엇을 해야 할까요?" 일본 정부가 \'17세기에 영유권을 확립했고 우산도는 독도가 아니다\'라고 주장한다고 차분히 읽어 주고, 시연 단추로 확인 질문 카드가 담기는 모습을 보인다. "일본 사람들은 다 그렇게 생각해요"라는 말에는 "정부의 주장과 사람 한 명 한 명의 생각은 같을까요?"라고 되묻는다. 오늘은 주장을 정확히 알고 사료로 짝지어 따지는 연습을 한다고 밝힌다.',
          student: '일본 정부의 주장 문장을 읽고, 맞는지 따지려면 무엇을 확인해야 할지 질문 카드를 골라요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '확인할 질문', cards: [{ id: 'q1', text: '그때 일본 정부 문서는 뭐라 했나?' }, { id: 'q2', text: '우산도 기록 원문은 뭐라 적었나?' }, { id: 'q3', text: '주장한 사람이 얼마나 유명한가?' }], shuffle: false }, sequence: [{ pick: ['q1', 'q2'] }] },
          art: { draw: 'a paper-cut debate podium with a speech bubble on one side and a stack of old documents and a magnifying glass on the other', banner: '주장을 정확히 알고 따지기', extra: [{ motif: 'cloud', x: 110, y: 52 }] },
        },
        notes: '주장을 읽어 줄 때 놀리는 말투를 쓰지 않는다. 정부의 공식 주장을 따지는 학습이지 일본 국민을 비난하는 시간이 아니다.',
      }),
      M('intro.tone', {
        title: '두 반박, 듣는 마음', method: '두 반박 글 표현 견주기', tool: 'emotion', minutes: 6,
        levels: { easy: '반박 2개와 듣는 사람의 마음을 잇는 시연을 본다.', base: '반박 3개와 듣는 사람의 마음을 잇는 시연을 본다.', challenge: '정중한 반박이 왜 더 설득력이 있는지 까닭을 말한다.' },
        intro: {
          teacher: '"같은 내용을 두 가지 말투로 반박하면 듣는 사람의 마음은 어떻게 다를까요?" 거친 반박과 정중한 반박을 읽어 주고 시연 단추로 듣는 마음 카드가 이어지는 모습을 보인다. "세게 말해야 이긴다"는 학생에게 "마음이 닫힌 사람은 근거를 끝까지 들을까요?"라고 되묻는다. 반박의 힘은 목소리가 아니라 근거와 태도에서 나온다고 짚는다.',
          student: '거친 반박과 정중한 반박을 듣고, 듣는 사람이 어떤 마음일지 이어 보아요. 어느 쪽이 근거를 끝까지 듣게 할지 말해요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 's1', label: '"말도 안 되는 소리 그만해!"' }, { id: 's2', label: '"1696년 막부 결정을 같이 볼까요?"' }, { id: 's3', label: '"아무튼 우리 땅이에요"' }], cards: [{ id: 'k1', text: '화남' }, { id: 'k2', text: '궁금함' }, { id: 'k3', text: '답답함' }], shuffle: false }, sequence: [{ match: { s1: 'k1', s2: 'k2', s3: 'k3' } }] },
          art: { draw: 'two paper-cut speech bubbles, one jagged and red, one smooth and soft blue holding a small document, with listeners reacting below', banner: '어느 반박이 마음을 열까?', extra: [{ motif: 'rainbow', x: 300, y: 96 }] },
        },
      }),
      M('activity.match', {
        title: '주장과 반박 근거', method: '주장과 반박 근거 짝짓기', tool: 'sortboard', minutes: 16,
        levels: { easy: '주장 2개 바구니에 근거 카드 4장을 나누고, 틀리면 까닭을 말하고 되돌아온다.', base: '주장 2개 바구니에 근거를 나누되 함정 카드 2장은 남기고, 반박 표현과 사실·해석을 가른다.', challenge: '주장 3개 바구니에 근거를 나누고 함정 카드가 더 섞인다.' },
        activity: {
          title: '주장과 반박 근거', tool: 'sortboard',
          teacher: '"이 근거는 어느 주장의 어디를 짚고 있나요?" 근거 카드를 놓을 때마다 그 사료가 무엇을 보여 주는지 한 문장씩 말하게 한다. 구호 카드를 근거 바구니에 넣는 학생에게 "구호는 확인할 수 있는 자료일까요?"라고 되묻는다. 바구니에 넣지 않고 남긴 카드도 왜 근거가 아닌지 말할 수 있어야 한다고 짚는다.',
          task: '일본 정부 주장마다 맞는 사료 근거 카드를 나누고, 근거가 아닌 카드는 남겨요.',
          levels: { easy: { live: true, instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            IT(SB('주장 바구니마다 맞는 반박 근거를 나누세요. 근거가 아닌 카드는 남겨요.', CLAIMS, EVI),
              { prompt: '주장 바구니마다 맞는 반박 근거 4장을 나누세요.', toolOptions: { limit: 4 }, target: { sort: { '우산도는 독도가 아니다': ['e1', 'e2'], '17세기에 영유권을 확립했다': ['e3', 'e4'] } } },
              SB('주장 세 바구니에 맞는 반박 근거를 나누세요. 근거가 아닌 카드는 남겨요.', [...CLAIMS, '우산도는 울릉도 옆 작은 섬이다'], [...EVI,
                { id: 'e5', text: '울릉도 옆 섬은 흐려도 보인다', to: '우산도는 울릉도 옆 작은 섬이다' }, { id: 'x3', text: '외국 누리꾼의 댓글' }])),
            IT(SB('반박 문장을 \'정중한 반박\'과 \'거친 반박\'으로 나누세요.', ['정중한 반박', '거친 반박'], [
              { id: 'p1', text: '"그 시기 막부 결정을 함께 볼까요?"', to: '정중한 반박' }, { id: 'p2', text: '"원문에는 이렇게 적혀 있어요"', to: '정중한 반박' },
              { id: 'p3', text: '"자료의 출처를 알려 드릴게요"', to: '정중한 반박' }, { id: 'h1', text: '"그런 것도 모르냐"', to: '거친 반박' },
              { id: 'h2', text: '"너희 나라는 원래 그래"', to: '거친 반박' }, { id: 'h3', text: '"말할 가치도 없어"', to: '거친 반박' }]),
              { prompt: '반박 문장 4장을 \'정중한 반박\'과 \'거친 반박\'으로 나누세요.', toolOptions: { limit: 4, cards: [{ id: 'p1', text: '"그 시기 막부 결정을 함께 볼까요?"' }, { id: 'h1', text: '"그런 것도 모르냐"' }, { id: 'p2', text: '"원문에는 이렇게 적혀 있어요"' }, { id: 'h2', text: '"너희 나라는 원래 그래"' }] }, target: { sort: { '정중한 반박': ['p1', 'p2'], '거친 반박': ['h1', 'h2'] } } }),
            IT(SB('문장을 \'있었던 사실\'과 \'사실에 대한 해석\'으로 나누세요.', ['있었던 사실', '사실에 대한 해석'], [
              { id: 'f1', text: '1696년 막부가 울릉도 도해를 금지했다', to: '있었던 사실' }, { id: 'f2', text: '「지리지」에 우산·무릉 두 섬이 적혔다', to: '있었던 사실' },
              { id: 'i1', text: '막부는 울릉도를 일본 땅으로 보지 않았다', to: '사실에 대한 해석' }, { id: 'i2', text: '조선은 두 섬을 함께 인식했다', to: '사실에 대한 해석' }]), null, null,
              { conclude: '주장마다 그 주장이 기대는 시기의 사료로 반박하고, 사실과 해석을 나누어 정중하게 말할 때 설득력이 커져요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '주장마다 반박 근거를 하나씩 써요.', columns: ['일본 정부 주장', '반박 근거'], cells: [['우산도는 독도가 아니다', ''], ['17세기에 영유권 확립', '']], answer: '「지리지」 맑은 날 보이는 두 섬·문헌비고 송도, 돗토리번 답변서·막부 도해 금지' }] },
      }),
      M('activity.dil', {
        title: '틀린 연도를 들었을 때', method: '토론 중 상대가 틀린 연도를 말할 때', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림길 1번에서 고르고 결과 장면을 본다.', base: '갈림길 2번을 끝까지 가 본 뒤 알맞은 근거 카드를 하나 이상 고른다.', challenge: '갈림길 2번을 간 뒤, 섞인 근거 카드 가운데 맞는 근거 2장을 정확히 고른다.' },
        activity: {
          title: '틀린 연도를 들었을 때', tool: 'dilemma',
          teacher: '"상대가 틀렸을 때, 내가 틀렸을 때, 누군가 미워하는 말을 할 때 — 토론자는 어떻게 해야 할까요?" 세 상황을 끝까지 가 본 뒤 결과를 견주게 한다. "상대가 틀리면 크게 웃어 줘야 이긴다"는 학생에게 "청중은 웃음과 근거 가운데 무엇을 기억할까요?"라고 되묻는다. 혐오 표현이 나오면 정부의 주장과 사람들을 구별한다는 원칙을 분명히 말한다.',
          task: '토론 중 생기는 세 상황에서 길을 골라 결과를 보고, 끝에서 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '상대가 틀린 연도를 말했어요. 한 번 골라 보세요.', base: '상대가 틀린 연도를 말했어요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '상대가 틀린 연도를 말했어요. 두 번 골라 끝까지 가고 맞는 근거 2장을 고르세요.' },
              '상대의 틀린 연도', D1, [['fix', 'more']], DR1, ['r1', 'r2'], { reasons: [{ id: 'r5', text: '틀린 사람을 기억해 두었다가 놀린다' }], ok: ['r1', 'r2'] }),
            DIL({ easy: '내 연도가 틀렸다는 지적을 받았어요. 한 번 골라 보세요.', base: '내 연도가 틀렸다는 지적을 받았어요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '내 연도가 틀렸다는 지적을 받았어요. 두 번 골라 끝까지 가고 맞는 근거 2장을 고르세요.' },
              '내가 틀렸을 때', D2, [['admit', 'go']], DR2, ['r1', 'r2'], { reasons: [{ id: 'r5', text: '지적한 사람에게 화를 낸다' }], ok: ['r1', 'r2'] }),
            DIL({ easy: '누군가 미워하는 말을 외쳤어요. 한 번 골라 보세요.', base: '누군가 미워하는 말을 외쳤어요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '누군가 미워하는 말을 외쳤어요. 두 번 골라 끝까지 가고 맞는 근거 2장을 고르세요.' },
              '토론장의 혐오 표현', D3, [['sep', 'calm']], DR3, ['r1', 'r2'], { reasons: [{ id: 'r5', text: '못 들은 척하면 저절로 사라진다' }], ok: ['r1', 'r2'] },
              { conclude: '토론의 힘은 정확한 근거와 존중하는 태도에서 나와요. 틀린 것은 근거로 바로잡고, 미워하는 말에는 동참하지 않아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '토론에서 내 연도가 틀렸다는 지적을 받았을 때 알맞은 행동은?', options: ['끝까지 우긴다', '인정하고 바로잡은 뒤 이어 간다', '발표를 그만둔다'], answer: '인정하고 바로잡은 뒤 이어 간다' }] },
      }),
      M('activity.plan', {
        title: '1분 발표 짜기', method: '1분 발표 구성 짜기', tool: 'story', minutes: 16,
        levels: { easy: '발표 카드 3장(주장→근거→마무리)을 차례로 놓고, 놓으면 바로 맞는지 알려 준다.', base: '발표 카드 4장(주장→근거→출처→마무리)을 차례로 놓는다.', challenge: '빈칸 칸에 알맞은 문장 카드를 넣어 내 발표 문장을 완성한다(함정 카드 포함).' },
        activity: {
          title: '1분 발표 짜기', tool: 'story',
          teacher: '"1분 안에 설득하려면 무엇을 먼저 말해야 할까요?" 발표 카드를 차례로 놓은 뒤, 출처 카드를 근거 바로 뒤에 두는 까닭을 묻는다. 마무리 카드를 맨 앞에 두는 학생에게 "결론부터 말하는 것과 근거 없이 끝내는 것은 어떻게 다를까요?"라고 되묻는다. 두 사료(「지리지」·안용복 사건)로 각각 짠 뒤 어느 쪽이 더 설득력 있는지 견주게 한다.',
          task: '주장→근거→출처→마무리 차례로 1분 발표 카드를 놓고, 빈칸에 알맞은 문장을 넣어 내 발표를 완성해요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            IT(OB('「지리지」로 짠 발표 카드를 차례대로 놓으세요.', [{ id: 'a1', text: '주장: 우산도는 독도다' }, { id: 'a2', text: '근거: 맑은 날 보이는 두 섬' }, { id: 'a3', text: '출처: 『세종실록』 「지리지」(1454)' }, { id: 'a4', text: '마무리: 조선은 두 섬을 함께 알았다' }], { title: '1분 발표 ①' }),
              OB('「지리지」로 짠 발표 카드 세 장을 차례대로 놓으세요.', [{ id: 'a1', text: '주장: 우산도는 독도다' }, { id: 'a2', text: '근거: 맑은 날 보이는 두 섬' }, { id: 'a4', text: '마무리: 조선은 두 섬을 함께 알았다' }], { title: '1분 발표 ①' })),
            IT(OB('안용복 사건으로 짠 발표 카드를 차례대로 놓으세요.', [{ id: 'b1', text: '주장: 막부도 울릉도를 일본 땅으로 안 봤다' }, { id: 'b2', text: '근거: 일본인의 울릉도 도해 금지' }, { id: 'b3', text: '출처: 1696년 막부 결정' }, { id: 'b4', text: '마무리: 두 나라 문서를 함께 보자' }], { title: '1분 발표 ②' }),
              OB('안용복 사건으로 짠 발표 카드 세 장을 차례대로 놓으세요.', [{ id: 'b1', text: '주장: 막부도 울릉도를 일본 땅으로 안 봤다' }, { id: 'b2', text: '근거: 일본인의 울릉도 도해 금지' }, { id: 'b4', text: '마무리: 두 나라 문서를 함께 보자' }], { title: '1분 발표 ②' })),
            IT({ prompt: '빈칸에 알맞은 문장 카드를 넣어 발표를 완성하세요.', toolOptions: { mode: 'fill', title: '내 1분 발표', slots: [{ id: 'f1', label: '주장: ___' }, { id: 'f2', label: '근거: ___' }, { id: 'f3', label: '출처: ___' }], cards: [{ id: 'w1', text: '독도는 우리 기록에 꾸준히 나온다' }, { id: 'w2', text: '여러 세기에 걸쳐 우산도를 적었다' }, { id: 'w3', text: '「지리지」·『만기요람』' }] }, target: { fill: { f1: 'w1', f2: 'w2', f3: 'w3' } } },
              null,
              { prompt: '빈칸에 알맞은 문장 카드를 넣어 발표를 완성하세요(함정 카드 포함).', toolOptions: { cards: [{ id: 'w1', text: '독도는 우리 기록에 꾸준히 나온다' }, { id: 'w2', text: '여러 세기에 걸쳐 우산도를 적었다' }, { id: 'w3', text: '「지리지」·『만기요람』' }, { id: 'y1', text: '인터넷에서 많이 봤다' }, { id: 'y2', text: '상대 나라는 늘 거짓말한다' }] } },
              { conclude: '설득하는 1분 발표는 주장, 근거, 출처, 마무리가 차례로 이어져요. 출처는 근거 바로 뒤에 둬요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 1분 발표를 칸마다 한 줄씩 써요.', columns: ['칸', '내 문장'], cells: [['주장', ''], ['근거', ''], ['출처', ''], ['마무리', '']], answer: '(예) 우산도는 독도다 / 맑은 날 보이는 두 섬 / 「지리지」(1454) / 조선은 두 섬을 함께 알았다' }] },
      }),
      M('activity.draft', {
        title: '사료 두 개로 1분 원고', method: '발표 원고 쓰기', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '빈칸 원고 틀을 채워 문단마다 쓰고 기준 2개로 점검한다.', base: '사료 두 개를 넣어 다섯 문장 안팎의 1분 원고를 세 문단에 나눠 쓰고 기준(근거·출처·정중함)으로 점검한다.', challenge: '마지막 문단에 예상 반론에 답하는 한 줄을 더 쓰고 기준 4개로 점검한다.' },
        activity: {
          title: '사료 두 개로 1분 원고', tool: 'rubric-writing',
          teacher: '"원고를 소리 내어 읽으면 1분이 될까요?" 문단마다 쓰고 나면 짝에게 작게 읽어 시간을 재 보게 한다. 근거 없이 "당연히 우리 땅"으로 끝내는 학생에게 "듣는 사람이 \'왜요?\'라고 물으면 무엇을 보여 줄까요?"라고 되묻는다. 상대 나라를 깎아내리는 표현은 원고에서 빼고, 정부 주장의 문제점을 사료로 짚게 한다.',
          task: '사료 두 개를 넣은 1분 발표 원고를 문단마다 쓰고, 기준표(근거·출처·정중함)로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RW('첫 문단: 주장과 첫째 사료 근거를 두 문장으로 쓰세요.',
              { topic: '첫 문단 — 내 주장 한 문장과 첫째 사료 근거 한 문장을 쓰세요(사료 이름과 연도를 넣어요).', minChars: 30, maxChars: 200, minSentences: 2, maxSentences: 2, title: '원고 ① 주장과 근거', lines: 3 },
              ['주장을 첫 문장에 썼다', '사료 이름과 연도를 넣었다', '정중한 표현을 썼다'],
              { prompt: '첫 문단: 틀을 채워 주장과 근거를 쓰세요.', toolOptions: { starter: '나는 ___라고 생각한다. ___년 ___에 ___라고 적혀 있기 때문이다.' }, crit: ['주장을 첫 문장에 썼다', '사료 이름과 연도를 넣었다'] }),
            RW('둘째 문단: 둘째 사료 근거와 출처를 두 문장으로 쓰세요.',
              { topic: '둘째 문단 — 둘째 사료가 무엇을 보여 주는지와 그 출처를 두 문장으로 쓰세요.', minChars: 30, maxChars: 200, minSentences: 2, maxSentences: 2, title: '원고 ② 둘째 근거', lines: 3 },
              ['둘째 사료를 넣었다', '출처를 밝혔다', '첫째 근거와 이어지게 썼다'],
              { prompt: '둘째 문단: 틀을 채워 둘째 근거를 쓰세요.', toolOptions: { starter: '또 ___도 ___을 보여 준다. 이 내용은 ___에서 확인할 수 있다.' }, crit: ['둘째 사료를 넣었다', '출처를 밝혔다'] }),
            RW('셋째 문단: 원고를 마무리하는 문장을 쓰세요.',
              { topic: '셋째 문단 — 두 근거를 묶어 마무리하는 문장 한두 개를 쓰세요. 상대 나라를 깎아내리는 말은 쓰지 않아요.', minChars: 20, maxChars: 160, minSentences: 1, maxSentences: 2, title: '원고 ③ 마무리', lines: 3 },
              ['두 근거를 묶어 마무리했다', '깎아내리는 표현이 없다', '1분 안에 읽을 수 있다'],
              { prompt: '셋째 문단: 틀을 채워 마무리하세요.', toolOptions: { starter: '이처럼 두 사료는 ___을 보여 준다.' }, crit: ['두 근거를 묶어 마무리했다', '깎아내리는 표현이 없다'] },
              { prompt: '셋째 문단: 마무리에 예상 반론에 답하는 한 줄을 더 넣어 쓰세요.', toolOptions: { maxSentences: 3, starter: '"___"라는 반론에는 ___라고 답할 수 있다.' }, crit: ['두 근거를 묶어 마무리했다', '깎아내리는 표현이 없다', '1분 안에 읽을 수 있다', '예상 반론에 근거로 답했다'] },
              { conclude: '좋은 원고는 주장 뒤에 사료와 출처를 붙이고, 상대를 깎아내리지 않고 근거로 마무리해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내 원고에 넣은 사료 두 개와 각각의 출처를 써요.' }] },
      }),
      M('wrap.talk', {
        title: '모둠 1분 발표와 점검', method: '모둠 1분 발표', tool: 'timer', minutes: 7, delivery: 'guided',
        levels: { easy: '모둠마다 30초 발표하고, 듣는 모둠이 점검 칸을 표시한다.', base: '모둠마다 1분 발표하고, 듣는 모둠이 기준 칸 3개를 표시한다.', challenge: '발표 뒤 질문 하나를 받아 사료로 답한다(교사 진행).' },
        wrap: {
          teacher: '"한 모둠씩 1분 발표, 듣는 모둠은 기준표 칸에 표시해 주세요." 교사가 사회를 보며 타이머를 발표 1분·질문 30초로 맞추고 모둠 차례를 부른다. 발표에서 깎아내리는 말이 나오면 끝난 뒤 그 문장을 정중한 반박으로 바꿔 말해 보게 한다. 마지막에 가장 근거가 단단했던 발표를 학생들이 근거를 들어 고르게 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'timer', options: { title: '모둠 1분 발표', labels: ['발표', '질문'], plan: { work: 30, rest: 10, rounds: 2 }, safety: ['근거 사료를 들었다', '출처를 밝혔다', '정중하게 말했다'] },
              prompt: '모둠 4개가 발표 60초·질문 30초를 하도록 맞추고, 들은 발표에서 지킨 칸을 표시해요.', target: { plan: { work: 60, rest: 30, rounds: 4 }, safety: true }, difficulty: 0.15 },
            { prompt: '모둠 4개가 발표 30초·질문 10초를 하도록 맞추고, 지킨 칸 두 개를 표시해요.', toolOptions: { safety: ['근거 사료를 들었다', '정중하게 말했다'] }, target: { plan: { work: 30, rest: 10, rounds: 4 }, safety: true } }),
            { type: 'choice', prompt: '오늘 들은 발표 가운데 가장 설득력 있는 발표를 고를 때 기준으로 알맞은 것은?', options: ['목소리가 가장 컸던 발표', '사료와 출처가 분명했던 발표', '상대를 가장 세게 비판한 발표'], answer: 1, difficulty: 0.15, explain: '설득력은 근거와 출처에서 나와요.' },
          ],
        },
        worksheet: {
          title: '모둠 발표 점검',
          items: [
            { type: 'check', prompt: '들은 발표에서 지킨 것에 표시해요.', options: ['근거 사료를 들었다', '출처를 밝혔다', '정중하게 말했다'] },
            { type: 'short', prompt: '가장 설득력 있었던 발표와 그 까닭을 한 줄로 써요.' },
          ],
        },
      }),
      M('wrap.sum', {
        title: '7학년 독도 공부 생각그물', method: '7학년 독도 사료 생각그물', tool: 'mindmap', minutes: 7,
        levels: { easy: '가지 2개(사료·이름)에 카드를 나눈다.', base: '가지 3개(사료·이름·주장과 근거)에 카드를 나눈다.', challenge: '함정 카드가 섞인 판에서 나누고, 가지마다 출처 하나를 활동지에 쓴다.' },
        wrap: {
          teacher: '"한 해 동안 배운 독도 공부를 세 가지 가지로 정리하면 무엇이 남을까요?" 가지를 다 채운 뒤 가지마다 가장 중요한 카드 하나를 골라 까닭을 말하게 한다. 함정 카드를 가지에 붙인 학생에게 "그 카드는 확인할 수 있는 근거였나요?"라고 되묻는다. 8학년에는 근대 사료(태정관 지령·칙령 제41호)로 이어진다고 예고한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '7학년 독도 공부', slots: ['사료', '이름', '주장과 근거'], cards: [
              { id: 's1', text: '『세종실록』 「지리지」(1454)' }, { id: 's2', text: '1696년 막부의 도해 금지' }, { id: 'n1', text: '우산도→석도→독도' }, { id: 'n2', text: '옛 일본 이름: 울릉도=다케시마' },
              { id: 'c1', text: '우산도≠독도 주장 ↔ 맑은 날 보이는 섬' }, { id: 'c2', text: '17세기 확립 주장 ↔ 돗토리번 답변' }] },
              prompt: '7학년 독도 공부 카드를 세 가지에 나눠 붙여요.', target: { sort: { 사료: ['s1', 's2'], 이름: ['n1', 'n2'], '주장과 근거': ['c1', 'c2'] } }, difficulty: 0.2 },
            { prompt: '카드를 두 가지(사료·이름)에 나눠 붙여요.', toolOptions: { slots: ['사료', '이름'], cards: [{ id: 's1', text: '『세종실록』 「지리지」(1454)' }, { id: 's2', text: '1696년 막부의 도해 금지' }, { id: 'n1', text: '우산도→석도→독도' }, { id: 'n2', text: '옛 일본 이름: 울릉도=다케시마' }] }, target: { sort: { 사료: ['s1', 's2'], 이름: ['n1', 'n2'] } } },
            { toolOptions: { cards: [
              { id: 's1', text: '『세종실록』 「지리지」(1454)' }, { id: 's2', text: '1696년 막부의 도해 금지' }, { id: 'n1', text: '우산도→석도→독도' }, { id: 'n2', text: '옛 일본 이름: 울릉도=다케시마' },
              { id: 'c1', text: '우산도≠독도 주장 ↔ 맑은 날 보이는 섬' }, { id: 'c2', text: '17세기 확립 주장 ↔ 돗토리번 답변' }, { id: 't1', text: '출처 없는 블로그 연표' }, { id: 't2', text: '"우리 땅이니까" 구호' }] } }),
            { type: 'choice', prompt: '7학년에 배운 사료 읽기의 첫걸음으로 가장 알맞은 것은?', options: ['많이 퍼진 글부터 믿는다', '누가·언제·왜 만들었는지 따진다', '상대 주장은 읽지 않는다'], answer: 1, difficulty: 0.15, explain: '사료는 만든 사람·때·목적을 따져 읽어요.' },
            { type: 'short', prompt: '한 해 독도 공부에서 가장 기억에 남는 사료 하나와 그 까닭을 써요.' },
          ],
        },
        worksheet: {
          title: '7학년 독도 공부 정리',
          items: [
            { type: 'table', prompt: '가지마다 기억할 것과 출처를 하나씩 써요.', columns: ['가지', '기억할 것', '출처'], cells: [['사료', '', ''], ['이름', '', ''], ['주장과 근거', '', '']], answer: '(예) 「지리지」 맑은 날 보이는 두 섬 — 『세종실록』, 우산도→석도→독도 — 칙령·보고서, 돗토리번 답변 — 1695년' },
            { type: 'short', prompt: '8학년 독도 공부에서 더 알고 싶은 것 하나를 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 8학년 · 태정관 지령과 일본 옛 지도 (dokdo.m.g8-dajo) ====
  {
    const M = MK('g8-dajo', [8]);
    const AX = { axis: ['옛날', '오늘날'] };
    const COLOR = { grid: [6, 4], title: '옛 지도 색으로 읽기(단순화한 칸 지도)', readOnly: true, places: [
      { name: '울릉도', icon: 'island', at: [2, 1] }, { name: '독도', icon: 'island', at: [3, 1] }],
      regions: [{ name: '조선 땅', cells: [[0, 0], [0, 1], [0, 2], [0, 3], [1, 2], [1, 3]], color: 'buttercup' }, { name: '울릉도·독도', cells: [[2, 1], [3, 1]], color: 'buttercup' }, { name: '일본 땅', cells: [[5, 1], [5, 2], [5, 3], [4, 3]], color: 'mint' }] };
    // 옛 지도 세 장에 그려진 울릉도·독도 수(그림에 두 섬이 함께 있으면 2) — 근거 자료(g7·g8 단원)의 지도 설명에서 셈
    const MAPS = [['팔도총도(1531, 조선)', 2], ['삼국접양지도(1785, 일본)', 2], ['기죽도약도(1877, 일본)', 2]];

    ALL.push(
      M('intro.q', {
        title: '상대 나라 기록이 근거가 될까', method: '일본 문서가 왜 근거가 될까 질문', tool: 'wordcards', minutes: 6,
        levels: { easy: '까닭 카드 2장 가운데 알맞은 까닭을 고르는 시연을 본다.', base: '까닭 카드 3장(함정 1장) 가운데 알맞은 까닭 2장을 고르는 시연을 본다.', challenge: '고른 까닭을 내 말로 바꿔 한 줄 말한다.' },
        intro: {
          teacher: '"상대 나라 정부가 스스로 \'우리와 관계없는 섬\'이라고 적은 문서가 있다면 얼마나 힘 있는 근거일까요?" 대답을 듣고 시연 단추로 까닭 카드가 담기는 모습을 보인다. "상대 문서는 믿을 수 없다"는 말에는 "자기에게 불리한 판단을 스스로 남겼다면 오히려 더 믿을 만하지 않을까요?"라고 되묻는다. 오늘은 1877년 태정관 지령과 일본 옛 지도를 읽는다고 밝힌다.',
          student: '상대 나라 정부의 기록이 우리 근거가 될 수 있는 까닭을 골라요. 내가 고른 까닭을 짝에게 내 말로 말해요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '근거가 되는 까닭', cards: [{ id: 'w1', text: '자기에게 불리한 판단을 스스로 남겼다' }, { id: 'w2', text: '그 나라 정부의 공식 문서다' }, { id: 'w3', text: '상대 문서는 무조건 틀리다' }], shuffle: false }, sequence: [{ pick: ['w1', 'w2'] }] },
          art: { draw: 'a paper-cut official Meiji-era Japanese document scroll with a red seal, placed next to a small sketch map of two islands', banner: '상대 정부의 기록이 말해 주는 것', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      M('intro.color', {
        title: '옛 지도의 색 읽기', method: '옛 지도 색으로 읽기', tool: 'map', minutes: 6,
        levels: { easy: '두 색(조선 땅·일본 땅) 칸 지도에서 울릉도·독도와 같은 색을 고르는 시연을 본다.', base: '세 색(그 밖의 땅 더함) 칸 지도에서 같은 색을 고르는 시연을 본다.', challenge: '같은 색으로 칠한 뜻을 한 줄로 말한다.' },
        intro: {
          teacher: '"지도에서 두 곳을 같은 색으로 칠했다면 무엇을 뜻할까요?" 1785년 일본의 하야시 시헤이가 만든 「삼국접양지도」가 울릉도와 독도를 조선과 같은 색으로 칠하고 "조선의 것"이라고 적었다는 점을 동북아역사재단 자료대로 소개하고, 단순화한 칸 지도에서 시연 단추로 같은 색을 고르는 모습을 보인다. "그럼 이걸로 끝"이라는 반응에는 "누가 만든 지도인지, 정확한지도 함께 볼까요?"라고 되묻는다. 이 칸 지도는 원본 지도가 아니라 색의 뜻을 보이려고 단순하게 그린 것이라고 밝힌다.',
          student: '단순화한 칸 지도에서 울릉도·독도 칸이 어느 땅과 같은 색인지 보고, 같은 색이 무엇을 뜻하는지 짝과 말해요.',
          demo: { tool: 'map', options: Object.assign({}, COLOR, { ask: { q: '울릉도·독도 칸과 같은 색으로 칠한 땅은?', choices: ['조선 땅', '일본 땅'] } }), sequence: [{ pick: 0 }] },
          art: { draw: 'a paper-cut old East Asian map with soft yellow coloring over the Korean peninsula and two small islands, and green coloring over the Japanese islands', banner: '같은 색으로 칠한 뜻은?', extra: [{ motif: 'wave', y: 230 }] },
        },
        notes: '칸 지도는 「삼국접양지도」를 옮긴 것이 아니라 색의 뜻을 보이려는 단순화 그림이다. 원본 이미지는 동북아역사재단 독도체험관 자료로 보인다.',
      }),
      M('activity.phrase', {
        title: '지령 구절 낱말 풀기', method: '지령 구절 뜻 풀기', tool: 'emotion', minutes: 16,
        levels: { easy: '낱말 2개와 뜻을 잇고, 놓으면 바로 맞는지 알려 준다.', base: '낱말 3개와 뜻을 잇고, 빈칸 문장과 현대어 옮김을 고른다.', challenge: '낱말 4개와 뜻을 잇고(함정 카드 포함), 활동지에 현대어 문장을 직접 쓴다.' },
        activity: {
          title: '지령 구절 낱말 풀기', tool: 'emotion',
          teacher: '"\'죽도 외 일도는 일본과 관계없다\'에서 \'일도\'는 어느 섬일까요?" 낱말과 뜻을 이은 뒤 구절 전체를 오늘날 말로 바꿔 읽게 한다. "죽도는 오늘날 일본이 독도를 부르는 이름이니 죽도=독도"라고 잇는 학생에게 "1877년 일본은 울릉도를 무엇이라 불렀지요?"라고 되묻는다. 태정관은 메이지 정부의 최고 행정기관이라 이 판단이 정부 차원의 것이었다는 점을 짚는다.',
          task: '1877년 태정관 지령 "죽도 외 일도는 일본과 관계없음" 구절의 낱말을 뜻과 잇고, 구절을 오늘날 말로 옮겨요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            IT(MB('지령 구절의 낱말과 그 뜻을 이어 보세요. 맞지 않는 카드는 남겨요.', [['죽도(1877년 일본 이름)', '울릉도'], ['일도(한 섬)', '독도'], ['관계없음', '일본 땅이 아님']], ['오키섬']),
              MB('지령 구절의 낱말 두 개와 뜻을 이어 보세요.', [['죽도(1877년 일본 이름)', '울릉도'], ['일도(한 섬)', '독도']], []),
              MB('지령 구절의 낱말 네 개와 뜻을 이어 보세요(함정 카드 포함).', [['죽도(1877년 일본 이름)', '울릉도'], ['일도(한 섬)', '독도'], ['관계없음', '일본 땅이 아님'], ['태정관', '메이지 정부 최고 행정기관']], ['오키섬', '시마네현 관청'])),
            IT({ prompt: '빈칸에 알맞은 낱말 카드를 넣어 구절을 완성하세요.', toolOptions: { mode: 'fill', slots: [{ id: 'f1', label: '___ 외 일도는' }, { id: 'f2', label: '일본과 ___' }], cards: [{ id: 'w1', text: '죽도' }, { id: 'w2', text: '관계없음' }, { id: 'y1', text: '송도 편입' }] }, target: { fill: { f1: 'w1', f2: 'w2' } } }),
            IT({ prompt: '지령 구절을 오늘날 말로 바르게 옮긴 문장을 고르세요.', toolOptions: { mode: 'branch', situation: '1877년 태정관: "죽도 외 일도는 일본과 관계없다."', who: '나', ask: '오늘날 말로 옮기면?', motif: 'leaf', choices: [
              { id: 'ok', text: '울릉도와 그 밖의 한 섬(독도)은 일본 땅이 아니다', result: '맞아요. 일본 정부가 두 섬을 일본과 관계없다고 판단했어요.', mood: '뿌듯함' },
              { id: 'one', text: '울릉도만 일본 땅이 아니다', result: '\'외 일도\'가 빠졌어요.', mood: '걱정', why: '\'죽도 외 일도\'는 울릉도와 한 섬을 함께 말해요.' },
              { id: 'jp', text: '두 섬 모두 일본 땅이다', result: '\'관계없음\'의 뜻과 반대예요.', mood: '걱정', why: '\'관계없음\'은 일본 땅이 아니라는 뜻이에요.' }] }, target: { choice: 'ok' } },
              null, null, { conclude: '태정관 지령은 일본 정부의 최고 행정기관이 울릉도와 독도를 일본과 관계없는 섬으로 판단한 문서예요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"죽도 외 일도는 일본과 관계없음"을 오늘날 말 한 문장으로 옮겨 써요.' }] },
      }),
      M('activity.comp', {
        title: '두 나라 옛 지도 견주기', method: '조선 지도·일본 지도 견주기 표', tool: 'chart', minutes: 16,
        levels: { easy: '지도 2장의 표 빈칸을 막대에서 읽어 채우고 값이 보인다.', base: '지도 3장의 표 빈칸을 막대에서 읽어 채우고 만든 쪽과 공통점을 읽는다(근거 자료에서 확인한 지도가 3장이라 계획의 4장 대신 3장).', challenge: '공통점과 지도마다 한계를 함께 고르고, 활동지에 공통점 문장을 쓴다.' },
        activity: {
          title: '두 나라 옛 지도 견주기', tool: 'chart',
          teacher: '"조선이 만든 지도와 일본이 만든 지도에 울릉도와 독도가 함께 그려져 있을까요?" 팔도총도·삼국접양지도·기죽도약도를 표로 정리하고, 그래프 값은 지도에 두 섬이 함께 그려졌는지(두 섬=2)를 센 것이라고 밝힌다. "일본 지도는 증거가 될 수 없다"는 학생에게 "일본 쪽 지도가 두 섬을 조선과 같은 색으로 칠했다면 무엇을 뜻할까요?"라고 되묻는다. 지도마다 만든 사람과 한계(팔도총도의 위치 등)도 함께 짚는다.',
          task: '두 나라 옛 지도에 울릉도·독도가 함께 그려졌는지 표를 채우고, 만든 쪽과 공통점을 읽어요.',
          levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            IT({ prompt: '막대를 읽어 지도마다 그려진 섬(울릉도·독도) 수를 표에 채우세요.', toolOptions: CR('옛 지도에 그려진 울릉도·독도 수', '섬', MAPS, { xLabel: '지도', yLabel: '그려진 섬', max: 2, scale: 1, showTable: true, tableBlanks: [0, 1, 2] }), target: { table: true } },
              { prompt: '막대를 읽어 지도 두 장의 섬 수를 표에 채우세요.', toolOptions: { data: [MAPS[0], MAPS[1]], tableBlanks: [0, 1] } }),
            IT({ prompt: '세 지도 가운데 일본에서 만든 지도는 몇 장인지 표에서 세어 쓰세요.', toolOptions: CR('옛 지도에 그려진 울릉도·독도 수', '섬', MAPS, { xLabel: '지도', yLabel: '그려진 섬', max: 2, scale: 1, showTable: true, question: '일본에서 만든 지도는 몇 장?' }), target: { value: 2 } }),
            IT({ prompt: '세 지도의 공통점으로 알맞은 것을 고르세요.', toolOptions: CR('옛 지도에 그려진 울릉도·독도 수', '섬', MAPS, { xLabel: '지도', yLabel: '그려진 섬', max: 2, scale: 1, question: '세 지도의 공통점은?', choices: ['울릉도와 독도를 함께 그렸다', '모두 조선에서 만들었다', '모두 거리를 정확히 쟀다'] }), target: { pick: 0 } },
              null,
              { prompt: '지도를 근거로 쓸 때 함께 말할 한계로 알맞은 것을 고르세요.', toolOptions: { question: '함께 밝힐 한계는?', choices: ['팔도총도는 우산도 위치가 실제와 다르다', '일본 지도는 모두 거짓이다', '한계는 말하지 않는 것이 좋다'] }, target: { pick: 0 } },
              { conclude: '조선과 일본의 옛 지도가 모두 울릉도와 독도를 함께 그렸어요. 지도마다 만든 사람과 한계를 함께 밝히면 근거가 단단해져요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '세 지도를 정리해요.', columns: ['지도', '만든 쪽·해', '두 섬이 함께 그려졌나'], cells: [['팔도총도', '', ''], ['삼국접양지도', '', ''], ['기죽도약도', '', '']], answer: '조선 1531·예, 일본 1785·예(조선과 같은 색), 일본 1877·예(지령 부속)' }] },
      }),
      M('activity.line', {
        title: '일본 쪽 판단 흐름', method: '1696~1877 일본 쪽 판단 흐름', tool: 'timeline', minutes: 16,
        levels: { easy: '카드 2장(도해 금지·태정관 지령)을 차례로 놓고, 놓으면 바로 맞는지 알려 준다.', base: '카드 3장(도해 금지·삼국접양지도·태정관 지령)을 차례로 놓고, 지령이 나온 과정을 놓는다.', challenge: '연도 눈금마다 설명 카드를 붙인다(함정 카드 포함).' },
        activity: {
          title: '일본 쪽 판단 흐름', tool: 'timeline',
          teacher: '"1696년부터 1877년까지 일본 쪽 문서와 지도는 울릉도·독도를 어떻게 다뤘을까요?" 세 카드를 시간 띠에 놓은 뒤 시마네현 질의→내무성 조사→태정관 판단의 과정도 차례로 놓게 한다. 내무성 조사를 질의보다 앞에 두는 학생에게 "무엇이 조사를 시작하게 했을까요?"라고 되묻는다. 외교부 누리집은 내무성이 17세기 두 나라 교섭 기록을 조사한 뒤 태정관에 판단을 구했다고 설명한다는 점을 함께 읽는다.',
          task: '1696년부터 1877년까지 일본 쪽 판단을 보여 주는 문서와 지도를 시간 띠에 놓고, 태정관 지령이 나온 과정을 차례로 놓아요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            IT(OB('일본 쪽 판단을 보여 주는 문서·지도를 옛날부터 차례로 놓으세요.', [{ id: 'j1', text: '막부의 울릉도 도해 금지(1696)' }, { id: 'j2', text: '「삼국접양지도」(1785)' }, { id: 'j3', text: '태정관 지령(1877)' }], AX),
              OB('문서 두 개를 옛날부터 차례로 놓으세요.', [{ id: 'j1', text: '막부의 울릉도 도해 금지(1696)' }, { id: 'j3', text: '태정관 지령(1877)' }], AX)),
            IT(OB('태정관 지령이 나오기까지의 과정을 차례로 놓으세요.', [{ id: 'p1', text: '시마네현이 정부에 질의' }, { id: 'p2', text: '내무성이 옛 교섭 기록 조사' }, { id: 'p3', text: '태정관이 "관계없음" 지시' }], { axis: ['먼저', '나중'] }, [{ id: 'px', text: '조선에 섬을 넘겨 달라 요구' }])),
            IT(TM('연도 눈금에 알맞은 설명을 이어 보세요.', [['1696년', '일본인의 울릉도 도해 금지', 1696], ['1785년', '두 섬을 조선과 같은 색으로', 1785], ['1877년', '두 섬은 일본과 관계없음', 1877]], [], AX),
              null,
              TM('연도 눈금에 알맞은 설명을 이어 보세요(함정 카드 포함).', [['1696년', '일본인의 울릉도 도해 금지', 1696], ['1785년', '두 섬을 조선과 같은 색으로', 1785], ['1877년', '두 섬은 일본과 관계없음', 1877]], ['두 섬을 시마네현에 넣음', '두 섬에 마을을 세움'], AX),
              { conclude: '1696년 도해 금지부터 1877년 태정관 지령까지, 일본 쪽 문서와 지도도 울릉도·독도를 일본 땅으로 보지 않았어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '일본 쪽 판단의 흐름을 써요.', columns: ['연도', '문서·지도', '판단'], cells: [['1696', '', ''], ['1785', '', ''], ['1877', '', '']], answer: '도해 금지·울릉도 출입 금지, 삼국접양지도·조선과 같은 색, 태정관 지령·일본과 관계없음' }] },
      }),
      M('activity.why', {
        title: '지령이 보여 주는 것 쓰기', method: '일본 정부 인식이 보여 주는 것 쓰기', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '빈칸 틀을 채워 문단마다 쓰고 기준 2개로 점검한다.', base: '지령이 나온 과정·내용·보여 주는 것을 세 문단(문단마다 한 문장 이상)으로 쓰고 기준 3개로 점검한다.', challenge: '마지막 문단에 이 문서만으로 말할 수 없는 것(한계) 한 줄을 더 쓰고 기준 4개로 점검한다.' },
        activity: {
          title: '지령이 보여 주는 것 쓰기', tool: 'rubric-writing',
          teacher: '"태정관 지령이 보여 주는 것을 세 문장으로 줄이면 어떻게 될까요?" 과정·내용·의미 순서로 칠판에 칸을 나눠 두고 문단마다 쓰게 한다. "일본이 독도를 포기했다"고 쓰는 학생에게 "지령의 낱말은 \'포기\'였나요, \'관계없음\'이었나요?"라고 되묻는다. 원문의 낱말을 살려 쓰는 것이 지나친 해석을 막는다는 점을 짚는다.',
          task: '태정관 지령이 나온 과정, 내용, 보여 주는 것을 문단마다 쓰고 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RW('첫 문단: 태정관 지령이 나온 과정을 쓰세요.',
              { topic: '첫 문단 — 시마네현 질의부터 태정관 판단까지 지령이 나온 과정을 한두 문장으로 쓰세요.', minChars: 25, maxChars: 180, minSentences: 1, maxSentences: 2, title: '지령 ① 과정', lines: 3 },
              ['과정을 차례대로 썼다', '1877년을 썼다', '원문에 없는 말을 덧붙이지 않았다'],
              { prompt: '첫 문단: 틀을 채워 과정을 쓰세요.', toolOptions: { starter: '___이 정부에 묻자 ___이 조사했고, 1877년 ___이 판단을 내렸다.' }, crit: ['과정을 차례대로 썼다', '1877년을 썼다'] }),
            RW('둘째 문단: 지령의 내용을 쓰세요.',
              { topic: '둘째 문단 — "죽도 외 일도는 일본과 관계없음"의 내용을 낱말 뜻을 살려 한두 문장으로 쓰세요.', minChars: 20, maxChars: 160, minSentences: 1, maxSentences: 2, title: '지령 ② 내용', lines: 3 },
              ['죽도·일도가 가리키는 섬을 썼다', '\'관계없음\'의 뜻을 살렸다', '지나친 낱말(포기 등)을 쓰지 않았다'],
              { prompt: '둘째 문단: 틀을 채워 내용을 쓰세요.', toolOptions: { starter: '지령은 ___(울릉도)와 ___(독도)가 일본과 ___고 했다.' }, crit: ['죽도·일도가 가리키는 섬을 썼다', '\'관계없음\'의 뜻을 살렸다'] }),
            RW('셋째 문단: 지령이 보여 주는 것을 쓰세요.',
              { topic: '셋째 문단 — 이 지령이 일본 정부의 인식에 대해 무엇을 보여 주는지 한두 문장으로 쓰세요.', minChars: 20, maxChars: 160, minSentences: 1, maxSentences: 2, title: '지령 ③ 보여 주는 것', lines: 3 },
              ['일본 정부의 인식을 썼다', '왜 힘 있는 근거인지 썼다', '정중한 표현을 썼다'],
              { prompt: '셋째 문단: 틀을 채워 의미를 쓰세요.', toolOptions: { starter: '이 지령은 1877년 일본 정부가 ___라고 판단했음을 보여 준다.' }, crit: ['일본 정부의 인식을 썼다', '왜 힘 있는 근거인지 썼다'] },
              { prompt: '셋째 문단에 이어, 이 문서만으로는 말할 수 없는 것(한계)도 한 줄 쓰세요.', toolOptions: { maxSentences: 3, starter: '다만 이 지령 하나만으로는 ___까지 말할 수는 없다.' }, crit: ['일본 정부의 인식을 썼다', '왜 힘 있는 근거인지 썼다', '정중한 표현을 썼다', '이 문서의 한계를 한 줄 썼다'] },
              { conclude: '원문의 낱말을 살려 과정·내용·의미를 나눠 쓰면, 지령이 보여 주는 것을 지나치지 않게 정확히 전할 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '태정관 지령이 힘 있는 근거인 까닭을 한 문장으로 써요.' }] },
      }),
      M('wrap.quiz', {
        title: '연도·문서 짝 문답', method: '짝 문답 퀴즈', tool: 'timer', minutes: 7, delivery: 'guided',
        levels: { easy: '짝과 3문제씩 묻고 답하며 맞힌 수를 기록판에 적는다.', base: '짝과 5문제씩 묻고 답하며 맞힌 수를 적는다.', challenge: '답에 그 문서가 보여 주는 것까지 설명해야 맞힌 것으로 센다(교사 진행).' },
        wrap: {
          teacher: '"짝에게 1분 동안 연도와 문서 이름을 묻고, 바꿔서 1분 동안 답해 보세요." 칠판에 문제 예시(1877년 무슨 문서? 기죽도약도는 어느 문서에 딸린 지도?)를 적고 타이머를 묻기·답하기 1분씩 맞추게 한다. 맞힌 수가 적은 짝을 탓하지 않도록, 기록판은 다음 시간에 다시 재어 늘어난 수를 보는 용도라고 말한다. 헷갈린 문제는 끝나고 모두 함께 짚는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'timer', options: { title: '짝 문답 퀴즈', labels: ['묻기', '답하기'], plan: { work: 30, rest: 30, rounds: 1 }, unit: '문제', fields: [{ label: '내가 맞힌 수', unit: '문제', step: 1 }, { label: '짝이 맞힌 수', unit: '문제', step: 1 }] },
              prompt: '묻기 60초·답하기 60초로 맞추고, 퀴즈가 끝나면 맞힌 수를 기록판에 적어요.', target: { plan: { work: 60, rest: 60, rounds: 1 }, records: true }, difficulty: 0.15 }),
            { type: 'choice', prompt: '"죽도 외 일도는 일본과 관계없다"고 지시한 문서가 나온 해는?', options: ['1696년', '1785년', '1877년'], answer: 2, difficulty: 0.15, explain: '태정관 지령은 1877년이에요.' },
            { type: 'choice', prompt: '울릉도와 독도를 조선과 같은 색으로 칠한 일본 지도는?', options: ['기죽도약도', '삼국접양지도', '팔도총도'], answer: 1, difficulty: 0.2, explain: '1785년 하야시 시헤이의 「삼국접양지도」예요.' },
          ],
        },
        worksheet: {
          title: '짝 문답 퀴즈 기록',
          items: [
            { type: 'table', prompt: '퀴즈 결과를 적어요.', columns: ['누구', '맞힌 수'], cells: [['나', ''], ['짝', '']], answer: '(학생마다 다름)' },
            { type: 'short', prompt: '가장 헷갈렸던 문제와 바른 답을 써요.' },
          ],
        },
      }),
      M('wrap.sum', {
        title: '말할 수 있는 문장 고르기', method: '근거 한 줄 고르기', tool: 'sortboard', minutes: 7,
        levels: { easy: '문장 카드 4장을 \'말할 수 있다·말할 수 없다\'에 나누고, 놓으면 바로 알려 준다.', base: '문장 카드 6장을 나눈다.', challenge: '나눈 뒤 \'말할 수 없다\' 카드 하나를 말할 수 있게 고쳐 쓴다.' },
        wrap: {
          teacher: '"오늘 본 사료로 말할 수 있는 것과 말할 수 없는 것을 가를 수 있나요?" 카드를 나눈 뒤 \'말할 수 없다\' 카드마다 무엇이 지나쳤는지 한 낱말로 말하게 한다. "일본 지도가 있으니 일본도 다 인정했다"를 \'말할 수 있다\'에 넣은 학생에게 "그 지도는 누가 만들었고, 정부 문서였나요?"라고 되묻는다.',
          exitTicket: [
            IT(EX('sortboard', SB('오늘 사료로 \'말할 수 있다\'와 \'말할 수 없다\'로 나눠요.', ['말할 수 있다', '말할 수 없다'], [
              { id: 'y1', text: '1877년 일본 정부는 두 섬을 관계없다 했다', to: '말할 수 있다' }, { id: 'y2', text: '기죽도약도에 울릉도·독도가 함께 있다', to: '말할 수 있다' },
              { id: 'y3', text: '삼국접양지도는 두 섬을 조선 색으로 칠했다', to: '말할 수 있다' }, { id: 'n1', text: '삼국접양지도는 일본 정부 공식 지도다', to: '말할 수 없다' },
              { id: 'n2', text: '지령에 독도 주민 수가 적혀 있다', to: '말할 수 없다' }, { id: 'n3', text: '이 사료 하나로 모든 쟁점이 끝난다', to: '말할 수 없다' }])),
            LV(SB('문장 카드 4장을 두 바구니에 나눠요.', ['말할 수 있다', '말할 수 없다'], [
              { id: 'y1', text: '1877년 일본 정부는 두 섬을 관계없다 했다', to: '말할 수 있다' }, { id: 'y2', text: '기죽도약도에 울릉도·독도가 함께 있다', to: '말할 수 있다' },
              { id: 'n1', text: '삼국접양지도는 일본 정부 공식 지도다', to: '말할 수 없다' }, { id: 'n2', text: '지령에 독도 주민 수가 적혀 있다', to: '말할 수 없다' }]))),
            { type: 'choice', prompt: '태정관 지령이 독도의 근거로 힘 있는 까닭으로 가장 알맞은 것은?', options: ['오래된 문서라서', '일본 정부가 스스로 두 섬을 일본과 관계없다고 판단한 문서라서', '글씨가 또렷해서'], answer: 1, difficulty: 0.2, explain: '상대 정부가 자기에게 불리한 판단을 스스로 남긴 문서예요.' },
            { type: 'short', prompt: '\'말할 수 없다\' 카드 하나를 골라 말할 수 있는 문장으로 고쳐 써요.' },
          ],
        },
        worksheet: {
          title: '오늘 사료로 말할 수 있는 것',
          items: [
            { type: 'short', prompt: '오늘 사료로 말할 수 있는 문장 하나를 출처와 함께 써요.' },
            { type: 'choice', prompt: '「삼국접양지도」를 만든 사람은?', options: ['조선 정부', '하야시 시헤이', '태정관'], answer: '하야시 시헤이' },
          ],
        },
      }),
    );
  }

  // ==== 8학년 · 칙령 제41호와 석도 (dokdo.m.g8-chik) ====
  {
    const M = MK('g8-chik', [8]);
    const AREA = { grid: [7, 4], title: '울도군 관할(어림 칸 지도)', places: [
      { name: '울릉도', icon: 'island', at: [1, 1] }, { name: '죽도(댓섬)', icon: 'island', at: [2, 1] }, { name: '독도', icon: 'island', at: [5, 1] }, { name: '오키섬', icon: 'island', at: [6, 3] }],
      regions: LAND([[0, 3]]) };
    const AREA_EASY = { regions: [{ name: '한반도', cells: [[0, 3]], color: 'cream' }, { name: '울도군 관할', cells: [[1, 1], [2, 1], [5, 1]], color: 'buttercup' }] };
    const SC = { text: '토론 상대가 "칙령의 석도가 독도라는 증거는 없다. 다른 섬일 것"이라고 말한다.', ask: '어떻게 답할까?', motif: 'cloud', choices: [
      { id: 'angry', text: '"억지 부리지 마세요"라고 말한다', result: '상대가 마음을 닫고 근거를 들으려 하지 않는다.', impact: [{ who: '상대', text: '대화를 피한다', tone: -1 }], why: '감정 대신 근거를 보여 줘요.', ending: '대화가 막혔어요.' },
      { id: 'name', text: '돌섬·독섬 이름 풀이로 답한다', result: '주민들이 바위섬을 돌섬·독섬이라 불렀고, 뜻을 적으면 석도, 소리를 적으면 독도라는 설명을 보여 준다.', impact: [{ who: '상대', text: '이름의 이어짐을 듣는다', tone: 1 }], end: '이름 풀이를 보여 줬어요.',
        next: { text: '상대가 "이름 풀이는 짐작일 뿐"이라고 다시 말한다.', choices: [
          { id: 'more', text: '1906년 군수 보고와 1904년 일본 군함 기록을 함께 든다', result: '서로 다른 출처가 같은 섬을 가리킨다는 것이 드러난다.', impact: [{ who: '청중', text: '근거가 겹치는 것을 본다', tone: 1 }] },
          { id: 'same', text: '이름 풀이만 더 크게 되풀이한다', result: '새 근거가 없어 상대가 받아들이지 않는다.', impact: [{ who: '청중', text: '판단이 어렵다', tone: -1 }], why: '근거 하나보다 서로 다른 출처 여러 개가 단단해요.' }] } },
      { id: 'ignore', text: '대답하지 않고 넘어간다', result: '청중은 상대의 말만 듣고 판단한다.', impact: [{ who: '청중', text: '한쪽 말만 듣는다', tone: -1 }], why: '반론에는 근거로 답해야 청중이 판단할 수 있어요.', ending: '반론에 답하지 못했어요.' }] };
    const SCR = [{ id: 'r1', text: '서로 다른 출처가 같은 결론을 가리킨다' }, { id: 'r2', text: '1906년 보고서가 독도를 "본군 소속"이라 했다' },
      { id: 'r3', text: '목소리가 커야 이긴다', why: '목소리가 아니라 근거가 설득해요.' }, { id: 'r4', text: '죽도가 바로 독도다', why: '칙령의 죽도는 울릉도 옆 댓섬(죽서도)이에요.' }];

    ALL.push(
      M('intro.law', {
        title: '조항의 누가·무엇을·어디까지', method: '법령 조항 모양 살피기', tool: 'wordcards', minutes: 6,
        levels: { easy: '조항 낱말 2개(누가·어디까지)를 고르는 시연을 본다.', base: '조항 낱말 3개(누가·무엇을·어디까지)를 잇는 시연을 본다.', challenge: '조항을 내 말로 한 문장 요약해 말한다.' },
        intro: {
          teacher: '"나라가 섬을 자기 행정 구역에 넣으려면 무엇을 해야 할까요?" 1900년 10월 25일 대한제국이 칙령 제41호로 울릉도를 울도로 고쳐 군으로 올리고 울릉전도와 죽도·석도를 관할하게 했다는 점을 알리고, 시연 단추로 조항 낱말이 누가·무엇을·어디까지 칸에 이어지는 모습을 보인다. "깃발을 꽂으면 끝"이라는 생각에는 "법으로 정하고 모두에게 알리는 일이 왜 중요할까요?"라고 되묻는다. 독도의 날(10월 25일)이 이 날에서 나왔다는 점도 덧붙인다.',
          student: '칙령 제41호 조항의 요지를 읽고 누가·무엇을·어디까지에 해당하는 낱말을 찾아요. 조항을 내 말로 한 문장으로 말해 봐요.',
          demo: { tool: 'wordcards', options: { mode: 'match', slots: [{ id: 's1', label: '누가' }, { id: 's2', label: '무엇을' }, { id: 's3', label: '어디까지' }], cards: [{ id: 'k1', text: '울도군' }, { id: 'k2', text: '관할한다' }, { id: 'k3', text: '울릉전도·죽도·석도' }], shuffle: false }, sequence: [{ match: { s1: 'k1', s2: 'k2', s3: 'k3' } }] },
          art: { draw: 'a paper-cut official Korean Empire decree document dated 1900 with a seal, unrolled over a calm sea with three small islands', banner: '1900년 10월 25일, 칙령 제41호', extra: [{ motif: 'sun', x: 410, y: 58 }] },
        },
        notes: '조항 문구는 외교부 독도 누리집의 칙령 제41호 원문·번역으로 함께 보인다(카드는 요지만 담았다).',
      }),
      M('intro.sound', {
        title: '돌·독 글자 조립', method: '돌·독 소리와 뜻 견주기', tool: 'hangul', minutes: 6,
        levels: { easy: '\'돌\' 글자 하나를 조립하는 시연을 본다.', base: '\'돌\'과 \'독\' 두 글자를 차례로 조립하는 시연을 보고 소리 차이를 말한다.', challenge: '돌섬→독섬→석도·독도로 이어지는 설명을 한 문장으로 말한다.' },
        intro: {
          teacher: '"경상도나 전라도 어르신이 \'돌\'을 어떻게 발음하시는지 들어 본 적 있나요?" 시연 단추로 ㄷ·ㅗ에 받침 ㄹ을 붙여 \'돌\'을, 받침만 ㄱ으로 바꿔 \'독\'을 만드는 모습을 보인다. 외교부 누리집은 울릉도에 이주한 사람들이 바위섬을 돌섬·독섬이라 불렀고, 그 뜻을 한자로 적은 것이 석도(石島), 소리를 적은 것이 독도(獨島)라고 설명한다고 알린다. "그건 말장난"이라는 반응에는 "다른 근거도 함께 있다면 어떨까요? 오늘 찾아봐요"라고 답한다.',
          student: '\'돌\'과 \'독\' 두 글자가 받침 하나로 바뀌는 것을 보고, 돌섬이 석도와 독도라는 두 이름으로 적힌 까닭을 짝과 말해요.',
          demo: { tool: 'hangul', options: { consonants: ['ㄷ'], vowels: ['ㅗ'], batchim: ['ㄹ', 'ㄱ'], autoSlot: true, speak: false }, sequence: [{ syllable: '돌' }, { syllable: '독' }] },
          art: { draw: 'paper-cut Korean letter tiles forming the syllables dol and dok floating above a rocky islet, with a small Chinese character for stone beside them', banner: '돌섬 → 독섬 → 석도·독도', extra: [{ motif: 'wave', y: 230 }] },
        },
        notes: '사투리 발음 이야기는 특정 지역을 낮추는 말이 되지 않게, 지역마다 다른 소리가 있다는 점으로만 다룬다.',
      }),
      M('activity.area', {
        title: '울도군 관할 지도', method: '울도군 관할 범위 지도', tool: 'map', minutes: 16,
        levels: { easy: '관할 구역 칸에 색이 칠해진 지도에서 울릉전도·죽도·석도 자리에 핀을 꽂는다.', base: '색 없는 지도에서 칙령의 세 구역 자리에 핀을 꽂는다.', challenge: '마지막 문항에서 울릉도 기준 석도의 방위를 방위표로 맞춘다.' },
        activity: {
          title: '울도군 관할 지도', tool: 'map',
          teacher: '"칙령의 \'석도\'는 오늘날 어느 섬일까요?" 어림 칸 지도에서 울릉전도·죽도·석도 자리를 차례로 찾게 한다. 죽도를 독도에 꽂는 학생이 많다 — 칙령의 죽도는 울릉도 바로 옆의 댓섬(죽서도)이라는 점을 지도에서 짚는다. 관할 구역에 오키섬을 넣는 학생에게는 칙령 원문에 적힌 세 곳을 다시 읽게 한다.',
          task: '칙령 제41호가 울도군에 관할하게 한 울릉전도·죽도·석도가 오늘의 어느 섬인지 어림 칸 지도에 핀을 꽂아요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT({ prompt: '칙령의 \'울릉전도\'(울릉도 전체)에 핀을 꽂으세요.', toolOptions: AREA, target: { place: '울릉도' } }, { prompt: '색 칸(울도군 관할)에서 \'울릉전도\'에 핀을 꽂으세요.', toolOptions: AREA_EASY }),
            IT({ prompt: '칙령의 \'죽도\'에 핀을 꽂으세요.', toolOptions: AREA, target: { place: '죽도(댓섬)' } }, { prompt: '색 칸(울도군 관할)에서 \'죽도\'에 핀을 꽂으세요.', toolOptions: AREA_EASY }),
            IT({ prompt: '칙령의 \'석도\'는 오늘의 어느 섬인지 핀을 꽂으세요.', toolOptions: AREA, target: { place: '독도' } },
              { prompt: '색 칸(울도군 관할)에서 \'석도\'인 섬에 핀을 꽂으세요.', toolOptions: AREA_EASY },
              { prompt: '방위표를 지도 북쪽에 맞추고, 울릉도에서 석도(독도)가 있는 방위를 고르세요.', toolOptions: Object.assign({}, AREA, { mode: 'compass', points: 8 }), target: { from: '울릉도', to: '독도' } },
              { conclude: '칙령 제41호는 울릉전도와 죽도(댓섬), 석도(독도)를 울도군이 관할하게 했어요. 죽도는 독도가 아니에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '칙령의 관할 구역이 가리키는 오늘의 섬을 써요.', columns: ['칙령 이름', '오늘의 섬'], cells: [['울릉전도', ''], ['죽도', ''], ['석도', '']], answer: '울릉도 전체, 댓섬(죽서도), 독도' }] },
        notes: '칸 지도는 어림이다. 칙령 원문 사진과 실제 지도는 외교부 독도 누리집에서 함께 보인다.',
      }),
      M('activity.mean', {
        title: '\'관할\'의 뜻 생각그물', method: '관할의 뜻 생각그물', tool: 'mindmap', minutes: 16,
        levels: { easy: '\'관할\' 가지 2개(행정·관리)에 예 카드를 나누고, 놓으면 바로 맞는지 알려 준다.', base: '가지 3개(행정·세금·관리)에 예 카드를 나누고, 칙령 낱말과 뜻을 잇는다.', challenge: '칙령 조항마다 그 조항이 보여 주는 관할의 예를 붙인다(함정 카드 포함).' },
        activity: {
          title: '\'관할\'의 뜻 생각그물', tool: 'mindmap',
          teacher: '"\'관할한다\'는 말은 실제로 무엇을 한다는 뜻일까요?" 가운데 \'관할\'에 행정·세금·관리 가지를 붙여 나라가 맡아 다스리는 일을 모은 뒤, 칙령 제41호의 낱말과 이어 보게 한다. "도감을 군수로"의 뜻을 모르는 학생에게 섬을 맡은 관리의 등급을 높여 정식 군으로 다스렸다는 뜻이라고 풀어 준다. 가지에 붙인 예는 관할의 일반적인 뜻이고, 칙령 원문에 적힌 것만 독도 근거로 쓴다는 점을 짚는다.',
          task: '\'관할\'의 뜻을 행정·세금·관리 가지로 정리하고, 칙령 제41호의 낱말과 이어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            IT(SB('관할에 드는 일(일반 뜻)을 가지에 나눠 붙이세요.', ['행정', '세금', '관리'], [
              { id: 'a1', text: '군수가 섬 일을 맡아 처리함', to: '행정' }, { id: 'a2', text: '군이라는 행정 구역을 둠', to: '행정' },
              { id: 't1', text: '세금을 거두는 권한', to: '세금' }, { id: 't2', text: '세금 장부에 지역을 올림', to: '세금' },
              { id: 'm1', text: '섬을 돌아보며 살핌', to: '관리' }, { id: 'm2', text: '섬의 자원과 사람을 보살핌', to: '관리' }], { topic: '관할' }),
              SB('관할에 드는 일을 두 가지에 나눠 붙이세요.', ['행정', '관리'], [
                { id: 'a1', text: '군수가 섬 일을 맡아 처리함', to: '행정' }, { id: 'a2', text: '군이라는 행정 구역을 둠', to: '행정' },
                { id: 'm1', text: '섬을 돌아보며 살핌', to: '관리' }, { id: 'm2', text: '섬의 자원과 사람을 보살핌', to: '관리' }], { topic: '관할' })),
            IT(MB('칙령 제41호의 낱말과 그 뜻을 이어 보세요. 맞지 않는 카드는 남겨요.', [['울릉도를 울도로 고침', '섬 이름을 바꿈'], ['군으로 올림', '정식 군으로 다스림'], ['울릉전도·죽도·석도', '울도군이 맡는 범위']], ['일본에 섬을 빌려줌'], { topic: '칙령의 낱말' }),
              MB('칙령의 낱말 두 개와 뜻을 이어 보세요.', [['군으로 올림', '정식 군으로 다스림'], ['울릉전도·죽도·석도', '울도군이 맡는 범위']], [], { topic: '칙령의 낱말' })),
            IT(PB('칙령 제41호가 독도에 대해 보여 주는 것만 골라 담으세요.', '칙령이 보여 주는 것', [
              { id: 'p1', text: '석도를 울도군 관할로 정했다', ok: true }, { id: 'p2', text: '중앙 정부의 법령으로 정했다', ok: true },
              { id: 'p3', text: '독도 주민 수를 정했다' }, { id: 'p4', text: '일본과 나눠 쓰기로 했다' }], { topic: '칙령 제41호' }),
              null,
              PB('칙령 제41호가 독도에 대해 보여 주는 것만 골라 담으세요(함정 카드 포함).', '칙령이 보여 주는 것', [
                { id: 'p1', text: '석도를 울도군 관할로 정했다', ok: true }, { id: 'p2', text: '중앙 정부의 법령으로 정했다', ok: true }, { id: 'p5', text: '관보에 실어 널리 알렸다', ok: true },
                { id: 'p3', text: '독도 주민 수를 정했다' }, { id: 'p4', text: '일본과 나눠 쓰기로 했다' }, { id: 'p6', text: '죽도를 독도라 불렀다' }], { topic: '칙령 제41호' }),
              { conclude: '관할은 나라가 맡아 다스리는 범위예요. 칙령 제41호는 중앙 정부의 법령으로 석도(독도)를 울도군 관할에 넣었어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸을 채워요.', text: '칙령 제41호는 울릉전도와 죽도, ___를 울도군이 관할하게 했다.', answer: '석도' }] },
      }),
      M('activity.evid', {
        title: '석도=독도 근거 사슬', method: '석도=독도 근거 사슬', tool: 'story', minutes: 16,
        levels: { easy: '근거 카드 3장(돌섬→석도→독도)을 차례로 놓고, 놓으면 바로 맞는지 알려 준다.', base: '근거 카드 4장(돌섬→독섬→석도→독도)을 놓고, 근거와 출처를 잇는다.', challenge: '근거와 출처를 이은 뒤 근거가 못 되는 카드까지 가려낸다(함정 카드 포함).' },
        activity: {
          title: '석도=독도 근거 사슬', tool: 'story',
          teacher: '"돌섬에서 독도까지 이름이 어떻게 이어졌을까요?" 사슬 카드를 놓은 뒤 고리마다 무엇이 바뀌었는지(소리·뜻·글자) 말하게 한다. 獨島를 \'홀로 있는 섬\'이라는 뜻으로만 읽는 학생에게 "독섬의 소리를 적었다는 설명도 함께 볼까요?"라고 보여 준다. 방언·1906년 보고서·1904년 일본 군함 기록처럼 서로 다른 출처가 같은 결론을 가리킨다는 점을 짚는다.',
          task: '돌섬에서 독도까지 이름이 이어진 근거 사슬을 차례로 놓고, 근거마다 출처를 이어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            IT(OB('돌섬에서 독도까지 이름이 이어진 차례로 카드를 놓으세요.', [{ id: 'c1', text: '주민들이 바위섬을 돌섬이라 부름' }, { id: 'c2', text: '사투리 소리로 독섬' }, { id: 'c3', text: '뜻을 한자로 적어 석도(1900)' }, { id: 'c4', text: '소리를 한자로 적어 독도(1906)' }], { title: '석도=독도 근거 사슬' }),
              OB('이름이 이어진 차례로 카드 세 장을 놓으세요.', [{ id: 'c1', text: '주민들이 바위섬을 돌섬이라 부름' }, { id: 'c3', text: '뜻을 한자로 적어 석도(1900)' }, { id: 'c4', text: '소리를 한자로 적어 독도(1906)' }], { title: '석도=독도 근거 사슬' })),
            IT(MB('근거와 그 근거의 출처를 이어 보세요. 맞지 않는 카드는 남겨요.', [['돌섬·독섬 이름 풀이', '외교부 독도 누리집 설명'], ['"본군 소속 독도"', '1906년 울도 군수 보고서'], ['"한국인은 이 섬을 독도라 쓴다"', '1904년 일본 군함 기록']], ['출처 없는 커뮤니티 글'])),
            IT({ prompt: '말을 \'석도=독도 근거\'와 \'근거 못 됨\'으로 나누세요.', toolOptions: { mode: 'sort', slots: ['석도=독도 근거', '근거 못 됨'], cards: [{ id: 'g1', text: '돌섬의 뜻을 적으면 석도' }, { id: 'g2', text: '군수가 "본군 소속 독도"라 보고' }, { id: 'g3', text: '1904년 일본 군함 기록' }, { id: 'n1', text: '石과 獨이 같은 글자라서' }, { id: 'n2', text: '칙령의 죽도가 독도라서' }] }, target: { sort: { '석도=독도 근거': ['g1', 'g2', 'g3'], '근거 못 됨': ['n1', 'n2'] } } },
              null,
              { prompt: '말을 \'석도=독도 근거\'와 \'근거 못 됨\'으로 나누세요(함정 카드 포함).', toolOptions: { cards: [{ id: 'g1', text: '돌섬의 뜻을 적으면 석도' }, { id: 'g2', text: '군수가 "본군 소속 독도"라 보고' }, { id: 'g3', text: '1904년 일본 군함 기록' }, { id: 'n1', text: '石과 獨이 같은 글자라서' }, { id: 'n2', text: '칙령의 죽도가 독도라서' }, { id: 'n3', text: '모두 그렇게 말하니까' }] }, target: { sort: { '석도=독도 근거': ['g1', 'g2', 'g3'], '근거 못 됨': ['n1', 'n2', 'n3'] } } },
              { conclude: '이름 풀이, 1906년 보고서, 1904년 일본 군함 기록처럼 서로 다른 출처가 모두 석도가 독도임을 가리켜요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '석도가 독도라는 근거 두 가지를 출처와 함께 써요.' }] },
      }),
      M('activity.explain', {
        title: '석도가 독도인 까닭 쓰기', method: '근거 사슬 설명 글', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '빈칸 틀을 채워 문단마다 쓰고 기준 2개로 점검한다.', base: '주장·근거 둘·마무리를 세 문단(모두 세 문장 이상)으로 쓰고 기준 3개로 점검한다.', challenge: '마무리 문단에 "증거가 없다"는 반론에 답하는 한 줄을 더 쓰고 기준 4개로 점검한다.' },
        activity: {
          title: '석도가 독도인 까닭 쓰기', tool: 'rubric-writing',
          teacher: '"근거 하나만 쓴 글과 서로 다른 출처 두 개를 쓴 글, 어느 쪽이 더 단단할까요?" 문단마다 쓰기 전에 근거 사슬 카드를 다시 보게 한다. 근거로 "죽도가 독도"를 쓰는 학생에게 칙령의 세 구역을 다시 떠올리게 한다. 반론을 다룰 때 상대를 탓하지 않고 근거로만 답하게 한다.',
          task: '칙령 제41호의 석도가 독도인 까닭을 서로 다른 근거 두 개로 쓰고, 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RW('첫 문단: 주장과 첫째 근거(이름 풀이)를 쓰세요.',
              { topic: '첫 문단 — "칙령의 석도는 독도다"라는 주장과, 돌섬·독섬 이름 풀이 근거를 한두 문장으로 쓰세요.', minChars: 30, maxChars: 200, minSentences: 1, maxSentences: 2, title: '설명 글 ① 이름 풀이', lines: 3 },
              ['주장을 먼저 썼다', '뜻(석도)과 소리(독도)를 구별했다', '출처를 밝혔다'],
              { prompt: '첫 문단: 틀을 채워 쓰세요.', toolOptions: { starter: '칙령의 석도는 독도다. 돌섬의 뜻을 적으면 ___, 소리(독섬)를 적으면 ___이기 때문이다.' }, crit: ['주장을 먼저 썼다', '뜻(석도)과 소리(독도)를 구별했다'] }),
            RW('둘째 문단: 둘째 근거(1906년 보고서 또는 1904년 기록)를 쓰세요.',
              { topic: '둘째 문단 — 1906년 울도 군수 보고서나 1904년 일본 군함 기록 가운데 하나를 둘째 근거로 한두 문장 쓰세요.', minChars: 30, maxChars: 200, minSentences: 1, maxSentences: 2, title: '설명 글 ② 둘째 근거', lines: 3 },
              ['첫째와 다른 출처를 썼다', '연도를 썼다', '기록의 내용을 바르게 옮겼다'],
              { prompt: '둘째 문단: 틀을 채워 쓰세요.', toolOptions: { starter: '또 ___년 ___에는 ___라는 내용이 있다.' }, crit: ['첫째와 다른 출처를 썼다', '연도를 썼다'] }),
            RW('셋째 문단: 두 근거를 묶어 마무리하세요.',
              { topic: '셋째 문단 — 두 근거가 같은 결론을 가리킨다는 점을 묶어 한두 문장으로 마무리하세요.', minChars: 20, maxChars: 160, minSentences: 1, maxSentences: 2, title: '설명 글 ③ 마무리', lines: 3 },
              ['두 근거를 묶었다', '결론을 분명히 썼다', '정중한 표현을 썼다'],
              { prompt: '셋째 문단: 틀을 채워 마무리하세요.', toolOptions: { starter: '이처럼 서로 다른 두 기록이 모두 ___를 가리킨다.' }, crit: ['두 근거를 묶었다', '결론을 분명히 썼다'] },
              { prompt: '셋째 문단: 마무리에 "석도가 독도라는 증거가 없다"는 반론에 답하는 한 줄을 더 쓰세요.', toolOptions: { maxSentences: 3 }, crit: ['두 근거를 묶었다', '결론을 분명히 썼다', '정중한 표현을 썼다', '반론에 근거로 답했다'] },
              { conclude: '서로 다른 출처 두 개가 같은 결론을 가리키면, 근거 하나보다 훨씬 단단한 설명이 돼요.' }),
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '내 설명 글에 들어간 근거에 표시해요.', options: ['돌섬·독섬 이름 풀이', '1906년 울도 군수 보고서', '1904년 일본 군함 기록'] }] },
      }),
      M('wrap.dil', {
        title: '"석도는 다른 섬" 반론', method: '"석도는 다른 섬" 주장을 들었을 때', tool: 'dilemma', minutes: 7,
        levels: { easy: '갈림길 1번에서 고르고 결과 장면을 본다.', base: '갈림길 2번을 끝까지 가 본 뒤 알맞은 근거를 하나 이상 고른다.', challenge: '갈림길 2번을 간 뒤, 섞인 근거 가운데 맞는 근거 2장을 정확히 고른다.' },
        wrap: {
          teacher: '"\'석도는 다른 섬일 것\'이라는 말을 들으면 무엇부터 보여 줄까요?" 학생이 길을 끝까지 간 뒤 이름 풀이 하나만 되풀이한 길과 출처를 더한 길의 결과를 견주게 한다. "대답하지 않는 게 낫다"는 학생에게 "청중이 한쪽 말만 들으면 어떻게 판단할까요?"라고 되묻는다.',
          exitTicket: [
            (() => {
              const d = DIL({ easy: '"석도는 다른 섬"이라는 말을 들었어요. 한 번 골라 보세요.', base: '"석도는 다른 섬"이라는 말을 들었어요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '"석도는 다른 섬"이라는 말을 들었어요. 두 번 골라 끝까지 가고 맞는 근거 2장을 고르세요.' },
                '"석도는 다른 섬"', SC, [['name', 'more']], SCR, ['r1', 'r2'], { reasons: [{ id: 'r5', text: '대답하지 않으면 상대가 스스로 바뀐다' }], ok: ['r1', 'r2'] });
              return { type: 'tool', tool: 'dilemma', options: d.toolOptions, prompt: d.prompt, target: d.target, levels: d.levels, difficulty: 0.25 };
            })(),
            { type: 'choice', prompt: '칙령 제41호의 \'죽도\'가 가리키는 섬은?', options: ['독도', '울릉도 옆 댓섬(죽서도)', '오키섬'], answer: 1, difficulty: 0.2, explain: '칙령의 죽도는 울릉도 바로 옆 댓섬이에요.' },
            { type: 'short', prompt: '"석도는 다른 섬"이라는 말에 근거 두 개로 답하는 문장을 써요.' },
          ],
        },
        worksheet: {
          title: '"석도는 다른 섬"에 답하기',
          items: [
            { type: 'short', prompt: '내가 고른 길과 그 끝에서 고른 근거를 써요.' },
            { type: 'blank', prompt: '빈칸을 채워요.', text: '돌섬의 사투리 발음 "독섬"을 한자 뜻으로 적으면 ___, 소리로 적으면 독도다.', answer: '석도' },
          ],
        },
      }),
      M('wrap.check', {
        title: '세 칸 자기 점검', method: '자기 점검으로 마무리', tool: 'timer', minutes: 7, delivery: 'guided',
        levels: { easy: '점검 칸 2개(조항·석도)에 표시하고 모르는 것 하나를 짝에게 묻는다.', base: '점검 칸 3개(조항·관할·석도)에 표시하고 짝에게 묻는다.', challenge: '짝이 물은 것을 내가 설명해 준다(교사 진행).' },
        wrap: {
          teacher: '"오늘 배운 세 가지 가운데 아직 자신 없는 것은 무엇인가요?" 타이머를 묻기 30초·설명 1분으로 맞추고, 점검 칸에 표시한 뒤 짝에게 하나를 묻게 한다. "다 안다"고 표시만 하는 학생에게 "그럼 짝에게 \'관할\'을 한 문장으로 설명해 줄 수 있나요?"라고 묻는다. 교사는 돌아다니며 가장 많이 나온 질문을 모아 끝에 함께 답한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'timer', options: { title: '세 칸 자기 점검', labels: ['묻기', '설명'], plan: { work: 20, rest: 20, rounds: 1 } },
              prompt: '묻기 30초·설명 60초로 맞추고, 오늘 해 본 것을 스스로 표시해요.', target: { plan: { work: 30, rest: 60, rounds: 1 }, selfCheck: ['칙령 조항을 내 말로 읽어 보았다', '관할의 뜻을 말해 보았다', '석도=독도 근거를 짝에게 말했다'] }, difficulty: 0.1 },
            { prompt: '묻기 30초·설명 60초로 맞추고, 해 본 것 두 가지를 표시해요.', target: { plan: { work: 30, rest: 60, rounds: 1 }, selfCheck: ['칙령 조항을 내 말로 읽어 보았다', '석도=독도 근거를 짝에게 말했다'] } }),
            { type: 'choice', prompt: '칙령 제41호와 독도의 날의 관계로 알맞은 것은?', options: ['칙령이 반포된 10월 25일이 독도의 날이 되었다', '독도의 날은 법정기념일로 정해진 날이다', '칙령은 독도의 날과 관계없다'], answer: 0, difficulty: 0.2, explain: '독도의 날(10.25)은 칙령 반포일에서 나왔고, 법정기념일은 아니에요.' },
            { type: 'short', prompt: '오늘 짝에게 물은 것과 들은 설명을 한 줄로 써요.' },
          ],
        },
        worksheet: {
          title: '칙령 제41호 자기 점검',
          items: [
            { type: 'check', prompt: '오늘 할 수 있게 된 것에 표시해요.', options: ['칙령 조항 읽기', '관할의 뜻 말하기', '석도가 독도인 근거 말하기'] },
            { type: 'short', prompt: '아직 헷갈리는 것 하나와, 다음에 확인할 곳을 써요.' },
          ],
        },
        notes: '독도의 날(10.25)은 법정기념일이 아니다(research-days.md). 칙령 반포를 기념하는 날이라는 점만 말한다.',
      }),
    );
  }

  // ==== 8학년 · 국권 침탈 속 시마네현 고시 (dokdo.m.g8-1905) ====
  {
    const M = MK('g8-1905', [8]);
    const AX = { axis: ['옛날', '오늘날'] };
    const EV = [{ id: 'v1', text: '칙령 제41호(1900.10)' }, { id: 'v2', text: '러일전쟁·한일의정서(1904)' }, { id: 'v3', text: '시마네현 고시(1905.2)' }, { id: 'v4', text: '을사늑약(1905.11)' }, { id: 'v6', text: '국권 피탈(1910)' }];
    const EV6 = [EV[0], EV[1], EV[2], EV[3], { id: 'v5', text: '울도 군수 보고(1906)' }, EV[4]];
    // 대한제국 수립(1897) 뒤 몇 해 — 연도에서 셈
    const YRS = [['칙령 제41호(1900)', 3], ['시마네현 고시(1905)', 8], ['을사늑약(1905)', 8]];

    ALL.push(
      M('intro.when', {
        title: '1905년 무렵 대한제국', method: '1905년 무렵 대한제국 상황 고르기', tool: 'wordcards', minutes: 6,
        levels: { easy: '보기 2장 가운데 1905년 무렵의 일을 고르는 시연을 본다.', base: '보기 4장(함정 2장) 가운데 1905년 무렵의 일 2장을 고르는 시연을 본다.', challenge: '그 일이 독도 편입과 어떤 관계일지 까닭을 한 줄 말한다.' },
        intro: {
          teacher: '"1905년 2월, 일본은 왜 하필 그때 독도를 시마네현에 넣었을까요?" 1904년 러일전쟁이 시작되었고 같은 해 한일의정서로 일본이 한국 땅을 군사적으로 쓸 수 있게 되었다는 점을 알리고, 시연 단추로 1905년 무렵의 일 카드가 담기는 모습을 보인다. "그건 독도와 상관없는 역사"라는 반응에는 "같은 해 같은 무렵의 일들을 한 줄에 놓아 볼까요?"라고 되묻는다. 외교부 누리집이 독도 편입을 한반도 침탈 과정의 일부로 설명한다는 점을 소개한다.',
          student: '1905년 무렵 대한제국에 일어난 일을 골라요. 역사 시간에 배운 을사늑약이 무엇이었는지 짝에게 한 문장으로 말해요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '1905년 무렵의 일', cards: [{ id: 'a', text: '러일전쟁 시작(1904)' }, { id: 'b', text: '을사늑약(1905.11)' }, { id: 'c', text: '『세종실록』 「지리지」(1454)' }, { id: 'd', text: '광복(1945)' }], shuffle: false }, sequence: [{ pick: ['a', 'b'] }] },
          art: { draw: 'a paper-cut calendar page of 1905 with dark storm clouds over a small Korean Empire palace and warships on the sea', banner: '1905년, 대한제국은?', extra: [{ motif: 'cloud', x: 110, y: 52 }] },
        },
        notes: '침탈 과정을 다루며 일본 국민 전체를 탓하는 말이 나오지 않게, \'일본 정부·군의 행동\'으로 주어를 분명히 한다.',
      }),
      M('intro.news', {
        title: '소식이 늦게 닿은 까닭', method: '1906년 소식이 늦게 닿은 까닭 추론', tool: 'emotion', minutes: 6,
        levels: { easy: '원인 2개와 결과를 잇는 시연을 본다.', base: '원인 3개와 결과를 차례로 잇는 시연을 본다.', challenge: '이 흐름의 근거 문서를 하나 들어 말한다.' },
        intro: {
          teacher: '"1905년 2월의 고시를 대한제국은 왜 1906년에야 알았을까요?" 시연 단추로 원인 카드와 결과 카드가 이어지는 모습을 보인다. 외교부 누리집은 시마네현 고시가 대한제국에 알리지 않은 채 이루어졌고, 1906년 시마네현 관리들이 울도를 찾아와 편입을 알렸다고 설명한다고 소개한다. "대한제국은 아무것도 안 했다"는 말에는 "소식을 들은 군수가 어떻게 했는지 오늘 문서로 따라가 볼까요?"라고 답한다.',
          student: '1905년 고시와 1906년 보고 사이에 무슨 일이 있었는지, 원인과 결과 카드를 이어 보며 짝과 추론해요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 's1', label: '고시를 대한제국에 알리지 않음' }, { id: 's2', label: '1906년 시마네현 관리들이 울도에 옴' }, { id: 's3', label: '군수가 "본군 소속 독도"라 보고함' }], cards: [{ id: 'k1', text: '대한제국은 바로 알지 못했다' }, { id: 'k2', text: '군수가 편입 소식을 들었다' }, { id: 'k3', text: '정부가 지령 제3호를 내렸다' }], shuffle: false }, sequence: [{ match: { s1: 'k1', s2: 'k2', s3: 'k3' } }] },
          art: { draw: 'a paper-cut letter being carried across a stormy sea from a small island office to a palace, with a 1906 stamp on the envelope', banner: '왜 1906년에야 알았을까?', extra: [{ motif: 'wind', x: 300, y: 96 }] },
        },
      }),
      M('activity.line', {
        title: '국권 침탈 연표와 고시', method: '국권 침탈 연표에 고시 놓기', tool: 'timeline', minutes: 16,
        levels: { easy: '사건 카드 3장(1904·고시·을사늑약)을 차례로 놓고, 놓으면 바로 맞는지 알려 준다.', base: '사건 카드 5장을 차례로 놓고 연도 눈금에 사건을 잇는다.', challenge: '1906년 보고까지 6장을 놓고, 외교권을 빼앗기기 전·뒤로 나눈다.' },
        activity: {
          title: '국권 침탈 연표와 고시', tool: 'timeline',
          teacher: '"시마네현 고시는 침탈 연표의 어디쯤에 들어갈까요?" 카드를 놓은 뒤 고시가 러일전쟁 중, 을사늑약보다 앞선 1905년 2월이었다는 점을 짚는다. 고시를 을사늑약 뒤에 두는 학생에게 "2월과 11월 가운데 무엇이 먼저일까요?"라고 되묻는다. 칙령 제41호(1900)가 고시보다 5년 앞섰다는 점도 연표에서 확인하게 한다.',
          task: '1900~1910년의 사건을 시간 띠에 차례로 놓고, 그 사이에 1905년 시마네현 고시를 알맞게 놓아요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            IT(OB('1900~1910년 사건을 일어난 차례대로 놓으세요.', EV, AX),
              OB('사건 세 개를 일어난 차례대로 놓으세요.', [EV[1], EV[2], EV[3]], AX),
              OB('1906년 보고까지 넣어 일어난 차례대로 놓으세요.', EV6, AX)),
            IT(TM('연도 눈금에 알맞은 사건을 이어 보세요.', [['1900년', '칙령 제41호', 1900], ['1904년', '러일전쟁·한일의정서', 1904], ['1905년 2월', '시마네현 고시', 1905.1], ['1905년 11월', '을사늑약', 1905.9]], ['태정관 지령'], AX),
              TM('연도 눈금 세 곳에 알맞은 사건을 이어 보세요.', [['1900년', '칙령 제41호', 1900], ['1905년 2월', '시마네현 고시', 1905.1], ['1905년 11월', '을사늑약', 1905.9]], [], AX)),
            IT({ prompt: '사건을 \'외교권을 빼앗기기 전\'과 \'뒤\'로 나누세요.', toolOptions: { mode: 'sort', slots: ['을사늑약 전', '을사늑약 뒤'], cards: [{ id: 'a', text: '칙령 제41호' }, { id: 'b', text: '한일의정서' }, { id: 'c', text: '시마네현 고시' }, { id: 'd', text: '울도 군수 보고(1906)' }, { id: 'e', text: '국권 피탈(1910)' }], axis: ['옛날', '오늘날'] }, target: { sort: { '을사늑약 전': ['a', 'b', 'c'], '을사늑약 뒤': ['d', 'e'] } } },
              null, null, { conclude: '시마네현 고시는 러일전쟁 중, 을사늑약보다 앞서 이루어진 국권 침탈 과정의 일부였어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '연표의 사건과 연도를 써요.', columns: ['연도', '사건'], cells: [['1900', ''], ['1905.2', ''], ['1905.11', '']], answer: '칙령 제41호, 시마네현 고시, 을사늑약' }] },
      }),
      M('activity.gap', {
        title: '1900년과 1905년 사이 햇수', method: '1900년과 1905년 사이 햇수 막대', tool: 'chart', minutes: 16,
        levels: { easy: '막대 2개(칙령·고시)를 그리고 값이 보인다.', base: '막대 3개를 그리고 앞선 쪽과 햇수 차이를 읽는다.', challenge: '1906년 보고 막대를 더해 그리고, 고시 뒤 보고까지의 햇수를 읽는다.' },
        activity: {
          title: '1900년과 1905년 사이 햇수', tool: 'chart',
          teacher: '"대한제국이 세워진 1897년을 출발점으로 두면, 칙령과 고시는 몇 해 뒤의 일일까요?" 표의 값은 1897년부터 센 햇수라고 밝히고 막대를 그리게 한다. 막대 차이를 읽은 뒤 "5년 먼저 법령으로 관할한 섬을 \'주인 없는 섬\'이라 할 수 있을까요?"라고 물어 다음 주제로 잇는다. 고시와 을사늑약 막대가 같은 높이인 것을 보고 같은 해의 일이라는 점을 짚는다.',
          task: '대한제국 수립(1897) 뒤 몇 해의 일인지 막대그래프를 그리고, 칙령과 고시 가운데 앞선 쪽과 햇수 차이를 읽어요.',
          levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            IT({ prompt: '표를 보고 대한제국 수립(1897) 뒤 몇 해의 일인지 막대를 그리세요.', toolOptions: CB('대한제국 수립(1897) 뒤 몇 해의 일인가', '해', YRS, { xLabel: '문서·사건', yLabel: '지난 햇수', max: 10, scale: 1 }), target: { build: true } },
              { prompt: '표를 보고 칙령과 고시 두 막대를 그리세요.', toolOptions: { data: [YRS[0], YRS[1]] } },
              { prompt: '1906년 보고까지 더해 막대를 그리세요.', toolOptions: { data: [...YRS, ['울도 군수 보고(1906)', 9]] } }),
            IT({ prompt: '칙령 제41호는 시마네현 고시보다 몇 해 앞섰는지 그래프에서 읽어 쓰세요.', toolOptions: CR('대한제국 수립(1897) 뒤 몇 해의 일인가', '해', YRS, { xLabel: '문서·사건', yLabel: '지난 햇수', max: 10, scale: 1, question: '칙령은 고시보다 몇 해 앞섰나요?' }), target: { value: 5 } },
              null,
              { prompt: '고시부터 울도 군수 보고까지 몇 해가 걸렸는지 읽어 쓰세요.', toolOptions: { data: [...YRS, ['울도 군수 보고(1906)', 9]], question: '고시부터 보고까지 몇 해?' }, target: { value: 1 } }),
            IT({ prompt: '그래프에서 고시와 같은 해에 일어난 일을 고르세요.', toolOptions: CR('대한제국 수립(1897) 뒤 몇 해의 일인가', '해', YRS, { xLabel: '문서·사건', yLabel: '지난 햇수', max: 10, scale: 1, question: '고시와 같은 해의 일은?', choices: ['칙령 제41호', '을사늑약'] }), target: { pick: 1 } },
              null, null, { conclude: '칙령 제41호는 시마네현 고시보다 5년 앞선 중앙 정부의 법령이었고, 고시는 을사늑약과 같은 해에 이루어졌어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸을 채워요.', text: '칙령 제41호(1900)는 시마네현 고시(1905)보다 ___년 앞섰다.', answer: '5' }] },
      }),
      M('activity.flow', {
        title: '1906년 보고·지령 흐름', method: '1906년 보고·지령 흐름 놓기', tool: 'story', minutes: 16,
        levels: { easy: '장면 카드 3장을 차례로 놓고, 놓으면 바로 맞는지 알려 준다.', base: '장면 카드 4장(고시→관리 방문→군수 보고→정부 지령)을 차례로 놓는다.', challenge: '문서 말풍선 칸에 원문 표현 카드를 넣고, 함정 카드를 가려낸다.' },
        activity: {
          title: '1906년 보고·지령 흐름', tool: 'story',
          teacher: '"누가 누구에게 알렸나요?" 장면을 차례로 놓은 뒤, 군수가 \'본군 소속\'이라고 말할 수 있었던 까닭이 1900년 칙령에 있다는 점을 잇게 한다. 지령을 보고보다 앞에 두는 학생에게 "보고가 있어야 지령이 나오지 않을까요?"라고 되묻는다. 말풍선에는 문서에 적힌 표현만 넣고, 실존 인물의 말을 지어 넣지 않는다고 짚는다.',
          task: '1905년 고시부터 1906년 참정대신 지령까지의 장면을 차례로 놓고, 문서 말풍선에 원문 표현을 넣어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            IT(OB('1905~1906년 장면을 일어난 차례대로 놓으세요.', [{ id: 'f1', text: '시마네현 고시(1905)' }, { id: 'f2', text: '시마네현 관리들이 울도에 와 편입을 알림' }, { id: 'f3', text: '울도 군수가 상부에 보고' }, { id: 'f4', text: '참정대신이 지령 제3호로 재조사 지시' }], { title: '1906년 보고와 지령' }),
              OB('장면 세 장을 일어난 차례대로 놓으세요.', [{ id: 'f2', text: '시마네현 관리들이 울도에 와 편입을 알림' }, { id: 'f3', text: '울도 군수가 상부에 보고' }, { id: 'f4', text: '참정대신이 지령 제3호로 재조사 지시' }], { title: '1906년 보고와 지령' })),
            IT({ prompt: '문서 말풍선 칸에 그 문서에 적힌 표현을 넣으세요.', toolOptions: { mode: 'fill', title: '문서에 적힌 표현', slots: [{ id: 'f1', who: '울도 군수 보고서', label: '"___ 독도"' }, { id: 'f2', who: '참정대신 지령 제3호', label: '"독도 영지설은 ___"' }], cards: [{ id: 'w1', text: '본군 소속' }, { id: 'w2', text: '전혀 근거가 없다' }, { id: 'y1', text: '일본에 넘긴다' }] }, target: { fill: { f1: 'w1', f2: 'w2' } } },
              null,
              { prompt: '문서 말풍선 칸에 그 문서에 적힌 표현을 넣으세요(함정 카드 포함).', toolOptions: { cards: [{ id: 'w1', text: '본군 소속' }, { id: 'w2', text: '전혀 근거가 없다' }, { id: 'y1', text: '일본에 넘긴다' }, { id: 'y2', text: '주인 없는 섬' }] } }),
            IT({ prompt: '행동을 \'대한제국 쪽\'과 \'일본 쪽\'으로 나누세요.', toolOptions: { mode: 'sort', slots: ['대한제국 쪽', '일본 쪽'], cards: [{ id: 'k1', text: '울도 군수의 보고' }, { id: 'k2', text: '참정대신의 지령' }, { id: 'j1', text: '시마네현 고시' }, { id: 'j2', text: '시마네현 관리들의 방문' }] }, target: { sort: { '대한제국 쪽': ['k1', 'k2'], '일본 쪽': ['j1', 'j2'] } } },
              null, null, { conclude: '1906년 군수 보고와 참정대신 지령은 대한제국이 칙령 뒤에도 독도를 자기 영토로 여기고 대응했음을 보여 줘요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸을 채워요.', text: '심흥택 군수는 보고서에서 독도를 "본군 ___"이라고 적었다.', answer: '소속' }] },
      }),
      M('activity.essay', {
        title: '고시의 문제점 짧은 글', method: '고시의 문제점 짧은 글', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '빈칸 틀을 채워 문단마다 쓰고 기준 2개로 점검한다.', base: '시기·절차 두 관점과 마무리를 세 문단(네 문장 안팎)으로 쓰고 기준 3개로 점검한다.', challenge: '문단마다 사료 출처를 넣고 기준 4개로 점검한다.' },
        activity: {
          title: '고시의 문제점 짧은 글', tool: 'rubric-writing',
          teacher: '"시마네현 고시의 문제점을 \'언제\'와 \'어떻게\' 두 관점으로 나눠 볼까요?" 시기 관점(러일전쟁 중, 을사늑약 직전)과 절차 관점(이미 칙령으로 관할하던 섬을 대한제국에 알리지 않고 지방 고시로 편입)을 칠판에 나눠 적는다. "고시 글씨가 작아서 문제"처럼 핵심을 벗어난 학생에게 "이미 다스리던 섬을 상대에게 알리지 않은 것과 견주면 무엇이 더 중요할까요?"라고 되묻는다. 문제점은 정부의 행위를 따지는 것이지 사람들을 비난하는 글이 아니라고 짚는다.',
          task: '1905년 시마네현 고시의 문제점을 시기·절차 두 관점으로 나눠 쓰고, 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RW('첫 문단: 시기 관점의 문제점을 쓰세요.',
              { topic: '첫 문단 — 고시가 나온 때(러일전쟁 중, 을사늑약 직전)를 들어 시기의 문제점을 한두 문장으로 쓰세요.', minChars: 25, maxChars: 180, minSentences: 1, maxSentences: 2, title: '문제점 ① 시기', lines: 3 },
              ['고시가 나온 때를 썼다', '침탈 과정과 이었다', '정부의 행위로 썼다'],
              { prompt: '첫 문단: 틀을 채워 쓰세요.', toolOptions: { starter: '시마네현 고시는 ___ 중이던 1905년 2월, ___보다 앞서 이루어졌다.' }, crit: ['고시가 나온 때를 썼다', '침탈 과정과 이었다'] },
              { prompt: '첫 문단: 시기의 문제점을 쓰고, 근거 사료나 누리집 출처를 넣으세요.', toolOptions: { maxSentences: 3 }, crit: ['고시가 나온 때를 썼다', '침탈 과정과 이었다', '정부의 행위로 썼다', '출처를 넣었다'] }),
            RW('둘째 문단: 절차 관점의 문제점을 쓰세요.',
              { topic: '둘째 문단 — 이미 칙령 제41호로 관할하던 섬을 대한제국에 알리지 않고 편입했다는 절차의 문제점을 한두 문장으로 쓰세요.', minChars: 25, maxChars: 180, minSentences: 1, maxSentences: 2, title: '문제점 ② 절차', lines: 3 },
              ['칙령 제41호(1900)를 썼다', '알리지 않았다는 점을 썼다', '중앙 법령과 지방 고시를 구별했다'],
              { prompt: '둘째 문단: 틀을 채워 쓰세요.', toolOptions: { starter: '독도는 이미 ___년 칙령으로 관할하던 섬인데, 고시는 대한제국에 ___ 이루어졌다.' }, crit: ['칙령 제41호(1900)를 썼다', '알리지 않았다는 점을 썼다'] },
              { prompt: '둘째 문단: 절차의 문제점을 쓰고 출처를 넣으세요.', toolOptions: { maxSentences: 3 }, crit: ['칙령 제41호(1900)를 썼다', '알리지 않았다는 점을 썼다', '중앙 법령과 지방 고시를 구별했다', '출처를 넣었다'] }),
            RW('셋째 문단: 두 관점을 묶어 마무리하세요.',
              { topic: '셋째 문단 — 시기와 절차 두 관점을 묶어 고시의 문제점을 한 문장으로 마무리하세요.', minChars: 15, maxChars: 150, minSentences: 1, maxSentences: 2, title: '문제점 ③ 마무리', lines: 3 },
              ['두 관점을 묶었다', '결론을 분명히 썼다', '깎아내리는 표현이 없다'],
              { prompt: '셋째 문단: 틀을 채워 마무리하세요.', toolOptions: { starter: '이처럼 시마네현 고시는 ___와 ___ 모두에서 문제가 있다.' }, crit: ['두 관점을 묶었다', '결론을 분명히 썼다'] },
              { prompt: '셋째 문단: 두 관점을 묶어 마무리하고 출처를 한 번 더 밝히세요.', toolOptions: { maxSentences: 3 }, crit: ['두 관점을 묶었다', '결론을 분명히 썼다', '깎아내리는 표현이 없다', '출처를 넣었다'] },
              { conclude: '고시의 문제점은 시기(침탈 과정의 한가운데)와 절차(이미 관할하던 섬을 알리지 않고 편입) 두 관점으로 따질 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '두 관점의 문제점을 한 줄씩 써요.', columns: ['관점', '문제점'], cells: [['시기', ''], ['절차', '']], answer: '러일전쟁 중·을사늑약 직전, 이미 관할하던 섬을 알리지 않고 지방 고시로 편입' }] },
      }),
      M('wrap.pair', {
        title: '짝의 틀린 연도 바로잡기', method: '짝과 연도 혼동 바로잡기', tool: 'timer', minutes: 7, delivery: 'guided',
        levels: { easy: '짝이 일부러 틀린 연도 2번을 말하면 바로잡고 점검 칸 2개를 표시한다.', base: '틀린 연도 3번을 바로잡고 점검 칸 3개를 표시한다.', challenge: '바로잡을 때 그 해의 문서 이름까지 근거로 댄다(교사 진행).' },
        wrap: {
          teacher: '"짝이 일부러 연도를 틀리게 말할 거예요. 바로잡아 주세요." 칠판에 예시("칙령은 1905년", "을사늑약이 고시보다 먼저")를 적고, 타이머를 말하기·바로잡기 30초씩 세 번으로 맞추게 한다. 바로잡을 때 "틀렸어!"가 아니라 "그건 ○○년이야, 왜냐하면…"으로 말하게 한다. 끝나면 가장 헷갈린 연도 짝을 모두와 함께 짚는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'timer', options: { title: '연도 바로잡기', labels: ['말하기', '바로잡기'], plan: { work: 20, rest: 20, rounds: 1 }, safety: ['칙령 1900년을 바로잡았다', '고시 1905년 2월을 바로잡았다', '보고 1906년을 바로잡았다'] },
              prompt: '말하기 30초·바로잡기 30초를 3번 하도록 맞추고, 바로잡은 연도 칸을 표시해요.', target: { plan: { work: 30, rest: 30, rounds: 3 }, safety: true }, difficulty: 0.15 },
            { prompt: '말하기 30초·바로잡기 30초를 2번 맞추고, 바로잡은 칸 두 개를 표시해요.', toolOptions: { safety: ['칙령 1900년을 바로잡았다', '고시 1905년 2월을 바로잡았다'] }, target: { plan: { work: 30, rest: 30, rounds: 2 }, safety: true } }),
            { type: 'choice', prompt: '다음 가운데 시간 순서가 바른 것은?', options: ['을사늑약 → 시마네현 고시 → 칙령 제41호', '칙령 제41호 → 시마네현 고시 → 을사늑약', '시마네현 고시 → 칙령 제41호 → 을사늑약'], answer: 1, difficulty: 0.2, explain: '1900년 칙령, 1905년 2월 고시, 1905년 11월 을사늑약이에요.' },
          ],
        },
        worksheet: {
          title: '연도 바로잡기',
          items: [
            { type: 'table', prompt: '헷갈린 연도를 바로잡아 써요.', columns: ['짝이 말한 것', '바른 연도와 문서'], cells: [['', ''], ['', '']], answer: '(예) 칙령 1905년 → 1900년 칙령 제41호' },
            { type: 'short', prompt: '1905년과 1906년을 헷갈리지 않는 나만의 방법을 써요.' },
          ],
        },
      }),
      M('wrap.sum', {
        title: '우리 문서·일본 문서 나누기', method: '1900~1906 핵심 고르기', tool: 'sortboard', minutes: 7,
        levels: { easy: '연도 카드 3장을 \'우리 문서·일본 문서\'에 나누고, 놓으면 바로 알려 준다.', base: '연도 카드 4장을 나눈다.', challenge: '나눈 뒤 카드마다 그 문서가 보여 주는 것을 활동지에 붙여 쓴다.' },
        wrap: {
          teacher: '"1900년부터 1906년까지 나온 문서를 만든 쪽으로 나눠 볼까요?" 나눈 뒤 우리 문서 셋이 칙령→보고→지령으로 이어진다는 점을 짚는다. 시마네현 고시를 우리 문서에 넣은 학생에게 "고시를 낸 곳은 어디였지요?"라고 되묻는다.',
          exitTicket: [
            IT(EX('sortboard', SB('1900~1906년 문서를 만든 쪽으로 나눠요.', ['우리 문서', '일본 문서'], [
              { id: 'k1', text: '1900 칙령 제41호', to: '우리 문서' }, { id: 'j1', text: '1905 시마네현 고시', to: '일본 문서' },
              { id: 'k2', text: '1906 울도 군수 보고서', to: '우리 문서' }, { id: 'k3', text: '1906 참정대신 지령 제3호', to: '우리 문서' }])),
            LV(SB('문서 세 장을 만든 쪽으로 나눠요.', ['우리 문서', '일본 문서'], [
              { id: 'k1', text: '1900 칙령 제41호', to: '우리 문서' }, { id: 'j1', text: '1905 시마네현 고시', to: '일본 문서' }, { id: 'k2', text: '1906 울도 군수 보고서', to: '우리 문서' }]))),
            { type: 'choice', prompt: '1906년 참정대신 지령 제3호의 "독도 영지설은 전혀 근거가 없다"는 무슨 뜻인가요?', options: ['일본 땅이라는 말은 근거가 없다', '독도는 땅이 아니다', '일본의 편입을 받아들인다'], answer: 0, difficulty: 0.25, explain: '영지설은 \'(일본의) 영토라는 말\'이에요. 그 말이 근거 없다는 뜻이에요.' },
            { type: 'short', prompt: '우리 문서 세 개가 어떻게 이어지는지 한 문장으로 써요.' },
          ],
        },
        worksheet: {
          title: '1900~1906년 문서 정리',
          items: [
            { type: 'table', prompt: '문서마다 보여 주는 것을 써요.', columns: ['문서', '보여 주는 것'], cells: [['칙령 제41호', ''], ['울도 군수 보고서', ''], ['지령 제3호', '']], answer: '석도 관할, "본군 소속 독도", 영지설은 근거 없음·재조사' },
            { type: 'short', prompt: '시마네현 고시가 칙령 제41호와 견주어 다른 점 하나를 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 8학년 · 무주지 선점 요건으로 1905년 편입 따지기 (dokdo.m.g8-terra) ====
  // 국제법 개념은 기초 수준만: 무주지 선점 = 주인 없는 땅 + 국가의 영유 의사 + 실제 지배(g8 단원 서술). 판례·학설은 다루지 않는다.
  {
    const M = MK('g8-terra', [8]);
    // 처음 생각 투표(가상 학급 자료)
    const VOTE = [['주인 없는 땅이었다', 9], ['주인 없는 땅이 아니었다', 14], ['잘 모르겠다', 5]];
    const REQ = [['주인 없는 땅(무주지)', '어느 나라도 다스리지 않는 땅'], ['영유 의사', '국가가 차지하려는 뜻을 밝힘'], ['실제 지배', '국가가 실제로 다스림']];
    const T1 = { text: '1905년 일본 내각은 독도를 "다른 나라가 차지한 흔적이 없는 섬"이라 보고 편입했다고 주장한다.', ask: '첫째 요건 — 그때 독도는 주인 없는 땅이었나?', motif: 'wave', choices: [
      { id: 'empty', text: '사람이 살지 않았으니 주인 없는 땅이었다', result: '사람이 살지 않는 것과 주인이 없는 것을 같은 말로 본다.', impact: [{ who: '내 판단', text: '근거가 약해진다', tone: -1 }], why: '1900년 칙령 제41호로 이미 울도군이 관할하던 섬이에요.', ending: '사는 사람과 다스리는 나라를 헷갈렸어요.' },
      { id: 'owned', text: '1900년 칙령 제41호로 이미 관할하던 섬이었다', result: '첫째 요건에 맞지 않는다는 사료가 나온다.', impact: [{ who: '내 판단', text: '사료로 단단해진다', tone: 1 }], end: '첫째 요건을 사료로 따졌어요.',
        next: { text: '둘째 요건 — 편입하려는 뜻을 대한제국에 알렸나?', choices: [
          { id: 'told', text: '알렸으니 문제없다', result: '근거 자료를 찾지 못한다.', impact: [{ who: '내 판단', text: '사실과 어긋난다', tone: -1 }], why: '외교부 누리집은 고시가 대한제국에 알리지 않은 채 이루어졌다고 설명해요.' },
          { id: 'secret', text: '대한제국에 알리지 않은 지방 고시였다', result: '둘째 요건에도 문제가 있다는 사료가 나온다.', impact: [{ who: '내 판단', text: '두 요건을 따졌다', tone: 1 }] }] } }] };
    const T1R = [{ id: 'r1', text: '1900년 칙령 제41호로 이미 관할했다' }, { id: 'r2', text: '고시는 대한제국에 알리지 않았다' },
      { id: 'r3', text: '사람이 안 살면 주인이 없다', why: '사람이 살지 않아도 나라가 다스리는 섬이 있어요.' }, { id: 'r4', text: '먼저 본 개인이 주인이다', why: '선점은 개인의 발견이 아니라 국가의 의사와 지배를 봐요.' }];
    const T2 = { text: '친구가 "독도엔 사람이 거의 없었으니 대한제국이 다스렸다고 볼 수 없다"고 말한다.', ask: '셋째 요건 — 대한제국은 독도를 실제로 다스렸나?', motif: 'cloud', choices: [
      { id: 'agree', text: '사람이 없으니 다스리지 않았다', result: '법령과 관청의 일을 빼고 생각하게 된다.', impact: [{ who: '내 판단', text: '사료를 놓친다', tone: -1 }], why: '칙령으로 울도군이 관할하고, 군수가 "본군 소속"이라 보고했어요.', ending: '사료를 놓쳤어요.' },
      { id: 'law', text: '칙령으로 울도군이 맡아 다스리게 했다', result: '중앙 정부의 법령으로 관할을 정한 사실이 나온다.', impact: [{ who: '내 판단', text: '사료로 따진다', tone: 1 }], end: '법령을 근거로 들었어요.',
        next: { text: '친구가 "법만 있고 실제로 챙긴 기록은 있어?"라고 묻는다.', choices: [
          { id: 'report', text: '1906년 군수가 "본군 소속 독도"라 보고한 기록을 든다', result: '관청이 독도를 자기 군의 섬으로 여긴 기록이 나온다.', impact: [{ who: '친구', text: '새 근거를 듣는다', tone: 1 }] },
          { id: 'none', text: '"그런 건 필요 없어"라고 넘긴다', result: '친구의 질문에 답하지 못한다.', impact: [{ who: '친구', text: '납득하지 못한다', tone: -1 }], why: '질문에는 사료로 답해요.' }] } }] };
    const T2R = [{ id: 'r1', text: '칙령으로 울도군이 관할하게 했다' }, { id: 'r2', text: '군수가 "본군 소속 독도"라 보고했다' },
      { id: 'r3', text: '주민 수가 많아야 다스린 것이다', why: '다스림은 주민 수가 아니라 국가의 법·행정으로 봐요.' }, { id: 'r4', text: '질문에는 답하지 않아도 된다', why: '질문에 사료로 답해야 설득돼요.' }];
    const T3 = { text: '토론 상대가 "편입은 고시로 공개했으니 절차는 문제없다"고 말한다.', ask: '어떻게 따질까?', motif: 'star', choices: [
      { id: 'ok', text: '"공개했다면 괜찮네요"라고 받아들인다', result: '누구에게 어떻게 알렸는지 따져 보지 못한다.', impact: [{ who: '청중', text: '절차의 문제를 모른다', tone: -1 }], why: '지방 고시를 정작 대한제국에는 알리지 않았다는 점을 따져요.', ending: '절차를 따지지 못했어요.' },
      { id: 'who', text: '"누구에게 알렸나요?"라고 묻고 사료를 보인다', result: '지방 관청 고시였고 대한제국에 알리지 않았다는 설명이 나온다.', impact: [{ who: '청중', text: '절차를 따져 본다', tone: 1 }], end: '누구에게 알렸는지 따졌어요.',
        next: { text: '상대가 "그럼 대한제국은 어떻게 알렸는데요?"라고 되묻는다.', choices: [
          { id: 'gazette', text: '칙령 제41호는 중앙 정부 법령으로 관보에 실렸다고 견준다', result: '두 나라의 알림 방식 차이가 드러난다.', impact: [{ who: '청중', text: '두 문서를 견준다', tone: 1 }] },
          { id: 'shout', text: '"그건 상관없어요"라며 목소리를 높인다', result: '견줄 기회를 놓친다.', impact: [{ who: '청중', text: '판단이 어렵다', tone: -1 }], why: '되물음은 견줄 기회예요. 사료로 답해요.' }] } }] };
    const T3R = [{ id: 'r1', text: '고시는 대한제국에 알리지 않았다' }, { id: 'r2', text: '칙령은 관보에 실려 누구나 알 수 있었다' },
      { id: 'r3', text: '어디든 공개만 하면 절차는 끝난다', why: '이미 관할하던 나라에 알리지 않은 것이 문제예요.' }, { id: 'r4', text: '되물으면 목소리를 높인다', why: '목소리보다 사료가 설득해요.' }];
    const MORE3 = (extra) => ({ reasons: [{ id: 'r5', text: extra }], ok: ['r1', 'r2', 'r5'] });

    ALL.push(
      M('intro.ask', {
        title: '사람이 안 살면 주인이 없을까', method: '"사람이 안 살면 주인이 없을까" 질문', tool: 'wordcards', minutes: 6,
        levels: { easy: '생각 카드 2장 가운데 하나를 고르는 시연을 본다.', base: '생각 카드 3장 가운데 내 생각에 가까운 것을 고르는 시연을 본다.', challenge: '고른 생각의 까닭을 생활 속 비유로 말한다.' },
        intro: {
          teacher: '"주인 없는 물건을 먼저 주운 사람이 주인이 될 수 있다면, 이미 주인이 있는 물건은 어떨까요?" 생각 카드 가운데 내 생각에 가까운 것을 고르게 하고, 시연 단추로 한 장이 담기는 모습을 보인다. 이 단계에서는 정답을 말하지 않고 손을 들어 첫 생각만 확인한다. "국제법은 너무 어려워요"라는 말에는 "주인 있는 물건 비유로 먼저 생각해 볼까요?"라고 돕는다.',
          student: '"사람이 살지 않는 섬은 주인이 없을까?"라는 질문에 내 생각에 가까운 카드를 골라요. 아직 정답은 없어요 — 까닭만 짝에게 말해요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '내 첫 생각', cards: [{ id: 'a', text: '사람이 안 살면 주인이 없다' }, { id: 'b', text: '나라가 다스리면 주인이 있다' }, { id: 'c', text: '잘 모르겠다' }], shuffle: false }, sequence: [{ pick: ['b'] }] },
          art: { draw: 'a paper-cut lost-and-found box with a labeled umbrella inside, next to a small uninhabited rocky island with a flag of administrative paperwork', banner: '사람이 안 살면 주인이 없을까?', extra: [{ motif: 'cloud', x: 110, y: 52 }] },
        },
        notes: '도입의 생각 고르기는 채점하지 않는다. 시연은 카드 하나를 고르는 방법만 보인다.',
      }),
      M('intro.vote', {
        title: '처음 생각 투표 그래프', method: '처음 생각 투표 그래프', tool: 'chart', minutes: 6,
        levels: { easy: '두 항목(이었다·아니었다) 투표 막대를 보는 시연을 본다.', base: '세 항목 투표 막대에서 가장 많은 첫 생각을 읽는 시연을 본다.', challenge: '\'잘 모르겠다\'의 비율이 무엇을 뜻하는지 말한다.' },
        intro: {
          teacher: '"1905년 독도는 주인 없는 땅이었을까요?" 손을 들어 첫 생각을 투표하게 한 뒤, 가상 학급의 투표 그래프를 시연 단추로 읽는 모습을 보인다. 그래프는 수업용 가상 자료이고, 우리 반 결과는 칠판에 따로 적는다고 밝힌다. "투표로 많이 나온 쪽이 정답"이라는 말에는 "영토는 투표가 아니라 무엇으로 따져야 할까요?"라고 되묻고, 수업 끝에 다시 투표해 생각이 바뀌었는지 본다고 예고한다.',
          student: '"1905년 독도는 주인 없는 땅이었다/아니었다"에 손을 들어 첫 생각을 표시해요. 가상 학급 그래프와 우리 반 결과를 견주어 봐요.',
          demo: { tool: 'chart', options: CR('1905년 독도에 대한 처음 생각(가상 학급)', '명', VOTE, { xLabel: '생각', yLabel: '학생 수', max: 15, scale: 5, showValues: true, question: '가장 많은 처음 생각은?', choices: VOTE.map((d) => d[0]) }), sequence: [{ pick: 1 }] },
          art: { draw: 'a paper-cut classroom with students raising hands and a simple bar chart on the board next to a small island picture', banner: '처음 생각, 손을 들어 봐요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '그래프는 가상 자료다. 실제 반 투표는 칠판에 적고, 정리에서 다시 투표해 견준다.',
      }),
      M('activity.req', {
        title: '선점 요건과 뜻', method: '요건과 뜻 잇기', tool: 'emotion', minutes: 16,
        levels: { easy: '요건 2개와 뜻을 잇고, 놓으면 바로 맞는지 알려 준다.', base: '요건 3개와 뜻을 잇고, 요건과 요건 아닌 것을 가른다.', challenge: '함정 카드(개인의 발견·지도 색칠)가 더 섞인 판에서 잇고 가른다.' },
        activity: {
          title: '선점 요건과 뜻', tool: 'emotion',
          teacher: '"무주지 선점이 되려면 무엇이 갖추어져야 할까요?" 요건 세 가지와 뜻을 이은 뒤 요건마다 생활 비유(주인 없는 물건·내 것이라고 밝힘·실제로 씀)를 말하게 한다. "먼저 발견한 개인이 있으면 된다"를 요건에 넣는 학생에게 "국제법은 개인의 발견이 아니라 무엇을 볼까요?"라고 되묻는다. 시마네현 고시는 편입 행위 자체이지 무주지였다는 근거가 아니라는 점을 짚는다.',
          task: '무주지 선점의 세 요건과 뜻을 잇고, 요건이 아닌 것을 가려요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            IT(MB('선점의 요건과 그 뜻을 이어 보세요. 맞지 않는 카드는 남겨요.', REQ, ['먼저 본 사람이 주인']),
              MB('선점의 요건 두 개와 뜻을 이어 보세요.', REQ.slice(0, 2), []),
              MB('선점의 요건과 그 뜻을 이어 보세요(함정 카드 포함).', REQ, ['먼저 본 사람이 주인', '지도에 색칠만 함'])),
            IT(SB('카드를 \'선점 요건\'과 \'요건 아님\'으로 나누세요.', ['선점 요건', '요건 아님'], [
              { id: 'q1', text: '어느 나라도 다스리지 않는 땅', to: '선점 요건' }, { id: 'q2', text: '국가가 차지하려는 뜻을 밝힘', to: '선점 요건' },
              { id: 'q3', text: '국가가 실제로 다스림', to: '선점 요건' }, { id: 'n1', text: '먼저 발견한 개인이 있음', to: '요건 아님' },
              { id: 'n2', text: '섬에 사람이 살지 않음', to: '요건 아님' }]),
              { prompt: '카드 4장을 \'선점 요건\'과 \'요건 아님\'으로 나누세요.', toolOptions: { cards: [{ id: 'q1', text: '어느 나라도 다스리지 않는 땅' }, { id: 'q2', text: '국가가 차지하려는 뜻을 밝힘' }, { id: 'n1', text: '먼저 발견한 개인이 있음' }, { id: 'n2', text: '섬에 사람이 살지 않음' }] }, target: { sort: { '선점 요건': ['q1', 'q2'], '요건 아님': ['n1', 'n2'] } } },
              { prompt: '카드를 \'선점 요건\'과 \'요건 아님\'으로 나누세요(함정 카드 포함).', toolOptions: { cards: [{ id: 'q1', text: '어느 나라도 다스리지 않는 땅' }, { id: 'q2', text: '국가가 차지하려는 뜻을 밝힘' }, { id: 'q3', text: '국가가 실제로 다스림' }, { id: 'n1', text: '먼저 발견한 개인이 있음' }, { id: 'n2', text: '섬에 사람이 살지 않음' }, { id: 'n3', text: '지도에 색칠만 함' }] }, target: { sort: { '선점 요건': ['q1', 'q2', 'q3'], '요건 아님': ['n1', 'n2', 'n3'] } } }),
            IT({ prompt: '첫째 요건에 비추어 1905년 독도를 바르게 판단한 보기를 고르세요.', toolOptions: { mode: 'branch', situation: '1905년, 독도는 \'어느 나라도 다스리지 않는 땅\'이었을까?', who: '나', ask: '사료로 판단하면?', motif: 'wave', choices: [
              { id: 'no', text: '아니다 — 1900년 칙령으로 울도군이 관할했다', result: '맞아요. 이미 대한제국이 법령으로 관할하던 섬이었어요.', mood: '뿌듯함' },
              { id: 'yes', text: '그렇다 — 사람이 거의 살지 않았다', result: '사람이 사는지와 나라가 다스리는지는 달라요.', mood: '걱정', why: '칙령 제41호를 떠올려 봐요.' },
              { id: 'gosi', text: '그렇다 — 시마네현 고시가 있었다', result: '고시는 편입 행위 자체예요. 무주지였다는 근거가 아니에요.', mood: '걱정', why: '편입 행위와 무주지 근거를 구별해요.' }] }, target: { choice: 'no' } },
              null, null, { conclude: '무주지 선점에는 주인 없는 땅, 국가의 영유 의사, 실제 지배가 필요해요. 1905년 독도는 이미 칙령으로 관할하던 섬이었어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '선점 요건과 뜻을 써요.', columns: ['요건', '뜻'], cells: [['주인 없는 땅', ''], ['영유 의사', ''], ['실제 지배', '']], answer: '어느 나라도 다스리지 않는 땅, 국가가 차지하려는 뜻을 밝힘, 국가가 실제로 다스림' }] },
      }),
      M('activity.dil', {
        title: '1905년 편입, 요건에 맞나', method: '1905년 편입, 요건에 맞을까', tool: 'dilemma', minutes: 16,
        levels: { easy: '요건 1개(갈림길 1번)를 사료에 대어 고르고 결과를 본다.', base: '요건 2개(갈림길 2번)를 끝까지 따지고 근거를 하나 이상 고른다.', challenge: '요건 2개를 따진 뒤, 섞인 근거 가운데 맞는 근거 3장을 정확히 고른다.' },
        activity: {
          title: '1905년 편입, 요건에 맞나', tool: 'dilemma',
          teacher: '"요건 하나하나에 사료를 대 보면 1905년 편입 주장은 어떻게 될까요?" 갈림길마다 고르기 전에 그 요건과 관련된 사료(칙령 제41호·고시·1906년 보고)를 칠판에서 다시 짚는다. "사람이 안 살았으니 주인 없는 땅"을 고른 학생에게 "사는 사람과 다스리는 나라는 같은 말일까요?"라고 되묻는다. 끝 장면 근거는 요건마다 하나씩 짝지어 고르게 한다.',
          task: '무주지 선점 요건마다 갈림길을 지나며 사료를 대 보고, 끝에서 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '첫째 요건(주인 없는 땅)을 따져요. 한 번 골라 보세요.', base: '첫째·둘째 요건을 차례로 따져요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '첫째·둘째 요건을 따진 뒤 맞는 근거 3장을 정확히 고르세요.' },
              '주인 없는 땅이었나', T1, [['owned', 'secret']], T1R, ['r1', 'r2'], MORE3('편입 행위와 무주지였다는 근거는 다르다')),
            DIL({ easy: '셋째 요건(실제 지배)을 따져요. 한 번 골라 보세요.', base: '셋째 요건을 따져요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '셋째 요건을 따진 뒤 맞는 근거 3장을 정확히 고르세요.' },
              '실제로 다스렸나', T2, [['law', 'report']], T2R, ['r1', 'r2'], MORE3('다스림은 법·행정으로 판단한다')),
            DIL({ easy: '편입 절차를 따져요. 한 번 골라 보세요.', base: '편입 절차를 따져요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '편입 절차를 따진 뒤 맞는 근거 3장을 정확히 고르세요.' },
              '어떻게 알렸나', T3, [['who', 'gazette']], T3R, ['r1', 'r2'], MORE3('중앙 법령과 지방 고시는 무게가 다르다'),
              { conclude: '1905년 독도는 이미 칙령으로 관할하던 섬이었고, 편입은 그 나라에 알리지 않은 지방 고시였어요. 무주지 선점 요건에 맞지 않아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '1905년 독도가 무주지가 아니었다는 근거로 가장 알맞은 것은?', options: ['시마네현 고시', '1900년 칙령 제41호', '섬에 사람이 거의 없었다는 점'], answer: '1900년 칙령 제41호' }] },
      }),
      M('activity.evid', {
        title: '요건별 반박 사료', method: '요건별 반박 사료 나누기', tool: 'sortboard', minutes: 16,
        levels: { easy: '요건 2칸에 사료 카드를 나누고, 틀리면 까닭을 말하고 되돌아온다.', base: '요건 3칸에 사료 카드를 나눈다.', challenge: '맞지 않는 함정 카드를 바구니에 넣지 않고 남긴다.' },
        activity: {
          title: '요건별 반박 사료', tool: 'sortboard',
          teacher: '"이 사료는 어느 요건을 반박하나요?" 카드를 놓을 때마다 요건 이름을 넣어 한 문장으로 말하게 한다. 시마네현 고시를 \'주인 없는 땅이었나\' 바구니에 넣는 학생에게 "고시는 편입한 행위일까요, 무주지였다는 증거일까요?"라고 되묻는다. 바구니 셋에 사료가 고루 들어가면 근거가 요건마다 짝을 이룬다는 점을 짚는다.',
          task: '사료 카드를 무주지 선점 요건 바구니에 나누고, 맞지 않는 카드는 남겨요.',
          levels: { easy: { live: true, instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            IT(SB('사료 카드를 요건 바구니에 나누세요.', ['주인 없는 땅이었나', '뜻을 알렸나', '실제로 다스렸나'], [
              { id: 'a1', text: '1900년 칙령 제41호의 석도 관할', to: '주인 없는 땅이었나' }, { id: 'a2', text: '1877년 태정관 "일본과 관계없음"', to: '주인 없는 땅이었나' },
              { id: 'b1', text: '고시를 대한제국에 알리지 않음', to: '뜻을 알렸나' }, { id: 'b2', text: '중앙 법령 아닌 지방 관청 고시', to: '뜻을 알렸나' },
              { id: 'c1', text: '군수가 "본군 소속 독도"라 보고', to: '실제로 다스렸나' }, { id: 'c2', text: '칙령으로 울도군이 관할함', to: '실제로 다스렸나' }]),
              SB('사료 카드를 요건 두 바구니에 나누세요.', ['주인 없는 땅이었나', '뜻을 알렸나'], [
                { id: 'a1', text: '1900년 칙령 제41호의 석도 관할', to: '주인 없는 땅이었나' }, { id: 'a2', text: '1877년 태정관 "일본과 관계없음"', to: '주인 없는 땅이었나' },
                { id: 'b1', text: '고시를 대한제국에 알리지 않음', to: '뜻을 알렸나' }, { id: 'b2', text: '중앙 법령 아닌 지방 관청 고시', to: '뜻을 알렸나' }]),
              { prompt: '사료 카드를 요건 바구니에 나누세요. 맞지 않는 카드는 남겨요.', toolOptions: { more: [{ id: 'x1', text: '시마네현 고시가 있었다는 사실' }, { id: 'x2', text: '독도가 작은 섬이라는 점' }] } }),
            IT(SB('반박 문장을 \'정확한 반박\'과 \'지나친 말\'로 나누세요.', ['정확한 반박', '지나친 말'], [
              { id: 'o1', text: '1905년 독도는 이미 관할하던 섬이었다', to: '정확한 반박' }, { id: 'o2', text: '고시는 대한제국에 알리지 않았다', to: '정확한 반박' },
              { id: 'o3', text: '요건마다 사료로 맞지 않는다', to: '정확한 반박' }, { id: 'w1', text: '국제법은 다 소용없다', to: '지나친 말' },
              { id: 'w2', text: '상대 나라는 늘 거짓말한다', to: '지나친 말' }]),
              { prompt: '반박 문장 4장을 \'정확한 반박\'과 \'지나친 말\'로 나누세요.', toolOptions: { cards: [{ id: 'o1', text: '1905년 독도는 이미 관할하던 섬이었다' }, { id: 'o2', text: '고시는 대한제국에 알리지 않았다' }, { id: 'w1', text: '국제법은 다 소용없다' }, { id: 'w2', text: '상대 나라는 늘 거짓말한다' }] }, target: { sort: { '정확한 반박': ['o1', 'o2'], '지나친 말': ['w1', 'w2'] } } }),
            IT(SB('사료를 \'대한제국 문서\'와 \'일본 쪽 문서\'로 나누세요.', ['대한제국 문서', '일본 쪽 문서'], [
              { id: 'k1', text: '칙령 제41호(1900)', to: '대한제국 문서' }, { id: 'k2', text: '울도 군수 보고서(1906)', to: '대한제국 문서' },
              { id: 'j1', text: '태정관 지령(1877)', to: '일본 쪽 문서' }, { id: 'j2', text: '시마네현 고시(1905)', to: '일본 쪽 문서' }]), null, null,
              { conclude: '요건마다 반박 사료가 짝을 이루면, 1905년 편입이 무주지 선점 요건에 맞지 않는다는 것을 차분히 보일 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '요건마다 반박 사료를 하나씩 써요.', columns: ['요건', '반박 사료'], cells: [['주인 없는 땅이었나', ''], ['뜻을 알렸나', ''], ['실제로 다스렸나', '']], answer: '칙령 제41호, 고시를 알리지 않음, 군수 "본군 소속 독도" 보고' }] },
      }),
      M('activity.write', {
        title: '1905년 편입 논증 글', method: '논증 글 쓰기', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '빈칸 틀("1905년 편입은 ___")을 채워 문단마다 쓰고 기준 2개로 점검한다.', base: '주장·근거 둘·출처를 세 문단(다섯 문장 안팎)으로 쓰고 기준 3개로 점검한다.', challenge: '마지막 문단에 예상 반론에 답하는 한 줄을 더 쓰고 기준 4개로 점검한다.' },
        activity: {
          title: '1905년 편입 논증 글', tool: 'rubric-writing',
          teacher: '"\'1905년 편입은 ___\'의 빈칸에 무엇을 넣고, 어떤 사료로 받칠까요?" 주장 한 문장, 요건마다 근거, 출처의 차례로 문단을 나눠 쓰게 한다. 근거 없이 "말이 안 된다"로만 쓰는 학생에게 "어느 요건에 어떤 사료가 맞지 않나요?"라고 되묻는다. 논증 글은 상대 나라를 깎아내리는 글이 아니라 정부 주장의 논리를 따지는 글이라고 짚는다.',
          task: '"1905년 편입은 ___" 주장을 세우고 요건별 근거 두 개와 출처로 논증 글을 쓴 뒤, 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RW('첫 문단: 주장과 첫째 근거를 쓰세요.',
              { topic: '첫 문단 — "1905년 편입은 ___"의 주장 한 문장과, 첫째 요건(주인 없는 땅)에 대한 근거 한 문장을 쓰세요.', minChars: 30, maxChars: 200, minSentences: 2, maxSentences: 2, title: '논증 ① 주장과 근거', lines: 3 },
              ['주장을 첫 문장에 썼다', '요건 이름을 넣었다', '사료 근거를 들었다'],
              { prompt: '첫 문단: 틀을 채워 쓰세요.', toolOptions: { starter: '1905년 편입은 ___. 독도는 이미 ___년 칙령으로 관할하던 섬이었기 때문이다.' }, crit: ['주장을 첫 문장에 썼다', '사료 근거를 들었다'] }),
            RW('둘째 문단: 둘째 근거와 출처를 쓰세요.',
              { topic: '둘째 문단 — 둘째 요건(뜻을 알렸나)이나 셋째 요건(실제 지배)에 대한 근거와 출처를 두 문장으로 쓰세요.', minChars: 30, maxChars: 200, minSentences: 2, maxSentences: 2, title: '논증 ② 둘째 근거', lines: 3 },
              ['다른 요건의 근거를 썼다', '출처를 밝혔다', '첫째 근거와 겹치지 않게 썼다'],
              { prompt: '둘째 문단: 틀을 채워 쓰세요.', toolOptions: { starter: '또 고시는 대한제국에 ___. 이 내용은 ___에서 확인할 수 있다.' }, crit: ['다른 요건의 근거를 썼다', '출처를 밝혔다'] }),
            RW('셋째 문단: 논증을 마무리하세요.',
              { topic: '셋째 문단 — 두 근거를 묶어 주장을 다시 밝히는 마무리를 한두 문장으로 쓰세요.', minChars: 20, maxChars: 160, minSentences: 1, maxSentences: 2, title: '논증 ③ 마무리', lines: 3 },
              ['주장을 다시 밝혔다', '두 근거를 묶었다', '깎아내리는 표현이 없다'],
              { prompt: '셋째 문단: 틀을 채워 마무리하세요.', toolOptions: { starter: '따라서 1905년 편입은 무주지 선점의 요건에 ___.' }, crit: ['주장을 다시 밝혔다', '두 근거를 묶었다'] },
              { prompt: '셋째 문단: 마무리에 "사람이 안 살았으니 무주지"라는 반론에 답하는 한 줄을 더 쓰세요.', toolOptions: { maxSentences: 3 }, crit: ['주장을 다시 밝혔다', '두 근거를 묶었다', '깎아내리는 표현이 없다', '예상 반론에 사료로 답했다'] },
              { conclude: '논증 글은 주장 → 요건별 근거 → 출처 → 마무리로 이어질 때 단단해져요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내 논증 글의 주장 문장과 근거 하나를 옮겨 써요.' }] },
      }),
      M('wrap.revote', {
        title: '다시 투표, 바뀐 까닭', method: '다시 투표하고 바뀐 까닭 나누기', tool: 'timer', minutes: 7, delivery: 'guided',
        levels: { easy: '다시 손들어 투표하고 결과 수만 기록판에 적는다.', base: '투표 뒤 생각이 바뀐 한 명의 까닭을 듣는다.', challenge: '생각이 바뀐 두 명 이상의 까닭을 듣고 공통 근거를 찾는다(교사 진행).' },
        wrap: {
          teacher: '"처음 투표와 견주어, 지금 생각은 어떤가요?" 다시 손을 들어 투표하고 결과를 기록판에 적은 뒤, 생각이 바뀐 학생에게 무엇 때문에 바뀌었는지 말해 달라고 청한다. 바뀌지 않은 학생도 괜찮다고 먼저 말하고, 까닭을 사료로 말하는지만 함께 본다. 교사는 나온 까닭을 요건 이름으로 칠판에 묶어 정리한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'timer', options: { title: '다시 투표', labels: ['투표', '까닭 듣기'], plan: { work: 20, rest: 30, rounds: 1 }, unit: '명', fields: [{ label: '처음 \'아니었다\' 수', unit: '명', step: 1 }, { label: '다시 \'아니었다\' 수', unit: '명', step: 1 }] },
              prompt: '투표 30초·까닭 듣기 120초로 맞추고, 두 번의 투표 결과를 기록판에 적어요.', target: { plan: { work: 30, rest: 120, rounds: 1 }, records: true }, difficulty: 0.1 }),
            { type: 'choice', prompt: '"1905년 독도는 주인 없는 땅이었다"는 주장에 대한 반박으로 가장 알맞은 것은?', options: ['사람이 살지 않았으니 맞는 말이다', '1900년 칙령 제41호로 이미 울도군이 관할하던 섬이었다', '투표에서 적게 나왔으니 틀렸다'], answer: 1, difficulty: 0.2, explain: '영토는 투표가 아니라 사료로 따져요.' },
            { type: 'short', prompt: '내 생각이 바뀌었는지, 그 까닭을 사료 하나를 들어 써요.' },
          ],
        },
        worksheet: {
          title: '처음 생각과 지금 생각',
          items: [
            { type: 'table', prompt: '두 번의 투표에서 내 생각을 써요.', columns: ['때', '내 생각'], cells: [['처음', ''], ['지금', '']], answer: '(학생마다 다름)' },
            { type: 'short', prompt: '생각을 정하는 데 가장 힘이 된 사료 하나를 써요.' },
          ],
        },
      }),
      M('wrap.sum', {
        title: '요건과 반박 생각그물', method: '요건 생각그물', tool: 'mindmap', minutes: 7,
        levels: { easy: '가지 2개(주인 없는 땅·뜻을 알렸나)에 반박 사료 카드를 붙인다.', base: '가지 3개(세 요건)에 반박 사료 카드를 붙인다.', challenge: '함정 카드가 섞인 판에서 붙이고, 가지마다 출처를 활동지에 쓴다.' },
        wrap: {
          teacher: '"오늘 정리를 요건 세 가지와 반박 사료로 묶어 볼까요?" 가지를 다 채운 뒤 가지마다 사료를 하나씩 골라 한 문장으로 말하게 한다. 고시를 반박 사료로 붙인 학생에게 "고시는 반박하는 사료일까요, 따져지는 대상일까요?"라고 되묻는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '1905년 편입과 선점 요건', slots: ['주인 없는 땅이었나', '뜻을 알렸나', '실제로 다스렸나'], cards: [
              { id: 'a1', text: '칙령 제41호(1900)' }, { id: 'a2', text: '태정관 지령(1877)' }, { id: 'b1', text: '대한제국에 알리지 않음' }, { id: 'b2', text: '지방 관청 고시' },
              { id: 'c1', text: '군수 "본군 소속 독도"(1906)' }, { id: 'c2', text: '울도군 관할' }] },
              prompt: '요건 가지마다 반박 사료를 두 장씩 붙여요.', target: { sort: { '주인 없는 땅이었나': ['a1', 'a2'], '뜻을 알렸나': ['b1', 'b2'], '실제로 다스렸나': ['c1', 'c2'] } }, difficulty: 0.2 },
            { prompt: '요건 가지 두 개에 반박 사료를 두 장씩 붙여요.', toolOptions: { slots: ['주인 없는 땅이었나', '뜻을 알렸나'], cards: [{ id: 'a1', text: '칙령 제41호(1900)' }, { id: 'a2', text: '태정관 지령(1877)' }, { id: 'b1', text: '대한제국에 알리지 않음' }, { id: 'b2', text: '지방 관청 고시' }] }, target: { sort: { '주인 없는 땅이었나': ['a1', 'a2'], '뜻을 알렸나': ['b1', 'b2'] } } },
            { toolOptions: { cards: [{ id: 'a1', text: '칙령 제41호(1900)' }, { id: 'a2', text: '태정관 지령(1877)' }, { id: 'b1', text: '대한제국에 알리지 않음' }, { id: 'b2', text: '지방 관청 고시' }, { id: 'c1', text: '군수 "본군 소속 독도"(1906)' }, { id: 'c2', text: '울도군 관할' }, { id: 't1', text: '섬에 사람이 적었다' }, { id: 't2', text: '먼저 본 어부가 있었다' }] } }),
            { type: 'choice', prompt: '무주지 선점의 요건이 아닌 것은?', options: ['어느 나라도 다스리지 않는 땅일 것', '먼저 발견한 개인이 있을 것', '국가가 실제로 다스릴 것'], answer: 1, difficulty: 0.2, explain: '선점은 개인의 발견이 아니라 국가의 의사와 지배를 봐요.' },
          ],
        },
        worksheet: {
          title: '선점 요건 정리',
          items: [
            { type: 'table', prompt: '요건마다 반박 사료와 출처를 써요.', columns: ['요건', '반박 사료', '출처'], cells: [['주인 없는 땅', '', ''], ['뜻을 알림', '', ''], ['실제 지배', '', '']], answer: '칙령 제41호·외교부 누리집, 고시 미통지·외교부 누리집, 군수 보고서·외교부 누리집' },
            { type: 'short', prompt: '세 요건 가운데 1905년 편입 주장에 가장 맞지 않는 요건과 까닭을 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 8학년 · 근대 사료 비교표와 카드뉴스 (dokdo.m.g8-news) ====
  {
    const M = MK('g8-news', [8]);
    // 1877~1906년 근대 사료를 만든 주체별로 센 수(g8 단원에서 다룬 사료: 태정관 지령·시마네현 고시 / 칙령·군수 보고서·지령 제3호 / 1904년 일본 군함 기록)
    const WHO = [['대한제국 정부·관청', 3], ['일본 정부·관청', 2], ['일본 군함 기록', 1]];
    const NEWS = [
      { id: 'g1', text: '"1900년 칙령 제41호" + 출처: 외교부 누리집', to: '좋은 카드뉴스' }, { id: 'g2', text: '사료 사진 + 연도 + 짧은 뜻 풀이', to: '좋은 카드뉴스' },
      { id: 'b1', text: '"독도 충격 진실!!" 출처 없음', to: '고칠 카드뉴스' }, { id: 'b2', text: '상대 나라를 깎아내리는 그림', to: '고칠 카드뉴스' },
    ];
    const SITU = [['친구가 출처 없는 숫자를 말할 때', '"그 숫자는 어디서 확인했어?"'], ['내 카드뉴스에 틀린 연도가 있을 때', '"짚어 줘서 고마워, 고칠게"'], ['의견이 다를 때', '"내 근거는 이 사료야"'], ['누가 비하하는 말을 할 때', '"사람 말고 주장을 따지자"']];

    ALL.push(
      M('intro.ex', {
        title: '좋은 카드뉴스·고칠 카드뉴스', method: '좋은 카드뉴스·나쁜 카드뉴스 고르기', tool: 'sortboard', minutes: 6,
        levels: { easy: '예시 2장을 \'좋은·고칠\' 바구니에 나누는 시연을 본다.', base: '예시 4장을 나누는 시연을 보고 기준(출처·정확성)을 말한다.', challenge: '고칠 카드뉴스를 어떻게 고칠지 한 줄 말한다.' },
        intro: {
          teacher: '"이 카드뉴스를 친구에게 보내도 될까요?" 예시 네 장을 보이고 시연 단추로 출처·정확성 기준에 따라 바구니에 나누는 모습을 보인다. "눈에 띄는 게 좋은 카드뉴스"라는 말에는 "눈에 띄지만 출처가 없는 글을 친구가 퍼 나르면 어떻게 될까요?"라고 되묻는다. 오늘은 근대 사료를 비교표로 정리하고 출처를 밝힌 카드뉴스를 만든다고 밝힌다.',
          student: '예시 카드뉴스를 \'좋은 카드뉴스\'와 \'고칠 카드뉴스\'로 나눠 보고, 나눈 기준을 짝에게 말해요.',
          demo: { tool: 'sortboard', options: { slots: ['좋은 카드뉴스', '고칠 카드뉴스'], cards: strip(NEWS), shuffle: false }, sequence: [{ sort: { '좋은 카드뉴스': ['g1', 'g2'], '고칠 카드뉴스': ['b1', 'b2'] } }] },
          art: { draw: 'four paper-cut smartphone card news slides pinned on a board, two neat ones with document icons and two messy ones with exclamation marks', banner: '보내도 될 카드뉴스는?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      M('intro.recall', {
        title: '8학년 사료와 연도 잇기', method: '8학년 사료 떠올리기', tool: 'wordcards', minutes: 6,
        levels: { easy: '사료 2장에 연도를 잇는 시연을 본다.', base: '사료 4장에 연도를 잇는 시연을 본다.', challenge: '사료 6장 가운데 기억나는 것을 골라 연도를 말한다.' },
        intro: {
          teacher: '"이번 해에 읽은 근대 사료를 몇 개나 기억하나요?" 시연 단추로 사료 카드가 연도 칸에 이어지는 모습을 보이고, 학생에게는 기억나는 것부터 손을 들어 말하게 한다. 1905년과 1906년을 헷갈리면 "고시는 일본, 보고서는 우리"라고 짝지어 떠올리게 한다. 오늘은 이 사료들을 시기·주체 표로 정리해 카드뉴스의 재료로 쓴다고 밝힌다.',
          student: '8학년에 배운 사료 카드를 보고 연도를 떠올려 이어요. 기억이 가장 또렷한 사료 하나를 짝에게 소개해요.',
          demo: { tool: 'wordcards', options: { mode: 'match', slots: [{ id: 's1', label: '태정관 지령' }, { id: 's2', label: '칙령 제41호' }, { id: 's3', label: '시마네현 고시' }, { id: 's4', label: '울도 군수 보고서' }], cards: [{ id: 'k1', text: '1877년' }, { id: 'k2', text: '1900년' }, { id: 'k3', text: '1905년' }, { id: 'k4', text: '1906년' }], shuffle: false }, sequence: [{ match: { s1: 'k1', s2: 'k2', s3: 'k3', s4: 'k4' } }] },
          art: { draw: 'a paper-cut timeline string with four documents clipped on it like laundry, each with a year tag', banner: '올해 읽은 사료, 기억나요?', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
        },
      }),
      M('activity.table', {
        title: '근대 사료 시기·주체 표', method: '시기·주체 비교표', tool: 'chart', minutes: 16,
        levels: { easy: '주체 3개 가운데 하나가 미리 그려진 막대에 나머지를 그리고 값이 보인다.', base: '주체별 사료 수 막대를 그리고, 가장 많은 주체와 빈 칸(부족한 자료)을 읽는다.', challenge: '공통점을 고르고 활동지에 시기·주체 비교표 공통점 문장을 쓴다.' },
        activity: {
          title: '근대 사료 시기·주체 표', tool: 'chart',
          teacher: '"1877년부터 1906년까지 읽은 사료를 누가 만들었는지 세어 볼까요?" 칠판에 시기(1870년대·1900년대) × 주체(대한제국·일본 정부·일본 군함) 표를 그리고, 그래프는 주체별 사료 수를 센 것이라고 밝힌다. "우리 문서가 많으니 우리가 이긴다"는 학생에게 "사료는 수보다 무엇을 보여 주는지가 중요하지 않을까요?"라고 되묻는다. 일본 쪽 문서가 두 섬을 일본과 관계없다고 한 점처럼, 주체가 달라도 같은 결론을 가리키는 것이 표의 힘이라고 짚는다.',
          task: '1877~1906년 근대 사료를 만든 주체별로 세어 막대그래프를 그리고, 표에서 공통점과 빈 칸을 읽어요.',
          levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            IT({ prompt: '표를 보고 주체별 근대 사료 수 막대를 그리세요.', toolOptions: CB('1877~1906년 사료를 만든 주체', '개', WHO, { xLabel: '주체', yLabel: '사료 수', max: 4, scale: 1 }), target: { build: true } },
              { prompt: '첫 막대를 보고 나머지 두 막대를 그리세요.', toolOptions: { given: [0] } }),
            IT({ prompt: '사료를 가장 많이 만든 주체를 고르세요.', toolOptions: CR('1877~1906년 사료를 만든 주체', '개', WHO, { xLabel: '주체', yLabel: '사료 수', max: 4, scale: 1, question: '가장 많은 주체는?', choices: WHO.map((d) => d[0]) }), target: { pick: 0 } }),
            IT({ prompt: '주체가 달라도 사료들이 함께 가리키는 것을 고르세요.', toolOptions: CR('1877~1906년 사료를 만든 주체', '개', WHO, { xLabel: '주체', yLabel: '사료 수', max: 4, scale: 1, question: '여러 주체의 사료가 함께 가리키는 것은?', choices: ['독도는 일본 땅이 아니었다', '사료 수가 많은 쪽이 이긴다', '일본 쪽 사료는 쓸 수 없다'] }), target: { pick: 0 } },
              null,
              { prompt: '이 표에서 더 찾아볼 빈 칸으로 알맞은 것을 고르세요.', toolOptions: { question: '자료가 부족한 칸은?', choices: ['일본 군함 기록의 원문', '칙령 제41호의 연도', '태정관 지령의 연도'] }, target: { pick: 0 } },
              { conclude: '대한제국과 일본 쪽 문서가 주체는 달라도 같은 결론을 가리켜요. 표로 정리하면 공통점과 부족한 자료가 함께 보여요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '근대 사료를 시기·주체로 정리해요.', columns: ['시기', '대한제국', '일본 쪽'], cells: [['1870년대', '', ''], ['1900년대', '', '']], answer: '—·태정관 지령, 칙령·보고서·지령 제3호·시마네현 고시·1904 군함 기록' }] },
      }),
      M('activity.cards', {
        title: '카드뉴스 장면 차례', method: '카드뉴스 장면 차례', tool: 'story', minutes: 16,
        levels: { easy: '장면 카드 3장(제목→사료→출처)을 차례로 놓고, 놓으면 바로 맞는지 알려 준다.', base: '장면 카드 4장(제목→사료→뜻→출처)을 차례로 놓는다.', challenge: '마무리 장면까지 5장을 놓고, 카드뉴스에 넣을 문장만 고른다(함정 카드 포함).' },
        activity: {
          title: '카드뉴스 장면 차례', tool: 'story',
          teacher: '"넘겨 보는 카드뉴스는 몇 번째 장면에서 출처를 보여 줘야 할까요?" 장면을 차례로 놓은 뒤 출처 장면을 빼면 어떻게 되는지 짝과 말하게 한다. 뜻 장면에 지나친 해석("이걸로 끝")을 넣는 학생에게 "사료가 보여 주는 만큼만 말하면 어떻게 고칠까요?"라고 되묻는다. 마무리 장면은 상대를 깎아내리지 않고 더 알아볼 곳을 알려 주는 말로 쓴다고 짚는다.',
          task: '사료 하나를 고른 카드뉴스의 장면을 제목→사료→뜻→출처 차례로 놓고, 넣을 문장을 골라요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            IT(OB('칙령 제41호 카드뉴스 장면을 차례대로 놓으세요.', [{ id: 'c1', text: '제목: 1900년 10월 25일의 칙령' }, { id: 'c2', text: '사료: 울도군이 석도를 관할' }, { id: 'c3', text: '뜻: 중앙 정부가 법령으로 정함' }, { id: 'c4', text: '출처: 외교부 독도 누리집' }], { title: '카드뉴스 ①' }),
              OB('칙령 제41호 카드뉴스 장면 세 장을 차례대로 놓으세요.', [{ id: 'c1', text: '제목: 1900년 10월 25일의 칙령' }, { id: 'c2', text: '사료: 울도군이 석도를 관할' }, { id: 'c4', text: '출처: 외교부 독도 누리집' }], { title: '카드뉴스 ①' }),
              OB('칙령 제41호 카드뉴스 장면 다섯 장을 차례대로 놓으세요.', [{ id: 'c1', text: '제목: 1900년 10월 25일의 칙령' }, { id: 'c2', text: '사료: 울도군이 석도를 관할' }, { id: 'c3', text: '뜻: 중앙 정부가 법령으로 정함' }, { id: 'c4', text: '출처: 외교부 독도 누리집' }, { id: 'c5', text: '마무리: 원문을 직접 읽어 봐요' }], { title: '카드뉴스 ①' })),
            IT(OB('태정관 지령 카드뉴스 장면을 차례대로 놓으세요.', [{ id: 'd1', text: '제목: 1877년 일본 정부의 판단' }, { id: 'd2', text: '사료: "죽도 외 일도는 관계없음"' }, { id: 'd3', text: '뜻: 두 섬을 일본 땅으로 안 봄' }, { id: 'd4', text: '출처: 외교부 독도 누리집' }], { title: '카드뉴스 ②' }),
              OB('태정관 지령 카드뉴스 장면 세 장을 차례대로 놓으세요.', [{ id: 'd1', text: '제목: 1877년 일본 정부의 판단' }, { id: 'd2', text: '사료: "죽도 외 일도는 관계없음"' }, { id: 'd4', text: '출처: 외교부 독도 누리집' }], { title: '카드뉴스 ②' })),
            IT({ prompt: '카드뉴스에 넣을 문장만 골라 담으세요.', toolOptions: { mode: 'pick', basket: '카드뉴스에 넣을 문장', cards: [{ id: 'p1', text: '1900년 칙령 제41호는 석도를 관할했다' }, { id: 'p2', text: '출처: 외교부 독도 누리집' }, { id: 'p3', text: '독도 충격 진실!!' }, { id: 'p4', text: '상대 나라는 원래 그렇다' }] }, target: { pick: ['p1', 'p2'] } },
              null,
              { prompt: '카드뉴스에 넣을 문장만 골라 담으세요(함정 카드 포함).', toolOptions: { cards: [{ id: 'p1', text: '1900년 칙령 제41호는 석도를 관할했다' }, { id: 'p2', text: '출처: 외교부 독도 누리집' }, { id: 'p5', text: '1906년 군수가 "본군 소속 독도"라 보고' }, { id: 'p3', text: '독도 충격 진실!!' }, { id: 'p4', text: '상대 나라는 원래 그렇다' }, { id: 'p6', text: '이것 하나로 모든 게 끝났다' }] }, target: { pick: ['p1', 'p2', 'p5'] } },
              { conclude: '카드뉴스는 제목 → 사료 → 뜻 → 출처 차례로 넘길 때 읽는 사람이 근거를 따라올 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 카드뉴스 장면을 차례대로 써요.', columns: ['장면', '내용'], cells: [['제목', ''], ['사료', ''], ['뜻', ''], ['출처', '']], answer: '(예) 1900년의 칙령 / 석도 관할 / 법령으로 정함 / 외교부 누리집' }] },
      }),
      M('activity.design', {
        title: '카드뉴스 한 장 꾸미기', method: '카드뉴스 꾸미기', tool: 'collage', minutes: 16,
        levels: { easy: '종이 조각 2개 이상(제목 띠·글 상자)으로 카드뉴스 틀을 놓는다.', base: '종이 조각 4개 이상으로 틀을 놓고, 제목 띠가 잘 보이게 밝은·어두운 색을 맞닿게 한다.', challenge: '작은 긴 네모(출처 칸)를 따로 두고 점검 목록을 모두 표시한다.' },
        activity: {
          title: '카드뉴스 한 장 꾸미기', tool: 'collage',
          teacher: '"글자가 잘 읽히는 카드뉴스는 어떤 색과 자리를 쓸까요?" 색종이 판에는 글을 쓸 수 없으니 긴 네모는 글 상자, 동그라미는 사료 그림 자리로 정하고, 실제 문구는 다음 활동에서 쓴다고 먼저 밝힌다. 화려한 색만 겹치는 학생에게 "밝은 바탕에 어두운 제목 띠를 놓으면 멀리서도 읽힐까요?"라고 되묻는다. 출처 칸을 잊는 학생이 많다 — 작은 긴 네모 하나를 맨 아래에 두게 한다.',
          task: '색종이 조각으로 카드뉴스 한 장의 틀(제목 띠·사료 그림 자리·글 상자·출처 칸)을 꾸미고 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '긴 네모 2개 이상을 넣어 조각 4개 이상으로 카드뉴스 틀을 놓으세요.', toolOptions: { shapes: ['rect', 'circle', 'square', 'star'], sizes: ['s', 'm', 'l'], bg: '하양', maxPieces: 12 }, target: { has: [{ shape: 'rect', min: 2 }], pieces: { min: 4 } } },
              { prompt: '긴 네모 2개(제목 띠·글 상자)로 카드뉴스 틀을 놓으세요.', target: { has: [{ shape: 'rect', min: 2 }], pieces: { min: 2 } } },
              { prompt: '큰 긴 네모(제목 띠)와 작은 긴 네모(출처 칸)를 넣어 조각 4개 이상으로 틀을 놓으세요.', target: { has: [{ shape: 'rect', size: 'l', min: 1 }, { shape: 'rect', size: 's', min: 1 }], pieces: { min: 4 } } }),
            IT({ prompt: '제목 띠가 잘 보이게 밝은 색 조각과 어두운 색 조각을 맞닿게 놓으세요.', toolOptions: { shapes: ['rect', 'square'], colors: ['노랑', '하양', '분홍', '보라', '갈색', '검정'], sizes: ['m', 'l'], bg: '하양', maxPieces: 8 }, target: { contrast: 'light-dark' } }),
            IT({ prompt: '카드뉴스 틀을 완성하고 점검 목록을 모두 표시하세요.', toolOptions: { shapes: ['rect', 'circle', 'square'], sizes: ['s', 'm', 'l'], bg: '하양', maxPieces: 12 }, target: { selfCheck: ['제목 띠를 맨 위에 두었다', '사료 그림 자리를 두었다', '출처 칸을 두었다'], minPieces: 3 } },
              null, null, { conclude: '잘 읽히는 카드뉴스는 밝은 바탕과 어두운 제목 띠, 사료 그림 자리, 출처 칸이 제자리에 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '내 카드뉴스 틀에 있는 칸에 표시해요.', options: ['제목 띠', '사료 그림 자리', '글 상자', '출처 칸'] }] },
        notes: '색종이 판(collage)은 글씨를 쓸 수 없다. 조각은 칸의 자리만 정하고, 실제 문구는 \'카드뉴스 문구와 출처\' 활동이나 종이 활동지에 쓴다.',
      }),
      M('activity.caption', {
        title: '카드뉴스 세 장 문구', method: '카드뉴스 문구와 출처 쓰기', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '빈칸 틀을 채워 장마다 문구를 쓰고 기준 2개로 점검한다.', base: '세 장(제목·사료와 뜻·출처와 마무리) 문구를 쓰고 기준(사실·출처·정중함)으로 점검한다.', challenge: '마지막 장에 외국 친구를 위한 영어 한 줄을 더 쓰고 기준 4개로 점검한다.' },
        activity: {
          title: '카드뉴스 세 장 문구', tool: 'rubric-writing',
          teacher: '"한 장에 한 가지만 말하면 읽는 사람이 더 잘 따라올까요?" 장마다 짧게 쓰고, 사료 이름과 연도는 둘째 장에 꼭 넣게 한다. 제목에 "충격"·"진실" 같은 낚시 말을 쓰는 학생에게 "출처 있는 사실만으로도 눈길을 끌 수 있을까요?"라고 되묻는다. 출처 장에는 누리집 이름까지 적고, 상대를 깎아내리는 말은 쓰지 않는다고 짚는다.',
          task: '카드뉴스 세 장의 문구를 장마다 쓰고, 기준표(사실·출처·정중함)로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RW('첫 장: 카드뉴스 제목 문구를 쓰세요.',
              { topic: '첫 장 — 사료 하나를 골라 그 사료를 소개하는 제목 문구를 한 문장으로 쓰세요(낚시 말 없이).', minChars: 8, maxChars: 60, minSentences: 1, maxSentences: 1, title: '카드뉴스 ① 제목', lines: 2 },
              ['사료나 연도가 드러난다', '낚시 말을 쓰지 않았다', '한 줄로 짧게 썼다'],
              { prompt: '첫 장: 틀을 채워 제목을 쓰세요.', toolOptions: { starter: '___년, ___이 말해 주는 독도' }, crit: ['사료나 연도가 드러난다', '한 줄로 짧게 썼다'] }),
            RW('둘째 장: 사료 내용과 뜻을 쓰세요.',
              { topic: '둘째 장 — 사료의 내용 한 문장과 그 뜻 한 문장을 쓰세요.', minChars: 25, maxChars: 160, minSentences: 2, maxSentences: 2, title: '카드뉴스 ② 사료와 뜻', lines: 3 },
              ['사료 이름과 연도를 넣었다', '내용을 바르게 옮겼다', '뜻을 지나치지 않게 썼다'],
              { prompt: '둘째 장: 틀을 채워 쓰세요.', toolOptions: { starter: '___년 ___에는 ___라고 적혀 있다. 이는 ___을 보여 준다.' }, crit: ['사료 이름과 연도를 넣었다', '내용을 바르게 옮겼다'] }),
            RW('셋째 장: 출처와 마무리를 쓰세요.',
              { topic: '셋째 장 — 출처(누리집·자료 이름)와 마무리 한 문장을 쓰세요.', minChars: 15, maxChars: 140, minSentences: 1, maxSentences: 2, title: '카드뉴스 ③ 출처', lines: 3 },
              ['출처 이름을 밝혔다', '깎아내리는 표현이 없다', '더 알아볼 곳을 알려 주었다'],
              { prompt: '셋째 장: 틀을 채워 쓰세요.', toolOptions: { starter: '출처: ___. 원문은 ___에서 볼 수 있어요.' }, crit: ['출처 이름을 밝혔다', '더 알아볼 곳을 알려 주었다'] },
              { prompt: '셋째 장: 출처와 마무리에 이어 외국 친구를 위한 영어 한 줄을 더 쓰세요.', toolOptions: { maxSentences: 3 }, crit: ['출처 이름을 밝혔다', '깎아내리는 표현이 없다', '더 알아볼 곳을 알려 주었다', '영어 한 줄에도 사실만 담았다'] },
              { conclude: '카드뉴스 문구는 장마다 한 가지를 짧게, 사료와 출처를 분명히, 상대를 깎아내리지 않고 써요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내 카드뉴스 둘째 장 문구를 옮겨 쓰고, 출처를 적어요.' }] },
      }),
      M('wrap.talk', {
        title: '카드뉴스 돌려 보고 고칠 점', method: '모둠 토의로 고칠 점 찾기', tool: 'timer', minutes: 7, delivery: 'guided',
        levels: { easy: '돌려 본 카드뉴스에서 고칠 점 1개를 찾아 기록판에 적는다.', base: '고칠 점 2개를 찾아 적고 점검 칸 3개를 표시한다.', challenge: '고칠 점 3개를 찾아 적고 고친 문구까지 제안한다(교사 진행).' },
        wrap: {
          teacher: '"옆 모둠 카드뉴스를 2분 동안 돌려 보고, 1분 동안 고칠 점을 적어 주세요." 교사가 타이머로 돌려 보기·적기를 맞추고 모둠 차례를 진행한다. "다 좋아요"만 적는 모둠에게 "출처 칸, 연도, 표현 가운데 한 곳만 더 보면 무엇이 보일까요?"라고 되묻는다. 고칠 점은 사람이 아니라 카드뉴스의 칸을 두고 말한다고 짚는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'timer', options: { title: '카드뉴스 돌려 보기', labels: ['돌려 보기', '적기'], plan: { work: 60, rest: 30, rounds: 1 }, unit: '개', fields: [{ label: '찾은 고칠 점 수', unit: '개', step: 1 }], safety: ['출처 칸을 확인했다', '연도·사실을 확인했다', '정중한 표현인지 봤다'] },
              prompt: '돌려 보기 120초·적기 60초로 맞추고, 확인한 칸을 표시한 뒤 찾은 고칠 점 수를 적어요.', target: { plan: { work: 120, rest: 60, rounds: 1 }, safety: true, records: true }, difficulty: 0.15 },
            { prompt: '돌려 보기 120초·적기 60초로 맞추고, 출처 칸을 확인한 뒤 고칠 점 수를 적어요.', toolOptions: { safety: ['출처 칸을 확인했다'] } }),
            { type: 'choice', prompt: '옆 모둠에 고칠 점을 전하는 말로 가장 알맞은 것은?', options: ['"이건 엉망이야"', '"둘째 장에 연도를 넣으면 더 정확하겠어"', '"우리 게 더 나아"'], answer: 1, difficulty: 0.15, explain: '고칠 칸과 방법을 함께 말해요.' },
            { type: 'short', prompt: '우리 모둠이 받은 고칠 점 하나와 고친 문구를 써요.' },
          ],
        },
        worksheet: {
          title: '카드뉴스 고칠 점',
          items: [
            { type: 'table', prompt: '돌려 본 카드뉴스의 고칠 점을 적어요.', columns: ['장', '고칠 점'], cells: [['', ''], ['', '']], answer: '(예) 셋째 장 — 출처 이름이 없음' },
            { type: 'short', prompt: '받은 고칠 점을 반영해 고친 문구 하나를 써요.' },
          ],
        },
      }),
      M('wrap.sum', {
        title: '근거 있는 말하기 잇기', method: '사료 근거 말하기 연습', tool: 'emotion', minutes: 7,
        levels: { easy: '토의 상황 2개와 근거 있는 말하기를 잇는다.', base: '상황 3개와 말하기를 잇는다.', challenge: '상황 4개와 말하기를 잇는다(함정 카드 포함).' },
        wrap: {
          teacher: '"토의에서 이런 상황이 오면 어떤 말을 하면 좋을까요?" 상황과 말하기 카드를 이은 뒤, 한 쌍씩 짝과 소리 내어 연습하게 한다. 비하하는 말에 맞장구치는 카드를 고른 학생에게 "주장을 따지는 것과 사람을 탓하는 것은 어떻게 다를까요?"라고 되묻는다.',
          exitTicket: [
            IT(EX('emotion', MB('토의 상황과 근거 있는 말하기를 이어요.', SITU.slice(0, 3), ['"그냥 내 말이 맞아"']), 0.2),
              LV(MB('토의 상황 두 개와 근거 있는 말하기를 이어요.', SITU.slice(0, 2), [])),
              LV(MB('토의 상황 네 개와 근거 있는 말하기를 이어요(함정 카드 포함).', SITU, ['"그냥 내 말이 맞아"', '"너희 편은 다 그래"']))),
            { type: 'choice', prompt: '친구가 출처 없는 숫자를 말할 때 가장 알맞은 말은?', options: ['"거짓말하지 마"', '"그 숫자는 어디서 확인했어?"', '아무 말도 하지 않는다'], answer: 1, difficulty: 0.15, explain: '출처를 물으면 함께 확인할 수 있어요.' },
            { type: 'short', prompt: '오늘 연습한 말하기 가운데 다음 토의에서 꼭 쓸 한 문장을 써요.' },
          ],
        },
        worksheet: {
          title: '근거 있는 말하기',
          items: [
            { type: 'table', prompt: '상황마다 쓸 말을 적어요.', columns: ['상황', '쓸 말'], cells: [['출처 없는 숫자', ''], ['내 실수를 짚어 줄 때', '']], answer: '"어디서 확인했어?", "고마워, 고칠게"' },
            { type: 'short', prompt: '8학년 독도 공부에서 가장 힘 있다고 생각한 사료 하나와 까닭을 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 9학년 · 전쟁 뒤 영토 처리와 연합국 각서 (dokdo.m.g9-scap) ====
  // 일본 정부는 "각서는 최종 결정이 아니다"라고 주장하고, 정부는 그 뒤 연합국이 이 조치를 바꾼 적이 없다고 설명한다(g9 단원 서술 — 사람 확인 목록).
  {
    const M = MK('g9-scap', [9]);
    const AX = { axis: ['옛날', '오늘날'] };
    const DOCS = [{ id: 'd1', text: '카이로 선언(1943)' }, { id: 'd2', text: '포츠담 선언(1945.7)' }, { id: 'd3', text: '광복(1945.8)' }, { id: 'd4', text: '각서 제677호(1946.1)' }, { id: 'd5', text: '각서 제1033호(1946.6)' }];
    const SCAP = { grid: [7, 5], title: '1946년 각서 제677호가 정한 범위(어림 칸 지도)', places: [
      { name: '울릉도', icon: 'island', at: [3, 1] }, { name: '독도', icon: 'island', at: [4, 1] }, { name: '제주도', icon: 'island', at: [1, 4] }],
      regions: [{ name: '한반도', cells: [[0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1, 2]], color: 'cream' }, { name: '일본 통치·행정 범위', cells: [[6, 1], [6, 2], [6, 3], [5, 3], [5, 4], [6, 4]], color: 'mint' }] };
    const SCAP_HINT = { regions: [...SCAP.regions, { name: '일본 범위에서 뺀 곳', cells: [[3, 1], [4, 1], [1, 4]], color: 'buttercup' }] };
    const Y = [['칙령 제41호(1900)', 3], ['시마네현 고시(1905)', 8], ['각서 제677호(1946)', 49]];
    const S1 = { text: '토론 상대가 "각서 제677호는 임시 조치였을 뿐 최종 결정이 아니다"라고 말한다.', ask: '어떻게 답할까?', motif: 'cloud', choices: [
      { id: 'deny', text: '"각서에 그런 말은 없어요"라고 무조건 부정한다', result: '상대가 원문 구절을 보이자 내 말의 믿음이 떨어진다.', impact: [{ who: '나', text: '신뢰를 잃는다', tone: -1 }], why: '상대의 근거가 사실이면 인정하고, 그다음 쟁점을 짚어요.', ending: '무조건 부정해 신뢰를 잃었어요.' },
      { id: 'grant', text: '그런 주장이 있음을 인정하고, 정부 설명을 함께 든다', result: '정부는 그 뒤 연합국이 이 조치를 바꾼 적이 없다고 설명한다는 점을 보인다.', impact: [{ who: '청중', text: '양쪽 설명을 듣는다', tone: 1 }], end: '주장을 인정하고 정부 설명을 보였어요.',
        next: { text: '상대가 "그래도 각서가 영토를 정한 건 아니잖아요"라고 다시 말한다.', choices: [
          { id: 'origin', text: '독도는 원래 우리 영토이고 각서는 침탈에서 벗어나는 과정의 문서라고 답한다', result: '각서를 지나치게 해석하지 않으면서 쟁점이 분명해진다.', impact: [{ who: '청중', text: '각서의 자리를 이해한다', tone: 1 }] },
          { id: 'over', text: '"각서로 독도가 한국 땅으로 새로 정해졌어요"라고 답한다', result: '상대가 "그럼 그 전엔 아니었나요?"라고 되묻는다.', impact: [{ who: '나', text: '말이 앞뒤가 안 맞는다', tone: -1 }], why: '각서로 새로 생긴 것이 아니라 원래 영토가 침탈에서 벗어난 것이에요.' }] } }] };
    const S1R = [{ id: 'r1', text: '사실인 상대 근거는 인정하고 쟁점을 짚는다' }, { id: 'r2', text: '각서는 고유 영토가 침탈에서 벗어난 과정이다' },
      { id: 'r3', text: '상대 말은 무조건 부정한다', why: '사실을 부정하면 맞는 근거까지 의심받아요.' }, { id: 'r4', text: '각서로 영토가 새로 생겼다', why: '그렇게 말하면 그 전에는 아니었다는 뜻이 돼요.' }];
    const S2 = { text: '친구가 "1946년 각서는 미국이 그냥 정한 거라 의미 없다"고 말한다.', ask: '어떻게 답할까?', motif: 'star', choices: [
      { id: 'agree', text: '"그렇겠네"라고 넘어간다', result: '각서가 어떤 원칙 위에서 나왔는지 따져 보지 못한다.', impact: [{ who: '친구', text: '흐름을 놓친다', tone: -1 }], why: '각서는 카이로·포츠담 선언의 원칙을 이은 연합국의 조치였어요.', ending: '흐름을 따져 보지 못했어요.' },
      { id: 'flow', text: '카이로·포츠담 선언의 원칙에서 이어진 조치라고 말한다', result: '"폭력과 탐욕으로 탈취한 지역" 원칙과 각서가 이어진다.', impact: [{ who: '친구', text: '문서의 흐름을 안다', tone: 1 }], end: '원칙과 각서를 이었어요.',
        next: { text: '친구가 "그럼 각서 두 개는 뭐가 달라?"라고 묻는다.', choices: [
          { id: 'two', text: '제677호는 통치·행정 범위, 제1033호는 일본 배의 접근 금지라고 구별한다', result: '친구가 두 각서를 표로 정리한다.', impact: [{ who: '친구', text: '두 각서를 구별한다', tone: 1 }] },
          { id: 'same', text: '"둘 다 똑같아"라고 답한다', result: '친구가 두 각서를 헷갈린다.', impact: [{ who: '친구', text: '내용을 헷갈린다', tone: -1 }], why: '두 각서는 정한 내용이 달라요.' }] } }] };
    const S2R = [{ id: 'r1', text: '각서는 카이로·포츠담 원칙을 이었다' }, { id: 'r2', text: '제677호와 제1033호는 내용이 다르다' },
      { id: 'r3', text: '한 나라가 정한 것은 모두 의미 없다', why: '연합국의 조치로서 앞 문서의 원칙을 이었어요.' }, { id: 'r4', text: '두 각서는 같은 내용이다', why: '통치 범위와 접근 금지는 달라요.' }];
    const S3 = { text: '모둠 카드뉴스에 "1946년 각서 덕분에 독도가 생겼다"는 문장이 들어갔다.', ask: '어떻게 고칠까?', motif: 'leaf', choices: [
      { id: 'keep', text: '멋있어 보이니 그대로 둔다', result: '읽는 사람이 독도가 1946년에 처음 우리 땅이 된 줄 안다.', impact: [{ who: '읽는 사람', text: '잘못 이해한다', tone: -1 }], why: '독도는 그 전부터 우리 영토였어요. 각서는 일본 범위에서 뺀 문서예요.', ending: '잘못된 문장이 남았어요.' },
      { id: 'fix', text: '"각서 제677호는 독도를 일본 통치·행정 범위에서 뺐다"로 고친다', result: '번호·날짜·내용이 정확해진다.', impact: [{ who: '읽는 사람', text: '정확히 이해한다', tone: 1 }], end: '정확한 문장으로 고쳤어요.',
        next: { text: '모둠원이 "날짜도 넣을까?"라고 묻는다.', choices: [
          { id: 'date', text: '"1946년 1월"을 넣고 출처도 적자고 한다', result: '인용이 번호·날짜·내용·출처를 갖춘다.', impact: [{ who: '읽는 사람', text: '확인할 수 있다', tone: 1 }] },
          { id: 'skip', text: '길어지니 빼자고 한다', result: '읽는 사람이 어느 각서인지 헷갈린다.', impact: [{ who: '읽는 사람', text: '헷갈린다', tone: -1 }], why: '정확한 인용에는 번호와 날짜가 필요해요.' }] } }] };
    const S3R = [{ id: 'r1', text: '번호·날짜·내용을 정확히 밝힌다' }, { id: 'r2', text: '독도는 각서 전부터 우리 영토였다' },
      { id: 'r3', text: '멋있는 문장이 좋은 인용이다', why: '인용은 정확해야 해요.' }, { id: 'r4', text: '날짜는 없어도 된다', why: '두 각서를 가르려면 날짜가 필요해요.' }];

    ALL.push(
      M('intro.q', {
        title: '광복 뒤 영토를 누가 정했나', method: '광복 뒤 영토를 누가 정했을까', tool: 'wordcards', minutes: 6,
        levels: { easy: '주체 카드 2장 가운데 알맞은 것을 고르는 시연을 본다.', base: '주체 카드 3장(함정 1장) 가운데 알맞은 2장을 고르는 시연을 본다.', challenge: '고른 주체가 왜 영토 처리를 맡았는지 까닭을 말한다.' },
        intro: {
          teacher: '"전쟁이 끝나면, 전쟁 중이나 그 전에 빼앗은 땅은 어떻게 될까요?" 1943년 카이로 선언이 "일본은 폭력과 탐욕으로 탈취한 모든 지역에서 축출될 것"이라 밝혔고 1945년 포츠담 선언이 이를 이어받았다는 점을 알리고, 시연 단추로 주체 카드가 담기는 모습을 보인다. "독도는 1905년에 편입됐으니 상관없다"는 반응에는 "1905년 편입이 어떤 흐름 속에서 일어났는지 8학년에 배웠지요?"라고 되묻는다. 오늘은 광복 뒤 문서를 시대 순으로 읽는다고 밝힌다.',
          student: '전쟁 뒤 일본의 영토 범위를 정한 주체를 골라요. 8학년에 배운 1905년 고시와 오늘 문서가 어떻게 이어질지 짝과 어림해요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '전쟁 뒤 영토를 정한 주체', cards: [{ id: 'a', text: '연합국(선언)' }, { id: 'b', text: '연합국 최고사령관(각서)' }, { id: 'c', text: '인터넷 투표' }], shuffle: false }, sequence: [{ pick: ['a', 'b'] }] },
          art: { draw: 'a paper-cut conference table after the war with several national flags and documents titled declaration and memorandum, a map of East Asia on the wall', banner: '전쟁 뒤, 영토는 누가 정했나?', extra: [{ motif: 'sun', x: 410, y: 58 }] },
        },
      }),
      M('intro.map', {
        title: '각서가 정한 범위 지도', method: '각서가 정한 범위 지도 보기', tool: 'map', minutes: 6,
        levels: { easy: '\'일본 범위에서 뺀 곳\' 칸을 색으로 보인 지도에서 독도에 핀이 꽂히는 시연을 본다.', base: '색 힌트 없이 일본 통치 범위 밖에 독도 핀이 꽂히는 시연을 본다.', challenge: '각서에 함께 적힌 울릉도·제주도까지 짚어 말한다.' },
        intro: {
          teacher: '"광복 직후 독도는 어느 쪽 범위에 있었을까요?" 1946년 1월 연합국 최고사령관 각서 제677호가 울릉도·독도·제주도를 일본의 통치·행정 범위에서 뺐다는 점을 외교부 누리집 서술대로 알리고, 어림 칸 지도에서 시연 단추로 독도 핀이 일본 범위 밖에 꽂히는 모습을 보인다. "그때 한국 땅이 새로 생긴 거예요?"라는 질문에는 "원래 우리 땅이 침탈에서 벗어난 것과 새로 생긴 것은 어떻게 다를까요?"라고 되묻는다. 이 지도는 범위를 보이려고 단순하게 그린 어림 지도라고 밝힌다.',
          student: '어림 칸 지도에서 일본 통치·행정 범위를 보고, 독도가 그 범위 안인지 밖인지 짚어요. 각서에 함께 적힌 섬도 찾아 말해요.',
          demo: { tool: 'map', options: Object.assign({}, SCAP, SCAP_HINT), sequence: [{ place: '독도' }] },
          art: { draw: 'a paper-cut map of the Korean peninsula and Japan in 1946 with a dotted boundary line drawn around Japan that leaves Ulleungdo, Dokdo and Jeju outside', banner: '1946년, 일본 범위 밖의 섬', extra: [{ motif: 'wave', y: 230 }] },
        },
        notes: '칸 지도는 어림이다. 각서 원문 지도는 외교부 독도 누리집에서 함께 보인다.',
      }),
      M('activity.line', {
        title: '1943~1946 문서 시간 띠', method: '1943~1946 문서 시간 띠', tool: 'timeline', minutes: 16,
        levels: { easy: '문서 카드 2장(카이로 선언·각서 제677호)을 차례로 놓고, 놓으면 바로 맞는지 알려 준다.', base: '문서 카드 3장(카이로·포츠담·제677호)을 차례로 놓고 연도 눈금에 문서를 잇는다.', challenge: '광복과 제1033호까지 5장을 놓고, 문서마다 설명 카드를 붙인다(함정 카드 포함).' },
        activity: {
          title: '1943~1946 문서 시간 띠', tool: 'timeline',
          teacher: '"전쟁 중에 나온 문서와 전쟁 뒤에 나온 문서는 무엇이 다를까요?" 카드를 시간 띠에 놓은 뒤 앞 문서의 원칙이 뒤 문서로 어떻게 이어지는지 말하게 한다. 포츠담 선언을 광복 뒤에 두는 학생에게 "1945년 7월과 8월 가운데 무엇이 먼저일까요?"라고 되묻는다. 평화선(1952)을 이 띠에 넣으려는 학생에게는 그 문서는 다음 시간의 것이라고 남겨 두게 한다.',
          task: '1943~1946년 전쟁 뒤 영토 처리 문서를 시간 띠에 차례로 놓고, 문서와 내용을 이어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            IT(OB('전쟁 뒤 영토 처리 문서를 옛날부터 차례로 놓으세요.', [DOCS[0], DOCS[1], DOCS[3]], AX),
              OB('문서 두 개를 옛날부터 차례로 놓으세요.', [DOCS[0], DOCS[3]], AX),
              OB('광복과 각서 두 개까지 옛날부터 차례로 놓으세요.', DOCS, AX)),
            IT(TM('연도 눈금에 알맞은 문서를 이어 보세요.', [['1943년', '카이로 선언', 1943], ['1945년', '포츠담 선언', 1945], ['1946년', '각서 제677호', 1946]], ['평화선 선언'], AX),
              TM('연도 눈금 두 곳에 알맞은 문서를 이어 보세요.', [['1943년', '카이로 선언', 1943], ['1946년', '각서 제677호', 1946]], [], AX)),
            IT(TM('문서마다 알맞은 내용을 이어 보세요.', [['카이로 선언', '탈취한 지역에서 일본 축출', 1943], ['포츠담 선언', '카이로 선언 이행', 1945], ['각서 제677호', '독도를 일본 범위에서 뺌', 1946]], [], AX),
              null,
              TM('문서마다 알맞은 내용을 이어 보세요(함정 카드 포함).', [['카이로 선언', '탈취한 지역에서 일본 축출', 1943], ['포츠담 선언', '카이로 선언 이행', 1945], ['각서 제677호', '독도를 일본 범위에서 뺌', 1946.1], ['각서 제1033호', '일본 배의 12해리 접근 금지', 1946.5]], ['독도를 일본에 넘김', '한국 섬 이름을 모두 적음'], AX),
              { conclude: '카이로·포츠담 선언의 원칙이 1946년 각서로 이어져, 독도는 일본의 통치·행정 범위에서 빠졌어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '문서와 연도, 내용을 써요.', columns: ['연도', '문서', '내용'], cells: [['1943', '', ''], ['1945', '', ''], ['1946', '', '']], answer: '카이로 선언·탈취 지역 축출, 포츠담 선언·카이로 이행, 각서 제677호·독도를 일본 범위에서 뺌' }] },
      }),
      M('activity.read', {
        title: '각서 문구 풀어 쓰기', method: '각서 문구 읽고 뜻 쓰기', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '빈칸 틀을 채워 문단마다 쓰고 기준 2개로 점검한다.', base: '두 각서의 내용을 문단마다 풀어 쓰고(모두 두 문장 이상) 기준 3개로 점검한다.', challenge: '마지막 문단에 각서를 근거로 쓸 때의 한계(지나친 해석) 한 줄을 더 쓴다.' },
        activity: {
          title: '각서 문구 풀어 쓰기', tool: 'rubric-writing',
          teacher: '"제677호와 제1033호는 각각 무엇을 정했나요?" 두 각서를 표로 나눠 칠판에 적고(통치·행정 범위 / 일본 배·선원의 12해리 접근 금지) 문단마다 풀어 쓰게 한다. "각서로 한국 땅이 새로 생겼다"고 쓰는 학생에게 "그럼 그 전에는 아니었다는 뜻이 될까요?"라고 되묻는다. 인용할 때는 번호·날짜·내용을 정확히 밝히게 한다.',
          task: '각서 제677호와 제1033호가 독도에 정한 내용을 풀어 쓰고, 정확하게 인용하는 문장을 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RW('첫 문단: 각서 제677호가 정한 내용을 풀어 쓰세요.',
              { topic: '첫 문단 — 1946년 1월 각서 제677호가 독도에 정한 내용을 번호·날짜를 넣어 한두 문장으로 쓰세요.', minChars: 25, maxChars: 180, minSentences: 1, maxSentences: 2, title: '각서 ① 제677호', lines: 3 },
              ['번호와 날짜를 썼다', '통치·행정 범위에서 뺐다고 썼다', '함께 적힌 섬(울릉도·제주도)을 썼다'],
              { prompt: '첫 문단: 틀을 채워 쓰세요.', toolOptions: { starter: '1946년 ___월 각서 제___호는 울릉도·독도·제주도를 일본의 ___ 범위에서 뺐다.' }, crit: ['번호와 날짜를 썼다', '통치·행정 범위에서 뺐다고 썼다'] }),
            RW('둘째 문단: 각서 제1033호가 정한 내용을 풀어 쓰세요.',
              { topic: '둘째 문단 — 1946년 6월 각서 제1033호가 독도에 정한 내용을 한두 문장으로 쓰세요.', minChars: 25, maxChars: 180, minSentences: 1, maxSentences: 2, title: '각서 ② 제1033호', lines: 3 },
              ['번호와 날짜를 썼다', '12해리 접근 금지를 썼다', '대상이 일본 배·선원임을 썼다'],
              { prompt: '둘째 문단: 틀을 채워 쓰세요.', toolOptions: { starter: '1946년 6월 각서 제1033호는 일본 ___과 ___이 독도 ___해리 안에 들어오지 못하게 했다.' }, crit: ['번호와 날짜를 썼다', '12해리 접근 금지를 썼다'] }),
            RW('셋째 문단: 두 각서를 정확하게 인용하는 문장을 쓰세요.',
              { topic: '셋째 문단 — 두 각서를 근거로 쓸 때 정확하게 인용하는 문장 하나를 쓰세요. 지나친 해석은 피해요.', minChars: 20, maxChars: 160, minSentences: 1, maxSentences: 2, title: '각서 ③ 정확한 인용', lines: 3 },
              ['각서가 말한 만큼만 썼다', '독도가 원래 우리 영토라는 점과 어긋나지 않는다', '출처를 밝혔다'],
              { prompt: '셋째 문단: 틀을 채워 쓰세요.', toolOptions: { starter: '외교부 누리집에 따르면 각서 제677호는 ___.' }, crit: ['각서가 말한 만큼만 썼다', '출처를 밝혔다'] },
              { prompt: '셋째 문단: 정확한 인용에 이어, "각서는 최종 결정이 아니다"라는 반론과 정부 설명을 한 줄 더 쓰세요.', toolOptions: { maxSentences: 3 }, crit: ['각서가 말한 만큼만 썼다', '독도가 원래 우리 영토라는 점과 어긋나지 않는다', '출처를 밝혔다', '반론과 정부 설명을 함께 썼다'] },
              { conclude: '각서를 근거로 쓸 때는 번호·날짜·내용을 정확히 밝히고, 각서가 말한 만큼만 말해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '두 각서를 견주어 써요.', columns: ['각서', '날짜', '정한 내용'], cells: [['제677호', '', ''], ['제1033호', '', '']], answer: '1946.1·울릉도·독도·제주도를 일본 통치·행정 범위에서 뺌, 1946.6·일본 배·선원 독도 12해리 접근 금지' }] },
      }),
      M('activity.who', {
        title: '누가 결정했나 나누기', method: '누가 결정했나 나누기', tool: 'sortboard', minutes: 16,
        levels: { easy: '결정 카드 3장을 \'연합국·한국·일본\' 바구니에 나누고, 틀리면 까닭을 말하고 되돌아온다.', base: '결정 카드 5장을 나누고, 두 각서의 내용과 인용 문장을 가른다.', challenge: '함정 카드(어느 바구니에도 맞지 않는 결정)를 남긴다.' },
        activity: {
          title: '누가 결정했나 나누기', tool: 'sortboard',
          teacher: '"이 결정은 누가 내렸나요?" 카드를 놓을 때마다 결정한 쪽과 그 결정이 독도에 무엇을 뜻하는지 한 문장으로 말하게 한다. 각서 제677호를 \'한국\'에 넣는 학생에게 "각서를 낸 곳은 연합국 최고사령관이었지요?"라고 되묻는다. 1951년 강화조약에서 일본이 한국 독립을 승인한 것은 일본이 서명한 결정이라는 점도 짚는다.',
          task: '광복 전후의 결정 카드를 결정한 쪽(연합국·한국·일본) 바구니에 나누고, 각서의 내용을 가려요.',
          levels: { easy: { live: true, instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            IT(SB('결정 카드를 결정한 쪽 바구니에 나누세요.', ['연합국', '한국', '일본'], [
              { id: 'u1', text: '카이로 선언(1943)', to: '연합국' }, { id: 'u2', text: '각서 제677호(1946)', to: '연합국' },
              { id: 'k1', text: '대한민국 정부 수립(1948)', to: '한국' }, { id: 'k2', text: '평화선 선언(1952)', to: '한국' },
              { id: 'j1', text: '강화조약에서 한국 독립 승인(1951)', to: '일본' }]),
              { prompt: '결정 카드 3장을 결정한 쪽 바구니에 나누세요.', toolOptions: { limit: 3, cards: [{ id: 'u1', text: '카이로 선언(1943)' }, { id: 'k1', text: '대한민국 정부 수립(1948)' }, { id: 'j1', text: '강화조약에서 한국 독립 승인(1951)' }] }, target: { sort: { 연합국: ['u1'], 한국: ['k1'], 일본: ['j1'] } } },
              { prompt: '결정 카드를 나누세요. 어느 쪽 결정도 아닌 카드는 남겨요.', toolOptions: { more: [{ id: 'x1', text: '독도 주민 투표로 결정' }, { id: 'x2', text: '인터넷 여론으로 결정' }] } }),
            IT(SB('내용을 \'제677호\'와 \'제1033호\' 바구니에 나누세요.', ['제677호(1946.1)', '제1033호(1946.6)'], [
              { id: 'a1', text: '일본 통치·행정 범위에서 독도를 뺌', to: '제677호(1946.1)' }, { id: 'a2', text: '울릉도·제주도와 함께 적음', to: '제677호(1946.1)' },
              { id: 'b1', text: '독도 12해리 안 접근 금지', to: '제1033호(1946.6)' }, { id: 'b2', text: '대상은 일본 배와 선원', to: '제1033호(1946.6)' }])),
            IT(SB('문장을 \'정확한 인용\'과 \'지나친 해석\'으로 나누세요.', ['정확한 인용', '지나친 해석'], [
              { id: 'c1', text: '제677호는 독도를 일본 범위에서 뺐다', to: '정확한 인용' }, { id: 'c2', text: '제1033호는 일본 배의 접근을 막았다', to: '정확한 인용' },
              { id: 'o1', text: '각서로 독도가 새로 생겼다', to: '지나친 해석' }, { id: 'o2', text: '각서 하나로 모든 쟁점이 끝났다', to: '지나친 해석' }]), null, null,
              { conclude: '전쟁 뒤 원칙은 연합국이, 각서는 연합국 최고사령관이, 정부 수립과 평화선은 한국이 결정했어요. 각서는 말한 만큼만 인용해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '각서 제677호를 결정한 쪽과 내용을 넣어 한 문장으로 써요.' }] },
      }),
      M('activity.dil', {
        title: '"임시 조치였다"는 말', method: '"임시 조치였다"는 말을 들었을 때', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림길 1번에서 고르고 결과 장면을 본다.', base: '갈림길 2번을 끝까지 가 본 뒤 알맞은 근거를 하나 이상 고른다.', challenge: '갈림길 2번을 간 뒤, 섞인 근거 가운데 맞는 근거 2장을 정확히 고른다.' },
        activity: {
          title: '"임시 조치였다"는 말', tool: 'dilemma',
          teacher: '"상대의 말에 사실이 들어 있다면, 무조건 부정하는 것이 좋을까요?" 일본 정부가 "각서는 최종 결정이 아니다"라고 주장하고, 우리 정부는 그 뒤 연합국이 이 조치를 바꾼 적이 없다고 설명한다는 점을 먼저 함께 읽는다. 무조건 부정하는 길을 고른 학생에게 끝 장면의 결과를 다시 읽게 한다. 각서로 독도가 \'새로 생겼다\'는 말이 왜 오히려 우리 근거를 약하게 하는지도 짚는다.',
          task: '1946년 각서를 두고 나온 말에 어떻게 답할지 길을 골라 결과를 보고, 끝에서 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '"각서는 임시 조치"라는 말을 들었어요. 한 번 골라 보세요.', base: '"각서는 임시 조치"라는 말을 들었어요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '"각서는 임시 조치"라는 말을 들었어요. 두 번 골라 끝까지 가고 맞는 근거 2장을 고르세요.' },
              '"임시 조치였다"', S1, [['grant', 'origin']], S1R, ['r1', 'r2'], { reasons: [{ id: 'r5', text: '반론은 못 들은 척한다' }], ok: ['r1', 'r2'] }),
            DIL({ easy: '"각서는 의미 없다"는 말을 들었어요. 한 번 골라 보세요.', base: '"각서는 의미 없다"는 말을 들었어요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '"각서는 의미 없다"는 말을 들었어요. 두 번 골라 끝까지 가고 맞는 근거 2장을 고르세요.' },
              '"각서는 의미 없다"', S2, [['flow', 'two']], S2R, ['r1', 'r2'], { reasons: [{ id: 'r5', text: '앞 문서는 볼 필요 없다' }], ok: ['r1', 'r2'] }),
            DIL({ easy: '카드뉴스에 지나친 문장이 들어갔어요. 한 번 골라 보세요.', base: '카드뉴스에 지나친 문장이 들어갔어요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '카드뉴스에 지나친 문장이 들어갔어요. 두 번 골라 끝까지 가고 맞는 근거 2장을 고르세요.' },
              '"각서 덕분에 생긴 독도"?', S3, [['fix', 'date']], S3R, ['r1', 'r2'], { reasons: [{ id: 'r5', text: '짧을수록 정확하다' }], ok: ['r1', 'r2'] },
              { conclude: '각서는 번호·날짜·내용을 정확히 인용하고, 상대 주장의 사실은 인정하되 정부 설명과 앞 문서의 원칙으로 쟁점을 짚어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '"각서는 최종 결정이 아니다"라는 주장에 대한 정부 설명으로 알맞은 것은?', options: ['그 뒤 연합국이 이 조치를 바꾼 적이 없다', '각서는 존재하지 않는다', '각서로 독도가 새로 생겼다'], answer: '그 뒤 연합국이 이 조치를 바꾼 적이 없다' }] },
      }),
      M('wrap.pair', {
        title: '짝에게 범위 1분 설명', method: '짝에게 범위 설명', tool: 'timer', minutes: 7, delivery: 'guided',
        levels: { easy: '설명 30초로 맞추고 짝이 점검 칸 2개를 표시한다.', base: '설명 1분·질문 30초로 맞추고 짝이 점검 칸 3개를 표시한다.', challenge: '설명 뒤 짝의 질문 하나에 각서 번호를 들어 답한다(교사 진행).' },
        wrap: {
          teacher: '"지도를 가리키며 1946년 각서가 정한 범위를 짝에게 1분 동안 설명해 볼까요?" 타이머를 설명·질문으로 맞추고 짝이 듣는 동안 점검 칸에 표시하게 한다. 설명이 "독도는 한국 땅이 됐다"로 끝나면 "각서가 정확히 무엇을 했다고 말할 수 있나요?"라고 다시 묻는다. 짝을 바꿔 한 번 더 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'timer', options: { title: '범위 1분 설명', labels: ['설명', '질문'], plan: { work: 30, rest: 20, rounds: 1 }, safety: ['각서 번호를 말했다', '1946년 1월을 말했다', '뺀 곳(울릉도·독도·제주도)을 말했다'] },
              prompt: '설명 60초·질문 30초를 2번(짝 바꿔) 하도록 맞추고, 짝의 설명에서 들은 칸을 표시해요.', target: { plan: { work: 60, rest: 30, rounds: 2 }, safety: true }, difficulty: 0.15 },
            { prompt: '설명 30초·질문 20초를 2번 하도록 맞추고, 들은 칸 두 개를 표시해요.', toolOptions: { safety: ['각서 번호를 말했다', '뺀 곳(울릉도·독도·제주도)을 말했다'] }, target: { plan: { work: 30, rest: 20, rounds: 2 }, safety: true } }),
            { type: 'choice', prompt: '각서 제677호를 근거로 말할 때 가장 정확한 문장은?', options: ['각서로 독도가 한국 땅으로 새로 정해졌다', '1946년 각서 제677호는 독도를 일본의 통치·행정 범위에서 뺐다', '각서는 독도와 관계없다'], answer: 1, difficulty: 0.2, explain: '각서가 말한 만큼, 번호·날짜·내용을 정확히 말해요.' },
          ],
        },
        worksheet: {
          title: '각서 범위 설명',
          items: [
            { type: 'check', prompt: '짝의 설명에 들어간 것에 표시해요.', options: ['각서 번호', '날짜', '뺀 곳(울릉도·독도·제주도)', '지도 가리키기'] },
            { type: 'short', prompt: '짝에게 받은 질문과 내 답을 써요.' },
          ],
        },
      }),
      M('wrap.bar', {
        title: '문서 사이 햇수 그래프', method: '문서 간 햇수 그래프', tool: 'chart', minutes: 7,
        levels: { easy: '막대 2개(1900·1946)를 그리고 값이 보인다.', base: '막대 3개(1900·1905·1946)를 그린다.', challenge: '고시부터 각서까지의 햇수를 읽고 흐름을 해석하는 문장을 고른다.' },
        wrap: {
          teacher: '"대한제국 수립(1897)을 출발점으로 두면, 칙령·고시·각서는 몇 해 뒤의 일일까요?" 막대를 그린 뒤 1905년 고시부터 1946년 각서까지 41년 동안 무엇이 있었는지(국권 피탈·광복) 함께 떠올린다. 막대가 긴 각서를 "가장 중요한 문서"로 읽는 학생에게 "막대 길이는 시간일 뿐 중요도는 아니에요"라고 짚는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'chart', options: CB('대한제국 수립(1897) 뒤 몇 해의 문서인가', '해', Y, { xLabel: '문서', yLabel: '지난 햇수', max: 50, scale: 10, step: 1 }),
              prompt: '표를 보고 세 문서의 막대를 그려요.', target: { build: true }, difficulty: 0.2 },
            { prompt: '표를 보고 두 문서의 막대를 그려요(값이 보여요).', toolOptions: { data: [Y[0], Y[2]], showValues: true } }),
            { type: 'tool', tool: 'chart', options: CR('대한제국 수립(1897) 뒤 몇 해의 문서인가', '해', Y, { xLabel: '문서', yLabel: '지난 햇수', max: 50, scale: 10, showValues: true, question: '시마네현 고시부터 각서 제677호까지 몇 해?' }), prompt: '고시부터 각서까지 몇 해가 지났는지 읽어 써요.', target: { value: 41 }, difficulty: 0.2 },
            { type: 'choice', prompt: '세 막대의 흐름을 바르게 해석한 문장은?', options: ['각서는 고시로 편입된 독도를 일본 범위에서 다시 뺀 문서다', '막대가 가장 긴 문서가 가장 중요하다', '세 문서는 서로 관계없다'], answer: 0, difficulty: 0.25, explain: '칙령 → 고시(침탈) → 각서(침탈에서 벗어남)로 이어져요.' },
          ],
        },
        worksheet: {
          title: '문서 사이 햇수',
          items: [
            { type: 'table', prompt: '세 문서의 연도를 써요.', columns: ['문서', '연도'], cells: [['칙령 제41호', ''], ['시마네현 고시', ''], ['각서 제677호', '']], answer: '1900, 1905, 1946' },
            { type: 'short', prompt: '1905년부터 1946년 사이에 독도 둘레에 있었던 큰 흐름을 한 줄로 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 9학년 · 강화조약 제2조의 섬 이름 (dokdo.m.g9-treaty) ====
  {
    const M = MK('g9-treaty', [9]);
    // 외교부 누리집: 한국에는 3천여 개의 섬이 있다(그래프에서는 어림값 3000으로 그린다)
    const COUNT = [['우리나라 섬(3천여 개, 어림)', 3000], ['조약에 이름이 적힌 섬', 3]];
    const ISL = { grid: [7, 5], title: '조약 제2조와 한국의 섬(어림 칸 지도)', places: [
      { name: '제주도', icon: 'island', at: [1, 4] }, { name: '거문도', icon: 'island', at: [2, 3] }, { name: '울릉도', icon: 'island', at: [4, 1] },
      { name: '독도', icon: 'island', at: [5, 1] }, { name: '백령도', icon: 'island', at: [0, 0] }, { name: '강화도', icon: 'island', at: [0, 1] }],
      regions: [{ name: '한반도', cells: [[1, 0], [1, 1], [1, 2], [2, 0], [2, 1], [2, 2]], color: 'cream' }] };
    const L1 = { text: '친구 도윤이 "강화조약에 독도 이름이 없으니 독도는 일본 땅으로 남은 거야"라고 말한다.', ask: '어떻게 답할까?', motif: 'cloud', choices: [
      { id: 'yes', text: '"이름이 없으면 그렇겠네"라고 한다', result: '적힌 섬이 무엇을 뜻하는지 따져 보지 못한다.', impact: [{ who: '도윤', text: '논리의 빈틈을 놓친다', tone: -1 }], why: '적힌 섬이 예시인지부터 따져 봐요.', ending: '논리의 빈틈을 놓쳤어요.' },
      { id: 'ex', text: '조약 문장의 "포함하는"이 예시인지 따져 보자고 한다', result: '"제주도·거문도·울릉도를 포함하는 한국"이라는 문장을 함께 읽는다.', impact: [{ who: '도윤', text: '문장을 다시 읽는다', tone: 1 }], end: '조약 문장을 다시 읽었어요.',
        next: { text: '도윤이 "그럼 왜 세 섬만 적었어?"라고 묻는다.', choices: [
          { id: 'many', text: '"한국에는 3천여 섬이 있어 대표적인 섬만 적었다고 정부가 설명해"라고 답한다', result: '도윤이 학급 명단 비유를 떠올리며 고개를 끄덕인다.', impact: [{ who: '도윤', text: '예시의 뜻을 안다', tone: 1 }] },
          { id: 'all', text: '"그럼 안 적힌 섬은 다 일본 땅이야"라고 답한다', result: '백령도·강화도도 일본 땅이 되는 이상한 결론이 나온다.', impact: [{ who: '도윤', text: '결론이 이상해진다', tone: -1 }], why: '그 논리라면 적히지 않은 다른 한국 섬도 모두 일본 땅이 돼요.' }] } }] };
    const L1R = [{ id: 'r1', text: '적힌 섬은 3천여 섬 가운데 대표적인 예시다' }, { id: 'r2', text: '"포함하는"은 적힌 것만이라는 뜻이 아니다' },
      { id: 'r3', text: '이름이 없으면 그 나라 땅이 아니다', why: '그렇다면 적히지 않은 다른 한국 섬도 모두 문제가 돼요.' }, { id: 'r4', text: '조약은 모든 섬을 빠짐없이 적는다', why: '조약은 대표적인 섬만 예로 들었어요.' }];
    const L2 = { text: '토론 상대가 "강화조약만 보면 되지, 그 전 문서는 상관없다"고 말한다.', ask: '어떻게 답할까?', motif: 'star', choices: [
      { id: 'only', text: '조약 문장만 두고 다툰다', result: '같은 문장을 서로 다르게 읽을 뿐 결론이 나지 않는다.', impact: [{ who: '청중', text: '판단이 어렵다', tone: -1 }], why: '조약을 만든 사람들도 앞 문서를 알고 있었어요. 함께 읽어요.', ending: '결론이 나지 않았어요.' },
      { id: 'prior', text: '카이로·포츠담 선언과 1946년 각서를 함께 본다', result: '조약이 앞 문서의 원칙을 이어받았다는 흐름이 드러난다.', impact: [{ who: '청중', text: '흐름을 본다', tone: 1 }], end: '앞 문서와 함께 읽었어요.',
        next: { text: '상대가 "각서와 조약이 다르면 어떡하죠?"라고 묻는다.', choices: [
          { id: 'same', text: '조약에 독도를 일본 땅으로 정한 문장이 없다는 점을 짚는다', result: '조약이 각서와 다르게 정했다는 근거가 없다는 점이 드러난다.', impact: [{ who: '청중', text: '쟁점이 분명해진다', tone: 1 }] },
          { id: 'guess', text: '"아마 같은 뜻일 거예요"라고만 답한다', result: '근거 없는 짐작이라 상대가 받아들이지 않는다.', impact: [{ who: '청중', text: '납득하지 못한다', tone: -1 }], why: '짐작 대신 문서에 무엇이 있고 없는지를 짚어요.' }] } }] };
    const L2R = [{ id: 'r1', text: '조약은 앞 문서들과 함께 읽는다' }, { id: 'r2', text: '조약에 독도를 일본 땅으로 정한 문장은 없다' },
      { id: 'r3', text: '마지막 문서만 보면 된다', why: '앞 문서의 원칙을 이어받았으니 함께 봐야 해요.' }, { id: 'r4', text: '짐작도 근거가 된다', why: '문서에 무엇이 있는지로 말해요.' }];
    const L3 = { text: '조약 해석 숙제를 하는데 익명 커뮤니티에 "조약 원문을 보면 독도는 일본 땅"이라는 글이 있다.', ask: '어떻게 할까?', motif: 'leaf', choices: [
      { id: 'copy', text: '그 글을 그대로 옮긴다', result: '출처를 물으면 답할 수 없다.', impact: [{ who: '나', text: '숙제의 근거가 약하다', tone: -1 }], why: '해석은 조약 원문과 공식 기관 설명에서 시작해요.', ending: '근거가 약한 숙제가 됐어요.' },
      { id: 'origin', text: '조약 원문과 외교부 누리집 설명을 먼저 찾는다', result: '조약 제2조 원문과 정부 설명을 함께 읽는다.', impact: [{ who: '나', text: '확인한 자료를 얻는다', tone: 1 }], end: '원문과 공식 설명을 찾았어요.',
        next: { text: '원문에는 독도 이름이 없다. 친구가 "그럼 커뮤니티 글이 맞는 거 아냐?"라고 한다.', choices: [
          { id: 'fact', text: '이름이 없는 것은 사실로 인정하고, 그 뜻을 예시 논리로 따진다', result: '사실과 해석을 나눠 차분히 정리한다.', impact: [{ who: '친구', text: '사실과 해석을 구별한다', tone: 1 }] },
          { id: 'deny', text: '"원문에도 독도가 있어"라고 우긴다', result: '원문을 다시 본 친구가 내 말을 믿지 않는다.', impact: [{ who: '친구', text: '믿음이 떨어진다', tone: -1 }], why: '있었던 사실을 부정하면 신뢰를 잃어요. 사실은 인정하고 해석을 따져요.' }] } }] };
    const L3R = [{ id: 'r1', text: '해석은 원문과 공식 기관 설명에서 시작한다' }, { id: 'r2', text: '사실은 인정하고 해석을 따진다' },
      { id: 'r3', text: '익명 글도 많이 읽히면 근거다', why: '많이 읽혀도 출처가 없으면 근거가 약해요.' }, { id: 'r4', text: '불리한 사실은 부정한다', why: '사실을 부정하면 신뢰를 잃어요.' }];

    ALL.push(
      M('intro.count', {
        title: '섬 수 막대로 견주기', method: '섬 목록 예시 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '두 막대(우리나라 섬·조약에 적힌 섬)를 보는 시연을 본다.', base: '두 막대와 눈금을 읽어 차이를 어림하는 시연을 본다.', challenge: '조약에 적힌 섬이 전체의 아주 작은 부분이라는 점을 비율로 말한다.' },
        intro: {
          teacher: '"우리나라 섬은 몇 개쯤일까요? 그리고 강화조약에는 몇 개가 적혀 있을까요?" 외교부 누리집이 한국에 3천여 개의 섬이 있다고 설명한다는 점을 알리고(그래프는 어림값 3000으로 그림), 시연 단추로 두 막대를 견주는 모습을 보인다. 1951년 강화조약 제2조가 "제주도·거문도·울릉도를 포함하는 한국"이라고 적었다는 점을 읽어 준다. "세 섬만 적었으면 나머지는 빠진 것"이라는 말에는 "\'포함하는\'이라는 말은 어떤 뜻일까요? 오늘 따져 봐요"라고 답한다.',
          student: '우리나라 섬 수와 조약에 이름이 적힌 섬 수를 막대로 견주어 보고, 왜 세 섬만 적었을지 짝과 어림해요.',
          demo: { tool: 'chart', options: CR('우리나라 섬과 조약에 적힌 섬', '개', COUNT, { xLabel: '구분', yLabel: '섬 수', max: 3000, scale: 500, showValues: true, question: '조약에 이름이 적힌 섬은 몇 개?', choices: ['3개', '30개', '3천여 개'] }), sequence: [{ pick: 0 }] },
          art: { draw: 'a paper-cut map of Korea dotted with thousands of tiny islands and three of them highlighted with name tags, next to a treaty document', banner: '3천여 섬, 그리고 이름 셋', extra: [{ motif: 'wave', y: 230 }] },
        },
        notes: '섬 수 3천여 개는 외교부 누리집 서술이다. 그래프 값 3000은 어림으로 그린 것이라고 밝힌다.',
      }),
      M('intro.ex', {
        title: '"예시"의 뜻 생활 예로', method: '"예시"의 뜻 생활 예로', tool: 'wordcards', minutes: 6,
        levels: { easy: '뜻 카드 2장 가운데 예시의 뜻을 고르는 시연을 본다.', base: '뜻 카드 3장(함정 1장) 가운데 고르는 시연을 본다.', challenge: '\'예를 들어\'가 들어간 생활 예를 하나 만들어 말한다.' },
        intro: {
          teacher: '"\'과일, 예를 들어 사과·배를 가져오세요\'라고 했는데 귤을 가져왔다면 틀린 걸까요?" 대답을 듣고 시연 단추로 \'여럿 가운데 몇 개를 보기로 든 것\' 카드가 담기는 모습을 보인다. 학급 안내문 "민수·지아 등 3반 학생"에 이름이 없는 학생도 3반이라는 비유를 함께 든다. 오늘은 강화조약 제2조의 섬 이름을 이 \'예시\'의 눈으로 읽는다고 밝힌다.',
          student: '"과일, 예를 들어 사과·배"에서 \'예시\'가 무슨 뜻인지 골라요. \'예를 들어\'가 들어간 생활 예를 짝과 하나 만들어 봐요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '"예시"의 뜻', cards: [{ id: 'a', text: '여럿 가운데 몇 개를 보기로 든 것' }, { id: 'b', text: '적힌 것만 해당한다는 뜻' }, { id: 'c', text: '가장 중요한 것 하나' }], shuffle: false }, sequence: [{ pick: ['a'] }] },
          art: { draw: 'a paper-cut fruit basket with an apple and a pear labeled as examples and other fruits like tangerines and grapes peeking out', banner: '"예를 들어"는 무슨 뜻?', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
        },
      }),
      M('activity.map', {
        title: '제2조 섬 지도에 표시', method: '제2조 섬 지도에 표시', tool: 'map', minutes: 16,
        levels: { easy: '이름이 보이는 지도에서 조약에 적힌 세 섬과 독도에 핀을 꽂고, 마지막 문항은 독도를 다시 찾는다.', base: '조약에 적힌 세 섬과, 적히지 않았지만 1946년 각서로 일본 범위에서 뺀 독도에 핀을 꽂는다.', challenge: '마지막 문항에서 조약에 적히지 않은 다른 한국 섬(백령도)까지 찾는다.' },
        activity: {
          title: '제2조 섬 지도에 표시', tool: 'map',
          teacher: '"조약에 적힌 세 섬은 한반도의 어느 쪽 바다에 있나요?" 세 섬에 핀을 꽂은 뒤 남쪽·남쪽·동쪽으로 흩어져 있다는 점을 짚고, 바다마다 대표 섬을 예로 든 것처럼 보이지 않는지 묻는다. 적히지 않은 백령도·강화도를 가리키며 "이 섬들도 이름이 없으니 일본 땅일까요?"라고 되묻는다. 지도는 어림 칸 지도라 자리만 대략 보인다고 밝힌다.',
          task: '강화조약 제2조에 이름이 적힌 섬과 적히지 않은 섬을 어림 칸 지도에서 찾아 핀을 꽂아요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '조약 제2조에 적힌 섬 가운데 남쪽 바다의 가장 큰 섬, 제주도에 핀을 꽂으세요.', toolOptions: ISL, target: { place: '제주도' } }),
            IT({ prompt: '조약 제2조에 적힌 섬, 거문도에 핀을 꽂으세요.', toolOptions: ISL, target: { place: '거문도' } }),
            IT({ prompt: '조약 제2조에 적힌 동해의 섬, 울릉도에 핀을 꽂으세요.', toolOptions: ISL, target: { place: '울릉도' } }),
            IT({ prompt: '조약에 이름은 없지만 1946년 각서로 일본 범위에서 뺀 섬에 핀을 꽂으세요.', toolOptions: ISL, target: { place: '독도' } },
              { prompt: '이름이 보이는 지도에서 독도에 핀을 꽂으세요.' },
              { prompt: '조약에 이름이 적히지 않은 서해의 한국 섬 가운데 백령도에 핀을 꽂으세요.', target: { place: '백령도' } },
              { conclude: '조약에 적힌 세 섬은 바다마다 대표적인 섬이에요. 이름이 없다고 일본 땅이라면 백령도 같은 섬도 문제가 되는 이상한 결론이 나와요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '조약에 이름이 적힌 섬과 적히지 않은 섬을 나눠 써요.', columns: ['적힌 섬', '적히지 않은 섬'], cells: [['', ''], ['', ''], ['', '']], answer: '제주도·거문도·울릉도 / 독도·백령도·강화도 등' }] },
        notes: '칸 지도는 어림이다. 섬의 실제 자리는 국토지리정보원 지도 등으로 함께 보인다.',
      }),
      M('activity.logic', {
        title: '"이름 없음→일본 땅" 깨기', method: '주장 논리 사슬 깨기', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림길 1번에서 고르고 결과 장면을 본다.', base: '갈림길 2번을 끝까지 가 본 뒤 알맞은 근거를 하나 이상 고른다.', challenge: '갈림길 2번을 간 뒤, 섞인 근거 가운데 맞는 근거 2장을 정확히 고른다.' },
        activity: {
          title: '"이름 없음→일본 땅" 깨기', tool: 'dilemma',
          teacher: '"\'이름이 없다 → 일본 땅이다\' 사슬의 어느 고리가 약할까요?" 세 상황을 끝까지 가 본 뒤, 사슬을 그대로 따라간 길이 어떤 이상한 결론에 닿는지 견주게 한다. "원문에도 독도가 있다"고 우기는 길을 고른 학생에게 "적히지 않은 것은 사실이에요. 사실은 인정하고 무엇을 따져야 할까요?"라고 되묻는다. 해석은 원문과 공식 기관 설명에서 시작한다는 점을 짚는다.',
          task: '"조약에 이름이 없으니 일본 땅"이라는 논리 사슬을 갈림길마다 따져 결과를 보고, 끝에서 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '"이름이 없으니 일본 땅"이라는 말을 들었어요. 한 번 골라 보세요.', base: '"이름이 없으니 일본 땅"이라는 말을 들었어요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '"이름이 없으니 일본 땅"이라는 말을 들었어요. 두 번 골라 끝까지 가고 맞는 근거 2장을 고르세요.' },
              '이름이 없으면?', L1, [['ex', 'many']], L1R, ['r1', 'r2'], { reasons: [{ id: 'r5', text: '적힌 섬의 수가 적을수록 조약이 정확하다' }], ok: ['r1', 'r2'] }),
            DIL({ easy: '"조약만 보면 된다"는 말을 들었어요. 한 번 골라 보세요.', base: '"조약만 보면 된다"는 말을 들었어요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '"조약만 보면 된다"는 말을 들었어요. 두 번 골라 끝까지 가고 맞는 근거 2장을 고르세요.' },
              '조약만 보면 될까?', L2, [['prior', 'same']], L2R, ['r1', 'r2'], { reasons: [{ id: 'r5', text: '앞 문서는 조약이 나오면 사라진다' }], ok: ['r1', 'r2'] }),
            DIL({ easy: '익명 글의 조약 해석을 봤어요. 한 번 골라 보세요.', base: '익명 글의 조약 해석을 봤어요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '익명 글의 조약 해석을 봤어요. 두 번 골라 끝까지 가고 맞는 근거 2장을 고르세요.' },
              '어디서 해석할까?', L3, [['origin', 'fact']], L3R, ['r1', 'r2'], { reasons: [{ id: 'r5', text: '댓글이 많은 해석이 맞다' }], ok: ['r1', 'r2'] },
              { conclude: '조약에 독도 이름이 없는 것은 사실이지만, 적힌 섬은 예시이고 조약은 앞 문서의 원칙을 이어받았어요. 사실은 인정하고 해석을 근거로 따져요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '"조약에 독도가 없으니 일본 땅"이라는 주장의 문제점으로 가장 알맞은 것은?', options: ['조약은 3천여 섬 가운데 대표적인 섬만 예로 들었다', '조약은 존재하지 않는다', '조약에 독도 이름이 있다'], answer: '조약은 3천여 섬 가운데 대표적인 섬만 예로 들었다' }] },
      }),
      M('activity.sort', {
        title: '조약 해석 문장 나누기', method: '조약 해석 문장 나누기', tool: 'sortboard', minutes: 16,
        levels: { easy: '해석 문장 4장을 \'타당·근거 부족\' 바구니에 나누고, 틀리면 까닭을 말하고 되돌아온다.', base: '해석 문장 6장을 나누고, 원문에 있는 것과 없는 것을 가른다.', challenge: '나눈 뒤 활동지에 근거 부족 문장 하나를 타당하게 고쳐 쓴다.' },
        activity: {
          title: '조약 해석 문장 나누기', tool: 'sortboard',
          teacher: '"이 해석은 조약 문장과 앞 문서를 근거로 하고 있나요?" 문장을 나눌 때마다 근거가 무엇인지 한 낱말로 말하게 한다. "조약이 영토를 새로 정했다"를 타당에 넣는 학생에게 "조약이 카이로·포츠담 원칙과 각서를 이어받았다면 \'새로\'라는 말이 맞을까요?"라고 되묻는다. 원문에 없는 것(독도 이름)은 없다고 인정하는 것이 타당한 해석의 출발이라고 짚는다.',
          task: '강화조약 해석 문장을 \'타당한 해석\'과 \'근거 부족\'으로 나누고, 원문에 있는 것과 없는 것을 가려요.',
          levels: { easy: { live: true, instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            IT(SB('조약 해석 문장을 \'타당한 해석\'과 \'근거 부족\'으로 나누세요.', ['타당한 해석', '근거 부족'], [
              { id: 'v1', text: '적힌 세 섬은 대표적인 예시다', to: '타당한 해석' }, { id: 'v2', text: '조약은 앞 문서의 원칙을 이었다', to: '타당한 해석' },
              { id: 'w1', text: '안 적힌 섬은 모두 일본 땅이다', to: '근거 부족' }, { id: 'w2', text: '조약이 영토를 새로 정했다', to: '근거 부족' },
              { id: 'v3', text: '독도를 일본 땅으로 정한 문장은 없다', to: '타당한 해석' }, { id: 'w3', text: '익명 글이 그렇게 말하니 맞다', to: '근거 부족' }]),
              { prompt: '해석 문장 4장을 두 바구니에 나누세요.', toolOptions: { limit: 4 }, target: { sort: { '타당한 해석': ['v1', 'v2'], '근거 부족': ['w1', 'w2'] } } }),
            IT(SB('내용을 \'조약 원문에 있음\'과 \'원문에 없음\'으로 나누세요.', ['원문에 있음', '원문에 없음'], [
              { id: 'y1', text: '일본은 한국의 독립을 승인한다', to: '원문에 있음' }, { id: 'y2', text: '제주도·거문도·울릉도를 포함하는 한국', to: '원문에 있음' },
              { id: 'n1', text: '독도라는 섬 이름', to: '원문에 없음' }, { id: 'n2', text: '독도는 일본 땅이라는 문장', to: '원문에 없음' }])),
            IT(SB('말을 \'일본 정부 주장\'과 \'반박 근거\'로 나누세요.', ['일본 정부 주장', '반박 근거'], [
              { id: 'c1', text: '조약에 독도가 없으니 일본 땅으로 남았다', to: '일본 정부 주장' }, { id: 'e1', text: '3천여 섬 가운데 대표만 적었다', to: '반박 근거' },
              { id: 'e2', text: '1946년 각서 제677호의 범위', to: '반박 근거' }, { id: 'e3', text: '카이로·포츠담 선언의 원칙', to: '반박 근거' }]), null, null,
              { conclude: '타당한 해석은 원문에 있는 것과 없는 것을 정직하게 가르고, 예시 논리와 앞 문서로 그 뜻을 따져요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '\'근거 부족\' 문장 하나를 골라 타당한 해석으로 고쳐 써요.' }] },
      }),
      M('activity.essay', {
        title: '조약 반박 단락 쓰기', method: '반박 단락 쓰기', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '빈칸 틀을 채워 문단마다 쓰고 기준 2개로 점검한다.', base: '주장 소개·예시 논리·각서 근거를 세 문단(다섯 문장 안팎)으로 쓰고 기준 3개로 점검한다.', challenge: '문단마다 출처를 밝히고 기준 4개로 점검한다.' },
        activity: {
          title: '조약 반박 단락 쓰기', tool: 'rubric-writing',
          teacher: '"반박 단락의 첫 문장은 상대 주장을 정확히 옮기는 것부터 시작해요." 일본 정부 주장을 정확히 소개한 뒤, 예시 논리와 1946년 각서 두 근거를 차례로 쓰게 한다. 상대 주장을 비웃는 말로 소개하는 학생에게 "정확히 옮겨야 정확히 반박할 수 있지 않을까요?"라고 되묻는다. 상대 근거 가운데 사실(독도 이름이 없음)은 인정하고 쓰게 한다.',
          task: '"조약에 독도가 없으니 일본 땅"이라는 주장을 예시 논리와 1946년 각서로 반박하는 단락을 쓰고, 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RW('첫 문단: 상대 주장을 정확히 소개하세요.',
              { topic: '첫 문단 — 일본 정부의 조약 해석 주장을 정확히 한 문장으로 옮기고, 사실인 부분(독도 이름이 없음)을 인정하는 문장을 쓰세요.', minChars: 25, maxChars: 180, minSentences: 2, maxSentences: 2, title: '반박 ① 주장 소개', lines: 3 },
              ['상대 주장을 정확히 옮겼다', '사실인 부분을 인정했다', '비웃는 표현이 없다'],
              { prompt: '첫 문단: 틀을 채워 쓰세요.', toolOptions: { starter: '일본 정부는 ___고 주장한다. 조약에 독도 이름이 없는 것은 ___.' }, crit: ['상대 주장을 정확히 옮겼다', '사실인 부분을 인정했다'] },
              { prompt: '첫 문단: 주장을 소개하고 그 주장의 출처를 밝히세요.', toolOptions: { maxSentences: 3 }, crit: ['상대 주장을 정확히 옮겼다', '사실인 부분을 인정했다', '비웃는 표현이 없다', '출처를 밝혔다'] }),
            RW('둘째 문단: 예시 논리로 반박하세요.',
              { topic: '둘째 문단 — "포함하는"과 3천여 섬 설명을 들어, 적힌 섬이 예시라는 반박을 두 문장으로 쓰세요.', minChars: 30, maxChars: 200, minSentences: 2, maxSentences: 2, title: '반박 ② 예시 논리', lines: 3 },
              ['"포함하는"의 뜻을 썼다', '3천여 섬 설명을 썼다', '안 적힌 섬 논리의 이상한 결론을 짚었다'],
              { prompt: '둘째 문단: 틀을 채워 쓰세요.', toolOptions: { starter: '조약은 "___를 포함하는 한국"이라고 적었다. 한국에는 ___개의 섬이 있어 대표적인 섬만 예로 든 것이다.' }, crit: ['"포함하는"의 뜻을 썼다', '3천여 섬 설명을 썼다'] },
              { prompt: '둘째 문단: 예시 논리로 반박하고 출처를 밝히세요.', toolOptions: { maxSentences: 3 }, crit: ['"포함하는"의 뜻을 썼다', '3천여 섬 설명을 썼다', '안 적힌 섬 논리의 이상한 결론을 짚었다', '출처를 밝혔다'] }),
            RW('셋째 문단: 1946년 각서로 반박을 마무리하세요.',
              { topic: '셋째 문단 — 1946년 각서 제677호와 앞 문서의 원칙을 들어 반박을 한두 문장으로 마무리하세요.', minChars: 25, maxChars: 180, minSentences: 1, maxSentences: 2, title: '반박 ③ 각서와 마무리', lines: 3 },
              ['각서 번호·내용을 썼다', '앞 문서와 조약을 이었다', '결론을 분명히 썼다'],
              { prompt: '셋째 문단: 틀을 채워 마무리하세요.', toolOptions: { starter: '또 1946년 각서 제677호는 독도를 ___. 따라서 조약에 이름이 없다는 것만으로 ___.' }, crit: ['각서 번호·내용을 썼다', '결론을 분명히 썼다'] },
              { prompt: '셋째 문단: 각서로 마무리하고 출처를 밝히세요.', toolOptions: { maxSentences: 3 }, crit: ['각서 번호·내용을 썼다', '앞 문서와 조약을 이었다', '결론을 분명히 썼다', '출처를 밝혔다'] },
              { conclude: '좋은 반박 단락은 상대 주장을 정확히 옮기고, 사실은 인정하며, 예시 논리와 앞 문서로 그 해석의 문제를 짚어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내 반박 단락에서 가장 힘 있는 문장 하나를 옮겨 써요.' }] },
      }),
      M('wrap.peer', {
        title: '짝 반박 단락 점검', method: '짝 단락 점검', tool: 'timer', minutes: 7, delivery: 'guided',
        levels: { easy: '짝 단락에서 기준 칸 1개(예시 논리)만 점검한다.', base: '짝 단락에서 기준 칸 3개를 점검하고 하나를 고쳐 준다.', challenge: '고칠 점을 말할 때 고친 문장까지 제안한다(교사 진행).' },
        wrap: {
          teacher: '"짝의 반박 단락을 90초 동안 읽고, 30초 동안 한 가지를 고쳐 주세요." 타이머를 읽기·고쳐 주기로 맞추고 짝을 바꿔 한 번 더 하게 한다. 고칠 점이 "좋아"로 끝나면 "기준표의 세 칸 가운데 가장 약한 칸은 어디였나요?"라고 묻는다. 받은 쪽은 고마움을 말하고 그 자리에서 한 문장을 고친다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'timer', options: { title: '짝 단락 점검', labels: ['읽기', '고쳐 주기'], plan: { work: 60, rest: 20, rounds: 1 }, safety: ['예시 논리를 썼다', '각서 제677호를 썼다', '정중하게 썼다'] },
              prompt: '읽기 90초·고쳐 주기 30초를 2번 하도록 맞추고, 짝 단락에서 지킨 칸을 표시해요.', target: { plan: { work: 90, rest: 30, rounds: 2 }, safety: true }, difficulty: 0.15 },
            { prompt: '읽기 90초·고쳐 주기 30초를 2번 맞추고, 예시 논리 칸을 표시해요.', toolOptions: { safety: ['예시 논리를 썼다'] } }),
            { type: 'choice', prompt: '짝의 단락이 상대 주장을 비웃는 말로 시작할 때 고쳐 줄 말로 알맞은 것은?', options: ['"더 세게 비웃어"', '"상대 주장을 정확히 옮기면 반박이 더 단단해져"', '"그냥 둬"'], answer: 1, difficulty: 0.15, explain: '정확히 옮겨야 정확히 반박할 수 있어요.' },
            { type: 'short', prompt: '짝에게 받은 고칠 점을 반영해 고친 문장 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '짝 단락 점검',
          items: [
            { type: 'check', prompt: '짝 단락에서 지킨 칸에 표시해요.', options: ['상대 주장을 정확히 옮겼다', '예시 논리를 썼다', '각서 제677호를 썼다', '정중하게 썼다'] },
            { type: 'short', prompt: '짝에게 고쳐 준 점을 한 문장으로 써요.' },
          ],
        },
      }),
      M('wrap.sum', {
        title: '조약 쟁점 생각그물', method: '조약 쟁점 생각그물', tool: 'mindmap', minutes: 7,
        levels: { easy: '가지 2개(제2조·예시)에 카드를 붙인다.', base: '가지 3개(제2조·예시·각서)에 카드를 붙인다.', challenge: '함정 카드가 섞인 판에서 붙이고, 가지마다 출처를 활동지에 쓴다.' },
        wrap: {
          teacher: '"조약 쟁점을 세 가지로 묶으면 무엇이 남을까요?" 가지를 채운 뒤 가지마다 친구에게 한 문장으로 설명하게 한다. \'안 적힌 섬은 일본 땅\' 카드를 가지에 붙인 학생에게 "그 카드는 쟁점의 근거일까요, 따져야 할 주장일까요?"라고 되묻는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '강화조약 제2조 쟁점', slots: ['제2조 원문', '예시 논리', '1946년 각서'], cards: [
              { id: 'a1', text: '한국 독립 승인' }, { id: 'a2', text: '제주도·거문도·울릉도를 포함' }, { id: 'b1', text: '3천여 섬 가운데 대표' }, { id: 'b2', text: '"포함하는" = 적힌 것만 아님' },
              { id: 'c1', text: '제677호: 일본 범위에서 뺌' }, { id: 'c2', text: '제1033호: 12해리 접근 금지' }] },
              prompt: '조약 쟁점 카드를 세 가지에 나눠 붙여요.', target: { sort: { '제2조 원문': ['a1', 'a2'], '예시 논리': ['b1', 'b2'], '1946년 각서': ['c1', 'c2'] } }, difficulty: 0.2 },
            { prompt: '조약 쟁점 카드를 두 가지에 나눠 붙여요.', toolOptions: { slots: ['제2조 원문', '예시 논리'], cards: [{ id: 'a1', text: '한국 독립 승인' }, { id: 'a2', text: '제주도·거문도·울릉도를 포함' }, { id: 'b1', text: '3천여 섬 가운데 대표' }, { id: 'b2', text: '"포함하는" = 적힌 것만 아님' }] }, target: { sort: { '제2조 원문': ['a1', 'a2'], '예시 논리': ['b1', 'b2'] } } },
            { toolOptions: { cards: [{ id: 'a1', text: '한국 독립 승인' }, { id: 'a2', text: '제주도·거문도·울릉도를 포함' }, { id: 'b1', text: '3천여 섬 가운데 대표' }, { id: 'b2', text: '"포함하는" = 적힌 것만 아님' }, { id: 'c1', text: '제677호: 일본 범위에서 뺌' }, { id: 'c2', text: '제1033호: 12해리 접근 금지' }, { id: 't1', text: '안 적힌 섬은 일본 땅' }, { id: 't2', text: '익명 커뮤니티 해석' }] } }),
            { type: 'choice', prompt: '강화조약 제2조에 이름이 적힌 섬이 아닌 것은?', options: ['제주도', '독도', '울릉도'], answer: 1, difficulty: 0.15, explain: '제2조에는 제주도·거문도·울릉도가 적혀 있어요.' },
          ],
        },
        worksheet: {
          title: '조약 쟁점 정리',
          items: [
            { type: 'table', prompt: '가지마다 기억할 것과 출처를 써요.', columns: ['가지', '기억할 것', '출처'], cells: [['제2조 원문', '', ''], ['예시 논리', '', ''], ['1946년 각서', '', '']], answer: '세 섬을 포함하는 한국·조약, 3천여 섬 가운데 대표·외교부 누리집, 일본 범위에서 뺌·각서 제677호' },
            { type: 'short', prompt: '조약 쟁점을 초등학생에게 설명하듯 한 문장으로 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 9학년 · 평화선, 수비대에서 경비대까지, 실효적 지배 (dokdo.m.g9-control) ====
  // 의용수비대·경찰 경비의 연도는 쓰지 않는다(g9 단원과 같은 원칙). 실효적 지배 = 평화적·계속적·공개적 국가 권한 행사(기초 수준).
  {
    const M = MK('g9-control', [9]);
    const AX = { axis: ['옛날', '오늘날'] };
    const FLOW = [{ id: 'f1', text: '평화선 선언(1952)' }, { id: 'f2', text: '울릉도 주민의 독도의용수비대' }, { id: 'f3', text: '경찰이 경비를 이어받음' }, { id: 'f4', text: '오늘의 독도경비대' }];
    const PEACE = { grid: [7, 4], title: '평화선과 독도(어림 칸 지도)', places: [{ name: '울릉도', icon: 'island', at: [2, 1] }, { name: '독도', icon: 'island', at: [4, 1] }],
      regions: [{ name: '한반도', cells: [[0, 0], [0, 1], [0, 2], [0, 3]], color: 'cream' }, { name: '평화선 안 바다', cells: [[1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [1, 1], [3, 1], [5, 1], [1, 2], [2, 2], [3, 2], [4, 2], [5, 2]], color: 'sky' }] };
    // 독도 주권 행사 사례 10개를 우리 반이 분류한 결과(가상) — 분류 칸은 g9·g10 단원의 영역(행정·경비·보호·시설)
    const KINDS = [['행정', 3], ['경비', 3], ['보호', 2], ['시설', 2]];
    const SC = (text, ask, good, bad, why, next, endGood) => ({ text, ask, motif: 'wave', choices: ((cs) => (text.length % 2 ? cs.reverse() : cs))([
      Object.assign({ id: good[0], text: good[1], result: good[2], impact: [{ who: '내 판단', text: '조건에 맞게 가렸다', tone: 1 }] }, next ? { next, end: endGood } : {}),
      { id: bad[0], text: bad[1], result: bad[2], impact: [{ who: '내 판단', text: '조건을 놓쳤다', tone: -1 }], why, ending: '조건을 다시 살펴봐요.' }]) });
    const CA = SC('사례 ① 독도경비대가 섬에 머물며 경비한다.', '이 일은 어떤 주권 행사일까?', ['ok', '평화적·계속적인 국가의 경비', '국가가 끊기지 않고 평화롭게 섬을 지키는 일이에요.'], ['force', '다른 나라 땅을 힘으로 빼앗는 일', '이미 다스리는 섬을 지키는 일과 빼앗는 일은 달라요.'], '경비대는 우리 영토를 평화롭게, 꾸준히 지켜요.',
      SC('사례 ② 독도에 경상북도 울릉군 울릉읍 독도리라는 주소가 있다.', '이 일은 어떤 성격일까?', ['ok2', '공개적인 행정 — 누구나 알 수 있다', '행정 구역과 주소를 공개해 다스리는 일이에요.'], ['secret', '숨겨 둔 비밀 조치', '주소는 누구나 볼 수 있게 공개돼 있어요.'], '주소는 공개된 행정이에요.',
        SC('사례 ③ 독도 등대를 운영하고 천연보호구역으로 관리한다.', '이 일은 무엇일까?', ['ok3', '시설과 환경 보호도 주권 행사다', '바다 길을 밝히고 자연을 지키는 것도 국가 권한의 행사예요.'], ['notgov', '주권과 상관없는 일이다', '시설을 두고 자연을 지키는 것도 국가가 다스리는 일이에요.'], '시설·보호도 국가 권한의 행사예요.'), '주소가 공개된 행정임을 가렸어요.'), '경비의 성격을 가렸어요.');
    const CB2 = SC('사례 ① 힘이 센 나라가 다른 나라 섬을 무력으로 빼앗았다.', '이것은 정당한 실효적 지배일까?', ['no', '아니다 — 평화적이지 않다', '무력으로 빼앗은 것은 정당한 지배로 인정받지 못해요.'], ['yes', '그렇다 — 차지했으니 된다', '평화적이라는 조건을 어겼어요.'], '실효적 지배의 첫 조건은 평화적이라는 점이에요.',
      SC('사례 ② 어떤 나라가 섬에 몰래 표지만 세우고 아무에게도 알리지 않았다.', '이것은 실효적 지배일까?', ['no2', '아니다 — 공개적·계속적이지 않다', '몰래 한 번 한 일은 꾸준하고 공개된 다스림이 아니에요.'], ['yes2', '그렇다 — 표지를 세웠으니 된다', '공개·계속이라는 조건이 빠졌어요.'], '몰래, 한 번 한 일은 실효적 지배가 아니에요.',
        SC('사례 ③ 지도에 섬 이름만 적고 실제로는 아무것도 하지 않았다.', '이것은 실효적 지배일까?', ['no3', '아니다 — 실제로 다스리지 않았다', '이름만 적는 것은 실제 행정·관리가 아니에요.'], ['yes3', '그렇다 — 지도에 적었으니 된다', '실제 다스림이 따라야 해요.'], '실제 행정·관리가 따라야 해요.'), '몰래 한 일을 가렸어요.'), '무력은 조건에 맞지 않음을 가렸어요.');
    const CC = SC('사례 ① 1900년 칙령 제41호로 울도군이 석도를 관할했다.', '이 일은 어떤 주권 행사일까?', ['law', '법령으로 공개한 행정', '중앙 정부 법령을 관보에 실어 공개했어요.'], ['none', '주권과 상관없는 일', '법으로 관할을 정한 것은 주권 행사예요.'], '칙령은 법령으로 공개한 행정이에요.',
      SC('사례 ② 1952년 평화선 선언에 독도가 들어 있었다.', '이 일은 어떤 성격일까?', ['decl', '국가가 인접 바다 주권을 공개적으로 밝힌 일', '대통령 선언으로 인접 바다의 주권을 밝혔어요.'], ['private', '민간 단체의 의견', '평화선은 대통령 선언이었어요.'], '평화선은 국가의 공개 선언이에요.',
        SC('사례 ③ 오늘 독도경비대가 섬에 머물며 경비한다.', '1900년부터 오늘까지를 함께 보면?', ['cont', '국가의 다스림이 이어진 계속적인 지배', '칙령부터 오늘까지 다스림이 이어져 왔어요.'], ['once', '오늘만 따로 떨어진 일', '과거와 오늘의 사례가 하나로 이어져요.'], '시간 띠로 이어 보면 계속성이 보여요.'), '평화선의 성격을 가렸어요.'), '칙령의 성격을 가렸어요.');
    const CR = [{ id: 'r1', text: '평화롭게 다스린다' }, { id: 'r2', text: '끊기지 않고 꾸준히 다스린다' },
      { id: 'r3', text: '힘이 세면 차지할 수 있다', why: '무력으로 빼앗은 것은 정당한 지배로 인정받지 못해요.' }, { id: 'r4', text: '지도에 이름만 적어도 된다', why: '실제 행정·관리가 따라야 해요.' }];
    const CRM = { depth: 3, reasons: [{ id: 'r5', text: '누구나 알 수 있게 공개한다' }] };

    ALL.push(
      M('intro.img', {
        title: '오늘 독도에서 국가가 하는 일', method: '오늘 독도 사진 장면 보고 하는 일 고르기', tool: 'wordcards', minutes: 6,
        levels: { easy: '장면 카드 가운데 국가가 하는 일 2장을 고르는 시연을 본다.', base: '장면 카드 가운데 국가가 하는 일 3장을 고르는 시연을 본다.', challenge: '국가가 하는 일 4장을 모두 골라 말한다.' },
        intro: {
          teacher: '"오늘 독도에서 국가는 어떤 일을 하고 있을까요?" 독도 사진(외교부 누리집 자료)을 보이고 시연 단추로 경비·등대·주소 같은 카드가 담기는 모습을 보인다. "관광객이 사진 찍는 것도 국가의 일"이라는 말에는 "그 일은 누가 하는 일인가요?"라고 되묻는다. 오늘은 1952년 평화선부터 오늘의 독도경비대까지 이어진 지킴과, 국가가 영토를 실제로 다스린다는 실효적 지배의 뜻을 익힌다고 밝힌다.',
          student: '오늘 독도의 장면 카드 가운데 국가가 하는 일을 골라요. 고르지 않은 카드는 누가 하는 일인지 짝과 말해요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '국가가 하는 일', cards: [{ id: 'a', text: '독도경비대가 섬을 경비' }, { id: 'b', text: '독도 등대 운영' }, { id: 'c', text: '주소: 울릉군 울릉읍 독도리' }, { id: 'd', text: '관광객이 사진 찍기' }, { id: 'e', text: '괭이갈매기가 날기' }], shuffle: false }, sequence: [{ pick: ['a', 'b', 'c'] }] },
          art: { draw: 'a paper-cut scene of Dokdo islets today with a small lighthouse, a guard post with a Korean flag, and seagulls over calm blue sea', banner: '오늘 독도에서 국가가 하는 일', extra: [{ motif: 'bird', x: 330, y: 90 }] },
        },
      }),
      M('intro.ask', {
        title: '"힘으로 차지하면 될까" 첫 생각', method: '"힘으로 차지하면 될까" 첫 생각', tool: 'emotion', minutes: 6,
        levels: { easy: '의견 2개에 공감 정도를 잇는 시연을 본다.', base: '의견 3개에 공감 정도를 잇는 시연을 본다.', challenge: '가장 공감하는 의견의 까닭을 말한다.' },
        intro: {
          teacher: '"한 번 깃발을 꽂은 것, 힘으로 차지한 것, 오랫동안 평화롭게 다스려 온 것 — 어느 쪽이 그 땅의 주인일까요?" 의견 카드에 공감 정도를 잇는 시연은 한 학생의 생각 예시일 뿐 정답이 아니라고 먼저 밝힌다. "힘이 센 나라가 차지하면 끝"이라는 생각에는 "그렇다면 왜 국제법은 \'평화롭게\'라는 조건을 붙였을까요?"라고 되묻는다. 첫 생각은 수업 뒤에 다시 돌아본다.',
          student: '세 의견을 읽고 내가 얼마나 공감하는지 생각해요. 공감 정도는 사람마다 달라도 돼요 — 까닭을 짝과 말해요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 's1', label: '"힘이 센 나라가 먼저 차지하면 주인"' }, { id: 's2', label: '"깃발을 한 번 꽂으면 주인"' }, { id: 's3', label: '"오래 평화롭게 다스려 온 나라가 주인"' }], cards: [{ id: 'k1', text: '공감 안 해요' }, { id: 'k2', text: '잘 모르겠어요' }, { id: 'k3', text: '공감해요' }], shuffle: false }, sequence: [{ match: { s1: 'k1', s2: 'k2', s3: 'k3' } }] },
          art: { draw: 'three paper-cut speech bubbles above a small island, one with a fist, one with a single flag, one with a calendar and a lighthouse', banner: '어느 쪽이 주인일까?', extra: [{ motif: 'cloud', x: 110, y: 52 }] },
        },
        notes: '시연은 한 학생의 생각 예시다. 첫 생각은 채점하지 않는다.',
      }),
      M('activity.line', {
        title: '1952~오늘 지킴 흐름', method: '1952~오늘 지킴 흐름', tool: 'timeline', minutes: 16,
        levels: { easy: '카드 3장(평화선·의용수비대·독도경비대)을 차례로 놓고, 놓으면 바로 맞는지 알려 준다.', base: '카드 4장(경찰이 이어받음 더함)을 차례로 놓고, 지킨 주체를 민간·국가로 나눈다.', challenge: '1900년 칙령부터 이어지는 연도 눈금에 사건을 잇는다(함정 카드 포함).' },
        activity: {
          title: '1952~오늘 지킴 흐름', tool: 'timeline',
          teacher: '"독도를 지켜 온 주체는 시대마다 어떻게 바뀌었나요?" 카드를 놓은 뒤 주민이 먼저 지키다가 경찰이 이어받아 오늘의 독도경비대가 되었다는 흐름을 말하게 한다. 경찰 경비를 의용수비대보다 앞에 두는 학생에게 "누가 먼저 나섰고 누구에게 임무를 넘겼을까요?"라고 되묻는다. 의용수비대의 활동 연도는 오늘 다루지 않고 차례만 본다고 밝힌다.',
          task: '1952년 평화선 선언부터 오늘의 독도경비대까지 독도를 지켜 온 흐름을 차례로 놓고, 지킨 주체를 나눠요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            IT(OB('1952년부터 오늘까지 독도를 지켜 온 흐름을 차례로 놓으세요.', FLOW, AX),
              OB('카드 세 장을 차례로 놓으세요.', [FLOW[0], FLOW[1], FLOW[3]], AX)),
            IT({ prompt: '지킨 일을 \'민간이 지킴\'과 \'국가가 지킴\'으로 나누세요.', toolOptions: { mode: 'sort', slots: ['민간이 지킴', '국가가 지킴'], cards: [{ id: 'm1', text: '울릉도 주민의 의용수비대' }, { id: 'g1', text: '평화선 선언' }, { id: 'g2', text: '경찰의 독도 경비' }, { id: 'g3', text: '오늘의 독도경비대' }], axis: ['옛날', '오늘날'] }, target: { sort: { '민간이 지킴': ['m1'], '국가가 지킴': ['g1', 'g2', 'g3'] } } }),
            IT(TM('연도 눈금에 국가의 일을 이어 보세요.', [['1900년', '칙령 제41호로 관할', 1900], ['1948년', '대한민국 정부 수립', 1948], ['1952년', '평화선 선언', 1952]], [], AX),
              null,
              TM('연도 눈금에 국가의 일을 이어 보세요(함정 카드 포함).', [['1900년', '칙령 제41호로 관할', 1900], ['1948년', '대한민국 정부 수립', 1948], ['1952년', '평화선 선언', 1952]], ['시마네현 고시', '태정관 지령'], AX),
              { conclude: '독도는 주민의 의용수비대에서 경찰, 오늘의 독도경비대로 지킴이 이어졌고, 그 바탕에는 칙령부터 평화선까지 국가의 다스림이 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '독도를 지켜 온 흐름을 차례로 써요.', columns: ['차례', '지킨 일', '주체'], cells: [['1', '', ''], ['2', '', ''], ['3', '', '']], answer: '평화선 선언·국가, 의용수비대·민간, 독도경비대·국가' }] },
        notes: '의용수비대·경찰 경비의 연도는 쓰지 않는다. 활동 사실은 국가보훈부·동북아역사재단 자료로 확인해 말한다.',
      }),
      M('activity.map', {
        title: '평화선과 독도 지도', method: '평화선과 독도 지도', tool: 'map', minutes: 16,
        levels: { easy: '\'평화선 안 바다\' 이름이 보이는 지도에서 핀을 꽂는다.', base: '바다 이름 없이 색만 보이는 지도에서 핀을 꽂는다.', challenge: '마지막 문항에서 평화선 선언이 어떤 선언이었는지 한 줄 설명 보기를 고른다.' },
        activity: {
          title: '평화선과 독도 지도', tool: 'map',
          teacher: '"독도 둘레 바다는 평화선 안에 있을까요?" 어림 칸 지도에서 독도와 그 둘레 바다 칸에 핀을 꽂게 한다. "평화선은 독도만을 위한 선"이라는 학생에게 "선언의 이름이 \'인접 해양의 주권\'이라면 어디까지를 말할까요?"라고 되묻는다. 지도는 선의 자리를 보이려고 단순하게 그린 어림 지도라고 밝힌다.',
          task: '어림 칸 지도에서 독도와 그 둘레 바다가 1952년 평화선 안에 들었는지 핀을 꽂아 확인해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '평화선 안 바다에 있는 섬, 독도에 핀을 꽂으세요.', toolOptions: PEACE, target: { place: '독도' } }, null, null),
            IT({ prompt: '독도 바로 동쪽 바다 칸에 핀을 꽂고, 평화선 안인지 보세요.', toolOptions: PEACE, target: { from: '독도', dir: '동', steps: 1 } },
              null,
              { prompt: '바다 이름이 숨겨진 지도에서 독도 바로 동쪽 바다 칸에 핀을 꽂으세요.', toolOptions: { regionNames: false } }),
            IT({ prompt: '지도를 보고 질문에 답하세요.', toolOptions: Object.assign({}, PEACE, { readOnly: true, ask: { q: '독도와 그 둘레 바다는 평화선 안에 있나요?', choices: ['평화선 안', '평화선 밖', '알 수 없음'] } }), target: { pick: 0 } },
              null,
              { prompt: '지도를 보고, 평화선 선언에 대한 설명으로 알맞은 것을 고르세요.', toolOptions: { ask: { q: '평화선 선언은?', choices: ['대통령 선언으로 인접 바다의 주권을 밝혔다', '민간 단체가 독도에만 그은 선이다', '일본과 함께 정한 선이다'] } }, target: { pick: 0 } },
              { conclude: '1952년 평화선 선언은 대통령 선언으로 독도를 포함한 인접 바다의 주권을 밝혔어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '1952년 평화선 선언에 대한 설명으로 알맞은 것은?', options: ['대통령 선언으로 독도를 포함한 인접 바다의 주권을 밝혔다', '독도에만 그은 선이다', '민간 단체의 선언이다'], answer: '대통령 선언으로 독도를 포함한 인접 바다의 주권을 밝혔다' }] },
        notes: '칸 지도는 어림이다. 평화선의 실제 범위 지도는 외교부 독도 누리집 자료로 함께 보인다.',
      }),
      M('activity.cond', {
        title: '실효적 지배 사례 판정', method: '실효적 지배 조건 사례 판정', tool: 'dilemma', minutes: 16,
        levels: { easy: '사례 1개(갈림길 1번)를 조건에 대어 고른다.', base: '사례 2개(갈림길 2번)를 차례로 판정하고 근거를 하나 이상 고른다.', challenge: '사례 3개(갈림길 3번)를 판정하고 근거를 하나 이상 고른다.' },
        activity: {
          title: '실효적 지배 사례 판정', tool: 'dilemma',
          teacher: '"이 사례는 평화적인가요, 계속적인가요, 공개적인가요?" 사례마다 세 조건을 칠판에 적어 두고 하나씩 대어 보게 한다. "무력으로 빼앗아도 오래 다스리면 된다"는 학생에게 "평화적이라는 첫 조건은 어떻게 되나요?"라고 되묻는다. 독도의 실효적 지배는 원래 우리 영토에 대한 주권 행사라는 점에서 출발한다는 것도 짚는다.',
          task: '사례마다 실효적 지배의 조건(평화적·계속적·공개적)에 맞는지 갈림길에서 판정하고, 끝에서 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '오늘 독도의 사례 하나를 판정해요.', base: '오늘 독도의 사례 두 개를 차례로 판정하고 근거를 고르세요.', challenge: '오늘 독도의 사례 세 개를 차례로 판정하고 근거를 고르세요.' },
              '오늘 독도의 주권 행사', CA, [['ok', 'ok2', 'ok3']], CR, ['r1', 'r2'], CRM),
            DIL({ easy: '실효적 지배가 아닌 사례 하나를 판정해요.', base: '헷갈리는 사례 두 개를 차례로 판정하고 근거를 고르세요.', challenge: '헷갈리는 사례 세 개를 차례로 판정하고 근거를 고르세요.' },
              '실효적 지배일까 아닐까', CB2, [['no', 'no2', 'no3']], CR, ['r1', 'r2'], CRM),
            DIL({ easy: '1900년 사례 하나를 판정해요.', base: '1900년과 1952년 사례를 판정하고 근거를 고르세요.', challenge: '1900년부터 오늘까지 사례 세 개를 판정하고 근거를 고르세요.' },
              '1900년부터 오늘까지', CC, [['law', 'decl', 'cont']], CR, ['r1', 'r2'], CRM,
              { conclude: '실효적 지배는 국가가 평화롭게, 끊기지 않고, 공개적으로 권한을 행사하는 것이에요. 독도에서는 칙령부터 오늘까지 그 다스림이 이어져요.' }),
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '실효적 지배가 인정받는 데 필요한 조건에 표시해요.', options: ['평화적', '계속적', '공개적', '무력으로 빼앗음'] }] },
      }),
      M('activity.chart', {
        title: '주권 행사 사례 분류 그래프', method: '주권 행사 사례 분류표', tool: 'chart', minutes: 16,
        levels: { easy: '분류 결과 3칸(행정·경비·보호)의 막대를 그리고 값이 보인다.', base: '4칸 분류 결과 막대를 그리고 띠그래프에서 비율을 읽는다(근거 자료의 영역에 맞춰 계획의 \'연구\' 대신 \'시설\'로 나눈다).', challenge: '비율을 해석하는 문장을 고르고 활동지에 해석을 쓴다.' },
        activity: {
          title: '주권 행사 사례 분류 그래프', tool: 'chart',
          teacher: '"독도 주권 행사 사례 열 개를 행정·경비·보호·시설로 나누면 어떻게 될까요?" 칠판에 사례 열 개(주소·칙령 관할·울릉군 행정·경비대 상주·바다 경비·등대·천연보호구역 관리 등)를 적고, 그래프는 우리 반이 나눈 결과를 가상으로 정리한 것이라고 밝힌다. 등대를 \'경비\'에 넣는 학생에게 "등대가 하는 일은 지키는 일일까요, 바닷길을 밝히는 시설일까요?"라고 되묻는다. 어느 칸이 많고 적은지보다, 여러 영역에서 국가 권한이 함께 행사된다는 점을 읽게 한다.',
          task: '독도 주권 행사 사례 10개를 영역별로 나눈 결과(우리 반 가상 자료)를 막대와 띠그래프로 나타내고 비율을 읽어요.',
          levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            IT({ prompt: '표를 보고 영역별 사례 수 막대를 그리세요.', toolOptions: CB('독도 주권 행사 사례 분류(우리 반, 가상)', '개', KINDS, { xLabel: '영역', yLabel: '사례 수', max: 4, scale: 1 }), target: { build: true } },
              { prompt: '표를 보고 영역 세 칸의 사례 수 막대를 그리세요.', toolOptions: { data: KINDS.slice(0, 3) } }),
            IT({ prompt: '띠그래프에서 \'행정\'과 \'경비\'를 합한 비율을 읽어 쓰세요.', toolOptions: { type: 'band', mode: 'read', title: '독도 주권 행사 사례 분류 비율(우리 반, 가상)', unit: '%', data: [['행정', 30], ['경비', 30], ['보호', 20], ['시설', 20]], question: '행정과 경비를 합하면 몇 %?' }, target: { value: 60 } }),
            IT({ prompt: '그래프에서 읽을 수 있는 것을 고르세요.', toolOptions: { type: 'band', mode: 'read', title: '독도 주권 행사 사례 분류 비율(우리 반, 가상)', unit: '%', data: [['행정', 30], ['경비', 30], ['보호', 20], ['시설', 20]], question: '이 그래프로 알 수 있는 것은?', choices: ['국가 권한이 여러 영역에서 함께 행사된다', '경비만 하면 실효적 지배다', '보호는 주권과 상관없다'] }, target: { pick: 0 } },
              null,
              { prompt: '이 그래프의 한계를 바르게 말한 것을 고르세요.', toolOptions: { question: '이 그래프의 한계는?', choices: ['우리 반이 고른 사례 10개만 나눈 가상 자료다', '모든 독도 사례를 빠짐없이 셌다', '실제 예산을 나타낸다'] }, target: { pick: 0 } },
              { conclude: '독도에서는 행정·경비·보호·시설의 여러 영역에서 국가 권한이 함께 행사돼요. 그래프가 무엇을 셌는지도 함께 밝혀요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '영역마다 독도 사례를 하나씩 써요.', columns: ['영역', '사례'], cells: [['행정', ''], ['경비', ''], ['보호', ''], ['시설', '']], answer: '주소(독도리), 독도경비대, 천연보호구역 관리, 독도 등대' }] },
      }),
      M('wrap.write', {
        title: '실효적 지배와 고유 영토', method: '실효적 지배와 고유 영토 관계 쓰기', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '빈칸 틀을 채워 세 문장을 쓰고 기준 2개로 점검한다.', base: '두 개념의 관계를 세 문장으로 쓰고 기준 3개로 점검한다.', challenge: '"실효적 지배만 하면 남의 땅도 가질 수 있다"는 오해를 바로잡는 문장을 더해 기준 4개로 점검한다.' },
        wrap: {
          teacher: '"고유 영토와 실효적 지배는 어떤 관계일까요?" 칠판에 \'역사적 근거(고유 영토) → 그 위의 평화로운 다스림(실효적 지배)\'을 화살표로 그려 두고 세 문장으로 쓰게 한다. "실효적 지배만 하면 남의 땅도 가질 수 있다"고 쓰는 학생에게 "독도의 실효적 지배는 어디에서 출발한다고 했나요?"라고 되묻는다.',
          exitTicket: [
            RWX('고유 영토와 실효적 지배의 관계를 세 문장으로 쓰고 기준표에 표시해요.',
              { topic: '고유 영토와 실효적 지배의 관계를 독도 사례 하나를 넣어 세 문장으로 쓰세요.', minChars: 40, maxChars: 240, minSentences: 3, maxSentences: 4, title: '두 개념의 관계', lines: 4 },
              ['두 개념의 뜻을 썼다', '독도 사례 하나를 넣었다', '두 개념이 이어지는 관계를 썼다'],
              { prompt: '틀을 채워 세 문장을 쓰고 기준표에 표시해요.', toolOptions: { starter: '독도는 역사적으로 ___이다. 대한민국은 그 위에서 ___을 하고 있다. 예를 들어 ___.' }, crit: ['두 개념의 뜻을 썼다', '독도 사례 하나를 넣었다'] },
              { prompt: '세 문장에 이어 "실효적 지배만 하면 남의 땅도 가질 수 있다"는 오해를 바로잡는 문장을 더 쓰세요.', toolOptions: { maxSentences: 5 }, crit: ['두 개념의 뜻을 썼다', '독도 사례 하나를 넣었다', '두 개념이 이어지는 관계를 썼다', '오해를 근거로 바로잡았다'] }, 0.3),
            { type: 'choice', prompt: '독도의 실효적 지배에 대한 설명으로 가장 알맞은 것은?', options: ['힘으로 차지했기 때문에 우리 땅이다', '역사적으로 우리 영토인 독도에 평화적·계속적·공개적으로 주권을 행사한다', '지도에 이름을 적었으니 충분하다'], answer: 1, difficulty: 0.2, explain: '실효적 지배는 역사적 근거와 함께 말해요.' },
          ],
        },
        worksheet: {
          title: '실효적 지배와 고유 영토',
          items: [
            { type: 'short', prompt: '고유 영토와 실효적 지배의 관계를 한 문장으로 써요.' },
            { type: 'blank', prompt: '빈칸을 채워요.', text: '실효적 지배는 국가가 ___적·계속적·공개적으로 권한을 행사하는 것이다.', answer: '평화' },
          ],
        },
      }),
      M('wrap.check', {
        title: '세 칸 자기 점검과 짝', method: '자기 점검표', tool: 'timer', minutes: 7, delivery: 'guided',
        levels: { easy: '점검 칸 2개(평화선·경비대)를 스스로 표시한다.', base: '점검 칸 3개(평화선·경비대·실효적 지배)를 스스로 표시한다.', challenge: '짝과 점검표를 바꿔 서로 한 칸씩 물어 확인한다(교사 진행).' },
        wrap: {
          teacher: '"오늘 배운 세 가지를 스스로 점검해 볼까요?" 타이머를 점검 1분·짝 확인 1분으로 맞추고 점검 칸을 하나씩 소리 내어 읽게 한다. 표시만 하고 설명을 못 하는 학생에게 "그 칸을 짝에게 한 문장으로 말해 줄 수 있나요?"라고 묻는다. 교사는 가장 많이 비어 있는 칸을 모아 다음 시간 첫머리에 다시 짚는다고 알린다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'timer', options: { title: '평화선·경비대·실효적 지배 점검', labels: ['점검', '짝 확인'], plan: { work: 30, rest: 30, rounds: 1 } },
              prompt: '점검 60초·짝 확인 60초로 맞추고, 해 본 것을 스스로 표시해요.', target: { plan: { work: 60, rest: 60, rounds: 1 }, selfCheck: ['평화선 선언을 한 문장으로 말해 보았다', '의용수비대에서 경비대까지 흐름을 말해 보았다', '실효적 지배의 세 조건을 말해 보았다'] }, difficulty: 0.1 },
            { prompt: '점검 60초·짝 확인 60초로 맞추고, 해 본 것 두 가지를 표시해요.', target: { plan: { work: 60, rest: 60, rounds: 1 }, selfCheck: ['평화선 선언을 한 문장으로 말해 보았다', '의용수비대에서 경비대까지 흐름을 말해 보았다'] } }),
            { type: 'choice', prompt: '울릉도 주민들의 독도의용수비대에 대한 설명으로 알맞은 것은?', options: ['주민들이 스스로 지켰고, 그 임무가 경찰로 이어졌다', '오늘의 독도경비대와 관계없다', '정부가 만든 군대였다'], answer: 0, difficulty: 0.2, explain: '주민이 먼저 지키고 경찰이 이어받아 오늘의 독도경비대가 되었어요.' },
          ],
        },
        worksheet: {
          title: '오늘의 자기 점검',
          items: [
            { type: 'check', prompt: '오늘 할 수 있게 된 것에 표시해요.', options: ['평화선 선언 설명하기', '지킴의 흐름 말하기', '실효적 지배 조건 말하기'] },
            { type: 'short', prompt: '아직 헷갈리는 것 하나와 다음에 확인할 방법을 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 9학년 · 일본 정부 주장 세 유형과 모순 (dokdo.m.g9-claims) ====
  // 일본 정부 주장을 고유영토론·무주지 선점론·조약 해석론으로 묶는 것은 g9 단원의 분류다. 정부 주장과 사람들을 구별하고, 정중한 반박만 연습한다.
  {
    const M = MK('g9-claims', [9]);
    const TYPES = ['고유영토론', '무주지 선점론', '조약 해석론'];
    const CLAIM7 = [
      { id: 'c1', text: '17세기에 영유권을 확립했다', to: '고유영토론' }, { id: 'c2', text: '우산도는 독도가 아니다', to: '고유영토론' }, { id: 'c3', text: '옛날부터 일본 땅이었다', to: '고유영토론' },
      { id: 'c4', text: '1905년 주인 없는 섬을 편입했다', to: '무주지 선점론' }, { id: 'c5', text: '칙령의 석도는 독도가 아니다', to: '무주지 선점론' },
      { id: 'c6', text: '강화조약에 독도가 적히지 않았다', to: '조약 해석론' }, { id: 'c7', text: '각서는 최종 결정이 아니었다', to: '조약 해석론' },
    ];
    // 앞 활동에서 나눈 주장 카드 7장의 유형별 수
    const FREQ = [['고유영토론', 3], ['무주지 선점론', 2], ['조약 해석론', 2]];
    const X1 = { text: '친구가 묻는다. "\'이 연필은 원래 내 거야\'라고 한 사람이 \'주인 없는 연필이라 주워 왔어\'라고도 하면 어때?"', ask: '두 말을 함께 놓으면?', motif: 'star', choices: [
      { id: 'fine', text: '둘 다 맞을 수 있다', result: '원래 내 것이었다면 주울 필요가 없다는 점을 놓친다.', impact: [{ who: '내 판단', text: '모순을 놓친다', tone: -1 }], why: '원래 내 것이면 주울 필요가 없고, 주웠다면 원래 내 것이 아니었어요.', ending: '모순을 놓쳤어요.' },
      { id: 'contra', text: '두 말은 함께 설 수 없다', result: '하나가 참이면 다른 하나는 거짓이 되는 관계를 찾는다.', impact: [{ who: '내 판단', text: '모순을 짚는다', tone: 1 }], end: '두 말이 부딪친다는 것을 찾았어요.',
        next: { text: '친구가 "그럼 독도 주장에 대어 보면?"이라고 묻는다.', choices: [
          { id: 'apply', text: '"옛날부터 일본 땅"과 "1905년 주인 없는 섬 편입"이 같은 모양이라고 답한다', result: '고유 영토라면 편입이 필요 없고, 편입했다면 고유 영토가 아니었다는 점을 정리한다.', impact: [{ who: '친구', text: '모순을 이해한다', tone: 1 }] },
          { id: 'mock', text: '"그러니까 거짓말쟁이들이야"라고 말한다', result: '모순을 짚는 대신 사람을 탓하는 말이 된다.', impact: [{ who: '교실', text: '혐오 표현이 생긴다', tone: -1 }], why: '모순은 주장의 논리를 짚는 것이지 사람을 탓하는 말이 아니에요.' }] } }] };
    const X1R = [{ id: 'r1', text: '고유 영토라면 편입할 필요가 없다' }, { id: 'r2', text: '모순은 주장의 논리를 짚는 것이다' },
      { id: 'r3', text: '두 주장은 서로 돕는다', why: '하나가 참이면 다른 하나는 거짓이 되는 관계예요.' }, { id: 'r4', text: '모순이 있으면 사람을 탓해도 된다', why: '주장과 사람을 구별해요.' }];
    const X2 = { text: '토론 상대가 "1905년 편입은 옛날부터의 영유를 다시 확인한 것일 뿐"이라고 말한다.', ask: '어떻게 따질까?', motif: 'cloud', choices: [
      { id: 'pass', text: '"그럴 수도 있겠네요"라고 넘어간다', result: '편입 결정이 무엇을 근거로 했는지 따지지 못한다.', impact: [{ who: '청중', text: '쟁점을 놓친다', tone: -1 }], why: '편입 결정이 독도를 어떤 섬으로 보았는지 확인해요.', ending: '쟁점을 따지지 못했어요.' },
      { id: 'basis', text: '편입이 "다른 나라가 차지한 흔적이 없는 섬"을 근거로 했다고 짚는다', result: '편입 근거가 무주지 논리였다는 점이 드러난다.', impact: [{ who: '청중', text: '편입 근거를 본다', tone: 1 }], end: '편입의 근거를 짚었어요.',
        next: { text: '상대가 "그래도 두 주장은 함께 쓸 수 있어요"라고 한다.', choices: [
          { id: 'logic', text: '무주지라면 그 전엔 일본 땅이 아니었다는 뜻이라 함께 설 수 없다고 차분히 말한다', result: '두 주장이 부딪치는 지점이 분명해진다.', impact: [{ who: '청중', text: '모순을 이해한다', tone: 1 }] },
          { id: 'loud', text: '"말도 안 돼요!"라고만 한다', result: '근거 없이 끝나 청중이 판단하기 어렵다.', impact: [{ who: '청중', text: '판단이 어렵다', tone: -1 }], why: '"말도 안 돼"보다 논리의 연결을 보여 줘요.' }] } }] };
    const X2R = [{ id: 'r1', text: '편입은 무주지 논리를 근거로 했다' }, { id: 'r2', text: '무주지라면 그 전엔 주인이 없었다는 뜻이다' },
      { id: 'r3', text: '목소리를 높이면 모순이 드러난다', why: '논리의 연결을 보여 줘야 드러나요.' }, { id: 'r4', text: '두 주장은 시기가 같다', why: '하나는 17세기를, 하나는 1905년을 근거로 삼아요.' }];
    const X3 = { text: '모둠 반박문에 "모순투성이 억지 주장"이라는 표현이 들어갔다.', ask: '어떻게 고칠까?', motif: 'leaf', choices: [
      { id: 'keep', text: '강해 보이니 그대로 둔다', result: '읽는 사람이 내용보다 말투에 먼저 마음을 닫는다.', impact: [{ who: '읽는 사람', text: '근거를 끝까지 안 읽는다', tone: -1 }], why: '깎아내리는 말은 듣는 사람의 마음을 닫게 해요.', ending: '말투 때문에 근거가 묻혔어요.' },
      { id: 'polite', text: '"두 주장은 함께 설 수 없다"처럼 논리를 짚는 표현으로 고친다', result: '반박문이 차분해지고 근거가 앞에 선다.', impact: [{ who: '읽는 사람', text: '근거에 집중한다', tone: 1 }], end: '논리를 짚는 표현으로 고쳤어요.',
        next: { text: '모둠원이 "출처도 넣을까?"라고 묻는다.', choices: [
          { id: 'src', text: '칙령 제41호와 외교부 누리집 출처를 넣자고 한다', result: '반박의 근거를 누구나 확인할 수 있다.', impact: [{ who: '읽는 사람', text: '확인할 수 있다', tone: 1 }] },
          { id: 'nosrc', text: '말투만 고치면 됐다고 한다', result: '근거를 확인할 길이 없다.', impact: [{ who: '읽는 사람', text: '확인하기 어렵다', tone: -1 }], why: '정중한 말투와 함께 출처가 있어야 단단해요.' }] } }] };
    const X3R = [{ id: 'r1', text: '논리를 짚는 표현이 근거를 앞세운다' }, { id: 'r2', text: '출처가 있으면 누구나 확인할 수 있다' },
      { id: 'r3', text: '세게 말할수록 설득된다', why: '깎아내리는 말은 마음을 닫게 해요.' }, { id: 'r4', text: '말투만 바꾸면 충분하다', why: '출처도 함께 있어야 해요.' }];

    ALL.push(
      M('intro.list', {
        title: '주장 문장, 확인할 낱말', method: '주장 문장 처음 읽기', tool: 'wordcards', minutes: 6,
        levels: { easy: '낱말 카드 가운데 확인이 필요한 낱말 2개를 고르는 시연을 본다.', base: '확인이 필요한 낱말 3개를 고르는 시연을 본다.', challenge: '확인이 필요한 낱말 4개를 모두 골라 말한다.' },
        intro: {
          teacher: '"상대가 여러 주장을 한꺼번에 쏟아 내면 어떻게 정리할 수 있을까요?" 일본 정부의 주장 요지 — 옛날부터 일본 땅, 1905년 주인 없는 섬 편입, 강화조약에서 일본 땅으로 남음 — 를 차분히 읽어 주고, 시연 단추로 사실 확인이 필요한 낱말 카드가 담기는 모습을 보인다. "다 틀린 말이니 볼 필요 없다"는 반응에는 "정확히 알아야 정확히 반박할 수 있지 않을까요?"라고 되묻는다. 오늘은 주장을 세 유형으로 나누고 모순을 찾는다고 밝힌다.',
          student: '일본 정부 주장의 요지를 읽고, 사실을 확인해야 할 낱말(시기·문서 이름)을 골라요. 고른 낱말마다 어느 학년에 배운 사료로 확인할지 짝과 말해요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '확인할 낱말', cards: [{ id: 'a', text: '17세기' }, { id: 'b', text: '1905년 주인 없는 섬' }, { id: 'c', text: '강화조약' }, { id: 'd', text: '주장한다' }, { id: 'e', text: '독도는' }], shuffle: false }, sequence: [{ pick: ['a', 'b', 'c'] }] },
          art: { draw: 'a paper-cut notebook page with three claim cards clipped in a row and a pencil circling key dates on each card', banner: '주장을 정확히 읽기', extra: [{ motif: 'star', x: 300, y: 96, color: 'lavender' }] },
        },
      }),
      M('intro.guess', {
        title: '두 주장 나란히, 이상한 점', method: '두 주장 함께 보면 이상한 점 어림', tool: 'emotion', minutes: 6,
        levels: { easy: '두 주장과 의문 2짝을 잇는 시연을 본다.', base: '두 주장과 의문 3짝을 잇는 시연을 본다.', challenge: '카드에 없는 의문을 직접 말한다.' },
        intro: {
          teacher: '"이 두 주장을 나란히 놓으면 어떤 질문이 떠오르나요?" \'옛날부터 일본 땅이었다\'와 \'1905년 주인 없는 섬을 편입했다\'를 칠판에 나란히 적고, 시연 단추로 주장과 의문 카드가 이어지는 모습을 보인다. "그냥 일본이 우기는 것"이라는 반응에는 "주장끼리 맞는지 따져 보면 더 정확히 말할 수 있어요"라고 답한다. 의문이 곧 오늘 찾을 모순의 실마리라고 밝힌다.',
          student: '두 주장을 나란히 보고 떠오르는 의문을 이어 보아요. 가장 이상하다고 느낀 점을 짝에게 말해요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 's1', label: '"옛날부터 일본 땅이었다"' }, { id: 's2', label: '"1905년 주인 없는 섬을 편입했다"' }, { id: 's3', label: '두 주장을 함께 놓으면' }], cards: [{ id: 'k1', text: '그럼 왜 새로 편입했지?' }, { id: 'k2', text: '그 전엔 주인이 없었다는 뜻?' }, { id: 'k3', text: '둘 다 맞을 수 있을까?' }], shuffle: false }, sequence: [{ match: { s1: 'k1', s2: 'k2', s3: 'k3' } }] },
          art: { draw: 'two paper-cut signposts pointing in opposite directions on the same small island, with a puzzled paper character between them', banner: '두 말이 함께 설 수 있을까?', extra: [{ motif: 'wind', x: 300, y: 96 }] },
        },
      }),
      M('activity.three', {
        title: '주장 세 유형 나누기', method: '주장 세 유형 나누기', tool: 'sortboard', minutes: 16,
        levels: { easy: '주장 카드 3장을 세 유형 바구니에 하나씩 나누고, 틀리면 까닭을 말하고 되돌아온다.', base: '주장 카드 7장을 세 유형 바구니에 나누고, 유형과 반박 근거를 짝짓는다.', challenge: '주장이 아닌 함정 카드(반박 근거)를 바구니에 넣지 않고 남긴다.' },
        activity: {
          title: '주장 세 유형 나누기', tool: 'sortboard',
          teacher: '"이 주장은 언제의 일을 근거로 삼고 있나요?" 유형을 나눌 때 17세기를 말하면 고유영토론, 1905년을 말하면 무주지 선점론, 1951년 조약·1946년 각서를 말하면 조약 해석론이라는 시기 단서를 알려 준다. 반박 근거 카드를 주장 바구니에 넣는 학생에게 "이 카드는 주장일까요, 주장을 반박하는 사료일까요?"라고 되묻는다. 국제사법재판소 회부 제안에 대해 정부는 분쟁이 없으므로 응하지 않는다는 입장이라는 점도 덧붙인다.',
          task: '일본 정부 주장 카드를 고유영토론·무주지 선점론·조약 해석론 바구니에 나누고, 유형마다 반박 근거를 이어요.',
          levels: { easy: { live: true, instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            IT(SB('주장 카드를 세 유형 바구니에 나누세요.', TYPES, CLAIM7),
              { prompt: '주장 카드 3장을 세 유형 바구니에 하나씩 나누세요.', toolOptions: { cards: [{ id: 'c1', text: '17세기에 영유권을 확립했다' }, { id: 'c4', text: '1905년 주인 없는 섬을 편입했다' }, { id: 'c6', text: '강화조약에 독도가 적히지 않았다' }] }, target: { sort: { 고유영토론: ['c1'], '무주지 선점론': ['c4'], '조약 해석론': ['c6'] } } },
              { prompt: '주장 카드를 세 유형 바구니에 나누세요. 주장이 아닌 카드는 남겨요.', toolOptions: { more: [{ id: 'x1', text: '1900년 칙령 제41호의 석도 관할' }, { id: 'x2', text: '1696년 막부의 도해 금지' }] } }),
            IT(SB('반박 근거 카드를 그 근거가 반박하는 유형 바구니에 나누세요. 근거가 아닌 카드는 남겨요.', TYPES, [
              { id: 'e1', text: '태정관 지령·막부의 도해 금지', to: '고유영토론' }, { id: 'e2', text: '1900년 칙령 제41호', to: '무주지 선점론' },
              { id: 'e3', text: '적힌 섬은 대표적 예시', to: '조약 해석론' }, { id: 'x3', text: '"우리 땅이니까" 구호' }])),
            IT(SB('유형으로 나누는 까닭을 \'좋은 점\'과 \'잘못 안 점\'으로 나누세요.', ['좋은 점', '잘못 안 점'], [
              { id: 'p1', text: '유형마다 맞는 사료로 반박할 수 있다', to: '좋은 점' }, { id: 'p2', text: '주장 사이의 모순이 보인다', to: '좋은 점' },
              { id: 'p3', text: '주장을 읽지 않아도 된다', to: '잘못 안 점' }, { id: 'p4', text: '상대를 깎아내리기 쉽다', to: '잘못 안 점' }]), null, null,
              { conclude: '주장을 근거 시기(17세기·1905년·1951년)로 묶으면 유형마다 맞는 사료로 정확히 반박할 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '유형마다 대표 주장과 반박 근거를 써요.', columns: ['유형', '대표 주장', '반박 근거'], cells: [['고유영토론', '', ''], ['무주지 선점론', '', ''], ['조약 해석론', '', '']], answer: '17세기 확립·태정관 지령, 1905년 편입·칙령 제41호, 조약에 없음·대표적 예시' }] },
      }),
      M('activity.freq', {
        title: '유형별 주장 수 그래프', method: '유형별 주장 수 그래프', tool: 'chart', minutes: 16,
        levels: { easy: '세 유형 막대를 그리고 값이 보인다.', base: '세 유형 막대를 그리고 가장 많은 유형과 합계를 읽는다.', challenge: '그래프를 해석하는 문장을 고르고, 활동지에 해석 문장을 쓴다.' },
        activity: {
          title: '유형별 주장 수 그래프', tool: 'chart',
          teacher: '"앞에서 나눈 주장 카드 7장을 유형별로 세면 어떤 그래프가 될까요?" 표의 수는 앞 활동 카드 7장을 나눈 결과라고 밝히고 막대를 그리게 한다. 가장 긴 막대를 보고 "고유영토론이 가장 중요한 주장"이라고 말하는 학생에게 "이 그래프는 우리 카드 7장을 센 것일 뿐인데, 그것만으로 중요도를 말할 수 있을까요?"라고 되묻는다. 그래프가 무엇을 셌는지 밝히는 습관을 짚는다.',
          task: '앞 활동에서 나눈 주장 카드 7장을 유형별로 세어 막대그래프를 그리고, 가장 많은 유형과 그래프의 뜻을 읽어요.',
          levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            IT({ prompt: '표를 보고 유형별 주장 카드 수 막대를 그리세요.', toolOptions: CB('유형별 주장 카드 수(앞 활동 7장)', '장', FREQ, { xLabel: '유형', yLabel: '카드 수', max: 4, scale: 1 }), target: { build: true } }),
            IT({ prompt: '카드가 가장 많은 유형을 고르세요.', toolOptions: CR('유형별 주장 카드 수(앞 활동 7장)', '장', FREQ, { xLabel: '유형', yLabel: '카드 수', max: 4, scale: 1, question: '가장 많은 유형은?', choices: TYPES }), target: { pick: 0 } }),
            IT({ prompt: '무주지 선점론과 조약 해석론 카드를 합하면 몇 장인지 읽어 쓰세요.', toolOptions: CR('유형별 주장 카드 수(앞 활동 7장)', '장', FREQ, { xLabel: '유형', yLabel: '카드 수', max: 4, scale: 1, question: '두 유형을 합하면 몇 장?' }), target: { value: 4 } },
              null,
              { prompt: '그래프를 바르게 해석한 문장을 고르세요.', toolOptions: { question: '바른 해석은?', choices: ['우리 카드 7장 가운데 고유영토론 카드가 가장 많았다', '고유영토론이 가장 중요한 주장이다', '조약 해석론은 반박할 필요가 없다'] }, target: { pick: 0 } },
              { conclude: '그래프는 무엇을 셌는지에 따라 뜻이 달라져요. 우리 카드 수가 주장의 중요도를 말해 주지는 않아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '이 그래프를 해석하는 문장을, 무엇을 셌는지 밝혀 한 문장으로 써요.' }] },
      }),
      M('activity.contra', {
        title: '모순 찾기 갈림길', method: '모순 찾기 갈림길', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림길 1번에서 고르고 결과 장면을 본다.', base: '갈림길 2번을 끝까지 가 본 뒤 알맞은 근거를 하나 이상 고른다.', challenge: '갈림길 2번을 간 뒤, 섞인 근거 가운데 맞는 근거 2장을 정확히 고른다.' },
        activity: {
          title: '모순 찾기 갈림길', tool: 'dilemma',
          teacher: '"원래 자기 땅이었다면 왜 새로 편입해야 했을까요?" 연필 비유부터 시작해 독도 주장에 대어 보게 한다. 모순을 찾은 뒤 "거짓말쟁이"라고 말하는 길을 고른 학생에게 "우리가 따지는 것은 주장의 논리일까요, 사람일까요?"라고 되묻는다. 세 번째 상황에서는 깎아내리는 표현을 논리를 짚는 표현으로 바꾸는 연습을 한다.',
          task: '"고유 영토였다"와 "1905년 무주지 편입"을 함께 놓고 갈림길에서 판단하며 결과를 보고, 끝에서 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '연필 비유로 두 말을 견줘요. 한 번 골라 보세요.', base: '연필 비유로 두 말을 견줘요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '연필 비유로 두 말을 견줘요. 두 번 골라 끝까지 가고 맞는 근거 2장을 고르세요.' },
              '연필 비유', X1, [['contra', 'apply']], X1R, ['r1', 'r2'], { reasons: [{ id: 'r5', text: '비유는 근거가 될 수 없으니 버린다' }], ok: ['r1', 'r2'] }),
            DIL({ easy: '"편입은 재확인일 뿐"이라는 말을 들었어요. 한 번 골라 보세요.', base: '"편입은 재확인일 뿐"이라는 말을 들었어요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '"편입은 재확인일 뿐"이라는 말을 들었어요. 두 번 골라 끝까지 가고 맞는 근거 2장을 고르세요.' },
              '재확인일까 편입일까', X2, [['basis', 'logic']], X2R, ['r1', 'r2'], { reasons: [{ id: 'r5', text: '상대 말이 길면 틀린 것이다' }], ok: ['r1', 'r2'] }),
            DIL({ easy: '반박문에 거친 표현이 들어갔어요. 한 번 골라 보세요.', base: '반박문에 거친 표현이 들어갔어요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '반박문에 거친 표현이 들어갔어요. 두 번 골라 끝까지 가고 맞는 근거 2장을 고르세요.' },
              '반박문 표현 고치기', X3, [['polite', 'src']], X3R, ['r1', 'r2'], { reasons: [{ id: 'r5', text: '표현은 길수록 정중하다' }], ok: ['r1', 'r2'] },
              { conclude: '고유 영토라면 편입이 필요 없고, 편입했다면 고유 영토가 아니었다는 뜻이에요. 모순은 사람이 아니라 주장의 논리를 짚어 차분히 말해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '고유영토론과 무주지 선점론의 관계로 알맞은 것은?', options: ['두 주장은 서로 돕는다', '고유 영토라면 편입이 필요 없고, 편입했다면 고유 영토가 아니었다', '두 주장은 같은 시기를 근거로 한다'], answer: '고유 영토라면 편입이 필요 없고, 편입했다면 고유 영토가 아니었다' }] },
      }),
      M('activity.write', {
        title: '모순 지적 단락', method: '모순 지적 단락', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '빈칸 틀을 채워 문단마다 쓰고 기준 2개로 점검한다.', base: '두 주장 소개·모순·마무리를 세 문단(네 문장 안팎)으로 쓰고 기준 3개로 점검한다.', challenge: '문단마다 출처를 밝히고 기준 4개로 점검한다.' },
        activity: {
          title: '모순 지적 단락', tool: 'rubric-writing',
          teacher: '"모순을 짚는 단락은 \'틀렸다\'보다 \'함께 설 수 없다\'로 말하면 더 단단해요." 두 주장을 정확히 소개하고, 모순을 비유나 논리로 설명하고, 사료로 마무리하는 차례를 칠판에 적는다. 단락에 "억지"·"거짓말" 같은 말을 쓰는 학생에게 "그 낱말 대신 논리의 어디가 부딪치는지 쓰면 어떻게 될까요?"라고 되묻는다.',
          task: '고유영토론과 무주지 선점론의 모순을 정중한 표현으로 지적하는 단락을 쓰고, 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RW('첫 문단: 두 주장을 정확히 소개하세요.',
              { topic: '첫 문단 — 일본 정부의 고유영토론과 무주지 선점론을 각각 한 문장으로 정확히 소개하세요.', minChars: 30, maxChars: 200, minSentences: 2, maxSentences: 2, title: '모순 ① 두 주장', lines: 3 },
              ['두 주장을 모두 소개했다', '주장이 기대는 시기를 썼다', '깎아내리는 표현이 없다'],
              { prompt: '첫 문단: 틀을 채워 쓰세요.', toolOptions: { starter: '일본 정부는 독도가 ___부터 일본 땅이었다고 한다. 또 ___년에 주인 없는 섬을 편입했다고 한다.' }, crit: ['두 주장을 모두 소개했다', '주장이 기대는 시기를 썼다'] },
              { prompt: '첫 문단: 두 주장을 소개하고 출처를 밝히세요.', toolOptions: { maxSentences: 3 }, crit: ['두 주장을 모두 소개했다', '주장이 기대는 시기를 썼다', '깎아내리는 표현이 없다', '출처를 밝혔다'] }),
            RW('둘째 문단: 두 주장의 모순을 설명하세요.',
              { topic: '둘째 문단 — 두 주장이 함께 설 수 없는 까닭을 비유나 논리로 한두 문장 쓰세요.', minChars: 25, maxChars: 180, minSentences: 1, maxSentences: 2, title: '모순 ② 부딪치는 곳', lines: 3 },
              ['함께 설 수 없는 까닭을 썼다', '논리나 비유로 설명했다', '사람이 아니라 주장을 짚었다'],
              { prompt: '둘째 문단: 틀을 채워 쓰세요.', toolOptions: { starter: '고유 영토라면 ___할 필요가 없고, 편입했다면 ___ 아니었다는 뜻이다.' }, crit: ['함께 설 수 없는 까닭을 썼다', '사람이 아니라 주장을 짚었다'] },
              { prompt: '둘째 문단: 모순을 설명하고 출처를 밝히세요.', toolOptions: { maxSentences: 3 }, crit: ['함께 설 수 없는 까닭을 썼다', '논리나 비유로 설명했다', '사람이 아니라 주장을 짚었다', '출처를 밝혔다'] }),
            RW('셋째 문단: 사료로 마무리하세요.',
              { topic: '셋째 문단 — 1900년 칙령 제41호처럼 1905년 이전의 사료를 들어 한두 문장으로 마무리하세요.', minChars: 25, maxChars: 180, minSentences: 1, maxSentences: 2, title: '모순 ③ 사료로 마무리', lines: 3 },
              ['1905년 이전 사료를 들었다', '결론을 분명히 썼다', '정중한 표현을 썼다'],
              { prompt: '셋째 문단: 틀을 채워 마무리하세요.', toolOptions: { starter: '게다가 1900년 ___로 독도는 이미 ___ 섬이었다.' }, crit: ['1905년 이전 사료를 들었다', '결론을 분명히 썼다'] },
              { prompt: '셋째 문단: 사료로 마무리하고 출처를 밝히세요.', toolOptions: { maxSentences: 3 }, crit: ['1905년 이전 사료를 들었다', '결론을 분명히 썼다', '정중한 표현을 썼다', '출처를 밝혔다'] },
              { conclude: '모순 지적은 두 주장을 정확히 옮기고, 함께 설 수 없는 까닭을 논리로 짚고, 사료로 마무리할 때 설득력이 커요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내 단락에서 모순을 짚은 문장을 옮겨 써요.' }] },
      }),
      M('wrap.pair', {
        title: '짝 반박 연습', method: '짝 반박 연습', tool: 'timer', minutes: 7, delivery: 'guided',
        levels: { easy: '짝이 주장 하나를 읽으면 근거로 1번 답한다.', base: '주장 두 개에 2번 답한다.', challenge: '주장 세 개에 3번 답하고, 답마다 유형을 먼저 말한다(교사 진행).' },
        wrap: {
          teacher: '"짝이 주장 카드 하나를 읽으면 30초 안에 근거로 답해 보세요." 타이머를 읽기 20초·답하기 40초로 맞추고 짝과 번갈아 하게 한다. 답이 "그건 틀렸어"로 끝나면 "어느 유형이고 어떤 사료로 답할 수 있나요?"라고 묻는다. 답할 때 사람을 탓하는 말이 나오면 그 자리에서 주장을 짚는 말로 바꿔 다시 말하게 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'timer', options: { title: '짝 반박 연습', labels: ['읽기', '답하기'], plan: { work: 10, rest: 20, rounds: 1 }, safety: ['주장 유형을 짚었다', '근거 사료를 들었다', '정중하게 답했다'] },
              prompt: '읽기 20초·답하기 40초를 2번 하도록 맞추고, 짝의 답에서 지킨 칸을 표시해요.', target: { plan: { work: 20, rest: 40, rounds: 2 }, safety: true }, difficulty: 0.15 },
            { prompt: '읽기 20초·답하기 40초를 1번 하도록 맞추고, 지킨 칸 두 개를 표시해요.', toolOptions: { safety: ['근거 사료를 들었다', '정중하게 답했다'] }, target: { plan: { work: 20, rest: 40, rounds: 1 }, safety: true } },
            { prompt: '읽기 20초·답하기 40초를 3번 하도록 맞추고, 지킨 칸을 표시해요.', target: { plan: { work: 20, rest: 40, rounds: 3 }, safety: true } }),
            { type: 'choice', prompt: '"강화조약에 독도가 적히지 않았다"는 주장의 유형은?', options: ['고유영토론', '무주지 선점론', '조약 해석론'], answer: 2, difficulty: 0.15, explain: '1951년 조약을 근거로 삼는 주장이에요.' },
          ],
        },
        worksheet: {
          title: '짝 반박 연습',
          items: [
            { type: 'table', prompt: '짝이 읽은 주장과 내 답을 써요.', columns: ['주장(유형)', '내 답의 근거'], cells: [['', ''], ['', '']], answer: '(예) 1905년 편입(무주지 선점론) — 1900년 칙령 제41호' },
            { type: 'short', prompt: '가장 답하기 어려웠던 주장과 그 까닭을 써요.' },
          ],
        },
      }),
      M('wrap.sum', {
        title: '유형별 반박 생각그물', method: '유형별 반박 생각그물', tool: 'mindmap', minutes: 7,
        levels: { easy: '가지 2개(고유영토론·무주지 선점론)에 반박 근거를 붙인다.', base: '가지 3개에 반박 근거를 붙인다.', challenge: '함정 카드가 섞인 판에서 붙이고, 가지마다 출처를 활동지에 쓴다.' },
        wrap: {
          teacher: '"세 유형 가지마다 7·8·9학년에 배운 사료를 하나씩 붙여 볼까요?" 가지를 채운 뒤 학년별로 어느 사료가 어느 유형을 반박하는지 짚는다. 고시를 반박 근거로 붙인 학생에게 "고시는 반박하는 사료일까요, 따져지는 대상일까요?"라고 되묻는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '유형별 반박 근거', slots: TYPES, cards: [
              { id: 'a1', text: '태정관 지령(1877)' }, { id: 'a2', text: '「지리지」 맑은 날 보이는 두 섬' }, { id: 'b1', text: '칙령 제41호(1900)' }, { id: 'b2', text: '고시를 대한제국에 알리지 않음' },
              { id: 'c1', text: '적힌 섬은 대표적 예시' }, { id: 'c2', text: '각서 제677호(1946)' }] },
              prompt: '유형 가지마다 반박 근거를 두 장씩 붙여요.', target: { sort: { 고유영토론: ['a1', 'a2'], '무주지 선점론': ['b1', 'b2'], '조약 해석론': ['c1', 'c2'] } }, difficulty: 0.2 },
            { prompt: '유형 가지 두 개에 반박 근거를 두 장씩 붙여요.', toolOptions: { slots: ['고유영토론', '무주지 선점론'], cards: [{ id: 'a1', text: '태정관 지령(1877)' }, { id: 'a2', text: '「지리지」 맑은 날 보이는 두 섬' }, { id: 'b1', text: '칙령 제41호(1900)' }, { id: 'b2', text: '고시를 대한제국에 알리지 않음' }] }, target: { sort: { 고유영토론: ['a1', 'a2'], '무주지 선점론': ['b1', 'b2'] } } },
            { toolOptions: { cards: [{ id: 'a1', text: '태정관 지령(1877)' }, { id: 'a2', text: '「지리지」 맑은 날 보이는 두 섬' }, { id: 'b1', text: '칙령 제41호(1900)' }, { id: 'b2', text: '고시를 대한제국에 알리지 않음' }, { id: 'c1', text: '적힌 섬은 대표적 예시' }, { id: 'c2', text: '각서 제677호(1946)' }, { id: 't1', text: '시마네현 고시(1905)' }, { id: 't2', text: '"말도 안 돼" 구호' }] } }),
            { type: 'choice', prompt: '주장을 유형으로 나누어 반박할 때 가장 좋은 점은?', options: ['주장을 읽지 않아도 된다', '유형마다 맞는 사료로 정확히 반박할 수 있다', '상대를 쉽게 깎아내릴 수 있다'], answer: 1, difficulty: 0.15, explain: '근거 시기에 맞는 사료로 반박하면 정확해요.' },
          ],
        },
        worksheet: {
          title: '유형별 반박 정리',
          items: [
            { type: 'table', prompt: '유형마다 반박 근거와 그 근거를 배운 학년을 써요.', columns: ['유형', '반박 근거', '배운 학년'], cells: [['고유영토론', '', ''], ['무주지 선점론', '', ''], ['조약 해석론', '', '']], answer: '태정관 지령·「지리지」(7·8학년), 칙령 제41호(8학년), 대표적 예시·각서 제677호(9학년)' },
            { type: 'short', prompt: '세 유형 가운데 반박이 가장 단단하다고 생각하는 유형과 까닭을 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 9학년 · 독도 토론 원고와 세 갈래 근거 (dokdo.m.g9-debate) ====
  // 토론은 정부 공식 입장을 사료로 말하는 연습이다. 상대 역은 \'일본 정부 주장을 정확히 소개하고 따지는 역\'이며, 학생에게 상대 나라 사람 역할을 맡기지 않는다.
  {
    const M = MK('g9-debate', [9]);
    // 우리 모둠 토론에서 쓴 근거 갈래별 수(가상 기록)
    const USED = [['역사 근거', 5], ['지리 근거', 2], ['국제법 근거', 3]];
    const STEPS = [{ id: 'd1', text: '입론: 주장과 세 갈래 근거' }, { id: 'd2', text: '반론: 상대 근거의 문제 짚기' }, { id: 'd3', text: '재반박: 반론에 사료로 답하기' }, { id: 'd4', text: '마무리: 핵심 근거 다시 말하기' }];

    ALL.push(
      M('intro.rule', {
        title: '토론 규칙 고르기', method: '토론 규칙 고르기', tool: 'sortboard', minutes: 6,
        levels: { easy: '규칙 후보 4장을 \'지킬 것·안 할 것\'에 나누는 시연을 본다.', base: '규칙 후보 6장을 나누는 시연을 보고 하나를 골라 까닭을 말한다.', challenge: '카드에 없는 우리 반 토론 규칙 하나를 만들어 말한다.' },
        intro: {
          teacher: '"토론에서 상대가 무엇을 말할지 미리 알 수 있다면 얼마나 유리할까요?" 오늘은 지금까지 배운 근거로 토론 원고를 짜고 예절도 함께 정한다고 밝히고, 시연 단추로 규칙 후보가 \'지킬 것·안 할 것\'에 나뉘는 모습을 보인다. "토론은 말 잘하는 사람이 이긴다"는 말에는 "근거가 탄탄한 사람은 말이 서툴러도 설득해요"라고 답한다. 상대 역은 일본 정부의 주장을 정확히 소개하고 따지는 역할이지, 어느 나라 사람을 연기하는 역할이 아니라고 짚는다.',
          student: '토론 규칙 후보를 \'지킬 것\'과 \'안 할 것\'으로 나눠 보고, 우리 반 토론에서 꼭 지킬 규칙 하나를 골라 까닭을 말해요.',
          demo: { tool: 'sortboard', options: { slots: ['지킬 것', '안 할 것'], cards: [{ id: 'k1', text: '근거마다 출처를 밝힌다' }, { id: 'k2', text: '상대 말을 끝까지 듣는다' }, { id: 'k3', text: '사실인 상대 근거는 인정한다' }, { id: 'n1', text: '상대의 말을 끊는다' }, { id: 'n2', text: '상대 나라 사람을 깎아내린다' }, { id: 'n3', text: '출처 없는 숫자를 쓴다' }], shuffle: false }, sequence: [{ sort: { '지킬 것': ['k1', 'k2', 'k3'], '안 할 것': ['n1', 'n2', 'n3'] } }] },
          art: { draw: 'a paper-cut classroom debate with two podiums facing each other, a moderator with a timer in the middle and a rule poster on the wall', banner: '우리 반 토론 규칙', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      M('intro.three', {
        title: '세 갈래 근거 떠올리기', method: '세 갈래 근거 떠올리기', tool: 'mindmap', minutes: 6,
        levels: { easy: '가지 2개(역사·국제법)에 근거 카드가 붙는 시연을 본다.', base: '가지 3개(역사·지리·국제법)에 근거 카드가 붙는 시연을 본다.', challenge: '가지마다 카드 2장씩, 배운 학년까지 말한다.' },
        intro: {
          teacher: '"세 해 동안 배운 근거를 역사·지리·국제법 세 갈래로 나누면 무엇이 남을까요?" 시연 단추로 근거 카드가 가지에 붙는 모습을 보이고, 학생에게는 갈래마다 기억나는 근거를 손을 들어 말하게 한다. "거리가 가까우니 우리 땅"이라는 근거만 내는 학생에게 "지리 근거는 다른 갈래와 함께 말할 때 힘이 커지지 않을까요?"라고 되묻는다. 오늘 원고는 세 갈래를 고루 써야 한다고 밝힌다.',
          student: '역사·지리·국제법 세 갈래에 내가 아는 근거를 떠올려 붙여 보고, 가장 자신 있는 갈래를 짝에게 말해요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '독도의 세 갈래 근거', slots: ['역사', '지리', '국제법'], cards: [{ id: 'h1', text: '「지리지」(1454)' }, { id: 'h2', text: '칙령 제41호(1900)' }, { id: 'g1', text: '울릉도에서 약 87.4km' }, { id: 'g2', text: '맑은 날 울릉도에서 보임' }, { id: 'l1', text: '무주지 선점 요건에 맞지 않음' }, { id: 'l2', text: '평화적·계속적·공개적 주권 행사' }], shuffle: false }, sequence: [{ sort: { 역사: ['h1', 'h2'], 지리: ['g1', 'g2'], 국제법: ['l1', 'l2'] } }] },
          art: { draw: 'a paper-cut tree with three thick branches labeled history, geography and international law, each holding small document leaves', banner: '세 갈래 근거', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
        },
      }),
      M('activity.order', {
        title: '토론 단계 차례', method: '토론 단계 차례 놓기', tool: 'story', minutes: 16,
        levels: { easy: '토론 단계 카드 3장(입론→반론→마무리)을 차례로 놓고, 놓으면 바로 맞는지 알려 준다.', base: '토론 단계 4장(재반박 더함)과 준비 과정 4장을 차례로 놓는다.', challenge: '단계마다 우리 반이 정한 발언 시간을 잇는다(함정 카드 포함).' },
        activity: {
          title: '토론 단계 차례', tool: 'story',
          teacher: '"상대 반론을 예상하지 않고 토론에 나가면 어떻게 될까요?" 토론 단계와 준비 과정을 차례로 놓은 뒤, 준비 과정의 \'상대 주장 조사\'가 7·8차시에 한 주장 분류표라는 점을 짚는다. 재반박을 반론보다 앞에 두는 학생에게 "무엇에 대한 재반박인가요?"라고 되묻는다. 발언 시간은 우리 반 약속이고, 다른 학급은 바꿔도 된다고 밝힌다.',
          task: '독도 토론의 단계(입론→반론→재반박→마무리)와 준비 과정을 차례로 놓고, 단계마다 하는 일과 시간을 이어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            IT(OB('토론 단계를 차례대로 놓으세요.', STEPS, { title: '토론 단계' }),
              OB('토론 단계 세 장을 차례대로 놓으세요.', [STEPS[0], STEPS[1], STEPS[3]], { title: '토론 단계' })),
            IT(OB('토론 준비 과정을 차례대로 놓으세요.', [{ id: 'p1', text: '상대 주장 유형 조사' }, { id: 'p2', text: '세 갈래 근거 모으기' }, { id: 'p3', text: '예상 반론 적기' }, { id: 'p4', text: '재반박 사료 고르기' }], { title: '토론 준비' }),
              OB('토론 준비 과정 세 장을 차례대로 놓으세요.', [{ id: 'p1', text: '상대 주장 유형 조사' }, { id: 'p2', text: '세 갈래 근거 모으기' }, { id: 'p4', text: '재반박 사료 고르기' }], { title: '토론 준비' })),
            IT(MB('토론 단계와 그 단계에서 하는 일을 이어 보세요. 맞지 않는 카드는 남겨요.', [['입론', '주장과 근거를 처음 밝힌다'], ['반론', '상대 근거의 문제를 짚는다'], ['재반박', '받은 반론에 사료로 답한다']], ['상대 말을 끊는다'], { title: '단계와 할 일' }),
              null,
              MB('토론 단계와 우리 반이 정한 발언 시간을 이어 보세요(함정 카드 포함).', [['입론', '2분'], ['반론', '1분 30초'], ['재반박', '1분'], ['마무리', '30초']], ['10분', '시간 제한 없음'], { title: '단계와 발언 시간(우리 반 약속)' }),
              { conclude: '토론은 입론 → 반론 → 재반박 → 마무리로 흐르고, 준비는 상대 주장 조사에서 시작해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '토론 단계마다 하는 일을 써요.', columns: ['단계', '하는 일'], cells: [['입론', ''], ['반론', ''], ['재반박', ''], ['마무리', '']], answer: '주장·근거 밝히기, 상대 근거 문제 짚기, 반론에 사료로 답하기, 핵심 근거 다시 말하기' }] },
      }),
      M('activity.draft', {
        title: '입론·재반박 원고', method: '입론·재반박 원고 쓰기', tool: 'rubric-writing', minutes: 16,
        levels: { easy: '입론 문단은 기준대로 쓰고, 재반박·마무리 문단은 빈칸 틀을 채운다.', base: '세 갈래 근거로 입론, 예상 반론 하나에 대한 재반박, 마무리를 쓰고 기준 3개로 점검한다.', challenge: '재반박 문단에서 예상 반론 둘에 답하고 기준 4개로 점검한다.' },
        activity: {
          title: '입론·재반박 원고', tool: 'rubric-writing',
          teacher: '"입론에 세 갈래 근거가 다 들어갔나요?" 문단마다 쓰기 전에 오늘 도입의 생각그물을 다시 보게 한다. 출처 없는 숫자를 근거로 쓰려는 학생에게 "상대가 출처를 물으면 토론 전체가 흔들리지 않을까요?"라고 되묻는다. 재반박에서는 상대 근거 가운데 사실(예: 조약에 독도 이름이 없음)은 인정하고 그 해석을 짚게 한다.',
          task: '세 갈래 근거로 입론을 쓰고, 예상 반론에 답하는 재반박과 마무리를 쓴 뒤 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RW('입론: 주장과 세 갈래 근거를 쓰세요.',
              { topic: '입론 — "독도는 역사적·지리적·국제법적으로 대한민국 영토다"라는 주장과, 갈래마다 근거 하나씩을 세 문장 안팎으로 쓰세요.', minChars: 50, maxChars: 260, minSentences: 3, maxSentences: 4, title: '원고 ① 입론', lines: 5 },
              ['주장을 첫 문장에 썼다', '세 갈래 근거를 모두 넣었다', '근거마다 출처를 밝혔다']),
            RW('재반박: 예상 반론 하나에 사료로 답하세요.',
              { topic: '재반박 — 예상 반론 하나(예: "조약에 독도가 없다")를 쓰고, 사실은 인정하며 사료로 답하는 두 문장을 쓰세요.', minChars: 40, maxChars: 240, minSentences: 2, maxSentences: 3, title: '원고 ② 재반박', lines: 4 },
              ['예상 반론을 정확히 옮겼다', '사실인 부분은 인정했다', '사료로 답했다'],
              { prompt: '재반박: 틀을 채워 쓰세요.', toolOptions: { starter: '상대는 "___"라고 말할 것이다. ___은 사실이지만, ___ 때문에 그 해석은 맞지 않다.' }, crit: ['예상 반론을 정확히 옮겼다', '사료로 답했다'] },
              { prompt: '재반박: 예상 반론 둘을 쓰고 각각 사료로 답하세요.', toolOptions: { minSentences: 3, maxSentences: 5, maxChars: 320 }, crit: ['예상 반론을 정확히 옮겼다', '사실인 부분은 인정했다', '사료로 답했다', '예상 반론 둘에 모두 답했다'] }),
            RW('마무리: 핵심 근거를 다시 말하며 끝맺으세요.',
              { topic: '마무리 — 가장 힘 있는 근거 하나를 다시 들어 한두 문장으로 끝맺으세요. 상대를 깎아내리는 말은 쓰지 않아요.', minChars: 20, maxChars: 160, minSentences: 1, maxSentences: 2, title: '원고 ③ 마무리', lines: 3 },
              ['핵심 근거를 다시 말했다', '주장으로 끝맺었다', '깎아내리는 표현이 없다'],
              { prompt: '마무리: 틀을 채워 끝맺으세요.', toolOptions: { starter: '오늘 든 근거 가운데 ___이 가장 분명하다. 그러므로 ___.' }, crit: ['핵심 근거를 다시 말했다', '주장으로 끝맺었다'] },
              null, { conclude: '토론 원고는 세 갈래 근거의 입론, 사실을 인정하며 사료로 답하는 재반박, 핵심 근거로 끝맺는 마무리로 이루어져요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내 원고의 예상 반론과 재반박을 한 줄씩 옮겨 써요.' }] },
      }),
      M('activity.time', {
        title: '발언 시간 계획', method: '발언 시간 계획', tool: 'timer', minutes: 16,
        levels: { easy: '두 단계(입론·마무리)의 차례를 놓고 발언 시간을 맞춘다.', base: '네 단계의 차례를 놓고 발언·준비 시간을 맞춘다.', challenge: '전체 토론 시간이 정해진 초에 맞도록 발언·준비·번 수를 조정한다.' },
        activity: {
          title: '발언 시간 계획', tool: 'timer',
          teacher: '"한 모둠이 발언할 시간을 어떻게 나누면 공평할까요?" 단계 카드를 놓고 타이머로 발언·준비 시간을 맞춘 뒤, 전체 시간이 수업 안에 들어가는지 함께 셈한다. 입론에만 시간을 몰아주는 학생에게 "재반박할 시간이 없으면 반론에 어떻게 답할까요?"라고 되묻는다. 시간은 우리 반 약속이라 학급 사정에 맞게 바꿔도 된다고 밝힌다.',
          task: '토론 단계 카드를 차례로 놓고, 단계마다 발언·준비 시간을 타이머로 맞춰 전체 시간을 계획해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '토론 네 단계를 차례로 놓으세요.', toolOptions: { title: '토론 단계 차례', cards: ['재반박', '마무리', '입론', '반론'] }, target: { order: ['입론', '반론', '재반박', '마무리'] } },
              { prompt: '토론 두 단계를 차례로 놓으세요.', toolOptions: { cards: ['마무리', '입론'] }, target: { order: ['입론', '마무리'] } }),
            IT({ prompt: '단계마다 발언 120초, 사이 준비 30초, 4단계가 되도록 타이머를 맞추세요.', toolOptions: { title: '발언 시간', labels: ['발언', '준비'], plan: { work: 60, rest: 10, rounds: 2 }, workStep: 10 }, target: { plan: { work: 120, rest: 30, rounds: 4 } } },
              { prompt: '단계마다 발언 120초, 사이 준비 30초, 2단계가 되도록 맞추세요.', target: { plan: { work: 120, rest: 30, rounds: 2 } } }),
            IT({ prompt: '발언 90초·준비 30초로 두고, 전체 시간이 450초가 되도록 단계 수를 맞추세요.', toolOptions: { title: '전체 시간 맞추기', labels: ['발언', '준비'], plan: { work: 90, rest: 30, rounds: 2 }, showTotal: true, workStep: 10 }, target: { plan: { work: 90, rest: 30 }, total: 450 } },
              null,
              { prompt: '전체 시간이 570초가 되도록 발언·준비 시간과 단계 수를 스스로 정하세요(준비는 30초).', toolOptions: { plan: { work: 60, rest: 30, rounds: 2 } }, target: { plan: { rest: 30 }, total: 570 } },
              { conclude: '발언과 준비 시간을 미리 나누면 모든 단계가 공평하게 말할 기회를 얻어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 반 토론 시간 계획을 써요.', columns: ['단계', '발언 시간'], cells: [['입론', ''], ['반론', ''], ['재반박', ''], ['마무리', '']], answer: '(예) 2분, 1분 30초, 1분, 30초' }] },
        notes: '450초 = 발언 90초×4번 + 준비 30초×3번, 570초 = 발언 120초×4번 + 준비 30초×3번. 학급 사정에 맞게 바꿔 말해도 된다.',
      }),
      M('activity.debate', {
        title: '모둠 대항 토론', method: '모둠 토론 진행', tool: 'timer', minutes: 16, delivery: 'guided',
        levels: { easy: '입론만 하고, 청중 모둠이 기준 칸 3개를 표시한다.', base: '전 단계를 하고, 청중 모둠이 기준 칸 4개와 점수를 적는다.', challenge: '마무리 뒤 청중 질문 1분까지 넣어 진행한다(교사 진행).' },
        activity: {
          title: '모둠 대항 토론', tool: 'timer',
          teacher: '"지금부터 모둠 대항 토론을 시작합니다. 사회는 선생님이 봅니다." 한쪽은 정부 공식 입장을 사료로 말하고, 다른 쪽은 일본 정부의 주장을 정확히 소개하고 따지는 역을 맡는다고 다시 밝힌다. 사람을 탓하는 말이 나오면 사회자가 바로 멈추고 "주장을 짚는 말로 다시 해 볼까요?"라고 청한다. 청중 모둠은 기준 칸과 점수로 근거·출처·태도를 평가한다.',
          task: '교사의 사회에 따라 모둠 대항 독도 토론을 하고, 청중 모둠은 기준 칸에 표시하고 점수를 적어요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '토론 진행 차례를 놓으세요.', toolOptions: { title: '토론 진행', cards: ['청중 평가', '입론', '마무리', '반론·재반박'] }, target: { order: ['입론', '반론·재반박', '마무리', '청중 평가'] } },
              { prompt: '토론 진행 차례 세 단계를 놓으세요(입론 중심).', toolOptions: { cards: ['청중 평가', '입론', '입론 준비'] }, target: { order: ['입론 준비', '입론', '청중 평가'] } },
              { prompt: '청중 질문까지 넣어 토론 진행 차례를 놓으세요.', toolOptions: { cards: ['청중 질문', '입론', '마무리', '반론·재반박', '청중 평가'] }, target: { order: ['입론', '반론·재반박', '마무리', '청중 질문', '청중 평가'] } }),
            IT({ prompt: '들은 토론에서 지킨 기준 칸을 모두 표시하세요.', toolOptions: { title: '청중 기준표', safety: ['근거마다 출처를 밝혔다', '세 갈래 근거를 썼다', '사실인 상대 근거를 인정했다', '사람이 아니라 주장을 짚었다'] }, target: { safety: true } },
              { prompt: '들은 입론에서 지킨 기준 칸 세 개를 표시하세요.', toolOptions: { safety: ['근거마다 출처를 밝혔다', '세 갈래 근거를 썼다', '사람이 아니라 주장을 짚었다'] }, target: { safety: true } }),
            IT({ prompt: '두 모둠에 근거·태도 점수(10점 만점)를 적으세요.', toolOptions: { title: '청중 점수', unit: '점', fields: [{ label: '가 모둠', unit: '점', step: 1 }, { label: '나 모둠', unit: '점', step: 1 }] }, target: { records: true } },
              null, null, { conclude: '좋은 토론은 이기는 것이 아니라, 사료와 출처로 말하고 사실을 인정하며 사람이 아니라 주장을 짚는 데서 나와요.' }),
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '들은 토론에서 지킨 것에 표시해요.', options: ['출처를 밝혔다', '세 갈래 근거를 썼다', '사실인 상대 근거를 인정했다', '사람이 아니라 주장을 짚었다'] }] },
        notes: '교사가 사회를 보는 활동이다. 학생에게 어느 나라 사람 역할도 맡기지 않는다 — 상대 역은 일본 정부의 주장을 정확히 소개하고 따지는 \'주장 검토 역\'이다.',
      }),
      M('wrap.weigh', {
        title: '근거 갈래 힘 견주기', method: '근거 힘 견주기 그래프', tool: 'chart', minutes: 7,
        levels: { easy: '세 갈래 막대를 그리고 값이 보인다.', base: '세 갈래 막대를 그리고 가장 적게 쓴 갈래를 읽는다.', challenge: '약한 갈래를 보완할 계획을 활동지에 쓴다.' },
        wrap: {
          teacher: '"우리 모둠은 토론에서 어느 갈래의 근거를 가장 적게 썼을까요?" 표의 수는 한 모둠의 토론 기록을 가상으로 정리한 것이라고 밝히고, 우리 모둠의 실제 기록과 견주게 한다. "역사 근거만 많으면 충분하다"는 학생에게 "상대가 국제법으로 물으면 어떻게 답할까요?"라고 되묻는다. 막대가 짧은 갈래가 다음 공부의 과제라고 짚는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'chart', options: CB('토론에서 쓴 근거 갈래(한 모둠, 가상 기록)', '번', USED, { xLabel: '갈래', yLabel: '쓴 횟수', max: 6, scale: 1 }),
              prompt: '표를 보고 갈래별로 쓴 근거 횟수 막대를 그려요.', target: { build: true }, difficulty: 0.2 },
            { prompt: '표를 보고 갈래별 막대를 그려요(값이 보여요).', toolOptions: { showValues: true } }),
            { type: 'tool', tool: 'chart', options: CR('토론에서 쓴 근거 갈래(한 모둠, 가상 기록)', '번', USED, { xLabel: '갈래', yLabel: '쓴 횟수', max: 6, scale: 1, question: '가장 적게 쓴 갈래는?', choices: USED.map((d) => d[0]) }), prompt: '가장 적게 쓴 근거 갈래를 골라요.', target: { pick: 1 }, difficulty: 0.15 },
            { type: 'short', prompt: '가장 적게 쓴 갈래를 보완할 근거 하나와 그 출처를 써요.' },
          ],
        },
        worksheet: {
          title: '근거 갈래 견주기',
          items: [
            { type: 'table', prompt: '우리 모둠이 토론에서 쓴 근거 갈래를 세어 써요.', columns: ['갈래', '쓴 횟수'], cells: [['역사', ''], ['지리', ''], ['국제법', '']], answer: '(모둠마다 다름)' },
            { type: 'short', prompt: '다음 토론에서 보완할 갈래와 계획을 한 문장으로 써요.' },
          ],
        },
      }),
      M('wrap.reflect', {
        title: '중학 독도 공부 성찰', method: '중학 독도 공부 성찰', tool: 'emotion', minutes: 7,
        levels: { easy: '돌아볼 상황 2개와 성찰 문장을 잇는다.', base: '상황 3개와 성찰 문장을 잇는다.', challenge: '상황을 이은 뒤 내 성찰 문장 하나를 더 쓴다.' },
        wrap: {
          teacher: '"7학년 사료 비판부터 9학년 토론까지, 세 해 동안 무엇이 달라졌나요?" 상황과 성찰 문장을 이은 뒤, 한 사람씩 가장 자랑스러운 변화 하나를 말하게 한다. "우리 땅이라는 걸 외치는 법을 배웠다"는 학생에게 "외치는 것과 근거로 설명하는 것 가운데 무엇을 배웠을까요?"라고 되묻는다. 고등학교에서는 국제법과 수호 활동, 바람직한 영토관으로 이어진다고 알린다.',
          exitTicket: [
            IT(EX('emotion', MB('세 해 독도 공부를 돌아보며 상황과 성찰 문장을 이어요.', [['7학년 사료 비판', '누가·언제·왜를 먼저 묻게 됐다'], ['8학년 근대 사료', '상대 정부 문서도 근거가 됨을 알았다'], ['9학년 토론', '사람이 아니라 주장을 짚게 됐다']], ['큰 소리로 외치면 된다고 배웠다']), 0.15),
              LV(MB('두 상황과 성찰 문장을 이어요.', [['7학년 사료 비판', '누가·언제·왜를 먼저 묻게 됐다'], ['9학년 토론', '사람이 아니라 주장을 짚게 됐다']], []))),
            { type: 'choice', prompt: '세 해 독도 공부에서 가장 중요하게 익힌 태도로 알맞은 것은?', options: ['상대 나라를 미워하는 마음', '사료와 출처로 차분히 설명하는 태도', '큰 목소리로 외치는 태도'], answer: 1, difficulty: 0.1, explain: '근거와 출처, 존중하는 태도가 설득의 힘이에요.' },
            { type: 'short', prompt: '세 해 독도 공부를 돌아보는 내 성찰 문장을 하나 써요.' },
          ],
        },
        worksheet: {
          title: '중학 독도 공부 성찰',
          items: [
            { type: 'table', prompt: '학년마다 기억에 남는 것을 한 줄씩 써요.', columns: ['학년', '기억에 남는 것'], cells: [['7학년', ''], ['8학년', ''], ['9학년', '']], answer: '(학생마다 다름)' },
            { type: 'short', prompt: '고등학교 독도 공부에서 더 알고 싶은 것 하나를 써요.' },
          ],
        },
      }),
    );
  }

  PaperLessons.registerModules(ALL);
})();
