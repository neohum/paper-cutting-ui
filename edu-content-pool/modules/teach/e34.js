/* 창체 법정교육 교육활동 존중(침해 예방) — 초3-4 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/mandatory.json 의 teach 초3-4.
 * 근거: 교원지위법에 따른 교육활동 침해행위 예방교육(초·중·고 연 1회 이상, 학생 활동 중심 예방교육 — research-mandatory §1),
 *   인성교육 핵심가치 존중·책임·협동(research-mandatory §2). 침해 유형 예시(몰래 찍기·무례한 말·수업 방해)는 교육 일반 지식이라 근거가 약하다.
 * 초3-4 기준: 상황 판단(그림+짧은 글), 차례 정하기, 고른 이유 말하기, 짝 토의, 간단한 표·그림그래프. 법 조문·통계 해석·긴 글쓰기는 쓰지 않는다.
 * 선생님·친구의 배울 권리를 존중하는 '행동' 수준으로만 다룬다. 장면 속 인물(준·하나·하람·도아·서진)과 투표·횟수 자료는 직접 지은 가상의 것이다.
 *   특정 교사·학생을 탓하지 않고, 학생에게 선생님께 무례했던 일·수업을 방해받은 일 같은 겪은 일을 묻지 않는다.
 * 주제 3개(3학년 1 · 4학년 1 · 3-4학년 1) × 도입 2 · 활동 4 · 정리 2 = 계획 모듈 24개.
 *
 * 사람 확인: 근거 파일(research-mandatory.md)에 세부 내용이 없어 일반 학교생활 안내로 쓴 문장 — 공식 안내처에서 확인한다.
 *   - 수업 중 허락 없이 선생님·친구를 찍는 것은 교육활동을 방해하고 상대의 마음을 다치게 한다 (respect-ways.intro.filming-branch, activity.respect-rude·filming-result, wrap.today-check, class-promise.activity.can-keep)
 *     → 교육부 교육활동 보호 안내(교육활동 침해행위 유형) / 시·도교육청 교원치유지원센터(교육활동보호센터)
 *   - 찍은 사진·영상이 한 번 퍼지면 모두 지우기 어렵고 모르는 사람도 볼 수 있다 (respect-ways.activity.filming-result)
 *     → 개인정보보호위원회 / 방송통신위원회 디지털 시민 안내
 *   - 속상한 일은 마음을 가라앉힌 뒤 쉬는 시간에 "저는 ~해서 속상했어요"처럼 바른 말로 전하고 함께 방법을 찾는다 (respect-ways.activity.complain-order, wrap.today-check)
 *     → 교육부 교육활동 보호 안내 / 학교 생활 규정
 *   - 수업 한 시간은 40분, 연습용 시작 시각 9시는 학교마다 다르다 (class-time.intro.class-clock) → 학교 일과표
 *   - 수업 중 휴대폰은 가방·보관함에 넣어 둔다 (class-time.activity.keep-break, wrap.ready-check) → 각 학교 생활 규정(학교마다 다름)
 *   - 학급 약속은 의견 내기 → 이유 말하기 → (다른 의견 듣기) → 투표 → 붙이기 차례로 함께 정한다 (class-promise.activity.meeting-order) → 학급 자치 안내(시·도교육청)
 */
