/* 창체 법정교육 교육활동 존중(침해 예방) — 초1-2 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/mandatory.json 의 teach 초1-2.
 * 근거: research-mandatory §1 교육활동 침해행위 예방교육(교원지위법 제24조·시행령 제21조 — 초·중·고 연 1회 이상, 학생 활동 중심 예방교육),
 *   §2 인성교육 핵심가치: 존중·배려·소통.
 * 초1-2 기준: 소리로 읽어 주는 짧은 문항, 카드 6자 안팎, 좋아요/안돼요 고르기·따라 하기·노래·구호. 장면·인물은 직접 지은 가상 동물 친구다(토끼 반의 토끼·곰·다람쥐와 그림 속 선생님).
 * 주제 3개(1학년 1 · 2학년 1 · 1·2학년 함께 1) × 도입 2 · 활동 4 · 정리 2 = 24모듈.
 *
 * 이 영역에서 늘 지키는 틀(모든 모듈):
 *   - 초1-2 수준에 맞게 '선생님과 친구의 배움을 지키는 교실 약속'(귀 기울여 듣기·손 들고 기다리기·방해하지 않기·고운 말과 인사)으로만 다룬다.
 *     침해 행위의 종류·법·처분은 학생 화면에 쓰지 않는다.
 *   - 특정 교사나 학생을 탓하지 않는다. 장면 속 장난·미운 말은 그림 속 동물 친구의 '행동'으로만 이야기하고, 그 친구를 나쁜 아이로 부르지 않는다
 *     ("그 행동을 바꾸면 돼요"). 우리 반 실제 친구 이름을 예로 들지 않는다.
 *   - 학생에게 겪은 일(선생님께 혼난 일, 친구가 방해한 일 등)을 묻지 않는다. 마음 눈금·스스로 점검은 '오늘 해 본 것'만 고른다.
 *   - 미운 말 카드는 고르기·나누기로만 쓰고, 역할놀이에서 소리 내어 따라 하지 않는다. 역할놀이는 고운 말만 한다.
 *
 * 수치: 근거 파일에 수치가 없다. 기다리기 3초·5초, 인사·타이머 횟수는 우리 반 약속(연습용 값)이다. 목소리 크기 0~3 단계는 교실 약속 도구다.
 *
 * 사람 확인: (근거 파일에는 예방교육 의무 항목만 있어 일반 학급 운영·인성교육 내용으로 쓴 문장 — 확인할 곳을 함께 적는다)
 *   - 귀 기울여 듣기(눈 보기·고개 끄덕이기), 끼어들지 않기, 손 들고 이름이 불리면 말하기, 친구가 먼저 불리면 손 내리고 듣기
 *       (listen-promise 전체) → 교육부 교육활동 보호 학생 교육 자료·시도교육청 교육활동 존중 학생용 자료, 학교 학급 운영(교실 약속) 자료
 *   - 목소리 크기 0(혼자 공부)·1(짝)·2(모둠)·3(발표) 단계 (no-disturb.activity.voice-level · no-disturb.intro.quiet-rhythm · no-disturb.wrap.star-check)
 *       → 학교 학급 운영 자료(교실 소음 약속 — 단계 이름·수는 학교마다 다르다)
 *   - 수업 중 장난·떠들기·돌아다니기가 친구와 선생님의 배움을 멈추게 한다, 장난치는 친구에게 "지금은 공부 시간이야, 끝나고 놀자"라고 말한다,
 *     쉬는 시간과 수업 시간을 구분한다 (no-disturb 전체) → 교육부 교육활동 보호 학생 교육 자료, 인성교육(배려·존중) 자료
 *   - 선생님께 높임말·바른 인사(멈추기 → 눈 보기 → 허리 숙여 인사), 도움 청하는 말("선생님, 도와주세요", "~해 주실 수 있나요?"),
 *     친한 선생님께도 높임말, 짜증이 나도 소리치지 않기 (kind-words 전체) → 국립국어원 언어 예절 자료, 교육부 인성교육·교육활동 존중 자료
 *   - kind-words.activity.ask-help: '배가 아파요 → 보건실에 가도 될까요'의 학교 절차(보건실 이용 방법)는 학교마다 다르므로 교사가 우리 학교 약속으로 확인
 */
