/* 창체 법정교육 학교폭력 예방 — 중학교(7~9학년) 모듈 내용(edu-module.v1). 작성 규칙: MODULES_BUILD.md, 계획: framework/mandatory.json 의 bully 중.
 * 근거: 학교폭력예방법 제15조·시행령 제17조(학교폭력 예방교육 — 법 학기별 1회 이상, 지침 연 11시간·사이버폭력 예방 3차시 이상), research-mandatory §1·§2
 *   (학교폭력 예방 중: 사이버폭력·집단따돌림·가해·피해 대응 절차·갈등 해결). 주제마다 source 는 체계도에 있다.
 * 주제 18개(7·8·9학년 6개씩) · 계획 모듈 141개. 사이버폭력 주제(단톡방·캡처·사칭·갈취·합성·좋아요)는 학년마다 2개씩.
 * 지킨 틀: 피해 경험을 묻지 않는다 — 가상 인물(가명 두 글자)·가상 장면으로만 묻는다. 잘못은 괴롭힌 한 사람(무리)에게 있고, 말한 사람·알린 사람은 잘한 것이다.
 *   가해 행동은 '행동'을 바로잡는다(사람에게 낙인을 붙이는 말을 쓰지 않는다 — '나쁜 애'가 아니라 '멈출 행동'). 방관자는 조력자가 될 수 있는 사람으로 그린다.
 *   사이버폭력 장면은 실제 앱·서비스 이름을 쓰지 않는다(단톡방·익명 질문 앱·게임 채팅처럼 일반 이름). 자료·그래프 수치는 모두 지어낸 가상 자료이고 화면에 '가상'이라고 밝힌다.
 *   법 조항은 근거 파일에 있는 것(학교폭력예방법 제15조·시행령 제17조 — 예방교육)만 쓰고, 조치 호수·심의 기구 이름은 쓰지 않는다('학교의 결정'·'학교의 조치'로만).
 *   도움 받을 곳은 체계도 concepts 의 것만: 담임·상담 선생님·Wee클래스·보건실·보호자, '학교폭력 신고·상담 창구'(번호는 쓰지 않는다 — 계획 글의
 *   [학교가 확인해 넣는 학교폭력 신고·상담 번호] 자리. 교사가 학교에서 확인한 번호를 판서·활동지에 적어 준다), 익명 상담.
 *   안전교육 폭력예방(saf-violence 중)과 같은 틀: 알릴 때 말할 내용 '언제·어디서·누가·무엇을', 알린 사람은 잘한 것, 증거(화면 기록)는 차단보다 먼저.
 *   saf-violence 중의 장면(체육관 뒤 수빈·꼬맹이 별명·자는 사진·학원 앞 휴대전화)과 인물 이름은 되풀이하지 않는다.
 * 교구 한계로 계획 글을 바꾼 곳(모듈 levels 글은 실제 설정대로):
 *   - block-coding: 글 블록을 잇는 교구가 아니라 칸 판 거북이 코딩판이다 — '도움 길 찾기 판'(별 = 거쳐야 할 단계, 바위 = 막는 행동, 깃발 = 어른·창구)으로 바꾸고,
 *     단계의 이름과 차례는 문제 글·활동지(빈칸·표)에 적는다. '조건 갈래'는 if 블록(막히면 돌기)으로 한다.
 *   - keyboard: 구호 글자를 치는 교구가 아니다 — 리듬 블록으로 구호 박(4박 마디)을 짓고, 구호 글은 문제 글·활동지에 적는다.
 *   - collage: 글자를 넣을 수 없다 — 포스터·카드의 바탕(모양·색)만 꾸미고 문구는 활동지에 쓴다.
 *   - map: 화살표를 그리지 못한다 — '힘이 쏠린 자리'·'도움 받을 곳'을 핀으로 짚고, 화살표는 활동지에 그린다.
 *   - pattern: 조각 글은 4자 안팎 — 행동 사다리는 짧은 낱말 조각의 빈칸 채우기·틀린 조각 찾기·규칙 고르기로 한다.
 *
 * 사람 확인: 근거 파일(research-*.md)에 없는 일반 사실·수칙 문장. 확인처를 함께 적는다(모듈 id 는 bully.m. 뒤).
 *   - g7-power-imbalance 전반: 갈등과 학교폭력을 가르는 세 기준(힘의 불균형·되풀이·피해)과 "한 번이라도 심하면 폭력일 수 있다" — 교육부 학교폭력 예방교육 자료·학교폭력 사안처리 가이드북(학교폭력 정의)
 *   - g7-power-imbalance.activity.escalation-path: "갈등 중 한쪽이 여럿을 끌어들여 몰아세우면 힘이 기울어 폭력이 될 수 있다" — 교육부 학교폭력 예방교육 자료(집단따돌림)
 *   - g7-group-chat 전반: 원치 않는 초대 되풀이·한 명 강퇴·저격글·한 명 말에만 답하지 않기(읽씹 몰이)가 사이버 따돌림이 될 수 있다 — 교육부·방송통신위원회 사이버폭력 예방교육 자료
 *   - g7-group-chat.wrap.help-route: 단톡방 괴롭힘은 나가기 전에 화면 기록(캡처)으로 남기고 믿을 어른에게 알린다 — 경찰청·방송통신위원회 사이버폭력 대응 안내
 *   - g7-capture-spread 전반: 친구 대화·프로필 캡처를 돌리는 것, 익명으로 놀리는 질문을 보내는 것도 사이버폭력이 될 수 있고 익명이어도 책임이 남는다 — 방송통신위원회·교육부 사이버폭력 예방교육 자료
 *   - g7-capture-spread.activity.reply-or-report: 익명 놀림에는 맞받아치거나 공개로 답하기보다 답하지 않기·화면 기록·차단·신고·어른에게 알리기 — 방송통신위원회·경찰청 사이버폭력 대응 안내(기능 이름은 앱마다 다름)
 *   - g7-bystander 전반: 방관자 효과·책임 분산(보는 사람이 많을수록 서로 미룬다), 따돌림 장면의 역할(가해·동조·강화·방관·조력) — 교육부 학교폭력 예방교육 자료(주변인 교육)
 *   - g7-bystander.intro.crowd-graph: '목격자 수가 늘수록 돕는 비율이 줄어든다'는 경향 — 사회심리학 방관자 효과 연구 소개 자료(그래프 수치는 가상)
 *   - g7-restorative-questions 전반: 회복적 질문의 차례(무슨 일이 있었나 → 누가 어떤 영향을 받았나 → 무엇이 필요한가 → 앞으로 어떻게 할까) — 교육부·시도교육청 회복적 생활교육 안내 자료
 *   - g7-restorative-questions.intro.pause-breath: 화가 날 때 잠깐 멈추고 숨 고르기(열 박 = 10초는 수업 연습 약속 값) — 학교 상담·회복적 생활교육 자료
 *   - g7-help-route 전반: 털어놓은 친구의 말은 끝까지 듣고 판단하지 않으며, 괴롭힘처럼 안전이 걸린 비밀은 지키기보다 믿을 어른에게 함께 잇는다 — 교육부 학교폭력 예방교육 자료·Wee클래스 안내
 *   - g7-help-route.activity.help-map: 담임 선생님·상담 선생님(Wee클래스)·보건실·교무실에서 할 수 있는 일 — 학교별 안내(학교마다 다르므로 교사가 자기 학교에 맞춘다)
 *   - g8-fake-account 전반: 친구 이름·사진을 빌린 가짜 계정(사칭)과 남의 계정에 몰래 들어가 쓰는 것(도용)은 명예·신뢰를 해치는 사이버폭력이 될 수 있다 — 방송통신위원회·경찰청 사이버폭력 예방 안내
 *   - g8-fake-account.activity.response-blocks: 대응 차례(화면 기록 → 서비스의 사칭 신고 → 비밀번호 바꾸기 → 지인에게 알리기 → 학교에 알리기) — 방송통신위원회·한국인터넷진흥원 안내(신고 메뉴 이름은 서비스마다 다름)
 *   - g8-fake-account.wrap.security-check: 계정 보안 점검 다섯 칸(2단계 인증·비밀번호 공유 안 함·로그아웃·공개 범위·모르는 링크 안 누르기) — 한국인터넷진흥원 개인정보 보호 수칙
 *   - g8-cyber-extortion 전반: 기프티콘·게임 아이템·데이터(핫스팟)를 되풀이해 억지로 내게 하는 것은 사이버 갈취(금품갈취), 게임 속 몰이 욕설·강제 강퇴는 사이버 언어폭력·따돌림이 될 수 있다 — 교육부·경찰청 사이버폭력 예방 안내
 *   - g8-cyber-extortion.activity.record-steps: 기록(화면 녹화·캡처, 시간·닉네임이 보이게) → 게임 안 신고 → 차단 → 보호자·학교 알리기 — 경찰청·한국인터넷진흥원 안내(신고 메뉴 이름은 게임마다 다름)
 *   - g8-hierarchy 전반: 다원적 무지(속으로는 다들 싫은데 서로 괜찮은 줄 알고 침묵함)가 집단따돌림을 지탱한다, 먼저 한 사람이 목소리를 내면 두 번째가 따라오기 쉽다 — 사회심리학 개념 소개 자료·교육부 집단따돌림 예방 자료
 *   - g8-report-barriers 전반: "알리는 것은 고자질이 아니라 안전을 위한 일", 학교는 알린 학생을 보호하고 알린 사람의 이야기를 함부로 알리지 않으며 보복도 학교폭력으로 다룬다 — 학교폭력예방법(신고자 보호·비밀누설 금지·보복행위 금지) 원문, 교육부 학교폭력 사안처리 가이드북
 *   - g8-report-barriers.activity.route-map: 학교폭력 신고·상담 창구는 익명 상담과 방과 후·주말 연락이 될 수 있다 — 창구 운영 안내(학교가 확인한 창구로 교사가 확인)
 *   - g8-report-barriers.activity.what-to-say: 증거가 완벽하지 않아도 본 것·들은 것을 말하면 도움이 시작된다 — 교육부 학교폭력 사안처리 가이드북
 *   - g8-mediator 전반: 또래 조정자는 누가 맞는지 판정하지 않고 요약하고 되묻는다, 회복적 서클의 차례(여는 말 → 약속 → 이야기 → 영향 → 바람 → 약속하기 → 닫는 말)와 말하는 물건 — 교육부·시도교육청 회복적 생활교육·또래조정 안내 자료
 *   - g8-mediator 전반: 학교폭력 사안은 또래 조정으로 끝내지 않고 어른(담임·상담 선생님)에게 알린다 — 교육부 학교폭력 사안처리 가이드북
 *   - g8-real-apology 전반: 사과의 네 요소(잘못 인정·영향 이해·바로잡기·되풀이하지 않기), 용서는 피해를 입은 사람이 정한다(사과를 받았다고 용서해야 하는 것은 아니다) — 교육부·시도교육청 회복적 생활교육 자료
 *   - g9-photo-synthesis 전반: 친구 사진을 합성·편집해 놀리는 이미지·영상(얼굴 합성 영상, 딥페이크)은 인격·명예를 해치는 사이버폭력이 될 수 있고, 만든 사람·퍼뜨린 사람 모두 책임이 있다 — 방송통신위원회·교육부 사이버폭력·디지털 성범죄 예방 자료
 *   - g9-photo-synthesis.activity.response-plan: 성적 합성물이면 저장·전달하지 말고 바로 어른과 함께 경찰에 신고한다 — 교육부·여성가족부 디지털 성범죄 대응 안내(신고 경로는 학교가 확인해 안내)
 *   - g9-photo-synthesis.intro.harm-estimate: 한 번 퍼진 이미지는 원본을 지워도 저장·캡처본이 남아 다시 돌 수 있다 — 방송통신위원회 안내(그래프 수치는 가상)
 *   - g9-like-share 전반: 놀림 게시물에 누른 좋아요·공유·댓글이 추천 노출을 키워 확산을 돕는다(반응이 많을수록 더 많이 보이는 구조), 디지털 발자국은 오래 남는다 — 방송통신위원회·한국지능정보사회진흥원 디지털 시민교육 자료(그래프 수치는 가상)
 *   - g9-like-share.activity.reaction-sort: 비판 댓글도 게시물 반응으로 세어져 노출을 키울 수 있다 — 디지털 시민교육 자료(서비스마다 다름)
 *   - g9-hate-speech 전반: 외모·성적·출신·가정형편을 깎아내리는 말이 되풀이되면 언어폭력이 되고, 집단을 낮추는 말은 혐오 표현이 될 수 있으며, 비하가 되풀이되면 따돌림으로 굳기 쉽다 — 국가인권위원회 혐오 표현 안내·교육부 언어폭력 예방 자료
 *   - g9-process-flow 전반(근거 약함 — 체계도 source 에 '세부 처리 단계는 근거 약함'): 신고 뒤 큰 흐름 '신고·접수 → 피해 학생 보호(분리 등) → 사안 조사 → 학교의 결정 → 조치와 회복 지원' — 교육부 학교폭력 사안처리 가이드북
 *   - g9-process-flow 전반: 사안 조사·결정 과정에서 당사자(피해·가해 학생과 보호자)의 이야기를 듣는다 — 교육부 학교폭력 사안처리 가이드북
 *   - g9-process-flow 전반: 학원·동네 등 학교 밖에서 학생 사이에 생긴 일도 학교폭력이 될 수 있어 학교에 알릴 수 있다 — 학교폭력예방법 정의 조항 원문, 교육부 가이드북
 *   - g9-process-flow.activity.case-tracking: 신고를 받으면 피해 학생 보호를 먼저 살핀다 — 교육부 학교폭력 사안처리 가이드북
 *   - g9-interests 전반: 갈등 당사자의 겉 입장 뒤에 있는 바람(욕구)을 찾으면 서로 받아들일 해결안이 넓어진다, 합의문에는 할 일·기한·점검 날짜를 넣는다 — 갈등 해결·또래조정 교육 자료(교육부·시도교육청 회복적 생활교육 안내)
 *   - g9-peace-pledge.activity.route-card: 새 학교에서는 학교 안내문·누리집에서 담임·상담실(Wee클래스)·학교폭력 신고·상담 창구를 찾아 둔다 — 학교별 안내(교사가 확인)
 */
(function () {
  const ALL = [];
  // 주제마다 공통 칸을 채우는 모듈 틀. sid = '<intro|activity|wrap>.<이름>'
  // 활동 sid 는 'act.<이름>' 으로 써도 id 는 계획과 같은 '.activity.' 가 된다.
  const ACT = 'activity';
  const TYPE = { intro: 'intro', act: 'activity', activity: 'activity', wrap: 'wrap' };
  const MK = (topic, grades) => (sid, o) => Object.assign({ id: `bully.m.${topic}.${sid.replace(/^(act|activity)\./, ACT + '.')}`, schema: 'edu-module.v1', type: TYPE[sid.split('.')[0]], domain: 'bully', band: '중', topic: `bully.m.${topic}`, grades }, o);
  const sid = (s) => (typeof s === 'string' ? s : s.id || s.label);

  // ---- 카드 판 문항 조각: { prompt, toolOptions, target } 을 돌려준다(문항 levels[단계] 에도 그대로 쓴다) ----
  // 나누기: cards [{ id, text, to: 칸id }] — to 가 없으면 남겨야 하는 함정 카드
  const strip = (cards) => cards.map((c) => { const x = Object.assign({}, c); delete x.to; delete x.ok; return x; });
  const SB = (prompt, slots, cards, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'sort', slots, cards: strip(cards) }, opt), target: { sort: Object.fromEntries(slots.map((s) => [sid(s), cards.filter((c) => c.to === sid(s)).map((c) => c.id)])) } });
  // 종이 분류판(sortboard 글 카드 모드): mode 없이 slots·cards. more = 도전에 더할 카드(함정 포함)
  const BOARD = (prompt, slots, cards, opt) => ({ prompt, toolOptions: Object.assign({ slots, cards: strip(cards) }, opt), target: { sort: Object.fromEntries(slots.map((s) => [sid(s), cards.filter((c) => c.to === sid(s)).map((c) => c.id)])) } });
  // 차례: cards 를 바른 차례로 적는다(화면에서는 섞여 나온다). trap = 끼워 둔 함정 카드(차례 칸에 넣지 않음)
  const OB = (prompt, cards, opt, trap) => ({ prompt, toolOptions: Object.assign({ mode: 'order', slots: cards.length, cards: [...cards, ...(trap || [])] }, opt), target: { order: cards.map((c) => c.id) } });
  // 짝: pairs [[칸 글, 카드 글]] + 함정 카드 글
  const MB = (prompt, pairs, extra, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'match', slots: pairs.map((p, i) => ({ id: `s${i + 1}`, label: p[0] })), cards: [...pairs.map((p, i) => ({ id: `k${i + 1}`, text: p[1] })), ...(extra || []).map((t, i) => ({ id: `x${i + 1}`, text: t }))] }, opt), target: { match: Object.fromEntries(pairs.map((p, i) => [`s${i + 1}`, `k${i + 1}`])) } });
  // 빈칸: pairs [['…___…', 카드 글, who?, motif?]] — 칸 하나에 카드 한 장. who 를 주면 말풍선 인물(story fill)
  const FB = (prompt, pairs, extra, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'fill', slots: pairs.map((p, i) => Object.assign({ id: `f${i + 1}`, label: p[0] }, p[2] ? { who: p[2] } : {}, p[3] ? { motif: p[3] } : {})), cards: [...pairs.map((p, i) => ({ id: `w${i + 1}`, text: p[1] })), ...(extra || []).map((t, i) => ({ id: `y${i + 1}`, text: t }))] }, opt), target: { fill: Object.fromEntries(pairs.map((p, i) => [`f${i + 1}`, `w${i + 1}`])) } });
  // 고르기: cards [{ id, text, ok }] — ok 인 카드만 바구니에
  const PB = (prompt, basket, cards, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'pick', basket, cards: strip(cards) }, opt), target: { pick: cards.filter((c) => c.ok).map((c) => c.id) } });
  // 문항 = 기본 조각 + 단계별 조각
  const IT = (base, easy, challenge, more) => Object.assign({}, base, { levels: Object.assign({}, easy ? { easy } : {}, challenge ? { challenge } : {}) }, more);
  const pickCards = (cards, ids) => ids.map((i) => cards.find((c) => c.id === i));
  // 출구 질문 교구 문항: 조각 → { type: 'tool', tool, prompt, options, target }
  const X = (tool, frag, more) => Object.assign({ type: 'tool', tool, prompt: frag.prompt, options: frag.toolOptions, target: frag.target }, more);

  // ---- 갈림길(dilemma): 깊이 3 나무 하나로 쉬움(갈림 2번)·기본(갈림 3번)·도전(갈림 3번 + 견주기 근거) 판을 만든다 ----
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
  // 한 장면(깊이 1) 갈림길 문항 조각
  const ONE = (prompt, title, scene, good, R, ok, more) => Object.assign({ prompt, toolOptions: { title, scene, reasons: R || [], compare: true }, target: Object.assign({ path: good.map((g) => [].concat(g)) }, R && R.length ? { reasons: ok, some: true } : {}) }, more);
  // 도입 시연용 갈림길: 깊이 d 판 + 바른 길 하나
  const DEMO_DIL = (title, tree, good, R, d) => ({ tool: 'dilemma', options: { title, scene: cut(tree, d || 2), reasons: R || [] }, sequence: [{ path: paths(good, d || 2)[0], reasons: R && R.length ? [R[0].id] : [] }] });

  // ---- 칸 지도 ----
  const PIN = (prompt, opt, target, more) => Object.assign({ prompt, toolOptions: opt, target }, more);
  // ---- 그래프 읽기 ----
  const RD = (prompt, opt, target) => ({ prompt, toolOptions: Object.assign({ mode: 'read' }, opt), target });
  // ---- 기준표 글쓰기: o = { topic, min, max, s:[최소, 최대], title, starter? } ----
  const RW = (prompt, o, checks, must, more) => Object.assign({ prompt, toolOptions: Object.assign({ topic: o.topic, minChars: o.min, maxChars: o.max, minSentences: o.s[0], maxSentences: o.s[1] }, o.title ? { title: o.title } : {}, o.starter ? { starter: o.starter } : {}), target: Object.assign({ selfCheck: checks }, must ? { mustInclude: must } : {}) }, more);
  // ---- 도움 길 찾기 판(block-coding build): 별 = 거쳐야 할 단계, 바위 = 막는 행동, 깃발 = 어른·창구 ----
  const ROUTE = (prompt, b, t, more) => Object.assign({ prompt, toolOptions: Object.assign({ mode: 'build' }, b), target: Object.assign({ reach: true }, t) }, more);
  // ---- 구호 박 짓기(keyboard rhythm): 4박 마디 measures 개를 박에 맞게 채운다 ----
  const BEAT = (prompt, o, t, more) => Object.assign({ prompt, toolOptions: Object.assign({ mode: 'rhythm', meter: 4 }, o), target: t }, more);

  // 이 영역에서 늘 쓰는 도움 받을 곳(체계도 concepts 의 것만). 번호는 학교가 확인해 교사가 적어 준다.
  const HELP = '학교폭력 신고·상담 창구';
  const SAFE_NOTE = '가상 인물·가상 장면이다. 학생 자신의 일을 묻지 않고 "가상 인물이라면"으로만 이야기한다. 수업 중이나 뒤에 걱정을 말하는 학생은 따로 만나 상담 선생님·Wee클래스로 잇는다.';
  const LINE_NOTE = `'${HELP}' 자리에는 학교가 확인한 학교폭력 신고·상담 번호를 판서하거나 활동지에 적어 준다(이 모듈 글에는 번호를 쓰지 않았다).`;

  // ==== 7학년 · 힘의 불균형으로 가려 보는 갈등과 학교폭력 (bully.m.g7-power-imbalance) ====
  {
    const M = MK('g7-power-imbalance', [7]);
    const CRIT = ['힘의 불균형', '되풀이', '피해'];
    // 판단 근거 카드(여러 사례에서 뽑은 문장)
    const EVID = [
      { id: 'e1', text: '덩치 큰 셋이 한 명을 둘러쌌다', to: '힘의 불균형' }, { id: 'e2', text: '2주 동안 아침마다 가방을 숨겼다', to: '되풀이' },
      { id: 'e3', text: '그 친구가 등교를 무서워한다', to: '피해' }, { id: 'e4', text: '무리 다섯이 전학생 하나에게만 한다', to: '힘의 불균형' },
      { id: 'e5', text: '모둠 과제 때마다 한 명에게만 일을 몬다', to: '되풀이' }, { id: 'e6', text: '그 친구가 점심을 혼자 먹게 됐다', to: '피해' },
      { id: 't1', text: '둘 다 목소리가 컸다' }, { id: 't2', text: '하는 쪽은 재미있었다고 한다' },
    ];
    const VERD = ['학교폭력에 가깝다', '갈등·실수에 가깝다'];
    const CASES = [
      { id: 'c1', text: '모둠 과제 때마다 한 명에게만 일을 몰아준다', to: '학교폭력에 가깝다' }, { id: 'c2', text: '농구 시합 중 실수로 부딪쳐 넘어졌다', to: '갈등·실수에 가깝다' },
      { id: 'c3', text: '전학생에게만 날마다 매점 심부름을 시킨다', to: '학교폭력에 가깝다' }, { id: 'c4', text: '축구 자리 때문에 둘이 한 번 말다툼했다', to: '갈등·실수에 가깝다' },
      { id: 'c5', text: '무리 넷이 한 명의 책상을 매일 밀어 둔다', to: '학교폭력에 가깝다' }, { id: 'c6', text: '발표 순서로 다투다 서로 사과했다', to: '갈등·실수에 가깝다' },
    ];
    const MORE = [{ id: 'c7', text: '단짝이 다툰 뒤 한쪽이 친구 셋을 불러 몰아세운다', to: '학교폭력에 가깝다' }, { id: 'c8', text: '체육복을 빌린 친구가 돌려주는 걸 하루 잊었다', to: '갈등·실수에 가깝다' }];
    // 교실 배치도(가상) — 무리 셋·혼자 앉은 학생·전학생
    const ROOM7 = { grid: [6, 4], title: '가상의 1학년 교실 배치도', places: [
      { name: '뒷자리 무리 셋', icon: 'dot', at: [4, 3] }, { name: '혼자 앉은 라온', icon: 'house', at: [0, 2] },
      { name: '창가 전학생 건우', icon: 'house', at: [5, 0] }, { name: '선생님 책상', icon: 'office', at: [2, 0] },
      { name: '무리 쪽을 보는 반장', icon: 'dot', at: [3, 1] }, { name: '라온 옆 빈자리', icon: 'dot', at: [1, 2] },
      { name: '건우 앞자리 학생', icon: 'dot', at: [5, 1] },
    ] };
    const ROOM4 = Object.assign({}, ROOM7, { places: ROOM7.places.filter((p) => ['뒷자리 무리 셋', '혼자 앉은 라온', '창가 전학생 건우', '선생님 책상'].includes(p.name)) });
    // 체육복 다툼에서 시작하는 갈림길(깊이 3). 나 = 체육복을 빌려준 시우
    const D1 = { text: '태오가 내(시우) 체육복을 빌려 가서 사흘째 돌려주지 않는다. 오늘 체육 시간에 나는 체육복이 없어 혼났다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'ask', text: '쉬는 시간에 태오에게 "체육복 오늘 돌려줘"라고 말한다', result: '태오가 "아, 깜빡했어"라고 한다.', impact: [{ who: '태오와 나', text: '둘 사이의 일로 남는다', tone: 1 }], end: '둘이서 말로 풀기 시작했어요.',
        next: { text: '태오가 "내일 줄게"라고 하고는 다음 날 또 잊었다. 나는 화가 많이 난다.', ask: '이제 어떻게 할까?', choices: [
          { id: 'firm', text: '"두 번째야. 오늘 집에 가기 전에 꼭 줘"라고 다시 말한다', result: '태오가 미안하다며 그날 돌려준다.', impact: [{ who: '나', text: '체육복을 돌려받는다', tone: 1 }], end: '분명히 말해 갈등이 풀렸어요.',
            next: { text: '돌려받은 뒤에도 마음이 풀리지 않는다. 친구들이 "태오 혼내 주자"라고 한다.', choices: [
              { id: 'enough', text: '"돌려받았으니 됐어, 몰아세우지는 말자"라고 한다', result: '일이 둘 사이에서 끝난다.', impact: [{ who: '태오', text: '여럿에게 몰리지 않는다', tone: 1 }] },
              { id: 'pile', text: '친구들과 함께 태오에게 따지러 간다', result: '태오 혼자 넷에게 둘러싸인다.', impact: [{ who: '태오', text: '혼자 여럿을 마주한다', tone: -1 }], why: '일이 끝났는데 여럿이 한 명을 몰아세우면 힘이 기울어요.' }] } },
          { id: 'teacher', text: '담임 선생님께 체육복 일을 말씀드린다', result: '선생님이 둘을 불러 이야기를 듣는다.', impact: [{ who: '나', text: '도움을 받는다', tone: 1 }], end: '어른의 도움으로 풀었어요.',
            next: { text: '선생님 앞에서 태오가 사과하고 체육복을 돌려준다.', choices: [
              { id: 'accept', text: '사과를 듣고 "다음엔 제때 줘"라고 말한다', result: '둘이 다시 인사하는 사이가 된다.', impact: [{ who: '태오와 나', text: '관계가 이어진다', tone: 1 }] },
              { id: 'spread', text: '반 단톡방에 "태오는 빌려 가면 안 줌"이라고 올린다', result: '태오에 대한 놀림이 단톡방에 번진다.', impact: [{ who: '태오', text: '반 전체에게 놀림받는다', tone: -1 }], why: '끝난 일을 여럿 앞에 퍼뜨리면 이번엔 내가 힘을 기울게 해요.' }] } }] } },
      { id: 'ignore', text: '말해 봐야 소용없다며 그냥 참는다', result: '태오는 내 사정을 모른다.', impact: [{ who: '나', text: '속이 계속 상한다', tone: -1 }], why: '참기만 하면 상대는 무엇이 문제인지 몰라요. 분명히 말해 볼 수 있어요.', end: '참기만 해 속상함이 쌓였어요.',
        next: { text: '태오가 이번엔 내 실내화까지 빌려 간다. 나는 아무 말도 못 한다.', ask: '어떻게 할까?', choices: [
          { id: 'speak', text: '"체육복부터 돌려줘. 실내화는 안 돼"라고 말한다', result: '태오가 머쓱해하며 둘 다 돌려준다.', impact: [{ who: '나', text: '내 물건을 지킨다', tone: 1 }], end: '늦었지만 분명히 말했어요.',
            next: { text: '태오가 "치사하게 왜 그래"라고 투덜댄다.', choices: [
              { id: 'calm', text: '"내 물건이니까 제때 받고 싶어"라고 차분히 말한다', result: '태오가 더 따지지 않는다.', impact: [{ who: '태오와 나', text: '다툼이 커지지 않는다', tone: 1 }] },
              { id: 'yell', text: '친구들을 불러 태오를 둘러싸고 소리친다', result: '태오가 여럿에게 둘러싸여 굳는다.', impact: [{ who: '태오', text: '혼자 여럿을 마주한다', tone: -1 }], why: '여럿을 끌어들이는 순간 힘이 한쪽으로 기울어요.' }] } },
          { id: 'hold', text: '계속 참는다', result: '태오는 다른 물건도 당연하게 빌린다.', impact: [{ who: '나', text: '물건도 마음도 잃는다', tone: -1 }], why: '내 뜻을 분명히 말해야 상대가 멈출 수 있어요.' }] } },
      { id: 'gang', text: '친구 다섯을 단톡방에 모아 "태오 같이 혼내 주자"라고 한다', result: '다섯이 함께 태오를 몰아세우는 말을 올린다.', impact: [{ who: '태오', text: '여섯 대 한 명이 된다', tone: -1 }], why: '여럿을 끌어들이면 갈등이 힘의 불균형이 있는 폭력으로 바뀌어요.', ending: '체육복 갈등이 여섯 대 한 명의 몰아세우기가 됐어요.' }] };
    const R1 = [{ id: 'r1', text: '둘 사이 다툼은 둘이 말로 풀 수 있다' }, { id: 'r2', text: '여럿을 끌어들이면 힘이 한쪽으로 기운다' },
      { id: 'r3', text: '먼저 잘못한 쪽은 여럿이 혼내도 된다', why: '먼저 잘못했어도 여럿이 한 명을 몰아세우면 폭력이 될 수 있어요.' }, { id: 'r4', text: '참는 것이 가장 좋은 해결이다', why: '참기만 하면 상대는 문제를 몰라요. 분명히 말하는 방법이 있어요.' }];
    const R1C = { reasons: [{ id: 'r5', text: '말로 푼 길에서는 일이 둘 사이에서 끝났다' }, { id: 'r6', text: '친구를 끌어들인 길에서는 태오 혼자 여럿을 마주했다' }], ok: ['r5', 'r6'] };

    ALL.push(
      // ---- 도입 ----
      M('intro.two-cases', {
        title: '두 사례 견주어 첫 판단', method: '두 사례 견주어 첫 판단 내리기', tool: 'dilemma', minutes: 6,
        levels: { easy: '교사가 두 사례(말다툼·가방 숨기기)만 읽고 둘 중 학교폭력에 가까운 쪽을 함께 고른다.', base: '시연 판에서 고른 뒤 결과 글의 가상 반 판단 분포를 읽고, 판단 근거 카드 하나를 고른다.', challenge: '시연 판의 둘째 장면(세 번째 사례: 서로 하던 별명이 한 명에게만 쏠림)까지 판단하고 근거를 말한다.' },
        intro: {
          teacher: '"축구 자리 때문에 말다툼한 두 친구, 덩치 큰 셋이 한 명의 가방을 매일 숨기는 장면. 둘 다 학교폭력일까요?" 시연 단추로 가방 장면을 고르는 모습과 결과 글의 가상 반 판단(28명 중 25명)을 보인다. "둘 다 싸운 거니 똑같다"는 말이 나오면 "말다툼은 둘이 같은 힘으로 맞섰지만, 셋 대 하나는 어떨까요?"라고 되묻는다. 오늘은 힘의 불균형·되풀이·피해 세 기준으로 갈등과 폭력을 가른다고 밝힌다.',
          student: '두 가상 사례를 견주어 학교폭력에 가까운 쪽을 고르고, 친구들의 판단과 내 판단의 근거를 비교해요.',
          demo: DEMO_DIL('두 사례 견주기', { text: '사례 가: 축구 자리 때문에 두 친구가 한 번 말다툼했다. 사례 나: 덩치 큰 셋이 한 학생의 가방을 2주째 아침마다 숨긴다.', ask: '학교폭력에 가까운 쪽은?', motif: 'house', choices: [
            { id: 'a', text: '사례 가(말다툼)', result: '가상 반 28명 중 3명이 이쪽을 골랐다.', why: '같은 힘의 두 사람이 한 번 다툰 것은 갈등에 가까워요.' },
            { id: 'b', text: '사례 나(가방 숨기기)', result: '가상 반 28명 중 25명이 이쪽을 골랐다.', impact: [{ who: '가방 주인', text: '셋 대 하나, 2주째 이어진다', tone: -1 }],
              next: { text: '사례 다: 친한 넷이 서로 별명을 부르며 놀았는데, 요즘은 한 명만 계속 불린다.', ask: '이 사례는?', choices: [
                { id: 'shift', text: '한 명에게만 쏠렸으니 폭력에 가까워졌다', result: '놀이였던 일이 한 명에게 기울었다.', impact: [{ who: '불리는 친구', text: '혼자 감당한다', tone: -1 }] },
                { id: 'same', text: '처음에 다 같이 했으니 끝까지 놀이다', result: '불리는 친구는 요즘 말이 없어졌다.', why: '처음엔 놀이였어도 한 명에게 쏠리면 힘이 기울어요.' }] } }] },
            [['b', 'shift']], [{ id: 'k1', text: '셋 대 하나라 힘이 기울었다' }, { id: 'k2', text: '2주째 되풀이됐다' }, { id: 'k3', text: '가방 주인이 피해를 본다' }]),
          art: { draw: 'a paper-cut split scene: on the left two students arguing face to face on a soccer field, on the right three tall students hiding one small student\'s bag', banner: '둘은 같을까, 다를까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '판단 분포 수(28명 중 25명·3명)는 수업용 가상 값이다. ' + SAFE_NOTE,
      }),
      M('intro.survey-gap', {
        title: '"장난" 인식 차이 그래프', method: '가상 설문의 "장난" 인식 차이 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '막대 값이 보이는 채로 두 막대(하는 쪽 68%·듣는 쪽 23%)의 수치만 함께 읽는다.', base: '두 막대의 차이를 시연 판 보기에서 고르고, 차이가 생기는 까닭을 한 줄로 쓴다.', challenge: '듣는 쪽 수치가 낮은 까닭을 힘의 불균형(듣는 쪽은 거절하기 어렵다)과 이어 한 줄로 쓴다.' },
        intro: {
          teacher: '"\'별명 부르기는 장난이다\'에 별명을 부르는 쪽은 68%가, 듣는 쪽은 23%만 동의했어요. 같은 행동인데 왜 이렇게 다를까요?" 가상 중학교 설문 막대그래프를 띄우고 시연 단추로 차이(45%p)를 고르는 모습을 보인다. "듣는 쪽이 예민한 거예요"라는 말이 나오면 "부르는 쪽이 셋이고 듣는 쪽이 하나라면, 듣는 쪽이 싫다고 말하기 쉬울까요?"라고 되묻는다. 이 자료는 수업용으로 지어낸 가상 설문임을 먼저 밝힌다.',
          student: '가상 설문 그래프에서 하는 쪽과 듣는 쪽의 동의 비율을 읽고, 차이가 생기는 까닭을 한 줄로 적어요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '가상 중학교 설문 — "별명 부르기는 장난이다"에 동의', unit: '%', xLabel: '응답한 쪽', yLabel: '동의 비율', max: 100, data: [['별명을 부르는 쪽', 68], ['별명을 듣는 쪽', 23]], question: '두 막대의 차이는?', choices: ['45%p', '23%p', '91%p'] }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper-cut bar chart with one tall bar and one short bar on a classroom board, a student pointing at the gap between them', banner: '같은 행동, 다른 생각', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '68%·23%는 체계도 계획 글의 가상 설문 값이다(실제 조사 아님). 화면 제목에 \'가상\'을 밝혔다.',
      }),

      // ---- 활동 ----
      M('act.criteria-analysis', {
        title: '세 기준으로 사례 분석', method: '세 기준으로 사례 분석표 채우기', tool: 'sortboard', minutes: 15,
        levels: { easy: '근거 카드 4장만 세 기준 바구니에 나누고, 틀린 바구니에 넣으면 까닭을 말하고 되돌려 준다. 판정 문항은 사례 4장.', base: '근거 카드 8장(함정 2장)을 세 기준 바구니에 나누고, 사례 6장을 학교폭력·갈등 바구니에 판정한다.', challenge: '판정 문항에 판정이 갈릴 만한 사례 2장이 더해지고, 셋째 문항에서 반론에 쓸 근거와 못 쓸 근거를 가른 뒤 활동지에 반론을 쓴다.' },
        activity: {
          title: '세 기준으로 사례 분석', tool: 'sortboard',
          teacher: '"\'둘 다 목소리가 컸다\'는 세 기준 가운데 어디에 들어갈까요?" 근거 카드를 넣을 때마다 그 문장이 힘·되풀이·피해 가운데 무엇을 보여 주는지 소리 내어 말하게 한다. "서로 싸우면 둘 다 똑같다"는 학생에게 "발표 순서로 다투다 서로 사과한 일과 무리 넷이 매일 책상을 밀어 두는 일, 무엇이 다른가요?"라고 되묻는다. 판정은 사람이 아니라 행동에 붙인다는 점, 잘못은 그 행동을 한 쪽에 있다는 점을 짚는다.',
          task: '가상 사례에서 뽑은 근거 문장을 힘의 불균형·되풀이·피해 바구니에 나누고, 사례마다 학교폭력에 가까운지 갈등·실수에 가까운지 판정해요.',
          levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            IT(BOARD('근거 문장을 세 기준 바구니에 나누세요. 어느 기준에도 안 맞는 카드는 남겨요.', CRIT, EVID),
              BOARD('근거 문장 4장을 세 기준 바구니에 나누세요.', CRIT, pickCards(EVID, ['e1', 'e2', 'e3', 't1']))),
            IT(BOARD('사례 카드를 학교폭력에 가까운 것과 갈등·실수에 가까운 것으로 판정하세요.', VERD, CASES),
              BOARD('사례 카드 4장을 판정하세요.', VERD, pickCards(CASES, ['c1', 'c2', 'c3', 'c4'])),
              BOARD('사례 카드 8장을 판정하세요. 판정이 갈릴 만한 사례도 있어요.', VERD, [...CASES, ...MORE])),
            IT(BOARD('사례 "친한 넷이 한 명을 매일 \'느림보\'라 부른다"의 판단 근거를 가르세요.', ['판단 근거가 된다', '판단 근거가 못 된다'], [
              { id: 'p1', text: '넷이 한 명에게만 그런다', to: '판단 근거가 된다' }, { id: 'p2', text: '날마다 되풀이된다', to: '판단 근거가 된다' },
              { id: 'p3', text: '그 친구가 모둠 활동을 피한다', to: '판단 근거가 된다' }, { id: 'p4', text: '평소 친한 사이라고 한다', to: '판단 근거가 못 된다' },
              { id: 'p5', text: '부르는 쪽은 장난이라고 한다', to: '판단 근거가 못 된다' }]),
              null,
              Object.assign(BOARD('사례 "친한 넷이 한 명을 매일 \'느림보\'라 부른다"의 판단 근거를 가르세요(카드가 더 있어요).', ['판단 근거가 된다', '판단 근거가 못 된다'], [
                { id: 'p1', text: '넷이 한 명에게만 그런다', to: '판단 근거가 된다' }, { id: 'p2', text: '날마다 되풀이된다', to: '판단 근거가 된다' },
                { id: 'p3', text: '그 친구가 모둠 활동을 피한다', to: '판단 근거가 된다' }, { id: 'p4', text: '평소 친한 사이라고 한다', to: '판단 근거가 못 된다' },
                { id: 'p5', text: '부르는 쪽은 장난이라고 한다', to: '판단 근거가 못 된다' }, { id: 'p6', text: '불리는 친구가 "그만"이라고 했다', to: '판단 근거가 된다' },
                { id: 'p7', text: '선생님이 아직 모르신다', to: '판단 근거가 못 된다' }])),
              { conclude: '힘이 한쪽으로 기울고, 되풀이되고, 피해가 생기면 갈등이 아니라 학교폭력에 가까워요. 장난이라는 말은 판단 근거가 못 돼요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '사례 하나를 골라 세 기준으로 분석하고 판정을 써요.', columns: ['기준', '사례에서 찾은 근거'], cells: [['힘의 불균형', ''], ['되풀이', ''], ['피해', ''], ['판정', '']], answer: '(예) 넷 대 한 명, 날마다, 모둠 활동을 피함 → 학교폭력에 가깝다' }],
          easy: [{ type: 'choice', prompt: '갈등보다 학교폭력에 가까운 사례는?', options: ['무리 넷이 한 명의 책상을 매일 밀어 둔다', '발표 순서로 다투다 서로 사과했다'], answer: '무리 넷이 한 명의 책상을 매일 밀어 둔다' }] },
        notes: SAFE_NOTE,
      }),
      M('act.escalation-path', {
        title: '갈등이 폭력으로 바뀌는 갈림길', method: '갈등이 폭력으로 바뀌는 갈림길 따라가기', tool: 'dilemma', minutes: 15,
        levels: { easy: '갈림 2번까지 가고, 고를 때마다 태오와 나에게 생기는 영향(도움·피해)이 바로 보인다.', base: '갈림 3번까지 가고, 영향 표시는 맞힌 뒤에만 보인다. 끝에서 근거를 고른다.', challenge: '갈림 3번 뒤 다른 길(친구를 끌어들인 길)의 결말과 견주는 근거 카드까지 고르고, 두 결말의 차이를 활동지에 쓴다.' },
        activity: {
          title: '갈등이 폭력으로 바뀌는 갈림길', tool: 'dilemma',
          teacher: '"체육복을 안 돌려준 태오가 먼저 잘못했어요. 그럼 친구 다섯을 모아 태오를 혼내 줘도 될까요?" 학생마다 한 길을 끝까지 가 본 뒤 되돌아가 친구를 끌어들인 길과 견주게 한다. "먼저 잘못한 쪽은 당해도 싸다"는 학생에게 "여섯이 한 명을 몰아세우는 순간, 힘은 어느 쪽으로 기울었나요?"라고 되묻는다. 처음 잘못(체육복)은 바로잡을 일이고, 여럿을 끌어들이면 새 잘못이 생긴다는 것을 끝 장면에서 짚는다.',
          task: '체육복 갈등에서 시작한 장면에서 세 번 골라 결과를 따라가고, 어느 지점에서 힘의 불균형이 생기는지 찾아요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL({ easy: '체육복을 돌려받지 못했어요. 두 번 골라 결과를 보고 근거를 고르세요.', base: '체육복을 돌려받지 못했어요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 간 뒤, 친구를 끌어들인 길의 결말과 견주는 근거까지 고르세요.' },
              '체육복 갈등', D1, [['ask', 'firm', 'enough'], ['ask', 'teacher', 'accept'], ['ignore', 'speak', 'calm']], R1, ['r1', 'r2'], R1C),
            ONE('체육복 일에서 힘의 불균형이 생긴 때를 고르세요.', '힘이 기운 때', { text: '체육복 일에서 갈등이 폭력으로 바뀐 때는 언제일까?', motif: 'house', choices: [
              { id: 'first', text: '태오가 체육복을 돌려주지 않았을 때', result: '바로잡을 잘못이지만 둘 사이의 갈등이다.', why: '이때는 같은 힘의 두 사람 사이 일이에요.' },
              { id: 'group', text: '시우 쪽이 친구 다섯을 모아 몰아세웠을 때', result: '여섯 대 한 명이 됐다.', impact: [{ who: '태오', text: '혼자 여럿을 마주한다', tone: -1 }], ending: '여럿을 끌어들인 순간 힘이 기울었어요.' },
              { id: 'argue', text: '둘이 서로 따졌을 때', result: '말다툼은 둘 사이에서 오갔다.', why: '둘이 따진 것은 아직 갈등이에요.' }] }, ['group'],
              [{ id: 'q1', text: '여럿 대 한 명이 됐다' }, { id: 'q2', text: '먼저 잘못한 쪽이 누구인지가 기준이다', why: '누가 먼저였는지보다 지금 힘이 기울었는지를 봐요.' }], ['q1'],
              { levels: { easy: { prompt: '체육복 일에서 힘의 불균형이 생긴 때를 고르세요(영향 단서를 보며 골라요).' } } }),
            ONE('다툼이 커지지 않게 할 첫마디를 고르세요.', '첫마디', { text: '체육복을 사흘째 못 받았다. 태오를 복도에서 만났다.', ask: '어떤 첫마디가 좋을까?', motif: 'house', choices: [
              { id: 'clear', text: '"내 체육복 오늘 꼭 돌려줘"', result: '태오가 무엇이 문제인지 바로 안다.', impact: [{ who: '태오와 나', text: '둘이서 풀 길이 열린다', tone: 1 }], ending: '바라는 것을 분명히 말했어요.' },
              { id: 'blame', text: '"너 원래 그런 애지?"', result: '태오가 발끈해 말다툼이 된다.', impact: [{ who: '태오와 나', text: '다툼이 커진다', tone: -1 }], why: '사람을 깎아내리면 행동 이야기가 사라지고 다툼이 커져요.' },
              { id: 'crowd', text: '"반 애들한테 다 말할 거야"', result: '태오가 겁먹고 피한다.', why: '여럿 앞에 퍼뜨리겠다는 말은 힘을 기울게 하는 위협이에요.' }] }, ['clear'], null, null,
              { conclude: '먼저 잘못한 쪽이 있어도 여럿을 끌어들이면 힘이 기울어 폭력이 돼요. 바라는 것을 분명히 말하고, 안 되면 어른에게 알려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '체육복 갈등이 폭력으로 바뀔 수 있었던 지점과 그 까닭을 한 문장으로 써요.' }],
          easy: [{ type: 'choice', prompt: '갈등이 폭력으로 바뀌는 때는?', options: ['한쪽이 여럿을 끌어들여 몰아세울 때', '둘이 서로 바라는 것을 말할 때'], answer: '한쪽이 여럿을 끌어들여 몰아세울 때' }] },
        notes: SAFE_NOTE,
      }),
      M('act.definition-writing', {
        title: '장난과 폭력의 차이 설명', method: '"장난과 폭력의 차이" 세 문장 설명 쓰기', tool: 'rubric-writing', minutes: 15,
        levels: { easy: '문장 틀을 채워 두 문장을 쓰고 기준 하나(힘·되풀이·피해 가운데 하나)가 들어갔는지 점검한다.', base: '세 문장으로 쓰고 기준표(기준 둘 이상·예시 하나·쉬운 말)로 점검한다.', challenge: '셋째 문항에서 반대 의견("다들 장난인데")에 답하는 문장을 더해 네 문장으로 쓴다.' },
        activity: {
          title: '장난과 폭력의 차이 설명', tool: 'rubric-writing',
          teacher: '"초등학생 동생이 \'형들이 장난이래\'라고 하면, 장난과 폭력의 차이를 어떻게 설명해 줄까요?" \'힘의 불균형\' 같은 낱말을 쓰지 않고도 쉬운 말(셋이 하나에게, 매일, 그 친구가 무서워해)로 바꿔 쓰게 한다. "한 번뿐이면 괜찮다"고 쓰는 학생에게 "한 번이라도 크게 다쳤다면 어떨까요?"라고 되묻는다. 실제 친구 이름은 쓰지 않는다.',
          task: '초등학생 동생에게 장난과 학교폭력의 차이를 세 문장으로 설명하는 글을 쓰고, 기준표로 스스로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(RW('첫 문장: 장난과 폭력을 가르는 기준 하나를 쉬운 말로 쓰세요.', { topic: '초등학생 동생에게 장난과 폭력을 가르는 기준 하나를 쉬운 말로 설명하세요.', min: 15, max: 120, s: [1, 2], title: '설명 ① 기준' }, ['기준(힘·되풀이·피해) 하나를 썼다', '동생이 알아들을 쉬운 말로 썼다', '친구 이름을 쓰지 않았다']),
              RW('틀을 채워 첫 문장을 쓰세요.', { topic: '장난과 폭력을 가르는 기준 하나를 쓰세요.', min: 12, max: 100, s: [1, 2], starter: '여럿이 한 명에게 ___ 하면 장난이 아니야.' }, ['기준 하나를 썼다', '친구 이름을 쓰지 않았다'])),
            IT(RW('둘째 문장: 장난과 폭력을 견주는 예시 하나를 쓰세요.', { topic: '장난인 경우와 폭력인 경우를 견주는 예시를 한두 문장으로 쓰세요.', min: 20, max: 140, s: [1, 2], title: '설명 ② 예시' }, ['예시를 하나 들었다', '두 경우가 무엇이 다른지 보인다', '쉬운 말로 썼다']),
              RW('틀을 채워 예시 문장을 쓰세요.', { topic: '장난과 폭력을 견주는 예시를 쓰세요.', min: 15, max: 120, s: [1, 2], starter: '둘이 같이 웃으면 장난이지만, ___ 하면 폭력이야.' }, ['예시를 하나 들었다', '쉬운 말로 썼다'])),
            IT(RW('세 문장을 이어 동생에게 보낼 설명 글을 완성하세요.', { topic: '앞에서 쓴 문장을 이어 동생에게 장난과 학교폭력의 차이를 세 문장으로 설명하세요.', min: 40, max: 220, s: [3, 4], title: '동생에게 보내는 설명' }, ['기준을 둘 이상 넣었다', '예시를 하나 넣었다', '쉬운 말로 썼다'], [['힘', '여럿', '한 명'], ['되풀이', '반복', '매일', '계속']]),
              RW('두 문장을 이어 동생에게 보낼 설명 글을 완성하세요.', { topic: '장난과 학교폭력의 차이를 두 문장으로 설명하세요.', min: 25, max: 160, s: [2, 3], starter: '장난은 ___ 이지만, 폭력은 ___ 이야.' }, ['기준을 하나 이상 넣었다', '쉬운 말로 썼다']),
              RW('설명에 반대 의견("다들 장난인데 뭐가 문제야")에 답하는 문장을 더해 완성하세요.', { topic: '동생에게 보낼 설명 세 문장에, "다들 장난인데 뭐가 문제야"라는 말에 답하는 문장을 하나 더해 쓰세요.', min: 55, max: 280, s: [4, 5], title: '반대 의견에 답하기' }, ['기준을 둘 이상 넣었다', '예시를 하나 넣었다', '반대 의견에 답했다', '쉬운 말로 썼다'], [['힘', '여럿', '한 명'], ['되풀이', '반복', '매일', '계속']]),
              { conclude: '장난과 폭력의 차이는 하는 쪽의 마음이 아니라 힘이 기울었는지, 되풀이되는지, 상대가 아픈지로 설명할 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '동생에게 보낼 설명 글을 세 문장으로 옮겨 써요(기준 둘 이상·예시 하나).' }] },
      }),
      M('act.power-map', {
        title: '교실 배치도에서 힘의 흐름', method: '교실 자리 배치로 힘의 흐름 그리기', tool: 'map', minutes: 15,
        levels: { easy: '인물 4명만 있는 배치도에서 이름을 보며 힘이 몰린 자리와 혼자인 자리를 짚는다.', base: '인물 7명이 있는 배치도에서 힘이 몰린 곳·말이 향하는 곳·곁에 갈 자리를 짚고, 말과 행동의 화살표는 활동지에 그린다.', challenge: '같은 배치도에서 힘의 쏠림을 줄일 자리를 짚고, 모둠 바꾸기 안을 보기에서 고른다.' },
        activity: {
          title: '교실 배치도에서 힘의 흐름', tool: 'map',
          teacher: '"이 교실에서 말과 웃음은 주로 어디서 나와 어디로 향하나요?" 가상 배치도의 인물 설명을 읽고 핀을 꽂을 때마다 \'누가 많고 누가 혼자인가\'를 말하게 한다. "자리는 그냥 자리일 뿐"이라는 학생에게 "혼자 앉은 라온이 뒷자리 무리의 웃음을 매일 듣는다면, 같은 교실이 같게 느껴질까요?"라고 되묻는다. 무리에 이름을 붙여 탓하지 않고, 쏠림을 줄일 자리와 행동을 찾는 데 집중한다.',
          task: '가상 교실 배치도에서 힘이 몰린 곳과 혼자인 사람을 찾아 핀을 꽂고, 쏠림을 줄일 자리를 찾아요. 말과 행동의 화살표는 활동지에 그려요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(PIN('웃음과 말이 한꺼번에 나오는, 힘이 몰린 자리에 핀을 꽂으세요.', ROOM7, { place: '뒷자리 무리 셋' }),
              PIN('인물 4명 가운데 힘이 몰린 자리에 핀을 꽂으세요.', ROOM4, { place: '뒷자리 무리 셋' })),
            IT(PIN('무리의 말이 매일 향하는, 혼자 앉은 사람에게 핀을 꽂으세요.', ROOM7, { place: '혼자 앉은 라온' }),
              PIN('인물 4명 가운데 혼자 앉아 말을 듣는 사람에게 핀을 꽂으세요.', ROOM4, { place: '혼자 앉은 라온' })),
            IT(PIN('라온 곁에 가장 먼저 갈 수 있는 자리에 핀을 꽂으세요.', ROOM7, { place: '라온 옆 빈자리' }),
              PIN('혼자인 사람이 가장 쉽게 도움을 청할 어른의 자리에 핀을 꽂으세요.', ROOM4, { place: '선생님 책상' }),
              PIN('힘의 쏠림을 줄일 자리에 핀을 꽂고, 모둠 바꾸기 안을 고르세요.', Object.assign({}, ROOM7, { ask: { q: '쏠림을 줄이는 모둠 바꾸기 안은?', choices: ['라온·건우를 서로 다른 친구들과 섞어 모둠을 짠다', '무리 셋을 그대로 한 모둠으로 둔다', '라온과 건우를 맨 뒤에 따로 앉힌다'] } }), { place: '라온 옆 빈자리', pick: 0 }),
              { conclude: '힘은 사람 수와 자리에서도 쏠려요. 혼자인 사람 곁에 서고, 모둠을 섞으면 쏠림이 줄어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '배치도에서 말과 행동이 향하는 쪽을 화살표로 떠올리고, 쏠림을 줄일 방법 하나를 써요.' }] },
        notes: '교구는 화살표를 그리지 못해 힘이 몰린 곳·혼자인 곳·곁에 갈 자리를 핀으로 짚고, 화살표는 활동지에 그리게 했다. ' + SAFE_NOTE,
      }),

      // ---- 정리 ----
      M('wrap.criteria-chant', {
        title: '세 기준 구호 리듬', method: '세 기준 구호 리듬 만들기', tool: 'keyboard', minutes: 7,
        levels: { easy: '구호 한 줄("힘이 기울고, 되풀이되고, 아프다면 폭력")을 4박 마디 하나 리듬으로 짓는다(박 수가 보인다).', base: '구호 두 줄을 4박 마디 둘에 맞춰 리듬으로 짓고 모둠 구호로 정한다.', challenge: '대처 행동 한 줄을 더한 구호 세 줄을 4박 마디 셋에 맞춰 짓는다.' },
        wrap: {
          teacher: '"\'힘이 기울고, 되풀이되고, 아프다면 폭력\' — 이 구호를 네 박에 어떻게 나눠 칠까요?" 모둠마다 리듬 블록으로 박을 채운 뒤 구호를 소리 내어 맞춰 친다. 구호는 판단 기준이지 친구를 부르는 별명이 아니라는 점을 짚고, "장난이었다고 하면 폭력이 아니다"라는 오개념을 구호 끝 \'폭력\'에서 한 번 더 바로잡는다.',
          exitTicket: [
            IT(Object.assign(X('keyboard', BEAT('구호 "힘이 기울고, 되풀이되고 / 아프다면 폭력"을 4박 마디 두 개 리듬으로 지어요.', { measures: 2, blocks: ['q', 'e', 'h', 'qr'] }, { beats: true, selfCheck: ['구호 글자에 맞춰 박을 나눴다', '모둠과 함께 소리 내어 쳐 보았다'] })), { difficulty: 0.2 }),
              { prompt: '구호 한 줄 "힘이 기울고 아프면 폭력"을 4박 마디 하나 리듬으로 지어요.', toolOptions: { measures: 1, blocks: ['q', 'h', 'qr'], showBeats: true }, target: { beats: true, selfCheck: ['구호 글자에 맞춰 박을 나눴다'] } },
              { prompt: '구호에 대처 한 줄 "보면 멈추고 알린다"를 더해 4박 마디 세 개 리듬으로 지어요.', toolOptions: { measures: 3, blocks: ['q', 'e', 'h', 'qr', 'er'] }, target: { beats: true, selfCheck: ['구호 글자에 맞춰 박을 나눴다', '대처 한 줄을 더했다', '모둠과 함께 소리 내어 쳐 보았다'] } }),
            { type: 'choice', prompt: '갈등과 학교폭력을 가르는 세 기준으로 알맞은 것은?', options: ['힘의 불균형·되풀이·피해', '목소리 크기·먼저 한 사람·장소', '친한 정도·웃음·인원'], answer: 0, difficulty: 0.15, explain: '힘이 기울고, 되풀이되고, 피해가 생기는지를 봐요.' },
            { type: 'short', prompt: '구호에 더하고 싶은 대처 행동 한 줄을 써요.' },
          ],
        },
        worksheet: {
          title: '세 기준 구호',
          items: [
            { type: 'blank', prompt: '구호를 완성해요.', text: '힘이 ___, 되풀이되고, ___ 폭력', answer: '기울고, 아프다면' },
            { type: 'short', prompt: '우리 모둠 구호를 한 줄로 써요.' },
          ],
        },
        notes: '교구는 구호 글자를 치지 않는다 — 리듬 블록으로 4박 마디를 채우고, 구호 글은 문제 글·활동지에 적었다.',
      }),
      M('wrap.exit-check', {
        title: '오늘의 기준으로 한 사례 판정', method: '오늘의 기준으로 한 사례 판정하기', tool: 'wordcards', minutes: 7,
        levels: { easy: '기준 낱말 카드 3장 가운데 사례에 맞는 카드 하나를 골라 판정한다.', base: '기준 낱말 카드 6장 가운데 사례에 맞는 세 장을 골라 판정하고 판정 문장을 고른다.', challenge: '판정 뒤 할 행동 카드를 고르는 출구 질문까지 답한다.' },
        wrap: {
          teacher: '"단톡방에서 매일 한 명의 말에만 아무도 답하지 않아요. 때리지도 욕하지도 않았는데, 오늘 기준으로 보면 어떤가요?" 카드를 고른 뒤 판정 문장을 함께 읽는다. "답을 안 한 건 아무것도 안 한 것"이라는 학생에게 "여럿이 약속한 듯 한 사람만 빼고 답한다면, 그 사람에게는 무엇이 되풀이되나요?"라고 되묻는다.',
          exitTicket: [
            IT(X('wordcards', PB('사례 "단톡방에서 매일 한 명의 말에만 답하지 않음"에 해당하는 기준 카드를 담아요.', '이 사례에 해당하는 기준', [
              { id: 'w1', text: '힘의 불균형(여럿 대 한 명)', ok: true }, { id: 'w2', text: '되풀이(매일)', ok: true }, { id: 'w3', text: '피해(혼자 남는다)', ok: true },
              { id: 'w4', text: '우연한 실수' }, { id: 'w5', text: '서로 같은 힘의 말다툼' }, { id: 'w6', text: '한 번뿐인 일' }]), { difficulty: 0.2 }),
              PB('사례 "단톡방에서 매일 한 명의 말에만 답하지 않음"에 해당하는 기준 카드 하나를 담아요.', '이 사례에 해당하는 기준', [
                { id: 'w2', text: '되풀이(매일)', ok: true }, { id: 'w4', text: '우연한 실수' }, { id: 'w6', text: '한 번뿐인 일' }])),
            { type: 'choice', prompt: '이 사례의 판정 문장으로 알맞은 것은?', options: ['여럿이 한 명을 매일 빼놓아 피해가 생기니 학교폭력(따돌림)에 가깝다', '말을 안 한 것뿐이니 아무 문제가 없다', '답을 못 받은 쪽이 먼저 말을 줄여야 한다'], answer: 0, difficulty: 0.2, explain: '아무 말 없이도 여럿이 한 명을 되풀이해 빼놓으면 따돌림이 돼요.' },
            { type: 'choice', prompt: '이 장면을 본 내가 먼저 할 행동으로 알맞은 것은?', options: ['그 친구의 말에 내가 먼저 답한다', '나도 답하지 않는다', '그 친구에게 단톡방을 나가라고 한다'], answer: 0, difficulty: 0.2, explain: '빼놓는 흐름을 깨는 작은 행동이 먼저예요. 계속되면 어른에게 알려요.' },
          ],
        },
        worksheet: {
          title: '한 사례 판정',
          items: [
            { type: 'check', prompt: '"단톡방에서 매일 한 명에게만 답하지 않음"에 해당하는 기준에 표시해요.', options: ['힘의 불균형', '되풀이', '피해', '우연한 실수'] },
            { type: 'short', prompt: '이 사례를 판정하는 문장을 한 줄로 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 7학년 · 단톡방 초대·강퇴·저격글 (bully.m.g7-group-chat) — 사이버폭력 ====
  {
    const M = MK('g7-group-chat', [7]);
    // 가상 반 단톡방 대화(바른 차례)
    const CHAT = [
      { id: 'l1', text: '반장이 새 방에 유나를 초대했다' }, { id: 'l2', text: '누가 유나 사진에 웃음 이모티콘을 달았다' },
      { id: 'l3', text: '"ㅋㅋ" 이모티콘이 줄줄이 올라왔다' }, { id: 'l4', text: '유나가 "그만해"라고 썼다' },
      { id: 'l5', text: '방장이 유나를 내보냈다(강퇴)' }, { id: 'l6', text: '"왜 나감? 다시 초대함"이 올라왔다' },
      { id: 'l7', text: '다시 초대된 유나에게 이모티콘이 쏟아졌다' }, { id: 'l8', text: '한 명이 "이제 그만하자"라고 썼다' },
    ];
    const D1 = { text: '반 단톡방에 방장이 "유나 강퇴할 사람 손"이라고 올렸다. 벌써 이모티콘 5개가 달렸다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'ignore', text: '못 본 척 휴대폰을 덮는다', result: '이모티콘이 12개로 늘고 유나가 강퇴된다.', impact: [{ who: '유나', text: '반 방에서 쫓겨난다', tone: -1 }], why: '보고 넘기면 투표가 그대로 이어져요.', end: '아무도 막지 않아 유나가 강퇴됐어요.',
        next: { text: '유나가 강퇴됐다. 다음 날 유나는 교실에서 아무와도 말하지 않는다.', ask: '이제 어떻게 할까?', choices: [
          { id: 'dmyuna', text: '유나에게 따로 "괜찮아? 같이 선생님께 말하자"라고 보낸다', result: '유나가 "말하면 더 심해질까 봐"라고 답한다.', impact: [{ who: '유나', text: '혼자가 아니라고 느낀다', tone: 1 }], end: '늦었지만 유나 곁에 섰어요.',
            next: { text: '유나가 "말하면 더 심해질까 봐 무서워"라고 한다.', choices: [
              { id: 'together', text: '"화면 기록해 둔 거 있어. 같이 담임 선생님께 가자"', result: '선생님이 단톡방 일을 살피기 시작한다.', impact: [{ who: '유나', text: '보호를 받는다', tone: 1 }] },
              { id: 'keep', text: '"그럼 나도 모른 척할게"', result: '단톡방 따돌림이 계속된다.', impact: [{ who: '유나', text: '혼자 견딘다', tone: -1 }], why: '두려움을 함께 덜어 줄 어른에게 잇는 것이 먼저예요.' }] } },
          { id: 'stay', text: '이미 끝난 일이라며 그냥 지낸다', result: '방장은 다른 학생도 투표에 올린다.', impact: [{ who: '반 분위기', text: '다음은 누구일까 눈치 본다', tone: -1 }], why: '끝난 것처럼 보여도 따돌림은 이어져요.' }] } },
      { id: 'thumb', text: '나도 찬성 이모티콘을 누른다', result: '투표에 힘이 실려 유나가 바로 강퇴된다.', impact: [{ who: '유나', text: '반 전체에게 밀려난다', tone: -1 }], why: '이모티콘 하나도 강퇴에 힘을 보태는 행동이에요.', ending: '내 이모티콘이 강퇴에 힘을 보탰어요.' },
      { id: 'oppose', text: '방에 "사람 빼는 투표는 하지 말자"라고 쓴다', result: '몇 명이 이모티콘을 지운다. 방장이 "왜 편듦?"이라고 쓴다.', impact: [{ who: '유나', text: '편이 있다고 느낀다', tone: 1 }], end: '투표를 멈추자고 말했어요.',
        next: { text: '방장이 "왜 편듦? 너도 나갈래?"라고 쓴다.', ask: '어떻게 할까?', choices: [
          { id: 'stand', text: '"편드는 게 아니라, 한 명 빼는 건 따돌림이야"라고 쓴다', result: '두 명이 "맞아"라고 쓴다.', impact: [{ who: '반 분위기', text: '멈추자는 쪽이 늘어난다', tone: 1 }], end: '따돌림이라고 분명히 말했어요.',
            next: { text: '방장이 투표 글을 지웠지만 나에게 "두고 봐"라고 따로 보냈다.', choices: [
              { id: 'record', text: '대화 화면을 기록하고 담임 선생님께 알린다', result: '선생님이 방장과 이야기하고 나를 살핀다.', impact: [{ who: '나', text: '보호를 받는다', tone: 1 }] },
              { id: 'fight', text: '방장에게 욕을 섞어 맞받아친다', result: '말싸움이 커지고 내 글도 문제가 된다.', impact: [{ who: '나', text: '다툼에 휘말린다', tone: -1 }], why: '맞받아치기보다 기록하고 알리는 것이 나를 지켜요.' }] } },
          { id: 'back', text: '무서워서 "농담이야"라고 물러선다', result: '투표가 다시 이어진다.', impact: [{ who: '유나', text: '다시 혼자 남는다', tone: -1 }], why: '혼자 맞서기 어렵다면 물러서기보다 어른에게 알리는 길이 있어요.' }] } },
      { id: 'dmboss', text: '방장에게 따로 "투표 내리자"라고 보낸다', result: '방장이 "재미로 한 건데"라고 답한다.', impact: [{ who: '방장', text: '멈출 기회를 얻는다', tone: 1 }], end: '방장에게 따로 말했어요.',
        next: { text: '방장이 "재미로 한 건데 왜 그래"라고 답한다.', ask: '어떻게 답할까?', choices: [
          { id: 'explain', text: '"유나는 재미없어. 지금 내리면 괜찮아"라고 보낸다', result: '방장이 투표 글을 내린다.', impact: [{ who: '유나', text: '강퇴를 피한다', tone: 1 }], end: '방장이 스스로 멈췄어요.',
            next: { text: '투표 글이 사라졌다. 유나는 아직 아무 말이 없다.', choices: [
              { id: 'check', text: '유나에게 "아까 일 괜찮아?"라고 따로 묻는다', result: '유나가 고맙다고 답한다.', impact: [{ who: '유나', text: '혼자가 아니라고 느낀다', tone: 1 }] },
              { id: 'forget', text: '끝났으니 아무 말도 안 한다', result: '유나는 무슨 일이 있었는지 혼자 곱씹는다.', impact: [{ who: '유나', text: '아직 불안하다', tone: 0 }], why: '멈춘 뒤 곁에 있어 주는 것도 조력이에요.' }] } },
          { id: 'give', text: '"그래, 재미면 뭐"라고 넘어간다', result: '투표가 이어진다.', impact: [{ who: '유나', text: '강퇴된다', tone: -1 }], why: '한쪽만 재미있는 것은 장난이 아니에요.' }] } }] };
    const R1 = [{ id: 'r1', text: '이모티콘 하나도 강퇴에 힘을 보탠다' }, { id: 'r2', text: '한 명을 빼는 투표는 따돌림이다' },
      { id: 'r3', text: '방장이 정한 일이니 따라야 한다', why: '방장이어도 한 명을 내쫓는 것은 따돌림이에요.' }, { id: 'r4', text: '단톡방 일은 학교와 상관없다', why: '같은 반 친구 사이의 단톡방 따돌림도 학교폭력이에요.' }];
    const R1C = { reasons: [{ id: 'r5', text: '모른 척한 길에서는 유나가 강퇴됐다' }, { id: 'r6', text: '멈추자고 한 길에서는 투표가 지워졌다' }], ok: ['r5', 'r6'] };
    // 가상 단톡방 하루 언급 수(한 학생에 대한)
    const DAY1 = [['16시', 2], ['17시', 3], ['18시', 2], ['19시', 4], ['20시', 18], ['21시', 35], ['22시', 22], ['23시', 6]];
    const DAY2 = [['16시', 1], ['17시', 2], ['18시', 3], ['19시', 15], ['20시', 24], ['21시', 5], ['22시', 2], ['23시', 1]];
    const LINE = (title, data, q, choices, more) => Object.assign({ type: 'line', title, unit: '건', xLabel: '시각', yLabel: '언급 수', data, question: q, choices }, more);

    ALL.push(
      // ---- 도입 ----
      M('intro.chat-replay', {
        title: '가상 단톡방 대화 흐름', method: '가상 단톡방 대화 흐름 따라 읽기', tool: 'timeline', minutes: 6,
        levels: { easy: '교사가 첫 다섯 줄(초대~강퇴)만 시연 판 차례대로 읽어 주며 분위기가 바뀐 줄을 함께 짚는다.', base: '대화 8줄의 차례를 시연 판으로 보고 분위기가 바뀐 줄(넷째 줄 "그만해")을 짚는다.', challenge: '분위기를 바꿀 수 있었던 한 줄을 새로 지어 말한다.' },
        intro: {
          teacher: '"유나가 \'그만해\'라고 쓴 뒤에도 대화는 왜 멈추지 않았을까요?" 시연 단추로 가상 단톡방 대화 8줄이 차례대로 놓이는 모습을 보인다. "다시 초대해 준 건 착한 일 아니냐"는 말이 나오면 "다시 초대된 유나에게 무엇이 쏟아졌나요?"라고 되묻는다. 초대·강퇴·다시 초대가 되풀이되면 나가지도 머물지도 못하는 따돌림이 된다는 것을 오늘의 질문으로 삼는다.',
          student: '가상 반 단톡방 대화 8줄을 차례대로 따라 읽고, 분위기가 바뀐 줄과 바꿀 수 있었던 줄을 찾아요.',
          demo: { tool: 'timeline', options: { mode: 'order', axis: ['먼저', '나중'], slots: 8, cards: [CHAT[4], CHAT[0], CHAT[6], CHAT[2], CHAT[7], CHAT[1], CHAT[5], CHAT[3]] }, sequence: [{ order: CHAT.map((c) => c.id) }] },
          art: { draw: 'a paper-cut phone screen with a long column of paper speech bubbles and emoji stickers, one small bubble saying stop in the middle', banner: '어디서 분위기가 바뀌었을까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: SAFE_NOTE,
      }),
      M('intro.subtweet-quiz', {
        title: '이름 없는 저격글 알아보기', method: '이름 없는 저격글 알아보기', tool: 'dilemma', minutes: 6,
        levels: { easy: '저격글 하나를 읽고 저격인지 고른 뒤 당사자 화면 결과를 함께 본다.', base: '시연 판에서 저격글을 판단하고, 이어지는 둘째 글(다른 저격글)과 견준다.', challenge: '저격글을 본 다른 학생들의 반응이 당사자에게 어떻게 보일지까지 말한다.' },
        intro: {
          teacher: '"\'누구라고는 안 할게, 우리 반 체육복 냄새나는 애\' — 이름이 없으니 저격이 아닐까요?" 시연 단추로 \'저격이다\'를 고른 뒤 당사자 화면(반 친구들이 누구인지 다 아는 결과)을 보인다. "이름을 안 썼으니 괜찮다"는 말이 나오면 "읽는 사람 모두가 누구인지 안다면, 이름을 쓴 것과 무엇이 다를까요?"라고 되묻는다.',
          student: '이름을 쓰지 않은 상태 메시지가 저격인지 판단하고, 당사자에게 어떻게 보이는지 결과 장면을 봐요.',
          demo: DEMO_DIL('이름 없는 저격글', { text: '상태 메시지: "누구라고는 안 할게, 우리 반 체육복 냄새나는 애." 반 친구들이 이 글을 보고 있다.', ask: '저격글일까?', motif: 'house', choices: [
            { id: 'yes', text: '누구인지 다 알 수 있으니 저격글이다', result: '반 친구들이 한 학생을 쳐다본다. 그 학생은 체육복을 가방에 숨긴다.', impact: [{ who: '글이 겨냥한 학생', text: '이름 없이도 놀림받는다', tone: -1 }],
              next: { text: '다음 날 다른 상태 메시지: "어제 그 애 오늘도 그 옷 ㅋ"', ask: '이 글은?', choices: [
                { id: 'again', text: '같은 학생을 다시 겨냥한 저격이다', result: '저격이 되풀이되며 반에 퍼진다.', impact: [{ who: '글이 겨냥한 학생', text: '날마다 놀림받는다', tone: -1 }] },
                { id: 'joke', text: '그냥 혼잣말이다', result: '그 학생은 교실에 들어오기 싫어진다.', why: '같은 사람을 거듭 겨냥한 글이에요.' }] } },
            { id: 'no', text: '이름이 없으니 저격이 아니다', result: '반 친구들이 모두 누구인지 알아차린다.', why: '이름이 없어도 누구인지 알 수 있으면 저격이에요.' }] },
            [['yes', 'again']], [{ id: 'k1', text: '이름이 없어도 누구인지 알 수 있다' }, { id: 'k2', text: '여럿이 보는 곳에 올렸다' }]),
          art: { draw: 'a paper-cut phone status message with a blurred name, classmates around looking toward one student who hides a gym uniform', banner: '이름이 없으면 괜찮을까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '상태 메시지 글은 체계도 계획 글의 예시다. 반에 같은 상황의 학생이 있으면 예시를 바꾼다. ' + SAFE_NOTE,
      }),

      // ---- 활동 ----
      M('act.chat-dilemma', {
        title: '강퇴 투표가 올라왔을 때', method: '강퇴 투표 갈림길에서 결과 따라가기', tool: 'dilemma', minutes: 15,
        levels: { easy: '갈림 2번까지 가고, 고를 때마다 유나와 반 분위기에 생기는 영향이 바로 보인다.', base: '갈림 3번까지 가고, 영향 표시는 맞힌 뒤에만 보인다. 끝에서 내 선택의 근거를 고른다.', challenge: '갈림 3번 뒤 모른 척한 길의 결말과 견주는 근거 카드까지 고르고, 방장 입장에서 다시 걸어 보는 셋째 문항을 푼다.' },
        activity: {
          title: '강퇴 투표가 올라왔을 때', tool: 'dilemma',
          teacher: '"이모티콘 하나 누른 것도 강퇴에 손을 든 걸까요?" 학생마다 한 길을 끝까지 가 본 뒤 모른 척한 길·멈추자고 한 길·방장에게 따로 말한 길을 견주게 한다. "단톡방에서 나가면 끝"이라는 학생에게 "나간 유나를 다시 초대하고 또 내보낸다면 끝났다고 할 수 있을까요?"라고 되묻는다. 방장도 멈출 수 있는 사람이라는 점, 멈추자고 말한 사람은 잘한 것이라는 점을 짚는다.',
          task: '반 단톡방 강퇴 투표 장면에서 세 번 골라 유나와 반 분위기의 변화를 따라가고, 끝에서 내 선택의 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL({ easy: '강퇴 투표가 올라왔어요. 두 번 골라 결과를 보고 근거를 고르세요.', base: '강퇴 투표가 올라왔어요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 간 뒤, 모른 척한 길의 결말과 견주는 근거까지 고르세요.' },
              '강퇴 투표', D1, [['oppose', 'stand', 'record'], ['dmboss', 'explain', 'check'], ['ignore', 'dmyuna', 'together']], R1, ['r1', 'r2'], R1C),
            ONE('강퇴된 유나가 방을 나가면 끝일까요? 알맞은 길을 고르세요.', '나가면 끝일까?', { text: '강퇴와 다시 초대가 되풀이되자 유나가 스스로 방을 나가려 한다. 유나가 나에게 "나가면 끝나겠지?"라고 묻는다.', ask: '어떻게 답할까?', motif: 'house', choices: [
              { id: 'leave', text: '"응, 나가면 끝이야"', result: '유나가 나간 뒤 다른 방에서 놀림이 이어진다.', why: '방을 나가도 놀림은 다른 곳에서 이어질 수 있어요.' },
              { id: 'save', text: '"나가기 전에 화면부터 남기고, 같이 선생님께 가자"', result: '기록이 남아 선생님이 바로 살필 수 있다.', impact: [{ who: '유나', text: '도움을 받는다', tone: 1 }], ending: '나가기 전에 기록을 남기고 어른에게 이었어요.' }] }, ['save'],
              [{ id: 'q1', text: '나가도 따돌림은 다른 방에서 이어질 수 있다' }, { id: 'q2', text: '나가면 증거도 함께 사라진다', why: '나가기 전에 기록을 남기면 증거가 지켜져요. 사라지는 게 아니라 남겨야 해요.' }], ['q1']),
            ONE('"유나 말엔 아무도 답하지 마"라는 메시지를 받았을 때 길을 고르세요.', '읽씹 몰이', { text: '방장이 따로 "유나 말엔 아무도 답하지 마"라고 여러 명에게 보냈다. 유나가 반 방에 "내일 체육 준비물 뭐야?"라고 묻는다.', ask: '어떻게 할까?', motif: 'house', choices: [
              { id: 'follow', text: '나도 답하지 않는다', result: '유나의 질문 아래에 아무 답도 달리지 않는다.', impact: [{ who: '유나', text: '반에서 지워진 느낌이 든다', tone: -1 }], why: '여럿이 약속해 한 명에게만 답하지 않는 것은 따돌림이에요.' },
              { id: 'answer', text: '내가 먼저 "줄넘기래"라고 답한다', result: '한 명이 더 답을 단다.', impact: [{ who: '유나', text: '반에 자리가 있다고 느낀다', tone: 1 }], ending: '작은 답 하나로 몰이 흐름을 깼어요.' }] }, ['answer'], null, null,
              { conclude: '강퇴 투표의 이모티콘, 한 명에게만 답하지 않기도 따돌림에 힘을 보태요. 멈추자고 말하거나 먼저 답하는 작은 행동이 흐름을 바꿔요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '강퇴 투표에 대해 바르게 말한 것은?', options: ['한 명을 빼는 투표는 따돌림이고, 이모티콘도 힘을 보탠다', '방장이 올린 투표니 따라도 된다', '단톡방에서 나가면 모든 일이 끝난다'], answer: '한 명을 빼는 투표는 따돌림이고, 이모티콘도 힘을 보탠다' }] },
        notes: SAFE_NOTE,
      }),
      M('act.pattern-graph', {
        title: '하루 대화량에서 몰이 찾기', method: '하루 대화량 그래프에서 몰이 찾기', tool: 'chart', minutes: 15,
        levels: { easy: '첫날 그래프 하나를 점 값이 보이는 채로 읽고 언급이 급히 는 시각을 고른다.', base: '값 없이 눈금으로 첫날과 둘째 날 두 그래프를 읽어 견주고, 몰이가 시작된 시각과 계기를 고른다.', challenge: '틀린 확인에서 어느 보기가 틀렸는지 알려 주지 않고, 셋째 문항에서 급증을 멈추게 한 메시지를 추론한다.' },
        activity: {
          title: '하루 대화량에서 몰이 찾기', tool: 'chart',
          teacher: '"20시에 무슨 일이 있었기에 한 학생 이야기가 4건에서 18건으로 뛰었을까요?" 가상 단톡방 기록 그래프를 읽고, 급증한 시각 바로 앞의 사건(사진 한 장이 올라옴)을 짚게 한다. "다들 조금씩만 썼으니 누구 잘못도 아니다"라는 학생에게 "35건이 한 사람에게 쏟아졌다면 그 사람에게는 몇 건으로 느껴질까요?"라고 되묻는다. 그래프 값은 모두 수업용 가상 기록이라는 점을 밝힌다.',
          task: '가상 반 단톡방에서 한 학생을 언급한 메시지 수를 시각별 꺾은선그래프로 읽고, 몰이가 시작된 때와 줄어든 까닭을 찾아요.',
          levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            RD('첫날 그래프에서 언급이 갑자기 늘기 시작한 시각을 고르세요.', LINE('가상 단톡방 첫날 — 한 학생을 언급한 메시지 수', DAY1, '언급이 갑자기 늘기 시작한 때는?', ['18시', '20시', '23시']), { pick: 1 }),
            RD('첫날 기록에 "20시: 그 학생 사진이 올라옴"이 있어요. 몰이의 계기로 알맞은 것을 고르세요.', LINE('가상 단톡방 첫날 — 한 학생을 언급한 메시지 수', DAY1, '몰이가 시작된 계기는?', ['사진 한 장이 올라온 뒤 반응이 몰렸다', '그 학생이 먼저 많이 썼다', '저녁이라 모두 심심했다']), { pick: 0 }),
            IT(RD('둘째 날 그래프에서 언급이 급히 줄어든 시각을 고르세요.', LINE('가상 단톡방 둘째 날 — 한 학생을 언급한 메시지 수', DAY2, '언급이 급히 줄어든 때는?', ['19시', '21시', '23시']), { pick: 1 }),
              null,
              RD('둘째 날 20시 뒤 언급이 급히 줄었어요. 그 사이에 올라왔을 메시지를 추론해 고르세요.', LINE('가상 단톡방 둘째 날 — 한 학생을 언급한 메시지 수', DAY2, '급증을 멈추게 했을 메시지는?', ['"이제 그만하자, 하나도 안 웃겨"', '"ㅋㅋㅋ 더 해 봐"', '"사진 더 없어?"']), { pick: 0 }),
              { conclude: '몰이는 한 사건 뒤 반응이 한 사람에게 몰릴 때 시작되고, "그만하자" 한마디가 흐름을 꺾을 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '그래프에서 몰이가 시작된 시각과 그 계기를 한 문장으로 써요.' }] },
        notes: '그래프 값은 모두 수업용 가상 기록이다(화면 제목에 \'가상\').',
      }),
      M('act.group-rules', {
        title: '우리 반 단톡방 규칙 다섯 줄', method: '우리 반 단톡방 규칙 다섯 줄 쓰기', tool: 'rubric-writing', minutes: 15,
        levels: { easy: '규칙 세 줄을 문장 틀("우리 방에서는 ___ 하지 않는다")로 쓰고 기준 둘(구체적 행동·지킬 수 있음)을 점검한다.', base: '규칙 다섯 줄을 쓰고 기준표(구체적 행동·지킬 수 있음·모두를 지킴·어겼을 때 할 일)로 점검한다.', challenge: '셋째 문항에서 규칙을 어긴 메시지가 올라왔을 때의 대응 한 줄을 더한다.' },
        activity: {
          title: '우리 반 단톡방 규칙 다섯 줄', tool: 'rubric-writing',
          teacher: '"\'서로 존중하자\'라는 규칙으로 강퇴 투표를 막을 수 있을까요?" 막연한 규칙과 \'한 사람을 빼는 투표는 올리지 않는다\'를 견주어 읽은 뒤 쓰게 한다. "규칙이 많으면 아무 말도 못 한다"는 학생에게 "모두가 편하게 말하려면 무엇만 막으면 될까요?"라고 되묻는다. 규칙은 특정 친구를 겨냥하지 않고 모두를 지키는 문장으로 쓴다.',
          task: '우리 반 단톡방에 올릴 규칙을 쓰고, 구체적 행동·지킬 수 있음·모두를 지킴·어겼을 때 할 일이 들어갔는지 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(RW('규칙 세 줄: 초대·강퇴·저격에 대한 규칙을 쓰세요.', { topic: '우리 반 단톡방의 초대·강퇴·저격글에 대한 규칙을 세 문장으로 쓰세요.', min: 30, max: 180, s: [3, 3], title: '규칙 ① 초대·강퇴·저격' }, ['구체적 행동으로 썼다', '모두가 지킬 수 있다', '특정 친구를 겨냥하지 않았다']),
              RW('틀을 채워 규칙 세 줄을 쓰세요.', { topic: '단톡방 규칙 세 줄을 쓰세요.', min: 25, max: 160, s: [3, 3], starter: '우리 방에서는 ___ 하지 않는다.' }, ['구체적 행동으로 썼다', '모두가 지킬 수 있다'])),
            IT(RW('규칙 두 줄 더: 답하기·사진 올리기에 대한 규칙을 쓰세요.', { topic: '한 명 말에만 답하지 않기, 친구 사진 올리기에 대한 규칙을 두 문장으로 쓰세요.', min: 20, max: 140, s: [2, 2], title: '규칙 ② 답하기·사진' }, ['구체적 행동으로 썼다', '모두를 지키는 규칙이다', '지킬 수 있다'])),
            IT(RW('다섯 줄 규칙을 이어 완성하고 어겼을 때 할 일을 넣으세요.', { topic: '앞에서 쓴 규칙을 이어 우리 반 단톡방 규칙 다섯 줄을 완성하고, 어겼을 때 할 일도 넣으세요.', min: 50, max: 260, s: [5, 6], title: '우리 반 단톡방 규칙' }, ['구체적 행동으로 썼다', '지킬 수 있다', '모두를 지킨다', '어겼을 때 할 일을 넣었다']),
              RW('세 줄 규칙을 이어 완성하세요.', { topic: '우리 반 단톡방 규칙 세 줄을 완성하세요.', min: 25, max: 180, s: [3, 4] }, ['구체적 행동으로 썼다', '지킬 수 있다']),
              RW('다섯 줄 규칙에, 규칙을 어긴 메시지가 올라왔을 때의 대응 한 줄을 더하세요.', { topic: '우리 반 단톡방 규칙 다섯 줄에, 규칙을 어긴 메시지가 올라왔을 때 우리가 할 대응 한 줄을 더해 쓰세요.', min: 60, max: 300, s: [5, 7], title: '규칙과 대응' }, ['구체적 행동으로 썼다', '지킬 수 있다', '모두를 지킨다', '어겼을 때 할 일을 넣었다', '어긴 메시지에 대한 대응을 썼다']),
              { conclude: '좋은 단톡방 규칙은 무엇을 하지 않을지 구체적으로 말하고, 모두를 지키며, 어겼을 때 할 일이 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 반 단톡방 규칙 가운데 가장 먼저 지킬 한 줄을 옮겨 써요.' }] },
      }),
      M('act.stop-script', {
        title: '"그만하자" 메시지 역할극 대본', method: '"그만하자" 메시지 역할극 대본 완성', tool: 'story', minutes: 15,
        levels: { easy: '대본 말풍선 2개에 알맞은 말 카드를 넣고, 넣으면 바로 맞는지 알려 준다.', base: '대본 4컷 말풍선에 말 카드를 넣는다(함정 카드가 섞인다).', challenge: '셋째 문항에서 반발하는 댓글("왜 진지해?")에 답하는 대사까지 넣고, 모둠이 대본을 소리 내어 읽는다.' },
        activity: {
          title: '"그만하자" 메시지 역할극 대본', tool: 'story',
          teacher: '"저격글이 이어지는 방에서 \'그만하자\'를 처음 쓰는 사람은 어떤 말을 쓰면 덜 부딪칠까요?" 말풍선을 채운 뒤 모둠별로 대본을 소리 내어 읽게 한다. "괜히 끼면 나도 저격당한다"는 학생에게 "혼자 말하기 어렵다면 따로 메시지를 보내거나 어른에게 알리는 길도 있어요"라고 말해 준다. 저격당한 역할은 실제 친구 이름을 쓰지 않는다.',
          task: '저격글이 이어지는 가상 단톡방 장면에서 방관자 한 명이 분위기를 바꾸는 역할극 대본 4컷의 말풍선을 채워요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(FB('단톡방 대본 4컷의 빈칸에 알맞은 말 카드를 넣으세요.', [['1컷 — 나(방에): "___"', '"이거 저격 같아. 그만하자"', '나', 'star'], ['2컷 — 나(그 친구에게 따로): "___"', '"신경 쓰지 마, 네 잘못 아니야"', '나', 'star'],
              ['3컷 — 다른 친구(방에): "___"', '"나도 그만했으면 좋겠어"', '친구', 'leaf'], ['4컷 — 나(방에): "___"', '"이 방에선 누구 겨냥하는 글 쓰지 말자"', '나', 'star']], ['"ㅋㅋ 누군지 알겠다"']),
              FB('단톡방 대본 2컷의 빈칸에 알맞은 말 카드를 넣으세요.', [['1컷 — 나(방에): "___"', '"이거 저격 같아. 그만하자"', '나', 'star'], ['2컷 — 나(그 친구에게 따로): "___"', '"신경 쓰지 마, 네 잘못 아니야"', '나', 'star']], [])),
            IT(PB('분위기를 바꾸는 말만 골라 담으세요.', '분위기를 바꾸는 말', [
              { id: 'p1', text: '"그만하자, 하나도 안 웃겨"', ok: true }, { id: 'p2', text: '"다른 얘기 하자, 숙제 다 했어?"', ok: true },
              { id: 'p3', text: '"누군지 이름 대 봐"' }, { id: 'p4', text: '"너도 맞저격해"' }])),
            IT(FB('반발 댓글이 달린 장면의 빈칸에 알맞은 말 카드를 넣으세요.', [['방장: "왜 진지해? 장난인데" — 나: "___"', '"한 명만 웃음거리가 되면 장난이 아니야"', '나', 'star'], ['방장: "그럼 네가 나가" — 나: "___"', '"나가지 않을게. 계속되면 선생님께 말할 거야"', '나', 'star']], ['"알았어, 미안"']),
              null,
              FB('반발 댓글이 이어지는 장면의 빈칸 3개에 알맞은 말 카드를 넣으세요.', [['방장: "왜 진지해? 장난인데" — 나: "___"', '"한 명만 웃음거리가 되면 장난이 아니야"', '나', 'star'], ['방장: "그럼 네가 나가" — 나: "___"', '"나가지 않을게. 계속되면 선생님께 말할 거야"', '나', 'star'],
                ['다른 친구: "나도 같은 생각" — 방장: "___"', '"알았어, 글 지울게"', '방장', 'leaf']], ['"알았어, 미안"', '"너도 똑같이 당해 봐"']),
              { conclude: '분위기를 바꾸는 말은 저격을 저격이라 부르고, 겨냥당한 친구를 따로 챙기며, 계속되면 어른에게 알린다고 말해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '저격글이 이어질 때 내가 쓸 수 있는 "그만하자" 메시지를 한 문장으로 써요.' }] },
      }),

      // ---- 정리 ----
      M('wrap.help-route', {
        title: '단톡방 괴롭힘 도움 경로', method: '단톡방 괴롭힘 도움 경로 블록 정리', tool: 'block-coding', minutes: 7,
        levels: { easy: '곧은 길(블록 3개)로 별(캡처로 남기기)을 지나 깃발(믿을 어른)에 닿는다.', base: '꺾인 길(블록 7개 안팎)로 별 둘(캡처로 남기기·기록 확인)을 지나 깃발에 닿는다.', challenge: '조건 블록(막히면 돌기)을 넣은 반복으로 길을 짠다 — 한 길이 막혀도 방향을 바꿔 어른에게 가는 갈래를 뜻한다.' },
        wrap: {
          teacher: '"단톡방 괴롭힘을 봤을 때 \'나가기\'보다 먼저 할 일은 무엇일까요?" 길 찾기 판의 별은 \'캡처로 남기기\'·\'나가기 전 기록 확인\', 깃발은 \'믿을 어른 → 학교·상담\', 바위는 \'맞받아치기\'라고 먼저 읽어 준다. "캡처하면 고자질 같다"는 학생에게 "기록이 없으면 어른이 무엇을 보고 도울 수 있을까요?"라고 되묻는다. 학교폭력 신고·상담 창구 번호는 판서한 것을 활동지에 옮겨 적게 한다.',
          exitTicket: [
            IT(Object.assign(X('block-coding', ROUTE('별(캡처로 남기기·기록 확인)을 모두 지나 깃발(믿을 어른)에 닿게 블록을 이어요. 바위(맞받아치기)는 피해요.', { cols: 5, rows: 3, start: { x: 0, y: 2, dir: 'E' }, goal: { x: 4, y: 1 }, stars: [[1, 2], [2, 1]], rocks: [[2, 2], [3, 0]] }, { stars: true })), { difficulty: 0.25 }),
              { prompt: '별(캡처로 남기기)을 지나 깃발(믿을 어른)에 닿게 블록 3개를 이어요.', toolOptions: { cols: 4, rows: 3, start: { x: 0, y: 1, dir: 'E' }, goal: { x: 3, y: 1 }, stars: [[1, 1]], rocks: [] }, target: { reach: true, stars: true, maxBlocks: 3 } },
              { prompt: '조건 블록(막히면 오른쪽으로 돌기)을 반복 안에 넣어 별을 지나 깃발에 닿게 해요.', toolOptions: { cols: 4, rows: 4, start: { x: 0, y: 0, dir: 'E' }, goal: { x: 3, y: 3 }, stars: [[3, 0]], rocks: [], blocks: ['fwd', 'left', 'right', 'rep', 'if'] }, target: { reach: true, stars: true, use: ['if'] } }),
            { type: 'choice', prompt: '단톡방 괴롭힘을 봤을 때 방을 나가기 전에 먼저 할 일은?', options: ['화면을 기록(캡처)해 남긴다', '괴롭힌 사람에게 욕으로 맞받아친다', '모든 대화를 지운다'], answer: 0, difficulty: 0.15, explain: '기록이 있어야 어른이 사실을 보고 도울 수 있어요.' },
            { type: 'short', prompt: '내가 알릴 믿을 어른 한 사람(역할로)과 학교폭력 신고·상담 창구를 써요.' },
          ],
        },
        worksheet: {
          title: '단톡방 괴롭힘 도움 경로',
          items: [
            { type: 'table', prompt: '도움 경로를 차례대로 써요.', columns: ['차례', '할 일'], cells: [['1', ''], ['2', ''], ['3', ''], ['4', '']], answer: '캡처로 남기기, 나가기 전 기록 확인, 믿을 어른에게 알리기, 학교·상담 창구' },
            { type: 'blank', prompt: '학교폭력 신고·상담 창구를 적어 두어요.', text: '학교폭력 신고·상담 창구: ___', answer: '(선생님이 알려 준 번호)' },
          ],
        },
        notes: '교구는 글 블록을 잇지 못한다 — 길 찾기 판(별 = 캡처로 남기기·기록 확인, 깃발 = 믿을 어른·학교·상담, 바위 = 맞받아치기)으로 바꾸고 단계 이름과 차례는 활동지에 적게 했다. ' + LINE_NOTE,
      }),
      M('wrap.one-line-pledge', {
        title: '내 단톡방 한 줄 다짐 카드', method: '내 단톡방 한 줄 다짐 포스터', tool: 'collage', minutes: 7,
        levels: { easy: '보기 다짐 가운데 하나를 고르고, 모양 조각 3개 이상으로 말풍선 카드 바탕을 꾸민다.', base: '다짐을 직접 쓰고(활동지), 조각 5개 이상으로 카드 바탕을 꾸며 점검 항목 3개를 표시한다.', challenge: '다짐 실천을 확인할 방법을 덧붙이고 점검 항목 4개를 표시한다.' },
        wrap: {
          teacher: '"\'나쁜 말 안 하기\'와 \'강퇴 투표에 이모티콘을 누르지 않는다\', 내일 단톡방에서 확인할 수 있는 다짐은 무엇일까요?" 두 문장을 견주어 읽은 뒤 다짐을 활동지에 쓰고 조각으로 말풍선 카드 바탕을 꾸미게 한다(교구에는 글자를 넣을 수 없다). 이름은 쓰지 않고 반 게시판에 붙일 수 있게 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'collage', options: { maxPieces: 12, shapes: ['circle', 'square', 'rect', 'heart', 'star', 'semi'] }, prompt: '말풍선 모양 다짐 카드 바탕을 조각으로 꾸미고 점검해요(다짐 글은 활동지에 써요).', target: { selfCheck: ['다짐 글을 놓을 자리를 비워 두었다', '읽기 쉽게 차분한 색을 골랐다', '다짐을 활동지에 썼다'], minPieces: 5 }, difficulty: 0.2 },
              { prompt: '조각 3개 이상으로 다짐 카드 바탕을 꾸미고 점검해요.', target: { selfCheck: ['다짐 글을 놓을 자리를 비워 두었다', '보기 다짐 하나를 골랐다'], minPieces: 3 } },
              { prompt: '조각 5개 이상으로 꾸미고, 실천 확인 방법까지 점검해요.', target: { selfCheck: ['다짐 글을 놓을 자리를 비워 두었다', '읽기 쉽게 차분한 색을 골랐다', '다짐을 활동지에 썼다', '실천을 확인할 방법을 덧붙였다'], minPieces: 5 } }),
            { type: 'choice', prompt: '내일 단톡방에서 지켰는지 확인할 수 있는 다짐은?', options: ['나는 강퇴 투표에 이모티콘을 누르지 않는다', '나는 착한 사람이 된다', '나는 단톡방을 하지 않는다'], answer: 0, difficulty: 0.15, explain: '구체적인 행동이어야 지켰는지 확인할 수 있어요.' },
          ],
        },
        worksheet: {
          title: '내 단톡방 한 줄 다짐',
          items: [
            { type: 'short', prompt: '내 단톡방 한 줄 다짐을 써요(이름은 쓰지 않아요).' },
            { type: 'check', prompt: '내 다짐을 점검해요.', options: ['구체적인 행동이다', '내일부터 지킬 수 있다', '누군가를 겨냥하지 않는다'] },
          ],
          easy: { note: '보기 다짐을 골라 써도 돼요.', items: [{ type: 'choice', prompt: '보기 다짐 가운데 하나를 골라요.', options: ['강퇴 투표에 이모티콘을 누르지 않는다', '한 명 말에만 답 안 하기에 끼지 않는다', '저격글을 보면 그만하자고 쓴다'], answer: '강퇴 투표에 이모티콘을 누르지 않는다' }] },
        },
        notes: '교구는 글자를 넣지 못해 카드 바탕만 꾸미고 다짐 글은 활동지에 쓰게 했다.',
      }),
    );
  }

  // ==== 7학년 · 캡처·익명 질문으로 돌리는 놀림 끊기 (bully.m.g7-capture-spread) — 사이버폭력 ====
  {
    const M = MK('g7-capture-spread', [7]);
    const CHAIN = [
      { id: 'h1', text: '프로필 사진 낙서 캡처를 받았다' }, { id: 'h2', text: '받은 사람이 반 단톡방에 올렸다' },
      { id: 'h3', text: '다른 반 친구에게 전달됐다' }, { id: 'h4', text: '누군가 게시물로 올렸다' },
    ];
    const D1 = { text: '태오가 나에게 라온의 프로필 사진에 낙서해 놀린 캡처를 보내며 "ㅋㅋ 이거 봐"라고 했다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'forward', text: '웃기다며 다른 친구 둘에게 전달한다', result: '둘이 또 다른 친구들에게 보낸다.', impact: [{ who: '라온', text: '모르는 사이에 놀림이 퍼진다', tone: -1 }], why: '전달 한 번이 캡처를 몇 배로 퍼뜨려요.', ending: '사흘 뒤 다른 반까지 캡처가 돌았어요.' },
      { id: 'save', text: '일단 저장만 해 둔다', result: '내 휴대폰에 놀림 캡처가 남는다.', impact: [{ who: '라온', text: '놀림 사진이 남아 있다', tone: -1 }], end: '저장만 하고 아무 말도 하지 않았어요.',
        next: { text: '다음 날 다른 친구가 "그 캡처 있으면 보내 줘"라고 한다.', ask: '어떻게 할까?', choices: [
          { id: 'send2', text: '저장해 둔 캡처를 보낸다', result: '캡처가 또 퍼진다.', impact: [{ who: '라온', text: '놀림이 커진다', tone: -1 }], why: '저장해 둔 캡처는 언제든 다시 퍼질 수 있어요.' },
          { id: 'refuse', text: '"안 보낼 거야, 이거 놀림이야"라고 하고 지운다', result: '친구가 머쓱해한다.', impact: [{ who: '라온', text: '확산 한 갈래가 멈춘다', tone: 1 }], end: '전달을 거절했어요.',
            next: { text: '그래도 캡처가 다른 데서 돌고 있다는 말을 듣는다.', choices: [
              { id: 'tellT', text: '담임 선생님께 캡처가 돈다는 것을 알린다', result: '선생님이 반 전체에 지우라고 하고 라온을 살핀다.', impact: [{ who: '라온', text: '보호를 받는다', tone: 1 }] },
              { id: 'done', text: '나는 지웠으니 됐다고 생각한다', result: '캡처는 계속 돈다.', impact: [{ who: '라온', text: '놀림이 이어진다', tone: -1 }], why: '내가 멈춘 뒤에도 퍼지고 있다면 어른에게 알려요.' }] } }] } },
      { id: 'delete', text: '보지 않은 척 지운다', result: '내 쪽 확산은 멈추지만 태오는 다른 친구에게도 보낸다.', impact: [{ who: '라온', text: '아직 모른다', tone: 0 }], end: '지웠지만 아무 말도 하지 않았어요.',
        next: { text: '반 친구들이 라온 프로필 이야기를 하며 웃는다.', ask: '이제 어떻게 할까?', choices: [
          { id: 'tellnow', text: '태오에게 "그 캡처 그만 돌리자"라고 말한다', result: '태오가 "알았어" 하고 더는 보내지 않는다.', impact: [{ who: '라온', text: '확산이 줄어든다', tone: 1 }], end: '보낸 사람에게 멈추자고 말했어요.',
            next: { text: '이미 퍼진 캡처는 여전히 몇몇 휴대폰에 남아 있다.', choices: [
              { id: 'adult', text: '담임 선생님께 알려 남은 캡처도 지우게 한다', result: '선생님이 반 전체에 삭제를 부탁하고 라온을 살핀다.', impact: [{ who: '라온', text: '보호를 받는다', tone: 1 }] },
              { id: 'leave', text: '그 정도면 됐다며 둔다', result: '남은 캡처가 다시 돈다.', why: '이미 퍼진 것은 어른의 도움으로 지워야 해요.' }] } },
          { id: 'laugh', text: '같이 웃는다', result: '라온이 그 대화를 듣고 자리를 뜬다.', impact: [{ who: '라온', text: '놀림을 알게 된다', tone: -1 }], why: '웃음도 놀림에 힘을 보태요.' }] } },
      { id: 'tell', text: '태오에게 "이거 놀림이야, 그만 보내"라고 답한다', result: '태오가 "장난인데"라며 머뭇거린다.', impact: [{ who: '라온', text: '확산 한 갈래가 멈춘다', tone: 1 }], end: '보낸 사람에게 바로 멈추자고 했어요.',
        next: { text: '태오가 "벌써 다른 애들한테도 보냈는데"라고 한다.', ask: '어떻게 할까?', choices: [
          { id: 'askdel', text: '"받은 애들한테 지워 달라고 하자"고 한다', result: '태오가 받은 친구들에게 지워 달라고 보낸다.', impact: [{ who: '라온', text: '확산이 줄어든다', tone: 1 }], end: '함께 확산을 줄였어요.',
            next: { text: '한 친구가 이미 게시물로 올렸다는 말을 듣는다.', choices: [
              { id: 'report', text: '화면을 기록하고 담임 선생님께 알린다', result: '선생님이 게시물을 내리게 하고 라온을 살핀다.', impact: [{ who: '라온', text: '보호를 받는다', tone: 1 }] },
              { id: 'comment', text: '게시물에 욕 댓글을 단다', result: '게시물이 더 많이 보인다.', why: '댓글은 게시물을 더 퍼뜨려요. 기록하고 알려요.' }] } },
          { id: 'giveup', text: '이미 퍼졌으니 어쩔 수 없다고 한다', result: '캡처가 계속 퍼진다.', impact: [{ who: '라온', text: '놀림이 커진다', tone: -1 }], why: '퍼진 뒤에도 끊을 수 있는 자리가 남아 있어요.' }] } }] };
    const R1 = [{ id: 'r1', text: '전달 한 번이 확산을 몇 배로 키운다' }, { id: 'r2', text: '보낸 사람에게 멈추자고 하고 어른에게 알리면 끊을 수 있다' },
      { id: 'r3', text: '캡처는 사실 그대로라 돌려도 된다', why: '사실이어도 놀리려고 돌리면 상처를 주는 사이버폭력이에요.' }, { id: 'r4', text: '내가 만든 게 아니니 책임이 없다', why: '전달하는 사람도 확산을 만드는 사람이에요.' }];
    const R1C = { reasons: [{ id: 'r5', text: '전달한 길에서는 사흘 만에 다른 반까지 퍼졌다' }, { id: 'r6', text: '멈추자고 한 길에서는 게시물까지 내려갔다' }], ok: ['r5', 'r6'] };
    const ANS = ['도움이 되고 안전하다', '상황을 키울 수 있다'];
    const REPLY = [
      { id: 'a1', text: '맞받아쳐 똑같이 놀리기', to: '상황을 키울 수 있다' }, { id: 'a2', text: '공개 답변으로 따지기', to: '상황을 키울 수 있다' },
      { id: 'a3', text: '답하지 않기', to: '도움이 되고 안전하다' }, { id: 'a4', text: '화면 기록 뒤 차단·신고하기', to: '도움이 되고 안전하다' },
      { id: 'a5', text: '믿을 어른에게 알리기', to: '도움이 되고 안전하다' }, { id: 'a6', text: '보낸 사람을 추측해 몰아세우기', to: '상황을 키울 수 있다' },
    ];
    const STEP3 = ['전달하지 않는다', '보낸 사람에게 멈추자고 말한다', '어른에게 알린다'];

    ALL.push(
      // ---- 도입 ----
      M('intro.spread-sim', {
        title: '캡처 한 장이 퍼지는 수', method: '캡처 한 장이 퍼지는 수 계산', tool: 'chart', minutes: 6,
        levels: { easy: '3단계까지(3명·9명·27명)만 함께 계산하며 시연 판 막대를 본다.', base: '4단계까지(81명) 막대가 차는 모습을 보고, 4단계 뒤 본 사람 수를 말한다.', challenge: '2단계에서 한 명이 전달을 멈추면 4단계 수가 얼마나 줄어드는지 계산해 말한다.' },
        intro: {
          teacher: '"캡처 한 장을 받은 사람이 각자 세 명에게 보낸다면, 네 단계 뒤에는 몇 명이 받을까요?" 칠판에 3 → 9 → 27 → 81을 함께 계산한 뒤 시연 단추로 막대그래프가 차는 모습을 보인다. "나 하나 보내는 건 별일 아니다"라는 말이 나오면 "2단계에서 한 명이 멈추면 4단계에서 몇 명이 덜 받을까요?(27명)"라고 되묻는다. 이 계산은 수업용 가정이다.',
          student: '캡처 한 장이 한 사람에게서 세 명씩 퍼질 때 단계마다 받는 사람 수를 계산하고 막대그래프로 봐요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'build', title: '가정 — 한 사람이 세 명에게 전달할 때 그 단계에 받는 사람', unit: '명', xLabel: '전달 단계', yLabel: '받는 사람', data: [['1단계', 3], ['2단계', 9], ['3단계', 27], ['4단계', 81]], showTable: true }, sequence: [{ build: true }] },
          art: { draw: 'a paper-cut tree of phones branching out three ways at each level, the bottom row full of small phones', banner: '한 장이 몇 장이 될까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '세 명씩 전달은 계산을 위한 가정이다(실제 자료 아님). 2단계에서 한 명이 멈추면 그 아래 3·9·27명이 받지 않는다(4단계 81 → 54).',
      }),
      M('intro.anon-question', {
        title: '익명 질문 화면 읽기', method: '익명 질문 화면 읽고 마음 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '질문 하나("너 왜 맨날 혼자 밥 먹음?")만 읽고 받은 인물의 마음 카드를 함께 고른다.', base: '시연 판의 질문 셋을 읽고 받은 인물의 마음 카드를 근거와 함께 고른다.', challenge: '보낸 쪽이 익명이라서 쉽게 보낸 까닭을 짝에게 한 줄로 말한다.' },
        intro: {
          teacher: '"\'너 왜 맨날 혼자 밥 먹음?\' 같은 질문이 이름 없이 하루에 세 개 쌓였어요. 받은 라온은 어떤 마음일까요?" 시연 단추로 \'불안함\'·\'외로움\' 카드가 붙는 모습을 보인다. "그냥 질문인데 답 안 하면 그만"이라는 말이 나오면 "누가 보냈는지 모르면 교실의 누구를 봐도 마음이 편할까요?"라고 되묻는다. 익명이어도 보낸 사람의 책임은 남는다는 것을 오늘의 질문으로 삼는다.',
          student: '가상 익명 질문 앱 화면에 쌓인 질문을 읽고, 받은 인물의 마음을 근거와 함께 골라요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 's1', label: '익명 질문 세 개를 받은 라온("너 왜 맨날 혼자 밥 먹음?" 등)' }], cards: ['불안함', '외로움', '신남', '편안함', '뿌듯함', '고마움'] }, sequence: [{ match: { s1: '불안함' } }] },
          art: { draw: 'a paper-cut phone screen stacked with anonymous question cards with question marks instead of names, a student looking around the classroom', banner: '누가 보냈을까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '\'익명 질문 앱\'은 일반 이름이다(실제 앱 이름을 쓰지 않는다). ' + SAFE_NOTE,
      }),

      // ---- 활동 ----
      M('act.forward-dilemma', {
        title: '받은 캡처를 어떻게 할까', method: '받은 캡처 갈림길에서 사흘 결과 따라가기', tool: 'dilemma', minutes: 15,
        levels: { easy: '갈림 2번까지 가고, 고를 때마다 라온에게 생기는 영향이 바로 보인다.', base: '갈림 3번까지 가고, 영향 표시는 맞힌 뒤에만 보인다. 끝에서 근거를 고른다.', challenge: '갈림 3번 뒤 전달한 길의 결말과 견주는 근거 카드까지 고르고, 다른 결말과 견준 까닭을 활동지에 쓴다.' },
        activity: {
          title: '받은 캡처를 어떻게 할까', tool: 'dilemma',
          teacher: '"캡처는 있는 그대로니까 돌려도 괜찮을까요?" 학생마다 한 길을 끝까지 가 본 뒤 전달·저장·삭제·보낸 친구에게 말하기를 견주게 한다. "지우기만 하면 내 할 일은 끝"이라는 학생에게 "내가 지운 뒤에도 다른 곳에서 돌고 있다면 누가 끊을 수 있을까요?"라고 되묻는다. 처음 낙서해 보낸 것이 잘못이고, 멈추자고 말한 사람은 잘한 것임을 짚는다.',
          task: '친구 프로필 낙서 캡처를 받은 장면에서 세 번 골라 사흘 동안의 결과를 따라가고, 끝에서 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL({ easy: '놀림 캡처를 받았어요. 두 번 골라 결과를 보고 근거를 고르세요.', base: '놀림 캡처를 받았어요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 간 뒤, 전달한 길의 결말과 견주는 근거까지 고르세요.' },
              '받은 캡처', D1, [['tell', 'askdel', 'report'], ['delete', 'tellnow', 'adult'], ['save', 'refuse', 'tellT']], R1, ['r1', 'r2'], R1C),
            ONE('"익명이면 누가 했는지 몰라 책임이 없다"는 말에 맞는 길을 고르세요.', '익명과 책임', { text: '친구가 "익명으로 보내면 누가 했는지 모르니까 괜찮아"라며 놀리는 질문을 같이 보내자고 한다.', ask: '어떻게 할까?', motif: 'house', choices: [
              { id: 'join', text: '익명이니 같이 보낸다', result: '받은 친구는 반 전체를 의심하게 된다.', impact: [{ who: '받은 친구', text: '누구도 믿기 어렵다', tone: -1 }], why: '익명이어도 보낸 행동의 책임은 보낸 사람에게 있어요.' },
              { id: 'no', text: '"익명이어도 보낸 건 우리야. 안 보낼래"', result: '친구가 보내기를 멈춘다.', impact: [{ who: '받은 친구', text: '놀림 하나가 줄어든다', tone: 1 }], ending: '익명 뒤에 숨지 않았어요.' }] }, ['no'],
              [{ id: 'q1', text: '익명이어도 보낸 사람의 책임은 남는다' }, { id: 'q2', text: '들키지 않으면 괜찮다', why: '들키는지가 아니라 상대가 다치는지가 기준이에요.' }], ['q1']),
            ONE('놀림 캡처를 받았을 때 가장 먼저 할 일을 고르세요.', '받은 순간', { text: '모르는 번호로 반 친구 대화 캡처가 왔다. "이거 퍼뜨려"라고 적혀 있다.', ask: '가장 먼저 할 일은?', motif: 'house', choices: [
              { id: 'stopnow', text: '전달하지 않는다', result: '내 쪽에서 확산이 멈춘다.', impact: [{ who: '캡처 속 친구', text: '확산 한 갈래가 멈춘다', tone: 1 }], ending: '받은 순간 전달을 멈췄어요.' },
              { id: 'askwho', text: '단톡방에 "이거 누가 보냈냐"라고 캡처를 올린다', result: '캡처가 단톡방 전체에 퍼진다.', why: '보낸 사람을 찾으려다 내가 퍼뜨리게 돼요.' }] }, ['stopnow'], null, null,
              { conclude: '캡처는 전달하지 않고, 보낸 사람에게 멈추자고 말하고, 퍼졌으면 어른에게 알려요. 익명이어도 책임은 남아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내가 고른 길과 전달한 길의 결말이 어떻게 달랐는지 한 문장으로 써요.' }],
          easy: [{ type: 'choice', prompt: '놀림 캡처를 받았을 때 알맞은 행동은?', options: ['전달하지 않고 보낸 친구에게 멈추자고 말한다', '재미있으니 친한 친구에게만 보낸다'], answer: '전달하지 않고 보낸 친구에게 멈추자고 말한다' }] },
        notes: SAFE_NOTE,
      }),
      M('act.break-chain', {
        title: '확산 사슬에서 끊는 지점', method: '확산 사슬에서 끊는 지점 찾기', tool: 'timeline', minutes: 15,
        levels: { easy: '확산 장면 카드 3장을 차례대로 놓고, 놓으면 바로 맞는지 알려 준다. 끊는 말은 지점 3곳에 붙인다.', base: '확산 장면 카드 4장을 차례대로 놓고, 지점 4곳마다 끊는 말과 행동 카드를 붙인다(함정 카드가 섞인다).', challenge: '셋째 문항에서 끊는 말마다 받는 사람의 반응 카드를 이어 붙인다.' },
        activity: {
          title: '확산 사슬에서 끊는 지점', tool: 'timeline',
          teacher: '"캡처가 게시물이 되기 전까지, 끊을 수 있는 자리는 몇 번 있었을까요?" 장면 카드를 놓은 뒤 지점마다 \'여기 있던 사람이 할 수 있었던 말\'을 소리 내어 말하게 한다. "처음 보낸 사람만 잘못"이라는 학생에게 "처음 보낸 행동이 잘못인 건 맞아요. 그렇다면 받은 사람들은 무엇을 할 수 있었을까요?"라고 되묻는다. 끊는 사람은 잘한 사람이라는 점을 짚는다.',
          task: '캡처가 게시물로 번지기까지의 장면 카드를 차례대로 놓고, 지점마다 확산을 끊는 말과 행동을 붙여요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(OB('캡처가 번진 장면 카드를 차례대로 놓으세요.', CHAIN, { axis: ['처음', '나중'] }),
              OB('캡처가 번진 장면 카드 3장을 차례대로 놓으세요.', CHAIN.slice(0, 3), { axis: ['처음', '나중'] })),
            IT(MB('지점마다 확산을 끊는 말과 행동을 이으세요.', [['캡처를 받은 순간', '전달하지 않고 보낸 친구에게 "그만하자"'], ['반 단톡방에 올라온 때', '"이거 놀림이야, 내리자"라고 쓴다'], ['다른 반으로 간 때', '받은 친구에게 지워 달라고 부탁한다'], ['게시물로 올라온 때', '화면 기록 뒤 담임 선생님께 알린다']], ['"ㅋㅋ 나도 보내 줘"'], { axis: ['처음', '나중'] }),
              MB('지점 3곳마다 확산을 끊는 말과 행동을 이으세요.', [['캡처를 받은 순간', '전달하지 않고 보낸 친구에게 "그만하자"'], ['반 단톡방에 올라온 때', '"이거 놀림이야, 내리자"라고 쓴다'], ['게시물로 올라온 때', '화면 기록 뒤 담임 선생님께 알린다']], [], { axis: ['처음', '나중'] })),
            IT(OB('확산을 끊는 행동을 하기 좋은 차례대로 놓으세요.', [{ id: 'o1', text: '받은 캡처를 전달하지 않는다' }, { id: 'o2', text: '보낸 친구에게 멈추자고 말한다' }, { id: 'o3', text: '이미 퍼졌으면 화면을 기록해 둔다' }, { id: 'o4', text: '담임 선생님께 알린다' }], { axis: ['먼저', '나중'] }, [{ id: 'x1', text: '게시물에 욕 댓글을 단다' }]),
              null,
              MB('끊는 말마다 받는 사람의 반응으로 알맞은 것을 이으세요.', [['"그만 보내, 이거 놀림이야"', '보낸 친구가 머뭇거리며 멈춘다'], ['"받은 거 지워 줄래?"', '받은 친구가 캡처를 지운다'], ['"선생님, 캡처가 돌아요"', '선생님이 반 전체에 삭제를 부탁한다']], ['모두가 더 크게 웃는다'], { axis: ['끊는 말', '반응'] }),
              { conclude: '캡처 확산은 받은 순간·단톡방·다른 반·게시물마다 끊을 수 있어요. 끊는 사람은 잘한 사람이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '확산 지점마다 끊는 말을 써요.', columns: ['지점', '끊는 말'], cells: [['받은 순간', ''], ['반 단톡방', ''], ['게시물', '']], answer: '(예) "그만 보내", "이거 놀림이야, 내리자", 화면 기록 뒤 선생님께 알리기' }] },
      }),
      M('act.reply-or-report', {
        title: '익명 질문 대응 방식 분석', method: '익명 질문에 대응하는 방식 분석', tool: 'sortboard', minutes: 15,
        levels: { easy: '대응 카드 3장만 두 바구니에 나누고, 틀린 바구니에 넣으면 까닭을 말하고 되돌려 준다.', base: '대응 카드 6장을 \'도움이 되고 안전하다\'·\'상황을 키울 수 있다\' 바구니에 나누고, 할 일의 차례 바구니도 채운다.', challenge: '셋째 문항에 카드 2장이 더해지고, 가장 나은 조합을 고른 까닭을 활동지에 쓴다.' },
        activity: {
          title: '익명 질문 대응 방식 분석', tool: 'sortboard',
          teacher: '"익명 질문에 똑같이 놀려 주면 속이 시원할까요, 상황이 끝날까요?" 카드를 넣을 때마다 그 행동 뒤 일어날 일을 한 마디씩 말하게 한다. "답을 안 하면 지는 것"이라는 학생에게 "답하지 않고 기록해 어른에게 알리는 것은 지는 걸까요, 지키는 걸까요?"라고 되묻는다. 놀림을 보낸 쪽이 잘못이고, 받은 사람이 무엇을 골라도 그 사람 탓이 아니라는 점을 분명히 한다.',
          task: '익명 질문 놀림에 대응하는 방식 카드를 효과와 위험을 따져 바구니에 나누고, 할 일의 차례를 정해요.',
          levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            IT(BOARD('익명 놀림 대응 카드를 두 바구니에 나누세요.', ANS, REPLY),
              BOARD('익명 놀림 대응 카드 3장을 두 바구니에 나누세요.', ANS, pickCards(REPLY, ['a1', 'a3', 'a5']))),
            IT(BOARD('안전한 대응을 먼저 할 일과 이어서 할 일로 나누고, 하지 않을 일은 남기세요.', ['먼저 할 일', '이어서 할 일'], [
              { id: 'b1', text: '답하지 않고 화면을 기록한다', to: '먼저 할 일' }, { id: 'b2', text: '보낸 계정을 차단·신고한다', to: '이어서 할 일' },
              { id: 'b3', text: '믿을 어른에게 기록을 보여 준다', to: '이어서 할 일' }, { id: 'b4', text: '"누구냐"라고 공개 글을 올린다' }])),
            IT(BOARD('대응 카드를 효과와 위험으로 나누세요.', ['효과 크고 위험 적음', '효과 있지만 위험 큼', '효과 적음'], [
              { id: 'c1', text: '어른에게 알리기', to: '효과 크고 위험 적음' }, { id: 'c2', text: '차단·신고하기', to: '효과 크고 위험 적음' },
              { id: 'c3', text: '공개 답변으로 따지기', to: '효과 있지만 위험 큼' }, { id: 'c4', text: '혼자 참고 지우기만 하기', to: '효과 적음' }]),
              null,
              Object.assign(BOARD('대응 카드를 효과와 위험으로 나누세요(카드가 더 있어요).', ['효과 크고 위험 적음', '효과 있지만 위험 큼', '효과 적음'], [
                { id: 'c1', text: '어른에게 알리기', to: '효과 크고 위험 적음' }, { id: 'c2', text: '차단·신고하기', to: '효과 크고 위험 적음' },
                { id: 'c3', text: '공개 답변으로 따지기', to: '효과 있지만 위험 큼' }, { id: 'c4', text: '혼자 참고 지우기만 하기', to: '효과 적음' },
                { id: 'c5', text: '친구들과 보낸 사람 추측해 몰아세우기', to: '효과 있지만 위험 큼' }, { id: 'c6', text: '화면 기록 남기기', to: '효과 크고 위험 적음' }])),
              { conclude: '익명 놀림에는 맞받아치기보다 답하지 않고 기록하고, 차단·신고하고, 어른에게 알리는 것이 효과 있고 안전해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '익명 놀림을 받은 가상 인물에게 권할 가장 나은 대응 조합과 그 까닭을 써요.' }] },
        notes: SAFE_NOTE,
      }),
      M('act.campaign-card', {
        title: '"전달 버튼 멈춤" 캠페인 카드', method: '"전달 버튼 멈춤" 캠페인 카드 만들기', tool: 'collage', minutes: 15,
        levels: { easy: '모양 조각 3개 이상으로 카드 바탕을 꾸미고 표어 자리를 정한다(표어는 활동지).', base: '조각 5개 이상으로 꾸미되 숫자 하나(81명)를 강조할 별 조각을 꼭 넣고, 표어·숫자·행동을 활동지에 쓴다.', challenge: '1학년 전체가 볼 카드로 대비되는 색(밝은 색과 어두운 색)이 맞닿게 꾸미고, 문구를 다듬는다.' },
        activity: {
          title: '"전달 버튼 멈춤" 캠페인 카드', tool: 'collage',
          teacher: '"계단을 지나가며 3초 동안 볼 카드라면, 무엇이 먼저 눈에 들어와야 할까요?" 표어·숫자 하나·대신 할 행동 하나를 정한 뒤 조각으로 바탕을 꾸미게 한다(교구에는 글자를 넣을 수 없어 문구는 활동지에 쓴다). "무섭게 만들어야 안 보낸다"는 학생에게 겁주는 그림보다 \'대신 무엇을 할지\'가 보이는 카드가 행동을 바꾼다고 말해 준다. 실제 친구 사진이나 이름은 쓰지 않는다.',
          task: '학교 계단에 붙일 "전달 버튼 멈춤" 캠페인 카드 바탕을 조각으로 꾸미고, 표어·확산 숫자·대신 할 행동은 활동지에 써요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '조각으로 캠페인 카드 바탕을 꾸미고 표어 자리를 비워 두세요.', toolOptions: { maxPieces: 14 }, target: { selfCheck: ['표어를 놓을 자리를 비워 두었다', '한눈에 보이게 큰 조각을 하나 두었다', '표어를 활동지에 썼다'], minPieces: 5 } },
              { prompt: '조각 3개 이상으로 카드 바탕을 꾸미세요.', target: { selfCheck: ['표어를 놓을 자리를 비워 두었다', '표어를 활동지에 썼다'], minPieces: 3 } }),
            IT({ prompt: '확산 숫자(81명)를 강조할 별 조각을 하나 이상 넣어 카드를 꾸미세요.', toolOptions: { maxPieces: 14 }, target: { has: [{ shape: 'star', min: 1 }], pieces: { min: 4 }, selfCheck: ['숫자 자리를 별로 강조했다', '숫자를 활동지에 썼다'] } }),
            IT({ prompt: '대신 할 행동이 보이도록 카드를 꾸미고 점검하세요.', toolOptions: { maxPieces: 14 }, target: { selfCheck: ['대신 할 행동을 활동지에 썼다', '겁주는 그림 대신 할 일이 보이게 했다', '친구 사진·이름을 쓰지 않았다'], minPieces: 4 } },
              null,
              { prompt: '1학년 전체가 볼 카드로, 밝은 색과 어두운 색 조각이 맞닿게 꾸미세요.', target: { contrast: 'light-dark', selfCheck: ['대신 할 행동을 활동지에 썼다', '멀리서도 보이게 대비를 주었다', '1학년 전체를 위한 문구로 다듬었다'], minPieces: 4 } },
              { conclude: '좋은 캠페인 카드는 짧은 표어, 숫자 하나, 대신 할 행동 하나가 한눈에 보여요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '캠페인 카드 문구를 써요.', columns: ['칸', '문구'], cells: [['표어', ''], ['확산 숫자', ''], ['대신 할 행동', '']], answer: '(예) "전달 버튼, 멈춤", 4단계면 81명, 받으면 보낸 친구에게 멈추자고 말하기' }] },
        notes: '교구는 글자를 넣지 못해 카드 바탕만 꾸미고 문구는 활동지에 쓰게 했다. 81명은 수업 도입의 가정 계산 값이다.',
      }),

      // ---- 정리 ----
      M('wrap.check-steps', {
        title: '받았을 때 세 단계 점검', method: '받았을 때 세 단계 스스로 점검', tool: 'timer', minutes: 7,
        levels: { easy: '단계 카드 2장(전달하지 않는다·어른에게 알린다)을 차례로 놓고, 30초씩 몸짓과 함께 되뇐다.', base: '단계 카드 3장을 차례로 놓고, 타이머를 30초·3번으로 맞춰 몸짓과 함께 되뇐 뒤 점검 칸을 누른다.', challenge: '단계마다 실제로 할 말을 소리 내어 말해 보고 점검 칸 하나를 더 누른다.' },
        wrap: {
          teacher: '"놀림 캡처를 받은 순간, 손가락이 전달 버튼으로 가기 전에 할 세 가지는?" 단계 카드를 놓고 30초마다 몸짓(손바닥 멈춤 → 말풍선 손 → 손 들기)과 함께 되뇌게 한다. "어른에게 알리면 일이 커진다"는 학생에게 "퍼지고 있는 캡처를 학생 혼자 다 지울 수 있을까요?"라고 되묻는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'timer', options: { title: '받았을 때 세 단계', plan: { work: 20, rest: 5, rounds: 2 }, cards: [STEP3[2], STEP3[0], STEP3[1]] }, prompt: '세 단계 카드를 차례로 놓고, 타이머를 30초씩 3번으로 맞춘 뒤 점검해요.', target: { order: STEP3, plan: { work: 30, rounds: 3 }, selfCheck: ['단계마다 몸짓과 함께 되뇌었다', '전달 버튼 앞에서 멈출 수 있다'] }, difficulty: 0.2 },
              { prompt: '두 단계 카드를 차례로 놓고 점검해요.', toolOptions: { cards: [STEP3[2], STEP3[0]] }, target: { order: [STEP3[0], STEP3[2]], selfCheck: ['단계마다 몸짓과 함께 되뇌었다'] } },
              { prompt: '세 단계 카드를 차례로 놓고 타이머를 맞춘 뒤, 단계마다 할 말까지 말해 보고 점검해요.', target: { order: STEP3, plan: { work: 30, rounds: 3 }, selfCheck: ['단계마다 몸짓과 함께 되뇌었다', '전달 버튼 앞에서 멈출 수 있다', '단계마다 실제로 할 말을 소리 내어 말했다'] } }),
            { type: 'choice', prompt: '놀림 캡처를 받았을 때 첫 단계는?', options: ['전달하지 않는다', '친한 친구에게만 보낸다', '게시물에 댓글을 단다'], answer: 0, difficulty: 0.15, explain: '받은 순간 멈추면 확산 한 갈래가 끊겨요.' },
          ],
        },
        worksheet: {
          title: '받았을 때 세 단계',
          items: [
            { type: 'blank', prompt: '세 단계를 채워요.', text: '___ → 보낸 사람에게 멈추자고 말한다 → ___', answer: '전달하지 않는다, 어른에게 알린다' },
            { type: 'short', prompt: '보낸 친구에게 멈추자고 할 때 쓸 한 문장을 써요.' },
          ],
        },
      }),
      M('wrap.reflection-line', {
        title: '오늘 바뀐 생각 두 문장', method: '오늘 바뀐 생각 두 문장 쓰기', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '"전에는 ~라고 생각했는데 이제는 ~" 틀로 한 문장을 쓰고 기준 둘을 점검한다.', base: '같은 틀로 두 문장을 쓰고 기준표(구체적 행동 포함·까닭 포함)로 점검한다.', challenge: '친구에게 권할 행동을 한 문장 더해 세 문장으로 쓴다.' },
        wrap: {
          teacher: '"오늘 수업 전과 뒤에, 캡처나 익명 질문에 대한 내 생각이 바뀐 곳이 있나요?" 바뀐 것이 없다면 \'더 분명해진 생각\'을 써도 된다고 말한다. "착하게 살자"처럼 막연하게 쓰는 학생에게 "그 생각이 바뀌어 내일 휴대폰에서 무엇을 다르게 할까요?"라고 되묻는다. 이름은 쓰지 않는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'rubric-writing', options: { topic: '캡처·익명 질문에 대해 오늘 바뀐 생각을 "전에는 ~라고 생각했는데 이제는 ~" 틀로 두 문장 쓰세요.', minChars: 25, maxChars: 160, minSentences: 2, maxSentences: 3, starter: '전에는 ___라고 생각했는데, 이제는 ___.', title: '바뀐 생각' },
              prompt: '바뀐 생각을 두 문장으로 쓰고 기준표에 표시해요.', target: { selfCheck: ['구체적 행동이 들어갔다', '까닭이 들어갔다', '이름을 쓰지 않았다'] }, difficulty: 0.25 },
              { prompt: '바뀐 생각을 한 문장으로 쓰고 기준표에 표시해요.', toolOptions: { minChars: 12, minSentences: 1, maxSentences: 2 }, target: { selfCheck: ['구체적 행동이 들어갔다', '이름을 쓰지 않았다'] } },
              { prompt: '바뀐 생각 두 문장에 친구에게 권할 행동 한 문장을 더해 쓰고 표시해요.', toolOptions: { minChars: 40, maxChars: 220, minSentences: 3, maxSentences: 4 }, target: { selfCheck: ['구체적 행동이 들어갔다', '까닭이 들어갔다', '친구에게 권할 행동을 썼다', '이름을 쓰지 않았다'] } }),
            { type: 'choice', prompt: '"캡처는 사실 그대로라서 돌려도 된다"에 대한 생각으로 알맞은 것은?', options: ['사실이어도 놀리려고 돌리면 상처를 주는 사이버폭력이다', '사실이면 얼마든지 돌려도 된다', '한 명에게만 보내면 괜찮다'], answer: 0, difficulty: 0.15, explain: '돌리는 목적과 상대가 받는 상처를 봐요.' },
          ],
        },
        worksheet: {
          title: '오늘 바뀐 생각',
          items: [
            { type: 'blank', prompt: '틀을 채워 써요.', text: '전에는 ___라고 생각했는데, 이제는 ___.', answer: '(예) 캡처는 그대로니 돌려도 된다, 놀리려고 돌리면 사이버폭력이다' },
            { type: 'short', prompt: '친구에게 권할 행동 한 가지를 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 7학년 · 보는 사람이 많을수록 왜 안 도울까 (bully.m.g7-bystander) ====
  {
    const M = MK('g7-bystander', [7]);
    const ROLES = ['가해', '동조', '강화', '방관', '조력'];
    const LUNCH = [
      { id: 'g1', text: '건우의 식판 자리를 치운다', to: '가해' }, { id: 'd1', text: '"맞아, 거기 우리 자리야"라고 거든다', to: '동조' },
      { id: 'k1', text: '옆에서 크게 웃는다', to: '강화' }, { id: 'b1', text: '못 본 척 밥만 먹는다', to: '방관' },
      { id: 'j1', text: '"여기 앉아"라며 옆자리를 내준다', to: '조력' }, { id: 'k2', text: '휴대폰으로 찍으며 구경한다', to: '강화' },
      { id: 'b2', text: '다른 테이블로 슬쩍 옮긴다', to: '방관' }, { id: 'j2', text: '급식 지도 선생님께 알린다', to: '조력' },
    ];
    const CROWD = [['목격자 1명', 85], ['목격자 5명', 62], ['목격자 20명', 31]];
    const D1 = { text: '쉬는 시간 복도, 무리 넷이 건우의 휴대폰을 빼앗아 서로 던지며 "받아 봐"라고 놀린다. 복도에는 나 말고도 열 명쯤 지나가고 있다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'pass', text: '다들 지나가니 나도 지나친다', result: '아무도 멈추지 않고 놀림이 쉬는 시간 내내 이어진다.', impact: [{ who: '건우', text: '아무도 오지 않는다고 느낀다', tone: -1 }], why: '모두가 지나치면 아무도 돕지 않게 돼요.', end: '열 명 모두 지나쳤어요.',
        next: { text: '수업 종이 치자 건우가 깨진 휴대폰을 들고 교실로 들어온다.', ask: '이제 어떻게 할까?', choices: [
          { id: 'ask', text: '건우에게 "괜찮아? 아까 봤어"라고 말한다', result: '건우가 놀란 얼굴로 고개를 끄덕인다.', impact: [{ who: '건우', text: '본 사람이 있다는 걸 안다', tone: 1 }], end: '늦었지만 말을 건넸어요.',
            next: { text: '건우가 "선생님께 말하면 더 놀릴 거야"라고 한다.', choices: [
              { id: 'with', text: '"내가 본 걸 같이 말할게"라며 함께 담임 선생님께 간다', result: '선생님이 본 사람의 이야기를 듣고 무리와 이야기한다.', impact: [{ who: '건우', text: '보호를 받는다', tone: 1 }] },
              { id: 'drop', text: '"그럼 그냥 참아"라고 한다', result: '다음 쉬는 시간에도 같은 일이 생긴다.', impact: [{ who: '건우', text: '혼자 견딘다', tone: -1 }], why: '본 사람이 함께 말하면 두려움이 줄어요.' }] } },
          { id: 'silent', text: '모른 척 자리에 앉는다', result: '건우는 쉬는 시간마다 화장실에 숨는다.', impact: [{ who: '건우', text: '교실이 무서워진다', tone: -1 }], why: '늦게라도 곁에 서면 다음 일을 막을 수 있어요.' }] } },
      { id: 'laugh', text: '분위기에 휩쓸려 같이 웃는다', result: '웃음소리에 무리가 더 신나서 던진다.', impact: [{ who: '건우', text: '더 작아진다', tone: -1 }], why: '구경하며 웃는 것도 놀림을 키우는 강화예요.', ending: '내 웃음이 놀림을 더 키웠어요.' },
      { id: 'stand', text: '건우 옆으로 가서 선다', result: '무리가 잠깐 멈칫한다.', impact: [{ who: '건우', text: '혼자가 아니라고 느낀다', tone: 1 }], end: '건우 곁에 섰어요.',
        next: { text: '무리 하나가 "넌 뭔데?"라고 한다. 지나가던 친구 하나가 나를 본다.', ask: '어떻게 할까?', choices: [
          { id: 'callfr', text: '그 친구에게 "선생님 좀 불러 줄래?"라고 부탁한다', result: '친구가 교무실로 뛰어간다.', impact: [{ who: '건우', text: '도움이 오고 있다', tone: 1 }], end: '다른 사람에게 할 일을 정해 부탁했어요.',
            next: { text: '선생님이 오시는 동안 무리가 휴대폰을 바닥에 내려놓는다.', choices: [
              { id: 'pickup', text: '휴대폰을 건우에게 돌려주고 함께 선생님을 기다린다', result: '선생님이 오셔서 무리와 이야기하고 건우를 살핀다.', impact: [{ who: '건우', text: '보호를 받는다', tone: 1 }] },
              { id: 'chase', text: '무리를 쫓아가 따진다', result: '말싸움이 벌어져 나도 위험해진다.', impact: [{ who: '나', text: '다칠 수 있다', tone: -1 }], why: '내 안전을 지키며 어른을 기다려요.' }] } },
          { id: 'shout', text: '"너희가 뭔데!"라며 무리를 밀친다', result: '몸싸움이 벌어진다.', impact: [{ who: '나', text: '다칠 수 있다', tone: -1 }], why: '혼자 맞서기보다 어른을 부르는 것이 안전해요.' }] } },
      { id: 'teacher', text: '가까운 교무실로 가서 선생님을 모셔 온다', result: '몇 분 뒤 선생님이 오시자 무리가 멈춘다.', impact: [{ who: '건우', text: '놀림이 멈춘다', tone: 1 }], end: '선생님을 불러 멈추게 했어요.',
        next: { text: '무리가 흩어진 뒤 건우가 혼자 휴대폰을 살피고 있다.', ask: '어떻게 할까?', choices: [
          { id: 'near', text: '다가가 "괜찮아? 같이 있을게"라고 한다', result: '건우가 고맙다고 한다.', impact: [{ who: '건우', text: '곁에 누가 있다고 느낀다', tone: 1 }], end: '멈춘 뒤에도 곁에 있었어요.',
            next: { text: '다음 날 무리 하나가 "누가 선생님 불렀냐"라며 둘러본다.', choices: [
              { id: 'tellagain', text: '담임 선생님께 이 말도 알린다', result: '선생님이 보복을 막으려 나선다.', impact: [{ who: '나', text: '보호를 받는다', tone: 1 }] },
              { id: 'hide', text: '들킬까 봐 건우를 피한다', result: '건우는 다시 혼자가 된다.', impact: [{ who: '건우', text: '외로워진다', tone: -1 }], why: '보복이 걱정되면 피하지 말고 어른에게 알려요.' }] } },
          { id: 'leave', text: '선생님이 오셨으니 그냥 간다', result: '건우는 혼자 남는다.', impact: [{ who: '건우', text: '아직 외롭다', tone: 0 }], why: '멈춘 뒤 곁에 있어 주는 것도 조력이에요.' }] } }] };
    const R1 = [{ id: 'r1', text: '보는 사람이 많을수록 서로 미루기 쉽다' }, { id: 'r2', text: '곁에 서기·어른 부르기처럼 위험이 적은 도움이 있다' },
      { id: 'r3', text: '아무것도 안 하면 중립이다', why: '지나치는 것도 놀림이 이어지게 해요.' }, { id: 'r4', text: '혼자 나서서 싸워야만 돕는 것이다', why: '내 안전을 지키며 돕는 방법이 여럿 있어요.' }];
    const R1C = { reasons: [{ id: 'r5', text: '지나친 길에서는 놀림이 쉬는 시간 내내 이어졌다' }, { id: 'r6', text: '곁에 선 길에서는 무리가 멈칫했다' }], ok: ['r5', 'r6'] };
    const LADDER = ['눈맞춤', '곁에서기', '말걸기', '함께알림'];

    ALL.push(
      // ---- 도입 ----
      M('intro.roles-scene', {
        title: '따돌림 장면 속 역할 찾기', method: '따돌림 장면 속 역할 찾기', tool: 'mindmap', minutes: 6,
        levels: { easy: '역할 셋(가해·방관·조력)만 짚으며 행동 카드 3장을 함께 나눈다.', base: '시연 판에서 행동 카드 8장이 역할 다섯 가지(가해·동조·강화·방관·조력)에 나뉘는 모습을 본다.', challenge: '역할마다 그 행동이 건우에게 준 영향을 한 마디씩 이어 말한다.' },
        intro: {
          teacher: '"급식실에서 건우의 자리를 치운 사람은 한 명인데, 이 장면에는 몇 가지 역할이 있을까요?" 시연 단추로 행동 카드가 가해·동조·강화·방관·조력 가지에 나뉘는 모습을 보인다. "웃기만 한 사람은 아무 짓도 안 했다"는 말이 나오면 "웃음소리를 들은 무리는 멈추고 싶어질까요, 더 하고 싶어질까요?"라고 되묻는다. 역할은 사람에게 붙는 이름표가 아니라 그 순간의 행동이고, 행동은 바꿀 수 있다고 밝힌다.',
          student: '급식실 따돌림 장면의 행동을 가해·동조·강화·방관·조력 역할로 나누고, 누구의 행동이 장면을 바꿀 수 있는지 생각해요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '급식실 장면', slots: ROLES, cards: strip(LUNCH) }, sequence: [{ sort: Object.fromEntries(ROLES.map((r) => [r, LUNCH.filter((c) => c.to === r).map((c) => c.id)])) }] },
          art: { draw: 'a paper-cut school cafeteria where one student stands holding a tray beside an empty spot while others laugh, look away, or wave him over', banner: '이 장면에는 몇 가지 역할이 있을까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: SAFE_NOTE,
      }),
      M('intro.crowd-graph', {
        title: '목격자 수와 돕는 비율', method: '목격자 수와 돕는 비율 그래프 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '두 막대(목격자 1명·20명)만 견주어 읽는다.', base: '세 막대(1명·5명·20명)를 읽고 줄어드는 까닭을 시연 판 보기에서 고른다.', challenge: '\'책임 분산\'이라는 낱말로 줄어드는 까닭을 한 문장으로 설명한다.' },
        intro: {
          teacher: '"보는 사람이 많으면 누군가 도와줄 가능성이 커질까요, 작아질까요?" 먼저 손을 들어 예상하게 한 뒤 가상 실험 막대그래프(85%·62%·31%)를 띄우고 시연 단추로 까닭을 고르는 모습을 보인다. "사람이 많으면 당연히 더 돕는다"는 예상이 나왔다면 "그래프는 왜 반대로 갈까요?"라고 되묻는다. 수치는 수업용 가상 값이라고 밝힌다.',
          student: '가상 실험 그래프에서 목격자 수에 따라 누군가 돕는 비율이 어떻게 바뀌는지 읽고, 줄어드는 까닭을 추론해요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '가상 실험 — 목격자 수에 따라 누군가 도운 비율', unit: '%', xLabel: '목격자 수', yLabel: '도운 비율', max: 100, data: CROWD, question: '목격자가 많을수록 비율이 줄어드는 까닭은?', choices: ['서로 "누가 하겠지" 하고 미룬다', '사람이 많으면 일이 작아 보여 괜찮다', '20명은 모두 친구가 아니다'] }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper-cut crowd of many small figures in a hallway all looking at each other, one figure in the middle needing help', banner: '많을수록 더 도울까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '85%·62%·31%는 방관자 효과 경향을 보여 주려고 지어낸 가상 값이다(화면 제목에 \'가상\').',
      }),

      // ---- 활동 ----
      M('act.hallway-dilemma', {
        title: '복도에서 놀림을 보았을 때', method: '복도 놀림 갈림길에서 결과 따라가기', tool: 'dilemma', minutes: 15,
        levels: { easy: '갈림 2번까지 가고, 고를 때마다 건우와 나에게 생기는 영향이 바로 보인다.', base: '갈림 3번까지 가고, 영향 표시는 맞힌 뒤에만 보인다. 끝에서 근거를 고른다.', challenge: '갈림 3번 뒤 지나친 길의 결말과 견주는 근거 카드까지 고르고, 가장 위험이 적고 효과 있는 길과 그 근거를 활동지에 쓴다.' },
        activity: {
          title: '복도에서 놀림을 보았을 때', tool: 'dilemma',
          teacher: '"복도에 열 명이 있었는데 왜 아무도 멈추지 않았을까요?" 학생마다 한 길을 끝까지 가 본 뒤 지나친 길·곁에 선 길·선생님을 모셔 온 길을 견주게 한다. "누군가 다른 사람이 도울 것"이라는 학생에게 "열 명 모두 그렇게 생각했다면 누가 도왔을까요?"라고 되묻는다. 곁에 섰을 때 \'선생님 좀 불러 줄래?\'처럼 한 사람을 정해 부탁하면 미루기가 깨진다는 점을 짚는다.',
          task: '복도에서 무리가 한 학생의 휴대폰을 던지며 놀리는 장면에서 세 번 골라, 내 선택이 그 학생과 무리에 준 결과를 따라가요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL({ easy: '복도에서 놀림을 봤어요. 두 번 골라 결과를 보고 근거를 고르세요.', base: '복도에서 놀림을 봤어요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 간 뒤, 지나친 길의 결말과 견주는 근거까지 고르세요.' },
              '복도 놀림', D1, [['stand', 'callfr', 'pickup'], ['teacher', 'near', 'tellagain'], ['pass', 'ask', 'with']], R1, ['r1', 'r2'], R1C),
            ONE('여럿이 함께 봤을 때 미루기를 깨는 말을 고르세요.', '미루기 깨기', { text: '나와 친구 셋이 함께 놀림 장면을 봤다. 모두 서로 눈치만 본다.', ask: '어떤 말이 좋을까?', motif: 'house', choices: [
              { id: 'someone', text: '"누가 선생님 좀 불러"', result: '모두 서로를 쳐다보며 아무도 가지 않는다.', why: '\'누가\'라고 하면 서로 미뤄요. 한 사람을 정해 부탁해요.' },
              { id: 'named', text: '"너는 선생님 불러 줘, 나는 옆에 있을게"', result: '한 명이 바로 교무실로 간다.', impact: [{ who: '놀림받는 친구', text: '도움이 온다', tone: 1 }], ending: '할 일을 나눠 맡겨 미루기를 깼어요.' }] }, ['named'],
              [{ id: 'q1', text: '사람을 정해 부탁하면 책임 분산이 깨진다' }, { id: 'q2', text: '모두가 보고 있으니 이미 누가 알렸다', why: '누가 알렸는지 모르면 내가 정해서 부탁해요.' }], ['q1']),
            ONE('직접 나서기 무서울 때 할 수 있는 길을 고르세요.', '무서울 때', { text: '놀리는 무리가 덩치 큰 선배들이다. 다가가면 나도 위험할 것 같다.', ask: '어떻게 할까?', motif: 'house', choices: [
              { id: 'away', text: '자리를 벗어나 가까운 선생님께 알린다', result: '선생님이 상황을 살피러 온다.', impact: [{ who: '나', text: '안전하다', tone: 1 }, { who: '놀림받는 친구', text: '도움을 받는다', tone: 1 }], ending: '내 안전을 지키며 도왔어요.' },
              { id: 'freeze', text: '무서우니 아무것도 하지 않는다', result: '놀림이 계속된다.', why: '직접 나서지 못해도 알리는 것으로 도울 수 있어요.' }] }, ['away'], null, null,
              { conclude: '보는 사람이 많을수록 서로 미루기 쉬워요. 내가 먼저, 내 안전을 지키며 곁에 서거나 어른을 부르면 장면이 바뀌어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '가장 위험이 적고 효과 있는 길을 하나 골라 그 까닭을 한 문장으로 써요.' }],
          easy: [{ type: 'choice', prompt: '\'책임 분산\'을 바르게 설명한 것은?', options: ['보는 사람이 많을수록 서로 미루는 것', '책임을 여럿이 나눠 더 잘 돕는 것'], answer: '보는 사람이 많을수록 서로 미루는 것' }] },
        notes: SAFE_NOTE,
      }),
      M('act.small-actions', {
        title: '작은 행동 사다리 만들기', method: '작은 행동 사다리 만들기', tool: 'pattern', minutes: 15,
        levels: { easy: '사다리 세 칸(눈맞춤·□·말걸기) 가운데 빈칸 하나를 채운다.', base: '사다리 다섯 칸에서 빈칸 둘을 채우고, 사다리에 끼어든 틀린 조각을 찾고, 사다리의 규칙을 고른다.', challenge: '사다리 다섯 칸 빈칸을 채운 뒤 활동지에 나만의 행동 한 칸과 칸마다의 위험을 적는다.' },
        activity: {
          title: '작은 행동 사다리 만들기', tool: 'pattern',
          teacher: '"\'나 혼자는 바꿀 수 없다\'고 느낄 때, 사다리 맨 아래 칸은 무엇일까요?" 칸을 채울 때마다 그 행동이 얼마나 어렵고 위험한지 손가락 수(1~5)로 말하게 한다. "눈 맞추기는 아무것도 아니다"라는 학생에게 "혼자라고 느끼는 친구에게 누군가 나를 봤다는 것은 어떤 뜻일까요?"라고 되묻는다. 사다리는 한 번에 꼭대기로 가는 것이 아니라 오늘 할 수 있는 칸부터 오르는 것이라고 말해 준다.',
          task: '괴롭힘을 봤을 때 할 수 있는 행동을 쉬운 것부터 어려운 것까지 사다리 조각으로 잇고, 사다리에 맞지 않는 조각을 찾아요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '쉬운 행동에서 어려운 행동으로 오르는 사다리의 빈칸을 채우세요.', toolOptions: { mode: 'fill', seq: ['눈맞춤', null, '말걸기', null], palette: ['곁에서기', '함께알림', '같이웃기', '못본척'] }, target: { fill: ['곁에서기', '함께알림'] } },
              { prompt: '사다리 세 칸의 빈칸 하나를 채우세요.', toolOptions: { seq: ['눈맞춤', null, '말걸기'], palette: ['곁에서기', '같이웃기'] }, target: { fill: ['곁에서기'] } },
              { prompt: '다섯 칸 사다리의 빈칸 둘을 채우세요(기록하기는 알리기 전에 해요).', toolOptions: { seq: ['눈맞춤', '곁에서기', null, '기록하기', null], palette: ['말걸기', '함께알림', '같이웃기', '못본척'] }, target: { fill: ['말걸기', '함께알림'] } }),
            IT({ prompt: '조력 사다리에 끼어든, 맞지 않는 조각을 찾으세요.', toolOptions: { mode: 'odd', seq: ['눈맞춤', '곁에서기', '같이웃기', '말걸기', '함께알림'] }, target: { odd: 2 } }),
            IT({ prompt: '이 사다리의 규칙을 고르세요.', toolOptions: { mode: 'rule', seq: LADDER, question: '사다리 조각이 놓인 규칙은?', choices: ['쉽고 덜 위험한 행동에서 어렵고 큰 행동으로 오른다', '위험한 행동에서 안전한 행동으로 내려간다', '아무 차례 없이 놓였다'] }, target: { pick: 0 }, conclude: '도움에는 사다리처럼 칸이 있어요. 눈 맞추기, 곁에 서기 같은 작은 칸부터 오를 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '사다리 칸마다 위험을 표시하고 나만의 행동 한 칸을 더해요.', columns: ['칸', '행동', '위험(적음·보통·큼)'], cells: [['1', '눈 맞추기', ''], ['2', '곁에 서기', ''], ['3', '나중에 말 걸기', ''], ['4', '함께 어른께 가기', ''], ['나만의 칸', '', '']], answer: '(예) 적음, 적음, 보통, 보통 / 나만의 칸: 따로 괜찮냐고 메시지 보내기' }] },
        notes: '교구 조각 글이 짧아 사다리 칸을 \'눈맞춤·곁에서기·말걸기·기록하기·함께알림\'으로 줄여 썼다. 칸마다 위험 표시와 나만의 칸은 활동지에 쓴다.',
      }),
      M('act.role-play-script', {
        title: '조력자 등장 역할극 대본', method: '조력자 등장 역할극 대본 두 가지 쓰기', tool: 'story', minutes: 15,
        levels: { easy: '두 대본의 빈칸을 채우되 "한 명이 먼저 움직임" 대본은 빈칸 2개만이고, 넣으면 바로 맞는지 알려 준다.', base: '"모두 방관" 대본과 "한 명이 먼저 움직임" 대본의 빈칸을 채우고 달라진 결말 카드를 고른다.', challenge: '셋째 문항에서 두 번째 조력자가 따라 나서는 장면의 대사까지 채운다.' },
        activity: {
          title: '조력자 등장 역할극 대본', tool: 'story',
          teacher: '"같은 급식실 장면인데, 한 사람의 첫마디로 결말이 얼마나 달라질까요?" 두 대본을 채운 뒤 모둠별로 소리 내어 읽고 결말을 견주게 한다. "먼저 나서면 나만 튄다"는 학생에게 "첫 사람이 움직이면 두 번째 사람은 더 쉽게 움직일까요?"라고 되묻는다. 괴롭히는 역할의 대사는 짧게 하고, 실제 친구 이름을 쓰지 않는다.',
          task: '급식실 따돌림 장면을 "모두 방관"과 "한 명이 먼저 움직임" 두 대본으로 채우고, 달라진 결말을 견줘요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(FB('대본 가(모두 방관)의 빈칸에 알맞은 말 카드를 넣으세요.', [['무리: "여기 우리 자리야" — 친구 1: "___"', '"(못 들은 척 밥을 먹는다)"', '친구 1', 'leaf'], ['친구 2(속으로): "___"', '"누가 뭐라 하겠지…"', '친구 2', 'leaf'], ['건우: "___"', '"(식판을 들고 서 있다)"', '건우', 'cloud']], ['"여기 앉아"']),
              null),
            IT(FB('대본 나(한 명이 먼저 움직임)의 빈칸에 알맞은 말 카드를 넣으세요.', [['무리: "여기 우리 자리야" — 나: "___"', '"건우야, 여기 앉아"', '나', 'star'], ['무리: "넌 뭔데?" — 나: "___"', '"같이 먹으려고. 자리 많잖아"', '나', 'star'], ['친구: "___"', '"나도 옆으로 좀 옮길게"', '친구', 'leaf']], ['"ㅋㅋ 서 있어"']),
              FB('대본 나(한 명이 먼저 움직임)의 빈칸 2개에 알맞은 말 카드를 넣으세요.', [['무리: "여기 우리 자리야" — 나: "___"', '"건우야, 여기 앉아"', '나', 'star'], ['무리: "넌 뭔데?" — 나: "___"', '"같이 먹으려고. 자리 많잖아"', '나', 'star']], [])),
            IT(PB('대본 나에서 달라진 결말만 골라 담으세요.', '달라진 결말', [
              { id: 'p1', text: '건우가 앉을 자리가 생겼다', ok: true }, { id: 'p2', text: '옆 친구도 따라 움직였다', ok: true },
              { id: 'p3', text: '건우가 식판을 들고 서 있었다' }, { id: 'p4', text: '무리가 더 크게 웃었다' }]),
              null,
              FB('두 번째 조력자가 따라 나서는 장면의 빈칸에 알맞은 대사를 넣으세요.', [['나: "건우야, 여기 앉아" — 두 번째 친구: "___"', '"나도 여기서 같이 먹을래"', '친구', 'leaf'], ['무리: "왜들 그래?" — 두 번째 친구: "___"', '"자리 치우는 건 안 웃겨"', '친구', 'leaf'], ['건우: "___"', '"고마워, 같이 먹자"', '건우', 'sun']], ['"나는 빠질게"']),
              { conclude: '한 사람이 먼저 움직이면 두 번째 사람이 따라오기 쉬워져요. 방관하던 사람도 조력자가 될 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '두 대본의 결말을 견줘 써요.', columns: ['대본', '결말'], cells: [['모두 방관', ''], ['한 명이 먼저 움직임', '']], answer: '(예) 건우가 서 있었다, 건우가 앉고 친구들도 따라 움직였다' }] },
      }),
      M('act.conform-analysis', {
        title: '동조 압력 사례 분석 글', method: '동조 압력 사례 분석 글 쓰기', tool: 'rubric-writing', minutes: 15,
        levels: { easy: '가상 일기를 읽고 문장 틀로 세 문장(동조가 생긴 까닭·다른 선택)을 쓴다.', base: '가상 일기를 읽고 네 문장으로 분석하고 기준표(까닭·감정·다른 선택·판단 근거)로 점검한다.', challenge: '반 전체 분위기를 바꾸는 방법을 한 문장 더해 다섯 문장으로 쓴다.' },
        activity: {
          title: '동조 압력 사례 분석 글', tool: 'rubric-writing',
          teacher: '"\'다들 웃으니까 나도 웃었다\' — 이 학생은 정말 웃기고 싶었을까요?" 가상 일기를 함께 읽고 동조가 생긴 까닭(혼자 튈까 봐, 다음은 나일까 봐)을 찾게 한다. "다들 그러니 어쩔 수 없다"고 쓰는 학생에게 "그때 할 수 있었던 가장 작은 다른 행동은 무엇이었을까요?"라고 되묻는다. 일기 속 학생을 나쁜 사람으로 쓰지 않고, 바꿀 수 있는 행동을 쓰게 한다.',
          task: '"다들 웃으니까 나도 웃었다"는 가상 학생 일기를 읽고, 동조가 생긴 까닭과 다른 선택을 분석하는 글을 써요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(RW('일기 속 학생이 따라 웃은 까닭을 두 문장으로 분석하세요.', { topic: '가상 일기: "건우 자리를 치울 때 다들 웃길래 나도 웃었다. 사실 좀 불편했다." 이 학생이 따라 웃은 까닭을 두 문장으로 쓰세요.', min: 25, max: 160, s: [2, 3], title: '분석 ① 까닭' }, ['동조가 생긴 까닭을 썼다', '그 학생의 감정을 짚었다', '학생을 탓하지 않고 썼다']),
              RW('틀을 채워 따라 웃은 까닭을 쓰세요.', { topic: '일기 속 학생이 따라 웃은 까닭을 쓰세요.', min: 15, max: 120, s: [1, 2], starter: '혼자 ___ 싶지 않아서 따라 웃었을 것이다.' }, ['동조가 생긴 까닭을 썼다', '학생을 탓하지 않고 썼다'])),
            IT(RW('그 학생이 할 수 있었던 다른 선택을 두 문장으로 쓰세요.', { topic: '일기 속 학생이 그 순간 할 수 있었던 다른 선택과 그 결과를 두 문장으로 쓰세요.', min: 25, max: 160, s: [2, 3], title: '분석 ② 다른 선택' }, ['다른 선택을 구체적으로 썼다', '그 선택의 결과를 썼다', '안전한 행동이다'])),
            IT(RW('분석 글 네 문장을 이어 완성하세요.', { topic: '앞에서 쓴 문장을 이어 동조가 생긴 까닭과 다른 선택을 네 문장으로 분석하세요.', min: 50, max: 240, s: [4, 5], title: '동조 압력 분석' }, ['동조가 생긴 까닭을 썼다', '감정을 짚었다', '다른 선택을 썼다', '판단 근거가 있다'], [['동조', '따라', '눈치']]),
              RW('분석 글 세 문장을 이어 완성하세요.', { topic: '동조가 생긴 까닭과 다른 선택을 세 문장으로 쓰세요.', min: 35, max: 200, s: [3, 4], starter: '혼자 ___ 싶지 않아서 따라 웃었다. 하지만 ___ 할 수 있었다.' }, ['동조가 생긴 까닭을 썼다', '다른 선택을 썼다'], [['동조', '따라', '눈치']]),
              RW('분석 글에 반 전체 분위기를 바꾸는 방법 한 문장을 더해 완성하세요.', { topic: '동조가 생긴 까닭과 다른 선택 네 문장에, 반 전체 분위기를 바꾸는 방법 한 문장을 더해 쓰세요.', min: 60, max: 280, s: [5, 5], title: '분석과 제안' }, ['동조가 생긴 까닭을 썼다', '감정을 짚었다', '다른 선택을 썼다', '반 전체를 바꾸는 방법을 썼다'], [['동조', '따라', '눈치']]),
              { conclude: '동조는 혼자 튈까 두려워 생기지만, 가장 작은 다른 행동 하나가 분위기를 바꾸는 첫 칸이 돼요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"다들 웃으니까 나도 웃었다"는 순간에 할 수 있는 가장 작은 다른 행동을 한 문장으로 써요.' }] },
      }),

      // ---- 정리 ----
      M('wrap.action-card', {
        title: '나의 첫 번째 작은 행동 카드', method: '나의 첫 번째 작은 행동 카드 고르기', tool: 'wordcards', minutes: 7,
        levels: { easy: '행동 카드 가운데 이번 주에 해 볼 하나만 칸에 놓는다.', base: '행동 카드 하나와 "언제·누구와" 카드 하나를 짝 칸에 놓는다.', challenge: '행동이 어려울 때의 다른 행동 카드까지 셋째 칸에 놓는다.' },
        wrap: {
          teacher: '"오늘 사다리에서 이번 주 내가 실제로 오를 칸은 어디인가요?" 행동 카드와 \'언제·누구와\' 카드를 묶게 한 뒤 몇 명의 카드를 들어 본다. "그런 일이 안 생기면 못 한다"는 학생에게 "이번 주 급식실·단톡방에서 혼자인 친구에게 할 수 있는 칸은 무엇일까요?"라고 되묻는다. 친구 이름 대신 장소와 때를 쓴다.',
          exitTicket: [
            IT(X('wordcards', { prompt: '이번 주 해 볼 작은 행동과 "언제·누구와" 카드를 칸에 놓아요.', toolOptions: { mode: 'match', slots: [{ id: 's1', label: '이번 주 해 볼 작은 행동' }, { id: 's2', label: '언제·누구와' }], cards: [
              { id: 'a1', text: '혼자인 친구와 눈 맞추기' }, { id: 'a2', text: '혼자인 친구 곁에 서기' }, { id: 'a3', text: '나중에 괜찮냐고 말 걸기' },
              { id: 't1', text: '급식 시간에, 짝과 함께' }, { id: 't2', text: '쉬는 시간에, 혼자서' }, { id: 'x1', text: '같이 웃어 주기' }] }, target: { match: { s1: ['a1', 'a2', 'a3'], s2: ['t1', 't2'] } } }, { difficulty: 0.15 }),
              { prompt: '이번 주 해 볼 작은 행동 카드 하나를 칸에 놓아요.', toolOptions: { slots: [{ id: 's1', label: '이번 주 해 볼 작은 행동' }] }, target: { match: { s1: ['a1', 'a2', 'a3'] } } },
              { prompt: '작은 행동, "언제·누구와", 어려울 때의 다른 행동 카드를 칸에 놓아요.', toolOptions: { slots: [{ id: 's1', label: '이번 주 해 볼 작은 행동' }, { id: 's2', label: '언제·누구와' }, { id: 's3', label: '어려울 때의 다른 행동' }], cards: [
                { id: 'a1', text: '혼자인 친구와 눈 맞추기' }, { id: 'a2', text: '혼자인 친구 곁에 서기' }, { id: 'a3', text: '나중에 괜찮냐고 말 걸기' },
                { id: 't1', text: '급식 시간에, 짝과 함께' }, { id: 't2', text: '쉬는 시간에, 혼자서' }, { id: 'o1', text: '담임 선생님께 본 것 말하기' }, { id: 'x1', text: '같이 웃어 주기' }] }, target: { match: { s1: ['a1', 'a2', 'a3'], s2: ['t1', 't2'], s3: ['o1'] } } }),
            { type: 'choice', prompt: '"아무것도 안 하면 중립이다"라는 말에 대한 생각으로 알맞은 것은?', options: ['지나치는 것도 괴롭힘이 이어지게 하니 중립이 아니다', '아무것도 안 하면 아무 영향이 없다', '중립이 가장 안전한 조력이다'], answer: 0, difficulty: 0.15, explain: '보고 지나치는 것도 장면에 영향을 줘요.' },
          ],
        },
        worksheet: {
          title: '나의 첫 번째 작은 행동',
          items: [
            { type: 'blank', prompt: '내 행동 카드를 옮겨 써요.', text: '이번 주 ___ 에, ___ 하겠다.', answer: '(예) 급식 시간, 혼자인 친구 곁에 서기' },
            { type: 'short', prompt: '행동이 어려울 때 할 다른 행동을 써요.' },
          ],
        },
      }),
      M('wrap.ally-song', {
        title: '조력자 구호 리듬', method: '조력자 구호 리듬 치기', tool: 'keyboard', minutes: 7,
        levels: { easy: '구호 한 줄("보면 멈추고")을 4박 마디 하나 리듬으로 짓는다(박 수가 보인다).', base: '구호 세 줄("보면 멈추고 / 곁에 서고 / 함께 알린다")을 4박 마디 셋에 맞춰 짓는다.', challenge: '구호에 우리 반 이름을 넣은 줄을 더해 4박 마디 넷으로 다듬는다.' },
        wrap: {
          teacher: '"\'보면 멈추고, 곁에 서고, 함께 알린다\' — 세 마디를 네 박씩에 어떻게 실을까요?" 리듬 블록으로 박을 채운 뒤 모둠별로 손뼉과 함께 구호를 친다. 구호는 누군가를 놀리는 노래가 아니라 우리가 할 행동을 외우는 것이라는 점을 짚고, "나 혼자는 바꿀 수 없다"는 오개념을 \'함께\'에서 바로잡는다.',
          exitTicket: [
            IT(Object.assign(X('keyboard', BEAT('구호 "보면 멈추고 / 곁에 서고 / 함께 알린다"를 4박 마디 세 개 리듬으로 지어요.', { measures: 3, blocks: ['q', 'e', 'h', 'qr'] }, { beats: true, selfCheck: ['구호 글자에 맞춰 박을 나눴다', '모둠과 함께 손뼉으로 쳐 보았다'] })), { difficulty: 0.2 }),
              { prompt: '구호 한 줄 "보면 멈추고"를 4박 마디 하나 리듬으로 지어요.', toolOptions: { measures: 1, blocks: ['q', 'h', 'qr'], showBeats: true }, target: { beats: true, selfCheck: ['구호 글자에 맞춰 박을 나눴다'] } },
              { prompt: '우리 반 이름을 넣은 한 줄을 더해 4박 마디 네 개 리듬으로 지어요.', toolOptions: { measures: 4, blocks: ['q', 'e', 'h', 'qr', 'er'] }, target: { beats: true, selfCheck: ['구호 글자에 맞춰 박을 나눴다', '우리 반 이름을 넣은 줄을 더했다', '모둠과 함께 손뼉으로 쳐 보았다'] } }),
            { type: 'choice', prompt: '조력자 구호 "보면 멈추고, 곁에 서고, 함께 알린다"에서 \'함께 알린다\'의 뜻으로 알맞은 것은?', options: ['본 것을 친구와 함께 믿을 어른에게 말한다', '단톡방에 모두 알린다', '괴롭힌 사람을 함께 혼낸다'], answer: 0, difficulty: 0.15, explain: '함께 어른에게 가면 두려움이 줄어요.' },
            { type: 'short', prompt: '우리 모둠 조력자 구호를 한 줄로 써요.' },
          ],
        },
        worksheet: {
          title: '조력자 구호',
          items: [
            { type: 'blank', prompt: '구호를 완성해요.', text: '보면 ___, 곁에 ___, 함께 ___', answer: '멈추고, 서고, 알린다' },
            { type: 'short', prompt: '우리 반 이름을 넣은 구호 한 줄을 써요.' },
          ],
        },
        notes: '교구는 구호 글자를 치지 않는다 — 리듬 블록으로 4박 마디를 채우고, 구호 글은 문제 글·활동지에 적었다.',
      }),
    );
  }

  // ==== 7학년 · 감정 온도 낮추기와 회복적 질문 (bully.m.g7-restorative-questions) ====
  {
    const M = MK('g7-restorative-questions', [7]);
    const TALK = [['1줄 "내 자료 어디 갔어?"', 3], ['2줄 "몰라, 네가 챙겼어야지"', 5], ['3줄 "네가 마지막에 봤잖아!"', 7], ['4줄 "왜 나한테 소리 질러?"', 8], ['5줄 "잠깐, 같이 찾아보자"', 5], ['6줄 "미안, 놀라서 그랬어"', 3]];
    const Q4 = [
      { id: 'q1', text: '무슨 일이 있었나?' }, { id: 'q2', text: '누가 어떤 영향을 받았나?' },
      { id: 'q3', text: '무엇이 필요한가?' }, { id: 'q4', text: '앞으로 어떻게 할까?' },
    ];
    const D1 = { text: '체육 시간 피구에서 우리 팀이 졌다. 팀 친구들이 마지막에 공을 놓친 시우를 둘러싸고 "너 때문에 졌잖아"라고 한다. 나는 이 이야기를 이끄는 진행자다.', ask: '어떤 질문으로 시작할까?', motif: 'house', choices: [
      { id: 'who', text: '"그래서 누가 잘못한 건데?"', result: '모두 시우를 가리키고 시우는 고개를 숙인다.', impact: [{ who: '시우', text: '혼자 탓을 받는다', tone: -1 }], why: '잘못한 사람 찾기로 시작하면 한 사람에게 탓이 몰려요.', end: '탓하는 대화가 되었어요.',
        next: { text: '시우가 "나도 일부러 그런 거 아니야"라며 울먹인다. 친구들은 더 몰아붙인다.', ask: '이제 어떤 질문을 할까?', choices: [
          { id: 'turn', text: '"잠깐, 지금 다들 어떤 마음이야?"', result: '친구들이 "억울해", "아쉬워"라고 말하기 시작한다.', impact: [{ who: '시우', text: '몰아붙임이 멈춘다', tone: 1 }], end: '늦었지만 질문을 바꿨어요.',
            next: { text: '친구들이 아쉬운 마음을 말했다. 시우는 아직 고개를 못 든다.', choices: [
              { id: 'need', text: '"다음 경기에서 우리에게 필요한 건 뭘까?"', result: '"작전 연습"이라는 말이 나오고 시우도 고개를 든다.', impact: [{ who: '팀', text: '함께할 일을 찾는다', tone: 1 }] },
              { id: 'again', text: '"그래도 시우가 놓친 건 맞잖아"', result: '다시 탓하는 분위기가 된다.', impact: [{ who: '시우', text: '다시 혼자가 된다', tone: -1 }], why: '영향을 들은 뒤에는 필요한 것을 물어요.' }] } },
          { id: 'push', text: '"시우가 사과하면 끝내자"', result: '시우가 억지로 사과하고 모두 불편하게 흩어진다.', impact: [{ who: '팀', text: '마음이 풀리지 않는다', tone: -1 }], why: '억지 사과보다 영향과 필요를 먼저 들어야 해요.' }] } },
      { id: 'what', text: '"무슨 일이 있었는지 한 명씩 말해 볼까?"', result: '친구들이 마지막 장면을 저마다 다르게 기억한다는 것이 드러난다.', impact: [{ who: '팀', text: '서로의 이야기를 듣는다', tone: 1 }], end: '무슨 일이 있었는지부터 물었어요.',
        next: { text: '한 친구가 "사실 나도 앞에서 공 두 번 놓쳤어"라고 말한다.', ask: '다음 질문은?', choices: [
          { id: 'impact', text: '"이 일로 누가 어떤 영향을 받았을까?"', result: '시우가 "다들 나만 보는 것 같아 힘들었어"라고 말한다.', impact: [{ who: '시우', text: '마음을 말할 기회를 얻는다', tone: 1 }], end: '영향을 물었어요.',
            next: { text: '모두 시우의 말을 들었다. 잠시 조용해졌다.', choices: [
              { id: 'next', text: '"그럼 앞으로 어떻게 하면 좋을까?"', result: '"졌을 때 한 사람 탓하지 않기"라는 약속이 나온다.', impact: [{ who: '팀', text: '함께 지킬 약속이 생긴다', tone: 1 }] },
              { id: 'judge', text: '"결국 누가 제일 잘못했지?"', result: '대화가 처음으로 돌아간다.', why: '영향을 들은 뒤에는 앞으로를 물어요.' }] } },
          { id: 'score', text: '"누가 몇 번 놓쳤는지 세어 보자"', result: '서로 놓친 횟수를 따지며 다툼이 커진다.', impact: [{ who: '팀', text: '서로 탓한다', tone: -1 }], why: '숫자 따지기는 탓하는 대화로 돌아가게 해요.' }] } },
      { id: 'feel', text: '"다들 많이 아쉽구나. 이 일로 어떤 마음이 들었어?"', result: '"억울해", "속상해"라는 말이 나오고 목소리가 낮아진다.', impact: [{ who: '팀', text: '감정 온도가 내려간다', tone: 1 }], end: '마음부터 물었어요.',
        next: { text: '시우가 "나도 너무 속상해"라고 말한다.', ask: '다음 질문은?', choices: [
          { id: 'need2', text: '"우리에게 지금 무엇이 필요할까?"', result: '"다음엔 작전을 같이 짜자"는 말이 나온다.', impact: [{ who: '시우', text: '팀에 다시 낀다', tone: 1 }], end: '필요한 것을 물었어요.',
            next: { text: '작전을 같이 짜기로 했다.', choices: [
              { id: 'promise', text: '"다음 시간에 어떻게 할지 약속 하나 정할까?"', result: '"졌을 때 서로 탓하지 않기"로 약속한다.', impact: [{ who: '팀', text: '관계가 회복된다', tone: 1 }] },
              { id: 'skip', text: '"됐다, 끝"', result: '약속 없이 흩어진다.', impact: [{ who: '팀', text: '다음에 또 다툴 수 있다', tone: 0 }], why: '앞으로의 약속까지 정해야 되풀이를 막아요.' }] } },
          { id: 'blame2', text: '"근데 시우가 좀 더 잘했어야지"', result: '분위기가 다시 날카로워진다.', impact: [{ who: '시우', text: '다시 탓을 받는다', tone: -1 }], why: '마음을 들은 뒤 다시 탓하면 대화가 닫혀요.' }] } }] };
    const R1 = [{ id: 'r1', text: '누가 잘못했는지보다 영향과 필요를 물으면 관계가 회복된다' }, { id: 'r2', text: '한 사람에게 탓이 몰리면 힘이 기운다' },
      { id: 'r3', text: '잘못한 사람만 가리면 갈등이 끝난다', why: '탓만 가리면 마음이 풀리지 않고 되풀이될 수 있어요.' }, { id: 'r4', text: '억지로라도 사과하게 하면 된다', why: '영향을 이해하지 못한 사과는 관계를 회복하지 못해요.' }];
    const R1C = { reasons: [{ id: 'r5', text: '탓으로 시작한 길에서는 시우 혼자 고개를 숙였다' }, { id: 'r6', text: '질문을 바꾼 길에서는 약속이 생겼다' }], ok: ['r5', 'r6'] };

    ALL.push(
      // ---- 도입 ----
      M('intro.temp-gauge', {
        title: '말다툼 장면의 감정 온도', method: '말다툼 장면의 감정 온도 재기', tool: 'chart', minutes: 6,
        levels: { easy: '대화 4줄의 감정 온도를 교사가 읽어 주며 시연 판 꺾은선이 그려지는 모습을 본다.', base: '대화 6줄의 감정 온도(0~10) 꺾은선을 보고 급히 오른 줄을 짚는다.', challenge: '온도를 낮출 수 있었던 줄을 골라 새 말로 바꿔 말한다.' },
        intro: {
          teacher: '"\'내 자료 어디 갔어?\'에서 시작한 말이 어느 줄에서 확 뜨거워졌을까요?" 가상 대화 6줄을 읽으며 줄마다 감정 온도를 손가락으로 표시하게 한 뒤, 시연 단추로 꺾은선이 그려지는 모습을 보인다. "화가 나면 바로 말해야 풀린다"는 말이 나오면 "4줄에서 온도가 8까지 오른 뒤 한 말이 일을 풀었나요, 키웠나요?"라고 되묻는다. 5줄 "잠깐"에서 온도가 내려간 것을 오늘의 열쇠로 삼는다.',
          student: '가상 말다툼 대화 6줄의 감정 온도를 0~10으로 재어 꺾은선으로 보고, 온도가 급히 오른 줄과 내려간 줄을 찾아요.',
          demo: { tool: 'chart', options: { type: 'line', mode: 'build', title: '가상 대화의 감정 온도(0~10)', unit: '도', xLabel: '대화 줄', yLabel: '감정 온도', max: 10, scale: 1, data: TALK, showTable: true }, sequence: [{ build: true }] },
          art: { draw: 'a paper-cut thermometer beside two students talking with speech bubbles, the mercury rising high then dropping', banner: '어디서 뜨거워졌을까?', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
        notes: '감정 온도 값은 수업용으로 정한 가상 값이다. 학생마다 다르게 느낄 수 있다고 말해 준다.',
      }),
      M('intro.pause-breath', {
        title: '열 박 멈춤 연습', method: '열 박 멈춤 연습', tool: 'timer', minutes: 6,
        levels: { easy: '타이머 다섯 박(5초) 동안 숨 고르기를 함께 하고 기분 눈금을 말로 견준다.', base: '타이머 열 박(10초) 동안 숨 고르기·손 풀기를 하고, 멈추기 전후 기분 눈금(0~10)을 기록 칸에 적는 시연을 본다.', challenge: '멈춘 뒤 할 첫마디("잠깐, 나 좀 화났어")까지 소리 내어 연습한다.' },
        intro: {
          teacher: '"화가 확 올랐을 때, 말하기 전에 열 박만 멈추면 무엇이 달라질까요?" 시연 단추로 타이머를 10초·1번으로 맞추고 기분 눈금(멈추기 전 7, 멈춘 뒤 4)을 적는 모습을 보인 뒤 다 같이 열 박 숨 고르기를 한다. "참으면 더 쌓인다"는 말이 나오면 "멈춤은 참는 게 아니라, 말할 준비를 하는 시간이에요"라고 말해 준다. 열 박은 우리 반 연습 약속이다.',
          student: '타이머 열 박에 맞춰 숨 고르기와 손 풀기를 하고, 멈추기 전과 뒤의 기분 눈금을 견줘요.',
          demo: { tool: 'timer', options: { title: '열 박 멈춤(우리 반 연습 약속)', plan: { work: 5, rest: 0, rounds: 1 }, fields: [{ label: '멈추기 전 기분', unit: '점' }, { label: '멈춘 뒤 기분', unit: '점' }] }, sequence: [{ plan: { work: 10, rounds: 1 }, records: [7, 4] }] },
          art: { draw: 'a paper-cut student with eyes closed breathing slowly beside a paper timer counting ten small dots', banner: '열 박만 멈춰 볼까?', extra: [{ motif: 'leaf', x: 300, y: 96 }] },
        },
        notes: '열 박(10초)과 기분 눈금 값은 수업 연습 약속 값이다(근거 수치 아님).',
      }),

      // ---- 활동 ----
      M('act.four-questions', {
        title: '회복적 질문 차례 놓기', method: '회복적 질문 차례 놓기', tool: 'timeline', minutes: 15,
        levels: { easy: '질문 카드 넷을 차례대로 놓고, 놓으면 바로 맞는지 알려 준다.', base: '질문 넷의 차례를 놓고, 가상 사례(모둠 발표 자료 분실)의 답 카드를 질문마다 붙인다(함정 카드가 섞인다).', challenge: '셋째 문항에서 다른 당사자(자료를 잃어버린 쪽)의 답 카드를 질문마다 따로 붙인다.' },
        activity: {
          title: '회복적 질문 차례 놓기', tool: 'timeline',
          teacher: '"갈등을 다룰 때 \'누가 잘못했어?\' 대신 처음에 물을 질문은 무엇일까요?" 질문 카드를 놓은 뒤 \'무슨 일 → 영향 → 필요 → 앞으로\' 차례를 소리 내어 읽게 한다. "결국 잘못한 사람을 가려야 끝난다"는 학생에게 "잘못을 가린 뒤에도 자료는 다시 만들어야 하고 두 사람은 같은 모둠이에요. 그다음은요?"라고 되묻는다. 답 카드를 붙일 때 한 사람을 탓하는 카드는 함정이라고 미리 말한다.',
          task: '회복적 질문 네 가지를 차례대로 놓고, 가상 사례(모둠 발표 자료 분실)에서 질문마다 알맞은 답을 붙여요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(OB('회복적 질문 카드를 차례대로 놓으세요.', Q4, { axis: ['먼저', '나중'] }, [{ id: 'x1', text: '누가 잘못했나?' }])),
            IT(MB('발표 자료를 맡았던 유나의 답을 질문마다 이으세요.', [['무슨 일이 있었나?', '발표 전날 자료 파일이 사라졌다'], ['누가 어떤 영향을 받았나?', '모둠 넷 모두 발표를 걱정했다'], ['무엇이 필요한가?', '자료를 다시 나눠 만들 시간'], ['앞으로 어떻게 할까?', '파일을 두 곳에 저장하기로 한다']], ['태오가 다 잘못했다'], { axis: ['질문', '답'] }),
              MB('발표 자료를 맡았던 유나의 답을 질문 둘에 이으세요.', [['무슨 일이 있었나?', '발표 전날 자료 파일이 사라졌다'], ['무엇이 필요한가?', '자료를 다시 나눠 만들 시간']], [], { axis: ['질문', '답'] })),
            IT(MB('파일을 마지막에 연 태오의 답을 질문마다 이으세요.', [['무슨 일이 있었나?', '고치다가 실수로 지운 것 같다'], ['누가 어떤 영향을 받았나?', '모둠 친구들 볼 낯이 없었다'], ['무엇이 필요한가?', '실수를 바로잡을 기회'], ['앞으로 어떻게 할까?', '지운 부분을 내가 먼저 다시 만든다']], ['유나가 저장을 안 했다'], { axis: ['질문', '답'] }),
              null,
              MB('두 당사자의 "필요"와 "앞으로"를 각각 이으세요.', [['유나 — 무엇이 필요한가?', '자료를 다시 나눠 만들 시간'], ['태오 — 무엇이 필요한가?', '실수를 바로잡을 기회'], ['유나 — 앞으로 어떻게 할까?', '파일을 두 곳에 저장하기로 한다'], ['태오 — 앞으로 어떻게 할까?', '지운 부분을 내가 먼저 다시 만든다']], ['서로 다시는 같은 모둠 안 하기'], { axis: ['당사자', '답'] }),
              { conclude: '회복적 질문은 무슨 일 → 영향 → 필요 → 앞으로의 차례로 물어요. 탓을 가리는 대신 관계와 할 일을 되살려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '회복적 질문 네 가지를 차례대로 써요.', columns: ['차례', '질문'], cells: [['1', ''], ['2', ''], ['3', ''], ['4', '']], answer: '무슨 일이 있었나, 누가 어떤 영향을 받았나, 무엇이 필요한가, 앞으로 어떻게 할까' }] },
      }),
      M('act.blame-vs-restore', {
        title: '탓하는 대화와 회복하는 대화', method: '탓하는 대화와 회복하는 대화 견주기', tool: 'dilemma', minutes: 15,
        levels: { easy: '갈림 2번까지 가고, 고를 때마다 시우와 팀에 생기는 영향이 바로 보인다.', base: '갈림 3번까지 가고, 영향 표시는 맞힌 뒤에만 보인다. 끝에서 근거를 고른다.', challenge: '갈림 3번 뒤 탓으로 시작한 길의 결말과 견주는 근거 카드까지 고르고, 두 길의 결말을 활동지 표로 견준다.' },
        activity: {
          title: '탓하는 대화와 회복하는 대화', tool: 'dilemma',
          teacher: '"진행자의 첫 질문 하나가 대화 전체를 바꿀 수 있을까요?" 학생마다 진행자가 되어 한 길을 끝까지 가 본 뒤 \'누가 잘못?\'으로 시작한 길과 \'무슨 일?·어떤 마음?\'으로 시작한 길을 견주게 한다. "공을 놓친 건 사실이니 탓해도 된다"는 학생에게 "팀 다섯이 한 명을 둘러싸고 탓한다면, 힘은 어느 쪽으로 기울었나요?"라고 되묻는다.',
          task: '체육 시간 팀 패배를 두고 한 학생을 탓하는 장면에서 진행자가 되어 질문을 세 번 골라, 대화 흐름이 어떻게 달라지는지 따라가요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL({ easy: '진행자가 되어 질문을 두 번 골라 결과를 보고 근거를 고르세요.', base: '진행자가 되어 질문을 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 간 뒤, 탓으로 시작한 길의 결말과 견주는 근거까지 고르세요.' },
              '팀 패배 뒤 대화', D1, [['what', 'impact', 'next'], ['feel', 'need2', 'promise'], ['who', 'turn', 'need']], R1, ['r1', 'r2'], R1C),
            ONE('화가 난 친구에게 진행자가 할 첫마디를 고르세요.', '첫마디', { text: '시우를 탓하던 친구 하나가 "말해 봐야 소용없어!"라며 소리친다.', ask: '진행자는?', motif: 'house', choices: [
              { id: 'calm', text: '"많이 화났구나. 잠깐 숨 고르고 이야기하자"', result: '친구가 숨을 고르고 목소리를 낮춘다.', impact: [{ who: '팀', text: '감정 온도가 내려간다', tone: 1 }], ending: '감정을 알아주고 멈춤을 권했어요.' },
              { id: 'scold', text: '"소리 지르지 마!"', result: '친구가 더 크게 소리친다.', why: '맞서 소리치면 온도가 더 올라가요.' }] }, ['calm'],
              [{ id: 'q1', text: '감정을 알아주면 온도가 내려간다' }, { id: 'q2', text: '화난 사람은 이길 때까지 말하게 둔다', why: '잠깐 멈춤이 있어야 대화가 이어져요.' }], ['q1']),
            ONE('대화 끝에 정할 것으로 알맞은 길을 고르세요.', '대화 끝', { text: '팀 모두 마음을 말했고, 다음 경기 작전을 같이 짜자는 말이 나왔다.', ask: '대화를 어떻게 마칠까?', motif: 'house', choices: [
              { id: 'promise', text: '"졌을 때 한 사람 탓하지 않기"를 약속으로 정한다', result: '다음 경기 뒤 약속을 다시 떠올린다.', impact: [{ who: '팀', text: '되풀이를 막는다', tone: 1 }], ending: '앞으로의 약속까지 정했어요.' },
              { id: 'end', text: '말했으니 그냥 끝낸다', result: '다음 경기에서 또 한 명을 탓한다.', why: '앞으로 어떻게 할지 정해야 되풀이를 막아요.' }] }, ['promise'], null, null,
              { conclude: '\'누가 잘못?\'은 탓을 한 사람에게 몰고, \'무슨 일·영향·필요·앞으로\'는 관계를 되살려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '두 대화의 결말을 견줘 써요.', columns: ['대화', '결말'], cells: [['"누가 잘못?"으로 시작', ''], ['"무슨 일?·어떤 마음?"으로 시작', '']], answer: '(예) 시우 혼자 탓을 받고 흩어짐, 약속이 생기고 시우가 팀에 다시 낌' }] },
        notes: SAFE_NOTE,
      }),
      M('act.role-script', {
        title: '회복적 대화 역할극 대본', method: '회복적 대화 역할극 대본 쓰기', tool: 'story', minutes: 15,
        levels: { easy: '대본 3컷(진행자 질문 셋)의 빈칸에 말 카드를 넣고, 넣으면 바로 맞는지 알려 준다.', base: '대본 6컷(진행자·두 당사자)의 빈칸에 말 카드를 넣는다(함정 카드가 섞인다).', challenge: '셋째 문항에서 합의가 안 될 때의 진행자 대사까지 넣는다.' },
        activity: {
          title: '회복적 대화 역할극 대본', tool: 'story',
          teacher: '"모둠 과제를 안 한 라온과 혼자 다 한 건우 — 진행자는 누구 편도 들지 않고 무엇을 물을까요?" 빈칸을 채운 뒤 셋이 역할을 나눠 소리 내어 읽게 한다. "무임승차한 쪽이 잘못이니 진행자가 혼내야 한다"는 학생에게 "혼난 라온이 다음 과제에서 달라질까요, 무엇이 필요하다고 말할 기회가 있으면 달라질까요?"라고 되묻는다. 잘못(과제를 안 함)은 바로잡되 사람을 깎아내리지 않는 말을 고르게 한다.',
          task: '모둠 과제 무임승차 갈등을 소재로 진행자·두 당사자가 나오는 회복적 대화 대본의 빈칸을 채우고 읽어 봐요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(FB('대본 6컷의 빈칸에 알맞은 말 카드를 넣으세요.', [['1컷 진행자: "___"', '"무슨 일이 있었는지 한 명씩 말해 줄래?"', '진행자', 'star'], ['2컷 건우: "___"', '"보고서를 나 혼자 다 했어"', '건우', 'leaf'], ['3컷 라온: "___"', '"학원 때문에 시간을 못 냈어, 미안"', '라온', 'cloud'],
              ['4컷 진행자: "___"', '"이 일로 각자 어떤 영향을 받았어?"', '진행자', 'star'], ['5컷 진행자: "___"', '"다음 과제에서 무엇이 필요할까?"', '진행자', 'star'], ['6컷 라온: "___"', '"발표 자료는 내가 맡을게"', '라온', 'sun']], ['"라온이 게으른 거네"']),
              FB('대본 3컷(진행자 질문)의 빈칸에 알맞은 말 카드를 넣으세요.', [['1컷 진행자: "___"', '"무슨 일이 있었는지 한 명씩 말해 줄래?"', '진행자', 'star'], ['2컷 진행자: "___"', '"이 일로 각자 어떤 영향을 받았어?"', '진행자', 'star'], ['3컷 진행자: "___"', '"다음 과제에서 무엇이 필요할까?"', '진행자', 'star']], [])),
            IT(PB('진행자가 쓰기 좋은 말만 골라 담으세요.', '진행자의 말', [
              { id: 'p1', text: '"한 명씩 끝까지 들을게"', ok: true }, { id: 'p2', text: '"네 말은 혼자 다 해서 지쳤다는 거구나"', ok: true },
              { id: 'p3', text: '"누가 봐도 라온 잘못이지"' }, { id: 'p4', text: '"빨리 사과하고 끝내"' }])),
            IT(FB('합의가 바로 안 될 때의 대본 빈칸에 알맞은 말 카드를 넣으세요.', [['건우: "그래도 못 믿겠어" — 진행자: "___"', '"믿기 어렵구나. 일주일 해 보고 다시 이야기할까?"', '진행자', 'star']], ['"그럼 너희 둘 다 빠져"']),
              null,
              FB('합의가 바로 안 될 때의 대본 빈칸 2개에 알맞은 말 카드를 넣으세요.', [['건우: "그래도 못 믿겠어" — 진행자: "___"', '"믿기 어렵구나. 일주일 해 보고 다시 이야기할까?"', '진행자', 'star'], ['라온: "___"', '"내가 맡은 걸 먼저 보여 줄게"', '라온', 'sun']], ['"그럼 너희 둘 다 빠져"', '"건우가 너무 예민해"']),
              { conclude: '회복적 대화 진행자는 편들지 않고 차례로 물어, 두 사람이 영향과 필요를 말하게 해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '합의가 바로 안 될 때 진행자가 할 수 있는 말을 한 문장으로 써요.' }] },
      }),
      M('act.need-mapping', {
        title: '입장과 필요 나누어 적기', method: '입장과 필요 나누어 적기', tool: 'rubric-writing', minutes: 15,
        levels: { easy: '가상 갈등 하나에서 두 인물의 겉말(입장)과 그 아래 필요를 틀로 나누어 쓴다.', base: '가상 갈등 둘에서 입장과 필요를 나누어 쓰고 기준표(입장과 필요 구별·감정 단어·판단 없음)로 점검한다.', challenge: '셋째 문항에서 서로의 필요를 함께 채우는 안을 하나 낸다.' },
        activity: {
          title: '입장과 필요 나누어 적기', tool: 'rubric-writing',
          teacher: '"\'창문 닫아!\'와 \'열어 둬!\'는 정반대 같지만, 그 아래에 있는 필요도 정반대일까요?" 겉말(입장) 아래 필요(존중·공평·안전·쉼)를 찾는 예를 칠판에 하나 보인다. "필요 같은 건 핑계"라는 학생에게 "필요를 알면 둘 다 만족하는 길이 보일까요?"라고 되묻는다. 판단하는 말(\'이기적이다\') 대신 감정 단어(\'답답했다\')를 쓰게 한다.',
          task: '가상 갈등 두 개에서 각 인물의 겉말(입장)과 그 아래 필요를 나누어 쓰고, 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(RW('갈등 1(창문): 두 인물의 입장과 필요를 나누어 쓰세요.', { topic: '가상 갈등: 쉬는 시간 유나는 "창문 닫아, 추워"라고, 태오는 "열어 둬, 답답해"라고 한다. 두 사람의 입장과 그 아래 필요를 두세 문장으로 쓰세요.', min: 30, max: 180, s: [2, 3], title: '갈등 1 입장과 필요' }, ['입장과 필요를 나누어 썼다', '감정 단어를 썼다', '판단하는 말을 쓰지 않았다'], [['필요', '바라', '원하']]),
              RW('틀을 채워 갈등 1의 입장과 필요를 쓰세요.', { topic: '창문 갈등의 입장과 필요를 쓰세요.', min: 20, max: 150, s: [2, 3], starter: '유나의 입장은 ___ 이고, 필요는 ___ 이다. 태오의 입장은 ___ 이고, 필요는 ___ 이다.' }, ['입장과 필요를 나누어 썼다', '판단하는 말을 쓰지 않았다'])),
            IT(RW('갈등 2(줄 서기): 두 인물의 입장과 필요를 나누어 쓰세요.', { topic: '가상 갈등: 급식 줄에서 시우는 "새치기하지 마"라고, 라온은 "친구가 자리 맡아 줬어"라고 한다. 두 사람의 입장과 필요를 두세 문장으로 쓰세요.', min: 30, max: 180, s: [2, 3], title: '갈등 2 입장과 필요' }, ['입장과 필요를 나누어 썼다', '감정 단어를 썼다', '판단하는 말을 쓰지 않았다'], [['필요', '바라', '원하']]),
              null,
              RW('갈등 2에서 두 사람의 필요를 함께 채우는 안을 쓰세요.', { topic: '급식 줄 갈등에서 시우의 필요(공평)와 라온의 필요(친구와 함께)를 함께 채우는 안을 두세 문장으로 쓰세요.', min: 35, max: 200, s: [2, 3], title: '함께 채우는 안' }, ['두 사람의 필요를 모두 담았다', '실제로 해 볼 수 있다', '판단하는 말을 쓰지 않았다'], [['필요', '바라', '원하']]),
              { conclude: '겉말(입장)은 부딪혀도 그 아래 필요(존중·공평·안전)를 알면 함께 채울 길이 보여요.' }),
            IT(RW('두 갈등에서 찾은 필요를 한 문장으로 정리하세요.', { topic: '두 갈등에서 찾은 필요가 무엇이었는지, 입장과 필요가 어떻게 다른지 한두 문장으로 정리하세요.', min: 20, max: 140, s: [1, 2], title: '정리' }, ['입장과 필요의 차이를 썼다', '판단하는 말을 쓰지 않았다'])),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '가상 갈등의 입장과 필요를 나누어 써요.', columns: ['인물', '입장(겉말)', '필요'], cells: [['유나', '창문 닫아', ''], ['태오', '창문 열어 둬', '']], answer: '(예) 따뜻하게 지내기(안전), 답답하지 않기(쉼)' }] },
      }),

      // ---- 정리 ----
      M('wrap.question-poster', {
        title: '회복적 질문 카드 만들기', method: '회복적 질문 카드 만들기', tool: 'collage', minutes: 7,
        levels: { easy: '질문 둘을 담을 카드 바탕을 조각 3개 이상으로 꾸민다(질문 글은 활동지).', base: '질문 넷을 담을 카드 바탕을 조각 4개 이상(질문마다 아이콘 자리 하나)으로 꾸미고 점검한다.', challenge: '카드 뒷면에 넣을 감정 온도 낮추는 방법을 활동지에 쓰고, 점검 항목 하나를 더 표시한다.' },
        wrap: {
          teacher: '"다투고 있을 때 책상 위 카드 한 장을 보고 첫 질문을 떠올릴 수 있으려면, 카드에 무엇이 꼭 있어야 할까요?" 질문 넷마다 아이콘 자리를 하나씩 두게 하고 질문 글은 활동지에 쓰게 한다(교구에는 글자를 넣을 수 없다). \'누가 잘못?\'을 카드에 넣고 싶은 학생에게 오늘 대화 결말을 떠올리게 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'collage', options: { maxPieces: 12 }, prompt: '회복적 질문 넷의 아이콘 자리를 조각으로 꾸미고 점검해요(질문 글은 활동지에 써요).', target: { selfCheck: ['질문마다 아이콘 자리를 하나씩 두었다', '질문 넷을 활동지에 차례대로 썼다', '쓸 때(다툴 때)를 적었다'], minPieces: 4 }, difficulty: 0.2 },
              { prompt: '질문 둘의 아이콘 자리를 조각 3개 이상으로 꾸미고 점검해요.', target: { selfCheck: ['질문마다 아이콘 자리를 두었다', '질문 둘을 활동지에 썼다'], minPieces: 3 } },
              { prompt: '질문 넷의 아이콘 자리를 꾸미고, 뒷면 문구까지 점검해요.', target: { selfCheck: ['질문마다 아이콘 자리를 하나씩 두었다', '질문 넷을 활동지에 차례대로 썼다', '쓸 때(다툴 때)를 적었다', '뒷면에 감정 온도 낮추는 방법을 적었다'], minPieces: 4 } }),
            { type: 'choice', prompt: '회복적 질문의 첫 질문으로 알맞은 것은?', options: ['무슨 일이 있었나?', '누가 잘못했나?', '누가 먼저 사과할래?'], answer: 0, difficulty: 0.15, explain: '무슨 일이 있었는지부터 서로의 이야기를 들어요.' },
          ],
        },
        worksheet: {
          title: '회복적 질문 카드',
          items: [
            { type: 'table', prompt: '카드에 넣을 질문 넷을 써요.', columns: ['차례', '질문'], cells: [['1', ''], ['2', ''], ['3', ''], ['4', '']], answer: '무슨 일이 있었나, 누가 어떤 영향을 받았나, 무엇이 필요한가, 앞으로 어떻게 할까' },
            { type: 'short', prompt: '카드 뒷면에 넣을 감정 온도 낮추는 방법 하나를 써요.' },
          ],
        },
        notes: '교구는 글자를 넣지 못해 카드 바탕(아이콘 자리)만 꾸미고 질문 글은 활동지에 쓰게 했다.',
      }),
      M('wrap.self-check', {
        title: '오늘 연습 자기 점검 글', method: '오늘 연습 자기 점검 글 쓰기', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '"화가 날 때 나는 ~ 하겠다" 틀로 두 문장을 쓰고 기준 둘을 점검한다.', base: '세 문장으로 쓰고 기준표(신호 알아차리기·멈춤 방법·질문 하나)로 점검한다.', challenge: '그래도 해결되지 않으면 도움 청할 사람(역할)을 한 문장 더해 네 문장으로 쓴다.' },
        wrap: {
          teacher: '"화가 날 때 내 몸이 먼저 보내는 신호는 무엇인가요? 주먹, 얼굴 열, 빨라지는 말?" 신호 → 멈춤 → 질문 하나의 차례로 쓰게 한다. "나는 화 안 내"라는 학생에게는 \'속상할 때\'로 바꿔 써도 된다고 말한다. 실제 다툰 친구 이름은 쓰지 않는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'rubric-writing', options: { topic: '"화가 날 때 나는 ~ 하겠다"를 세 문장으로 쓰세요(신호 알아차리기·멈춤 방법·물어볼 질문 하나).', minChars: 35, maxChars: 200, minSentences: 3, maxSentences: 4, starter: '화가 날 때 나는 ___ 하는 신호를 알아차리겠다.', title: '나의 멈춤 계획' },
              prompt: '나의 멈춤 계획을 세 문장으로 쓰고 기준표에 표시해요.', target: { selfCheck: ['신호 알아차리기를 썼다', '멈춤 방법을 썼다', '물어볼 질문 하나를 썼다'] }, difficulty: 0.25 },
              { prompt: '나의 멈춤 계획을 두 문장으로 쓰고 기준표에 표시해요.', toolOptions: { minChars: 20, minSentences: 2, maxSentences: 3 }, target: { selfCheck: ['신호 알아차리기를 썼다', '멈춤 방법을 썼다'] } },
              { prompt: '멈춤 계획 세 문장에 도움 청할 사람(역할) 한 문장을 더해 쓰고 표시해요.', toolOptions: { minChars: 45, maxChars: 240, minSentences: 4, maxSentences: 5 }, target: { selfCheck: ['신호 알아차리기를 썼다', '멈춤 방법을 썼다', '물어볼 질문 하나를 썼다', '도움 청할 사람을 썼다'] } }),
            { type: 'choice', prompt: '"화가 나면 바로 말해야 풀린다"에 대한 생각으로 알맞은 것은?', options: ['잠깐 멈추고 숨을 고른 뒤 말하면 대화가 풀리기 쉽다', '화가 날수록 크게 말해야 이긴다', '화가 나면 아무 말도 하지 않는다'], answer: 0, difficulty: 0.15, explain: '멈춤은 참기가 아니라 말할 준비예요.' },
          ],
        },
        worksheet: {
          title: '나의 멈춤 계획',
          items: [
            { type: 'blank', prompt: '틀을 채워 써요.', text: '화가 날 때 나는 ___ 신호를 알아차리고, ___ 하며 멈추고, "___"라고 묻겠다.', answer: '(예) 얼굴이 뜨거워지는, 열 박 숨 고르기, 무슨 일이 있었어?' },
            { type: 'short', prompt: '그래도 해결되지 않을 때 도움을 청할 사람을 역할로 써요(예: 담임 선생님).' },
          ],
        },
      }),
    );
  }

  // ==== 7학년 · 친구가 털어놓았을 때와 학교 안 도움 경로 (bully.m.g7-help-route) ====
  {
    const M = MK('g7-help-route', [7]);
    const ANSW = ['듣는 말', '막는 말'];
    const REPLY = [
      { id: 'l1', text: '"얘기해 줘서 고마워"', to: '듣는 말' }, { id: 'b1', text: '"그냥 무시해"', to: '막는 말' },
      { id: 'l2', text: '"그때 어떤 기분이었어?"', to: '듣는 말' }, { id: 'b2', text: '"네가 뭘 잘못한 거 아냐?"', to: '막는 말' },
      { id: 'l3', text: '"네 잘못 아니야"', to: '듣는 말' }, { id: 'b3', text: '"다들 그 정도는 겪어"', to: '막는 말' },
    ];
    const SCHOOL = { grid: [6, 4], title: '가상의 우리 중학교 배치도', places: [
      { name: '1학년 3반 교실(담임 선생님)', icon: 'school', at: [0, 0] }, { name: 'Wee클래스(상담 선생님)', icon: 'house', at: [3, 0] },
      { name: '보건실', icon: 'hospital', at: [5, 1] }, { name: '교무실', icon: 'office', at: [2, 2] },
      { name: '도서관', icon: 'library', at: [5, 3] }, { name: '매점', icon: 'market', at: [0, 3] },
    ] };
    const SCHOOL3 = Object.assign({}, SCHOOL, { places: SCHOOL.places.filter((p) => !['보건실', '교무실', '매점'].includes(p.name)) });
    const D1 = { text: '하교길에 서윤이 "요즘 학원 친구들이 나만 빼고 단톡방을 만들었어. 근데 아무한테도 말하지 마"라고 털어놓는다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'keep', text: '"알았어, 비밀 지킬게"라고만 한다', result: '서윤이 안심한 듯하지만 일은 그대로다.', impact: [{ who: '서윤', text: '혼자 견딘다', tone: -1 }], end: '비밀만 지키기로 했어요.',
        next: { text: '일주일 뒤 서윤이 "이제 학교에서도 그 애들이 나를 피해"라고 한다.', ask: '이제 어떻게 할까?', choices: [
          { id: 'go', text: '"비밀보다 네가 더 중요해. 같이 상담 선생님께 가자"', result: '서윤이 망설이다 고개를 끄덕인다.', impact: [{ who: '서윤', text: '도움을 받기 시작한다', tone: 1 }] },
          { id: 'still', text: '약속했으니 계속 모른 척한다', result: '서윤이 점점 말이 없어진다.', impact: [{ who: '서윤', text: '더 외로워진다', tone: -1 }], why: '괴롭힘처럼 안전이 걸린 일은 비밀보다 안전이 먼저예요.' }] } },
      { id: 'tellalone', text: '서윤 몰래 바로 담임 선생님께 알린다', result: '선생님이 살피기 시작하지만 서윤은 놀라 서운해한다.', impact: [{ who: '서윤', text: '보호는 받지만 놀란다', tone: 0 }], end: '어른에게 알렸지만 서윤과 먼저 이야기하지 않았어요.',
        next: { text: '서윤이 "왜 말했어?"라며 서운해한다.', choices: [
          { id: 'explain', text: '"네가 걱정돼서야. 앞으로는 같이 가자"', result: '서윤이 마음을 조금 연다.', impact: [{ who: '서윤', text: '믿음을 되찾는다', tone: 1 }] },
          { id: 'sorry', text: '"미안, 다시는 안 그럴게"라며 없던 일로 한다', result: '서윤이 다음부터 아무 말도 하지 않는다.', why: '알린 것은 잘한 일이에요. 사과보다 함께 가자고 말해요.' }] } },
      { id: 'together', text: '끝까지 들은 뒤 "혼자 두기 싫어. 같이 어른께 가자"라고 한다', result: '서윤이 "더 커질까 봐 무서워"라고 한다.', impact: [{ who: '서윤', text: '혼자가 아니라고 느낀다', tone: 1 }], end: '끝까지 듣고 함께 가자고 했어요.',
        next: { text: '서윤이 "더 커질까 봐 무서워"라고 한다.', choices: [
          { id: 'reassure', text: '"상담 선생님은 네 이야기부터 들어 주셔. 내가 옆에 있을게"', result: '둘이 함께 Wee클래스에 간다.', impact: [{ who: '서윤', text: '보호와 상담을 받는다', tone: 1 }] },
          { id: 'wait', text: '"그럼 더 심해지면 말하자"', result: '괴롭힘이 계속된다.', impact: [{ who: '서윤', text: '혼자 견딘다', tone: -1 }], why: '심해지기 전에 어른과 잇는 것이 안전해요.' }] } }] };
    const R0 = [{ id: 'k1', text: '괴롭힘은 비밀보다 안전이 먼저다' }, { id: 'k2', text: '함께 가면 두려움이 줄어든다' }];

    ALL.push(
      // ---- 도입 ----
      M('intro.listen-or-advise', {
        title: '듣는 말과 막는 말 가리기', method: '듣는 말과 막는 말 가리기', tool: 'wordcards', minutes: 6,
        levels: { easy: '대답 카드 4장을 교사와 함께 듣는 말·막는 말로 가른다.', base: '시연 판에서 대답 카드 6장이 듣는 말·막는 말로 나뉘는 모습을 보고 까닭을 말한다.', challenge: '막는 말 하나를 듣는 말로 고쳐 말한다.' },
        intro: {
          teacher: '"친구가 \'요즘 단톡방에서 나만 빼고 얘기해\'라고 털어놓았어요. \'그냥 무시해\'는 도움이 되는 말일까요?" 시연 단추로 대답 카드가 듣는 말·막는 말로 나뉘는 모습을 보인다. "무시하라는 건 좋은 조언"이라는 말이 나오면 "그 말을 들은 친구는 다음에 또 털어놓고 싶을까요?"라고 되묻는다. 오늘은 끝까지 듣고, 안전이 걸린 일은 어른과 잇는 법을 익힌다.',
          student: '친구가 힘든 일을 털어놓은 가상 장면에서 대답 카드를 듣는 말과 막는 말로 나누고, 막는 말을 고쳐 봐요.',
          demo: { tool: 'wordcards', options: { mode: 'sort', slots: ANSW, cards: strip(REPLY) }, sequence: [{ sort: { '듣는 말': ['l1', 'l2', 'l3'], '막는 말': ['b1', 'b2', 'b3'] } }] },
          art: { draw: 'a paper-cut pair of students sitting on a bench, one speaking softly and the other leaning in to listen, paper speech bubbles above', banner: '어떤 말이 마음을 열까?', extra: [{ motif: 'heart', x: 300, y: 96 }] },
        },
        notes: SAFE_NOTE,
      }),
      M('intro.secret-dilemma', {
        title: '"아무한테도 말하지 마"라고 할 때', method: '"아무한테도 말하지 마" 갈림길 고르기', tool: 'dilemma', minutes: 6,
        levels: { easy: '시연 판 첫 장면에서 지키기·어른에게 알리기·함께 가기 두 갈래 결과를 함께 본다.', base: '시연 판의 둘째 장면(일주일 뒤)까지 따라가 결과를 본다.', challenge: '친구 마음을 지키면서 안전을 앞세우는 말을 한 문장 지어 말한다.' },
        intro: {
          teacher: '"\'아무한테도 말하지 마\'라고 했는데 어른에게 말하면 배신일까요?" 시연 단추로 \'함께 가자\'를 고른 길이 일주일 뒤 어떻게 되는지 보인다. "비밀을 지켜 주는 게 진짜 친구"라는 말이 나오면 "좋아하는 사람 이야기 같은 비밀과, 따돌림당하는 비밀은 같은 비밀일까요?"라고 되묻는다. 혼자 알리기보다 친구와 함께 가는 길이 있다는 것을 보인다.',
          student: '친구가 비밀을 지켜 달라며 괴롭힘을 털어놓은 가상 장면에서 길을 고르고, 일주일 뒤 결과를 봐요.',
          demo: DEMO_DIL('비밀과 안전', D1, [['together', 'reassure']], R0),
          art: { draw: 'a paper-cut friend whispering a secret with a finger on lips, a path behind them leading to a school counseling room door', banner: '비밀일까, 안전일까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: SAFE_NOTE,
      }),

      // ---- 활동 ----
      M('act.help-map', {
        title: '학교 안팎 도움 지도', method: '학교 안팎 도움 지도 만들기', tool: 'map', minutes: 15,
        levels: { easy: '세 곳(담임 교실·Wee클래스·도서관)만 있는 배치도에서 이름을 보며 도움 받을 곳을 짚는다.', base: '다섯 곳 넘는 배치도에서 상황마다 도움 받을 곳을 짚고, 그곳에서 할 수 있는 일을 고른다.', challenge: '학교 밖·방과 후 경로는 활동지에 학교폭력 신고·상담 창구와 보호자로 적고, 셋째 문항에서 고르는 보기까지 답한다.' },
        activity: {
          title: '학교 안팎 도움 지도', tool: 'map',
          teacher: '"친구가 괴롭힘을 털어놓았을 때, 우리 학교에서 같이 찾아갈 수 있는 곳은 어디어디일까요?" 가상 배치도에 핀을 꽂을 때마다 \'거기서 무엇을 할 수 있나\'를 말하게 한다. "선생님께 말하면 일이 커진다"는 학생에게 "상담 선생님은 먼저 이야기를 들어 주는 분이에요. 혼자 알고 있을 때와 무엇이 다를까요?"라고 되묻는다. 학교 밖 창구 번호는 판서한 것을 활동지에 옮겨 적게 한다.',
          task: '가상 학교 배치도에서 상황마다 도움 받을 곳에 핀을 꽂고, 그곳에서 할 수 있는 일을 골라요. 학교 밖 창구는 활동지에 적어요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(PIN('친구가 털어놓은 괴롭힘을 이야기를 들어 주며 상담해 줄 곳에 핀을 꽂으세요.', SCHOOL, { place: 'Wee클래스(상담 선생님)' }),
              PIN('세 곳 가운데 괴롭힘을 상담해 줄 곳에 핀을 꽂으세요.', SCHOOL3, { place: 'Wee클래스(상담 선생님)' })),
            IT(PIN('괴롭힘 때문에 다쳤거나 몸이 아플 때 먼저 갈 곳에 핀을 꽂고, 할 수 있는 일을 고르세요.', Object.assign({}, SCHOOL, { ask: { q: '이곳에서 할 수 있는 일은?', choices: ['다친 곳을 살피고 처치받는다', '괴롭힌 친구를 혼내 준다', '숙제를 낸다'] } }), { place: '보건실', pick: 0 }),
              PIN('세 곳 가운데 우리 반 일을 가장 먼저 의논할 선생님이 있는 곳에 핀을 꽂으세요.', SCHOOL3, { place: '1학년 3반 교실(담임 선생님)' })),
            IT(PIN('쉬는 시간에 담임 선생님이 교실에 안 계실 때 찾아갈 곳에 핀을 꽂으세요.', SCHOOL, { place: '교무실' }),
              null,
              PIN('쉬는 시간에 담임 선생님이 안 계실 때 찾아갈 곳에 핀을 꽂고, 방과 후·주말에 닿을 길을 고르세요.', Object.assign({}, SCHOOL, { ask: { q: '방과 후·주말에 닿을 수 있는 길은?', choices: [`보호자와 ${HELP}`, '다음 주 등교할 때까지 기다리기', '단톡방에 공개로 올리기'] } }), { place: '교무실', pick: 0 }),
              { conclude: '학교 안에는 담임·상담 선생님(Wee클래스)·보건실·교무실이, 학교 밖에는 보호자와 학교폭력 신고·상담 창구가 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '도움 받을 곳과 할 수 있는 일을 써요.', columns: ['곳', '할 수 있는 일'], cells: [['담임 선생님', ''], ['Wee클래스', ''], ['보건실', ''], [HELP, '']], answer: '(예) 반 일 의논, 이야기 듣고 상담, 다친 곳 처치, 방과 후에도 신고·상담(번호는 선생님이 알려 준 것)' }] },
        notes: '배치도 장소는 가상 학교다. 교사가 자기 학교 배치에 맞춰 설명한다. ' + LINE_NOTE,
      }),
      M('act.listen-roleplay', {
        title: '끝까지 듣기 역할극', method: '끝까지 듣기 역할극 대본 쓰기', tool: 'story', minutes: 15,
        levels: { easy: '대본 2컷 빈칸에 듣는 친구의 말 카드를 넣고, 넣으면 바로 맞는지 알려 준다.', base: '대본 4컷(판단하지 않기·되물어 확인하기·함께 가자고 말하기)의 빈칸을 채운다(함정 카드가 섞인다).', challenge: '셋째 문항에서 친구가 망설일 때의 대사까지 넣는다.' },
        activity: {
          title: '끝까지 듣기 역할극', tool: 'story',
          teacher: '"친구가 이야기하는 중에 \'아, 그건 이렇게 해\'라고 끼어들면 어떻게 될까요?" 대본을 채운 뒤 짝과 털어놓는 친구·듣는 친구 역할을 바꿔 읽게 한다. "조언을 해 줘야 도움이 된다"는 학생에게 "끝까지 들어 준 뒤의 한마디와 중간에 끊고 한 조언, 어느 쪽이 친구를 어른에게 데려갈까요?"라고 되묻는다. 대본 속 고민은 가상 인물의 것이고 자기 이야기는 쓰지 않는다.',
          task: '털어놓는 친구와 듣는 친구의 대본 빈칸을 판단하지 않기·되물어 확인하기·함께 어른께 가자고 말하기로 채워요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(FB('끝까지 듣기 대본 4컷의 빈칸에 알맞은 말 카드를 넣으세요.', [['1컷 지율: "요즘 나만 빼고 다들 모여" — 나: "___"', '"응, 천천히 말해 줘"', '나', 'star'], ['2컷 나: "___"', '"네 말은 일부러 너만 뺀다는 거지?"', '나', 'star'],
              ['3컷 지율: "내가 이상해서 그런가 봐" — 나: "___"', '"아니야, 네 잘못 아니야"', '나', 'star'], ['4컷 나: "___"', '"혼자 두기 싫어. 같이 담임 선생님께 가자"', '나', 'star']], ['"그건 네가 먼저 다가가면 돼"']),
              FB('끝까지 듣기 대본 2컷의 빈칸에 알맞은 말 카드를 넣으세요.', [['1컷 지율: "요즘 나만 빼고 다들 모여" — 나: "___"', '"응, 천천히 말해 줘"', '나', 'star'], ['2컷 나: "___"', '"혼자 두기 싫어. 같이 담임 선생님께 가자"', '나', 'star']], [])),
            IT(PB('끝까지 듣는 친구의 말만 골라 담으세요.', '끝까지 듣는 말', [
              { id: 'p1', text: '"그다음엔 어떻게 됐어?"', ok: true }, { id: 'p2', text: '"그래서 많이 힘들었구나"', ok: true },
              { id: 'p3', text: '"그건 별일 아니야"' }, { id: 'p4', text: '"나도 그런 적 있는데 말이야"' }])),
            IT(FB('친구가 어른에게 가기를 망설이는 장면의 빈칸에 알맞은 말을 넣으세요.', [['지율: "선생님이 일을 크게 만들면 어떡해?" — 나: "___"', '"먼저 네 이야기를 들어 주실 거야. 내가 옆에 있을게"', '나', 'star']], ['"그럼 그냥 참아"']),
              null,
              FB('친구가 망설이는 장면의 빈칸 2개에 알맞은 말을 넣으세요.', [['지율: "선생님이 일을 크게 만들면 어떡해?" — 나: "___"', '"먼저 네 이야기를 들어 주실 거야. 내가 옆에 있을게"', '나', 'star'], ['지율: "오늘은 자신 없어" — 나: "___"', '"그럼 내일 아침에 같이 가자. 약속해"', '나', 'star']], ['"그럼 그냥 참아"', '"내가 대신 다 말할게, 넌 빠져"']),
              { conclude: '끝까지 듣기는 판단하지 않고, 되물어 확인하고, 함께 어른께 가자고 말하는 것이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '친구가 털어놓았을 때 내가 처음 할 한마디를 써요.' }] },
        notes: SAFE_NOTE,
      }),
      M('act.route-blocks', {
        title: '알리는 차례 블록 짜기', method: '알리는 차례 블록 짜기', tool: 'block-coding', minutes: 15,
        levels: { easy: '곧은 길(블록 3개 안팎)로 별 하나(안전 확인)를 지나 깃발(상담 연결)에 닿는다.', base: '꺾인 길로 별 셋(안전 확인·함께 갈 어른 정하기·기록 남기기)을 모두 지나 깃발에 닿는다.', challenge: '조건 블록(막히면 돌기)을 넣어, 한 길이 막혀도(위급하면) 방향을 바꿔 바로 어른에게 가는 갈래를 만든다.' },
        activity: {
          title: '알리는 차례 블록 짜기', tool: 'block-coding',
          teacher: '"듣기 → 안전 확인 → 함께 갈 어른 정하기 → 기록 남기기 → 상담 연결. 이 길을 거북이로 걸어 볼까요?" 판의 출발은 \'듣기\', 별은 거쳐야 할 단계, 깃발은 \'상담 연결\', 바위는 \'혼자 해결하려 하기\'라고 먼저 읽어 준다. "기록은 나중에 해도 된다"는 학생에게 "기억이 흐려진 뒤에는 어른이 무엇을 보고 도울 수 있을까요?"라고 되묻는다. 위급할 때는 차례를 건너뛰고 바로 어른에게 간다는 갈래를 짚는다.',
          task: '털어놓은 친구를 어른과 잇는 차례를 길 찾기 판으로 짜요. 별(거칠 단계)을 모두 지나 깃발(상담 연결)에 닿고, 바위(혼자 해결하려 하기)는 피해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(ROUTE('별 셋(안전 확인·함께 갈 어른 정하기·기록 남기기)을 모두 지나 깃발(상담 연결)에 닿게 블록을 이으세요.', { cols: 5, rows: 3, start: { x: 0, y: 0, dir: 'E' }, goal: { x: 4, y: 2 }, stars: [[1, 0], [2, 1], [3, 2]], rocks: [[2, 0], [1, 2]] }, { stars: true }),
              ROUTE('별 하나(안전 확인)를 지나 깃발(상담 연결)에 닿게 블록을 이으세요.', { cols: 4, rows: 2, start: { x: 0, y: 0, dir: 'E' }, goal: { x: 3, y: 0 }, stars: [[1, 0]], rocks: [] }, { stars: true, maxBlocks: 3 })),
            IT(ROUTE('바위(혼자 해결하려 하기)를 돌아 별(기록 남기기)을 지나 깃발에 닿으세요.', { cols: 5, rows: 3, start: { x: 0, y: 1, dir: 'E' }, goal: { x: 4, y: 1 }, stars: [[2, 0]], rocks: [[2, 1]] }, { stars: true })),
            IT(ROUTE('반복 블록으로 같은 걸음을 줄여 별 둘을 지나 깃발에 닿으세요.', { cols: 6, rows: 2, start: { x: 0, y: 0, dir: 'E' }, goal: { x: 5, y: 0 }, stars: [[2, 0], [4, 0]], rocks: [] }, { stars: true, use: ['rep'], maxBlocks: 3 }),
              null,
              ROUTE('조건 블록(막히면 오른쪽으로 돌기)을 반복 안에 넣어, 막혀도 방향을 바꿔 깃발(바로 어른에게)에 닿으세요.', { cols: 4, rows: 4, start: { x: 0, y: 0, dir: 'E' }, goal: { x: 3, y: 3 }, stars: [[3, 1]], rocks: [], blocks: ['fwd', 'left', 'right', 'rep', 'if'] }, { stars: true, use: ['if'] }),
              { conclude: '털어놓은 친구를 도울 때는 듣기 → 안전 확인 → 함께 갈 어른 정하기 → 기록 남기기 → 상담 연결. 위급하면 바로 어른에게 가요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '알리는 차례를 써요.', columns: ['차례', '할 일'], cells: [['1', '듣기'], ['2', ''], ['3', ''], ['4', ''], ['5', '상담 연결']], answer: '안전 확인, 함께 갈 어른 정하기, 기록 남기기' }] },
        notes: '교구는 글 블록을 잇지 못한다 — 길 찾기 판(별 = 안전 확인·어른 정하기·기록 남기기, 깃발 = 상담 연결, 바위 = 혼자 해결하려 하기)으로 바꾸고 단계 이름·차례는 활동지에 적게 했다. 조건 갈래는 if 블록(막히면 돌기)이다.',
      }),

      // ---- 정리 ----
      M('wrap.help-card', {
        title: '지갑 속 도움 카드', method: '지갑 속 도움 카드 만들기', tool: 'collage', minutes: 7,
        levels: { easy: '두 줄(담임 선생님·상담 선생님) 도움 카드 바탕을 조각 3개 이상으로 꾸민다(글은 활동지).', base: '네 줄(담임·상담 선생님·보호자·학교폭력 신고·상담 창구) 카드 바탕을 줄마다 아이콘 조각 하나씩 4개 이상으로 꾸미고 점검한다.', challenge: '친구에게 건넬 한 문장을 활동지에 덧붙이고 점검 항목 하나를 더 표시한다.' },
        wrap: {
          teacher: '"급할 때 지갑에서 꺼내 볼 카드라면, 이름이 아니라 무엇을 적어야 할까요?" 사람 이름 대신 역할(담임 선생님·상담 선생님·보호자)과 창구를 적게 하고, 창구 번호는 판서한 것을 옮기게 한다(교구에는 글자를 넣을 수 없어 글은 활동지에 쓴다). 친구 이름·전화번호 같은 개인정보는 쓰지 않는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'collage', options: { maxPieces: 12, shapes: ['circle', 'square', 'rect', 'heart', 'star'] }, prompt: '도움 카드 네 줄의 아이콘 자리를 조각으로 꾸미고 점검해요(글은 활동지에 써요).', target: { selfCheck: ['줄마다 아이콘 자리를 하나씩 두었다', '이름이 아니라 역할로 적었다', '창구 번호를 활동지에 옮겨 적었다'], minPieces: 4 }, difficulty: 0.2 },
              { prompt: '도움 카드 두 줄의 아이콘 자리를 조각 3개 이상으로 꾸미고 점검해요.', target: { selfCheck: ['이름이 아니라 역할로 적었다'], minPieces: 3 } },
              { prompt: '도움 카드 네 줄을 꾸미고, 친구에게 건넬 한 문장까지 점검해요.', target: { selfCheck: ['줄마다 아이콘 자리를 하나씩 두었다', '이름이 아니라 역할로 적었다', '창구 번호를 활동지에 옮겨 적었다', '친구에게 건넬 한 문장을 썼다'], minPieces: 4 } }),
            { type: 'choice', prompt: '친구가 괴롭힘을 털어놓으며 "비밀이야"라고 할 때 알맞은 생각은?', options: ['안전이 걸린 일은 비밀보다 안전이 먼저라서 함께 어른께 간다', '약속했으니 끝까지 아무에게도 말하지 않는다', '단톡방에 올려 모두에게 알린다'], answer: 0, difficulty: 0.15, explain: '친구 마음을 지키며 함께 가는 길을 골라요.' },
          ],
        },
        worksheet: {
          title: '지갑 속 도움 카드',
          items: [
            { type: 'table', prompt: '도움 카드에 들어갈 네 줄을 써요(이름이 아니라 역할로).', columns: ['줄', '누구·어디'], cells: [['1', '담임 선생님'], ['2', ''], ['3', ''], ['4', '']], answer: '상담 선생님(Wee클래스), 보호자, 학교폭력 신고·상담 창구(선생님이 알려 준 번호)' },
            { type: 'short', prompt: '힘든 친구에게 건넬 한 문장을 써요.' },
          ],
        },
        notes: '교구는 글자를 넣지 못해 카드 바탕만 꾸미고 글은 활동지에 쓰게 했다. ' + LINE_NOTE,
      }),
      M('wrap.plan-writing', {
        title: '중학교 첫해 평화 계획', method: '중학교 첫해 평화 계획 세 문장 쓰기', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '틀을 채워 두 문장(기준 하나·행동 하나)을 쓴다.', base: '기준·행동·도움 경로를 한 문장씩 담아 세 문장으로 쓰고 기준표로 점검한다.', challenge: '실천을 확인할 날짜(예: 한 달 뒤)를 덧붙여 네 문장으로 쓴다.' },
        wrap: {
          teacher: '"1학년 동안 배운 것 가운데 내년의 나에게 꼭 남기고 싶은 세 가지는?" 세 기준(힘·되풀이·피해), 조력자의 작은 행동, 도움 경로에서 하나씩 골라 문장으로 쓰게 한다. "평화롭게 지내겠다"처럼 막연하게 쓰는 학생에게 "그 다짐을 내일 교실에서 어떤 행동으로 볼 수 있을까요?"라고 되묻는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'rubric-writing', options: { topic: '중학교 첫해에 배운 기준·행동·도움 경로를 한 문장씩 담아 나의 평화 계획을 세 문장으로 쓰세요.', minChars: 40, maxChars: 220, minSentences: 3, maxSentences: 4, title: '나의 평화 계획' },
              prompt: '나의 평화 계획을 세 문장으로 쓰고 기준표에 표시해요.', target: { selfCheck: ['판단 기준을 한 문장 넣었다', '할 행동을 한 문장 넣었다', '도움 경로를 한 문장 넣었다'] }, difficulty: 0.25 },
              { prompt: '틀을 채워 평화 계획 두 문장을 쓰고 표시해요.', toolOptions: { minChars: 20, minSentences: 2, maxSentences: 3, starter: '힘이 기울고 되풀이되면 폭력이다. 그런 일을 보면 나는 ___ 하겠다.' }, target: { selfCheck: ['판단 기준을 넣었다', '할 행동을 넣었다'] } },
              { prompt: '평화 계획 세 문장에 실천 확인 날짜를 덧붙여 쓰고 표시해요.', toolOptions: { minChars: 50, maxChars: 260, minSentences: 4, maxSentences: 5 }, target: { selfCheck: ['판단 기준을 한 문장 넣었다', '할 행동을 한 문장 넣었다', '도움 경로를 한 문장 넣었다', '실천 확인 날짜를 정했다'] } }),
            { type: 'choice', prompt: '평화 계획의 \'도움 경로\' 문장으로 알맞은 것은?', options: ['혼자 해결이 안 되면 담임·상담 선생님께 함께 간다', '무슨 일이 있어도 혼자 해결한다', '단톡방에서 공개로 따진다'], answer: 0, difficulty: 0.15, explain: '도움 경로는 믿을 어른과 창구로 잇는 길이에요.' },
          ],
        },
        worksheet: {
          title: '나의 평화 계획',
          items: [
            { type: 'short', prompt: '나의 평화 계획을 세 문장으로 옮겨 써요(기준·행동·도움 경로).' },
            { type: 'blank', prompt: '실천 확인 날짜를 정해요.', text: '___ 에 내 계획을 다시 읽고 지켰는지 점검하겠다.', answer: '(예) 한 달 뒤' },
          ],
        },
      }),
    );
  }

  // ==== 8학년 · 사칭 계정과 계정 도용 (bully.m.g8-fake-account) — 사이버폭력 ====
  {
    const M = MK('g8-fake-account', [8]);
    const PROF = [
      { id: 'f1', text: '가입 3일, 게시물 0개, 친구 신청만 잔뜩', to: '사칭 의심' }, { id: 'r1', text: '가입 2년, 게시물 120개, 친구들과 댓글', to: '진짜일 가능성' },
      { id: 'f2', text: '사진은 같은데 이름 철자가 한 글자 다름', to: '사칭 의심' }, { id: 'r2', text: '학교 행사 사진이 오래전부터 쌓여 있음', to: '진짜일 가능성' },
      { id: 'f3', text: '첫 글이 "나 원래 이상한 애임"', to: '사칭 의심' }, { id: 'r3', text: '친구들이 아는 일상 글이 꾸준함', to: '진짜일 가능성' },
    ];
    const DAY = [
      { id: 'd1', text: '아침: 소율 이름으로 새 계정이 생겼다' }, { id: 'd2', text: '점심: 그 계정에 이상한 글이 올라왔다' },
      { id: 'd3', text: '오후: 반 친구들이 그 계정을 팔로우했다' }, { id: 'd4', text: '저녁: 캡처가 반 단톡방에 돌았다' },
      { id: 'd5', text: '밤: 소율이 친구들에게 오해를 받았다' },
    ];
    const D1 = { text: '예준이 "소율 이름으로 계정 만들었는데 웃기지 않아?"라며 가짜 계정을 보여 주고 팔로우하라고 한다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'follow', text: '웃으며 팔로우한다', result: '팔로워가 늘어 가짜 계정이 더 진짜처럼 보인다.', impact: [{ who: '소율', text: '모르는 사이에 이름이 쓰인다', tone: -1 }], why: '팔로우도 가짜 계정을 퍼뜨리는 힘이 돼요.', ending: '내 팔로우가 사칭 계정을 키웠어요.' },
      { id: 'laugh', text: '웃고 넘긴다', result: '예준은 다른 친구들에게도 보여 준다.', impact: [{ who: '소율', text: '사칭이 퍼진다', tone: -1 }], end: '말리지 않고 넘겼어요.',
        next: { text: '다음 날 가짜 계정에 소율 이름으로 다른 친구를 욕하는 글이 올라왔다.', ask: '이제 어떻게 할까?', choices: [
          { id: 'tellso', text: '소율에게 가짜 계정이 있다고 알려 준다', result: '소율이 깜짝 놀라 화면을 기록한다.', impact: [{ who: '소율', text: '대응을 시작한다', tone: 1 }], end: '당사자에게 알렸어요.',
            next: { text: '소율이 "어떡해, 다들 내가 쓴 줄 알아"라고 한다.', choices: [
              { id: 'help', text: '"같이 사칭 신고하고 담임 선생님께 말하자"', result: '계정이 신고되고 선생님이 반에 사실을 알린다.', impact: [{ who: '소율', text: '오해가 풀리기 시작한다', tone: 1 }] },
              { id: 'reply', text: '"댓글로 가짜라고 싸워"', result: '댓글 싸움으로 계정이 더 알려진다.', why: '맞서 싸우기보다 기록·신고·알리기가 먼저예요.' }] } },
          { id: 'watch', text: '구경만 한다', result: '욕먹은 친구가 소율과 멀어진다.', impact: [{ who: '소율', text: '친구를 잃는다', tone: -1 }], why: '사칭은 이름 주인의 관계까지 망가뜨려요.' }] } },
      { id: 'stop', text: '"그거 소율 이름 도용이야. 지우자"라고 말한다', result: '예준이 "장난인데 뭐"라며 머뭇거린다.', impact: [{ who: '소율', text: '사칭이 멈출 기회가 생긴다', tone: 1 }], end: '만든 친구에게 멈추자고 했어요.',
        next: { text: '예준이 "장난인데 뭐, 다들 웃잖아"라고 한다.', ask: '어떻게 할까?', choices: [
          { id: 'why', text: '"소율이 쓴 줄 알고 오해받을 수 있어. 지금 지우면 끝나"', result: '예준이 계정을 지운다.', impact: [{ who: '소율', text: '피해를 피한다', tone: 1 }], end: '만든 친구가 스스로 지웠어요.',
            next: { text: '그사이 몇 명이 캡처를 해 두었다는 말을 듣는다.', choices: [
              { id: 'adult', text: '소율에게 알리고 함께 담임 선생님께 말한다', result: '선생님이 반에 캡처를 지우게 하고 소율을 살핀다.', impact: [{ who: '소율', text: '보호를 받는다', tone: 1 }] },
              { id: 'enough', text: '지웠으니 됐다고 한다', result: '캡처가 다시 돈다.', why: '남은 캡처가 있으면 어른에게 알려요.' }] } },
          { id: 'okay', text: '"그래, 장난이면 뭐"라고 넘어간다', result: '계정이 그대로 남는다.', impact: [{ who: '소율', text: '사칭이 이어진다', tone: -1 }], why: '재미로 만든 가짜 계정도 이름 주인에게 피해를 줘요.' }] } },
      { id: 'report', text: '화면을 기록하고 사칭 신고를 누른 뒤 소율에게 알린다', result: '소율이 고마워하며 함께 대응한다.', impact: [{ who: '소율', text: '빨리 알게 된다', tone: 1 }], end: '기록하고 신고하고 알렸어요.',
        next: { text: '소율이 "누가 만든 건지 알아?"라고 묻는다.', ask: '어떻게 답할까?', choices: [
          { id: 'teacher', text: '"내가 본 걸 선생님께 같이 말하자"', result: '선생님이 사실을 살피고 만든 친구와 이야기한다.', impact: [{ who: '소율', text: '보호를 받는다', tone: 1 }], end: '본 사실을 어른에게 잇기로 했어요.',
            next: { text: '선생님과 이야기한 뒤 예준이 "미안, 장난이었어"라고 한다.', choices: [
              { id: 'apology', text: '소율이 받을지는 소율에게 맡기고 곁에 있는다', result: '소율이 천천히 마음을 정리한다.', impact: [{ who: '소율', text: '스스로 정할 수 있다', tone: 1 }] },
              { id: 'force', text: '"사과했으니 빨리 받아 줘"라고 소율을 재촉한다', result: '소율이 불편해한다.', why: '사과를 받을지는 피해를 입은 사람이 정해요.' }] } },
          { id: 'expose', text: '"예준이야"라며 반 단톡방에 올린다', result: '예준을 향한 몰이가 시작된다.', impact: [{ who: '예준', text: '여럿에게 몰린다', tone: -1 }], why: '만든 사람을 공개로 몰아세우면 또 다른 폭력이 돼요. 어른에게 알려요.' }] } }] };
    const R1 = [{ id: 'r1', text: '재미로 만들어도 이름 주인이 오해와 피해를 입는다' }, { id: 'r2', text: '기록·신고·어른에게 알리기가 확산을 막는다' },
      { id: 'r3', text: '다들 웃으니 장난이다', why: '이름 주인이 웃지 않으면 장난이 아니에요.' }, { id: 'r4', text: '만든 사람을 공개해 혼내면 끝난다', why: '공개 몰이는 또 다른 폭력이 돼요.' }];
    const R1C = { reasons: [{ id: 'r5', text: '팔로우한 길에서는 사칭 계정이 더 진짜처럼 보였다' }, { id: 'r6', text: '멈추자고 한 길에서는 계정이 지워졌다' }], ok: ['r5', 'r6'] };
    const PW = [['1학년', 34], ['2학년', 41], ['3학년', 47]];
    const SAFE5 = ['2단계 인증을 켰는지', '비밀번호를 친구와 나누지 않았는지', '공용 기기에서 로그아웃했는지', '게시물 공개 범위를 정했는지', '모르는 링크를 누르지 않았는지'];

    ALL.push(
      // ---- 도입 ----
      M('intro.spot-fake', {
        title: '진짜와 가짜 프로필 가리기', method: '진짜와 가짜 프로필 가리기', tool: 'sortboard', minutes: 6,
        levels: { easy: '가상 프로필 4개를 교사와 함께 사칭 의심·진짜일 가능성 바구니로 나눈다.', base: '시연 판에서 가상 프로필 6개가 나뉘는 모습을 보고 근거(가입일·게시물·이름 철자)를 짚는다.', challenge: '판단 근거 셋을 점검표 문장으로 바꿔 말한다.' },
        intro: {
          teacher: '"사진이 똑같으면 그 사람 계정일까요?" 가상 프로필 카드를 읽고 시연 단추로 사칭 의심·진짜일 가능성 바구니에 나뉘는 모습을 보인다. "이름이 같으면 진짜"라는 말이 나오면 "가입 3일, 게시물 0개, 철자 한 글자가 다르다면 어떨까요?"라고 되묻는다. 이 판단은 \'의심\'일 뿐이고, 확인은 이름 주인에게 묻고 어른과 함께 한다고 밝힌다.',
          student: '가상 프로필 6개를 가입일·게시물·이름 철자 같은 근거로 사칭 의심과 진짜일 가능성으로 나눠요.',
          demo: { tool: 'sortboard', options: { slots: ['사칭 의심', '진짜일 가능성'], cards: strip(PROF) }, sequence: [{ sort: { '사칭 의심': ['f1', 'f2', 'f3'], '진짜일 가능성': ['r1', 'r2', 'r3'] } }] },
          art: { draw: 'a paper-cut pair of nearly identical profile cards side by side, one with a magnifying glass over a slightly different name', banner: '진짜일까, 가짜일까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '프로필은 모두 가상이다. 실제 서비스 화면이나 실제 학생 계정을 보여 주지 않는다.',
      }),
      M('intro.impact-timeline', {
        title: '사칭 계정 하루의 일', method: '사칭 계정 하루의 일 차례 놓기', tool: 'timeline', minutes: 6,
        levels: { easy: '장면 3개(개설·이상한 글·단톡방 공유)의 차례를 함께 본다.', base: '시연 판에서 장면 5개가 아침부터 밤까지 놓이는 모습을 보고 피해가 커지는 지점을 짚는다.', challenge: '장면마다 누가 영향을 받는지(이름 주인·팔로우한 친구·욕먹은 친구) 덧붙여 말한다.' },
        intro: {
          teacher: '"아침에 만든 가짜 계정이 밤에는 어떤 일을 만들었을까요?" 시연 단추로 장면 카드가 아침부터 밤까지 놓이는 모습을 보인다. "재미로 만든 가짜 계정은 괜찮다"는 말이 나오면 "밤에 친구들에게 오해받은 사람은 누구인가요?"라고 되묻는다. 팔로우와 캡처가 피해를 키운 지점을 오늘의 질문으로 삼는다.',
          student: '친구 이름으로 만든 가짜 계정이 하루 동안 번지는 장면을 차례대로 보고, 피해가 커지는 지점을 찾아요.',
          demo: { tool: 'timeline', options: { mode: 'order', axis: ['아침', '밤'], slots: 5, cards: [DAY[3], DAY[0], DAY[4], DAY[2], DAY[1]] }, sequence: [{ order: DAY.map((c) => c.id) }] },
          art: { draw: 'a paper-cut clock face from morning sun to night moon with small phone cards growing in number around it', banner: '하루 만에 어디까지?', extra: [{ motif: 'moon', x: 300, y: 96 }] },
        },
        notes: SAFE_NOTE,
      }),

      // ---- 활동 ----
      M('act.fake-dilemma', {
        title: '"웃기지 않아?" 사칭 계정', method: '사칭 계정 갈림길에서 결과 따라가기', tool: 'dilemma', minutes: 15,
        levels: { easy: '갈림 2번까지 가고, 고를 때마다 소율과 만든 친구에게 생기는 영향이 바로 보인다.', base: '갈림 3번까지 가고, 영향 표시는 맞힌 뒤에만 보인다. 끝에서 근거를 고른다.', challenge: '갈림 3번 뒤 팔로우한 길의 결말과 견주는 근거 카드까지 고르고, 만든 친구의 책임을 활동지에 정리한다.' },
        activity: {
          title: '"웃기지 않아?" 사칭 계정', tool: 'dilemma',
          teacher: '"팔로우 한 번은 아무 일도 아닐까요?" 학생마다 한 길을 끝까지 가 본 뒤 팔로우한 길·멈추자고 한 길·기록하고 신고한 길을 견주게 한다. "재미로 만든 가짜 계정은 괜찮다"는 학생에게 "그 계정에 올라온 욕을 다들 누가 쓴 줄 알까요?"라고 되묻는다. 만든 친구를 공개로 몰아세우는 길도 짚어, 책임은 어른과 함께 묻는다는 점을 분명히 한다.',
          task: '친구가 사칭 계정을 보여 주며 팔로우하라는 장면에서 세 번 골라, 사칭당한 학생과 만든 친구에게 생기는 결과를 따라가요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL({ easy: '사칭 계정을 보여 줬어요. 두 번 골라 결과를 보고 근거를 고르세요.', base: '사칭 계정을 보여 줬어요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 간 뒤, 팔로우한 길의 결말과 견주는 근거까지 고르세요.' },
              '사칭 계정', D1, [['stop', 'why', 'adult'], ['report', 'teacher', 'apology'], ['laugh', 'tellso', 'help']], R1, ['r1', 'r2'], R1C),
            ONE('친구가 비밀번호를 알려 줬을 때의 길을 고르세요.', '알게 된 비밀번호', { text: '도하가 예전에 알려 준 비밀번호를 나는 아직 기억한다. 친구가 "도하 계정 들어가서 장난 글 하나 올리자"고 한다.', ask: '어떻게 할까?', motif: 'house', choices: [
              { id: 'login', text: '알고 있으니 들어가서 글을 올린다', result: '도하 이름으로 이상한 글이 올라간다.', impact: [{ who: '도하', text: '계정과 믿음을 잃는다', tone: -1 }], why: '비밀번호를 알아도 남의 계정에 들어가 쓰는 것은 도용이에요.' },
              { id: 'refuse', text: '"그건 도용이야. 도하한테 비밀번호 바꾸라고 하자"', result: '도하가 비밀번호를 바꾼다.', impact: [{ who: '도하', text: '계정을 지킨다', tone: 1 }], ending: '도용을 거절하고 친구 계정을 지켰어요.' }] }, ['refuse'],
              [{ id: 'q1', text: '비밀번호를 알아도 남의 계정은 그 사람 것이다' }, { id: 'q2', text: '친구가 알려 줬으니 써도 된다', why: '알려 준 것은 믿음이지 쓰라는 허락이 아니에요.' }], ['q1']),
            ONE('사칭 계정을 처음 봤을 때 가장 먼저 할 일을 고르세요.', '처음 본 순간', { text: '반 친구 윤슬 이름의 낯선 계정이 나에게 친구 신청을 보냈다.', ask: '먼저 할 일은?', motif: 'house', choices: [
              { id: 'askreal', text: '윤슬에게 따로 "이거 네 계정 맞아?"라고 묻는다', result: '윤슬이 "아니야!"라며 놀란다.', impact: [{ who: '윤슬', text: '빨리 알게 된다', tone: 1 }], ending: '이름 주인에게 먼저 확인했어요.' },
              { id: 'accept', text: '일단 친구 신청을 받는다', result: '가짜 계정의 친구 수가 늘어난다.', why: '받기 전에 이름 주인에게 확인해요.' }] }, ['askreal'], null, null,
              { conclude: '재미로 만든 사칭 계정도, 알고 있는 비밀번호로 들어가는 도용도 사이버폭력이에요. 기록하고 신고하고 이름 주인과 어른에게 알려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '사칭 계정을 만든 친구에게 어떤 책임이 있는지 한 문장으로 써요.' }],
          easy: [{ type: 'choice', prompt: '사칭 계정을 봤을 때 알맞은 행동은?', options: ['이름 주인에게 알리고 신고한다', '웃기니까 팔로우한다'], answer: '이름 주인에게 알리고 신고한다' }] },
        notes: SAFE_NOTE,
      }),
      M('act.response-blocks', {
        title: '사칭·도용 대응 순서 짜기', method: '사칭·도용 대응 순서 짜기', tool: 'block-coding', minutes: 15,
        levels: { easy: '곧은 길(블록 3개 안팎)로 별 둘(화면 기록·사칭 신고)을 지나 깃발(학교에 알리기)에 닿는다.', base: '꺾인 길로 별 넷(화면 기록·사칭 신고·비밀번호 바꾸기·지인에게 알리기)을 모두 지나 깃발에 닿는다.', challenge: '조건 블록(막히면 돌기)을 넣어, 협박이 있으면 방향을 바꿔 바로 어른에게 가는 갈래를 만든다.' },
        activity: {
          title: '사칭·도용 대응 순서 짜기', tool: 'block-coding',
          teacher: '"내 이름의 가짜 계정을 발견했다면, 화가 나서 댓글부터 달기 전에 할 일은?" 판의 별은 차례대로 \'화면 기록 → 사칭 신고 → 비밀번호 바꾸기 → 지인에게 알리기\', 깃발은 \'학교에 알리기\', 바위는 \'댓글로 싸우기\'라고 읽어 준다. "신고하면 끝"이라는 학생에게 "이미 본 친구들의 오해는 누가 풀어 줄까요?"라고 되묻는다.',
          task: '사칭·도용을 당한 가상 인물의 대응 차례를 길 찾기 판으로 짜요. 별(대응 단계)을 모두 지나 깃발(학교에 알리기)에 닿고, 바위(댓글로 싸우기)는 피해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(ROUTE('별 넷(화면 기록·사칭 신고·비밀번호 바꾸기·지인에게 알리기)을 모두 지나 깃발(학교에 알리기)에 닿게 블록을 이으세요.', { cols: 5, rows: 3, start: { x: 0, y: 1, dir: 'E' }, goal: { x: 4, y: 0 }, stars: [[1, 1], [2, 1], [2, 2], [3, 2]], rocks: [[3, 1], [1, 0]] }, { stars: true }),
              ROUTE('별 둘(화면 기록·사칭 신고)을 지나 깃발에 닿게 블록을 이으세요.', { cols: 4, rows: 2, start: { x: 0, y: 0, dir: 'E' }, goal: { x: 3, y: 0 }, stars: [[1, 0], [2, 0]], rocks: [] }, { stars: true, maxBlocks: 3 })),
            IT(ROUTE('바위(댓글로 싸우기)를 돌아 별(화면 기록)을 지나 깃발에 닿으세요.', { cols: 4, rows: 3, start: { x: 0, y: 0, dir: 'S' }, goal: { x: 3, y: 2 }, stars: [[0, 2]], rocks: [[1, 1], [2, 0]] }, { stars: true })),
            IT(ROUTE('반복 블록으로 같은 걸음을 줄여 별 셋을 지나 깃발에 닿으세요.', { cols: 5, rows: 2, start: { x: 0, y: 1, dir: 'E' }, goal: { x: 4, y: 1 }, stars: [[1, 1], [2, 1], [3, 1]], rocks: [] }, { stars: true, use: ['rep'], maxBlocks: 3 }),
              null,
              ROUTE('조건 블록(막히면 오른쪽으로 돌기)을 반복 안에 넣어, 막혀도(협박이 있어도) 방향을 바꿔 깃발에 닿으세요.', { cols: 4, rows: 4, start: { x: 0, y: 0, dir: 'E' }, goal: { x: 3, y: 3 }, stars: [[2, 0], [3, 2]], rocks: [], blocks: ['fwd', 'left', 'right', 'rep', 'if'] }, { stars: true, use: ['if'] }),
              { conclude: '사칭·도용에는 화면 기록 → 사칭 신고 → 비밀번호 바꾸기 → 지인에게 알리기 → 학교에 알리기. 협박이 있으면 바로 어른에게 가요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '사칭·도용 대응 차례를 써요.', columns: ['차례', '할 일'], cells: [['1', ''], ['2', ''], ['3', ''], ['4', ''], ['5', '']], answer: '화면 기록, 사칭 신고, 비밀번호 바꾸기, 지인에게 알리기, 학교에 알리기' }] },
        notes: '교구는 글 블록을 잇지 못한다 — 길 찾기 판(별 = 대응 단계, 깃발 = 학교에 알리기, 바위 = 댓글로 싸우기)으로 바꾸고 단계 이름·차례는 문제 글과 활동지에 적었다. 조건 갈래는 if 블록이다.',
      }),
      M('act.password-chart', {
        title: '비밀번호 공유 가상 설문', method: '비밀번호 공유 가상 설문 읽기', tool: 'chart', minutes: 15,
        levels: { easy: '막대 값이 보이는 채로 학년별 비율을 읽고 가장 높은 학년을 고른다.', base: '값 없이 눈금으로 읽어 학년 사이 차이를 고르고, 도용 위험과 잇는 해석을 고른다.', challenge: '틀린 확인에서 어느 보기가 틀렸는지 알려 주지 않고, 셋째 문항에서 공유를 줄이는 학급 안을 고른 뒤 까닭을 활동지에 쓴다.' },
        activity: {
          title: '비밀번호 공유 가상 설문', tool: 'chart',
          teacher: '"\'친한 친구와 비밀번호를 공유한 적이 있다\'는 비율이 학년이 오를수록 늘어요. 친한 사이일수록 왜 위험할 수 있을까요?" 가상 설문 그래프를 읽은 뒤 사이가 틀어졌을 때 생길 일을 이어 말하게 한다. "친구 비밀번호를 알면 써도 된다"는 학생에게 "알고 있는 것과 써도 되는 것은 같을까요?"라고 되묻는다. 수치는 수업용 가상 값이다.',
          task: '학년별 비밀번호 공유 가상 설문 그래프를 읽고, 공유가 도용 위험으로 이어지는 까닭과 줄이는 방법을 찾아요.',
          levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            RD('가상 설문에서 비밀번호를 공유한 적이 있다는 비율이 가장 높은 학년을 고르세요.', { type: 'bar', title: '가상 설문 — 친한 친구와 비밀번호를 공유한 적이 있다', unit: '%', xLabel: '학년', yLabel: '비율', max: 60, data: PW, question: '비율이 가장 높은 학년은?', choices: ['1학년', '2학년', '3학년'] }, { pick: 2 }),
            RD('1학년과 3학년의 차이를 읽고, 알맞은 해석을 고르세요.', { type: 'bar', title: '가상 설문 — 친한 친구와 비밀번호를 공유한 적이 있다', unit: '%', xLabel: '학년', yLabel: '비율', max: 60, data: PW, question: '그래프를 바르게 해석한 것은?', choices: ['학년이 오를수록 공유가 늘어 도용될 위험도 커진다', '공유한 학생은 모두 도용을 당했다', '3학년은 비밀번호를 모두 공유한다'] }, { pick: 0 }),
            IT(RD('공유가 위험해지는 때로 알맞은 것을 고르세요.', { type: 'bar', title: '가상 설문 — 친한 친구와 비밀번호를 공유한 적이 있다', unit: '%', xLabel: '학년', yLabel: '비율', max: 60, data: PW, question: '공유한 비밀번호가 위험해지는 때는?', choices: ['사이가 틀어지거나 장난으로 쓰일 때', '친구가 잊어버렸을 때', '전혀 위험하지 않다'] }, { pick: 0 }),
              null,
              RD('공유를 줄이는 학급 안으로 가장 알맞은 것을 고르세요.', { type: 'bar', title: '가상 설문 — 친한 친구와 비밀번호를 공유한 적이 있다', unit: '%', xLabel: '학년', yLabel: '비율', max: 60, data: PW, question: '공유를 줄이는 학급 안은?', choices: ['"비밀번호는 나만, 알게 되면 바로 바꾸기" 약속을 정한다', '서로 비밀번호를 적어 두는 공책을 만든다', '친한 친구끼리만 공유하게 한다'] }, { pick: 0 }),
              { conclude: '비밀번호를 알고 있는 것과 써도 되는 것은 달라요. 공유가 늘수록 도용 위험이 커지니 나만 알고, 알려졌으면 바로 바꿔요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '비밀번호 공유를 줄이는 학급 안을 하나 쓰고, 그 까닭을 덧붙여요.' }] },
        notes: '34%·41%·47%는 수업용 가상 값이다(화면 제목에 \'가상\').',
      }),
      M('act.notice-writing', {
        title: '사칭 피해 알림글 쓰기', method: '사칭 피해 알림글 쓰기', tool: 'rubric-writing', minutes: 15,
        levels: { easy: '문장 틀을 채워 두 문장(사실·요청 행동)의 알림글을 쓴다.', base: '네 문장 알림글을 쓰고 기준표(사실만·요청 행동·보복 표현 없음)로 점검한다.', challenge: '셋째 문항에서 퍼뜨리지 말아 달라는 요청을 까닭과 함께 설득력 있게 덧붙인다.' },
        activity: {
          title: '사칭 피해 알림글 쓰기', tool: 'rubric-writing',
          teacher: '"\'누가 내 계정 만들었는지 다 알아. 가만 안 둬\'와 \'제 이름의 가짜 계정이 있어요. 팔로우하지 말고 신고해 주세요\', 친구들이 무엇을 해야 할지 아는 글은?" 두 글을 견주어 읽은 뒤 쓰게 한다. 화가 난 마음을 이해하되 보복 표현은 일을 키운다는 점을 짚는다. 실제 이름·계정 주소는 쓰지 않는다.',
          task: '가상 인물이 친구들에게 올릴 "제 이름의 가짜 계정이 있어요" 알림글을 쓰고, 사실만·요청 행동·보복 표현 없음을 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(RW('첫 두 문장: 사실과 부탁할 행동을 쓰세요.', { topic: '가상 인물이 친구들에게 알리는 글의 첫 두 문장을 쓰세요(무슨 일이 있는지, 친구들이 해 줄 일).', min: 25, max: 160, s: [2, 3], title: '알림글 ① 사실과 요청' }, ['있는 사실만 썼다', '친구들이 할 행동을 부탁했다', '보복 표현을 쓰지 않았다']),
              RW('틀을 채워 두 문장을 쓰세요.', { topic: '알림글 두 문장을 쓰세요.', min: 20, max: 140, s: [2, 3], starter: '제 이름으로 된 가짜 계정이 있어요. ___ 해 주세요.' }, ['있는 사실만 썼다', '친구들이 할 행동을 부탁했다'])),
            IT(RW('알림글 네 문장을 완성하세요.', { topic: '앞의 두 문장에 이어, 지금 하고 있는 대응과 고마움을 더해 알림글을 네 문장으로 완성하세요.', min: 45, max: 240, s: [4, 5], title: '알림글 완성' }, ['있는 사실만 썼다', '친구들이 할 행동을 부탁했다', '보복 표현을 쓰지 않았다', '실제 이름·계정 주소를 쓰지 않았다'], [['신고', '팔로우', '퍼뜨리']]),
              null,
              RW('알림글에 퍼뜨리지 말아 달라는 요청을 까닭과 함께 덧붙여 완성하세요.', { topic: '알림글 네 문장에, 캡처를 퍼뜨리지 말아 달라는 요청을 까닭과 함께 한 문장 더해 쓰세요.', min: 55, max: 280, s: [5, 5], title: '설득하는 요청' }, ['있는 사실만 썼다', '친구들이 할 행동을 부탁했다', '보복 표현을 쓰지 않았다', '퍼뜨리지 말아야 할 까닭을 썼다'], [['신고', '팔로우', '퍼뜨리']]),
              { conclude: '좋은 알림글은 사실만 말하고, 친구들이 할 행동을 부탁하고, 보복 표현 없이 차분해요.' }),
            IT(RW('보복 표현이 든 문장을 차분한 문장으로 고쳐 쓰세요.', { topic: '"누가 만들었는지 다 알아. 가만 안 둬." 이 문장을 보복 표현 없이 차분한 한두 문장으로 고쳐 쓰세요.', min: 15, max: 120, s: [1, 2], title: '고쳐 쓰기' }, ['보복 표현을 뺐다', '할 일을 분명히 썼다'])),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내가 쓴 알림글에서 가장 중요한 요청 한 문장을 옮겨 써요.' }] },
      }),

      // ---- 정리 ----
      M('wrap.security-check', {
        title: '내 계정 보안 다섯 칸 점검', method: '내 계정 보안 다섯 칸 점검', tool: 'timer', minutes: 7,
        levels: { easy: '점검 세 칸(2단계 인증·비밀번호 공유 안 함·로그아웃)을 짚는다.', base: '타이머를 1분(60초)으로 맞추고 그 동안 점검 다섯 칸을 짚는다.', challenge: '다섯 칸에 더해 집에서 보호자와 확인할 칸을 정했는지 스스로 점검한다.' },
        wrap: {
          teacher: '"사칭·도용을 막는 첫 문은 내 계정이에요. 1분 동안 다섯 칸을 머릿속으로 짚어 볼까요?" 화면에 실제 계정 정보를 입력하거나 비밀번호를 말하지 않는다고 먼저 약속한다. "나는 털릴 게 없다"는 학생에게 "내 계정으로 누가 친구에게 글을 쓴다면 무엇을 잃을까요?"라고 되묻는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'timer', options: { title: '내 계정 보안 점검(실제 정보는 입력하지 않아요)', plan: { work: 30, rest: 0, rounds: 1 }, safety: SAFE5 }, prompt: '타이머를 1분(60초)으로 맞추고, 그 동안 점검 다섯 칸을 짚어 모두 표시해요.', target: { plan: { work: 60, rounds: 1 }, safety: true }, difficulty: 0.2 },
              { prompt: '점검 세 칸을 짚어 모두 표시해요.', toolOptions: { safety: SAFE5.slice(0, 3) }, target: { safety: true } },
              { prompt: '타이머를 1분으로 맞추고 다섯 칸을 짚은 뒤, 보호자와 확인할 칸을 정했는지 점검해요.', target: { plan: { work: 60, rounds: 1 }, safety: true, selfCheck: ['집에서 보호자와 확인할 칸을 정했다'] } }),
            { type: 'choice', prompt: '친구가 내 비밀번호를 알게 되었을 때 할 일은?', options: ['바로 비밀번호를 바꾼다', '친한 친구니 그대로 둔다', '다른 친구에게도 알려 준다'], answer: 0, difficulty: 0.15, explain: '알려진 비밀번호는 바로 바꿔요.' },
          ],
        },
        worksheet: {
          title: '내 계정 보안 점검',
          items: [
            { type: 'check', prompt: '집에서 확인할 칸에 표시해요(실제 정보는 적지 않아요).', options: ['2단계 인증', '비밀번호 공유 안 함', '로그아웃', '공개 범위', '모르는 링크'] },
            { type: 'short', prompt: '보호자와 함께 확인할 칸 하나와 그 까닭을 써요.' },
          ],
        },
        notes: '실제 계정 정보·비밀번호를 입력하거나 말하지 않는다. 점검은 머릿속으로 짚고 표시만 한다.',
      }),
      M('wrap.campaign-poster', {
        title: '"내 이름은 나만" 포스터', method: '"내 이름은 나만" 캠페인 포스터', tool: 'collage', minutes: 7,
        levels: { easy: '표어 자리를 둔 포스터 바탕을 조각 3개 이상으로 꾸민다(표어는 활동지).', base: '조각 5개 이상으로 꾸미고 표어와 대응 순서 한 줄을 활동지에 쓴다.', challenge: '학년 전체가 볼 포스터로 대비되는 색이 맞닿게 꾸미고 문구를 다듬는다.' },
        wrap: {
          teacher: '"\'내 이름은 나만\' 다음에 올 한 줄은 무엇이 좋을까요? 겁주는 말일까요, 할 일일까요?" 표어와 대응 순서 한 줄(기록 → 신고 → 알리기)을 활동지에 쓰고 조각으로 바탕을 꾸미게 한다(교구에는 글자를 넣을 수 없다). 실제 친구 이름·계정은 넣지 않는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'collage', options: { maxPieces: 14 }, prompt: '"내 이름은 나만" 포스터 바탕을 조각으로 꾸미고 점검해요(문구는 활동지에 써요).', target: { selfCheck: ['표어 자리를 비워 두었다', '대응 순서 한 줄을 활동지에 썼다', '실제 이름·계정을 넣지 않았다'], minPieces: 5 }, difficulty: 0.2 },
              { prompt: '조각 3개 이상으로 포스터 바탕을 꾸미고 점검해요.', target: { selfCheck: ['표어 자리를 비워 두었다'], minPieces: 3 } },
              { prompt: '밝은 색과 어두운 색 조각이 맞닿게 학년 전체용 포스터를 꾸미고 점검해요.', target: { contrast: 'light-dark', selfCheck: ['표어 자리를 비워 두었다', '대응 순서 한 줄을 활동지에 썼다', '학년 전체용 문구로 다듬었다'], minPieces: 5 } }),
            { type: 'choice', prompt: '포스터에 넣을 대응 순서로 알맞은 것은?', options: ['기록 → 신고 → 알리기', '댓글로 싸우기 → 공개하기', '모른 척하기 → 지우기'], answer: 0, difficulty: 0.15, explain: '증거를 남기고 신고한 뒤 어른과 지인에게 알려요.' },
          ],
        },
        worksheet: {
          title: '"내 이름은 나만" 포스터',
          items: [
            { type: 'short', prompt: '포스터 표어를 써요.' },
            { type: 'blank', prompt: '대응 순서를 채워요.', text: '___ → 사칭 신고 → ___', answer: '화면 기록, 알리기(지인·학교)' },
          ],
        },
        notes: '교구는 글자를 넣지 못해 포스터 바탕만 꾸미고 문구는 활동지에 쓰게 했다.',
      }),
    );
  }

  // ==== 8학년 · 기프티콘·데이터 셔틀과 게임 속 팀 따돌림 (bully.m.g8-cyber-extortion) — 사이버폭력 ====
  {
    const M = MK('g8-cyber-extortion', [8]);
    const D0 = { text: '장면 가: 짝이 하루 한 번 "핫스팟 잠깐만 켜 줄래?"라고 묻고, 안 된다고 하면 "알았어" 한다. 장면 나: 도하가 매일 "핫스팟 켜"라고 하고, 거절하면 다른 애들과 놀린다.', ask: '갈취에 가까운 쪽은?', motif: 'house', choices: [
      { id: 'a', text: '장면 가', result: '거절하면 끝나는 부탁이다.', why: '거절해도 아무 일이 없으면 부탁이에요.' },
      { id: 'b', text: '장면 나', result: '거절하면 놀림이 따라온다.', impact: [{ who: '핫스팟을 켜 주는 학생', text: '거절할 수 없게 된다', tone: -1 }],
        next: { text: '장면 다: 친구가 "기프티콘 하나만, 다음에 갚을게"라고 한 뒤 매주 같은 말을 하고 한 번도 갚지 않는다.', ask: '이 장면은?', choices: [
          { id: 'force', text: '갚지 않고 되풀이되니 갈취에 가깝다', result: '부탁의 모양이지만 억지로 내게 하고 있다.', impact: [{ who: '내는 학생', text: '용돈이 빠져나간다', tone: -1 }] },
          { id: 'fine', text: '갚는다고 했으니 부탁이다', result: '한 달째 한 번도 갚지 않았다.', why: '말이 아니라 되풀이와 거절할 수 있는지를 봐요.' }] } }] };
    const SHUTTLE = [
      { id: 'g1', text: '편의점 기프티콘(1주차)', price: 5000 }, { id: 'g2', text: '게임 아이템', price: 8000 }, { id: 'g3', text: '음료 기프티콘(2주차)', price: 4500 },
      { id: 'g4', text: '데이터 선물', price: 3300 }, { id: 'g5', text: '간식 기프티콘(3주차)', price: 3000 }, { id: 'g6', text: '아이템 추가 요구', price: 6000 },
    ];
    const D1 = { text: '게임 길드의 선배가 "아이템 보내면 길드 안 빼 줄게"라고 메시지를 보냈다. 지난주에도 한 번 보냈다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'send', text: '빠지기 싫어서 아이템을 보낸다', result: '선배가 "잘했어"라고 한다.', impact: [{ who: '나', text: '아이템과 돈을 잃는다', tone: -1 }], why: '보내면 요구가 끝나지 않고 커지기 쉬워요.', end: '요구를 들어줬어요.',
        next: { text: '사흘 뒤 선배가 "이번엔 두 개. 안 보내면 다들 너 욕할 거다"라고 한다.', ask: '이제 어떻게 할까?', choices: [
          { id: 'record2', text: '메시지를 캡처하고 보호자에게 보여 준다', result: '보호자가 학교와 함께 대응하기로 한다.', impact: [{ who: '나', text: '도움을 받는다', tone: 1 }], end: '늦었지만 기록하고 알렸어요.',
            next: { text: '보호자가 "학교에 같이 알리자"고 한다. 선배가 무서워 망설여진다.', choices: [
              { id: 'school', text: '보호자와 함께 담임 선생님께 알린다', result: '학교가 선배의 요구를 살피고 나를 보호한다.', impact: [{ who: '나', text: '보호를 받는다', tone: 1 }] },
              { id: 'hide', text: '그냥 게임을 지운다', result: '선배가 학교에서 직접 요구하기 시작한다.', impact: [{ who: '나', text: '요구가 학교로 옮겨 온다', tone: -1 }], why: '피하기만 하면 요구가 다른 곳으로 옮겨 와요.' }] } },
          { id: 'send2', text: '또 보낸다', result: '요구가 계속 커진다.', impact: [{ who: '나', text: '용돈이 다 빠져나간다', tone: -1 }], why: '보낼수록 요구는 커져요. 기록하고 알려요.' }] } },
      { id: 'ignore', text: '답하지 않고 무시한다', result: '선배가 "읽고 씹냐?"라고 또 보낸다.', impact: [{ who: '나', text: '불안이 커진다', tone: -1 }], end: '무시만 했어요.',
        next: { text: '선배가 "내일까지 안 보내면 길드에서 다 같이 욕한다"라고 한다.', ask: '어떻게 할까?', choices: [
          { id: 'record', text: '메시지를 캡처해 두고 담임 선생님께 알린다', result: '선생님이 보호자와 함께 대응한다.', impact: [{ who: '나', text: '보호를 받는다', tone: 1 }], end: '기록하고 알렸어요.',
            next: { text: '다음 날 길드 채팅에서 몇 명이 나를 욕하기 시작한다.', choices: [
              { id: 'block', text: '욕설 화면도 기록하고 신고·차단한 뒤 선생님께 더 알린다', result: '학교가 몰이까지 함께 살핀다.', impact: [{ who: '나', text: '보호를 받는다', tone: 1 }] },
              { id: 'curse', text: '나도 욕으로 맞받아친다', result: '내 욕설도 기록에 남는다.', why: '맞받아치면 내 글도 문제가 돼요.' }] } },
          { id: 'give', text: '겁이 나서 결국 보낸다', result: '요구가 다음 주에도 온다.', impact: [{ who: '나', text: '요구가 이어진다', tone: -1 }], why: '협박이 붙으면 바로 어른에게 알려요.' }] } },
      { id: 'refuse', text: '"안 보내요"라고 짧고 분명하게 답한다', result: '선배가 "그래? 두고 봐"라고 한다.', impact: [{ who: '나', text: '거절을 분명히 했다', tone: 1 }], end: '분명히 거절했어요.',
        next: { text: '선배가 "두고 봐"라고 답했다.', ask: '다음은?', choices: [
          { id: 'save', text: '대화를 캡처하고 보호자에게 보여 준다', result: '보호자가 담임 선생님께 연락한다.', impact: [{ who: '나', text: '도움을 받는다', tone: 1 }], end: '거절하고 기록하고 알렸어요.',
            next: { text: '선배가 다른 계정으로 또 연락해 온다.', choices: [
              { id: 'again', text: '그 계정도 기록하고 신고·차단한 뒤 선생님께 알린다', result: '학교가 모든 기록을 함께 살핀다.', impact: [{ who: '나', text: '보호를 받는다', tone: 1 }] },
              { id: 'reply', text: '"한 번만 더 하면 가만 안 둬요"라고 답한다', result: '말다툼이 커진다.', why: '맞서기보다 기록하고 알리는 것이 나를 지켜요.' }] } },
          { id: 'alone', text: '혼자 참고 지낸다', result: '선배가 길드에서 나를 따돌리기 시작한다.', impact: [{ who: '나', text: '혼자 견딘다', tone: -1 }], why: '협박이 붙으면 혼자 두지 말고 어른에게 알려요.' }] } }] };
    const R1 = [{ id: 'r1', text: '보내면 요구가 끝나지 않고 커지기 쉽다' }, { id: 'r2', text: '거절하고, 기록하고, 어른에게 알리면 나를 지킬 수 있다' },
      { id: 'r3', text: '친구끼리 사 주는 거라 괜찮다', why: '되풀이되고 거절할 수 없으면 갈취예요.' }, { id: 'r4', text: '게임 일은 학교와 상관없다', why: '학생 사이 온라인 갈취도 학교폭력이에요.' }];
    const R1C = { reasons: [{ id: 'r5', text: '보낸 길에서는 요구가 두 개로 늘었다' }, { id: 'r6', text: '거절하고 알린 길에서는 학교가 함께 대응했다' }], ok: ['r5', 'r6'] };
    const GAME = [['2분', 1], ['3분', 0], ['4분', 6], ['5분', 9], ['6분', 7], ['7분', 2]];
    const STEPS = [
      { id: 's1', text: '화면 녹화·캡처(시간·닉네임 보이게)' }, { id: 's2', text: '게임 안 신고' },
      { id: 's3', text: '차단' }, { id: 's4', text: '보호자에게 알리기' }, { id: 's5', text: '학교에 알리기' },
    ];

    ALL.push(
      // ---- 도입 ----
      M('intro.request-or-force', {
        title: '부탁인가 갈취인가', method: '부탁인가 갈취인가 판단하기', tool: 'dilemma', minutes: 6,
        levels: { easy: '장면 하나(매일 핫스팟을 시키고 거절하면 놀림)를 판단하고 결과 화면을 본다.', base: '시연 판에서 두 장면(가·나)을 견주어 판단하고, 결과 화면의 기준(되풀이·거절할 수 있는지)을 확인한다.', challenge: '시연 판 둘째 장면(갚지 않는 기프티콘)까지 판단하고 근거를 말한다.' },
        intro: {
          teacher: '"\'핫스팟 좀 켜 줘\'는 부탁일까요, 갈취일까요?" 시연 단추로 두 장면을 견주고 둘째 장면(기프티콘)까지 판단하는 모습을 보인다. "친구끼리 사 주는 거라 괜찮다"는 말이 나오면 "거절했을 때 아무 일이 없는지, 놀림이 따라오는지로 나눠 볼까요?"라고 되묻는다. 갈취는 돈만이 아니라 데이터·아이템·기프티콘으로도 일어난다고 밝힌다.',
          student: '"핫스팟 켜 줘"가 되풀이되는 장면을 부탁인지 갈취인지 판단하고, 결과 화면에서 기준을 확인해요.',
          demo: DEMO_DIL('부탁과 갈취', D0, [['b', 'force']], [{ id: 'k1', text: '거절하면 놀림이 따라온다' }, { id: 'k2', text: '매일 되풀이된다' }]),
          art: { draw: 'a paper-cut phone showing a wifi hotspot icon passed between hands, one student looking uneasy while others laugh', banner: '부탁일까, 갈취일까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: SAFE_NOTE,
      }),
      M('intro.cost-calc', {
        title: '셔틀로 빠져나간 돈 계산', method: '셔틀로 빠져나간 돈 계산하기', tool: 'economy', minutes: 6,
        levels: { easy: '항목 3개를 교사와 함께 더해 용돈 막대가 차는 모습을 본다.', base: '시연 판에서 한 달 항목 6개가 모두 담겨 용돈 30,000원 막대가 거의 다 차는 모습을 본다.', challenge: '그 돈으로 할 수 있었던 일을 짝과 한 가지씩 견준다.' },
        intro: {
          teacher: '"한 달 동안 낸 기프티콘·아이템을 다 더하면 용돈 30,000원 가운데 얼마일까요?" 시연 단추로 가상 학생의 한 달 셔틀 목록이 예산 막대에 담기는 모습을 보인다(29,800원). "한 번에 몇천 원이라 별거 아니다"라는 말이 나오면 "막대에 남은 돈은 얼마인가요?"라고 되묻는다. 금액은 수업용 가상 값이다.',
          student: '가상 학생이 한 달 동안 억지로 낸 기프티콘·아이템 금액을 더해, 용돈 가운데 얼마가 빠져나갔는지 봐요.',
          demo: { tool: 'economy', options: { mode: 'budget', budget: 30000, items: SHUTTLE, ask: '한 달 셔틀 금액을 모두 담아 보세요.' }, sequence: [{ budget: { must: SHUTTLE.map((x) => x.id) } }] },
          art: { draw: 'a paper-cut piggy bank with coins and small gift cards flying out of it toward a phone', banner: '한 달에 얼마가 빠져나갈까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '금액과 용돈 30,000원은 수업용 가상 값이다.',
      }),

      // ---- 활동 ----
      M('act.refuse-dilemma', {
        title: '아이템 보내라는 메시지', method: '아이템 요구 갈림길에서 결과 따라가기', tool: 'dilemma', minutes: 15,
        levels: { easy: '갈림 2번까지 가고, 고를 때마다 나에게 생기는 영향이 바로 보인다.', base: '갈림 3번까지 가고, 영향 표시는 맞힌 뒤에만 보인다. 끝에서 근거를 고른다.', challenge: '갈림 3번 뒤 보낸 길의 결말과 견주는 근거 카드까지 고르고, 보낸 경우 요구가 어떻게 커지는지 활동지에 쓴다.' },
        activity: {
          title: '아이템 보내라는 메시지', tool: 'dilemma',
          teacher: '"한 번 보내면 끝날까요?" 학생마다 한 길을 끝까지 가 본 뒤 보낸 길·무시한 길·거절한 길을 견주게 한다. "보낸 사람도 잘못"이라는 학생에게 "겁이 나서 보낸 것은 잘못이 아니에요. 잘못은 억지로 내게 한 쪽에 있어요. 그다음에 할 수 있는 일은 무엇일까요?"라고 되묻는다. 협박이 붙으면 혼자 두지 않고 바로 어른에게 알린다는 점을 짚는다.',
          task: '게임 길드 선배가 아이템을 보내라고 하는 장면에서 세 번 골라 결과를 따라가고, 끝에서 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL({ easy: '아이템을 보내라는 메시지가 왔어요. 두 번 골라 결과를 보고 근거를 고르세요.', base: '아이템을 보내라는 메시지가 왔어요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 간 뒤, 보낸 길의 결말과 견주는 근거까지 고르세요.' },
              '아이템 요구', D1, [['refuse', 'save', 'again'], ['ignore', 'record', 'block'], ['send', 'record2', 'school']], R1, ['r1', 'r2'], R1C),
            ONE('친구가 셔틀을 당하고 있다고 털어놓았을 때의 길을 고르세요.', '친구가 털어놓을 때', { text: '친구 윤슬이 "매주 기프티콘을 보내라고 해. 내가 바보 같아"라고 털어놓는다.', ask: '어떻게 답할까?', motif: 'house', choices: [
              { id: 'support', text: '"네 잘못 아니야. 메시지 남겨 두고 같이 선생님께 가자"', result: '윤슬이 고개를 끄덕인다.', impact: [{ who: '윤슬', text: '혼자가 아니라고 느낀다', tone: 1 }], ending: '탓하지 않고 함께 가자고 했어요.' },
              { id: 'blame', text: '"왜 바보같이 보냈어?"', result: '윤슬이 입을 다문다.', why: '보낸 사람이 아니라 억지로 내게 한 쪽이 잘못이에요.' }] }, ['support'],
              [{ id: 'q1', text: '잘못은 억지로 내게 한 쪽에 있다' }, { id: 'q2', text: '보낸 사람도 똑같이 잘못이다', why: '겁이 나서 보낸 것은 잘못이 아니에요.' }], ['q1']),
            ONE('셔틀 요구를 거절하는 첫 답장으로 알맞은 것을 고르세요.', '첫 답장', { text: '"기프티콘 보내. 안 그럼 알지?"라는 메시지가 왔다.', ask: '첫 답장은?', motif: 'house', choices: [
              { id: 'clear', text: '"안 보낼게요."', result: '짧고 분명한 거절이 기록에 남는다.', impact: [{ who: '나', text: '거절이 분명해진다', tone: 1 }], ending: '짧고 분명하게 거절했어요.' },
              { id: 'long', text: '"아 죄송한데 요즘 돈이 없어서… 다음엔 꼭…"', result: '"그럼 다음 주에"라는 답이 온다.', why: '핑계를 대면 다음 요구의 여지가 남아요.' }] }, ['clear'], null, null,
              { conclude: '셔틀 요구는 보내도 끝나지 않아요. 짧고 분명하게 거절하고, 기록하고, 어른에게 알려요. 잘못은 억지로 내게 한 쪽에 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '보낸 길에서 요구가 어떻게 커졌는지 한 문장으로 써요.' }],
          easy: [{ type: 'choice', prompt: '셔틀 요구를 받았을 때 알맞은 행동은?', options: ['분명히 거절하고 메시지를 기록해 어른에게 알린다', '빠지기 싫으니 보낸다'], answer: '분명히 거절하고 메시지를 기록해 어른에게 알린다' }] },
        notes: SAFE_NOTE,
      }),
      M('act.game-chat-analysis', {
        title: '게임 채팅 기록 분석', method: '게임 채팅 기록을 그래프로 분석하기', tool: 'chart', minutes: 15,
        levels: { easy: '표를 보고 분 단위 막대(2~7분)를 그릴 때 첫 두 막대가 미리 그려져 있고 값이 보인다.', base: '가상 채팅 기록 표로 분 단위 막대를 모두 그리고, 몰이가 시작된 계기와 동조한 계정 수를 읽는다.', challenge: '틀린 확인에서 어느 막대가 틀렸는지 알려 주지 않고, 셋째 문항에서 말린 메시지 뒤 그래프 변화를 추론한다.' },
        activity: {
          title: '게임 채팅 기록 분석', tool: 'chart',
          teacher: '"한 판 동안 한 명을 향한 욕설이 4분부터 왜 확 늘었을까요?" 표를 보고 막대를 그린 뒤, 3분 끝에 \'우리 팀이 한 라운드를 짐\'이라는 기록이 있다고 알려 준다. "게임 안 욕은 원래 다 한다"는 학생에게 "다 하는 욕이라면 왜 한 명에게만 9번이 몰렸을까요?"라고 되묻는다. 기록은 수업용 가상 기록이다.',
          task: '가상 게임 한 판의 채팅 기록 표를 보고 한 명을 향한 욕설 수를 분 단위 막대그래프로 그리고, 몰이의 계기와 흐름을 읽어요.',
          levels: { easy: { showValues: true, given: [0, 1] }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            { prompt: '표를 보고 분마다 한 명을 향한 욕설 수를 막대그래프로 그리세요.', toolOptions: { type: 'bar', mode: 'build', title: '가상 게임 한 판 — 한 명을 향한 욕설 수', unit: '번', xLabel: '경기 시간', yLabel: '욕설 수', max: 10, scale: 1, data: GAME, showTable: true }, target: { build: true } },
            RD('기록에 "3분 끝: 우리 팀이 한 라운드를 짐"이 있어요. 몰이의 계기로 알맞은 것을 고르세요.', { type: 'bar', title: '가상 게임 한 판 — 한 명을 향한 욕설 수', unit: '번', xLabel: '경기 시간', yLabel: '욕설 수', max: 10, data: GAME, question: '몰이가 시작된 계기는?', choices: ['라운드를 진 뒤 한 명에게 탓이 몰렸다', '그 학생이 먼저 욕을 했다', '게임이 원래 그렇다'] }, { pick: 0 }),
            IT(RD('5분에 욕설을 쓴 계정이 셋이었어요. 셋을 무엇이라 할 수 있나요?', { type: 'bar', title: '가상 게임 한 판 — 한 명을 향한 욕설 수', unit: '번', xLabel: '경기 시간', yLabel: '욕설 수', max: 10, data: GAME, question: '여럿이 한 명에게 욕을 보탠 것은?', choices: ['동조해 몰이를 키운 것', '각자 따로 한 혼잣말', '게임 작전'] }, { pick: 0 }),
              null,
              RD('7분에 욕설이 2번으로 줄었어요. 6분 끝에 올라왔을 메시지를 추론해 고르세요.', { type: 'bar', title: '가상 게임 한 판 — 한 명을 향한 욕설 수', unit: '번', xLabel: '경기 시간', yLabel: '욕설 수', max: 10, data: GAME, question: '욕설을 줄게 했을 메시지는?', choices: ['"그만해, 한 명 탓하지 말자"', '"더 해, 쟤 때문이야"', '"ㅋㅋㅋ"'] }, { pick: 0 }),
              { conclude: '게임 속 몰이는 한 사건 뒤 탓이 한 명에게 몰리며 시작되고, 동조가 키우고, 말리는 한마디가 꺾어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '그래프에서 몰이가 시작된 때와 줄어든 때를 한 문장으로 써요.' }] },
        notes: '채팅 기록과 수치는 수업용 가상 기록이다. 실제 게임 이름·닉네임을 쓰지 않는다.',
      }),
      M('act.record-steps', {
        title: '기록과 신고 차례 놓기', method: '기록과 신고 차례 놓기', tool: 'timeline', minutes: 15,
        levels: { easy: '단계 카드 3장(기록·신고·알리기)을 차례대로 놓고, 놓으면 바로 맞는지 알려 준다.', base: '단계 카드 5장을 차례대로 놓고 단계마다 주의점 카드를 붙인다(함정 카드가 섞인다).', challenge: '셋째 문항에서 단계를 빠뜨리면 생기는 문제 카드를 단계마다 붙인다.' },
        activity: {
          title: '기록과 신고 차례 놓기', tool: 'timeline',
          teacher: '"차단부터 하면 안 될까요?" 카드를 놓은 뒤 \'차단하면 대화가 사라질 수 있으니 기록이 먼저\'를 짚는다. "캡처는 아무렇게나 찍으면 된다"는 학생에게 "시간과 닉네임이 안 보이면 누가 언제 했는지 어떻게 알까요?"라고 되묻는다. 메뉴 이름은 게임마다 달라 \'게임 안 신고\'로만 부른다.',
          task: '게임 속 갈취·몰이를 당한 가상 인물이 할 기록·신고 차례 카드를 놓고, 단계마다 주의점을 붙여요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(OB('기록과 신고 단계 카드를 차례대로 놓으세요.', STEPS, { axis: ['먼저', '나중'] }, [{ id: 'x1', text: '욕으로 맞받아치기' }]),
              OB('기록과 신고 단계 카드 3장을 차례대로 놓으세요.', [STEPS[0], STEPS[1], STEPS[4]], { axis: ['먼저', '나중'] })),
            IT(MB('단계마다 주의점을 이으세요.', [['화면 녹화·캡처', '시간·닉네임이 보이게 찍는다'], ['게임 안 신고', '기록을 남긴 뒤에 누른다'], ['차단', '차단 전에 대화를 저장한다'], ['보호자·학교 알리기', '기록을 함께 보여 준다']], ['보낸 사람에게 욕을 보낸다'], { axis: ['단계', '주의점'] }),
              MB('단계 둘의 주의점을 이으세요.', [['화면 녹화·캡처', '시간·닉네임이 보이게 찍는다'], ['차단', '차단 전에 대화를 저장한다']], [], { axis: ['단계', '주의점'] })),
            IT(MB('갈취 요구에서 단계마다 남길 기록을 이으세요.', [['요구 메시지', '날짜와 계정이 보이는 캡처'], ['협박 메시지', '앞뒤 대화까지 이어진 캡처'], ['보낸 아이템', '보낸 기록 화면']], ['기억나는 대로 말로만'], { axis: ['무엇', '어떻게 남길까'] }),
              null,
              MB('단계를 빠뜨리면 생기는 문제를 이으세요.', [['기록 없이 차단', '대화가 사라져 증거가 없다'], ['시간 없이 캡처', '언제 일어났는지 알 수 없다'], ['신고만 하고 안 알림', '학교 밖 요구가 학교로 이어진다'], ['혼자 맞받아침', '내 글도 문제가 된다']], ['아무 문제 없다'], { axis: ['빠뜨림', '문제'] }),
              { conclude: '게임 속 갈취·몰이는 기록(시간·닉네임) → 게임 안 신고 → 차단 → 보호자·학교 알리기 차례로 대응해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '기록과 신고 차례를 써요.', columns: ['차례', '할 일', '주의점'], cells: [['1', '', ''], ['2', '', ''], ['3', '', ''], ['4', '', '']], answer: '화면 기록(시간·닉네임 보이게), 게임 안 신고(기록 뒤), 차단(저장 뒤), 보호자·학교 알리기(기록 보여 주기)' }] },
      }),
      M('act.refusal-script', {
        title: '거절 문장 세 가지 쓰기', method: '거절 문장 세 가지 쓰기', tool: 'rubric-writing', minutes: 15,
        levels: { easy: '문장 틀로 거절 답장 하나를 쓰고 기준 둘(분명함·맞받아치지 않음)을 점검한다.', base: '상황이 다른 거절 답장 세 가지를 쓰고 기준표(분명함·맞받아치지 않음·기록 남김·도움 연결)로 점검한다.', challenge: '셋째 문항에서 협박이 붙었을 때의 다음 행동을 한 문장 덧붙인다.' },
        activity: {
          title: '거절 문장 세 가지 쓰기', tool: 'rubric-writing',
          teacher: '"\'죄송한데 요즘 돈이 없어서요\'는 거절일까요, 다음을 약속하는 말일까요?" 핑계 섞인 답과 \'안 보낼게\'를 견주어 읽은 뒤 쓰게 한다. "세게 말해야 다시 안 건드린다"는 학생에게 "욕을 섞은 거절은 기록에 어떻게 남을까요?"라고 되묻는다. 거절 답장을 보낸 뒤에도 기록하고 어른에게 알리는 것까지가 한 세트라고 말해 준다.',
          task: '셔틀 요구에 보낼 짧은 거절 답장 세 가지를 쓰고, 분명함·맞받아치지 않음·기록 남김·도움 연결을 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(RW('거절 ①: "기프티콘 보내" 요구에 보낼 거절 답장을 쓰세요.', { topic: '"기프티콘 보내"라는 요구에 보낼 짧고 분명한 거절 답장을 한두 문장으로 쓰세요.', min: 8, max: 80, s: [1, 2], title: '거절 ① 기프티콘' }, ['분명하게 거절했다', '맞받아치지 않았다', '핑계를 대지 않았다']),
              RW('틀을 채워 거절 답장을 쓰세요.', { topic: '거절 답장 하나를 쓰세요.', min: 6, max: 60, s: [1, 2], starter: '안 ___. 다시 보내지 마세요.' }, ['분명하게 거절했다', '맞받아치지 않았다'])),
            IT(RW('거절 ②: "핫스팟 켜" 요구에 보낼 거절과 뒤에 할 일을 쓰세요.', { topic: '"핫스팟 켜"라는 요구에 보낼 거절 답장과, 보낸 뒤 내가 할 일(기록 남기기)을 두 문장으로 쓰세요.', min: 20, max: 140, s: [2, 3], title: '거절 ② 핫스팟' }, ['분명하게 거절했다', '맞받아치지 않았다', '기록을 남긴다고 썼다'])),
            IT(RW('거절 ③: "아이템 두 개" 요구에 보낼 거절과 도움 연결을 쓰세요.', { topic: '"아이템 두 개 보내"라는 요구에 보낼 거절 답장과, 믿을 어른에게 알리는 계획을 두 문장으로 쓰세요.', min: 20, max: 140, s: [2, 3], title: '거절 ③ 아이템' }, ['분명하게 거절했다', '맞받아치지 않았다', '기록을 남긴다고 썼다', '도움 받을 어른을 썼다']),
              null,
              RW('거절 ③에 협박이 붙었을 때의 다음 행동을 덧붙여 쓰세요.', { topic: '"아이템 두 개 보내. 안 보내면 알지?"라는 협박에 보낼 거절과, 협박이 붙었을 때 바로 할 다음 행동을 세 문장으로 쓰세요.', min: 30, max: 180, s: [3, 4], title: '협박이 붙었을 때' }, ['분명하게 거절했다', '맞받아치지 않았다', '기록을 남긴다고 썼다', '바로 어른에게 알린다고 썼다']),
              { conclude: '좋은 거절은 짧고 분명하고 맞받아치지 않아요. 보낸 뒤에는 기록하고 어른에게 알리는 것까지가 한 세트예요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내가 쓴 거절 답장 가운데 가장 분명한 하나를 옮겨 써요.' }] },
      }),

      // ---- 정리 ----
      M('wrap.team-rules', {
        title: '우리 팀 게임 규칙 카드', method: '우리 팀 게임 규칙 카드 만들기', tool: 'collage', minutes: 7,
        levels: { easy: '규칙 둘을 담을 카드 바탕을 조각 3개 이상으로 꾸민다(규칙 글은 활동지).', base: '규칙 넷(욕설 없음·강퇴는 합의·지면 서로 탓 안 하기·요구하지 않기)을 담을 카드 바탕을 조각 4개 이상으로 꾸미고 점검한다.', challenge: '어겼을 때의 약속을 활동지에 덧붙이고 점검 항목 하나를 더 표시한다.' },
        wrap: {
          teacher: '"친구들과 함께하는 게임에서 오늘 본 몰이·갈취를 막을 규칙 네 가지는 무엇일까요?" 규칙을 활동지에 쓰고, 규칙마다 아이콘 자리 조각을 두게 한다(교구에는 글자를 넣을 수 없다). "지면 탓하는 건 당연하다"는 학생에게 오늘 그래프의 4분을 떠올리게 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'collage', options: { maxPieces: 12 }, prompt: '게임 규칙 넷의 아이콘 자리를 조각으로 꾸미고 점검해요(규칙 글은 활동지에 써요).', target: { selfCheck: ['규칙마다 아이콘 자리를 두었다', '규칙 넷을 활동지에 썼다', '누구를 겨냥하지 않는 규칙이다'], minPieces: 4 }, difficulty: 0.2 },
              { prompt: '규칙 둘의 아이콘 자리를 조각 3개 이상으로 꾸미고 점검해요.', target: { selfCheck: ['규칙 둘을 활동지에 썼다'], minPieces: 3 } },
              { prompt: '규칙 넷을 꾸미고, 어겼을 때의 약속까지 점검해요.', target: { selfCheck: ['규칙마다 아이콘 자리를 두었다', '규칙 넷을 활동지에 썼다', '누구를 겨냥하지 않는 규칙이다', '어겼을 때의 약속을 썼다'], minPieces: 4 } }),
            { type: 'choice', prompt: '게임 속 몰이를 막는 규칙으로 알맞은 것은?', options: ['지면 한 사람을 탓하지 않는다', '못하는 사람은 바로 강퇴한다', '진 사람이 아이템을 낸다'], answer: 0, difficulty: 0.15, explain: '탓이 한 명에게 몰리면 몰이가 시작돼요.' },
          ],
        },
        worksheet: {
          title: '우리 팀 게임 규칙',
          items: [
            { type: 'table', prompt: '우리 팀 게임 규칙 넷을 써요.', columns: ['차례', '규칙'], cells: [['1', ''], ['2', ''], ['3', ''], ['4', '']], answer: '(예) 욕설 없음, 강퇴는 합의로, 지면 서로 탓 안 하기, 아이템·기프티콘 요구하지 않기' },
            { type: 'short', prompt: '규칙을 어겼을 때의 약속을 써요.' },
          ],
        },
        notes: '교구는 글자를 넣지 못해 카드 바탕만 꾸미고 규칙 글은 활동지에 쓰게 했다.',
      }),
      M('wrap.route-check', {
        title: '갈취 대응 경로 확인', method: '갈취 대응 경로 블록 확인', tool: 'block-coding', minutes: 7,
        levels: { easy: '곧은 길(블록 3개)로 별 둘(거절·기록)을 지나 깃발(알리기)에 닿는다.', base: '꺾인 길로 별 셋(거절·기록·알리기)을 지나 깃발(학교폭력 신고·상담 창구)에 닿는다.', challenge: '조건 블록(막히면 돌기)을 넣어, 돈을 이미 보냈어도(길이 막혀도) 방향을 바꿔 어른에게 가는 갈래를 만든다.' },
        wrap: {
          teacher: '"오늘 정한 대응을 거북이 길로 다시 걸어 볼까요?" 별은 \'거절 → 기록 → 알리기\', 깃발은 \'학교폭력 신고·상담 창구\', 바위는 \'다시 보내기\'라고 읽어 준다. "이미 보냈으면 늦었다"는 학생에게 "보낸 기록도 증거예요. 지금 알리면 무엇이 달라질까요?"라고 되묻는다. 창구 번호는 판서한 것을 활동지에 옮겨 적게 한다.',
          exitTicket: [
            IT(Object.assign(X('block-coding', ROUTE('별 셋(거절·기록·알리기)을 지나 깃발(신고·상담 창구)에 닿게 블록을 이어요. 바위(다시 보내기)는 피해요.', { cols: 5, rows: 3, start: { x: 0, y: 2, dir: 'N' }, goal: { x: 4, y: 0 }, stars: [[0, 1], [1, 0], [3, 0]], rocks: [[1, 1], [2, 2]] }, { stars: true })), { difficulty: 0.25 }),
              { prompt: '별 둘(거절·기록)을 지나 깃발(알리기)에 닿게 블록 3개를 이어요.', toolOptions: { cols: 4, rows: 2, start: { x: 0, y: 1, dir: 'E' }, goal: { x: 3, y: 1 }, stars: [[1, 1], [2, 1]], rocks: [] }, target: { reach: true, stars: true, maxBlocks: 3 } },
              { prompt: '조건 블록(막히면 오른쪽으로 돌기)을 반복 안에 넣어, 막혀도 방향을 바꿔 깃발에 닿게 해요.', toolOptions: { cols: 4, rows: 4, start: { x: 0, y: 0, dir: 'E' }, goal: { x: 3, y: 3 }, stars: [[1, 0], [3, 2]], rocks: [], blocks: ['fwd', 'left', 'right', 'rep', 'if'] }, target: { reach: true, stars: true, use: ['if'] } }),
            { type: 'choice', prompt: '셔틀 요구에 이미 기프티콘을 보냈을 때 할 일은?', options: ['보낸 기록도 남겨 두고 어른에게 알린다', '늦었으니 계속 보낸다', '아무에게도 말하지 않는다'], answer: 0, difficulty: 0.15, explain: '보낸 기록도 증거예요. 지금 알리면 멈출 수 있어요.' },
            { type: 'short', prompt: '학교폭력 신고·상담 창구를 활동지에 옮겨 적고, 함께 알릴 어른 한 사람을 역할로 써요.' },
          ],
        },
        worksheet: {
          title: '갈취 대응 경로',
          items: [
            { type: 'blank', prompt: '대응 경로를 채워요.', text: '거절 → ___ → 알리기 → ___', answer: '기록, 학교폭력 신고·상담 창구' },
            { type: 'blank', prompt: '창구를 적어 두어요.', text: '학교폭력 신고·상담 창구: ___', answer: '(선생님이 알려 준 번호)' },
          ],
        },
        notes: '교구는 글 블록을 잇지 못한다 — 길 찾기 판(별 = 거절·기록·알리기, 깃발 = 신고·상담 창구, 바위 = 다시 보내기)으로 바꿨다. ' + LINE_NOTE,
      }),
    );
  }

  // ==== 8학년 · 무리 안의 서열과 "다들 괜찮은 줄 알았다" (bully.m.g8-hierarchy) ====
  {
    const M = MK('g8-hierarchy', [8]);
    const POLL = [['속으로 "놀리는 거 싫다"', 72], ['겉으로 반대한 사람', 8]];
    const GROUP = { grid: [6, 4], title: '가상 무리 6명의 관계도', places: [
      { name: '무리 대장 도하', icon: 'castle', at: [2, 1] }, { name: '대장 옆 둘', icon: 'dot', at: [3, 1] },
      { name: '말을 듣기만 하는 소율', icon: 'dot', at: [0, 3] }, { name: '눈치 보는 예준', icon: 'dot', at: [5, 0] },
      { name: '무리에서 빠지려는 윤슬', icon: 'house', at: [5, 3] }, { name: '대장 말에 웃는 하나', icon: 'dot', at: [2, 2] },
    ] };
    const GROUP4 = Object.assign({}, GROUP, { places: GROUP.places.filter((p) => ['무리 대장 도하', '말을 듣기만 하는 소율', '눈치 보는 예준', '무리에서 빠지려는 윤슬'].includes(p.name)) });
    const D1 = { text: '무리 대장 도하가 단톡방에 "윤슬 빼고 새 방 만들자"라고 썼다. 무리 다섯 명 모두 아무 말이 없다. 나는 속으로 싫다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'follow', text: '다들 가만있으니 새 방에 들어간다', result: '윤슬만 빠진 새 방이 생긴다.', impact: [{ who: '윤슬', text: '무리에서 밀려난다', tone: -1 }], why: '다들 괜찮은 줄 알지만 속으로는 싫을 수 있어요.', end: '침묵 속에 따라갔어요.',
        next: { text: '새 방에서 도하가 윤슬 이야기를 하며 웃는다. 예준이 나에게 따로 "이거 좀 그렇지 않냐"라고 보냈다.', ask: '이제 어떻게 할까?', choices: [
          { id: 'agree', text: '예준에게 "나도 싫었어. 같이 말하자"라고 답한다', result: '둘이 함께 말할 용기를 낸다.', impact: [{ who: '반대하는 사람', text: '한 명에서 두 명이 된다', tone: 1 }], end: '속마음을 서로 확인했어요.',
            next: { text: '둘이 함께 말하기로 했다.', choices: [
              { id: 'both', text: '둘이 방에 "윤슬도 다시 넣자, 빼는 건 아니야"라고 쓴다', result: '소율도 "맞아"라고 쓴다. 도하가 머쓱해한다.', impact: [{ who: '윤슬', text: '다시 무리에 낀다', tone: 1 }] },
              { id: 'wait', text: '누가 먼저 하겠지 하고 기다린다', result: '아무도 쓰지 않는다.', why: '서로 기다리면 침묵이 이어져요.' }] } },
          { id: 'cover', text: '"괜히 문제 만들지 말자"라고 답한다', result: '예준도 입을 다문다.', impact: [{ who: '윤슬', text: '혼자 남는다', tone: -1 }], why: '속마음이 같은 사람이 있으면 함께 목소리를 낼 수 있어요.' }] } },
      { id: 'joke', text: '"ㅋㅋ 왜 그래"라고 농담처럼 넘긴다', result: '도하가 "그냥 하자"라고 밀어붙인다.', impact: [{ who: '윤슬', text: '빠진 채 방이 생긴다', tone: -1 }], why: '농담으로 넘기면 반대인지 알아듣지 못해요.', ending: '농담은 반대가 되지 못했어요.' },
      { id: 'private', text: '도하에게 따로 "윤슬 빼는 건 아니지 않아?"라고 보낸다', result: '도하가 "다들 괜찮대"라고 답한다.', impact: [{ who: '도하', text: '반대 의견을 처음 듣는다', tone: 0 }], end: '대장에게 따로 반대했어요.',
        next: { text: '도하가 "다들 괜찮대, 너만 그래"라고 답한다.', ask: '어떻게 할까?', choices: [
          { id: 'check', text: '다른 친구들에게 따로 "솔직히 어때?"라고 물어본다', result: '셋이 "사실 나도 싫었어"라고 답한다.', impact: [{ who: '반대하는 사람', text: '사실은 넷이었다', tone: 1 }], end: '다들 괜찮은 줄 알았던 착각을 깼어요.',
            next: { text: '넷이 속으로 싫었다는 것을 알게 됐다.', choices: [
              { id: 'together', text: '넷이 함께 방에 "빼지 말자"라고 쓴다', result: '도하가 새 방을 지운다.', impact: [{ who: '윤슬', text: '따돌림을 피한다', tone: 1 }] },
              { id: 'secret', text: '알게 된 것만으로 만족하고 아무 말도 하지 않는다', result: '새 방이 그대로 생긴다.', why: '속마음을 모았으면 함께 목소리로 바꿔요.' }] } },
          { id: 'giveup', text: '"그래, 나만 그런가 보다" 하고 포기한다', result: '새 방이 생긴다.', impact: [{ who: '윤슬', text: '밀려난다', tone: -1 }], why: '"다들 괜찮다"는 말은 사실이 아닐 수 있어요.' }] } },
      { id: 'public', text: '방에 "한 명 빼고 방 만드는 건 따돌림이야"라고 쓴다', result: '잠깐 조용하더니 소율이 "나도 싫어"라고 쓴다.', impact: [{ who: '반대하는 사람', text: '한 명이 두 명이 된다', tone: 1 }], end: '모두 앞에서 반대했어요.',
        next: { text: '도하가 "너 진짜 왜 그래?"라고 쓴다. 다른 친구들이 지켜본다.', ask: '어떻게 할까?', choices: [
          { id: 'calm', text: '"다 같이 있는 방이면 좋겠어서"라고 차분히 쓴다', result: '예준도 "맞아"라고 쓴다.', impact: [{ who: '반 분위기', text: '침묵이 깨진다', tone: 1 }], end: '차분히 버텼어요.',
            next: { text: '도하가 따로 "두고 봐"라고 보냈다.', choices: [
              { id: 'tell', text: '그 메시지를 기록해 담임 선생님께 알린다', result: '선생님이 도하와 이야기하고 나를 살핀다.', impact: [{ who: '나', text: '보호를 받는다', tone: 1 }] },
              { id: 'fight', text: '"너나 조심해"라고 맞받아친다', result: '다툼이 커진다.', why: '보복이 걱정되면 맞받아치지 말고 어른에게 알려요.' }] } },
          { id: 'retreat', text: '"아 몰라, 마음대로 해"라고 물러선다', result: '소율도 다시 입을 다문다.', impact: [{ who: '윤슬', text: '혼자 남는다', tone: -1 }], why: '함께한 사람이 있으니 혼자 물러서지 않아도 돼요.' }] } }] };
    const R1 = [{ id: 'r1', text: '다들 아무 말 안 해도 속으로는 싫을 수 있다' }, { id: 'r2', text: '먼저 한 명이 말하면 두 번째가 따라오기 쉽다' },
      { id: 'r3', text: '서열은 자연스러운 것이니 따라야 한다', why: '서열이 한 명을 빼는 힘이 되면 따돌림이에요.' }, { id: 'r4', text: '반대하면 내가 빠지게 되니 가만있는 게 낫다', why: '혼자가 어렵다면 따로 묻거나 어른에게 알리는 길이 있어요.' }];
    const R1C = { reasons: [{ id: 'r5', text: '침묵한 길에서는 윤슬만 빠진 방이 생겼다' }, { id: 'r6', text: '속마음을 물은 길에서는 사실 넷이 싫어했다' }], ok: ['r5', 'r6'] };
    const ROLE = ['가해 주도', '동조', '강화', '방관', '피해'];
    const CASE = [
      { id: 'c1', text: '"윤슬 빼고 놀자"를 처음 꺼낸 도하', to: '가해 주도' }, { id: 'c2', text: '"그래, 걔 좀 그래"라고 거든 둘', to: '동조' },
      { id: 'c3', text: '도하 말에 크게 웃는 하나', to: '강화' }, { id: 'c4', text: '싫지만 아무 말 안 한 소율', to: '방관' },
      { id: 'c5', text: '이유도 모른 채 빠진 윤슬', to: '피해' }, { id: 'c6', text: '못 들은 척 휴대폰만 보는 예준', to: '방관' },
    ];
    const VOICE = ['표정반대', '따로말함', '함께말함', '모두앞'];

    ALL.push(
      // ---- 도입 ----
      M('intro.silent-poll', {
        title: '속마음과 겉 반응 가상 조사', method: '속마음과 겉 반응 가상 조사 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '두 막대(72%·8%) 수치만 함께 읽는다.', base: '두 막대의 차이를 읽고, 차이가 생기는 까닭을 시연 판 보기에서 고른다.', challenge: '\'다원적 무지\'라는 말로 차이를 한 문장 설명한다.' },
        intro: {
          teacher: '"가상의 우리 반에서 \'○○ 놀리는 거 싫다\'는 속마음은 72%인데, 겉으로 반대한 사람은 8%뿐이에요. 왜 이렇게 다를까요?" 시연 단추로 까닭(서로 다들 괜찮은 줄 안다)을 고르는 모습을 보인다. "싫으면 말했겠지"라는 말이 나오면 "내 옆 친구도 싫은지 모르는 채로 먼저 말하기 쉬울까요?"라고 되묻는다. 수치는 수업용 가상 값이다.',
          student: '가상 학급 조사에서 속마음과 겉 반응의 차이를 읽고, 그 차이가 왜 생기는지 생각해요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '가상 학급 조사 — 속마음과 겉 반응', unit: '%', xLabel: '응답', yLabel: '비율', max: 100, data: POLL, question: '두 막대가 크게 다른 까닭은?', choices: ['서로 다들 괜찮은 줄 알고 침묵한다', '대부분이 놀림을 좋아한다', '반대한 사람이 거짓말을 했다'] }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper-cut classroom where many students have small thought bubbles saying no while their mouths stay closed', banner: '속마음은 다를까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '72%·8%는 체계도 계획 글의 가상 값이다(화면 제목에 \'가상\').',
      }),
      M('intro.group-map', {
        title: '무리 관계도 읽기', method: '무리 관계도 읽기', tool: 'map', minutes: 6,
        levels: { easy: '인물 4명 관계도에서 이름을 보며 중심 인물과 주변 인물을 함께 짚는다.', base: '시연 판에서 인물 6명 관계도의 중심(대장)과 빠지려는 사람을 짚고, 서열이 드러나는 행동을 말한다.', challenge: '주변 인물이 목소리를 내기 어려운 까닭을 한 문장으로 말한다.' },
        intro: {
          teacher: '"이 관계도에서 말이 주로 시작되는 사람은 누구이고, 끝자리에 있는 사람은 누구일까요?" 시연 단추로 대장 자리와 빠지려는 사람 자리에 핀이 꽂히는 모습을 보인다. "서열은 자연스러운 것"이라는 말이 나오면 "서열이 한 사람을 빼는 힘으로 쓰인다면 어떨까요?"라고 되묻는다. 인물은 모두 가상이고 실제 우리 반 무리와 견주지 않는다.',
          student: '가상 무리 6명의 관계도에서 중심과 주변 인물을 찾고, 서열이 드러나는 행동을 생각해요.',
          demo: { tool: 'map', options: GROUP, sequence: [{ place: '무리 대장 도하' }, { place: '무리에서 빠지려는 윤슬' }] },
          art: { draw: 'a paper-cut seating chart with one large star in the middle and small figures around it, one figure at the far corner', banner: '누가 가운데, 누가 끝?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '실제 학급 무리를 떠올리게 하지 않는다. ' + SAFE_NOTE,
      }),

      // ---- 활동 ----
      M('act.speak-dilemma', {
        title: '무리에서 먼저 반대할까', method: '무리에서 먼저 반대할지 갈림길 따라가기', tool: 'dilemma', minutes: 15,
        levels: { easy: '갈림 2번까지 가고, 고를 때마다 윤슬과 반대하는 사람 수에 생기는 영향이 바로 보인다.', base: '갈림 3번까지 가고, 영향 표시는 맞힌 뒤에만 보인다. 끝에서 근거를 고른다.', challenge: '갈림 3번 뒤 침묵한 길의 결말과 견주는 근거 카드까지 고르고, 두 번째 동의자가 생기는 길을 활동지에 정리한다.' },
        activity: {
          title: '무리에서 먼저 반대할까', tool: 'dilemma',
          teacher: '"다섯 명 모두 조용했는데, 정말 다섯 명 모두 괜찮았을까요?" 학생마다 한 길을 끝까지 가 본 뒤 침묵한 길·따로 물은 길·모두 앞에서 말한 길을 견주게 한다. "반대하면 나만 튄다"는 학생에게 "따로 물어보니 넷이 싫었다면, 튀는 쪽은 누구였을까요?"라고 되묻는다. 모두 앞에서가 어렵다면 따로 묻기·어른에게 알리기도 목소리라는 점을 짚는다.',
          task: '무리 대장이 한 친구를 빼자고 하자 다들 조용한 장면에서 세 번 골라, 결과와 다른 친구들의 반응을 따라가요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL({ easy: '무리에서 한 친구를 빼자고 해요. 두 번 골라 결과를 보고 근거를 고르세요.', base: '무리에서 한 친구를 빼자고 해요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 간 뒤, 침묵한 길의 결말과 견주는 근거까지 고르세요.' },
              '먼저 반대할까', D1, [['private', 'check', 'together'], ['public', 'calm', 'tell'], ['follow', 'agree', 'both']], R1, ['r1', 'r2'], R1C),
            ONE('"너만 그래"라는 말을 들었을 때 알맞은 길을 고르세요.', '"너만 그래"', { text: '대장이 "다들 괜찮대, 너만 예민해"라고 한다.', ask: '어떻게 할까?', motif: 'house', choices: [
              { id: 'ask', text: '다른 친구들의 속마음을 따로 물어본다', result: '"사실 나도 싫었어"라는 답이 둘 온다.', impact: [{ who: '나', text: '혼자가 아님을 안다', tone: 1 }], ending: '착각을 확인했어요.' },
              { id: 'believe', text: '정말 나만 그런가 보다 하고 입을 다문다', result: '모두가 서로 괜찮은 줄 안다.', why: '"다들 괜찮다"는 말은 확인하지 않은 착각일 수 있어요.' }] }, ['ask'],
              [{ id: 'q1', text: '침묵은 찬성이 아닐 수 있다' }, { id: 'q2', text: '대장이 다들 괜찮다고 했으니 사실이다', why: '대장도 다른 사람 속마음을 몰라요.' }], ['q1']),
            ONE('먼저 반대한 친구를 보았을 때 내 길을 고르세요.', '두 번째 사람', { text: '소율이 혼자 "빼는 건 아니야"라고 썼다. 방이 조용하다.', ask: '나는?', motif: 'house', choices: [
              { id: 'second', text: '"나도 같은 생각"이라고 쓴다', result: '예준도 따라 쓴다.', impact: [{ who: '소율', text: '혼자가 아니다', tone: 1 }], ending: '두 번째 목소리가 되었어요.' },
              { id: 'quiet', text: '소율이 알아서 하겠지 하고 가만있는다', result: '소율 혼자 대장의 눈총을 받는다.', why: '두 번째 사람이 생기면 첫 사람이 버틸 수 있어요.' }] }, ['second'], null, null,
              { conclude: '다들 조용해도 속으로는 싫을 수 있어요. 먼저 한 사람, 그리고 두 번째 사람이 침묵을 깨요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '두 번째로 동의하는 사람이 생기려면 무엇이 필요한지 한 문장으로 써요.' }],
          easy: [{ type: 'choice', prompt: '\'다원적 무지\'를 바르게 설명한 것은?', options: ['속으로는 다들 싫은데 서로 괜찮은 줄 알고 침묵하는 것', '모두가 정말 괜찮다고 생각하는 것'], answer: '속으로는 다들 싫은데 서로 괜찮은 줄 알고 침묵하는 것' }] },
        notes: SAFE_NOTE,
      }),
      M('act.structure-analysis', {
        title: '따돌림 구조 사례 분석', method: '따돌림 구조 사례 분석 지도', tool: 'mindmap', minutes: 15,
        levels: { easy: '역할 셋(가해 주도·방관·피해)에 인물 카드 3장을 나누고, 놓으면 바로 맞는지 알려 준다.', base: '역할 다섯 가지에 인물 카드 6장을 나누고, 구조를 지탱하는 행동 카드를 고른다.', challenge: '셋째 문항에서 한 고리를 끊으면 달라지는 점 카드를 이어 붙인다.' },
        activity: {
          title: '따돌림 구조 사례 분석', tool: 'mindmap',
          teacher: '"윤슬을 뺀 사람은 도하 한 명인데, 따돌림은 왜 여러 사람이 있어야 굴러갈까요?" 가상 사례의 인물 카드를 역할 가지에 나눈 뒤 \'이 사람이 하지 않았다면\'을 하나씩 따져 보게 한다. "피해 학생도 무리에 맞추면 된다"는 학생에게 "구조를 지탱하는 사람은 누구인가요?"라고 되묻는다. 역할은 바꿀 수 있는 행동이지 사람의 정체가 아니라고 짚는다.',
          task: '가상 따돌림 사례의 인물을 역할 가지에 나누고, 구조를 지탱하는 행동과 고리를 끊으면 달라지는 점을 찾아요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('가상 사례의 인물 카드를 역할 가지에 나누세요.', ROLE, CASE, { topic: '윤슬을 뺀 무리' }),
              SB('인물 카드 3장을 역할 가지에 나누세요.', ['가해 주도', '방관', '피해'], pickCards(CASE, ['c1', 'c4', 'c5']), { topic: '윤슬을 뺀 무리' })),
            IT(PB('따돌림 구조를 지탱하는 행동만 골라 담으세요.', '구조를 지탱하는 행동', [
              { id: 'p1', text: '대장 말에 크게 웃어 준다', ok: true }, { id: 'p2', text: '싫어도 아무 말 안 한다', ok: true },
              { id: 'p3', text: '"걔 좀 그래"라고 거든다', ok: true }, { id: 'p4', text: '빠진 친구에게 따로 말을 건다' }, { id: 'p5', text: '담임 선생님께 상황을 알린다' }], { topic: '구조를 지탱하는 것' })),
            IT(MB('고리를 끊는 행동과 그 결과를 이으세요.', [['웃어 주던 사람이 웃지 않음', '대장의 말이 힘을 잃는다'], ['침묵하던 사람이 따로 물어봄', '싫어하는 사람이 여럿임이 드러난다']], ['아무것도 달라지지 않는다'], { topic: '고리 끊기' }),
              null,
              MB('고리를 끊는 행동과 그 결과를 이으세요(더 많아요).', [['웃어 주던 사람이 웃지 않음', '대장의 말이 힘을 잃는다'], ['침묵하던 사람이 따로 물어봄', '싫어하는 사람이 여럿임이 드러난다'], ['거들던 둘이 그만둠', '대장 혼자 남는다'], ['누군가 어른에게 알림', '학교가 상황을 살핀다']], ['아무것도 달라지지 않는다', '빠진 사람이 더 맞추면 된다'], { topic: '고리 끊기' }),
              { conclude: '따돌림은 주도하는 사람 한 명과 거드는·웃는·침묵하는 여러 행동이 함께 지탱해요. 고리 하나만 끊어도 구조가 흔들려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '따돌림 구조에서 내가 끊을 수 있는 고리 하나와 그 방법을 써요.' }] },
      }),
      M('act.norm-campaign', {
        title: '다들 싫어해 캠페인', method: '"사실 다들 싫어해" 캠페인 설계', tool: 'collage', minutes: 15,
        levels: { easy: '표어 자리를 둔 포스터 바탕을 조각 3개 이상으로 꾸민다(표어는 활동지).', base: '조각 5개 이상으로 꾸미되 수치(72%)를 강조할 별 조각을 넣고, 표어·수치를 활동지에 쓴다.', challenge: '포스터를 본 학생이 할 행동 한 줄을 활동지에 더하고, 밝은 색과 어두운 색이 맞닿게 꾸민다.' },
        activity: {
          title: '다들 싫어해 캠페인', tool: 'collage',
          teacher: '"72%가 속으로 싫다는 걸 모두가 알게 되면 무엇이 달라질까요?" 다원적 무지를 깨는 포스터의 세 요소(표어·수치·할 행동)를 정한 뒤 조각으로 바탕을 꾸미게 한다(교구에는 글자를 넣을 수 없어 문구는 활동지에 쓴다). "가상 수치를 실제처럼 쓰면 안 된다"는 점을 짚어 포스터에 \'가상 조사\'라고 밝히게 한다. 특정 무리나 학생을 떠올리게 하는 그림은 쓰지 않는다.',
          task: '가상 조사 수치를 넣어 "사실 다들 싫어해" 반 캠페인 포스터 바탕을 꾸미고, 표어·수치·할 행동은 활동지에 써요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '조각으로 포스터 바탕을 꾸미고 표어 자리를 비워 두세요.', toolOptions: { maxPieces: 14 }, target: { selfCheck: ['표어 자리를 비워 두었다', '특정 학생을 떠올리게 하지 않았다', '표어를 활동지에 썼다'], minPieces: 5 } },
              { prompt: '조각 3개 이상으로 포스터 바탕을 꾸미세요.', target: { selfCheck: ['표어 자리를 비워 두었다', '표어를 활동지에 썼다'], minPieces: 3 } }),
            IT({ prompt: '가상 조사 수치(72%)를 강조할 별 조각을 넣어 꾸미세요.', toolOptions: { maxPieces: 14 }, target: { has: [{ shape: 'star', min: 1 }], pieces: { min: 4 }, selfCheck: ['수치 자리를 별로 강조했다', '\'가상 조사\'라고 활동지에 밝혔다'] } }),
            IT({ prompt: '포스터를 본 학생이 할 행동이 보이게 꾸미고 점검하세요.', toolOptions: { maxPieces: 14 }, target: { selfCheck: ['할 행동을 활동지에 썼다', '겁주거나 망신 주는 그림이 없다'], minPieces: 4 } },
              null,
              { prompt: '밝은 색과 어두운 색 조각이 맞닿게 꾸미고, 할 행동 한 줄을 점검하세요.', target: { contrast: 'light-dark', selfCheck: ['할 행동을 활동지에 썼다', '겁주거나 망신 주는 그림이 없다', '멀리서도 보이게 대비를 주었다'], minPieces: 4 } },
              { conclude: '"사실 다들 싫어해"를 알리면 침묵이 찬성이 아니라는 것이 드러나 목소리를 내기 쉬워져요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '포스터 문구를 써요.', columns: ['칸', '문구'], cells: [['표어', ''], ['가상 조사 수치', ''], ['할 행동', '']], answer: '(예) "침묵은 찬성이 아니야", 속으로 싫다 72%(가상), 싫으면 옆 친구에게 먼저 물어보기' }] },
        notes: '교구는 글자를 넣지 못해 바탕만 꾸미고 문구는 활동지에 쓰게 했다. 72%는 가상 값이며 포스터에도 \'가상 조사\'를 밝힌다.',
      }),
      M('act.perspective-writing', {
        title: '주변 인물의 속마음 글', method: '주변 인물의 속마음 글 쓰기', tool: 'rubric-writing', minutes: 15,
        levels: { easy: '문장 틀로 세 문장(그때 상황·감정·다른 선택)을 쓴다.', base: '무리 주변 인물(소율) 입장에서 "그때 나는 왜 가만히 있었나"를 네 문장으로 쓰고 기준표(구조 요인·감정·다른 선택)로 점검한다.', challenge: '다음에 할 선택을 한 문장 더해 다섯 문장으로 쓴다.' },
        activity: {
          title: '주변 인물의 속마음 글', tool: 'rubric-writing',
          teacher: '"싫었는데도 가만있었던 소율의 마음속에는 무엇이 있었을까요?" 구조 요인(대장의 힘·다음은 나일까·다들 괜찮은 줄 앎)을 칠판에 적은 뒤 소율이 되어 쓰게 한다. "소율도 똑같이 나쁘다"고 쓰는 학생에게 "잘못을 주도한 사람과 침묵한 사람은 같은 자리일까요? 소율이 바꿀 수 있는 것은 무엇일까요?"라고 되묻는다. 자기 경험이 아니라 가상 인물의 글이다.',
          task: '가상 무리의 주변 인물 소율이 되어 "그때 나는 왜 가만히 있었나"를 쓰고, 구조 요인·감정·다른 선택이 들어갔는지 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(RW('소율이 되어 그때 가만있었던 까닭(구조 요인)을 두 문장으로 쓰세요.', { topic: '가상 인물 소율이 되어, 도하가 윤슬을 빼자고 할 때 가만있었던 까닭을 두 문장으로 쓰세요.', min: 25, max: 160, s: [2, 3], title: '속마음 ① 까닭' }, ['구조 요인(대장의 힘·눈치·착각)을 썼다', '내 경험이 아니라 소율의 글로 썼다', '누구도 깎아내리지 않았다']),
              RW('틀을 채워 소율이 가만있었던 까닭을 쓰세요.', { topic: '소율이 가만있었던 까닭을 쓰세요.', min: 15, max: 120, s: [1, 2], starter: '나는 ___ 할까 봐 가만히 있었다.' }, ['구조 요인을 썼다', '누구도 깎아내리지 않았다'])),
            IT(RW('소율의 감정과 할 수 있었던 다른 선택을 두 문장으로 쓰세요.', { topic: '그때 소율이 느낀 감정과 할 수 있었던 다른 선택을 두 문장으로 쓰세요.', min: 25, max: 160, s: [2, 3], title: '속마음 ② 감정과 선택' }, ['감정을 썼다', '다른 선택을 구체적으로 썼다'])),
            IT(RW('네 문장을 이어 소율의 속마음 글을 완성하세요.', { topic: '앞의 문장을 이어 소율의 "그때 나는 왜 가만히 있었나"를 네 문장으로 완성하세요.', min: 50, max: 240, s: [4, 5], title: '소율의 속마음' }, ['구조 요인을 썼다', '감정을 썼다', '다른 선택을 썼다', '누구도 깎아내리지 않았다']),
              RW('세 문장을 이어 소율의 속마음 글을 완성하세요.', { topic: '소율의 속마음 글을 세 문장으로 쓰세요.', min: 35, max: 200, s: [3, 4], starter: '나는 ___ 할까 봐 가만히 있었다. 그때 마음은 ___. 다른 선택은 ___.' }, ['구조 요인을 썼다', '다른 선택을 썼다']),
              RW('소율의 속마음 글에 다음에 할 선택을 한 문장 더해 완성하세요.', { topic: '소율의 속마음 네 문장에, 다음에 같은 일이 생기면 할 선택을 한 문장 더해 쓰세요.', min: 60, max: 280, s: [5, 5], title: '다음의 선택' }, ['구조 요인을 썼다', '감정을 썼다', '다른 선택을 썼다', '다음에 할 선택을 썼다']),
              { conclude: '침묵에는 까닭(대장의 힘·눈치·착각)이 있지만, 그 까닭을 알면 다음에는 다른 선택을 할 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '소율이 다음에 할 수 있는 선택을 한 문장으로 써요.' }] },
      }),

      // ---- 정리 ----
      M('wrap.voice-ladder', {
        title: '목소리 내기 단계 고르기', method: '목소리 내기 단계 고르기', tool: 'pattern', minutes: 7,
        levels: { easy: '단계 띠 세 칸(표정반대·□·함께말함)의 빈칸 하나를 채운다.', base: '단계 띠 네 칸(표정반대→따로말함→함께말함→모두앞)의 빈칸 둘을 채운다.', challenge: '빈칸 둘을 채운 뒤 다음 칸으로 가려면 필요한 것을 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"목소리 내기에도 사다리가 있어요. 지금 내가 설 수 있는 칸은 어디일까요?" 띠를 채운 뒤 손으로 지금 칸을 가리키게 한다. "모두 앞에서 말하지 못하면 목소리가 아니다"라는 학생에게 "표정으로 웃지 않는 것, 따로 물어보는 것도 침묵을 깨는 목소리예요"라고 말해 준다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'pattern', options: { mode: 'fill', seq: ['표정반대', null, '함께말함', null], palette: ['따로말함', '모두앞', '같이웃기'] }, prompt: '목소리 내기 단계 띠의 빈칸을 채워요(쉬운 칸에서 어려운 칸으로).', target: { fill: ['따로말함', '모두앞'] }, difficulty: 0.2 },
              { prompt: '목소리 내기 단계 띠 세 칸의 빈칸 하나를 채워요.', toolOptions: { seq: ['표정반대', null, '함께말함'], palette: ['따로말함', '같이웃기'] }, target: { fill: ['따로말함'] } }),
            { type: 'choice', prompt: '\'따로말함\' 칸에 알맞은 행동은?', options: ['대장에게나 친구에게 따로 "이건 아니지 않아?"라고 말한다', '단톡방에 모두 들으라고 욕을 쓴다', '아무에게도 아무 말 안 한다'], answer: 0, difficulty: 0.15, explain: '따로 말하기는 부담이 덜한 목소리예요.' },
            { type: 'short', prompt: '지금 내가 설 수 있는 칸과, 다음 칸으로 가려면 필요한 것을 써요.' },
          ],
        },
        worksheet: {
          title: '목소리 내기 단계',
          items: [
            { type: 'blank', prompt: '단계를 채워요.', text: '표정으로 반대 → ___ → 한 명과 함께 → ___', answer: '개인 메시지(따로 말하기), 모두 앞에서' },
            { type: 'short', prompt: '지금 내가 할 수 있는 칸을 써요.' },
          ],
        },
        notes: '교구 조각 글이 짧아 단계를 \'표정반대·따로말함·함께말함·모두앞\'으로 줄였다(계획 글: 표정으로 반대 → 개인 메시지 → 한 명과 함께 → 모두 앞에서).',
      }),
      M('wrap.exit-words', {
        title: '오늘의 낱말로 한 줄 정리', method: '오늘의 낱말 카드로 한 줄 정리', tool: 'wordcards', minutes: 7,
        levels: { easy: '낱말 카드 하나를 골라 뜻 칸에 놓는다.', base: '낱말 카드 둘을 골라 문장 빈칸에 넣어 한 문장을 잇는다.', challenge: '낱말 카드 셋을 이어 쓴다(셋째 출구 질문).' },
        wrap: {
          teacher: '"서열·동조·다원적 무지·목소리 — 이 낱말 둘로 오늘 배운 것을 한 문장으로 이을 수 있을까요?" 빈칸 문장을 채운 뒤 몇 명이 소리 내어 읽게 한다. 낱말을 친구를 부르는 별명처럼 쓰지 않는다고 짚는다(\'너 동조자\' 금지).',
          exitTicket: [
            IT(X('wordcards', FB('낱말 카드를 문장 빈칸에 넣어 오늘의 한 줄을 완성해요.', [['다들 괜찮은 줄 알고 침묵하는 것을 ___ 라고 한다.', '다원적 무지'], ['한 사람이 먼저 내는 ___ 가 침묵을 깬다.', '목소리']], ['서열']), { difficulty: 0.2 }),
              FB('낱말 카드를 문장 빈칸에 넣어요.', [['한 사람이 먼저 내는 ___ 가 침묵을 깬다.', '목소리']], ['서열']),
              FB('낱말 카드 셋을 문장 빈칸에 넣어 오늘의 한 줄을 완성해요.', [['무리 안 ___ 때문에 다들 눈치를 본다.', '서열'], ['다들 괜찮은 줄 알고 침묵하는 것을 ___ 라고 한다.', '다원적 무지'], ['한 사람이 먼저 내는 ___ 가 침묵을 깬다.', '목소리']], ['동조'])),
            { type: 'choice', prompt: '"다들 아무 말 안 하니 괜찮다고 여긴다"에 대한 생각으로 알맞은 것은?', options: ['침묵은 찬성이 아닐 수 있으니 속마음을 확인한다', '말이 없으면 모두 찬성한 것이다', '서열이 높은 사람 말이 맞다'], answer: 0, difficulty: 0.15, explain: '다원적 무지는 확인하지 않은 착각이에요.' },
            { type: 'short', prompt: '오늘의 낱말 둘 이상으로 내 한 줄을 써요.' },
          ],
        },
        worksheet: {
          title: '오늘의 낱말',
          items: [
            { type: 'table', prompt: '낱말의 뜻을 써요.', columns: ['낱말', '뜻'], cells: [['다원적 무지', ''], ['동조', '']], answer: '속으로 다들 싫은데 서로 괜찮은 줄 알고 침묵함, 남들을 따라 같은 행동을 함' },
            { type: 'short', prompt: '오늘의 낱말 둘로 한 문장을 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 8학년 · 신고를 망설이게 하는 생각과 신고자 보호 (bully.m.g8-report-barriers) ====
  {
    const M = MK('g8-report-barriers', [8]);
    const TATTLE = [
      { id: 't1', text: '친구가 숙제 안 한 걸 선생님께 이른다', to: '고자질에 가깝다' }, { id: 's1', text: '한 학생이 매일 돈을 뺏기는 걸 알린다', to: '안전을 위한 알림' },
      { id: 't2', text: '짝이 수업 중 몰래 사탕 먹은 걸 이른다', to: '고자질에 가깝다' }, { id: 's2', text: '단톡방에서 한 명이 계속 욕먹는 걸 알린다', to: '안전을 위한 알림' },
      { id: 't3', text: '친구가 줄을 한 번 늦게 선 걸 이른다', to: '고자질에 가깝다' }, { id: 's3', text: '체육관 뒤에서 누가 밀쳐지는 걸 알린다', to: '안전을 위한 알림' },
    ];
    const WORRY = [['보복이 걱정돼서', 38], ['고자질 같아서', 24], ['어떻게 할지 몰라서', 19], ['증거가 없어서', 11], ['별일 아닌 것 같아서', 8]];
    const D1 = { text: '방과 후 체육관 뒤에서 같은 학년 둘이 채아를 밀치며 가방을 뒤지는 걸 봤다. 지난주에도 봤다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'ignore', text: '괜히 끼면 보복당할까 봐 모른 척한다', result: '다음 주에도 같은 일이 일어난다.', impact: [{ who: '채아', text: '괴롭힘이 이어진다', tone: -1 }], why: '보복 걱정은 당연하지만, 알리는 길은 여러 가지예요.', end: '모른 척했어요.',
        next: { text: '한 달 뒤 채아가 학교에 자주 빠진다는 말을 듣는다.', ask: '이제 어떻게 할까?', choices: [
          { id: 'anon', text: '학교폭력 신고·상담 창구에 익명으로 상담한다', result: '상담 선생님이 어떻게 알릴지 함께 정해 준다.', impact: [{ who: '나', text: '안전하게 알릴 길을 찾는다', tone: 1 }], end: '늦었지만 익명 상담으로 시작했어요.',
            next: { text: '상담 선생님이 "본 것을 담임 선생님께 전해도 될까?"라고 묻는다.', choices: [
              { id: 'yes', text: '"제 이름은 알리지 말아 주세요"라고 부탁하고 동의한다', result: '학교가 채아를 보호하기 시작한다.', impact: [{ who: '채아', text: '보호를 받는다', tone: 1 }] },
              { id: 'no', text: '역시 무서워서 그만둔다', result: '괴롭힘이 계속된다.', why: '알린 사람을 보호하는 장치가 있어요. 걱정을 먼저 말해요.' }] } },
          { id: 'still', text: '이제 와서 말하기 늦었다며 그냥 둔다', result: '채아는 계속 혼자다.', impact: [{ who: '채아', text: '도움을 못 받는다', tone: -1 }], why: '늦어도 알리면 지금부터 막을 수 있어요.' }] } },
      { id: 'friend', text: '믿는 친구와 먼저 의논한다', result: '친구가 "같이 알리자"라고 한다.', impact: [{ who: '나', text: '혼자가 아니다', tone: 1 }], end: '친구와 함께 정하기로 했어요.',
        next: { text: '친구가 "그런데 누구한테 말하지?"라고 묻는다.', ask: '어떻게 할까?', choices: [
          { id: 'teacher', text: '둘이 함께 담임 선생님을 찾아간다', result: '선생님이 본 것을 듣고 "알려 줘서 고맙다"고 한다.', impact: [{ who: '채아', text: '보호가 시작된다', tone: 1 }], end: '함께 담임 선생님께 알렸어요.',
            next: { text: '며칠 뒤 그 둘이 "누가 꼰질렀냐"라며 주변을 살핀다.', choices: [
              { id: 'protect', text: '그 말도 담임 선생님께 다시 알린다', result: '학교가 보복을 막기 위해 나선다.', impact: [{ who: '나', text: '보호를 받는다', tone: 1 }] },
              { id: 'deny', text: '들킬까 봐 채아를 피한다', result: '채아가 다시 혼자가 된다.', why: '보복 걱정은 숨기지 말고 어른에게 말해요.' }] } },
          { id: 'post', text: '단톡방에 "체육관 뒤에서 이런 일 있음"이라고 올린다', result: '소문이 퍼지고 채아가 더 곤란해진다.', impact: [{ who: '채아', text: '모두에게 알려진다', tone: -1 }], why: '알리는 곳은 단톡방이 아니라 도울 수 있는 어른이에요.' }] } },
      { id: 'direct', text: '다음 날 담임 선생님께 직접 본 것을 말한다', result: '선생님이 "알려 줘서 고맙다, 네 이야기는 함부로 알리지 않을게"라고 한다.', impact: [{ who: '채아', text: '보호가 시작된다', tone: 1 }], end: '직접 알렸어요.',
        next: { text: '선생님이 "언제·어디서 봤는지 기억나니?"라고 묻는다.', ask: '어떻게 답할까?', choices: [
          { id: 'facts', text: '"지난주와 어제, 방과 후 체육관 뒤였어요"라고 본 대로 말한다', result: '선생님이 사실을 바탕으로 살핀다.', impact: [{ who: '채아', text: '정확한 도움을 받는다', tone: 1 }], end: '본 대로 말했어요.',
            next: { text: '선생님이 "더 아는 게 있으면 언제든 말해 줘"라고 한다.', choices: [
              { id: 'checkin', text: '채아에게 따로 "괜찮아?"라고 묻고 곁에 있는다', result: '채아가 조금 웃는다.', impact: [{ who: '채아', text: '혼자가 아니라고 느낀다', tone: 1 }] },
              { id: 'brag', text: '친구들에게 "내가 알렸어"라고 자랑한다', result: '소문이 나서 채아가 불편해한다.', why: '알린 일은 조용히 지켜요.' }] } },
          { id: 'guess', text: '보지 못한 것까지 짐작해 부풀려 말한다', result: '사실 확인이 늦어진다.', why: '본 것만, 모르는 건 모른다고 말해요.' }] } }] };
    const R1 = [{ id: 'r1', text: '알리는 것은 고자질이 아니라 안전을 위한 일이다' }, { id: 'r2', text: '학교는 알린 사람을 보호하는 방법을 갖고 있다' },
      { id: 'r3', text: '증거가 완벽해야 알릴 수 있다', why: '본 것·들은 것만으로도 도움이 시작돼요.' }, { id: 'r4', text: '알리면 반드시 보복당한다', why: '보복도 학교폭력으로 다뤄지고, 알린 사람은 보호받아요.' }];
    const R1C = { reasons: [{ id: 'r5', text: '모른 척한 길에서는 한 달 동안 괴롭힘이 이어졌다' }, { id: 'r6', text: '알린 길에서는 그 주에 보호가 시작됐다' }], ok: ['r5', 'r6'] };
    const ROUTES = { grid: [6, 4], title: '가상 알림 창구 지도', places: [
      { name: '담임 선생님(우리 교실)', icon: 'school', at: [0, 0] }, { name: '상담 선생님(Wee클래스)', icon: 'house', at: [2, 0] },
      { name: '보건실', icon: 'hospital', at: [4, 0] }, { name: '생활지도 선생님(교무실)', icon: 'office', at: [1, 2] },
      { name: '보호자(집)', icon: 'apartment', at: [4, 3] }, { name: HELP, icon: 'post', at: [5, 1] },
    ] };
    const ROUTES3 = Object.assign({}, ROUTES, { places: ROUTES.places.filter((p) => ['담임 선생님(우리 교실)', '상담 선생님(Wee클래스)', HELP].includes(p.name)) });
    const SAY = [
      { id: 'w1', text: '언제' }, { id: 'w2', text: '어디서' }, { id: 'w3', text: '누가' }, { id: 'w4', text: '무슨 일' }, { id: 'w5', text: '지금 상태' },
    ];

    ALL.push(
      // ---- 도입 ----
      M('intro.tattle-or-report', {
        title: '고자질과 신고 가르기', method: '고자질과 안전을 위한 알림 가르기', tool: 'sortboard', minutes: 6,
        levels: { easy: '상황 카드 4장을 교사와 함께 두 바구니로 나눈다.', base: '시연 판에서 상황 카드 6장이 고자질에 가깝다·안전을 위한 알림으로 나뉘는 모습을 보고 기준을 말한다.', challenge: '나눈 기준을 한 문장 정의("누군가 다치거나 괴롭힘이 되풀이될 때 알리는 것은 …")로 말한다.' },
        intro: {
          teacher: '"친구가 숙제 안 한 걸 이르는 것과, 한 학생이 매일 돈을 뺏기는 걸 알리는 것은 같을까요?" 시연 단추로 상황 카드가 두 바구니에 나뉘는 모습을 보인다. "알리는 건 다 고자질"이라는 말이 나오면 "누군가를 곤란하게 하려는 말과 누군가를 지키려는 말, 무엇이 다를까요?"라고 되묻는다. 오늘은 신고를 망설이게 하는 생각을 하나씩 바로잡는다.',
          student: '상황 카드를 고자질에 가까운 것과 안전을 위한 알림으로 나누고, 둘을 가르는 기준을 찾아요.',
          demo: { tool: 'sortboard', options: { slots: ['고자질에 가깝다', '안전을 위한 알림'], cards: strip(TATTLE) }, sequence: [{ sort: { '고자질에 가깝다': ['t1', 't2', 't3'], '안전을 위한 알림': ['s1', 's2', 's3'] } }] },
          art: { draw: 'a paper-cut pair of baskets on a shelf, one labeled with a small pointing finger and the other with a shield, students sorting paper cards', banner: '이르기와 알리기는 다를까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: SAFE_NOTE,
      }),
      M('intro.worry-chart', {
        title: '망설이는 까닭 가상 조사', method: '망설이는 까닭 가상 조사 그래프 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '항목 셋(보복·고자질·몰라서)만 함께 읽는다.', base: '시연 판에서 항목 다섯 가지 막대를 읽고 가장 큰 벽(보복 걱정)을 고른다.', challenge: '벽마다 낮출 학교의 방법(신고자 보호·익명 상담·알리는 차례 안내)을 하나씩 짝지어 말한다.' },
        intro: {
          teacher: '"보고도 알리지 않은 까닭 가운데 가장 큰 벽은 무엇일까요?" 가상 조사 그래프를 띄우고 시연 단추로 \'보복이 걱정돼서\'를 고르는 모습을 보인다. "보복이 걱정되니 안 알리는 게 맞다"는 말이 나오면 "학교가 알린 사람을 보호하고 보복도 학교폭력으로 다룬다면 어떨까요?"라고 되묻는다. 수치는 수업용 가상 값이다.',
          student: '"목격하고도 알리지 않은 까닭" 가상 조사 그래프를 읽고, 가장 큰 벽과 그 벽을 낮출 방법을 생각해요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', horizontal: true, title: '가상 조사 — 목격하고도 알리지 않은 까닭', unit: '%', xLabel: '까닭', yLabel: '비율', max: 50, data: WORRY, question: '가장 큰 벽은?', choices: WORRY.map((r) => r[0]) }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper-cut wall made of stacked bricks of different heights in front of a student, a small door in the wall', banner: '어떤 벽이 가장 높을까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '수치는 모두 수업용 가상 값이다(화면 제목에 \'가상\'). 신고자 보호·보복 금지는 파일 첫머리 \'사람 확인\' 목록에 있다.',
      }),

      // ---- 활동 ----
      M('act.report-dilemma', {
        title: '알릴까 말까 결과 추적', method: '알릴까 말까 갈림길에서 한 달 결과 따라가기', tool: 'dilemma', minutes: 15,
        levels: { easy: '갈림 2번까지 가고, 고를 때마다 채아와 나에게 생기는 영향이 바로 보인다.', base: '갈림 3번까지 가고, 영향 표시는 맞힌 뒤에만 보인다. 끝에서 근거를 고른다.', challenge: '갈림 3번 뒤 모른 척한 길의 결말과 견주는 근거 카드까지 고르고, 보복 걱정을 줄이는 선택 조합을 활동지에 쓴다.' },
        activity: {
          title: '알릴까 말까 결과 추적', tool: 'dilemma',
          teacher: '"보복이 걱정돼 모른 척한 길, 친구와 의논한 길, 익명 상담으로 시작한 길 — 한 달 뒤는 어떻게 달라졌나요?" 학생마다 한 길을 끝까지 가 본 뒤 견주게 한다. "알리면 반드시 보복당한다"는 학생에게 "보복 걱정까지 함께 말했을 때 학교가 무엇을 할 수 있었나요?"라고 되묻는다. 알린 사람은 잘한 것이고, 알린 일을 자랑하지 않고 조용히 지키는 것도 보호라고 짚는다.',
          task: '체육관 뒤에서 되풀이되는 괴롭힘을 본 가상 학생이 되어 세 번 골라, 한 달 뒤까지의 결과를 따라가요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL({ easy: '괴롭힘을 두 번째 봤어요. 두 번 골라 결과를 보고 근거를 고르세요.', base: '괴롭힘을 두 번째 봤어요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 간 뒤, 모른 척한 길의 결말과 견주는 근거까지 고르세요.' },
              '알릴까 말까', D1, [['direct', 'facts', 'checkin'], ['friend', 'teacher', 'protect'], ['ignore', 'anon', 'yes']], R1, ['r1', 'r2'], R1C),
            ONE('증거가 없다며 망설이는 친구에게 맞는 길을 고르세요.', '증거가 없을 때', { text: '친구 이안이 "본 건 맞는데 사진이 없어서 말해도 소용없어"라고 한다.', ask: '어떻게 답할까?', motif: 'house', choices: [
              { id: 'enough', text: '"본 것만 말해도 돼. 선생님이 나머지를 살피셔"', result: '이안이 담임 선생님께 본 것을 말한다.', impact: [{ who: '괴롭힘받는 학생', text: '도움이 시작된다', tone: 1 }], ending: '본 것만으로 알렸어요.' },
              { id: 'wait', text: '"그럼 사진 찍을 때까지 기다려"', result: '그사이 괴롭힘이 이어진다.', why: '증거를 모으려 기다리기보다 본 것을 먼저 알려요.' }] }, ['enough'],
              [{ id: 'q1', text: '본 것·들은 것만으로도 도움이 시작된다' }, { id: 'q2', text: '사진이 없으면 아무도 믿지 않는다', why: '학교가 사실을 살피는 절차가 있어요.' }], ['q1']),
            ONE('"너 고자질쟁이냐"라는 말을 들었을 때의 길을 고르세요.', '"고자질쟁이"', { text: '알린 뒤 한 친구가 "너 고자질쟁이냐?"라고 비꼰다.', ask: '어떻게 할까?', motif: 'house', choices: [
              { id: 'calm', text: '"누가 다칠 일이라 알린 거야"라고 짧게 말하고, 계속되면 선생님께 알린다', result: '친구가 더 말하지 않는다.', impact: [{ who: '나', text: '흔들리지 않는다', tone: 1 }], ending: '알린 까닭을 짧게 말했어요.' },
              { id: 'sorry', text: '"미안, 다시는 안 알릴게"라고 한다', result: '다음엔 아무도 알리지 않는 분위기가 된다.', why: '안전을 위해 알린 것은 사과할 일이 아니에요.' }] }, ['calm'], null, null,
              { conclude: '알리는 것은 고자질이 아니라 안전을 지키는 일이에요. 학교는 알린 사람을 보호하고, 보복도 학교폭력으로 다뤄요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '보복 걱정을 줄이면서 알릴 수 있는 방법 하나를 써요.' }],
          easy: [{ type: 'choice', prompt: '되풀이되는 괴롭힘을 봤을 때 알맞은 생각은?', options: ['알리는 것은 안전을 지키는 일이다', '알리면 고자질이니 모른 척한다'], answer: '알리는 것은 안전을 지키는 일이다' }] },
        notes: SAFE_NOTE,
      }),
      M('act.route-map', {
        title: '알리는 길 지도', method: '알리는 길 지도 만들기', tool: 'map', minutes: 15,
        levels: { easy: '창구 셋(담임·상담 선생님·신고·상담 창구)만 있는 지도에서 이름을 보며 상황에 맞는 곳을 짚는다.', base: '창구 여섯이 있는 지도에서 상황에 맞는 곳을 짚고, 시간대·익명 가능 여부 보기를 고른다.', challenge: '밤·주말에 쓸 경로를 짚고 보기를 고른 뒤, 활동지에 창구별 시간대를 적는다.' },
        activity: {
          title: '알리는 길 지도', tool: 'map',
          teacher: '"쉬는 시간, 방과 후, 밤 — 알리고 싶은 때마다 닿을 수 있는 곳이 다를까요?" 지도에 핀을 꽂을 때마다 그 창구가 열려 있는 때와 이름을 밝히지 않고 상담할 수 있는지를 말하게 한다. "학교 밖 창구는 큰일만 받는다"는 학생에게 "작아 보여도 되풀이되는 일이라면 상담부터 할 수 있어요"라고 말해 준다. 창구 번호는 판서한 것을 활동지에 옮긴다.',
          task: '가상 알림 창구 지도에서 상황마다 알릴 곳에 핀을 꽂고, 시간대와 익명 가능 여부를 골라요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(PIN('쉬는 시간에 본 일을 우리 반 일로 먼저 의논할 곳에 핀을 꽂으세요.', ROUTES, { place: '담임 선생님(우리 교실)' }),
              PIN('세 곳 가운데 우리 반 일을 먼저 의논할 곳에 핀을 꽂으세요.', ROUTES3, { place: '담임 선생님(우리 교실)' })),
            IT(PIN('이름을 밝히기 어려워 먼저 상담만 하고 싶을 때의 곳에 핀을 꽂고, 맞는 설명을 고르세요.', Object.assign({}, ROUTES, { ask: { q: '이 창구에 대한 설명으로 알맞은 것은?', choices: ['이름을 밝히지 않고 상담부터 할 수 있다', '큰 사건만 받는다', '보호자가 꼭 함께 와야 한다'] } }), { place: HELP, pick: 0 }),
              PIN('세 곳 가운데 이름을 밝히기 어려울 때 상담할 곳에 핀을 꽂으세요.', ROUTES3, { place: HELP })),
            IT(PIN('학교에서 직접 말하기 무서울 때 이야기를 먼저 들어 줄 곳에 핀을 꽂으세요.', ROUTES, { place: '상담 선생님(Wee클래스)' }),
              null,
              PIN('토요일 밤에 알게 된 일을 알릴 곳에 핀을 꽂고, 함께할 사람을 고르세요.', Object.assign({}, ROUTES, { ask: { q: '밤·주말에 함께 알릴 사람은?', choices: ['보호자', '단톡방 친구들', '아무도 없이 월요일까지 기다린다'] } }), { place: HELP, pick: 0 }),
              { conclude: '학교 안에는 담임·상담·생활지도 선생님이, 밤·주말에는 보호자와 학교폭력 신고·상담 창구가 있어요. 익명 상담부터 시작할 수도 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '창구마다 닿을 수 있는 때를 써요.', columns: ['창구', '닿는 때', '이름 안 밝히기'], cells: [['담임 선생님', '', ''], ['상담 선생님', '', ''], [HELP, '', '']], answer: '(예) 학교에 있을 때·밝힘, 학교에 있을 때·상담 가능, 방과 후·밤·주말·익명 상담 가능(선생님이 알려 준 번호)' }] },
        notes: '지도는 가상이다. ' + LINE_NOTE,
      }),
      M('act.what-to-say', {
        title: '알릴 때 전할 내용 차례', method: '알릴 때 전할 내용 차례 정하기', tool: 'timeline', minutes: 15,
        levels: { easy: '내용 카드 3장(언제·어디서·무슨 일)을 차례대로 놓고, 놓으면 바로 맞는지 알려 준다.', base: '내용 카드 5장(언제·어디서·누가·무슨 일·지금 상태)을 차례대로 놓고, 가상 사례 문장을 칸마다 붙인다(함정 카드가 섞인다).', challenge: '셋째 문항에서 모르는 부분은 모른다고 말하는 문장 카드까지 붙인다.' },
        activity: {
          title: '알릴 때 전할 내용 차례', tool: 'timeline',
          teacher: '"선생님께 \'걔네가 맨날 괴롭혀요\'라고만 하면 선생님은 무엇을 더 물으실까요?" 내용 카드를 놓은 뒤 가상 사례(급식실 앞에서 로아가 밀쳐짐)로 문장을 채우게 한다. "누가 했는지 확실하지 않으면 말하면 안 된다"는 학생에게 "모르는 건 \'잘 모르겠어요\'라고 말해도 돼요. 본 것만 말하면 돼요"라고 말해 준다.',
          task: '괴롭힘을 알릴 때 전할 내용 카드를 차례대로 놓고, 가상 사례로 칸마다 전할 문장을 붙여요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(OB('알릴 때 전할 내용 카드를 차례대로 놓으세요.', SAY, { axis: ['먼저', '나중'] }, [{ id: 'x1', text: '내 짐작' }]),
              OB('알릴 때 전할 내용 카드 3장을 차례대로 놓으세요.', [SAY[0], SAY[1], SAY[3]], { axis: ['먼저', '나중'] })),
            IT(MB('가상 사례의 문장을 내용 칸에 이으세요.', [['언제', '어제 점심시간 끝날 무렵'], ['어디서', '급식실 앞 복도'], ['누가', '같은 학년 둘이 로아에게'], ['무슨 일', '어깨를 밀치고 식판을 엎었다'], ['지금 상태', '로아가 오늘 결석했다']], ['걔네는 원래 나쁜 애들이다'], { axis: ['내용', '문장'] }),
              MB('가상 사례의 문장을 내용 칸 셋에 이으세요.', [['언제', '어제 점심시간 끝날 무렵'], ['어디서', '급식실 앞 복도'], ['무슨 일', '어깨를 밀치고 식판을 엎었다']], [], { axis: ['내용', '문장'] })),
            IT(PB('알릴 때 쓰기 좋은 문장만 골라 담으세요.', '알릴 때 좋은 문장', [
              { id: 'p1', text: '"제가 본 건 여기까지예요"', ok: true }, { id: 'p2', text: '"어제 점심시간에 봤어요"', ok: true },
              { id: 'p3', text: '"아마 매일 그럴 거예요"' }, { id: 'p4', text: '"걔네는 원래 그래요"' }]),
              null,
              PB('모르는 부분을 정직하게 말하는 문장까지 골라 담으세요.', '알릴 때 좋은 문장', [
                { id: 'p1', text: '"제가 본 건 여기까지예요"', ok: true }, { id: 'p2', text: '"어제 점심시간에 봤어요"', ok: true },
                { id: 'p5', text: '"누가 시켰는지는 잘 모르겠어요"', ok: true }, { id: 'p3', text: '"아마 매일 그럴 거예요"' }, { id: 'p4', text: '"걔네는 원래 그래요"' }]),
              { conclude: '알릴 때는 언제·어디서·누가·무슨 일·지금 상태를 본 대로 말하고, 모르는 것은 모른다고 말해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '가상 사례로 알릴 내용을 써요.', columns: ['내용', '문장'], cells: [['언제', ''], ['어디서', ''], ['누가', ''], ['무슨 일', ''], ['지금 상태', '']], answer: '(예) 어제 점심시간, 급식실 앞, 같은 학년 둘이, 밀치고 식판을 엎음, 오늘 결석' }] },
        notes: SAFE_NOTE,
      }),
      M('act.myth-rebuttal', {
        title: '망설임에 답하는 글', method: '망설임에 답하는 글 쓰기', tool: 'rubric-writing', minutes: 15,
        levels: { easy: '문장 틀로 두 문장(차이 설명·안전 근거)을 쓴다.', base: '"알리면 고자질이야"라는 친구 말에 답하는 네 문장을 쓰고 기준표(차이 설명·안전 근거·신고자 보호·존중하는 말투)로 점검한다.', challenge: '보복 걱정까지 다루는 문장을 더해 다섯 문장으로 쓴다.' },
        activity: {
          title: '망설임에 답하는 글', tool: 'rubric-writing',
          teacher: '"\'알리면 고자질이야\'라고 말하는 친구도 사실은 무언가가 걱정돼서일 수 있어요. 그 걱정까지 존중하며 답할 수 있을까요?" 친구를 비난하지 않는 말투로 쓰게 한다. "그냥 \'아니거든\' 하면 된다"는 학생에게 "그 말을 들은 친구가 다음에 알리고 싶어질까요?"라고 되묻는다.',
          task: '"알리면 고자질이야"라는 친구 말에 답하는 글을 쓰고, 차이 설명·안전 근거·신고자 보호·존중하는 말투를 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(RW('고자질과 안전을 위한 알림의 차이를 두 문장으로 쓰세요.', { topic: '"알리면 고자질이야"라는 친구에게, 고자질과 안전을 위한 알림이 어떻게 다른지 두 문장으로 쓰세요.', min: 25, max: 160, s: [2, 3], title: '답글 ① 차이' }, ['둘의 차이를 썼다', '친구를 비난하지 않았다', '안전과 이어 썼다']),
              RW('틀을 채워 차이를 쓰세요.', { topic: '고자질과 알림의 차이를 쓰세요.', min: 15, max: 120, s: [1, 2], starter: '고자질은 ___ 이지만, 알리기는 ___ 이야.' }, ['둘의 차이를 썼다', '친구를 비난하지 않았다'])),
            IT(RW('네 문장 답글을 완성하세요.', { topic: '차이 설명에 이어, 안전 근거와 알린 사람을 보호하는 장치를 더해 네 문장 답글을 완성하세요.', min: 50, max: 240, s: [4, 5], title: '답글 완성' }, ['둘의 차이를 썼다', '안전 근거를 썼다', '알린 사람을 보호한다는 내용을 썼다', '존중하는 말투로 썼다'], [['보호', '지켜']]),
              RW('세 문장 답글을 완성하세요.', { topic: '고자질과 알림의 차이와 안전 근거를 세 문장으로 쓰세요.', min: 35, max: 200, s: [3, 4] }, ['둘의 차이를 썼다', '안전 근거를 썼다'])),
            IT(RW('친구가 덧붙인 "근데 보복당하면 어떡해?"에 답하는 문장을 쓰세요.', { topic: '친구가 "근데 보복당하면 어떡해?"라고 덧붙였다. 이 걱정에 답하는 문장을 한두 문장으로 쓰세요.', min: 20, max: 140, s: [1, 2], title: '보복 걱정에 답하기' }, ['걱정을 먼저 알아주었다', '보호 방법(어른에게 다시 알리기 등)을 썼다']),
              null,
              RW('답글 네 문장에 보복 걱정까지 다루는 문장을 더해 완성하세요.', { topic: '"알리면 고자질이야"에 답하는 네 문장에, 보복 걱정을 다루는 문장을 하나 더해 다섯 문장으로 쓰세요.', min: 60, max: 280, s: [5, 5], title: '보복 걱정까지' }, ['둘의 차이를 썼다', '안전 근거를 썼다', '알린 사람을 보호한다는 내용을 썼다', '보복 걱정을 다뤘다', '존중하는 말투로 썼다'], [['보호', '지켜']]),
              { conclude: '망설이는 친구에게는 걱정을 알아주고, 알리는 것과 고자질의 차이, 알린 사람을 보호하는 장치를 차분히 말해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"알리면 고자질이야"라는 친구에게 할 한 문장을 써요.' }] },
      }),

      // ---- 정리 ----
      M('wrap.report-chant', {
        title: '"알리는 건 지키는 것" 리듬', method: '"알리는 건 지키는 것" 구호 리듬 치기', tool: 'keyboard', minutes: 7,
        levels: { easy: '구호 한 줄("보면 기억하고")을 4박 마디 하나 리듬으로 짓는다(박 수가 보인다).', base: '구호 두 줄("보면 기억하고, 기록하고 / 알린다, 지킨다")을 4박 마디 둘에 맞춰 짓는다.', challenge: '구호에 학교 창구 이름을 넣은 줄을 더해 4박 마디 셋으로 짓는다.' },
        wrap: {
          teacher: '"\'보면 기억하고, 기록하고, 알린다\' — 알리는 사람이 지키는 사람이라는 뜻을 리듬에 실어 볼까요?" 리듬 블록으로 박을 채운 뒤 모둠별로 손뼉과 함께 친다. "고자질 구호 같다"는 학생에게 "이 구호에서 지키는 대상은 누구인가요?"라고 되묻는다.',
          exitTicket: [
            IT(Object.assign(X('keyboard', BEAT('구호 "보면 기억하고, 기록하고 / 알린다, 지킨다"를 4박 마디 두 개 리듬으로 지어요.', { measures: 2, blocks: ['q', 'e', 'h', 'qr'] }, { beats: true, selfCheck: ['구호 글자에 맞춰 박을 나눴다', '모둠과 함께 손뼉으로 쳐 보았다'] })), { difficulty: 0.2 }),
              { prompt: '구호 한 줄 "보면 기억하고"를 4박 마디 하나 리듬으로 지어요.', toolOptions: { measures: 1, blocks: ['q', 'h', 'qr'], showBeats: true }, target: { beats: true, selfCheck: ['구호 글자에 맞춰 박을 나눴다'] } },
              { prompt: '학교 창구 이름을 넣은 줄을 더해 4박 마디 세 개 리듬으로 지어요.', toolOptions: { measures: 3, blocks: ['q', 'e', 'h', 'qr', 'er'] }, target: { beats: true, selfCheck: ['구호 글자에 맞춰 박을 나눴다', '학교 창구 이름을 넣었다', '모둠과 함께 손뼉으로 쳐 보았다'] } }),
            { type: 'choice', prompt: '"알리는 건 지키는 것"의 뜻으로 알맞은 것은?', options: ['괴롭힘을 알리면 친구의 안전을 지킬 수 있다', '알리면 내가 벌을 받지 않는다', '알리기는 고자질과 같다'], answer: 0, difficulty: 0.15, explain: '알리기는 안전을 지키는 행동이에요.' },
          ],
        },
        worksheet: {
          title: '알리는 건 지키는 것',
          items: [
            { type: 'blank', prompt: '구호를 완성해요.', text: '보면 ___, ___, 알린다', answer: '기억하고, 기록하고' },
            { type: 'short', prompt: '우리 학교 창구 이름을 넣은 구호 한 줄을 써요.' },
          ],
        },
        notes: '교구는 구호 글자를 치지 않는다 — 리듬 블록으로 4박 마디를 채우고, 구호 글은 문제 글·활동지에 적었다.',
      }),
      M('wrap.help-card', {
        title: '알림 창구 카드 정리', method: '알림 창구 카드 정리', tool: 'collage', minutes: 7,
        levels: { easy: '창구 둘을 담을 카드 바탕을 조각 3개 이상으로 꾸민다(창구 글은 활동지).', base: '오늘 지도에서 고른 창구 셋을 담을 카드 바탕을 조각 3개 이상(창구마다 아이콘 하나)으로 꾸미고 점검한다.', challenge: '친구에게 권할 말을 활동지에 덧붙이고 점검 항목 하나를 더 표시한다.' },
        wrap: {
          teacher: '"오늘 지도에서 고른 창구 세 곳 가운데, 밤에도 닿는 곳은 어디였나요?" 창구 이름과 닿는 때를 활동지에 쓰고 조각으로 카드 바탕을 꾸미게 한다(교구에는 글자를 넣을 수 없다). 창구 번호는 판서한 것을 옮겨 적고, 친구 이름·전화번호는 쓰지 않는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'collage', options: { maxPieces: 10, shapes: ['circle', 'square', 'rect', 'heart', 'star'] }, prompt: '알림 창구 셋의 아이콘 자리를 조각으로 꾸미고 점검해요(창구 글은 활동지에 써요).', target: { selfCheck: ['창구마다 아이콘 자리를 두었다', '창구 셋과 닿는 때를 활동지에 썼다', '창구 번호를 판서에서 옮겨 적었다'], minPieces: 3 }, difficulty: 0.2 },
              { prompt: '창구 둘의 아이콘 자리를 조각 3개 이상으로 꾸미고 점검해요.', target: { selfCheck: ['창구 둘을 활동지에 썼다'], minPieces: 3 } },
              { prompt: '창구 셋을 꾸미고, 친구에게 권할 말까지 점검해요.', target: { selfCheck: ['창구마다 아이콘 자리를 두었다', '창구 셋과 닿는 때를 활동지에 썼다', '창구 번호를 판서에서 옮겨 적었다', '친구에게 권할 말을 썼다'], minPieces: 3 } }),
            { type: 'choice', prompt: '이름을 밝히기 두려울 때 먼저 할 수 있는 일은?', options: ['학교폭력 신고·상담 창구에 익명으로 상담한다', '아무에게도 말하지 않는다', '단톡방에 공개로 올린다'], answer: 0, difficulty: 0.15, explain: '익명 상담부터 시작할 수 있어요.' },
          ],
        },
        worksheet: {
          title: '알림 창구 카드',
          items: [
            { type: 'table', prompt: '창구 셋과 닿는 때를 써요.', columns: ['창구', '닿는 때'], cells: [['', ''], ['', ''], ['', '']], answer: '(예) 담임 선생님·학교에 있을 때, 상담 선생님·학교에 있을 때, 학교폭력 신고·상담 창구·밤·주말' },
            { type: 'short', prompt: '알리기를 망설이는 친구에게 권할 말을 한 문장으로 써요.' },
          ],
        },
        notes: '교구는 글자를 넣지 못해 카드 바탕만 꾸미고 글은 활동지에 쓰게 했다. ' + LINE_NOTE,
      }),
    );
  }

  // ==== 8학년 · 조정자의 말과 회복적 서클 (bully.m.g8-mediator) ====
  {
    const M = MK('g8-mediator', [8]);
    const NEUTRAL = [
      { id: 'n1', text: '"네 말은 자리가 좁아 불편했다는 거구나"', to: '중립의 말' }, { id: 'b1', text: '"네가 먼저 그랬잖아"', to: '편드는 말' },
      { id: 'n2', text: '"둘 다 이야기해 줄래?"', to: '중립의 말' }, { id: 'b2', text: '"누가 봐도 주원이 잘못이지"', to: '편드는 말' },
      { id: 'n3', text: '"그때 어떤 마음이었어?"', to: '중립의 말' }, { id: 'b3', text: '"이안이 좀 참아"', to: '편드는 말' },
    ];
    const CIRCLE = [
      { id: 'c1', text: '여는 말' }, { id: 'c2', text: '약속(말하는 물건 든 사람만 말하기)' }, { id: 'c3', text: '이야기(무슨 일)' },
      { id: 'c4', text: '영향(누가 어떻게)' }, { id: 'c5', text: '바람(무엇이 필요)' }, { id: 'c6', text: '약속하기(앞으로)' }, { id: 'c7', text: '닫는 말' },
    ];
    const D1 = { text: '사물함 자리를 두고 주원과 이안이 다툰다. 주원은 "내 자리에 짐을 놨잖아", 이안은 "원래 비어 있었어"라고 한다. 나는 또래 조정자다.', ask: '어떤 질문으로 시작할까?', motif: 'house', choices: [
      { id: 'first', text: '"누가 먼저 그랬어?"', result: '둘이 동시에 "쟤가!"라고 외친다.', impact: [{ who: '두 사람', text: '목소리가 커진다', tone: -1 }], why: '누가 먼저인지 물으면 판정 싸움이 돼요.', end: '판정 싸움이 됐어요.',
        next: { text: '둘이 서로 손가락질을 한다.', ask: '이제 어떻게 할까?', choices: [
          { id: 'reset', text: '"잠깐, 한 사람씩 끝까지 말해 볼까? 주원부터"', result: '주원이 말하는 동안 이안이 기다린다.', impact: [{ who: '두 사람', text: '번갈아 말할 수 있다', tone: 1 }], end: '차례를 정해 다시 시작했어요.',
            next: { text: '주원이 "아침마다 짐 치우느라 지각할 뻔했어"라고 말했다.', choices: [
              { id: 'summary', text: '"네 말은 아침에 시간이 모자라 힘들었다는 거구나"라고 요약한다', result: '주원이 "응"이라고 하며 목소리를 낮춘다.', impact: [{ who: '주원', text: '들어 줬다고 느낀다', tone: 1 }] },
              { id: 'judge', text: '"그럼 이안이 잘못했네"', result: '이안이 화가 나 자리를 뜬다.', why: '조정자는 판정하지 않고 요약해요.' }] } },
          { id: 'decide', text: '"그럼 내가 정해 줄게, 주원 자리야"', result: '이안이 "넌 주원 편이잖아"라며 불만을 품는다.', impact: [{ who: '이안', text: '억울하다', tone: -1 }], why: '조정자가 판정하면 한쪽은 억울함이 남아요.' }] } },
      { id: 'each', text: '"한 사람씩 무슨 일이 있었는지 말해 줄래?"', result: '주원이 먼저 말하고 이안이 기다린다.', impact: [{ who: '두 사람', text: '이야기를 할 수 있다', tone: 1 }], end: '각자 이야기부터 물었어요.',
        next: { text: '이안이 "나는 빈 줄 알았어. 표시가 없었거든"이라고 말했다.', ask: '다음 질문은?', choices: [
          { id: 'reflect', text: '"이안은 빈 자리인 줄 알았다는 거구나. 주원은 그 말 듣고 어때?"', result: '주원이 "표시를 안 한 건 내 실수네"라고 한다.', impact: [{ who: '두 사람', text: '서로의 말을 듣는다', tone: 1 }], end: '요약하고 되물었어요.',
            next: { text: '둘이 서로의 사정을 알게 됐다.', choices: [
              { id: 'need', text: '"그럼 앞으로 무엇이 있으면 좋을까?"', result: '"사물함에 이름표를 붙이자"는 안이 나온다.', impact: [{ who: '두 사람', text: '함께 해결안을 찾는다', tone: 1 }] },
              { id: 'end', text: '"됐네, 둘 다 잘못이야"', result: '둘 다 기분이 상한 채 끝난다.', why: '둘 다 탓하기보다 해결안을 물어요.' }] } },
          { id: 'side', text: '"표시 없으면 써도 되지, 이안 말이 맞아"', result: '주원이 "너 이안 편이지?"라고 한다.', impact: [{ who: '주원', text: '억울하다', tone: -1 }], why: '편드는 말은 조정자를 믿지 못하게 해요.' }] } },
      { id: 'feel', text: '"둘 다 많이 불편했구나. 지금 어떤 마음이야?"', result: '주원 "짜증 나", 이안 "억울해"라고 말한다.', impact: [{ who: '두 사람', text: '감정이 드러난다', tone: 1 }], end: '마음부터 물었어요.',
        next: { text: '감정을 말하고 나니 조금 조용해졌다.', ask: '다음은?', choices: [
          { id: 'story', text: '"이제 무슨 일이 있었는지 한 명씩 들어 볼게"', result: '둘이 차례로 이야기한다.', impact: [{ who: '두 사람', text: '이야기를 할 수 있다', tone: 1 }], end: '차례대로 이야기를 들었어요.',
            next: { text: '이야기를 다 들었다. 이안이 갑자기 "그냥 내가 옮길게, 됐어?"라며 화를 낸다.', choices: [
              { id: 'slow', text: '"억지로 정하지 않아도 돼. 잠깐 쉬고 다시 이야기할까?"', result: '이안이 숨을 고르고 다시 앉는다.', impact: [{ who: '이안', text: '존중받는다', tone: 1 }] },
              { id: 'accept', text: '"그래, 그럼 끝"', result: '이안은 억울함을 안고 자리를 뜬다.', why: '화가 나서 한 양보는 해결이 아니에요. 쉬고 다시 이야기해요.' }] } },
          { id: 'lecture', text: '"화내면 안 돼, 둘 다 반성해"', result: '둘 다 입을 다문다.', why: '훈계는 대화를 닫아요.' }] } }] };
    const R1 = [{ id: 'r1', text: '조정자는 판정하지 않고 요약하고 되묻는다' }, { id: 'r2', text: '한 사람씩 끝까지 말하게 하면 목소리가 낮아진다' },
      { id: 'r3', text: '조정자가 맞는 쪽을 정해 줘야 끝난다', why: '판정하면 한쪽에 억울함이 남아요.' }, { id: 'r4', text: '화난 사람이 양보하면 해결된 것이다', why: '억지 양보는 해결이 아니에요.' }];
    const R1C = { reasons: [{ id: 'r5', text: '"누가 먼저?"로 시작한 길에서는 판정 싸움이 됐다' }, { id: 'r6', text: '각자 이야기를 들은 길에서는 이름표 안이 나왔다' }], ok: ['r5', 'r6'] };

    ALL.push(
      // ---- 도입 ----
      M('intro.neutral-words', {
        title: '편드는 말과 중립의 말', method: '편드는 말과 중립의 말 가르기', tool: 'wordcards', minutes: 6,
        levels: { easy: '조정자 대사 카드 4장을 교사와 함께 편드는 말·중립의 말로 가른다.', base: '시연 판에서 대사 카드 6장이 나뉘는 모습을 보고 까닭을 말한다.', challenge: '편드는 말 하나를 중립의 말로 고쳐 말한다.' },
        intro: {
          teacher: '"다툼을 돕는 친구가 \'네가 먼저 그랬잖아\'라고 하면, 들은 쪽은 그 친구를 믿을까요?" 시연 단추로 조정자 대사 카드가 편드는 말·중립의 말로 나뉘는 모습을 보인다. "조정자는 누가 맞는지 정해 주는 사람"이라는 말이 나오면 "판정을 들은 쪽은 마음이 풀릴까요?"라고 되묻는다. 조정자의 일은 판정이 아니라 듣고 요약하고 되묻는 것이라고 밝힌다.',
          student: '또래 조정자가 하는 말을 편드는 말과 중립의 말로 나누고, 편드는 말을 중립으로 고쳐 봐요.',
          demo: { tool: 'wordcards', options: { mode: 'sort', slots: ['편드는 말', '중립의 말'], cards: strip(NEUTRAL) }, sequence: [{ sort: { '편드는 말': ['b1', 'b2', 'b3'], '중립의 말': ['n1', 'n2', 'n3'] } }] },
          art: { draw: 'a paper-cut student standing between two others holding a balanced paper scale, speech bubbles on both sides', banner: '누구 편도 아닌 말', extra: [{ motif: 'leaf', x: 300, y: 96 }] },
        },
        notes: '또래 조정은 사소한 갈등에 쓰고, 학교폭력 사안은 어른에게 알린다고 함께 말한다.',
      }),
      M('intro.circle-rules', {
        title: '서클 약속 따라 하기', method: '서클 약속 따라 하기', tool: 'timer', minutes: 6,
        levels: { easy: '모둠이 한 바퀴(네 사람) 30초씩 말하고 듣는 연습을 한다.', base: '시연 판처럼 타이머를 30초·4번으로 맞추고 말하는 물건을 돌리며 한 바퀴 말하고, 서클 약속 차례를 본다.', challenge: '두 바퀴째에는 앞사람 말을 한 줄로 요약해 다음 사람에게 넘긴다.' },
        intro: {
          teacher: '"말하는 물건을 든 사람만 말하고, 나머지는 끝까지 듣는다 — 30초가 길게 느껴질까요, 짧게 느껴질까요?" 시연 단추로 타이머가 30초·4번으로 맞춰지고 약속 카드가 차례로 놓이는 모습을 보인 뒤, 주제(이번 주 좋았던 일)로 한 바퀴 해 본다. "말 안 하고 넘겨도 되냐"는 물음에는 "넘기는 것도 약속 안에 있어요"라고 답한다.',
          student: '말하는 물건이 돌 때 30초씩 차례로 말하고 듣는 서클 약속을 타이머로 연습해요. 주제는 이번 주 좋았던 일이에요.',
          demo: { tool: 'timer', options: { title: '서클 약속 연습', plan: { work: 20, rest: 0, rounds: 2 }, cards: ['물건 든 사람만 말하기', '원하면 넘기기', '끝까지 듣기'] }, sequence: [{ plan: { work: 30, rounds: 4 }, order: ['물건 든 사람만 말하기', '끝까지 듣기', '원하면 넘기기'] }] },
          art: { draw: 'a paper-cut circle of chairs with students passing a small paper talking stone, a timer in the center', banner: '말하는 물건이 돌면', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
        notes: '30초·한 바퀴 네 명은 수업 연습 약속 값이다. 주제는 갈등이 아닌 가벼운 것(좋았던 일)으로 한다.',
      }),

      // ---- 활동 ----
      M('act.mediation-dilemma', {
        title: '조정자가 되어 질문 고르기', method: '조정자가 되어 질문 고르기', tool: 'dilemma', minutes: 15,
        levels: { easy: '갈림 2번까지 가고, 고를 때마다 두 사람에게 생기는 영향이 바로 보인다.', base: '갈림 3번까지 가고, 영향 표시는 맞힌 뒤에만 보인다. 끝에서 근거를 고른다.', challenge: '갈림 3번(한쪽이 화내며 나가려 할 때의 대응 포함) 뒤 판정한 길의 결말과 견주는 근거 카드까지 고른다.' },
        activity: {
          title: '조정자가 되어 질문 고르기', tool: 'dilemma',
          teacher: '"\'누가 먼저?\'와 \'한 사람씩 말해 줄래?\', 첫 질문 하나로 대화가 어떻게 갈라지는지 볼까요?" 학생마다 조정자가 되어 한 길을 끝까지 가 본 뒤 견주게 한다. "결국 누가 맞는지 정해 줘야 끝난다"는 학생에게 "정해 준 뒤에도 둘은 같은 사물함 줄을 써야 해요. 무엇이 남을까요?"라고 되묻는다. 괴롭힘처럼 힘이 기운 일은 조정하지 않고 어른에게 알린다고 짚는다.',
          task: '사물함 자리 다툼에서 또래 조정자가 되어 질문을 세 번 골라, 두 사람의 반응이 어떻게 바뀌는지 따라가요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL({ easy: '조정자가 되어 질문을 두 번 골라 결과를 보고 근거를 고르세요.', base: '조정자가 되어 질문을 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 간 뒤, 판정한 길의 결말과 견주는 근거까지 고르세요.' },
              '사물함 자리 다툼', D1, [['each', 'reflect', 'need'], ['feel', 'story', 'slow'], ['first', 'reset', 'summary']], R1, ['r1', 'r2'], R1C),
            ONE('조정하면 안 되는 일을 만났을 때의 길을 고르세요.', '조정할 일이 아닐 때', { text: '조정을 하다 보니 한쪽이 몇 주째 여럿에게 짐을 빼앗기고 있었다는 것을 알게 됐다.', ask: '조정자는?', motif: 'house', choices: [
              { id: 'adult', text: '조정을 멈추고 담임 선생님께 알린다', result: '선생님이 상황을 살피고 그 학생을 보호한다.', impact: [{ who: '빼앗긴 학생', text: '보호를 받는다', tone: 1 }], ending: '괴롭힘은 어른에게 알렸어요.' },
              { id: 'keep', text: '조정으로 화해시키려고 계속한다', result: '빼앗긴 학생이 억지로 "괜찮아"라고 한다.', why: '힘이 기운 괴롭힘은 또래 조정이 아니라 어른의 도움이 필요해요.' }] }, ['adult'],
              [{ id: 'q1', text: '힘이 기운 괴롭힘은 어른에게 알린다' }, { id: 'q2', text: '조정자가 끝까지 해결해야 한다', why: '조정은 비슷한 힘의 갈등에 써요.' }], ['q1']),
            ONE('한쪽이 화내며 자리를 뜨려 할 때의 대응을 고르세요.', '자리를 뜨려 할 때', { text: '이안이 "말해 봐야 소용없어!"라며 일어난다.', ask: '조정자는?', motif: 'house', choices: [
              { id: 'pause', text: '"지금 많이 화났구나. 쉬었다가 점심 뒤에 다시 이야기할까?"', result: '이안이 고개를 끄덕이고 나간다.', impact: [{ who: '이안', text: '다시 올 길이 남는다', tone: 1 }], ending: '쉬는 시간을 두고 다시 만나기로 했어요.' },
              { id: 'grab', text: '"어디 가! 끝까지 해!"라며 붙잡는다', result: '이안이 더 크게 화를 낸다.', why: '억지로 붙잡으면 대화가 더 닫혀요.' }] }, ['pause'], null, null,
              { conclude: '조정자는 판정하지 않고 한 사람씩 듣고 요약하고 되물어요. 힘이 기운 괴롭힘이면 조정을 멈추고 어른에게 알려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '조정자가 첫 질문으로 쓰기 좋은 말을 한 문장으로 써요.' }],
          easy: [{ type: 'choice', prompt: '조정자가 하는 일로 알맞은 것은?', options: ['한 사람씩 듣고 요약해 되묻는다', '누가 맞는지 판정한다'], answer: '한 사람씩 듣고 요약해 되묻는다' }] },
        notes: SAFE_NOTE,
      }),
      M('act.circle-steps', {
        title: '회복적 서클 진행 차례', method: '회복적 서클 진행 차례 놓기', tool: 'timeline', minutes: 15,
        levels: { easy: '서클 단계 카드 4장(여는 말·이야기·약속하기·닫는 말)을 차례대로 놓고, 놓으면 바로 맞는지 알려 준다.', base: '단계 카드 7장을 차례대로 놓고 단계마다 진행자 말 카드를 붙인다(함정 카드가 섞인다).', challenge: '셋째 문항에서 단계마다 생길 수 있는 어려움 카드를 이어 붙인다.' },
        activity: {
          title: '회복적 서클 진행 차례', tool: 'timeline',
          teacher: '"서클은 잘못한 사람을 꾸짖는 자리일까요?" 단계 카드를 놓은 뒤 \'이야기 → 영향 → 바람\'에서 꾸짖는 말이 들어갈 자리가 있는지 찾게 한다. "약속만 정하면 되는데 왜 단계가 많냐"는 학생에게 "영향과 바람을 듣지 않고 정한 약속은 지켜질까요?"라고 되묻는다. 진행자 말에 판정하는 말은 함정이라고 미리 알린다.',
          task: '회복적 서클의 진행 단계 카드를 차례대로 놓고, 단계마다 진행자가 할 말을 붙여요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(OB('회복적 서클 단계 카드를 차례대로 놓으세요.', CIRCLE, { axis: ['시작', '끝'] }, [{ id: 'x1', text: '잘못한 사람 꾸짖기' }]),
              OB('서클 단계 카드 4장을 차례대로 놓으세요.', [CIRCLE[0], CIRCLE[2], CIRCLE[5], CIRCLE[6]], { axis: ['시작', '끝'] })),
            IT(MB('단계마다 진행자의 말을 이으세요.', [['여는 말', '"오늘은 서로 이야기를 듣는 자리예요"'], ['약속', '"물건을 든 사람만 말해요"'], ['영향', '"이 일로 누가 어떤 영향을 받았나요?"'], ['바람', '"앞으로 무엇이 필요할까요?"'], ['닫는 말', '"오늘 이야기해 줘서 고마워요"']], ['"누가 제일 잘못했나요?"'], { axis: ['단계', '진행자 말'] }),
              MB('단계 셋의 진행자 말을 이으세요.', [['여는 말', '"오늘은 서로 이야기를 듣는 자리예요"'], ['영향', '"이 일로 누가 어떤 영향을 받았나요?"'], ['닫는 말', '"오늘 이야기해 줘서 고마워요"']], [], { axis: ['단계', '진행자 말'] })),
            IT(PB('서클에서 진행자가 지킬 것만 골라 담으세요.', '진행자가 지킬 것', [
              { id: 'p1', text: '말하는 물건 차례를 지키게 한다', ok: true }, { id: 'p2', text: '말하기 싫은 사람은 넘기게 한다', ok: true },
              { id: 'p3', text: '잘못한 사람을 모두 앞에서 꾸짖는다' }, { id: 'p4', text: '진행자가 해결안을 정해 준다' }]),
              null,
              MB('단계마다 생길 수 있는 어려움을 이으세요.', [['이야기', '서로 끼어들어 말이 겹친다'], ['영향', '한쪽이 "난 아무렇지 않아"라고 숨긴다'], ['바람', '바라는 것이 서로 부딪친다'], ['약속하기', '지키기 어려운 약속을 정한다']], ['아무 어려움도 없다'], { axis: ['단계', '어려움'] }),
              { conclude: '회복적 서클은 여는 말 → 약속 → 이야기 → 영향 → 바람 → 약속하기 → 닫는 말. 꾸짖는 자리가 아니라 관계를 되살리는 자리예요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '서클 단계와 진행자 말을 써요.', columns: ['단계', '진행자 말'], cells: [['여는 말', ''], ['영향', ''], ['바람', ''], ['닫는 말', '']], answer: '(예) 서로 듣는 자리예요, 누가 어떤 영향을 받았나요, 무엇이 필요할까요, 이야기해 줘서 고마워요' }] },
      }),
      M('act.summary-writing', {
        title: '들은 말을 요약해 되묻기', method: '들은 말을 요약해 되묻기 쓰기', tool: 'rubric-writing', minutes: 15,
        levels: { easy: '당사자 발언 하나를 "네 말은 ~라는 거지?" 틀로 요약한다.', base: '당사자 발언 두 개를 각각 요약하고 기준표(감정 담기·판단 없음·짧게)로 점검한다.', challenge: '두 요약에서 공통 필요를 찾아 한 문장 쓴다.' },
        activity: {
          title: '들은 말을 요약해 되묻기', tool: 'rubric-writing',
          teacher: '"\'아침마다 짐 치우느라 지각할 뻔했다고!\'를 조정자가 요약하면 어떤 말이 될까요?" 감정과 사실만 담고 판정은 빼는 요약을 칠판에 하나 보인다. "요약은 그대로 따라 하는 것"이라는 학생에게 "짧게 줄이되 마음을 담아야 들은 사람이 \'맞아\'라고 해요"라고 말해 준다. 가상 인물의 발언이다.',
          task: '가상 당사자 두 사람의 발언을 듣고 "네 말은 ~라는 거지?"로 요약하는 문장을 쓰고, 감정 담기·판단 없음·짧게를 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(RW('주원의 발언을 요약해 되묻는 문장을 쓰세요.', { topic: '주원: "아침마다 내 사물함 앞에 짐이 있어서 치우다가 지각할 뻔했다고! 진짜 짜증 나." 이 말을 "네 말은 ~라는 거지?"로 요약해 쓰세요.', min: 12, max: 100, s: [1, 2], starter: '네 말은 ___ 라는 거지?', title: '요약 ① 주원' }, ['감정을 담았다', '판단하는 말을 넣지 않았다', '짧게 썼다'], [['거지', '거구나']])),
            IT(RW('이안의 발언을 요약해 되묻는 문장을 쓰세요.', { topic: '이안: "표시도 없길래 빈 줄 알았는데 갑자기 소리 지르니까 나도 억울하지." 이 말을 "네 말은 ~라는 거지?"로 요약해 쓰세요.', min: 12, max: 100, s: [1, 2], starter: '네 말은 ___ 라는 거지?', title: '요약 ② 이안' }, ['감정을 담았다', '판단하는 말을 넣지 않았다', '짧게 썼다'], [['거지', '거구나']]),
              RW('틀을 채워 이안의 말을 요약하세요.', { topic: '이안: "빈 줄 알았는데 갑자기 소리 지르니까 억울해." 이 말을 요약하세요.', min: 10, max: 80, s: [1, 2], starter: '네 말은 빈 줄 알았는데 ___ 라는 거지?' }, ['감정을 담았다', '판단하는 말을 넣지 않았다'])),
            IT(RW('판정이 들어간 요약을 판단 없는 요약으로 고쳐 쓰세요.', { topic: '조정자가 "결국 네가 표시를 안 해서 생긴 일이라는 거지?"라고 요약했다. 이 문장을 판단 없이 고쳐 쓰세요.', min: 12, max: 100, s: [1, 2], title: '고쳐 쓰기' }, ['판단하는 말을 뺐다', '감정을 담았다']),
              null,
              RW('두 요약에서 두 사람의 공통 필요를 찾아 한두 문장 쓰세요.', { topic: '주원과 이안의 요약을 보고, 두 사람이 함께 바라는 것(공통 필요)을 한두 문장으로 쓰세요.', min: 15, max: 120, s: [1, 2], title: '공통 필요' }, ['두 사람 모두의 필요를 썼다', '판단하는 말을 넣지 않았다']),
              { conclude: '좋은 요약은 짧고, 마음을 담고, 판정이 없어요. 요약을 들으면 말한 사람이 "맞아" 하며 목소리를 낮춰요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '주원의 말을 요약해 되묻는 문장을 옮겨 써요.' }] },
      }),
      M('act.roleplay-circle', {
        title: '서클 역할극 대본', method: '서클 역할극 대본 쓰기', tool: 'story', minutes: 15,
        levels: { easy: '대본 3컷(진행자 말) 빈칸을 채우고, 넣으면 바로 맞는지 알려 준다.', base: '진행자·당사자 둘·친구 하나가 나오는 대본 6컷의 빈칸을 채운다(함정 카드가 섞인다).', challenge: '셋째 문항에서 합의가 미뤄지는 결말과 다음 서클 약속 대사를 채운다.' },
        activity: {
          title: '서클 역할극 대본', tool: 'story',
          teacher: '"서클에서 친구 하나는 무엇을 하는 사람일까요? 편을 드는 사람일까요?" 대본을 채운 뒤 넷이 역할을 나눠 읽게 한다. "합의가 안 되면 서클은 실패"라는 학생에게 "다음 서클을 약속하고 끝나는 것도 한 걸음이에요"라고 말해 준다. 실제 다툰 친구들로 역할을 짜지 않는다.',
          task: '진행자·당사자 둘·친구 하나가 나오는 회복적 서클 대본의 빈칸을 채우고 모둠이 읽어 봐요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(FB('서클 대본 6컷의 빈칸에 알맞은 말 카드를 넣으세요.', [['1컷 진행자: "___"', '"말하는 물건을 든 사람만 말해요"', '진행자', 'star'], ['2컷 주원: "___"', '"짐 때문에 아침마다 힘들었어"', '주원', 'leaf'], ['3컷 진행자: "___"', '"주원은 아침이 힘들었다는 거구나"', '진행자', 'star'],
              ['4컷 이안: "___"', '"나는 빈 줄 알았어, 억울했어"', '이안', 'cloud'], ['5컷 친구 로아: "___"', '"둘 다 사물함 때문에 곤란했구나"', '로아', 'sun'], ['6컷 진행자: "___"', '"앞으로 무엇이 있으면 좋을까요?"', '진행자', 'star']], ['"이안이 잘못했네"']),
              FB('서클 대본 3컷(진행자 말)의 빈칸에 알맞은 말 카드를 넣으세요.', [['1컷 진행자: "___"', '"말하는 물건을 든 사람만 말해요"', '진행자', 'star'], ['2컷 진행자: "___"', '"주원은 아침이 힘들었다는 거구나"', '진행자', 'star'], ['3컷 진행자: "___"', '"앞으로 무엇이 있으면 좋을까요?"', '진행자', 'star']], [])),
            IT(PB('서클에서 친구 역할이 하기 좋은 말만 골라 담으세요.', '친구 역할의 말', [
              { id: 'p1', text: '"둘 다 곤란했구나"', ok: true }, { id: 'p2', text: '"이름표 붙이면 어때?"', ok: true },
              { id: 'p3', text: '"나는 주원 편이야"' }, { id: 'p4', text: '"이안은 원래 그래"' }])),
            IT(FB('합의가 미뤄지는 결말의 빈칸에 알맞은 말을 넣으세요.', [['이안: "아직 정하기 어려워" — 진행자: "___"', '"괜찮아요. 다음 주 이 시간에 다시 서클을 열까요?"', '진행자', 'star']], ['"그럼 오늘 안에 무조건 정해"']),
              null,
              FB('합의가 미뤄지는 결말과 다음 서클 약속의 빈칸 2개에 알맞은 말을 넣으세요.', [['이안: "아직 정하기 어려워" — 진행자: "___"', '"괜찮아요. 다음 주 이 시간에 다시 서클을 열까요?"', '진행자', 'star'], ['주원: "___"', '"그때까지 사물함 앞은 비워 둘게"', '주원', 'leaf']], ['"그럼 오늘 안에 무조건 정해"', '"이안이 양보해"']),
              { conclude: '서클은 판정 없이 차례로 듣고, 합의가 어려우면 다음 서클을 약속하고 끝낼 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '합의가 미뤄질 때 진행자가 할 말을 한 문장으로 써요.' }] },
      }),

      // ---- 정리 ----
      M('wrap.mediator-poster', {
        title: '조정자의 말 카드', method: '조정자의 말 카드 만들기', tool: 'collage', minutes: 7,
        levels: { easy: '조정자의 말 둘을 담을 카드 바탕을 조각 3개 이상으로 꾸민다(말은 활동지).', base: '조정자의 말 셋(한 명씩 말해 줄래·네 말은 ~구나·무엇이 필요할까)을 담을 카드 바탕을 조각 3개 이상으로 꾸미고 점검한다.', challenge: '뒷면에 피해야 할 말 하나를 활동지에 덧붙이고 점검 항목 하나를 더 표시한다.' },
        wrap: {
          teacher: '"다툼을 돕고 싶을 때 꺼내 볼 말 세 가지는 무엇일까요?" 조정자의 말을 활동지에 쓰고 말마다 아이콘 자리를 조각으로 두게 한다(교구에는 글자를 넣을 수 없다). \'네가 먼저 그랬잖아\'처럼 편드는 말은 뒷면 \'피해야 할 말\'로 보낸다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'collage', options: { maxPieces: 10 }, prompt: '조정자의 말 셋의 아이콘 자리를 조각으로 꾸미고 점검해요(말은 활동지에 써요).', target: { selfCheck: ['말마다 아이콘 자리를 두었다', '조정자의 말 셋을 활동지에 썼다', '편드는 말이 없다'], minPieces: 3 }, difficulty: 0.2 },
              { prompt: '조정자의 말 둘의 아이콘 자리를 조각 3개 이상으로 꾸미고 점검해요.', target: { selfCheck: ['조정자의 말 둘을 활동지에 썼다'], minPieces: 3 } },
              { prompt: '조정자의 말 셋을 꾸미고, 뒷면 피해야 할 말까지 점검해요.', target: { selfCheck: ['말마다 아이콘 자리를 두었다', '조정자의 말 셋을 활동지에 썼다', '편드는 말이 없다', '피해야 할 말을 뒷면에 적었다'], minPieces: 3 } }),
            { type: 'choice', prompt: '조정자의 말로 알맞은 것은?', options: ['"네 말은 아침이 힘들었다는 거구나"', '"누가 봐도 네가 잘못했어"', '"빨리 사과하고 끝내"'], answer: 0, difficulty: 0.15, explain: '요약하고 되묻는 말이 조정자의 말이에요.' },
          ],
        },
        worksheet: {
          title: '조정자의 말 카드',
          items: [
            { type: 'table', prompt: '조정자의 말 셋을 써요.', columns: ['차례', '말'], cells: [['1', ''], ['2', ''], ['3', '']], answer: '(예) 한 명씩 말해 줄래?, 네 말은 ~라는 거구나, 앞으로 무엇이 필요할까?' },
            { type: 'short', prompt: '조정자가 피해야 할 말 하나를 써요.' },
          ],
        },
        notes: '교구는 글자를 넣지 못해 카드 바탕만 꾸미고 말은 활동지에 쓰게 했다.',
      }),
      M('wrap.growth-graph', {
        title: '듣기 실력 자기 점검 그래프', method: '듣기 실력 자기 점검 그래프', tool: 'chart', minutes: 7,
        levels: { easy: '가상 모둠 기록에서 한 항목(끼어들기 횟수) 연습 전후 막대를 그린다(앞 막대는 그려져 있다).', base: '가상 모둠 기록에서 두 항목(끼어들기·요약 성공) 연습 전후 막대를 모두 그린다.', challenge: '그래프를 보고 다음 목표 수치를 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"서클 연습 전과 뒤에 끼어들기는 몇 번에서 몇 번으로 줄었나요?" 가상 모둠 기록 표를 보고 막대를 그린 뒤, 우리 모둠은 어땠는지 말로 견주게 한다. 줄지 않았어도 괜찮다고, 다음 목표를 정하는 것이 점검이라고 말해 준다. 기록 값은 수업용 가상 값이다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'build', title: '가상 모둠 기록 — 서클 연습 전후', unit: '번', xLabel: '항목', yLabel: '횟수', max: 10, scale: 1, data: [['끼어들기(전)', 7], ['끼어들기(뒤)', 2], ['요약 성공(전)', 1], ['요약 성공(뒤)', 5]], showTable: true }, prompt: '가상 모둠 기록 표를 보고 서클 연습 전후 막대를 그려요.', target: { build: true }, difficulty: 0.2 },
              { prompt: '끼어들기 횟수 연습 전후 막대를 그려요(앞 막대는 그려져 있어요).', toolOptions: { data: [['끼어들기(전)', 7], ['끼어들기(뒤)', 2]], given: [0] }, target: { build: true } }),
            { type: 'choice', prompt: '그래프로 알 수 있는 것은?', options: ['연습 뒤 끼어들기는 줄고 요약 성공은 늘었다', '연습 뒤 끼어들기가 늘었다', '아무것도 달라지지 않았다'], answer: 0, difficulty: 0.15, explain: '7번 → 2번, 1번 → 5번으로 바뀌었어요.' },
            { type: 'short', prompt: '다음 서클에서 우리 모둠의 목표(예: 끼어들기 1번 이하)를 써요.' },
          ],
        },
        worksheet: {
          title: '듣기 실력 점검',
          items: [
            { type: 'table', prompt: '가상 모둠 기록을 옮겨 써요.', columns: ['항목', '연습 전', '연습 뒤'], cells: [['끼어들기', '', ''], ['요약 성공', '', '']], answer: '7, 2 / 1, 5' },
            { type: 'short', prompt: '다음 서클의 목표를 써요.' },
          ],
        },
        notes: '기록 값은 수업용 가상 값이다. 학생 개인 기록을 그래프로 걷지 않는다.',
      }),
    );
  }

  // ==== 8학년 · 진짜 사과와 말뿐인 사과 (bully.m.g8-real-apology) ====
  {
    const M = MK('g8-real-apology', [8]);
    const AP = [
      { id: 'a1', text: '"사진 올린 건 내 잘못이야. 창피했겠다. 지금 지웠고 다신 안 올릴게"', to: '진짜 사과' },
      { id: 'b1', text: '"미안 ㅋㅋ 근데 그렇게 화낼 일이야?"', to: '말뿐인 사과' },
      { id: 'a2', text: '"놀린 건 내 잘못이야. 속상했겠다. 다신 안 놀릴게"', to: '진짜 사과' },
      { id: 'b2', text: '"선생님이 사과하래서, 미안"', to: '말뿐인 사과' },
    ];
    const D0 = { text: '채아가 이안의 사진을 허락 없이 단톡방에 올렸다. 다음 날 채아가 "미안한데, 너도 저번에 내 사진 올렸잖아"라고 말한다.', ask: '이안은 어떻게 반응할까?', motif: 'house', choices: [
      { id: 'hurt', text: '"그건 사과가 아니라 변명 같아"라고 말한다', result: '채아가 머뭇거린다.', impact: [{ who: '이안', text: '마음이 풀리지 않았다고 말할 수 있다', tone: 1 }],
        next: { text: '채아가 다시 말한다: "맞아, 사진 올린 건 내 잘못이야. 창피했을 것 같아. 지금 지울게."', ask: '이안은?', choices: [
          { id: 'time', text: '"알겠어. 마음 정리할 시간이 좀 필요해"', result: '채아가 기다리겠다고 한다.', impact: [{ who: '이안', text: '스스로 정할 수 있다', tone: 1 }] },
          { id: 'must', text: '사과를 받았으니 바로 괜찮다고 해야 한다고 생각한다', result: '이안의 마음은 그대로인데 괜찮은 척한다.', why: '용서는 받는 사람이 정해요. 시간이 필요하다고 말해도 돼요.' }] } },
      { id: 'fight', text: '"너도 똑같거든!"이라며 맞받아친다', result: '사과 자리가 말다툼이 된다.', why: '"근데 너도"가 붙으면 사과가 다툼으로 바뀌기 쉬워요.' }] };

    ALL.push(
      // ---- 도입 ----
      M('intro.apology-compare', {
        title: '사과문 견주기', method: '사과문 두 개 비교하기', tool: 'sortboard', minutes: 6,
        levels: { easy: '가상 사과문 둘(진짜 하나·말뿐 하나)을 교사와 함께 견준다.', base: '시연 판에서 가상 사과문 넷이 진짜 사과·말뿐인 사과로 나뉘는 모습을 보고 부족한 요소를 짚는다.', challenge: '말뿐인 사과 하나에 부족한 요소를 넣어 고쳐 말한다.' },
        intro: {
          teacher: '"\'미안 ㅋㅋ 근데 그렇게 화낼 일이야?\' — \'미안\'이 들어 있으니 사과일까요?" 시연 단추로 사과문 넷이 두 바구니에 나뉘는 모습을 보인다. "미안 한마디면 끝"이라는 말이 나오면 "진짜 사과에는 \'미안\' 말고 무엇이 더 들어 있나요?"라고 되묻는다. 오늘은 잘못 인정·영향 이해·바로잡기·되풀이하지 않기 네 요소를 찾는다.',
          student: '가상 사과문 넷을 진짜 사과와 말뿐인 사과로 나누고, 말뿐인 사과에 무엇이 빠졌는지 찾아요.',
          demo: { tool: 'sortboard', options: { slots: ['진짜 사과', '말뿐인 사과'], cards: strip(AP) }, sequence: [{ sort: { '진짜 사과': ['a1', 'a2'], '말뿐인 사과': ['b1', 'b2'] } }] },
          art: { draw: 'a paper-cut pair of letters, one with four small checkmarks and one with a crossed-out line, on a desk between two students', banner: '미안, 그다음은?', extra: [{ motif: 'heart', x: 300, y: 96 }] },
        },
        notes: SAFE_NOTE,
      }),
      M('intro.but-dilemma', {
        title: '"미안한데 너도…"가 붙으면', method: '"미안한데 너도…" 갈림길 고르기', tool: 'dilemma', minutes: 6,
        levels: { easy: '시연 판 첫 장면에서 두 갈래 반응의 결과를 함께 본다.', base: '시연 판 둘째 장면(다시 하는 진짜 사과)까지 따라가 결과를 본다.', challenge: '같은 장면을 진짜 사과로 바꾼 말을 짝과 지어 보고 결과를 견준다.' },
        intro: {
          teacher: '"\'미안한데, 너도 저번에…\' — 이 말을 들은 사람은 사과받았다고 느낄까요?" 시연 단추로 변명이라고 말한 길과 다시 하는 진짜 사과, 그리고 \'시간이 필요해\'라고 답하는 장면을 보인다. "사과를 받으면 무조건 용서해야 한다"는 말이 나오면 "마음이 풀리는 데 걸리는 시간은 누가 정할까요?"라고 되묻는다.',
          student: '사과에 "근데 너도"가 붙은 가상 장면에서 받는 쪽의 반응을 고르고, 진짜 사과로 바뀌면 어떻게 되는지 봐요.',
          demo: DEMO_DIL('"미안한데 너도…"', D0, [['hurt', 'time']], [{ id: 'k1', text: '변명이 붙으면 사과가 아니다' }, { id: 'k2', text: '용서는 받는 사람이 정한다' }]),
          art: { draw: 'a paper-cut speech bubble saying sorry with a second smaller bubble attached that points back at the listener', banner: '사과에 "근데"가 붙으면', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: SAFE_NOTE,
      }),

      // ---- 활동 ----
      M('act.apology-writing', {
        title: '네 요소 사과문 쓰기', method: '네 요소 사과문 쓰기', tool: 'rubric-writing', minutes: 15,
        levels: { easy: '문장 틀로 세 요소(인정·영향·약속)가 든 사과문을 쓴다.', base: '가상 상황(친구 사진을 허락 없이 단톡방에 올림)의 사과문을 쓰고 기준표(인정·영향·바로잡기·약속)로 점검한다.', challenge: '셋째 문항에서 변명 표현("근데·그래도·장난이었어")이 없는지 다시 점검하며 고쳐 쓴다.' },
        activity: {
          title: '네 요소 사과문 쓰기', tool: 'rubric-writing',
          teacher: '"\'올려서 미안\'과 \'허락 없이 올려서 창피했을 것 같아. 지금 지웠고 본 친구들에게도 지워 달라고 했어. 다시는 안 그럴게\', 무엇이 더 들어 있나요?" 네 요소를 칠판에 적고 쓰게 한다. "장난이었다고 쓰면 덜 미안해 보인다"는 학생에게 "\'장난이었어\'를 들은 사람은 자기 마음이 이해받았다고 느낄까요?"라고 되묻는다. 가상 상황이고 실제 친구 이름은 쓰지 않는다.',
          task: '가상 상황(친구 사진을 허락 없이 단톡방에 올림)에 대한 사과문을 쓰고, 인정·영향·바로잡기·약속이 들어갔는지 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(RW('사과문 첫 두 문장: 잘못 인정과 영향 이해를 쓰세요.', { topic: '친구 사진을 허락 없이 단톡방에 올린 가상 인물이 되어, 잘못을 인정하고 친구가 받은 영향을 헤아리는 두 문장을 쓰세요.', min: 25, max: 160, s: [2, 3], title: '사과 ① 인정과 영향' }, ['무엇을 잘못했는지 썼다', '상대가 받은 영향을 썼다', '변명을 붙이지 않았다']),
              RW('틀을 채워 사과문을 쓰세요.', { topic: '사과문을 세 문장으로 쓰세요.', min: 25, max: 160, s: [3, 4], starter: '허락 없이 ___ 은 내 잘못이야. ___ 했을 것 같아. 다시는 ___.' }, ['무엇을 잘못했는지 썼다', '상대가 받은 영향을 썼다', '다시 하지 않겠다고 썼다'])),
            IT(RW('사과문 네 문장을 완성하세요.', { topic: '앞의 두 문장에 바로잡기(지금 한 일)와 약속(되풀이하지 않기)을 더해 사과문을 네 문장으로 완성하세요.', min: 50, max: 240, s: [4, 5], title: '네 요소 사과문' }, ['무엇을 잘못했는지 썼다', '상대가 받은 영향을 썼다', '바로잡은 일을 썼다', '다시 하지 않겠다고 썼다'], [['다시는', '앞으로']])),
            IT(RW('변명이 섞인 사과를 고쳐 쓰세요.', { topic: '"미안, 근데 장난이었어. 너도 웃었잖아." 이 사과를 변명 없이 고쳐 두세 문장으로 쓰세요.', min: 25, max: 160, s: [2, 3], title: '고쳐 쓰기' }, ['변명을 뺐다', '잘못을 인정했다']),
              null,
              RW('내 사과문을 변명 표현 없이 다시 다듬어 완성하세요.', { topic: '내가 쓴 네 요소 사과문에 "근데·그래도·장난이었어" 같은 변명 표현이 없는지 다시 읽고, 다듬은 사과문을 네 문장으로 쓰세요.', min: 50, max: 240, s: [4, 5], title: '다듬은 사과문' }, ['무엇을 잘못했는지 썼다', '상대가 받은 영향을 썼다', '바로잡은 일을 썼다', '다시 하지 않겠다고 썼다', '변명 표현이 없다'], [['다시는', '앞으로']]),
              { conclude: '진짜 사과에는 잘못 인정, 영향 이해, 바로잡기, 되풀이하지 않기가 들어 있고, 변명이 없어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '내 사과문에 들어간 요소에 표시해요.', options: ['잘못 인정', '영향 이해', '바로잡기', '되풀이하지 않기'] }] },
      }),
      M('act.repair-plan', {
        title: '바로잡기 행동 계획', method: '바로잡기 행동 계획 블록 짜기', tool: 'block-coding', minutes: 15,
        levels: { easy: '곧은 길(블록 3개 안팎)로 별 둘(게시물 지우기·본 사람들에게 바로잡기)을 지나 깃발에 닿는다.', base: '꺾인 길로 별 셋(게시물 지우기·본 사람들에게 바로잡기·일주일 뒤 확인)을 모두 지나 깃발(관계 회복)에 닿는다.', challenge: '조건 블록(막히면 돌기)을 넣어, 받는 쪽이 원하지 않으면 방향을 바꿔(만나지 않고 기다리며) 깃발에 닿는 갈래를 만든다.' },
        activity: {
          title: '바로잡기 행동 계획', tool: 'block-coding',
          teacher: '"사과 말은 했어요. 그다음 손으로 할 일은 무엇일까요?" 판의 별은 \'게시물 지우기 → 본 사람들에게 바로잡기 → 일주일 뒤 확인\', 깃발은 \'관계 회복\', 바위는 \'없던 일처럼 굴기\'라고 읽어 준다. "사과했으니 이제 같이 놀자고 하면 된다"는 학생에게 "받는 쪽이 아직 원하지 않으면 어떻게 해야 할까요?"라고 되묻는다.',
          task: '사과 뒤 바로잡기 행동 계획을 길 찾기 판으로 짜요. 별(바로잡기 행동)을 모두 지나 깃발(관계 회복)에 닿고, 바위(없던 일처럼 굴기)는 피해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(ROUTE('별 셋(게시물 지우기·본 사람들에게 바로잡기·일주일 뒤 확인)을 지나 깃발(관계 회복)에 닿게 블록을 이으세요.', { cols: 5, rows: 3, start: { x: 0, y: 2, dir: 'E' }, goal: { x: 4, y: 0 }, stars: [[1, 2], [2, 1], [3, 0]], rocks: [[2, 2], [1, 0]] }, { stars: true }),
              ROUTE('별 둘(게시물 지우기·본 사람들에게 바로잡기)을 지나 깃발에 닿게 블록을 이으세요.', { cols: 4, rows: 2, start: { x: 0, y: 0, dir: 'E' }, goal: { x: 3, y: 0 }, stars: [[1, 0], [2, 0]], rocks: [] }, { stars: true, maxBlocks: 3 })),
            IT(ROUTE('바위(없던 일처럼 굴기)를 돌아 별(일주일 뒤 확인)을 지나 깃발에 닿으세요.', { cols: 4, rows: 3, start: { x: 0, y: 1, dir: 'E' }, goal: { x: 3, y: 1 }, stars: [[1, 2]], rocks: [[1, 1], [2, 1]] }, { stars: true })),
            IT(ROUTE('반복 블록으로 같은 걸음을 줄여 별 둘을 지나 깃발에 닿으세요.', { cols: 5, rows: 2, start: { x: 0, y: 0, dir: 'E' }, goal: { x: 4, y: 0 }, stars: [[1, 0], [3, 0]], rocks: [] }, { stars: true, use: ['rep'], maxBlocks: 3 }),
              null,
              ROUTE('조건 블록(막히면 오른쪽으로 돌기)을 반복 안에 넣어, 막혀도(받는 쪽이 아직 원하지 않아도) 방향을 바꿔 깃발에 닿으세요.', { cols: 4, rows: 4, start: { x: 0, y: 0, dir: 'E' }, goal: { x: 3, y: 3 }, stars: [[3, 1]], rocks: [], blocks: ['fwd', 'left', 'right', 'rep', 'if'] }, { stars: true, use: ['if'] }),
              { conclude: '사과 뒤에는 바로잡는 행동(지우기·바로잡기·확인)이 따라와요. 받는 쪽이 원하지 않으면 다가가지 않고 기다려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '바로잡기 행동 계획을 써요.', columns: ['차례', '할 일'], cells: [['1', ''], ['2', ''], ['3', ''], ['받는 쪽이 원하지 않으면', '']], answer: '게시물 지우기, 본 사람들에게 바로잡기, 일주일 뒤 확인 / 다가가지 않고 기다리기' }] },
        notes: '교구는 글 블록을 잇지 못한다 — 길 찾기 판(별 = 바로잡기 행동, 깃발 = 관계 회복, 바위 = 없던 일처럼 굴기)으로 바꿨다. 조건 갈래는 if 블록이다.',
      }),
      M('act.receiver-view', {
        title: '사과 받는 사람의 시간', method: '사과 받는 사람의 마음 변화 차례', tool: 'timeline', minutes: 15,
        levels: { easy: '마음 카드 3장(하루·일주일·한 달)을 차례대로 놓고, 놓으면 바로 맞는지 알려 준다.', base: '마음 카드 4장을 시간 차례대로 놓고, 시점마다 그 마음을 만든 일을 붙인다(함정 카드가 섞인다).', challenge: '셋째 문항에서 같은 일이 되풀이되면 무너지는 지점 카드를 고른다.' },
        activity: {
          title: '사과 받는 사람의 시간', tool: 'timeline',
          teacher: '"사과를 받은 이안의 마음은 그날 바로 다 풀렸을까요?" 마음 카드를 시간 차례로 놓은 뒤 \'일주일 뒤\' 마음을 만든 일(채아가 약속을 지킴)을 찾게 한다. "사과를 받으면 무조건 용서해야 한다"는 학생에게 "이안이 한 달 뒤에야 편해졌다면, 그동안 이안이 잘못한 걸까요?"라고 되묻는다. 용서는 받는 쪽의 선택이라는 점을 짚는다.',
          task: '가상 인물 이안이 사과를 받은 뒤 하루·일주일·한 달 동안 마음이 어떻게 바뀌는지 차례대로 놓고, 그 마음을 만든 일을 붙여요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(OB('이안의 마음 카드를 시간 차례대로 놓으세요.', [{ id: 'm1', text: '사과 직후: 아직 창피하고 얼떨떨하다' }, { id: 'm2', text: '하루 뒤: 사진이 지워져 조금 놓인다' }, { id: 'm3', text: '일주일 뒤: 약속을 지키는 걸 보고 믿기 시작한다' }, { id: 'm4', text: '한 달 뒤: 다시 편하게 인사한다' }], { axis: ['사과 직후', '한 달 뒤'] }),
              OB('이안의 마음 카드 3장을 시간 차례대로 놓으세요.', [{ id: 'm2', text: '하루 뒤: 사진이 지워져 조금 놓인다' }, { id: 'm3', text: '일주일 뒤: 약속을 지키는 걸 보고 믿기 시작한다' }, { id: 'm4', text: '한 달 뒤: 다시 편하게 인사한다' }], { axis: ['하루 뒤', '한 달 뒤'] })),
            IT(MB('시점마다 그 마음을 만든 일을 이으세요.', [['하루 뒤', '채아가 사진을 지웠다'], ['일주일 뒤', '채아가 약속대로 다시 올리지 않았다'], ['한 달 뒤', '채아가 본 친구들에게도 바로잡았다']], ['채아가 "이제 괜찮지?"라고 재촉했다'], { axis: ['시점', '일'] })),
            IT(PB('받는 사람을 존중하는 행동만 골라 담으세요.', '받는 사람을 존중하는 행동', [
              { id: 'p1', text: '용서할 시간을 기다린다', ok: true }, { id: 'p2', text: '약속을 꾸준히 지킨다', ok: true },
              { id: 'p3', text: '"사과했으니 이제 풀어"라고 재촉한다' }, { id: 'p4', text: '다른 친구에게 "나 사과했는데 쟤가 안 받아"라고 말한다' }]),
              null,
              PB('같은 일이 되풀이되면 마음이 무너지는 지점만 골라 담으세요.', '무너지는 지점', [
                { id: 'q1', text: '일주일 뒤 채아가 또 사진을 올렸다', ok: true }, { id: 'q2', text: '채아가 "그 정도로 뭘"이라고 말했다', ok: true },
                { id: 'q3', text: '채아가 약속을 지켰다' }, { id: 'q4', text: '채아가 기다려 주었다' }]),
              { conclude: '사과 뒤 마음이 풀리는 데는 시간이 걸리고, 용서는 받는 사람이 정해요. 되풀이되면 믿음이 무너져요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"사과를 받으면 무조건 용서해야 한다"는 말에 대한 내 생각을 한 문장으로 써요.' }] },
        notes: SAFE_NOTE,
      }),

      // ---- 정리 ----
      M('wrap.apology-card', {
        title: '사과의 네 요소 카드', method: '사과의 네 요소 카드 만들기', tool: 'collage', minutes: 7,
        levels: { easy: '두 요소(인정·약속)를 담을 카드 바탕을 조각 3개 이상으로 꾸민다(요소 글은 활동지).', base: '네 요소를 담을 카드 바탕을 요소마다 아이콘 조각 하나씩 4개 이상으로 꾸미고 점검한다.', challenge: '요소마다 예시 문장을 활동지에 쓰고 점검 항목 하나를 더 표시한다.' },
        wrap: {
          teacher: '"네 요소에 아이콘을 붙인다면 \'바로잡기\'는 어떤 모양이 어울릴까요?" 요소마다 아이콘 자리를 조각으로 두고 요소 글은 활동지에 쓰게 한다(교구에는 글자를 넣을 수 없다). \'용서 강요\'를 다섯째 요소로 넣고 싶은 학생에게 오늘 이안의 한 달을 떠올리게 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'collage', options: { maxPieces: 12 }, prompt: '사과의 네 요소 아이콘 자리를 조각으로 꾸미고 점검해요(요소 글은 활동지에 써요).', target: { selfCheck: ['요소마다 아이콘 자리를 두었다', '네 요소를 활동지에 썼다'], minPieces: 4 }, difficulty: 0.2 },
              { prompt: '두 요소의 아이콘 자리를 조각 3개 이상으로 꾸미고 점검해요.', target: { selfCheck: ['두 요소를 활동지에 썼다'], minPieces: 3 } },
              { prompt: '네 요소를 꾸미고, 요소마다 예시 문장까지 점검해요.', target: { selfCheck: ['요소마다 아이콘 자리를 두었다', '네 요소를 활동지에 썼다', '요소마다 예시 문장을 썼다'], minPieces: 4 } }),
            { type: 'choice', prompt: '진짜 사과의 네 요소가 아닌 것은?', options: ['용서를 재촉하기', '잘못 인정', '바로잡기'], answer: 0, difficulty: 0.15, explain: '용서는 받는 사람이 정해요.' },
          ],
        },
        worksheet: {
          title: '사과의 네 요소',
          items: [
            { type: 'table', prompt: '네 요소와 예시 문장을 써요.', columns: ['요소', '예시 문장'], cells: [['잘못 인정', ''], ['영향 이해', ''], ['바로잡기', ''], ['되풀이하지 않기', '']], answer: '(예) 허락 없이 올린 건 내 잘못이야, 창피했을 것 같아, 지금 지웠어, 다시는 안 그럴게' },
            { type: 'short', prompt: '사과를 받은 사람이 할 수 있는 말 하나를 써요(예: 시간이 필요해).' },
          ],
        },
        notes: '교구는 글자를 넣지 못해 카드 바탕만 꾸미고 요소 글은 활동지에 쓰게 했다.',
      }),
      M('wrap.peace-declaration', {
        title: '모둠 평화 선언문 한 문장', method: '모둠 평화 선언문 한 문장 다듬기', tool: 'wordcards', minutes: 7,
        levels: { easy: '낱말 카드 둘을 선언문 빈칸에 넣는다.', base: '낱말 카드 셋(조정·사과·목소리·알림 가운데)을 선언문 빈칸에 넣는다(함정 카드가 섞인다).', challenge: '선언문을 지킬 방법을 셋째 출구 질문에 덧붙인다.' },
        wrap: {
          teacher: '"8학년에 배운 조정·사과·목소리·알림 — 이 낱말로 우리 모둠 평화 선언문 한 문장을 만들어 볼까요?" 빈칸에 낱말을 넣은 뒤 모둠별로 소리 내어 읽게 한다. 선언문은 누군가를 겨냥하지 않고 모두가 지킬 행동으로 끝나야 한다고 짚는다.',
          exitTicket: [
            IT(X('wordcards', FB('낱말 카드를 선언문 빈칸에 넣어 모둠 평화 선언문을 완성해요.', [['다툼은 편들지 않는 ___ 으로 풀고,', '조정'], ['잘못은 네 요소가 든 ___ 로 바로잡고,', '사과'], ['괴롭힘을 보면 침묵 대신 ___ 을 낸다.', '목소리']], ['판정']), { difficulty: 0.2 }),
              FB('낱말 카드 둘을 선언문 빈칸에 넣어요.', [['잘못은 네 요소가 든 ___ 로 바로잡고,', '사과'], ['괴롭힘을 보면 침묵 대신 ___ 을 낸다.', '목소리']], [])),
            { type: 'choice', prompt: '모둠 평화 선언문으로 가장 알맞은 것은?', options: ['우리는 괴롭힘을 보면 함께 어른에게 알린다', '우리 모둠은 다른 모둠보다 착하다', '잘못한 사람은 모두 앞에서 혼낸다'], answer: 0, difficulty: 0.15, explain: '모두가 지킬 행동으로 끝나는 선언이 좋아요.' },
            { type: 'short', prompt: '선언문을 지킬 방법 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '모둠 평화 선언문',
          items: [
            { type: 'short', prompt: '우리 모둠 평화 선언문을 한 문장으로 써요.' },
            { type: 'short', prompt: '선언문을 지킬 방법 하나를 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 9학년 · 사진 합성 놀림과 얼굴 합성 영상 (bully.m.g9-photo-synthesis) — 사이버폭력 ====
  {
    const M = MK('g9-photo-synthesis', [9]);
    const VIEWS = [['1일', 40], ['3일', 160], ['1주', 310], ['2주', 360], ['1달', 390]];
    const D0 = { text: '현서가 반 친구 은호의 얼굴을 동물 몸에 합성한 이미지를 단톡방에 올리며 "웃기려고 만든 거야"라고 한다.', ask: '이건 장난일까?', motif: 'house', choices: [
      { id: 'harm', text: '은호가 동의하지 않았으니 놀림이다', result: '은호 화면에는 반 전체가 자기 얼굴로 웃는 모습이 보인다.', impact: [{ who: '은호', text: '반 전체 앞에서 웃음거리가 된다', tone: -1 }],
        next: { text: '친구 몇이 이미지를 저장해 다른 방에 보낸다.', ask: '누구에게 책임이 있을까?', choices: [
          { id: 'all', text: '만든 사람에게 가장 크고, 퍼뜨린 사람에게도 있다', result: '책임이 여러 사람에게 나뉘어 있다는 것이 보인다.', impact: [{ who: '은호', text: '퍼뜨림을 멈출 사람이 늘어난다', tone: 1 }] },
          { id: 'maker', text: '만든 사람에게만 있다', result: '퍼뜨린 친구들은 계속 보낸다.', why: '전달하는 사람도 확산을 만들어요.' }] } },
      { id: 'joke', text: '웃기려고 만든 거니 장난이다', result: '은호가 단톡방을 나간다.', why: '만든 사람의 의도보다 당사자가 받는 상처를 봐요.' }] };
    const D1 = { text: '반 단톡방에 다인의 얼굴을 합성한 놀림 영상이 올라왔다. 벌써 열 명이 봤다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'watch', text: '보고 넘긴다', result: '영상이 계속 남아 다른 친구들도 본다.', impact: [{ who: '다인', text: '모르는 사이 퍼진다', tone: -1 }], why: '보고 넘기면 영상이 남아 계속 퍼져요.', end: '보고 넘겼어요.',
        next: { text: '하루 뒤 영상이 다른 학교 학생들 단톡방에도 돌고 있다는 말을 듣는다.', ask: '이제 어떻게 할까?', choices: [
          { id: 'tellnow', text: '화면을 기록하고 담임 선생님께 알린다', result: '선생님이 다인을 보호하고 삭제 요청을 시작한다.', impact: [{ who: '다인', text: '보호를 받는다', tone: 1 }], end: '늦었지만 기록하고 알렸어요.',
            next: { text: '선생님이 "처음 올린 방 이름과 시간을 기억하니?"라고 묻는다.', choices: [
              { id: 'facts', text: '기록해 둔 화면으로 방 이름·시간을 보여 준다', result: '확산 경로를 따라 삭제가 빨라진다.', impact: [{ who: '다인', text: '퍼짐이 줄어든다', tone: 1 }] },
              { id: 'guess', text: '기억나는 대로 짐작해 말한다', result: '확인이 늦어진다.', why: '본 대로, 기록으로 말해요.' }] } },
          { id: 'none', text: '이미 퍼져서 할 수 있는 게 없다고 생각한다', result: '영상이 계속 돈다.', impact: [{ who: '다인', text: '피해가 커진다', tone: -1 }], why: '퍼진 뒤에도 어른과 함께 지울 수 있어요.' }] } },
      { id: 'save', text: '나중에 보려고 저장한다', result: '내 휴대폰에도 영상이 남는다.', impact: [{ who: '다인', text: '영상이 한 곳 더 남는다', tone: -1 }], why: '저장도 다시 퍼질 수 있는 사본을 만드는 일이에요.', ending: '내 저장본이 또 하나의 사본이 되었어요.' },
      { id: 'speak', text: '올린 사람에게 "이거 내려, 다인 동의 없잖아"라고 말한다', result: '올린 사람이 "장난인데"라며 머뭇거린다.', impact: [{ who: '다인', text: '멈출 기회가 생긴다', tone: 1 }], end: '올린 사람에게 멈추자고 했어요.',
        next: { text: '올린 사람이 "알았어" 하고 지웠지만 두 명이 이미 저장했다고 한다.', ask: '어떻게 할까?', choices: [
          { id: 'adult', text: '방 화면을 기록하고 담임 선생님께 알린다', result: '선생님이 저장한 친구들에게도 삭제를 요청하고 다인을 살핀다.', impact: [{ who: '다인', text: '보호를 받는다', tone: 1 }], end: '남은 사본까지 어른에게 알렸어요.',
            next: { text: '다인이 "누가 만든 거야?"라며 무척 힘들어한다.', choices: [
              { id: 'support', text: '"네 잘못 아니야. 선생님이 도와주실 거야"라며 곁에 있는다', result: '다인이 조금 마음을 놓는다.', impact: [{ who: '다인', text: '혼자가 아니라고 느낀다', tone: 1 }] },
              { id: 'expose', text: '만든 사람 이름을 단톡방에 공개한다', result: '몰이가 또 시작된다.', why: '공개 몰이 대신 어른에게 맡겨요.' }] } },
          { id: 'enough', text: '원본이 지워졌으니 됐다', result: '저장본이 다시 돈다.', why: '사본이 남아 있으면 어른에게 알려요.' }] } }] };
    const R1 = [{ id: 'r1', text: '저장·전달도 사본을 만들어 확산을 키운다' }, { id: 'r2', text: '기록하고 어른에게 알리면 사본까지 지울 수 있다' },
      { id: 'r3', text: '합성인 걸 다 알면 문제없다', why: '가짜인 걸 알아도 당사자는 웃음거리가 되고 상처를 받아요.' }, { id: 'r4', text: '앱으로 재미로 만든 건 괜찮다', why: '재미로 만들어도 동의 없이 남의 얼굴을 쓰면 피해가 생겨요.' }];
    const R1C = { reasons: [{ id: 'r5', text: '보고 넘긴 길에서는 다른 학교까지 퍼졌다' }, { id: 'r6', text: '멈추자고 한 길에서는 사본까지 지울 수 있었다' }], ok: ['r5', 'r6'] };
    const ROLE = ['만든 사람', '퍼뜨린 사람', '본 사람', '서비스(플랫폼)'];
    const CASE = [
      { id: 'c1', text: '선우의 사진을 합성 앱으로 고쳤다', to: '만든 사람' }, { id: 'c2', text: '합성 사진을 다른 학교에 전달했다', to: '퍼뜨린 사람' },
      { id: 'c3', text: '게시물에 "ㅋㅋ"를 달았다', to: '퍼뜨린 사람' }, { id: 'c4', text: '보고 아무 말 없이 넘겼다', to: '본 사람' },
      { id: 'c5', text: '신고를 받으면 게시물을 내린다', to: '서비스(플랫폼)' }, { id: 'c6', text: '처음 계정에 올렸다', to: '만든 사람' },
    ];

    ALL.push(
      // ---- 도입 ----
      M('intro.harm-estimate', {
        title: '합성 이미지가 남기는 시간', method: '합성 이미지가 남기는 시간 그래프 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '점 값이 보이는 꺾은선에서 1일·1달 수치만 함께 읽는다.', base: '시연 판에서 1일~1달 누적 조회·공유 수를 읽고, 지워도 남는 까닭을 보기에서 고른다.', challenge: '처음 한 시간 안에 멈췄다면 그래프가 어떻게 달라졌을지 말한다.' },
        intro: {
          teacher: '"합성 이미지가 올라간 첫날 40번 보였는데, 한 달 뒤엔 몇 번일까요?" 가상 사례 꺾은선을 띄우고 시연 단추로 지워도 남는 까닭을 고르는 모습을 보인다. "원본을 지우면 끝"이라는 말이 나오면 "그사이 누군가 저장하거나 캡처했다면요?"라고 되묻는다. 수치는 수업용 가상 값이다.',
          student: '가상 사례에서 합성 이미지가 올라간 뒤 1일부터 1달까지 누적 조회·공유 수를 읽고, 지워도 남는 까닭을 생각해요.',
          demo: { tool: 'chart', options: { type: 'line', mode: 'read', title: '가상 사례 — 합성 이미지 누적 조회·공유 수', unit: '번', xLabel: '올린 뒤', yLabel: '누적 수', data: VIEWS, question: '원본을 지워도 이미지가 남는 까닭은?', choices: ['그사이 저장·캡처된 사본이 돈다', '조회 수는 저절로 사라진다', '한 달이 지나면 모두 잊는다'] }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper-cut photo being copied into many small paper copies that drift away over a calendar', banner: '지우면 사라질까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '수치는 모두 수업용 가상 값이다(화면 제목에 \'가상\'). 실제 합성 이미지를 보여 주지 않는다.',
      }),
      M('intro.joke-or-harm', {
        title: '"그냥 웃기려고"는 통할까', method: '"그냥 웃기려고" 판단하기', tool: 'dilemma', minutes: 6,
        levels: { easy: '시연 판 첫 장면에서 두 판단의 결과를 함께 본다.', base: '시연 판 둘째 장면(저장해 퍼뜨림)까지 따라가 결과를 본다.', challenge: '만든 사람·보낸 사람·본 사람의 책임을 나눠 말한다.' },
        intro: {
          teacher: '"\'그냥 웃기려고 만든 거야\' — 만든 사람의 이 말로 장난이 될까요?" 시연 단추로 \'동의하지 않았으니 놀림\'을 고르고, 저장해 퍼뜨린 둘째 장면의 책임까지 보인다. "합성인 걸 다 아는데 뭐가 문제냐"는 말이 나오면 "가짜인 걸 알아도, 웃음거리가 된 얼굴은 누구의 것인가요?"라고 되묻는다. 실제 합성 이미지는 만들지도 보여 주지도 않는다.',
          student: '친구 얼굴을 합성한 이미지를 "웃기려고" 올린 가상 장면에서 판단을 고르고, 당사자 화면의 결과를 봐요.',
          demo: DEMO_DIL('웃기려고 만든 합성', D0, [['harm', 'all']], [{ id: 'k1', text: '당사자의 동의가 없었다' }, { id: 'k2', text: '여럿 앞에서 웃음거리가 된다' }]),
          art: { draw: 'a paper-cut phone screen with a blurred face pasted onto a cartoon animal body and laughing emoji around, one student looking hurt', banner: '웃기려고였다면 괜찮을까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: SAFE_NOTE,
      }),

      // ---- 활동 ----
      M('act.synthesis-dilemma', {
        title: '합성 영상을 받았을 때', method: '합성 영상 갈림길에서 확산 추적하기', tool: 'dilemma', minutes: 15,
        levels: { easy: '갈림 2번까지 가고, 고를 때마다 다인에게 생기는 영향이 바로 보인다.', base: '갈림 3번까지 가고, 영향 표시는 맞힌 뒤에만 보인다. 끝에서 근거를 고른다.', challenge: '갈림 3번 뒤 보고 넘긴 길의 결말과 견주는 근거 카드까지 고른다.' },
        activity: {
          title: '합성 영상을 받았을 때', tool: 'dilemma',
          teacher: '"나는 만들지도 보내지도 않았어요. 저장만 했는데 괜찮을까요?" 학생마다 한 길을 끝까지 가 본 뒤 보고 넘긴 길·저장한 길·멈추자고 한 길의 확산 범위를 견주게 한다. "앱으로 재미로 만든 건 괜찮다"는 학생에게 "다인은 그 앱을 쓰자고 한 적이 있나요?"라고 되묻는다. 만든 사람을 공개해 몰아세우는 길은 또 다른 폭력이라는 점도 짚는다.',
          task: '단톡방에 친구 얼굴 합성 놀림 영상이 올라온 장면에서 세 번 골라, 영상이 어디까지 퍼지는지 결과를 따라가요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL({ easy: '합성 놀림 영상이 올라왔어요. 두 번 골라 결과를 보고 근거를 고르세요.', base: '합성 놀림 영상이 올라왔어요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 간 뒤, 보고 넘긴 길의 결말과 견주는 근거까지 고르세요.' },
              '합성 영상', D1, [['speak', 'adult', 'support'], ['watch', 'tellnow', 'facts']], R1, ['r1', 'r2'], R1C),
            ONE('합성물이 성적인 것이었을 때의 길을 고르세요.', '성적 합성물', { text: '받은 합성 이미지가 친구 얼굴을 성적인 장면에 합성한 것이다.', ask: '어떻게 할까?', motif: 'house', choices: [
              { id: 'report', text: '저장·전달하지 않고 바로 담임 선생님과 보호자에게 알려 경찰 신고를 함께 한다', result: '어른과 함께 신고와 삭제 도움이 시작된다.', impact: [{ who: '친구', text: '보호를 받는다', tone: 1 }], ending: '바로 어른과 경찰 신고로 이었어요.' },
              { id: 'keep', text: '증거로 쓰려고 내 휴대폰에 저장해 둔다', result: '내 휴대폰에 성적 합성물이 남는다.', why: '성적 합성물은 저장·전달하지 말고 바로 어른에게 알려요. 증거는 어른이 확인해요.' }] }, ['report'],
              [{ id: 'q1', text: '성적 합성물은 저장·전달하지 않고 바로 어른과 신고한다' }, { id: 'q2', text: '내가 직접 증거를 모아 두는 게 먼저다', why: '저장·전달 자체가 피해를 키울 수 있어요.' }], ['q1']),
            ONE('합성 앱을 쓰자는 친구에게 맞는 길을 고르세요.', '합성 앱 제안', { text: '친구가 "선생님 사진으로 합성 재밌게 해 보자"라고 한다.', ask: '어떻게 할까?', motif: 'house', choices: [
              { id: 'no', text: '"동의 없이 남 얼굴로 만드는 건 안 돼"라고 한다', result: '친구가 앱을 닫는다.', impact: [{ who: '사진 주인', text: '피해를 피한다', tone: 1 }], ending: '동의 없는 합성을 거절했어요.' },
              { id: 'small', text: '우리끼리만 보면 괜찮다며 만든다', result: '며칠 뒤 그 이미지가 다른 방에서 돈다.', why: '우리끼리만 보려던 것도 쉽게 퍼져요.' }] }, ['no'], null, null,
              { conclude: '합성 놀림은 만든 사람·퍼뜨린 사람·본 사람 모두 멈출 수 있어요. 저장·전달하지 말고 기록해 어른에게 알려요. 성적 합성물은 바로 어른과 경찰 신고로 가요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내가 고른 길과 보고 넘긴 길에서 영상이 퍼진 범위가 어떻게 달랐는지 한 문장으로 써요.' }],
          easy: [{ type: 'choice', prompt: '합성 놀림 영상을 받았을 때 알맞은 행동은?', options: ['저장·전달하지 않고 기록해 어른에게 알린다', '나중에 보려고 저장한다'], answer: '저장·전달하지 않고 기록해 어른에게 알린다' }] },
        notes: '성적 합성물 장면은 내용을 묘사하지 않고 대응(바로 어른·경찰 신고)만 다룬다. ' + SAFE_NOTE,
      }),
      M('act.case-analysis', {
        title: '피해가 커지는 고리 분석', method: '사례 분석: 피해가 커지는 고리 지도', tool: 'mindmap', minutes: 15,
        levels: { easy: '역할 둘(만든 사람·퍼뜨린 사람)에 행동 카드 3장을 나누고, 놓으면 바로 맞는지 알려 준다.', base: '역할 넷(만든 사람·퍼뜨린 사람·본 사람·서비스)에 행동 카드 6장을 나누고, 역할마다 영향을 잇는다.', challenge: '셋째 문항에서 고리마다 끊는 행동 카드를 이어 붙인다.' },
        activity: {
          title: '피해가 커지는 고리 분석', tool: 'mindmap',
          teacher: '"합성 사진 한 장이 다른 학교까지 가려면 몇 사람의 손을 거쳤을까요?" 가상 사례(합성 사진 → 다른 학교 전달 → 계정 게시)를 읽고 역할 가지에 행동을 나누게 한다. "본 사람은 아무 역할도 없다"는 학생에게 "본 사람이 멈추자고 했다면 고리 하나가 끊겼을까요?"라고 되묻는다. 서비스(플랫폼)는 신고를 받아 내리는 쪽이라고 짚는다.',
          task: '합성 사진이 퍼진 가상 사례에서 만든 사람·퍼뜨린 사람·본 사람·서비스의 행동을 가지로 나누고, 고리마다 끊는 행동을 찾아요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('가상 사례의 행동 카드를 역할 가지에 나누세요.', ROLE, CASE, { topic: '합성 사진이 퍼진 고리' }),
              SB('행동 카드 3장을 역할 가지에 나누세요.', ['만든 사람', '퍼뜨린 사람'], pickCards(CASE, ['c1', 'c2', 'c6']), { topic: '합성 사진이 퍼진 고리' })),
            IT(MB('역할마다 생긴 영향을 이으세요.', [['만든 사람', '피해의 시작을 만들었다'], ['퍼뜨린 사람', '본 사람 수를 몇 배로 늘렸다'], ['본 사람', '침묵해 퍼짐을 멈추지 못했다']], ['아무 영향도 없다'], { topic: '역할과 영향' })),
            IT(PB('고리를 끊는 행동만 골라 담으세요.', '고리를 끊는 행동', [
              { id: 'p1', text: '받은 합성 사진을 전달하지 않는다', ok: true }, { id: 'p2', text: '화면을 기록해 어른에게 알린다', ok: true },
              { id: 'p3', text: '"ㅋㅋ"를 달아 반응한다' }, { id: 'p4', text: '더 웃긴 합성을 만들어 맞선다' }], { topic: '고리 끊기' }),
              null,
              MB('고리마다 끊는 행동을 이으세요.', [['만든 사람', '동의 없는 합성은 만들지 않는다'], ['퍼뜨린 사람', '받은 것을 전달하지 않고 지운다'], ['본 사람', '"내려"라고 말하고 어른에게 알린다'], ['서비스(플랫폼)', '신고를 받아 게시물을 내린다']], ['더 많이 공유해 알린다'], { topic: '고리 끊기' }),
              { conclude: '합성 놀림은 만든 사람에서 시작해 퍼뜨린 사람·본 사람·서비스를 거치며 커져요. 고리마다 끊을 수 있는 행동이 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '고리마다 끊는 행동을 써요.', columns: ['역할', '끊는 행동'], cells: [['만든 사람', ''], ['퍼뜨린 사람', ''], ['본 사람', '']], answer: '(예) 동의 없이 만들지 않기, 전달하지 않고 지우기, 내리자고 말하고 어른에게 알리기' }] },
      }),
      M('act.response-plan', {
        title: '확산 멈춤 대응 순서', method: '확산 멈춤 대응 순서 블록 짜기', tool: 'block-coding', minutes: 15,
        levels: { easy: '곧은 길(블록 3개 안팎)로 별 둘(저장·전달하지 않기·화면 기록)을 지나 깃발에 닿는다.', base: '꺾인 길로 별 넷(저장·전달하지 않기·화면 기록·서비스 신고·어른에게 알리기)을 모두 지나 깃발(학교 절차)에 닿는다.', challenge: '조건 블록(막히면 돌기)을 넣어, 성적 합성물이면(길이 막히면) 방향을 바꿔 바로 어른과 경찰 신고로 가는 갈래를 만든다.' },
        activity: {
          title: '확산 멈춤 대응 순서', tool: 'block-coding',
          teacher: '"합성 놀림 영상을 받은 순간부터 학교에 알리기까지, 차례를 거북이 길로 짜 볼까요?" 판의 별은 차례대로 \'저장·전달하지 않기 → 화면 기록(시간·계정 보이게) → 서비스 신고 → 어른에게 알리기\', 깃발은 \'학교 절차\', 바위는 \'댓글로 맞서기\'라고 읽어 준다. "기록하려면 저장해야 하지 않냐"는 학생에게 "화면 기록은 사실을 남기는 것이고, 영상을 보관하는 것과 달라요. 성적 합성물은 기록도 어른과 함께 해요"라고 말해 준다. 창구 번호는 판서한 것을 옮겨 적는다.',
          task: '합성 놀림 영상을 받은 가상 인물의 대응 차례를 길 찾기 판으로 짜요. 별(대응 단계)을 모두 지나 깃발(학교 절차)에 닿고, 바위(댓글로 맞서기)는 피해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(ROUTE('별 넷(저장·전달하지 않기·화면 기록·서비스 신고·어른에게 알리기)을 지나 깃발(학교 절차)에 닿게 블록을 이으세요.', { cols: 5, rows: 3, start: { x: 0, y: 0, dir: 'S' }, goal: { x: 4, y: 0 }, stars: [[0, 1], [1, 2], [3, 2], [4, 1]], rocks: [[1, 1], [2, 1], [3, 1]] }, { stars: true }),
              ROUTE('별 둘(저장·전달하지 않기·화면 기록)을 지나 깃발에 닿게 블록을 이으세요.', { cols: 4, rows: 2, start: { x: 0, y: 1, dir: 'E' }, goal: { x: 3, y: 1 }, stars: [[1, 1], [2, 1]], rocks: [] }, { stars: true, maxBlocks: 3 })),
            IT(ROUTE('반복 블록으로 같은 걸음을 줄여 별 셋을 지나 깃발에 닿으세요.', { cols: 5, rows: 2, start: { x: 0, y: 0, dir: 'E' }, goal: { x: 4, y: 0 }, stars: [[1, 0], [2, 0], [3, 0]], rocks: [] }, { stars: true, use: ['rep'], maxBlocks: 3 })),
            IT(ROUTE('바위(댓글로 맞서기) 둘을 피해 별(어른에게 알리기)을 지나 깃발에 닿으세요.', { cols: 4, rows: 3, start: { x: 0, y: 2, dir: 'E' }, goal: { x: 3, y: 0 }, stars: [[2, 1]], rocks: [[1, 2], [3, 1]] }, { stars: true }),
              null,
              ROUTE('조건 블록(막히면 오른쪽으로 돌기)을 반복 안에 넣어, 막히면(성적 합성물이면) 방향을 바꿔 깃발(어른과 경찰 신고)에 닿으세요.', { cols: 4, rows: 4, start: { x: 0, y: 0, dir: 'E' }, goal: { x: 3, y: 3 }, stars: [[3, 2]], rocks: [], blocks: ['fwd', 'left', 'right', 'rep', 'if'] }, { stars: true, use: ['if'] }),
              { conclude: '합성 놀림에는 저장·전달하지 않기 → 화면 기록 → 서비스 신고 → 어른에게 알리기 → 학교 절차. 성적 합성물은 바로 어른과 경찰 신고로 가요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '확산 멈춤 대응 차례를 써요.', columns: ['차례', '할 일'], cells: [['1', ''], ['2', ''], ['3', ''], ['4', ''], ['성적 합성물이면', '']], answer: '저장·전달하지 않기, 화면 기록, 서비스 신고, 어른에게 알리기 / 바로 어른과 경찰 신고' }] },
        notes: '교구는 글 블록을 잇지 못한다 — 길 찾기 판(별 = 대응 단계, 깃발 = 학교 절차, 바위 = 댓글로 맞서기)으로 바꿨다. 조건 갈래는 if 블록이다. ' + LINE_NOTE,
      }),
      M('act.campaign-design', {
        title: '합성 놀림 멈춤 캠페인', method: '합성 놀림 멈춤 캠페인 포스터 설계', tool: 'collage', minutes: 15,
        levels: { easy: '질문형 표어 자리와 행동 하나를 둔 포스터 바탕을 조각 3개 이상으로 꾸민다(문구는 활동지).', base: '조각 5개 이상으로 꾸미되 확산 수치를 강조할 별 조각을 넣고, 표어·수치·행동 셋을 활동지에 쓴다.', challenge: '포스터를 붙일 장소와 시기를 정하고, 밝은 색과 어두운 색이 맞닿게 꾸민다.' },
        activity: {
          title: '합성 놀림 멈춤 캠페인', tool: 'collage',
          teacher: '"\'이 얼굴의 주인이 너라면?\' 같은 질문형 표어는 왜 힘이 있을까요?" 표어·확산 수치 하나·행동 셋을 정한 뒤 조각으로 바탕을 꾸미게 한다(교구에는 글자를 넣을 수 없어 문구는 활동지에 쓴다). 실제 합성 이미지나 실제 인물 사진은 넣지 않고, 겁주는 그림 대신 할 행동이 보이게 한다.',
          task: '학년 캠페인 포스터 바탕을 조각으로 꾸미고, 질문형 표어·확산 수치 하나·할 행동 셋은 활동지에 써요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '질문형 표어 자리를 비워 둔 포스터 바탕을 꾸미세요.', toolOptions: { maxPieces: 14 }, target: { selfCheck: ['표어 자리를 비워 두었다', '실제 인물 사진·합성 이미지를 넣지 않았다', '표어를 활동지에 썼다'], minPieces: 5 } },
              { prompt: '조각 3개 이상으로 포스터 바탕을 꾸미세요.', target: { selfCheck: ['표어 자리를 비워 두었다', '표어를 활동지에 썼다'], minPieces: 3 } }),
            IT({ prompt: '확산 수치를 강조할 별 조각을 넣어 꾸미세요.', toolOptions: { maxPieces: 14 }, target: { has: [{ shape: 'star', min: 1 }], pieces: { min: 4 }, selfCheck: ['수치 자리를 별로 강조했다', '수치가 가상임을 밝혔다'] } }),
            IT({ prompt: '할 행동 셋이 보이도록 자리를 나눠 꾸미세요.', toolOptions: { maxPieces: 14 }, target: { selfCheck: ['행동 셋의 자리를 나눴다', '행동 셋을 활동지에 썼다'], minPieces: 3 } },
              null,
              { prompt: '밝은 색과 어두운 색 조각이 맞닿게 꾸미고, 붙일 장소·시기를 점검하세요.', target: { contrast: 'light-dark', selfCheck: ['행동 셋을 활동지에 썼다', '붙일 장소와 시기를 정했다'], minPieces: 4 } },
              { conclude: '좋은 캠페인은 당사자의 자리에 서게 하는 질문, 사실 하나, 바로 할 행동을 보여 줘요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '포스터 문구를 써요.', columns: ['칸', '문구'], cells: [['질문형 표어', ''], ['확산 수치(가상)', ''], ['할 행동 셋', '']], answer: '(예) "이 얼굴의 주인이 너라면?", 한 달 390번(가상), 저장 안 하기·전달 안 하기·어른에게 알리기' }] },
        notes: '교구는 글자를 넣지 못해 바탕만 꾸미고 문구는 활동지에 쓰게 했다.',
      }),

      // ---- 정리 ----
      M('wrap.ethics-writing', {
        title: '합성 앱 쓰기 전 세 문장', method: '합성 앱 쓰기 전 세 문장 쓰기', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '틀을 채워 두 문장(물을 질문·다짐)을 쓴다.', base: '합성 앱을 쓰기 전 스스로 물을 질문과 다짐을 세 문장으로 쓰고 기준표(동의·확산 가능성·대안)로 점검한다.', challenge: '친구에게 권하는 문장을 하나 더해 네 문장으로 쓴다.' },
        wrap: {
          teacher: '"합성 앱을 켜기 전 1초, 나에게 물어볼 질문은 무엇일까요?" 동의·퍼지면 되돌릴 수 있나·다른 재미는 없나를 칠판에 적고 쓰게 한다. "내 사진으로만 하면 괜찮다"는 학생에게 "내 사진만이라면 동의 문제는 없어요. 친구가 함께 찍힌 사진이라면요?"라고 되묻는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'rubric-writing', options: { topic: '합성 앱을 쓰기 전 스스로 물을 질문과 다짐을 세 문장으로 쓰세요.', minChars: 40, maxChars: 220, minSentences: 3, maxSentences: 4, title: '합성 앱 쓰기 전' },
              prompt: '합성 앱을 쓰기 전 질문과 다짐을 세 문장으로 쓰고 기준표에 표시해요.', target: { selfCheck: ['동의를 묻는 내용이 있다', '퍼질 가능성을 생각했다', '다른 방법(대안)을 썼다'] }, difficulty: 0.25 },
              { prompt: '틀을 채워 두 문장을 쓰고 표시해요.', toolOptions: { minChars: 20, minSentences: 2, maxSentences: 3, starter: '합성하기 전에 "___"라고 묻겠다. 동의가 없으면 ___.' }, target: { selfCheck: ['동의를 묻는 내용이 있다', '다짐을 썼다'] } },
              { prompt: '세 문장에 친구에게 권하는 문장을 더해 쓰고 표시해요.', toolOptions: { minChars: 50, maxChars: 260, minSentences: 4, maxSentences: 5 }, target: { selfCheck: ['동의를 묻는 내용이 있다', '퍼질 가능성을 생각했다', '다른 방법(대안)을 썼다', '친구에게 권하는 문장을 썼다'] } }),
            { type: 'choice', prompt: '"합성인 걸 다 알면 문제없다"에 대한 생각으로 알맞은 것은?', options: ['가짜인 걸 알아도 동의 없이 얼굴을 쓰면 상처를 준다', '가짜는 아무 영향이 없다', '웃기면 괜찮다'], answer: 0, difficulty: 0.15, explain: '당사자의 동의와 상처를 봐요.' },
          ],
        },
        worksheet: {
          title: '합성 앱 쓰기 전',
          items: [
            { type: 'short', prompt: '합성 앱을 쓰기 전 나에게 물을 질문 하나를 써요.' },
            { type: 'short', prompt: '친구에게 권할 한 문장을 써요.' },
          ],
        },
      }),
      M('wrap.pause-check', {
        title: '올리기 전 5초 멈춤', method: '올리기 전 5초 멈춤 점검', tool: 'timer', minutes: 7,
        levels: { easy: '타이머 5초 동안 질문 하나(동의 받았나)를 떠올리고 점검 칸을 누른다.', base: '타이머를 5초로 맞추고 질문 셋(동의·되돌릴 수 있나·누가 아플까)을 떠올려 점검 칸을 모두 누른다.', challenge: '질문 셋을 내 말로 바꿔 소리 내어 말해 보고 점검 칸 하나를 더 누른다.' },
        wrap: {
          teacher: '"올리기 버튼을 누르기 전 5초, 무엇을 떠올리면 될까요?" 타이머를 5초로 맞추고 질문 셋을 함께 떠올린 뒤 점검 칸을 누르게 한다. "5초는 너무 짧다"는 학생에게 "짧아서 매번 할 수 있어요. 습관이 되는 길이예요"라고 말해 준다. 5초는 우리 반 연습 약속이다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'timer', options: { title: '올리기 전 5초 멈춤(우리 반 약속)', plan: { work: 10, rest: 0, rounds: 1 }, workStep: 5, safety: ['동의를 받았나', '퍼지면 되돌릴 수 있나', '누가 아플까'] }, prompt: '타이머를 5초로 맞추고, 질문 셋을 떠올려 점검 칸을 모두 눌러요.', target: { plan: { work: 5, rounds: 1 }, safety: true }, difficulty: 0.2 },
              { prompt: '질문 하나를 떠올려 점검 칸을 눌러요.', toolOptions: { safety: ['동의를 받았나'] }, target: { safety: true } },
              { prompt: '타이머를 5초로 맞추고 질문 셋을 점검한 뒤, 내 말로 바꿔 말해 보았는지 점검해요.', target: { plan: { work: 5, rounds: 1 }, safety: true, selfCheck: ['질문 셋을 내 말로 바꿔 말해 보았다'] } }),
            { type: 'choice', prompt: '친구가 나온 사진을 올리기 전 가장 먼저 물을 것은?', options: ['그 친구의 동의를 받았나', '좋아요가 몇 개 나올까', '필터가 예쁜가'], answer: 0, difficulty: 0.15, explain: '동의가 첫 질문이에요.' },
          ],
        },
        worksheet: {
          title: '올리기 전 5초',
          items: [
            { type: 'check', prompt: '올리기 전 떠올릴 질문에 표시해요.', options: ['동의를 받았나', '퍼지면 되돌릴 수 있나', '누가 아플까', '좋아요가 많이 나올까'] },
            { type: 'short', prompt: '질문 셋 가운데 하나를 내 말로 바꿔 써요.' },
          ],
        },
        notes: '5초는 수업 연습 약속 값이다.',
      }),
    );
  }

  // ==== 9학년 · 좋아요·공유도 행동이다 — 올리기 전 점검 (bully.m.g9-like-share) — 사이버폭력 ====
  {
    const M = MK('g9-like-share', [9]);
    const ALGO = [['좋아요 10', 120], ['좋아요 50', 640], ['좋아요 100', 1500], ['좋아요 200', 3400]];
    const FOOT = [
      { id: 'f1', text: '중1: 친구 실수 영상에 놀림 댓글을 단다' }, { id: 'f2', text: '중1: 누군가 그 댓글을 캡처한다' },
      { id: 'f3', text: '중2: 댓글은 지웠지만 캡처는 남는다' }, { id: 'f4', text: '중3: 캡처가 다른 방에 다시 돈다' },
      { id: 'f5', text: '중3: 댓글 쓴 사람이 누구인지 알려진다' },
    ];
    const D1 = { text: '친구 현서가 체육 시간에 넘어지는 영상에 놀리는 자막을 단 게시물이 학년에서 인기를 끈다. 내 피드에도 떴다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'like', text: '웃겨서 좋아요를 누른다', result: '좋아요가 늘자 더 많은 사람의 피드에 뜬다.', impact: [{ who: '현서', text: '더 많은 사람이 본다', tone: -1 }], why: '좋아요 하나도 노출을 키우는 행동이에요.', end: '좋아요로 노출을 키웠어요.',
        next: { text: '다음 날 게시물 노출이 두 배가 됐다. 현서가 학교에 와서 말이 없다.', ask: '이제 어떻게 할까?', choices: [
          { id: 'unlike', text: '좋아요를 취소하고 게시물을 신고한다', result: '신고가 쌓여 게시물이 내려간다.', impact: [{ who: '현서', text: '확산이 줄어든다', tone: 1 }], end: '반응을 거두고 신고했어요.',
            next: { text: '게시물은 내려갔지만 현서는 아직 힘들어한다.', choices: [
              { id: 'dm', text: '현서에게 따로 "괜찮아? 내가 좋아요 눌렀었어, 미안해"라고 보낸다', result: '현서가 "말해 줘서 고마워"라고 답한다.', impact: [{ who: '현서', text: '마음이 조금 놓인다', tone: 1 }] },
              { id: 'silent', text: '아무 말 없이 지낸다', result: '현서는 누가 봤는지 모른 채 불안해한다.', why: '내 반응을 바로잡았다면 사과도 할 수 있어요.' }] } },
          { id: 'keep', text: '이미 눌렀으니 그대로 둔다', result: '노출이 계속 늘어난다.', impact: [{ who: '현서', text: '놀림이 커진다', tone: -1 }], why: '좋아요는 취소할 수 있어요.' }] } },
      { id: 'share', text: '친구들에게 공유한다', result: '여러 방으로 영상이 퍼진다.', impact: [{ who: '현서', text: '학교 밖까지 퍼진다', tone: -1 }], why: '공유는 새 사람들에게 직접 퍼뜨리는 행동이에요.', ending: '내 공유가 영상을 여러 방으로 퍼뜨렸어요.' },
      { id: 'criticize', text: '"이거 너무해"라고 비판 댓글을 단다', result: '댓글 싸움이 붙으며 게시물이 더 많이 보인다.', impact: [{ who: '현서', text: '노출이 더 커진다', tone: -1 }], end: '비판 댓글을 달았어요.',
        next: { text: '댓글 싸움으로 게시물이 오히려 인기 게시물이 됐다.', ask: '어떻게 할까?', choices: [
          { id: 'report2', text: '댓글을 멈추고 게시물을 신고한 뒤 담임 선생님께 알린다', result: '게시물이 내려가고 선생님이 현서를 살핀다.', impact: [{ who: '현서', text: '보호를 받는다', tone: 1 }], end: '반응 대신 신고와 알리기를 골랐어요.',
            next: { text: '선생님이 "게시물을 처음 올린 계정을 기억하니?"라고 묻는다.', choices: [
              { id: 'record', text: '신고 전에 남긴 화면 기록을 보여 준다', result: '선생님이 올린 학생과 이야기한다.', impact: [{ who: '현서', text: '사과를 받을 길이 열린다', tone: 1 }] },
              { id: 'forget', text: '기억이 안 난다며 넘긴다', result: '확인이 늦어진다.', why: '신고 전에 화면을 기록해 두면 도움이 돼요.' }] } },
          { id: 'more', text: '더 센 댓글로 맞선다', result: '싸움이 커지고 게시물이 더 퍼진다.', why: '맞선 댓글도 게시물 반응이 되어 노출을 키워요.' }] } },
      { id: 'reportfirst', text: '반응하지 않고 화면을 기록한 뒤 신고한다', result: '내 피드에서 게시물이 사라지고 신고가 접수된다.', impact: [{ who: '현서', text: '확산 한 갈래가 멈춘다', tone: 1 }], end: '반응 없이 기록하고 신고했어요.',
        next: { text: '게시물이 아직 다른 친구들 피드에 떠 있다.', ask: '다음은?', choices: [
          { id: 'teacher', text: '기록을 가지고 담임 선생님께 알린다', result: '선생님이 올린 학생과 이야기하고 게시물이 내려간다.', impact: [{ who: '현서', text: '보호를 받는다', tone: 1 }], end: '어른에게 알렸어요.',
            next: { text: '친구들이 "누가 신고했냐"며 웅성거린다.', choices: [
              { id: 'quiet', text: '나서서 자랑하지 않고 현서 곁에 있는다', result: '현서가 조금 웃는다.', impact: [{ who: '현서', text: '혼자가 아니라고 느낀다', tone: 1 }] },
              { id: 'boast', text: '"내가 신고했지"라고 자랑한다', result: '다시 그 게시물 이야기가 퍼진다.', why: '신고는 조용히 하고 당사자 곁을 지켜요.' }] } },
          { id: 'stop', text: '신고했으니 끝이라고 생각한다', result: '다른 피드에서 게시물이 계속 돈다.', why: '내 신고 하나로 안 내려가면 어른에게 알려요.' }] } }] };
    const R1 = [{ id: 'r1', text: '좋아요·공유·댓글도 노출을 키우는 행동이다' }, { id: 'r2', text: '반응하지 않고 신고하고 알리면 확산이 멈춘다' },
      { id: 'r3', text: '내가 쓴 게 아니면 책임이 없다', why: '반응과 공유로 퍼뜨린 책임이 있어요.' }, { id: 'r4', text: '비판 댓글은 언제나 도움이 된다', why: '댓글도 반응이라 노출을 키울 수 있어요.' }];
    const R1C = { reasons: [{ id: 'r5', text: '좋아요를 누른 길에서는 노출이 두 배가 됐다' }, { id: 'r6', text: '반응 없이 신고한 길에서는 게시물이 내려갔다' }], ok: ['r5', 'r6'] };
    const REACT = ['확산을 키운다', '확산을 줄인다'];
    const RC = [
      { id: 'k1', text: '좋아요 누르기', to: '확산을 키운다' }, { id: 'k2', text: '친구에게 공유하기', to: '확산을 키운다' },
      { id: 'k3', text: '웃음 댓글 달기', to: '확산을 키운다' }, { id: 'k4', text: '게시물 신고하기', to: '확산을 줄인다' },
      { id: 'k5', text: '당사자에게 따로 위로 메시지', to: '확산을 줄인다' }, { id: 'k6', text: '반응하지 않고 넘기기', to: '확산을 줄인다' },
    ];

    ALL.push(
      // ---- 도입 ----
      M('intro.algorithm-graph', {
        title: '반응이 노출을 키우는 그래프', method: '반응이 노출을 키우는 그래프 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '두 점(좋아요 10·200)의 노출 수만 함께 읽는다.', base: '시연 판에서 좋아요 수와 추천 노출 수가 함께 오르는 그래프를 읽고 관계를 보기에서 고른다.', challenge: '반응이 하나도 없으면 그래프가 어떻게 될지 예상해 말한다.' },
        intro: {
          teacher: '"좋아요가 10개일 때 120명, 200개일 때 3,400명에게 보였어요. 좋아요 하나는 무엇을 하는 셈일까요?" 가상 게시물 그래프를 띄우고 시연 단추로 관계를 고르는 모습을 보인다. "좋아요는 아무 의미 없다"는 말이 나오면 "내 좋아요 하나가 몇 명의 피드를 더 열어 줄까요?"라고 되묻는다. 수치는 가상이고 실제 서비스마다 방식이 다르다고 밝힌다.',
          student: '가상 게시물의 좋아요 수와 추천 노출 수 그래프를 읽고, 반응 하나가 어떤 영향을 주는지 설명해요.',
          demo: { tool: 'chart', options: { type: 'line', mode: 'read', title: '가상 게시물 — 좋아요 수와 추천 노출 수', unit: '명', xLabel: '좋아요 수', yLabel: '노출 수', data: ALGO, question: '그래프에서 알 수 있는 것은?', choices: ['좋아요가 늘수록 더 많은 사람에게 보인다', '좋아요와 노출은 관계가 없다', '좋아요가 늘면 노출이 줄어든다'] }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper-cut phone with a heart button sending ripples outward to many smaller phones', banner: '좋아요 하나의 힘', extra: [{ motif: 'heart', x: 300, y: 96 }] },
        },
        notes: '수치는 모두 가상이다. 추천 방식은 서비스마다 다르다고 함께 말한다.',
      }),
      M('intro.footprint-line', {
        title: '게시물의 디지털 발자국', method: '게시물의 디지털 발자국 따라가기', tool: 'timeline', minutes: 6,
        levels: { easy: '장면 셋(댓글·캡처·다시 돎)의 차례를 함께 본다.', base: '시연 판에서 중1의 놀림 댓글이 중3에 캡처로 돌아오는 장면 다섯이 차례로 놓이는 모습을 본다.', challenge: '장면마다 지울 수 있는 것과 없는 것을 말한다.' },
        intro: {
          teacher: '"중1 때 장난으로 단 댓글, 중3이 되면 사라져 있을까요?" 시연 단추로 장면 카드가 시간 순서로 놓이는 모습을 보인다. "지우면 끝"이라는 말이 나오면 "중2에 댓글은 지웠는데, 중3에 무엇이 다시 돌았나요?"라고 되묻는다. 디지털 발자국은 내가 지울 수 없는 곳에도 남는다는 것을 오늘의 질문으로 삼는다.',
          student: '중1 때 단 놀림 댓글이 3년 뒤 캡처로 다시 돌아오는 장면을 시간 순서로 보고, 지울 수 있는 것과 없는 것을 생각해요.',
          demo: { tool: 'timeline', options: { mode: 'order', axis: ['중1', '중3'], slots: 5, cards: [FOOT[2], FOOT[0], FOOT[4], FOOT[1], FOOT[3]] }, sequence: [{ order: FOOT.map((c) => c.id) }] },
          art: { draw: 'a paper-cut path of footprints across three school years, each footprint holding a tiny comment bubble', banner: '발자국은 어디까지 갈까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: SAFE_NOTE,
      }),

      // ---- 활동 ----
      M('act.like-dilemma', {
        title: '놀림 게시물에 반응할까', method: '놀림 게시물 반응 갈림길에서 노출 따라가기', tool: 'dilemma', minutes: 15,
        levels: { easy: '갈림 2번까지 가고, 고를 때마다 현서에게 생기는 영향이 바로 보인다.', base: '갈림 3번까지 가고, 영향 표시는 맞힌 뒤에만 보인다. 끝에서 근거를 고른다.', challenge: '갈림 3번 뒤 좋아요를 누른 길의 결말과 견주는 근거 카드까지 고르고, 비판 댓글이 노출을 키우는 경우를 활동지에 따진다.' },
        activity: {
          title: '놀림 게시물에 반응할까', tool: 'dilemma',
          teacher: '"좋아요, 공유, 비판 댓글, 신고 — 이 가운데 노출을 줄이는 반응은 무엇일까요?" 학생마다 한 길을 끝까지 가 본 뒤 노출과 현서의 반응이 어떻게 달라졌는지 견주게 한다. "비판 댓글은 좋은 일"이라는 학생에게 "댓글 싸움이 붙자 게시물이 어디로 올라갔나요?"라고 되묻는다. 처음 올린 사람의 잘못이 가장 크고, 반응한 사람도 바로잡을 수 있다는 점을 짚는다.',
          task: '친구의 실수 영상을 놀린 게시물이 인기를 끄는 장면에서 세 번 골라, 노출 수와 당사자 반응의 변화를 따라가요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL({ easy: '놀림 게시물이 피드에 떴어요. 두 번 골라 결과를 보고 근거를 고르세요.', base: '놀림 게시물이 피드에 떴어요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 간 뒤, 좋아요를 누른 길의 결말과 견주는 근거까지 고르세요.' },
              '놀림 게시물', D1, [['reportfirst', 'teacher', 'quiet'], ['like', 'unlike', 'dm'], ['criticize', 'report2', 'record']], R1, ['r1', 'r2'], R1C),
            ONE('이미 공유한 뒤 놀림이라는 걸 알았을 때의 길을 고르세요.', '이미 공유했다면', { text: '친구 실수 영상을 웃겨서 공유했는데, 나중에 그 친구가 많이 힘들어한다는 말을 들었다.', ask: '어떻게 할까?', motif: 'house', choices: [
              { id: 'undo', text: '공유를 지우고, 받은 친구들에게도 지워 달라고 한다', result: '내가 연 갈래가 닫힌다.', impact: [{ who: '영상 속 친구', text: '확산이 줄어든다', tone: 1 }], ending: '내 공유를 바로잡았어요.' },
              { id: 'leave', text: '이미 퍼졌으니 그냥 둔다', result: '내 공유로 연 갈래가 계속 퍼진다.', why: '늦게라도 내 공유는 지울 수 있어요.' }] }, ['undo'],
              [{ id: 'q1', text: '내 반응은 내가 바로잡을 수 있다' }, { id: 'q2', text: '처음 올린 사람만 책임이 있다', why: '공유한 사람도 확산을 만들어요.' }], ['q1']),
            ONE('놀림 게시물이 떴을 때 가장 먼저 할 일을 고르세요.', '처음 본 순간', { text: '피드에 반 친구를 놀리는 게시물이 떴다. 좋아요가 계속 늘고 있다.', ask: '가장 먼저?', motif: 'house', choices: [
              { id: 'norx', text: '반응하지 않고 화면을 기록한다', result: '내 반응이 노출을 키우지 않는다.', impact: [{ who: '친구', text: '확산이 더 커지지 않는다', tone: 1 }], ending: '반응 없이 기록부터 했어요.' },
              { id: 'angry', text: '화가 나서 바로 댓글로 따진다', result: '댓글이 붙어 노출이 커진다.', why: '먼저 반응하지 않고 기록·신고·알리기로 가요.' }] }, ['norx'], null, null,
              { conclude: '좋아요·공유·댓글은 모두 노출을 키우는 행동이에요. 반응하지 않고 기록하고 신고하고 알리면 확산이 멈춰요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '비판 댓글이 오히려 노출을 키우는 까닭을 한 문장으로 써요.' }],
          easy: [{ type: 'choice', prompt: '놀림 게시물의 확산을 줄이는 행동은?', options: ['반응하지 않고 신고한다', '좋아요를 누른다'], answer: '반응하지 않고 신고한다' }] },
        notes: SAFE_NOTE,
      }),
      M('act.five-checks', {
        title: '올리기 전 다섯 점검 순서', method: '올리기 전 다섯 점검 순서 블록 짜기', tool: 'block-coding', minutes: 15,
        levels: { easy: '곧은 길(블록 3개 안팎)로 별 셋(사실인가·동의 받았나·누가 아플까)을 지나 깃발(올리기)에 닿는다.', base: '꺾인 길로 별 다섯(사실·동의·누가 아플까·퍼져도 괜찮나·지금 감정)을 모두 지나 깃발에 닿는다.', challenge: '조건 블록(막히면 돌기)을 넣어, 점검 하나라도 아니면(길이 막히면) 올리지 않는 쪽으로 방향을 바꾸는 갈래를 만든다.' },
        activity: {
          title: '올리기 전 다섯 점검 순서', tool: 'block-coding',
          teacher: '"올리기 버튼까지 가는 길에 거쳐야 할 다섯 점검은 무엇일까요?" 판의 별은 차례대로 \'사실인가 → 동의 받았나 → 누가 아플까 → 퍼져도 괜찮나 → 지금 감정 상태는\', 깃발은 \'올리기\', 바위는 \'화난 채로 바로 올리기\'라고 읽어 준다. "점검이 너무 많다"는 학생에게 "하나라도 \'아니\'면 올리지 않으면 돼요. 그게 조건 갈래예요"라고 말해 준다.',
          task: '게시물을 올리기 전 다섯 점검을 길 찾기 판으로 짜요. 별(점검)을 모두 지나 깃발(올리기)에 닿고, 바위(화난 채로 바로 올리기)는 피해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(ROUTE('별 다섯(사실·동의·누가 아플까·퍼져도 괜찮나·지금 감정)을 모두 지나 깃발(올리기)에 닿게 블록을 이으세요.', { cols: 5, rows: 3, start: { x: 0, y: 0, dir: 'E' }, goal: { x: 4, y: 2 }, stars: [[1, 0], [2, 0], [2, 1], [3, 1], [3, 2]], rocks: [[3, 0], [1, 1]] }, { stars: true }),
              ROUTE('별 셋(사실·동의·누가 아플까)을 지나 깃발에 닿게 블록을 이으세요.', { cols: 4, rows: 2, start: { x: 0, y: 1, dir: 'E' }, goal: { x: 3, y: 1 }, stars: [[1, 1], [2, 1], [3, 1]], rocks: [] }, { stars: true, maxBlocks: 3 })),
            IT(ROUTE('반복 블록으로 같은 걸음을 줄여 별 넷을 지나 깃발에 닿으세요.', { cols: 6, rows: 2, start: { x: 0, y: 0, dir: 'E' }, goal: { x: 5, y: 0 }, stars: [[1, 0], [2, 0], [3, 0], [4, 0]], rocks: [] }, { stars: true, use: ['rep'], maxBlocks: 3 })),
            IT(ROUTE('친구 게시물을 공유할 때: 바위(바로 공유)를 돌아 별(동의 확인)을 지나 깃발에 닿으세요.', { cols: 4, rows: 3, start: { x: 0, y: 0, dir: 'E' }, goal: { x: 3, y: 0 }, stars: [[1, 1]], rocks: [[1, 0], [2, 0]] }, { stars: true }),
              null,
              ROUTE('조건 블록(막히면 오른쪽으로 돌기)을 반복 안에 넣어, 막히면(점검이 아니면) 방향을 바꾸는 길로 깃발에 닿으세요.', { cols: 4, rows: 4, start: { x: 0, y: 0, dir: 'E' }, goal: { x: 3, y: 3 }, stars: [[2, 0], [3, 1]], rocks: [], blocks: ['fwd', 'left', 'right', 'rep', 'if'] }, { stars: true, use: ['if'] }),
              { conclude: '올리기 전 다섯 점검: 사실인가·동의 받았나·누가 아플까·퍼져도 괜찮나·지금 감정은. 하나라도 아니면 올리지 않아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '올리기 전 다섯 점검을 써요.', columns: ['차례', '점검'], cells: [['1', ''], ['2', ''], ['3', ''], ['4', ''], ['5', '']], answer: '사실인가, 동의 받았나, 누가 아플까, 퍼져도 괜찮나, 지금 감정 상태는' }] },
        notes: '교구는 글 블록을 잇지 못한다 — 길 찾기 판(별 = 점검, 깃발 = 올리기, 바위 = 화난 채로 바로 올리기)으로 바꿨다. 조건 갈래는 if 블록이다.',
      }),
      M('act.post-rewrite', {
        title: '놀림 게시물 다시 쓰기', method: '놀림 게시물을 다시 쓰기', tool: 'rubric-writing', minutes: 15,
        levels: { easy: '가상 놀림 게시물 한 문구를 틀로 다시 쓴다.', base: '가상 놀림 게시물 두 문구를 같은 소식이지만 아무도 다치지 않게 다시 쓰고 기준표(사실·존중·동의)로 점검한다.', challenge: '다시 쓴 까닭을 한 문장으로 덧붙인다.' },
        activity: {
          title: '놀림 게시물 다시 쓰기', tool: 'rubric-writing',
          teacher: '"\'체육 시간 ○○ 대참사ㅋㅋ\'를 같은 소식이지만 아무도 다치지 않게 바꾸면?" 사람을 웃음거리로 만드는 부분을 찾아 빼고 사실과 존중을 남기게 한다. "그럼 재미가 없다"는 학생에게 "누군가 다쳐야 생기는 재미라면, 그 재미는 누구의 것일까요?"라고 되묻는다. 가상 게시물이고 실제 친구 이름은 쓰지 않는다.',
          task: '가상 놀림 게시물 문구를 같은 소식이지만 아무도 다치지 않게 다시 쓰고, 사실·존중·동의를 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(RW('게시물 ① "체육 시간 ○○ 대참사ㅋㅋ 다시 봐도 웃김"을 다시 쓰세요.', { topic: '가상 게시물 "체육 시간 ○○ 대참사ㅋㅋ 다시 봐도 웃김"을, 같은 소식(체육 시간 이야기)이지만 아무도 다치지 않게 한두 문장으로 다시 쓰세요.', min: 15, max: 120, s: [1, 2], title: '다시 쓰기 ①' }, ['사실만 남겼다', '사람을 웃음거리로 만들지 않았다', '이름을 쓰지 않았다']),
              RW('틀을 채워 게시물 ①을 다시 쓰세요.', { topic: '게시물 ①을 다시 쓰세요.', min: 12, max: 100, s: [1, 2], starter: '오늘 체육 시간에 ___. 다들 수고했어!' }, ['사람을 웃음거리로 만들지 않았다', '이름을 쓰지 않았다'])),
            IT(RW('게시물 ② "우리 반 패션 테러리스트 공개합니다"를 다시 쓰세요.', { topic: '가상 게시물 "우리 반 패션 테러리스트 공개합니다(사진)"를, 아무도 다치지 않는 소식으로 한두 문장 다시 쓰세요.', min: 15, max: 120, s: [1, 2], title: '다시 쓰기 ②' }, ['사람을 겨냥하지 않았다', '동의 없는 사진을 빼겠다고 했다', '존중하는 말로 썼다'])),
            IT(RW('다시 쓴 게시물 ①·② 가운데 하나를 골라 올리기 전 점검 문장을 쓰세요.', { topic: '다시 쓴 게시물 하나를 골라, 올리기 전에 동의를 어떻게 받을지 한두 문장으로 쓰세요.', min: 15, max: 120, s: [1, 2], title: '동의 받기' }, ['동의를 받는 방법을 썼다', '존중하는 말로 썼다']),
              null,
              RW('다시 쓴 게시물과 그렇게 바꾼 까닭을 함께 쓰세요.', { topic: '다시 쓴 게시물 하나를 옮겨 쓰고, 왜 그렇게 바꿨는지 까닭을 한 문장 더해 두세 문장으로 쓰세요.', min: 30, max: 180, s: [2, 3], title: '바꾼 까닭' }, ['다시 쓴 게시물을 옮겨 썼다', '바꾼 까닭을 썼다', '존중하는 말로 썼다']),
              { conclude: '같은 소식도 사람을 웃음거리로 만들지 않고, 사실과 존중을 남기고, 동의를 받아 올릴 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '다시 쓴 게시물 하나를 옮겨 써요.' }] },
      }),
      M('act.reaction-sort', {
        title: '반응의 영향 분석판', method: '반응의 영향 분석판에 나누기', tool: 'sortboard', minutes: 15,
        levels: { easy: '반응 카드 4장을 두 바구니에 나누고, 틀린 바구니에 넣으면 까닭을 말하고 되돌려 준다.', base: '반응 카드 6장을 확산을 키움·줄임 바구니에 나누고, 상황 카드도 나눈다.', challenge: '셋째 문항에서 같은 반응(댓글)이 상황에 따라 달라지는 카드가 더해진다.' },
        activity: {
          title: '반응의 영향 분석판', tool: 'sortboard',
          teacher: '"\'반응하지 않고 넘기기\'는 확산을 줄일까요, 아무 일도 아닐까요?" 카드를 넣을 때마다 그 반응 뒤 노출이 어떻게 될지 말하게 한다. "신고는 고자질 같다"는 학생에게 "신고는 노출을 줄이는 쪽 바구니예요. 누구를 지키는 행동일까요?"라고 되묻는다. 당사자에게 따로 보내는 위로는 노출과 상관없이 힘이 된다고 짚는다.',
          task: '놀림 게시물에 대한 반응 카드를 확산을 키우는지 줄이는지 따져 바구니에 나누고, 상황에 따라 달라지는 반응도 찾아요.',
          levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            IT(BOARD('반응 카드를 확산을 키우는 것과 줄이는 것으로 나누세요.', REACT, RC),
              BOARD('반응 카드 4장을 두 바구니에 나누세요.', REACT, pickCards(RC, ['k1', 'k2', 'k4', 'k5']))),
            IT(BOARD('상황 카드를 확산을 키우는 것과 줄이는 것으로 나누세요.', REACT, [
              { id: 's1', text: '캡처해서 "이거 봤어?"라고 보내기', to: '확산을 키운다' }, { id: 's2', text: '게시물 올린 친구에게 내리자고 따로 말하기', to: '확산을 줄인다' },
              { id: 's3', text: '"ㅋㅋ 나도 저장함"이라고 쓰기', to: '확산을 키운다' }, { id: 's4', text: '선생님께 화면 기록 보여 주기', to: '확산을 줄인다' }])),
            IT(BOARD('반응 카드를 세 바구니에 나누세요.', ['확산을 키운다', '확산을 줄인다', '상황에 따라 다르다'], [
              { id: 'm1', text: '좋아요 누르기', to: '확산을 키운다' }, { id: 'm2', text: '게시물 신고하기', to: '확산을 줄인다' },
              { id: 'm3', text: '비판 댓글 달기', to: '상황에 따라 다르다' }]),
              null,
              Object.assign(BOARD('반응 카드를 세 바구니에 나누세요(카드가 더 있어요).', ['확산을 키운다', '확산을 줄인다', '상황에 따라 다르다'], [
                { id: 'm1', text: '좋아요 누르기', to: '확산을 키운다' }, { id: 'm2', text: '게시물 신고하기', to: '확산을 줄인다' },
                { id: 'm3', text: '비판 댓글 달기', to: '상황에 따라 다르다' }, { id: 'm4', text: '공유하며 "이건 아니지" 쓰기', to: '상황에 따라 다르다' },
                { id: 'm5', text: '당사자에게 따로 위로 보내기', to: '확산을 줄인다' }])),
              { conclude: '좋아요·공유·웃음 댓글은 확산을 키우고, 신고·반응하지 않기·따로 위로하기는 줄여요. 비판 댓글은 오히려 노출을 키울 수도 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '같은 반응(비판 댓글)이 상황에 따라 다르게 작용하는 경우를 한 문장으로 써요.' }] },
      }),

      // ---- 정리 ----
      M('wrap.feed-campaign', {
        title: '"누르기 전에" 캠페인 카드', method: '"누르기 전에" 캠페인 카드 만들기', tool: 'collage', minutes: 7,
        levels: { easy: '표어 자리를 둔 카드 바탕을 조각 3개 이상으로 꾸민다(표어는 활동지).', base: '조각 5개 이상으로 꾸미고 표어와 행동 하나를 활동지에 쓴다.', challenge: '카드를 본 친구가 할 행동을 구체적으로 쓰고, 하트 조각 하나를 \'누르기 전 멈춤\' 표시로 꼭 넣는다.' },
        wrap: {
          teacher: '"피드를 넘기다 3초 머무는 카드라면, \'누르기 전에\' 다음에 무슨 말이 오면 좋을까요?" 표어와 행동 하나를 활동지에 쓰고 조각으로 카드 바탕을 꾸미게 한다(교구에는 글자를 넣을 수 없다). 실제 게시물·인물 사진은 쓰지 않는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'collage', options: { maxPieces: 12 }, prompt: '"누르기 전에" 캠페인 카드 바탕을 조각으로 꾸미고 점검해요(문구는 활동지에 써요).', target: { selfCheck: ['표어 자리를 비워 두었다', '표어와 행동 하나를 활동지에 썼다'], minPieces: 5 }, difficulty: 0.2 },
              { prompt: '조각 3개 이상으로 카드 바탕을 꾸미고 점검해요.', target: { selfCheck: ['표어 자리를 비워 두었다'], minPieces: 3 } },
              { prompt: '하트 조각 하나를 \'누르기 전 멈춤\' 표시로 넣어 꾸미고, 친구가 할 행동까지 점검해요.', target: { has: [{ shape: 'heart', min: 1 }], selfCheck: ['표어와 행동 하나를 활동지에 썼다', '친구가 할 행동을 구체적으로 썼다'], minPieces: 4 } }),
            { type: 'choice', prompt: '놀림 게시물을 봤을 때 "누르기 전에" 할 일은?', options: ['누르지 않고 신고한다', '좋아요부터 누른다', '친구에게 공유한다'], answer: 0, difficulty: 0.15, explain: '반응하지 않고 신고하면 확산이 줄어요.' },
          ],
        },
        worksheet: {
          title: '"누르기 전에" 캠페인',
          items: [
            { type: 'short', prompt: '캠페인 표어를 써요.' },
            { type: 'short', prompt: '카드를 본 친구가 할 행동 하나를 구체적으로 써요.' },
          ],
        },
        notes: '교구는 글자를 넣지 못해 카드 바탕만 꾸미고 문구는 활동지에 쓰게 했다.',
      }),
      M('wrap.tap-rhythm', {
        title: '점검 다섯 박 리듬', method: '점검 다섯 박 리듬 치기', tool: 'keyboard', minutes: 7,
        levels: { easy: '점검 셋(사실·동의·아픔)을 4박 마디 하나 리듬으로 짓는다(박 수가 보인다).', base: '점검 다섯(사실·동의·아픔·퍼짐·감정)을 4박 마디 둘 리듬으로 짓는다.', challenge: '리듬에 맞는 짧은 가사 한 줄을 더해 4박 마디 셋으로 짓는다.' },
        wrap: {
          teacher: '"사실·동의·아픔·퍼짐·감정 — 다섯 점검을 손가락 리듬으로 외워 볼까요?" 리듬 블록으로 박을 채운 뒤 책상을 두드리며 함께 친다. 점검은 외우는 것보다 쓰는 것이 중요하다고, 다음에 올리기 전에 이 리듬을 떠올리자고 말한다.',
          exitTicket: [
            IT(Object.assign(X('keyboard', BEAT('점검 다섯 "사실·동의·아픔 / 퍼짐·감정"을 4박 마디 두 개 리듬으로 지어요.', { measures: 2, blocks: ['q', 'e', 'h', 'qr'] }, { beats: true, selfCheck: ['점검 다섯을 박에 나눠 실었다', '책상을 두드리며 쳐 보았다'] })), { difficulty: 0.2 }),
              { prompt: '점검 셋 "사실·동의·아픔"을 4박 마디 하나 리듬으로 지어요.', toolOptions: { measures: 1, blocks: ['q', 'h', 'qr'], showBeats: true }, target: { beats: true, selfCheck: ['점검 셋을 박에 나눠 실었다'] } },
              { prompt: '리듬에 맞는 가사 한 줄을 더해 4박 마디 세 개 리듬으로 지어요.', toolOptions: { measures: 3, blocks: ['q', 'e', 'h', 'qr', 'er'] }, target: { beats: true, selfCheck: ['점검 다섯을 박에 나눠 실었다', '가사 한 줄을 더했다', '책상을 두드리며 쳐 보았다'] } }),
            { type: 'choice', prompt: '올리기 전 다섯 점검이 아닌 것은?', options: ['좋아요가 많이 나올까', '동의를 받았나', '퍼져도 괜찮나'], answer: 0, difficulty: 0.15, explain: '좋아요 수는 점검 기준이 아니에요.' },
          ],
        },
        worksheet: {
          title: '점검 다섯 박',
          items: [
            { type: 'blank', prompt: '다섯 점검을 채워요.', text: '사실·___·아픔·___·감정', answer: '동의, 퍼짐' },
            { type: 'short', prompt: '리듬에 붙일 가사 한 줄을 써요.' },
          ],
        },
        notes: '교구는 점검 글자를 치지 않는다 — 리듬 블록으로 4박 마디를 채우고, 점검 글은 문제 글·활동지에 적었다.',
      }),
    );
  }

  // ==== 9학년 · 외모·성적·출신을 겨냥한 말 (bully.m.g9-hate-speech) ====
  {
    const M = MK('g9-hate-speech', [9]);
    // 실제 비하어는 화면에 쓰지 않고 '어떤 말인지'만 묘사한다
    const AUDIT = [['외모를 깎아내리는 말', 21], ['성적을 깎아내리는 말', 14], ['출신·말투를 흉내 내는 말', 9], ['가정형편을 깎아내리는 말', 6]];
    const HIDDEN = [
      { id: 'h1', text: '"공부 못하는 애가 뭘 알아"', to: '성적이 사람의 값을 정한다' }, { id: 'h2', text: '"시골에서 와서 그래"', to: '출신이 같으면 다 똑같다' },
      { id: 'h3', text: '"그 옷 어디서 주웠냐"', to: '가진 것이 사람의 값을 정한다' }, { id: 'h4', text: '"살 좀 빼면 봐줄게"', to: '외모가 사람의 값을 정한다' },
    ];
    const D1 = { text: '전학 온 은호의 말투를 선우가 쉬는 시간마다 과장해 흉내 내고, 몇 명이 따라 웃는다. 은호는 요즘 발표를 피한다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'laugh', text: '분위기상 같이 웃는다', result: '흉내가 더 과장되고 따라 하는 사람이 늘어난다.', impact: [{ who: '은호', text: '말하기가 두려워진다', tone: -1 }], why: '웃음은 흉내를 키우는 힘이 돼요.', ending: '내 웃음이 흉내를 키웠어요.' },
      { id: 'topic', text: '"야, 매점 가자"라며 화제를 돌린다', result: '그 순간 흉내가 멈춘다.', impact: [{ who: '은호', text: '잠깐 숨을 돌린다', tone: 1 }], end: '화제를 돌려 그 순간을 멈췄어요.',
        next: { text: '다음 날 선우가 또 흉내를 낸다. 화제 돌리기는 이번엔 안 통한다.', ask: '이제 어떻게 할까?', choices: [
          { id: 'name', text: '"그거 놀림이야. 은호 말투 흉내 그만하자"라고 말한다', result: '웃던 몇 명이 멈칫한다.', impact: [{ who: '은호', text: '편이 있다고 느낀다', tone: 1 }], end: '놀림이라고 이름 붙였어요.',
            next: { text: '선우가 "농담인데 왜 진지해?"라고 한다.', choices: [
              { id: 'calm', text: '"한 사람만 계속 웃음거리면 농담이 아니야"라고 차분히 말한다', result: '선우가 더 하지 않는다.', impact: [{ who: '반 분위기', text: '흉내가 멈춘다', tone: 1 }] },
              { id: 'insult', text: '"너야말로 말투 이상하거든"이라고 되받는다', result: '말싸움이 커진다.', why: '깎아내리는 말로 맞서면 또 다른 비하가 돼요.' }] } },
          { id: 'tired', text: '매번 돌리기 지쳐 그냥 둔다', result: '흉내가 반 전체로 퍼진다.', impact: [{ who: '은호', text: '혼자 견딘다', tone: -1 }], why: '되풀이되면 분명히 말하거나 어른에게 알려요.' }] } },
      { id: 'say', text: '"그거 놀림이야"라고 바로 말한다', result: '선우가 "웃자고 한 건데"라며 머쓱해한다.', impact: [{ who: '은호', text: '편이 있다고 느낀다', tone: 1 }], end: '놀림이라고 바로 말했어요.',
        next: { text: '흉내는 멈췄지만 은호가 혼자 창밖을 보고 있다.', ask: '다음은?', choices: [
          { id: 'near', text: '쉬는 시간이 끝난 뒤 은호 곁에 가서 말을 건다', result: '은호가 고향 이야기를 조금 들려준다.', impact: [{ who: '은호', text: '반에 자리가 있다고 느낀다', tone: 1 }], end: '은호 곁에 갔어요.',
            next: { text: '일주일 뒤 다른 친구들이 은호 말투를 또 흉내 낸다.', choices: [
              { id: 'teacher', text: '되풀이되니 담임 선생님께 알린다', result: '선생님이 학급에서 말투 흉내 문제를 다룬다.', impact: [{ who: '반 분위기', text: '함께 지킬 약속이 생긴다', tone: 1 }] },
              { id: 'alone', text: '혼자 또 말리다 지친다', result: '흉내는 다른 사람에게서 계속된다.', why: '되풀이되면 어른과 함께 다뤄요.' }] } },
          { id: 'done', text: '말했으니 됐다며 지나간다', result: '은호는 여전히 혼자다.', impact: [{ who: '은호', text: '외롭다', tone: 0 }], why: '멈춘 뒤 곁에 가는 것도 조력이에요.' }] } }] };
    const R1 = [{ id: 'r1', text: '한 사람을 계속 웃음거리로 만들면 농담이 아니다' }, { id: 'r2', text: '말리기·곁에 가기·알리기가 존중과 안전을 지킨다' },
      { id: 'r3', text: '사실을 말한 것뿐이다', why: '사실이라도 깎아내리려고 되풀이하면 언어폭력이에요.' }, { id: 'r4', text: '다들 쓰는 말이라 괜찮다', why: '다들 써도 듣는 사람이 상처받으면 괜찮지 않아요.' }];
    const R1C = { reasons: [{ id: 'r5', text: '같이 웃은 길에서는 흉내가 더 커졌다' }, { id: 'r6', text: '놀림이라고 말한 길에서는 흉내가 멈췄다' }], ok: ['r5', 'r6'] };
    const STEPS = [
      { id: 'k1', text: '별명이 붙는다' }, { id: 'k2', text: '같은 별명이 되풀이된다' }, { id: 'k3', text: '말투·몸짓을 흉내 낸다' },
      { id: 'k4', text: '그 친구 옆자리를 피한다' }, { id: 'k5', text: '모둠에서 빼놓는 따돌림이 된다' },
    ];

    ALL.push(
      // ---- 도입 ----
      M('intro.word-audit', {
        title: '교실에서 들리는 말 집계', method: '교실에서 들리는 말 가상 집계 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '두 유형(외모·성적) 막대만 함께 읽는다.', base: '시연 판에서 네 유형(외모·성적·출신·형편) 막대를 읽고 가장 많은 유형을 고른다.', challenge: '왜 그 유형이 가장 많은지 추론해 한 문장으로 말한다.' },
        intro: {
          teacher: '"가상의 한 학급에서 일주일 동안 들린 깎아내리는 말을 유형별로 세어 보니, 가장 많은 유형은 무엇이었을까요?" 시연 단추로 막대그래프에서 \'외모를 깎아내리는 말\'을 고르는 모습을 보인다. 실제 비하어는 칠판에도 쓰지 않고 \'외모를 깎아내리는 말\'처럼 유형으로만 말한다. "다들 쓰는 말이라 괜찮다"는 말이 나오면 "21번 들은 사람이 한 명이라면요?"라고 되묻는다. 수치는 가상이다.',
          student: '가상 학급에서 일주일 동안 들린 깎아내리는 말을 외모·성적·출신·형편으로 나눈 그래프를 읽고, 가장 많은 유형과 그 영향을 생각해요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', horizontal: true, title: '가상 학급 일주일 — 깎아내리는 말 유형별 횟수', unit: '번', xLabel: '유형', yLabel: '횟수', max: 25, data: AUDIT, question: '가장 많이 들린 유형은?', choices: AUDIT.map((r) => r[0]) }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper-cut classroom with small sharp-edged speech bubbles floating around, grouped into four piles on a chart', banner: '어떤 말이 가장 많을까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '실제 비하어는 화면·칠판에 쓰지 않는다. 수치는 모두 가상이다.',
      }),
      M('intro.hidden-meaning', {
        title: '말 속에 숨은 고정관념 찾기', method: '말 속에 숨은 고정관념 짝 짓기', tool: 'wordcards', minutes: 6,
        levels: { easy: '표현 카드 넷 가운데 둘을 교사와 함께 숨은 고정관념에 짝 짓는다.', base: '시연 판에서 표현 카드 넷이 숨은 고정관념 칸에 짝 지어지는 모습을 보고 까닭을 말한다.', challenge: '표현 하나를 깎아내리지 않는 말로 바꿔 말한다.' },
        intro: {
          teacher: '"\'공부 못하는 애가 뭘 알아\' — 이 말 속에는 어떤 생각이 숨어 있을까요?" 시연 단추로 표현 카드가 \'성적이 사람의 값을 정한다\' 같은 숨은 고정관념 칸에 짝 지어지는 모습을 보인다. "사실을 말한 것뿐"이라는 말이 나오면 "성적이 낮다는 것과 \'뭘 알아\'는 같은 말일까요?"라고 되묻는다.',
          student: '흔히 쓰는 깎아내리는 표현 카드 속에 숨은 고정관념을 찾아 짝 지어요.',
          demo: { tool: 'wordcards', options: { mode: 'match', slots: [...new Set(HIDDEN.map((c) => c.to))].map((t, i) => ({ id: `s${i + 1}`, label: t })), cards: strip(HIDDEN) }, sequence: [{ match: { s1: 'h1', s2: 'h2', s3: 'h3', s4: 'h4' } }] },
          art: { draw: 'a paper-cut speech bubble lifted up to reveal a hidden label underneath, students peeking at it', banner: '말 아래 숨은 생각', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '표현 카드는 순화한 예시다. 반에 같은 처지의 학생이 있으면 예시를 바꾼다. ' + SAFE_NOTE,
      }),

      // ---- 활동 ----
      M('act.speech-dilemma', {
        title: '친구가 출신을 놀릴 때', method: '출신·말투 놀림 갈림길 따라가기', tool: 'dilemma', minutes: 15,
        levels: { easy: '갈림 2번까지 가고, 고를 때마다 은호에게 생기는 영향이 바로 보인다.', base: '갈림 3번까지 가고, 영향 표시는 맞힌 뒤에만 보인다. 끝에서 근거를 고른다.', challenge: '갈림 3번 뒤 같이 웃은 길의 결말과 견주는 근거 카드까지 고르고, 선택의 근거를 존중·안전 두 기준으로 활동지에 쓴다.' },
        activity: {
          title: '친구가 출신을 놀릴 때', tool: 'dilemma',
          teacher: '"화제 돌리기, \'그거 놀림이야\', 나중에 곁에 가기 — 어떤 길이 은호를 지킬까요?" 학생마다 한 길을 끝까지 가 본 뒤 견주게 한다. "웃자고 한 걸 왜 진지하게 받냐"는 학생에게 "한 사람만 계속 웃음거리라면 누구에게 웃긴 걸까요?"라고 되묻는다. 흉내 낸 선우를 \'나쁜 애\'로 부르지 않고 멈출 행동으로 말하고, 깎아내리는 말로 맞서는 길은 또 다른 비하라는 점을 짚는다.',
          task: '전학 온 학생의 말투를 흉내 내는 장면에서 세 번 골라 결과를 따라가고, 끝에서 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL({ easy: '말투 흉내가 시작됐어요. 두 번 골라 결과를 보고 근거를 고르세요.', base: '말투 흉내가 시작됐어요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 간 뒤, 같이 웃은 길의 결말과 견주는 근거까지 고르세요.' },
              '말투 흉내', D1, [['say', 'near', 'teacher'], ['topic', 'name', 'calm']], R1, ['r1', 'r2'], R1C),
            ONE('"사실을 말한 것뿐"이라는 말에 맞는 길을 고르세요.', '"사실인데?"', { text: '현서가 시험 점수가 낮은 다인에게 "너 꼴찌잖아, 사실이잖아"라고 반 친구들 앞에서 말한다.', ask: '어떻게 볼까?', motif: 'house', choices: [
              { id: 'harm', text: '사실이어도 여럿 앞에서 깎아내리면 상처를 주는 말이다', result: '다인이 고개를 숙인 것이 보인다.', impact: [{ who: '다인', text: '창피를 당한다', tone: -1 }], ending: '사실보다 말의 목적과 상처를 봤어요.' },
              { id: 'fact', text: '사실이니 괜찮다', result: '다인은 다음 시험 이야기만 나와도 피한다.', why: '사실이어도 깎아내리려고 한 말은 상처가 돼요.' }] }, ['harm'],
              [{ id: 'q1', text: '말이 사실인지보다 깎아내리려는지를 본다' }, { id: 'q2', text: '사실은 언제나 말해도 된다', why: '사실이라도 사람을 낮추는 데 쓰면 언어폭력이 될 수 있어요.' }], ['q1']),
            ONE('형편을 놀리는 말을 들었을 때의 길을 고르세요.', '형편 놀림', { text: '누군가 은호의 낡은 운동화를 보고 "그거 어디서 주웠냐"라고 한다.', ask: '나는?', motif: 'house', choices: [
              { id: 'stop', text: '"신발로 사람 평가하지 말자"라고 짧게 말한다', result: '말한 친구가 머쓱해하며 더 말하지 않는다.', impact: [{ who: '은호', text: '존중받는다', tone: 1 }], ending: '짧게 멈추자고 말했어요.' },
              { id: 'pass', text: '못 들은 척한다', result: '다른 친구들도 따라 웃는다.', why: '못 들은 척하면 비하가 괜찮은 말처럼 굳어요.' }] }, ['stop'], null, null,
              { conclude: '외모·성적·출신·형편을 깎아내리는 말은 사실이어도, 다들 써도 상처가 돼요. 멈추자고 말하고, 곁에 가고, 되풀이되면 알려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내가 고른 선택의 근거를 존중과 안전 두 기준으로 한 문장씩 써요.' }],
          easy: [{ type: 'choice', prompt: '친구의 말투를 흉내 내는 놀림을 봤을 때 알맞은 행동은?', options: ['"그거 놀림이야"라고 말하고 그 친구 곁에 간다', '분위기상 같이 웃는다'], answer: '"그거 놀림이야"라고 말하고 그 친구 곁에 간다' }] },
        notes: SAFE_NOTE,
      }),
      M('act.case-analysis', {
        title: '비하가 따돌림으로 굳는 과정', method: '비하가 따돌림으로 굳는 과정 차례 놓기', tool: 'timeline', minutes: 15,
        levels: { easy: '단계 카드 3장(별명·흉내·따돌림)을 차례대로 놓고, 놓으면 바로 맞는지 알려 준다.', base: '단계 카드 5장을 차례대로 놓고 단계마다 개입 지점(누가 무엇을 할 수 있었나)을 고른다.', challenge: '셋째 문항에서 단계마다 개입 문장 카드를 이어 붙인다.' },
        activity: {
          title: '비하가 따돌림으로 굳는 과정', tool: 'timeline',
          teacher: '"별명 하나가 어떻게 모둠에서 빼놓는 따돌림까지 갔을까요?" 단계 카드를 놓은 뒤 \'여기서 멈출 수 있었던 사람은 누구였나\'를 단계마다 묻는다. "별명은 원래 다 있다"는 학생에게 "그 별명이 되풀이되고 흉내가 붙고 자리를 피하게 됐다면, 아직 별명일 뿐일까요?"라고 되묻는다. 단계가 늦을수록 개입이 어려워진다는 점을 짚는다.',
          task: '깎아내리는 별명이 따돌림으로 굳어 가는 가상 사례의 단계 카드를 차례대로 놓고, 단계마다 개입 지점을 찾아요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(OB('비하가 따돌림으로 굳는 단계 카드를 차례대로 놓으세요.', STEPS, { axis: ['처음', '나중'] }),
              OB('단계 카드 3장을 차례대로 놓으세요.', [STEPS[0], STEPS[2], STEPS[4]], { axis: ['처음', '나중'] })),
            IT(PB('가장 쉽게 멈출 수 있는 이른 단계의 개입만 골라 담으세요.', '이른 단계의 개입', [
              { id: 'p1', text: '별명이 처음 나올 때 "그 별명 별로야"라고 말하기', ok: true }, { id: 'p2', text: '되풀이될 때 그 친구에게 괜찮은지 묻기', ok: true },
              { id: 'p3', text: '따돌림이 굳은 뒤에야 모르는 척하기' }, { id: 'p4', text: '같이 흉내 내기' }])),
            IT(MB('단계마다 개입할 사람과 행동을 이으세요.', [['별명이 붙는다', '옆 친구가 "그 별명 별로야"라고 말한다'], ['흉내 낸다', '보던 친구가 "그거 놀림이야"라고 말한다'], ['자리를 피한다', '누군가 먼저 옆자리에 앉는다']], ['다들 그냥 지켜본다'], { axis: ['단계', '개입'] }),
              null,
              MB('단계마다 개입 문장을 이으세요(더 많아요).', [['별명이 붙는다', '"그 별명 별로야, 이름 불러 주자"'], ['같은 별명이 되풀이된다', '"계속 그러는 건 놀림이야"'], ['흉내 낸다', '"말투 흉내 그만하자"'], ['자리를 피한다', '"여기 같이 앉자"'], ['따돌림이 된다', '"선생님, 모둠 일로 이야기할 게 있어요"']], ['"원래 다 그래"'], { axis: ['단계', '개입 문장'] }),
              { conclude: '비하는 별명 → 되풀이 → 흉내 → 피하기 → 따돌림으로 굳어 가요. 이른 단계일수록 작은 말 한마디로 멈출 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '단계마다 개입 문장을 써요.', columns: ['단계', '개입 문장'], cells: [['별명', ''], ['흉내', ''], ['따돌림', '']], answer: '(예) 그 별명 별로야, 말투 흉내 그만하자, 선생님께 모둠 일 의논하기' }] },
      }),
      M('act.alternative-writing', {
        title: '대안 표현 바꿔 쓰기', method: '대안 표현 바꿔 쓰기', tool: 'rubric-writing', minutes: 15,
        levels: { easy: '깎아내리는 표현 하나를 틀로 바꿔 쓴다.', base: '표현 세 개를 같은 뜻을 전하지만 사람을 깎아내리지 않는 말로 바꿔 쓰고 기준표(뜻 유지·깎아내림 없음·상대 입장)로 점검한다.', challenge: '셋째 문항에서 바꾼 말이 왜 나은지 설명을 붙인다.' },
        activity: {
          title: '대안 표현 바꿔 쓰기', tool: 'rubric-writing',
          teacher: '"\'공부 못하는 애가 뭘 알아\'로 전하고 싶었던 진짜 뜻은 무엇이었을까요? \'네 의견은 근거가 더 필요해 보여\'처럼 바꿀 수 있을까요?" 전하고 싶은 뜻은 남기고 깎아내리는 부분만 빼게 한다. "돌려 말하면 답답하다"는 학생에게 "상대가 들을 수 있게 말해야 뜻이 전해져요"라고 말해 준다.',
          task: '깎아내리는 표현 세 개를, 같은 뜻을 전하지만 사람을 깎아내리지 않는 말로 바꿔 쓰고 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(RW('표현 ① "공부 못하는 애가 뭘 알아"를 바꿔 쓰세요.', { topic: '"공부 못하는 애가 뭘 알아"로 전하고 싶었던 뜻(의견에 동의하지 않음)을 깎아내리지 않는 말로 한두 문장 바꿔 쓰세요.', min: 12, max: 100, s: [1, 2], title: '바꿔 쓰기 ①' }, ['전하려던 뜻을 남겼다', '사람을 깎아내리지 않았다', '상대가 들을 수 있는 말이다']),
              RW('틀을 채워 표현 ①을 바꿔 쓰세요.', { topic: '표현 ①을 바꿔 쓰세요.', min: 10, max: 80, s: [1, 2], starter: '나는 네 의견에 ___. 왜냐하면 ___.' }, ['사람을 깎아내리지 않았다', '상대가 들을 수 있는 말이다'])),
            IT(RW('표현 ② "그 옷 어디서 주웠냐"를 바꿔 쓰세요.', { topic: '"그 옷 어디서 주웠냐"를 쓰지 않고, 굳이 할 말이 있다면 상대를 존중하는 말로 한두 문장 바꿔 쓰세요(할 말이 없다면 말하지 않기도 대안이다).', min: 10, max: 100, s: [1, 2], title: '바꿔 쓰기 ②' }, ['사람을 깎아내리지 않았다', '형편으로 평가하지 않았다'])),
            IT(RW('표현 ③ "시골에서 와서 그래"를 바꿔 쓰세요.', { topic: '"시골에서 와서 그래"로 무리 지어 낮추지 않고, 그 사람의 행동만 말하는 문장으로 한두 문장 바꿔 쓰세요.', min: 12, max: 100, s: [1, 2], title: '바꿔 쓰기 ③' }, ['출신으로 묶어 말하지 않았다', '사람을 깎아내리지 않았다']),
              null,
              RW('세 표현 가운데 하나를 골라 바꾼 말과, 그 말이 왜 나은지 함께 쓰세요.', { topic: '세 표현 가운데 하나를 골라 바꾼 말을 옮기고, 바꾼 말이 왜 나은지 까닭을 두세 문장으로 쓰세요.', min: 30, max: 180, s: [2, 3], title: '왜 나을까' }, ['바꾼 말을 옮겨 썼다', '왜 나은지 설명했다', '상대 입장을 생각했다']),
              { conclude: '대안 표현은 전하고 싶은 뜻은 남기고, 사람을 깎아내리거나 무리로 묶는 부분만 빼는 거예요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내가 바꾼 대안 표현 하나를 옮겨 써요.' }] },
      }),
      M('act.class-campaign', {
        title: '"그 말 대신" 교실 캠페인', method: '"그 말 대신" 교실 게시판 설계', tool: 'collage', minutes: 15,
        levels: { easy: '게시판에 짝 둘(그 말 → 대신 할 말)을 놓을 자리를 조각 3개 이상으로 꾸민다(문구는 활동지).', base: '짝 넷을 놓을 자리를 조각 4개 이상으로 꾸미고, 짝 문구를 활동지에 쓴다.', challenge: '게시판 운영 규칙(누가 바꾸나·언제 새로 붙이나)을 활동지에 정하고, 가로 접는 선 기준으로 위아래가 같은 무늬로 꾸민다.' },
        activity: {
          title: '"그 말 대신" 교실 캠페인', tool: 'collage',
          teacher: '"게시판에 \'그 말\'을 그대로 붙이면 오히려 그 말을 퍼뜨리는 게 아닐까요?" \'그 말\' 칸은 \'외모를 깎아내리는 말\'처럼 유형으로만 쓰고, \'대신 할 말\'을 크게 쓰게 한다(교구에는 글자를 넣을 수 없어 문구는 활동지에 쓴다). 실제 비하어와 특정 학생을 떠올리게 하는 그림은 넣지 않는다.',
          task: '깎아내리는 말 유형과 대신 쓸 말의 짝을 담을 교실 게시판 바탕을 조각으로 꾸미고, 짝 문구는 활동지에 써요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '짝 넷을 놓을 자리가 보이게 게시판 바탕을 꾸미세요.', toolOptions: { maxPieces: 14 }, target: { selfCheck: ['짝마다 놓을 자리를 두었다', '실제 비하어를 넣지 않았다', '짝 문구를 활동지에 썼다'], minPieces: 4 } },
              { prompt: '짝 둘을 놓을 자리를 조각 3개 이상으로 꾸미세요.', target: { selfCheck: ['짝마다 놓을 자리를 두었다', '짝 문구를 활동지에 썼다'], minPieces: 3 } }),
            IT({ prompt: '\'대신 할 말\' 자리를 하트 조각으로 강조해 꾸미세요.', toolOptions: { maxPieces: 14 }, target: { has: [{ shape: 'heart', min: 1 }], pieces: { min: 3 }, selfCheck: ['대신 할 말 자리가 더 크게 보인다'] } }),
            IT({ prompt: '게시판 테두리 무늬를 꾸미고 점검하세요.', toolOptions: { maxPieces: 14 }, target: { selfCheck: ['특정 학생을 떠올리게 하는 그림이 없다', '멀리서도 읽기 쉽게 꾸몄다'], minPieces: 3 } },
              null,
              { prompt: '가로 접는 선을 기준으로 위아래가 같은 무늬가 되게 꾸미고, 운영 규칙을 점검하세요.', toolOptions: { guide: 'horizontal' }, target: { symmetry: 'horizontal', selfCheck: ['게시판 운영 규칙을 활동지에 썼다'], minPieces: 2 } },
              { conclude: '"그 말 대신" 게시판은 깎아내리는 말을 퍼뜨리지 않고, 대신 할 말을 크게 보여 줘요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '게시판에 붙일 짝을 써요.', columns: ['그 말(유형)', '대신 할 말'], cells: [['성적을 깎아내리는 말', ''], ['외모를 깎아내리는 말', ''], ['출신·말투 흉내', ''], ['형편을 깎아내리는 말', '']], answer: '(예) 네 의견엔 근거가 더 필요해 보여, (말하지 않기), 네 이야기 더 듣고 싶어, 운동화 편해 보이네' }] },
        notes: '교구는 글자를 넣지 못해 바탕만 꾸미고 문구는 활동지에 쓰게 했다. 실제 비하어는 쓰지 않는다.',
      }),

      // ---- 정리 ----
      M('wrap.self-words', {
        title: '내 말 습관 점검 계획', method: '내 말 습관 점검 계획 띠', tool: 'pattern', minutes: 7,
        levels: { easy: '띠 하나(아침·점심)의 빈칸에 \'말점검\' 조각을 채운다.', base: '띠(아침·점심·방과 후)의 빈칸 둘에 \'말점검\' 조각을 채워 하루 점검 규칙을 완성한다.', challenge: '빈칸을 채운 뒤 점검 방법을 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"오늘 본 유형 가운데 내가 하루 동안 조심할 말은 무엇인가요? 언제 점검하면 좋을까요?" 띠의 빈칸에 \'말점검\' 조각을 넣어 \'때 → 점검\' 규칙을 완성하게 한다. "나는 그런 말 안 한다"는 학생에게 "다들 쓰는 말이라 모르고 쓰는 말은 없을까요?"라고 되묻는다. 점검 내용은 남에게 보여 주지 않아도 된다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'pattern', options: { mode: 'fill', seq: ['아침', '말점검', '점심', null, '방과후', null], palette: ['말점검', '별명'] }, prompt: '하루 말 습관 점검 띠의 빈칸을 규칙에 맞게 채워요.', target: { fill: ['말점검', '말점검'] }, difficulty: 0.2 },
              { prompt: '아침·점심 띠의 빈칸을 채워요.', toolOptions: { seq: ['아침', '말점검', '점심', null] }, target: { fill: ['말점검'] } }),
            { type: 'choice', prompt: '"다들 쓰는 말이라 괜찮다"에 대한 생각으로 알맞은 것은?', options: ['다들 써도 듣는 사람이 상처받으면 괜찮지 않다', '많이 쓰면 괜찮아진다', '친구끼리는 다 괜찮다'], answer: 0, difficulty: 0.15, explain: '말의 무게는 듣는 사람이 정해요.' },
            { type: 'short', prompt: '조심할 말 유형 하나와 점검 방법(예: 점심 뒤 하루 말 떠올리기)을 써요.' },
          ],
        },
        worksheet: {
          title: '내 말 습관 점검',
          items: [
            { type: 'table', prompt: '하루 점검 계획을 써요(남에게 보여 주지 않아도 돼요).', columns: ['때', '조심할 말 유형'], cells: [['아침', ''], ['점심', ''], ['방과 후', '']], answer: '(예) 외모, 성적, 출신·말투' },
            { type: 'short', prompt: '점검 방법을 한 문장으로 써요.' },
          ],
        },
        notes: '계획 글의 \'점검 그래프\'는 교구 pattern 의 빈칸 채우기 띠로 했다(때 → 말점검 되풀이).',
      }),
      M('wrap.response-chant', {
        title: '대응 한마디 리듬', method: '대응 한마디 리듬 치기', tool: 'keyboard', minutes: 7,
        levels: { easy: '구호 "그 말은 아파"를 4박 마디 하나 리듬으로 짓는다(박 수가 보인다).', base: '구호 두 줄("그 말은 아파 / 다른 말로")을 4박 마디 둘에 맞춰 짓는다.', challenge: '상황별 대응 구호 한 줄을 더 만들어 4박 마디 셋으로 짓는다.' },
        wrap: {
          teacher: '"깎아내리는 말을 들었을 때 길게 따지기 어렵다면, 짧은 한마디가 있으면 좋겠죠? \'그 말은 아파, 다른 말로\'를 리듬에 실어 볼까요?" 리듬 블록으로 박을 채운 뒤 함께 친다. 이 구호는 상대를 깎아내리지 않고 말만 멈추게 하는 말이라고 짚는다.',
          exitTicket: [
            IT(Object.assign(X('keyboard', BEAT('구호 "그 말은 아파 / 다른 말로"를 4박 마디 두 개 리듬으로 지어요.', { measures: 2, blocks: ['q', 'e', 'h', 'qr'] }, { beats: true, selfCheck: ['구호 글자에 맞춰 박을 나눴다', '모둠과 함께 쳐 보았다'] })), { difficulty: 0.2 }),
              { prompt: '구호 한 줄 "그 말은 아파"를 4박 마디 하나 리듬으로 지어요.', toolOptions: { measures: 1, blocks: ['q', 'h', 'qr'], showBeats: true }, target: { beats: true, selfCheck: ['구호 글자에 맞춰 박을 나눴다'] } },
              { prompt: '상황별 대응 구호 한 줄을 더해 4박 마디 세 개 리듬으로 지어요.', toolOptions: { measures: 3, blocks: ['q', 'e', 'h', 'qr', 'er'] }, target: { beats: true, selfCheck: ['구호 글자에 맞춰 박을 나눴다', '상황별 구호 한 줄을 더했다', '모둠과 함께 쳐 보았다'] } }),
            { type: 'choice', prompt: '깎아내리는 말을 멈추게 하는 대응으로 알맞은 것은?', options: ['"그 말은 아파, 다른 말로 하자"', '"너야말로 더 이상해"', '못 들은 척 웃기'], answer: 0, difficulty: 0.15, explain: '상대를 깎아내리지 않고 말만 멈추게 해요.' },
          ],
        },
        worksheet: {
          title: '대응 한마디',
          items: [
            { type: 'blank', prompt: '구호를 완성해요.', text: '그 말은 ___, 다른 ___', answer: '아파, 말로' },
            { type: 'short', prompt: '상황별 대응 구호 한 줄을 써요.' },
          ],
        },
        notes: '교구는 구호 글자를 치지 않는다 — 리듬 블록으로 4박 마디를 채우고, 구호 글은 문제 글·활동지에 적었다.',
      }),
    );
  }

  // ==== 9학년 · 학교폭력 신고 뒤 처리의 큰 흐름과 학교 밖에서 생긴 일 (bully.m.g9-process-flow) ====
  {
    const M = MK('g9-process-flow', [9]);
    const FLOW = [
      { id: 'p1', text: '신고·접수' }, { id: 'p2', text: '피해 학생 보호(분리 등)' }, { id: 'p3', text: '사안 조사' },
      { id: 'p4', text: '학교의 결정' }, { id: 'p5', text: '조치와 회복 지원' },
    ];
    const D0 = { text: '학원 버스에서 같은 학교 가온이 뒷자리 학생들에게 가방을 발로 차이고 놀림을 받는다. 오늘이 세 번째다.', ask: '알릴까?', motif: 'house', choices: [
      { id: 'tell', text: '학교 밖 일이어도 담임 선생님께 알린다', result: '선생님이 "학교 밖 일도 알려 줘서 고마워"라며 살피기 시작한다.', impact: [{ who: '가온', text: '도움이 시작된다', tone: 1 }],
        next: { text: '선생님이 "학원 선생님께도 알리면 버스 안에서 더 빨리 지킬 수 있겠다"고 한다.', ask: '어떻게 할까?', choices: [
          { id: 'both', text: '보호자와 함께 학원에도 알린다', result: '학원과 학교가 함께 가온을 살핀다.', impact: [{ who: '가온', text: '두 곳에서 보호를 받는다', tone: 1 }] },
          { id: 'onlyschool', text: '학교에만 말했으니 됐다', result: '버스 안 일은 학원이 모른 채 이어진다.', why: '일이 생긴 곳의 어른에게도 알리면 더 빨리 지켜요.' }] } },
      { id: 'skip', text: '학원 일은 학교와 상관없다며 넘긴다', result: '버스 안 놀림이 이어진다.', why: '학교 밖에서 학생 사이에 생긴 일도 학교에 알릴 수 있어요.' }] };
    const D1 = { text: '나는 담임 선생님 역할이다. 반 단톡방에서 승민을 빼고 놀리는 일이 몇 주째 이어진다는 신고를 아린에게 받았다.', ask: '가장 먼저 할 일은?', motif: 'house', choices: [
      { id: 'protect', text: '승민이 안전한지 먼저 살피고 이야기를 듣는다', result: '승민이 "학교 오기가 무서웠어요"라고 말한다.', impact: [{ who: '승민', text: '보호가 먼저 시작된다', tone: 1 }], end: '보호를 먼저 했어요.',
        next: { text: '승민이 안정을 찾았다. 신고한 아린은 "제가 말한 거 알려지면 어떡해요?"라고 걱정한다.', ask: '다음은?', choices: [
          { id: 'reassure', text: '"네가 말한 건 함부로 알리지 않을게. 알려 줘서 고마워"라고 한다', result: '아린이 안심한다.', impact: [{ who: '아린', text: '신고자로서 보호받는다', tone: 1 }], end: '신고한 학생도 지켰어요.',
            next: { text: '이제 무슨 일이 있었는지 알아볼 차례다.', choices: [
              { id: 'investigate', text: '절차에 따라 사안을 조사하며 당사자들의 이야기를 듣는다', result: '사실이 차례로 드러난다.', impact: [{ who: '승민', text: '정확한 도움을 받는다', tone: 1 }] },
              { id: 'shout', text: '단톡방 학생들을 교실 앞에 세워 꾸짖는다', result: '이야기를 듣기 전에 몰아세우게 된다.', impact: [{ who: '반 분위기', text: '신고자를 찾는 눈치가 생긴다', tone: -1 }], why: '사안은 절차에 따라 조사하고, 공개로 꾸짖지 않아요.' }] } },
          { id: 'reveal', text: '"아린이 알려 줬어"라고 단톡방 학생들에게 말한다', result: '아린을 향한 눈총이 시작된다.', impact: [{ who: '아린', text: '보복이 걱정된다', tone: -1 }], why: '신고한 학생의 이름은 함부로 알리지 않아요.' }] } },
      { id: 'investigatefirst', text: '먼저 단톡방 학생들을 불러 조사부터 한다', result: '그사이 승민은 혼자 교실에 있다.', impact: [{ who: '승민', text: '보호 없이 기다린다', tone: -1 }], end: '보호보다 조사를 먼저 했어요.',
        next: { text: '조사 중에 승민이 결석했다.', ask: '이제 어떻게 할까?', choices: [
          { id: 'protectlate', text: '승민과 보호자에게 연락해 안전을 살핀다', result: '승민이 상담 선생님과 이야기를 시작한다.', impact: [{ who: '승민', text: '늦었지만 보호를 받는다', tone: 1 }], end: '늦었지만 보호를 챙겼어요.',
            next: { text: '조사가 끝나 학교가 결정할 차례다.', choices: [
              { id: 'decide', text: '학교의 결정과 함께 승민의 회복 지원(상담)을 잇는다', result: '조치와 회복 지원이 함께 이루어진다.', impact: [{ who: '승민', text: '회복을 지원받는다', tone: 1 }] },
              { id: 'endonly', text: '결정만 하고 끝낸다', result: '승민은 다시 교실에 들어가기 어렵다.', why: '조치와 함께 회복 지원까지가 흐름이에요.' }] } },
          { id: 'wait', text: '조사가 끝날 때까지 기다린다', result: '승민이 계속 결석한다.', impact: [{ who: '승민', text: '혼자 견딘다', tone: -1 }], why: '피해 학생 보호를 먼저 살펴요.' }] } },
      { id: 'mediate', text: '"친구끼리 화해해"라며 둘을 바로 만나게 한다', result: '승민이 무서워 "괜찮아요"라고만 한다.', impact: [{ who: '승민', text: '억지로 괜찮은 척한다', tone: -1 }], why: '힘이 기운 괴롭힘을 바로 화해로 넘기면 피해 학생이 보호받지 못해요.', ending: '억지 화해로 덮였어요.' }] };
    const R1 = [{ id: 'r1', text: '신고를 받으면 피해 학생 보호를 먼저 살핀다' }, { id: 'r2', text: '신고한 학생의 이야기는 함부로 알리지 않는다' },
      { id: 'r3', text: '신고하면 곧바로 처벌로 끝난다', why: '보호·조사·결정·회복 지원으로 이어지는 흐름이 있어요.' }, { id: 'r4', text: '바로 화해시키는 것이 가장 빠르다', why: '힘이 기운 괴롭힘은 보호와 조사가 먼저예요.' }];
    const R1C = { reasons: [{ id: 'r5', text: '조사부터 한 길에서는 승민이 결석했다' }, { id: 'r6', text: '보호부터 한 길에서는 승민이 이야기를 시작했다' }], ok: ['r5', 'r6'] };
    const TOWN = { grid: [6, 4], title: '가상 동네 지도', places: [
      { name: '우리 학교', icon: 'school', at: [0, 0] }, { name: '학원', icon: 'office', at: [3, 0] },
      { name: '놀이터', icon: 'park', at: [5, 2] }, { name: '편의점', icon: 'market', at: [2, 3] },
      { name: '우리 집(보호자)', icon: 'apartment', at: [0, 3] }, { name: HELP, icon: 'post', at: [5, 0] },
    ] };
    const TOWN3 = Object.assign({}, TOWN, { places: TOWN.places.filter((p) => ['우리 학교', '학원', '우리 집(보호자)'].includes(p.name)) });

    ALL.push(
      // ---- 도입 ----
      M('intro.flow-guess', {
        title: '신고 뒤에 무슨 일이 생길까', method: '신고 뒤 흐름 예상하기', tool: 'timeline', minutes: 6,
        levels: { easy: '빈칸 둘(보호·조사)을 예상한 뒤 시연 판의 흐름을 본다.', base: '빈칸 셋(보호·조사·결정)을 예상한 뒤 시연 판에서 다섯 단계 흐름이 놓이는 모습을 본다.', challenge: '단계마다 그 목적을 한 줄로 말한다.' },
        intro: {
          teacher: '"신고하면 바로 처벌로 끝날까요? 신고와 조치 사이에는 무엇이 있을까요?" 학생들이 예상을 말한 뒤 시연 단추로 \'신고·접수 → 보호 → 조사 → 결정 → 조치와 회복 지원\'이 놓이는 모습을 보인다. "신고하면 일이 커지기만 한다"는 말이 나오면 "흐름의 둘째 칸이 무엇인가요?"라고 되묻는다. 세부 절차는 학교마다 안내를 따르고, 오늘은 큰 흐름만 본다고 밝힌다.',
          student: '학교폭력 신고 뒤에 어떤 일이 이어지는지 빈칸을 예상하고, 큰 흐름 다섯 단계를 확인해요.',
          demo: { tool: 'timeline', options: { mode: 'order', axis: ['신고', '회복'], slots: 5, cards: [FLOW[3], FLOW[0], FLOW[4], FLOW[2], FLOW[1]] }, sequence: [{ order: FLOW.map((c) => c.id) }] },
          art: { draw: 'a paper-cut path of five stepping stones from a small bell to a growing plant, students standing at the first stone', banner: '신고 뒤에는?', extra: [{ motif: 'sprout', x: 300, y: 96 }] },
        },
        notes: '세부 처리 단계는 근거가 약해 큰 흐름만 다룬다. 기관 이름·기한·조치 종류는 말하지 않고, 학교의 안내를 따른다고 말한다.',
      }),
      M('intro.outside-school', {
        title: '학원·동네에서 생긴 일도', method: '학원·동네에서 생긴 일도 알릴지 고르기', tool: 'dilemma', minutes: 6,
        levels: { easy: '시연 판 첫 장면에서 두 갈래의 결과를 함께 본다.', base: '시연 판 둘째 장면(학원에도 알리기)까지 따라가 결과를 본다.', challenge: '학교와 학원 모두에 알리는 길을 말로 정리한다.' },
        intro: {
          teacher: '"학원 버스에서 생긴 일, 학교에 말해도 될까요?" 시연 단추로 \'학교 밖 일이어도 알린다\'를 고르고 학원에도 함께 알리는 둘째 장면까지 보인다. "학교 밖 일은 학교와 상관없다"는 말이 나오면 "괴롭힌 쪽과 당한 쪽이 같은 학교 학생이라면 내일 학교에서는 어떨까요?"라고 되묻는다.',
          student: '학원 버스에서 같은 학교 학생이 괴롭힘을 받는 가상 장면에서 알릴지 고르고 결과를 봐요.',
          demo: DEMO_DIL('학교 밖에서 생긴 일', D0, [['tell', 'both']], [{ id: 'k1', text: '학교 밖 일도 알릴 수 있다' }, { id: 'k2', text: '일이 생긴 곳의 어른에게도 알린다' }]),
          art: { draw: 'a paper-cut academy shuttle bus with students in the back seats, one student hugging a bag, a school building in the distance', banner: '학교 밖이면 상관없을까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: SAFE_NOTE,
      }),

      // ---- 활동 ----
      M('act.flow-blocks', {
        title: '처리 흐름', method: '처리 흐름 블록으로 그리기', tool: 'block-coding', minutes: 15,
        levels: { easy: '곧은 길(블록 3개 안팎)로 별 둘(신고·접수·보호)을 지나 깃발(조치와 회복 지원)에 닿는다.', base: '꺾인 길로 별 넷(신고·접수·보호·사안 조사·학교의 결정)을 모두 지나 깃발에 닿고, 단계의 목적은 활동지에 단다.', challenge: '셋째 문항에서 당사자 의견을 듣는 지점(별)을 지나는 길을 짠다.' },
        activity: {
          title: '처리 흐름', tool: 'block-coding',
          teacher: '"보호 칸을 건너뛰고 조사부터 가면 피해 학생은 어디에 있게 될까요?" 판의 별은 차례대로 \'신고·접수 → 보호(분리 등) → 사안 조사 → 학교의 결정\', 깃발은 \'조치와 회복 지원\', 바위는 \'덮어 두기\'라고 읽어 준다. "결정이 나면 끝"이라는 학생에게 "깃발이 \'조치\'만이 아니라 \'회복 지원\'까지인 까닭은 무엇일까요?"라고 되묻는다. 세부 절차·기간은 다루지 않는다.',
          task: '학교폭력 신고 뒤 처리의 큰 흐름을 길 찾기 판으로 짜요. 별(단계)을 모두 지나 깃발(조치와 회복 지원)에 닿고, 바위(덮어 두기)는 피해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(ROUTE('별 넷(신고·접수·보호·사안 조사·학교의 결정)을 지나 깃발(조치와 회복 지원)에 닿게 블록을 이으세요.', { cols: 5, rows: 3, start: { x: 0, y: 1, dir: 'E' }, goal: { x: 4, y: 2 }, stars: [[1, 1], [2, 1], [2, 0], [3, 0]], rocks: [[3, 1], [1, 2]] }, { stars: true }),
              ROUTE('별 둘(신고·접수·보호)을 지나 깃발에 닿게 블록을 이으세요.', { cols: 4, rows: 2, start: { x: 0, y: 0, dir: 'E' }, goal: { x: 3, y: 0 }, stars: [[1, 0], [2, 0]], rocks: [] }, { stars: true, maxBlocks: 3 })),
            IT(ROUTE('반복 블록으로 같은 걸음을 줄여 흐름 별 넷을 지나 깃발(회복 지원)에 닿으세요.', { cols: 6, rows: 2, start: { x: 0, y: 1, dir: 'E' }, goal: { x: 5, y: 1 }, stars: [[1, 1], [2, 1], [3, 1], [4, 1]], rocks: [] }, { stars: true, use: ['rep'], maxBlocks: 3 })),
            IT(ROUTE('바위(덮어 두기)를 돌아 별(보호)을 지나 깃발에 닿으세요.', { cols: 4, rows: 3, start: { x: 0, y: 2, dir: 'N' }, goal: { x: 3, y: 2 }, stars: [[1, 0]], rocks: [[1, 2], [2, 2]] }, { stars: true }),
              null,
              ROUTE('별 둘(사안 조사 중 당사자 의견 듣기·결정 전 의견 듣기)을 지나 깃발에 닿게 블록을 이으세요.', { cols: 5, rows: 3, start: { x: 0, y: 0, dir: 'E' }, goal: { x: 4, y: 0 }, stars: [[1, 1], [3, 1]], rocks: [[2, 0], [2, 2]] }, { stars: true }),
              { conclude: '신고 뒤 흐름은 신고·접수 → 보호 → 사안 조사 → 학교의 결정 → 조치와 회복 지원이에요. 곧바로 처벌로 끝나는 것이 아니에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '단계마다 목적을 써요.', columns: ['단계', '목적'], cells: [['신고·접수', ''], ['보호(분리 등)', ''], ['사안 조사', ''], ['학교의 결정', ''], ['조치와 회복 지원', '']], answer: '(예) 일을 알게 됨, 피해 학생 안전, 사실 확인, 할 일 정하기, 바로잡고 다시 지내도록 돕기' }] },
        notes: '교구는 글 블록을 잇지 못한다 — 길 찾기 판(별 = 흐름 단계, 깃발 = 조치와 회복 지원, 바위 = 덮어 두기)으로 바꿨다. 세부 처리 단계는 근거가 약해 큰 흐름만 쓴다.',
      }),
      M('act.case-tracking', {
        title: '가상 사안 따라가기', method: '담임 선생님 역할로 가상 사안 따라가기', tool: 'dilemma', minutes: 15,
        levels: { easy: '갈림 2번까지 가고, 고를 때마다 승민과 신고한 아린에게 생기는 영향이 바로 보인다.', base: '갈림 3번까지 가고, 영향 표시는 맞힌 뒤에만 보인다. 끝에서 근거를 고른다.', challenge: '갈림 3번 뒤 조사부터 한 길의 결말과 견주는 근거 카드까지 고른다.' },
        activity: {
          title: '가상 사안 따라가기', tool: 'dilemma',
          teacher: '"담임 선생님이라면 신고를 받고 가장 먼저 무엇을 할까요?" 학생마다 선생님 역할로 한 길을 끝까지 가 본 뒤 보호를 먼저 한 길과 조사부터 한 길, 바로 화해시킨 길을 견주게 한다. "선생님은 바로 혼내면 된다"는 학생에게 "이야기를 듣기 전에 꾸짖으면 신고한 학생은 어떤 처지가 될까요?"라고 되묻는다. 실제 절차는 학교마다 안내가 있고, 오늘은 순서의 까닭을 본다.',
          task: '가상 사안(단톡방 따돌림)을 담임 선생님 역할로 따라가며 단계마다 무엇을 먼저 할지 골라요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL({ easy: '단톡방 따돌림 신고를 받았어요. 두 번 골라 결과를 보고 근거를 고르세요.', base: '단톡방 따돌림 신고를 받았어요. 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 간 뒤, 조사부터 한 길의 결말과 견주는 근거까지 고르세요.' },
              '가상 사안', D1, [['protect', 'reassure', 'investigate'], ['investigatefirst', 'protectlate', 'decide']], R1, ['r1', 'r2'], R1C),
            ONE('학교의 결정 뒤에 할 일을 고르세요.', '결정 뒤', { text: '학교의 결정이 나왔다. 승민은 아직 교실에 들어가기 어렵다고 한다.', ask: '다음은?', motif: 'house', choices: [
              { id: 'recover', text: '상담 선생님과 함께 회복을 돕는 지원을 잇는다', result: '승민이 천천히 교실로 돌아온다.', impact: [{ who: '승민', text: '회복을 지원받는다', tone: 1 }], ending: '결정 뒤 회복까지 챙겼어요.' },
              { id: 'close', text: '결정이 났으니 일이 끝났다고 한다', result: '승민은 교실 앞에서 머뭇거린다.', why: '조치와 함께 회복 지원이 이어져야 다시 지낼 수 있어요.' }] }, ['recover'],
              [{ id: 'q1', text: '흐름의 끝은 조치와 회복 지원이다' }, { id: 'q2', text: '결정이 나면 모든 일이 끝난다', why: '회복 지원까지가 흐름이에요.' }], ['q1']),
            ONE('신고한 친구가 걱정할 때 내가 할 말을 고르세요.', '신고한 친구', { text: '친구 재이가 "내가 알린 거 들키면 어떡하지"라고 걱정한다.', ask: '어떻게 답할까?', motif: 'house', choices: [
              { id: 'safe', text: '"알린 건 잘한 거야. 걱정되면 그 걱정도 선생님께 말하자"', result: '재이가 상담 선생님께 걱정을 말한다.', impact: [{ who: '재이', text: '보호를 받는다', tone: 1 }], ending: '알린 친구의 걱정을 어른에게 이었어요.' },
              { id: 'scare', text: '"그러니까 왜 알렸어"', result: '재이가 다시는 알리지 않겠다고 한다.', why: '알린 사람은 잘한 것이고, 걱정도 어른에게 말할 수 있어요.' }] }, ['safe'], null, null,
              { conclude: '신고를 받으면 피해 학생 보호를 먼저 살피고, 신고한 학생을 지키며, 조사·결정 뒤 회복 지원까지 이어져요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '신고를 받았을 때 보호를 조사보다 먼저 하는 까닭을 한 문장으로 써요.' }],
          easy: [{ type: 'choice', prompt: '신고 뒤 흐름에서 가장 먼저 살피는 것은?', options: ['피해 학생의 안전(보호)', '누구를 처벌할지'], answer: '피해 학생의 안전(보호)' }] },
        notes: '담임 선생님 역할은 순서의 까닭을 보는 연습이다. 실제 사안 처리 절차는 학교의 안내를 따른다. ' + SAFE_NOTE,
      }),
      M('act.help-map', {
        title: '도움 지도', method: '학교 밖 도움 지도 만들기', tool: 'map', minutes: 15,
        levels: { easy: '장소 셋(학교·학원·집)만 있는 지도에서 이름을 보며 일이 생긴 곳과 알릴 어른을 짚는다.', base: '장소 다섯 넘는 동네 지도에서 장소마다 도움 청할 곳을 짚고, 알맞은 어른을 고른다.', challenge: '밤 시간에 닿을 수 있는 경로를 짚고 보기를 고른다.' },
        activity: {
          title: '도움 지도', tool: 'map',
          teacher: '"놀이터에서, 편의점 앞에서 일이 생기면 누구에게 도움을 청할까요?" 가상 동네 지도에 핀을 꽂을 때마다 \'일이 생긴 곳의 어른 + 학교\'를 함께 말하게 한다. "학교 밖 일은 학교가 모른다"는 학생에게 "같은 학교 학생 사이 일이라면 학교에도 알릴 수 있어요"라고 말해 준다. 창구 번호는 판서한 것을 활동지에 옮긴다.',
          task: '가상 동네 지도에서 학교·학원·놀이터·편의점에서 일이 생겼을 때 도움 청할 곳에 핀을 꽂고, 알맞은 어른과 창구를 골라요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(PIN('학원에서 일이 생겼을 때 학원 다음으로 함께 알릴 곳에 핀을 꽂으세요.', TOWN, { place: '우리 학교' }),
              PIN('세 곳 가운데 학원에서 생긴 일을 함께 알릴 학교에 핀을 꽂으세요.', TOWN3, { place: '우리 학교' })),
            IT(PIN('주말 놀이터에서 같은 학교 학생들이 괴롭히는 걸 봤을 때 먼저 알릴 곳에 핀을 꽂고, 함께할 사람을 고르세요.', Object.assign({}, TOWN, { ask: { q: '함께 알릴 사람은?', choices: ['보호자', '놀이터에 있던 모르는 친구들', '아무도 없이 혼자'] } }), { place: '우리 집(보호자)', pick: 0 }),
              PIN('세 곳 가운데 주말에 먼저 이야기할 보호자가 있는 곳에 핀을 꽂으세요.', TOWN3, { place: '우리 집(보호자)' })),
            IT(PIN('편의점 앞에서 협박을 받았을 때, 집에 가서 함께 연락할 창구에 핀을 꽂으세요.', TOWN, { place: HELP }),
              null,
              PIN('밤 9시에 일을 알게 됐을 때 닿을 수 있는 창구에 핀을 꽂고, 알맞은 설명을 고르세요.', Object.assign({}, TOWN, { ask: { q: '밤에 닿을 수 있는 길은?', choices: [`보호자와 함께 ${HELP}에 연락한다`, '다음 주 등교할 때까지 기다린다', '단톡방에 올려 묻는다'] } }), { place: HELP, pick: 0 }),
              { conclude: '학교 밖에서 생긴 일도 일이 생긴 곳의 어른, 보호자, 학교, 학교폭력 신고·상담 창구에 알릴 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '장소마다 도움 청할 곳을 써요.', columns: ['장소', '도움 청할 곳'], cells: [['학원', ''], ['놀이터(주말)', ''], ['편의점 앞(밤)', '']], answer: '(예) 학원 선생님과 학교, 보호자와 학교, 보호자와 학교폭력 신고·상담 창구(선생님이 알려 준 번호)' }] },
        notes: '지도는 가상이다. ' + LINE_NOTE,
      }),
      M('act.explain-writing', {
        title: '절차를 후배에게 설명하는 글', method: '절차를 후배에게 설명하는 글 쓰기', tool: 'rubric-writing', minutes: 15,
        levels: { easy: '틀을 채워 세 문장(신고·보호·회복)으로 쓴다.', base: '신고 뒤 흐름을 1학년 후배에게 설명하는 다섯 문장을 쓰고 기준표(단계 순서·목적·보호 강조·쉬운 말)로 점검한다.', challenge: '셋째 문항에서 자주 하는 오해 하나("신고하면 곧바로 처벌로 끝난다")를 바로잡는 문장을 더한다.' },
        activity: {
          title: '절차를 후배에게 설명하는 글', tool: 'rubric-writing',
          teacher: '"1학년 후배가 \'신고하면 어떻게 돼요? 무서워요\'라고 묻는다면 어떻게 설명해 줄까요?" 단계 이름보다 \'먼저 너를 지켜 주고, 무슨 일이 있었는지 알아보고…\'처럼 쉬운 말로 쓰게 한다. 세부 기간·조치 이름은 쓰지 않고, 모르는 것은 \'선생님이 자세히 알려 주신다\'로 쓴다.',
          task: '신고 뒤 처리의 큰 흐름을 1학년 후배에게 설명하는 글을 쓰고, 단계 순서·목적·보호 강조·쉬운 말을 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(RW('첫 두 문장: 신고 뒤 가장 먼저 일어나는 일을 쉬운 말로 쓰세요.', { topic: '1학년 후배에게, 신고하면 가장 먼저 무엇이 일어나는지(접수·보호) 두 문장으로 쉽게 설명하세요.', min: 25, max: 160, s: [2, 3], title: '설명 ① 처음' }, ['신고와 보호를 차례대로 썼다', '보호를 강조했다', '쉬운 말로 썼다']),
              RW('틀을 채워 세 문장으로 쓰세요.', { topic: '신고 뒤 흐름을 세 문장으로 쉽게 쓰세요.', min: 25, max: 160, s: [3, 4], starter: '신고하면 먼저 ___. 그다음 ___. 마지막에는 ___.' }, ['단계를 차례대로 썼다', '쉬운 말로 썼다'])),
            IT(RW('다섯 문장 설명 글을 완성하세요.', { topic: '앞의 문장에 이어 조사·결정·회복 지원까지 넣어, 후배에게 신고 뒤 흐름을 다섯 문장으로 설명하세요.', min: 60, max: 280, s: [5, 5], title: '후배에게 보내는 설명' }, ['단계를 차례대로 썼다', '단계마다 목적을 썼다', '보호를 강조했다', '쉬운 말로 썼다'], [['보호', '지켜']])),
            IT(RW('후배의 걱정 "신고하면 일이 너무 커지지 않아요?"에 답하는 문장을 쓰세요.', { topic: '후배가 "신고하면 일이 너무 커지지 않아요?"라고 걱정한다. 이 걱정에 답하는 문장을 한두 문장으로 쓰세요.', min: 15, max: 120, s: [1, 2], title: '걱정에 답하기' }, ['걱정을 먼저 알아주었다', '보호와 회복을 말했다']),
              null,
              RW('오해 "신고하면 곧바로 처벌로 끝난다"를 바로잡는 문장을 쓰세요.', { topic: '"신고하면 곧바로 처벌로 끝난다"는 오해를 바로잡는 문장을 흐름(보호·조사·결정·회복 지원)을 들어 두세 문장으로 쓰세요.', min: 30, max: 180, s: [2, 3], title: '오해 바로잡기' }, ['오해를 짚었다', '흐름을 들어 바로잡았다', '쉬운 말로 썼다']),
              { conclude: '신고 뒤에는 보호 → 조사 → 결정 → 조치와 회복 지원이 이어져요. 신고는 곧바로 처벌이 아니라 지키는 일의 시작이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '후배에게 보낼 설명 글 가운데 가장 중요한 한 문장을 옮겨 써요.' }] },
      }),

      // ---- 정리 ----
      M('wrap.flow-check', {
        title: '흐름 순서 확인 퀴즈', method: '흐름 단계 카드 다시 놓기', tool: 'sortboard', minutes: 7,
        levels: { easy: '단계 카드 3장(신고·접수·사안 조사·조치와 회복 지원)을 먼저·가운데·나중 바구니에 놓는다(틀리면 되돌려 준다).', base: '섞인 단계 카드 5장을 먼저·가운데·나중 바구니에 다시 놓는다.', challenge: '단계마다 누가 관여하는지 카드까지 더해 나눈다.' },
        wrap: {
          teacher: '"섞인 단계 카드를 먼저·가운데·나중 바구니에 다시 놓아 볼까요?" 바구니는 셋뿐이라 \'먼저\'에는 신고와 보호, \'가운데\'에는 조사, \'나중\'에는 결정과 회복이 들어간다고 알려 준다. "결정이 먼저"라고 놓은 학생에게 "무엇이 있었는지 모르는 채 결정할 수 있을까요?"라고 되묻는다.',
          exitTicket: [
            IT(X('sortboard', BOARD('섞인 흐름 단계 카드를 먼저·가운데·나중 바구니에 다시 놓아요.', ['먼저', '가운데', '나중'], [
              { id: 'p1', text: '신고·접수', to: '먼저' }, { id: 'p2', text: '피해 학생 보호(분리 등)', to: '먼저' }, { id: 'p3', text: '사안 조사', to: '가운데' },
              { id: 'p4', text: '학교의 결정', to: '나중' }, { id: 'p5', text: '조치와 회복 지원', to: '나중' }]), { difficulty: 0.2 }),
              Object.assign(BOARD('흐름 단계 카드 3장을 먼저·가운데·나중 바구니에 놓아요.', ['먼저', '가운데', '나중'], [
                { id: 'p1', text: '신고·접수', to: '먼저' }, { id: 'p3', text: '사안 조사', to: '가운데' }, { id: 'p5', text: '조치와 회복 지원', to: '나중' }]), { toolOptions: { slots: ['먼저', '가운데', '나중'], cards: [{ id: 'p1', text: '신고·접수' }, { id: 'p3', text: '사안 조사' }, { id: 'p5', text: '조치와 회복 지원' }], instant: true } }),
              BOARD('흐름 단계와 관여하는 사람 카드까지 먼저·가운데·나중 바구니에 놓아요.', ['먼저', '가운데', '나중'], [
                { id: 'p1', text: '신고·접수', to: '먼저' }, { id: 'p2', text: '피해 학생 보호(분리 등)', to: '먼저' }, { id: 'p3', text: '사안 조사', to: '가운데' },
                { id: 'p4', text: '학교의 결정', to: '나중' }, { id: 'p5', text: '조치와 회복 지원', to: '나중' },
                { id: 'w1', text: '담임·상담 선생님이 이야기를 듣는다(보호)', to: '먼저' }, { id: 'w2', text: '상담 선생님이 회복을 돕는다', to: '나중' }])),
            { type: 'choice', prompt: '"학원·동네에서 생긴 일은 학교와 상관없다"에 대한 생각으로 알맞은 것은?', options: ['같은 학교 학생 사이 일이라면 학교에도 알릴 수 있다', '학교 밖 일은 절대 알릴 수 없다', '학원 일은 참는 수밖에 없다'], answer: 0, difficulty: 0.15, explain: '학교 밖 일도 알릴 수 있어요.' },
          ],
        },
        worksheet: {
          title: '흐름 순서',
          items: [
            { type: 'blank', prompt: '흐름을 채워요.', text: '신고·접수 → ___ → 사안 조사 → ___ → 조치와 회복 지원', answer: '피해 학생 보호(분리 등), 학교의 결정' },
            { type: 'short', prompt: '흐름의 끝에 \'회복 지원\'이 있는 까닭을 써요.' },
          ],
        },
        notes: '분류판 바구니가 4개까지라 다섯 단계를 먼저·가운데·나중 바구니로 묶었다(차례 자체는 활동지 빈칸에서 확인).',
      }),
      M('wrap.flow-poster', {
        title: '한 장 절차 안내판', method: '한 장 절차 안내판 만들기', tool: 'collage', minutes: 7,
        levels: { easy: '단계 셋(신고·보호·회복)을 담을 안내판 바탕을 조각 3개 이상으로 꾸민다(글은 활동지).', base: '단계 다섯을 담을 안내판 바탕을 단계마다 조각 하나씩 5개 이상으로 꾸미고 점검한다.', challenge: '안내판 맨 위에 "먼저 안전" 문구 자리를 별 조각으로 표시해 꾸민다.' },
        wrap: {
          teacher: '"복도에 붙일 한 장 안내판이라면, 단계 다섯과 창구 자리를 어떻게 배치할까요?" 단계 글과 창구 번호는 활동지에 쓰고 조각으로 칸을 나눠 꾸미게 한다(교구에는 글자를 넣을 수 없다). 세부 기간·조치 이름은 쓰지 않는다고 짚는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'collage', options: { maxPieces: 14 }, prompt: '단계 다섯을 담을 안내판 바탕을 조각으로 꾸미고 점검해요(글은 활동지에 써요).', target: { selfCheck: ['단계마다 칸을 나눴다', '창구 자리를 두었다', '단계 글을 활동지에 썼다'], minPieces: 5 }, difficulty: 0.2 },
              { prompt: '단계 셋을 담을 안내판 바탕을 조각 3개 이상으로 꾸미고 점검해요.', target: { selfCheck: ['단계 글을 활동지에 썼다'], minPieces: 3 } },
              { prompt: '안내판 맨 위 "먼저 안전" 자리를 별 조각으로 표시해 꾸미고 점검해요.', target: { has: [{ shape: 'star', min: 1 }], selfCheck: ['단계마다 칸을 나눴다', '창구 자리를 두었다', '"먼저 안전" 자리를 표시했다'], minPieces: 5 } }),
            { type: 'choice', prompt: '안내판 맨 위에 둘 말로 가장 알맞은 것은?', options: ['먼저 안전', '먼저 처벌', '먼저 화해'], answer: 0, difficulty: 0.15, explain: '흐름은 피해 학생 보호부터 시작해요.' },
          ],
        },
        worksheet: {
          title: '한 장 절차 안내판',
          items: [
            { type: 'table', prompt: '안내판에 들어갈 단계를 써요.', columns: ['차례', '단계'], cells: [['1', ''], ['2', ''], ['3', ''], ['4', ''], ['5', '']], answer: '신고·접수, 피해 학생 보호, 사안 조사, 학교의 결정, 조치와 회복 지원' },
            { type: 'blank', prompt: '창구를 적어 두어요.', text: '학교폭력 신고·상담 창구: ___', answer: '(선생님이 알려 준 번호)' },
          ],
        },
        notes: '교구는 글자를 넣지 못해 안내판 바탕만 꾸미고 글은 활동지에 쓰게 했다. ' + LINE_NOTE,
      }),
    );
  }

  // ==== 9학년 · 입장 뒤의 바람 찾기와 회복적 대화 연습 (bully.m.g9-interests) ====
  {
    const M = MK('g9-interests', [9]);
    const ICE = [
      { id: 'a1', text: '"음악 좀 꺼!"', to: '재이의 입장' }, { id: 'a2', text: '시험 전에 쉬고 집중하고 싶다', to: '재이의 바람' },
      { id: 'b1', text: '"내 자리에서 듣는 건데?"', to: '가온의 입장' }, { id: 'b2', text: '쉬는 시간에 기분을 풀고 싶다', to: '가온의 바람' },
      { id: 'a3', text: '내 사정을 알아주면 좋겠다', to: '재이의 바람' }, { id: 'b3', text: '내 취미를 인정받고 싶다', to: '가온의 바람' },
    ];
    const D1 = { text: '축제 부스 자리를 두고 2반 대표 아린과 3반 대표 승민이 맞선다. 아린 "우리가 먼저 신청했어", 승민 "우리 반은 전기 콘센트가 꼭 필요해". 나는 진행자다.', ask: '어떤 질문으로 시작할까?', motif: 'house', choices: [
      { id: 'first', text: '"누가 먼저 신청했는지 따져 보자"', result: '서류 날짜를 두고 말다툼이 길어진다.', impact: [{ who: '두 반', text: '입장만 맞선다', tone: -1 }], why: '입장만 따지면 한쪽이 이기고 한쪽이 져요.', end: '입장 싸움이 됐어요.',
        next: { text: '날짜로는 결론이 안 난다. 둘 다 물러서지 않는다.', ask: '이제 어떤 질문을 할까?', choices: [
          { id: 'why', text: '"그 자리가 왜 필요한지 이야기해 줄래?"', result: '아린은 "입구 가까이라 손님이 많아서", 승민은 "콘센트 때문에"라고 말한다.', impact: [{ who: '두 반', text: '바람이 드러난다', tone: 1 }], end: '늦었지만 바람을 물었어요.',
            next: { text: '두 반의 바람이 다르다는 것이 드러났다.', choices: [
              { id: 'both', text: '"입구 쪽 자리와 콘센트 자리가 따로 있을까?"', result: '콘센트가 있는 다른 자리를 3반이 쓰고, 2반은 입구 자리를 쓰기로 한다.', impact: [{ who: '두 반', text: '둘 다 바람을 채운다', tone: 1 }] },
              { id: 'coin', text: '"그냥 동전 던지기로 하자"', result: '진 반은 불만이 남는다.', why: '바람을 알았으면 둘 다 채울 길을 먼저 찾아요.' }] } },
          { id: 'teacherdecide', text: '"선생님께 정해 달라고 하자"', result: '한 반은 억울해한다.', impact: [{ who: '두 반', text: '한쪽이 진다', tone: -1 }], why: '바람을 묻기 전에 결정을 넘기면 해결안이 좁아져요.' }] } },
      { id: 'need', text: '"각자 그 자리가 왜 필요한지 말해 줄래?"', result: '아린 "입구 가까이라 손님이 많아서", 승민 "전기 콘센트 때문에".', impact: [{ who: '두 반', text: '바람이 드러난다', tone: 1 }], end: '바람부터 물었어요.',
        next: { text: '바람을 들으니 꼭 같은 자리가 아니어도 될 수 있겠다.', ask: '다음 질문은?', choices: [
          { id: 'options', text: '"두 바람을 다 채울 방법을 여러 개 떠올려 볼까?"', result: '\'멀티탭 빌리기\'·\'자리 바꾸기\'·\'시간 나누기\' 안이 나온다.', impact: [{ who: '두 반', text: '해결안이 늘어난다', tone: 1 }], end: '해결안을 넓혔어요.',
            next: { text: '안이 셋 나왔다.', choices: [
              { id: 'agree', text: '"두 반 모두 받아들일 수 있는 안을 골라 합의문으로 적자"', result: '2반이 입구 자리, 3반이 멀티탭을 빌려 옆자리를 쓰기로 적는다.', impact: [{ who: '두 반', text: '만족하며 합의한다', tone: 1 }] },
              { id: 'pick', text: '"내 생각엔 시간 나누기가 최고야"라고 진행자가 정한다', result: '두 반 모두 떨떠름해한다.', why: '해결안은 당사자가 함께 골라요.' }] } },
          { id: 'winner', text: '"그럼 이유가 더 급한 반이 가져가"', result: '다시 누가 더 급한지 다툰다.', why: '누가 이기는지 대신 둘 다 채울 길을 찾아요.' }] } },
      { id: 'split', text: '"반씩 나눠 쓰면 되잖아"라고 바로 정한다', result: '자리가 좁아져 두 반 다 불편하다.', impact: [{ who: '두 반', text: '둘 다 조금씩 진다', tone: -1 }], why: '바람을 묻지 않은 타협은 둘 다 지는 것일 수 있어요.', ending: '바람을 묻지 않고 나눠 둘 다 불편해졌어요.' }] };
    const R1 = [{ id: 'r1', text: '바람을 물으면 둘 다 채울 해결안이 보인다' }, { id: 'r2', text: '해결안은 당사자가 함께 고른다' },
      { id: 'r3', text: '한쪽이 이기면 갈등이 끝난다', why: '진 쪽의 불만이 남아 다시 다툴 수 있어요.' }, { id: 'r4', text: '타협은 늘 둘 다 지는 것이다', why: '바람을 알면 둘 다 얻는 해결안도 있어요.' }];
    const R1C = { reasons: [{ id: 'r5', text: '입장만 따진 길에서는 한 반이 억울해했다' }, { id: 'r6', text: '바람을 물은 길에서는 둘 다 만족했다' }], ok: ['r5', 'r6'] };
    const SCORE = [['안 가: 시간 나누기', 7], ['안 나: 멀티탭 빌려 옆자리', 13], ['안 다: 동전 던지기', 5], ['안 라: 두 반 합동 부스', 10]];
    const SKILL = ['듣기', '요약', '바람묻기', '해결안', '합의'];

    ALL.push(
      // ---- 도입 ----
      M('intro.iceberg', {
        title: '입장 빙산 그리기', method: '입장 빙산 그리기', tool: 'mindmap', minutes: 6,
        levels: { easy: '두 사람의 입장 하나·바람 하나씩 카드 4장을 함께 나눈다.', base: '시연 판에서 카드 6장이 두 사람의 입장(물 위)·바람(물 아래) 가지에 나뉘는 모습을 본다.', challenge: '두 사람의 공통 바람(서로 존중받고 싶다)을 찾아 말한다.' },
        intro: {
          teacher: '"\'음악 좀 꺼!\'와 \'내 자리에서 듣는 건데?\' — 빙산의 물 위에 보이는 말 아래에는 무엇이 있을까요?" 시연 단추로 카드가 입장·바람 가지에 나뉘는 모습을 보인다. "결국 누가 맞냐"는 말이 나오면 "둘의 바람이 동시에 채워질 방법은 없을까요?"라고 되묻는다. 오늘은 입장 뒤 바람을 찾아 해결안을 넓힌다.',
          student: '쉬는 시간 음악 소리로 다툰 가상 사례에서 두 사람의 겉 입장과 그 아래 바람을 빙산처럼 나눠요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '음악 소리 다툼', slots: ['재이의 입장', '재이의 바람', '가온의 입장', '가온의 바람'], cards: strip(ICE) }, sequence: [{ sort: { '재이의 입장': ['a1'], '재이의 바람': ['a2', 'a3'], '가온의 입장': ['b1'], '가온의 바람': ['b2', 'b3'] } }] },
          art: { draw: 'a paper-cut iceberg with a small tip above blue water showing two speech bubbles and a large hidden part below with hearts and stars', banner: '말 아래에는?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: SAFE_NOTE,
      }),
      M('intro.option-count', {
        title: '해결안 개수 늘리기', method: '해결안 개수 늘리기', tool: 'timer', minutes: 6,
        levels: { easy: '타이머 2분 동안 모둠이 해결안을 적고 수를 센다.', base: '시연 판처럼 타이머를 3분으로 맞추고 해결안을 최대한 많이 적은 뒤 개수를 기록한다.', challenge: '모두 받아들일 수 있는 안에 표시하고 그 개수도 기록한다.' },
        intro: {
          teacher: '"음악 소리 다툼을 푸는 방법, 3분 동안 몇 개나 떠올릴 수 있을까요? 지금은 좋고 나쁨을 따지지 않아요." 시연 단추로 타이머를 3분으로 맞추고 개수를 기록하는 모습을 보인 뒤 모둠별로 해 본다. "방법은 하나뿐"이라는 말이 나오면 "이어폰, 시간 정하기, 자리 바꾸기… 또 없을까요?"라고 되묻는다. 3분은 우리 반 연습 약속이다.',
          student: '타이머 3분 동안 모둠이 음악 소리 다툼의 해결안을 최대한 많이 적고 개수를 세요. 이때는 좋고 나쁨을 따지지 않아요.',
          demo: { tool: 'timer', options: { title: '해결안 늘리기(우리 반 약속 3분)', timeUnit: 'min', plan: { work: 2, rest: 0, rounds: 1 }, fields: [{ label: '모둠 해결안 수', unit: '개' }] }, sequence: [{ plan: { work: 3, rounds: 1 }, records: [7] }] },
          art: { draw: 'a paper-cut timer surrounded by many small paper idea bulbs popping up from a group of students', banner: '3분에 몇 개?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '3분은 수업 연습 약속 값이다. 해결안 수는 모둠마다 다르다.',
      }),

      // ---- 활동 ----
      M('act.interest-dilemma', {
        title: '입장 대화와 바람 대화', method: '입장만 맞서는 대화와 바람을 묻는 대화 견주기', tool: 'dilemma', minutes: 15,
        levels: { easy: '갈림 2번까지 가고, 고를 때마다 두 반에 생기는 영향이 바로 보인다.', base: '갈림 3번까지 가고, 영향 표시는 맞힌 뒤에만 보인다. 끝에서 근거를 고른다.', challenge: '갈림 3번 뒤 입장만 따진 길의 결말과 견주는 근거 카드까지 고르고, 두 결말의 만족도를 활동지에 견준다.' },
        activity: {
          title: '입장 대화와 바람 대화', tool: 'dilemma',
          teacher: '"\'누가 먼저 신청했나\'와 \'왜 그 자리가 필요한가\', 어느 질문 뒤에 해결안이 더 많이 나왔나요?" 학생마다 진행자가 되어 한 길을 끝까지 가 본 뒤 견주게 한다. "타협은 둘 다 지는 것"이라는 학생에게 "콘센트와 입구, 두 바람을 다 채운 안은 누가 진 걸까요?"라고 되묻는다. 진행자는 해결안을 정해 주지 않고 함께 고르게 한다는 점을 짚는다.',
          task: '축제 부스 자리 갈등에서 진행자가 되어 질문을 세 번 골라, 해결안이 나오는지 결과를 따라가요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL({ easy: '부스 자리 갈등이에요. 질문을 두 번 골라 결과를 보고 근거를 고르세요.', base: '부스 자리 갈등이에요. 질문을 세 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 간 뒤, 입장만 따진 길의 결말과 견주는 근거까지 고르세요.' },
              '부스 자리 갈등', D1, [['need', 'options', 'agree'], ['first', 'why', 'both']], R1, ['r1', 'r2'], R1C),
            ONE('바람을 묻는 질문을 고르세요.', '바람 묻기', { text: '모둠 발표 순서를 두고 아린은 "우리가 첫 번째 해야 해"라고 한다.', ask: '진행자의 질문은?', motif: 'house', choices: [
              { id: 'need', text: '"첫 번째가 왜 중요한지 말해 줄래?"', result: '"학원 때문에 일찍 가야 해서"라는 바람이 나온다.', impact: [{ who: '아린', text: '사정이 알려진다', tone: 1 }], ending: '바람을 묻는 질문을 했어요.' },
              { id: 'pos', text: '"첫 번째 하고 싶은 반 손 들어"', result: '여러 반이 손을 들어 다툼이 커진다.', why: '입장만 모으면 다툼이 커져요.' }] }, ['need'],
              [{ id: 'q1', text: '"왜 필요한지"를 물으면 바람이 드러난다' }, { id: 'q2', text: '손을 많이 든 쪽이 이긴다', why: '숫자로 정하면 바람이 드러나지 않아요.' }], ['q1']),
            ONE('바람을 다 듣고 난 뒤 진행자가 할 일을 고르세요.', '해결안 고르기', { text: '두 사람의 바람을 다 들었고 해결안이 셋 나왔다.', ask: '진행자는?', motif: 'house', choices: [
              { id: 'together', text: '"두 사람 모두 받아들일 안을 함께 골라 볼까?"', result: '두 사람이 한 안에 동의한다.', impact: [{ who: '두 사람', text: '스스로 정한다', tone: 1 }], ending: '당사자가 함께 고르게 했어요.' },
              { id: 'decide', text: '진행자가 가장 좋아 보이는 안을 정해 준다', result: '한 사람이 "난 그거 싫은데"라고 한다.', why: '해결안은 당사자가 골라야 지켜져요.' }] }, ['together'], null, null,
              { conclude: '입장만 맞서면 한쪽이 이기고 한쪽이 지지만, 바람을 물으면 둘 다 채울 해결안이 보여요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '두 결말의 만족도를 견줘 써요.', columns: ['대화', '결말', '만족도(1~5)'], cells: [['입장만 따진 대화', '', ''], ['바람을 물은 대화', '', '']], answer: '(예) 한 반이 억울함·2, 두 반 모두 바람을 채움·5' }] },
        notes: SAFE_NOTE,
      }),
      M('act.criteria-chart', {
        title: '해결안 기준표로 고르기', method: '해결안 기준 점수 막대로 비교하기', tool: 'chart', minutes: 15,
        levels: { easy: '해결안 둘의 점수 막대만 그리고(값이 보인다) 더 높은 안을 고른다.', base: '해결안 넷의 합계 점수(공평함·실행 가능성·관계 회복, 각 1~5점)를 막대로 그리고 가장 높은 안을 고른다.', challenge: '셋째 문항에서 관계 회복에 가중치(두 배)를 둔 점수 막대로 다시 견준다.' },
        activity: {
          title: '해결안 기준표로 고르기', tool: 'chart',
          teacher: '"동전 던지기는 빠르지만, 공평함·실행 가능성·관계 회복 점수로 보면 어떨까요?" 모둠이 매긴 가상 기준 점수 표를 보고 합계를 막대로 그린 뒤 견주게 한다. "점수가 높으면 무조건 그 안"이라는 학생에게 "두 반 대표가 그 안을 받아들일지도 물어봐야겠죠?"라고 되묻는다. 점수는 수업용 가상 값이다.',
          task: '부스 자리 해결안 넷을 공평함·실행 가능성·관계 회복 기준 점수로 매긴 가상 표를 보고 합계를 막대로 그려 견줘요.',
          levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT({ prompt: '가상 기준 점수 표를 보고 해결안 넷의 합계 점수를 막대그래프로 그리세요.', toolOptions: { type: 'bar', mode: 'build', title: '가상 기준 점수 합계(공평함+실행 가능성+관계 회복, 15점 만점)', unit: '점', xLabel: '해결안', yLabel: '합계 점수', max: 15, scale: 1, data: SCORE, showTable: true }, target: { build: true } },
              { prompt: '해결안 둘의 합계 점수를 막대그래프로 그리세요.', toolOptions: { data: [SCORE[0], SCORE[1]] }, target: { build: true } }),
            RD('합계 점수가 가장 높은 해결안을 고르세요.', { type: 'bar', title: '가상 기준 점수 합계(15점 만점)', unit: '점', xLabel: '해결안', yLabel: '합계 점수', max: 15, data: SCORE, question: '가장 높은 해결안은?', choices: SCORE.map((r) => r[0]) }, { pick: 1 }),
            IT(RD('동전 던지기 점수가 가장 낮은 까닭을 고르세요.', { type: 'bar', title: '가상 기준 점수 합계(15점 만점)', unit: '점', xLabel: '해결안', yLabel: '합계 점수', max: 15, data: SCORE, question: '동전 던지기가 낮은 까닭은?', choices: ['빠르지만 진 반이 받아들이기 어렵고 관계 회복이 낮다', '동전이 없어서', '실행하기가 가장 어려워서'] }, { pick: 0 }),
              null,
              RD('관계 회복 점수를 두 배로 친 그래프에서 가장 높은 안을 고르세요.', { type: 'bar', title: '가상 가중 점수(관계 회복 두 배, 20점 만점)', unit: '점', xLabel: '해결안', yLabel: '가중 점수', max: 20, data: [['안 가: 시간 나누기', 9], ['안 나: 멀티탭 빌려 옆자리', 17], ['안 다: 동전 던지기', 6], ['안 라: 두 반 합동 부스', 15]], question: '가중 점수가 가장 높은 해결안은?', choices: ['안 가', '안 나', '안 다', '안 라'] }, { pick: 1 }),
              { conclude: '해결안을 기준으로 견주면 빠른 안보다 두 바람을 다 채우고 관계를 지키는 안이 보여요. 마지막 선택은 당사자가 해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '가장 높은 해결안을 두 반 대표가 받아들일지 확인하는 질문을 한 문장으로 써요.' }] },
        notes: '점수는 수업용 가상 값이다(화면 제목에 \'가상\').',
      }),
      M('act.mock-dialogue', {
        title: '회복적 대화 모의 대본', method: '회복적 대화 모의 연습 대본 쓰기', tool: 'story', minutes: 15,
        levels: { easy: '대본 3컷(진행자 질문) 빈칸을 채우고, 넣으면 바로 맞는지 알려 준다.', base: '진행자·당사자 둘·지지자가 나오는 대본 6컷의 빈칸을 채우고(함정 카드가 섞인다), 역할을 바꿔 두 번 읽는다.', challenge: '셋째 문항에서 합의문 문장까지 채운다.' },
        activity: {
          title: '회복적 대화 모의 대본', tool: 'story',
          teacher: '"지지자는 한쪽 편을 드는 사람일까요?" 지지자는 당사자 곁에서 마음을 거들되 상대를 깎아내리지 않는 역할이라고 먼저 알려 준다. 대본을 채운 뒤 역할을 바꿔 두 번 읽게 하고, 바꿔 읽었을 때 상대 입장이 어떻게 느껴졌는지 묻는다. 실제 다툰 친구들로 역할을 짜지 않는다.',
          task: '음악 소리 다툼을 소재로 진행자·당사자 둘·지지자가 나오는 회복적 대화 대본의 빈칸을 채우고, 역할을 바꿔 두 번 읽어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(FB('모의 대본 6컷의 빈칸에 알맞은 말 카드를 넣으세요.', [['1컷 진행자: "___"', '"한 사람씩 끝까지 이야기해요"', '진행자', 'star'], ['2컷 재이: "___"', '"시험 전이라 쉬고 싶었어"', '재이', 'leaf'], ['3컷 진행자: "___"', '"재이는 쉬고 집중하고 싶었구나"', '진행자', 'star'],
              ['4컷 가온: "___"', '"나도 쉬는 시간에 기분을 풀고 싶었어"', '가온', 'cloud'], ['5컷 지지자: "___"', '"둘 다 쉬고 싶은 건 같네"', '지지자', 'sun'], ['6컷 진행자: "___"', '"둘 다 쉴 방법이 뭐가 있을까?"', '진행자', 'star']], ['"가온이 이기적이야"']),
              FB('모의 대본 3컷(진행자 질문)의 빈칸에 알맞은 말 카드를 넣으세요.', [['1컷 진행자: "___"', '"한 사람씩 끝까지 이야기해요"', '진행자', 'star'], ['2컷 진행자: "___"', '"재이는 쉬고 집중하고 싶었구나"', '진행자', 'star'], ['3컷 진행자: "___"', '"둘 다 쉴 방법이 뭐가 있을까?"', '진행자', 'star']], [])),
            IT(PB('지지자가 하기 좋은 말만 골라 담으세요.', '지지자의 말', [
              { id: 'p1', text: '"재이가 많이 지쳐 보였어"', ok: true }, { id: 'p2', text: '"둘 다 쉬고 싶은 건 같네"', ok: true },
              { id: 'p3', text: '"가온은 원래 시끄러워"' }, { id: 'p4', text: '"재이 편이니까 재이 말이 맞아"' }])),
            IT(FB('대화 끝 장면의 빈칸에 알맞은 말을 넣으세요.', [['진행자: "어떤 안이 좋을까?" — 가온: "___"', '"쉬는 시간엔 이어폰을 쓸게"', '가온', 'cloud']], ['"그냥 내 마음대로 할래"']),
              null,
              FB('합의문 문장까지 빈칸에 알맞은 말을 넣으세요.', [['가온: "___"', '"쉬는 시간엔 이어폰을 쓸게"', '가온', 'cloud'], ['재이: "___"', '"점심시간엔 같이 노래 들어도 돼"', '재이', 'leaf'], ['진행자(합의문): "___"', '"이어폰 쓰기, 점심엔 함께 듣기, 금요일에 다시 확인"', '진행자', 'star']], ['"그냥 내 마음대로 할래"', '"재이가 참아"']),
              { conclude: '회복적 대화는 듣기 → 요약 → 바람 묻기 → 해결안 → 합의로 이어지고, 지지자는 편을 들지 않고 마음을 거들어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '역할을 바꿔 읽었을 때 상대 입장이 어떻게 느껴졌는지 한 문장으로 써요.' }] },
      }),
      M('act.agreement-writing', {
        title: '합의문 쓰기', method: '합의문 쓰기', tool: 'rubric-writing', minutes: 15,
        levels: { easy: '틀을 채워 항목 둘(할 일·기한)의 합의문을 쓴다.', base: '항목 셋(할 일·기한·점검 날짜)이 든 합의문을 쓰고 기준표(구체성·양쪽 동의·점검 방법)로 점검한다.', challenge: '셋째 문항에서 지켜지지 않았을 때의 약속을 더한다.' },
        activity: {
          title: '합의문 쓰기', tool: 'rubric-writing',
          teacher: '"\'서로 배려하기\'와 \'쉬는 시간엔 이어폰 쓰기, 금요일에 다시 확인\', 지켰는지 알 수 있는 합의문은 무엇일까요?" 두 문장을 견주어 읽은 뒤 쓰게 한다. "합의문은 한쪽만 지키면 된다"는 학생에게 "양쪽이 각자 할 일이 들어 있나요?"라고 되묻는다. 가상 인물(재이·가온)의 합의문이다.',
          task: '음악 소리 다툼 대화 끝에 쓸 합의문(할 일·기한·점검 날짜)을 쓰고, 구체성·양쪽 동의·점검 방법을 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(RW('합의문 ①: 두 사람이 각자 할 일을 쓰세요.', { topic: '재이와 가온이 각자 할 일을 한 문장씩, 두 문장으로 쓰세요.', min: 20, max: 140, s: [2, 3], title: '합의문 ① 할 일' }, ['두 사람의 할 일이 모두 있다', '지켰는지 알 수 있게 구체적이다']),
              RW('틀을 채워 합의문을 쓰세요.', { topic: '합의문을 두 문장으로 쓰세요.', min: 15, max: 120, s: [2, 3], starter: '가온은 ___ 하고, 재이는 ___ 한다. ___까지 지킨다.' }, ['두 사람의 할 일이 모두 있다', '기한을 썼다'])),
            IT(RW('합의문 세 항목(할 일·기한·점검 날짜)을 완성하세요.', { topic: '앞의 할 일에 기한과 다시 확인할 날짜를 더해 합의문을 세 문장으로 완성하세요.', min: 35, max: 200, s: [3, 4], title: '합의문 완성' }, ['두 사람의 할 일이 모두 있다', '기한을 썼다', '점검 날짜를 썼다', '두 사람이 동의할 말로 썼다'], [['확인', '점검']])),
            IT(RW('막연한 합의문 "서로 배려하기"를 구체적으로 고쳐 쓰세요.', { topic: '"서로 배려하기"라는 합의문을, 지켰는지 알 수 있는 구체적인 문장으로 한두 문장 고쳐 쓰세요.', min: 15, max: 120, s: [1, 2], title: '고쳐 쓰기' }, ['구체적인 행동으로 고쳤다', '지켰는지 알 수 있다']),
              null,
              RW('합의문에 지켜지지 않았을 때의 약속을 더해 완성하세요.', { topic: '합의문 세 항목에, 지켜지지 않았을 때 두 사람이 어떻게 할지 약속을 한 문장 더해 쓰세요.', min: 45, max: 240, s: [4, 5], title: '지켜지지 않았을 때' }, ['두 사람의 할 일이 모두 있다', '기한과 점검 날짜를 썼다', '지켜지지 않았을 때의 약속을 썼다', '상대를 탓하지 않는 말로 썼다'], [['확인', '점검']]),
              { conclude: '좋은 합의문은 두 사람의 할 일이 구체적이고, 기한과 점검 날짜가 있고, 둘 다 동의한 말로 쓰여요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내가 쓴 합의문에서 점검 날짜 문장을 옮겨 써요.' }] },
      }),

      // ---- 정리 ----
      M('wrap.skill-pattern', {
        title: '대화 기술 순서 패턴', method: '대화 기술 순서 패턴 채우기', tool: 'pattern', minutes: 7,
        levels: { easy: '띠 세 칸(듣기·□·바람묻기)의 빈칸 하나를 채운다.', base: '띠 다섯 칸(듣기→요약→바람묻기→해결안→합의)의 빈칸 둘을 채운다.', challenge: '빈칸을 채운 뒤 가장 어려웠던 칸과 연습 방법을 출구 질문에 쓴다.' },
        wrap: {
          teacher: '"오늘 대화에서 다섯 칸 가운데 가장 어려웠던 칸은 어디인가요?" 띠를 채운 뒤 어려웠던 칸에 손가락을 짚게 하고 몇 명의 까닭을 듣는다. "바람묻기가 어렵다"는 학생에게 "\'왜 그게 필요해?\' 한마디부터 연습해 볼까요?"라고 말해 준다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'pattern', options: { mode: 'fill', seq: ['듣기', null, '바람묻기', null, '합의'], palette: ['요약', '해결안', '판정'] }, prompt: '대화 기술 띠의 빈칸을 차례에 맞게 채워요.', target: { fill: ['요약', '해결안'] }, difficulty: 0.2 },
              { prompt: '대화 기술 띠 세 칸의 빈칸 하나를 채워요.', toolOptions: { seq: ['듣기', null, '바람묻기'], palette: ['요약', '판정'] }, target: { fill: ['요약'] } }),
            { type: 'choice', prompt: '대화 기술 차례에 들어가지 않는 것은?', options: ['판정하기', '요약하기', '바람 묻기'], answer: 0, difficulty: 0.15, explain: '진행자는 판정하지 않아요.' },
            { type: 'short', prompt: '가장 어려웠던 칸과 그 칸을 연습할 방법을 써요.' },
          ],
        },
        worksheet: {
          title: '대화 기술 순서',
          items: [
            { type: 'blank', prompt: '차례를 채워요.', text: '듣기 → ___ → 바람 묻기 → ___ → 합의', answer: '요약, 해결안' },
            { type: 'short', prompt: '가장 어려웠던 칸을 연습할 방법을 써요.' },
          ],
        },
      }),
      M('wrap.exit-words', {
        title: '갈등을 푸는 한 문장', method: '갈등을 푸는 한 문장 만들기', tool: 'wordcards', minutes: 7,
        levels: { easy: '낱말 카드 하나(바람)를 문장 빈칸에 넣는다.', base: '낱말 카드 둘(입장·바람)을 문장 빈칸에 넣는다(함정 카드가 섞인다).', challenge: '낱말 카드 셋(입장·바람·해결안)을 문장 빈칸에 넣는다.' },
        wrap: {
          teacher: '"입장·바람·해결안 — 이 낱말로 다음 갈등 때 쓸 내 한 문장을 만들어 볼까요?" 빈칸 문장을 채운 뒤 몇 명이 소리 내어 읽게 한다. \'판정\' 카드는 함정이라고 미리 말하지 않고, 고른 학생에게 오늘 진행자의 일을 떠올리게 한다.',
          exitTicket: [
            IT(X('wordcards', FB('낱말 카드를 문장 빈칸에 넣어 갈등을 푸는 한 문장을 완성해요.', [['겉으로 맞서는 ___ 아래에', '입장'], ['서로의 ___ 을 물으면 길이 보인다.', '바람']], ['판정']), { difficulty: 0.2 }),
              FB('낱말 카드를 문장 빈칸에 넣어요.', [['서로의 ___ 을 물으면 길이 보인다.', '바람']], ['판정']),
              FB('낱말 카드 셋을 문장 빈칸에 넣어 완성해요.', [['겉으로 맞서는 ___ 아래에', '입장'], ['서로의 ___ 을 물으면', '바람'], ['둘 다 채울 ___ 이 보인다.', '해결안']], ['판정'])),
            { type: 'choice', prompt: '"한쪽이 이기면 갈등이 끝난다"에 대한 생각으로 알맞은 것은?', options: ['진 쪽의 불만이 남아 다시 다툴 수 있으니 둘 다 채울 길을 찾는다', '이긴 쪽이 맞다', '갈등은 피하는 게 최고다'], answer: 0, difficulty: 0.15, explain: '바람을 채우는 해결안이 갈등을 풀어요.' },
          ],
        },
        worksheet: {
          title: '갈등을 푸는 한 문장',
          items: [
            { type: 'table', prompt: '낱말의 뜻을 써요.', columns: ['낱말', '뜻'], cells: [['입장', ''], ['바람', '']], answer: '겉으로 하는 주장, 그 아래 진짜 필요(쉬고 싶다·인정받고 싶다 등)' },
            { type: 'short', prompt: '다음 갈등 때 쓸 내 한 문장을 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 9학년 · 고등학교로 가져갈 평화 다짐 (bully.m.g9-peace-pledge) ====
  {
    const M = MK('g9-peace-pledge', [9]);
    const MAP3 = [
      { id: 'm1', text: '강퇴 투표·저격글 멈추기', to: '단톡방' }, { id: 'm2', text: '캡처 전달하지 않기', to: '단톡방' },
      { id: 'm3', text: '다원적 무지 깨기', to: '서열' }, { id: 'm4', text: '두 번째 목소리 되기', to: '서열' },
      { id: 'm5', text: '네 요소로 사과하기', to: '사과' }, { id: 'm6', text: '용서는 받는 사람이 정하기', to: '사과' },
      { id: 'm7', text: '보호 → 조사 → 결정 → 회복', to: '절차' }, { id: 'm8', text: '학교 밖 일도 알리기', to: '절차' },
    ];
    const D0 = { text: '고등학교 첫 주, 새 반 단톡방에서 누군가 한 학생의 자기소개 사진에 놀리는 이모티콘을 달기 시작했다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'stop', text: '"첫 주부터 이러지 말자"라고 짧게 쓴다', result: '두어 명이 "맞아"라고 쓰고 이모티콘이 멈춘다.', impact: [{ who: '그 학생', text: '새 반에 편이 생긴다', tone: 1 }],
        next: { text: '다음 날 같은 학생이 따로 "고마워"라고 보냈다.', ask: '다음은?', choices: [
          { id: 'near', text: '"같이 밥 먹을래?"라고 답한다', result: '새 반에서 첫 친구가 생긴다.', impact: [{ who: '그 학생', text: '혼자가 아니다', tone: 1 }] },
          { id: 'ignore', text: '답하지 않는다', result: '그 학생은 아직 혼자다.', why: '멈춘 뒤 곁에 서는 것도 조력이에요.' }] } },
      { id: 'watch', text: '새 학교니 일단 지켜본다', result: '이모티콘이 늘어나고 첫 주의 분위기가 굳는다.', why: '첫 주의 분위기는 처음 몇 사람이 정해요.' }] };
    const RISK = [['단톡방 놀림·저격', 34], ['무리 안 따돌림', 27], ['외모·성적 비하', 22], ['게임·온라인 갈취', 9]];

    ALL.push(
      // ---- 도입 ----
      M('intro.three-year-map', {
        title: '3년 배움 지도', method: '3년 배움 지도 펼치기', tool: 'mindmap', minutes: 6,
        levels: { easy: '가지 셋(단톡방·서열·절차)에 배움 카드 3장을 함께 놓는다.', base: '시연 판에서 배움 카드 8장이 가지 넷(단톡방·서열·사과·절차)에 펼쳐지는 모습을 보고 가장 쓸모 있던 가지를 고른다.', challenge: '가지 사이 연결(예: 서열 → 단톡방 강퇴 투표)을 말로 잇는다.' },
        intro: {
          teacher: '"중학교 3년 동안 학교폭력 예방 수업에서 배운 것 가운데, 고등학교에 꼭 가져갈 가지는 무엇인가요?" 시연 단추로 배움 카드가 가지에 펼쳐지는 모습을 보인 뒤 손을 들어 가장 쓸모 있던 가지를 고르게 한다. "졸업하면 쓸 일 없다"는 말이 나오면 "고등학교 첫 주에도 단톡방은 새로 생기겠죠?"라고 되묻는다.',
          student: '중학교 3년 동안 배운 학교폭력 예방 주제를 가지로 펼치고, 고등학교에 가장 쓸모 있을 가지를 골라요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '중학교 3년 배움', slots: ['단톡방', '서열', '사과', '절차'], cards: strip(MAP3) }, sequence: [{ sort: { 단톡방: ['m1', 'm2'], 서열: ['m3', 'm4'], 사과: ['m5', 'm6'], 절차: ['m7', 'm8'] } }] },
          art: { draw: 'a paper-cut tree with four branches each holding small paper cards, a student holding a backpack ready to walk toward a new school', banner: '무엇을 가져갈까?', extra: [{ motif: 'tree', x: 300, y: 96 }] },
        },
        notes: '가지는 이 학년군 주제에서 골랐다. 학교가 다룬 주제에 맞춰 바꿔도 된다.',
      }),
      M('intro.future-dilemma', {
        title: '고등학교 첫 주 갈림길', method: '고등학교 첫 주 갈림길 고르기', tool: 'dilemma', minutes: 6,
        levels: { easy: '시연 판 첫 장면에서 두 갈래의 결과를 함께 본다.', base: '시연 판 둘째 장면(고맙다는 메시지)까지 따라가 결과를 본다.', challenge: '중학교에서 배운 근거(두 번째 목소리·작은 행동)를 들어 고른 까닭을 말한다.' },
        intro: {
          teacher: '"새 학교, 아무도 나를 모르는 첫 주. 놀리는 이모티콘이 달리기 시작하면 어떻게 할까요?" 시연 단추로 \'짧게 멈추자고 쓴다\'를 고르고 다음 날 장면까지 보인다. "새 학교에서는 눈에 띄지 않는 게 낫다"는 말이 나오면 "첫 주의 분위기는 누가 정할까요?"라고 되묻는다.',
          student: '고등학교 첫 주 새 반 단톡방에서 한 명을 놀리는 분위기가 생긴 가상 장면에서 고르고 결과를 봐요.',
          demo: DEMO_DIL('고등학교 첫 주', D0, [['stop', 'near']], [{ id: 'k1', text: '처음 몇 사람이 분위기를 정한다' }, { id: 'k2', text: '멈춘 뒤 곁에 선다' }]),
          art: { draw: 'a paper-cut new high school gate with a phone screen showing a group chat, a student typing a short message', banner: '첫 주의 분위기', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
        notes: SAFE_NOTE,
      }),

      // ---- 활동 ----
      M('act.pledge-writing', {
        title: '평화 다짐 글', method: '평화 다짐 글 쓰기', tool: 'rubric-writing', minutes: 15,
        levels: { easy: '틀을 채워 세 문장(기준·행동·도움 경로)을 쓴다.', base: '기준·행동·도움 경로를 한 문장씩 담고 마무리 문장을 더해 네 문장으로 쓰고 기준표로 점검한다.', challenge: '셋째 문항에서 실천을 확인할 방법을 더해 다섯 문장으로 쓴다.' },
        activity: {
          title: '평화 다짐 글', tool: 'rubric-writing',
          teacher: '"고등학교에 가서 3월 첫 주에 다시 읽을 다짐이라면, 무엇이 들어가야 할까요?" 기준(힘·되풀이·피해)·행동(두 번째 목소리·작은 행동)·도움 경로(담임·상담실·창구)를 칠판에 다시 적고 쓰게 한다. "착하게 살겠다"처럼 막연하게 쓰는 학생에게 "그 다짐을 첫 주 단톡방에서 어떤 행동으로 볼 수 있을까요?"라고 되묻는다. 이름은 쓰지 않는다.',
          task: '중학교에서 배운 기준·행동·도움 경로를 한 문장씩 담아 고등학교로 가져갈 평화 다짐 글을 쓰고, 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(RW('다짐 ①: 판단 기준과 할 행동을 두 문장으로 쓰세요.', { topic: '고등학교에서도 쓸 판단 기준(힘·되풀이·피해)과 내가 할 행동을 두 문장으로 쓰세요.', min: 25, max: 160, s: [2, 3], title: '다짐 ① 기준과 행동' }, ['판단 기준을 썼다', '구체적인 행동을 썼다', '이름을 쓰지 않았다']),
              RW('틀을 채워 다짐 세 문장을 쓰세요.', { topic: '평화 다짐을 세 문장으로 쓰세요.', min: 25, max: 180, s: [3, 4], starter: '힘이 기울고 되풀이되면 폭력이다. 그런 일을 보면 나는 ___. 혼자 어려우면 ___ 에게 알리겠다.' }, ['판단 기준을 썼다', '행동을 썼다', '도움 경로를 썼다'])),
            IT(RW('다짐 네 문장을 완성하세요.', { topic: '앞의 두 문장에 도움 경로와 마무리 문장을 더해 평화 다짐을 네 문장으로 완성하세요.', min: 50, max: 240, s: [4, 5], title: '나의 평화 다짐' }, ['판단 기준을 썼다', '구체적인 행동을 썼다', '도움 경로를 썼다', '마무리 문장으로 끝냈다'], [['알리', '상담', '선생님']])),
            IT(RW('친구가 쓴 막연한 다짐 "평화롭게 지내겠다"를 구체적으로 고쳐 쓰세요.', { topic: '"평화롭게 지내겠다"는 다짐을, 고등학교에서 확인할 수 있는 구체적인 행동 문장으로 한두 문장 고쳐 쓰세요.', min: 15, max: 120, s: [1, 2], title: '고쳐 쓰기' }, ['구체적인 행동으로 고쳤다', '확인할 수 있다']),
              null,
              RW('다짐 네 문장에 실천을 확인할 방법을 더해 완성하세요.', { topic: '평화 다짐 네 문장에, 고등학교에서 실천을 확인할 방법(때·방법)을 한 문장 더해 쓰세요.', min: 60, max: 280, s: [5, 5], title: '확인 방법까지' }, ['판단 기준을 썼다', '구체적인 행동을 썼다', '도움 경로를 썼다', '실천 확인 방법을 썼다'], [['알리', '상담', '선생님']]),
              { conclude: '고등학교로 가져갈 다짐에는 판단 기준, 내가 할 행동, 도움 경로가 들어가고, 확인할 수 있게 구체적이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내 평화 다짐 가운데 고등학교 첫 주에 다시 읽을 한 문장을 옮겨 써요.' }] },
      }),
      M('act.risk-chart', {
        title: '고등학교에서 생길 상황 예상', method: '가상 선배 설문 읽고 대처 순서 정하기', tool: 'chart', minutes: 15,
        levels: { easy: '막대 값이 보이는 채로 두 항목을 견주어 더 흔한 상황을 고른다.', base: '가상 선배 설문 네 항목을 읽어 가장 흔한 상황을 고르고, 항목마다 대처 행동을 고른다.', challenge: '틀린 확인에서 어느 보기가 틀렸는지 알려 주지 않고, 셋째 문항에서 흔하지 않아도 대비할 상황을 고른 뒤 대처 순서를 활동지에 쓴다.' },
        activity: {
          title: '고등학교에서 생길 상황 예상', tool: 'chart',
          teacher: '"가상 선배 설문에서 고등학교에서 가장 흔했던 갈등 상황은 무엇이었을까요?" 그래프를 읽은 뒤 항목마다 \'중학교에서 배운 대처\'를 하나씩 붙이게 한다. "흔하지 않은 건 신경 안 써도 된다"는 학생에게 "9%라도 내 일이 될 수 있다면 대처를 알아 둘 필요가 있을까요?"라고 되묻는다. 수치는 수업용 가상 값이다.',
          task: '"고등학교에서 가장 흔한 갈등 상황" 가상 선배 설문 그래프를 읽고, 상황마다 내 대처 행동과 순서를 정해요.',
          levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(RD('가상 선배 설문에서 가장 흔한 상황을 고르세요.', { type: 'bar', horizontal: true, title: '가상 선배 설문 — 고등학교에서 겪거나 본 흔한 갈등 상황', unit: '%', xLabel: '상황', yLabel: '비율', max: 40, data: RISK, question: '가장 흔한 상황은?', choices: RISK.map((r) => r[0]) }, { pick: 0 }),
              RD('두 항목 가운데 더 흔한 상황을 고르세요.', { type: 'bar', horizontal: true, title: '가상 선배 설문 — 흔한 갈등 상황', unit: '%', xLabel: '상황', yLabel: '비율', max: 40, data: [RISK[0], RISK[3]], question: '더 흔한 상황은?', choices: [RISK[0][0], RISK[3][0]] }, { pick: 0 })),
            RD('"단톡방 놀림·저격"에 맞는 대처를 고르세요.', { type: 'bar', horizontal: true, title: '가상 선배 설문 — 고등학교에서 겪거나 본 흔한 갈등 상황', unit: '%', xLabel: '상황', yLabel: '비율', max: 40, data: RISK, question: '단톡방 놀림·저격에 맞는 대처는?', choices: ['반응하지 않고 기록한 뒤 "그만하자"라고 쓰거나 어른에게 알린다', '더 센 저격글로 맞선다', '방을 나가면 끝이다'] }, { pick: 0 }),
            IT(RD('"무리 안 따돌림"에 맞는 대처를 고르세요.', { type: 'bar', horizontal: true, title: '가상 선배 설문 — 고등학교에서 겪거나 본 흔한 갈등 상황', unit: '%', xLabel: '상황', yLabel: '비율', max: 40, data: RISK, question: '무리 안 따돌림에 맞는 대처는?', choices: ['속마음을 따로 묻고 두 번째 목소리가 된다', '대장 말을 따른다', '모른 척한다'] }, { pick: 0 }),
              null,
              RD('9%로 흔하지 않지만 대비해 둘 상황과 그 첫 대처를 고르세요.', { type: 'bar', horizontal: true, title: '가상 선배 설문 — 고등학교에서 겪거나 본 흔한 갈등 상황', unit: '%', xLabel: '상황', yLabel: '비율', max: 40, data: RISK, question: '게임·온라인 갈취의 첫 대처는?', choices: ['짧게 거절하고 기록해 어른에게 알린다', '한 번만 보내 준다', '혼자 해결한다'] }, { pick: 0 }),
              { conclude: '흔한 상황일수록 미리 대처를 정해 두면 첫 주에 바로 쓸 수 있어요. 흔하지 않은 상황도 첫 대처는 같아요 — 기록하고 알리기.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '상황마다 내 대처 순서를 써요.', columns: ['상황', '대처 순서'], cells: [['단톡방 놀림·저격', ''], ['무리 안 따돌림', ''], ['게임·온라인 갈취', '']], answer: '(예) 반응 안 하기→기록→알리기, 따로 묻기→두 번째 목소리→알리기, 거절→기록→알리기' }] },
        notes: '수치는 수업용 가상 값이다(화면 제목에 \'가상\').',
      }),
      M('act.route-card', {
        title: '새 학교 도움 경로 블록', method: '새 학교 도움 경로 블록 짜기', tool: 'block-coding', minutes: 15,
        levels: { easy: '곧은 길(블록 3개 안팎)로 별 둘(담임·상담실)을 지나 깃발(학교폭력 신고·상담 창구)에 닿는다.', base: '꺾인 길로 별 셋(담임·상담실·창구 번호 적기)을 지나 깃발에 닿는다.', challenge: '셋째 문항에서 찾는 방법(안내문·누리집) 별을 먼저 지나는 길을 짠다.' },
        activity: {
          title: '새 학교 도움 경로 블록', tool: 'block-coding',
          teacher: '"고등학교 첫 주에 아무 일이 없어도 미리 찾아 둘 도움 세 가지는?" 판의 별은 \'담임 선생님 → 상담실(Wee클래스) → 학교폭력 신고·상담 창구 번호 적기\', 깃발은 \'도움 경로 완성\', 바위는 \'일이 생기면 그때 찾기\'라고 읽어 준다. "일이 생기면 그때 찾으면 된다"는 학생에게 "일이 생긴 순간 침착하게 찾을 수 있을까요?"라고 되묻는다.',
          task: '새 학교에서 찾아 둘 도움 경로를 길 찾기 판으로 짜요. 별(찾아 둘 도움)을 모두 지나 깃발(도움 경로 완성)에 닿고, 바위(그때 찾기)는 피해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(ROUTE('별 셋(담임·상담실·창구 번호 적기)을 지나 깃발(도움 경로 완성)에 닿게 블록을 이으세요.', { cols: 5, rows: 3, start: { x: 0, y: 2, dir: 'E' }, goal: { x: 4, y: 2 }, stars: [[1, 2], [2, 1], [3, 2]], rocks: [[2, 2]] }, { stars: true }),
              ROUTE('별 둘(담임·상담실)을 지나 깃발에 닿게 블록을 이으세요.', { cols: 4, rows: 2, start: { x: 0, y: 0, dir: 'E' }, goal: { x: 3, y: 0 }, stars: [[1, 0], [2, 0]], rocks: [] }, { stars: true, maxBlocks: 3 })),
            IT(ROUTE('반복 블록으로 같은 걸음을 줄여 새 학교 도움 별 셋을 지나 깃발에 닿으세요.', { cols: 5, rows: 2, start: { x: 0, y: 1, dir: 'E' }, goal: { x: 4, y: 1 }, stars: [[1, 1], [2, 1], [3, 1]], rocks: [] }, { stars: true, use: ['rep'], maxBlocks: 3 }),
              null,
              null),
            IT(ROUTE('바위(그때 찾기)를 돌아 별(상담실)을 지나 깃발에 닿으세요.', { cols: 4, rows: 3, start: { x: 0, y: 0, dir: 'S' }, goal: { x: 3, y: 2 }, stars: [[1, 1]], rocks: [[0, 2], [2, 1]] }, { stars: true }),
              null,
              ROUTE('별 넷(안내문·누리집 보기 → 담임 → 상담실 → 창구 번호 적기)을 지나 깃발에 닿게 블록을 이으세요.', { cols: 5, rows: 3, start: { x: 0, y: 0, dir: 'E' }, goal: { x: 4, y: 2 }, stars: [[1, 0], [2, 0], [2, 1], [3, 2]], rocks: [[3, 0], [1, 1]] }, { stars: true }),
              { conclude: '새 학교에서는 일이 생기기 전에 안내문·누리집으로 담임·상담실·학교폭력 신고·상담 창구를 찾아 적어 둬요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '새 학교에서 찾아 둘 도움을 써요.', columns: ['도움', '찾는 방법'], cells: [['담임 선생님', ''], ['상담실(Wee클래스)', ''], [HELP, '']], answer: '(예) 첫날 인사, 학교 안내문·누리집, 학교 안내문에서 번호 찾아 적기' }] },
        notes: '교구는 글 블록을 잇지 못한다 — 길 찾기 판(별 = 찾아 둘 도움, 깃발 = 도움 경로 완성, 바위 = 그때 찾기)으로 바꿨다. ' + LINE_NOTE,
      }),

      // ---- 정리 ----
      M('wrap.pledge-poster', {
        title: '다짐 포스터', method: '다짐 포스터 만들기', tool: 'collage', minutes: 7,
        levels: { easy: '다짐 한 줄 자리를 둔 포스터 바탕을 조각 3개 이상으로 꾸민다(다짐은 활동지).', base: '다짐 한 줄과 상징 그림(조각 5개 이상)으로 포스터를 꾸미고 점검한다.', challenge: '후배에게 남길 말을 활동지에 더하고, 세로 접는 선 기준으로 좌우가 같은 상징 그림을 꾸민다.' },
        wrap: {
          teacher: '"내 다짐을 하나의 모양으로 나타낸다면 어떤 상징이 어울릴까요? 다리, 손, 우산?" 다짐 한 줄은 활동지에 쓰고 조각으로 상징 그림을 꾸미게 한다(교구에는 글자를 넣을 수 없다). 후배에게 남길 말은 3학년만의 몫이라고 말해 준다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'collage', options: { maxPieces: 16 }, prompt: '다짐 한 줄 자리와 상징 그림으로 포스터를 꾸미고 점검해요(다짐은 활동지에 써요).', target: { selfCheck: ['다짐 자리를 비워 두었다', '상징 그림을 꾸몄다', '다짐 한 줄을 활동지에 썼다'], minPieces: 5 }, difficulty: 0.2 },
              { prompt: '조각 3개 이상으로 포스터 바탕을 꾸미고 점검해요.', target: { selfCheck: ['다짐 한 줄을 활동지에 썼다'], minPieces: 3 } },
              { prompt: '세로 접는 선 기준으로 좌우가 같은 상징 그림을 꾸미고, 후배에게 남길 말을 점검해요.', toolOptions: { guide: 'vertical' }, target: { symmetry: 'vertical', selfCheck: ['다짐 한 줄을 활동지에 썼다', '후배에게 남길 말을 썼다'], minPieces: 2 } }),
            { type: 'choice', prompt: '포스터에 넣을 다짐으로 가장 알맞은 것은?', options: ['새 반 단톡방에서 놀림이 시작되면 "그만하자"라고 먼저 쓴다', '고등학교에서는 착하게 산다', '아무 일에도 끼지 않는다'], answer: 0, difficulty: 0.15, explain: '확인할 수 있는 행동이 든 다짐이에요.' },
          ],
        },
        worksheet: {
          title: '다짐 포스터',
          items: [
            { type: 'short', prompt: '포스터에 넣을 다짐 한 줄을 써요.' },
            { type: 'short', prompt: '후배에게 남길 말을 한 문장으로 써요.' },
          ],
        },
        notes: '교구는 글자를 넣지 못해 포스터 바탕만 꾸미고 다짐은 활동지에 쓰게 했다.',
      }),
      M('wrap.pledge-chant', {
        title: '졸업 구호', method: '졸업 구호 리듬 치기', tool: 'keyboard', minutes: 7,
        levels: { easy: '모둠 다짐 한 줄을 4박 마디 하나 리듬으로 짓는다(박 수가 보인다).', base: '모둠 다짐 두 줄을 4박 마디 둘에 맞춰 짓는다.', challenge: '반 전체 구호로 합친 세 줄을 4박 마디 셋으로 짓는다.' },
        wrap: {
          teacher: '"모둠 다짐을 짧은 구호로 줄여, 졸업식 날까지 기억할 리듬으로 만들어 볼까요?" 리듬 블록으로 박을 채운 뒤 모둠별로 치고, 반 전체 구호로 합쳐 함께 친다. 구호는 누군가를 겨냥하지 않고 모두가 할 행동으로 끝나야 한다고 짚는다.',
          exitTicket: [
            IT(Object.assign(X('keyboard', BEAT('모둠 다짐 두 줄 구호를 4박 마디 두 개 리듬으로 지어요.', { measures: 2, blocks: ['q', 'e', 'h', 'qr'] }, { beats: true, selfCheck: ['구호 글자에 맞춰 박을 나눴다', '모둠과 함께 쳐 보았다'] })), { difficulty: 0.2 }),
              { prompt: '모둠 다짐 한 줄 구호를 4박 마디 하나 리듬으로 지어요.', toolOptions: { measures: 1, blocks: ['q', 'h', 'qr'], showBeats: true }, target: { beats: true, selfCheck: ['구호 글자에 맞춰 박을 나눴다'] } },
              { prompt: '반 전체 구호로 합친 세 줄을 4박 마디 세 개 리듬으로 지어요.', toolOptions: { measures: 3, blocks: ['q', 'e', 'h', 'qr', 'er'] }, target: { beats: true, selfCheck: ['구호 글자에 맞춰 박을 나눴다', '반 전체 구호로 합쳤다', '모두 함께 쳐 보았다'] } }),
            { type: 'choice', prompt: '졸업 구호로 가장 알맞은 것은?', options: ['"보면 멈추고, 곁에 서고, 함께 알린다"', '"우리 반이 최고, 다른 반은 꼴찌"', '"모른 척이 안전"'], answer: 0, difficulty: 0.15, explain: '모두가 할 행동으로 끝나는 구호예요.' },
            { type: 'short', prompt: '우리 모둠 졸업 구호를 한 줄로 써요.' },
          ],
        },
        worksheet: {
          title: '졸업 구호',
          items: [
            { type: 'short', prompt: '우리 모둠 졸업 구호를 써요.' },
            { type: 'short', prompt: '반 전체 구호에 넣고 싶은 한 마디를 써요.' },
          ],
        },
        notes: '교구는 구호 글자를 치지 않는다 — 리듬 블록으로 4박 마디를 채우고, 구호 글은 문제 글·활동지에 적었다.',
      }),
    );
  }

  PaperLessons.registerModules(ALL);
})();
