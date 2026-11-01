/* 법정교육 양성평등·성교육 — 초3-4 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/mandatory.json 의 gender 초3-4.
 * 근거: 교육기본법 제17조의2, 양성평등기본법, 성폭력방지법 제5조, 가정폭력방지법 제4조의3, 학교보건법 제9조 — 교육부 지침 연 15시간
 *   (research-mandatory §1), 초등 주제(몸의 변화와 사춘기·성별 고정관념 깨기·몸의 경계와 '싫어요' 말하기·성폭력 신고 방법 — §2),
 *   교육부 「학교 성교육 표준안」 초등 범위. 근거 파일은 주제 이름뿐이라 세부 문장은 아래 '사람 확인' 목록에 모았다.
 * 초3-4 기준: 상황 판단(그림+짧은 글), 차례 정하기, 고른 이유 말하기, 짝 토의, 간단한 표·그림그래프. 법 조문·통계 해석·긴 글쓰기는 쓰지 않는다.
 * 이 영역은 발행 전 사람이 직접 보는 민감 영역이다. 이 파일의 틀(모든 모듈):
 *   - 낱말: 몸·생식 낱말은 체계도 concepts 에 있는 것만 화면에 쓴다(생식기·정자·난자·자궁·탄생·사춘기·땀·피지·속옷). 계획 글에 있던
 *     세부 이름(음경·음순·월경·몽정)과 별명 낱말은 화면에 쓰지 않고, 필요하면 교사가 표준안 그림 자료로 말하게 notes 에 적었다.
 *   - 성적 행위를 묘사하지 않는다. 생명 탄생은 "정자와 난자가 만나요 → 자궁에서 자라요 → 태어나요"까지(그림책 수준).
 *   - 피해 경험을 묻지 않는다. 장면은 모두 가명(두 글자)의 가상 인물 이야기이고, 무슨 일이 있었는지는 쓰지 않는다.
 *   - 동의는 '분명한 "좋아"'만 동의다(망설임·침묵·어제의 좋아는 동의 아님). 잘못은 늘 그 일을 한 한 사람에게 있고, 말한 어린이는 잘한 것이다.
 *     참는 길·비밀 지키는 길을 고른 학생도 나무라지 않는다(교사 발문).
 *   - 성별 고정관념을 정답으로 만들지 않는다: 돌봄·집안일·꿈·옷·색은 "누구나". 사춘기 몸 변화(공통·여자·남자)만 생물학 사실로 나눈다.
 *   - 가족 형태를 하나로 가정하지 않는다: 가상 가족은 삼촌·할머니·누나·하루(3학년), 고모·할아버지·형·하린(4학년)처럼 여러 모습으로 두고
 *     "엄마·아빠"를 기본으로 쓰지 않았다(안내문 갈림길은 '보호자'를 정답으로). 학생 집의 가족·돌봄·사정을 묻지 않는다.
 *   - 도움 받을 곳은 체계도 concepts 의 것만: 믿는 어른(담임·보건·상담 선생님·보호자·미리 정한 이웃 어른)·안전한 곳(학교·지구대 등).
 *     체계도 concepts 에 신고·상담 전화번호가 없어 번호는 화면에 쓰지 않고 '[학교가 확인해 넣는 신고·상담 번호]' 자리(HELPNO)로 두었다.
 * 주제 16개(3학년 8 · 4학년 8) × 도입 2 · 활동 3 · 정리 2 = 계획 모듈 112개.
 * 체계도 계획대로 못 한 것(교구 한계 — levels 글은 실제 설정대로 적었다):
 *   - body 교구에 손·얼굴·겨드랑이·발·머리·키 칸이 없다: not-your-fault.intro.signal-body(가슴·배·목), puberty-changes.intro.grow-body
 *     (목·가슴·피부·어깨, 키·털은 말로), puberty-hygiene.intro.sweat-where(목·발목·피부 + 학생이 자기 몸 가리키기), sv-many-forms.intro.feel-signals
 *     (얼굴 화끈 → 피부)로 바꿨다. same-body-quiz 의 '문항 3·5개'는 교사가 겹을 벗기며 묻는 말 물음으로 했다(도입은 채점 문항이 없다).
 *   - boundary-size.intro.circles: 칸 지도에 둥근 겹이 없어 7×7 칸에서 가운데로부터 1·2·3칸 떨어진 네모 겹으로 했다.
 *   - collage 정리·활동(포스터·배지·카드·쿠폰·광고·옷차림): 색종이 판에 글자를 붙일 수 없어 글(약속·문구·번호)은 판 아래 종이에 쓰게 했고,
 *     '조각 n개'는 minPieces 와 점검 칸 수로, '겹 n개'는 동그라미 조각 수로 바꿨다.
 *   - keyboard 구호: 판이 낱말을 보이지 않아 리듬만 친다(구호는 교사가 함께 외침). '짝과 주고받기'는 교사 진행, '내 꿈·가사 바꿔 치기'는
 *     박 맞추기 짓기(target beats)로 했다. 정리 질문은 단계별 판이 없어 출구 문항의 단계별 판(앞 구절/전체/도전)으로만 나뉜다.
 *   - pattern 정리: consent-rule 의 '틀린 조각 고치기'는 틀린 조각 찾기(odd)로, fair-pattern·care-pattern 의 '새 규칙'은 만들기(make)로 했다.
 *   - dilemma 쉬움은 늘 갈림 1번이다: 계획의 '쉬움 갈림 2번'(consent-path·bystander-path·dv friend-path)은 쉬움 1번 · 기본 3번(첫 장면)으로 했다.
 *     '상황 2개/3개'(boundary-size·four-boundaries)는 문항 수가 단계마다 같아 장면 3개 모두 두고 쉬움은 보기 2개 한 번 고르기로 했다.
 *   - 카드 장 수는 문항 수가 단계마다 같아 '쉬움 n장'을 문항마다의 카드 수로 맞췄다. life-begins.wrap.precious-why 의 '까닭마다 행동 잇기'는
 *     둘째 출구 문항(잇기)으로, roles-in-media.act.strength-map 의 '나' 가지(내 흥미)는 채점할 수 없어 꿈을 정하는 까닭 나누기·흥미-직업 잇기·
 *     가상 친구 꿈 고르기로 바꾸고 내 흥미는 활동지 쓰기로 했다.
 *   - change-sort: 월경·몽정 카드는 concepts 밖 낱말이라 넣지 않았다(아래 사람 확인).
 * 사람 확인: 근거 파일에는 주제 이름뿐이라 아래 문장은 일반 지식으로 썼다. 확인처는 괄호 안
 *   (교육부 학교 성교육 표준안·보건 교과 지도서, 여성가족부·한국양성평등교육진흥원 성인지·성폭력 예방 교육자료, 교육부 가정폭력 예방교육 자료,
 *    학교 아동학대·성폭력 사안 처리 절차).
 *   - bodies-same-diff.*: "남녀 몸은 같은 점이 훨씬 많고 다른 곳은 생식기"라는 짜임, 센 몸 부분 목록(10개 중 9 같음)은 교사용 목록이다 /
 *     생식기 세부 이름은 표준안 그림으로 교사가 말함(화면 없음) (교육부 학교 성교육 표준안 초3-4)
 *   - life-begins.*: 생명 시작 차례(정자·난자 만남 → 자궁 속 자람 → 탄생 → 가족 돌봄), "배 속에서 자랄 때부터 심장이 뛰어요" /
 *     grow-chart 크기 칸 수는 연습용 가상 값(화면 '연습용 가상 자료') / "엄마가 쉬게 돕기" 문구가 가족 형태 원칙에 맞는지 (표준안 초3 생명 탄생)
 *   - boundary-size.*·clear-yes.*: 경계·동의 정의("분명한 좋아만 동의", "어제의 좋아도 다시 묻기", "더 넓은 거리가 필요한 쪽에 맞추기") /
 *     편한 걸음 수 그래프는 가상 (표준안 초 경계·동의 단원, 한국양성평등교육진흥원)
 *   - not-your-fault.*·sv-many-forms.*: 성폭력 짧은 정의("원치 않는 성적인 말·보여 주기·찍기·엿보기도 성폭력일 수 있다") / 대처 차례
 *     ("싫어요·그만해" → 피하기 → 믿는 어른께 알리기 → 사진 지우기 도움) / 거절 동작 차례(몸 세우기·눈 보기·손바닥 펴기·크게 말하기) /
 *     "옷차림·아는 사람" 오개념 바로잡기 문장 / 털어놓은 친구에게 할 말("말해 줘서 고마워, 네 잘못이 아니야, 같이 가자") (여성가족부·표준안)
 *   - scary-at-home.*·dv-many-forms.*: 가정폭력의 네 모습(몸·심한 욕·겁주기·돌보지 않기)과 '괜찮아요' 카드 경계(타이르기·위험할 때 팔 잡아끌기) /
 *     "어린이는 끼어들지 않고 피해서 알린다" / "알리는 것은 가족을 돕는 일" / 도움 번호로 알릴 때 차례(어른과 함께 → 있는 곳 → 안내 듣기) /
 *     주민센터를 도움 받을 곳으로 둔 것과 그 역할 문구 / 지구대 = 밤에도 도움 (교육부·여성가족부 가정폭력 예방교육 자료, 경찰청)
 *   - 모든 HELPNO 자리: 학교가 확인한 신고·상담 번호를 교사가 채운다(체계도 concepts 에 번호가 없어 화면에 번호를 쓰지 않았다).
 *   - puberty-changes.*: 공통(키·여드름·땀 냄새·겨드랑이 털·몸무게·피지)·여자(가슴·골반)·남자(어깨·목소리 굵어짐) 나눔 / 월경·몽정을 이 학년에서
 *     화면에 넣을지 / 시작 나이 그래프는 가상(9~13살) (보건 교과 지도서·표준안 초4 사춘기)
 *   - puberty-hygiene.*: 땀이 많이 나는 곳, 냄새 까닭(땀·피지·세균·옷), 샤워 차례(위에서 아래로), "날마다 씻기·속옷·양말 갈기", "여드름은 씻어도
 *     다 없어지지 않는다" / 단계마다 2분·물건 값은 연습용 '우리 반 약속'·연습용 값 (질병관리청·보건 교과 지도서)
 *   - puberty-mind.*: 사춘기 마음 변화, 다스리기 차례(멈추기 → 숨 고르기 → 말하기), 숨 고르기 5초·5초·3번은 '우리 반 약속' 연습값,
 *     기분 꺾은선은 가상 (교육부 학생 정서·행동 지원 안내)
 *   - four-boundaries.*: 경계 네 가지(몸·물건·마음·정보)와 예시 나눔(일기 읽기 = 정보), 사진 예절 차례(찍기 전·올리기 전 묻기 → 싫으면 지우기),
 *     "누가 다칠 수 있는 비밀은 어른께" 예외 / 설문 그래프는 가상 (표준안·방송통신위원회 디지털 시민 교육자료)
 *   - roles-in-media.*·answer-stereotypes.*·care-for-all.*·fair-chores-family.*: 고정관념 장면·대답 문장, 직업 카드(수의사·요리사·건축가·간호사·
 *     만화가 등) 예시, 광고 세기·집안일·돌봄 시간 그래프는 가상, "어린이는 약을 혼자 고르지 않는다" (한국양성평등교육진흥원·여성가족부)
 */
(function () {
  const BASE = { schema: 'edu-module.v1', domain: 'gender', band: '초3-4' };
  const T = (topic, grade) => (o) => Object.assign({}, BASE, { topic: `gender.e34.${topic}`, grades: [grade] }, o);
  const M = [];
  const strip = (p) => String(p).replace(/[.?!]$/, '');
  const idOf = (c) => (typeof c === 'string' ? c : c.id);
  const mix = (groups) => { const out = []; const n = Math.max(...groups.map((g) => g.length)); for (let i = 0; i < n; i++) for (const g of groups) if (g[i] != null) out.push(g[i]); return out; };
  const count = (groups) => groups.reduce((a, g) => a + g.length, 0);
  const slotId = (s) => (typeof s === 'string' ? s : s.id);
  const sortT = (slots, groups) => ({ sort: Object.fromEntries(slots.map((s, i) => [slotId(s), groups[i].map(idOf)])) });
  const plain = (list) => list.map((x) => ({ id: x.id, text: x.text }));

  // 나누기(mindmap·emotion sort): 기본 = groups, 쉬움 = 칸마다 앞에서 ne장, 도전 = 칸마다 hard 카드를 더함
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

  // 나누기(sortboard 글 카드 모드): 쉬움 = ez 칸(번호)마다 앞 n장, 도전 = 칸마다 hard 카드를 more 로 더한다
  const BOX = (prompt, slots, groups, ez, hard, d, more) => {
    const tg = (sl, gs) => ({ sort: Object.fromEntries(sl.map((s, i) => [s, gs[i]])) });
    const eSlots = ez.map(([i]) => slots[i]); const eGroups = ez.map(([i, n]) => groups[i].slice(0, n));
    const hGroups = groups.map((g, i) => g.concat(hard[i] || []));
    const p = strip(prompt);
    return {
      prompt, toolOptions: { slots, cards: mix(groups) }, target: tg(slots, groups), difficulty: d,
      levels: {
        easy: { prompt: `${p}(${count(eGroups)}장).`, toolOptions: { slots: eSlots, cards: mix(eGroups) }, target: tg(eSlots, eGroups) },
        challenge: { prompt: `${p}(${count(hGroups)}장).`, toolOptions: { more: mix(hard.map((h) => h || [])) }, target: tg(slots, hGroups) },
      },
      ...more,
    };
  };
  const BOXLV = { easy: { instant: true, showCount: true }, base: {}, challenge: { shuffle: true } };

  // 차례 놓기(story·lifecycle order): 기본 = 카드 전부, 쉬움 = keep 번째 카드들만, 도전 = 틀린 카드(trap) 한 장이 섞인다
  const NAMES = { 2: ['먼저', '다음'], 3: ['처음', '다음', '끝'], 4: ['처음', '다음', '그다음', '끝'] };
  const shuffled = (list) => list.slice(1).concat(list[0]).reverse();
  const ORD = (prompt, base, steps, keep, trap, d, more, noNames) => {
    const ids = steps.map((c) => c.id);
    const easy = keep.map((i) => steps[i]);
    const p = strip(prompt);
    const sl = (n) => (noNames ? n : NAMES[n]);
    return {
      prompt, toolOptions: Object.assign({}, base, { mode: 'order', slots: sl(steps.length), cards: shuffled(steps) }), target: { order: ids }, difficulty: d,
      levels: {
        easy: { prompt: `${p}(${easy.length}장).`, toolOptions: { slots: sl(easy.length), cards: shuffled(easy) }, target: { order: easy.map((c) => c.id) } },
        challenge: { prompt: `${p}. 틀린 카드 한 장은 빼요.`, toolOptions: { cards: shuffled(steps).concat(trap) }, target: { order: ids } },
      },
      ...more,
    };
  };

  // 갈림길(dilemma): 기본 = 장면 둘(보기 3개), 쉬움 = 첫 장면만(바른 보기 + 첫 틀린 보기), 도전 = 끝에서 근거 카드 고르기
  // good: 받는 길 목록(첫 길의 첫 선택이 쉬움 단계의 바른 보기). 바른 첫 보기에는 쉬움 단계 끝 글(ending)을 적는다.
  const easySceneOf = (scene, g0) => Object.assign({}, scene, {
    choices: scene.choices.filter((c) => c.id === g0 || c.id === scene.choices.find((x) => x.id !== g0).id)
      .map((c) => (c.id === g0 ? { id: c.id, text: c.text, result: c.result, impact: c.impact, ending: c.ending } : c)),
  });
  const DIL = (prompt, scene, good, reasons, okReasons, d, more) => {
    const g0 = good[0][0];
    return {
      prompt, toolOptions: { scene }, target: { path: good }, difficulty: d,
      levels: {
        easy: { prompt: `${strip(prompt)}(한 번 골라요).`, toolOptions: { scene: easySceneOf(scene, g0) }, target: { path: [[g0]] } },
        challenge: { prompt: `${strip(prompt)}. 끝에서 근거도 골라요.`, toolOptions: { reasons }, target: { path: good, reasons: okReasons } },
      },
      ...more,
    };
  };

  // 해야 할 것만 표시하는 점검표(kitchen checklist): 쉬움 = easyIdx 번째 항목만, 도전 = 함정 항목(traps)을 더함
  const okOf = (list) => list.filter((x) => x.ok).map((x) => x.id);
  const CHK = (prompt, title, items, easyIdx, traps, d, more) => {
    const easy = easyIdx.map((i) => items[i]);
    const hard = items.concat(traps || []);
    const lv = { easy: { prompt: `${strip(prompt)}(${easy.length}칸).`, toolOptions: { items: plain(easy) }, target: { checklist: okOf(easy) } } };
    if (traps && traps.length) lv.challenge = { prompt: `${strip(prompt)}(${hard.length}칸).`, toolOptions: { items: plain(hard) }, target: { checklist: okOf(hard) } };
    return { prompt, toolOptions: { mode: 'checklist', title, items: plain(items) }, target: { checklist: okOf(items) }, difficulty: d, levels: lv, ...more };
  };

  // 짝 잇기(mindmap·lifecycle·emotion match): rows = [[칸 글, 카드 글], …] 기본 전부, 쉬움 앞 2줄, 도전 = 함정 카드 한 장 더
  const MATCH = (prompt, base, rows, trap, d, more) => {
    const slots = rows.map((r, i) => ({ id: `r${i + 1}`, label: r[0] }));
    const cards = rows.map((r) => r[1]);
    const tg = (n) => ({ match: Object.fromEntries(rows.slice(0, n).map((r, i) => [`r${i + 1}`, r[1]])) });
    return {
      prompt, toolOptions: Object.assign({}, base, { mode: 'match', slots, cards: cards.slice().reverse() }), target: tg(rows.length), difficulty: d,
      levels: {
        easy: { prompt: `${strip(prompt)}(2줄).`, toolOptions: { slots: slots.slice(0, 2), cards: cards.slice(0, 2).reverse() }, target: tg(2) },
        challenge: { prompt: `${strip(prompt)}. 남는 카드가 하나 있어요.`, toolOptions: { cards: [cards[1], trap, cards[0]].concat(cards.slice(2)) }, target: tg(rows.length) },
      },
      ...more,
    };
  };

  // 바구니에 고르기(emotion·mindmap·story pick): cards = [{ id, text, ok? }], 쉬움 = easyIds 카드만, 도전 = hard 카드를 더함
  const PICK = (prompt, base, cards, easyIds, hard, d, more) => {
    const ok = (list) => list.filter((c) => c.ok).map((c) => c.id);
    const easy = cards.filter((c) => easyIds.includes(c.id));
    const all = cards.concat(hard || []);
    const lv = { easy: { prompt: `${strip(prompt)}(${easy.length}장).`, toolOptions: { cards: plain(easy) }, target: { pick: ok(easy) } } };
    if (hard && hard.length) lv.challenge = { prompt: `${strip(prompt)}(${all.length}장).`, toolOptions: { cards: plain(all) }, target: { pick: ok(all) } };
    return { prompt, toolOptions: Object.assign({ mode: 'pick' }, base, { cards: plain(cards) }), target: { pick: ok(cards) }, difficulty: d, levels: lv, ...more };
  };

  // 말풍선 채우기(story fill): rows = [[말풍선 글(___ 빈칸), 정답 카드], …], wrong = 함정 카드.
  // 쉬움 = 앞 nE칸, 기본 = 앞 nB칸, 도전 = 전부(함정 카드도 늘어난다)
  const FILL = (prompt, who, rows, wrong, d, more, nE, nB) => {
    const slots = rows.map((r, i) => ({ id: `b${i + 1}`, who: Array.isArray(who) ? who[i] : who, label: r[0] }));
    const tg = (k) => ({ fill: Object.fromEntries(rows.slice(0, k).map((r, i) => [`b${i + 1}`, r[1]])) });
    const cardsOf = (k) => rows.slice(0, k).map((r) => r[1]).concat(wrong.slice(0, Math.max(1, k - 1))).reverse();
    const p = strip(prompt);
    const e = nE || 1; const n = nB || Math.min(2, rows.length);
    return {
      prompt, toolOptions: { mode: 'fill', slots: slots.slice(0, n), cards: cardsOf(n) }, target: tg(n), difficulty: d,
      levels: {
        easy: { prompt: `${p}(${e}칸).`, toolOptions: { slots: slots.slice(0, e), cards: cardsOf(e) }, target: tg(e) },
        challenge: { prompt: `${p}(${rows.length}칸).`, toolOptions: { slots, cards: cardsOf(rows.length) }, target: tg(rows.length) },
      },
      ...more,
    };
  };

  // 칸 지도 핀: 쉬움 = 핀 자리 이름이 바로 보임(readout은 activity.levels), 도전 = '왜 여기일까' 보기 고르기를 함께 한다(ask)
  const PIN = (map, prompt, region, why, d, more) => ({
    prompt, toolOptions: map, target: { region }, difficulty: d,
    levels: { challenge: { prompt: `${strip(prompt)}. 까닭도 골라요.`, toolOptions: { ask: { q: why.q, choices: why.choices } }, target: { region, pick: why.answer } } },
    ...more,
  });

  // 갈림 상황 하나(emotion branch): 쉬움 = 보기 2개(바른 것 + 첫 틀린 것), 기본 = 보기 3개, 도전 = 결과를 맞힌 뒤에만 보임
  const BR = (prompt, situation, choices, good, d, more) => {
    const two = choices.filter((c) => c.id === good || c.id === choices.find((x) => x.id !== good).id);
    return {
      prompt, toolOptions: { mode: 'branch', situation, choices }, target: { choice: good }, difficulty: d,
      levels: { easy: { toolOptions: { choices: two } }, challenge: { toolOptions: { revealAfterCheck: true } } },
      ...more,
    };
  };

  // 스스로 점검(timer selfCheck) 출구 질문: 쉬움 앞 eN칸(기본 2), 기본 앞 bN칸(기본 3), 도전 cN칸(기본 4)
  const SELF = (title, checks, prompt, bN, eN, cN) => ({
    type: 'tool', tool: 'timer', options: { title }, prompt: prompt || '오늘 한 것에 스스로 표시해요.', target: { selfCheck: checks.slice(0, bN || 3) }, difficulty: 0.1,
    levels: { easy: { target: { selfCheck: checks.slice(0, eN || 2) } }, challenge: { target: { selfCheck: checks.slice(0, cN || 4) } } },
  });
  // 색종이 작품(collage) 출구 질문: 쉬움 = 조각 nE개 이상·점검 2칸, 기본 = nB개·점검 3칸, 도전 = nC개·점검 4칸
  const COL = (prompt, checks, nE, nB, nC, opts) => ({
    type: 'tool', tool: 'collage', options: Object.assign({ maxPieces: 14 }, opts || {}), prompt, target: { selfCheck: checks.slice(0, 3), minPieces: nB }, difficulty: 0.1,
    levels: { easy: { target: { selfCheck: checks.slice(0, 2), minPieces: nE } }, challenge: { target: { selfCheck: checks.slice(0, 4), minPieces: nC } } },
  });
  // 구호 리듬(keyboard rhythm) 출구 질문: m1·m2 = 앞·뒤 구절(한 마디 4박). 쉬움 = 앞 구절만(박 수 보임), 기본 = 구호 전체,
  // 도전 = chal 이 있으면 그 판(예: 내 리듬 짓기), 없으면 박 수를 숨기고 친다
  const RHY = (prompt, m1, m2, chal) => ({
    type: 'tool', tool: 'keyboard', prompt, options: { mode: 'rhythm', meter: 4, measures: 2, blocks: ['q', 'e', 'h', 'qr'] }, target: { rhythm: m1.concat(m2) }, difficulty: 0.15,
    levels: {
      easy: { prompt: `${strip(prompt)}(앞 구절).`, toolOptions: { measures: 1, showBeats: true }, target: { rhythm: m1 } },
      challenge: chal || { toolOptions: { revealAfterCheck: true } },
    },
  });
  // 되풀이 규칙(pattern) 출구 질문: 쉬움 = 빈칸 1개 줄, 기본 = 빈칸 2개 줄, 도전 = 규칙에 맞지 않는 조각 찾기(odd)
  const PATQ = (prompt, easy, base, odd) => ({
    type: 'tool', tool: 'pattern', prompt, options: { mode: 'fill', seq: base.seq }, target: { fill: base.fill }, difficulty: 0.15,
    levels: {
      easy: { prompt: `${strip(prompt)}(빈칸 1개).`, toolOptions: { seq: easy.seq }, target: { fill: easy.fill } },
      challenge: { prompt: odd.prompt, toolOptions: { mode: 'odd', seq: odd.seq, question: odd.question }, target: { odd: odd.at } },
    },
  });
  // 활동 문항 모양 → 출구 교구 질문 모양
  const EX = (tool, it) => ({ type: 'tool', tool, prompt: it.prompt, options: it.toolOptions, target: it.target, difficulty: it.difficulty, levels: it.levels });
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  const PEOPLE = [{ value: 5, name: '5명' }, { value: 1, name: '1명' }];
  // 학교가 확인해 넣는 신고·상담 번호 — 체계도 concepts 에 번호가 없어 화면에는 빈칸 이름만 쓴다
  const HELPNO = '[학교가 확인해 넣는 신고·상담 번호]';

  // ======================================================================================================
  // 3학년 · 남녀 몸의 같은 점과 다른 점 (교육부 학교 성교육 표준안 초 — 몸의 바른 이름)
  // ======================================================================================================
  {
    const C = T('bodies-same-diff', 3);
    const PARTS = { type: 'picture', unit: '개', xLabel: '몸 부분', yLabel: '부분 수', icons: [{ value: 5, name: '5개' }, { value: 1, name: '1개' }], icon: 'circle' };
    const D4 = [['남녀 모두 있음', 3], ['남녀 다름', 1]];
    const D6 = [['남녀 모두 있음', 5], ['남녀 다름', 1]];
    const D10 = [['남녀 모두 있음', 9], ['남녀 다름', 1]];
    const CH = (title, data, extra) => Object.assign({}, PARTS, { title }, extra, { data });
    M.push(
      C({
        id: 'gender.e34.bodies-same-diff.intro.same-body-quiz', type: 'intro', title: '몸 속을 보면 누구나 같아요',
        method: '몸 기관 같은 점 찾기', tool: 'body', minutes: 6,
        levels: { easy: '교사가 겹을 하나씩 벗길 때마다 "누구에게나 있나요?" 물음 3개(근육·뼈·심장)에 손을 든다.', base: '물음 5개(피부·근육·뼈·심장·폐)에 손을 들어 답한다.', challenge: '같은 기관이 하는 일(심장은 피를 돌려요·폐는 숨을 쉬어요)까지 말로 고른다(교사 진행).' },
        intro: {
          teacher: '"뼈는 남자에게만 있을까요, 여자에게만 있을까요?" 시연 단추로 종이 몸의 피부·근육·뼈 겹을 하나씩 벗기며 "이것도 누구에게나 있나요?"라고 묻고 손을 들게 한다. "남자와 여자는 몸이 다 달라요"라는 말이 나오면 "심장·폐·뼈를 볼까요? 누구 몸에나 있지요? 다른 곳은 아주 조금이에요"라고 되묻는다. 남녀 몸은 같은 점이 훨씬 많고, 생식기처럼 다른 곳도 있다는 것을 오늘 알아본다고 밝힌다.',
          student: '종이 몸의 겹을 벗기며 누구에게나 있는 것을 찾아요. 손을 들어 답해요.',
          demo: { tool: 'body', options: { mode: 'layers' }, sequence: [{ peeled: 1 }, { peeled: 2 }, { peeled: 3 }] },
          art: { draw: 'two friendly paper body outlines of children side by side, each with the same paper layers of muscles, bones and a small red heart showing through, a dotted line linking the matching hearts', banner: '누구에게나 있어요', extra: [{ motif: 'flower', x: 300, y: 96, color: 'rose' }] },
        },
        notes: '그림은 피부·근육·뼈·기관 겹만 보인다. 학생의 몸을 짚게 하거나 서로 비교하게 하지 않는다.',
      }),
      C({
        id: 'gender.e34.bodies-same-diff.intro.guess-why', type: 'intro', title: '왜 바른 이름으로 부를까',
        method: '"왜 바른 이름으로 부를까" 생각 모으기', tool: 'mindmap', minutes: 6,
        levels: { easy: '생각 카드 4장 가운데 까닭 2장을 함께 고른다.', base: '카드 6장 가운데 까닭 4장을 고른다.', challenge: '까닭 카드 하나에 어울리는 상황(아파서 보건실에 갈 때 등)을 짝에게 말한다(교사 진행).' },
        intro: {
          teacher: '"우리 몸의 모든 곳에는 바른 이름이 있어요. 왜 바른 이름으로 불러야 할까요?" 시연 단추로 까닭 카드가 바구니에 담기는 것을 보인다. "부끄러우니까 이름을 안 불러요"라는 말이 나오면 "아플 때 어디가 아픈지 말하지 못하면 어떻게 될까요?"라고 되묻는다. 바른 이름은 놀림 말이 아니라 내 몸을 지키고 존중하는 말이라는 것을 짚는다.',
          student: '몸을 바른 이름으로 부르는 까닭을 골라요. 놀리는 말은 빼요.',
          demo: { tool: 'mindmap', options: { mode: 'pick', basket: '바른 이름 쓰는 까닭', cards: [{ id: 'sick', text: '아플 때 말하려고' }, { id: 'respect', text: '몸을 존중하려고' }, { id: 'tease', text: '친구를 놀리려고' }, { id: 'help', text: '도움을 청하려고' }, { id: 'know', text: '내 몸을 알려고' }, { id: 'hide', text: '숨기려고' }], shuffle: false }, sequence: [{ pick: ['sick', 'respect'] }, { pick: ['sick', 'respect', 'help', 'know'] }] },
          art: { draw: 'a paper thought bubble in the middle of a classroom with paper cards around it: a nurse room door, a heart, and a raised hand', banner: '왜 바른 이름일까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      C({
        id: 'gender.e34.bodies-same-diff.activity.same-diff-table', type: 'activity', title: '같은 점·다른 점 세기',
        method: '같은 점·다른 점 표 만들기', tool: 'chart', minutes: 14,
        levels: { easy: '몸 부분 4개(근육·뼈·심장·생식기)를 센 자료로 그림그래프를 만들고 읽는다(첫 칸 그림은 미리 놓임).', base: '몸 부분 6개(피부·근육·뼈·심장·폐·생식기)를 센 자료로 그림그래프를 만들고 읽는다.', challenge: '몸 부분 10개를 센 자료로 그래프를 만들고, 셋째 문항에서 센 결과를 한 문장으로 고른 뒤 짝에게 말한다.' },
        activity: {
          title: '같은 점·다른 점 세기', tool: 'chart',
          teacher: '"근육, 뼈, 심장, 폐… 하나씩 짚으며 남녀 모두 있으면 ○, 다르면 △를 표에 해 볼까요?" 칠판 표에 함께 표시한 뒤 센 수로 그림그래프를 만든다. 큰 동그라미를 1개로 세는 학생에게 "큰 그림 하나는 몇 개였나요?"라고 되묻는다. "다른 곳이 더 많을 줄 알았어요"라는 말이 나오면 그래프를 가리키며 "어느 쪽 막대가 더 높은가요?"라고 묻는다. 남녀 몸은 같은 점이 훨씬 많고, 다른 곳인 생식기도 바른 이름으로 부른다는 것을 짚는다.',
          task: '몸 부분을 남녀 모두 있음과 다름으로 센 자료를 그림그래프로 나타내고 읽어요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '센 자료를 보고 그림그래프를 완성해요.', toolOptions: CH('몸 부분 6개 세기', D6, { mode: 'build', showTable: true }), target: { build: true }, difficulty: 0.15,
              levels: { easy: { prompt: '몸 부분 4개를 센 그림그래프를 완성해요.', toolOptions: CH('몸 부분 4개 세기', D4, { mode: 'build', showTable: true, given: [0] }), target: { build: true } },
                challenge: { prompt: '몸 부분 10개를 센 그림그래프를 완성해요.', toolOptions: CH('몸 부분 10개 세기', D10, { mode: 'build', showTable: true }), target: { build: true } } } },
            { prompt: '그래프에서 더 많은 쪽은 어느 것인가요?', toolOptions: CH('몸 부분 6개 세기', D6, { mode: 'read', question: '더 많은 쪽은?', choices: ['남녀 모두 있음', '남녀 다름'] }), target: { pick: 0 }, difficulty: 0.15,
              levels: { easy: { toolOptions: CH('몸 부분 4개 세기', D4, { mode: 'read', question: '더 많은 쪽은?', choices: ['남녀 모두 있음', '남녀 다름'] }), target: { pick: 0 } },
                challenge: { toolOptions: CH('몸 부분 10개 세기', D10, { mode: 'read', question: '더 많은 쪽은?', choices: ['남녀 모두 있음', '남녀 다름'] }), target: { pick: 0 } } } },
            { prompt: '그래프를 보고 알맞은 말을 골라요.', toolOptions: CH('몸 부분 6개 세기', D6, { mode: 'read', question: '알맞은 말은?', choices: ['같은 점이 훨씬 많아요', '다른 점이 더 많아요', '둘이 똑같이 많아요'] }), target: { pick: 0 }, difficulty: 0.2,
              levels: { easy: { toolOptions: CH('몸 부분 4개 세기', D4, { mode: 'read', question: '알맞은 말은?', choices: ['같은 점이 더 많아요', '다른 점이 더 많아요'] }), target: { pick: 0 } },
                challenge: { prompt: '센 결과를 한 문장으로 고르고 짝에게 말해요.', toolOptions: CH('몸 부분 10개 세기', D10, { mode: 'read', question: '센 결과를 한 문장으로?', choices: ['10개 가운데 9개가 같아요', '10개 가운데 9개가 달라요', '절반만 같아요'] }), target: { pick: 0 } } },
              conclude: '남녀 몸은 같은 점이 훨씬 많아요. 다른 곳인 생식기도 바른 이름으로 불러요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '남녀 모두 있으면 ○, 다르면 △를 써요.', columns: ['몸 부분', '○ 또는 △'], cells: [['뼈', ''], ['심장', ''], ['생식기', '']], answer: '○, ○, △' }] },
        notes: '센 몸 부분 목록(근육·뼈·심장·폐·피부·뇌·위·눈·귀 / 생식기)은 교사가 칠판에 적어 함께 센다. 사춘기에 달라지는 곳은 4학년 사춘기 주제에서 다룬다.',
      }),
      C({
        id: 'gender.e34.bodies-same-diff.activity.name-sort', type: 'activity', title: '바른 이름·놀림 말 나누기',
        method: '바른 이름·놀림 말 나누기', tool: 'sortboard', minutes: 13,
        levels: { easy: '문항마다 카드 4장을 바구니 2개에 나누고, 틀리면 바로 되돌아온다.', base: '문항마다 카드 6장을 나눈 뒤 확인한다.', challenge: '헷갈리는 카드 2장이 더해진 8장을 나누고, 셋째 문항에서 바른 이름으로 말해야 하는 상황 카드를 가려낸다.' },
        activity: {
          title: '바른 이름·놀림 말 나누기', tool: 'sortboard',
          teacher: '"이 말은 몸을 바르게 부르는 말일까요, 놀리는 말일까요?" 카드를 넣을 때마다 왜 그 바구니인지 말하게 한다. "생식기"라는 낱말에 웃음이 나오면 "눈·코처럼 몸의 이름이에요. 웃을 말이 아니라 알아 둘 말이에요"라고 차분히 말한다. 생식기의 바른 이름이 놀림 말이 되는 것은 이름이 아니라 놀리는 마음 때문이라는 것, 아프거나 불편할 때 바른 이름으로 말하면 어른이 정확히 도울 수 있다는 것을 짚는다.',
          task: '몸을 부르는 말과 상황 카드를 바른 이름과 놀림 말 바구니에 나누어요.', levels: BOXLV,
          items: [
            BOX('몸을 부르는 말을 나누어요.', ['바른 이름', '놀림 말'], [['생식기', '가슴', '배꼽'], ['몸에 별명 붙이기', '몸 이름 낙서', '낄낄대며 부르기']], [[0, 2], [1, 2]], [['심장'], ['몸 흉내 내며 부름']], 0.15),
            BOX('친구의 말에 보이는 반응을 나누어요.', ['존중하는 반응', '놀리는 반응'], [['고개 끄덕이며 듣기', '"그렇구나" 하기', '바르게 따라 말하기'], ['키득키득 웃기', '"이상해!" 외치기', '귓속말로 퍼뜨리기']], [[0, 2], [1, 2]], [['차분히 질문하기'], ['손가락질하기']], 0.2),
            BOX('바른 이름으로 말할 때와 멈출 때를 나누어요.', ['바른 이름으로 말해요', '꼭 멈춰요'], [['보건실에서 아플 때', '불편한 일 알릴 때', '병원 진료 받을 때'], ['몸 이름 놀이', '친구 몸 흉내', '몸 이름 낙서하기']], [[0, 2], [1, 2]], [['보호자께 물어볼 때'], ['몸 별명 짓기']], 0.25, { conclude: '생식기도 눈·코처럼 바른 이름이 있어요. 놀리지 않고, 필요할 때 바르게 말해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '보건실에서 아픈 곳을 말할 때 알맞은 것은?', options: ['바른 이름으로 말해요', '별명으로 말해요', '말하지 않아요'], answer: '바른 이름으로 말해요' }] },
        notes: '화면에는 체계도 concepts 의 "생식기"만 쓴다. 생식기의 세부 이름은 교육부 학교 성교육 표준안 그림 자료를 보이며 교사가 말로 알려 준다. 학생이 아는 별명 낱말을 말하게 하거나 카드로 만들지 않는다.',
      }),
      C({
        id: 'gender.e34.bodies-same-diff.activity.respect-case', type: 'activity', title: '갈림길: 갈아입는 시간의 놀림',
        method: '탈의실 놀림 상황 판단', tool: 'dilemma', minutes: 25,
        levels: { easy: '장면마다 갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '장면마다 갈림 2번, 보기 3개씩 고르며 결과를 따라간 뒤 고른 이유를 짝에게 말한다.', challenge: '갈림 2번을 지난 뒤 근거 카드 3장 가운데 알맞은 2장을 고른다.' },
        activity: {
          title: '갈림길: 갈아입는 시간의 놀림', tool: 'dilemma',
          teacher: '"이 길을 고르면 놀림을 받는 친구 마음은 어떻게 될까요?" 결과를 소리 내어 읽고 다음 장면에서 다시 고른 뒤, 짝에게 "나는 ○○를 골랐어, 왜냐하면…"으로 말하게 한다. 따라 웃는 길을 고른 학생을 나무라지 않고 "웃음이 났군요. 그런데 놀림을 받는 친구도 웃고 있을까요?"라고 되묻는다. 몸을 놀리는 쪽이 잘못이지 놀림을 받은 친구 잘못이 아니라는 것, 말리기 어렵다면 선생님께 알리는 것도 친구를 지키는 일이라는 것을 짚는다.',
          task: '체육복 갈아입는 시간의 장면을 읽고 보기를 골라요. 결과를 보고 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('친구가 다른 친구 몸을 놀려요.', {
              text: '체육복을 갈아입는 시간, 하준이가 바다 몸을 가리키며 크게 놀려요. 바다는 얼굴이 빨개졌어요.', motif: 'cloud',
              choices: [
                { id: 'stop', text: '"놀리지 마. 바다가 싫어해"', result: '하준이가 멈칫했어요.', ending: '그만하라고 말한 것은 바다를 지킨 일이에요.', next: {
                  text: '하준이가 "장난인데?" 하며 또 놀리려 해요.', choices: [
                    { id: 'tell', text: '선생님께 알린다', result: '선생님이 반 친구들과 몸 존중 이야기를 나누셨어요.', impact: [{ who: '바다', text: '마음이 놓였어요', tone: 1 }], ending: '알린 것은 친구를 지키는 일이에요.' },
                    { id: 'tease', text: '하준이 몸을 똑같이 놀린다', result: '서로 놀리다 다툼이 커졌어요.', impact: [{ who: '모두', text: '속상해졌어요', tone: -1 }], why: '똑같이 놀리면 놀림이 커져요. 어른께 알려요.' },
                    { id: 'leave', text: '못 본 척 나간다', result: '바다는 혼자 남았어요.', impact: [{ who: '바다', text: '외로워요', tone: -1 }], why: '보고 지나치면 놀림이 계속될 수 있어요.' },
                  ] } },
                { id: 'laugh', text: '따라 웃는다', result: '하준이가 더 크게 놀렸어요.', impact: [{ who: '바다', text: '더 창피해요', tone: -1 }], why: '따라 웃으면 놀리는 친구가 더 신나요.' },
                { id: 'look', text: '가만히 구경한다', result: '구경하는 친구가 늘었어요.', impact: [{ who: '바다', text: '몸을 숨기고 싶어요', tone: -1 }] },
              ] }, [['stop', 'tell']],
            [{ id: 'body', text: '누구의 몸도 놀림거리가 아니라서' }, { id: 'help', text: '어른이 놀림을 멈추게 도울 수 있어서' }, { id: 'fun', text: '장난이면 괜찮아서', why: '받는 친구가 싫으면 장난이 아니에요.' }], ['body', 'help'], 0.2),
            DIL('놀림을 받은 친구가 속상해해요.', {
              text: '쉬는 시간, 바다가 "내 몸이 이상한가 봐" 하고 고개를 숙여요.', motif: 'cloud',
              choices: [
                { id: 'comfort', text: '"네 몸은 이상하지 않아"', result: '바다가 고개를 조금 들었어요.', ending: '친구의 몸을 존중하는 말이 바다에게 힘이 됐어요.', next: {
                  text: '바다가 "다음 체육 시간이 걱정돼"라고 해요.', choices: [
                    { id: 'together', text: '"같이 선생님께 말씀드리자"', result: '선생님이 갈아입는 시간 약속을 새로 정하셨어요.', impact: [{ who: '바다', text: '든든해요', tone: 1 }], ending: '함께 알려서 다음 시간도 안전해졌어요.' },
                    { id: 'secret', text: '"그냥 참아"', result: '바다의 걱정은 그대로예요.', impact: [{ who: '바다', text: '계속 걱정돼요', tone: -1 }], why: '혼자 참지 않아도 돼요. 어른과 함께해요.' },
                    { id: 'blame', text: '"네가 빨리 갈아입었어야지"', result: '바다가 더 속상해했어요.', impact: [{ who: '바다', text: '내 탓 같아요', tone: -1 }], why: '놀림을 받은 친구 잘못이 아니에요.' },
                  ] } },
                { id: 'agree', text: '"좀 다르긴 해"', result: '바다가 더 움츠러들었어요.', impact: [{ who: '바다', text: '더 속상해요', tone: -1 }], why: '몸은 사람마다 조금씩 달라요. 이상한 것이 아니에요.' },
                { id: 'ignore', text: '모르는 척한다', result: '바다는 혼자 걱정했어요.', impact: [{ who: '바다', text: '외로워요', tone: -1 }] },
              ] }, [['comfort', 'together']],
            [{ id: 'notfault', text: '놀림 받은 친구 잘못이 아니라서' }, { id: 'adult', text: '어른이 약속을 함께 정할 수 있어서' }, { id: 'strange', text: '몸이 다르면 이상해서', why: '몸은 사람마다 조금씩 달라요. 다른 것은 이상한 것이 아니에요.' }], ['notfault', 'adult'], 0.25),
            DIL('친구가 같이 놀리자고 해요.', {
              text: '하준이가 "너도 바다 몸 흉내 내 봐. 재밌잖아"라고 해요.', motif: 'house',
              choices: [
                { id: 'no', text: '"싫어. 몸은 놀림거리가 아니야"', result: '하준이가 머쓱해했어요.', ending: '함께하지 않은 것만으로도 바다를 지켰어요.', next: {
                  text: '하준이가 "너만 재미없게 군다"라고 해요.', choices: [
                    { id: 'keep', text: '"그래도 안 해. 바다가 싫어해"', result: '하준이도 흉내를 멈췄어요.', impact: [{ who: '바다', text: '존중받았어요', tone: 1 }], ending: '내 생각을 지켜 말한 것은 용기 있는 일이에요.' },
                    { id: 'give', text: '"알았어, 한 번만"', result: '바다가 그 모습을 보고 울먹였어요.', impact: [{ who: '바다', text: '마음을 다쳤어요', tone: -1 }], why: '한 번이라도 놀리면 친구 마음이 다쳐요.' },
                    { id: 'hit', text: '하준이를 밀친다', result: '둘이 다툼이 났어요.', impact: [{ who: '나와 하준이', text: '다칠 수 있어요', tone: -1 }], why: '몸으로 막지 말고 말로 거절하고 어른께 알려요.' },
                  ] } },
                { id: 'join', text: '같이 흉내 낸다', result: '바다가 자리를 피했어요.', impact: [{ who: '바다', text: '더 아파요', tone: -1 }], why: '같이 흉내 내면 나도 놀리는 사람이 돼요.' },
                { id: 'giggle', text: '옆에서 웃기만 한다', result: '하준이가 더 신이 났어요.', impact: [{ who: '바다', text: '모두 놀리는 것 같아요', tone: -1 }], why: '웃어 주면 놀림에 힘을 보태요.' },
              ] }, [['no', 'keep']],
            [{ id: 'respect', text: '친구 몸을 존중해야 해서' }, { id: 'feel', text: '바다가 싫다고 느껴서' }, { id: 'all', text: '다들 하니까 괜찮아서', why: '여럿이 한다고 놀림이 괜찮아지지 않아요.' }], ['respect', 'feel'], 0.3, { conclude: '누구의 몸도 놀림거리가 아니에요. 그만하라고 말하고, 어려우면 선생님께 알려요. 잘못은 놀리는 쪽에 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '친구의 몸을 놀리는 것은 놀림을 받은 친구가 아니라 ___ 사람의 잘못이에요.', answer: '놀리는' }, { type: 'choice', prompt: '친구 몸을 놀리는 것을 보았을 때 할 수 있는 일은?', options: ['그만하라고 말하기', '따라 웃기', '구경하기'], answer: '그만하라고 말하기' }] },
        notes: '장면 인물은 모두 가명의 가상 인물이다. 우리 반 실제 친구의 몸을 예로 들거나, 놀림 받은 일을 묻지 않는다. 놀리는 말 자체는 화면에 쓰지 않았다.',
      }),
      C({
        id: 'gender.e34.bodies-same-diff.wrap.respect-poster', type: 'wrap', title: '"몸 존중" 작은 포스터',
        method: '"몸 존중" 작은 포스터', tool: 'collage', minutes: 6,
        levels: { easy: '색종이 조각 2개 이상을 붙이고 점검 2칸에 표시한다.', base: '조각 4개 이상을 붙이고 점검 3칸에 표시한다.', challenge: '조각 5개 이상을 붙이고, 약속 한 줄을 포스터 아래 종이에 써 붙인 뒤 점검 4칸에 표시한다.' },
        wrap: {
          teacher: '"오늘 배운 몸 존중을 작은 포스터로 남겨 볼까요?" 색종이 조각으로 종이 몸 그림을 꾸미고, 칠판의 "바른 이름, 존중하는 말" 글자를 포스터 아래 종이에 옮겨 쓰게 한다. "몸 그림을 웃기게 꾸밀래요"라는 말이 나오면 "이 포스터를 보는 친구가 존중받는다고 느낄까요?"라고 되묻는다. 남녀 몸은 같은 점이 많고, 다른 곳도 바른 이름으로 부르며 놀리지 않는다는 것을 한 번 더 말한다.',
          exitTicket: [
            COL('색종이 조각으로 "몸 존중" 포스터를 꾸며요.', ['몸 그림을 꾸몄어요', '바른 이름 글자를 썼어요', '존중하는 말을 썼어요', '약속 한 줄을 붙였어요'], 2, 4, 5),
            { type: 'choice', prompt: '친구가 생식기의 바른 이름을 말할 때 알맞은 반응은?', options: ['차분히 들어요', '키득키득 웃어요', '놀려요'], answer: 0, difficulty: 0.1, explain: '바른 이름은 놀림 말이 아니라 몸의 이름이에요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '몸 존중',
          items: [
            { type: 'choice', prompt: '남녀 몸에 대한 바른 말은?', options: ['같은 점이 훨씬 많아요', '모두 달라요', '같은 곳이 하나도 없어요'], answer: '같은 점이 훨씬 많아요' },
            { type: 'short', prompt: '친구의 몸을 존중하는 약속을 한 줄로 써요.' },
          ],
          easy: { note: '몸의 이름은 웃을 말이 아니라 알아 둘 말이에요.', items: [{ type: 'choice', prompt: '몸을 놀려도 되나요?', options: ['안 돼요', '돼요'], answer: '안 돼요' }] },
        },
        notes: '색종이 판에는 글자를 붙일 수 없어 글은 포스터 아래 종이에 쓴다. 완성 포스터에 친구 이름을 쓰지 않는다.',
      }),
      C({
        id: 'gender.e34.bodies-same-diff.wrap.self-check', type: 'wrap', title: '오늘 배운 몸 존중 점검',
        method: '오늘 배운 점 스스로 점검', tool: 'timer', minutes: 6,
        levels: { easy: '점검 2칸(바른 이름·놀리지 않기)에 표시한다.', base: '점검 3칸(같은 점 많음 더함)에 표시한다.', challenge: '점검 4칸에 표시하고, 그 가운데 한 칸을 짝에게 설명한다.' },
        wrap: {
          teacher: '"오늘 배운 것 가운데 내가 할 수 있게 된 것에 표시해 볼까요?" 칸마다 읽어 주고 스스로 표시하게 한다. 모두 표시한 학생에게 "놀리지 않기는 언제 지킬 수 있을까요?"라고 물어 실제 상황(갈아입는 시간·쉬는 시간)을 떠올리게 한다. 남녀 몸은 같은 점이 많고, 다른 곳도 바른 이름으로 부르며, 몸 놀림을 보면 그만하라고 하거나 선생님께 알린다는 것을 마무리로 말한다.',
          exitTicket: [
            SELF('몸 존중 스스로 점검', ['바른 이름을 알아요', '몸을 놀리지 않아요', '같은 점이 많아요', '짝에게 설명했어요']),
            { type: 'choice', prompt: '친구가 다른 친구 몸을 놀릴 때 할 수 있는 일은?', options: ['그만하라고 말해요', '같이 웃어요', '구경해요'], answer: 0, difficulty: 0.1, explain: '그만하라고 말하기 어려우면 선생님께 알려도 돼요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '오늘 배운 몸 존중',
          items: [
            { type: 'check', prompt: '내가 할 수 있는 것에 표시해요.', options: ['몸을 바른 이름으로 불러요', '친구 몸을 놀리지 않아요', '놀림을 보면 알려요'] },
            { type: 'short', prompt: '몸을 바른 이름으로 불러야 하는 까닭을 한 줄로 써요.' },
          ],
          easy: { note: '아플 때 어디가 아픈지 말하려면 바른 이름이 필요해요.', items: [{ type: 'choice', prompt: '몸은 놀림거리인가요?', options: ['아니에요', '맞아요'], answer: '아니에요' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 3학년 · 생명은 어떻게 시작될까 (교육부 학교 성교육 표준안 초 — 생명 탄생, 그림책 수준)
  // ======================================================================================================
  {
    const C = T('life-begins', 3);
    const GROW = { type: 'picture', title: '배 속 아기 크기(연습용 가상 자료)', unit: '칸', xLabel: '배 속에서 지낸 때', yLabel: '크기', icons: [{ value: 5, name: '5칸' }, { value: 1, name: '1칸' }], icon: 'heart' };
    const G3 = [['처음', 1], ['가운데', 5], ['태어날 무렵', 10]];
    const G5 = [['처음', 1], ['조금 뒤', 3], ['가운데', 5], ['더 뒤', 8], ['태어날 무렵', 10]];
    const GC = (data, extra) => Object.assign({}, GROW, extra, { data });
    M.push(
      C({
        id: 'gender.e34.life-begins.intro.myth-or-fact', type: 'intro', title: '아기 이야기, 사실일까',
        method: '아기 이야기 사실·지어낸 말', tool: 'sortboard', minutes: 6,
        levels: { easy: '카드 3장을 사실·지어낸 말 바구니에 함께 나눈다.', base: '카드 5장을 나눈다.', challenge: '지어낸 말 카드 하나를 사실 말로 바꿔 짝에게 말한다(교사 진행).' },
        intro: {
          teacher: '"아기는 어디에서 올까요? 이런 이야기를 들어 본 적 있나요?" 시연 단추로 카드가 사실·지어낸 말 바구니에 들어가는 것을 보인다. "황새가 데려온대요"라는 말이 나오면 웃어넘기지 않고 "옛날이야기 속 말이에요. 진짜로는 아기가 어디에서 자랄까요?"라고 되묻는다. 아기는 정자와 난자가 만나 자궁에서 자라 태어난다는 것을 오늘 그림책처럼 알아본다고 밝힌다.',
          student: '아기에 대한 이야기 카드를 사실과 지어낸 말로 나누어요.',
          demo: { tool: 'sortboard', options: { slots: ['사실', '지어낸 말'], cards: ['황새가 데려와요', '자궁에서 자라요', '배꼽에서 나와요', '정자와 난자가 만나요', '마트에서 사 와요'] }, sequence: [{ sort: { 사실: ['자궁에서 자라요'], '지어낸 말': ['황새가 데려와요', '배꼽에서 나와요'] } }, { sort: { 사실: ['자궁에서 자라요', '정자와 난자가 만나요'], '지어낸 말': ['황새가 데려와요', '배꼽에서 나와요', '마트에서 사 와요'] } }] },
          art: { draw: 'a paper picture book opened on a desk, one page showing a paper stork carrying a bundle with a question mark, the other page showing a small paper baby curled up safely inside a soft round shape', banner: '사실일까, 지어낸 말일까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      C({
        id: 'gender.e34.life-begins.intro.heartbeat', type: 'intro', title: '두근두근 아기 심장 박자',
        method: '아기 심장 소리 박자', tool: 'keyboard', minutes: 6,
        levels: { easy: '한 마디(네 박) "두근, 두근" 리듬을 함께 따라 친다.', base: '두 마디(여덟 박)를 따라 친다.', challenge: '같은 리듬을 빠르게·느리게 쳐 보며 심장이 뛰는 빠르기가 달라질 수 있음을 말한다(교사 진행).' },
        intro: {
          teacher: '"배 속 아기에게도 심장이 있을까요?" 시연 단추로 "두근, 두근" 리듬 블록이 놓이는 것을 보이고 함께 손뼉으로 따라 친다. "아기는 태어나야 심장이 생겨요"라는 말이 나오면 "배 속에서 자랄 때부터 심장이 뛰어요. 그래서 아기는 그때부터 소중한 생명이에요"라고 말해 준다. 오늘은 생명이 시작되고 자라는 차례를 알아본다고 밝힌다.',
          student: '"두근, 두근" 심장 박자를 듣고 리듬 블록으로 따라 쳐요.',
          demo: { tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 1, blocks: ['q', 'e', 'qr'], pattern: ['e', 'e', 'qr', 'e', 'e', 'qr'] }, sequence: [{ rhythm: ['e', 'e', 'qr'] }, { rhythm: ['e', 'e', 'qr', 'e', 'e', 'qr'] }] },
          art: { draw: 'a soft paper heart with gentle paper ripple lines around it, small paper music notes floating beside it in a calm pastel room', banner: '두근, 두근', extra: [{ motif: 'flower', x: 300, y: 96, color: 'rose' }] },
        },
        notes: '심장이 뛰기 시작하는 때(주 수)는 화면에 쓰지 않았다. 묻는 학생이 있으면 표준안 자료로 확인해 알려 준다.',
      }),
      C({
        id: 'gender.e34.life-begins.activity.life-order', type: 'activity', title: '생명이 자라는 차례',
        method: '생명이 자라는 차례 놓기', tool: 'lifecycle', minutes: 14,
        levels: { easy: '첫째·둘째 문항은 장면 3장을 차례대로 놓고(놓으면 바로 맞는지 알림), 셋째 문항은 설명 2줄을 잇는다.', base: '장면 4장을 차례대로 놓고, 설명 3줄을 잇는다.', challenge: '틀린 장면 카드(황새가 데려옴 등) 한 장을 빼고 4장을 놓으며, 셋째 문항은 남는 설명 카드 한 장을 가려낸다.' },
        activity: {
          title: '생명이 자라는 차례', tool: 'lifecycle',
          teacher: '"맨 처음은 무엇일까요? 그다음 아기는 어디에서 자랄까요?" 장면을 놓을 때마다 소리 내어 읽고 "차례대로 따라가 보기" 단추로 확인한다. "황새가 데려와요" 카드를 넣으려는 학생에게 "이 이야기는 사실일까요, 지어낸 말일까요?"라고 묻는다. 정자와 난자가 만나 생명이 시작되고, 아기는 자궁 속에서 자라 태어나며, 태어난 뒤에는 가족의 돌봄을 받으며 자란다는 것을 짚는다. 가족이 아기를 맞는 모습은 가족마다 다를 수 있다고 덧붙인다.',
          task: '생명이 시작되어 자라는 장면 카드를 둥근 판에 차례대로 놓고 설명을 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORD('생명이 시작되어 태어나는 차례로 놓아요.', { center: '생명이 자라는 차례', cycle: false }, [{ id: 'meet', text: '정자와 난자 만남' }, { id: 'grow', text: '자궁 속에서 자람' }, { id: 'born', text: '아기가 태어남' }, { id: 'care', text: '가족이 돌봐 줌' }], [0, 1, 2], { id: 'stork', text: '황새가 데려옴', why: '황새 이야기는 지어낸 말이에요.' }, 0.15, null, true),
            ORD('사람이 자라는 차례로 놓아요.', { center: '사람이 자라는 차례', cycle: false }, [{ id: 'baby', text: '아기' }, { id: 'child', text: '어린이' }, { id: 'teen', text: '청소년' }, { id: 'adult', text: '어른' }], [0, 1, 3], { id: 'navel', text: '배꼽에서 나옴', why: '아기는 배꼽에서 나오지 않아요.' }, 0.2, null, true),
            MATCH('장면과 설명을 이어요.', { center: '장면과 설명', cycle: false }, [['정자와 난자 만남', '새 생명이 시작돼요'], ['자궁 속에서 자람', '배 속에서 커져요'], ['아기가 태어남', '세상에 나와요'], ['가족이 돌봐 줌', '사랑받으며 자라요']], '황새가 데려와요', 0.25, { conclude: '정자와 난자가 만나 생명이 시작되고, 자궁에서 자라 태어나요. 모든 생명은 소중해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '아기는 태어나기 전에 어디에서 자라나요?', options: ['자궁', '배꼽', '황새 둥지'], answer: '자궁' }] },
        notes: '정자와 난자가 "어떻게 만나는지"는 다루지 않는다(그림책 수준). 묻는 학생에게는 "몸이 자라면 더 배우게 돼요. 궁금하면 보호자나 보건 선생님께 여쭤봐도 돼요"라고 답한다.',
      }),
      C({
        id: 'gender.e34.life-begins.activity.grow-chart', type: 'activity', title: '배 속 아기 자람 그래프',
        method: '아기 키 자람 그래프 읽기', tool: 'chart', minutes: 13,
        levels: { easy: '그림 3칸(처음·가운데·태어날 무렵) 그래프로 묻는 말에 답한다.', base: '그림 5칸 그래프로 묻는 말에 답하고 그래프를 완성한다.', challenge: '5칸 그래프를 읽은 뒤 짝과 "언제 가장 컸을까?" 같은 물음을 서로 내고 답한다(교사 진행).' },
        activity: {
          title: '배 속 아기 자람 그래프', tool: 'chart',
          teacher: '"배 속 아기는 처음부터 지금 크기였을까요?" 그래프 위 하트 그림을 함께 세며 읽는다. 큰 하트를 1칸으로 세는 학생에게 "큰 그림 하나는 몇 칸이었지요?"라고 되묻는다. 이 그래프는 크기가 점점 커진다는 것을 보이려고 만든 연습용 가상 자료라는 것을 화면 제목으로 함께 읽는다. 아기는 자궁 속에서 작게 시작해 점점 자라 태어난다는 것을 짚는다.',
          task: '배 속 아기 크기 그림그래프(가상)를 읽고 묻는 말에 답해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '아기가 가장 컸을 때는 언제인가요?', toolOptions: GC(G5, { mode: 'read', question: '가장 컸을 때는?', choices: G5.map((d) => d[0]) }), target: { pick: 4 }, difficulty: 0.15,
              levels: { easy: { prompt: '그림 3칸에서 아기가 가장 컸을 때는?', toolOptions: GC(G3, { mode: 'read', question: '가장 컸을 때는?', choices: G3.map((d) => d[0]) }), target: { pick: 2 } } } },
            { prompt: '아기 크기는 어떻게 바뀌었나요?', toolOptions: GC(G5, { mode: 'read', question: '크기는 어떻게?', choices: ['점점 커져요', '점점 작아져요', '그대로예요'] }), target: { pick: 0 }, difficulty: 0.15,
              levels: { easy: { toolOptions: GC(G3, { mode: 'read', question: '크기는 어떻게?', choices: ['점점 커져요', '점점 작아져요'] }), target: { pick: 0 } } } },
            { prompt: '표를 보고 그림그래프를 완성해요.', toolOptions: GC(G5, { mode: 'build', showTable: true, given: [0] }), target: { build: true }, difficulty: 0.2,
              levels: { easy: { prompt: '표를 보고 그림그래프 3칸을 완성해요.', toolOptions: GC(G3, { mode: 'build', showTable: true, given: [0] }), target: { build: true } } },
              conclude: '아기는 자궁 속에서 작게 시작해 점점 자라요. 그렇게 자라 태어난 우리 모두가 소중해요.' },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '그래프로 알 수 있는 것은?', options: ['아기는 배 속에서 점점 자라요', '아기는 처음부터 커요', '아기는 자라지 않아요'], answer: '아기는 배 속에서 점점 자라요' }] },
        notes: '크기 칸 수는 실제 측정값이 아닌 연습용 가상 값이다(화면 제목에 밝힘). 달마다의 실제 크기를 쓰려면 표준안 자료의 값으로 바꾼다.',
      }),
      C({
        id: 'gender.e34.life-begins.activity.family-prepare', type: 'activity', title: '새 아기를 맞는 가족',
        method: '가족이 준비하는 일 점검표', tool: 'kitchen', minutes: 13,
        levels: { easy: '첫째·둘째 문항은 항목 3칸 가운데 알맞은 것에 표시하고, 셋째 문항은 내가 도울 일 하나에 표시한다.', base: '항목 5칸 가운데 알맞은 것에 표시하고, 내가 도울 일 하나 이상에 표시한다.', challenge: '함정 항목이 더해진 6칸에서 가려 표시하고, 내가 도울 일을 고른 까닭을 짝에게 말한다.' },
        activity: {
          title: '새 아기를 맞는 가족', tool: 'kitchen',
          teacher: '"가상의 하루네 가족에게 곧 아기가 태어나요. 가족은 무엇을 준비할까요?" 항목을 하나씩 읽고 표시하게 한다. "아기 돌보기는 어른만 해요"라는 말이 나오면 "어린이도 도울 수 있는 일이 있을까요? 조용히 해 주는 것도 돕는 일일까요?"라고 되묻는다. 아기를 맞는 준비는 가족 모두가 함께 나누는 일이고, 가족마다 준비하는 모습은 다를 수 있다는 것을 짚는다.',
          task: '새 아기를 맞는 가족이 할 일에 표시하고, 내가 도울 일을 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            CHK('아기를 맞기 전에 가족이 준비할 일에 표시해요.', '아기를 맞기 전에', [{ id: 'clothes', text: '아기 옷 빨아 두기', ok: true }, { id: 'hospital', text: '병원 다니기', ok: true }, { id: 'loud', text: '집에서 크게 떠들기' }, { id: 'room', text: '아기 자리 만들기', ok: true }, { id: 'rest', text: '엄마가 쉬게 돕기', ok: true }], [0, 1, 2], [{ id: 'alone', text: '한 사람만 다 하기' }], 0.15),
            CHK('아기가 태어난 뒤 어린이가 도울 수 있는 일에 표시해요.', '어린이가 돕는 일', [{ id: 'quiet', text: '아기 잘 때 조용히', ok: true }, { id: 'hold', text: '혼자 아기 안기' }, { id: 'diaper', text: '기저귀 가져오기', ok: true }, { id: 'wash', text: '손 씻고 다가가기', ok: true }, { id: 'bath', text: '혼자 아기 씻기기' }], [0, 1, 2], [{ id: 'song', text: '노래 불러 주기', ok: true }], 0.2),
            { prompt: '내가 우리 집에서 도울 수 있는 일에 표시해요.', toolOptions: { mode: 'checklist', title: '내가 도울 일', items: [{ id: 'tidy', text: '내 물건 정리하기' }, { id: 'help', text: '심부름하기' }, { id: 'calm', text: '조용히 해 주기' }, { id: 'hug', text: '고맙다고 말하기' }] }, target: { selfCheck: true }, difficulty: 0.1,
              conclude: '아기를 맞는 일은 가족 모두가 함께해요. 어린이도 도울 수 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '새 아기를 맞는 준비는 누가 하나요?', options: ['가족 모두가 함께', '한 사람만', '아무도 안 해요'], answer: '가족 모두가 함께' }] },
        notes: '"하루네 가족"은 가상 가족이다. 학생 집에 동생이 있는지, 태어날 때 이야기를 묻지 않는다. 가족마다 아기를 맞는 모습(입양 등)이 다를 수 있음을 존중한다.',
      }),
      C({
        id: 'gender.e34.life-begins.wrap.precious-why', type: 'wrap', title: '생명이 소중한 까닭',
        method: '생명이 소중한 까닭 모으기', tool: 'mindmap', minutes: 6,
        levels: { easy: '까닭 카드 3장 가운데 2장을 고르고, 잇기 2줄을 한다.', base: '카드 6장 가운데 까닭 4장을 고르고, 까닭과 행동 3줄을 잇는다.', challenge: '까닭 고르기에 헷갈리는 카드가 더해지고, 잇기에서 남는 카드 한 장을 가려낸다.' },
        wrap: {
          teacher: '"생명은 왜 소중할까요?" 까닭 카드를 고른 뒤 까닭마다 내가 할 수 있는 행동을 잇게 한다. "작은 아기는 아직 사람이 아니에요"라는 말이 나오면 "배 속에서 자랄 때부터 심장이 뛰었지요? 작아도 소중한 생명이에요"라고 되묻는다. 나도 친구도 모두 그렇게 자라 태어난 소중한 생명이라는 것을 마무리로 말한다.',
          exitTicket: [
            EX('mindmap', PICK('생명이 소중한 까닭을 골라요.', { basket: '생명이 소중한 까닭' }, [{ id: 'one', text: '세상에 하나뿐이라서', ok: true }, { id: 'big', text: '커야만 소중해서' }, { id: 'love', text: '사랑받으며 자라서', ok: true }, { id: 'grow', text: '함께 자라나서', ok: true }, { id: 'heart', text: '심장이 뛰어서', ok: true }, { id: 'rich', text: '돈이 많아서' }], ['one', 'big', 'love'], [{ id: 'same', text: '모두 똑같아서' }, { id: 'every', text: '누구나 귀해서', ok: true }], 0.15)),
            EX('mindmap', MATCH('까닭과 내가 할 행동을 이어요.', { topic: '소중하니까' }, [['하나뿐이라서', '나를 아껴요'], ['함께 자라서', '친구를 아껴요'], ['사랑받아서', '고맙다고 해요']], '놀려요', 0.2)),
            MOOD,
          ],
        },
        worksheet: {
          title: '생명은 소중해요',
          items: [
            { type: 'check', prompt: '생명이 소중한 까닭에 표시해요.', options: ['세상에 하나뿐이라서', '사랑받으며 자라서', '돈이 많아서'] },
            { type: 'short', prompt: '나를 소중히 여기는 행동을 한 줄로 써요.' },
          ],
          easy: { note: '나도 친구도 모두 소중한 생명이에요.', items: [{ type: 'choice', prompt: '생명은 소중한가요?', options: ['소중해요', '아니에요'], answer: '소중해요' }] },
        },
      }),
      C({
        id: 'gender.e34.life-begins.wrap.thanks-card', type: 'wrap', title: '태어난 나에게 축하 카드',
        method: '태어난 나에게 축하 카드', tool: 'collage', minutes: 6,
        levels: { easy: '색종이 조각 2개 이상을 붙이고 점검 2칸에 표시한다.', base: '조각 4개 이상을 붙이고 점검 3칸에 표시한다.', challenge: '조각 5개 이상을 붙이고, 나를 돌봐 준 사람 그림(조각)을 더한 뒤 점검 4칸에 표시한다.' },
        wrap: {
          teacher: '"태어나 줘서 고마워! 나에게 축하 카드를 만들어 볼까요?" 색종이 조각으로 카드를 꾸미고, "태어나 줘서 고마워" 글은 카드 아래 종이에 쓰게 한다. "돌봐 준 사람"은 보호자·할머니·선생님 누구든 괜찮다고 말해 주고, 특정 가족을 그리라고 정하지 않는다. 나는 소중한 생명이고 많은 사람의 돌봄으로 자랐다는 것을 마무리로 말한다.',
          exitTicket: [
            COL('색종이 조각으로 나에게 주는 축하 카드를 꾸며요.', ['카드를 꾸몄어요', '축하 글을 썼어요', '나를 소중히 여겨요', '돌봐 준 사람을 넣었어요'], 2, 4, 5),
            { type: 'choice', prompt: '아기는 태어나기 전 어디에서 자랄까요?', options: ['자궁', '배꼽', '황새 둥지'], answer: 0, difficulty: 0.1, explain: '아기는 자궁에서 자라 태어나요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '태어나 줘서 고마워',
          items: [
            { type: 'choice', prompt: '생명이 시작되는 것은?', options: ['정자와 난자가 만날 때', '황새가 올 때', '배꼽이 생길 때'], answer: '정자와 난자가 만날 때' },
            { type: 'short', prompt: '태어난 나에게 축하하는 말을 한 줄로 써요.' },
          ],
          easy: { note: '나는 소중한 생명이에요.', items: [{ type: 'choice', prompt: '아기는 어디에서 자라요?', options: ['자궁', '황새 둥지'], answer: '자궁' }] },
        },
        notes: '아기 때 사진이나 태어난 이야기를 가져오게 하지 않는다(가족 사정이 저마다 다르다).',
      }),
    );
  }

  // ======================================================================================================
  // 3학년 · 사람마다 다른 경계의 크기 (research-mandatory §2 초: 몸의 경계·'싫어요' 말하기)
  // ======================================================================================================
  {
    const C = T('boundary-size', 3);
    // 나를 가운데 둔 세 겹 칸 지도(7×7): 가운데 칸에서 한 칸 = 가족, 두 칸 = 친구, 세 칸 = 처음 본 사람
    const RING = (k) => { const out = []; for (let c = 0; c < 7; c++) for (let r = 0; r < 7; r++) if (Math.max(Math.abs(c - 3), Math.abs(r - 3)) === k) out.push([c, r]); return out; };
    const CIRCLES = { title: '나를 둘러싼 동그라미', grid: [7, 7], legend: false, regions: [{ name: '나', cells: [[3, 3]] }, { name: '가족 자리', cells: RING(1) }, { name: '친구 자리', cells: RING(2) }, { name: '처음 본 사람 자리', cells: RING(3) }] };
    const DIST = { type: 'bar', title: '친구와 편한 거리(가상의 모둠)', unit: '걸음', xLabel: '친구', yLabel: '걸음 수', max: 5, step: 1 };
    const D6 = [['하늘', 1], ['바다', 3], ['나래', 2], ['가람', 4], ['다온', 2], ['이솔', 1]];
    const D4 = D6.slice(0, 4);
    const DC = (data, extra) => Object.assign({}, DIST, extra, { data });
    M.push(
      C({
        id: 'gender.e34.boundary-size.intro.circles', type: 'intro', title: '나를 둘러싼 세 겹 동그라미',
        method: '나를 둘러싼 동그라미 지도', tool: 'map', minutes: 6,
        levels: { easy: '교사가 사람 3명(가족·친구·처음 본 사람)의 핀을 함께 놓는다.', base: '사람 5명(이웃 어른·선생님 더함)을 어느 겹에 놓을지 손으로 가리킨 뒤 핀을 본다.', challenge: '같은 친구라도 다툰 날·처음 만난 날에는 겹을 옮길 수 있는지 말해 본다(교사 진행).' },
        intro: {
          teacher: '"가운데가 나예요. 가족은 어느 겹에, 친구는, 처음 본 사람은 어느 겹에 둘까요?" 시연 단추로 핀이 가족 자리 → 친구 자리 → 처음 본 사람 자리 차례로 놓이는 것을 보인다. "가족은 가운데에 붙여요. 가족끼리는 경계가 없어요"라는 말이 나오면 "가족 자리는 가장 가깝지만, 가족도 내가 싫다고 하면 멈춰 주어야 할까요?"라고 되묻는다. 사람과 관계에 따라 편한 거리가 다르고, 그 거리를 경계라고 부른다는 것을 밝힌다.',
          student: '나를 가운데 둔 세 겹 동그라미에 가족·친구·처음 본 사람 핀을 놓아 보아요.',
          demo: { tool: 'map', options: CIRCLES, sequence: [{ pin: [3, 2] }, { pin: [3, 1] }, { pin: [3, 0] }] },
          art: { draw: 'three soft paper rings layered around a small paper child in the middle, a paper family figure on the inner ring, a paper friend on the middle ring and a paper stranger on the outer ring', banner: '나의 동그라미', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '칸 지도에는 둥근 겹이 없어 가운데 칸에서 한 칸·두 칸·세 칸 떨어진 네모 겹으로 나타냈다. 학생의 실제 가족을 말하게 하지 않는다.',
      }),
      C({
        id: 'gender.e34.boundary-size.intro.comfort-scale', type: 'intro', title: '가까이 오면 내 마음 크기는',
        method: '거리별 마음 크기 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '장면 2개(처음 본 어른·짝)의 마음 크기 눈금을 함께 고른다.', base: '장면 4개(이웃 어른·모르는 형 더함)의 눈금을 손가락으로 고른다.', challenge: '친구와 고른 눈금이 다르면 그 까닭을 말해 본다(교사 진행).' },
        intro: {
          teacher: '"처음 본 어른이 내 바로 옆까지 다가오면 마음이 얼마나 불편할까요?" 시연 단추로 걱정 눈금이 놓이는 것을 보인 뒤, 짝이 다가오는 장면에서도 손가락으로 눈금을 고르게 한다. 친구와 눈금이 다를 때 "누가 틀렸을까요?"라고 묻고 "사람마다 불편한 크기가 달라서 둘 다 맞아요"라고 말해 준다. 내가 괜찮아도 친구는 불편할 수 있다는 것을 오늘 알아본다고 밝힌다.',
          student: '누가 가까이 다가오는 장면에서 내 마음의 크기를 눈금으로 골라요.',
          demo: { tool: 'emotion', options: { mode: 'scale', situation: '처음 본 어른이 아주 가까이 와요', feeling: '걱정', steps: 5, scaleLabels: { 1: '조금', 5: '아주 많이' } }, sequence: [{ level: 4 }] },
          art: { draw: 'a paper child on a park bench leaning away as a tall paper adult figure stands very close, a small paper scale meter beside them', banner: '내 마음은 얼마나?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
      }),
      C({
        id: 'gender.e34.boundary-size.activity.distance-survey', type: 'activity', title: '모둠 친구들의 편한 거리',
        method: '우리 모둠 편안한 거리 표', tool: 'chart', minutes: 14,
        levels: { easy: '친구 4명의 자료로 막대그래프를 만들고 읽는다(첫 막대는 미리 놓임).', base: '친구 6명의 자료로 막대그래프를 만들고 읽는다.', challenge: '6명 자료에서 가장 먼 거리와 가장 가까운 거리의 차이를 찾아 말한다.' },
        activity: {
          title: '모둠 친구들의 편한 거리', tool: 'chart',
          teacher: '"친구와 몇 걸음 떨어져 있을 때 편한가요? 가상의 모둠 친구들이 답한 표예요." 표의 수를 함께 읽고 막대를 올린다. 가장 가까운 친구를 고른 뒤 "그럼 다른 친구들도 1걸음이 편할까요?"라고 묻는다. "가까운 게 친한 거예요"라는 말이 나오면 "가람이는 4걸음이 편해요. 가람이는 친구를 덜 좋아하는 걸까요?"라고 되묻는다. 편한 거리는 사람마다 다르고, 다르다고 틀린 것이 아니라는 것을 짚는다.',
          task: '가상 모둠 친구들의 편한 거리 표를 막대그래프로 나타내고 사람마다 다른지 읽어요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '표를 보고 편한 거리 막대그래프를 완성해요.', toolOptions: DC(D6, { mode: 'build', showTable: true }), target: { build: true }, difficulty: 0.15,
              levels: { easy: { prompt: '표를 보고 친구 4명의 막대그래프를 완성해요.', toolOptions: DC(D4, { mode: 'build', showTable: true, given: [0] }), target: { build: true } } } },
            { prompt: '가장 먼 거리가 편한 친구는 누구인가요?', toolOptions: DC(D6, { mode: 'read', question: '가장 먼 거리가 편한 친구는?', choices: D6.map((d) => d[0]) }), target: { pick: 3 }, difficulty: 0.15,
              levels: { easy: { toolOptions: DC(D4, { mode: 'read', question: '가장 먼 거리가 편한 친구는?', choices: D4.map((d) => d[0]) }), target: { pick: 3 } } } },
            { prompt: '그래프를 보고 편한 거리에 맞는 말을 골라요.', toolOptions: DC(D6, { mode: 'read', question: '알맞은 말은?', choices: ['편한 거리가 사람마다 달라요', '모두 1걸음이 편해요', '가까울수록 친해요'] }), target: { pick: 0 }, difficulty: 0.2,
              levels: { easy: { toolOptions: DC(D4, { mode: 'read', question: '알맞은 말은?', choices: ['편한 거리가 사람마다 달라요', '모두 같은 거리가 편해요'] }), target: { pick: 0 } },
                challenge: { prompt: '가장 먼 거리와 가장 가까운 거리는 몇 걸음 차이인가요?', toolOptions: DC(D6, { mode: 'read', question: '몇 걸음 차이?', choices: ['3걸음', '1걸음', '5걸음'] }), target: { pick: 0 } } },
              conclude: '편한 거리는 사람마다 달라요. 내가 괜찮아도 친구는 불편할 수 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '나는 1걸음이 편한데 친구는 3걸음이 편해요. 어떻게 할까요?', options: ['친구가 편한 3걸음을 지켜요', '내가 편한 1걸음으로 다가가요', '친구에게 참으라고 해요'], answer: '친구가 편한 3걸음을 지켜요' }] },
        notes: '그래프 자료는 가상이다. 반에서 실제로 걸음 수를 재어 볼 때도 친구 이름을 붙여 칠판에 쓰지 않는다.',
      }),
      C({
        id: 'gender.e34.boundary-size.activity.situation-judge', type: 'activity', title: '갈림길: 친구가 다가올 때',
        method: '상황마다 거리 판단하기', tool: 'dilemma', minutes: 13,
        levels: { easy: '장면마다 갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '장면 3개(버스·놀이터·교실)마다 갈림 2번씩 고르며 결과를 따라간다.', challenge: '갈림 2번을 지난 뒤 근거 카드 3장 가운데 알맞은 2장을 고르고, 짝과 고른 이유를 비교한다.' },
        activity: {
          title: '갈림길: 친구가 다가올 때', tool: 'dilemma',
          teacher: '"이 친구는 지금 편할까요? 어떻게 알 수 있을까요?" 결과를 소리 내어 읽고 다음 장면에서 다시 고른다. "친하니까 괜찮아요"라는 길을 고른 학생에게 "친한 친구도 오늘은 불편할 수 있을까요? 어떻게 알 수 있지요?"라고 되묻는다. 얼굴·몸짓을 살피고 물어보면 친구의 경계를 알 수 있고, 친구가 물러나면 나도 한 걸음 물러나는 것이 경계를 지키는 일이라는 것을 짚는다.',
          task: '버스·놀이터·교실 장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('버스에서 친구 옆에 앉아요.', {
              text: '체험학습 버스에서 나래 옆에 앉았어요. 나래가 창문 쪽으로 몸을 붙여요.', motif: 'house',
              choices: [
                { id: 'ask', text: '"좁아? 내가 좀 떨어질까?"', result: '나래가 "응, 조금만" 하고 웃었어요.', ending: '물어본 덕분에 나래가 편해졌어요.', next: {
                  text: '조금 뒤 나래가 "이제 괜찮아" 하고 간식을 나눠 줘요.', choices: [
                    { id: 'keep', text: '그 거리를 지키며 같이 먹는다', result: '둘이 편하게 이야기했어요.', impact: [{ who: '나래', text: '편해요', tone: 1 }], ending: '친구가 편한 거리를 지키니 함께 즐거웠어요.' },
                    { id: 'lean', text: '다시 바짝 붙어 앉는다', result: '나래가 또 창문 쪽으로 붙었어요.', impact: [{ who: '나래', text: '다시 불편해요', tone: -1 }], why: '괜찮다고 한 만큼만 다가가요.' },
                    { id: 'sulk', text: '"그럼 안 먹어" 하고 토라진다', result: '나래가 당황했어요.', impact: [{ who: '나래', text: '미안해져요', tone: -1 }], why: '경계를 말해 준 친구를 탓하지 않아요.' },
                  ] } },
                { id: 'push', text: '"친하니까 괜찮지?" 더 붙는다', result: '나래가 더 움츠러들었어요.', impact: [{ who: '나래', text: '불편해요', tone: -1 }], why: '친해도 친구가 물러나면 멈추고 물어봐요.' },
                { id: 'ignore', text: '모른 척 그대로 앉는다', result: '나래는 내내 몸을 웅크렸어요.', impact: [{ who: '나래', text: '말하기 어려워요', tone: 0 }] },
              ] }, [['ask', 'keep']],
            [{ id: 'sign', text: '몸짓으로 불편함을 보여서' }, { id: 'diff', text: '사람마다 편한 거리가 달라서' }, { id: 'close', text: '친하면 붙어도 돼서', why: '친해도 경계는 사람마다 달라요.' }], ['sign', 'diff'], 0.2),
            DIL('놀이터에서 처음 본 아이가 다가와요.', {
              text: '놀이터에서 처음 본 아이가 바짝 다가와 "같이 놀자" 해요. 나는 좀 불편해요.', motif: 'tree',
              choices: [
                { id: 'step', text: '한 걸음 물러나 "조금 떨어져 줘"', result: '아이가 한 걸음 물러났어요.', ending: '내 경계를 말로 알려 준 것은 잘한 일이에요.', next: {
                  text: '아이가 그 거리에서 "그럼 같이 그네 탈래?" 해요.', choices: [
                    { id: 'choose', text: '내 마음대로 "좋아" 또는 "다음에"', result: '서로 편하게 이야기했어요.', impact: [{ who: '나', text: '편해요', tone: 1 }], ending: '내 경계도, 내 대답도 내가 정해요.' },
                    { id: 'force', text: '불편해도 참고 꼭 따라간다', result: '놀이 내내 마음이 불편했어요.', impact: [{ who: '나', text: '불편해요', tone: -1 }], why: '불편하면 참지 않고 "다음에"라고 해도 돼요.' },
                    { id: 'run', text: '아무 말 없이 숨는다', result: '아이가 영문을 몰라 했어요.', impact: [{ who: '아이', text: '왜인지 몰라요', tone: 0 }], why: '말로 알려 주면 서로 알 수 있어요.' },
                  ] } },
                { id: 'stay', text: '불편해도 가만히 있는다', result: '아이가 더 가까이 왔어요.', impact: [{ who: '나', text: '더 불편해요', tone: -1 }], why: '불편하면 물러나고 말해도 돼요.' },
                { id: 'shout', text: '"저리 가!" 하고 밀친다', result: '아이가 넘어질 뻔했어요.', impact: [{ who: '아이', text: '다칠 뻔했어요', tone: -1 }], why: '밀치지 않고 말로 알려요.' },
              ] }, [['step', 'choose']],
            [{ id: 'mine', text: '내 경계는 내가 말할 수 있어서' }, { id: 'word', text: '말로 알리면 서로 알 수 있어서' }, { id: 'rude', text: '물러나면 버릇없어서', why: '경계를 알리는 것은 버릇없는 일이 아니에요.' }], ['mine', 'word'], 0.25),
            DIL('교실에서 짝이 어깨동무를 해요.', {
              text: '쉬는 시간, 짝 다온이가 어깨동무를 하려 해요. 이솔이는 오늘 기분이 좋지 않아요. 내가 이솔이라면?', motif: 'house',
              choices: [
                { id: 'tell', text: '"오늘은 손만 잡자"', result: '다온이가 "그래" 하고 손을 내밀었어요.', ending: '내가 편한 만큼 말해서 둘 다 편해졌어요.', next: {
                  text: '다온이가 "어제는 어깨동무 했잖아" 해요.', choices: [
                    { id: 'today', text: '"오늘은 달라. 내일 또 말해 줄게"', result: '다온이가 고개를 끄덕였어요.', impact: [{ who: '다온이와 이솔이', text: '서로 이해했어요', tone: 1 }], ending: '경계는 날마다 달라질 수 있어요.' },
                    { id: 'give', text: '싫지만 "알았어"', result: '이솔이는 쉬는 시간 내내 불편했어요.', impact: [{ who: '이솔', text: '불편해요', tone: -1 }], why: '어제 괜찮았어도 오늘 싫으면 말해도 돼요.' },
                    { id: 'angry', text: '"너 싫어!" 소리친다', result: '다온이가 속상해했어요.', impact: [{ who: '다온', text: '상처받았어요', tone: -1 }], why: '친구를 탓하지 않고 내 경계만 말해요.' },
                  ] } },
                { id: 'endure', text: '말없이 참는다', result: '이솔이 얼굴이 굳었어요.', impact: [{ who: '이솔', text: '참기 힘들어요', tone: -1 }], why: '참지 않고 편한 만큼 말해도 돼요.' },
                { id: 'leave', text: '휙 돌아서 나간다', result: '다온이가 영문을 몰랐어요.', impact: [{ who: '다온', text: '당황했어요', tone: 0 }] },
              ] }, [['tell', 'today']],
            [{ id: 'change', text: '경계는 날마다 달라질 수 있어서' }, { id: 'both', text: '말하면 둘 다 편해져서' }, { id: 'once', text: '어제 됐으면 오늘도 돼서', why: '어제 괜찮았어도 오늘은 다시 물어요.' }], ['change', 'both'], 0.3, { conclude: '친구가 물러나면 나도 물러나요. 내 경계도 말로 알려요. 경계는 사람마다, 날마다 다를 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '친구가 몸을 뒤로 빼면 어떻게 할까요?', options: ['멈추고 물어봐요', '더 가까이 가요', '모른 척해요'], answer: '멈추고 물어봐요' }] },
      }),
      C({
        id: 'gender.e34.boundary-size.activity.boundary-talk', type: 'activity', title: '"내 경계는 이만큼이야" 대화',
        method: '"내 경계는 이만큼이야" 짝 대화', tool: 'story', minutes: 25,
        levels: { easy: '대화 장면 3장을 차례대로 놓고, 말풍선 2칸을 채운다(놓으면 바로 맞는지 알림).', base: '대화 장면 4장을 놓고, 말풍선 4칸을 채운 뒤 짝과 역할을 나눠 읽는다.', challenge: '틀린 장면 한 장을 빼고 놓으며, 말풍선 5칸(서로 다른 경계를 맞추는 말 포함)을 채우고 맞추는 말을 골라 짝과 읽는다.' },
        activity: {
          title: '"내 경계는 이만큼이야" 대화', tool: 'story',
          teacher: '"경계는 물어봐야 알 수 있어요. 어떻게 물을까요?" 장면을 놓고 말풍선을 채운 뒤 짝과 한 사람씩 역할을 맡아 소리 내어 읽는다. 두 사람의 경계가 다를 때 "누구 쪽에 맞추면 둘 다 편할까요?"라고 묻고, 더 넓은 거리가 필요한 사람에게 맞추면 둘 다 편하다는 것을 함께 찾는다. "물어보면 어색해요"라는 말이 나오면 "물어봐 준 친구가 나를 아낀다고 느껴질까요?"라고 되묻는다. 경계를 묻고, 듣고, 고마워하는 것이 친구 사이의 존중이라는 것을 짚는다.',
          task: '짝과 경계를 묻고 답하는 대화 장면을 차례대로 놓고, 말풍선 빈칸을 채워 짝과 읽어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORD('경계를 묻고 답하는 차례로 놓아요.', { title: '경계 묻기' }, [{ id: 'ask', text: '"어디까지 편해?"' }, { id: 'listen', text: '짝의 대답 듣기' }, { id: 'keep', text: '그 거리 지키기' }, { id: 'thanks', text: '"알려 줘서 고마워"' }], [0, 1, 2], { id: 'push', text: '"그냥 붙어 앉자"', why: '묻지 않고 붙으면 짝이 불편할 수 있어요.' }, 0.15),
            FILL('짝 대화의 말풍선 빈칸을 채워요.', ['하늘', '바다', '하늘', '바다', '하늘'], [['나는 ___ 떨어진 게 편해.', '한 팔쯤'], ['나는 ___ 앉는 게 좋아.', '조금 붙어'], ['그럼 ___ 쪽에 맞추자.', '더 먼'], ['알려 줘서 ___.', '고마워'], ['바뀌면 ___ 말해 줘.', '언제든']], ['상관없어', '꼭 붙어', '몰라', '싫어'], 0.2, null, 2, 4),
            FILL('인사할 때의 말풍선 빈칸을 채워요.', ['나래', '가람', '나래', '가람', '나래'], [['반가운데 ___ 돼?', '안아도'], ['나는 ___ 가 더 좋아.', '하이파이브'], ['그래, ___ 하자!', '하이파이브로'], ['물어봐 줘서 ___.', '고마워'], ['다음에도 먼저 ___ 볼게.', '물어']], ['그냥 안을래', '참아', '꼭 안자', '싫다니 이상해'], 0.25, null, 2, 4),
            PICK('서로 다른 경계를 맞추는 말을 골라요.', { basket: '맞추는 말' }, [{ id: 'yours', text: '"네가 편한 만큼 할게"', ok: true }, { id: 'pushy', text: '"친하니까 괜찮아"' }, { id: 'thank', text: '"알려 줘서 고마워"', ok: true }, { id: 'mock', text: '"너무 예민해"' }], ['yours', 'pushy'], [{ id: 'later', text: '"바뀌면 말해 줘"', ok: true }, { id: 'same', text: '"나랑 똑같이 해"' }], 0.25, { conclude: '경계는 묻고, 듣고, 지켜요. 서로 다르면 더 넓은 거리가 필요한 쪽에 맞춰요.' }),
          ],
        },
        worksheet: {
          items: [
            { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '친구의 경계는 ___ 알 수 있어요.', answer: '물어봐야' },
            { type: 'short', prompt: '짝에게 경계를 물어볼 때 할 말을 한 줄로 써요.' },
          ],
        },
        notes: '역할 읽기는 말로만 하고 실제로 안거나 몸을 붙이는 동작은 하지 않는다. 대화 속 인물은 가명의 가상 인물이다.',
      }),
      C({
        id: 'gender.e34.boundary-size.wrap.boundary-check', type: 'wrap', title: '경계 지키기 스스로 점검',
        method: '경계 지키기 스스로 점검', tool: 'timer', minutes: 6,
        levels: { easy: '점검 2칸(묻기·기다리기)에 표시한다.', base: '점검 3칸(다름 인정 더함)에 표시한다.', challenge: '점검 4칸에 표시하고, 한 칸을 오늘 본 장면으로 짝에게 설명한다.' },
        wrap: {
          teacher: '"오늘 친구의 경계를 지키는 방법 세 가지를 배웠어요. 묻기, 기다리기, 다름 인정하기. 나는 어디까지 할 수 있을까요?" 칸마다 읽어 주고 스스로 표시하게 한다. 모두 표시한 학생에게 "기다리기는 어떤 장면에서 해 보았나요?"라고 물어 오늘 장면을 떠올리게 한다. 경계는 사람마다, 날마다 다를 수 있으니 늘 묻고 기다린다는 것을 마무리로 말한다.',
          exitTicket: [
            SELF('경계 지키기 스스로 점검', ['먼저 물어봐요', '대답을 기다려요', '다름을 인정해요', '사례로 설명했어요']),
            { type: 'choice', prompt: '내가 괜찮으면 친구도 늘 괜찮을까요?', options: ['아니요, 친구는 다를 수 있어요', '네, 늘 같아요', '친하면 같아요'], answer: 0, difficulty: 0.1, explain: '편한 거리는 사람마다 달라요. 물어봐야 알 수 있어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '경계 지키기',
          items: [
            { type: 'check', prompt: '친구의 경계를 지키는 방법에 표시해요.', options: ['먼저 물어봐요', '대답을 기다려요', '친하면 그냥 해요'] },
            { type: 'short', prompt: '가족에게도 경계가 있을까요? 생각을 한 줄로 써요.' },
          ],
          easy: { note: '편한 거리는 사람마다 달라요.', items: [{ type: 'choice', prompt: '친구 경계를 알려면?', options: ['물어봐요', '그냥 해요'], answer: '물어봐요' }] },
        },
      }),
      C({
        id: 'gender.e34.boundary-size.wrap.boundary-badge', type: 'wrap', title: '나의 경계 배지',
        method: '나의 경계 배지 만들기', tool: 'collage', minutes: 6,
        levels: { easy: '동그라미 조각 2개 이상을 겹쳐 붙이고 점검 2칸에 표시한다.', base: '동그라미 조각 3개 이상을 겹쳐 붙이고 점검 3칸에 표시한다.', challenge: '조각 6개 이상으로 겹마다 사람 그림 조각을 붙이고 점검 4칸에 표시한다.' },
        wrap: {
          teacher: '"나를 가운데 두고 동그라미를 겹겹이 붙여 내 경계 배지를 만들어 볼까요?" 크기가 다른 동그라미 조각을 겹쳐 붙이게 한다. 친구와 배지 겹의 크기가 다를 때 "누구 배지가 맞을까요?"라고 묻고 "둘 다 맞아요. 사람마다 경계가 달라요"라고 말해 준다. 배지를 보며 친구의 경계는 묻고 기다리며 지킨다는 것을 마무리로 말한다.',
          exitTicket: [
            COL('크기가 다른 동그라미를 겹쳐 내 경계 배지를 꾸며요.', ['동그라미 겹을 붙였어요', '가운데는 나예요', '친구 경계도 존중해요', '겹마다 사람을 붙였어요'], 2, 3, 6, { shapes: ['circle', 'heart', 'star'] }),
            { type: 'choice', prompt: '친구와 경계 크기가 다를 때 알맞은 생각은?', options: ['둘 다 맞아요', '내가 맞아요', '친구가 틀렸어요'], answer: 0, difficulty: 0.1, explain: '경계는 사람마다 달라요. 다른 것은 틀린 것이 아니에요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '나의 경계 배지',
          items: [
            { type: 'choice', prompt: '처음 본 사람은 어느 겹에 둘까요?', options: ['가장 바깥 겹', '가장 안쪽 겹', '나와 같은 칸'], answer: '가장 바깥 겹' },
            { type: 'short', prompt: '내 배지를 친구에게 설명하는 말을 한 줄로 써요.' },
          ],
          easy: { note: '나를 가운데 두고 생각해요.', items: [{ type: 'choice', prompt: '경계는 모두 같나요?', options: ['달라요', '같아요'], answer: '달라요' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 3학년 · 분명한 "좋아"만 동의예요 (research-mandatory §2 초: 몸의 경계·'싫어요' 말하기 — 동의)
  // ======================================================================================================
  {
    const C = T('clear-yes', 3);
    M.push(
      C({
        id: 'gender.e34.clear-yes.intro.yes-faces', type: 'intro', title: '대답하는 얼굴 읽기',
        method: '대답 얼굴 읽기', tool: 'emotion', minutes: 6,
        levels: { easy: '얼굴 2개(활짝 "좋아"·"음…" 망설임)에 마음 카드를 함께 짝 짓는다.', base: '얼굴 4개(고개 숙임·"싫어" 더함)에 마음 카드를 짝 짓는다.', challenge: '말은 "응…"인데 얼굴은 굳은 장면을 보고, 말과 얼굴이 다를 때 어떻게 할지 말해 본다(교사 진행).' },
        intro: {
          teacher: '"친구에게 \'같이 놀래?\' 하고 물었어요. 이 얼굴들은 어떤 마음일까요?" 시연 단추로 얼굴마다 마음 카드가 놓이는 것을 보인다. "음… 하는 건 좋다는 뜻이에요"라는 말이 나오면 "망설이는 얼굴이 정말 좋아 보이나요? 확실히 알려면 어떻게 할까요?"라고 되묻는다. 분명하게 "좋아!"라고 한 것만 동의이고, 망설임이나 아무 말 없음은 동의가 아니라는 것을 오늘 알아본다고 밝힌다.',
          student: '대답하는 친구들의 얼굴을 보고 어떤 마음인지 짝 지어요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'yes', label: '활짝 웃으며 "좋아!"' }, { id: 'um', label: '"음…" 망설이는 얼굴' }, { id: 'down', label: '말없이 고개 숙임' }, { id: 'no', label: '"싫어" 하는 얼굴' }], cards: ['기쁨', '걱정', '속상함', '화남'], shuffle: false }, sequence: [{ match: { yes: '기쁨', um: '걱정' } }, { match: { yes: '기쁨', um: '걱정', down: '속상함', no: '화남' } }] },
          art: { draw: 'four paper children faces in a row: one smiling widely with a raised hand, one tilting the head unsure, one looking down silently, one shaking the head', banner: '이 대답은 좋다는 뜻일까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      C({
        id: 'gender.e34.clear-yes.intro.yes-rhythm', type: 'intro', title: '"물어보고 기다려" 리듬',
        method: '"물어보고 기다려" 리듬', tool: 'keyboard', minutes: 6,
        levels: { easy: '앞 구절("물어보고 기다려") 한 마디를 함께 손뼉과 리듬 블록으로 친다.', base: '구호 전체 두 마디를 친다.', challenge: '짝과 앞 구절·뒤 구절을 주고받으며 친다(교사 진행).' },
        intro: {
          teacher: '"오늘의 약속을 구호로 외워 볼까요? 물어보고 기다려, 좋아하면 해!" 시연 단추로 리듬 블록이 놓이는 것을 보이며 구절마다 손뼉을 친다. "좋다고 할 때까지 계속 물어봐요"라는 말이 나오면 "친구가 망설이면 계속 조르는 것이 좋을까요, 기다려 주는 것이 좋을까요?"라고 되묻는다. 묻고, 대답을 기다리고, 분명한 "좋아"일 때만 한다는 차례를 몸으로 익힌다고 밝힌다.',
          student: '"물어보고 기다려, 좋아하면 해!" 구호를 리듬 블록으로 따라 쳐요.',
          demo: { tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 2, blocks: ['q', 'e', 'qr'], pattern: ['e', 'e', 'e', 'e', 'e', 'e', 'q', 'q', 'q', 'q', 'qr'] }, sequence: [{ rhythm: ['e', 'e', 'e', 'e', 'e', 'e', 'q'] }, { rhythm: ['e', 'e', 'e', 'e', 'e', 'e', 'q', 'q', 'q', 'q', 'qr'] }] },
          art: { draw: 'two paper children facing each other, one asking with an open hand and a small question bubble, the other thinking, paper rhythm blocks marching between them', banner: '물어보고 기다려', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      C({
        id: 'gender.e34.clear-yes.activity.consent-sort', type: 'activity', title: '동의·동의 아님 나누기',
        method: '동의·동의 아님 나누기', tool: 'sortboard', minutes: 14,
        levels: { easy: '문항마다 카드 4장을 바구니 2개에 나누고, 틀리면 바로 되돌아온다.', base: '문항마다 카드 6장을 나눈 뒤 확인한다.', challenge: '헷갈리는 카드(어제 "좋아"라고 함 등) 2장이 더해진 8장을 나누고, 셋째 문항에서 동의가 아닐 때 할 행동을 가려낸다.' },
        activity: {
          title: '동의·동의 아님 나누기', tool: 'sortboard',
          teacher: '"이 대답은 분명한 \'좋아\'일까요?" 카드를 넣을 때마다 "분명해요, 분명하지 않아요" 가운데 하나로 까닭을 말하게 한다. "대답 안 했으니까 괜찮은 거예요"라는 말이 나오면 "말이 없는 것은 좋다는 뜻일까요, 아직 모른다는 뜻일까요?"라고 되묻는다. "어제 좋다고 했어요" 카드에서는 "어제의 좋아가 오늘도 좋아일까요?"라고 묻는다. 망설임·침묵·싫어는 모두 동의가 아니고, 그럴 때는 멈추고 기다리거나 다시 묻는다는 것을 짚는다.',
          task: '대답·상황 카드를 동의와 동의 아님 바구니에 나누고, 동의가 아닐 때 할 일을 골라요.', levels: BOXLV,
          items: [
            BOX('친구의 대답을 나누어요.', ['동의예요', '동의가 아니에요'], [['"좋아!"', '"응, 같이 하자!"', '"그래, 좋아"'], ['"음… 몰라"', '말없이 고개 숙임', '"싫어"']], [[0, 2], [1, 2]], [['"좋아, 해 줘"'], ['"나중에…"']], 0.15),
            BOX('빌려 달라고 할 때의 대답을 나누어요.', ['동의예요', '동의가 아니에요'], [['"써도 돼!" 웃음', '"그래, 빌려줄게"', '고개 끄덕 "좋아"'], ['"글쎄…" 망설임', '대답 없이 딴 곳 봄', '"이건 안 돼"']], [[0, 2], [1, 2]], [['"응, 좋아" 웃음'], ['어제 "좋아"라고 함']], 0.2),
            BOX('동의가 아닐 때 할 일을 나누어요.', ['이렇게 해요', '하면 안 돼요'], [['멈추고 기다리기', '다시 물어보기', '"다음에 하자"'], ['계속 조르기', '그냥 해 버리기', '"왜 안 돼?" 화내기']], [[0, 2], [1, 2]], [['다른 놀이 찾기'], ['몰래 가져가기']], 0.25, { conclude: '분명한 "좋아"만 동의예요. 망설이거나 말이 없으면 멈추고 기다리거나 다시 물어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '친구가 아무 대답도 하지 않으면?', options: ['동의가 아니에요', '좋다는 뜻이에요', '그냥 해도 돼요'], answer: '동의가 아니에요' }] },
      }),
      C({
        id: 'gender.e34.clear-yes.activity.ask-again', type: 'activity', title: '망설이면 다시 묻기',
        method: '다시 묻기 장면 차례', tool: 'story', minutes: 13,
        levels: { easy: '장면 2장을 차례대로 놓고(놓으면 바로 맞는지 알림), 말풍선 1칸을 채운다.', base: '장면 3장을 차례대로 놓고, 말풍선 2칸을 채운다.', challenge: '틀린 장면 한 장을 빼고 3장을 놓으며, 말풍선 3칸을 채운다.' },
        activity: {
          title: '망설이면 다시 묻기', tool: 'story',
          teacher: '"친구가 \'음…\' 하고 망설여요. 그다음 장면은 무엇일까요?" 장면을 놓은 뒤 말풍선을 채우고 소리 내어 읽는다. "빨리 해!" 조르기 카드를 넣으려는 학생에게 "조르면 친구가 정말 좋아서 하는 걸까요?"라고 묻는다. 망설일 때는 "다음에 해도 돼"라고 말해 주고, 나중에 다시 물어보는 것이 친구 마음을 지키는 방법이라는 것을 짚는다.',
          task: '물어보고, 친구가 망설이고, 다시 물어보는 장면을 차례대로 놓고 말풍선을 채워요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORD('같이 놀자고 할 때 차례로 놓아요.', { title: '같이 놀래?' }, [{ id: 'ask', text: '"같이 놀래?" 묻기' }, { id: 'wait', text: '친구가 망설임' }, { id: 'ok', text: '"다음에 해도 돼"' }], [0, 2], { id: 'nag', text: '"빨리 해!" 조르기', why: '조르면 친구가 정말 좋아서 하는 게 아니에요.' }, 0.15),
            ORD('안아도 되는지 물을 때 차례로 놓아요.', { title: '안아도 돼?' }, [{ id: 'ask', text: '"안아도 돼?" 묻기' }, { id: 'wait', text: '"음…" 대답 기다림' }, { id: 'wave', text: '"그럼 손 흔들자"' }], [0, 2], { id: 'grab', text: '그냥 꽉 안기', why: '분명한 "좋아"가 없으면 하지 않아요.' }, 0.2),
            FILL('다시 묻는 말풍선 빈칸을 채워요.', ['하늘', '하늘', '하늘'], [['같이 그네 ___ ?', '탈래'], ['망설여도 괜찮아, ___ 해도 돼.', '다음에'], ['지금은 ___ ?', '어때']], ['당장', '빨리 해', '조르기'], 0.25, { conclude: '친구가 망설이면 "다음에 해도 돼". 나중에 다시 물어요. 분명한 "좋아"일 때만 해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '친구가 망설이면 "___ 해도 돼"라고 말해요.', answer: '다음에' }] },
      }),
      C({
        id: 'gender.e34.clear-yes.activity.consent-path', type: 'activity', title: '갈림길: 분명한 "좋아"를 기다려요',
        method: '동의 갈림길 이어 가기', tool: 'dilemma', minutes: 25,
        levels: { easy: '장면마다 갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '첫 장면은 갈림 3번(묻기 → 망설임 → 기다리기), 나머지 장면은 갈림 2번씩 고르며 결과를 따라간 뒤 고른 이유를 짝에게 말한다.', challenge: '끝 장면에서 근거 카드 3장 가운데 알맞은 2장을 고른다.' },
        activity: {
          title: '갈림길: 분명한 "좋아"를 기다려요', tool: 'dilemma',
          teacher: '"이 대답은 분명한 \'좋아\'였나요?" 결과를 소리 내어 읽고 다음 장면에서 다시 고른 뒤, 짝에게 고른 이유를 말하게 한다. 조르는 길을 고른 학생을 나무라지 않고 "정말 하고 싶었군요. 그런데 친구는 좋아서 빌려준 걸까요?"라고 되물어 다른 길도 가 보게 한다. 망설임·침묵은 동의가 아니고, 한 번 좋다고 했어도 친구는 언제든 마음을 바꿀 수 있다는 것을 짚는다.',
          task: '장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('친구 게임기를 빌리고 싶어요.', {
              text: '가람이의 휴대용 게임기로 놀고 싶어요. 어떻게 할까요?', motif: 'star',
              choices: [
                { id: 'ask', text: '"나 한 판 해 봐도 돼?" 묻는다', result: '가람이가 "음…" 하고 망설여요.', ending: '먼저 물어본 것은 친구 물건을 존중한 일이에요.', next: {
                  text: '가람이가 게임기를 꼭 쥐고 대답을 안 해요.', choices: [
                    { id: 'wait', text: '"괜찮아, 생각해 봐" 기다린다', result: '가람이가 조금 뒤 "다음 쉬는 시간에 빌려줄게"라고 해요.', next: {
                      text: '다음 쉬는 시간, 가람이가 "이제 해도 돼, 좋아!" 해요.', choices: [
                        { id: 'thanks', text: '"고마워!" 하고 조심히 쓴다', result: '둘이 함께 웃으며 놀았어요.', impact: [{ who: '가람', text: '믿음이 생겼어요', tone: 1 }], ending: '기다려서 분명한 "좋아"를 들었어요.' },
                        { id: 'keep', text: '돌려 달래도 계속 한다', result: '가람이가 속상해했어요.', impact: [{ who: '가람', text: '다시 빌려주기 싫어요', tone: -1 }], why: '빌려줘도 그만하자고 하면 바로 돌려줘요.' },
                      ] } },
                    { id: 'nag', text: '"한 판만, 한 판만!" 조른다', result: '가람이가 마지못해 건넸어요.', impact: [{ who: '가람', text: '좋아서 준 게 아니에요', tone: -1 }], why: '조른 끝에 받은 것은 분명한 "좋아"가 아니에요.' },
                    { id: 'take', text: '말없이 가져가 해 본다', result: '가람이가 깜짝 놀라 울먹였어요.', impact: [{ who: '가람', text: '물건을 빼앗긴 것 같아요', tone: -1 }], why: '대답이 없으면 하지 않아요.' },
                  ] } },
                { id: 'grab', text: '"잠깐만!" 하고 가져간다', result: '가람이가 깜짝 놀랐어요.', impact: [{ who: '가람', text: '당황했어요', tone: -1 }], why: '묻지 않고 가져가면 친구 경계를 넘어요.' },
                { id: 'sulk', text: '안 빌려줄 것 같아 토라진다', result: '가람이는 영문을 몰랐어요.', impact: [{ who: '나', text: '서운하기만 해요', tone: 0 }] },
              ] }, [['ask', 'wait', 'thanks']],
            [{ id: 'clear', text: '분명한 "좋아"만 동의라서' }, { id: 'change', text: '친구는 마음을 바꿀 수 있어서' }, { id: 'silent', text: '말이 없으면 좋다는 뜻이라서', why: '말이 없는 것은 동의가 아니에요.' }], ['clear', 'change'], 0.2),
            DIL('친구 공책에 그림을 그리고 싶어요.', {
              text: '짝 이솔이 공책 표지가 멋져서 거기에 그림을 더 그려 주고 싶어요.', motif: 'flower',
              choices: [
                { id: 'ask', text: '"여기에 그려도 돼?" 묻는다', result: '이솔이가 "어… 글쎄" 해요.', ending: '먼저 물어본 것은 잘한 일이에요.', next: {
                  text: '이솔이가 공책을 살짝 끌어당겨요.', choices: [
                    { id: 'stop', text: '"그럼 안 그릴게" 멈춘다', result: '이솔이가 마음을 놓았어요.', impact: [{ who: '이솔', text: '존중받았어요', tone: 1 }], ending: '망설일 때 멈춘 것은 동의를 지킨 일이에요.' },
                    { id: 'just', text: '"멋지게 해 줄게" 그린다', result: '이솔이 얼굴이 굳었어요.', impact: [{ who: '이솔', text: '속상해요', tone: -1 }], why: '"글쎄"는 동의가 아니에요.' },
                    { id: 'tease', text: '"쩨쩨하다" 놀린다', result: '이솔이가 고개를 숙였어요.', impact: [{ who: '이솔', text: '상처받았어요', tone: -1 }], why: '거절한 친구를 탓하지 않아요.' },
                  ] } },
                { id: 'draw', text: '깜짝 선물로 몰래 그린다', result: '이솔이가 공책을 보고 놀랐어요.', impact: [{ who: '이솔', text: '내 물건인데 속상해요', tone: -1 }], why: '좋은 뜻이어도 먼저 물어요.' },
                { id: 'skip', text: '그냥 마음속으로만 생각한다', result: '이솔이는 아무것도 몰랐어요.', impact: [{ who: '이솔', text: '그대로예요', tone: 0 }] },
              ] }, [['ask', 'stop']],
            [{ id: 'hesitate', text: '망설임은 동의가 아니라서' }, { id: 'thing', text: '물건에도 경계가 있어서' }, { id: 'good', text: '좋은 뜻이면 괜찮아서', why: '좋은 뜻이어도 분명한 "좋아"를 들어야 해요.' }], ['hesitate', 'thing'], 0.25),
            DIL('어제는 좋다고 했어요.', {
              text: '어제 하늘이는 "업어 줘도 돼, 좋아!"라고 했어요. 오늘도 업어 주고 싶어요.', motif: 'sun',
              choices: [
                { id: 'ask', text: '"오늘도 업어 줘도 돼?" 다시 묻는다', result: '하늘이가 "오늘은 싫어"라고 해요.', ending: '다시 물어서 오늘 마음을 알았어요.', next: {
                  text: '하늘이가 "그 대신 달리기 하자" 해요.', choices: [
                    { id: 'ok', text: '"좋아, 달리기 하자!"', result: '둘이 신나게 달렸어요.', impact: [{ who: '하늘', text: '편해요', tone: 1 }], ending: '오늘의 대답을 지켜서 둘 다 즐거웠어요.' },
                    { id: 'again', text: '"어제는 됐잖아" 조른다', result: '하늘이가 피했어요.', impact: [{ who: '하늘', text: '불편해요', tone: -1 }], why: '어제의 "좋아"가 오늘의 "좋아"는 아니에요.' },
                    { id: 'huff', text: '"그럼 안 놀아" 돌아선다', result: '하늘이가 서운해했어요.', impact: [{ who: '하늘', text: '미안해져요', tone: -1 }], why: '싫다고 한 친구를 탓하지 않아요.' },
                  ] } },
                { id: 'just', text: '어제 됐으니 그냥 업는다', result: '하늘이가 놀라 소리쳤어요.', impact: [{ who: '하늘', text: '깜짝 놀랐어요', tone: -1 }], why: '한 번 좋다고 했어도 오늘 다시 물어요.' },
                { id: 'wait', text: '하늘이가 먼저 말할 때까지 기다린다', result: '하늘이가 다른 놀이를 하러 갔어요.', impact: [{ who: '나', text: '아직 몰라요', tone: 0 }] },
              ] }, [['ask', 'ok']],
            [{ id: 'today', text: '마음은 날마다 바뀔 수 있어서' }, { id: 'askagain', text: '다시 물어야 알 수 있어서' }, { id: 'once', text: '한 번 좋으면 계속 좋아서', why: '한 번 좋다고 했어도 다시 물어요.' }], ['today', 'askagain'], 0.3, { conclude: '묻고, 기다리고, 분명한 "좋아"일 때만 해요. 어제의 "좋아"도 오늘 다시 물어요.' }),
          ],
        },
        worksheet: {
          items: [
            { type: 'choice', prompt: '어제 좋다고 한 친구에게 오늘은 어떻게 할까요?', options: ['오늘 다시 물어요', '묻지 않고 해요', '어제 말을 따라요'], answer: '오늘 다시 물어요' },
            { type: 'short', prompt: '친구가 망설일 때 내가 할 말을 한 줄로 써요.' },
          ],
        },
        notes: '장면은 물건 빌리기·놀이처럼 일상 장면으로만 두고 몸에 관한 성적인 장면은 쓰지 않는다. 인물은 가명의 가상 인물이다.',
      }),
      C({
        id: 'gender.e34.clear-yes.wrap.consent-rule', type: 'wrap', title: '동의 차례 규칙 잇기',
        method: '동의 차례 규칙 잇기', tool: 'pattern', minutes: 6,
        levels: { easy: '"묻기·기다림·확인"이 되풀이되는 줄에서 빈칸 1개를 채운다.', base: '빈칸 2개를 채운다.', challenge: '규칙에 맞지 않게 끼어든 조각("조르기")을 찾아 고친다.' },
        wrap: {
          teacher: '"동의는 늘 같은 차례로 해요. 묻고, 기다리고, 분명한 좋아인지 확인하기!" 규칙 줄을 함께 소리 내어 읽고 빈칸을 채운다. 빈칸에 "확인"을 먼저 넣는 학생에게 "묻지도 않았는데 무엇을 확인할까요?"라고 되묻는다. 도전 줄에서는 "조르기" 조각을 찾아 왜 차례에 맞지 않는지 말하게 한다. 이 차례는 놀이·물건·몸 어디에나 똑같이 쓴다는 것을 마무리로 말한다.',
          exitTicket: [
            PATQ('묻기·기다림·확인 규칙에 맞게 빈칸을 채워요.', { seq: ['묻기', '기다림', '확인', '묻기', null, '확인'], fill: ['기다림'] }, { seq: ['묻기', '기다림', '확인', '묻기', null, '확인', '묻기', '기다림', null], fill: ['기다림', '확인'] }, { prompt: '규칙에 맞지 않는 조각을 찾아요.', seq: ['묻기', '기다림', '확인', '묻기', '조르기', '확인'], question: '끼어든 조각은?', at: 4 }),
            { type: 'choice', prompt: '"음…" 하고 망설이는 대답은 동의인가요?', options: ['동의가 아니에요', '동의예요', '반쯤 동의예요'], answer: 0, difficulty: 0.1, explain: '분명한 "좋아"만 동의예요. 망설이면 기다려요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '동의 차례',
          items: [
            { type: 'choice', prompt: '동의를 구하는 바른 차례는?', options: ['묻기 → 기다림 → 확인', '하기 → 묻기 → 기다림', '조르기 → 하기'], answer: '묻기 → 기다림 → 확인' },
            { type: 'short', prompt: '분명한 "좋아"가 아닌 대답을 하나 써요.' },
          ],
          easy: { note: '묻고, 기다리고, 확인해요.', items: [{ type: 'choice', prompt: '맨 처음 할 일은?', options: ['묻기', '하기'], answer: '묻기' }] },
        },
      }),
      C({
        id: 'gender.e34.clear-yes.wrap.consent-badge', type: 'wrap', title: '"분명한 좋아" 배지',
        method: '"분명한 좋아" 배지', tool: 'collage', minutes: 6,
        levels: { easy: '색종이 조각 2개 이상으로 배지를 꾸미고 점검 2칸에 표시한다.', base: '조각 3개 이상으로 꾸미고 점검 3칸에 표시한다.', challenge: '조각 4개 이상으로 꾸미고, 다시 묻는 말을 배지 아래 종이에 써 붙인 뒤 점검 4칸에 표시한다.' },
        wrap: {
          teacher: '"오늘의 약속을 배지로 만들어 볼까요? \'분명한 좋아만 OK\'!" 색종이 조각으로 배지를 꾸미고 글은 배지 아래 종이에 쓰게 한다. "배지에 \'좋아\'만 크게 쓸래요"라는 말이 나오면 "망설일 때는 어떻게 하기로 했지요?"라고 물어 다시 묻는 말도 떠올리게 한다. 분명한 "좋아"만 동의이고, 망설이면 기다리거나 다시 묻는다는 것을 마무리로 말한다.',
          exitTicket: [
            COL('색종이 조각으로 "분명한 좋아" 배지를 꾸며요.', ['배지를 꾸몄어요', '약속 글을 썼어요', '망설임은 기다려요', '다시 묻는 말을 붙였어요'], 2, 3, 4),
            { type: 'choice', prompt: '친구가 대답 없이 고개를 숙이면?', options: ['멈추고 기다려요', '좋다는 뜻이에요', '그냥 해요'], answer: 0, difficulty: 0.1, explain: '말이 없는 것은 동의가 아니에요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '분명한 "좋아"',
          items: [
            { type: 'check', prompt: '동의인 대답에 표시해요.', options: ['"좋아!"', '"음… 몰라"', '(말없이 고개 숙임)', '"그래, 같이 하자"'] },
            { type: 'short', prompt: '친구가 망설일 때 다시 묻는 말을 써요.' },
          ],
          easy: { note: '분명하게 "좋아"라고 했는지 보아요.', items: [{ type: 'choice', prompt: '"싫어"는 동의인가요?', options: ['아니에요', '맞아요'], answer: '아니에요' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 3학년 · 네 잘못이 아니야: 성폭력 알아차리고 도움 청하기 (research-mandatory §2 초: 몸의 경계·'싫어요' 말하기, 성폭력 신고 방법)
  // ======================================================================================================
  {
    const C = T('not-your-fault', 3);
    const SCHOOL = {
      title: '우리 학교(칸 지도)', grid: [6, 4],
      regions: [
        { name: '우리 교실', cells: [[0, 0], [1, 0]] }, { name: '보건실', cells: [[2, 0]] }, { name: '상담실', cells: [[3, 0]] }, { name: '교무실', cells: [[4, 0], [5, 0]] },
        { name: '복도', cells: [[0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1]] }, { name: '도서관', cells: [[0, 2], [1, 2]] }, { name: '급식실', cells: [[2, 2], [3, 2]] },
        { name: '운동장', cells: [[4, 2], [5, 2], [0, 3], [1, 3], [2, 3], [3, 3], [4, 3], [5, 3]] },
      ],
    };
    const PINQ = (prompt, region, why, d) => {
      const it = PIN(SCHOOL, prompt, region, why, d);
      it.levels.easy = { toolOptions: { readout: true } };
      return EX('map', it);
    };
    M.push(
      C({
        id: 'gender.e34.not-your-fault.intro.signal-body', type: 'intro', title: '불편할 때 몸이 보내는 신호',
        method: '불편할 때 몸 신호 찾기', tool: 'body', minutes: 6,
        levels: { easy: '종이 몸에서 신호가 오는 곳 2곳(가슴·배)을 함께 짚는다.', base: '신호 3곳(목 더함)을 짚는다.', challenge: '신호마다 할 행동("싫어요" 말하기·자리 피하기·알리기)을 짝에게 말해 본다(교사 진행).' },
        intro: {
          teacher: '"가상 친구 하루가 어떤 사람의 부탁이 왠지 불편해요. 하루의 몸은 어디에서 신호를 보낼까요?" 시연 단추로 종이 몸의 가슴·배, 이어서 목이 짚이는 것을 보인다. "신호는 참으면 사라져요"라는 말이 나오면 "몸이 보내는 신호는 \'지금 싫어, 도움이 필요해\'라는 뜻일 수 있어요. 들어 주어야 할까요?"라고 되묻는다. 불편한 신호가 들면 그 느낌을 믿고 거절하고, 피하고, 알리면 된다는 것을 오늘 익힌다고 밝힌다.',
          student: '그림 속 하루가 불편할 때 몸에서 신호가 오는 곳을 찾아요.',
          demo: { tool: 'body', options: { mode: 'parts', parts: ['가슴', '배', '목', '어깨', '무릎', '발목'], names: true }, sequence: [{ parts: ['가슴', '배'] }, { parts: ['가슴', '배', '목'] }] },
          art: { draw: 'a paper child standing still with a small worried face, soft paper wiggle lines around the chest and tummy and a little tight line at the throat', banner: '몸이 보내는 신호', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '그림 속 가상 인물의 신호로만 이야기한다. "이런 느낌이 든 적 있어요?"라고 묻지 않는다. 몸 교구에 얼굴·손 칸이 없어 "얼굴이 화끈해요"는 교사가 말로 덧붙인다.',
      }),
      C({
        id: 'gender.e34.not-your-fault.intro.myth-check', type: 'intro', title: '맞는 말일까, 잘못된 말일까',
        method: '맞는 말·잘못된 말 나누기', tool: 'sortboard', minutes: 6,
        levels: { easy: '카드 3장을 맞아요·잘못된 말 바구니에 함께 나눈다.', base: '카드 5장을 나눈다.', challenge: '잘못된 말 카드 하나를 맞는 말로 고쳐 말한다(교사 진행).' },
        intro: {
          teacher: '"성폭력에 대해 이런 말들이 있어요. 맞는 말일까요, 잘못된 말일까요?" 시연 단추로 카드가 바구니에 들어가는 것을 보인다. "옷 때문이에요" 카드에서 멈추고 "어떤 옷을 입었든, 잘못은 누구에게 있을까요?"라고 묻는다. 잘못은 언제나 그 일을 한 사람에게 있고, 피해를 입은 사람의 잘못이 아니며, 말한 것은 잘한 일이라는 것을 분명히 말한다.',
          student: '성폭력에 대한 말 카드를 맞아요·잘못된 말 바구니에 나누어요.',
          demo: { tool: 'sortboard', options: { slots: ['맞아요', '잘못된 말'], cards: ['피해자 잘못이 아니에요', '옷 때문이에요', '말한 것은 잘한 일', '아는 사람은 안 그래요', '도움을 청해도 돼요'] }, sequence: [{ sort: { 맞아요: ['피해자 잘못이 아니에요'], '잘못된 말': ['옷 때문이에요', '아는 사람은 안 그래요'] } }, { sort: { 맞아요: ['피해자 잘못이 아니에요', '말한 것은 잘한 일', '도움을 청해도 돼요'], '잘못된 말': ['옷 때문이에요', '아는 사람은 안 그래요'] } }] },
          art: { draw: 'two paper baskets on a shelf labelled with a check mark and a cross, paper cards floating toward them, a calm paper teacher figure pointing to the check basket', banner: '맞는 말을 골라요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '"성폭력"은 원치 않는데 몸이나 마음을 불편하게 하는 성적인 행동이라고 짧게만 말하고, 행동을 자세히 묘사하지 않는다.',
      }),
      C({
        id: 'gender.e34.not-your-fault.activity.three-steps-order', type: 'activity', title: '거절·피하기·알리기',
        method: '거절·피하기·알리기 차례 정하기', tool: 'story', minutes: 14,
        levels: { easy: '장면 2장(거절·알리기)을 차례대로 놓고(놓으면 바로 맞는지 알림), 말풍선 1칸을 채운다.', base: '장면 3장을 차례대로 놓고 차례의 이유를 짝에게 말하며, 말풍선 2칸을 채운다.', challenge: '틀린 장면(비밀로 하기) 한 장을 빼고 3장을 놓으며, 말풍선 3칸에 할 말을 넣는다.' },
        activity: {
          title: '거절·피하기·알리기', tool: 'story',
          teacher: '"하루가 불편한 부탁을 받았어요. 맨 먼저 무엇을 할까요? 그다음은요?" 장면을 놓은 뒤 짝에게 "먼저 ○○를 해, 왜냐하면…"으로 차례의 이유를 말하게 한다. "비밀로 하기" 카드를 넣으려는 학생에게 "비밀이라고 하면 하루가 도움을 받을 수 있을까요?"라고 묻는다. 아는 사람이어도, 어른이어도 불편하면 거절하고 피하고 알려도 된다는 것, 거절을 못 했더라도 알리기는 언제든 할 수 있고 그것도 잘한 일이라는 것을 짚는다.',
          task: '불편한 부탁을 받았을 때 할 일 장면을 차례대로 놓고, 말풍선에 할 말을 넣어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORD('불편한 부탁을 받았을 때 차례로 놓아요.', { title: '하루가 할 일' }, [{ id: 'no', text: '"싫어요" 말하기' }, { id: 'away', text: '그 자리 피하기' }, { id: 'tell', text: '믿는 어른께 알리기' }], [0, 2], { id: 'secret', text: '비밀로 하기', why: '불편한 일은 비밀로 두지 않고 알려요.' }, 0.15),
            ORD('아는 사람이 "비밀이야" 할 때 차례로 놓아요.', { title: '아는 사람이라도' }, [{ id: 'loud', text: '"안 돼요" 크게 말하기' }, { id: 'go', text: '사람 많은 곳으로 가기' }, { id: 'parent', text: '보호자께 바로 말하기' }], [0, 2], { id: 'keep', text: '아는 사람이니 참기', why: '아는 사람이어도 불편하면 거절하고 알려요.' }, 0.2),
            FILL('하루가 할 말을 말풍선에 넣어요.', ['하루', '하루', '하루'], [['"___, 싫어요!"', '그만해요'], ['"저 ___ 갈게요."', '먼저'], ['"선생님, ___ 일이 있었어요."', '불편한']], ['괜찮아요', '비밀이에요', '참을게요'], 0.25, { conclude: '"싫어요" 말하기 → 피하기 → 믿는 어른께 알리기. 아는 사람이어도 똑같아요. 말한 것은 잘한 일이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '불편한 일을 거절하지 못했다면 어떻게 할까요?', options: ['지금이라도 믿는 어른께 알려요', '이제는 늦었으니 참아요', '내 잘못이니 숨겨요'], answer: '지금이라도 믿는 어른께 알려요' }] },
        notes: '"불편한 부탁"은 무엇인지 자세히 묘사하지 않는다. 학생에게 비슷한 일이 있었는지 묻지 않는다. 수업 중 걱정되는 말을 들으면 그 자리에서 캐묻지 말고 수업 뒤 조용히 듣고 학교 절차를 따른다.',
      }),
      C({
        id: 'gender.e34.not-your-fault.activity.say-no-practice', type: 'activity', title: '단호하게 "싫어요" 연습',
        method: '단호하게 거절 연습', tool: 'timer', minutes: 13,
        levels: { easy: '연습 약속 점검 뒤 동작 2개(눈 보기·크게 말하기)의 차례를 맞추고, 짝 점검 2칸에 표시한다.', base: '동작 3개(손바닥 펴기 더함)의 차례를 맞추고, 짝 점검 3칸에 표시한다.', challenge: '동작 3개 차례를 맞추고, 짝 점검 3칸을 표시한 뒤 짝의 점검표에도 표시해 준다(교사 진행).' },
        activity: {
          title: '단호하게 "싫어요" 연습', tool: 'timer',
          teacher: '"작은 목소리로 고개를 숙이고 \'싫어요\' 하면 상대가 알아들을까요?" 교사가 두 가지 말투를 보여 준 뒤, 짝과 번갈아 눈 보기 → 손바닥 펴기 → 크게 말하기를 연습한다. 연습 상대 역할은 "부탁하는 흉내만, 몸은 닿지 않아요"라고 정해 준다. 웃음이 터지면 "연습도 진지하게 해야 진짜 때 몸이 기억해요"라고 말한다. 연습이 끝나면 짝이 해낸 칸에 표시해 주게 한다.',
          task: '연습 약속을 점검하고, 거절 동작의 차례를 맞춘 뒤 짝과 번갈아 연습해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '연습 전에 약속에 모두 표시해요.', toolOptions: { title: '거절 연습 약속', safety: ['몸은 닿지 않아요', '부탁 흉내만 해요', '역할을 바꿔 해요'] }, target: { safety: true }, difficulty: 0.1 },
            { prompt: '단호하게 거절하는 동작을 차례대로 놓아요.', toolOptions: { title: '"싫어요" 동작', cards: ['크게 말해요', '손바닥을 펴요', '눈을 봐요'] }, target: { order: ['눈을 봐요', '손바닥을 펴요', '크게 말해요'] }, difficulty: 0.2,
              levels: { easy: { prompt: '단호하게 거절하는 동작 2개를 차례대로 놓아요.', toolOptions: { cards: ['크게 말해요', '눈을 봐요'] }, target: { order: ['눈을 봐요', '크게 말해요'] } } } },
            { prompt: '짝이 해낸 것에 표시해 주어요.', toolOptions: { title: '짝 점검' }, target: { selfCheck: ['눈을 봤어요', '손바닥을 폈어요', '크게 말했어요'] }, difficulty: 0.1,
              levels: { easy: { prompt: '짝이 해낸 것에 표시해 주어요(2칸).', target: { selfCheck: ['눈을 봤어요', '크게 말했어요'] } } },
              conclude: '눈을 보고, 손바닥을 펴고, 크게 "싫어요". 그다음 자리를 피하고 믿는 어른께 알려요.' },
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '연습에서 내가 한 것에 표시해요.', options: ['눈을 보고 말했어요', '손바닥을 폈어요', '크게 말했어요'] }] },
        notes: '역할 연습에서 실제 부탁 내용이나 몸에 닿는 동작을 쓰지 않는다. 연습을 어려워하는 학생은 교사와 함께하거나 보기만 해도 된다.',
      }),
      C({
        id: 'gender.e34.not-your-fault.activity.friend-tells', type: 'activity', title: '갈림길: 친구가 털어놓을 때',
        method: '친구가 털어놓았을 때', tool: 'dilemma', minutes: 25,
        levels: { easy: '장면마다 갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '장면마다 갈림 2번(어떤 말을 할까 → 어느 어른께 갈까), 보기 3개씩 고르며 결과를 따라간다.', challenge: '갈림 2번을 지난 뒤 근거 카드 3장 가운데 알맞은 2장을 고른다.' },
        activity: {
          title: '친구가 털어놓을 때', tool: 'dilemma',
          teacher: '"친구가 불편한 일을 말해 주었어요. 어떤 말이 친구에게 힘이 될까요?" 결과를 소리 내어 읽고 다음 장면에서 어느 어른께 갈지 고른다. "네가 조심했어야지"를 고른 학생에게 "그 말을 들은 친구는 다음에도 말할 수 있을까요? 잘못은 누구에게 있지요?"라고 되묻는다. 친구에게 자세히 캐묻지 않고 "말해 줘서 고마워, 네 잘못이 아니야, 같이 어른께 가자"라고 하는 것이 우리 몫이라는 것을 짚는다. 담임·보건 선생님·보호자, 그리고 학교가 알려 준 신고·상담 번호가 도움 길이라고 말한다.',
          task: '친구가 불편한 일을 털어놓는 장면을 읽고 보기를 골라요. 결과를 보고 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('친구가 불편한 일을 말해 줘요.', {
              text: '친구 바다가 "어떤 사람이 불편하게 해서 무서웠어"라고 조용히 말해요.', motif: 'cloud',
              choices: [
                { id: 'thanks', text: '"말해 줘서 고마워. 같이 선생님께 가자"', result: '바다가 고개를 끄덕였어요.', ending: '고맙다고 말해 준 것이 바다에게 큰 힘이 됐어요.', next: {
                  text: '쉬는 시간이에요. 누구에게 갈까요?', choices: [
                    { id: 'homeroom', text: '담임 선생님께 함께 간다', result: '선생님이 바다 이야기를 차분히 들어 주셨어요.', impact: [{ who: '바다', text: '도움을 받기 시작했어요', tone: 1 }], ending: '함께 알려서 바다가 도움을 받았어요.' },
                    { id: 'nurse', text: '보건 선생님께 함께 간다', result: '보건 선생님이 들어 주시고 담임 선생님과 함께 도와주셨어요.', impact: [{ who: '바다', text: '마음이 놓였어요', tone: 1 }], ending: '믿는 어른께 알려서 바다가 도움을 받았어요.' },
                    { id: 'nobody', text: '아무에게도 말하지 않는다', result: '바다는 혼자 걱정을 안고 있어요.', impact: [{ who: '바다', text: '계속 무서워요', tone: -1 }], why: '불편한 일은 어른과 함께 해결해요.' },
                  ] } },
                { id: 'blame', text: '"네가 조심했어야지"', result: '바다가 고개를 숙이고 입을 닫았어요.', impact: [{ who: '바다', text: '내 탓 같아요', tone: -1 }], why: '잘못은 그 일을 한 사람에게 있어요. 바다 잘못이 아니에요.' },
                { id: 'secret', text: '"비밀로 해 줄게"', result: '바다는 도움을 받지 못했어요.', impact: [{ who: '바다', text: '혼자 견뎌요', tone: -1 }], why: '불편한 일은 비밀로 두지 않고 어른께 알려요.' },
              ] }, [['thanks', 'homeroom'], ['thanks', 'nurse']],
            [{ id: 'notfault', text: '바다 잘못이 아니라서' }, { id: 'adult', text: '어른은 지켜 줄 방법을 알아서' }, { id: 'tattle', text: '말하면 고자질이라서', why: '알리기는 친구를 지키는 일이에요.' }], ['notfault', 'adult'], 0.2),
            DIL('친구가 자기 탓이라고 해요.', {
              text: '바다가 "내가 그 옷을 입어서 그런가 봐"라고 해요.', motif: 'cloud',
              choices: [
                { id: 'notyou', text: '"아니야, 네 잘못이 아니야"', result: '바다가 조금 울먹이다 고개를 들었어요.', ending: '"네 잘못이 아니야"는 바다에게 꼭 필요한 말이었어요.', next: {
                  text: '바다가 "그래도 말하기 무서워"라고 해요.', choices: [
                    { id: 'with', text: '"내가 같이 가 줄게"', result: '둘이 함께 상담 선생님을 찾아갔어요.', impact: [{ who: '바다', text: '든든해요', tone: 1 }], ending: '함께 가 준 것만으로도 바다가 용기를 냈어요.' },
                    { id: 'alone', text: '"그럼 혼자 해 봐"', result: '바다는 결국 말하지 못했어요.', impact: [{ who: '바다', text: '외로워요', tone: -1 }], why: '무서울 때는 함께 가 주어요.' },
                    { id: 'forget', text: '"그냥 잊어버려"', result: '바다의 걱정은 그대로예요.', impact: [{ who: '바다', text: '계속 무서워요', tone: -1 }], why: '잊으라고 하지 않고 어른께 함께 가요.' },
                  ] } },
                { id: 'clothes', text: '"그 옷은 좀 그랬어"', result: '바다가 더 움츠러들었어요.', impact: [{ who: '바다', text: '더 아파요', tone: -1 }], why: '어떤 옷을 입었든 피해를 입은 사람 잘못이 아니에요.' },
                { id: 'silent', text: '아무 말 없이 듣기만 한다', result: '바다가 혼자 생각에 잠겼어요.', impact: [{ who: '바다', text: '아직 걱정돼요', tone: 0 }] },
              ] }, [['notyou', 'with']],
            [{ id: 'never', text: '옷 때문에 생기는 일이 아니라서' }, { id: 'together', text: '함께 가면 용기가 나서' }, { id: 'care', text: '조심 안 한 탓이라서', why: '잘못은 늘 그 일을 한 사람에게 있어요.' }], ['never', 'together'], 0.25),
            DIL('아는 사람이라 말하기 어려워해요.', {
              text: '바다가 "아는 사람이라 말하면 안 될 것 같아"라고 해요.', motif: 'house',
              choices: [
                { id: 'still', text: '"아는 사람이어도 말해도 돼"', result: '바다가 "정말?" 하고 물었어요.', ending: '아는 사람이어도 말해도 된다는 것을 알려 줬어요.', next: {
                  text: '바다가 "누구한테 말하지?"라고 해요.', choices: [
                    { id: 'parent', text: '"믿는 보호자나 선생님께 말하자"', result: '바다가 보호자께 먼저 말하기로 했어요.', impact: [{ who: '바다', text: '방법을 알았어요', tone: 1 }], ending: '믿는 어른에게 알리는 길을 함께 찾았어요.' },
                    { id: 'friends', text: '"반 친구들한테 다 말하자"', result: '이야기가 퍼져 바다가 더 힘들어했어요.', impact: [{ who: '바다', text: '창피해요', tone: -1 }], why: '여기저기 퍼뜨리지 않고 믿는 어른께만 알려요.' },
                    { id: 'later', text: '"나중에 생각하자"', result: '바다는 계속 걱정했어요.', impact: [{ who: '바다', text: '불안해요', tone: -1 }], why: '미루지 말고 믿는 어른께 알려요.' },
                  ] } },
                { id: 'known', text: '"아는 사람이면 괜찮을 거야"', result: '바다는 말하지 않기로 했어요.', impact: [{ who: '바다', text: '혼자 참아요', tone: -1 }], why: '아는 사람이어도 불편하게 했다면 잘못이에요.' },
                { id: 'skip', text: '다른 이야기로 바꾼다', result: '바다는 다시 말을 꺼내지 못했어요.', impact: [{ who: '바다', text: '외로워요', tone: -1 }] },
              ] }, [['still', 'parent']],
            [{ id: 'anyone', text: '아는 사람이어도 잘못이라서' }, { id: 'trust', text: '믿는 어른이 도울 수 있어서' }, { id: 'family', text: '아는 사람은 그러지 않아서', why: '아는 사람도 그럴 수 있어요. 그래도 피해자 잘못이 아니에요.' }], ['anyone', 'trust'], 0.3, { conclude: '"말해 줘서 고마워, 네 잘못이 아니야, 같이 가자." 담임·보건·상담 선생님, 보호자께 함께 알려요.' }),
          ],
        },
        worksheet: {
          items: [
            { type: 'choice', prompt: '친구가 불편한 일을 말해 줄 때 할 말은?', options: ['"말해 줘서 고마워"', '"네가 조심했어야지"', '"비밀로 할게"'], answer: '"말해 줘서 고마워"' },
            { type: 'short', prompt: `도움을 받을 수 있는 곳과 ${HELPNO}를 선생님과 함께 써요.` },
          ],
        },
        notes: `친구가 털어놓는 내용(무슨 일이 있었는지)은 쓰지 않았다. 활동지 '도움 번호' 칸은 체계도에 번호가 없어 비워 두었다 — 교사가 학교가 확인한 신고·상담 번호를 함께 적는다(${HELPNO}).`,
      }),
      C({
        id: 'gender.e34.not-your-fault.wrap.help-map', type: 'wrap', title: '학교 안 도움 지도',
        method: '학교 안 도움 지도', tool: 'map', minutes: 6,
        levels: { easy: '핀을 꽂으면 그 칸의 이름이 바로 보인다(교실·상담실 2곳).', base: '이름 표시 없이 교실·상담실에 핀을 꽂고, 보건실은 고르기 문항으로 답한다.', challenge: '핀을 꽂은 뒤 그곳에서 만날 어른도 보기에서 고른다.' },
        wrap: {
          teacher: '"불편한 일이 있을 때 학교 안 어디로 가면 될까요?" 지도에 핀을 꽂기 전에 우리 교실에서 그곳까지 가는 길을 손가락으로 따라가 보게 한다. 운동장에 핀을 꽂는 학생에게 "운동장에서는 누가 이야기를 들어 줄 수 있을까요?"라고 되묻는다. 담임 선생님, 상담 선생님, 보건 선생님 모두 도와줄 어른이고, 학교가 알려 준 신고·상담 번호도 도움 길이라는 것을 마무리로 말한다.',
          exitTicket: [
            PINQ('담임 선생님께 말하러 갈 곳에 핀을 꽂아요.', '우리 교실', { q: '이곳에서 만날 어른은?', choices: ['담임 선생님', '모르는 사람', '아무도 없어요'], answer: 0 }, 0.15),
            PINQ('마음 이야기를 오래 나눌 곳에 핀을 꽂아요.', '상담실', { q: '이곳에서 만날 어른은?', choices: ['상담 선생님', '운동부 친구', '아무도 없어요'], answer: 0 }, 0.2),
            { type: 'choice', prompt: '몸이 아프거나 다쳤을 때 함께 갈 곳은?', options: ['보건실', '도서관', '급식실'], answer: 0, difficulty: 0.1, explain: '보건실의 보건 선생님도 도와줄 어른이에요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '학교 안 도움 지도',
          items: [
            { type: 'table', prompt: '장소마다 만날 어른을 써요.', columns: ['장소', '만날 어른'], cells: [['우리 교실', ''], ['상담실', ''], ['보건실', '']], answer: '담임 선생님, 상담 선생님, 보건 선생님' },
            { type: 'short', prompt: `${HELPNO}를 선생님과 함께 써요.` },
          ],
          easy: { note: '학교에는 도와줄 어른이 많아요.', items: [{ type: 'choice', prompt: '불편한 일이 있으면?', options: ['선생님께 말해요', '혼자 참아요'], answer: '선생님께 말해요' }] },
        },
        notes: '지도는 가상의 학교다. 우리 학교의 실제 상담실·보건실 위치는 교사가 말로 알려 준다.',
      }),
      C({
        id: 'gender.e34.not-your-fault.wrap.not-fault-chant', type: 'wrap', title: '"네 잘못이 아니야" 구호',
        method: '"네 잘못이 아니야" 구호', tool: 'keyboard', minutes: 6,
        levels: { easy: '앞 구절("네 잘못이 아니야") 한 마디를 박 수를 보며 친다.', base: '구호 전체 두 마디("네 잘못이 아니야, 말해 줘서 고마워")를 친다.', challenge: '박 수 표시 없이 구호를 친 뒤, 짝과 앞·뒤 구절을 주고받는다(교사 진행).' },
        wrap: {
          teacher: '"오늘 가장 중요한 말을 구호로 남겨 볼까요? 네 잘못이 아니야, 말해 줘서 고마워!" 구절마다 손뼉을 치며 함께 외친 뒤 리듬 블록으로 친다. 구호를 장난스럽게 외치는 학생에게 "이 말이 꼭 필요한 친구가 있다면 어떤 목소리로 들려주고 싶나요?"라고 묻는다. 잘못은 늘 그 일을 한 사람에게 있고, 말한 사람은 잘한 것이라는 것을 마무리로 말한다.',
          exitTicket: [
            RHY('"네 잘못이 아니야, 말해 줘서 고마워" 리듬을 쳐요.', ['q', 'e', 'e', 'e', 'e', 'q'], ['e', 'e', 'e', 'e', 'e', 'e', 'q']),
            { type: 'choice', prompt: '불편한 일을 겪은 친구에게 해 줄 말은?', options: ['"네 잘못이 아니야"', '"왜 가만있었어?"', '"네가 조심했어야지"'], answer: 0, difficulty: 0.1, explain: '잘못은 그 일을 한 사람에게 있어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '네 잘못이 아니야',
          items: [
            { type: 'choice', prompt: '성폭력에 대한 맞는 말은?', options: ['피해를 입은 사람 잘못이 아니에요', '옷 때문에 생겨요', '아는 사람은 안 그래요'], answer: '피해를 입은 사람 잘못이 아니에요' },
            { type: 'short', prompt: '불편한 일이 있을 때 이야기할 믿는 어른을 한 명 써요.' },
          ],
          easy: { note: '말한 것은 잘한 일이에요.', items: [{ type: 'choice', prompt: '불편한 일은 누구 잘못?', options: ['그 일을 한 사람', '나'], answer: '그 일을 한 사람' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 3학년 · 그림책과 광고 속 성 역할, 꿈은 흥미로 (research-mandatory §2 초: 성별 고정관념 깨기)
  // ======================================================================================================
  {
    const C = T('roles-in-media', 3);
    const ADS = { type: 'bar', title: '장난감 광고 속 아이(가상의 광고 8장)', unit: '장', xLabel: '광고에 나온 아이', yLabel: '광고 수', max: 6, step: 1 };
    const A8 = [['남자아이만', 5], ['여자아이만', 2], ['함께 나옴', 1]];
    M.push(
      C({
        id: 'gender.e34.roles-in-media.intro.ad-spot', type: 'intro', title: '광고를 본 친구의 마음',
        method: '광고 장면 속 마음 찾기', tool: 'emotion', minutes: 6,
        levels: { easy: '광고 장면 2개(남자아이만 나오는 로봇 광고·모두 함께 노는 광고)에 마음 카드를 함께 짝 짓는다.', base: '광고 장면 4개(여자아이만 나오는 요리 놀이 광고·혼자 노는 광고 더함)에 마음 카드를 짝 짓는다.', challenge: '바꾼 광고를 본 마음과 처음 광고를 본 마음을 비교해 말한다(교사 진행).' },
        intro: {
          teacher: '"로봇을 좋아하는 여자아이가 남자아이만 나오는 로봇 광고를 보았어요. 어떤 마음일까요?" 시연 단추로 광고 장면마다 마음 카드가 놓이는 것을 보인다. "광고는 그냥 보여 주는 거라 상관없어요"라는 말이 나오면 "광고를 보고 \'이건 나랑 상관없는 장난감이구나\' 생각할 수도 있을까요?"라고 되묻는다. 광고 속 장면도 우리 생각에 영향을 줄 수 있다는 것을 오늘 알아본다고 밝힌다.',
          student: '장난감 광고 장면을 본 친구의 마음 카드를 짝 지어요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'robot', label: '남자아이만 로봇 광고' }, { id: 'all', label: '모두 함께 노는 광고' }, { id: 'cook', label: '여자아이만 요리 광고' }, { id: 'alone', label: '혼자만 노는 광고' }], cards: ['속상함', '신남', '걱정', '편안함'], shuffle: false }, sequence: [{ match: { robot: '속상함', all: '신남' } }, { match: { robot: '속상함', all: '신남', cook: '걱정', alone: '편안함' } }] },
          art: { draw: 'a paper television screen showing a toy robot advertisement with only paper boys, and a paper girl watching it from a sofa holding her own small robot', banner: '광고를 본 마음은?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '광고 장면은 모두 가상이다. 실제 상품·회사 이름을 쓰지 않는다. 짝 지은 마음은 예시이고 학생마다 다르게 느낄 수 있다고 말해 준다.',
      }),
      C({
        id: 'gender.e34.roles-in-media.intro.toy-count', type: 'intro', title: '장난감 광고 속 아이 세기',
        method: '장난감 광고 속 성별 세기', tool: 'chart', minutes: 6,
        levels: { easy: '가상 광고 4장을 함께 세어 막대가 오르는 것을 본다.', base: '가상 광고 8장을 센 막대그래프를 읽는다.', challenge: '그래프에서 한쪽으로 치우친 곳을 찾아 말한다(교사 진행).' },
        intro: {
          teacher: '"가상의 장난감 광고 8장에 나온 아이를 세어 볼까요?" 시연 단추로 막대가 오르는 것을 보이고 가장 많은 막대를 함께 고른다. "남자아이 장난감이 많아서 그래요"라는 말이 나오면 "장난감에 남자 것, 여자 것이 정해져 있을까요?"라고 되묻는다. 광고가 한쪽 아이만 보여 주면 장난감도 한쪽 것처럼 보일 수 있다는 것을 짚는다.',
          student: '가상의 장난감 광고에 나온 아이를 센 그래프를 보고 가장 많은 쪽을 골라요.',
          demo: { tool: 'chart', options: Object.assign({}, ADS, { mode: 'read', data: A8, question: '가장 많은 쪽은?', choices: A8.map((d) => d[0]) }), sequence: [{ pick: 0 }] },
          art: { draw: 'eight small paper toy advertisement cards pinned on a board, a paper child counting them with a pencil and a little paper bar chart beside', banner: '누가 많이 나올까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '그래프 자료는 가상이다(화면 제목에 밝힘). 실제 광고를 세어 보려면 교사가 고른 광고를 함께 본다.',
      }),
      C({
        id: 'gender.e34.roles-in-media.activity.rewrite-scene', type: 'activity', title: '그림책 장면 바꿔 놓기',
        method: '그림책 장면 바꿔 놓기', tool: 'story', minutes: 14,
        levels: { easy: '장면 2줄을 바꾼 장면 카드와 잇고(놓으면 바로 맞는지 알림), 고르기 4장, 말풍선 1칸을 한다.', base: '장면 4줄을 잇고, 고르기 6장, 말풍선 2칸을 하며 바꾼 이유를 짝과 말한다.', challenge: '남는 카드 한 장을 가려내며 잇고, 고르기 8장, 말풍선 3칸까지 바꾼다.' },
        activity: {
          title: '그림책 장면 바꿔 놓기', tool: 'story',
          teacher: '"이 그림책에서는 엄마만 요리해요. 누구나 할 수 있는 장면으로 바꾸면 어떤 그림이 될까요?" 장면을 이은 뒤 짝에게 "나는 이렇게 바꿨어, 왜냐하면…"으로 이유를 말하게 한다. "엄마가 요리를 더 잘해요"라는 말이 나오면 "요리를 잘하는 아빠, 할아버지, 삼촌은 없을까요? 잘하는 것은 성별이 아니라 사람마다 달라요"라고 되묻는다. 원래 장면이 틀린 것이 아니라, 한 가지 모습만 보여 주면 "그래야 한다"고 생각하기 쉽다는 것을 짚는다.',
          task: '성 역할이 정해진 그림책 장면을 누구나 하는 장면으로 바꾸고, 말풍선을 채워요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            MATCH('장면과 바꾼 장면을 이어요.', { title: '그림책 장면 바꾸기' }, [['엄마만 요리해요', '가족이 함께 요리해요'], ['남자아이만 축구해요', '누구나 축구해요'], ['여자아이만 인형 놀이', '누구나 인형 놀이'], ['아빠만 운전해요', '운전은 누구나 해요']], '엄마는 쉬면 안 돼요', 0.15),
            PICK('누구나 할 수 있게 그린 장면을 골라요.', { basket: '바꾼 그림책 장면' }, [{ id: 'cook', text: '할아버지가 요리해요', ok: true }, { id: 'onlyboy', text: '남자만 과학 실험', }, { id: 'nurse', text: '남자 간호사가 도와요', ok: true }, { id: 'pink', text: '분홍은 여자 색', }, { id: 'pilot', text: '여자 조종사가 날아요', ok: true }, { id: 'cry', text: '남자는 울면 안 돼' }], ['cook', 'onlyboy', 'nurse', 'pink'], [{ id: 'dance', text: '누구나 춤을 춰요', ok: true }, { id: 'quiet', text: '여자는 얌전해야 해' }], 0.2),
            FILL('바꾼 장면의 말풍선 빈칸을 채워요.', ['하늘', '바다', '하늘'], [['요리는 ___ 할 수 있어.', '누구나'], ['축구가 좋으면 ___ 해도 돼.', '누구든'], ['꿈은 ___ 로 정해.', '흥미']], ['남자만', '여자만', '성별'], 0.25, { conclude: '그림책 속 장면도 바꿀 수 있어요. 요리·축구·인형 놀이는 누구나 할 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '"요리는 엄마만 해요" 장면을 바꾼다면?', options: ['가족이 함께 요리해요', '엄마가 더 많이 요리해요', '요리는 하지 않아요'], answer: '가족이 함께 요리해요' }] },
        notes: '실제 그림책 이름을 들어 비판하지 않는다. 학생 집의 역할 나눔을 묻지 않는다. "남자/여자 간호사·조종사" 카드는 직업에 성별이 없다는 예로만 쓴다.',
      }),
      C({
        id: 'gender.e34.roles-in-media.activity.strength-map', type: 'activity', title: '나의 흥미·강점 가지',
        method: '나의 흥미·강점 가지', tool: 'mindmap', minutes: 13,
        levels: { easy: '꿈을 정하는 까닭 나누기 카드 4장(놓으면 바로 맞는지 알림), 흥미와 직업 잇기 2줄, 어울리는 꿈 고르기 4장.', base: '나누기 카드 6장, 잇기 4줄, 고르기 6장.', challenge: '나누기에 헷갈리는 카드 2장이 더해지고, 잇기에서 남는 카드 한 장을 가려낸 뒤 직업 카드 2개를 이유와 함께 짝에게 말한다.' },
        activity: {
          title: '나의 흥미·강점 가지', tool: 'mindmap',
          teacher: '"꿈은 무엇으로 정할까요? 좋아하는 것, 잘하는 것, 궁금한 것으로요!" 카드를 놓을 때마다 "그 까닭으로 꿈을 정하면 내가 신날까요?"라고 묻는다. "남자니까 군인이요" 같은 말이 나오면 "군인이 되고 싶은 여자도, 요리사가 되고 싶은 남자도 있을까요? 무엇이 그 꿈을 고르게 했을까요?"라고 되묻는다. 꿈은 성별이 아니라 내 흥미와 강점으로 정하고, 자라면서 바뀌어도 괜찮다는 것을 짚는다.',
          task: '꿈을 정하는 까닭을 나누고, 흥미와 어울리는 직업을 잇고, 가상 친구에게 어울리는 꿈을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORT('꿈을 정하는 까닭을 나누어요.', { topic: '꿈을 정할 때' }, ['정하는 까닭', '까닭이 아니에요'], [['좋아해서', '잘해서', '궁금해서'], ['남자라서', '여자라서', '다들 해서']], 2, [['재미있어서'], ['색이 분홍이라서']], 0.15),
            MATCH('흥미와 어울리는 직업을 이어요.', { topic: '흥미와 직업' }, [['동물을 좋아해요', '수의사'], ['요리가 재미있어요', '요리사'], ['만들기를 잘해요', '건축가'], ['아픈 사람을 돕고 싶어요', '간호사']], '성별로 정한 꿈', 0.2),
            PICK('그림과 이야기 짓기를 좋아하는 다온이에게 어울리는 꿈을 골라요.', { basket: '다온이의 꿈' }, [{ id: 'comic', text: '만화가', ok: true }, { id: 'soldier', text: '"남자니까" 군인' }, { id: 'writer', text: '동화 작가', ok: true }, { id: 'hair', text: '"여자니까" 미용사' }, { id: 'design', text: '게임 디자이너', ok: true }, { id: 'none', text: '꿈은 필요 없어' }], ['comic', 'soldier', 'writer', 'hair'], [{ id: 'anim', text: '애니메이션 감독', ok: true }, { id: 'same', text: '친구랑 같은 꿈' }], 0.25, { conclude: '꿈은 성별이 아니라 좋아하는 것·잘하는 것·궁금한 것으로 정해요. 자라면서 바뀌어도 괜찮아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '내가 좋아하는 것과 그것으로 꿀 수 있는 꿈을 한 줄로 써요.' }] },
        notes: '군인·미용사 카드는 직업이 나쁘다는 뜻이 아니라 "성별 때문에" 고르는 까닭이 틀렸다는 뜻이라고 꼭 말해 준다. 학생의 꿈을 발표하게 할 때 성별로 놀리지 않도록 미리 약속한다.',
      }),
      C({
        id: 'gender.e34.roles-in-media.activity.fair-ad', type: 'activity', title: '모두를 위한 광고 만들기',
        method: '모두를 위한 광고 만들기', tool: 'collage', minutes: 25,
        levels: { easy: '광고 배경 조각 2개, 사람 조각(동그라미) 2개 이상을 붙이고, 점검 2칸에 표시한다.', base: '배경 조각 3개, 사람 조각 4개 이상을 붙이고, 모둠 점검 3칸에 표시한다.', challenge: '사람 조각 4개 이상에 문구 종이까지 붙이고, 점검 4칸(발표 포함)에 표시한 뒤 모둠이 발표한다.' },
        activity: {
          title: '모두를 위한 광고 만들기', tool: 'collage',
          teacher: '"우리 모둠이 고른 장난감을 누구나 즐길 수 있는 광고로 만들어 볼까요?" 모둠이 장난감 하나를 정하고, 배경 → 함께 노는 아이들 → 광고 문구 차례로 꾸미게 한다. 사람 조각을 한쪽 아이들만으로 꾸미는 모둠에게 "이 광고를 보면 누구나 \'나도 해 볼래\' 할 수 있을까요?"라고 묻는다. 광고 문구는 색종이 판에 쓸 수 없어 종이에 써서 붙이게 한다. 모두를 위한 광고는 누구든 그 장난감을 고를 수 있다고 느끼게 한다는 것을 짚는다.',
          task: '모둠이 고른 장난감으로 여러 아이가 함께 노는 광고 장면을 색종이로 꾸미고 문구를 붙여요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '장난감을 정하고 광고 배경을 색종이로 꾸며요.', toolOptions: { maxPieces: 14 }, target: { selfCheck: ['장난감을 정했어요', '배경을 꾸몄어요'], minPieces: 3 }, difficulty: 0.1,
              levels: { easy: { prompt: '장난감을 정하고 배경 조각 2개를 붙여요.', target: { selfCheck: ['장난감을 정했어요', '배경을 꾸몄어요'], minPieces: 2 } } } },
            { prompt: '여러 아이가 함께 노는 모습을 동그라미 사람 조각으로 붙여요.', toolOptions: { maxPieces: 14 }, target: { has: [{ shape: 'circle', min: 4 }] }, difficulty: 0.15,
              levels: { easy: { prompt: '함께 노는 아이 2명을 동그라미 사람 조각으로 붙여요.', target: { has: [{ shape: 'circle', min: 2 }] } } } },
            { prompt: '광고 문구를 종이에 써 붙이고 모둠과 점검해요.', toolOptions: { maxPieces: 14 }, target: { selfCheck: ['누구나 놀 수 있게 했어요', '문구를 종이에 썼어요', '모둠과 함께 정했어요'], minPieces: 4 }, difficulty: 0.1,
              levels: { easy: { prompt: '광고 문구를 정하고 모둠과 점검해요(2칸).', target: { selfCheck: ['누구나 놀 수 있게 했어요', '모둠과 함께 정했어요'], minPieces: 2 } },
                challenge: { prompt: '광고 문구를 붙이고 발표까지 점검해요(4칸).', target: { selfCheck: ['누구나 놀 수 있게 했어요', '문구를 종이에 썼어요', '모둠과 함께 정했어요', '발표했어요'], minPieces: 5 } } },
              conclude: '모두를 위한 광고는 누구든 "나도 해 볼래" 하고 느끼게 해요. 장난감에 남자 것, 여자 것은 없어요.' },
          ],
        },
        worksheet: {
          items: [
            { type: 'short', prompt: '우리 모둠 광고 문구를 한 줄로 써요.' },
            { type: 'choice', prompt: '모두를 위한 장난감 광고에 알맞은 장면은?', options: ['여러 아이가 함께 놀아요', '한쪽 아이만 나와요', '어른만 나와요'], answer: '여러 아이가 함께 놀아요' },
          ],
        },
        notes: '실제 상품·회사 이름을 쓰지 않고 모둠이 지은 이름을 쓴다. 발표 때 다른 모둠 광고를 놀리지 않도록 "좋았던 점 하나"를 먼저 말하게 한다.',
      }),
      C({
        id: 'gender.e34.roles-in-media.wrap.dream-check', type: 'wrap', title: '꿈 고르기 스스로 점검',
        method: '꿈 고르기 스스로 점검', tool: 'timer', minutes: 6,
        levels: { easy: '점검 2칸(좋아해서·잘해서)에 표시한다.', base: '점검 3칸("성별 때문 아님" 더함)에 표시한다.', challenge: '점검 4칸에 표시하고, 점검한 이유를 짝에게 말한다.' },
        wrap: {
          teacher: '"내 꿈을 떠올려 보세요. 왜 그 꿈을 골랐나요?" 칸마다 읽어 주고 스스로 표시하게 한다. 꿈이 아직 없다는 학생에게 "괜찮아요. 좋아하는 것이 무엇인지부터 생각해 보면 돼요"라고 말해 준다. 꿈은 성별이 아니라 흥미와 강점으로 고르고, 바뀌어도 괜찮다는 것을 마무리로 말한다.',
          exitTicket: [
            SELF('꿈 고르기 스스로 점검', ['좋아해서 골랐어요', '잘해서 골랐어요', '성별 때문이 아니에요', '짝에게 말했어요']),
            { type: 'choice', prompt: '"여자는 과학자가 못 돼"라는 말에 대한 바른 생각은?', options: ['누구나 과학자가 될 수 있어요', '맞는 말이에요', '남자만 돼요'], answer: 0, difficulty: 0.1, explain: '직업은 성별이 아니라 흥미와 노력으로 정해요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '꿈은 흥미로',
          items: [
            { type: 'check', prompt: '꿈을 정하는 알맞은 까닭에 표시해요.', options: ['좋아해서', '잘해서', '남자라서', '궁금해서'] },
            { type: 'short', prompt: '광고나 그림책에서 바꾸고 싶은 장면을 한 줄로 써요.' },
          ],
          easy: { note: '꿈은 내가 좋아하는 것으로 정해요.', items: [{ type: 'choice', prompt: '꿈은 무엇으로 정할까요?', options: ['흥미', '성별'], answer: '흥미' }] },
        },
      }),
      C({
        id: 'gender.e34.roles-in-media.wrap.dream-chant', type: 'wrap', title: '"꿈은 흥미로" 구호 리듬',
        method: '"꿈은 흥미로" 구호 리듬', tool: 'keyboard', minutes: 6,
        levels: { easy: '앞 구절("꿈은 성별 아닌") 한 마디를 박 수를 보며 친다.', base: '구호 전체 두 마디("꿈은 성별 아닌 흥미로")를 친다.', challenge: '두 마디를 박에 맞게 내 리듬으로 지어, 내 꿈 이름을 넣어 외치며 친다.' },
        wrap: {
          teacher: '"오늘의 약속을 구호로! 꿈은 성별 아닌 흥미로!" 구절마다 손뼉을 치며 외친 뒤 리듬 블록으로 친다. 도전 단계에서는 "내 꿈은 ○○!"처럼 내 꿈 이름을 넣을 리듬을 지어 보게 한다. 친구의 꿈을 듣고 웃는 학생이 있으면 "그 꿈을 고른 까닭이 무엇인지 들어 볼까요?"라고 묻는다. 누구의 꿈이든 흥미와 강점에서 시작된다는 것을 마무리로 말한다.',
          exitTicket: [
            RHY('"꿈은 성별 아닌 흥미로" 리듬을 쳐요.', ['q', 'q', 'e', 'e', 'q'], ['e', 'e', 'q', 'h'], { prompt: '내 꿈 이름을 넣을 두 마디 리듬을 박에 맞게 지어요.', target: { beats: true } }),
            { type: 'choice', prompt: '친구가 "나는 요리사가 꿈이야"라고 할 때 알맞은 말은?', options: ['"멋지다, 왜 요리사야?"', '"남자가 무슨 요리사야"', '"그건 여자 꿈이야"'], answer: 0, difficulty: 0.1, explain: '친구의 꿈은 존중하고 까닭을 물어봐요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '내 꿈은 흥미로',
          items: [
            { type: 'short', prompt: '내 꿈과 그 꿈을 고른 까닭을 한 줄로 써요.' },
            { type: 'choice', prompt: '친구의 꿈을 들었을 때 알맞은 것은?', options: ['존중하고 까닭을 물어요', '성별로 놀려요', '안 된다고 해요'], answer: '존중하고 까닭을 물어요' },
          ],
          easy: { note: '꿈은 누구나 자유롭게 정해요.', items: [{ type: 'choice', prompt: '친구 꿈을 놀려도 될까요?', options: ['안 돼요', '돼요'], answer: '안 돼요' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 3학년 · 공평한 가족 일 나누기와 가족 존중의 말 (research-mandatory §2 초: 성별 고정관념 깨기 + 양성평등한 가정)
  // ======================================================================================================
  {
    const C = T('fair-chores-family', 3);
    const CHORE = { type: 'picture', title: '하루네 가족 한 주 집안일(가상)', unit: '번', xLabel: '가족', yLabel: '집안일 횟수', icons: [{ value: 5, name: '5번' }, { value: 1, name: '1번' }], icon: 'star' };
    const F4 = [['삼촌', 12], ['할머니', 3], ['누나', 2], ['하루', 1]];
    M.push(
      C({
        id: 'gender.e34.fair-chores-family.intro.chore-graph', type: 'intro', title: '누가 집안일을 많이 했을까',
        method: '가상 가족 집안일 그래프', tool: 'chart', minutes: 6,
        levels: { easy: '두 사람(삼촌·하루)의 그림을 함께 비교해 누가 많이 했는지 고른다.', base: '네 사람의 그림그래프를 읽고 가장 많이 한 사람을 고른다.', challenge: '더 공평하게 바꿀 방법을 말해 본다(교사 진행).' },
        intro: {
          teacher: '"가상의 하루네 가족이 한 주 동안 한 집안일 횟수예요. 누가 가장 많이 했을까요?" 시연 단추로 가장 많은 사람이 골라지는 것을 보인다. "어른이 다 하는 게 당연해요"라는 말이 나오면 "삼촌이 12번, 하루가 1번이에요. 삼촌 마음은 어떨까요? 하루가 할 수 있는 일은 없을까요?"라고 되묻는다. 집안일은 한 사람의 일이 아니라 가족 모두가 나누는 일이라는 것을 오늘 알아본다고 밝힌다.',
          student: '가상의 하루네 가족 집안일 그림그래프를 읽고 누가 가장 많이 했는지 골라요.',
          demo: { tool: 'chart', options: Object.assign({}, CHORE, { mode: 'read', data: F4, question: '가장 많이 한 사람은?', choices: F4.map((d) => d[0]) }), sequence: [{ pick: 0 }] },
          art: { draw: 'a paper family of four in a cozy paper house: one adult carrying a big pile of laundry and dishes alone while a grandmother, an older sister and a child sit nearby, small paper star counters above each person', banner: '누가 많이 했을까?', extra: [{ motif: 'house', x: 300, y: 96 }] },
        },
        notes: '"하루네 가족"은 가상 가족이다(삼촌·할머니·누나·하루). 가족의 모습은 집마다 다르다고 말해 주고, 학생 집에서 누가 집안일을 하는지 묻지 않는다.',
      }),
      C({
        id: 'gender.e34.fair-chores-family.intro.chore-weather', type: 'intro', title: '혼자 다 할 때의 마음',
        method: '혼자 다 할 때 마음', tool: 'emotion', minutes: 6,
        levels: { easy: '장면 2개(혼자 다 함·함께 나눔)에 마음 카드를 함께 짝 짓는다.', base: '장면 3개(돕기만 함 더함)에 마음 카드를 짝 짓는다.', challenge: '나눴을 때와 혼자 했을 때 마음을 비교해 말한다(교사 진행).' },
        intro: {
          teacher: '"삼촌이 설거지도, 빨래도, 청소도 혼자 해요. 삼촌의 마음 날씨는 어떨까요?" 시연 단추로 장면마다 마음 카드가 놓이는 것을 보인다. "어른이니까 괜찮아요"라는 말이 나오면 "어른도 힘들면 지칠까요? 가족이 함께하면 마음 날씨가 어떻게 바뀔까요?"라고 되묻는다. 혼자 다 하면 지치고, 나누면 가족 모두의 마음이 편해진다는 것을 짚는다.',
          student: '혼자 다 할 때와 함께 나눌 때 마음 카드를 짝 지어요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'alone', label: '혼자 집안일을 다 해요' }, { id: 'share', label: '가족이 함께 나눠요' }, { id: 'thanks', label: '고맙다는 말을 들어요' }], cards: ['속상함', '편안함', '고마움', '신남'], shuffle: false }, sequence: [{ match: { alone: '속상함', share: '편안함' } }, { match: { alone: '속상함', share: '편안함', thanks: '고마움' } }] },
          art: { draw: 'two paper house scenes: on the left one tired paper adult under a small storm cloud doing all the chores, on the right a paper family folding laundry together under a sun', banner: '마음 날씨는?', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
      }),
      C({
        id: 'gender.e34.fair-chores-family.activity.chore-plan', type: 'activity', title: '공평한 집안일 계획표',
        method: '공평한 집안일 계획표', tool: 'kitchen', minutes: 14,
        levels: { easy: '공평한 계획 점검 3칸, 나이에 맞는 일 나누기 카드 4장(놓으면 바로 맞는지 알림), 내가 맡을 일 표시.', base: '점검 5칸, 나누기 카드 6장, 내가 맡을 일 표시.', challenge: '함정 칸이 더해진 점검 6칸, 나누기 카드 8장을 한 뒤 나이에 맞게 나눈 이유를 짝에게 말한다.' },
        activity: {
          title: '공평한 집안일 계획표', tool: 'kitchen',
          teacher: '"하루네 가족의 집안일을 공평하게 나누려면 어떻게 할까요?" 점검표를 함께 읽고, 일 카드를 어린이가 할 수 있는 일과 어른과 함께하는 일로 나누게 한다. "공평하게면 모두 똑같이 해야 해요"라는 말이 나오면 "하루가 칼로 채소를 써는 것도 똑같이 해야 할까요? 나이와 할 수 있는 만큼 나누는 것도 공평이에요"라고 말해 준다. 집안일은 성별로 정하지 않고, 가족이 돌아가며 할 수 있는 만큼 나눈다는 것을 짚는다.',
          task: '공평한 집안일 계획에 표시하고, 일 카드를 나이에 맞게 나눈 뒤 내가 맡을 일을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            CHK('공평한 집안일 계획에 맞는 것에 표시해요.', '공평한 계획', [{ id: 'turn', text: '돌아가며 설거지', ok: true }, { id: 'one', text: '한 사람이 빨래 다' }, { id: 'age', text: '나이에 맞게 나누기', ok: true }, { id: 'kid', text: '어린이도 정리 맡기', ok: true }, { id: 'adult', text: '어른만 다 하기' }], [0, 1, 2], [{ id: 'gender', text: '성별로 일 정하기' }], 0.15),
            SORT('일 카드를 나이에 맞게 나누어요.', { autoMotif: false, groups: false }, ['어린이도 해요', '어른과 함께해요'], [['빨래 개기', '수저 놓기', '분리배출'], ['칼로 채소 썰기', '불 켜고 요리', '다리미질']], 2, [['신발 정리'], ['뜨거운 국 옮기기']], 0.2),
            { prompt: '하루네 가족 계획에서 내가 맡고 싶은 일에 표시해요.', toolOptions: { mode: 'checklist', title: '내가 맡을 일', items: [{ id: 'fold', text: '빨래 개기' }, { id: 'spoon', text: '수저 놓기' }, { id: 'trash', text: '분리배출 돕기' }, { id: 'shoes', text: '신발 정리' }] }, target: { selfCheck: true }, difficulty: 0.1,
              conclude: '집안일은 성별이 아니라 가족 모두가, 할 수 있는 만큼 돌아가며 나눠요.' },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '공평한 집안일 나누기는?', options: ['가족이 할 수 있는 만큼 돌아가며', '한 사람이 다', '성별로 정해서'], answer: '가족이 할 수 있는 만큼 돌아가며' }] },
        notes: '계획표는 가상의 하루네 가족 것이다. 우리 집 계획을 세워 오게 할 때도 가족 구성을 적게 하지 않고 "내가 맡을 일"만 적게 한다.',
      }),
      C({
        id: 'gender.e34.fair-chores-family.activity.respect-or-hurt', type: 'activity', title: '가족을 존중하는 말 가리기',
        method: '가족 존중하는 말 가리기', tool: 'sortboard', minutes: 13,
        levels: { easy: '문항마다 카드 4장을 바구니 2개에 나누고, 틀리면 바로 되돌아온다.', base: '문항마다 카드 6장을 나눈 뒤 확인한다.', challenge: '헷갈리는 카드 2장이 더해진 8장을 나누고, 셋째 문항에서 상처 말을 바꾼 존중의 말을 가려낸다.' },
        activity: {
          title: '가족을 존중하는 말 가리기', tool: 'sortboard',
          teacher: '"이 말을 들은 친구 마음은 어떨까요? 존중하는 말일까요, 상처 주는 말일까요?" 카드를 넣을 때마다 들은 친구 마음을 한 낱말로 말하게 한다. "\'엄마 없어?\'는 그냥 궁금해서 묻는 거예요"라는 말이 나오면 "궁금한 마음은 괜찮아요. 그런데 그 말을 들은 친구는 어떤 기분일까요? 친구가 말하고 싶을 때 들어 주면 어떨까요?"라고 되묻는다. 가족의 모습은 집마다 다르고, 다른 것은 틀린 것이 아니라는 것을 짚는다.',
          task: '가족에 대해 하는 말 카드를 존중하는 말과 상처 주는 말 바구니에 나누어요.', levels: BOXLV,
          items: [
            BOX('가족에 대해 하는 말을 나누어요.', ['존중하는 말', '상처 주는 말'], [['"우리 집이랑 달라 재밌다"', '"가족은 다 달라"', '"할머니랑 사는구나"'], ['"너네 아빠 없어?"', '"엄마 없어?"', '"너희 집은 이상해"']], [[0, 2], [1, 2]], [['"멋진 가족이다"'], ['"불쌍하다"']], 0.15),
            BOX('가족 소개 시간에 하는 말을 나누어요.', ['존중하는 말', '상처 주는 말'], [['"소개해 줘서 고마워"', '"너희 삼촌 멋지다"', '끝까지 들어 주기'], ['"그게 무슨 가족이야"', '소개 중에 키득대기', '"우리 집이 진짜야"']], [[0, 2], [1, 2]], [['"나도 궁금해, 더 말해 줘"'], ['"왜 너만 달라?"']], 0.2),
            BOX('상처 주는 말을 바꾼 말을 가려요.', ['바꾼 존중의 말', '그대로 상처 말'], [['"누구랑 살아도 좋아"', '"말하고 싶으면 들을게"', '"가족 모습은 다 달라"'], ['"왜 엄마랑 안 살아?"', '"너만 이상해"', '"불쌍하다"']], [[0, 2], [1, 2]], [['"네 가족 이야기 좋다"'], ['"진짜 가족 맞아?"']], 0.25, { conclude: '가족의 모습은 집마다 달라요. 다른 것은 틀린 것이 아니에요. 친구 가족을 존중하는 말을 써요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '할머니와 사는 친구에게 알맞은 말은?', options: ['"할머니랑 사는구나"', '"엄마 없어?"', '"이상한 가족이네"'], answer: '"할머니랑 사는구나"' }] },
        notes: '학생의 실제 가족 구성을 묻거나 발표하게 하지 않는다. 카드 속 말은 모두 가상 인물의 말이다.',
      }),
      C({
        id: 'gender.e34.fair-chores-family.activity.family-day-choice', type: 'activity', title: '갈림길: 가족 행사 안내문',
        method: '가족 행사 날 상황 판단', tool: 'dilemma', minutes: 25,
        levels: { easy: '장면마다 갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '장면마다 갈림 2번, 보기 3개씩 고르며 결과를 따라간 뒤 고른 이유를 짝에게 말한다.', challenge: '끝에서 근거 카드 3장 가운데 알맞은 2장(셋째 장면은 안내문 문구를 바꾼 근거)을 고른다.' },
        activity: {
          title: '갈림길: 가족 행사 안내문', tool: 'dilemma',
          teacher: '"\'엄마·아빠와 함께 오세요\'라는 안내문을 받았어요. 할아버지와 사는 가람이는 어떤 마음일까요?" 결과를 소리 내어 읽고 다음 장면에서 다시 고른 뒤 고른 이유를 짝에게 말하게 한다. "안내문은 원래 그렇게 써요"라는 말이 나오면 "어떤 말로 쓰면 모든 친구가 함께 올 수 있다고 느낄까요?"라고 되묻는다. 가족의 모습은 여러 가지이고, \'보호자\'처럼 모두를 품는 말을 쓰면 아무도 빠지지 않는다는 것을 짚는다.',
          task: '가족 행사 안내문을 받은 날의 장면을 읽고 보기를 골라요. 결과를 보고 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('친구들이 안내문 이야기를 해요.', {
              text: '쉬는 시간, 한 친구가 가람이에게 "너는 엄마 아빠 중에 누가 와?"라고 물어요. 가람이는 할아버지와 살아요.', motif: 'house',
              choices: [
                { id: 'include', text: '"할아버지랑 와도 되지!"', result: '가람이가 "응, 할아버지가 오셔" 하고 웃었어요.', ending: '모두가 올 수 있다는 말이 가람이를 편하게 했어요.', next: {
                  text: '다른 친구가 "할아버지는 좀 이상하다"라고 해요.', choices: [
                    { id: 'respect', text: '"가족은 다 달라. 멋지신데?"', result: '친구들이 고개를 끄덕였어요.', impact: [{ who: '가람', text: '존중받았어요', tone: 1 }], ending: '가족의 다름을 존중하는 말을 했어요.' },
                    { id: 'laugh', text: '같이 웃는다', result: '가람이가 고개를 숙였어요.', impact: [{ who: '가람', text: '속상해요', tone: -1 }], why: '가족 모습을 놀리면 친구가 상처받아요.' },
                    { id: 'quiet', text: '못 들은 척한다', result: '가람이는 혼자 서운했어요.', impact: [{ who: '가람', text: '서운해요', tone: 0 }], why: '존중하는 말 한마디가 친구를 지켜요.' },
                  ] } },
                { id: 'pity', text: '"엄마 아빠 없어? 불쌍하다"', result: '가람이 얼굴이 굳었어요.', impact: [{ who: '가람', text: '상처받았어요', tone: -1 }], why: '가족이 다를 뿐 불쌍한 것이 아니에요.' },
                { id: 'ask', text: '"왜 엄마랑 안 살아?" 캐묻는다', result: '가람이가 대답하기 힘들어했어요.', impact: [{ who: '가람', text: '불편해요', tone: -1 }], why: '친구가 말하고 싶을 때 들어 주어요.' },
              ] }, [['include', 'respect']],
            [{ id: 'diverse', text: '가족 모습은 여러 가지라서' }, { id: 'feel', text: '가람이 마음을 생각해서' }, { id: 'normal', text: '엄마 아빠 가족만 보통이라서', why: '어떤 가족도 보통이에요. 다른 것은 틀린 것이 아니에요.' }], ['diverse', 'feel'], 0.2),
            DIL('친구가 행사에 안 가겠다고 해요.', {
              text: '가람이가 "안내문에 엄마 아빠라고 쓰여 있어서 안 갈래"라고 해요.', motif: 'cloud',
              choices: [
                { id: 'with', text: '"할아버지도 같이 가실 수 있어"', result: '가람이가 "정말?" 하고 물었어요.', ending: '함께 갈 수 있다고 알려 준 것이 힘이 됐어요.', next: {
                  text: '가람이가 "그래도 걱정돼"라고 해요.', choices: [
                    { id: 'teacher', text: '"선생님께 같이 여쭤보자"', result: '선생님이 "보호자 누구나 오셔도 돼요"라고 하셨어요.', impact: [{ who: '가람', text: '마음이 놓였어요', tone: 1 }], ending: '함께 여쭤봐서 걱정이 풀렸어요.' },
                    { id: 'dont', text: '"그럼 가지 마"', result: '가람이는 행사에 빠졌어요.', impact: [{ who: '가람', text: '외로워요', tone: -1 }], why: '빠지지 않도록 함께 방법을 찾아요.' },
                    { id: 'tease', text: '"너만 다르네"', result: '가람이가 더 움츠러들었어요.', impact: [{ who: '가람', text: '속상해요', tone: -1 }], why: '다르다고 따로 떼어 말하지 않아요.' },
                  ] } },
                { id: 'agree', text: '"그럼 어쩔 수 없지"', result: '가람이는 혼자 집에 있기로 했어요.', impact: [{ who: '가람', text: '서운해요', tone: -1 }], why: '함께 갈 방법을 찾아볼 수 있어요.' },
                { id: 'change', text: '다른 이야기로 바꾼다', result: '가람이의 걱정은 그대로예요.', impact: [{ who: '가람', text: '걱정돼요', tone: 0 }] },
              ] }, [['with', 'teacher']],
            [{ id: 'all', text: '어떤 가족도 함께할 수 있어서' }, { id: 'adult', text: '선생님이 방법을 알려 주셔서' }, { id: 'rule', text: '안내문 말은 바꿀 수 없어서', why: '모두를 품는 말로 바꿀 수 있어요.' }], ['all', 'adult'], 0.25),
            DIL('안내문 문구를 바꿔 볼까요?', {
              text: '선생님이 "다음 안내문은 모두가 편하게 쓰고 싶어요. 어떤 말이 좋을까요?"라고 물으셨어요.', motif: 'star',
              choices: [
                { id: 'guardian', text: '"보호자와 함께 오세요"', result: '선생님이 "모두를 품는 말이네요"라고 하셨어요.', ending: '모든 가족이 함께할 수 있는 말을 골랐어요.', next: {
                  text: '친구가 "그럼 그림도 바꾸자"라고 해요.', choices: [
                    { id: 'many', text: '여러 가족 모습을 그린다', result: '안내문에 여러 가족이 그려졌어요.', impact: [{ who: '반 친구들', text: '모두 반가워요', tone: 1 }], ending: '말도 그림도 모두를 품게 바꿨어요.' },
                    { id: 'one', text: '엄마·아빠·아이만 그린다', result: '몇몇 친구는 또 서운했어요.', impact: [{ who: '몇몇 친구', text: '빠진 느낌이에요', tone: -1 }], why: '그림도 여러 가족 모습을 담아요.' },
                    { id: 'none', text: '아무것도 안 바꾼다', result: '안내문은 그대로예요.', impact: [{ who: '가람', text: '아쉬워요', tone: 0 }], why: '작은 그림 하나도 모두를 품을 수 있어요.' },
                  ] } },
                { id: 'same', text: '"엄마·아빠와 오세요" 그대로', result: '몇몇 친구가 또 걱정했어요.', impact: [{ who: '몇몇 친구', text: '빠진 느낌이에요', tone: -1 }], why: '모든 가족을 품는 말로 바꿀 수 있어요.' },
                { id: 'mom', text: '"엄마와 오세요"', result: '더 많은 친구가 걱정했어요.', impact: [{ who: '여러 친구', text: '서운해요', tone: -1 }], why: '한 사람만 적으면 빠지는 가족이 생겨요.' },
              ] }, [['guardian', 'many']],
            [{ id: 'word', text: '"보호자"는 모두를 품는 말이라서' }, { id: 'nobody', text: '아무도 빠지지 않게 해서' }, { id: 'usual', text: '보통 가족만 생각해서', why: '어떤 가족이든 보통이에요.' }], ['word', 'nobody'], 0.3, { conclude: '가족의 모습은 여러 가지예요. "보호자"처럼 모두를 품는 말을 쓰면 아무도 빠지지 않아요.' }),
          ],
        },
        worksheet: {
          items: [
            { type: 'choice', prompt: '모든 가족이 함께할 수 있는 안내문 말은?', options: ['"보호자와 함께 오세요"', '"엄마·아빠와 오세요"', '"엄마와 오세요"'], answer: '"보호자와 함께 오세요"' },
            { type: 'short', prompt: '친구 가족을 존중하는 말을 한 줄로 써요.' },
          ],
        },
        notes: '가람이는 가명의 가상 인물이다. 학생에게 "누구와 사나요?"를 묻지 않는다. 실제 학교 안내문을 고칠 때는 학교 방침에 따른다.',
      }),
      C({
        id: 'gender.e34.fair-chores-family.wrap.fair-pattern', type: 'wrap', title: '돌아가며 맡기 규칙',
        method: '돌아가며 맡기 규칙 잇기', tool: 'pattern', minutes: 6,
        levels: { easy: '네 사람이 돌아가며 맡는 줄에서 빈칸 1개를 채운다.', base: '빈칸 2개를 채운다.', challenge: '네 사람 이름 조각으로 돌아가며 맡는 새 규칙 줄을 만든다(같은 차례가 두 번 이상 되풀이).' },
        wrap: {
          teacher: '"하루네 가족은 설거지를 삼촌 → 할머니 → 누나 → 하루 차례로 돌아가며 맡기로 했어요. 다음 차례는 누구일까요?" 규칙 줄을 함께 소리 내어 읽고 빈칸을 채운다. 빈칸에 늘 삼촌을 넣는 학생에게 "그러면 삼촌이 또 혼자 다 하게 될까요?"라고 되묻는다. 도전 단계에서는 우리 가족이 쓸 수 있는 돌아가며 맡기 규칙을 만들어 보게 한다. 돌아가며 맡으면 한 사람에게 몰리지 않는다는 것을 마무리로 말한다.',
          exitTicket: [
            { type: 'tool', tool: 'pattern', prompt: '돌아가며 맡는 차례에 맞게 빈칸을 채워요.', options: { mode: 'fill', seq: ['삼촌', '할머니', '누나', '하루', '삼촌', null, '누나', null] }, target: { fill: ['할머니', '하루'] }, difficulty: 0.15,
              levels: {
                easy: { prompt: '돌아가며 맡는 차례에 맞게 빈칸 1개를 채워요.', toolOptions: { seq: ['삼촌', '할머니', '누나', '하루', '삼촌', null, '누나', '하루'] }, target: { fill: ['할머니'] } },
                challenge: { prompt: '네 사람이 돌아가며 맡는 새 규칙 줄을 만들어요.', toolOptions: { mode: 'make', palette: ['삼촌', '할머니', '누나', '하루'], length: 8 }, target: { rule: 'repeat', period: 4, minRepeats: 2, uses: 4 } },
              } },
            { type: 'choice', prompt: '돌아가며 맡으면 좋은 점은?', options: ['한 사람에게 몰리지 않아요', '한 사람이 다 해요', '아무도 안 해요'], answer: 0, difficulty: 0.1, explain: '차례대로 맡으면 모두가 공평하게 나눠요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '돌아가며 맡기',
          items: [
            { type: 'blank', prompt: '빈칸에 들어갈 사람을 써요.', text: '삼촌 → 할머니 → 누나 → 하루 → 삼촌 → ___', answer: '할머니' },
            { type: 'short', prompt: '내가 돌아가며 맡고 싶은 집안일을 써요.' },
          ],
          easy: { note: '차례대로 돌아가요.', items: [{ type: 'choice', prompt: '집안일은 누가 해요?', options: ['가족 모두', '한 사람만'], answer: '가족 모두' }] },
        },
      }),
      C({
        id: 'gender.e34.fair-chores-family.wrap.family-poster', type: 'wrap', title: '"모든 가족 존중" 카드',
        method: '"모든 가족 존중" 카드', tool: 'collage', minutes: 6,
        levels: { easy: '색종이 조각 2개 이상으로 여러 가족 모습을 꾸미고 점검 2칸에 표시한다.', base: '조각 4개 이상으로 꾸미고 점검 3칸에 표시한다.', challenge: '조각 5개 이상으로 꾸미고, 우리 반 약속 한 줄을 종이에 써 붙인 뒤 점검 4칸에 표시한다.' },
        wrap: {
          teacher: '"세상에는 여러 모습의 가족이 있어요. 여러 가족을 색종이로 꾸며 \'모든 가족 존중\' 카드를 만들어 볼까요?" 크기가 다른 동그라미·하트 조각으로 여러 가족 모습을 꾸미고, 존중하는 말은 종이에 써서 붙이게 한다. 한 가지 가족 모습만 꾸미는 학생에게 "할머니와 사는 가족, 삼촌과 사는 가족도 넣어 볼까요?"라고 제안한다. 다른 가족을 존중하는 말을 쓰자는 약속으로 마무리한다.',
          exitTicket: [
            COL('색종이 조각으로 여러 가족 모습을 꾸며 존중 카드를 만들어요.', ['여러 가족을 꾸몄어요', '존중하는 말을 썼어요', '다른 가족도 존중해요', '우리 반 약속을 붙였어요'], 2, 4, 5),
            { type: 'choice', prompt: '친구 가족이 우리 가족과 다를 때 알맞은 생각은?', options: ['다를 뿐 틀린 게 아니에요', '친구 가족이 틀렸어요', '우리 가족만 진짜예요'], answer: 0, difficulty: 0.1, explain: '가족의 모습은 집마다 달라요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '모든 가족 존중',
          items: [
            { type: 'check', prompt: '가족을 존중하는 말에 표시해요.', options: ['"가족은 다 달라"', '"너희 집은 이상해"', '"소개해 줘서 고마워"'] },
            { type: 'short', prompt: '우리 반이 지킬 가족 존중 약속을 한 줄로 써요.' },
          ],
          easy: { note: '가족 모습은 여러 가지예요.', items: [{ type: 'choice', prompt: '다른 가족은 틀린 걸까요?', options: ['아니에요', '맞아요'], answer: '아니에요' }] },
        },
        notes: '카드에 우리 집 가족을 그리라고 하지 않는다. 그리고 싶은 학생만 그리게 한다.',
      }),
    );
  }

  // ======================================================================================================
  // 3학년 · 집에서 무서운 일이 생기면 (가정폭력방지법 제4조의3 예방교육 — research-mandatory §1, 아동안전교육 영역 §2)
  // ======================================================================================================
  {
    const C = T('scary-at-home', 3);
    const TOWN = {
      title: '하루네 동네(가상)', grid: [6, 4],
      regions: [
        { name: '하루네 집', cells: [[0, 0], [1, 0], [0, 1], [1, 1]] }, { name: '믿는 이웃 어른 댁', cells: [[2, 0], [3, 0]] }, { name: '학교', cells: [[4, 0], [5, 0], [4, 1], [5, 1]] },
        { name: '놀이터', cells: [[2, 1], [3, 1]] }, { name: '골목길', cells: [[0, 2], [1, 2], [2, 2], [3, 2]] }, { name: '지구대', cells: [[4, 2], [5, 2]] },
        { name: '공원', cells: [[0, 3], [1, 3], [2, 3], [3, 3]] }, { name: '빈 공터', cells: [[4, 3], [5, 3]] },
      ],
    };
    M.push(
      C({
        id: 'gender.e34.scary-at-home.intro.warning-signs', type: 'intro', title: '도윤이의 마음 신호',
        method: '가상 친구의 마음 신호 읽기', tool: 'emotion', minutes: 6,
        levels: { easy: '장면 2개(깜짝 놀람·움츠림)에서 도윤이 마음 카드를 함께 고른다.', base: '장면 4개(혼자 있으려 함·집에 가기 싫어함 더함)의 마음 카드를 고른다.', challenge: '마음 카드를 고른 뒤 친구로서 할 수 있는 행동(곁에 있기·선생님께 말하기)을 말해 본다(교사 진행).' },
        intro: {
          teacher: '"가상 친구 도윤이가 요즘 작은 소리에도 깜짝 놀라고, 집에 가기 싫다고 해요. 도윤이의 마음은 어떨까요?" 시연 단추로 마음 카드가 바구니에 담기는 것을 보인다. "도윤이가 겁쟁이라서 그래요"라는 말이 나오면 "무서운 일이 있으면 누구나 그럴 수 있어요. 도윤이를 탓할 일일까요?"라고 되묻는다. 친구가 걱정될 때는 캐묻지 않고 곁에 있어 주며 선생님께 말하면 된다는 것을 짚는다.',
          student: '그림 속 도윤이가 보이는 모습을 보고 도윤이의 마음 카드를 골라요.',
          demo: { tool: 'emotion', options: { mode: 'pick', basket: '도윤이의 마음', cards: [{ id: 'scared', text: '무서움' }, { id: 'worry', text: '걱정' }, { id: 'fun', text: '신남' }, { id: 'calm', text: '편안함' }, { id: 'sad', text: '속상함' }], shuffle: false }, sequence: [{ pick: ['scared', 'worry'] }, { pick: ['scared', 'worry', 'sad'] }] },
          art: { draw: 'a paper classroom corner where a small paper child sits hugging knees with a worried face while a friendly paper classmate sits nearby offering a gentle hand', banner: '도윤이의 마음은?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '도윤이는 가명의 가상 인물이다. "우리 반에 이런 친구가 있나요?", "집에서 무서운 일이 있나요?"라고 묻지 않는다. 걱정되는 학생이 있으면 수업 뒤 조용히 살피고 학교 절차를 따른다.',
      }),
      C({
        id: 'gender.e34.scary-at-home.intro.right-to-safe', type: 'intro', title: '누구나 집에서도 안전해요',
        method: '"누구나 안전할 권리" 생각 모으기', tool: 'mindmap', minutes: 6,
        levels: { easy: '생각 카드 4장 가운데 2장을 함께 고른다.', base: '카드 6장 가운데 4장을 고른다.', challenge: '고른 카드마다 "왜냐하면" 까닭을 붙여 말해 본다(교사 진행).' },
        intro: {
          teacher: '"어린이는 집에서도 안전할 권리가 있어요. 그렇다면 집에서 하면 안 되는 일은 무엇일까요?" 시연 단추로 생각 카드가 바구니에 담기는 것을 보인다. "가족이니까 참아야 해요" 카드에서 멈추고 "가족이어도 아프게 하거나 무섭게 해도 될까요?"라고 묻는다. 가족 사이에도 때리기·겁주기는 안 되고, 그런 일이 있으면 어린이 잘못이 아니며 도움을 청해도 된다는 것을 밝힌다.',
          student: '"집에서도 안전해요"에 어울리는 생각 카드를 골라요.',
          demo: { tool: 'mindmap', options: { mode: 'pick', basket: '집에서도 안전해요', cards: [{ id: 'hit', text: '때리면 안 돼요' }, { id: 'scare', text: '겁주면 안 돼요' }, { id: 'endure', text: '가족이니 참아요' }, { id: 'right', text: '안전할 권리' }, { id: 'help', text: '도움 청해도 돼요' }, { id: 'secret', text: '꼭 비밀로 해요' }], shuffle: false }, sequence: [{ pick: ['hit', 'scare'] }, { pick: ['hit', 'scare', 'right', 'help'] }] },
          art: { draw: 'a warm paper house with a big paper shield shape around it and small paper children inside smiling safely, soft light from the windows', banner: '집에서도 안전해요', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
      }),
      C({
        id: 'gender.e34.scary-at-home.activity.help-order', type: 'activity', title: '도움 청하는 차례',
        method: '도움 청하기 차례 정하기', tool: 'story', minutes: 14,
        levels: { easy: '장면 2장을 차례대로 놓고(놓으면 바로 맞는지 알림), 말풍선 1칸을 채운다.', base: '장면 3장을 차례대로 놓고 순서의 이유를 짝에게 말하며, 말풍선 2칸을 채운다.', challenge: '틀린 장면 한 장을 빼고 3장을 놓으며, 말풍선 3칸에 할 말을 넣는다.' },
        activity: {
          title: '도움 청하는 차례', tool: 'story',
          teacher: '"집에서 무서운 일이 생기면 맨 먼저 무엇을 할까요?" 장면을 놓은 뒤 짝에게 "먼저 ○○를 해, 왜냐하면…"으로 이유를 말하게 한다. "어른 싸움을 말려야 해요" 카드를 넣으려는 학생에게 "어린이가 끼어들면 다칠 수 있어요. 어린이 몫은 무엇일까요?"라고 묻고, 안전한 곳으로 피해서 알리는 것이 어린이 몫이라는 것을 짚는다. 도움 번호는 학교가 확인한 번호를 선생님이 알려 준다고 말하고, 알리는 것은 가족을 돕는 일이라는 것을 덧붙인다.',
          task: '집에서 무서운 일이 생겼을 때 도움을 청하는 장면을 차례대로 놓고 말풍선을 채워요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORD('무서운 일이 생겼을 때 차례로 놓아요.', { title: '도움 청하기' }, [{ id: 'safe', text: '안전한 곳으로 가기' }, { id: 'tell', text: '믿는 어른께 말하기' }, { id: 'number', text: '도움 번호 알아 두기' }], [0, 1], { id: 'stop', text: '어른 싸움 말리기', why: '어린이가 끼어들면 다칠 수 있어요. 피해서 알려요.' }, 0.15),
            ORD('밤에 무서운 소리가 날 때 차례로 놓아요.', { title: '밤에 무서울 때' }, [{ id: 'room', text: '다치지 않게 피하기' }, { id: 'near', text: '믿는 이웃 어른께 가기' }, { id: 'school', text: '다음 날 선생님께 말하기' }], [0, 2], { id: 'hide', text: '아무에게도 말 안 하기', why: '무서운 일은 혼자 감추지 않아요.' }, 0.2),
            FILL('도움을 청하는 말을 말풍선에 넣어요.', ['도윤', '도윤', '도윤'], [['"선생님, 집에서 ___ 일이 있어요."', '무서운'], ['"도와___."', '주세요'], ['"제 ___ 아니에요."', '잘못이']], ['괜찮은', '비밀', '참을게요'], 0.25, { conclude: '안전한 곳으로 피하기 → 믿는 어른께 말하기 → 도움 번호. 알리는 것은 가족을 돕는 일이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '집에서 어른들이 크게 싸울 때 어린이가 할 일은?', options: ['안전한 곳으로 피해서 알려요', '가운데 끼어들어 말려요', '참고 아무에게도 말 안 해요'], answer: '안전한 곳으로 피해서 알려요' }] },
        notes: '무서운 일(가정폭력)의 장면은 자세히 묘사하지 않는다. "도움 번호"는 체계도에 번호가 없어 화면에 쓰지 않았다 — 교사가 학교가 확인한 신고·상담 번호를 알려 준다.',
      }),
      C({
        id: 'gender.e34.scary-at-home.activity.safe-route', type: 'activity', title: '안전한 곳 찾아가기 지도',
        method: '안전한 곳 찾아가기 지도', tool: 'map', minutes: 13,
        levels: { easy: '핀을 놓으면 그 칸의 이름이 바로 보인다.', base: '상황 3개(낮·밤·이웃)에 맞는 안전한 곳 3곳에 핀을 꽂는다.', challenge: '핀을 꽂은 뒤 그곳을 고른 까닭이나 두 갈래 길 가운데 안전한 길을 보기에서 고른다.' },
        activity: {
          title: '안전한 곳 찾아가기 지도', tool: 'map',
          teacher: '"하루네 집에서 무서운 일이 생기면 어디로 갈 수 있을까요?" 핀을 꽂기 전에 하루네 집에서 그곳까지 가는 길을 손가락으로 따라가 보게 한다. 빈 공터나 어두운 골목에 핀을 꽂는 학생에게 "그곳에서는 누가 하루를 지켜 줄 수 있을까요?"라고 되묻는다. 낮에는 학교 선생님, 밤에도 지구대의 경찰, 그리고 보호자와 미리 정해 둔 믿는 이웃 어른이 도움을 준다는 것을 짚는다.',
          task: '가상의 하루네 동네 지도에서 상황에 맞는 안전한 곳에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            PIN(TOWN, '낮에 선생님께 말하러 갈 곳에 핀을 꽂아요.', '학교', { q: '왜 이곳일까요?', choices: ['믿는 어른을 날마다 만나서', '놀이 기구가 있어서', '아무도 없어서'], answer: 0 }, 0.15),
            PIN(TOWN, '밤이라 학교가 닫혔을 때 갈 곳에 핀을 꽂아요.', '지구대', { q: '어느 길로 갈까요?', choices: ['사람 많은 큰 길', '어두운 빈 공터', '혼자 숨을 곳'], answer: 0 }, 0.2),
            PIN(TOWN, '보호자와 미리 정한 믿는 어른에게 갈 곳에 핀을 꽂아요.', '믿는 이웃 어른 댁', { q: '왜 이곳일까요?', choices: ['가깝고 믿는 어른이 있어서', '놀 수 있어서', '문이 잠겨 있어서'], answer: 0 }, 0.25, { conclude: '낮에는 학교, 밤에는 지구대, 그리고 미리 정한 믿는 이웃 어른. 안전한 곳을 알아 두어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '상황에 맞는 안전한 곳을 써요.', columns: ['상황', '안전한 곳'], cells: [['낮에 선생님을 만나려면', ''], ['밤에 학교가 닫혔을 때', '']], answer: '학교, 지구대' }] },
        notes: '지도는 가상의 동네다. 학생의 실제 집 위치를 묻지 않는다. 우리 학교 둘레의 실제 지구대 위치는 교사가 말로 알려 준다. 믿는 이웃 어른은 보호자와 미리 정해 두는 것이라고 말한다.',
      }),
      C({
        id: 'gender.e34.scary-at-home.activity.friend-help-choice', type: 'activity', title: '갈림길: "집이 무서워"라는 친구',
        method: '친구를 돕는 갈림길', tool: 'dilemma', minutes: 25,
        levels: { easy: '장면마다 갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '장면마다 갈림 2번(어떻게 할까 → 어느 어른께 갈까), 보기 3개씩 고르며 결과를 따라간다.', challenge: '갈림 2번을 지난 뒤 근거 카드 3장 가운데 알맞은 2장을 고른다.' },
        activity: {
          title: '갈림길: "집이 무서워"라는 친구', tool: 'dilemma',
          teacher: '"도윤이가 \'집이 무서워. 비밀이야\'라고 했어요. 비밀을 지켜 주는 것이 도윤이를 돕는 걸까요?" 결과를 소리 내어 읽고 다음 장면에서 다시 고른다. 비밀을 지키는 길을 고른 학생을 나무라지 않고 "친구와의 약속을 아끼는 마음이 멋져요. 그런데 이 비밀은 도윤이를 지켜 줄까요?"라고 되묻는다. 누가 다칠 수 있는 비밀은 지키지 않고 믿는 어른과 나누는 것이 친구를 돕는 일이고, 말하는 것은 가족이 벌을 받게 하는 나쁜 일이 아니라 가족 모두를 돕는 일이라는 것을 짚는다. 활동이 끝나면 학교가 알려 준 신고·상담 번호를 함께 읽어 본다.',
          task: '"집이 무서워"라고 말한 친구의 장면을 읽고 보기를 골라요. 결과를 보고 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('친구가 비밀이라며 말해요.', {
              text: '도윤이가 "집이 무서워. 아무한테도 말하지 마"라고 해요.', motif: 'cloud',
              choices: [
                { id: 'together', text: '"같이 선생님께 가자. 내가 곁에 있을게"', result: '도윤이가 잠깐 망설이다 고개를 끄덕였어요.', ending: '함께 가자고 한 것이 도윤이를 지키는 첫걸음이에요.', next: {
                  text: '어느 어른께 갈까요?', choices: [
                    { id: 'homeroom', text: '담임 선생님께 간다', result: '선생님이 도윤이 이야기를 차분히 들어 주셨어요.', impact: [{ who: '도윤', text: '도움을 받기 시작했어요', tone: 1 }], ending: '믿는 어른께 알려서 도윤이가 도움을 받았어요.' },
                    { id: 'counsel', text: '상담 선생님께 간다', result: '상담 선생님이 들어 주시고 담임 선생님과 함께 도우셨어요.', impact: [{ who: '도윤', text: '마음이 놓였어요', tone: 1 }], ending: '믿는 어른께 알려서 도윤이가 도움을 받았어요.' },
                    { id: 'friends', text: '반 친구들에게 알린다', result: '이야기가 퍼져 도윤이가 더 힘들어했어요.', impact: [{ who: '도윤', text: '창피해요', tone: -1 }], why: '여기저기 말하지 않고 믿는 어른께만 알려요.' },
                  ] } },
                { id: 'secret', text: '"알았어, 비밀 지킬게"', result: '도윤이는 그 뒤로도 혼자 무서워했어요.', impact: [{ who: '도윤', text: '도움을 못 받아요', tone: -1 }], why: '누가 다칠 수 있는 비밀은 믿는 어른과 나눠요.' },
                { id: 'ask', text: '"무슨 일인데? 다 말해 봐"', result: '도윤이가 입을 꼭 다물었어요.', impact: [{ who: '도윤', text: '불편해요', tone: -1 }], why: '캐묻지 않고 함께 어른께 가요.' },
              ] }, [['together', 'homeroom'], ['together', 'counsel']],
            [{ id: 'safe', text: '도윤이가 안전해야 해서' }, { id: 'adult', text: '어른은 도울 방법을 알아서' }, { id: 'promise', text: '약속은 무조건 지켜야 해서', why: '누가 다칠 수 있는 비밀은 지키지 않아도 돼요.' }], ['safe', 'adult'], 0.2),
            DIL('친구가 가족이 혼날까 걱정해요.', {
              text: '도윤이가 "말하면 우리 가족이 혼나. 그건 나쁜 일이잖아"라고 해요.', motif: 'house',
              choices: [
                { id: 'help', text: '"말하는 건 가족을 돕는 일이야"', result: '도윤이가 "정말?" 하고 물었어요.', ending: '말하기가 나쁜 일이 아니라는 것을 알려 줬어요.', next: {
                  text: '도윤이가 "그래도 무서워"라고 해요.', choices: [
                    { id: 'with', text: '"같이 가 줄게, 선생님이 방법을 찾아 주셔"', result: '둘이 함께 선생님을 찾아갔어요.', impact: [{ who: '도윤', text: '용기가 났어요', tone: 1 }], ending: '함께 가서 도윤이가 용기를 냈어요.' },
                    { id: 'wait', text: '"좀 더 참아 보자"', result: '도윤이는 계속 무서워했어요.', impact: [{ who: '도윤', text: '힘들어요', tone: -1 }], why: '참는다고 괜찮아지지 않아요. 어른께 알려요.' },
                    { id: 'myself', text: '"내가 너희 집에 가서 말할게"', result: '혼자 가려다 위험할 뻔했어요.', impact: [{ who: '나', text: '위험할 수 있어요', tone: -1 }], why: '어린이가 직접 해결하지 않고 어른께 알려요.' },
                  ] } },
                { id: 'agree', text: '"그럼 말하지 말자"', result: '도윤이는 도움을 받지 못했어요.', impact: [{ who: '도윤', text: '혼자 견뎌요', tone: -1 }], why: '말하는 것은 나쁜 일이 아니에요.' },
                { id: 'blame', text: '"너희 가족 나쁘다"', result: '도윤이가 더 속상해했어요.', impact: [{ who: '도윤', text: '가족이 걱정돼요', tone: -1 }], why: '가족을 탓하는 말 대신 함께 어른께 가요.' },
              ] }, [['help', 'with']],
            [{ id: 'family', text: '알리면 가족 모두를 도울 수 있어서' }, { id: 'notbad', text: '말하는 건 나쁜 일이 아니라서' }, { id: 'punish', text: '말하면 가족이 벌만 받아서', why: '알리면 어른들이 가족을 도울 방법을 찾아요.' }], ['family', 'notbad'], 0.25),
            DIL('친구가 참으면 된다고 해요.', {
              text: '도윤이가 "그냥 참으면 괜찮아질 거야"라고 해요.', motif: 'cloud',
              choices: [
                { id: 'noendure', text: '"혼자 참지 않아도 돼"', result: '도윤이가 눈물을 닦았어요.', ending: '혼자 참지 않아도 된다는 말이 도윤이에게 힘이 됐어요.', next: {
                  text: '도윤이가 "그럼 어떻게 해?"라고 물어요.', choices: [
                    { id: 'teacher', text: '"믿는 어른께 같이 말하자"', result: '도윤이가 담임 선생님께 말하기로 했어요.', impact: [{ who: '도윤', text: '방법을 알았어요', tone: 1 }], ending: '믿는 어른께 알리는 길을 함께 찾았어요.' },
                    { id: 'forget', text: '"재밌는 거 하면서 잊자"', result: '잠깐 웃었지만 걱정은 그대로예요.', impact: [{ who: '도윤', text: '여전히 무서워요', tone: 0 }], why: '잊는 것보다 어른께 알리는 것이 도와요.' },
                    { id: 'runaway', text: '"집에서 나와 버려"', result: '도윤이가 더 겁을 먹었어요.', impact: [{ who: '도윤', text: '위험할 수 있어요', tone: -1 }], why: '혼자 나가지 않고 믿는 어른께 알려요.' },
                  ] } },
                { id: 'yes', text: '"맞아, 참으면 돼"', result: '도윤이는 계속 혼자 참았어요.', impact: [{ who: '도윤', text: '힘들어요', tone: -1 }], why: '참는다고 괜찮아지지 않아요.' },
                { id: 'change', text: '다른 이야기를 한다', result: '도윤이는 다시 말을 꺼내지 못했어요.', impact: [{ who: '도윤', text: '외로워요', tone: -1 }] },
              ] }, [['noendure', 'teacher']],
            [{ id: 'notalone', text: '혼자 참지 않아도 돼서' }, { id: 'right', text: '누구나 안전할 권리가 있어서' }, { id: 'better', text: '참으면 저절로 나아져서', why: '참는다고 괜찮아지지 않아요. 도움을 청해요.' }], ['notalone', 'right'], 0.3, { conclude: '누가 다칠 수 있는 비밀은 믿는 어른과 나눠요. 말하는 것은 가족을 돕는 일이고, 어린이 잘못이 아니에요.' }),
          ],
        },
        worksheet: {
          items: [
            { type: 'choice', prompt: '친구가 "집이 무서워, 비밀이야"라고 하면?', options: ['함께 믿는 어른께 가요', '비밀을 꼭 지켜요', '자세히 캐물어요'], answer: '함께 믿는 어른께 가요' },
            { type: 'short', prompt: `${HELPNO}를 선생님과 함께 써요.` },
          ],
        },
        notes: '도윤이가 무엇 때문에 무서운지는 쓰지 않았다. 수업 중 걱정되는 말을 들으면 그 자리에서 캐묻지 말고 수업 뒤 조용히 듣고 학교의 아동학대·가정폭력 신고 절차를 따른다.',
      }),
      C({
        id: 'gender.e34.scary-at-home.wrap.safety-card', type: 'wrap', title: '나의 안전 카드',
        method: '나의 안전 카드 만들기', tool: 'collage', minutes: 6,
        levels: { easy: '믿는 어른 2명을 나타내는 조각 2개 이상을 붙이고 점검 2칸에 표시한다.', base: '믿는 어른 3명을 나타내는 조각 3개 이상을 붙이고 점검 3칸에 표시한다.', challenge: '조각 5개 이상으로 안전한 곳 그림까지 더하고 점검 4칸에 표시한다.' },
        wrap: {
          teacher: '"무서운 일이 있을 때 이야기할 믿는 어른을 떠올려 볼까요? 선생님, 보호자, 이웃 어른 누구든 괜찮아요." 사람을 나타내는 조각을 붙여 안전 카드를 꾸미고, 카드 아래 종이에 학교가 알려 준 신고·상담 번호를 함께 적는다. 믿는 어른이 떠오르지 않는 학생에게 "선생님도 믿는 어른이에요. 오늘 카드에 선생님을 넣어도 돼요"라고 말해 준다. 무서운 일은 혼자 참지 않고 알려도 되고, 어린이 잘못이 아니라는 것을 마무리로 말한다.',
          exitTicket: [
            COL('색종이 조각으로 믿는 어른이 담긴 안전 카드를 꾸며요.', ['믿는 어른을 붙였어요', '번호 칸을 함께 썼어요', '혼자 참지 않아요', '안전한 곳을 더했어요'], 2, 3, 5),
            { type: 'choice', prompt: '집에서 무서운 일이 있을 때 알맞은 생각은?', options: ['믿는 어른께 말해도 돼요', '참으면 괜찮아져요', '말하면 나쁜 일이에요'], answer: 0, difficulty: 0.1, explain: '말하는 것은 나와 가족을 돕는 일이에요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '나의 안전 카드',
          items: [
            { type: 'short', prompt: '무서운 일이 있을 때 이야기할 믿는 어른을 써요.' },
            { type: 'short', prompt: `${HELPNO}를 선생님과 함께 써요.` },
          ],
          easy: { note: '선생님도 믿는 어른이에요.', items: [{ type: 'choice', prompt: '무서운 일이 있으면?', options: ['믿는 어른께 말해요', '혼자 참아요'], answer: '믿는 어른께 말해요' }] },
        },
        notes: '안전 카드에 쓴 믿는 어른 이름은 발표하지 않는다. 카드는 학생이 가져가거나 교사가 보관하는 것 중 학생이 고르게 한다.',
      }),
      C({
        id: 'gender.e34.scary-at-home.wrap.calm-check', type: 'wrap', title: '무서울 때 마음 다스리기 점검',
        method: '무서울 때 마음 다스리기 점검', tool: 'timer', minutes: 6,
        levels: { easy: '숨쉬기 세 번 뒤 점검 1칸("말해도 돼요")에 표시한다.', base: '점검 2칸("내 잘못 아니에요" 더함)에 표시한다.', challenge: '점검 3칸에 표시하고, 칸마다 이유를 짝에게 말한다.' },
        wrap: {
          teacher: '"무섭거나 마음이 떨릴 때 먼저 숨을 천천히 세 번 쉬어 볼까요?" 다 함께 숨을 고른 뒤, 마음에 새길 말을 소리 내어 읽고 스스로 표시하게 한다. "내 잘못 아니에요" 칸을 망설이는 학생에게 "무서운 일이 생긴 것은 어린이 잘못일까요? 선생님은 아니라고 생각해요"라고 말해 준다. 무서울 때는 숨을 고르고, 믿는 어른께 말하고, 그것은 잘한 일이라는 것을 마무리로 말한다.',
          exitTicket: [
            SELF('무서울 때 마음 다스리기', ['"말해도 돼요"', '"내 잘못이 아니에요"', '이유를 말했어요'], '숨을 세 번 쉰 뒤 마음에 새길 말에 표시해요.', 2, 1, 3),
            { type: 'choice', prompt: '무섭거나 마음이 떨릴 때 먼저 해 볼 것은?', options: ['천천히 숨 고르기', '혼자 숨어 버리기', '참고 잊기'], answer: 0, difficulty: 0.1, explain: '숨을 고른 뒤 믿는 어른께 말해요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '무서울 때',
          items: [
            { type: 'check', prompt: '무서울 때 할 일에 표시해요.', options: ['숨을 천천히 쉬어요', '믿는 어른께 말해요', '혼자 참아요'] },
            { type: 'short', prompt: '나에게 해 줄 응원의 말을 한 줄로 써요.' },
          ],
          easy: { note: '말하는 것은 잘한 일이에요.', items: [{ type: 'choice', prompt: '무서운 일은 누구 잘못?', options: ['내 잘못이 아니에요', '내 잘못이에요'], answer: '내 잘못이 아니에요' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 4학년 · 사춘기 몸의 변화와 사람마다 다른 빠르기 (research-mandatory §2 초: 몸의 변화와 사춘기)
  // ======================================================================================================
  {
    const C = T('puberty-changes', 4);
    const AGE = { type: 'picture', title: '사춘기가 시작된 나이(가상의 반 친구들)', unit: '명', xLabel: '시작한 나이', yLabel: '친구 수', icons: [{ value: 5, name: '5명' }, { value: 1, name: '1명' }], icon: 'person' };
    const A10 = [['9살', 1], ['10살', 2], ['11살', 4], ['12살', 2], ['13살', 1]];
    const A6 = [['10살', 2], ['11살', 3], ['12살', 1]];
    const AC = (data, extra) => Object.assign({}, AGE, extra, { data });
    M.push(
      C({
        id: 'gender.e34.puberty-changes.intro.puberty-word', type: 'intro', title: '"사춘기" 하면 떠오르는 것',
        method: '"사춘기" 하면 떠오르는 것', tool: 'mindmap', minutes: 6,
        levels: { easy: '낱말 카드 3장을 몸·마음·친구 가지에 함께 넣는다.', base: '카드 5장을 가지에 넣는다.', challenge: '가지마다 궁금한 점을 하나씩 말해 질문 상자에 넣는다(교사 진행).' },
        intro: {
          teacher: '"\'사춘기\' 하면 무엇이 떠오르나요?" 시연 단추로 낱말 카드가 몸·마음·친구 가지에 놓이는 것을 보인다. 웃음이 나오면 "사춘기는 누구나 지나는 자람의 때예요. 부끄러운 말이 아니에요"라고 말해 준다. "사춘기는 중학생이 돼야 와요"라는 말이 나오면 "언제 시작하는지는 사람마다 달라요. 오늘 함께 알아볼까요?"라고 되묻는다. 사춘기에는 몸과 마음, 친구 관계가 함께 자란다는 것을 밝힌다.',
          student: '"사춘기"에 떠오르는 낱말 카드를 몸·마음·친구 가지에 넣어요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '사춘기', slots: ['몸', '마음', '친구'], cards: ['키가 자라요', '기분이 자주 바뀌어요', '친구가 중요해져요', '여드름이 나요', '혼자 있고 싶어요'], shuffle: false }, sequence: [{ sort: { 몸: ['키가 자라요'], 마음: ['기분이 자주 바뀌어요'], 친구: ['친구가 중요해져요'] } }, { sort: { 몸: ['키가 자라요', '여드름이 나요'], 마음: ['기분이 자주 바뀌어요', '혼자 있고 싶어요'], 친구: ['친구가 중요해져요'] } }] },
          art: { draw: 'a paper tree in the middle with three paper branches labelled by small paper icons of a body, a heart and two friends, little paper word cards hanging like leaves', banner: '사춘기는 자람의 때', extra: [{ motif: 'leaf', x: 300, y: 96, color: 'mint' }] },
        },
        notes: '궁금한 점은 이름을 쓰지 않은 쪽지로 받아 질문 상자에 모으고, 다음 시간에 보건 선생님·표준안 자료로 답한다.',
      }),
      C({
        id: 'gender.e34.puberty-changes.intro.grow-body', type: 'intro', title: '사춘기에 달라지는 몸',
        method: '자라는 몸 부분 고르기', tool: 'body', minutes: 6,
        levels: { easy: '종이 몸에서 달라지는 부분 2곳(목·가슴)을 함께 짚는다.', base: '4곳(피부·어깨 더함)을 짚는다.', challenge: '짚은 곳을 공통·여자·남자 변화로 나눠 말해 본다(교사 진행).' },
        intro: {
          teacher: '"사춘기가 되면 몸의 어디가 달라질까요?" 시연 단추로 종이 몸의 목(목소리), 가슴, 피부(여드름), 어깨가 차례로 짚이는 것을 보인다. 키가 자라고 겨드랑이에 털이 나는 것은 그림에 칸이 없어 교사가 말로 덧붙인다. "남자만 변해요"라는 말이 나오면 "여자도 남자도 모두 변해요. 같은 변화도 있고 다른 변화도 있어요"라고 말해 준다. 이 변화는 누구나 겪는 자연스러운 자람이라는 것을 밝힌다.',
          student: '종이 몸에서 사춘기에 달라지는 부분을 찾아요.',
          demo: { tool: 'body', options: { mode: 'parts', parts: ['목', '가슴', '피부', '어깨', '무릎', '발목'], names: true }, sequence: [{ parts: ['목', '가슴'] }, { parts: ['목', '가슴', '피부', '어깨'] }] },
          art: { draw: 'a friendly paper body outline of a growing child next to a paper measuring stick, small paper sparkle marks near the throat, chest, shoulders and face', banner: '몸이 자라요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '몸 교구에 키·겨드랑이 칸이 없어 목·가슴·피부·어깨로 짚고 나머지는 말로 덧붙인다. 학생 서로의 몸을 비교하거나 짚게 하지 않는다.',
      }),
      C({
        id: 'gender.e34.puberty-changes.activity.change-sort', type: 'activity', title: '공통·여자·남자 변화 나누기',
        method: '공통·여자·남자 변화 나누기', tool: 'sortboard', minutes: 14,
        levels: { easy: '첫 문항은 카드 4장을 바구니 3개에, 둘째·셋째 문항은 카드 4장을 바구니 2개에 나누고, 틀리면 바로 되돌아온다.', base: '첫 문항 7장, 둘째·셋째 문항 6장을 나눈 뒤 확인한다.', challenge: '헷갈리는 카드가 더해진 판을 나누고, 헷갈린 카드를 짝과 이유로 확인한다.' },
        activity: {
          title: '공통·여자·남자 변화 나누기', tool: 'sortboard',
          teacher: '"이 변화는 여자와 남자 모두에게 일어날까요, 한쪽에 더 나타날까요?" 카드를 넣을 때마다 까닭을 말하게 한다. "여드름은 남자만 나요"라는 말이 나오면 "여자도 남자도 피지가 많아지면 날 수 있어요"라고 바로잡는다. "늦게 오면 이상한 거예요"라는 카드에서는 "시작하는 때와 빠르기는 사람마다 달라요. 빠르든 느리든 모두 자연스러워요"라고 말한다. 같은 변화가 많고, 다른 변화도 모두 자연스러운 자람이라는 것을 짚는다.',
          task: '사춘기 몸의 변화 카드를 공통·여자·남자 바구니에 나누고, 맞는 말과 틀린 말을 가려요.', levels: BOXLV,
          items: [
            BOX('사춘기 몸의 변화를 나누어요.', ['공통', '여자', '남자'], [['키가 쑥 자라요', '여드름이 나요', '땀 냄새가 나요'], ['가슴이 나와요', '골반이 넓어져요'], ['어깨가 넓어져요', '목소리가 굵어져요']], [[0, 2], [1, 1], [2, 1]], [['겨드랑이 털이 나요'], [], []], 0.15),
            BOX('사춘기 변화인 것과 아닌 것을 나누어요.', ['사춘기 변화', '변화가 아니에요'], [['몸무게가 늘어요', '피지가 많아져요', '마음이 자주 바뀌어요'], ['키가 줄어요', '땀이 없어져요', '모두 같은 날 시작']], [[0, 2], [1, 2]], [['털이 나기 시작해요'], ['갑자기 어른이 돼요']], 0.2),
            BOX('사춘기 빠르기에 대한 말을 나누어요.', ['맞는 말', '틀린 말'], [['시작은 사람마다 달라요', '빠르기도 사람마다', '모두 자연스러워요'], ['모두 같은 나이에 와요', '늦으면 이상해요', '빠르면 이상해요']], [[0, 2], [1, 2]], [['궁금하면 물어봐요'], ['친구와 비교해야 해요']], 0.25, { conclude: '사춘기 변화는 같은 것이 많고, 시작과 빠르기는 사람마다 달라요. 모두 자연스러운 자람이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '친구는 키가 컸는데 나는 아직이에요. 바른 생각은?', options: ['사람마다 빠르기가 달라요', '내가 이상해요', '친구가 이상해요'], answer: '사람마다 빠르기가 달라요' }] },
        notes: '화면에는 체계도 concepts(공통 변화·여자·남자 변화) 수준의 낱말만 썼다. 월경·몽정처럼 표준안에서 다루는 낱말은 화면에 쓰지 않았다 — 다룰 때는 보건 선생님·표준안 그림 자료로 교사가 말로 알려 준다.',
      }),
      C({
        id: 'gender.e34.puberty-changes.activity.start-age-chart', type: 'activity', title: '사춘기 시작 나이 그래프',
        method: '사춘기 시작 나이 그림그래프', tool: 'chart', minutes: 13,
        levels: { easy: '친구 6명의 가상 자료로 그림그래프를 만들고 읽는다(첫 칸 그림은 미리 놓임).', base: '친구 10명의 가상 자료로 그림그래프를 만들고 읽는다.', challenge: '10명 자료에서 가장 이른 나이와 가장 늦은 나이의 차이를 찾아 말한다.' },
        activity: {
          title: '사춘기 시작 나이 그래프', tool: 'chart',
          teacher: '"가상의 반 친구 열 명이 사춘기가 시작된 나이를 그래프로 그려 볼까요?" 표의 수를 함께 읽고 그림을 놓는다. 큰 그림을 1명으로 세는 학생에게 "큰 그림 하나는 몇 명이었나요?"라고 되묻는다. "11살이 제일 많으니까 11살에 와야 해요"라는 말이 나오면 "9살에 시작한 친구, 13살에 시작한 친구는 틀린 걸까요?"라고 묻는다. 이 자료는 가상이고, 실제로도 시작 나이는 사람마다 다르다는 것을 짚는다.',
          task: '가상의 반 친구들이 사춘기를 시작한 나이를 그림그래프로 나타내고 사람마다 다른지 읽어요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '표를 보고 시작 나이 그림그래프를 완성해요.', toolOptions: AC(A10, { mode: 'build', showTable: true }), target: { build: true }, difficulty: 0.15,
              levels: { easy: { prompt: '표를 보고 친구 6명의 그림그래프를 완성해요.', toolOptions: AC(A6, { mode: 'build', showTable: true, given: [0] }), target: { build: true } } } },
            { prompt: '가장 많은 친구가 시작한 나이는 몇 살인가요?', toolOptions: AC(A10, { mode: 'read', question: '가장 많은 나이는?', choices: A10.map((d) => d[0]) }), target: { pick: 2 }, difficulty: 0.15,
              levels: { easy: { prompt: '친구 6명 가운데 가장 많은 친구가 시작한 나이는?', toolOptions: AC(A6, { mode: 'read', question: '가장 많은 나이는?', choices: A6.map((d) => d[0]) }), target: { pick: 1 } } } },
            { prompt: '그래프로 알 수 있는 사춘기 시작에 대한 말을 골라요.', toolOptions: AC(A10, { mode: 'read', question: '알 수 있는 것은?', choices: ['시작 나이는 사람마다 달라요', '모두 11살에 시작해요', '늦게 시작하면 이상해요'] }), target: { pick: 0 }, difficulty: 0.2,
              levels: { easy: { toolOptions: AC(A6, { mode: 'read', question: '알 수 있는 것은?', choices: ['시작 나이는 사람마다 달라요', '모두 같은 나이에 시작해요'] }), target: { pick: 0 } },
                challenge: { prompt: '가장 이른 나이와 가장 늦은 나이는 몇 살 차이인가요?', toolOptions: AC(A10, { mode: 'read', question: '몇 살 차이?', choices: ['4살', '2살', '1살'] }), target: { pick: 0 } } },
              conclude: '사춘기가 시작되는 나이는 사람마다 달라요. 빠르든 느리든 모두 자연스러워요.' },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '이 그래프의 자료는 무엇인가요?', options: ['가상의 반 친구 자료', '우리 반 실제 자료', '어른들 자료'], answer: '가상의 반 친구 자료' }] },
        notes: '그래프 자료는 가상이다(화면 제목에 밝힘). 우리 반 학생에게 사춘기가 시작됐는지 묻거나 조사하지 않는다.',
      }),
      C({
        id: 'gender.e34.puberty-changes.activity.tease-choice', type: 'activity', title: '갈림길: 변화가 빠른 친구 놀림',
        method: '변화가 빠른 친구 놀림 상황', tool: 'dilemma', minutes: 25,
        levels: { easy: '장면마다 갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '장면마다 갈림 2번, 보기 3개씩 고르며 결과를 따라간 뒤 고른 이유를 짝에게 말한다.', challenge: '갈림 2번을 지난 뒤 근거 카드 3장 가운데 알맞은 2장을 고른다.' },
        activity: {
          title: '변화가 빠른 친구 놀림', tool: 'dilemma',
          teacher: '"키가 갑자기 큰 친구를 반 친구들이 놀려요. 어떻게 할까요?" 결과를 소리 내어 읽고 다음 장면에서 다시 고른 뒤 짝에게 이유를 말하게 한다. 따라 웃는 길을 고른 학생을 나무라지 않고 "웃음이 났군요. 그 친구는 지금 웃고 싶을까요?"라고 되묻는다. 화제를 바꾸는 것도 놀림을 멈추는 방법이고, 말리기 어려우면 선생님께 알려도 된다는 것을 짚는다. 사춘기 변화는 놀림거리가 아니고, 놀리는 쪽이 잘못이라는 것을 꼭 말한다.',
          task: '사춘기 변화가 빠른 친구를 놀리는 장면을 읽고 보기를 골라요. 결과를 보고 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('키가 갑자기 큰 친구를 놀려요.', {
              text: '방학 뒤 키가 훌쩍 큰 하린이를 보고 몇몇 친구가 "거인 왔다!"라고 놀려요.', motif: 'tree',
              choices: [
                { id: 'stop', text: '"놀리지 마. 누구나 자라"', result: '친구들이 머쓱해했어요.', ending: '그만하라고 말한 것은 하린이를 지킨 일이에요.', next: {
                  text: '한 친구가 "그냥 장난이야"라며 또 부르려 해요.', choices: [
                    { id: 'topic', text: '"우리 피구 하러 가자" 화제를 바꾼다', result: '친구들이 운동장으로 뛰어갔어요.', impact: [{ who: '하린', text: '마음이 놓였어요', tone: 1 }], ending: '화제를 바꿔 놀림을 멈췄어요.' },
                    { id: 'laugh', text: '"하긴 좀 웃기다" 웃는다', result: '놀림이 다시 시작됐어요.', impact: [{ who: '하린', text: '속상해요', tone: -1 }], why: '함께 웃으면 놀림이 계속돼요.' },
                    { id: 'back', text: '그 친구 몸을 똑같이 놀린다', result: '서로 놀리다 다툼이 났어요.', impact: [{ who: '모두', text: '속상해졌어요', tone: -1 }], why: '똑같이 놀리지 않고 멈추게 해요.' },
                  ] } },
                { id: 'join', text: '따라 웃는다', result: '하린이가 몸을 웅크렸어요.', impact: [{ who: '하린', text: '창피해요', tone: -1 }], why: '따라 웃으면 놀리는 친구가 더 신나요.' },
                { id: 'watch', text: '못 본 척한다', result: '놀림은 계속됐어요.', impact: [{ who: '하린', text: '혼자 견뎌요', tone: -1 }] },
              ] }, [['stop', 'topic']],
            [{ id: 'natural', text: '사춘기 변화는 자연스러워서' }, { id: 'feel', text: '하린이가 싫어해서' }, { id: 'joke', text: '장난이면 괜찮아서', why: '받는 친구가 싫으면 장난이 아니에요.' }], ['natural', 'feel'], 0.2),
            DIL('목소리가 바뀐 친구를 흉내 내요.', {
              text: '발표하는 준서의 목소리가 갈라지자 뒤에서 몇몇 친구가 흉내를 내요.', motif: 'cloud',
              choices: [
                { id: 'teacher', text: '쉬는 시간에 선생님께 알린다', result: '선생님이 반 친구들과 사춘기 이야기를 나누셨어요.', ending: '알린 것은 준서를 지키는 일이에요.', next: {
                  text: '준서가 "다시는 발표 안 할래"라고 해요.', choices: [
                    { id: 'cheer', text: '"네 발표 좋았어. 목소리는 누구나 변해"', result: '준서가 조금 웃었어요.', impact: [{ who: '준서', text: '힘이 나요', tone: 1 }], ending: '응원하는 말이 준서에게 힘이 됐어요.' },
                    { id: 'agree', text: '"그래, 하지 마"', result: '준서는 다음 발표를 피했어요.', impact: [{ who: '준서', text: '자신 없어요', tone: -1 }], why: '변화 때문에 하고 싶은 일을 포기하지 않게 응원해요.' },
                    { id: 'tease', text: '"진짜 웃기긴 했어"', result: '준서가 더 속상해했어요.', impact: [{ who: '준서', text: '상처받았어요', tone: -1 }], why: '사춘기 변화는 놀림거리가 아니에요.' },
                  ] } },
                { id: 'mimic', text: '같이 흉내 낸다', result: '준서가 발표를 멈췄어요.', impact: [{ who: '준서', text: '창피해요', tone: -1 }], why: '흉내는 친구 마음을 다치게 해요.' },
                { id: 'giggle', text: '키득키득 웃는다', result: '흉내 내는 친구가 더 신났어요.', impact: [{ who: '준서', text: '속상해요', tone: -1 }], why: '웃음도 놀림에 힘을 보태요.' },
              ] }, [['teacher', 'cheer']],
            [{ id: 'all', text: '목소리는 누구나 변해서' }, { id: 'help', text: '어른이 놀림을 멈출 수 있어서' }, { id: 'funny', text: '웃기니까 괜찮아서', why: '웃긴다고 놀려도 되는 것은 아니에요.' }], ['all', 'help'], 0.25),
            DIL('여드름 난 친구를 놀려요.', {
              text: '모둠 친구가 "얼굴에 뭐가 이렇게 많아?"라며 서윤이 얼굴을 가리켜요.', motif: 'house',
              choices: [
                { id: 'say', text: '"여드름은 누구나 날 수 있어"', result: '모둠 친구가 손을 내렸어요.', ending: '바른 말로 서윤이를 지켰어요.', next: {
                  text: '서윤이가 "나 이상해 보여?"라고 물어요.', choices: [
                    { id: 'fine', text: '"아니, 자라는 중이야"', result: '서윤이가 마음을 놓았어요.', impact: [{ who: '서윤', text: '편해요', tone: 1 }], ending: '친구의 변화를 존중하는 말을 했어요.' },
                    { id: 'compare', text: '"나보다 많긴 해"', result: '서윤이가 고개를 숙였어요.', impact: [{ who: '서윤', text: '속상해요', tone: -1 }], why: '친구와 몸을 비교하지 않아요.' },
                    { id: 'joke', text: '"점 찍은 것 같아" 장난친다', result: '서윤이가 울먹였어요.', impact: [{ who: '서윤', text: '상처받았어요', tone: -1 }], why: '장난이라도 몸을 놀리지 않아요.' },
                  ] } },
                { id: 'point', text: '같이 가리키며 웃는다', result: '서윤이가 얼굴을 가렸어요.', impact: [{ who: '서윤', text: '창피해요', tone: -1 }], why: '몸의 변화를 놀리면 친구가 상처받아요.' },
                { id: 'silent', text: '아무 말도 안 한다', result: '모둠 친구가 계속 놀렸어요.', impact: [{ who: '서윤', text: '외로워요', tone: -1 }] },
              ] }, [['say', 'fine']],
            [{ id: 'nocompare', text: '몸을 비교하지 않아야 해서' }, { id: 'growing', text: '모두 자라는 중이라서' }, { id: 'true', text: '사실을 말한 거라서', why: '사실이어도 놀리는 말은 친구를 다치게 해요.' }], ['nocompare', 'growing'], 0.3, { conclude: '사춘기 변화는 놀림거리가 아니에요. 놀리지 않고, 비교하지 않고, 어려우면 선생님께 알려요.' }),
          ],
        },
        worksheet: {
          items: [
            { type: 'choice', prompt: '친구의 사춘기 변화를 놀리는 것을 보았을 때 할 수 있는 일은?', options: ['그만하라고 하거나 화제를 바꿔요', '따라 웃어요', '구경해요'], answer: '그만하라고 하거나 화제를 바꿔요' },
            { type: 'short', prompt: '사춘기 변화로 걱정하는 친구에게 해 줄 말을 한 줄로 써요.' },
          ],
        },
        notes: '하린·준서·서윤은 가명의 가상 인물이다. 우리 반 실제 친구의 몸 변화를 예로 들지 않는다.',
      }),
      C({
        id: 'gender.e34.puberty-changes.wrap.change-timeline', type: 'wrap', title: '아기에서 어른까지, 사춘기는 어디',
        method: '아기에서 어른까지 띠에 사춘기 놓기', tool: 'timeline', minutes: 6,
        levels: { easy: '자람 카드 3장(아기·사춘기·어른)을 띠에 놓고, 일 잇기 2줄을 한다.', base: '카드 4장(어린이 더함)을 놓고, 일 잇기 4줄을 한다.', challenge: '틀린 카드 한 장을 빼고 4장을 놓으며, 일 잇기에서 남는 카드 한 장을 가려낸다.' },
        wrap: {
          teacher: '"아기에서 어른이 되기까지, 사춘기는 어디쯤일까요?" 자람 카드를 띠에 놓은 뒤 때마다 일어나는 일을 잇게 한다. 사춘기를 어른 뒤에 놓는 학생에게 "사춘기를 지나면 무엇이 될까요?"라고 되묻는다. 사춘기는 어린이에서 어른으로 가는 다리 같은 때이고, 그 시작은 사람마다 다르다는 것을 마무리로 말한다.',
          exitTicket: [
            EX('timeline', ORD('자라는 차례대로 띠에 놓아요.', { axis: ['아기 때', '어른'] }, [{ id: 'baby', text: '아기' }, { id: 'child', text: '어린이' }, { id: 'teen', text: '사춘기' }, { id: 'adult', text: '어른' }], [0, 2, 3], { id: 'skip', text: '사춘기 없이 어른', why: '누구나 사춘기를 지나 어른이 돼요.' }, 0.15, null, true)),
            EX('timeline', MATCH('자라는 때와 그때 일어나는 일을 이어요.', { mode: 'match' }, [['아기', '걸음마를 배워요'], ['어린이', '학교에 다녀요'], ['사춘기', '몸과 마음이 크게 변해요'], ['어른', '스스로 책임져요']], '변하지 않아요', 0.2)),
            MOOD,
          ],
        },
        worksheet: {
          title: '사춘기는 자람의 다리',
          items: [
            { type: 'choice', prompt: '사춘기는 언제일까요?', options: ['어린이와 어른 사이', '아기 때', '어른이 된 뒤'], answer: '어린이와 어른 사이' },
            { type: 'short', prompt: '사춘기에 대해 더 알고 싶은 것을 한 줄로 써요.' },
          ],
          easy: { note: '누구나 사춘기를 지나요.', items: [{ type: 'choice', prompt: '사춘기는 누구에게 와요?', options: ['누구에게나', '몇 명에게만'], answer: '누구에게나' }] },
        },
      }),
      C({
        id: 'gender.e34.puberty-changes.wrap.respect-check', type: 'wrap', title: '사춘기 존중 스스로 점검',
        method: '존중 스스로 점검', tool: 'timer', minutes: 6,
        levels: { easy: '점검 2칸(비교하지 않기·놀리지 않기)에 표시한다.', base: '점검 3칸(빠르기는 달라요 더함)에 표시한다.', challenge: '점검 4칸에 표시하고, 한 칸을 사례로 짝에게 설명한다.' },
        wrap: {
          teacher: '"친구의 사춘기 변화를 존중하는 방법, 나는 어디까지 할 수 있을까요?" 칸마다 읽어 주고 스스로 표시하게 한다. "비교하지 않기는 어려워요"라는 말이 나오면 "맞아요, 쉽지 않아요. 그럴 때 마음속으로 \'사람마다 달라\'라고 말해 보면 어떨까요?"라고 제안한다. 나의 변화도 친구의 변화도 모두 자연스럽다는 것을 마무리로 말한다.',
          exitTicket: [
            SELF('사춘기 존중 스스로 점검', ['비교하지 않아요', '놀리지 않아요', '빠르기는 달라요', '사례로 설명했어요']),
            { type: 'choice', prompt: '내 몸의 변화가 걱정될 때 할 수 있는 일은?', options: ['보호자·보건 선생님께 물어요', '혼자 숨겨요', '친구와 비교해요'], answer: 0, difficulty: 0.1, explain: '궁금하거나 걱정되면 믿는 어른께 물어봐요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '사춘기 존중',
          items: [
            { type: 'check', prompt: '사춘기 친구를 존중하는 행동에 표시해요.', options: ['비교하지 않아요', '놀리지 않아요', '변화를 흉내 내요'] },
            { type: 'short', prompt: '사춘기 변화가 걱정될 때 물어볼 어른을 써요.' },
          ],
          easy: { note: '사람마다 빠르기가 달라요.', items: [{ type: 'choice', prompt: '변화가 늦으면 이상할까요?', options: ['아니에요', '맞아요'], answer: '아니에요' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 4학년 · 땀과 냄새, 사춘기 몸 씻기 (research-mandatory §2 초: 몸의 변화와 사춘기 + 보건 개인위생)
  // ======================================================================================================
  {
    const C = T('puberty-hygiene', 4);
    const KIT = [{ id: 'soap', text: '비누', price: 1000 }, { id: 'towel', text: '수건', price: 3000 }, { id: 'socks', text: '여벌 양말', price: 2000 }, { id: 'lotion', text: '로션', price: 4000 }, { id: 'perfume', text: '향수', price: 8000 }, { id: 'toy', text: '물총', price: 3000 }];
    const S = (...ids) => ids.map((id) => KIT.find((k) => k.id === id));
    M.push(
      C({
        id: 'gender.e34.puberty-hygiene.intro.sweat-where', type: 'intro', title: '땀이 많이 나는 곳',
        method: '땀이 많이 나는 곳 찾기', tool: 'body', minutes: 6,
        levels: { easy: '종이 몸에서 땀이 많이 나는 곳 2곳(목·발목 쪽)을 함께 짚는다.', base: '3곳(피부 더함)을 짚고, 겨드랑이·발·머리는 자기 몸을 가리키며 말한다.', challenge: '짚은 곳마다 씻는 방법을 짝에게 말해 본다(교사 진행).' },
        intro: {
          teacher: '"사춘기가 되면 땀이 더 많이 나요. 몸의 어디에서 땀이 많이 날까요?" 시연 단추로 종이 몸의 목, 발목 쪽, 피부가 짚이는 것을 보인 뒤, 겨드랑이·발·머리는 그림에 칸이 없어 학생이 자기 몸을 가리키며 함께 말하게 한다. "땀은 더러운 거예요"라는 말이 나오면 "땀은 몸의 열을 식혀 주는 고마운 거예요. 다만 씻지 않으면 냄새가 날 수 있어요"라고 말해 준다. 오늘은 자라는 몸을 깨끗이 돌보는 방법을 알아본다고 밝힌다.',
          student: '종이 몸에서 땀이 많이 나는 곳을 찾고, 내 몸에서도 가리켜 보아요.',
          demo: { tool: 'body', options: { mode: 'parts', parts: ['목', '발목', '피부', '어깨', '무릎', '허리'], names: true }, sequence: [{ parts: ['목', '발목'] }, { parts: ['목', '발목', '피부'] }] },
          art: { draw: 'a paper child after running on a sunny paper playground, tiny paper water droplets floating near the neck, arms and feet, a paper towel and soap waiting nearby', banner: '땀이 많이 나는 곳', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
        notes: '몸 교구에 겨드랑이·발·머리 칸이 없어 목·발목·피부로 짚고, 나머지는 학생이 자기 몸을 가리키게 했다. 친구의 냄새·몸을 말하게 하지 않는다.',
      }),
      C({
        id: 'gender.e34.puberty-hygiene.intro.why-smell', type: 'intro', title: '냄새가 나는 까닭',
        method: '냄새가 나는 까닭 모으기', tool: 'mindmap', minutes: 6,
        levels: { easy: '까닭 카드 4장 가운데 2장을 함께 고른다.', base: '카드 6장 가운데 까닭 4장을 고른다.', challenge: '까닭마다 해결 방법(씻기·갈아입기)을 짝에게 말해 본다(교사 진행).' },
        intro: {
          teacher: '"사춘기에 몸에서 냄새가 나는 까닭은 무엇일까요?" 시연 단추로 까닭 카드가 바구니에 담기는 것을 보인다. "냄새나는 친구는 게을러서 그래요"라는 말이 나오면 "사춘기에는 누구나 땀과 피지가 많아져요. 그 친구를 탓할 일일까요, 씻는 방법을 알면 될 일일까요?"라고 되묻는다. 냄새는 땀과 피지, 세균, 갈아입지 않은 옷 때문이고 씻고 갈아입으면 줄어든다는 것을 짚는다.',
          student: '사춘기에 몸에서 냄새가 나는 까닭 카드를 골라요.',
          demo: { tool: 'mindmap', options: { mode: 'pick', basket: '냄새가 나는 까닭', cards: [{ id: 'sweat', text: '땀이 많아져요' }, { id: 'germ', text: '세균이 늘어요' }, { id: 'water', text: '물을 마셔서' }, { id: 'clothes', text: '옷을 안 갈아입음' }, { id: 'oil', text: '피지가 많아져요' }, { id: 'soap', text: '비누를 써서' }], shuffle: false }, sequence: [{ pick: ['sweat', 'germ'] }, { pick: ['sweat', 'germ', 'clothes', 'oil'] }] },
          art: { draw: 'a paper laundry basket with folded clean shirts on one side and a crumpled sweaty sock with small paper wavy lines on the other side, a bar of paper soap in the middle', banner: '냄새는 왜 날까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
      }),
      C({
        id: 'gender.e34.puberty-hygiene.activity.wash-order', type: 'activity', title: '샤워 차례와 시간 계획',
        method: '샤워 차례 따라 정하기', tool: 'timer', minutes: 14,
        levels: { easy: '씻는 단계 3개(머리·몸·말리기)의 차례를 맞추고, 3단계 시간 계획을 맞춘다.', base: '단계 4개(발 씻기 더함)의 차례를 맞추고, 4단계 시간 계획을 맞춘다.', challenge: '단계 4개 차례·시간 계획을 맞춘 뒤, 운동한 날 계획의 차례도 따로 맞춘다.' },
        activity: {
          title: '샤워 차례와 시간 계획', tool: 'timer',
          teacher: '"샤워할 때 어떤 차례로 씻으면 좋을까요?" 순서 카드를 놓은 뒤 "위에서 아래로 씻으면 거품이 아래로 흘러 한 번에 헹굴 수 있어요"라고 까닭을 말해 준다. 구간 타이머는 우리 반 약속으로 단계마다 2분씩 계획해 보게 한다. "냄새날 때만 씻으면 돼요"라는 말이 나오면 "땀은 냄새가 나기 전부터 나요. 언제 씻으면 좋을까요?"라고 되묻는다. 운동하거나 땀을 많이 흘린 날은 바로 씻고 갈아입는다는 것을 짚는다.',
          task: '샤워하는 단계의 차례를 맞추고, 단계마다 걸리는 시간을 구간 타이머로 계획해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '샤워하는 단계를 차례대로 놓아요.', toolOptions: { title: '샤워 차례', cards: ['물기 말리기', '발 씻기', '머리 감기', '몸 씻기'] }, target: { order: ['머리 감기', '몸 씻기', '발 씻기', '물기 말리기'] }, difficulty: 0.15,
              levels: { easy: { prompt: '샤워하는 단계 3개를 차례대로 놓아요.', toolOptions: { cards: ['물기 말리기', '머리 감기', '몸 씻기'] }, target: { order: ['머리 감기', '몸 씻기', '물기 말리기'] } } } },
            { prompt: '단계마다 2분씩, 4단계로 씻는 계획을 맞춰요.', toolOptions: { title: '씻기 시간 계획(우리 반 약속)', timeUnit: 'min', plan: { work: 1, rest: 0, rounds: 1 } }, target: { plan: { work: 2, rounds: 4 } }, difficulty: 0.2,
              levels: { easy: { prompt: '단계마다 2분씩, 3단계로 씻는 계획을 맞춰요.', target: { plan: { work: 2, rounds: 3 } } } } },
            { prompt: '운동한 날 씻는 차례를 놓아요.', toolOptions: { title: '운동한 날', cards: ['깨끗한 옷 입기', '땀 닦기', '몸 씻기'] }, target: { order: ['땀 닦기', '몸 씻기', '깨끗한 옷 입기'] }, difficulty: 0.2,
              levels: { easy: { prompt: '운동한 날 씻는 차례 2개를 놓아요.', toolOptions: { cards: ['깨끗한 옷 입기', '몸 씻기'] }, target: { order: ['몸 씻기', '깨끗한 옷 입기'] } } },
              conclude: '위에서 아래로 씻고 물기를 잘 말려요. 땀을 많이 흘린 날은 바로 씻고 갈아입어요.' },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '샤워는 언제 하면 좋을까요?', options: ['날마다, 땀 흘린 날은 바로', '냄새가 날 때만', '일주일에 한 번'], answer: '날마다, 땀 흘린 날은 바로' }] },
        notes: '단계마다 2분은 연습용 "우리 반 약속" 값이다. 씻는 횟수·방법은 가정 형편이 저마다 다르니 "우리 집에서 할 수 있는 만큼"이라고 말해 주고, 친구의 위생을 지적하게 하지 않는다.',
      }),
      C({
        id: 'gender.e34.puberty-hygiene.activity.care-kit', type: 'activity', title: '나의 위생 꾸러미',
        method: '나의 위생 꾸러미 고르기', tool: 'economy', minutes: 13,
        levels: { easy: '물건 3개 가운데 예산 안에서 꼭 필요한 것을 고른다.', base: '물건 5개 가운데 예산 안에서 꼭 필요한 것부터 고른다.', challenge: '물건 6개(향수·물총 포함) 가운데 예산 안에서 고르고, 고른 까닭을 짝에게 말한다.' },
        activity: {
          title: '나의 위생 꾸러미', tool: 'economy',
          teacher: '"예산 안에서 위생 꾸러미를 꾸려 볼까요? 무엇이 꼭 필요할까요?" 물건을 고를 때마다 예산 막대가 얼마나 찼는지 함께 본다. 향수를 먼저 담는 학생에게 "향수로 냄새를 덮으면 땀과 세균이 없어질까요?"라고 되묻는다. 값은 연습용 값이라고 밝히고, 비누와 수건처럼 씻는 데 꼭 필요한 것부터 고르는 것이 몸을 돌보는 방법이라는 것을 짚는다.',
          task: '예산 막대 안에서 몸을 깨끗이 돌볼 물건을 꼭 필요한 것부터 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '6,000원 안에서 비누와 수건은 꼭 넣어 꾸러미를 골라요.', toolOptions: { mode: 'budget', budget: 6000, items: S('soap', 'towel', 'socks', 'lotion', 'perfume'), ask: '나의 위생 꾸러미' }, target: { budget: { must: ['soap', 'towel'], not: ['perfume'] } }, difficulty: 0.15,
              levels: { easy: { prompt: '6,000원 안에서 비누와 수건을 골라요.', toolOptions: { items: S('soap', 'towel', 'perfume') }, target: { budget: { must: ['soap', 'towel'], not: ['perfume'] } } },
                challenge: { prompt: '6,000원 안에서 비누와 수건은 넣고, 향수·물총은 빼고 골라요.', toolOptions: { items: S('soap', 'towel', 'socks', 'lotion', 'perfume', 'toy') }, target: { budget: { must: ['soap', 'towel'], not: ['perfume', 'toy'] } } } } },
            { prompt: '4,000원 안에서 운동한 날 갈아 신을 양말은 꼭 넣어 골라요.', toolOptions: { mode: 'budget', budget: 4000, items: S('socks', 'soap', 'perfume', 'lotion', 'towel'), ask: '운동한 날 꾸러미' }, target: { budget: { must: ['socks'], not: ['perfume'] } }, difficulty: 0.2,
              levels: { easy: { prompt: '4,000원 안에서 여벌 양말을 골라요.', toolOptions: { items: S('socks', 'perfume', 'soap') }, target: { budget: { must: ['socks'], not: ['perfume'] } } },
                challenge: { prompt: '4,000원 안에서 양말은 넣고, 향수·물총은 빼고 골라요.', toolOptions: { items: S('socks', 'soap', 'perfume', 'lotion', 'towel', 'toy') }, target: { budget: { must: ['socks'], not: ['perfume', 'toy'] } } } } },
            { prompt: '2,000원뿐이에요. 가장 꼭 필요한 비누를 넣어 골라요.', toolOptions: { mode: 'budget', budget: 2000, items: S('lotion', 'soap', 'perfume', 'socks', 'towel'), ask: '가장 꼭 필요한 것' }, target: { budget: { must: ['soap'] } }, difficulty: 0.25,
              levels: { easy: { prompt: '2,000원 안에서 비누를 골라요.', toolOptions: { items: S('lotion', 'soap', 'perfume') }, target: { budget: { must: ['soap'] } } },
                challenge: { prompt: '2,000원 안에서 비누는 넣고, 물총은 빼고 골라요.', toolOptions: { items: S('lotion', 'soap', 'perfume', 'socks', 'towel', 'toy') }, target: { budget: { must: ['soap'], not: ['toy'] } } } },
              conclude: '냄새는 향수로 덮지 않고 씻어서 없애요. 비누·수건처럼 꼭 필요한 것부터 골라요.' },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '땀 냄새를 줄이는 가장 좋은 방법은?', options: ['씻고 옷을 갈아입어요', '향수를 뿌려요', '그냥 둬요'], answer: '씻고 옷을 갈아입어요' }] },
        notes: '물건 값은 연습용 값이다. 학생 집에 무엇이 있는지 묻지 않는다.',
      }),
      C({
        id: 'gender.e34.puberty-hygiene.activity.week-check', type: 'activity', title: '일주일 위생 점검표',
        method: '일주일 위생 체크리스트', tool: 'kitchen', minutes: 13,
        levels: { easy: '점검 2칸 가운데 날마다 할 일에 표시하고, 요일 계획을 표시한다.', base: '점검 4칸 가운데 알맞은 것에 표시하고, 요일 계획을 표시한다.', challenge: '함정 칸이 더해진 점검표에서 가려 표시하고, 요일 계획에서 빠지기 쉬운 날을 짝에게 말한다.' },
        activity: {
          title: '일주일 위생 점검표', tool: 'kitchen',
          teacher: '"사춘기 몸을 깨끗이 돌보려면 날마다 무엇을 할까요?" 점검표를 함께 읽고 표시하게 한다. "같은 양말을 사흘 신어도 괜찮아요"라는 말이 나오면 "양말에 밴 땀은 어떻게 될까요?"라고 되묻는다. "여드름은 씻으면 다 없어져요"라는 말이 나오면 "씻으면 깨끗해지지만 여드름이 다 없어지지는 않아요. 걱정되면 보건 선생님께 물어봐요"라고 말한다. 요일 계획에서는 주말처럼 빠지기 쉬운 날을 찾아보게 한다.',
          task: '날마다 할 위생 습관에 표시하고, 이번 주 요일 계획을 세워요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            CHK('날마다 할 위생 습관에 표시해요.', '날마다 할 일', [{ id: 'shower', text: '씻기', ok: true }, { id: 'socks3', text: '같은 양말 사흘' }, { id: 'under', text: '속옷 갈아입기', ok: true }, { id: 'sock', text: '양말 갈아신기', ok: true }], [0, 1], [{ id: 'sweaty', text: '땀 젖은 옷 그대로' }, { id: 'face', text: '세수하기', ok: true }], 0.15),
            CHK('운동한 날 더 할 일에 표시해요.', '운동한 날', [{ id: 'wipe', text: '땀 닦기', ok: true }, { id: 'keep', text: '젖은 옷 계속 입기' }, { id: 'change', text: '옷 갈아입기', ok: true }, { id: 'water', text: '물 마시기', ok: true }], [0, 1], [{ id: 'spray', text: '향수만 뿌리기' }, { id: 'hands', text: '손 씻기', ok: true }], 0.2),
            { prompt: '이번 주에 씻기를 잘 지킬 요일에 표시해요.', toolOptions: { mode: 'checklist', title: '이번 주 계획', items: [{ id: 'mon', text: '월' }, { id: 'tue', text: '화' }, { id: 'wed', text: '수' }, { id: 'thu', text: '목' }, { id: 'fri', text: '금' }, { id: 'sat', text: '토' }, { id: 'sun', text: '일' }] }, target: { selfCheck: true }, difficulty: 0.1,
              conclude: '씻기, 속옷·양말 갈아입기는 날마다 해요. 땀을 흘린 날은 바로 씻고 갈아입어요.' },
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '날마다 할 일에 표시해요.', options: ['속옷 갈아입기', '양말 갈아신기', '같은 양말 사흘 신기'] }] },
        notes: '요일 계획은 학생 스스로의 다짐으로만 쓰고 검사하거나 발표하게 하지 않는다. 가정 형편에 따라 날마다 씻기 어려운 학생이 있을 수 있으니 "할 수 있는 만큼"이라고 말해 준다.',
      }),
      C({
        id: 'gender.e34.puberty-hygiene.wrap.hygiene-sort', type: 'wrap', title: '좋은 습관·고칠 습관',
        method: '좋은 습관·고칠 습관', tool: 'sortboard', minutes: 6,
        levels: { easy: '습관 카드 3장을 좋은 습관·고칠 습관 바구니에 나누고, 틀리면 바로 되돌아온다.', base: '카드 5장을 나눈다.', challenge: '헷갈리는 카드 2장이 더해진 7장을 나누고, 고칠 습관을 바꾼 말을 짝에게 말한다(교사 진행).' },
        wrap: {
          teacher: '"오늘 배운 위생 습관을 정리해 볼까요? 좋은 습관과 고칠 습관으로 나누어요." 카드를 넣을 때마다 "왜 그럴까요?"라고 묻는다. "향수만 뿌리기"를 좋은 습관에 넣는 학생에게 "향수가 땀을 씻어 줄까요?"라고 되묻는다. 고칠 습관은 오늘부터 하나씩 바꾸면 된다는 것을 마무리로 말한다.',
          exitTicket: [
            EX('sortboard', BOX('위생 습관 카드를 나누어요.', ['좋은 습관', '고칠 습관'], [['운동 뒤 갈아입기', '속옷 날마다 갈기', '자기 전 세수'], ['같은 양말 사흘', '땀 젖은 옷 그대로']], [[0, 2], [1, 1]], [['수건 따로 쓰기'], ['향수만 뿌리기']], 0.15)),
            { type: 'choice', prompt: '여드름이 걱정될 때 알맞은 것은?', options: ['깨끗이 씻고 보건 선생님께 물어요', '손으로 짜요', '친구와 비교해요'], answer: 0, difficulty: 0.1, explain: '씻으면 깨끗해지지만 여드름이 다 없어지지는 않아요. 걱정되면 물어봐요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '사춘기 몸 씻기',
          items: [
            { type: 'check', prompt: '좋은 위생 습관에 표시해요.', options: ['운동 뒤 갈아입기', '속옷 날마다 갈기', '같은 양말 사흘'] },
            { type: 'short', prompt: '내가 고치고 싶은 습관 하나와 바꿀 방법을 써요.' },
          ],
          easy: { note: '씻고 갈아입어요.', items: [{ type: 'choice', prompt: '땀 흘린 뒤에는?', options: ['씻고 갈아입어요', '그냥 둬요'], answer: '씻고 갈아입어요' }] },
        },
      }),
      C({
        id: 'gender.e34.puberty-hygiene.wrap.clean-chant', type: 'wrap', title: '"씻고 갈아입고" 구호',
        method: '"씻고 갈아입고" 구호', tool: 'keyboard', minutes: 6,
        levels: { easy: '앞 구절("씻고 갈아입고") 한 마디를 박 수를 보며 친다.', base: '구호 전체 두 마디("씻고 갈아입고, 깨끗한 내 몸")를 친다.', challenge: '구호를 새로 바꿀 두 마디 리듬을 박에 맞게 지어 친다.' },
        wrap: {
          teacher: '"오늘의 약속을 구호로! 씻고 갈아입고, 깨끗한 내 몸!" 구절마다 손뼉을 치며 외친 뒤 리듬 블록으로 친다. 도전 단계에서는 "땀 흘리면 바로 씻기!"처럼 구호를 바꿔 리듬을 짓게 한다. 친구의 냄새를 구호에 넣으려는 학생이 있으면 "구호는 나를 돌보는 말이에요. 친구를 놀리는 말은 넣지 않아요"라고 말해 준다. 자라는 내 몸을 스스로 돌본다는 것을 마무리로 말한다.',
          exitTicket: [
            RHY('"씻고 갈아입고, 깨끗한 내 몸" 리듬을 쳐요.', ['q', 'q', 'e', 'e', 'q'], ['e', 'e', 'e', 'e', 'h']),
            { type: 'choice', prompt: '친구에게서 땀 냄새가 날 때 알맞은 행동은?', options: ['놀리지 않아요', '모두에게 말해요', '코를 막고 피해요'], answer: 0, difficulty: 0.1, explain: '사춘기에는 누구나 땀이 많아져요. 놀리지 않아요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '깨끗한 내 몸',
          items: [
            { type: 'short', prompt: '내가 만든 위생 구호를 한 줄로 써요.' },
            { type: 'choice', prompt: '사춘기에 땀이 많아지는 것은?', options: ['누구나 겪는 일', '나만 겪는 일', '이상한 일'], answer: '누구나 겪는 일' },
          ],
          easy: { note: '누구나 땀이 많아져요.', items: [{ type: 'choice', prompt: '땀 냄새 나는 친구를 놀려도 될까요?', options: ['안 돼요', '돼요'], answer: '안 돼요' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 4학년 · 들쑥날쑥 사춘기 마음 (research-mandatory §2 초: 몸의 변화와 사춘기 + 생명존중 감정 알아차리기·도움 요청)
  // ======================================================================================================
  {
    const C = T('puberty-mind', 4);
    const MOOD_LINE = { type: 'line', title: '서아의 하루 기분 점수(가상)', unit: '점', xLabel: '때', yLabel: '기분 점수', max: 5, step: 1 };
    const L5 = [['아침', 2], ['쉬는 시간', 4], ['점심', 5], ['오후', 3], ['저녁', 1]];
    const HELP = {
      title: '마음 도움 지도(가상)', grid: [6, 4],
      regions: [
        { name: '우리 집(보호자)', cells: [[0, 0], [1, 0], [0, 1], [1, 1]] }, { name: '우리 교실(담임 선생님)', cells: [[2, 0], [3, 0]] }, { name: '상담실(상담 선생님)', cells: [[4, 0], [5, 0]] },
        { name: '보건실(보건 선생님)', cells: [[2, 1], [3, 1]] }, { name: '운동장', cells: [[4, 1], [5, 1], [4, 2], [5, 2]] }, { name: '골목길', cells: [[0, 2], [1, 2], [2, 2], [3, 2]] },
        { name: '놀이터', cells: [[0, 3], [1, 3], [2, 3]] }, { name: '가게', cells: [[3, 3], [4, 3], [5, 3]] },
      ],
    };
    M.push(
      C({
        id: 'gender.e34.puberty-mind.intro.mood-weather', type: 'intro', title: '서아의 하루 마음 날씨',
        method: '하루 마음 날씨 바뀜 보기', tool: 'emotion', minutes: 6,
        levels: { easy: '아침·저녁 장면 2개에 서아의 마음 날씨 카드를 함께 짝 짓는다.', base: '아침·점심·저녁 장면 3개에 마음 날씨를 짝 짓고, 마음 크기를 손가락으로 표시한다.', challenge: '마음이 바뀐 까닭을 장면에서 찾아 말해 본다(교사 진행).' },
        intro: {
          teacher: '"가상 친구 서아의 하루예요. 아침엔 늦잠을 자서 허둥지둥, 점심엔 친구와 깔깔, 저녁엔 숙제 때문에 짜증이 나요. 서아의 마음 날씨는 어떻게 바뀔까요?" 시연 단추로 장면마다 마음 날씨 카드가 놓이는 것을 보인다. "마음이 자꾸 바뀌는 건 나쁜 거예요"라는 말이 나오면 "사춘기에는 마음이 자주 바뀔 수 있어요. 바뀐다고 내가 나쁜 걸까요?"라고 되묻는다. 마음을 알아차리면 다스리는 방법도 고를 수 있다는 것을 오늘 알아본다고 밝힌다.',
          student: '가상 친구 서아의 아침·점심·저녁 장면에 마음 날씨 카드를 짝 지어요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'am', label: '아침: 늦잠에 허둥지둥' }, { id: 'noon', label: '점심: 친구와 깔깔' }, { id: 'pm', label: '저녁: 숙제가 산더미' }], cards: ['걱정', '신남', '화남', '편안함'], shuffle: false }, sequence: [{ match: { am: '걱정', pm: '화남' } }, { match: { am: '걱정', noon: '신남', pm: '화남' } }] },
          art: { draw: 'three small paper panels of one paper girl through a day: a hurried morning under a cloud, a laughing lunchtime under a sun, and a frowning evening at a desk under a small storm cloud', banner: '마음 날씨가 바뀌어요', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
        notes: '서아는 가명의 가상 인물이다. 학생의 오늘 기분을 발표하게 하지 않는다(정리 때 스스로 고르는 마음 표시만 쓴다).',
      }),
      C({
        id: 'gender.e34.puberty-mind.intro.mood-graph', type: 'intro', title: '서아의 기분 꺾은선',
        method: '서아의 마음 꺾은선 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '꺾은선 3칸(아침·점심·저녁)에서 가장 높은 때를 함께 고른다.', base: '꺾은선 5칸에서 가장 높은 때와 낮은 때를 고른다.', challenge: '기분이 바뀐 까닭을 짝과 말해 본다(교사 진행).' },
        intro: {
          teacher: '"서아의 하루 기분을 점수로 그린 꺾은선그래프예요. 가장 기분이 좋았던 때는 언제일까요?" 시연 단추로 가장 높은 점이 골라지는 것을 보이고, 가장 낮은 때도 손가락으로 찾게 한다. "기분이 내려가면 하루를 망친 거예요"라는 말이 나오면 "저녁에 내려갔어도 내일 아침은 다시 오를 수 있어요"라고 말해 준다. 이 그래프는 가상이고, 사춘기에는 하루에도 마음이 오르내릴 수 있다는 것을 짚는다.',
          student: '서아의 하루 기분 꺾은선그래프를 보고 가장 높은 때와 낮은 때를 찾아요.',
          demo: { tool: 'chart', options: Object.assign({}, MOOD_LINE, { mode: 'read', data: L5, question: '가장 높은 때는?', choices: L5.map((d) => d[0]) }), sequence: [{ pick: 2 }] },
          art: { draw: 'a paper line graph shaped like gentle hills and valleys on a paper board, a small paper girl figure walking along the line with a backpack', banner: '마음이 오르내려요', extra: [{ motif: 'mountain', x: 300, y: 96 }] },
        },
        notes: '그래프 자료는 가상이다(화면 제목에 밝힘).',
      }),
      C({
        id: 'gender.e34.puberty-mind.activity.calm-tools', type: 'activity', title: '마음 다스리기 따라 하기',
        method: '마음 다스리기 방법 따라 하기', tool: 'timer', minutes: 14,
        levels: { easy: '숨 고르기 타이머 2번을 맞추고, 다스리기 차례 2개를 맞춘 뒤, 해 본 방법 2칸에 표시한다.', base: '숨 고르기 타이머 3번, 차례 3개를 맞추고, 해 본 방법 3칸에 효과를 표시한다.', challenge: '같은 판을 마친 뒤 나에게 맞는 방법 하나를 골라 이유를 짝에게 말한다(교사 진행).' },
        activity: {
          title: '마음 다스리기 따라 하기', tool: 'timer',
          teacher: '"짜증이 나거나 속상할 때 마음을 가라앉히는 방법을 몸으로 해 볼까요?" 숨 고르기는 우리 반 약속으로 5초 들이쉬고 5초 내쉬기를 세 번 해 본다. "마음은 혼자 참아야 해요"라는 말이 나오면 "참기만 하면 마음이 사라질까요? 가라앉힌 뒤 누군가에게 말하는 것도 방법이에요"라고 되묻는다. 어떤 방법이 맞는지는 사람마다 다르고, 방법을 써도 힘들면 믿는 어른께 도움을 청하면 된다는 것을 짚는다.',
          task: '숨 고르기 타이머를 맞추고, 마음 다스리기 차례를 놓은 뒤, 해 본 방법에 표시해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '5초 들이쉬고 5초 내쉬기를 3번 하도록 타이머를 맞춰요.', toolOptions: { title: '숨 고르기(우리 반 약속)', plan: { work: 10, rest: 10, rounds: 1 } }, target: { plan: { work: 5, rest: 5, rounds: 3 } }, difficulty: 0.15,
              levels: { easy: { prompt: '5초 들이쉬고 5초 내쉬기를 2번 하도록 타이머를 맞춰요.', target: { plan: { work: 5, rest: 5, rounds: 2 } } } } },
            { prompt: '마음을 다스리는 차례를 놓아요.', toolOptions: { title: '마음 다스리기', cards: ['마음을 말해요', '멈춰요', '숨을 골라요'] }, target: { order: ['멈춰요', '숨을 골라요', '마음을 말해요'] }, difficulty: 0.2,
              levels: { easy: { prompt: '마음을 다스리는 차례 2개를 놓아요.', toolOptions: { cards: ['숨을 골라요', '멈춰요'] }, target: { order: ['멈춰요', '숨을 골라요'] } } } },
            { prompt: '해 보고 마음이 가라앉은 방법에 표시해요.', toolOptions: { title: '해 본 방법' }, target: { selfCheck: ['숨 고르기', '스트레칭', '수 세기'] }, difficulty: 0.1,
              levels: { easy: { prompt: '해 보고 마음이 가라앉은 방법에 표시해요(2칸).', target: { selfCheck: ['숨 고르기', '스트레칭'] } } },
              conclude: '멈추고, 숨을 고르고, 마음을 말해요. 맞는 방법은 사람마다 달라요. 그래도 힘들면 믿는 어른께 말해요.' },
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '내가 해 본 마음 다스리기 방법에 표시해요.', options: ['숨 고르기', '스트레칭', '수 세기'] }] },
        notes: '5초·5초·3번은 연습용 "우리 반 약속" 값이다. 숨 고르기 중 어지러운 학생은 바로 쉬게 한다.',
      }),
      C({
        id: 'gender.e34.puberty-mind.activity.mood-choice', type: 'activity', title: '갈림길: 짜증 날 때',
        method: '짜증 날 때 갈림길', tool: 'dilemma', minutes: 13,
        levels: { easy: '장면마다 갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '장면마다 갈림 2번, 보기 3개씩 고르며 결과를 따라간다.', challenge: '갈림 2번을 지난 뒤 근거 카드 3장 가운데 알맞은 2장을 고른다.' },
        activity: {
          title: '갈림길: 짜증 날 때', tool: 'dilemma',
          teacher: '"짜증이 날 때 이 길을 고르면 어떻게 될까요?" 결과를 소리 내어 읽고 다음 장면에서 다시 고른다. 소리치는 길을 고른 학생을 나무라지 않고 "그만큼 화가 났군요. 짜증이 나는 것은 괜찮아요. 그런데 소리친 뒤 동생 마음은 어떨까요?"라고 되묻는다. 짜증이 나는 것은 내가 나빠서가 아니라 마음이 자라는 중이기 때문이고, 잠깐 쉬고 말로 하면 서로 편해진다는 것을 짚는다.',
          task: '짜증이 나는 장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('동생이 내 방에 들어왔어요.', {
              text: '숙제하는데 동생이 노크 없이 들어와 책상을 흔들어요. 짜증이 확 나요.', motif: 'house',
              choices: [
                { id: 'pause', text: '숨을 고르고 "지금은 숙제 중이야"', result: '동생이 "미안" 하고 나갔어요.', ending: '잠깐 쉬고 말로 하니 서로 편해졌어요.', next: {
                  text: '조금 뒤 동생이 또 문을 열고 들여다봐요.', choices: [
                    { id: 'rule', text: '"노크하고 들어오기로 약속하자"', result: '동생이 고개를 끄덕였어요.', impact: [{ who: '동생과 나', text: '약속이 생겼어요', tone: 1 }], ending: '약속을 정해서 다음엔 덜 짜증 날 거예요.' },
                    { id: 'yell', text: '"나가!" 소리친다', result: '동생이 울음을 터뜨렸어요.', impact: [{ who: '동생', text: '무서워요', tone: -1 }], why: '소리치면 서로 더 속상해져요.' },
                    { id: 'slam', text: '문을 쾅 닫는다', result: '집 안이 시끄러워졌어요.', impact: [{ who: '가족', text: '놀랐어요', tone: -1 }], why: '물건에 화풀이하지 않고 말로 해요.' },
                  ] } },
                { id: 'shout', text: '"저리 가!" 크게 소리친다', result: '동생이 놀라 울었어요.', impact: [{ who: '동생', text: '속상해요', tone: -1 }], why: '숨을 고르고 말로 하면 서로 편해요.' },
                { id: 'hold', text: '꾹 참고 아무 말 안 한다', result: '짜증이 점점 커졌어요.', impact: [{ who: '나', text: '답답해요', tone: 0 }] },
              ] }, [['pause', 'rule']],
            [{ id: 'calm', text: '쉬고 말하면 서로 편해서' }, { id: 'ok', text: '짜증 나는 건 괜찮지만 말로 해서' }, { id: 'bad', text: '짜증 나는 내가 나빠서', why: '짜증은 누구나 나요. 내가 나빠서가 아니에요.' }], ['calm', 'ok'], 0.2),
            DIL('친구의 장난에 짜증이 나요.', {
              text: '모둠 친구가 내 지우개를 자꾸 숨겨요. 오늘따라 더 짜증이 나요.', motif: 'cloud',
              choices: [
                { id: 'tell', text: '"오늘은 장난 그만해 줘"', result: '친구가 지우개를 돌려줬어요.', ending: '내 마음을 말로 알려서 장난이 멈췄어요.', next: {
                  text: '친구가 "왜 이렇게 예민해?"라고 해요.', choices: [
                    { id: 'explain', text: '"오늘은 기분이 별로야. 이해해 줘"', result: '친구가 "알았어"라고 했어요.', impact: [{ who: '나와 친구', text: '서로 알게 됐어요', tone: 1 }], ending: '내 마음을 설명하니 친구가 이해했어요.' },
                    { id: 'fight', text: '"너야말로!" 맞받아친다', result: '말다툼이 커졌어요.', impact: [{ who: '나와 친구', text: '둘 다 속상해요', tone: -1 }], why: '맞받아치기보다 내 마음을 설명해요.' },
                    { id: 'cry', text: '혼자 엎드려 운다', result: '친구는 왜인지 몰랐어요.', impact: [{ who: '나', text: '외로워요', tone: 0 }], why: '마음을 말로 알려도 돼요.' },
                  ] } },
                { id: 'grab', text: '친구 필통을 확 뺏는다', result: '친구도 화가 났어요.', impact: [{ who: '친구', text: '화났어요', tone: -1 }], why: '똑같이 갚지 않고 말로 알려요.' },
                { id: 'ignore', text: '참고 넘긴다', result: '장난이 계속됐어요.', impact: [{ who: '나', text: '계속 짜증 나요', tone: -1 }] },
              ] }, [['tell', 'explain']],
            [{ id: 'say', text: '마음을 말로 알리면 이해받아서' }, { id: 'normal', text: '기분이 바뀌는 건 자연스러워서' }, { id: 'endure', text: '마음은 혼자 참아야 해서', why: '마음은 말로 나눠도 돼요.' }], ['say', 'normal'], 0.25),
            DIL('보호자가 숙제하라고 해요.', {
              text: '게임을 하는데 보호자가 "숙제 먼저 해"라고 해요. 괜히 화가 나요.', motif: 'house',
              choices: [
                { id: 'breath', text: '숨을 고르고 "10분만 있다 할게요"', result: '보호자가 "그래, 약속해"라고 했어요.', ending: '숨을 고르고 말하니 서로 편해졌어요.', next: {
                  text: '10분이 지났어요.', choices: [
                    { id: 'keep', text: '약속대로 숙제를 시작한다', result: '보호자가 "약속 지켜 줘서 고마워"라고 했어요.', impact: [{ who: '나와 보호자', text: '믿음이 생겼어요', tone: 1 }], ending: '약속을 지켜서 믿음이 쌓였어요.' },
                    { id: 'more', text: '"조금만 더!" 계속한다', result: '보호자가 실망했어요.', impact: [{ who: '보호자', text: '서운해요', tone: -1 }], why: '정한 약속은 지켜요.' },
                    { id: 'throw', text: '짜증 내며 게임기를 던진다', result: '게임기가 망가질 뻔했어요.', impact: [{ who: '나', text: '후회돼요', tone: -1 }], why: '물건에 화풀이하지 않아요.' },
                  ] } },
                { id: 'scream', text: '"싫어!" 소리 지른다', result: '보호자와 다툼이 났어요.', impact: [{ who: '나와 보호자', text: '둘 다 속상해요', tone: -1 }], why: '숨을 고르고 말로 하면 다툼이 줄어요.' },
                { id: 'silent', text: '말없이 방문을 닫는다', result: '보호자는 걱정했어요.', impact: [{ who: '보호자', text: '걱정돼요', tone: 0 }] },
              ] }, [['breath', 'keep']],
            [{ id: 'calmfirst', text: '숨을 고르면 말이 부드러워져서' }, { id: 'trust', text: '약속을 지키면 믿음이 생겨서' }, { id: 'win', text: '크게 말해야 이겨서', why: '크게 소리치면 다툼만 커져요.' }], ['calmfirst', 'trust'], 0.3, { conclude: '짜증이 나는 건 괜찮아요. 멈추고 숨을 고른 뒤 말로 알려요. 물건이나 사람에게 화풀이하지 않아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '짜증이 날 때 먼저 해 볼 것은?', options: ['멈추고 숨 고르기', '소리치기', '물건 던지기'], answer: '멈추고 숨 고르기' }] },
      }),
      C({
        id: 'gender.e34.puberty-mind.activity.help-circle', type: 'activity', title: '마음 도움 지도 만들기',
        method: '마음 도움 지도 만들기', tool: 'map', minutes: 25,
        levels: { easy: '핀을 놓으면 그 칸의 이름이 바로 보인다(상황마다 도움 받을 사람 한 곳).', base: '상황 4개마다 이야기할 사람이 있는 곳에 핀을 꽂는다(보호자·담임·상담·보건 선생님).', challenge: '핀을 꽂은 뒤 그 사람에게 할 말도 보기에서 고르고, 지도 범례에 학교가 확인한 신고·상담 번호를 선생님과 함께 적는다.' },
        activity: {
          title: '마음 도움 지도 만들기', tool: 'map',
          teacher: '"마음이 힘들 때 누구에게 이야기할 수 있을까요? 집에도, 학교에도 도와줄 어른이 있어요." 상황마다 핀을 꽂기 전에 그 사람을 떠올려 보게 한다. 놀이터나 가게에 핀을 꽂는 학생에게 "그곳에서 내 이야기를 들어 줄 사람은 누구일까요?"라고 되묻는다. "마음 이야기는 창피해요"라는 말이 나오면 "몸이 아프면 보건실에 가듯, 마음이 힘들어도 도움을 청할 수 있어요"라고 말해 준다. 활동이 끝나면 지도 범례에 학교가 알려 준 신고·상담 번호를 함께 적는다.',
          task: '집·학교 칸 지도에서 마음이 힘들 때 이야기할 사람이 있는 곳에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            PIN(HELP, '집에서 속상한 일을 이야기할 사람이 있는 곳에 핀을 꽂아요.', '우리 집(보호자)', { q: '어떻게 말할까요?', choices: ['"오늘 속상한 일이 있었어요"', '아무 말 없이 문 닫기', '소리 지르기'], answer: 0 }, 0.15),
            PIN(HELP, '학교에서 친구 일로 힘들 때 먼저 갈 곳에 핀을 꽂아요.', '우리 교실(담임 선생님)', { q: '어떻게 말할까요?', choices: ['"친구 일로 힘들어요"', '"아무 일 없어요"', '말하지 않기'], answer: 0 }, 0.2),
            PIN(HELP, '마음 이야기를 오래 나누고 싶을 때 갈 곳에 핀을 꽂아요.', '상담실(상담 선생님)', { q: '어떻게 말할까요?', choices: ['"이야기 좀 들어 주세요"', '"그냥 왔어요" 하고 나가기', '친구에게만 말하기'], answer: 0 }, 0.2),
            PIN(HELP, '마음이 힘들어 몸까지 아플 때 갈 곳에 핀을 꽂아요.', '보건실(보건 선생님)', { q: '어떻게 말할까요?', choices: ['"마음이 힘들어서 배가 아파요"', '참고 수업 듣기', '혼자 집에 가기'], answer: 0 }, 0.25, { conclude: '보호자, 담임·상담·보건 선생님. 마음이 힘들 때 이야기할 어른은 가까이 있어요.' }),
          ],
        },
        worksheet: {
          items: [
            { type: 'table', prompt: '마음이 힘들 때 이야기할 사람을 써요.', columns: ['곳', '이야기할 사람'], cells: [['집', ''], ['학교', '']], answer: '보호자, 담임·상담·보건 선생님' },
            { type: 'short', prompt: `지도 범례에 넣을 ${HELPNO}를 선생님과 함께 써요.` },
          ],
        },
        notes: `지도는 가상이다. 학생에게 지금 힘든 일이 있는지 묻지 않는다. 범례의 번호 칸은 체계도에 번호가 없어 비워 두었다 — 교사가 학교가 확인한 번호를 함께 적는다(${HELPNO}). 걱정되는 학생은 수업 뒤 조용히 살피고 학교 절차(담임·상담교사·보호자)를 따른다.`,
      }),
      C({
        id: 'gender.e34.puberty-mind.wrap.mood-tips', type: 'wrap', title: '마음 다스리기 카드',
        method: '마음 다스리기 카드 꾸미기', tool: 'collage', minutes: 6,
        levels: { easy: '내가 고른 방법 하나를 조각 2개 이상으로 꾸미고 점검 2칸에 표시한다.', base: '방법 두 개를 조각 3개 이상으로 꾸미고 점검 3칸에 표시한다.', challenge: '조각 5개 이상으로 꾸미고, 도움 청할 사람을 더한 뒤 점검 4칸에 표시한다.' },
        wrap: {
          teacher: '"오늘 해 본 방법 가운데 나에게 맞는 것을 작은 카드로 만들어 볼까요?" 고른 방법을 색종이 조각으로 꾸미고, 방법 이름은 카드 아래 종이에 쓰게 한다. 방법을 고르지 못하는 학생에게 "숨 고르기, 스트레칭, 수 세기 가운데 가장 편했던 것은 무엇이었나요?"라고 물어 준다. 마음이 들쑥날쑥한 것은 자라는 중이라는 뜻이고, 방법을 써도 힘들면 믿는 어른께 말한다는 것을 마무리로 말한다.',
          exitTicket: [
            COL('색종이 조각으로 나의 마음 다스리기 카드를 꾸며요.', ['방법을 하나 골랐어요', '방법 이름을 썼어요', '방법을 두 개 넣었어요', '도움 청할 사람을 넣었어요'], 2, 3, 5),
            { type: 'choice', prompt: '마음 다스리기를 해도 계속 힘들 때는?', options: ['믿는 어른께 이야기해요', '혼자 계속 참아요', '아무에게도 말 안 해요'], answer: 0, difficulty: 0.1, explain: '힘들 때 도움을 청하는 것은 용기 있는 일이에요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '들쑥날쑥 사춘기 마음',
          items: [
            { type: 'short', prompt: '나에게 맞는 마음 다스리기 방법과 그 까닭을 써요.' },
            { type: 'choice', prompt: '사춘기에 마음이 자주 바뀌는 것은?', options: ['자라면서 생기는 자연스러운 일', '내가 나빠서', '고칠 수 없는 병'], answer: '자라면서 생기는 자연스러운 일' },
          ],
          easy: { note: '마음이 바뀌는 건 자연스러워요.', items: [{ type: 'choice', prompt: '짜증 나는 건 내가 나빠서일까요?', options: ['아니에요', '맞아요'], answer: '아니에요' }] },
        },
      }),
      C({
        id: 'gender.e34.puberty-mind.wrap.mood-song', type: 'wrap', title: '"마음도 자라요" 노래 리듬',
        method: '"마음도 자라요" 노래', tool: 'keyboard', minutes: 6,
        levels: { easy: '앞 소절("마음도 자라요") 한 마디를 박 수를 보며 친다.', base: '한 줄 두 마디("마음도 자라요, 괜찮아 괜찮아")를 친다.', challenge: '가사를 바꿔 부를 두 마디 리듬을 박에 맞게 지어 친다.' },
        wrap: {
          teacher: '"한 줄 노래로 마음을 다독여 볼까요? 마음도 자라요, 괜찮아 괜찮아." 함께 부르며 손뼉을 친 뒤 리듬 블록으로 친다. 도전 단계에서는 "숨 쉬고 말해요"처럼 가사를 바꿔 리듬을 짓게 한다. 노래를 따라 부르기 어려워하는 학생에게는 손뼉만 쳐도 괜찮다고 말해 준다. 들쑥날쑥한 마음도 자라는 중이라는 것을 마무리로 말한다.',
          exitTicket: [
            RHY('"마음도 자라요, 괜찮아 괜찮아" 리듬을 쳐요.', ['e', 'e', 'q', 'e', 'e', 'q'], ['e', 'e', 'q', 'e', 'e', 'q'], { prompt: '바꾼 가사를 부를 두 마디 리듬을 박에 맞게 지어요.', target: { beats: true } }),
            { type: 'choice', prompt: '친구가 갑자기 짜증을 낼 때 알맞은 생각은?', options: ['마음이 힘든가 봐, 기다려 줘요', '나를 싫어하나 봐요', '똑같이 짜증 내요'], answer: 0, difficulty: 0.1, explain: '사춘기에는 누구나 마음이 바뀔 수 있어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '마음도 자라요',
          items: [
            { type: 'short', prompt: '내가 바꿔 부른 노래 가사를 한 줄로 써요.' },
            { type: 'check', prompt: '마음이 힘들 때 할 수 있는 일에 표시해요.', options: ['숨 고르기', '믿는 어른께 말하기', '물건에 화풀이하기'] },
          ],
          easy: { note: '마음도 자라는 중이에요.', items: [{ type: 'choice', prompt: '마음이 힘들면?', options: ['말해요', '숨겨요'], answer: '말해요' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 4학년 · 몸·물건·마음·정보의 경계와 사진 예절 (research-mandatory §2 초: 몸의 경계 + 디지털 시민 개인정보·예절)
  // ======================================================================================================
  {
    const C = T('four-boundaries', 4);
    const ASK = { type: 'bar', title: '"이건 꼭 물어봐 줬으면"(가상의 4학년 반)', unit: '명', xLabel: '물어봐 줬으면 하는 것', yLabel: '친구 수', max: 16, scale: 2 };
    const Q5 = [['내 사진 올리기', 14], ['몸에 닿기', 12], ['비밀 말하기', 10], ['물건 쓰기', 9], ['일기 보기', 7]];
    const Q3 = Q5.slice(0, 3);
    const QC = (data, extra) => Object.assign({}, ASK, extra, { data });
    M.push(
      C({
        id: 'gender.e34.four-boundaries.intro.four-quiz', type: 'intro', title: '경계는 네 가지',
        method: '경계 네 가지 가지 나누기', tool: 'mindmap', minutes: 6,
        levels: { easy: '예시 카드 4장을 몸·물건·마음·정보 가지에 하나씩 함께 넣는다.', base: '카드 6장을 가지에 넣는다.', challenge: '가지마다 예시를 하나씩 더 만들어 말한다(교사 진행).' },
        intro: {
          teacher: '"경계는 몸에만 있을까요? 물건, 마음, 정보에도 경계가 있어요." 시연 단추로 예시 카드가 네 가지에 놓이는 것을 보인다. "사진 올리기"를 어디에 넣을지 망설이는 학생에게 "내 얼굴 사진은 나에 대한 정보일까요?"라고 묻는다. "정보는 경계가 아니에요"라는 말이 나오면 "내 사진이 허락 없이 퍼지면 마음이 어떨까요?"라고 되묻는다. 네 가지 경계 모두 묻고 기다려야 지킬 수 있다는 것을 밝힌다.',
          student: '경계의 네 가지(몸·물건·마음·정보)에 예시 카드를 넣어요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '경계', slots: ['몸', '물건', '마음', '정보'], cards: ['허락 없이 어깨 잡기', '말없이 필통 쓰기', '싫다는 별명 부르기', '사진 몰래 올리기', '갑자기 끌어안기', '남의 일기 읽기'], shuffle: false }, sequence: [{ sort: { 몸: ['허락 없이 어깨 잡기'], 물건: ['말없이 필통 쓰기'], 마음: ['싫다는 별명 부르기'], 정보: ['사진 몰래 올리기'] } }, { sort: { 몸: ['허락 없이 어깨 잡기', '갑자기 끌어안기'], 물건: ['말없이 필통 쓰기'], 마음: ['싫다는 별명 부르기'], 정보: ['사진 몰래 올리기', '남의 일기 읽기'] } }] },
          art: { draw: 'a paper child in the middle surrounded by four small paper fences, each fence holding an icon: a hand, a pencil case, a heart and a camera', banner: '경계는 네 가지', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '"남의 일기 읽기"는 일기장(물건)이기도 하지만 쓴 내용(정보)을 보는 일이라 정보로 나눴다. 학생이 물건이라고 해도 까닭이 맞으면 받아 준다.',
      }),
      C({
        id: 'gender.e34.four-boundaries.intro.photo-feel', type: 'intro', title: '허락 없이 올라간 사진',
        method: '허락 없이 올라간 사진 마음', tool: 'emotion', minutes: 6,
        levels: { easy: '장면 2개(몰래 올라간 사진·물어보고 올린 사진)에 마음 카드를 함께 짝 짓는다.', base: '장면 3개(내려 달라 했더니 지워 줌 더함)에 마음 카드를 짝 짓는다.', challenge: '두 장면의 마음을 비교해 말한다(교사 진행).' },
        intro: {
          teacher: '"가상 친구 하준이의 자는 모습 사진이 반 대화방에 올라갔어요. 하준이는 몰랐어요. 하준이 마음은 어떨까요?" 시연 단추로 장면마다 마음 카드가 놓이는 것을 보인다. "친한 친구 사진은 그냥 올려도 돼요"라는 말이 나오면 "친한 친구여도 그 사진이 싫을 수 있을까요? 어떻게 알 수 있을까요?"라고 되묻는다. 사진도 정보의 경계이고, 찍기 전과 올리기 전에 묻고 기다려야 한다는 것을 밝힌다.',
          student: '사진이 올라간 장면을 보고 사진 속 친구의 마음 카드를 짝 지어요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'secret', label: '몰래 올라간 자는 사진' }, { id: 'asked', label: '물어보고 올린 사진' }, { id: 'deleted', label: '내려 달라자 지워 줌' }], cards: ['속상함', '편안함', '고마움', '신남'], shuffle: false }, sequence: [{ match: { secret: '속상함', asked: '편안함' } }, { match: { secret: '속상함', asked: '편안함', deleted: '고마움' } }] },
          art: { draw: 'a paper phone screen showing a group chat with a photo of a sleeping paper child, and beside it the same child awake looking at the phone with a surprised, upset face', banner: '사진 속 친구의 마음은?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '실제 메신저·앱 이름을 쓰지 않는다("반 대화방"). 학생 사진이 올라간 일이 있었는지 묻지 않는다.',
      }),
      C({
        id: 'gender.e34.four-boundaries.activity.boundary-cases', type: 'activity', title: '갈림길: 경계 상황',
        method: '경계 상황 판단하기', tool: 'dilemma', minutes: 14,
        levels: { easy: '장면마다 갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '장면 3개(일기장·물건·비밀)마다 갈림 2번씩 고르며 결과를 따라간다.', challenge: '갈림 2번을 지난 뒤 근거 카드 3장 가운데 알맞은 2장을 고르고, 짝과 고른 이유를 비교한다.' },
        activity: {
          title: '갈림길: 경계 상황', tool: 'dilemma',
          teacher: '"이 장면은 네 가지 경계 가운데 무엇과 관련 있을까요? 어떻게 하면 지킬 수 있을까요?" 결과를 소리 내어 읽고 다음 장면에서 다시 고른다. "궁금해서 본 건데요"라는 길을 고른 학생에게 "궁금한 마음은 괜찮아요. 그런데 친구는 보여 주고 싶었을까요?"라고 되묻는다. 물건·정보·마음의 경계도 몸의 경계처럼 묻고, 기다리고, 싫다면 멈춰서 지킨다는 것을 짚는다.',
          task: '일기장·물건·비밀 장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('짝의 일기장이 펼쳐져 있어요.', {
              text: '짝 서윤이가 자리를 비웠는데 책상 위 일기장이 펼쳐져 있어요.', motif: 'flower',
              choices: [
                { id: 'close', text: '보지 않고 덮어 둔다', result: '서윤이가 돌아와 일기장을 챙겼어요.', ending: '보지 않은 것은 서윤이의 정보 경계를 지킨 일이에요.', next: {
                  text: '다른 친구가 "뭐라고 썼는지 같이 보자"라고 해요.', choices: [
                    { id: 'no', text: '"서윤이 거야. 보지 말자"', result: '친구도 일기장에서 손을 뗐어요.', impact: [{ who: '서윤', text: '지켜졌어요', tone: 1 }], ending: '함께 경계를 지키자고 말했어요.' },
                    { id: 'peek', text: '"한 줄만 보자"', result: '서윤이가 그 모습을 보고 속상해했어요.', impact: [{ who: '서윤', text: '믿음이 깨졌어요', tone: -1 }], why: '한 줄이라도 허락 없이 보지 않아요.' },
                    { id: 'tell', text: '서윤이에게 "누가 보려 했어" 이르기만 한다', result: '서윤이는 불안해졌어요.', impact: [{ who: '서윤', text: '불안해요', tone: 0 }], why: '먼저 보지 말자고 말해 주면 더 좋아요.' },
                  ] } },
                { id: 'read', text: '궁금해서 슬쩍 읽는다', result: '서윤이가 돌아와 깜짝 놀랐어요.', impact: [{ who: '서윤', text: '부끄럽고 속상해요', tone: -1 }], why: '일기는 쓴 사람의 정보예요. 허락 없이 보지 않아요.' },
                { id: 'photo', text: '사진을 찍어 둔다', result: '사진이 다른 친구에게 퍼질 뻔했어요.', impact: [{ who: '서윤', text: '정보가 퍼져요', tone: -1 }], why: '남의 정보를 찍거나 퍼뜨리지 않아요.' },
              ] }, [['close', 'no']],
            [{ id: 'info', text: '일기는 서윤이의 정보라서' }, { id: 'trust', text: '경계를 지키면 믿음이 생겨서' }, { id: 'open', text: '펼쳐져 있으면 봐도 돼서', why: '펼쳐져 있어도 허락 없이 보지 않아요.' }], ['info', 'trust'], 0.2),
            DIL('친구 물건을 쓰고 싶어요.', {
              text: '미술 시간, 짝 준서의 새 색연필을 쓰고 싶어요. 준서는 화장실에 갔어요.', motif: 'star',
              choices: [
                { id: 'wait', text: '준서가 올 때까지 기다려 묻는다', result: '준서가 "응, 써도 돼!"라고 했어요.', ending: '기다렸다 물어서 분명한 "좋아"를 들었어요.', next: {
                  text: '쓰다가 색연필 하나가 부러졌어요.', choices: [
                    { id: 'sorry', text: '"미안해, 부러뜨렸어" 바로 말한다', result: '준서가 "괜찮아, 알려 줘서 고마워"라고 했어요.', impact: [{ who: '준서', text: '믿음이 생겼어요', tone: 1 }], ending: '바로 말하고 사과해서 믿음을 지켰어요.' },
                    { id: 'hide', text: '몰래 통에 넣어 둔다', result: '준서가 나중에 알고 서운해했어요.', impact: [{ who: '준서', text: '서운해요', tone: -1 }], why: '물건이 망가지면 바로 말하고 사과해요.' },
                    { id: 'blame', text: '"원래 약했어" 한다', result: '준서가 속상해했어요.', impact: [{ who: '준서', text: '억울해요', tone: -1 }], why: '내 잘못은 솔직히 말해요.' },
                  ] } },
                { id: 'take', text: '잠깐이니까 그냥 쓴다', result: '돌아온 준서가 "내 거 왜 써?"라고 했어요.', impact: [{ who: '준서', text: '당황했어요', tone: -1 }], why: '잠깐이어도 먼저 물어요.' },
                { id: 'mine', text: '내 것과 바꿔 놓는다', result: '준서가 색연필을 찾느라 헤맸어요.', impact: [{ who: '준서', text: '헷갈려요', tone: -1 }], why: '남의 물건은 허락 없이 옮기지 않아요.' },
              ] }, [['wait', 'sorry']],
            [{ id: 'thing', text: '물건에도 경계가 있어서' }, { id: 'clear', text: '분명한 "좋아"를 들어야 해서' }, { id: 'short', text: '잠깐 쓰는 건 괜찮아서', why: '잠깐이어도 먼저 물어요.' }], ['thing', 'clear'], 0.25),
            DIL('친구의 비밀을 알게 됐어요.', {
              text: '친구 하린이가 "나 사실 수영을 못해. 비밀이야"라고 했어요. 다른 친구들이 하린이에게 수영장 가자고 해요.', motif: 'wave',
              choices: [
                { id: 'keep', text: '비밀을 말하지 않고 다른 놀이를 제안한다', result: '하린이가 고마운 눈빛을 보냈어요.', ending: '마음의 경계를 지켜 줬어요.', next: {
                  text: '한 친구가 "너 하린이 비밀 알지? 말해 봐"라고 졸라요.', choices: [
                    { id: 'refuse', text: '"하린이 비밀은 하린이 거야"', result: '친구가 더 묻지 않았어요.', impact: [{ who: '하린', text: '믿음이 커졌어요', tone: 1 }], ending: '비밀을 지켜서 하린이의 믿음을 얻었어요.' },
                    { id: 'hint', text: '"힌트만 줄게"', result: '반 친구들이 금방 알아챘어요.', impact: [{ who: '하린', text: '창피해요', tone: -1 }], why: '힌트도 비밀을 퍼뜨리는 일이에요.' },
                    { id: 'tellall', text: '말해 버린다', result: '하린이가 울며 나갔어요.', impact: [{ who: '하린', text: '상처받았어요', tone: -1 }], why: '누가 다치지 않는 비밀은 지켜 줘요.' },
                  ] } },
                { id: 'say', text: '"하린이는 수영 못한대" 말한다', result: '친구들이 하린이를 쳐다봤어요.', impact: [{ who: '하린', text: '부끄러워요', tone: -1 }], why: '친구의 비밀을 허락 없이 말하지 않아요.' },
                { id: 'laugh', text: '혼자 키득거린다', result: '하린이가 불안해했어요.', impact: [{ who: '하린', text: '불안해요', tone: 0 }] },
              ] }, [['keep', 'refuse']],
            [{ id: 'mind', text: '비밀도 마음의 경계라서' }, { id: 'safe', text: '아무도 다치지 않는 비밀이라서' }, { id: 'fun', text: '재미있는 비밀은 말해도 돼서', why: '재미있어도 허락 없이 말하지 않아요.' }], ['mind', 'safe'], 0.3, { conclude: '물건·정보·마음에도 경계가 있어요. 묻고, 기다리고, 허락 없이 보거나 말하지 않아요. 단, 누가 다칠 수 있는 비밀은 어른께 알려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '친구 물건을 쓰고 싶을 때 먼저 할 일은?', options: ['물어보고 대답을 기다려요', '잠깐이니 그냥 써요', '몰래 써요'], answer: '물어보고 대답을 기다려요' }] },
        notes: '"누가 다칠 수 있는 비밀은 어른께 알린다"는 성폭력·가정폭력 주제와 이어지는 예외로 꼭 함께 말한다.',
      }),
      C({
        id: 'gender.e34.four-boundaries.activity.photo-steps', type: 'activity', title: '찍기 전·올리기 전 차례',
        method: '찍기 전·올리기 전 차례', tool: 'story', minutes: 13,
        levels: { easy: '첫 문항은 장면 3장, 둘째 문항은 장면 2장을 차례대로 놓고(놓으면 바로 맞는지 알림), 말풍선 1칸을 채운다.', base: '장면 4장·3장을 차례대로 놓고, 말풍선 2칸을 채운다.', challenge: '틀린 장면 한 장을 빼고 놓으며, 말풍선 3칸을 채운다.' },
        activity: {
          title: '찍기 전·올리기 전 차례', tool: 'story',
          teacher: '"친구 사진을 찍고 올리기 전에 어떤 차례로 할까요?" 장면을 놓은 뒤 소리 내어 읽는다. "찍을 때 물었으니 올릴 때는 안 물어도 돼요"라는 말이 나오면 "찍어도 된다는 것과 모두에게 보여 줘도 된다는 것은 같을까요?"라고 되묻는다. 찍기 전에 한 번, 올리기 전에 또 한 번 묻고, 싫다면 바로 지운다는 것을 짚는다. 내 사진이 허락 없이 올라갔을 때는 내려 달라고 하고, 안 되면 어른께 알린다고 덧붙인다.',
          task: '친구 사진을 찍고 올리는 차례 장면을 놓고, 묻는 말을 말풍선에 넣어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORD('친구 사진을 찍고 올리는 차례로 놓아요.', { title: '사진 예절' }, [{ id: 'ask1', text: '"찍어도 돼?"' }, { id: 'wait', text: '대답 기다리기' }, { id: 'ask2', text: '"올려도 돼?"' }, { id: 'delete', text: '싫다면 바로 지우기' }], [0, 1, 2], { id: 'post', text: '묻지 않고 올리기', why: '올리기 전에도 꼭 물어요.' }, 0.15),
            ORD('내 사진이 허락 없이 올라갔을 때 차례로 놓아요.', { title: '내 사진이 올라갔을 때' }, [{ id: 'ask', text: '"내려 줘" 말하기' }, { id: 'adult', text: '안 지우면 어른께' }, { id: 'help', text: '함께 지우기 도움' }], [0, 1], { id: 'revenge', text: '똑같이 사진 올리기', why: '똑같이 하지 않고 어른께 알려요.' }, 0.2),
            FILL('사진을 찍고 올릴 때의 말풍선 빈칸을 채워요.', ['나래', '가람', '나래'], [['너 사진 ___ 돼?', '찍어도'], ['반 대화방에 ___ 돼?', '올려도'], ['싫으면 바로 ___.', '지울게']], ['그냥 올릴게', '몰래', '퍼뜨릴게'], 0.25, { conclude: '찍기 전에 묻고, 올리기 전에 또 묻고, 싫다면 바로 지워요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '친구 사진은 찍기 전에 묻고, ___ 전에도 다시 물어요.', answer: '올리기' }] },
      }),
      C({
        id: 'gender.e34.four-boundaries.activity.boundary-survey', type: 'activity', title: '우리 반 경계 설문 그래프',
        method: '우리 반 경계 설문 표', tool: 'chart', minutes: 25,
        levels: { easy: '항목 3개의 가상 설문 자료로 막대그래프를 만들고 읽는다(첫 막대는 미리 놓임).', base: '항목 5개 자료로 막대그래프를 만들고 읽은 뒤, 짝과 가장 많은 항목을 지키는 방법을 토의해 고른다.', challenge: '같은 판을 마친 뒤 토의 결과를 한 문장 카드로 정리해 고른다.' },
        activity: {
          title: '우리 반 경계 설문 그래프', tool: 'chart',
          teacher: '"가상의 4학년 반 친구들에게 \'이건 꼭 물어봐 줬으면\' 하는 것을 물었어요. 그래프로 그려 볼까요?" 표의 수를 함께 읽고 막대를 올린다. 눈금 한 칸을 1명으로 읽는 학생에게 "눈금 한 칸은 몇 명이었나요?"라고 되묻는다. 가장 많은 항목을 찾으면 짝과 "이걸 지키려면 어떻게 할까?"를 토의해 고르게 한다. 사람마다 꼭 물어봐 줬으면 하는 것이 다르니 늘 묻는 것이 가장 좋은 방법이라는 것을 짚는다.',
          task: '가상 설문 자료로 막대그래프를 만들고 읽은 뒤, 짝과 가장 많은 항목을 지키는 방법을 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '표를 보고 설문 막대그래프를 완성해요.', toolOptions: QC(Q5, { mode: 'build', showTable: true }), target: { build: true }, difficulty: 0.15,
              levels: { easy: { prompt: '표를 보고 항목 3개의 막대그래프를 완성해요.', toolOptions: QC(Q3, { mode: 'build', showTable: true, given: [0] }), target: { build: true } } } },
            { prompt: '가장 많은 친구가 꼭 물어봐 줬으면 하는 것은?', toolOptions: QC(Q5, { mode: 'read', question: '가장 많은 항목은?', choices: Q5.map((d) => d[0]) }), target: { pick: 0 }, difficulty: 0.15,
              levels: { easy: { toolOptions: QC(Q3, { mode: 'read', question: '가장 많은 항목은?', choices: Q3.map((d) => d[0]) }), target: { pick: 0 } } } },
            { prompt: '몸에 닿기를 꼭 물어봐 줬으면 하는 친구는 몇 명인가요?', toolOptions: QC(Q5, { mode: 'read', question: '몸에 닿기는 몇 명?', choices: ['12명', '14명', '9명'] }), target: { pick: 0 }, difficulty: 0.2,
              levels: { easy: { toolOptions: QC(Q3, { mode: 'read', question: '몸에 닿기는 몇 명?', choices: ['12명', '14명', '10명'] }), target: { pick: 0 } } } },
            { prompt: '짝과 토의해 가장 많은 항목을 지키는 방법을 골라요.', toolOptions: QC(Q5, { mode: 'read', question: '사진 올리기를 지키려면?', choices: ['올리기 전에 꼭 물어요', '친하면 그냥 올려요', '몰래 올려요'] }), target: { pick: 0 }, difficulty: 0.2,
              levels: { easy: { toolOptions: QC(Q3, { mode: 'read', question: '사진 올리기를 지키려면?', choices: ['올리기 전에 꼭 물어요', '그냥 올려요'] }), target: { pick: 0 } },
                challenge: { prompt: '토의 결과를 한 문장으로 정리한 카드를 골라요.', toolOptions: QC(Q5, { mode: 'read', question: '토의 결과 한 문장은?', choices: ['사람마다 다르니 늘 먼저 물어요', '많이 고른 것만 물어요', '적게 고른 건 안 물어도 돼요'] }), target: { pick: 0 } } },
              conclude: '꼭 물어봐 줬으면 하는 것은 사람마다 달라요. 그래서 늘 먼저 묻는 것이 경계를 지키는 방법이에요.' },
          ],
        },
        worksheet: {
          items: [
            { type: 'table', prompt: '표의 빈칸을 채워요.', columns: ['항목', '친구 수(명)'], cells: [['내 사진 올리기', '14'], ['몸에 닿기', ''], ['일기 보기', '7']], answer: '12' },
            { type: 'short', prompt: '우리 반이 경계를 지키는 방법을 한 문장으로 써요.' },
          ],
        },
        notes: '설문 자료는 가상이다(화면 제목에 밝힘). 우리 반에서 실제로 설문할 때는 무기명 쪽지로 하고 결과를 특정 친구와 잇지 않는다.',
      }),
      C({
        id: 'gender.e34.four-boundaries.wrap.boundary-check', type: 'wrap', title: '네 경계 스스로 점검',
        method: '네 경계 스스로 점검', tool: 'timer', minutes: 6,
        levels: { easy: '점검 2칸(몸·물건 경계)에 표시한다.', base: '점검 4칸(마음·정보 경계 더함)에 표시한다.', challenge: '점검 4칸에 표시하고, 한 칸을 사례로 짝에게 설명한 뒤 다섯째 칸에 표시한다.' },
        wrap: {
          teacher: '"오늘 네 가지 경계를 배웠어요. 몸, 물건, 마음, 정보. 나는 어디까지 지킬 수 있을까요?" 칸마다 읽어 주고 스스로 표시하게 한다. 정보 경계를 어려워하는 학생에게 "친구 사진을 올리기 전에 묻기, 비밀을 함부로 말하지 않기가 정보 경계예요"라고 예를 들어 준다. 네 경계 모두 묻고 기다리면 지킬 수 있다는 것을 마무리로 말한다.',
          exitTicket: [
            SELF('네 경계 스스로 점검', ['몸 경계를 지켜요', '물건 경계를 지켜요', '마음 경계를 지켜요', '정보 경계를 지켜요', '사례로 설명했어요'], '오늘 배운 네 경계에 스스로 표시해요.', 4, 2, 5),
            { type: 'choice', prompt: '친구 사진을 반 대화방에 올리고 싶을 때는?', options: ['먼저 물어보고 기다려요', '친하면 그냥 올려요', '몰래 올려요'], answer: 0, difficulty: 0.1, explain: '사진은 정보의 경계예요. 올리기 전에 꼭 물어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '경계는 네 가지',
          items: [
            { type: 'table', prompt: '경계마다 지키는 방법을 써요.', columns: ['경계', '지키는 방법'], cells: [['몸', ''], ['물건', ''], ['정보', '']], answer: '닿기 전에 묻기, 쓰기 전에 묻기, 올리기·말하기 전에 묻기' },
            { type: 'short', prompt: '마음의 경계를 지키는 방법을 한 줄로 써요.' },
          ],
          easy: { note: '모든 경계는 묻고 기다려요.', items: [{ type: 'choice', prompt: '친구 물건을 쓰려면?', options: ['먼저 물어요', '그냥 써요'], answer: '먼저 물어요' }] },
        },
      }),
      C({
        id: 'gender.e34.four-boundaries.wrap.photo-rule', type: 'wrap', title: '사진 예절 스티커',
        method: '사진 예절 스티커 만들기', tool: 'collage', minutes: 6,
        levels: { easy: '색종이 조각 2개 이상으로 스티커를 꾸미고 점검 2칸에 표시한다.', base: '조각 3개 이상으로 꾸미고 점검 3칸에 표시한다.', challenge: '조각 4개 이상으로 꾸미고, 지우기 약속을 스티커 아래 종이에 더한 뒤 점검 4칸에 표시한다.' },
        wrap: {
          teacher: '"\'물어보고 찍고, 물어보고 올려요\' 사진 예절 스티커를 만들어 볼까요?" 색종이 조각으로 사진기·말풍선 모양을 꾸미고 약속 글은 스티커 아래 종이에 쓰게 한다. 도전 단계에서는 "싫다면 바로 지워요" 약속도 더하게 한다. 스티커를 어디에 붙이면 잘 기억날지 물어보고, 사진도 정보의 경계라는 것을 마무리로 말한다.',
          exitTicket: [
            COL('색종이 조각으로 사진 예절 스티커를 꾸며요.', ['스티커를 꾸몄어요', '찍기 전에 묻기를 썼어요', '올리기 전에 묻기를 썼어요', '지우기 약속을 더했어요'], 2, 3, 4),
            { type: 'choice', prompt: '친구가 사진을 지워 달라고 하면?', options: ['바로 지워요', '나중에 지워요', '내 사진첩에는 남겨요'], answer: 0, difficulty: 0.1, explain: '싫다고 하면 바로 지우는 것이 사진 예절이에요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '사진 예절',
          items: [
            { type: 'choice', prompt: '사진 예절의 바른 차례는?', options: ['찍기 전 묻기 → 올리기 전 묻기', '찍고 나서 묻기', '올리고 나서 묻기'], answer: '찍기 전 묻기 → 올리기 전 묻기' },
            { type: 'short', prompt: '내 사진이 허락 없이 올라갔을 때 할 일을 써요.' },
          ],
          easy: { note: '사진도 경계예요.', items: [{ type: 'choice', prompt: '친구 사진을 올리려면?', options: ['먼저 물어요', '그냥 올려요'], answer: '먼저 물어요' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 4학년 · 성폭력의 여러 모습과 대처 (성폭력방지법 제5조 예방교육 — research-mandatory §1, §2 초: 몸의 경계·성폭력 신고 방법)
  // ======================================================================================================
  {
    const C = T('sv-many-forms', 4);
    const PLACES = {
      title: '학교와 동네 도움 지도(가상)', grid: [6, 4],
      regions: [
        { name: '상담실', cells: [[0, 0], [1, 0]] }, { name: '보건실', cells: [[2, 0], [3, 0]] }, { name: '우리 교실', cells: [[4, 0], [5, 0]] },
        { name: '학교 운동장', cells: [[0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1]] }, { name: '큰길', cells: [[0, 2], [1, 2], [2, 2], [3, 2]] }, { name: '지구대', cells: [[4, 2], [5, 2]] },
        { name: '놀이터', cells: [[0, 3], [1, 3], [2, 3]] }, { name: '빈 골목', cells: [[3, 3], [4, 3], [5, 3]] },
      ],
    };
    const PINQ = (prompt, region, why, d) => {
      const it = PIN(PLACES, prompt, region, why, d);
      it.levels.easy = { toolOptions: { readout: true } };
      return EX('map', it);
    };
    M.push(
      C({
        id: 'gender.e34.sv-many-forms.intro.forms-sort', type: 'intro', title: '괜찮은 행동과 성폭력',
        method: '괜찮은 행동·성폭력 나누기', tool: 'sortboard', minutes: 6,
        levels: { easy: '카드 4장을 괜찮은 행동·성폭력이에요 바구니에 함께 나눈다.', base: '카드 6장을 나눈다.', challenge: '성폭력 카드마다 할 행동(그만해 말하기·피하기·알리기)을 말해 본다(교사 진행).' },
        intro: {
          teacher: '"몸에 닿지 않으면 괜찮을까요?" 시연 단추로 카드가 바구니에 들어가는 것을 보인다. "몸을 평가하는 말" 카드에서 멈추고 "닿지 않았어도 듣는 사람이 불편하고 싫다면 어떨까요?"라고 묻는다. 원치 않는 성적인 말, 원치 않는 사진 찍기, 엿보기처럼 몸에 닿지 않아도 성폭력일 수 있고, 장난이라고 해도 마찬가지라는 것을 밝힌다. 잘못은 늘 그 행동을 한 사람에게 있다고 덧붙인다.',
          student: '행동 카드를 괜찮은 행동과 성폭력 바구니에 나누어요.',
          demo: { tool: 'sortboard', options: { slots: ['괜찮은 행동', '성폭력이에요'], cards: ['반가운 하이파이브', '몸을 평가하는 말', '원치 않는 사진 찍기', '화장실 엿보기', '허락받은 어깨동무', '함께 웃는 술래잡기'] }, sequence: [{ sort: { '괜찮은 행동': ['반가운 하이파이브', '허락받은 어깨동무'], 성폭력이에요: ['몸을 평가하는 말', '원치 않는 사진 찍기'] } }, { sort: { '괜찮은 행동': ['반가운 하이파이브', '허락받은 어깨동무', '함께 웃는 술래잡기'], 성폭력이에요: ['몸을 평가하는 말', '원치 않는 사진 찍기', '화장실 엿보기'] } }] },
          art: { draw: 'two paper baskets on a shelf, one with a smiling face and one with a stop sign, paper cards of a high five and a camera drifting toward them', banner: '닿지 않아도 성폭력일 수 있어요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '행동은 카드 한 줄로만 다루고 장면을 자세히 묘사하지 않는다.',
      }),
      C({
        id: 'gender.e34.sv-many-forms.intro.feel-signals', type: 'intro', title: '불편한 말을 들을 때 몸 신호',
        method: '불편할 때 몸 신호', tool: 'body', minutes: 6,
        levels: { easy: '종이 몸에서 신호가 오는 곳 2곳(가슴·배)을 함께 짚는다.', base: '3곳(피부의 화끈함 더함)을 짚는다.', challenge: '그 신호를 믿어야 하는 까닭을 짝에게 말해 본다(교사 진행).' },
        intro: {
          teacher: '"가상 인물 준서가 친구에게 몸을 평가하는 말을 들었어요. 준서의 몸은 어떤 신호를 보낼까요?" 시연 단추로 가슴·배, 이어서 피부가 짚이는 것을 보인다. "그냥 기분 탓이에요"라는 말이 나오면 "몸이 \'이건 싫어\'라고 알려 주는 신호예요. 믿어도 될까요?"라고 되묻는다. 불편한 신호가 오면 그 느낌을 믿고 "그만해"라고 말하고, 피하고, 알리면 된다는 것을 오늘 익힌다고 밝힌다.',
          student: '그림 속 준서가 불편한 말을 들을 때 몸에서 신호가 오는 곳을 찾아요.',
          demo: { tool: 'body', options: { mode: 'parts', parts: ['가슴', '배', '피부', '목', '어깨', '무릎'], names: true }, sequence: [{ parts: ['가슴', '배'] }, { parts: ['가슴', '배', '피부'] }] },
          art: { draw: 'a paper child in a hallway hearing words from a speech bubble, small paper heat lines on the cheeks and a fluttering mark on the chest', banner: '몸의 신호를 믿어요', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '그림 속 가상 인물의 신호로만 이야기한다. 학생에게 비슷한 말을 들은 적이 있는지 묻지 않는다. 몸 교구에 얼굴 칸이 없어 "얼굴이 화끈"은 피부로 짚는다.',
      }),
      C({
        id: 'gender.e34.sv-many-forms.activity.response-order', type: 'activity', title: '성폭력 대처 차례',
        method: '대처 차례 정하기', tool: 'story', minutes: 14,
        levels: { easy: '첫 문항은 장면 3장, 둘째 문항은 장면 2장을 차례대로 놓고(놓으면 바로 맞는지 알림), 말풍선 1칸을 채운다.', base: '장면 4장·3장을 차례대로 놓고 이유를 짝에게 말하며, 말풍선 2칸을 채운다.', challenge: '틀린 장면 한 장을 빼고 놓으며, 말풍선 3칸에 할 말을 넣는다.' },
        activity: {
          title: '성폭력 대처 차례', tool: 'story',
          teacher: '"원치 않는 사진을 찍혔어요. 맨 먼저 무엇을 할까요?" 장면을 놓은 뒤 짝에게 "먼저 ○○를 해, 왜냐하면…"으로 이유를 말하게 한다. "혼자 지우면 돼요" 같은 말이 나오면 "사진이 이미 퍼졌다면 혼자 다 지울 수 있을까요? 누가 도와줄 수 있을까요?"라고 묻는다. 그만하라고 말하고, 피하고, 믿는 어른께 알리면 사진을 지우는 일도 어른이 함께 도와준다는 것, 장난으로 한 말이어도 싫으면 똑같이 대처한다는 것을 짚는다.',
          task: '원치 않는 사진·말을 겪는 가상 장면에서 할 일을 차례대로 놓고, 할 말을 말풍선에 넣어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORD('원치 않는 사진을 찍힐 때 차례로 놓아요.', { title: '사진을 찍힐 때' }, [{ id: 'stop', text: '"그만해" 말하기' }, { id: 'away', text: '자리 피하기' }, { id: 'tell', text: '믿는 어른께 알리기' }, { id: 'delete', text: '지우기 도움 받기' }], [0, 1, 2], { id: 'alone', text: '혼자 참고 넘기기', why: '혼자 참지 않고 어른께 알려요.' }, 0.15),
            ORD('원치 않는 말을 들을 때 차례로 놓아요.', { title: '불편한 말을 들을 때' }, [{ id: 'say', text: '"그런 말 싫어"' }, { id: 'leave', text: '그 자리 떠나기' }, { id: 'teacher', text: '선생님께 알리기' }], [0, 2], { id: 'joke', text: '장난이니 웃기', why: '장난이라고 해도 싫으면 멈추게 해요.' }, 0.2),
            FILL('준서가 할 말을 말풍선에 넣어요.', ['준서', '준서', '준서'], [['"사진 ___. 지워 줘."', '찍지 마'], ['"그런 말은 ___."', '싫어'], ['"선생님, ___ 주세요."', '도와']], ['괜찮아', '재밌다', '비밀이야'], 0.25, { conclude: '"그만해" → 피하기 → 믿는 어른께 알리기. 사진 지우기도 어른이 도와요. 장난이어도 싫으면 성폭력일 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '친구가 "장난이야"라며 원치 않는 말을 계속하면?', options: ['싫다고 말하고 어른께 알려요', '장난이니 참아요', '똑같이 말해요'], answer: '싫다고 말하고 어른께 알려요' }] },
        notes: '찍힌 사진의 내용, 들은 말의 내용은 쓰지 않았다. 준서는 가명의 가상 인물이다.',
      }),
      C({
        id: 'gender.e34.sv-many-forms.activity.firm-no', type: 'activity', title: '"싫어, 그만해" 짝 연습',
        method: '단호한 거절 짝 연습', tool: 'timer', minutes: 13,
        levels: { easy: '연습 약속 점검 뒤 동작 2개(몸 세우기·말하기)의 차례를 맞추고, 짝 점검 2칸에 표시한다.', base: '동작 3개(눈 보기 더함)의 차례를 맞추고, 짝 점검 3칸에 표시한다.', challenge: '같은 판을 마친 뒤 역할을 바꿔 짝의 점검표에도 표시해 준다(교사 진행).' },
        activity: {
          title: '"싫어, 그만해" 짝 연습', tool: 'timer',
          teacher: '"\'싫어, 그만해\'를 단호하게 말하려면 몸을 어떻게 하면 좋을까요?" 교사가 작게 웅얼거리는 말투와 단호한 말투를 보여 준 뒤, 짝과 번갈아 몸 세우기 → 눈 보기 → "싫어, 그만해"를 연습한다. 상대 역할은 "말하는 흉내만, 진짜 불편한 말은 쓰지 않아요"라고 정해 준다. 웃음이 나면 "진지하게 연습해야 진짜 때 몸이 기억해요"라고 말한다. 단호하게 말하는 것은 무례한 것이 아니라 나를 지키는 일이라는 것을 짚는다.',
          task: '연습 약속을 점검하고, 단호한 거절 동작의 차례를 맞춘 뒤 짝과 번갈아 연습해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '짝 연습 전에 약속에 모두 표시해요.', toolOptions: { title: '짝 연습 약속', safety: ['몸은 닿지 않아요', '진짜 불편한 말은 안 써요', '역할을 바꿔 해요'] }, target: { safety: true }, difficulty: 0.1 },
            { prompt: '"싫어, 그만해"를 말하는 동작을 차례대로 놓아요.', toolOptions: { title: '단호한 거절', cards: ['"싫어, 그만해"', '눈을 봐요', '몸을 바로 세워요'] }, target: { order: ['몸을 바로 세워요', '눈을 봐요', '"싫어, 그만해"'] }, difficulty: 0.2,
              levels: { easy: { prompt: '"싫어, 그만해"를 말하는 동작 2개를 차례대로 놓아요.', toolOptions: { cards: ['"싫어, 그만해"', '몸을 바로 세워요'] }, target: { order: ['몸을 바로 세워요', '"싫어, 그만해"'] } } } },
            { prompt: '짝이 해낸 것에 표시해 주어요.', toolOptions: { title: '짝 점검표' }, target: { selfCheck: ['몸을 세웠어요', '눈을 봤어요', '단호하게 말했어요'] }, difficulty: 0.1,
              levels: { easy: { prompt: '짝이 해낸 것에 표시해 주어요(2칸).', target: { selfCheck: ['몸을 세웠어요', '단호하게 말했어요'] } } },
              conclude: '몸을 세우고, 눈을 보고, 단호하게 "싫어, 그만해". 그다음 피하고 알려요.' },
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '짝 연습에서 내가 한 것에 표시해요.', options: ['몸을 바로 세웠어요', '눈을 보고 말했어요', '단호하게 말했어요'] }] },
        notes: '연습을 어려워하는 학생은 교사와 함께하거나 보기만 해도 된다. 실제 불편한 말이나 몸에 닿는 동작은 쓰지 않는다.',
      }),
      C({
        id: 'gender.e34.sv-many-forms.activity.bystander-path', type: 'activity', title: '갈림길: 성폭력을 목격했을 때',
        method: '목격했을 때 갈림길 이어 가기', tool: 'dilemma', minutes: 25,
        levels: { easy: '장면마다 갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '첫 장면은 갈림 3번(말리기·알리기 → 어른께 가기 → 친구 위로하기), 나머지는 갈림 2번씩 고르며 결과를 따라간다.', challenge: '끝 장면에서 근거 카드 3장 가운데 알맞은 2장을 고른다.' },
        activity: {
          title: '갈림길: 성폭력을 목격했을 때', tool: 'dilemma',
          teacher: '"친구가 다른 친구의 몸을 평가하는 말을 해요. 옆에 있는 나는 어떻게 할까요?" 결과를 소리 내어 읽고 다음 장면에서 다시 고른다. 웃는 길을 고른 학생을 나무라지 않고 "분위기 때문에 웃었군요. 그 말을 들은 친구는 어땠을까요?"라고 되묻는다. 직접 말리기 어려우면 선생님께 알리는 것도 친구를 돕는 일이고, 들은 친구에게 "네 잘못이 아니야"라고 말해 주는 것이 중요하다는 것을 짚는다. 활동이 끝나면 학교가 알려 준 신고·상담 번호를 함께 읽어 본다.',
          task: '성폭력을 목격하는 가상 장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('친구가 몸을 평가하는 말을 해요.', {
              text: '쉬는 시간, 하준이가 지나가는 이솔이의 몸을 두고 큰 소리로 평가하는 말을 해요. 이솔이 얼굴이 굳었어요.', motif: 'cloud',
              choices: [
                { id: 'stop', text: '"그런 말 하지 마"', result: '하준이가 멈칫했어요.', ending: '그만하라고 말한 것은 이솔이를 지킨 일이에요.', next: {
                  text: '하준이가 "장난인데 왜?" 하며 웃어요.', choices: [
                    { id: 'tell', text: '선생님께 알린다', result: '선생님이 하준이와 이야기를 나누셨어요.', next: {
                      text: '이솔이가 혼자 자리에 앉아 있어요.', choices: [
                        { id: 'comfort', text: '"네 잘못이 아니야. 괜찮아?"', result: '이솔이가 고개를 끄덕였어요.', impact: [{ who: '이솔', text: '혼자가 아니에요', tone: 1 }], ending: '알리고, 곁에서 위로해 줘서 이솔이에게 힘이 됐어요.' },
                        { id: 'retell', text: '"하준이가 뭐라고 했지?" 다시 묻는다', result: '이솔이가 또 속상해졌어요.', impact: [{ who: '이솔', text: '다시 아파요', tone: -1 }], why: '들은 말을 다시 말하게 하지 않아요.' },
                      ] } },
                    { id: 'laugh', text: '"하긴 장난이지" 웃는다', result: '하준이가 또 그런 말을 했어요.', impact: [{ who: '이솔', text: '더 속상해요', tone: -1 }], why: '장난이라고 해도 성적인 평가는 멈추게 해요.' },
                    { id: 'leave', text: '그냥 자리를 뜬다', result: '이솔이는 혼자 남았어요.', impact: [{ who: '이솔', text: '외로워요', tone: -1 }], why: '말리기 어려우면 선생님께 알려요.' },
                  ] } },
                { id: 'giggle', text: '같이 웃는다', result: '하준이가 더 크게 말했어요.', impact: [{ who: '이솔', text: '창피해요', tone: -1 }], why: '웃음은 그 말에 힘을 보태요.' },
                { id: 'watch', text: '못 들은 척한다', result: '말은 계속됐어요.', impact: [{ who: '이솔', text: '혼자 견뎌요', tone: -1 }] },
              ] }, [['stop', 'tell', 'comfort']],
            [{ id: 'notfault', text: '들은 친구 잘못이 아니라서' }, { id: 'help', text: '알리면 어른이 멈추게 해서' }, { id: 'joke', text: '장난이면 괜찮아서', why: '장난이어도 상대가 싫으면 괜찮지 않아요.' }], ['notfault', 'help'], 0.2),
            DIL('친구가 몰래 사진을 찍으려 해요.', {
              text: '체육 시간 뒤, 한 친구가 옷을 갈아입는 친구를 휴대폰으로 몰래 찍으려 해요.', motif: 'house',
              choices: [
                { id: 'no', text: '"찍지 마. 그건 안 돼"', result: '친구가 휴대폰을 내렸어요.', ending: '바로 막은 것은 친구를 지킨 일이에요.', next: {
                  text: '그 친구가 "벌써 한 장 찍었는데?"라고 해요.', choices: [
                    { id: 'teacher', text: '바로 선생님께 알린다', result: '선생님이 사진을 지우게 하고 함께 이야기하셨어요.', impact: [{ who: '찍힐 뻔한 친구', text: '지켜졌어요', tone: 1 }], ending: '바로 알려서 사진이 퍼지지 않았어요.' },
                    { id: 'see', text: '"나도 보여 줘"', result: '사진을 본 사람이 늘었어요.', impact: [{ who: '찍힌 친구', text: '크게 상처받아요', tone: -1 }], why: '보거나 퍼뜨리면 피해가 커져요.' },
                    { id: 'later', text: '나중에 말하기로 한다', result: '그사이 사진이 퍼졌어요.', impact: [{ who: '찍힌 친구', text: '더 힘들어요', tone: -1 }], why: '사진은 빨리 알려야 퍼지지 않아요.' },
                  ] } },
                { id: 'look', text: '궁금해서 화면을 본다', result: '찍는 친구가 더 신났어요.', impact: [{ who: '찍힐 뻔한 친구', text: '위험해요', tone: -1 }], why: '보기만 해도 피해에 힘을 보태요.' },
                { id: 'quiet', text: '모른 척한다', result: '사진이 찍혔어요.', impact: [{ who: '찍힌 친구', text: '모른 채 피해를 입어요', tone: -1 }] },
              ] }, [['no', 'teacher']],
            [{ id: 'fast', text: '빨리 알려야 퍼지지 않아서' }, { id: 'photo', text: '몰래 찍기는 성폭력이라서' }, { id: 'look', text: '보기만 하는 건 괜찮아서', why: '보거나 퍼뜨리면 피해가 커져요.' }], ['fast', 'photo'], 0.25),
            DIL('대화방에 몸을 평가하는 글이 올라왔어요.', {
              text: '반 대화방에 한 친구의 몸을 평가하는 글이 올라왔고, 몇몇이 웃는 그림을 달았어요.', motif: 'star',
              choices: [
                { id: 'save', text: '글을 퍼뜨리지 않고 보호자께 보여 준다', result: '보호자가 선생님께 함께 알려 주셨어요.', ending: '퍼뜨리지 않고 어른께 알린 것은 잘한 일이에요.', next: {
                  text: '다음 날 그 친구가 대화방을 나가 버렸어요.', choices: [
                    { id: 'support', text: '"네 잘못이 아니야" 따로 말해 준다', result: '친구가 "고마워"라고 답했어요.', impact: [{ who: '친구', text: '힘이 나요', tone: 1 }], ending: '응원의 말 한마디가 친구를 지켰어요.' },
                    { id: 'forward', text: '다른 방에 그 글을 옮긴다', result: '글이 더 퍼졌어요.', impact: [{ who: '친구', text: '더 아파요', tone: -1 }], why: '옮기면 피해가 커져요.' },
                    { id: 'ignore', text: '아무 말 안 한다', result: '친구는 혼자라고 느꼈어요.', impact: [{ who: '친구', text: '외로워요', tone: -1 }], why: '따로 응원해 줄 수 있어요.' },
                  ] } },
                { id: 'emoji', text: '웃는 그림을 단다', result: '글이 더 많이 보였어요.', impact: [{ who: '친구', text: '창피해요', tone: -1 }], why: '웃는 그림도 그 글에 힘을 보태요.' },
                { id: 'share', text: '다른 친구에게 보낸다', result: '글이 반 밖으로 퍼졌어요.', impact: [{ who: '친구', text: '크게 상처받아요', tone: -1 }], why: '보내면 피해가 커져요.' },
              ] }, [['save', 'support']],
            [{ id: 'nospread', text: '퍼뜨리지 않아야 해서' }, { id: 'adult', text: '어른이 지우고 멈추게 해서' }, { id: 'online', text: '대화방 글은 괜찮아서', why: '대화방에서도 성적인 평가는 성폭력일 수 있어요.' }], ['nospread', 'adult'], 0.3, { conclude: '보면 말리거나 어른께 알리고, 퍼뜨리지 않아요. 들은 친구에게 "네 잘못이 아니야"라고 말해 줘요.' }),
          ],
        },
        worksheet: {
          items: [
            { type: 'choice', prompt: '친구 몸을 평가하는 글을 보았을 때 할 일은?', options: ['퍼뜨리지 않고 어른께 알려요', '웃는 그림을 달아요', '다른 친구에게 보내요'], answer: '퍼뜨리지 않고 어른께 알려요' },
            { type: 'short', prompt: `${HELPNO}를 선생님과 함께 써요.` },
          ],
        },
        notes: `평가하는 말·글의 내용은 쓰지 않았다. 실제 앱 이름을 쓰지 않는다("반 대화방"). 번호 칸은 체계도에 번호가 없어 비워 두었다(${HELPNO}).`,
      }),
      C({
        id: 'gender.e34.sv-many-forms.wrap.help-places', type: 'wrap', title: '도움 받을 곳 지도',
        method: '도움 받을 곳 지도', tool: 'map', minutes: 6,
        levels: { easy: '핀을 꽂으면 그 칸의 이름이 바로 보인다(상담실·지구대 2곳).', base: '이름 표시 없이 상담실·지구대에 핀을 꽂고, 보건실은 고르기 문항으로 답한다.', challenge: '핀을 꽂은 뒤 그곳에서 만날 어른도 보기에서 고른다.' },
        wrap: {
          teacher: '"성폭력을 겪거나 보았을 때 도움 받을 곳은 어디일까요?" 핀을 꽂기 전에 우리 교실에서 그곳까지 가는 길을 손가락으로 따라가 보게 한다. 빈 골목이나 놀이터에 핀을 꽂는 학생에게 "그곳에서 누가 도와줄 수 있을까요?"라고 되묻는다. 학교에는 상담·보건·담임 선생님이, 동네에는 지구대가 있고, 학교가 알려 준 신고·상담 번호도 도움 길이라는 것을 마무리로 말한다.',
          exitTicket: [
            PINQ('학교에서 이야기를 차분히 들어 줄 곳에 핀을 꽂아요.', '상담실', { q: '이곳에서 만날 어른은?', choices: ['상담 선생님', '모르는 형', '아무도 없어요'], answer: 0 }, 0.15),
            PINQ('학교 밖에서 경찰에게 도움을 청할 곳에 핀을 꽂아요.', '지구대', { q: '이곳에서 만날 어른은?', choices: ['경찰관', '가게 주인', '아무도 없어요'], answer: 0 }, 0.2),
            { type: 'choice', prompt: '마음이 놀라 몸이 아플 때 학교에서 갈 곳은?', options: ['보건실', '운동장', '빈 골목'], answer: 0, difficulty: 0.1, explain: '보건 선생님도 도와줄 어른이에요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '도움 받을 곳',
          items: [
            { type: 'table', prompt: '곳마다 만날 어른을 써요.', columns: ['곳', '만날 어른'], cells: [['상담실', ''], ['보건실', ''], ['지구대', '']], answer: '상담 선생님, 보건 선생님, 경찰관' },
            { type: 'short', prompt: `${HELPNO}를 선생님과 함께 써요.` },
          ],
          easy: { note: '도와줄 어른은 가까이 있어요.', items: [{ type: 'choice', prompt: '성폭력을 보면?', options: ['어른께 알려요', '모른 척해요'], answer: '어른께 알려요' }] },
        },
        notes: '지도는 가상이다. 우리 학교 둘레의 실제 지구대 위치는 교사가 말로 알려 준다.',
      }),
      C({
        id: 'gender.e34.sv-many-forms.wrap.support-words', type: 'wrap', title: '"네 잘못 아니야" 응원 구호',
        method: '"네 잘못 아니야" 응원 구호', tool: 'keyboard', minutes: 6,
        levels: { easy: '앞 구절("네 잘못 아니야") 한 마디를 박 수를 보며 친다.', base: '구호 전체 두 마디("네 잘못 아니야, 우리가 함께해")를 친다.', challenge: '박 수 표시 없이 구호를 친 뒤, 짝과 앞·뒤 구절을 주고받는다(교사 진행).' },
        wrap: {
          teacher: '"성폭력을 겪은 친구에게 꼭 필요한 말을 구호로 남겨 볼까요? 네 잘못 아니야, 우리가 함께해!" 구절마다 손뼉을 치며 외친 뒤 리듬 블록으로 친다. 장난스럽게 외치는 학생에게 "이 말이 꼭 필요한 친구가 듣는다면 어떤 목소리가 좋을까요?"라고 묻는다. 잘못은 늘 그 행동을 한 사람에게 있고, 알린 사람은 잘한 것이라는 것을 마무리로 말한다.',
          exitTicket: [
            RHY('"네 잘못 아니야, 우리가 함께해" 리듬을 쳐요.', ['q', 'e', 'e', 'e', 'e', 'q'], ['e', 'e', 'q', 'q', 'q']),
            { type: 'choice', prompt: '원치 않는 사진을 찍힌 친구에게 알맞은 말은?', options: ['"네 잘못 아니야, 같이 알리자"', '"왜 가만있었어?"', '"사진 나도 보여 줘"'], answer: 0, difficulty: 0.1, explain: '피해를 입은 친구 잘못이 아니에요. 함께 어른께 알려요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '네 잘못 아니야',
          items: [
            { type: 'check', prompt: '성폭력일 수 있는 것에 표시해요.', options: ['원치 않는 사진 찍기', '몸을 평가하는 말', '반가운 하이파이브'] },
            { type: 'short', prompt: '성폭력을 겪은 친구에게 해 줄 응원의 말을 써요.' },
          ],
          easy: { note: '닿지 않아도 성폭력일 수 있어요.', items: [{ type: 'choice', prompt: '장난으로 한 말은 늘 괜찮을까요?', options: ['아니에요', '맞아요'], answer: '아니에요' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 4학년 · "남자는, 여자는" 말에 답하고 내 선택 존중하기 (research-mandatory §2 초: 성별 고정관념 깨기)
  // ======================================================================================================
  {
    const C = T('answer-stereotypes', 4);
    const TALLY = { type: 'picture', title: '가상 교실 하루 대화 10장 속 고정관념 말', unit: '장', xLabel: '고정관념 말의 종류', yLabel: '카드 수', icons: [{ value: 5, name: '5장' }, { value: 1, name: '1장' }], icon: 'star' };
    const T3 = [['옷·색깔', 3], ['운동·놀이', 2], ['울기·마음', 1]];
    M.push(
      C({
        id: 'gender.e34.answer-stereotypes.intro.classroom-words', type: 'intro', title: '교실 말을 들은 친구 마음',
        method: '교실 말 들은 친구 마음', tool: 'emotion', minutes: 6,
        levels: { easy: '장면 하나("여자애가 왜 그렇게 뛰어?")의 마음 크기 눈금을 함께 고른다.', base: '장면 4개를 교사가 차례로 읽고, 장면마다 손가락으로 마음 크기를 고른다.', challenge: '말한 친구의 마음(그냥 한 말)도 생각해 보고, 그래도 들은 친구가 속상한 까닭을 말한다(교사 진행).' },
        intro: {
          teacher: '"달리기를 좋아하는 나래가 \'여자애가 왜 그렇게 뛰어?\'라는 말을 들었어요. 나래의 속상한 마음은 얼마나 클까요?" 시연 단추로 눈금이 놓이는 것을 보인다. 이어서 "남자가 왜 울어?", "남자애가 무슨 분홍이야", "여자는 얌전해야지" 장면을 읽고 손가락으로 눈금을 고르게 한다. "그냥 하는 말이라 괜찮아요"라는 말이 나오면 "말한 사람은 그냥이어도, 들은 사람 마음은 어땠을까요?"라고 되묻는다. 오늘은 이런 말에 존중하는 말로 답하는 법을 익힌다고 밝힌다.',
          student: '고정관념 말을 들은 친구의 속상한 마음 크기를 눈금으로 골라요.',
          demo: { tool: 'emotion', options: { mode: 'scale', situation: '"여자애가 왜 그렇게 뛰어?"를 들었어요', feeling: '속상함', steps: 5, scaleLabels: { 1: '조금', 5: '아주 많이' } }, sequence: [{ level: 4 }] },
          art: { draw: 'a paper girl running happily on a paper track while a speech bubble floats from the side, her face turning a little sad', banner: '그 말을 들으면?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '장면의 말은 모두 가상이다. 학생이 들은 말을 발표하게 하지 않는다.',
      }),
      C({
        id: 'gender.e34.answer-stereotypes.intro.word-tally', type: 'intro', title: '고정관념 말 세기',
        method: '고정관념 말 세기 표', tool: 'chart', minutes: 6,
        levels: { easy: '대화 카드 6장 가운데 고정관념 말을 함께 세어 그림그래프를 읽는다.', base: '카드 10장을 센 그래프에서 가장 많은 종류를 고른다.', challenge: '가장 많은 종류의 말을 바꿀 대답을 말해 본다(교사 진행).' },
        intro: {
          teacher: '"가상의 교실 하루 대화 카드 열 장에서 \'남자는, 여자는\' 말을 세어 그래프로 만들었어요. 어떤 종류가 가장 많을까요?" 시연 단추로 가장 많은 종류가 골라지는 것을 보인다. "세어 보니 생각보다 많아요"라는 말이 나오면 "자주 듣는 말이라 익숙해진 걸까요?"라고 묻는다. 익숙한 말이라도 누군가의 선택을 막을 수 있다는 것을 짚는다.',
          student: '가상 교실 대화에서 센 고정관념 말 그래프를 보고 가장 많은 종류를 골라요.',
          demo: { tool: 'chart', options: Object.assign({}, TALLY, { mode: 'read', data: T3, question: '가장 많은 종류는?', choices: T3.map((d) => d[0]) }), sequence: [{ pick: 0 }] },
          art: { draw: 'ten small paper speech bubble cards pinned on a board, a few marked with small paper stars, and a little paper picture graph beside them', banner: '몇 번 들렸을까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '그래프 자료는 가상이다(화면 제목에 밝힘). 우리 반 실제 대화를 기록해 세지 않는다.',
      }),
      C({
        id: 'gender.e34.answer-stereotypes.activity.reply-practice', type: 'activity', title: '존중하는 대답 넣기',
        method: '존중하는 대답 넣기', tool: 'story', minutes: 14,
        levels: { easy: '말풍선 2칸에 대답 카드를 넣고(놓으면 바로 맞는지 알림), 대답 고르기 4장, 말과 대답 잇기 2줄을 한다.', base: '말풍선 4칸, 고르기 6장, 잇기 3줄을 하고 짝과 역할을 바꿔 읽는다.', challenge: '말풍선 5칸, 고르기 8장, 남는 카드가 있는 잇기를 한 뒤 대답 하나를 직접 고쳐 짝에게 말한다.' },
        activity: {
          title: '존중하는 대답 넣기', tool: 'story',
          teacher: '"\'남자가 왜 울어?\'라는 말을 들으면 어떻게 대답할 수 있을까요?" 말풍선에 대답 카드를 넣은 뒤 짝과 한 사람은 말하는 역, 한 사람은 대답하는 역을 맡아 읽고 바꾼다. 화내며 되받아치는 대답을 고르는 학생에게 "화를 내면 그 친구가 생각을 바꿀까요? 차분하게 \'누구나\'라고 말하면 어떨까요?"라고 묻는다. 고정관념 말에는 누구나 할 수 있다는 것, 사람마다 다르다는 것을 차분히 말하면 된다는 것을 짚는다.',
          task: '고정관념 말풍선 다음 칸에 존중하는 대답을 넣고, 짝과 역할을 바꿔 읽어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            FILL('고정관념 말에 존중하는 대답을 넣어요.', ['가람', '나래', '가람', '나래', '가람'], [['"남자가 왜 울어?" → "___ 울 수 있어."', '누구나'], ['"여자애가 축구?" → "___ 하면 돼."', '좋아하면'], ['"분홍은 여자색" → "색은 ___ 거야."', '모두의'], ['"남자는 요리 못 해" → "___ 다른 거야."', '사람마다'], ['"그냥 한 말이야" → "___ 수 있어."', '속상할']], ['맞아', '너나 해', '그러게', '몰라'], 0.15, null, 2, 4),
            PICK('고정관념 말에 할 존중하는 대답을 골라요.', { basket: '존중하는 대답' }, [{ id: 'anyone', text: '"누구나 할 수 있어"', ok: true }, { id: 'angry', text: '"너야말로 이상해"' }, { id: 'differ', text: '"사람마다 달라"', ok: true }, { id: 'agree', text: '"맞아, 남자는 그래"' }, { id: 'choice', text: '"내가 좋아서 해"', ok: true }, { id: 'silent', text: '"어쩔 수 없지"' }], ['anyone', 'angry', 'differ', 'agree'], [{ id: 'hurt', text: '"그 말 좀 속상해"', ok: true }, { id: 'mock', text: '"넌 여자 같아"' }], 0.2),
            MATCH('고정관념 말과 어울리는 대답을 이어요.', { title: '말과 대답' }, [['"남자는 파랑이지"', '"색은 모두의 거야"'], ['"여자는 얌전해야지"', '"성격은 사람마다 달라"'], ['"남자가 무슨 발레야"', '"좋아하면 누구나 해"']], '"맞는 말이야"', 0.25, { conclude: '고정관념 말에는 차분하게 "누구나", "사람마다 달라"라고 답해요. 내 선택도 친구 선택도 존중해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"남자는, 여자는" 말을 들었을 때 할 대답을 한 줄로 써요.' }] },
        notes: '역할 읽기에서 실제 친구 이름을 넣지 않는다. 화가 나는 마음은 괜찮지만 상대를 놀리는 대답은 고르지 않게 한다.',
      }),
      C({
        id: 'gender.e34.answer-stereotypes.activity.choice-sort', type: 'activity', title: '정하는 말·존중하는 말',
        method: '성별로 정하는 말·선택 존중 말', tool: 'sortboard', minutes: 13,
        levels: { easy: '문항마다 카드 4장을 바구니 2개에 나누고, 틀리면 바로 되돌아온다.', base: '문항마다 카드 6장을 나눈 뒤 확인한다.', challenge: '헷갈리는 카드 2장이 더해진 8장을 나누고, 셋째 문항에서 정하는 말을 바꾼 존중의 말을 가려낸다.' },
        activity: {
          title: '정하는 말·존중하는 말', tool: 'sortboard',
          teacher: '"이 말은 성별로 정해 버리는 말일까요, 그 사람의 선택을 존중하는 말일까요?" 카드를 넣을 때마다 까닭을 말하게 한다. "머리가 짧으면 남자예요"라는 말이 나오면 "머리가 짧은 여자, 머리가 긴 남자도 있을까요? 머리 모양은 누가 정할까요?"라고 되묻는다. 옷차림·머리 모양·취미는 성별이 아니라 그 사람이 고르는 것이고, 남의 선택도 존중한다는 것을 짚는다.',
          task: '옷·머리·취미에 대한 말 카드를 성별로 정하는 말과 선택을 존중하는 말 바구니에 나누어요.', levels: BOXLV,
          items: [
            BOX('옷과 머리 모양에 대한 말을 나누어요.', ['성별로 정하는 말', '선택을 존중하는 말'], [['"치마는 여자만"', '"머리 짧으면 남자"', '"남자가 무슨 핀이야"'], ['"좋아하는 옷 입어"', '"그 머리 잘 어울려"', '"네가 고른 거구나"']], [[0, 2], [1, 2]], [['"여자는 긴 머리지"'], ['"멋진 선택이다"']], 0.15),
            BOX('취미와 놀이에 대한 말을 나누어요.', ['성별로 정하는 말', '선택을 존중하는 말'], [['"인형은 여자 놀이"', '"남자는 축구지"', '"여자가 게임을?"'], ['"같이 해 볼래?"', '"재밌어 보인다"', '"좋아하는 걸 해"']], [[0, 2], [1, 2]], [['"남자가 발레를?"'], ['"나도 배워 볼래"']], 0.2),
            BOX('정하는 말을 바꾼 말을 가려요.', ['바꾼 존중의 말', '그대로 정하는 말'], [['"옷은 내가 골라"', '"놀이는 누구나 해"', '"색은 모두의 것"'], ['"그건 남자 색이야"', '"여자답게 해"', '"남자답게 참아"']], [[0, 2], [1, 2]], [['"좋아하면 누구나"'], ['"그건 여자 일이야"']], 0.25, { conclude: '옷차림·머리 모양·취미는 성별이 아니라 내가 골라요. 친구의 선택도 존중해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '머리를 짧게 자른 여자 친구에게 알맞은 말은?', options: ['"잘 어울린다"', '"남자 같아"', '"왜 그랬어?"'], answer: '"잘 어울린다"' }] },
      }),
      C({
        id: 'gender.e34.answer-stereotypes.activity.style-collage', type: 'activity', title: '내 마음대로 옷차림',
        method: '내 마음대로 옷차림 꾸미기', tool: 'collage', minutes: 25,
        levels: { easy: '종이 인형에 옷 조각 3개 이상을 붙이고, 머리 모양 조각을 붙인 뒤 점검 2칸에 표시한다.', base: '옷 조각 5개 이상과 머리 모양을 붙이고, 짝과 고른 까닭을 묻고 점검 3칸에 표시한다.', challenge: '같은 판을 마친 뒤 짝 작품에 존중의 말 카드를 써 붙이고 점검 4칸에 표시한다.' },
        activity: {
          title: '내 마음대로 옷차림', tool: 'collage',
          teacher: '"종이 인형에 내가 입고 싶은 옷과 머리 모양을 색·모양 상관없이 꾸며 볼까요?" 판 가운데 종이 인형 몸을 그려 두고, 옷 조각·머리 조각을 붙이게 한다. 짝 작품을 보며 "남자가 왜 분홍이야?"라는 말이 나오면 "색은 누구의 것일까요? 친구가 고른 까닭을 먼저 물어볼까요?"라고 되묻는다. 짝에게 "왜 이렇게 골랐어?"라고 묻고 칭찬하는 말을 하게 한다. 옷차림은 내가 고르는 것이고 친구의 선택도 존중한다는 것을 짚는다.',
          task: '종이 인형에 내가 좋아하는 옷과 머리 모양 조각을 붙이고, 짝과 고른 까닭을 묻고 칭찬해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '종이 인형에 내가 좋아하는 옷 조각을 붙여요.', toolOptions: { maxPieces: 16 }, target: { pieces: { min: 5 } }, difficulty: 0.1,
              levels: { easy: { prompt: '종이 인형에 옷 조각 3개를 붙여요.', target: { pieces: { min: 3 } } } } },
            { prompt: '내가 좋아하는 머리 모양을 반원 조각으로 붙여요.', toolOptions: { maxPieces: 16 }, target: { has: [{ shape: 'semi', min: 1 }], pieces: { min: 3 } }, difficulty: 0.15,
              levels: { easy: { prompt: '머리 모양 반원 조각을 하나 붙여요.', target: { has: [{ shape: 'semi', min: 1 }] } } } },
            { prompt: '짝과 고른 까닭을 묻고 점검해요.', toolOptions: { maxPieces: 16 }, target: { selfCheck: ['좋아하는 것을 골랐어요', '짝에게 까닭을 물었어요', '칭찬하는 말을 했어요'], minPieces: 3 }, difficulty: 0.1,
              levels: { easy: { prompt: '짝과 고른 까닭을 묻고 점검해요(2칸).', target: { selfCheck: ['좋아하는 것을 골랐어요', '짝에게 까닭을 물었어요'], minPieces: 2 } },
                challenge: { prompt: '짝 작품에 존중의 말까지 붙이고 점검해요(4칸).', target: { selfCheck: ['좋아하는 것을 골랐어요', '짝에게 까닭을 물었어요', '칭찬하는 말을 했어요', '존중의 말 카드를 붙였어요'], minPieces: 4 } } },
              conclude: '옷차림과 머리 모양은 내가 골라요. 친구가 고른 것도 "잘 어울려"라고 존중해요.' },
          ],
        },
        worksheet: {
          items: [
            { type: 'short', prompt: '짝 작품을 보고 칭찬하는 말을 한 줄로 써요.' },
            { type: 'choice', prompt: '친구가 고른 옷이 내 생각과 다를 때 알맞은 것은?', options: ['고른 까닭을 묻고 존중해요', '성별에 안 맞다고 해요', '놀려요'], answer: '고른 까닭을 묻고 존중해요' },
          ],
        },
        notes: '종이 인형은 성별을 정하지 않은 모양으로 둔다. 학생 자신의 실제 옷차림을 평가하지 않는다.',
      }),
      C({
        id: 'gender.e34.answer-stereotypes.wrap.reply-check', type: 'wrap', title: '대답하기 스스로 점검',
        method: '대답하기 스스로 점검', tool: 'timer', minutes: 6,
        levels: { easy: '점검 2칸(놀리지 않기·답해 보기)에 표시한다.', base: '점검 3칸(선택 존중 더함)에 표시한다.', challenge: '점검 4칸에 표시하고, 한 칸을 예로 짝에게 설명한다.' },
        wrap: {
          teacher: '"\'남자는, 여자는\' 말을 들었을 때 나는 어디까지 할 수 있을까요?" 칸마다 읽어 주고 스스로 표시하게 한다. "답하기는 아직 어려워요"라는 학생에게 "처음에는 \'누구나 할 수 있어\' 한마디로도 충분해요"라고 말해 준다. 고정관념 말에 존중하는 말로 답하고, 나와 친구의 선택을 존중한다는 것을 마무리로 말한다.',
          exitTicket: [
            SELF('대답하기 스스로 점검', ['놀리지 않아요', '존중하는 말로 답해요', '선택을 존중해요', '예로 설명했어요']),
            { type: 'choice', prompt: '"남자는 울면 안 돼"라는 말에 알맞은 대답은?', options: ['"누구나 울 수 있어"', '"맞아, 참아"', '"넌 여자 같아"'], answer: 0, difficulty: 0.1, explain: '마음을 표현하는 것은 누구나 할 수 있어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '내 선택 존중하기',
          items: [
            { type: 'check', prompt: '선택을 존중하는 말에 표시해요.', options: ['"좋아하는 걸 해"', '"그건 남자 거야"', '"잘 어울려"'] },
            { type: 'short', prompt: '내가 좋아하는 것 가운데 성별과 상관없이 하고 싶은 것을 써요.' },
          ],
          easy: { note: '누구나 할 수 있어요.', items: [{ type: 'choice', prompt: '좋아하는 색은 누가 정해요?', options: ['나', '성별'], answer: '나' }] },
        },
      }),
      C({
        id: 'gender.e34.answer-stereotypes.wrap.respect-rhythm', type: 'wrap', title: '"내 선택은 내 것" 구호',
        method: '"내 선택은 내 것" 구호', tool: 'keyboard', minutes: 6,
        levels: { easy: '앞 구절("내 선택은 내 것") 한 마디를 박 수를 보며 친다.', base: '구호 전체 두 마디("내 선택은 내 것, 네 선택도 소중해")를 친다.', challenge: '구호를 바꿔 부를 두 마디 리듬을 박에 맞게 지어 친다.' },
        wrap: {
          teacher: '"오늘의 약속을 구호로! 내 선택은 내 것, 네 선택도 소중해!" 구절마다 손뼉을 치며 외친 뒤 리듬 블록으로 친다. 도전 단계에서는 "옷도 색도 내가 골라"처럼 구호를 바꿔 리듬을 짓게 한다. 구호에 특정 친구를 넣어 놀리려는 학생이 있으면 "구호는 모두의 선택을 응원하는 말이에요"라고 말해 준다. 나와 친구의 선택을 함께 존중한다는 것을 마무리로 말한다.',
          exitTicket: [
            RHY('"내 선택은 내 것, 네 선택도 소중해" 리듬을 쳐요.', ['e', 'e', 'e', 'e', 'q', 'q'], ['e', 'e', 'e', 'e', 'h'], { prompt: '구호를 바꿔 부를 두 마디 리듬을 박에 맞게 지어요.', target: { beats: true } }),
            { type: 'choice', prompt: '친구가 "남자가 무슨 핀이야"라는 말을 들었을 때 내가 할 말은?', options: ['"네가 좋으면 돼, 잘 어울려"', '"그러게, 빼"', '"웃기다"'], answer: 0, difficulty: 0.1, explain: '친구의 선택을 존중하는 말로 함께해요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '내 선택은 내 것',
          items: [
            { type: 'short', prompt: '내가 바꾼 구호를 한 줄로 써요.' },
            { type: 'choice', prompt: '옷차림·머리 모양·취미는 무엇으로 정할까요?', options: ['내가 좋아하는 것', '성별', '친구들 생각'], answer: '내가 좋아하는 것' },
          ],
          easy: { note: '내 선택도 친구 선택도 소중해요.', items: [{ type: 'choice', prompt: '친구 선택을 놀려도 될까요?', options: ['안 돼요', '돼요'], answer: '안 돼요' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 4학년 · 돌봄은 모두의 일 (research-mandatory §2 초: 성별 고정관념 깨기 + 양성평등한 가정)
  // ======================================================================================================
  {
    const C = T('care-for-all', 4);
    const CARE = { type: 'bar', title: '하린이네 가족 한 주 돌봄 시간(가상)', unit: '시간', xLabel: '가족', yLabel: '돌봄 시간', max: 12, scale: 2 };
    const C4 = [['고모', 10], ['할아버지', 2], ['형', 2], ['하린', 1]];
    const GIFT = [{ id: 'blanket', text: '무릎 담요', price: 5000 }, { id: 'glass', text: '돋보기', price: 3000 }, { id: 'letter', text: '손 편지 종이', price: 500 }, { id: 'candy', text: '사탕 한 봉지', price: 2000 }, { id: 'robot', text: '장난감 로봇', price: 6000 }, { id: 'book', text: '그림책', price: 4000 }];
    const G = (...ids) => ids.map((id) => GIFT.find((k) => k.id === id));
    M.push(
      C({
        id: 'gender.e34.care-for-all.intro.care-scenes', type: 'intro', title: '돌보는 장면의 마음',
        method: '돌봄 장면 마음 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '장면 2개(할아버지가 아기를 돌봄·형이 아픈 동생을 돌봄)에 마음 카드를 함께 짝 짓는다.', base: '장면 4개(아빠가 할머니를 돌봄·내가 반려식물을 돌봄 더함)에 마음 카드를 짝 짓는다.', challenge: '돌봄을 받는 사람의 마음도 함께 말해 본다(교사 진행).' },
        intro: {
          teacher: '"할아버지가 아기를 돌보고, 형이 아픈 동생을 돌봐요. 돌보는 사람의 마음은 어떨까요?" 시연 단추로 장면마다 마음 카드가 놓이는 것을 보인다. "돌봄은 엄마나 할머니가 하는 거예요"라는 말이 나오면 "그림 속 할아버지와 형도 돌보고 있지요? 돌봄은 누가 할 수 있을까요?"라고 되묻는다. 돌봄은 성별과 상관없이 누구나 할 수 있고, 어린이도 할 수 있다는 것을 오늘 알아본다고 밝힌다.',
          student: '여러 사람이 돌보는 장면을 보고 돌보는 사람의 마음 카드를 짝 지어요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'grandpa', label: '할아버지가 아기를 돌봐요' }, { id: 'brother', label: '형이 아픈 동생 돌봄' }, { id: 'dad', label: '아빠가 할머니 돌봄' }, { id: 'me', label: '내가 화분을 돌봐요' }], cards: ['편안함', '걱정', '고마움', '뿌듯함'], shuffle: false }, sequence: [{ match: { grandpa: '편안함', brother: '걱정' } }, { match: { grandpa: '편안함', brother: '걱정', dad: '고마움', me: '뿌듯함' } }] },
          art: { draw: 'a paper grandfather gently rocking a baby in a paper chair, and beside him a paper older brother bringing a cup of water to a younger sibling in bed', banner: '누구나 돌볼 수 있어요', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
        notes: '짝 지은 마음은 예시이고 다르게 느껴도 괜찮다고 말해 준다. 학생 집에서 누가 돌보는지 묻지 않는다.',
      }),
      C({
        id: 'gender.e34.care-for-all.intro.care-count', type: 'intro', title: '돌봄 시간이 몰렸을까',
        method: '가상 가족 돌봄 시간 그래프', tool: 'chart', minutes: 6,
        levels: { easy: '두 사람(고모·하린)의 막대를 함께 비교한다.', base: '네 사람의 막대그래프를 읽고 돌봄이 가장 많은 사람을 고른다.', challenge: '돌봄을 고르게 나눌 방법을 말해 본다(교사 진행).' },
        intro: {
          teacher: '"가상의 하린이네 가족이 한 주 동안 아픈 할머니를 돌본 시간이에요. 누가 가장 많이 돌봤을까요?" 시연 단추로 가장 높은 막대가 골라지는 것을 보인다. "고모가 여자라서 잘하니까요"라는 말이 나오면 "돌봄을 잘하는 것은 성별 때문일까요, 해 본 경험 때문일까요?"라고 되묻는다. 돌봄이 한 사람에게 몰리면 그 사람이 지치고, 가족 모두가 나누면 더 좋다는 것을 짚는다.',
          student: '가상 가족의 돌봄 시간 막대그래프를 보고 가장 많이 돌본 사람을 골라요.',
          demo: { tool: 'chart', options: Object.assign({}, CARE, { mode: 'read', data: C4, question: '가장 많이 돌본 사람은?', choices: C4.map((d) => d[0]) }), sequence: [{ pick: 0 }] },
          art: { draw: 'a paper bar chart on a fridge door with one tall bar and three short bars, a tired paper aunt figure beside the tall bar holding a tray', banner: '돌봄이 한 사람에게?', extra: [{ motif: 'house', x: 300, y: 96 }] },
        },
        notes: '그래프 자료와 하린이네 가족은 가상이다(화면 제목에 밝힘).',
      }),
      C({
        id: 'gender.e34.care-for-all.activity.care-plan', type: 'activity', title: '아픈 가족 돌봄 계획표',
        method: '아픈 가족 돌봄 계획표', tool: 'kitchen', minutes: 14,
        levels: { easy: '돌봄 점검 3칸, 나누기 카드 4장(놓으면 바로 맞는지 알림), 내가 맡을 돌봄 표시.', base: '점검 5칸, 나누기 카드 6장, 내가 맡을 돌봄 표시.', challenge: '함정 칸이 더해진 점검 6칸, 나누기 카드 8장을 한 뒤 내가 맡을 일의 까닭을 짝에게 말한다.' },
        activity: {
          title: '아픈 가족 돌봄 계획표', tool: 'kitchen',
          teacher: '"하린이네 할머니가 감기로 누워 계세요. 가족이 돌봄을 나누려면 어떻게 할까요?" 점검표를 함께 읽고, 일 카드를 어린이도 할 수 있는 일과 어른이 하는 일로 나누게 한다. "약은 내가 꺼내 드릴래요"라는 말이 나오면 "약은 잘못 드시면 위험해요. 어린이는 약 시간을 알려 드리고, 약은 어른이 챙겨요"라고 말해 준다. 돌봄은 성별과 상관없이 모두가, 할 수 있는 만큼 나누고, 어린이도 돌봄을 줄 수 있다는 것을 짚는다.',
          task: '아픈 가족을 돌볼 때 할 일에 표시하고, 돌봄 카드를 나눈 뒤 내가 맡을 돌봄을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            CHK('아픈 가족을 돌볼 때 할 일에 표시해요.', '돌봄 점검', [{ id: 'water', text: '물 가져다 드리기', ok: true }, { id: 'loud', text: '옆에서 큰 소리 게임' }, { id: 'time', text: '약 시간 알려 드리기', ok: true }, { id: 'quiet', text: '조용히 해 드리기', ok: true }, { id: 'pill', text: '혼자 약 꺼내 드리기' }], [0, 1, 2], [{ id: 'oneperson', text: '고모만 돌보기' }], 0.15),
            SORT('돌봄 일을 나누어요.', { autoMotif: false, groups: false }, ['어린이도 해요', '어른이 해요'], [['물수건 가져오기', '책 읽어 드리기', '물 떠 오기'], ['약 고르기', '병원 운전하기', '뜨거운 죽 끓이기']], 2, [['이불 덮어 드리기'], ['열 재고 판단하기']], 0.2),
            { prompt: '하린이네 돌봄 계획에서 내가 맡고 싶은 일에 표시해요.', toolOptions: { mode: 'checklist', title: '내가 맡을 돌봄', items: [{ id: 'read', text: '책 읽어 드리기' }, { id: 'cup', text: '물 떠 오기' }, { id: 'calm', text: '조용히 해 드리기' }, { id: 'hello', text: '"괜찮으세요?" 여쭙기' }] }, target: { selfCheck: true }, difficulty: 0.1,
              conclude: '돌봄은 성별과 상관없이 모두의 일이에요. 어린이도 할 수 있는 만큼 돌봄을 나눠요.' },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '아픈 가족에게 약을 챙길 때 어린이가 할 일은?', options: ['약 시간을 알려 드려요', '혼자 약을 골라 드려요', '아무것도 안 해요'], answer: '약 시간을 알려 드려요' }] },
        notes: '하린이네 가족은 가상이다. 집에 아픈 가족이 있는지 묻지 않는다.',
      }),
      C({
        id: 'gender.e34.care-for-all.activity.care-budget', type: 'activity', title: '돌봄 선물 예산 정하기',
        method: '돌봄 선물 예산 정하기', tool: 'economy', minutes: 13,
        levels: { easy: '물건 3개 가운데 예산 안에서 꼭 필요한 것을 고른다.', base: '물건 5개 가운데 예산 안에서 꼭 필요한 것부터 고른다.', challenge: '물건 6개 가운데 예산 안에서 고르고, 고른 까닭을 짝과 비교한다.' },
        activity: {
          title: '돌봄 선물 예산 정하기', tool: 'economy',
          teacher: '"돌봄이 필요한 가족에게 줄 선물을 예산 안에서 골라 볼까요? 그 사람에게 꼭 필요한 것은 무엇일까요?" 물건을 고를 때마다 예산 막대가 얼마나 찼는지 본다. 장난감 로봇을 고르는 학생에게 "할아버지께 로봇이 필요할까요, 내가 갖고 싶은 걸까요?"라고 되묻는다. 값은 연습용 값이라고 밝히고, 돌봄은 받는 사람에게 필요한 것을 생각하는 일이라는 것을 짚는다.',
          task: '예산 막대 안에서 돌봄이 필요한 가족에게 꼭 필요한 선물을 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '8,000원 안에서 무릎이 시린 할머니께 담요는 꼭 넣어 골라요.', toolOptions: { mode: 'budget', budget: 8000, items: G('blanket', 'glass', 'letter', 'robot', 'candy'), ask: '할머니께 드릴 선물' }, target: { budget: { must: ['blanket'], not: ['robot'] } }, difficulty: 0.15,
              levels: { easy: { prompt: '8,000원 안에서 무릎 담요를 골라요.', toolOptions: { items: G('blanket', 'robot', 'letter') }, target: { budget: { must: ['blanket'], not: ['robot'] } } },
                challenge: { prompt: '8,000원 안에서 담요는 넣고 로봇·사탕은 빼고 골라요.', toolOptions: { items: G('blanket', 'glass', 'letter', 'robot', 'candy', 'book') }, target: { budget: { must: ['blanket'], not: ['robot', 'candy'] } } } } },
            { prompt: '5,000원 안에서 글씨가 잘 안 보이는 할아버지께 돋보기는 꼭 넣어 골라요.', toolOptions: { mode: 'budget', budget: 5000, items: G('glass', 'robot', 'letter', 'candy', 'blanket'), ask: '할아버지께 드릴 선물' }, target: { budget: { must: ['glass'], not: ['robot'] } }, difficulty: 0.2,
              levels: { easy: { prompt: '5,000원 안에서 돋보기를 골라요.', toolOptions: { items: G('glass', 'robot', 'letter') }, target: { budget: { must: ['glass'], not: ['robot'] } } },
                challenge: { prompt: '5,000원 안에서 돋보기는 넣고 로봇은 빼고 골라요.', toolOptions: { items: G('glass', 'robot', 'letter', 'candy', 'blanket', 'book') }, target: { budget: { must: ['glass'], not: ['robot'] } } } } },
            { prompt: '5,000원 안에서 아픈 동생에게 그림책은 꼭 넣어 골라요.', toolOptions: { mode: 'budget', budget: 5000, items: G('book', 'robot', 'letter', 'candy', 'glass'), ask: '동생에게 줄 선물' }, target: { budget: { must: ['book'], not: ['robot'] } }, difficulty: 0.25,
              levels: { easy: { prompt: '5,000원 안에서 그림책을 골라요.', toolOptions: { items: G('book', 'robot', 'letter') }, target: { budget: { must: ['book'], not: ['robot'] } } },
                challenge: { prompt: '5,000원 안에서 그림책은 넣고 로봇·사탕은 빼고 골라요.', toolOptions: { items: G('book', 'robot', 'letter', 'candy', 'glass', 'blanket') }, target: { budget: { must: ['book'], not: ['robot', 'candy'] } } } },
              conclude: '돌봄은 받는 사람에게 필요한 것을 생각하는 일이에요. 손 편지처럼 작은 것도 돌봄이 돼요.' },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '돌봄 선물을 고를 때 먼저 생각할 것은?', options: ['받는 사람에게 필요한 것', '내가 갖고 싶은 것', '가장 비싼 것'], answer: '받는 사람에게 필요한 것' }] },
        notes: '물건 값은 연습용 값이다. 실제로 선물을 사 오게 하지 않는다.',
      }),
      C({
        id: 'gender.e34.care-for-all.activity.care-dilemma', type: 'activity', title: '갈림길: 돌봄 당번',
        method: '돌봄 당번 상황 판단', tool: 'dilemma', minutes: 25,
        levels: { easy: '장면마다 갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '장면마다 갈림 2번, 보기 3개씩 고르며 결과를 따라간 뒤 고른 이유를 짝에게 말한다.', challenge: '갈림 2번을 지난 뒤 근거 카드 3장 가운데 알맞은 2장을 고른다.' },
        activity: {
          title: '갈림길: 돌봄 당번', tool: 'dilemma',
          teacher: '"모둠 화분 돌보기를 \'여자애들이 해\'라고 미뤄요. 어떻게 할까요?" 결과를 소리 내어 읽고 다음 장면에서 다시 고른 뒤 짝에게 이유를 말하게 한다. 따르는 길을 고른 학생을 나무라지 않고 "다툼을 피하고 싶었군요. 그런데 늘 같은 친구만 돌보면 공평할까요?"라고 되묻는다. 돌봄은 성별로 정하지 않고 돌아가며 나누면 모두가 할 수 있다는 것을 짚는다.',
          task: '돌봄을 성별로 미루는 장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('모둠 화분 돌보기를 미뤄요.', {
              text: '모둠 화분에 물 주기를 정하는데 하준이가 "이런 건 여자애들이 해"라고 해요.', motif: 'flower',
              choices: [
                { id: 'rotate', text: '"돌아가며 하자"', result: '모둠이 요일마다 당번을 정했어요.', ending: '돌아가며 하자고 제안해서 모두가 함께하게 됐어요.', next: {
                  text: '하준이 차례인 날, 하준이가 "나 잘 못 해"라고 해요.', choices: [
                    { id: 'teach', text: '"내가 알려 줄게, 같이 하자"', result: '하준이가 물 주기를 배웠어요.', impact: [{ who: '하준', text: '할 수 있게 됐어요', tone: 1 }], ending: '함께 배우면 누구나 돌볼 수 있어요.' },
                    { id: 'instead', text: '"그럼 내가 대신 할게"', result: '하준이는 또 배우지 못했어요.', impact: [{ who: '하준', text: '계속 못 해요', tone: 0 }], why: '대신 해 주기보다 함께 배워요.' },
                    { id: 'mock', text: '"남자라서 못 하는구나"', result: '하준이가 속상해했어요.', impact: [{ who: '하준', text: '상처받았어요', tone: -1 }], why: '돌봄을 잘하고 못하는 건 성별 때문이 아니에요.' },
                  ] } },
                { id: 'follow', text: '"알았어" 하고 여자 친구들만 한다', result: '몇 주 뒤 그 친구들이 지쳤어요.', impact: [{ who: '여자 친구들', text: '힘들어요', tone: -1 }], why: '돌봄을 성별로 정하면 공평하지 않아요.' },
                { id: 'skip', text: '아무도 안 한다', result: '화분이 시들었어요.', impact: [{ who: '모둠', text: '아쉬워요', tone: -1 }] },
              ] }, [['rotate', 'teach']],
            [{ id: 'all', text: '돌봄은 모두의 일이라서' }, { id: 'learn', text: '배우면 누구나 할 수 있어서' }, { id: 'girl', text: '여자가 돌봄을 잘해서', why: '돌봄을 잘하는 것은 성별이 아니라 경험이에요.' }], ['all', 'learn'], 0.2),
            DIL('아픈 친구를 보건실에 데려가요.', {
              text: '체육 시간에 이솔이가 넘어졌어요. 준서가 데려가려 하자 누가 "남자가 무슨 돌봄이야"라고 해요.', motif: 'tree',
              choices: [
                { id: 'help', text: '준서와 함께 이솔이를 보건실에 데려간다', result: '보건 선생님이 이솔이를 치료해 주셨어요.', ending: '누구든 아픈 친구를 도울 수 있어요.', next: {
                  text: '돌아오니 친구들이 준서를 놀려요.', choices: [
                    { id: 'praise', text: '"준서가 잘 도와줬어"', result: '친구들이 놀림을 멈췄어요.', impact: [{ who: '준서', text: '뿌듯해요', tone: 1 }], ending: '돌봄을 칭찬하는 말이 놀림을 멈췄어요.' },
                    { id: 'join', text: '같이 놀린다', result: '준서가 다음엔 돕지 않겠다고 했어요.', impact: [{ who: '준서', text: '속상해요', tone: -1 }], why: '돕는 친구를 놀리면 아무도 돕지 않게 돼요.' },
                    { id: 'quiet', text: '못 들은 척한다', result: '준서는 혼자 놀림을 들었어요.', impact: [{ who: '준서', text: '외로워요', tone: 0 }], why: '칭찬 한마디가 친구를 지켜요.' },
                  ] } },
                { id: 'leave', text: '"그럼 여자애가 데려가"', result: '이솔이는 한참 기다렸어요.', impact: [{ who: '이솔', text: '아파요', tone: -1 }], why: '돌봄은 성별과 상관없이 먼저 본 사람이 해요.' },
                { id: 'watch', text: '구경만 한다', result: '이솔이가 혼자 일어났어요.', impact: [{ who: '이솔', text: '서러워요', tone: -1 }] },
              ] }, [['help', 'praise']],
            [{ id: 'anyone', text: '누구든 아픈 친구를 도울 수 있어서' }, { id: 'cheer', text: '칭찬하면 돌봄이 늘어서' }, { id: 'boy', text: '남자는 돌봄을 안 해서', why: '돌봄은 성별과 상관없이 모두 해요.' }], ['anyone', 'cheer'], 0.25),
            DIL('동생 돌보기를 한 사람에게 맡겨요.', {
              text: '친척 모임에서 어른이 "누나니까 네가 동생 봐"라고 해요. 사촌 형은 게임만 해요.', motif: 'house',
              choices: [
                { id: 'together', text: '"형이랑 같이 볼게요"', result: '사촌 형도 함께 동생과 놀아 주었어요.', ending: '함께 돌보자고 말해서 돌봄을 나눴어요.', next: {
                  text: '사촌 형이 "난 남자라 아기 못 봐"라고 해요.', choices: [
                    { id: 'show', text: '"이렇게 놀아 주면 돼" 알려 준다', result: '형이 동생과 블록 쌓기를 했어요.', impact: [{ who: '사촌 형', text: '할 수 있게 됐어요', tone: 1 }], ending: '알려 주면 누구나 돌볼 수 있어요.' },
                    { id: 'alone', text: '"그럼 내가 다 할게"', result: '혼자 동생을 보느라 지쳤어요.', impact: [{ who: '나', text: '지쳐요', tone: -1 }], why: '혼자 다 하지 않고 함께 나눠요.' },
                    { id: 'yell', text: '"형은 맨날 게임만 해!" 소리친다', result: '다툼이 났어요.', impact: [{ who: '모두', text: '속상해요', tone: -1 }], why: '소리치기보다 함께하자고 말해요.' },
                  ] } },
                { id: 'obey', text: '말없이 혼자 동생을 본다', result: '모임 내내 혼자 동생을 봤어요.', impact: [{ who: '나', text: '서운해요', tone: -1 }], why: '돌봄은 함께 나누자고 말해도 돼요.' },
                { id: 'refuse', text: '"싫어요" 하고 나간다', result: '동생이 혼자 울었어요.', impact: [{ who: '동생', text: '외로워요', tone: -1 }], why: '함께 나누자고 제안해 봐요.' },
              ] }, [['together', 'show']],
            [{ id: 'share', text: '돌봄은 나눌 수 있어서' }, { id: 'nogender', text: '성별로 돌봄을 정하지 않아서' }, { id: 'older', text: '누나니까 해야 해서', why: '돌봄은 성별이나 누나·형으로 정하지 않고 함께 나눠요.' }], ['share', 'nogender'], 0.3, { conclude: '돌봄은 성별로 정하지 않아요. 돌아가며, 함께, 배우면서 나누면 누구나 할 수 있어요.' }),
          ],
        },
        worksheet: {
          items: [
            { type: 'choice', prompt: '"이런 건 여자애들이 해"라는 말에 알맞은 대답은?', options: ['"돌아가며 같이 하자"', '"맞아, 여자가 해"', '"아무도 안 해"'], answer: '"돌아가며 같이 하자"' },
            { type: 'short', prompt: '내가 할 수 있는 돌봄 하나를 써요.' },
          ],
        },
        notes: '인물은 모두 가명의 가상 인물이다. 학생 집의 돌봄 나눔을 묻지 않는다.',
      }),
      C({
        id: 'gender.e34.care-for-all.wrap.care-coupon', type: 'wrap', title: '"내가 할게요" 돌봄 쿠폰',
        method: '돌봄 쿠폰 만들기', tool: 'collage', minutes: 6,
        levels: { easy: '쿠폰 1장을 조각 2개 이상으로 꾸미고 점검 2칸에 표시한다.', base: '쿠폰 2장 몫으로 조각 4개 이상을 꾸미고 점검 3칸에 표시한다.', challenge: '조각 5개 이상으로 꾸미고, 쿠폰마다 할 일을 아래 종이에 써 붙인 뒤 점검 4칸에 표시한다.' },
        wrap: {
          teacher: '"가족에게 줄 \'내가 할게요\' 돌봄 쿠폰을 만들어 볼까요?" 색종이 조각으로 쿠폰을 꾸미고, 할 일(물 떠 오기·책 읽어 드리기 등)은 쿠폰 아래 종이에 쓰게 한다. 줄 사람은 보호자·할머니·동생·반려동물 누구든 괜찮다고 말해 준다. 어린이도 돌봄을 받기만 하지 않고 줄 수 있다는 것을 마무리로 말한다.',
          exitTicket: [
            COL('색종이 조각으로 "내가 할게요" 돌봄 쿠폰을 꾸며요.', ['쿠폰을 꾸몄어요', '할 일을 정했어요', '쿠폰을 두 장 만들었어요', '할 일을 써 붙였어요'], 2, 4, 5),
            { type: 'choice', prompt: '돌봄에 대한 바른 생각은?', options: ['어린이도 돌봄을 줄 수 있어요', '어린이는 받기만 해요', '돌봄은 여자 일이에요'], answer: 0, difficulty: 0.1, explain: '돌봄은 성별·나이와 상관없이 모두의 일이에요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '돌봄은 모두의 일',
          items: [
            { type: 'short', prompt: '내 돌봄 쿠폰에 쓴 할 일을 써요.' },
            { type: 'check', prompt: '어린이가 할 수 있는 돌봄에 표시해요.', options: ['물 떠 오기', '책 읽어 드리기', '혼자 약 고르기'] },
          ],
          easy: { note: '나도 돌볼 수 있어요.', items: [{ type: 'choice', prompt: '돌봄은 누가 해요?', options: ['모두', '여자만'], answer: '모두' }] },
        },
        notes: '쿠폰을 누구에게 줄지는 학생이 정하고 발표하게 하지 않는다.',
      }),
      C({
        id: 'gender.e34.care-for-all.wrap.care-pattern', type: 'wrap', title: '돌아가며 돌보기 규칙',
        method: '돌아가며 돌보기 규칙', tool: 'pattern', minutes: 6,
        levels: { easy: '세 사람이 돌아가며 돌보는 줄에서 빈칸 1개를 채운다.', base: '빈칸 2개를 채운다.', challenge: '세 사람 이름 조각으로 돌아가며 돌보는 새 규칙 줄을 만든다(같은 차례가 두 번 이상 되풀이).' },
        wrap: {
          teacher: '"하린이네는 할머니 돌봄을 고모 → 형 → 하린 차례로 돌아가며 맡기로 했어요. 다음 차례는 누구일까요?" 규칙 줄을 함께 소리 내어 읽고 빈칸을 채운다. 빈칸에 늘 고모를 넣는 학생에게 "그러면 고모가 또 혼자 지치지 않을까요?"라고 되묻는다. 도전 단계에서는 새 돌봄 규칙을 만들어 보게 한다. 돌아가며 맡으면 돌봄이 한 사람에게 몰리지 않는다는 것을 마무리로 말한다.',
          exitTicket: [
            { type: 'tool', tool: 'pattern', prompt: '돌아가며 돌보는 차례에 맞게 빈칸을 채워요.', options: { mode: 'fill', seq: ['고모', '형', '하린', '고모', null, '하린', '고모', null, '하린'] }, target: { fill: ['형', '형'] }, difficulty: 0.15,
              levels: {
                easy: { prompt: '돌아가며 돌보는 차례에 맞게 빈칸 1개를 채워요.', toolOptions: { seq: ['고모', '형', '하린', '고모', null, '하린'] }, target: { fill: ['형'] } },
                challenge: { prompt: '세 사람이 돌아가며 돌보는 새 규칙 줄을 만들어요.', toolOptions: { mode: 'make', palette: ['고모', '형', '하린'], length: 9 }, target: { rule: 'repeat', period: 3, minRepeats: 2, uses: 3 } },
              } },
            { type: 'choice', prompt: '돌봄을 돌아가며 맡으면?', options: ['한 사람이 지치지 않아요', '한 사람이 다 해요', '아무도 안 해요'], answer: 0, difficulty: 0.1, explain: '돌아가며 맡으면 모두 함께 돌봐요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '돌아가며 돌보기',
          items: [
            { type: 'blank', prompt: '빈칸에 들어갈 사람을 써요.', text: '고모 → 형 → 하린 → 고모 → ___', answer: '형' },
            { type: 'short', prompt: '우리 반에서 돌아가며 돌볼 수 있는 것(화분·물고기 등)을 써요.' },
          ],
          easy: { note: '돌봄도 차례대로 나눠요.', items: [{ type: 'choice', prompt: '돌봄은 한 사람만 해요?', options: ['아니에요', '맞아요'], answer: '아니에요' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 4학년 · 가정폭력의 여러 모습과 도움 (가정폭력방지법 제4조의3 예방교육 — research-mandatory §1, 아동안전교육 영역 §2)
  // ======================================================================================================
  {
    const C = T('dv-many-forms', 4);
    const TOWN = {
      title: '우리 동네 도움 지도(가상)', grid: [6, 4],
      regions: [
        { name: '학교', cells: [[0, 0], [1, 0], [0, 1], [1, 1]] }, { name: '주민센터', cells: [[2, 0], [3, 0]] }, { name: '지구대', cells: [[4, 0], [5, 0]] },
        { name: '큰길', cells: [[2, 1], [3, 1], [4, 1], [5, 1]] }, { name: '아파트', cells: [[0, 2], [1, 2], [2, 2]] }, { name: '공원', cells: [[3, 2], [4, 2], [5, 2]] },
        { name: '가게', cells: [[0, 3], [1, 3], [2, 3]] }, { name: '빈 주차장', cells: [[3, 3], [4, 3], [5, 3]] },
      ],
    };
    const PINQ = (prompt, region, why, d) => {
      const it = PIN(TOWN, prompt, region, why, d);
      it.levels.easy = { toolOptions: { readout: true } };
      return EX('map', it);
    };
    M.push(
      C({
        id: 'gender.e34.dv-many-forms.intro.forms-mindmap', type: 'intro', title: '가족 사이 폭력의 여러 모습',
        method: '가정폭력 여러 모습 모으기', tool: 'mindmap', minutes: 6,
        levels: { easy: '예시 카드 2장을 몸·말 가지에 함께 넣는다.', base: '카드 4장을 몸·말·겁주기·돌보지 않기 가지에 넣는다.', challenge: '가지마다 예시를 하나씩 더 말해 본다(교사 진행).' },
        intro: {
          teacher: '"때리지 않으면 폭력이 아닐까요?" 시연 단추로 예시 카드가 몸·말·겁주기·돌보지 않기 가지에 놓이는 것을 보인다. "말로만 하는 건 괜찮아요"라는 말이 나오면 "심한 욕이나 겁주는 말을 계속 들으면 마음이 다치지 않을까요?"라고 되묻는다. 가족 사이에도 때리기, 심한 욕, 겁주기, 돌보지 않기는 모두 폭력이고, 그것은 어린이 잘못이 아니라는 것을 밝힌다.',
          student: '"가족 사이 폭력" 가지(몸·말·겁주기·돌보지 않기)에 예시 카드를 넣어요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '가족 사이 폭력', slots: ['몸', '말', '겁주기', '돌보지 않기'], cards: ['세게 때리기', '심한 욕하기', '물건 던지며 위협', '며칠 밥 안 주기'], shuffle: false }, sequence: [{ sort: { 몸: ['세게 때리기'], 말: ['심한 욕하기'] } }, { sort: { 몸: ['세게 때리기'], 말: ['심한 욕하기'], 겁주기: ['물건 던지며 위협'], '돌보지 않기': ['며칠 밥 안 주기'] } }] },
          art: { draw: 'a calm paper house in the middle with four small paper signposts around it, each showing a simple icon: a hand, a speech bubble, a lightning bolt and an empty bowl', banner: '폭력은 여러 모습이에요', extra: [{ motif: 'house', x: 300, y: 96 }] },
        },
        notes: '예시는 카드 한 줄로만 다루고 장면을 자세히 묘사하지 않는다. 학생 집에서 이런 일이 있는지 묻지 않는다.',
      }),
      C({
        id: 'gender.e34.dv-many-forms.intro.safe-home-feel', type: 'intro', title: '안전한 집에 필요한 마음',
        method: '안전한 집에 필요한 마음', tool: 'emotion', minutes: 6,
        levels: { easy: '장면 2개(함께 웃는 저녁·큰소리로 겁주는 집)에 마음 카드를 함께 짝 짓는다.', base: '장면 4개(잘못을 말로 알려 줌·밥을 챙겨 줌 더함)에 마음 카드를 짝 짓는다.', challenge: '안전한 집에 필요한 것을 말해 본다(교사 진행).' },
        intro: {
          teacher: '"가상의 두 집이에요. 한 집은 함께 웃으며 저녁을 먹고, 한 집은 큰소리로 겁을 줘요. 그 집 어린이의 마음은 어떨까요?" 시연 단추로 장면마다 마음 카드가 놓이는 것을 보인다. "잘못하면 겁줘도 돼요"라는 말이 나오면 "잘못은 말로 알려 줄 수 있어요. 겁을 주면 어린이 마음은 어떨까요?"라고 되묻는다. 누구나 집에서 편안하고 안전할 권리가 있다는 것을 밝힌다.',
          student: '가상의 집 장면을 보고 그 집 어린이의 마음 카드를 짝 지어요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'dinner', label: '함께 웃는 저녁' }, { id: 'scare', label: '큰소리로 겁주는 집' }, { id: 'explain', label: '잘못을 말로 알려 줌' }, { id: 'meal', label: '밥을 챙겨 줌' }], cards: ['편안함', '무서움', '고마움', '기쁨'], shuffle: false }, sequence: [{ match: { dinner: '편안함', scare: '무서움' } }, { match: { dinner: '편안함', scare: '무서움', explain: '고마움', meal: '기쁨' } }] },
          art: { draw: 'two paper houses side by side: the left one glowing warmly with a paper family eating together under a sun, the right one with a small storm cloud above and a paper child hiding behind a door', banner: '안전한 집은 어떤 집?', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
      }),
      C({
        id: 'gender.e34.dv-many-forms.activity.is-it-violence', type: 'activity', title: '폭력일까, 아닐까',
        method: '폭력인지 상황 판단', tool: 'sortboard', minutes: 14,
        levels: { easy: '문항마다 카드 4장을 바구니 2개에 나누고, 틀리면 바로 되돌아온다.', base: '문항마다 카드 6장을 나눈 뒤 이유를 짝과 말한다.', challenge: '헷갈리는 카드(때리지 않고 늘 겁주기 등) 2장이 더해진 8장을 나누고, 헷갈리는 카드를 토의로 정한다.' },
        activity: {
          title: '폭력일까, 아닐까', tool: 'sortboard',
          teacher: '"이 어른의 행동은 어린이를 아끼는 것일까요, 폭력일까요?" 카드를 넣을 때마다 짝에게 이유를 말하게 한다. "때리지 않았으니 괜찮아요"라는 말이 나오면 "물건을 던지며 겁을 주면 어린이 마음은 어떨까요? 몸만 다치는 게 폭력일까요?"라고 되묻는다. "가족 일에 남이 끼면 안 돼요"라는 말에는 "어린이가 다치거나 무서운 일은 어른들이 함께 도와야 하는 일이에요"라고 말한다. 폭력은 어떤 까닭이 있어도 어린이 잘못이 아니라는 것을 짚는다.',
          task: '가상 장면 속 어른의 행동 카드를 괜찮아요와 폭력이에요 바구니에 나누어요.', levels: BOXLV,
          items: [
            BOX('어른의 행동을 나누어요.', ['괜찮아요', '폭력이에요'], [['숙제하라고 타이르기', '잘못을 말로 알려 줌', '꼭 안아 주기'], ['밥을 며칠 안 주기', '물건 던지며 겁주기', '심한 욕하기']], [[0, 2], [1, 2]], [['위험할 때 팔 잡아끌기'], ['때리지 않고 늘 겁주기']], 0.15),
            BOX('다른 장면도 나누어요.', ['괜찮아요', '폭력이에요'], [['아플 때 병원 가기', '게임 시간 정하기', '"사랑해" 말하기'], ['세게 밀치기', '"넌 필요 없어"', '아파도 내버려 두기']], [[0, 2], [1, 2]], [['안 된다고 말하기'], ['형제와 늘 비교']], 0.2),
            BOX('폭력에 대한 생각을 나누어요.', ['맞는 생각', '틀린 생각'], [['겁주기도 폭력이에요', '어린이 잘못이 아니에요', '도움을 청해도 돼요'], ['때려야만 폭력이에요', '가족 일엔 끼면 안 돼요', '참으면 괜찮아져요']], [[0, 2], [1, 2]], [['알리면 가족을 도와요'], ['말로 하면 괜찮아요']], 0.25, { conclude: '때리기만 폭력이 아니에요. 심한 욕·겁주기·돌보지 않기도 폭력이고, 어린이 잘못이 아니에요. 도움을 청해도 돼요.' }),
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '가족 사이 폭력에 해당하는 것에 표시해요.', options: ['물건을 던지며 겁주기', '심한 욕하기', '숙제하라고 타이르기', '며칠 밥 안 주기'] }] },
        notes: '카드 장면은 모두 가상의 어른 이야기다. 수업 중 걱정되는 말을 들으면 그 자리에서 캐묻지 말고 수업 뒤 조용히 듣고 학교의 신고 절차를 따른다.',
      }),
      C({
        id: 'gender.e34.dv-many-forms.activity.help-steps', type: 'activity', title: '가정폭력 도움 청하는 차례',
        method: '도움 청하는 차례', tool: 'story', minutes: 13,
        levels: { easy: '장면 2장을 차례대로 놓고(놓으면 바로 맞는지 알림), 말풍선 1칸을 채운다.', base: '장면 3장을 차례대로 놓고, 말풍선 2칸을 채운다.', challenge: '틀린 장면 한 장을 빼고 3장을 놓으며, 말풍선 3칸에 할 말을 넣는다.' },
        activity: {
          title: '가정폭력 도움 청하는 차례', tool: 'story',
          teacher: '"가족 사이에 무서운 일이 생기면 어떤 차례로 도움을 청할까요?" 장면을 놓은 뒤 소리 내어 읽는다. "혼자 해결할래요" 카드를 넣으려는 학생에게 "어린이가 혼자 감당하기 어려운 일이에요. 누가 도울 수 있을까요?"라고 되묻는다. 안전한 곳으로 피하고, 믿는 어른께 말하고, 학교가 알려 준 도움 번호로 어른과 함께 연락하면 되고, 알리는 것은 가족을 돕는 일이라는 것을 짚는다.',
          task: '가족 사이에 무서운 일이 생겼을 때 도움을 청하는 장면을 차례대로 놓고 말풍선을 채워요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORD('가족 사이에 무서운 일이 생겼을 때 차례로 놓아요.', { title: '도움 청하는 차례' }, [{ id: 'safe', text: '안전한 곳 가기' }, { id: 'adult', text: '믿는 어른께 말하기' }, { id: 'call', text: '도움 번호로 연락' }], [0, 1], { id: 'solo', text: '혼자 해결하기', why: '혼자 감당하지 않고 어른과 함께해요.' }, 0.15),
            ORD('도움 번호로 알릴 때 차례로 놓아요.', { title: '번호로 알릴 때' }, [{ id: 'with', text: '어른과 함께 걸기' }, { id: 'where', text: '있는 곳 말하기' }, { id: 'follow', text: '안내 잘 듣기' }], [0, 2], { id: 'hang', text: '무서워 바로 끊기', why: '끊지 않고 안내를 들어요.' }, 0.2),
            FILL('도움을 청하는 말을 말풍선에 넣어요.', ['하린', '하린', '하린'], [['"선생님, 집에서 ___ 일이 있어요."', '겁나는'], ['"___ 주실 수 있어요?"', '도와'], ['"말해도 ___ 거죠?"', '괜찮은']], ['별일 없는', '비밀로', '참을게요'], 0.25, { conclude: '안전한 곳으로 피하고, 믿는 어른께 말하고, 어른과 함께 도움 번호로 알려요. 알리는 것은 가족을 돕는 일이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: `${HELPNO}를 선생님과 함께 써요.` }] },
        notes: `"도움 번호"는 체계도에 번호가 없어 화면에 쓰지 않았다 — 교사가 학교가 확인한 신고·상담 번호를 알려 준다(${HELPNO}). "있는 곳 말하기"의 순서는 학교가 확인한 안내에 맞춘다.`,
      }),
      C({
        id: 'gender.e34.dv-many-forms.activity.friend-path', type: 'activity', title: '갈림길: 친구가 털어놓을 때',
        method: '친구를 돕는 갈림길 이어 가기', tool: 'dilemma', minutes: 25,
        levels: { easy: '장면마다 갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '첫 장면은 갈림 3번(함께 가기 → 어디로 → 친구에게 할 말), 나머지는 갈림 2번씩 고르며 결과를 따라간다.', challenge: '끝 장면에서 근거 카드 3장 가운데 알맞은 2장을 고른다.' },
        activity: {
          title: '갈림길: 친구가 털어놓을 때', tool: 'dilemma',
          teacher: '"친구가 \'집에서 자꾸 겁을 줘\'라고 털어놓았어요. 어떻게 할까요?" 결과를 소리 내어 읽고 다음 장면에서 다시 고른다. 비밀을 지키는 길을 고른 학생을 나무라지 않고 "친구와의 약속을 아끼는 마음이 멋져요. 그런데 이 비밀이 친구를 지켜 줄까요?"라고 되묻는다. "가족 일에 끼면 안 돼"라는 말에는 "어린이가 무서운 일은 어른들이 함께 돕는 일이에요"라고 말한다. 캐묻지 않고 함께 믿는 어른께 가는 것이 우리 몫이고, 활동 끝에 학교가 알려 준 신고·상담 번호를 함께 읽어 본다.',
          task: '가족 일로 무서워하는 친구의 장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('친구가 집에서 겁을 준다고 해요.', {
              text: '가람이가 "집에서 자꾸 겁을 줘서 무서워. 비밀이야"라고 해요.', motif: 'cloud',
              choices: [
                { id: 'go', text: '"같이 선생님께 가자"', result: '가람이가 잠깐 망설이다 따라나섰어요.', ending: '함께 가자고 한 것이 가람이를 지키는 첫걸음이에요.', next: {
                  text: '어디로 갈까요?', choices: [
                    { id: 'counsel', text: '상담실로 간다', result: '상담 선생님이 가람이 이야기를 들어 주셨어요.', next: {
                      text: '가람이가 "내가 말해서 우리 집에 큰일 나면 어떡해?"라고 해요.', choices: [
                        { id: 'brave', text: '"말한 건 용기 있는 일이야"', result: '가람이가 조금 마음을 놓았어요.', impact: [{ who: '가람', text: '힘이 나요', tone: 1 }], ending: '용기를 칭찬해 준 말이 가람이에게 힘이 됐어요.' },
                        { id: 'regret', text: '"괜히 말했나 봐"', result: '가람이가 더 불안해했어요.', impact: [{ who: '가람', text: '불안해요', tone: -1 }], why: '알린 것은 잘한 일이에요.' },
                      ] } },
                    { id: 'nurse', text: '보건실로 간다', result: '보건 선생님이 들어 주시고 상담 선생님과 함께 도우셨어요.', impact: [{ who: '가람', text: '마음이 놓였어요', tone: 1 }], ending: '믿는 어른께 알려서 가람이가 도움을 받았어요.' },
                    { id: 'friends', text: '친구들에게 먼저 말한다', result: '이야기가 퍼져 가람이가 힘들어했어요.', impact: [{ who: '가람', text: '창피해요', tone: -1 }], why: '여기저기 말하지 않고 믿는 어른께만 알려요.' },
                  ] } },
                { id: 'secret', text: '"비밀 지킬게"', result: '가람이는 그 뒤로도 혼자 무서워했어요.', impact: [{ who: '가람', text: '도움을 못 받아요', tone: -1 }], why: '누가 다칠 수 있는 비밀은 믿는 어른과 나눠요.' },
                { id: 'dig', text: '"무슨 일인데? 자세히 말해 봐"', result: '가람이가 입을 다물었어요.', impact: [{ who: '가람', text: '불편해요', tone: -1 }], why: '캐묻지 않고 함께 어른께 가요.' },
              ] }, [['go', 'counsel', 'brave'], ['go', 'nurse']],
            [{ id: 'safe', text: '가람이가 안전해야 해서' }, { id: 'adult', text: '어른은 도울 방법을 알아서' }, { id: 'promise', text: '비밀은 무조건 지켜야 해서', why: '누가 다칠 수 있는 비밀은 지키지 않아도 돼요.' }], ['safe', 'adult'], 0.2),
            DIL('친구가 가족 일이라 끼면 안 된대요.', {
              text: '가람이가 "가족 일이라 남이 끼면 안 된대"라고 해요.', motif: 'house',
              choices: [
                { id: 'help', text: '"어린이가 무서운 일은 어른이 도와도 돼"', result: '가람이가 "정말?" 하고 물었어요.', ending: '도움을 청해도 된다는 것을 알려 줬어요.', next: {
                  text: '가람이가 "누구한테 말하지?"라고 해요.', choices: [
                    { id: 'teacher', text: '"담임 선생님께 같이 가자"', result: '선생님이 차분히 들어 주셨어요.', impact: [{ who: '가람', text: '든든해요', tone: 1 }], ending: '믿는 어른께 함께 가서 가람이가 도움을 받았어요.' },
                    { id: 'myself', text: '"내가 너희 집 어른께 말할게"', result: '혼자 가려다 위험할 뻔했어요.', impact: [{ who: '나', text: '위험할 수 있어요', tone: -1 }], why: '어린이가 직접 나서지 않고 믿는 어른께 알려요.' },
                    { id: 'wait', text: '"좀 더 지켜보자"', result: '가람이는 계속 무서워했어요.', impact: [{ who: '가람', text: '힘들어요', tone: -1 }], why: '미루지 말고 믿는 어른께 알려요.' },
                  ] } },
                { id: 'agree', text: '"그럼 끼지 말자"', result: '가람이는 도움을 받지 못했어요.', impact: [{ who: '가람', text: '혼자 견뎌요', tone: -1 }], why: '어린이가 무서운 일은 어른들이 함께 도와야 해요.' },
                { id: 'blame', text: '"너희 가족 무섭다"', result: '가람이가 고개를 숙였어요.', impact: [{ who: '가람', text: '창피해요', tone: -1 }], why: '가족을 탓하는 말 대신 함께 어른께 가요.' },
              ] }, [['help', 'teacher']],
            [{ id: 'together', text: '어른들이 함께 도와야 해서' }, { id: 'family', text: '알리면 가족도 도울 수 있어서' }, { id: 'private', text: '가족 일은 비밀이라서', why: '어린이가 무서운 일은 비밀로 두지 않아요.' }], ['together', 'family'], 0.25),
            DIL('친구가 맞지는 않으니 괜찮대요.', {
              text: '가람이가 "때리지는 않으니까 괜찮아"라고 해요. 그런데 표정이 어두워요.', motif: 'cloud',
              choices: [
                { id: 'notok', text: '"겁주는 것도 폭력이야. 혼자 참지 마"', result: '가람이가 눈물을 글썽였어요.', ending: '겁주기도 폭력이라는 것을 알려 줬어요.', next: {
                  text: '가람이가 "그럼 어떻게 해?"라고 물어요.', choices: [
                    { id: 'adult', text: '"믿는 어른께 같이 말하자"', result: '가람이가 상담 선생님께 말하기로 했어요.', impact: [{ who: '가람', text: '방법을 알았어요', tone: 1 }], ending: '믿는 어른께 알리는 길을 함께 찾았어요.' },
                    { id: 'forget', text: '"잊고 재밌게 놀자"', result: '잠깐 웃었지만 걱정은 그대로예요.', impact: [{ who: '가람', text: '여전히 무서워요', tone: 0 }], why: '잊는 것보다 어른께 알리는 것이 도와요.' },
                    { id: 'run', text: '"집에서 나와 버려"', result: '가람이가 더 겁을 먹었어요.', impact: [{ who: '가람', text: '위험할 수 있어요', tone: -1 }], why: '혼자 나가지 않고 믿는 어른께 알려요.' },
                  ] } },
                { id: 'yes', text: '"맞아, 안 때리면 괜찮아"', result: '가람이는 계속 혼자 참았어요.', impact: [{ who: '가람', text: '힘들어요', tone: -1 }], why: '때리지 않아도 겁주기는 폭력이에요.' },
                { id: 'change', text: '다른 이야기를 한다', result: '가람이는 다시 말을 꺼내지 못했어요.', impact: [{ who: '가람', text: '외로워요', tone: -1 }] },
              ] }, [['notok', 'adult']],
            [{ id: 'scare', text: '겁주기도 폭력이라서' }, { id: 'right', text: '누구나 안전할 권리가 있어서' }, { id: 'nohit', text: '맞지 않으면 괜찮아서', why: '때리지 않아도 겁주기·심한 욕은 폭력이에요.' }], ['scare', 'right'], 0.3, { conclude: '때리지 않아도 겁주기는 폭력이에요. 비밀로 두지 않고 함께 믿는 어른께 가요. 말한 것은 용기 있는 일이에요.' }),
          ],
        },
        worksheet: {
          items: [
            { type: 'choice', prompt: '친구가 "때리지는 않으니 괜찮아"라고 할 때 바른 생각은?', options: ['겁주기도 폭력일 수 있어요', '맞지 않으면 괜찮아요', '가족 일이니 모른 척해요'], answer: '겁주기도 폭력일 수 있어요' },
            { type: 'short', prompt: `${HELPNO}를 선생님과 함께 써요.` },
          ],
        },
        notes: '가람이가 겪는 일의 내용은 쓰지 않았다. 가람이는 가명의 가상 인물이다. 수업 중 걱정되는 말을 들으면 수업 뒤 조용히 듣고 학교의 신고 절차를 따른다.',
      }),
      C({
        id: 'gender.e34.dv-many-forms.wrap.help-map', type: 'wrap', title: '우리 동네 도움 지도',
        method: '우리 동네 도움 지도', tool: 'map', minutes: 6,
        levels: { easy: '핀을 꽂으면 그 칸의 이름이 바로 보인다(학교·지구대 2곳).', base: '이름 표시 없이 학교·지구대에 핀을 꽂고, 주민센터는 고르기 문항으로 답한다.', challenge: '핀을 꽂은 뒤 그곳에서 할 말도 보기에서 고른다.' },
        wrap: {
          teacher: '"가족 사이에 무서운 일이 있을 때 동네 어디에서 도움을 받을 수 있을까요?" 핀을 꽂기 전에 아파트에서 그곳까지 가는 길을 손가락으로 따라가 보게 한다. 빈 주차장에 핀을 꽂는 학생에게 "그곳에서 누가 도와줄 수 있을까요?"라고 되묻는다. 학교의 선생님, 지구대의 경찰관, 동네 일을 돕는 주민센터가 있고, 학교가 알려 준 신고·상담 번호도 도움 길이라는 것을 마무리로 말한다.',
          exitTicket: [
            PINQ('낮에 믿는 선생님께 말하러 갈 곳에 핀을 꽂아요.', '학교', { q: '이곳에서 할 말은?', choices: ['"도와주세요, 집이 무서워요"', '"아무 일 없어요"', '말하지 않기'], answer: 0 }, 0.15),
            PINQ('지금 위험해서 경찰이 필요할 때 갈 곳에 핀을 꽂아요.', '지구대', { q: '이곳에서 할 말은?', choices: ['"도와주세요, 위험해요"', '"그냥 왔어요"', '말하지 않기'], answer: 0 }, 0.2),
            { type: 'choice', prompt: '동네 일을 돕는 어른들이 일하는 곳은?', options: ['주민센터', '빈 주차장', '가게 창고'], answer: 0, difficulty: 0.1, explain: '주민센터에도 도움을 청할 수 있어요. 어떻게 도와주는지는 선생님이 알려 주세요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '우리 동네 도움 지도',
          items: [
            { type: 'table', prompt: '곳마다 만날 어른을 써요.', columns: ['곳', '만날 어른'], cells: [['학교', ''], ['지구대', '']], answer: '선생님, 경찰관' },
            { type: 'short', prompt: `${HELPNO}를 선생님과 함께 써요.` },
          ],
          easy: { note: '도와줄 어른은 동네에도 있어요.', items: [{ type: 'choice', prompt: '무서운 일이 있으면?', options: ['어른께 알려요', '혼자 참아요'], answer: '어른께 알려요' }] },
        },
        notes: '지도는 가상의 동네다. 우리 학교 둘레의 실제 지구대·주민센터 위치와 주민센터가 어떻게 돕는지는 교사가 확인해 말로 알려 준다.',
      }),
      C({
        id: 'gender.e34.dv-many-forms.wrap.safe-check', type: 'wrap', title: '안전 약속 스스로 점검',
        method: '안전 약속 스스로 점검', tool: 'timer', minutes: 6,
        levels: { easy: '점검 2칸(참지 않기·말하기)에 표시한다.', base: '점검 3칸(친구 돕기 더함)에 표시한다.', challenge: '점검 4칸에 표시하고, 한 칸을 예로 짝에게 설명한다.' },
        wrap: {
          teacher: '"오늘 배운 안전 약속을 스스로 점검해 볼까요? 참지 않기, 말하기, 친구 돕기." 칸마다 읽어 주고 스스로 표시하게 한다. "말하기가 무서워요"라는 학생에게 "무서운 마음은 괜찮아요. 선생님께 \'이야기할 게 있어요\' 한마디로 시작해도 돼요"라고 말해 준다. 가족 사이 폭력은 어린이 잘못이 아니고, 알리는 것은 나와 가족을 돕는 일이라는 것을 마무리로 말한다.',
          exitTicket: [
            SELF('안전 약속 스스로 점검', ['참지 않아요', '믿는 어른께 말해요', '친구를 도와요', '예로 설명했어요']),
            { type: 'choice', prompt: '가족 사이 폭력에 대한 바른 생각은?', options: ['어린이 잘못이 아니에요', '참으면 괜찮아져요', '가족 일이라 끼면 안 돼요'], answer: 0, difficulty: 0.1, explain: '어린이 잘못이 아니에요. 도움을 청해도 돼요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '안전 약속',
          items: [
            { type: 'check', prompt: '가족 사이 폭력에 해당하는 것에 표시해요.', options: ['겁주기', '심한 욕', '돌보지 않기', '잘못을 말로 알려 주기'] },
            { type: 'short', prompt: '무서운 일이 있을 때 이야기할 믿는 어른을 써요.' },
          ],
          easy: { note: '말하는 것은 용기 있는 일이에요.', items: [{ type: 'choice', prompt: '무서운 일은 누구 잘못?', options: ['어린이 잘못이 아니에요', '어린이 잘못이에요'], answer: '어린이 잘못이 아니에요' }] },
        },
      }),
    );
  }


  PaperLessons.registerModules(M);
})();
