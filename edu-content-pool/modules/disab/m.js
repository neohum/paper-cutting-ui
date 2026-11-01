/* 창체 법정교육 장애인식개선 — 중학교(7~9학년) 모듈 내용(edu-module.v1). 작성 규칙: MODULES_BUILD.md, 계획: framework/mandatory.json 의 disab 중.
 * 근거: 장애인복지법 제25조·시행령 제16조(장애인식개선교육 — 법정 매년 1회 1시간 이상, 범교과 기준 연 2시간), research-mandatory §1·§2
 *   (장애인식개선 중: 장애인권과 편의시설, 통합교육 환경). 주제마다 source 는 체계도에 있다.
 * 주제 4개(7학년 1·8학년 2·9학년 1) × 8모듈 = 32모듈.
 * 지킨 틀:
 *   - 장애를 불쌍함·특별함·감동거리로 그리지 않는다. 장애가 있는 인물은 일하고, 고르고, 의견을 내는 한 사람으로 그린다.
 *   - 사람 먼저 쓰는 말: 장애인·장애가 있는 친구·휠체어 사용자·시각장애인·청각장애 학생·비장애인. '장애우·정상인·장애를 앓다' 같은 말은
 *     바로잡는 함정 카드로만 쓴다. 비하 표현은 쓰지 않는다.
 *   - 학생 자신이나 가족의 장애 여부, 차별받은 경험을 묻지 않는다 — 모든 장면은 가상 인물(가명 두 글자)·가상 학교다.
 *   - 법·제도는 근거 파일에 있는 것(장애인복지법 제25조 — 장애인식개선교육)만. 장애인차별금지법 등 근거 파일에 없는 법 이름·조항은 쓰지 않는다.
 *   - 통계는 근거 파일에 없다 — 그래프 수치는 모두 지어낸 가상 자료이고 화면 제목에 '가상'을 밝힌다.
 * 교구 한계로 계획 글을 바꾼 곳(모듈 levels 글은 실제 설정대로):
 *   - 문항 수는 단계마다 같다: '문장 4개·6개', '항목 2개·3개' 같은 계획은 카드 장 수(limit·카드 목록)나 눈금 칸 수, 교사 진행으로 나눴다.
 *   - collage 는 글자를 넣을 수 없다: 포스터·다짐 띠의 바탕(모양·색)만 꾸미고 문구는 활동지에 쓴다.
 *   - clock 은 한 번에 한 시각만 맞춘다: '시계판에 바꿀 점 표시'는 시각 맞추기 문항 + 바꿀 점은 문제 글·활동지로 나눴다.
 *   - wordcards 는 영어 낱말 교구라 fill·pick·sort(한국어 글 카드)만 쓴다(소리 없음).
 *   - map 은 문항마다 핀 하나: '장벽 2곳·4곳'은 도입 시연에서 핀을 차례로 꽂는 수로 나눴다.
 *   - emotion scale 은 정답이 없는 자기 점검(level 'any')이다. '항목 2개·3개'는 출구 질문 수가 아니라 교사 진행으로 나눴다.
 *
 * 사람 확인: 근거 파일(research-*.md)에 없는 일반 사실·에티켓 문장. 확인처를 함께 적는다(모듈 id 는 disab.m. 뒤).
 *   - myth-fact 전반: "장애는 태어날 때뿐 아니라 살아가면서 사고·질병 등으로 누구에게나 생길 수 있다" — 보건복지부 장애인 실태조사·한국장애인개발원 장애인식개선 교육 자료
 *   - myth-fact.activity.stat-read: 원그래프 수치(살아가는 중 80%·태어날 때·어릴 때 15%·알 수 없음 5%)는 가상이다. 실제 비율은 보건복지부 장애인 실태조사로 확인
 *   - myth-fact.activity.etiquette-dilemma: 시각장애인 안내 에티켓(먼저 묻기, '저기' 대신 말로 구체적으로, 팔을 잡아끌지 않고 내 팔꿈치를 잡게 하기, 흰지팡이를 함부로 잡지 않기),
 *     휠체어 사용자 에티켓(허락 없이 휠체어를 밀지 않기) — 한국장애인개발원·보건복지부 장애인식개선 교육 자료, 한국시각장애인연합회 안내
 *   - myth-fact.activity.etiquette-script: 청각장애 학생과의 소통(얼굴을 보고 말하기, 입 모양이 보이게, 글·문자·수어 등 소통 방법을 당사자에게 묻기) — 한국장애인개발원 교육 자료·한국농아인협회 안내
 *   - myth-fact 전반: '장애우·정상인' 대신 '장애인·비장애인'을 쓴다 — 국립국어원·보건복지부 장애인 관련 바른 용어 안내
 *   - mobility 전반: 점자 블록·경사로·저상버스·엘리베이터 버튼 점자·음성 안내·자막 같은 편의시설의 쓰임 — 보건복지부·한국장애인개발원 편의시설 안내
 *   - mobility 전반: 편의시설과 이동을 '배려'가 아니라 '권리'로 보는 관점 — 체계도 주제 objective(research-mandatory §2 '장애인권과 편의시설'), 국가인권위원회 장애인권 교육 자료
 *   - mobility.activity.travel-time: 이동 시간 막대(4·6·15·25분)는 가상이다
 *   - mobility.activity.mobility-dilemma: 저상버스 경사판·킥보드를 점자 블록 위에 세우지 않기 — 국토교통부·지자체 교통약자 이동 안내
 *   - inclusive-class 전반: 동정(대신 해 주기·빼 주기)과 존중(묻기·함께 정하기)의 구별, 통합학급의 동등한 참여 — 교육부·국립특수교육원 장애이해교육 자료
 *   - inclusive-class.intro.class-chart: 모둠 역할 횟수(8·0·1·1)는 가상이다
 *   - inclusive-class.activity.role-script: 글자판(보완대체의사소통) 앱으로 의견을 내는 친구 — 국립특수교육원 보완대체의사소통 안내
 *   - rights-school 전반: 학습·놀이·정보·이동·의견 표현을 학교생활의 권리로 묶은 것 — 국가인권위원회 인권교육 자료·유엔 장애인권리협약 소개 자료(이 파일은 협약 조항을 인용하지 않는다)
 *   - rights-school.intro.equal-fair: '똑같이'와 '공평하게'(필요한 만큼 지원) 그림 비유 — 인권교육 자료에서 널리 쓰는 비유(그림·수치는 가상)
 *   - rights-school.activity.access-audit: 수업 자료 접근성(영상 자막, 큰 글자, 쉬운 글, 색만으로 구분하지 않기, 그림 설명) — 한국장애인개발원·한국지능정보사회진흥원 웹·정보 접근성 안내
 *   - rights-school.activity.survey-read: 설문 막대(34·22·18·15·6명)는 가상이다
 */
