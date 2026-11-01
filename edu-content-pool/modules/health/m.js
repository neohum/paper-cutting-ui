/* 창체 법정교육 보건교육 — 중학교(7~9학년) 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/safety-b.json 의 health 중.
 * 근거: 학교보건법 제9조·제9조의2(보건교육 — 학교급별 1개 학년 이상 연 17차시, 흡연·음주·약물 오남용 예방은 보건교육 내용), research-mandatory §2 중 보건 주제(미검증),
 *   아동안전교육의 감염병 예방 영역. 근거 파일에는 항목 제목만 있고 세부 사실·수치가 없다 — 아래 '사람 확인' 목록에 모두 모았다.
 * 주제 9개 · 71모듈(determinants 7, 나머지 8주제 각 8). 학년군 주제는 7·8·9학년 공통(추천 조합은 7학년 17차시).
 * 중 기준: 사례 분석·딜레마 토의(갈림길·결과)·가상 자료 해석·짧은 글쓰기(기준표 자기 평가)·역할극 대본·캠페인.
 * 지킨 틀:
 *   - 학생 자신의 몸무게·몸 상태·병력·접종 여부·수면 시간·기분·가정 형편·흡연·음주 경험을 묻거나 채점하지 않는다. 채점 문항은 늘 가상 인물(가명 한두 글자)이고,
 *     스스로 점검은 '해 보겠다·해 보았다' 같은 다짐·실습만 묻는다(selfCheck·level 'any').
 *   - 몸·체형·외모를 평가하지 않고, 음식·몸을 좋다/나쁘다로 낙인찍지 않으며, 다이어트·보충제·건강식품을 권하지 않는다. 몸 평가 말은 함정 선택지로만 나오고 늘 바로잡는다.
 *   - 영양 수치·권장량·권장 수면 시간·접종률 기준은 쓰지 않는다. 그래프 수치는 모두 수업용 가상 자료이고 화면 제목에 '가상'을 밝혔다. 연습 시간 값은 '우리 반 약속'이다.
 *   - 정신건강: 방법 묘사 없이 위험 신호·도움 요청 차례만. 전화번호는 쓰지 않고 교사가 최신 공식 번호를 확인해 안내한다(학교 밖 상담·금연상담전화 포함).
 *   - 약물 예방(saf-drug.m)·응급처치(saf-firstaid.m)·양성평등(gender.m)과 문구(거절 4단계: 분명히·까닭·대안·자리 뜨기, 119 신고)는 맞추고 장면은 되풀이하지 않는다.
 *
 * 사람 확인(part1 — determinants·infection-chain·vaccine-herd·sleep-rhythm·active-life): 근거 파일에 없는 사실·수칙 문장(모듈 id — 확인할 곳)
 *   - determinants 전반: 건강 결정 요인 네 갈래(생활 습관·물리적 환경·사회적 환경·보건의료), 보건소에서 예방접종·건강 상담 — 질병관리청 국가건강정보포털, 관할 보건소 안내
 *   - determinants.intro.factor-chart: 요인별 몫(40·25·20·15%)은 수업용 예시 자료(실제 통계 아님 — 화면에 밝힘)
 *   - determinants.activity.choice-dilemma: 방과 후 돌봄·지역 아동 급식 안내를 담임이 알아봐 준다는 장면 — 학교·지자체 돌봄 안내로 확인
 *   - infection-chain 전반: 감염의 세 고리(병원체·전파 경로·감수성 있는 사람)와 끊는 행동(소독·아플 때 쉬기 / 손 씻기·기침 예절(옷소매)·환기 / 예방접종·몸 돌보기),
 *     "열이 내려도 남에게 옮길 수 있다", 컵·물병·수건 따로 쓰기, 화장실 뒤·먹기 전 손 씻기 — 질병관리청 감염병 예방 수칙, 교육부 학교 감염병 예방 안내
 *   - infection-chain.intro.body-route: 병원체가 들어오는 곳(눈·코·입·상처) — 질병관리청
 *   - infection-chain.activity.outdoor-order: 야외 활동 수칙(긴소매·긴바지, 풀밭에 돗자리, 풀숲 길 피하기, 돌아와 옷 털고 씻기, 며칠 동안 열 살피기) — 질병관리청 진드기 매개 감염병 예방 수칙
 *   - infection-chain.activity.handwash-timer: 손 씻기 여섯 단계(손바닥·손등·손가락 사이·엄지·손끝·손목), 문지르기 20초·바꾸기 10초는 우리 반 연습 약속 값 — 질병관리청 올바른 손 씻기 안내
 *   - infection-chain.activity.fever-dilemma: 아플 때 보호자·학교에 알리고 쉰다, 아파서 못 본 시험은 학교 절차를 묻는다 — 교육부 학교 감염병 예방 위기대응 매뉴얼, 학교 학업성적관리규정
 *   - vaccine-herd 전반: 백신 원리(항원·항체·면역 기억), 집단면역과 접종할 수 없는 사람(어린 아기 등) 보호, 접종 뒤 드물게 열·붓기, 접종을 미루거나 상의가 필요한 경우(열이 많이 나는 날 등) — 질병관리청 예방접종도우미, 국가예방접종 안내
 *   - vaccine-herd.activity.herd-chart: 접종 비율별 환자 수는 수업용 가상 자료(실제 집단면역 기준은 병마다 다름 — 단정하지 않음)
 *   - vaccine-herd.wrap.record-check: 예방접종 기록 확인 방법 — 질병관리청 예방접종도우미(학교가 최신 안내로 확인)
 *   - sleep-rhythm 전반: "사춘기에는 잠드는 시각이 늦어지기 쉽다", 화면 빛·늦은 카페인이 잠을 늦출 수 있다, 주말 몰아 자기가 리듬을 흐트러뜨릴 수 있다, 잠 부족이 다음 날 집중을 떨어뜨릴 수 있다,
 *     짧은 낮잠, 아침 햇빛, 수면 위생 습관 — 질병관리청 국가건강정보포털(청소년 수면), 대한수면학회 수면 위생 안내
 *   - sleep-rhythm.activity.week-chart·intro.clock-shift: 가상 인물의 시각·잠잔 시간은 가상 기록(권장 수면 시간은 쓰지 않음)
 *   - active-life 전반: 오래 앉아 있는 시간을 자주 끊는 움직임이 도움이 된다, 신체 활동이 심장·폐·근육·뼈를 돕는다, 끼니를 거르는 다이어트·한 끼 챌린지가 성장기 몸에 무리를 줄 수 있다,
 *     매체 속 몸 사진은 보정·선택된 것일 수 있다 — 질병관리청 국가건강정보포털(청소년 신체활동), 보건복지부 한국인 신체활동 지침, 식품의약품안전처 부당광고 안내
 *   - active-life.activity.stretch-timer: 스트레칭 차례와 늘이기 15초·쉬기 5초(우리 반 연습 약속 값) — 체육·보건 선생님 확인
 * 사람 확인(part2 — mental-help·tobacco-alcohol·health-media·health-services): 근거 파일에 없는 사실·수칙 문장(모듈 id — 확인할 곳)
 *   - mental-help.intro.signal-body: 스트레스 때 흔한 몸 신호(어깨 뭉침·배 아픔·가슴 두근거림·두통) — 국가정신건강정보포털(스트레스), 질병관리청 국가건강정보포털
 *   - mental-help.activity.link-web: "잠·운동·관계가 기분에 영향을 준다", "늦게 잠들면 다음 날 짜증이 늘 수 있다", 잠이 줄어드는 되먹임 고리 — 국가정신건강정보포털, 한국청소년상담복지개발원
 *   - mental-help.activity.friend-dilemma·help-order·wrap.support-write: "안전이 걸린 비밀은 믿을 만한 어른에게 잇는다", 도움 차례(알아차리기 → 들어 주기 → 믿을 만한 어른에게 함께 가기 → 상담 이어 가기),
 *     건넬 말("말해 줘서 고마워")·하지 말 말("그 정도로 뭘 그래") — 보건복지부·중앙자살예방센터 생명지킴이 교육 자료(보고·듣고·말하기), 교육부 Wee 클래스 안내. "다 그만두고 싶다"는 위험 신호로만 다루고 방법은 묘사하지 않음
 *   - mental-help.activity.calm-timer: 천천히 숨쉬기·어깨 힘 빼기 차례, "어지러우면 멈춘다", 숨쉬기 30초·쉬기 10초·3번(우리 반 연습 약속 값, 근거 수치 아님) — 국가정신건강정보포털 이완 연습 안내
 *   - mental-help.wrap.help-map: 학교 밖 청소년 상담 전화 번호는 파일에 적지 않음 — 교사가 수업 전 최신 공식 번호(여성가족부·한국청소년상담복지개발원) 확인
 *   - tobacco-alcohol.intro.organ-find: 흡연·음주가 폐·뇌·간·심장에 영향을 준다, "성장기 뇌가 더 영향을 받는다", 기관이 하는 일 글 — 질병관리청·보건복지부 금연 안내, 보건복지부 음주 폐해 예방 자료
 *   - tobacco-alcohol.activity.refuse-dilemma·role-script·wrap.myth-sort: "니코틴은 의존을 일으킨다", "처음 한 번이 다음 권유와 의존으로 이어질 수 있다", "전자담배에서 나오는 것은 수증기만이 아니며 니코틴 등이 들어 있을 수 있다",
 *     거절 4단계(분명히·까닭·대안·자리 뜨기 — saf-drug.m 과 같은 말) — 질병관리청·보건복지부 금연 안내(국가금연지원센터)
 *   - tobacco-alcohol.activity.help-route: 보건소 금연클리닉에서 금연 상담·도움을 받을 수 있다, 금연상담전화(번호는 적지 않음 — 교사가 보건복지부 공식 안내로 확인) — 보건복지부·관할 보건소
 *   - tobacco-alcohol.activity.medicine-check·wrap.myth-sort: 약 바르게 쓰기(설명서의 먹는 양·정해진 때·같은 성분 겹쳐 먹지 않기·처방약은 처방받은 사람만·의사가 정한 날까지·약사에게 묻기), 먹기 전 이름과 사용기한 보기 — 식품의약품안전처 의약품 안전 사용 안내(의약품안전나라)
 *   - health-media 전반: 과장 신호 세 갈래(즉시·완치·누구나), 확인 질문 넷(출처·근거·목적·날짜), "조회 수·후기는 효과의 근거가 아니다", "유료 광고·협찬 표시를 찾는다" — 식품의약품안전처 부당 광고 안내, 한국소비자원 건강식품 광고 주의 자료, 시청자미디어재단 미디어 리터러시 자료
 *   - health-media.intro.claim-chart: 만족 점수 52·50점, 눈금 48부터 — 수업용 가상 예시 자료(화면에 밝힘)
 *   - health-media.activity.buy-dilemma·source-check: "성장에는 잠·운동·고른 식사가 먼저" — 질병관리청 국가건강정보포털(청소년 성장), 보건소. 광고 A·안내 B 문구와 '키 크는 젤리'는 가상
 *   - health-services 전반: 보건실·보건소(예방접종·건강 상담)·의원(진찰·처방)·약국(조제·복약 안내)·응급실(위급 환자) 쓰임 구별, "반응이 없거나 숨쉬기가 이상하면 먼저 119", 119에 주소와 상태를 말하고 안내가 끝날 때까지 끊지 않는다
 *     — 보건복지부(응급의료포털 E-Gen), 소방청 119 신고 안내, 관할 보건소. 응급 대응 말은 saf-firstaid.m 과 맞춤
 *   - health-services.activity.night-dilemma: 열이 나지만 말을 잘 하고 물을 마시면 먼저 보호자에게 알리고 살핀다, "아이 약과 어른 약은 다를 수 있어 어른이 확인하고 먹인다" — 질병관리청 국가건강정보포털(소아 발열), 식품의약품안전처
 *   - health-services.activity.service-sort: "피가 금방 멈추고 걸을 수 있으면 집에서 살피고 필요하면 의원" — 보건복지부 응급의료포털(응급실 이용 안내)
 *   - health-services.activity.budget: 물건 값(줄넘기 5,000원 등)·용돈 2만 원은 수업용 가상 값
 */
(function () {
  const ALL = [];
  // 주제마다 공통 칸을 채우는 모듈 틀. sid = '<intro|activity|wrap>.<이름>'
  const MK = (topic, grades) => (sid, o) => Object.assign({ id: `health.m.${topic}.${sid}`, schema: 'edu-module.v1', type: sid.split('.')[0], domain: 'health', band: '중', topic: `health.m.${topic}`, grades }, o);
  const G = [7, 8, 9];
  const sid = (s) => (typeof s === 'string' ? s : s.id || s.label);

  // ---- 카드 판 문항 조각: { prompt, toolOptions, target } 을 돌려준다(문항 levels[단계] 에도 그대로 쓴다) ----
  // 나누기: cards [{ id, text, to: 칸id }] — to 가 없으면 남겨야 하는 함정 카드
  const strip = (cards) => cards.map((c) => { const x = Object.assign({}, c); delete x.to; delete x.ok; return x; });
  const SB = (prompt, slots, cards, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'sort', slots, cards: strip(cards) }, opt), target: { sort: Object.fromEntries(slots.map((s) => [sid(s), cards.filter((c) => c.to === sid(s)).map((c) => c.id)])) } });
  // 분류판(sortboard 글 카드 모드): mode 없이 slots·cards
  const SBX = (prompt, slots, cards, opt) => ({ prompt, toolOptions: Object.assign({ slots, cards: strip(cards) }, opt), target: { sort: Object.fromEntries(slots.map((s) => [sid(s), cards.filter((c) => c.to === sid(s)).map((c) => c.id)])) } });
  // 차례: cards 를 바른 차례로 적는다(화면에서는 섞여 나온다). trap = 끼워 둔 함정 카드(차례 칸에 넣지 않음)
  const OB = (prompt, cards, opt, trap) => ({ prompt, toolOptions: Object.assign({ mode: 'order', slots: cards.length, cards: [...cards, ...(trap || [])] }, opt), target: { order: cards.map((c) => c.id) } });
  // 짝: pairs [[칸 글, 카드 글]] + 함정 카드 글
  const MB = (prompt, pairs, extra, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'match', slots: pairs.map((p, i) => ({ id: `s${i + 1}`, label: p[0] })), cards: [...pairs.map((p, i) => ({ id: `k${i + 1}`, text: p[1] })), ...(extra || []).map((t, i) => ({ id: `x${i + 1}`, text: t }))] }, opt), target: { match: Object.fromEntries(pairs.map((p, i) => [`s${i + 1}`, `k${i + 1}`])) } });
  // 빈칸: pairs [['…___…', 카드 글]] — 칸 하나에 카드 한 장
  const FB = (prompt, pairs, extra, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'fill', slots: pairs.map((p, i) => ({ id: `f${i + 1}`, label: p[0] })), cards: [...pairs.map((p, i) => ({ id: `w${i + 1}`, text: p[1] })), ...(extra || []).map((t, i) => ({ id: `y${i + 1}`, text: t }))] }, opt), target: { fill: Object.fromEntries(pairs.map((p, i) => [`f${i + 1}`, `w${i + 1}`])) } });
  // 고르기: cards [{ id, text, ok }] — ok 인 카드만 바구니에
  const PB = (prompt, basket, cards, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'pick', basket, cards: strip(cards) }, opt), target: { pick: cards.filter((c) => c.ok).map((c) => c.id) } });
  // 점검표(kitchen checklist): items [{ id, text, ok }] — ok 인 것만 표시해야 맞음
  const CL = (prompt, title, items, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'checklist', title, items: strip(items) }, opt), target: { checklist: items.filter((c) => c.ok).map((c) => c.id) } });
  // 문항 = 기본 조각 + 단계별 조각
  const IT = (base, easy, challenge, more) => Object.assign({}, base, { levels: Object.assign({}, easy ? { easy } : {}, challenge ? { challenge } : {}) }, more);
  const pickCards = (cards, ids) => ids.map((i) => cards.find((c) => c.id === i));
  // 출구 질문 교구 문항: 조각 → { type: 'tool', tool, prompt, options, target }
  const X = (tool, frag, more) => Object.assign({ type: 'tool', tool, prompt: frag.prompt, options: frag.toolOptions, target: frag.target }, more);
  // 마음 크기(emotion scale) — 내 생각 돌아보기라 어느 크기든 맞다
  const SCALE = (situation, feeling, prompt, labels) => ({ type: 'tool', tool: 'emotion', options: { mode: 'scale', situation, feeling, steps: 5, scaleLabels: labels || { 1: '전혀 아니다', 5: '아주 그렇다' } }, prompt, target: { level: 'any' }, difficulty: 0.1 });
  // 시계 시각
  const H = (h, m) => ({ h, m });

  // ---- 갈림길(dilemma): 깊이 3 나무 하나로 단계별 판을 만든다 ----
  // 선택에 next 가 있으면 end = 그 깊이에서 잘렸을 때 보일 마무리 글
  const cut = (sc, d) => Object.assign({}, sc, { choices: sc.choices.map((c) => {
    const x = Object.assign({}, c); delete x.end;
    if (c.next && d > 1) x.next = cut(c.next, d - 1);
    else { delete x.next; if (c.next) x.ending = c.end || '다음 단계에서 이어지는 장면을 따라가 봐요.'; }
    return x;
  }) });
  // good = 가장 깊은 판의 바른 길 목록 [[a, b, c], [d]] — 단계마다 그 깊이까지 자른다
  const paths = (good, d) => { const out = []; for (const g of good) { const p = g.slice(0, d); if (!out.some((q) => q.join('>') === p.join('>'))) out.push(p); } return out; };
  // p = { easy, base, challenge } 문항 글, D = { e, b, c } 단계별 갈림 수(기본 1·2·3),
  // R = 근거 카드, ok = 맞는 근거 id. 쉬움은 근거 없이 길만, 기본은 근거 하나 이상, 도전은 more 근거까지.
  const DIL = (p, title, tree, good, R, ok, D, more, extra) => {
    const d = Object.assign({ e: 1, b: 2, c: 3 }, D);
    return Object.assign({
      prompt: p.base, toolOptions: { title, scene: cut(tree, d.b), reasons: R, compare: true }, target: { path: paths(good, d.b), reasons: ok, some: true },
      levels: {
        easy: { prompt: p.easy, toolOptions: { scene: cut(tree, d.e), reasons: [] }, target: { path: paths(good, d.e) } },
        challenge: { prompt: p.challenge, toolOptions: { scene: cut(tree, d.c), reasons: [...R, ...((more && more.reasons) || [])] }, target: { path: paths(good, d.c), reasons: [...ok, ...((more && more.ok) || [])], some: true } },
      },
    }, extra);
  };
  // 도입 시연용 갈림길: 깊이 d 판 + 바른 길 하나
  const DEMO_DIL = (title, tree, good, R, d) => ({ tool: 'dilemma', options: { title, scene: cut(tree, d || 2), reasons: R || [] }, sequence: [{ path: paths(good, d || 2)[0], reasons: R && R.length ? [R[0].id] : [] }] });

  // ---- 칸 지도 ----
  const PIN = (prompt, opt, target, more) => Object.assign({ prompt, toolOptions: opt, target }, more);
  // ---- 그래프 읽기 ----
  const RD = (prompt, opt, target) => ({ prompt, toolOptions: Object.assign({ mode: 'read' }, opt), target });

  // 도움 받을 곳 — 체계도 concepts·brief 에 있는 것만. 전화번호는 쓰지 않고 학교가 확인해 넣는다.
  const LOCAL = '[학교가 확인해 넣는 지역 상담 번호]';
  const SAFE_NOTE = '가상 인물·가상 장면이다. 학생 자신의 몸무게·몸 상태·병력·가정 형편·경험을 묻거나 채점하지 않고 "가상 인물이라면"으로만 이야기한다. 걱정을 말하는 학생은 수업 뒤 따로 만나 보건 선생님·상담 선생님(Wee 클래스)으로 잇는다.';
  const DATA_NOTE = '그래프 수치는 수업용으로 지어낸 가상 자료다(실제 통계 아님) — 화면 제목에 \'가상\'을 밝혔다.';

  // ==== 7~9학년 · 건강을 결정하는 요인 (health.m.determinants) ====
  {
    const M = MK('determinants', G);
    const FOUR = ['생활 습관', '물리적 환경', '사회적 환경', '보건의료'];
    // 가상 학생 서진의 하루에서 뽑은 카드
    const SJ = [
      { id: 'a1', text: '밤 1시 넘어 잠드는 날이 많다', to: '생활 습관' }, { id: 'a2', text: '쉬는 시간마다 앉아서 휴대폰만 본다', to: '생활 습관' },
      { id: 'b1', text: '집에서 버스 정류장까지 멀다', to: '물리적 환경' }, { id: 'b2', text: '동네에 걸을 만한 공원이 없다', to: '물리적 환경' },
      { id: 'c1', text: '저녁마다 어린 동생을 돌본다', to: '사회적 환경' }, { id: 'c2', text: '함께 운동할 친구가 있다', to: '사회적 환경' },
      { id: 'd1', text: '머리가 아플 때 보건실에 간다', to: '보건의료' }, { id: 'd2', text: '보건소에서 예방접종을 받았다', to: '보건의료' },
    ];
    // 두 번째 사례: 가상 학생 다온
    const DO = [
      { id: 'e1', text: '아침을 먹고 걸어서 등교한다', to: '생활 습관' }, { id: 'e2', text: '학교 앞 찻길에 매연이 많다', to: '물리적 환경' },
      { id: 'e3', text: '보호자가 늦게 퇴근해 혼자 저녁을 먹는다', to: '사회적 환경' }, { id: 'e4', text: '학교에서 건강 검사를 받는다', to: '보건의료' },
      { id: 'e5', text: '놀이터 조명이 고장 나 밤엔 못 나간다', to: '물리적 환경' }, { id: 'e6', text: '동아리 친구들과 주말에 자전거를 탄다', to: '사회적 환경' },
    ];
    const WHO2 = ['나 혼자 바꿀 수 있다', '학교·지역이 함께 바꾼다'];
    const CHANGE = [
      { id: 'g1', text: '잠드는 시각을 30분 앞당긴다', to: '나 혼자 바꿀 수 있다' }, { id: 'g2', text: '쉬는 시간에 복도를 한 바퀴 걷는다', to: '나 혼자 바꿀 수 있다' },
      { id: 'g3', text: '공원 가로등을 고친다', to: '학교·지역이 함께 바꾼다' }, { id: 'g4', text: '학교 운동장을 저녁에 연다', to: '학교·지역이 함께 바꾼다' },
      { id: 'g5', text: '물병을 챙겨 다닌다', to: '나 혼자 바꿀 수 있다' }, { id: 'g6', text: '찻길에 횡단보도를 더 만든다', to: '학교·지역이 함께 바꾼다' },
    ];
    // 가상 동네 칸 지도
    const TOWN = { grid: [6, 4], title: '가상의 우리 동네', places: [
      { name: '공원', icon: 'park', at: [4, 0] }, { name: '보건소', icon: 'hospital', at: [1, 0] }, { name: '학교', icon: 'school', at: [2, 2] },
      { name: '서진네 집', icon: 'apartment', at: [0, 3] }, { name: '버스 정류장', icon: 'bus', at: [5, 3] }, { name: '도서관', icon: 'library', at: [3, 1] },
      { name: '공장', icon: 'factory', at: [5, 1] }, { name: '시장', icon: 'market', at: [0, 1] },
    ], roads: [[[0, 2], [1, 2], [2, 2], [3, 2], [4, 2], [5, 2]]] };
    const FACTOR_BAND = [['생활 습관', 40], ['사회적 환경', 25], ['보건의료', 20], ['물리적 환경', 15]];
    // 갈림길: 운동하고 싶지만 공원이 먼 학생(가상 인물 서진)
    const D1 = { text: '서진은 저녁에 운동을 하고 싶지만, 공원은 버스로 20분 거리이고 동네 놀이터는 가로등이 고장 나 어둡다.', ask: '서진은 어떻게 할까?', motif: 'house', choices: [
      { id: 'give', text: '"우리 동네는 안 돼" 하고 운동을 포기한다', result: '몇 주째 저녁마다 앉아만 있게 된다.', impact: [{ who: '서진', text: '몸을 움직일 기회가 줄어든다', tone: -1 }], why: '환경이 막혀 있어도 내가 바꿀 수 있는 부분과 함께 바꿀 부분을 나눠 보면 길이 생겨요.', end: '포기하니 바꿀 수 있는 길도 보지 못했어요.',
        next: { text: '체육 선생님이 "요즘 기운이 없어 보이네"라고 묻는다.', choices: [
          { id: 'tell', text: '공원이 멀고 놀이터가 어둡다고 이야기한다', result: '선생님이 저녁 운동장 개방 안내를 알려 준다.', impact: [{ who: '서진', text: '운동할 곳을 찾는다', tone: 1 }] },
          { id: 'hide', text: '"괜찮아요" 하고 넘긴다', result: '아무것도 바뀌지 않는다.', impact: [{ who: '서진', text: '혼자 끙끙 앓는다', tone: -1 }], why: '사정을 말해야 학교와 어른이 함께 바꿀 수 있어요.' }] } },
      { id: 'home', text: '집 안에서 할 수 있는 운동을 찾아 매일 10분 한다', result: '처음엔 어색하지만 몸이 조금 가벼워진다.', impact: [{ who: '서진', text: '내가 바꿀 수 있는 습관을 바꾼다', tone: 1 }], end: '내가 바꿀 수 있는 습관부터 바꿨어요.',
        next: { text: '서진은 친구들과 밖에서도 뛰고 싶어졌다. 그런데 놀이터는 여전히 어둡다.', choices: [
          { id: 'report', text: '보호자와 함께 주민센터에 가로등 고장을 알린다', result: '얼마 뒤 가로등이 고쳐지고 친구들과 놀이터에서 만난다.', impact: [{ who: '동네 아이들', text: '밤에도 안전하게 논다', tone: 1 }] },
          { id: 'dark', text: '어두워도 그냥 놀이터에서 뛴다', result: '어두운 바닥 턱에 걸려 넘어질 뻔한다.', impact: [{ who: '서진', text: '다칠 뻔한다', tone: -1 }], why: '환경 문제는 참고 견디기보다 알려서 함께 고쳐요.' }] } },
      { id: 'blame', text: '"운동 안 하는 건 내 의지가 약해서야" 하고 자신을 탓한다', result: '마음만 무겁고 할 수 있는 일은 떠오르지 않는다.', impact: [{ who: '서진', text: '자신을 탓하며 기운이 빠진다', tone: -1 }], why: '건강은 개인 의지만이 아니라 환경·사회 요인과 함께 정해져요. 탓하기보다 바꿀 방법을 찾아요.', ending: '자신만 탓해서 바뀐 것이 없었어요.' }] };
    const R1 = [{ id: 'r1', text: '내가 바꿀 수 있는 습관부터 바꿀 수 있다' }, { id: 'r2', text: '환경 문제는 알려서 함께 고칠 수 있다' },
      { id: 'r3', text: '건강은 전적으로 의지에 달렸다', why: '의지만이 아니라 동네 환경·가족 사정·의료도 건강을 함께 정해요.' }, { id: 'r4', text: '환경이 나쁘면 할 수 있는 것이 없다', why: '환경이 막혀 있어도 바꿀 수 있는 부분이 있고, 환경도 함께 바꿀 수 있어요.' }];
    const R1M = { reasons: [{ id: 'r5', text: '어른·기관에 알리는 것도 건강을 지키는 행동이다' }], ok: ['r5'] };
    // 다온: 학교 앞 찻길 매연과 걷기 등교
    const D2 = { text: '다온은 걸어서 등교하는데, 학교 앞 찻길은 아침마다 차가 밀려 매연이 심하다. 친구는 "그냥 버스 타"라고 한다.', ask: '다온은 어떻게 할까?', motif: 'house', choices: [
      { id: 'bus', text: '걷기를 그만두고 버스만 탄다', result: '매연은 피하지만 하루에 걷는 시간이 거의 없어진다.', impact: [{ who: '다온', text: '움직이는 시간이 줄어든다', tone: -1 }], why: '한 가지 문제를 피하려다 좋은 습관까지 버릴 필요는 없어요. 다른 길을 찾아봐요.', end: '걷는 습관까지 그만뒀어요.',
        next: { text: '몇 주 뒤 다온은 몸이 무겁다고 느낀다.', choices: [
          { id: 'back', text: '한 정거장 먼저 내려 골목길로 걷는다', result: '매연이 적은 길로 다시 걷게 된다.', impact: [{ who: '다온', text: '걷는 습관을 되찾는다', tone: 1 }] },
          { id: 'sit', text: '그대로 지낸다', result: '앉아 있는 시간만 늘어난다.', impact: [{ who: '다온', text: '몸이 더 무거워진다', tone: -1 }], why: '바꿀 수 있는 부분을 찾아 다시 움직여요.' }] } },
      { id: 'alley', text: '찻길 대신 골목길로 돌아서 걷는다', result: '조금 멀지만 공기가 덜 탁하다.', impact: [{ who: '다온', text: '걷기를 이어 간다', tone: 1 }], end: '길을 바꿔 걷기를 이어 갔어요.',
        next: { text: '학생회에서 "등굣길 건강" 의견을 모은다.', choices: [
          { id: 'voice', text: '찻길 매연 문제와 골목길 안전 표지를 제안한다', result: '학교가 구청에 등굣길 개선을 요청한다.', impact: [{ who: '전교생', text: '등굣길이 나아질 수 있다', tone: 1 }] },
          { id: 'skip', text: '"나는 골목길로 다니니까" 하고 넘긴다', result: '다른 학생들은 여전히 찻길로 다닌다.', impact: [{ who: '다른 학생', text: '매연 속을 걷는다', tone: -1 }], why: '환경 요인은 여럿이 함께 알려야 바뀌어요.' }] } },
      { id: 'mask', text: '아무 생각 없이 찻길로 계속 걷는다', result: '매일 아침 매연을 마시며 걷는다.', impact: [{ who: '다온', text: '목이 칼칼해진다', tone: -1 }], why: '걷는 것은 좋은 습관이지만, 길(환경)도 함께 살펴 골라요.', ending: '환경을 살피지 않고 걸었어요.' }] };
    const R2 = [{ id: 'r1', text: '좋은 습관을 지키면서 환경 문제를 피할 길을 찾는다' }, { id: 'r2', text: '환경 문제는 학교·지역에 알려 함께 바꾼다' },
      { id: 'r3', text: '매연이 있으면 걷기는 무조건 그만둬야 한다', why: '길을 바꾸거나 함께 개선을 요청하면 걷기를 이어 갈 수 있어요.' }, { id: 'r4', text: '등굣길은 개인이 어쩔 수 없다', why: '학생 의견이 모이면 학교와 구청이 등굣길을 바꿀 수 있어요.' }];
    // 하늘: 보호자 늦은 퇴근, 혼자 먹는 저녁
    const D3 = { text: '하늘은 보호자가 밤늦게 퇴근해 혼자 저녁을 먹는다. 오늘도 배는 고픈데 차리기가 귀찮다.', ask: '하늘은 어떻게 할까?', motif: 'house', choices: [
      { id: 'skipm', text: '저녁을 거르고 밤늦게 과자로 배를 채운다', result: '밤에 배가 고파 잠이 늦어진다.', impact: [{ who: '하늘', text: '잠이 늦어진다', tone: -1 }], why: '끼니를 거르면 잠과 다음 날 기운까지 이어져요. 혼자서도 차릴 수 있는 방법을 찾아요.', end: '끼니를 걸러 잠까지 늦어졌어요.',
        next: { text: '다음 날 하늘은 학교에서 기운이 없다.', choices: [
          { id: 'tellT', text: '담임 선생님께 저녁을 혼자 먹는 사정을 말해 본다', result: '선생님이 방과 후 돌봄과 지역 아동 급식 안내를 알아봐 준다.', impact: [{ who: '하늘', text: '도움을 받을 길이 생긴다', tone: 1 }] },
          { id: 'keepq', text: '아무에게도 말하지 않는다', result: '같은 저녁이 되풀이된다.', impact: [{ who: '하늘', text: '혼자 견딘다', tone: -1 }], why: '가족 사정은 하늘의 잘못이 아니에요. 믿을 만한 어른에게 말하면 학교와 지역이 도울 수 있어요.' }] } },
      { id: 'simple', text: '밥에 반찬 두 가지를 꺼내 간단히 차려 먹는다', result: '든든하게 먹고 숙제를 시작한다.', impact: [{ who: '하늘', text: '기운을 찾는다', tone: 1 }], end: '혼자서도 간단히 차려 먹었어요.',
        next: { text: '보호자가 "늘 혼자 먹게 해서 미안하다"고 문자를 보낸다.', choices: [
          { id: 'plan', text: '주말에 함께 다음 주 저녁 반찬을 준비하자고 답한다', result: '가족이 함께 저녁 계획을 세운다.', impact: [{ who: '가족', text: '서로 돕는 방법을 찾는다', tone: 1 }] },
          { id: 'blameF', text: '"괜찮아, 원래 그래" 하고 대화를 끝낸다', result: '서로 마음을 나눌 기회가 지나간다.', impact: [{ who: '가족', text: '함께 바꿀 기회를 놓친다', tone: -1 }], why: '가족 사정도 함께 이야기하면 바꿀 수 있는 부분이 생겨요.' }] } },
      { id: 'friend', text: '친구 집에 가서 먹겠다고 보호자에게 말없이 나간다', result: '보호자가 연락이 안 돼 크게 걱정한다.', impact: [{ who: '보호자', text: '걱정한다', tone: -1 }], why: '어디에 있는지 알리지 않으면 안전이 걱정돼요. 함께 방법을 정해요.', ending: '말없이 나가서 가족이 걱정했어요.' }] };
    const R3 = [{ id: 'r1', text: '혼자서도 할 수 있는 작은 방법이 있다' }, { id: 'r2', text: '가족 사정은 함께 이야기하면 바꿀 수 있는 부분이 생긴다' },
      { id: 'r3', text: '혼자 먹는 것은 내 잘못이다', why: '가족의 일하는 시간은 하늘의 잘못이 아니에요. 사회적 환경의 한 부분이에요.' }, { id: 'r4', text: '끼니는 걸러도 상관없다', why: '끼니를 거르면 잠·기운까지 이어져요.' }];

    ALL.push(
      // ---- 도입 ----
      M('intro.two-students', {
        title: '두 학생의 하루 장면 비교', method: '두 학생 하루 비교 사례 읽기', tool: 'story', minutes: 6,
        levels: { easy: '서진의 하루 장면 3장을 차례로 놓고, 교사가 건강에 영향을 준 장면을 함께 짚는다.', base: '장면 4장을 차례로 놓고 건강에 영향을 준 장면을 골라 짝에게 까닭을 말한다.', challenge: '장면 4장을 놓은 뒤, 서진의 의지와 상관없는 숨은 요인(동네 환경·가족 사정) 하나를 찾아 말한다.' },
        intro: {
          teacher: '"같은 반 서진과 다온은 둘 다 건강해지고 싶어 해요. 그런데 하루가 이렇게 다르다면, 두 사람의 건강을 정하는 것은 의지뿐일까요?" 가상 학생 서진의 하루 장면 카드를 시연 단추로 차례대로 놓아 보인다. "운동 안 하는 건 게을러서"라는 말이 나오면 "공원이 버스로 20분 거리이고 저녁마다 동생을 돌본다면, 그것도 게으름일까요?"라고 되묻는다. 오늘은 건강을 정하는 요인이 생활 습관·환경·사회·보건의료로 여러 갈래라는 것을 사례로 따져 본다고 밝힌다.',
          student: '가상 학생 서진의 하루 장면을 차례로 놓아 보고, 건강에 영향을 준 장면 하나를 골라 그 까닭을 짝에게 말해요.',
          demo: { tool: 'story', options: { mode: 'order', slots: 4, title: '서진의 하루', cards: [
            { id: 's1', text: '밤늦게 자서 아침을 거른다', motif: 'moon' }, { id: 's2', text: '버스 정류장까지 한참 걷는다', motif: 'house' },
            { id: 's3', text: '방과 후 동생을 돌본다', motif: 'heart' }, { id: 's4', text: '어두운 놀이터를 지나 집에 온다', motif: 'cloud' }], shuffle: false },
          sequence: [{ order: ['s1', 's2', 's3', 's4'] }] },
          art: { draw: 'a paper-cut split scene of two teenagers on the same school day, one walking past a bright park and one walking a long road past a dark playground carrying a little sibling', banner: '건강을 정하는 것은 의지뿐일까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: SAFE_NOTE + ' 학생 자신의 하루·가족 사정을 발표하게 하지 않는다.',
      }),
      M('intro.factor-chart', {
        title: '요인별 몫 예시 띠그래프', method: '요인별 영향 예시 그래프 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '띠그래프 조각에 값이 보이고, 가장 큰 몫을 고른다.', base: '값을 숨긴 채 조각 크기만 보고 가장 큰 몫과 두 번째 몫을 견준다.', challenge: '이 예시 그래프로 알 수 없는 것(내 건강의 원인)을 고르며 그래프의 한계를 말한다.' },
        intro: {
          teacher: '"이 띠그래프는 수업용으로 만든 예시 자료예요(실제 통계 아님). 생활 습관 조각이 가장 크지만, 나머지 조각을 합치면 어떨까요?" 시연 단추로 가장 큰 조각을 고르는 모습을 보인 뒤 나머지 조각의 합을 함께 어림한다. "그럼 습관만 고치면 된다"는 말에는 "나머지 60이 가리키는 것은 무엇일까요?"라고 되묻는다. 그래프 값은 예시일 뿐 실제 몫이 아니라는 점을 처음과 끝에 밝힌다.',
          student: '예시 띠그래프에서 가장 큰 조각을 찾고, 나머지 조각들이 무엇을 가리키는지 짝과 이야기해요(실제 통계가 아니에요).',
          demo: { tool: 'chart', options: { type: 'band', mode: 'read', title: '건강을 정하는 요인(예시 자료 · 실제 통계 아님)', unit: '%', data: FACTOR_BAND, question: '가장 큰 몫은?', choices: FACTOR_BAND.map((d) => d[0]) }, sequence: [{ pick: 0 }] },
          art: { draw: 'a long paper-cut ribbon divided into four colored bands labeled habits, social life, health care and surroundings, a magnifying glass above it', banner: '한 띠에 여러 요인', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
        },
        notes: DATA_NOTE,
      }),

      // ---- 활동 ----
      M('activity.factor-sort', {
        title: '사례 속 요인 네 갈래로 나누기', method: '사례 속 요인 네 갈래로 나누기', tool: 'sortboard', minutes: 15,
        levels: { easy: '바구니 2개(생활 습관·환경과 사회)에 카드를 나누고, 틀린 바구니에 넣으면 까닭을 말하며 되돌아온다.', base: '바구니 4개(생활 습관·물리적 환경·사회적 환경·보건의료)에 서진·다온 사례 카드를 나눈다.', challenge: '네 바구니로 나눈 뒤, 두 갈래에 걸치는 카드를 따로 고르고 활동지에 그 근거를 쓴다.' },
        activity: {
          title: '사례 속 요인 네 갈래로 나누기', tool: 'sortboard',
          teacher: '"\'동생을 돌본다\'는 서진의 습관일까요, 서진을 둘러싼 사회적 환경일까요?" 카드를 바구니에 넣을 때마다 그 카드가 서진이 혼자 고를 수 있는 일인지 묻게 한다. "공원이 없는 건 건강과 상관없다"는 학생에게 "걸을 곳이 없으면 걷는 습관을 들이기 쉬울까요?"라고 되묻는다. 마지막에는 어떤 카드는 습관과 환경이 함께 얽혀 있다는 점을 짚는다.',
          task: '가상 학생 서진·다온의 사례 카드를 생활 습관·물리적 환경·사회적 환경·보건의료 바구니에 나눠 넣어요.',
          levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            IT(SBX('서진의 사례 카드를 네 바구니에 나누세요.', FOUR, SJ),
              SBX('서진의 사례 카드를 두 바구니에 나누세요.', ['생활 습관', '환경과 사회'], [
                { id: 'a1', text: '밤 1시 넘어 잠드는 날이 많다', to: '생활 습관' }, { id: 'a2', text: '쉬는 시간마다 앉아서 휴대폰만 본다', to: '생활 습관' },
                { id: 'b2', text: '동네에 걸을 만한 공원이 없다', to: '환경과 사회' }, { id: 'c1', text: '저녁마다 어린 동생을 돌본다', to: '환경과 사회' }])),
            IT(SBX('다온의 사례 카드를 네 바구니에 나누세요.', FOUR, DO),
              SBX('다온의 사례 카드를 두 바구니에 나누세요.', ['생활 습관', '환경과 사회'], [
                { id: 'e1', text: '아침을 먹고 걸어서 등교한다', to: '생활 습관' }, { id: 'e2', text: '학교 앞 찻길에 매연이 많다', to: '환경과 사회' },
                { id: 'e3', text: '보호자가 늦게 퇴근해 혼자 저녁을 먹는다', to: '환경과 사회' }, { id: 'e6', text: '동아리 친구들과 주말에 자전거를 탄다', to: '환경과 사회' }])),
            IT(SBX('바꾸는 방법 카드를 누가 바꿀 수 있는지에 따라 나누세요.', WHO2, CHANGE),
              SBX('바꾸는 방법 카드 4장을 누가 바꿀 수 있는지에 따라 나누세요.', WHO2, pickCards(CHANGE, ['g1', 'g2', 'g3', 'g4'])),
              SBX('카드를 습관과 환경이 함께 얽힌 것과 한 갈래만인 것으로 나누세요.', ['습관과 환경이 얽힘', '한 갈래만'], [
                { id: 'h1', text: '메뉴와 입맛 때문에 급식 채소를 남긴다', to: '습관과 환경이 얽힘' }, { id: 'h2', text: '공원이 멀어 걷기를 안 한다', to: '습관과 환경이 얽힘' },
                { id: 'h3', text: '보건소에서 예방접종을 받았다', to: '한 갈래만' }, { id: 'h4', text: '밤늦게 단톡방 알림이 와서 늦게 잔다', to: '습관과 환경이 얽힘' }, { id: 'h5', text: '학교에서 건강 검사를 받는다', to: '한 갈래만' }]),
              { conclude: '건강은 내 습관만이 아니라 동네 환경·가족과 친구·보건의료가 함께 정해요. 그래서 나 혼자 바꿀 것과 함께 바꿀 것을 나눠 봐요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '두 갈래에 걸치는 카드 하나를 골라, 어떤 습관과 어떤 환경이 얽혀 있는지 한 문장으로 써요.' }],
          easy: [{ type: 'choice', prompt: '\'동네에 공원이 없다\'는 어느 요인일까요?', options: ['생활 습관', '물리적 환경'], answer: '물리적 환경' }] },
        notes: '교구는 카드 한 장에 바구니 하나만 정답이라, 두 갈래에 걸치는 카드는 도전 단계의 따로 나누기 문항(얽힘·한 갈래만)으로 바꿨다. ' + SAFE_NOTE,
      }),
      M('activity.town-map', {
        title: '동네 지도에서 건강 자원 찾기', method: '동네 지도에서 건강 자원 찾기', tool: 'map', minutes: 15,
        levels: { easy: '지도에 장소 이름이 보이고, 문항마다 그 장소에 핀을 꽂는다.', base: '장소 이름을 숨긴 채 기호만 보고 핀을 꽂는다.', challenge: '이름을 숨긴 지도에 핀을 꽂고, 마지막 문항에서 범례 빈칸을 채운 뒤 바꾸고 싶은 곳 하나를 활동지에 제안한다.' },
        activity: {
          title: '동네 지도에서 건강 자원 찾기', tool: 'map',
          teacher: '"서진의 동네에서 건강을 도와주는 곳은 어디이고, 건강을 지키기 어렵게 하는 곳은 어디일까요?" 핀을 꽂을 때마다 그곳이 누구에게, 무엇을 도와주는지 한 사람씩 말하게 한다. "병원만 건강 자원"이라는 학생에게 "공원과 도서관은 건강과 상관없을까요?"라고 되묻는다. 지도는 가상의 동네이며 학생의 실제 집 위치를 묻지 않는다.',
          task: '가상의 동네 지도에서 운동·예방·상담을 돕는 곳과 건강을 지키기 어렵게 할 수 있는 곳에 핀을 꽂아요.',
          levels: { easy: { names: true }, base: { names: false }, challenge: { names: false } },
          items: [
            PIN('저녁에 걷기·달리기를 할 수 있는 곳에 핀을 꽂으세요.', TOWN, { place: '공원' }),
            PIN('예방접종과 건강 상담을 받을 수 있는 공공 기관에 핀을 꽂으세요.', TOWN, { place: '보건소' }),
            PIN('매연과 소음이 많아 가까이 사는 사람의 건강을 지키기 어렵게 할 수 있는 곳에 핀을 꽂으세요.', TOWN, { place: '공장' }),
            IT(PIN('비 오는 날에도 조용히 책을 읽으며 쉴 수 있는 곳에 핀을 꽂으세요.', TOWN, { place: '도서관' }),
              null,
              { prompt: '범례 빈칸에 기호마다 건강과 이어지는 뜻을 골라 채우세요.', toolOptions: Object.assign({}, TOWN, { mode: 'legend', meanings: { park: '운동하는 곳', hospital: '예방·상담', factory: '매연·소음', library: '쉬는 곳' } }), target: { legend: { park: '운동하는 곳', hospital: '예방·상담', factory: '매연·소음', library: '쉬는 곳' } } },
              { conclude: '건강 자원은 병원만이 아니에요. 공원·도서관·보건소처럼 동네 곳곳이 건강을 돕고, 지역이 함께 바꿀 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '가상 동네에서 건강을 위해 바꾸고 싶은 곳 하나와 바꿀 방법을 한 문장으로 써요.' }],
          easy: [{ type: 'choice', prompt: '예방접종을 받을 수 있는 공공 기관은?', options: ['보건소', '시장'], answer: '보건소' }] },
        notes: '지도 교구는 문항마다 핀 하나라, 계획의 \'핀 3·5개\'를 장소 이름 보이기(쉬움)·숨기기(기본)·범례 채우기(도전)로 나눴다. ' + SAFE_NOTE,
      }),
      M('activity.choice-dilemma', {
        title: '바꿀 수 있는 요인 갈림길', method: '바꿀 수 있는 요인 고르기 갈림길', tool: 'dilemma', minutes: 15,
        levels: { easy: '갈림길 1번에서 고르고 결과 장면을 본다.', base: '갈림길 2번을 끝까지 가고 알맞은 근거 카드를 고른다.', challenge: '갈림길 2번을 끝까지 가고, 어른·기관에 알리는 근거 카드까지 함께 고른다.' },
        activity: {
          title: '바꿀 수 있는 요인 갈림길', tool: 'dilemma',
          teacher: '"공원이 멀고 놀이터가 어두운 서진에게 \'의지가 약하다\'고 말하는 것이 맞을까요?" 학생마다 한 길을 끝까지 가 본 뒤 되돌아가 다른 길과 견주게 한다. "환경이 나쁘면 어쩔 수 없다"는 학생에게 "가로등은 누가, 어떻게 고칠 수 있을까요?"라고 되묻는다. 끝 장면에서 개인이 바꿀 몫과 지역이 함께 바꿀 몫을 나눠 말하게 한다.',
          task: '운동하고 싶지만 공원이 먼 가상 학생 서진의 선택을 따라가고, 끝에서 내 선택의 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '서진이 저녁 운동을 하고 싶어요. 한 번 골라 결과를 보세요.', base: '서진이 저녁 운동을 하고 싶어요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '서진이 저녁 운동을 하고 싶어요. 두 번 골라 끝까지 가고, 어른·기관에 알리는 근거도 고르세요.' },
              '공원이 먼 서진', D1, [['home', 'report'], ['give', 'tell']], R1, ['r1', 'r2'], { e: 1, b: 2, c: 2 }, R1M,
              ),
            DIL({ easy: '다온의 등굣길에 매연이 심해요. 한 번 골라 결과를 보세요.', base: '다온의 등굣길에 매연이 심해요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '다온의 등굣길에 매연이 심해요. 두 번 골라 끝까지 가고, 어른·기관에 알리는 근거도 고르세요.' },
              '매연 심한 등굣길', D2, [['alley', 'voice'], ['bus', 'back']], R2, ['r1', 'r2'], { e: 1, b: 2, c: 2 }, R1M),
            DIL({ easy: '하늘이 혼자 저녁을 먹어요. 한 번 골라 결과를 보세요.', base: '하늘이 혼자 저녁을 먹어요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '하늘이 혼자 저녁을 먹어요. 두 번 골라 끝까지 가고, 어른·기관에 알리는 근거도 고르세요.' },
              '혼자 먹는 저녁', D3, [['simple', 'plan'], ['skipm', 'tellT']], R3, ['r1', 'r2'], { e: 1, b: 2, c: 2 }, R1M,
              { conclude: '건강은 의지만으로 정해지지 않아요. 내가 바꿀 수 있는 습관은 바꾸고, 환경과 사정은 알려서 함께 바꿔요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '공원이 멀고 놀이터가 어두운 서진에게 가장 알맞은 길은?', options: ['운동을 포기한다', '집에서 할 운동을 찾고, 가로등 고장은 어른과 함께 알린다', '자신의 의지가 약하다고 탓한다'], answer: '집에서 할 운동을 찾고, 가로등 고장은 어른과 함께 알린다' }] },
        notes: SAFE_NOTE + ' 가족 사정 장면은 가상 인물의 것이며, 학생에게 자기 집 저녁 사정을 묻지 않는다.',
      }),

      // ---- 정리 ----
      M('wrap.factor-write', {
        title: '건강 결정 요인 짧은 글', method: '건강 결정 요인 짧은 글', tool: 'rubric-writing', minutes: 9,
        levels: { easy: '문장 틀("서진의 건강을 정하는 것은 ___와 ___이다. 왜냐하면 ___")을 채워 두 문장으로 쓴다.', base: '세 문장으로 쓰고 기준 3개(요인 2개 이상·사례·바꿀 점)를 스스로 점검한다.', challenge: '세 문장으로 쓰고, 짝의 글을 같은 기준표로 점검해 준 항목까지 표시한다.' },
        wrap: {
          teacher: '"\'건강하려면 노력하면 된다\'와 \'서진의 건강은 늦은 취침 습관과 먼 공원이 함께 정한다. 그래서 잠드는 시각은 서진이, 가로등은 동네가 바꾼다\' 가운데 어느 글이 오늘 배운 것을 담았을까요?" 두 글을 견주어 읽은 뒤 가상 학생 서진(또는 다온)을 두고 쓰게 한다. 학생 자신의 건강 상태나 가족 사정은 쓰지 않게 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'rubric-writing', options: { topic: '가상 학생 서진(또는 다온)의 건강을 정하는 요인을 세 문장으로 쓰세요.', minChars: 50, maxChars: 240, minSentences: 3, maxSentences: 4, title: '건강을 정하는 것', placeholder: '예: 서진의 건강을 정하는 것은…' },
              prompt: '가상 학생의 건강을 정하는 요인을 세 문장으로 쓰고 기준표에 표시해요.', target: { selfCheck: ['요인을 두 갈래 이상 썼다', '사례 속 장면을 근거로 들었다', '바꿀 수 있는 점을 썼다'] }, difficulty: 0.3 },
              { prompt: '문장 틀을 채워 두 문장으로 쓰고 기준표에 표시해요.', toolOptions: { minChars: 30, minSentences: 2, maxSentences: 3, starter: '서진의 건강을 정하는 것은 ___와 ___이다. 왜냐하면 ___ 때문이다.' }, target: { selfCheck: ['요인을 두 갈래 이상 썼다', '사례 속 장면을 근거로 들었다'] } },
              { prompt: '세 문장으로 쓴 뒤 짝의 글도 같은 기준표로 점검해 주고 표시해요.', target: { selfCheck: ['요인을 두 갈래 이상 썼다', '사례 속 장면을 근거로 들었다', '바꿀 수 있는 점을 썼다', '짝의 글을 기준표로 점검해 주었다'] } }),
            { type: 'choice', prompt: '"건강은 전적으로 개인 의지에 달렸다"는 말에 대한 반박으로 가장 알맞은 것은?', options: ['의지가 강한 사람은 아프지 않는다', '동네 환경·가족 사정·의료 이용도 건강을 함께 정한다', '건강은 운으로 정해진다'], answer: 1, difficulty: 0.2, explain: '습관 말고도 물리적·사회적 환경과 보건의료가 함께 건강을 정해요.' },
            { type: 'mood', prompt: '오늘 수업을 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '건강을 정하는 것',
          items: [
            { type: 'short', prompt: '가상 학생의 건강을 정하는 요인을 세 문장으로 써요(요인 두 갈래 이상·사례·바꿀 점).' },
            { type: 'check', prompt: '내 글을 기준표로 점검해요.', options: ['요인을 두 갈래 이상 썼다', '사례 장면을 근거로 들었다', '바꿀 수 있는 점을 썼다'] },
          ],
          easy: { note: '문장 틀을 써도 돼요.', items: [{ type: 'blank', prompt: '틀을 채워 써요.', text: '서진의 건강을 정하는 것은 ___와 ___이다. 왜냐하면 ___ 때문이다.', answer: '(예) 늦은 취침 습관, 먼 공원, 걸을 곳이 없어 움직이기 어렵기' }] },
        },
        notes: SAFE_NOTE,
      }),
      M('wrap.factor-web', {
        title: '건강 요인 생각 그물', method: '요인 생각 그물 정리', tool: 'mindmap', minutes: 9,
        levels: { easy: '가지 2개(생활 습관·보건의료)에 오늘 사례 카드를 잇는다.', base: '가지 4개에 사례 카드를 두 장씩 잇는다.', challenge: '가지 4개에 잇고, 함정 카드를 걸러 낸 뒤 요인끼리 이어지는 예를 활동지에 화살표로 그린다.' },
        wrap: {
          teacher: '"가운데 \'건강\'에 네 가지를 달아 볼까요? 오늘 본 장면은 어느 가지에 매달릴까요?" 학생이 그물을 다 이으면 가지 두 개를 골라 서로 어떻게 이어지는지(예: 공원이 없으니 앉아 있는 습관이 생긴다) 말하게 한다. "보건의료는 아플 때만 쓰는 것"이라는 말에는 예방접종과 건강 검사 카드를 다시 가리킨다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '건강', slots: FOUR, cards: [
              { id: 'a1', text: '같은 시각에 일어나기' }, { id: 'a2', text: '쉬는 시간에 걷기' }, { id: 'b1', text: '걸을 만한 공원' }, { id: 'b2', text: '찻길의 매연' },
              { id: 'c1', text: '함께 운동하는 친구' }, { id: 'c2', text: '동생을 돌보는 저녁' }, { id: 'd1', text: '보건소 예방접종' }, { id: 'd2', text: '학교 건강 검사' }] },
              prompt: '네 가지에 오늘 사례 카드를 두 장씩 이어요.', target: { sort: { '생활 습관': ['a1', 'a2'], '물리적 환경': ['b1', 'b2'], '사회적 환경': ['c1', 'c2'], 보건의료: ['d1', 'd2'] } }, difficulty: 0.2 },
              { prompt: '두 가지에 사례 카드를 두 장씩 이어요.', toolOptions: { slots: ['생활 습관', '보건의료'], cards: [{ id: 'a1', text: '같은 시각에 일어나기' }, { id: 'a2', text: '쉬는 시간에 걷기' }, { id: 'd1', text: '보건소 예방접종' }, { id: 'd2', text: '학교 건강 검사' }] }, target: { sort: { '생활 습관': ['a1', 'a2'], 보건의료: ['d1', 'd2'] } } },
              { prompt: '네 가지에 이으면서 함정 카드는 남겨 두어요.', toolOptions: { cards: [
                { id: 'a1', text: '같은 시각에 일어나기' }, { id: 'a2', text: '쉬는 시간에 걷기' }, { id: 'b1', text: '걸을 만한 공원' }, { id: 'b2', text: '찻길의 매연' },
                { id: 'c1', text: '함께 운동하는 친구' }, { id: 'c2', text: '동생을 돌보는 저녁' }, { id: 'd1', text: '보건소 예방접종' }, { id: 'd2', text: '학교 건강 검사' },
                { id: 't1', text: '타고난 의지력' }, { id: 't2', text: '건강은 운이다' }] } }),
            { type: 'short', prompt: '두 가지를 골라, 한 요인이 다른 요인에 어떻게 영향을 주는지 한 문장으로 써요.' },
          ],
        },
        worksheet: {
          title: '건강 요인 생각 그물',
          items: [
            { type: 'table', prompt: '네 요인마다 오늘 사례의 예를 하나씩 써요.', columns: ['요인', '사례의 예'], cells: [['생활 습관', ''], ['물리적 환경', ''], ['사회적 환경', ''], ['보건의료', '']], answer: '(예) 늦은 취침, 먼 공원, 동생 돌봄, 보건소 예방접종' },
            { type: 'short', prompt: '요인 두 개가 이어지는 예를 화살표로 그리고 한 줄로 설명해요.' },
          ],
        },
      }),
    );
  }
  // ==== 7~9학년 · 감염의 고리와 끊기 (health.m.infection-chain) ====
  {
    const M = MK('infection-chain', G);
    const LINKS = ['병원체', '전파 경로', '감수성 있는 사람'];
    const BREAK = [
      { id: 'p1', text: '책상·문손잡이를 소독한다', to: '병원체' }, { id: 'p2', text: '아픈 사람이 집에서 쉬며 낫는다', to: '병원체' },
      { id: 'w1', text: '기침할 때 옷소매로 가린다', to: '전파 경로' }, { id: 'w2', text: '비누로 손을 씻는다', to: '전파 경로' }, { id: 'w3', text: '창문을 열어 환기한다', to: '전파 경로' },
      { id: 'h1', text: '예방접종을 받는다', to: '감수성 있는 사람' }, { id: 'h2', text: '푹 자고 골고루 먹어 몸을 돌본다', to: '감수성 있는 사람' },
    ];
    const TRAP = [{ id: 't1', text: '열만 내리면 바로 등교한다' }, { id: 't2', text: '손은 더러워 보일 때만 씻는다' }];
    // 열·기침 갈림길(가상 인물 지후) — 깊이 3
    const D1 = { text: '시험 날 아침, 지후는 열이 나고 기침이 계속된다. 해열제를 먹으면 열은 내려갈 것 같다.', ask: '지후는 어떻게 할까?', motif: 'house', choices: [
      { id: 'pill', text: '해열제만 먹고 아무 말 없이 등교한다', result: '열은 잠깐 내렸지만 수업 내내 기침을 한다.', impact: [{ who: '같은 반 친구들', text: '옮을 수 있다', tone: -1 }], why: '열이 내려도 병원체는 남아 있어 남에게 옮길 수 있어요.', end: '열만 내리고 등교해 기침을 퍼뜨렸어요.',
        next: { text: '2교시에 짝 수아도 목이 아프다고 한다.', choices: [
          { id: 'nurse', text: '보건실에 가서 증상을 말한다', result: '보건 선생님이 보호자에게 연락하고 지후를 쉬게 한다.', impact: [{ who: '반 친구들', text: '더 퍼지는 것을 막는다', tone: 1 }], end: '늦었지만 보건실에 알렸어요.',
            next: { text: '보호자가 "시험은 어떻게 하지?"라고 걱정한다.', choices: [
              { id: 'ask', text: '담임 선생님께 아파서 못 본 시험을 어떻게 하는지 여쭈어 보자고 한다', result: '학교의 절차를 안내받고 마음 놓고 쉰다.', impact: [{ who: '지후', text: '쉬면서 낫는다', tone: 1 }] },
              { id: 'push', text: '"그래도 시험은 봐야 해" 하며 교실로 돌아간다', result: '기침이 더 심해지고 친구들 걱정도 커진다.', impact: [{ who: '반 친구들', text: '옮을 걱정이 커진다', tone: -1 }], why: '아플 때 쉬는 것은 나와 반을 함께 지키는 일이에요.' }] } },
          { id: 'ignore', text: '"나 때문은 아닐 거야" 하고 넘긴다', result: '다음 날 반에 기침하는 학생이 더 늘어난다.', impact: [{ who: '반 친구들', text: '여럿이 아프다', tone: -1 }], why: '증상이 있으면 알려야 고리를 끊을 수 있어요.' }] } },
      { id: 'tell', text: '보호자에게 열과 기침을 알리고 학교에 연락한다', result: '보호자가 학교에 알리고 진료를 받으러 간다.', impact: [{ who: '지후', text: '쉬면서 진료를 받는다', tone: 1 }], end: '보호자에게 알리고 쉬었어요.',
        next: { text: '쉬는 동안 친구가 "오늘 노래방 갈래?"라고 메시지를 보낸다.', choices: [
          { id: 'go', text: '열이 내렸으니 잠깐 다녀온다', result: '좁은 방에서 함께 노래하며 기침을 한다.', impact: [{ who: '친구', text: '옮을 수 있다', tone: -1 }], why: '열이 잠깐 내렸어도 기침이 있으면 남에게 옮길 수 있어요.' },
          { id: 'rest', text: '"다 나으면 갈게"라고 답하고 쉰다', result: '친구도 "푹 쉬어"라고 답한다.', impact: [{ who: '친구', text: '옮지 않는다', tone: 1 }], end: '다 나을 때까지 쉬었어요.',
            next: { text: '며칠 뒤 열은 내렸지만 기침이 조금 남았다. 다시 등교하는 날이다.', choices: [
              { id: 'etiq', text: '기침할 때 옷소매로 가리고, 손을 자주 씻는다', result: '반 친구들이 안심하고 지후도 편하게 수업을 듣는다.', impact: [{ who: '반 친구들', text: '옮을 걱정이 줄어든다', tone: 1 }] },
              { id: 'hand', text: '기침을 손바닥으로 막고 그 손으로 문손잡이를 잡는다', result: '손잡이에 병원체가 묻는다.', impact: [{ who: '다음에 잡는 사람', text: '옮을 수 있다', tone: -1 }], why: '손바닥으로 막으면 손을 거쳐 퍼져요. 옷소매로 가려요.' }] } }] } },
      { id: 'hide', text: '마스크로 기침을 숨기고 시험만 보고 오겠다고 마음먹는다', result: '시험 내내 머리가 아파 문제를 제대로 못 푼다.', impact: [{ who: '지후', text: '몸도 시험도 힘들다', tone: -1 }], why: '아픈 것을 숨기면 나도 힘들고 고리도 끊기지 않아요. 알리고 쉬어요.', ending: '숨기고 버텨서 몸도 시험도 힘들었어요.' }] };
    const R1 = [{ id: 'r1', text: '열이 내려도 남에게 옮길 수 있다' }, { id: 'r2', text: '아플 때 쉬면 나와 반을 함께 지킨다' },
      { id: 'r3', text: '시험은 무슨 일이 있어도 봐야 한다', why: '아파서 못 본 시험은 학교 절차를 물어볼 수 있어요. 건강이 먼저예요.' }, { id: 'r4', text: '마스크만 쓰면 아파도 괜찮다', why: '마스크는 도움이 되지만 아플 때는 쉬는 것이 먼저예요.' }];
    const R1M = { reasons: [{ id: 'r5', text: '증상을 알리면 다른 사람이 미리 조심할 수 있다' }], ok: ['r5'] };
    // 체육관 물병 갈림길(가상 인물 수아)
    const D2 = { text: '체육 시간이 끝나고, 감기 기운이 있는 친구가 "물 한 모금만" 하며 수아의 물병을 달라고 한다.', ask: '수아는 어떻게 할까?', motif: 'house', choices: [
      { id: 'share', text: '물병을 건네고 그대로 같이 마신다', result: '친구 침이 묻은 물병으로 수아도 마신다.', impact: [{ who: '수아', text: '옮을 수 있다', tone: -1 }], why: '물병·컵을 함께 쓰면 침을 거쳐 옮을 수 있어요.', end: '물병을 함께 써서 옮을 수 있었어요.',
        next: { text: '이틀 뒤 수아도 목이 칼칼하다.', choices: [
          { id: 'own', text: '이제부터 자기 물병을 따로 쓰고, 목이 아프다고 보호자에게 알린다', result: '보호자와 함께 몸 상태를 살핀다.', impact: [{ who: '수아', text: '빨리 알아차린다', tone: 1 }], end: '자기 물병을 쓰고 알렸어요.',
            next: { text: '다음 체육 시간, 또 다른 친구가 물병을 빌려 달라고 한다.', choices: [
              { id: 'cup', text: '정수기 쪽 일회용 컵을 함께 가지러 간다', result: '둘 다 따로 마신다.', impact: [{ who: '친구', text: '목을 축인다', tone: 1 }] },
              { id: 'again', text: '거절하기 미안해서 또 함께 마신다', result: '같은 일이 되풀이된다.', impact: [{ who: '수아', text: '다시 옮을 수 있다', tone: -1 }], why: '거절이 아니라 다른 방법을 함께 찾아 주는 거예요.' }] } },
          { id: 'quiet', text: '별일 아니라며 계속 등교하고 친구들과 과자를 나눠 먹는다', result: '반에 목 아픈 학생이 늘어난다.', impact: [{ who: '반 친구들', text: '옮을 수 있다', tone: -1 }], why: '증상이 있으면 나눠 먹기를 멈추고 알려요.' }] } },
      { id: 'cupF', text: '"내 물병 말고 같이 정수기로 가자"고 한다', result: '친구가 웃으며 따라온다.', impact: [{ who: '친구', text: '목을 축인다', tone: 1 }], end: '물병 대신 정수기로 같이 갔어요.',
        next: { text: '정수기 앞에서 친구가 기침을 크게 한다.', choices: [
          { id: 'sleeve', text: '"옷소매로 가리자"고 부드럽게 말한다', result: '친구가 고개를 끄덕이며 소매로 가린다.', impact: [{ who: '주변 학생', text: '침방울을 덜 맞는다', tone: 1 }], end: '기침 예절을 함께 지켰어요.',
            next: { text: '친구가 "열도 좀 나는 것 같아"라고 한다.', choices: [
              { id: 'nurseF', text: '보건실에 같이 가 보자고 한다', result: '보건 선생님이 친구를 살핀다.', impact: [{ who: '친구', text: '도움을 받는다', tone: 1 }] },
              { id: 'pe', text: '"다음 시간도 체육이니 참아"라고 한다', result: '친구가 무리해서 더 힘들어한다.', impact: [{ who: '친구', text: '더 아프다', tone: -1 }], why: '아픈 친구는 보건실로 이어 줘요.' }] } },
          { id: 'laugh', text: '"으, 더러워!" 하고 놀린다', result: '친구가 무안해서 아프다는 말을 못 꺼낸다.', impact: [{ who: '친구', text: '상처받는다', tone: -1 }], why: '놀리면 아픈 것을 숨기게 돼요. 예절은 부드럽게 알려요.' }] } },
      { id: 'refuseC', text: '"싫어" 하고 물병을 숨긴다', result: '친구가 머쓱해서 그냥 간다.', impact: [{ who: '친구', text: '목마름이 그대로다', tone: -1 }], why: '물병을 함께 쓰지 않는 것은 맞지만, 다른 방법을 함께 찾아 줄 수 있어요.', ending: '거절만 하고 방법은 함께 찾지 못했어요.' }] };
    const R2 = [{ id: 'r1', text: '컵·물병을 함께 쓰면 침을 거쳐 옮을 수 있다' }, { id: 'r2', text: '거절보다 다른 방법을 함께 찾으면 관계도 지킨다' },
      { id: 'r3', text: '친한 친구끼리는 옮지 않는다', why: '병원체는 친한 사이를 가리지 않아요.' }, { id: 'r4', text: '기침하는 친구는 놀려야 조심한다', why: '놀리면 아픈 것을 숨기게 돼요.' }];
    // 가족 장염 갈림길(가상 인물 도하)
    const D3 = { text: '도하의 동생이 밤새 배탈이 나 토하고 설사를 했다. 아침에 도하가 화장실을 쓰고 나와 바로 식탁에 앉으려 한다.', ask: '도하는 어떻게 할까?', motif: 'house', choices: [
      { id: 'eat', text: '배고프니 그냥 앉아 반찬을 집어 먹는다', result: '손을 씻지 않은 채 반찬을 집는다.', impact: [{ who: '도하', text: '옮을 수 있다', tone: -1 }], why: '화장실을 쓴 뒤와 먹기 전에는 비누로 손을 씻어요.', end: '손을 씻지 않고 먹었어요.',
        next: { text: '보호자가 "동생이 쓴 수건 같이 쓰지 마"라고 말한다.', choices: [
          { id: 'towel', text: '내 수건을 따로 꺼내 쓰고 손을 씻는다', result: '가족끼리 옮을 길이 하나 줄어든다.', impact: [{ who: '도하', text: '옮을 길을 줄인다', tone: 1 }], end: '수건을 따로 쓰고 손을 씻었어요.',
            next: { text: '학교에 갈 시간인데 도하도 속이 조금 불편하다.', choices: [
              { id: 'say', text: '보호자에게 속이 불편하다고 말하고 몸 상태를 살핀다', result: '보호자가 학교에 알릴지 함께 정한다.', impact: [{ who: '반 친구들', text: '옮을 걱정이 준다', tone: 1 }] },
              { id: 'silent', text: '말하지 않고 급식까지 먹는다', result: '오후에 배가 아파 조퇴한다.', impact: [{ who: '도하', text: '더 힘들어진다', tone: -1 }], why: '증상이 있으면 미리 알려야 쉬고, 남에게 옮기지 않아요.' }] } },
          { id: 'same', text: '"가족인데 뭐 어때" 하고 같은 수건을 쓴다', result: '수건을 거쳐 옮을 수 있다.', impact: [{ who: '도하', text: '옮을 수 있다', tone: -1 }], why: '가족이라도 아픈 사람이 있을 때는 수건·컵을 따로 써요.' }] } },
      { id: 'wash', text: '먼저 비누로 손을 씻고 식탁에 앉는다', result: '깨끗한 손으로 아침을 먹는다.', impact: [{ who: '도하', text: '옮을 길을 막는다', tone: 1 }], end: '먼저 손을 씻었어요.',
        next: { text: '동생이 "형, 내 컵으로 물 줘"라고 한다.', choices: [
          { id: 'sep', text: '동생 컵에 따로 물을 따라 주고 내 컵은 따로 쓴다', result: '컵을 함께 쓰지 않는다.', impact: [{ who: '가족', text: '옮을 길이 준다', tone: 1 }], end: '컵을 따로 썼어요.',
            next: { text: '보호자가 화장실 청소를 하려 한다.', choices: [
              { id: 'help', text: '창문을 열어 환기하고 손잡이를 닦는 것을 돕는다', result: '집 안 공기와 손잡이가 깨끗해진다.', impact: [{ who: '가족', text: '함께 고리를 끊는다', tone: 1 }] },
              { id: 'leave', text: '"동생 일이니까" 하고 방에 들어간다', result: '보호자가 혼자 다 치운다.', impact: [{ who: '보호자', text: '힘들다', tone: -1 }], why: '감염 예방은 가족이 함께 하면 더 빨리 끝나요.' }] } },
          { id: 'sip', text: '동생 컵으로 같이 한 모금 마신다', result: '컵을 거쳐 옮을 수 있다.', impact: [{ who: '도하', text: '옮을 수 있다', tone: -1 }], why: '아픈 가족과 컵을 함께 쓰지 않아요.' }] } },
      { id: 'skip', text: '동생이 아프니 학교를 핑계 삼아 그냥 쉰다', result: '도하는 아프지 않은데 결석한다.', impact: [{ who: '도하', text: '수업을 놓친다', tone: -1 }], why: '아프지 않으면 손 씻기·따로 쓰기로 고리를 끊고 등교할 수 있어요.', ending: '아프지 않은데 쉬어서 수업을 놓쳤어요.' }] };
    const R3 = [{ id: 'r1', text: '화장실 뒤·먹기 전 손 씻기는 고리를 끊는다' }, { id: 'r2', text: '아픈 가족과 수건·컵을 따로 쓴다' },
      { id: 'r3', text: '가족끼리는 옮지 않는다', why: '가족도 같은 수건·컵을 쓰면 옮을 수 있어요.' }, { id: 'r4', text: '증상이 없으면 손 씻기는 안 해도 된다', why: '증상이 없어도 손에 병원체가 묻을 수 있어요.' }];
    // 야외 활동 예방 수칙(차례)
    const OUT = [
      { id: 'o1', text: '긴소매·긴바지를 입는다' }, { id: 'o2', text: '풀밭에 바로 앉지 않고 돗자리를 편다' },
      { id: 'o3', text: '풀숲 길 대신 넓은 길로 다닌다' }, { id: 'o4', text: '돌아와서 옷을 털고 바로 씻는다' }, { id: 'o5', text: '며칠 동안 열이 나는지 살핀다' },
    ];
    // 손 씻기 단계(차례) — 우리 반 연습 약속
    const WASH = ['손바닥 마주 문지르기', '손등 문지르기', '손가락 깍지 끼워 문지르기', '엄지 돌려 문지르기', '손끝으로 손바닥 문지르기', '손목 문지르기'];

    ALL.push(
      // ---- 도입 ----
      M('intro.chain-story', {
        title: '교실 감염 확산 장면 차례', method: '교실 감염 확산 장면 차례 놓기', tool: 'story', minutes: 6,
        levels: { easy: '장면 3장을 차례로 놓고, 교사가 기침에서 시작된 고리를 함께 짚는다.', base: '장면 4장을 차례로 놓고 병원체가 어떻게 옮겨 갔는지 말한다.', challenge: '장면 4장을 놓은 뒤, 고리를 끊을 수 있었던 장면을 골라 무엇을 바꾸면 되는지 말한다.' },
        intro: {
          teacher: '"한 사람의 기침이 어떻게 사흘 만에 반 전체의 기침이 될까요?" 가상 학생의 기침에서 반 전체로 퍼지는 장면 카드를 시연 단추로 차례로 놓아 보인다. "옮은 건 운이 나빠서"라는 말이 나오면 "문손잡이와 함께 쓴 물병은 운일까요, 길일까요?"라고 되묻는다. 오늘은 감염이 병원체·전파 경로·감수성 있는 사람의 고리로 일어나고, 그 고리 하나만 끊어도 퍼짐을 막을 수 있다는 것을 다룬다고 밝힌다.',
          student: '가상 교실에서 기침이 퍼지는 장면을 차례로 놓아 보고, 어느 장면에서 고리를 끊을 수 있었을지 짝과 이야기해요.',
          demo: { tool: 'story', options: { mode: 'order', slots: 4, title: '사흘 동안의 교실', cards: [
            { id: 'c1', text: '한 학생이 손으로 기침을 막는다', motif: 'cloud' }, { id: 'c2', text: '그 손으로 문손잡이를 잡는다', motif: 'house' },
            { id: 'c3', text: '친구들이 손잡이를 잡고 간식을 먹는다', motif: 'star' }, { id: 'c4', text: '다음 날 기침하는 학생이 늘어난다', motif: 'rain' }], shuffle: false },
          sequence: [{ order: ['c1', 'c2', 'c3', 'c4'] }] },
          art: { draw: 'a paper-cut classroom door handle at the center with tiny paper droplets spreading from a coughing student to classmates eating snacks, linked by a paper chain', banner: '기침 하나가 반 전체로?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: SAFE_NOTE + ' 아팠던 학생을 찾거나 탓하지 않는다 — "누가 옮겼나"가 아니라 "어디서 끊나"를 묻는다.',
      }),
      M('intro.body-route', {
        title: '병원체가 몸에 들어오는 길', method: '몸으로 들어오는 길 찾기', tool: 'body', minutes: 6,
        levels: { easy: '고른 부분 이름이 바로 보이고, 들어오는 곳 두 곳(코·눈)을 고른다.', base: '이름 없이 들어오는 곳 네 곳(눈·코·혀·피부의 상처)을 고른다.', challenge: '네 곳을 고른 뒤, 곳마다 막는 행동(손 씻기·기침 예절·상처 덮기)을 짝지어 말한다.' },
        intro: {
          teacher: '"병원체는 우리 몸 어디로 들어올까요? 손은 직접 들어오는 문일까요, 문으로 데려다주는 길일까요?" 종이 몸에서 눈·코·혀(입 대신)·피부(상처 자리)를 시연 단추로 고르는 모습을 보인다. "손으로 들어온다"는 말에는 "손으로 무엇을 만진 뒤 어디를 만지면 들어올까요?"라고 되묻는다. 교구에 입 칸이 없어 혀를 입 대신 고르고, 상처는 피부로 고른다고 알려 준다.',
          student: '종이 몸에서 병원체가 들어올 수 있는 곳을 골라 보고, 손이 그곳까지 병원체를 옮기는 길을 짝과 말해요.',
          demo: { tool: 'body', options: { mode: 'parts', parts: ['눈', '귀', '코', '혀', '피부', '목', '어깨', '무릎'], names: true }, sequence: [{ parts: ['눈', '코', '혀', '피부'] }] },
          art: { draw: 'a paper-cut human figure with small glowing doors at the eyes, nose, mouth and a bandaged scrape on the knee, a hand carrying tiny paper germs toward the face', banner: '병원체가 들어오는 문은?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: 'body 교구에 입·손 칸이 없어 혀(입 대신)와 피부(상처)로 바꿨다 — 교사가 말로 짚는다.',
      }),

      // ---- 활동 ----
      M('activity.link-sort', {
        title: '세 고리와 끊는 행동 잇기', method: '세 고리와 끊는 행동 잇기', tool: 'mindmap', minutes: 15,
        levels: { easy: '가지 2개(전파 경로·감수성 있는 사람)에 행동 카드를 잇고, 놓으면 바로 맞는지 알려 준다.', base: '가지 3개에 행동 카드를 모두 잇고 함정 카드는 남긴다.', challenge: '가지 3개에 이은 뒤, 마지막 문항에서 두 고리를 함께 끊는 행동을 골라 담는다.' },
        activity: {
          title: '세 고리와 끊는 행동 잇기', tool: 'mindmap',
          teacher: '"손 씻기는 세 고리 가운데 어느 고리를 끊을까요?" 카드를 가지에 이을 때마다 그 행동이 무엇과 무엇 사이를 끊는지 한 사람씩 말하게 한다. "열만 내리면 남에게 옮기지 않는다"는 카드를 고른 학생에게 "열이 내려도 기침은 계속된다면 병원체는 사라졌을까요?"라고 되묻는다. 끊는 고리마다 행동이 다르니, 여러 행동을 함께 해야 한다는 점을 짚는다.',
          task: '감염의 세 고리(병원체·전파 경로·감수성 있는 사람) 가지에 고리를 끊는 행동 카드를 이어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('고리를 끊는 행동 카드를 세 고리 가지에 이으세요.', LINKS, BREAK, { topic: '감염의 고리' }),
              SB('행동 카드를 두 고리 가지에 이으세요.', ['전파 경로', '감수성 있는 사람'], pickCards(BREAK, ['w1', 'w2', 'h1', 'h2']), { topic: '감염의 고리' })),
            IT(SB('함정 카드는 남기고, 행동 카드를 세 고리 가지에 이으세요.', LINKS, [...pickCards(BREAK, ['p1', 'w2', 'w3', 'h1']), ...TRAP], { topic: '함정 카드 거르기' }),
              SB('행동 카드 2장을 두 고리 가지에 이으세요.', ['전파 경로', '감수성 있는 사람'], pickCards(BREAK, ['w3', 'h1']), { topic: '함정 카드 거르기' })),
            IT(MB('고리마다 그 고리가 무엇인지 알맞은 설명을 이으세요.', [['병원체', '병을 일으키는 세균·바이러스'], ['전파 경로', '기침·손·물건을 거쳐 옮겨 가는 길'], ['감수성 있는 사람', '병원체가 들어오면 병에 걸릴 수 있는 사람']], ['날씨가 추운 날'], { topic: '세 고리의 뜻' }),
              MB('두 고리에 알맞은 설명을 이으세요.', [['병원체', '병을 일으키는 세균·바이러스'], ['전파 경로', '기침·손·물건을 거쳐 옮겨 가는 길']], [], { topic: '세 고리의 뜻' }),
              PB('두 고리를 함께 끊는 행동만 골라 담으세요.', '두 고리를 함께 끊는 행동', [
                { id: 'q1', text: '아플 때 집에서 쉬기(병원체·전파 경로)', ok: true }, { id: 'q2', text: '손 씻기와 예방접종 함께 하기(전파 경로·감수성)', ok: true },
                { id: 'q3', text: '열만 내리기' }, { id: 'q4', text: '친구 물병 함께 쓰기' }], { topic: '두 고리 함께' }),
              { conclude: '감염은 병원체·전파 경로·감수성 있는 사람의 고리로 일어나요. 소독·쉬기, 손 씻기·기침 예절·환기, 예방접종·몸 돌보기로 고리를 끊어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '세 고리마다 끊는 행동을 하나씩 써요.', columns: ['고리', '끊는 행동'], cells: [['병원체', ''], ['전파 경로', ''], ['감수성 있는 사람', '']], answer: '(예) 소독·아플 때 쉬기, 손 씻기·기침 예절·환기, 예방접종·푹 자기' }],
          easy: [{ type: 'choice', prompt: '기침할 때 옷소매로 가리기는 어느 고리를 끊을까요?', options: ['전파 경로', '감수성 있는 사람'], answer: '전파 경로' }] },
        notes: '계획의 \'두 고리를 함께 끊는 행동\'은 카드 한 장에 가지 하나만 정답이라 도전 단계의 고르기 문항으로 바꿨다.',
      }),
      M('activity.fever-dilemma', {
        title: '열과 기침이 날 때 등교 판단', method: '열과 기침이 날 때 등교 판단', tool: 'dilemma', minutes: 15,
        levels: { easy: '갈림길 1번에서 고르고 결과 장면을 본다.', base: '갈림길 2번을 끝까지 가고 알맞은 근거 카드를 고른다.', challenge: '갈림길 3번까지 끝까지 가고, 증상을 알리는 까닭 근거 카드까지 함께 고른다.' },
        activity: {
          title: '열과 기침이 날 때 등교 판단', tool: 'dilemma',
          teacher: '"해열제를 먹고 열이 내리면 남에게 옮기지 않을까요?" 학생마다 한 길을 끝까지 가 본 뒤 되돌아가 다른 길과 견주게 한다. "시험은 빠질 수 없다"는 학생에게 "아파서 못 본 시험은 누구에게 물어볼 수 있을까요?"라고 되묻는다. 결과 장면마다 나만이 아니라 반 친구·가족에게 생기는 영향을 함께 말하게 한다.',
          task: '열·기침·배탈이 있는 가상 인물의 선택을 따라가고, 끝에서 내 선택의 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '시험 날 아침 열과 기침이 나요. 한 번 골라 결과를 보세요.', base: '시험 날 아침 열과 기침이 나요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '시험 날 아침 열과 기침이 나요. 세 번 골라 끝까지 가고, 증상을 알리는 까닭 근거도 고르세요.' },
              '시험 날 아침의 열', D1, [['tell', 'rest', 'etiq'], ['pill', 'nurse', 'ask']], R1, ['r1', 'r2'], { e: 1, b: 2, c: 3 }, R1M),
            DIL({ easy: '감기 기운 있는 친구가 물병을 달래요. 한 번 골라 결과를 보세요.', base: '감기 기운 있는 친구가 물병을 달래요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '감기 기운 있는 친구가 물병을 달래요. 세 번 골라 끝까지 가고, 증상을 알리는 까닭 근거도 고르세요.' },
              '체육 뒤 물병', D2, [['cupF', 'sleeve', 'nurseF'], ['share', 'own', 'cup']], R2, ['r1', 'r2'], { e: 1, b: 2, c: 3 }, R1M),
            DIL({ easy: '동생이 배탈이 났어요. 한 번 골라 결과를 보세요.', base: '동생이 배탈이 났어요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '동생이 배탈이 났어요. 세 번 골라 끝까지 가고, 증상을 알리는 까닭 근거도 고르세요.' },
              '배탈 난 동생', D3, [['wash', 'sep', 'help'], ['eat', 'towel', 'say']], R3, ['r1', 'r2'], { e: 1, b: 2, c: 3 }, R1M,
              { conclude: '아플 때는 알리고 쉬기, 기침은 옷소매로, 컵·수건은 따로 — 나와 반·가족 사이의 고리를 함께 끊어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '열과 기침이 나는 시험 날 아침, 가장 알맞은 행동은?', options: ['해열제만 먹고 말없이 등교한다', '보호자에게 알리고 학교에 연락한다', '마스크로 숨기고 시험만 본다'], answer: '보호자에게 알리고 학교에 연락한다' }] },
        notes: SAFE_NOTE + ' 등교 중지 기준·결석 처리는 학교와 보건 당국 안내를 따르며, 수업에서는 \'알리고 쉬기\'까지만 다룬다.',
      }),
      M('activity.outdoor-order', {
        title: '야외 활동 전·중·후 예방 수칙', method: '야외 활동 전·중·후 예방 수칙', tool: 'kitchen', minutes: 15,
        levels: { easy: '수칙 카드 3장(입기·앉기·씻기)을 차례로 놓고, 놓으면 바로 맞는지 알려 준다.', base: '수칙 카드 5장을 전·중·후 차례로 놓는다(함정 카드가 섞인다).', challenge: '카드 5장을 놓은 뒤, 마지막 문항에서 가상 체험학습 계획에 빠진 수칙을 골라 담는다.' },
        activity: {
          title: '야외 활동 전·중·후 예방 수칙', tool: 'kitchen',
          teacher: '"풀밭 체험학습은 즐겁지만, 풀숲에는 사람을 무는 작은 벌레가 있을 수 있어요. 언제 무엇을 해야 할까요?" 카드를 놓은 뒤 순서를 바꾸면 무엇이 빠지는지 한 사람씩 말하게 한다. "다녀와서 아무렇지 않으면 끝"이라는 학생에게 "벌레에 물린 뒤 며칠 지나서 열이 날 수도 있다면 언제까지 살펴야 할까요?"라고 되묻는다. 나이에 맞는 수칙은 보건 선생님 안내를 함께 본다.',
          task: '야외 활동 전·중·후에 할 예방 수칙 카드를 차례로 놓고, 함정 카드는 남겨요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            IT(OB('풀밭 체험학습의 예방 수칙 카드를 전·중·후 차례로 놓으세요.', OUT, { groups: false }, [{ id: 'x1', text: '반바지에 맨발로 풀밭을 걷는다' }]),
              OB('예방 수칙 카드 3장을 전·중·후 차례로 놓으세요.', pickCards(OUT, ['o1', 'o2', 'o4']), { groups: false })),
            IT(MB('야외 활동 장면마다 지킬 수칙을 이으세요.', [['출발 전', '긴소매·긴바지 입기'], ['활동 중', '풀밭에 돗자리 펴고 앉기'], ['돌아와서', '옷 털고 바로 씻기']], ['풀숲에 누워 쉬기'], { groups: false, topic: '언제 무엇을?' }),
              MB('두 장면에 지킬 수칙을 이으세요.', [['출발 전', '긴소매·긴바지 입기'], ['돌아와서', '옷 털고 바로 씻기']], [], { groups: false })),
            IT(CL('돌아온 뒤 며칠 동안 살필 것만 표시하세요.', '돌아와서 살필 것', [
              { id: 'k1', text: '열이 나는지 살핀다', ok: true }, { id: 'k2', text: '몸에 벌레 물린 자국이 있는지 본다', ok: true },
              { id: 'k3', text: '이상하면 보호자·보건실에 알린다', ok: true }, { id: 'k4', text: '아무 일 없으면 그날로 잊는다' }]),
              CL('돌아온 뒤 살필 것 두 가지만 표시하세요.', '돌아와서 살필 것', [
                { id: 'k1', text: '열이 나는지 살핀다', ok: true }, { id: 'k3', text: '이상하면 보호자·보건실에 알린다', ok: true }, { id: 'k4', text: '아무 일 없으면 그날로 잊는다' }]),
              PB('가상 체험학습 계획 \'반바지 차림 → 풀숲에 앉아 도시락 → 바로 귀가\'에 빠진 수칙만 골라 담으세요.', '빠진 수칙', [
                { id: 'm1', text: '긴소매·긴바지 입기', ok: true }, { id: 'm2', text: '돗자리 펴고 앉기', ok: true }, { id: 'm3', text: '돌아와 옷 털고 씻기', ok: true }, { id: 'm4', text: '도시락 많이 싸기' }], { groups: false }),
              { conclude: '야외 활동은 출발 전 옷차림, 활동 중 앉는 자리, 돌아와 씻기와 며칠 살피기까지 이어서 지켜요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '야외 활동 전·중·후에 지킬 수칙을 한 가지씩 써요.', columns: ['언제', '수칙'], cells: [['출발 전', ''], ['활동 중', ''], ['돌아와서', '']], answer: '긴소매·긴바지, 돗자리 펴고 앉기·넓은 길, 옷 털고 씻기·며칠 열 살피기' }] },
      }),
      M('activity.handwash-timer', {
        title: '손 씻기 여섯 단계 짝 실습', method: '손 씻기 단계 실습', tool: 'timer', minutes: 15,
        levels: { easy: '교사 시범을 따라 단계 카드 3장을 차례로 놓고 함께 문질러 본다.', base: '단계 카드 6장을 차례로 놓고, 짝과 번갈아 구간 타이머에 맞춰 실습한 뒤 스스로 점검 항목을 표시한다.', challenge: '짝의 실습을 보며 빠진 단계를 짚어 주고, 스스로 점검 항목까지 표시한다.' },
        activity: {
          title: '손 씻기 여섯 단계 짝 실습', tool: 'timer',
          teacher: '"손을 씻었는데도 엄지와 손끝은 그대로일 수 있어요. 어디를 자주 빠뜨릴까요?" 단계 카드를 놓은 뒤 구간 타이머를 켜고 짝과 번갈아 문지르는 동작을 해 보게 한다(물 없이 동작만, 실제 손 씻기는 쉬는 시간에). "물로 헹구기만 해도 된다"는 학생에게 "눈에 안 보이는 때도 물만으로 떨어질까요?"라고 되묻는다. 문지르는 시간은 우리 반 연습 약속으로 정한 값이라는 점을 밝힌다.',
          task: '손 씻기 여섯 단계를 차례로 놓고, 짝과 번갈아 구간 타이머에 맞춰 문지르는 동작을 실습해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '비누 거품을 낸 뒤 문지르는 여섯 단계를 차례로 놓으세요.', toolOptions: { title: '손 씻기 여섯 단계', cards: [WASH[3], WASH[0], WASH[5], WASH[2], WASH[1], WASH[4]] }, target: { order: WASH } },
              { prompt: '문지르는 첫 세 단계를 차례로 놓으세요.', toolOptions: { cards: [WASH[2], WASH[0], WASH[1]] }, target: { order: WASH.slice(0, 3) } }),
            IT({ prompt: '짝과 번갈아 실습해요. 우리 반 약속대로 문지르기 20초·바꾸기 10초를 2번 하도록 타이머를 맞추세요.', toolOptions: { title: '짝 번갈아 실습', labels: ['문지르기', '바꾸기'], plan: { work: 10, rest: 5, rounds: 1 } }, target: { plan: { work: 20, rest: 10, rounds: 2 } } },
              { prompt: '교사 시범을 따라 문지르기 20초를 1번 하도록 타이머를 맞추세요.', toolOptions: { title: '시범 따라 하기', labels: ['문지르기', '바꾸기'], plan: { work: 10, rest: 5, rounds: 1 } }, target: { plan: { work: 20, rounds: 1 } } }),
            IT({ prompt: '짝과 번갈아 여섯 단계를 실습한 뒤 스스로 점검하세요.', toolOptions: { title: '짝 실습 점검' }, target: { selfCheck: ['여섯 단계를 짝과 번갈아 해 보았다', '엄지와 손끝을 빠뜨리지 않았다'] } },
              { prompt: '교사 시범을 따라 해 본 뒤 스스로 점검하세요.', target: { selfCheck: ['교사 시범을 따라 세 단계를 해 보았다'] } },
              { prompt: '짝의 실습을 보고 빠진 단계를 짚어 준 뒤 스스로 점검하세요.', target: { selfCheck: ['여섯 단계를 짝과 번갈아 해 보았다', '엄지와 손끝을 빠뜨리지 않았다', '짝의 빠진 단계를 짚어 주었다'] } },
              { conclude: '거품을 내고 손바닥·손등·손가락 사이·엄지·손끝·손목까지 문질러야 손 씻기가 전파 경로를 끊어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '손 씻기에서 내가 자주 빠뜨릴 것 같은 단계와 그 단계를 기억할 방법을 한 문장으로 써요.' }] },
        notes: '문지르기 20초·바꾸기 10초는 우리 반 연습 약속 값이다(근거 파일에 수치 없음 — 학교 보건 지침에 맞춰 바꾼다). 교실에서는 물 없이 동작만 하고 실제 손 씻기는 쉬는 시간에 한다. 생활안전(식중독 예방) 손 씻기 도입과 겹치지 않게 여섯 단계·짝 번갈아 실습으로 꾸몄다. 계획의 \'해 보았어요(doneLabel)\' 대신 스스로 점검 항목으로 실습 여부를 표시하게 했다.',
      }),

      // ---- 정리 ----
      M('wrap.chain-check', {
        title: '오늘 끊을 고리 스스로 점검', method: '오늘 끊을 고리 스스로 점검', tool: 'kitchen', minutes: 9,
        levels: { easy: '실천 항목 3개 가운데 이번 주 해 볼 것을 표시한다.', base: '실천 항목 5개 가운데 이번 주 해 볼 것을 표시하고 끊는 고리를 말한다.', challenge: '항목 5개를 표시하고, 가족에게 알릴 것 하나를 활동지에 쓴다.' },
        wrap: {
          teacher: '"오늘 배운 행동 가운데 이번 주에 내가 정말 해 볼 것은 무엇일까요?" 목록을 소리 내어 읽고 스스로 정한 것만 표시하게 한다(맞고 틀림이 없다). 표시한 항목마다 어느 고리를 끊는지 짝에게 말하게 한다. "나는 안 아프니까 상관없다"는 말에는 "나는 안 아파도 내 손이 길이 될 수 있을까요?"라고 되묻는다. 학생의 건강 상태나 아팠던 일은 묻지 않는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '이번 주 끊을 고리', items: [
              { id: 'c1', text: '기침할 때 옷소매로 가리기' }, { id: 'c2', text: '화장실 뒤·먹기 전 손 씻기' }, { id: 'c3', text: '아플 때 알리고 쉬기' },
              { id: 'c4', text: '물병·컵 따로 쓰기' }, { id: 'c5', text: '쉬는 시간에 창문 열기' }] },
              prompt: '이번 주에 해 볼 행동을 스스로 골라 표시해요(정답은 없어요).', target: { selfCheck: true }, difficulty: 0.1 },
              { prompt: '세 행동 가운데 이번 주에 해 볼 것을 표시해요.', toolOptions: { items: [{ id: 'c1', text: '기침할 때 옷소매로 가리기' }, { id: 'c2', text: '화장실 뒤·먹기 전 손 씻기' }, { id: 'c3', text: '아플 때 알리고 쉬기' }] } }),
            { type: 'choice', prompt: '"열만 내리면 남에게 옮기지 않는다"는 말이 틀린 까닭은?', options: ['열이 내려도 기침·손을 거쳐 병원체를 옮길 수 있다', '열은 병과 상관없다', '해열제가 병원체를 없앤다'], answer: 0, difficulty: 0.2, explain: '열은 증상 하나일 뿐이에요. 병원체가 남아 있으면 옮길 수 있어요.' },
            { type: 'short', prompt: '가족에게 알려 주고 싶은 고리 끊기 행동 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '이번 주 끊을 고리',
          items: [
            { type: 'check', prompt: '이번 주에 해 볼 행동에 표시해요.', options: ['옷소매로 기침 가리기', '화장실 뒤·먹기 전 손 씻기', '아플 때 알리고 쉬기', '물병·컵 따로 쓰기'] },
            { type: 'short', prompt: '내가 고른 행동은 어느 고리를 끊는지 써요.' },
          ],
        },
        notes: SAFE_NOTE,
      }),
      M('wrap.campaign', {
        title: '감염 예방 캠페인 포스터', method: '반 감염 예방 캠페인 문구', tool: 'collage', minutes: 9,
        levels: { easy: '보기 문구 가운데 하나를 고르고(활동지), 조각 3개 이상으로 포스터 바탕을 꾸민다.', base: '끊을 고리 하나를 정해 문구를 직접 쓰고(활동지), 조각 5개 이상으로 꾸며 점검 항목 3개를 표시한다.', challenge: '문구에 고리 이름과 근거를 붙이고, 점검 항목 4개를 표시한다.' },
        wrap: {
          teacher: '"\'감기 조심!\'과 \'기침은 옷소매에 — 전파 경로를 끊어요\' 가운데 어느 문구가 행동을 바꿀까요?" 두 문구를 견주어 읽은 뒤 끊을 고리 하나를 정해 문구를 활동지에 쓰고, 조각으로 포스터 바탕을 꾸미게 한다(교구에는 글자를 넣을 수 없다). 아픈 사람을 놀리거나 탓하는 문구는 쓰지 않게 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'collage', options: { maxPieces: 14, shapes: ['circle', 'square', 'rect', 'heart', 'star', 'semi', 'triangle'] }, prompt: '끊을 고리 하나를 담은 캠페인 포스터 바탕을 조각으로 꾸미고 점검해요(문구는 활동지에 써요).', target: { selfCheck: ['문구를 놓을 자리를 비워 두었다', '끊을 고리 하나를 정했다', '문구를 활동지에 썼다'], minPieces: 5 }, difficulty: 0.2 },
              { prompt: '조각 3개 이상으로 포스터 바탕을 꾸미고 점검해요.', target: { selfCheck: ['문구를 놓을 자리를 비워 두었다', '보기 문구 하나를 골랐다'], minPieces: 3 } },
              { prompt: '조각 5개 이상으로 꾸미고, 고리 이름과 근거까지 점검해요.', target: { selfCheck: ['문구를 놓을 자리를 비워 두었다', '끊을 고리 하나를 정했다', '문구를 활동지에 썼다', '고리 이름과 근거를 붙였다'], minPieces: 5 } }),
            { type: 'choice', prompt: '감염 예방 캠페인 문구로 가장 알맞은 것은?', options: ['감기 걸린 사람은 오지 마!', '기침은 옷소매에, 손은 비누로 — 고리를 끊어요', '병은 운이에요'], answer: 1, difficulty: 0.15, explain: '아픈 사람을 탓하지 않고, 해야 할 행동을 구체적으로 담아요.' },
          ],
        },
        worksheet: {
          title: '감염 예방 캠페인',
          items: [
            { type: 'short', prompt: '끊을 고리 하나를 정해 캠페인 문구를 한 줄로 써요.' },
            { type: 'check', prompt: '내 문구를 점검해요.', options: ['해야 할 행동이 구체적이다', '아픈 사람을 탓하지 않는다', '끊는 고리가 드러난다'] },
          ],
          easy: { note: '보기 문구를 골라 써도 돼요.', items: [{ type: 'choice', prompt: '보기 문구 하나를 골라요.', options: ['기침은 옷소매에', '먹기 전엔 비누 손 씻기', '아프면 알리고 쉬기'], answer: '기침은 옷소매에' }] },
        },
        notes: '교구는 글자를 넣지 못해 포스터 바탕만 꾸미고 문구는 활동지에 쓰게 했다.',
      }),
    );
  }
  // ==== 7~9학년 · 백신 원리와 집단면역 (health.m.vaccine-herd) ====
  {
    const M = MK('vaccine-herd', G);
    // 교실 좌석 칸 지도(가상). 낮은 접종 교실·높은 접종 교실
    const seat = (c, r) => [c, r];
    const ROOM_LOW = { grid: [6, 4], title: '가상 교실 가 — 접종한 학생이 적다', regions: [
      { name: '접종함', cells: [seat(0, 0), seat(5, 0), seat(0, 3), seat(5, 3), seat(3, 3)], color: 'mint' },
      { name: '접종 안 함', cells: [seat(1, 0), seat(2, 0), seat(3, 0), seat(4, 0), seat(0, 1), seat(2, 1), seat(3, 1), seat(4, 1), seat(5, 1), seat(0, 2), seat(1, 2), seat(2, 2), seat(3, 2), seat(5, 2), seat(1, 3), seat(2, 3), seat(4, 3)], color: 'peach' },
      { name: '접종할 수 없음', cells: [seat(4, 2)], color: 'lavender' },
    ], places: [{ name: '처음 아픈 학생', icon: 'dot', at: [1, 1] }] };
    const ROOM_HIGH = { grid: [6, 4], title: '가상 교실 나 — 접종한 학생이 많다', regions: [
      { name: '접종함', cells: [seat(0, 0), seat(1, 0), seat(2, 0), seat(3, 0), seat(4, 0), seat(5, 0), seat(0, 1), seat(2, 1), seat(3, 1), seat(4, 1), seat(5, 1), seat(0, 2), seat(1, 2), seat(3, 2), seat(5, 2), seat(0, 3), seat(1, 3), seat(2, 3), seat(3, 3), seat(4, 3), seat(5, 3)], color: 'mint' },
      { name: '접종 안 함', cells: [seat(2, 2)], color: 'peach' },
      { name: '접종할 수 없음', cells: [seat(4, 2)], color: 'lavender' },
    ], places: [{ name: '처음 아픈 학생', icon: 'dot', at: [1, 1] }] };
    // 가상 자료: 접종한 사람 비율과 한 달 환자 수(실제 통계 아님)
    const HERD = [['20%', 48], ['40%', 36], ['60%', 22], ['80%', 9], ['95%', 2]];
    const LINE = { type: 'line', mode: 'read', title: '접종 비율에 따른 한 달 환자 수(가상 자료 · 실제 통계 아님)', unit: '명', xLabel: '접종한 사람 비율', yLabel: '환자 수', data: HERD, max: 50, scale: 10 };
    const TERMS = ['항원', '면역 기억', '집단면역'];
    const EXPL = [
      { id: 'e1', text: '면역 세포가 알아보는 병원체의 표지', to: '항원' }, { id: 'e2', text: '백신 속 약하게 하거나 일부만 넣은 표지', to: '항원' },
      { id: 'e3', text: '한 번 만난 병원체를 몸이 기억하는 것', to: '면역 기억' }, { id: 'e4', text: '다시 만나면 빠르게 막아 내는 힘', to: '면역 기억' },
      { id: 'e5', text: '여럿이 면역을 가져 병이 퍼지기 어려운 상태', to: '집단면역' }, { id: 'e6', text: '접종할 수 없는 사람도 함께 보호받는 것', to: '집단면역' },
    ];
    const WRONG = [{ id: 'w1', text: '건강한 사람에게는 면역이 필요 없다' }, { id: 'w2', text: '나 하나쯤 안 맞아도 모두 안전하다' }];
    // 가족 대화 갈림길 — 깊이 2(가상 인물 윤)
    const D1 = { text: '윤의 이모가 "인터넷에서 그 백신 맞으면 큰일 난대"라는 영상을 보고, 이번 학교 단체 접종 동의서에 서명하지 말자고 한다.', ask: '윤은 어떻게 말할까?', motif: 'house', choices: [
      { id: 'agree', text: '"영상에서 그랬으면 맞겠지" 하고 동의서를 버린다', result: '확인하지 않은 영상 하나로 결정이 끝난다.', impact: [{ who: '윤', text: '예방 기회를 놓칠 수 있다', tone: -1 }], why: '영상 하나만 보고 정하지 않고, 믿을 만한 출처에서 확인해요.', end: '확인하지 않고 결정했어요.',
        next: { text: '다음 날 보건 선생님이 동의서를 다시 나눠 준다.', choices: [
          { id: 'askN', text: '보건 선생님께 이모가 걱정한 점을 그대로 여쭤본다', result: '선생님이 공식 안내 자료와 접종 뒤 살필 점을 알려 준다.', impact: [{ who: '가족', text: '걱정을 확인할 수 있다', tone: 1 }] },
          { id: 'throw', text: '그냥 또 버린다', result: '가족은 여전히 영상 내용만 믿는다.', impact: [{ who: '가족', text: '확인 기회를 놓친다', tone: -1 }], why: '궁금한 점은 보건 선생님·의료진에게 물어볼 수 있어요.' }] } },
      { id: 'source', text: '"그 영상은 누가 만든 걸까? 공식 안내를 같이 찾아보자"고 한다', result: '이모가 "그래, 같이 보자"고 한다.', impact: [{ who: '가족', text: '출처를 확인한다', tone: 1 }], end: '출처를 함께 확인하자고 했어요.',
        next: { text: '공식 안내를 보니 접종 뒤 드물게 열이나 붓기가 있을 수 있다고 적혀 있다. 이모는 그래도 걱정한다.', choices: [
          { id: 'doctor', text: '걱정되는 점은 접종 전 의료진에게 묻기로 한다', result: '가족이 궁금한 점을 적어 상담을 받기로 한다.', impact: [{ who: '가족', text: '안심하고 결정한다', tone: 1 }] },
          { id: 'mock', text: '"이모는 너무 겁이 많아"라고 놀린다', result: '이모가 기분이 상해 대화가 끊긴다.', impact: [{ who: '이모', text: '서운하다', tone: -1 }], why: '걱정을 놀리면 대화가 끊겨요. 걱정을 듣고 함께 확인해요.' }] } },
      { id: 'fight', text: '"이모가 뭘 알아요!" 하고 소리친다', result: '이모가 화가 나 이야기를 더 듣지 않는다.', impact: [{ who: '가족', text: '서로 마음이 상한다', tone: -1 }], why: '소문을 바로잡을 때도 상대의 걱정을 존중하며 말해요.', ending: '소리쳐서 대화가 끊겼어요.' }] };
    const R1 = [{ id: 'r1', text: '공식 기관 안내처럼 믿을 만한 출처로 확인한다' }, { id: 'r2', text: '걱정은 의료진·보건 선생님에게 물어볼 수 있다' },
      { id: 'r3', text: '조회 수가 많은 영상이면 믿을 만하다', why: '조회 수는 정확성을 알려 주지 않아요.' }, { id: 'r4', text: '건강하면 백신이 필요 없다', why: '건강해도 처음 만나는 병원체에는 면역 기억이 없어요.' }];
    const R1M = { reasons: [{ id: 'r5', text: '영상을 만든 사람과 근거 자료를 함께 본다' }], ok: ['r5'] };
    const D2 = { text: '같은 반 민이 "다들 맞았으니까 나 하나쯤 안 맞아도 괜찮지 않아?"라고 말한다. 민의 동생은 아직 아기라 접종을 못 한다.', ask: '나는 민에게 뭐라고 말할까?', motif: 'house', choices: [
      { id: 'yes', text: '"맞아, 상관없어"라고 맞장구친다', result: '민은 접종 날을 그냥 넘긴다.', impact: [{ who: '민의 아기 동생', text: '보호막이 하나 줄어든다', tone: -1 }], why: '한 사람 한 사람이 빠지면 보호막에 구멍이 생겨요.', end: '맞장구쳐서 민이 접종을 넘겼어요.',
        next: { text: '몇 주 뒤 반에 같은 병이 돈다는 소식이 들린다.', choices: [
          { id: 'tellM', text: '민에게 "집단면역은 동생 같은 사람을 지키는 거래"라고 다시 말한다', result: '민이 보호자와 접종 일정을 다시 확인한다.', impact: [{ who: '민의 동생', text: '보호받을 길이 생긴다', tone: 1 }] },
          { id: 'nothing', text: '이미 지난 일이라 아무 말 안 한다', result: '민은 이유를 모른 채 지낸다.', impact: [{ who: '민', text: '알 기회를 놓친다', tone: -1 }], why: '늦었더라도 바르게 알려 줄 수 있어요.' }] } },
      { id: 'explain', text: '"네 동생처럼 접종 못 하는 사람을 우리가 같이 지키는 거래"라고 말한다', result: '민이 "그런 뜻이었어?" 하고 놀란다.', impact: [{ who: '민', text: '집단면역을 이해한다', tone: 1 }], end: '집단면역의 뜻을 알려 주었어요.',
        next: { text: '민이 "그래도 주사가 무서워"라고 털어놓는다.', choices: [
          { id: 'support', text: '"무서운 건 당연해. 보건 선생님께 같이 물어보자"고 한다', result: '민이 보건실에 함께 가서 궁금한 점을 묻는다.', impact: [{ who: '민', text: '걱정을 덜어 낸다', tone: 1 }] },
          { id: 'tease', text: '"겁쟁이네"라고 웃는다', result: '민이 다시는 그 이야기를 안 꺼낸다.', impact: [{ who: '민', text: '부끄러워한다', tone: -1 }], why: '무서운 마음을 놀리면 도움을 청하지 못해요.' }] } },
      { id: 'shame', text: '"너 같은 사람 때문에 병이 퍼져"라고 탓한다', result: '민이 화를 내며 자리를 뜬다.', impact: [{ who: '민', text: '탓을 들어 마음이 닫힌다', tone: -1 }], why: '탓하면 마음이 닫혀요. 까닭을 알려 주고 함께 확인해요.', ending: '탓해서 대화가 끊겼어요.' }] };
    const R2 = [{ id: 'r1', text: '여럿이 접종하면 접종할 수 없는 사람도 보호받는다' }, { id: 'r2', text: '무서운 마음을 존중하며 도움을 함께 찾는다' },
      { id: 'r3', text: '나 하나쯤 빠져도 아무 일 없다', why: '한 사람씩 빠지면 보호막에 구멍이 생겨요.' }, { id: 'r4', text: '접종 안 한 사람을 탓해야 바뀐다', why: '탓하기보다 까닭을 알려 주고 함께 확인해요.' }];
    const D3 = { text: '단톡방에 "백신 맞으면 몸에 칩이 들어간대ㅋㅋ"라는 글이 올라오고, 몇 명이 "진짜?"라고 묻는다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'share', text: '재밌어서 다른 방에도 퍼 나른다', result: '소문이 다른 반까지 퍼진다.', impact: [{ who: '다른 반 학생', text: '헛소문을 믿을 수 있다', tone: -1 }], why: '확인하지 않은 글을 퍼 나르면 소문이 커져요.', end: '헛소문을 퍼 날랐어요.',
        next: { text: '다른 반 친구가 "그거 진짜야? 무서워"라고 묻는다.', choices: [
          { id: 'fix', text: '"내가 확인 안 하고 보낸 거야. 공식 안내를 보자"고 바로잡는다', result: '친구가 안심하고 공식 안내를 본다.', impact: [{ who: '친구', text: '걱정을 던다', tone: 1 }] },
          { id: 'more', text: '"그렇대"라고 더 부풀린다', result: '친구가 더 불안해한다.', impact: [{ who: '친구', text: '불안이 커진다', tone: -1 }], why: '잘못 퍼 나른 것을 알면 바로 바로잡아요.' }] } },
      { id: 'check', text: '"출처가 어디야? 질병관리청 같은 공식 안내를 보자"고 답한다', result: '몇 명이 "그러네, 출처가 없네"라고 한다.', impact: [{ who: '단톡방 친구들', text: '출처를 따져 본다', tone: 1 }], end: '출처를 따져 보자고 했어요.',
        next: { text: '글을 올린 친구가 "농담인데 왜 진지해"라고 한다.', choices: [
          { id: 'calm', text: '"농담이라도 진짜로 믿는 사람이 있을 수 있어"라고 차분히 말한다', result: '친구가 글 끝에 "농담임"이라고 덧붙인다.', impact: [{ who: '단톡방 친구들', text: '헛소문을 덜 믿는다', tone: 1 }] },
          { id: 'attack', text: '"넌 맨날 이상한 거 올리더라"라고 몰아세운다', result: '단톡방이 말다툼으로 번진다.', impact: [{ who: '단톡방 친구들', text: '분위기가 험해진다', tone: -1 }], why: '사람을 몰아세우지 말고 글의 내용만 바로잡아요.' }] } },
      { id: 'skip', text: '못 본 척하고 나간다', result: '"진짜?"라는 질문에 아무도 답하지 않는다.', impact: [{ who: '묻던 친구들', text: '헛소문을 그대로 믿을 수 있다', tone: -1 }], why: '바로잡을 수 있을 때 출처를 함께 보자고 말해 볼 수 있어요.', ending: '그냥 나가서 소문이 그대로 남았어요.' }] };
    const R3 = [{ id: 'r1', text: '확인하지 않은 글은 퍼 나르지 않는다' }, { id: 'r2', text: '공식 기관 안내로 출처를 따진다' },
      { id: 'r3', text: '농담이면 무엇이든 괜찮다', why: '농담이라도 진짜로 믿고 불안해하는 사람이 있어요.' }, { id: 'r4', text: '많은 사람이 말하면 사실이다', why: '여럿이 퍼 나른다고 사실이 되지는 않아요.' }];

    ALL.push(
      // ---- 도입 ----
      M('intro.memory-timeline', {
        title: '첫 만남과 두 번째 만남 면역', method: '첫 만남과 두 번째 만남 면역 반응', tool: 'timeline', minutes: 6,
        levels: { easy: '첫 만남 장면 3장을 시간 줄에 놓는다.', base: '첫 만남과 두 번째 만남 장면 4장을 시간 줄에 놓는다.', challenge: '장면 4장을 놓은 뒤, 첫 만남과 두 번째 만남이 무엇이 다른지(빠르기·아픈 정도) 말한다.' },
        intro: {
          teacher: '"우리 몸은 처음 만난 병원체와 두 번째 만난 병원체를 똑같이 대할까요?" 시연 단추로 장면 카드가 시간 줄에 놓이는 모습을 보인다. 첫 만남에서는 몸이 항체를 천천히 만들어 그동안 아플 수 있지만, 두 번째에는 면역 기억 덕분에 빨리 막아 낸다는 흐름을 짚는다. "백신은 병을 걸리게 하는 것"이라는 말에는 "백신은 병원체 전체일까요, 알아볼 표지(항원)일까요?"라고 되묻는다.',
          student: '병원체를 처음 만났을 때와 다시 만났을 때의 장면을 시간 줄에 놓아 보고, 두 번째가 왜 빠른지 짝과 이야기해요.',
          demo: { tool: 'timeline', options: { mode: 'order', axis: ['처음', '나중'], slots: 4, cards: [
            { id: 't1', text: '병원체를 처음 만난다' }, { id: 't2', text: '몸이 항체를 천천히 만든다' },
            { id: 't3', text: '면역 기억이 남는다' }, { id: 't4', text: '다시 만나면 빠르게 막는다' }], shuffle: false },
          sequence: [{ order: ['t1', 't2', 't3', 't4'] }] },
          art: { draw: 'a paper-cut timeline ribbon with a small paper shield growing slowly on the left and a strong shield snapping up quickly on the right, tiny germ shapes bouncing off', banner: '두 번째 만남은 왜 빠를까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '면역 반응의 흐름은 단순화한 설명이다. 백신 종류(약하게 한 것·일부만 넣은 것 등)의 세부는 보건 선생님 자료로 보탠다.',
      }),
      M('intro.myth-pick', {
        title: '백신 소문 첫인상 고르기', method: '백신 소문 첫인상 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '소문 문장 하나에 믿음 정도를 고른다.', base: '소문 문장마다 믿음 정도를 고르고 수업 끝에 다시 본다.', challenge: '믿음 정도를 고른 까닭(출처·느낌)을 활동지에 메모해 두고 수업 끝에 견준다.' },
        intro: {
          teacher: '"\'건강하면 백신이 필요 없다\' — 이 말을 얼마나 믿나요? 정답을 고르는 것이 아니라 지금 내 첫인상을 적어 두는 거예요." 시연 단추로 눈금이 가운데에 놓이는 모습을 보인다. 학생들이 고른 눈금은 발표시키지 않고, 수업 끝에 같은 문장을 다시 보며 생각이 바뀌었는지 스스로 견주게 한다. "다 믿으면 바보"라는 말이 나오면 처음 믿는 것은 누구나 그럴 수 있고, 확인하는 습관이 중요하다고 말해 준다.',
          student: '백신에 관한 소문 문장을 읽고 지금 얼마나 믿는지 눈금으로 골라 두어요. 수업 끝에 다시 보며 생각이 바뀌었는지 견줘요.',
          demo: { tool: 'emotion', options: { mode: 'scale', situation: '건강하면 백신이 필요 없다', feeling: '걱정', steps: 5, scaleLabels: { 1: '전혀 안 믿음', 5: '아주 믿음' } }, sequence: [{ level: 3 }] },
          art: { draw: 'a paper-cut speech bubble full of rumor scribbles hovering over a phone, with a five-step paper slider underneath', banner: '이 소문, 얼마나 믿나요?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '첫인상 눈금은 맞고 틀림이 없고 발표시키지 않는다. 가족의 접종 여부나 결정은 묻지 않는다.',
      }),

      // ---- 활동 ----
      M('activity.herd-map', {
        title: '교실 좌석 지도로 집단면역 보기', method: '교실 좌석 지도로 집단면역 보기', tool: 'map', minutes: 15,
        levels: { easy: '두 교실(접종 적음·많음) 지도에서 좌석 이름이 보이고, 처음 아픈 학생 옆 자리에 핀을 꽂는다.', base: '두 교실 지도에 핀을 꽂고, 접종할 수 없는 학생에게 병원체가 닿을 수 있는지 보기를 고른다.', challenge: '마지막 문항에서 두 교실을 견주어 접종 비율이 달라지면 경로가 어떻게 바뀌는지 보기를 고르고, 경로를 활동지에 그린다.' },
        activity: {
          title: '교실 좌석 지도로 집단면역 보기', tool: 'map',
          teacher: '"처음 아픈 학생에게서 접종할 수 없는 학생까지, 병원체가 건너갈 수 있는 자리가 이어져 있나요?" 두 가상 교실 지도를 견주며 핀을 꽂을 때마다 옆자리가 접종했는지 소리 내어 말하게 한다. "나 하나쯤 안 맞아도 상관없다"는 학생에게 "교실 나에서 접종 안 한 한 자리가 바로 다리가 된다면요?"라고 되묻는다. 좌석은 가상이며 학생의 실제 접종 여부를 묻거나 표시하지 않는다.',
          task: '가상 교실 두 곳의 좌석 지도에서 병원체가 옮겨 갈 수 있는 자리에 핀을 꽂고, 접종 비율에 따라 무엇이 달라지는지 견줘요.',
          levels: { easy: { regionNames: true, readout: true }, base: { regionNames: true }, challenge: { regionNames: true, revealAfterCheck: true } },
          items: [
            PIN('교실 가: 처음 아픈 학생 바로 오른쪽, 접종 안 한 자리에 핀을 꽂으세요.', ROOM_LOW, { at: [2, 1] }),
            PIN('교실 가: 접종할 수 없는 학생의 자리에 핀을 꽂으세요.', ROOM_LOW, { region: '접종할 수 없음' }),
            IT(PIN('교실 나: 접종 안 한 단 한 자리에 핀을 꽂으세요.', ROOM_HIGH, { region: '접종 안 함' }),
              null,
              { prompt: '교실 나: 접종 안 한 자리에 핀을 꽂고, 처음 아픈 학생에게서 그 자리까지 병원체가 건너갈 수 있는지 고르세요.', toolOptions: { ask: { q: '처음 아픈 학생 바로 옆은 모두 접종한 자리예요. 병원체가 접종 안 한 자리까지 건너가기는?', choices: ['교실 가보다 훨씬 어렵다', '교실 가와 똑같다', '더 쉽다'] } }, target: { region: '접종 안 함', pick: 0 } }),
            IT(PIN('교실 나: 접종할 수 없는 학생의 자리에 핀을 꽂으세요.', ROOM_HIGH, { region: '접종할 수 없음' }),
              null,
              { prompt: '교실 나: 접종할 수 없는 학생 자리에 핀을 꽂고, 두 교실 가운데 그 학생이 더 안전한 곳을 고르세요.', toolOptions: { ask: { q: '접종할 수 없는 학생이 더 안전한 교실은?', choices: ['교실 가', '교실 나', '똑같다'] } }, target: { region: '접종할 수 없음', pick: 1 } },
              { conclude: '둘레의 많은 사람이 면역을 가지면 병원체가 건너갈 다리가 끊겨, 접종할 수 없는 사람까지 보호받아요. 이것이 집단면역이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '교실 가와 나를 견주어, 접종할 수 없는 학생이 어느 교실에서 더 안전한지 까닭과 함께 써요.' }],
          easy: [{ type: 'choice', prompt: '접종할 수 없는 학생이 더 안전한 교실은?', options: ['둘레에 접종한 친구가 많은 교실', '둘레에 접종 안 한 친구가 많은 교실'], answer: '둘레에 접종한 친구가 많은 교실' }] },
        notes: '지도 교구는 선을 그리지 못하고 문항마다 핀 하나라, 감염 경로는 \'옆자리 핀\'과 보기 고르기로 바꾸고 경로 그리기는 활동지에 두었다. 좌석·접종 여부는 모두 가상이다.',
      }),
      M('activity.herd-chart', {
        title: '예시 자료로 접종률과 확산 읽기', method: '예시 자료로 접종률과 확산 읽기', tool: 'chart', minutes: 15,
        levels: { easy: '꺾은선의 점마다 값이 보이고, 환자 수가 가장 적은 접종 비율을 고른다.', base: '값을 숨긴 꺾은선에서 가장 적은 곳을 고르고 두 점의 차이를 읽어 쓴다.', challenge: '마지막 문항에서 그래프로 말할 수 있는 주장과 없는 주장을 가려 고르고, 주장 한 줄을 활동지에 쓴다.' },
        activity: {
          title: '예시 자료로 접종률과 확산 읽기', tool: 'chart',
          teacher: '"이 꺾은선은 수업용 가상 자료예요(실제 통계 아님). 접종한 사람 비율이 높아질수록 선은 어떻게 움직이나요?" 점을 하나씩 읽을 때마다 그 마을의 접종할 수 없는 사람에게 무슨 일이 생길지 함께 말한다. "95%면 병이 완전히 사라진다"는 학생에게 "선이 0에 닿았나요?"라고 되묻는다. 그래프의 수치는 지어낸 예시이고 실제 병마다 다르다는 점을 끝에 다시 밝힌다.',
          task: '가상 자료 꺾은선그래프에서 접종 비율에 따라 한 달 환자 수가 어떻게 달라지는지 읽어요.',
          levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            IT(RD('환자 수가 가장 적은 접종 비율을 고르세요.', Object.assign({}, LINE, { question: '환자 수가 가장 적을 때는?', choices: HERD.map((d) => d[0]) }), { pick: 4 })),
            IT(RD('접종 비율 60%와 80%일 때 환자 수는 몇 명 차이가 나는지 읽어 쓰세요.', Object.assign({}, LINE, { question: '몇 명 차이일까요?' }), { value: 13 })),
            IT(RD('접종 비율이 높아질 때 선은 어떻게 움직이는지 고르세요.', Object.assign({}, LINE, { question: '선의 움직임은?', choices: ['계속 내려간다', '계속 올라간다', '그대로다'] }), { pick: 0 }),
              null,
              { prompt: '이 가상 그래프로 말할 수 있는 주장을 고르세요.', toolOptions: { question: '그래프로 말할 수 있는 주장은?', choices: ['접종 비율이 높을수록 환자 수가 줄었다', '95%면 병이 완전히 사라진다', '모든 병에서 이 숫자가 똑같다'] }, target: { pick: 0 } },
              { conclude: '이 가상 자료에서는 접종한 사람이 많을수록 환자 수가 줄었어요. 그래도 0이 되지 않았고, 실제 수치는 병마다 달라요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '가상 그래프를 근거로 \'집단면역\'에 대한 주장을 한 줄로 써요(가상 자료라는 것도 밝혀요).' }] },
        notes: DATA_NOTE + ' 실제 집단면역에 필요한 접종률은 병마다 다르므로 수업에서 숫자를 단정하지 않는다.',
      }),
      M('activity.explain-match', {
        title: '백신 원리 낱말과 설명 맞추기', method: '백신 원리 설명 카드 맞추기', tool: 'sortboard', minutes: 15,
        levels: { easy: '바구니 2개(항원·면역 기억)에 설명 카드를 넣고, 틀리면 까닭을 말하며 되돌아온다.', base: '바구니 3개(항원·면역 기억·집단면역)에 설명 카드를 두 장씩 넣는다.', challenge: '틀린 설명 카드(함정)는 남겨 두고, 그 가운데 하나를 활동지에 바르게 고쳐 쓴다.' },
        activity: {
          title: '백신 원리 낱말과 설명 맞추기', tool: 'sortboard',
          teacher: '"\'면역 기억\'과 \'집단면역\'은 이름이 비슷한데, 하나는 한 사람 몸 안의 일이고 하나는 여럿 사이의 일이에요. 어느 쪽이 어느 쪽일까요?" 카드를 넣을 때마다 그 설명이 한 사람의 이야기인지 여럿의 이야기인지 말하게 한다. "건강한 사람에게는 면역이 필요 없다"는 카드를 넣으려는 학생에게 "건강한 사람도 처음 만나는 병원체를 기억하고 있을까요?"라고 되묻는다.',
          task: '항원·면역 기억·집단면역 바구니에 알맞은 설명 카드를 넣고, 틀린 설명은 남겨 두어요.',
          levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            IT(SBX('설명 카드를 세 낱말 바구니에 두 장씩 넣으세요.', TERMS, EXPL),
              SBX('설명 카드를 두 낱말 바구니에 넣으세요.', ['항원', '면역 기억'], pickCards(EXPL, ['e1', 'e2', 'e3', 'e4'])),
              SBX('설명 카드를 세 낱말 바구니에 넣고, 틀린 설명 카드는 남겨 두세요.', TERMS, [...EXPL, ...WRONG])),
            IT(SBX('백신이 하는 일을 한 사람 몸 안의 일과 여럿 사이의 일로 나누세요.', ['한 사람 몸 안', '여럿 사이'], [
              { id: 'b1', text: '항원을 알아보고 항체를 만든다', to: '한 사람 몸 안' }, { id: 'b2', text: '면역 기억이 오래 남는다', to: '한 사람 몸 안' },
              { id: 'b3', text: '병원체가 건너갈 사람이 줄어든다', to: '여럿 사이' }, { id: 'b4', text: '아기처럼 접종 못 하는 사람이 보호받는다', to: '여럿 사이' }]),
              SBX('두 장씩 한 사람 몸 안의 일과 여럿 사이의 일로 나누세요.', ['한 사람 몸 안', '여럿 사이'], [
                { id: 'b1', text: '항원을 알아보고 항체를 만든다', to: '한 사람 몸 안' }, { id: 'b4', text: '아기처럼 접종 못 하는 사람이 보호받는다', to: '여럿 사이' }])),
            IT(SBX('접종할 수 없거나 미뤄야 할 수 있는 가상 사례와 그렇지 않은 사례를 나누세요.', ['의료진과 상의가 필요', '보통 접종 일정대로'], [
              { id: 'c1', text: '아직 접종할 나이가 안 된 아기', to: '의료진과 상의가 필요' }, { id: 'c2', text: '오늘 열이 많이 나는 사람', to: '의료진과 상의가 필요' },
              { id: 'c3', text: '평소처럼 건강한 중학생', to: '보통 접종 일정대로' }, { id: 'c4', text: '주사가 조금 무섭기만 한 친구', to: '보통 접종 일정대로' }]),
              null, null, { conclude: '항원은 몸이 알아볼 표지, 면역 기억은 한 사람 몸의 기억, 집단면역은 여럿이 면역을 가져 접종 못 하는 사람까지 지키는 상태예요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '틀린 설명 \'나 하나쯤 안 맞아도 모두 안전하다\'를 바르게 고쳐 한 문장으로 써요.' }],
          easy: [{ type: 'choice', prompt: '한 번 만난 병원체를 몸이 기억하는 것은?', options: ['면역 기억', '집단면역'], answer: '면역 기억' }] },
        notes: '접종할 수 없거나 미뤄야 하는 경우는 사람마다·백신마다 다르다 — 수업은 \'의료진과 상의\'까지만 다루고 판정하지 않는다.',
      }),
      M('activity.family-dilemma', {
        title: '접종 망설이는 가족 대화', method: '접종 망설이는 가족 대화', tool: 'dilemma', minutes: 15,
        levels: { easy: '갈림길 1번에서 말을 고르고 결과 장면을 본다.', base: '갈림길 2번을 끝까지 가고 알맞은 근거 카드를 고른다.', challenge: '갈림길 2번을 끝까지 가고, 출처를 따지는 근거 카드까지 함께 고른다.' },
        activity: {
          title: '접종 망설이는 가족 대화', tool: 'dilemma',
          teacher: '"걱정하는 사람에게 \'그건 틀렸어\'라고만 하면 생각이 바뀔까요?" 학생마다 한 길을 끝까지 가 본 뒤 되돌아가 다른 길과 견주게 한다. "걱정하는 건 몰라서 그런 것"이라는 학생에게 "걱정에는 아이를 지키고 싶은 마음도 들어 있지 않을까요?"라고 되묻는다. 끝 장면에서 \'출처 확인\'과 \'걱정 존중\'이 함께 들어간 길을 찾게 한다. 학생 가족의 실제 결정은 묻지 않는다.',
          task: '백신 소문을 들은 가상 가족·친구와의 대화에서 말을 골라 결과를 따라가고, 끝에서 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '이모가 영상을 보고 접종을 말려요. 한 번 골라 결과를 보세요.', base: '이모가 영상을 보고 접종을 말려요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '이모가 영상을 보고 접종을 말려요. 두 번 골라 끝까지 가고, 출처를 따지는 근거도 고르세요.' },
              '망설이는 이모', D1, [['source', 'doctor'], ['agree', 'askN']], R1, ['r1', 'r2'], { e: 1, b: 2, c: 2 }, R1M),
            DIL({ easy: '친구가 "나 하나쯤"이라고 해요. 한 번 골라 결과를 보세요.', base: '친구가 "나 하나쯤"이라고 해요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '친구가 "나 하나쯤"이라고 해요. 두 번 골라 끝까지 가고, 출처를 따지는 근거도 고르세요.' },
              '나 하나쯤', D2, [['explain', 'support'], ['yes', 'tellM']], R2, ['r1', 'r2'], { e: 1, b: 2, c: 2 }, { reasons: [{ id: 'r5', text: '보건 선생님처럼 믿을 만한 사람에게 함께 확인한다' }], ok: ['r5'] }),
            DIL({ easy: '단톡방에 백신 헛소문이 올라와요. 한 번 골라 결과를 보세요.', base: '단톡방에 백신 헛소문이 올라와요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '단톡방에 백신 헛소문이 올라와요. 두 번 골라 끝까지 가고, 출처를 따지는 근거도 고르세요.' },
              '단톡방 헛소문', D3, [['check', 'calm'], ['share', 'fix']], R3, ['r1', 'r2'], { e: 1, b: 2, c: 2 }, R1M,
              { conclude: '소문은 출처를 따져 확인하고, 걱정하는 사람의 마음은 존중하며 함께 믿을 만한 안내를 찾아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '백신 소문을 걱정하는 가족에게 가장 알맞은 말은?', options: ['"그건 다 거짓말이야!"', '"걱정되는구나. 공식 안내를 같이 보고 의료진에게도 물어보자."', '"알아서 해."'], answer: '"걱정되는구나. 공식 안내를 같이 보고 의료진에게도 물어보자."' }] },
        notes: SAFE_NOTE + ' 접종 여부는 가정과 의료진이 정하는 일이며 수업은 \'출처 확인·걱정 존중·상담\'까지만 다룬다.',
      }),

      // ---- 정리 ----
      M('wrap.herd-write', {
        title: '집단면역을 동생에게 설명하기', method: '집단면역을 동생에게 설명하기', tool: 'rubric-writing', minutes: 9,
        levels: { easy: '문장 틀("집단면역은 ___이야. 그래서 ___도 보호받아")을 채워 두 문장으로 쓴다.', base: '쉬운 말 세 문장으로 쓰고 기준 3개(원리·보호 대상·내 역할)를 스스로 점검한다.', challenge: '세 문장에 비유 하나(우산·울타리 등)를 넣어 쓰고 기준 4개를 점검한다.' },
        wrap: {
          teacher: '"초등학생 동생이 \'집단면역이 뭐야?\'라고 물으면 어떻게 설명할까요?" 어려운 낱말 없이 원리·보호받는 사람·내 역할이 들어가게 쓰게 한다. "어려운 말을 써야 똑똑해 보인다"는 학생에게 동생이 알아들어야 설명이 된다고 말해 준다. 수업 첫머리에 고른 소문 첫인상 눈금을 다시 떠올려 생각이 바뀌었는지 스스로 견주게 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'rubric-writing', options: { topic: '초등학생 동생에게 집단면역을 쉬운 말 세 문장으로 설명하세요.', minChars: 50, maxChars: 240, minSentences: 3, maxSentences: 4, title: '동생에게 설명하기', placeholder: '예: 집단면역은…' },
              prompt: '집단면역을 동생에게 세 문장으로 설명하고 기준표에 표시해요.', target: { selfCheck: ['면역이 생기는 원리를 썼다', '누가 보호받는지 썼다', '내가 할 수 있는 역할을 썼다'] }, difficulty: 0.3 },
              { prompt: '문장 틀을 채워 두 문장으로 쓰고 기준표에 표시해요.', toolOptions: { minChars: 30, minSentences: 2, maxSentences: 3, starter: '집단면역은 ___이야. 그래서 ___도 보호받아.' }, target: { selfCheck: ['누가 보호받는지 썼다', '쉬운 말로 썼다'] } },
              { prompt: '비유 하나를 넣어 세 문장으로 설명하고 기준표에 표시해요.', target: { selfCheck: ['면역이 생기는 원리를 썼다', '누가 보호받는지 썼다', '내가 할 수 있는 역할을 썼다', '알맞은 비유를 하나 넣었다'] } }),
            SCALE('건강하면 백신이 필요 없다', '걱정', '수업 첫머리의 소문 문장을 지금 얼마나 믿는지 다시 골라요.', { 1: '전혀 안 믿음', 5: '아주 믿음' }),
            { type: 'choice', prompt: '"나 하나쯤 안 맞아도 상관없다"는 말이 틀린 까닭은?', options: ['한 사람씩 빠지면 접종 못 하는 사람을 지키는 보호막에 구멍이 생긴다', '백신은 한 사람만 맞으면 된다', '면역은 옮겨 가지 않는다'], answer: 0, difficulty: 0.2, explain: '집단면역은 여럿이 함께 만들어요.' },
          ],
        },
        worksheet: {
          title: '동생에게 설명하는 집단면역',
          items: [
            { type: 'short', prompt: '집단면역을 동생에게 쉬운 말 세 문장으로 설명해요(원리·보호받는 사람·내 역할).' },
            { type: 'check', prompt: '내 설명을 기준표로 점검해요.', options: ['원리를 썼다', '보호받는 사람을 썼다', '내 역할을 썼다'] },
          ],
          easy: { note: '"집단면역은 ___이야. 그래서 ___도 보호받아" 틀을 써도 돼요.', items: [{ type: 'blank', prompt: '틀을 채워 써요.', text: '집단면역은 ___이야. 그래서 ___도 보호받아.', answer: '(예) 여럿이 면역을 가져 병이 퍼지기 어려운 것, 접종 못 하는 아기' }] },
        },
      }),
      M('wrap.record-check', {
        title: '예방접종 기록 확인 계획', method: '예방접종 기록 확인 계획', tool: 'kitchen', minutes: 9,
        levels: { easy: '할 일 2개 가운데 해 볼 것을 표시한다.', base: '할 일 4개 가운데 해 볼 것을 표시한다.', challenge: '할 일 4개를 표시하고, 확인할 날짜를 활동지에 정한다.' },
        wrap: {
          teacher: '"내 예방접종 기록은 어디서, 누구와 확인할 수 있을까요?" 목록을 소리 내어 읽고 스스로 할 것만 표시하게 한다(맞고 틀림이 없다). 학생의 실제 접종 여부·기록 내용은 수업에서 묻거나 발표시키지 않는다. "기록은 어른만 보는 것"이라는 말에는 "중학생도 보호자와 함께 내 건강 기록을 알아 두면 어떤 점이 좋을까요?"라고 되묻는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '접종 기록 확인 계획', items: [
              { id: 'c1', text: '보호자와 접종 기록을 함께 확인하기' }, { id: 'c2', text: '궁금한 점을 보건 선생님께 묻기' },
              { id: 'c3', text: '공식 안내에서 접종 일정을 찾아보기' }, { id: 'c4', text: '확인한 날짜를 달력에 적기' }] },
              prompt: '이번 달 해 볼 일을 스스로 골라 표시해요(정답은 없어요).', target: { selfCheck: true }, difficulty: 0.1 },
              { prompt: '두 가지 할 일 가운데 해 볼 것을 표시해요.', toolOptions: { items: [{ id: 'c1', text: '보호자와 접종 기록을 함께 확인하기' }, { id: 'c2', text: '궁금한 점을 보건 선생님께 묻기' }] } }),
            { type: 'choice', prompt: '예방접종에 대해 궁금한 점이 생겼을 때 가장 믿을 만한 확인 방법은?', options: ['조회 수 많은 영상', '보건 선생님·의료진과 공식 기관 안내', '단톡방 친구들 말'], answer: 1, difficulty: 0.15, explain: '공식 안내와 전문가에게 확인해요.' },
          ],
        },
        worksheet: {
          title: '예방접종 기록 확인 계획',
          items: [
            { type: 'check', prompt: '이번 달 해 볼 일에 표시해요.', options: ['보호자와 기록 확인', '보건 선생님께 묻기', '공식 안내 찾아보기'] },
            { type: 'blank', prompt: '확인할 날을 정해요.', text: '나는 ___월 ___일까지 보호자와 접종 기록을 확인한다.', answer: '(스스로 정한 날)' },
          ],
        },
        notes: SAFE_NOTE + ' 접종 기록 조회 방법(예방접종도우미 등)은 학교가 최신 공식 안내로 확인해 알려 준다.',
      }),
    );
  }
  // ==== 7~9학년 · 수면 리듬과 수면 위생 (health.m.sleep-rhythm) ====
  {
    const M = MK('sleep-rhythm', G);
    const HELP2 = ['잠을 돕는 습관', '잠을 방해하는 습관'];
    const HAB = [
      { id: 'g1', text: '주말에도 비슷한 시각에 일어난다', to: '잠을 돕는 습관' }, { id: 'g2', text: '잠들기 30분 전 화면을 끈다', to: '잠을 돕는 습관' },
      { id: 'g3', text: '아침에 햇빛을 쬐며 걷는다', to: '잠을 돕는 습관' }, { id: 'b1', text: '침대에 누워 휴대폰으로 영상을 본다', to: '잠을 방해하는 습관' },
      { id: 'b2', text: '저녁 늦게 카페인 음료를 마신다', to: '잠을 방해하는 습관' }, { id: 'b3', text: '주말 낮 12시까지 몰아서 잔다', to: '잠을 방해하는 습관' },
    ];
    const ROOM = [
      { id: 'm1', text: '방을 어둡고 조용하게 한다', to: '잠을 돕는 습관' }, { id: 'm2', text: '알림을 끄고 휴대폰을 책상에 둔다', to: '잠을 돕는 습관' },
      { id: 'm3', text: '자기 직전까지 게임을 한다', to: '잠을 방해하는 습관' }, { id: 'm4', text: '잠이 안 오면 단톡방을 계속 본다', to: '잠을 방해하는 습관' },
      { id: 'm5', text: '낮에 몸을 움직인다', to: '잠을 돕는 습관' }, { id: 'm6', text: '밤늦게 배부르게 먹고 바로 눕는다', to: '잠을 방해하는 습관' },
    ];
    const MYTH = ['사실에 가깝다', '오해다'];
    const MY = [
      { id: 'y1', text: '사춘기에는 잠드는 시각이 늦어지기 쉽다', to: '사실에 가깝다' }, { id: 'y2', text: '주말에 몰아 자면 다 회복된다', to: '오해다' },
      { id: 'y3', text: '잠은 의지로 얼마든지 줄일 수 있다', to: '오해다' }, { id: 'y4', text: '잠이 부족하면 다음 날 집중이 떨어질 수 있다', to: '사실에 가깝다' },
      { id: 'y5', text: '화면 빛은 잠드는 것을 늦출 수 있다', to: '사실에 가깝다' }, { id: 'y6', text: '늦게 잘수록 공부를 더 많이 하게 된다', to: '오해다' },
    ];
    // 가상 학생 다솜의 한 주 잠잔 시간(실제 통계 아님)
    const WEEK = [['월', 7], ['화', 6], ['수', 6], ['목', 5], ['금', 5], ['토', 10], ['일', 9]];
    const BAR = { type: 'bar', mode: 'read', title: '가상 학생 다솜의 한 주 잠잔 시간(가상 기록)', unit: '시간', xLabel: '요일', yLabel: '잠잔 시간', data: WEEK, max: 12, scale: 2 };
    const ROUTINE = [{ id: 'r1', text: '가방 챙기기' }, { id: 'r2', text: '씻기' }, { id: 'r3', text: '화면 끄고 충전기에 두기' }, { id: 'r4', text: '가벼운 책 읽기' }, { id: 'r5', text: '불 끄고 눕기' }];
    // 밤 단체방 갈림길(가상 인물 다솜) — 깊이 3
    const D1 = { text: '밤 11시, 다솜이 누우려는데 반 단체방 알림이 쉬지 않고 울린다. 내일 1교시는 수행평가다.', ask: '다솜은 어떻게 할까?', motif: 'moon', choices: [
      { id: 'read', text: '하나도 놓치기 싫어 계속 읽고 답한다', result: '새벽 1시가 넘도록 휴대폰을 본다.', impact: [{ who: '다솜', text: '잠이 크게 줄어든다', tone: -1 }], why: '알림을 다 따라가면 잠이 계속 밀려요. 끄고 내일 읽어도 돼요.', end: '새벽까지 휴대폰을 봤어요.',
        next: { text: '아침에 알람을 끄고 다시 잠들었다.', choices: [
          { id: 'late', text: '허겁지겁 일어나 아침을 거르고 뛰어간다', result: '수행평가 내내 멍하다.', impact: [{ who: '다솜', text: '집중이 떨어진다', tone: -1 }], end: '잠이 모자라 수행평가가 힘들었어요.',
            next: { text: '그날 밤 다솜은 "오늘은 일찍 자야지" 하지만 또 알림이 온다.', choices: [
              { id: 'mute', text: '단체방 알림을 끄고 휴대폰을 책상에 둔다', result: '조금 뒤척이지만 일찍 잠든다.', impact: [{ who: '다솜', text: '잠을 되찾는다', tone: 1 }] },
              { id: 'again', text: '"조금만" 하며 또 읽는다', result: '어제와 같은 밤이 되풀이된다.', impact: [{ who: '다솜', text: '피곤이 쌓인다', tone: -1 }], why: '한 번 밀린 잠은 습관을 바꿔야 돌아와요.' }] } },
          { id: 'weekend', text: '"주말에 몰아 자면 돼" 하고 버틴다', result: '주말에 낮 12시까지 자고 일요일 밤엔 잠이 안 온다.', impact: [{ who: '다솜', text: '리듬이 더 흐트러진다', tone: -1 }], why: '주말 몰아 자기는 리듬을 더 흐트러뜨릴 수 있어요.' }] } },
      { id: 'notice', text: '"내일 수행평가라 먼저 잘게!"라고 남기고 알림을 끈다', result: '친구들이 "잘 자"라고 답한다.', impact: [{ who: '다솜', text: '제때 잠든다', tone: 1 }], end: '먼저 잔다고 알리고 알림을 껐어요.',
        next: { text: '다음 날 아침, 밤사이 대화가 200개 넘게 쌓여 있다.', choices: [
          { id: 'skim', text: '쉬는 시간에 중요한 공지만 골라 읽는다', result: '필요한 것만 챙기고 수업에 집중한다.', impact: [{ who: '다솜', text: '잠도 정보도 챙긴다', tone: 1 }], end: '중요한 것만 골라 읽었어요.',
            next: { text: '한 친구가 "어제 왜 안 들어왔어? 서운해"라고 한다.', choices: [
              { id: 'explain', text: '"수행평가라 일찍 잤어. 오늘 얘기 들려줘"라고 말한다', result: '친구가 웃으며 어제 이야기를 들려준다.', impact: [{ who: '친구', text: '서운함이 풀린다', tone: 1 }] },
              { id: 'sorry', text: '서운하게 할까 봐 앞으로는 밤새 답하겠다고 한다', result: '다솜의 잠이 다시 줄어든다.', impact: [{ who: '다솜', text: '잠을 포기한다', tone: -1 }], why: '친구 관계도 중요하지만, 잠을 지키는 약속을 서로 존중할 수 있어요.' }] } },
          { id: 'class', text: '수업 시간에 몰래 다 읽는다', result: '수업 내용을 놓친다.', impact: [{ who: '다솜', text: '수업을 놓친다', tone: -1 }], why: '대화를 따라잡으려다 수업을 놓치지 않아요. 쉬는 시간에 골라 읽어요.' }] } },
      { id: 'bed', text: '휴대폰을 베개 옆에 두고 알림만 무음으로 바꾼다', result: '화면이 켜질 때마다 눈이 간다.', impact: [{ who: '다솜', text: '자꾸 깬다', tone: -1 }], why: '무음이어도 화면 빛과 궁금함이 잠을 깨워요. 손이 닿지 않는 곳에 둬요.', ending: '베개 옆 휴대폰 때문에 자꾸 깼어요.' }] };
    const R1 = [{ id: 'r1', text: '알림을 끄고 휴대폰을 멀리 두면 잠을 지킨다' }, { id: 'r2', text: '먼저 잔다고 알리면 관계도 지킬 수 있다' },
      { id: 'r3', text: '주말에 몰아 자면 다 회복된다', why: '몰아 자기는 리듬을 더 흐트러뜨릴 수 있어요.' }, { id: 'r4', text: '단체방 대화를 놓치면 친구를 잃는다', why: '잠을 지키는 약속을 알리면 친구도 존중할 수 있어요.' }];
    const R1M = { reasons: [{ id: 'r5', text: '친구에게 내 사정을 말하면 서로의 잠을 존중하는 약속이 생긴다' }], ok: ['r5'] };
    const D2 = { text: '밤 10시 반, 서우는 영상 한 편만 보고 자려 했는데 다음 영상이 저절로 이어진다.', ask: '서우는 어떻게 할까?', motif: 'moon', choices: [
      { id: 'keep', text: '"이것만" 하며 계속 본다', result: '어느새 밤 12시 반이다.', impact: [{ who: '서우', text: '잠이 두 시간 밀린다', tone: -1 }], why: '자동 재생은 멈출 때를 놓치게 해요. 미리 끄는 설정이 도움이 돼요.', end: '자동 재생에 두 시간이 지나갔어요.',
        next: { text: '눈은 피곤한데 잠이 오지 않는다.', choices: [
          { id: 'more', text: '잠이 안 오니 영상을 더 본다', result: '화면 빛 때문에 더 늦게 잠든다.', impact: [{ who: '서우', text: '더 늦게 잠든다', tone: -1 }], end: '더 늦게 잠들었어요.',
            next: { text: '다음 날 밤에도 잠들기가 어렵다.', choices: [
              { id: 'setting', text: '자동 재생을 끄고 잠들기 30분 전 화면 끄기를 정한다', result: '며칠 뒤 잠드는 시각이 조금씩 앞당겨진다.', impact: [{ who: '서우', text: '리듬을 되찾기 시작한다', tone: 1 }] },
              { id: 'pill', text: '친구가 준 잠 오는 약을 먹어 본다', result: '무슨 약인지도 모르고 먹어 걱정이 생긴다.', impact: [{ who: '서우', text: '몸이 위험할 수 있다', tone: -1 }], why: '남의 약은 먹지 않아요. 잠이 계속 어려우면 보건 선생님·보호자와 의논해요.' }] } },
          { id: 'off', text: '화면을 끄고 불을 끈 채 천천히 숨을 쉰다', result: '조금 뒤 잠이 든다.', impact: [{ who: '서우', text: '잠든다', tone: 1 }], why: '늦었더라도 화면을 끄면 잠드는 데 도움이 돼요.' }] } },
      { id: 'stop', text: '한 편이 끝나자 앱을 닫고 휴대폰을 충전기에 꽂는다', result: '조금 아쉽지만 제때 눕는다.', impact: [{ who: '서우', text: '제때 잠든다', tone: 1 }], end: '한 편만 보고 멈췄어요.',
        next: { text: '누웠는데 내일 볼 다음 편이 궁금하다.', choices: [
          { id: 'note', text: '"내일 저녁에 보기"라고 메모해 두고 눈을 감는다', result: '궁금함을 내일로 미루고 잠든다.', impact: [{ who: '서우', text: '마음 놓고 잔다', tone: 1 }], end: '메모해 두고 잠들었어요.',
            next: { text: '아침 7시, 알람이 울린다.', choices: [
              { id: 'sun', text: '커튼을 열어 햇빛을 쬐고 일어난다', result: '머리가 맑게 깬다.', impact: [{ who: '서우', text: '리듬이 자리 잡는다', tone: 1 }] },
              { id: 'snooze', text: '알람을 다섯 번 미루며 누워 있는다', result: '허둥지둥 나간다.', impact: [{ who: '서우', text: '아침이 바쁘다', tone: -1 }], why: '일어나는 시각을 지키면 밤에 잠드는 시각도 자리 잡아요.' }] } },
          { id: 'peek', text: '"예고편만" 하고 다시 휴대폰을 집는다', result: '또 한 편이 이어진다.', impact: [{ who: '서우', text: '다시 늦어진다', tone: -1 }], why: '누운 뒤에는 휴대폰을 다시 집지 않아요.' }] } },
      { id: 'tired', text: '피곤하니 휴대폰을 든 채 그대로 잠든다', result: '화면이 켜진 채 밤새 자다 깨다 한다.', impact: [{ who: '서우', text: '잠이 얕아진다', tone: -1 }], why: '화면이 켜진 채 자면 깊이 자기 어려워요.', ending: '화면을 켠 채 잠들어 자꾸 깼어요.' }] };
    const R2 = [{ id: 'r1', text: '자동 재생을 끄면 멈출 때를 지킬 수 있다' }, { id: 'r2', text: '일어나는 시각을 지키면 잠드는 시각도 자리 잡는다' },
      { id: 'r3', text: '잠은 의지로 줄여도 괜찮다', why: '잠이 줄면 다음 날 집중과 기분이 함께 흔들려요.' }, { id: 'r4', text: '잠이 안 오면 아무 약이나 먹어도 된다', why: '남의 약은 먹지 않고, 잠 문제는 어른과 의논해요.' }];
    const D3 = { text: '시험 전날 밤 11시, 지안은 아직 외울 것이 남았다. 친구는 "밤새면 다 외워져"라고 한다.', ask: '지안은 어떻게 할까?', motif: 'moon', choices: [
      { id: 'allnight', text: '에너지 음료를 마시고 밤을 새운다', result: '새벽에 눈이 감기고 외운 것이 뒤섞인다.', impact: [{ who: '지안', text: '시험 때 멍하다', tone: -1 }], why: '잠을 줄이면 외운 것을 떠올리기 어려울 수 있어요.', end: '밤을 새워 시험 때 멍했어요.',
        next: { text: '시험이 끝난 오후, 지안은 몹시 졸리다.', choices: [
          { id: 'nap', text: '저녁 7시부터 몰아서 잔다', result: '밤 11시에 깨서 다시 잠들지 못한다.', impact: [{ who: '지안', text: '리듬이 더 흐트러진다', tone: -1 }], end: '몰아 자서 밤에 잠이 안 왔어요.',
            next: { text: '다음 날도 시험이 있다.', choices: [
              { id: 'usual', text: '평소 잠드는 시각에 맞춰 눕고 핵심만 다시 본다', result: '조금 덜 외웠어도 머리가 맑다.', impact: [{ who: '지안', text: '리듬을 되찾는다', tone: 1 }] },
              { id: 'again2', text: '또 밤을 새운다', result: '피곤이 더 쌓인다.', impact: [{ who: '지안', text: '몸과 기분이 지친다', tone: -1 }], why: '밤샘이 되풀이되면 몸과 기분이 함께 지쳐요.' }] } },
          { id: 'short', text: '20분만 짧게 쉬고 평소 시각에 잔다', result: '저녁에 덜 피곤하고 밤에 잠든다.', impact: [{ who: '지안', text: '리듬을 지킨다', tone: 1 }], why: '낮잠은 짧게 하면 밤잠을 덜 흐트러뜨려요.' }] } },
      { id: 'plan', text: '중요한 것 세 가지만 정리하고 평소 시각에 잔다', result: '아침에 정리한 것을 다시 훑어본다.', impact: [{ who: '지안', text: '맑은 머리로 시험을 본다', tone: 1 }], end: '핵심만 정리하고 잤어요.',
        next: { text: '누웠는데 시험 걱정에 잠이 안 온다.', choices: [
          { id: 'breath', text: '천천히 숨을 쉬며 걱정을 종이에 적어 두고 눕는다', result: '마음이 조금 가라앉아 잠든다.', impact: [{ who: '지안', text: '잠든다', tone: 1 }], end: '걱정을 적어 두고 잠들었어요.',
            next: { text: '아침에 일어나니 30분 일찍 깼다.', choices: [
              { id: 'review', text: '아침밥을 먹고 정리한 세 가지를 다시 본다', result: '든든하게 시험장에 간다.', impact: [{ who: '지안', text: '준비된 마음이다', tone: 1 }] },
              { id: 'phoneA', text: '남은 30분 동안 누워서 휴대폰을 본다', result: '시간이 금방 가고 정리한 것을 못 본다.', impact: [{ who: '지안', text: '시간을 놓친다', tone: -1 }], why: '아침 시간은 하루를 여는 일에 써요.' }] } },
          { id: 'study2', text: '불을 켜고 다시 책을 편다', result: '자정을 훌쩍 넘긴다.', impact: [{ who: '지안', text: '잠이 줄어든다', tone: -1 }], why: '걱정은 적어 두고, 잠으로 머리를 쉬게 해요.' }] } },
      { id: 'cry', text: '"망했다" 하고 아무것도 못 한 채 휴대폰만 본다', result: '걱정만 커지고 잠도 늦어진다.', impact: [{ who: '지안', text: '불안이 커진다', tone: -1 }], why: '할 수 있는 것을 작게 정하고 잠을 지키면 불안이 줄어요.', ending: '걱정만 하다 잠도 늦었어요.' }] };
    const R3 = [{ id: 'r1', text: '잠은 외운 것을 정리하는 시간이다' }, { id: 'r2', text: '평소 시각에 자면 다음 날 머리가 맑다' },
      { id: 'r3', text: '밤을 새우면 다 외워진다', why: '밤샘은 떠올리기와 집중을 어렵게 할 수 있어요.' }, { id: 'r4', text: '에너지 음료면 잠이 필요 없다', why: '카페인은 졸음을 잠시 가릴 뿐 잠을 대신하지 못해요.' }];

    ALL.push(
      // ---- 도입 ----
      M('intro.clock-shift', {
        title: '잠드는 시각이 밀리는 시계', method: '잠드는 시각이 밀리는 시계', tool: 'clock', minutes: 6,
        levels: { easy: '가상 인물이 지금 잠드는 시각 하나를 시계로 나타낸다.', base: '초등 때와 지금 잠드는 시각 두 개를 시계로 나타내고 차이를 센다.', challenge: '두 시각을 나타낸 뒤, 밀린 잠이 다음 날 아침에 주는 영향을 짝에게 말한다.' },
        intro: {
          teacher: '"가상 인물 다솜은 초등학생 때 밤 9시 30분에 잤는데, 중학생이 된 지금은 11시 30분이 넘어야 잠이 온대요. 다솜이 게을러진 걸까요?" 시연 단추로 시계 바늘이 9시 30분에서 11시 30분으로 옮겨 가는 모습을 보인다. 사춘기에는 몸의 리듬이 바뀌어 잠드는 시각이 늦어지기 쉽다는 점을 짚고, 그렇다면 무엇을 지켜야 할지 오늘 함께 찾아본다고 밝힌다. 학생 자신이 몇 시에 자는지는 묻거나 발표시키지 않는다.',
          student: '가상 인물 다솜의 초등 때와 지금 잠드는 시각을 시계로 나타내 보고, 왜 밀렸을지 짝과 짐작해 봐요.',
          demo: { tool: 'clock', options: { title: '다솜이 잠드는 시각', minuteStep: 30 }, sequence: [{ h: 9, m: 30 }, { h: 11, m: 30 }] },
          art: { draw: 'a paper-cut bedroom at night with a big paper wall clock whose hands slide later, a teenager lying awake under a crescent moon', banner: '잠드는 시각이 밀린다면?', extra: [{ motif: 'moon', x: 300, y: 96 }] },
        },
        notes: '시각은 가상 인물의 예시 값이다. "사춘기에 잠드는 시각이 늦어지기 쉽다"는 일반 지식으로, 사람 확인 목록에 있다. ' + SAFE_NOTE,
      }),
      M('intro.night-story', {
        title: '늦어지는 밤 이야기 차례', method: '늦어지는 밤 이야기', tool: 'story', minutes: 6,
        levels: { easy: '장면 3장(숙제·휴대폰·늦잠)을 차례로 놓는다.', base: '장면 4장(숙제·휴대폰·늦잠·지각)을 차례로 놓고 원인과 결과를 말한다.', challenge: '장면 4장을 놓은 뒤, 고리를 끊을 장면 하나를 골라 무엇을 바꿀지 말한다.' },
        intro: {
          teacher: '"숙제를 마친 밤 10시, 그다음 장면이 이어지면 왜 아침 지각까지 갈까요?" 가상 인물 서우의 밤 장면 카드를 시연 단추로 차례대로 놓아 보인다. "지각은 알람 때문"이라는 말에는 "알람이 울렸을 때 서우는 몇 시간 잤을까요?"라고 되묻는다. 결과(지각)만 보지 않고 앞 장면의 원인을 따라가 보자고 말한다.',
          student: '가상 인물 서우의 밤 장면을 차례로 놓아 보고, 어느 장면이 다음 장면의 원인이 되었는지 짝과 말해요.',
          demo: { tool: 'story', options: { mode: 'order', slots: 4, title: '서우의 밤과 아침', cards: [
            { id: 'n1', text: '밤 10시에 숙제를 마친다', motif: 'star' }, { id: 'n2', text: '영상이 저절로 이어져 새벽까지 본다', motif: 'moon' },
            { id: 'n3', text: '알람을 끄고 다시 잠든다', motif: 'cloud' }, { id: 'n4', text: '1교시에 늦게 들어간다', motif: 'house' }], shuffle: false },
          sequence: [{ order: ['n1', 'n2', 'n3', 'n4'] }] },
          art: { draw: 'a paper-cut strip of four night-to-morning panels: homework under a lamp, a glowing phone in bed, a snoozed alarm, a teenager running into class late', banner: '지각은 언제 시작됐을까?', extra: [{ motif: 'moon', x: 300, y: 96 }] },
        },
        notes: SAFE_NOTE,
      }),

      // ---- 활동 ----
      M('activity.hygiene-sort', {
        title: '수면 위생 습관 가르기', method: '수면 위생 습관 가르기', tool: 'sortboard', minutes: 15,
        levels: { easy: '습관 카드 4장을 돕는 습관·방해 습관 바구니에 나누고, 틀리면 까닭을 말하며 되돌아온다.', base: '습관 카드 6장씩을 나누고, 수면에 관한 문장을 사실·오해로 가른다.', challenge: '카드 6장씩을 나눈 뒤, 방해 습관 카드마다 까닭을 활동지에 한 줄씩 쓴다.' },
        activity: {
          title: '수면 위생 습관 가르기', tool: 'sortboard',
          teacher: '"\'잠들기 30분 전 화면 끄기\'와 \'주말 낮 12시까지 자기\'는 각각 잠을 도울까요, 방해할까요?" 카드를 넣을 때마다 그 습관이 잠드는 시각과 일어나는 시각 가운데 무엇을 흔드는지 말하게 한다. "주말에 몰아 자면 피곤이 풀린다"는 학생에게 "일요일 밤에는 몇 시에 잠이 올까요?"라고 되묻는다. 습관 이름표만이 아니라 까닭을 함께 말하는 것이 목표다.',
          task: '수면 습관 카드를 잠을 돕는 습관과 방해하는 습관 바구니에 나누고, 수면에 관한 문장을 사실·오해로 갈라요.',
          levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            IT(SBX('하루 습관 카드를 두 바구니에 나누세요.', HELP2, HAB),
              SBX('하루 습관 카드 4장을 두 바구니에 나누세요.', HELP2, pickCards(HAB, ['g1', 'g2', 'b1', 'b3']))),
            IT(SBX('잠자리 습관 카드를 두 바구니에 나누세요.', HELP2, ROOM),
              SBX('잠자리 습관 카드 4장을 두 바구니에 나누세요.', HELP2, pickCards(ROOM, ['m1', 'm2', 'm3', 'm4']))),
            IT(SBX('수면에 관한 문장을 사실에 가까운 것과 오해로 나누세요.', MYTH, MY),
              SBX('수면에 관한 문장 4장을 사실과 오해로 나누세요.', MYTH, pickCards(MY, ['y1', 'y2', 'y3', 'y4'])),
              null, { conclude: '같은 시각에 일어나기, 잠들기 전 화면 끄기, 어둡고 조용한 방 — 습관을 바꾸면 잠드는 시각이 늦어지는 사춘기에도 잠을 지킬 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '잠을 방해하는 습관 하나를 골라, 왜 방해하는지와 바꿀 방법을 한 문장으로 써요.' }],
          easy: [{ type: 'choice', prompt: '잠을 돕는 습관은?', options: ['주말에도 비슷한 시각에 일어나기', '침대에서 영상 보기'], answer: '주말에도 비슷한 시각에 일어나기' }] },
        notes: SAFE_NOTE + ' 학생 자신의 잠 습관을 고르게 하지 않고, 습관 카드를 일반 습관으로만 나눈다.',
      }),
      M('activity.phone-dilemma', {
        title: '밤 메시지 갈림길', method: '밤 메시지 갈림길', tool: 'dilemma', minutes: 15,
        levels: { easy: '갈림길 1번에서 고르고 결과 장면을 본다.', base: '갈림길 2번을 끝까지 가고 알맞은 근거 카드를 고른다.', challenge: '갈림길 3번까지 끝까지 가고, 친구 관계까지 따진 근거 카드를 함께 고른다.' },
        activity: {
          title: '밤 메시지 갈림길', tool: 'dilemma',
          teacher: '"알림을 끄면 친구 사이가 멀어질까요?" 학생마다 한 길을 끝까지 가 본 뒤 되돌아가 다른 길과 견주게 한다. "단체방에서 빠지면 따돌림당한다"는 학생에게 "\'먼저 잘게\'라고 남긴 친구를 우리는 어떻게 볼까요?"라고 되묻는다. 끝 장면마다 다음 날 아침의 몸과 친구 관계를 함께 말하게 한다.',
          task: '밤 알림·자동 재생·시험 전날 밤 상황에서 가상 인물의 선택을 따라가고, 끝에서 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '밤 11시 단체방 알림이 이어져요. 한 번 골라 결과를 보세요.', base: '밤 11시 단체방 알림이 이어져요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '밤 11시 단체방 알림이 이어져요. 세 번 골라 끝까지 가고, 친구 관계까지 따진 근거도 고르세요.' },
              '밤 11시 단체방', D1, [['notice', 'skim', 'explain'], ['read', 'late', 'mute']], R1, ['r1', 'r2'], { e: 1, b: 2, c: 3 }, R1M),
            DIL({ easy: '영상이 저절로 이어져요. 한 번 골라 결과를 보세요.', base: '영상이 저절로 이어져요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '영상이 저절로 이어져요. 세 번 골라 끝까지 가고, 친구 관계까지 따진 근거도 고르세요.' },
              '이어지는 영상', D2, [['stop', 'note', 'sun'], ['keep', 'more', 'setting']], R2, ['r1', 'r2'], { e: 1, b: 2, c: 3 }, { reasons: [{ id: 'r5', text: '친구와 \'밤엔 답 안 해도 괜찮다\'는 약속을 정할 수 있다' }], ok: ['r5'] }),
            DIL({ easy: '시험 전날 밤이에요. 한 번 골라 결과를 보세요.', base: '시험 전날 밤이에요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '시험 전날 밤이에요. 세 번 골라 끝까지 가고, 친구 관계까지 따진 근거도 고르세요.' },
              '시험 전날 밤', D3, [['plan', 'breath', 'review'], ['allnight', 'nap', 'usual']], R3, ['r1', 'r2'], { e: 1, b: 2, c: 3 }, { reasons: [{ id: 'r5', text: '"밤새면 다 외워져"라는 친구 말도 확인해 볼 수 있다' }], ok: ['r5'] },
              { conclude: '밤의 선택이 다음 날 아침을 정해요. 알림 끄기·화면 멈추기·평소 시각에 자기를 친구에게도 알리고 함께 지켜요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '밤 11시 단체방 알림이 계속될 때 잠도 관계도 지키는 행동은?', options: ['새벽까지 다 읽고 답한다', '"먼저 잘게"라고 남기고 알림을 끈다', '휴대폰을 베개 옆에 두고 무음으로 한다'], answer: '"먼저 잘게"라고 남기고 알림을 끈다' }] },
        notes: SAFE_NOTE + ' 에너지 음료·남의 약 장면은 약물 예방(saf-drug) 주제와 이어지지만 여기서는 잠 리듬 결과까지만 다룬다.',
      }),
      M('activity.week-chart', {
        title: '가상 수면 기록 그래프 읽기', method: '예시 수면 기록 그래프 읽기', tool: 'chart', minutes: 15,
        levels: { easy: '막대마다 값이 보이고, 가장 오래 잔 요일을 고른다.', base: '값을 숨긴 막대에서 가장 오래 잔 요일을 고르고 두 요일의 차이를 읽어 쓴다.', challenge: '마지막 문항에서 리듬을 되찾으려면 먼저 고칠 요일 하나를 근거와 함께 고른다.' },
        activity: {
          title: '가상 수면 기록 그래프 읽기', tool: 'chart',
          teacher: '"가상 학생 다솜의 한 주 기록이에요(실제 기록 아님). 토요일 막대가 가장 높은데, 이건 좋은 신호일까요?" 막대를 하나씩 읽으며 평일에 모자란 잠을 주말에 몰아 자는 모양을 찾게 한다. "많이 잘수록 좋다"는 학생에게 "토요일에 10시간 자면 일요일 밤엔 몇 시에 잠이 올까요?"라고 되묻는다. 권장 수면 시간 숫자는 이 수업에서 단정하지 않는다.',
          task: '가상 학생 다솜의 한 주 잠잔 시간 막대그래프를 읽고, 주말에 몰아 자는 모양을 찾아요.',
          levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            IT(RD('다솜이 가장 오래 잔 요일을 고르세요.', Object.assign({}, BAR, { question: '가장 오래 잔 요일은?', choices: WEEK.map((d) => d[0]) }), { pick: 5 })),
            IT(RD('토요일과 목요일의 잠잔 시간은 몇 시간 차이인지 읽어 쓰세요.', Object.assign({}, BAR, { question: '몇 시간 차이일까요?' }), { value: 5 })),
            IT(RD('그래프에서 \'주말에 몰아 자기\'가 보이는 곳을 고르세요.', Object.assign({}, BAR, { question: '몰아 자기가 보이는 곳은?', choices: ['월·화', '목·금', '토·일'] }), { pick: 2 }),
              null,
              { prompt: '리듬을 되찾으려면 먼저 고칠 요일을 고르세요.', toolOptions: { question: '먼저 고칠 요일은?', choices: ['목·금 — 평일 잠이 가장 짧다', '토 — 가장 많이 잤으니 더 늘린다', '월 — 이미 충분하다'] }, target: { pick: 0 } },
              { conclude: '평일에 모자란 잠을 주말에 몰아 자면 리듬이 흔들려요. 평일 잠을 조금씩 늘리고 일어나는 시각을 고르게 지켜요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '가상 기록에서 가장 짧게 잔 날과 가장 길게 잔 날을 써요.', columns: ['무엇', '요일·시간'], cells: [['가장 짧게 잔 날', ''], ['가장 길게 잔 날', '']], answer: '목·금 5시간, 토 10시간' }] },
        notes: DATA_NOTE + ' 계획의 \'잠든 시각·일어난 시각\' 막대는 막대그래프 하나에 두 값을 쌓을 수 없어 \'잠잔 시간\' 막대로 바꿨다.',
      }),
      M('activity.routine-order', {
        title: '잠들기 전 루틴 차례', method: '잠들기 전 루틴 차례', tool: 'kitchen', minutes: 15,
        levels: { easy: '루틴 카드 3장을 차례로 놓고, 놓으면 바로 맞는지 알려 준다.', base: '루틴 카드 5장을 차례로 놓는다(함정 카드가 섞인다).', challenge: '카드 5장을 놓은 뒤, 마지막 문항에서 카드마다 가상 시각 이름표를 짝지어 붙인다.' },
        activity: {
          title: '잠들기 전 루틴 차례', tool: 'kitchen',
          teacher: '"화면 끄기를 불 끄기 바로 직전에 하면 어떨까요?" 카드를 놓은 뒤 순서를 바꾸면 무엇이 달라지는지 한 사람씩 말하게 한다. "가방은 아침에 챙기면 된다"는 학생에게 "아침에 허둥대면 일어나는 시각을 지키기 쉬울까요?"라고 되묻는다. 시각 이름표는 가상 인물의 예시이며, 학생 자신의 잠드는 시각은 묻지 않는다.',
          task: '잠들기 전 루틴 카드를 알맞은 차례로 놓고, 함정 카드는 남겨요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            IT(OB('잠들기 전 루틴 카드를 차례로 놓으세요.', ROUTINE, { groups: false }, [{ id: 'x1', text: '침대에서 게임 한 판 더' }]),
              OB('잠들기 전 루틴 카드 3장을 차례로 놓으세요.', pickCards(ROUTINE, ['r2', 'r3', 'r5']), { groups: false })),
            IT(CL('잠자리를 정돈할 때 할 일만 표시하세요.', '잠자리 정돈', [
              { id: 'k1', text: '휴대폰을 손이 닿지 않는 곳에 둔다', ok: true }, { id: 'k2', text: '방을 어둡게 한다', ok: true },
              { id: 'k3', text: '내일 아침 알람을 한 번만 맞춘다', ok: true }, { id: 'k4', text: '베개 옆에 휴대폰을 둔다' }, { id: 'k5', text: '밝은 조명을 켜 둔다' }]),
              CL('잠자리를 정돈할 때 할 일 두 가지만 표시하세요.', '잠자리 정돈', [
                { id: 'k1', text: '휴대폰을 손이 닿지 않는 곳에 둔다', ok: true }, { id: 'k2', text: '방을 어둡게 한다', ok: true }, { id: 'k4', text: '베개 옆에 휴대폰을 둔다' }])),
            IT(PB('루틴을 망가뜨리기 쉬운 것만 골라 담으세요.', '루틴을 망가뜨리는 것', [
              { id: 'p1', text: '자동 재생 켜 두기', ok: true }, { id: 'p2', text: '늦은 밤 카페인 음료', ok: true }, { id: 'p3', text: '가벼운 책 읽기' }, { id: 'p4', text: '씻고 잠옷 갈아입기' }], { groups: false }),
              null,
              MB('가상 인물 다솜의 루틴 카드에 시각 이름표를 짝지어 붙이세요.', [['밤 10시', '가방 챙기기'], ['밤 10시 15분', '씻기'], ['밤 10시 30분', '화면 끄고 충전기에 두기'], ['밤 11시', '불 끄고 눕기']], ['새벽 1시 게임'], { groups: false }),
              { conclude: '씻기·화면 끄기·가벼운 읽기·불 끄기를 날마다 같은 차례로 하면 몸이 잠들 준비를 알아차려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '가상 인물을 위한 잠들기 전 루틴을 차례대로 써요.', columns: ['차례', '할 일'], cells: [['1', ''], ['2', ''], ['3', ''], ['4', '']], answer: '(예) 가방 챙기기, 씻기, 화면 끄기, 불 끄고 눕기' }] },
      }),

      // ---- 정리 ----
      M('wrap.sleep-plan', {
        title: '이번 주 수면 실천 점검', method: '이번 주 수면 실천 점검', tool: 'timer', minutes: 9,
        levels: { easy: '실천 습관 2개를 점검 목록에 넣고 표시한다.', base: '실천 습관 3개를 점검 목록에 넣고 표시한다.', challenge: '습관 3개에 방해 요인 대책 하나를 더해 표시한다.' },
        wrap: {
          teacher: '"오늘 고른 습관 가운데 이번 주에 정말 해 볼 것은 무엇일까요? 많이보다 꾸준히가 중요해요." 점검 항목을 소리 내어 읽고 해 보기로 한 것을 표시하게 한다(맞고 틀림이 없다). 표시한 습관마다 방해할 것이 무엇인지 짝에게 말하게 한다. 학생의 실제 수면 시간이나 지난 밤 잠은 묻지 않는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'timer', options: { title: '이번 주 수면 실천' }, prompt: '이번 주에 해 볼 수면 습관을 점검 목록에 표시해요.', target: { selfCheck: ['잠들기 30분 전 화면 끄기를 해 보겠다', '주말에도 비슷한 시각에 일어나 보겠다', '휴대폰을 손이 닿지 않는 곳에 두겠다'] }, difficulty: 0.1 },
              { prompt: '이번 주에 해 볼 수면 습관 두 가지를 표시해요.', target: { selfCheck: ['잠들기 30분 전 화면 끄기를 해 보겠다', '휴대폰을 손이 닿지 않는 곳에 두겠다'] } },
              { prompt: '수면 습관 세 가지와 방해 요인 대책을 표시해요.', target: { selfCheck: ['잠들기 30분 전 화면 끄기를 해 보겠다', '주말에도 비슷한 시각에 일어나 보겠다', '휴대폰을 손이 닿지 않는 곳에 두겠다', '단체방 알림이 오면 "먼저 잘게"라고 남기겠다'] } }),
            { type: 'choice', prompt: '"주말에 몰아 자면 다 회복된다"는 말에 대한 반박으로 알맞은 것은?', options: ['주말 몰아 자기는 일요일 밤 잠을 늦춰 리듬을 흔들 수 있다', '주말에는 잠을 안 자도 된다', '잠은 평일에만 중요하다'], answer: 0, difficulty: 0.2, explain: '일어나는 시각을 고르게 지켜야 리듬이 자리 잡아요.' },
          ],
        },
        worksheet: {
          title: '이번 주 수면 실천',
          items: [
            { type: 'check', prompt: '이번 주 해 볼 습관에 표시해요.', options: ['잠들기 전 화면 끄기', '주말에도 비슷한 시각에 일어나기', '휴대폰 멀리 두기'] },
            { type: 'short', prompt: '내 계획을 방해할 것 하나와 대책을 써요.' },
          ],
        },
        notes: SAFE_NOTE,
      }),
      M('wrap.sleep-write', {
        title: '나의 수면 계획 글', method: '나의 수면 계획 글', tool: 'rubric-writing', minutes: 9,
        levels: { easy: '문장 틀("나는 ___ 하겠다. 왜냐하면 ___")을 채워 두 문장으로 쓴다.', base: '세 문장으로 쓰고 기준 3개(습관·까닭·실천 방법)를 스스로 점검한다.', challenge: '세 문장에 가족에게 부탁할 협조 한 줄을 더해 쓰고 기준 4개를 점검한다.' },
        wrap: {
          teacher: '"\'일찍 자야지\'와 \'밤 10시 30분에 휴대폰을 거실 충전기에 둔다. 자동 재생을 꺼서 멈출 때를 지키기 위해서다\' 가운데 어느 계획이 지켜질까요?" 두 문장을 견주어 읽은 뒤 습관·까닭·실천 방법이 들어간 계획을 쓰게 한다. 실제 잠드는 시각을 적기 싫은 학생은 "잠들기 30분 전"처럼 쓰게 하고, 글은 발표시키지 않는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'rubric-writing', options: { topic: '이번 주 나의 수면 계획을 세 문장으로 쓰세요(습관·까닭·실천 방법).', minChars: 50, maxChars: 240, minSentences: 3, maxSentences: 4, title: '나의 수면 계획', placeholder: '예: 나는 잠들기 30분 전에…' },
              prompt: '수면 계획을 세 문장으로 쓰고 기준표에 표시해요.', target: { selfCheck: ['바꿀 습관을 썼다', '그 습관을 고른 까닭을 썼다', '언제·어떻게 할지 썼다'] }, difficulty: 0.3 },
              { prompt: '문장 틀을 채워 두 문장으로 쓰고 기준표에 표시해요.', toolOptions: { minChars: 30, minSentences: 2, maxSentences: 3, starter: '나는 ___ 하겠다. 왜냐하면 ___ 때문이다.' }, target: { selfCheck: ['바꿀 습관을 썼다', '그 습관을 고른 까닭을 썼다'] } },
              { prompt: '세 문장에 가족에게 부탁할 협조 한 줄을 더해 쓰고 기준표에 표시해요.', toolOptions: { maxSentences: 5 }, target: { selfCheck: ['바꿀 습관을 썼다', '그 습관을 고른 까닭을 썼다', '언제·어떻게 할지 썼다', '가족에게 부탁할 협조를 썼다'] } }),
            { type: 'choice', prompt: '지켜지기 쉬운 수면 계획 문장은?', options: ['잠을 잘 자야지.', '밤 10시 30분에 휴대폰을 거실 충전기에 둔다.', '절대 휴대폰을 안 본다.'], answer: 1, difficulty: 0.2, explain: '언제·무엇을 할지 구체적이어야 지키기 쉬워요.' },
            { type: 'mood', prompt: '오늘 수업을 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '나의 수면 계획',
          items: [
            { type: 'short', prompt: '이번 주 수면 계획을 세 문장으로 써요(습관·까닭·실천 방법).' },
            { type: 'check', prompt: '내 계획을 기준표로 점검해요.', options: ['습관을 썼다', '까닭을 썼다', '실천 방법을 썼다'] },
          ],
          easy: { note: '"나는 ___ 하겠다. 왜냐하면 ___" 틀을 써도 돼요.', items: [{ type: 'blank', prompt: '틀을 채워 써요.', text: '나는 ___ 하겠다. 왜냐하면 ___ 때문이다.', answer: '(예) 잠들기 30분 전 화면을 끄겠다, 화면 빛이 잠을 늦추기' }] },
        },
        notes: SAFE_NOTE,
      }),
    );
  }
  // ==== 7~9학년 · 좌식 생활 줄이기와 체형 인식 (health.m.active-life) ====
  {
    const M = MK('active-life', G);
    const SLOT5 = [{ id: 's1', label: '쉬는 시간' }, { id: 's2', label: '점심시간' }, { id: 's3', label: '이동할 때' }, { id: 's4', label: '방과 후' }, { id: 's5', label: '저녁 공부 사이' }];
    const MOVE = [
      { id: 'k1', text: '복도 끝까지 걸어 물 마시기' }, { id: 'k2', text: '친구와 운동장 한 바퀴 걷기' }, { id: 'k3', text: '엘리베이터 대신 계단 이용' },
      { id: 'k4', text: '동아리·학원까지 한 정거장 걷기' }, { id: 'k5', text: '50분마다 일어나 목·어깨 펴기' },
    ];
    const STRETCH = ['목 천천히 기울이기', '어깨 크게 돌리기', '팔 위로 뻗어 옆구리 늘이기', '앉아서 허리 비틀기'];
    // 친구의 굶는 다이어트 갈림길(가상 인물 채아·나) — 깊이 2
    const D1 = { text: '친구 채아가 급식판을 그대로 두며 "나 살 빼려고 점심 안 먹을 거야. 운동은 귀찮고"라고 한다.', ask: '나는 채아에게 어떻게 할까?', motif: 'house', choices: [
      { id: 'cheer', text: '"오, 대단하다! 나도 같이 굶을까?"라고 한다', result: '둘 다 점심을 거르고 5교시 체육 시간에 어지러워한다.', impact: [{ who: '채아', text: '기운이 빠진다', tone: -1 }, { who: '나', text: '함께 어지럽다', tone: -1 }], why: '끼니를 거르는 다이어트는 몸에 무리를 줄 수 있어요. 응원보다 걱정을 말해요.', end: '같이 굶어서 둘 다 어지러웠어요.',
        next: { text: '체육 시간 뒤 채아가 "머리가 핑 돌아"라고 한다.', choices: [
          { id: 'nurse', text: '채아와 함께 보건실에 간다', result: '보건 선생님이 채아를 쉬게 하고 이야기를 들어 준다.', impact: [{ who: '채아', text: '도움을 받는다', tone: 1 }] },
          { id: 'snack', text: '"매점에서 단 거 하나 먹으면 돼"라며 넘긴다', result: '어지러움은 잠깐 나아지지만 굶기는 계속된다.', impact: [{ who: '채아', text: '굶기를 이어 간다', tone: -1 }], why: '어지러움이 생기면 보건실에 알리고, 굶는 까닭을 함께 살펴요.' }] } },
      { id: 'care', text: '"굶으면 오후에 힘들 거야. 먹고 같이 걷자"고 말한다', result: '채아가 머뭇거리다 반쯤 먹는다.', impact: [{ who: '채아', text: '기운을 지킨다', tone: 1 }], end: '걱정을 말하고 같이 걷자고 했어요.',
        next: { text: '채아가 "SNS에서 다들 마른 몸이 예쁘대"라며 속상해한다.', choices: [
          { id: 'listen', text: '"건강한 몸은 숫자가 아니야. 힘들면 보건 선생님께 같이 가 보자"고 한다', result: '채아가 "생각해 볼게"라며 조금 웃는다.', impact: [{ who: '채아', text: '마음을 털어놓는다', tone: 1 }] },
          { id: 'judge', text: '"넌 원래 통통하잖아"라고 농담한다', result: '채아가 말없이 고개를 숙인다.', impact: [{ who: '채아', text: '상처받는다', tone: -1 }], why: '몸을 평가하는 말은 농담이라도 상처가 돼요. 몸이 아니라 마음을 물어봐요.' }] } },
      { id: 'ignore', text: '"네 맘이지" 하고 내 밥만 먹는다', result: '채아는 며칠째 점심을 거른다.', impact: [{ who: '채아', text: '혼자 굶는다', tone: -1 }], why: '친구의 몸을 평가하지 않으면서도 걱정은 말할 수 있어요.', ending: '모른 척해서 채아가 혼자 굶었어요.' }] };
    const R1 = [{ id: 'r1', text: '끼니를 거르는 다이어트는 몸에 무리를 줄 수 있다' }, { id: 'r2', text: '몸을 평가하지 않고 걱정과 함께할 일을 말한다' },
      { id: 'r3', text: '마른 몸이 곧 건강한 몸이다', why: '건강은 몸의 모양이 아니라 잘 먹고 움직이고 쉬는 생활에서 와요.' }, { id: 'r4', text: '친구의 다이어트는 응원해 주는 게 우정이다', why: '몸을 해치는 방법이라면 응원보다 걱정을 말해요.' }];
    const R1M = { reasons: [{ id: 'r5', text: '걱정이 계속되면 보건 선생님·믿을 만한 어른에게 잇는다' }], ok: ['r5'] };
    const D2 = { text: '운동장 끝에서 같은 반 하준이 "나는 몸이 이래서 운동하면 놀림받을 거야"라며 체육 시간 뒤 늘 벤치에만 앉아 있다.', ask: '나는 하준에게 어떻게 할까?', motif: 'house', choices: [
      { id: 'invite', text: '"점심에 그냥 같이 걷자. 빨리 안 걸어도 돼"라고 한다', result: '하준이 조금 망설이다 따라 나선다.', impact: [{ who: '하준', text: '움직일 기회가 생긴다', tone: 1 }], end: '부담 없이 같이 걷자고 했어요.',
        next: { text: '걷는 중에 다른 친구가 하준의 몸을 두고 웃으며 한마디 한다.', choices: [
          { id: 'stop', text: '"몸 얘기는 하지 말자"고 차분히 말한다', result: '친구가 머쓱해하며 그만둔다.', impact: [{ who: '하준', text: '마음 놓고 걷는다', tone: 1 }] },
          { id: 'laughA', text: '분위기를 맞추려 같이 웃는다', result: '하준이 다시 벤치로 돌아간다.', impact: [{ who: '하준', text: '움직이기 싫어진다', tone: -1 }], why: '몸을 놀리는 말에 웃으면 친구가 움직일 자리를 잃어요.' }] } },
      { id: 'advice', text: '"살 빼려면 너는 더 많이 뛰어야 해"라고 조언한다', result: '하준이 얼굴이 굳는다.', impact: [{ who: '하준', text: '부담과 부끄러움이 커진다', tone: -1 }], why: '움직임은 살 빼기 숙제가 아니라 몸을 즐겁게 쓰는 일이에요. 몸을 평가하지 않아요.', end: '몸을 평가하는 조언을 했어요.',
        next: { text: '하준이 "역시 그렇지?"라며 더 움츠러든다.', choices: [
          { id: 'sorryA', text: '"미안, 그런 뜻 아니었어. 그냥 같이 걷고 싶었어"라고 다시 말한다', result: '하준이 조금 마음을 연다.', impact: [{ who: '하준', text: '마음을 연다', tone: 1 }] },
          { id: 'more2', text: '"다 너 잘되라고 하는 말이야"라며 더 말한다', result: '하준이 자리를 뜬다.', impact: [{ who: '하준', text: '상처받는다', tone: -1 }], why: '좋은 뜻이어도 몸 평가는 상처가 될 수 있어요. 사과하고 다시 말해요.' }] } },
      { id: 'leave', text: '하준의 일이니 모른 척한다', result: '하준은 날마다 벤치에 앉아 있다.', impact: [{ who: '하준', text: '혼자 움직이지 않는다', tone: -1 }], why: '함께 움직일 자리를 만들어 주는 것도 친구가 할 수 있는 일이에요.', ending: '모른 척해서 하준이 혼자 남았어요.' }] };
    const R2 = [{ id: 'r1', text: '움직임은 누구나 자기 몸에 맞게 즐길 수 있다' }, { id: 'r2', text: '몸을 놀리는 말을 멈추면 친구가 움직일 자리가 생긴다' },
      { id: 'r3', text: '운동은 살 빼려는 사람만 하는 것이다', why: '움직임은 심장·뼈·기분을 돕는 일이라 누구에게나 좋아요.' }, { id: 'r4', text: '좋은 뜻이면 몸에 대해 무슨 말이든 해도 된다', why: '좋은 뜻이어도 몸 평가는 상처가 돼요.' }];
    const D3 = { text: '동영상 앱에 "일주일 만에 마른 몸 만들기 — 하루 한 끼 챌린지"가 유행이다. 단톡방에서 친구들이 같이 하자고 한다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'join', text: '재밌을 것 같아 같이 해 본다', result: '이틀째부터 수업 시간에 집중이 안 된다.', impact: [{ who: '나', text: '기운과 집중이 떨어진다', tone: -1 }], why: '끼니를 줄이는 챌린지는 성장기 몸에 무리를 줄 수 있어요.', end: '챌린지를 따라 해 기운이 빠졌어요.',
        next: { text: '친구 한 명이 "나 너무 어지러워"라고 단톡방에 쓴다.', choices: [
          { id: 'quit', text: '"우리 그만하자. 보건 선생님께 말하자"고 쓴다', result: '몇 명이 "나도 힘들었어"라며 그만둔다.', impact: [{ who: '친구들', text: '무리를 멈춘다', tone: 1 }] },
          { id: 'push', text: '"사흘만 더 버티자"고 쓴다', result: '어지러운 친구가 더 늘어난다.', impact: [{ who: '친구들', text: '몸이 더 힘들다', tone: -1 }], why: '어지러움은 몸이 보내는 신호예요. 멈추고 어른에게 알려요.' }] } },
      { id: 'counter', text: '"끼니 거르기 말고 매일 같이 걷기 챌린지는 어때?"라고 바꿔 제안한다', result: '몇 명이 "그게 낫겠다"며 걷기 인증을 올린다.', impact: [{ who: '친구들', text: '즐겁게 움직인다', tone: 1 }], end: '걷기 챌린지로 바꿔 제안했어요.',
        next: { text: '한 친구가 "그래도 마른 몸이 제일 멋있잖아"라고 한다.', choices: [
          { id: 'media', text: '"영상 속 몸은 보정되고 골라 찍은 거래. 건강은 숫자가 아니야"라고 답한다', result: '친구들이 영상 속 몸이 꾸며졌다는 것을 이야기한다.', impact: [{ who: '친구들', text: '매체를 따져 본다', tone: 1 }] },
          { id: 'agreeM', text: '"맞아, 그러니까 걷는 걸로 빼자"고 답한다', result: '걷기가 다시 살 빼기 숙제가 된다.', impact: [{ who: '친구들', text: '몸에 대한 압박이 남는다', tone: -1 }], why: '움직임의 목표를 몸 모양이 아니라 건강과 즐거움에 두어요.' }] } },
      { id: 'silent', text: '아무 말 없이 단톡방을 나간다', result: '친구들은 챌린지를 계속한다.', impact: [{ who: '친구들', text: '무리한 챌린지를 계속한다', tone: -1 }], why: '나는 빠지더라도 걱정을 한마디 남기면 친구들도 멈춰 생각할 수 있어요.', ending: '말없이 나가서 챌린지가 계속됐어요.' }] };
    const R3 = [{ id: 'r1', text: '매체 속 몸은 보정되고 골라 찍은 것일 수 있다' }, { id: 'r2', text: '움직임의 목표는 몸 모양이 아니라 건강과 즐거움이다' },
      { id: 'r3', text: '많은 사람이 하는 챌린지는 안전하다', why: '유행한다고 몸에 안전하지는 않아요.' }, { id: 'r4', text: '어지러움은 참으면 지나간다', why: '어지러움은 멈추라는 몸의 신호예요.' }];

    ALL.push(
      // ---- 도입 ----
      M('intro.day-clock', {
        title: '하루 중 앉아 있는 시간 표시', method: '하루 중 앉아 있는 시간 표시', tool: 'clock', minutes: 6,
        levels: { easy: '가상 학생의 앉아 있는 구간 2개(수업·저녁 공부)의 시작·끝 시각을 시계로 본다.', base: '앉아 있는 구간 4개의 시각을 시계로 나타내고 모두 몇 시간인지 어림한다.', challenge: '구간 4개를 나타낸 뒤, 그 사이 끊을 틈(쉬는 시간·이동 시간)을 찾아 말한다.' },
        intro: {
          teacher: '"가상 학생 로운은 오전 9시부터 앉아 수업을 듣고, 학원에서도 앉아 있고, 밤 10시에도 앉아서 휴대폰을 봐요. 로운이 하루에 앉아 있는 시간은 얼마나 될까요?" 시연 단추로 앉아 있는 구간의 시작과 끝 시각이 시계에 차례로 나타나는 모습을 보인다. "체육 시간에 뛰니까 괜찮다"는 말에는 "체육은 일주일에 몇 시간이고, 앉아 있는 시간은 하루 몇 시간일까요?"라고 되묻는다. 학생 자신의 하루는 묻지 않고 가상 학생의 하루로만 셈한다.',
          student: '가상 학생 로운의 하루에서 앉아 있는 구간의 시작과 끝 시각을 시계로 보고, 하루에 몇 시간쯤 앉아 있는지 어림해요.',
          demo: { tool: 'clock', options: { title: '로운이 앉아 있는 구간', minuteStep: 30 }, sequence: [{ h: 9, m: 0 }, { h: 12, m: 30 }, { h: 1, m: 30 }, { h: 4, m: 0 }] },
          art: { draw: 'a paper-cut day ribbon with a teenager sitting at a school desk, a bus seat, a study desk and a sofa with a phone, a paper clock above each scene', banner: '하루에 얼마나 앉아 있을까?', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
        notes: '시각은 가상 학생 로운의 예시 일과다. 하루 앉아 있는 시간의 권장 기준 수치는 쓰지 않는다. ' + SAFE_NOTE,
      }),
      M('intro.media-feel', {
        title: '광고 속 몸 사진을 본 느낌', method: '광고 속 몸 사진을 본 느낌', tool: 'emotion', minutes: 6,
        levels: { easy: '가상 광고 장면 2개에 가상 인물이 느낄 법한 마음을 하나씩 잇는다.', base: '장면 3개에 마음을 잇고 그 마음이 생긴 까닭을 말한다.', challenge: '장면 3개에 마음을 이은 뒤, 광고가 그 마음을 노린 까닭(파는 것)을 짐작해 말한다.' },
        intro: {
          teacher: '"보정된 광고 몸 사진을 오래 본 가상 인물 하윤은 어떤 마음이 들까요? 정답은 없고, 사람들이 흔히 느끼는 마음을 짐작해 보는 거예요." 시연 단추로 장면마다 마음 카드가 이어지는 모습을 보인다. 학생 자신이 그런 사진을 보고 어떤 마음이었는지는 묻지 않는다. "부러우면 지는 거다"라는 말에는 "그 마음이 들게 만든 것은 사진 속 사람일까요, 사진을 만든 광고일까요?"라고 되묻는다.',
          student: '가상 광고 장면을 본 가상 인물 하윤이 느낄 법한 마음을 이어 보고, 광고가 왜 그런 마음을 노렸을지 짝과 짐작해요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'a1', label: '보정된 몸 사진 옆 "너도 이렇게"' }, { id: 'a2', label: '"한 달에 10kg" 광고 문구' }, { id: 'a3', label: '광고 아래 구매 단추' }],
            cards: [{ id: 'f1', text: '부러움' }, { id: 'f2', text: '걱정' }, { id: 'f3', text: '조급함' }] },
          sequence: [{ match: { a1: 'f1', a2: 'f2', a3: 'f3' } }] },
          art: { draw: 'a paper-cut phone screen showing a glossy edited body advertisement with a buy button, small paper weather symbols floating beside a thoughtful teenager', banner: '이 광고는 어떤 마음을 노릴까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '광고 문구와 장면은 가상이다. 실제 몸 사진·모델을 보여 주지 않고, 학생 자신의 느낌이나 몸에 대해 묻지 않는다. 체형·외모를 평가하는 말은 쓰지 않는다.',
      }),

      // ---- 활동 ----
      M('activity.move-plan', {
        title: '앉은 시간 끊는 하루 계획', method: '좌식 시간 끊는 하루 계획', tool: 'kitchen', minutes: 15,
        levels: { easy: '시간 칸 3개에 움직임 카드를 짝지어 넣고, 놓으면 바로 맞는지 알려 준다.', base: '시간 칸 5개에 움직임 카드를 짝지어 넣는다(함정 카드가 섞인다).', challenge: '칸 5개를 채운 뒤, 마지막 문항에서 비 오는 날에도 할 수 있는 대안 움직임만 골라 담는다.' },
        activity: {
          title: '앉은 시간 끊는 하루 계획', tool: 'kitchen',
          teacher: '"오랫동안 앉아 있는 시간을 꼭 운동 시간으로 바꿔야 할까요, 잠깐씩 끊기만 해도 될까요?" 가상 학생 로운의 하루 칸에 움직임 카드를 넣을 때마다 그 시간에 실제로 할 수 있는지 따져 보게 한다. "운동은 체육 시간에만 하면 된다"는 학생에게 "체육이 없는 날 로운의 하루는 어떨까요?"라고 되묻는다. 움직임은 살 빼기가 아니라 몸을 쓰는 즐거움과 건강을 위한 것이라는 점을 짚는다.',
          task: '가상 학생 로운의 하루 시간 칸에 앉은 시간을 끊는 움직임 카드를 짝지어 넣어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            IT(MB('하루 시간 칸마다 할 수 있는 움직임 카드를 넣으세요.', SLOT5.map((s, i) => [s.label, MOVE[i].text]), ['하루 종일 침대에 누워 있기'], { groups: false }),
              MB('하루 시간 칸 3개에 움직임 카드를 넣으세요.', [['쉬는 시간', '복도 끝까지 걸어 물 마시기'], ['이동할 때', '엘리베이터 대신 계단 이용'], ['저녁 공부 사이', '50분마다 일어나 목·어깨 펴기']], [], { groups: false })),
            IT(SB('움직임 카드를 학교에서 할 것과 집에서 할 것으로 나누세요.', ['학교에서', '집에서'], [
              { id: 'm1', text: '쉬는 시간 계단 오르내리기', to: '학교에서' }, { id: 'm2', text: '점심 뒤 운동장 걷기', to: '학교에서' },
              { id: 'm3', text: '저녁 설거지 돕기', to: '집에서' }, { id: 'm4', text: '숙제 사이 제자리 스트레칭', to: '집에서' }], { groups: false }),
              SB('움직임 카드 2장을 학교와 집으로 나누세요.', ['학교에서', '집에서'], [
                { id: 'm2', text: '점심 뒤 운동장 걷기', to: '학교에서' }, { id: 'm3', text: '저녁 설거지 돕기', to: '집에서' }], { groups: false })),
            IT(CL('움직임 계획을 세울 때 알맞은 생각만 표시하세요.', '움직임 계획 점검', [
              { id: 'c1', text: '짧게라도 자주 일어나는 것이 도움이 된다', ok: true }, { id: 'c2', text: '내 몸에 맞는 세기로 한다', ok: true },
              { id: 'c3', text: '살을 빼야만 운동할 가치가 있다' }, { id: 'c4', text: '친구와 함께하면 오래 할 수 있다', ok: true }, { id: 'c5', text: '아파도 참고 계속한다' }]),
              null,
              PB('비 오는 날에도 할 수 있는 움직임만 골라 담으세요.', '비 오는 날 대안', [
                { id: 'p1', text: '복도·계단 오르내리기', ok: true }, { id: 'p2', text: '교실 뒤 스트레칭', ok: true }, { id: 'p3', text: '실내 체육관 걷기', ok: true }, { id: 'p4', text: '운동장 축구' }, { id: 'p5', text: '공원 자전거' }], { groups: false }),
              { conclude: '긴 운동만이 아니라 하루 곳곳에서 자주 일어나 움직이는 것도 앉은 시간을 끊어요. 내 몸에 맞게, 즐겁게, 함께 해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '가상 학생 로운의 하루에 넣을 움직임을 써요.', columns: ['시간', '움직임'], cells: [['쉬는 시간', ''], ['방과 후', ''], ['비 오는 날', '']], answer: '(예) 복도 걷기, 한 정거장 걷기, 계단·스트레칭' }] },
      }),
      M('activity.stretch-timer', {
        title: '쉬는 시간 스트레칭 실습', method: '쉬는 시간 스트레칭 실습', tool: 'timer', minutes: 15,
        levels: { easy: '스트레칭 동작 카드 3장을 차례로 놓고 교사를 따라 한다.', base: '동작 카드 4장을 차례로 놓고, 구간 타이머로 늘이기·쉬기를 맞춰 짝과 실습한 뒤 점검한다.', challenge: '실습 뒤 짝에게 동작 하나를 가르쳐 주고, 점검 항목이 하나 더 붙는다.' },
        activity: {
          title: '쉬는 시간 스트레칭 실습', tool: 'timer',
          teacher: '"50분 동안 앉아 있던 목과 어깨는 어떤 상태일까요?" 동작 카드를 위에서 아래로(목 → 어깨 → 옆구리 → 허리) 놓게 한 뒤 구간 타이머를 켜고 짝과 함께 천천히 해 본다. "세게 늘일수록 좋다"는 학생에게 "아플 만큼 늘이면 근육은 풀릴까요, 놀랄까요?"라고 되묻는다. 아프거나 불편한 학생은 하지 않아도 되고, 동작은 자기 몸에 맞는 만큼만 한다고 처음에 말한다. 늘이기·쉬기 시간은 우리 반 연습 약속이다.',
          task: '쉬는 시간 스트레칭 동작 카드를 차례로 놓고, 구간 타이머에 맞춰 짝과 실습한 뒤 스스로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '위에서 아래로 몸을 푸는 스트레칭 동작 카드를 차례로 놓으세요.', toolOptions: { title: '쉬는 시간 스트레칭', cards: [STRETCH[2], STRETCH[0], STRETCH[3], STRETCH[1]] }, target: { order: STRETCH } },
              { prompt: '스트레칭 동작 3장을 위에서 아래로 차례로 놓으세요.', toolOptions: { cards: [STRETCH[1], STRETCH[3], STRETCH[0]] }, target: { order: [STRETCH[0], STRETCH[1], STRETCH[3]] } }),
            IT({ prompt: '우리 반 약속대로 늘이기 15초·쉬기 5초를 4번 하도록 타이머를 맞추세요.', toolOptions: { title: '늘이기·쉬기', labels: ['늘이기', '쉬기'], plan: { work: 10, rest: 10, rounds: 1 } }, target: { plan: { work: 15, rest: 5, rounds: 4 } } },
              { prompt: '교사를 따라 늘이기 15초를 3번 하도록 타이머를 맞추세요.', toolOptions: { title: '늘이기·쉬기', labels: ['늘이기', '쉬기'], plan: { work: 10, rest: 10, rounds: 1 } }, target: { plan: { work: 15, rounds: 3 } } }),
            IT({ prompt: '짝과 스트레칭을 해 본 뒤 스스로 점검하세요.', toolOptions: { title: '스트레칭 점검' }, target: { selfCheck: ['동작을 천천히 했다', '아프지 않을 만큼만 늘였다', '숨을 참지 않았다'] } },
              { prompt: '교사를 따라 해 본 뒤 스스로 점검하세요.', target: { selfCheck: ['동작을 천천히 했다', '아프지 않을 만큼만 늘였다'] } },
              { prompt: '짝에게 동작 하나를 가르쳐 준 뒤 스스로 점검하세요.', target: { selfCheck: ['동작을 천천히 했다', '아프지 않을 만큼만 늘였다', '숨을 참지 않았다', '짝에게 동작 하나를 가르쳐 주었다'] } },
              { conclude: '쉬는 시간 몇 분의 스트레칭이 오래 앉아 굳은 목·어깨·허리를 풀어 줘요. 아프지 않을 만큼, 천천히 해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '쉬는 시간에 해 볼 스트레칭 동작 하나와 조심할 점을 한 문장으로 써요.' }] },
        notes: '늘이기 15초·쉬기 5초는 우리 반 연습 약속 값이다(근거 수치 아님). 몸이 불편한 학생은 앉아서 하거나 지켜보기를 고를 수 있게 한다. 생활안전 준비운동 타이머와 겹치지 않게 \'쉬는 시간 좌식 풀기\'로 꾸몄다.',
      }),
      M('activity.diet-dilemma', {
        title: '친구의 굶는 다이어트 갈림길', method: '친구의 굶는 다이어트 갈림길', tool: 'dilemma', minutes: 15,
        levels: { easy: '갈림길 1번에서 말과 행동을 고르고 결과 장면을 본다.', base: '갈림길 2번을 끝까지 가고 알맞은 근거 카드를 고른다.', challenge: '갈림길 2번을 끝까지 가고, 도움으로 잇는 근거 카드까지 함께 고른다.' },
        activity: {
          title: '친구의 굶는 다이어트 갈림길', tool: 'dilemma',
          teacher: '"친구가 굶겠다고 할 때 \'대단하다\'와 \'걱정된다\' 가운데 무엇이 친구를 돕는 말일까요?" 학생마다 한 길을 끝까지 가 본 뒤 되돌아가 다른 길과 견주게 한다. "마른 몸이 건강한 몸"이라는 학생에게 "점심을 거르고 5교시에 어지러운 몸은 건강한 몸일까요?"라고 되묻는다. 어떤 길에서도 친구의 몸을 평가하는 말은 고르지 않게 하고, 걱정이 계속되면 보건 선생님께 잇는다는 점을 짚는다.',
          task: '굶는 다이어트·몸 평가·무리한 챌린지 상황에서 가상 인물의 말과 행동을 골라 결과를 따라가고, 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '친구가 점심을 굶겠대요. 한 번 골라 결과를 보세요.', base: '친구가 점심을 굶겠대요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '친구가 점심을 굶겠대요. 두 번 골라 끝까지 가고, 도움으로 잇는 근거도 고르세요.' },
              '급식을 거르는 친구', D1, [['care', 'listen'], ['cheer', 'nurse']], R1, ['r1', 'r2'], { e: 1, b: 2, c: 2 }, R1M),
            DIL({ easy: '친구가 놀림받을까 봐 움직이지 않아요. 한 번 골라 결과를 보세요.', base: '친구가 놀림받을까 봐 움직이지 않아요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '친구가 놀림받을까 봐 움직이지 않아요. 두 번 골라 끝까지 가고, 도움으로 잇는 근거도 고르세요.' },
              '벤치에 앉은 친구', D2, [['invite', 'stop'], ['advice', 'sorryA']], R2, ['r1', 'r2'], { e: 1, b: 2, c: 2 }, { reasons: [{ id: 'r5', text: '놀림이 계속되면 담임 선생님께 알린다' }], ok: ['r5'] }),
            DIL({ easy: '단톡방에서 한 끼 챌린지를 하재요. 한 번 골라 결과를 보세요.', base: '단톡방에서 한 끼 챌린지를 하재요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '단톡방에서 한 끼 챌린지를 하재요. 두 번 골라 끝까지 가고, 도움으로 잇는 근거도 고르세요.' },
              '한 끼 챌린지', D3, [['counter', 'media'], ['join', 'quit']], R3, ['r1', 'r2'], { e: 1, b: 2, c: 2 }, R1M,
              { conclude: '건강한 몸은 숫자가 아니라 잘 먹고, 즐겁게 움직이고, 쉬는 생활에서 와요. 친구의 몸은 평가하지 않고, 걱정은 말하고, 어른에게 이어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '점심을 굶겠다는 친구에게 가장 알맞은 말은?', options: ['"대단하다, 나도 굶을래."', '"굶으면 오후에 힘들 거야. 먹고 같이 걷자."', '"넌 좀 빼야 하긴 해."'], answer: '"굶으면 오후에 힘들 거야. 먹고 같이 걷자."' }] },
        notes: SAFE_NOTE + ' 식생활(food) 주제의 \'저녁 굶기 권유\' 갈림길과 겹치지 않게 급식 거르기·움직임 자리·SNS 챌린지 장면으로 꾸몄다. 몸 평가 말은 함정 선택지로만 나오고 늘 바로잡는다.',
      }),
      M('activity.body-parts', {
        title: '움직이면 좋아지는 몸 기관', method: '움직이면 좋아지는 몸 기관', tool: 'body', minutes: 15,
        levels: { easy: '고른 기관 이름이 바로 보이고, 심장·폐 두 곳을 찾는다.', base: '이름 없이 심장·폐를 찾고 근육·뼈 겹까지 벗겨 본다.', challenge: '네 곳을 찾은 뒤, 문항마다 오래 앉아 있을 때 그 기관에 생길 수 있는 영향 보기를 고른다.' },
        activity: {
          title: '움직이면 좋아지는 몸 기관', tool: 'body',
          teacher: '"계단을 오르면 가슴이 두근거리고 숨이 차요. 몸속 어느 기관이 일하고 있는 걸까요?" 종이 몸에서 기관을 찾거나 겹을 벗길 때마다 그 동작을 손으로 짚어 보게 한다. "운동은 근육만 키운다"는 학생에게 "숨이 차는 것은 근육 때문일까요?"라고 되묻는다. 몸의 모양이 아니라 몸속 기관이 하는 일에 집중하게 한다.',
          task: '종이 몸에서 신체 활동이 돕는 기관(심장·폐)을 찾고, 근육·뼈 겹도 벗겨 보며 움직임이 하는 일을 살펴요.',
          levels: { easy: { names: true }, base: {}, challenge: {} },
          items: [
            IT({ prompt: '걷거나 뛸 때 피를 더 힘차게 보내는 기관을 찾으세요.', toolOptions: { mode: 'find', organs: ['뇌', '폐', '심장', '간', '위'] }, target: { sel: '심장' } },
              null,
              { prompt: '피를 힘차게 보내는 기관을 찾고, 오래 앉아만 있을 때의 영향을 고르세요.', toolOptions: { ask: { q: '오래 앉아만 있으면 이 기관은?', choices: ['힘차게 일할 기회가 줄어든다', '저절로 튼튼해진다', '아무 상관없다'] } }, target: { sel: '심장', pick: 0 } }),
            IT({ prompt: '숨이 찰 때 공기를 더 많이 들이마시는 기관을 찾으세요.', toolOptions: { mode: 'find', organs: ['뇌', '폐', '심장', '간', '위'] }, target: { sel: '폐' } },
              null,
              { prompt: '공기를 들이마시는 기관을 찾고, 움직일 때의 변화를 고르세요.', toolOptions: { ask: { q: '움직일 때 이 기관은?', choices: ['숨을 더 깊고 빠르게 쉰다', '일을 멈춘다', '작아진다'] } }, target: { sel: '폐', pick: 0 } }),
            IT({ prompt: '몸을 움직이게 하는 근육 겹이 맨 위에 보이도록 겹을 벗기세요.', toolOptions: { mode: 'layers' }, target: { layer: '근육' } },
              null,
              { prompt: '근육 겹이 보이게 벗기고, 오래 앉아 있을 때 근육의 변화를 고르세요.', toolOptions: { ask: { q: '오래 앉아 있으면 목·허리 근육은?', choices: ['뻐근하게 굳기 쉽다', '저절로 늘어난다', '아무 일도 없다'] } }, target: { layer: '근육', pick: 0 } }),
            IT({ prompt: '몸을 받치는 뼈 겹이 맨 위에 보이도록 겹을 벗기세요.', toolOptions: { mode: 'layers' }, target: { layer: '뼈' } },
              null,
              { prompt: '뼈 겹이 보이게 벗기고, 뼈에 도움이 되는 활동을 고르세요.', toolOptions: { ask: { q: '자라는 뼈에 도움이 되는 것은?', choices: ['걷기·뛰기처럼 몸무게를 싣는 움직임', '하루 종일 누워 있기', '끼니 거르기'] } }, target: { layer: '뼈', pick: 0 },
              },
              { conclude: '움직이면 심장은 피를 힘차게 보내고, 폐는 숨을 깊게 쉬고, 근육과 뼈는 튼튼해져요. 몸의 모양보다 몸속 기관이 하는 일을 봐요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '움직일 때 기관마다 하는 일을 써요.', columns: ['기관', '움직일 때 하는 일'], cells: [['심장', ''], ['폐', ''], ['근육·뼈', '']], answer: '피를 힘차게 보낸다, 숨을 깊게 쉰다, 튼튼해진다' }] },
        notes: 'body 교구의 기관 찾기에는 뼈·근육이 없어, 근육·뼈는 겹 벗기기(layers) 문항으로 바꿨다. 신체 활동이 기관에 주는 영향은 일반 지식으로 사람 확인 목록에 있다.',
      }),

      // ---- 정리 ----
      M('wrap.image-write', {
        title: '몸에 대한 나의 기준 쓰기', method: '몸에 대한 나의 기준 쓰기', tool: 'rubric-writing', minutes: 9,
        levels: { easy: '"건강한 몸은 숫자가 아니라 ___이다. 왜냐하면 ___" 틀을 채워 두 문장으로 쓴다.', base: '"건강한 몸은 숫자가 아니라…"로 시작하는 세 문장을 쓰고 기준 3개(매체 비판·건강 기준·실천)를 점검한다.', challenge: '세 문장에 과장 광고 문구 하나를 정직하게 고쳐 쓴 문장을 더하고 기준 4개를 점검한다.' },
        wrap: {
          teacher: '"\'건강한 몸은 숫자가 아니라…\' 다음에 오늘 배운 무엇을 넣을 수 있을까요?" 매체 속 몸 기준을 따져 본 점, 움직임·식사·쉼의 기준, 내가 할 실천이 들어가게 쓰게 한다. 몸무게·키 같은 숫자나 자기 몸에 대한 평가는 쓰지 않게 하고, 친구의 몸도 예로 들지 않게 한다. 글은 발표시키지 않고 원하는 학생만 짝과 나눈다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'rubric-writing', options: { topic: '"건강한 몸은 숫자가 아니라…"로 시작하는 글을 세 문장으로 쓰세요(몸무게·키 숫자는 쓰지 않아요).', minChars: 50, maxChars: 240, minSentences: 3, maxSentences: 4, title: '몸에 대한 나의 기준', starter: '건강한 몸은 숫자가 아니라' },
              prompt: '"건강한 몸은 숫자가 아니라…"로 세 문장을 쓰고 기준표에 표시해요.', target: { selfCheck: ['매체 속 몸 기준을 따져 보았다', '건강을 생활(먹기·움직이기·쉬기)로 설명했다', '내가 할 실천을 썼다'] }, difficulty: 0.3 },
              { prompt: '문장 틀을 채워 두 문장으로 쓰고 기준표에 표시해요.', toolOptions: { minChars: 30, minSentences: 2, maxSentences: 3, starter: '건강한 몸은 숫자가 아니라 ___이다. 왜냐하면 ___ 때문이다.' }, target: { selfCheck: ['건강을 생활(먹기·움직이기·쉬기)로 설명했다', '몸무게·키 숫자를 쓰지 않았다'] } },
              { prompt: '세 문장에 과장 광고 문구를 정직하게 고쳐 쓴 문장을 더하고 기준표에 표시해요.', toolOptions: { maxSentences: 5 }, target: { selfCheck: ['매체 속 몸 기준을 따져 보았다', '건강을 생활(먹기·움직이기·쉬기)로 설명했다', '내가 할 실천을 썼다', '과장 광고 문구를 정직하게 고쳐 썼다'] } }),
            { type: 'choice', prompt: '"마른 몸이 건강한 몸이다"라는 말에 대한 반박으로 가장 알맞은 것은?', options: ['건강은 몸 모양보다 잘 먹고 움직이고 쉬는 생활에서 온다', '건강은 키로 정해진다', '사진 속 몸이 기준이다'], answer: 0, difficulty: 0.2, explain: '몸 모양은 사람마다 다르고, 매체 속 몸은 꾸며진 경우가 많아요.' },
          ],
        },
        worksheet: {
          title: '몸에 대한 나의 기준',
          items: [
            { type: 'short', prompt: '"건강한 몸은 숫자가 아니라…"로 시작하는 세 문장을 써요(몸무게·키 숫자는 쓰지 않아요).' },
            { type: 'check', prompt: '내 글을 기준표로 점검해요.', options: ['매체 속 기준을 따져 보았다', '건강을 생활로 설명했다', '내 실천을 썼다'] },
          ],
          easy: { note: '"건강한 몸은 숫자가 아니라 ___이다" 틀을 써도 돼요.', items: [{ type: 'blank', prompt: '틀을 채워 써요.', text: '건강한 몸은 숫자가 아니라 ___이다. 왜냐하면 ___ 때문이다.', answer: '(예) 잘 먹고 움직이고 쉬는 생활, 몸 모양은 사람마다 다르기' }] },
        },
        notes: SAFE_NOTE + ' 학생이 자기 몸을 평가하거나 몸무게를 쓰지 않게 하고, 걱정되는 글이 있으면 수업 뒤 보건 선생님과 의논한다.',
      }),
      M('wrap.active-web', {
        title: '움직임 습관 생각 그물', method: '움직임 습관 생각 그물', tool: 'mindmap', minutes: 9,
        levels: { easy: '가지 2개(학교·집)에 움직임 카드를 잇는다.', base: '가지 3개(학교·집·주말)에 움직임 카드를 두 장씩 잇는다.', challenge: '가지 3개에 이으면서 함정 카드를 걸러 내고, 함께할 사람을 활동지에 덧붙인다.' },
        wrap: {
          teacher: '"오늘 찾은 움직임을 학교·집·주말 가운데 어디에 달 수 있을까요?" 학생이 그물을 다 이으면 가지마다 누구와 함께하면 오래 할 수 있을지 말하게 한다. "주말엔 쉬어야 한다"는 말에는 쉬는 것과 하루 종일 앉아 있는 것은 다르다고 짚는다. 함정 카드(굶기·몸 평가)는 왜 움직임 습관이 아닌지 한 사람씩 말하게 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '움직이는 하루', slots: ['학교', '집', '주말'], cards: [
              { id: 'a1', text: '쉬는 시간 복도 걷기' }, { id: 'a2', text: '계단 이용하기' }, { id: 'b1', text: '숙제 사이 스트레칭' }, { id: 'b2', text: '저녁 설거지 돕기' },
              { id: 'c1', text: '가족과 공원 산책' }, { id: 'c2', text: '친구와 자전거 타기' }] },
              prompt: '세 가지에 움직임 카드를 두 장씩 이어요.', target: { sort: { 학교: ['a1', 'a2'], 집: ['b1', 'b2'], 주말: ['c1', 'c2'] } }, difficulty: 0.2 },
              { prompt: '두 가지에 움직임 카드를 두 장씩 이어요.', toolOptions: { slots: ['학교', '집'], cards: [{ id: 'a1', text: '쉬는 시간 복도 걷기' }, { id: 'a2', text: '계단 이용하기' }, { id: 'b1', text: '숙제 사이 스트레칭' }, { id: 'b2', text: '저녁 설거지 돕기' }] }, target: { sort: { 학교: ['a1', 'a2'], 집: ['b1', 'b2'] } } },
              { prompt: '세 가지에 이으면서 함정 카드는 남겨 두어요.', toolOptions: { cards: [
                { id: 'a1', text: '쉬는 시간 복도 걷기' }, { id: 'a2', text: '계단 이용하기' }, { id: 'b1', text: '숙제 사이 스트레칭' }, { id: 'b2', text: '저녁 설거지 돕기' },
                { id: 'c1', text: '가족과 공원 산책' }, { id: 'c2', text: '친구와 자전거 타기' }, { id: 't1', text: '점심 굶고 운동하기' }, { id: 't2', text: '친구 몸 평가하며 뛰기' }] } }),
            { type: 'short', prompt: '이번 주 해 볼 움직임 하나와 함께할 사람(가족·친구 등)을 써요.' },
          ],
        },
        worksheet: {
          title: '움직이는 하루',
          items: [
            { type: 'table', prompt: '학교·집·주말에 해 볼 움직임을 하나씩 써요.', columns: ['언제', '움직임'], cells: [['학교', ''], ['집', ''], ['주말', '']], answer: '(예) 복도 걷기, 스트레칭, 공원 산책' },
            { type: 'short', prompt: '함께하면 오래 할 수 있을 사람과 그 까닭을 써요.' },
          ],
        },
      }),
    );
  }
  // ==== 7~9학년 · 스트레스·기분과 도움 요청 (health.m.mental-help) ====
  {
    const M = MK('mental-help', G);
    // 가상 학생 '서진'의 하루 — 기분 크기는 학생 자신의 기분이 아니라 가상 인물의 것을 고른다
    const LINK = [
      { id: 's1', text: '새벽까지 영상 보다 늦게 잠', to: '잠' }, { id: 's2', text: '같은 시각에 자고 일어남', to: '잠' },
      { id: 'e1', text: '점심에 친구와 운동장 한 바퀴 걷기', to: '운동' }, { id: 'e2', text: '주말 내내 누워서만 지냄', to: '운동' },
      { id: 'r1', text: '고민을 들어 준 친구와 이야기', to: '관계' }, { id: 'r2', text: '다툰 뒤 말없이 피하기만 함', to: '관계' },
      { id: 't1', text: '기분은 그날 운에 달렸을 뿐이다' },
    ];
    const MIND3 = ['잠', '운동', '관계'];
    // 친구가 비밀을 털어놓는 갈림길(깊이 3) — 방법·도구는 묘사하지 않는다
    const D1 = { text: '쉬는 시간, 친구 유나가 "요즘 너무 힘들어. 다 그만두고 싶어. 아무한테도 말하지 마"라고 털어놓는다.', ask: '나는 어떻게 할까?', motif: 'cloud', choices: [
      { id: 'joke', text: '"에이, 다들 힘들어"라며 웃어넘긴다', result: '유나가 "그냥 됐어"라며 입을 닫는다.', impact: [{ who: '유나', text: '혼자라는 마음이 커진다', tone: -1 }], why: '힘든 마음을 가볍게 넘기면 다시 말하기 어려워져요.', ending: '유나는 더 말하지 않았어요.' },
      { id: 'listen', text: '하던 일을 멈추고 "말해 줘서 고마워"라며 끝까지 듣는다', result: '유나가 조금씩 이야기를 꺼낸다.', impact: [{ who: '유나', text: '들어 주는 사람이 있다고 느낀다', tone: 1 }], end: '끝까지 들어 주었어요. 이제 혼자 안고 있지 않는 길이 남았어요.',
        next: { text: '이야기를 마친 유나가 "진짜 비밀이야, 약속해"라고 다시 말한다.', ask: '비밀을 어떻게 할까?', choices: [
          { id: 'keep', text: '약속했으니 아무에게도 말하지 않는다', result: '유나의 힘든 마음을 나 혼자 안고 지낸다.', impact: [{ who: '나', text: '걱정이 쌓인다', tone: -1 }, { who: '유나', text: '도움이 닿지 않는다', tone: -1 }], why: '안전이 걸린 비밀은 지키는 것보다 믿을 만한 어른에게 잇는 것이 친구를 지키는 길이에요.', ending: '도움이 닿지 않았어요.' },
          { id: 'together', text: '"너를 지키려면 어른 도움이 필요해. 같이 가자"고 말한다', result: '유나가 망설이다 고개를 끄덕인다.', impact: [{ who: '유나', text: '함께 갈 사람이 생긴다', tone: 1 }], end: '함께 가자고 했어요. 누구에게 갈지가 남았어요.',
            next: { text: '둘이 함께 갈 곳을 정해야 한다. 유나는 "아무나 말고"라고 한다.', ask: '어디로 갈까?', choices: [
              { id: 'counsel', text: '상담실(Wee 클래스) 선생님께 함께 간다', result: '선생님이 차분히 듣고 다음 상담을 함께 정한다.', impact: [{ who: '유나', text: '계속 도움을 받는다', tone: 1 }], ending: '믿을 만한 어른에게 이어졌어요.' },
              { id: 'post', text: 'SNS에 익명으로 고민을 올려 의견을 모은다', result: '모르는 사람들의 말이 엇갈리고 유나가 더 불안해한다.', impact: [{ who: '유나', text: '이야기가 퍼질까 걱정한다', tone: -1 }], why: '친구 이야기는 퍼뜨리지 않고, 직접 도울 수 있는 학교 어른에게 잇는 것이 좋아요.' }] } }] } },
      { id: 'alone', text: '"내가 다 해결해 줄게"라며 혼자 해결하려 한다', result: '며칠 뒤 나도 지치고 유나는 그대로다.', impact: [{ who: '나', text: '감당하기 어렵다', tone: -1 }], why: '친구 혼자 짊어질 일이 아니에요. 어른과 함께 도와요.', ending: '혼자서는 감당하기 어려웠어요.' }] };
    const R1 = [{ id: 'r1', text: '안전이 걸린 비밀은 믿을 만한 어른에게 잇는다' }, { id: 'r2', text: '먼저 끝까지 들어 주면 친구가 말을 이어 간다' },
      { id: 'r3', text: '친구 비밀은 무슨 일이 있어도 지켜야 한다', why: '친구의 안전이 걸리면 비밀보다 안전이 먼저예요.' }, { id: 'r4', text: '힘들다고 말하는 것은 약한 것이다', why: '힘들다고 말하는 것은 도움을 찾는 용기 있는 행동이에요.' }];
    const R1M = { reasons: [{ id: 'r5', text: '친구 이야기를 여기저기 퍼뜨리지 않는다' }], ok: ['r5'] };
    const HELP = [{ id: 'h1', text: '알아차리기' }, { id: 'h2', text: '들어 주기' }, { id: 'h3', text: '믿을 만한 어른에게 함께 가기' }, { id: 'h4', text: '상담 이어 가기' }];
    // 가상의 우리 중학교 칸 지도 — 학교 안 도움 장소
    const SCH = { grid: [6, 4], title: '가상의 우리 중학교', legend: false, places: [
      { name: '상담실', icon: 'office', at: [1, 0] }, { name: '보건실', icon: 'hospital', at: [4, 0] }, { name: '담임 교실', icon: 'school', at: [2, 2] },
      { name: '운동장', icon: 'park', at: [5, 3] }, { name: '도서관', icon: 'library', at: [0, 3] }, { name: '매점', icon: 'market', at: [4, 2] },
    ] };

    ALL.push(
      // ---- 도입 ----
      M('intro.signal-body', {
        title: '스트레스가 몸에 보내는 신호', method: '몸 그림에서 스트레스 신호 자리 고르기', tool: 'body', minutes: 6,
        levels: { easy: '부위 이름이 보이는 몸 그림에서 두 곳(어깨·배)을 고른다.', base: '이름 없이 세 곳(어깨·배·가슴)을 고르고 어떤 느낌인지 말한다.', challenge: '세 곳을 고른 뒤 몸이 아닌 마음 신호(짜증·잠이 안 옴 등)를 하나 더 말한다.' },
        intro: {
          teacher: '"시험 전날 가상 학생 서진은 어깨가 뻐근하고 배가 살살 아프다고 해요. 몸이 아픈 걸까요, 마음이 보낸 신호일까요?" 종이 몸을 띄우고 시연 단추로 어깨·배·가슴이 골라지는 모습을 보인다. "스트레스는 마음에서만 생긴다"는 말에는 "마음이 긴장하면 몸 어디가 함께 굳을까요?"라고 되묻는다. 머리가 아픈 두통도 흔한 신호지만 이 몸 그림에는 머리 칸이 없어 손으로 짚어 보게 한다. 서진은 가상 인물이고, 학생 자신의 증상은 묻지 않는다.',
          student: '가상 학생 서진이 시험 전날 느낀 몸의 신호 자리를 몸 그림에서 골라 보고, 그런 신호가 왜 생기는지 짝과 짐작해 말해요.',
          demo: { tool: 'body', options: { mode: 'parts', parts: ['눈', '목', '어깨', '가슴', '배', '허리', '무릎'], names: true }, sequence: [{ parts: ['어깨', '가슴', '배'] }] },
          art: { draw: 'a paper-cut teenager at a desk the night before an exam, soft glowing marks on the shoulders, chest and stomach showing tension', banner: '몸도 마음의 신호를 보내요', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '몸 그림에 머리·손 칸이 없어 두통은 교사가 말로 다루고 학생이 자기 머리를 짚게 했다. ' + SAFE_NOTE,
      }),
      M('intro.mood-scale', {
        title: '가상 학생의 하루 기분 눈금', method: '가상 학생 하루 장면마다 기분 크기 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '장면 두 개(늦잠·친구와 웃음)의 기분 크기를 고른다.', base: '장면 네 개를 차례로 보며 기분 크기를 고르고 바뀐 곳을 말한다.', challenge: '장면 네 개의 기분을 고른 뒤 기분을 바꾼 요인(잠·운동·관계)을 짚어 말한다.' },
        intro: {
          teacher: '"가상 학생 서진의 하루를 따라가 볼게요. 늦잠 자서 아침을 못 먹은 장면에서 서진의 짜증은 얼마나 클까요?" 시연 단추로 눈금이 4로 움직이는 모습을 보이고, 이어서 점심에 친구와 웃은 장면, 체육 뒤 장면, 밤에 다툰 장면을 차례로 읽는다. "기분은 그냥 운"이라는 말에는 "서진의 기분이 바뀐 장면에서 무엇이 달라졌을까요?"라고 되묻는다. 학생 자신의 기분을 고르게 하지 않고 서진의 기분만 고른다.',
          student: '가상 학생 서진의 하루 장면마다 서진의 기분 크기를 골라 보고, 기분이 바뀐 장면에서 무엇이 달라졌는지 생각해요.',
          demo: { tool: 'emotion', options: { mode: 'scale', situation: '서진이 늦잠을 자서 아침도 못 먹고 뛰어서 등교했다.', feeling: '짜증', steps: 5, scaleLabels: { 1: '조금', 5: '아주 많이' } }, sequence: [{ level: 4 }] },
          art: { draw: 'a paper-cut strip of four small scenes from one teenager’s day — rushing to school, laughing at lunch, playing sports, an argument at night — with a weather icon above each', banner: '서진의 기분은 왜 바뀌었을까?', extra: [{ motif: 'rainbow', x: 300, y: 96 }] },
        },
        notes: SAFE_NOTE,
      }),

      // ---- 활동 ----
      M('activity.link-web', {
        title: '잠·운동·관계와 기분 잇기', method: '기분과 생활 습관 생각 그물', tool: 'mindmap', minutes: 15,
        levels: { easy: '가지 두 개(잠·운동)에 카드 4장을 나누고, 놓으면 바로 맞는지 알려 준다.', base: '가지 세 개(잠·운동·관계)에 카드 6장을 나누고 함정 카드는 남긴다.', challenge: '마지막 문항에서 \'잠이 줄면 기분이 나빠지고, 다시 잠이 줄어드는\' 되먹임 고리 카드를 차례대로 놓는다.' },
        activity: {
          title: '잠·운동·관계와 기분 잇기', tool: 'mindmap',
          teacher: '"서진의 기분을 바꾼 것은 무엇이었을까요? 잠, 몸 움직임, 사람과의 관계 가운데 어디에 넣을까요?" 카드를 가지에 넣을 때마다 그 습관이 다음 날 기분에 어떻게 이어지는지 한 사람씩 말하게 한다. "기분은 그날 운"이라는 카드가 나오면 "운이라면 우리가 바꿀 수 있는 것이 있을까요?"라고 되묻는다. 생활 습관을 바꾸면 기분을 돌보는 데 도움이 될 수 있지만, 힘든 마음이 오래가면 습관만으로 해결하려 하지 말고 어른과 상담하라는 점을 꼭 짚는다.',
          task: '가상 학생 서진의 하루 장면 카드를 잠·운동·관계 가지에 나누고, 서로 영향을 주는 고리를 찾아요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('서진의 장면 카드를 잠·운동·관계 가지에 나누세요(함정 카드는 남겨요).', MIND3, LINK, { topic: '서진의 기분' }),
              SB('서진의 장면 카드를 잠·운동 가지에 나누세요.', ['잠', '운동'], pickCards(LINK, ['s1', 's2', 'e1', 'e2']), { topic: '서진의 기분' })),
            IT(MB('습관마다 다음 날 기분에 생길 수 있는 변화를 이어 보세요.', [['늦게 잠든 다음 날', '작은 일에도 쉽게 짜증이 난다'], ['점심에 함께 걸은 날', '오후에 몸과 마음이 가벼워진다'], ['고민을 털어놓은 날', '혼자가 아니라는 마음이 든다']], ['아무 변화도 생기지 않는다'], { topic: '다음 날 기분' }),
              MB('습관 두 개의 다음 날 기분 변화를 이어 보세요.', [['늦게 잠든 다음 날', '작은 일에도 쉽게 짜증이 난다'], ['고민을 털어놓은 날', '혼자가 아니라는 마음이 든다']], [], { topic: '다음 날 기분' })),
            IT(PB('서진의 기분을 돌보는 데 도움이 될 습관만 골라 담으세요.', '기분 돌보기 습관', [
              { id: 'p1', text: '자기 전 화면 끄고 같은 시각에 눕기', ok: true }, { id: 'p2', text: '쉬는 시간에 잠깐 걷기', ok: true },
              { id: 'p3', text: '힘들 때 믿는 사람에게 말하기', ok: true }, { id: 'p4', text: '기분이 나쁘면 혼자 방에만 있기' }, { id: 'p5', text: '잠을 줄여 밤새 게임하기' }], { topic: '서진의 기분' }),
              null,
              Object.assign(OB('잠이 줄면 기분이 나빠지고, 다시 잠이 줄어드는 고리를 차례대로 놓으세요.', [{ id: 'o1', text: '늦게 잠든다' }, { id: 'o2', text: '다음 날 피곤하고 짜증 난다' }, { id: 'o3', text: '공부가 밀려 밤에 또 붙잡는다' }, { id: 'o4', text: '다시 늦게 잠든다' }], { topic: '되먹임 고리' }, [{ id: 'o5', text: '주말에 몰아 자면 끝난다' }])),
              { conclude: '잠·몸 움직임·관계는 서로 이어져 기분에 영향을 줘요. 한 고리를 바꾸면 다른 고리도 함께 나아질 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '잠·운동·관계 가운데 하나를 골라, 그것이 기분에 어떻게 이어지는지 한 문장으로 써요(가상 인물 서진의 예로).' }],
          easy: [{ type: 'choice', prompt: '기분을 돌보는 데 도움이 되는 습관은?', options: ['같은 시각에 자기', '밤새 게임하기'], answer: '같은 시각에 자기' }] },
        notes: SAFE_NOTE,
      }),
      M('activity.friend-dilemma', {
        title: '비밀을 털어놓은 친구 갈림길', method: '힘든 친구의 비밀 갈림길에서 결과 따라가기', tool: 'dilemma', minutes: 15,
        levels: { easy: '갈림길 1번에서 고르고 결과를 본다.', base: '갈림길 2번을 끝까지 가 본 뒤 근거 카드를 고른다.', challenge: '갈림길 3번(어디로 갈지)까지 가고, 친구 이야기를 지키는 근거까지 함께 고른다.' },
        activity: {
          title: '비밀을 털어놓은 친구 갈림길', tool: 'dilemma',
          teacher: '"친구가 \'아무한테도 말하지 마\'라고 했는데 어른에게 알리면 배신일까요?" 학생마다 한 길을 끝까지 가 본 뒤, 되돌아가 다른 길의 결과와 견주게 한다. "비밀은 무슨 일이 있어도 지켜야 한다"는 학생에게 "친구의 안전이 걸린 비밀을 혼자 안고 있으면 친구에게 무엇이 닿지 않을까요?"라고 되묻는다. 어른에게 알리는 것은 고자질이 아니라 친구를 지키는 행동이고, 혼자 해결하려 하지 않아도 된다는 점을 짚는다. 학생 자신이나 주변의 실제 일을 묻지 않는다.',
          task: '힘든 마음을 털어놓은 가상 친구 유나와의 갈림길에서 길을 골라 결과를 따라가고, 내 선택의 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '친구 유나가 힘든 마음을 털어놓았어요. 한 번 골라 결과를 보세요.', base: '유나가 비밀이라며 털어놓았어요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '유나가 비밀이라며 털어놓았어요. 세 번 골라 끝까지 가고, 친구 이야기를 지키는 근거도 고르세요.' },
              '털어놓은 친구', D1, [['listen', 'together', 'counsel']], R1, ['r1', 'r2'], {}, R1M),
            IT({ prompt: '유나에게 처음 건넬 말로 가장 알맞은 것을 고르세요.', toolOptions: { title: '첫마디', scene: { text: '유나가 "요즘 너무 힘들어"라고 말을 꺼냈다.', ask: '먼저 어떤 말을 할까?', motif: 'cloud', choices: [
              { id: 'thx', text: '"말해 줘서 고마워. 더 듣고 싶어"', result: '유나가 이야기를 이어 간다.', impact: [{ who: '유나', text: '마음을 놓는다', tone: 1 }] },
              { id: 'judge', text: '"그 정도로 왜 그래?"', result: '유나가 말을 멈춘다.', impact: [{ who: '유나', text: '판단받았다고 느낀다', tone: -1 }], why: '판단하는 말은 이야기를 멈추게 해요.' },
              { id: 'fix', text: '"이렇게 해, 그럼 다 돼"', result: '유나가 "그런 게 아니야"라며 고개를 젓는다.', impact: [{ who: '유나', text: '이해받지 못했다고 느낀다', tone: -1 }], why: '바로 해결책을 내밀기보다 먼저 들어 줘요.' }] }, reasons: [], compare: true }, target: { path: [['thx']] } }),
            IT({ prompt: '유나를 어른에게 잇고 난 다음 날, 내가 할 일로 알맞은 것을 고르세요.', toolOptions: { title: '그다음 날', scene: { text: '유나가 상담을 받기 시작했다. 반 친구가 "유나 무슨 일 있어?"라고 묻는다.', ask: '어떻게 답할까?', motif: 'house', choices: [
              { id: 'tell', text: '들은 이야기를 자세히 전한다', result: '이야기가 반에 퍼진다.', impact: [{ who: '유나', text: '상처를 받는다', tone: -1 }], why: '친구 이야기는 도울 어른에게만 전하고 퍼뜨리지 않아요.' },
              { id: 'guard', text: '"유나가 직접 말할 거야"라며 넘기고, 유나 곁에 있어 준다', result: '유나가 편하게 학교생활을 이어 간다.', impact: [{ who: '유나', text: '믿음이 이어진다', tone: 1 }] }] }, reasons: [], compare: true }, target: { path: [['guard']] } },
              null, null, { conclude: '힘든 친구의 이야기는 끝까지 듣고, 안전이 걸리면 믿을 만한 어른에게 함께 가며, 다른 사람에게는 퍼뜨리지 않아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '친구가 "아무한테도 말하지 마"라며 다 그만두고 싶다고 할 때 알맞은 행동은?', options: ['약속했으니 비밀을 지킨다', '끝까지 듣고 믿을 만한 어른에게 함께 간다', 'SNS에 의견을 묻는다'], answer: '끝까지 듣고 믿을 만한 어른에게 함께 간다' }] },
        notes: '"다 그만두고 싶다"는 말은 위험 신호로 다루되, 방법·수단은 어떤 장면에서도 묘사하지 않는다. 생명존중교육과 연계할 수 있다. ' + SAFE_NOTE,
      }),
      M('activity.help-order', {
        title: '도움으로 잇는 차례 놓기', method: '알아차리기부터 상담까지 도움 차례', tool: 'kitchen', minutes: 15,
        levels: { easy: '차례 카드 3장(알아차리기·들어 주기·어른에게 함께 가기)을 놓고, 놓으면 바로 맞는지 알려 준다.', base: '차례 카드 4장을 놓고, 끼워 둔 함정 카드는 빼 둔다.', challenge: '차례를 놓은 뒤 학교 안 도움 장소마다 할 수 있는 일을 짝짓는다(함정 카드가 섞인다).' },
        activity: {
          title: '도움으로 잇는 차례 놓기', tool: 'kitchen',
          teacher: '"힘든 친구를 알아차렸다면 바로 무엇부터 할까요? 해결책부터 줄까요, 들어 줄까요?" 카드를 차례대로 놓은 뒤, 한 단계를 빼면 어떻게 되는지 짝과 말하게 한다. "상담실은 문제 있는 학생만 가는 곳"이라는 학생에게 "고민을 미리 나누러 가는 사람도 상담실에 갈 수 있을까요?"라고 되묻는다. 친구를 상담실 문 앞까지 함께 데려가는 것도 큰 도움이라는 점을 짚는다.',
          task: '힘든 친구를 알아차리는 것부터 상담을 이어 가는 것까지 도움 차례 카드를 놓고, 학교 안 도움 장소에서 할 수 있는 일을 찾아요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            IT(OB('힘든 친구를 돕는 차례 카드를 놓으세요(함정 카드는 빼요).', HELP, {}, [{ id: 'h5', text: '소문이 나기 전에 단톡방에 알리기' }]),
              OB('힘든 친구를 돕는 차례 카드 3장을 놓으세요.', HELP.slice(0, 3))),
            IT(MB('학교 안 도움 장소마다 할 수 있는 일을 이어 보세요.', [['상담실(Wee 클래스)', '고민을 차분히 나누고 상담을 이어 간다'], ['보건실', '몸이 아플 때 쉬고 살펴 본다'], ['담임 교실', '믿는 선생님께 먼저 이야기를 꺼낸다']], ['아무도 모르게 혼자 참는다']),
              MB('도움 장소 두 곳에서 할 수 있는 일을 이어 보세요.', [['상담실(Wee 클래스)', '고민을 차분히 나누고 상담을 이어 간다'], ['보건실', '몸이 아플 때 쉬고 살펴 본다']], [])),
            IT(CL('친구를 상담실까지 함께 데려갈 때 할 일만 표시하세요.', '함께 갈 때', [
              { id: 'c1', text: '"같이 가 줄게"라고 먼저 말한다', ok: true }, { id: 'c2', text: '친구가 원하는 선생님을 함께 고른다', ok: true },
              { id: 'c3', text: '가는 길에 친구 이야기를 다른 친구에게 전한다' }, { id: 'c4', text: '선생님을 만날 때까지 곁에 있는다', ok: true }, { id: 'c5', text: '"네가 알아서 가"라며 혼자 보낸다' }]),
              null, null, { conclude: '알아차리고, 들어 주고, 믿을 만한 어른에게 함께 가고, 상담이 이어지도록 곁에 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '도움 차례를 써요.', columns: ['차례', '할 일'], cells: [['1', '알아차리기'], ['2', ''], ['3', ''], ['4', '']], answer: '들어 주기, 믿을 만한 어른에게 함께 가기, 상담 이어 가기' }] },
        notes: SAFE_NOTE,
      }),
      M('activity.calm-timer', {
        title: '마음 가라앉히기 구간 연습', method: '구간 타이머로 숨쉬기·근육 풀기 연습', tool: 'timer', minutes: 15,
        levels: { easy: '숨쉬기 구간을 2번 하도록 맞추고 함께 따라 한다.', base: '숨쉬기·근육 풀기 구간을 3번 하도록 맞추고 연습 차례 카드를 놓는다.', challenge: '3번 연습한 뒤, 언제 이 방법을 쓸지 상황을 스스로 점검 칸에 표시한다.' },
        activity: {
          title: '마음 가라앉히기 구간 연습', tool: 'timer',
          teacher: '"발표 직전 가상 학생 서진의 가슴이 두근거려요. 몇 번 천천히 숨을 쉬면 어떤 변화가 생길까요?" 학급이 정한 연습 값으로 타이머를 맞추고 반 전체가 함께 천천히 숨쉬기와 어깨 힘 풀기를 해 본다. "숨쉬기로 모든 고민이 사라진다"는 학생에게 "숨쉬기가 고민의 까닭까지 없애 줄까요?"라고 되묻는다. 이 연습은 잠깐 마음을 가라앉히는 방법이고, 힘든 마음이 오래가면 어른과 상담해야 한다는 점을 함께 짚는다. 어지러운 학생은 바로 멈추고 편히 숨쉬게 한다.',
          task: '마음 가라앉히기 연습 구간(숨쉬기·쉬기)을 맞추고 함께 해 본 뒤, 언제 쓸지 정해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '우리 반 연습 약속: 숨쉬기 30초, 쉬기 10초를 3번 하도록 맞추세요.', toolOptions: { title: '마음 가라앉히기(우리 반 연습 약속)', labels: ['숨쉬기', '쉬기'], plan: { work: 10, rest: 5, rounds: 1 } }, target: { plan: { work: 30, rest: 10, rounds: 3 } } },
              { prompt: '우리 반 연습 약속: 숨쉬기 30초, 쉬기 10초를 2번 하도록 맞추세요.', target: { plan: { work: 30, rest: 10, rounds: 2 } } }),
            IT({ prompt: '마음 가라앉히기 연습 차례 카드를 놓으세요.', toolOptions: { title: '연습 차례', cards: ['어깨 힘 빼기', '편히 앉기', '천천히 숨 내쉬기', '코로 천천히 들이쉬기'] }, target: { order: ['편히 앉기', '코로 천천히 들이쉬기', '천천히 숨 내쉬기', '어깨 힘 빼기'] } },
              { prompt: '마음 가라앉히기 연습 차례 카드 3장을 놓으세요.', toolOptions: { cards: ['천천히 숨 내쉬기', '편히 앉기', '코로 천천히 들이쉬기'] }, target: { order: ['편히 앉기', '코로 천천히 들이쉬기', '천천히 숨 내쉬기'] } }),
            IT({ prompt: '연습을 마치고 내가 한 것에 스스로 표시하세요.', toolOptions: { title: '연습 스스로 점검' }, target: { selfCheck: ['구간에 맞춰 천천히 숨을 쉬었다', '어깨 힘을 빼 보았다', '어지러우면 멈춰도 된다는 것을 안다'] } },
              null,
              { prompt: '연습을 마치고, 이 방법을 쓸 상황까지 스스로 표시하세요.', target: { selfCheck: ['구간에 맞춰 천천히 숨을 쉬었다', '어깨 힘을 빼 보았다', '발표·시험 직전에 쓸 수 있다', '마음이 오래 힘들면 어른과 상담해야 함을 안다'] } },
              { conclude: '천천히 숨쉬기는 잠깐 마음을 가라앉히는 방법이에요. 힘든 마음이 오래가면 혼자 견디지 말고 믿을 만한 어른과 상담해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '마음 가라앉히기 연습을 쓸 수 있는 상황 하나를 써요(예: 발표 직전).' }] },
        notes: '숨쉬기 30초·쉬기 10초·3번은 우리 반 연습 약속 값이다(근거 수치 아님 — 화면 제목에 밝힘). 이완 연습은 치료가 아니며 상담 연결을 대신하지 않는다. ' + SAFE_NOTE,
      }),

      // ---- 정리 ----
      M('wrap.help-map', {
        title: '학교 안 도움 장소 지도', method: '학교 칸 지도에 도움 장소 핀과 범례', tool: 'map', minutes: 9,
        levels: { easy: '핀을 놓으면 장소 이름이 바로 보이고, 상담실·보건실 두 곳에 핀을 꽂는다.', base: '이름 없이 상담실·보건실·담임 교실 세 곳에 핀을 꽂는다.', challenge: '범례 빈칸을 채우고, 학교 밖 상담 전화 칸은 교사가 안내한 최신 공식 번호로 활동지에 적는다.' },
        wrap: {
          teacher: '"마음이 힘들 때 우리 학교에서 가장 먼저 찾아갈 수 있는 곳은 어디일까요?" 가상의 학교 지도에서 핀을 꽂은 뒤 각 장소에 가면 무엇을 할 수 있는지 한 줄씩 말하게 한다. "상담실은 큰일이 있을 때만 간다"는 말에는 "작은 고민일 때 미리 이야기하면 어떤 점이 좋을까요?"라고 되묻는다. 학교 밖 상담 전화는 수업 전에 교사가 최신 공식 번호를 확인해 칠판에 적어 준다.',
          exitTicket: [
            IT(X('map', PIN('마음이 힘들 때 고민을 차분히 나눌 수 있는 곳에 핀을 꽂으세요.', SCH, { place: '상담실' }), { difficulty: 0.15 }),
              { prompt: '고민을 나눌 수 있는 상담실에 핀을 꽂으세요(장소 이름이 보여요).', toolOptions: { readout: true } }),
            IT(X('map', PIN('두통이나 배앓이가 계속될 때 먼저 갈 곳에 핀을 꽂으세요.', SCH, { place: '보건실' }), { difficulty: 0.15 }),
              { prompt: '몸이 아플 때 갈 보건실에 핀을 꽂으세요(장소 이름이 보여요).', toolOptions: { readout: true } },
              { prompt: '범례 빈칸에 도움 장소의 이름을 채우세요.', toolOptions: { mode: 'legend', legend: true, meanings: { office: '상담실', hospital: '보건실', school: '담임 교실' } }, target: { legend: { office: '상담실', hospital: '보건실', school: '담임 교실' } } }),
            { type: 'choice', prompt: '친구가 힘든 마음을 털어놓았을 때 가장 알맞은 행동은?', options: ['혼자 해결해 준다', '믿을 만한 어른에게 함께 간다', '못 들은 척한다'], answer: 1, difficulty: 0.15, explain: '친구 혼자, 나 혼자 짊어지지 않고 믿을 만한 어른과 함께 도와요.' },
          ],
        },
        worksheet: {
          title: '우리 학교 도움 장소',
          items: [
            { type: 'table', prompt: '도움 장소와 그곳에서 할 수 있는 일을 써요.', columns: ['장소', '할 수 있는 일'], cells: [['상담실(Wee 클래스)', ''], ['보건실', ''], ['담임 교실', '']], answer: '고민 나누기·상담 이어 가기, 아플 때 쉬고 살피기, 믿는 선생님께 먼저 말하기' },
            { type: 'blank', prompt: '학교 밖 상담 전화를 적어 두어요.', text: '청소년 상담 전화: ___', answer: '(선생님이 알려 준 최신 공식 번호)' },
          ],
        },
        notes: '학교 밖 상담 전화는 수업 전에 교사가 최신 공식 번호를 확인해 알려 준다(파일에 번호를 적지 않음). 지도는 가상 학교다. ' + SAFE_NOTE,
      }),
      M('wrap.support-write', {
        title: '힘든 친구에게 건넬 말 쓰기', method: '친구에게 건넬 말 쓰고 기준표 점검', tool: 'rubric-writing', minutes: 9,
        levels: { easy: '문장 틀("말해 줘서 ___. ___ 같이 가자.")을 채워 두 문장으로 쓴다.', base: '세 문장으로 쓰고 기준 3개(공감·판단하지 않기·도움 연결)를 점검한다.', challenge: '세 문장을 쓴 뒤 하지 말아야 할 말 한 가지를 골라 고쳐 쓰고 기준 4개를 점검한다.' },
        wrap: {
          teacher: '"\'그 정도로 뭘 그래\'와 \'말해 줘서 고마워, 같이 선생님께 가 보자\' 가운데 어느 말이 친구가 다시 말을 꺼내게 할까요?" 두 문장을 견주어 읽은 뒤, 가상 친구 유나에게 건넬 말을 쓰게 한다. "좋은 해결책을 주는 것이 최고의 위로"라는 학생에게 "유나가 지금 바라는 것은 해결책일까요, 들어 줄 사람일까요?"라고 되묻는다. 실제 친구 이름이나 학생 자신의 사정은 쓰지 않게 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'rubric-writing', options: { topic: '힘든 마음을 털어놓은 가상 친구 유나에게 건넬 말을 세 문장으로 쓰세요.', minChars: 40, maxChars: 220, minSentences: 3, maxSentences: 4, title: '친구에게 건넬 말', placeholder: '예: 유나야, 말해 줘서…' },
              prompt: '유나에게 건넬 말을 세 문장으로 쓰고 기준표에 스스로 표시해요.', target: { selfCheck: ['유나의 마음에 공감하는 말을 썼다', '판단하거나 가볍게 넘기는 말이 없다', '믿을 만한 어른에게 함께 가자는 말을 넣었다'] }, difficulty: 0.3 },
              { prompt: '문장 틀을 따라 유나에게 건넬 말을 두 문장으로 쓰고 기준표에 표시해요.', toolOptions: { starter: '말해 줘서 ___. ___에게 같이 가자.', minSentences: 2, minChars: 20 }, target: { selfCheck: ['유나의 마음에 공감하는 말을 썼다', '믿을 만한 어른에게 함께 가자는 말을 넣었다'] } },
              { prompt: '세 문장으로 쓰고, "그 정도로 뭘 그래"를 고친 문장을 하나 더 넣어 기준표에 표시해요.', toolOptions: { maxSentences: 5 }, target: { selfCheck: ['유나의 마음에 공감하는 말을 썼다', '판단하거나 가볍게 넘기는 말이 없다', '믿을 만한 어른에게 함께 가자는 말을 넣었다', '하지 말아야 할 말을 골라 고쳐 썼다'] } }),
            { type: 'choice', prompt: '힘든 친구에게 하지 않는 것이 좋은 말은?', options: ['"말해 줘서 고마워"', '"그 정도로 뭘 그래"', '"같이 선생님께 가 볼래?"'], answer: 1, difficulty: 0.15, explain: '가볍게 넘기는 말은 친구가 다시 말하기 어렵게 만들어요.' },
            { type: 'mood', prompt: '오늘 수업을 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '친구에게 건넬 말',
          items: [
            { type: 'short', prompt: '가상 친구 유나에게 건넬 말을 세 문장으로 써요(공감·판단하지 않기·도움 연결).' },
            { type: 'check', prompt: '내 글을 기준표로 점검해요.', options: ['공감하는 말이 있다', '판단하는 말이 없다', '어른에게 함께 가자는 말이 있다'] },
          ],
          easy: { note: '"말해 줘서 ___. ___에게 같이 가자." 틀을 써도 돼요.', items: [{ type: 'blank', prompt: '틀을 채워 써요.', text: '말해 줘서 ___. ___에게 같이 가자.', answer: '(예) 고마워, 상담 선생님' }] },
        },
        notes: SAFE_NOTE,
      }),
    );
  }

  // ==== 7~9학년 · 흡연·음주·약물 오남용 예방 (health.m.tobacco-alcohol) ====
  // 거절 말은 saf-drug.m 과 같은 4단계(분명히·까닭·대안·자리 뜨기)로 맞추고, 장면은 수련회 밤·운동부 연습 뒤로 따로 지었다.
  {
    const M = MK('tobacco-alcohol', G);
    // 수련회 밤 숙소 뒤 — 권유 압박이 커지는 차례
    const CAMP = [
      { id: 'c1', text: '수련회 밤, 선배 무리가 숙소 뒤로 부른다', motif: 'moon' },
      { id: 'c2', text: '"구경만 해" 하며 담배를 꺼낸다', motif: 'cloud' },
      { id: 'c3', text: '"한 번은 괜찮아" 하며 한 개비 내민다', motif: 'leaf' },
      { id: 'c4', text: '"안 피우면 우리 무리 아니다"라고 한다', motif: 'storm' },
      { id: 'c5', text: '"아니요, 먼저 들어갈게요" 하고 돌아선다', motif: 'star' },
    ];
    // 운동부 연습 뒤 갈림길(깊이 3)
    const D1 = { text: '운동부 연습이 끝난 저녁, 공원 벤치에서 선배 지훈이 담배를 내밀며 "한 번은 괜찮아, 다들 해"라고 한다.', ask: '나는 어떻게 할까?', motif: 'cloud', choices: [
      { id: 'take', text: '분위기를 깨기 싫어 받아 든다', result: '선배들이 "역시"라며 웃고 다음에도 부른다.', impact: [{ who: '나', text: '다음 권유를 거절하기 더 어려워진다', tone: -1 }], why: '한 번 받으면 다음 권유가 더 쉬워져요. 처음에 분명히 거절해요.', end: '받아 들었어요. 거절하기가 더 어려워졌어요.',
        next: { text: '다음 연습 날, 지훈이 "오늘도 한 대?"라며 또 내민다.', choices: [
          { id: 'again', text: '지난번에 받았으니 또 받는다', result: '권유가 습관처럼 굳는다.', impact: [{ who: '나', text: '의존으로 이어질 수 있다', tone: -1 }] },
          { id: 'late', text: '"지난번엔 실수였어요, 이제 안 해요"라고 말한다', result: '지훈이 잠깐 놀라지만 더 권하지 않는다.', impact: [{ who: '나', text: '다시 멈출 수 있다', tone: 1 }] }] } },
      { id: 'no', text: '"아니요, 저는 안 피워요"라고 분명히 말한다', result: '지훈이 "왜? 한 번만"이라며 다시 권한다.', impact: [{ who: '나', text: '내 뜻을 처음부터 밝힌다', tone: 1 }], end: '분명히 거절했어요. 다시 권할 때가 남았어요.',
        next: { text: '지훈이 "한 번 가지고 뭘 그래, 겁나?"라고 한다. 다른 선배들도 쳐다본다.', ask: '이번엔 어떻게 말할까?', choices: [
          { id: 'reason', text: '"숨차서 기록 떨어지는 거 싫어요. 대신 음료 사러 가요"라고 한다', result: '선배 하나가 "그래, 가자"며 따라 일어선다.', impact: [{ who: '나', text: '관계를 지키며 거절한다', tone: 1 }], end: '까닭과 대안을 말했어요.',
            next: { text: '지훈은 여전히 "재미없네"라며 벤치에 앉아 있다.', choices: [
              { id: 'leave', text: '"먼저 갈게요" 하고 자리를 뜬다', result: '권유가 이어질 자리에서 벗어난다.', impact: [{ who: '나', text: '압박에서 벗어난다', tone: 1 }] },
              { id: 'stay', text: '미안한 마음에 옆에 계속 앉아 있는다', result: '지훈이 다시 담배를 내민다.', impact: [{ who: '나', text: '압박이 다시 커진다', tone: -1 }], why: '거절한 뒤에는 권유가 이어질 자리를 떠나는 것이 좋아요.' }] } },
          { id: 'give', text: '"겁나는 거 아니에요"라며 결국 받아 든다', result: '겁쟁이 소리를 피하려다 원하지 않은 선택을 한다.', impact: [{ who: '나', text: '내 뜻과 다른 선택을 한다', tone: -1 }], why: '놀림에 맞서려고 받을 필요는 없어요. 까닭을 짧게 말하고 대안을 내요.' }] } },
      { id: 'run', text: '아무 말 없이 휴대폰만 본다', result: '지훈이 "대답 안 하면 오케이"라며 손에 쥐여 준다.', impact: [{ who: '나', text: '거절 뜻이 전해지지 않는다', tone: -1 }], why: '침묵은 거절로 들리지 않을 수 있어요. 짧게라도 분명히 말해요.', ending: '말하지 않아 거절이 전해지지 않았어요.' }] };
    const R1 = [{ id: 'r1', text: '처음에 분명히 거절하면 다음 권유가 줄어든다' }, { id: 'r2', text: '니코틴은 의존을 일으켜 끊기 어렵게 한다' },
      { id: 'r3', text: '한 번은 몸에 아무 영향이 없다', why: '처음 한 번이 의존의 시작이 될 수 있어요.' }, { id: 'r4', text: '선배 말을 따라야 관계가 지켜진다', why: '대안을 내면 거절하면서도 관계를 지킬 수 있어요.' }];
    const R1M = { reasons: [{ id: 'r5', text: '거절한 뒤에는 권유가 이어질 자리를 뜬다' }], ok: ['r5'] };
    // 동네 칸 지도 — 금연 도움 경로
    const TOWN = { grid: [6, 4], title: '가상의 우리 동네', legend: false, places: [
      { name: '학교 보건실', icon: 'school', at: [1, 1] }, { name: '보건소 금연클리닉', icon: 'hospital', at: [4, 1] },
      { name: '공원', icon: 'park', at: [2, 3] }, { name: '편의점', icon: 'market', at: [5, 3] }, { name: '도서관', icon: 'library', at: [0, 3] }, { name: '아파트', icon: 'apartment', at: [3, 0] },
    ] };
    // 약 바르게 쓰기 — saf-drug '우리 집 약 점검표'(집 안 약 보관)와 달리 '내가 약을 먹을 때'만 다룬다
    const MED = [
      { id: 'm1', text: '먹기 전에 설명서의 먹는 양을 읽는다', ok: true }, { id: 'm2', text: '두 배로 먹으면 빨리 낫는다고 믿는다' },
      { id: 'm3', text: '친구가 준 처방약을 나눠 먹는다' }, { id: 'm4', text: '물과 함께 정해진 때에 먹는다', ok: true },
      { id: 'm5', text: '궁금하면 약사에게 묻는다', ok: true }, { id: 'm6', text: '같은 성분 약 두 가지를 함께 먹는다' },
      { id: 'm7', text: '다 나은 것 같아도 의사가 정한 날까지 먹는다', ok: true },
    ];
    const MYTH = [
      { id: 'y1', text: '전자담배는 수증기일 뿐이다', to: '오해', why: '전자담배에서 나오는 것은 수증기만이 아니에요. 니코틴 등이 들어 있을 수 있어요.' },
      { id: 'y2', text: '한 번은 괜찮다', to: '오해', why: '처음 한 번이 다음 권유와 의존으로 이어질 수 있어요.' },
      { id: 'f1', text: '니코틴은 의존을 일으킨다', to: '사실' }, { id: 'f2', text: '자라는 뇌는 술에 더 영향을 받는다', to: '사실' },
      { id: 'y3', text: '약은 많이 먹을수록 빨리 낫는다', to: '오해', why: '정해진 양을 넘기면 몸에 해로울 수 있어요.' },
      { id: 'f3', text: '처방약은 처방받은 사람만 먹는다', to: '사실' },
    ];

    ALL.push(
      // ---- 도입 ----
      M('intro.ad-story', {
        title: '권유가 이어지는 장면 차례', method: '권유가 커지는 장면 차례 놓기', tool: 'story', minutes: 6,
        levels: { easy: '장면 카드 3장(부르기·내밀기·돌아서기)을 차례로 놓는다.', base: '장면 카드 4장을 차례로 놓고, 압박이 가장 커진 장면을 말한다.', challenge: '장면 카드 5장을 놓은 뒤, 고리를 끊을 수 있었던 가장 이른 장면을 고른다.' },
        intro: {
          teacher: '"수련회 밤, 선배가 숙소 뒤로 부르는 장면부터 시작해요. 압박은 어느 장면에서 가장 커질까요?" 시연 단추로 장면 카드가 차례대로 놓이는 모습을 보인다. "처음엔 구경만 한다고 했으니 괜찮다"는 말에는 "구경만 하자던 자리가 다음 장면에서 어떻게 바뀌었나요?"라고 되묻는다. 권유는 한꺼번에 오지 않고 조금씩 커진다는 점, 일찍 자리를 뜰수록 거절이 쉽다는 점을 짚는다. 장면은 가상이며 학생의 흡연·음주 경험은 묻지 않는다.',
          student: '수련회 밤 장면 카드를 차례로 놓고, 압박이 가장 커진 장면과 고리를 끊을 수 있었던 장면을 찾아요.',
          demo: { tool: 'story', options: { mode: 'order', slots: 5, title: '수련회 밤', cards: [CAMP[2], CAMP[0], CAMP[4], CAMP[1], CAMP[3]] }, sequence: [{ order: CAMP.map((c) => c.id) }] },
          art: { draw: 'a paper-cut campsite lodge at night, a group of older teenagers in the shadow behind the building and one student turning back toward the lit door', banner: '압박은 조금씩 커져요', extra: [{ motif: 'moon', x: 300, y: 96 }] },
        },
        notes: SAFE_NOTE,
      }),
      M('intro.organ-find', {
        title: '흡연·음주가 닿는 기관 찾기', method: '몸 그림에서 영향 받는 기관 찾기', tool: 'body', minutes: 6,
        levels: { easy: '기관 이름이 보이는 몸 그림에서 폐·간 두 곳을 찾는다.', base: '이름 없이 폐·뇌·간·심장 네 곳을 찾고 하는 일을 읽는다.', challenge: '네 곳을 찾은 뒤 성장기에 더 조심해야 하는 까닭을 뇌가 하는 일과 이어 말한다.' },
        intro: {
          teacher: '"담배 연기와 술은 몸에 들어가 어디까지 닿을까요?" 종이 몸을 띄우고 시연 단추로 폐·뇌·간·심장이 차례로 골라지며 하는 일이 보이는 모습을 보인다. "담배는 폐만, 술은 위만 상하게 한다"는 말에는 "숨을 쉬는 폐에서 들어간 것은 피를 타고 어디로 갈까요?"라고 되묻는다. 판단을 맡는 뇌가 아직 자라는 중이라 성장기에 더 조심해야 한다는 점을 짚는다.',
          student: '몸 그림에서 흡연·음주가 영향을 주는 기관을 찾고, 그 기관이 하는 일을 짝에게 한 가지씩 말해요.',
          demo: { tool: 'body', options: { mode: 'find', organs: ['뇌', '폐', '심장', '간', '위'], jobs: { 폐: '숨을 쉬며 산소를 받아들여요', 뇌: '판단하고 기억하고 마음을 조절해요', 간: '몸에 들어온 해로운 물질을 걸러 내요', 심장: '피를 온몸으로 보내요' }, names: true }, sequence: [{ sel: '폐' }, { sel: '뇌' }, { sel: '간' }, { sel: '심장' }] },
          art: { draw: 'a paper-cut human body outline with lungs, brain, liver and heart highlighted, a faint grey smoke curl and a small glass shape at the side', banner: '어디까지 닿을까?', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
        },
      }),

      // ---- 활동 ----
      M('activity.refuse-dilemma', {
        title: '연습 뒤 담배 권유 갈림길', method: '선배의 권유를 거절하는 갈림길', tool: 'dilemma', minutes: 15,
        levels: { easy: '갈림길 1번에서 고르고 결과를 본다.', base: '갈림길 2번을 끝까지 가 보고 근거 카드를 고른다.', challenge: '갈림길 3번(자리를 뜰지)까지 가고, 거절 뒤 행동에 대한 근거까지 고른다.' },
        activity: {
          title: '연습 뒤 담배 권유 갈림길', tool: 'dilemma',
          teacher: '"선배가 \'한 번은 괜찮아\'라고 하면 정말 한 번으로 끝날까요?" 학생마다 한 길을 끝까지 가 본 뒤 되돌아가 다른 길과 견주게 한다. "아무 말 안 하면 알아서 안 권한다"는 학생에게 "침묵을 선배는 어떻게 받아들였나요?"라고 되묻는다. 거절 4단계(분명히·까닭·대안·자리 뜨기)를 칠판에 적어 두고, 길마다 어느 단계가 들어갔는지 짚는다.',
          task: '운동부 연습 뒤 선배가 담배를 권하는 갈림길에서 길을 골라 결과를 따라가고, 내 선택의 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '선배가 담배를 내밀어요. 한 번 골라 결과를 보세요.', base: '선배가 담배를 내밀어요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '선배가 담배를 내밀어요. 세 번 골라 끝까지 가고, 거절 뒤 행동의 근거도 고르세요.' },
              '연습 뒤 공원', D1, [['no', 'reason', 'leave']], R1, ['r1', 'r2'], {}, R1M),
            IT({ prompt: '다음 날 다른 선배가 어제 일을 따져 물어요. 가장 알맞은 대답을 고르세요.', toolOptions: { title: '다음 날', scene: { text: '다음 날 다른 선배가 "어제 왜 혼자 갔어? 분위기 깼잖아"라고 한다.', ask: '어떻게 답할까?', motif: 'house', choices: [
              { id: 'calm', text: '"저는 안 피우기로 했어요. 연습은 같이 해요"', result: '선배가 "알았어"라며 더 묻지 않는다.', impact: [{ who: '나', text: '뜻도 관계도 지킨다', tone: 1 }] },
              { id: 'sorry', text: '"죄송해요, 다음엔 같이 있을게요"', result: '선배가 "그럼 다음엔 한 대 해"라고 한다.', impact: [{ who: '나', text: '다음 권유를 약속한 셈이 된다', tone: -1 }], why: '사과할 일이 아니에요. 내 뜻을 짧고 분명하게 다시 말해요.' },
              { id: 'angry', text: '"담배 피우는 선배들이 한심해요"', result: '선배가 화를 내고 사이가 틀어진다.', impact: [{ who: '나', text: '관계가 나빠진다', tone: -1 }], why: '상대를 깎아내리지 않고 내 뜻만 분명히 말해도 돼요.' }] }, reasons: [], compare: true }, target: { path: [['calm']] } }),
            IT({ prompt: '선배가 이번엔 술을 권해요. 가장 알맞은 첫마디를 고르세요.', toolOptions: { title: '이번엔 술', scene: { text: '대회가 끝난 날, 졸업한 선배가 "축하주 한 잔은 괜찮지"라며 캔을 내민다.', ask: '첫마디는?', motif: 'star', choices: [
              { id: 'clear', text: '"아니요, 저는 안 마셔요. 대신 떡볶이 먹으러 가요"', result: '선배가 "그래, 그러자"라고 한다.', impact: [{ who: '나', text: '거절과 대안을 함께 말한다', tone: 1 }] },
              { id: 'maybe', text: '"음… 나중에요"', result: '선배가 "그럼 조금만"이라며 다시 권한다.', impact: [{ who: '나', text: '거절 뜻이 흐려진다', tone: -1 }], why: '"나중에"는 거절로 들리지 않아요. 분명히 말해요.' }] }, reasons: [], compare: true }, target: { path: [['clear']] } },
              null, null, { conclude: '권유는 처음에 분명히, 까닭은 짧게, 대안을 내고, 그래도 권하면 자리를 떠요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '"아무 말 안 하기"가 좋은 거절이 아닌 까닭은?', options: ['상대가 거절로 알아듣지 못할 수 있어서', '말하면 관계가 깨져서', '선배에게 예의가 없어서'], answer: '상대가 거절로 알아듣지 못할 수 있어서' }] },
        notes: SAFE_NOTE,
      }),
      M('activity.role-script', {
        title: '수련회 밤 거절 역할극 대본', method: '거절 역할극 대본 쓰고 기준표 점검', tool: 'rubric-writing', minutes: 15,
        levels: { easy: '대본 틀을 따라 3줄로 쓰고 기준 2개를 점검한다.', base: '대본 4줄을 쓰고 기준 3개(분명한 거절·까닭·대안)를 점검한 뒤 짝과 읽는다.', challenge: '대본 4줄에 두 번째 권유에 대처하는 줄을 더하고 기준 4개를 점검한다.' },
        activity: {
          title: '수련회 밤 거절 역할극 대본', tool: 'rubric-writing',
          teacher: '"\'싫어요\' 한마디로 끝나는 대본과 \'아니요, 내일 아침 등산 힘들어요. 대신 방에서 보드게임 해요\' 대본 가운데 선배가 더 권하기 어려운 것은 무엇일까요?" 두 대본을 소리 내어 견주어 읽은 뒤 대본을 쓰게 하고, 다 쓰면 짝과 역할을 바꿔 읽게 한다. "까닭을 길게 설명해야 설득된다"는 학생에게 "까닭이 길어지면 상대가 반박할 틈도 늘지 않을까요?"라고 되묻는다. 대본 속 인물은 가명으로 쓰게 한다.',
          task: '수련회 밤 선배가 담배를 권하는 장면의 거절 대본을 쓰고, 기준표로 스스로 점검한 뒤 짝과 읽어요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '수련회 밤 숙소 뒤에서 선배가 담배를 권하는 장면의 거절 대본을 4줄로 쓰세요.', toolOptions: { topic: '수련회 밤, 숙소 뒤에서 선배가 "한 번은 괜찮아"라며 담배를 권한다. 거절 대본을 4줄로 쓰세요(인물은 가명).', minChars: 40, maxChars: 240, minSentences: 4, maxSentences: 6, title: '수련회 밤 대본', lines: 5 }, target: { selfCheck: ['처음에 분명히 거절했다', '까닭을 짧게 말했다', '대안을 하나 냈다'] } },
              { prompt: '틀을 따라 수련회 밤 거절 대본을 3줄로 쓰세요.', toolOptions: { starter: '선배: "한 번은 괜찮아." / 나: "아니요, ___." / 나: "대신 ___."', minSentences: 3, minChars: 30 }, target: { selfCheck: ['처음에 분명히 거절했다', '대안을 하나 냈다'] } },
              { prompt: '수련회 밤 거절 대본 4줄에, 선배가 다시 권할 때의 대사를 한 줄 더 쓰세요.', toolOptions: { maxSentences: 7 }, target: { selfCheck: ['처음에 분명히 거절했다', '까닭을 짧게 말했다', '대안을 하나 냈다', '다시 권할 때 한 번 더 거절하고 자리를 떴다'] } }),
            IT({ prompt: '친구가 "부모님 몰래 한 모금만"이라며 술을 권하는 장면의 거절 대본을 4줄로 쓰세요.', toolOptions: { topic: '친구 집에서 놀다가 친구가 "부모님 몰래 한 모금만"이라며 술을 권한다. 거절 대본을 4줄로 쓰세요(인물은 가명).', minChars: 40, maxChars: 240, minSentences: 4, maxSentences: 6, title: '친구 집 대본', lines: 5 }, target: { selfCheck: ['처음에 분명히 거절했다', '까닭을 짧게 말했다', '대안을 하나 냈다'] } },
              { prompt: '틀을 따라 친구 집 거절 대본을 3줄로 쓰세요.', toolOptions: { starter: '친구: "한 모금만." / 나: "아니, ___." / 나: "대신 ___ 하자."', minSentences: 3, minChars: 30 }, target: { selfCheck: ['처음에 분명히 거절했다', '대안을 하나 냈다'] } },
              { prompt: '친구 집 거절 대본 4줄에, 친구가 다시 권할 때의 대사를 한 줄 더 쓰세요.', toolOptions: { maxSentences: 7 }, target: { selfCheck: ['처음에 분명히 거절했다', '까닭을 짧게 말했다', '대안을 하나 냈다', '다시 권할 때 한 번 더 거절했다'] } }),
            IT({ prompt: '짝과 대본을 바꿔 읽은 뒤, 짝의 대본에서 좋았던 거절 말과 고칠 점을 2~3문장으로 쓰세요.', toolOptions: { topic: '짝의 대본에서 좋았던 거절 말과 고칠 점을 2~3문장으로 쓰세요(이름은 쓰지 않아요).', minChars: 25, maxChars: 200, minSentences: 2, maxSentences: 3, title: '짝 대본 돌려주기', lines: 4 }, target: { selfCheck: ['좋았던 거절 말을 짚었다', '고칠 점을 하나 말했다', '놀리거나 깎아내리는 말이 없다'] } },
              { prompt: '짝의 대본에서 좋았던 거절 말을 1~2문장으로 쓰세요.', toolOptions: { minSentences: 1, minChars: 10 }, target: { selfCheck: ['좋았던 거절 말을 짚었다', '놀리거나 깎아내리는 말이 없다'] } },
              null, { conclude: '좋은 거절 대본에는 분명한 "아니요", 짧은 까닭, 대안이 함께 들어 있어요. 소리 내어 읽어 두면 실제 장면에서 입이 먼저 움직여요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내 대본에서 가장 자신 있는 거절 대사 한 줄을 옮겨 써요.' }] },
        notes: '대본 속 인물은 가명이다. 학생의 흡연·음주 경험은 묻지 않는다.',
      }),
      M('activity.help-route', {
        title: '금연 도움 경로 지도', method: '동네 칸 지도에 금연 도움 장소 핀과 범례', tool: 'map', minutes: 15,
        levels: { easy: '핀을 놓으면 장소 이름이 보이고, 학교 보건실 한 곳에 핀을 꽂는다.', base: '이름 없이 보건실과 보건소 금연클리닉 두 곳에 핀을 꽂는다.', challenge: '범례 빈칸에 도움 장소 이름을 채우고, 끊으려는 친구에게 건넬 응원 말을 고른다.' },
        activity: {
          title: '금연 도움 경로 지도', tool: 'map',
          teacher: '"담배를 끊고 싶은 가상 친구 태오가 혼자 참기만 하면 잘될까요? 도움 받을 곳은 어디일까요?" 가상 동네 지도에 핀을 꽂을 때마다 그곳에서 받을 수 있는 도움을 한 줄씩 말하게 한다. "끊는 건 의지만 있으면 된다"는 학생에게 "니코틴 의존이 생기면 의지만으로 어려운 까닭은 무엇일까요?"라고 되묻는다. 금연상담전화 번호는 수업 전에 교사가 공식 안내로 확인해 칠판에 적어 준다.',
          task: '가상 동네 칸 지도에서 끊으려는 친구가 도움 받을 수 있는 곳에 핀을 꽂고, 범례를 채워요.',
          levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            PIN('학교 안에서 금연을 상담할 수 있는 곳에 핀을 꽂으세요.', TOWN, { place: '학교 보건실' }),
            PIN('동네에서 금연을 함께 도와주는 곳에 핀을 꽂으세요.', TOWN, { place: '보건소 금연클리닉' }),
            IT(PIN('끊으려는 날, 담배를 사기 쉬워 피해 가는 것이 좋은 곳에 핀을 꽂으세요.', TOWN, { place: '편의점' }),
              null,
              { prompt: '범례 빈칸에 도움 장소 이름을 채우세요.', toolOptions: { mode: 'legend', legend: true, meanings: { school: '학교 보건실', hospital: '보건소 금연클리닉', market: '편의점' } }, target: { legend: { school: '학교 보건실', hospital: '보건소 금연클리닉', market: '편의점' } } },
              { conclude: '끊는 일은 혼자 참는 것보다 보건실·보건소 같은 도움과 함께할 때 더 잘돼요.' }),
            IT({ prompt: '끊으려는 친구 태오에게 건넬 응원 말로 알맞은 것을 고르세요.', toolOptions: { grid: [6, 4], title: '가상의 우리 동네', places: TOWN.places, legend: false, ask: { q: '태오에게 건넬 응원 말은?', choices: ['"또 피우면 너랑 안 놀아"', '"힘들면 보건실에 같이 가 줄게"', '"한 대쯤은 괜찮아"'], why: '겁주는 말보다 함께하는 말이 끊는 데 힘이 돼요.' }, readOnly: true }, target: { pick: 1 } }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '금연 도움 장소를 써요.', columns: ['장소', '받을 수 있는 도움'], cells: [['학교 보건실', ''], ['보건소 금연클리닉', ''], ['금연상담전화', '(선생님이 알려 준 번호)']], answer: '상담·끊는 계획 세우기, 금연 상담과 도움 프로그램' }] },
        notes: '금연상담전화 번호는 체계도에 없어 쓰지 않았다 — 교사가 보건복지부·보건소 공식 안내로 확인해 적어 준다. 지도와 인물은 가상이다.',
      }),
      M('activity.medicine-check', {
        title: '약을 먹을 때 바르게 쓰기 점검', method: '약 바르게 쓰기 점검 목록에서 맞는 항목만 표시', tool: 'kitchen', minutes: 15,
        levels: { easy: '점검 항목 3개 가운데 맞는 것만 표시한다.', base: '점검 항목 5개 가운데 맞는 것만 표시한다(함정 항목이 섞인다).', challenge: '항목 7개에서 맞는 것만 표시하고, 함정 항목이 왜 틀렸는지 활동지에 쓴다.' },
        activity: {
          title: '약을 먹을 때 바르게 쓰기 점검', tool: 'kitchen',
          teacher: '"감기에 걸린 가상 학생 하율이 \'두 배로 먹으면 빨리 낫겠지\'라고 해요. 맞는 말일까요?" 점검 항목을 하나씩 소리 내어 읽고 표시하게 한 뒤, 함정 항목은 왜 위험한지 말하게 한다. "약국에서 산 약은 안전하니 많이 먹어도 된다"는 학생에게 "설명서에 먹는 양이 적혀 있는 까닭은 무엇일까요?"라고 되묻는다. 오남용은 마약만이 아니라 흔한 약을 잘못 쓰는 것도 포함한다는 점을 짚는다. 학생이나 가족이 먹는 약은 묻지 않는다.',
          task: '가상 학생 하율이 약을 먹을 때 지킬 일만 점검 목록에서 골라 표시하고, 함정 항목의 까닭을 찾아요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(CL('하율이 감기약을 먹을 때 지킬 일만 표시하세요.', '약을 먹을 때', pickCards(MED, ['m1', 'm2', 'm3', 'm4', 'm5'])),
              CL('하율이 감기약을 먹을 때 지킬 일만 표시하세요.', '약을 먹을 때', pickCards(MED, ['m1', 'm2', 'm4'])),
              CL('하율이 감기약을 먹을 때 지킬 일만 표시하세요(7개).', '약을 먹을 때', MED)),
            IT(PB('약에 대해 궁금할 때 물어볼 사람만 골라 담으세요.', '물어볼 사람', [
              { id: 'a1', text: '약사', ok: true }, { id: 'a2', text: '의사', ok: true }, { id: 'a3', text: '보건 선생님', ok: true },
              { id: 'a4', text: '같은 약을 먹어 본 친구' }, { id: 'a5', text: '댓글 많은 영상 속 사람' }])),
            IT(OB('약을 먹기 전 하율이 할 일을 차례대로 놓으세요.', [{ id: 'o1', text: '이름과 사용기한 보기' }, { id: 'o2', text: '설명서의 먹는 양 읽기' }, { id: 'o3', text: '정해진 양을 물과 함께 먹기' }, { id: 'o4', text: '이상하면 바로 어른에게 알리기' }], {}, [{ id: 'o5', text: '친구 약과 바꿔 먹기' }]),
              OB('약을 먹기 전 하율이 할 일 3장을 차례대로 놓으세요.', [{ id: 'o1', text: '이름과 사용기한 보기' }, { id: 'o2', text: '설명서의 먹는 양 읽기' }, { id: 'o3', text: '정해진 양을 물과 함께 먹기' }]),
              null, { conclude: '약은 정해진 사람이, 정해진 양을, 정해진 때에 먹어요. 궁금하면 약사·의사·보건 선생님에게 물어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"약은 많이 먹을수록 빨리 낫는다"가 왜 틀렸는지 한 문장으로 써요.' }],
          easy: [{ type: 'choice', prompt: '약을 먹을 때 지킬 일은?', options: ['설명서의 먹는 양 지키기', '두 배로 먹기'], answer: '설명서의 먹는 양 지키기' }] },
        notes: '집에 있는 약 보관·버리기는 saf-drug.m(우리 집 약 점검표)이 다루므로 여기서는 약을 먹는 차례와 물어볼 사람만 다룬다. 학생·가족의 복약 정보는 묻지 않는다.',
      }),

      // ---- 정리 ----
      M('wrap.myth-sort', {
        title: '흡연·음주·약 오해와 사실', method: '오해·사실 문장 가르기', tool: 'sortboard', minutes: 9,
        levels: { easy: '문장 3장을 오해·사실 칸에 나누고, 틀리면 바로 까닭을 들려준다.', base: '문장 5장을 오해·사실 칸에 나눈다.', challenge: '문장 6장을 나누고, 오해 하나를 골라 사실 문장으로 고쳐 쓴다.' },
        wrap: {
          teacher: '"\'전자담배는 수증기일 뿐\'은 오해일까요, 사실일까요? 근거는 무엇이었죠?" 문장을 나눈 뒤 오해 문장마다 오늘 배운 근거로 한 줄씩 바로잡게 한다. "다들 하는 말이니 사실일 것"이라는 학생에게 "많은 사람이 말한다고 사실이 될까요?"라고 되묻는다. 오해 문장 하나를 사실 문장으로 고쳐 쓰는 것으로 마무리한다.',
          exitTicket: [
            IT(X('sortboard', SBX('문장을 오해와 사실 칸에 나누세요.', ['오해', '사실'], pickCards(MYTH, ['y1', 'y2', 'f1', 'f2', 'y3'])), { difficulty: 0.2 }),
              { prompt: '문장 3장을 오해와 사실 칸에 나누세요.', toolOptions: { cards: strip(pickCards(MYTH, ['y1', 'f1', 'y2'])), instant: true }, target: { sort: { 오해: ['y1', 'y2'], 사실: ['f1'] } } },
              { prompt: '문장 6장을 오해와 사실 칸에 나누세요.', toolOptions: { cards: strip(MYTH) }, target: { sort: { 오해: ['y1', 'y2', 'y3'], 사실: ['f1', 'f2', 'f3'] } } }),
            { type: 'choice', prompt: '"한 번은 괜찮다"를 바로잡는 말로 가장 알맞은 것은?', options: ['한 번이면 아무 일도 없다', '처음 한 번이 다음 권유와 의존으로 이어질 수 있다', '어른이 되면 괜찮다'], answer: 1, difficulty: 0.2, explain: '처음 한 번이 다음 권유를 쉽게 만들고 의존으로 이어질 수 있어요.' },
            { type: 'short', prompt: '오해 문장 하나를 골라 사실 문장으로 고쳐 써요.' },
          ],
        },
        worksheet: {
          title: '오해를 사실로',
          items: [
            { type: 'table', prompt: '오해 문장을 사실 문장으로 고쳐 써요.', columns: ['오해', '사실'], cells: [['전자담배는 수증기일 뿐이다', ''], ['약은 많이 먹을수록 빨리 낫는다', '']], answer: '니코틴 등이 들어 있을 수 있다, 정해진 양을 넘기면 해로울 수 있다' },
            { type: 'check', prompt: '오늘 익힌 거절 4단계에 표시해요.', options: ['분명히 거절하기', '까닭을 짧게', '대안 내기', '자리 뜨기'] },
          ],
        },
      }),
      M('wrap.pledge-poster', {
        title: '또래 예방 캠페인 포스터', method: '거절·도움 경로 캠페인 포스터 꾸미기', tool: 'collage', minutes: 9,
        levels: { easy: '보기 문구 하나를 고르고 조각 3개 이상으로 포스터 바탕을 꾸민다.', base: '문구를 직접 써(활동지) 조각 5개 이상으로 꾸미고 점검 항목 3개를 표시한다.', challenge: '포스터를 볼 대상 또래(같은 반·후배)를 정하고 그에 맞게 문구를 다듬어 점검 항목 4개를 표시한다.' },
        wrap: {
          teacher: '"\'담배는 죽음\' 같은 겁주는 문구와 \'권하면 \"아니\", 힘들면 보건실\' 문구 가운데 친구가 실제로 따라 할 수 있는 것은 무엇일까요?" 두 문구를 견주어 읽은 뒤, 거절하기나 도움 경로를 담은 문구를 활동지에 쓰고 조각으로 포스터 바탕을 꾸미게 한다(교구에는 글자를 넣을 수 없다). 피우는 사람을 놀리는 그림이나 말은 넣지 않게 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'collage', options: { maxPieces: 12, shapes: ['circle', 'square', 'rect', 'star', 'heart', 'leaf'] }, prompt: '캠페인 포스터 바탕을 조각으로 꾸미고 점검해요(문구는 활동지에 써요).', target: { selfCheck: ['문구를 놓을 자리를 비워 두었다', '거절하기나 도움 경로를 문구에 담았다', '피우는 사람을 놀리는 그림이 없다'], minPieces: 5 }, difficulty: 0.2 },
              { prompt: '조각 3개 이상으로 포스터 바탕을 꾸미고 점검해요.', target: { selfCheck: ['문구를 놓을 자리를 비워 두었다', '보기 문구 하나를 골랐다'], minPieces: 3 } },
              { prompt: '볼 대상 또래를 정하고, 조각 5개 이상으로 꾸며 점검해요.', target: { selfCheck: ['문구를 놓을 자리를 비워 두었다', '거절하기나 도움 경로를 문구에 담았다', '피우는 사람을 놀리는 그림이 없다', '볼 대상에 맞게 문구를 다듬었다'], minPieces: 5 } }),
            { type: 'choice', prompt: '또래가 따라 하기 쉬운 캠페인 문구는?', options: ['담배는 죽음이다', '권하면 "아니", 힘들면 보건실', '피우는 사람은 나쁜 사람'], answer: 1, difficulty: 0.15, explain: '할 행동이 들어 있는 문구가 따라 하기 쉬워요. 사람을 깎아내리는 문구는 쓰지 않아요.' },
          ],
        },
        worksheet: {
          title: '또래 예방 캠페인',
          items: [
            { type: 'short', prompt: '거절하기나 도움 경로를 담은 캠페인 문구를 한 줄로 써요.' },
            { type: 'check', prompt: '내 문구를 점검해요.', options: ['할 행동이 들어 있다', '겁주거나 놀리는 말이 없다', '또래가 읽기 쉽다'] },
          ],
          easy: { note: '보기 문구를 골라 써도 돼요.', items: [{ type: 'choice', prompt: '보기 문구 하나를 골라요.', options: ['권하면 "아니", 힘들면 보건실', '"한 번만"에 "한 번도 안 해"', '끊고 싶다면 함께 가요'], answer: '권하면 "아니", 힘들면 보건실' }] },
        },
        notes: '교구는 글자를 넣지 못해 포스터 바탕만 꾸미고 문구는 활동지에 쓰게 했다.',
      }),
    );
  }

  // ==== 7~9학년 · 건강 광고의 과장과 출처 (health.m.health-media) ====
  // 광고·영상·제품은 모두 지어낸 가상이다. 어떤 건강식품·보충제도 권하지 않고, 확인하는 방법만 다룬다.
  {
    const M = MK('health-media', G);
    const SIG = [
      { id: 'g1', text: '"하루 만에 키가 쑥!"', to: '과장 신호', why: '\'하루 만에\'처럼 빠른 효과를 약속하는 말은 과장 신호예요.' },
      { id: 'g2', text: '"먹기만 하면 누구나 효과"', to: '과장 신호', why: '\'누구나\'는 사람마다 다른 몸을 무시하는 말이에요.' },
      { id: 'n1', text: '"사람마다 효과가 다를 수 있습니다"', to: '근거 있음' },
      { id: 'g3', text: '"모든 병을 낫게 하는 기적의 물"', to: '과장 신호', why: '\'모든 병\'·\'기적\'은 근거 없이 완치를 약속하는 말이에요.' },
      { id: 'n2', text: '"연구 기관과 날짜를 밝힌 자료입니다"', to: '근거 있음' },
      { id: 'n3', text: '"먹기 전 의사·약사와 상담하세요"', to: '근거 있음' },
    ];
    const KIND = [
      { id: 'k1', text: '"사흘이면 끝!"', to: '즉시' }, { id: 'k2', text: '"단번에 효과"', to: '즉시' },
      { id: 'k3', text: '"완벽하게 낫는다"', to: '완치' }, { id: 'k4', text: '"다시는 아프지 않아요"', to: '완치' },
      { id: 'k5', text: '"남녀노소 누구나"', to: '누구나' }, { id: 'k6', text: '"체질 상관없이 다"', to: '누구나' },
    ];
    // 친구가 영상에서 본 '키 크는 젤리'를 같이 사자고 하는 갈림길(깊이 3)
    const D1 = { text: '친구 도하가 "이 영상 봐, 키 크는 젤리래. 조회 수 100만이야. 같이 사자"라며 용돈을 모으자고 한다.', ask: '나는 어떻게 할까?', motif: 'star', choices: [
      { id: 'buy', text: '조회 수가 많으니 믿고 바로 주문한다', result: '용돈이 줄었지만 광고에 적힌 효과는 확인할 길이 없다.', impact: [{ who: '나', text: '돈과 시간을 잃는다', tone: -1 }], why: '조회 수는 얼마나 많이 봤는지일 뿐, 효과의 근거가 아니에요.', ending: '근거를 확인하지 않고 샀어요.' },
      { id: 'check', text: '"누가 만든 영상인지부터 보자"고 한다', result: '영상 아래에 \'유료 광고 포함\'이라는 작은 글씨가 보인다.', impact: [{ who: '나', text: '광고라는 것을 알아챈다', tone: 1 }], end: '출처를 보고 광고라는 것을 알았어요.',
        next: { text: '도하가 "그래도 후기가 다 좋은데?"라고 한다. 후기 대부분이 같은 날 올라와 있다.', ask: '후기를 어떻게 볼까?', choices: [
          { id: 'trust', text: '후기가 많으니 효과가 있다고 믿는다', result: '나중에 보니 후기 상당수가 판매자가 올린 것이었다.', impact: [{ who: '나', text: '속을 수 있다', tone: -1 }], why: '후기는 파는 쪽이 고를 수 있어요. 광고와 후기를 구별해요.' },
          { id: 'ask', text: '"보건 선생님께 키가 크는 데 정말 필요한 게 뭔지 묻자"고 한다', result: '선생님이 잠·운동·고른 식사가 먼저라고 말해 준다.', impact: [{ who: '나', text: '믿을 만한 정보를 얻는다', tone: 1 }], end: '믿을 만한 어른에게 물었어요.',
            next: { text: '도하는 "그래도 먹어 볼래"라며 혼자 사려 한다.', ask: '도하에게 무슨 말을 할까?', choices: [
              { id: 'share', text: '"성분이랑 주의 사항을 같이 확인하고, 보호자께 먼저 여쭤 봐"라고 한다', result: '도하가 보호자와 함께 확인해 보기로 한다.', impact: [{ who: '도하', text: '혼자 판단하지 않는다', tone: 1 }] },
              { id: 'mock', text: '"속는 줄도 모르냐"며 비웃는다', result: '도하가 기분이 상해 더 고집을 부린다.', impact: [{ who: '도하', text: '말을 듣지 않게 된다', tone: -1 }], why: '비웃음보다 함께 확인하자는 말이 친구를 움직여요.' }] } }] } },
      { id: 'skip', text: '"난 관심 없어"라며 대화를 끝낸다', result: '도하는 혼자 확인 없이 주문한다.', impact: [{ who: '도하', text: '확인 없이 돈을 쓴다', tone: -1 }], why: '나는 안 사더라도 친구와 함께 출처를 확인해 볼 수 있어요.', ending: '친구가 확인 없이 샀어요.' }] };
    const R1 = [{ id: 'r1', text: '조회 수와 후기는 효과의 근거가 아니다' }, { id: 'r2', text: '누가 만들고 누가 이득을 보는지 먼저 본다' },
      { id: 'r3', text: '전문가처럼 보이면 사실이다', why: '흰 가운을 입었다고 근거가 생기지는 않아요. 출처와 자료를 봐요.' }, { id: 'r4', text: '유명한 사람이 먹으면 나에게도 맞다', why: '사람마다 몸이 달라요. 의사·약사와 상담해요.' }];
    const R1M = { reasons: [{ id: 'r5', text: '친구에게는 비웃기보다 함께 확인하자고 말한다' }], ok: ['r5'] };
    // 가상 광고 두 개 점검
    const ADA = '가상 광고 A: "의사 추천! 한 달이면 키 5cm, 누구나 효과. 지금 사면 50% 할인"';
    const CHK = [
      { id: 'c1', text: '추천했다는 의사의 이름·소속이 없다', ok: true }, { id: 'c2', text: '효과를 보여 주는 연구 자료가 없다', ok: true },
      { id: 'c3', text: '광고하는 쪽이 파는 회사다', ok: true }, { id: 'c4', text: '주의 사항과 부작용이 적혀 있다' },
      { id: 'c5', text: '\'누구나\'처럼 과장 신호가 있다', ok: true },
    ];
    const ADB = '가상 광고 B: "○○보건소 안내 — 잠과 운동이 성장에 도움이 될 수 있어요. 2026년 자료, 문의 보건소"';
    const CHKB = [
      { id: 'b1', text: '만든 기관 이름이 밝혀져 있다', ok: true }, { id: 'b2', text: '자료의 날짜가 있다', ok: true },
      { id: 'b3', text: '물건을 팔려는 문구가 있다' }, { id: 'b4', text: '\'반드시\'·\'누구나\' 같은 과장 신호가 있다' },
      { id: 'b5', text: '물어볼 곳이 적혀 있다', ok: true },
    ];
    const TRUNC = [['광고 속 우리 제품', 52], ['다른 제품', 50]];

    ALL.push(
      // ---- 도입 ----
      M('intro.ad-feel', {
        title: '건강 광고 문구 첫 믿음', method: '광고 문구마다 믿음 정도 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '광고 문구 두 개에 대한 믿음 정도를 고른다.', base: '광고 문구 세 개에 대한 믿음 정도를 고르고, 가장 믿음이 컸던 문구를 말한다.', challenge: '세 문구의 믿음을 고른 뒤 그 문구가 끌리는 까닭(빠른 효과·누구나·유명인)을 짐작해 말한다.' },
        intro: {
          teacher: '"\'하루 만에 키 쑥!\' 이 문구를 처음 보면 얼마나 믿고 싶어질까요?" 가상 광고 문구를 하나씩 띄우고 시연 단추로 믿음 눈금이 움직이는 모습을 보인다. "믿음이 크면 사실"이라는 말에는 "끌리는 마음과 근거는 같은 것일까요?"라고 되묻는다. 오늘은 끌리는 까닭을 찾아 광고의 장치를 알아본다고 밝힌다. 이 눈금은 맞고 틀림이 없고, 수업 끝에 다시 보며 생각이 바뀌었는지 견준다.',
          student: '가상 건강 광고 문구를 읽고 처음 드는 믿음 정도를 골라 보고, 그 문구가 왜 끌리는지 짐작해요.',
          demo: { tool: 'emotion', options: { mode: 'scale', situation: '가상 광고 "하루 만에 키 쑥! 먹기만 하세요"', feeling: '기대', steps: 5, scaleLabels: { 1: '전혀 안 믿긴다', 5: '아주 믿긴다' } }, sequence: [{ level: 4 }] },
          art: { draw: 'a paper-cut smartphone screen with a flashy health advertisement full of exclamation marks and stars, a teenager looking at it with curiosity', banner: '이 광고, 믿어도 될까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '광고 문구는 모두 가상이다. 학생 자신의 키·몸·구매 경험은 묻지 않는다.',
      }),
      M('intro.claim-chart', {
        title: '광고 그래프 눈금 속임수 찾기', method: '눈금이 잘린 예시 그래프 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '막대 값이 보이는 그래프에서 두 값의 실제 차이를 고른다.', base: '값 없이 눈금을 읽고 차이가 커 보이는 까닭을 고른다.', challenge: '그래프를 정직하게 다시 그리려면 무엇을 바꿔야 하는지 고른다.' },
        intro: {
          teacher: '"이 광고 그래프만 보면 우리 제품이 두 배쯤 좋아 보이죠? 숫자로 보면 정말 그럴까요?" 눈금이 48에서 시작하는 예시 막대그래프를 띄우고 시연 단추로 답이 골라지는 모습을 보인다. "막대가 길면 크게 차이 난다"는 말에는 "세로축이 0에서 시작하나요?"라고 되묻는다. 이 그래프는 수업용 예시 자료이고 실제 제품 자료가 아니라는 점을 밝힌다.',
          student: '가상 광고 속 막대그래프에서 세로축 눈금을 읽고, 두 제품의 차이가 실제보다 커 보이는 까닭을 찾아요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '가상 광고 그래프 — 만족 점수(예시 자료)', unit: '점', xLabel: '제품', yLabel: '만족 점수', from: 48, max: 53, data: TRUNC, question: '두 제품 점수의 실제 차이는?', choices: ['2점', '25점', '두 배'] }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper-cut billboard showing a bar chart with a cut-off vertical axis, one bar towering over another, a magnifying glass over the axis', banner: '눈금부터 보세요', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
        },
        notes: DATA_NOTE,
      }),

      // ---- 활동 ----
      M('activity.signal-sort', {
        title: '광고 문장 과장 신호 가르기', method: '광고 문장을 과장 신호·근거 있음으로 분류', tool: 'sortboard', minutes: 15,
        levels: { easy: '카드 4장을 두 바구니에 나누고, 틀리면 바로 까닭을 들려주며 바구니 옆에 장 수가 보인다.', base: '카드 6장을 두 바구니에 나눈다.', challenge: '카드 6장을 나눈 뒤 과장 신호에 이름(즉시·완치·누구나)을 붙여 나누고, 더 섞인 카드까지 가른다.' },
        activity: {
          title: '광고 문장 과장 신호 가르기', tool: 'sortboard',
          teacher: '"\'사람마다 효과가 다를 수 있습니다\'라는 문장은 광고에 왜 들어 있을까요? 오히려 믿을 만한 신호일까요?" 카드를 바구니에 넣을 때마다 그 문장이 무엇을 약속하는지 소리 내어 말하게 한다. "작은 글씨는 안 읽어도 된다"는 학생에게 "작은 글씨에 무엇이 숨어 있을 수 있을까요?"라고 되묻는다. 과장 신호는 빠른 효과(즉시)·완치·누구나 세 가지로 이름 붙일 수 있다는 점을 짚는다. 광고 문장은 모두 가상이다.',
          task: '가상 건강 광고 문장 카드를 \'과장 신호\'와 \'근거 있음\' 바구니에 나누고, 과장 신호에 이름을 붙여요.',
          levels: { easy: { instant: true, showCount: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SBX('광고 문장을 과장 신호와 근거 있음 바구니에 나누세요.', ['과장 신호', '근거 있음'], SIG),
              SBX('광고 문장 4장을 과장 신호와 근거 있음 바구니에 나누세요.', ['과장 신호', '근거 있음'], pickCards(SIG, ['g1', 'n1', 'g2', 'n3']))),
            IT(SBX('과장 신호 문장을 즉시·완치·누구나 바구니에 나누세요.', ['즉시', '완치', '누구나'], KIND),
              SBX('과장 신호 문장 3장을 즉시·완치·누구나 바구니에 나누세요.', ['즉시', '완치', '누구나'], pickCards(KIND, ['k1', 'k3', 'k5'])),
              { prompt: '과장 신호 문장을 즉시·완치·누구나 바구니에 나누세요(근거 있는 문장은 남겨요).', toolOptions: { more: [{ id: 'k7', text: '"광고 모델 실제 후기"' }, { id: 'k8', text: '"식품의약품안전처 안내를 따르세요"' }] } }),
            IT(SBX('영상 속 말을 광고·정보 바구니에 나누세요.', ['광고에 가까움', '정보에 가까움'], [
              { id: 'v1', text: '"할인 링크는 아래에!"', to: '광고에 가까움' }, { id: 'v2', text: '"이 영상은 협찬을 받았어요"', to: '광고에 가까움' },
              { id: 'v3', text: '"자료 출처: 보건소 안내(2026)"', to: '정보에 가까움' }, { id: 'v4', text: '"궁금하면 약사와 상담하세요"', to: '정보에 가까움' }]),
              null, null, { conclude: '즉시·완치·누구나를 약속하는 말은 과장 신호예요. 출처·날짜·상담 안내가 있는 말이 더 믿을 만해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '과장 신호의 이름과 예를 써요.', columns: ['신호', '예'], cells: [['즉시', ''], ['완치', ''], ['누구나', '']], answer: '하루 만에·사흘이면, 완벽하게 낫는다·모든 병, 누구나·남녀노소' }],
          easy: [{ type: 'choice', prompt: '과장 신호가 들어 있는 문장은?', options: ['하루 만에 키가 쑥!', '사람마다 효과가 다를 수 있습니다'], answer: '하루 만에 키가 쑥!' }] },
      }),
      M('activity.buy-dilemma', {
        title: '키 크는 젤리 구매 갈림길', method: '친구가 권한 건강식품 구매 갈림길', tool: 'dilemma', minutes: 15,
        levels: { easy: '갈림길 1번에서 고르고 결과를 본다.', base: '갈림길 2번(후기를 어떻게 볼지)까지 가 보고 근거 카드를 고른다.', challenge: '갈림길 3번(친구에게 할 말)까지 가고, 친구를 대하는 근거까지 함께 고른다.' },
        activity: {
          title: '키 크는 젤리 구매 갈림길', tool: 'dilemma',
          teacher: '"조회 수 100만, 좋은 후기 가득 — 이것만으로 효과가 있다고 할 수 있을까요?" 학생마다 한 길을 끝까지 가 본 뒤, 되돌아가 다른 길과 견주게 한다. "전문가가 나와서 추천했으니 믿을 만하다"는 학생에게 "그 전문가의 이름·소속과 자료가 밝혀져 있었나요?"라고 되묻는다. 이 수업은 어떤 제품도 사라거나 먹으라고 권하지 않고, 확인하는 방법만 익힌다는 점을 밝힌다.',
          task: '친구가 영상에서 본 가상 건강식품을 같이 사자고 하는 갈림길에서 길을 골라 결과를 따라가고, 내 선택의 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '친구가 키 크는 젤리를 같이 사자고 해요. 한 번 골라 결과를 보세요.', base: '친구가 키 크는 젤리를 같이 사자고 해요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '친구가 키 크는 젤리를 같이 사자고 해요. 세 번 골라 끝까지 가고, 친구를 대하는 근거도 고르세요.' },
              '키 크는 젤리', D1, [['check', 'ask', 'share']], R1, ['r1', 'r2'], {}, R1M),
            IT({ prompt: '영상 속 "의사"가 추천했다고 해요. 가장 먼저 할 일을 고르세요.', toolOptions: { title: '흰 가운의 추천', scene: { text: '영상에 흰 가운을 입은 사람이 나와 "의사로서 추천합니다"라고 말한다. 이름과 소속은 나오지 않는다.', ask: '먼저 무엇을 할까?', motif: 'star', choices: [
              { id: 'who', text: '이름·소속과 근거 자료가 있는지 찾아본다', result: '어디에도 이름과 자료가 없다는 것을 알게 된다.', impact: [{ who: '나', text: '근거 없는 추천을 걸러 낸다', tone: 1 }] },
              { id: 'gown', text: '흰 가운을 입었으니 믿는다', result: '나중에 그 사람이 광고 모델이었다는 것을 안다.', impact: [{ who: '나', text: '겉모습에 속는다', tone: -1 }], why: '전문가처럼 보이는 것과 근거는 달라요. 이름·소속·자료를 확인해요.' }] }, reasons: [], compare: true }, target: { path: [['who']] } }),
            IT({ prompt: '별점 5점 후기가 같은 날 수십 개 올라와 있어요. 알맞은 판단을 고르세요.', toolOptions: { title: '같은 날 후기', scene: { text: '젤리 후기 수십 개가 모두 별점 5점이고 같은 날 올라와 있다. 문장도 서로 비슷하다.', ask: '어떻게 볼까?', motif: 'cloud', choices: [
              { id: 'doubt', text: '파는 쪽이 고른 후기일 수 있다고 보고 다른 근거를 찾는다', result: '보건소 안내에서 성장에는 잠·운동·고른 식사가 먼저라는 내용을 찾는다.', impact: [{ who: '나', text: '믿을 만한 정보를 찾는다', tone: 1 }] },
              { id: 'many', text: '후기가 많으니 효과가 확실하다고 본다', result: '같은 날 올라온 비슷한 후기는 광고일 수 있다.', impact: [{ who: '나', text: '광고를 정보로 착각한다', tone: -1 }], why: '후기는 파는 쪽이 고를 수 있어요. 광고와 후기를 구별해요.' }] }, reasons: [], compare: true }, target: { path: [['doubt']] } },
              null, null, { conclude: '사기 전에는 누가 만들었는지, 광고인지, 근거 자료가 있는지 확인하고, 궁금하면 보호자·보건 선생님·약사에게 물어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '"조회 수 100만"을 보고 할 생각으로 알맞은 것은?', options: ['많이 봤으니 효과가 있다', '많이 본 것과 효과는 다르다', '나만 안 사면 손해다'], answer: '많이 본 것과 효과는 다르다' }] },
        notes: '제품·영상·인물은 모두 가상이다. 키·몸에 대한 학생 자신의 고민은 묻지 않으며, 어떤 건강식품·보충제도 권하지 않는다.',
      }),
      M('activity.source-check', {
        title: '건강 광고 출처 점검 목록', method: '출처 점검 목록으로 가상 광고 검사', tool: 'kitchen', minutes: 15,
        levels: { easy: '광고 A에서 확인된 문제 3가지 가운데 맞는 것만 표시한다.', base: '광고 A의 점검 항목 5개 가운데 실제로 맞는 것만 표시한다(함정 항목이 섞인다).', challenge: '광고 A와 보건소 안내 B를 같은 점검 목록으로 검사하고 견준다.' },
        activity: {
          title: '건강 광고 출처 점검 목록', tool: 'kitchen',
          teacher: '"\'의사 추천!\'이라고 쓰여 있으면, 그 의사는 누구일까요?" 가상 광고를 소리 내어 읽은 뒤 점검 항목을 하나씩 따져 표시하게 한다. "할인까지 하니 좋은 기회"라는 학생에게 "서두르게 만드는 말은 누구에게 이득일까요?"라고 되묻는다. 점검이 끝나면 광고 A와 보건소 안내 B가 같은 질문에 어떻게 다르게 답하는지 견준다. 광고와 안내문은 모두 가상이다.',
          task: '가상 광고를 출처 점검 목록(누가 만들었나·근거 자료·파는 사람인가·과장 신호)으로 검사해 맞는 항목만 표시해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(CL(`${ADA} — 이 광고에서 확인되는 것만 표시하세요.`, '광고 A 점검', CHK),
              CL(`${ADA} — 이 광고에서 확인되는 것만 표시하세요.`, '광고 A 점검', pickCards(CHK, ['c1', 'c4', 'c5']))),
            IT(CL(`${ADB} — 이 안내에서 확인되는 것만 표시하세요.`, '안내 B 점검', CHKB),
              CL(`${ADB} — 이 안내에서 확인되는 것만 표시하세요.`, '안내 B 점검', pickCards(CHKB, ['b1', 'b3', 'b5']))),
            IT(OB('처음 보는 건강 정보를 확인하는 차례 카드를 놓으세요.', [{ id: 'o1', text: '누가 만들었는지 보기' }, { id: 'o2', text: '광고·협찬 표시 찾기' }, { id: 'o3', text: '근거 자료와 날짜 보기' }, { id: 'o4', text: '믿을 만한 곳에 다시 묻기' }], {}, [{ id: 'o5', text: '조회 수부터 세기' }]),
              OB('처음 보는 건강 정보를 확인하는 차례 카드 3장을 놓으세요.', [{ id: 'o1', text: '누가 만들었는지 보기' }, { id: 'o3', text: '근거 자료와 날짜 보기' }, { id: 'o4', text: '믿을 만한 곳에 다시 묻기' }]),
              null, { conclude: '누가 만들었나, 광고인가, 근거와 날짜가 있나, 믿을 만한 곳에 다시 물었나 — 네 질문으로 건강 정보를 걸러요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '광고 A와 안내 B를 견주어 써요.', columns: ['점검', '광고 A', '안내 B'], cells: [['누가 만들었나', '', ''], ['근거·날짜', '', '']], answer: '파는 회사(이름 없는 의사)·○○보건소, 없음·2026년 자료' }] },
      }),
      M('activity.rewrite', {
        title: '과장 광고 정직하게 고쳐 쓰기', method: '과장 광고를 정직한 문구로 고쳐 쓰고 기준표 점검', tool: 'rubric-writing', minutes: 15,
        levels: { easy: '문장 틀을 따라 두 문장으로 고쳐 쓰고 기준 2개를 점검한다.', base: '세 문장으로 고쳐 쓰고 기준 3개(과장 제거·출처·주의 사항)를 점검한다.', challenge: '세 문장으로 고쳐 쓴 뒤 짝의 글을 같은 기준표로 점검해 돌려준다.' },
        activity: {
          title: '과장 광고 정직하게 고쳐 쓰기', tool: 'rubric-writing',
          teacher: '"\'한 달이면 키 5cm, 누구나 효과\'를 거짓 없이 바꾸면 어떤 문장이 될까요?" 과장 신호에 밑줄을 그은 뒤 정직한 문구로 고쳐 쓰게 한다. "정직하게 쓰면 아무도 안 산다"는 학생에게 "속아서 산 사람은 다음에도 그 회사를 믿을까요?"라고 되묻는다. 정직한 광고에는 과장 대신 출처와 주의 사항이 들어간다는 점을 짚는다.',
          task: '가상 과장 광고를 정직한 문구로 고쳐 쓰고, 기준표(과장 제거·출처·주의 사항)로 스스로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '가상 광고 "한 달이면 키 5cm, 누구나 효과!"를 정직한 문구 세 문장으로 고쳐 쓰세요.', toolOptions: { topic: '가상 광고 "한 달이면 키 5cm, 누구나 효과!"를 정직한 문구 세 문장으로 고쳐 쓰세요.', minChars: 40, maxChars: 220, minSentences: 3, maxSentences: 4, title: '정직한 광고 1', placeholder: '예: 효과는 사람마다…' }, target: { selfCheck: ['즉시·완치·누구나 같은 과장을 뺐다', '정보의 출처를 밝혔다', '주의 사항을 넣었다'] } },
              { prompt: '틀을 따라 가상 광고를 두 문장으로 고쳐 쓰세요.', toolOptions: { starter: '효과는 사람마다 ___. 먹기 전에 ___와 상담하세요.', minSentences: 2, minChars: 20 }, target: { selfCheck: ['즉시·완치·누구나 같은 과장을 뺐다', '주의 사항을 넣었다'] } }),
            IT({ prompt: '가상 광고 "이 물 하나로 모든 병 끝!"을 정직한 문구 세 문장으로 고쳐 쓰세요.', toolOptions: { topic: '가상 광고 "이 물 하나로 모든 병 끝!"을 정직한 문구 세 문장으로 고쳐 쓰세요.', minChars: 40, maxChars: 220, minSentences: 3, maxSentences: 4, title: '정직한 광고 2', placeholder: '예: 이 물은 목마를 때…' }, target: { selfCheck: ['즉시·완치·누구나 같은 과장을 뺐다', '정보의 출처를 밝혔다', '주의 사항을 넣었다'] } },
              { prompt: '틀을 따라 가상 광고 "모든 병 끝!"을 두 문장으로 고쳐 쓰세요.', toolOptions: { starter: '이 물은 ___. 아플 때는 ___에 가세요.', minSentences: 2, minChars: 20 }, target: { selfCheck: ['즉시·완치·누구나 같은 과장을 뺐다', '주의 사항을 넣었다'] } }),
            IT({ prompt: '짝이 고쳐 쓴 광고를 읽고 기준표로 점검한 결과를 2~3문장으로 써 주세요.', toolOptions: { topic: '짝이 고쳐 쓴 광고를 기준표(과장 제거·출처·주의 사항)로 점검한 결과를 2~3문장으로 쓰세요(이름은 쓰지 않아요).', minChars: 25, maxChars: 200, minSentences: 2, maxSentences: 3, title: '짝 글 점검', lines: 4 }, target: { selfCheck: ['기준 세 가지를 모두 따져 보았다', '잘한 점을 하나 짚었다', '고칠 점을 하나 말했다'] } },
              { prompt: '짝이 고쳐 쓴 광고에서 잘한 점을 1~2문장으로 써 주세요.', toolOptions: { minSentences: 1, minChars: 10 }, target: { selfCheck: ['잘한 점을 하나 짚었다', '놀리는 말이 없다'] } },
              null, { conclude: '정직한 광고는 과장 대신 출처와 주의 사항을 담아요. 고쳐 써 보면 과장 신호가 더 잘 보여요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내가 고쳐 쓴 광고 문구 가운데 가장 정직한 한 문장을 옮겨 써요.' }] },
      }),

      // ---- 정리 ----
      M('wrap.media-web', {
        title: '믿을 정보 판단 생각 그물', method: '출처·근거·목적·날짜 생각 그물', tool: 'mindmap', minutes: 9,
        levels: { easy: '가지 두 개(출처·근거)에 질문 카드를 잇는다.', base: '가지 네 개(출처·근거·목적·날짜)에 질문 카드를 잇는다.', challenge: '가지 네 개에 잇고, 함정 카드를 남긴 뒤 오늘 본 예시를 활동지에 이어 쓴다.' },
        wrap: {
          teacher: '"건강 정보를 만났을 때 \'믿어도 될까?\' 가지에 어떤 질문을 달 수 있을까요?" 학생이 가지를 다 이으면 오늘 본 광고 A와 보건소 안내 B를 네 질문으로 다시 견주게 한다. "날짜는 상관없다"는 말에는 "몇 해 전 자료가 지금도 맞을까요?"라고 되묻는다. 수업 처음에 고른 믿음 눈금을 떠올리며 생각이 바뀌었는지 한 사람씩 말하게 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '믿어도 될까?', slots: ['출처', '근거', '목적', '날짜'], cards: [
              { id: 'a1', text: '누가 만들었나?' }, { id: 'b1', text: '연구 자료가 있나?' }, { id: 'c1', text: '무엇을 팔려 하나?' }, { id: 'd1', text: '언제 만든 자료인가?' }] },
              prompt: '질문 카드를 네 가지에 이어요.', target: { sort: { 출처: ['a1'], 근거: ['b1'], 목적: ['c1'], 날짜: ['d1'] } }, difficulty: 0.2 },
              { prompt: '질문 카드를 두 가지에 이어요.', toolOptions: { slots: ['출처', '근거'], cards: [{ id: 'a1', text: '누가 만들었나?' }, { id: 'b1', text: '연구 자료가 있나?' }] }, target: { sort: { 출처: ['a1'], 근거: ['b1'] } } },
              { prompt: '질문 카드를 네 가지에 잇고 함정 카드는 남겨요.', toolOptions: { cards: [
                { id: 'a1', text: '누가 만들었나?' }, { id: 'b1', text: '연구 자료가 있나?' }, { id: 'c1', text: '무엇을 팔려 하나?' }, { id: 'd1', text: '언제 만든 자료인가?' },
                { id: 't1', text: '조회 수가 많은가?' }, { id: 't2', text: '모델이 유명한가?' }] } }),
            { type: 'choice', prompt: '건강 정보를 믿을지 판단할 때 가장 먼저 볼 것은?', options: ['조회 수', '누가 만들었고 근거가 있는지', '모델의 인기'], answer: 1, difficulty: 0.15, explain: '출처와 근거가 있어야 믿을지 판단할 수 있어요.' },
            { type: 'short', prompt: '오늘 본 광고 하나를 네 질문(출처·근거·목적·날짜) 가운데 하나로 따져 한 문장으로 써요.' },
          ],
        },
        worksheet: {
          title: '믿어도 될까?',
          items: [
            { type: 'table', prompt: '네 질문을 써요.', columns: ['가지', '질문'], cells: [['출처', ''], ['근거', ''], ['목적', ''], ['날짜', '']], answer: '누가 만들었나, 자료가 있나, 무엇을 팔려 하나, 언제 만들었나' },
            { type: 'check', prompt: '다음에 건강 광고를 볼 때 할 일에 표시해요.', options: ['광고·협찬 표시 찾기', '출처와 날짜 보기', '궁금하면 보건 선생님께 묻기'] },
          ],
        },
      }),
      M('wrap.fact-poster', {
        title: '과장 광고 경고 카드', method: '과장 신호를 담은 경고 카드 꾸미기', tool: 'collage', minutes: 9,
        levels: { easy: '과장 신호 하나를 골라 경고 카드 바탕을 조각 3개 이상으로 꾸민다.', base: '과장 신호 세 가지(즉시·완치·누구나)를 활동지에 쓰고 조각 5개 이상으로 꾸민다.', challenge: '신호 세 가지와 확인 방법 하나를 함께 담고 점검 항목 4개를 표시한다.' },
        wrap: {
          teacher: '"우리 반 게시판에 붙일 경고 카드에 어떤 신호를 담으면 친구들이 광고를 볼 때 떠올릴까요?" 과장 신호와 확인 방법을 활동지에 쓴 뒤 조각으로 카드 바탕을 꾸미게 한다(교구에는 글자를 넣을 수 없다). "실제 회사 이름을 넣어 경고하자"는 의견에는 특정 회사·제품 이름 대신 신호를 쓰자고 말한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'collage', options: { maxPieces: 12, shapes: ['circle', 'square', 'rect', 'triangle', 'star', 'diamond'] }, prompt: '경고 카드 바탕을 조각으로 꾸미고 점검해요(신호 글은 활동지에 써요).', target: { selfCheck: ['신호 글을 놓을 자리를 비워 두었다', '과장 신호 세 가지를 활동지에 썼다', '특정 회사·제품 이름을 넣지 않았다'], minPieces: 5 }, difficulty: 0.2 },
              { prompt: '조각 3개 이상으로 경고 카드 바탕을 꾸미고 점검해요.', target: { selfCheck: ['신호 글을 놓을 자리를 비워 두었다', '과장 신호 하나를 골랐다'], minPieces: 3 } },
              { prompt: '신호 세 가지와 확인 방법을 담아 꾸미고 점검해요.', target: { selfCheck: ['신호 글을 놓을 자리를 비워 두었다', '과장 신호 세 가지를 활동지에 썼다', '특정 회사·제품 이름을 넣지 않았다', '확인 방법을 하나 더했다'], minPieces: 5 } }),
            { type: 'choice', prompt: '과장 신호 세 가지로 알맞은 것은?', options: ['즉시·완치·누구나', '출처·근거·날짜', '할인·배송·포장'], answer: 0, difficulty: 0.15, explain: '빠른 효과, 완치, 누구나를 약속하는 말이 과장 신호예요.' },
          ],
        },
        worksheet: {
          title: '과장 광고 경고 카드',
          items: [
            { type: 'short', prompt: '경고 카드에 넣을 과장 신호와 확인 방법을 써요.' },
            { type: 'check', prompt: '내 경고 카드를 점검해요.', options: ['신호가 분명하다', '확인 방법이 있다', '특정 회사 이름이 없다'] },
          ],
          easy: { note: '신호 하나만 골라도 돼요.', items: [{ type: 'choice', prompt: '경고 카드에 넣을 신호 하나를 골라요.', options: ['즉시', '완치', '누구나'], answer: '즉시' }] },
        },
        notes: '교구는 글자를 넣지 못해 카드 바탕만 꾸미고 글은 활동지에 쓰게 했다.',
      }),
    );
  }

  // ==== 7~9학년 · 보건의료 기관 이용과 건강 계획 (health.m.health-services) ====
  // 119·응급실은 saf-firstaid.m 과 같은 말("불러도 반응이 없으면 119")로만 쓰고, 처치 장면은 다루지 않는다.
  {
    const M = MK('health-services', G);
    const WHERE = [
      { id: 'w1', text: '수업 중 배가 살살 아프다', motif: 'cloud' },
      { id: 'w2', text: '산책하다 발목을 삐끗해 계속 부었다', motif: 'leaf' },
      { id: 'w3', text: '사람이 쓰러져 불러도 반응이 없다', motif: 'storm' },
    ];
    // 가상 동네 칸 지도 — 보건의료 기관
    const TOWN = { grid: [6, 4], title: '가상의 우리 동네 보건의료 기관', legend: false, places: [
      { name: '보건소', icon: 'office', at: [1, 0] }, { name: '동네 의원', icon: 'hospital', at: [4, 0] }, { name: '약국', icon: 'market', at: [3, 2] },
      { name: '응급실이 있는 병원', icon: 'city', at: [5, 3] }, { name: '학교', icon: 'school', at: [0, 3] }, { name: '공원', icon: 'park', at: [2, 3] },
    ] };
    const SYM = [
      { id: 'y1', text: '수업 중 갑자기 머리가 아프다', to: '보건실', why: '학교 안에서 갑자기 아프면 먼저 보건실에 가요.' },
      { id: 'y2', text: '체육 시간에 무릎이 살짝 까졌다', to: '보건실' },
      { id: 'y3', text: '감기약 먹는 법이 궁금하다', to: '약국', why: '약 먹는 법은 약사에게 물을 수 있어요.' },
      { id: 'y4', text: '기침이 일주일째 계속된다', to: '의원', why: '오래가는 증상은 의원에서 진료를 받아요.' },
      { id: 'y5', text: '피부에 두드러기가 며칠째 난다', to: '의원' },
      { id: 'y6', text: '불러도 반응이 없고 숨쉬기가 이상하다', to: '응급실', why: '반응이 없거나 숨쉬기가 이상하면 바로 119에 알려요.' },
      { id: 'y7', text: '연고 바르는 법이 궁금하다', to: '약국' },
      { id: 'y8', text: '심하게 다쳐 피가 멈추지 않는다', to: '응급실' },
    ];
    const PLACE4 = ['보건실', '약국', '의원', '응급실'];
    // 밤에 동생이 열이 나는 갈림길(깊이 3) — 수치·약 이름은 쓰지 않는다
    const D1 = { text: '밤 10시, 보호자가 잠깐 외출한 사이 동생이 열이 나고 힘들어한다. 동생은 말은 잘 하고 물도 마신다.', ask: '나는 어떻게 할까?', motif: 'moon', choices: [
      { id: 'er', text: '바로 혼자 동생을 데리고 응급실로 뛰어간다', result: '밤길에 둘이 헤매다 보호자와 연락이 엇갈린다.', impact: [{ who: '동생', text: '밤길에 더 지친다', tone: -1 }], why: '말을 잘 하고 물을 마시는 상태면, 먼저 보호자에게 알리고 상황을 살펴요.', ending: '먼저 알리지 않아 연락이 엇갈렸어요.' },
      { id: 'call', text: '보호자에게 바로 전화해 동생 상태를 알린다', result: '보호자가 "곧 갈게. 옆에서 상태를 살펴 줘"라고 한다.', impact: [{ who: '동생', text: '어른의 도움이 이어진다', tone: 1 }], end: '보호자에게 알렸어요. 기다리는 동안 할 일이 남았어요.',
        next: { text: '기다리는 동안 동생이 춥다며 떨고, 집에 해열제가 보인다.', ask: '기다리며 무엇을 할까?', choices: [
          { id: 'med', text: '내 판단으로 어른 약을 먹인다', result: '어떤 약을 얼마나 먹였는지 보호자가 알 수 없어 걱정한다.', impact: [{ who: '동생', text: '맞지 않는 약을 먹을 수 있다', tone: -1 }], why: '약은 어른이 확인하고 먹여요. 아이 약과 어른 약은 다를 수 있어요.' },
          { id: 'watch', text: '동생 곁에서 물을 주며 상태를 살피고 보호자와 통화를 이어 간다', result: '보호자가 오는 동안 동생이 조금 편해진다.', impact: [{ who: '동생', text: '혼자가 아니라 안심한다', tone: 1 }], end: '곁에서 살피며 연락을 이어 갔어요.',
            next: { text: '그런데 동생이 갑자기 불러도 반응이 흐려지고 숨쉬기를 힘들어한다.', ask: '이제 어떻게 할까?', choices: [
              { id: '119', text: '바로 119에 전화해 주소와 동생 상태를 말한다', result: '안내를 받으며 구급대를 기다리고, 보호자에게도 알린다.', impact: [{ who: '동생', text: '빠르게 도움을 받는다', tone: 1 }] },
              { id: 'wait', text: '보호자가 올 때까지 그냥 기다린다', result: '도움이 늦어진다.', impact: [{ who: '동생', text: '위험해질 수 있다', tone: -1 }], why: '반응이 흐리거나 숨쉬기가 힘들면 기다리지 않고 바로 119에 알려요.' }] } }] } },
      { id: 'sleep', text: '자고 나면 낫겠지 하고 그냥 둔다', result: '동생이 혼자 힘들어하는 것을 아무도 모른다.', impact: [{ who: '동생', text: '도움을 받지 못한다', tone: -1 }], why: '아픈 사람을 혼자 두지 않고 어른에게 알려요.', ending: '아무에게도 알리지 않았어요.' }] };
    const R1 = [{ id: 'r1', text: '먼저 보호자에게 알리고 곁에서 상태를 살핀다' }, { id: 'r2', text: '반응이 흐리거나 숨쉬기가 힘들면 바로 119' },
      { id: 'r3', text: '작은 증상도 무조건 응급실로 가야 한다', why: '응급실은 급하고 위험한 상황을 위한 곳이에요. 상태에 맞는 곳을 골라요.' }, { id: 'r4', text: '집에 있는 약은 아무나 먹여도 된다', why: '약은 어른이 확인하고 먹여요.' }];
    const R1M = { reasons: [{ id: 'r5', text: '119에는 주소와 상태를 차분히 말한다' }], ok: ['r5'] };
    const GOAL = [['3월', '같은 시각에 잠들기'], ['4월', '쉬는 시간마다 일어나 걷기'], ['5월', '아침밥 챙겨 먹기'], ['6월', '힘들 때 믿는 어른에게 말하기']];
    const SHOP = [
      { id: 'rope', text: '줄넘기', price: 5000 }, { id: 'shoe', text: '운동화 끈 새로 갈기', price: 3000 },
      { id: 'jelly', text: '광고 속 키 크는 젤리', price: 15000 }, { id: 'snack', text: '과자 묶음', price: 4000 },
      { id: 'water', text: '물병', price: 6000 }, { id: 'drink', text: '고카페인 음료', price: 3000 },
    ];
    const BUD = (prompt, items, budget, target, ask) => ({ prompt, toolOptions: { mode: 'budget', items, budget, ask }, target: { budget: target } });

    ALL.push(
      // ---- 도입 ----
      M('intro.where-story', {
        title: '아플 때 어디로 가나 장면', method: '증상 장면을 급한 차례로 놓기', tool: 'story', minutes: 6,
        levels: { easy: '장면 카드 2장(배 아픔·쓰러짐)을 덜 급한 것부터 놓는다.', base: '장면 카드 3장을 덜 급한 것부터 놓고 가야 할 곳을 말한다.', challenge: '장면 3장을 놓은 뒤 그곳을 고른 까닭을 한 줄씩 말한다.' },
        intro: {
          teacher: '"배가 살살 아플 때와 사람이 쓰러져 불러도 반응이 없을 때, 가야 할 곳이 같을까요?" 장면 카드 세 장을 띄우고 시연 단추로 덜 급한 장면부터 차례로 놓이는 모습을 보인다. "아프면 무조건 큰 병원 응급실"이라는 말에는 "배가 살살 아픈 일로 응급실에 가면 정말 급한 사람에게 무슨 일이 생길까요?"라고 되묻는다. 보건실·의원·119와 응급실은 하는 일이 다르다는 점을 짚는다. 학생 자신의 병력은 묻지 않는다.',
          student: '아픈 장면 카드를 덜 급한 것부터 차례로 놓고, 장면마다 어디로 가거나 누구에게 알릴지 말해요.',
          demo: { tool: 'story', options: { mode: 'order', slots: 3, title: '얼마나 급할까?', cards: [WHERE[2], WHERE[0], WHERE[1]] }, sequence: [{ order: WHERE.map((c) => c.id) }] },
          art: { draw: 'a paper-cut row of three small scenes — a student holding the stomach in class, a swollen ankle on a park path, a person lying down with a phone showing 119 — arranged from calm to urgent', banner: '어디로 가야 할까?', extra: [{ motif: 'house', x: 300, y: 96 }] },
        },
        notes: '\'쓰러짐\' 장면은 119에 알리는 데까지만 다루고 처치는 saf-firstaid.m 에 맡긴다. ' + SAFE_NOTE,
      }),
      M('intro.service-map', {
        title: '동네 보건의료 기관 지도', method: '동네 칸 지도에 보건의료 기관 핀', tool: 'map', minutes: 6,
        levels: { easy: '핀을 놓으면 장소 이름이 보이고, 약국·의원 두 곳에 핀을 꽂는다.', base: '이름 없이 보건소·의원·약국·응급실 네 곳에 핀을 꽂는다.', challenge: '네 곳에 핀을 꽂은 뒤 밤에도 열려 있을 곳이 어디인지 말하고 범례를 떠올린다.' },
        intro: {
          teacher: '"우리 동네에서 예방접종이나 건강 상담을 하는 곳, 진료를 받는 곳, 약을 사는 곳, 급할 때 가는 곳은 어디일까요?" 가상 동네 칸 지도를 띄우고 시연 단추로 네 곳에 핀이 꽂히는 모습을 보인다. "약국과 병원은 하는 일이 같다"는 말에는 "약국에서 진찰을 받을 수 있을까요?"라고 되묻는다. 밤에 문을 여는 곳은 동네마다 다르므로 실제로는 보호자와 함께 미리 알아 두자고 말한다.',
          student: '가상 동네 지도에서 보건소·의원·약국·응급실이 있는 병원을 찾아 보고, 곳마다 하는 일을 한 가지씩 말해요.',
          demo: { tool: 'map', options: TOWN, sequence: [{ place: '보건소' }, { place: '동네 의원' }, { place: '약국' }, { place: '응급실이 있는 병원' }] },
          art: { draw: 'a paper-cut neighborhood map seen from above with a public health center, a small clinic, a pharmacy and a hospital with an emergency sign, each marked by a paper pin', banner: '우리 동네 어디서 도움 받을까?', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
        },
        notes: '지도는 가상 동네다. 실제 기관 이름·운영 시간은 쓰지 않았다.',
      }),

      // ---- 활동 ----
      M('activity.service-sort', {
        title: '증상과 기관 바구니 잇기', method: '증상 카드를 보건실·약국·의원·응급실로 분류', tool: 'sortboard', minutes: 15,
        levels: { easy: '바구니 두 개(보건실·응급실)에 카드 4장을 나누고, 틀리면 바로 까닭을 들려준다.', base: '바구니 네 개에 카드 8장을 나눈다.', challenge: '카드 8장을 나눈 뒤, 애매한 카드(밤에 생긴 증상)를 고르기 문항에서 근거와 함께 판단한다.' },
        activity: {
          title: '증상과 기관 바구니 잇기', tool: 'sortboard',
          teacher: '"기침이 일주일째 계속되면 보건실일까요, 약국일까요, 의원일까요?" 카드를 바구니에 넣을 때마다 그곳에서 받을 수 있는 도움을 한 가지씩 말하게 한다. "작은 증상도 응급실이 가장 확실하다"는 학생에게 "응급실이 붐비면 정말 위급한 사람은 어떻게 될까요?"라고 되묻는다. 불러도 반응이 없거나 숨쉬기가 이상하면 기관을 고르기 전에 119에 먼저 알린다는 점을 짚는다. 학생 자신의 증상은 묻지 않는다.',
          task: '가상 증상 카드를 보건실·약국·의원·응급실 바구니에 나누고, 고른 까닭을 말해요.',
          levels: { easy: { instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SBX('증상 카드를 보건실·약국·의원·응급실 바구니에 나누세요.', PLACE4, SYM),
              SBX('증상 카드 4장을 보건실·응급실 바구니에 나누세요.', ['보건실', '응급실'], pickCards(SYM, ['y1', 'y2', 'y6', 'y8']))),
            IT(SBX('기관이 하는 일 카드를 그 기관 바구니에 넣으세요(함정 카드는 남겨요).', ['보건소', '의원', '약국', '응급실'], [
              { id: 'j1', text: '예방접종과 건강 상담을 한다', to: '보건소' }, { id: 'j2', text: '진찰하고 처방전을 써 준다', to: '의원' },
              { id: 'j3', text: '약을 짓고 먹는 법을 알려 준다', to: '약국' }, { id: 'j4', text: '위급한 환자를 바로 돌본다', to: '응급실' },
              { id: 'j5', text: '아무 때나 무료로 약을 나눠 준다' }]),
              SBX('기관이 하는 일 카드 2장을 그 기관 바구니에 넣으세요.', ['약국', '응급실'], [
                { id: 'j3', text: '약을 짓고 먹는 법을 알려 준다', to: '약국' }, { id: 'j4', text: '위급한 환자를 바로 돌본다', to: '응급실' }])),
            IT(SBX('밤에 생긴 일을 알맞은 행동 바구니에 나누세요.', ['바로 119', '보호자에게 알리고 살피기'], [
              { id: 'n1', text: '피가 금방 멈춘 무릎 긁힘', to: '보호자에게 알리고 살피기' }, { id: 'n2', text: '불러도 대답이 없음', to: '바로 119' },
              { id: 'n3', text: '살짝 콧물과 재채기', to: '보호자에게 알리고 살피기' }, { id: 'n4', text: '갑자기 숨쉬기를 몹시 힘들어함', to: '바로 119' }]),
              null,
              { prompt: '밤에 생긴 일을 나누세요. 애매한 카드는 "말은 잘 하는가"를 근거로 판단해요.', toolOptions: { more: [{ id: 'n5', text: '속이 더부룩하지만 말은 잘 함' }] }, target: { sort: { '바로 119': ['n2', 'n4'], '보호자에게 알리고 살피기': ['n1', 'n3', 'n5'] } } },
              { conclude: '증상에 맞는 곳을 고르면 나도 빨리 돕고 정말 급한 사람도 지켜요. 반응이 없거나 숨쉬기가 이상하면 먼저 119예요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '기관마다 가는 때를 써요.', columns: ['기관', '언제 갈까'], cells: [['보건실', ''], ['약국', ''], ['의원', ''], ['응급실', '']], answer: '학교에서 갑자기 아플 때, 약 먹는 법이 궁금할 때, 증상이 오래갈 때, 위급할 때(먼저 119)' }],
          easy: [{ type: 'choice', prompt: '불러도 반응이 없는 사람을 보면?', options: ['바로 119에 알린다', '내일 의원에 간다'], answer: '바로 119에 알린다' }] },
        notes: SAFE_NOTE,
      }),
      M('activity.night-dilemma', {
        title: '밤에 열 나는 동생 갈림길', method: '밤에 아픈 동생 갈림길에서 결과 따라가기', tool: 'dilemma', minutes: 15,
        levels: { easy: '갈림길 1번에서 고르고 결과를 본다.', base: '갈림길 2번(기다리며 할 일)까지 가 보고 근거 카드를 고른다.', challenge: '갈림길 3번(상태가 나빠질 때)까지 가고, 119에 말할 내용의 근거까지 고른다.' },
        activity: {
          title: '밤에 열 나는 동생 갈림길', tool: 'dilemma',
          teacher: '"동생이 열이 나지만 말도 잘 하고 물도 마셔요. 지금 당장 응급실로 뛰어가야 할까요?" 학생마다 한 길을 끝까지 가 본 뒤, 되돌아가 다른 길과 견주게 한다. "약을 먹이면 빨리 낫는다"는 학생에게 "어른 약과 아이 약은 같을까요? 누가 확인해야 할까요?"라고 되묻는다. 상태가 갑자기 나빠지면(반응이 흐림·숨쉬기 힘듦) 기다리지 않고 119에 알린다는 기준을 짚는다. 장면은 가상이며 학생 가정의 사정은 묻지 않는다.',
          task: '밤에 보호자가 없는 사이 동생이 열이 나는 가상 상황에서 길을 골라 결과를 따라가고, 내 선택의 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '밤에 동생이 열이 나요. 한 번 골라 결과를 보세요.', base: '밤에 동생이 열이 나요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '밤에 동생이 열이 나요. 세 번 골라 끝까지 가고, 119에 말할 내용의 근거도 고르세요.' },
              '밤에 아픈 동생', D1, [['call', 'watch', '119']], R1, ['r1', 'r2'], {}, R1M),
            IT({ prompt: '119에 전화가 연결됐어요. 가장 먼저 할 말을 고르세요.', toolOptions: { title: '119 연결', scene: { text: '119에 전화가 연결되자 상담원이 "무슨 일이세요?"라고 묻는다.', ask: '먼저 무엇을 말할까?', motif: 'house', choices: [
              { id: 'addr', text: '주소와 "동생이 반응이 흐리고 숨쉬기 힘들어요"를 차분히 말한다', result: '상담원이 위치를 확인하고 할 일을 안내한다.', impact: [{ who: '동생', text: '도움이 빨리 온다', tone: 1 }] },
              { id: 'hang', text: '"빨리 와 주세요!"라고만 하고 끊는다', result: '어디로 가야 할지 다시 확인하느라 시간이 걸린다.', impact: [{ who: '동생', text: '도움이 늦어진다', tone: -1 }], why: '어디인지, 누가 어떤 상태인지 말하고 안내가 끝날 때까지 끊지 않아요.' }] }, reasons: [], compare: true }, target: { path: [['addr']] } }),
            IT({ prompt: '보호자가 돌아와 동생 상태를 물어요. 가장 도움이 되는 대답을 고르세요.', toolOptions: { title: '보호자에게 알리기', scene: { text: '보호자가 돌아와 "동생 어땠어?"라고 묻는다.', ask: '어떻게 답할까?', motif: 'house', choices: [
              { id: 'info', text: '언제부터 열이 났는지, 무엇을 마셨는지, 약은 안 먹였다는 것을 차례로 말한다', result: '보호자가 상태를 바로 알고 다음 일을 정한다.', impact: [{ who: '동생', text: '알맞은 돌봄을 받는다', tone: 1 }] },
              { id: 'vague', text: '"그냥 좀 아팠어"라고만 말한다', result: '보호자가 무슨 일이 있었는지 다시 하나하나 물어야 한다.', impact: [{ who: '동생', text: '돌봄이 늦어진다', tone: -1 }], why: '언제부터·무엇을·무엇을 했는지 알려 주면 어른이 빨리 판단해요.' }] }, reasons: [], compare: true }, target: { path: [['info']] } },
              null, null, { conclude: '아픈 사람은 혼자 두지 않고 먼저 어른에게 알려요. 반응이 흐리거나 숨쉬기가 힘들면 기다리지 말고 119예요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '동생이 열이 나지만 말을 잘 하고 물을 마실 때 먼저 할 일은?', options: ['혼자 응급실로 간다', '보호자에게 알리고 곁에서 살핀다', '어른 약을 먹인다'], answer: '보호자에게 알리고 곁에서 살핀다' }] },
        notes: '열의 정도(숫자)·약 이름·약 양은 쓰지 않았다. ' + SAFE_NOTE,
      }),
      M('activity.goal-plan', {
        title: '한 학기 건강 목표 월별 칸', method: '건강 목표 카드를 월별 칸에 놓기', tool: 'kitchen', minutes: 15,
        levels: { easy: '칸 두 개(3월·4월)에 목표 카드를 하나씩 놓는다.', base: '칸 네 개(3~6월)에 수면·운동·식습관·마음 목표를 하나씩 놓는다.', challenge: '네 칸에 놓은 뒤, 목표마다 점검 방법 카드를 짝짓는다.' },
        activity: {
          title: '한 학기 건강 목표 월별 칸', tool: 'kitchen',
          teacher: '"한 달에 목표 하나씩, 무엇부터 바꾸면 다음 목표가 쉬워질까요?" 가상 학생 다온의 계획표를 함께 보며 목표 카드를 월별 칸에 놓게 한다. "목표는 크게 잡아야 멋있다"는 학생에게 "\'건강해지기\'와 \'같은 시각에 잠들기\' 가운데 지켰는지 확인할 수 있는 것은 무엇일까요?"라고 되묻는다. 목표는 지켰는지 확인할 수 있는 행동으로 쓴다는 점을 짚는다. 학생 자신의 몸무게·건강 수치는 목표로 쓰지 않는다.',
          task: '가상 학생 다온의 한 학기 건강 목표 카드(수면·운동·식습관·마음)를 월별 칸에 놓고, 점검 방법을 정해요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            IT(MB('다온의 건강 목표 카드를 월별 칸에 하나씩 놓으세요(카드에 적힌 달대로).', GOAL.map((g) => [g[0], `${g[0]}: ${g[1]}`]), ['아무 때나 몰아서 하기'], { groups: false }),
              MB('다온의 건강 목표 카드를 3월·4월 칸에 놓으세요.', GOAL.slice(0, 2).map((g) => [g[0], `${g[0]}: ${g[1]}`]), [], { groups: false })),
            IT(SB('목표 카드를 수면·운동·식습관·마음 칸에 나누세요.', ['수면', '운동', '식습관', '마음'], [
              { id: 'g1', text: '같은 시각에 잠들기', to: '수면' }, { id: 'g2', text: '쉬는 시간마다 일어나 걷기', to: '운동' },
              { id: 'g3', text: '아침밥 챙겨 먹기', to: '식습관' }, { id: 'g4', text: '힘들 때 믿는 어른에게 말하기', to: '마음' },
              { id: 'g5', text: '몸무게를 매일 재서 줄이기' }], { groups: false }),
              SB('목표 카드를 수면·운동 칸에 나누세요.', ['수면', '운동'], [
                { id: 'g1', text: '같은 시각에 잠들기', to: '수면' }, { id: 'g2', text: '쉬는 시간마다 일어나 걷기', to: '운동' }], { groups: false })),
            IT(MB('목표마다 지켰는지 알 수 있는 점검 방법을 이어 보세요.', [['같은 시각에 잠들기', '달력에 잠든 시각 표시'], ['쉬는 시간 걷기', '하루 걸은 쉬는 시간 세기'], ['아침밥 챙겨 먹기', '먹은 날 스티커 붙이기']], ['기분 내키면 하기'], { groups: false }),
              MB('목표 두 개의 점검 방법을 이어 보세요.', [['같은 시각에 잠들기', '달력에 잠든 시각 표시'], ['아침밥 챙겨 먹기', '먹은 날 스티커 붙이기']], [], { groups: false }),
              null, { conclude: '건강 목표는 지켰는지 확인할 수 있는 행동으로 쓰고, 한 번에 하나씩, 점검 방법과 함께 세워요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '한 학기 건강 목표를 월별로 써요(몸무게·건강 수치는 쓰지 않아요).', columns: ['달', '목표'], cells: [['3월', ''], ['4월', ''], ['5월', ''], ['6월', '']], answer: '(예) 같은 시각에 잠들기, 쉬는 시간 걷기, 아침밥, 믿는 어른에게 말하기' }] },
        notes: '\'몸무게 매일 재서 줄이기\'는 함정 카드다 — 몸을 숫자로 평가하지 않는다. ' + SAFE_NOTE,
      }),
      M('activity.budget', {
        title: '건강 지키기 용돈 쓰기', method: '가상 용돈으로 건강 비용 고르기', tool: 'economy', minutes: 15,
        levels: { easy: '물건 2개를 예산 안에서 고른다(광고 젤리는 빼고).', base: '물건 3개를 예산 안에서 골라 건강 효과를 견준다.', challenge: '물건 3개를 고른 뒤, 돈이 들지 않는 대안을 고르기 문항에서 찾는다.' },
        activity: {
          title: '건강 지키기 용돈 쓰기', tool: 'economy',
          teacher: '"가상 학생 다온에게 용돈 2만 원이 있어요. 광고 속 키 크는 젤리 한 통과 줄넘기·물병, 어느 쪽이 다온의 건강 계획에 더 쓸모 있을까요?" 학생이 고를 때마다 그 물건이 어떤 건강 목표와 이어지는지 말하게 한다. "비쌀수록 몸에 좋다"는 학생에게 "가격과 효과의 근거는 같은 것일까요?"라고 되묻는다. 값은 수업용 가상 값이고, 걷기·계단 오르기처럼 돈이 들지 않는 방법도 있다는 점을 짚는다. 학생 집의 용돈·형편은 묻지 않는다.',
          task: '가상 용돈 안에서 다온의 건강 계획에 쓸모 있는 물건을 고르고, 광고 제품과 견주어 까닭을 말해요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(BUD('2만 원 안에서 다온의 운동 목표에 쓸 물건을 3개 고르세요(광고 젤리·고카페인 음료는 빼요).', SHOP, 20000, { count: 3, not: ['jelly', 'drink'] }, '가상 용돈 2만 원'),
              BUD('2만 원 안에서 다온의 운동 목표에 쓸 물건을 2개 고르세요(광고 젤리는 빼요).', SHOP, 20000, { count: 2, not: ['jelly', 'drink'] }, '가상 용돈 2만 원')),
            IT(BUD('1만 원만 남았어요. 줄넘기를 꼭 넣어 운동 목표에 쓸 물건만 고르세요.', SHOP, 10000, { must: ['rope'], not: ['jelly', 'drink', 'snack'] }, '가상 용돈 1만 원')),
            IT({ prompt: '줄넘기를 사기 어려운 날, 돈 들지 않는 운동 대안을 고르세요.', toolOptions: { mode: 'pick', basket: '돈 들지 않는 대안', cards: [{ id: 'f1', text: '계단으로 오르내리기' }, { id: 'f2', text: '공원 한 바퀴 걷기' }, { id: 'f3', text: '광고 젤리 한 통 사기' }, { id: 'f4', text: '유료 앱 결제하기' }] }, target: { pick: ['f1', 'f2'] } },
              null, null, { conclude: '건강 계획에 쓸 돈은 근거 있는 쓸모를 따져 쓰고, 돈이 들지 않는 방법도 함께 찾아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '고른 물건과 이어지는 건강 목표를 써요.', columns: ['물건', '건강 목표'], cells: [['', ''], ['', '']], answer: '(예) 줄넘기·운동, 물병·물 자주 마시기' }] },
        notes: '값은 수업용 가상 값이다. 광고 젤리는 확인되지 않은 효과를 내세운 가상 제품으로, 어떤 건강식품·보충제도 권하지 않는다. ' + SAFE_NOTE,
      }),

      // ---- 정리 ----
      M('wrap.plan-write', {
        title: '나의 건강 계획서 쓰기', method: '건강 계획서 쓰고 기준표 점검', tool: 'rubric-writing', minutes: 9,
        levels: { easy: '문장 틀을 따라 세 문장으로 쓰고 기준 3개를 점검한다.', base: '네 문장으로 쓰고 기준 4개(목표·방법·점검·도움 받을 곳)를 점검한다.', challenge: '네 문장에 장애물과 대책 한 문장을 더하고 기준 5개를 점검한다.' },
        wrap: {
          teacher: '"\'건강해지겠다\'는 계획과 \'3월에는 밤 11시 전에 잠들고, 달력에 표시하고, 힘들면 보건 선생님께 묻겠다\'는 계획 가운데 지키기 쉬운 것은 무엇일까요?" 두 계획을 견주어 읽은 뒤 나의 건강 계획서를 쓰게 한다. "몸무게 목표를 쓰면 된다"는 학생에게 "행동 목표와 숫자 목표 가운데 내가 오늘 할 수 있는 것은 무엇일까요?"라고 되묻는다. 몸무게·병력 같은 개인 건강 정보는 쓰지 않게 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'rubric-writing', options: { topic: '한 학기 나의 건강 계획을 네 문장으로 쓰세요(몸무게·병력은 쓰지 않아요).', minChars: 50, maxChars: 260, minSentences: 4, maxSentences: 5, title: '나의 건강 계획서', placeholder: '예: 3월에는…' },
              prompt: '건강 계획을 네 문장으로 쓰고 기준표에 스스로 표시해요.', target: { selfCheck: ['확인할 수 있는 행동 목표를 썼다', '실천 방법을 썼다', '점검 방법을 썼다', '도움 받을 곳을 썼다'] }, difficulty: 0.3 },
              { prompt: '문장 틀을 따라 건강 계획을 세 문장으로 쓰고 기준표에 표시해요.', toolOptions: { starter: '나의 목표는 ___. 이를 위해 ___. 힘들면 ___에 도움을 청한다.', minSentences: 3, minChars: 35 }, target: { selfCheck: ['확인할 수 있는 행동 목표를 썼다', '실천 방법을 썼다', '도움 받을 곳을 썼다'] } },
              { prompt: '네 문장에 장애물과 대책 한 문장을 더해 쓰고 기준표에 표시해요.', toolOptions: { minSentences: 5, maxSentences: 6 }, target: { selfCheck: ['확인할 수 있는 행동 목표를 썼다', '실천 방법을 썼다', '점검 방법을 썼다', '도움 받을 곳을 썼다', '장애물과 대책을 썼다'] } }),
            { type: 'choice', prompt: '지켰는지 확인하기 쉬운 건강 목표는?', options: ['건강해지기', '쉬는 시간마다 일어나 걷기', '몸매 바꾸기'], answer: 1, difficulty: 0.15, explain: '구체적인 행동 목표여야 지켰는지 확인할 수 있어요.' },
            { type: 'mood', prompt: '오늘 수업을 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '나의 건강 계획서',
          items: [
            { type: 'short', prompt: '한 학기 건강 계획을 네 문장으로 써요(목표·방법·점검·도움 받을 곳).' },
            { type: 'check', prompt: '내 계획서를 기준표로 점검해요.', options: ['행동 목표다', '방법이 있다', '점검 방법이 있다', '도움 받을 곳이 있다'] },
          ],
          easy: { note: '"나의 목표는 ___. 이를 위해 ___. 힘들면 ___에 도움을 청한다." 틀을 써도 돼요.', items: [{ type: 'blank', prompt: '틀을 채워 써요.', text: '나의 목표는 ___. 이를 위해 ___. 힘들면 ___에 도움을 청한다.', answer: '(예) 같은 시각에 잠들기, 밤 10시 반에 화면 끄기, 보건실' }] },
        },
      }),
      M('wrap.plan-timer', {
        title: '첫 주 실천 스스로 점검', method: '첫 주 할 일 스스로 점검 목록', tool: 'timer', minutes: 9,
        levels: { easy: '첫 주에 할 일 2개를 스스로 점검 목록에 표시한다.', base: '첫 주에 할 일 3개를 표시한다.', challenge: '할 일 3개를 표시한 뒤 짝과 서로의 목록을 읽고 점검 방법을 하나씩 말해 준다.' },
        wrap: {
          teacher: '"계획서는 다 썼어요. 이번 주 월요일에 바로 할 수 있는 일은 무엇일까요?" 스스로 점검 목록을 하나씩 읽고, 이번 주에 해 볼 일에 표시하게 한다. "계획을 세웠으니 다 됐다"는 말에는 "계획서가 서랍에만 있으면 무엇이 달라질까요?"라고 되묻는다. 점검 목록은 다짐을 표시하는 것이지 채점이 아니며, 표시한 내용은 다른 친구와 견주지 않는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'timer', options: { title: '첫 주 실천 다짐' }, prompt: '이번 주에 해 볼 일에 스스로 표시해요.', target: { selfCheck: ['계획서를 잘 보이는 곳에 붙인다', '첫 목표를 하루 한 번 해 본다', '하루 끝에 달력에 표시한다'] }, difficulty: 0.1 },
              { prompt: '이번 주에 해 볼 일 두 가지에 스스로 표시해요.', target: { selfCheck: ['계획서를 잘 보이는 곳에 붙인다', '첫 목표를 하루 한 번 해 본다'] } },
              { prompt: '이번 주에 해 볼 일에 표시하고, 짝과 서로 점검할 약속에도 표시해요.', target: { selfCheck: ['계획서를 잘 보이는 곳에 붙인다', '첫 목표를 하루 한 번 해 본다', '하루 끝에 달력에 표시한다', '금요일에 짝과 서로 점검 방법을 말해 준다'] } }),
            { type: 'choice', prompt: '계획을 지키기 어려운 날 할 수 있는 일로 알맞은 것은?', options: ['계획을 바로 버린다', '목표를 작게 줄여 다시 해 본다', '아무에게도 말하지 않는다'], answer: 1, difficulty: 0.15, explain: '어려우면 목표를 작게 줄이고, 필요하면 보건 선생님께 도움을 청해요.' },
          ],
        },
        worksheet: {
          title: '첫 주 실천 점검',
          items: [
            { type: 'table', prompt: '첫 주에 할 일과 점검 방법을 써요.', columns: ['할 일', '점검 방법'], cells: [['', ''], ['', '']], answer: '(예) 같은 시각에 잠들기·달력 표시' },
            { type: 'check', prompt: '이번 주 다짐에 표시해요.', options: ['계획서를 붙인다', '하루 한 번 해 본다', '하루 끝에 표시한다'] },
          ],
        },
        notes: '스스로 점검은 다짐 표시이며 학생의 건강 상태를 기록·채점하지 않는다.',
      }),
    );
  }


  PaperLessons.registerModules(ALL);
})();