(function () {
  const MOD = (topic, grades) => (o) => Object.assign({ schema: 'edu-module.v1', domain: 'teach', band: '초1-2', topic, grades }, o);
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  const cut = (p) => p.replace(/\.$/, '');
  const C = (id, text, more) => Object.assign({ id, text }, more);
  const idOf = (c) => (typeof c === 'string' ? c : c.id);
  const ids = (a) => a.map(idOf);

  // 두 바구니 나누기(sortboard 글 카드): 기본 6장, 쉬움 4장, 도전 헷갈리는 카드 2장을 more 로 더함(hardTo = 들어갈 바구니 번호 0|1)
  const SB2 = (slots, prompt, ok, no, hard, hardTo, d, more) => {
    const S = (a, b) => ({ [slots[0]]: ids(a), [slots[1]]: ids(b) });
    return {
      prompt, toolOptions: { slots, cards: [ok[0], no[0], ok[1], no[1], ok[2], no[2]] }, target: { sort: S(ok, no) }, difficulty: d,
      levels: {
        easy: { prompt: `${cut(prompt)}(4장).`, toolOptions: { cards: [ok[0], no[0], ok[1], no[1]] }, target: { sort: S(ok.slice(0, 2), no.slice(0, 2)) } },
        challenge: { prompt: `${cut(prompt)}(8장).`, toolOptions: { more: hard }, target: { sort: hardTo ? S(ok, [...no, ...hard]) : S([...ok, ...hard], no) } },
      },
      ...more,
    };
  };
  // 장면 차례(story order): 기본 3장, 쉬움 첫 장면이 놓여 있음, 도전 이어지는 다른 장면에서 할 행동 고르기(pick)
  const ORD = (prompt, cards, ch, d, more) => {
    const i = ids(cards);
    return {
      prompt, toolOptions: { mode: 'order', slots: ['먼저', '다음', '끝'], cards: [cards[2], cards[0], cards[1]] }, target: { order: i }, difficulty: d,
      levels: {
        easy: { state: { at: { [i[0]]: 0, [i[1]]: null, [i[2]]: null } } },
        challenge: { prompt: ch.prompt, toolOptions: { mode: 'pick', basket: ch.basket, cards: [ch.bad[0], ch.good, ch.bad[1]] }, target: { pick: [ch.good.id] } },
      },
      ...more,
    };
  };
  // 말풍선 빈칸(story fill): 기본 빈칸 2개, 쉬움 첫 빈칸 하나, 도전 셋째 빈칸(멈춘 뒤·받은 뒤 할 말)까지
  const BUBBLE = (prompt, who, blanks, wrong, d, more) => {
    const slots = blanks.map((b, k) => ({ id: `f${k + 1}`, who, label: b.label }));
    const fill = (n) => Object.fromEntries(blanks.slice(0, n).map((b, k) => [`f${k + 1}`, b.card.id]));
    const cards = (n) => [...blanks.slice(0, n).map((b) => b.card), ...wrong].sort((a, b) => (a.id < b.id ? -1 : 1));
    return {
      prompt, toolOptions: { mode: 'fill', slots: slots.slice(0, 2), cards: cards(2) }, target: { fill: fill(2) }, difficulty: d,
      levels: {
        easy: { prompt: `${cut(prompt)}(한 칸).`, toolOptions: { slots: slots.slice(0, 1), cards: cards(1) }, target: { fill: fill(1) } },
        challenge: { prompt: `${cut(prompt)}(세 칸).`, toolOptions: { slots, cards: cards(3) }, target: { fill: fill(3) } },
      },
      ...more,
    };
  };
  // 정리 출구: 스스로 점검(timer), 마음 눈금(emotion scale), 규칙 띠 빈칸(pattern fill — 글 조각)
  const SELF = (title, list, prompt) => ({ type: 'tool', tool: 'timer', options: { title }, prompt: prompt || '해 본 것에 표시해요.', target: { selfCheck: list }, difficulty: 0.1 });
  const SCALE = (situation, feeling, prompt) => ({ type: 'tool', tool: 'emotion', options: { mode: 'scale', situation, feeling, steps: 5, scaleLabels: { 1: '조금', 5: '아주 많이' } }, prompt, target: { level: 'any' }, difficulty: 0.1 });
  const BAND = (seq, prompt) => {
    const blanks = [seq.length - 2, seq.length - 1];
    return { type: 'tool', tool: 'pattern', options: { mode: 'fill', seq: seq.map((p, k) => (blanks.includes(k) ? null : p)) }, prompt, target: { fill: blanks.map((k) => seq[k]) }, difficulty: 0.1 };
  };

  // =====================================================================================================
  // 1학년 · 배움을 지키는 귀 기울이기 약속
  const LP = MOD('teach.e12.listen-promise', [1]);
  const OKNO = ['좋아요', '안돼요'];
  const T_LISTEN = [
    LP({
      id: 'teach.e12.listen-promise.intro.picture-pick', type: 'intro', title: '귀 기울이는 친구 그림 고르기',
      method: '귀 기울이는 친구 그림 고르기', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 두 친구(눈 보며 듣기·딴짓하기)만 가리키며 "좋아요" 친구를 함께 고른다.', base: '네 친구(눈 보며 듣기·딴짓하기·끼어들기·고개 끄덕이기) 이야기를 듣고 좋아요 친구를 바구니에 담는 시연을 따라 말한다.', challenge: '"안돼요" 친구(끼어들기)에게 해 줄 말("끝까지 듣고 말하자")을 짝에게 해 본다.' },
      intro: {
        teacher: '"그림 속 토끼 반에서 선생님이 이야기를 들려주세요. 토끼는 선생님 눈을 보고, 곰은 창밖을 보고, 다람쥐는 \'저요 저요!\' 하고 끼어들고, 너구리는 고개를 끄덕여요. 누가 잘 듣고 있을까요?" 친구를 하나씩 짚고, 시연 단추로 \'눈 보며 듣기\'와 \'고개 끄덕이기\'가 바구니에 담기는 모습을 보인다. "생각나면 바로 말하면 더 좋아요"라는 말이 나오면 "다람쥐가 끼어들면 선생님 이야기와 다른 친구 생각은 어떻게 될까요?"라고 되묻는다. 오늘은 선생님과 친구의 말을 귀 기울여 듣는 약속을 배운다고 밝힌다.',
        student: '귀 기울여 듣는 친구를 그림에서 찾아 손가락으로 가리켜요.',
        demo: { tool: 'emotion', options: { mode: 'pick', basket: '좋아요 친구', cards: [C('eye', '눈 보며 듣기'), C('away', '딴짓하기'), C('cut', '끼어들기'), C('nod', '고개 끄덕이기')], shuffle: false }, sequence: [{ pick: ['eye', 'nod'] }] },
        art: { draw: 'a paper classroom where a kind paper teacher tells a story, a paper bunny looking at the teacher, a paper bear looking out the window, a paper squirrel interrupting with a raised voice, and a paper raccoon nodding', banner: '누가 잘 듣고 있을까?' },
      },
      notes: '그림 속 동물 친구의 행동으로만 이야기한다. 우리 반에서 누가 끼어드는지 묻거나 이름을 부르지 않는다.',
    }),
    LP({
      id: 'teach.e12.listen-promise.intro.ear-chant', type: 'intro', title: '"귀는 쫑긋, 손은 번쩍" 구호',
      method: '"귀는 쫑긋, 손은 번쩍" 구호', tool: 'keyboard', minutes: 6,
      levels: { easy: '"귀는 쫑긋(짝짝)" 두 마디만 교사와 함께 손뼉으로 따라 친다.', base: '"귀는 쫑긋(짝짝), 손은 번쩍(짝짝)" 네 마디를 리듬 블록대로 따라 치며 손동작을 함께 한다.', challenge: '네 마디를 친 뒤 끝 마디 리듬을 내가 바꿔 쳐 보고 반이 따라 친다.' },
      intro: {
        teacher: '"귀는 쫑긋(두 손을 귀에), 짝짝! 손은 번쩍(한 손 들기), 짝짝!" 시연 단추로 리듬 블록이 놓이는 모습을 보이고 블록 하나에 손뼉 한 번씩 반 전체가 따라 친다. "손은 번쩍 들고 \'저요!\' 하고 외쳐요"라는 말이 나오면 "손은 번쩍 들되 입은 조용히 — 이름이 불릴 때까지 기다려요"라고 말해 준다. 구호를 함께 외치며 오늘 배울 듣기 약속을 연다.',
        student: '"귀는 쫑긋, 손은 번쩍!"을 손뼉과 손동작에 맞춰 따라 해요.',
        demo: { tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 2, blocks: ['q', 'e', 'h', 'qr'] }, sequence: [{ rhythm: ['e', 'e', 'q', 'q', 'e', 'e', 'e', 'e', 'q', 'q', 'e', 'e'] }] },
        art: { draw: 'paper children cupping their ears and raising one hand quietly, clapping together, a big paper ear and a raised paper hand shapes floating above', banner: '귀는 쫑긋, 손은 번쩍' },
      },
      notes: '구호는 수업용으로 지은 것이다. 소리는 블록을 누르거나 듣기 단추를 눌렀을 때만 난다.',
    }),
    LP({
      id: 'teach.e12.listen-promise.activity.raise-wait', type: 'activity', title: '손 들고 기다리기 따라 하기',
      method: '손 들고 기다리기 따라 하기', tool: 'timer', minutes: 14,
      levels: { easy: '순서 카드 두 장(손 들기·말하기)을 놓고, 기다리기를 3초로 맞춰 따라 한 뒤 두 가지를 표시한다.', base: '순서 카드 세 장(손 들기·기다리기·말하기)을 놓고, 기다리기 5초·3번으로 맞춰 따라 한 뒤 세 가지를 표시한다.', challenge: '순서 카드에 \'끄덕이며 듣기\'까지 네 장을 놓고, 친구가 말할 때 고개 끄덕이기 동작도 해 본 뒤 표시한다.' },
      activity: {
        title: '손 들고 기다렸다 말하기', tool: 'timer',
        teacher: '"말하고 싶을 때는 손을 들어요. 그리고 이름이 불릴 때까지 기다려요. 이름이 불리면 말해요." 카드 차례를 맞춘 뒤 타이머의 \'기다리기\' 구간 동안 반 전체가 손을 든 채 입을 다물고 기다리고, \'말하기\' 구간에 선생님이 부른 한 명이 "제 생각은요…"라고 말해 본다. "손 들었으니까 바로 말해도 돼요"라는 학생에게 "모두 손 들고 동시에 말하면 선생님은 누구 말을 들을 수 있을까요?"라고 묻는다. 이름이 불리지 않은 친구도 손을 내리고 끄덕이며 듣는 것이 약속이라고 짚는다.',
        task: '손 들고 기다렸다 말하는 차례를 맞추고 따라 해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '말하는 차례로 카드를 놓아요.', toolOptions: { title: '말하고 싶을 때', cards: ['말하기', '손 들기', '기다리기'] }, target: { order: ['손 들기', '기다리기', '말하기'] }, difficulty: 0.1,
            levels: { easy: { prompt: '말하는 차례로 놓아요(2장).', toolOptions: { cards: ['말하기', '손 들기'] }, target: { order: ['손 들기', '말하기'] } },
              challenge: { prompt: '친구 차례까지 놓아요(4장).', toolOptions: { cards: ['끄덕이며 듣기', '말하기', '손 들기', '기다리기'] }, target: { order: ['손 들기', '기다리기', '말하기', '끄덕이며 듣기'] } } } },
          { prompt: '기다리기 5초, 3번 맞춰요.', toolOptions: { title: '기다리기 연습(우리 반 약속)', labels: ['기다리기', '말하기'], plan: { work: 3, rest: 5, rounds: 1 }, workStep: 1, restStep: 1 }, target: { plan: { work: 5, rounds: 3 } }, difficulty: 0.15,
            levels: { easy: { prompt: '기다리기 3초, 3번 맞춰요.', target: { plan: { work: 3, rounds: 3 } } } } },
          { prompt: '해 본 것에 표시해요.', toolOptions: { title: '오늘 해 본 약속' }, target: { selfCheck: ['손 들었어요', '기다렸어요', '불리면 말했어요'] }, difficulty: 0.15,
            levels: { easy: { prompt: '해 본 것에 표시해요(2개).', target: { selfCheck: ['손 들었어요', '불리면 말했어요'] } },
              challenge: { prompt: '해 본 것에 표시해요(4개).', target: { selfCheck: ['손 들었어요', '기다렸어요', '불리면 말했어요', '끄덕이며 들었어요'] } } },
            conclude: '손 들고, 기다리고, 이름이 불리면 말해요. 친구가 말할 때는 끄덕이며 들어요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '차례를 따라 써요.', text: '손 들기 → ___ → 말하기', answer: '기다리기' }] },
      notes: '기다리기 3초·5초와 횟수는 우리 반 연습 약속이다. 이름이 불리지 않아 속상해하는 학생에게는 "다음 차례에 꼭 들을게"라고 약속한다.',
    }),
    LP({
      id: 'teach.e12.listen-promise.activity.good-bad', type: 'activity', title: '듣기 약속 좋아요·안돼요',
      method: '좋아요·안돼요 카드', tool: 'sortboard', minutes: 14,
      levels: { easy: '카드 4장, 바구니 옆에 든 장 수가 보이고 틀린 바구니에 넣으면 까닭을 듣고 되돌아온다.', base: '카드 6장을 다 넣은 뒤 확인한다.', challenge: '"손 들고 외치기"처럼 반만 맞는 헷갈리는 카드 2장이 더 들어오고, 교사가 안돼요 카드마다 "어떻게 바꿀까?"를 물으면 말로 바꿔 본다.' },
      activity: {
        title: '듣기 약속 바구니', tool: 'sortboard',
        teacher: '"이렇게 하면 좋아요일까요, 안돼요일까요?" 카드를 하나씩 소리 내어 읽고, 넣기 전에 반 전체가 엄지를 위나 아래로 먼저 보인다. "친구 말은 안 들어도 선생님 말만 들으면 돼요"라는 학생에게 "친구가 발표할 때 내가 딴짓하면 친구 마음은 어떨까요? 친구 말도 배움이에요"라고 묻는다. "손 들고 외치기"에는 "손은 잘 들었지만 외치면 다른 친구 생각이 묻혀요"라고 짚는다. 안돼요 카드는 그 행동을 바꾸면 된다는 점을 짚는다.',
        task: '듣기 약속 카드를 좋아요·안돼요 바구니에 나누어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
        items: [
          SB2(OKNO, '선생님 말씀 들을 때를 나누어요.', ['눈 보며 듣기', '손 들기', '고개 끄덕이기'], ['끼어들기', '떠들기', '딴짓하기'], ['손 들고 외치기', '작게 혼잣말'], 1, 0.1),
          SB2(OKNO, '친구가 발표할 때를 나누어요.', ['친구 보며 듣기', '다 듣고 손 들기', '박수 쳐 주기'], ['말 자르기', '등 돌리기', '큰 소리 웃기'], ['"틀렸어!" 외치기', '책 넘기기'], 1, 0.15),
          SB2(OKNO, '모둠에서 말할 때를 나누어요.', ['차례 기다리기', '"네 생각은?"', '끝까지 듣기'], ['혼자만 말하기', '소리치기', '"내가 먼저!"'], ['손 안 들고 답', '친구 말 흉내'], 1, 0.2, { conclude: '선생님 말씀도, 친구 말도 눈 보고 끝까지 들어요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '좋으면 ○, 안 되면 ×를 써요.', columns: ['행동', '○ / ×'], cells: [['눈 보며 듣기', ''], ['끼어들기', ''], ['박수 쳐 주기', ''], ['등 돌리기', '']], answer: '○, ×, ○, ×' }],
        easy: [{ type: 'choice', prompt: '좋은 행동에 ○ 해요.', options: ['눈 보며 듣기', '딴짓하기'], answer: '눈 보며 듣기' }] },
      notes: '분류판 카드 한 장의 정답 바구니는 하나라서, 계획의 \'안돼요 카드를 좋아요 카드와 짝 짓기\'는 도전 단계에서 교사 발문(말로 바꾸기)으로 한다.',
    }),
    LP({
      id: 'teach.e12.listen-promise.activity.talk-order', type: 'activity', title: '말하고 싶을 때 차례 놓기',
      method: '말하고 싶을 때 차례', tool: 'story', minutes: 14,
      levels: { easy: '첫 장면이 놓여 있어 남은 두 장면만 놓고, 놓으면 바로 맞는지 알려 준다.', base: '장면 카드 세 장을 차례대로 놓는다.', challenge: '차례를 놓는 대신, 이어지는 다른 장면(친구가 먼저 불렸어요 등)에서 할 행동 카드를 고른다.' },
      activity: {
        title: '말하고 싶을 때 장면 차례', tool: 'story',
        teacher: '"토끼가 말하고 싶은 게 생겼어요. 맨 먼저 무엇을 할까요?" 카드를 놓은 뒤 반 전체가 차례대로 몸으로 따라 한다(손 들기 → 입 다물고 기다리기 → 이름 불리면 "제 생각은요"). "기다리면 잊어버려요"라는 학생에게 "잊을 것 같으면 손가락 하나를 꼭 쥐고 기억해 둘 수 있어요"라고 말해 준다. 선생님이 다른 친구와 이야기 중일 때 옆에서 기다리는 것도 배움을 지키는 일이라고 짚는다.',
        task: '말하고 싶을 때의 장면을 차례대로 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          ORD('말하고 싶어요. 차례로 놓아요.', [C('raise', '손을 들어요', { motif: 'sun' }), C('wait', '기다려요', { motif: 'sun' }), C('talk', '불리면 말해요', { motif: 'sun' })],
            { prompt: '친구가 먼저 불렸어요. 골라요.', basket: '할 행동', good: C('down', '손 내리고 들어요'), bad: [C('shout', '"나요 나!"'), C('wave', '손 계속 흔들기')] }, 0.1),
          ORD('선생님이 다른 친구와 말해요.', [C('side', '옆에서 기다려요', { motif: 'house' }), C('end', '말이 끝나요', { motif: 'house' }), C('ask', '"질문 있어요"', { motif: 'house' })],
            { prompt: '"잠깐만" 하시면? 골라요.', basket: '할 행동', good: C('seat', '자리에서 기다려요'), bad: [C('call', '계속 불러요'), C('pull', '옷 잡아당기기')] }, 0.15),
          ORD('모둠에서 말하고 싶어요.', [C('listen', '친구 말 끝까지', { motif: 'tree' }), C('turn', '"내 차례야?"', { motif: 'tree' }), C('say', '내 생각 말해요', { motif: 'tree' })],
            { prompt: '둘이 같이 말했어요. 골라요.', basket: '할 행동', good: C('you', '"먼저 해"'), bad: [C('loud', '더 크게 말해요'), C('quit', '말 안 할래')] }, 0.2,
            { conclude: '말하고 싶으면 손 들고 기다려요. 친구가 먼저면 손 내리고 들어요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '친구가 먼저 불렸어요. 나는?', options: ['손 내리고 들어요', '"나요 나!" 외쳐요'], answer: '손 내리고 들어요' }] },
    }),
    LP({
      id: 'teach.e12.listen-promise.activity.promise-board', type: 'activity', title: '우리 반 듣기 약속판 꾸미기',
      method: '우리 반 약속판 꾸미기', tool: 'collage', minutes: 14,
      levels: { easy: '귀(반원)·손(나뭇잎) 조각을 하나씩, 이름 별 하나를 붙인다(조각 2개 이상).', base: '귀·손·입(동그라미) 조각 3개와 큰 이름 별을 붙여 약속판을 꾸민다(조각 4개 이상).', challenge: '약속판에 내가 지킬 약속 그림(하트) 조각을 하나 더 붙이고 어떤 약속인지 짝에게 말한다.' },
      activity: {
        title: '듣기 약속판 꾸미기', tool: 'collage',
        teacher: '"반원은 쫑긋 귀, 나뭇잎은 번쩍 손, 동그라미는 기다리는 입, 별은 내 이름 별이에요." 칠판에 조각 뜻을 그려 두고, 조각을 붙일 때마다 "이 조각은 어떤 약속이에요?"라고 묻는다(기다릴 반응: "귀 기울여 들어요", "손 들어요"). 조각만 많이 붙이고 약속을 말하지 못하는 학생에게 "이 귀 조각은 누구 말을 들을 때 쓸까요?"라고 묻는다. 다 꾸민 약속판은 칠판 옆에 모아 붙여 \'우리 반 약속판\'으로 만든다.',
        task: '귀·손·입 조각과 내 이름 별로 약속판을 꾸며요.', levels: { easy: { shapes: ['semi', 'leaf', 'circle', 'star'] }, base: { shapes: ['semi', 'leaf', 'circle', 'star', 'square'] }, challenge: { shapes: ['semi', 'leaf', 'circle', 'star', 'square', 'heart'] } },
        items: [
          { prompt: '귀·손·입 조각을 붙여요.', toolOptions: {}, target: { has: [{ shape: 'semi', min: 1 }, { shape: 'leaf', min: 1 }, { shape: 'circle', min: 1 }] }, difficulty: 0.1,
            levels: { easy: { prompt: '귀·손 조각을 붙여요.', target: { has: [{ shape: 'semi', min: 1 }, { shape: 'leaf', min: 1 }] } } } },
          { prompt: '큰 이름 별을 달아요.', toolOptions: {}, target: { has: [{ shape: 'star', size: 'l', n: 1 }], pieces: { min: 4 } }, difficulty: 0.15,
            levels: { easy: { prompt: '이름 별 하나를 달아요.', target: { has: [{ shape: 'star', min: 1 }], pieces: { min: 2 } } } } },
          { prompt: '약속판을 꾸미고 표시해요.', toolOptions: {}, target: { selfCheck: ['약속판을 꾸몄어요', '약속을 말했어요'], minPieces: 4 }, difficulty: 0.2,
            levels: { easy: { prompt: '조각 2개로 꾸미고 표시해요.', target: { selfCheck: ['약속판을 꾸몄어요', '약속을 말했어요'], minPieces: 2 } },
              challenge: { prompt: '지킬 약속 하트도 붙여요.', target: { has: [{ shape: 'heart', min: 1 }], selfCheck: ['약속판을 꾸몄어요', '짝에게 말했어요'], minPieces: 5 } } },
            conclude: '쫑긋 귀, 번쩍 손, 기다리는 입 — 우리 반 듣기 약속이에요.' },
        ],
      },
      worksheet: { items: [{ type: 'draw', prompt: '귀 기울여 듣는 내 모습을 그려요.' }] },
      notes: '조각 뜻(반원 = 귀, 나뭇잎 = 손, 동그라미 = 입, 별 = 이름 별, 하트 = 내가 지킬 약속)은 칠판에 그려 두고 시작한다. 이름 별에는 실제 이름 대신 별만 단다.',
    }),
    LP({
      id: 'teach.e12.listen-promise.wrap.promise-pattern', type: 'wrap', title: '"귀·손·입" 약속 무늬 잇기',
      method: '약속 무늬 이어 붙이기', tool: 'pattern', minutes: 6,
      levels: { easy: '교사가 띠를 처음부터 소리 내어 읽어 주고(귀·손·입) 빈칸 자리를 함께 짚으며 채운다.', base: '세 조각이 되풀이되는 띠의 빈칸 두 곳을 스스로 채우고 약속을 소리 내어 말한다.', challenge: '빈칸을 채운 뒤 나만의 약속 무늬(예: 귀·귀·손)를 말로 지어 반이 따라 읽게 한다.' },
      wrap: {
        teacher: '"귀(쫑긋 들어요), 손(번쩍 들어요), 입(기다렸다 말해요) — 이 셋이 되풀이돼요. 빈칸에는 무엇이 올까요?" 띠를 반 전체가 손동작과 함께 읽은 뒤 채운다. 출구 2번에서 "바로 말해요"를 고른 학생에게 "생각이 떠오르면 손을 들고 마음속에 꼭 쥐고 있어요. 이름이 불리면 말해요"라고 말해 준다. 마지막에 "귀는 쫑긋, 손은 번쩍!"을 다 같이 외친다.',
        exitTicket: [
          BAND(['귀', '손', '입', '귀', '손', '입', '귀', '손', '입'], '빈칸에 알맞은 조각을 넣어요.'),
          { type: 'choice', prompt: '생각이 떠오르면 어떻게 해요?', options: ['바로 말해요', '손 들고 기다려요'], answer: 1, difficulty: 0.1, explain: '손을 들고 이름이 불리면 말해요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '귀 기울이기 약속',
        items: [
          { type: 'blank', prompt: '약속 무늬를 이어 써요.', text: '귀 → 손 → 입 → 귀 → 손 → ___', answer: '입' },
          { type: 'check', prompt: '내가 지킬 약속에 ✓ 해요.', options: ['눈 보며 들어요', '손 들고 기다려요', '친구 말도 끝까지 들어요'] },
        ],
        easy: { note: '"귀·손·입"을 손동작과 함께 떠올려요.', items: [{ type: 'draw', prompt: '쫑긋 귀를 그려요.' }] },
      },
    }),
    LP({
      id: 'teach.e12.listen-promise.wrap.my-weather', type: 'wrap', title: '약속 지킨 내 마음 날씨',
      method: '약속 지킨 내 마음 날씨', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 눈금을 "조금·보통·아주 많이" 세 가지로 읽어 주며 고르게 한다.', base: '눈금 5칸에서 오늘 듣기 약속을 지킨 내 마음 크기를 고른다.', challenge: '눈금을 고른 뒤 내일 더 잘할 약속(눈 보기·손 들기·기다리기)을 하나 골라 말한다.' },
      wrap: {
        teacher: '"오늘 귀 기울여 듣는 약속을 지켜 보니 내 마음은 얼마나 뿌듯한가요?" 눈금을 고른 뒤 손가락으로 몇 칸인지 보여 주게 한다. 작은 칸을 고른 학생에게 "지키려고 한 것만으로도 시작했어요. 내일은 한 칸 더 올라가 봐요"라고 말해 준다. 출구 2번에서 "끼어들어요"를 고른 학생과는 친구 발표를 끝까지 듣는 연습을 한 번 더 한다. 누가 약속을 못 지켰는지는 말하지 않는다.',
        exitTicket: [
          SCALE('오늘 듣기 약속을 지켰어요.', '뿌듯함', '내 마음은 얼마나 뿌듯한가요?'),
          { type: 'choice', prompt: '친구가 발표해요. 나는?', options: ['끼어들어요', '끝까지 들어요'], answer: 1, difficulty: 0.1, explain: '친구가 말할 때는 끝까지 들어요.' },
          { type: 'choice', prompt: '내일 더 잘할 약속을 골라요.', options: ['눈 보며 듣기', '손 들고 기다리기'], answer: 0, difficulty: 0.1, explain: '두 약속 모두 좋아요. 고른 약속을 내일 해 봐요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '내 마음 날씨',
        items: [
          { type: 'choice', prompt: '귀 기울여 들으면 친구 마음은?', options: ['기뻐요', '속상해요'], answer: '기뻐요' },
          { type: 'draw', prompt: '오늘 내 마음 날씨를 그려요.' },
        ],
      },
      notes: '출구 3번(내일 더 잘할 약속)은 정답이 하나가 아니다 — 고른 까닭을 들어 준다.',
    }),
  ];

  // =====================================================================================================
  // 2학년 · 친구와 선생님의 배움을 방해하지 않아요
  const ND = MOD('teach.e12.no-disturb', [2]);
  const HELPBLOCK = ['돕는 행동', '막는 행동'];
  const LESSON_BREAK = ['수업 시간', '쉬는 시간'];
  const SBTIME = (prompt, ok, no, hard, chCards, chSort, d, more) => {
    const base = SB2(HELPBLOCK, prompt, ok, no, hard, 1, d, more);
    base.levels.challenge = { prompt: '수업 때·쉬는 때로 다시 나눠요.', toolOptions: { slots: LESSON_BREAK, cards: chCards }, target: { sort: chSort } };
    return base;
  };
  const T_NODIST = [
    ND({
      id: 'teach.e12.no-disturb.intro.prank-branch', type: 'intro', title: '책 읽는데 옆에서 장난',
      method: '책 읽는데 옆에서 장난', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 두 보기(계속 장난·멈춰요)를 읽어 주고 반 전체가 손을 들어 고른 뒤 결과를 함께 본다.', base: '두 보기 가운데 고르고, 결과 그림을 본 뒤 책을 읽던 다람쥐의 마음을 한 낱말로 말한다.', challenge: '장난을 멈추자고 할 말("지금은 책 읽는 시간이야")을 짝에게 해 본다.' },
      intro: {
        teacher: '"다람쥐가 책을 읽고 있어요. 곰이 옆에서 연필로 콕콕 찔러요. 곰은 어떻게 하면 좋을까요?" 두 보기를 읽어 주고 반 전체가 손을 들어 먼저 고른 뒤, 시연 단추로 \'멈춰요\'를 고르면 다람쥐가 다시 책을 읽는 결과를 보인다. "살짝 찌른 건 장난이라 괜찮아요"라는 말이 나오면 "다람쥐 얼굴을 보세요. 장난이 작아도 다람쥐 책 읽기는 멈췄어요"라고 되묻는다. 곰은 나쁜 친구가 아니라 행동을 멈추면 된다는 점과, 오늘은 배움을 방해하지 않는 법을 배운다고 밝힌다.',
        student: '곰이 어떻게 하면 좋을지 손을 들어 골라 보아요.',
        demo: { tool: 'emotion', options: { mode: 'branch', situation: '다람쥐가 책을 읽는데 곰이 연필로 콕콕 찔러요.', ask: '곰은 어떻게 할까요?', motif: 'house', choices: [{ id: 'more', text: '계속 장난쳐요', result: '다람쥐가 책을 못 읽어요.', mood: '속상함' }, { id: 'stop', text: '장난을 멈춰요', result: '다람쥐가 다시 책을 읽어요.', mood: '편안함' }] }, sequence: [{ choice: 'stop' }] },
        art: { draw: 'a paper squirrel reading a paper book at a desk while a paper bear beside it pokes with a pencil, then the bear putting the pencil down and both reading quietly', banner: '장난을 멈추면?' },
      },
      notes: '그림 속 곰의 행동으로만 이야기하고 우리 반에서 누가 장난치는지 묻지 않는다.',
    }),
    ND({
      id: 'teach.e12.no-disturb.intro.quiet-rhythm', type: 'intro', title: '조용조용 리듬 따라 치기',
      method: '조용조용 리듬 따라 치기', tool: 'keyboard', minutes: 6,
      levels: { easy: '두 박(짝 짝)만 교사를 따라 작게 친다.', base: '네 박 두 마디 리듬을 시연대로 따라 치고, 교사 손짓에 맞춰 작게·크게 바꿔 친다.', challenge: '작게·크게를 섞어 우리 모둠 리듬을 지어 보고 반이 따라 친다.' },
      intro: {
        teacher: '"짝, 짝, 짜~안(크게) — 짝짝짝짝 짜~안(작게)." 시연 단추로 리듬 블록이 놓이는 모습을 보인 뒤, 선생님 손이 위로 가면 크게, 아래로 가면 작게(손가락 두 개로 손바닥 톡톡) 따라 친다. "크게 치면 더 신나요"라는 말이 나오면 "크게 칠 때와 작게 칠 때가 있어요. 수업 시간은 어떤 소리가 어울릴까요?"라고 되묻는다. 리듬이 끝나면 "수업 시간엔 작게"를 몸으로 익혔다고 말한다.',
        student: '선생님 손이 아래로 가면 작게, 위로 가면 크게 따라 쳐요.',
        demo: { tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 2, blocks: ['q', 'e', 'h', 'qr'] }, sequence: [{ rhythm: ['q', 'q', 'h', 'e', 'e', 'e', 'e', 'h'] }] },
        art: { draw: 'paper children tapping two fingers softly on their palms, a paper teacher lowering one hand to signal quiet, small and big paper sound waves', banner: '수업 시간엔 작게' },
      },
      notes: '리듬 블록은 박만 나타낸다. 작게·크게는 교사의 손짓으로 정한다.',
    }),
    ND({
      id: 'teach.e12.no-disturb.activity.voice-level', type: 'activity', title: '목소리 크기 연습판',
      method: '목소리 크기 연습판', tool: 'timer', minutes: 14,
      levels: { easy: '목소리 카드 두 장(0 혼자 공부·3 발표)을 작은 차례로 놓고, 두 크기로 따라 말한 것에 표시한다.', base: '목소리 카드 네 장(0 혼자 공부·1 짝·2 모둠·3 발표)을 작은 차례로 놓고, 네 크기로 따라 말한 것에 표시한다.', challenge: '숫자 없는 장면 카드(혼자 책 읽기·짝과 말하기·모둠 토의·앞에 나와 발표)를 듣고 작은 소리 차례로 스스로 놓는다.' },
      activity: {
        title: '목소리 크기 따라 말하기', tool: 'timer',
        teacher: '"목소리 0은 소리 없이, 1은 짝만 들리게 속삭이기, 2는 모둠만 들리게, 3은 교실 모두 들리게 발표하는 소리예요." 카드를 놓은 뒤 반 전체가 "안녕"을 0부터 3까지 크기를 바꿔 말해 본다. "모둠 활동이니까 3으로 크게 말해요"라는 학생에게 "모둠마다 3으로 말하면 옆 모둠 친구 말이 들릴까요?"라고 묻는다. 장면에 맞는 크기를 고르는 것이 친구의 배움을 지키는 일이라고 짚는다.',
        task: '목소리 크기 카드를 작은 차례로 놓고 따라 말해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '작은 소리 차례로 놓아요.', toolOptions: { title: '목소리 크기', cards: ['2 모둠', '0 혼자 공부', '3 발표', '1 짝'] }, target: { order: ['0 혼자 공부', '1 짝', '2 모둠', '3 발표'] }, difficulty: 0.1,
            levels: { easy: { prompt: '작은 소리 차례로 놓아요(2장).', toolOptions: { cards: ['3 발표', '0 혼자 공부'] }, target: { order: ['0 혼자 공부', '3 발표'] } },
              challenge: { prompt: '장면을 작은 소리 차례로 놓아요.', toolOptions: { cards: ['모둠 토의', '혼자 책 읽기', '앞에 나와 발표', '짝과 말하기'] }, target: { order: ['혼자 책 읽기', '짝과 말하기', '모둠 토의', '앞에 나와 발표'] } } } },
          { prompt: '따라 말한 크기에 표시해요.', toolOptions: { title: '오늘 해 본 목소리' }, target: { selfCheck: ['0 소리 없이', '1 속삭이기', '2 모둠 소리', '3 발표 소리'] }, difficulty: 0.15,
            levels: { easy: { prompt: '따라 말한 크기에 표시해요(2개).', target: { selfCheck: ['0 소리 없이', '3 발표 소리'] } } } },
          { prompt: '짝과 1 크기로 말해 봐요.', free: true, talk: true, difficulty: 0.15, conclude: '혼자 공부는 0, 짝은 1, 모둠은 2, 발표는 3 — 장면에 맞는 목소리로 말해요.' },
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '알맞은 목소리 크기를 써요.', columns: ['장면', '크기(0~3)'], cells: [['혼자 책 읽기', ''], ['짝과 말하기', ''], ['앞에 나와 발표', '']], answer: '0, 1, 3' }] },
      notes: '목소리 0~3 단계는 교실 약속 도구다. 우리 반이 쓰는 단계 이름이 있으면 그 이름으로 바꿔 부른다.',
    }),
    ND({
      id: 'teach.e12.no-disturb.activity.help-block', type: 'activity', title: '배움을 돕는 행동·막는 행동',
      method: '배움을 돕는 행동·막는 행동', tool: 'sortboard', minutes: 14,
      levels: { easy: '카드 4장, 바구니 옆에 든 장 수가 보이고 틀린 바구니에 넣으면 까닭을 듣고 되돌아온다.', base: '카드 6장을 돕는·막는 바구니에 다 넣은 뒤 확인한다.', challenge: '같은 행동을 \'수업 시간\'·\'쉬는 시간\' 바구니로 다시 나눈다(쉬는 시간에는 해도 되는 놀이가 있다).' },
      activity: {
        title: '돕는 행동·막는 행동 바구니', tool: 'sortboard',
        teacher: '"이 행동은 친구와 선생님의 배움을 도울까요, 막을까요?" 카드를 소리 내어 읽고 넣기 전에 반 전체가 두 손 모으기(돕는)나 엑스(막는)를 먼저 보인다. "장난감 꺼내기는 아무도 신경 안 써요"라는 학생에게 "장난감 소리가 나고 짝이 그걸 보면, 짝은 선생님 말씀을 들을 수 있을까요?"라고 묻는다. 도전 단계에서는 "장난감 놀이는 나쁜 걸까요? 언제 하면 될까요?"라고 물어 쉬는 시간과 수업 시간을 나누는 것이 핵심이라고 짚는다.',
        task: '배움을 돕는 행동과 막는 행동을 바구니에 나누어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
        items: [
          SBTIME('수업 시작할 때를 나누어요.', ['책 펴기', '연필 준비', '자리에 앉기'], ['떠들기', '돌아다니기', '장난감 꺼내기'], [],
            ['책 펴기', '장난감 놀이', '큰 소리 웃기', '연필 준비'], { '수업 시간': ['책 펴기', '연필 준비'], '쉬는 시간': ['장난감 놀이', '큰 소리 웃기'] }, 0.1),
          SBTIME('공부하는 중을 나누어요.', ['짝 돕기', '작게 묻기', '선생님 보기'], ['책상 두드리기', '종이 던지기', '큰 소리 노래'], [],
            ['작게 묻기', '친구와 수다', '선생님 보기', '공기놀이'], { '수업 시간': ['작게 묻기', '선생님 보기'], '쉬는 시간': ['친구와 수다', '공기놀이'] }, 0.15),
          SBTIME('모둠 활동 때를 나누어요.', ['같이 정리', '차례 지키기', '도구 나누기'], ['혼자 독차지', '딴 모둠 가기', '물건 숨기기'], [],
            ['도구 나누기', '그림 놀이', '차례 지키기', '노래 부르기'], { '수업 시간': ['도구 나누기', '차례 지키기'], '쉬는 시간': ['그림 놀이', '노래 부르기'] }, 0.2,
            { conclude: '수업 시간에는 배움을 돕고, 노는 것은 쉬는 시간에 해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '도우면 ○, 막으면 ×를 써요.', columns: ['행동', '○ / ×'], cells: [['책 펴기', ''], ['떠들기', ''], ['짝 돕기', ''], ['종이 던지기', '']], answer: '○, ×, ○, ×' }],
        easy: [{ type: 'choice', prompt: '배움을 돕는 행동에 ○ 해요.', options: ['연필 준비', '돌아다니기'], answer: '연필 준비' }] },
      notes: '분류판 카드 한 장의 정답 바구니는 하나라서, 계획의 \'막는 카드를 쉬는 시간에 할 수 있는지 다시 나누기\'는 도전 단계에서 수업 시간·쉬는 시간 바구니로 새로 나누는 문항으로 한다.',
    }),
    ND({
      id: 'teach.e12.no-disturb.activity.stop-words', type: 'activity', title: '장난치는 친구에게 할 말',
      method: '장난치는 친구에게 할 말', tool: 'story', minutes: 14,
      levels: { easy: '말풍선 빈칸 1개에 알맞은 말 카드를 넣는다.', base: '말풍선 빈칸 2개("지금은 공부 시간이야", "끝나고 놀자")에 말 카드를 넣는다.', challenge: '친구가 멈춘 뒤 할 말("멈춰 줘서 고마워")까지 빈칸 3개를 채운다.' },
      activity: {
        title: '장난 멈추자고 말하기', tool: 'story',
        teacher: '"곰이 수업 중에 다람쥐에게 장난을 걸어요. 다람쥐는 뭐라고 말하면 좋을까요?" 말풍선을 읽어 주고, 카드를 넣은 뒤 짝과 한 명은 다람쥐가 되어 고운 말만 소리 내어 해 본다. "저리 가!라고 소리쳐요"를 넣는 학생에게 "소리치면 다른 친구 공부도 멈춰요. 작은 목소리로 할 수 있는 말은 무엇일까요?"라고 묻는다. 친구가 멈추면 "고마워"라고 말해 주는 것까지가 약속이라고 짚는다. 말해도 멈추지 않으면 선생님께 조용히 알려도 된다고 덧붙인다.',
        task: '말풍선 빈칸에 장난을 멈추자는 말을 넣어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          BUBBLE('연필로 콕콕 찔러요. 채워요.', '다람쥐', [{ label: '곰아, 지금은 ___', card: C('study', '공부 시간이야') }, { label: '___ 놀자!', card: C('later', '끝나고') }, { label: '멈춰 줘서 ___', card: C('thanks', '고마워') }], [C('poke', '같이 찌르자'), C('away', '저리 가!')], 0.1),
          BUBBLE('책상을 둥둥 두드려요. 채워요.', '토끼', [{ label: '곰아, 소리가 ___', card: C('loud', '좀 커') }, { label: '___ 해 줄래?', card: C('quiet', '조용히') }, { label: '같이 ___', card: C('learn', '공부하자') }], [C('drum', '더 세게!'), C('shout', '시끄러워!')], 0.15),
          BUBBLE('지우개를 던져요. 채워요.', '다람쥐', [{ label: '지우개는 ___', card: C('desk', '책상 위에') }, { label: '쉬는 시간에 ___', card: C('play', '같이 놀자') }, { label: '___, 고마워!', card: C('stopped', '멈췄구나') }], [C('throw', '나도 던질래'), C('mad', '바보야!')], 0.2,
            { conclude: '"지금은 공부 시간이야, 끝나고 놀자" — 작은 목소리로 고운 말을 해요. 멈추면 "고마워".' }),
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '지금은 공부 시간이야, ___ 놀자!', answer: '끝나고' }] },
      notes: '역할놀이에서는 고운 말 카드만 소리 내어 한다. 미운 말 카드("바보야!" 등)는 고르지 않을 카드로만 쓴다.',
    }),
    ND({
      id: 'teach.e12.no-disturb.activity.quiet-sign', type: 'activity', title: '"쉿, 배우는 중" 신호 카드',
      method: '조용 신호 카드 만들기', tool: 'collage', minutes: 14,
      levels: { easy: '손가락(긴 네모)·입(동그라미) 조각을 하나씩 붙인다(조각 2개 이상).', base: '손가락·입 조각에 내가 고른 색 조각을 더해 3개 이상 붙여 신호 카드를 만든다.', challenge: '내 카드에 더해 모둠이 함께 쓸 신호 조각을 붙여 5개 이상으로 꾸미고, 붙일 곳을 정한다.' },
      activity: {
        title: '조용 신호 카드 꾸미기', tool: 'collage',
        teacher: '"긴 네모는 \'쉿\' 하는 손가락, 동그라미는 입이에요. 친구가 배우는 중이라는 걸 알려 주는 신호 카드를 만들어 볼까요?" 칠판에 조각 뜻을 그려 두고, 카드를 만든 뒤 반 전체가 손가락을 입에 대고 "쉿" 신호를 해 본다. "신호 카드로 친구한테 조용히 하라고 혼내요"라는 말이 나오면 "신호는 혼내는 게 아니라 \'나 지금 배우는 중이야\'라고 알려 주는 거예요"라고 말해 준다.',
        task: '"쉿, 배우는 중" 신호 카드를 조각으로 꾸며요.', levels: { easy: { shapes: ['rect', 'circle', 'heart'] }, base: { shapes: ['rect', 'circle', 'heart', 'star', 'leaf'] }, challenge: { shapes: ['rect', 'circle', 'heart', 'star', 'leaf', 'square'] } },
        items: [
          { prompt: '손가락과 입 조각을 붙여요.', toolOptions: {}, target: { has: [{ shape: 'rect', min: 1 }, { shape: 'circle', min: 1 }] }, difficulty: 0.1 },
          { prompt: '고른 색 조각을 더 붙여요.', toolOptions: {}, target: { has: [{ shape: 'rect', min: 1 }], pieces: { min: 3 } }, difficulty: 0.15,
            levels: { easy: { prompt: '조각 2개를 붙여요.', target: { pieces: { min: 2 } } } } },
          { prompt: '신호 카드를 꾸미고 표시해요.', toolOptions: {}, target: { selfCheck: ['신호 카드를 만들었어요', '"쉿" 신호를 해 봤어요'], minPieces: 3 }, difficulty: 0.2,
            levels: { easy: { prompt: '조각 2개로 꾸미고 표시해요.', target: { selfCheck: ['신호 카드를 만들었어요', '"쉿" 신호를 해 봤어요'], minPieces: 2 } },
              challenge: { prompt: '모둠 신호도 붙이고 표시해요.', target: { selfCheck: ['신호 카드를 만들었어요', '모둠 신호를 붙였어요', '붙일 곳을 정했어요'], minPieces: 5 } } },
            conclude: '"쉿, 배우는 중" — 신호는 혼내는 게 아니라 배우는 중이라고 알려 주는 거예요.' },
        ],
      },
      worksheet: { items: [{ type: 'draw', prompt: '"쉿, 배우는 중" 신호 카드를 그려요.' }] },
      notes: '조각 뜻(긴 네모 = 손가락, 동그라미 = 입)은 칠판에 그려 두고 시작한다. 실물 신호 카드는 색종이로 만들어 책상에 붙여도 된다.',
    }),
    ND({
      id: 'teach.e12.no-disturb.wrap.friend-weather', type: 'wrap', title: '방해받은 친구 마음 날씨',
      method: '방해받은 친구 마음 날씨', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 마음 카드 두 장(속상함·신남)만 읽어 주고 그림 속 친구에게 함께 잇는다.', base: '마음 카드 네 장 가운데 장난 때문에 발표를 못 한 친구의 마음을 골라 잇는다.', challenge: '마음을 이은 뒤 그 친구에게 할 말("미안해, 다시 발표해")을 고르고 짝에게 해 본다.' },
      wrap: {
        teacher: '"그림 속 토끼는 발표하려고 했는데 옆에서 장난치는 소리 때문에 발표를 못 했어요. 토끼 마음은 어떨까요?" 마음 카드를 잇고, 장난친 친구가 할 말을 고르게 한다. "장난친 곰은 나쁜 친구예요"라는 말이 나오면 "곰은 행동을 바꾸면 돼요. 멈추고 \'미안해\' 하면 토끼 마음이 맑아질 수 있어요"라고 말해 준다. 우리 반에서 그런 일이 있었는지 묻지 않는다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'match', slots: [{ id: 'bunny', label: '발표 못 한 토끼' }], cards: ['속상함', '신남', '편안함', '화남'] }, prompt: '토끼 마음 카드를 이어요.', target: { match: { bunny: ['속상함', '화남'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '곰이 토끼에게 할 말은?', options: ['"미안해"', '"그게 뭐"'], answer: 0, difficulty: 0.1, explain: '장난을 멈추고 "미안해"라고 말해요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '친구 마음 날씨',
        items: [
          { type: 'choice', prompt: '장난 때문에 발표를 못 하면 마음은?', options: ['속상해요', '신나요'], answer: '속상해요' },
          { type: 'draw', prompt: '다시 발표하는 토끼에게 박수 치는 모습을 그려요.' },
        ],
        easy: { note: '토끼 얼굴을 떠올려요.', items: [{ type: 'draw', prompt: '토끼 얼굴을 그려요.' }] },
      },
    }),
    ND({
      id: 'teach.e12.no-disturb.wrap.star-check', type: 'wrap', title: '오늘 수업 별 점검',
      method: '오늘 수업 별 점검', tool: 'timer', minutes: 6,
      levels: { easy: '교사가 점검 항목 하나(목소리 작게)를 읽어 주고 함께 표시한다.', base: '점검 항목 세 개(목소리 작게·장난 안 하기·준비물 꺼내기)에 오늘 해 본 것을 표시한다.', challenge: '표시한 뒤 내일 지킬 항목 하나를 활동지에서 동그라미 친다.' },
      wrap: {
        teacher: '"오늘 수업에서 나는 무엇을 해 보았나요? 해 본 것에 별을 붙여요." 항목을 함께 읽고 표시하게 한다. 표시하지 못한 항목이 있는 학생에게 "내일 해 볼 별이 남아 있네요"라고 말해 준다. 출구 2번에서 "놀아도 돼요"를 고른 학생에게 "놀고 싶은 마음은 괜찮아요. 쉬는 시간에 신나게 놀아요"라고 말해 준다. 누가 몇 개 했는지 서로 견주지 않는다.',
        exitTicket: [
          SELF('오늘 수업 별', ['목소리 작게', '장난 안 하기', '준비물 꺼내기'], '오늘 해 본 것에 별을 표시해요.'),
          { type: 'choice', prompt: '수업 중에 놀고 싶어요.', options: ['놀아도 돼요', '쉬는 시간에 놀아요'], answer: 1, difficulty: 0.1, explain: '놀이는 쉬는 시간에 해요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '오늘 수업 별',
        items: [
          { type: 'check', prompt: '내일 지킬 것에 ✓ 해요.', options: ['목소리 작게', '장난 안 하기', '준비물 꺼내기'] },
          { type: 'draw', prompt: '배움을 돕는 내 모습을 그려요.' },
        ],
        easy: { note: '"목소리 작게"를 떠올려요.', items: [{ type: 'draw', prompt: '별을 그려요.' }] },
      },
    }),
  ];

  // =====================================================================================================
  // 1·2학년 · 선생님과 친구에게 고운 말·바른 인사
  const KW = MOD('teach.e12.kind-words', [1, 2]);
  const NICEMEAN = ['고운 말', '미운 말'];
  const T_KIND = [
    KW({
      id: 'teach.e12.kind-words.intro.hello-song', type: 'intro', title: '"안녕하세요" 인사 노래',
      method: '인사 노래 따라 부르기', tool: 'keyboard', minutes: 6,
      levels: { easy: '"안녕"의 두 음(솔 미)만 교사와 함께 따라 부른다.', base: '"안녕하세요" 가락(솔 미 솔 미 도)을 시연대로 듣고 따라 부르며 고개 숙여 인사한다.', challenge: '"고맙습니다" 가락을 다섯 음으로 지어 불러 본다.' },
      intro: {
        teacher: '"안녕하세요(솔 미 솔 미 도)!" 시연 단추로 가락이 건반에 차례대로 눌리는 모습을 보이고 반 전체가 따라 부르며 고개를 숙인다. 끝 음 \'도\'에서 허리를 숙이는 것을 함께 해 본다. "선생님이 친하면 \'안녕!\' 해도 돼요"라는 말이 나오면 "친한 선생님께도 \'안녕하세요\' 하면 선생님 마음이 어떨까요?"라고 되묻는다. 오늘은 선생님과 친구에게 고운 말과 바른 인사를 하는 법을 배운다고 밝힌다.',
        student: '"안녕하세요" 노래를 따라 부르며 고개 숙여 인사해요.',
        demo: { tool: 'keyboard', options: { from: '도', to: '높은도', melody: ['솔', '미', '솔', '미', '도'] }, sequence: [{ notes: ['솔', '미', '솔', '미', '도'] }] },
        art: { draw: 'paper children bowing politely at a paper school gate to a smiling paper teacher, musical notes cut from colored paper floating', banner: '안녕하세요!' },
      },
      notes: '가락은 수업용으로 지은 짧은 노래다.',
    }),
    KW({
      id: 'teach.e12.kind-words.intro.teacher-face', type: 'intro', title: '고운 말 들은 선생님 표정',
      method: '고운 말 들은 선생님 표정', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 두 말("고맙습니다"·"몰라요!")을 읽어 주고 그림 속 선생님 표정 카드를 함께 잇는다.', base: '두 장면 말을 듣고 그림 속 선생님 마음 카드를 잇는 시연을 따라 말한다.', challenge: '같은 말을 내가 들으면 어떤 마음일지 한 낱말로 말한다.' },
      intro: {
        teacher: '"그림 속 선생님이 토끼에게 종이를 나눠 주셨어요. 토끼가 \'고맙습니다\' 했을 때와, 곰이 \'몰라요!\' 하고 짜증을 냈을 때 선생님 마음은 어떨까요?" 장면을 하나씩 짚고 시연 단추로 마음 카드가 이어지는 모습을 보인다. "짜증 날 땐 소리쳐도 돼요"라는 말이 나오면 "짜증 나는 마음은 괜찮아요. 그 마음을 \'잘 모르겠어요, 도와주세요\'처럼 말하면 어떨까요?"라고 되묻는다. 선생님도 친구도 말을 들으면 마음이 생긴다는 점을 짚는다.',
        student: '"고맙습니다"를 들은 선생님 얼굴을 따라 지어 보아요.',
        demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'thanks', label: '"고맙습니다" 들음' }, { id: 'grump', label: '"몰라요!" 들음' }], cards: ['기쁨', '속상함', '놀람'] }, sequence: [{ match: { thanks: '기쁨', grump: '속상함' } }] },
        art: { draw: 'a paper teacher handing out paper sheets, smiling warmly when a paper bunny says thank you, and looking a little sad when a paper bear frowns, soft cut paper classroom', banner: '말을 들은 선생님 마음' },
      },
      notes: '그림 속 선생님은 가상 인물이다. 우리 학교 선생님 이야기나 학생이 들은 말을 묻지 않는다.',
    }),
    KW({
      id: 'teach.e12.kind-words.activity.nice-mean', type: 'activity', title: '고운 말·미운 말 바구니',
      method: '고운 말·미운 말', tool: 'sortboard', minutes: 14,
      levels: { easy: '말 카드 4장, 바구니 옆에 든 장 수가 보이고 틀린 바구니에 넣으면 까닭을 듣고 되돌아온다.', base: '말 카드 6장을 고운 말·미운 말 바구니에 다 넣은 뒤 확인한다.', challenge: '"대충 \'네네\'"처럼 말투 때문에 미운 말이 되는 헷갈리는 카드 2장이 더 들어오고, 교사가 미운 말마다 "고운 말로 바꾸면?"을 물으면 말로 바꿔 본다.' },
      activity: {
        title: '고운 말·미운 말 나누기', tool: 'sortboard',
        teacher: '"이 말을 들은 사람은 웃을까요, 속상할까요?" 카드를 하나씩 읽어 주고(미운 말은 선생님이 담담하게만 읽는다) 넣기 전에 웃는 얼굴이나 속상한 얼굴을 먼저 지어 본다. "\'몰라요!\'는 진짜 몰라서 하는 말이에요"라는 학생에게 "모를 때는 \'잘 모르겠어요\'라고 하면 선생님이 도와주실 수 있어요. 소리친 \'몰라요!\'와 무엇이 다를까요?"라고 묻는다. 미운 말 카드는 소리 내어 따라 하지 않고, 바꾼 고운 말만 따라 말한다.',
        task: '말 카드를 고운 말·미운 말 바구니에 나누어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
        items: [
          SB2(NICEMEAN, '선생님께 하는 말을 나누어요.', ['"감사합니다"', '"도와주세요"', '"죄송해요"'], ['"몰라요!"', '소리친 "싫어!"', '"됐거든"'], ['대충 "네네"', '흥 "알았어요"'], 1, 0.1),
          SB2(NICEMEAN, '친구에게 하는 말을 나누어요.', ['"고마워"', '"같이 하자"', '"미안해"'], ['"비켜!"', '"너 때문이야"', '"흥, 몰라"'], ['웃으며 "느림보"', '작게 "쳇"'], 1, 0.15),
          SB2(NICEMEAN, '부탁할 때 말을 나누어요.', ['"빌려 줄래?"', '"해 주세요"', '"도와줄래?"'], ['"내놔!"', '"빨리 해!"', '"당장 줘"'], ['"줘, 빨리"', '손만 쑥 내밀기'], 1, 0.2, { conclude: '선생님께는 높임말, 친구에게도 고운 말 — 부탁할 때는 "~해 줄래?"' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '고운 말은 ○, 미운 말은 ×를 써요.', columns: ['말', '○ / ×'], cells: [['"감사합니다"', ''], ['"됐거든"', ''], ['"같이 하자"', ''], ['"내놔!"', '']], answer: '○, ×, ○, ×' }],
        easy: [{ type: 'choice', prompt: '고운 말에 ○ 해요.', options: ['"감사합니다"', '"몰라요!"'], answer: '"감사합니다"' }] },
      notes: '분류판 카드 한 장의 정답 바구니는 하나라서, 계획의 \'미운 말을 고운 말로 바꾼 카드와 짝 짓기\'는 도전 단계에서 교사 발문(말로 바꾸기)으로 한다.',
    }),
    KW({
      id: 'teach.e12.kind-words.activity.ask-help', type: 'activity', title: '선생님께 도움 청하는 말',
      method: '선생님께 도움 청하는 말', tool: 'story', minutes: 14,
      levels: { easy: '말풍선 빈칸 1개("선생님, ___")에 알맞은 말 카드를 넣는다.', base: '말풍선 빈칸 2개(부르는 말·부탁하는 말)에 말 카드를 넣는다.', challenge: '도움을 받은 뒤 할 말("고맙습니다" 등)까지 빈칸 3개를 채운다.' },
      activity: {
        title: '도움 청하는 말풍선 채우기', tool: 'story',
        teacher: '"토끼가 활동지를 잃어버렸어요. 선생님께 뭐라고 말하면 좋을까요?" 말풍선을 읽어 주고, 카드를 넣은 뒤 반 전체가 손을 들고 "선생님, 도와주세요"를 높임말로 따라 말한다. "야, 종이 줘"를 넣는 학생에게 "선생님께 그렇게 말하면 선생님 마음은 어떨까요? 같은 부탁을 높임말로 하면?"이라고 묻는다. 도움을 받은 뒤 "고맙습니다"까지 말하는 것이 도움 청하기의 끝이라고 짚는다.',
        task: '선생님께 도움 청하는 말을 말풍선에 넣어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          BUBBLE('활동지를 잃어버렸어요. 채워요.', '토끼', [{ label: '선생님, ___', card: C('help', '도와주세요') }, { label: '하나 더 ___?', card: C('may', '주실 수 있나요') }, { label: '___, 선생님!', card: C('thank', '고맙습니다') }], [C('yo', '야, 종이 줘'), C('dunno', '몰라요')], 0.1),
          BUBBLE('문제를 모르겠어요. 채워요.', '곰', [{ label: '선생님, ___', card: C('ask', '여쭤볼 게 있어요') }, { label: '이 문제를 ___?', card: C('teach', '알려 주실래요') }, { label: '고맙습니다, ___', card: C('got', '이제 알겠어요') }], [C('angry', '이거 몰라!'), C('throw', '안 할래요')], 0.15),
          BUBBLE('배가 아파요. 채워요.', '다람쥐', [{ label: '선생님, ___', card: C('hurt', '배가 아파요') }, { label: '보건실에 ___?', card: C('go', '가도 될까요') }, { label: '___!', card: C('back', '다녀왔습니다') }], [C('just', '그냥 갈게요'), C('cry', '엉엉 울래')], 0.2,
            { conclude: '"선생님, 도와주세요" — 부르고, 높임말로 부탁하고, "고맙습니다"로 마쳐요.' }),
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '선생님, ___', answer: '도와주세요' }] },
      notes: '보건실에 가는 방법은 학교마다 다르니 우리 학교 약속으로 덧붙인다. 학생이 실제로 아픈지 묻는 활동이 아니다.',
    }),
    KW({
      id: 'teach.e12.kind-words.activity.bow-follow', type: 'activity', title: '바른 인사 동작 따라 하기',
      method: '바른 인사 동작 따라 하기', tool: 'timer', minutes: 14,
      levels: { easy: '인사 카드 두 장(멈추기·허리 숙여 인사)의 차례를 맞추고, 인사 연습을 2번으로 맞춰 따라 한 뒤 두 가지를 표시한다.', base: '인사 카드 세 장(멈추기·눈 보기·허리 숙여 인사)의 차례를 맞추고, 인사 연습을 3번으로 맞춰 따라 한 뒤 세 가지를 표시한다.', challenge: '하교 인사("안녕히 계세요") 차례 카드로 바꿔 맞추고, 등교·하교 인사를 번갈아 해 본다.' },
      activity: {
        title: '바른 인사 차례와 따라 하기', tool: 'timer',
        teacher: '"인사할 때는 첫째, 멈춰요. 둘째, 눈을 봐요. 셋째, 허리를 숙여 \'안녕하세요\'." 카드 차례를 맞춘 뒤 구간 타이머의 \'인사\' 구간마다 반 전체가 세 동작을 따라 하고, \'쉬기\' 구간에 바로 선다. 걸어가면서 고개만 까딱하는 학생에게 "멈추지 않고 인사하면 선생님이 인사를 받으실 수 있을까요?"라고 묻는다. "친한 선생님께는 손만 흔들어요"라는 말에는 "손을 흔들어도 \'안녕하세요\' 말과 함께 하면 더 좋아요"라고 짚는다.',
        task: '바른 인사 차례를 맞추고 타이머에 맞춰 따라 해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '인사 차례로 카드를 놓아요.', toolOptions: { title: '바른 인사', cards: ['허리 숙여 인사', '멈추기', '눈 보기'] }, target: { order: ['멈추기', '눈 보기', '허리 숙여 인사'] }, difficulty: 0.1,
            levels: { easy: { prompt: '인사 차례로 놓아요(2장).', toolOptions: { cards: ['허리 숙여 인사', '멈추기'] }, target: { order: ['멈추기', '허리 숙여 인사'] } },
              challenge: { prompt: '하교 인사 차례로 놓아요.', toolOptions: { cards: ['"안녕히 계세요"', '멈추기', '눈 보기'] }, target: { order: ['멈추기', '눈 보기', '"안녕히 계세요"'] } } } },
          { prompt: '인사 연습을 3번 하게 맞춰요.', toolOptions: { title: '인사 연습(우리 반 약속)', labels: ['인사', '쉬기'], plan: { work: 5, rest: 5, rounds: 1 } }, target: { plan: { rounds: 3 } }, difficulty: 0.15,
            levels: { easy: { prompt: '인사 연습을 2번 하게 맞춰요.', target: { plan: { rounds: 2 } } } } },
          { prompt: '해 본 인사에 표시해요.', toolOptions: { title: '오늘 해 본 인사' }, target: { selfCheck: ['멈췄어요', '눈을 봤어요', '숙여 인사했어요'] }, difficulty: 0.15,
            levels: { easy: { prompt: '해 본 인사에 표시해요(2개).', target: { selfCheck: ['멈췄어요', '숙여 인사했어요'] } } },
            conclude: '멈추고, 눈 보고, 허리 숙여 "안녕하세요" — 바른 인사예요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '인사 차례를 써요.', text: '멈추기 → ___ → 허리 숙여 인사', answer: '눈 보기' }] },
      notes: '타이머 초·횟수는 연습용 우리 반 약속이다.',
    }),
    KW({
      id: 'teach.e12.kind-words.activity.thanks-card', type: 'activity', title: '선생님께 고마움 카드',
      method: '선생님께 고마움 카드 꾸미기', tool: 'collage', minutes: 14,
      levels: { easy: '하트 조각 하나와 꽃 조각 하나를 붙여 카드를 꾸민다(조각 2개 이상).', base: '하트 조각 2개와 꽃(동그라미·나뭇잎) 조각을 붙여 4개 이상으로 고마움 카드를 꾸민다.', challenge: '친구에게도 줄 고마움 조각을 더 붙여 6개 이상으로 꾸미고, 고마운 까닭을 짝에게 말한다.' },
      activity: {
        title: '고마움 카드 꾸미기', tool: 'collage',
        teacher: '"하트는 고마운 마음, 동그라미와 나뭇잎은 꽃이에요. 선생님께 드릴 고마움 카드를 꾸며 볼까요?" 카드를 꾸민 뒤 "선생님, 고맙습니다"를 높임말로 소리 내어 말하는 연습을 한다. "무엇이 고마운지 모르겠어요"라는 학생에게 "오늘 선생님이 해 주신 일 하나 — 이야기를 들려주셨나요, 종이를 나눠 주셨나요?"라고 묻는다. 고마움은 선생님뿐 아니라 친구에게도 전할 수 있다고 짚는다.',
        task: '하트와 꽃 조각으로 고마움 카드를 꾸며요.', levels: { easy: { shapes: ['heart', 'circle', 'leaf'] }, base: { shapes: ['heart', 'circle', 'leaf', 'star'] }, challenge: { shapes: ['heart', 'circle', 'leaf', 'star', 'semi'] } },
        items: [
          { prompt: '고마운 마음 하트를 붙여요.', toolOptions: {}, target: { has: [{ shape: 'heart', min: 2 }] }, difficulty: 0.1,
            levels: { easy: { prompt: '하트 하나를 붙여요.', target: { has: [{ shape: 'heart', min: 1 }] } } } },
          { prompt: '꽃 조각을 붙여요.', toolOptions: {}, target: { has: [{ shape: 'circle', min: 1 }, { shape: 'leaf', min: 1 }], pieces: { min: 4 } }, difficulty: 0.15,
            levels: { easy: { prompt: '꽃 조각 하나를 붙여요.', target: { has: [{ shape: 'circle', min: 1 }], pieces: { min: 2 } } } } },
          { prompt: '카드를 꾸미고 표시해요.', toolOptions: {}, target: { selfCheck: ['카드를 꾸몄어요', '고마움을 말했어요'], minPieces: 4 }, difficulty: 0.2,
            levels: { easy: { prompt: '조각 2개로 꾸미고 표시해요.', target: { selfCheck: ['카드를 꾸몄어요', '고마움을 말했어요'], minPieces: 2 } },
              challenge: { prompt: '친구 카드 조각도 붙여요.', target: { selfCheck: ['카드를 꾸몄어요', '친구 몫도 꾸몄어요', '까닭을 말했어요'], minPieces: 6 } } },
            conclude: '"선생님, 고맙습니다" — 고마운 마음은 말로도 카드로도 전해요.' },
        ],
      },
      worksheet: { items: [{ type: 'short', prompt: '선생님께 고마운 일을 하나 써요.', answer: '(예) 이야기를 들려주셔서 고맙습니다' }] },
      notes: '조각 뜻(하트 = 고마운 마음, 동그라미·나뭇잎 = 꽃)은 칠판에 그려 두고 시작한다. 카드는 원하는 학생만 실제로 전한다.',
    }),
    KW({
      id: 'teach.e12.kind-words.wrap.greet-pattern', type: 'wrap', title: '"안녕·고마워·미안" 규칙 잇기',
      method: '인사 규칙 잇기', tool: 'pattern', minutes: 6,
      levels: { easy: '교사가 띠를 처음부터 소리 내어 읽어 주고 빈칸 자리를 함께 짚으며 채운다.', base: '세 조각(안녕·고마워·미안)이 되풀이되는 띠의 빈칸 두 곳을 스스로 채우고 소리 내어 말한다.', challenge: '빈칸을 채운 뒤 교사가 띠를 일부러 틀리게 읽으면(예: 안녕·미안·고마워) 틀린 곳을 찾아 말한다.' },
      wrap: {
        teacher: '"안녕(손 흔들기), 고마워(두 손 모으기), 미안(가슴에 손) — 셋이 되풀이돼요. 빈칸에는 무엇이 올까요?" 띠를 동작과 함께 읽은 뒤 채운다. 출구 2번에서 "반말해도 돼요"를 고른 학생에게 "친한 선생님께도 \'안녕하세요\', \'고맙습니다\' 하면 더 기쁘실 거예요"라고 말해 준다. 마지막에 짝과 마주 보고 "고마워!" 하고 마친다.',
        exitTicket: [
          BAND(['안녕', '고마워', '미안', '안녕', '고마워', '미안', '안녕', '고마워', '미안'], '빈칸에 알맞은 조각을 넣어요.'),
          { type: 'choice', prompt: '친한 선생님께는?', options: ['반말해도 돼요', '높임말로 해요'], answer: 1, difficulty: 0.1, explain: '친한 선생님께도 높임말로 인사해요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '고운 말 규칙',
        items: [
          { type: 'blank', prompt: '규칙을 이어 써요.', text: '안녕 → 고마워 → 미안 → 안녕 → ___', answer: '고마워' },
          { type: 'draw', prompt: '선생님께 인사하는 내 모습을 그려요.' },
        ],
        easy: { note: '"안녕·고마워·미안"을 동작과 함께 떠올려요.', items: [{ type: 'draw', prompt: '인사하는 손을 그려요.' }] },
      },
    }),
    KW({
      id: 'teach.e12.kind-words.wrap.kind-scale', type: 'wrap', title: '고운 말 쓴 내 마음 눈금',
      method: '고운 말 쓴 내 마음 눈금', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 눈금을 "조금·보통·아주 많이" 세 가지로 읽어 주며 고르게 한다.', base: '눈금 5칸에서 오늘 고운 말을 쓴 뒤 내 마음 크기를 고른다.', challenge: '눈금을 고른 뒤 내일 쓸 고운 말 하나를 골라 짝에게 미리 해 본다.' },
      wrap: {
        teacher: '"오늘 \'고맙습니다\', \'도와주세요\'를 써 보니 내 마음은 얼마나 기쁜가요?" 눈금을 고른 뒤 손가락으로 몇 칸인지 보여 주게 한다. 작은 칸을 고른 학생에게 "한 번 써 본 것만으로도 시작이에요"라고 말해 준다. 출구 2번에서 "소리쳐요"를 고른 학생에게 "짜증 나는 마음은 괜찮아요. \'잠깐만요, 도와주세요\'처럼 말해 볼까요?"라고 말해 준다.',
        exitTicket: [
          SCALE('오늘 고운 말을 써 봤어요.', '기쁨', '내 마음은 얼마나 기쁜가요?'),
          { type: 'choice', prompt: '짜증이 나면 어떻게 해요?', options: ['소리쳐요', '"도와주세요" 해요'], answer: 1, difficulty: 0.1, explain: '짜증이 나도 고운 말로 도움을 청해요.' },
          { type: 'choice', prompt: '내일 쓸 고운 말을 골라요.', options: ['"고맙습니다"', '"도와주세요"'], answer: 0, difficulty: 0.1, explain: '두 말 모두 좋아요. 고른 말을 내일 써 봐요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '내 고운 말',
        items: [
          { type: 'choice', prompt: '선생님께 하는 고운 말은?', options: ['"고맙습니다"', '"됐거든"'], answer: '"고맙습니다"' },
          { type: 'short', prompt: '내일 쓸 고운 말을 써요.', answer: '(예) 고맙습니다, 도와주세요' },
        ],
      },
      notes: '출구 3번(내일 쓸 고운 말)은 정답이 하나가 아니다 — 고른 까닭을 들어 준다.',
    }),
  ];

  PaperLessons.registerModules([].concat(T_LISTEN, T_NODIST, T_KIND));
})();
