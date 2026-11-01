/* 창체 법정교육 교육활동 존중(침해 예방) — 중학교(7~9학년) 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/mandatory.json 의 teach 중.
 * 근거: research-mandatory §1 교육활동 침해행위 예방교육 — 교원지위법 제24조, 시행령 제21조, 초·중·고 연 1회 이상, 의무(학생 활동 중심 예방교육).
 *   근거 파일에는 이 한 줄만 있다. 침해 유형 예시·법 취지 설명·의견 전달 방법은 교육 일반 지식이라 아래 '사람 확인'에 모은다.
 *   법이 정한 조치·처분·징계 이름은 근거에 없으므로 쓰지 않는다. 학교마다 다른 절차는 '[학교가 확인해 넣는 …]' 자리 표시로 둔다.
 * 중 기준: 사례 분석·딜레마 토의·자료 해석·짧은 글쓰기(기준표 자기 평가)·역할극 대본·캠페인.
 *   장면·인물(가명 한두 글자)·그래프 수치는 모두 지어낸 가상이다. 특정 교사·학생을 탓하지 않고, 학생에게 겪은 일이나 본 일을 묻지 않는다.
 *   선생님은 '가상의 ○○ 선생님'(과목 이름)으로만 부른다.
 * 주제 4개 × 8모듈 = 32모듈. 7학년 가려내기, 8학년 촬영·게시, 9학년 불만 전하기, 7~9학년 또래 문화.
 *
 * 사람 확인: 근거 파일에 없는 일반 사실·문장(모듈 id — 확인할 곳: 교육부 「교육활동 보호 매뉴얼」·시도교육청 교권보호(교육활동보호)센터 안내)
 *   - teach.m.tell-apart.*: 교육활동 침해의 예(반복된 수업 방해·모욕·욕설·흉내 영상 게시)와 존중하는 행동(질문·예의 있는 의견)의 구분 /
 *     예방교육의 취지를 '학생의 배울 권리·선생님의 교육활동·학교 공동체를 함께 지킨다'로 설명한 문장 / 판단 근거 '영향·반복·의도' / '장난이었다'는 말이 영향을 없애지 않는다
 *   - teach.m.filming.*: 허락 없는 촬영·게시와 조롱 게시가 교육활동 침해가 될 수 있다는 문장 / 게시물은 지워도 사본·캡처로 남을 수 있다 /
 *     얼굴을 가려도 목소리·교실 모습으로 알아볼 수 있다 / 게시 전 점검(허락·상처 가능성·퍼짐·다른 선택)
 *   - teach.m.voice-complaint.*: 의견 전달 다섯 단계(사실 정리→시간 정하기→나-전달법→대안 제시→결과 확인) / 정당한 의견과 공격적 표현을 가르는 기준(사실·대상·말투·경로) /
 *     평가 이의는 정해진 절차로 낸다([학교가 확인해 넣는 평가 이의 신청 절차])
 *   - teach.m.peer-culture.*: 주변 또래의 반응(웃음·말림)이 행동이 이어지는지에 영향을 준다는 문장(그래프는 가상) / 말리는 세 방식(직접 말리기·주의 돌리기·나중에 대화하기) /
 *     방관자에서 조력자로(학교폭력 예방 주제를 교육활동 침해에 옮겨 씀) */
