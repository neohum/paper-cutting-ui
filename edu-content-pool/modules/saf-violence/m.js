/* 창체 안전교육 폭력예방 및 신변보호 — 중학교(7~9학년) 모듈 내용(edu-module.v1). 작성 규칙: MODULES_BUILD.md, 계획: framework/safety-a.json 의 saf-violence 중.
 * 근거: 「학교안전교육 실시 기준 등에 관한 고시」(교육부고시 제2023-33호) 별표 2 중학교 폭력예방 및 신변보호 항목
 *   (학교폭력의 유형과 현황 및 위험성 인식하기 / 학교 폭력 유형별 신고·대처방법 알기 / 자살예방 및 스트레스 점검과 해소 방법 알기 /
 *    가족과 올바른 의사소통방법과 가정폭력 피해자 지원 제도 알기(아동학대 포함) / 성폭력 대처예방 및 대처법 알기 / 성매매의 위험성 인식하기 / 7. 자살 에방 및 생명존중 교육)
 *   + 학교 안전교육 7대 표준안 폭력·신변안전 소분류. 주제마다 source 는 체계도에 있다.
 * 주제 15개 × 8모듈 = 120모듈. 7학년 5주제(유형·신고 경로·스트레스·가족 대화·경계), 8학년 5주제(단톡방·주변인·디지털 동의·유인·위기 신호),
 *   9학년 5주제(법의 범위·사이버 대응·마음 돌봄·가정폭력 지원·2차 피해).
 * 지킨 틀: 피해 경험을 묻지 않는다(가상 인물·가상 장면만, 가명 두 글자). 장면은 자극적이거나 자세하지 않게 쓴다(사건 내용 묘사 없음).
 *   잘못은 늘 가해자에게 있고 말한 사람은 잘한 것이라는 틀 — 피해자 탓 문장은 '2차 피해'·'오해' 칸이나 틀린 보기로만 나오고 늘 바로잡는다.
 *   자살예방은 방법·도구·장소를 말하지 않는다. 도움처는 체계도 concepts 의 번호·기관만: 112·117·1388·담임/상담 선생님·Wee 클래스·청소년상담복지센터
 *   (119 는 report-route.activity.match 계획 글(brief)에 있는 '다쳤을 때' 칸에만 쓴다). 자료·그래프 수치는 모두 가상 설문·가상 기록이고 화면에 '가상'이라고 밝힌다.
 *
 * 사람 확인: 근거 파일(research-*.md)에 없는 일반 수칙·사실 문장. 확인처를 함께 적는다.
 *   - report-route.activity.myth / wrap: "학교는 알린 학생을 보호하고 보복도 학교폭력으로 다룬다", "알린 사람의 이야기는 함부로 알리지 않게 되어 있다" — 학교폭력예방법(신고자 보호·비밀누설 금지·보복행위 금지) 원문, 교육부 학교폭력 사안처리 가이드북
 *   - report-route 전반·cyber-response: "117 은 학교폭력 신고·상담을 함께 받고 작아 보이는 일도 상담한다" — 경찰청 117 학교폭력 신고센터 안내
 *   - report-route.activity.match: 112(지금 위험·범죄)·119(다쳤을 때)·117·담임/상담 선생님 갈래 — 경찰청·소방청·교육부 안내
 *   - family-talk·family-support: "1388 은 청소년 상담 전화", "청소년상담복지센터와 이어진다" — 여성가족부·한국청소년상담복지개발원 안내
 *   - family-talk.activity.signs·family-support: 훈육이라도 때리거나 위협해 다치게 하면 보호가 필요한 일(아동학대), 아동학대가 의심되면 주변 사람도 알릴 수 있다,
 *     "보호는 아이의 안전에 맞춰 정해지고 상담·지원을 받으며 함께 지내는 경우도 있다", 신고 뒤 흐름(알림 → 안전 확인 → 상담 → 보호·지원) — 아동복지법·아동학대처벌법 원문, 보건복지부·아동권리보장원 안내
 *   - digital-consent: "동의 없는 촬영·유포(전달 포함)는 범죄가 될 수 있다", "합성해 돌리는 것도 해당", "학교·경찰(112)에 알리면 신고·삭제 도움으로 이어질 수 있다" — 성폭력처벌법 원문, 여성가족부 디지털성범죄피해자지원센터 안내
 *   - lure-risk: "청소년은 보호받아야 할 대상이고 대가를 노린 선물은 갚을 책임이 없다", 유인 단계(칭찬 → 비밀 → 선물 → 개인 정보·만남 요구) — 청소년성보호법 원문, 여성가족부 온라인 그루밍 예방 안내
 *   - life-signal·care-plan: 관심이 필요한 신호 목록(말·행동·감정 변화), "생명과 관련될 수 있는 비밀은 지키지 않고 어른에게 잇는다", 안전한 캠페인 표현(방법을 말하지 않기·희망과 도움 경로) — 보건복지부·한국생명존중희망재단 생명지킴이 교육·자살보도 권고기준
 *   - stress-check.activity.breath: 들이쉬기 5초·내쉬기 7초·5번은 수업 연습 약속 값(근거 수치 아님) — 화면에 '우리 반 연습 약속'으로 밝힘
 *   - harm-law: 학교폭력 정의를 쉬운 말로 옮긴 문장("학교 안팎에서 학생을 대상으로 … 몸·마음·재산에 피해", 사이버 따돌림 포함), "학교의 조치가 기록으로 남는다" — 학교폭력예방법 정의 조항 원문, 교육부 가이드북
 *   - cyber-response: 증거 남기기(화면·날짜·방 이름)를 차단보다 먼저, 앱 설정 이름 — 방송통신위원회·경찰청 사이버폭력 대응 안내(앱 메뉴 이름은 앱마다 다름)
 *   - second-harm: 2차 피해의 예(소문·탓하기·신상 캐기)와 지지하는 말 — 여성가족부 성폭력 2차 피해 방지 안내
 */
(function () {
  const ALL = [];
  // 주제마다 공통 칸을 채우는 모듈 틀. sid = '<intro|activity|wrap>.<이름>'
  const MK = (topic, grades) => (sid, o) => Object.assign({ id: `saf-violence.m.${topic}.${sid}`, schema: 'edu-module.v1', type: sid.split('.')[0], domain: 'saf-violence', band: '중', topic: `saf-violence.m.${topic}`, grades }, o);
  const sid = (s) => (typeof s === 'string' ? s : s.id || s.label);

  // ---- 카드 판 문항 조각: { prompt, toolOptions, target } 을 돌려준다(문항 levels[단계] 에도 그대로 쓴다) ----
  // 나누기: cards [{ id, text, to: 칸id }] — to 가 없으면 남겨야 하는 함정 카드
  const strip = (cards) => cards.map((c) => { const x = Object.assign({}, c); delete x.to; delete x.ok; return x; });
  const SB = (prompt, slots, cards, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'sort', slots, cards: strip(cards) }, opt), target: { sort: Object.fromEntries(slots.map((s) => [sid(s), cards.filter((c) => c.to === sid(s)).map((c) => c.id)])) } });
  // 차례: cards 를 바른 차례로 적는다(화면에서는 섞여 나온다). trap = 끼워 둔 함정 카드(차례 칸에 넣지 않음)
  const OB = (prompt, cards, opt, trap) => ({ prompt, toolOptions: Object.assign({ mode: 'order', slots: cards.length, cards: [...cards, ...(trap || [])] }, opt), target: { order: cards.map((c) => c.id) } });
  // 짝: pairs [[칸 글, 카드 글]] + 함정 카드 글
  const MB = (prompt, pairs, extra, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'match', slots: pairs.map((p, i) => ({ id: `s${i + 1}`, label: p[0] })), cards: [...pairs.map((p, i) => ({ id: `k${i + 1}`, text: p[1] })), ...(extra || []).map((t, i) => ({ id: `x${i + 1}`, text: t }))] }, opt), target: { match: Object.fromEntries(pairs.map((p, i) => [`s${i + 1}`, `k${i + 1}`])) } });
  // 빈칸: pairs [['…___…', 카드 글]] — 칸 하나에 카드 한 장. who 를 주면 말풍선 인물(story fill)
  const FB = (prompt, pairs, extra, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'fill', slots: pairs.map((p, i) => Object.assign({ id: `f${i + 1}`, label: p[0] }, p[2] ? { who: p[2] } : {}, p[3] ? { motif: p[3] } : {})), cards: [...pairs.map((p, i) => ({ id: `w${i + 1}`, text: p[1] })), ...(extra || []).map((t, i) => ({ id: `y${i + 1}`, text: t }))] }, opt), target: { fill: Object.fromEntries(pairs.map((p, i) => [`f${i + 1}`, `w${i + 1}`])) } });
  // 고르기: cards [{ id, text, ok }] — ok 인 카드만 바구니에
  const PB = (prompt, basket, cards, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'pick', basket, cards: strip(cards) }, opt), target: { pick: cards.filter((c) => c.ok).map((c) => c.id) } });
  // 점검표(kitchen checklist): items [{ id, text, ok }] — ok 인 것만 표시해야 맞음
  const CL = (prompt, title, items, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'checklist', title, items: strip(items) }, opt), target: { checklist: items.filter((c) => c.ok).map((c) => c.id) } });
  // 문항 = 기본 조각 + 단계별 조각
  const IT = (base, easy, challenge, more) => Object.assign({}, base, { levels: Object.assign({}, easy ? { easy } : {}, challenge ? { challenge } : {}) }, more);
  const pickCards = (cards, ids) => ids.map((i) => cards.find((c) => c.id === i));
  // 출구 질문 교구 문항: 조각 → { type: 'tool', tool, prompt, options, target }
  const X = (tool, frag, more) => Object.assign({ type: 'tool', tool, prompt: frag.prompt, options: frag.toolOptions, target: frag.target }, more);

  // ---- 갈림길(dilemma): 깊이 3 나무 하나로 쉬움(갈림 2번)·기본(갈림 3번)·도전(갈림 3번 + 근거 더) 판을 만든다 ----
  // 선택에 next 가 있으면 end = 그 단계에서 잘렸을 때 보일 마무리 글
  const cut = (sc, d) => Object.assign({}, sc, { choices: sc.choices.map((c) => {
    const x = Object.assign({}, c); delete x.end;
    if (c.next && d > 1) x.next = cut(c.next, d - 1);
    else { delete x.next; if (c.next) x.ending = c.end || '다음 단계에서 이어지는 장면을 따라가 봐요.'; }
    return x;
  }) });
  // good = 도전 단계의 바른 길 목록 [[a, b, c], [d]] — 단계마다 그 깊이까지 자른다
  const paths = (good, d) => { const out = []; for (const g of good) { const p = g.slice(0, d); if (!out.some((q) => q.join('>') === p.join('>'))) out.push(p); } return out; };
  // p = { easy, base, challenge } 문항 글, R = 근거 카드, ok = 맞는 근거 id, more = { reasons, ok } 도전에만 더할 근거
  // 쉬움: 갈림 2번 + 영향(도움·피해) 단서가 고르는 즉시 보임 / 기본: 갈림 3번, 단서는 맞힌 뒤에만 / 도전: 기본 + 견주기 근거 카드
  const DIL = (p, title, tree, good, R, ok, more, extra) => Object.assign({
    prompt: p.base, toolOptions: { title, scene: cut(tree, 3), reasons: R, compare: true, revealAfterCheck: true }, target: { path: paths(good, 3), reasons: ok, some: true },
    levels: {
      easy: { prompt: p.easy, toolOptions: { scene: cut(tree, 2), revealAfterCheck: false }, target: { path: paths(good, 2), reasons: ok, some: true } },
      challenge: { prompt: p.challenge, toolOptions: { reasons: [...R, ...((more && more.reasons) || [])] }, target: { path: paths(good, 3), reasons: [...ok, ...((more && more.ok) || [])], some: true } },
    },
  }, extra);
  // 도입 시연용 갈림길: 깊이 d 판 + 바른 길 하나
  const DEMO_DIL = (title, tree, good, R, d) => ({ tool: 'dilemma', options: { title, scene: cut(tree, d || 2), reasons: R || [] }, sequence: [{ path: paths(good, d || 2)[0], reasons: R && R.length ? [R[0].id] : [] }] });

  // ---- 칸 지도 ----
  const PIN = (prompt, opt, target, more) => Object.assign({ prompt, toolOptions: opt, target }, more);
  // ---- 그래프 읽기 ----
  const RD = (prompt, opt, target) => ({ prompt, toolOptions: Object.assign({ mode: 'read' }, opt), target });

  // 이 영역에서 늘 쓰는 도움처(체계도 concepts 의 번호·기관만): 112 경찰, 117 학교폭력 신고·상담, 1388 청소년 상담, 119(다쳤을 때 — 계획 모듈 글), 담임·상담 선생님·Wee 클래스
  const SAFE_NOTE = '가상 인물·가상 장면이다. 학생 자신의 일을 묻지 않고 "가상 인물이라면"으로만 이야기한다. 수업 중이나 뒤에 걱정을 말하는 학생은 따로 만나 상담 선생님·Wee 클래스로 잇는다.';

  // ==== 7학년 · 장난과 폭력의 경계, 학교폭력의 유형 (saf-violence.m.type-line) ====
  {
    const M = MK('type-line', [7]);
    const TYPES6 = ['신체', '언어', '따돌림', '사이버', '금품갈취', '강요'];
    const TYPES4D = [{ id: '신체', label: '신체(몸에 힘을 씀)' }, { id: '언어', label: '언어(말로 상처를 줌)' }, { id: '따돌림', label: '따돌림(무리에서 빼놓음)' }, { id: '사이버', label: '사이버(온라인에서 괴롭힘)' }];
    const CASE1 = [
      { id: 'c1', text: '복도에서 지나갈 때마다 어깨를 세게 친다', to: '신체' }, { id: 'c2', text: '외모로 별명을 지어 부르며 웃는다', to: '언어' },
      { id: 'c3', text: '모둠을 짤 때 한 친구만 일부러 빼놓는다', to: '따돌림' }, { id: 'c4', text: '친구 사진에 놀리는 글을 달아 단톡방에 올린다', to: '사이버' },
      { id: 'c5', text: '매점 빵값을 날마다 대신 내라고 한다', to: '금품갈취' }, { id: 'c6', text: '싫다는데 숙제를 대신 해 오라고 시킨다', to: '강요' },
      { id: 'c7', text: '급식 줄에서 발을 걸어 넘어뜨린다', to: '신체' }, { id: 'c8', text: '그 친구가 오면 모두 대화를 멈추고 자리를 뜬다', to: '따돌림' },
    ];
    const CASE2 = [
      { id: 'd1', text: '빌린다며 돈을 가져가고 갚지 않는다', to: '금품갈취' }, { id: 'd2', text: '싫다는데 춤을 추게 하고 지켜본다', to: '강요' },
      { id: 'd3', text: '"냄새난다"는 말을 날마다 되풀이한다', to: '언어' }, { id: 'd4', text: '밤마다 다른 계정으로 욕설 메시지를 보낸다', to: '사이버' },
      { id: 'd5', text: '체육 시간에 공을 일부러 얼굴로 던진다', to: '신체' }, { id: 'd6', text: '다른 반에 그 친구와 놀지 말라고 퍼뜨린다', to: '따돌림' },
    ];
    // 별명 부르기에서 시작하는 갈림길(깊이 3)
    const D1 = { text: '쉬는 시간, 친구들이 키가 작은 하나를 \'꼬맹이\'라고 부르며 웃는다. 하나는 웃는 듯하지만 고개를 숙인다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'join', text: '나도 \'꼬맹이\'라고 부르며 같이 웃는다', result: '웃음소리가 커지고 하나는 자리로 돌아가 엎드린다.', impact: [{ who: '하나', text: '더 작아진 느낌이 든다', tone: -1 }], why: '웃는 얼굴이 괜찮다는 뜻은 아니에요. 상대가 고개를 숙였어요.', end: '별명이 반 전체로 퍼졌어요.',
        next: { text: '다음 날부터 반 전체가 하나를 \'꼬맹이\'라고 부른다. 하나가 작게 "하지 마"라고 말한다.', ask: '이제 어떻게 할까?', choices: [
          { id: 'more', text: '"장난인데 왜 그래?" 하고 계속 부른다', result: '하나가 쉬는 시간마다 교실 밖으로 나간다.', impact: [{ who: '하나', text: '교실에 있기 힘들어진다', tone: -1 }], why: '"하지 마"라고 했는데 계속하면 장난이 아니라 언어폭력이에요.', end: '하나가 교실을 피하게 됐어요.',
            next: { text: '하나가 교실을 피하자 몇몇이 "삐졌다"며 단톡방에도 별명을 올린다.', choices: [
              { id: 'post', text: '단톡방 글에 \'ㅋㅋ\'를 단다', result: '별명이 단톡방까지 번진다.', impact: [{ who: '하나', text: '집에서도 놀림이 이어진다', tone: -1 }], why: '같이 웃는 반응도 놀림을 키워요.' },
              { id: 'late', text: '늦었지만 멈추고 하나에게 사과한다', result: '하나가 사과를 받아 주지만 아직 마음이 무겁다.', impact: [{ who: '하나', text: '조금 마음이 놓인다', tone: 1 }], why: '사과는 좋지만, "하지 마"를 들었을 때 바로 멈췄어야 해요.' }] } },
          { id: 'stopnow', text: '바로 멈추고 "미안, 이제 안 부를게"라고 한다', result: '하나가 고개를 든다.', impact: [{ who: '하나', text: '말이 통했다고 느낀다', tone: 1 }], end: '"하지 마"를 듣고 바로 멈췄어요.',
            next: { text: '다른 친구 몇 명은 여전히 별명을 부른다.', choices: [
              { id: 'tellfr', text: '"하나가 싫대, 그만하자"라고 친구들에게 말한다', result: '몇 명이 멈칫하며 별명을 그친다.', impact: [{ who: '반 분위기', text: '놀리지 않는 쪽으로 바뀐다', tone: 1 }] },
              { id: 'quiet', text: '나만 안 부르면 되니 가만히 있는다', result: '별명은 계속 돈다.', impact: [{ who: '하나', text: '놀림이 끝나지 않는다', tone: -1 }], why: '나만 멈추는 것보다 함께 멈추자고 말하면 놀림이 그쳐요.' }] } }] } },
      { id: 'notice', text: '하나 표정을 보고 "하나야, 이 별명 괜찮아?"라고 묻는다', result: '하나가 "사실 싫어"라고 말한다.', impact: [{ who: '하나', text: '마음을 말할 기회가 생긴다', tone: 1 }], end: '하나의 마음을 물어봤어요.',
        next: { text: '친구들이 "물어보긴 뭘 물어봐, 다 장난이야"라고 한다.', ask: '어떻게 할까?', choices: [
          { id: 'say', text: '"하나가 싫다잖아, 장난은 둘 다 웃을 때야"라고 말한다', result: '친구들이 머쓱해하며 별명을 멈춘다.', impact: [{ who: '하나', text: '편이 생겼다고 느낀다', tone: 1 }], end: '장난의 기준을 말해 별명이 멈췄어요.',
            next: { text: '며칠 뒤 한 친구가 다시 별명을 꺼낸다.', choices: [
              { id: 'teacher', text: '되풀이되니 담임 선생님께 알린다', result: '선생님이 학급 회의에서 별명 문제를 다룬다.', impact: [{ who: '반 분위기', text: '함께 지킬 약속이 생긴다', tone: 1 }] },
              { id: 'ignore', text: '한 번쯤은 괜찮다며 넘어간다', result: '별명이 다시 퍼진다.', impact: [{ who: '하나', text: '다시 위축된다', tone: -1 }], why: '되풀이되면 어른의 도움이 필요해요.' }] } },
          { id: 'drop', text: '분위기가 깨질까 봐 그냥 웃어넘긴다', result: '별명이 계속된다.', impact: [{ who: '하나', text: '말해도 소용없다고 느낀다', tone: -1 }], why: '싫다는 말을 들었으면 분위기보다 하나의 마음이 먼저예요.' }] } },
      { id: 'leave', text: '못 본 척 자리를 뜬다', result: '별명 부르기가 계속된다.', impact: [{ who: '하나', text: '아무도 신경 쓰지 않는다고 느낀다', tone: -1 }], why: '모른 척하는 것도 놀림이 이어지게 해요.', ending: '아무도 멈추지 않아 별명이 이어졌어요.' }] };
    const R1 = [{ id: 'r1', text: '상대가 싫다고 하면 그때부터 장난이 아니다' }, { id: 'r2', text: '같은 말이 되풀이되면 상처가 쌓인다' },
      { id: 'r3', text: '웃고 있었으니 장난이다', why: '웃음은 분위기를 깨지 않으려는 것일 수 있어요. 표정과 말을 봐요.' }, { id: 'r4', text: '때리지 않았으니 폭력이 아니다', why: '말로 하는 괴롭힘도 학교폭력의 한 유형이에요.' }];
    const R1C = { reasons: [{ id: 'r5', text: '멈춘 길에서는 하나가 교실에 남을 수 있었다' }, { id: 'r6', text: '계속한 길에서는 놀림이 단톡방까지 번졌다' }], ok: ['r5', 'r6'] };
    const SURVEY = [['별명 부르기', 18, 11], ['가방 숨기기', 15, 9], ['어깨 툭 치기', 9, 6], ['단톡방 놀림 글', 12, 3], ['모둠에서 빼기', 8, 2]];
    const pairData = (rows) => rows.flatMap((r) => [[`${r[0]}·싫었다`, r[1]], [`${r[0]}·장난`, r[2]]]);
    const RISK = [
      { id: 'v1', text: '잠이 줄고 학교 가기가 두려워진다', to: '피해 학생' }, { id: 'v2', text: '자신이 잘못한 것처럼 느낀다', to: '피해 학생' },
      { id: 'g1', text: '같은 행동이 습관처럼 굳는다', to: '가해 학생' }, { id: 'g2', text: '학교의 조치를 받고 책임을 져야 한다', to: '가해 학생' },
      { id: 'a1', text: '다음은 내 차례일까 봐 눈치를 본다', to: '반 전체' }, { id: 'a2', text: '알리면 따돌림당할까 봐 신고를 망설인다', to: '반 전체' },
      { id: 'v3', text: '단톡방을 열 때마다 마음이 무거워진다', to: '피해 학생' }, { id: 'a3', text: '서로 믿지 못하는 분위기가 생긴다', to: '반 전체' },
    ];
    const RISKSLOT = ['피해 학생', '가해 학생', '반 전체'];

    ALL.push(
      // ---- 도입 ----
      M('intro.words', {
        title: '같은 행동, 다른 이름', method: '같은 행동, 다른 이름 고르기', tool: 'wordcards', minutes: 6,
        levels: { easy: '행동 카드 3장(별명 부르기·가방 숨기기·어깨 치기)만 짚고, 이름 보기는 \'장난\'·\'괴롭힘\' 2개로 고른다.', base: '시연 판의 행동 카드 5장을 모두 짚고, 이름 보기 3개(장난·괴롭힘·놀림)에서 하는 사람과 듣는 사람 쪽을 각각 고른다.', challenge: '하는 사람과 듣는 사람이 고른 이름이 서로 다른 까닭을 짝에게 한 줄로 말한다.' },
        intro: {
          teacher: '"\'별명 부르기\'를 하는 사람은 이 행동에 어떤 이름을 붙일까요? 듣는 사람은요?" 시연 단추로 \'별명 부르기 — 하는 사람\' 칸에 \'장난\', \'별명 부르기 — 듣는 사람\' 칸에 \'괴롭힘\' 카드가 붙는 모습을 보인다. "듣는 사람이 예민한 거예요"라는 말이 나오면 "같은 행동인데 이름이 다르게 붙는다면, 누구의 느낌을 기준으로 삼아야 할까요?"라고 되묻는다. 오늘은 상대의 느낌·되풀이·힘의 차이로 장난과 폭력의 경계를 따져 본다고 밝힌다.',
          student: '같은 행동을 하는 사람과 듣는 사람은 어떤 이름을 붙일지 카드로 골라 보고, 두 이름이 왜 다른지 생각해요.',
          demo: { tool: 'wordcards', options: { mode: 'match', slots: [
            { id: 's1', label: '별명 부르기 — 하는 사람' }, { id: 's2', label: '별명 부르기 — 듣는 사람' },
            { id: 's3', label: '가방 숨기기 — 하는 사람' }, { id: 's4', label: '가방 숨기기 — 듣는 사람' }],
            cards: [{ id: 'k1', text: '장난' }, { id: 'k2', text: '괴롭힘' }, { id: 'k3', text: '놀림' }, { id: 'k4', text: '장난' }, { id: 'k5', text: '괴롭힘' }] }, sequence: [{ match: { s1: 'k1', s2: 'k2', s3: 'k4', s4: 'k5' } }] },
          art: { draw: 'a paper-cut classroom where one student laughs while calling a nickname and another student looks down, two paper speech bubbles with different words above them', banner: '같은 행동, 다른 이름', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '행동 카드 나머지(어깨 치기·단톡방 놀림 글·모둠에서 빼기)는 교사가 같은 방식으로 말로 짚는다. ' + SAFE_NOTE,
      }),
      M('intro.survey', {
        title: '가상 설문 두 막대 견주기', method: '가상 설문 그래프에서 생각의 차이 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '막대 값을 보이게 두고 항목 3개(6막대)만 교사가 소리 내어 견준다.', base: '항목 5개(10막대)를 값 없이 눈금으로 읽어 두 막대가 가장 크게 다른 항목을 고른다.', challenge: '차이가 생기는 까닭(하는 사람은 상대 표정을 보지 못한다 등)을 짝에게 근거와 함께 말한다.' },
        intro: {
          teacher: '"\'들은 사람이 싫었다\'는 응답과 \'장난이었다\'는 응답이 가장 크게 벌어진 행동은 무엇일까요?" 가상의 우리 반 설문 막대그래프를 띄우고, 시연 단추로 \'단톡방 놀림 글\'을 고르는 모습을 보인다. 그래프는 행동마다 \'싫었다\' 막대와 \'장난\' 막대를 나란히 세웠다고 짚는다. "장난이라고 생각한 사람이 많으면 장난"이라는 말이 나오면 "싫었던 사람이 한 명이라도 있다면 어떻게 될까요?"라고 되묻는다. 이 자료는 수업용으로 지어낸 가상 설문임을 먼저 밝힌다.',
          student: '가상 설문 그래프에서 행동마다 \'싫었다\'와 \'장난\' 두 막대를 견주어, 차이가 가장 큰 행동을 찾아요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '우리 반 가상 설문 — 싫었다 / 장난이었다', unit: '명', xLabel: '행동', yLabel: '응답 수', data: pairData(SURVEY), question: '두 막대가 가장 크게 다른 행동은?', choices: SURVEY.map((r) => r[0]) }, sequence: [{ pick: 3 }] },
          art: { draw: 'a paper-cut bar chart on a classroom board with pairs of paper bars side by side, students pointing at the widest gap', banner: '어디서 가장 크게 다를까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '그래프 교구는 계열 하나만 그려서 행동마다 \'싫었다\'·\'장난\' 막대를 나란히 두었다. 값은 모두 가상이다.',
      }),

      // ---- 활동 ----
      M('activity.classify', {
        title: '사례를 학교폭력 유형으로 나누기', method: '사례를 학교폭력 유형별로 나누기', tool: 'story', minutes: 16,
        levels: { easy: '사례 카드 5장을 칸 4개(신체·언어·따돌림·사이버)에 나누고, 칸마다 유형 설명이 붙어 있으며 놓으면 바로 맞는지 알려 준다.', base: '사례 카드 8장을 유형 칸 6개에 나눈다(설명 없음).', challenge: '셋째 문항에서 두 유형에 걸치는 사례마다 함께 든 두 유형을 짝짓는다(함정 카드가 섞인다).' },
        activity: {
          title: '사례를 학교폭력 유형으로 나누기', tool: 'story',
          teacher: '"이 사례는 몸·말·무리·온라인·돈·억지 가운데 무엇으로 상대를 괴롭혔나요?" 카드를 놓을 때마다 그 행동을 당하는 쪽이 어떤 마음일지 한 마디씩 덧붙이게 한다. "때리지 않으면 폭력이 아니다"라는 학생에게 "\'냄새난다\'는 말을 날마다 들으면 몸에 상처는 없어도 학교에 오고 싶을까요?"라고 되묻는다. 한 사례에 여러 유형이 겹칠 수 있고, 이름보다 상대가 괴로운지가 먼저라는 점을 짚는다.',
          task: '교실·복도·단톡방에서 일어난 가상 사례 카드를 학교폭력 유형 칸에 나누고, 두 유형에 걸치는 사례를 찾아요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('사례 카드를 학교폭력 유형 칸에 나누세요.', TYPES6, CASE1, { title: '교실·복도·단톡방 사례' }),
              SB('사례 카드 5장을 유형 칸에 나누세요(칸 설명을 읽어요).', TYPES4D, pickCards(CASE1, ['c1', 'c2', 'c3', 'c4', 'c7']).map((c) => c), { title: '교실·복도·단톡방 사례' })),
            IT(SB('다른 사례 카드도 유형 칸에 나누세요.', TYPES6, CASE2, { title: '방과 후·온라인 사례' }),
              SB('사례 카드 4장을 유형 칸에 나누세요(칸 설명을 읽어요).', TYPES4D, pickCards(CASE2, ['d3', 'd4', 'd5', 'd6']), { title: '방과 후·온라인 사례' })),
            IT(PB('두 유형에 함께 걸치는 사례만 골라 담으세요.', '두 유형에 걸치는 사례', [
              { id: 'm1', text: '단톡방에서 돈을 보내라고 계속 협박한다', ok: true }, { id: 'm2', text: '억지로 시킨 춤을 찍어 SNS에 올린다', ok: true },
              { id: 'm3', text: '때리면서 용돈을 빼앗는다', ok: true }, { id: 'm4', text: '복도에서 어깨를 한 번 부딪친다' }, { id: 'm5', text: '발표 순서를 정하려고 제비뽑기를 한다' }]),
              null,
              MB('두 유형에 걸치는 사례마다 함께 든 두 유형을 이어 보세요.', [['단톡방에서 돈을 보내라고 계속 협박한다', '사이버 + 금품갈취'], ['억지로 시킨 춤을 찍어 SNS에 올린다', '강요 + 사이버'], ['때리면서 용돈을 빼앗는다', '신체 + 금품갈취']], ['언어 + 따돌림'], { title: '두 유형에 걸친 사례' }),
              { conclude: '학교폭력은 몸·말·따돌림·사이버·금품갈취·강요처럼 여러 모습이고, 한 사건에 여러 유형이 겹칠 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '\'때리지 않으면 폭력이 아니다\'라는 말이 틀린 까닭을 오늘 나눈 유형 하나를 들어 한 문장으로 써요.' }],
          easy: [{ type: 'choice', prompt: '말로 상처를 주는 학교폭력 유형은?', options: ['언어', '신체'], answer: '언어' }] },
        notes: SAFE_NOTE,
      }),
      M('activity.line', {
        title: '별명이 점점 심해지는 갈림길', method: '별명 놀림이 점점 심해지는 갈림길', tool: 'dilemma', minutes: 17,
        levels: { easy: '갈림 2번까지 가고, 고를 때마다 하나에게 생기는 영향(도움·피해)이 바로 보인다.', base: '갈림 3번까지 가고, 영향 표시는 맞힌 뒤에만 보여 단서가 줄어든다. 끝에서 판단 근거를 고른다.', challenge: '갈림 3번 뒤 \'다른 선택을 했다면\' 결과와 견주어, 멈춘 길과 계속한 길이 어떻게 달라졌는지 견주는 근거 카드까지 고른다.' },
        activity: {
          title: '별명이 점점 심해지는 갈림길', tool: 'dilemma',
          teacher: '"하나가 웃고 있었는데, 그건 괜찮다는 뜻이었을까요?" 학생마다 한 길을 끝까지 가 본 뒤 되돌아가 다른 길과 견주게 한다. "처음엔 장난이었으니 괜찮다"는 학생에게 "\'하지 마\'라는 말이 나온 뒤에도 장난일까요?"라고 되묻는다. 장난과 폭력을 가르는 것은 하는 사람의 마음이 아니라 상대의 느낌·되풀이·힘의 차이라는 점을 끝 장면에서 짚는다.',
          task: '별명 부르기에서 시작한 장면에서 길을 골라 결과를 따라가고, 끝에서 내 판단의 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL({ easy: '하나를 별명으로 부르며 웃어요. 두 번 골라 결과를 보고 근거를 고르세요.', base: '하나를 별명으로 부르며 웃어요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 간 뒤 다른 길의 결과와 견주는 근거까지 고르세요.' },
              '쉬는 시간 별명', D1, [['notice', 'say', 'teacher'], ['join', 'stopnow', 'tellfr']], R1, ['r1', 'r2'], R1C),
            IT({ prompt: '장면에서 장난이 폭력으로 바뀐 때를 고르세요.', toolOptions: { title: '언제 바뀌었을까?', scene: { text: '별명 부르기가 장난에서 폭력으로 바뀐 순간은 언제일까?', motif: 'house', choices: [
              { id: 'first', text: '하나가 처음 웃었을 때', result: '하나는 분위기를 깨지 않으려 웃었을 수 있다.', why: '웃음만으로는 괜찮은지 알 수 없어요.' },
              { id: 'no', text: '하나가 "하지 마"라고 말한 뒤에도 계속할 때', result: '상대의 뜻을 알고도 되풀이했다.', impact: [{ who: '하나', text: '싫다는 뜻이 무시된다', tone: -1 }], ending: '싫다는 뜻을 알고도 되풀이하면 폭력이에요.' },
              { id: 'never', text: '끝까지 장난이었다', result: '하나는 교실을 피하게 됐다.', why: '하나가 교실을 피했다면 장난이 아니었어요.' }] }, reasons: [{ id: 'q1', text: '상대가 싫다는 뜻을 보였다' }, { id: 'q2', text: '같은 일이 되풀이됐다' }, { id: 'q3', text: '여럿이 한 명을 놀렸다' }, { id: 'q4', text: '하는 사람이 재미있었다', why: '하는 사람의 재미는 기준이 아니에요.' }], compare: false },
              target: { path: [['no']], reasons: ['q1', 'q2', 'q3'], some: true } },
              { prompt: '장난이 폭력으로 바뀐 때를 고르세요(영향 단서를 보며 골라요).' },
              { prompt: '장난이 폭력으로 바뀐 때를 고르고, 판단 기준(느낌·되풀이·힘의 차이) 근거를 모두 고르세요.', target: { path: [['no']], reasons: ['q1', 'q2', 'q3'] } }),
            IT({ prompt: '여럿이 한 명에게 같은 행동을 할 때의 장면을 따라가세요.', toolOptions: { title: '여럿 대 한 명', scene: { text: '모둠 넷이 돌아가며 하나의 필통을 숨긴다. 하나 혼자 찾아다닌다.', ask: '이 장면을 어떻게 볼까?', motif: 'house', choices: [
              { id: 'fun', text: '다들 웃으니 모두의 놀이다', result: '하나는 혼자 찾아다니며 수업에 늦는다.', impact: [{ who: '하나', text: '혼자 감당한다', tone: -1 }], why: '넷이 한 명에게 하면 힘의 차이가 생겨요.' },
              { id: 'power', text: '넷 대 하나라 힘의 차이가 있다', result: '하나 혼자서는 멈추게 하기 어렵다는 것이 보인다.', impact: [{ who: '하나', text: '도움이 필요하다는 것이 드러난다', tone: 1 }], ending: '힘의 차이가 있으면 상대 혼자 멈추게 하기 어려워요.' }] }, reasons: [{ id: 'p1', text: '여럿이 한 명에게 하면 상대가 거절하기 어렵다' }, { id: 'p2', text: '모두 웃었으니 문제없다', why: '웃은 사람은 하는 쪽이었어요.' }], compare: true },
              target: { path: [['power']], reasons: ['p1'] }, conclude: '장난과 폭력을 가르는 것은 상대의 느낌, 되풀이, 힘의 차이예요. 잘못은 멈추지 않은 쪽에 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '장난이 폭력이 되는 때로 가장 알맞은 것은?', options: ['하는 사람이 재미없어졌을 때', '상대가 싫다고 했는데 되풀이할 때', '선생님이 보았을 때'], answer: '상대가 싫다고 했는데 되풀이할 때' }] },
        notes: SAFE_NOTE,
      }),
      M('activity.risk', {
        title: '사이버 따돌림의 위험 세 방향', method: '한 유형의 위험성을 세 방향으로 펼치기', tool: 'mindmap', minutes: 16,
        levels: { easy: '가지 이름(피해 학생·가해 학생·반 전체)과 짧은 낱말 카드 6장으로 펼치고, 놓으면 바로 맞는지 알려 준다.', base: '가지 이름만 있는 판에 문장 카드 8장을 나누어 펼친다(바로 알림 없음).', challenge: '셋째 문항에서 가지끼리 이어지는 영향(예: 반 분위기 → 신고 망설임)을 원인과 결과로 잇는다.' },
        activity: {
          title: '사이버 따돌림의 위험 세 방향', tool: 'mindmap',
          teacher: '"단톡방에서 한 친구를 빼고 새 방을 만든 일, 상처는 그 친구에게만 남을까요?" 가운데에 가상 사례(한 친구만 빼고 만든 새 단톡방에서 그 친구 이야기를 하는 일)를 두고 가지를 펼친다. "가해 학생은 손해 볼 게 없다"는 학생에게 "같은 행동이 습관이 되고 학교의 조치를 받으면 어떻게 될까요?"라고 되묻는다. 반 전체 가지에서 \'다음은 나일까\' 하는 눈치가 신고를 막는다는 연결을 짚는다.',
          task: '사이버 따돌림 사례를 가운데 두고 피해 학생·가해 학생·반 전체에 생기는 위험을 가지로 펼쳐요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('위험 카드를 세 가지에 나누어 펼치세요.', RISKSLOT, RISK, { topic: '한 친구만 뺀 단톡방' }),
              SB('낱말 카드를 세 가지에 나누어 펼치세요.', RISKSLOT, [
                { id: 'e1', text: '두려움', to: '피해 학생' }, { id: 'e2', text: '자책', to: '피해 학생' }, { id: 'e3', text: '나쁜 습관', to: '가해 학생' },
                { id: 'e4', text: '학교의 조치', to: '가해 학생' }, { id: 'e5', text: '눈치 보기', to: '반 전체' }, { id: 'e6', text: '신고 망설임', to: '반 전체' }], { topic: '한 친구만 뺀 단톡방' })),
            IT(SB('위험을 \'곧바로 생김\'과 \'오래 남음\'으로 나누세요.', ['곧바로 생김', '오래 남음'], [
              { id: 'n1', text: '단톡방 알림이 올 때마다 놀란다', to: '곧바로 생김' }, { id: 'n2', text: '사람을 믿기 어려워진다', to: '오래 남음' },
              { id: 'n3', text: '그날 수업에 집중하지 못한다', to: '곧바로 생김' }, { id: 'n4', text: '캡처된 글이 계속 남아 돈다', to: '오래 남음' },
              { id: 'n5', text: '반에서 서로 말을 아낀다', to: '오래 남음' }], { topic: '위험은 얼마나 갈까?' })),
            IT(MB('가지끼리 이어지는 영향을 원인과 결과로 이어 보세요.', [['반 분위기가 얼어붙음', '알리고 싶어도 망설인다'], ['따돌림이 오래감', '피해 학생이 자기를 탓한다']], ['다들 금방 잊는다'], { topic: '영향은 이어진다' }),
              null,
              MB('가지끼리 이어지는 영향을 원인과 결과로 이어 보세요(더 많아요).', [['반 분위기가 얼어붙음', '알리고 싶어도 망설인다'], ['따돌림이 오래감', '피해 학생이 자기를 탓한다'], ['아무도 멈추지 않음', '가해 행동이 습관이 된다'], ['캡처가 다른 방으로 감', '피해가 학교 밖까지 번진다']], ['다들 금방 잊는다', '피해 학생이 조심하면 끝난다'], { topic: '영향은 이어진다' }),
              { conclude: '사이버 따돌림은 피해 학생만이 아니라 가해 학생과 반 전체에 위험을 남기고, 그 위험은 서로 이어져요. 잘못은 따돌린 쪽에 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '사이버 따돌림이 남기는 위험을 하나씩 써요.', columns: ['누구에게', '위험'], cells: [['피해 학생', ''], ['가해 학생', ''], ['반 전체', '']], answer: '(예) 두려움·자책, 습관·학교의 조치, 눈치 보기·신고 망설임' }] },
      }),
      M('activity.rule', {
        title: '우리 반 장난과 폭력의 경계 쓰기', method: '우리 반 경계 기준 쓰고 기준표로 점검', tool: 'rubric-writing', minutes: 17,
        levels: { easy: '문장 틀("상대가 ___ 하면 장난이 아니다")을 채워 쓰고 기준 2개(상대의 느낌·되풀이)를 점검한다.', base: '틀 없이 세 문장으로 쓰고 기준 3개(상대의 느낌·되풀이·힘의 차이)를 점검한다.', challenge: '셋째 문항에서 가상 친구의 기준 문장을 기준표로 읽고 고칠 점을 한 줄 쓴다.' },
        activity: {
          title: '우리 반 장난과 폭력의 경계 쓰기', tool: 'rubric-writing',
          teacher: '"\'심한 장난은 하지 말자\'라는 기준으로, 내일 쉬는 시간에 무엇을 멈출 수 있을까요?" 막연한 문장과 \'상대가 싫다고 하면 바로 멈춘다\'를 견주어 읽은 뒤 쓰게 한다. "기준을 너무 엄하게 하면 아무 장난도 못 한다"는 학생에게 "둘 다 웃는 장난과 한쪽만 웃는 장난을 가를 수 있는 기준이면 충분하지 않을까요?"라고 되묻는다. 친구 이름은 쓰지 않게 한다.',
          task: '\'우리 반 장난과 폭력의 경계\'를 세 문장으로 쓰고, 상대의 느낌·되풀이·힘의 차이가 들어갔는지 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '첫 문장: 상대의 느낌으로 장난과 폭력을 가르는 기준을 쓰세요.', toolOptions: { topic: '상대의 느낌을 기준으로 장난과 폭력을 가르는 문장을 한두 문장으로 쓰세요.', minChars: 15, maxChars: 120, minSentences: 1, maxSentences: 2, title: '경계 기준 ① 느낌' }, target: { selfCheck: ['상대의 느낌을 기준으로 삼았다', '언제 멈출지 썼다', '친구 이름을 쓰지 않았다'] } },
              { prompt: '틀을 채워 첫 문장을 쓰세요.', toolOptions: { starter: '상대가 ___ 하면 그때부터 장난이 아니다.' }, target: { selfCheck: ['상대의 느낌을 기준으로 삼았다', '친구 이름을 쓰지 않았다'] } }),
            IT({ prompt: '둘째·셋째 문장: 되풀이와 힘의 차이에 대한 기준을 쓰세요.', toolOptions: { topic: '같은 일이 되풀이될 때, 여럿이 한 명에게 할 때의 기준을 두 문장으로 쓰세요.', minChars: 25, maxChars: 160, minSentences: 2, maxSentences: 3, title: '경계 기준 ② 되풀이·힘' }, target: { selfCheck: ['되풀이에 대한 기준을 썼다', '힘의 차이(여럿 대 한 명 등)를 썼다', '지킬 수 있는 행동으로 썼다'] } },
              { prompt: '틀을 채워 되풀이에 대한 문장을 쓰세요.', toolOptions: { topic: '같은 일이 되풀이될 때의 기준을 한두 문장으로 쓰세요.', minChars: 12, minSentences: 1, starter: '같은 말이나 행동을 ___ 하면 폭력이 된다.' }, target: { selfCheck: ['되풀이에 대한 기준을 썼다', '지킬 수 있는 행동으로 썼다'] } }),
            IT({ prompt: '세 문장을 이어 우리 반 경계 기준을 완성하세요.', toolOptions: { topic: '앞에서 쓴 기준을 이어 \'우리 반 장난과 폭력의 경계\'를 세 문장으로 완성하세요.', minChars: 40, maxChars: 220, minSentences: 3, maxSentences: 4, title: '우리 반 경계 기준' }, target: { selfCheck: ['상대의 느낌이 들어갔다', '되풀이가 들어갔다', '힘의 차이가 들어갔다'], mustInclude: [['싫', '불편', '느낌']] } },
              { prompt: '두 문장을 이어 우리 반 경계 기준을 완성하세요.', toolOptions: { minChars: 25, minSentences: 2, starter: '상대가 ___ 하면 멈춘다. 같은 일을 ___ 하지 않는다.' }, target: { selfCheck: ['상대의 느낌이 들어갔다', '되풀이가 들어갔다'], mustInclude: [['싫', '불편', '느낌']] } },
              { prompt: '가상 친구의 기준 "심한 장난만 안 하면 된다"를 기준표로 읽고 고칠 점을 쓰세요.', toolOptions: { topic: '가상 친구의 기준: "심한 장난만 안 하면 된다." 이 문장을 기준표(느낌·되풀이·힘의 차이)로 읽고 고칠 점을 두 문장으로 쓰세요.', minChars: 25, maxChars: 160, minSentences: 2, maxSentences: 3, title: '친구 기준 읽고 고치기' }, target: { selfCheck: ['빠진 기준을 짚었다', '고칠 문장을 제안했다', '친구를 탓하지 않고 썼다'] } },
              { conclude: '좋은 경계 기준에는 상대의 느낌, 되풀이, 힘의 차이가 들어 있고, 언제 멈출지가 보여요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 반 장난과 폭력의 경계를 세 문장으로 옮겨 써요(느낌·되풀이·힘의 차이).' }] },
      }),

      // ---- 정리 ----
      M('wrap.mind', {
        title: '들은 사람의 마음 고르기', method: '장면 속 들은 사람의 마음 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '마음 카드 4장에서 들은 사람과 한 사람의 마음을 고른다.', base: '마음 카드 8장에서 두 사람의 마음을 고르고 견준다.', challenge: '마음 카드 8장으로 고른 뒤 두 사람의 마음이 다른 까닭을 한 줄로 쓴다(셋째 출구 질문).' },
        wrap: {
          teacher: '"별명을 부른 지우와 별명을 들은 하나는 같은 순간에 같은 마음이었을까요?" 마음 카드를 고른 뒤 두 마음을 나란히 읽게 한다. "하나도 웃었으니 둘 다 즐거웠다"는 말에는 "고개를 숙이며 짓는 웃음은 어떤 마음일까요?"라고 되묻는다. 들은 사람의 마음이 경계를 정한다는 오늘의 기준을 한 번 더 말한다.',
          exitTicket: [
            IT(X('emotion', { prompt: '장면 속 두 사람의 마음을 골라 이어요.', toolOptions: { mode: 'match', slots: [{ id: 's1', label: '별명을 들은 하나(고개를 숙였다)' }, { id: 's2', label: '별명을 부른 지우(크게 웃었다)' }], cards: ['속상함', '부끄러움', '신남', '편안함', '외로움', '뿌듯함', '고마움', '놀람'] }, target: { match: { s1: ['속상함', '부끄러움', '외로움'], s2: ['신남'] } } }, { difficulty: 0.2 }),
              { prompt: '마음 카드 4장에서 두 사람의 마음을 골라 이어요.', toolOptions: { cards: ['속상함', '신남', '편안함', '고마움'] }, target: { match: { s1: ['속상함'], s2: ['신남'] } } }),
            { type: 'choice', prompt: '"웃으면서 했으니 장난이다"라는 말에 대한 반박으로 가장 알맞은 것은?', options: ['웃으면 기분이 좋아진다', '하는 사람의 웃음이 아니라 듣는 사람의 느낌이 기준이다', '웃음은 전염된다'], answer: 1, difficulty: 0.2, explain: '장난인지는 상대의 느낌으로 가려요.' },
            { type: 'short', prompt: '두 사람의 마음이 다른 까닭을 한 줄로 써요.' },
          ],
        },
        worksheet: {
          title: '같은 순간, 다른 마음',
          items: [
            { type: 'table', prompt: '두 사람의 마음을 써요.', columns: ['사람', '마음'], cells: [['별명을 들은 사람', ''], ['별명을 부른 사람', '']], answer: '(예) 속상함·부끄러움, 신남' },
            { type: 'short', prompt: '장난과 폭력을 가르는 기준 세 가지를 써요.' },
          ],
        },
      }),
      M('wrap.check', {
        title: '이번 주 나의 말과 행동 점검', method: '오늘 나의 말과 행동 점검표', tool: 'kitchen', minutes: 6,
        levels: { easy: '항목 4개(지킬 것 3개·함정 1개)에서 지킬 것에 표시한다.', base: '항목 6개(지킬 것 4개·함정 2개)에서 지킬 것에 표시한다.', challenge: '표시한 뒤 지키기 어려운 항목 하나와 그 까닭을 덧붙여 쓴다(셋째 출구 질문).' },
        wrap: {
          teacher: '"이번 주 쉬는 시간에 내가 실제로 지킬 수 있는 것은 무엇인가요?" 점검표에는 지켜야 할 행동과 그럴듯한 함정이 섞여 있다고 미리 말한다. "웃고 있으면 계속해도 된다"를 고른 학생에게 오늘 본 하나의 고개 숙인 웃음을 떠올리게 한다. 지키기 어려운 항목을 솔직하게 쓰는 것이 더 좋은 점검이라고 말해 준다.',
          exitTicket: [
            IT(X('kitchen', CL('이번 주 내가 지킬 말과 행동에만 표시해요.', '이번 주 나의 약속', [
              { id: 'k1', text: '상대가 싫다고 하면 바로 멈춘다', ok: true }, { id: 'k2', text: '별명은 상대가 좋다고 할 때만 부른다', ok: true },
              { id: 'k3', text: '여럿이 한 명을 놀리면 끼지 않는다', ok: true }, { id: 'k4', text: '단톡방 놀림 글에 반응하지 않는다', ok: true },
              { id: 'k5', text: '상대가 웃고 있으면 계속해도 된다' }, { id: 'k6', text: '장난이었다고 하면 사과는 안 해도 된다' }]), { difficulty: 0.2 }),
              CL('이번 주 내가 지킬 말과 행동에만 표시해요(4개).', '이번 주 나의 약속', [
                { id: 'k1', text: '상대가 싫다고 하면 바로 멈춘다', ok: true }, { id: 'k2', text: '별명은 상대가 좋다고 할 때만 부른다', ok: true },
                { id: 'k3', text: '여럿이 한 명을 놀리면 끼지 않는다', ok: true }, { id: 'k5', text: '상대가 웃고 있으면 계속해도 된다' }])),
            { type: 'choice', prompt: '"장난이었어"라고 말하면 책임이 없어질까요?', options: ['없어진다', '상대가 괴로웠다면 멈추고 사과할 책임이 있다', '선생님이 못 봤으면 없어진다'], answer: 1, difficulty: 0.2, explain: '의도가 장난이어도 상대가 괴로웠다면 책임이 있어요.' },
            { type: 'short', prompt: '지키기 어려운 항목 하나와 그 까닭을 써요.' },
          ],
        },
        worksheet: {
          title: '이번 주 나의 약속',
          items: [
            { type: 'check', prompt: '이번 주 지킬 것에 표시해요.', options: ['싫다고 하면 바로 멈추기', '별명은 상대가 좋을 때만', '여럿이 놀릴 때 끼지 않기'] },
            { type: 'short', prompt: '지키기 어려운 약속과 그 까닭을 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 7학년 · 유형별로 알릴 곳과 신고 차례 (saf-violence.m.report-route) ====
  {
    const M = MK('report-route', [7]);
    const SCHOOL = { grid: [6, 4], title: '가상의 우리 중학교', places: [
      { name: '교실', icon: 'house', at: [0, 0] }, { name: '교무실', icon: 'office', at: [2, 0] }, { name: '상담실(Wee 클래스)', icon: 'library', at: [4, 0], legend: '상담실' },
      { name: '보건실', icon: 'hospital', at: [1, 2] }, { name: '급식실', icon: 'market', at: [3, 2] }, { name: '운동장', icon: 'park', at: [5, 3] }, { name: '매점', icon: 'dot', at: [0, 3] },
    ] };
    const ROUTE = [{ id: '112', label: '112', sub: '지금 위험하거나 범죄일 때' }, { id: '119', label: '119', sub: '다쳐서 응급 처치가 필요할 때' }, { id: '117', label: '117', sub: '학교폭력 신고·상담' }, { id: '선생님', label: '담임·상담 선생님', sub: '학교 안에서 먼저 의논할 때' }];
    const ROUTE0 = ROUTE.map((r) => ({ id: r.id, label: r.label }));
    const SIT = [
      { id: 't1', text: '친구가 맞아서 피가 많이 난다', to: '119' }, { id: 't2', text: '학교 밖에서 모르는 형들이 돈을 내놓으라며 따라온다', to: '112' },
      { id: 't3', text: '단톡방 놀림이 몇 주째 계속된다', to: '117' }, { id: 't4', text: '모둠에서 한 친구만 계속 빼놓는 것을 봤다', to: '선생님' },
      { id: 't5', text: '밤늦게 학교폭력 일로 누구와 상담하고 싶다', to: '117' }, { id: 't6', text: '지금 누군가 흉기를 들고 위협한다', to: '112' },
      { id: 't7', text: '쉬는 시간마다 내 물건이 사라진다', to: '선생님' },
    ];
    const STEPS = ['안전한 곳으로 가기', '믿을 어른에게 알리기', '있었던 일 말하기', '기록 남기기'];
    const MYTH = [['신고하면 보복당할 뿐이다', '학교는 알린 학생을 보호하고, 보복도 학교폭력으로 다룬다'], ['알리는 건 고자질이다', '알리는 것은 친구를 보호하는 일이다'],
      ['증거가 없으면 말해도 소용없다', '본 것·들은 것을 말하는 것만으로도 도움이 시작된다'], ['117은 큰 사건만 받는다', '117은 작아 보이는 일도 상담과 신고를 받는다'], ['내가 말한 게 다 퍼진다', '알린 사람의 이야기는 함부로 알리지 않게 되어 있다']];

    ALL.push(
      // ---- 도입 ----
      M('intro.story', {
        title: '매점 앞 장면, 다음 칸은?', method: '매점 앞 장면 다음 칸 고르기', tool: 'story', minutes: 6,
        levels: { easy: '교사가 다음 장면 카드 2장(그냥 지나가기·선생님께 알리기)만 보이고 함께 고른다.', base: '시연 판의 장면 카드 4장에서 다음 행동을 고르고 까닭을 말한다.', challenge: '고른 장면 뒤에 이어질 결과를 짝과 한 칸 더 말로 이어 붙인다.' },
        intro: {
          teacher: '"매점 앞에서 친구가 돈을 빼앗기는 걸 본 준이는 다음 칸에서 무엇을 할까요?" 이야기 칸을 넘겨 보이고, 시연 단추로 \'안전한 곳에서 선생님께 알린다\' 장면이 바구니에 담기는 모습을 보인다. "내 일도 아닌데 괜히 끼면 안 된다"는 말에는 "준이가 아무에게도 말하지 않으면 다음 날 매점 앞은 어떻게 될까요?"라고 되묻는다. 혼자 맞서는 것이 아니라 알맞은 곳에 알리는 차례를 오늘 익힌다고 밝힌다.',
          student: '매점 앞 장면을 보고 준이가 다음에 할 행동 카드를 골라요. 그 행동이 친구를 어떻게 지킬지 생각해요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '준이의 다음 칸', title: '매점 앞에서', cards: [
            { id: 'c1', text: '못 본 척 교실로 간다', motif: 'cloud' }, { id: 'c2', text: '혼자 뛰어들어 맞선다', motif: 'storm' },
            { id: 'c3', text: '안전한 곳에서 선생님께 알린다', motif: 'star' }, { id: 'c4', text: '찍어서 단톡방에 올린다', motif: 'moon' }], shuffle: false }, sequence: [{ pick: ['c3'] }] },
          art: { draw: 'a paper-cut school snack bar where a student watches from a distance, then walks toward a teacher in the hallway', banner: '다음 칸에서 준이는?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '\'혼자 뛰어들어 맞선다\'는 용기처럼 보이지만 본인도 다칠 수 있어 먼저 고를 길이 아니라는 점을 짚는다. ' + SAFE_NOTE,
      }),
      M('intro.school', {
        title: '학교 지도에서 도움 받을 곳', method: '학교 지도에 도움 받을 곳 꽂기', tool: 'map', minutes: 6,
        levels: { easy: '지도에 장소 이름이 보이는 채로 교무실·상담실·보건실을 함께 찾는다.', base: '교사가 이름을 가리고(범례만 보이게) 기호로 세 곳을 찾게 한다.', challenge: '쉬는 시간 우리 반에서 가장 빨리 갈 수 있는 곳을 고르고 까닭을 말한다.' },
        intro: {
          teacher: '"쉬는 시간에 무슨 일이 생기면 우리 학교에서 어디로 가면 될까요?" 가상 학교 칸 지도를 띄우고 시연 단추로 교무실·상담실(Wee 클래스)·보건실에 핀이 꽂히는 모습을 보인다. 곳마다 무슨 도움을 받는지(담임·생활 지도 선생님, 상담 선생님, 다친 곳 처치) 짧게 말한다. "상담실은 문제 있는 애들만 간다"는 말이 나오면 "고민을 미리 나누러 가는 곳이라면 누구나 가도 되지 않을까요?"라고 되묻는다.',
          student: '가상 학교 지도에서 교무실·상담실·보건실을 찾아보고, 곳마다 어떤 도움을 받을 수 있는지 말해요.',
          demo: { tool: 'map', options: SCHOOL, sequence: [{ place: '교무실' }, { place: '상담실(Wee 클래스)' }, { place: '보건실' }] },
          art: { draw: 'a paper-cut school floor map seen from above with a teachers office, a counseling room and a nurse office marked by small paper pins', banner: '도움 받을 곳은 어디?', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
        },
        notes: '우리 학교 실제 배치가 다르면 시연 뒤 우리 학교 상담실·교무실 위치를 말로 덧붙인다.',
      }),

      // ---- 활동 ----
      M('activity.match', {
        title: '상황에 맞는 도움 경로', method: '상황을 알맞은 도움 경로로 나누기', tool: 'mindmap', minutes: 16,
        levels: { easy: '상황 카드 4장을 나누고, 가지마다 언제 쓰는 경로인지 설명이 붙어 있으며 놓으면 바로 맞는지 알려 준다.', base: '상황 카드 7장을 경로 가지 4개에 나눈다(설명 없음).', challenge: '셋째 문항에서 두 곳에 함께 알려야 하는 상황의 알릴 차례를 정한다.' },
        activity: {
          title: '상황에 맞는 도움 경로', tool: 'mindmap',
          teacher: '"피가 많이 나는 친구 앞에서 117에 먼저 전화하면 어떻게 될까요?" 카드를 놓을 때마다 \'지금 위험한가, 다쳤는가, 계속되는 일인가\'를 소리 내어 따지게 한다. "117은 큰일만 받는다"는 학생에게 "몇 주째 이어지는 단톡방 놀림은 작은 일일까요?"라고 되묻는다. 지금 위험하면 112, 다쳤으면 119, 학교폭력 신고·상담은 117, 학교 안에서는 담임·상담 선생님이라는 갈래를 정리한다.',
          task: '학교폭력 상황 카드를 112·119·117·담임/상담 선생님 가지에 나누고, 두 곳에 함께 알릴 상황의 차례를 정해요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('상황 카드를 알맞은 도움 경로 가지에 나누세요.', ROUTE0, SIT, { topic: '어디에 알릴까?' }),
              SB('상황 카드 4장을 도움 경로 가지에 나누세요(가지 설명을 읽어요).', ROUTE, pickCards(SIT, ['t1', 't2', 't3', 't4']), { topic: '어디에 알릴까?' })),
            IT(PB('지금 바로 112나 119에 알려야 하는 상황만 골라 담으세요.', '지금 바로 전화', [
              { id: 'u1', text: '친구가 쓰러져 일어나지 못한다', ok: true }, { id: 'u2', text: '학교 밖에서 여럿이 돈을 빼앗으며 때린다', ok: true },
              { id: 'u3', text: '어제 들은 험담이 신경 쓰인다' }, { id: 'u4', text: '모둠 발표 순서로 다퉜다' }], { topic: '얼마나 급할까?' })),
            IT(PB('두 곳에 함께 알려야 하는 상황만 골라 담으세요.', '두 곳에 함께', [
              { id: 'w1', text: '맞아서 다쳤고, 괴롭힘이 계속되고 있다', ok: true }, { id: 'w2', text: '단톡방 협박이 이어지고 오늘 만나자는 위협도 왔다', ok: true },
              { id: 'w3', text: '모둠에서 한 번 의견이 갈렸다' }], { topic: '두 곳에 함께' }),
              null,
              OB('맞아서 다쳤고 괴롭힘이 계속될 때, 알릴 차례를 놓으세요.', [{ id: 'o1', text: '119로 다친 친구 돌보기' }, { id: 'o2', text: '담임 선생님께 알리기' }, { id: 'o3', text: '117에 상담·신고하기' }], { topic: '알릴 차례' }),
              { conclude: '지금 위험하면 112, 다쳤으면 119, 학교폭력 신고·상담은 117, 학교 안에서는 담임·상담 선생님. 알린 사람은 잘한 거예요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '도움 경로마다 언제 쓰는지 써요.', columns: ['경로', '이럴 때'], cells: [['112', ''], ['117', ''], ['담임·상담 선생님', '']], answer: '지금 위험하거나 범죄일 때, 학교폭력 신고·상담, 학교 안에서 먼저 의논할 때' }],
          easy: [{ type: 'choice', prompt: '학교폭력 신고·상담 번호는?', options: ['117', '119'], answer: '117' }] },
      }),
      M('activity.order', {
        title: '알릴 때의 차례 정하기', method: '알릴 때의 차례 정하고 점검하기', tool: 'timer', minutes: 17,
        levels: { easy: '순서 카드 3장(안전한 곳으로 가기·믿을 어른에게 알리기·있었던 일 말하기)을 차례로 놓는다.', base: '순서 카드 4장을 놓고, 빠뜨리기 쉬운 점을 스스로 점검 칸에 표시한다.', challenge: '셋째 문항에서 카드 5장(마음 돌보기까지)을 놓고, 순서가 바뀌면 생길 문제를 활동지에서 고른다.' },
        activity: {
          title: '알릴 때의 차례 정하기', tool: 'timer',
          teacher: '"위험한 자리에서 휴대전화를 꺼내 기록부터 하면 어떻게 될까요?" 순서 카드를 놓은 뒤 왜 안전한 곳이 먼저인지 한 사람씩 말하게 한다. "기록이 없으면 아무도 안 믿어 준다"는 학생에게 "기록은 안전한 곳에 간 뒤에 해도 늦지 않아요. 내가 본 것을 말하는 것도 중요한 정보예요"라고 말해 준다. 스스로 점검 칸은 맞히는 문제가 아니라 빠뜨리기 쉬운 것을 확인하는 칸이라고 밝힌다.',
          task: '학교폭력을 알릴 때의 순서 카드를 차례대로 놓고, 빠뜨리기 쉬운 점을 스스로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '알릴 때의 차례대로 카드 4장을 놓고, 점검 칸에 표시하세요.', toolOptions: { title: '알릴 때의 차례', cards: [STEPS[2], STEPS[0], STEPS[3], STEPS[1]] }, target: { order: STEPS, selfCheck: ['위험한 자리에서 먼저 벗어났다', '말할 어른을 정했다', '언제·어디서·누가·무엇을을 떠올렸다'] } },
              { prompt: '알릴 때의 차례대로 카드 3장을 놓으세요.', toolOptions: { cards: [STEPS[1], STEPS[2], STEPS[0]] }, target: { order: STEPS.slice(0, 3) } }),
            IT({ prompt: '친구가 괴롭힘당하는 것을 본 뒤 할 일을 차례대로 놓으세요.', toolOptions: { title: '본 사람이 알릴 때', cards: ['본 것을 그대로 말하기', '그 자리에서 떨어지기', '담임·상담 선생님 찾아가기'] }, target: { order: ['그 자리에서 떨어지기', '담임·상담 선생님 찾아가기', '본 것을 그대로 말하기'], selfCheck: ['내 안전을 먼저 챙겼다', '본 것과 들은 것을 나눠 말할 수 있다'] } },
              { prompt: '친구가 괴롭힘당하는 것을 본 뒤 할 일을 차례대로 놓으세요(점검 칸 없음).', target: { order: ['그 자리에서 떨어지기', '담임·상담 선생님 찾아가기', '본 것을 그대로 말하기'] } }),
            IT({ prompt: '알린 뒤에 할 일까지 차례대로 놓으세요.', toolOptions: { title: '알린 뒤까지', cards: ['기록 남기기', '믿을 어른에게 알리기', '안전한 곳으로 가기'] }, target: { order: ['안전한 곳으로 가기', '믿을 어른에게 알리기', '기록 남기기'] } },
              null,
              { prompt: '알린 뒤 마음 돌보기까지 카드 5장을 차례대로 놓으세요.', toolOptions: { cards: ['기록 남기기', '마음 돌보기(상담 이어 가기)', '있었던 일 말하기', '안전한 곳으로 가기', '믿을 어른에게 알리기'] }, target: { order: ['안전한 곳으로 가기', '믿을 어른에게 알리기', '있었던 일 말하기', '기록 남기기', '마음 돌보기(상담 이어 가기)'] } },
              { conclude: '먼저 안전한 곳으로, 그다음 믿을 어른에게 알리고, 있었던 일을 말하고 기록을 남겨요. 혼자 해결하지 않아도 돼요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '\'기록 남기기\'를 \'안전한 곳으로 가기\'보다 먼저 하면 생길 문제는?', options: ['기록이 더 선명해진다', '위험한 자리에 더 오래 남아 다칠 수 있다', '아무 문제 없다'], answer: '위험한 자리에 더 오래 남아 다칠 수 있다' }] },
      }),
      M('activity.myth', {
        title: '신고에 대한 오해 바로잡기', method: '신고에 대한 오해 바로잡기', tool: 'wordcards', minutes: 16,
        levels: { easy: '오해 카드 3장과 바른 정보 카드를 짝 짓고, 놓으면 바로 맞는지 알려 준다.', base: '오해 카드 5장과 바른 정보 카드를 짝 짓는다(함정 카드 1장).', challenge: '셋째 문항에서 바른 정보를 친구에게 설명하는 문장을 골라 담는다(함정 문장이 섞인다).' },
        activity: {
          title: '신고에 대한 오해 바로잡기', tool: 'wordcards',
          teacher: '"\'알리는 건 고자질\'이라는 말은 누구에게 가장 도움이 될까요?" 짝짓기를 마친 뒤 그 질문에 답하게 한다 — 고자질이라는 말은 괴롭히는 쪽을 숨겨 준다. "신고하면 보복당한다"는 학생에게 "학교는 알린 학생을 보호해야 하고, 보복도 또 하나의 학교폭력으로 다뤄요"라고 말해 준다. 알린 사람은 잘한 것이고, 잘못은 괴롭힌 쪽에 있다는 점을 분명히 한다.',
          task: '신고에 대한 오해 문장 카드에 바른 정보 카드를 짝 짓고, 친구에게 설명할 문장을 골라요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(MB('오해 문장마다 바른 정보 카드를 이어 보세요.', MYTH, ['참는 것이 가장 안전하다']),
              MB('오해 문장 세 개에 바른 정보 카드를 이어 보세요.', MYTH.slice(0, 3), [])),
            IT(SB('문장 카드를 \'오해\'와 \'바른 정보\'로 나누세요.', ['오해', '바른 정보'], [
              { id: 'f1', text: '참고 기다리면 저절로 끝난다', to: '오해' }, { id: 'f2', text: '본 사람도 알릴 수 있다', to: '바른 정보' },
              { id: 'f3', text: '괴롭힘당하는 쪽에도 이유가 있다', to: '오해' }, { id: 'f4', text: '잘못은 괴롭힌 쪽에 있다', to: '바른 정보' },
              { id: 'f5', text: '117은 신고와 상담을 함께 한다', to: '바른 정보' }]),
              SB('문장 카드 4장을 \'오해\'와 \'바른 정보\'로 나누세요.', ['오해', '바른 정보'], [
                { id: 'f1', text: '참고 기다리면 저절로 끝난다', to: '오해' }, { id: 'f2', text: '본 사람도 알릴 수 있다', to: '바른 정보' },
                { id: 'f3', text: '괴롭힘당하는 쪽에도 이유가 있다', to: '오해' }, { id: 'f4', text: '잘못은 괴롭힌 쪽에 있다', to: '바른 정보' }])),
            IT(PB('망설이는 친구에게 해 줄 말로 알맞은 것만 골라 담으세요.', '친구에게 해 줄 말', [
              { id: 'g1', text: '"알리는 건 너를 지키는 일이야"', ok: true }, { id: 'g2', text: '"같이 상담 선생님께 가 볼까?"', ok: true },
              { id: 'g3', text: '"네가 약해서 그래"' }, { id: 'g4', text: '"일 커지니까 그냥 참아"' }]),
              null,
              PB('바른 정보를 친구에게 설명하는 문장만 골라 담으세요.', '설명하는 문장', [
                { id: 'h1', text: '"학교는 알린 학생을 보호하고 보복도 학교폭력으로 다뤄"', ok: true }, { id: 'h2', text: '"117은 작은 일도 상담해 줘"', ok: true },
                { id: 'h3', text: '"증거가 없으면 말하지 마"' }, { id: 'h4', text: '"네가 조심했으면 안 생겼을 일이야"' }, { id: 'h5', text: '"본 것만 말해도 도움이 돼"', ok: true }]),
              { conclude: '알리는 것은 고자질이 아니라 보호예요. 알린 사람은 잘한 것이고, 잘못은 괴롭힌 쪽에 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '\'알리는 건 고자질이다\'라는 말을 바로잡는 문장을 친구에게 하듯 써요.' }] },
        notes: '보복 금지·알린 사람 보호·117의 신고와 상담은 파일 첫머리 \'사람 확인\' 목록에 있다.',
      }),
      M('activity.message', {
        title: '상담 선생님께 도움 요청 쓰기', method: '상담 선생님께 보낼 도움 요청 쓰기', tool: 'rubric-writing', minutes: 17,
        levels: { easy: '빈칸 채우기 틀("___에 ___에서 ___ 일이 있었어요. ___ 도와주세요")로 쓴다.', base: '틀 없이 사실·장소·시간·원하는 도움을 담아 쓰고 기준표로 점검한다.', challenge: '셋째 문항에서 감정 표현 한 줄을 더해 사실과 감정을 나눠 쓴다.' },
        activity: {
          title: '상담 선생님께 도움 요청 쓰기', tool: 'rubric-writing',
          teacher: '"\'선생님, 저 힘들어요\'만 받은 상담 선생님은 무엇을 먼저 물어보실까요?" 가상 사례(쉬는 시간마다 사물함 물건이 없어지고 단톡방에서 놀림이 이어지는 가상 인물 준이)를 읽고 준이 입장에서 쓰게 한다. "자세히 쓰면 고자질 같다"는 학생에게 "언제·어디서·무엇이 있었는지는 판단이 아니라 사실이에요"라고 말해 준다. 실제 친구 이름이나 연락처는 쓰지 않게 하고, 사람은 \'같은 반 친구\'처럼 적게 한다.',
          task: '가상 사례 속 준이가 되어 상담 선생님께 보낼 도움 요청 메시지를 쓰고, 사실·장소·시간·원하는 도움이 들어갔는지 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '있었던 일(언제·어디서·무엇을)을 두 문장으로 쓰세요.', toolOptions: { topic: '가상 사례: 준이는 쉬는 시간마다 사물함 물건이 없어지고, 단톡방에서도 놀림이 이어진다. 준이가 되어 있었던 일을 두 문장으로 쓰세요.', minChars: 25, maxChars: 160, minSentences: 2, maxSentences: 3, title: '도움 요청 ① 사실' }, target: { selfCheck: ['언제 일어났는지 썼다', '어디서 일어났는지 썼다', '무엇이 있었는지 썼다'] } },
              { prompt: '틀을 채워 있었던 일을 쓰세요.', toolOptions: { starter: '___에 ___에서 ___ 일이 있었어요.' } }),
            IT({ prompt: '원하는 도움을 한두 문장으로 쓰세요.', toolOptions: { topic: '준이가 상담 선생님께 바라는 도움을 한두 문장으로 쓰세요.', minChars: 12, maxChars: 120, minSentences: 1, maxSentences: 2, title: '도움 요청 ② 바람' }, target: { selfCheck: ['원하는 도움을 구체적으로 썼다', '사람 이름 대신 \'같은 반 친구\'처럼 썼다'] } },
              { prompt: '틀을 채워 원하는 도움을 쓰세요.', toolOptions: { starter: '선생님, ___ 도와주세요.' } }),
            IT({ prompt: '앞의 글을 이어 상담 선생님께 보낼 메시지를 완성하세요.', toolOptions: { topic: '있었던 일과 원하는 도움을 이어 상담 선생님께 보낼 메시지를 세 문장으로 완성하세요.', minChars: 40, maxChars: 220, minSentences: 3, maxSentences: 4, title: '도움 요청 메시지' }, target: { selfCheck: ['사실을 썼다', '장소와 시간을 썼다', '원하는 도움을 썼다'], mustInclude: [['도와', '도움', '상담']] } },
              { prompt: '틀을 채워 메시지를 완성하세요.', toolOptions: { minChars: 30, starter: '선생님, ___에 ___에서 ___ 일이 있었어요. ___ 도와주세요.' } },
              { prompt: '감정 한 줄을 더해 사실과 감정을 나눠 메시지를 완성하세요.', toolOptions: { maxSentences: 5, minSentences: 4 }, target: { selfCheck: ['사실을 썼다', '장소와 시간을 썼다', '원하는 도움을 썼다', '감정을 사실과 나눠 한 줄로 썼다'], mustInclude: [['도와', '도움', '상담']] } },
              { conclude: '도움 요청에는 언제·어디서·무엇이 있었는지와 원하는 도움이 들어가요. 그것만으로도 도움이 시작돼요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '도움 요청 메시지에 꼭 들어갈 네 가지를 써요.' }] },
      }),

      // ---- 정리 ----
      M('wrap.route', {
        title: '나의 도움 경로 맵', method: '나의 도움 경로 맵 정리', tool: 'mindmap', minutes: 6,
        levels: { easy: '가지 3개(학교·집·전화 상담)에 도움처 카드를 잇는다.', base: '가지 4개(\'지금 위험할 때\' 더함)에 함정 카드를 걸러 가며 잇는다.', challenge: '도움처마다 연락 방법을 짝짓는다.' },
        wrap: {
          teacher: '"\'나\'를 가운데 두면, 학교·집·전화로 이어지는 길이 몇 갈래나 있을까요?" 가지를 다 이으면 그 가운데 내가 가장 먼저 찾을 곳 하나를 마음속으로 정하게 한다. "도움받을 곳이 없다"고 말하는 학생이 있으면 수업 뒤 따로 만나 담임·상담 선생님과 함께 경로를 찾는다. 집에서 말하기 어려운 학생도 있으니 \'집\' 가지는 꼭 채우지 않아도 된다고 말해 준다.',
          exitTicket: [
            IT(X('mindmap', SB('도움처 카드를 가지에 이어요.', ['학교', '집', '전화 상담', '지금 위험할 때'], [
              { id: 'a1', text: '담임 선생님', to: '학교' }, { id: 'a2', text: '상담실(Wee 클래스)', to: '학교' }, { id: 'b1', text: '믿을 수 있는 가족', to: '집' },
              { id: 'c1', text: '117', to: '전화 상담' }, { id: 'c2', text: '1388', to: '전화 상담' }, { id: 'd1', text: '112', to: '지금 위험할 때' },
              { id: 'z1', text: '혼자 참기' }], { topic: '나의 도움 경로' }), { difficulty: 0.2 }),
              SB('도움처 카드를 가지 세 개에 이어요.', ['학교', '집', '전화 상담'], [
                { id: 'a1', text: '담임 선생님', to: '학교' }, { id: 'a2', text: '상담실(Wee 클래스)', to: '학교' }, { id: 'b1', text: '믿을 수 있는 가족', to: '집' },
                { id: 'c1', text: '117', to: '전화 상담' }, { id: 'c2', text: '1388', to: '전화 상담' }], { topic: '나의 도움 경로' }),
              MB('도움처마다 연락 방법을 이어요.', [['담임 선생님', '쉬는 시간에 교무실로 찾아간다'], ['상담실(Wee 클래스)', '상담실에 가서 상담을 신청한다'], ['117', '전화로 신고·상담한다'], ['112', '지금 위험하면 바로 전화한다']], ['단톡방에 올린다'], { topic: '나의 도움 경로' })),
            { type: 'choice', prompt: '학교 밖에서 지금 누군가 돈을 빼앗으며 위협한다면 가장 먼저 할 일은?', options: ['117에 다음 날 전화한다', '안전한 곳으로 피하며 112에 알린다', '혼자 맞선다'], answer: 1, difficulty: 0.2, explain: '지금 위험하면 112예요.' },
            { type: 'short', prompt: '도움이 필요할 때 내가 가장 먼저 찾을 곳과 그 까닭을 써요.' },
          ],
        },
        worksheet: {
          title: '나의 도움 경로',
          items: [
            { type: 'table', prompt: '나의 도움 경로를 정리해요.', columns: ['갈래', '도움처'], cells: [['학교', ''], ['전화 상담', ''], ['지금 위험할 때', '']], answer: '담임·상담 선생님(Wee 클래스), 117·1388, 112' },
            { type: 'blank', prompt: '빈칸에 알맞은 번호를 써요.', text: '학교폭력 신고·상담은 ___번이에요.', answer: '117' },
          ],
        },
      }),
      M('wrap.check', {
        title: '알리기 전 점검표', method: '알리기 전 점검표', tool: 'kitchen', minutes: 6,
        levels: { easy: '항목 3개(알맞은 것 2개·함정 1개)에서 알릴 때 확인할 것에 표시한다.', base: '항목 5개(알맞은 것 3개·함정 2개)에서 표시한다.', challenge: '표시한 뒤 가장 중요한 항목 하나와 그 까닭을 고른다(둘째 출구 질문).' },
        wrap: {
          teacher: '"알리러 가기 전에 꼭 확인할 것과, 확인하지 않아도 되는 것은 무엇일까요?" 점검표에 \'증거가 완벽한가\' 같은 함정이 섞여 있다고 미리 말한다. 함정을 고른 학생에게 "증거가 완벽하지 않아도 본 것을 말하면 어른이 함께 찾아요"라고 말해 준다. 내가 지금 안전한지가 가장 먼저라는 점을 짚는다.',
          exitTicket: [
            IT(X('kitchen', CL('알리기 전에 확인할 것에만 표시해요.', '알리기 전 점검', [
              { id: 'k1', text: '나는 지금 안전한 곳에 있다', ok: true }, { id: 'k2', text: '말할 어른을 정했다', ok: true },
              { id: 'k3', text: '언제·어디서·무엇이 있었는지 떠올렸다', ok: true }, { id: 'k4', text: '증거가 완벽하게 모였다' }, { id: 'k5', text: '괴롭힌 친구에게 먼저 알렸다' }]), { difficulty: 0.2 }),
              CL('알리기 전에 확인할 것에만 표시해요(3개).', '알리기 전 점검', [
                { id: 'k1', text: '나는 지금 안전한 곳에 있다', ok: true }, { id: 'k2', text: '말할 어른을 정했다', ok: true }, { id: 'k4', text: '증거가 완벽하게 모였다' }])),
            { type: 'choice', prompt: '알리기 전 점검에서 가장 먼저 확인할 것은?', options: ['증거가 완벽한가', '나는 지금 안전한가', '누가 먼저 잘못했나'], answer: 1, difficulty: 0.2, explain: '내 안전이 먼저예요. 증거가 모자라도 알릴 수 있어요.' },
            { type: 'mood', prompt: '오늘 수업을 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '알리기 전 점검',
          items: [
            { type: 'check', prompt: '알리기 전에 확인할 것에 표시해요.', options: ['지금 안전한가', '말할 어른을 정했나', '있었던 일을 떠올렸나'] },
            { type: 'short', prompt: '증거가 모자라도 알려야 하는 까닭을 한 문장으로 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 7학년 · 스트레스 신호 점검과 건강한 해소 (saf-violence.m.stress-check) ====
  {
    const M = MK('stress-check', [7]);
    const FEEL8 = ['걱정', '불안', '짜증', '편안함', '신남', '외로움', '뿌듯함', '놀람'];
    const SIG = [
      { id: 'b1', text: '잠이 잘 안 온다', to: '몸' }, { id: 'b2', text: '어깨와 목이 뻐근하다', to: '몸' }, { id: 'b3', text: '입맛이 없거나 너무 많이 먹는다', to: '몸' },
      { id: 'm1', text: '작은 일에도 짜증이 난다', to: '마음' }, { id: 'm2', text: '자꾸 걱정이 떠오른다', to: '마음' }, { id: 'm3', text: '좋아하던 일이 재미없다', to: '마음' },
      { id: 'h1', text: '친구와 말이 줄었다', to: '행동' }, { id: 'h2', text: '휴대전화만 오래 본다', to: '행동' }, { id: 'h3', text: '할 일을 자꾸 미룬다', to: '행동' },
    ];
    const SIG3 = ['몸', '마음', '행동'];
    const DAY = [
      { id: 'y1', text: '아침: 늦잠 자서 허둥지둥 등교' }, { id: 'y2', text: '1교시: 쪽지 시험 결과 발표' }, { id: 'y3', text: '점심: 친구들과 운동장 산책' },
      { id: 'y4', text: '방과 후: 학원 숙제가 밀림' }, { id: 'y5', text: '저녁: 가족과 저녁 먹으며 이야기' }, { id: 'y6', text: '밤: 잠들기 전 단톡방 확인' },
    ];
    const RELIEF = [
      { id: 'g1', text: '30분 산책하기', to: '건강한 해소' }, { id: 'g2', text: '좋아하는 음악 듣기', to: '건강한 해소' }, { id: 'g3', text: '가족·친구와 이야기하기', to: '건강한 해소' },
      { id: 'g4', text: '천천히 숨쉬기', to: '건강한 해소' }, { id: 'n1', text: '밤새 게임하기', to: '해로운 해소' }, { id: 'n2', text: '친구에게 화풀이하기', to: '해로운 해소' },
      { id: 'n3', text: '끼니 거르고 혼자 참기', to: '해로운 해소' },
    ];
    const BREATH = { title: '천천히 숨쉬기(우리 반 연습 약속)', workStep: 1, restStep: 1 };

    ALL.push(
      // ---- 도입 ----
      M('intro.feel', {
        title: '시험 전날 밤, 서아의 마음', method: '시험 전날 장면 속 마음 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 장면을 읽어 주고 마음 카드 4장(걱정·불안·짜증·편안함)만 짚는다.', base: '시연 판의 마음 카드 8장 가운데 서아의 마음을 고른다.', challenge: '같은 장면에서 사람마다 다른 마음이 들 수 있는 까닭을 짝과 말한다.' },
        intro: {
          teacher: '"시험 전날 밤 책상 앞에 앉은 서아는 어떤 마음일까요?" 장면을 읽고 몇 명의 답을 들은 뒤 시연 단추로 \'걱정\' 카드가 붙는 모습을 보인다. "스트레스는 약한 사람만 받는다"는 말이 나오면 "운동선수도 경기 전날 잠을 못 이룬다면, 그 선수가 약한 걸까요?"라고 되묻는다. 스트레스는 누구나 겪는 몸과 마음의 반응이고, 오늘은 그 신호를 알아차리고 건강하게 푸는 법을 다룬다고 밝힌다.',
          student: '시험 전날 밤 가상 인물 서아의 장면을 보고 서아의 마음 낱말을 골라요. 같은 장면에서도 다른 마음이 들 수 있는지 생각해요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 's1', label: '시험 전날 밤, 책은 펴 놓았는데 글자가 눈에 안 들어오는 서아' }], cards: FEEL8 }, sequence: [{ match: { s1: '걱정' } }] },
          art: { draw: 'a paper-cut desk at night with an open book, a lamp and a student resting their chin on a hand, small paper clouds above', banner: '서아의 마음은?', extra: [{ motif: 'moon', x: 300, y: 96 }] },
        },
        notes: '학생에게 자신의 스트레스 일을 말하게 하지 않는다. 가상 인물 서아의 마음으로만 이야기한다.',
      }),
      M('intro.body', {
        title: '긴장하면 신호가 오는 몸', method: '스트레스가 느껴지는 몸 부위 고르기', tool: 'body', minutes: 6,
        levels: { easy: '종이 몸에 부위 이름이 보이는 채로 교사와 함께 고른다.', base: '이름을 숨긴 채(교사가 이름 보이기를 끄고) 부위를 짚는다.', challenge: '고른 부위마다 어떤 느낌인지(뻐근함·두근거림 등) 낱말을 붙여 말한다.' },
        intro: {
          teacher: '"발표 순서를 기다릴 때 몸 어디가 먼저 신호를 보내나요?" 시연 단추로 종이 몸의 목·어깨·허리가 골라지는 모습을 보이고, 자리에서 어깨를 한 번 올렸다 내리게 한다. "마음이 힘든 건데 몸이랑 무슨 상관이냐"는 말이 나오면 "걱정할 때 어깨가 올라가 있지 않은지 지금 살펴볼까요?"라고 되묻는다. 몸이 보내는 신호를 알아차리는 것이 스트레스 점검의 첫걸음이라고 말한다.',
          student: '긴장할 때 내 몸에서 신호가 오는 곳을 종이 몸에서 골라 보고, 그곳이 어떤 느낌인지 낱말로 떠올려요.',
          demo: { tool: 'body', options: { mode: 'parts', parts: ['눈', '목', '어깨', '허리', '손목', '무릎', '피부'], names: true }, sequence: [{ parts: ['목', '어깨', '허리'] }] },
          art: { draw: 'a paper-cut human figure with glowing paper patches on the neck, shoulders and lower back, a student rolling their shoulders beside it', banner: '몸이 보내는 신호', extra: [{ motif: 'leaf', x: 300, y: 96 }] },
        },
        notes: '종이 몸에는 배·머리 칸이 없다. 배가 아프거나 머리가 아픈 신호는 학생이 자기 몸을 짚으며 말로 더한다.',
      }),

      // ---- 활동 ----
      M('activity.signal', {
        title: '신호를 몸·마음·행동으로', method: '신호 카드를 몸·마음·행동으로 나누기', tool: 'mindmap', minutes: 16,
        levels: { easy: '신호 카드 6장을 몸·마음·행동 가지에 나누고, 놓으면 바로 맞는지 알려 준다.', base: '신호 카드 9장을 세 가지에 나눈다.', challenge: '셋째 문항에서 오래 이어지면 도움이 필요한 신호를 골라 담는다(잠깐의 신호가 함정으로 섞인다).' },
        activity: {
          title: '신호를 몸·마음·행동으로', tool: 'mindmap',
          teacher: '"\'휴대전화만 오래 본다\'는 몸의 신호일까요, 행동의 신호일까요?" 카드를 놓을 때마다 그 신호가 하루 이틀이면 어떤지, 몇 주씩이면 어떤지 견주게 한다. "참으면 저절로 사라진다"는 학생에게 "잠 못 드는 날이 몇 주째라면 그래도 기다리기만 할까요?"라고 되묻는다. 신호가 오래 가거나 여러 개가 겹치면 담임·상담 선생님, Wee 클래스에 이야기하는 것이 맞는 행동이라고 짚는다.',
          task: '스트레스 신호 카드를 몸·마음·행동 가지에 나누고, 오래 이어지면 도움이 필요한 신호를 골라요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('스트레스 신호 카드를 몸·마음·행동 가지에 나누세요.', SIG3, SIG, { topic: '스트레스 신호' }),
              SB('신호 카드 6장을 몸·마음·행동 가지에 나누세요.', SIG3, pickCards(SIG, ['b1', 'b2', 'm1', 'm2', 'h1', 'h2']), { topic: '스트레스 신호' })),
            IT(SB('가상 인물 서아의 일주일 메모를 몸·마음·행동으로 나누세요.', SIG3, [
              { id: 'x1', text: '배가 자주 아프다고 한다', to: '몸' }, { id: 'x2', text: '"다 귀찮아"라는 말이 늘었다', to: '마음' },
              { id: 'x3', text: '점심을 혼자 먹으려 한다', to: '행동' }, { id: 'x4', text: '숙제를 자꾸 미룬다', to: '행동' }], { topic: '서아의 일주일' })),
            IT(PB('스트레스 신호가 어떨 때 도움을 청해야 할까요? 알맞은 것만 담으세요.', '도움을 청할 때', [
              { id: 'p1', text: '잠 못 드는 날이 몇 주째 이어진다', ok: true }, { id: 'p2', text: '여러 신호가 한꺼번에 겹친다', ok: true },
              { id: 'p3', text: '시험 전날 하루 긴장된다' }, { id: 'p4', text: '좋아하던 일이 오랫동안 재미없다', ok: true }]),
              null,
              PB('오래 이어지면 도움이 필요한 신호만 담으세요(함정이 섞였어요).', '도움이 필요한 신호', [
                { id: 'q1', text: '몇 주째 잠을 잘 못 잔다', ok: true }, { id: 'q2', text: '발표 직전 손에 땀이 난다' },
                { id: 'q3', text: '한 달 넘게 친구를 피한다', ok: true }, { id: 'q4', text: '시험 끝나고 하루 푹 잤다' }, { id: 'q5', text: '오랫동안 아무것도 하기 싫다', ok: true }]),
              { conclude: '스트레스 신호는 몸·마음·행동으로 나타나요. 오래 가거나 여러 개가 겹치면 참지 말고 믿을 어른에게 이야기해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '스트레스 신호를 하나씩 써요.', columns: ['갈래', '신호'], cells: [['몸', ''], ['마음', ''], ['행동', '']], answer: '(예) 잠이 안 온다, 짜증이 잦다, 말이 줄었다' }] },
      }),
      M('activity.breath', {
        title: '천천히 숨쉬기 타이머', method: '천천히 숨쉬기 구간 타이머 맞추고 따라 하기', tool: 'timer', minutes: 17,
        levels: { easy: '문항에 적힌 값(들이쉬기 5초·내쉬기 7초·5번)대로 타이머를 맞추고, 시작 값이 거의 맞춰져 있다.', base: '처음 값이 흩어진 판에서 우리 반 약속 값을 직접 맞추고 따라 한 뒤 느낌을 점검한다.', challenge: '셋째 문항에서 발표 직전처럼 시간이 짧을 때에 맞게 구간을 바꿔 계획한다.' },
        activity: {
          title: '천천히 숨쉬기 타이머', tool: 'timer',
          teacher: '"화가 나거나 긴장될 때 숨은 빨라질까요, 느려질까요?" 우리 반 연습 약속(들이쉬기 5초·내쉬기 7초·5번)으로 타이머를 맞춘 뒤 다 같이 시작 단추를 눌러 따라 한다. 이 값은 수업에서 정한 연습 값이고 사람마다 편한 길이가 다르다고 말해 준다. "숨쉬기로 뭐가 바뀌냐"는 학생에게 "끝난 뒤 어깨가 처음보다 내려갔는지 살펴볼까요?"라고 되묻는다. 어지러우면 바로 멈추고 보통 숨으로 돌아오게 한다.',
          task: '천천히 숨쉬기 구간 타이머를 우리 반 연습 약속에 맞추고 함께 따라 한 뒤, 해 본 느낌을 스스로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '들이쉬기 5초·내쉬기 7초를 5번 하도록 타이머를 맞추고, 따라 한 뒤 점검 칸에 표시하세요.', toolOptions: Object.assign({ plan: { work: 8, rest: 2, rounds: 2 } }, BREATH), target: { plan: { work: 5, rest: 7, rounds: 5 }, selfCheck: ['타이머에 맞춰 끝까지 따라 했다', '어깨 힘이 조금 풀렸는지 살폈다'] } },
              { prompt: '들이쉬기 5초·내쉬기 7초를 5번 하도록 타이머를 맞추세요(거의 맞춰져 있어요).', toolOptions: { plan: { work: 5, rest: 7, rounds: 3 } } }),
            IT({ prompt: '천천히 숨쉬기의 차례 카드를 놓으세요.', toolOptions: { title: '숨쉬기 차례', cards: ['입으로 길게 내쉬기', '편하게 앉아 어깨 내리기', '코로 천천히 들이쉬기'] }, target: { order: ['편하게 앉아 어깨 내리기', '코로 천천히 들이쉬기', '입으로 길게 내쉬기'] } }),
            IT({ prompt: '잠들기 전에 쓸 숨쉬기를 계획하세요: 들이쉬기 5초·내쉬기 7초를 8번.', toolOptions: Object.assign({ plan: { work: 8, rest: 3, rounds: 4 } }, BREATH), target: { plan: { work: 5, rest: 7, rounds: 8 } } },
              null,
              { prompt: '발표 직전 1분이 채 안 남았어요. 들이쉬기 5초·내쉬기 7초를 3번만 하도록 바꿔 계획하세요.', target: { plan: { work: 5, rest: 7, rounds: 3 } } },
              { conclude: '천천히 숨쉬기는 어디서나 할 수 있는 해소 방법이에요. 상황에 따라 길이를 바꾸고, 그래도 힘들면 어른에게 이야기해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '천천히 숨쉬기를 해 본 뒤 몸과 마음이 어땠는지 한 문장으로 써요.' }] },
        notes: '들이쉬기 5초·내쉬기 7초·5번은 수업에서 정한 연습 값이다(근거 수치 아님 — 화면에도 \'우리 반 연습 약속\'이라고 밝힌다). 어지러움을 느끼는 학생은 멈추게 한다.',
      }),
      M('activity.day', {
        title: '하루 중 스트레스가 오르는 순간', method: '하루 중 스트레스가 오르는 순간 놓기', tool: 'timeline', minutes: 16,
        levels: { easy: '가상 학생의 하루 장면 4장을 시간 띠에 차례로 놓는다.', base: '장면 6장을 놓고, 스트레스가 오르는 순간과 쉬어 갈 틈으로 나눈다.', challenge: '셋째 문항에서 쉬어 갈 틈마다 넣을 해소 방법을 4쌍 짝짓는다(함정 카드가 섞인다).' },
        activity: {
          title: '하루 중 스트레스가 오르는 순간', tool: 'timeline',
          teacher: '"서아의 하루에서 스트레스가 가장 크게 오른 때는 언제고, 숨 돌릴 틈은 어디 있었을까요?" 장면을 시간 띠에 놓은 뒤 오르는 순간과 쉬는 틈을 나누게 한다. "바쁜 날엔 쉴 틈이 없다"는 학생에게 "점심시간 10분 산책이나 학원 가는 길 음악은 틈이 될 수 없을까요?"라고 되묻는다. 스트레스를 없애는 것이 아니라 하루 사이사이 틈을 만드는 것이 목표라는 점을 짚는다.',
          task: '가상 학생 서아의 하루 장면 카드를 차례로 놓고, 스트레스가 오르는 순간과 쉬어 갈 틈을 찾아요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(OB('서아의 하루 장면을 시간 차례로 놓으세요.', DAY, { axis: ['아침', '밤'] }),
              OB('서아의 하루 장면 4장을 시간 차례로 놓으세요.', pickCards(DAY, ['y1', 'y3', 'y4', 'y6']), { axis: ['아침', '밤'] })),
            IT(SB('서아의 하루 장면을 \'스트레스가 오름\'과 \'쉬어 갈 틈\'으로 나누세요.', ['스트레스가 오름', '쉬어 갈 틈'], [
              { id: 'y1', text: '아침: 늦잠 자서 허둥지둥 등교', to: '스트레스가 오름' }, { id: 'y2', text: '1교시: 쪽지 시험 결과 발표', to: '스트레스가 오름' },
              { id: 'y3', text: '점심: 친구들과 운동장 산책', to: '쉬어 갈 틈' }, { id: 'y4', text: '방과 후: 학원 숙제가 밀림', to: '스트레스가 오름' },
              { id: 'y5', text: '저녁: 가족과 저녁 먹으며 이야기', to: '쉬어 갈 틈' }]),
              SB('서아의 하루 장면 4장을 \'스트레스가 오름\'과 \'쉬어 갈 틈\'으로 나누세요.', ['스트레스가 오름', '쉬어 갈 틈'], [
                { id: 'y1', text: '아침: 늦잠 자서 허둥지둥 등교', to: '스트레스가 오름' }, { id: 'y3', text: '점심: 친구들과 운동장 산책', to: '쉬어 갈 틈' },
                { id: 'y4', text: '방과 후: 학원 숙제가 밀림', to: '스트레스가 오름' }, { id: 'y5', text: '저녁: 가족과 저녁 먹으며 이야기', to: '쉬어 갈 틈' }])),
            IT(MB('쉬어 갈 틈마다 넣을 해소 방법을 이어 보세요.', [['쉬는 시간 5분', '창밖 보며 천천히 숨쉬기'], ['학원 가는 길', '좋아하는 음악 듣기']], ['쉬는 시간마다 단톡방 확인'], { axis: ['아침', '밤'] }),
              null,
              MB('쉬어 갈 틈마다 넣을 해소 방법을 이어 보세요(함정이 섞였어요).', [['쉬는 시간 5분', '창밖 보며 천천히 숨쉬기'], ['점심시간', '친구와 운동장 걷기'], ['학원 가는 길', '좋아하는 음악 듣기'], ['잠들기 전', '휴대전화 내려놓고 일기 쓰기']], ['쉬는 시간마다 단톡방 확인', '밤늦게까지 영상 보기'], { axis: ['아침', '밤'] }),
              { conclude: '하루에는 스트레스가 오르는 순간과 쉬어 갈 틈이 함께 있어요. 틈마다 건강한 해소를 넣어 두면 하루가 버틸 만해져요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '나의 하루에서 쉬어 갈 틈과 해소 방법을 써요.', columns: ['틈', '해소 방법'], cells: [['쉬는 시간', ''], ['잠들기 전', '']], answer: '(예) 천천히 숨쉬기, 휴대전화 내려놓고 일기 쓰기' }] },
      }),
      M('activity.budget', {
        title: '저녁 자유 시간에 넣을 해소', method: '저녁 시간 예산 안에서 해소 활동 고르기', tool: 'economy', minutes: 17,
        levels: { easy: '해소 활동 카드 4장을 건강한 해소와 해로운 해소로 나누고, 놓으면 바로 맞는지 알려 준다.', base: '해소 활동 카드 7장(해로운 해소 섞임)을 나누고, 저녁 계획에 넣을 활동을 고른다.', challenge: '셋째 문항에서 평일 저녁과 시험 전 저녁 계획을 견주어 나누고, 고른 조합이 건강한 까닭을 활동지에 한 줄로 쓴다.' },
        activity: {
          title: '저녁 자유 시간에 넣을 해소', tool: 'economy',
          teacher: '"저녁 자유 시간이 정해져 있다면, 무엇으로 채워야 다음 날이 덜 힘들까요?" 활동 카드를 나눈 뒤 계획에 넣을 것을 고르게 한다. "게임이나 휴대폰이면 충분하다"는 학생에게 "게임도 즐거운 해소가 될 수 있지만, 밤새 하면 다음 날 몸은 어떨까요?"라고 되묻는다. 해로운 해소는 금방은 편해도 몸과 관계를 더 힘들게 한다는 점을 짚는다.',
          task: '저녁 자유 시간에 할 해소 활동 카드를 건강한 해소와 해로운 해소로 나누고, 넘치지 않게 저녁 계획에 넣을 것을 골라요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('해소 활동 카드를 건강한 해소와 해로운 해소로 나누세요.', ['건강한 해소', '해로운 해소'], RELIEF),
              SB('해소 활동 카드 4장을 나누세요.', ['건강한 해소', '해로운 해소'], pickCards(RELIEF, ['g1', 'g3', 'n1', 'n2']))),
            IT(PB('오늘 저녁 자유 시간(1시간)에 넣을 것만 골라 담으세요.', '오늘 저녁 계획', [
              { id: 'e1', text: '20분 산책', ok: true }, { id: 'e2', text: '음악 들으며 정리 20분', ok: true }, { id: 'e3', text: '가족과 이야기 20분', ok: true },
              { id: 'e4', text: '새벽까지 게임' }, { id: 'e5', text: '친구에게 화풀이 메시지' }])),
            IT(PB('다음 날 몸을 더 지치게 하는 해소만 골라 담으세요.', '더 지치게 하는 해소', [
              { id: 'z1', text: '잠을 줄여 영상 보기', ok: true }, { id: 'z2', text: '끼니 거르고 혼자 참기', ok: true }, { id: 'z3', text: '가볍게 스트레칭하기' }]),
              null,
              SB('평일 저녁과 시험 전 저녁 계획을 견주어 나누세요(맞지 않는 카드는 남겨요).', ['평일 저녁', '시험 전 저녁'], [
                { id: 'w1', text: '친구와 운동 1시간', to: '평일 저녁' }, { id: 'w2', text: '10분 산책 뒤 공부', to: '시험 전 저녁' },
                { id: 'w3', text: '천천히 숨쉬기 후 일찍 자기', to: '시험 전 저녁' }, { id: 'w4', text: '가족과 보드게임', to: '평일 저녁' }, { id: 'w5', text: '밤새 벼락치기' }]),
              { conclude: '건강한 해소는 몸·마음·관계를 함께 돌봐요. 시간이 짧은 날일수록 짧고 건강한 해소를 골라요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내가 고른 저녁 해소 조합이 건강한 까닭을 한 줄로 써요.' }] },
        notes: '시장 놀이판의 예산 막대는 돈(원)만 보여 주므로, 저녁 시간 예산은 카드 나누기와 고르기로 꾸몄다(활동 이름은 시간 \'1시간\'을 글로만 적는다).',
      }),

      // ---- 정리 ----
      M('wrap.words', {
        title: '힘든 날 나에게 건네는 말', method: '나에게 건네는 말 고르기', tool: 'wordcards', minutes: 6,
        levels: { easy: '말 카드 4장을 도움이 되는 말과 상처가 되는 말로 가른다.', base: '말 카드 6장을 가른다.', challenge: '가른 뒤 도움이 되는 말 하나를 내 말로 바꿔 쓴다(셋째 출구 질문).' },
        wrap: {
          teacher: '"힘든 날 내가 나에게 하는 말은 친구에게 하는 말과 같을까요?" 카드를 가른 뒤 상처가 되는 말을 친구에게 한다면 어떨지 떠올리게 한다. "나한테는 엄하게 해야 발전한다"는 말에는 "실수한 친구에게 \'넌 왜 이 모양이야\'라고 하면 그 친구가 더 잘하게 될까요?"라고 되묻는다. 도움이 되는 말에는 \'도움을 청해도 괜찮다\'도 들어 있다고 짚는다.',
          exitTicket: [
            IT(X('wordcards', SB('나에게 건네는 말을 두 칸으로 가르세요.', ['도움이 되는 말', '상처가 되는 말'], [
              { id: 'w1', text: '"오늘은 여기까지 해도 괜찮아"', to: '도움이 되는 말' }, { id: 'w2', text: '"힘들면 선생님께 말해도 돼"', to: '도움이 되는 말' },
              { id: 'w3', text: '"하나씩 하면 돼"', to: '도움이 되는 말' }, { id: 'w4', text: '"넌 왜 맨날 이 모양이야"', to: '상처가 되는 말' },
              { id: 'w5', text: '"힘든 건 약해서 그래"', to: '상처가 되는 말' }, { id: 'w6', text: '"아무도 날 신경 안 써"', to: '상처가 되는 말' }]), { difficulty: 0.2 }),
              SB('말 카드 4장을 두 칸으로 가르세요.', ['도움이 되는 말', '상처가 되는 말'], [
                { id: 'w1', text: '"오늘은 여기까지 해도 괜찮아"', to: '도움이 되는 말' }, { id: 'w2', text: '"힘들면 선생님께 말해도 돼"', to: '도움이 되는 말' },
                { id: 'w4', text: '"넌 왜 맨날 이 모양이야"', to: '상처가 되는 말' }, { id: 'w5', text: '"힘든 건 약해서 그래"', to: '상처가 되는 말' }])),
            { type: 'choice', prompt: '"스트레스는 참으면 저절로 사라진다"는 말에 대한 생각으로 가장 알맞은 것은?', options: ['맞다, 참는 것이 가장 좋다', '신호가 오래 가면 건강하게 풀고 도움을 청한다', '스트레스는 약한 사람만 받는다'], answer: 1, difficulty: 0.2, explain: '오래 가는 신호는 혼자 참기보다 풀고 이야기해요.' },
            { type: 'short', prompt: '도움이 되는 말 하나를 내 말로 바꿔 써요.' },
          ],
        },
        worksheet: {
          title: '나에게 건네는 말',
          items: [
            { type: 'short', prompt: '힘든 날 나에게 해 줄 도움이 되는 말을 하나 써요.' },
            { type: 'check', prompt: '도움이 되는 말에 표시해요.', options: ['오늘은 여기까지 해도 괜찮아', '힘들면 말해도 돼', '하나씩 하면 돼'] },
          ],
        },
      }),
      M('wrap.plan', {
        title: '이번 주 해 볼 해소 방법', method: '이번 주 해 볼 해소 방법 점검', tool: 'kitchen', minutes: 6,
        levels: { easy: '항목 4개(건강한 해소 3개·해로운 해소 1개)에서 해 볼 것에 표시한다.', base: '항목 6개(건강한 해소 4개·해로운 해소 2개)에서 표시한다.', challenge: '힘들 때 이야기할 사람 한 명을 이름 대신 관계(예: 담임 선생님)로 적는다(셋째 출구 질문).' },
        wrap: {
          teacher: '"이번 주에 실제로 해 볼 해소 방법은 무엇인가요?" 점검표에 해로운 해소가 섞여 있다고 미리 말하고 건강한 것만 표시하게 한다. "할 시간이 없다"는 학생에게 오늘 숨쉬기 타이머처럼 1분짜리도 해소가 된다고 말해 준다. 이야기할 사람은 이름이 아니라 관계로 적게 한다.',
          exitTicket: [
            IT(X('kitchen', CL('이번 주 해 볼 건강한 해소 방법에만 표시해요.', '이번 주 해소 계획', [
              { id: 'k1', text: '천천히 숨쉬기 1분', ok: true }, { id: 'k2', text: '저녁 산책 20분', ok: true }, { id: 'k3', text: '믿는 사람과 이야기하기', ok: true },
              { id: 'k4', text: '잠들기 전 휴대전화 내려놓기', ok: true }, { id: 'k5', text: '밤새 게임으로 잊기' }, { id: 'k6', text: '아무에게도 말 안 하고 참기' }]), { difficulty: 0.2 }),
              CL('이번 주 해 볼 건강한 해소 방법에만 표시해요(4개).', '이번 주 해소 계획', [
                { id: 'k1', text: '천천히 숨쉬기 1분', ok: true }, { id: 'k2', text: '저녁 산책 20분', ok: true }, { id: 'k3', text: '믿는 사람과 이야기하기', ok: true }, { id: 'k5', text: '밤새 게임으로 잊기' }])),
            { type: 'choice', prompt: '스트레스 신호가 몇 주째 이어질 때 가장 알맞은 행동은?', options: ['더 참아 본다', '담임·상담 선생님이나 Wee 클래스에 이야기한다', '혼자 해결될 때까지 기다린다'], answer: 1, difficulty: 0.2, explain: '오래 이어지는 신호는 어른과 함께 살펴요.' },
            { type: 'short', prompt: '힘들 때 이야기할 사람을 이름 대신 관계로 한 명 적어요.' },
          ],
        },
        worksheet: {
          title: '이번 주 해소 계획',
          items: [
            { type: 'check', prompt: '이번 주 해 볼 해소 방법에 표시해요.', options: ['천천히 숨쉬기', '산책', '믿는 사람과 이야기하기', '휴대전화 내려놓고 일찍 자기'] },
            { type: 'short', prompt: '힘들 때 이야기할 사람을 관계로 적어요(예: 담임 선생님).' },
          ],
        },
      }),
    );
  }

  // ==== 7학년 · 가족과 마음을 잇는 대화와 도움 제도 (saf-violence.m.family-talk) ====
  {
    const M = MK('family-talk', [7]);
    const IMSG = [['"너는 맨날 내 방에 그냥 들어와!"', '"노크 없이 들어오면 놀라요. 문을 두드려 주면 좋겠어요"'], ['"엄마는 내 말을 하나도 안 들어!"', '"말이 끊기면 속상해요. 끝까지 들어 주면 좋겠어요"'],
      ['"아빠는 왜 맨날 공부 얘기만 해!"', '"공부 얘기만 하면 답답해요. 오늘 있었던 일도 물어봐 주면 좋겠어요"'], ['"형은 늘 자기 맘대로야!"', '"말없이 내 물건을 쓰면 서운해. 먼저 물어봐 주면 좋겠어"'],
      ['"너 때문에 늦었잖아!"', '"약속 시간이 지나 걱정됐어. 늦으면 미리 알려 주면 좋겠어"']];
    const SIGNS = [
      { id: 'a1', text: '게임 시간을 두고 부모님과 말다툼했다', to: '대화로 풀 수 있는 다툼' }, { id: 'a2', text: '동생과 방 청소 차례로 다퉜다', to: '대화로 풀 수 있는 다툼' },
      { id: 'a3', text: '귀가 시간을 두고 의견이 다르다', to: '대화로 풀 수 있는 다툼' }, { id: 'h1', text: '집에 가면 무섭다는 말을 자주 한다', to: '어른의 도움이 필요한 신호' },
      { id: 'h2', text: '다친 곳을 숨기며 까닭을 말하지 못한다', to: '어른의 도움이 필요한 신호' }, { id: 'h3', text: '며칠째 끼니를 챙겨 주는 어른이 없다', to: '어른의 도움이 필요한 신호' },
      { id: 'h4', text: '어른이 소리 지르며 물건을 던지는 일이 잦다', to: '어른의 도움이 필요한 신호' },
    ];
    const SIGN2 = ['대화로 풀 수 있는 다툼', '어른의 도움이 필요한 신호'];
    const TOWN = { grid: [6, 4], title: '가상의 우리 동네', places: [
      { name: '우리 학교 상담실', icon: 'school', at: [1, 1] }, { name: '경찰서', icon: 'police', at: [4, 0] }, { name: '청소년상담복지센터', icon: 'office', at: [3, 2] },
      { name: '아파트', icon: 'apartment', at: [0, 3] }, { name: '공원', icon: 'park', at: [5, 3] }, { name: '시장', icon: 'market', at: [2, 3] }, { name: '도서관', icon: 'library', at: [5, 1] },
    ] };

    ALL.push(
      // ---- 도입 ----
      M('intro.dinner', {
        title: '저녁 식탁, 대화가 막힌 칸', method: '저녁 식탁 갈등 장면 이어 보기', tool: 'story', minutes: 6,
        levels: { easy: '교사가 장면 카드 3장만 보이며 대화가 막힌 칸을 함께 고른다.', base: '시연 판의 장면 카드 5장에서 대화가 막히는 순간을 고른다.', challenge: '막히지 않으려면 어느 칸의 말이 달라져야 할지 고르고, 바꿀 말을 짝과 말한다.' },
        intro: {
          teacher: '"이 가족의 저녁 대화는 어느 칸에서 막혔을까요?" 휴대폰 사용으로 다투는 가상 가족의 이야기 칸을 넘겨 보이고, 시연 단추로 \'민서: "알아서 할게!" 하고 방문을 닫는다\' 칸이 바구니에 담기는 모습을 보인다. "부모님이 먼저 잔소리했으니 부모님 잘못"이라는 말이 나오면 "누가 잘못했는지보다, 어떤 말이 오가면 대화가 이어질까요?"라고 되묻는다. 다툼은 어느 가족에게나 있고, 오늘은 마음을 전하는 말과 도움이 필요한 때를 구별한다고 밝힌다.',
          student: '휴대폰 때문에 다투는 가상 가족의 이야기 칸을 보고, 대화가 막히는 순간을 찾아요. 그 칸의 말이 어떻게 달라지면 좋을지 생각해요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '대화가 막힌 칸', title: '저녁 식탁', cards: [
            { id: 'c1', text: '엄마: "밥 먹을 땐 휴대폰 내려놓자"', motif: 'house' }, { id: 'c2', text: '민서: "잠깐만, 이것만 보고"', motif: 'cloud' },
            { id: 'c3', text: '아빠: "너는 맨날 휴대폰만 보니?"', motif: 'storm' }, { id: 'c4', text: '민서: "알아서 할게!" 하고 방문을 닫는다', motif: 'moon' },
            { id: 'c5', text: '식탁에 아무 말이 없다', motif: 'leaf' }], shuffle: false }, sequence: [{ pick: ['c4'] }] },
          art: { draw: 'a paper-cut family dinner table with a phone on it, a teenager closing a door in the background and parents looking at each other', banner: '대화는 어디서 막혔을까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '가상 가족이다. 학생에게 자기 집 이야기를 하게 하지 않는다. ' + SAFE_NOTE,
      }),
      M('intro.survey', {
        title: '대화가 막히는 때 원그래프', method: '가상 설문으로 대화가 막히는 순간 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 조각마다 값(%)을 읽어 주고 가장 큰 조각을 함께 찾는다.', base: '값을 말하지 않고 조각 크기만 보고 가장 큰 조각을 고른다.', challenge: '이 그래프로는 알 수 없는 것(예: 왜 막히는지, 우리 반 실제 생각)을 하나 말한다.' },
        intro: {
          teacher: '"가상 설문에서 중학생이 가족과 대화가 가장 많이 막힌다고 답한 때는 언제일까요?" 원그래프를 띄우고 시연 단추로 가장 큰 조각을 고르는 모습을 보인다. 이 자료는 수업용으로 지어낸 가상 설문이라고 먼저 밝힌다. "다들 그러니까 대화가 안 되는 게 정상"이라는 말이 나오면 "막히는 때를 미리 알면 그때 쓸 말을 준비할 수 있지 않을까요?"라고 되묻는다.',
          student: '가상 설문 원그래프를 보고 가족과 대화가 막히는 가장 큰 조각을 찾아요. 이 그래프로 알 수 없는 것도 생각해요.',
          demo: { tool: 'chart', options: { type: 'circle', mode: 'read', title: '가족과 대화가 막히는 때(가상 설문)', unit: '%', data: [['휴대폰·게임 시간', 32], ['성적·공부', 26], ['귀가 시간', 18], ['집안일', 14], ['친구 관계', 10]], question: '가장 큰 조각은?', choices: ['휴대폰·게임 시간', '성적·공부', '귀가 시간', '집안일', '친구 관계'] }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper-cut pie chart pinned on a living room wall, a family sitting around it with speech bubbles', banner: '언제 대화가 막힐까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '원그래프 값은 모두 가상이다.',
      }),

      // ---- 활동 ----
      M('activity.imsg', {
        title: '너-전달법을 나-전달법으로', method: '너-전달법을 나-전달법으로 바꾸기', tool: 'wordcards', minutes: 16,
        levels: { easy: '"너는…" 문장 3개에 같은 뜻의 나-전달법 카드를 짝 짓고, 놓으면 바로 맞는지 알려 준다.', base: '"너는…" 문장 5개에 나-전달법 카드를 짝 짓는다(함정 카드 1장).', challenge: '셋째 문항에서 상황·감정·바람이 모두 든 문장만 골라 담는다.' },
        activity: {
          title: '너-전달법을 나-전달법으로', tool: 'wordcards',
          teacher: '"\'너는 맨날…\'로 시작하는 말을 들으면 듣는 사람은 먼저 무엇을 할까요?" 짝짓기를 마친 뒤 두 문장을 소리 내어 견주어 읽게 한다. "나-전달법은 참으라는 말"이라는 학생에게 "\'속상해요\'라고 내 마음을 분명히 말하는 것이 참는 걸까요?"라고 되묻는다. 나-전달법은 상황·감정·바람 세 조각으로 되어 있다는 것을 칠판에 적는다.',
          task: '"너는…"으로 시작하는 문장 카드에 같은 뜻의 나-전달법 문장 카드를 짝 짓고, 세 조각이 다 든 문장을 골라요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(MB('"너는…" 문장마다 같은 뜻의 나-전달법 카드를 이어 보세요.', IMSG, ['"그래, 네 맘대로 해"']),
              MB('"너는…" 문장 세 개에 나-전달법 카드를 이어 보세요.', IMSG.slice(0, 3), [])),
            IT(SB('문장 카드를 너-전달법과 나-전달법으로 나누세요.', ['너-전달법', '나-전달법'], [
              { id: 'y1', text: '"넌 왜 늘 그런 식이야?"', to: '너-전달법' }, { id: 'y2', text: '"약속을 잊으면 서운해"', to: '나-전달법' },
              { id: 'y3', text: '"당신은 내 생각은 안 하지"', to: '너-전달법' }, { id: 'y4', text: '"갑자기 소리치면 무서워요"', to: '나-전달법' }])),
            IT(PB('상황·감정·바람이 모두 든 문장만 골라 담으세요.', '세 조각이 다 든 문장', [
              { id: 'p1', text: '"말없이 늦으면 걱정돼요. 미리 연락할게요"', ok: true }, { id: 'p2', text: '"속상해"' },
              { id: 'p3', text: '"내 방에 그냥 들어오면 놀라요. 노크해 주면 좋겠어요"', ok: true }, { id: 'p4', text: '"그만 좀 해!"' }]),
              null,
              PB('상황·감정·바람이 모두 든 문장만 골라 담으세요(조각 하나가 빠진 문장이 섞였어요).', '세 조각이 다 든 문장', [
                { id: 'p1', text: '"말없이 늦으면 걱정돼요. 미리 연락할게요"', ok: true }, { id: 'p5', text: '"숙제 검사할 때 화나요"' },
                { id: 'p3', text: '"내 방에 그냥 들어오면 놀라요. 노크해 주면 좋겠어요"', ok: true }, { id: 'p6', text: '"좀 믿어 주면 좋겠어요"' },
                { id: 'p7', text: '"성적 얘기만 하면 답답해요. 내 이야기도 들어 주세요"', ok: true }]),
              { conclude: '나-전달법은 상황·감정·바람을 담아 상대를 탓하지 않고 내 마음을 전하는 말이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"너는 맨날 내 말을 안 들어!"를 나-전달법(상황·감정·바람)으로 바꿔 써요.' }],
          easy: [{ type: 'choice', prompt: '나-전달법 문장은?', options: ['"말이 끊기면 속상해요"', '"넌 내 말 안 들어"'], answer: '"말이 끊기면 속상해요"' }] },
      }),
      M('activity.write', {
        title: '민서의 나-전달법 메시지 쓰기', method: '가상 인물의 입장에서 나-전달법 쓰기', tool: 'rubric-writing', minutes: 17,
        levels: { easy: '상황·감정·바람 칸이 나뉜 문장 틀("___ 때 나는 ___. ___ 주면 좋겠어요")을 채워 쓴다.', base: '칸 없이 나-전달법 메시지를 쓰고 기준표로 점검한다.', challenge: '셋째 문항에서 부모님 입장의 답장 한 줄을 써 본다.' },
        activity: {
          title: '민서의 나-전달법 메시지 쓰기', tool: 'rubric-writing',
          teacher: '"민서가 \'짜증 나, 다신 말 안 해\'라고 보내면 부모님은 무엇을 알게 될까요?" 늦은 귀가로 꾸중을 들은 가상 인물 민서의 상황을 읽고 민서 입장에서 메시지를 쓰게 한다. "꾸중 들었으니 민서는 사과만 하면 된다"는 학생에게 "사과와 함께 민서의 마음과 바람도 전하면 다음엔 어떻게 될까요?"라고 되묻는다. 우리 집 이야기를 쓰지 않고 민서의 상황으로만 쓰게 한다.',
          task: '늦은 귀가로 꾸중을 들은 가상 인물 민서의 입장에서 부모님께 보낼 나-전달법 메시지를 쓰고 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '민서가 되어 부모님께 보낼 나-전달법 메시지를 쓰세요.', toolOptions: { topic: '가상 상황: 민서는 친구와 놀다 연락 없이 늦게 들어와 크게 꾸중을 들었다. 민서가 되어 부모님께 보낼 나-전달법 메시지를 두세 문장으로 쓰세요.', minChars: 30, maxChars: 180, minSentences: 2, maxSentences: 3, title: '민서의 메시지' }, target: { selfCheck: ['상황을 썼다', '내 감정을 썼다', '바람을 썼다'] } },
              { prompt: '칸을 채워 민서의 나-전달법 메시지를 쓰세요.', toolOptions: { starter: '(상황) ___ 때 (감정) 나는 ___. (바람) ___ 주면 좋겠어요.' } }),
            IT({ prompt: '민서가 늦은 까닭과 다음 약속을 담은 문장을 쓰세요.', toolOptions: { topic: '민서가 연락 없이 늦은 까닭과, 다음에 지킬 약속을 두 문장으로 쓰세요.', minChars: 20, maxChars: 140, minSentences: 2, maxSentences: 3, title: '까닭과 약속' }, target: { selfCheck: ['변명이 아니라 까닭을 썼다', '지킬 수 있는 약속을 썼다', '상대를 탓하지 않았다'] } },
              { prompt: '칸을 채워 까닭과 약속을 쓰세요.', toolOptions: { starter: '(까닭) ___해서 늦었어요. (약속) 다음엔 ___할게요.' } }),
            IT({ prompt: '앞의 글을 이어 민서의 메시지를 완성하세요.', toolOptions: { topic: '나-전달법과 약속을 이어 민서가 부모님께 보낼 메시지를 완성하세요.', minChars: 40, maxChars: 220, minSentences: 3, maxSentences: 4, title: '완성한 메시지' }, target: { selfCheck: ['상황·감정·바람이 다 들었다', '약속이 들었다', '\'너는\'으로 탓하는 말이 없다'], mustInclude: [['좋겠어요', '주세요', '할게요']] } },
              { prompt: '칸을 채워 메시지를 완성하세요.', toolOptions: { minChars: 30, starter: '___ 때 나는 ___. ___ 주면 좋겠어요. 다음엔 ___할게요.' } },
              { prompt: '부모님 입장에서 민서에게 보낼 답장 한 줄을 써 보세요.', toolOptions: { topic: '민서의 메시지를 받은 부모님 입장에서, 걱정한 마음과 바람을 담은 답장을 한두 문장으로 쓰세요.', minChars: 15, maxChars: 120, minSentences: 1, maxSentences: 2, title: '부모님의 답장' }, target: { selfCheck: ['부모님의 감정을 썼다', '부모님의 바람을 썼다', '나-전달법으로 썼다'] } },
              { conclude: '나-전달법은 상대를 탓하지 않고 마음과 바람을 전해 대화가 이어지게 해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '민서의 메시지에서 상황·감정·바람을 하나씩 찾아 써요.' }] },
      }),
      M('activity.signs', {
        title: '다툼과 도움이 필요한 신호', method: '다툼과 도움이 필요한 신호 가르기', tool: 'mindmap', minutes: 16,
        levels: { easy: '상황 카드 4장을 두 가지에 나누고, 놓으면 바로 맞는지 알려 준다.', base: '상황 카드 7장을 두 가지에 나눈다.', challenge: '셋째 문항에서 신호마다 판단 근거 카드를 이어 붙인다(함정 근거가 섞인다).' },
        activity: {
          title: '다툼과 도움이 필요한 신호', tool: 'mindmap',
          teacher: '"게임 시간으로 말다툼한 것과, 집에 가면 무섭다고 자주 말하는 것은 같은 일일까요?" 카드를 나눈 뒤 \'어른의 도움이 필요한 신호\' 칸을 함께 읽는다. "집안일은 밖에 알리면 안 된다"는 학생에게 "몸을 다치거나 무서움이 계속된다면 그건 집안일이 아니라 보호가 필요한 일이에요"라고 말해 준다. 훈육이라는 이름으로도 때리거나 위협하는 것은 괜찮지 않고, 그 잘못은 어른에게 있다는 점을 분명히 한다.',
          task: '가상 상황 카드를 \'대화로 풀 수 있는 다툼\'과 \'어른의 도움이 필요한 신호\'로 나누고, 판단 근거를 붙여요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('상황 카드를 두 가지에 나누세요.', SIGN2, SIGNS, { topic: '어떤 일일까?' }),
              SB('상황 카드 4장을 두 가지에 나누세요.', SIGN2, pickCards(SIGNS, ['a1', 'a2', 'h1', 'h3']), { topic: '어떤 일일까?' })),
            IT(PB('훈육이 아니라 보호가 필요한 일만 골라 담으세요.', '보호가 필요한 일', [
              { id: 'q1', text: '잘못했다며 때려서 다치게 한다', ok: true }, { id: 'q2', text: '말을 안 들으면 집에서 쫓아낸다고 위협한다', ok: true },
              { id: 'q3', text: '약속을 어겨 휴대폰 사용 시간을 줄였다' }, { id: 'q4', text: '숙제를 마치고 놀자고 했다' }]),
              null,
              PB('훈육이 아니라 보호가 필요한 일만 골라 담으세요(헷갈리는 카드가 섞였어요).', '보호가 필요한 일', [
                { id: 'q1', text: '잘못했다며 때려서 다치게 한다', ok: true }, { id: 'q2', text: '말을 안 들으면 집에서 쫓아낸다고 위협한다', ok: true },
                { id: 'q3', text: '약속을 어겨 휴대폰 사용 시간을 줄였다' }, { id: 'q5', text: '아이를 며칠씩 혼자 두고 돌보지 않는다', ok: true }, { id: 'q6', text: '늦게 온 까닭을 물었다' }])),
            IT(MB('신호마다 판단 근거를 이어 보세요.', [['집에 가면 무섭다는 말을 자주 한다', '두려움이 계속된다'], ['다친 곳을 숨기며 까닭을 말하지 못한다', '몸을 다쳤고 말하기를 겁낸다']], ['사춘기라 그렇다'], { topic: '왜 도움이 필요할까?' }),
              null,
              MB('신호마다 판단 근거를 이어 보세요(함정 근거가 섞였어요).', [['집에 가면 무섭다는 말을 자주 한다', '두려움이 계속된다'], ['다친 곳을 숨기며 까닭을 말하지 못한다', '몸을 다쳤고 말하기를 겁낸다'], ['며칠째 끼니를 챙겨 주는 어른이 없다', '돌봄을 받지 못한다']], ['사춘기라 그렇다', '그 집 일은 그 집이 알아서 한다'], { topic: '왜 도움이 필요할까?' }),
              { conclude: '의견이 달라 다투는 것은 대화로 풀 수 있지만, 몸을 다치게 하거나 두려움이 계속되면 보호가 필요한 일이에요. 그 잘못은 어른에게 있고, 알리는 것은 잘한 일이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '\'집안일은 밖에 알리면 안 된다\'는 말이 틀릴 때가 언제인지 한 문장으로 써요.' }] },
        notes: '상황 카드는 짧고 구체 묘사가 없는 문장만 쓴다. 학생에게 자기 집과 비슷한지 묻지 않는다. 걱정을 말하는 학생은 수업 뒤 따로 만나 상담 선생님에게 잇는다.',
      }),
      M('activity.help', {
        title: '동네 지도에서 도움 받을 곳', method: '동네 지도에서 도움 받을 곳 찾기', tool: 'map', minutes: 17,
        levels: { easy: '지도에 장소 이름이 보이고, 핀을 놓으면 그 칸 이름이 바로 읽힌다.', base: '장소 이름을 숨기고 범례(기호)로 찾아 핀을 꽂고 맞는 연락처를 고른다.', challenge: '셋째 문항에서 상황마다 먼저 연락할 곳을 고른다.' },
        activity: {
          title: '동네 지도에서 도움 받을 곳', tool: 'map',
          teacher: '"학교가 문을 닫은 저녁에 도움이 필요하면 어디에 연락할 수 있을까요?" 핀을 꽂을 때마다 그곳이 어떤 도움을 주는지 한 사람씩 말하게 한다. "경찰은 큰 범죄만 다룬다"는 학생에게 "지금 누군가 위험하다면 112에 바로 알리는 것이 맞아요"라고 말해 준다. 말하기 어려운 고민은 1388(청소년 상담)에, 학교 안에서는 상담 선생님에게 이야기할 수 있다고 정리한다.',
          task: '가상의 동네 칸 지도에서 학교 상담실·경찰서·청소년상담복지센터를 찾아 핀을 꽂고, 맞는 연락처를 골라요.',
          levels: { easy: { readout: true }, base: { names: false }, challenge: { names: false } },
          items: [
            PIN('지금 누군가 위험할 때 도움을 주는 곳에 핀을 꽂고 연락처를 고르세요.', Object.assign({}, TOWN, { ask: { q: '이곳에 바로 알리는 번호는?', choices: ['112', '1388', '119'] } }), { place: '경찰서', pick: 0 }),
            PIN('누구에게도 말하기 어려운 고민을 상담하는 곳에 핀을 꽂고 연락처를 고르세요.', Object.assign({}, TOWN, { ask: { q: '이곳과 이어지는 청소년 상담 번호는?', choices: ['112', '1388', '117'] } }), { place: '청소년상담복지센터', pick: 1 }),
            PIN('학교에 있는 시간에 먼저 찾아갈 곳에 핀을 꽂으세요.', TOWN, { place: '우리 학교 상담실' }),
            IT(PIN('친구가 "밤에 집에 있기 무섭다"고 메시지를 보냈어요. 지금 연락할 곳의 번호를 고르세요.', Object.assign({}, TOWN, { readOnly: true, ask: { q: '지금 무섭고 위험하다면?', choices: ['112', '내일 상담실', '아무에게도 안 알림'] } }), { pick: 0 }),
              null,
              { prompt: '친구가 "요즘 집에서 자꾸 다퉈서 힘들다"고 해요. 먼저 함께 찾아갈 곳에 핀을 꽂으세요.', toolOptions: { readOnly: false, ask: { q: '상담실에 다녀온 뒤에도 말하기 어려운 고민이 남으면?', choices: ['1388', '혼자 참기', '단톡방에 올리기'] } }, target: { place: '우리 학교 상담실', pick: 0 } },
              { conclude: '지금 위험하면 112, 말하기 어려운 고민은 1388, 학교에서는 상담 선생님. 혼자 감당하지 않아도 돼요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '도움 받을 곳과 연락 방법을 써요.', columns: ['곳', '연락 방법'], cells: [['경찰', ''], ['청소년 상담', ''], ['학교', '']], answer: '112, 1388, 상담 선생님(상담실·Wee 클래스)' }] },
        notes: '동네 지도는 가상이다. 우리 지역의 청소년상담복지센터 위치는 교사가 따로 확인해 알려 준다.',
      }),

      // ---- 정리 ----
      M('wrap.people', {
        title: '이야기할 수 있는 사람들', method: '도움을 줄 수 있는 사람들 정리', tool: 'mindmap', minutes: 6,
        levels: { easy: '가지 3개(집·학교·전화 상담)에 사람·기관 카드를 잇는다.', base: '가지 4개(\'동네\' 더함)에 함정 카드를 걸러 가며 잇는다.', challenge: '사람·기관마다 연락하는 방법을 짝짓는다.' },
        wrap: {
          teacher: '"\'나\' 둘레에 이야기할 수 있는 사람과 기관이 몇이나 있을까요?" 가지를 다 이은 뒤 그 가운데 한 사람을 마음속으로 떠올리게 한다. 집 가지가 비어도 괜찮고, 학교와 전화 상담 가지가 있다고 말해 준다. "남에게 말하면 약해 보인다"는 말에는 "도움을 청하는 것도 문제를 푸는 힘"이라고 짚는다.',
          exitTicket: [
            IT(X('mindmap', SB('사람·기관 카드를 가지에 이어요.', ['집', '학교', '전화 상담', '동네'], [
              { id: 'a1', text: '믿을 수 있는 가족', to: '집' }, { id: 'b1', text: '담임 선생님', to: '학교' }, { id: 'b2', text: '상담 선생님(Wee 클래스)', to: '학교' },
              { id: 'c1', text: '1388', to: '전화 상담' }, { id: 'c2', text: '112', to: '전화 상담' }, { id: 'd1', text: '청소년상담복지센터', to: '동네' },
              { id: 'z1', text: '모르는 온라인 친구' }], { topic: '나를 도울 사람들' }), { difficulty: 0.2 }),
              SB('사람·기관 카드를 가지 세 개에 이어요.', ['집', '학교', '전화 상담'], [
                { id: 'a1', text: '믿을 수 있는 가족', to: '집' }, { id: 'b1', text: '담임 선생님', to: '학교' }, { id: 'b2', text: '상담 선생님(Wee 클래스)', to: '학교' },
                { id: 'c1', text: '1388', to: '전화 상담' }, { id: 'c2', text: '112', to: '전화 상담' }], { topic: '나를 도울 사람들' }),
              MB('사람·기관마다 연락하는 방법을 이어요.', [['담임 선생님', '쉬는 시간에 찾아가 말한다'], ['상담 선생님', '상담실에 가서 상담을 신청한다'], ['1388', '전화로 청소년 상담을 받는다'], ['112', '지금 위험할 때 전화한다']], ['단톡방에 올린다'], { topic: '나를 도울 사람들' })),
            { type: 'choice', prompt: '"훈육이라면 어떤 행동도 괜찮다"는 말에 대한 생각으로 가장 알맞은 것은?', options: ['맞다, 부모님 마음이다', '때리거나 위협해 다치게 하는 것은 훈육이라도 괜찮지 않다', '집안일이니 상관없다'], answer: 1, difficulty: 0.2, explain: '몸과 마음을 다치게 하는 것은 보호가 필요한 일이에요.' },
            { type: 'short', prompt: '힘들 때 이야기할 사람을 이름 대신 관계로 한 명 적어요.' },
          ],
        },
        worksheet: {
          title: '나를 도울 사람들',
          items: [
            { type: 'table', prompt: '나를 도울 사람과 기관을 써요.', columns: ['갈래', '사람·기관'], cells: [['학교', ''], ['전화 상담', '']], answer: '담임·상담 선생님(Wee 클래스), 1388·112' },
            { type: 'blank', prompt: '빈칸에 알맞은 번호를 써요.', text: '말하기 어려운 고민은 청소년 상담 ___에 이야기할 수 있어요.', answer: '1388' },
          ],
        },
      }),
      M('wrap.promise', {
        title: '가족 대화 다짐 점검', method: '가족 대화 다짐 점검', tool: 'kitchen', minutes: 6,
        levels: { easy: '다짐 항목 3개(알맞은 것 2개·함정 1개)에서 해 볼 것에 표시한다.', base: '다짐 항목 5개(알맞은 것 3개·함정 2개)에서 표시한다.', challenge: '다짐을 지킬 상황 하나를 적는다(셋째 출구 질문).' },
        wrap: {
          teacher: '"오늘 배운 나-전달법을 집에서 쓴다면 어떤 다짐이 될까요?" 점검표에 \'화날 땐 문 닫고 말 안 하기\' 같은 함정이 섞여 있다고 말한다. 가족과 대화하기 어려운 사정이 있는 학생도 있으니, 다짐은 친구나 다른 어른과의 대화에도 쓸 수 있다고 덧붙인다. 지킬 상황은 자기 집 이야기가 아니라 \'저녁 먹을 때\'처럼 때로만 적게 한다.',
          exitTicket: [
            IT(X('kitchen', CL('해 볼 대화 다짐에만 표시해요.', '나의 대화 다짐', [
              { id: 'k1', text: '감정을 먼저 말하기', ok: true }, { id: 'k2', text: '"너는" 대신 "나는"으로 시작하기', ok: true }, { id: 'k3', text: '상대 말을 끝까지 듣기', ok: true },
              { id: 'k4', text: '화날 땐 문 닫고 말 안 하기' }, { id: 'k5', text: '이길 때까지 큰 소리로 말하기' }]), { difficulty: 0.2 }),
              CL('해 볼 대화 다짐에만 표시해요(3개).', '나의 대화 다짐', [
                { id: 'k1', text: '감정을 먼저 말하기', ok: true }, { id: 'k3', text: '상대 말을 끝까지 듣기', ok: true }, { id: 'k4', text: '화날 땐 문 닫고 말 안 하기' }])),
            { type: 'choice', prompt: '나-전달법의 세 조각으로 알맞은 것은?', options: ['상황·감정·바람', '이유·변명·사과', '칭찬·꾸중·약속'], answer: 0, difficulty: 0.15, explain: '상황·감정·바람을 담아요.' },
            { type: 'short', prompt: '다짐을 지킬 때 하나를 적어요(예: 저녁 먹을 때).' },
          ],
        },
        worksheet: {
          title: '나의 대화 다짐',
          items: [
            { type: 'check', prompt: '해 볼 대화 다짐에 표시해요.', options: ['감정을 먼저 말하기', '"나는"으로 시작하기', '끝까지 듣기'] },
            { type: 'short', prompt: '나-전달법으로 하고 싶은 말을 한 문장 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 7학년 · 나와 친구의 경계, 싫다고 말하고 존중하기 (saf-violence.m.boundary) ====
  {
    const M = MK('boundary', [7]);
    const ACT3 = ['괜찮음', '물어보고 할 것', '멈춰야 할 것'];
    const ACTS = [
      { id: 'a1', text: '친구에게 "안녕" 인사하기', to: '괜찮음' }, { id: 'a2', text: '모둠 활동 때 의견 말하기', to: '괜찮음' },
      { id: 'b1', text: '어깨동무하기', to: '물어보고 할 것' }, { id: 'b2', text: '친구 사진 찍기', to: '물어보고 할 것' }, { id: 'b3', text: '친구 물건 빌리기', to: '물어보고 할 것' },
      { id: 'c1', text: '싫다는데 계속 간지럽히기', to: '멈춰야 할 것' }, { id: 'c2', text: '친구 휴대전화 몰래 열어 보기', to: '멈춰야 할 것' }, { id: 'c3', text: '몸을 피하는데 계속 따라붙기', to: '멈춰야 할 것' },
    ];
    const D1 = { text: '쉬는 시간, 지호가 엎드려 자는 은우를 몰래 찍고는 "반 단톡방에 올리자, 웃기잖아"라고 한다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'laugh', text: '웃으며 "올려, 올려"라고 한다', result: '지호가 사진을 단톡방에 올린다.', impact: [{ who: '은우', text: '모르는 사이 사진이 퍼진다', tone: -1 }], why: '본인 허락 없이 사진을 올리면 경계를 넘는 일이에요.', end: '사진이 단톡방에 올라갔어요.',
        next: { text: '단톡방에 \'ㅋㅋ\'가 줄줄이 달린다. 은우는 아직 모른다.', ask: '이제 어떻게 할까?', choices: [
          { id: 'more', text: '나도 \'ㅋㅋ\'를 단다', result: '사진이 다른 방으로도 옮겨진다.', impact: [{ who: '은우', text: '더 많은 사람이 사진을 본다', tone: -1 }], why: '반응을 달면 사진이 더 퍼져요.', end: '사진이 다른 방까지 퍼졌어요.',
            next: { text: '은우가 사진을 보고 얼굴이 빨개져 교실을 나간다.', choices: [
              { id: 'pretend', text: '모르는 척한다', result: '은우는 혼자 남는다.', impact: [{ who: '은우', text: '아무도 편이 없다고 느낀다', tone: -1 }], why: '늦었더라도 내리게 하고 사과해야 해요.' },
              { id: 'fix', text: '지호에게 내리자고 하고 은우에게 사과한다', result: '사진이 내려가고 은우가 고개를 끄덕인다.', impact: [{ who: '은우', text: '사과를 받는다', tone: 1 }], why: '바로잡았지만, 올리기 전에 멈췄다면 더 좋았어요.' }] } },
          { id: 'down', text: '"은우 허락 안 받았잖아, 내리자"라고 쓴다', result: '지호가 사진을 내린다.', impact: [{ who: '은우', text: '사진이 더 퍼지지 않는다', tone: 1 }], end: '늦었지만 사진을 내리게 했어요.',
            next: { text: '이미 저장한 친구가 있을지 모른다.', choices: [
              { id: 'tell', text: '은우에게 알리고 함께 담임 선생님께 말한다', result: '선생님이 저장한 사진을 지우도록 반에 이야기한다.', impact: [{ who: '은우', text: '도움을 받는다', tone: 1 }] },
              { id: 'hide', text: '은우가 모르게 덮어 둔다', result: '저장된 사진이 언제 다시 나올지 모른다.', impact: [{ who: '은우', text: '모르는 위험이 남는다', tone: -1 }], why: '사진 주인이 알아야 스스로 지킬 수 있어요.' }] } }] } },
      { id: 'stop', text: '"은우가 허락 안 했잖아, 올리지 마"라고 말한다', result: '지호가 머뭇거린다.', impact: [{ who: '은우', text: '사진이 지켜진다', tone: 1 }], end: '올리기 전에 멈추자고 했어요.',
        next: { text: '지호가 "장난인데 뭐 어때, 은우도 웃을 거야"라고 한다.', ask: '어떻게 할까?', choices: [
          { id: 'ask', text: '"그럼 은우한테 먼저 물어보자"고 한다', result: '은우가 깨어나 "지워 줘"라고 말한다.', impact: [{ who: '은우', text: '자기 사진을 스스로 정한다', tone: 1 }], end: '은우에게 물어 사진을 지웠어요.',
            next: { text: '지호가 사진을 지우며 "알겠어, 미안"이라고 한다.', choices: [
              { id: 'thanks', text: '"말해 줘서 고마워"라고 은우에게 말한다', result: '은우가 웃으며 고개를 끄덕인다.', impact: [{ who: '은우', text: '존중받았다고 느낀다', tone: 1 }] },
              { id: 'tease', text: '"이 정도로 지우래?" 하고 놀린다', result: '은우가 다시 움츠러든다.', impact: [{ who: '은우', text: '싫다고 한 게 잘못처럼 느껴진다', tone: -1 }], why: '싫다고 말한 사람은 잘한 거예요. 놀리면 거절이 어려워져요.' }] } },
          { id: 'give', text: '"그래, 네 맘대로 해"라며 물러선다', result: '지호가 사진을 올린다.', impact: [{ who: '은우', text: '사진이 퍼진다', tone: -1 }], why: '본인 뜻을 묻지 않은 채 물러서면 사진이 퍼져요.' }] } },
      { id: 'ignore', text: '못 들은 척 자리로 간다', result: '지호가 사진을 올린다.', impact: [{ who: '은우', text: '사진이 퍼진다', tone: -1 }], why: '모른 척하면 친구의 경계가 지켜지지 않아요.', ending: '말리지 않아 사진이 퍼졌어요.' }] };
    const R1 = [{ id: 'r1', text: '내 사진을 올릴지는 나 스스로 정한다' }, { id: 'r2', text: '싫다고 말한 사람의 뜻을 존중한다' },
      { id: 'r3', text: '친하면 허락 없이 올려도 된다', why: '친한 사이에도 사진은 본인이 정해요.' }, { id: 'r4', text: '싫다고 안 했으니 괜찮다', why: '자고 있어서 말할 수 없었어요. 묻지 않은 것은 동의가 아니에요.' }];
    const R1C = { reasons: [{ id: 'r5', text: '올라간 뒤에도 내리게 하고 어른에게 알릴 수 있다' }, { id: 'r6', text: '퍼진 뒤에는 사진 주인에게도 알려야 스스로 지킬 수 있다' }], ok: ['r5', 'r6'] };
    const STEP = ['멈춰 분명히 말하기', '그 자리 떠나기', '믿을 어른에게 알리기'];

    ALL.push(
      // ---- 도입 ----
      M('intro.words', {
        title: '\'경계\' 하면 떠오르는 말', method: '‘경계’ 하면 떠오르는 말 고르기', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 낱말 카드 4장(거리·허락·사진·비밀번호)만 짚으며 함께 묶는다.', base: '시연 판의 낱말 카드 8장을 몸·마음·디지털 경계로 묶는다.', challenge: '디지털 경계의 예를 하나 더 만들어 짝에게 말한다.' },
        intro: {
          teacher: '"\'경계\'라는 말을 들으면 무엇이 떠오르나요? 나라 사이 국경만 경계일까요?" 시연 단추로 낱말 카드가 몸·마음·디지털 경계 칸으로 묶이는 모습을 보인다. "친하면 경계 같은 건 없다"는 말이 나오면 "아주 친한 친구라도 내 휴대전화 비밀번호를 마음대로 풀어도 될까요?"라고 되묻는다. 오늘은 경계를 알고, 묻고, 싫다는 말을 존중하는 법을 익힌다고 밝힌다.',
          student: '\'경계\'와 어울리는 낱말 카드를 몸·마음·디지털 경계로 묶어 보고, 디지털 경계의 예를 하나 더 떠올려요.',
          demo: { tool: 'wordcards', options: { mode: 'sort', slots: ['몸의 경계', '마음의 경계', '디지털 경계'], cards: [
            { id: 'w1', text: '거리' }, { id: 'w2', text: '어깨동무' }, { id: 'w3', text: '비밀' }, { id: 'w4', text: '일기장' },
            { id: 'w5', text: '사진' }, { id: 'w6', text: '비밀번호' }, { id: 'w7', text: '허락' }, { id: 'w8', text: '단톡방 초대' }] }, sequence: [{ sort: { '몸의 경계': ['w1', 'w2'], '마음의 경계': ['w3', 'w4', 'w7'], '디지털 경계': ['w5', 'w6', 'w8'] } }] },
          art: { draw: 'a paper-cut circle of personal space around a student, with a phone lock icon and a diary inside soft paper borders', banner: '나의 경계는 어디까지?', extra: [{ motif: 'leaf', x: 300, y: 96 }] },
        },
        notes: '\'허락\'은 세 경계 모두에 걸치는 낱말이라 마음 칸에 두되, 다른 칸에 둔 학생의 까닭도 들어 준다.',
      }),
      M('intro.ask', {
        title: '먼저 물어보고 할 행동', method: '물어보고 해야 하는 행동 표시하기', tool: 'kitchen', minutes: 6,
        levels: { easy: '교사가 항목 4개만 소리 내어 읽으며 함께 표시한다.', base: '시연 판의 항목 6개에서 먼저 물어야 하는 것을 표시한다.', challenge: '표시하지 않은 항목도 물어야 할 때가 있는지(예: 인사도 상대가 놀랐을 때) 말한다.' },
        intro: {
          teacher: '"어깨동무, 사진 찍기, 물건 빌리기 — 이 가운데 먼저 물어봐야 하는 것은 무엇일까요?" 시연 단추로 점검표에 표시되는 모습을 보인 뒤, 표시하지 않은 항목도 물어야 할 때가 있는지 묻는다. "물어보면 어색하다"는 말이 나오면 "물어보지 않아서 친구가 불편해하는 것과, 한 번 묻는 어색함 가운데 무엇이 더 클까요?"라고 되묻는다.',
          student: '친구 사이 행동 목록에서 먼저 물어보고 해야 하는 것을 표시해 보고, 왜 물어야 하는지 생각해요.',
          demo: { tool: 'kitchen', options: { mode: 'checklist', title: '먼저 물어볼 행동', items: [
            { id: 'k1', text: '어깨동무하기' }, { id: 'k2', text: '친구 사진 찍기' }, { id: 'k3', text: '친구 물건 빌리기' },
            { id: 'k4', text: '친구 사진을 단톡방에 올리기' }, { id: 'k5', text: '"안녕" 인사하기' }, { id: 'k6', text: '친구 가방 열어 보기' }] }, sequence: [{ checklist: ['k1', 'k2', 'k3', 'k4', 'k6'] }] },
          art: { draw: 'a paper-cut school hallway where one student asks before putting an arm around a friend, a small paper question mark between them', banner: '먼저 물어봐요', extra: [{ motif: 'flower', x: 300, y: 96 }] },
        },
      }),

      // ---- 활동 ----
      M('activity.sort', {
        title: '괜찮음·물어볼 것·멈출 것', method: '행동을 존중·물어야 함·멈춤으로 나누기', tool: 'mindmap', minutes: 16,
        levels: { easy: '행동 카드 5장을 세 가지에 나누고, 놓으면 바로 맞는지 알려 준다.', base: '행동 카드 8장을 세 가지에 나눈다.', challenge: '셋째 문항에서 같은 행동이 상황에 따라 칸이 바뀌는 카드를 나눈다(함정 카드가 섞인다).' },
        activity: {
          title: '괜찮음·물어볼 것·멈출 것', tool: 'mindmap',
          teacher: '"친구 사진 찍기는 괜찮은 행동일까요, 물어보고 할 행동일까요?" 카드를 놓을 때마다 그 행동을 받는 친구 입장에서 한 번 더 생각하게 한다. "싫다고 말하지 않았으면 괜찮은 것"이라는 학생에게 "친구가 몸을 빼거나 표정이 굳었다면, 말은 안 했어도 무엇을 알려 주는 걸까요?"라고 되묻는다. 동의는 묻고 확인하는 것이고, 싫다는 신호가 보이면 바로 멈춘다는 점을 짚는다.',
          task: '친구 사이 행동 카드를 \'괜찮음\'·\'물어보고 할 것\'·\'멈춰야 할 것\' 가지에 나누고, 상황에 따라 칸이 바뀌는 경우를 찾아요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('행동 카드를 세 가지에 나누세요.', ACT3, ACTS, { topic: '친구 사이 행동' }),
              SB('행동 카드 5장을 세 가지에 나누세요.', ACT3, pickCards(ACTS, ['a1', 'b1', 'b2', 'c1', 'c2']), { topic: '친구 사이 행동' })),
            IT(SB('디지털 공간의 행동도 세 가지에 나누세요.', ACT3, [
              { id: 'd1', text: '단톡방에 공지 올리기', to: '괜찮음' }, { id: 'd2', text: '친구를 새 단톡방에 초대하기', to: '물어보고 할 것' },
              { id: 'd3', text: '친구와 찍은 사진 SNS에 올리기', to: '물어보고 할 것' }, { id: 'd4', text: '친구 계정에 몰래 들어가기', to: '멈춰야 할 것' },
              { id: 'd5', text: '답이 없는데 밤새 메시지 보내기', to: '멈춰야 할 것' }], { topic: '디지털 공간' })),
            IT(PB('동의를 바르게 확인한 경우만 골라 담으세요.', '동의를 확인함', [
              { id: 'p1', text: '"사진 찍어도 돼?" 묻고 "응"을 듣고 찍었다', ok: true }, { id: 'p2', text: '아무 말 없길래 괜찮은 줄 알았다' },
              { id: 'p3', text: '"올려도 돼?" 물었더니 "음…" 하길래 올리지 않았다', ok: true }, { id: 'p4', text: '친하니까 묻지 않았다' }]),
              null,
              SB('같은 행동이라도 상황에 따라 칸이 바뀌어요. 알맞은 가지에 나누세요(맞지 않는 카드는 남겨요).', ACT3, [
                { id: 'e1', text: '어깨동무(친구가 먼저 좋다고 함)', to: '괜찮음' }, { id: 'e2', text: '어깨동무(친구가 몸을 뺌)', to: '멈춰야 할 것' },
                { id: 'e3', text: '사진 찍기(아직 묻지 않음)', to: '물어보고 할 것' }, { id: 'e4', text: '사진 찍기(친구가 얼굴을 가림)', to: '멈춰야 할 것' },
                { id: 'e5', text: '친하니까 무엇이든 괜찮다' }], { topic: '상황이 바뀌면' }),
              { conclude: '동의는 묻고 확인하는 거예요. 말이 없거나 망설이면 동의가 아니고, 싫다는 신호가 보이면 바로 멈춰요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '\'싫다고 말하지 않았으면 괜찮다\'가 틀린 까닭을 한 문장으로 써요.' }],
          easy: [{ type: 'choice', prompt: '먼저 물어보고 할 행동은?', options: ['친구 사진 찍기', '"안녕" 인사하기'], answer: '친구 사진 찍기' }] },
      }),
      M('activity.photo', {
        title: '친구 사진을 올리려는 갈림길', method: '친구 사진을 올리려는 갈림길', tool: 'dilemma', minutes: 17,
        levels: { easy: '갈림 2번까지 가고, 고를 때마다 은우에게 생기는 영향이 바로 보인다.', base: '갈림 3번까지 가고, 영향 표시는 맞힌 뒤에만 보인다. 끝에서 근거를 고른다.', challenge: '갈림 3번 뒤 사진이 올라간 다음에 할 수 있는 일을 담은 근거 카드까지 고른다.' },
        activity: {
          title: '친구 사진을 올리려는 갈림길', tool: 'dilemma',
          teacher: '"자고 있던 은우는 \'싫다\'고 말할 수 있었을까요?" 학생마다 한 길을 끝까지 가 본 뒤 다른 길과 견주게 한다. "은우도 웃을 거니까 괜찮다"는 학생에게 "은우가 웃을지 아닌지는 누가 정할까요?"라고 되묻는다. 사진이 이미 올라간 길에서도 내리게 하고, 은우에게 알리고, 어른에게 말할 수 있다는 점을 짚는다. 잘못은 허락 없이 찍고 올린 쪽에 있다.',
          task: '친구가 다른 친구 사진을 올리려는 장면에서 길을 골라 결과를 따라가고, 끝에서 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL({ easy: '지호가 은우 사진을 올리려 해요. 두 번 골라 결과를 보고 근거를 고르세요.', base: '지호가 은우 사진을 올리려 해요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 간 뒤, 사진이 올라간 다음 할 수 있는 일의 근거까지 고르세요.' },
              '자는 친구 사진', D1, [['stop', 'ask', 'thanks'], ['laugh', 'down', 'tell']], R1, ['r1', 'r2'], R1C),
            IT({ prompt: '은우가 "지워 줘"라고 했을 때 알맞은 반응을 고르세요.', toolOptions: { title: '"지워 줘"를 들었을 때', scene: { text: '은우가 "그 사진 지워 줘"라고 말한다.', ask: '어떻게 할까?', motif: 'house', choices: [
              { id: 'del', text: '"알겠어" 하고 바로 지운다', result: '은우가 안심한다.', impact: [{ who: '은우', text: '존중받는다', tone: 1 }], ending: '거절을 존중했어요.' },
              { id: 'why', text: '"이게 왜? 잘 나왔는데" 하고 버틴다', result: '은우가 더 말하기 어려워한다.', impact: [{ who: '은우', text: '싫다는 뜻이 무시된다', tone: -1 }], why: '까닭을 따지지 않고 거절을 존중해요.' },
              { id: 'keep', text: '지운 척하고 저장해 둔다', result: '은우는 모르는 위험을 안게 된다.', impact: [{ who: '은우', text: '믿음이 깨진다', tone: -1 }], why: '지운 척은 거절을 존중하는 것이 아니에요.' }] }, reasons: [{ id: 'q1', text: '거절은 까닭을 묻지 않고 존중한다' }, { id: 'q2', text: '잘 나온 사진이면 남겨도 된다', why: '사진 주인이 정해요.' }], compare: true },
              target: { path: [['del']], reasons: ['q1'] } }),
            IT({ prompt: '단체 사진을 SNS에 올리기 전 장면을 따라가세요.', toolOptions: { title: '단체 사진 올리기', scene: { text: '모둠 단체 사진이 잘 나왔다. 한 명이 눈을 감고 찍혔다.', ask: '올리기 전에 어떻게 할까?', motif: 'house', choices: [
              { id: 'askall', text: '모두에게 올려도 되는지 묻는다', result: '눈 감은 친구가 다른 사진을 골라 달라고 한다.', impact: [{ who: '모둠 친구', text: '모두 기분 좋게 올린다', tone: 1 }], ending: '모두에게 물어 다른 사진을 올렸어요.' },
              { id: 'post', text: '대부분 잘 나왔으니 그냥 올린다', result: '눈 감은 친구가 속상해한다.', impact: [{ who: '눈 감은 친구', text: '원치 않는 모습이 퍼진다', tone: -1 }], why: '단체 사진도 찍힌 사람 모두에게 물어요.' }] }, reasons: [{ id: 'p1', text: '찍힌 사람 모두에게 물어야 한다' }, { id: 'p2', text: '내가 찍었으니 내 사진이다', why: '찍힌 사람의 뜻도 함께 물어요.' }], compare: true },
              target: { path: [['askall']], reasons: ['p1'] }, conclude: '사진을 찍고 올리기 전에는 찍힌 사람에게 묻고, 싫다고 하면 까닭을 묻지 않고 존중해요. 잘못은 허락 없이 올린 쪽에 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '친구가 "그 사진 지워 줘"라고 할 때 알맞은 행동은?', options: ['왜 그런지 따져 묻는다', '바로 지운다', '지운 척 저장한다'], answer: '바로 지운다' }] },
      }),
      M('activity.script', {
        title: '거절과 존중의 역할극 대본', method: '거절과 존중의 역할극 대본 채우기', tool: 'story', minutes: 16,
        levels: { easy: '대본 빈칸 2개에 거절하는 말과 존중하는 말 카드를 넣고, 넣으면 바로 맞는지 알려 준다.', base: '대본 빈칸 4개에 말 카드를 넣는다(함정 카드가 섞인다).', challenge: '셋째 문항에서 분명한 거절 말투만 골라 담은 뒤, 짝과 대본을 읽고 말투를 바꿔 한 번 더 해 본다.' },
        activity: {
          title: '거절과 존중의 역할극 대본', tool: 'story',
          teacher: '"\'음… 글쎄…\'와 \'싫어, 하지 마\' 가운데 어느 말이 상대에게 분명하게 전해질까요?" 말풍선 빈칸을 채운 뒤 두 사람씩 대본을 소리 내어 읽게 한다. "분명히 거절하면 친구가 서운해한다"는 학생에게 "거절은 그 행동을 싫다는 것이지, 친구를 싫다는 게 아니에요"라고 말해 준다. 거절을 들은 쪽의 존중하는 말도 거절만큼 중요하다고 짚는다.',
          task: '역할극 대본의 말풍선 빈칸에 분명히 거절하는 말과 그 말을 존중하는 말 카드를 넣어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(FB('어깨동무 장면 대본의 빈칸에 알맞은 말 카드를 넣으세요.', [['지호: "어깨동무하자!" — 은우: "___"', '"미안, 나 그거 싫어"', '은우', 'leaf'], ['지호: "___"', '"알겠어, 그럼 그냥 같이 가자"', '지호', 'flower'],
              ['은우: "말해도 들어 줘서 ___"', '고마워', '은우', 'leaf'], ['지호: "다음엔 먼저 ___"', '물어볼게', '지호', 'flower']], ['"에이, 왜 그래"']),
              FB('어깨동무 장면 대본의 빈칸 2개에 알맞은 말 카드를 넣으세요.', [['지호: "어깨동무하자!" — 은우: "___"', '"미안, 나 그거 싫어"', '은우', 'leaf'], ['지호: "___"', '"알겠어, 그럼 그냥 같이 가자"', '지호', 'flower']], [])),
            IT(FB('휴대전화 장면 대본의 빈칸에 알맞은 말 카드를 넣으세요.', [['서진: "네 폰 좀 볼게" — 민: "___"', '"내 폰은 내가 볼게, 보지 마"', '민', 'moon'], ['서진: "___"', '"그래, 미안. 안 볼게"', '서진', 'star'],
              ['민: "보여 주고 싶은 건 내가 ___"', '골라서 보여 줄게', '민', 'moon'], ['서진: "응, 네가 ___"', '정해', '서진', 'star']], ['"친구끼리 뭐 어때"']),
              FB('휴대전화 장면 대본의 빈칸 2개에 알맞은 말 카드를 넣으세요.', [['서진: "네 폰 좀 볼게" — 민: "___"', '"내 폰은 내가 볼게, 보지 마"', '민', 'moon'], ['서진: "___"', '"그래, 미안. 안 볼게"', '서진', 'star']], [])),
            IT(PB('분명하게 거절하는 말만 골라 담으세요.', '분명한 거절', [
              { id: 'p1', text: '"싫어, 하지 마"', ok: true }, { id: 'p2', text: '"그만해 줘, 불편해"', ok: true }, { id: 'p3', text: '"음… 글쎄…"' }, { id: 'p4', text: '"헤헤, 아무거나"' }]),
              null,
              PB('분명하게 거절하는 말만 골라 담으세요(애매한 말이 더 섞였어요).', '분명한 거절', [
                { id: 'p1', text: '"싫어, 하지 마"', ok: true }, { id: 'p2', text: '"그만해 줘, 불편해"', ok: true }, { id: 'p3', text: '"음… 글쎄…"' },
                { id: 'p5', text: '"나중에 생각해 볼게"' }, { id: 'p6', text: '"안 돼. 내 사진은 내가 정해"', ok: true }]),
              { conclude: '거절은 짧고 분명하게, 거절을 들으면 까닭을 따지지 않고 존중해요. 그래도 멈추지 않으면 자리를 떠나 어른에게 알려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '친구가 싫다고 했을 때 내가 할 존중하는 말을 한 문장으로 써요.' }] },
      }),
      M('activity.steps', {
        title: '불편한 상황에서 할 일 차례', method: '불편한 상황에서 할 일 차례 정하기', tool: 'timer', minutes: 17,
        levels: { easy: '순서 카드 3장(멈춰 분명히 말하기·자리 떠나기·어른에게 알리기)을 차례로 놓는다.', base: '순서 카드 4장(있었던 일 말하기까지)을 놓고 스스로 점검 칸에 표시한다.', challenge: '차례를 바꾸면 안 되는 까닭을 활동지에서 고르고, 셋째 문항에서 온라인 상황의 차례도 놓는다.' },
        activity: {
          title: '불편한 상황에서 할 일 차례', tool: 'timer',
          teacher: '"싫다고 말했는데도 상대가 멈추지 않으면 그다음엔 무엇을 할까요?" 순서 카드를 놓은 뒤 \'자리 떠나기\'가 왜 \'어른에게 알리기\'보다 앞인지 말하게 한다. "말 못 하고 굳어 버리면 내 잘못"이라는 학생에게 "놀라면 몸이 굳는 건 자연스러운 반응이에요. 언제든 나중에 알려도 괜찮아요"라고 말해 준다. 멈추지 않은 사람에게 잘못이 있다는 점을 분명히 한다.',
          task: '불편한 상황에서 할 일 카드를 차례대로 놓고, 스스로 점검 칸에 표시해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '불편한 상황에서 할 일 4장을 차례대로 놓고 점검 칸에 표시하세요.', toolOptions: { title: '불편할 때의 차례', cards: ['있었던 일 말하기', '그 자리 떠나기', '멈춰 분명히 말하기', '믿을 어른에게 알리기'] }, target: { order: [...STEP, '있었던 일 말하기'], selfCheck: ['분명하게 말할 문장을 정했다', '갈 수 있는 안전한 곳을 떠올렸다', '알릴 어른을 정했다'] } },
              { prompt: '불편한 상황에서 할 일 3장을 차례대로 놓으세요.', toolOptions: { cards: [STEP[2], STEP[0], STEP[1]] }, target: { order: STEP } }),
            IT({ prompt: '친구가 싫다는데 계속 몸을 붙여 올 때의 차례를 놓으세요.', toolOptions: { title: '계속 따라붙을 때', cards: ['담임·상담 선생님께 말하기', '"그만해" 하고 분명히 말하기', '사람 많은 곳으로 가기'] }, target: { order: ['"그만해" 하고 분명히 말하기', '사람 많은 곳으로 가기', '담임·상담 선생님께 말하기'] } }),
            IT({ prompt: '모르는 사람이 메시지로 불편한 사진을 요구할 때의 차례를 놓으세요.', toolOptions: { title: '온라인에서 불편할 때', cards: ['믿을 어른에게 알리기', '"싫어" 하고 답하지 않기', '대화 저장 후 차단하기'] }, target: { order: ['"싫어" 하고 답하지 않기', '대화 저장 후 차단하기', '믿을 어른에게 알리기'] } },
              null, null, { conclude: '불편하면 멈춰 말하고, 자리를 떠나고, 믿을 어른에게 알려요. 바로 못 했어도 나중에 알려도 괜찮고, 잘못은 멈추지 않은 사람에게 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '\'그 자리 떠나기\'를 \'어른에게 알리기\'보다 먼저 하는 까닭은?', options: ['어른이 바쁘셔서', '먼저 내 몸을 안전하게 해야 해서', '상대와 계속 이야기하려고'], answer: '먼저 내 몸을 안전하게 해야 해서' }] },
        notes: '도움 경로(112·117·1388)는 정리 활동에서 함께 짚는다. ' + SAFE_NOTE,
      }),

      // ---- 정리 ----
      M('wrap.feel', {
        title: '존중받을 때의 마음', method: '존중받을 때의 마음 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '마음 카드 4장에서 존중받은 은우의 마음을 고른다.', base: '마음 카드 8장에서 고른다.', challenge: '물어보지 않고 사진을 올린 반대 장면의 마음까지 골라 견준다.' },
        wrap: {
          teacher: '"\'사진 찍어도 돼?\'라는 말을 들은 은우는 어떤 마음일까요?" 마음 카드를 고른 뒤, 묻지 않고 올린 장면과 견주게 한다. "물어보면 오히려 부담스럽다"는 말에는 "묻는 말 한마디가 은우에게 \'네 뜻이 중요해\'라는 뜻으로 전해지지 않을까요?"라고 되묻는다. 경계를 지키다 불편한 일이 생기면 112·117·1388과 담임·상담 선생님에게 알릴 수 있다고 정리한다.',
          exitTicket: [
            IT(X('emotion', { prompt: '물어봐 준 친구 장면에서 은우의 마음을 골라요.', toolOptions: { mode: 'match', slots: [{ id: 's1', label: '"사진 찍어도 돼?"라고 물어봐 준 친구 앞의 은우' }], cards: ['고마움', '편안함', '화남', '걱정', '신남', '외로움', '뿌듯함', '놀람'] }, target: { match: { s1: ['고마움', '편안함'] } } }, { difficulty: 0.15 }),
              { prompt: '마음 카드 4장에서 은우의 마음을 골라요.', toolOptions: { cards: ['고마움', '화남', '걱정', '외로움'] }, target: { match: { s1: ['고마움'] } } },
              { prompt: '두 장면의 은우 마음을 골라 견주어요.', toolOptions: { slots: [{ id: 's1', label: '"사진 찍어도 돼?"라고 물어봐 준 친구 앞의 은우' }, { id: 's2', label: '자는 사이 사진이 올라간 것을 안 은우' }] }, target: { match: { s1: ['고마움', '편안함'], s2: ['화남', '걱정', '외로움', '놀람'] } } }),
            { type: 'choice', prompt: '"친하면 허락 없이 해도 된다"는 말에 대한 생각으로 가장 알맞은 것은?', options: ['맞다, 친한 사이니까', '친한 사이에도 몸·마음·디지털 경계는 본인이 정한다', '선생님만 허락하면 된다'], answer: 1, difficulty: 0.15, explain: '친해도 경계는 본인이 정해요.' },
            { type: 'mood', prompt: '오늘 수업을 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '존중받는 마음',
          items: [
            { type: 'short', prompt: '물어봐 준 친구 앞에서 은우는 어떤 마음일지 한 문장으로 써요.' },
            { type: 'check', prompt: '불편한 일이 생기면 알릴 곳에 표시해요.', options: ['담임·상담 선생님', '117', '1388', '112'] },
          ],
        },
      }),
      M('wrap.pledge', {
        title: '경계 존중 약속 한 문장', method: '경계 존중 약속 한 문장 쓰기', tool: 'rubric-writing', minutes: 6,
        levels: { easy: '문장 틀("나는 친구에게 ___ 전에 먼저 묻고, 싫다고 하면 ___")을 채워 쓴다.', base: '틀 없이 한 문장으로 쓰고 기준표(묻기·존중·멈춤)를 점검한다.', challenge: '디지털 공간 약속 한 문장을 덧붙여 쓴다.' },
        wrap: {
          teacher: '"\'친구를 존중하겠다\'와 \'사진을 찍기 전에 먼저 묻겠다\' 가운데 내일 지킬 수 있는 약속은 무엇일까요?" 두 문장을 견주어 읽은 뒤 약속을 쓰게 한다. "약속은 크게 할수록 좋다"는 말에는 지킬 수 있는 작은 행동이 더 낫다고 말해 준다. 이름은 쓰지 않게 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'rubric-writing', options: { topic: '친구의 경계를 존중하는 나의 약속을 한 문장으로 쓰세요.', minChars: 15, maxChars: 120, minSentences: 1, maxSentences: 2, title: '경계 존중 약속' },
              prompt: '경계 존중 약속을 쓰고 기준표에 표시해요.', target: { selfCheck: ['먼저 묻는 행동이 들어갔다', '거절을 존중하는 말이 들어갔다', '멈추는 때가 들어갔다'] }, difficulty: 0.25 },
            { prompt: '문장 틀을 채워 약속을 쓰고 기준표에 표시해요.', toolOptions: { starter: '나는 친구에게 ___ 전에 먼저 묻고, 싫다고 하면 ___.' } },
            { prompt: '약속에 디지털 공간 약속 한 문장을 덧붙여 쓰고 기준표에 표시해요.', toolOptions: { minSentences: 2, maxSentences: 3, minChars: 25 }, target: { selfCheck: ['먼저 묻는 행동이 들어갔다', '거절을 존중하는 말이 들어갔다', '멈추는 때가 들어갔다', '디지털 공간 약속을 덧붙였다'] } }),
            { type: 'choice', prompt: '가장 지키기 쉬운 약속은?', options: ['친구를 늘 존중하겠다', '친구 사진을 올리기 전에 먼저 묻겠다', '착하게 살겠다'], answer: 1, difficulty: 0.15, explain: '무엇을 언제 할지 보이는 약속이 지키기 쉬워요.' },
            { type: 'mood', prompt: '오늘 수업을 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '나의 경계 존중 약속',
          items: [
            { type: 'short', prompt: '친구의 경계를 존중하는 나의 약속을 한 문장으로 써요.' },
            { type: 'check', prompt: '내 약속을 기준표로 점검해요.', options: ['먼저 묻기', '거절 존중', '멈추는 때'] },
          ],
          easy: { note: '"나는 친구에게 ___ 전에 먼저 묻고" 틀을 써도 돼요.', items: [{ type: 'blank', prompt: '틀을 채워 약속을 써요.', text: '나는 친구에게 ___ 전에 먼저 묻고, 싫다고 하면 ___.', answer: '(예) 사진을 찍기, 바로 멈춘다' }] },
        },
      }),
    );
  }

  // ==== 8학년 · 단톡방 사이버폭력의 모습과 위험성 (saf-violence.m.cyber-chat) ====
  {
    const M = MK('cyber-chat', [8]);
    const CT = ['욕설·모욕', '떼 지어 공격', '초대해 가두고 놀리기', '사진 퍼뜨리기'];
    const MSG = [
      { id: 'm1', text: '한 친구 글마다 욕설을 단다', to: '욕설·모욕' }, { id: 'm2', text: '외모를 비꼬는 별명으로 부른다', to: '욕설·모욕' },
      { id: 'm3', text: '여럿이 한 명에게 동시에 비난 글을 쏟는다', to: '떼 지어 공격' }, { id: 'm4', text: '한 명의 말에 단체로 \'ㅋㅋ\'만 단다', to: '떼 지어 공격' },
      { id: 'm5', text: '나가도 계속 다시 초대해 놀린다', to: '초대해 가두고 놀리기' }, { id: 'm6', text: '한 명만 넣은 방을 만들어 몰아붙인다', to: '초대해 가두고 놀리기' },
      { id: 'm7', text: '몰래 찍은 사진을 다른 방에 올린다', to: '사진 퍼뜨리기' }, { id: 'm8', text: '우스꽝스럽게 고친 사진을 돌린다', to: '사진 퍼뜨리기' },
    ];
    const FLOW = [
      { id: 'f1', text: '누군가 친구 사진을 단톡방에 올림' }, { id: 'f2', text: '몇 명이 화면을 캡처함' }, { id: 'f3', text: '캡처가 다른 반 방으로 옮겨 감' },
      { id: 'f4', text: '올린 사람이 원본을 지움' }, { id: 'f5', text: '그래도 캡처는 여러 휴대전화에 남음' }, { id: 'f6', text: '모르는 학교 학생까지 사진을 봄' },
    ];
    const D1 = { text: '반 단톡방에 누군가 다온이 발표 영상을 올리고 "이거 실화냐"라고 썼다. 벌써 \'ㅋㅋ\'가 몇 개 달렸다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'lol', text: '나도 \'ㅋㅋ\'를 단다', result: '\'ㅋㅋ\'가 더 늘고 놀림 글이 이어진다.', impact: [{ who: '다온', text: '반 전체가 웃는다고 느낀다', tone: -1 }], why: '\'ㅋㅋ\' 하나도 놀림에 힘을 보태요.', end: '놀림 글이 더 늘었어요.',
        next: { text: '다온이 방을 나갔다. 누군가 "삐졌네"라며 다시 초대한다.', ask: '이제 어떻게 할까?', choices: [
          { id: 'more', text: '"ㅋㅋ 또 들어왔다"라고 쓴다', result: '다온이 학교에 오기 싫어한다.', impact: [{ who: '다온', text: '집에서도 놀림을 피할 수 없다', tone: -1 }], why: '나가도 다시 끌어들이는 것은 따돌림이에요.', end: '놀림이 집까지 이어졌어요.',
            next: { text: '다음 날 담임 선생님이 단톡방 일을 물으신다.', choices: [
              { id: 'deny', text: '"저는 \'ㅋㅋ\'만 썼어요"라고 넘긴다', result: '내가 단 글도 기록에 남아 있다.', impact: [{ who: '나', text: '책임을 피하기 어렵다', tone: -1 }], why: '반응만 단 것도 놀림을 키운 행동이에요.' },
              { id: 'admit', text: '내가 쓴 글을 인정하고 다온에게 사과한다', result: '선생님과 함께 회복을 이야기한다.', impact: [{ who: '다온', text: '사과를 받는다', tone: 1 }], why: '사과는 좋지만, 처음에 반응하지 않았다면 더 좋았어요.' }] } },
          { id: 'stopit', text: '"그만 초대하자, 다온이 싫대"라고 쓴다', result: '몇 명이 초대를 멈춘다.', impact: [{ who: '다온', text: '조금 숨을 돌린다', tone: 1 }], end: '늦었지만 멈추자고 했어요.',
            next: { text: '그래도 몇 명은 계속 놀린다.', choices: [
              { id: 'tellt', text: '대화를 캡처해 담임 선생님께 보낸다', result: '선생님이 반에서 이야기를 나누신다.', impact: [{ who: '반 분위기', text: '멈추는 쪽으로 바뀐다', tone: 1 }] },
              { id: 'leave', text: '나도 방을 나가 버린다', result: '놀림은 계속된다.', impact: [{ who: '다온', text: '도와줄 사람이 줄어든다', tone: -1 }], why: '나가기 전에 어른에게 알리면 멈출 수 있어요.' }] } }] } },
      { id: 'none', text: '반응하지 않고 "이건 다온이 허락한 거야?"라고 쓴다', result: '방이 잠깐 조용해진다.', impact: [{ who: '다온', text: '편이 있다고 느낀다', tone: 1 }], end: '반응하지 않고 멈추자는 말을 했어요.',
        next: { text: '영상을 올린 친구가 "장난인데 왜 진지해?"라고 쓴다.', ask: '어떻게 할까?', choices: [
          { id: 'firm', text: '"장난은 다온도 웃을 때야, 내리자"라고 쓴다', result: '영상이 내려간다.', impact: [{ who: '다온', text: '영상이 더 퍼지지 않는다', tone: 1 }], end: '영상을 내리게 했어요.',
            next: { text: '이미 캡처한 친구가 있을지 모른다.', choices: [
              { id: 'report', text: '다온에게 알리고 함께 담임 선생님께 말한다', result: '선생님이 캡처를 지우도록 반에 이야기하신다.', impact: [{ who: '다온', text: '보호받는다', tone: 1 }] },
              { id: 'secret', text: '다온이 모르게 그냥 덮는다', result: '캡처가 언제 다시 나올지 모른다.', impact: [{ who: '다온', text: '모르는 위험이 남는다', tone: -1 }], why: '본인이 알아야 스스로 지킬 수 있어요.' }] } },
          { id: 'back', text: '분위기가 깨질까 봐 "ㅋㅋ 농담"이라고 쓴다', result: '놀림이 다시 시작된다.', impact: [{ who: '다온', text: '다시 혼자가 된다', tone: -1 }], why: '물러서면 놀림이 다시 힘을 얻어요.' }] } },
      { id: 'dm', text: '방에는 아무 말 없이 다온에게 따로 "괜찮아?"라고 보낸다', result: '다온이 "고마워"라고 답한다.', impact: [{ who: '다온', text: '혼자가 아니라고 느낀다', tone: 1 }], ending: '방은 그대로지만 다온 곁에 섰어요. 어른에게 알리면 방도 멈출 수 있어요.' }] };
    const R1 = [{ id: 'r1', text: '반응을 달지 않으면 놀림이 힘을 잃는다' }, { id: 'r2', text: '단톡방 글은 캡처되어 지워지지 않을 수 있다' },
      { id: 'r3', text: '읽기만 하거나 \'ㅋㅋ\'만 달면 상관없다', why: '반응 하나도 놀림을 키워요.' }, { id: 'r4', text: '화면 속 말은 진짜 폭력이 아니다', why: '화면 속 말도 상처를 남기는 사이버폭력이에요.' }];
    const R1C = { reasons: [{ id: 'r5', text: '첫 반응을 고른 순간이 결과를 가장 크게 바꿨다' }, { id: 'r6', text: '어른에게 알린 길에서 놀림이 멈췄다' }], ok: ['r5', 'r6'] };

    ALL.push(
      // ---- 도입 ----
      M('intro.chat', {
        title: '가상 단톡방, 분위기가 바뀐 칸', method: '가상 단톡방 화면 읽고 문제 장면 찾기', tool: 'story', minutes: 6,
        levels: { easy: '교사가 대화 칸 3개만 보이며 함께 고른다.', base: '시연 판의 대화 칸 5개를 차례로 보고 분위기가 바뀌는 칸을 고른다.', challenge: '그 칸 다음에 이어질 반응을 짝과 말로 이어 본다.' },
        intro: {
          teacher: '"이 단톡방 대화는 어느 칸에서 분위기가 바뀌었을까요?" 가상 단톡방 칸을 차례로 넘겨 보이고, 시연 단추로 \'다온이 발표 영상 ㅋㅋ 이거 봐\' 칸이 바구니에 담기는 모습을 보인다. "화면 속 말은 진짜 폭력이 아니다"라는 말이 나오면 "이 영상이 반 전체 휴대전화에 남는다면 다온은 어디서 쉴 수 있을까요?"라고 되묻는다. 오늘은 단톡방에서 일어나는 사이버폭력의 모습과 더 위험한 까닭을 따져 본다고 밝힌다.',
          student: '가상 단톡방 대화 칸을 차례로 보고 분위기가 바뀌는 칸을 골라요. 그다음에 어떤 반응이 이어질지 생각해요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '분위기가 바뀐 칸', title: '2반 단톡방(가상)', cards: [
            { id: 'c1', text: '"내일 체육복 챙겨 와"', motif: 'sun' }, { id: 'c2', text: '"수행평가 몇 시까지야?"', motif: 'leaf' },
            { id: 'c3', text: '"다온이 발표 영상 ㅋㅋ 이거 봐"', motif: 'storm' }, { id: 'c4', text: '"ㅋㅋㅋㅋ"', motif: 'cloud' }, { id: 'c5', text: '(다온 님이 나갔습니다)', motif: 'moon' }], shuffle: false }, sequence: [{ pick: ['c3'] }] },
          art: { draw: 'a paper-cut smartphone showing a group chat where messages turn from homework reminders to laughing reactions, one student looking at the screen alone', banner: '어디서 바뀌었을까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '가상 대화다. 학생에게 실제 단톡방 화면을 보여 달라고 하거나 받은 메시지를 묻지 않는다.',
      }),
      M('intro.survey', {
        title: '사이버폭력을 본 곳 그래프', method: '가상 자료로 사이버폭력이 일어나는 곳 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 막대 값을 읽어 주며 가장 큰 막대를 함께 찾는다.', base: '값을 말하지 않고 눈금으로 읽어 가장 많은 곳을 고른다.', challenge: '자료가 가상임을 밝히고, 실제와 다를 수 있는 까닭(조사 대상·질문 방식)을 짝과 말한다.' },
        intro: {
          teacher: '"가상 학교 설문에서 학생들이 사이버폭력을 가장 많이 봤다고 답한 곳은 어디일까요?" 막대그래프를 띄우고 시연 단추로 \'단톡방\'을 고르는 모습을 보인다. 이 자료는 수업용 가상 설문이라고 먼저 밝힌다. "그래프에 없는 곳은 안전하다"는 말이 나오면 "조사에서 묻지 않은 곳이라면 0일까요?"라고 되묻는다.',
          student: '가상 설문 막대그래프에서 사이버폭력을 가장 많이 본 곳을 찾아요. 이 자료가 실제와 다를 수 있는 까닭도 생각해요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '사이버폭력을 본 곳(가상 설문)', unit: '명', xLabel: '곳', yLabel: '응답 수', data: [['단톡방', 24], ['SNS 댓글', 17], ['게임 채팅', 11], ['개인 메시지', 7]], question: '가장 많이 본 곳은?', choices: ['단톡방', 'SNS 댓글', '게임 채팅', '개인 메시지'] }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper-cut bar chart with four paper bars labeled by small phone and game icons, students reading it together', banner: '어디서 가장 많이 봤을까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '그래프 값은 모두 가상이다.',
      }),

      // ---- 활동 ----
      M('activity.types', {
        title: '단톡방 메시지를 유형별로', method: '메시지 장면을 유형별로 나누기', tool: 'mindmap', minutes: 16,
        levels: { easy: '메시지 카드 5장을 유형 가지에 나누고, 놓으면 바로 맞는지 알려 준다.', base: '메시지 카드 8장을 유형 가지 4개에 나눈다.', challenge: '셋째 문항에서 유형마다 왜 더 위험한지 근거 카드를 잇는다(함정 근거가 섞인다).' },
        activity: {
          title: '단톡방 메시지를 유형별로', tool: 'mindmap',
          teacher: '"\'ㅋㅋ\'만 단 것도 사이버폭력의 한 모습일까요?" 카드를 놓을 때마다 받는 친구 입장에서 휴대전화를 열었을 때 어떤 화면일지 떠올리게 한다. "읽기만 하면 상관없다"는 학생에게 "숫자 \'1\'이 사라지는 것을 보며 놀림당하는 친구는 몇 명이 보고 있다고 느낄까요?"라고 되묻는다. 사이버폭력은 빠르게 퍼지고, 지워지지 않고, 시간과 장소 없이 이어진다는 세 가지를 칠판에 적는다.',
          task: '가상 단톡방 메시지 카드를 사이버폭력 유형 가지에 나누고, 유형마다 더 위험한 까닭을 이어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('메시지 카드를 유형 가지에 나누세요.', CT, MSG, { topic: '단톡방 사이버폭력' }),
              SB('메시지 카드 5장을 유형 가지에 나누세요.', CT, pickCards(MSG, ['m1', 'm3', 'm5', 'm7', 'm2']), { topic: '단톡방 사이버폭력' })),
            IT(PB('사이버폭력이 교실 폭력보다 더 위험한 까닭만 골라 담으세요.', '더 위험한 까닭', [
              { id: 'p1', text: '순식간에 많은 사람에게 퍼진다', ok: true }, { id: 'p2', text: '캡처되면 지워지지 않을 수 있다', ok: true },
              { id: 'p3', text: '집에서도 밤에도 이어진다', ok: true }, { id: 'p4', text: '화면 속 말이라 덜 아프다' }, { id: 'p5', text: '몸을 다치지 않으니 괜찮다' }], { topic: '왜 더 위험할까?' })),
            IT(MB('유형마다 더 위험한 까닭을 이어 보세요.', [['떼 지어 공격', '여럿이 한꺼번에 몰아 혼자라고 느끼게 한다'], ['사진 퍼뜨리기', '캡처가 남아 언제 다시 돌지 모른다']], ['재미있으니 괜찮다'], { topic: '왜 더 위험할까?' }),
              null,
              MB('유형마다 더 위험한 까닭을 이어 보세요(함정 근거가 섞였어요).', [['욕설·모욕', '글이 남아 몇 번이고 다시 읽게 된다'], ['떼 지어 공격', '여럿이 한꺼번에 몰아 혼자라고 느끼게 한다'], ['초대해 가두고 놀리기', '나가도 다시 끌려와 피할 곳이 없다'], ['사진 퍼뜨리기', '캡처가 남아 언제 다시 돌지 모른다']], ['재미있으니 괜찮다', '당하는 쪽이 방을 나가면 끝난다'], { topic: '왜 더 위험할까?' }),
              { conclude: '단톡방 사이버폭력은 빠르게 퍼지고, 지워지지 않고, 시간과 장소 없이 이어져요. 읽기만 하거나 반응만 달아도 영향을 줘요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '\'읽기만 하면 상관없다\'는 말을 반박하는 문장을 한 줄로 써요.' }],
          easy: [{ type: 'choice', prompt: '여럿이 한 명에게 동시에 비난 글을 쏟는 것은?', options: ['떼 지어 공격', '공지 올리기'], answer: '떼 지어 공격' }] },
      }),
      M('activity.spread', {
        title: '사진 한 장이 퍼지는 흐름', method: '사진 한 장이 퍼지는 흐름 놓기', tool: 'timeline', minutes: 17,
        levels: { easy: '장면 카드 4장(올림·캡처·다른 방·그래도 남음)을 시간 띠에 차례로 놓는다.', base: '장면 카드 6장을 차례로 놓는다.', challenge: '셋째 문항에서 흐름을 멈출 수 있었던 지점을 골라 담는다(늦은 지점이 함정으로 섞인다).' },
        activity: {
          title: '사진 한 장이 퍼지는 흐름', tool: 'timeline',
          teacher: '"올린 사람이 원본을 지웠는데, 왜 사진은 여전히 돌고 있을까요?" 카드를 차례로 놓은 뒤 \'원본 삭제\' 다음 칸을 함께 읽는다. "지우면 끝난다"는 학생에게 "캡처한 휴대전화가 몇 대인지 아무도 모른다면 어떻게 될까요?"라고 되묻는다. 흐름은 맨 앞에서 멈출수록 쉽다는 점, 그리고 퍼뜨린 사람 모두가 책임이 있다는 점을 짚는다.',
          task: '친구 사진 한 장이 단톡방에서 퍼지는 장면 카드를 차례로 놓고, 흐름을 멈출 수 있었던 지점을 찾아요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(OB('사진 한 장이 퍼지는 장면을 차례대로 놓으세요.', FLOW, { axis: ['처음', '나중'] }),
              OB('사진이 퍼지는 장면 4장을 차례대로 놓으세요.', pickCards(FLOW, ['f1', 'f2', 'f3', 'f5']), { axis: ['처음', '나중'] })),
            IT(OB('사진을 받은 사람이 할 행동을 차례대로 놓으세요.', [{ id: 'g1', text: '저장하지 않고 전달 멈추기' }, { id: 'g2', text: '올린 사람에게 내리자고 말하기' }, { id: 'g3', text: '믿을 어른에게 알리기' }], { axis: ['받은 순간', '그 뒤'] }, [{ id: 'g4', text: '친한 친구에게만 보여 주기' }])),
            IT(PB('흐름을 멈출 수 있었던 지점만 골라 담으세요.', '멈출 수 있었던 곳', [
              { id: 'p1', text: '올리기 전 "허락받았어?" 묻기', ok: true }, { id: 'p2', text: '캡처하지 않기', ok: true }, { id: 'p3', text: '다른 방으로 옮기지 않기', ok: true },
              { id: 'p4', text: '이미 다 퍼진 뒤 구경하기' }]),
              null,
              PB('흐름을 멈출 수 있었던 지점만 골라 담으세요(늦은 지점이 섞였어요).', '멈출 수 있었던 곳', [
                { id: 'p1', text: '올리기 전 "허락받았어?" 묻기', ok: true }, { id: 'p2', text: '캡처하지 않기', ok: true }, { id: 'p3', text: '다른 방으로 옮기지 않기', ok: true },
                { id: 'p4', text: '이미 다 퍼진 뒤 구경하기' }, { id: 'p5', text: '"이미 퍼졌으니 나도 공유"' }, { id: 'p6', text: '받은 즉시 어른에게 알리기', ok: true }]),
              { conclude: '사진은 원본을 지워도 캡처로 남아 퍼져요. 맨 앞에서 멈출수록 쉽고, 퍼뜨린 사람 모두에게 책임이 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '원본을 지워도 사진이 남는 까닭을 한 문장으로 써요.' }] },
      }),
      M('activity.laugh', {
        title: '놀리는 글에 \'ㅋㅋ\'를 달까', method: '놀리는 글에 ‘ㅋㅋ’를 달지 말지 갈림길', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림 2번까지 가고, 고를 때마다 다온에게 생기는 영향이 바로 보인다.', base: '갈림 3번까지 가고, 영향 표시는 맞힌 뒤에만 보인다. 끝에서 근거를 고른다.', challenge: '갈림 3번 뒤 결과를 바꾼 선택이 무엇이었는지 짚는 근거 카드까지 고른다.' },
        activity: {
          title: '놀리는 글에 \'ㅋㅋ\'를 달까', tool: 'dilemma',
          teacher: '"\'ㅋㅋ\' 두 글자가 다온에게는 몇 명의 웃음으로 보일까요?" 학생마다 한 길을 끝까지 가 본 뒤 되돌아가 첫 선택만 바꿨을 때 무엇이 달라지는지 견주게 한다. "다들 다는데 나만 안 달면 이상해 보인다"는 학생에게 "다온에게 따로 \'괜찮아?\'라고 보내는 길은 어땠나요?"라고 되묻는다. 반응하지 않기, 멈추자고 말하기, 어른에게 알리기 모두 할 수 있는 선택이라고 짚는다.',
          task: '친구를 놀리는 글이 올라온 가상 단톡방에서 반응을 골라 결과를 따라가고, 끝에서 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL({ easy: '단톡방에 다온 영상이 올라왔어요. 두 번 골라 결과를 보고 근거를 고르세요.', base: '단톡방에 다온 영상이 올라왔어요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 간 뒤, 결과를 바꾼 선택을 짚는 근거까지 고르세요.' },
              '단톡방의 \'ㅋㅋ\'', D1, [['none', 'firm', 'report'], ['lol', 'stopit', 'tellt'], ['dm']], R1, ['r1', 'r2'], R1C),
            IT({ prompt: '읽기만 하고 아무 반응도 하지 않는 친구의 장면을 따라가세요.', toolOptions: { title: '읽기만 하는 사람', scene: { text: '놀림 글을 읽은 사람이 스무 명이다. 아무도 반응하지 않지만 아무도 멈추자고 하지도 않는다.', ask: '읽기만 한 사람의 영향은?', motif: 'house', choices: [
              { id: 'zero', text: '읽기만 했으니 영향이 없다', result: '놀린 쪽은 아무도 막지 않는다고 느낀다.', why: '말리는 사람이 없으면 놀림이 이어져요.' },
              { id: 'some', text: '아무도 막지 않아 놀림이 이어지게 했다', result: '읽은 스무 명 가운데 한 명만 말해도 달라질 수 있었다.', impact: [{ who: '다온', text: '한 명의 편이 큰 힘이 된다', tone: 1 }], ending: '읽기만 하는 것도 영향을 줘요. 한 명이 말하면 달라져요.' }] }, reasons: [{ id: 'q1', text: '아무도 막지 않으면 놀림이 계속된다' }, { id: 'q2', text: '나는 쓴 게 없으니 상관없다', why: '보고만 있는 것도 분위기를 만들어요.' }], compare: true },
              target: { path: [['some']], reasons: ['q1'] } }),
            IT({ prompt: '다온에게 건넬 반응을 골라 결과를 보세요.', toolOptions: { title: '다온에게', scene: { text: '다온이 방을 나간 뒤 나에게만 "다들 날 비웃는 거지?"라고 보냈다.', ask: '어떻게 답할까?', motif: 'house', choices: [
              { id: 'with', text: '"아니야, 네 잘못 아니야. 선생님께 같이 말하자"', result: '다온이 조금 마음을 놓는다.', impact: [{ who: '다온', text: '혼자가 아니라고 느낀다', tone: 1 }], ending: '다온 곁에 서서 도움을 함께 찾았어요.' },
              { id: 'joke', text: '"그냥 웃자고 한 거잖아, 너무 신경 쓰지 마"', result: '다온이 더 말하지 않는다.', impact: [{ who: '다온', text: '마음을 털어놓기 어려워진다', tone: -1 }], why: '괴로운 마음을 가볍게 넘기면 더 말하기 어려워요.' }] }, reasons: [{ id: 'w1', text: '잘못은 놀린 쪽에 있다고 말해 준다' }, { id: 'w2', text: '예민하게 굴지 말라고 한다', why: '괴로움은 예민함이 아니에요.' }], compare: true },
              target: { path: [['with']], reasons: ['w1'] }, conclude: '놀림 글에는 반응하지 않고, 멈추자고 말하고, 어른에게 알려요. 놀림받은 친구에게는 잘못이 없다고 말해 줘요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '놀리는 글이 올라온 단톡방에서 할 수 있는 행동이 아닌 것은?', options: ['반응하지 않기', '\'ㅋㅋ\' 달기', '어른에게 알리기'], answer: '\'ㅋㅋ\' 달기' }] },
      }),
      M('activity.rules', {
        title: '반 단톡방 규칙 쓰기', method: '반 단톡방 규칙 쓰고 점검하기', tool: 'rubric-writing', minutes: 17,
        levels: { easy: '규칙 틀("단톡방에서는 ___ 하지 않는다. 대신 ___ 한다")을 채워 쓴다.', base: '틀 없이 규칙 세 가지를 쓰고 기준표(구체적인가·지킬 수 있는가·피해를 막는가)로 점검한다.', challenge: '셋째 문항에서 규칙을 어겼을 때의 회복 방법도 쓴다.' },
        activity: {
          title: '반 단톡방 규칙 쓰기', tool: 'rubric-writing',
          teacher: '"\'단톡방에서 착하게 지내자\'라는 규칙으로 무엇을 멈출 수 있을까요?" 막연한 규칙과 \'친구 사진은 본인 허락 없이 올리지 않는다\'를 견주어 읽은 뒤 쓰게 한다. "규칙이 많으면 단톡방이 재미없어진다"는 학생에게 "모두가 편하게 쓰려면 꼭 필요한 세 가지만 고르면 어떨까요?"라고 되묻는다. 친구 이름은 쓰지 않는다.',
          task: '반 단톡방 규칙 세 가지를 쓰고, 구체적인가·지킬 수 있는가·피해를 막는가를 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '규칙 1: 사진·영상에 대한 규칙을 쓰세요.', toolOptions: { topic: '반 단톡방에서 사진·영상을 올릴 때의 규칙을 한두 문장으로 쓰세요.', minChars: 15, maxChars: 120, minSentences: 1, maxSentences: 2, title: '규칙 ① 사진·영상' }, target: { selfCheck: ['무엇을 하고 하지 않을지 구체적으로 썼다', '모두가 지킬 수 있다', '누군가의 피해를 막는다'] } },
              { prompt: '틀을 채워 규칙 1을 쓰세요.', toolOptions: { starter: '단톡방에서는 ___ 하지 않는다. 대신 ___ 한다.' } }),
            IT({ prompt: '규칙 2: 말과 반응에 대한 규칙을 쓰세요.', toolOptions: { topic: '반 단톡방에서 글과 반응(이모티콘·ㅋㅋ)을 달 때의 규칙을 한두 문장으로 쓰세요.', minChars: 15, maxChars: 120, minSentences: 1, maxSentences: 2, title: '규칙 ② 말과 반응' }, target: { selfCheck: ['무엇을 하고 하지 않을지 구체적으로 썼다', '모두가 지킬 수 있다', '누군가의 피해를 막는다'] } },
              { prompt: '틀을 채워 규칙 2를 쓰세요.', toolOptions: { starter: '친구를 놀리는 글에는 ___ 하지 않는다. 대신 ___ 한다.' } }),
            IT({ prompt: '규칙 3: 초대와 나가기에 대한 규칙을 쓰세요.', toolOptions: { topic: '반 단톡방에 초대하거나 친구가 나갈 때의 규칙을 한두 문장으로 쓰세요.', minChars: 15, maxChars: 120, minSentences: 1, maxSentences: 2, title: '규칙 ③ 초대와 나가기' }, target: { selfCheck: ['무엇을 하고 하지 않을지 구체적으로 썼다', '모두가 지킬 수 있다', '누군가의 피해를 막는다'] } },
              { prompt: '틀을 채워 규칙 3을 쓰세요.', toolOptions: { starter: '나간 친구를 ___ 하지 않는다. 초대는 ___ 한다.' } },
              { prompt: '규칙 세 가지를 어겼을 때의 회복 방법을 두 문장으로 쓰세요.', toolOptions: { topic: '반 단톡방 규칙을 어겼을 때 어떻게 회복할지 두 문장으로 쓰세요(사과·글 내리기·어른에게 알리기 등).', minChars: 25, maxChars: 160, minSentences: 2, maxSentences: 3, title: '규칙을 어겼을 때' }, target: { selfCheck: ['피해를 멈추는 행동을 썼다', '사과나 회복 방법을 썼다', '누구에게 알릴지 썼다'] } },
              { conclude: '좋은 단톡방 규칙은 구체적이고, 모두가 지킬 수 있고, 누군가의 피해를 막아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 반 단톡방 규칙 세 가지를 써요.', columns: ['갈래', '규칙'], cells: [['사진·영상', ''], ['말과 반응', ''], ['초대와 나가기', '']] }] },
      }),

      // ---- 정리 ----
      M('wrap.stop', {
        title: '단톡방에서 쓸 멈춤 말', method: '단톡방에서 쓸 멈춤 말 고르기', tool: 'wordcards', minutes: 6,
        levels: { easy: '말 카드 4장을 멈추는 말과 부추기는 말로 가른다.', base: '말 카드 6장을 가른다.', challenge: '가른 뒤 멈춤 말 하나를 내 말투로 바꿔 쓴다(셋째 출구 질문).' },
        wrap: {
          teacher: '"분위기를 멈추는 말은 길어야 할까요?" 카드를 가른 뒤 멈춤 말 하나를 골라 내 말투로 소리 내어 읽게 한다. "멈추자고 하면 나도 놀림받을 것 같다"는 말에는 "방에 쓰기 어렵다면 어른에게 알리는 것도 멈춤이에요"라고 말해 준다.',
          exitTicket: [
            IT(X('wordcards', SB('단톡방 말 카드를 두 칸으로 가르세요.', ['멈추는 말', '부추기는 말'], [
              { id: 'w1', text: '"이거 본인 허락받은 거야?"', to: '멈추는 말' }, { id: 'w2', text: '"그만하자, 별로 안 웃겨"', to: '멈추는 말' },
              { id: 'w3', text: '"내리자, 퍼지면 안 돼"', to: '멈추는 말' }, { id: 'w4', text: '"ㅋㅋㅋ 더 올려 봐"', to: '부추기는 말' },
              { id: 'w5', text: '"캡처 각"', to: '부추기는 말' }, { id: 'w6', text: '"다른 방에도 보내자"', to: '부추기는 말' }]), { difficulty: 0.15 }),
              SB('말 카드 4장을 두 칸으로 가르세요.', ['멈추는 말', '부추기는 말'], [
                { id: 'w1', text: '"이거 본인 허락받은 거야?"', to: '멈추는 말' }, { id: 'w2', text: '"그만하자, 별로 안 웃겨"', to: '멈추는 말' },
                { id: 'w4', text: '"ㅋㅋㅋ 더 올려 봐"', to: '부추기는 말' }, { id: 'w6', text: '"다른 방에도 보내자"', to: '부추기는 말' }])),
            { type: 'choice', prompt: '"화면 속 말은 진짜 폭력이 아니다"라는 말에 대한 반박으로 가장 알맞은 것은?', options: ['화면은 끄면 그만이다', '화면 속 말도 퍼지고 남아서 시간과 장소 없이 상처를 준다', '글은 말보다 약하다'], answer: 1, difficulty: 0.15, explain: '사이버폭력도 학교폭력의 한 유형이에요.' },
            { type: 'short', prompt: '멈춤 말 하나를 내 말투로 바꿔 써요.' },
          ],
        },
        worksheet: {
          title: '단톡방 멈춤 말',
          items: [
            { type: 'short', prompt: '단톡방에서 쓸 멈춤 말을 하나 써요.' },
            { type: 'check', prompt: '사이버폭력이 더 위험한 까닭에 표시해요.', options: ['빠르게 퍼진다', '지워지지 않을 수 있다', '시간과 장소 없이 이어진다'] },
          ],
        },
      }),
      M('wrap.check', {
        title: '보내기 전 내 메시지 점검', method: '내 메시지 점검표', tool: 'kitchen', minutes: 6,
        levels: { easy: '항목 3개(알맞은 것 2개·함정 1개)에서 보내기 전 확인할 것에 표시한다.', base: '항목 5개(알맞은 것 3개·함정 2개)에서 표시한다.', challenge: '가장 지키기 어려운 항목과 그 까닭을 고른다(둘째 출구 질문).' },
        wrap: {
          teacher: '"보내기 단추를 누르기 전 3초 동안 무엇을 확인하면 좋을까요?" 점검표에 \'다들 웃으면 보낸다\' 같은 함정이 섞여 있다고 미리 말한다. "생각하고 보내면 대화가 느려진다"는 말에는 "한 번 보낸 글은 되돌릴 수 없다면 3초는 길까요?"라고 되묻는다.',
          exitTicket: [
            IT(X('kitchen', CL('보내기 전에 확인할 것에만 표시해요.', '보내기 전 점검', [
              { id: 'k1', text: '받는 사람이 이 글을 보고 기분이 어떨까', ok: true }, { id: 'k2', text: '캡처돼서 퍼져도 괜찮은 글인가', ok: true },
              { id: 'k3', text: '사진 속 사람에게 허락을 받았나', ok: true }, { id: 'k4', text: '다들 웃으면 보내도 된다' }, { id: 'k5', text: '익명이면 아무 말이나 괜찮다' }]), { difficulty: 0.15 }),
              CL('보내기 전에 확인할 것에만 표시해요(3개).', '보내기 전 점검', [
                { id: 'k1', text: '받는 사람이 이 글을 보고 기분이 어떨까', ok: true }, { id: 'k2', text: '캡처돼서 퍼져도 괜찮은 글인가', ok: true }, { id: 'k4', text: '다들 웃으면 보내도 된다' }])),
            { type: 'choice', prompt: '보내기 전 점검 가운데 가장 지키기 어려운 것과 그 까닭으로 알맞은 것은?', options: ['허락 확인 — 다들 이미 웃고 있으면 묻기 어색해서', '아무것도 어렵지 않다', '점검은 필요 없다'], answer: 0, difficulty: 0.25, explain: '어색해도 묻는 것이 친구를 지켜요.' },
            { type: 'mood', prompt: '오늘 수업을 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '보내기 전 3초',
          items: [
            { type: 'check', prompt: '보내기 전에 확인할 것에 표시해요.', options: ['받는 사람의 기분', '캡처돼도 괜찮은가', '사진 허락을 받았나'] },
            { type: 'short', prompt: '보내기 전 점검 가운데 내가 꼭 지킬 것 하나와 그 까닭을 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 8학년 · 목격자의 딜레마, 방관자에서 조력자로 (saf-violence.m.bystander) ====
  {
    const M = MK('bystander', [8]);
    const ROLE3 = ['방관', '동조', '조력'];
    const ACTS = [
      { id: 'a1', text: '못 본 척 지나간다', to: '방관' }, { id: 'a2', text: '멀리서 구경만 한다', to: '방관' }, { id: 'a3', text: '"누가 알아서 하겠지" 하고 자리로 간다', to: '방관' },
      { id: 'b1', text: '옆에서 웃으며 본다', to: '동조' }, { id: 'b2', text: '휴대전화로 영상을 찍는다', to: '동조' }, { id: 'b3', text: '"더 해 봐"라고 부추긴다', to: '동조' },
      { id: 'c1', text: '선생님께 알린다', to: '조력' }, { id: 'c2', text: '친구를 불러 그 자리에서 데리고 나온다', to: '조력' }, { id: 'c3', text: '나중에 친구에게 괜찮냐고 묻는다', to: '조력' },
    ];
    const ROOM = { grid: [6, 4], title: '가상의 우리 반 교실', places: [
      { name: '칠판 앞 둘러싼 학생들', icon: 'dot', at: [2, 0] }, { name: '둘러싸인 친구', icon: 'house', at: [3, 0] },
      { name: '창가에서 보기만 하는 학생', icon: 'dot', at: [5, 1] }, { name: '문 쪽으로 선생님 부르러 가는 학생', icon: 'dot', at: [0, 3] },
      { name: '뒷자리에서 휴대전화로 찍는 학생', icon: 'dot', at: [4, 3] }, { name: '사물함 앞 친구 곁에 선 학생', icon: 'dot', at: [1, 1] },
    ] };
    const D1 = { text: '점심시간 체육관 뒤, 같은 반 세 명이 수빈이를 둘러싸고 가방을 뺏어 던지며 웃는다. 나는 친구 둘과 지나가다 이 장면을 봤다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'pass', text: '"누가 알아서 하겠지" 하고 지나간다', result: '친구들도 모두 따라 지나간다.', impact: [{ who: '수빈', text: '아무도 오지 않는다고 느낀다', tone: -1 }], why: '모두가 \'누군가 하겠지\' 하면 아무도 하지 않아요.', end: '모두 지나가 아무도 돕지 않았어요.',
        next: { text: '교실에 돌아오니 수빈이 혼자 엎드려 있다.', ask: '이제 어떻게 할까?', choices: [
          { id: 'still', text: '모르는 척 수업 준비를 한다', result: '수빈은 다음 날도 같은 일을 겪는다.', impact: [{ who: '수빈', text: '괴롭힘이 이어진다', tone: -1 }], why: '늦게라도 알리면 다음 일을 막을 수 있어요.', end: '괴롭힘이 이어졌어요.',
            next: { text: '일주일 뒤 같은 일이 또 일어난다.', choices: [
              { id: 'again', text: '이번에도 지나간다', result: '수빈은 학교에 나오지 않는 날이 생긴다.', impact: [{ who: '수빈', text: '학교가 두려워진다', tone: -1 }], why: '방관이 쌓이면 피해가 커져요.' },
              { id: 'finally', text: '담임 선생님께 본 것을 말한다', result: '선생님이 상황을 살피기 시작한다.', impact: [{ who: '수빈', text: '드디어 도움을 받는다', tone: 1 }], why: '알린 것은 잘했지만, 처음 봤을 때 알렸다면 일주일을 줄일 수 있었어요.' }] } },
          { id: 'lateask', text: '수빈에게 "괜찮아? 선생님께 같이 갈까?"라고 묻는다', result: '수빈이 고개를 끄덕인다.', impact: [{ who: '수빈', text: '혼자가 아니라고 느낀다', tone: 1 }], end: '늦었지만 곁에 섰어요.',
            next: { text: '수빈이 "말하면 더 심해질까 봐 무서워"라고 한다.', choices: [
              { id: 'together', text: '"같이 상담 선생님께 가자, 너 잘못 아니야"', result: '상담 선생님이 수빈의 이야기를 듣는다.', impact: [{ who: '수빈', text: '보호를 받는다', tone: 1 }] },
              { id: 'quiet', text: '"그럼 그냥 참자"라고 한다', result: '괴롭힘이 계속된다.', impact: [{ who: '수빈', text: '참는 것밖에 없다고 느낀다', tone: -1 }], why: '두려움을 함께 덜어 줄 어른에게 잇는 것이 먼저예요.' }] } }] } },
      { id: 'call', text: '친구 하나는 선생님을 부르러 보내고, 나는 멀리서 지켜본다', result: '몇 분 뒤 체육 선생님이 달려온다.', impact: [{ who: '수빈', text: '괴롭힘이 멈춘다', tone: 1 }], end: '선생님을 불러 괴롭힘을 멈췄어요.',
        next: { text: '세 명이 흩어지고 수빈이 바닥의 가방을 줍고 있다.', ask: '어떻게 할까?', choices: [
          { id: 'near', text: '다가가 가방 줍는 것을 돕고 "괜찮아?"라고 묻는다', result: '수빈이 고맙다고 한다.', impact: [{ who: '수빈', text: '곁에 누가 있다고 느낀다', tone: 1 }], end: '수빈 곁에 있어 줬어요.',
            next: { text: '다음 날 세 명이 "너 누가 일렀냐?"라며 나를 노려본다.', choices: [
              { id: 'tell2', text: '담임 선생님께 이 일도 알린다', result: '선생님이 보복을 막기 위해 나선다.', impact: [{ who: '나', text: '보호를 받는다', tone: 1 }] },
              { id: 'fight', text: '혼자 맞서 말싸움을 한다', result: '싸움이 커진다.', impact: [{ who: '나', text: '위험해진다', tone: -1 }], why: '보복이 걱정되면 혼자 맞서지 말고 어른에게 알려요.' }] } },
          { id: 'go', text: '선생님이 오셨으니 그냥 간다', result: '수빈은 혼자 가방을 챙긴다.', impact: [{ who: '수빈', text: '아직 외롭다', tone: 0 }], why: '괴롭힘이 멈춘 뒤 곁에 있어 주는 것도 조력이에요.' }] } },
      { id: 'jump', text: '혼자 뛰어들어 세 명을 밀친다', result: '나까지 몸싸움에 휘말린다.', impact: [{ who: '나', text: '다칠 수 있다', tone: -1 }], why: '혼자 맞서면 나도 다칠 수 있어요. 내 안전을 지키며 어른을 불러요.', ending: '몸싸움이 벌어져 모두 위험해졌어요.' }] };
    const R1 = [{ id: 'r1', text: '여럿이 볼수록 \'누가 하겠지\' 하고 미루기 쉽다' }, { id: 'r2', text: '내 안전을 지키며 어른을 부르는 것도 돕는 일이다' },
      { id: 'r3', text: '내 일이 아니니 끼지 않는 게 맞다', why: '보고 지나가는 것도 괴롭힘이 이어지게 해요.' }, { id: 'r4', text: '돕는 건 직접 싸워 주는 것뿐이다', why: '어른을 부르거나 곁에 있는 것도 조력이에요.' }];
    const R1C = { reasons: [{ id: 'r5', text: '지나간 길에서는 괴롭힘이 일주일 더 이어졌다' }, { id: 'r6', text: '알린 길에서는 그날 바로 멈췄다' }], ok: ['r5', 'r6'] };
    const SAFE = ['내 안전 확인하기', '친구를 그 자리에서 데리고 나오기', '믿을 어른에게 알리기', '곁에 있어 주기'];

    ALL.push(
      // ---- 도입 ----
      M('intro.feel', {
        title: '복도 장면 속 주변 학생의 마음', method: '복도 장면 속 주변 학생의 마음 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 마음 카드 4장(걱정·무서움·미안함·편안함)만 짚으며 함께 고른다.', base: '시연 판의 마음 카드 8장에서 주변 학생의 마음을 고른다.', challenge: '마음(걱정)과 행동(지나감)이 다른 까닭을 짝과 말한다.' },
        intro: {
          teacher: '"한 친구가 둘러싸인 장면을 보며 서 있는 학생들은 어떤 마음일까요?" 장면을 읽고 몇 명의 답을 들은 뒤 시연 단추로 \'걱정\'·\'무서움\' 카드가 붙는 모습을 보인다. "보고만 있는 사람은 아무 생각이 없다"는 말이 나오면 "걱정되는데도 움직이지 못하는 까닭은 무엇일까요?"라고 되묻는다. 오늘은 걱정하는 마음을 안전한 도움 행동으로 바꾸는 법을 익힌다고 밝힌다.',
          student: '복도에서 한 친구가 둘러싸인 가상 장면을 보고, 주변에 서 있는 학생의 마음을 골라요. 마음과 행동이 다른 까닭도 생각해요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 's1', label: '친구가 둘러싸인 걸 보며 복도에 서 있는 학생' }], cards: ['걱정', '무서움', '미안함', '편안함', '신남', '화남', '놀람', '외로움'] }, sequence: [{ match: { s1: '걱정' } }] },
          art: { draw: 'a paper-cut school hallway where a group surrounds one student while others stand at a distance with worried faces', banner: '보고 있는 사람의 마음은?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: SAFE_NOTE,
      }),
      M('intro.room', {
        title: '교실 배치도에서 역할 찾기', method: '교실 배치도에서 역할 찾기', tool: 'map', minutes: 6,
        levels: { easy: '배치도에 역할 이름이 보이는 채로 보고만 있는 사람과 돕는 사람을 함께 찾는다.', base: '교사가 이름 보이기를 끄고 역할을 말로 설명하면 학생이 자리를 짚는다.', challenge: '자리에 따라 할 수 있는 도움(문 쪽은 선생님 부르기, 가까운 쪽은 곁에 서기)이 어떻게 다른지 말한다.' },
        intro: {
          teacher: '"이 교실에서 장면을 보고만 있는 사람은 어디 있고, 돕는 사람은 어디 있을까요?" 가상 교실 배치도를 띄우고 시연 단추로 창가 학생(보기만 함)과 문 쪽 학생(선생님 부르러 감)에 핀이 꽂히는 모습을 보인다. "뒷자리에서 찍는 사람은 상관없다"는 말이 나오면 "그 영상이 퍼지면 둘러싸인 친구는 어떻게 될까요?"라고 되묻는다. 주변인은 방관·동조·조력 가운데 하나를 고르고 있다는 것을 오늘의 질문으로 삼는다.',
          student: '가상 교실 배치도에서 보고만 있는 사람과 돕는 사람의 자리를 찾고, 내 자리에서는 어떤 도움을 줄 수 있을지 생각해요.',
          demo: { tool: 'map', options: ROOM, sequence: [{ place: '창가에서 보기만 하는 학생' }, { place: '문 쪽으로 선생님 부르러 가는 학생' }] },
          art: { draw: 'a paper-cut classroom floor plan seen from above with small paper figures, one heading to the door and others watching', banner: '나는 어디에 서 있을까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),

      // ---- 활동 ----
      M('activity.choice', {
        title: '체육관 뒤에서 본 장면', method: '체육관 뒤에서 본 장면의 갈림길', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림 2번까지 가고, 고를 때마다 수빈과 나에게 생기는 영향이 바로 보인다.', base: '갈림 3번까지 가고, 영향 표시는 맞힌 뒤에만 보인다. 끝에서 근거를 고른다.', challenge: '갈림 3번 뒤 방관을 고른 길의 결과와 견주는 근거 카드까지 고른다.' },
        activity: {
          title: '체육관 뒤에서 본 장면', tool: 'dilemma',
          teacher: '"셋이 같이 봤는데 왜 아무도 움직이지 않았을까요?" 학생마다 한 길을 끝까지 가 본 뒤, 지나간 길과 선생님을 부른 길의 결과를 견주게 한다. "내가 아니어도 누군가 하겠지"라는 학생에게 "같이 있던 세 사람 모두 그렇게 생각했다면 어떻게 될까요?"라고 되묻는다 — 이것이 책임 분산이다. 혼자 뛰어드는 길도 짚어, 돕는다는 것은 내 안전을 지키며 어른을 부르는 것부터라는 점을 분명히 한다.',
          task: '체육관 뒤에서 친구가 괴롭힘당하는 장면을 본 주변인이 되어 길을 고르고, 끝에서 내 선택의 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL({ easy: '체육관 뒤에서 수빈이 둘러싸였어요. 두 번 골라 결과를 보고 근거를 고르세요.', base: '체육관 뒤에서 수빈이 둘러싸였어요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 간 뒤, 지나간 길의 결과와 견주는 근거까지 고르세요.' },
              '체육관 뒤', D1, [['call', 'near', 'tell2'], ['pass', 'lateask', 'together']], R1, ['r1', 'r2'], R1C),
            IT({ prompt: '친구들과 함께 본 장면에서 \'누가 하겠지\'의 결과를 따라가세요.', toolOptions: { title: '여럿이 봤을 때', scene: { text: '복도에서 같은 장면을 본 학생이 열 명이다. 모두 서로를 쳐다본다.', ask: '누가 움직여야 할까?', motif: 'house', choices: [
              { id: 'wait', text: '열 명이나 있으니 누군가 하겠지', result: '아무도 움직이지 않는다.', impact: [{ who: '둘러싸인 친구', text: '도움을 못 받는다', tone: -1 }], why: '여럿일수록 서로 미루기 쉬워요. 이것을 책임 분산이라고 해요.' },
              { id: 'me', text: '내가 먼저 선생님을 부르러 간다', result: '한 명이 움직이자 두세 명이 따라 나선다.', impact: [{ who: '둘러싸인 친구', text: '도움을 받는다', tone: 1 }], ending: '한 사람이 움직이니 다른 사람도 움직였어요.' }] }, reasons: [{ id: 'q1', text: '여럿이 볼수록 내가 먼저 움직여야 한다' }, { id: 'q2', text: '많은 사람이 봤으니 이미 누가 알렸을 것이다', why: '누가 알렸는지 모르면 내가 알려요.' }], compare: true },
              target: { path: [['me']], reasons: ['q1'] } }),
            IT({ prompt: '직접 나서기 어려울 때의 장면을 따라가세요.', toolOptions: { title: '직접 나서기 어려울 때', scene: { text: '괴롭히는 쪽이 힘이 센 선배들이다. 지금 다가가면 나도 위험할 것 같다.', ask: '어떻게 도울까?', motif: 'house', choices: [
              { id: 'indirect', text: '자리를 벗어나 117이나 선생님께 알린다', result: '어른이 상황을 살피러 온다.', impact: [{ who: '둘러싸인 친구', text: '도움을 받는다', tone: 1 }, { who: '나', text: '안전하다', tone: 1 }], ending: '내 안전을 지키며 알려서 도왔어요.' },
              { id: 'nothing', text: '위험하니 아무것도 하지 않는다', result: '괴롭힘이 계속된다.', impact: [{ who: '둘러싸인 친구', text: '혼자 남는다', tone: -1 }], why: '직접 나서지 못해도 알리는 방법으로 도울 수 있어요.' }] }, reasons: [{ id: 'p1', text: '직접 나서지 않아도 알리는 것으로 도울 수 있다' }, { id: 'p2', text: '돕지 못하면 아무것도 안 하는 게 낫다', why: '간접적으로 돕는 방법이 있어요.' }], compare: true },
              target: { path: [['indirect']], reasons: ['p1'] }, conclude: '주변인이 움직이면 결과가 바뀌어요. 내 안전을 먼저 지키고, 어른을 부르거나 117에 알리고, 친구 곁에 있어 주는 것이 조력이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '\'책임 분산\'을 바르게 설명한 것은?', options: ['여럿이 볼수록 서로 미루어 아무도 돕지 않게 되는 것', '책임을 여럿이 나눠 더 잘 돕는 것', '혼자 모든 책임을 지는 것'], answer: '여럿이 볼수록 서로 미루어 아무도 돕지 않게 되는 것' }] },
        notes: SAFE_NOTE,
      }),
      M('activity.roles', {
        title: '방관·동조·조력 나누기', method: '행동을 방관·동조·조력으로 나누기', tool: 'mindmap', minutes: 17,
        levels: { easy: '행동 카드 5장을 세 가지에 나누고, 놓으면 바로 맞는지 알려 준다.', base: '행동 카드 9장을 세 가지에 나눈다.', challenge: '셋째 문항에서 같은 행동이 조건에 따라 다른 가지가 되는 카드를 나눈다.' },
        activity: {
          title: '방관·동조·조력 나누기', tool: 'mindmap',
          teacher: '"휴대전화로 영상을 찍는 것은 방관일까요, 동조일까요?" 카드를 놓을 때마다 괴롭히는 쪽이 그 행동을 보고 어떻게 느낄지 따지게 한다. "구경만 하는 것은 중립"이라는 학생에게 "구경하는 사람이 많을수록 괴롭히는 쪽은 멈추고 싶어질까요, 더 하고 싶어질까요?"라고 되묻는다. 조력에는 직접 돕기뿐 아니라 알리기·곁에 있기 같은 간접 돕기도 들어간다고 짚는다.',
          task: '괴롭힘을 본 주변인의 행동 카드를 방관·동조·조력 가지에 나누고, 조건에 따라 달라지는 경우를 찾아요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('주변인의 행동 카드를 세 가지에 나누세요.', ROLE3, ACTS, { topic: '괴롭힘을 본 주변인' }),
              SB('행동 카드 5장을 세 가지에 나누세요.', ROLE3, pickCards(ACTS, ['a1', 'b1', 'b2', 'c1', 'c2']), { topic: '괴롭힘을 본 주변인' })),
            IT(SB('조력 행동을 직접 돕기와 간접 돕기로 나누세요.', ['직접 돕기', '간접 돕기'], [
              { id: 'd1', text: '"그만해" 하고 친구를 데리고 나온다', to: '직접 돕기' }, { id: 'd2', text: '친구 곁에 서서 함께 자리를 뜬다', to: '직접 돕기' },
              { id: 'd3', text: '117에 상담·신고한다', to: '간접 돕기' }, { id: 'd4', text: '담임 선생님께 본 것을 말한다', to: '간접 돕기' }, { id: 'd5', text: '나중에 친구에게 괜찮냐고 묻는다', to: '간접 돕기' }], { topic: '조력의 두 갈래' })),
            IT(PB('조력자의 행동만 골라 담으세요.', '조력자의 행동', [
              { id: 'p1', text: '선생님을 부르러 간다', ok: true }, { id: 'p2', text: '피해 친구에게 "네 잘못 아니야"라고 말한다', ok: true },
              { id: 'p3', text: '찍은 영상을 단톡방에 올린다' }, { id: 'p4', text: '"원래 저런 애야"라고 말한다' }]),
              null,
              SB('같은 행동이라도 조건에 따라 가지가 달라져요. 알맞게 나누세요.', ROLE3, [
                { id: 'e1', text: '자리를 떠난다(그냥 가 버림)', to: '방관' }, { id: 'e2', text: '자리를 떠난다(선생님을 부르러)', to: '조력' },
                { id: 'e3', text: '웃는다(분위기에 끌려)', to: '동조' }, { id: 'e4', text: '말을 건다(친구를 데리고 나오려고)', to: '조력' }], { topic: '조건이 바뀌면' }),
              { conclude: '주변인은 방관·동조·조력 가운데 하나를 고르고 있어요. 구경도 괴롭히는 쪽에 힘을 주고, 알리기·곁에 있기도 훌륭한 조력이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '주변인의 행동을 하나씩 써요.', columns: ['역할', '행동'], cells: [['방관', ''], ['동조', ''], ['조력', '']], answer: '(예) 못 본 척 지나감, 웃으며 봄·영상 찍기, 선생님께 알림·곁에 있기' }] },
      }),
      M('activity.safe', {
        title: '안전하게 돕는 차례', method: '안전하게 돕는 차례 정하기', tool: 'timer', minutes: 16,
        levels: { easy: '순서 카드 3장(내 안전 확인·어른에게 알리기·곁에 있어 주기)을 차례로 놓는다.', base: '순서 카드 4장을 놓고 스스로 점검 칸에 표시한다.', challenge: '셋째 문항에서 직접 나서기 어려울 때의 간접 돕기 차례를 놓는다.' },
        activity: {
          title: '안전하게 돕는 차례', tool: 'timer',
          teacher: '"돕고 싶은 마음이 들 때 가장 먼저 확인할 것은 무엇일까요?" 순서 카드를 놓은 뒤 \'내 안전 확인\'이 왜 맨 앞인지 말하게 한다. "그건 겁쟁이 같다"는 학생에게 "내가 다치면 친구를 도울 사람이 한 명 줄어들어요"라고 말해 준다. 친구를 데리고 나오는 것은 위험하지 않을 때만이고, 위험하면 바로 어른을 부르는 차례로 간다고 짚는다.',
          task: '괴롭힘을 봤을 때 안전하게 돕는 순서 카드를 차례대로 놓고, 스스로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '안전하게 돕는 차례대로 카드 4장을 놓고 점검 칸에 표시하세요.', toolOptions: { title: '안전하게 돕는 차례', cards: [SAFE[2], SAFE[0], SAFE[3], SAFE[1]] }, target: { order: SAFE, selfCheck: ['내가 위험하지 않은지 먼저 살폈다', '알릴 어른을 정했다', '친구 곁에 있어 줄 방법을 떠올렸다'] } },
              { prompt: '안전하게 돕는 차례대로 카드 3장을 놓으세요.', toolOptions: { cards: [SAFE[3], SAFE[0], SAFE[2]] }, target: { order: [SAFE[0], SAFE[2], SAFE[3]] } }),
            IT({ prompt: '단톡방에서 친구가 놀림받는 것을 봤을 때의 차례를 놓으세요.', toolOptions: { title: '단톡방에서 봤을 때', cards: ['피해 친구에게 따로 위로 보내기', '놀림 글에 반응하지 않기', '대화를 저장해 선생님께 알리기'] }, target: { order: ['놀림 글에 반응하지 않기', '대화를 저장해 선생님께 알리기', '피해 친구에게 따로 위로 보내기'] } }),
            IT({ prompt: '친구를 데리고 나온 뒤에 할 일을 차례대로 놓으세요.', toolOptions: { title: '데리고 나온 뒤', cards: ['다음 날 다시 안부 묻기', '보건실이나 상담실로 함께 가기', '선생님께 있었던 일 말하기'] }, target: { order: ['보건실이나 상담실로 함께 가기', '선생님께 있었던 일 말하기', '다음 날 다시 안부 묻기'] } },
              null,
              { prompt: '직접 나서기 어려울 때의 간접 돕기 차례를 놓으세요.', toolOptions: { title: '간접 돕기', cards: ['나중에 친구 곁에 있어 주기', '그 자리에서 떨어지기', '117이나 선생님께 알리기'] }, target: { order: ['그 자리에서 떨어지기', '117이나 선생님께 알리기', '나중에 친구 곁에 있어 주기'] } },
              { conclude: '돕는 차례는 내 안전 → 데리고 나오기(안전할 때만) → 어른에게 알리기 → 곁에 있기예요. 직접 못 나서도 알리고 곁에 있으면 돕는 거예요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '직접 나서기 어려울 때 친구를 도울 수 있는 방법 두 가지를 써요.' }] },
      }),
      M('activity.script', {
        title: '조력자가 되는 역할극 대본', method: '조력자가 되는 역할극 대본 채우기', tool: 'story', minutes: 17,
        levels: { easy: '대본 빈칸 2개에 데리고 나오는 말과 위로하는 말 카드를 넣고, 넣으면 바로 맞는지 알려 준다.', base: '대본 빈칸 4개에 말 카드를 넣는다(함정 카드가 섞인다).', challenge: '셋째 문항에서 다른 결말에 쓸 대사를 골라 담은 뒤, 모둠이 대본을 읽고 다른 결말을 말로 이어 본다.' },
        activity: {
          title: '조력자가 되는 역할극 대본', tool: 'story',
          teacher: '"\'야, 그만해!\'라고 외치는 것 말고 친구를 그 자리에서 빼낼 수 있는 말은 무엇일까요?" 빈칸을 채운 뒤 모둠별로 대본을 소리 내어 읽게 한다. "위로는 오글거린다"는 학생에게 "\'네 잘못 아니야\' 한마디가 친구에게 어떤 힘이 될까요?"라고 되묻는다. 괴롭히는 역할은 대사를 짧게 하고, 실제 친구 이름을 쓰지 않는다.',
          task: '역할극 대본의 말풍선 빈칸에 친구를 데리고 나오는 말, 곁에서 위로하는 말 카드를 넣어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(FB('복도 장면 대본의 빈칸에 알맞은 말 카드를 넣으세요.', [['나: "수빈아, ___"', '"선생님이 너 찾으셔, 같이 가자"', '나', 'star'], ['나(복도 끝에서): "___"', '"괜찮아? 네 잘못 아니야"', '나', 'star'],
              ['수빈: "말하면 더 심해질까 봐…" — 나: "___"', '"같이 상담 선생님께 가자"', '나', 'star'], ['수빈: "___"', '"고마워, 혼자가 아니라서 다행이야"', '수빈', 'leaf']], ['"네가 좀 참지 그랬어"']),
              FB('복도 장면 대본의 빈칸 2개에 알맞은 말 카드를 넣으세요.', [['나: "수빈아, ___"', '"선생님이 너 찾으셔, 같이 가자"', '나', 'star'], ['나(복도 끝에서): "___"', '"괜찮아? 네 잘못 아니야"', '나', 'star']], [])),
            IT(FB('단톡방 장면 대본의 빈칸에 알맞은 말 카드를 넣으세요.', [['나(단톡방): "___"', '"그만하자, 하나도 안 웃겨"', '나', 'star'], ['나(따로 메시지): "___"', '"너 잘못 아니야. 내가 선생님께 같이 말할게"', '나', 'star'],
              ['다온: "다들 나 싫어하는 것 같아" — 나: "___"', '"나는 네 편이야"', '나', 'star'], ['다온: "___"', '"응, 내일 같이 가자"', '다온', 'leaf']], ['"ㅋㅋ 그냥 무시해"']),
              FB('단톡방 장면 대본의 빈칸 2개에 알맞은 말 카드를 넣으세요.', [['나(단톡방): "___"', '"그만하자, 하나도 안 웃겨"', '나', 'star'], ['나(따로 메시지): "___"', '"너 잘못 아니야. 내가 선생님께 같이 말할게"', '나', 'star']], [])),
            IT(PB('피해 친구에게 힘이 되는 대사만 골라 담으세요.', '힘이 되는 대사', [
              { id: 'p1', text: '"네 잘못 아니야"', ok: true }, { id: 'p2', text: '"같이 있어 줄게"', ok: true }, { id: 'p3', text: '"너도 뭔가 했겠지"' }, { id: 'p4', text: '"별일 아니잖아"' }]),
              null,
              PB('다른 결말(주변인 여럿이 함께 나서는 결말)에 쓸 대사만 골라 담으세요.', '다른 결말 대사', [
                { id: 'q1', text: '"우리도 같이 선생님께 갈게"', ok: true }, { id: 'q2', text: '"수빈아, 우리랑 같이 가자"', ok: true }, { id: 'q3', text: '"구경하자, 재밌겠다"' },
                { id: 'q4', text: '"우리 반은 이런 거 그냥 안 넘어가"', ok: true }, { id: 'q5', text: '"괜히 끼지 말자"' }]),
              { conclude: '조력자의 말은 친구를 그 자리에서 빼내고, 탓하지 않고, 도움을 함께 찾는 말이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '괴롭힘당한 친구에게 건넬 힘이 되는 말을 한 문장으로 써요.' }] },
      }),

      // ---- 정리 ----
      M('wrap.words', {
        title: '곁에 설 때 쓸 말', method: '곁에 설 때 쓸 말 고르기', tool: 'wordcards', minutes: 6,
        levels: { easy: '말 카드 4장에서 힘이 되는 말을 고른다.', base: '말 카드 6장에서 힘이 되는 말을 고른다.', challenge: '고른 말 하나를 내 말투로 바꿔 쓴다(셋째 출구 질문).' },
        wrap: {
          teacher: '"피해 친구에게 건넬 말 가운데, 걱정처럼 들리지만 상처가 되는 말은 무엇일까요?" 카드를 고른 뒤 \'너도 뭔가 했겠지\'가 왜 상처인지 말하게 한다. 잘못은 괴롭힌 쪽에 있고, 피해 친구에게 까닭을 캐묻지 않는다는 점을 다시 짚는다.',
          exitTicket: [
            IT(X('wordcards', PB('피해 친구에게 힘이 되는 말만 골라 담아요.', '힘이 되는 말', [
              { id: 'w1', text: '"네 잘못 아니야"', ok: true }, { id: 'w2', text: '"내가 곁에 있을게"', ok: true }, { id: 'w3', text: '"선생님께 같이 가자"', ok: true },
              { id: 'w4', text: '"너도 뭔가 했겠지"' }, { id: 'w5', text: '"그 정도로 뭘"' }, { id: 'w6', text: '"왜 가만있었어?"' }]), { difficulty: 0.15 }),
              PB('피해 친구에게 힘이 되는 말만 골라 담아요(4장).', '힘이 되는 말', [
                { id: 'w1', text: '"네 잘못 아니야"', ok: true }, { id: 'w2', text: '"내가 곁에 있을게"', ok: true }, { id: 'w4', text: '"너도 뭔가 했겠지"' }, { id: 'w6', text: '"왜 가만있었어?"' }])),
            { type: 'choice', prompt: '"돕는 것은 싸움에 끼어드는 것뿐이다"라는 말에 대한 생각으로 가장 알맞은 것은?', options: ['맞다, 직접 싸워야 돕는 것이다', '알리기·곁에 있기 같은 간접 돕기도 조력이다', '돕지 않는 것이 안전하다'], answer: 1, difficulty: 0.15, explain: '내 안전을 지키며 돕는 방법이 여럿 있어요.' },
            { type: 'short', prompt: '고른 힘이 되는 말 하나를 내 말투로 바꿔 써요.' },
          ],
        },
        worksheet: {
          title: '곁에 설 때 쓸 말',
          items: [
            { type: 'short', prompt: '피해 친구에게 건넬 말을 내 말투로 하나 써요.' },
            { type: 'check', prompt: '조력자가 할 수 있는 일에 표시해요.', options: ['선생님께 알리기', '117에 상담·신고하기', '친구 곁에 있어 주기'] },
          ],
        },
      }),
      M('wrap.pledge', {
        title: '나의 조력자 다짐', method: '나의 조력자 다짐 쓰기', tool: 'rubric-writing', minutes: 6,
        levels: { easy: '문장 틀("나는 괴롭힘을 보면 ___ 하고, ___에게 알리겠다")을 채워 쓴다.', base: '틀 없이 한 문장으로 쓰고 기준표(구체적·안전·실천 가능)를 점검한다.', challenge: '다짐을 지키기 어려운 상황과 대안을 한 문장 덧붙인다.' },
        wrap: {
          teacher: '"\'항상 정의롭겠다\'와 \'괴롭힘을 보면 그 자리를 벗어나 담임 선생님께 알리겠다\' 가운데 내일 지킬 수 있는 다짐은 무엇일까요?" 두 문장을 견주어 읽은 뒤 쓰게 한다. "혼자 다 막아 내겠다"고 쓰는 학생에게는 안전 기준을 다시 읽게 한다. 이름은 쓰지 않는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'rubric-writing', options: { topic: '괴롭힘을 봤을 때 조력자로서 할 일을 한 문장 다짐으로 쓰세요.', minChars: 15, maxChars: 120, minSentences: 1, maxSentences: 2, title: '조력자 다짐' },
              prompt: '조력자 다짐을 쓰고 기준표에 표시해요.', target: { selfCheck: ['할 행동이 구체적이다', '내 안전을 지키는 방법이다', '내가 실제로 할 수 있다'] }, difficulty: 0.25 },
            { prompt: '문장 틀을 채워 다짐을 쓰고 기준표에 표시해요.', toolOptions: { starter: '나는 괴롭힘을 보면 ___ 하고, ___에게 알리겠다.' } },
            { prompt: '다짐에 지키기 어려운 상황과 대안을 한 문장 덧붙여 쓰고 기준표에 표시해요.', toolOptions: { minSentences: 2, maxSentences: 3, minChars: 25 }, target: { selfCheck: ['할 행동이 구체적이다', '내 안전을 지키는 방법이다', '내가 실제로 할 수 있다', '어려울 때의 대안을 썼다'] } }),
            { type: 'choice', prompt: '가장 안전하고 실천할 수 있는 다짐은?', options: ['괴롭히는 애들을 혼자 혼내 주겠다', '괴롭힘을 보면 자리를 벗어나 선생님께 알리겠다', '앞으로 아무 일에도 끼지 않겠다'], answer: 1, difficulty: 0.15, explain: '내 안전을 지키며 알리는 다짐이에요.' },
            { type: 'mood', prompt: '오늘 수업을 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '나의 조력자 다짐',
          items: [
            { type: 'short', prompt: '조력자로서 할 일을 한 문장 다짐으로 써요.' },
            { type: 'check', prompt: '내 다짐을 기준표로 점검해요.', options: ['구체적이다', '안전하다', '실천할 수 있다'] },
          ],
          easy: { note: '"나는 괴롭힘을 보면 ___ 하고" 틀을 써도 돼요.', items: [{ type: 'blank', prompt: '틀을 채워 다짐을 써요.', text: '나는 괴롭힘을 보면 ___ 하고, ___에게 알리겠다.', answer: '(예) 그 자리를 벗어나, 담임 선생님' }] },
        },
      }),
    );
  }

  // ==== 8학년 · 디지털 성범죄 예방, 동의와 유포 금지 (saf-violence.m.digital-consent) ====
  {
    const M = MK('digital-consent', [8]);
    const ACT3 = ['괜찮음', '물어야 함', '하면 안 됨'];
    const ACTS = [
      { id: 'a1', text: '내 풍경 사진 SNS에 올리기', to: '괜찮음' }, { id: 'a2', text: '내가 그린 그림 사진 올리기', to: '괜찮음' },
      { id: 'b1', text: '친구들과 찍은 단체 사진 올리기', to: '물어야 함' }, { id: 'b2', text: '친구 얼굴이 나온 사진 찍기', to: '물어야 함' }, { id: 'b3', text: '친구와 찍은 영상을 단톡방에 보내기', to: '물어야 함' },
      { id: 'c1', text: '몰래 찍기', to: '하면 안 됨' }, { id: 'c2', text: '받은 사진을 다른 방에 보내기', to: '하면 안 됨' }, { id: 'c3', text: '친구 사진을 합성해 돌리기', to: '하면 안 됨' },
    ];
    const D1 = { text: '반 단톡방에 누군가 몰래 찍힌 듯한 친구 사진을 올렸다. "이거 누구게?"라는 글과 함께.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'save', text: '일단 사진을 저장해 둔다', result: '내 휴대전화에도 사진이 남는다.', impact: [{ who: '사진 속 친구', text: '사진이 한 군데 더 남는다', tone: -1 }], why: '받은 사진은 저장하지 않아요. 저장하면 퍼질 수 있는 곳이 하나 더 생겨요.', end: '사진이 내 휴대전화에 남았어요.',
        next: { text: '다른 친구가 "그 사진 나한테도 보내 줘"라고 한다.', ask: '이제 어떻게 할까?', choices: [
          { id: 'send', text: '친한 친구라 보내 준다', result: '사진이 또 다른 방으로 옮겨 간다.', impact: [{ who: '사진 속 친구', text: '피해가 더 커진다', tone: -1 }], why: '동의 없이 찍힌 사진을 전달하는 것도 범죄가 될 수 있어요.', end: '사진이 더 퍼졌어요.',
            next: { text: '사진 속 친구가 학교에 오지 않았다.', choices: [
              { id: 'hide', text: '내가 보낸 건 비밀로 한다', result: '사진이 어디까지 갔는지 아무도 모른다.', impact: [{ who: '사진 속 친구', text: '지울 곳을 알 수 없다', tone: -1 }], why: '어디로 갔는지 알려야 지울 수 있어요.' },
              { id: 'tellnow', text: '지금이라도 사진을 지우고 선생님께 보낸 곳을 알린다', result: '선생님이 삭제와 도움 절차를 시작한다.', impact: [{ who: '사진 속 친구', text: '도움이 시작된다', tone: 1 }], why: '늦었지만 알린 것은 잘했어요. 처음부터 저장·전달하지 않았다면 더 좋았어요.' }] } },
          { id: 'delete', text: '"안 보내"라고 하고 저장한 사진을 지운다', result: '내 휴대전화에서는 사진이 사라진다.', impact: [{ who: '사진 속 친구', text: '한 곳은 지워졌다', tone: 1 }], end: '저장한 사진을 지웠어요.',
            next: { text: '단톡방에는 아직 사진이 남아 있다.', choices: [
              { id: 'report', text: '담임 선생님께 알린다', result: '선생님이 사진을 내리게 하고 도움 절차를 시작한다.', impact: [{ who: '사진 속 친구', text: '보호를 받는다', tone: 1 }] },
              { id: 'leaveit', text: '내 것은 지웠으니 됐다', result: '사진이 단톡방에 그대로 있다.', impact: [{ who: '사진 속 친구', text: '피해가 이어진다', tone: -1 }], why: '단톡방에 남은 사진은 어른이 도와야 내릴 수 있어요.' }] } }] } },
      { id: 'stop', text: '저장하지 않고 "이거 올리면 안 돼, 내려"라고 쓴다', result: '방이 조용해진다.', impact: [{ who: '사진 속 친구', text: '더 퍼지는 것을 막는다', tone: 1 }], end: '퍼뜨리지 말자고 말했어요.',
        next: { text: '올린 친구가 "장난인데 왜 그래, 누가 신고하냐"라고 쓴다.', ask: '어떻게 할까?', choices: [
          { id: 'tellt', text: '저장하지 않고 바로 담임 선생님께 알린다', result: '선생님이 사진을 내리게 하고 사진 속 친구를 돕는다.', impact: [{ who: '사진 속 친구', text: '보호를 받는다', tone: 1 }], end: '바로 어른에게 알렸어요.',
            next: { text: '사진 속 친구가 "나 때문에 일이 커졌다"며 울먹인다.', choices: [
              { id: 'notyou', text: '"네 잘못 아니야. 찍고 올린 사람 잘못이야"라고 말한다', result: '친구가 조금 마음을 놓는다.', impact: [{ who: '사진 속 친구', text: '탓을 덜어 낸다', tone: 1 }] },
              { id: 'careful', text: '"그러게, 좀 조심하지"라고 말한다', result: '친구가 더 움츠러든다.', impact: [{ who: '사진 속 친구', text: '자기 탓이라고 느낀다', tone: -1 }], why: '피해자는 잘못이 없어요. 조심하라는 말은 탓하는 말이 돼요.' }] } },
          { id: 'drop', text: '분위기가 험해져 그냥 둔다', result: '사진이 그대로 남는다.', impact: [{ who: '사진 속 친구', text: '피해가 이어진다', tone: -1 }], why: '말로 멈추지 않으면 어른에게 알려야 해요.' }] } },
      { id: 'look', text: '누구인지 궁금해 사진을 확대해 본다', result: '나도 모르게 사진을 다른 친구에게 묻게 된다.', impact: [{ who: '사진 속 친구', text: '사진이 더 화제가 된다', tone: -1 }], why: '누구인지 캐묻는 것도 피해를 키워요.', ending: '사진이 더 화제가 됐어요.' }] };
    const R1 = [{ id: 'r1', text: '동의 없이 찍힌 사진은 저장·전달하지 않는다' }, { id: 'r2', text: '잘못은 찍고 퍼뜨린 사람에게 있다' },
      { id: 'r3', text: '이미 퍼진 것은 공유해도 책임이 없다', why: '이미 퍼졌어도 내가 전달하면 피해가 커지고 책임이 생겨요.' }, { id: 'r4', text: '찍힌 사람이 조심했어야 한다', why: '피해자는 잘못이 없어요.' }];
    const R1C = { reasons: [{ id: 'r5', text: '사진 속 친구 입장에서는 저장 한 번도 두려움이 된다' }, { id: 'r6', text: '알린 길에서 사진 속 친구가 도움을 받았다' }], ok: ['r5', 'r6'] };
    const STEPS = [{ id: 's1', text: '저장·전달 멈추기' }, { id: 's2', text: '퍼뜨리지 말라고 말하기' }, { id: 's3', text: '믿을 어른에게 알리기' }, { id: 's4', text: '신고·삭제 도움 받기' }];

    ALL.push(
      // ---- 도입 ----
      M('intro.consent', {
        title: '\'동의\'를 바르게 말한 문장', method: '‘동의’가 들어간 문장 고르기', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 문장 카드 4장만 읽어 주며 바른 설명과 잘못된 설명으로 가른다.', base: '시연 판의 문장 카드 6장을 가른다.', challenge: '잘못된 문장 하나를 바르게 고쳐 짝에게 말한다.' },
        intro: {
          teacher: '"\'동의\'는 한 번 \'응\'이라고 하면 끝일까요?" 시연 단추로 문장 카드가 \'바른 설명\'과 \'잘못된 설명\'으로 갈리는 모습을 보인다. "싫다고 안 했으면 동의한 것"이라는 말이 나오면 "자고 있거나 몰랐던 사람은 싫다고 말할 수 있었을까요?"라고 되묻는다. 오늘은 사진·영상을 찍고 나누기 전에 동의를 구하고, 동의 없는 촬영·유포가 범죄라는 것을 다룬다고 밝힌다.',
          student: '\'동의\'를 바르게 설명한 문장과 잘못 설명한 문장을 가르고, 잘못된 문장을 어떻게 고칠지 생각해요.',
          demo: { tool: 'wordcards', options: { mode: 'sort', slots: ['바른 설명', '잘못된 설명'], cards: [
            { id: 'w1', text: '동의는 찍기 전, 올리기 전에 따로 묻는다' }, { id: 'w2', text: '동의는 언제든 거둘 수 있다' }, { id: 'w3', text: '망설이거나 대답이 없으면 동의가 아니다' },
            { id: 'w4', text: '싫다고 안 했으면 동의한 것이다' }, { id: 'w5', text: '한 번 찍어도 된다면 올려도 된다' }, { id: 'w6', text: '친한 사이면 묻지 않아도 된다' }] }, sequence: [{ sort: { '바른 설명': ['w1', 'w2', 'w3'], '잘못된 설명': ['w4', 'w5', 'w6'] } }] },
          art: { draw: 'a paper-cut phone camera with a speech bubble asking a question before taking a photo, two friends nodding', banner: '찍기 전에, 올리기 전에', extra: [{ motif: 'flower', x: 300, y: 96 }] },
        },
        notes: SAFE_NOTE,
      }),
      M('intro.survey', {
        title: '올리기 전에 묻는가 띠그래프', method: '가상 설문으로 ‘올리기 전에 묻는가’ 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 띠의 값(%)을 읽어 주며 가장 큰 부분을 함께 찾는다.', base: '값을 말하지 않고 띠의 길이로 가장 큰 부분을 고른다.', challenge: '이 자료로 알 수 없는 것(예: 묻지 않은 까닭, 실제로 퍼진 수)을 하나 말한다.' },
        intro: {
          teacher: '"친구 사진을 올리기 전에 \'늘 묻는다\'는 학생은 얼마나 될까요?" 가상의 학급 설문 띠그래프를 띄우고 시연 단추로 가장 큰 부분(\'가끔 묻는다\')을 고르는 모습을 보인다. 자료는 수업용 가상 설문이라고 먼저 밝힌다. "가끔이라도 물으면 괜찮다"는 말이 나오면 "묻지 않은 그 \'가끔\'에 찍힌 친구는 어떻게 느낄까요?"라고 되묻는다.',
          student: '가상 설문 띠그래프에서 가장 큰 부분을 찾고, 이 자료로 알 수 없는 것이 무엇인지 생각해요.',
          demo: { tool: 'chart', options: { type: 'band', mode: 'read', title: '친구 사진을 올리기 전에 묻나요?(가상 설문)', unit: '%', data: [['늘 묻는다', 34], ['가끔 묻는다', 41], ['안 묻는다', 25]], question: '가장 큰 부분은?', choices: ['늘 묻는다', '가끔 묻는다', '안 묻는다'] }, sequence: [{ pick: 1 }] },
          art: { draw: 'a paper-cut horizontal band chart divided into three colored paper strips, students pointing at the middle strip', banner: '우리는 묻고 올릴까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '띠그래프 값은 모두 가상이다.',
      }),

      // ---- 활동 ----
      M('activity.sort', {
        title: '괜찮음·물어야 함·하면 안 됨', method: '행동을 괜찮음·물어야 함·하면 안 됨으로 나누기', tool: 'mindmap', minutes: 16,
        levels: { easy: '행동 카드 5장을 세 가지에 나누고, 놓으면 바로 맞는지 알려 준다.', base: '행동 카드 8장을 세 가지에 나눈다.', challenge: '셋째 문항에서 물어서 허락받았어도 하면 안 되는 경우를 골라 담는다(함정 카드가 섞인다).' },
        activity: {
          title: '괜찮음·물어야 함·하면 안 됨', tool: 'mindmap',
          teacher: '"\'받은 사진을 다른 방에 보내기\'는 물어보면 괜찮아질까요?" 카드를 놓을 때마다 사진 속 사람 입장에서 다시 보게 한다. "친구끼리 돌려 보는 건 괜찮다"는 학생에게 "사진 속 친구가 그 \'친구끼리\'에 누가 있는지 알고 있을까요?"라고 되묻는다. 동의 없이 찍거나 퍼뜨리는 것은 장난이 아니라 범죄가 될 수 있고, 잘못은 찍고 퍼뜨린 사람에게 있다는 점을 분명히 한다.',
          task: '사진·영상과 관련된 행동 카드를 \'괜찮음\'·\'물어야 함\'·\'하면 안 됨\' 가지에 나누고, 허락받아도 안 되는 경우를 찾아요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('행동 카드를 세 가지에 나누세요.', ACT3, ACTS, { topic: '사진·영상 나누기' }),
              SB('행동 카드 5장을 세 가지에 나누세요.', ACT3, pickCards(ACTS, ['a1', 'b1', 'b2', 'c1', 'c2']), { topic: '사진·영상 나누기' })),
            IT(SB('동의를 구하는 말을 \'분명한 동의\'와 \'동의가 아님\'으로 나누세요.', ['분명한 동의', '동의가 아님'], [
              { id: 'd1', text: '"응, 이 사진은 올려도 돼"', to: '분명한 동의' }, { id: 'd2', text: '(대답 없이 고개를 돌림)', to: '동의가 아님' },
              { id: 'd3', text: '"음… 아마?"', to: '동의가 아님' }, { id: 'd4', text: '"찍는 건 되는데 올리지는 마"(올릴 때)', to: '동의가 아님' }, { id: 'd5', text: '"단톡방에만 올려도 돼"(단톡방에 올릴 때)', to: '분명한 동의' }], { topic: '동의일까?' })),
            IT(PB('동의 없는 촬영·유포에 해당하는 것만 골라 담으세요.', '동의 없는 촬영·유포', [
              { id: 'p1', text: '친구가 모르게 사진을 찍는다', ok: true }, { id: 'p2', text: '받은 친구 사진을 다른 방에 보낸다', ok: true },
              { id: 'p3', text: '허락받은 단체 사진을 함께 본다' }, { id: 'p4', text: '친구 얼굴을 다른 사진에 합성해 돌린다', ok: true }]),
              null,
              PB('물어서 허락받았어도 하면 안 되는 경우만 골라 담으세요.', '허락받아도 안 되는 경우', [
                { id: 'q1', text: '허락받은 사진을 놀리는 글과 함께 올린다', ok: true }, { id: 'q2', text: '"찍기만" 허락받은 사진을 올린다', ok: true },
                { id: 'q3', text: '나중에 지워 달라고 했는데 그대로 둔다', ok: true }, { id: 'q4', text: '허락받고 단체 사진을 앨범에 둔다' }, { id: 'q5', text: '허락받은 풍경 사진을 올린다' }]),
              { conclude: '찍기 전, 올리기 전에 따로 묻고, 동의는 언제든 거둘 수 있어요. 동의 없는 촬영·유포는 범죄가 될 수 있고, 잘못은 찍고 퍼뜨린 사람에게 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '\'친구끼리 돌려 보는 건 괜찮다\'는 말이 틀린 까닭을 한 문장으로 써요.' }],
          easy: [{ type: 'choice', prompt: '하면 안 되는 행동은?', options: ['몰래 찍기', '내 풍경 사진 올리기'], answer: '몰래 찍기' }] },
      }),
      M('activity.choice', {
        title: '몰래 찍힌 사진이 올라왔을 때', method: '단톡방에 몰래 찍힌 사진이 올라온 갈림길', tool: 'dilemma', minutes: 17,
        levels: { easy: '갈림 2번까지 가고, 고를 때마다 사진 속 친구에게 생기는 영향이 바로 보인다.', base: '갈림 3번까지 가고, 영향 표시는 맞힌 뒤에만 보인다. 끝에서 근거를 고른다.', challenge: '갈림 3번 뒤 사진 속 친구의 입장에서 결과를 다시 보는 근거 카드까지 고른다.' },
        activity: {
          title: '몰래 찍힌 사진이 올라왔을 때', tool: 'dilemma',
          teacher: '"\'저장만 해 두는 것\'은 사진 속 친구에게 어떤 의미일까요?" 학생마다 한 길을 끝까지 가 본 뒤 저장한 길과 바로 알린 길을 견주게 한다. "이미 퍼졌으니 나는 책임이 없다"는 학생에게 "내가 보내는 한 번이 사진이 닿는 사람을 몇 명 더 늘릴까요?"라고 되묻는다. 사진 속 친구에게 \'조심하지\'라고 말하는 길도 짚어, 피해자는 잘못이 없다는 점을 분명히 한다. 장면은 자세히 묘사하지 않는다.',
          task: '몰래 찍힌 친구 사진이 단톡방에 올라온 상황에서 저장·전달·알리기 가운데 길을 골라 결과를 따라가고, 끝에서 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL({ easy: '몰래 찍힌 친구 사진이 올라왔어요. 두 번 골라 결과를 보고 근거를 고르세요.', base: '몰래 찍힌 친구 사진이 올라왔어요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 간 뒤, 사진 속 친구 입장의 근거까지 고르세요.' },
              '몰래 찍힌 사진', D1, [['stop', 'tellt', 'notyou'], ['save', 'delete', 'report']], R1, ['r1', 'r2'], R1C),
            IT({ prompt: '누군가 "그 사진 누구야?"라고 물을 때의 장면을 따라가세요.', toolOptions: { title: '누구냐고 물을 때', scene: { text: '다른 반 친구가 "그 사진 누구야? 알려 줘"라고 메시지를 보냈다.', ask: '어떻게 답할까?', motif: 'house', choices: [
              { id: 'no', text: '"알려 줄 수 없어. 그 사진은 퍼뜨리면 안 돼"', result: '사진 속 친구가 누구인지 더 퍼지지 않는다.', impact: [{ who: '사진 속 친구', text: '신상이 지켜진다', tone: 1 }], ending: '신상을 지켰어요.' },
              { id: 'tell', text: '이름을 알려 준다', result: '이름과 사진이 함께 퍼진다.', impact: [{ who: '사진 속 친구', text: '피해가 커진다', tone: -1 }], why: '누구인지 알리는 것도 피해를 키워요.' }] }, reasons: [{ id: 'q1', text: '신상을 알리면 피해가 더 커진다' }, { id: 'q2', text: '물어보는 사람에게 답하는 게 예의다', why: '사진 속 친구를 지키는 것이 먼저예요.' }], compare: true },
              target: { path: [['no']], reasons: ['q1'] } }),
            IT({ prompt: '내 사진이 동의 없이 올라간 가상 인물의 장면을 따라가세요.', toolOptions: { title: '가상 인물 하은의 경우', scene: { text: '가상 인물 하은은 자기 사진이 동의 없이 올라간 것을 알았다. 창피해서 아무에게도 말하지 않으려 한다.', ask: '하은에게 맞는 길은?', motif: 'house', choices: [
              { id: 'hide', text: '혼자 참고 모른 척한다', result: '사진이 어디까지 퍼졌는지 모른 채 지낸다.', impact: [{ who: '하은', text: '혼자 두려움을 안는다', tone: -1 }], why: '창피한 것은 하은이 아니라 올린 사람이에요. 알려야 지울 수 있어요.' },
              { id: 'ask', text: '화면을 남겨 두고 믿는 어른에게 알린다', result: '어른과 함께 신고와 삭제 도움을 찾는다.', impact: [{ who: '하은', text: '혼자가 아니다', tone: 1 }], ending: '알려서 도움을 받기 시작했어요.' }] }, reasons: [{ id: 'p1', text: '하은은 잘못이 없고, 알리는 것은 잘한 일이다' }, { id: 'p2', text: '창피하니까 숨기는 게 낫다', why: '숨기면 도움을 받을 수 없어요.' }], compare: true },
              target: { path: [['ask']], reasons: ['p1'] }, conclude: '동의 없이 찍힌 사진은 저장·전달하지 않고 바로 알려요. 사진 속 사람은 잘못이 없고, 알린 사람은 잘한 거예요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '몰래 찍힌 친구 사진을 받았을 때 알맞은 행동은?', options: ['저장해 둔다', '친한 친구에게만 보낸다', '저장·전달하지 않고 어른에게 알린다'], answer: '저장·전달하지 않고 어른에게 알린다' }] },
        notes: '장면은 \'몰래 찍힌 듯한 사진\'까지만 쓰고 사진 내용을 묘사하지 않는다. ' + SAFE_NOTE,
      }),
      M('activity.steps', {
        title: '받은 순간부터 대처 차례', method: '받은 순간부터 대처 차례 놓기', tool: 'timeline', minutes: 16,
        levels: { easy: '장면 카드 3장(저장·전달 멈추기·퍼뜨리지 말라고 말하기·어른에게 알리기)을 시간 띠에 놓는다.', base: '장면 카드 4장을 차례로 놓는다.', challenge: '셋째 문항에서 단계마다 하면 안 되는 행동 카드를 짝짓는다(함정 카드가 섞인다).' },
        activity: {
          title: '받은 순간부터 대처 차례', tool: 'timeline',
          teacher: '"사진을 받은 순간 손가락이 가장 먼저 해야 할 일은 무엇일까요?" 카드를 놓은 뒤 \'저장·전달 멈추기\'가 왜 맨 앞인지 말하게 한다. "증거로 저장해야 하지 않나요?"라는 학생에게 "증거가 필요하면 어른이 정해요. 내가 사진을 저장하면 퍼질 곳이 하나 더 생겨요"라고 말해 준다. 신고·삭제 도움은 학교와 경찰(112)에 알리면 이어질 수 있다고 정리한다.',
          task: '동의 없이 찍힌 사진을 받은 순간부터 할 대처 장면 카드를 시간 차례로 놓아요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(OB('사진을 받은 순간부터 할 대처를 차례대로 놓으세요.', STEPS, { axis: ['받은 순간', '그 뒤'] }),
              OB('사진을 받은 순간부터 할 대처 3장을 차례대로 놓으세요.', STEPS.slice(0, 3), { axis: ['받은 순간', '그 뒤'] })),
            IT(OB('사진 속 친구를 도울 차례를 놓으세요.', [{ id: 'h1', text: '"네 잘못 아니야"라고 말하기' }, { id: 'h2', text: '함께 상담 선생님 찾아가기' }, { id: 'h3', text: '다음 날도 곁에 있어 주기' }], { axis: ['알게 된 날', '그 뒤'] }, [{ id: 'h4', text: '어떻게 찍혔는지 캐묻기' }])),
            IT(PB('대처하며 하지 말아야 할 행동만 골라 담으세요.', '하지 말아야 할 행동', [
              { id: 'n1', text: '사진을 저장해 두기', ok: true }, { id: 'n2', text: '누구인지 다른 사람에게 묻기', ok: true }, { id: 'n3', text: '어른에게 알리기' }]),
              null,
              MB('단계마다 하면 안 되는 행동을 이어 보세요.', [['저장·전달 멈추기', '"나만 볼게" 하고 저장하기'], ['퍼뜨리지 말라고 말하기', '같이 \'ㅋㅋ\' 달기'], ['믿을 어른에게 알리기', '혼자 올린 사람과 싸우기'], ['신고·삭제 도움 받기', '창피하다며 그냥 덮기']], ['선생님께 알리기'], { axis: ['받은 순간', '그 뒤'] }),
              { conclude: '받은 순간 저장·전달을 멈추고, 퍼뜨리지 말라고 말하고, 믿을 어른에게 알려 신고·삭제 도움을 받아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '받은 사진을 \'증거로\' 저장하지 않는 까닭을 한 문장으로 써요.' }] },
        notes: '신고·삭제 도움 경로는 파일 첫머리 \'사람 확인\' 목록에 있다.',
      }),
      M('activity.campaign', {
        title: '사진 공유 약속 캠페인 문구', method: '사진 공유 약속 캠페인 문구 쓰기', tool: 'rubric-writing', minutes: 17,
        levels: { easy: '문구 틀("___ 전에 묻고, ___하지 않아요. 받으면 ___에 알려요")을 채워 쓴다.', base: '틀 없이 캠페인 문구를 쓰고 기준표(동의·유포 금지·도움 경로)로 점검한다.', challenge: '셋째 문항에서 두 가지 문구를 견주어 더 나은 것을 고르고 까닭을 쓴다.' },
        activity: {
          title: '사진 공유 약속 캠페인 문구', tool: 'rubric-writing',
          teacher: '"\'디지털 성범죄 STOP!\'만 보고 무엇을 해야 할지 알 수 있을까요?" 막연한 문구와 \'묻고 찍고, 묻고 올려요\'를 견주어 읽은 뒤 쓰게 한다. 문구에 피해자 탓(\'조심하세요\')이 들어가지 않게 하라고 기준을 하나 더 짚는다. "무섭게 써야 효과가 있다"는 학생에게 할 행동이 보이는 문구가 더 오래 남는다고 말해 준다.',
          task: '\'묻고 찍고, 묻고 올리기\' 같은 사진 공유 약속 캠페인 문구를 쓰고, 동의·유포 금지·도움 경로가 들어갔는지 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '동의를 담은 캠페인 문구 한 줄을 쓰세요.', toolOptions: { topic: '사진을 찍거나 올리기 전 동의를 구하자는 캠페인 문구를 한 줄로 쓰세요.', minChars: 8, maxChars: 80, minSentences: 1, maxSentences: 2, title: '문구 ① 동의' }, target: { selfCheck: ['찍기·올리기 전에 묻자는 말이 있다', '할 행동이 보인다'] } },
              { prompt: '틀을 채워 동의 문구를 쓰세요.', toolOptions: { starter: '___ 전에 묻고, ___ 전에 또 물어요.' } }),
            IT({ prompt: '유포 금지와 도움 경로를 담은 문구를 쓰세요.', toolOptions: { topic: '받은 사진을 퍼뜨리지 말고 알리자는 문구를 한두 줄로 쓰세요.', minChars: 12, maxChars: 120, minSentences: 1, maxSentences: 2, title: '문구 ② 유포 금지·알리기' }, target: { selfCheck: ['저장·전달하지 말자는 말이 있다', '알릴 곳이 들어갔다', '피해자를 탓하는 말이 없다'], mustInclude: [['112', '117', '1388', '선생님', '어른']] } },
              { prompt: '틀을 채워 유포 금지 문구를 쓰세요.', toolOptions: { starter: '받은 사진은 ___하지 않아요. ___에 알려요.' } }),
            IT({ prompt: '두 문구를 이어 캠페인 문구를 완성하세요.', toolOptions: { topic: '동의와 유포 금지, 도움 경로를 모두 담아 사진 공유 약속 캠페인 문구를 완성하세요.', minChars: 25, maxChars: 160, minSentences: 2, maxSentences: 3, title: '캠페인 문구' }, target: { selfCheck: ['동의가 들어갔다', '유포 금지가 들어갔다', '도움 경로가 들어갔다'], mustInclude: [['112', '117', '1388', '선생님', '어른']] } },
              { prompt: '틀을 채워 캠페인 문구를 완성하세요.', toolOptions: { minChars: 20, starter: '___ 전에 묻고, 받은 사진은 ___하지 않아요. ___에 알려요.' } },
              { prompt: '두 문구를 견주어 더 나은 것을 고르고 까닭을 쓰세요.', toolOptions: { topic: '문구 가: "몸조심! 사진 찍히지 않게 조심하세요." / 문구 나: "묻고 찍고, 묻고 올려요. 받은 사진은 멈추고 117에 알려요." 더 나은 문구를 고르고 까닭을 두 문장으로 쓰세요.', minChars: 25, maxChars: 160, minSentences: 2, maxSentences: 3, title: '두 문구 견주기' }, target: { selfCheck: ['더 나은 문구를 골랐다', '피해자 탓 문구를 짚었다', '까닭을 기준표에 비추어 썼다'] } },
              { conclude: '좋은 캠페인 문구는 동의·유포 금지·도움 경로를 담고, 피해자에게 \'조심하라\'고 하지 않아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내가 만든 사진 공유 약속 캠페인 문구를 옮겨 써요.' }] },
      }),

      // ---- 정리 ----
      M('wrap.help', {
        title: '알게 됐을 때 연락할 곳', method: '도움 받을 곳 정리', tool: 'mindmap', minutes: 6,
        levels: { easy: '가지 3개(학교·117·112)에 이럴 때 카드를 잇는다.', base: '가지 4개(1388 더함)에 함정 카드를 걸러 가며 잇는다.', challenge: '연락할 때 말할 내용을 짝짓는다.' },
        wrap: {
          teacher: '"디지털 성범죄를 알게 됐을 때 연락할 곳은 몇 곳이나 있을까요?" 가지를 이은 뒤 지금 위험하면 112, 학교폭력 신고·상담은 117, 말하기 어려운 고민은 1388, 학교에서는 담임·상담 선생님이라고 정리한다. 피해를 입은 친구가 직접 알리지 않아도 본 사람이 알릴 수 있다고 덧붙인다.',
          exitTicket: [
            IT(X('mindmap', SB('연락할 곳 가지에 이럴 때 카드를 이어요.', ['학교', '117', '112', '1388'], [
              { id: 'a1', text: '담임·상담 선생님께 먼저 의논할 때', to: '학교' }, { id: 'b1', text: '학교폭력으로 신고·상담할 때', to: '117' },
              { id: 'c1', text: '지금 협박을 받거나 위험할 때', to: '112' }, { id: 'd1', text: '누구에게도 말하기 어려운 고민일 때', to: '1388' },
              { id: 'z1', text: '사진을 저장해 두고 싶을 때' }], { topic: '알게 됐을 때' }), { difficulty: 0.2 }),
              SB('연락할 곳 세 가지에 이럴 때 카드를 이어요.', ['학교', '117', '112'], [
                { id: 'a1', text: '담임·상담 선생님께 먼저 의논할 때', to: '학교' }, { id: 'b1', text: '학교폭력으로 신고·상담할 때', to: '117' },
                { id: 'c1', text: '지금 협박을 받거나 위험할 때', to: '112' }], { topic: '알게 됐을 때' }),
              MB('연락할 때 말할 내용을 이어요.', [['언제', '사진이 올라온 날과 시각'], ['어디서', '올라온 단톡방·SNS 이름'], ['무엇을', '올라온 것과 퍼진 곳'], ['원하는 도움', '사진 내리기와 친구 보호']], ['사진 속 친구가 무엇을 잘못했는지'], { topic: '말할 내용' })),
            { type: 'choice', prompt: '"피해자가 조심했어야 한다"는 말에 대한 생각으로 가장 알맞은 것은?', options: ['맞다, 조심하면 막을 수 있다', '잘못은 동의 없이 찍고 퍼뜨린 사람에게 있다', '둘 다 잘못이다'], answer: 1, difficulty: 0.15, explain: '피해자는 잘못이 없어요.' },
            { type: 'short', prompt: '디지털 성범죄를 알게 됐을 때 내가 먼저 연락할 곳과 그 까닭을 써요.' },
          ],
        },
        worksheet: {
          title: '알게 됐을 때 연락할 곳',
          items: [
            { type: 'table', prompt: '연락할 곳과 이럴 때를 써요.', columns: ['곳', '이럴 때'], cells: [['112', ''], ['117', ''], ['1388', '']], answer: '지금 위험할 때, 학교폭력 신고·상담, 말하기 어려운 고민' },
            { type: 'short', prompt: '본 사람도 알릴 수 있는 까닭을 한 문장으로 써요.' },
          ],
        },
      }),
      M('wrap.phone', {
        title: '내 휴대폰 공유 습관 점검', method: '내 휴대폰 공유 습관 점검', tool: 'kitchen', minutes: 6,
        levels: { easy: '항목 3개(알맞은 것 2개·함정 1개)에서 지킬 습관에 표시한다.', base: '항목 5개(알맞은 것 3개·함정 2개)에서 표시한다.', challenge: '친구에게 권할 항목 하나를 고른다(둘째 출구 질문).' },
        wrap: {
          teacher: '"내 휴대전화 앨범과 단톡방에서 이번 주 바꿀 습관은 무엇인가요?" 점검표에 \'받은 사진은 일단 저장\' 같은 함정이 섞여 있다고 미리 말한다. 함정을 고른 학생에게 오늘 갈림길에서 저장한 길의 결과를 떠올리게 한다.',
          exitTicket: [
            IT(X('kitchen', CL('지킬 공유 습관에만 표시해요.', '나의 공유 습관', [
              { id: 'k1', text: '찍기 전·올리기 전에 묻기', ok: true }, { id: 'k2', text: '받은 친구 사진 저장하지 않기', ok: true }, { id: 'k3', text: '지워 달라면 바로 지우기', ok: true },
              { id: 'k4', text: '받은 사진은 일단 저장하기' }, { id: 'k5', text: '친한 친구에게만은 보내도 됨' }]), { difficulty: 0.15 }),
              CL('지킬 공유 습관에만 표시해요(3개).', '나의 공유 습관', [
                { id: 'k1', text: '찍기 전·올리기 전에 묻기', ok: true }, { id: 'k2', text: '받은 친구 사진 저장하지 않기', ok: true }, { id: 'k4', text: '받은 사진은 일단 저장하기' }])),
            { type: 'choice', prompt: '친구에게 가장 먼저 권할 습관은?', options: ['찍기 전·올리기 전에 묻기', '받은 사진 모아 두기', '이미 퍼진 사진은 공유해도 됨'], answer: 0, difficulty: 0.15, explain: '동의를 묻는 습관이 모든 것의 시작이에요.' },
            { type: 'mood', prompt: '오늘 수업을 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '나의 공유 습관',
          items: [
            { type: 'check', prompt: '지킬 공유 습관에 표시해요.', options: ['찍기 전·올리기 전에 묻기', '받은 사진 저장하지 않기', '지워 달라면 바로 지우기'] },
            { type: 'short', prompt: '친구에게 권할 공유 습관 하나와 그 까닭을 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 8학년 · 달콤한 제안의 위험, 성매매로 이어지는 유인 알아차리기 (saf-violence.m.lure-risk) ====
  {
    const M = MK('lure-risk', [8]);
    const OFFER2 = ['대가 없는 호의', '대가를 노리는 제안'];
    const OFFERS = [
      { id: 'o1', text: '"숙제 모르면 같이 풀자"(같은 반 친구)', to: '대가 없는 호의' }, { id: 'o2', text: '"생일 축하해!"(오랜 친구의 기프티콘)', to: '대가 없는 호의' },
      { id: 'o3', text: '"기프티콘 줄게, 대신 사진 한 장만"', to: '대가를 노리는 제안' }, { id: 'o4', text: '"용돈 줄게, 우리 둘만 비밀로 하자"', to: '대가를 노리는 제안' },
      { id: 'o5', text: '"게임 아이템 줄 테니 따로 만나자"', to: '대가를 노리는 제안' }, { id: 'o6', text: '"교실에 두고 간 필통 여기 있어"', to: '대가 없는 호의' },
    ];
    const STAGE = [{ id: 's1', text: '칭찬하며 친해지기' }, { id: 's2', text: '"우리 둘만 비밀" 요구' }, { id: 's3', text: '선물·용돈 주기' }, { id: 's4', text: '개인 정보·사진·만남 요구' }];
    const D1 = { text: '게임에서 몇 주째 같이 한 \'별빛\'이 "너 진짜 잘한다, 아이템 선물 보낼게. 대신 연락처 알려 줘"라고 한다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'give', text: '선물이 고마워 연락처를 알려 준다', result: '별빛이 개인 메신저로 매일 연락한다.', impact: [{ who: '나', text: '게임 밖으로 대화가 옮겨진다', tone: -1 }], why: '선물과 함께 연락처를 묻는 것은 유인의 신호예요.', end: '대화가 개인 메신저로 옮겨졌어요.',
        next: { text: '별빛이 "부모님께는 말하지 마, 우리 사이가 이상해 보일 거야"라고 한다.', ask: '이제 어떻게 할까?', choices: [
          { id: 'keep', text: '비밀을 지키기로 한다', result: '별빛이 사진과 만남을 요구하기 시작한다.', impact: [{ who: '나', text: '혼자 거절하기 어려워진다', tone: -1 }], why: '비밀을 요구하면 멈추고 알려야 할 신호예요.', end: '요구가 점점 커졌어요.',
            next: { text: '별빛이 "선물 받았잖아, 이번엔 네 차례야"라며 만나자고 한다.', choices: [
              { id: 'go', text: '받은 게 있어 미안해 만나러 간다', result: '혼자 모르는 사람을 만나는 위험에 놓인다.', impact: [{ who: '나', text: '위험해진다', tone: -1 }], why: '선물을 받았어도 갚을 책임은 없어요. 잘못은 대가를 요구한 어른에게 있어요.' },
              { id: 'tellnow', text: '대화를 저장하고 보호자와 함께 112에 알린다', result: '어른들이 함께 대처한다.', impact: [{ who: '나', text: '보호를 받는다', tone: 1 }], why: '알린 것은 잘했어요. 비밀을 요구할 때 알렸다면 더 일찍 멈췄을 거예요.' }] } },
          { id: 'tellp', text: '대화를 저장하고 보호자에게 보여 준다', result: '보호자와 함께 차단하고 신고 방법을 찾는다.', impact: [{ who: '나', text: '혼자가 아니다', tone: 1 }], end: '비밀 요구에서 멈추고 알렸어요.',
            next: { text: '별빛이 다른 계정으로 "왜 차단했어?"라고 다시 보낸다.', choices: [
              { id: 'block2', text: '답하지 않고 다시 차단한 뒤 보호자·112에 알린다', result: '어른들이 계속 함께 대처한다.', impact: [{ who: '나', text: '안전해진다', tone: 1 }] },
              { id: 'reply', text: '"미안해"라고 답한다', result: '별빛이 다시 대화를 이어 가려 한다.', impact: [{ who: '나', text: '다시 끌려 들어간다', tone: -1 }], why: '미안해할 일이 아니에요. 답하지 않고 알려요.' }] } }] } },
      { id: 'refuse', text: '"연락처는 안 알려 줘, 선물도 괜찮아"라고 한다', result: '별빛이 "섭섭하네"라며 계속 조른다.', impact: [{ who: '나', text: '개인 정보를 지킨다', tone: 1 }], end: '연락처를 지켰어요.',
        next: { text: '별빛이 "다른 애들은 다 알려 줬어, 너만 이상해"라고 한다.', ask: '어떻게 할까?', choices: [
          { id: 'block', text: '대화를 저장하고 차단·신고한 뒤 보호자에게 알린다', result: '보호자와 함께 게임 신고 기능을 쓴다.', impact: [{ who: '나', text: '안전해진다', tone: 1 }], end: '차단하고 어른에게 알렸어요.',
            next: { text: '같은 게임을 하는 친구도 별빛과 연락하고 있다고 한다.', choices: [
              { id: 'warn', text: '친구에게 신호를 알려 주고 어른에게 함께 말하자고 한다', result: '친구도 대화를 멈추고 보호자에게 알린다.', impact: [{ who: '친구', text: '함께 보호받는다', tone: 1 }] },
              { id: 'silent', text: '친구 일이니 모른 척한다', result: '친구는 혼자 요구를 받는다.', impact: [{ who: '친구', text: '위험에 남는다', tone: -1 }], why: '친구에게도 알리면 둘 다 지킬 수 있어요.' }] } },
          { id: 'giveup', text: '이상해 보일까 봐 결국 알려 준다', result: '별빛의 연락이 시작된다.', impact: [{ who: '나', text: '위험에 가까워진다', tone: -1 }], why: '\'너만 이상해\'는 거절을 무너뜨리려는 말이에요.' }] } },
      { id: 'askp', text: '바로 보호자에게 이 대화를 보여 준다', result: '보호자와 함께 차단·신고한다.', impact: [{ who: '나', text: '바로 보호받는다', tone: 1 }], ending: '처음부터 어른과 함께 대처했어요.' }] };
    const R1 = [{ id: 'r1', text: '선물과 함께 개인 정보·비밀을 요구하면 유인의 신호다' }, { id: 'r2', text: '청소년은 보호받아야 할 대상이고 잘못은 유인한 어른에게 있다' },
      { id: 'r3', text: '내가 먼저 연락했으면 내 책임이다', why: '누가 먼저 연락했든 대가를 노린 쪽의 잘못이에요.' }, { id: 'r4', text: '직접 만나기 전에는 위험하지 않다', why: '사진·개인 정보 요구부터 이미 위험이에요.' }];
    const R1C = { reasons: [{ id: 'r5', text: '어른에게 알린 길은 요구가 커지기 전에 멈췄다' }, { id: 'r6', text: '혼자 해결하려던 길은 요구가 점점 커졌다' }], ok: ['r5', 'r6'] };

    ALL.push(
      // ---- 도입 ----
      M('intro.chat', {
        title: '가상 SNS 대화의 이상한 칸', method: '가상 SNS 대화에서 이상한 칸 찾기', tool: 'story', minutes: 6,
        levels: { easy: '교사가 대화 칸 3개만 보이며 함께 고른다.', base: '시연 판의 대화 칸 5개에서 불편한 느낌이 드는 칸을 고른다.', challenge: '그 칸이 왜 신호인지(비밀·대가·만남) 근거를 짝과 말한다.' },
        intro: {
          teacher: '"칭찬, 선물, 비밀 — 이 대화는 어느 칸부터 불편해졌을까요?" 가상 SNS 대화 칸을 넘겨 보이고 시연 단추로 \'용돈 줄게, 대신 우리 둘만 비밀\' 칸이 바구니에 담기는 모습을 보인다. "선물 주는 사람은 좋은 사람"이라는 말이 나오면 "왜 그 사람은 비밀로 하자고 할까요?"라고 되묻는다. 오늘은 달콤한 제안이 대가 요구로 바뀌는 신호를 알아차리고, 청소년은 보호받아야 할 대상이라는 것을 다룬다고 밝힌다.',
          student: '가상 SNS 대화 칸을 보고 불편한 느낌이 드는 칸을 골라요. 그 칸이 왜 신호인지 생각해요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '불편한 칸', title: '가상 SNS 대화', cards: [
            { id: 'c1', text: '"사진 분위기 좋다!"', motif: 'star' }, { id: 'c2', text: '"요즘 힘들어 보여, 내가 들어 줄게"', motif: 'leaf' },
            { id: 'c3', text: '"용돈 줄게, 대신 우리 둘만 비밀"', motif: 'moon' }, { id: 'c4', text: '"사진 한 장만 더 보내 줘"', motif: 'storm' }, { id: 'c5', text: '"주말에 둘이 만나자"', motif: 'house' }], shuffle: false }, sequence: [{ pick: ['c3'] }] },
          art: { draw: 'a paper-cut smartphone with chat bubbles turning from sweet compliments to a gift box with a lock, a teenager pausing with a thoughtful face', banner: '어느 칸부터 불편할까?', extra: [{ motif: 'moon', x: 300, y: 96 }] },
        },
        notes: '대화는 가상이고 구체적 내용을 묘사하지 않는다. 학생에게 받은 메시지를 묻거나 보여 달라고 하지 않는다. ' + SAFE_NOTE,
      }),
      M('intro.offer', {
        title: '호의와 대가 요구 가르기', method: '제안 카드를 호의와 대가 요구로 가르기', tool: 'economy', minutes: 6,
        levels: { easy: '교사가 제안 카드 4장만 읽어 주며 함께 가른다.', base: '시연 판의 제안 카드 6장을 가른다.', challenge: '겉으로는 호의처럼 보이는 제안 하나를 골라 까닭을 말한다.' },
        intro: {
          teacher: '"기프티콘을 주는 사람이 모두 같은 마음일까요?" 시연 단추로 제안 카드가 \'대가 없는 호의\'와 \'대가를 노리는 제안\'으로 갈리는 모습을 보인다. 가르는 기준은 \'대신 …\', \'비밀로\', \'만나자\' 같은 조건이 붙는지라고 짚는다. "받기만 하고 안 해 주면 그만"이라는 말이 나오면 "받은 뒤 \'이번엔 네 차례\'라고 하면 거절하기가 쉬울까요?"라고 되묻는다.',
          student: '제안 카드를 \'대가 없는 호의\'와 \'대가를 노리는 제안\'으로 가르고, 겉으로는 호의처럼 보이는 제안을 찾아요.',
          demo: { tool: 'economy', options: { mode: 'sort', slots: OFFER2, cards: OFFERS.map((c) => ({ id: c.id, text: c.text })) }, sequence: [{ sort: { '대가 없는 호의': ['o1', 'o2', 'o6'], '대가를 노리는 제안': ['o3', 'o4', 'o5'] } }] },
          art: { draw: 'a paper-cut gift box with a hidden string attached, two paper baskets labeled with a heart and a question mark', banner: '선물에 조건이 붙어 있나?', extra: [{ motif: 'flower', x: 300, y: 96 }] },
        },
      }),

      // ---- 활동 ----
      M('activity.stages', {
        title: '유인의 단계', method: '유인이 진행되는 단계 놓기', tool: 'timeline', minutes: 16,
        levels: { easy: '단계 카드 3장을 시간 띠에 차례로 놓는다.', base: '단계 카드 4장을 차례로 놓고, 멈출 지점을 고른다.', challenge: '셋째 문항에서 가장 이른 멈춤 지점과 그 까닭을 고른다(늦은 지점이 함정으로 섞인다).' },
        activity: {
          title: '유인의 단계', tool: 'timeline',
          teacher: '"이 단계들 가운데 언제 멈추면 가장 쉬울까요?" 카드를 차례로 놓은 뒤 \'비밀 요구\'에서 멈추는 것과 \'만남 요구\'에서 멈추는 것을 견주게 한다. "직접 만나기 전에는 위험하지 않다"는 학생에게 "사진이나 주소를 보낸 뒤라면 거절이 쉬울까요?"라고 되묻는다. 어느 단계에서 알아차렸든 알리면 도움을 받을 수 있고, 잘못은 유인한 쪽에 있다고 짚는다.',
          task: '온라인 유인이 진행되는 단계 카드를 시간 차례로 놓고, 멈출 지점을 표시해요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(OB('온라인 유인이 진행되는 단계를 차례대로 놓으세요.', STAGE, { axis: ['처음', '나중'] }),
              OB('유인 단계 3장을 차례대로 놓으세요.', [STAGE[0], STAGE[1], STAGE[3]], { axis: ['처음', '나중'] })),
            IT(PB('멈추고 어른에게 알려야 할 신호만 골라 담으세요.', '멈춤 신호', [
              { id: 'p1', text: '"우리 둘만 비밀이야"', ok: true }, { id: 'p2', text: '"선물 줄 테니 사진 보내"', ok: true }, { id: 'p3', text: '"주소 알려 주면 보내 줄게"', ok: true },
              { id: 'p4', text: '"오늘 게임 재밌었어"' }])),
            IT(PB('멈출 수 있는 지점 가운데 이른 것만 골라 담으세요.', '이른 멈춤', [
              { id: 'q1', text: '비밀을 요구받은 순간', ok: true }, { id: 'q2', text: '조건 붙은 선물을 받기 전', ok: true }, { id: 'q3', text: '만나러 가는 길' }]),
              null,
              PB('가장 이른 멈춤 지점과 그 까닭을 함께 골라 담으세요(늦은 지점이 섞였어요).', '가장 이른 멈춤과 까닭', [
                { id: 'q1', text: '비밀을 요구받은 순간', ok: true }, { id: 'q4', text: '까닭: 비밀은 어른의 도움을 막으려는 신호다', ok: true },
                { id: 'q3', text: '만나러 가는 길' }, { id: 'q5', text: '사진을 보낸 뒤' }, { id: 'q6', text: '까닭: 선물이 비싸지 않아서' }]),
              { conclude: '유인은 칭찬 → 비밀 → 선물 → 개인 정보·만남 요구로 이어져요. 비밀을 요구받는 순간이 가장 이른 멈춤 지점이고, 어느 단계든 알리면 도움을 받아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '\'우리 둘만 비밀\'이 유인의 신호인 까닭을 한 문장으로 써요.' }] },
      }),
      M('activity.choice', {
        title: '게임 친구의 선물 제안', method: '게임 친구의 선물 제안 갈림길', tool: 'dilemma', minutes: 17,
        levels: { easy: '갈림 2번까지 가고, 고를 때마다 나에게 생기는 영향이 바로 보인다.', base: '갈림 3번까지 가고, 영향 표시는 맞힌 뒤에만 보인다. 끝에서 근거를 고른다.', challenge: '갈림 3번 뒤 어른에게 알린 길과 혼자 해결한 길을 견주는 근거 카드까지 고른다.' },
        activity: {
          title: '게임 친구의 선물 제안', tool: 'dilemma',
          teacher: '"몇 주를 같이 게임한 \'별빛\'은 친구일까요, 모르는 사람일까요?" 학생마다 한 길을 끝까지 가 본 뒤 알린 길과 혼자 해결한 길을 견주게 한다. "내가 먼저 연락했으면 내 책임"이라는 학생에게 "청소년에게 대가를 요구하는 어른이 있다면, 잘못은 누구에게 있을까요?"라고 되묻는다. 선물을 받았어도 갚을 책임은 없고, 언제든 거절하고 알릴 수 있다고 짚는다.',
          task: '게임에서 만난 사람이 선물을 주며 연락처를 묻는 상황에서 길을 골라 결과를 따라가고, 끝에서 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL({ easy: '게임 친구가 선물을 주며 연락처를 물어요. 두 번 골라 결과를 보고 근거를 고르세요.', base: '게임 친구가 선물을 주며 연락처를 물어요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 간 뒤, 알린 길과 혼자 해결한 길을 견주는 근거까지 고르세요.' },
              '게임 친구의 선물', D1, [['refuse', 'block', 'warn'], ['give', 'tellp', 'block2'], ['askp']], R1, ['r1', 'r2'], R1C),
            IT({ prompt: '"받았으니 갚아야지"라는 말을 들은 장면을 따라가세요.', toolOptions: { title: '"갚아야지"', scene: { text: '이미 아이템을 받은 뒤 상대가 "받았으니 너도 해 줘야지"라고 한다.', ask: '어떻게 할까?', motif: 'house', choices: [
              { id: 'owe', text: '받았으니 하라는 대로 한다', result: '요구가 더 커진다.', impact: [{ who: '나', text: '빠져나오기 어려워진다', tone: -1 }], why: '대가를 노린 선물은 갚을 책임이 없어요.' },
              { id: 'tell', text: '거절하고 대화를 저장해 보호자에게 알린다', result: '보호자와 함께 차단·신고한다.', impact: [{ who: '나', text: '보호받는다', tone: 1 }], ending: '갚을 책임이 없다는 걸 알고 알렸어요.' }] }, reasons: [{ id: 'q1', text: '조건을 숨긴 선물은 갚을 책임이 없다' }, { id: 'q2', text: '받았으면 갚는 게 예의다', why: '대가를 노린 제안에는 예의가 아니라 보호가 먼저예요.' }], compare: true },
              target: { path: [['tell']], reasons: ['q1'] } }),
            IT({ prompt: '같은 게임을 하는 친구가 비슷한 제안을 받았다고 할 때를 따라가세요.', toolOptions: { title: '친구가 받은 제안', scene: { text: '친구가 "게임에서 만난 사람이 용돈 줄 테니 만나자는데, 비밀이래"라고 털어놓는다.', ask: '어떻게 할까?', motif: 'house', choices: [
              { id: 'keepsecret', text: '친구 비밀이니 지켜 준다', result: '친구 혼자 위험한 만남을 고민한다.', impact: [{ who: '친구', text: '혼자 위험에 놓인다', tone: -1 }], why: '안전이 걸린 비밀은 지키지 않아요.' },
              { id: 'together', text: '"그건 위험 신호야. 같이 보호자께 말하자"', result: '친구가 보호자와 함께 112에 알린다.', impact: [{ who: '친구', text: '보호받는다', tone: 1 }], ending: '친구와 함께 어른에게 알렸어요.' }] }, reasons: [{ id: 'p1', text: '안전이 걸린 일은 비밀보다 먼저다' }, { id: 'p2', text: '친구가 알아서 할 일이다', why: '혼자 두면 위험해질 수 있어요.' }], compare: true },
              target: { path: [['together']], reasons: ['p1'] }, conclude: '대가를 노린 제안은 거절하고, 대화를 저장해 보호자·112·1388에 알려요. 청소년은 보호받아야 할 대상이고 잘못은 유인한 쪽에 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '"선물 받았으니 너도 해 줘야지"라는 말을 들었을 때 알맞은 생각은?', options: ['받았으니 갚아야 한다', '대가를 노린 선물은 갚을 책임이 없으니 거절하고 알린다', '아무에게도 말하지 않는다'], answer: '대가를 노린 선물은 갚을 책임이 없으니 거절하고 알린다' }] },
        notes: SAFE_NOTE,
      }),
      M('activity.refuse', {
        title: '거절과 차단', method: '거절·차단 문장 고르기', tool: 'wordcards', minutes: 16,
        levels: { easy: '상황 카드 3장에 거절하는 말·차단 행동 카드를 짝 짓고, 놓으면 바로 맞는지 알려 준다.', base: '상황 카드 5장에 짝 짓는다(함정 카드 1장).', challenge: '셋째 문항에서 애매한 거절 문장을 분명한 문장으로 바꾼 카드만 골라 담는다.' },
        activity: {
          title: '거절과 차단', tool: 'wordcards',
          teacher: '"거절은 길게 설명해야 할까요?" 짝짓기를 마친 뒤 거절 문장을 소리 내어 짧게 읽게 한다. "차단하면 상대가 화낼 것 같다"는 학생에게 "상대의 기분보다 내 안전이 먼저예요. 차단과 신고는 내 권리예요"라고 말해 준다. 거절한 뒤에도 대화를 저장해 어른에게 알리는 것이 마지막 단계라고 짚는다.',
          task: '유인 상황 카드마다 분명하게 거절하는 말, 차단·신고 행동 카드를 짝 지어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(MB('상황마다 알맞은 거절 말·행동 카드를 이어 보세요.', [['"사진 한 장만 보내 줘"', '"싫어. 안 보내"'], ['"우리 둘만 비밀이야"', '"비밀은 안 해. 보호자께 말할 거야"'], ['"주소 알려 주면 선물 보낼게"', '"주소는 안 알려 줘"'], ['다른 계정으로 계속 연락이 온다', '답하지 않고 저장 후 차단·신고'], ['"안 만나 주면 사진 퍼뜨린다"', '대화를 저장해 바로 112에 알리기']], ['"음… 생각해 볼게"']),
              MB('상황 세 개에 알맞은 거절 말·행동 카드를 이어 보세요.', [['"사진 한 장만 보내 줘"', '"싫어. 안 보내"'], ['"우리 둘만 비밀이야"', '"비밀은 안 해. 보호자께 말할 거야"'], ['"주소 알려 주면 선물 보낼게"', '"주소는 안 알려 줘"']], [])),
            IT(SB('행동 카드를 \'나를 지키는 행동\'과 \'위험을 키우는 행동\'으로 나누세요.', ['나를 지키는 행동', '위험을 키우는 행동'], [
              { id: 'v1', text: '대화를 저장해 둔다', to: '나를 지키는 행동' }, { id: 'v2', text: '차단하고 신고한다', to: '나를 지키는 행동' }, { id: 'v3', text: '보호자에게 보여 준다', to: '나를 지키는 행동' },
              { id: 'v4', text: '창피해서 대화를 지운다', to: '위험을 키우는 행동' }, { id: 'v5', text: '혼자 만나서 따진다', to: '위험을 키우는 행동' }])),
            IT(PB('분명한 거절 문장만 골라 담으세요.', '분명한 거절', [
              { id: 'p1', text: '"싫어. 다시 연락하지 마"', ok: true }, { id: 'p2', text: '"안 만나. 보호자께 말할 거야"', ok: true }, { id: 'p3', text: '"나중에… 아마도?"' }, { id: 'p4', text: '"미안, 바빠서 ㅎㅎ"' }]),
              null,
              MB('애매한 거절 문장을 분명한 문장으로 바꾼 카드를 이어 보세요.', [['"음… 생각해 볼게"', '"싫어. 안 해"'], ['"미안, 바빠서 ㅎㅎ"', '"만나지 않을 거야. 연락하지 마"'], ['"부모님이 알면 혼나서…"', '"이 대화는 보호자께 보여 줄 거야"']], ['"알았어, 한 번만이야"']),
              { conclude: '거절은 짧고 분명하게, 그다음 대화를 저장하고 차단·신고한 뒤 어른에게 알려요. 거절과 차단은 내 권리예요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"사진 한 장만 보내 줘"라는 말에 쓸 분명한 거절 문장을 써요.' }] },
      }),
      M('activity.warn', {
        title: '친구에게 보내는 안전 안내', method: '친구에게 보내는 안전 안내 메시지 쓰기', tool: 'rubric-writing', minutes: 17,
        levels: { easy: '틀("___ 같은 말이 오면 신호야. ___ 하고 ___에 알려")을 채워 쓴다.', base: '틀 없이 신호·행동·연락처를 담아 쓰고 기준표로 점검한다.', challenge: '셋째 문항에서 겁주지 않고 알리는 표현으로 다듬는다.' },
        activity: {
          title: '친구에게 보내는 안전 안내', tool: 'rubric-writing',
          teacher: '"\'온라인 친구 조심해, 큰일 나\'라는 메시지를 받으면 무엇을 해야 할지 알 수 있을까요?" 막연한 경고와 신호·행동·연락처가 든 메시지를 견주어 읽은 뒤 쓰게 한다. "무섭게 써야 친구가 조심한다"는 학생에게 "겁을 먹은 친구는 오히려 말하지 못하고 숨길 수도 있어요"라고 말해 준다. 실제 친구 이름은 쓰지 않는다.',
          task: '온라인 유인 신호와 도움 경로를 알리는 메시지를 가상 친구에게 쓰고, 신호·행동·연락처가 들어갔는지 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '알아차릴 신호를 한두 문장으로 쓰세요.', toolOptions: { topic: '가상 친구에게 온라인 유인의 신호(비밀·대가·만남 요구 등)를 한두 문장으로 알려 주세요.', minChars: 15, maxChars: 120, minSentences: 1, maxSentences: 2, title: '안내 ① 신호' }, target: { selfCheck: ['신호를 구체적으로 썼다', '친구를 탓하지 않았다'] } },
              { prompt: '틀을 채워 신호를 쓰세요.', toolOptions: { starter: '___ 같은 말이 오면 위험 신호야.' } }),
            IT({ prompt: '할 행동과 연락처를 한두 문장으로 쓰세요.', toolOptions: { topic: '그런 메시지를 받으면 할 행동과 연락할 곳을 한두 문장으로 쓰세요.', minChars: 15, maxChars: 120, minSentences: 1, maxSentences: 2, title: '안내 ② 행동·연락처' }, target: { selfCheck: ['할 행동을 썼다', '연락할 곳을 썼다'], mustInclude: [['112', '1388', '보호자', '선생님']] } },
              { prompt: '틀을 채워 행동과 연락처를 쓰세요.', toolOptions: { starter: '그러면 ___ 하고, ___에 알려.' } }),
            IT({ prompt: '앞의 글을 이어 친구에게 보낼 안내 메시지를 완성하세요.', toolOptions: { topic: '신호·행동·연락처를 이어 가상 친구에게 보낼 안전 안내 메시지를 세 문장으로 완성하세요.', minChars: 40, maxChars: 220, minSentences: 3, maxSentences: 4, title: '안전 안내 메시지' }, target: { selfCheck: ['신호가 들어갔다', '행동이 들어갔다', '연락처가 들어갔다'], mustInclude: [['112', '1388', '보호자', '선생님']] } },
              { prompt: '틀을 채워 안내 메시지를 완성하세요.', toolOptions: { minChars: 30, starter: '___ 같은 말이 오면 신호야. 그러면 ___ 하고, ___에 알려. 네 잘못이 아니야.' } },
              { prompt: '겁주지 않고 알리는 표현으로 메시지를 다듬어 쓰세요.', toolOptions: { maxSentences: 5 }, target: { selfCheck: ['신호가 들어갔다', '행동이 들어갔다', '연락처가 들어갔다', '겁주는 말 대신 안심시키는 말을 썼다'], mustInclude: [['112', '1388', '보호자', '선생님']] } },
              { conclude: '좋은 안전 안내는 신호·행동·연락처를 담고, 겁주기보다 \'언제든 말해도 된다\'는 안심을 줘요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '친구에게 보낼 안전 안내 메시지를 옮겨 써요(신호·행동·연락처).' }] },
      }),

      // ---- 정리 ----
      M('wrap.feel', {
        title: '불편한 마음 신호', method: '불편한 마음 신호 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '마음 카드 4장에서 이상한 제안을 받은 인물의 마음을 고른다.', base: '마음 카드 8장에서 고른다.', challenge: '그 마음을 믿어야 하는 까닭을 고른다(둘째 출구 질문).' },
        wrap: {
          teacher: '"선물을 받았는데 왜 마음이 편하지 않을까요?" 마음 카드를 고른 뒤 \'찜찜함\'·\'걱정\' 같은 마음이 바로 신호라고 짚는다. "기분 탓"이라는 말에는 "불편한 마음은 위험을 먼저 알아차린 내 몸의 알림일 수 있어요"라고 말해 준다.',
          exitTicket: [
            IT(X('emotion', { prompt: '이상한 제안을 받은 가상 인물의 마음을 골라요.', toolOptions: { mode: 'match', slots: [{ id: 's1', label: '"용돈 줄게, 대신 비밀로 해"라는 메시지를 받은 서아' }], cards: ['걱정', '불안', '무서움', '신남', '편안함', '고마움', '뿌듯함', '놀람'] }, target: { match: { s1: ['걱정', '불안', '무서움', '놀람'] } } }, { difficulty: 0.15 }),
              { prompt: '마음 카드 4장에서 서아의 마음을 골라요.', toolOptions: { cards: ['걱정', '신남', '편안함', '뿌듯함'] }, target: { match: { s1: ['걱정'] } } }),
            { type: 'choice', prompt: '불편한 마음이 들 때 그 마음을 믿어야 하는 까닭으로 가장 알맞은 것은?', options: ['기분은 금방 바뀌니까', '불편함이 위험을 먼저 알려 주는 신호일 수 있어서', '선물을 거절하면 안 되니까'], answer: 1, difficulty: 0.2, explain: '불편한 마음은 멈추고 알리라는 신호예요.' },
            { type: 'short', prompt: '불편한 제안을 받았을 때 내가 먼저 연락할 곳을 써요.' },
          ],
        },
        worksheet: {
          title: '불편한 마음 신호',
          items: [
            { type: 'short', prompt: '이상한 제안을 받은 서아의 마음을 한 문장으로 써요.' },
            { type: 'check', prompt: '유인의 신호에 표시해요.', options: ['우리 둘만 비밀', '선물 대신 사진 요구', '만나자는 요구'] },
          ],
        },
      }),
      M('wrap.privacy', {
        title: '온라인 안전 설정 점검', method: '온라인 안전 설정 점검', tool: 'kitchen', minutes: 6,
        levels: { easy: '설정 항목 3개(알맞은 것 2개·함정 1개)에서 해 둘 것에 표시한다.', base: '설정 항목 5개(알맞은 것 3개·함정 2개)에서 표시한다.', challenge: '친구에게 권할 설정 하나를 고른다(둘째 출구 질문).' },
        wrap: {
          teacher: '"오늘 집에 가서 휴대전화에서 바꿀 설정 하나는 무엇인가요?" 점검표에 \'친구 신청은 모두 받기\' 같은 함정이 섞여 있다고 미리 말한다. 설정을 바꾸기 어려우면 보호자와 함께 하라고 권한다.',
          exitTicket: [
            IT(X('kitchen', CL('해 둘 안전 설정에만 표시해요.', '온라인 안전 설정', [
              { id: 'k1', text: '계정 비공개로 하기', ok: true }, { id: 'k2', text: '모르는 사람 메시지 막기', ok: true }, { id: 'k3', text: '프로필에 학교·사는 곳 쓰지 않기', ok: true },
              { id: 'k4', text: '친구 신청은 모두 받기' }, { id: 'k5', text: '위치 공유 늘 켜 두기' }]), { difficulty: 0.15 }),
              CL('해 둘 안전 설정에만 표시해요(3개).', '온라인 안전 설정', [
                { id: 'k1', text: '계정 비공개로 하기', ok: true }, { id: 'k2', text: '모르는 사람 메시지 막기', ok: true }, { id: 'k4', text: '친구 신청은 모두 받기' }])),
            { type: 'choice', prompt: '친구에게 가장 먼저 권할 설정은?', options: ['모르는 사람 메시지 막기', '위치 공유 늘 켜기', '친구 신청 모두 받기'], answer: 0, difficulty: 0.15, explain: '모르는 사람의 접근을 먼저 막아요.' },
            { type: 'mood', prompt: '오늘 수업을 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '온라인 안전 설정',
          items: [
            { type: 'check', prompt: '해 둘 설정에 표시해요.', options: ['계정 비공개', '모르는 사람 메시지 막기', '프로필에 학교 쓰지 않기'] },
            { type: 'blank', prompt: '빈칸에 알맞은 번호를 써요.', text: '지금 위협을 받으면 ___에 바로 알려요.', answer: '112' },
          ],
        },
      }),
    );
  }

  // ==== 8학년 · 친구의 위기 신호를 알아차리고 어른에게 잇기 (saf-violence.m.life-signal) ====
  // 자살예방: 방법·도구·장소를 말하거나 묘사하지 않는다. 신호는 말·행동·감정 변화로만 쓰고, 행동은 '살피기·듣기·어른에게 잇기'로만 이끈다.
  {
    const M = MK('life-signal', [8]);
    const SIG2 = ['잠깐의 기분', '관심이 필요한 신호'];
    const SIGS = [
      { id: 'o1', text: '시험을 망쳐 하루 속상해한다', to: '잠깐의 기분' }, { id: 'o2', text: '피곤한 날 말수가 적다', to: '잠깐의 기분' }, { id: 'o3', text: '응원하는 팀이 져서 짜증 낸다', to: '잠깐의 기분' },
      { id: 'h1', text: '"다 그만두고 싶다"는 말을 자주 한다', to: '관심이 필요한 신호' }, { id: 'h2', text: '아끼던 물건을 친구들에게 나눠 준다', to: '관심이 필요한 신호' },
      { id: 'h3', text: '좋아하던 활동을 몇 주째 하지 않는다', to: '관심이 필요한 신호' }, { id: 'h4', text: '"내가 없으면 다들 편할 거야"라고 한다', to: '관심이 필요한 신호' },
      { id: 'h5', text: '친구들과 연락을 갑자기 끊는다', to: '관심이 필요한 신호' },
    ];
    const CONNECT = ['살피며 말 걸기', '판단 없이 듣기', '믿을 어른에게 알리기'];
    const D1 = { text: '하윤이 "요즘 다 의미 없어. 아무한테도 말하지 마, 약속해"라고 메시지를 보냈다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'promise', text: '"응, 약속할게"라고 하고 아무에게도 말하지 않는다', result: '하윤은 혼자 힘든 마음을 계속 안고 있다.', impact: [{ who: '하윤', text: '도움을 받지 못한다', tone: -1 }], why: '생명과 관련될 수 있는 일은 비밀로 하지 않아요.', end: '비밀을 지키느라 아무도 몰랐어요.',
        next: { text: '며칠 뒤 하윤이 학교에 늦게 오고 말을 거의 하지 않는다.', ask: '이제 어떻게 할까?', choices: [
          { id: 'wait', text: '약속했으니 더 기다린다', result: '하윤의 신호가 더 늘어난다.', impact: [{ who: '하윤', text: '혼자 견딘다', tone: -1 }], why: '신호가 늘면 기다리지 말고 어른에게 알려요.', end: '신호가 더 늘었어요.',
            next: { text: '하윤이 "고마웠어, 그동안"이라는 메시지를 보냈다.', choices: [
              { id: 'stillwait', text: '그래도 비밀을 지킨다', result: '하윤 곁에 어른이 아무도 없다.', impact: [{ who: '하윤', text: '위험이 커진다', tone: -1 }], why: '이런 말은 바로 어른에게 알려야 할 신호예요.' },
              { id: 'now', text: '바로 상담 선생님이나 곁의 어른에게 알린다', result: '어른이 곧바로 하윤을 살핀다.', impact: [{ who: '하윤', text: '보호를 받는다', tone: 1 }], why: '알린 것은 잘했어요. 처음 비밀을 부탁받았을 때 알렸다면 더 좋았어요.' }] } },
          { id: 'tellnow', text: '약속을 깨더라도 상담 선생님께 알린다', result: '상담 선생님이 하윤과 이야기를 시작한다.', impact: [{ who: '하윤', text: '어른의 도움을 받는다', tone: 1 }], end: '늦었지만 어른에게 알렸어요.',
            next: { text: '하윤이 "왜 말했어"라며 서운해한다.', choices: [
              { id: 'explain', text: '"네가 소중해서 그랬어. 계속 곁에 있을게"', result: '하윤이 조금 마음을 연다.', impact: [{ who: '하윤', text: '아끼는 마음을 느낀다', tone: 1 }] },
              { id: 'regret', text: '"미안, 다시는 말 안 할게"', result: '다음에 신호가 와도 알리기 어려워진다.', impact: [{ who: '하윤', text: '도움이 다시 멀어진다', tone: -1 }], why: '알린 것은 잘한 일이에요. 사과보다 곁에 있겠다고 말해요.' }] } }] } },
      { id: 'listen', text: '"말해 줘서 고마워. 무슨 일 있었어?"라고 묻고 들어 준다', result: '하윤이 요즘 힘든 마음을 털어놓는다.', impact: [{ who: '하윤', text: '들어 주는 사람이 있다고 느낀다', tone: 1 }], end: '하윤의 이야기를 들어 줬어요.',
        next: { text: '하윤이 "근데 진짜 아무한테도 말하지 마"라고 다시 부탁한다.', ask: '어떻게 할까?', choices: [
          { id: 'honest', text: '"너를 지키는 일이라 비밀로는 못 해. 같이 상담 선생님께 가자"', result: '하윤이 망설이다 고개를 끄덕인다.', impact: [{ who: '하윤', text: '어른과 이어진다', tone: 1 }], end: '솔직하게 말하고 함께 어른에게 갔어요.',
            next: { text: '상담실 앞에서 하윤이 "무서워"라고 한다.', choices: [
              { id: 'stay', text: '"내가 같이 있을게"라며 함께 들어간다', result: '하윤이 상담 선생님과 이야기를 시작한다.', impact: [{ who: '하윤', text: '혼자가 아니다', tone: 1 }] },
              { id: 'leave', text: '"그럼 다음에 가자"라며 돌아선다', result: '하윤은 다시 혼자가 된다.', impact: [{ who: '하윤', text: '도움이 미뤄진다', tone: -1 }], why: '무서워하면 곁에 있어 주며 함께 가요. 미루지 않아요.' }] } },
          { id: 'keep2', text: '"알겠어, 비밀 지킬게"라고 한다', result: '하윤의 이야기를 아는 어른이 없다.', impact: [{ who: '하윤', text: '도움이 닿지 않는다', tone: -1 }], why: '들어 준 것은 좋았지만, 생명과 관련될 수 있는 비밀은 어른에게 이어요.' }] } },
      { id: 'joke', text: '"에이, 너답지 않게 왜 그래 ㅋㅋ"라고 넘긴다', result: '하윤이 더는 말하지 않는다.', impact: [{ who: '하윤', text: '마음을 닫는다', tone: -1 }], why: '가볍게 넘기면 다시 말하기 어려워져요.', ending: '하윤이 마음을 닫았어요.' }] };
    const R1 = [{ id: 'r1', text: '생명과 관련될 수 있는 비밀은 지키지 않고 어른에게 잇는다' }, { id: 'r2', text: '판단 없이 들어 주는 것이 첫걸음이다' },
      { id: 'r3', text: '친구가 비밀로 해 달라면 꼭 지켜야 한다', why: '친구를 지키는 일이 비밀보다 먼저예요.' }, { id: 'r4', text: '관심을 보이면 친구가 더 힘들어한다', why: '관심과 들어 주기는 친구에게 힘이 돼요.' }];
    const R1C = { reasons: [{ id: 'r5', text: '함께 어른에게 가면 관계를 지키며 알릴 수 있다' }, { id: 'r6', text: '\'네가 소중해서\'라고 말하면 알린 까닭이 전해진다' }], ok: ['r5', 'r6'] };

    ALL.push(
      // ---- 도입 ----
      M('intro.face', {
        title: '달라진 친구 표정 읽기', method: '달라진 친구 표정 읽기', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 마음 카드 4장(외로움·걱정·신남·편안함)만 짚으며 함께 고른다.', base: '시연 판의 마음 카드 8장에서 두 장면의 마음을 고른다.', challenge: '두 장면의 차이를 짝에게 한 줄로 말한다.' },
        intro: {
          teacher: '"한 달 전의 하윤과 요즘의 하윤, 무엇이 달라졌을까요?" 두 장면을 읽고 시연 단추로 마음 카드가 붙는 모습을 보인다. "사춘기라 원래 그렇다"는 말이 나오면 "잠깐의 기분과 몇 주씩 이어지는 변화는 같을까요?"라고 되묻는다. 오늘은 친구의 변화를 알아차리고, 살피고, 듣고, 믿을 어른에게 잇는 법을 익힌다고 밝힌다. 하윤은 가상 인물이다.',
          student: '가상 친구 하윤의 한 달 전 장면과 요즘 장면을 보고 마음 낱말을 골라요. 두 장면이 어떻게 다른지 생각해요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 's1', label: '한 달 전: 쉬는 시간마다 친구들과 웃는 하윤' }, { id: 's2', label: '요즘: 몇 주째 혼자 엎드려 말이 줄어든 하윤' }], cards: ['신남', '편안함', '외로움', '걱정', '화남', '놀람', '고마움', '뿌듯함'] }, sequence: [{ match: { s1: '신남', s2: '외로움' } }] },
          art: { draw: 'a paper-cut split scene, on the left a student laughing with friends, on the right the same student sitting alone by a window', banner: '무엇이 달라졌을까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '자살예방 내용이다. 방법·도구·장소를 말하지 않는다. 학생에게 자신의 힘든 마음을 발표하게 하지 않는다. ' + SAFE_NOTE,
      }),
      M('intro.people', {
        title: '내가 기댈 수 있는 어른', method: '내가 기댈 수 있는 어른 점검', tool: 'kitchen', minutes: 6,
        levels: { easy: '교사가 항목 3개(담임 선생님·상담 선생님·가족)만 읽으며 떠올리게 한다.', base: '시연 판의 항목 5개에서 떠오르는 어른을 마음속으로 표시한다.', challenge: '떠오른 어른에게 어떻게 연락할지(찾아가기·전화·메시지)도 함께 떠올린다.' },
        intro: {
          teacher: '"친구가 힘들어 보일 때, 내가 함께 이야기할 수 있는 어른은 누가 있을까요?" 시연 단추로 점검표에 표시되는 모습을 보이고, 학생들은 소리 내지 않고 마음속으로만 떠올리게 한다. "어른한테 말해 봤자 소용없다"는 말이 나오면 "상담 선생님은 이런 이야기를 듣고 돕는 일을 하는 분이에요"라고 말해 준다. 떠오르는 사람이 없는 학생은 수업 뒤 따로 함께 찾자고 말해 둔다.',
          student: '친구가 힘들어 보일 때 함께 이야기할 수 있는 어른을 목록에서 마음속으로 떠올려요. 연락하는 방법도 생각해요.',
          demo: { tool: 'kitchen', options: { mode: 'checklist', title: '내가 기댈 수 있는 어른', items: [
            { id: 'k1', text: '담임 선생님' }, { id: 'k2', text: '상담 선생님(Wee 클래스)' }, { id: 'k3', text: '믿을 수 있는 가족' }, { id: 'k4', text: '보건 선생님' }, { id: 'k5', text: '청소년 상담 1388' }] }, sequence: [{ checklist: ['k1', 'k2', 'k5'] }] },
          art: { draw: 'a paper-cut circle of supportive adults around a student, a teacher, a counselor and a family member holding paper hearts', banner: '함께할 어른은 누구?', extra: [{ motif: 'flower', x: 300, y: 96 }] },
        },
        notes: '점검 결과를 발표하거나 걷지 않는다. 떠오르는 어른이 없다고 말하는 학생은 수업 뒤 상담 선생님에게 잇는다.',
      }),

      // ---- 활동 ----
      M('activity.signals', {
        title: '잠깐의 기분과 관심 신호', method: '신호를 ‘잠깐의 기분’과 ‘관심이 필요한 신호’로 나누기', tool: 'mindmap', minutes: 16,
        levels: { easy: '카드 5장을 두 가지에 나누고, 놓으면 바로 맞는지 알려 준다.', base: '카드 8장을 두 가지에 나눈다.', challenge: '셋째 문항에서 여러 신호가 겹칠 때의 판단 근거를 골라 담는다(함정 근거가 섞인다).' },
        activity: {
          title: '잠깐의 기분과 관심 신호', tool: 'mindmap',
          teacher: '"\'시험 망쳐서 속상해\'와 \'내가 없으면 다들 편할 거야\'는 같은 무게일까요?" 카드를 나눈 뒤 \'관심이 필요한 신호\' 칸을 함께 읽는다. "그런 말은 관심 끌려고 하는 거다"라는 학생에게 "관심이 필요하다는 말이라면, 그 관심을 주는 것이 맞지 않을까요?"라고 되묻는다. 신호를 알아차리면 혼자 판단하지 말고 믿을 어른에게 잇는다는 점을 짚는다.',
          task: '가상 친구의 말·행동 카드를 \'잠깐의 기분\'과 \'관심이 필요한 신호\' 가지에 나누고, 판단 근거를 골라요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('친구의 말·행동 카드를 두 가지에 나누세요.', SIG2, SIGS, { topic: '친구의 변화' }),
              SB('카드 5장을 두 가지에 나누세요.', SIG2, pickCards(SIGS, ['o1', 'o2', 'h1', 'h3', 'h4']), { topic: '친구의 변화' })),
            IT(SB('신호를 말·행동·감정 변화로 나누세요.', ['말', '행동', '감정 변화'], [
              { id: 'x1', text: '"다 의미 없어"라고 한다', to: '말' }, { id: 'x2', text: '아끼던 물건을 나눠 준다', to: '행동' },
              { id: 'x3', text: '작은 일에도 쉽게 울컥한다', to: '감정 변화' }, { id: 'x4', text: '연락을 갑자기 끊는다', to: '행동' }, { id: 'x5', text: '몇 주째 무엇에도 기쁘지 않아 보인다', to: '감정 변화' }], { topic: '신호의 모습' })),
            IT(PB('관심이 필요한 신호를 알아차렸을 때 할 일만 골라 담으세요.', '알아차렸을 때', [
              { id: 'p1', text: '살피며 "요즘 괜찮아?" 묻기', ok: true }, { id: 'p2', text: '판단 없이 들어 주기', ok: true }, { id: 'p3', text: '믿을 어른에게 알리기', ok: true },
              { id: 'p4', text: '모르는 척하기' }, { id: 'p5', text: '다른 친구들에게 소문내기' }]),
              null,
              PB('여러 신호가 겹칠 때의 판단 근거만 골라 담으세요(함정 근거가 섞였어요).', '겹칠 때의 판단 근거', [
                { id: 'q1', text: '신호가 여러 개 겹치면 더 서둘러 어른에게 잇는다', ok: true }, { id: 'q2', text: '몇 주씩 이어지면 잠깐의 기분이 아니다', ok: true },
                { id: 'q3', text: '확실해질 때까지 기다린다' }, { id: 'q4', text: '내가 혼자 해결할 수 있다' }, { id: 'q5', text: '헷갈려도 어른과 함께 살피면 된다', ok: true }]),
              { conclude: '말·행동·감정의 변화가 오래 가거나 겹치면 관심이 필요한 신호예요. 혼자 판단하지 말고 살피고, 듣고, 믿을 어른에게 이어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '잠깐의 기분과 관심이 필요한 신호를 가르는 기준을 한 문장으로 써요.' }] },
        notes: '자살예방 내용이다. 신호 카드에 방법·도구·장소는 넣지 않았다. 걱정되는 친구가 떠오른다고 말하는 학생은 수업 뒤 바로 상담 선생님에게 잇는다.',
      }),
      M('activity.talk', {
        title: '하윤에게 건넬 말 대본', method: '가상 친구에게 건넬 말 대본 채우기', tool: 'story', minutes: 17,
        levels: { easy: '대본 빈칸 2개(살피는 말·들어 주는 말)에 카드를 넣고, 넣으면 바로 맞는지 알려 준다.', base: '대본 빈칸 3개(살피는 말·들어 주는 말·어른에게 함께 가자는 말)에 카드를 넣는다.', challenge: '하윤이 거절할 때 이어 갈 말까지 빈칸 4개에 넣는다(함정 카드가 섞인다).' },
        activity: {
          title: '하윤에게 건넬 말 대본', tool: 'story',
          teacher: '"\'힘내!\'와 \'요즘 힘들어 보여, 무슨 일 있어?\' 가운데 하윤이 이야기를 꺼내기 쉬운 말은 무엇일까요?" 빈칸을 채운 뒤 두 사람씩 대본을 소리 내어 읽게 한다. "말을 잘못 꺼내면 더 상처 줄까 봐 겁난다"는 학생에게 "완벽한 말보다 \'네가 걱정돼\'라는 마음이 먼저 전해져요"라고 말해 준다. 들어 줄 때는 고치려 하거나 훈계하지 않는다는 점을 짚는다.',
          task: '가상 친구 하윤과의 대화 말풍선 빈칸에 살피는 말, 들어 주는 말, 어른에게 함께 가자는 말 카드를 넣어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(FB('하윤과의 대화 빈칸에 알맞은 말 카드를 넣으세요.', [['나: "___"', '"요즘 힘들어 보여, 무슨 일 있어?"', '나', 'star'], ['하윤: "그냥… 다 지쳤어" — 나: "___"', '"그랬구나, 더 얘기해 줄래?"', '나', 'star'], ['나: "___"', '"같이 상담 선생님께 가 보자"', '나', 'star']], ['"힘내, 다들 그래"']),
              FB('하윤과의 대화 빈칸 2개에 알맞은 말 카드를 넣으세요.', [['나: "___"', '"요즘 힘들어 보여, 무슨 일 있어?"', '나', 'star'], ['하윤: "그냥… 다 지쳤어" — 나: "___"', '"그랬구나, 더 얘기해 줄래?"', '나', 'star']], []),
              FB('하윤과의 대화 빈칸 4개에 알맞은 말 카드를 넣으세요.', [['나: "___"', '"요즘 힘들어 보여, 무슨 일 있어?"', '나', 'star'], ['하윤: "그냥… 다 지쳤어" — 나: "___"', '"그랬구나, 더 얘기해 줄래?"', '나', 'star'], ['나: "___"', '"같이 상담 선생님께 가 보자"', '나', 'star'], ['하윤: "싫어, 괜찮아" — 나: "___"', '"네가 소중해서 그래. 내가 옆에 있을게"', '나', 'star']], ['"힘내, 다들 그래"', '"그럼 말고"'])),
            IT(SB('말 카드를 \'들어 주는 말\'과 \'말문을 막는 말\'로 나누세요.', ['들어 주는 말', '말문을 막는 말'], [
              { id: 'a1', text: '"그런 마음이 들었구나"', to: '들어 주는 말' }, { id: 'a2', text: '"말해 줘서 고마워"', to: '들어 주는 말' },
              { id: 'a3', text: '"그 정도로 뭘 그래"', to: '말문을 막는 말' }, { id: 'a4', text: '"너보다 힘든 사람 많아"', to: '말문을 막는 말' }, { id: 'a5', text: '"천천히 얘기해도 돼"', to: '들어 주는 말' }])),
            IT(PB('하윤과 함께 이야기할 어른·곳만 골라 담으세요.', '함께 갈 곳', [
              { id: 'p1', text: '상담 선생님(Wee 클래스)', ok: true }, { id: 'p2', text: '담임 선생님', ok: true }, { id: 'p3', text: '청소년 상담 1388', ok: true },
              { id: 'p4', text: '단톡방 친구들' }, { id: 'p5', text: '모르는 온라인 상담 글' }]),
              null, null, { conclude: '살피는 말로 먼저 다가가고, 판단 없이 들어 주고, 믿을 어른에게 함께 가요. 친구가 거절해도 "네가 소중해서"라고 말하며 곁에 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '힘들어 보이는 친구에게 처음 건넬 살피는 말을 한 문장으로 써요.' }] },
        notes: SAFE_NOTE,
      }),
      M('activity.connect', {
        title: '살피고 듣고 잇는 차례', method: '살피고 듣고 잇는 차례 정하기', tool: 'timer', minutes: 16,
        levels: { easy: '순서 카드 3장(살피며 말 걸기·판단 없이 듣기·믿을 어른에게 알리기)을 차례로 놓는다.', base: '순서 카드 3장을 놓고 스스로 점검 칸에 표시한다(\'비밀로 지켜 주기\'는 차례에 넣지 않는 함정이라는 점을 점검 칸에서 확인).', challenge: '함정 카드(비밀로 지켜 주기)가 왜 안 되는지 활동지에서 고르고, 셋째 문항에서 메시지로 신호를 받았을 때의 차례도 놓는다.' },
        activity: {
          title: '살피고 듣고 잇는 차례', tool: 'timer',
          teacher: '"친구의 신호를 알아차린 뒤 할 일은 몇 단계일까요?" 순서 카드를 놓은 뒤 왜 \'듣기\'가 \'알리기\' 앞에 오는지, 그래도 왜 알리기를 빼면 안 되는지 말하게 한다. "비밀로 지켜 주는 게 진짜 친구"라는 학생에게 "친구의 생명과 관련될 수 있는 일이라면, 지켜야 할 것은 비밀일까요, 친구일까요?"라고 되묻는다. 지금 위급해 보이면 친구 곁을 떠나지 말고 바로 가까운 어른을 부른다고 짚는다.',
          task: '친구의 신호를 알아차린 뒤 할 일 카드를 차례대로 놓고, 스스로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '신호를 알아차린 뒤 할 일을 차례대로 놓고 점검 칸에 표시하세요.', toolOptions: { title: '살피고 듣고 잇기', cards: [CONNECT[2], CONNECT[0], CONNECT[1]] }, target: { order: CONNECT, selfCheck: ['\'비밀로 지켜 주기\'는 차례에 넣지 않는다는 것을 안다', '함께 갈 어른을 정했다', '듣는 동안 훈계하지 않을 수 있다'] } },
              { prompt: '신호를 알아차린 뒤 할 일을 차례대로 놓으세요.', target: { order: CONNECT } }),
            IT({ prompt: '친구에게 걱정되는 메시지를 받았을 때의 차례를 놓으세요.', toolOptions: { title: '메시지로 신호를 받았을 때', cards: ['상담 선생님이나 보호자에게 바로 알리기', '"지금 어디야? 이야기해 줘" 답하기', '친구와 연락을 이어 가기'] }, target: { order: ['"지금 어디야? 이야기해 줘" 답하기', '상담 선생님이나 보호자에게 바로 알리기', '친구와 연락을 이어 가기'] } }),
            IT({ prompt: '어른에게 알린 뒤 할 일을 차례대로 놓으세요.', toolOptions: { title: '알린 뒤에도', cards: ['다음 날도 안부 묻기', '어른과 함께 친구 곁에 있기', '친구에게 알린 까닭 말하기'] }, target: { order: ['어른과 함께 친구 곁에 있기', '친구에게 알린 까닭 말하기', '다음 날도 안부 묻기'] } },
              null, null, { conclude: '살피고, 판단 없이 듣고, 믿을 어른에게 이어요. 생명과 관련될 수 있는 비밀은 지키지 않고, 알린 뒤에도 곁에 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '\'비밀로 지켜 주기\'를 차례에 넣으면 안 되는 까닭은?', options: ['친구가 싫어해서', '어른의 도움이 친구에게 닿지 못해서', '선생님께 혼나서'], answer: '어른의 도움이 친구에게 닿지 못해서' }] },
        notes: '교구의 순서 카드 판은 차례에 들지 않는 함정 카드를 받지 않아서, 계획의 \'함정 카드 1장\'은 스스로 점검 항목과 활동지 고르기 문항으로 옮겼다.',
      }),
      M('activity.secret', {
        title: '"아무한테도 말하지 마" 갈림길', method: '“아무한테도 말하지 마” 갈림길', tool: 'dilemma', minutes: 17,
        levels: { easy: '갈림 2번까지 가고, 고를 때마다 하윤에게 생기는 영향이 바로 보인다.', base: '갈림 3번까지 가고, 영향 표시는 맞힌 뒤에만 보인다. 끝에서 생명과 관련된 비밀의 예외를 근거로 고른다.', challenge: '갈림 3번 뒤 어른에게 알리면서 친구와 관계를 지키는 방법의 근거까지 고른다.' },
        activity: {
          title: '"아무한테도 말하지 마" 갈림길', tool: 'dilemma',
          teacher: '"친구와의 약속과 친구의 안전이 부딪치면 무엇이 먼저일까요?" 학생마다 한 길을 끝까지 가 본 뒤, 약속을 지킨 길과 함께 어른에게 간 길을 견주게 한다. "말하면 친구를 잃는다"는 학생에게 "\'네가 소중해서 그랬어\'라고 말한 길에서 하윤은 어떻게 했나요?"라고 되묻는다. 생명과 관련될 수 있는 비밀은 지키지 않는 것이 친구를 지키는 일이라는 예외를 분명히 한다. 장면에 방법은 나오지 않는다.',
          task: '친구가 비밀을 부탁하는 상황에서 길을 골라 결과를 따라가고, 끝에서 생명과 관련된 비밀의 예외를 근거로 골라요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL({ easy: '하윤이 비밀을 부탁해요. 두 번 골라 결과를 보고 근거를 고르세요.', base: '하윤이 비밀을 부탁해요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 간 뒤, 관계를 지키며 알리는 근거까지 고르세요.' },
              '"아무한테도 말하지 마"', D1, [['listen', 'honest', 'stay'], ['promise', 'tellnow', 'explain']], R1, ['r1', 'r2'], R1C),
            IT({ prompt: '지켜도 되는 비밀과 지키면 안 되는 비밀을 가르는 장면을 따라가세요.', toolOptions: { title: '어떤 비밀일까?', scene: { text: '친구가 두 가지 비밀을 말했다. 하나는 좋아하는 사람 이야기, 하나는 "요즘 다 끝내고 싶다"는 말이다.', ask: '어떻게 할까?', motif: 'house', choices: [
              { id: 'both', text: '둘 다 똑같이 지켜 준다', result: '힘든 마음을 아는 어른이 없다.', impact: [{ who: '친구', text: '도움이 닿지 않는다', tone: -1 }], why: '생명과 관련될 수 있는 말은 지키는 비밀이 아니에요.' },
              { id: 'split', text: '좋아하는 사람 이야기는 지키고, 힘든 마음은 어른에게 잇는다', result: '상담 선생님이 친구를 살핀다.', impact: [{ who: '친구', text: '보호를 받는다', tone: 1 }], ending: '지킬 비밀과 이을 비밀을 가렸어요.' }] }, reasons: [{ id: 'q1', text: '생명과 관련될 수 있는 비밀은 예외다' }, { id: 'q2', text: '비밀은 어떤 것이든 지켜야 한다', why: '친구의 안전이 걸리면 예외예요.' }], compare: true },
              target: { path: [['split']], reasons: ['q1'] } }),
            IT({ prompt: '알린 사실을 친구가 알았을 때의 장면을 따라가세요.', toolOptions: { title: '친구가 알았을 때', scene: { text: '하윤이 "네가 선생님께 말한 거지?"라고 묻는다.', ask: '어떻게 답할까?', motif: 'house', choices: [
              { id: 'truth', text: '"응, 네가 소중해서 그랬어. 계속 곁에 있을게"', result: '하윤이 처음엔 서운해하다가 고개를 끄덕인다.', impact: [{ who: '하윤', text: '아끼는 마음을 느낀다', tone: 1 }], ending: '솔직하게 말하고 곁에 남았어요.' },
              { id: 'lie', text: '"아니야, 난 아무 말도 안 했어"', result: '하윤이 나중에 알게 되어 더 서운해한다.', impact: [{ who: '하윤', text: '믿음이 흔들린다', tone: -1 }], why: '알린 것은 잘한 일이니 솔직하게 말해도 돼요.' }] }, reasons: [{ id: 'p1', text: '알린 것은 잘한 일이라 솔직하게 말할 수 있다' }, { id: 'p2', text: '친구가 화내면 알린 것을 후회해야 한다', why: '알린 것은 친구를 지킨 일이에요.' }], compare: true },
              target: { path: [['truth']], reasons: ['p1'] }, conclude: '생명과 관련될 수 있는 비밀은 지키지 않고 믿을 어른에게 이어요. 알린 것은 친구를 지킨 일이고, 알린 뒤에도 곁에 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '친구가 "힘들어, 아무한테도 말하지 마"라고 할 때 가장 알맞은 행동은?', options: ['약속을 지킨다', '들어 주고, 함께 상담 선생님께 간다', '다른 친구들에게 물어본다'], answer: '들어 주고, 함께 상담 선생님께 간다' }] },
        notes: '자살예방 내용이다. 방법을 묘사하지 않고, 장면은 말과 감정만 쓴다. ' + SAFE_NOTE,
      }),

      // ---- 정리 ----
      M('wrap.words', {
        title: '힘이 되는 말과 상처가 되는 말', method: '힘이 되는 말과 상처가 되는 말', tool: 'wordcards', minutes: 6,
        levels: { easy: '말 카드 4장을 두 칸으로 가른다.', base: '말 카드 6장을 가른다.', challenge: '상처가 되는 말 하나를 힘이 되는 말로 바꿔 쓴다(셋째 출구 질문).' },
        wrap: {
          teacher: '"\'너보다 힘든 사람 많아\'는 위로일까요?" 카드를 가른 뒤 상처가 되는 말이 왜 말문을 막는지 말하게 한다. 힘이 되는 말에는 \'같이 어른에게 가자\'가 들어 있다는 점을 짚는다.',
          exitTicket: [
            IT(X('wordcards', SB('친구에게 건넬 말 카드를 두 칸으로 가르세요.', ['힘이 되는 말', '상처가 되는 말'], [
              { id: 'w1', text: '"말해 줘서 고마워"', to: '힘이 되는 말' }, { id: 'w2', text: '"네가 소중해"', to: '힘이 되는 말' }, { id: 'w3', text: '"같이 상담 선생님께 가자"', to: '힘이 되는 말' },
              { id: 'w4', text: '"너보다 힘든 사람 많아"', to: '상처가 되는 말' }, { id: 'w5', text: '"관심 끌려고 그러지?"', to: '상처가 되는 말' }, { id: 'w6', text: '"그 정도로 뭘"', to: '상처가 되는 말' }]), { difficulty: 0.15 }),
              SB('말 카드 4장을 두 칸으로 가르세요.', ['힘이 되는 말', '상처가 되는 말'], [
                { id: 'w1', text: '"말해 줘서 고마워"', to: '힘이 되는 말' }, { id: 'w2', text: '"네가 소중해"', to: '힘이 되는 말' },
                { id: 'w4', text: '"너보다 힘든 사람 많아"', to: '상처가 되는 말' }, { id: 'w6', text: '"그 정도로 뭘"', to: '상처가 되는 말' }])),
            { type: 'choice', prompt: '"관심을 표현하면 친구가 더 힘들어한다"는 말에 대한 생각으로 가장 알맞은 것은?', options: ['맞다, 모른 척해야 한다', '살피고 들어 주는 관심은 친구에게 힘이 된다', '관심은 어른만 줄 수 있다'], answer: 1, difficulty: 0.15, explain: '관심과 들어 주기는 도움의 시작이에요.' },
            { type: 'short', prompt: '상처가 되는 말 하나를 힘이 되는 말로 바꿔 써요.' },
          ],
        },
        worksheet: {
          title: '힘이 되는 말',
          items: [
            { type: 'short', prompt: '힘들어 보이는 친구에게 건넬 힘이 되는 말을 하나 써요.' },
            { type: 'check', prompt: '함께 이야기할 수 있는 곳에 표시해요.', options: ['상담 선생님(Wee 클래스)', '담임 선생님', '1388'] },
          ],
        },
      }),
      M('wrap.letter', {
        title: '생명존중 한 줄 편지', method: '생명존중 한 줄 편지', tool: 'rubric-writing', minutes: 6,
        levels: { easy: '틀("너는 ___ 사람이야. 힘들면 ___")을 채워 쓴다.', base: '틀 없이 한 줄 편지를 쓰고 기준표(따뜻함·도움 경로)를 점검한다.', challenge: '도움 경로를 자연스럽게 넣어 두 문장으로 다듬는다.' },
        wrap: {
          teacher: '"친구에게 \'너는 소중해\'라고 말해 본 적이 있나요? 오늘은 글로 써 봐요." 편지는 가상의 친구에게 쓰는 것이고 이름은 쓰지 않는다고 말한다. 방법·위험한 말은 쓰지 않고, 희망과 도움 경로를 담게 한다. "오글거린다"는 학생에게 짧아도 괜찮다고 말해 준다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'rubric-writing', options: { topic: '가상의 친구에게 건넬 생명존중 한 줄 편지를 쓰세요(이름은 쓰지 않아요).', minChars: 12, maxChars: 120, minSentences: 1, maxSentences: 2, title: '생명존중 한 줄 편지' },
              prompt: '생명존중 한 줄 편지를 쓰고 기준표에 표시해요.', target: { selfCheck: ['따뜻한 말이 들어갔다', '도움을 청해도 된다는 말이 들어갔다', '이름을 쓰지 않았다'] }, difficulty: 0.2 },
            { prompt: '문장 틀을 채워 편지를 쓰고 기준표에 표시해요.', toolOptions: { starter: '너는 ___ 사람이야. 힘들면 ___.' } },
            { prompt: '도움 경로를 자연스럽게 넣어 두 문장으로 다듬어 쓰고 기준표에 표시해요.', toolOptions: { minSentences: 2, minChars: 20 }, target: { selfCheck: ['따뜻한 말이 들어갔다', '도움을 청해도 된다는 말이 들어갔다', '이름을 쓰지 않았다', '도움 경로(상담 선생님·1388 등)를 넣었다'], mustInclude: [['상담', '1388', '선생님', '어른']] } }),
            { type: 'choice', prompt: '생명존중 편지에 가장 알맞은 문장은?', options: ['"너는 소중해. 힘들면 같이 상담 선생님께 가자"', '"힘내, 다들 그래"', '"그런 생각 하지 마"'], answer: 0, difficulty: 0.15, explain: '따뜻함과 도움 경로를 함께 담아요.' },
            { type: 'mood', prompt: '오늘 수업을 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '생명존중 한 줄 편지',
          items: [
            { type: 'short', prompt: '가상의 친구에게 건넬 생명존중 한 줄 편지를 써요.' },
            { type: 'check', prompt: '내 편지를 기준표로 점검해요.', options: ['따뜻한 말', '도움을 청해도 된다는 말', '이름 쓰지 않기'] },
          ],
          easy: { note: '"너는 ___ 사람이야" 틀을 써도 돼요.', items: [{ type: 'blank', prompt: '틀을 채워 편지를 써요.', text: '너는 ___ 사람이야. 힘들면 ___.', answer: '(예) 소중한, 같이 상담 선생님께 가자' }] },
        },
        notes: '편지는 걷거나 발표하지 않는다. 걱정되는 글이 보이면 상담 선생님에게 잇는다.',
      }),
    );
  }

  // ==== 9학년 · 학교폭력의 결과와 법이 정한 범위 (saf-violence.m.harm-law) ====
  {
    const M = MK('harm-law', [9]);
    const SCOPE2 = ['학교폭력에 해당', '더 알아봐야 함'];
    const CASES = [
      { id: 'c1', text: '학원 앞에서 같은 학교 학생이 돈을 빼앗았다', to: '학교폭력에 해당' }, { id: 'c2', text: '주말에 SNS로 한 학생을 계속 모욕했다', to: '학교폭력에 해당' },
      { id: 'c3', text: '교실에서 여럿이 한 학생을 따돌렸다', to: '학교폭력에 해당' }, { id: 'c4', text: '방학 중 놀이터에서 다른 학교 학생을 때렸다', to: '학교폭력에 해당' },
      { id: 'c5', text: '누가 썼는지 모르는 익명 글이 올라왔다', to: '더 알아봐야 함' }, { id: 'c6', text: '서로 "장난으로 한 번 밀쳤다"고 말한다', to: '더 알아봐야 함' },
      { id: 'c7', text: '모둠 과제로 한 번 크게 말다툼했다', to: '더 알아봐야 함' },
    ];
    const RIP4 = ['피해 학생', '가해 학생', '주변 학생', '학교 공동체'];
    const RIPS = [
      { id: 'v1', text: '학교 오기가 두려워진다', to: '피해 학생' }, { id: 'v2', text: '사람을 믿기 어려워진다', to: '피해 학생' },
      { id: 'g1', text: '학교의 조치를 받고 책임을 진다', to: '가해 학생' }, { id: 'g2', text: '친구들의 믿음을 잃는다', to: '가해 학생' },
      { id: 'b1', text: '보고도 못 막았다는 마음이 남는다', to: '주변 학생' }, { id: 'b2', text: '다음은 나일까 불안해진다', to: '주변 학생' },
      { id: 'k1', text: '서로 믿는 분위기가 깨진다', to: '학교 공동체' }, { id: 'k2', text: '함께 지킬 약속을 다시 세워야 한다', to: '학교 공동체' },
    ];
    const D1 = { text: '토요일 학원 앞에서 우리 학교 3학년 둘이 다른 반 학생 하나를 둘러싸고 휴대전화를 빼앗았다. 그 일을 본 내가 월요일에 담임 선생님과 이야기한다.', ask: '이 일을 어떻게 볼까?', motif: 'house', choices: [
      { id: 'outside', text: '학교 밖, 주말 일이라 학교폭력이 아니다', result: '선생님이 "학교 밖도 학생 사이 일이면 다룰 수 있어"라고 하신다.', impact: [{ who: '빼앗긴 학생', text: '도움이 늦어질 뻔했다', tone: -1 }], why: '법이 정한 학교폭력은 학교 안팎에서 학생을 대상으로 일어난 일이에요.', end: '학교 밖이라고 넘길 뻔했어요.',
        next: { text: '선생님이 "그럼 이 일은 어떻게 처리하는 게 좋을까?"라고 물으신다.', ask: '어떻게 할까?', choices: [
          { id: 'skip', text: '"당사자끼리 알아서 하면 돼요"', result: '빼앗긴 학생은 혼자 둘을 상대해야 한다.', impact: [{ who: '빼앗긴 학생', text: '혼자 남는다', tone: -1 }], why: '힘의 차이가 있으면 당사자끼리 풀기 어려워요.', end: '당사자끼리 맡겨 버렸어요.',
            next: { text: '빼앗긴 학생이 다음 주에도 같은 일을 겪는다.', choices: [
              { id: 'again', text: '여전히 모른 척한다', result: '피해가 이어진다.', impact: [{ who: '빼앗긴 학생', text: '피해가 쌓인다', tone: -1 }], why: '되풀이되면 더더욱 학교의 절차가 필요해요.' },
              { id: 'report', text: '본 것을 정리해 선생님께 다시 알린다', result: '학교가 절차에 따라 사안을 살핀다.', impact: [{ who: '빼앗긴 학생', text: '보호를 받는다', tone: 1 }], why: '알린 것은 잘했지만 처음부터 학교폭력으로 보았다면 더 빨랐어요.' }] } },
          { id: 'process', text: '"학교폭력으로 보고 학교 절차에 맡겨요"', result: '학교가 사실을 확인하고 피해 학생을 보호한다.', impact: [{ who: '빼앗긴 학생', text: '보호를 받는다', tone: 1 }], end: '늦게라도 학교 절차로 넘겼어요.',
            next: { text: '가해 학생 하나가 "그냥 사과하면 끝 아니에요?"라고 한다.', choices: [
              { id: 'more', text: '"사과와 함께 돌려주기·책임·재발 방지가 필요해"', result: '회복의 길이 구체적으로 정해진다.', impact: [{ who: '학교 공동체', text: '믿음을 되찾기 시작한다', tone: 1 }] },
              { id: 'sorryonly', text: '"사과했으면 끝이지"', result: '빼앗긴 학생의 피해는 그대로 남는다.', impact: [{ who: '빼앗긴 학생', text: '회복되지 않는다', tone: -1 }], why: '사과만으로는 피해가 회복되지 않아요.' }] } }] } },
      { id: 'inside', text: '학교 밖이어도 학생 사이의 학교폭력이다', result: '선생님이 고개를 끄덕이며 자세한 이야기를 들으신다.', impact: [{ who: '빼앗긴 학생', text: '도움이 시작된다', tone: 1 }], end: '법의 범위를 알고 바로 알렸어요.',
        next: { text: '선생님이 "본 것을 말해 줄래?"라고 하신다.', ask: '무엇을 말할까?', choices: [
          { id: 'facts', text: '언제·어디서·누가·무엇을 본 대로 말한다', result: '학교가 사실을 바탕으로 사안을 살핀다.', impact: [{ who: '빼앗긴 학생', text: '정확한 도움을 받는다', tone: 1 }], end: '본 사실을 그대로 말했어요.',
            next: { text: '친구가 "너 때문에 선배들이 혼나면 어떡해?"라고 한다.', choices: [
              { id: 'firm', text: '"잘못은 빼앗은 쪽에 있어. 알린 건 잘한 거야"', result: '친구도 고개를 끄덕인다.', impact: [{ who: '나', text: '흔들리지 않는다', tone: 1 }] },
              { id: 'take', text: '"내가 괜히 말했나…" 하고 말을 거둔다', result: '사실 확인이 어려워진다.', impact: [{ who: '빼앗긴 학생', text: '도움이 흔들린다', tone: -1 }], why: '알린 사람은 잘한 거예요. 말을 거둘 까닭이 없어요.' }] } },
          { id: 'guess', text: '들은 소문까지 섞어 부풀려 말한다', result: '사실과 소문이 뒤섞여 확인이 늦어진다.', impact: [{ who: '빼앗긴 학생', text: '도움이 늦어진다', tone: -1 }], why: '본 것과 들은 것을 나눠 말해요.' }] } },
      { id: 'notmine', text: '내가 본 건 말하지 않는다', result: '선생님은 무슨 일이 있었는지 모른다.', impact: [{ who: '빼앗긴 학생', text: '혼자 감당한다', tone: -1 }], why: '본 사람이 말해야 학교가 도울 수 있어요.', ending: '아무도 알리지 않았어요.' }] };
    const R1 = [{ id: 'r1', text: '법이 정한 학교폭력은 학교 안팎에서 학생을 대상으로 일어난 일이다' }, { id: 'r2', text: '힘의 차이가 있으면 당사자끼리 풀기 어렵다' },
      { id: 'r3', text: '학교 밖에서 일어나면 학교폭력이 아니다', why: '학교 안팎을 가리지 않아요.' }, { id: 'r4', text: '사과만 하면 끝난다', why: '돌려주기·책임·재발 방지까지가 회복이에요.' }];
    const R1C = { reasons: [{ id: 'r5', text: '반박: 법의 정의에는 \'학교 안팎\'이 들어 있다' }, { id: 'r6', text: '반박: 피해 학생이 학생이라면 장소와 요일은 상관없다' }], ok: ['r5', 'r6'] };
    const DEF = [['학교폭력은 ___을 대상으로', '학생'], ['학교 ___에서 일어난 일로', '안팎'], ['몸·마음·재산에 ___를 주는 행동이다', '피해'], ['따돌림과 ___ 따돌림도 들어간다', '사이버']];
    const DATA = [['언어폭력', 34], ['따돌림', 18], ['사이버폭력', 14], ['신체폭력', 13], ['강요', 8], ['금품갈취', 6]];

    ALL.push(
      // ---- 도입 ----
      M('intro.define', {
        title: '법의 정의 핵심어 채우기', method: '법의 정의 핵심어 채우기', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 빈칸 2개(학생·안팎)만 함께 채운다.', base: '시연 판의 빈칸 4개를 낱말 카드로 채운다.', challenge: '핵심어 하나(예: \'안팎\')가 빠지면 뜻이 어떻게 바뀌는지 짝과 말한다.' },
        intro: {
          teacher: '"학교폭력은 꼭 학교 안에서, 수업 시간에 일어나야 할까요?" 「학교폭력예방 및 대책에 관한 법률」이 말하는 학교폭력을 쉬운 말로 옮긴 문장의 빈칸에, 시연 단추로 \'학생\'·\'안팎\'·\'피해\'·\'사이버\' 카드가 들어가는 모습을 보인다. "학교 밖에서 일어나면 경찰 일이지 학교 일이 아니다"라는 말이 나오면 "정의에 \'학교 안팎\'이라고 적혀 있다면 어떻게 될까요?"라고 되묻는다. 조문 번호는 말하지 않고 뜻을 다룬다.',
          student: '법이 말하는 학교폭력 설명 문장의 빈칸에 낱말 카드를 넣어 보고, 핵심어 하나가 빠지면 뜻이 어떻게 바뀌는지 생각해요.',
          demo: { tool: 'wordcards', options: FB('', DEF, ['교실', '성인']).toolOptions, sequence: [{ fill: FB('', DEF).target.fill }] },
          art: { draw: 'a paper-cut open law book with a sentence card and four word cards being slotted into blanks, a school and a street drawn around it', banner: '법이 말하는 학교폭력', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '법 문장은 쉬운 말로 옮긴 것이다(조문 번호 없음). 원문 대조는 파일 첫머리 \'사람 확인\' 목록에 있다.',
      }),
      M('intro.data', {
        title: '가상 학교 설문 유형별 응답', method: '가상 학교 설문 자료 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 막대 값을 읽어 주며 가장 많은 유형과 가장 적은 유형을 함께 찾는다.', base: '값을 말하지 않고 눈금으로 읽어 가장 많은 유형을 고른다.', challenge: '설문 자료만으로 단정할 수 없는 점(예: 응답하지 않은 일, 심각성)을 짝과 말한다.' },
        intro: {
          teacher: '"가상 설문에서 가장 많이 응답된 유형과 가장 적은 유형은 무엇일까요?" 막대그래프를 띄우고 시연 단추로 \'언어폭력\'을 고르는 모습을 보인다. 자료는 수업용 가상 설문이라고 먼저 밝힌다. "응답이 적은 금품갈취는 별것 아니다"라는 말이 나오면 "응답 수가 적다는 것이 피해가 작다는 뜻일까요?"라고 되묻는다.',
          student: '가상 학교 설문 막대그래프에서 가장 많은 유형과 가장 적은 유형을 찾고, 이 자료만으로 단정할 수 없는 점을 생각해요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '유형별 응답(가상 학교 설문)', unit: '%', xLabel: '유형', yLabel: '응답 비율', data: DATA, question: '가장 많이 응답된 유형은?', choices: DATA.map((d) => d[0]) }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper-cut bar chart with six paper bars of different heights pinned on a school notice board', banner: '자료가 말해 주는 것과 못 하는 것', extra: [{ motif: 'leaf', x: 300, y: 96 }] },
        },
        notes: '그래프 값은 모두 가상이다. 실제 실태조사 수치를 쓰지 않았다.',
      }),

      // ---- 활동 ----
      M('activity.scope', {
        title: '사례가 법의 범위에 드는지', method: '사례가 법의 범위에 드는지 판단하기', tool: 'story', minutes: 16,
        levels: { easy: '사례 카드 4장을 두 칸에 나누고, 놓으면 바로 맞는지 알려 준다.', base: '사례 카드 7장을 두 칸에 나누고 근거 카드를 잇는다.', challenge: '셋째 문항에서 판단이 갈리는 사례의 쟁점을 골라 담는다(함정이 섞인다).' },
        activity: {
          title: '사례가 법의 범위에 드는지', tool: 'story',
          teacher: '"학원 앞, 주말, SNS — 이 가운데 법이 정한 학교폭력에서 빠지는 것이 있을까요?" 카드를 나눈 뒤 근거를 정의 문장에서 찾게 한다. "다른 학교 학생이면 우리 학교 일이 아니다"라는 학생에게 "정의는 \'학생을 대상으로\'라고만 하지 않았나요?"라고 되묻는다. \'더 알아봐야 함\'은 학교폭력이 아니라는 뜻이 아니라, 사실을 더 확인해야 판단할 수 있다는 뜻이라고 짚는다.',
          task: '학원 앞·주말 SNS·교실 사례 카드를 \'학교폭력에 해당\'과 \'더 알아봐야 함\'으로 나누고, 근거를 붙여요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('사례 카드를 두 칸에 나누세요.', SCOPE2, CASES, { title: '법의 범위에 들까?' }),
              SB('사례 카드 4장을 두 칸에 나누세요.', SCOPE2, pickCards(CASES, ['c1', 'c2', 'c5', 'c7']), { title: '법의 범위에 들까?' })),
            IT(MB('사례마다 판단 근거를 이어 보세요.', [['학원 앞에서 같은 학교 학생이 돈을 빼앗았다', '학교 안팎 어디서든 학생 대상이면 해당'], ['주말에 SNS로 한 학생을 계속 모욕했다', '사이버 공간에서의 모욕도 해당'], ['누가 썼는지 모르는 익명 글이 올라왔다', '누가 왜 썼는지 사실 확인이 먼저']], ['수업 시간이 아니면 해당하지 않음'], { title: '판단 근거' }),
              MB('사례 두 개의 판단 근거를 이어 보세요.', [['학원 앞에서 같은 학교 학생이 돈을 빼앗았다', '학교 안팎 어디서든 학생 대상이면 해당'], ['주말에 SNS로 한 학생을 계속 모욕했다', '사이버 공간에서의 모욕도 해당']], [], { title: '판단 근거' })),
            IT(PB('\'학교 밖이면 학교폭력이 아니다\'를 반박하는 근거만 골라 담으세요.', '반박 근거', [
              { id: 'p1', text: '정의에 \'학교 안팎\'이 들어 있다', ok: true }, { id: 'p2', text: '피해 학생이 학생이면 장소는 상관없다', ok: true },
              { id: 'p3', text: '학교 밖 일은 모두 경찰만 다룬다' }, { id: 'p4', text: '방학에는 학교가 쉬니 상관없다' }]),
              null,
              PB('\'서로 장난으로 한 번 밀쳤다\'는 사례에서 판단이 갈리는 쟁점만 골라 담으세요.', '판단의 쟁점', [
                { id: 'q1', text: '상대가 몸이나 마음에 피해를 입었는가', ok: true }, { id: 'q2', text: '힘의 차이나 되풀이가 있었는가', ok: true },
                { id: 'q3', text: '두 사람이 같은 이야기를 하는가', ok: true }, { id: 'q4', text: '밀친 학생의 성적은 어떤가' }, { id: 'q5', text: '복도였는가 교실이었는가' }]),
              { conclude: '법이 정한 학교폭력은 학교 안팎에서 학생을 대상으로 몸·마음·재산에 피해를 주는 일이에요. 판단이 어려우면 사실을 확인하는 절차가 먼저예요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '\'학교 밖에서 일어나면 학교폭력이 아니다\'를 법의 정의로 반박하는 문장을 써요.' }],
          easy: [{ type: 'choice', prompt: '주말 SNS 모욕은 학교폭력에 들까요?', options: ['들어간다', '들어가지 않는다'], answer: '들어간다' }] },
        notes: '학교폭력 해당 여부의 실제 판단은 학교의 절차가 한다. 이 활동은 정의 문장을 적용해 보는 연습이다.',
      }),
      M('activity.ripple', {
        title: '한 사건의 결과 네 방향', method: '한 사건의 결과를 네 방향으로 펼치기', tool: 'mindmap', minutes: 17,
        levels: { easy: '가지 4개와 짧은 낱말 카드로 펼치고, 놓으면 바로 맞는지 알려 준다.', base: '가지 4개에 문장 카드 8장을 나누어 펼친다.', challenge: '셋째 문항에서 결과를 짧은 결과와 오래 남는 결과로 나눈다.' },
        activity: {
          title: '한 사건의 결과 네 방향', tool: 'mindmap',
          teacher: '"학원 앞에서 휴대전화를 빼앗은 일의 결과는 빼앗긴 학생에게만 남을까요?" 가운데 가상 사건을 두고 네 가지로 펼친다. "가해 학생은 처벌만 받으면 끝"이라는 학생에게 "친구들의 믿음과 학교생활은 어떻게 될까요?"라고 되묻는다. 주변 학생과 학교 공동체에도 결과가 남는다는 것을 짚고, 그래서 회복은 모두의 일이라고 정리한다.',
          task: '가상 사건 하나의 결과를 피해 학생·가해 학생·주변 학생·학교 공동체 가지로 펼쳐요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('결과 카드를 네 가지에 나누어 펼치세요.', RIP4, RIPS, { topic: '학원 앞 사건' }),
              SB('낱말 카드를 네 가지에 나누어 펼치세요.', RIP4, [
                { id: 'e1', text: '두려움', to: '피해 학생' }, { id: 'e2', text: '책임', to: '가해 학생' }, { id: 'e3', text: '불안', to: '주변 학생' }, { id: 'e4', text: '믿음이 깨짐', to: '학교 공동체' }], { topic: '학원 앞 사건' })),
            IT(MB('결과마다 회복을 위한 일을 이어 보세요.', [['피해 학생이 두려워한다', '보호와 상담 이어 가기'], ['가해 학생이 책임을 진다', '돌려주기와 진심 어린 사과'], ['주변 학생이 불안해한다', '알리는 방법 함께 익히기'], ['공동체의 믿음이 깨진다', '함께 지킬 약속 다시 세우기']], ['모두 잊고 넘어가기'], { topic: '회복을 위한 일' }),
              MB('결과 두 개에 회복을 위한 일을 이어 보세요.', [['피해 학생이 두려워한다', '보호와 상담 이어 가기'], ['가해 학생이 책임을 진다', '돌려주기와 진심 어린 사과']], [], { topic: '회복을 위한 일' })),
            IT(PB('피해 학생에게 오래 남을 수 있는 결과만 골라 담으세요.', '오래 남는 결과', [
              { id: 'p1', text: '사람을 믿기 어려워진다', ok: true }, { id: 'p2', text: '비슷한 장소를 피하게 된다', ok: true }, { id: 'p3', text: '그날 점심을 거른다' }]),
              null,
              SB('결과를 짧은 결과와 오래 남는 결과로 나누세요.', ['짧은 결과', '오래 남는 결과'], [
                { id: 's1', text: '그날 수업에 집중하지 못한다', to: '짧은 결과' }, { id: 's2', text: '휴대전화를 돌려받기까지 불편하다', to: '짧은 결과' },
                { id: 'l1', text: '사람을 믿기 어려워진다', to: '오래 남는 결과' }, { id: 'l2', text: '학교의 조치가 기록으로 남는다', to: '오래 남는 결과' }, { id: 'l3', text: '서로 믿는 분위기가 깨진다', to: '오래 남는 결과' }], { topic: '얼마나 남을까?' }),
              { conclude: '학교폭력의 결과는 피해·가해·주변 학생과 공동체 모두에게 남고, 어떤 결과는 오래 가요. 그래서 회복도 함께 해야 해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '사건의 결과를 하나씩 써요.', columns: ['누구에게', '결과'], cells: [['피해 학생', ''], ['가해 학생', ''], ['학교 공동체', '']], answer: '(예) 두려움, 학교의 조치·믿음을 잃음, 믿는 분위기가 깨짐' }] },
        notes: '\'학교의 조치가 기록으로 남는다\'는 파일 첫머리 \'사람 확인\' 목록에 있다.',
      }),
      M('activity.outside', {
        title: '학원 앞 사건을 어떻게 볼까', method: '학원 앞 사건을 어떻게 볼까 갈림길', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림 2번까지 가고, 고를 때마다 영향이 바로 보인다.', base: '갈림 3번까지 가고, 영향 표시는 맞힌 뒤에만 보인다. 끝에서 법의 정의를 근거로 고른다.', challenge: '갈림 3번 뒤 다른 판단을 한 친구에게 반박할 근거 카드까지 고른다.' },
        activity: {
          title: '학원 앞 사건을 어떻게 볼까', tool: 'dilemma',
          teacher: '"주말, 학원 앞이라는 것이 판단을 바꿀까요?" 학생마다 한 길을 끝까지 가 본 뒤 \'학교폭력이 아니다\'로 시작한 길과 견주게 한다. "사과하면 끝 아니냐"는 학생에게 "빼앗긴 휴대전화와 두려움은 사과만으로 돌아올까요?"라고 되묻는다. 끝 장면에서 근거는 반드시 법의 정의 문장에서 찾게 한다.',
          task: '학원 앞에서 같은 학교 학생 사이에 일어난 일을 두고 판단을 이어 가며 학교의 대응을 따라가고, 끝에서 법의 정의를 근거로 골라요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL({ easy: '학원 앞 사건을 두고 판단해요. 두 번 골라 결과를 보고 근거를 고르세요.', base: '학원 앞 사건을 두고 판단해요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 간 뒤, 다른 판단을 한 친구에게 반박할 근거까지 고르세요.' },
              '학원 앞 사건', D1, [['inside', 'facts', 'firm'], ['outside', 'process', 'more']], R1, ['r1', 'r2'], R1C),
            IT({ prompt: '온라인 게임 안에서 일어난 일을 판단해 보세요.', toolOptions: { title: '게임 속 일', scene: { text: '같은 반 학생들이 밤마다 게임 채팅에서 한 학생을 욕하고 따돌린다.', ask: '법이 정한 학교폭력일까?', motif: 'house', choices: [
              { id: 'yes', text: '학생을 대상으로 한 사이버 따돌림이라 해당한다', result: '학교에 알릴 수 있다는 것을 알게 된다.', impact: [{ who: '따돌림받는 학생', text: '도움을 받을 길이 열린다', tone: 1 }], ending: '사이버 공간도 범위에 든다는 것을 알았어요.' },
              { id: 'no', text: '게임 속 일이라 해당하지 않는다', result: '따돌림이 계속된다.', impact: [{ who: '따돌림받는 학생', text: '혼자 견딘다', tone: -1 }], why: '사이버 따돌림도 정의에 들어 있어요.' }] }, reasons: [{ id: 'q1', text: '정의에 사이버 따돌림이 들어 있다' }, { id: 'q2', text: '밤에 일어난 일은 학교와 상관없다', why: '시간과 장소를 가리지 않아요.' }], compare: true },
              target: { path: [['yes']], reasons: ['q1'] } }),
            IT({ prompt: '\'사과했으니 끝\'이라는 말을 따라가 보세요.', toolOptions: { title: '사과하면 끝일까?', scene: { text: '가해 학생이 사과 메시지를 보냈다. 하지만 빼앗은 휴대전화는 아직 돌려주지 않았다.', ask: '이것으로 회복됐을까?', motif: 'house', choices: [
              { id: 'done', text: '사과했으니 끝났다', result: '피해 학생의 손해와 두려움이 그대로다.', impact: [{ who: '피해 학생', text: '회복되지 않는다', tone: -1 }], why: '사과는 회복의 시작일 뿐이에요.' },
              { id: 'notyet', text: '돌려주기·책임·재발 방지까지 필요하다', result: '회복의 길이 구체적으로 정해진다.', impact: [{ who: '피해 학생', text: '회복이 시작된다', tone: 1 }], ending: '회복에 필요한 일을 다 따져 봤어요.' }] }, reasons: [{ id: 'p1', text: '회복은 피해를 되돌리고 다시 일어나지 않게 하는 것까지다' }, { id: 'p2', text: '말로 사과하면 책임을 다한 것이다', why: '손해를 되돌리고 행동을 바꾸는 것까지가 책임이에요.' }], compare: true },
              target: { path: [['notyet']], reasons: ['p1'] }, conclude: '학교 안팎·온라인을 가리지 않고 학생을 대상으로 한 피해는 학교폭력이에요. 사과는 시작이고, 책임과 회복까지 가야 해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '주말 학원 앞에서 같은 학교 학생 사이에 일어난 금품갈취는?', options: ['학교 밖이라 학교폭력이 아니다', '학교 안팎에서 학생 대상이라 학교폭력이다', '주말이라 판단할 수 없다'], answer: '학교 안팎에서 학생 대상이라 학교폭력이다' }] },
      }),
      M('activity.analysis', {
        title: '사례 분석 글 쓰기', method: '사례 분석 글 쓰기', tool: 'rubric-writing', minutes: 17,
        levels: { easy: '문단 틀(사실 → 정의 적용 → 결과 → 회복)의 첫머리를 채워 쓴다.', base: '틀 없이 네 단계로 분석해 쓰고 기준표로 점검한다.', challenge: '셋째 문항에서 반대 입장의 의견을 한 문장 넣고 답한다.' },
        activity: {
          title: '사례 분석 글 쓰기', tool: 'rubric-writing',
          teacher: '"\'나쁜 일이다\'라고 쓰는 것과 \'정의의 어느 부분에 해당한다\'고 쓰는 것은 무엇이 다를까요?" 가상 사례(같은 학교 학생 몇이 주말 SNS 단체방에서 한 학생의 사진을 놀림거리로 계속 올린 일)를 읽고 네 단계로 분석하게 한다. "가해 학생 이름을 써야 분석"이라는 학생에게 역할 이름(피해 학생·가해 학생)으로 쓰게 한다. 근거 없는 추측은 쓰지 않게 한다.',
          task: '가상 사례를 사실·법의 정의 적용·결과·회복 방법 순서로 분석해 쓰고 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '1·2단계: 사실과 법의 정의 적용을 쓰세요.', toolOptions: { topic: '가상 사례: 같은 학교 학생 몇이 주말 SNS 단체방에 한 학생의 사진을 놀림거리로 계속 올렸다. 있었던 사실과, 법의 정의 가운데 어디에 해당하는지 두세 문장으로 쓰세요.', minChars: 30, maxChars: 180, minSentences: 2, maxSentences: 3, title: '분석 ① 사실과 정의' }, target: { selfCheck: ['사실만 썼다', '정의의 어느 부분에 해당하는지 썼다', '이름 대신 역할로 썼다'] } },
              { prompt: '틀을 채워 사실과 정의 적용을 쓰세요.', toolOptions: { starter: '(사실) ___. (정의 적용) 이 일은 ___이므로 학교폭력에 해당한다.' } }),
            IT({ prompt: '3·4단계: 결과와 회복 방법을 쓰세요.', toolOptions: { topic: '이 사례가 누구에게 어떤 결과를 남기는지, 어떻게 회복할 수 있는지 두세 문장으로 쓰세요.', minChars: 30, maxChars: 180, minSentences: 2, maxSentences: 3, title: '분석 ② 결과와 회복' }, target: { selfCheck: ['결과를 두 사람 이상에게서 찾았다', '회복 방법을 구체적으로 썼다', '사과 너머의 책임을 썼다'] } },
              { prompt: '틀을 채워 결과와 회복을 쓰세요.', toolOptions: { starter: '(결과) ___에게 ___이 남는다. (회복) ___이 필요하다.' } }),
            IT({ prompt: '네 단계를 이어 사례 분석 글을 완성하세요.', toolOptions: { topic: '사실 → 정의 적용 → 결과 → 회복 순서로 사례 분석 글을 완성하세요.', minChars: 60, maxChars: 260, minSentences: 4, maxSentences: 5, title: '사례 분석 글' }, target: { selfCheck: ['네 단계가 차례로 들어갔다', '근거를 정의에서 찾았다', '추측을 쓰지 않았다'], mustInclude: [['학생', '안팎', '사이버']] } },
              { prompt: '틀을 채워 사례 분석 글을 완성하세요.', toolOptions: { minChars: 50, starter: '(사실) ___. (정의) ___이므로 학교폭력이다. (결과) ___. (회복) ___.' } },
              { prompt: '반대 의견 "주말 SNS 일은 학교와 상관없다"를 넣고 답하는 문장을 더해 완성하세요.', toolOptions: { maxSentences: 6, minSentences: 5 }, target: { selfCheck: ['네 단계가 차례로 들어갔다', '근거를 정의에서 찾았다', '추측을 쓰지 않았다', '반대 의견을 넣고 정의로 답했다'], mustInclude: [['학생', '안팎', '사이버']] } },
              { conclude: '좋은 사례 분석은 사실과 추측을 나누고, 근거를 법의 정의에서 찾고, 결과와 회복까지 이어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '사례 분석 글에서 정의를 적용한 문장을 옮겨 써요.' }] },
      }),

      // ---- 정리 ----
      M('wrap.recover', {
        title: '사건 뒤 회복 과정', method: '사건 뒤 회복 과정 놓기', tool: 'timeline', minutes: 6,
        levels: { easy: '카드 3장(멈춤·사과·관계 회복)을 차례로 놓는다.', base: '카드 4장(책임 더함)을 차례로 놓는다.', challenge: '건너뛰면 안 되는 단계를 고른다(둘째 출구 질문).' },
        wrap: {
          teacher: '"사과 다음에 바로 \'다시 친하게\'로 가도 될까요?" 카드를 놓은 뒤 책임 단계가 왜 사과와 회복 사이에 있는지 말하게 한다. 관계 회복은 피해 학생이 원할 때 하는 것이지, 억지로 화해시키는 것이 아니라는 점을 짚는다.',
          exitTicket: [
            IT(X('timeline', OB('사건 뒤 회복 과정을 차례대로 놓아요.', [{ id: 'r1', text: '폭력 멈추기' }, { id: 'r2', text: '진심으로 사과하기' }, { id: 'r3', text: '돌려주기·책임지기' }, { id: 'r4', text: '피해 학생이 원하면 관계 회복' }], { axis: ['사건 직후', '그 뒤'] }), { difficulty: 0.2 }),
              OB('회복 과정 3장을 차례대로 놓아요.', [{ id: 'r1', text: '폭력 멈추기' }, { id: 'r2', text: '진심으로 사과하기' }, { id: 'r4', text: '피해 학생이 원하면 관계 회복' }], { axis: ['사건 직후', '그 뒤'] })),
            { type: 'choice', prompt: '회복 과정에서 건너뛰면 안 되는 단계는?', options: ['돌려주기·책임지기', '사진 찍어 남기기', '없다, 사과만 하면 된다'], answer: 0, difficulty: 0.2, explain: '책임 없이 사과만 하면 피해가 그대로 남아요.' },
            { type: 'short', prompt: '관계 회복을 억지로 하면 안 되는 까닭을 한 문장으로 써요.' },
          ],
        },
        worksheet: {
          title: '사건 뒤 회복 과정',
          items: [
            { type: 'table', prompt: '회복 과정을 차례대로 써요.', columns: ['차례', '할 일'], cells: [['1', ''], ['2', ''], ['3', ''], ['4', '']], answer: '멈추기, 사과, 책임(돌려주기), 피해 학생이 원하면 관계 회복' },
            { type: 'short', prompt: '\'사과만 하면 끝난다\'를 반박하는 문장을 써요.' },
          ],
        },
      }),
      M('wrap.check', {
        title: '나의 책임 점검표', method: '나의 책임 점검표', tool: 'kitchen', minutes: 6,
        levels: { easy: '항목 3개(알맞은 것 2개·함정 1개)에서 지킬 것에 표시한다.', base: '항목 5개(알맞은 것 3개·함정 2개)에서 표시한다.', challenge: '공동체 차원의 항목을 하나 더 고른다(둘째 출구 질문).' },
        wrap: {
          teacher: '"오늘 배운 정의와 결과를 떠올리면, 내가 지킬 책임은 무엇일까요?" 점검표에 \'학교 밖 일은 모른 척\' 같은 함정이 섞여 있다고 말한다. 함정을 고른 학생에게 정의 문장의 \'안팎\'을 다시 읽게 한다.',
          exitTicket: [
            IT(X('kitchen', CL('지킬 책임에만 표시해요.', '나의 책임', [
              { id: 'k1', text: '"장난이었다"는 말로 넘기지 않는다', ok: true }, { id: 'k2', text: '학교 밖·온라인 일도 알린다', ok: true }, { id: 'k3', text: '잘못하면 사과와 책임을 함께 진다', ok: true },
              { id: 'k4', text: '학교 밖 일은 모른 척한다' }, { id: 'k5', text: '사과만 하면 끝낸다' }]), { difficulty: 0.15 }),
              CL('지킬 책임에만 표시해요(3개).', '나의 책임', [
                { id: 'k1', text: '"장난이었다"는 말로 넘기지 않는다', ok: true }, { id: 'k2', text: '학교 밖·온라인 일도 알린다', ok: true }, { id: 'k4', text: '학교 밖 일은 모른 척한다' }])),
            { type: 'choice', prompt: '공동체 차원에서 할 수 있는 일로 가장 알맞은 것은?', options: ['학급에서 함께 지킬 약속을 세운다', '사건을 아무도 모르게 덮는다', '피해 학생에게 참으라고 한다'], answer: 0, difficulty: 0.15, explain: '공동체가 함께 약속을 세우면 다시 일어나지 않게 막을 수 있어요.' },
            { type: 'mood', prompt: '오늘 수업을 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '나의 책임',
          items: [
            { type: 'check', prompt: '지킬 책임에 표시해요.', options: ['장난이라는 말로 넘기지 않기', '학교 밖·온라인 일도 알리기', '사과와 책임 함께 지기'] },
            { type: 'short', prompt: '우리 학급이 함께 지킬 약속을 하나 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 9학년 · 사이버폭력 대응, 남기고 막고 알리기 (saf-violence.m.cyber-response) ====
  {
    const M = MK('cyber-response', [9]);
    const STEP5 = [{ id: 's1', text: '증거 남기기(화면 저장·날짜·방 이름)' }, { id: 's2', text: '차단하기' }, { id: 's3', text: '믿을 어른에게 알리기' }, { id: 's4', text: '117·학교·112에 신고하기' }, { id: 's5', text: '마음 돌보기(상담 이어 가기)' }];
    const HELP2 = ['도움이 됨', '상황을 키움'];
    const ACTS = [
      { id: 'g1', text: '화면을 저장해 둔다', to: '도움이 됨' }, { id: 'g2', text: '선생님께 저장한 화면을 보낸다', to: '도움이 됨' }, { id: 'g3', text: '피해 친구에게 "네 잘못 아니야"라고 보낸다', to: '도움이 됨' },
      { id: 'g4', text: '신고 기능으로 글을 신고한다', to: '도움이 됨' }, { id: 'b1', text: '같이 욕하며 맞받아친다', to: '상황을 키움' }, { id: 'b2', text: '보복 글을 올린다', to: '상황을 키움' },
      { id: 'b3', text: '창피해서 증거를 모두 지운다', to: '상황을 키움' }, { id: 'b4', text: '놀림 글을 다른 방에 퍼 나른다', to: '상황을 키움' },
    ];
    const D1 = { text: '서준의 프로필 사진을 놀림용으로 고친 그림이 학년 단톡방에 돌고 있다. 화가 난 친구 도윤이 "우리도 걔네 사진 고쳐서 올리자"라고 한다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'revenge', text: '"좋아, 똑같이 갚아 주자"라고 한다', result: '보복 그림이 올라오고 단톡방이 싸움판이 된다.', impact: [{ who: '서준', text: '놀림이 더 커진다', tone: -1 }], why: '보복하면 상황이 커지고 나도 가해자가 될 수 있어요.', end: '보복으로 싸움이 커졌어요.',
        next: { text: '상대 쪽이 더 심한 그림을 올리고, 서준이 "제발 그만해"라고 한다.', ask: '이제 어떻게 할까?', choices: [
          { id: 'more', text: '지지 않으려고 또 올린다', result: '두 쪽 모두 학교 절차를 밟게 된다.', impact: [{ who: '나', text: '가해 행동의 책임을 진다', tone: -1 }], why: '보복을 거듭하면 나도 책임을 져야 해요.', end: '보복이 계속됐어요.',
            next: { text: '담임 선생님이 단톡방 일을 알게 되셨다.', choices: [
              { id: 'blame', text: '"쟤들이 먼저 했어요"라고만 한다', result: '내가 올린 그림도 기록에 남아 있다.', impact: [{ who: '나', text: '책임을 피하지 못한다', tone: -1 }], why: '먼저 했든 아니든 내가 올린 것은 내 책임이에요.' },
              { id: 'own', text: '내가 올린 것을 인정하고 지운 뒤 서준에게 사과한다', result: '선생님과 함께 회복 방법을 정한다.', impact: [{ who: '서준', text: '놀림이 멈추기 시작한다', tone: 1 }], why: '인정은 잘했지만, 처음부터 보복하지 않았다면 더 좋았어요.' }] } },
          { id: 'stopnow', text: '보복 그림을 지우고 화면을 저장해 선생님께 알린다', result: '선생님이 두 쪽 모두와 이야기하신다.', impact: [{ who: '서준', text: '보호를 받는다', tone: 1 }], end: '늦었지만 멈추고 알렸어요.',
            next: { text: '도윤이 "넌 왜 우리 편 안 들어?"라고 한다.', choices: [
              { id: 'explain', text: '"서준이 편이라서 그래. 갚으면 서준이 더 힘들어져"', result: '도윤도 보복을 멈춘다.', impact: [{ who: '서준', text: '편이 늘어난다', tone: 1 }] },
              { id: 'back', text: '도윤 눈치가 보여 다시 보복에 낀다', result: '싸움이 다시 커진다.', impact: [{ who: '서준', text: '다시 상처받는다', tone: -1 }], why: '서준의 편은 보복이 아니라 멈춤과 알림이에요.' }] } }] } },
      { id: 'evidence', text: '"갚지 말고 증거를 남기자"며 화면을 저장한다', result: '그림이 올라온 날짜와 방 이름이 남는다.', impact: [{ who: '서준', text: '도움받을 근거가 생긴다', tone: 1 }], end: '증거를 남겼어요.',
        next: { text: '도윤이 "증거만 남기면 뭐 해, 답답해"라고 한다.', ask: '다음에 무엇을 할까?', choices: [
          { id: 'tell', text: '서준과 함께 저장한 화면을 담임 선생님께 보낸다', result: '선생님이 그림을 내리게 하고 절차를 시작한다.', impact: [{ who: '서준', text: '보호를 받는다', tone: 1 }], end: '증거를 들고 어른에게 알렸어요.',
            next: { text: '서준이 "내가 사진을 올린 게 잘못이었나 봐"라고 한다.', choices: [
              { id: 'notyou', text: '"네 잘못 아니야. 고쳐서 돌린 쪽이 잘못이야"', result: '서준이 조금 마음을 놓는다.', impact: [{ who: '서준', text: '자기 탓을 덜어 낸다', tone: 1 }] },
              { id: 'agree', text: '"다음엔 프로필 사진 올리지 마"', result: '서준이 더 움츠러든다.', impact: [{ who: '서준', text: '자기 탓이라고 느낀다', tone: -1 }], why: '피해자에게 조심하라고 하면 탓하는 말이 돼요.' }] } },
          { id: 'wait', text: '알아서 사라지길 기다린다', result: '그림이 다른 방으로 옮겨 간다.', impact: [{ who: '서준', text: '피해가 번진다', tone: -1 }], why: '증거를 남긴 뒤에는 바로 알려야 막을 수 있어요.' }] } },
      { id: 'leave', text: '휴대전화를 끄고 아무것도 하지 않는다', result: '그림은 계속 돈다.', impact: [{ who: '서준', text: '혼자 견딘다', tone: -1 }], why: '보지 않는다고 사라지지 않아요. 남기고 알려요.', ending: '아무것도 하지 않아 그림이 계속 돌았어요.' }] };
    const R1 = [{ id: 'r1', text: '보복하면 상황이 커지고 나도 가해자가 될 수 있다' }, { id: 'r2', text: '증거를 남기고 어른에게 알리면 멈출 수 있다' },
      { id: 'r3', text: '똑같이 갚아 주면 해결된다', why: '보복은 피해를 키우고 책임을 늘려요.' }, { id: 'r4', text: '피해자가 사진을 안 올렸으면 됐다', why: '피해자는 잘못이 없어요.' }];
    const R1C = { reasons: [{ id: 'r5', text: '서준 입장에서 보복은 놀림을 더 키울 뿐이었다' }, { id: 'r6', text: '서준에게 필요한 것은 멈춤과 지지였다' }], ok: ['r5', 'r6'] };

    ALL.push(
      // ---- 도입 ----
      M('intro.case', {
        title: '서준이 처음 한 행동', method: '합성 놀림 사진 사례 이야기 읽기', tool: 'story', minutes: 6,
        levels: { easy: '교사가 이야기 칸 3개만 보이며 함께 고른다.', base: '시연 판의 이야기 칸 5개에서 서준이 처음 한 행동 칸을 고른다.', challenge: '그 행동이 상황을 키웠는지 줄였는지 짝과 말한다.' },
        intro: {
          teacher: '"자기 사진이 놀림용으로 고쳐져 도는 걸 본 서준은 처음에 무엇을 했을까요?" 이야기 칸을 넘겨 보이고, 시연 단추로 \'화면을 저장했다\' 칸이 바구니에 담기는 모습을 보인다. "나라면 바로 지우고 잊겠다"는 말이 나오면 "지우면 나중에 무엇이 있었는지 어떻게 보여 줄까요?"라고 되묻는다. 오늘은 남기고, 막고, 알리는 차례와 보복이 왜 상황을 키우는지 다룬다고 밝힌다.',
          student: '가상 인물 서준의 이야기 칸을 보고 서준이 처음 한 행동을 골라요. 그 행동이 상황을 키웠는지 줄였는지 생각해요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '서준이 처음 한 행동', title: '서준의 이야기(가상)', cards: [
            { id: 'c1', text: '학년 단톡방에 고친 사진이 돈다', motif: 'storm' }, { id: 'c2', text: '서준이 화면을 저장했다', motif: 'star' },
            { id: 'c3', text: '친구들이 \'ㅋㅋ\'를 단다', motif: 'cloud' }, { id: 'c4', text: '서준이 담임 선생님께 화면을 보냈다', motif: 'leaf' }, { id: 'c5', text: '선생님이 그림을 내리게 했다', motif: 'sun' }], shuffle: false }, sequence: [{ pick: ['c2'] }] },
          art: { draw: 'a paper-cut phone screen showing a doodled-over profile picture, a student pressing a screenshot button with a determined face', banner: '먼저 남겨요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '사진 내용은 \'놀림용으로 고친 그림\'까지만 말한다. ' + SAFE_NOTE,
      }),
      M('intro.settings', {
        title: '내 계정 안전 설정 점검', method: '내 계정 안전 설정 점검', tool: 'kitchen', minutes: 6,
        levels: { easy: '교사가 항목 3개만 읽어 주며 함께 표시한다.', base: '시연 판의 항목 5개를 점검한다.', challenge: '지금 바꿀 설정 하나를 마음속으로 고른다.' },
        intro: {
          teacher: '"내 프로필 사진은 지금 누가 볼 수 있을까요?" 시연 단추로 점검표에 표시되는 모습을 보이고, 학생은 소리 내지 않고 자기 설정을 떠올리게 한다. "설정은 귀찮아서 다 열어 뒀다"는 말이 나오면 "모르는 사람이 내 사진을 가져가 고칠 수 있다면 어떨까요?"라고 되묻는다. 설정은 피해를 줄이는 방법일 뿐이고, 사이버폭력의 잘못은 언제나 괴롭힌 쪽에 있다고 분명히 한다.',
          student: '프로필 공개 범위, 메시지 허용 범위 같은 설정 항목을 점검하고, 지금 바꿀 설정 하나를 떠올려요.',
          demo: { tool: 'kitchen', options: { mode: 'checklist', title: '내 계정 안전 설정', items: [
            { id: 'k1', text: '프로필 사진 공개 범위: 친구만' }, { id: 'k2', text: '모르는 사람 메시지 막기' }, { id: 'k3', text: '단톡방 초대는 허락 후에만' },
            { id: 'k4', text: '위치 공유 끄기' }, { id: 'k5', text: '신고·차단 메뉴 위치 알아 두기' }] }, sequence: [{ checklist: ['k1', 'k2', 'k3', 'k4', 'k5'] }] },
          art: { draw: 'a paper-cut phone settings screen with toggle switches and a small padlock, a student adjusting them', banner: '내 계정은 내가 지켜요', extra: [{ motif: 'leaf', x: 300, y: 96 }] },
        },
        notes: '설정 항목 이름은 앱마다 다르다. 실제 앱의 메뉴 이름은 교사가 따로 확인한다.',
      }),

      // ---- 활동 ----
      M('activity.steps', {
        title: '사이버폭력 대응 차례', method: '대응 차례 놓기', tool: 'timeline', minutes: 16,
        levels: { easy: '카드 3장(증거 남기기·차단하기·어른에게 알리기)을 시간 띠에 놓는다.', base: '카드 5장을 차례로 놓는다.', challenge: '셋째 문항에서 차단을 먼저 하면 생길 수 있는 문제를 골라 담는다.' },
        activity: {
          title: '사이버폭력 대응 차례', tool: 'timeline',
          teacher: '"차단부터 하면 안 될까요?" 카드를 놓은 뒤 증거 남기기가 왜 맨 앞인지 말하게 한다 — 차단하거나 방을 나가면 대화가 안 보일 수 있다. "증거는 지워야 마음이 편하다"는 학생에게 "마음이 편해지는 것도 중요해요. 그래서 마지막에 \'마음 돌보기\'가 있어요. 지우기 전에 어른에게 먼저 보여 줘요"라고 말해 준다.',
          task: '사이버폭력이 일어났을 때 할 대응 카드를 시간 차례로 놓아요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(OB('사이버폭력 대응을 차례대로 놓으세요.', STEP5, { axis: ['알게 된 순간', '그 뒤'] }),
              OB('사이버폭력 대응 3장을 차례대로 놓으세요.', STEP5.slice(0, 3), { axis: ['알게 된 순간', '그 뒤'] })),
            IT(MB('증거를 남길 때 챙길 것을 이어 보세요.', [['무엇이', '글·그림이 보이는 화면 저장'], ['언제', '올라온 날짜와 시각'], ['어디서', '대화방·게시판 이름'], ['누가', '올린 계정 이름']], ['내가 화가 난 정도'], { axis: ['처음', '나중'] }),
              MB('증거를 남길 때 챙길 것 두 가지를 이어 보세요.', [['무엇이', '글·그림이 보이는 화면 저장'], ['언제', '올라온 날짜와 시각']], [], { axis: ['처음', '나중'] })),
            IT(PB('대응하면서 하지 말아야 할 행동만 골라 담으세요.', '하지 말 것', [
              { id: 'n1', text: '보복 글 올리기', ok: true }, { id: 'n2', text: '알리기 전에 증거 지우기', ok: true }, { id: 'n3', text: '화면 저장하기' }]),
              null,
              PB('차단을 먼저 하면 생길 수 있는 문제만 골라 담으세요.', '차단을 먼저 하면', [
                { id: 'q1', text: '대화가 안 보여 증거를 못 남길 수 있다', ok: true }, { id: 'q2', text: '언제 무엇이 있었는지 나중에 보여 주기 어렵다', ok: true },
                { id: 'q3', text: '아무 문제 없다' }, { id: 'q4', text: '상대가 더 친절해진다' }]),
              { conclude: '사이버폭력에는 남기고(증거), 막고(차단), 알리고(어른·117·112), 마음을 돌보는 차례로 대응해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '증거 남기기를 차단보다 먼저 하는 까닭을 한 문장으로 써요.' }] },
      }),
      M('activity.helpful', {
        title: '도움이 됨과 상황을 키움', method: '행동을 ‘도움이 됨’과 ‘상황을 키움’으로 나누기', tool: 'mindmap', minutes: 17,
        levels: { easy: '행동 카드 5장을 두 가지에 나누고, 놓으면 바로 맞는지 알려 준다.', base: '행동 카드 8장을 두 가지에 나눈다.', challenge: '셋째 문항에서 상황에 따라 달라지는 행동의 조건을 나눈다.' },
        activity: {
          title: '도움이 됨과 상황을 키움', tool: 'mindmap',
          teacher: '"\'방 나가기\'는 도움이 될까요, 상황을 키울까요?" 카드를 놓을 때마다 피해 친구 입장에서 그 행동이 어떻게 보일지 말하게 한다. "같이 욕해 줘야 친구 편"이라는 학생에게 "같이 욕하면 피해 친구를 향한 공격이 줄어들까요, 늘어날까요?"라고 되묻는다. 방 나가기처럼 조건에 따라 달라지는 행동도 있다는 것을 셋째 문항에서 다룬다.',
          task: '사이버폭력이 일어났을 때의 행동 카드를 \'도움이 됨\'과 \'상황을 키움\' 가지에 나누고, 조건에 따라 달라지는 행동을 찾아요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('행동 카드를 두 가지에 나누세요.', HELP2, ACTS, { topic: '사이버폭력이 일어났을 때' }),
              SB('행동 카드 5장을 두 가지에 나누세요.', HELP2, pickCards(ACTS, ['g1', 'g2', 'b1', 'b2', 'b3']), { topic: '사이버폭력이 일어났을 때' })),
            IT(MB('상황을 키우는 행동마다 대신 할 행동을 이어 보세요.', [['같이 욕하며 맞받아친다', '대꾸하지 않고 화면 저장'], ['보복 글을 올린다', '선생님께 알리기'], ['증거를 모두 지운다', '어른에게 보여 준 뒤 정리']], ['더 센 말로 이기기'], { topic: '대신 이렇게' }),
              MB('상황을 키우는 행동 두 개에 대신 할 행동을 이어 보세요.', [['같이 욕하며 맞받아친다', '대꾸하지 않고 화면 저장'], ['보복 글을 올린다', '선생님께 알리기']], [], { topic: '대신 이렇게' })),
            IT(PB('피해 친구에게 도움이 되는 행동만 골라 담으세요.', '피해 친구에게 도움', [
              { id: 'p1', text: '따로 "네 잘못 아니야"라고 보내기', ok: true }, { id: 'p2', text: '함께 선생님께 가기', ok: true }, { id: 'p3', text: '"너도 뭐라 했겠지"라고 묻기' }]),
              null,
              SB('같은 행동이라도 조건에 따라 달라져요. 알맞게 나누세요.', HELP2, [
                { id: 'e1', text: '방 나가기(증거를 남기고 어른에게 알린 뒤)', to: '도움이 됨' }, { id: 'e2', text: '방 나가기(증거 없이 혼자 숨기)', to: '상황을 키움' },
                { id: 'e3', text: '단톡방에 쓰기("그만하자")', to: '도움이 됨' }, { id: 'e4', text: '단톡방에 쓰기(욕으로 맞받아침)', to: '상황을 키움' }], { topic: '조건이 바뀌면' }),
              { conclude: '같이 욕하거나 보복하면 상황이 커져요. 대꾸하지 않고 남기고, 어른에게 알리고, 피해 친구 곁에 서요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '상황을 키우는 행동과 대신 할 행동을 써요.', columns: ['상황을 키우는 행동', '대신 할 행동'], cells: [['보복 글 올리기', ''], ['증거 지우기', '']], answer: '선생님께 알리기, 어른에게 보여 준 뒤 정리' }] },
      }),
      M('activity.revenge', {
        title: '보복 글을 올릴까 갈림길', method: '보복 글을 올릴까 갈림길', tool: 'dilemma', minutes: 16,
        levels: { easy: '갈림 2번까지 가고, 고를 때마다 서준에게 생기는 영향이 바로 보인다.', base: '갈림 3번까지 가고, 영향 표시는 맞힌 뒤에만 보인다. 끝에서 근거를 고른다.', challenge: '갈림 3번 뒤 보복을 고른 길의 결과를 피해 학생 입장에서 다시 보는 근거 카드까지 고른다.' },
        activity: {
          title: '보복 글을 올릴까 갈림길', tool: 'dilemma',
          teacher: '"똑같이 갚아 주면 서준은 정말 편해질까요?" 학생마다 한 길을 끝까지 가 본 뒤 보복한 길과 증거를 남긴 길을 견주게 한다. "먼저 한 쪽이 잘못이니 갚아도 된다"는 학생에게 "내가 올린 보복 그림은 누구의 책임이 될까요?"라고 되묻는다. 서준에게 조심하라고 말하는 길도 짚어, 피해자는 잘못이 없다는 점을 분명히 한다.',
          task: '화가 난 친구가 보복 글을 올리자고 할 때 길을 골라 결과를 따라가고, 끝에서 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL({ easy: '친구가 보복하자고 해요. 두 번 골라 결과를 보고 근거를 고르세요.', base: '친구가 보복하자고 해요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 간 뒤, 서준 입장에서 다시 보는 근거까지 고르세요.' },
              '보복할까?', D1, [['evidence', 'tell', 'notyou'], ['revenge', 'stopnow', 'explain']], R1, ['r1', 'r2'], R1C),
            IT({ prompt: '익명 계정으로 받은 욕설 메시지 장면을 따라가세요.', toolOptions: { title: '익명 계정의 욕설', scene: { text: '모르는 익명 계정이 밤마다 욕설 메시지를 보낸다.', ask: '어떻게 할까?', motif: 'house', choices: [
              { id: 'save', text: '화면을 저장하고 차단·신고한 뒤 보호자와 117에 알린다', result: '어른들과 함께 대응한다.', impact: [{ who: '나', text: '혼자가 아니다', tone: 1 }], ending: '남기고 막고 알렸어요.' },
              { id: 'reply', text: '누군지 알아내려고 욕으로 답장한다', result: '상대가 더 심한 말을 보낸다.', impact: [{ who: '나', text: '더 상처받는다', tone: -1 }], why: '대꾸하면 상대가 더 세게 나와요. 남기고 알려요.' }] }, reasons: [{ id: 'q1', text: '익명이어도 증거를 남기면 어른이 도울 수 있다' }, { id: 'q2', text: '익명이면 아무것도 할 수 없다', why: '저장한 증거로 신고와 상담을 할 수 있어요.' }], compare: true },
              target: { path: [['save']], reasons: ['q1'] } }),
            IT({ prompt: '단톡방에 피해 친구 편을 들 때의 장면을 따라가세요.', toolOptions: { title: '편드는 방법', scene: { text: '서준을 놀리는 글이 계속 올라온다. 나는 서준 편을 들고 싶다.', ask: '어떻게 편을 들까?', motif: 'house', choices: [
              { id: 'support', text: '서준에게 따로 지지 메시지를 보내고 선생님께 알린다', result: '서준이 혼자가 아니라고 느끼고, 놀림이 멈추기 시작한다.', impact: [{ who: '서준', text: '힘을 얻는다', tone: 1 }], ending: '지지하고 알리는 방법으로 편을 들었어요.' },
              { id: 'attack', text: '놀린 친구들의 약점을 단톡방에 올린다', result: '싸움이 커지고 서준이 더 곤란해진다.', impact: [{ who: '서준', text: '싸움 한가운데 놓인다', tone: -1 }], why: '편을 드는 것은 공격이 아니라 지지와 알림이에요.' }] }, reasons: [{ id: 'p1', text: '피해 친구 편은 공격이 아니라 지지와 알림이다' }, { id: 'p2', text: '이기려면 더 세게 공격해야 한다', why: '공격은 피해를 키워요.' }], compare: true },
              target: { path: [['support']], reasons: ['p1'] }, conclude: '보복은 상황을 키우고 나도 가해 행동의 책임을 지게 해요. 남기고, 막고, 알리고, 피해 친구를 지지해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '"똑같이 갚아 주면 해결된다"는 말에 대한 생각으로 가장 알맞은 것은?', options: ['맞다, 갚아야 멈춘다', '보복하면 상황이 커지고 나도 책임을 진다', '먼저 한 쪽만 책임진다'], answer: '보복하면 상황이 커지고 나도 책임을 진다' }] },
      }),
      M('activity.report', {
        title: '가상 사례 신고 내용 쓰기', method: '가상 사례 신고 내용 쓰기', tool: 'rubric-writing', minutes: 17,
        levels: { easy: '항목 칸(언제·어디서·무엇을·증거)이 나뉜 틀을 채워 쓴다.', base: '칸 없이 사실 중심으로 쓰고 기준표로 점검한다.', challenge: '셋째 문항에서 감정과 사실이 섞인 문장을 골라 사실 문장으로 고친다.' },
        activity: {
          title: '가상 사례 신고 내용 쓰기', tool: 'rubric-writing',
          teacher: '"\'걔네가 진짜 최악이에요\'와 \'O월 O일 학년 단톡방에 서준 사진을 고친 그림이 올라왔어요\' 가운데 어느 문장이 도움이 될까요?" 가상 사례를 읽고 사실 중심 신고 내용을 쓰게 한다. "감정을 쓰면 안 되나요?"라는 학생에게 "감정도 중요해요. 다만 사실과 나눠 쓰면 읽는 사람이 무엇이 있었는지 정확히 알아요"라고 말해 준다. 실제 이름·계정 대신 역할 이름으로 쓰게 한다.',
          task: '가상 사례(서준의 사진이 고쳐져 단톡방에 돈 일)를 읽고 신고 내용을 사실 중심으로 쓴 뒤 기준표(언제·어디서·무엇을·증거)로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '언제·어디서 일어났는지 쓰세요.', toolOptions: { topic: '가상 사례: 서준의 프로필 사진이 놀림용으로 고쳐져 학년 단톡방에 올라왔다. 언제·어디서 일어났는지 한두 문장으로 쓰세요(날짜는 \'어제 저녁\'처럼).', minChars: 12, maxChars: 120, minSentences: 1, maxSentences: 2, title: '신고 ① 언제·어디서' }, target: { selfCheck: ['언제인지 썼다', '어느 대화방인지 썼다'] } },
              { prompt: '칸을 채워 언제·어디서를 쓰세요.', toolOptions: { starter: '(언제) ___에 (어디서) ___에서 일어났어요.' } }),
            IT({ prompt: '무엇이 있었는지와 증거를 쓰세요.', toolOptions: { topic: '무엇이 올라왔는지, 어떤 증거를 남겼는지 두 문장으로 쓰세요.', minChars: 20, maxChars: 140, minSentences: 2, maxSentences: 3, title: '신고 ② 무엇을·증거' }, target: { selfCheck: ['무엇이 있었는지 사실로 썼다', '남긴 증거를 썼다', '이름 대신 역할로 썼다'] } },
              { prompt: '칸을 채워 무엇을·증거를 쓰세요.', toolOptions: { starter: '(무엇을) ___이 올라왔어요. (증거) ___을 저장해 두었어요.' } }),
            IT({ prompt: '앞의 글을 이어 신고 내용을 완성하세요.', toolOptions: { topic: '언제·어디서·무엇을·증거와 원하는 도움을 이어 신고 내용을 완성하세요.', minChars: 40, maxChars: 220, minSentences: 3, maxSentences: 4, title: '신고 내용' }, target: { selfCheck: ['언제·어디서가 들어갔다', '무엇이 있었는지가 들어갔다', '증거가 들어갔다'], mustInclude: [['저장', '캡처', '증거']] } },
              { prompt: '칸을 채워 신고 내용을 완성하세요.', toolOptions: { minChars: 30, starter: '___에 ___에서 ___이 올라왔어요. ___을 저장해 두었어요. ___ 도와주세요.' } },
              { prompt: '감정과 사실이 섞인 문장 "걔네가 미친 듯이 서준을 괴롭혔어요"를 사실 문장으로 고치고, 감정은 따로 한 줄로 쓰세요.', toolOptions: { topic: '"걔네가 미친 듯이 서준을 괴롭혔어요"를 사실 문장으로 고치고, 느낀 감정은 따로 한 문장으로 쓰세요.', minChars: 25, maxChars: 160, minSentences: 2, maxSentences: 3, title: '사실과 감정 나누기' }, target: { selfCheck: ['사실 문장으로 고쳤다', '감정을 따로 썼다', '과장하는 말을 뺐다'] } },
              { conclude: '신고 내용은 언제·어디서·무엇을·증거를 사실로 쓰고, 감정은 따로 나눠 쓰면 정확하게 전해져요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '신고 내용에 꼭 들어갈 네 가지를 써요.' }] },
      }),

      // ---- 정리 ----
      M('wrap.support', {
        title: '피해 친구에게 건넬 지지의 말', method: '피해 친구에게 건넬 지지의 말', tool: 'wordcards', minutes: 6,
        levels: { easy: '말 카드 4장을 지지하는 말과 상처를 더하는 말로 가른다.', base: '말 카드 6장을 가른다.', challenge: '지지하는 말 하나를 메시지로 바꿔 쓴다(셋째 출구 질문).' },
        wrap: {
          teacher: '"\'그러게 사진을 왜 올렸어\'는 걱정일까요, 상처일까요?" 카드를 가른 뒤 상처를 더하는 말이 왜 피해 친구를 탓하게 되는지 말하게 한다. 지지하는 말에는 탓하지 않기, 곁에 있기, 도움 함께 찾기가 들어 있다고 짚는다.',
          exitTicket: [
            IT(X('wordcards', SB('말 카드를 두 칸으로 가르세요.', ['지지하는 말', '상처를 더하는 말'], [
              { id: 'w1', text: '"네 잘못 아니야"', to: '지지하는 말' }, { id: 'w2', text: '"같이 선생님께 보내자"', to: '지지하는 말' }, { id: 'w3', text: '"나는 네 편이야"', to: '지지하는 말' },
              { id: 'w4', text: '"그러게 사진을 왜 올렸어"', to: '상처를 더하는 말' }, { id: 'w5', text: '"별것 아니잖아"', to: '상처를 더하는 말' }, { id: 'w6', text: '"똑같이 갚아 줘"', to: '상처를 더하는 말' }]), { difficulty: 0.15 }),
              SB('말 카드 4장을 두 칸으로 가르세요.', ['지지하는 말', '상처를 더하는 말'], [
                { id: 'w1', text: '"네 잘못 아니야"', to: '지지하는 말' }, { id: 'w3', text: '"나는 네 편이야"', to: '지지하는 말' },
                { id: 'w4', text: '"그러게 사진을 왜 올렸어"', to: '상처를 더하는 말' }, { id: 'w5', text: '"별것 아니잖아"', to: '상처를 더하는 말' }])),
            { type: 'choice', prompt: '"증거는 지워야 마음이 편하다"는 말에 대한 생각으로 가장 알맞은 것은?', options: ['맞다, 바로 지운다', '어른에게 보여 준 뒤 정리하고, 마음은 상담으로 돌본다', '증거는 상대에게 보낸다'], answer: 1, difficulty: 0.2, explain: '먼저 남겨 알리고, 마음 돌보기는 따로 해요.' },
            { type: 'short', prompt: '지지하는 말 하나를 피해 친구에게 보낼 메시지로 바꿔 써요.' },
          ],
        },
        worksheet: {
          title: '지지의 말',
          items: [
            { type: 'short', prompt: '피해 친구에게 보낼 지지 메시지를 한 문장으로 써요.' },
            { type: 'check', prompt: '지지하는 말에 들어갈 것에 표시해요.', options: ['탓하지 않기', '곁에 있기', '도움 함께 찾기'] },
          ],
        },
      }),
      M('wrap.self', {
        title: '오늘 배운 대응 스스로 점검', method: '오늘 배운 대응 스스로 점검', tool: 'timer', minutes: 6,
        levels: { easy: '점검 항목 3개(남기기·막기·알리기)에 표시한다.', base: '점검 항목 5개에 표시한다.', challenge: '친구에게 알려 줄 항목 하나를 고른다(둘째 출구 질문).' },
        wrap: {
          teacher: '"오늘 배운 대응 가운데 내일 바로 할 수 있는 것은 무엇인가요?" 점검 항목은 맞히는 문제가 아니라 스스로 할 수 있는지 돌아보는 칸이라고 말한다. 아직 자신 없는 항목이 있으면 그 항목을 다시 한 번 짚어 준다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'timer', options: { title: '사이버폭력 대응 스스로 점검' }, prompt: '오늘 배운 대응을 떠올리며 할 수 있는 것에 스스로 표시해요.', target: { selfCheck: ['화면을 저장해 증거를 남길 수 있다', '차단·신고 기능을 쓸 수 있다', '믿을 어른·117·112에 알릴 수 있다', '보복하지 않을 수 있다', '피해 친구에게 지지의 말을 건넬 수 있다'] }, difficulty: 0.1 },
              { prompt: '대응 세 가지를 할 수 있는지 스스로 표시해요.', target: { selfCheck: ['화면을 저장해 증거를 남길 수 있다', '차단·신고 기능을 쓸 수 있다', '믿을 어른·117·112에 알릴 수 있다'] } }),
            { type: 'choice', prompt: '친구에게 가장 먼저 알려 줄 대응은?', options: ['보복 글 올리기', '화면을 저장해 증거 남기기', '휴대전화 끄고 잊기'], answer: 1, difficulty: 0.15, explain: '남겨 두어야 어른이 도울 수 있어요.' },
            { type: 'mood', prompt: '오늘 수업을 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '남기고 막고 알리기',
          items: [
            { type: 'table', prompt: '대응 차례를 써요.', columns: ['차례', '할 일'], cells: [['남기기', ''], ['막기', ''], ['알리기', '']], answer: '화면 저장(날짜·방 이름), 차단·신고, 믿을 어른·117·112' },
            { type: 'short', prompt: '보복하지 않아야 하는 까닭을 한 문장으로 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 9학년 · 나의 마음 돌봄 계획과 생명존중 캠페인 (saf-violence.m.care-plan) ====
  // 생명존중 캠페인: 방법·도구·장소를 말하지 않는다(안전한 캠페인 표현). 희망과 도움 경로를 담는다.
  {
    const M = MK('care-plan', [9]);
    const RES3 = ['기댈 사람', '힘이 나는 활동', '편한 장소'];
    const RES = [
      { id: 'p1', text: '담임 선생님', to: '기댈 사람' }, { id: 'p2', text: '상담 선생님(Wee 클래스)', to: '기댈 사람' }, { id: 'p3', text: '믿을 수 있는 가족', to: '기댈 사람' },
      { id: 'a1', text: '음악 듣기', to: '힘이 나는 활동' }, { id: 'a2', text: '걷기·운동', to: '힘이 나는 활동' }, { id: 'a3', text: '그림 그리기', to: '힘이 나는 활동' },
      { id: 'l1', text: '학교 도서관', to: '편한 장소' }, { id: 'l2', text: '동네 공원', to: '편한 장소' }, { id: 'l3', text: '상담실', to: '편한 장소' },
    ];
    const SLEEP = [['월·기분4', 7], ['화·기분4', 7], ['수·기분2', 5], ['목·기분2', 5], ['금·기분3', 6], ['토·기분4', 8], ['일·기분4', 8]];
    const CARE = [
      { id: 'g1', text: '하루 7시간 넘게 자기', to: '돌봄 계획에 넣기' }, { id: 'g2', text: '일주일에 세 번 30분 걷기', to: '돌봄 계획에 넣기' },
      { id: 'g3', text: '주말에 친구와 이야기하기', to: '돌봄 계획에 넣기' }, { id: 'g4', text: '좋아하는 그림 그리기', to: '돌봄 계획에 넣기' },
      { id: 'n1', text: '잠을 줄여 밤새 영상 보기', to: '줄일 것' }, { id: 'n2', text: '끼니 거르기', to: '줄일 것' }, { id: 'n3', text: '혼자 참고 아무에게도 말 안 하기', to: '줄일 것' },
    ];

    ALL.push(
      // ---- 도입 ----
      M('intro.week', {
        title: '하람의 한 주 마음', method: '가상 인물의 한 주 마음 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 장면 3개(월·수·토)만 짚으며 마음을 함께 고른다.', base: '시연 판의 장면 5개에서 날마다 마음 낱말을 고른다.', challenge: '마음이 바뀐 까닭을 장면에서 찾아 짝에게 말한다.' },
        intro: {
          teacher: '"하람의 마음은 일주일 내내 같았을까요?" 요일별 장면을 읽고 시연 단추로 날마다 마음 카드가 붙는 모습을 보인다. "힘든 걸 말하면 약해 보인다"는 말이 나오면 "수요일의 하람이 누군가에게 말했다면 목요일은 어땠을까요?"라고 되묻는다. 오늘은 내 마음을 점검하고 사람·활동·장소를 담은 돌봄 계획을 세운다고 밝힌다. 하람은 가상 인물이다.',
          student: '가상 인물 하람의 요일별 장면을 보고 날마다 마음 낱말을 골라요. 마음이 바뀐 까닭도 장면에서 찾아요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [
            { id: 's1', label: '월: 친구와 웃으며 등교' }, { id: 's2', label: '수: 수행평가 세 개가 겹침' }, { id: 's3', label: '목: 잠이 부족해 하루 종일 멍함' },
            { id: 's4', label: '금: 상담 선생님과 이야기함' }, { id: 's5', label: '토: 공원에서 산책' }], cards: ['기쁨', '걱정', '짜증', '편안함', '불안', '고마움', '외로움', '뿌듯함'] }, sequence: [{ match: { s1: '기쁨', s2: '걱정', s3: '짜증', s4: '고마움', s5: '편안함' } }] },
          art: { draw: 'a paper-cut weekly calendar with small scenes for each day and a paper weather icon above each one, a student looking at it', banner: '하람의 한 주', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
        notes: '학생에게 자기 한 주를 발표하게 하지 않는다. ' + SAFE_NOTE,
      }),
      M('intro.graph', {
        title: '하람의 수면과 기분 꺾은선', method: '하람의 수면·기분 꺾은선 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 점마다 값을 읽어 주며 함께 떨어진 날을 찾는다.', base: '값을 말하지 않고 꺾은선과 가로축의 기분 점수로 함께 떨어진 날을 고른다.', challenge: '두 자료의 관계를 단정할 수 없는 까닭(가상 자료·한 주뿐·다른 원인)을 짝과 말한다.' },
        intro: {
          teacher: '"하람의 수면 시간이 줄어든 날, 기분 점수는 어땠을까요?" 수면 시간 꺾은선을 띄우고 가로축 이름에 적힌 기분 점수(5점 만점)를 함께 읽는다. 시연 단추로 수요일을 고르는 모습을 보인다. 자료는 수업용 가상 기록이라고 먼저 밝힌다. "잠을 줄여서 기분이 나빠진 게 확실하다"는 말이 나오면 "수요일엔 수행평가도 겹쳤는데, 잠만이 까닭일까요?"라고 되묻는다.',
          student: '가상 인물 하람의 일주일 수면 꺾은선과 기분 점수를 읽고 함께 떨어진 날을 찾아요. 두 자료의 관계를 단정할 수 있는지도 생각해요.',
          demo: { tool: 'chart', options: { type: 'line', mode: 'read', title: '하람의 수면 시간(가상 기록, 가로축에 기분 점수)', unit: '시간', xLabel: '요일·기분', yLabel: '수면 시간', from: 4, data: SLEEP, question: '수면과 기분이 함께 처음 떨어진 날은?', choices: SLEEP.map((d) => d[0]) }, sequence: [{ pick: 2 }] },
          art: { draw: 'a paper-cut line chart with a dip in the middle of the week, a small moon and cloud above the low points', banner: '함께 떨어진 날은?', extra: [{ motif: 'moon', x: 300, y: 96 }] },
        },
        notes: '그래프 교구가 계열 하나만 그려서 기분 점수는 가로축 이름에 적었다. 값은 모두 가상이다.',
      }),

      // ---- 활동 ----
      M('activity.resources', {
        title: '나의 돌봄 자원 지도', method: '나의 돌봄 자원 지도 만들기', tool: 'mindmap', minutes: 16,
        levels: { easy: '가지 3개와 자원 카드 6장으로 펼치고, 놓으면 바로 맞는지 알려 준다.', base: '가지 3개에 자원 카드 9장을 나누어 펼친다.', challenge: '셋째 문항에서 자원마다 언제 쓸지 짝짓는다(함정이 섞인다).' },
        activity: {
          title: '나의 돌봄 자원 지도', tool: 'mindmap',
          teacher: '"힘든 날 나를 돌봐 줄 것은 사람만일까요?" 가지를 펼친 뒤 사람·활동·장소가 고루 있는지 살피게 한다. "해소는 게임·휴대폰이면 충분하다"는 학생에게 "그것도 하나의 활동이지만, 사람과 장소 가지가 비어 있으면 어떤 날엔 기댈 곳이 없지 않을까요?"라고 되묻는다. 기댈 사람 가지에는 꼭 학교 안 어른 한 명이 들어가게 한다.',
          task: '\'나\'를 가운데 두고 기댈 사람·힘이 나는 활동·편한 장소를 가지로 펼쳐요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('돌봄 자원 카드를 세 가지에 나누어 펼치세요.', RES3, RES, { topic: '나의 돌봄 자원' }),
              SB('돌봄 자원 카드 6장을 세 가지에 나누세요.', RES3, pickCards(RES, ['p1', 'p2', 'a1', 'a2', 'l1', 'l2']), { topic: '나의 돌봄 자원' })),
            IT(PB('힘든 날 기댈 수 있는 사람·곳만 골라 담으세요.', '기댈 수 있는 곳', [
              { id: 'q1', text: '상담 선생님(Wee 클래스)', ok: true }, { id: 'q2', text: '청소년 상담 1388', ok: true }, { id: 'q3', text: '믿을 수 있는 가족', ok: true },
              { id: 'q4', text: '모르는 온라인 계정' }, { id: 'q5', text: '아무도 없다고 혼자 참기' }], { topic: '기댈 곳' })),
            IT(MB('자원마다 쓸 때를 이어 보세요.', [['천천히 걷기', '머리가 복잡할 때'], ['상담 선생님', '힘든 마음이 며칠씩 이어질 때']], ['밤새 영상 보기'], { topic: '언제 쓸까?' }),
              null,
              MB('자원마다 쓸 때를 이어 보세요(함정이 섞였어요).', [['천천히 걷기', '머리가 복잡할 때'], ['음악 듣기', '잠들기 전 긴장될 때'], ['상담 선생님', '힘든 마음이 며칠씩 이어질 때'], ['1388', '누구에게도 말하기 어려울 때']], ['밤새 영상 보기', '혼자 참기'], { topic: '언제 쓸까?' }),
              { conclude: '돌봄 자원은 사람·활동·장소로 고루 갖추고, 언제 쓸지 미리 정해 두면 힘든 날 바로 꺼내 쓸 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '나의 돌봄 자원을 하나씩 써요(사람은 이름 대신 관계로).', columns: ['갈래', '나의 자원'], cells: [['기댈 사람', ''], ['힘이 나는 활동', ''], ['편한 장소', '']] }] },
      }),
      M('activity.budget', {
        title: '일주일 시간으로 돌봄 계획', method: '일주일 시간 예산으로 돌봄 계획 세우기', tool: 'economy', minutes: 17,
        levels: { easy: '활동 카드 4장을 \'돌봄 계획에 넣기\'와 \'줄일 것\'으로 나누고, 놓으면 바로 맞는지 알려 준다.', base: '활동 카드 7장을 나누고, 일주일 계획에 넣을 조합을 고른다.', challenge: '셋째 문항에서 조합을 고른 까닭을 활동지에 한 줄로 쓰고, 시험 주간 계획과 견준다.' },
        activity: {
          title: '일주일 시간으로 돌봄 계획', tool: 'economy',
          teacher: '"일주일 자유 시간이 정해져 있다면, 잠·운동·대화·취미 가운데 무엇을 먼저 넣을까요?" 활동 카드를 나눈 뒤 계획에 넣을 조합을 고르게 한다. "시험 기간엔 잠을 줄이는 게 당연하다"는 학생에게 "하람의 꺾은선에서 잠이 줄어든 날 기분은 어땠나요?"라고 되묻는다. 계획은 지킬 수 있을 만큼 작게 세우는 것이 좋다고 짚는다.',
          task: '일주일 자유 시간을 생각하며 잠·운동·대화·취미 활동 카드를 나누고, 넘치지 않게 돌봄 계획에 넣을 조합을 골라요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('활동 카드를 \'돌봄 계획에 넣기\'와 \'줄일 것\'으로 나누세요.', ['돌봄 계획에 넣기', '줄일 것'], CARE),
              SB('활동 카드 4장을 나누세요.', ['돌봄 계획에 넣기', '줄일 것'], pickCards(CARE, ['g1', 'g2', 'n1', 'n2']))),
            IT(PB('평일 저녁 1시간에 넣을 조합만 골라 담으세요(넘치지 않게).', '평일 저녁 1시간', [
              { id: 'e1', text: '30분 걷기', ok: true }, { id: 'e2', text: '가족과 20분 이야기', ok: true }, { id: 'e3', text: '10분 일기 쓰기', ok: true },
              { id: 'e4', text: '3시간 영상 보기' }, { id: 'e5', text: '새벽까지 게임' }])),
            IT(PB('계획이 오래 가게 하는 방법만 골라 담으세요.', '오래 가는 계획', [
              { id: 'k1', text: '작게 시작하기', ok: true }, { id: 'k2', text: '함께할 사람 정하기', ok: true }, { id: 'k3', text: '하루라도 못 하면 포기하기' }]),
              null,
              SB('평일 계획과 시험 주간 계획을 견주어 나누세요(맞지 않는 카드는 남겨요).', ['평일 계획', '시험 주간 계획'], [
                { id: 'w1', text: '친구와 운동 1시간', to: '평일 계획' }, { id: 'w2', text: '공부 사이 10분 걷기', to: '시험 주간 계획' },
                { id: 'w3', text: '잠은 줄이지 않고 7시간 넘게', to: '시험 주간 계획' }, { id: 'w4', text: '주말 취미 모임', to: '평일 계획' }, { id: 'w5', text: '시험 주간 내내 밤새우기' }]),
              { conclude: '돌봄 계획은 잠·운동·대화·취미를 고루, 지킬 수 있을 만큼 작게 세워요. 바쁜 주일수록 잠과 짧은 쉼은 빼지 않아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내가 고른 돌봄 조합과 그 까닭을 한 줄로 써요.' }] },
        notes: '시장 놀이판의 예산 막대는 돈(원)만 보여 주므로, 일주일 시간 예산은 카드 나누기와 고르기로 꾸몄다.',
      }),
      M('activity.slogan', {
        title: '캠페인 문구 재료 고르기', method: '캠페인 문구 재료 고르기', tool: 'wordcards', minutes: 16,
        levels: { easy: '낱말 카드 4장을 권하는 말과 피해야 할 표현으로 가른다.', base: '낱말 카드 8장을 가르고 문구에 쓸 낱말을 고른다.', challenge: '셋째 문항에서 피해야 할 표현이 왜 위험한지 근거를 잇는다.' },
        activity: {
          title: '캠페인 문구 재료 고르기', tool: 'wordcards',
          teacher: '"생명존중 캠페인에 \'혼자 이겨 내자\'를 쓰면 힘든 친구는 어떻게 느낄까요?" 카드를 가른 뒤 피해야 할 표현이 왜 도움 요청을 막는지 말하게 한다. "강한 말이 눈에 띈다"는 학생에게 "눈에 띄는 것보다 \'말해도 괜찮다\'는 메시지가 전해지는 게 목표예요"라고 말해 준다. 캠페인에는 방법이나 장소를 말하는 표현을 절대 쓰지 않는다는 기준을 먼저 칠판에 적는다.',
          task: '도움 요청을 권하는 낱말 카드와 피해야 할 표현 카드를 가르고, 캠페인 문구에 쓸 낱말을 골라요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('낱말 카드를 두 칸으로 가르세요.', ['권하는 말', '피해야 할 표현'], [
              { id: 'w1', text: '"말해도 괜찮아"', to: '권하는 말' }, { id: 'w2', text: '"함께"', to: '권하는 말' }, { id: 'w3', text: '"도움을 청하는 건 용기"', to: '권하는 말' }, { id: 'w4', text: '"상담 선생님·1388"', to: '권하는 말' },
              { id: 'b1', text: '"혼자 이겨 내야 해"', to: '피해야 할 표현' }, { id: 'b2', text: '"약한 사람만 힘들어해"', to: '피해야 할 표현' }, { id: 'b3', text: '"다들 그러니 참아"', to: '피해야 할 표현' }, { id: 'b4', text: '"이 정도로 힘들어하면 안 돼"', to: '피해야 할 표현' }]),
              SB('낱말 카드 4장을 두 칸으로 가르세요.', ['권하는 말', '피해야 할 표현'], [
                { id: 'w1', text: '"말해도 괜찮아"', to: '권하는 말' }, { id: 'w2', text: '"함께"', to: '권하는 말' }, { id: 'b1', text: '"혼자 이겨 내야 해"', to: '피해야 할 표현' }, { id: 'b2', text: '"약한 사람만 힘들어해"', to: '피해야 할 표현' }])),
            IT(PB('캠페인 문구에 쓸 낱말만 골라 담으세요.', '문구 재료', [
              { id: 'p1', text: '희망', ok: true }, { id: 'p2', text: '곁에', ok: true }, { id: 'p3', text: '이야기해 줘', ok: true }, { id: 'p4', text: '참아' }, { id: 'p5', text: '혼자서' }])),
            IT(MB('피해야 할 표현마다 위험한 까닭을 이어 보세요.', [['"혼자 이겨 내야 해"', '도움을 청하지 못하게 한다'], ['"약한 사람만 힘들어해"', '힘든 사람을 부끄럽게 만든다']], ['눈에 잘 띈다']),
              null,
              MB('피해야 할 표현마다 위험한 까닭을 이어 보세요(함정이 섞였어요).', [['"혼자 이겨 내야 해"', '도움을 청하지 못하게 한다'], ['"약한 사람만 힘들어해"', '힘든 사람을 부끄럽게 만든다'], ['"다들 그러니 참아"', '힘든 마음을 가볍게 여긴다'], ['"이 정도로 힘들어하면 안 돼"', '힘든 마음을 숨기게 만든다']], ['눈에 잘 띈다', '짧아서 좋다']),
              { conclude: '생명존중 캠페인은 희망과 \'도움을 청해도 괜찮다\'를 전하고, 방법·장소를 말하거나 힘든 사람을 부끄럽게 하는 표현은 쓰지 않아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '\'혼자 이겨 내야 해\'를 도움을 권하는 문장으로 바꿔 써요.' }] },
        notes: '안전한 캠페인 표현 기준은 파일 첫머리 \'사람 확인\' 목록에 있다. 피해야 할 표현 카드에도 방법·장소는 넣지 않았다.',
      }),
      M('activity.campaign', {
        title: '생명존중 캠페인 문구 쓰기', method: '생명존중 캠페인 문구 쓰기', tool: 'rubric-writing', minutes: 17,
        levels: { easy: '문구 틀("힘들 땐 ___. ___가 곁에 있어요. ___에 이야기해요")을 채워 쓴다.', base: '틀 없이 문구를 쓰고 기준표(희망 메시지·도움 경로·방법을 말하지 않음)로 점검한다.', challenge: '셋째 문항에서 두 문구를 견주어 고치고 고른 까닭을 쓴다.' },
        activity: {
          title: '생명존중 캠페인 문구 쓰기', tool: 'rubric-writing',
          teacher: '"우리 학교 복도에 붙일 문구 한 줄이 누군가에게 닿는다면, 어떤 말이 좋을까요?" 앞에서 고른 낱말 재료로 문구를 쓰게 한다. 기준표의 \'방법을 말하지 않음\'은 반드시 지키게 하고, 걱정되는 문구가 있으면 수업 뒤 따로 이야기한다. "멋있는 말이 좋다"는 학생에게 희망과 도움 경로가 보이면 충분하다고 말해 준다.',
          task: '생명존중 캠페인 문구를 쓰고 기준표(희망 메시지·도움 경로 포함·방법을 말하지 않음)로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '희망 메시지를 한 줄로 쓰세요.', toolOptions: { topic: '힘든 친구에게 희망을 전하는 캠페인 문구를 한 줄로 쓰세요.', minChars: 8, maxChars: 80, minSentences: 1, maxSentences: 2, title: '문구 ① 희망' }, target: { selfCheck: ['희망이나 함께라는 말이 있다', '방법·장소를 말하지 않았다'] } },
              { prompt: '틀을 채워 희망 문구를 쓰세요.', toolOptions: { starter: '힘들 땐 ___. 우리가 곁에 있어요.' } }),
            IT({ prompt: '도움 경로를 담은 문구를 쓰세요.', toolOptions: { topic: '도움을 청할 수 있는 곳을 담은 문구를 한두 줄로 쓰세요.', minChars: 10, maxChars: 100, minSentences: 1, maxSentences: 2, title: '문구 ② 도움 경로' }, target: { selfCheck: ['도움 경로가 들어갔다', '도움 요청을 용기로 표현했다', '방법·장소를 말하지 않았다'], mustInclude: [['1388', '상담', '선생님', 'Wee']] } },
              { prompt: '틀을 채워 도움 경로 문구를 쓰세요.', toolOptions: { starter: '___에 이야기해요. 말하는 건 ___예요.' } }),
            IT({ prompt: '두 문구를 이어 캠페인 문구를 완성하세요.', toolOptions: { topic: '희망과 도움 경로를 이어 생명존중 캠페인 문구를 완성하세요.', minChars: 20, maxChars: 140, minSentences: 2, maxSentences: 3, title: '생명존중 캠페인 문구' }, target: { selfCheck: ['희망 메시지가 있다', '도움 경로가 있다', '방법·장소를 말하지 않았다'], mustInclude: [['1388', '상담', '선생님', 'Wee']] } },
              { prompt: '틀을 채워 캠페인 문구를 완성하세요.', toolOptions: { minChars: 15, starter: '힘들 땐 ___. ___에 이야기해요. 말하는 건 용기예요.' } },
              { prompt: '두 문구를 견주어 고치고, 고른 까닭을 쓰세요.', toolOptions: { topic: '문구 가: "강해져라, 혼자 이겨 내라!" / 문구 나: "힘들면 말해도 괜찮아요. 상담 선생님과 1388이 함께해요." 더 나은 문구를 고르고, 문구 가를 고친 뒤 까닭을 쓰세요.', minChars: 30, maxChars: 180, minSentences: 2, maxSentences: 3, title: '두 문구 견주기' }, target: { selfCheck: ['더 나은 문구를 골랐다', '문구 가를 도움을 권하게 고쳤다', '까닭을 기준표에 비추어 썼다'] } },
              { conclude: '생명존중 캠페인 문구는 희망과 도움 경로를 담고, 방법·장소를 말하지 않아요. 도움을 청하는 것은 용기예요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내가 만든 생명존중 캠페인 문구를 옮겨 써요.' }] },
        notes: '자살예방 내용이다. 문구에 방법·도구·장소를 쓰지 않도록 기준표로 확인한다. 걱정되는 글은 상담 선생님에게 잇는다.',
      }),

      // ---- 정리 ----
      M('wrap.next', {
        title: '다음 한 주 실천 차례', method: '다음 한 주 실천 차례 놓기', tool: 'timeline', minutes: 6,
        levels: { easy: '할 일 카드 3장을 요일 차례로 놓는다.', base: '할 일 카드 5장을 요일 차례로 놓는다.', challenge: '계획이 어긋날 때의 대안 카드를 덧붙여 짝짓는다(둘째 출구 질문).' },
        wrap: {
          teacher: '"다음 주 월요일부터 일요일까지, 돌봄 계획을 어디에 넣을까요?" 가상 학생 하람의 할 일 카드를 요일 차례로 놓게 한다. "계획이 한 번 어긋나면 다 망친 것"이라는 말에는 "대안을 미리 정해 두면 다시 이어 갈 수 있어요"라고 말해 준다.',
          exitTicket: [
            IT(X('timeline', OB('하람의 다음 한 주 돌봄 할 일을 요일 차례로 놓아요.', [{ id: 'd1', text: '월: 저녁 30분 걷기' }, { id: 'd2', text: '화: 잠들기 전 휴대전화 내려놓기' }, { id: 'd3', text: '수: 상담 선생님과 이야기' }, { id: 'd4', text: '금: 친구와 운동' }, { id: 'd5', text: '일: 다음 주 계획 다시 보기' }], { axis: ['월', '일'] }), { difficulty: 0.15 }),
              OB('하람의 할 일 3장을 요일 차례로 놓아요.', [{ id: 'd1', text: '월: 저녁 30분 걷기' }, { id: 'd3', text: '수: 상담 선생님과 이야기' }, { id: 'd5', text: '일: 다음 주 계획 다시 보기' }], { axis: ['월', '일'] })),
            { type: 'choice', prompt: '비가 와서 월요일 걷기를 못 했을 때 가장 알맞은 대안은?', options: ['이번 주 계획은 포기한다', '집에서 10분 스트레칭으로 바꾼다', '잠을 줄여 밤에 걷는다'], answer: 1, difficulty: 0.15, explain: '대안을 정해 두면 계획을 이어 갈 수 있어요.' },
            { type: 'short', prompt: '내 계획이 어긋날 때 쓸 대안 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '다음 한 주 돌봄 계획',
          items: [
            { type: 'table', prompt: '다음 한 주에 할 돌봄 일을 써요.', columns: ['요일', '할 일'], cells: [['월', ''], ['수', ''], ['주말', '']] },
            { type: 'short', prompt: '계획이 어긋날 때의 대안을 써요.' },
          ],
        },
      }),
      M('wrap.self', {
        title: '돌봄 계획 스스로 점검', method: '돌봄 계획 스스로 점검', tool: 'timer', minutes: 6,
        levels: { easy: '점검 항목 3개(사람·활동·장소)에 표시한다.', base: '점검 항목 4개(언제 쓸지 더함)에 표시한다.', challenge: '빠진 항목을 채울 방법을 고른다(둘째 출구 질문).' },
        wrap: {
          teacher: '"내 돌봄 계획에 사람·활동·장소가 다 들어 있나요?" 점검 항목은 스스로 돌아보는 칸이라고 말하고, 빠진 항목은 오늘 활동지에서 채우게 한다. 사람 칸이 비어 있는 학생에게는 상담 선생님과 1388을 함께 적어 두라고 권한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'timer', options: { title: '돌봄 계획 스스로 점검' }, prompt: '내 돌봄 계획에 들어간 것에 스스로 표시해요.', target: { selfCheck: ['기댈 사람이 들어 있다', '힘이 나는 활동이 들어 있다', '편한 장소가 들어 있다', '언제 쓸지 정해 두었다'] }, difficulty: 0.1 },
              { prompt: '내 돌봄 계획에 사람·활동·장소가 들어 있는지 표시해요.', target: { selfCheck: ['기댈 사람이 들어 있다', '힘이 나는 활동이 들어 있다', '편한 장소가 들어 있다'] } }),
            { type: 'choice', prompt: '기댈 사람 칸이 비어 있을 때 채울 방법으로 가장 알맞은 것은?', options: ['비워 둔다', '상담 선생님(Wee 클래스)이나 1388을 적어 둔다', '모르는 온라인 계정을 적는다'], answer: 1, difficulty: 0.15, explain: '학교와 상담 전화는 언제든 기댈 수 있는 곳이에요.' },
            { type: 'mood', prompt: '오늘 수업을 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '돌봄 계획 점검',
          items: [
            { type: 'check', prompt: '내 돌봄 계획에 들어간 것에 표시해요.', options: ['기댈 사람', '힘이 나는 활동', '편한 장소', '언제 쓸지'] },
            { type: 'short', prompt: '빠진 항목을 어떻게 채울지 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 9학년 · 가정폭력·아동학대 피해자 지원 제도 잇기 (saf-violence.m.family-support) ====
  {
    const M = MK('family-support', [9]);
    const ROUTE4 = ['112', '1388', '학교 상담', '보호 기관'];
    const NEEDS = [
      { id: 'n1', text: '지금 다칠 것 같아 위험하다', to: '112' }, { id: 'n2', text: '집 밖에서 누군가 위협하며 기다린다', to: '112' },
      { id: 'n3', text: '밤에 누군가와 이야기하고 싶다', to: '1388' }, { id: 'n4', text: '학교 밖에서 고민을 상담하고 싶다', to: '1388' },
      { id: 'n5', text: '학교에서 믿을 어른과 먼저 의논하고 싶다', to: '학교 상담' }, { id: 'n6', text: '안전하게 머물 곳이 필요하다', to: '보호 기관' },
    ];
    const TOWN = { grid: [6, 4], title: '가상의 우리 동네', places: [
      { name: '경찰서', icon: 'police', at: [4, 0] }, { name: '청소년상담복지센터', icon: 'office', at: [1, 2] }, { name: '학교 상담실', icon: 'school', at: [2, 0] },
      { name: '아파트 단지', icon: 'apartment', at: [5, 3] }, { name: '공원', icon: 'park', at: [0, 3] }, { name: '도서관', icon: 'library', at: [3, 3] },
    ] };
    const D1 = { text: '하굣길에 친구 지안이 "오늘 집에 가기 싫어. 아무한테도 말하지 마"라고 털어놓는다. 요즘 자주 지쳐 보였다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'secret', text: '"알겠어, 아무한테도 말 안 할게"라고 한다', result: '지안은 그날도 혼자 집에 간다.', impact: [{ who: '지안', text: '도움이 닿지 않는다', tone: -1 }], why: '안전이 걸린 일은 비밀로 하지 않고 어른에게 이어요.', end: '비밀을 지켜 아무도 몰랐어요.',
        next: { text: '다음 날 지안의 팔에 멍이 보인다. 지안은 "넘어졌어"라고만 한다.', ask: '이제 어떻게 할까?', choices: [
          { id: 'askmore', text: '자세히 캐묻는다', result: '지안이 입을 닫는다.', impact: [{ who: '지안', text: '더 말하기 어려워진다', tone: -1 }], why: '캐묻기보다 믿을 어른에게 알려요. 알아보는 일은 어른이 해요.', end: '캐묻다 지안이 입을 닫았어요.',
            next: { text: '지안이 며칠째 결석한다.', choices: [
              { id: 'stillwait', text: '그래도 비밀이니 기다린다', result: '아무도 지안의 상황을 모른다.', impact: [{ who: '지안', text: '혼자 견딘다', tone: -1 }], why: '기다리면 도움이 늦어져요.' },
              { id: 'tellt', text: '담임·상담 선생님께 본 것을 말한다', result: '선생님이 지안의 안전을 살피기 시작한다.', impact: [{ who: '지안', text: '보호가 시작된다', tone: 1 }], why: '알린 것은 잘했어요. 처음 털어놓았을 때 알렸다면 더 빨랐어요.' }] } },
          { id: 'tell', text: '"걱정돼서 그래, 상담 선생님께 같이 가자"라고 한다', result: '지안이 망설이다 고개를 끄덕인다.', impact: [{ who: '지안', text: '어른과 이어진다', tone: 1 }], end: '늦었지만 함께 어른에게 갔어요.',
            next: { text: '지안이 "말하면 우리 가족 흩어지는 거 아냐?"라고 걱정한다.', choices: [
              { id: 'calm', text: '"선생님이 네 안전을 먼저 생각해 도와주실 거야"', result: '지안이 조금 안심하고 상담을 받는다.', impact: [{ who: '지안', text: '안심한다', tone: 1 }] },
              { id: 'scare', text: '"그럴 수도 있겠다…"며 같이 망설인다', result: '지안이 상담실 앞에서 돌아선다.', impact: [{ who: '지안', text: '도움이 미뤄진다', tone: -1 }], why: '보호는 아이의 안전을 위한 것이에요. 지원으로 함께 지내며 돕는 경우도 있어요.' }] } }] } },
      { id: 'listen', text: '"말해 줘서 고마워. 무슨 일인지 말하고 싶은 만큼만 말해 줘"', result: '지안이 집이 무섭다고 조금 털어놓는다.', impact: [{ who: '지안', text: '들어 주는 사람이 있다', tone: 1 }], end: '지안의 이야기를 들어 줬어요.',
        next: { text: '지안이 "그래도 비밀이야"라고 다시 부탁한다.', ask: '어떻게 할까?', choices: [
          { id: 'honest', text: '"너를 지키려면 어른이 알아야 해. 상담 선생님께 같이 가자"', result: '지안과 함께 상담실에 간다.', impact: [{ who: '지안', text: '보호를 받는다', tone: 1 }], end: '솔직하게 말하고 함께 어른에게 갔어요.',
            next: { text: '상담 선생님이 "오늘 집에 가는 게 위험하니?"라고 물으신다.', choices: [
              { id: 'stay', text: '곁에 앉아 지안이 대답할 수 있게 기다린다', result: '선생님이 안전을 확인하고 필요한 곳에 연락하신다.', impact: [{ who: '지안', text: '안전해진다', tone: 1 }] },
              { id: 'answer', text: '지안 대신 내가 짐작해 대답한다', result: '지안의 말이 묻힌다.', impact: [{ who: '지안', text: '자기 이야기를 못 한다', tone: -1 }], why: '곁에 있되 지안이 스스로 말하게 기다려요.' }] } },
          { id: 'keep2', text: '"알겠어, 비밀 지킬게"', result: '지안은 다시 혼자 집에 간다.', impact: [{ who: '지안', text: '위험에 남는다', tone: -1 }], why: '들어 준 것은 좋았지만 안전이 걸리면 어른에게 이어요.' }] } },
      { id: 'joke', text: '"다들 집에 가기 싫지 ㅋㅋ"라고 넘긴다', result: '지안이 더 말하지 않는다.', impact: [{ who: '지안', text: '마음을 닫는다', tone: -1 }], why: '가볍게 넘기면 다시 털어놓기 어려워요.', ending: '지안이 마음을 닫았어요.' }] };
    const R1 = [{ id: 'r1', text: '안전이 걸린 비밀은 지키지 않고 어른에게 잇는다' }, { id: 'r2', text: '알아보고 판단하는 일은 어른이 한다' },
      { id: 'r3', text: '남의 집 일은 모른 척해야 한다', why: '주변 사람도 알릴 수 있어요.' }, { id: 'r4', text: '신고하면 가족이 무조건 흩어진다', why: '보호는 안전을 위한 것이고 지원 방법은 여러 가지예요.' }];
    const R1C = { reasons: [{ id: 'r5', text: '"너를 지키려고"라고 말하면 친구 마음을 지키며 알릴 수 있다' }, { id: 'r6', text: '함께 가 곁에 있으면 친구가 덜 두렵다' }], ok: ['r5', 'r6'] };
    const FLOW = [{ id: 'f1', text: '알림(신고)' }, { id: 'f2', text: '안전 확인' }, { id: 'f3', text: '상담' }, { id: 'f4', text: '보호·지원' }];

    ALL.push(
      // ---- 도입 ----
      M('intro.case', {
        title: '도현의 이야기, 걱정되는 칸', method: '가상 사례 이야기 읽기', tool: 'story', minutes: 6,
        levels: { easy: '교사가 이야기 칸 3개만 보이며 함께 고른다.', base: '시연 판의 이야기 칸 5개에서 걱정되는 칸을 고른다.', challenge: '친구로서 할 수 있는 첫 행동 칸을 짝과 말한다.' },
        intro: {
          teacher: '"도현의 이야기에서 걱정되는 칸은 어디일까요?" 이웃에 사는 가상 학생 도현이 요즘 자주 지쳐 보이는 이야기 칸을 넘겨 보이고, 시연 단추로 \'집에 가기 싫다고 한다\' 칸이 바구니에 담기는 모습을 보인다. "남의 집 일은 모른 척해야 한다"는 말이 나오면 "주변 사람이 알아차리지 않으면 도현은 누구에게 도움을 받을까요?"라고 되묻는다. 오늘은 가정폭력·아동학대가 의심될 때 쓸 수 있는 신고·상담·보호 제도를 잇는다고 밝힌다.',
          student: '가상 학생 도현의 이야기 칸을 보고 걱정되는 칸을 골라요. 친구로서 할 수 있는 첫 행동도 생각해요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '걱정되는 칸', title: '도현의 이야기(가상)', cards: [
            { id: 'c1', text: '도현이 수업 중 자주 존다', motif: 'cloud' }, { id: 'c2', text: '점심을 거의 먹지 않는다', motif: 'leaf' },
            { id: 'c3', text: '"집에 가기 싫어"라고 한다', motif: 'moon' }, { id: 'c4', text: '체육 시간에 긴소매를 벗지 않는다', motif: 'storm' }, { id: 'c5', text: '친구가 상담 선생님께 함께 가자고 한다', motif: 'star' }], shuffle: false }, sequence: [{ pick: ['c3'] }] },
          art: { draw: 'a paper-cut school hallway at dismissal time, a tired student slowly walking and a friend walking alongside with a worried look', banner: '어느 칸이 걱정될까?', extra: [{ motif: 'moon', x: 300, y: 96 }] },
        },
        notes: '구체 묘사 없는 가상 사례다. 학생에게 자기 집과 비슷한지 묻지 않는다. ' + SAFE_NOTE,
      }),
      M('intro.town', {
        title: '동네 지도에서 지원 기관 찾기', method: '동네 지도에서 지원 기관 찾기', tool: 'map', minutes: 6,
        levels: { easy: '지도에 장소 이름이 보이는 채로 세 곳을 함께 찾는다.', base: '교사가 이름 보이기를 끄고 범례로 찾게 한다.', challenge: '기관마다 하는 일(신고·상담·보호)을 짝과 말한다.' },
        intro: {
          teacher: '"우리 동네에서 도움을 받을 수 있는 곳은 어디일까요?" 가상 동네 칸 지도를 띄우고 시연 단추로 경찰서·청소년상담복지센터·학교 상담실에 핀이 꽂히는 모습을 보인다. 곳마다 하는 일을 짧게 말한다(경찰 — 지금 위험할 때 112, 청소년상담복지센터 — 1388 상담, 학교 상담실 — 학교 안 상담). "경찰은 범죄자만 상대한다"는 말이 나오면 "위험한 아이를 보호하는 것도 경찰의 일이에요"라고 말해 준다.',
          student: '가상 동네 지도에서 경찰서·청소년상담복지센터·학교 상담실을 찾고, 곳마다 하는 일을 생각해요.',
          demo: { tool: 'map', options: TOWN, sequence: [{ place: '경찰서' }, { place: '청소년상담복지센터' }, { place: '학교 상담실' }] },
          art: { draw: 'a paper-cut neighborhood map with a police station, a youth counseling center and a school marked with paper pins', banner: '도움 받을 곳은 어디?', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
        },
        notes: '우리 지역 청소년상담복지센터 위치는 교사가 따로 확인해 알려 준다.',
      }),

      // ---- 활동 ----
      M('activity.needs', {
        title: '필요와 기관 잇기', method: '필요와 기관 잇기', tool: 'mindmap', minutes: 16,
        levels: { easy: '필요 카드 3장을 가지에 나누고, 놓으면 바로 맞는지 알려 준다.', base: '필요 카드 6장을 기관 가지 4개에 나눈다.', challenge: '셋째 문항에서 두 기관을 함께 이어야 하는 필요를 골라 담는다.' },
        activity: {
          title: '필요와 기관 잇기', tool: 'mindmap',
          teacher: '"\'지금 위험하다\'와 \'이야기할 곳이 필요하다\'는 같은 곳에 연락할까요?" 카드를 놓을 때마다 지금 위험한지 먼저 따지게 한다. "신고하면 가족이 무조건 흩어진다"는 학생에게 "보호와 지원은 아이의 안전에 맞춰 정해지고, 상담과 지원을 받으며 함께 지내는 경우도 있어요"라고 말해 준다. 주변 사람도 알릴 수 있다는 점을 짚는다.',
          task: '\'지금 위험하다\'·\'이야기할 곳이 필요하다\'·\'머물 곳이 필요하다\' 같은 필요 카드를 112·1388·학교 상담·보호 기관 가지에 나눠요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('필요 카드를 기관 가지에 나누세요.', ROUTE4, NEEDS, { topic: '어디에 이을까?' }),
              SB('필요 카드 3장을 기관 가지에 나누세요.', ['112', '1388', '학교 상담'], pickCards(NEEDS, ['n1', 'n3', 'n5']), { topic: '어디에 이을까?' })),
            IT(MB('기관마다 하는 일을 이어 보세요.', [['112', '지금 위험할 때 출동하고 보호한다'], ['1388', '청소년 고민을 상담한다'], ['학교 상담', '학교 안에서 이야기를 듣고 잇는다'], ['보호 기관', '안전하게 머물 곳과 지원을 돕는다']], ['가족을 벌주기만 한다'], { topic: '기관이 하는 일' }),
              MB('기관 두 곳이 하는 일을 이어 보세요.', [['112', '지금 위험할 때 출동하고 보호한다'], ['1388', '청소년 고민을 상담한다']], [], { topic: '기관이 하는 일' })),
            IT(PB('주변 사람도 할 수 있는 일만 골라 담으세요.', '주변 사람이 할 수 있는 일', [
              { id: 'p1', text: '걱정되는 친구를 상담 선생님께 잇기', ok: true }, { id: 'p2', text: '지금 위험해 보이면 112에 알리기', ok: true },
              { id: 'p3', text: '남의 집 일이라 모른 척하기' }, { id: 'p4', text: '친구 대신 사실을 짐작해 퍼뜨리기' }]),
              null,
              PB('두 기관을 함께 이어야 하는 필요만 골라 담으세요.', '두 기관에 함께', [
                { id: 'q1', text: '지금 위험하고, 앞으로 계속 상담도 필요하다', ok: true }, { id: 'q2', text: '오늘 머물 곳이 없고, 학교에도 알려야 한다', ok: true },
                { id: 'q3', text: '수학 숙제가 어렵다' }, { id: 'q4', text: '친구와 한 번 말다툼했다' }]),
              { conclude: '지금 위험하면 112, 이야기할 곳은 1388과 학교 상담, 머물 곳은 보호 기관이 도와요. 주변 사람도 알릴 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '필요에 맞는 연락처를 써요.', columns: ['필요', '연락처'], cells: [['지금 위험하다', ''], ['이야기할 곳이 필요하다', ''], ['학교에서 의논하고 싶다', '']], answer: '112, 1388, 담임·상담 선생님(Wee 클래스)' }] },
        notes: '보호·지원 절차는 파일 첫머리 \'사람 확인\' 목록에 있다.',
      }),
      M('activity.friend', {
        title: '친구가 집에 가기 싫다고 할 때', method: '친구가 집에 가기 싫다고 할 때 갈림길', tool: 'dilemma', minutes: 17,
        levels: { easy: '갈림 2번까지 가고, 고를 때마다 지안에게 생기는 영향이 바로 보인다.', base: '갈림 3번까지 가고, 영향 표시는 맞힌 뒤에만 보인다. 끝에서 어른에게 잇는 근거를 고른다.', challenge: '갈림 3번 뒤 친구의 마음을 지키며 알리는 방법의 근거까지 고른다.' },
        activity: {
          title: '친구가 집에 가기 싫다고 할 때', tool: 'dilemma',
          teacher: '"\'아무한테도 말하지 마\'를 지키는 것이 지안을 지키는 걸까요?" 학생마다 한 길을 끝까지 가 본 뒤 비밀을 지킨 길과 함께 어른에게 간 길을 견주게 한다. "자세히 알아낸 다음에 말해야 한다"는 학생에게 "알아보고 판단하는 일은 어른이 해요. 친구가 할 일은 들어 주고 잇는 것이에요"라고 말해 준다. 장면은 자세히 묘사하지 않는다.',
          task: '친구가 집에 가기 싫다고 털어놓는 상황에서 길을 골라 결과를 따라가고, 끝에서 어른에게 잇는 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL({ easy: '지안이 집에 가기 싫다고 해요. 두 번 골라 결과를 보고 근거를 고르세요.', base: '지안이 집에 가기 싫다고 해요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 간 뒤, 친구 마음을 지키며 알리는 근거까지 고르세요.' },
              '집에 가기 싫어', D1, [['listen', 'honest', 'stay'], ['secret', 'tell', 'calm']], R1, ['r1', 'r2'], R1C),
            IT({ prompt: '이웃집에서 자주 큰 소리가 들리는 장면을 따라가세요.', toolOptions: { title: '이웃집 소리', scene: { text: '밤마다 이웃집에서 아이 우는 소리와 어른의 고함이 들린다.', ask: '어떻게 할까?', motif: 'house', choices: [
              { id: 'tellparent', text: '보호자에게 말하고, 위험해 보이면 함께 112에 알린다', result: '어른들이 상황을 살핀다.', impact: [{ who: '이웃집 아이', text: '도움을 받을 수 있다', tone: 1 }], ending: '주변 사람으로서 어른에게 알렸어요.' },
              { id: 'ignore', text: '남의 집 일이라 모른 척한다', result: '소리가 계속된다.', impact: [{ who: '이웃집 아이', text: '혼자 남는다', tone: -1 }], why: '주변 사람도 알릴 수 있어요.' }] }, reasons: [{ id: 'q1', text: '아동학대가 의심되면 주변 사람도 알릴 수 있다' }, { id: 'q2', text: '확실하지 않으면 알리면 안 된다', why: '확인은 어른과 기관이 해요. 의심되면 알려요.' }], compare: true },
              target: { path: [['tellparent']], reasons: ['q1'] } }),
            IT({ prompt: '"훈육이니까 괜찮아"라는 친구의 말을 따라가세요.', toolOptions: { title: '훈육일까?', scene: { text: '친구가 "우리 집은 혼날 때 맞는 게 원래 그래, 훈육이야"라고 말한다.', ask: '어떻게 답할까?', motif: 'house', choices: [
              { id: 'notok', text: '"때려서 다치게 하는 건 훈육이라도 괜찮지 않아. 상담 선생님께 같이 가 볼래?"', result: '친구가 생각에 잠긴다.', impact: [{ who: '친구', text: '도움의 길을 안다', tone: 1 }], ending: '괜찮지 않다고 말하고 도움을 권했어요.' },
              { id: 'ok', text: '"그래, 다들 그렇지"라고 넘긴다', result: '친구는 계속 참는다.', impact: [{ who: '친구', text: '도움에서 멀어진다', tone: -1 }], why: '몸을 다치게 하는 것은 훈육이 아니라 보호가 필요한 일이에요.' }] }, reasons: [{ id: 'p1', text: '잘못은 다치게 한 어른에게 있다' }, { id: 'p2', text: '혼날 짓을 했으면 맞아도 된다', why: '어떤 까닭이든 다치게 하는 것은 괜찮지 않아요.' }], compare: true },
              target: { path: [['notok']], reasons: ['p1'] }, conclude: '안전이 걸린 비밀은 지키지 않고, 들어 주고, 함께 어른에게 가요. 잘못은 다치게 한 어른에게 있고, 알린 것은 잘한 일이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '친구가 "집에 가기 싫어, 비밀이야"라고 할 때 가장 알맞은 행동은?', options: ['비밀을 지킨다', '들어 주고 상담 선생님께 함께 간다', '자세히 캐물어 알아낸다'], answer: '들어 주고 상담 선생님께 함께 간다' }] },
        notes: SAFE_NOTE,
      }),
      M('activity.flow', {
        title: '신고 뒤 지원 흐름', method: '신고 뒤 지원 흐름 놓기', tool: 'timeline', minutes: 16,
        levels: { easy: '카드 3장(알림·안전 확인·보호·지원)을 시간 띠에 놓는다.', base: '카드 4장(상담 더함)을 차례로 놓는다.', challenge: '셋째 문항에서 각 단계에서 학생이 받을 수 있는 도움을 짝짓는다(함정이 섞인다).' },
        activity: {
          title: '신고 뒤 지원 흐름', tool: 'timeline',
          teacher: '"알린 다음에는 무슨 일이 일어날까요?" 카드를 놓은 뒤 \'안전 확인\'이 왜 알림 바로 다음인지 말하게 한다. "신고하면 끝, 그다음은 아무도 신경 안 쓴다"는 학생에게 "상담과 지원이 이어진다는 것을 알면 알리기가 덜 두렵지 않을까요?"라고 되묻는다. 흐름은 상황마다 다를 수 있다고 덧붙인다.',
          task: '가정폭력·아동학대를 알린 뒤 이어지는 지원 흐름 카드를 시간 차례로 놓아요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(OB('알린 뒤 이어지는 지원 흐름을 차례대로 놓으세요.', FLOW, { axis: ['알린 날', '그 뒤'] }),
              OB('지원 흐름 3장을 차례대로 놓으세요.', [FLOW[0], FLOW[1], FLOW[3]], { axis: ['알린 날', '그 뒤'] })),
            IT(OB('친구가 알리도록 도울 때의 차례를 놓으세요.', [{ id: 'h1', text: '친구 이야기를 판단 없이 듣기' }, { id: 'h2', text: '함께 상담 선생님 찾아가기' }, { id: 'h3', text: '그 뒤에도 곁에 있어 주기' }], { axis: ['처음', '나중'] }, [{ id: 'h4', text: '들은 이야기를 반에 알리기' }])),
            IT(PB('지원 흐름에 대한 바른 설명만 골라 담으세요.', '바른 설명', [
              { id: 'p1', text: '알린 뒤에는 먼저 안전을 확인한다', ok: true }, { id: 'p2', text: '상담과 지원이 이어질 수 있다', ok: true }, { id: 'p3', text: '알리면 그걸로 끝이다' }]),
              null,
              MB('단계마다 학생이 받을 수 있는 도움을 이어 보세요(함정이 섞였어요).', [['알림(신고)', '이야기를 들어 주는 어른'], ['안전 확인', '지금 위험한지 살펴 주기'], ['상담', '마음을 털어놓고 돌보기'], ['보호·지원', '안전하게 지낼 곳과 도움 잇기']], ['벌을 받는 것', '혼자 해결하기'], { axis: ['알린 날', '그 뒤'] }),
              { conclude: '알리면 안전 확인, 상담, 보호·지원이 이어질 수 있어요. 알리는 것은 끝이 아니라 도움의 시작이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '\'신고하면 그걸로 끝\'이 아닌 까닭을 지원 흐름으로 한 문장 써요.' }] },
        notes: '지원 흐름은 상황마다 다를 수 있다. 실제 절차는 파일 첫머리 \'사람 확인\' 목록에 있다.',
      }),
      M('activity.letter', {
        title: '가상 가족에게 대화 제안 편지', method: '가상 가족에게 대화 제안 편지 쓰기', tool: 'rubric-writing', minutes: 17,
        levels: { easy: '틀("우리 가족이 ___ 때 나는 ___. 앞으로 ___ 하면 좋겠어요")을 채워 쓴다.', base: '틀 없이 나-전달법과 대화 규칙을 담아 쓰고 기준표로 점검한다.', challenge: '셋째 문항에서 가족 구성원마다 다른 바람을 담아 다듬는다.' },
        activity: {
          title: '가상 가족에게 대화 제안 편지', tool: 'rubric-writing',
          teacher: '"다툼이 잦은 가족에게 \'싸우지 마세요\'라고만 쓰면 무엇이 달라질까요?" 갈등이 잦은 가상 가족(휴대폰·귀가 시간으로 자주 다투는 가족)에게 보낼 제안 편지를 쓰게 한다. 이 편지는 의견이 달라 생기는 다툼에 대한 것이고, 누군가 다치거나 무서운 일은 편지가 아니라 어른·기관에 알려야 한다는 것을 먼저 분명히 한다. 우리 집 이야기를 쓰지 않는다.',
          task: '갈등이 잦은 가상 가족에게 나-전달법과 대화 규칙을 담은 제안 편지를 쓰고 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '나-전달법으로 마음을 전하는 문장을 쓰세요.', toolOptions: { topic: '가상 가족의 자녀가 되어, 다툼이 생길 때의 마음을 나-전달법으로 두 문장 쓰세요.', minChars: 20, maxChars: 140, minSentences: 2, maxSentences: 3, title: '편지 ① 마음 전하기' }, target: { selfCheck: ['상황을 썼다', '감정을 썼다', '누구도 탓하지 않았다'] } },
              { prompt: '틀을 채워 마음을 전하는 문장을 쓰세요.', toolOptions: { starter: '우리 가족이 ___ 때 나는 ___.' } }),
            IT({ prompt: '가족 대화 규칙을 제안하는 문장을 쓰세요.', toolOptions: { topic: '가족이 함께 지킬 대화 규칙 두 가지를 제안하는 문장을 쓰세요.', minChars: 20, maxChars: 140, minSentences: 2, maxSentences: 3, title: '편지 ② 대화 규칙' }, target: { selfCheck: ['규칙이 구체적이다', '가족 모두가 지킬 수 있다', '제안하는 말투로 썼다'] } },
              { prompt: '틀을 채워 대화 규칙을 제안하세요.', toolOptions: { starter: '앞으로 ___ 하면 좋겠어요. 그리고 ___ 해요.' } }),
            IT({ prompt: '앞의 글을 이어 제안 편지를 완성하세요.', toolOptions: { topic: '마음 전하기와 대화 규칙을 이어 가상 가족에게 보낼 제안 편지를 완성하세요.', minChars: 40, maxChars: 240, minSentences: 3, maxSentences: 5, title: '대화 제안 편지' }, target: { selfCheck: ['나-전달법이 들어갔다', '대화 규칙이 들어갔다', '탓하는 말이 없다'], mustInclude: [['좋겠어요', '해요', '주세요']] } },
              { prompt: '틀을 채워 제안 편지를 완성하세요.', toolOptions: { minChars: 30, starter: '우리 가족이 ___ 때 나는 ___. 앞으로 ___ 하면 좋겠어요.' } },
              { prompt: '가족 구성원마다 다른 바람을 담아 편지를 다듬으세요.', toolOptions: { maxSentences: 6, minSentences: 4 }, target: { selfCheck: ['나-전달법이 들어갔다', '대화 규칙이 들어갔다', '탓하는 말이 없다', '구성원마다 다른 바람을 담았다'], mustInclude: [['좋겠어요', '해요', '주세요']] } },
              { conclude: '의견이 달라 생기는 다툼은 나-전달법과 대화 규칙으로 풀어 갈 수 있어요. 누군가 다치거나 무서운 일은 대화가 아니라 보호가 필요한 일이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '가상 가족에게 제안한 대화 규칙 두 가지를 써요.' }] },
      }),

      // ---- 정리 ----
      M('wrap.terms', {
        title: '지원 제도 낱말 정리', method: '지원 제도 낱말 정리', tool: 'wordcards', minutes: 6,
        levels: { easy: '낱말 3개(신고·상담·보호)와 뜻을 짝 짓는다.', base: '낱말 4개(지원 더함)와 뜻을 짝 짓는다.', challenge: '뜻 하나를 내 말로 바꿔 쓴다(셋째 출구 질문).' },
        wrap: {
          teacher: '"신고와 상담은 무엇이 다를까요?" 짝짓기를 마친 뒤 낱말마다 연락처 하나를 떠올리게 한다. "신고는 누군가를 벌주는 것"이라는 말에는 "신고는 위험한 사람을 지키기 위해 알리는 거예요"라고 바로잡아 준다.',
          exitTicket: [
            IT(X('wordcards', MB('낱말과 뜻을 이어요.', [['신고', '위험을 알려 보호를 요청하는 것'], ['상담', '마음과 고민을 털어놓고 함께 찾는 것'], ['보호', '안전하게 지낼 수 있게 지켜 주는 것'], ['지원', '필요한 도움을 이어 주는 것']], ['누군가를 벌주는 것']), { difficulty: 0.15 }),
              MB('낱말 세 개와 뜻을 이어요.', [['신고', '위험을 알려 보호를 요청하는 것'], ['상담', '마음과 고민을 털어놓고 함께 찾는 것'], ['보호', '안전하게 지낼 수 있게 지켜 주는 것']], [])),
            { type: 'choice', prompt: '"남의 집 일은 모른 척해야 한다"는 말에 대한 생각으로 가장 알맞은 것은?', options: ['맞다, 끼어들면 안 된다', '아동학대가 의심되면 주변 사람도 알릴 수 있다', '확실할 때까지 기다린다'], answer: 1, difficulty: 0.15, explain: '확인은 어른과 기관이 해요. 의심되면 알려요.' },
            { type: 'short', prompt: '\'신고\'의 뜻을 내 말로 바꿔 써요.' },
          ],
        },
        worksheet: {
          title: '지원 제도 낱말',
          items: [
            { type: 'table', prompt: '낱말의 뜻을 써요.', columns: ['낱말', '뜻'], cells: [['신고', ''], ['상담', ''], ['보호', '']], answer: '위험을 알려 보호를 요청함, 고민을 털어놓고 함께 찾음, 안전하게 지내게 지킴' },
            { type: 'short', prompt: '신고와 상담의 차이를 한 문장으로 써요.' },
          ],
        },
      }),
      M('wrap.numbers', {
        title: '기억할 연락처 점검', method: '기억할 연락처 점검', tool: 'kitchen', minutes: 6,
        levels: { easy: '항목 3개(알맞은 것 2개·함정 1개)에서 기억할 연락처에 표시한다.', base: '항목 4개(알맞은 것 3개·함정 1개)에서 표시한다.', challenge: '연락처마다 언제 쓰는지 덧붙여 쓴다(셋째 출구 질문).' },
        wrap: {
          teacher: '"오늘 배운 연락처 가운데 내 휴대전화에 저장해 둘 것은 무엇인가요?" 점검표에 \'모르는 온라인 상담 계정\' 같은 함정이 섞여 있다고 말한다. 연락처는 나뿐 아니라 친구를 도울 때도 쓸 수 있다고 덧붙인다.',
          exitTicket: [
            IT(X('kitchen', CL('기억할 연락처에만 표시해요.', '기억할 연락처', [
              { id: 'k1', text: '112(지금 위험할 때)', ok: true }, { id: 'k2', text: '1388(청소년 상담)', ok: true }, { id: 'k3', text: '학교 상담실(Wee 클래스)', ok: true },
              { id: 'k4', text: '모르는 온라인 상담 계정' }]), { difficulty: 0.1 }),
              CL('기억할 연락처에만 표시해요(3개).', '기억할 연락처', [
                { id: 'k1', text: '112(지금 위험할 때)', ok: true }, { id: 'k2', text: '1388(청소년 상담)', ok: true }, { id: 'k4', text: '모르는 온라인 상담 계정' }])),
            { type: 'choice', prompt: '"신고하면 가족이 무조건 흩어진다"는 말에 대한 생각으로 가장 알맞은 것은?', options: ['맞다, 그래서 알리면 안 된다', '보호는 아이의 안전에 맞춰 정해지고 지원 방법은 여러 가지다', '가족은 절대 도움을 받지 못한다'], answer: 1, difficulty: 0.2, explain: '보호와 지원은 아이의 안전을 위한 것이에요.' },
            { type: 'short', prompt: '연락처 하나를 골라 언제 쓰는지 덧붙여 써요.' },
          ],
        },
        worksheet: {
          title: '기억할 연락처',
          items: [
            { type: 'table', prompt: '연락처와 쓸 때를 써요.', columns: ['연락처', '쓸 때'], cells: [['112', ''], ['1388', ''], ['학교 상담실', '']], answer: '지금 위험할 때, 고민을 상담하고 싶을 때, 학교에서 먼저 의논할 때' },
            { type: 'blank', prompt: '빈칸에 알맞은 번호를 써요.', text: '청소년 상담 전화는 ___번이에요.', answer: '1388' },
          ],
        },
      }),
    );
  }

  // ==== 9학년 · 성폭력 2차 피해 막기와 동의 문화 캠페인 (saf-violence.m.second-harm) ====
  // 사건 내용은 다루지 않는다. 장면은 '소문이 도는 상황'까지만 쓰고, 잘못은 늘 가해자에게 있으며 말한 사람은 잘한 것이라는 틀을 지킨다.
  {
    const M = MK('second-harm', [9]);
    const SUP2 = ['지지하는 말과 행동', '2차 피해'];
    const WORDS = [
      { id: 's1', text: '"네 잘못 아니야"', to: '지지하는 말과 행동' }, { id: 's2', text: '"말해 줘서 고마워, 믿어"', to: '지지하는 말과 행동' },
      { id: 's3', text: '소문을 들으면 퍼뜨리지 않고 멈춘다', to: '지지하는 말과 행동' }, { id: 's4', text: '"원하면 상담 선생님께 같이 가자"', to: '지지하는 말과 행동' },
      { id: 'h1', text: '"왜 거기 갔대?"', to: '2차 피해' }, { id: 'h2', text: '"걔도 뭔가 했겠지"', to: '2차 피해' },
      { id: 'h3', text: '누구인지 알아내려고 캐묻는다', to: '2차 피해' }, { id: 'h4', text: '들은 이야기를 다른 반에 전한다', to: '2차 피해' },
    ];
    const FIRST = { text: '쉬는 시간, 친구가 다가와 "너 그 얘기 들었어? 누가 그랬대…"라며 다른 반 학생에 대한 소문을 전하려 한다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'stop', text: '"그 얘기는 퍼뜨리면 안 될 것 같아, 그만하자"', result: '친구가 머쓱해하며 이야기를 멈춘다. 소문이 나에게서 끊긴다.', impact: [{ who: '소문의 대상', text: '소문이 덜 퍼진다', tone: 1 }], ending: '소문을 나에게서 멈췄어요.' },
      { id: 'listen', text: '궁금해서 끝까지 듣고 "진짜?"라고 묻는다', result: '친구가 더 신이 나서 다른 친구에게도 전한다.', impact: [{ who: '소문의 대상', text: '소문이 커진다', tone: -1 }], why: '듣고 맞장구치는 것도 소문을 키워요.', ending: '맞장구로 소문이 커졌어요.' },
      { id: 'pass', text: '듣고 나서 다른 친구에게도 전한다', result: '소문이 반 전체로 번진다.', impact: [{ who: '소문의 대상', text: '학교에 오기 두려워진다', tone: -1 }], why: '전하는 것은 2차 피해예요.', ending: '소문이 반 전체로 번졌어요.' }] };
    const FIRST_R = [{ id: 'r1', text: '소문을 전하는 것도 2차 피해다' }, { id: 'r2', text: '들은 말을 전한 것뿐이라 괜찮다', why: '전하는 순간 피해가 커져요.' }];
    const SURVEY = [['매우 그렇다', 12], ['그렇다', 30], ['보통이다', 28], ['아니다', 20], ['전혀 아니다', 10]];
    const SOPT = { type: 'bar', mode: 'read', title: '"동의를 묻는 것이 어색하다"(가상 학교 설문)', unit: '%', xLabel: '응답', yLabel: '응답 비율', data: SURVEY };

    ALL.push(
      // ---- 도입 ----
      M('intro.rumor', {
        title: '소문의 대상이 된 학생의 마음', method: '소문이 도는 장면 속 마음 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 마음 카드 4장(무서움·외로움·화남·신남)만 짚으며 함께 고른다.', base: '시연 판의 마음 카드 8장에서 소문의 대상이 된 학생의 마음을 고른다.', challenge: '소문을 전한 학생의 마음과 견주어 짝과 말한다.' },
        intro: {
          teacher: '"복도에서 자기에 대한 소문을 들은 학생은 어떤 마음일까요?" 장면을 읽고 시연 단추로 \'무서움\'·\'외로움\' 카드가 붙는 모습을 보인다. "소문은 들은 말을 전한 것뿐"이라는 말이 나오면 "그 말이 한 사람 한 사람 건너갈 때마다 소문의 대상은 어떻게 될까요?"라고 되묻는다. 오늘은 피해를 입은 사람에게 상처를 더하는 2차 피해를 알아보고 지지하는 말과 행동, 동의 존중 문화를 다룬다고 밝힌다. 사건 내용은 다루지 않는다.',
          student: '복도에서 소문이 오가는 가상 장면을 보고, 소문의 대상이 된 학생의 마음을 골라요. 소문을 전한 학생의 마음과도 견주어 봐요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 's1', label: '복도에서 자기에 대한 소문을 들은 학생' }], cards: ['무서움', '외로움', '화남', '신남', '편안함', '부끄러움', '고마움', '뿌듯함'] }, sequence: [{ match: { s1: '무서움' } }] },
          art: { draw: 'a paper-cut school hallway with whisper bubbles floating between groups of students and one student walking alone, the bubbles fading out at a friend who raises a hand to stop them', banner: '소문이 지나간 자리', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '사건 내용·가해 장면을 묘사하지 않고 소문만 다룬다. ' + SAFE_NOTE,
      }),
      M('intro.first', {
        title: '소문을 들은 순간 첫 선택', method: '소문을 들은 순간 첫 선택', tool: 'dilemma', minutes: 6,
        levels: { easy: '교사가 결과 장면 2개(멈추기·전하기)만 보이며 함께 견준다.', base: '시연 판의 선택 3개 가운데 하나를 골라 결과 장면을 보고 근거를 고른다.', challenge: '되돌아가 다른 선택의 결과도 열어 보고 견준다.' },
        intro: {
          teacher: '"친구가 \'너 그 얘기 들었어?\'라고 다가올 때, 나의 첫마디가 소문의 길을 바꿀 수 있을까요?" 시연 단추로 \'그만하자\'를 고른 결과와 근거를 보인 뒤, 다른 선택을 하면 어떻게 될지 반 전체에 묻는다. "궁금해서 듣기만 하는 건 괜찮다"는 말이 나오면 "듣고 \'진짜?\'라고 맞장구치면 친구는 그다음에 무엇을 할까요?"라고 되묻는다.',
          student: '친구가 소문을 전하려 할 때 나라면 어떤 첫마디를 할지 고르고, 그 결과를 짝과 이야기해요.',
          demo: DEMO_DIL('소문을 들은 순간', FIRST, [['stop']], FIRST_R, 1),
          art: { draw: 'a paper-cut pair of students in a hallway, one leaning in to whisper and the other gently raising a hand to say stop', banner: '첫마디가 길을 바꿔요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),

      // ---- 활동 ----
      M('activity.sort', {
        title: '지지와 2차 피해 나누기', method: '말과 행동을 지지·2차 피해로 나누기', tool: 'mindmap', minutes: 16,
        levels: { easy: '말 카드 5장을 두 가지에 나누고, 놓으면 바로 맞는지 알려 준다.', base: '말·행동 카드 8장을 두 가지에 나눈다.', challenge: '셋째 문항에서 겉으로는 걱정처럼 보이는 2차 피해를 골라 담는다(함정이 섞인다).' },
        activity: {
          title: '지지와 2차 피해 나누기', tool: 'mindmap',
          teacher: '"\'왜 거기 갔대?\'는 질문일까요, 탓일까요?" 카드를 놓을 때마다 그 말을 들은 피해 학생이 어떤 마음일지 말하게 한다. "피해자에게도 이유가 있었을 것"이라는 학생에게 "그 생각이 맞다면, 잘못한 사람은 누구로 바뀌나요?"라고 되묻는다 — 잘못은 늘 가해자에게 있다. 걱정처럼 들려도 탓하거나 캐묻는 말은 2차 피해라는 점을 짚는다.',
          task: '\'왜 거기 갔대?\'·\'네 잘못 아니야\' 같은 말과 행동 카드를 \'지지하는 말과 행동\'과 \'2차 피해\' 가지에 나눠요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('말과 행동 카드를 두 가지에 나누세요.', SUP2, WORDS, { topic: '피해 학생 곁에서' }),
              SB('말 카드 5장을 두 가지에 나누세요.', SUP2, pickCards(WORDS, ['s1', 's2', 'h1', 'h2', 'h3']), { topic: '피해 학생 곁에서' })),
            IT(MB('2차 피해가 되는 말마다 대신 할 말을 이어 보세요.', [['"왜 거기 갔대?"', '"네 잘못 아니야"'], ['"걔도 뭔가 했겠지"', '"잘못은 한 사람에게 있어"'], ['"누군데? 말해 봐"', '"말하고 싶은 만큼만 말해도 돼"']], ['"조심 좀 하지 그랬어"'], { topic: '대신 이렇게' }),
              MB('2차 피해가 되는 말 두 개에 대신 할 말을 이어 보세요.', [['"왜 거기 갔대?"', '"네 잘못 아니야"'], ['"걔도 뭔가 했겠지"', '"잘못은 한 사람에게 있어"']], [], { topic: '대신 이렇게' })),
            IT(PB('2차 피해에 해당하는 행동만 골라 담으세요.', '2차 피해', [
              { id: 'p1', text: '피해 학생 이름을 알아내 퍼뜨리기', ok: true }, { id: 'p2', text: 'SNS에 짐작한 이야기 올리기', ok: true }, { id: 'p3', text: '소문을 듣고 멈추기' }, { id: 'p4', text: '피해 학생 곁에 있어 주기' }]),
              null,
              PB('겉으로는 걱정처럼 보이지만 2차 피해인 말만 골라 담으세요.', '걱정처럼 보이는 2차 피해', [
                { id: 'q1', text: '"다음부턴 옷 조심해, 걱정돼서 그래"', ok: true }, { id: 'q2', text: '"왜 바로 말 안 했어? 그럼 안 믿잖아"', ok: true },
                { id: 'q3', text: '"너 괜찮은 거 맞아? 무슨 일인지 다 말해 봐"', ok: true }, { id: 'q4', text: '"말해 줘서 고마워. 원하는 걸 말해 줘"' }, { id: 'q5', text: '"네 잘못 아니야"' }]),
              { conclude: '피해자를 탓하거나 캐묻고 소문을 퍼뜨리는 것은 2차 피해예요. 잘못은 늘 가해자에게 있고, 말한 사람은 잘한 거예요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"피해자에게도 이유가 있었을 것"이라는 말을 바로잡는 문장을 써요.' }],
          easy: [{ type: 'choice', prompt: '지지하는 말은?', options: ['"네 잘못 아니야"', '"왜 거기 갔대?"'], answer: '"네 잘못 아니야"' }] },
        notes: SAFE_NOTE,
      }),
      M('activity.script', {
        title: '지지하는 대화 대본', method: '지지하는 대화 대본 채우기', tool: 'story', minutes: 17,
        levels: { easy: '대본 빈칸 2개(들어 주는 말·탓하지 않는 말)에 카드를 넣고, 넣으면 바로 맞는지 알려 준다.', base: '대본 빈칸 3개(도움을 함께 찾는 말 더함)에 카드를 넣는다.', challenge: '소문을 멈추는 말까지 빈칸 4개에 넣는다(함정 카드가 섞인다).' },
        activity: {
          title: '지지하는 대화 대본', tool: 'story',
          teacher: '"힘든 일을 털어놓은 친구에게 가장 먼저 해야 할 말은 무엇일까요?" 빈칸을 채운 뒤 두 사람씩 대본을 소리 내어 읽게 한다. "자세히 물어봐야 도와줄 수 있다"는 학생에게 "무슨 일이 있었는지 알아보는 건 어른과 기관이 해요. 친구는 믿고, 탓하지 않고, 함께 도움을 찾으면 돼요"라고 말해 준다. 대본에는 사건 내용이 나오지 않는다.',
          task: '말풍선 대본 빈칸에 들어 주는 말, 탓하지 않는 말, 도움을 함께 찾는 말 카드를 넣어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(FB('친구가 털어놓는 장면 대본의 빈칸에 알맞은 말 카드를 넣으세요.', [['친구: "나 사실 힘든 일이 있었어" — 나: "___"', '"말해 줘서 고마워. 천천히 말해도 돼"', '나', 'star'], ['친구: "내가 잘못한 걸까?" — 나: "___"', '"아니, 네 잘못 아니야"', '나', 'star'], ['나: "___"', '"원하면 상담 선생님께 같이 가자"', '나', 'star']], ['"그러게 왜 그랬어"']),
              FB('대본 빈칸 2개에 알맞은 말 카드를 넣으세요.', [['친구: "나 사실 힘든 일이 있었어" — 나: "___"', '"말해 줘서 고마워. 천천히 말해도 돼"', '나', 'star'], ['친구: "내가 잘못한 걸까?" — 나: "___"', '"아니, 네 잘못 아니야"', '나', 'star']], []),
              FB('대본 빈칸 4개에 알맞은 말 카드를 넣으세요.', [['친구: "나 사실 힘든 일이 있었어" — 나: "___"', '"말해 줘서 고마워. 천천히 말해도 돼"', '나', 'star'], ['친구: "내가 잘못한 걸까?" — 나: "___"', '"아니, 네 잘못 아니야"', '나', 'star'], ['나: "___"', '"원하면 상담 선생님께 같이 가자"', '나', 'star'], ['다른 친구: "걔 얘기 들었어?" — 나: "___"', '"그 얘긴 퍼뜨리지 말자"', '나', 'star']], ['"그러게 왜 그랬어"', '"누군데? 다 말해 봐"'])),
            IT(SB('도움을 함께 찾는 말과 혼자 두는 말로 나누세요.', ['도움을 함께 찾는 말', '혼자 두는 말'], [
              { id: 'a1', text: '"117이나 1388에 같이 전화해 볼까?"', to: '도움을 함께 찾는 말' }, { id: 'a2', text: '"네가 원하는 대로 같이 할게"', to: '도움을 함께 찾는 말' },
              { id: 'a3', text: '"그냥 잊어버려"', to: '혼자 두는 말' }, { id: 'a4', text: '"그건 네가 알아서 해"', to: '혼자 두는 말' }, { id: 'a5', text: '"지금 위험하면 112에 바로 알리자"', to: '도움을 함께 찾는 말' }])),
            IT(PB('피해 학생의 뜻을 존중하는 말만 골라 담으세요.', '뜻을 존중하는 말', [
              { id: 'p1', text: '"어떻게 하고 싶은지 말해 줘"', ok: true }, { id: 'p2', text: '"네가 정할 때까지 기다릴게"', ok: true }, { id: 'p3', text: '"내가 다 알아서 소문 바로잡을게"' }, { id: 'p4', text: '"당장 다 말해"' }]),
              null, null, { conclude: '지지하는 대화는 믿어 주고, 탓하지 않고, 도움을 함께 찾고, 피해 학생의 뜻을 존중하는 말로 이어져요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '힘든 일을 털어놓은 친구에게 건넬 첫마디를 한 문장으로 써요.' }] },
      }),
      M('activity.data', {
        title: '설문 속 캠페인 근거', method: '가상 설문으로 캠페인 근거 찾기', tool: 'chart', minutes: 16,
        levels: { easy: '막대 끝에 값이 보이는 채로 가장 많은 응답을 고른다.', base: '값 없이 눈금으로 읽어 응답을 고르고 비율을 더한다.', challenge: '셋째 문항에서 자료의 한계를 하나 고른다.' },
        activity: {
          title: '설문 속 캠페인 근거', tool: 'chart',
          teacher: '"\'동의를 묻는 것이 어색하다\'는 응답이 많다면, 캠페인은 무엇을 해야 할까요?" 가상 설문 막대그래프를 함께 읽고, 응답 수치를 캠페인 근거로 바꿔 말하게 한다. "어색하니까 안 물어도 된다"는 학생에게 "어색함을 줄이는 것이 바로 캠페인의 목표가 될 수 있지 않을까요?"라고 되묻는다. 자료는 수업용 가상 설문이라고 처음에 밝힌다.',
          task: '가상 학교 설문 막대그래프(\'동의를 묻는 것이 어색하다\' 응답 경향)를 읽고 캠페인에 쓸 근거를 골라요.',
          levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            IT(RD('가장 많이 나온 응답을 고르세요.', Object.assign({ question: '가장 많은 응답은?', choices: SURVEY.map((d) => d[0]) }, SOPT), { pick: 1 })),
            IT(RD('\'매우 그렇다\'와 \'그렇다\'를 더하면 몇 %인지 그래프에서 읽어 쓰세요.', Object.assign({ question: '두 응답을 더하면 몇 %?' }, SOPT), { value: 42 })),
            IT(RD('이 자료로 세울 수 있는 캠페인 근거를 고르세요.', Object.assign({ question: '캠페인 근거로 알맞은 것은?', choices: ['열 명 가운데 네 명쯤은 동의를 묻는 것이 어색하다고 답했다', '우리 학교 학생은 모두 동의를 묻지 않는다', '동의는 필요 없다'] }, SOPT), { pick: 0 }),
              null,
              { prompt: '이 자료의 한계를 고르세요.', toolOptions: { question: '이 가상 설문으로 알 수 없는 것은?', choices: ['응답 비율의 차례', '학생들이 실제로 동의를 묻는지', '\'그렇다\' 응답의 비율'] }, target: { pick: 1 } },
              { conclude: '설문은 생각의 경향을 보여 주지만 실제 행동까지 말해 주지는 않아요. 캠페인 근거는 자료가 잰 것만큼만 말해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '가상 설문 결과로 캠페인 근거 문장을 하나 써요.' }] },
        notes: '그래프 값은 모두 가상이다.',
      }),
      M('activity.poster', {
        title: '동의 문화 캠페인 문구 쓰기', method: '동의 문화 캠페인 문구 쓰기', tool: 'rubric-writing', minutes: 17,
        levels: { easy: '틀("___ 전에 물어요. 소문은 ___. 힘들면 ___에 이야기해요")을 채워 쓴다.', base: '틀 없이 문구를 쓰고 기준표(구체 행동·피해자 탓 없음·도움 경로)로 점검한다.', challenge: '셋째 문항에서 대상(친구·학급)에 맞게 두 판으로 다듬는다.' },
        activity: {
          title: '동의 문화 캠페인 문구 쓰기', tool: 'rubric-writing',
          teacher: '"\'성폭력 조심!\'이라는 문구는 누구에게 무엇을 하라는 걸까요?" 피해자에게 조심하라는 문구와 \'묻고, 존중하고, 소문은 멈춰요\'를 견주어 읽은 뒤 쓰게 한다. 기준표의 \'피해자 탓 없음\'은 꼭 지키게 하고, 사건 내용은 쓰지 않게 한다. "무섭게 써야 효과가 있다"는 학생에게 할 행동이 보이는 문구가 더 오래 남는다고 말해 준다.',
          task: '동의 존중과 2차 피해 금지를 담은 캠페인 문구를 쓰고, 기준표(구체 행동·피해자 탓 없음·도움 경로)로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '동의 존중을 담은 문구 한 줄을 쓰세요.', toolOptions: { topic: '친구 사이 동의를 존중하자는 캠페인 문구를 한 줄로 쓰세요.', minChars: 8, maxChars: 80, minSentences: 1, maxSentences: 2, title: '문구 ① 동의 존중' }, target: { selfCheck: ['구체적인 행동이 있다', '피해자를 탓하는 말이 없다'] } },
              { prompt: '틀을 채워 동의 문구를 쓰세요.', toolOptions: { starter: '___ 전에 물어요. 싫다고 하면 ___.' } }),
            IT({ prompt: '2차 피해 금지와 도움 경로를 담은 문구를 쓰세요.', toolOptions: { topic: '소문·탓하기를 멈추고 도움을 권하는 문구를 한두 줄로 쓰세요.', minChars: 12, maxChars: 120, minSentences: 1, maxSentences: 2, title: '문구 ② 2차 피해 멈추기' }, target: { selfCheck: ['소문·탓하기를 멈추자는 말이 있다', '도움 경로가 있다', '피해자를 탓하는 말이 없다'], mustInclude: [['112', '117', '1388', '상담', '선생님']] } },
              { prompt: '틀을 채워 2차 피해 금지 문구를 쓰세요.', toolOptions: { starter: '소문은 ___. 힘들면 ___에 이야기해요.' } }),
            IT({ prompt: '두 문구를 이어 캠페인 문구를 완성하세요.', toolOptions: { topic: '동의 존중, 2차 피해 금지, 도움 경로를 모두 담아 캠페인 문구를 완성하세요.', minChars: 25, maxChars: 160, minSentences: 2, maxSentences: 3, title: '동의 문화 캠페인 문구' }, target: { selfCheck: ['구체적인 행동이 있다', '피해자를 탓하는 말이 없다', '도움 경로가 있다'], mustInclude: [['112', '117', '1388', '상담', '선생님']] } },
              { prompt: '틀을 채워 캠페인 문구를 완성하세요.', toolOptions: { minChars: 20, starter: '___ 전에 물어요. 소문은 ___. 힘들면 ___에 이야기해요.' } },
              { prompt: '같은 메시지를 친구용과 학급 게시판용 두 판으로 다듬어 쓰세요.', toolOptions: { topic: '같은 캠페인 메시지를 친구에게 보내는 말투 한 판, 학급 게시판에 붙일 말투 한 판으로 두 문장씩 쓰세요.', minChars: 40, maxChars: 240, minSentences: 4, maxSentences: 5, title: '두 판으로 다듬기' }, target: { selfCheck: ['친구용 판을 썼다', '학급용 판을 썼다', '두 판 모두 피해자를 탓하지 않는다', '두 판 모두 도움 경로가 있다'] } },
              { conclude: '좋은 동의 문화 캠페인은 할 행동을 말하고, 피해자에게 조심하라고 하지 않으며, 도움 경로를 담아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내가 만든 동의 문화 캠페인 문구를 옮겨 써요.' }] },
      }),

      // ---- 정리 ----
      M('wrap.actions', {
        title: '지지 행동 정리', method: '지지 행동 정리', tool: 'mindmap', minutes: 6,
        levels: { easy: '가지 2개(말·행동)에 지지 카드를 잇는다.', base: '가지 3개(멈추기 더함)에 함정 카드를 걸러 가며 잇는다.', challenge: '\'학급\' 가지를 더해 학급 차원의 행동까지 잇는다.' },
        wrap: {
          teacher: '"오늘 배운 지지는 말일까요, 행동일까요?" 가지를 이은 뒤 내일 바로 할 수 있는 것 하나를 마음속으로 정하게 한다. 함정 카드(\'무슨 일인지 자세히 묻기\')를 고른 학생에게 알아보는 일은 어른과 기관이 한다고 다시 말해 준다.',
          exitTicket: [
            IT(X('mindmap', SB('지지 카드를 가지에 이어요.', ['지지하는 말', '지지하는 행동', '2차 피해 멈추기'], [
              { id: 'a1', text: '"네 잘못 아니야"', to: '지지하는 말' }, { id: 'a2', text: '"말해 줘서 고마워"', to: '지지하는 말' },
              { id: 'b1', text: '원하면 상담 선생님께 함께 가기', to: '지지하는 행동' }, { id: 'b2', text: '곁에 있어 주기', to: '지지하는 행동' },
              { id: 'c1', text: '소문을 듣고 멈추기', to: '2차 피해 멈추기' }, { id: 'c2', text: '짐작한 글 올리지 않기', to: '2차 피해 멈추기' },
              { id: 'z1', text: '무슨 일인지 자세히 묻기' }], { topic: '피해 학생 곁에서' }), { difficulty: 0.15 }),
              SB('지지 카드를 가지 두 개에 이어요.', ['지지하는 말', '지지하는 행동'], [
                { id: 'a1', text: '"네 잘못 아니야"', to: '지지하는 말' }, { id: 'a2', text: '"말해 줘서 고마워"', to: '지지하는 말' },
                { id: 'b1', text: '원하면 상담 선생님께 함께 가기', to: '지지하는 행동' }, { id: 'b2', text: '곁에 있어 주기', to: '지지하는 행동' }], { topic: '피해 학생 곁에서' }),
              SB('학급 차원의 행동까지 가지에 이어요.', ['지지하는 말', '지지하는 행동', '2차 피해 멈추기', '학급'], [
                { id: 'a1', text: '"네 잘못 아니야"', to: '지지하는 말' }, { id: 'b1', text: '원하면 상담 선생님께 함께 가기', to: '지지하는 행동' },
                { id: 'c1', text: '소문을 듣고 멈추기', to: '2차 피해 멈추기' }, { id: 'd1', text: '학급 약속으로 \'소문 멈추기\' 정하기', to: '학급' },
                { id: 'd2', text: '동의 존중 캠페인 함께 붙이기', to: '학급' }, { id: 'z1', text: '무슨 일인지 자세히 묻기' }], { topic: '피해 학생 곁에서' })),
            { type: 'choice', prompt: '"소문은 들은 말을 전한 것뿐이라 괜찮다"는 말에 대한 생각으로 가장 알맞은 것은?', options: ['맞다, 내가 지어낸 게 아니니까', '전하는 것도 2차 피해라 멈춰야 한다', '사실이면 전해도 된다'], answer: 1, difficulty: 0.15, explain: '전하는 순간 피해가 커져요.' },
            { type: 'short', prompt: '내일 바로 할 수 있는 지지 행동 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '지지 행동',
          items: [
            { type: 'table', prompt: '지지 행동을 하나씩 써요.', columns: ['갈래', '할 일'], cells: [['지지하는 말', ''], ['지지하는 행동', ''], ['2차 피해 멈추기', '']], answer: '(예) "네 잘못 아니야", 원하면 상담실에 함께 가기, 소문 멈추기' },
            { type: 'check', prompt: '도움을 청할 수 있는 곳에 표시해요.', options: ['112', '117', '1388', '상담 선생님'] },
          ],
        },
      }),
      M('wrap.self', {
        title: '오늘 배운 것 스스로 점검', method: '오늘 배운 것 스스로 점검', tool: 'timer', minutes: 6,
        levels: { easy: '점검 항목 3개에 표시한다.', base: '점검 항목 4개에 표시한다.', challenge: '아직 어려운 항목을 고르고 까닭을 쓴다(셋째 출구 질문).' },
        wrap: {
          teacher: '"오늘 배운 것 가운데 아직 자신 없는 것은 무엇인가요?" 점검 항목은 맞히는 문제가 아니라 스스로 돌아보는 칸이라고 말한다. 어려운 항목을 솔직하게 쓰는 것이 좋은 점검이라고 말해 주고, 걱정을 말하는 학생은 수업 뒤 따로 만난다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'timer', options: { title: '2차 피해 막기 스스로 점검' }, prompt: '오늘 배운 것을 할 수 있는지 스스로 표시해요.', target: { selfCheck: ['2차 피해가 되는 말을 알아볼 수 있다', '"네 잘못 아니야"처럼 지지하는 말을 할 수 있다', '소문을 들으면 멈출 수 있다', '도움 경로(112·117·1388)를 안다'] }, difficulty: 0.1 },
              { prompt: '오늘 배운 것 세 가지를 할 수 있는지 스스로 표시해요.', target: { selfCheck: ['2차 피해가 되는 말을 알아볼 수 있다', '"네 잘못 아니야"처럼 지지하는 말을 할 수 있다', '소문을 들으면 멈출 수 있다'] } }),
            { type: 'choice', prompt: '"피해자에게도 이유가 있었을 것"이라는 말에 대한 생각으로 가장 알맞은 것은?', options: ['그럴 수도 있다', '잘못은 늘 가해자에게 있고, 이런 말은 2차 피해다', '둘 다 잘못이다'], answer: 1, difficulty: 0.15, explain: '피해자는 잘못이 없어요.' },
            { type: 'short', prompt: '아직 어려운 항목 하나와 그 까닭을 써요.' },
          ],
        },
        worksheet: {
          title: '2차 피해 막기',
          items: [
            { type: 'check', prompt: '할 수 있는 것에 표시해요.', options: ['2차 피해 알아보기', '지지하는 말 하기', '소문 멈추기', '도움 경로 알기'] },
            { type: 'short', prompt: '친구에게 알려 줄 오늘의 한 문장을 써요.' },
          ],
        },
      }),
    );
  }

  PaperLessons.registerModules(ALL);
})();