(function () {
  const BASE = { schema: 'edu-module.v1', domain: 'teach', band: '초3-4' };
  const T = (topic, grades) => (o) => Object.assign({}, BASE, { topic: `teach.e34.${topic}`, grades }, o);
  const M = [];
  const strip = (p) => String(p).replace(/[.?!]$/, '');
  const idOf = (c) => (typeof c === 'string' ? c : c.id);
  const mix = (groups) => { const out = []; const n = Math.max(...groups.map((g) => g.length)); for (let i = 0; i < n; i++) for (const g of groups) if (g[i] != null) out.push(g[i]); return out; };
  const count = (groups) => groups.reduce((a, g) => a + g.length, 0);
  const slotId = (s) => (typeof s === 'string' ? s : s.id);
  const sortT = (slots, groups) => ({ sort: Object.fromEntries(slots.map((s, i) => [slotId(s), groups[i].map(idOf)])) });

  // 나누기(sortboard·mindmap sort): 기본 = groups, 쉬움 = 앞 easySlots 칸만·칸마다 앞 ne장, 도전 = 칸마다 hard 카드를 더함
  const SORT = (prompt, base, slots, groups, ne, hard, d, more, easySlots) => {
    const es = easySlots || slots.length;
    const easyS = slots.slice(0, es);
    const easyG = groups.slice(0, es).map((g, i) => g.slice(0, Array.isArray(ne) ? ne[i] : ne));
    const hardG = groups.map((g, i) => g.concat(hard[i] || []));
    const p = strip(prompt);
    return {
      prompt, toolOptions: Object.assign({}, base, { slots, cards: mix(groups) }), target: sortT(slots, groups), difficulty: d,
      levels: {
        easy: { prompt: `${p}(${count(easyG)}장).`, toolOptions: { slots: easyS, cards: mix(easyG) }, target: sortT(easyS, easyG) },
        challenge: { prompt: `${p}(${count(hardG)}장).`, toolOptions: { cards: mix(hardG) }, target: sortT(slots, hardG) },
      },
      ...more,
    };
  };

  // 차례 놓기(story order): 기본 = 장면 4장, 쉬움 = drop 번째 장면을 뺀 3장, 도전 = 틀린 장면(trap) 한 장이 섞인다
  const SLOTS = { 3: ['처음', '다음', '끝'], 4: ['처음', '다음', '그다음', '끝'] };
  const ORD = (prompt, base, steps, drop, trap, d, more) => {
    const ids = steps.map((c) => c.id);
    const easy = steps.filter((_, i) => i !== drop);
    const p = strip(prompt);
    return {
      prompt, toolOptions: Object.assign({}, base, { mode: 'order', slots: SLOTS[steps.length], cards: steps.slice().reverse() }), target: { order: ids }, difficulty: d,
      levels: {
        easy: { prompt: `${p}(3장).`, toolOptions: { slots: SLOTS[3], cards: easy.slice().reverse() }, target: { order: easy.map((c) => c.id) } },
        challenge: { prompt: `${p}. 틀린 카드 한 장은 빼요.`, toolOptions: { cards: [steps[1], trap, steps[3], steps[0], steps[2]] }, target: { order: ids } },
      },
      ...more,
    };
  };

  // 회의 차례(story order): 기본 4장, 쉬움 = drop 번째를 뺀 3장, 도전 = 다섯째 장면(extra)을 at 자리에 끼워 5장
  const MEET = (prompt, steps, drop, extra, at, d, more) => {
    const ids = steps.map((c) => c.id);
    const easy = steps.filter((_, i) => i !== drop);
    const five = steps.slice(0, at).concat(extra, steps.slice(at));
    const p = strip(prompt);
    return {
      prompt, toolOptions: { mode: 'order', slots: SLOTS[4], cards: steps.slice().reverse() }, target: { order: ids }, difficulty: d,
      levels: {
        easy: { prompt: `${p}(3장).`, toolOptions: { slots: SLOTS[3], cards: easy.slice().reverse() }, target: { order: easy.map((c) => c.id) } },
        challenge: { prompt: `${p}. 다른 생각 장면도 넣어요.`, toolOptions: { slots: 5, cards: five.slice().reverse() }, target: { order: five.map((c) => c.id) } },
      },
      ...more,
    };
  };

  // 말풍선 빈칸(story fill): rows = [[칸 글, 정답 카드], …] 기본 앞 2줄, 쉬움 1줄, 도전 3줄. traps = 틀린 카드
  const FILL = (prompt, who, rows, traps, d, more) => {
    const slots = rows.map((r, i) => ({ id: `r${i + 1}`, who, label: r[0] }));
    const tg = (n) => ({ fill: Object.fromEntries(rows.slice(0, n).map((r, i) => [`r${i + 1}`, r[1]])) });
    const cards = (n) => rows.slice(0, n).map((r) => r[1]).concat(traps.slice(0, n === 1 ? 1 : traps.length)).reverse();
    const p = strip(prompt);
    return {
      prompt, toolOptions: { mode: 'fill', slots: slots.slice(0, 2), cards: cards(2) }, target: tg(2), difficulty: d,
      levels: {
        easy: { prompt: `${p}(빈칸 1개).`, toolOptions: { slots: slots.slice(0, 1), cards: cards(1) }, target: tg(1) },
        challenge: { prompt: `${p}(빈칸 3개).`, toolOptions: { slots, cards: cards(3) }, target: tg(3) },
      },
      ...more,
    };
  };

  // 콜라주 출구 질문: 쉬움 easyN조각, 기본 baseN조각, 도전 baseN조각 + 점검 한 칸 더
  const POSTER = (prompt, options, checks, extraCheck, easyN, baseN) => ({
    type: 'tool', tool: 'collage', options, prompt, target: { selfCheck: checks, minPieces: baseN }, difficulty: 0.1,
    levels: { easy: { target: { selfCheck: checks, minPieces: easyN } }, challenge: { target: { selfCheck: checks.concat(extraCheck), minPieces: baseN } } },
  });
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  const BOARD_LV = { easy: { instant: true, showCount: true }, base: {}, challenge: { shuffle: true } };
  const CARD_LV = { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } };
  const FICTION = '장면 속 인물은 모두 가명의 가상 인물이다. "선생님께 버릇없게 한 적 있나요?", "누가 수업을 방해했나요?"처럼 학생이 겪은 일이나 우리 반 실제 친구·선생님을 예로 묻지 않고, 그림 속 친구의 일로만 이야기한다.';

  // ======================================================================================================
  // 3학년 · 선생님과 친구의 배움을 존중하는 방법
  // ======================================================================================================
  {
    const C = T('respect-ways', [3]);
    const NICE = [['고맙습니다', 8], ['질문 있어요', 6], ['다시 설명해 주세요', 4]];
    const LIGHT = { shapes: ['circle', 'star', 'heart', 'square'], colors: ['빨강', '노랑', '초록', '파랑', '분홍', '하양'], maxPieces: 14 };
    M.push(
      C({
        id: 'teach.e34.respect-ways.intro.filming-branch', type: 'intro', title: '수업 중 몰래 찍는 친구',
        method: '몰래 찍는 친구 장면', tool: 'emotion', minutes: 6,
        levels: { easy: '보기 2개(같이 웃는다·"찍지 말자" 말한다)만 함께 읽고 하나를 고른다.', base: '보기 3개(못 본 척한다 포함)를 읽고 고른 뒤 결과 장면과 선생님·친구 마음을 본다.', challenge: '고른 까닭을 짝에게 말하고, 칠판의 이유 카드(수업이 멈춰요·선생님 마음이 다쳐요·사진이 퍼져요) 가운데 하나를 고른다(교사 진행).' },
        intro: {
          teacher: '"수업 시간에 준이가 태블릿으로 선생님을 몰래 찍고 있어요. 옆에 앉은 나는 어떻게 할까요?" 보기를 하나씩 읽고 손을 들어 고르게 한 뒤, 시연 단추로 \'"찍지 말자" 말한다\'를 골라 결과 장면을 보인다. "재미로 찍는 건 괜찮아요"라는 말이 나오면 "찍힌 선생님은 재미있을까요? 그 사진이 다른 반까지 퍼지면 어떨까요?"라고 되묻는다. 오늘은 선생님과 친구의 배움을 지키는 행동을 배운다고 밝힌다.',
          student: '준이가 수업 중에 선생님을 몰래 찍어요. 나라면 어떻게 할지 고르고, 그때 선생님과 친구 마음을 생각해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'branch', who: '준', situation: '수업 중 준이가 태블릿으로 선생님을 몰래 찍어요.', choices: [
            { id: 'laugh', text: '같이 웃는다', result: '수업이 멈추고 선생님이 속상해하셨어요.', mood: '속상함' },
            { id: 'stop', text: '"찍지 말자" 말한다', result: '준이가 태블릿을 내려놓고 수업이 이어졌어요.', mood: '편안함' },
            { id: 'look', text: '못 본 척한다', result: '준이가 계속 찍고 다른 친구들도 웃었어요.', mood: '걱정' },
          ] }, sequence: [{ choice: 'stop' }] },
          art: { draw: 'a paper classroom, a paper boy secretly holding up a tablet toward the teacher at the blackboard, a classmate next to him gently shaking her head', banner: '찍지 말자', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: FICTION,
      }),
      C({
        id: 'teach.e34.respect-ways.intro.nice-graph', type: 'intro', title: '선생님이 들으면 기분 좋은 말',
        method: '들으면 기분 좋은 말 그림그래프', tool: 'chart', minutes: 6,
        levels: { easy: '그림 수를 함께 세며 "고맙습니다" 줄을 읽는다.', base: '세 말의 그림 수를 견주어 가장 많은 말을 고른다.', challenge: '우리 반 그래프를 만든다면 더하고 싶은 말 하나를 짝과 고른다(교사 진행).' },
        intro: {
          teacher: '"가상의 3학년 한 반이 \'선생님이 들으면 기분 좋은 말\'에 투표했어요. 큰 사람 그림 하나는 5명이에요." 줄마다 그림 수를 함께 세고 시연 단추로 \'고맙습니다\'가 골라지는 것을 보인다. "질문하면 선생님이 귀찮아하세요"라는 말이 나오면 "\'질문 있어요\'에도 그림이 많아요. 선생님은 왜 질문을 반기실까요?"라고 되물어 질문도 배움을 존중하는 말이라는 것을 짚는다.',
          student: '그림그래프를 읽고 선생님이 들으면 기분 좋은 말 가운데 가장 많이 고른 말을 찾아보아요.',
          demo: { tool: 'chart', options: { type: 'picture', mode: 'read', title: '선생님이 들으면 기분 좋은 말(가상 투표)', unit: '명', xLabel: '말', yLabel: '고른 친구 수', data: NICE, icons: [{ value: 5, name: '5명' }, { value: 1, name: '1명' }], icon: 'person', question: '가장 많이 고른 말은?', choices: ['고맙습니다', '질문 있어요', '다시 설명해 주세요'] }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper picture graph with rows of small paper people next to three speech bubbles, a smiling paper teacher holding a book', banner: '기분 좋은 말', extra: [{ motif: 'flower', x: 300, y: 96 }] },
        },
        notes: '투표 자료는 가상의 반이다. 우리 반 학생에게 선생님께 한 말을 떠올려 발표하게 하지 않는다.',
      }),
      C({
        id: 'teach.e34.respect-ways.activity.respect-rude', type: 'activity', title: '존중하는 행동·무례한 행동',
        method: '존중·무례 행동과 이유', tool: 'sortboard', minutes: 14,
        levels: { easy: '카드 4장을 두 바구니에 나누고, 틀리면 바로 돌아오며 바구니마다 장 수가 보인다.', base: '카드 6장을 나누고, 둘째 문항에서 까닭 카드 6장도 \'배움을 도와요·막아요\'로 나눈다.', challenge: '카드 8장을 나누고, 셋째 문항에서 무례한 행동을 존중하는 행동으로 바꾼 카드를 골라 넣는다.' },
        activity: {
          title: '존중하는 행동·무례한 행동', tool: 'sortboard',
          teacher: '"이 행동은 선생님과 친구의 배움을 존중하나요, 무례한가요? 왜 그렇게 생각해요?" 카드를 넣을 때마다 "○○는 ○○해서 존중(무례)이에요" 틀로 말하게 한다. \'선생님 몰래 찍기\'를 장난이라며 존중 쪽에 두려는 학생에게 "찍힌 사람이 허락했나요? 수업은 어떻게 될까요?"라고 묻는다. 무례한 행동도 바꿀 수 있다는 것을 셋째 문항에서 짚는다.',
          task: '수업 장면 카드를 존중하는 행동과 무례한 행동 바구니에 나누고, 까닭과 바꾼 행동도 나누어요.', levels: BOARD_LV,
          items: [
            SORT('수업 장면 카드를 두 바구니에 나누어요.', {}, ['존중해요', '무례해요'],
              [['손 들고 질문하기', '차례 기다리기', '"고맙습니다" 말하기'], ['선생님 몰래 찍기', '친구 발표 비웃기', '친구 별명 부르기']], 2, [['발표 끝까지 듣기'], ['말 따라 하며 놀리기']], 0.15),
            SORT('이 행동들이 배움에 주는 까닭을 나누어요.', {}, ['배움을 도와요', '배움을 막아요'],
              [['모두 집중할 수 있어요', '궁금한 것이 풀려요', '선생님이 힘이 나요'], ['수업이 멈춰요', '친구가 발표를 겁내요', '선생님 마음이 다쳐요']], 2, [['친구도 따라 물어봐요'], ['사진이 퍼질 수 있어요']], 0.2),
            SORT('무례한 행동을 바꾼 카드를 골라 넣어요.', {}, ['존중으로 바꿨어요', '아직 무례해요'],
              [['비웃기 대신 박수', '찍기 대신 필기', '별명 대신 이름'], ['비웃기 대신 흉내', '찍기 대신 몰래 녹음', '별명 대신 놀림말']], 2, [['끼어들기 대신 손 들기'], ['떠들기 대신 쪽지 장난']], 0.25,
              { conclude: '존중하는 행동은 모두의 배움을 돕고, 무례한 행동은 수업을 멈춰요. 무례한 행동도 바꿀 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '존중하는 행동이면 ○, 무례한 행동이면 ×를 써요.', columns: ['행동', '○ / ×'], cells: [['손 들고 질문하기', ''], ['선생님 몰래 찍기', ''], ['차례 기다리기', ''], ['친구 발표 비웃기', '']], answer: '○, ×, ○, ×' }] },
        notes: FICTION,
      }),
      C({
        id: 'teach.e34.respect-ways.activity.complain-order', type: 'activity', title: '속상할 때 바르게 말하는 차례',
        method: '불만을 바르게 말하는 차례', tool: 'story', minutes: 14,
        levels: { easy: '장면 3장을 차례로 놓고, 놓으면 바로 맞는지 알려 준다.', base: '장면 4장(가라앉히기 → 쉬는 시간에 가기 → "저는 ~해서 속상했어요" → 함께 방법 찾기)을 차례로 놓는다.', challenge: '틀린 장면 1장이 섞인 5장에서 그것을 빼고 4장을 놓은 뒤, 말풍선에 넣을 내 말을 활동지에 지어 쓴다.' },
        activity: {
          title: '속상할 때 바르게 말하는 차례', tool: 'story',
          teacher: '"속상한 마음이 들 때 맨 먼저 할 일은 무엇일까요? 언제 가서 말하면 좋을까요?" 장면을 다 놓으면 차례대로 소리 내어 읽고, 셋째 장면의 말을 짝과 실제로 주고받게 한다. "속상하면 그 자리에서 크게 따져야 해요"라는 학생에게 "수업 중에 크게 따지면 다른 친구들의 배움은 어떻게 될까요? 내 마음은 잘 전해질까요?"라고 묻는다. 속상한 마음은 나쁜 것이 아니라 전하는 차례와 말이 중요하다는 것을 짚는다.',
          task: '속상한 마음을 바르게 전하는 장면 카드를 차례대로 놓아요.', levels: CARD_LV,
          items: [
            ORD('발표 차례를 못 받아 속상할 때 차례로 놓아요.', {}, [{ id: 'calm', text: '숨 쉬며 가라앉히기' }, { id: 'go', text: '쉬는 시간에 선생님께' }, { id: 'say', text: '"저는 ~해서 속상했어요"' }, { id: 'find', text: '함께 방법 찾기' }], 1,
              { id: 'shout', text: '수업 중에 크게 따지기', why: '수업 중에 크게 따지면 모두의 배움이 멈추고 마음도 잘 전해지지 않아요.' }, 0.15),
            ORD('모둠에서 내 생각이 빠져 속상할 때 놓아요.', {}, [{ id: 'calm', text: '잠깐 숨 고르기' }, { id: 'go', text: '활동 끝나고 다가가기' }, { id: 'say', text: '"내 생각도 듣고 싶어"' }, { id: 'find', text: '돌아가며 말하기로 정함' }], 0,
              { id: 'push', text: '친구 공책 밀치기', why: '밀치면 친구가 다치거나 더 속상해요. 말로 전해요.' }, 0.2),
            ORD('설명을 못 알아들어 답답할 때 놓아요.', {}, [{ id: 'mark', text: '모르는 곳 표시하기' }, { id: 'hand', text: '손 들고 기다리기' }, { id: 'say', text: '"다시 설명해 주세요"' }, { id: 'try', text: '다시 듣고 해 보기' }], 3,
              { id: 'yell', text: '모르겠다고 소리치기', why: '소리치면 다른 친구의 배움이 멈춰요. 손 들고 부탁해요.' }, 0.25,
              { conclude: '속상할 때는 마음을 가라앉히고, 알맞은 때에 "저는 ~해서 속상했어요"라고 말한 뒤 함께 방법을 찾아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '말풍선에 들어갈 내 말을 써요.', text: '"저는 ___해서 속상했어요. 다음에는 ___."' }] },
        notes: FICTION + ' 속상한 마음을 꺼내 보라고 하지 않고, 장면 속 친구의 일로만 차례를 익힌다.',
      }),
      C({
        id: 'teach.e34.respect-ways.activity.filming-result', type: 'activity', title: '몰래 찍으면 생기는 일',
        method: '몰래 찍으면 생기는 일', tool: 'mindmap', minutes: 14,
        levels: { easy: '가지 2개에 결과 카드 4장을 붙이고, 놓으면 바로 맞는지 알려 준다.', base: '가지 3개(선생님 마음·수업·사진이 퍼지면)에 카드 6장을 붙이고, 셋째 문항에서 대신할 행동 카드를 붙인다.', challenge: '헷갈리는 카드 3장이 더해진 9장을 붙이고, 대신할 행동도 가지마다 한 장씩 더 붙인다.' },
        activity: {
          title: '몰래 찍으면 생기는 일', tool: 'mindmap',
          teacher: '"몰래 찍으면 선생님 마음은 어떨까요? 수업은요? 그 사진이 퍼지면요?" 가지마다 카드를 붙이고 "몰래 찍으면 ○○해요" 틀로 말하게 한다. "찍고 바로 지우면 괜찮아요"라는 학생에게 "찍는 순간 선생님 마음과 수업은 어떻게 됐을까요? 지우기 전에 누가 봤을 수도 있지 않을까요?"라고 묻는다. 셋째 문항에서 찍고 싶을 때 대신할 행동을 함께 정한다.',
          task: '가운데 "몰래 찍기"에서 생기는 일 카드를 가지에 붙이고, 대신할 행동도 붙여요.', levels: CARD_LV,
          items: [
            SORT('수업 중 선생님을 몰래 찍으면 생기는 일을 붙여요.', { topic: '몰래 찍기' }, ['선생님 마음', '수업', '사진이 퍼지면'],
              [['속상해요', '믿음이 깨져요'], ['수업이 멈춰요', '친구들도 못 배워요'], ['지우기 어려워요', '모르는 사람도 봐요']], 2, [['걱정'], ['다시 설명해야 해요'], ['오래 남아요']], 0.15, {}, 2),
            SORT('쉬는 시간 친구를 몰래 찍으면 생기는 일을 붙여요.', { topic: '친구 몰래 찍기' }, ['친구 마음', '우리 반', '사진이 퍼지면'],
              [['부끄러워요', '화가 나요'], ['서로 못 믿어요', '반이 시끄러워요'], ['놀림거리가 돼요', '다른 반도 봐요']], 2, [['무서움'], ['다툼이 생겨요'], ['지워도 남아요']], 0.2, {}, 2),
            SORT('찍고 싶을 때 대신할 행동을 붙여요.', { topic: '찍고 싶을 때' }, ['찍고 싶을 때', '웃기고 싶을 때', '기억하고 싶을 때'],
              [['먼저 "찍어도 돼?" 묻기', '안 된다면 안 찍기'], ['쉬는 시간에 함께 웃기', '놀리는 말 안 하기'], ['공책에 적어 두기', '선생님께 자료 묻기']], 2, [['수업 중엔 기기 내려놓기'], ['재미난 말은 나중에'], ['그림으로 그려 두기']], 0.25,
              { conclude: '몰래 찍으면 마음이 다치고 수업이 멈추고, 퍼지면 지우기 어려워요. 찍고 싶을 때는 먼저 묻고, 안 된다면 찍지 않아요.' }, 2),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '사진을 찍고 싶을 때는 먼저 "찍어도 돼?"라고 ___.', answer: '물어요' }] },
        notes: FICTION,
      }),
      C({
        id: 'teach.e34.respect-ways.activity.respect-light', type: 'activity', title: '존중 신호등 만들기',
        method: '존중 신호등 만들기', tool: 'collage', minutes: 14,
        levels: { easy: '초록·빨강 동그라미를 붙이고, 행동 조각을 2개 더 붙인 뒤 점검 2칸에 표시한다.', base: '초록·빨강 동그라미를 붙이고, 행동 조각을 4개 더 붙인 뒤 점검 2칸에 표시한다.', challenge: '노랑 동그라미(잠깐 생각해요)까지 붙이고 행동 조각 4개를 더한 뒤 점검 3칸에 표시한다.' },
        activity: {
          title: '존중 신호등 만들기', tool: 'collage',
          teacher: '"초록 동그라미는 \'계속해요\', 빨강 동그라미는 \'멈춰요\'예요. 초록 옆에는 어떤 행동을 붙일까요?" 별·하트·네모 조각 하나가 행동 하나라고 칠판에 적고, 그 행동 이름은 활동지에 쓰게 한다. 짝과 한 판을 함께 만들며 조각마다 "이건 ○○ 행동이야"라고 말하게 한다. \'몰래 찍기\'를 초록 옆에 두려는 학생에게 "찍힌 선생님에게 그 행동은 초록일까요?"라고 묻는다.',
          task: '초록(존중 행동)·빨강(멈출 행동) 동그라미를 붙이고, 옆에 행동 조각을 붙여 짝과 존중 신호등을 만들어요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '초록 동그라미와 빨강 동그라미를 하나씩 붙여요.', toolOptions: LIGHT, target: { has: [{ shape: 'circle', color: '초록', min: 1 }, { shape: 'circle', color: '빨강', min: 1 }] }, difficulty: 0.1,
              levels: { challenge: { prompt: '초록·노랑·빨강 동그라미를 하나씩 붙여요.', target: { has: [{ shape: 'circle', color: '초록', min: 1 }, { shape: 'circle', color: '노랑', min: 1 }, { shape: 'circle', color: '빨강', min: 1 }] } } } },
            { prompt: '신호등 옆에 행동 조각(별·하트·네모)을 4개 붙여요.', toolOptions: LIGHT, target: { has: [{ shape: 'circle', color: '초록', min: 1 }, { shape: 'circle', color: '빨강', min: 1 }], pieces: { min: 6 } }, difficulty: 0.15,
              levels: { easy: { prompt: '신호등 옆에 행동 조각을 2개 붙여요.', target: { has: [{ shape: 'circle', color: '초록', min: 1 }, { shape: 'circle', color: '빨강', min: 1 }], pieces: { min: 4 } } } } },
            { prompt: '완성한 신호등을 짝과 보고 점검 칸에 표시해요.', toolOptions: LIGHT, target: { selfCheck: ['초록 옆에 존중 행동', '빨강 옆에 멈출 행동'], minPieces: 6 }, difficulty: 0.1,
              levels: { easy: { prompt: '조각 4개 이상 붙인 신호등을 보고 점검 칸에 표시해요.', target: { selfCheck: ['초록 옆에 존중 행동', '빨강 옆에 멈출 행동'], minPieces: 4 } }, challenge: { prompt: '노랑까지 붙인 신호등을 보고 점검 칸에 표시해요.', target: { selfCheck: ['초록 옆에 존중 행동', '빨강 옆에 멈출 행동', '노랑 옆에 생각할 행동'], minPieces: 7 } } },
              conclude: '존중 행동은 초록처럼 계속하고, 무례한 행동은 빨강처럼 멈춰요. 헷갈리면 노랑처럼 잠깐 생각해요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '신호등 옆에 붙인 행동을 써요.', columns: ['신호', '행동'], cells: [['초록(계속해요)', ''], ['빨강(멈춰요)', '']] }] },
        notes: '콜라주에는 신호등·행동 그림이 없다. 동그라미 색 = 신호, 별·하트·네모 조각 하나 = 행동 하나라고 칠판에 적고, 행동 이름은 활동지에 쓰게 한다.',
      }),
      C({
        id: 'teach.e34.respect-ways.wrap.today-check', type: 'wrap', title: '오늘 존중 점검표',
        method: '오늘 존중 점검표', tool: 'kitchen', minutes: 6,
        levels: { easy: '점검 항목 2개(몰래 찍지 않기·고운 말 쓰기)에 스스로 표시한다.', base: '점검 항목 3개에 스스로 표시한다.', challenge: '3개에 표시하고, 지키기 어려운 항목을 지킬 내 방법을 출구 3번에 쓴다.' },
        wrap: {
          teacher: '"오늘 배운 존중 행동 가운데 오늘부터 지킬 것에 표시해 볼까요?" 항목을 하나씩 소리 내어 읽고 스스로 표시하게 한다. 이 점검은 맞고 틀림이 없고 나를 돌아보는 것이라고 말한다. 출구 2번에서 \'그 자리에서 크게\'를 고른 학생에게 "오늘 놓은 차례에서 맨 먼저 한 일은 무엇이었나요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '오늘 존중 점검', items: [{ id: 'film', text: '몰래 찍지 않기' }, { id: 'word', text: '고운 말 쓰기' }, { id: 'order', text: '불만은 차례대로' }] }, prompt: '오늘부터 지킬 존중 행동에 스스로 표시해요.', target: { selfCheck: true }, difficulty: 0.1,
              levels: { easy: { toolOptions: { items: [{ id: 'film', text: '몰래 찍지 않기' }, { id: 'word', text: '고운 말 쓰기' }] } } } },
            { type: 'choice', prompt: '수업 중에 속상한 일이 생겼어요. 알맞은 것은?', options: ['그 자리에서 크게 따져요', '쉬는 시간에 차분히 말해요', '친구 물건을 밀쳐요'], answer: 1, difficulty: 0.1, explain: '마음을 가라앉히고 쉬는 시간에 바른 말로 전해요.' },
            { type: 'short', prompt: '지키기 어려운 항목을 지킬 내 방법을 하나 써요.' },
          ],
        },
        worksheet: {
          title: '오늘 존중 점검',
          items: [
            { type: 'check', prompt: '오늘부터 지킬 행동에 표시해요.', options: ['몰래 찍지 않기', '고운 말 쓰기', '불만은 차례대로 말하기'] },
            { type: 'short', prompt: '선생님과 친구의 배움을 지키려고 내가 할 행동을 한 줄로 써요.' },
          ],
          easy: { note: '"찍기 전에 묻기", "고운 말"을 떠올려요.', items: [{ type: 'draw', prompt: '수업 시간에 존중하는 내 모습을 그려요.' }] },
        },
      }),
      C({
        id: 'teach.e34.respect-ways.wrap.teacher-scale', type: 'wrap', title: '선생님 마음 눈금',
        method: '선생님 마음 눈금', tool: 'emotion', minutes: 6,
        levels: { easy: '눈금 3칸에서 선생님 마음 크기를 고른다.', base: '눈금 5칸에서 선생님 마음 크기를 고르고, 친구 마음 눈금도 고른다.', challenge: '5칸 눈금 둘을 고른 뒤 두 마음이 왜 비슷한지 까닭을 짝에게 말한다(교사 진행).' },
        wrap: {
          teacher: '"오늘 배운 존중 행동을 본 선생님 마음은 얼마나 기쁠까요?" 눈금을 고른 뒤 두세 명에게 그만큼 고른 까닭을 묻는다. "선생님은 늘 괜찮으세요"라는 말이 나오면 "선생님도 우리처럼 고운 말에 기쁘고 무례한 말에 속상해요"라고 짚는다. 출구 2번 친구 마음 눈금은 발표를 끝까지 들어 준 장면으로 고르게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'emotion', options: { mode: 'scale', situation: '친구들이 "고맙습니다", "질문 있어요"라고 했어요. 선생님 마음은?', feeling: '기쁨', steps: 5 }, prompt: '존중하는 말을 들은 선생님 마음 크기를 골라요.', target: { level: [3, 5] }, difficulty: 0.1,
              levels: { easy: { toolOptions: { steps: 3 }, target: { level: [2, 3] } } } },
            { type: 'tool', tool: 'emotion', options: { mode: 'scale', situation: '하나가 발표할 때 친구들이 끝까지 들어 주었어요. 하나 마음은?', feeling: '뿌듯함', steps: 5 }, prompt: '끝까지 들어 준 친구들을 본 하나 마음 크기를 골라요.', target: { level: [3, 5] }, difficulty: 0.1,
              levels: { easy: { toolOptions: { steps: 3 }, target: { level: [2, 3] } } } },
            { type: 'choice', prompt: '선생님 마음을 기쁘게 하는 행동은?', options: ['몰래 사진 찍기', '손 들고 질문하기', '설명 중에 떠들기'], answer: 1, difficulty: 0.1, explain: '질문은 배우려는 마음을 보여 주는 존중 행동이에요.' },
          ],
        },
        worksheet: {
          title: '선생님과 친구의 마음',
          items: [
            { type: 'choice', prompt: '선생님이 들으면 기분 좋은 말은?', options: ['"재미없어요"', '"고맙습니다"', '"빨리 끝내요"'], answer: '"고맙습니다"' },
            { type: 'short', prompt: '내일 선생님이나 친구에게 해 줄 존중의 말을 하나 써요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 4학년 · 모두의 배움을 지키는 수업 시간
  // ======================================================================================================
  {
    const C = T('class-time', [4]);
    const STOP = [['월', 4], ['화', 2], ['수', 5], ['목', 3], ['금', 1]];
    const BAR = { type: 'bar', title: '가상 학급: 수업이 멈춘 횟수', unit: '번', xLabel: '요일', yLabel: '멈춘 횟수', max: 6, scale: 1 };
    const DAYS = ['월', '화', '수', '목', '금'];
    const ROOM = { cols: 5, rows: 4, start: { x: 0, y: 3, dir: 'E' }, stars: [[2, 3], [2, 1]], goal: { x: 4, y: 1 }, rocks: [[3, 3], [0, 1]] };
    const BUGGY = ['fwd', 'fwd', 'left', 'fwd', 'fwd', 'left', 'fwd', 'fwd'];
    const LINE = { cols: 5, rows: 3, start: { x: 0, y: 1, dir: 'E' }, stars: [[1, 1], [2, 1], [3, 1]], goal: { x: 4, y: 1 }, rocks: [[2, 0], [2, 2]] };
    const BADGE = { shapes: ['circle', 'star', 'heart', 'square'], maxPieces: 10 };
    M.push(
      C({
        id: 'teach.e34.class-time.intro.class-clock', type: 'intro', title: '수업 40분 시계 맞추기',
        method: '수업 40분 시계 맞추기', tool: 'clock', minutes: 6,
        levels: { easy: '시작 9시(정각)만 바늘로 함께 본다.', base: '시작 9시와 끝 9시 40분을 차례로 보고 그 사이가 몇 분인지 말한다.', challenge: '수업이 5분 멈추면 끝나는 시각이 9시 45분이 되는 것을 바늘로 보고 무엇이 줄어드는지 말한다.' },
        intro: {
          teacher: '"우리 반 수업이 9시에 시작해서 9시 40분에 끝난다고 해 볼게요(학교마다 시각은 달라요)." 시연 단추로 바늘이 9시 → 9시 40분 → 9시 45분으로 움직이는 것을 보이고 "이 40분은 누구의 시간일까요?"라고 묻는다(기다릴 반응: "우리 반 모두요"). "내 공부만 하면 다른 사람은 상관없어요"라는 말이 나오면 "한 사람 때문에 5분 멈추면, 그 5분은 누구의 시간이 줄어든 걸까요?"라고 되물어 수업 시간은 모두의 배움 시간이라는 것을 짚는다.',
          student: '수업 시작과 끝 시각 시계를 보고, 그 40분이 누구의 배움 시간인지 짝에게 말해 보아요.',
          demo: { tool: 'clock', options: { showDigital: true }, sequence: [{ h: 9, m: 0 }, { h: 9, m: 40 }, { h: 9, m: 45 }] },
          art: { draw: 'a big paper wall clock above a paper classroom blackboard, paper children sitting at desks with open books', banner: '모두의 배움 시간 40분', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
        notes: '9시~9시 40분은 연습용 시각이다. 우리 학교 시정표에 맞춰 바꿔 말해도 된다.',
      }),
      C({
        id: 'teach.e34.class-time.intro.stopped-feeling', type: 'intro', title: '발표가 멈췄을 때 마음',
        method: '방해받을 때 선생님·친구 마음', tool: 'emotion', minutes: 6,
        levels: { easy: '발표하던 하람이 한 사람의 마음 카드만 함께 고른다.', base: '하람이와 선생님 두 사람의 마음 카드를 짝 짓는다.', challenge: '두 사람의 마음을 짝 지은 뒤, 두 사람에게 필요한 행동(조용히 듣기·끝나고 말하기)을 짝과 고른다(교사 진행).' },
        intro: {
          teacher: '"하람이가 발표하는데 뒤에서 떠드는 소리가 커서 발표가 멈췄어요. 하람이 마음은 어떨까요? 선생님 마음은요?" 시연 단추로 두 칸에 마음 카드가 놓이는 것을 보인다. "한 번 떠드는 건 괜찮아요"라는 말이 나오면 "한 번 멈춘 발표를 하람이는 처음부터 다시 해야 할까요? 그때 마음은 어떨까요?"라고 되묻는다. 떠든 친구를 탓하기보다 모두가 할 수 있는 행동을 찾자고 이어 간다.',
          student: '발표가 멈춘 장면을 보고 하람이와 선생님의 마음 카드를 짝 지어 보아요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 's', label: '발표하던 하람' }, { id: 't', label: '설명하던 선생님' }], cards: ['속상함', '걱정', '기쁨', '신남'] }, sequence: [{ match: { s: '속상함' } }, { match: { s: '속상함', t: '걱정' } }] },
          art: { draw: 'a paper girl standing at the front of a paper classroom holding a report paper, speech bubbles of noise from the back, the teacher looking concerned', banner: '발표가 멈췄어요', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: FICTION,
      }),
      C({
        id: 'teach.e34.class-time.activity.lost-time', type: 'activity', title: '수업이 멈춘 횟수 막대그래프',
        method: '방해 때문에 멈춘 시간 막대그래프', tool: 'chart', minutes: 14,
        levels: { easy: '막대 3개(월·화·수)를 그리고, 읽기 문항은 막대 끝 값이 보인다.', base: '막대 5개(월~금)를 그리고 가장 많이·가장 적게 멈춘 요일을 고른다.', challenge: '5개를 그린 뒤, 셋째 문항에서 멈춘 횟수를 줄일 우리 반 방법을 고른다.' },
        activity: {
          title: '수업이 멈춘 횟수 막대그래프', tool: 'chart',
          teacher: '"이 표는 가상의 4학년 반이 수업이 멈춘 횟수를 센 거예요. 수요일은 몇 번일까요? 막대를 몇 칸 올릴까요?" 표의 수를 소리 내어 읽고 막대를 올리게 한다. 우리 반의 횟수나 누가 멈추게 했는지는 묻지 않는다고 먼저 밝힌다. "한 번 멈추는 건 괜찮아요"라는 학생에게 "한 번씩이 닷새 모이면 몇 번일까요? 그만큼 누구의 배움이 줄었을까요?"라고 묻는다.',
          task: '가상 학급의 요일별 수업이 멈춘 횟수 표를 보고 막대그래프를 완성한 뒤 물음에 답해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '표를 보고 요일별 막대그래프를 완성해요.', toolOptions: Object.assign({}, BAR, { mode: 'build', data: STOP }), target: { build: true }, difficulty: 0.2,
              levels: { easy: { prompt: '표를 보고 월·화·수 막대를 완성해요.', toolOptions: { data: STOP.slice(0, 3) }, target: { build: true } } } },
            { prompt: '수업이 가장 많이 멈춘 요일은?', toolOptions: Object.assign({}, BAR, { mode: 'read', data: STOP, question: '가장 많이 멈춘 요일은?', choices: DAYS }), target: { pick: 2 }, difficulty: 0.15,
              levels: { easy: { toolOptions: { showValues: true } } } },
            { prompt: '수업이 가장 적게 멈춘 요일은?', toolOptions: Object.assign({}, BAR, { mode: 'read', data: STOP, question: '가장 적게 멈춘 요일은?', choices: DAYS }), target: { pick: 4 }, difficulty: 0.2,
              levels: {
                easy: { toolOptions: { showValues: true } },
                challenge: { prompt: '멈춘 횟수를 줄일 우리 반 방법은?', toolOptions: { question: '멈춘 횟수를 줄이려면?', choices: ['말하고 싶으면 손 들기', '더 크게 이야기하기', '몰래 휴대폰 보기'] }, target: { pick: 0 } },
              },
              conclude: '한 번의 방해도 모이면 모두의 배움 시간이 줄어요. 손 들고 말하기처럼 모두가 할 수 있는 행동으로 줄여요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '표의 빈칸을 그래프에서 읽어 채워요.', columns: ['요일', '멈춘 횟수'], cells: [['월', '4'], ['수', ''], ['금', '']], answer: '5, 1' }] },
        notes: '그래프 값은 가상의 반 자료다. 우리 반에서 멈춘 횟수를 세거나 누가 방해했는지 짚지 않는다.',
      }),
      C({
        id: 'teach.e34.class-time.activity.keep-break', type: 'activity', title: '지키는 행동·방해 행동',
        method: '지키는 행동·방해 행동', tool: 'sortboard', minutes: 14,
        levels: { easy: '장면 카드 4장을 나누고, 틀리면 바로 돌아오며 바구니마다 장 수가 보인다.', base: '장면 카드 8장을 나누고, 넷째 문항에서 방해 장면 둘을 골라 바꾼 행동을 짝에게 말한다.', challenge: '헷갈리는 카드 2장이 더해진 10장을 나누고, 넷째 문항에서 바꾼 행동을 짝에게 말한다.' },
        activity: {
          title: '수업을 지키는 행동·방해하는 행동', tool: 'sortboard',
          teacher: '"이 행동은 모두의 수업을 지키나요, 방해하나요?" 카드를 넣을 때마다 "○○하면 친구들이 ○○해요"라고 까닭을 붙여 말하게 한다. \'몰래 휴대폰 보기\'를 "소리 안 나면 괜찮아요"라며 지키는 쪽에 두려는 학생에게 "보는 동안 설명을 들을 수 있을까요? 옆 친구 눈은 어디로 갈까요?"라고 묻는다. 넷째 문항에서는 친구를 탓하는 말 대신 바꾼 행동만 말하게 한다.',
          task: '수업 장면 카드를 수업을 지키는 행동과 방해하는 행동 바구니에 나누어요.', levels: BOARD_LV,
          items: [
            SORT('수업 시간 장면 카드를 나누어요.', {}, ['지키는 행동', '방해하는 행동'],
              [['준비물 챙기기', '짝 돕기', '손 들고 질문하기', '필기하기'], ['수업 중 돌아다니기', '큰 소리 내기', '몰래 휴대폰 보기', '친구 놀리기']], 2, [['발표 끝까지 듣기'], ['책상 두드리기']], 0.15),
            SORT('모둠 활동 장면 카드를 나누어요.', {}, ['지키는 행동', '방해하는 행동'],
              [['차례대로 말하기', '맡은 일 하기', '작은 목소리로', '의견 적어 두기'], ['혼자만 계속 말하기', '모둠 물건 숨기기', '딴 놀이 하기', '친구 생각 비웃기']], 2, [['도움 청하기'], ['자리 비우고 놀기']], 0.2),
            SORT('특별실 수업 장면 카드를 나누어요.', {}, ['지키는 행동', '방해하는 행동'],
              [['줄 서서 들어가기', '도구 제자리 두기', '설명 먼저 듣기', '차례 기다리기'], ['먼저 만지기', '도구로 장난치기', '뛰어다니기', '설명 중 떠들기']], 2, [['안전 약속 읽기'], ['친구 작품 건드리기']], 0.25),
            { prompt: '방해 장면 둘을 골라 바꾼 행동을 짝에게 말해요.', free: true, talk: true,
              conclude: '수업을 지키는 행동은 나와 친구의 배움을 함께 지켜요. 방해하는 행동은 지키는 행동으로 바꿀 수 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '방해하는 행동을 지키는 행동으로 바꿔 써요.', columns: ['방해하는 행동', '바꾼 행동'], cells: [['큰 소리 내기', ''], ['수업 중 돌아다니기', '']] }] },
        notes: FICTION,
      }),
      C({
        id: 'teach.e34.class-time.activity.ready-route', type: 'activity', title: '종 치기 전 준비 길 코딩',
        method: '수업 준비 길 코딩', tool: 'block-coding', minutes: 14,
        levels: { easy: '작은 판(한 줄)에서 사물함 칸(별) 하나를 지나 자리(집)에 닿는다.', base: '사물함·교과서 칸(별 둘)을 지나고 장난감 칸(바위)을 피해 자리에 닿고, 둘째 문항에서 한 블록이 틀린 길을 고친다.', challenge: '셋째 문항에서 반복 블록을 써서 블록 2개로 별 셋을 지나 자리에 닿게 다시 짠다.' },
        activity: {
          title: '종 치기 전 준비 길 코딩', tool: 'block-coding',
          teacher: '칠판에 칸 뜻을 적어 둔다(교구 판에는 칸 이름이 없다): 첫 별 = 사물함, 둘째 별 = 교과서, 집 = 내 자리, 바위 = 장난감. "종이 치기 전에 거북이가 사물함과 교과서를 들러 자리에 앉으려면 블록을 어떻게 놓을까요?" 블록을 붙인 뒤 실행을 눌러 확인하게 한다. 장난감 칸에 부딪히면 "장난감에 들르면 종 칠 때 자리에 있을 수 있을까요?"라고 묻는다. 수업 준비는 나와 친구들이 제때 시작하게 돕는다는 것을 짚는다.',
          task: '거북이가 사물함·교과서 칸(별)을 지나 장난감 칸(바위)을 피해 자리(집)에 닿도록 블록을 놓아요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '별 두 칸을 지나 장난감 칸을 피해 자리에 닿게 해요.', toolOptions: ROOM, target: { reach: true, stars: true }, difficulty: 0.2,
              levels: { easy: { prompt: '사물함 칸(별)을 지나 자리에 닿게 해요.', toolOptions: { cols: 4, rows: 2, start: { x: 0, y: 1, dir: 'E' }, stars: [[1, 1]], goal: { x: 3, y: 1 }, rocks: [] }, target: { reach: true, stars: true } } } },
            { prompt: '자리를 지나쳐 가는 길을 한 블록만 고쳐 자리에 닿게 해요.', toolOptions: ROOM, state: { program: BUGGY }, target: { reach: true, stars: true, maxEdits: 1, from: BUGGY }, difficulty: 0.25 },
            { prompt: '별 세 칸을 지나 자리에 닿게 블록 4개 이하로 놓아요.', toolOptions: LINE, target: { reach: true, stars: true, maxBlocks: 4 }, difficulty: 0.2,
              levels: { challenge: { prompt: '반복 블록을 써서 블록 2개로 자리에 닿게 해요.', target: { reach: true, stars: true, maxBlocks: 2, use: ['rep'] } } },
              conclude: '종 치기 전에 준비물을 챙겨 자리에 앉으면 모두의 수업이 제때 시작돼요.' },
          ],
        },
        worksheet: { items: [{ type: 'order', prompt: '종 치기 전 할 일을 차례대로 번호를 써요.', options: ['사물함에서 준비물 꺼내기', '교과서 펴기', '자리에 앉기'], answer: '사물함에서 준비물 꺼내기, 교과서 펴기, 자리에 앉기' }] },
        notes: '거북이 판에는 칸 이름이 없다. 별·집·바위 칸의 뜻은 칠판과 활동지에 적어 준다.',
      }),
      C({
        id: 'teach.e34.class-time.activity.ask-fill', type: 'activity', title: '짝에게 하는 부탁 말',
        method: '짝에게 하는 부탁 말', tool: 'story', minutes: 14,
        levels: { easy: '말풍선 빈칸 1개에 부탁 카드를 넣는다.', base: '말풍선 빈칸 2개에 부탁 카드를 넣는다.', challenge: '빈칸 3개를 채우며 짝이 기분 상하지 않게 덧붙이는 말까지 넣는다.' },
        activity: {
          title: '짝에게 하는 부탁 말', tool: 'story',
          teacher: '"짝이 수업 중에 계속 말을 걸면 뭐라고 말할까요? 짝이 기분 상하지 않게 하려면요?" 빈칸을 채우면 짝과 역할을 바꿔 실제로 말해 보게 한다. \'선생님께 이를 거야\'를 넣으려는 학생에게 "그 말을 들은 짝은 어떤 마음일까요? 먼저 내가 부탁해 볼 수 있을까요?"라고 묻는다. 부탁 말은 수업도 지키고 짝과의 사이도 지킨다는 것을 짚는다.',
          task: '수업 중 장면의 말풍선 빈칸에 알맞은 부탁 말 카드를 넣어요.', levels: CARD_LV,
          items: [
            FILL('짝이 수업 중에 계속 말을 걸어요.', '나', [['"지금은 수업 중이니 ___."', '끝나고 이야기하자'], ['"쉬는 시간에 ___."', '꼭 들어 줄게'], ['"말 걸어 줘서 ___."', '고마워']], ['선생님께 이를 거야', '더 크게 말해 봐'], 0.15),
            FILL('뒤 친구가 연필로 등을 콕콕 찔러요.', '나', [['"콕콕 찌르면 ___."', '집중이 안 돼'], ['"필요한 게 있으면 ___."', '쉬는 시간에 말해 줘'], ['"___, 이따 같이 놀자!"', '화난 거 아니야']], ['너 정말 짜증 나', '나도 같이 찌를래'], 0.2),
            FILL('모둠 친구가 발표 중에 자꾸 웃어요.', '나', [['"발표가 끝날 때까지 ___."', '들어 줄래?'], ['"궁금한 건 ___."', '끝나고 물어봐'], ['"네 생각도 ___."', '듣고 싶어']], ['웃지 마, 바보야', '같이 웃자'], 0.25,
              { conclude: '부탁할 때는 "끝나고 이야기하자"처럼 때를 알려 주고, 짝이 기분 상하지 않게 한마디를 덧붙여요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '짝에게 할 부탁 말을 이어 써요.', text: '"지금은 수업 중이니 ___. 쉬는 시간에 ___."', answer: '끝나고 이야기하자, 꼭 들어 줄게' }] },
        notes: FICTION,
      }),
      C({
        id: 'teach.e34.class-time.wrap.ready-check', type: 'wrap', title: '수업 준비 스스로 점검',
        method: '수업 준비 스스로 점검', tool: 'timer', minutes: 6,
        levels: { easy: '점검 칸 1개(종 치기 전 앉기)에 스스로 표시한다.', base: '점검 칸 3개(앉기·교과서 펴기·휴대폰 넣기)에 표시한다.', challenge: '점검 칸 4개(짝과 서로 점검 포함)에 표시한다. 일주일 기록판은 활동지 표로 만든다.' },
        wrap: {
          teacher: '"다음 수업 종이 치기 전에 나는 무엇을 할까요?" 점검 칸을 함께 읽고 스스로 표시하게 한다. 이 점검은 맞고 틀림이 없고, 활동지 일주일 기록판은 스스로 채우는 것이라고 알려 준다. 출구 2번에서 \'한 번은 괜찮아요\'를 고른 학생에게 "오늘 그래프에서 한 번씩이 모이면 어떻게 됐나요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '수업 준비 점검' }, prompt: '다음 수업 전에 할 준비에 스스로 표시해요.', target: { selfCheck: ['종 치기 전 앉기', '교과서 펴기', '휴대폰 넣기'] }, difficulty: 0.1,
              levels: { easy: { target: { selfCheck: ['종 치기 전 앉기'] } }, challenge: { target: { selfCheck: ['종 치기 전 앉기', '교과서 펴기', '휴대폰 넣기', '짝과 서로 점검하기'] } } } },
            { type: 'choice', prompt: '수업을 한 번 방해하는 것에 알맞은 생각은?', options: ['한 번은 괜찮아요', '모두의 시간이 줄어요', '나만 손해예요'], answer: 1, difficulty: 0.1, explain: '한 번의 방해도 모두의 배움 시간을 줄여요.' },
            { type: 'short', prompt: '짝과 서로 점검할 준비 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '일주일 수업 준비 기록판',
          items: [
            { type: 'table', prompt: '준비를 한 날에 ○를 해요.', columns: ['준비', '월', '화', '수', '목', '금'], cells: [['종 치기 전 앉기', '', '', '', '', ''], ['교과서 펴기', '', '', '', '', ''], ['휴대폰 넣기', '', '', '', '', '']] },
            { type: 'short', prompt: '일주일 뒤 가장 잘 지킨 준비를 써요.' },
          ],
        },
        notes: '타이머 교구의 스스로 점검 칸만 쓴다(구간 타이머는 쓰지 않는다). 기록판은 스스로 보는 것이며 걷거나 비교하지 않는다.',
      }),
      C({
        id: 'teach.e34.class-time.wrap.class-badge', type: 'wrap', title: '모두의 수업 지킴이 배지',
        method: '모두의 수업 배지', tool: 'collage', minutes: 6,
        levels: { easy: '조각 2개 이상으로 배지를 꾸미고 점검 2칸에 표시한다.', base: '조각 3개 이상으로 배지를 꾸미고 점검 2칸에 표시한다.', challenge: '조각 3개 이상으로 꾸미고, 모둠 배지를 함께 만든 뒤 점검 3칸에 표시한다.' },
        wrap: {
          teacher: '"동그라미는 배지 판, 별·하트·네모는 내가 맡을 행동이에요. 나는 어떤 수업 지킴이가 될까요?" 칠판에 조각 뜻을 적고, 맡을 행동은 활동지에 쓰게 한다. 배지를 다 꾸미면 짝에게 "나는 ○○ 지킴이야"라고 소개하게 한다. 출구 2번에서 \'내 공부만\'을 고른 학생에게 "짝이 발표할 때 내가 떠들면 짝의 공부는 어떻게 될까요?"라고 되묻는다.',
          exitTicket: [
            POSTER('색종이 조각으로 "모두의 수업 지킴이" 배지를 꾸며요.', BADGE, ['맡을 행동을 정했어요', '짝에게 소개했어요'], '모둠 배지를 함께 꾸몄어요', 2, 3),
            { type: 'choice', prompt: '수업 시간은 누구의 시간일까요?', options: ['내 공부만 하면 돼요', '우리 반 모두의 시간', '선생님만의 시간'], answer: 1, difficulty: 0.1, explain: '수업 시간은 우리 반 모두가 배우는 시간이에요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '모두의 수업 지킴이',
          items: [
            { type: 'short', prompt: '내가 맡을 수업 지킴이 행동을 써요.' },
            { type: 'draw', prompt: '내 수업 지킴이 배지를 그려요.' },
          ],
        },
        notes: '콜라주에는 배지 모양이 없다. 큰 동그라미 = 배지 판, 별·하트·네모 = 맡을 행동이라고 칠판에 적어 준다.',
      }),
    );
  }

  // ======================================================================================================
  // 3·4학년 · 서로 존중하는 학급 약속 만들기
  // ======================================================================================================
  {
    const C = T('class-promise', [3, 4]);
    const VOTE = [['고운 말 쓰기', 9], ['차례 지키기', 6], ['몰래 찍지 않기', 4], ['쓴 물건 제자리', 3]];
    const POST = { shapes: ['star', 'heart', 'circle', 'square', 'rect'], maxPieces: 14 };
    const A = ['e', 'e', 'q', 'q', 'qr', 'q', 'q', 'q', 'qr'];
    const B = ['q', 'q', 'e', 'e', 'q', 'e', 'e', 'q', 'q', 'qr'];
    const RH = { mode: 'rhythm', meter: 4, measures: 2, blocks: ['q', 'e', 'qr'] };
    M.push(
      C({
        id: 'teach.e34.class-promise.intro.respect-class', type: 'intro', title: '서로 존중하는 교실 떠올리기',
        method: '존중하는 교실 떠올리기', tool: 'mindmap', minutes: 6,
        levels: { easy: '가지 1개(학생끼리)에 장면 카드가 붙는 것을 본다.', base: '가지 2개(학생끼리·학생과 선생님)에 장면 카드가 나뉘어 붙는 것을 본다.', challenge: '가지마다 내 생각 장면을 하나씩 더 떠올려 짝에게 말한다(교사가 칠판에 더한다).' },
        intro: {
          teacher: '"서로 존중하는 교실은 어떤 모습일까요? 학생끼리는요? 학생과 선생님 사이는요?" 시연 단추로 두 가지에 장면 카드가 붙는 것을 보이고, 가지마다 하나씩 더 떠올리게 한다(기다릴 반응: "먼저 인사해요", "질문을 반겨요"). "존중은 학생이 선생님께만 하는 거예요"라는 말이 나오면 "선생님이 우리 질문을 반겨 주시는 것도 존중일까요?"라고 되물어 존중은 서로 하는 것이라는 것을 짚는다.',
          student: '"서로 존중하는 교실"에서 뻗은 가지를 보고, 가지마다 떠오르는 장면을 짝에게 말해 보아요.',
          demo: { tool: 'mindmap', options: { topic: '서로 존중하는 교실', slots: ['학생끼리', '학생과 선생님'], cards: ['먼저 인사하기', '끝까지 들어 주기', '질문 반기기', '도움 주고받기'], shuffle: false },
            sequence: [{ sort: { 학생끼리: ['도움 주고받기'], '학생과 선생님': [] } }, { sort: { 학생끼리: ['도움 주고받기', '끝까지 들어 주기'], '학생과 선생님': ['먼저 인사하기', '질문 반기기'] } }] },
          art: { draw: 'a paper mind map on a classroom wall, in the middle a paper heart, branches with paper children greeting each other and a teacher smiling at a raised hand', banner: '서로 존중하는 교실', extra: [{ motif: 'heart', x: 300, y: 96 }] },
        },
      }),
      C({
        id: 'teach.e34.class-promise.intro.vote-graph', type: 'intro', title: '가장 중요한 약속 그림그래프',
        method: '가장 중요한 약속 그림그래프', tool: 'chart', minutes: 6,
        levels: { easy: '가장 많이 고른 약속 하나를 함께 찾는다.', base: '가장 많이 고른 약속과 가장 적게 고른 약속을 찾는다.', challenge: '우리 반이라면 어떤 약속이 많을지 예상해 짝에게 말한다(투표는 하지 않는다).' },
        intro: {
          teacher: '"가상의 한 반이 \'가장 중요한 약속\'을 투표했어요. 큰 별 하나는 5명이에요." 줄마다 그림을 함께 세고 시연 단추로 \'고운 말 쓰기\'가 골라지는 것을 보인 뒤 가장 적은 약속도 찾게 한다. "약속은 선생님이 정해 주는 거예요"라는 말이 나오면 "이 반은 누가 투표했나요? 우리가 함께 정하면 무엇이 좋을까요?"라고 되물어 오늘은 함께 약속을 정한다고 밝힌다.',
          student: '그림그래프를 읽고 가장 많이 고른 약속과 가장 적게 고른 약속을 찾아보아요.',
          demo: { tool: 'chart', options: { type: 'picture', mode: 'read', title: '가장 중요한 약속(가상 학급 투표)', unit: '명', xLabel: '약속', yLabel: '고른 친구 수', data: VOTE, icons: [{ value: 5, name: '5명' }, { value: 1, name: '1명' }], icon: 'star', question: '가장 많이 고른 약속은?', choices: ['고운 말 쓰기', '차례 지키기', '몰래 찍지 않기', '쓴 물건 제자리'] }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper picture graph of small paper stars next to four promise cards pinned on a classroom board, paper children counting the stars', banner: '어떤 약속이 많을까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '투표 자료는 가상의 반이다. 우리 반 투표는 활동 시간에 학급 회의로 한다.',
      }),
      C({
        id: 'teach.e34.class-promise.activity.can-keep', type: 'activity', title: '지킬 수 있는 약속 고르기',
        method: '지킬 수 있는 약속 고르기', tool: 'sortboard', minutes: 14,
        levels: { easy: '약속 카드 4장을 나누고, 틀리면 바로 돌아오며 바구니마다 장 수가 보인다.', base: '약속 카드 8장을 \'지킬 수 있어요·지키기 어려워요\'로 나눈다.', challenge: '카드 10장을 나누고, 셋째 문항에서 어려운 약속을 지킬 수 있게 고친 카드를 골라 넣는다.' },
        activity: {
          title: '지킬 수 있는 약속 고르기', tool: 'sortboard',
          teacher: '"이 약속은 우리 반 모두가 날마다 지킬 수 있을까요?" 카드를 넣을 때마다 "모두가, 날마다 할 수 있나?" 두 가지를 물어보게 한다. "약속은 많을수록 좋아요"라는 학생에게 "약속이 스무 개면 다 기억하고 지킬 수 있을까요?"라고 묻고, \'하루 종일 말 안 하기\'를 지킬 수 있다고 하는 학생에게 "모둠 활동할 때는 어떻게 될까요?"라고 묻는다. 지킬 수 있게 고친 약속이 좋은 약속이라는 것을 셋째 문항에서 짚는다.',
          task: '약속 후보 카드를 지킬 수 있는 약속과 지키기 어려운 약속 바구니에 나누어요.', levels: BOARD_LV,
          items: [
            SORT('수업 시간 약속 후보를 나누어요.', {}, ['지킬 수 있어요', '지키기 어려워요'],
              [['고운 말 쓰기', '차례 지키기', '몰래 찍지 않기', '쓴 물건 제자리'], ['하루 종일 말 안 하기', '한 번도 안 틀리기', '쉬는 시간도 앉기', '매일 100점 받기']], 2, [['질문은 손 들고'], ['절대 안 웃기']], 0.15),
            SORT('쉬는 시간 약속 후보를 나누어요.', {}, ['지킬 수 있어요', '지키기 어려워요'],
              [['복도에서 걷기', '먼저 인사하기', '줄 서서 기다리기', '친구 말 끝까지 듣기'], ['친구와 말 안 하기', '밥 1분 만에 먹기', '모두와 매일 놀기', '한 번도 안 다투기']], 2, [['같이 놀자고 묻기'], ['복도에 아무도 없기']], 0.2),
            SORT('어려운 약속을 고친 카드를 나누어요.', {}, ['지킬 수 있게 고쳤어요', '아직 어려워요'],
              [['수업 중엔 작게 말하기', '틀려도 다시 해 보기', '쉬는 시간엔 쉬기'], ['아예 말하지 않기', '절대 틀리지 않기', '쉬는 시간도 공부']], 2, [['하루 한 번 칭찬하기'], ['모두를 매일 칭찬']], 0.25,
              { conclude: '좋은 약속은 많은 약속이 아니라 모두가 날마다 지킬 수 있는 약속이에요. 어려운 약속은 고쳐서 정해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '지키기 어려운 약속 하나를 지킬 수 있게 고쳐 써요.' }] },
      }),
      C({
        id: 'teach.e34.class-promise.activity.meeting-order', type: 'activity', title: '약속 정하는 학급 회의 차례',
        method: '약속 정하는 학급 회의 차례', tool: 'story', minutes: 14,
        levels: { easy: '회의 장면 3장을 차례로 놓고, 놓으면 바로 맞는지 알려 준다.', base: '회의 장면 4장(의견 내기 → 이유 말하기 → 투표 → 약속 붙이기)을 차례로 놓는다.', challenge: '다른 의견이 나왔을 때 장면을 넣어 5장을 차례로 놓는다.' },
        activity: {
          title: '약속 정하는 학급 회의 차례', tool: 'story',
          teacher: '"학급 약속은 누가, 어떤 차례로 정할까요?" 장면을 놓은 뒤 실제 회의처럼 한 사람씩 의견과 이유를 말해 보게 한다. "선생님이 정해 주시면 빨라요"라는 학생에게 "우리가 함께 정한 약속과 들은 약속 가운데 어느 쪽을 더 지키고 싶을까요?"라고 묻는다. 도전 단계에서는 다른 의견도 끝까지 듣고 투표한다는 것을 짚는다.',
          task: '약속을 정하는 학급 회의 장면 카드를 차례대로 놓아요.', levels: CARD_LV,
          items: [
            MEET('학급 약속을 정하는 회의 차례로 놓아요.', [{ id: 'idea', text: '약속 의견 내기' }, { id: 'why', text: '이유 말하기' }, { id: 'vote', text: '손 들어 투표하기' }, { id: 'post', text: '약속 붙이기' }], 1,
              { id: 'other', text: '다른 의견 끝까지 듣기' }, 2, 0.15),
            MEET('어려운 약속을 고치는 회의 차례로 놓아요.', [{ id: 'hard', text: '어려운 점 말하기' }, { id: 'fix', text: '고칠 말 내기' }, { id: 'vote', text: '함께 투표하기' }, { id: 'post', text: '새 약속 붙이기' }], 0,
              { id: 'other', text: '반대 의견 듣기' }, 2, 0.2),
            MEET('약속을 돌아보는 회의 차례로 놓아요.', [{ id: 'read', text: '지난주 약속 읽기' }, { id: 'good', text: '잘된 점 말하기' }, { id: 'more', text: '노력할 점 정하기' }, { id: 'next', text: '다음 주 다짐하기' }], 3,
              { id: 'other', text: '다른 생각 듣기' }, 2, 0.25,
              { conclude: '학급 약속은 의견과 이유를 듣고, 다른 생각도 끝까지 들은 뒤 함께 정해요. 그래서 모두의 약속이 돼요.' }),
          ],
        },
        worksheet: { items: [{ type: 'order', prompt: '학급 회의 차례대로 번호를 써요.', options: ['약속 의견 내기', '이유 말하기', '손 들어 투표하기', '약속 붙이기'], answer: '약속 의견 내기, 이유 말하기, 손 들어 투표하기, 약속 붙이기' }] },
      }),
      C({
        id: 'teach.e34.class-promise.activity.promise-poster', type: 'activity', title: '학급 약속 포스터',
        method: '학급 약속 포스터', tool: 'collage', minutes: 14,
        levels: { easy: '약속 별 1개와 꾸밈 조각 2개(모두 3개 이상)를 붙이고 점검 2칸에 표시한다.', base: '약속 별 3개와 꾸밈 조각(모두 5개 이상)을 붙이고 점검 2칸에 표시한다.', challenge: '약속 별 3개에 약속을 지켰을 때 모습 조각을 더해(모두 6개 이상) 점검 3칸에 표시한다.' },
        activity: {
          title: '학급 약속 포스터', tool: 'collage',
          teacher: '"별 하나가 약속 하나예요. 우리 모둠이 고른 약속 세 개를 별로 붙이고, 그 약속 이름은 활동지에 써요." 별을 붙이며 모둠원이 돌아가며 약속 하나씩 소리 내어 읽게 한다. "약속이 많을수록 멋진 포스터예요"라며 별을 많이 붙이려는 모둠에게 "오늘 고른 지킬 수 있는 약속은 몇 개였나요?"라고 묻는다. 도전 모둠은 약속을 지켰을 때 교실 모습을 하트·네모 조각으로 더한다.',
          task: '모둠이 고른 약속을 별 조각으로 붙이고 꾸밈 조각을 더해 학급 약속 포스터를 꾸며요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '모둠이 고른 약속 세 개를 별 조각으로 붙여요.', toolOptions: POST, target: { has: [{ shape: 'star', min: 3 }] }, difficulty: 0.1,
              levels: { easy: { prompt: '모둠이 고른 약속 하나를 별 조각으로 붙여요.', target: { has: [{ shape: 'star', min: 1 }] } } } },
            { prompt: '약속 별 둘레에 꾸밈 조각을 더해 5개 이상으로 꾸며요.', toolOptions: POST, target: { has: [{ shape: 'star', min: 3 }], pieces: { min: 5 } }, difficulty: 0.15,
              levels: { easy: { prompt: '약속 별 둘레에 꾸밈 조각을 더해 3개 이상으로 꾸며요.', target: { has: [{ shape: 'star', min: 1 }], pieces: { min: 3 } } } } },
            { prompt: '완성한 포스터를 모둠과 보고 점검 칸에 표시해요.', toolOptions: POST, target: { selfCheck: ['약속을 함께 골랐어요', '약속을 소리 내어 읽었어요'], minPieces: 5 }, difficulty: 0.1,
              levels: { easy: { prompt: '조각 3개 이상 붙인 포스터를 보고 점검 칸에 표시해요.', target: { selfCheck: ['약속을 함께 골랐어요', '약속을 소리 내어 읽었어요'], minPieces: 3 } }, challenge: { prompt: '지킨 모습까지 더한 포스터를 보고 점검 칸에 표시해요.', target: { selfCheck: ['약속을 함께 골랐어요', '약속을 소리 내어 읽었어요', '지킨 모습을 더했어요'], minPieces: 6 } } },
              conclude: '함께 고른 약속을 포스터로 붙여 두면 날마다 보고 지킬 수 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '포스터에 붙인 우리 모둠 약속을 써요.', columns: ['별', '약속'], cells: [['1', ''], ['2', ''], ['3', '']] }] },
        notes: '콜라주에는 글을 쓸 수 없다. 별 조각 하나 = 약속 하나라고 칠판에 적고, 약속 글은 활동지에 써서 포스터 옆에 붙이게 한다.',
      }),
      C({
        id: 'teach.e34.class-promise.activity.promise-rhythm', type: 'activity', title: '약속 구호 리듬 짓기',
        method: '약속 구호 리듬 짓기', tool: 'keyboard', minutes: 14,
        levels: { easy: '첫 문항 구호 리듬을 따라 놓고, 둘째 문항도 들려준 리듬을 따라 놓는다.', base: '구호 리듬을 따라 놓고, 둘째 문항에서 4박 두 마디 리듬을 스스로 짓는다.', challenge: '셋째 문항에서 두 모둠 구호 리듬을 네 마디로 이어 놓는다(쉬움·기본은 두 마디).' },
        activity: {
          title: '약속 구호 리듬 짓기', tool: 'keyboard',
          teacher: '"\'고-운 말 써-요(쉼), 차-례 지-켜요(쉼)\'를 손뼉으로 쳐 볼까요?" 한 번 들려준 뒤 리듬 블록을 놓게 한다. 둘째 문항에서는 우리 모둠 약속 구호에 맞게 마디마다 4박을 채워 짓고, 지은 리듬으로 모둠이 구호를 외친다. 박이 모자라거나 넘치는 학생에게 "한 마디에 손뼉이 네 번 들어가나요?"라고 묻는다. 셋째 문항은 두 모둠 구호를 이어 반 전체가 함께 친다.',
          task: '약속 구호 리듬을 듣고 블록으로 따라 놓고, 우리 모둠 구호 리듬도 4박에 맞게 지어요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '"고운 말 써요" 구호 리듬을 듣고 따라 놓아요.', toolOptions: Object.assign({}, RH, { pattern: A }), target: { rhythm: A }, difficulty: 0.15 },
            { prompt: '우리 모둠 약속 구호 리듬을 마디마다 4박으로 지어요.', toolOptions: RH, target: { beats: true }, difficulty: 0.2,
              levels: { easy: { prompt: '"차례 지켜요" 구호 리듬을 듣고 따라 놓아요.', toolOptions: { pattern: B }, target: { rhythm: B } } } },
            { prompt: '두 모둠 구호의 첫 마디를 이어서 따라 놓아요.', toolOptions: Object.assign({}, RH, { pattern: B.slice(0, 5).concat(A.slice(0, 5)) }), target: { rhythm: B.slice(0, 5).concat(A.slice(0, 5)) }, difficulty: 0.2,
              levels: { challenge: { prompt: '두 모둠 구호 리듬을 네 마디로 이어 놓아요.', toolOptions: { measures: 4, pattern: B.concat(A) }, target: { rhythm: B.concat(A) } } },
              conclude: '약속을 구호로 리듬에 맞춰 외치면 함께 기억하기 쉬워요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 모둠 약속 구호를 써요.' }] },
        notes: '구호 글은 교구에 넣을 수 없다. 칠판에 구호를 적고 블록 하나에 한 글자(쉼표 = 쉼)를 맞춰 읽게 한다.',
      }),
      C({
        id: 'teach.e34.class-promise.wrap.promise-scale', type: 'wrap', title: '약속을 정한 내 마음',
        method: '약속을 정한 내 마음', tool: 'emotion', minutes: 6,
        levels: { easy: '눈금 3칸에서 약속을 정한 내 마음 크기를 고른다.', base: '눈금 5칸에서 마음 크기를 고르고 출구 2번에서 까닭을 고른다.', challenge: '마음 크기와 까닭을 고른 뒤 출구 3번에 친구 마음을 짐작해 쓴다.' },
        wrap: {
          teacher: '"함께 약속을 정하고 나니 마음이 얼마나 뿌듯한가요?" 눈금은 점수가 아니라 내 마음을 돌아보는 것이라고 말한다. 눈금을 작게 고른 학생도 "솔직하게 골랐어요. 어떤 점이 아쉬웠나요?"라고 받아 준다. 출구 2번에서 \'선생님이 정해서\'를 고른 학생에게 "오늘 약속은 누가 투표해서 정했나요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'emotion', options: { mode: 'scale', situation: '우리 반 약속을 함께 정했어요. 내 마음은?', feeling: '뿌듯함', steps: 5 }, prompt: '약속을 정한 내 마음 크기를 골라요.', target: { level: 'any' }, difficulty: 0.1,
              levels: { easy: { toolOptions: { steps: 3 } } } },
            { type: 'choice', prompt: '함께 정한 약속이 좋은 까닭은?', options: ['선생님이 정해서', '내 의견도 들어가서', '약속이 많아서'], answer: 1, difficulty: 0.1, explain: '함께 정한 약속에는 내 의견도 들어 있어 더 지키고 싶어요.' },
            { type: 'short', prompt: '약속을 함께 정한 친구 마음은 어떨지 짐작해 써요.' },
          ],
        },
        worksheet: {
          title: '약속을 정한 마음',
          items: [
            { type: 'choice', prompt: '좋은 학급 약속은?', options: ['많을수록 좋은 약속', '모두 지킬 수 있는 약속', '선생님만 정한 약속'], answer: '모두 지킬 수 있는 약속' },
            { type: 'short', prompt: '약속을 정한 뒤 내 마음과 그 까닭을 한 줄로 써요.' },
          ],
        },
      }),
      C({
        id: 'teach.e34.class-promise.wrap.week-check', type: 'wrap', title: '일주일 약속 점검표',
        method: '일주일 약속 점검표', tool: 'kitchen', minutes: 6,
        levels: { easy: '약속 1개에 스스로 표시한다.', base: '약속 3개에 스스로 표시하고 활동지 요일 표를 만든다.', challenge: '3개에 표시하고 주말에 돌아볼 질문 하나를 출구 3번에 쓴다.' },
        wrap: {
          teacher: '"오늘 정한 약속 가운데 이번 주에 꼭 지킬 약속에 표시해 볼까요?" 항목을 함께 읽고 스스로 표시하게 한다. 활동지 요일 표는 스스로 채우는 것이고 걷거나 견주지 않는다고 알려 준다. 출구 2번에서 \'다시 안 지켜요\'를 고른 학생에게 "한 번 못 지킨 날 다음 날은 어떻게 하면 좋을까요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '이번 주 약속', items: [{ id: 'word', text: '고운 말 쓰기' }, { id: 'turn', text: '차례 지키기' }, { id: 'film', text: '몰래 찍지 않기' }] }, prompt: '이번 주에 지킬 약속에 스스로 표시해요.', target: { selfCheck: true }, difficulty: 0.1,
              levels: { easy: { toolOptions: { items: [{ id: 'word', text: '고운 말 쓰기' }] } } } },
            { type: 'choice', prompt: '약속을 하루 못 지켰어요. 알맞은 생각은?', options: ['이제 다시 안 지켜요', '다음 날 다시 지켜요', '못 지킨 걸 숨겨요'], answer: 1, difficulty: 0.1, explain: '못 지킨 날이 있어도 다음 날 다시 지키면 돼요.' },
            { type: 'short', prompt: '주말에 나에게 물어볼 질문을 하나 써요.' },
          ],
        },
        worksheet: {
          title: '일주일 약속 점검',
          items: [
            { type: 'table', prompt: '약속을 지킨 날에 ○를 해요.', columns: ['약속', '월', '화', '수', '목', '금'], cells: [['고운 말 쓰기', '', '', '', '', ''], ['차례 지키기', '', '', '', '', ''], ['몰래 찍지 않기', '', '', '', '', '']] },
            { type: 'short', prompt: '이번 주 가장 잘 지킨 약속을 써요.' },
          ],
        },
        notes: '점검표는 스스로 돌아보는 것이다. 지킨 날 수를 걷거나 친구와 견주지 않는다.',
      }),
    );
  }

  PaperLessons.registerModules(M);
})();