(function () {
  const ALL = [];
  const MK = (topic, grades) => (sid, o) => Object.assign({ id: `teach.m.${topic}.${sid}`, schema: 'edu-module.v1', type: sid.split('.')[0], domain: 'teach', band: '중', topic: `teach.m.${topic}`, grades }, o);
  const sid = (s) => (typeof s === 'string' ? s : s.id || s.label);

  // ---- 카드 판 문항 조각: { prompt, toolOptions, target } ----
  const strip = (cards) => cards.map((c) => { const x = Object.assign({}, c); delete x.to; delete x.ok; return x; });
  const SB = (prompt, slots, cards, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'sort', slots, cards: strip(cards) }, opt), target: { sort: Object.fromEntries(slots.map((s) => [sid(s), cards.filter((c) => c.to === sid(s)).map((c) => c.id)])) } });
  // 분류판(sortboard 글 카드 모드) — mode 없이 slots·cards
  const BOX = (prompt, slots, cards, opt) => ({ prompt, toolOptions: Object.assign({ slots, cards: strip(cards) }, opt), target: { sort: Object.fromEntries(slots.map((s) => [sid(s), cards.filter((c) => c.to === sid(s)).map((c) => c.id)])) } });
  const OB = (prompt, cards, opt, trap) => ({ prompt, toolOptions: Object.assign({ mode: 'order', slots: cards.length, cards: [...cards, ...(trap || [])] }, opt), target: { order: cards.map((c) => c.id) } });
  const MB = (prompt, pairs, extra, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'match', slots: pairs.map((p, i) => ({ id: `s${i + 1}`, label: p[0] })), cards: [...pairs.map((p, i) => ({ id: `k${i + 1}`, text: p[1] })), ...(extra || []).map((t, i) => ({ id: `x${i + 1}`, text: t }))] }, opt), target: { match: Object.fromEntries(pairs.map((p, i) => [`s${i + 1}`, `k${i + 1}`])) } });
  // 대본 빈칸: lines [[who, '…___…', 대사 카드]] + 함정 대사
  const FB = (prompt, lines, extra, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'fill', slots: lines.map((p, i) => ({ id: `f${i + 1}`, who: p[0], label: p[1] })), cards: [...lines.map((p, i) => ({ id: `w${i + 1}`, text: p[2] })), ...(extra || []).map((t, i) => ({ id: `y${i + 1}`, text: t }))] }, opt), target: { fill: Object.fromEntries(lines.map((p, i) => [`f${i + 1}`, `w${i + 1}`])) } });
  const PB = (prompt, basket, cards, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'pick', basket, cards: strip(cards) }, opt), target: { pick: cards.filter((c) => c.ok).map((c) => c.id) } });
  const CL = (prompt, title, items, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'checklist', title, items: strip(items) }, opt), target: { checklist: items.filter((c) => c.ok).map((c) => c.id) } });
  const IT = (base, easy, challenge, more) => Object.assign({}, base, { levels: Object.assign({}, easy ? { easy } : {}, challenge ? { challenge } : {}) }, more);
  const pickCards = (cards, ids) => ids.map((i) => cards.find((c) => c.id === i));
  // 가상 자료 그래프(읽기)
  const CH = (type, title, unit, data, more) => Object.assign({ type, mode: 'read', title, unit, data }, more);

  // ---- 갈림길(dilemma): 깊이 3 나무 하나로 쉬움(1단)·기본(2단)·도전(3단) 판 ----
  const cut = (sc, d) => Object.assign({}, sc, { choices: sc.choices.map((c) => {
    const x = Object.assign({}, c); delete x.end;
    if (c.next && d > 1) x.next = cut(c.next, d - 1);
    else { delete x.next; if (c.next) x.ending = c.end || '다음 단계에서 이어지는 장면을 따라가 봐요.'; }
    return x;
  }) });
  const paths = (good, d) => { const out = []; for (const g of good) { const p = g.slice(0, d); if (!out.some((q) => q.join('>') === p.join('>'))) out.push(p); } return out; };
  const DIL = (p, title, tree, good, R, ok, more, extra) => Object.assign({
    prompt: p.base, toolOptions: { title, scene: cut(tree, 2), reasons: R, compare: true }, target: { path: paths(good, 2), reasons: ok, some: true },
    levels: {
      easy: { prompt: p.easy, toolOptions: { scene: cut(tree, 1), reasons: [] }, target: { path: paths(good, 1) } },
      challenge: { prompt: p.challenge, toolOptions: { scene: cut(tree, 3), reasons: [...R, ...((more && more.reasons) || [])] }, target: { path: paths(good, 3), reasons: [...ok, ...((more && more.ok) || [])], some: true } },
    },
  }, extra);
  const MOOD = { type: 'mood', prompt: '오늘 수업을 마친 지금 내 생각과 마음은 어떤가요?' };

  // ==== 7학년 · 교육활동 존중과 침해 가려내기 (teach.m.tell-apart) ====
  {
    const M = MK('tell-apart', [7]);
    const JOKE = [['장난이었다', 52], ['몰랐다', 28], ['미안하다', 20]];
    const FIRST = [
      { id: 'c1', text: '수업 중 매번 큰 소리로 끼어든다', to: '침해' }, { id: 'c2', text: '선생님 말투 흉내 영상을 올린다', to: '침해' },
      { id: 'c3', text: '손을 들고 모르는 것을 질문한다', to: '존중' }, { id: 'c4', text: '평가 의견을 예의 있게 메일로 쓴다', to: '존중' },
      { id: 'c5', text: '선생님께 욕설을 한다', to: '침해' }, { id: 'c6', text: '허락받고 발표 장면을 찍는다', to: '존중' },
      { id: 'c7', text: '쉬는 시간에 선생님 별명을 부른다', to: '판단 보류' }, { id: 'c8', text: '수업 중 한 번 크게 웃는다', to: '판단 보류' }];
    const PURPOSE = [
      { id: 'p1', text: '방해가 줄면 모두가 수업을 듣는다', to: '학생의 배울 권리' }, { id: 'p2', text: '질문할 시간이 지켜진다', to: '학생의 배울 권리' },
      { id: 'p3', text: '선생님이 준비한 수업을 끝까지 한다', to: '선생님의 교육활동' }, { id: 'p4', text: '모욕 없이 가르치고 평가한다', to: '선생님의 교육활동' },
      { id: 'p5', text: '서로 믿는 교실 분위기가 생긴다', to: '학교 공동체' }, { id: 'p6', text: '후배도 같은 약속을 이어받는다', to: '학교 공동체' },
      { id: 't1', text: '선생님 편만 드는 규칙이다' }, { id: 't2', text: '잘못한 학생을 찾아내는 교육이다' }];
    const RD = { text: '국어 시간, 같은 반 도하가 매시간 선생님 설명 중에 큰 소리로 "노잼!" 하고 외쳐 반이 웃는다. 나는 반장이다.', ask: '반장인 나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'laugh', text: '같이 웃고 넘어간다', result: '수업이 또 끊기고 설명이 늦어진다.', impact: [{ who: '반 친구들', text: '설명을 놓친다', tone: -1 }], why: '함께 웃으면 끼어들기가 계속돼도 된다는 신호가 돼요.', ending: '웃고 넘어가자 다음 시간에도 같은 일이 되풀이됐어요.' },
      { id: 'talk', text: '쉬는 시간에 도하에게 따로 말을 건다', result: '도하가 "다들 웃잖아"라며 시큰둥하다.', impact: [{ who: '도하', text: '자기 행동을 처음 돌아본다', tone: 0 }], end: '도하에게 따로 말을 걸었어요.',
        next: { text: '다음 시간에도 도하가 또 외친다. 선생님이 잠시 말을 멈춘다.', choices: [
          { id: 'shout', text: '"야, 그만 좀 해!" 하고 소리친다', result: '교실이 더 시끄러워진다.', impact: [{ who: '선생님', text: '수업을 다시 시작하기 어렵다', tone: -1 }], why: '소리로 맞서면 수업이 더 끊겨요. 차분한 경로를 찾아요.' },
          { id: 'class', text: '학급 회의에 "수업 중 끼어들기" 약속을 안건으로 낸다', result: '반이 함께 약속을 정한다.', impact: [{ who: '반 친구들', text: '함께 수업을 지킨다', tone: 1 }], end: '학급 약속을 정했어요.',
            next: { text: '약속을 정한 뒤에도 도하가 한 번 더 외친다.', choices: [
              { id: 'tell', text: '담임 선생님께 상황을 알리고 도움을 구한다', result: '선생님이 도하와 이야기를 나눈다.', impact: [{ who: '도하', text: '어른과 함께 바꿀 기회를 얻는다', tone: 1 }] },
              { id: 'post', text: '단체방에 도하 흉을 본다', result: '도하가 반에서 따돌림을 받기 시작한다.', impact: [{ who: '도하', text: '새로운 상처를 받는다', tone: -1 }], why: '문제 행동을 막으려다 다른 사람을 괴롭히면 안 돼요.' }] } }] } },
      { id: 'ignore', text: '반장 일이 아니라며 모른 척한다', result: '끼어들기가 매시간 이어진다.', impact: [{ who: '선생님', text: '준비한 수업을 다 못 한다', tone: -1 }], why: '반장이 아니어도 수업은 모두의 것이에요. 할 수 있는 작은 일이 있어요.', ending: '모른 척하자 수업이 계속 끊겼어요.' }] };
    const RR = [{ id: 'r1', text: '한 번이 아니라 되풀이되고 있다' }, { id: 'r2', text: '반 전체가 배울 시간을 잃는다' },
      { id: 'r3', text: '웃기려는 뜻이었으니 문제없다', why: '의도가 장난이어도 수업이 끊기는 영향은 그대로예요.' }, { id: 'r4', text: '선생님이 알아서 할 일이다', why: '수업은 선생님과 학생이 함께 지키는 거예요.' }];
    const RD2 = { text: '과학 실험 시간, 은재가 선생님이 안전 수칙을 말할 때마다 휴대전화로 음악을 크게 튼다.', ask: '옆자리인 나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'quiet', text: '"수칙 들어야 해, 꺼 줘"라고 작게 말한다', result: '은재가 소리를 줄이지만 투덜댄다.', impact: [{ who: '은재', text: '수칙을 듣는다', tone: 1 }], end: '작게 말해 소리를 줄였어요.',
        next: { text: '은재가 "실험만 하면 되잖아"라며 다시 튼다.', choices: [
          { id: 'why', text: '"수칙을 못 들으면 모둠이 다칠 수 있어"라고 까닭을 말한다', result: '은재가 휴대전화를 가방에 넣는다.', impact: [{ who: '모둠', text: '안전하게 실험한다', tone: 1 }], end: '까닭을 말하자 은재가 멈췄어요.',
            next: { text: '실험 뒤 은재가 "아까 선생님 화났지?" 하고 묻는다.', choices: [
              { id: 'sorry', text: '"쉬는 시간에 같이 말씀드리자"고 한다', result: '은재가 선생님께 사과한다.', impact: [{ who: '선생님', text: '존중받는다고 느낀다', tone: 1 }] },
              { id: 'nothing', text: '"몰라, 네가 알아서 해"라고 한다', result: '은재는 어떻게 할지 모른다.', impact: [{ who: '은재', text: '바로잡을 기회를 놓친다', tone: -1 }], why: '잘못을 바로잡도록 곁에서 도울 수 있어요.' }] } },
          { id: 'film', text: '은재 모습을 몰래 찍어 친구들에게 보낸다', result: '은재가 놀림감이 된다.', impact: [{ who: '은재', text: '창피를 당한다', tone: -1 }], why: '몰래 찍어 보내는 것은 또 다른 상처를 만들어요.' }] } },
      { id: 'grab', text: '은재의 휴대전화를 빼앗는다', result: '둘이 다투며 수업이 멈춘다.', impact: [{ who: '반 친구들', text: '실험 시작이 늦어진다', tone: -1 }], why: '물건을 빼앗으면 다툼이 되어 수업이 더 멈춰요.', ending: '다툼이 생겨 수업이 멈췄어요.' }] };
    const ROLE = { reasons: [{ id: 'r5', text: '선생님·친구·반 전체가 모두 영향을 받는다' }], ok: ['r5'] };
    const SCRIPT = [['서아', '(지수가 선생님 말투를 흉내 내자) ___', '"지수야, 수업 중이야. 그만하자."'], ['지수', '"왜? 다들 웃잖아." / 서아: ___', '"웃는 사람만 있는 건 아니야."'],
      ['선생님', '(잠시 멈추고) ___', '"하던 설명을 마저 해도 될까요?"'], ['지수', '(쉬는 시간에) ___', '"아까는 죄송했어요."']];
    const SCRIPT_X = ['"더 크게 해 봐, 재밌다."', '"선생님도 웃기잖아요."'];

    ALL.push(
      // ---- 도입 ----
      M('intro.joke-graph', {
        title: '"장난이었다" 반응 원그래프 읽기', method: '"장난이었다" 반응 자료 읽기', tool: 'chart', minutes: 7,
        levels: { easy: '값이 보이는 원그래프에서 가장 큰 비율을 함께 찾는다.', base: '세 비율을 비교하고 가장 큰 비율이 뜻하는 것을 한 줄로 말한다.', challenge: '"장난" 응답을 줄이려면 무엇이 필요한지 근거를 들어 짝에게 말한다.' },
        intro: {
          teacher: '"선생님께 무례한 행동을 한 학생이 가장 많이 한 말은 무엇일까요?" 가상 중학교 설문 원그래프를 띄우고 시연 단추로 \'장난이었다\'가 골라지는 모습을 보인다. 이 자료는 수업용으로 지어낸 가상 자료라는 점을 먼저 밝힌다. "장난이면 괜찮지 않아요?"라는 말에는 "장난이었다는 말을 들은 선생님의 수업은 어떻게 되었을까요?"라고 되묻는다. 오늘은 의도보다 영향과 반복을 근거로 가려내 본다고 밝힌다.',
          student: '가상 설문 원그래프에서 가장 큰 비율을 찾고, 그 말이 무엇을 뜻하는지 생각해요. 장난이라는 말로 영향이 사라지는지 짝과 한 줄로 말해요.',
          demo: { tool: 'chart', options: CH('circle', '무례한 행동 뒤 들은 말(가상 자료)', '%', JOKE, { question: '가장 큰 비율을 차지한 말은?', choices: JOKE.map((d) => d[0]) }), sequence: [{ pick: 0 }] },
          art: { draw: 'a paper-cut pie chart made of three paper slices pinned on a classroom board, the largest slice labeled with a speech bubble, students looking at it', banner: '장난이면 괜찮을까?', extra: [{ motif: 'star', x: 300, y: 96 }] },
        },
        notes: '그래프 값은 가상이다. 학생에게 선생님께 무례하게 군 일이나 본 일을 묻지 않는다.',
      }),
      M('intro.first-sort', {
        title: '사례 카드 첫 분류와 판단 보류', method: '사례 첫 분류와 이유', tool: 'sortboard', minutes: 7,
        levels: { easy: '카드 4장을 존중·침해 두 바구니로 나누는 시연을 함께 본다.', base: '카드 8장을 존중·침해·판단 보류 세 바구니로 나누는 시연을 보고 까닭을 말한다.', challenge: '판단 보류 카드마다 무엇을 더 알아야 판단할지(되풀이·영향) 짝에게 말한다.' },
        intro: {
          teacher: '"이 행동은 선생님의 교육활동을 존중하는 걸까요, 침해하는 걸까요? 아직 모르겠다면 \'판단 보류\'에 두어도 좋아요." 시연 단추로 카드 8장이 세 바구니에 나뉘는 모습을 보인다. "별명 부르기는 다 침해예요"라는 말에는 "한 번인지 계속인지, 듣는 사람이 어떤지에 따라 달라지지 않을까요?"라고 되묻는다. 판단 보류 카드는 활동을 마친 뒤 다시 본다고 약속한다.',
          student: '사례 카드를 존중·침해·판단 보류로 나눠 보고, 판단 보류 카드는 무엇을 더 알아야 할지 생각해요.',
          demo: { tool: 'sortboard', options: BOX('', ['존중', '침해', '판단 보류'], FIRST).toolOptions, sequence: [BOX('', ['존중', '침해', '판단 보류'], FIRST).target] },
          art: { draw: 'a paper-cut shelf with three paper baskets labeled respect, harm and wait, students placing small case cards into them', banner: '존중일까, 침해일까?', extra: [{ motif: 'leaf', x: 300, y: 96 }] },
        },
        notes: '카드 장면은 가상이다. 판단 보류 카드 두 장은 정답이 갈릴 수 있는 카드로 남겨 두고, 활동 뒤 근거(되풀이·영향)로 다시 판단하게 한다.',
      }),

      // ---- 활동 ----
      M('activity.law-purpose', {
        title: '법이 예방교육을 정한 까닭', method: '법이 예방교육을 정한 까닭', tool: 'mindmap', minutes: 15,
        levels: { easy: '가지 두 개(배울 권리·교육활동)에 근거 카드 4장을 잇고, 놓으면 바로 맞는지 알려 준다.', base: '가지 세 개에 근거 카드 6장을 나누고(함정 카드 둘), 예방교육의 사실 카드를 고른다.', challenge: '함정 카드가 더 섞인 판에서 나누고, 활동지에 가지마다 우리 학교에 맞는 예를 한 줄씩 쓴다.' },
        activity: {
          title: '법이 예방교육을 정한 까닭', tool: 'mindmap',
          teacher: '"교원지위법은 학교가 학생에게 교육활동 침해 예방교육을 해마다 한 번 이상 하도록 정해 두었어요. 왜 선생님이 아니라 학생에게도 할까요?" 가지마다 근거 카드를 이을 때 누가 지켜지는지 한 사람씩 말하게 한다. "선생님 편만 드는 규칙"이라는 말에는 "수업이 끊기지 않으면 누가 가장 많이 배우나요?"라고 되묻는다. 법 조항의 세부 내용은 근거 자료에 있는 것만 말한다.',
          task: '예방교육이 지키는 세 가지(학생의 배울 권리·선생님의 교육활동·학교 공동체) 가지에 근거 카드를 이어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('근거 카드를 세 가지에 나누세요(어디에도 안 맞는 카드는 남겨요).', ['학생의 배울 권리', '선생님의 교육활동', '학교 공동체'], PURPOSE, { topic: '침해 예방교육' }),
              SB('근거 카드 4장을 두 가지에 나누세요.', ['학생의 배울 권리', '선생님의 교육활동'], pickCards(PURPOSE, ['p1', 'p2', 'p3', 'p4']), { topic: '침해 예방교육' }),
              SB('근거 카드를 세 가지에 나누세요(함정 카드가 더 있어요).', ['학생의 배울 권리', '선생님의 교육활동', '학교 공동체'], [...PURPOSE, { id: 't3', text: '시험 문제를 미리 알려 주는 규칙이다' }], { topic: '침해 예방교육' }),
              { hints: ['카드마다 "이 일로 누가 지켜지나?"를 먼저 묻고, 그 사람의 가지에 놓아요.'] }),
            IT(PB('근거 자료에 적힌 예방교육의 사실 카드만 바구니에 담으세요.', '예방교육의 사실', [
              { id: 'f1', text: '교원지위법에 근거가 있다', ok: true }, { id: 'f2', text: '해마다 한 번 이상 한다', ok: true }, { id: 'f3', text: '학생 활동 중심으로 한다', ok: true },
              { id: 'f4', text: '선생님만 받는 교육이다' }, { id: 'f5', text: '한 학기에 열 번 해야 한다' }], { topic: '침해 예방교육' }),
              null, null, { hints: ['오늘 처음에 선생님이 읽어 준 근거 문장(법·횟수·방식)과 같은 카드를 찾아요.'] }),
            IT(MB('가지마다 그 가지를 지키는 행동 카드를 하나씩 이으세요.', [['학생의 배울 권리', '수업 중 끼어들지 않고 손 들기'], ['선생님의 교육활동', '의견은 예의 있게 정해진 자리에서'], ['학교 공동체', '흉내 영상이 돌면 멈추자고 말하기']], ['모두가 웃으면 따라 웃기'], { topic: '지키는 행동' }),
              null, null, { conclude: '예방교육은 선생님만이 아니라 배우는 학생과 학교 전체를 함께 지키려는 약속이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '학생도 교육활동 침해 예방교육을 받는 까닭을 한 문장으로 써요.' }],
          easy: [{ type: 'choice', prompt: '예방교육이 지키는 것에 ○ 해요.', options: ['학생의 배울 권리', '시험 점수 올리기'], answer: '학생의 배울 권리' }] },
        notes: '근거 자료에는 교원지위법 제24조·시행령 제21조, 연 1회 이상, 학생 활동 중심 예방교육만 있다. 법 취지 설명(세 가지를 지킨다)은 사람 확인 목록에 있다.',
      }),
      M('activity.repeat-dilemma', {
        title: '반복되는 수업 방해 갈림길', method: '반복되는 수업 방해 딜레마', tool: 'dilemma', minutes: 15,
        levels: { easy: '갈림길 1번에서 고르고 결과 장면을 본다.', base: '갈림길 2번을 끝까지 가 보고 판단 근거(반복·영향)를 고른다.', challenge: '갈림길 3번까지 가고, 선생님·친구·반 전체 입장의 근거 카드까지 고른다.' },
        activity: {
          title: '반복되는 수업 방해 갈림길', tool: 'dilemma',
          teacher: '"한 번 웃긴 것과 매시간 수업을 끊는 것은 같을까요?" 학생마다 한 길을 끝까지 가 본 뒤 되돌아가 다른 길의 결과와 견주게 한다. "반장이 아니면 상관없어요"라는 말에는 "수업이 끊길 때 시간을 잃는 사람은 누구인가요?"라고 되묻는다. 소리치거나 단체방에 흉보는 길은 또 다른 상처를 만든다는 점을 짚는다. 장면 속 인물은 가상이다.',
          task: '반복되는 수업 방해 장면에서 길을 골라 결과를 따라가고, 끝에서 판단 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '도하가 매시간 수업을 끊어요. 한 번 골라 결과를 보세요.', base: '도하가 매시간 수업을 끊어요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '도하가 매시간 수업을 끊어요. 세 번 골라 끝까지 가고, 반 전체 입장의 근거도 고르세요.' },
              '매시간 끊기는 국어 시간', RD, [['talk', 'class', 'tell']], RR, ['r1', 'r2'], ROLE),
            DIL({ easy: '실험 수칙 설명 중에 음악이 나와요. 한 번 골라 결과를 보세요.', base: '실험 수칙 설명 중에 음악이 나와요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '실험 수칙 설명 중에 음악이 나와요. 세 번 골라 끝까지 가고, 모둠 입장의 근거도 고르세요.' },
              '실험 시간의 음악', RD2, [['quiet', 'why', 'sorry']], [{ id: 'r1', text: '수칙을 못 들으면 모둠이 다칠 수 있다' }, { id: 'r2', text: '빼앗거나 찍기보다 말로 까닭을 알린다' },
                { id: 'r3', text: '내 휴대전화니까 내 마음이다', why: '수업 시간은 함께 쓰는 시간이라 남의 배울 권리도 생각해요.' }, { id: 'r4', text: '몰래 찍어 알리는 게 가장 빠르다', why: '몰래 찍어 퍼뜨리면 또 다른 상처가 생겨요.' }], ['r1', 'r2'], ROLE),
            { prompt: '내가 고른 길과 다른 길의 결과를 짝과 견주고, 판단 근거 하나를 말해요.', free: true, toolOptions: { title: '매시간 끊기는 국어 시간', scene: cut(RD, 3), reasons: [], compare: true },
              conclude: '침해인지 가를 때는 의도보다 반복과 영향(누가 무엇을 잃는지)을 봐요.' },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '수업 방해가 침해인지 판단할 때 가장 알맞은 근거는?', options: ['웃기려는 뜻이었는지', '되풀이되는지와 반 전체가 받는 영향', '반장이 있는지'], answer: '되풀이되는지와 반 전체가 받는 영향' }] },
      }),
      M('activity.case-judgment', {
        title: '사례 판단문 세 문단 쓰기', method: '사례 판단문 쓰기', tool: 'rubric-writing', minutes: 15,
        levels: { easy: '문단마다 문장 틀("○○는 ~했다." 등)을 보고 한두 문장씩 쓴다.', base: '행동·영향·판단과 근거 세 문단을 쓰고 기준표로 스스로 점검한다.', challenge: '셋째 문단에 반대 판단도 한 문장 넣고 두 판단을 견준다(기준 하나 더).' },
        activity: {
          title: '사례 판단문 세 문단 쓰기', tool: 'rubric-writing',
          teacher: '"\'걔가 나빠요\'는 판단문일까요?" 사례 카드 하나(가상의 지수가 선생님 말투를 흉내 내 웃기는 장면)를 골라 행동을 사실대로 쓰고, 영향을 둘 이상 쓰고, 판단을 근거와 함께 쓰게 한다. 행동 문단에 "지수는 못됐다"처럼 평가를 섞는 학생에게 "눈에 보인 행동만 쓰면 어떻게 될까요?"라고 되묻는다. 실제 친구나 선생님 이름은 쓰지 않는다고 약속한다.',
          task: '가상의 사례 하나로 행동·영향·판단과 근거 세 문단을 쓰고, 기준표로 스스로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '1문단(행동): 가상의 지수가 한 행동을 평가 없이 사실대로 쓰세요.', toolOptions: { topic: '가상 사례: 수업 중 지수가 선생님 말투를 흉내 내며 반을 웃긴다. 지수가 한 행동을 사실대로 쓰세요.', minChars: 20, maxChars: 200, title: '1문단 — 행동', lines: 3 }, target: { selfCheck: ['눈에 보인 행동만 썼다', '평가하는 말(나쁘다 등)을 빼고 썼다', '실제 사람 이름을 쓰지 않았다'], sentences: [1, 3] }, difficulty: 0.25 },
              { toolOptions: { starter: '지수는 수업 중에 ~했다.' } }),
            IT({ prompt: '2문단(영향): 그 행동이 누구에게 어떤 영향을 주는지 둘 이상 쓰세요.', toolOptions: { topic: '지수의 행동이 선생님·반 친구·지수 자신에게 주는 영향을 쓰세요.', minChars: 30, maxChars: 250, title: '2문단 — 영향', lines: 4 }, target: { selfCheck: ['영향받는 사람을 둘 이상 썼다', '영향을 구체적으로 썼다'], sentences: [2, 4] }, difficulty: 0.3 },
              { toolOptions: { starter: '선생님은 ~. 반 친구들은 ~.' } }),
            IT({ prompt: '3문단(판단과 근거): 이 행동이 침해인지 판단하고 근거(영향·반복·의도)를 쓰세요.', toolOptions: { topic: '지수의 행동이 교육활동 침해인지 판단하고 근거를 쓰세요.', minChars: 30, maxChars: 250, title: '3문단 — 판단과 근거', lines: 4 }, target: { selfCheck: ['판단을 첫 문장에 썼다', '근거를 하나 이상 썼다', '1·2문단과 이어진다'], mustInclude: [['왜냐하면', '때문에', '까닭']], sentences: [2, 4] }, difficulty: 0.35 },
              { toolOptions: { starter: '나는 ~라고 판단한다. 왜냐하면 ~.' } },
              { prompt: '3문단에 내 판단과 반대 판단을 함께 쓰고, 어느 쪽 근거가 더 단단한지 견주세요.', target: { selfCheck: ['판단을 첫 문장에 썼다', '근거를 하나 이상 썼다', '반대 판단을 한 문장 넣었다', '두 판단의 근거를 견주었다'], mustInclude: [['왜냐하면', '때문에', '까닭']], sentences: [3, 5] } },
              { conclude: '판단문은 행동(사실) → 영향 → 판단과 근거 차례로 쓰면 감정이 아니라 근거로 말할 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '판단문 세 문단의 뼈대를 먼저 적어요.', columns: ['문단', '쓸 내용'], cells: [['행동', ''], ['영향', ''], ['판단과 근거', '']], answer: '(예) 말투를 흉내 냈다 — 설명이 끊기고 선생님이 존중받지 못한다 — 침해, 수업과 인격에 영향을 주기 때문' }] },
      }),
      M('activity.script-fill', {
        title: '흉내 장면 역할극 대본 완성', method: '역할극 대본 완성', tool: 'story', minutes: 15,
        levels: { easy: '대본 빈칸 2개(말리는 친구 대사)를 채우고, 놓으면 바로 맞는지 알려 준다.', base: '빈칸 4개(친구·선생님 대사)를 채우고 장면 차례를 놓은 뒤 모둠이 소리 내어 읽는다.', challenge: '결말 카드를 \'웃고 넘긴 결말\'과 \'멈춘 결말\'로 나누어 두 결말을 견준다.' },
        activity: {
          title: '흉내 장면 역할극 대본 완성', tool: 'story',
          teacher: '"친구가 선생님 말투를 흉내 내며 웃길 때, 옆 친구는 어떤 말로 멈출 수 있을까요?" 대본 빈칸을 채운 뒤 모둠별로 소리 내어 읽게 한다. "같이 웃어 줘야 친구가 안 서운하죠"라는 말에는 "웃음이 계속되면 흉내는 어떻게 될까요? 친구도 지키는 말은 무엇일까요?"라고 되묻는다. 선생님 역할은 화를 내는 사람이 아니라 수업을 이어 가려는 사람으로 읽게 한다. 대본 속 인물은 가상이다.',
          task: '수업 중 친구가 선생님 말투를 흉내 내는 대본의 빈칸을 채우고, 모둠이 함께 읽어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            IT(FB('대본 빈칸에 알맞은 대사 카드를 넣으세요(함정 대사는 남겨요).', SCRIPT, SCRIPT_X, { title: '수업 중 흉내 장면' }),
              FB('말리는 친구 서아의 대사 빈칸 2개를 채우세요.', SCRIPT.slice(0, 2), SCRIPT_X.slice(0, 1), { title: '수업 중 흉내 장면' }),
              null, { hints: ['서아의 대사는 지수를 놀리지 않으면서 멈추자고 하는 말이에요.'] }),
            IT(OB('역할극 장면을 일이 일어난 차례로 놓으세요.', [{ id: 'o1', text: '지수가 선생님 말투를 흉내 낸다' }, { id: 'o2', text: '서아가 그만하자고 말한다' }, { id: 'o3', text: '선생님이 설명을 다시 잇는다' }, { id: 'o4', text: '쉬는 시간에 지수가 사과한다' }], { title: '장면 차례' }, [{ id: 'x1', text: '반 전체가 더 크게 따라 한다' }]),
              OB('역할극 장면 세 개를 차례로 놓으세요.', [{ id: 'o1', text: '지수가 선생님 말투를 흉내 낸다' }, { id: 'o2', text: '서아가 그만하자고 말한다' }, { id: 'o4', text: '쉬는 시간에 지수가 사과한다' }], { title: '장면 차례' })),
            IT(SB('결말 장면 카드를 두 결말로 나누세요.', ['웃고 넘긴 결말', '멈춘 결말'], [
              { id: 'e1', text: '다음 시간에도 흉내가 이어진다', to: '웃고 넘긴 결말' }, { id: 'e2', text: '흉내 영상이 단체방에 돈다', to: '웃고 넘긴 결말' },
              { id: 'e3', text: '설명을 끝까지 듣는다', to: '멈춘 결말' }, { id: 'e4', text: '지수가 스스로 사과한다', to: '멈춘 결말' }], { title: '두 가지 결말' }),
              null, null, { conclude: '흉내를 멈추게 하는 한마디가 수업도, 친구도 지켜요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '대본 속 서아의 대사 하나를 내 말투로 바꿔 써요.' }] },
      }),

      // ---- 정리 ----
      M('wrap.attitude-check', {
        title: '수업 태도 점검표 고르기', method: '나의 수업 태도 점검', tool: 'kitchen', minutes: 7,
        levels: { easy: '교사가 항목 3개(말·행동·기기)를 함께 읽으며 존중하는 행동을 고른다.', base: '항목 6개 가운데 수업을 존중하는 행동만 골라 점검표를 만들고, 바꿀 한 가지를 활동지에 쓴다.', challenge: '활동지에 2주 뒤 다시 점검할 날짜 칸을 만든다.' },
        wrap: {
          teacher: '"오늘 판단 근거로 보면, 어떤 행동이 수업을 함께 지키는 행동일까요?" 점검표 항목을 고른 뒤 활동지의 \'바꿀 한 가지\'는 걷지 않고 혼자 본다고 알린다. "저는 다 잘해요"라는 학생에게는 "가장 지키기 어려운 항목은 어떤 상황에서 어려울까요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: CL('', '수업을 존중하는 행동', [
              { id: 'a1', text: '설명 중에는 손 들고 말한다', ok: true }, { id: 'a2', text: '기기는 수업에 쓸 때만 켠다', ok: true },
              { id: 'a3', text: '의견은 예의 있는 말로 한다', ok: true }, { id: 'a4', text: '재밌으면 선생님 흉내를 낸다' },
              { id: 'a5', text: '수업 장면을 허락 없이 찍는다' }, { id: 'a6', text: '친구가 끼어들면 같이 웃는다' }]).toolOptions,
              prompt: '수업을 존중하는 행동만 골라 점검표에 표시하세요.', target: { checklist: ['a1', 'a2', 'a3'] }, difficulty: 0.15 },
            { type: 'choice', prompt: '"장난이었으니 침해가 아니다"라는 말에 대한 반박으로 알맞은 것은?', options: ['장난은 언제나 괜찮다', '의도가 장난이어도 수업과 사람에게 준 영향은 남는다', '선생님만 신경 쓰면 된다'], answer: 1, difficulty: 0.2, explain: '판단할 때는 의도만이 아니라 반복과 영향을 함께 봐요.' },
            MOOD,
          ],
        },
        worksheet: { title: '나의 수업 태도 점검', items: [
          { type: 'check', prompt: '다음 주에 지킬 약속에 표시해요(걷지 않아요).', options: ['설명 중 손 들고 말하기', '기기는 수업에 쓸 때만', '의견은 예의 있게'] },
          { type: 'short', prompt: '내가 바꿀 한 가지와 그것이 어려운 상황을 써요(혼자 보기).' }] },
      }),
      M('wrap.reflect-line', {
        title: '판단 기준 한 줄 성찰', method: '한 줄 성찰', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '교사가 칠판에 적은 보기 문장(반복·영향·의도) 가운데 하나를 골라 옮겨 쓰고 이유를 덧붙인다.', base: '가장 새로웠던 판단 기준과 그 까닭을 한 줄로 쓰고 기준 두 가지를 점검한다.', challenge: '두 줄로 쓰고 활동지에서 짝의 성찰과 견준다.' },
        wrap: {
          teacher: '"오늘 배운 판단 기준 가운데 처음 알게 된 것은 무엇인가요?" 반복·영향·의도 세 기준을 칠판에 적고 한 줄 성찰을 쓰게 한다. "다 알던 거예요"라는 학생에게는 "알던 것과 오늘 사례에 써 본 것은 무엇이 달랐나요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'rubric-writing', options: { topic: '오늘 판단 기준(반복·영향·의도) 가운데 가장 새로웠던 것과 그 까닭을 한 줄로 쓰세요.', minChars: 15, maxChars: 150, starter: '가장 새로웠던 것은 ~이다. 왜냐하면 ~.', lines: 2, title: '한 줄 성찰' },
              prompt: '가장 새로웠던 판단 기준과 까닭을 한 줄로 쓰고 기준표를 점검하세요.', target: { selfCheck: ['기준 하나를 구체적으로 짚었다', '내 행동과 이어 썼다'], sentences: [1, 2] }, difficulty: 0.15 },
            { type: 'choice', prompt: '쉬는 시간에 선생님 별명을 한 번 부른 일을 판단할 때 더 알아야 할 것은?', options: ['그 별명이 웃긴지', '되풀이되는지와 듣는 선생님에게 준 영향', '누가 처음 지었는지'], answer: 1, difficulty: 0.25, explain: '판단 보류 카드는 반복과 영향을 알아야 가릴 수 있어요.' },
            MOOD,
          ],
        },
        worksheet: { title: '한 줄 성찰', items: [
          { type: 'short', prompt: '오늘 가장 새로웠던 판단 기준과 그 까닭을 한 줄로 써요.' },
          { type: 'choice', prompt: '판단 보류 카드를 다시 볼 때 쓸 근거로 알맞지 않은 것은?', options: ['되풀이되는가', '누가 영향을 받는가', '얼마나 웃겼는가'], answer: '얼마나 웃겼는가' }] },
      }),
    );
  }

  // ==== 8학년 · 수업 장면을 찍어 올리면 (teach.m.filming) ====
  {
    const M = MK('filming', [8]);
    const VIEWS = [['올린 직후', 10], ['1시간', 40], ['3시간', 320], ['6시간', 900], ['12시간', 1300]];
    const SD = { text: '체육대회 날, 응원하던 수학 선생님이 넘어진다. 친구 하준이 그 장면을 찍고 "웃기지? 올릴까?"라고 묻는다.', ask: '나는 어떻게 할까?', motif: 'sun', choices: [
      { id: 'up', text: '"올려, 대박 나겠다"라고 한다', result: '하준이 학교 친구들이 보는 계정에 올린다.', impact: [{ who: '선생님', text: '조롱거리가 된다', tone: -1 }], why: '넘어진 모습을 허락 없이 퍼뜨리면 그 사람의 인격에 상처를 줘요.', end: '영상이 올라갔어요.',
        next: { text: '하루 뒤, 영상이 다른 학교 단체방에까지 퍼졌다. 선생님은 수업에 들어와 말이 없다.', choices: [
          { id: 'keep', text: '"벌써 퍼졌으니 어쩔 수 없다"며 둔다', result: '일주일 뒤에도 사본이 계속 돈다.', impact: [{ who: '선생님', text: '수업이 위축된다', tone: -1 }], why: '늦었더라도 내리고 사과하면 퍼짐을 줄일 수 있어요.' },
          { id: 'down', text: '하준과 함께 영상을 내리고 선생님께 사과한다', result: '선생님이 사과를 받고, 더 퍼진 사본은 학교와 함께 지우기로 한다.', impact: [{ who: '선생님', text: '사과를 받는다', tone: 1 }] }] } },
      { id: 'stop', text: '"넘어진 거 올리면 선생님이 상처받아. 지우자"라고 한다', result: '하준이 머뭇거린다.', impact: [{ who: '선생님', text: '모르는 곳에서 지켜진다', tone: 1 }], end: '지우자고 말했어요.',
        next: { text: '하준이 "그럼 얼굴만 가리고 올리면 되잖아"라고 한다.', choices: [
          { id: 'blur', text: '"그럼 괜찮겠다"라고 한다', result: '목소리와 체육복으로 누구인지 바로 알아본다.', impact: [{ who: '선생님', text: '알아보는 사람이 생긴다', tone: -1 }], why: '얼굴을 가려도 목소리·장소·옷으로 알아볼 수 있어요.' },
          { id: 'delete', text: '"가려도 알아봐. 그냥 지우자"라고 한다', result: '하준이 영상을 지운다.', impact: [{ who: '하준', text: '책임질 일을 막는다', tone: 1 }], end: '하준이 영상을 지웠어요.',
            next: { text: '일주일 뒤, 다른 친구가 "그때 그 영상 있어?" 하고 묻는다.', choices: [
              { id: 'no', text: '"지웠어, 그런 건 돌리지 말자"라고 한다', result: '이야기가 거기서 끝난다.', impact: [{ who: '선생님', text: '일상을 지킨다', tone: 1 }] },
              { id: 'tell', text: '"하준 폰에 있었는데" 하고 말을 흘린다', result: '친구들이 하준에게 영상을 찾는다.', impact: [{ who: '하준', text: '다시 곤란해진다', tone: -1 }], why: '지운 장면을 다시 말로 퍼뜨리지 않아요.' }] } }] } },
      { id: 'quiet', text: '못 들은 척 자리를 뜬다', result: '하준이 혼자 고민하다 영상을 올린다.', impact: [{ who: '선생님', text: '조롱거리가 된다', tone: -1 }], why: '"올릴까?"라고 물을 때가 멈출 수 있는 가장 좋은 때예요.', ending: '자리를 뜨자 영상이 올라갔어요.' }] };
    const SR = [{ id: 'r1', text: '허락 없이 찍은 장면을 퍼뜨리면 인격에 상처를 준다' }, { id: 'r2', text: '한번 퍼지면 지워도 사본이 남는다' },
      { id: 'r3', text: '얼굴만 가리면 괜찮다', why: '목소리·장소·옷으로도 누구인지 알아볼 수 있어요.' }, { id: 'r4', text: '공개 계정이 아니면 퍼지지 않는다', why: '본 사람이 캡처하거나 다시 보내면 어디로든 퍼져요.' }];
    const SD2 = { text: '음악 시간, 선생님이 노래 시범을 보이다 음이 갈라진다. 짝 유나가 몰래 녹음한 소리를 들려주며 "단체방에 올리자"고 한다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'no', text: '"몰래 녹음한 건 올리면 안 돼"라고 말린다', result: '유나가 "그냥 장난인데"라고 한다.', impact: [{ who: '선생님', text: '조롱받지 않는다', tone: 1 }], end: '말렸어요.',
        next: { text: '유나가 "그럼 우리 둘만 들을게"라며 파일을 지우지 않는다.', choices: [
          { id: 'del', text: '"둘만 들어도 언젠가 퍼질 수 있어. 지우자"라고 한다', result: '유나가 파일을 지운다.', impact: [{ who: '유나', text: '퍼뜨릴 위험을 없앤다', tone: 1 }], end: '파일을 지웠어요.',
            next: { text: '다음 음악 시간, 선생님이 다시 시범을 보인다.', choices: [
              { id: 'clap', text: '시범이 끝나자 박수를 친다', result: '선생님이 웃으며 수업을 잇는다.', impact: [{ who: '선생님', text: '존중받는다', tone: 1 }] },
              { id: 'mimic', text: '지난번 소리를 흉내 낸다', result: '반이 웃고 선생님이 굳는다.', impact: [{ who: '선생님', text: '다시 상처받는다', tone: -1 }], why: '파일을 지워도 흉내로 다시 조롱하면 같은 상처예요.' }] } },
          { id: 'ok', text: '"둘만이면 괜찮지"라고 한다', result: '며칠 뒤 유나가 다른 친구에게 파일을 보낸다.', impact: [{ who: '선생님', text: '조롱이 퍼진다', tone: -1 }], why: '남겨 둔 파일은 언젠가 퍼질 수 있어요.' }] } },
      { id: 'share', text: '같이 웃으며 단체방에 올린다', result: '소리 파일이 반 전체에 돈다.', impact: [{ who: '선생님', text: '수업 시범을 꺼리게 된다', tone: -1 }], why: '몰래 녹음해 올리는 것은 수업을 조롱하는 일이 될 수 있어요.', ending: '올리자 반 전체에 퍼졌어요.' }] };
    const SR2 = [{ id: 'r1', text: '몰래 녹음한 수업 장면은 올리지 않는다' }, { id: 'r2', text: '지운 뒤에도 흉내로 다시 조롱하지 않는다' },
      { id: 'r3', text: '둘만 들으면 아무 문제 없다', why: '남겨 둔 파일은 언젠가 다른 사람에게 갈 수 있어요.' }, { id: 'r4', text: '선생님도 실수했으니 괜찮다', why: '실수한 장면을 조롱하는 것은 실수와 다른 문제예요.' }];
    const MORE = { reasons: [{ id: 'r5', text: '내가 영상 속 사람이라면 퍼지지 않기를 바랄 것이다' }], ok: ['r5'] };
    const HARM = [
      { id: 'h1', text: '여러 사람 앞에서 놀림을 받는다', to: '선생님의 인격' }, { id: 'h2', text: '찍힐까 봐 수업에서 말을 아낀다', to: '수업' },
      { id: 'h3', text: '시범·활동이 있는 수업이 줄어든다', to: '수업' }, { id: 'h4', text: '학부모·지역이 학교를 걱정한다', to: '학교 신뢰' },
      { id: 'h5', text: '학생과 선생님 사이 믿음이 깨진다', to: '학교 신뢰' }, { id: 'h6', text: '올린 기록이 지워도 남는다', to: '올린 사람' },
      { id: 'h7', text: '친구들 사이에서 믿음을 잃는다', to: '올린 사람' }, { id: 'h8', text: '혼자 있을 때도 그 장면이 떠오른다', to: '선생님의 인격' },
      { id: 't1', text: '조회 수가 많으면 좋은 일이다' }];

    ALL.push(
      // ---- 도입 ----
      M('intro.views-line', {
        title: '수업 영상 조회 수 꺾은선 읽기', method: '게시물 조회 수 꺾은선 읽기', tool: 'chart', minutes: 7,
        levels: { easy: '값이 보이는 꺾은선에서 가장 높은 점을 함께 찾는다.', base: '앞 구간보다 가장 빨리 늘어난 구간을 찾고 그 원인을 말한다.', challenge: '6시간에 원본을 지운 뒤에도 그래프가 이어지는 까닭을 추론한다.' },
        intro: {
          teacher: '"올린 사람은 \'반 친구 몇 명만 볼 줄 알았다\'고 했어요. 그래프는 무엇을 말하나요?" 가상 사례의 수업 영상 조회 수 꺾은선그래프(지어낸 자료)를 띄우고 시연 단추로 \'3시간~6시간\' 구간이 골라지는 모습을 보인다. 원본은 6시간에 지웠다고 알려 준다. "지웠으니 끝났죠"라는 말에는 "6시간 뒤에도 늘어난 조회 수는 어디서 왔을까요?"라고 되묻는다. 사본과 캡처가 퍼짐을 이어 간다는 점을 짚는다.',
          student: '가상 사례의 조회 수 꺾은선에서 가장 빨리 늘어난 때를 찾고, 원본을 지운 뒤에도 늘어난 까닭을 생각해요.',
          demo: { tool: 'chart', options: CH('line', '수업 영상 조회 수(가상 사례, 가상 자료)', '회', VIEWS, { xLabel: '올린 뒤', yLabel: '조회 수', question: '앞 시점보다 가장 크게 늘어난 때는?', choices: VIEWS.map((d) => d[0]) }), sequence: [{ pick: 3 }] },
          art: { draw: 'a paper-cut line graph climbing steeply across a wall, small paper phones copying a video thumbnail along the line, one phone with a trash bin icon in the middle', banner: '지워도 늘어나는 숫자', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '그래프 값과 사례는 가상이다. 학생에게 수업 장면을 찍거나 올린 일이 있는지 묻지 않는다.',
      }),
      M('intro.found-out', {
        title: '찍힌 선생님이 알게 된 순간', method: '찍힌 사람이 알게 된 순간', tool: 'emotion', minutes: 7,
        levels: { easy: '보기 두 개(바로 사과·모른 척) 가운데 고르고 결과를 함께 읽는다.', base: '보기 세 개 가운데 고르고 결과와 마음 변화를 말한다.', challenge: '사과가 늦어지면 결과가 어떻게 달라질지 짝과 말한다.' },
        intro: {
          teacher: '"가상의 영어 선생님이 학생 계정에서 자기 수업 영상을 보게 되었어요. 이 순간 선생님 마음은 어떨까요? 올린 학생들은 무엇을 할 수 있을까요?" 갈래 판을 띄우고 시연 단추로 \'바로 내리고 사과한다\'를 고르는 모습과 그 결과를 보인다. "선생님이 못 본 척하면 되죠"라는 말에는 "못 본 척해도 영상이 그대로라면 선생님의 수업은 어떻게 될까요?"라고 되묻는다. 찍힌 사람의 자리에 서 보는 것이 오늘의 시작이라고 밝힌다.',
          student: '찍힌 선생님이 영상을 알게 된 순간, 올린 학생들이 할 수 있는 반응을 고르고 결과와 마음 변화를 살펴요.',
          demo: { tool: 'emotion', options: { mode: 'branch', situation: '가상의 영어 선생님이 학생 계정에서 자기 수업 영상을 보게 되었다', who: '선생님', feeling: '속상함', ask: '올린 학생들은 어떻게 할까?', choices: [
            { id: 'sorry', text: '바로 영상을 내리고 찾아가 사과한다', result: '선생님이 사과를 받고 다음 수업을 이어 간다.', mood: '편안함' },
            { id: 'hide', text: '모른 척하고 영상을 그대로 둔다', result: '선생님은 수업마다 휴대전화를 의식하게 된다.', mood: '걱정', why: '그대로 두면 상처와 퍼짐이 이어져요.' },
            { id: 'excuse', text: '"장난이었어요"라고만 말한다', result: '영상은 남고 선생님의 마음도 풀리지 않는다.', mood: '속상함', why: '장난이라는 말로는 영향이 지워지지 않아요.' }] }, sequence: [{ choice: 'sorry' }] },
          art: { draw: 'a paper-cut teacher at a desk looking at a phone screen showing a classroom video, a paper storm cloud above, students peeking from the doorway', banner: '찍힌 사람이 알게 되면', extra: [{ motif: 'rain', x: 300, y: 96 }] },
        },
        notes: '선생님과 장면은 가상이다. 실제 선생님을 떠올려 말하게 하지 않는다.',
      }),

      // ---- 활동 ----
      M('activity.sportsday-dilemma', {
        title: '체육대회 촬영 갈림길', method: '체육대회 날 촬영 딜레마', tool: 'dilemma', minutes: 15,
        levels: { easy: '갈림길 1번에서 고르고 결과를 본다.', base: '갈림길 2번을 따라 하루 뒤 결과까지 가 보고 근거를 고른다.', challenge: '갈림길 3번으로 일주일 뒤까지 추적하고, \'내가 영상 속 사람이라면\' 근거까지 고른다.' },
        activity: {
          title: '체육대회 촬영 갈림길', tool: 'dilemma',
          teacher: '"\'올릴까?\'라고 묻는 그 순간, 나에게는 어떤 길이 있을까요?" 학생마다 한 길을 끝까지 가 본 뒤 되돌아가 다른 길의 하루 뒤·일주일 뒤 결과와 견주게 한다. "얼굴을 가리면 괜찮아요"라는 말에는 "목소리와 체육복, 우리 학교 운동장이 그대로라면 누구인지 모를까요?"라고 되묻는다. 장면 속 인물과 사건은 가상이다.',
          task: '체육대회 촬영 장면에서 길을 골라 하루 뒤·일주일 뒤 결과를 따라가고, 끝에서 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '하준이 "올릴까?"라고 물어요. 한 번 골라 결과를 보세요.', base: '하준이 "올릴까?"라고 물어요. 두 번 골라 하루 뒤까지 가고 근거를 고르세요.', challenge: '하준이 "올릴까?"라고 물어요. 세 번 골라 일주일 뒤까지 가고, 내가 영상 속 사람이라면 바랄 근거도 고르세요.' },
              '체육대회 날 촬영', SD, [['stop', 'delete', 'no']], SR, ['r1', 'r2'], MORE),
            DIL({ easy: '유나가 몰래 녹음한 소리를 올리재요. 한 번 골라 결과를 보세요.', base: '유나가 몰래 녹음한 소리를 올리재요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '유나가 몰래 녹음한 소리를 올리재요. 세 번 골라 다음 수업까지 가고, 영상 속 사람 입장의 근거도 고르세요.' },
              '음악 시간 녹음', SD2, [['no', 'del', 'clap']], SR2, ['r1', 'r2'], MORE),
            { prompt: '체육대회 장면에서 내가 간 길과 다른 길의 일주일 뒤 결과를 짝과 견주어 말해요.', free: true, toolOptions: { title: '체육대회 날 촬영', scene: cut(SD, 3), reasons: [], compare: true },
              conclude: '"올릴까?"라고 묻는 순간이 멈출 수 있는 가장 좋은 때예요. 퍼진 뒤에는 지워도 사본이 남아요.' },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '"얼굴만 가리면 올려도 된다"는 말이 틀린 까닭은?', options: ['화질이 나빠서', '목소리·장소·옷으로도 누구인지 알아볼 수 있어서', '조회 수가 적어서'], answer: '목소리·장소·옷으로도 누구인지 알아볼 수 있어서' }] },
      }),
      M('activity.harm-map', {
        title: '촬영·게시가 낳는 결과 그물', method: '촬영·게시가 낳는 결과', tool: 'mindmap', minutes: 15,
        levels: { easy: '가지 두 개(선생님의 인격·수업)에 결과 카드 4장을 잇고, 놓으면 바로 맞는지 알려 준다.', base: '가지 네 개에 결과 카드 8장을 나누고(함정 카드 하나), \'지워도 남는다\'의 근거를 잇는다.', challenge: '가지마다 결과를 줄이는 행동 카드를 하나씩 더 잇는다.' },
        activity: {
          title: '촬영·게시가 낳는 결과 그물', tool: 'mindmap',
          teacher: '"영상 하나가 올라가면 누가 무엇을 잃을까요?" 가지 네 개에 결과 카드를 이을 때 \'올린 사람\' 가지도 빠뜨리지 않게 한다. "조회 수가 많으면 인기가 생겨요"라는 말에는 "그 조회 수는 누구의 무엇을 대가로 생겼나요?"라고 되묻는다. 결과 카드는 가상 사례에서 지어낸 것이다.',
          task: '수업 장면을 찍어 올렸을 때의 결과 카드를 선생님의 인격·수업·학교 신뢰·올린 사람 가지에 이어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('결과 카드를 네 가지에 나누세요(어디에도 안 맞는 카드는 남겨요).', ['선생님의 인격', '수업', '학교 신뢰', '올린 사람'], HARM, { topic: '찍어 올린 영상 하나' }),
              SB('결과 카드 4장을 두 가지에 나누세요.', ['선생님의 인격', '수업'], pickCards(HARM, ['h1', 'h8', 'h2', 'h3']), { topic: '찍어 올린 영상 하나' })),
            IT(MB('"지워도 남는다"의 근거를 장면마다 이으세요.', [['원본을 지웠다', '본 사람이 이미 캡처해 두었다'], ['단체방에서 나갔다', '보낸 사본은 다른 방에 남아 있다'], ['계정을 닫았다', '퍼 나른 사람의 게시물은 그대로다']], ['지우면 모든 기록이 사라진다'], { topic: '지워도 남는다' }),
              null, null, { hints: ['원본이 사라져도 이미 다른 곳으로 옮겨 간 것이 무엇인지 찾아요.'] }),
            IT(MB('가지마다 결과를 줄이는 행동을 하나씩 이으세요.', [['선생님의 인격', '찍힌 사람에게 바로 사과한다'], ['수업', '수업 중에는 촬영하지 않는다'], ['학교 신뢰', '퍼진 사본을 학교에 알려 함께 지운다'], ['올린 사람', '받은 영상을 더 보내지 않는다']], ['조회 수가 줄 때까지 기다린다'], { topic: '결과를 줄이는 행동' }),
              null, null, { conclude: '영상 하나가 선생님·수업·학교·올린 사람 모두에게 남는 결과를 만들어요. 줄이는 길은 찍기 전에 멈추는 것이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"지워도 남는다"는 말을 오늘 이은 근거로 한 문장 설명해요.' }],
          easy: [{ type: 'choice', prompt: '원본을 지워도 남을 수 있는 것에 ○ 해요.', options: ['다른 사람이 해 둔 캡처', '내 휴대전화 배경 화면'], answer: '다른 사람이 해 둔 캡처' }] },
      }),
      M('activity.other-choice', {
        title: '찍고 싶을 때의 다른 선택 제안 글', method: '다른 선택 제안 글', tool: 'rubric-writing', minutes: 15,
        levels: { easy: '문장 틀("찍고 싶은 순간 ~ 대신 ~하자.")을 보고 한 문단을 쓴다.', base: '상황·대안 둘 이상·근거가 든 제안 글 한 문단을 쓰고 기준표로 점검한다.', challenge: '"재미로 찍는 건데 뭐 어때?"라는 반론에 답하는 문장을 넣는다(기준 하나 더).' },
        activity: {
          title: '찍고 싶을 때의 다른 선택 제안 글', tool: 'rubric-writing',
          teacher: '"찍지 말자\'로 끝나는 글과 \'찍고 싶을 때 이렇게 하자\'로 끝나는 글 가운데 어느 쪽이 행동을 바꿀까요?" 제안 글에 상황과 대안 둘 이상, 근거가 들어가게 한다. "그냥 참으면 돼요"만 쓰는 학생에게는 "참는 대신 손이 할 일은 무엇일까요?"라고 되묻는다. 실제 학교·선생님 이름은 쓰지 않는다.',
          task: '수업 중 웃긴 장면을 찍고 싶은 순간에 할 수 있는 다른 선택을 제안하는 글을 쓰고, 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '찍고 싶은 상황을 한 문장으로 쓰고, 다른 선택 두 가지를 제안하세요.', toolOptions: { topic: '수업 중 웃긴 장면을 찍고 싶을 때, 대신 할 수 있는 선택 두 가지를 제안하세요.', minChars: 40, maxChars: 300, title: '다른 선택 제안', lines: 4 }, target: { selfCheck: ['찍고 싶은 상황을 구체적으로 썼다', '대안을 둘 이상 썼다', '대안마다 바로 할 수 있다'], sentences: [2, 4] }, difficulty: 0.3 },
              { toolOptions: { starter: '찍고 싶은 순간 ~ 대신 ~하자. 또는 ~.' } }),
            IT({ prompt: '제안한 대안이 왜 좋은지 근거를 넣어 한 문단으로 다듬으세요.', toolOptions: { topic: '내가 제안한 다른 선택이 찍힌 사람과 수업을 어떻게 지키는지 근거를 넣어 쓰세요.', minChars: 40, maxChars: 300, title: '제안의 근거', lines: 4 }, target: { selfCheck: ['근거를 하나 이상 썼다', '찍힌 사람의 입장을 넣었다', '명령하지 않고 제안하는 말투다'], mustInclude: [['왜냐하면', '때문에', '그래야']], sentences: [2, 5] }, difficulty: 0.35 },
              { toolOptions: { starter: '이렇게 하면 ~. 왜냐하면 ~.' } },
              { prompt: '"재미로 찍는 건데 뭐 어때?"라는 반론에 답하는 문장까지 넣어 한 문단으로 다듬으세요.', target: { selfCheck: ['근거를 하나 이상 썼다', '찍힌 사람의 입장을 넣었다', '명령하지 않고 제안하는 말투다', '반론에 답하는 문장이 있다'], mustInclude: [['왜냐하면', '때문에', '그래야']], sentences: [3, 6] } },
              {}),
            IT({ prompt: '제안 글 전체를 친구가 받아들이기 쉬운 한 문단으로 마무리하세요.', toolOptions: { topic: '상황·대안·근거를 이어 친구에게 건네는 제안 글 한 문단으로 마무리하세요.', minChars: 60, maxChars: 400, title: '제안 글 마무리', lines: 5 }, target: { selfCheck: ['상황·대안·근거가 모두 들어 있다', '읽는 친구를 탓하지 않는다', '마지막 문장이 함께하자는 말이다'], sentences: [3, 6] }, difficulty: 0.35 },
              { toolOptions: { starter: '수업 중에 ~ 때가 있다. 그럴 때 ~. 그래야 ~. 우리 같이 ~.' } },
              null, { conclude: '좋은 제안 글은 하지 말라는 말보다 대신 할 수 있는 행동을 알려 줘요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '제안 글의 뼈대를 먼저 적어요.', columns: ['상황', '대안 1', '대안 2', '근거'], cells: [['', '', '', '']], answer: '(예) 선생님이 실수했을 때 — 휴대전화를 가방에 — 함께 웃고 넘기기 — 찍힌 사람이 상처받지 않는다' }] },
      }),
      M('activity.stop-campaign', {
        title: '촬영 전 멈춤 캠페인 포스터', method: '촬영 전 멈춤 캠페인', tool: 'collage', minutes: 15,
        levels: { easy: '조각 고르개가 줄어든 판에 구호 자리 하나를 꾸민다.', base: '구호·근거 한 줄·대안 행동 세 요소를 조각으로 꾸미고 장마다 점검한다.', challenge: '1학년 대상과 3학년 대상으로 문구를 나눠 만들었는지 하나 더 점검한다.' },
        activity: {
          title: '촬영 전 멈춤 캠페인 포스터', tool: 'collage',
          teacher: '"계단을 오르는 3초 동안 읽히는 포스터는 어떤 모양일까요?" 모둠이 구호·근거 한 줄·대안 행동을 활동지에 먼저 쓰고 조각으로 꾸미게 한다. 겁주는 문구만 쓰는 모둠에게 "무엇을 하지 말라는 말 옆에 무엇을 하라는 말이 있나요?"라고 되묻는다. 실제 선생님 사진·이름·학교 로고는 넣지 않는다.',
          task: '학교 계단·복도에 붙일 \'촬영 전 멈춤\' 포스터를 구호·근거·대안 행동 조각으로 꾸미고 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '포스터 위쪽에 구호를 놓을 자리와 멈춤을 나타내는 조각을 꾸미고 점검하세요.', toolOptions: { shapes: ['circle', 'square', 'rect', 'triangle', 'star', 'heart'] }, target: { selfCheck: ['구호를 놓을 자리가 눈에 띈다', '멈춤을 나타내는 조각이 있다', '실제 사람 얼굴·이름을 넣지 않았다'], minPieces: 3 }, difficulty: 0.2 },
              { toolOptions: { shapes: ['circle', 'square', 'rect'] } }),
            IT({ prompt: '가운데에 근거 한 줄(지워도 남는다 등)을 나타내는 조각을 꾸미고 점검하세요.', toolOptions: { shapes: ['circle', 'square', 'rect', 'triangle', 'diamond'] }, target: { selfCheck: ['근거를 놓을 자리가 있다', '퍼짐을 크기나 개수로 나타냈다'], minPieces: 3 }, difficulty: 0.3 }),
            IT({ prompt: '아래쪽에 대안 행동(가방에 넣기·함께 웃기·박수 등)을 조각 셋 이상으로 꾸미고 점검하세요.', toolOptions: { shapes: ['circle', 'square', 'rect', 'triangle', 'star', 'heart', 'leaf'] }, target: { selfCheck: ['대안 행동을 셋 이상 나타냈다', '하지 말라는 말보다 할 일이 크게 보인다'], minPieces: 3 }, difficulty: 0.3 },
              null,
              { prompt: '대안 행동을 1학년용과 3학년용으로 나눠 꾸미고 점검하세요(대상 맞춤).', target: { selfCheck: ['대안 행동을 셋 이상 나타냈다', '하지 말라는 말보다 할 일이 크게 보인다', '1학년과 3학년 문구 자리를 나눴다'], minPieces: 3 } },
              { conclude: '멈춤 포스터는 겁주기보다 \'대신 이렇게\'를 크게 보여 줄 때 행동을 바꿔요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '포스터 문구를 먼저 써요.', columns: ['요소', '문구'], cells: [['구호', ''], ['근거 한 줄', ''], ['대안 행동', '']], answer: '(예) 찍기 전 3초 멈춤 — 지워도 사본은 남아요 — 휴대전화는 가방에' }] },
      }),

      // ---- 정리 ----
      M('wrap.post-check', {
        title: '게시 전 네 가지 점검표', method: '게시 전 점검표', tool: 'kitchen', minutes: 7,
        levels: { easy: '교사와 함께 허락·상처 가능성 두 항목을 고른다.', base: '네 항목(허락·상처 가능성·퍼짐·다른 선택)을 함정 항목 사이에서 골라 점검표를 만든다.', challenge: '활동지에서 점검표를 단체방 공지 문장으로 고쳐 쓴다.' },
        wrap: {
          teacher: '"올리기 전에 딱 네 가지만 물어본다면 무엇일까요?" 점검표 항목을 고른 뒤 \'좋아요를 많이 받을까?\' 같은 항목이 왜 빠지는지 묻는다. "허락만 받으면 다 괜찮아요"라는 말에는 "허락받은 영상도 퍼지면 어떻게 될지 생각해 봤나요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: CL('', '올리기 전 점검', [
              { id: 'p1', text: '찍힌 사람에게 허락을 받았나?', ok: true }, { id: 'p2', text: '누군가 상처받을 수 있나?', ok: true },
              { id: 'p3', text: '퍼지면 되돌릴 수 있나?', ok: true }, { id: 'p4', text: '올리지 않는 다른 선택이 있나?', ok: true },
              { id: 'p5', text: '좋아요를 많이 받을까?' }, { id: 'p6', text: '화질이 선명한가?' }]).toolOptions,
              prompt: '게시 전에 물어야 할 점검 항목만 골라 표시하세요.', target: { checklist: ['p1', 'p2', 'p3', 'p4'] }, difficulty: 0.15 },
            { type: 'choice', prompt: '"공개 계정이 아니면 퍼지지 않는다"는 말에 대한 반박으로 알맞은 것은?', options: ['비공개 계정은 아무도 못 본다', '본 사람이 캡처하거나 다시 보내면 어디로든 퍼진다', '친구만 보면 괜찮다'], answer: 1, difficulty: 0.2, explain: '받은 사람이 옮기는 순간 올린 사람 손을 떠나요.' },
            MOOD,
          ],
        },
        worksheet: { title: '게시 전 점검표', items: [
          { type: 'check', prompt: '내 기기에 붙일 점검 항목에 표시해요.', options: ['허락', '상처 가능성', '퍼짐', '다른 선택'] },
          { type: 'short', prompt: '점검표를 단체방 공지 한 문장으로 바꿔 써요.' }] },
      }),
      M('wrap.pledge-line', {
        title: '"찍고 싶을 때 나는" 한 줄 다짐', method: '한 줄 다짐', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '교사가 칠판에 적은 보기(가방에 넣기·함께 웃기) 가운데 골라 문장을 완성한다.', base: '"찍고 싶을 때 나는 ___" 한 줄 다짐을 쓰고 기준 두 가지를 점검한다.', challenge: '활동지에 친구에게 권하는 문장을 덧붙인다.' },
        wrap: {
          teacher: '"\'절대 안 찍는다\'와 \'찍고 싶으면 휴대전화를 뒤집어 놓는다\' 가운데 어느 다짐이 지켜질까요?" 다짐은 걷지 않고 혼자 간직한다고 알린다. 크게만 쓰는 학생에게는 "내일 수업에서 바로 할 수 있는 행동인가요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'rubric-writing', options: { topic: '"찍고 싶을 때 나는 ___" 문장을 지킬 수 있는 행동으로 완성하세요.', minChars: 10, maxChars: 120, starter: '찍고 싶을 때 나는 ~.', lines: 2, title: '한 줄 다짐' },
              prompt: '"찍고 싶을 때 나는 ___" 다짐을 한 줄로 쓰고 기준을 점검하세요.', target: { selfCheck: ['구체적인 행동을 썼다', '내일 바로 지킬 수 있다'], sentences: [1, 2] }, difficulty: 0.15 },
            { type: 'choice', prompt: '찍은 영상을 이미 올렸다면 가장 먼저 할 일은?', options: ['조회 수가 줄기를 기다린다', '바로 내리고 찍힌 사람에게 사과한다', '계정 이름을 바꾼다'], answer: 1, difficulty: 0.2, explain: '빨리 내리고 사과할수록 퍼짐과 상처를 줄일 수 있어요.' },
            MOOD,
          ],
        },
        worksheet: { title: '한 줄 다짐', items: [
          { type: 'short', prompt: '"찍고 싶을 때 나는 ___" 다짐을 써요(걷지 않아요).' },
          { type: 'short', prompt: '친구에게 권하는 한 문장을 써요.' }] },
      }),
    );
  }

  // ==== 9학년 · 불만을 존중하며 전하는 차례 (teach.m.voice-complaint) ====
  {
    const M = MK('voice-complaint', [9]);
    const CHAN = [['직접 찾아가 말하기', 68], ['메일·쪽지로 쓰기', 61], ['학급 회의 안건', 54], ['단체방에 비난 글', 9]];
    const FIVE = [{ id: 'v1', text: '사실 정리: 무엇이 언제 있었는지 적는다' }, { id: 'v2', text: '시간 정하기: 선생님께 말할 때를 여쭙는다' },
      { id: 'v3', text: '나-전달법: 내 생각과 마음을 말한다' }, { id: 'v4', text: '대안 제시: 바라는 점을 말한다' }, { id: 'v5', text: '결과 확인: 답을 듣고 정리한다' }];
    const FIVE_X = [{ id: 'x1', text: '단체방에 먼저 알린다' }];
    const AD = { text: '수행평가 점수가 생각보다 낮게 나왔다. 단체방에서 친구들이 "선생님 욕 글 올리자, 다 같이 하면 들어줄 거야"라고 한다.', ask: '나는 어떻게 할까?', motif: 'cloud', choices: [
      { id: 'join', text: '같이 비난 글을 올린다', result: '글이 캡처되어 퍼지고, 점수 이야기는 사라진다.', impact: [{ who: '선생님', text: '모욕을 받는다', tone: -1 }, { who: '나', text: '이의를 낼 힘을 잃는다', tone: -1 }], why: '여럿이 비난해도 의견이 아니라 공격이 돼요. 내 이의도 묻혀요.', ending: '비난 글이 퍼지고 점수 이야기는 사라졌어요.' },
      { id: 'fact', text: '단체방은 나가 있고, 채점 기준과 내 답안을 먼저 정리한다', result: '어느 부분에서 점수가 깎였는지 궁금한 점이 분명해진다.', impact: [{ who: '나', text: '물을 것이 분명해진다', tone: 1 }], end: '사실을 먼저 정리했어요.',
        next: { text: '정리해 보니 한 문항 채점이 기준과 다르게 보인다. 선생님은 지금 다음 수업에 가는 중이다.', choices: [
          { id: 'hall', text: '복도에서 붙잡고 바로 따진다', result: '선생님이 "수업에 늦어서 나중에 이야기하자"고 한다.', impact: [{ who: '선생님', text: '당황한다', tone: -1 }], why: '말할 시간을 먼저 여쭈면 차분히 들을 수 있어요.' },
          { id: 'ask', text: '"점수 여쭤볼 게 있는데 언제 찾아뵐까요?"라고 여쭙는다', result: '선생님이 점심시간에 교무실로 오라고 한다.', impact: [{ who: '선생님', text: '들을 준비를 한다', tone: 1 }], end: '말할 시간을 정했어요.',
            next: { text: '점심시간 교무실, 선생님이 "어떤 점이 궁금하니?"라고 묻는다.', choices: [
              { id: 'i', text: '"3번 답이 기준의 둘째 항목에 맞는 것 같아 여쭤봐요"라고 말한다', result: '선생님이 답안을 다시 보고 설명해 준다.', impact: [{ who: '나', text: '이의가 존중받는다', tone: 1 }] },
              { id: 'you', text: '"선생님이 잘못 채점하셨잖아요"라고 말한다', result: '대화가 굳어지고 선생님이 방어적으로 된다.', impact: [{ who: '선생님', text: '공격받았다고 느낀다', tone: -1 }], why: '\'너\'를 탓하는 말보다 \'나\'의 생각과 근거를 말하면 대화가 이어져요.' }] } }] } },
      { id: 'drop', text: '아무 말 없이 참는다', result: '궁금한 점이 풀리지 않고 속상함이 남는다.', impact: [{ who: '나', text: '정당한 의견을 내지 못한다', tone: -1 }], why: '불만을 참기만 할 필요는 없어요. 존중하는 방법으로 낼 수 있어요.', ending: '참기만 해서 궁금한 점이 남았어요.' }] };
    const AR = [{ id: 'r1', text: '여럿이 비난해도 의견이 아니라 공격이 된다' }, { id: 'r2', text: '사실과 근거를 정리하면 이의가 분명해진다' },
      { id: 'r3', text: '세게 말해야 들어준다', why: '공격적인 말은 듣는 사람을 방어하게 만들어 해결이 멀어져요.' }, { id: 'r4', text: '단체방에서 여럿이 말하면 의견이 된다', why: '대상을 비난하는 글은 수가 많아도 의견이 되지 않아요.' }];
    const AD2 = { text: '선생님이 정한 모둠 자리가 불편하다. 모둠 친구 시온이 "다음 시간에 다 같이 책상 치고 항의하자"고 한다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'bang', text: '다 같이 책상을 친다', result: '수업이 멈추고 자리 이야기는 꺼내지도 못한다.', impact: [{ who: '반 친구들', text: '수업을 잃는다', tone: -1 }], why: '수업을 멈추게 하는 항의는 다른 친구의 배울 시간도 빼앗아요.', ending: '수업이 멈추고 자리 이야기는 못 했어요.' },
      { id: 'agenda', text: '"자리 바꾸기를 학급 회의 안건으로 내자"고 한다', result: '시온이 "그게 될까?" 하며 따라온다.', impact: [{ who: '모둠', text: '함께 할 길이 생긴다', tone: 1 }], end: '학급 회의 안건으로 냈어요.',
        next: { text: '회의에서 불편한 까닭을 모으니 "칠판이 안 보인다"는 의견이 많다.', choices: [
          { id: 'ask2', text: '정리한 까닭과 바라는 점을 담임 선생님께 전한다', result: '선생님이 다음 주에 자리를 다시 정하자고 한다.', impact: [{ who: '선생님', text: '근거 있는 의견을 듣는다', tone: 1 }], end: '바라는 점을 전했어요.',
            next: { text: '새 자리도 모두가 원하는 대로는 되지 않았다.', choices: [
              { id: 'accept', text: '결과를 듣고 한 달 뒤 다시 의견을 내기로 한다', result: '반이 바뀐 자리에서 수업을 이어 간다.', impact: [{ who: '반 친구들', text: '약속을 지킨다', tone: 1 }] },
              { id: 'angry', text: '"말해 봤자 소용없네"라며 단체방에 불평 글을 올린다', result: '반 분위기가 나빠진다.', impact: [{ who: '선생님', text: '서운해한다', tone: -1 }], why: '결과가 기대와 달라도 확인하고 다음 길을 정해요.' }] } },
          { id: 'force', text: '"안 바꿔 주면 수업 안 들을 거예요"라고 말한다', result: '이야기가 다툼으로 번진다.', impact: [{ who: '선생님', text: '협박받았다고 느낀다', tone: -1 }], why: '바라는 점은 조건을 걸어 위협하지 않고 대안으로 말해요.' }] } },
      { id: 'endure', text: '불편해도 아무 말 하지 않는다', result: '칠판이 안 보이는 친구들이 계속 불편하다.', impact: [{ who: '모둠', text: '불편이 이어진다', tone: -1 }], why: '정당한 의견은 정해진 자리에서 말할 수 있어요.', ending: '말하지 않아 불편이 이어졌어요.' }] };
    const AR2 = [{ id: 'r1', text: '수업을 멈추지 않는 경로로 의견을 낸다' }, { id: 'r2', text: '까닭을 모아 바라는 점을 대안으로 말한다' },
      { id: 'r3', text: '여럿이 소란을 피워야 바뀐다', why: '소란은 다른 친구의 배울 권리를 빼앗고 해결을 늦춰요.' }, { id: 'r4', text: '결과가 다르면 의견은 소용없다', why: '결과를 확인하고 다음 의견을 낼 수 있어요.' }];
    const MORE = { reasons: [{ id: 'r5', text: '결과가 기대와 달라도 확인하고 다음 길을 정한다' }], ok: ['r5'] };
    const EXPR = [
      { id: 'e1', text: '"3번 채점 기준을 여쭤봐도 될까요?"', to: '정당한 의견' }, { id: 'e2', text: '"숙제 양이 많아 시간이 부족해요"', to: '정당한 의견' },
      { id: 'e3', text: '"모둠 자리를 회의에서 다시 정하고 싶어요"', to: '정당한 의견' }, { id: 'e4', text: '"설명을 한 번 더 들을 수 있을까요?"', to: '정당한 의견' },
      { id: 'e5', text: '"이런 수업 들을 가치가 없어요"', to: '공격적 표현' }, { id: 'e6', text: '단체방에 선생님 외모 비꼬는 글', to: '공격적 표현' },
      { id: 'e7', text: '"점수 안 바꾸면 신고할 거예요"', to: '공격적 표현' }, { id: 'e8', text: '수업 중 책상을 치며 소리친다', to: '공격적 표현' },
      { id: 'e9', text: '"평가가 기준과 달라 보여요, 근거는 이거예요"', to: '정당한 의견' }, { id: 'e10', text: '선생님 별명으로 조롱 글을 쓴다', to: '공격적 표현' }];

    ALL.push(
      // ---- 도입 ----
      M('intro.channel-graph', {
        title: '불만 전하는 방식과 해결 비율 읽기', method: '불만 전하는 방식 자료 읽기', tool: 'chart', minutes: 7,
        levels: { easy: '값이 보이는 막대 가운데 \'직접 찾아가 말하기\' 한 방식을 읽는다.', base: '네 방식의 해결 비율을 견주어 해결이 가장 많았던 방식과 가장 적었던 방식을 찾는다.', challenge: '이 자료의 한계(가상·스스로 답한 설문·표본)를 한 줄로 짝에게 말한다.' },
        intro: {
          teacher: '"불만이 있을 때 어떤 방식으로 전하면 해결이 잘 되었을까요?" 가상 학교 설문의 \'방식별 해결된 비율\' 막대그래프를 띄우고 시연 단추로 가장 높은 막대가 골라지는 모습을 보인다. 이 자료는 수업용으로 지어낸 가상 자료라고 밝힌다. "단체방에 다 같이 쓰면 더 빨리 해결돼요"라는 말에는 "그래프에서 단체방 비난 글의 해결 비율은 어땠나요?"라고 되묻는다. 계획한 묶음 막대 대신 방식별 해결 비율 막대 하나로 보인다.',
          student: '가상 설문 막대그래프에서 해결이 가장 많았던 방식과 가장 적었던 방식을 찾고, 그 차이가 왜 생겼을지 생각해요.',
          demo: { tool: 'chart', options: CH('bar', '불만을 전한 방식별 해결된 비율(가상 자료)', '%', CHAN, { xLabel: '전한 방식', yLabel: '해결된 비율', max: 100, question: '해결된 비율이 가장 높은 방식은?', choices: CHAN.map((d) => d[0]) }), sequence: [{ pick: 0 }] },
          art: { draw: 'a paper-cut bar chart of four paper columns on a classroom wall, a tall column beside a paper envelope and a very short column beside a crumpled chat bubble', banner: '어떻게 전하면 풀릴까?', extra: [{ motif: 'star', x: 300, y: 96 }] },
        },
        notes: '자료는 가상이다. 계획의 \'묶음 막대그래프\'는 교구가 한 계열 막대만 그려, \'방식별 해결된 비율\' 막대 하나로 바꿨다. 학생에게 선생님께 불만을 전한 경험을 묻지 않는다.',
      }),
      M('intro.anger-scale', {
        title: '불만 상황 화 온도 눈금', method: '불만 상황 화 온도', tool: 'emotion', minutes: 7,
        levels: { easy: '상황 하나(점수 이의)의 화 크기를 눈금으로 보이는 시연을 본다.', base: '세 상황(점수 이의·자리 배치·숙제 양)을 차례로 띄워 화 크기를 견주고, 클수록 먼저 할 일을 말한다.', challenge: '화가 가장 큰 상황의 첫 행동(숨 고르기·사실 적기)을 정해 짝에게 말한다.' },
        intro: {
          teacher: '"가상의 학생이 점수 이의가 있을 때 화가 5칸 가운데 몇 칸일까요? 화가 클 때 가장 먼저 해야 할 일은 무엇일까요?" 눈금 판을 띄우고 시연 단추로 화 4칸이 표시되는 모습을 보인다. 이어서 자리 배치·숙제 양 상황도 말로 견준다. "화가 나면 바로 말해야 시원해요"라는 말에는 "화가 4칸일 때 나온 말과 2칸일 때 나온 말 가운데 어느 쪽이 해결로 이어질까요?"라고 되묻는다. 화가 나는 것은 자연스럽고, 전하는 차례가 중요하다고 짚는다.',
          student: '가상의 불만 상황에서 화의 크기를 눈금으로 생각해 보고, 화가 클수록 먼저 할 일이 무엇인지 말해요.',
          demo: { tool: 'emotion', options: { mode: 'scale', situation: '가상의 학생이 수행평가 점수가 기준과 다르게 나왔다고 느낀다', feeling: '화남', steps: 5, scaleLabels: { 1: '조금', 5: '아주 많이' }, after: '화가 클수록 바로 말하기보다 숨을 고르고 사실부터 적어요.' }, sequence: [{ level: 4 }] },
          art: { draw: 'a paper-cut thermometer with five colored paper bands beside a student holding a crumpled test paper, a calm paper cloud nearby', banner: '화가 클수록 먼저 할 일', extra: [{ motif: 'storm', x: 300, y: 96 }] },
        },
        notes: '상황은 가상 학생의 것이다. 학생 자신의 화 크기를 묻거나 기록하지 않는다.',
      }),

      // ---- 활동 ----
      M('activity.five-steps', {
        title: '의견 전달 다섯 단계 차례', method: '의견 전달 다섯 단계', tool: 'story', minutes: 15,
        levels: { easy: '장면 3장(사실 정리·나-전달법·결과 확인)을 차례로 놓고, 놓으면 바로 맞는지 알려 준다.', base: '장면 5장을 차례로 놓고(함정 장면 하나), 장면마다 알맞은 대사 카드를 넣는다.', challenge: '결과가 기대와 다를 때 할 대사 카드까지 고른다.' },
        activity: {
          title: '의견 전달 다섯 단계 차례', tool: 'story',
          teacher: '"불만을 말하기 전에 할 일이 있을까요?" 다섯 장면을 차례로 놓은 뒤, 단계마다 어울리는 대사를 고르게 한다. "바로 말하는 게 솔직한 거예요"라는 말에는 "사실을 정리하지 않고 말하면 상대는 무엇을 고쳐야 할지 알 수 있을까요?"라고 되묻는다. 나-전달법은 \'너는\' 대신 \'나는\'으로 시작하는 말이라는 것을 예로 보인다.',
          task: '불만을 존중하며 전하는 다섯 단계 장면을 차례로 놓고, 단계마다 알맞은 대사를 골라요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            IT(OB('의견 전달 다섯 단계 장면을 차례로 놓으세요(끼어든 장면은 남겨요).', FIVE, { title: '의견 전달 다섯 단계' }, FIVE_X),
              OB('의견 전달 장면 3장을 차례로 놓으세요.', pickCards(FIVE, ['v1', 'v3', 'v5']), { title: '의견 전달 다섯 단계' })),
            IT(FB('단계마다 알맞은 대사를 넣으세요(함정 대사는 남겨요).', [['나', '(시간 정하기) ___', '"여쭤볼 게 있는데 언제 찾아뵐까요?"'], ['나', '(나-전달법) ___', '"저는 3번이 기준에 맞는다고 생각해 궁금해요."'], ['나', '(대안 제시) ___', '"한 번 더 봐 주실 수 있을까요?"']],
              ['"선생님이 틀리셨잖아요."', '"다른 반은 점수 잘 주던데요."'], { title: '단계별 대사' }),
              FB('나-전달법 대사 하나를 넣으세요.', [['나', '(나-전달법) ___', '"저는 3번이 기준에 맞는다고 생각해 궁금해요."']], ['"선생님이 틀리셨잖아요."'], { title: '단계별 대사' }),
              null, { hints: ['\'너\'나 \'선생님이\'로 탓하는 말이 아니라 \'나는\'으로 시작하는 말을 찾아요.'] }),
            IT(PB('선생님 답이 기대와 달랐을 때 이어 할 말을 바구니에 담으세요.', '결과가 다를 때', [
              { id: 'k1', text: '"설명해 주셔서 감사합니다."', ok: true }, { id: 'k2', text: '"다음 평가 때 기준을 다시 볼게요."', ok: true },
              { id: 'k3', text: '"그럼 단체방에 올릴게요."' }, { id: 'k4', text: '"역시 말해 봤자 소용없네요."' }], { title: '결과 확인' }),
              null, null, { conclude: '사실 정리 → 시간 정하기 → 나-전달법 → 대안 제시 → 결과 확인. 차례를 지키면 불만이 공격이 아니라 의견이 돼요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"선생님이 잘못하셨잖아요"를 나-전달법 문장으로 바꿔 써요.' }],
          easy: [{ type: 'choice', prompt: '나-전달법 문장에 ○ 해요.', options: ['"저는 이 부분이 궁금해요."', '"선생님이 틀렸어요."'], answer: '"저는 이 부분이 궁금해요."' }] },
      }),
      M('activity.appeal-dilemma', {
        title: '점수 이의 단체방 갈림길', method: '수행평가 점수 이의 딜레마', tool: 'dilemma', minutes: 15,
        levels: { easy: '갈림길 1번에서 고르고 결과를 본다.', base: '갈림길 2번을 따라가 결과를 보고 근거를 고른다.', challenge: '갈림길 3번까지 가고 활동지 표에 두 경로의 결과를 견주어 적는다.' },
        activity: {
          title: '점수 이의 단체방 갈림길', tool: 'dilemma',
          teacher: '"점수에 이의가 있다는 것은 잘못일까요?" 이의를 내는 것 자체는 정당하다는 점을 먼저 밝히고, 학생마다 한 길을 끝까지 가 본 뒤 다른 길과 견주게 한다. "다 같이 쓰면 의견이 돼요"라는 말에는 "글을 읽은 선생님은 점수 이야기를 들었을까요, 비난을 들었을까요?"라고 되묻는다. 평가 이의 절차는 학교마다 다르니 [학교가 확인해 넣는 평가 이의 신청 절차]를 알려 준다.',
          task: '점수 이의와 단체방 제안 사이에서 길을 골라 결과를 따라가고, 끝에서 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '점수에 이의가 있고, 단체방에서 비난 글을 올리자고 해요. 한 번 골라 결과를 보세요.', base: '점수 이의 장면에서 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '점수 이의 장면에서 세 번 골라 끝까지 가고, 결과 확인의 근거도 고르세요.' },
              '수행평가 점수 이의', AD, [['fact', 'ask', 'i']], AR, ['r1', 'r2'], MORE),
            DIL({ easy: '모둠 자리가 불편하고, 책상을 치며 항의하자고 해요. 한 번 골라 결과를 보세요.', base: '모둠 자리 장면에서 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '모둠 자리 장면에서 세 번 골라 끝까지 가고, 결과 확인의 근거도 고르세요.' },
              '불편한 모둠 자리', AD2, [['agenda', 'ask2', 'accept']], AR2, ['r1', 'r2'], MORE),
            { prompt: '점수 이의 장면에서 두 경로(비난 글·사실 정리)의 결과를 짝과 견주어 말해요.', free: true, toolOptions: { title: '수행평가 점수 이의', scene: cut(AD, 3), reasons: [], compare: true },
              conclude: '이의를 내는 것은 정당해요. 여럿이 비난하는 대신 사실과 근거로, 정해진 자리에서 말할 때 해결에 닿아요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '두 경로의 결과를 견주어 써요.', columns: ['경로', '선생님에게', '나에게'], cells: [['단체방 비난 글', '', ''], ['사실 정리 후 찾아가기', '', '']], answer: '(예) 모욕을 받음 — 이의가 묻힘 / 설명할 기회 — 이의가 존중받음' }] },
      }),
      M('activity.appeal-mail', {
        title: '이의 제기 메일 초안 쓰기', method: '이의 제기 메일 초안', tool: 'rubric-writing', minutes: 15,
        levels: { easy: '문장 틀(인사·사실·근거·바라는 점)의 빈칸을 채워 쓴다.', base: '메일 한 통을 쓰고 기준표(사실·근거·바라는 점·존중하는 말투)로 점검한 뒤 고쳐 쓴다.', challenge: '짝과 메일을 바꿔 읽고, 짝의 의견을 반영해 다시 쓴다(기준 하나 더).' },
        activity: {
          title: '이의 제기 메일 초안 쓰기', tool: 'rubric-writing',
          teacher: '"선생님께 메일을 받는다면 어떤 메일에 답하고 싶을까요?" 가상의 수행평가 상황으로 메일을 쓰게 하고, 기준표로 점검한 뒤 한 번 고쳐 쓰게 한다. "점수가 이상해요"만 쓰는 학생에게는 "어느 문항이, 어떤 기준과 다르게 보이나요?"라고 되묻는다. 실제 이름·연락처는 쓰지 않고 \'○○ 선생님\'으로 쓴다.',
          task: '가상의 수행평가 상황으로 선생님께 보내는 이의 제기 메일을 쓰고, 기준표로 점검한 뒤 고쳐 써요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '메일 첫 부분: 인사와 함께 궁금한 사실(문항·점수)을 쓰세요.', toolOptions: { topic: '가상 상황: 수행평가 3번 문항 점수가 채점 기준과 다르게 보인다. 인사와 궁금한 사실을 쓰세요.', minChars: 25, maxChars: 200, title: '메일 — 사실', lines: 3 }, target: { selfCheck: ['인사로 시작했다', '어느 문항인지 사실을 썼다', '실제 이름·연락처를 쓰지 않았다'], sentences: [1, 3] }, difficulty: 0.25 },
              { toolOptions: { starter: '○○ 선생님, 안녕하세요. 수행평가 ~번 문항에 대해 여쭙고 싶습니다.' } }),
            IT({ prompt: '메일 가운데: 그렇게 생각한 근거와 바라는 점을 쓰세요.', toolOptions: { topic: '내 답안이 기준에 맞는다고 생각한 근거와, 선생님께 바라는 점을 쓰세요.', minChars: 40, maxChars: 300, title: '메일 — 근거와 바라는 점', lines: 4 }, target: { selfCheck: ['근거를 하나 이상 썼다', '바라는 점을 부탁하는 말로 썼다', '탓하거나 위협하는 말이 없다'], mustInclude: [['왜냐하면', '때문에', '근거']], sentences: [2, 4] }, difficulty: 0.3 },
              { toolOptions: { starter: '제 답안은 ~ 때문에 기준에 맞는다고 생각했습니다. 한 번 더 봐 주실 수 있을까요?' } }),
            IT({ prompt: '메일 전체를 고쳐 쓰세요: 사실·근거·바라는 점·존중하는 말투가 모두 들어가게.', toolOptions: { topic: '앞에서 쓴 두 부분을 이어 존중하는 말투의 메일 한 통으로 고쳐 쓰세요.', minChars: 60, maxChars: 400, title: '메일 고쳐 쓰기', lines: 5 }, target: { selfCheck: ['사실을 썼다', '근거를 썼다', '바라는 점을 썼다', '존중하는 말투로 끝맺었다'], sentences: [3, 6] }, difficulty: 0.35 },
              null,
              { prompt: '짝과 메일을 바꿔 읽은 뒤, 짝의 의견을 반영해 메일 전체를 다시 쓰세요.', target: { selfCheck: ['사실을 썼다', '근거를 썼다', '바라는 점을 썼다', '존중하는 말투로 끝맺었다', '짝의 의견을 하나 이상 반영했다'], sentences: [3, 6] } },
              { conclude: '사실·근거·바라는 점·존중하는 말투가 있는 메일은 받는 사람이 무엇을 다시 볼지 알 수 있게 해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '이의 제기 메일에 들어가야 할 것에 표시해요.', options: ['어느 문항인지', '그렇게 생각한 근거', '바라는 점', '다른 반과의 비교'] }] },
      }),
      M('activity.fair-vs-attack', {
        title: '정당한 의견과 공격적 표현 가르기', method: '정당한 의견과 공격적 표현의 근거', tool: 'mindmap', minutes: 15,
        levels: { easy: '표현 카드 6장을 두 가지에 나누고, 놓으면 바로 맞는지 알려 준다.', base: '표현 카드 10장을 두 가지에 나누고, 가르는 기준(사실·대상·말투·경로)을 예와 잇는다.', challenge: '기준이 겹치는 애매한 표현을 고르고 모둠에서 판정 근거를 토의한다.' },
        activity: {
          title: '정당한 의견과 공격적 표현 가르기', tool: 'mindmap',
          teacher: '"같은 불만도 어떻게 말하느냐에 따라 의견이 되기도, 공격이 되기도 해요. 무엇이 가를까요?" 표현 카드를 나눈 뒤 사실·대상·말투·경로 네 기준을 예와 잇게 한다. "솔직하게 말하는 게 뭐가 나빠요"라는 말에는 "솔직함과 사람을 깎아내리는 말은 무엇이 다를까요?"라고 되묻는다. 카드 속 표현은 가상이다.',
          task: '표현 카드를 정당한 의견과 공격적 표현으로 나누고, 가르는 기준(사실·대상·말투·경로)을 근거로 이어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            IT(SB('표현 카드를 두 가지에 나누세요.', ['정당한 의견', '공격적 표현'], EXPR, { topic: '같은 불만, 다른 말' }),
              SB('표현 카드 6장을 두 가지에 나누세요.', ['정당한 의견', '공격적 표현'], pickCards(EXPR, ['e1', 'e2', 'e3', 'e5', 'e6', 'e7']), { topic: '같은 불만, 다른 말' })),
            IT(MB('가르는 기준마다 정당한 의견의 예를 이으세요.', [['사실', '어느 문항인지 짚어 말한다'], ['대상', '사람이 아니라 문제를 말한다'], ['말투', '부탁하는 말로 바라는 점을 말한다'], ['경로', '찾아가거나 회의 안건으로 낸다']], ['여럿이 단체방에 함께 쓴다'], { topic: '가르는 기준' }),
              null, null, { hints: ['기준 낱말을 먼저 읽고, 그 기준을 지킨 말이 어떤 모습일지 떠올려요.'] }),
            IT(PB('기준이 겹쳐 판단하기 애매한 표현을 바구니에 담고 모둠에서 토의하세요.', '애매한 표현', [
              { id: 'a1', text: '"솔직히 이 숙제는 의미 없는 것 같아요"', ok: true }, { id: 'a2', text: '수업 뒤 친구끼리 불평하는 말', ok: true },
              { id: 'a3', text: '"3번 채점 기준을 여쭤봐도 될까요?"' }, { id: 'a4', text: '선생님 별명으로 조롱 글을 쓴다' }], { topic: '애매한 표현' }),
              null, null, { conclude: '사실을 짚고, 사람이 아니라 문제를 말하고, 부탁하는 말투로, 정해진 경로로 말하면 불만도 정당한 의견이 돼요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '공격적 표현 카드 하나를 골라 정당한 의견으로 바꿔 써요.' }] },
      }),

      // ---- 정리 ----
      M('wrap.voice-check', {
        title: '의견 전달 다섯 단계 점검표', method: '의견 전달 점검표', tool: 'kitchen', minutes: 7,
        levels: { easy: '교사와 함께 다섯 단계 가운데 세 단계(사실 정리·나-전달법·결과 확인)를 고른다.', base: '함정 항목 사이에서 다섯 단계를 모두 골라 점검표를 만든다.', challenge: '활동지에서 점검표를 고등학교에서도 쓸 수 있게 고쳐 쓴다.' },
        wrap: {
          teacher: '"불만이 생겼을 때 이 점검표를 꺼낸다면 어떤 항목이 있어야 할까요?" 다섯 단계를 고른 뒤 \'단체방에 먼저 알리기\' 같은 항목이 왜 빠지는지 묻는다. "다섯 단계는 너무 길어요"라는 말에는 "가장 빼고 싶은 단계를 빼면 어떤 일이 생길까요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: CL('', '의견 전달 점검표', [
              { id: 'q1', text: '사실을 먼저 정리했나?', ok: true }, { id: 'q2', text: '말할 시간을 여쭈었나?', ok: true },
              { id: 'q3', text: '\'나는\'으로 말했나?', ok: true }, { id: 'q4', text: '바라는 점을 대안으로 말했나?', ok: true },
              { id: 'q5', text: '답을 듣고 결과를 확인했나?', ok: true }, { id: 'q6', text: '단체방에 먼저 알렸나?' }, { id: 'q7', text: '최대한 세게 말했나?' }]).toolOptions,
              prompt: '의견을 존중하며 전하는 다섯 단계만 골라 점검표에 표시하세요.', target: { checklist: ['q1', 'q2', 'q3', 'q4', 'q5'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '"세게 말해야 들어준다"는 말에 대한 반박으로 알맞은 것은?', options: ['세게 말하면 빨리 끝난다', '공격적인 말은 상대를 방어하게 해 해결이 멀어진다', '조용히 말하면 아무도 안 듣는다'], answer: 1, difficulty: 0.2, explain: '사실과 근거를 부탁하는 말로 전할 때 상대가 다시 살펴볼 수 있어요.' },
            MOOD,
          ],
        },
        worksheet: { title: '의견 전달 점검표', items: [
          { type: 'table', prompt: '다섯 단계를 내 말로 바꿔 써요.', columns: ['단계', '내 말'], cells: [['사실 정리', ''], ['시간 정하기', ''], ['나-전달법', ''], ['대안 제시', ''], ['결과 확인', '']] },
          { type: 'choice', prompt: '다섯 단계 가운데 가장 먼저 할 일은?', options: ['나-전달법', '사실 정리', '결과 확인'], answer: '사실 정리' }] },
      }),
      M('wrap.guide-card', {
        title: '후배용 의견 전달 안내 카드', method: '존중하는 의견 전달 안내 카드', tool: 'collage', minutes: 7,
        levels: { easy: '세 단계(사실·나-전달법·결과 확인)를 조각으로 나타낸다.', base: '다섯 단계가 차례로 이어지는 안내 카드를 꾸미고 점검한다.', challenge: '활동지에 피해야 할 표현 예시 칸을 덧붙인다.' },
        wrap: {
          teacher: '"1학년 후배가 처음 불만이 생겼을 때 이 카드를 본다면 무엇이 한눈에 보여야 할까요?" 다섯 단계가 차례로 이어지게 조각을 놓게 한다. 그림만 있는 카드에는 "단계마다 예시 문장은 활동지 어디에 쓸까요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'collage', options: { guide: 'horizontal', shapes: ['circle', 'square', 'rect', 'triangle', 'star', 'heart', 'diamond'] },
              prompt: '의견 전달 다섯 단계가 차례로 이어지는 안내 카드를 조각으로 꾸미고 점검하세요.', target: { selfCheck: ['단계를 차례로 놓았다', '단계마다 다른 조각을 썼다', '예시 문장 자리를 남겼다'], minPieces: 5 }, difficulty: 0.2 },
            { type: 'choice', prompt: '안내 카드의 예시 문장으로 가장 알맞은 것은?', options: ['"선생님 수업 별로예요."', '"저는 이 부분이 궁금해서 여쭤보고 싶어요."', '"다 같이 항의하자."'], answer: 1, difficulty: 0.15, explain: '\'나는\'으로 시작해 궁금한 점을 부탁하는 말이 나-전달법이에요.' },
            MOOD,
          ],
        },
        worksheet: { title: '의견 전달 안내 카드', items: [
          { type: 'table', prompt: '단계마다 예시 문장을 써요.', columns: ['단계', '예시 문장'], cells: [['사실 정리', ''], ['나-전달법', ''], ['대안 제시', '']] },
          { type: 'short', prompt: '피해야 할 표현 하나와 그 까닭을 써요.' }] },
      }),
    );
  }

  // ==== 7~9학년 · 또래가 만드는 존중 문화 (teach.m.peer-culture) ====
  {
    const M = MK('peer-culture', [7, 8, 9]);
    const PEER = [['친구가 말렸을 때', 18], ['친구들이 웃었을 때', 74]];
    const LB = { situation: '가상의 사회 시간, 우진이 선생님 말을 비꼬자 반 전체가 웃는다', who: '나', feeling: '걱정', ask: '나는 어떻게 할까?', choices: [
      { id: 'laugh', text: '같이 웃는다', result: '우진이 더 신나서 한 번 더 비꼰다.', mood: '걱정', why: '웃음은 계속해도 된다는 신호가 돼요.' },
      { id: 'stop', text: '"수업 듣자"라고 작게 말한다', result: '몇몇이 웃음을 멈추고 수업이 다시 이어진다.', mood: '편안함' },
      { id: 'phone', text: '모른 척 고개를 숙인다', result: '웃음이 이어지고 선생님이 말을 멈춘다.', mood: '속상함', why: '모른 척해도 분위기는 웃는 쪽으로 기울어요.' }] };
    const MD = { text: '친한 친구 다온이 "선생님 말투 흉내 영상 같이 찍자, 재밌잖아"라고 한다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'yes', text: '"좋아, 재밌겠다"라며 같이 찍는다', result: '영상이 학급 단체방에 돌고 선생님이 알게 된다.', impact: [{ who: '선생님', text: '조롱받는다', tone: -1 }, { who: '다온', text: '책임질 일이 생긴다', tone: -1 }], why: '함께 찍으면 나도 같은 행동을 한 사람이 돼요.', ending: '영상이 퍼져 선생님이 알게 되었어요.' },
      { id: 'no', text: '"그건 선생님이 싫어하실 것 같아, 다른 거 하자"라고 한다', result: '다온이 "재미없게 왜 그래?"라며 서운해한다.', impact: [{ who: '선생님', text: '존중받는다', tone: 1 }, { who: '다온', text: '서운해한다', tone: 0 }], end: '거절하고 다른 것을 냈어요.',
        next: { text: '다온이 "너 요즘 이상해졌다"며 말을 줄인다.', choices: [
          { id: 'give', text: '"알았어, 한 번만 찍자"라고 마음을 바꾼다', result: '영상이 퍼지고 둘 다 곤란해진다.', impact: [{ who: '다온', text: '함께 곤란해진다', tone: -1 }], why: '관계를 지키려다 둘 다 다칠 수 있어요. 거절하면서도 관계는 지킬 수 있어요.' },
          { id: 'keep', text: '"너랑 노는 건 좋아. 흉내만 빼고 춤 영상 찍자"라고 한다', result: '다온이 웃으며 다른 영상을 찍자고 한다.', impact: [{ who: '다온', text: '관계가 이어진다', tone: 1 }], end: '관계를 지키며 거절했어요.',
            next: { text: '며칠 뒤 다온이 다른 친구와 흉내 영상을 찍었다는 말을 듣는다.', choices: [
              { id: 'talk', text: '다온에게 "그 영상 퍼지기 전에 지우자"고 말한다', result: '다온이 영상을 지운다.', impact: [{ who: '선생님', text: '조롱받지 않는다', tone: 1 }] },
              { id: 'spread', text: '다른 친구들에게 다온 흉을 본다', result: '다온이 반에서 고립된다.', impact: [{ who: '다온', text: '상처받는다', tone: -1 }], why: '친구의 잘못을 멈추게 하려면 흉이 아니라 직접 말해요.' }] } }] } },
      { id: 'later', text: '"생각해 볼게"라고 미룬다', result: '다온이 다른 친구와 찍어 올린다.', impact: [{ who: '선생님', text: '조롱받는다', tone: -1 }], why: '미루면 멈출 때를 놓쳐요. 그 자리에서 대안을 낼 수 있어요.', ending: '미루는 사이 영상이 올라갔어요.' }] };
    const MR = [{ id: 'r1', text: '함께 찍으면 나도 같은 행동을 한 사람이 된다' }, { id: 'r2', text: '거절하면서도 대안을 내면 관계를 지킬 수 있다' },
      { id: 'r3', text: '친한 친구 부탁은 들어줘야 한다', why: '친한 사이일수록 친구가 다치지 않게 멈출 수 있어요.' }, { id: 'r4', text: '내가 안 올리면 상관없다', why: '함께 찍으면 퍼짐에도 책임이 생겨요.' }];
    const MD2 = { text: '쉬는 시간, 친구 루아가 칠판에 선생님 얼굴을 우스꽝스럽게 그리며 "같이 그리자"고 한다. 곧 수업이 시작된다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'draw', text: '같이 그림에 말풍선을 단다', result: '수업에 들어온 선생님이 그림을 보고 말을 잃는다.', impact: [{ who: '선생님', text: '모욕을 느낀다', tone: -1 }], why: '여럿이 보는 칠판에 조롱 그림을 남기면 수업 전부터 상처가 돼요.', ending: '선생님이 그림을 보고 말을 잃었어요.' },
      { id: 'erase', text: '"수업 전에 지우자, 내가 도와줄게"라고 한다', result: '루아가 "재밌는데 아깝다"며 머뭇거린다.', impact: [{ who: '선생님', text: '모르는 곳에서 지켜진다', tone: 1 }], end: '지우자고 했어요.',
        next: { text: '루아가 "그럼 사진만 찍어 두고 지울게"라고 한다.', choices: [
          { id: 'photo', text: '"그래, 사진은 괜찮지"라고 한다', result: '사진이 단체방에 돈다.', impact: [{ who: '선생님', text: '조롱이 퍼진다', tone: -1 }], why: '사진으로 남기면 칠판을 지워도 조롱은 남아요.' },
          { id: 'clean', text: '"사진도 남기지 말자"며 같이 지운다', result: '칠판이 깨끗해지고 수업이 제때 시작된다.', impact: [{ who: '반 친구들', text: '수업을 제때 시작한다', tone: 1 }], end: '함께 지웠어요.',
            next: { text: '루아가 "너 때문에 재미없어졌어"라고 툴툴댄다.', choices: [
              { id: 'warm', text: '"점심때 같이 그림 그리기 하자"라고 한다', result: '루아가 웃으며 고개를 끄덕인다.', impact: [{ who: '루아', text: '관계가 이어진다', tone: 1 }] },
              { id: 'cold', text: '"네가 유치한 거야"라고 쏘아붙인다', result: '루아와 사이가 틀어진다.', impact: [{ who: '루아', text: '상처받는다', tone: -1 }], why: '말린 뒤에도 친구를 깎아내리지 않아요.' }] } }] } },
      { id: 'watch', text: '구경만 하며 웃는다', result: '다른 친구들도 몰려와 그림이 커진다.', impact: [{ who: '선생님', text: '모욕을 느낀다', tone: -1 }], why: '구경하며 웃는 것도 그림을 키우는 힘이 돼요.', ending: '구경하는 사이 그림이 커졌어요.' }] };
    const MR2 = [{ id: 'r1', text: '조롱 그림은 지워도 사진으로 남기지 않는다' }, { id: 'r2', text: '말린 뒤에도 친구와 함께할 일을 낸다' },
      { id: 'r3', text: '구경만 하면 상관없다', why: '구경하며 웃는 것도 분위기를 키워요.' }, { id: 'r4', text: '선생님이 못 보면 괜찮다', why: '본 사람이 퍼뜨리면 결국 알게 되고, 존중은 보는 사람이 없어도 지켜요.' }];
    const MORE = { reasons: [{ id: 'r5', text: '거절하는 말에 함께할 대안을 붙이면 친구가 덜 서운하다' }], ok: ['r5'] };
    const STOP_LINES = [['나', '(직접 말리기) ___', '"그만하자, 선생님 수업 중이야."'], ['나', '(주의 돌리기) ___', '"야, 이 문제 어떻게 풀어?"'], ['나', '(나중에 대화하기) ___', '"아까 그 말은 좀 심했던 것 같아."']];
    const STOP_X = ['"더 해 봐, 재밌다."', '"너 진짜 최악이다."'];

    ALL.push(
      // ---- 도입 ----
      M('intro.peer-graph', {
        title: '또래 반응과 행동이 이어진 비율', method: '또래 반응과 행동 자료', tool: 'chart', minutes: 7,
        levels: { easy: '값이 보이는 두 막대(말렸을 때·웃었을 때)를 견준다.', base: '두 비율의 차이를 읽고 그 뜻을 한 줄로 해석한다.', challenge: '이 자료로 캠페인 문구 하나를 지어 짝에게 말한다.' },
        intro: {
          teacher: '"친구가 선생님께 무례한 말을 했을 때, 주변 친구가 웃었는지 말렸는지에 따라 그 행동이 이어진 비율이 달랐을까요?" 가상 자료 막대그래프를 띄우고 시연 단추로 \'웃었을 때\' 막대가 골라지는 모습을 보인다. 이 자료는 수업용으로 지어낸 가상 자료라고 밝힌다. "나는 웃기만 했지 아무것도 안 했어요"라는 말에는 "그래프에서 웃음은 아무것도 아니었나요?"라고 되묻는다.',
          student: '가상 자료 막대그래프에서 주변 친구가 웃었을 때와 말렸을 때 행동이 이어진 비율을 견주고, 그 차이가 뜻하는 것을 생각해요.',
          demo: { tool: 'chart', options: CH('bar', '주변 반응에 따라 무례한 행동이 이어진 비율(가상 자료)', '%', PEER, { xLabel: '주변 친구의 반응', yLabel: '행동이 이어진 비율', max: 100, question: '행동이 더 많이 이어진 때는?', choices: PEER.map((d) => d[0]) }), sequence: [{ pick: 1 }] },
          art: { draw: 'a paper-cut classroom where a row of laughing paper faces stands on one side and a single student raising a calm hand on the other, two paper bars rising behind them', banner: '내 웃음도 힘이 된다', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
        notes: '그래프 값은 가상이다. 학생에게 무례한 장면에서 웃은 적이 있는지 묻지 않는다.',
      }),
      M('intro.laugh-branch', {
        title: '모두 웃는 교실에서 나의 반응', method: '모두 웃는 교실', tool: 'emotion', minutes: 7,
        levels: { easy: '보기 두 개(같이 웃기·수업 듣자고 말하기)의 결과를 견준다.', base: '보기 세 개의 결과와 반 분위기 변화를 견준다.', challenge: '각 보기를 고른 다음 수업 시간의 모습을 짝과 상상해 말한다.' },
        intro: {
          teacher: '"반 전체가 웃을 때 혼자 웃지 않는 것은 어려운 일일까요?" 갈래 판을 띄우고 시연 단추로 \'"수업 듣자"라고 작게 말한다\'를 고르는 모습과 결과를 보인다. "말리면 나만 이상해져요"라는 말에는 "작게 말하는 한마디도 몇몇의 웃음을 멈추게 하지 않았나요?"라고 되묻는다. 크게 나서지 않아도 할 수 있는 행동이 있다는 점을 짚는다. 장면 속 인물은 가상이다.',
          student: '친구가 선생님을 비꼬자 반이 웃는 장면에서 내 반응을 고르고, 결과와 반 분위기가 어떻게 달라지는지 살펴요.',
          demo: { tool: 'emotion', options: Object.assign({ mode: 'branch' }, LB), sequence: [{ choice: 'stop' }] },
          art: { draw: 'a paper-cut classroom with many paper faces laughing in waves, one student turning toward the teacher with a small calm speech bubble', banner: '모두 웃을 때 나는?', extra: [{ motif: 'wind', x: 300, y: 96 }] },
        },
        notes: '장면은 가상이다. "말리면 나만 이상해진다"는 오개념을 짚되, 말리지 못한 학생을 탓하지 않는다.',
      }),

      // ---- 활동 ----
      M('activity.mimic-dilemma', {
        title: '흉내 영상 찍자는 친구 갈림길', method: '선생님 흉내 영상 찍자는 친구', tool: 'dilemma', minutes: 15,
        levels: { easy: '갈림길 1번에서 고르고 결과를 본다.', base: '갈림길 2번을 따라 친구가 서운해할 때의 선택까지 가고 근거를 고른다.', challenge: '갈림길 3번까지 가고, 관계를 지키며 거절하는 근거 카드까지 고른다.' },
        activity: {
          title: '흉내 영상 찍자는 친구 갈림길', tool: 'dilemma',
          teacher: '"친한 친구의 부탁을 거절하면 친구를 잃을까요?" 학생마다 한 길을 끝까지 가 본 뒤 다른 길과 견주게 한다. "친구니까 한 번은 들어줘야죠"라는 말에는 "영상이 퍼지면 그 친구는 어떻게 될까요? 친구를 지키는 쪽은 어느 길일까요?"라고 되묻는다. 거절하면서 다른 할 일을 함께 내는 대사를 칠판에 모은다. 장면 속 인물은 가상이다.',
          task: '친구가 흉내 영상을 찍자고 하는 장면에서 길을 골라 결과를 따라가고, 끝에서 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '다온이 흉내 영상을 찍재요. 한 번 골라 결과를 보세요.', base: '다온이 흉내 영상을 찍재요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '다온이 흉내 영상을 찍재요. 세 번 골라 끝까지 가고, 관계를 지키는 근거도 고르세요.' },
              '흉내 영상 찍자는 친구', MD, [['no', 'keep', 'talk']], MR, ['r1', 'r2'], MORE),
            DIL({ easy: '루아가 칠판에 조롱 그림을 그리재요. 한 번 골라 결과를 보세요.', base: '루아가 칠판에 조롱 그림을 그리재요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '루아가 칠판에 조롱 그림을 그리재요. 세 번 골라 끝까지 가고, 관계를 지키는 근거도 고르세요.' },
              '칠판 위 조롱 그림', MD2, [['erase', 'clean', 'warm']], MR2, ['r1', 'r2'], MORE),
            { prompt: '다온 장면에서 관계를 지키며 거절하는 대사를 내 말로 지어 짝에게 말하고, 그 대사로 간 길의 결과를 견주어요.', free: true, toolOptions: { title: '흉내 영상 찍자는 친구', scene: cut(MD, 3), reasons: [], compare: true },
              conclude: '거절에 대안을 붙이면 선생님도, 친구와의 관계도 함께 지킬 수 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '친구의 부탁을 관계를 지키며 거절하는 대사를 한 문장으로 써요.' }] },
      }),
      M('activity.script-stop', {
        title: '말리는 세 방식 역할극 대본', method: '역할극 대본: 말리는 말', tool: 'story', minutes: 15,
        levels: { easy: '대본 빈칸 하나(직접 말리기)를 채우고, 놓으면 바로 맞는지 알려 준다.', base: '세 방식(직접 말리기·주의 돌리기·나중에 대화하기)의 대사 빈칸을 채우고 방식과 장점을 잇는다.', challenge: '방식마다 장점과 어려운 점을 견주어 대본 끝(활동지)에 적는다.' },
        activity: {
          title: '말리는 세 방식 역할극 대본', tool: 'story',
          teacher: '"말리는 방법은 \'그만해!\' 하나뿐일까요?" 세 방식의 대사를 채운 뒤 모둠이 소리 내어 읽고, 어느 방식이 어떤 상황에 맞는지 말하게 한다. "주의 돌리기는 말리는 게 아니잖아요"라는 말에는 "분위기를 바꿔 행동이 멈췄다면 그것도 멈추게 한 것 아닐까요?"라고 되묻는다. 말리는 말이 친구를 깎아내리는 말이 되지 않게 한다. 대본 속 인물은 가상이다.',
          task: '친구가 선생님을 비꼬는 장면에서 쓸 세 가지 말리는 방식의 대사를 대본 빈칸에 채워요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            IT(FB('세 방식의 대사 빈칸을 채우세요(함정 대사는 남겨요).', STOP_LINES, STOP_X, { title: '말리는 세 방식' }),
              FB('직접 말리기 대사 빈칸을 채우세요.', STOP_LINES.slice(0, 1), STOP_X.slice(0, 1), { title: '말리는 세 방식' }),
              null, { hints: ['친구를 놀리거나 깎아내리지 않으면서 행동을 멈추게 하는 말을 찾아요.'] }),
            IT(MB('말리는 방식마다 알맞은 상황을 이으세요.', [['직접 말리기', '행동이 막 시작될 때'], ['주의 돌리기', '정면으로 말하기 어려울 때'], ['나중에 대화하기', '여럿 앞에서 말하면 친구가 더 버틸 때']], ['모두가 같이 웃을 때 따라 웃기'], { topic: '언제 쓸까' }),
              MB('말리는 방식 두 가지에 알맞은 상황을 이으세요.', [['직접 말리기', '행동이 막 시작될 때'], ['주의 돌리기', '정면으로 말하기 어려울 때']], [], { topic: '언제 쓸까' })),
            IT(PB('말린 뒤 친구에게 할 말로 알맞은 것을 바구니에 담으세요.', '말린 뒤 할 말', [
              { id: 'm1', text: '"아까 말려서 서운했으면 미안"', ok: true }, { id: 'm2', text: '"점심때 같이 놀자"', ok: true },
              { id: 'm3', text: '"너 때문에 다 망했어"' }, { id: 'm4', text: '"다음엔 더 크게 혼날 거야"' }], { title: '말린 뒤' }),
              null, null, { conclude: '직접 말리기·주의 돌리기·나중에 대화하기 — 상황에 맞는 방식을 고르면 누구나 말릴 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '방식마다 장점과 어려운 점을 써요.', columns: ['방식', '장점', '어려운 점'], cells: [['직접 말리기', '', ''], ['주의 돌리기', '', ''], ['나중에 대화하기', '', '']] }] },
      }),
      M('activity.school-poster', {
        title: '학교 존중 캠페인 포스터 설계', method: '학교 존중 캠페인 포스터', tool: 'collage', minutes: 15,
        levels: { easy: '조각 고르개가 줄어든 판에 구호 자리 하나를 꾸민다.', base: '자료 근거·구호·행동 제안 세 요소를 조각으로 꾸미고 장마다 점검한다.', challenge: '학부모·선생님 대상 문구 칸을 한 칸 더 넣었는지 점검한다.' },
        activity: {
          title: '학교 존중 캠페인 포스터 설계', tool: 'collage',
          teacher: '"오늘 본 가상 자료에서 어떤 숫자가 포스터에 들어가면 좋을까요?" 모둠이 자료 근거·구호·행동 제안을 활동지에 먼저 쓰고 조각으로 꾸미게 한다. 숫자를 지어내는 모둠에게 "그 숫자는 어디서 왔나요? 가상 자료라면 \'가상\'이라고 밝혀요"라고 말한다. 실제 선생님·학생 사진과 이름은 넣지 않는다.',
          task: '학교 게시용 존중 캠페인 포스터를 자료 근거·구호·행동 제안 조각으로 꾸미고 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '포스터 위쪽에 구호 자리와 \'함께\'를 나타내는 조각을 꾸미고 점검하세요.', toolOptions: { shapes: ['circle', 'square', 'rect', 'triangle', 'star', 'heart'] }, target: { selfCheck: ['구호 자리가 눈에 띈다', '함께하는 모습을 조각으로 나타냈다', '실제 사람 얼굴·이름을 넣지 않았다'], minPieces: 3 }, difficulty: 0.2 },
              { toolOptions: { shapes: ['circle', 'square', 'rect'] } }),
            IT({ prompt: '가운데에 자료 근거(웃음과 말림의 차이)를 크기가 다른 조각으로 나타내고 점검하세요.', toolOptions: { shapes: ['circle', 'square', 'rect', 'triangle'] }, target: { has: [{ size: 's', min: 1 }, { size: 'l', min: 1 }], selfCheck: ['크기 차이로 자료의 차이를 보였다', '\'가상 자료\'라고 밝힐 자리를 남겼다'], minPieces: 2 }, difficulty: 0.3 }),
            IT({ prompt: '아래쪽에 행동 제안(말리기·주의 돌리기·알리기)을 조각 셋 이상으로 꾸미고 점검하세요.', toolOptions: { shapes: ['circle', 'square', 'rect', 'triangle', 'star', 'heart', 'leaf'] }, target: { selfCheck: ['행동 제안을 셋 이상 나타냈다', '누구도 비하하지 않는다'], minPieces: 3 }, difficulty: 0.3 },
              null,
              { prompt: '행동 제안 옆에 학부모·선생님 대상 문구 칸을 하나 더 꾸미고 점검하세요(대상 더하기).', target: { selfCheck: ['행동 제안을 셋 이상 나타냈다', '누구도 비하하지 않는다', '학부모·선생님 대상 칸을 더했다'], minPieces: 4 } },
              { conclude: '근거가 있고, 할 일을 알려 주고, 누구도 깎아내리지 않는 포스터가 존중 문화를 만들어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '포스터 문구를 먼저 써요.', columns: ['요소', '문구'], cells: [['자료 근거', ''], ['구호', ''], ['행동 제안', '']], answer: '(예) 웃을 때 74%, 말릴 때 18%(가상 자료) — 내 웃음도 힘이 된다 — 웃음 대신 "수업 듣자"' }] },
      }),
      M('activity.slogan-write', {
        title: '존중 캠페인 문구 세 개 쓰기', method: '캠페인 문구 쓰기', tool: 'rubric-writing', minutes: 15,
        levels: { easy: '문장 틀을 보고 문구 하나를 쓰고 기준표로 점검한다.', base: '문구 세 개를 쓰고 기준표(짧다·행동을 말한다·누구도 비하하지 않는다)로 평가해 하나를 고른다.', challenge: '반 투표로 고른 문구를 다듬어 다시 쓴다(기준 하나 더).' },
        activity: {
          title: '존중 캠페인 문구 세 개 쓰기', tool: 'rubric-writing',
          teacher: '"\'선생님께 무례하지 말자\'와 \'웃음 대신 한마디, 수업 듣자\' 가운데 어느 쪽이 행동을 떠올리게 할까요?" 문구를 세 개 쓴 뒤 기준표로 점검하고 가장 좋은 하나를 고르게 한다. 특정 학생이나 반을 떠올리게 하는 문구에는 "이 문구를 읽은 누군가가 놀림받는다고 느끼지 않을까요?"라고 되묻는다.',
          task: '존중 캠페인 문구를 쓰고 기준표(짧다·행동을 말한다·누구도 비하하지 않는다)로 평가해 가장 좋은 것을 골라요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '캠페인 문구 ①을 한 문장으로 쓰세요.', toolOptions: { topic: '또래가 만드는 존중 문화 캠페인 문구 ①을 쓰세요.', minChars: 6, maxChars: 60, title: '문구 ①', lines: 2 }, target: { selfCheck: ['한 줄로 짧다', '할 행동을 말한다', '누구도 비하하지 않는다'], sentences: [1, 2] }, difficulty: 0.2 },
              { toolOptions: { starter: '~ 대신 ~, ~!' } }),
            IT({ prompt: '문구 ①과 다른 행동을 담은 문구 ②를 쓰세요.', toolOptions: { topic: '문구 ①과 다른 행동(주의 돌리기·알리기 등)을 담은 문구 ②를 쓰세요.', minChars: 6, maxChars: 60, title: '문구 ②', lines: 2 }, target: { selfCheck: ['한 줄로 짧다', '문구 ①과 다른 행동을 말한다', '누구도 비하하지 않는다'], sentences: [1, 2] }, difficulty: 0.25 },
              { toolOptions: { starter: '~할 때 ~하기!' } }),
            IT({ prompt: '문구 ③을 쓰고, 세 문구 가운데 가장 좋은 것과 그 까닭을 한 문장 덧붙이세요.', toolOptions: { topic: '문구 ③을 쓰고, 세 문구 가운데 가장 좋은 것과 까닭을 덧붙이세요.', minChars: 20, maxChars: 200, title: '문구 ③과 고르기', lines: 3 }, target: { selfCheck: ['문구 ③이 짧다', '가장 좋은 문구를 골랐다', '고른 까닭을 썼다'], sentences: [2, 3] }, difficulty: 0.3 },
              null,
              { prompt: '반 투표로 고른 문구를 다듬어 다시 쓰고, 고친 점을 한 문장 덧붙이세요.', toolOptions: { topic: '반 투표로 고른 문구를 더 짧고 분명하게 다듬고, 고친 점을 덧붙이세요.' }, target: { selfCheck: ['문구가 짧다', '할 행동이 분명하다', '누구도 비하하지 않는다', '고친 점을 썼다'], sentences: [2, 3] } },
              { conclude: '좋은 캠페인 문구는 짧고, 할 행동을 말하고, 누구도 깎아내리지 않아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '문구 세 개를 기준표로 평가해요(○·△).', columns: ['문구', '짧다', '행동', '비하 없음'], cells: [['①', '', '', ''], ['②', '', '', ''], ['③', '', '', '']] }] },
      }),

      // ---- 정리 ----
      M('wrap.two-week', {
        title: '2주 존중 실천 기록판 만들기', method: '2주 실천 기록', tool: 'timer', minutes: 7,
        levels: { easy: '행동 하나(말리기)의 2주 목표 횟수 칸만 적는다.', base: '세 행동(말리기·주의 돌리기·알리기)의 2주 목표 횟수를 기록판에 적고 점검한다.', challenge: '활동지 기록표 끝에 실천 뒤 느낀 점 칸을 더한다.' },
        wrap: {
          teacher: '"오늘 고른 행동을 2주 동안 몇 번 해 볼 수 있을까요?" 기록판에 행동마다 목표 횟수를 적게 한다. 목표가 지나치게 큰 학생에게 "그런 상황이 2주 동안 몇 번이나 생길까요? 0번이어도 괜찮아요"라고 말한다. 기록은 걷지 않고 2주 뒤 스스로 돌아본다고 알린다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '2주 존중 실천 기록판', unit: '번', fields: [{ label: '말리기 목표', unit: '번' }, { label: '주의 돌리기 목표', unit: '번' }, { label: '알리기 목표', unit: '번' }] },
              prompt: '세 행동의 2주 목표 횟수를 기록판에 모두 적으세요(0번도 괜찮아요).', target: { records: true, selfCheck: ['목표가 지킬 수 있는 크기다', '기록할 날을 정했다'] }, difficulty: 0.15 },
            { type: 'choice', prompt: '"말리면 나만 이상해진다"는 말에 대한 반박으로 알맞은 것은?', options: ['그래서 모른 척하는 게 낫다', '작은 한마디나 주의 돌리기로도 분위기를 바꿀 수 있다', '말리는 건 선생님 몫이다'], answer: 1, difficulty: 0.2, explain: '크게 나서지 않아도 웃음 대신 하는 한마디가 행동을 멈추게 해요.' },
            MOOD,
          ],
        },
        worksheet: { title: '2주 존중 실천 기록', items: [
          { type: 'table', prompt: '2주 동안 해 본 날에 표시해요(걷지 않아요).', columns: ['행동', '1주', '2주'], cells: [['말리기', '', ''], ['주의 돌리기', '', ''], ['알리기', '', '']] },
          { type: 'short', prompt: '세 행동 가운데 가장 해 보고 싶은 것과 그 까닭을 써요.' }] },
        notes: '기록판은 목표 횟수만 적는다(실제 실천은 2주 동안 활동지에). 학생이 겪거나 본 침해 장면은 적게 하지 않는다.',
      }),
      M('wrap.idea-map', {
        title: '존중하는 학교 아이디어 그물', method: '우리 학교 존중 문화 아이디어', tool: 'mindmap', minutes: 7,
        levels: { easy: '가지 하나(나)에 아이디어 카드를 고른다.', base: '가지 세 개(학생회·학급·나)에 아이디어 카드를 나눈다(함정 카드 하나).', challenge: '활동지에 학생회에 낼 제안 하나를 골라 쓴다.' },
        wrap: {
          teacher: '"존중하는 학교는 누가 만들까요?" 학생회·학급·나 가지에 아이디어 카드를 나눈 뒤 학생회에 낼 만한 아이디어를 하나 고르게 한다. "학생회가 알아서 하겠죠"라는 말에는 "\'나\' 가지에 놓인 카드는 오늘 바로 할 수 있지 않나요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: SB('', ['학생회', '학급', '나'], [
              { id: 'g1', text: '존중 캠페인 주간을 연다', to: '학생회' }, { id: 'g2', text: '캠페인 포스터 공모를 한다', to: '학생회' },
              { id: 'c1', text: '수업 약속을 학급 회의로 정한다', to: '학급' }, { id: 'c2', text: '불만 안건 상자를 둔다', to: '학급' },
              { id: 'n1', text: '웃음 대신 "수업 듣자" 한마디', to: '나' }, { id: 'n2', text: '흉내 영상은 받으면 멈춘다', to: '나' },
              { id: 't1', text: '마음에 안 드는 선생님 순위를 낸다' }], { topic: '존중하는 학교' }).toolOptions,
              prompt: '아이디어 카드를 학생회·학급·나 가지에 나누세요(어디에도 안 맞는 카드는 남겨요).',
              target: { sort: { 학생회: ['g1', 'g2'], 학급: ['c1', 'c2'], 나: ['n1', 'n2'] } }, difficulty: 0.2 },
            { type: 'choice', prompt: '교육활동 침해를 막는 데 또래가 할 수 있는 일로 알맞은 것은?', options: ['내가 안 했으면 상관없다', '웃음 대신 말리거나 주의를 돌린다', '선생님이 혼자 해결하게 둔다'], answer: 1, difficulty: 0.15, explain: '주변의 반응이 행동이 이어질지를 바꿔요.' },
            MOOD,
          ],
        },
        worksheet: { title: '존중하는 학교 아이디어', items: [
          { type: 'short', prompt: '학생회에 낼 존중 문화 제안 하나를 써요.' },
          { type: 'check', prompt: '내가 다음 주에 해 볼 일에 표시해요.', options: ['웃음 대신 한마디', '흉내 영상 멈추기', '학급 회의에 안건 내기'] }] },
      }),
    );
  }

  PaperLessons.registerModules(ALL);
})();