(function () {
  const ALL = [];
  // 주제마다 공통 칸을 채우는 모듈 틀. sid = '<intro|activity|wrap>.<이름>'
  const MK = (topic, grades) => (sid, o) => Object.assign({ id: `disab.m.${topic}.${sid}`, schema: 'edu-module.v1', type: sid.split('.')[0], domain: 'disab', band: '중', topic: `disab.m.${topic}`, grades }, o);
  const sid = (s) => (typeof s === 'string' ? s : s.id || s.label);

  // ---- 카드 판 문항 조각: { prompt, toolOptions, target } 을 돌려준다(문항 levels[단계] 에도 그대로 쓴다) ----
  // 나누기: cards [{ id, text, to: 칸id }] — to 가 없으면 남겨야 하는 함정 카드
  const strip = (cards) => cards.map((c) => { const x = Object.assign({}, c); delete x.to; delete x.ok; return x; });
  const sortOf = (slots, cards) => Object.fromEntries(slots.map((s) => [sid(s), cards.filter((c) => c.to === sid(s)).map((c) => c.id)]));
  const SB = (prompt, slots, cards, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'sort', slots, cards: strip(cards) }, opt), target: { sort: sortOf(slots, cards) } });
  // 종이 분류판(sortboard 글 카드 모드): mode 없이 slots·cards
  const BOARD = (prompt, slots, cards, opt) => ({ prompt, toolOptions: Object.assign({ slots, cards: strip(cards) }, opt), target: { sort: sortOf(slots, cards) } });
  // 차례: cards 를 바른 차례로 적는다(화면에서는 섞여 나온다). trap = 함정 카드
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

  // ---- 갈림길(dilemma): 깊이 3 나무 하나로 쉬움(선택 1번)·기본(선택 2번)·도전(선택 3번) 판을 만든다 ----
  // 선택에 next 가 있으면 end = 그 단계에서 잘렸을 때 보일 마무리 글
  const cut = (sc, d) => Object.assign({}, sc, { choices: sc.choices.map((c) => {
    const x = Object.assign({}, c); delete x.end;
    if (c.next && d > 1) x.next = cut(c.next, d - 1);
    else { delete x.next; if (c.next) x.ending = c.end || '다음 단계에서 이어지는 장면을 따라가 봐요.'; }
    return x;
  }) });
  // good = 도전 단계의 바른 길 목록 [[a, b, c], [d]] — 단계마다 그 깊이까지 자른다
  const paths = (good, d) => { const out = []; for (const g of good) { const p = g.slice(0, d); if (!out.some((q) => q.join('>') === p.join('>'))) out.push(p); } return out; };
  // p = { easy, base, challenge } 문항 글, R = 근거 카드, ok = 맞는 근거 id, more = { reasons, ok, explore? } 도전에만 더할 근거·탐색 수
  const DIL = (p, title, tree, good, R, ok, more, extra) => Object.assign({
    prompt: p.base, toolOptions: { title, scene: cut(tree, 2), reasons: R, compare: true }, target: { path: paths(good, 2), reasons: ok, some: true },
    levels: {
      easy: { prompt: p.easy, toolOptions: { scene: cut(tree, 1), reasons: [] }, target: { path: paths(good, 1) } },
      challenge: { prompt: p.challenge, toolOptions: { scene: cut(tree, 3), reasons: [...R, ...((more && more.reasons) || [])] }, target: Object.assign({ path: paths(good, 3), reasons: [...ok, ...((more && more.ok) || [])], some: true }, more && more.explore ? { explore: more.explore } : {}) },
    },
  }, extra);
  // 한 장면(깊이 1) 갈림길 문항 조각
  const ONE = (prompt, title, scene, good, R, ok, more) => Object.assign({ prompt, toolOptions: { title, scene, reasons: R || [], compare: true }, target: Object.assign({ path: good.map((g) => [].concat(g)) }, R && R.length ? { reasons: ok, some: true } : {}) }, more);
  // 도입 시연용 갈림길: 깊이 d 판 + 바른 길 하나
  const DEMO_DIL = (title, tree, good, R, d) => ({ tool: 'dilemma', options: { title, scene: cut(tree, d || 2), reasons: R || [] }, sequence: [{ path: paths(good, d || 2)[0], reasons: R && R.length ? [R[0].id] : [] }] });

  // ---- 그래프 읽기 ----
  const RD = (prompt, opt, target) => ({ prompt, toolOptions: Object.assign({ mode: 'read' }, opt), target });
  // ---- 기준표 글쓰기: o = { topic, min, max, s:[최소, 최대], title?, starter? } ----
  const RW = (prompt, o, checks, must, more) => Object.assign({ prompt, toolOptions: Object.assign({ topic: o.topic, minChars: o.min, maxChars: o.max, minSentences: o.s[0], maxSentences: o.s[1] }, o.title ? { title: o.title } : {}, o.starter ? { starter: o.starter } : {}), target: Object.assign({ selfCheck: checks }, must ? { mustInclude: must } : {}) }, more);
  // ---- 마음 눈금(emotion scale) 자기 점검: 정답 없음 ----
  const SCALE = (prompt, situation, steps, more) => Object.assign({ type: 'tool', tool: 'emotion', prompt, options: { mode: 'scale', situation, feeling: '자신 있음', steps: steps || 5, scaleLabels: { 1: '아직 어려워요', [steps || 5]: '자신 있어요' } }, target: { level: 'any' } }, more);
  // ---- 시계 ----
  const H = (h, m) => ({ h, m });

  const SAFE_NOTE = '모든 인물·장면은 가상이다. 학생 자신이나 가족의 장애 여부, 차별받은 경험을 묻지 않고 "가상 인물이라면"으로만 이야기한다.';
  const WORD_NOTE = '장애인·장애가 있는 친구·비장애인처럼 사람을 먼저 쓰는 말을 쓰고, 학생이 \'장애우·정상인\'이라고 말하면 그 자리에서 바른 말로 바꿔 다시 말해 준다.';

  // ==== 7학년 · 장애에 대한 편견과 사실, 바른 에티켓 (disab.m.myth-fact) ====
  {
    const M = MK('myth-fact', [7]);
    const MF = ['편견', '사실'];
    const QUIZ = [
      { id: 'q1', text: '장애인은 일을 할 수 없다', to: '편견' }, { id: 'q2', text: '장애는 살면서 누구에게나 생길 수 있다', to: '사실' },
      { id: 'q3', text: '장애인은 늘 누군가의 도움이 필요하다', to: '편견' }, { id: 'q4', text: '필요한 도움은 사람마다 다르다', to: '사실' },
      { id: 'q5', text: '장애가 있으면 불행하다', to: '편견' }, { id: 'q6', text: '편의시설이 있으면 할 수 있는 일이 늘어난다', to: '사실' },
    ];
    const BR = ['어디서 왔나', '누구를 다치게 하나', '사실은'];
    const WORK = [
      { id: 'a1', text: '일하는 장애인을 본 적이 거의 없다', to: '어디서 왔나' }, { id: 'a2', text: '드라마가 도움받는 모습만 보여 줬다', to: '어디서 왔나' },
      { id: 'b1', text: '일할 기회를 얻지 못하는 장애인', to: '누구를 다치게 하나' }, { id: 'b2', text: '"넌 못 할 거야"를 듣는 친구', to: '누구를 다치게 하나' },
      { id: 'c1', text: '보조기기·편의시설이 있으면 일할 수 있다', to: '사실은' }, { id: 'c2', text: '여러 직업에서 일하는 장애인이 있다', to: '사실은' },
      { id: 't1', text: '생각일 뿐이니 아무도 안 다친다' }, { id: 't2', text: '장애인은 원래 일을 싫어한다' },
    ];
    const HELPB = [
      { id: 'a1', text: '도움받는 장면만 기억에 남았다', to: '어디서 왔나' }, { id: 'a2', text: '장애를 "불편"으로만 배웠다', to: '어디서 왔나' },
      { id: 'b1', text: '스스로 하려는데 손을 빼앗기는 사람', to: '누구를 다치게 하나' }, { id: 'b2', text: '묻지 않은 도움에 놀라는 사람', to: '누구를 다치게 하나' },
      { id: 'c1', text: '필요한 도움은 사람·상황마다 다르다', to: '사실은' }, { id: 'c2', text: '필요한지는 당사자에게 물어야 안다', to: '사실은' },
      { id: 't1', text: '도와주면 언제나 고마워한다' }, { id: 't2', text: '장애인은 모두 같은 장애가 있다' },
    ];
    const TWO = (cards, ids) => pickCards(cards, ids);
    // 버스 정류장 갈림길(깊이 3). 가상 인물: 흰지팡이를 쓰는 시각장애인 어른
    const BUS = { text: '버스 정류장에서 흰지팡이를 쓰는 어른이 버스 번호 안내판 쪽을 향해 서 있다. 버스가 몇 대 지나간다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'grab', text: '말없이 팔을 잡고 버스 쪽으로 이끈다', result: '갑자기 팔을 잡혀 그분이 놀라 몸이 굳는다.', impact: [{ who: '흰지팡이를 쓰는 분', text: '놀라고 불안하다', tone: -1 }], why: '묻지 않고 몸을 잡으면 놀라고 넘어질 수도 있어요. 먼저 물어요.', end: '묻지 않고 팔을 잡아 그분이 놀랐어요.',
        next: { text: '그분이 "괜찮아요, 제가 할게요"라고 말한다.', ask: '이제 어떻게 할까?', choices: [
          { id: 'keep', text: '"위험해요"라며 계속 끌고 간다', result: '그분이 팔을 빼려다 휘청인다.', impact: [{ who: '흰지팡이를 쓰는 분', text: '자기 결정을 무시당한다', tone: -1 }], why: '괜찮다는 말은 그 사람의 결정이에요. 대신 결정하지 않아요.' },
          { id: 'sorry', text: '손을 놓고 "놀라셨죠, 필요하면 말씀해 주세요"라고 한다', result: '그분이 고개를 끄덕이고 다시 지팡이로 길을 짚는다.', impact: [{ who: '흰지팡이를 쓰는 분', text: '스스로 움직인다', tone: 1 }] }] } },
      { id: 'ask', text: '"도움이 필요하세요?"라고 먼저 묻는다', result: '그분이 "702번이 오면 알려 주실래요?"라고 답한다.', impact: [{ who: '흰지팡이를 쓰는 분', text: '원하는 도움을 말한다', tone: 1 }], end: '먼저 물어 필요한 도움을 알았어요.',
        next: { text: '702번 버스가 정류장 끝 쪽에 선다.', ask: '어떻게 알려 줄까?', choices: [
          { id: 'point', text: '"저기, 저쪽이에요"라고 손으로 가리킨다', result: '그분은 \'저기\'가 어디인지 알 수 없다.', impact: [{ who: '흰지팡이를 쓰는 분', text: '버스를 놓칠 수 있다', tone: -1 }], why: '보이지 않는 사람에게 \'저기\'는 뜻이 없어요. 방향과 거리를 말로 알려요.' },
          { id: 'tell', text: '"702번이 오른쪽으로 다섯 걸음쯤 앞에 섰어요"라고 말한다', result: '그분이 방향을 잡고 걷기 시작한다.', impact: [{ who: '흰지팡이를 쓰는 분', text: '스스로 버스로 간다', tone: 1 }], end: '말로 방향과 거리를 알려 드렸어요.',
            next: { text: '버스 문 앞에 사람이 몰려 있다.', ask: '어떻게 할까?', choices: [
              { id: 'elbow', text: '"제 팔꿈치를 잡으시겠어요?"라고 묻고 함께 걷는다', result: '그분이 팔꿈치를 잡고 반걸음 뒤에서 따라와 버스에 오른다.', impact: [{ who: '흰지팡이를 쓰는 분', text: '안전하게 탄다', tone: 1 }] },
              { id: 'push', text: '말없이 등을 밀어 버스에 태운다', result: '그분이 계단 앞에서 발을 헛디딜 뻔한다.', impact: [{ who: '흰지팡이를 쓰는 분', text: '넘어질 뻔한다', tone: -1 }], why: '밀면 계단이 어디인지 모른 채 몸이 앞으로 쏠려요. 물어보고 함께 걸어요.' }] } }] } },
      { id: 'pass', text: '바쁜 척 그냥 지나친다', result: '그분은 다음 버스가 올 때까지 다른 사람에게 다시 물어본다.', impact: [{ who: '흰지팡이를 쓰는 분', text: '도움을 청할 기회가 늦어진다', tone: 0 }], why: '도움이 필요한지 묻는 한마디로 기회를 열 수 있어요. 거절하면 그 뜻을 따르면 돼요.', ending: '물어볼 기회를 지나쳤어요.' }] };
    const BUS_R = [{ id: 'r1', text: '도움은 당사자가 원하는지 먼저 묻는다' }, { id: 'r2', text: '보이지 않는 사람에게는 방향과 거리를 말로 알린다' },
      { id: 'r3', text: '장애인은 당연히 도움이 필요하다', why: '필요한 도움은 사람마다 달라요. 그래서 먼저 물어요.' }, { id: 'r4', text: '빨리 끌고 가는 것이 가장 친절하다', why: '묻지 않은 도움은 놀라게 하고 위험할 수 있어요.' }];
    const BUS_C = { reasons: [{ id: 'r5', text: '거절도 그 사람이 내린 결정이다' }, { id: 'r6', text: '몸이나 보조기기를 잡기 전에 허락을 구한다' }], ok: ['r5', 'r6'], explore: 3 };
    // 사실 카드 빈칸
    const FACT = [['편견: 장애인은 일을 못 한다 → 사실: ___', '편의시설·보조기기가 있으면 일할 수 있다'], ['편견: 장애인은 늘 도움이 필요하다 → 사실: ___', '필요한 도움은 사람마다 달라 먼저 묻는다'], ['이 사실을 확인할 곳: ___', '공공기관의 공식 통계와 당사자 단체 자료']];
    const PIE = [['살아가는 중(사고·질병 등)', 80], ['태어날 때·어릴 때', 15], ['알 수 없음', 5]];
    const PIE_O = { type: 'circle', title: '장애가 생긴 시기(수업용 가상 자료)', unit: '%', data: PIE };

    ALL.push(
      // ---- 도입 ----
      M('intro.myth-quiz', {
        title: '편견일까 사실일까 빠른 판단', method: '편견일까 사실일까 빠른 판단', tool: 'sortboard', minutes: 6,
        levels: { easy: '교사가 문장 4장(q1~q4)만 소리 내어 읽고, 학생은 손을 들어 편견·사실을 함께 고른다.', base: '문장 6장을 편견·사실 바구니에 나누는 시연을 보며 문장마다 고른 근거를 짝에게 한마디로 말한다.', challenge: '편견 바구니의 문장 하나를 골라 그런 생각이 생긴 까닭(본 적이 없어서·드라마 때문에 등)을 하나씩 말한다.' },
        intro: {
          teacher: '"\'장애는 살면서 누구에게나 생길 수 있다\', 이 말은 편견일까요, 사실일까요?" 시연 단추로 문장 6장이 편견·사실 바구니에 나뉘는 모습을 보인다. "장애인은 도움이 필요한 사람 아닌가요?"라는 말이 나오면 "필요한 도움이 사람마다 같을까요? 그걸 누가 가장 잘 알까요?"라고 되묻는다. 오늘은 편견이 어디서 오는지 따지고, 장애인을 만날 때 먼저 묻는 에티켓을 익힌다고 밝힌다.',
          student: '장애에 대한 문장 6장을 편견과 사실로 나누어 보고, 하나를 골라 왜 그렇게 나눴는지 짝에게 한마디로 말해요.',
          demo: { tool: 'sortboard', options: { slots: MF, cards: strip(QUIZ) }, sequence: [{ sort: sortOf(MF, QUIZ) }] },
          art: { draw: 'a paper-cut classroom board with two paper baskets labeled with question marks and sentence cards flying into them, diverse students including a wheelchair user looking at the board together', banner: '편견일까, 사실일까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: WORD_NOTE,
      }),
      M('intro.media-scene', {
        title: '드라마 속 장애인 장면 읽기', method: '드라마 속 장애인 장면 읽기', tool: 'story', minutes: 6,
        levels: { easy: '교사가 장면 2장(늘 도움만 받는 인물·직업을 가진 인물)을 견주어 읽고 어느 쪽이 편견을 키우는지 함께 고른다.', base: '가상 드라마 장면 3장을 보고 편견을 키우는 장면을 바구니에 담는 시연을 따라 고른 뒤 까닭을 말한다.', challenge: '고정관념을 깨는 새 장면 한 줄(인물이 하는 일·고르는 것)을 짝과 지어 말한다.' },
        intro: {
          teacher: '"드라마에서 장애가 있는 인물은 주로 어떤 모습으로 나오나요?" 가상 드라마 장면 세 장을 넘겨 보이고, 시연 단추로 늘 도움만 받는 인물과 불쌍하게만 그려진 인물이 \'편견을 키우는 장면\' 바구니에 담기는 모습을 보인다. "감동적인 장면은 좋은 거 아니에요?"라는 말이 나오면 "장애인이 출근하고 회의하는 장면도 감동을 위해 나와야 할까요?"라고 되묻는다. 장애가 있는 인물도 일하고 고르고 의견을 내는 한 사람으로 그려질 때 편견이 줄어든다고 짚는다.',
          student: '가상 드라마 장면 3장을 보고 장애에 대한 편견을 키울 수 있는 장면을 골라요. 고른 까닭을 한 줄로 말해요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '편견을 키우는 장면', title: '가상 드라마 세 장면', cards: [
            { id: 's1', text: '늘 도움만 받고 고맙다고만 말하는 인물', motif: 'cloud' }, { id: 's2', text: '불쌍한 사람으로만 그려지는 인물', motif: 'leaf' },
            { id: 's3', text: '회사에서 회의를 이끄는 휠체어 사용자', motif: 'star' }], shuffle: false }, sequence: [{ pick: ['s1', 's2'] }] },
          art: { draw: 'a paper-cut TV screen with three small drama scenes side by side: a person only receiving help, a person shown as pitiful, and a wheelchair user leading a meeting at an office', banner: '어떤 인상을 줄까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '장면은 모두 가상 드라마다. 실제 드라마·배우 이름을 들지 않는다. ' + WORD_NOTE,
      }),

      // ---- 활동 ----
      M('activity.myth-analysis', {
        title: '편견 사례 분석표', method: '편견 사례 분석표', tool: 'mindmap', minutes: 15,
        levels: { easy: '가지 2개(어디서 왔나·사실은)에 카드 4장을 나누고, 틀린 가지에 놓으면 바로 알려 준다.', base: '편견 하나에 가지 3개(어디서 왔나·누구를 다치게 하나·사실은)를 채운다(함정 카드 2장).', challenge: '셋째 문항에서 두 편견에 함께 들어 있는 뿌리를 골라 두 편견을 견준다.' },
        activity: {
          title: '편견 사례 분석표', tool: 'mindmap',
          teacher: '"\'장애인은 일을 못 한다\'는 생각은 어디서 왔을까요? 그 생각은 누구를 다치게 할까요?" 카드를 가지에 놓을 때마다 그 카드가 편견의 출처인지, 피해인지, 사실인지 소리 내어 말하게 한다. "생각만 하는 건 괜찮잖아요"라는 학생에게 "면접관이 그 생각을 하고 있다면, 지원한 장애인은 어떤 일을 겪을까요?"라고 되묻는다. 편견은 머릿속에 머물지 않고 기회를 막는 행동으로 이어진다는 점을 짚는다.',
          task: '편견 하나를 가운데 두고 "어디서 왔나·누구를 다치게 하나·사실은" 가지에 카드를 나누어 분석해요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            IT(SB('편견 "장애인은 일을 못 한다"를 세 가지로 분석하세요. 맞지 않는 카드는 남겨요.', BR, WORK, { topic: '장애인은 일을 못 한다' }),
              SB('편견 "장애인은 일을 못 한다"를 두 가지로 분석하세요.', ['어디서 왔나', '사실은'], TWO(WORK, ['a1', 'a2', 'c1', 'c2']), { topic: '장애인은 일을 못 한다' })),
            IT(SB('편견 "장애인은 늘 도움이 필요하다"를 세 가지로 분석하세요. 맞지 않는 카드는 남겨요.', BR, HELPB, { topic: '장애인은 늘 도움이 필요하다' }),
              SB('편견 "장애인은 늘 도움이 필요하다"를 두 가지로 분석하세요.', ['어디서 왔나', '사실은'], TWO(HELPB, ['a1', 'a2', 'c1', 'c2']), { topic: '장애인은 늘 도움이 필요하다' })),
            IT(MB('편견마다 그것을 바로잡는 사실을 이어 보세요.', [['장애인은 일을 못 한다', '편의시설이 있으면 일할 수 있다'], ['장애인은 늘 도움이 필요하다', '필요한 도움은 사람마다 다르다'], ['장애는 특별한 사람에게만 생긴다', '사고·질병으로 누구에게나 생길 수 있다']], ['장애인은 모두 착하고 순수하다'], { topic: '편견 바로잡기' }),
              MB('편견 두 개를 바로잡는 사실을 이어 보세요.', [['장애인은 일을 못 한다', '편의시설이 있으면 일할 수 있다'], ['장애인은 늘 도움이 필요하다', '필요한 도움은 사람마다 다르다']], [], { topic: '편견 바로잡기' }),
              PB('두 편견("일을 못 한다"·"늘 도움이 필요하다")에 함께 들어 있는 생각을 골라 담으세요.', '두 편견의 공통 뿌리', [
                { id: 'p1', text: '장애를 그 사람의 전부로 본다', ok: true }, { id: 'p2', text: '할 수 있는 일을 묻지 않고 정해 버린다', ok: true },
                { id: 'p3', text: '두 편견 모두 공식 자료에 근거한다' }, { id: 'p4', text: '편견은 생각일 뿐 행동과 상관없다' }], { topic: '두 편견 견주기' }),
              { conclude: '편견은 본 적 없는 것·한쪽만 본 것에서 생기고, 누군가의 기회를 막아요. 사실을 확인하고 당사자에게 물으면 바로잡을 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '편견 하나를 골라 분석표를 채워요.', columns: ['가지', '내가 찾은 내용'], cells: [['편견', ''], ['어디서 왔나', ''], ['누구를 다치게 하나', ''], ['사실은', '']], answer: '(예) 장애인은 일을 못 한다 / 본 적이 없어서 / 일할 기회를 잃는 사람 / 편의시설이 있으면 일할 수 있다' }],
          easy: [{ type: 'choice', prompt: '편견 "장애인은 일을 못 한다"를 바로잡는 사실은?', options: ['편의시설·보조기기가 있으면 일할 수 있다', '장애인은 일을 싫어한다'], answer: '편의시설·보조기기가 있으면 일할 수 있다' }] },
        notes: WORD_NOTE,
      }),
      M('activity.etiquette-dilemma', {
        title: '버스 정류장 에티켓 갈림길', method: '버스 정류장 에티켓 갈림길', tool: 'dilemma', minutes: 15,
        levels: { easy: '첫 문항은 선택 1번만 하고 결과를 본다. 둘째·셋째 문항은 한 장면에서 고른다.', base: '첫 문항에서 선택 2번을 끝까지 가 본 뒤 알맞은 근거 카드를 고른다.', challenge: '첫 문항에서 선택 3번까지 가고, 서로 다른 결말 세 개를 모두 가 본 뒤 견주어 근거(거절도 결정이다·허락 구하기)까지 고른다.' },
        activity: {
          title: '버스 정류장 에티켓 갈림길', tool: 'dilemma',
          teacher: '"흰지팡이를 쓰는 분이 버스를 기다려요. 팔을 잡고 이끌어 드리는 게 친절일까요?" 학생마다 한 길을 끝까지 가 본 뒤 되돌아가 다른 길의 결과와 당사자의 반응을 견주게 한다. "도와드리는 건데 뭐가 문제예요?"라는 학생에게 "모르는 사람이 내 팔을 갑자기 잡고 끌면 나는 어떨까요?"라고 되묻는다. 끝 장면에서 근거를 고를 때 \'먼저 묻기\'와 \'거절도 그 사람의 결정\'을 함께 짚는다.',
          task: '버스 정류장 장면에서 길을 골라 결과와 당사자의 반응을 따라가고, 끝에서 내 선택의 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '흰지팡이를 쓰는 분이 버스를 기다려요. 한 번 골라 결과를 보세요.', base: '흰지팡이를 쓰는 분이 버스를 기다려요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 가고, 다른 결말도 모두 가 본 뒤 거절과 허락에 관한 근거까지 고르세요.' },
              '버스 정류장', BUS, [['ask', 'tell', 'elbow']], BUS_R, ['r1', 'r2'], BUS_C),
            ONE('"도움이 필요하세요?"라고 물었더니 "괜찮아요"라는 답을 들었어요. 어떻게 할지 고르세요.', '괜찮다는 답', { text: '지하철역 계단 앞에서 흰지팡이를 쓰는 분에게 "도움이 필요하세요?"라고 물었다. "괜찮아요, 익숙한 길이에요"라는 답이 돌아왔다.', ask: '어떻게 할까?', motif: 'house', choices: [
              { id: 'respect', text: '"네, 알겠습니다"라고 하고 길을 비켜 선다', result: '그분이 지팡이로 계단을 짚으며 내려간다.', impact: [{ who: '흰지팡이를 쓰는 분', text: '자기 방식으로 간다', tone: 1 }], ending: '거절을 존중했어요.' },
              { id: 'insist', text: '"그래도 위험해요"라며 지팡이를 잡는다', result: '지팡이를 잡혀 그분이 길을 더듬지 못한다.', impact: [{ who: '흰지팡이를 쓰는 분', text: '길을 살필 수 없다', tone: -1 }], why: '흰지팡이는 길을 살피는 도구예요. 허락 없이 잡지 않아요.' },
              { id: 'sulk', text: '도와주려 했는데 서운하다며 투덜댄다', result: '그분이 미안해하며 서둘러 내려간다.', impact: [{ who: '흰지팡이를 쓰는 분', text: '괜히 미안해진다', tone: -1 }], why: '도움을 거절할 권리가 있어요. 서운해할 일이 아니에요.' }] }, ['respect']),
            ONE('휠체어 사용자가 무거운 문 앞에 있을 때 할 행동을 고르세요.', '무거운 문 앞', { text: '도서관 입구, 휠체어를 쓰는 대학생이 무거운 여닫이문 앞에 멈춰 있다.', ask: '어떻게 할까?', motif: 'house', choices: [
              { id: 'ask', text: '"문을 잡아 드릴까요?"라고 묻는다', result: '"네, 고마워요"라는 답을 듣고 문을 잡는다.', impact: [{ who: '휠체어 사용자', text: '원하는 도움을 받는다', tone: 1 }], ending: '먼저 묻고 원하는 만큼 도왔어요.' },
              { id: 'push', text: '말없이 휠체어 손잡이를 잡고 민다', result: '휠체어가 갑자기 움직여 그분이 깜짝 놀란다.', impact: [{ who: '휠체어 사용자', text: '몸이 휘청인다', tone: -1 }], why: '휠체어는 그 사람의 몸처럼 쓰는 것이에요. 허락 없이 밀지 않아요.' },
              { id: 'stare', text: '어떻게 하는지 신기해서 계속 쳐다본다', result: '그분이 시선을 느끼고 불편해한다.', impact: [{ who: '휠체어 사용자', text: '구경거리가 된다', tone: -1 }], why: '빤히 쳐다보면 사람을 구경거리로 만들어요.' }] }, ['ask'], null, null,
              { conclude: '도움은 먼저 묻고, 원하는 만큼만, 거절하면 그 뜻대로. 몸과 보조기기는 허락 없이 잡지 않아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '시각장애인에게 버스 위치를 알려 줄 때 가장 알맞은 말은?', options: ['"저기 저쪽이에요"', '"오른쪽으로 다섯 걸음쯤 앞에 섰어요"', '"제가 끌고 갈게요"'], answer: '"오른쪽으로 다섯 걸음쯤 앞에 섰어요"' }] },
        notes: '안내 에티켓은 일반 원칙이며 사람마다 원하는 방식이 다를 수 있음을 함께 말한다(먼저 묻기가 가장 앞선다). ' + SAFE_NOTE,
      }),
      M('activity.etiquette-script', {
        title: '에티켓 역할극 대본 쓰기', method: '에티켓 역할극 대본 쓰기', tool: 'rubric-writing', minutes: 15,
        levels: { easy: '셋째 문항에서 대본을 4줄 안팎(4~5문장)으로 쓰고, 문장 틀을 쓸 수 있다.', base: '셋째 문항에서 대본을 6줄 안팎(6~7문장)으로 쓰고 기준표(먼저 묻기·얼굴 보며 말하기·대신 결정하지 않기)로 점검한다.', challenge: '셋째 문항에서 두 인물의 속마음 대사(괄호)를 넣어 6~7줄로 쓰고 기준 하나(속마음 대사)를 더 점검한다.' },
        activity: {
          title: '에티켓 역할극 대본 쓰기', tool: 'rubric-writing',
          teacher: '"청각장애가 있는 하윤이와 처음 모둠이 됐어요. 첫마디로 무엇을 물어볼까요?" 대본에 \'하윤\'과 \'나\'의 대사를 쓰게 하고, 지문(얼굴을 보며, 천천히)도 넣게 한다. "크게 말하면 되잖아요"라는 학생에게 "소리를 크게 하는 것과 하윤이 원하는 소통 방법을 묻는 것, 무엇이 먼저일까요?"라고 되묻는다. 소통 방법(입 모양·글·문자·수어 등)은 사람마다 다르니 당사자에게 묻는다는 점을 짚는다. 실제 친구 이름은 쓰지 않는다.',
          task: '청각장애가 있는 가상 친구 하윤과 처음 모둠이 된 장면의 대본을 쓰고, 기준표로 스스로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(RW('첫 장면: 하윤에게 편한 소통 방법을 먼저 묻는 대사 두 줄을 쓰세요.', { topic: '처음 모둠이 된 청각장애 친구 하윤에게, 편한 소통 방법을 먼저 묻는 대사와 하윤의 대답을 두 줄로 쓰세요.', min: 20, max: 140, s: [2, 3], title: '대본 ① 먼저 묻기', starter: '나: (하윤의 얼굴을 보며) "___?" / 하윤: "___."' }, ['소통 방법을 먼저 물었다', '하윤이 직접 대답하게 했다', '실제 친구 이름을 쓰지 않았다']),
              RW('틀을 채워 첫 대사 두 줄을 쓰세요.', { topic: '하윤에게 편한 소통 방법을 묻는 대사를 쓰세요.', min: 15, max: 120, s: [2, 3], starter: '나: "하윤아, 우리 이야기할 때 ___ 하는 게 편해?" / 하윤: "___."' }, ['소통 방법을 먼저 물었다', '하윤이 직접 대답하게 했다'])),
            IT(RW('둘째 장면: 모둠 역할을 함께 정하는 대사 두 줄을 쓰세요.', { topic: '모둠 역할을 정하는 장면에서, 하윤의 역할을 대신 정하지 않고 함께 정하는 대사 두 줄을 쓰세요.', min: 20, max: 140, s: [2, 3], title: '대본 ② 함께 정하기' }, ['하윤의 역할을 대신 정하지 않았다', '하윤의 의견을 묻는 대사가 있다', '얼굴을 보며 말하는 지문을 넣었다']),
              RW('틀을 채워 역할 정하기 대사를 쓰세요.', { topic: '하윤과 모둠 역할을 함께 정하는 대사를 쓰세요.', min: 15, max: 120, s: [2, 3], starter: '나: "하윤아, 너는 ___ 중에 뭐 하고 싶어?" / 하윤: "나는 ___."' }, ['하윤의 의견을 묻는 대사가 있다', '하윤의 역할을 대신 정하지 않았다'])),
            IT(RW('앞의 대사를 이어 6줄 안팎의 대본을 완성하세요.', { topic: '하윤과 처음 모둠이 된 장면의 대본을 6줄 안팎으로 완성하세요(인물: 나, 하윤, 모둠 친구 한 명).', min: 70, max: 360, s: [6, 7], title: '대본 완성' }, ['먼저 묻는 대사가 있다', '얼굴을 보며 말하는 지문이 있다', '하윤 대신 결정하는 대사가 없다'], [['물어', '묻', '편해', '괜찮아']]),
              RW('앞의 대사를 이어 4줄 안팎의 대본을 완성하세요.', { topic: '하윤과 처음 모둠이 된 장면의 대본을 4줄 안팎으로 완성하세요.', min: 45, max: 260, s: [4, 5], starter: '나: "___?" / 하윤: "___." / 친구: "___." / 하윤: "___."' }, ['먼저 묻는 대사가 있다', '하윤 대신 결정하는 대사가 없다'], [['물어', '묻', '편해', '괜찮아']]),
              RW('두 인물의 속마음 대사를 넣어 6~7줄 대본을 완성하세요.', { topic: '하윤과 처음 모둠이 된 장면의 대본을, 나와 하윤의 속마음 대사(괄호)를 하나씩 넣어 6~7줄로 완성하세요.', min: 80, max: 420, s: [6, 7], title: '속마음까지 담은 대본' }, ['먼저 묻는 대사가 있다', '얼굴을 보며 말하는 지문이 있다', '하윤 대신 결정하는 대사가 없다', '두 인물의 속마음 대사를 넣었다'], [['물어', '묻', '편해', '괜찮아']]),
              { conclude: '좋은 에티켓 대본에는 먼저 묻는 말, 얼굴을 보며 말하는 몸짓, 함께 정하는 결정이 들어 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '모둠이 쓴 대본을 바꿔 읽고 들어 있는 것에 표시해요.', options: ['소통 방법을 먼저 물었다', '얼굴을 보며 말했다', '하윤 대신 결정하지 않았다'] }] },
        notes: '역할극으로 할 때 장애를 흉내 내는 연기(못 듣는 척 과장하기)는 하지 않는다. 하윤 역도 대사를 그대로 읽는다. ' + SAFE_NOTE,
      }),
      M('activity.stat-read', {
        title: '장애 발생 시기 자료 읽기', method: '장애 발생 시기 자료 읽기', tool: 'chart', minutes: 15,
        levels: { easy: '조각 값이 보이는 채로 큰 조각 두 개(살아가는 중·태어날 때)만 읽는다.', base: '조각 값을 읽고 두 조각의 차이를 쓴 뒤, 그래프가 근거가 되는 결론을 고른다.', challenge: '셋째 문항에서 이 그래프가 바로잡는 편견을 고르고 활동지에 한 줄로 쓴다.' },
        activity: {
          title: '장애 발생 시기 자료 읽기', tool: 'chart',
          teacher: '"장애는 대부분 태어날 때부터 있는 것일까요?" 수업용 가상 원그래프를 띄우고, 이 수치는 실제 통계가 아니라 읽기 연습용이며 실제 비율은 공공기관 통계에서 확인해야 한다고 먼저 밝힌다. "나랑은 상관없는 일 같아요"라는 학생에게 "그래프에서 가장 큰 조각이 \'언제\' 생긴 장애인가요?"라고 되묻는다. 자료를 읽은 뒤 \'장애는 특별한 사람에게만 생긴다\'는 편견을 다시 꺼내 견준다.',
          task: '장애가 생긴 시기를 나타낸 가상 원그래프를 읽고, "장애는 누구에게나 생길 수 있다"는 결론의 근거를 찾아요.',
          levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            IT(RD('원그래프에서 가장 큰 조각은 언제 생긴 장애인지 고르세요.', Object.assign({}, PIE_O, { question: '가장 큰 조각은?', choices: PIE.map((d) => d[0]) }), { pick: 0 }),
              RD('두 큰 조각 가운데 더 큰 조각을 고르세요.', Object.assign({}, PIE_O, { question: '더 큰 조각은?', choices: [PIE[0][0], PIE[1][0]] }), { pick: 0 })),
            IT(RD('"살아가는 중" 조각은 "태어날 때·어릴 때" 조각보다 몇 %p 큰지 읽어 쓰세요.', Object.assign({}, PIE_O, { question: '몇 %p 큰가요?' }), { value: 65 })),
            IT(RD('이 가상 그래프가 근거가 되는 결론을 고르세요.', Object.assign({}, PIE_O, { question: '알맞은 결론은?', choices: ['장애는 살면서 누구에게나 생길 수 있다', '장애인은 대부분 태어날 때부터 장애가 있다', '장애는 나와 상관없는 일이다'] }), { pick: 0 }),
              null,
              RD('이 가상 그래프가 바로잡는 편견을 고르세요.', Object.assign({}, PIE_O, { question: '바로잡는 편견은?', choices: ['장애는 특별한 사람에게만 생긴다', '편의시설은 모두에게 쓸모없다', '장애인은 운동을 할 수 없다'] }), { pick: 0 }),
              { conclude: '이 그래프는 가상 자료지만, 읽는 법은 같아요. 장애는 살아가는 동안 누구에게나 생길 수 있으니 \'남의 일\'이 아니에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '이 그래프가 바로잡는 편견 하나를 "편견 → 사실" 한 줄로 써요(가상 자료임을 밝혀요).' }],
          easy: [{ type: 'choice', prompt: '가상 그래프에서 가장 큰 조각은?', options: ['살아가는 중(사고·질병 등)', '태어날 때·어릴 때'], answer: '살아가는 중(사고·질병 등)' }] },
        notes: '그래프 수치(80·15·5%)는 수업용 가상 값이다. 실제 수치를 말하려면 보건복지부 장애인 실태조사를 확인해 교사가 덧붙인다.',
      }),

      // ---- 정리 ----
      M('wrap.fact-card', {
        title: '사실 카드 한 장 쓰기', method: '사실 카드 한 장 쓰기', tool: 'wordcards', minutes: 7,
        levels: { easy: '편견 → 사실 카드 1장의 빈칸을 채운다.', base: '편견 → 사실 카드 2장의 빈칸을 채운다.', challenge: '카드 2장에 \'이 사실을 확인할 곳\' 칸을 더 채운다.' },
        wrap: {
          teacher: '"오늘 바로잡은 편견 하나를 반 게시판에 붙인다면, \'편견 → 사실\' 카드를 어떻게 쓸까요?" 낱말 카드로 빈칸을 채운 뒤 활동지에 내 카드를 한 장 써서 게시판에 붙이게 한다. "사실이라고 쓴 것도 틀릴 수 있잖아요"라는 학생에게 "그래서 어디서 확인할 수 있는지 함께 적어 두면 어떨까요?"라고 되물어, 근거를 확인할 곳(공공기관 통계·당사자 단체 자료)을 짚는다.',
          exitTicket: [
            IT(X('wordcards', FB('편견 → 사실 카드 두 장의 빈칸을 채워요.', FACT.slice(0, 2), ['장애인은 일을 싫어한다', '도와주면 무조건 고마워한다'])),
              FB('편견 → 사실 카드 한 장의 빈칸을 채워요.', FACT.slice(0, 1), ['장애인은 일을 싫어한다']),
              FB('편견 → 사실 카드 두 장과 확인할 곳 칸을 채워요.', FACT, ['장애인은 일을 싫어한다', '도와주면 무조건 고마워한다', '친구에게 들은 소문']), { difficulty: 0.2 }),
            { type: 'choice', prompt: '"장애우" 대신 쓰는 바른 말은?', options: ['장애인', '불쌍한 사람', '정상이 아닌 사람'], answer: 0, difficulty: 0.15, explain: '장애가 있는 사람은 \'장애인\', 장애가 없는 사람은 \'비장애인\'이라고 불러요.' },
            { type: 'short', prompt: '게시판에 붙일 나의 "편견 → 사실" 카드를 한 줄로 써요.' },
          ],
        },
        worksheet: {
          title: '편견 → 사실 카드',
          items: [
            { type: 'table', prompt: '오늘 바로잡은 편견을 카드로 정리해요.', columns: ['편견', '사실'], cells: [['장애인은 일을 못 한다', ''], ['', '']], answer: '(예) 편의시설·보조기기가 있으면 일할 수 있다 / 장애는 누구에게나 생길 수 있다' },
            { type: 'short', prompt: '내 카드의 사실을 확인할 수 있는 곳을 써요.' },
          ],
        },
        notes: WORD_NOTE,
      }),
      M('wrap.etiquette-check', {
        title: '에티켓 자기 점검', method: '에티켓 자기 점검', tool: 'emotion', minutes: 7,
        levels: { easy: '교사가 첫 두 항목(묻고 돕는다·대신 결정하지 않는다)을 장면 예시와 함께 읽어 주고 눈금 3칸에 표시한다. 셋째 항목은 교사와 함께 읽는다.', base: '세 항목에 눈금 5칸으로 확신 정도를 표시한다.', challenge: '눈금 7칸으로 표시하고, 넷째 질문에서 가장 낮게 표시한 항목의 실천 방법을 고른다.' },
        wrap: {
          teacher: '"오늘 배운 에티켓 세 가지, 내일 버스 정류장에서 바로 할 수 있을 만큼 자신 있나요?" 눈금에는 정답이 없고, 낮게 표시한 항목이 다음에 연습할 항목이라고 말해 준다. "모르는 사람한테 말 거는 게 어색해요"라는 학생에게 "\'도움이 필요하세요?\' 한마디만 연습해 보면 어떨까요?"라고 제안한다. 점검 결과는 걷지 않고 학생 자신만 본다.',
          exitTicket: [
            IT(SCALE('"도움이 필요한지 먼저 묻고 돕는다"를 할 자신이 얼마나 있나요?', '도움이 필요해 보이는 사람을 만났을 때 먼저 묻기', 5, { difficulty: 0.1 }),
              { toolOptions: { steps: 3, scaleLabels: { 1: '아직 어려워요', 3: '자신 있어요' } } },
              { toolOptions: { steps: 7, scaleLabels: { 1: '아직 어려워요', 7: '자신 있어요' } } }),
            IT(SCALE('"대신 결정하지 않는다"를 할 자신이 얼마나 있나요?', '거절하거나 다른 방법을 원할 때 그 뜻을 따르기', 5, { difficulty: 0.1 }),
              { toolOptions: { steps: 3, scaleLabels: { 1: '아직 어려워요', 3: '자신 있어요' } } },
              { toolOptions: { steps: 7, scaleLabels: { 1: '아직 어려워요', 7: '자신 있어요' } } }),
            IT(SCALE('"장애인·비장애인 같은 바른 말을 쓴다"를 할 자신이 얼마나 있나요?', '친구와 이야기할 때 장애인·비장애인이라고 말하기', 5, { difficulty: 0.1 }),
              { toolOptions: { steps: 3, scaleLabels: { 1: '아직 어려워요', 3: '자신 있어요' } } },
              { toolOptions: { steps: 7, scaleLabels: { 1: '아직 어려워요', 7: '자신 있어요' } } }),
            { type: 'choice', prompt: '"먼저 묻기"가 아직 어렵다면, 내일 해 볼 실천으로 가장 알맞은 것은?', options: ['"도움이 필요하세요?" 한마디를 소리 내어 연습한다', '도움이 필요해 보이면 묻지 말고 바로 돕는다', '어색하니 아예 피한다'], answer: 0, difficulty: 0.2, explain: '짧은 한마디를 연습해 두면 실제 장면에서 먼저 물을 수 있어요.' },
          ],
        },
        worksheet: {
          title: '나의 에티켓 점검',
          items: [
            { type: 'check', prompt: '내가 이미 할 수 있는 에티켓에 표시해요.', options: ['먼저 묻고 돕는다', '대신 결정하지 않는다', '바른 말을 쓴다', '보조기기를 허락 없이 잡지 않는다'] },
            { type: 'short', prompt: '가장 낮게 표시한 항목을 다음에 어떻게 연습할지 한 문장으로 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 8학년 · 모두가 다닐 수 있는 길 — 편의시설과 이동권 (disab.m.mobility) ====
  {
    const M = MK('mobility', [8]);
    // 가상 동네 칸 지도 — 집에서 학교 가는 길의 장벽
    const TOWN = { grid: [6, 4], title: '가상의 우리 동네 — 집에서 학교까지', places: [
      { name: '집', icon: 'apartment', at: [0, 3] }, { name: '학교', icon: 'school', at: [5, 0] },
      { name: '높은 턱이 있는 횡단보도', icon: 'dot', at: [1, 3] }, { name: '계단만 있는 육교', icon: 'bridge', at: [2, 2] },
      { name: '전봇대로 좁아진 인도', icon: 'dot', at: [3, 1] }, { name: '계단만 있는 학교 뒷문', icon: 'dot', at: [5, 1] },
      { name: '경사로가 있는 횡단보도', icon: 'dot', at: [2, 3] }, { name: '엘리베이터가 있는 지하도', icon: 'station', at: [3, 2] },
      { name: '경사로가 있는 학교 정문', icon: 'dot', at: [4, 0] },
    ] };
    // 오늘 찾은 장벽 카드(가장 급함 = 아예 지나갈 수 없음, 급함 = 돌아가야 함, 나중 = 불편하지만 지나감)
    const URG = ['가장 급함(못 지나감)', '급함(돌아가야 함)', '나중(불편함)'];
    const BAR = [
      { id: 'b1', text: '학교 정문에 계단만 있고 경사로가 없다', to: '가장 급함(못 지나감)' }, { id: 'b2', text: '좁은 인도를 전봇대가 막아 차도로 돌아간다', to: '급함(돌아가야 함)' },
      { id: 'b3', text: '안내판 글씨가 작아 가까이 가야 읽힌다', to: '나중(불편함)' }, { id: 'b4', text: '2층 교실로 가는 엘리베이터가 잠겨 있다', to: '가장 급함(못 지나감)' },
      { id: 'b5', text: '점자 블록 위 킥보드 때문에 비켜 걷는다', to: '급함(돌아가야 함)' }, { id: 'b6', text: '화장실 문이 무거워 여는 데 오래 걸린다', to: '나중(불편함)' },
    ];
    const BAR_MORE = [{ id: 'b7', text: '육교에 계단만 있어 먼 횡단보도로 간다', to: '급함(돌아가야 함)' }, { id: 'b8', text: '정류장 안내 방송이 작게 들린다', to: '나중(불편함)' }];
    // 가상 학교 점검 사진 설명
    const GATE = [
      { id: 'g1', text: '현관에 경사로가 있다', ok: true }, { id: 'g2', text: '점자 블록이 현관 안까지 이어진다' },
      { id: 'g3', text: '현관문이 자동으로 열린다', ok: true }, { id: 'g4', text: '현관에 문턱이 없다' },
      { id: 'g5', text: '경사로 옆에 손잡이가 있다', ok: true }, { id: 'g6', text: '입구 안내판에 점자가 있다' },
    ];
    const TOILET = [
      { id: 'w1', text: '문이 옆으로 밀려 열린다', ok: true }, { id: 'w2', text: '변기 옆에 손잡이가 있다', ok: true },
      { id: 'w3', text: '휠체어가 돌 공간이 비어 있다' }, { id: 'w4', text: '비상벨이 있다', ok: true },
    ];
    const LIFT = [
      { id: 'e1', text: '학생 누구나 엘리베이터를 쓸 수 있다' }, { id: 'e2', text: '버튼 옆에 점자가 있다', ok: true },
      { id: 'e3', text: '층 안내판에 큰 글씨와 그림이 있다' }, { id: 'e4', text: '도착을 알리는 소리가 난다', ok: true },
    ];
    const NOW = [
      { id: 'n1', text: '화장실 청소 도구를 치워 공간을 비운다', ok: true }, { id: 'n2', text: '엘리베이터 "교직원 전용" 잠금을 푼다', ok: true },
      { id: 'n3', text: '점자 블록을 현관 안까지 새로 깐다' }, { id: 'n4', text: '현관 문턱을 깎아 없앤다' },
    ];
    const TIME = [['계단 길(걷는 사람)', 4], ['경사로 길(휠체어)', 6], ['경사로 없어 돌아가는 길(휠체어)', 15], ['엘리베이터 고장 때(휠체어)', 25]];
    const TIME_O = { type: 'bar', horizontal: true, title: '같은 거리, 길마다 걸린 시간(수업용 가상 자료)', unit: '분', xLabel: '길', yLabel: '걸린 시간', data: TIME };
    // 지하철 엘리베이터 갈림길(깊이 3)
    const LIFTD = { text: '지하철역 엘리베이터 앞. 체험학습 짐을 든 우리 모둠 넷이 줄 맨 앞에 섰고, 바로 뒤에 휠체어를 쓰는 어른이 왔다. 옆에는 계단도 있다.', ask: '문이 열리면 어떻게 할까?', motif: 'house', choices: [
      { id: 'ride', text: '짐이 무거우니 모둠이 먼저 탄다', result: '엘리베이터가 꽉 차 휠체어 사용자가 타지 못한다.', impact: [{ who: '휠체어 사용자', text: '다음 차를 또 기다린다', tone: -1 }], why: '계단을 쓸 수 있는 사람과 엘리베이터밖에 길이 없는 사람이 있어요.', end: '휠체어 사용자가 타지 못했어요.',
        next: { text: '문이 닫히려는데 휠체어 사용자가 문 앞에 그대로 있다.', ask: '어떻게 할까?', choices: [
          { id: 'go', text: '그대로 올라간다', result: '휠체어 사용자는 약속 시간에 늦는다.', impact: [{ who: '휠체어 사용자', text: '이동할 수 없다', tone: -1 }] },
          { id: 'out', text: '모둠 둘이 내려 자리를 비운다', result: '휠체어 사용자가 탄다.', impact: [{ who: '휠체어 사용자', text: '바로 이동한다', tone: 1 }] }] } },
      { id: 'wait', text: '휠체어 사용자가 먼저 타도록 기다린다', result: '휠체어 사용자가 먼저 탄다.', impact: [{ who: '휠체어 사용자', text: '바로 이동한다', tone: 1 }], end: '엘리베이터가 꼭 필요한 사람이 먼저 탔어요.',
        next: { text: '친구 하나가 "우리 짐 무거운데 왜 기다려?"라고 투덜댄다.', ask: '어떻게 할까?', choices: [
          { id: 'cut', text: '다음 차례에 뒤에 온 유모차보다 먼저 끼어든다', result: '유모차가 또 기다린다.', impact: [{ who: '유모차를 민 보호자', text: '또 기다린다', tone: -1 }], why: '엘리베이터가 꼭 필요한 사람이 먼저예요. 우리는 계단도 쓸 수 있어요.' },
          { id: 'stairs', text: '짐을 나눠 들고 계단으로 간다', result: '모둠이 짐을 나눠 들고 계단을 오른다.', impact: [{ who: '엘리베이터가 필요한 사람', text: '기다리지 않는다', tone: 1 }], end: '짐을 나눠 들고 계단으로 갔어요.',
            next: { text: '계단 위에서 엘리베이터 안내문을 본다. "누구나 이용"이라고만 적혀 있다.', ask: '어떻게 할까?', choices: [
              { id: 'suggest', text: '역 건의함에 "휠체어·유모차 사용자 먼저" 문구를 제안한다', result: '역에서 안내문에 우선 이용 문구를 더하겠다고 답한다.', impact: [{ who: '다음에 올 휠체어 사용자', text: '덜 기다린다', tone: 1 }] },
              { id: 'forget', text: '그냥 지나간다', result: '안내문은 그대로이고, 다음에도 같은 일이 생길 수 있다.', impact: [{ who: '다음에 올 휠체어 사용자', text: '같은 일을 겪을 수 있다', tone: 0 }], why: '한 번의 양보에서 그치지 않고 안내 문구를 바꾸면 다음 사람도 덜 기다려요.' }] } }] } },
      { id: 'stair', text: '짐을 나눠 들고 처음부터 계단으로 간다', result: '휠체어 사용자가 기다리지 않고 바로 탄다.', impact: [{ who: '휠체어 사용자', text: '바로 이동한다', tone: 1 }], ending: '계단을 쓸 수 있는 우리가 계단으로 갔어요.' }] };
    const LIFT_R = [{ id: 'r1', text: '엘리베이터밖에 길이 없는 사람이 있다' }, { id: 'r2', text: '이동은 누구에게나 보장되어야 하는 권리다' },
      { id: 'r3', text: '먼저 줄 선 사람이 언제나 먼저 탄다', why: '계단을 쓸 수 있는 사람은 다른 길이 있어요. 엘리베이터만 쓸 수 있는 사람은 그렇지 않아요.' }, { id: 'r4', text: '양보는 착한 사람만 하는 선택이다', why: '엘리베이터가 꼭 필요한 사람의 이동은 권리예요. 기분에 따른 선택이 아니에요.' }];
    const LIFT_C = { reasons: [{ id: 'r5', text: '안내 문구를 바꾸면 다음 사람도 덜 기다린다' }], ok: ['r5'] };

    ALL.push(
      // ---- 도입 ----
      M('intro.route-map', {
        title: '학교 가는 길 장벽 찾기', method: '학교 가는 길 장벽 찾기', tool: 'map', minutes: 6,
        levels: { easy: '시연에서 장벽 2곳(높은 턱·계단만 있는 육교)에 핀이 꽂히는 것을 보고 함께 이름을 읽는다.', base: '시연에서 장벽 4곳에 핀이 꽂히는 것을 보고, 휠체어가 대신 지날 수 있는 곳(경사로·엘리베이터)을 짝과 이어 말한다.', challenge: '장벽을 피해 돌아가는 길이 칸 몇 개 더 긴지 지도에서 세어 견준다.' },
        intro: {
          teacher: '"집에서 학교까지, 휠체어를 타고 간다면 어디서 멈추게 될까요?" 가상 동네 칸 지도를 띄우고 시연 단추로 높은 턱·계단만 있는 육교·좁아진 인도·계단만 있는 뒷문에 차례로 핀이 꽂히는 모습을 보인다. "다른 길로 가면 되잖아요"라는 말이 나오면 "그 다른 길이 칸 몇 개 더 멀까요? 날마다 그렇게 간다면?"이라고 되묻는다. 오늘은 편의시설이 \'있으면 좋은 것\'인지 \'모두의 권리\'인지 따져 본다고 밝힌다.',
          student: '가상 동네 지도에서 휠체어로 학교 가는 길을 막는 장벽을 찾아보고, 대신 지날 수 있는 경사로·엘리베이터를 이어 길을 다시 찾아요.',
          demo: { tool: 'map', options: TOWN, sequence: [{ place: '높은 턱이 있는 횡단보도' }, { place: '계단만 있는 육교' }, { place: '전봇대로 좁아진 인도' }, { place: '계단만 있는 학교 뒷문' }] },
          art: { draw: 'a paper-cut neighborhood map seen from above with a winding path from an apartment to a school, small red paper flags on a high curb and a stairs-only footbridge, and a ramp marked in green', banner: '이 길, 모두 다닐 수 있을까?', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
        },
        notes: '지도는 가상 동네다. 학생에게 자기 집 주소나 사는 곳을 말하게 하지 않는다. ' + SAFE_NOTE,
      }),
      M('intro.right-word', {
        title: '"배려"와 "권리" 낱말 견주기', method: '"배려"와 "권리" 낱말 견주기', tool: 'wordcards', minutes: 6,
        levels: { easy: '시연에서 두 낱말(배려·권리)의 뜻 카드가 채워지는 것을 보고 함께 읽는다.', base: '네 낱말(배려·권리·편의·접근)의 뜻 카드 시연을 보고, 경사로는 어느 낱말에 가까운지 손을 들어 고른다.', challenge: '"배려"와 "권리"의 차이를 한 줄로 짝에게 말한다(누가 정하나·없으면 어떻게 되나).' },
        intro: {
          teacher: '"경사로는 장애인을 \'배려\'해서 만든 것일까요, 장애인의 \'권리\'라서 만든 것일까요?" 시연 단추로 배려·권리·편의·접근 네 낱말의 뜻 카드가 채워지는 모습을 보인다. "배려가 더 따뜻한 말 아니에요?"라는 말이 나오면 "배려는 해 주는 사람이 마음먹을 때만 생겨요. 그럼 마음먹지 않은 날에는 학교에 못 가도 될까요?"라고 되묻는다. 편의시설은 누군가의 친절이 아니라 모두가 다닐 수 있어야 한다는 권리의 문제라고 짚는다.',
          student: '배려·권리·편의·접근 네 낱말의 뜻을 짝 지어 보고, 학교 경사로는 어느 낱말과 더 가까운지 골라요.',
          demo: { tool: 'wordcards', options: FB('', [['배려: ___', '상대를 생각해 마음을 쓰는 것'], ['권리: ___', '누구나 마땅히 누릴 수 있는 것'], ['편의: ___', '쓰기 쉽고 편하게 해 주는 것'], ['접근: ___', '가고 들어가서 쓸 수 있는 것']], []).toolOptions, sequence: [{ fill: { f1: 'w1', f2: 'w2', f3: 'w3', f4: 'w4' } }] },
          art: { draw: 'a paper-cut pair of word cards on a table, one with a heart and one with a balanced scale, next to a small paper ramp leading into a school door', banner: '배려일까, 권리일까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '편의시설을 권리로 보는 관점은 주제 목표(장애인권과 편의시설)에서 왔다. 법 조항은 들지 않는다.',
      }),

      // ---- 활동 ----
      M('activity.facility-audit', {
        title: '학교 편의시설 점검표', method: '학교 편의시설 점검표', tool: 'kitchen', minutes: 15,
        levels: { easy: '첫 문항(출입구)은 점검 항목 4개만 보고 사진 설명과 맞는 것을 표시한다.', base: '출입구 6개·화장실 4개·엘리베이터 4개 항목을 사진 설명과 견주어 갖춰진 것만 표시한다.', challenge: '셋째 문항이 \'공사 없이 오늘 바로 고칠 수 있는 것\'만 고르는 문항으로 바뀌어 고칠 순서의 첫 단계를 정한다.' },
        activity: {
          title: '학교 편의시설 점검표', tool: 'kitchen',
          teacher: '"사진 설명을 꼼꼼히 읽어 보세요. 경사로는 있는데, 그 경사로 끝에서 점자 블록은 어디까지 이어지나요?" 점검표 항목마다 사진 설명 속 낱말을 근거로 표시하게 한다. "엘리베이터가 있으니 됐다"는 학생에게 "있어도 잠겨 있다면, 휠체어를 쓰는 학생에게는 있는 걸까요, 없는 걸까요?"라고 되묻는다. 시설이 \'있는 것\'과 \'쓸 수 있는 것\'은 다르다는 점을 짚는다.',
          task: '가상 중학교의 출입구·화장실·엘리베이터 사진 설명을 읽고, 점검표에서 실제로 갖춰진 것만 표시해 부족한 곳을 찾아요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(CL('사진 설명: 현관 앞 경사로와 손잡이가 있고 문은 자동문이다. 점자 블록은 현관 앞에서 끊기고 작은 문턱이 있다. 갖춰진 것만 표시하세요.', '출입구 점검', GATE),
              CL('사진 설명: 현관 앞 경사로가 있고 문은 자동문이다. 점자 블록은 현관 앞에서 끊긴다. 갖춰진 것만 표시하세요.', '출입구 점검', pickCards(GATE, ['g1', 'g2', 'g3', 'g4']))),
            IT(CL('사진 설명: 1층 장애인 화장실은 미닫이문이고 손잡이와 비상벨이 있다. 안에 청소 도구가 쌓여 있다. 갖춰진 것만 표시하세요.', '화장실 점검', TOILET)),
            IT(CL('사진 설명: 엘리베이터에 "교직원 전용" 표지와 잠금이 있다. 버튼 옆 점자와 도착음이 있고, 층 안내판은 글씨가 작다. 갖춰진 것만 표시하세요.', '엘리베이터·안내판 점검', LIFT),
              null,
              CL('찾은 부족한 점 가운데 공사 없이 오늘 바로 고칠 수 있는 것만 표시하세요.', '오늘 바로 고칠 것', NOW),
              { conclude: '편의시설은 \'있다\'로 끝나지 않아요. 끊기지 않고, 잠기지 않고, 막히지 않아야 누구나 쓸 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '점검에서 찾은 부족한 점과 고칠 방법을 써요.', columns: ['곳', '부족한 점', '고칠 방법'], cells: [['출입구', '', ''], ['화장실', '', ''], ['엘리베이터', '', '']], answer: '(예) 점자 블록이 끊김 → 현관 안까지 잇기 / 청소 도구 → 치우기 / 교직원 전용 잠금 → 학생도 쓰게 풀기' }],
          easy: [{ type: 'choice', prompt: '엘리베이터가 있지만 잠겨 있다면?', options: ['휠체어를 쓰는 학생은 쓸 수 없다', '편의시설이 갖춰진 것이다'], answer: '휠체어를 쓰는 학생은 쓸 수 없다' }] },
        notes: '사진은 없고 사진 설명 글로 대신한다. 교사가 우리 학교 시설 사진을 보일 때는 학생 얼굴이 나오지 않게 한다.',
      }),
      M('activity.travel-time', {
        title: '이동 시간 비교 자료 해석', method: '이동 시간 비교 자료 해석', tool: 'chart', minutes: 15,
        levels: { easy: '막대 2개(계단 길·경사로 길)만 있는 그래프에서 값을 보며 읽는다.', base: '막대 4개를 읽고, 가장 긴 막대와 걷는 사람의 차이를 쓴 뒤 그 차이가 뜻하는 것을 고른다.', challenge: '셋째 문항에서 시간 차이가 학교·일 생활에 미치는 영향을 고르고 활동지에 말로 정리한다.' },
        activity: {
          title: '이동 시간 비교 자료 해석', tool: 'chart',
          teacher: '"같은 거리인데, 엘리베이터가 고장 난 날 휠체어 사용자는 몇 분이 걸릴까요?" 가로 막대그래프를 함께 읽고, 이 수치는 수업용 가상 자료라고 먼저 밝힌다. "몇 분 더 걸리는 건 참을 수 있잖아요"라는 학생에게 "날마다 등교·하교·이동 수업마다 20분씩 더 걸린다면 하루에 몇 분일까요?"라고 되묻는다. 시간 차이가 쌓이면 수업·일·만남의 기회가 줄어든다는 점을 짚는다.',
          task: '같은 거리를 여러 길로 갈 때 걸린 시간(가상 자료) 막대그래프를 읽고, 그 차이가 장애인의 생활에 무엇을 뜻하는지 해석해요.',
          levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            IT(RD('그래프에서 가장 오래 걸린 길을 고르세요.', Object.assign({}, TIME_O, { question: '가장 오래 걸린 길은?', choices: TIME.map((d) => d[0]) }), { pick: 3 }),
              RD('막대 2개 가운데 더 오래 걸린 길을 고르세요.', Object.assign({}, TIME_O, { data: TIME.slice(0, 2), question: '더 오래 걸린 길은?', choices: TIME.slice(0, 2).map((d) => d[0]) }), { pick: 1 })),
            IT(RD('"엘리베이터 고장 때" 길은 "계단 길"보다 몇 분 더 걸리는지 읽어 쓰세요.', Object.assign({}, TIME_O, { question: '몇 분 더 걸리나요?' }), { value: 21 }),
              RD('"경사로 길"은 "계단 길"보다 몇 분 더 걸리는지 읽어 쓰세요.', Object.assign({}, TIME_O, { data: TIME.slice(0, 2), question: '몇 분 더 걸리나요?' }), { value: 2 })),
            IT(RD('경사로가 있을 때와 없을 때의 차이가 뜻하는 것을 고르세요.', Object.assign({}, TIME_O, { question: '알맞은 해석은?', choices: ['경사로가 있으면 이동 시간 차이가 크게 줄어든다', '휠체어 사용자는 원래 느리다', '경사로는 시간과 상관없다'] }), { pick: 0 }),
              RD('경사로가 있을 때와 없을 때의 차이가 뜻하는 것을 고르세요.', Object.assign({}, TIME_O, { data: TIME.slice(0, 3), question: '알맞은 해석은?', choices: ['경사로가 없으면 휠체어 사용자가 훨씬 오래 걸린다', '휠체어 사용자는 원래 느리다', '경사로는 시간과 상관없다'] }), { pick: 0 }),
              RD('이 시간 차이가 날마다 쌓이면 생길 수 있는 일을 고르세요.', Object.assign({}, TIME_O, { question: '생길 수 있는 일은?', choices: ['수업·일·약속에 늦거나 갈 기회를 잃는다', '아무 일도 생기지 않는다', '걷는 사람이 더 피곤해진다'] }), { pick: 0 }),
              { conclude: '느린 것은 사람이 아니라 길이에요. 경사로와 엘리베이터가 있으면 이동 시간의 차이가 줄고, 배우고 일할 기회가 지켜져요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '그래프의 시간 차이가 학교생활에 미치는 영향을 한 문장으로 써요(가상 자료임을 밝혀요).' }],
          easy: [{ type: 'choice', prompt: '경사로 길과 계단 길 가운데 시간이 더 걸린 것은?', options: ['경사로 길(휠체어)', '계단 길(걷는 사람)'], answer: '경사로 길(휠체어)' }] },
        notes: '시간 수치(4·6·15·25분)는 수업용 가상 값이다. "휠체어 사용자가 느리다"가 아니라 "길이 막아서 늦어진다"로 읽게 한다.',
      }),
      M('activity.mobility-dilemma', {
        title: '엘리베이터 앞 갈림길', method: '엘리베이터 앞 갈림길', tool: 'dilemma', minutes: 15,
        levels: { easy: '첫 문항은 선택 1번만 하고 결과를 본다. 둘째·셋째 문항은 한 장면에서 고른다.', base: '첫 문항에서 선택 2번을 끝까지 가고 근거 카드를 고른다.', challenge: '첫 문항에서 선택 3번까지 가서 안내 문구를 바꾸는 길을 가 보고, 그 근거까지 고른다.' },
        activity: {
          title: '엘리베이터 앞 갈림길', tool: 'dilemma',
          teacher: '"우리 모둠이 줄 맨 앞이었어요. 그래도 휠체어 사용자에게 먼저 타게 해야 할까요?" 학생마다 한 길을 끝까지 가 보고 되돌아가 다른 길과 견주게 한다. "줄 선 순서가 공평하잖아요"라는 학생에게 "우리에게는 계단이라는 다른 길이 있어요. 휠체어 사용자에게도 다른 길이 있을까요?"라고 되묻는다. 끝에서 한 번의 양보를 넘어 안내 문구처럼 \'다음 사람도 기다리지 않게\' 바꾸는 길을 짚는다.',
          task: '지하철역 엘리베이터 앞 장면에서 길을 골라 결과를 따라가고, 이동권의 관점에서 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '엘리베이터 앞에 휠체어 사용자가 왔어요. 한 번 골라 결과를 보세요.', base: '엘리베이터 앞에 휠체어 사용자가 왔어요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 안내 문구를 바꾸는 길까지 가 보고, 그 근거도 고르세요.' },
              '역 엘리베이터 앞', LIFTD, [['wait', 'stairs', 'suggest'], ['stair']], LIFT_R, ['r1', 'r2'], LIFT_C),
            ONE('저상버스가 경사판을 내리는 동안 내가 할 행동을 고르세요.', '저상버스 정류장', { text: '저상버스 기사가 휠체어 사용자를 위해 경사판을 내린다. 뒤에 줄 선 사람들이 "늦었는데"라며 한숨을 쉰다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
              { id: 'wait', text: '조용히 기다린다', result: '휠체어 사용자가 타고 경사판이 올라간다.', impact: [{ who: '휠체어 사용자', text: '눈치 보지 않고 탄다', tone: 1 }], ending: '기다리는 것도 모두의 이동을 지키는 일이에요.' },
              { id: 'sigh', text: '같이 한숨을 쉰다', result: '휠체어 사용자가 미안하다며 서두른다.', impact: [{ who: '휠체어 사용자', text: '눈치를 본다', tone: -1 }], why: '버스를 타는 것은 누구나의 권리예요. 미안해할 일이 아니에요.' },
              { id: 'jump', text: '경사판 옆으로 먼저 올라탄다', result: '경사판 앞이 막혀 시간이 더 걸린다.', impact: [{ who: '휠체어 사용자', text: '더 늦게 탄다', tone: -1 }], why: '경사판 앞을 비워 두면 오히려 빨리 끝나요.' }] }, ['wait']),
            ONE('점자 블록 위에 킥보드가 서 있을 때 할 행동을 고르세요.', '점자 블록 위 킥보드', { text: '학교 앞 인도, 내가 타고 온 공유 킥보드를 세우려는데 점자 블록 위에 이미 킥보드 두 대가 서 있다.', ask: '어떻게 세울까?', motif: 'house', choices: [
              { id: 'edge', text: '내 킥보드는 점자 블록 밖 가장자리에 세운다', result: '점자 블록 길이 더 막히지 않는다.', impact: [{ who: '시각장애인', text: '길을 따라갈 수 있다', tone: 1 }], ending: '점자 블록 길을 비워 두었어요.' },
              { id: 'same', text: '다들 그러니 나도 그 옆에 세운다', result: '점자 블록 길이 세 대로 막힌다.', impact: [{ who: '시각장애인', text: '지팡이에 걸려 넘어질 수 있다', tone: -1 }], why: '점자 블록은 시각장애인이 따라 걷는 길이에요. 그 위를 막지 않아요.' },
              { id: 'middle', text: '인도 한가운데에 세운다', result: '휠체어와 유모차가 지나가지 못한다.', impact: [{ who: '휠체어 사용자', text: '차도로 돌아간다', tone: -1 }], why: '인도 한가운데는 모두가 지나는 길이에요.' }] }, ['edge'], null, null,
              { conclude: '이동은 누군가의 기분에 달린 배려가 아니라 모두에게 지켜져야 할 권리예요. 길을 비우고, 기다리고, 안내를 바꾸는 것이 그 권리를 지켜요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '엘리베이터 앞에서 계단을 쓸 수 있는 우리가 할 일로 알맞은 것은?', options: ['줄 선 순서대로 먼저 탄다', '엘리베이터가 꼭 필요한 사람이 먼저 타게 하고 계단을 쓴다', '모두 같이 끼어 탄다'], answer: '엘리베이터가 꼭 필요한 사람이 먼저 타게 하고 계단을 쓴다' }] },
        notes: SAFE_NOTE,
      }),
      M('activity.campaign', {
        title: '이동권 캠페인 포스터', method: '이동권 캠페인 포스터', tool: 'collage', minutes: 15,
        levels: { easy: '조각 3개 이상(경사로·버스·점자 블록을 떠올리게 하는 모양 하나씩)으로 바탕을 꾸민다.', base: '조각 5개 이상으로 꾸미고 표어 자리와 밝은·어두운 색 대비를 넣는다. 표어는 활동지에 쓴다.', challenge: '셋째 문항에서 포스터를 볼 사람과 걸 장소를 활동지에 정하고 점검한다.' },
        activity: {
          title: '이동권 캠페인 포스터', tool: 'collage',
          teacher: '"\'길은 모두의 것\' 포스터를 본 사람이 무엇을 하게 되면 좋을까요?" 삼각형은 경사로, 네모는 저상버스, 동그라미는 점자 블록처럼 조각에 뜻을 정하고 바탕을 꾸미게 한다(교구에는 글자를 넣을 수 없어 표어는 활동지에 쓴다). "휠체어 탄 사람이 슬퍼하는 그림을 넣으면 마음이 움직이지 않을까요?"라는 학생에게 불쌍함을 보이는 그림보다 \'막힌 길과 열린 길\'을 보이는 포스터가 권리를 말한다고 짚는다.',
          task: '"길은 모두의 것" 이동권 캠페인 포스터 바탕을 경사로·저상버스·점자 블록을 뜻하는 조각으로 꾸미고, 표어는 활동지에 써요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '삼각형(경사로)·네모(저상버스)·동그라미(점자 블록) 조각을 하나 이상씩 넣어 바탕을 꾸미세요.', toolOptions: { maxPieces: 14 }, target: { has: [{ shape: 'triangle', min: 1 }, { shape: 'square', min: 1 }, { shape: 'circle', min: 1 }], pieces: { min: 5 } } },
              { prompt: '삼각형·네모·동그라미 조각을 하나씩 넣어 바탕을 꾸미세요.', target: { has: [{ shape: 'triangle', min: 1 }, { shape: 'square', min: 1 }, { shape: 'circle', min: 1 }], pieces: { min: 3 } } }),
            IT({ prompt: '멀리서도 보이게 밝은 색과 어두운 색 조각이 맞닿게 꾸미고, 표어 자리를 비워 두세요.', toolOptions: { maxPieces: 14 }, target: { contrast: 'light-dark', selfCheck: ['표어 자리를 비워 두었다', '표어를 활동지에 썼다'], minPieces: 4 } },
              { prompt: '표어 자리를 비워 두고 바탕을 꾸미세요.', target: { selfCheck: ['표어 자리를 비워 두었다', '표어를 활동지에 썼다'], minPieces: 3 } }),
            IT({ prompt: '완성한 포스터를 기준으로 점검하세요.', toolOptions: { maxPieces: 14 }, target: { selfCheck: ['장애인을 불쌍하게 그리지 않았다', '표어에 "권리" 또는 "모두"를 넣었다', '막힌 길보다 열린 길이 보이게 했다'], minPieces: 4 } },
              null,
              { prompt: '포스터를 볼 사람과 걸 장소를 활동지에 정하고 점검하세요.', target: { selfCheck: ['장애인을 불쌍하게 그리지 않았다', '표어에 "권리" 또는 "모두"를 넣었다', '볼 사람과 걸 장소를 활동지에 정했다'], minPieces: 4 } },
              { conclude: '이동권 포스터는 동정이 아니라 \'막힌 길을 열자\'는 요구를 보여 줘요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '포스터 문구를 써요.', columns: ['칸', '내용'], cells: [['표어', ''], ['열어야 할 길 하나', ''], ['볼 사람·걸 장소', '']], answer: '(예) "길은 모두의 것" / 학교 정문 경사로 / 1학년 전체·현관 게시판' }] },
        notes: '교구는 글자를 넣지 못해 바탕만 꾸미고 표어는 활동지에 쓰게 했다. 실제 인물 사진은 쓰지 않는다.',
      }),

      // ---- 정리 ----
      M('wrap.one-line', {
        title: '이동권 한 줄 성찰', method: '이동권 한 줄 성찰', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '한 문장으로 쓰고 기준 2개(권리 낱말·구체적 장소)를 점검한다.', base: '두 문장으로 쓰고 기준 2개를 점검한다.', challenge: '세 문장(제안 하나 포함)으로 쓰고 기준 3개를 점검한다.' },
        wrap: {
          teacher: '"오늘 배운 이동권을 내가 매일 다니는 길과 이어 본다면, 어떤 장소가 떠오르나요?" \'권리\'라는 낱말과 구체적인 장소(학교 정문·버스 정류장 등)를 넣어 쓰게 한다. "장애인이 아니라 잘 모르겠어요"라는 학생에게 "유모차, 깁스한 다리, 무거운 짐을 든 날 그 길은 어땠을까요?"라고 되물어, 모두가 다닐 수 있는 길은 결국 모두에게 이롭다는 점을 짚는다. 자기 집 주소는 쓰지 않게 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'rubric-writing', options: { topic: '오늘 배운 이동권을 내가 다니는 길(학교·정류장 등)과 이어 두 문장으로 쓰세요.', minChars: 25, maxChars: 180, minSentences: 2, maxSentences: 2, title: '이동권 한 줄 성찰' },
              prompt: '이동권을 내 생활과 이어 두 문장으로 쓰고 기준표에 표시해요.', target: { selfCheck: ['"권리"라는 낱말을 썼다', '구체적인 장소를 썼다'], mustInclude: ['권리'] }, difficulty: 0.25 },
              { prompt: '이동권을 내 생활과 이어 한 문장으로 쓰고 기준표에 표시해요.', toolOptions: { minChars: 12, minSentences: 1, maxSentences: 1, starter: '___ 길은 모두가 다닐 권리가 있는 길이다.' } },
              { prompt: '이동권을 내 생활과 이어 제안까지 세 문장으로 쓰고 기준표에 표시해요.', toolOptions: { minChars: 40, maxChars: 260, minSentences: 3, maxSentences: 3 }, target: { selfCheck: ['"권리"라는 낱말을 썼다', '구체적인 장소를 썼다', '바꿀 점을 하나 제안했다'], mustInclude: ['권리'] } }),
            { type: 'choice', prompt: '편의시설에 대한 설명으로 가장 알맞은 것은?', options: ['장애인을 위해 마음 좋은 사람이 베푸는 것', '누구나 다닐 수 있도록 갖춰야 하는 권리의 조건', '있으면 좋지만 없어도 되는 것'], answer: 1, difficulty: 0.2, explain: '편의시설은 이동할 권리를 지키는 조건이에요.' },
          ],
        },
        worksheet: {
          title: '이동권 성찰',
          items: [
            { type: 'short', prompt: '내가 다니는 길 가운데 모두가 다닐 수 있게 바꾸고 싶은 곳과 까닭을 써요.' },
            { type: 'check', prompt: '내 글을 점검해요.', options: ['"권리"라는 낱말을 썼다', '구체적인 장소를 썼다', '바꿀 점을 제안했다'] },
          ],
        },
      }),
      M('wrap.barrier-vote', {
        title: '가장 먼저 고칠 장벽 투표', method: '가장 먼저 고칠 장벽 투표', tool: 'sortboard', minutes: 7,
        levels: { easy: '장벽 카드 3장을 세 바구니에 나누고, 틀린 바구니에 넣으면 바로 알려 준다.', base: '장벽 카드 6장을 \'못 지나감·돌아가야 함·불편함\' 기준으로 나누고 모둠 결과를 견준다.', challenge: '카드 2장이 더해지고, 둘째 질문에서 기준을 고른 까닭을 고르고 활동지에 한 줄씩 단다.' },
        wrap: {
          teacher: '"오늘 찾은 장벽 가운데 무엇부터 고쳐야 할까요? 기준은 \'아예 못 지나가는가\'예요." 모둠마다 장벽 카드를 세 바구니에 나눈 뒤 다른 모둠과 견주게 한다. "안내판 글씨도 중요한데요"라는 학생에게 "중요하지 않다는 게 아니라, 아예 못 들어가는 곳부터 열어야 다른 것도 쓸 수 있다는 기준이에요"라고 짚는다. 기준을 바꾸면 순서가 바뀔 수 있다는 것도 함께 말한다.',
          exitTicket: [
            IT(X('sortboard', BOARD('오늘 찾은 장벽 카드를 급한 정도 바구니에 나누어요.', URG, BAR), { difficulty: 0.2 }),
              Object.assign(BOARD('장벽 카드 3장을 급한 정도 바구니에 나누어요.', URG, pickCards(BAR, ['b1', 'b2', 'b3'])), { toolOptions: Object.assign(BOARD('', URG, pickCards(BAR, ['b1', 'b2', 'b3'])).toolOptions, { instant: true, showCount: true }) }),
              BOARD('장벽 카드 8장을 급한 정도 바구니에 나누어요.', URG, [...BAR, ...BAR_MORE])),
            { type: 'choice', prompt: '"가장 급함" 바구니의 기준으로 알맞은 것은?', options: ['그 장벽 때문에 아예 지나가거나 들어갈 수 없다', '고치는 데 돈이 가장 적게 든다', '내가 가장 자주 보는 곳이다'], answer: 0, difficulty: 0.2, explain: '아예 못 들어가는 곳을 먼저 열어야 그 안의 시설도 쓸 수 있어요.' },
            { type: 'short', prompt: '우리 모둠이 가장 먼저 고칠 장벽 하나와 까닭을 한 줄로 써요.' },
          ],
        },
        worksheet: {
          title: '먼저 고칠 장벽',
          items: [
            { type: 'table', prompt: '모둠이 고른 장벽을 급한 차례로 써요.', columns: ['차례', '장벽', '까닭'], cells: [['1', '', ''], ['2', '', ''], ['3', '', '']], answer: '(예) 정문 계단 → 못 들어감 / 잠긴 엘리베이터 → 2층에 못 감 / 좁은 인도 → 돌아가야 함' },
            { type: 'short', prompt: '다른 모둠과 순서가 달랐던 장벽 하나와 그 까닭을 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 8학년 · 통합학급에서 동등하게 참여하기 (disab.m.inclusive-class) ====
  {
    const M = MK('inclusive-class', [8]);
    const PR = ['동정의 말', '존중의 말'];
    const SAY = [
      { id: 'p1', text: '"대신 해 줄게, 넌 쉬어"', to: '동정의 말' }, { id: 'r1', text: '"어떤 역할 하고 싶어?"', to: '존중의 말' },
      { id: 'p2', text: '"불쌍해, 얼마나 힘들까"', to: '동정의 말' }, { id: 'r2', text: '"같이 하자, 어떻게 하면 편해?"', to: '존중의 말' },
      { id: 'p3', text: '"넌 못 하니까 빠져도 돼"', to: '동정의 말' }, { id: 'r3', text: '"네 생각은 어때?"', to: '존중의 말' },
    ];
    const ROLE = [['자료 정리', 8], ['발표', 0], ['아이디어 내기', 1], ['기록', 1]];
    // 가상 모둠원 넷 — 강점과 원하는 참여 방법
    const MEM = ['하람', '지우', '서진', '민재'];
    const STR = [
      { id: 'h1', text: '그림으로 설명을 잘한다', to: '하람' }, { id: 'h2', text: '이번엔 발표를 해 보고 싶다', to: '하람' },
      { id: 'j1', text: '자료를 꼼꼼히 찾는다', to: '지우' }, { id: 'j2', text: '여럿 앞보다 글로 의견 내기를 좋아한다', to: '지우' },
      { id: 's1', text: '아이디어를 많이 낸다', to: '서진' }, { id: 's2', text: '글자판 앱으로 의견을 쓴다', to: '서진' },
      { id: 'm1', text: '손글씨가 빠르다', to: '민재' }, { id: 'm2', text: '시간 재기를 맡고 싶다', to: '민재' },
      { id: 't1', text: '장애가 있으니 쉬운 일만 한다' },
    ];
    // 체육 시간 팀 나누기 갈림길(깊이 3). 가상 인물: 휠체어를 쓰는 친구 도윤
    const TEAM = { text: '체육 시간, 피구 팀을 나누는데 친구들이 휠체어를 쓰는 도윤을 서로 데려가지 않으려 한다. 도윤이 혼자 남았다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'silent', text: '아무 말 없이 지켜본다', result: '도윤은 마지막에 남은 팀에 억지로 들어간다.', impact: [{ who: '도윤', text: '짐처럼 여겨진다', tone: -1 }], why: '가만있으면 빼놓는 흐름이 그대로 이어져요.', end: '아무도 말하지 않아 도윤이 마지막에 남았어요.',
        next: { text: '경기가 시작됐는데 아무도 도윤에게 공을 주지 않는다.', ask: '어떻게 할까?', choices: [
          { id: 'same', text: '나도 도윤에게 공을 주지 않는다', result: '도윤은 경기 내내 공을 한 번도 잡지 못한다.', impact: [{ who: '도윤', text: '경기에서 빠진다', tone: -1 }] },
          { id: 'pass', text: '도윤에게 공을 패스한다', result: '도윤이 공을 받아 상대 팀을 맞힌다.', impact: [{ who: '도윤', text: '경기에 참여한다', tone: 1 }] }] } },
      { id: 'rule', text: '"규칙을 바꿔서 다 같이 하자"고 제안한다', result: '친구들이 "어떻게?"라고 묻는다.', impact: [{ who: '도윤', text: '함께할 길이 열린다', tone: 1 }], end: '함께할 규칙을 찾기 시작했어요.',
        next: { text: '규칙을 어떻게 바꿀지 다들 나를 쳐다본다.', ask: '어떻게 정할까?', choices: [
          { id: 'decide', text: '"도윤은 심판 하면 되겠다"고 내가 정한다', result: '도윤이 "나도 뛰고 싶은데"라고 작게 말한다.', impact: [{ who: '도윤', text: '또 빠지게 된다', tone: -1 }], why: '대신 정한 규칙이 다시 도윤을 경기 밖으로 보낼 수 있어요.' },
          { id: 'askf', text: '도윤에게 "어떤 규칙이면 같이 뛸 수 있을까?" 묻는다', result: '도윤이 "바닥에 튀긴 공으로만 맞히면 나도 할 수 있어"라고 답한다.', impact: [{ who: '도윤', text: '자기 생각을 말한다', tone: 1 }], end: '도윤에게 직접 물었어요.',
            next: { text: '한 친구가 "그럼 재미없잖아"라고 말한다.', ask: '어떻게 할까?', choices: [
              { id: 'adopt', text: '"한 판만 그 규칙으로 해 보자"고 한다', result: '튀긴 공을 피하느라 모두 더 웃으며 뛴다.', impact: [{ who: '반 친구들', text: '새 규칙도 재미있다는 걸 안다', tone: 1 }] },
              { id: 'drop', text: '"그럼 원래대로 하자"고 물러선다', result: '도윤은 다시 경기 밖에 남는다.', impact: [{ who: '도윤', text: '참여하지 못한다', tone: -1 }], why: '해 보지도 않고 물러서면 동등한 참여가 사라져요.' }] } }] } },
      { id: 'teacher', text: '선생님께 팀을 번호 순으로 나눠 달라고 말씀드린다', result: '팀이 번호 순으로 나뉘고 도윤도 한 팀에 들어간다.', impact: [{ who: '도윤', text: '고르지 않아도 팀이 생긴다', tone: 1 }], ending: '고르는 방식을 바꿔 아무도 남지 않았어요.' }] };
    const TEAM_R = [{ id: 'r1', text: '규칙을 바꾸면 모두가 함께할 수 있다' }, { id: 'r2', text: '빼놓는 흐름을 가만두면 그대로 이어진다' },
      { id: 'r3', text: '장애가 있는 친구는 빠지는 게 편하다', why: '빠지는 게 편한지는 그 친구가 정해요. 대신 정하지 않아요.' }, { id: 'r4', text: '이기려면 어쩔 수 없다', why: '체육 시간의 목적은 모두가 참여하는 거예요. 규칙을 바꿀 수 있어요.' }];
    const TEAM_C = { reasons: [{ id: 'r5', text: '당사자에게 물어야 맞는 규칙을 찾는다' }], ok: ['r5'] };
    const PLEDGE = [{ id: 'g1', text: '묻는다: "어떻게 하면 편해?"', ok: true }, { id: 'g2', text: '함께 정한다: 역할을 같이 고른다', ok: true }, { id: 'g3', text: '친구로 대한다: 똑같이 장난치고 웃는다', ok: true },
      { id: 'x1', text: '대신 해 준다: 힘든 건 내가 다 한다' }, { id: 'x2', text: '불쌍하게 여긴다: 늘 양보한다' }, { id: 'x3', text: '빼 준다: 어려운 활동은 쉬게 한다' }];

    ALL.push(
      // ---- 도입 ----
      M('intro.pity-respect', {
        title: '동정일까 존중일까', method: '동정일까 존중일까', tool: 'sortboard', minutes: 6,
        levels: { easy: '교사가 말 4장(p1·r1·p2·r2)만 읽고 학생이 손을 들어 동정·존중을 고른다.', base: '말 6장이 동정·존중 바구니에 나뉘는 시연을 보고, 하나를 골라 까닭을 짝에게 말한다.', challenge: '동정의 말 하나를 존중의 말로 바꿔 짝에게 말해 본다.' },
        intro: {
          teacher: '"\'대신 해 줄게, 넌 쉬어\'는 친절한 말일까요?" 시연 단추로 말 6장이 동정·존중 바구니에 나뉘는 모습을 보인다. "도와주려는 마음인데 왜 동정이에요?"라는 말이 나오면 "그 말을 들은 친구는 무엇을 할 기회가 사라질까요?"라고 되묻는다. 동정은 상대를 할 수 없는 사람으로 정해 버리고, 존중은 상대에게 묻고 함께 정한다는 차이를 짚는다.',
          student: '장애가 있는 친구에게 하는 말 6장을 동정의 말과 존중의 말로 나누어 보고, 하나를 골라 그렇게 나눈 까닭을 말해요.',
          demo: { tool: 'sortboard', options: { slots: PR, cards: strip(SAY) }, sequence: [{ sort: sortOf(PR, SAY) }] },
          art: { draw: 'a paper-cut classroom where students sit around one table including a student in a wheelchair, speech bubbles above them, some bubbles shaped like hearts and some like open hands', banner: '동정일까, 존중일까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: WORD_NOTE,
      }),
      M('intro.class-chart', {
        title: '모둠 역할 쏠림 자료', method: '모둠 역할 쏠림 자료', tool: 'chart', minutes: 6,
        levels: { easy: '값이 보이는 막대그래프 시연에서 가장 긴 막대(자료 정리 8번)를 함께 읽는다.', base: '가상 기록 표를 보고 막대그래프로 바꾸는 시연을 따라가며 쏠린 역할을 찾는다.', challenge: '하람이 늘 같은 역할을 맡게 된 원인(누가 정했나·물어봤나)을 짝과 추론한다.' },
        intro: {
          teacher: '"한 학기 동안 모둠 활동 10번, 하람은 어떤 역할을 맡았을까요?" 가상 기록 표가 막대그래프로 바뀌는 시연을 보이고 \'자료 정리 8번·발표 0번\'을 함께 읽는다. "하람이 정리를 좋아하나 보죠"라는 말이 나오면 "하람에게 물어본 사람이 있었을까요? 아니면 친구들이 \'그게 편하겠지\' 하고 정했을까요?"라고 되묻는다. 하람은 휠체어를 쓰는 가상 학생이며, 쏠림의 원인은 하람이 아니라 정하는 방식에 있다고 짚는다.',
          student: '가상 학급 기록에서 휠체어를 쓰는 하람이 맡은 역할 횟수를 그래프로 읽고, 왜 한 역할에 쏠렸을지 생각해요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'build', title: '하람이 한 학기 모둠 활동에서 맡은 역할(가상 기록, 10번)', unit: '번', xLabel: '역할', yLabel: '맡은 횟수', data: ROLE, max: 10 }, sequence: [{ build: true }] },
          art: { draw: 'a paper-cut bar chart on a classroom board where one tall bar towers over three short bars, a small paper wheelchair icon under the chart and students pointing at the tall bar', banner: '왜 한 역할만?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '역할 횟수(8·0·1·1)는 가상 기록이다. 우리 반의 실제 모둠 기록이나 특정 학생을 예로 들지 않는다. ' + SAFE_NOTE,
      }),

      // ---- 활동 ----
      M('activity.peer-dilemma', {
        title: '체육 시간 팀 나누기 갈림길', method: '체육 시간 팀 나누기 갈림길', tool: 'dilemma', minutes: 15,
        levels: { easy: '첫 문항은 선택 1번만 하고 결과를 본다. 둘째·셋째 문항은 한 장면에서 고른다.', base: '첫 문항에서 선택 2번을 끝까지 가고 근거 카드를 고른다.', challenge: '첫 문항에서 선택 3번까지, 도윤 본인의 생각을 듣는 길을 끝까지 가 보고 그 근거까지 고른다.' },
        activity: {
          title: '체육 시간 팀 나누기 갈림길', tool: 'dilemma',
          teacher: '"친구들이 도윤을 서로 데려가지 않으려 해요. 가만히 있는 것도 선택일까요?" 학생마다 한 길을 끝까지 가 본 뒤 되돌아가 다른 길과 견주게 한다. "도윤은 심판 하면 되잖아요"라는 학생에게 "그 규칙을 도윤에게 물어보고 정했나요?"라고 되묻는다. 끝 장면에서 동등한 참여는 \'끼워 주기\'가 아니라 \'함께 규칙을 만들기\'라는 점을 짚는다.',
          task: '체육 시간 팀 나누기 장면에서 길을 골라 결과를 따라가고, 동등한 참여의 관점에서 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '도윤이 팀에서 혼자 남았어요. 한 번 골라 결과를 보세요.', base: '도윤이 팀에서 혼자 남았어요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 도윤의 생각을 듣는 길까지 가 보고 그 근거도 고르세요.' },
              '체육 시간 팀 나누기', TEAM, [['rule', 'askf', 'adopt'], ['teacher']], TEAM_R, ['r1', 'r2'], TEAM_C),
            ONE('모둠 발표를 정할 때 할 말을 고르세요.', '모둠 발표 정하기', { text: '모둠 발표자를 정하는데 친구가 "서진은 글자판으로 말하니까 발표는 빼자"고 한다. 서진도 듣고 있다.', ask: '나는 뭐라고 할까?', motif: 'house', choices: [
              { id: 'ask', text: '"서진아, 너는 어떻게 하고 싶어?"라고 묻는다', result: '서진이 글자판으로 "화면 읽기 기능으로 발표해 볼래"라고 쓴다.', impact: [{ who: '서진', text: '자기 방식으로 참여한다', tone: 1 }], ending: '서진이 직접 정했어요.' },
              { id: 'agree', text: '"그래, 그게 서진도 편하겠다"고 맞장구친다', result: '서진이 아무 말 없이 고개를 숙인다.', impact: [{ who: '서진', text: '의견을 낼 기회를 잃는다', tone: -1 }], why: '편한지 아닌지는 서진이 말할 수 있어요. 대신 정하지 않아요.' },
              { id: 'force', text: '"무조건 서진이 해야 공평해"라고 정한다', result: '서진이 준비할 시간도 없이 떠밀린다.', impact: [{ who: '서진', text: '원하지 않는 일을 떠맡는다', tone: -1 }], why: '억지로 맡기는 것도 대신 정하는 거예요. 먼저 물어요.' }] }, ['ask']),
            ONE('도와준 뒤 친구에게 할 말을 고르세요.', '도움 뒤의 말', { text: '쉬는 시간, 하람이 높은 칸의 책을 꺼내 달라고 해서 꺼내 주었다. 옆 친구가 "착하다, 봉사 점수 받겠네"라고 한다.', ask: '나는 뭐라고 할까?', motif: 'house', choices: [
              { id: 'friend', text: '"친구가 부탁해서 꺼내 준 거야"라고 말한다', result: '하람이 웃으며 "다음엔 내가 수학 알려 줄게"라고 한다.', impact: [{ who: '하람', text: '친구로 대우받는다', tone: 1 }], ending: '도움을 주고받는 친구 사이로 말했어요.' },
              { id: 'proud', text: '"응, 나 착하지?"라고 으쓱한다', result: '하람이 머쓱해한다.', impact: [{ who: '하람', text: '봉사 대상이 된 기분이다', tone: -1 }], why: '친구 사이의 부탁을 봉사로 말하면 하람을 도움받는 대상으로만 만들어요.' },
              { id: 'avoid', text: '다음부터는 귀찮아서 피한다', result: '하람은 다른 사람에게 부탁하기 어려워진다.', impact: [{ who: '하람', text: '부탁하기 어려워진다', tone: -1 }], why: '친구끼리는 부탁도 하고 도움도 주고받아요.' }] }, ['friend'], null, null,
              { conclude: '동등한 참여는 대신 정하지 않고, 묻고, 함께 규칙을 만드는 거예요. 장애가 있는 친구는 챙길 대상이 아니라 함께 정하는 친구예요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '팀 나누기 장면에서 도윤이 동등하게 참여하려면 무엇을 바꾸면 좋을지 한 문장으로 써요.' }],
          easy: [{ type: 'choice', prompt: '규칙을 바꿀 때 먼저 할 일은?', options: ['도윤에게 어떤 규칙이 좋을지 묻는다', '도윤 대신 내가 정한다'], answer: '도윤에게 어떤 규칙이 좋을지 묻는다' }] },
        notes: SAFE_NOTE,
      }),
      M('activity.role-script', {
        title: '모둠 회의 역할극 대본', method: '모둠 회의 역할극 대본', tool: 'rubric-writing', minutes: 15,
        levels: { easy: '셋째 문항에서 문장 틀을 따라 4줄 안팎(4~5문장) 대본을 쓴다.', base: '셋째 문항에서 6줄 안팎(5~6문장) 대본을 쓰고 기준표(대신 말하지 않기·질문으로 묻기·결정 함께)로 점검한다.', challenge: '셋째 문항에서 의견이 부딪히는 장면과 해결을 넣어 쓰고 기준 하나를 더 점검한다.' },
        activity: {
          title: '모둠 회의 역할극 대본', tool: 'rubric-writing',
          teacher: '"서진은 글자판 앱으로 의견을 써요. 서진이 쓰는 동안 모둠은 무엇을 해야 할까요?" 대본에 기다리는 지문과 묻는 대사를 넣게 한다. "서진 대신 빨리 말해 주면 회의가 빨라지잖아요"라는 학생에게 "내 말을 누가 대신 해 버리면, 그건 내 의견일까요?"라고 되묻는다. 기다리기·묻기·함께 정하기가 들어간 회의가 모두의 회의라는 점을 짚는다.',
          task: '글자판 앱으로 의견을 내는 가상 친구 서진이 있는 모둠 회의에서, 모두가 의견을 내는 장면의 대본을 쓰고 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(RW('회의 시작: 모두의 의견을 묻는 사회자 대사 두 줄을 쓰세요.', { topic: '모둠 회의 사회자가 서진을 포함한 모두에게 의견을 묻는 대사 두 줄을 쓰세요(서진이 글자판으로 쓸 시간을 주는 지문 넣기).', min: 20, max: 140, s: [2, 3], title: '대본 ① 묻기' }, ['모두에게 의견을 물었다', '서진이 쓸 시간을 기다렸다']),
              RW('틀을 채워 사회자 대사를 쓰세요.', { topic: '모둠 회의 사회자 대사를 쓰세요.', min: 15, max: 120, s: [2, 3], starter: '사회자: "오늘 주제는 ___. 한 사람씩 의견을 말해 줘." (서진이 다 쓸 때까지 기다린다) 사회자: "서진아, ___?"' }, ['모두에게 의견을 물었다', '서진이 쓸 시간을 기다렸다'])),
            IT(RW('의견 나누기: 서진의 의견에 질문으로 답하는 대사 두 줄을 쓰세요.', { topic: '서진이 글자판으로 낸 의견에, 대신 말하거나 고쳐 말하지 않고 질문으로 되묻는 대사 두 줄을 쓰세요.', min: 20, max: 140, s: [2, 3], title: '대본 ② 질문으로 묻기' }, ['서진 대신 말하지 않았다', '질문으로 되물었다']),
              RW('틀을 채워 질문 대사를 쓰세요.', { topic: '서진의 의견에 질문으로 답하는 대사를 쓰세요.', min: 15, max: 120, s: [2, 3], starter: '서진: (글자판) "___." / 지우: "좋다. 그럼 ___ 는 어떻게 할까?"' }, ['서진 대신 말하지 않았다', '질문으로 되물었다'])),
            IT(RW('앞의 대사를 이어 결정까지 6줄 안팎의 대본을 완성하세요.', { topic: '서진·지우·하람·나가 있는 모둠 회의 대본을, 모두 의견을 내고 함께 결정하는 장면까지 6줄 안팎으로 완성하세요.', min: 60, max: 360, s: [5, 6], title: '모둠 회의 대본' }, ['대신 말하는 대사가 없다', '질문으로 묻는 대사가 있다', '모두가 함께 결정했다']),
              RW('틀을 따라 4줄 안팎의 대본을 완성하세요.', { topic: '모둠 회의 대본을 4줄 안팎으로 완성하세요.', min: 40, max: 260, s: [4, 5], starter: '사회자: "___?" / 서진: (글자판) "___." / 지우: "___?" / 모두: "그럼 ___ 로 정하자."' }, ['대신 말하는 대사가 없다', '모두가 함께 결정했다']),
              RW('의견이 부딪히는 장면과 해결을 넣어 대본을 완성하세요.', { topic: '모둠 회의 대본에, 서진과 지우의 의견이 부딪히는 장면과 둘의 생각을 모두 살려 해결하는 장면을 넣어 6줄 안팎으로 완성하세요.', min: 70, max: 400, s: [5, 6], title: '갈등과 해결이 있는 대본' }, ['대신 말하는 대사가 없다', '질문으로 묻는 대사가 있다', '모두가 함께 결정했다', '부딪힌 두 의견을 모두 살렸다']),
              { conclude: '모두의 회의는 기다리고, 대신 말하지 않고, 질문으로 묻고, 함께 정하는 회의예요.' }),
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '다른 모둠 대본을 읽고 들어 있는 것에 표시해요.', options: ['쓸 시간을 기다리는 지문', '대신 말하지 않기', '질문으로 묻기', '함께 결정하기'] }] },
        notes: '역할극에서 서진 역은 글자판 대신 쪽지나 화면에 써서 보여 준다. 장애를 흉내 내는 연기는 하지 않는다. ' + SAFE_NOTE,
      }),
      M('activity.strength-map', {
        title: '모둠원 강점 지도', method: '모둠원 강점 지도', tool: 'mindmap', minutes: 15,
        levels: { easy: '모둠원 두 명(하람·지우) 가지에 카드 4장을 나누고, 틀리면 바로 알려 준다.', base: '모둠원 네 명 가지에 강점·원하는 참여 카드 8장(함정 1장)을 나누고 역할을 잇는다.', challenge: '셋째 문항에서 역할을 돌아가며 맡는 계획 카드를 고른다.' },
        activity: {
          title: '모둠원 강점 지도', tool: 'mindmap',
          teacher: '"하람은 휠체어를 쓰고 그림 설명을 잘해요. 이번엔 발표를 해 보고 싶대요. 하람의 역할은 무엇으로 정할까요?" 카드를 가지에 놓을 때마다 그 카드가 강점인지, 하고 싶은 참여 방법인지 말하게 한다. "장애가 있으니 쉬운 일만 주자"는 함정 카드를 고른 학생에게 "하람이 원한 것은 무엇이었나요?"라고 되묻는다. 역할은 장애가 아니라 강점과 바람으로 정한다는 점을 짚는다.',
          task: '가상 모둠원 네 명의 강점과 원하는 참여 방법을 가지로 정리하고, 그에 맞게 모둠 역할을 짜요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            IT(SB('모둠원마다 강점과 원하는 참여 방법 카드를 가지에 나누세요. 맞지 않는 카드는 남겨요.', MEM, STR, { topic: '우리 모둠 강점 지도' }),
              SB('모둠원 두 명의 강점·참여 카드를 가지에 나누세요.', ['하람', '지우'], pickCards(STR, ['h1', 'h2', 'j1', 'j2']), { topic: '우리 모둠 강점 지도' })),
            IT(MB('강점과 바람에 맞게 역할마다 모둠원을 이어 보세요.', [['발표(그림 설명 곁들이기)', '하람'], ['자료 찾기', '지우'], ['아이디어 정리', '서진'], ['기록과 시간 재기', '민재']], [], { topic: '역할 짜기' }),
              MB('두 역할에 모둠원을 이어 보세요.', [['발표(그림 설명 곁들이기)', '하람'], ['자료 찾기', '지우']], [], { topic: '역할 짜기' })),
            IT(PB('모두가 동등하게 참여하는 모둠 약속을 골라 담으세요.', '우리 모둠 약속', [
              { id: 'a1', text: '역할은 본인에게 묻고 정한다', ok: true }, { id: 'a2', text: '글자판으로 쓰는 동안 기다린다', ok: true },
              { id: 'a3', text: '빠른 사람이 대신 다 한다' }, { id: 'a4', text: '장애가 있는 친구는 쉬게 한다' }], { topic: '모둠 약속' }),
              null,
              PB('역할을 돌아가며 맡는 계획으로 알맞은 것을 골라 담으세요.', '돌아가며 맡기 계획', [
                { id: 'b1', text: '활동마다 역할을 바꾸고 원하는 차례를 묻는다', ok: true }, { id: 'b2', text: '바꾼 역할에 필요한 도구를 함께 준비한다', ok: true },
                { id: 'b3', text: '잘하는 역할만 계속 맡긴다' }, { id: 'b4', text: '발표는 말이 빠른 사람만 한다' }], { topic: '돌아가며 맡기' }),
              { conclude: '모둠 역할은 장애가 아니라 강점과 바람으로 정해요. 묻고, 돌아가며 맡으면 모두가 여러 역할을 해 볼 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '모둠원의 강점과 맡은 역할을 정리해요.', columns: ['모둠원', '강점·바람', '역할'], cells: [['하람', '', ''], ['지우', '', ''], ['서진', '', ''], ['민재', '', '']], answer: '(예) 그림 설명·발표 희망 → 발표 / 자료 찾기 / 아이디어 → 정리 / 손글씨·시간 → 기록' }],
          easy: [{ type: 'choice', prompt: '하람의 역할을 정하는 기준으로 알맞은 것은?', options: ['하람의 강점과 하고 싶은 것', '휠체어를 쓴다는 것'], answer: '하람의 강점과 하고 싶은 것' }] },
        notes: SAFE_NOTE,
      }),
      M('activity.class-plan', {
        title: '우리 반 통합 활동 시간표', method: '우리 반 통합 활동 시간표', tool: 'clock', minutes: 15,
        levels: { easy: '디지털 시각이 함께 보이고 긴바늘이 30분씩 움직인다. 하루 활동 시각 넷을 맞추며 바꿀 점을 읽는다.', base: '디지털 시각 없이 긴바늘이 10분씩 움직이고, 시각마다 함께 참여하려고 바꿀 점을 짝과 말한다.', challenge: '작은 눈금 없이 맞추고, 마지막 문항에서 가장 바꾸기 쉬운 것부터 순서를 정해 짝에게 말한다.' },
        activity: {
          title: '우리 반 통합 활동 시간표', tool: 'clock',
          teacher: '"휠체어를 쓰는 하람이 있는 가상 2학년 3반의 하루예요. 9시 모둠 수업에서는 무엇을 바꿔야 하람도 함께할까요?" 시각을 하나씩 맞춘 뒤 그 시간에 바꿀 점을 함께 읽는다. "하람만을 위해 다 바꾸는 건 지나치다"는 학생에게 "통로를 넓히고 줄 서는 곳을 바꾸면, 하람 말고 누구에게도 편해질까요?"라고 되묻는다. 통합 활동은 한 사람을 위한 특별 대우가 아니라 모두가 함께하는 방식이라는 점을 짚는다.',
          task: '가상 2학년 3반 하루 활동 시각을 시계에 맞추고, 시각마다 휠체어를 쓰는 하람도 함께 참여하려면 무엇을 바꿀지 살펴요.',
          levels: { easy: { showDigital: true, minuteStep: 30 }, base: { minuteStep: 10 }, challenge: { minuteStep: 10, showMinuteMarks: false } },
          items: [
            { prompt: '1교시 모둠 수업 9시: 휠체어가 지나갈 통로를 두고 책상을 배치해요. 시계를 9시에 맞추세요.', target: H(9, 0), difficulty: 0.15 },
            { prompt: '쉬는 시간 10시 30분: 놀이를 교실 뒤 넓은 곳에서 해요. 시계를 10시 30분에 맞추세요.', target: H(10, 30), difficulty: 0.2 },
            { prompt: '점심시간 12시 30분: 급식실은 엘리베이터 쪽 길로 다 같이 가요. 시계를 12시 30분에 맞추세요.', target: H(12, 30), difficulty: 0.2 },
            { prompt: '6교시 체육 2시 30분: 바닥에 튀긴 공으로만 맞히는 피구로 바꿔요. 시계를 2시 30분에 맞추세요.', target: H(2, 30), difficulty: 0.2 },
            IT({ prompt: '네 시각의 바꿀 점 가운데 하람에게 의견을 물어볼 것을 하나 골라 짝과 말해요.', free: true },
              null,
              { prompt: '네 시각의 바꿀 점을 가장 바꾸기 쉬운 것부터 순서를 정해 짝과 말해요(시계를 그 시각에 놓고 이야기해요).' },
              { conclude: '통합 활동은 하루의 여러 시간에 걸쳐 있어요. 작은 배치·길·규칙을 바꾸면 모두가 함께할 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '가상 2학년 3반 하루의 바꿀 점을 정리해요.', columns: ['시각', '활동', '바꿀 점'], cells: [['9시', '모둠 수업', ''], ['10시 30분', '쉬는 시간', ''], ['12시 30분', '점심', ''], ['2시 30분', '체육', '']], answer: '(예) 통로 두기 / 넓은 곳에서 놀기 / 엘리베이터 쪽 길로 함께 가기 / 튀긴 공 피구' }],
          easy: [{ type: 'choice', prompt: '9시 모둠 수업에서 바꿀 점은?', options: ['휠체어가 지나갈 통로를 둔다', '하람만 따로 앉게 한다'], answer: '휠체어가 지나갈 통로를 둔다' }] },
        notes: '시계 교구는 한 번에 한 시각만 맞춰, 계획의 \'시계판에 바꿀 점 표시\'를 시각 맞추기 문항과 문제 글의 바꿀 점으로 나누었다. 시각은 가상 일과다. ' + SAFE_NOTE,
      }),

      // ---- 정리 ----
      M('wrap.equal-pledge', {
        title: '동등한 친구 약속 카드', method: '동등한 친구 약속 카드', tool: 'wordcards', minutes: 7,
        levels: { easy: '약속 카드 3장(존중 1·함정 2) 가운데 존중의 약속 1장을 담는다.', base: '약속 카드 6장 가운데 존중의 약속 3장을 담고, 나의 약속 하나에 한 줄을 덧붙인다.', challenge: '셋째 질문에서 약속을 지킨 모습을 구체적인 장면으로 쓴다.' },
        wrap: {
          teacher: '"\'묻는다·함께 정한다·친구로 대한다\' 가운데 내일 바로 지킬 약속은 무엇인가요?" 존중의 약속 카드를 담은 뒤 하나를 골라 내 말로 한 줄을 덧붙이게 한다. "\'빼 준다\'는 배려 아니에요?"라는 학생에게 "빼 주기 전에 그 친구에게 물었나요?"라고 되묻는다. 약속 카드는 이름 없이 게시판에 붙인다.',
          exitTicket: [
            IT(X('wordcards', PB('동등한 친구가 되는 약속 카드만 바구니에 담아요.', '나의 약속', PLEDGE)),
              PB('동등한 친구가 되는 약속 카드 하나를 담아요.', '나의 약속', pickCards(PLEDGE, ['g1', 'x1', 'x3'])), null, { difficulty: 0.2 }),
            { type: 'short', prompt: '고른 약속 하나에 내가 덧붙일 한 줄을 써요(예: 묻는다 + "모둠 역할 정할 때 먼저 묻기").' },
            { type: 'short', prompt: '약속을 지킨 내 모습을 장면 하나로 구체적으로 써요(언제·어디서·무엇을).' },
          ],
        },
        worksheet: {
          title: '동등한 친구 약속',
          items: [
            { type: 'check', prompt: '내가 지킬 약속에 표시해요.', options: ['묻는다', '함께 정한다', '친구로 대한다'] },
            { type: 'short', prompt: '고른 약속에 한 줄을 덧붙여 약속 카드를 완성해요.' },
          ],
        },
      }),
      M('wrap.equal-check', {
        title: '오늘 행동 점검 눈금', method: '오늘 행동 점검 눈금', tool: 'emotion', minutes: 7,
        levels: { easy: '항목 하나("동정 대신 존중")에 눈금 3칸으로 표시하고, 다음 행동 보기 2개 가운데 고른다.', base: '눈금 5칸으로 표시하고 다음 행동 보기 3개 가운데 고른다.', challenge: '첫 질문이 \'친구 입장이라면 내 행동은 몇 칸일까\'로 바뀌어 친구 입장의 눈금을 상상해 표시한다.' },
        wrap: {
          teacher: '"오늘 수업에서 \'동정 대신 존중\'을 얼마나 했는지 눈금에 표시해 보세요. 정답은 없어요." 눈금을 표시한 뒤 다음 모둠 활동에서 할 행동 하나를 고르게 한다. "저는 장애가 있는 친구가 없어서 해당이 없어요"라는 학생에게 "모둠에서 누군가를 대신해 정한 일은 없었나요? 묻고 함께 정하는 건 모든 친구에게 통해요"라고 되묻는다. 눈금 결과는 걷지 않는다.',
          exitTicket: [
            IT(SCALE('오늘 "동정 대신 존중"을 얼마나 했나요?', '오늘 모둠 활동에서 친구에게 묻고 함께 정하기', 5, { difficulty: 0.1 }),
              { toolOptions: { steps: 3, scaleLabels: { 1: '아직 어려워요', 3: '자신 있어요' } } },
              { prompt: '친구 입장이라면 오늘 내 행동은 몇 칸일지 상상해 표시해요.', toolOptions: { situation: '친구가 보기에 내가 묻고 함께 정했는지', steps: 5 } }),
            IT({ type: 'tool', tool: 'emotion', prompt: '다음 모둠 활동에서 할 행동을 골라요.', options: { mode: 'branch', situation: '다음 모둠 활동에서 역할을 정한다.', ask: '나는 무엇을 할까?', choices: [
              { id: 'ask', text: '역할을 정하기 전에 한 사람씩 묻는다', result: '모두 하고 싶은 역할을 말한다.' },
              { id: 'do', text: '빠르게 내가 다 정한다', result: '몇 친구는 원하지 않는 역할을 맡는다.', why: '대신 정하면 동등한 참여가 사라져요.' },
              { id: 'skip', text: '힘들어 보이는 친구는 빼 준다', result: '그 친구는 참여할 기회를 잃는다.', why: '빼 주기 전에 먼저 물어요.' }] }, target: { choice: 'ask' }, difficulty: 0.15 },
              { toolOptions: { choices: [
                { id: 'ask', text: '역할을 정하기 전에 한 사람씩 묻는다', result: '모두 하고 싶은 역할을 말한다.' },
                { id: 'do', text: '빠르게 내가 다 정한다', result: '몇 친구는 원하지 않는 역할을 맡는다.', why: '대신 정하면 동등한 참여가 사라져요.' }] } }),
            { type: 'short', prompt: '다음 모둠 활동에서 존중을 보여 줄 행동 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '오늘 행동 점검',
          items: [
            { type: 'check', prompt: '오늘 내가 한 행동에 표시해요.', options: ['친구에게 먼저 물었다', '함께 정했다', '대신 말하지 않았다'] },
            { type: 'short', prompt: '다음에 더 해 보고 싶은 존중의 행동을 한 문장으로 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 9학년 · 학교 속 장애인권 점검하기 (disab.m.rights-school) ====
  {
    const M = MK('rights-school', [9]);
    const FAIR = [['똑같이(받침대 하나씩)', 2], ['공평하게(필요한 만큼)', 3]];
    const RIGHTS = ['학습', '놀이', '정보', '이동', '의견 표현'];
    const RCARD = [
      { id: 'l1', text: '수업 내용을 이해할 수 있게 배운다', to: '학습' }, { id: 'p1', text: '쉬는 시간 놀이에 함께한다', to: '놀이' },
      { id: 'i1', text: '가정통신문·안내를 읽을 수 있다', to: '정보' }, { id: 'm1', text: '교실·급식실·체험학습 장소에 갈 수 있다', to: '이동' },
      { id: 'v1', text: '학급회의에서 의견을 낼 수 있다', to: '의견 표현' },
    ];
    // 체험학습 사례 갈림길(깊이 3): 1단 = 당사자 서윤, 2단 = 친구인 나, 3단 = 담임 선생님
    const TRIP = { text: '가상 중학교가 휠체어를 쓰는 서윤에게 "이번 체험학습 장소는 계단이 많으니 쉬어도 된다"고 안내했다. 먼저 서윤의 입장에서 고른다.', ask: '서윤은 어떻게 할까?', motif: 'house', choices: [
      { id: 'accept', text: '"그냥 쉴게요"라고 말한다', result: '서윤은 체험학습 날 혼자 도서실에서 과제를 한다.', impact: [{ who: '서윤', text: '함께 배울 기회를 잃는다', tone: -1 }], why: '쉬라는 안내는 배려처럼 보여도 참여할 권리를 빼앗을 수 있어요.', end: '서윤이 체험학습에서 빠졌어요.',
        next: { text: '이제 친구인 나의 입장이다. 체험학습에서 돌아와 반 사진을 단톡방에 올리려 한다.', ask: '나는 어떻게 할까?', choices: [
          { id: 'post', text: '서윤이 없는 단체 사진을 그대로 올린다', result: '서윤은 사진을 보고 말이 없어진다.', impact: [{ who: '서윤', text: '빠졌다는 것을 다시 느낀다', tone: -1 }] },
          { id: 'raise', text: '다음 체험학습은 모두 갈 곳으로 정하자고 학급회의에 낸다', result: '학급회의 안건이 된다.', impact: [{ who: '서윤', text: '다음에는 함께 갈 수 있다', tone: 1 }] }] } },
      { id: 'ask', text: '"어떻게 하면 같이 갈 수 있을지 함께 찾아 주세요"라고 말한다', result: '담임 선생님이 다시 알아보겠다고 한다.', impact: [{ who: '서윤', text: '자기 권리를 말한다', tone: 1 }], end: '서윤이 함께 갈 방법을 요청했어요.',
        next: { text: '이제 친구인 나의 입장이다. 반 친구들은 "원래 장소가 재미있는데"라고 수군댄다.', ask: '나는 어떻게 할까?', choices: [
          { id: 'quiet', text: '선생님이 정하실 일이라며 가만있는다', result: '반 분위기는 \'서윤 때문에 바뀐다\'로 흐른다.', impact: [{ who: '서윤', text: '눈치를 본다', tone: -1 }], why: '권리 문제는 어른만의 일이 아니에요. 친구도 함께 바꿀 수 있어요.' },
          { id: 'support', text: '학급회의에 "모두 갈 수 있는 장소" 안건을 낸다', result: '반 친구들이 휠체어로 다닐 수 있는 장소 후보를 함께 찾는다.', impact: [{ who: '반 친구들', text: '우리 반의 일로 여긴다', tone: 1 }], end: '친구들이 함께 장소를 찾았어요.',
            next: { text: '이제 담임 선생님의 입장이다. 후보 장소는 버스 대신 승강장치가 있는 차량이 필요하고 비용이 조금 더 든다.', ask: '선생님은 어떻게 할까?', choices: [
              { id: 'change', text: '학교와 상의해 장소와 차량을 함께 바꾼다', result: '서윤과 반 전체가 같은 곳으로 체험학습을 간다.', impact: [{ who: '서윤', text: '함께 배운다', tone: 1 }] },
              { id: 'keep', text: '비용 때문에 원래대로 하고 서윤은 쉬게 한다', result: '서윤은 또 빠진다.', impact: [{ who: '서윤', text: '참여하지 못한다', tone: -1 }], why: '비용 때문에 한 학생만 빠지면 그 학생의 배울 권리가 지켜지지 않아요.' }] } }] } },
      { id: 'parent', text: '보호자와 함께 학교에 의견서를 낸다', result: '학교가 장소를 다시 정하는 회의를 연다.', impact: [{ who: '서윤', text: '권리를 공식적으로 말한다', tone: 1 }], ending: '보호자와 함께 학교에 공식적으로 요청했어요.' }] };
    const TRIP_R = [{ id: 'r1', text: '체험학습도 학교 교육이라 모두 참여할 권리가 있다' }, { id: 'r2', text: '쉬라는 안내는 배려처럼 보여도 배제가 될 수 있다' },
      { id: 'r3', text: '안전을 위해 빠지는 것이 늘 맞다', why: '안전은 빠지게 해서가 아니라 함께 갈 방법을 찾아서 지켜요.' }, { id: 'r4', text: '장소가 정해졌으면 바꿀 수 없다', why: '모두 참여할 수 없는 계획이면 바꿀 수 있어요.' }];
    const TRIP_C = { reasons: [{ id: 'r5', text: '당사자·친구·교사가 함께 바꾸면 권리가 지켜진다' }, { id: 'r6', text: '비용은 한 학생을 빼는 이유가 될 수 없다' }], ok: ['r5', 'r6'], explore: 3 };
    const VIDEO = [
      { id: 'v1', text: '영상에 한국어 자막이 있다', ok: true }, { id: 'v2', text: '영상 속 그림을 말로 설명해 준다' },
      { id: 'v3', text: '소리를 키우고 줄일 수 있다', ok: true }, { id: 'v4', text: '영상 내용을 담은 글 자료가 함께 있다' },
    ];
    const SHEET = [
      { id: 's1', text: '글씨가 커서 읽기 쉽다' }, { id: 's2', text: '어려운 낱말에 쉬운 풀이가 있다', ok: true },
      { id: 's3', text: '색만으로 정답을 구별하지 않는다' }, { id: 's4', text: '화면으로 크게 볼 파일이 있다', ok: true },
    ];
    const SLIDE = [
      { id: 'd1', text: '글자와 배경 색 대비가 뚜렷하다', ok: true }, { id: 'd2', text: '한 화면에 글이 짧다', ok: true },
      { id: 'd3', text: '그림에 설명 글이 붙어 있다' }, { id: 'd4', text: '발표자가 화면 내용을 말로 읽어 준다' },
    ];
    const FIX = [
      { id: 'f1', text: '영상 그림을 말로 설명하는 글을 붙인다', ok: true }, { id: 'f2', text: '학습지 글씨를 키운다', ok: true },
      { id: 'f3', text: '그림마다 설명 글을 단다', ok: true }, { id: 'f4', text: '어려우면 그 학생만 자료를 빼 준다' },
    ];
    const BARRIER = [['이동 길·시설', 34], ['안내 정보 부족', 22], ['함께할 친구 없음', 18], ['프로그램이 맞지 않음', 15], ['비용', 6]];
    const SURV_O = { type: 'bar', title: '학교 행사 참여가 어려웠던 이유(수업용 가상 설문, 복수 응답)', unit: '명', xLabel: '이유', yLabel: '응답 수', data: BARRIER };
    const WALL = ['시설의 장벽', '정보의 장벽', '태도의 장벽'];
    const SEEN = [
      { id: 'w1', text: '체험학습 장소에 계단만 있다', to: '시설의 장벽' }, { id: 'w2', text: '영상에 자막이 없다', to: '정보의 장벽' },
      { id: 'w3', text: '"쉬어도 돼"라며 빼 준다', to: '태도의 장벽' }, { id: 'w4', text: '엘리베이터가 잠겨 있다', to: '시설의 장벽' },
      { id: 'w5', text: '가정통신문 글이 어렵다', to: '정보의 장벽' }, { id: 'w6', text: '모둠 역할을 묻지 않고 정한다', to: '태도의 장벽' },
    ];

    ALL.push(
      // ---- 도입 ----
      M('intro.equal-fair', {
        title: '똑같이와 공평하게', method: '똑같이와 공평하게', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 두 그림 설명(받침대 하나씩·필요한 만큼)을 읽고 담장 너머가 보이는 사람 수를 함께 센다.', base: '두 경우를 막대그래프로 견주는 시연을 보고 차이를 말한다.', challenge: '학교 사례 하나(시험 시간·자료 글씨 크기 등)에 \'공평하게\'를 적용해 짝과 말한다.' },
        intro: {
          teacher: '"키가 다른 세 학생이 담장 너머 경기를 보려 해요. 모두에게 받침대를 하나씩 주면 공평할까요?" 그림 설명을 읽고 시연 단추로 \'똑같이\'일 때 2명, \'필요한 만큼\'일 때 3명이 보이는 막대그래프를 보인다. "똑같이 나눠 주는 게 제일 공평하죠"라는 말이 나오면 "그럼 받침대가 필요 없는 사람에게 준 하나는 누구를 위한 걸까요?"라고 되묻는다. 오늘은 학교생활에서 장애 학생의 권리가 \'똑같이\'로 지켜지는지 \'공평하게\'로 지켜지는지 점검한다고 밝힌다.',
          student: '받침대를 똑같이 나눈 경우와 필요한 만큼 나눈 경우, 담장 너머 경기가 보이는 사람이 몇 명인지 그래프로 견주어요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '담장 너머 경기가 보이는 사람(세 명 가운데, 가상 그림)', unit: '명', xLabel: '나누는 방법', yLabel: '보이는 사람', max: 3, data: FAIR, question: '모두가 볼 수 있는 방법은?', choices: FAIR.map((d) => d[0]) }, sequence: [{ pick: 1 }] },
          art: { draw: 'a paper-cut split scene of three students of different heights behind a fence watching a game, on the left each stands on one equal box, on the right the boxes are shared so all three can see', banner: '똑같이? 공평하게?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '그림 비유는 인권교육에서 널리 쓰는 것을 말로 풀었다. 수치(2명·3명)는 그림 속 가상 인원이다.',
      }),
      M('intro.rights-mind', {
        title: '학교생활 권리 지도', method: '학교생활 권리 지도', tool: 'mindmap', minutes: 6,
        levels: { easy: '시연에서 가지 3개(학습·놀이·이동)에 카드가 붙는 것을 보고 함께 읽는다.', base: '가지 5개(학습·놀이·정보·이동·의견 표현)에 예시 카드가 붙는 시연을 보고 가지마다 학교 장면을 하나씩 말한다.', challenge: '가지마다 장벽이 생기는 예(자막 없는 영상·잠긴 엘리베이터 등)를 짝과 하나씩 단다.' },
        intro: {
          teacher: '"학교에서 누구나 누려야 할 것을 다섯 가지로 묶으면 무엇일까요?" 시연 단추로 \'학교에서 누릴 권리\' 가운데에 학습·놀이·정보·이동·의견 표현 가지가 붙고 예시 카드가 놓이는 모습을 보인다. "권리는 어른들이 정하는 거 아니에요?"라는 말이 나오면 "학급회의에서 의견을 내는 것도 권리예요. 그건 누가 지킬 수 있을까요?"라고 되묻는다. 오늘은 이 다섯 가지가 장애 학생에게도 지켜지는지 사례로 점검한다고 밝힌다.',
          student: '"학교에서 누릴 권리" 가운데 학습·놀이·정보·이동·의견 표현 가지를 보고, 가지마다 떠오르는 학교 장면을 하나씩 말해요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '학교에서 누릴 권리', slots: RIGHTS, cards: strip(RCARD) }, sequence: [{ sort: sortOf(RIGHTS, RCARD) }] },
          art: { draw: 'a paper-cut mind map on a school wall with a central paper school building and five branches ending in a book, a ball, a notice sheet, a path and a speech bubble', banner: '학교에서 누릴 권리', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
        },
      }),

      // ---- 활동 ----
      M('activity.case-analysis', {
        title: '현장체험학습 사례 분석', method: '현장체험학습 사례 분석', tool: 'dilemma', minutes: 15,
        levels: { easy: '첫 문항은 서윤의 입장 하나만 고르고 결과를 본다. 둘째·셋째 문항은 한 장면에서 고른다.', base: '첫 문항에서 서윤과 친구, 두 입장을 차례로 골라 끝까지 가고 근거 카드를 고른다.', challenge: '첫 문항에서 서윤·친구·교사 세 입장을 차례로 고르고, 서로 다른 결말 세 개를 견주어 근거까지 고른다.' },
        activity: {
          title: '현장체험학습 사례 분석', tool: 'dilemma',
          teacher: '"\'쉬어도 된다\'는 안내, 서윤을 생각해 준 걸까요, 서윤을 빼놓은 걸까요?" 서윤·친구·교사의 입장을 차례로 골라 결과를 따라가게 하고, 되돌아가 다른 결말과 견주게 한다. "서윤이 쉬겠다고 하면 그걸로 된 거 아니에요?"라는 학생에게 "서윤에게 \'함께 갈 방법\'이라는 선택지가 처음부터 있었나요?"라고 되묻는다. 권리의 관점은 \'누가 빠지는가\'와 \'바꿀 수 있는데 바꾸지 않았는가\'를 묻는 것이라고 짚는다.',
          task: '휠체어를 쓰는 가상 학생 서윤에게 체험학습을 쉬어도 된다고 안내한 사례에서, 서윤·친구·교사의 입장을 차례로 골라 결과를 따라가고 권리의 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '서윤의 입장에서 한 번 골라 결과를 보세요.', base: '서윤과 친구의 입장에서 차례로 골라 끝까지 가고 근거를 고르세요.', challenge: '서윤·친구·교사의 입장에서 차례로 고르고, 다른 결말도 모두 가 본 뒤 근거를 고르세요.' },
              '체험학습 안내', TRIP, [['ask', 'support', 'change'], ['parent']], TRIP_R, ['r1', 'r2'], TRIP_C),
            ONE('같은 사례에서 학교가 처음에 할 수 있었던 행동을 고르세요.', '학교의 첫 행동', { text: '체험학습 장소를 정하는 회의. 이번 학년에 휠체어를 쓰는 학생이 있다.', ask: '학교는 처음에 무엇을 하면 좋았을까?', motif: 'house', choices: [
              { id: 'check', text: '모든 학생이 갈 수 있는 장소인지 먼저 점검한다', result: '계단 없는 후보 장소로 좁혀진다.', impact: [{ who: '서윤', text: '처음부터 함께 간다', tone: 1 }], ending: '처음부터 모두를 기준으로 정했어요.' },
              { id: 'after', text: '장소를 정한 뒤 못 가는 학생에게 쉬라고 한다', result: '한 학생만 빠진다.', impact: [{ who: '서윤', text: '빠진다', tone: -1 }], why: '정한 뒤 빼는 것보다 정하기 전에 모두를 기준으로 점검해요.' },
              { id: 'ask_all', text: '"불편한 사람은 알아서 말하라"고만 공지한다', result: '서윤 혼자 따로 말해야 한다.', impact: [{ who: '서윤', text: '혼자 부담을 진다', tone: -1 }], why: '당사자에게만 부담을 넘기지 말고 학교가 먼저 점검해요.' }] }, ['check']),
            ONE('"모두를 똑같이 대하면 공평하다"는 말을 이 사례에 대어 고르세요.', '똑같이와 공평하게', { text: '학교는 "모든 학생에게 같은 버스, 같은 장소"를 주었으니 공평하다고 말한다.', ask: '이 말은 맞을까?', motif: 'house', choices: [
              { id: 'need', text: '같은 것을 줘도 갈 수 없는 학생이 있으면 공평하지 않다', result: '필요한 만큼의 지원이 있어야 모두 갈 수 있다는 것을 확인한다.', impact: [{ who: '서윤', text: '필요한 지원을 요청할 수 있다', tone: 1 }], ending: '필요한 만큼 지원해야 공평해요.' },
              { id: 'same', text: '똑같이 줬으니 공평하다', result: '서윤은 같은 버스에 오를 수 없다.', impact: [{ who: '서윤', text: '갈 수 없다', tone: -1 }], why: '똑같이 줬어도 쓸 수 없다면 공평하지 않아요.' },
              { id: 'special', text: '서윤만 특별 대우하면 다른 학생이 손해다', result: '승강장치 차량은 다른 학생의 몫을 빼앗지 않는다.', why: '필요한 지원은 특별 대우가 아니라 같은 출발선을 만드는 일이에요.' }] }, ['need'], null, null,
              { conclude: '똑같이 주는 것과 공평한 것은 달라요. 학교는 처음부터 모두를 기준으로 계획하고, 당사자·친구·교사가 함께 권리를 지킬 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '세 입장에서 할 수 있는 일을 정리해요.', columns: ['입장', '할 수 있는 일'], cells: [['서윤(당사자)', ''], ['친구', ''], ['교사·학교', '']], answer: '(예) 함께 갈 방법을 요청 / 학급회의에 안건 내기 / 장소·차량을 함께 바꾸기' }],
          easy: [{ type: 'choice', prompt: '"쉬어도 된다"는 안내의 문제는?', options: ['함께 배울 권리를 빼앗을 수 있다', '아무 문제가 없다'], answer: '함께 배울 권리를 빼앗을 수 있다' }] },
        notes: '사례는 가상이다. 이 파일은 법 이름·조항을 들지 않는다(근거 파일에 없는 법은 쓰지 않음). ' + SAFE_NOTE,
      }),
      M('activity.access-audit', {
        title: '수업 자료 접근성 점검', method: '수업 자료 접근성 점검', tool: 'kitchen', minutes: 15,
        levels: { easy: '첫 문항(영상) 하나는 점검 항목 3개만 보고 설명과 맞는 것을 표시한다.', base: '영상·학습지·발표 자료 세 가지를 설명과 견주어 갖춰진 것만 표시한다.', challenge: '셋째 문항이 고칠 방법 고르기로 바뀌어 부족한 항목마다 알맞은 고칠 방법을 표시한다.' },
        activity: {
          title: '수업 자료 접근성 점검', tool: 'kitchen',
          teacher: '"자막 없는 영상은 누구에게 \'없는 수업\'이 될까요?" 자료 설명을 읽고 점검표에 갖춰진 것만 표시하게 한다. "자막은 귀찮아서 끄잖아요"라는 학생에게 "끌 수 있는 자막과 처음부터 없는 자막, 누구에게 차이가 클까요?"라고 되묻는다. 접근성은 장애 학생만이 아니라 시끄러운 교실·작은 화면·처음 배우는 학생 모두를 돕는다는 점을 짚는다.',
          task: '가상 수업 자료(영상·학습지·발표 자료) 설명을 읽고, 접근성 점검표에서 실제로 갖춰진 것만 표시해 부족한 점을 찾아요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(CL('자료 설명: 과학 영상에 한국어 자막과 소리 조절이 있다. 그림 설명과 글 자료는 없다. 갖춰진 것만 표시하세요.', '영상 점검', VIDEO),
              CL('자료 설명: 과학 영상에 한국어 자막과 소리 조절이 있다. 그림 설명은 없다. 갖춰진 것만 표시하세요.', '영상 점검', pickCards(VIDEO, ['v1', 'v2', 'v3']))),
            IT(CL('자료 설명: 학습지는 작은 글씨로 빽빽하고, 정답 칸을 빨강·초록 색으로만 나눴다. 어려운 낱말 풀이가 있고 화면용 파일이 있다. 갖춰진 것만 표시하세요.', '학습지 점검', SHEET)),
            IT(CL('자료 설명: 발표 자료는 배경과 글자 대비가 뚜렷하고 화면마다 글이 짧다. 그림 설명은 없고 발표자가 화면을 읽어 주지 않는다. 갖춰진 것만 표시하세요.', '발표 자료 점검', SLIDE),
              null,
              CL('찾은 부족한 점을 고칠 방법으로 알맞은 것만 표시하세요.', '고칠 방법', FIX),
              { conclude: '접근 가능한 자료는 자막·큰 글씨·쉬운 글·그림 설명처럼 여러 방법으로 같은 내용에 닿게 해요. 빼 주는 것이 아니라 고치는 것이 답이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '자료마다 부족한 점과 고칠 방법을 써요.', columns: ['자료', '부족한 점', '고칠 방법'], cells: [['영상', '', ''], ['학습지', '', ''], ['발표 자료', '', '']], answer: '(예) 그림 설명 없음 → 말로 설명하는 글 / 작은 글씨·색으로만 구별 → 글씨 키우기·기호 더하기 / 그림 설명 없음 → 설명 글 달기' }],
          easy: [{ type: 'choice', prompt: '자막 없는 영상을 고치는 방법은?', options: ['자막을 넣는다', '그 학생은 영상을 안 봐도 된다고 한다'], answer: '자막을 넣는다' }] },
        notes: '자료는 가상 설명이다. 우리 학교 자료를 예로 쓸 때는 만든 교사를 탓하지 않고 고칠 점만 찾는다.',
      }),
      M('activity.survey-read', {
        title: '참여 경험 설문 자료 해석', method: '참여 경험 설문 자료 해석', tool: 'chart', minutes: 15,
        levels: { easy: '막대 3개(이동·정보·친구)만 있는 그래프에서 값을 보며 가장 큰 장벽을 고른다.', base: '막대 5개를 읽고 가장 큰 장벽과 둘째 장벽의 차이를 쓴 뒤 해결 방향을 고른다.', challenge: '셋째 문항에서 이 자료의 한계(가상·표본·복수 응답)를 짚는 보기를 고른다.' },
        activity: {
          title: '참여 경험 설문 자료 해석', tool: 'chart',
          teacher: '"장애 학생들이 학교 행사에 참여하기 어려웠던 가장 큰 이유는 무엇이었을까요?" 가상 설문 막대그래프를 함께 읽고, 이 자료는 수업용으로 지어낸 것이라고 먼저 밝힌다. "\'친구 없음\'은 그 학생 성격 문제 아니에요?"라는 학생에게 "모둠을 고를 때 아무도 부르지 않았다면, 그건 누구의 문제일까요?"라고 되묻는다. 장벽은 개인이 아니라 학교의 시설·정보·태도에 있다는 점을 짚는다.',
          task: '"학교 행사 참여가 어려웠던 이유"를 나타낸 가상 설문 막대그래프를 읽고, 가장 큰 장벽과 해결 방향을 찾아요.',
          levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            IT(RD('그래프에서 가장 많이 나온 이유를 고르세요.', Object.assign({}, SURV_O, { question: '가장 큰 장벽은?', choices: BARRIER.map((d) => d[0]) }), { pick: 0 }),
              RD('막대 3개 가운데 가장 많이 나온 이유를 고르세요.', Object.assign({}, SURV_O, { data: BARRIER.slice(0, 3), question: '가장 큰 장벽은?', choices: BARRIER.slice(0, 3).map((d) => d[0]) }), { pick: 0 })),
            IT(RD('"이동 길·시설"은 "안내 정보 부족"보다 몇 명 많은지 읽어 쓰세요.', Object.assign({}, SURV_O, { question: '몇 명 많은가요?' }), { value: 12 }),
              RD('"이동 길·시설"은 "안내 정보 부족"보다 몇 명 많은지 읽어 쓰세요.', Object.assign({}, SURV_O, { data: BARRIER.slice(0, 3), question: '몇 명 많은가요?' }), { value: 12 })),
            IT(RD('가장 큰 장벽에 맞는 해결 방향을 고르세요.', Object.assign({}, SURV_O, { question: '알맞은 해결 방향은?', choices: ['행사 장소와 길을 모두 다닐 수 있게 점검한다', '장애 학생은 행사에 빠지게 한다', '비용을 지원한다'] }), { pick: 0 }),
              RD('가장 큰 장벽에 맞는 해결 방향을 고르세요.', Object.assign({}, SURV_O, { data: BARRIER.slice(0, 3), question: '알맞은 해결 방향은?', choices: ['행사 장소와 길을 모두 다닐 수 있게 점검한다', '장애 학생은 행사에 빠지게 한다'] }), { pick: 0 }),
              RD('이 자료만으로 결론을 내릴 때의 한계를 고르세요.', Object.assign({}, SURV_O, { question: '이 자료의 한계는?', choices: ['가상 자료이고, 누구에게 몇 명이 답했는지 모른다', '막대가 다섯 개라서 믿을 수 없다', '한계가 없다'] }), { pick: 0 }),
              { conclude: '참여를 막는 가장 큰 장벽은 학생이 아니라 길·정보·태도에 있어요. 자료를 읽을 때는 누가, 몇 명이 답했는지도 함께 봐요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '가장 큰 장벽과 우리 학교가 할 수 있는 해결 방향을 한 문장으로 써요(가상 자료임을 밝혀요).' }],
          easy: [{ type: 'choice', prompt: '가상 설문에서 가장 큰 장벽은?', options: ['이동 길·시설', '비용'], answer: '이동 길·시설' }] },
        notes: '설문 수치(34·22·18·15·6명)는 수업용 가상 값이다. 학생에게 자기 참여 경험이나 어려움을 적게 하지 않는다. ' + SAFE_NOTE,
      }),
      M('activity.proposal', {
        title: '학생회 제안서 쓰기', method: '학생회 제안서 쓰기', tool: 'rubric-writing', minutes: 15,
        levels: { easy: '셋째 문항에서 문장 틀을 따라 3~4문장 제안서를 쓴다.', base: '셋째 문항에서 5~6문장 제안서를 쓰고 기준표(문제·근거 자료·구체적 방안·당사자 의견 반영)로 점검한다.', challenge: '셋째 문항에서 예상 반대 의견과 답을 더해 쓰고 기준 하나를 더 점검한다.' },
        activity: {
          title: '학생회 제안서 쓰기', tool: 'rubric-writing',
          teacher: '"체육대회를 모두 참여할 수 있게 바꾸려면 학생회에 무엇을 써서 낼까요?" 문제·근거·방안·당사자 의견 네 칸을 차례로 쓰게 한다. "장애 학생에게 물어보는 건 실례 아니에요?"라는 학생에게 "정작 그 행사를 쓸 사람의 생각 없이 만든 방안이 맞는지 어떻게 알까요?"라고 되묻는다. 당사자 의견은 특정 친구를 지목하지 않고 \'설문·의견함\'처럼 모두에게 묻는 방법으로 쓰게 한다.',
          task: '학교 행사 하나를 모두 참여할 수 있게 바꾸는 학생회 제안서를 쓰고, 기준표로 스스로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(RW('첫 부분: 바꿀 행사와 문제를 두 문장으로 쓰세요.', { topic: '모두가 참여하기 어려운 학교 행사 하나(체육대회·축제·체험학습 등)를 골라, 무엇이 문제인지 두 문장으로 쓰세요.', min: 25, max: 160, s: [2, 3], title: '제안서 ① 문제' }, ['바꿀 행사를 밝혔다', '누가 왜 참여하기 어려운지 썼다']),
              RW('틀을 채워 문제를 쓰세요.', { topic: '바꿀 행사와 문제를 쓰세요.', min: 15, max: 120, s: [2, 3], starter: '우리 학교 ___ 은(는) ___ 때문에 모두가 참여하기 어렵습니다.' }, ['바꿀 행사를 밝혔다', '누가 왜 참여하기 어려운지 썼다'])),
            IT(RW('가운데: 근거 자료와 구체적 방안을 두 문장으로 쓰세요.', { topic: '오늘 읽은 가상 설문이나 점검 결과를 근거로 들고, 바꿀 방법을 구체적으로 두 문장으로 쓰세요.', min: 25, max: 180, s: [2, 3], title: '제안서 ② 근거와 방안' }, ['근거 자료를 들었다', '방안이 구체적이다(누가·무엇을)']),
              RW('틀을 채워 근거와 방안을 쓰세요.', { topic: '근거와 방안을 쓰세요.', min: 15, max: 140, s: [2, 3], starter: '설문에서 ___ 이(가) 가장 큰 장벽이었습니다. 그래서 ___ 할 것을 제안합니다.' }, ['근거 자료를 들었다', '방안이 구체적이다(누가·무엇을)'])),
            IT(RW('앞의 내용을 이어 5~6문장 제안서를 완성하세요.', { topic: '앞의 문제·근거·방안에 당사자 의견을 듣는 방법을 더해 학생회 제안서를 5~6문장으로 완성하세요.', min: 80, max: 400, s: [5, 6], title: '학생회 제안서' }, ['문제를 밝혔다', '근거 자료를 들었다', '구체적 방안을 썼다', '당사자 의견을 듣는 방법을 넣었다'], [['의견', '설문', '묻']]),
              RW('틀을 따라 3~4문장 제안서를 완성하세요.', { topic: '학생회 제안서를 3~4문장으로 완성하세요.', min: 40, max: 260, s: [3, 4], starter: '우리 학교 ___ 은(는) ___ 때문에 참여하기 어렵습니다. 그래서 ___ 을(를) 제안합니다. 방안은 ___ 에게 의견을 물어 정하겠습니다.' }, ['문제를 밝혔다', '구체적 방안을 썼다', '당사자 의견을 듣는 방법을 넣었다'], [['의견', '설문', '묻']]),
              RW('예상 반대 의견과 답을 더해 제안서를 완성하세요.', { topic: '학생회 제안서에 예상되는 반대 의견(비용·시간 등) 하나와 그에 대한 답을 더해 6문장 안팎으로 완성하세요.', min: 90, max: 440, s: [5, 6], title: '반대 의견까지 담은 제안서' }, ['문제를 밝혔다', '근거 자료를 들었다', '구체적 방안을 썼다', '당사자 의견을 듣는 방법을 넣었다', '반대 의견에 답했다'], [['의견', '설문', '묻']]),
              { conclude: '좋은 제안서는 문제·근거·구체적 방안에 당사자의 목소리를 담아요. 권리를 지키는 일은 학생도 할 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '모둠 제안서를 바꿔 읽고 들어 있는 것에 표시해요.', options: ['문제', '근거 자료', '구체적 방안', '당사자 의견 반영'] }] },
        notes: '제안서에 특정 학생 이름이나 장애 여부를 쓰지 않게 한다. 당사자 의견은 모두에게 묻는 방법(설문·의견함)으로 쓴다. ' + SAFE_NOTE,
      }),

      // ---- 정리 ----
      M('wrap.rights-pledge', {
        title: '권리 지키기 다짐 띠', method: '권리 지키기 다짐 띠', tool: 'collage', minutes: 7,
        levels: { easy: '조각 2개 이상으로 다짐 띠 한 칸을 꾸민다(다짐 문구는 활동지).', base: '조각 4개 이상으로 꾸미고 다짐 문구를 활동지에 쓴다.', challenge: '다짐을 확인할 방법(언제·누가 점검)을 활동지에 덧붙이고 점검한다.' },
        wrap: {
          teacher: '"오늘 점검한 권리 다섯 가지 가운데 우리 반이 지킬 다짐은 무엇일까요?" 학생마다 다짐 띠 한 칸을 조각으로 꾸미고, 다짐 문구는 활동지에 써서 띠에 붙인다(교구에는 글자를 넣을 수 없다). "다짐은 써 놓고 잊어버려요"라는 학생에게 "그럼 언제, 누가 다짐을 지켰는지 확인하면 좋을까요?"라고 되묻는다. 다짐 띠에는 이름을 쓰지 않는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'collage', options: { maxPieces: 10, guide: 'horizontal' }, prompt: '다짐 띠 한 칸을 조각으로 꾸미고 점검해요(다짐 문구는 활동지에 써요).', target: { selfCheck: ['다짐 문구 자리를 비워 두었다', '권리 하나를 떠올리게 하는 조각을 넣었다', '다짐 문구를 활동지에 썼다'], minPieces: 4 }, difficulty: 0.2 },
              { prompt: '조각 2개 이상으로 다짐 띠 한 칸을 꾸미고 점검해요.', target: { selfCheck: ['다짐 문구 자리를 비워 두었다', '다짐 문구를 활동지에 썼다'], minPieces: 2 } },
              { prompt: '다짐 띠를 꾸미고, 다짐을 확인할 방법까지 활동지에 쓴 뒤 점검해요.', target: { selfCheck: ['다짐 문구 자리를 비워 두었다', '권리 하나를 떠올리게 하는 조각을 넣었다', '다짐 문구를 활동지에 썼다', '확인할 방법(언제·누가)을 썼다'], minPieces: 4 } }),
            { type: 'choice', prompt: '권리를 지키는 다짐으로 가장 알맞은 것은?', options: ['행사를 정할 때 모두 참여할 수 있는지 먼저 묻는다', '불편한 친구는 쉬게 해 준다', '권리는 어른들이 알아서 지킨다'], answer: 0, difficulty: 0.2, explain: '처음부터 모두를 기준으로 묻는 것이 권리를 지키는 다짐이에요.' },
          ],
        },
        worksheet: {
          title: '권리 지키기 다짐',
          items: [
            { type: 'short', prompt: '다짐 띠에 붙일 우리 반 다짐 문구를 한 줄로 써요.' },
            { type: 'short', prompt: '다짐을 지켰는지 확인할 방법(언제·누가)을 써요.' },
          ],
        },
        notes: '교구는 글자를 넣지 못해 띠 바탕만 꾸미고 다짐 문구는 활동지에 써서 붙인다.',
      }),
      M('wrap.reflection', {
        title: '한 줄 성찰 나누기', method: '한 줄 성찰 나누기', tool: 'wordcards', minutes: 7,
        levels: { easy: '장벽 카드 3장을 시설·정보·태도 칸에 나눈다.', base: '장벽 카드 6장을 세 칸에 나누고, 모둠 카드의 공통점을 고른다.', challenge: '셋째 질문에서 모둠 카드의 공통점을 제목 한 줄로 정해 쓴다.' },
        wrap: {
          teacher: '"오늘 새로 보인 장벽을 시설·정보·태도로 나누면 어디에 가장 많이 모일까요?" 카드를 나눈 뒤 모둠이 쓴 성찰 카드를 모아 공통점을 고르게 한다. "태도는 장벽이 아니라 마음 문제 아니에요?"라는 학생에게 "\'쉬어도 돼\'라는 말 때문에 서윤이 체험학습에 못 갔다면, 그 말도 길을 막은 걸까요?"라고 되묻는다.',
          exitTicket: [
            IT(X('wordcards', SB('오늘 새로 보인 장벽 카드를 세 칸에 나누어요.', WALL, SEEN)),
              SB('장벽 카드 3장을 세 칸에 나누어요.', WALL, pickCards(SEEN, ['w1', 'w2', 'w3'])), null, { difficulty: 0.2 }),
            { type: 'choice', prompt: '오늘 찾은 장벽들의 공통점으로 가장 알맞은 것은?', options: ['장벽은 장애가 아니라 학교의 시설·정보·태도에 있다', '장벽은 장애 학생이 스스로 넘어야 한다', '장벽은 돈이 있어야만 없앨 수 있다'], answer: 0, difficulty: 0.2, explain: '길을 막는 것은 사람의 몸이 아니라 바꿀 수 있는 환경과 태도예요.' },
            { type: 'short', prompt: '모둠 성찰 카드의 공통점을 제목 한 줄로 정해 써요.' },
          ],
        },
        worksheet: {
          title: '오늘 새로 보인 장벽',
          items: [
            { type: 'short', prompt: '"오늘 새로 보인 장벽" 카드를 한 줄로 써요.' },
            { type: 'table', prompt: '모둠 카드를 세 칸으로 모아 써요.', columns: ['시설', '정보', '태도'], cells: [['', '', '']], answer: '(예) 계단만 있는 장소 / 자막 없는 영상 / 묻지 않고 빼 주는 말' },
          ],
        },
      }),
    );
  }

  PaperLessons.registerModules(ALL);
})();
