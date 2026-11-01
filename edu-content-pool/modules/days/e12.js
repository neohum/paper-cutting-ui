/* 창체 계기교육 기념일 — 초1-2 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/events-auto.json 의 days 초1-2.
 * 근거: sources/changche/research-days.md §1 총괄표(날짜·국경일/법정 여부) · 기존 차시 lessons/units/g1-cc-days.js·g2-cc-days.js 의 사실 범위.
 *   날짜는 「국경일에 관한 법률」(3·1절·광복절·개천절·한글날)과 「각종 기념일 등에 관한 규정」(과학의 날·5·18·현충일·6·25·6·10·학생독립운동기념일).
 *   지구의 날(4.22)은 법정기념일이 아니다 — 세계 여러 나라가 지키는 날로만 말하고 환경 범교과와 잇는다.
 * 초1-2 기준: 기념일의 이름·날짜·하는 일(태극기 달기·묵념 등)과 고마운 마음까지. 소리로 읽어 주는 짧은 문항, 카드 6자 안팎.
 * 정치적 중립: 정당·현직 정치인·현 정부 정책을 말하지 않는다. 다른 나라 국민을 미워하게 하는 말을 쓰지 않는다.
 *   희생·추모는 폭력 장면 없이 기억하는 방법만. 학생에게 가족사·개인 견해를 묻거나 채점하지 않는다. 학생 이름은 가명(한두 글자).
 * 수치는 날짜·연도(1919·1929·1945·1950·1980·1987)와 현충일 오전 10시·1분 묵념만 쓴다. 타이머 초·횟수는 '우리 반 약속'(연습용 값)이다.
 *
 * 사람 확인: (모듈 id — 문장 — 확인처)
 *  - days.e12.march1.*  — 1919년 3월 1일 태극기를 들고 "대한 독립 만세"를 외침 — 국가보훈부·국사편찬위원회(우리역사넷)
 *  - days.e12.march1.activity.mean2 · intro.ask2 — 흰 바탕 = 밝음·평화, 태극 = 위 빨강·아래 파랑의 어울림, 네 괘 = 하늘·땅·물·불 — 행정안전부 국가상징(태극기)
 *  - days.e12.march1.activity.hang2 · liberation.* — 국경일은 3·1절·제헌절·광복절·개천절·한글날 다섯 날(제헌절 7.17) — 「국경일에 관한 법률」·행정안전부
 *  - days.e12.march1.wrap.song2 — 태극기를 땅에 끌지 않고 반듯하게 접어 깨끗한 곳에 둔다(일반 예절) — 행정안전부 국기 게양·관리 안내
 *  - days.e12.june.* · liberation.activity.height2 · liberation.wrap.hangflag2 — 국경일은 깃봉과 깃면 사이를 떼지 않고 달고, 현충일은 깃면 너비만큼 내려 단다(조기) — 「대한민국국기법」·행정안전부
 *  - days.e12.june.intro.siren1 · activity.pose1 · wrap.letter2 — 현충일 오전 10시 사이렌, 1분 묵념 — 국가보훈부 현충일 안내
 *  - days.e12.june.activity.pose1 — 국기에 대한 경례: 오른손을 펴서 왼쪽 가슴에 댄다 — 행정안전부 국기에 대한 경례 안내
 *  - days.e12.june.intro.place2 — 국립서울현충원·국립대전현충원이 나라를 위해 희생한 분들이 잠든 곳 — 국가보훈부
 *  - days.e12.science.* — 조선 세종 때 측우기(빗물 양 재기)·해시계(그림자로 시각 알기)를 만듦 — 국립중앙과학관·국사편찬위원회
 *  - days.e12.earth.activity.sort2 · steps2 · wrap.real2 — 분리배출: 비우고 헹구고 종류별로(종이·캔·플라스틱·유리병), 쓴 휴지는 일반 쓰레기 — 환경부 분리배출 안내(지역마다 다를 수 있음)
 *  - days.e12.may18.* — 1980년 5월 광주 시민들이 민주주의를 바라며 힘을 모았고 주먹밥을 나누며 서로 도움 — 5·18기념재단·국가보훈부
 *  - days.e12.june10.* — 1987년 6월 많은 시민이 모두가 함께 정하는 민주주의를 바람 — 행정안전부·민주화운동기념사업회
 *  - days.e12.foundation.* — 단군 이야기(환웅이 하늘에서 내려옴, 곰과 호랑이·쑥과 마늘, 곰이 사람이 됨, 단군왕검이 고조선을 세움)는 『삼국유사』 등에 전해 오는 이야기 — 국사편찬위원회
 *  - days.e12.hangul.* — 세종대왕이 백성을 위해 한글(훈민정음)을 만듦, 모음 기본 글자 ·(하늘)·ㅡ(땅)·ㅣ(사람) — 국립국어원·국립한글박물관
 *  - days.e12.student.* — 1929년 광주 학생들이 우리 학생을 차별하는 일에 함께 "옳지 않다"고 나섬, 다른 지역 학생들도 뜻을 같이함 — 국가보훈부·광주학생독립운동기념회관
 *  - days.e12.june.* — 6·25전쟁(1950년)은 날짜만 말하고 전쟁 장면은 다루지 않는다 — 국가보훈부 */
(function () {
  const MOD = (topic) => (o) => Object.assign({ schema: 'edu-module.v1', domain: 'days', band: '초1-2', topic, grades: [1, 2] }, o);
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  const cut = (p) => p.replace(/\.$/, '');
  const LV = { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } };
  const SBLV = { easy: { instant: true, showCount: true }, base: {}, challenge: { shuffle: true } };

  // 도입 시연: 카드 고르기(wordcards pick)
  const PICKDEMO = (basket, cards, pick) => ({ tool: 'wordcards', options: { mode: 'pick', basket, cards, shuffle: false }, sequence: [{ pick }] });
  // 장면 차례 놓기(story): 기본 3장, 쉬움 첫 장면이 놓여 있음, 도전 틀린 장면 1장이 섞여 빼고 놓음
  const ORDER3 = (prompt, cards, wrong, d, more) => {
    const ids = cards.map((c) => c.id);
    const lv = { easy: { state: { at: { [ids[0]]: 0, [ids[1]]: null, [ids[2]]: null } } } };
    if (wrong) lv.challenge = { toolOptions: { cards: [cards[2], wrong, cards[0], cards[1]] } };
    return { prompt, toolOptions: { slots: ['먼저', '다음', '끝'], cards: [cards[2], cards[0], cards[1]] }, target: { order: ids }, difficulty: d, levels: lv, ...more };
  };
  // 두 바구니 나누기(sortboard 글 카드): 기본 6장, 쉬움 4장, 도전 8장(헷갈리는 카드 2장 — 둘째 바구니로 간다)
  const SB = (slots, prompt, ok, no, hard, d, more) => {
    const S = (a, b) => ({ [slots[0]]: a, [slots[1]]: b });
    return {
      prompt, toolOptions: { slots, cards: [ok[0], no[0], ok[1], no[1], ok[2], no[2]] }, target: { sort: S(ok, no) }, difficulty: d,
      levels: {
        easy: { prompt: `${cut(prompt)}(4장).`, toolOptions: { cards: [ok[0], no[0], ok[1], no[1]] }, target: { sort: S(ok.slice(0, 2), no.slice(0, 2)) } },
        challenge: { prompt: `${cut(prompt)}(8장).`, toolOptions: { cards: [ok[0], no[0], hard[0], ok[1], no[1], ok[2], hard[1], no[2]] }, target: { sort: S(ok, [...no, ...hard]) } },
      },
      ...more,
    };
  };
  // 순서 카드(timer): 섞인 카드 3장을 바른 차례로
  const STEPS = (prompt, title, cards, d, more) => ({ prompt, toolOptions: { title, cards: [cards[2], cards[0], cards[1]] }, target: { order: cards }, difficulty: d, ...more });
  // 정리 출구
  const SELF = (title, safety, prompt) => ({ type: 'tool', tool: 'timer', options: { title, safety }, prompt: prompt || '해 본 것에 표시해요.', target: { safety: true }, difficulty: 0.1 });
  const CHANT = (title, cards, prompt) => ({ type: 'tool', tool: 'timer', options: { title, cards: [cards[2], cards[0], cards[1]] }, prompt: prompt || '구호를 차례대로 놓아요.', target: { order: cards }, difficulty: 0.1 });
  const CH = (prompt, options, answer, explain) => ({ type: 'choice', prompt, options, answer, difficulty: 0.1, explain });
  const PASTE = (shapes, colors, checks, prompt, min) => ({ type: 'tool', tool: 'collage', options: { shapes, colors, sizes: ['s', 'm', 'l'] }, prompt, target: { selfCheck: checks, minPieces: min || 1 }, difficulty: 0.1 });

  // =====================================================================================================
  // 3·1절 — 태극기와 고마운 마음
  const M1 = MOD('days.e12.march1');
  const T_MARCH1 = [
    M1({
      id: 'days.e12.march1.intro.flag1', type: 'intro', title: '태극기 그림 고르기',
      method: '태극기 그림 고르기', tool: 'wordcards', minutes: 6,
      levels: { easy: '교사가 카드 2장(태극기·운동회 깃발)만 들어 보이고 태극기를 함께 고른다.', base: '시연을 보고 카드 3장 가운데 태극기를 스스로 말한다.', challenge: '카드 4장 가운데 태극기를 고르고, 태극기에서 본 색 하나를 말한다.' },
      intro: {
        teacher: '"3월 1일 아침, 집집마다 아파트 창문에 무엇이 걸려 있을까요?" 대답을 듣고(기다릴 반응: "태극기요", "몰라요") 시연 단추로 태극기 카드만 바구니에 담기는 모습을 보여 준다. "3·1절은 노는 날이에요"라는 말이 나오면 "쉬는 날이 된 까닭이 있어요. 1919년 3월 1일, 많은 사람이 태극기를 들고 \'대한 독립 만세\'를 외쳤어요. 그날을 기억하는 날이에요"라고 알려 준다. 오늘은 태극기를 꾸미고 만세를 따라 해 본다고 밝힌다.',
        student: '태극기를 본 곳을 하나 떠올려 짝에게 말해 보아요.',
        demo: PICKDEMO('우리나라 깃발', [{ id: 'flag', text: '태극기', motif: 'sun' }, { id: 'sports', text: '운동회 깃발', motif: 'star' }, { id: 'class', text: '우리 반 깃발', motif: 'house' }, { id: 'boat', text: '배 깃발', motif: 'cloud' }], ['flag']),
        art: { draw: 'paper children holding small paper Korean flags in front of a row of paper apartment windows, each window hanging a white flag with a red and blue circle, spring flowers around', banner: '3월 1일, 태극기를 달아요', extra: [{ motif: 'flower', x: 300, y: 222 }] },
      },
      notes: '다른 나라 국기는 카드로 쓰지 않는다(비교하며 깎아내리는 말이 나오지 않게). 실물 태극기나 사진을 함께 보인다.',
    }),
    M1({
      id: 'days.e12.march1.intro.ask2', type: 'intro', title: '태극기 무늬 궁금한 것 고르기',
      method: '태극기 무늬 궁금한 것 고르기', tool: 'wordcards', minutes: 6,
      levels: { easy: '교사가 궁금한 것 카드 2장만 보이고 하나를 함께 고른다.', base: '카드 3장 가운데 궁금한 것을 골라 손을 든다.', challenge: '카드를 고른 뒤 "왜 ○○일까요?"처럼 질문을 한 문장으로 말한다.' },
      intro: {
        teacher: '"태극기를 자세히 보아요. 무엇이 궁금한가요?" 실물 태극기를 보이며 대답을 듣고(기다릴 반응: "가운데 동그라미요", "검은 막대요") 시연 단추로 궁금한 것 카드를 바구니에 담는다. "검은 막대는 그냥 꾸민 거예요"라는 말이 나오면 "네 귀퉁이의 괘에도 뜻이 있어요. 오늘 알아봐요"라고 답한다. 3·1절에 사람들이 들었던 태극기의 무늬마다 뜻이 있다는 것을 오늘 알아본다고 밝힌다.',
        student: '태극기에서 가장 궁금한 곳을 손가락으로 가리켜 보아요.',
        demo: PICKDEMO('궁금해요', [{ id: 'mid', text: '가운데 무늬', motif: 'sun' }, { id: 'bar', text: '네 귀퉁이', motif: 'star' }, { id: 'white', text: '흰 바탕', motif: 'cloud' }, { id: 'pole', text: '깃대 끝', motif: 'leaf' }], ['mid', 'bar']),
        art: { draw: 'a large paper Korean flag pinned on a classroom board, paper children pointing at the red and blue circle and the four black bar patterns with paper question marks above', banner: '태극기, 무엇이 궁금할까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
      },
    }),
    M1({
      id: 'days.e12.march1.activity.color1', type: 'activity', title: '색종이로 태극기 꾸미기',
      method: '색종이로 태극기 꾸미기', tool: 'collage', minutes: 14,
      levels: { easy: '고르개에 반원·동그라미·긴 네모와 빨강·파랑·검정만 있고, 태극(반원 2개)과 괘 2개까지 붙인다.', base: '고르개에 모양 5가지·색 5가지가 있고, 태극과 괘 4개를 붙인다.', challenge: '고르개가 모두 열려 있어 초록·노랑 같은 다른 색 조각을 가려내고, 괘 4개를 붙인다.' },
      activity: {
        title: '색종이 조각으로 태극기 꾸미기', tool: 'collage',
        teacher: '"태극기 가운데 동그라미는 위가 무슨 색, 아래가 무슨 색일까요?" 실물 태극기를 칠판에 붙여 두고 보면서 조각을 고르게 한다. 파랑을 위에 붙이는 학생에게 "칠판 태극기를 다시 보아요. 위쪽은 어떤 색일까요?"라고 묻는다. 괘를 가운데에 붙이는 학생에게는 "괘는 네 귀퉁이에 있어요"라고 짚는다. 다 꾸민 뒤 "태극기는 우리나라를 나타내니 소중히 다뤄요"라고 말한다.',
        task: '흰 바탕에 태극과 검은 괘를 붙여 태극기를 꾸며요.',
        levels: { easy: { shapes: ['semi', 'circle', 'rect'], colors: ['빨강', '파랑', '검정'] }, base: { shapes: ['semi', 'circle', 'rect', 'square', 'star'], colors: ['빨강', '파랑', '검정', '노랑', '초록'] }, challenge: {} },
        items: [
          { prompt: '빨강·파랑 반원으로 태극을 만들어요.', toolOptions: { bg: '하양' }, target: { has: [{ shape: 'semi', color: '빨강', min: 1 }, { shape: 'semi', color: '파랑', min: 1 }] }, difficulty: 0.1 },
          { prompt: '검은 괘 4개를 붙여요.', toolOptions: { bg: '하양' }, target: { has: [{ shape: 'rect', color: '검정', n: 4 }] }, difficulty: 0.15,
            levels: { easy: { prompt: '검은 괘 2개를 붙여요.', target: { has: [{ shape: 'rect', color: '검정', n: 2 }] } } } },
          { prompt: '태극과 괘로 태극기를 완성해요.', toolOptions: { bg: '하양' }, target: { has: [{ shape: 'semi', color: '빨강', min: 1 }, { shape: 'semi', color: '파랑', min: 1 }, { shape: 'rect', color: '검정', n: 4 }] }, difficulty: 0.2,
            levels: { easy: { prompt: '태극과 괘 2개를 붙여요.', target: { has: [{ shape: 'semi', color: '빨강', min: 1 }, { shape: 'semi', color: '파랑', min: 1 }, { shape: 'rect', color: '검정', n: 2 }] } },
              challenge: { prompt: '태극기 색만 써서 완성해요.', target: { has: [{ shape: 'semi', color: '빨강', min: 1 }, { shape: 'semi', color: '파랑', min: 1 }, { shape: 'rect', color: '검정', n: 4 }, { color: '초록', max: 0 }, { color: '노랑', max: 0 }] } } },
            conclude: '태극기는 흰 바탕에 빨강·파랑 태극과 검은 괘 넷이 있어요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '태극기에 쓰인 색에 ○ 해요.', options: ['빨강·파랑·검정', '초록·노랑·보라'], answer: '빨강·파랑·검정' }] },
      notes: '콜라주 판은 자리를 판정하지 않는다(붙인 조각의 모양·색·개수만 본다). 태극이 위 빨강·아래 파랑인지, 괘가 네 귀퉁이에 있는지는 교사가 실물과 견주며 함께 본다.',
    }),
    M1({
      id: 'days.e12.march1.activity.wave1', type: 'activity', title: '"대한 독립 만세" 따라 하기',
      method: '태극기 흔들며 "대한 독립 만세" 따라 하기', tool: 'timer', minutes: 13,
      levels: { easy: '구호 카드 3장(대한·독립·만세)의 차례만 맞추고, 동작 차례는 첫 두 동작(태극기 들기·만세 외치기)만 놓는다.', base: '구호 차례와 동작 차례(들기·외치기·내리기)를 맞추고, 안전 점검을 한다.', challenge: '구호·동작 차례를 맞추고, 모둠 4개가 차례로 외치도록 타이머 횟수를 4번으로 맞춘다.' },
      activity: {
        title: '태극기 들고 만세 따라 하기', tool: 'timer',
        teacher: '"1919년 3월 1일, 사람들은 태극기를 들고 \'대한 독립 만세!\'를 외쳤어요. 우리도 종이 태극기를 들고 따라 해 볼까요?" 구호 카드를 맞춘 뒤 교사 신호에 맞춰 반 전체가 외친다. 태극기를 칼처럼 휘두르는 학생에게 "태극기는 우리나라를 나타내요. 위로 들고 흔들어요"라고 말한다. "만세가 무슨 뜻이에요?"라는 질문에는 "오래오래 잘되기를 바라는 말이에요"라고 답한다.',
        task: '구호와 동작의 차례를 맞추고 만세를 따라 해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          STEPS('만세 구호를 차례로 놓아요.', '3·1절 구호', ['대한', '독립', '만세!'], 0.1),
          STEPS('만세 동작을 차례로 놓아요.', '만세 동작', ['태극기 들기', '만세 외치기', '팔 내리기'], 0.15,
            { levels: { easy: { prompt: '첫 두 동작을 놓아요.', toolOptions: { cards: ['만세 외치기', '태극기 들기'] }, target: { order: ['태극기 들기', '만세 외치기'] } } } }),
          { prompt: '안전하게 했는지 표시해요.', toolOptions: { title: '만세 안전 점검', safety: ['친구와 떨어져 서요', '태극기를 위로 들어요', '땅에 끌지 않아요'] }, target: { safety: true }, difficulty: 0.15,
            levels: { challenge: { prompt: '모둠 4개가 차례로 외쳐요.', toolOptions: { title: '모둠 차례 만세(우리 반 약속)', labels: ['외치기', '쉬기'], plan: { work: 5, rest: 5, rounds: 1 } }, target: { plan: { rounds: 4 } } } },
            conclude: '태극기를 위로 들고 "대한 독립 만세!"를 외쳐요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '대한 독립 ___!', answer: '만세' }] },
      notes: '외치는 소리가 옆 반 수업에 닿지 않게 시간을 맞춘다. 타이머 초·횟수는 우리 반 약속(연습용 값)이다.',
    }),
    M1({
      id: 'days.e12.march1.activity.mean2', type: 'activity', title: '태극기 부분과 뜻 짝 짓기',
      method: '흰 바탕·태극·괘와 뜻 짝 짓기', tool: 'emotion', minutes: 14,
      levels: { easy: '부분 2개(흰 바탕·네 괘)와 뜻 카드를 짝 짓고, 카드 아래 작은 줄(뜻 풀이)이 처음부터 보인다.', base: '부분 3개(흰 바탕·태극·네 괘)와 뜻 카드를 짝 짓는다.', challenge: '부분 3개에 더해 헷갈리는 카드(꾸미기 무늬)가 섞여 있고, 셋째 문항에서 괘의 뜻 4개를 모두 고른다.' },
      activity: {
        title: '태극기 부분과 뜻 잇기', tool: 'emotion',
        teacher: '"흰 바탕은 무엇을 뜻할까요?" 하나씩 이으며 실물 태극기의 그 자리를 손으로 짚는다. 괘의 이름(건·곤·감·리)은 외우지 않아도 되고 하늘·땅·물·불 네 가지만 기억하자고 말한다. 괘를 "그냥 꾸민 막대"라고 하는 학생에게 "막대가 놓인 모양마다 하늘·땅·물·불을 뜻해요"라고 알려 준다.',
        task: '태극기의 부분과 뜻을 짝 지어요.', levels: { easy: { showBack: true }, base: {}, challenge: { shuffle: true } },
        items: [
          { prompt: '부분과 뜻을 이어요.', toolOptions: { mode: 'match', slots: [{ id: 'bg', label: '흰 바탕' }, { id: 'tg', label: '가운데 태극' }, { id: 'gw', label: '네 괘' }], cards: [{ id: 'peace', text: '밝음·평화', back: '흰 바탕' }, { id: 'mix', text: '서로 어울림', back: '빨강·파랑' }, { id: 'four', text: '하늘·땅·물·불', back: '네 귀퉁이' }], weather: false }, target: { match: { bg: 'peace', tg: 'mix', gw: 'four' } }, difficulty: 0.15,
            levels: { easy: { prompt: '두 부분과 뜻을 이어요.', toolOptions: { slots: [{ id: 'bg', label: '흰 바탕' }, { id: 'gw', label: '네 괘' }], cards: [{ id: 'peace', text: '밝음·평화', back: '흰 바탕' }, { id: 'four', text: '하늘·땅·물·불', back: '네 귀퉁이' }] }, target: { match: { bg: 'peace', gw: 'four' } } },
              challenge: { toolOptions: { cards: [{ id: 'peace', text: '밝음·평화' }, { id: 'deco', text: '꾸미기 무늬', why: '태극기의 무늬에는 모두 뜻이 있어요.' }, { id: 'mix', text: '서로 어울림' }, { id: 'four', text: '하늘·땅·물·불' }] } } } },
          { prompt: '태극의 색 자리를 이어요.', toolOptions: { mode: 'match', slots: [{ id: 'up', label: '태극 위쪽' }, { id: 'down', label: '태극 아래쪽' }], cards: ['빨강', '파랑', '초록'], weather: false }, target: { match: { up: '빨강', down: '파랑' } }, difficulty: 0.15 },
          { prompt: '네 괘가 뜻하는 것을 골라요.', toolOptions: { mode: 'pick', basket: '네 괘의 뜻', cards: ['하늘', '땅', '물', '불', '바람'], weather: false }, target: { pick: ['하늘', '땅', '물', '불'] }, difficulty: 0.2,
            levels: { easy: { prompt: '괘의 뜻 2개를 골라요.', toolOptions: { cards: ['하늘', '땅', '바람'] }, target: { pick: ['하늘', '땅'] } },
              challenge: { toolOptions: { cards: ['하늘', '구름', '땅', '물', '바람', '불'] } } },
            conclude: '흰 바탕은 밝음과 평화, 네 괘는 하늘·땅·물·불을 뜻해요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '네 괘는 하늘·땅·물·___을 뜻해요.', answer: '불' }] },
    }),
    M1({
      id: 'days.e12.march1.activity.hang2', type: 'activity', title: '태극기 다는 날 깃발 붙이기',
      method: '태극기 다는 날 달력에 스티커 붙이기', tool: 'collage', minutes: 13,
      levels: { easy: '고르개에 동그라미·긴 네모와 빨강·파랑만 있고, 3월(3·1절) 깃발 1개와 깃대부터 붙인다(셋째 문항도 깃발 2개까지).', base: '3월·8월(3·1절·광복절) 깃발 2개를 붙인다.', challenge: '다섯 국경일만큼 깃발 5개를 붙이고, 깃발마다 깃대(갈색 긴 네모)도 붙인다.' },
      activity: {
        title: '태극기 다는 날만큼 깃발 붙이기', tool: 'collage',
        teacher: '"1년 동안 태극기를 다는 날은 언제일까요?" 칠판에 붙인 큰 종이 달력을 함께 넘기며 3월 1일 칸을 찾는다. 판에는 그날 수만큼 깃발(빨강 동그라미) 조각을 붙이고, 같은 날을 종이 달력에도 스티커로 표시한다. 3·1절과 광복절을 헷갈리는 학생에게 "3·1절은 만세를 외친 날, 광복절은 나라를 되찾은 날이에요"라고 짚는다.',
        task: '태극기를 다는 날만큼 깃발 조각을 붙여요.',
        levels: { easy: { shapes: ['circle', 'rect'], colors: ['빨강', '파랑'] }, base: { shapes: ['circle', 'rect', 'square', 'star'], colors: ['빨강', '파랑', '노랑', '갈색'] }, challenge: { shapes: ['circle', 'rect', 'square', 'star', 'heart'], colors: ['빨강', '파랑', '노랑', '갈색', '초록'] } },
        items: [
          { prompt: '3·1절 깃발과 깃대를 붙여요.', toolOptions: {}, target: { has: [{ shape: 'circle', color: '빨강', n: 1 }, { shape: 'rect', min: 1 }] }, difficulty: 0.1 },
          { prompt: '3월·8월 깃발 2개를 붙여요.', toolOptions: {}, target: { has: [{ shape: 'circle', color: '빨강', n: 2 }] }, difficulty: 0.15,
            levels: { easy: { prompt: '파랑 깃발과 깃대를 붙여요.', target: { has: [{ shape: 'circle', color: '파랑', n: 1 }, { shape: 'rect', min: 1 }] } } } },
          { prompt: '국경일 다섯 날 깃발을 붙여요.', toolOptions: {}, target: { has: [{ shape: 'circle', color: '빨강', n: 5 }] }, difficulty: 0.2,
            levels: { easy: { prompt: '빨강 깃발 2개와 깃대를 붙여요.', target: { has: [{ shape: 'circle', color: '빨강', n: 2 }, { shape: 'rect', min: 1 }] } },
              challenge: { prompt: '깃발 5개와 깃대 5개를 붙여요.', target: { has: [{ shape: 'circle', color: '빨강', n: 5 }, { shape: 'rect', color: '갈색', n: 5 }] } } },
            conclude: '국경일은 3·1절·제헌절·광복절·개천절·한글날 다섯 날이에요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '3·1절은 몇 월 며칠인가요?', options: ['3월 1일', '8월 15일'], answer: '3월 1일' }] },
      notes: '콜라주 판은 달력 칸을 그리지 못해 날 수만큼 조각을 붙이는 것으로 대신한다. 날짜 칸 찾기는 칠판의 큰 종이 달력에 스티커로 함께 한다.',
    }),
    M1({
      id: 'days.e12.march1.wrap.thanks1', type: 'wrap', title: '고마운 마음 고르기',
      method: '고마운 마음 얼굴 고르기', tool: 'emotion', minutes: 7,
      levels: { easy: '교사가 마음 카드 2장(고마움·지루함)만 읽어 주고 함께 고른다.', base: '마음 카드 3장 가운데 만세를 외친 분들께 드는 마음을 고른다.', challenge: '마음을 고른 뒤 까닭을 한 낱말("용기", "나라")로 짝에게 말한다.' },
      wrap: {
        teacher: '"1919년에 만세를 외친 분들을 떠올리면 어떤 마음이 드나요?" 출구 1번을 고른 뒤 두세 명에게 까닭을 듣는다. "그분들은 무서웠을까요?"라는 질문에는 "무서워도 나라를 위해 용기를 냈어요. 그래서 고마운 거예요"라고 답한다. 다른 나라 사람을 미워하는 말이 나오면 "그때 나라를 빼앗은 일이 잘못이에요. 사람을 미워하는 것과는 달라요"라고 바로잡는다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'match', slots: [{ id: 's1', label: '만세 외친 분들' }], cards: ['고마움', '지루함', '화남'] }, prompt: '드는 마음 카드를 이어요.', target: { match: { s1: '고마움' } }, difficulty: 0.1 },
          CH('3·1절에 우리 집에서는요?', ['태극기를 달아요', '불꽃놀이 해요', '아무것도 안 해요'], 0, '3·1절에는 태극기를 달고 그날을 기억해요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '3·1절, 고마운 마음',
        items: [
          { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '3·1절은 ___월 1일이에요.', answer: '3' },
          { type: 'draw', prompt: '태극기를 든 내 모습을 그려요.' },
        ],
        easy: { note: '태극기를 떠올려요.', items: [{ type: 'draw', prompt: '태극기를 그려요.' }] },
      },
    }),
    M1({
      id: 'days.e12.march1.wrap.song2', type: 'wrap', title: '태극기 바르게 접어 두기',
      method: '태극기 접어 바르게 두기', tool: 'timer', minutes: 7,
      levels: { easy: '교사와 함께 한 단계씩 접고, 점검 칸도 함께 읽으며 표시한다.', base: '교사 시범을 본 뒤 혼자 접고 점검 칸에 스스로 표시한다.', challenge: '혼자 접은 뒤 짝이 접는 것을 도와주고, 둘 다 점검 칸에 표시한다.' },
      wrap: {
        teacher: '"태극기를 다 쓴 뒤에는 어떻게 둘까요?" 교사가 종이 태극기를 반으로, 또 반으로 반듯하게 접어 보이고 학생이 따라 접는다. 접은 태극기를 바닥에 던지는 학생에게 "태극기는 우리나라를 나타내요. 땅에 닿지 않게 두 손으로 정해진 곳에 놓아요"라고 말한다. 출구 2번에서 "구겨서 넣어요"를 고른 학생과는 한 번 더 함께 접어 본다.',
        exitTicket: [
          SELF('태극기 바르게 두기', ['땅에 끌지 않았어요', '반듯하게 접었어요', '정한 곳에 두었어요'], '해 본 것에 표시해요.'),
          CH('다 쓴 태극기는 어떻게 해요?', ['구겨서 넣어요', '접어서 잘 둬요', '바닥에 둬요'], 1, '태극기는 반듯하게 접어 깨끗한 곳에 둬요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '태극기를 소중히',
        items: [
          { type: 'check', prompt: '태극기를 바르게 대하는 일에 ✓ 해요.', options: ['땅에 끌지 않아요', '반듯하게 접어요', '깨끗한 곳에 둬요'] },
          { type: 'draw', prompt: '태극기를 바르게 든 모습을 그려요.' },
        ],
        easy: { note: '두 손으로 들어요.', items: [{ type: 'draw', prompt: '두 손으로 든 태극기를 그려요.' }] },
      },
      notes: '접는 방법은 반 약속으로 정한 간단한 방법이다(공식 접는 순서를 가르치지 않는다).',
    }),
  ];

  // =====================================================================================================
  // 과학의 날 — 우리를 돕는 과학
  const SC = MOD('days.e12.science');
  const T_SCIENCE = [
    SC({
      id: 'days.e12.science.intro.find1', type: 'intro', title: '교실에서 과학 물건 찾기',
      method: '교실에서 과학 물건 찾기', tool: 'wordcards', minutes: 6,
      levels: { easy: '교사가 물건 이름을 하나씩 읽어 주고 사람이 만든 물건 2개를 함께 고른다.', base: '시연을 보고 교실에서 사람이 과학으로 만든 물건 3개를 찾아 가리킨다.', challenge: '물건 4개를 찾고, 그 물건이 무엇을 돕는지 한 낱말로 말한다.' },
      intro: {
        teacher: '"4월 21일은 과학의 날이에요. 과학은 어디에 있을까요?" 대답을 듣고(기다릴 반응: "실험실이요", "로켓이요") 시연 단추로 전등·시계·선풍기 카드를 바구니에 담는다. "과학은 실험실에만 있어요"라는 말이 나오면 "지금 천장에서 우리를 밝혀 주는 것은 무엇일까요?"라고 되묻는다. 꽃·돌멩이를 담는 학생에게 "꽃은 자연에 원래 있던 것이에요"라고 짚는다.',
        student: '교실에서 우리를 돕는 물건 하나를 손가락으로 가리켜 보아요.',
        demo: PICKDEMO('과학이 도와요', [{ id: 'lamp', text: '전등', motif: 'sun' }, { id: 'flower', text: '꽃', motif: 'flower' }, { id: 'clock', text: '시계', motif: 'star' }, { id: 'stone', text: '돌멩이', motif: 'mountain' }, { id: 'fan', text: '선풍기', motif: 'cloud' }, { id: 'cloud', text: '구름', motif: 'cloud' }], ['lamp', 'clock', 'fan']),
        art: { draw: 'a paper classroom with a glowing paper ceiling lamp, a round wall clock and a small paper fan, paper children pointing at them with curious faces', banner: '과학은 우리 곁에', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
      },
    }),
    SC({
      id: 'days.e12.science.intro.old2', type: 'intro', title: '옛 물건 보고 쓰임 짐작하기',
      method: '옛 물건 그림 보고 쓰임 짐작하기', tool: 'wordcards', minutes: 6,
      levels: { easy: '교사가 쓰임 카드 2장만 보이고 측우기의 쓰임을 함께 고른다.', base: '시연을 보고 측우기·해시계의 쓰임을 짐작해 말한다.', challenge: '쓰임을 고른 뒤 "왜 그렇게 생각했는지" 까닭을 한 문장으로 말한다.' },
      intro: {
        teacher: '"옛날에는 비가 얼마나 왔는지 어떻게 알았을까요?" 측우기·해시계 사진을 보이며 대답을 듣고(기다릴 반응: "몰라요", "눈으로 봐요") 시연 단추로 쓰임 카드를 짝 짓는다. 조선 세종 때 빗물을 받아 양을 재는 측우기와, 그림자로 시각을 알려 주는 해시계를 만들었다고 알린다. "옛날에는 과학이 없었어요"라는 말이 나오면 "비를 재고 시각을 안 것도 과학이에요"라고 답한다.',
        student: '측우기와 해시계 가운데 하나를 골라 무엇을 했을지 짝에게 말해요.',
        demo: { tool: 'wordcards', options: { mode: 'match', slots: ['측우기', '해시계'], cards: ['빗물 재기', '시각 알기', '밥 짓기'], shuffle: false }, sequence: [{ match: { 측우기: '빗물 재기', 해시계: '시각 알기' } }] },
        art: { draw: 'a paper rain gauge cylinder collecting raindrops beside a paper bowl-shaped sundial casting a shadow, on a paper palace courtyard', banner: '옛날의 과학', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
      },
    }),
    SC({
      id: 'days.e12.science.activity.magnet1', type: 'activity', title: '자석 놀이로 알아보기',
      method: '자석에 붙는 것 알아보기', tool: 'magnet', minutes: 14,
      levels: { easy: '자석 두 개를 대 보면 "붙어요"·"밀어내요" 글자가 보인다(1·2번).', base: '1·2번은 글자 없이 자석이 움직이는 모습만 보고 맞추고, 3번에서 자석을 치워 나침반을 본다.', challenge: '글자 없이 맞추고, 3번에서 나침반 바늘이 동쪽을 가리키게 자석을 놓는다.' },
      activity: {
        title: '종이 자석으로 붙여 보고 밀어 보기', tool: 'magnet',
        teacher: '"자석끼리 대면 어떻게 될까요?" 화면에서 해 본 뒤 실제 자석과 클립·지우개·숟가락을 모둠마다 나눠 주고 "어떤 물건이 붙을까요?"라고 묻는다. "자석은 다 붙여요"라는 학생에게 "지우개에 대 보세요. 어떻게 되었나요?"라고 묻는다. 붙는 것은 쇠로 된 물건이라는 것을 실물로 확인한다. 자석을 컴퓨터·휴대전화에 대지 않는다고 짚는다.',
        task: '자석을 대 보며 붙는지 밀어내는지 알아봐요.',
        levels: { easy: { showWords: true }, base: { showWords: false }, challenge: { showWords: false } },
        items: [
          { prompt: '두 자석이 붙게 대 봐요.', toolOptions: { mode: 'poles' }, target: { attract: true }, difficulty: 0.1 },
          { prompt: '두 자석이 밀어내게 대 봐요.', toolOptions: { mode: 'poles' }, target: { repel: true }, difficulty: 0.15 },
          { prompt: '자석을 치우고 바늘을 봐요.', toolOptions: { mode: 'compass' }, target: { away: true }, difficulty: 0.2,
            levels: { challenge: { prompt: '바늘이 동쪽을 가리키게 해요.', target: { needle: '동' } } },
            conclude: '자석은 서로 붙기도 하고 밀어내기도 해요. 나침반도 자석으로 길을 알려 줘요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '자석에 붙는 물건에 ○ 해요.', options: ['쇠 클립', '지우개'], answer: '쇠 클립' }] },
      notes: '교구는 자석끼리(극)와 나침반만 다룬다 — "자석에 붙는 물건 고르기"는 화면이 하지 못해 실물 자석과 클립·지우개·숟가락으로 모둠마다 해 본다(활동지 1문항).',
    }),
    SC({
      id: 'days.e12.science.activity.order1', type: 'activity', title: '궁금한 것 알아보는 차례 놓기',
      method: '궁금한 것 알아보는 차례 놓기', tool: 'story', minutes: 13,
      levels: { easy: '첫 장면(궁금해요)이 놓여 있어 남은 두 장만 놓고, 놓으면 바로 맞는지 알려 준다.', base: '궁금해요 → 해 봐요 → 알았어요 세 장면을 차례대로 놓는다.', challenge: '"그냥 지나가요" 같은 틀린 장면 한 장이 섞여 있어 빼고 놓는다.' },
      activity: {
        title: '궁금해요 → 해 봐요 → 알았어요', tool: 'story',
        teacher: '"궁금한 것이 생기면 맨 먼저 무엇을 할까요?" 장면을 놓은 뒤 처음부터 소리 내어 읽게 한다. "알았어요"를 맨 앞에 두는 학생에게 "해 보기 전에 어떻게 알 수 있을까요?"라고 묻는다. 손가락 세 개를 펴며 "궁금해요, 해 봐요, 알았어요"를 함께 말한다. 해 보는 것은 어른과 함께, 위험하지 않은 것만 한다고 짚는다.',
        task: '알아보는 장면 카드를 차례대로 놓아요.', levels: LV,
        items: [
          ORDER3('자석이 붙을까? 차례로 놓아요.', [{ id: 'q', text: '붙을까?', motif: 'star' }, { id: 'try', text: '대 봐요', motif: 'leaf' }, { id: 'know', text: '붙었어요', motif: 'sun' }], { id: 'skip', text: '그냥 가요', motif: 'cloud' }, 0.1),
          ORDER3('물에 뜰까? 차례로 놓아요.', [{ id: 'q', text: '뜰까?', motif: 'star' }, { id: 'try', text: '넣어 봐요', motif: 'leaf' }, { id: 'know', text: '떴어요', motif: 'sun' }], { id: 'skip', text: '안 해요', motif: 'cloud' }, 0.15),
          ORDER3('그림자가 생길까? 놓아요.', [{ id: 'q', text: '생길까?', motif: 'star' }, { id: 'try', text: '비춰 봐요', motif: 'leaf' }, { id: 'know', text: '생겼어요', motif: 'sun' }], { id: 'skip', text: '잊어요', motif: 'cloud' }, 0.2,
            { conclude: '궁금하면 해 보고, 알게 된 것을 말해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '궁금해요 → ___ → 알았어요', answer: '해 봐요' }] },
    }),
    SC({
      id: 'days.e12.science.activity.match2', type: 'activity', title: '옛 물건과 오늘 물건 짝 짓기',
      method: '옛 물건과 오늘 물건 짝 짓기', tool: 'emotion', minutes: 14,
      levels: { easy: '옛 물건 2개와 오늘 물건을 짝 짓고, 하는 일 풀이가 처음부터 보인다.', base: '옛 물건 3개와 오늘 물건을 짝 짓는다.', challenge: '같은 일을 하지 않는 헷갈리는 카드가 섞여 있고, 짝을 지은 뒤 두 물건이 하는 일을 짝에게 말한다.' },
      activity: {
        title: '같은 일을 하는 옛 물건과 오늘 물건', tool: 'emotion',
        teacher: '"해시계와 오늘날의 시계는 무슨 일을 같이 할까요?" 짝을 지을 때마다 두 물건이 하는 일을 한 낱말로 말하게 한다. 해시계를 휴대전화와 잇는 학생에게 "휴대전화에도 시계가 있지요. 그런데 더 같은 일만 하는 물건은 무엇일까요?"라고 묻는다. 옛날 사람들도 불편한 것을 고치려고 궁리했다는 점을 짚는다.',
        task: '같은 일을 하는 옛 물건과 오늘 물건을 짝 지어요.', levels: { easy: { showBack: true }, base: {}, challenge: { shuffle: true } },
        items: [
          { prompt: '옛 물건과 오늘 물건을 이어요.', toolOptions: { mode: 'match', slots: [{ id: 'sun', label: '해시계' }, { id: 'rain', label: '측우기' }], cards: [{ id: 'clock', text: '시계', back: '시각 알기' }, { id: 'gauge', text: '빗물 재는 통', back: '비 양 재기' }, { id: 'tv', text: '텔레비전' }], weather: false }, target: { match: { sun: 'clock', rain: 'gauge' } }, difficulty: 0.1 },
          { prompt: '불·바람 물건을 이어요.', toolOptions: { mode: 'match', slots: [{ id: 'lamp', label: '등잔불' }, { id: 'fan', label: '부채' }, { id: 'well', label: '우물' }], cards: [{ id: 'bulb', text: '전등', back: '밝히기' }, { id: 'elec', text: '선풍기', back: '바람 내기' }, { id: 'tap', text: '수도꼭지', back: '물 얻기' }], weather: false }, target: { match: { lamp: 'bulb', fan: 'elec', well: 'tap' } }, difficulty: 0.15,
            levels: { easy: { prompt: '두 물건을 이어요.', toolOptions: { slots: [{ id: 'lamp', label: '등잔불' }, { id: 'fan', label: '부채' }], cards: [{ id: 'bulb', text: '전등', back: '밝히기' }, { id: 'elec', text: '선풍기', back: '바람 내기' }] }, target: { match: { lamp: 'bulb', fan: 'elec' } } },
              challenge: { toolOptions: { cards: [{ id: 'bulb', text: '전등' }, { id: 'elec', text: '선풍기' }, { id: 'tap', text: '수도꼭지' }, { id: 'ball', text: '공', why: '공은 놀 때 써요. 같은 일을 하는 물건을 찾아요.' }] } } } },
          { prompt: '빨래·글쓰기 물건을 이어요.', toolOptions: { mode: 'match', slots: [{ id: 'wash', label: '빨래 방망이' }, { id: 'brush', label: '붓과 먹' }], cards: [{ id: 'machine', text: '세탁기', back: '빨래하기' }, { id: 'pencil', text: '연필', back: '글쓰기' }, { id: 'spoon', text: '숟가락' }], weather: false }, target: { match: { wash: 'machine', brush: 'pencil' } }, difficulty: 0.2,
            conclude: '옛 물건도 오늘 물건도 사람을 도우려고 만든 과학이에요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '해시계와 같은 일을 하는 것은?', options: ['시계', '선풍기'], answer: '시계' }] },
    }),
    SC({
      id: 'days.e12.science.activity.clock2', type: 'activity', title: '해시계처럼 시각 읽기',
      method: '해시계처럼 시각 읽기', tool: 'clock', minutes: 13,
      levels: { easy: '정각 시계를 보고 보기 2개 가운데 시각을 고른다.', base: '정각 시계를 보고 보기 3개 가운데 시각을 고른다.', challenge: '보기 없이 정각 시각에 맞게 바늘을 직접 돌려 맞춘다(긴바늘은 12에 고정).' },
      activity: {
        title: '해 그림자 시각을 시계로 읽기', tool: 'clock',
        teacher: '"해시계는 해 그림자가 가리키는 곳으로 시각을 알려 줘요. 오늘날 시계로는 몇 시일까요?" 손전등과 연필로 그림자가 움직이는 것을 먼저 보여 준 뒤 시계를 읽는다. 짧은바늘과 긴바늘을 바꿔 읽는 학생에게 "정각에는 긴바늘이 늘 12에 있어요. 짧은바늘이 가리키는 수가 몇 시예요"라고 짚는다. 해시계는 해가 있어야 쓸 수 있다는 점을 말한다.',
        task: '그림자가 알려 준 시각을 시계에서 읽어요.', levels: { easy: { hourOnly: true }, base: { hourOnly: true }, challenge: { hourOnly: true } },
        items: [
          { prompt: '아침 그림자, 몇 시일까요?', toolOptions: { readOnly: true, start: { h: 9, m: 0 }, ask: '몇 시일까요?', choices: ['9시', '3시', '12시'] }, target: { pick: 0 }, difficulty: 0.1,
            levels: { easy: { toolOptions: { choices: ['9시', '3시'] }, target: { pick: 0 } },
              challenge: { prompt: '9시로 바늘을 맞춰요.', toolOptions: { readOnly: false, start: { h: 12, m: 0 } }, target: { h: 9, m: 0 } } } },
          { prompt: '한낮 그림자, 몇 시일까요?', toolOptions: { readOnly: true, start: { h: 12, m: 0 }, ask: '몇 시일까요?', choices: ['6시', '12시', '9시'] }, target: { pick: 1 }, difficulty: 0.15,
            levels: { easy: { toolOptions: { choices: ['6시', '12시'] }, target: { pick: 1 } },
              challenge: { prompt: '12시로 바늘을 맞춰요.', toolOptions: { readOnly: false, start: { h: 3, m: 0 } }, target: { h: 12, m: 0 } } } },
          { prompt: '오후 그림자, 몇 시일까요?', toolOptions: { readOnly: true, start: { h: 3, m: 0 }, ask: '몇 시일까요?', choices: ['12시', '9시', '3시'] }, target: { pick: 2 }, difficulty: 0.2,
            levels: { easy: { prompt: '오후 그림자, 몇 시인지 골라요.', toolOptions: { choices: ['3시', '9시'] }, target: { pick: 0 } },
              challenge: { prompt: '3시로 바늘을 맞춰요.', toolOptions: { readOnly: false, start: { h: 9, m: 0 } }, target: { h: 3, m: 0 } } },
            conclude: '해시계는 그림자로, 오늘 시계는 바늘로 시각을 알려 줘요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '해시계는 무엇으로 시각을 알려요?', options: ['그림자', '소리'], answer: '그림자' }] },
      notes: '해 그림자 시각(아침 9시·한낮 12시·오후 3시)은 읽기 연습용으로 고른 시각이다. 해시계 눈금을 실제로 읽게 하지 않는다.',
    }),
    SC({
      id: 'days.e12.science.wrap.wow1', type: 'wrap', title: '"왜 그럴까?" 질문 하나 말하기',
      method: '"왜 그럴까?" 질문 하나 말하기', tool: 'timer', minutes: 7,
      levels: { easy: '교사가 "왜 자석은 붙을까?"를 먼저 말하고 학생이 따라 말한 뒤 표시한다.', base: '짝에게 오늘 궁금한 것 하나를 "왜?"로 묻고 짝의 질문을 들은 뒤 표시한다.', challenge: '짝과 "왜?" 질문을 두 개씩 주고받은 뒤 표시한다.' },
      wrap: {
        teacher: '"오늘 해 본 것 가운데 아직 궁금한 것은 무엇인가요? \'왜\'를 넣어 짝에게 물어보아요." 짝끼리 묻고 답한 뒤 출구 1번에 표시한다. 답을 몰라 머뭇거리는 학생에게 "몰라도 괜찮아요. 궁금해하는 것이 과학의 시작이에요"라고 말해 준다. 나온 질문 두세 개를 칠판 "궁금해요" 칸에 적어 둔다.',
        exitTicket: [
          { type: 'tool', tool: 'timer', options: { title: '"왜 그럴까?" 묻기' }, prompt: '해 본 것에 표시해요.', target: { selfCheck: ['짝에게 "왜?" 물었어요', '짝 질문을 들었어요'] }, difficulty: 0.1 },
          CH('과학은 어디에 있나요?', ['실험실에만', '우리 둘레 곳곳'], 1, '전등·시계처럼 우리 둘레 곳곳에 과학이 있어요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '나의 "왜 그럴까?"',
        items: [
          { type: 'short', prompt: '오늘 궁금한 것을 "왜"로 써요.' },
          { type: 'draw', prompt: '궁금한 것을 해 보는 모습을 그려요.' },
        ],
        easy: { note: '"왜 자석은 붙을까?"처럼 써요.', items: [{ type: 'draw', prompt: '궁금한 물건을 그려요.' }] },
      },
    }),
    SC({
      id: 'days.e12.science.wrap.star2', type: 'wrap', title: '고마운 과학 물건에 별 붙이기',
      method: '오늘 고마운 과학 물건 별 붙이기', tool: 'collage', minutes: 7,
      levels: { easy: '별 조각 1개를 붙이고 고마운 물건 이름을 말한다.', base: '별 조각 2개 이상을 붙이고 고마운 물건 두 가지를 말한다.', challenge: '별을 붙이고 그 물건이 고마운 까닭을 한 낱말("밝아요", "시원해요")로 말한다.' },
      wrap: {
        teacher: '"오늘 알아본 물건 가운데 가장 고마운 과학 물건은 무엇인가요?" 별 조각을 붙일 때마다 그 물건 이름을 말하게 한다. 휴대전화·게임기만 고르는 학생에게 "전등이 꺼지면 교실은 어떻게 될까요?"라고 물어 늘 곁에 있는 물건을 떠올리게 한다. 출구 2번에서 측우기를 "시각 알기"로 고른 학생에게는 빗물을 받아 재던 물건이라고 다시 말해 준다.',
        exitTicket: [
          PASTE(['star', 'circle', 'heart'], ['노랑', '빨강', '파랑', '초록'], ['별을 붙였어요', '고마운 물건을 말했어요'], '고마운 물건에 별을 붙여요.', 1),
          CH('측우기는 무엇을 했나요?', ['시각 알기', '빗물 재기', '불 밝히기'], 1, '측우기는 빗물을 받아 양을 재었어요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '고마운 과학 물건',
        items: [
          { type: 'short', prompt: '가장 고마운 과학 물건을 써요.' },
          { type: 'draw', prompt: '그 물건을 그리고 별을 그려요.' },
        ],
        easy: { note: '교실 물건을 떠올려요.', items: [{ type: 'draw', prompt: '고마운 물건을 그려요.' }] },
      },
    }),
  ];

  // =====================================================================================================
  // 지구의 날 — 지구를 아껴요
  const EA = MOD('days.e12.earth');
  const T_EARTH = [
    EA({
      id: 'days.e12.earth.intro.globe1', type: 'intro', title: '지구본 돌려 바다와 땅 보기',
      method: '지구본 돌려 바다와 땅 보기', tool: 'earth', minutes: 6,
      levels: { easy: '교사가 실물 지구본을 돌리며 파란 바다만 함께 짚는다.', base: '지구본을 돌리며 바다와 땅을 번갈아 짚는다.', challenge: '바다와 땅을 짚고, 우리나라가 있는 곳을 찾아 짚는다.' },
      intro: {
        teacher: '"우리가 사는 별의 이름은 무엇일까요?" 대답을 듣고(기다릴 반응: "지구요") 시연 단추로 지구가 도는 모습을 보인 뒤, 실물 지구본을 돌려 파란 바다와 땅을 짚게 한다. 4월 22일은 세계 여러 나라 사람들이 지구를 아끼자고 약속하는 지구의 날이라고 알린다. "지구가 망해요"처럼 겁내는 말이 나오면 "우리가 할 수 있는 일이 많아요. 오늘 찾아봐요"라고 답한다.',
        student: '지구본에서 파란 곳과 초록 곳을 하나씩 손가락으로 짚어 보아요.',
        demo: { tool: 'earth', options: { mode: 'spin', start: { hour: 6 }, showArrow: true }, sequence: [{ hour: 12 }] },
        art: { draw: 'paper children gathered around a big paper globe with blue oceans and green land, hugging it gently, small paper leaves and hearts floating around', banner: '4월 22일, 지구의 날', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
      },
      notes: '화면의 지구 교구는 낮과 밤만 보여 준다. 바다와 땅 짚기는 실물 지구본(또는 지구 사진)으로 한다. 지구의 날은 법정기념일이 아니다.',
    }),
    EA({
      id: 'days.e12.earth.intro.bin2', type: 'intro', title: '분리 통 그림 고르기',
      method: '분리 통 그림 고르기', tool: 'wordcards', minutes: 6,
      levels: { easy: '교사가 카드 2장(신문지·캔)만 보이고 종이 통에 넣을 것을 함께 고른다.', base: '시연을 보고 카드 4장 가운데 종이 통에 넣을 것을 말한다.', challenge: '종이 통 카드를 고른 뒤 남은 카드는 어느 통에 넣을지 말한다.' },
      intro: {
        teacher: '"다 마신 우유갑과 빈 캔은 같은 통에 넣을까요?" 대답을 듣고(기다릴 반응: "아니요", "몰라요") 시연 단추로 종이로 된 것만 종이 통 바구니에 담는다. 지구의 날(4월 22일)에 쓰레기를 종류별로 나누어 내놓으면 다시 쓸 수 있다고 알린다. 교실 분리 통을 직접 가리키며 이름표를 함께 읽는다.',
        student: '우리 교실 분리 통 가운데 하나를 가리키며 이름을 말해 보아요.',
        demo: PICKDEMO('종이 통', [{ id: 'news', text: '신문지', motif: 'leaf' }, { id: 'can', text: '빈 캔', motif: 'star' }, { id: 'box', text: '종이 상자', motif: 'house' }, { id: 'pet', text: '페트병', motif: 'cloud' }], ['news', 'box']),
        art: { draw: 'a row of colorful paper recycling bins labeled with simple icons for paper, cans and plastic, paper children dropping items into the right bins', banner: '나누어 내놓아요', extra: [{ motif: 'leaf', x: 300, y: 96 }] },
      },
    }),
    EA({
      id: 'days.e12.earth.activity.good1', type: 'activity', title: '지구 아끼기 좋아요·안돼요',
      method: '지구 아끼기 좋아요·안돼요', tool: 'sortboard', minutes: 14,
      levels: { easy: '카드 4장, 틀린 바구니에 넣으면 까닭을 말하고 돌아오며 바구니 옆에 장 수가 보인다.', base: '카드 6장을 다 넣은 뒤 확인한다.', challenge: '카드 8장, "물 틀고 양치"처럼 헷갈리는 카드가 섞인다.' },
      activity: {
        title: '지구를 아끼는 행동 나누기', tool: 'sortboard',
        teacher: '"이렇게 하면 지구가 웃을까요, 힘들까요?" 카드를 넣을 때마다 반 전체가 소리 내어 읽는다. "물 틀고 양치"를 좋아요에 넣는 학생에게 "컵에 물을 받아 쓰면 물을 아낄 수 있어요"라고 알려 준다. 귀찮다는 마음이 나오면 "귀찮은 마음이 드는 건 괜찮아요. 한 번 해 보면 뿌듯해져요"라고 말해 준다.',
        task: '행동 카드를 좋아요·안돼요 바구니에 나누어요.', levels: SBLV,
        items: [
          SB(['좋아요', '안돼요'], '물을 쓰는 일을 나누어요.', ['컵에 받아 양치', '물 잠그기', '빗물 모으기'], ['물 틀어 두기', '물장난', '물 버리기'], ['물 틀고 양치', '수돗물 놀이'], 0.1),
          SB(['좋아요', '안돼요'], '전기를 쓰는 일을 나누어요.', ['불 끄기', '플러그 뽑기', '문 닫고 냉방'], ['불 켜 두기', 'TV 켜 두기', '냉장고 열기'], ['빈 방 불', '창문 열고 냉방'], 0.15),
          SB(['좋아요', '안돼요'], '물건을 쓰는 일을 나누어요.', ['양면 쓰기', '장바구니', '물려 쓰기'], ['종이 한 번만', '쓰레기 버리기', '새것만 쓰기'], ['일회용 컵', '음식 남기기'], 0.2, { conclude: '물과 전기를 아끼고 물건을 오래 쓰면 지구가 웃어요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '좋으면 ○, 안 되면 ×를 써요.', columns: ['행동', '○ / ×'], cells: [['불 끄기', ''], ['물 틀어 두기', ''], ['양면 쓰기', '']], answer: '○, ×, ○' }] },
    }),
    EA({
      id: 'days.e12.earth.activity.lights1', type: 'activity', title: '"지구 쉬는 시간" 불 끄기 놀이',
      method: '불 끄기 놀이', tool: 'timer', minutes: 13,
      levels: { easy: '불 끄기 시간을 30초로 맞추고, 놀이 차례 카드는 2장만 놓는다.', base: '불 끄기 시간을 1분(60초)으로 맞추고 놀이 차례 3장을 놓는다.', challenge: '1분으로 맞추고, 셋째 문항에서 친구가 신호를 내는 차례(신호 친구 정하기)까지 4장을 놓는다.' },
      activity: {
        title: '불을 끄고 1분 쉬기', tool: 'timer',
        teacher: '"선생님이 \'지구 쉬는 시간!\' 하면 불 끄기 담당이 교실 불을 끄고, 우리는 1분 동안 조용히 쉬어요." 타이머를 맞춘 뒤 실제로 해 본다. 불을 끈 사이 돌아다니는 학생에게 "어두울 때 돌아다니면 부딪혀요. 자리에 앉아 쉬어요"라고 말한다. 끝난 뒤 "불을 끈 1분 동안 무엇이 아껴졌을까요?"라고 묻는다(기다릴 반응: "전기요").',
        task: '불 끄기 시간을 맞추고 놀이 차례를 놓아요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '불 끄기 시간을 1분으로 맞춰요.', toolOptions: { title: '지구 쉬는 시간(우리 반 약속)', labels: ['불 끄기', '켜기'], plan: { work: 20, rest: 0, rounds: 1 } }, target: { plan: { work: 60 } }, difficulty: 0.1,
            levels: { easy: { prompt: '불 끄기 시간을 30초로 맞춰요.', target: { plan: { work: 30 } } } } },
          STEPS('놀이 차례를 놓아요.', '불 끄기 놀이', ['"쉬는 시간!"', '불 끄기', '조용히 쉬기'], 0.15,
            { levels: { easy: { prompt: '첫 두 차례를 놓아요.', toolOptions: { cards: ['불 끄기', '"쉬는 시간!"'] }, target: { order: ['"쉬는 시간!"', '불 끄기'] } } } }),
          { prompt: '불을 끈 동안 지킨 것에 표시해요.', toolOptions: { title: '불 끄기 안전 점검', safety: ['자리에 앉아 있어요', '돌아다니지 않아요'] }, target: { safety: true }, difficulty: 0.15,
            levels: { challenge: { prompt: '친구 신호 차례를 놓아요.', toolOptions: { title: '친구가 신호해요', cards: ['불 끄기', '신호 친구 정하기', '조용히 쉬기', '"쉬는 시간!"'] }, target: { order: ['신호 친구 정하기', '"쉬는 시간!"', '불 끄기', '조용히 쉬기'] } } },
            conclude: '쓰지 않는 불을 끄면 전기를 아껴요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '교실에 아무도 없을 때는?', options: ['불을 꺼요', '불을 켜 둬요'], answer: '불을 꺼요' }] },
      notes: '1분(쉬움 30초)은 우리 반 약속(연습용 값)이다. 불 끄기는 정해진 담당 학생 한 명이 하고 창가 밝기를 확인한 뒤 한다.',
    }),
    EA({
      id: 'days.e12.earth.activity.sort2', type: 'activity', title: '재활용품 종류별로 나누기',
      method: '재활용품 종류별로 나누기', tool: 'sortboard', minutes: 14,
      levels: { easy: '바구니 2개(종이·캔)에 나누고, 틀리면 까닭을 말하고 돌아오며 장 수가 보인다.', base: '바구니 3개(종이·캔·플라스틱)에 나눈다.', challenge: '바구니 4개(종이·캔·플라스틱·유리병)에 나누고, 쓴 휴지처럼 어느 통에도 넣지 않는 카드를 남긴다.' },
      activity: {
        title: '재활용품을 통마다 나누기', tool: 'sortboard',
        teacher: '"이것은 무엇으로 만들었을까요?" 물건을 만든 재료를 먼저 말하게 한 뒤 바구니에 넣는다. 쓴 휴지를 종이 통에 넣는 학생에게 "쓴 휴지는 젖고 더러워져 다시 쓰기 어려워요"라고 짚는다. 캔과 페트병을 헷갈리는 학생에게는 실물을 두드려 소리를 들어 보게 한다. 지역마다 내놓는 법이 조금 다를 수 있으니 우리 학교 통의 이름표를 따르자고 말한다.',
        task: '재활용품 카드를 알맞은 통 바구니에 나누어요.', levels: SBLV,
        items: [
          { prompt: '마신 뒤 나온 것을 나누어요(3통).', toolOptions: { slots: ['종이', '캔', '플라스틱'], cards: ['우유갑', '음료 캔', '페트병', '종이컵', '참치 캔', '요구르트병'] }, target: { sort: { 종이: ['우유갑', '종이컵'], 캔: ['음료 캔', '참치 캔'], 플라스틱: ['페트병', '요구르트병'] } }, difficulty: 0.1,
            levels: { easy: { prompt: '마신 뒤 나온 것을 나누어요(2통).', toolOptions: { slots: ['종이', '캔'], cards: ['우유갑', '음료 캔', '종이컵', '참치 캔'] }, target: { sort: { 종이: ['우유갑', '종이컵'], 캔: ['음료 캔', '참치 캔'] } } },
              challenge: { prompt: '마신 뒤 나온 것을 나누어요(4통).', toolOptions: { slots: ['종이', '캔', '플라스틱', '유리병'], cards: ['우유갑', '음료 캔', '페트병', '주스 병', '쓴 휴지', '요구르트병', '참치 캔', '종이컵'] }, target: { sort: { 종이: ['우유갑', '종이컵'], 캔: ['음료 캔', '참치 캔'], 플라스틱: ['페트병', '요구르트병'], 유리병: ['주스 병'] } } } } },
          { prompt: '교실에서 나온 것을 나누어요(3통).', toolOptions: { slots: ['종이', '캔', '플라스틱'], cards: ['헌 공책', '과자 캔', '풀 통', '종이 상자', '음료 캔', '빨대'] }, target: { sort: { 종이: ['헌 공책', '종이 상자'], 캔: ['과자 캔', '음료 캔'], 플라스틱: ['풀 통', '빨대'] } }, difficulty: 0.15,
            levels: { easy: { prompt: '교실에서 나온 것을 나누어요(2통).', toolOptions: { slots: ['종이', '캔'], cards: ['헌 공책', '과자 캔', '종이 상자', '음료 캔'] }, target: { sort: { 종이: ['헌 공책', '종이 상자'], 캔: ['과자 캔', '음료 캔'] } } },
              challenge: { prompt: '교실에서 나온 것을 나누어요(4통).', toolOptions: { slots: ['종이', '캔', '플라스틱', '유리병'], cards: ['헌 공책', '과자 캔', '풀 통', '잼 병', '종이 상자', '코 푼 휴지', '음료 캔', '빨대'] }, target: { sort: { 종이: ['헌 공책', '종이 상자'], 캔: ['과자 캔', '음료 캔'], 플라스틱: ['풀 통', '빨대'], 유리병: ['잼 병'] } } } } },
          { prompt: '집에서 나온 것을 나누어요(3통).', toolOptions: { slots: ['종이', '캔', '플라스틱'], cards: ['신문지', '통조림 캔', '샴푸 통', '달걀판', '음료 캔', '세제 통'] }, target: { sort: { 종이: ['신문지', '달걀판'], 캔: ['통조림 캔', '음료 캔'], 플라스틱: ['샴푸 통', '세제 통'] } }, difficulty: 0.2,
            levels: { easy: { prompt: '집에서 나온 것을 나누어요(2통).', toolOptions: { slots: ['종이', '캔'], cards: ['신문지', '통조림 캔', '달걀판', '음료 캔'] }, target: { sort: { 종이: ['신문지', '달걀판'], 캔: ['통조림 캔', '음료 캔'] } } },
              challenge: { prompt: '집에서 나온 것을 나누어요(4통).', toolOptions: { slots: ['종이', '캔', '플라스틱', '유리병'], cards: ['신문지', '통조림 캔', '샴푸 통', '간장 병', '달걀판', '쓴 물티슈', '음료 캔', '세제 통'] }, target: { sort: { 종이: ['신문지', '달걀판'], 캔: ['통조림 캔', '음료 캔'], 플라스틱: ['샴푸 통', '세제 통'], 유리병: ['간장 병'] } } } },
            conclude: '재활용품은 만든 재료에 따라 종이·캔·플라스틱 통에 나누어요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '빈 음료 캔은 어느 통에 넣어요?', options: ['캔 통', '종이 통'], answer: '캔 통' }] },
      notes: '종이 달걀판·샴푸 통 같은 물건은 지역 분리배출 안내에 따라 다를 수 있다. 우리 지역 안내와 다르면 카드를 바꾼다.',
    }),
    EA({
      id: 'days.e12.earth.activity.steps2', type: 'activity', title: '바르게 내놓는 차례 놓기',
      method: '바르게 내놓는 차례 놓기', tool: 'story', minutes: 13,
      levels: { easy: '첫 장면(비워요)이 놓여 있어 남은 두 장만 놓고, 놓으면 바로 맞는지 알려 준다.', base: '비워요 → 헹궈요 → 넣어요 세 장면을 차례대로 놓는다.', challenge: '"그대로 넣어요" 같은 함정 장면 한 장이 섞여 있어 빼고 놓는다.' },
      activity: {
        title: '비우고 헹구고 넣기', tool: 'story',
        teacher: '"페트병은 그냥 통에 넣으면 될까요?" 차례를 놓은 뒤 실제 빈 병으로 함께 해 본다. "그대로 넣어요"를 고르는 학생에게 "안에 음료가 남아 있으면 다른 재활용품까지 더러워져요"라고 말한다. 헹굴 때 물을 조금만 쓰자고 덧붙인다.',
        task: '내놓는 장면 카드를 차례대로 놓아요.', levels: LV,
        items: [
          ORDER3('페트병을 내놓아요. 놓아요.', [{ id: 'empty', text: '비워요', motif: 'cloud' }, { id: 'rinse', text: '헹궈요', motif: 'leaf' }, { id: 'put', text: '통에 넣어요', motif: 'house' }], { id: 'as', text: '그대로 넣어요', motif: 'star' }, 0.1),
          ORDER3('우유갑을 내놓아요. 놓아요.', [{ id: 'empty', text: '다 마셔요', motif: 'cloud' }, { id: 'rinse', text: '물로 헹궈요', motif: 'leaf' }, { id: 'put', text: '종이 통에', motif: 'house' }], { id: 'as', text: '캔 통에', motif: 'star' }, 0.15),
          ORDER3('음료 캔을 내놓아요. 놓아요.', [{ id: 'empty', text: '비워요', motif: 'cloud' }, { id: 'rinse', text: '헹궈요', motif: 'leaf' }, { id: 'put', text: '캔 통에', motif: 'house' }], { id: 'as', text: '아무 통에', motif: 'star' }, 0.2,
            { conclude: '비우고, 헹구고, 알맞은 통에 넣어요.' }),
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '비우고, ___, 통에 넣어요.', answer: '헹구고' }] },
    }),
    EA({
      id: 'days.e12.earth.wrap.earthface1', type: 'wrap', title: '웃는 지구 얼굴 꾸미기',
      method: '웃는 지구 얼굴 꾸미기', tool: 'collage', minutes: 7,
      levels: { easy: '조각 2개(눈 2개)를 붙여 웃는 얼굴을 꾸민다.', base: '조각 4개 이상(눈·입·볼)을 붙여 꾸민다.', challenge: '얼굴을 꾸민 뒤 지킬 약속 하나를 나뭇잎 조각으로 더 붙이며 말한다.' },
      wrap: {
        teacher: '"오늘 지구를 아끼는 일을 했더니 지구가 어떤 얼굴이 되었을까요?" 파랑·초록 동그라미 판 위에 웃는 얼굴 조각을 붙이게 한다. 다 붙인 학생에게 "지구가 웃게 할 내 약속은 무엇인가요?"라고 묻고 한 명씩 말하게 한다. 출구 2번에서 "불 켜 두기"를 고른 학생에게는 아무도 없을 때는 불을 끈다는 것을 다시 말해 준다.',
        exitTicket: [
          PASTE(['circle', 'semi', 'heart', 'leaf'], ['파랑', '초록', '노랑', '분홍', '검정'], ['웃는 얼굴을 꾸몄어요', '지킬 약속을 말했어요'], '웃는 지구 얼굴을 꾸며요.', 2),
          CH('지구가 웃는 일은 무엇일까요?', ['불 켜 두기', '불 끄기', '물 틀어 두기'], 1, '쓰지 않는 불을 끄면 지구가 웃어요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '지구를 웃게 하는 나',
        items: [
          { type: 'check', prompt: '내가 지킬 약속에 ✓ 해요.', options: ['불을 꺼요', '물을 잠가요', '종이를 양면에 써요'] },
          { type: 'draw', prompt: '웃는 지구 얼굴을 그려요.' },
        ],
        easy: { note: '지구가 웃는 얼굴을 떠올려요.', items: [{ type: 'draw', prompt: '웃는 지구를 그려요.' }] },
      },
    }),
    EA({
      id: 'days.e12.earth.wrap.real2', type: 'wrap', title: '교실 분리배출 해 보기',
      method: '교실 분리배출 실제로 해 보기', tool: 'timer', minutes: 7,
      levels: { easy: '교사와 함께 교실 쓰레기를 하나씩 들어 보며 통을 고르고 점검 칸을 함께 표시한다.', base: '모둠별로 교실 쓰레기를 나누어 넣고 점검 칸에 스스로 표시한다.', challenge: '혼자 자기 자리 둘레의 쓰레기를 나누어 넣고 점검 칸에 표시한다.' },
      wrap: {
        teacher: '"오늘 배운 대로 우리 교실 쓰레기를 나누어 볼까요?" 교실에 모인 종이·캔·플라스틱을 꺼내 함께 통에 넣는다. 깨진 물건이나 날카로운 것은 학생이 만지지 않고 교사가 맡는다. 출구 2번에서 쓴 휴지를 종이 통으로 고른 학생에게 "쓴 휴지는 일반 쓰레기 통이에요"라고 다시 말해 준다.',
        exitTicket: [
          SELF('교실 분리배출 점검', ['비우고 헹궜어요', '알맞은 통에 넣었어요', '날카로운 것은 안 만졌어요'], '해 본 것에 표시해요.'),
          CH('코 푼 휴지는 어디에 넣어요?', ['종이 통', '일반 쓰레기 통', '캔 통'], 1, '쓴 휴지는 다시 쓰기 어려워 일반 쓰레기예요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '우리 교실 분리배출',
        items: [
          { type: 'table', prompt: '알맞은 통을 써요.', columns: ['물건', '통'], cells: [['우유갑', ''], ['음료 캔', ''], ['페트병', '']], answer: '종이, 캔, 플라스틱' },
          { type: 'draw', prompt: '분리배출 하는 내 모습을 그려요.' },
        ],
        easy: { note: '무엇으로 만들었는지 봐요.', items: [{ type: 'choice', prompt: '우유갑은 어느 통에 넣어요?', options: ['종이 통', '캔 통'], answer: '종이 통' }] },
      },
    }),
  ];

  // =====================================================================================================
  // 5·18민주화운동 기념일 — 서로 도와요
  // 우리나라 칸 지도(한반도를 6×9 칸으로 줄인 그림 — 칸 자리는 위치 관계만 살린다. lessons/units/g1-cc-days.js 와 같은 판)
  const KOR_LAND = [[1, 0], [2, 0], [3, 0], [4, 0], [1, 1], [2, 1], [3, 1], [4, 1], [1, 2], [2, 2], [3, 2], [4, 2],
    [1, 3], [2, 3], [3, 3], [1, 4], [2, 4], [3, 4], [1, 5], [2, 5], [3, 5], [1, 6], [2, 6], [3, 6], [1, 7], [2, 7], [3, 7]];
  const KOR_SEA = [[0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8], [4, 3], [4, 4], [4, 5], [4, 6], [4, 7], [4, 8],
    [5, 2], [5, 3], [5, 4], [5, 5], [5, 6], [5, 7], [5, 8], [1, 8], [2, 8], [3, 8]];
  const KOR = (places, more) => Object.assign({ grid: [6, 9], title: '우리나라 칸 지도', regions: [{ name: '우리나라 땅', cells: KOR_LAND, color: 'mint' }], regionNames: false, sea: KOR_SEA, places }, more || {});
  const KP = { seoul: { name: '서울', icon: 'capital', at: [2, 5] }, gwangju: { name: '광주', icon: 'city', at: [1, 7] }, busan: { name: '부산', icon: 'port', at: [3, 7] }, daegu: { name: '대구', icon: 'city', at: [3, 6] } };
  const MY = MOD('days.e12.may18');
  const T_MAY18 = [
    MY({
      id: 'days.e12.may18.intro.help1', type: 'intro', title: '서로 돕는 그림 고르기',
      method: '서로 돕는 그림 고르기', tool: 'wordcards', minutes: 6,
      levels: { easy: '교사가 카드 2장(나눠 주기·밀치기)만 읽어 주고 서로 돕는 것을 함께 고른다.', base: '시연을 보고 카드 4장 가운데 서로 돕는 것 2장을 말한다.', challenge: '돕는 카드를 고른 뒤 교실에서 해 본 돕기 하나를 말한다.' },
      intro: {
        teacher: '"5월 18일은 광주라는 도시의 사람들을 기억하는 날이에요." 1980년 5월 광주 시민들이 모두가 함께 나라의 일을 정하는 민주주의를 바라며 힘을 모았고, 그때 이웃끼리 주먹밥을 나누며 서로 도왔다는 이야기를 짧게 들려준다. 시연 단추로 서로 돕는 카드를 바구니에 담는다. "무서운 일이에요?"라는 질문에는 "슬픈 일도 있었어요. 오늘은 서로 도운 마음을 기억해요"라고 답한다.',
        student: '친구를 도와준 일을 하나 떠올려 짝에게 말해 보아요.',
        demo: PICKDEMO('서로 도와요', [{ id: 'share', text: '나눠 주기', motif: 'heart' }, { id: 'push', text: '밀치기', motif: 'cloud' }, { id: 'help', text: '도와주기', motif: 'house' }, { id: 'alone', text: '혼자 먹기', motif: 'star' }], ['share', 'help']),
        art: { draw: 'paper neighbors handing round paper rice balls to each other on a sunny paper street with spring flowers, everyone smiling warmly', banner: '5월 18일, 서로 도와요', extra: [{ motif: 'heart', x: 300, y: 96 }] },
      },
      notes: '1·2학년은 서로 도운 마음과 기억하는 방법에 머문다. 희생 장면·사진은 쓰지 않는다. 학교 계기교육 계획과 교육청 안내 자료 범위를 따른다.',
    }),
    MY({
      id: 'days.e12.may18.intro.map2', type: 'intro', title: '지도에서 광주 찾기',
      method: '지도에서 광주 찾기', tool: 'map', minutes: 6,
      levels: { easy: '교사가 지도에서 서울을 먼저 짚고, 광주가 있는 왼쪽 아래 칸을 손으로 가리켜 준다.', base: '시연을 보고 광주가 우리나라 어느 쪽에 있는지 말한다.', challenge: '광주를 찾은 뒤 우리 고장이 지도에서 어디쯤인지도 짚는다.' },
      intro: {
        teacher: '"광주는 우리나라 어느 쪽에 있을까요?" 지도 위쪽이 북쪽이라고 먼저 알린 뒤 시연 단추로 광주에 핀이 꽂히는 모습을 보여 준다. 부산을 가리키는 학생에게 "부산은 오른쪽 아래, 광주는 왼쪽 아래예요"라고 짚는다. 5월 18일은 1980년 광주에서 민주주의를 바라다 세상을 떠난 시민들을 기억하는 날이라고 알린다.',
        student: '지도에서 광주를 찾아 손가락으로 짚어 보아요.',
        demo: { tool: 'map', options: KOR([KP.seoul, KP.gwangju, KP.busan, KP.daegu]), sequence: [{ pin: [1, 7] }] },
        art: { draw: 'a simple paper map of Korea with a small paper pin on the southwest city of Gwangju, paper children looking at it with a teacher', banner: '광주는 어디일까?', extra: [{ motif: 'flower', x: 300, y: 222 }] },
      },
      notes: '칸 지도는 위치 관계만 살린 그림이다. 실제 지도(사회과 부도·벽지도)를 함께 보인다.',
    }),
    MY({
      id: 'days.e12.may18.activity.share1', type: 'activity', title: '나눔 장면에 마음 카드 짝 짓기',
      method: '시민들이 나눈 것 그림 짝 짓기', tool: 'emotion', minutes: 14,
      levels: { easy: '장면 2개에 마음 카드를 짝 짓고, 카드 아래 풀이가 처음부터 보인다.', base: '장면 2개에 마음 카드를 짝 짓고, 헷갈리는 마음 카드 한 장을 남긴다.', challenge: '카드가 섞여 나오고, 짝을 지은 뒤 그렇게 고른 까닭을 짝에게 말로 한다.' },
      activity: {
        title: '나눔 장면과 마음 짝 짓기', tool: 'emotion',
        teacher: '"주먹밥을 받은 이웃은 어떤 마음이었을까요?" 장면을 읽고 마음 카드를 짝 짓는다. 1번은 1980년 광주에서 있었던 나눔이고, 2·3번은 우리 둘레에서 볼 수 있는 나눔이라고 구별해 말한다. "나누면 내 것이 줄어요"라는 학생에게 "나눠 준 사람의 마음은 어땠을까요?"라고 물어 3번으로 잇는다.',
        task: '나눔 장면을 듣고 어울리는 마음 카드를 이어요.', levels: { easy: { showBack: true }, base: {}, challenge: { shuffle: true } },
        items: [
          { prompt: '주먹밥을 받은 이웃 마음은?', toolOptions: { mode: 'match', slots: [{ id: 's1', label: '주먹밥 받은 이웃' }, { id: 's2', label: '물을 받은 이웃' }], cards: [{ id: '고마움', text: '고마움', back: '도와줘서' }, { id: '기쁨', text: '기쁨', back: '함께여서' }, { id: '화남', text: '화남' }] }, target: { match: { s1: ['고마움', '기쁨'], s2: ['고마움', '기쁨'] } }, difficulty: 0.1 },
          { prompt: '도움을 받은 친구 마음은?', toolOptions: { mode: 'match', slots: [{ id: 's1', label: '짐을 들어 줬어요' }, { id: 's2', label: '우산을 같이 써요' }], cards: [{ id: '고마움', text: '고마움', back: '무겁지 않아요' }, { id: '편안함', text: '편안함', back: '비를 안 맞아요' }, { id: '무서움', text: '무서움' }] }, target: { match: { s1: ['고마움', '편안함'], s2: ['고마움', '편안함'] } }, difficulty: 0.15 },
          { prompt: '나눠 준 나의 마음은?', toolOptions: { mode: 'match', slots: [{ id: 's1', label: '간식을 나눈 나' }, { id: 's2', label: '길을 알려 준 나' }], cards: [{ id: '뿌듯함', text: '뿌듯함', back: '도움이 됐어요' }, { id: '기쁨', text: '기쁨', back: '함께 웃어요' }, { id: '심심함', text: '심심함' }] }, target: { match: { s1: ['뿌듯함', '기쁨'], s2: ['뿌듯함', '기쁨'] } }, difficulty: 0.2,
            conclude: '서로 나누고 도우면 받는 사람도 주는 사람도 마음이 따뜻해요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '나눔을 받은 이웃의 마음에 ○ 해요.', options: ['고마움', '화남'], answer: '고마움' }] },
    }),
    MY({
      id: 'days.e12.may18.activity.act1', type: 'activity', title: '교실에서 서로 돕기 역할놀이',
      method: '교실에서 서로 돕기 역할놀이', tool: 'timer', minutes: 13,
      levels: { easy: '돕는 차례 카드 3장을 맞추고, 교사를 따라 한 번 해 본 뒤 표시한다.', base: '돕는 차례를 맞추고 짝과 역할을 바꿔 2번 하도록 타이머를 맞춘 뒤 표시한다.', challenge: '짝과 2번 해 본 뒤 모둠 앞에서 한 번 보여 준 것까지 표시한다.' },
      activity: {
        title: '물건을 떨어뜨린 친구 돕기', tool: 'timer',
        teacher: '"친구가 연필을 쏟았어요. 어떻게 도울까요?" 차례 카드를 맞춘 뒤 짝과 한 명은 쏟은 친구, 한 명은 돕는 친구가 되어 해 본다. 말없이 줍기만 하는 학생에게 "먼저 \'괜찮아?\' 하고 물어 주면 친구 마음이 어떨까요?"라고 묻는다. 도움을 받은 친구는 "고마워"라고 말하게 한다. 5·18 때 이웃끼리 서로 도운 마음이 지금 우리 교실에도 이어진다고 말한다.',
        task: '돕는 차례를 맞추고 짝과 역할놀이를 해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          STEPS('돕는 차례를 놓아요.', '친구 돕기 차례', ['"괜찮아?"', '같이 줍기', '"고마워"'], 0.1),
          { prompt: '역할을 바꿔 2번 하게 맞춰요.', toolOptions: { title: '역할놀이(우리 반 약속)', labels: ['놀이', '바꾸기'], plan: { work: 30, rest: 10, rounds: 1 } }, target: { plan: { rounds: 2 } }, difficulty: 0.15,
            hints: ['역할을 몇 번 해 볼지 세어 봐요.', '번 칸이 해 볼 횟수예요.', '번 칸을 2에 맞춰요.'],
            levels: { easy: { prompt: '역할놀이를 1번 하게 맞춰요.', toolOptions: { plan: { work: 30, rest: 10, rounds: 3 } }, target: { plan: { rounds: 1 } } } } },
          { prompt: '해 본 역할에 표시해요.', toolOptions: { title: '역할놀이 점검' }, target: { selfCheck: ['돕는 친구 해 봤어요', '도움 받는 친구 해 봤어요'] }, difficulty: 0.15,
            levels: { challenge: { prompt: '모둠 앞에서 한 것도 표시해요.', target: { selfCheck: ['돕는 친구 해 봤어요', '도움 받는 친구 해 봤어요', '모둠 앞에서 보여 줬어요'] } } },
            conclude: '"괜찮아?" 묻고, 같이 하고, "고마워"로 마쳐요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '친구를 도울 때 먼저 "___?" 하고 물어요.', answer: '괜찮아' }] },
      notes: '타이머 초·횟수는 우리 반 약속(연습용 값)이다.',
    }),
    MY({
      id: 'days.e12.may18.activity.remember2', type: 'activity', title: '기억하는 방법 좋아요·안돼요',
      method: '기억하는 방법 그림 나누기', tool: 'sortboard', minutes: 14,
      levels: { easy: '카드 4장, 틀린 바구니에 넣으면 까닭을 말하고 돌아오며 장 수가 보인다.', base: '카드 6장을 다 넣은 뒤 확인한다.', challenge: '카드 8장, "사진 찍고 떠들기"처럼 헷갈리는 카드가 섞인다.' },
      activity: {
        title: '기억하는 방법 나누기', tool: 'sortboard',
        teacher: '"세상을 떠난 분들을 기억할 때는 어떻게 할까요?" 카드를 넣으며 까닭을 짧게 말하게 한다. 장난치는 카드를 좋아요에 넣는 학생에게 "기억하는 자리는 조용히 마음을 모으는 곳이에요"라고 말한다. 기념일은 슬퍼하기만 하는 날이 아니라 고마운 마음을 기억하고 서로 돕겠다고 다짐하는 날이라는 점을 짚는다.',
        task: '기억하는 방법 카드를 좋아요·안돼요 바구니에 나누어요.', levels: SBLV,
        items: [
          SB(['좋아요', '안돼요'], '추모하는 곳에서 할 일을 나누어요.', ['꽃 놓기', '조용히 걷기', '고개 숙이기'], ['뛰어다니기', '큰 소리 웃기', '꽃 꺾기'], ['사진 찍고 떠들기', '장난 인사'], 0.1),
          SB(['좋아요', '안돼요'], '기념일 교실에서 할 일을 나누어요.', ['이야기 듣기', '마음 모으기', '감사 편지'], ['딴짓하기', '친구 놀리기', '떠들기'], ['노래 흥얼대기', '그림 낙서'], 0.15),
          SB(['좋아요', '안돼요'], '서로 돕는 마음을 나누어요.', ['간식 나누기', '친구 돕기', '양보하기'], ['혼자 다 먹기', '밀치기', '모른 척하기'], ['돕고 생색', '나만 먼저'], 0.2, { conclude: '조용히 마음을 모으고, 서로 도우며 기억해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '좋으면 ○, 안 되면 ×를 써요.', columns: ['행동', '○ / ×'], cells: [['꽃 놓기', ''], ['뛰어다니기', ''], ['조용히 걷기', '']], answer: '○, ×, ○' }] },
    }),
    MY({
      id: 'days.e12.may18.activity.flower2', type: 'activity', title: '기억의 꽃 꾸미기',
      method: '기억의 꽃 꾸미기', tool: 'collage', minutes: 13,
      levels: { easy: '꽃 한 송이(꽃잎 5장·가운데 1개)와 줄기·잎을 붙인다 — 둘째 문항도 한 송이.', base: '꽃 두 송이(꽃잎 10장·가운데 2개)와 줄기·잎을 붙인다.', challenge: '두 송이를 꽃잎 수가 똑같게(10장) 붙이고, 줄기·잎을 송이마다 붙인다.' },
      activity: {
        title: '기억의 꽃판 꾸미기', tool: 'collage',
        teacher: '"고마운 분들을 기억하는 꽃을 함께 꾸며 볼까요?" 하트 조각을 꽃잎으로, 노랑 동그라미를 꽃 가운데로 붙이게 한다. 다 꾸민 꽃판은 교실 뒤 \'기억의 꽃밭\'에 모아 붙인다고 알린다. 꽃잎을 한쪽에만 모아 붙인 학생에게 "가운데 둘레에 빙 둘러 붙이면 꽃처럼 보여요"라고 말해 준다. 꽃을 꾸미며 서로 도운 이웃들을 떠올리게 한다.',
        task: '하트 꽃잎과 노랑 가운데로 기억의 꽃을 꾸며요.', levels: { easy: { shapes: ['heart', 'circle', 'rect', 'leaf'] }, base: {}, challenge: {} },
        items: [
          { prompt: '꽃잎 5장과 가운데를 붙여요.', toolOptions: {}, target: { has: [{ shape: 'heart', min: 5 }, { shape: 'circle', color: '노랑', min: 1 }] }, difficulty: 0.1 },
          { prompt: '꽃 두 송이를 꾸며요.', toolOptions: {}, target: { has: [{ shape: 'heart', min: 10 }, { shape: 'circle', color: '노랑', min: 2 }] }, difficulty: 0.15,
            levels: { easy: { prompt: '꽃 한 송이를 꾸며요.', target: { has: [{ shape: 'heart', min: 5 }, { shape: 'circle', color: '노랑', min: 1 }, { shape: 'leaf', min: 1 }] } },
              challenge: { prompt: '꽃잎이 똑같은 두 송이를 꾸며요.', target: { has: [{ shape: 'heart', n: 10 }, { shape: 'circle', color: '노랑', n: 2 }] } } } },
          { prompt: '줄기와 잎을 붙여요.', toolOptions: {}, target: { has: [{ shape: 'rect', color: '초록', min: 1 }, { shape: 'leaf', min: 1 }, { shape: 'heart', min: 5 }] }, difficulty: 0.2,
            levels: { challenge: { prompt: '송이마다 줄기와 잎을 붙여요.', target: { has: [{ shape: 'rect', color: '초록', min: 2 }, { shape: 'leaf', min: 2 }, { shape: 'heart', min: 10 }] } } },
            conclude: '기억의 꽃에 고마운 마음과 서로 돕는 마음을 담았어요.' },
        ],
      },
      worksheet: { items: [{ type: 'draw', prompt: '기억의 꽃을 그리고 색칠해요.' }] },
    }),
    MY({
      id: 'days.e12.may18.wrap.heart1', type: 'wrap', title: '돕고 싶은 마음 고르기',
      method: '돕고 싶은 마음 고르기', tool: 'emotion', minutes: 7,
      levels: { easy: '교사가 상황과 보기를 읽어 주고 돕는 보기 하나를 함께 고른다.', base: '상황을 듣고 돕는 보기를 스스로 고르고, 출구 2번도 혼자 고른다.', challenge: '보기를 고른 뒤 그 행동을 고른 까닭을 한 문장으로 말한다.' },
      wrap: {
        teacher: '"내일 친구를 도울 수 있는 일은 무엇일까요?" 출구 1번을 고른 뒤 결과를 함께 읽는다. 모른 척하는 보기를 고른 학생에게 "친구가 혼자 줍고 있으면 어떤 마음일까요?"라고 묻는다. 오늘 들은 5·18 이야기에서 이웃들이 서로 도운 것처럼 우리도 서로 돕자고 말하며 마친다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'branch', situation: '친구 물감이 쏟아졌어요.', choices: [{ id: 'help', text: '같이 닦아 줘요', result: '친구가 "고마워" 해요.', mood: '뿌듯함' }, { id: 'tell', text: '선생님께 알려요', result: '선생님이 도와주세요.', mood: '편안함' }, { id: 'ignore', text: '모른 척해요', result: '친구 혼자 닦아요.', mood: '속상함' }] }, prompt: '친구를 돕는 일을 골라요.', target: { choice: ['help', 'tell'] }, difficulty: 0.1 },
          CH('5·18에 이웃들은 무엇을 했나요?', ['주먹밥을 나눴어요', '혼자 숨었어요'], 0, '이웃끼리 주먹밥을 나누며 서로 도왔어요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '서로 돕는 나',
        items: [
          { type: 'short', prompt: '내일 친구를 도울 일을 하나 써요.' },
          { type: 'draw', prompt: '친구를 돕는 내 모습을 그려요.' },
        ],
        easy: { note: '"괜찮아?"부터 떠올려요.', items: [{ type: 'draw', prompt: '친구를 돕는 모습을 그려요.' }] },
      },
    }),
    MY({
      id: 'days.e12.may18.wrap.quiet2', type: 'wrap', title: '1분 마음 모으기',
      method: '1분 마음 모으기', tool: 'timer', minutes: 7,
      levels: { easy: '교사가 타이머를 30초로 맞추고 함께 눈을 감는다.', base: '타이머를 1분(60초)으로 맞추고 눈을 감고 마음을 모은다.', challenge: '1분 동안 마음을 모은 뒤 떠오른 느낌을 한 낱말로 말한다.' },
      wrap: {
        teacher: '"타이머가 끝날 때까지 눈을 감고, 서로 도운 광주 이웃들과 고마운 분들을 떠올려 보아요." 타이머를 맞춘 뒤 함께 마음을 모은다. 눈 감기를 어려워하는 학생에게 "눈을 감기 힘들면 책상을 바라보아도 괜찮아요"라고 말해 준다. 끝난 뒤 떠오른 느낌을 원하는 학생만 말하게 하고, 말하지 않아도 된다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'timer', options: { title: '마음 모으기(우리 반 약속)', labels: ['모으기', '쉬기'], plan: { work: 20, rest: 0, rounds: 1 } }, prompt: '마음 모으기를 1분으로 맞춰요.', target: { plan: { work: 60 } }, difficulty: 0.1 },
          CH('기억하는 곳에서는 어떻게 해요?', ['조용히 해요', '뛰어다녀요', '크게 웃어요'], 0, '조용히 마음을 모아요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '마음을 모아요',
        items: [
          { type: 'check', prompt: '마음 모으기 때 한 것에 ✓ 해요.', options: ['눈을 감았어요', '조용히 있었어요', '고마운 분을 떠올렸어요'] },
          { type: 'draw', prompt: '마음을 모으는 내 모습을 그려요.' },
        ],
        easy: { note: '조용히 앉아요.', items: [{ type: 'draw', prompt: '눈을 감은 내 얼굴을 그려요.' }] },
      },
      notes: '1분(쉬움 30초)은 우리 반 약속이다. 마음 모으기 뒤 느낌 말하기는 원하는 학생만 한다.',
    }),
  ];

  // =====================================================================================================
  // 현충일·6·25전쟁 — 기억하고 감사해요
  const JN = MOD('days.e12.june');
  const T_JUNE = [
    JN({
      id: 'days.e12.june.intro.siren1', type: 'intro', title: '사이렌 소리 듣고 멈추기',
      method: '사이렌 소리 듣고 멈추기', tool: 'timer', minutes: 6,
      levels: { easy: '교사가 사이렌 신호를 한 번 내고 함께 멈춰 바른 자세를 한다.', base: '사이렌 신호를 두 번 내면 학생이 그때마다 멈추고 바른 자세를 한다.', challenge: '교사가 말없이 신호만 내면 스스로 멈추고 바른 자세를 한다.' },
      intro: {
        teacher: '"6월 6일 아침 10시에 \'위잉\' 사이렌 소리가 울리면 무엇을 할까요?" 대답을 듣고(기다릴 반응: "모르겠어요", "조용히 해요") 현충일은 나라를 위해 목숨을 바친 분들을 기억하는 날이고, 사이렌이 울리면 1분 동안 조용히 묵념한다고 알린다. 시연 단추로 차례 카드가 놓이는 모습을 보인다. 사이렌을 무서워하는 학생에게 "다 함께 기억하자고 알려 주는 소리예요"라고 안심시킨다.',
        student: '선생님 신호가 들리면 하던 일을 멈추고 바른 자세로 서 보아요.',
        demo: { tool: 'timer', options: { title: '사이렌이 울리면', cards: ['묵념하기', '사이렌 듣기', '멈추기'] }, sequence: [{ order: ['사이렌 듣기', '멈추기', '묵념하기'] }] },
        art: { draw: 'paper children standing still with heads gently bowed in a paper schoolyard, a paper flag lowered on its pole and soft sound waves in the sky', banner: '6월 6일, 멈추고 기억해요', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
      },
      notes: '실제 사이렌 소리를 크게 틀지 않는다(놀라는 학생이 있다). 교사 손짓이나 작은 종으로 신호를 대신해도 된다.',
    }),
    JN({
      id: 'days.e12.june.intro.place2', type: 'intro', title: '추모하는 곳 그림 고르기',
      method: '추모 장소 그림 고르기', tool: 'wordcards', minutes: 6,
      levels: { easy: '교사가 카드 2장(현충원·놀이공원)만 보이고 추모하는 곳을 함께 고른다.', base: '시연을 보고 카드 4장 가운데 추모하는 곳 2장을 말한다.', challenge: '추모하는 곳을 고른 뒤 그곳에서 할 일 하나를 말한다.' },
      intro: {
        teacher: '"나라를 위해 희생한 분들을 기억하는 곳은 어디일까요?" 국립현충원 사진을 보이며 대답을 듣고 시연 단추로 현충원·현충탑 카드를 바구니에 담는다. 놀이공원을 고르는 학생에게 "놀이공원은 신나게 노는 곳이에요. 현충원은 조용히 기억하는 곳이에요"라고 말한다. 우리 고장에도 현충탑이나 충혼탑이 있을 수 있다고 알린다.',
        student: '추모하는 곳에서 할 일을 하나 떠올려 짝에게 말해 보아요.',
        demo: PICKDEMO('추모하는 곳', [{ id: 'cem', text: '현충원', motif: 'tree' }, { id: 'park', text: '놀이공원', motif: 'star' }, { id: 'tower', text: '현충탑', motif: 'mountain' }, { id: 'field', text: '운동장', motif: 'sun' }], ['cem', 'tower']),
        art: { draw: 'a quiet paper memorial garden with neat rows of small paper stones, white paper flowers and tall green paper trees, paper visitors walking slowly', banner: '조용히 기억하는 곳', extra: [{ motif: 'flower', x: 300, y: 222 }] },
      },
    }),
    JN({
      id: 'days.e12.june.activity.pose1', type: 'activity', title: '묵념 자세 고르기',
      method: '바른 묵념 자세 고르기', tool: 'body', minutes: 14,
      levels: { easy: '고를 부분이 4곳(눈·목·가슴·무릎)뿐이고, 누르면 이름이 보인다. 셋째 문항도 1곳.', base: '부분 6곳 가운데 1곳씩 고른다(이름은 보이지 않는다).', challenge: '부분 14곳 가운데 고르고, 셋째 문항에서 묵념과 경례에 쓰는 곳 3곳을 한꺼번에 고른다.' },
      activity: {
        title: '묵념·경례 자세 찾기', tool: 'body',
        teacher: '"묵념할 때 우리 몸은 어떻게 할까요?" 종이 몸에서 고른 뒤 모두 일어나 직접 해 본다(고개 숙이기·눈 감기). 국기에 대한 경례는 오른손을 펴서 왼쪽 가슴에 댄다고 보여 준다. 웃거나 떠드는 학생에게 "1분 동안은 고마운 분을 떠올리는 시간이에요"라고 짚는다. 손은 몸 옆에 가지런히 두거나 앞에 모은다고 말한다.',
        task: '묵념과 경례 때 쓰는 몸의 부분을 눌러요.',
        levels: { easy: { names: true, parts: ['눈', '목', '가슴', '무릎'] }, base: { parts: ['눈', '귀', '목', '가슴', '어깨', '무릎'] }, challenge: { parts: ['눈', '귀', '코', '혀', '피부', '목', '어깨', '팔꿈치', '손목', '허리', '허벅지', '무릎', '발목', '가슴'] } },
        items: [
          { prompt: '묵념할 때 숙이는 곳을 눌러요.', toolOptions: { mode: 'parts' }, target: { parts: ['목'] }, difficulty: 0.1 },
          { prompt: '묵념할 때 감는 곳을 눌러요.', toolOptions: { mode: 'parts' }, target: { parts: ['눈'] }, difficulty: 0.15 },
          { prompt: '경례 때 손을 대는 곳을 눌러요.', toolOptions: { mode: 'parts' }, target: { parts: ['가슴'] }, difficulty: 0.2,
            levels: { challenge: { prompt: '묵념·경례에 쓰는 곳 3곳을 눌러요.', target: { parts: ['목', '눈', '가슴'] } } },
            conclude: '묵념은 고개를 숙이고 눈을 감아요. 경례는 오른손을 왼쪽 가슴에 대요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '바른 묵념 자세에 ○ 해요.', options: ['고개 숙이고 눈 감기', '손 흔들며 웃기'], answer: '고개 숙이고 눈 감기' }] },
      notes: '종이 몸에는 머리·손 칸이 없어 고개는 목, 경례하는 손 자리는 가슴으로 짚는다. 손 모양은 학생이 자기 몸으로 해 본다.',
    }),
    JN({
      id: 'days.e12.june.activity.pick1', type: 'activity', title: '현충일 바른 행동 좋아요·안돼요',
      method: '현충일 바른 행동 좋아요·안돼요', tool: 'sortboard', minutes: 13,
      levels: { easy: '카드 4장, 틀린 바구니에 넣으면 까닭을 말하고 돌아오며 장 수가 보인다.', base: '카드 6장을 다 넣은 뒤 확인한다.', challenge: '카드 8장, "묵념하며 눈 뜨고 장난"처럼 헷갈리는 카드가 섞인다.' },
      activity: {
        title: '현충일에 하는 행동 나누기', tool: 'sortboard',
        teacher: '"현충일에 이렇게 하면 좋을까요, 안 될까요?" 카드를 넣을 때마다 반 전체가 소리 내어 읽는다. "쉬는 날이니 실컷 놀아요"라는 학생에게 "놀아도 돼요. 그런데 10시 사이렌이 울리면 무엇을 할까요?"라고 묻는다. 현충일은 즐거운 휴일이기만 한 날이 아니라 고마운 분들을 조용히 기억하는 날이라고 짚는다.',
        task: '행동 카드를 좋아요·안돼요 바구니에 나누어요.', levels: SBLV,
        items: [
          SB(['좋아요', '안돼요'], '사이렌이 울릴 때를 나누어요.', ['멈추기', '묵념하기', '조용히 서기'], ['계속 뛰기', '소리치기', '노래 틀기'], ['눈 뜨고 장난', '몰래 웃기'], 0.1),
          SB(['좋아요', '안돼요'], '현충일 아침을 나누어요.', ['조기 달기', '감사 인사', '이야기 듣기'], ['태극기 끌기', '깃발 장난', '사이렌 흉내'], ['국경일처럼 달기', '깃발 접어 놀기'], 0.15),
          SB(['좋아요', '안돼요'], '추모하는 곳에서를 나누어요.', ['천천히 걷기', '꽃 놓기', '작게 말하기'], ['뛰어다니기', '쓰레기 버리기', '비석 오르기'], ['큰 소리 사진', '꽃 가져가기'], 0.2, { conclude: '현충일에는 멈추고 묵념하며 고마운 분들을 기억해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '좋으면 ○, 안 되면 ×를 써요.', columns: ['행동', '○ / ×'], cells: [['묵념하기', ''], ['계속 뛰기', ''], ['조기 달기', '']], answer: '○, ×, ○' }] },
    }),
    JN({
      id: 'days.e12.june.activity.manner2', type: 'activity', title: '추모하는 곳 예절 고르고 결과 보기',
      method: '추모 장소 예절 고르고 결과 보기', tool: 'emotion', minutes: 14,
      levels: { easy: '보기 2개, 고르면 결과가 바로 보인다.', base: '보기 3개, 결과는 확인한 뒤에 보인다.', challenge: '보기 3개에 헷갈리는 보기("작게 장난쳐요")가 섞이고, 결과는 확인한 뒤에 보인다.' },
      activity: {
        title: '현충원에서 어떻게 할까?', tool: 'emotion',
        teacher: '"현충원에 갔어요. 나는 어떻게 할까요?" 보기를 고른 뒤 결과를 함께 읽고 까닭을 말하게 한다. "아무도 안 보면 괜찮아요"라는 학생에게 "보는 사람이 없어도 그곳에 잠든 분들을 존중하는 마음은 같아요"라고 말한다. 현충원처럼 나라를 위해 희생한 분들이 잠든 곳에서는 조용히 걷는다고 알린다.',
        task: '장면을 듣고 바른 예절을 골라요.', levels: { easy: {}, base: { revealAfterCheck: true }, challenge: { revealAfterCheck: true } },
        items: [
          { prompt: '현충원 길을 걸어요. 어떻게?', toolOptions: { mode: 'branch', situation: '현충원 길을 걸어요.', choices: [{ id: 'walk', text: '천천히 걸어요', result: '조용히 둘러보았어요.', mood: '편안함' }, { id: 'run', text: '달리기 해요', result: '다른 분들이 놀랐어요.', mood: '놀람' }, { id: 'shout', text: '친구를 불러요', result: '조용한 곳이 시끄러워요.', mood: '걱정' }] }, target: { choice: 'walk' }, difficulty: 0.1,
            levels: { easy: { toolOptions: { choices: [{ id: 'walk', text: '천천히 걸어요', result: '조용히 둘러보았어요.', mood: '편안함' }, { id: 'run', text: '달리기 해요', result: '다른 분들이 놀랐어요.', mood: '놀람' }] } },
              challenge: { toolOptions: { choices: [{ id: 'walk', text: '천천히 걸어요', result: '조용히 둘러보았어요.', mood: '편안함' }, { id: 'play', text: '작게 장난쳐요', result: '작아도 장난은 예절이 아니에요.', mood: '걱정' }, { id: 'run', text: '달리기 해요', result: '다른 분들이 놀랐어요.', mood: '놀람' }] } } } },
          { prompt: '꽃을 놓을 때 어떻게?', toolOptions: { mode: 'branch', situation: '비석 앞에 꽃을 놓아요.', choices: [{ id: 'bow', text: '두 손으로 놓아요', result: '정성이 담겼어요.', mood: '뿌듯함' }, { id: 'throw', text: '던져 놓아요', result: '꽃이 흩어졌어요.', mood: '속상함' }, { id: 'pick', text: '꽃을 꺾어요', result: '꽃밭이 망가졌어요.', mood: '걱정' }] }, target: { choice: 'bow' }, difficulty: 0.15,
            levels: { easy: { toolOptions: { choices: [{ id: 'bow', text: '두 손으로 놓아요', result: '정성이 담겼어요.', mood: '뿌듯함' }, { id: 'throw', text: '던져 놓아요', result: '꽃이 흩어졌어요.', mood: '속상함' }] } },
              challenge: { toolOptions: { choices: [{ id: 'bow', text: '두 손으로 놓아요', result: '정성이 담겼어요.', mood: '뿌듯함' }, { id: 'one', text: '한 손으로 휙', result: '정성이 덜 담겼어요.', mood: '걱정' }, { id: 'throw', text: '던져 놓아요', result: '꽃이 흩어졌어요.', mood: '속상함' }] } } } },
          { prompt: '친구가 떠들어요. 어떻게?', toolOptions: { mode: 'branch', situation: '묵념 중 친구가 떠들어요.', choices: [{ id: 'sign', text: '"쉿" 손짓해요', result: '친구도 조용해졌어요.', mood: '편안함' }, { id: 'join', text: '같이 떠들어요', result: '묵념을 못 했어요.', mood: '걱정' }, { id: 'hit', text: '친구를 쳐요', result: '친구가 아파요.', mood: '속상함' }] }, target: { choice: 'sign' }, difficulty: 0.2,
            levels: { easy: { toolOptions: { choices: [{ id: 'sign', text: '"쉿" 손짓해요', result: '친구도 조용해졌어요.', mood: '편안함' }, { id: 'join', text: '같이 떠들어요', result: '묵념을 못 했어요.', mood: '걱정' }] } },
              challenge: { toolOptions: { choices: [{ id: 'sign', text: '"쉿" 손짓해요', result: '친구도 조용해졌어요.', mood: '편안함' }, { id: 'loud', text: '"조용히 해!" 소리쳐요', result: '더 시끄러워졌어요.', mood: '놀람' }, { id: 'join', text: '같이 떠들어요', result: '묵념을 못 했어요.', mood: '걱정' }] } } },
            conclude: '추모하는 곳에서는 천천히 걷고, 두 손으로 꽃을 놓고, 조용히 해요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '현충원에서는 어떻게 걸어요?', options: ['천천히 걸어요', '뛰어요'], answer: '천천히 걸어요' }] },
    }),
    JN({
      id: 'days.e12.june.activity.flag2', type: 'activity', title: '조기·보통 태극기 나누기',
      method: '조기·보통 깃발 그림 나누기', tool: 'sortboard', minutes: 13,
      levels: { easy: '카드 2장만 나누고, 틀리면 까닭을 말하고 돌아오며 장 수가 보인다.', base: '카드 3장을 바구니 2개에 나눈다.', challenge: '카드 5장, 셋째 문항에서 광복절·개천절처럼 기쁜 국경일과 현충일을 함께 견주어 나눈다.' },
      activity: {
        title: '현충일 조기와 보통 태극기', tool: 'sortboard',
        teacher: '"현충일에는 태극기를 어떻게 달까요?" 깃대 그림을 칠판에 그려 깃봉 바로 아래에 붙여 다는 모습과, 깃면 너비만큼 내려 다는 조기를 견주어 보인다. 현충일은 슬픔을 함께하며 기억하는 날이라 조기를 단다고 알린다. 광복절을 조기에 넣는 학생에게 "광복절은 나라를 되찾은 기쁜 날이에요"라고 짚는다.',
        task: '날과 모습 카드를 다는 방법 바구니에 나누어요.', levels: SBLV,
        items: [
          { prompt: '날을 다는 방법으로 나누어요.', toolOptions: { slots: ['조기로 달아요', '깃봉 아래 달아요'], cards: ['현충일', '3·1절', '광복절'] }, target: { sort: { '조기로 달아요': ['현충일'], '깃봉 아래 달아요': ['3·1절', '광복절'] } }, difficulty: 0.1,
            levels: { easy: { prompt: '두 날을 나누어요.', toolOptions: { cards: ['현충일', '3·1절'] }, target: { sort: { '조기로 달아요': ['현충일'], '깃봉 아래 달아요': ['3·1절'] } } },
              challenge: { prompt: '다섯 날을 나누어요.', toolOptions: { cards: ['현충일', '3·1절', '한글날', '광복절', '제헌절'] }, target: { sort: { '조기로 달아요': ['현충일'], '깃봉 아래 달아요': ['3·1절', '한글날', '광복절', '제헌절'] } } } } },
          { prompt: '태극기 모습을 나누어요.', toolOptions: { slots: ['현충일', '국경일'], cards: ['깃면만큼 내려요', '깃봉에 붙여요', '조용히 기억'] }, target: { sort: { 현충일: ['깃면만큼 내려요', '조용히 기억'], 국경일: ['깃봉에 붙여요'] } }, difficulty: 0.15,
            levels: { easy: { prompt: '두 모습을 나누어요.', toolOptions: { cards: ['깃면만큼 내려요', '깃봉에 붙여요'] }, target: { sort: { 현충일: ['깃면만큼 내려요'], 국경일: ['깃봉에 붙여요'] } } },
              challenge: { prompt: '모습과 마음을 나누어요.', toolOptions: { cards: ['깃면만큼 내려요', '기쁘게 기념', '깃봉에 붙여요', '조용히 기억', '되찾은 기쁨'] }, target: { sort: { 현충일: ['깃면만큼 내려요', '조용히 기억'], 국경일: ['깃봉에 붙여요', '기쁘게 기념', '되찾은 기쁨'] } } } } },
          { prompt: '날짜를 다는 방법으로 나누어요.', toolOptions: { slots: ['조기로 달아요', '깃봉 아래 달아요'], cards: ['6월 6일', '8월 15일', '10월 9일'] }, target: { sort: { '조기로 달아요': ['6월 6일'], '깃봉 아래 달아요': ['8월 15일', '10월 9일'] } }, difficulty: 0.2,
            levels: { easy: { prompt: '두 날짜를 나누어요.', toolOptions: { cards: ['6월 6일', '8월 15일'] }, target: { sort: { '조기로 달아요': ['6월 6일'], '깃봉 아래 달아요': ['8월 15일'] } } },
              challenge: { prompt: '광복절과 견주어 나누어요.', toolOptions: { cards: ['6월 6일', '8월 15일', '10월 3일', '3월 1일', '10월 9일'] }, target: { sort: { '조기로 달아요': ['6월 6일'], '깃봉 아래 달아요': ['8월 15일', '10월 3일', '3월 1일', '10월 9일'] } } } },
            conclude: '현충일에는 깃면 너비만큼 내려 조기를 달고, 국경일에는 깃봉 바로 아래에 달아요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '현충일 태극기에 ○ 해요.', options: ['깃면만큼 내려 달아요', '깃봉 바로 아래 달아요'], answer: '깃면만큼 내려 달아요' }] },
    }),
    JN({
      id: 'days.e12.june.wrap.card1', type: 'wrap', title: '감사 꽃 카드 꾸미기',
      method: '감사 꽃 카드 꾸미기', tool: 'collage', minutes: 7,
      levels: { easy: '꽃 조각 2개를 붙이고 "고맙습니다"를 따라 말한다.', base: '꽃 조각 4개 이상을 붙여 감사 카드를 꾸민다.', challenge: '꽃 조각에 하트 조각을 더 붙이고 감사의 말을 한 문장으로 말한다.' },
      wrap: {
        teacher: '"나라를 지킨 분들께 감사 꽃 카드를 드린다면 어떻게 꾸밀까요?" 꽃 조각을 붙이며 "고맙습니다, 기억할게요"를 마음속으로 말해 보게 한다. 출구 2번에서 "계속 놀아요"를 고른 학생에게 "1분이면 돼요. 멈추고 기억해요"라고 말해 준다. 다 꾸민 카드는 교실 게시판에 붙인다.',
        exitTicket: [
          PASTE(['heart', 'circle', 'leaf', 'star'], ['하양', '노랑', '분홍', '초록'], ['꽃을 붙였어요', '감사의 말을 했어요'], '감사 꽃 카드를 꾸며요.', 2),
          CH('10시 사이렌이 울리면요?', ['멈추고 묵념해요', '계속 놀아요', '크게 웃어요'], 0, '사이렌이 울리면 멈추고 1분 동안 묵념해요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '고맙습니다, 기억할게요',
        items: [
          { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '현충일은 ___월 6일이에요.', answer: '6' },
          { type: 'draw', prompt: '감사 꽃 카드를 그려요.' },
        ],
        easy: { note: '고마운 마음을 떠올려요.', items: [{ type: 'draw', prompt: '꽃 한 송이를 그려요.' }] },
      },
    }),
    JN({
      id: 'days.e12.june.wrap.letter2', type: 'wrap', title: '감사 말 한마디 연습',
      method: '감사 말 한 마디 연습', tool: 'timer', minutes: 7,
      levels: { easy: '교사를 따라 "고맙습니다, 기억할게요"를 말한 뒤 표시한다.', base: '짝에게 "고맙습니다, 기억할게요"를 말하고 짝의 말을 들은 뒤 표시한다.', challenge: '감사의 말을 내 말로 바꿔 짝에게 말한 뒤 표시한다.' },
      wrap: {
        teacher: '"나라를 지킨 분들께 드리고 싶은 말을 짝에게 연습해 볼까요?" 교사가 "고맙습니다, 기억할게요"를 먼저 말하고 짝끼리 주고받게 한다. 웃음이 터지는 학생에게 "조금 쑥스러워도 괜찮아요. 마음을 담아 다시 해 볼까요?"라고 말해 준다. 6월 25일은 6·25전쟁이 일어난 날이라 함께 기억한다고 날짜만 짧게 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'timer', options: { title: '감사 말 연습' }, prompt: '해 본 것에 표시해요.', target: { selfCheck: ['감사의 말을 했어요', '짝의 말을 들었어요'] }, difficulty: 0.1 },
          CH('현충일 묵념은 몇 시예요?', ['오전 10시', '저녁 7시'], 0, '현충일 오전 10시에 사이렌이 울리면 1분 동안 묵념해요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '감사의 말',
        items: [
          { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '고맙습니다, ___할게요.', answer: '기억' },
          { type: 'short', prompt: '나라를 지킨 분들께 한마디 써요.' },
        ],
        easy: { note: '"고맙습니다"로 시작해요.', items: [{ type: 'draw', prompt: '감사 인사하는 내 모습을 그려요.' }] },
      },
      notes: '6·25전쟁은 날짜만 알리고 전쟁 장면·사진은 쓰지 않는다. 가족 가운데 참전·희생한 분이 있는지 묻지 않는다.',
    }),
  ];

  // =====================================================================================================
  // 6·10민주항쟁 기념일 — 함께 정해요
  const JT = MOD('days.e12.june10');
  const VOTE = (data) => ({ type: 'picture', mode: 'read', title: '우리 반 놀이 손들기(가상)', unit: '명', icon: 'person', icons: [{ value: 1, name: '1명' }], data });
  const T_JUNE10 = [
    JT({
      id: 'days.e12.june10.intro.choose1', type: 'intro', title: '누가 정할까 그림 고르기',
      method: '누가 정할까 그림 고르기', tool: 'wordcards', minutes: 6,
      levels: { easy: '교사가 카드 2장(다 같이 정하기·한 사람 맘대로)만 읽어 주고 함께 고른다.', base: '시연을 보고 카드 3장 가운데 좋은 방법을 고른다.', challenge: '좋은 방법을 고른 뒤 그 까닭을 한 문장으로 말한다.' },
      intro: {
        teacher: '"우리 반 놀이를 한 사람이 마음대로 정하면 어떨까요?" 대답을 듣고(기다릴 반응: "싫어요", "속상해요") 6월 10일은 1987년에 많은 시민이 모두가 함께 정하는 민주주의를 바라며 힘을 모은 날을 기억하는 날이라고 알린다. 시연 단추로 "다 같이 정하기" 카드를 바구니에 담는다. "힘센 사람이 정하면 빨라요"라는 말이 나오면 "빠르지만 다른 친구들 마음은 어떨까요?"라고 되묻는다.',
        student: '우리 반에서 함께 정해 본 일을 하나 떠올려 보아요.',
        demo: PICKDEMO('좋은 방법', [{ id: 'all', text: '다 같이 정하기', motif: 'heart' }, { id: 'one', text: '한 사람 맘대로', motif: 'star' }, { id: 'strong', text: '힘센 친구가', motif: 'cloud' }], ['all']),
        art: { draw: 'a paper classroom where paper children raise their hands together to choose a game, with paper cards of a ball and a jump rope on the board', banner: '함께 정해요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
      },
      notes: '특정 정당·정치인·현 정부 이야기는 다루지 않는다. 반에서 함께 정하는 방법에 머문다.',
    }),
    JT({
      id: 'days.e12.june10.intro.rep2', type: 'intro', title: '반 대표 하는 일 고르기',
      method: '반 대표 하는 일 그림 고르기', tool: 'wordcards', minutes: 6,
      levels: { easy: '교사가 카드 2장만 읽어 주고 대표가 하는 일을 함께 고른다.', base: '시연을 보고 카드 4장 가운데 대표가 하는 일 2장을 말한다.', challenge: '카드 4장을 고른 뒤 "나라면 대표가 되어 무엇을 할지" 한 가지 말한다.' },
      intro: {
        teacher: '"우리 반 대표는 어떤 일을 할까요?" 대답을 듣고(기다릴 반응: "회의해요", "선생님 도와요") 시연 단추로 대표가 하는 일 카드를 바구니에 담는다. "대표는 혼자 다 정해요"라는 말이 나오면 "대표는 반 친구들의 생각을 모아 전하는 사람이에요"라고 답한다. 6월 10일을 기억하며, 오늘은 우리 손으로 대표를 뽑는 차례를 알아본다고 밝힌다.',
        student: '반 대표가 하면 좋을 일을 하나 떠올려 짝에게 말해 보아요.',
        demo: PICKDEMO('대표가 하는 일', [{ id: 'voice', text: '반 의견 전하기', motif: 'heart' }, { id: 'boss', text: '혼자 다 정하기', motif: 'cloud' }, { id: 'meet', text: '회의 이끌기', motif: 'star' }, { id: 'home', text: '숙제 대신하기', motif: 'leaf' }], ['voice', 'meet']),
        art: { draw: 'a paper child standing in front of the class holding a small paper notebook, listening to classmates who raise their hands with ideas', banner: '반 대표가 하는 일', extra: [{ motif: 'heart', x: 300, y: 96 }] },
      },
    }),
    JT({
      id: 'days.e12.june10.activity.vote1', type: 'activity', title: '손들기로 놀이 정하기',
      method: '손들기로 놀이 정하기', tool: 'timer', minutes: 14,
      levels: { easy: '놀이 2개(공놀이·줄넘기)에 손든 수를 적는다.', base: '놀이 3개(공놀이·줄넘기·술래잡기)에 손든 수를 적는다.', challenge: '놀이 3개에 손든 수를 적고, 고른 까닭을 발표한 것까지 표시한다.' },
      activity: {
        title: '손을 들어 반 놀이 정하기', tool: 'timer',
        teacher: '"오늘 쉬는 시간 놀이를 함께 정해 볼까요?" 정하는 차례를 맞춘 뒤 실제로 손을 들어 센다. 손든 수는 교사가 칠판에 적고 학생이 기록판에 옮긴다. 두 번 손드는 학생에게 "한 사람은 한 번만 손들어요. 그래야 모두의 생각이 똑같이 세어져요"라고 말한다. 내 놀이가 안 뽑힌 친구의 마음도 떠올리게 한다.',
        task: '정하는 차례를 놓고 손든 수를 적어요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          STEPS('함께 정하는 차례를 놓아요.', '함께 정하기', ['놀이 듣기', '손들기', '수 세기'], 0.1),
          { prompt: '손든 수를 적어요.', toolOptions: { title: '놀이 손든 수', unit: '명', fields: ['공놀이', '줄넘기', '술래잡기'] }, target: { records: true }, difficulty: 0.15,
            levels: { easy: { prompt: '두 놀이 손든 수를 적어요.', toolOptions: { fields: ['공놀이', '줄넘기'] } } } },
          { prompt: '함께 정할 때 지킨 것에 표시해요.', toolOptions: { title: '함께 정하기 약속' }, target: { selfCheck: ['한 번만 손들었어요', '친구 말을 들었어요'] }, difficulty: 0.15,
            levels: { challenge: { prompt: '까닭 발표도 표시해요.', target: { selfCheck: ['한 번만 손들었어요', '친구 말을 들었어요', '까닭을 발표했어요'] } } },
            conclude: '모두 한 번씩 손들고, 많이 고른 것으로 함께 정해요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '손들기는 한 사람이 몇 번 해요?', options: ['한 번', '여러 번'], answer: '한 번' }] },
      notes: '기록판의 수는 우리 반이 실제로 손든 수를 옮겨 적는다(정답 수가 없다). 정해진 놀이는 실제 쉬는 시간에 함께 한다.',
    }),
    JT({
      id: 'days.e12.june10.activity.count1', type: 'activity', title: '손든 수 그림그래프 보기',
      method: '손든 수 그림그래프 보기', tool: 'chart', minutes: 13,
      levels: { easy: '놀이 2개짜리 그림그래프에서 더 많은 쪽을 고른다.', base: '놀이 3개짜리 그림그래프에서 많은 것·적은 것을 고른다.', challenge: '놀이 4개 가운데 손든 수가 같은 두 놀이가 있는 그래프에서 고른다.' },
      activity: {
        title: '그림그래프로 많은 쪽 찾기', tool: 'chart',
        teacher: '"얼굴 그림 하나가 한 명이에요. 어느 놀이에 손든 친구가 더 많을까요?" 얼굴을 손가락으로 하나씩 세며 읽게 한다. 그래프 칸의 길이만 보고 고르는 학생에게 "얼굴을 하나씩 세어 볼까요?"라고 말한다. 많은 쪽으로 정해도 적은 쪽 친구의 생각도 소중하다는 점을 짚는다. 그래프 수는 가상이라고 알린다.',
        task: '그림그래프를 보고 물음에 알맞은 놀이를 골라요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '손든 친구가 더 많은 놀이는?', toolOptions: Object.assign(VOTE([['공놀이', 6], ['줄넘기', 4], ['술래잡기', 3]]), { question: '가장 많은 놀이는?', choices: ['공놀이', '줄넘기', '술래잡기'] }), target: { pick: 0 }, difficulty: 0.1,
            levels: { easy: { toolOptions: Object.assign(VOTE([['공놀이', 6], ['줄넘기', 4]]), { choices: ['공놀이', '줄넘기'] }), target: { pick: 0 } },
              challenge: { prompt: '네 놀이 가운데 가장 많은 것은?', toolOptions: Object.assign(VOTE([['공놀이', 5], ['줄넘기', 3], ['술래잡기', 5], ['숨바꼭질', 7]]), { choices: ['공놀이', '줄넘기', '술래잡기', '숨바꼭질'] }), target: { pick: 3 } } } },
          { prompt: '손든 친구가 더 적은 놀이는?', toolOptions: Object.assign(VOTE([['공놀이', 6], ['줄넘기', 4], ['술래잡기', 3]]), { question: '가장 적은 놀이는?', choices: ['공놀이', '줄넘기', '술래잡기'] }), target: { pick: 2 }, difficulty: 0.15,
            levels: { easy: { prompt: '두 놀이 가운데 적은 것은?', toolOptions: Object.assign(VOTE([['공놀이', 6], ['줄넘기', 4]]), { choices: ['공놀이', '줄넘기'] }), target: { pick: 1 } },
              challenge: { prompt: '네 놀이 가운데 가장 적은 것은?', toolOptions: Object.assign(VOTE([['공놀이', 5], ['줄넘기', 3], ['술래잡기', 5], ['숨바꼭질', 7]]), { choices: ['공놀이', '줄넘기', '술래잡기', '숨바꼭질'] }), target: { pick: 1 } } } },
          { prompt: '공놀이에 손든 친구는 몇 명?', toolOptions: Object.assign(VOTE([['공놀이', 6], ['줄넘기', 4], ['술래잡기', 3]]), { question: '공놀이는 몇 명?', choices: ['3명', '4명', '6명'] }), target: { pick: 2 }, difficulty: 0.2,
            levels: { easy: { prompt: '공놀이는 몇 명인지 골라요.', toolOptions: Object.assign(VOTE([['공놀이', 6], ['줄넘기', 4]]), { choices: ['4명', '6명'] }), target: { pick: 1 } },
              challenge: { prompt: '손든 수가 같은 두 놀이는?', toolOptions: Object.assign(VOTE([['공놀이', 5], ['줄넘기', 3], ['술래잡기', 5], ['숨바꼭질', 7]]), { question: '수가 같은 두 놀이는?', choices: ['공놀이·술래잡기', '줄넘기·숨바꼭질', '공놀이·줄넘기'] }), target: { pick: 0 } } },
            conclude: '그림을 하나씩 세면 많은 쪽과 적은 쪽을 알 수 있어요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '얼굴 그림 하나는 몇 명이에요?', options: ['1명', '10명'], answer: '1명' }] },
      notes: '그래프 수는 가상이다. 우리 반이 앞 활동에서 손든 수로 바꿔 보여 줘도 된다.',
    }),
    JT({
      id: 'days.e12.june10.activity.steps2', type: 'activity', title: '반 대표 뽑는 차례 놓기',
      method: '반 대표 뽑는 차례 놓기', tool: 'story', minutes: 14,
      levels: { easy: '첫 장면이 놓여 있어 남은 두 장만 놓고, 놓으면 바로 맞는지 알려 준다.', base: '장면 세 장을 차례대로 놓는다.', challenge: '"친구 표 대신 쓰기" 같은 약속을 어긴 장면 한 장이 섞여 있어 빼고 놓는다.' },
      activity: {
        title: '우리 손으로 대표 뽑기', tool: 'story',
        teacher: '"대표를 뽑을 때 맨 먼저 무엇을 할까요?" 장면을 놓은 뒤 소리 내어 읽는다. 표를 세는 장면을 앞에 놓는 학생에게 "아직 아무도 표를 안 넣었는데 무엇을 셀까요?"라고 묻는다. 뽑힌 뒤에는 결과를 함께 따르는 것도 투표의 한 부분이라고 강조한다.',
        task: '대표 뽑는 장면 카드를 차례대로 놓아요.', levels: LV,
        items: [
          ORDER3('대표를 뽑아요. 차례로 놓아요.', [{ id: 'run', text: '후보가 나와요', motif: 'star' }, { id: 'vote', text: '투표해요', motif: 'heart' }, { id: 'count', text: '표를 세요', motif: 'sun' }], { id: 'boss', text: '선생님이 정해요', motif: 'cloud' }, 0.1),
          ORDER3('표를 넣어요. 차례로 놓아요.', [{ id: 'get', text: '종이 받기', motif: 'leaf' }, { id: 'write', text: '혼자 쓰기', motif: 'star' }, { id: 'put', text: '함에 넣기', motif: 'house' }], { id: 'peek', text: '친구 것 보기', motif: 'cloud' }, 0.15),
          ORDER3('뽑은 뒤에요. 차례로 놓아요.', [{ id: 'count', text: '표를 세요', motif: 'sun' }, { id: 'tell', text: '결과 알려요', motif: 'star' }, { id: 'follow', text: '함께 따라요', motif: 'heart' }], { id: 'again', text: '다시 하자 우겨요', motif: 'cloud' }, 0.2,
            { conclude: '후보를 듣고, 혼자 투표하고, 결과를 함께 따라요.' }),
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '후보 → 투표 → ___ 세기', answer: '표' }] },
    }),
    JT({
      id: 'days.e12.june10.activity.ballot2', type: 'activity', title: '비밀 투표 해 보기',
      method: '비밀 투표 해 보기', tool: 'timer', minutes: 13,
      levels: { easy: '교사와 함께 투표 약속을 하나씩 읽으며 표시하고, 개표 차례 카드 3장을 놓는다.', base: '스스로 투표 약속에 표시하고, 개표 차례 3장을 놓는다.', challenge: '약속·개표 차례에 더해, 셋째 문항에서 후보별 표 수를 기록판에 적으며 개표를 돕는다.' },
      activity: {
        title: '종이 투표와 개표', tool: 'timer',
        teacher: '"투표할 때 지킬 약속은 무엇일까요?" 교사가 종이 투표를 진행한다(후보는 놀이 두 가지). 옆 친구 종이를 보려는 학생에게 "한 사람이 한 표씩, 아무도 보지 않게 혼자 쓰는 것이 공정한 투표예요"라고 말한다. 개표는 교사가 종이를 하나씩 펴서 읽고 학생이 바를 정(正)자 대신 동그라미로 센다.',
        task: '투표 약속을 지키고 개표 차례를 놓아요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '투표 약속을 지켰는지 표시해요.', toolOptions: { title: '비밀 투표 약속', safety: ['혼자 썼어요', '남의 종이 안 봤어요', '한 장만 넣었어요'] }, target: { safety: true }, difficulty: 0.1 },
          STEPS('개표 차례를 놓아요.', '개표하기', ['함 열기', '표 세기', '결과 알리기'], 0.15),
          { prompt: '개표하며 지킨 것에 표시해요.', toolOptions: { title: '개표 점검' }, target: { selfCheck: ['조용히 지켜봤어요', '결과를 따랐어요'] }, difficulty: 0.15,
            levels: { challenge: { prompt: '후보별 표 수를 적어요.', toolOptions: { title: '후보별 표 수', unit: '표', fields: ['놀이 가', '놀이 나'] }, target: { records: true } } },
            conclude: '혼자 쓰고, 한 장만 넣고, 결과를 함께 따라요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '비밀 투표에서 지킬 약속은?', options: ['혼자 써요', '친구 것을 봐요'], answer: '혼자 써요' }] },
      notes: '후보는 놀이 두 가지로 하고 친구 이름으로 하지 않는다(뽑히지 않은 친구가 속상하지 않게). 표 수는 실제 개표 결과를 옮겨 적는다.',
    }),
    JT({
      id: 'days.e12.june10.wrap.fair1', type: 'wrap', title: '함께 정한 뒤 마음 고르기',
      method: '함께 정한 뒤 마음 고르기', tool: 'emotion', minutes: 7,
      levels: { easy: '교사가 보기를 읽어 주고 함께 고른다(출구 1번 보기 2개만 가리킨다).', base: '보기 3개 가운데 스스로 고른다.', challenge: '보기를 고른 뒤 그 마음을 어떻게 다룰지 말로 한다.' },
      wrap: {
        teacher: '"내가 고른 놀이가 안 뽑혔어요. 어떤 마음이 들고, 어떻게 할까요?" 출구 1번을 고른 뒤 결과를 함께 읽는다. "속상해서 안 할래요"를 고른 학생에게 "속상한 마음은 괜찮아요. 다음에 내 생각을 다시 말할 수 있어요"라고 말해 준다. 함께 정한 것은 함께 지키는 것이 6월 10일을 기억하는 방법이라고 정리한다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'branch', situation: '내 놀이가 안 뽑혔어요.', choices: [{ id: 'join', text: '함께 놀아요', result: '다 같이 즐거웠어요.', mood: '편안함' }, { id: 'quit', text: '안 할래요', result: '혼자 심심했어요.', mood: '속상함' }, { id: 'redo', text: '다시 하자 우겨요', result: '친구들이 곤란해요.', mood: '걱정' }] }, prompt: '안 뽑혔을 때 할 일을 골라요.', target: { choice: 'join' }, difficulty: 0.1 },
          CH('반 일은 어떻게 정해요?', ['함께 정해요', '한 사람이 정해요'], 0, '모두의 생각을 듣고 함께 정해요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '함께 정한 것을 함께 지켜요',
        items: [
          { type: 'check', prompt: '함께 정할 때 지킬 일에 ✓ 해요.', options: ['친구 말을 들어요', '한 번만 손들어요', '정한 것을 따라요'] },
          { type: 'draw', prompt: '함께 정한 놀이를 하는 모습을 그려요.' },
        ],
        easy: { note: '"함께"를 떠올려요.', items: [{ type: 'draw', prompt: '친구와 함께 노는 모습을 그려요.' }] },
      },
    }),
    JT({
      id: 'days.e12.june10.wrap.rule2', type: 'wrap', title: '투표 약속 좋아요·안돼요',
      method: '투표 약속 좋아요·안돼요', tool: 'sortboard', minutes: 7,
      levels: { easy: '교사가 카드를 하나씩 읽어 주고 함께 바구니에 넣는다.', base: '카드 4장을 스스로 바구니에 넣는다.', challenge: '카드를 나눈 뒤 "안 돼요" 카드를 바르게 고쳐 말한다.' },
      wrap: {
        teacher: '"오늘 투표에서 지킨 약속을 정리해 볼까요?" 출구 1번 카드를 함께 읽고 바구니에 넣는다. "친구 것 봐요"를 좋아요에 넣은 학생에게 "보이면 마음대로 고르기 어려워요"라고 말한다. 마지막에 "혼자 쓰고, 한 장만!"을 다 같이 말하며 마친다.',
        exitTicket: [
          { type: 'tool', tool: 'sortboard', options: { slots: ['좋아요', '안돼요'], cards: ['혼자 써요', '친구 것 봐요', '한 장만 넣어요', '두 장 넣어요'] }, prompt: '투표 약속 카드를 나누어요.', target: { sort: { 좋아요: ['혼자 써요', '한 장만 넣어요'], 안돼요: ['친구 것 봐요', '두 장 넣어요'] } }, difficulty: 0.1 },
          CH('6월 10일은 무엇을 바란 날?', ['함께 정하는 것', '혼자 정하는 것'], 0, '시민들이 모두가 함께 정하는 민주주의를 바랐어요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '투표 약속',
        items: [
          { type: 'table', prompt: '좋으면 ○, 안 되면 ×를 써요.', columns: ['약속', '○ / ×'], cells: [['혼자 써요', ''], ['친구 것을 봐요', ''], ['결과를 따라요', '']], answer: '○, ×, ○' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '투표는 ___ 써요.', answer: '혼자' },
        ],
        easy: { note: '오늘 투표를 떠올려요.', items: [{ type: 'draw', prompt: '투표함에 종이를 넣는 모습을 그려요.' }] },
      },
    }),
  ];

  // =====================================================================================================
  // 광복절 — 나라를 되찾은 날
  const LB = MOD('days.e12.liberation');
  const T_LIB = [
    LB({
      id: 'days.e12.liberation.intro.joy1', type: 'intro', title: '광복 장면 보고 기쁜 마음 고르기',
      method: '기쁜 얼굴 그림 고르기', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 마음 카드 2장(기쁨·심심함)만 읽어 주고 그날의 마음을 함께 고른다.', base: '시연을 보고 마음 카드 4장 가운데 그날 사람들의 마음 2장을 말한다.', challenge: '마음을 고른 뒤 왜 그런 마음이었을지 까닭을 말한다.' },
      intro: {
        teacher: '"1945년 8월 15일, 사람들은 거리로 나와 태극기를 흔들었어요. 어떤 마음이었을까요?" 광복 장면 사진을 보이며 대답을 듣고(기다릴 반응: "기뻐요", "신나요") 시연 단추로 기쁨·고마움 카드를 바구니에 담는다. 광복은 빼앗긴 나라를 되찾아 다시 빛을 찾았다는 뜻이라고 알린다. "불이 켜진 날이에요?"라는 질문에는 "나라를 되찾은 일을 빛에 빗댄 말이에요"라고 답한다.',
        student: '나라를 되찾은 날 사람들의 얼굴을 따라 지어 보아요.',
        demo: { tool: 'emotion', options: { mode: 'pick', basket: '그날의 마음', cards: ['기쁨', '심심함', '고마움', '졸림'], shuffle: false }, sequence: [{ pick: ['기쁨', '고마움'] }] },
        art: { draw: 'a crowd of paper people in a paper street raising paper Korean flags high into a bright summer sky with paper sun rays', banner: '8월 15일, 나라를 되찾았어요', extra: [{ motif: 'sun', x: 300, y: 96 }] },
      },
      notes: '다른 나라 사람을 미워하는 말이 나오면 "나라를 빼앗은 일이 잘못이에요. 사람을 미워하는 것과는 달라요"라고 바로잡는다.',
    }),
    LB({
      id: 'days.e12.liberation.intro.five2', type: 'intro', title: '다섯 국경일 가운데 광복절 고르기',
      method: '다섯 국경일 그림 고르기', tool: 'wordcards', minutes: 6,
      levels: { easy: '교사가 날짜 카드 2장(8월 15일·3월 1일)만 읽어 주고 광복절을 함께 고른다.', base: '날짜 카드 3장 가운데 광복절을 고른다.', challenge: '날짜 카드 5장(다섯 국경일) 가운데 광복절을 고르고, 남은 날의 이름도 말해 본다.' },
      intro: {
        teacher: '"국경일은 나라의 기쁜 일을 기념하는 날이에요. 다섯 날이 있어요." 달력을 넘기며 3·1절, 제헌절, 광복절, 개천절, 한글날을 짚은 뒤, 시연 단추로 8월 15일 카드를 바구니에 담는다. 3·1절과 광복절을 헷갈리는 학생에게 "3·1절은 만세를 외친 날, 광복절은 나라를 되찾은 날이에요"라고 말한다. 현충일을 국경일로 말하면 "현충일은 기억하는 기념일이에요"라고 짚는다.',
        student: '달력에서 8월 15일을 찾아 손가락으로 짚어 보아요.',
        demo: PICKDEMO('광복절', [{ id: 'aug', text: '8월 15일', motif: 'sun' }, { id: 'mar', text: '3월 1일', motif: 'flower' }, { id: 'oct9', text: '10월 9일', motif: 'leaf' }, { id: 'oct3', text: '10월 3일', motif: 'mountain' }, { id: 'jul', text: '7월 17일', motif: 'cloud' }], ['aug']),
        art: { draw: 'a big paper calendar with five pages pinned open, each marked with a tiny paper Korean flag, the August page glowing brightest', banner: '다섯 국경일', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
      },
    }),
    LB({
      id: 'days.e12.liberation.activity.flagup1', type: 'activity', title: '태극기 다는 동작 따라 하기',
      method: '태극기 다는 동작 따라 하기', tool: 'timer', minutes: 14,
      levels: { easy: '다는 차례 카드 3장을 맞추고, 따라 하기는 1번이 되게 맞춘다.', base: '다는 차례를 맞추고, 따라 하기를 2번 하게 맞추며 안전 점검을 한다.', challenge: '차례·안전 점검에 더해, 친구에게 다는 동작을 보여 준 것까지 표시한다.' },
      activity: {
        title: '국경일 태극기 다는 동작', tool: 'timer',
        teacher: '"광복절 아침, 태극기를 어떻게 달까요?" 교사가 종이 깃대에 태극기를 달아 깃면이 깃봉 바로 아래에 닿게 올리는 시범을 보인다. 학생은 연필을 깃대 삼아 종이 태극기를 끝까지 올리는 동작을 따라 한다. 베란다 난간 밖으로 몸을 내미는 흉내를 내는 학생에게 "태극기 꽂이는 어른과 함께 달아요. 난간에 기대지 않아요"라고 말한다.',
        task: '태극기 다는 차례를 맞추고 동작을 따라 해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          STEPS('태극기 다는 차례를 놓아요.', '국경일 태극기 달기', ['깃대에 달기', '깃봉 아래로', '꽂이에 꽂기'], 0.1),
          { prompt: '따라 하기를 2번 하게 맞춰요.', toolOptions: { title: '다는 동작 연습(우리 반 약속)', labels: ['따라 하기', '쉬기'], plan: { work: 10, rest: 5, rounds: 1 } }, target: { plan: { rounds: 2 } }, difficulty: 0.15,
            hints: ['몇 번 따라 할지 세어 봐요.', '번 칸이 따라 할 횟수예요.', '번 칸을 2에 맞춰요.'],
            levels: { easy: { prompt: '따라 하기를 1번 하게 맞춰요.', toolOptions: { plan: { work: 10, rest: 5, rounds: 3 } }, target: { plan: { rounds: 1 } } } } },
          { prompt: '태극기를 달 때 지킬 것에 표시해요.', toolOptions: { title: '태극기 달기 안전 점검', safety: ['어른과 함께 달아요', '난간에 기대지 않아요'] }, target: { safety: true }, difficulty: 0.15,
            levels: { challenge: { prompt: '친구에게 보여 준 것도 표시해요.', toolOptions: { title: '태극기 달기 점검', safety: undefined }, target: { selfCheck: ['어른과 함께 달아요', '난간에 기대지 않아요', '친구에게 보여 줬어요'] } } },
            conclude: '국경일에는 깃면이 깃봉 바로 아래에 닿게 달아요. 어른과 함께 달아요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '광복절 태극기는 어떻게 달아요?', options: ['깃봉 바로 아래', '깃면만큼 내려서'], answer: '깃봉 바로 아래' }] },
      notes: '타이머 초·횟수는 우리 반 약속이다. 실제 깃대·꽂이는 교실에서 쓰지 않고 연필·종이 태극기로 동작만 해 본다.',
    }),
    LB({
      id: 'days.e12.liberation.activity.mosaic1', type: 'activity', title: '색종이 태극기 모자이크',
      method: '색종이 태극기 모자이크', tool: 'collage', minutes: 13,
      levels: { easy: '작은 조각 4개 이상으로 태극기 모자이크를 꾸민다.', base: '작은 조각 8개 이상(빨강·파랑·검정)으로 꾸민다.', challenge: '조각 8개 이상으로 꾸민 뒤, 모둠 친구와 나눠 붙여 큰 태극기를 만든 것까지 표시한다.' },
      activity: {
        title: '작은 조각 모아 태극기 만들기', tool: 'collage',
        teacher: '"작은 조각을 여러 개 모으면 큰 태극기가 될까요?" 빨강·파랑 조각으로 가운데 태극을, 검정 조각으로 네 괘를 채우게 한다. 조각을 한곳에 아무렇게나 쌓는 학생에게 "태극은 가운데, 괘는 네 귀퉁이예요"라고 칠판의 태극기를 가리킨다. 나라를 되찾으려고 많은 사람이 힘을 모았듯, 작은 조각이 모여 큰 태극기가 된다고 말한다.',
        task: '작은 조각을 모아 태극기를 꾸며요.', levels: { easy: { sizes: ['s'], colors: ['빨강', '파랑', '검정'] }, base: { sizes: ['s'] }, challenge: { sizes: ['s'] } },
        items: [
          { prompt: '빨강·파랑 조각으로 태극을 채워요.', toolOptions: { bg: '하양' }, target: { has: [{ color: '빨강', min: 2 }, { color: '파랑', min: 2 }] }, difficulty: 0.1 },
          { prompt: '검정 조각으로 괘를 채워요.', toolOptions: { bg: '하양' }, target: { has: [{ color: '검정', min: 4 }, { color: '빨강', min: 1 }] }, difficulty: 0.15 },
          { prompt: '조각 8개로 태극기를 완성해요.', toolOptions: { bg: '하양' }, target: { pieces: { min: 8 }, has: [{ color: '빨강', min: 2 }, { color: '파랑', min: 2 }, { color: '검정', min: 4 }] }, difficulty: 0.2,
            levels: { easy: { prompt: '조각 4개로 태극기를 꾸며요.', target: { pieces: { min: 4 }, has: [{ color: '빨강', min: 1 }, { color: '파랑', min: 1 }, { color: '검정', min: 2 }] } },
              challenge: { prompt: '모둠과 나눠 완성해요.', target: { selfCheck: ['조각 8개를 붙였어요', '모둠과 나눠 붙였어요'], minPieces: 8 } } },
            conclude: '작은 조각이 모여 큰 태극기가 되었어요.' },
        ],
      },
      worksheet: { items: [{ type: 'draw', prompt: '작은 네모로 태극기를 그려요.' }] },
      notes: '콜라주 판은 조각의 자리를 판정하지 않는다. 태극·괘의 자리는 교사가 칠판 태극기와 함께 본다. 모둠의 큰 태극기는 각자 꾸민 것을 모아 게시판에 붙여 만든다.',
    }),
    LB({
      id: 'days.e12.liberation.activity.height2', type: 'activity', title: '국경일·현충일 깃발 높이 나누기',
      method: '국경일·현충일 깃발 높이 나누기', tool: 'sortboard', minutes: 14,
      levels: { easy: '카드 2장만 나누고, 틀리면 까닭을 말하고 돌아오며 장 수가 보인다.', base: '카드 4장을 바구니 2개에 나눈다.', challenge: '카드 6장, 까닭 카드(기쁜 날·기억하는 날)까지 알맞은 바구니에 넣는다.' },
      activity: {
        title: '광복절 아침·현충일 아침 태극기', tool: 'sortboard',
        teacher: '"광복절과 현충일에 태극기를 똑같이 달까요?" 대답을 듣고(기다릴 반응: "똑같아요", "현충일은 내려요") 광복절처럼 기쁜 국경일에는 깃봉 바로 아래에 붙여 달고, 슬픔을 함께하는 현충일에는 깃면 너비만큼 내려 단다고 알린다. 카드를 넣을 때마다 그날이 기쁜 날인지 기억하는 날인지 먼저 말하게 한다.',
        task: '카드를 광복절 아침·현충일 아침 바구니에 나누어요.', levels: SBLV,
        items: [
          { prompt: '두 아침의 태극기를 나누어요.', toolOptions: { slots: ['광복절 아침', '현충일 아침'], cards: ['깃봉 바로 아래', '깃면 한 폭 아래', '끝까지 올려요', '조금 내려요'] }, target: { sort: { '광복절 아침': ['깃봉 바로 아래', '끝까지 올려요'], '현충일 아침': ['깃면 한 폭 아래', '조금 내려요'] } }, difficulty: 0.1,
            levels: { easy: { prompt: '두 카드를 나누어요.', toolOptions: { cards: ['깃봉 바로 아래', '깃면 한 폭 아래'] }, target: { sort: { '광복절 아침': ['깃봉 바로 아래'], '현충일 아침': ['깃면 한 폭 아래'] } } },
              challenge: { prompt: '모습과 까닭을 나누어요.', toolOptions: { cards: ['깃봉 바로 아래', '기쁜 날', '깃면 한 폭 아래', '끝까지 올려요', '기억하는 날', '조금 내려요'] }, target: { sort: { '광복절 아침': ['깃봉 바로 아래', '끝까지 올려요', '기쁜 날'], '현충일 아침': ['깃면 한 폭 아래', '조금 내려요', '기억하는 날'] } } } } },
          { prompt: '그날 하는 일을 나누어요.', toolOptions: { slots: ['광복절 아침', '현충일 아침'], cards: ['만세 노래', '묵념하기', '기쁘게 기념', '조용히 기억'] }, target: { sort: { '광복절 아침': ['만세 노래', '기쁘게 기념'], '현충일 아침': ['묵념하기', '조용히 기억'] } }, difficulty: 0.15,
            levels: { easy: { prompt: '두 일을 나누어요.', toolOptions: { cards: ['기쁘게 기념', '묵념하기'] }, target: { sort: { '광복절 아침': ['기쁘게 기념'], '현충일 아침': ['묵념하기'] } } },
              challenge: { prompt: '여섯 일을 나누어요.', toolOptions: { cards: ['만세 노래', '묵념하기', '사이렌에 멈춤', '기쁘게 기념', '조용히 기억', '되찾음 축하'] }, target: { sort: { '광복절 아침': ['만세 노래', '기쁘게 기념', '되찾음 축하'], '현충일 아침': ['묵념하기', '조용히 기억', '사이렌에 멈춤'] } } } } },
          { prompt: '날 이름을 나누어요.', toolOptions: { slots: ['깃봉 바로 아래', '깃면 내려 달기'], cards: ['광복절', '현충일', '개천절', '3·1절'] }, target: { sort: { '깃봉 바로 아래': ['광복절', '개천절', '3·1절'], '깃면 내려 달기': ['현충일'] } }, difficulty: 0.2,
            levels: { easy: { prompt: '두 날을 나누어요.', toolOptions: { cards: ['광복절', '현충일'] }, target: { sort: { '깃봉 바로 아래': ['광복절'], '깃면 내려 달기': ['현충일'] } } },
              challenge: { prompt: '여섯 날을 나누어요.', toolOptions: { cards: ['광복절', '현충일', '개천절', '한글날', '3·1절', '제헌절'] }, target: { sort: { '깃봉 바로 아래': ['광복절', '개천절', '한글날', '3·1절', '제헌절'], '깃면 내려 달기': ['현충일'] } } } },
            conclude: '국경일은 깃봉 바로 아래에, 현충일은 깃면 너비만큼 내려 달아요.' },
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '태극기 다는 법을 써요.', columns: ['날', '다는 법'], cells: [['광복절', ''], ['현충일', '']], answer: '깃봉 바로 아래, 깃면만큼 내려서' }] },
    }),
    LB({
      id: 'days.e12.liberation.activity.cal2', type: 'activity', title: '국경일 수만큼 별 깃발 붙이기',
      method: '달력 판에 국경일 깃발 붙이기', tool: 'collage', minutes: 13,
      levels: { easy: '국경일 2날(3·1절·광복절)만큼 별 깃발을 붙인다.', base: '국경일 3날(3·1절·광복절·개천절)만큼 별 깃발을 붙인다.', challenge: '다섯 국경일만큼 별 깃발 5개와 깃대 5개를 붙인다.' },
      activity: {
        title: '국경일 날 수만큼 별 깃발 붙이기', tool: 'collage',
        teacher: '"국경일은 1년에 몇 날일까요?" 칠판의 큰 종이 달력을 1월부터 넘기며 국경일을 찾을 때마다 판에 별 깃발을 하나씩 붙인다. 같은 날을 종이 달력에도 스티커로 표시한다. 현충일에 별을 붙이려는 학생에게 "현충일은 국경일이 아니라 기억하는 기념일이에요"라고 짚는다. 개천절과 한글날은 둘 다 10월이라 날짜를 견주게 한다.',
        task: '국경일 날 수만큼 별 깃발을 붙여요.', levels: { easy: { shapes: ['star', 'rect'], colors: ['노랑', '갈색'] }, base: { shapes: ['star', 'rect', 'circle'], colors: ['노랑', '갈색', '빨강'] }, challenge: {} },
        items: [
          { prompt: '광복절 큰 별과 깃대를 붙여요.', toolOptions: {}, target: { has: [{ shape: 'star', size: 'l', n: 1 }, { shape: 'rect', min: 1 }] }, difficulty: 0.1 },
          { prompt: '국경일 세 날만큼 별을 붙여요.', toolOptions: {}, target: { has: [{ shape: 'star', n: 3 }, { shape: 'rect', min: 1 }] }, difficulty: 0.15,
            levels: { easy: { prompt: '3월·8월 국경일만큼 별을 붙여요.', target: { has: [{ shape: 'star', n: 2 }, { shape: 'rect', min: 1 }] } } } },
          { prompt: '다섯 국경일만큼 별을 붙여요.', toolOptions: {}, target: { has: [{ shape: 'star', n: 5 }, { shape: 'rect', min: 1 }] }, difficulty: 0.2,
            levels: { easy: { prompt: '별 2개와 깃대 2개를 붙여요.', target: { has: [{ shape: 'star', n: 2 }, { shape: 'rect', n: 2 }] } },
              challenge: { prompt: '별 5개와 깃대 5개를 붙여요.', target: { has: [{ shape: 'star', n: 5 }, { shape: 'rect', n: 5 }] } } },
            conclude: '국경일은 3·1절·제헌절·광복절·개천절·한글날 다섯 날이에요.' },
        ],
      },
      worksheet: { items: [{ type: 'check', prompt: '국경일에 ✓ 해요.', options: ['광복절', '현충일', '한글날'] }] },
      notes: '콜라주 판은 달력 칸을 그리지 못해 날 수만큼 별 깃발을 붙이는 것으로 대신하고, 날짜 칸 찾기는 칠판 종이 달력에 스티커로 한다. 활동지 정답: 광복절·한글날.',
    }),
    LB({
      id: 'days.e12.liberation.wrap.say1', type: 'wrap', title: '고마운 마음 말 고르기',
      method: '고마운 마음 그림 고르기', tool: 'wordcards', minutes: 7,
      levels: { easy: '교사가 말 카드를 읽어 주고 고마운 말 하나를 함께 고른 뒤, 나머지 하나는 따라 고른다.', base: '말 카드 4장 가운데 고마운 말 2장을 스스로 고른다.', challenge: '고마운 말을 고른 뒤 내 말로 바꿔 짝에게 말한다.' },
      wrap: {
        teacher: '"나라를 되찾으려 애쓴 분들께 무슨 말을 하고 싶나요?" 출구 1번 카드를 함께 읽고 고른다. "시시해요"를 고른 학생에게 "그분들 덕분에 우리가 우리말로 공부하고 있어요. 다시 생각해 볼까요?"라고 말한다. 광복절은 기쁨과 함께 애쓴 분들께 고마운 마음을 갖는 날이라고 정리한다.',
        exitTicket: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'pick', basket: '고마운 말', cards: ['고맙습니다', '시시해요', '기억할게요', '몰라요'] }, prompt: '고마운 말 카드를 골라요.', target: { pick: ['고맙습니다', '기억할게요'] }, difficulty: 0.1 },
          CH('광복절은 어떤 날이에요?', ['나라를 되찾은 날', '만세를 외친 날', '한글을 만든 날'], 0, '광복절은 1945년 8월 15일 나라를 되찾은 날이에요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '광복절, 고마운 마음',
        items: [
          { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '광복절은 ___월 15일이에요.', answer: '8' },
          { type: 'short', prompt: '애쓴 분들께 고마운 말을 써요.' },
        ],
        easy: { note: '"고맙습니다"로 시작해요.', items: [{ type: 'draw', prompt: '태극기를 흔드는 모습을 그려요.' }] },
      },
    }),
    LB({
      id: 'days.e12.liberation.wrap.hangflag2', type: 'wrap', title: '집에서 태극기 달기 약속',
      method: '집에서 태극기 달기 약속', tool: 'timer', minutes: 7,
      levels: { easy: '교사와 함께 차례 카드를 읽고 놓은 뒤, 첫 할 일 하나만 짝에게 말한다.', base: '차례 카드 3장을 놓고 할 일 두 가지를 짝에게 차례로 말한다.', challenge: '차례 카드를 놓고 할 일 세 가지를 모두 짝에게 차례로 말한다.' },
      wrap: {
        teacher: '"광복절 아침, 우리 집에서는 무엇부터 할까요?" 출구 1번 카드를 놓은 뒤 짝에게 차례로 말하게 한다. 태극기가 없는 집도 있으니 "종이 태극기를 창문에 붙여도 돼요"라고 말해 준다. 태극기를 다는지 집마다 묻거나 확인하지 않는다. 출구 2번에서 "깃면만큼 내려요"를 고른 학생에게 광복절은 기쁜 날이라는 점을 다시 말한다.',
        exitTicket: [
          CHANT('광복절 아침 할 일', ['태극기 꺼내기', '깃봉 아래 달기', '가족과 기념'], '할 일을 차례대로 놓아요.'),
          CH('광복절 태극기는 어떻게?', ['깃봉 바로 아래', '깃면만큼 내려요'], 0, '광복절 같은 국경일은 깃봉 바로 아래에 달아요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '광복절 아침 약속',
        items: [
          { type: 'check', prompt: '광복절 아침에 할 일에 ✓ 해요.', options: ['태극기 달기', '고마운 분 떠올리기', '가족과 이야기하기'] },
          { type: 'draw', prompt: '태극기가 걸린 우리 집 창문을 그려요.' },
        ],
        easy: { note: '태극기를 떠올려요.', items: [{ type: 'draw', prompt: '창문에 붙인 태극기를 그려요.' }] },
      },
      notes: '집에 태극기가 있는지, 실제로 달았는지 묻거나 점검하지 않는다.',
    }),
  ];

  // =====================================================================================================
  // 개천절 — 첫 나라 고조선
  const FD = MOD('days.e12.foundation');
  const T_FOUND = [
    FD({
      id: 'days.e12.foundation.intro.sky1', type: 'intro', title: '하늘 그림 보고 이야기 상상하기',
      method: '하늘 그림 보고 이야기 상상하기', tool: 'wordcards', minutes: 6,
      levels: { easy: '교사가 카드 2장(곰·로봇)만 읽어 주고 이야기에 나오는 것을 함께 고른다.', base: '시연을 보고 카드 5장 가운데 이야기에 나오는 것 3장을 말한다.', challenge: '카드 4장을 고른 뒤 무슨 이야기일지 한 문장으로 상상해 말한다.' },
      intro: {
        teacher: '"아주아주 옛날, 우리나라의 첫 나라는 어떻게 생겼을까요?" 대답을 듣고 10월 3일 개천절은 단군이 우리나라 첫 나라 고조선을 세운 것을 기념하는 날이라고 알린다. 시연 단추로 하늘·곰·호랑이 카드를 바구니에 담고 "오늘 들을 이야기에 나와요"라고 말한다. "하늘이 열린 날씨 이야기예요?"라는 질문에는 "\'하늘이 열렸다\'는 나라가 처음 열렸다는 뜻이에요"라고 답한다.',
        student: '하늘·곰·호랑이가 나오는 이야기를 상상해 짝에게 한마디 해 보아요.',
        demo: PICKDEMO('이야기에 나와요', [{ id: 'sky', text: '하늘', motif: 'cloud' }, { id: 'bear', text: '곰', motif: 'tree' }, { id: 'robot', text: '로봇', motif: 'star' }, { id: 'tiger', text: '호랑이', motif: 'mountain' }, { id: 'car', text: '자동차', motif: 'house' }], ['sky', 'bear', 'tiger']),
        art: { draw: 'a paper sky opening with soft clouds above paper mountains, a paper bear and a paper tiger peeking out of a cave, an old paper village below', banner: '10월 3일, 개천절', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
      },
    }),
    FD({
      id: 'days.e12.foundation.intro.who2', type: 'intro', title: '이야기 인물 그림 고르기',
      method: '이야기 인물 그림 고르기', tool: 'wordcards', minutes: 6,
      levels: { easy: '교사가 인물 카드 2장(단군·토끼)만 읽어 주고 이야기 인물을 함께 고른다.', base: '시연을 보고 카드 6장 가운데 이야기 인물 3명을 말한다.', challenge: '이야기 인물 4명(환웅·곰·호랑이·단군)을 모두 골라 말한다.' },
      intro: {
        teacher: '"단군 이야기에는 누가 나올까요?" 1학년 때 들은 이야기를 떠올리게 하고 대답을 듣는다(기다릴 반응: "곰이요", "호랑이요"). 시연 단추로 이야기 인물 카드를 바구니에 담는다. 토끼를 고르는 학생에게 "토끼는 다른 옛이야기에 나와요"라고 말한다. 단군 이야기는 『삼국유사』 같은 옛 책에 실려 오래 전해 오는 나라 세운 이야기라고 알린다.',
        student: '단군 이야기에 나오는 인물 한 명을 골라 이름을 말해 보아요.',
        demo: PICKDEMO('이야기 인물', [{ id: 'hw', text: '환웅', motif: 'cloud' }, { id: 'rabbit', text: '토끼', motif: 'flower' }, { id: 'bear', text: '곰', motif: 'tree' }, { id: 'turtle', text: '거북', motif: 'leaf' }, { id: 'tiger', text: '호랑이', motif: 'mountain' }, { id: 'dg', text: '단군', motif: 'sun' }], ['hw', 'bear', 'dg']),
        art: { draw: 'paper puppets of a heavenly prince, a bear, a tiger and a young king standing on a small paper stage with paper mountains behind', banner: '단군 이야기의 인물', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
      },
    }),
    FD({
      id: 'days.e12.foundation.activity.story1', type: 'activity', title: '단군 이야기 세 장면 놓기',
      method: '단군 이야기 세 장면 놓기', tool: 'story', minutes: 14,
      levels: { easy: '첫 장면이 놓여 있어 남은 두 장만 놓고, 놓으면 바로 맞는지 알려 준다.', base: '장면 세 장을 차례대로 놓는다.', challenge: '"호랑이가 사람 돼요"처럼 이야기와 다른 장면 한 장이 섞여 있어 빼고 놓는다.' },
      activity: {
        title: '단군 이야기 차례 놓기', tool: 'story',
        teacher: '"곰은 언제 사람이 되었나요?" 교사가 이야기를 들려준 뒤 장면을 놓을 때마다 소리 내어 읽게 한다. 단군이 나라를 세운 장면을 맨 앞에 놓는 학생에게 "단군은 누구의 아들이었나요? 그분은 어디에서 왔나요?"라고 묻는다. 이야기를 거짓말이라고 말하는 학생에게 "옛사람들이 우리나라가 시작된 일을 이야기로 전해 온 거예요"라고 답한다.',
        task: '이야기 장면 카드를 차례대로 놓아요.', levels: LV,
        items: [
          ORDER3('나라를 세운 이야기예요. 놓아요.', [{ id: 'down', text: '환웅이 내려와요', motif: 'cloud' }, { id: 'bear', text: '곰이 사람 돼요', motif: 'tree' }, { id: 'nation', text: '고조선 세워요', motif: 'house' }], { id: 'tiger', text: '호랑이가 사람 돼요', motif: 'mountain' }, 0.1),
          ORDER3('동굴 이야기예요. 차례로 놓아요.', [{ id: 'gift', text: '쑥과 마늘 받기', motif: 'leaf' }, { id: 'wait', text: '동굴에서 참기', motif: 'mountain' }, { id: 'human', text: '곰이 사람 돼요', motif: 'tree' }], { id: 'out', text: '곰이 뛰쳐나가요', motif: 'cloud' }, 0.15),
          ORDER3('단군 이야기예요. 차례로 놓아요.', [{ id: 'wed', text: '웅녀와 혼인해요', motif: 'heart' }, { id: 'born', text: '단군이 태어나요', motif: 'sun' }, { id: 'nation', text: '고조선 세워요', motif: 'house' }], { id: 'first', text: '먼저 나라 세워요', motif: 'star' }, 0.2,
            { conclude: '환웅이 내려오고, 곰이 사람이 되고, 단군이 고조선을 세웠어요.' }),
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '단군이 세운 첫 나라는 ___이에요.', answer: '고조선' }] },
      notes: '단군 이야기는 『삼국유사』 등에 실려 전해 오는 건국 이야기다. 실제로 있었던 일인지 따지게 하지 않고, 옛사람들이 전해 온 이야기로 다룬다.',
    }),
    FD({
      id: 'days.e12.foundation.activity.play1', type: 'activity', title: '곰과 호랑이 몸짓 놀이',
      method: '곰과 호랑이 몸짓 놀이', tool: 'timer', minutes: 13,
      levels: { easy: '몸짓 장면 카드 2장(동굴에 들어가기·곰이 참기)만 놓고, 몸짓 놀이는 1번 하게 맞춘다.', base: '몸짓 장면 카드 3장을 놓고, 몸짓 놀이를 2번 하게 맞춘다.', challenge: '장면 3장을 놓고 몸짓 놀이 2번에 더해, 셋째 문항에서 장면 4장(사람 된 뒤 인사)까지 놓는다.' },
      activity: {
        title: '이야기를 듣고 몸짓하기', tool: 'timer',
        teacher: '"곰은 동굴에서 어떻게 참았을까요? 몸으로 해 볼까요?" 교사가 이야기를 들려주면 학생은 자리에서 곰처럼 웅크리고, 호랑이처럼 기지개를 켜는 몸짓을 한다. 친구를 할퀴는 흉내를 내는 학생에게 "호랑이 몸짓은 혼자 제자리에서 해요"라고 말한다. 곰이 끝까지 참은 마음을 떠올리며 "참는 것도 힘이에요"라고 짚는다.',
        task: '이야기 장면을 차례로 놓고 몸짓을 따라 해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          STEPS('몸짓 장면을 차례로 놓아요.', '동굴 이야기 몸짓', ['동굴에 들어가기', '곰이 참기', '사람이 되기'], 0.1,
            { levels: { easy: { prompt: '첫 두 몸짓을 놓아요.', toolOptions: { cards: ['곰이 참기', '동굴에 들어가기'] }, target: { order: ['동굴에 들어가기', '곰이 참기'] } } } }),
          { prompt: '몸짓 놀이를 2번 하게 맞춰요.', toolOptions: { title: '몸짓 놀이(우리 반 약속)', labels: ['몸짓', '쉬기'], plan: { work: 20, rest: 10, rounds: 1 } }, target: { plan: { rounds: 2 } }, difficulty: 0.15,
            hints: ['몸짓 놀이를 몇 번 할지 세어 봐요.', '번 칸이 놀이 횟수예요.', '번 칸을 2에 맞춰요.'],
            levels: { easy: { prompt: '몸짓 놀이를 1번 하게 맞춰요.', toolOptions: { plan: { work: 20, rest: 10, rounds: 3 } }, target: { plan: { rounds: 1 } } } } },
          { prompt: '몸짓 놀이 때 지킨 것에 표시해요.', toolOptions: { title: '몸짓 놀이 안전 점검', safety: ['제자리에서 해요', '친구를 건드리지 않아요'] }, target: { safety: true }, difficulty: 0.15,
            levels: { challenge: { prompt: '장면 4장을 차례로 놓아요.', toolOptions: { title: '동굴 이야기 끝까지', cards: ['사람이 되기', '인사하기', '동굴에 들어가기', '곰이 참기'] }, target: { order: ['동굴에 들어가기', '곰이 참기', '사람이 되기', '인사하기'] } } },
            conclude: '곰은 동굴에서 끝까지 참아 사람이 되었어요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '동굴에서 끝까지 참은 것은?', options: ['곰', '호랑이'], answer: '곰' }] },
      notes: '몸짓은 자리 둘레에서 한다. 타이머 초·횟수는 우리 반 약속이다.',
    }),
    FD({
      id: 'days.e12.foundation.activity.match2', type: 'activity', title: '인물과 한 일 짝 짓기',
      method: '인물과 한 일 짝 짓기', tool: 'emotion', minutes: 14,
      levels: { easy: '인물 2명(곰·단군)과 한 일을 짝 짓고, 카드 아래 풀이가 처음부터 보인다.', base: '인물 3명(환웅·곰·단군)과 한 일을 짝 짓는다.', challenge: '인물 4명(호랑이까지)과 한 일을 짝 짓고, 헷갈리는 카드 한 장을 남긴다.' },
      activity: {
        title: '단군 이야기 인물과 한 일', tool: 'emotion',
        teacher: '"이 일을 한 인물은 누구일까요?" 카드를 하나씩 읽고 인물과 잇는다. 곰과 호랑이를 바꿔 잇는 학생에게 "끝까지 참은 것은 누구였나요?"라고 묻는다. 셋째 문항에서는 고조선을 세운 단군의 뜻을 \'널리 사람을 이롭게\'라고 짧게 알려 주고 "모두에게 좋은 일"이라는 뜻이라고 풀어 준다.',
        task: '인물과 그 인물이 한 일을 짝 지어요.', levels: { easy: { showBack: true }, base: {}, challenge: { shuffle: true } },
        items: [
          { prompt: '인물과 한 일을 이어요.', toolOptions: { mode: 'match', slots: [{ id: 'hw', label: '환웅' }, { id: 'bear', label: '곰' }, { id: 'dg', label: '단군' }], cards: [{ id: 'down', text: '하늘에서 와요', back: '처음' }, { id: 'wait', text: '끝까지 참아요', back: '동굴' }, { id: 'nation', text: '고조선 세워요', back: '나라' }], weather: false }, target: { match: { hw: 'down', bear: 'wait', dg: 'nation' } }, difficulty: 0.1,
            levels: { easy: { prompt: '두 인물과 한 일을 이어요.', toolOptions: { slots: [{ id: 'bear', label: '곰' }, { id: 'dg', label: '단군' }], cards: [{ id: 'wait', text: '끝까지 참아요', back: '동굴' }, { id: 'nation', text: '고조선 세워요', back: '나라' }] }, target: { match: { bear: 'wait', dg: 'nation' } } },
              challenge: { prompt: '네 인물과 한 일을 이어요.', toolOptions: { slots: [{ id: 'hw', label: '환웅' }, { id: 'bear', label: '곰' }, { id: 'tiger', label: '호랑이' }, { id: 'dg', label: '단군' }], cards: [{ id: 'down', text: '하늘에서 와요' }, { id: 'wait', text: '끝까지 참아요' }, { id: 'out', text: '동굴을 나가요' }, { id: 'nation', text: '고조선 세워요' }, { id: 'ship', text: '배를 타요', why: '단군 이야기에 배는 나오지 않아요.' }] }, target: { match: { hw: 'down', bear: 'wait', tiger: 'out', dg: 'nation' } } } } },
          { prompt: '인물이 받은 것을 이어요.', toolOptions: { mode: 'match', slots: [{ id: 'bear', label: '곰과 호랑이' }, { id: 'hw', label: '환웅' }], cards: [{ id: 'food', text: '쑥과 마늘', back: '동굴에서' }, { id: 'sky', text: '하늘의 허락', back: '아버지께' }, { id: 'cake', text: '떡과 과자' }], weather: false }, target: { match: { bear: 'food', hw: 'sky' } }, difficulty: 0.15 },
          { prompt: '단군의 뜻을 이어요.', toolOptions: { mode: 'match', slots: [{ id: 'dg', label: '단군의 뜻' }], cards: [{ id: 'good', text: '모두에게 좋게', back: '널리 이롭게' }, { id: 'me', text: '나만 좋게' }, { id: 'strong', text: '힘센 사람만' }], weather: false }, target: { match: { dg: 'good' } }, difficulty: 0.2,
            conclude: '단군은 모두에게 좋은 나라를 바라며 고조선을 세웠어요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '고조선을 세운 인물은?', options: ['단군', '호랑이'], answer: '단군' }] },
    }),
    FD({
      id: 'days.e12.foundation.activity.line2', type: 'activity', title: '옛날에서 오늘까지 놓기',
      method: '옛날에서 오늘까지 두 장면 놓기', tool: 'timeline', minutes: 13,
      levels: { easy: '카드 2장(고조선·오늘)을 옛날 → 오늘날로 놓고, 놓으면 바로 맞는지 알려 준다.', base: '카드 3장을 옛날 → 오늘날로 놓는다.', challenge: '카드 4장을 놓고, 놓은 뒤 왜 그 차례인지 짝에게 설명한다.' },
      activity: {
        title: '옛날 → 오늘날 시간 띠', tool: 'timeline',
        teacher: '"고조선과 오늘의 우리나라 가운데 무엇이 더 옛날일까요?" 시간 띠의 왼쪽이 옛날, 오른쪽이 오늘날이라고 먼저 알려 준다. 고조선을 오른쪽에 놓는 학생에게 "고조선은 우리나라의 첫 나라예요. 처음은 어느 쪽일까요?"라고 묻는다. 오래전부터 이어져 온 나라에서 우리가 살고 있다는 점을 짚는다.',
        task: '카드를 옛날에서 오늘날 차례로 시간 띠에 놓아요.', levels: LV,
        items: [
          { prompt: '나라를 옛날부터 놓아요.', toolOptions: { axis: ['옛날', '오늘날'], cards: ['조선', '오늘의 우리나라', '고조선'] }, target: { order: ['고조선', '조선', '오늘의 우리나라'] }, difficulty: 0.1,
            levels: { easy: { prompt: '두 나라를 옛날부터 놓아요.', toolOptions: { cards: ['오늘의 우리나라', '고조선'] }, target: { order: ['고조선', '오늘의 우리나라'] } },
              challenge: { prompt: '네 나라를 옛날부터 놓아요.', toolOptions: { cards: ['조선', '오늘의 우리나라', '고려', '고조선'] }, target: { order: ['고조선', '고려', '조선', '오늘의 우리나라'] } } } },
          { prompt: '집 모습을 옛날부터 놓아요.', toolOptions: { axis: ['옛날', '오늘날'], cards: ['아파트', '움집', '초가집'] }, target: { order: ['움집', '초가집', '아파트'] }, difficulty: 0.15,
            levels: { easy: { prompt: '두 집을 옛날부터 놓아요.', toolOptions: { cards: ['아파트', '움집'] }, target: { order: ['움집', '아파트'] } },
              challenge: { prompt: '네 집을 옛날부터 놓아요.', toolOptions: { cards: ['아파트', '움집', '양옥집', '초가집'] }, target: { order: ['움집', '초가집', '양옥집', '아파트'] } } } },
          { prompt: '글쓰기 도구를 옛날부터 놓아요.', toolOptions: { axis: ['옛날', '오늘날'], cards: ['컴퓨터', '붓', '연필'] }, target: { order: ['붓', '연필', '컴퓨터'] }, difficulty: 0.2,
            levels: { easy: { prompt: '두 도구를 옛날부터 놓아요.', toolOptions: { cards: ['컴퓨터', '붓'] }, target: { order: ['붓', '컴퓨터'] } },
              challenge: { prompt: '네 도구를 옛날부터 놓아요.', toolOptions: { cards: ['컴퓨터', '붓', '태블릿', '연필'] }, target: { order: ['붓', '연필', '컴퓨터', '태블릿'] } } },
            conclude: '고조선부터 오늘까지 우리나라는 오래 이어져 왔어요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '더 옛날 나라에 ○ 해요.', options: ['고조선', '오늘의 우리나라'], answer: '고조선' }] },
      notes: '집·글쓰기 도구 차례는 "대체로 먼저 쓰인 것"을 견주는 연습이다(연도를 가르치지 않는다). 연필·컴퓨터·태블릿을 지금 함께 쓴다는 의견이 나오면 인정하고 "처음 생긴 차례"로 정리한다.',
    }),
    FD({
      id: 'days.e12.foundation.wrap.crown1', type: 'wrap', title: '첫 나라 왕관 꾸미기',
      method: '첫 나라 왕관 꾸미기', tool: 'collage', minutes: 7,
      levels: { easy: '세모·동그라미 조각 2개를 붙여 왕관을 꾸민다.', base: '조각 4개 이상을 붙여 왕관을 꾸민다.', challenge: '왕관을 꾸민 뒤 내가 세울 나라 이름을 지어 짝에게 말한다.' },
      wrap: {
        teacher: '"우리나라 첫 나라 고조선을 떠올리며 왕관을 꾸며 볼까요?" 세모·동그라미 조각으로 꾸미게 한다. 출구 2번에서 한글날을 고른 학생에게 "한글날은 10월 9일, 개천절은 10월 3일이에요. 둘 다 10월이라 헷갈리지요"라고 짚는다. 왕은 혼자 좋은 사람이 아니라 모두에게 좋은 나라를 만들어야 한다는 단군의 뜻을 한 번 더 말한다.',
        exitTicket: [
          PASTE(['triangle', 'circle', 'star', 'diamond'], ['노랑', '빨강', '파랑', '초록'], ['왕관을 꾸몄어요', '고조선을 말했어요'], '첫 나라 왕관을 꾸며요.', 2),
          CH('10월 3일은 무슨 날이에요?', ['개천절', '한글날', '광복절'], 0, '10월 3일은 고조선을 세운 것을 기념하는 개천절이에요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '개천절, 첫 나라 고조선',
        items: [
          { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '개천절은 10월 ___일이에요.', answer: '3' },
          { type: 'draw', prompt: '꾸민 왕관을 그려요.' },
        ],
        easy: { note: '세모와 동그라미를 떠올려요.', items: [{ type: 'draw', prompt: '왕관을 그려요.' }] },
      },
    }),
    FD({
      id: 'days.e12.foundation.wrap.tell2', type: 'wrap', title: '짝에게 이야기 들려주기',
      method: '짝에게 이야기 들려주기', tool: 'timer', minutes: 7,
      levels: { easy: '장면 카드를 차례로 놓은 뒤 첫 장면 하나만 짝에게 말한다.', base: '장면 세 장을 차례로 놓고 세 장면 모두 짝에게 들려준다.', challenge: '장면을 놓고 내 말로 바꿔 이야기를 들려준다.' },
      wrap: {
        teacher: '"단군 이야기를 짝에게 들려줄 수 있나요?" 출구 1번 카드를 놓은 뒤 카드를 보며 짝에게 이야기한다. 차례를 바꿔 말하는 학생에게 "먼저 누가 하늘에서 내려왔나요?"라고 묻는다. 집에 가서 가족에게도 들려주자고 말하며 마친다.',
        exitTicket: [
          CHANT('단군 이야기 차례', ['환웅이 내려와요', '곰이 사람 돼요', '단군이 나라 세워요'], '이야기 장면을 차례대로 놓아요.'),
          CH('곰이 사람이 된 까닭은?', ['끝까지 참아서', '먼저 나가서'], 0, '곰은 동굴에서 끝까지 참아 사람이 되었어요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '단군 이야기 들려주기',
        items: [
          { type: 'draw', prompt: '가장 좋아하는 장면을 그려요.' },
          { type: 'short', prompt: '그 장면을 한 줄로 써요.' },
        ],
        easy: { note: '곰과 동굴을 떠올려요.', items: [{ type: 'draw', prompt: '동굴 속 곰을 그려요.' }] },
      },
    }),
  ];

  // =====================================================================================================
  // 한글날 — 한글 글자 만들기
  const HG = MOD('days.e12.hangul');
  const T_HANGUL = [
    HG({
      id: 'days.e12.hangul.intro.king1', type: 'intro', title: '한글을 만든 분 고르기',
      method: '세종대왕 그림 고르기', tool: 'wordcards', minutes: 6,
      levels: { easy: '교사가 카드 2장(세종대왕·단군)만 읽어 주고 한글을 만든 분을 함께 고른다.', base: '시연을 보고 카드 3장 가운데 한글을 만든 분을 말한다.', challenge: '카드 4장 가운데 고르고, 왜 한글을 만들었을지 한 문장으로 말한다.' },
      intro: {
        teacher: '"우리가 날마다 쓰는 글자 이름은 무엇일까요?" 대답을 듣고(기다릴 반응: "한글요") 한글은 세종대왕이 백성들이 쉽게 글을 읽고 쓰도록 만든 글자이고, 10월 9일 한글날에 그 뜻을 기념한다고 알린다. 시연 단추로 세종대왕 카드를 바구니에 담는다. "한글은 처음부터 있었어요"라는 말이 나오면 "옛날에는 어려운 한자만 써서 글을 모르는 사람이 많았어요"라고 답한다.',
        student: '내가 좋아하는 한글 글자 하나를 손가락으로 허공에 써 보아요.',
        demo: PICKDEMO('한글을 만든 분', [{ id: 'sj', text: '세종대왕', motif: 'sun' }, { id: 'dg', text: '단군', motif: 'mountain' }, { id: 'hw', text: '환웅', motif: 'cloud' }, { id: 'kid', text: '우리 반 친구', motif: 'heart' }], ['sj']),
        art: { draw: 'a kind paper king at a low paper desk writing simple Korean letters on a paper scroll, paper villagers reading happily around him', banner: '10월 9일, 한글날', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
      },
    }),
    HG({
      id: 'days.e12.hangul.intro.vowel2', type: 'intro', title: '하늘·땅·사람 그림 고르기',
      method: '하늘·땅·사람 그림 고르기', tool: 'wordcards', minutes: 6,
      levels: { easy: '교사가 ㅣ와 사람 그림 1짝만 함께 짝 짓는다.', base: '시연을 보고 ·와 ㅡ가 무엇을 닮았는지 2짝을 말한다.', challenge: '·, ㅡ, ㅣ 세 짝을 모두 말하고 몸으로 따라 한다.' },
      intro: {
        teacher: '"ㅏ는 어떤 모양들이 모여 생겼을까요?" 대답을 듣고(기다릴 반응: "막대랑 점이요") 세종대왕이 모음을 만들 때 둥근 하늘(·), 평평한 땅(ㅡ), 서 있는 사람(ㅣ)을 본떴다고 알린다. 시연 단추로 모양과 그림 카드가 짝 지어지는 모습을 보여 준다. ㅣ와 ㅡ를 바꾸는 학생에게 "누워 있는 것과 서 있는 것을 몸으로 견주어 볼까요?"라고 묻는다.',
        student: '일어서서 ㅣ 모양을 몸으로 만들어 보아요.',
        demo: { tool: 'wordcards', options: { mode: 'match', slots: ['·', 'ㅡ', 'ㅣ'], cards: ['둥근 하늘', '평평한 땅', '서 있는 사람'], shuffle: false }, sequence: [{ match: { '·': '둥근 하늘', 'ㅡ': '평평한 땅', 'ㅣ': '서 있는 사람' } }] },
        art: { draw: 'a round paper sun dot, a flat paper ground line and a standing paper person, each next to a big cut-paper Korean vowel stroke', banner: '하늘·땅·사람', extra: [{ motif: 'sun', x: 300, y: 96 }] },
      },
    }),
    HG({
      id: 'days.e12.hangul.activity.make1', type: 'activity', title: '자음·모음 조각으로 글자 만들기',
      method: '자음·모음 조각으로 글자 만들기', tool: 'hangul', minutes: 14,
      levels: { easy: '모음을 들면 놓을 자리 테두리가 깜박이고, 틀린 자리는 잠깐 막힌다(자리는 학생이 고른다).', base: '모음 자리(오른쪽·아래)를 스스로 골라 글자를 만든다.', challenge: '받침 자리가 있는 틀에서 받침 있는 글자(각·난·돌)를 만든다.' },
      activity: {
        title: '조각으로 글자 만들기', tool: 'hangul',
        teacher: '"ㄱ과 ㅏ를 모으면 무슨 글자가 될까요?" 조각을 놓은 뒤 소리 내어 읽게 한다. ㅗ를 자음 오른쪽에 놓으려는 학생에게 "ㅗ는 옆으로 누운 모음이라 자음 아래에 와요"라고 말한다. 세종대왕이 자음과 모음을 모아 쓰게 만들어 적은 글자로 많은 말을 쓸 수 있다고 짚는다.',
        task: '자음과 모음 조각을 모아 글자를 만들어요.', levels: { easy: { slotGuide: true, slotHints: true }, base: {}, challenge: {} },
        items: [
          { prompt: '"가"를 만들어요.', toolOptions: { consonants: ['ㄱ', 'ㄴ', 'ㄷ'], vowels: ['ㅏ', 'ㅗ'] }, target: { syllable: '가' }, difficulty: 0.1,
            levels: { challenge: { prompt: '"각"을 만들어요.', toolOptions: { batchim: ['ㄱ', 'ㄴ', 'ㄹ'] }, target: { syllable: '각' } } } },
          { prompt: '"나"를 만들어요.', toolOptions: { consonants: ['ㄱ', 'ㄴ', 'ㄷ'], vowels: ['ㅏ', 'ㅜ'] }, target: { syllable: '나' }, difficulty: 0.15,
            levels: { challenge: { prompt: '"난"을 만들어요.', toolOptions: { batchim: ['ㄱ', 'ㄴ', 'ㄹ'] }, target: { syllable: '난' } } } },
          { prompt: '"도"를 만들어요.', toolOptions: { consonants: ['ㄱ', 'ㄴ', 'ㄷ'], vowels: ['ㅏ', 'ㅗ'] }, target: { syllable: '도' }, difficulty: 0.2,
            levels: { challenge: { prompt: '"돌"을 만들어요.', toolOptions: { batchim: ['ㄱ', 'ㄴ', 'ㄹ'] }, target: { syllable: '돌' } } },
            conclude: '자음과 모음을 모으면 글자가 돼요. ㅏ는 오른쪽, ㅗ는 아래에 와요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 글자를 써요.', text: 'ㄱ + ㅏ = ___', answer: '가' }] },
      notes: '계획의 쉬움 "모음 자리 자동"은 판단을 없애므로 쓰지 않고, 자리 테두리 안내(slotGuide)로 바꿨다.',
    }),
    HG({
      id: 'days.e12.hangul.activity.name1', type: 'activity', title: '이름 한 글자 만들기',
      method: '내 이름 한 글자 만들기', tool: 'hangul', minutes: 13,
      levels: { easy: '받침 없는 이름 글자(서·하·다)를 만들고, 모음 자리 테두리가 깜박인다.', base: '받침 있는 이름 글자(민·준·솔)를 만든다.', challenge: '앞 글자가 놓인 두 글자 이름(민서·하준·다솔)의 둘째 글자를 만든다.' },
      activity: {
        title: '친구 이름 글자 만들기', tool: 'hangul',
        teacher: '"이름도 한글로 써요. 이 친구 이름의 글자를 만들어 볼까요?" 화면 이름은 지어낸 이름이라고 알린다. 만든 뒤 활동지에는 내 이름 첫 글자를 자음·모음으로 나누어 써 보게 한다. 받침을 오른쪽에 놓는 학생에게 "받침은 언제나 글자 맨 아래에 와요"라고 말한다.',
        task: '이름 글자를 자음·모음·받침 조각으로 만들어요.', levels: { easy: { slotGuide: true }, base: {}, challenge: {} },
        items: [
          { prompt: '"민" 글자를 만들어요.', toolOptions: { consonants: ['ㅁ', 'ㅅ', 'ㄴ'], vowels: ['ㅣ', 'ㅓ'], batchim: ['ㄴ', 'ㄹ'] }, target: { syllable: '민' }, difficulty: 0.1,
            levels: { easy: { prompt: '"서" 글자를 만들어요.', target: { syllable: '서' } }, challenge: { prompt: '"민서"의 "서"를 만들어요.', toolOptions: { wordSoFar: '민' }, target: { syllable: '서' } } } },
          { prompt: '"준" 글자를 만들어요.', toolOptions: { consonants: ['ㅈ', 'ㅎ', 'ㄴ'], vowels: ['ㅜ', 'ㅏ'], batchim: ['ㄴ', 'ㄹ'] }, target: { syllable: '준' }, difficulty: 0.15,
            levels: { easy: { prompt: '"하" 글자를 만들어요.', target: { syllable: '하' } }, challenge: { prompt: '"하준"의 "준"을 만들어요.', toolOptions: { wordSoFar: '하' }, target: { syllable: '준' } } } },
          { prompt: '"솔" 글자를 만들어요.', toolOptions: { consonants: ['ㅅ', 'ㄷ', 'ㄹ'], vowels: ['ㅗ', 'ㅏ'], batchim: ['ㄹ', 'ㄴ'] }, target: { syllable: '솔' }, difficulty: 0.2,
            levels: { easy: { prompt: '"다" 글자를 만들어요.', target: { syllable: '다' } }, challenge: { prompt: '"다솔"의 "솔"을 만들어요.', toolOptions: { wordSoFar: '다' }, target: { syllable: '솔' } } },
            conclude: '이름도 자음·모음·받침을 모아 써요. 받침은 맨 아래에 와요.' },
        ],
      },
      worksheet: { items: [{ type: 'draw', prompt: '내 이름 첫 글자를 크게 써요.' }] },
      notes: '화면 이름(민서·하준·다솔)은 지어낸 이름이다. 학생 이름은 화면에 넣지 않고 활동지에만 쓴다.',
    }),
    HG({
      id: 'days.e12.hangul.activity.shape2', type: 'activity', title: '모음 기본 글자와 그림 짝 짓기',
      method: '모음 기본 글자와 그림 짝 짓기', tool: 'emotion', minutes: 14,
      levels: { easy: '기본 글자 2개(ㅡ·ㅣ)와 그림을 짝 짓고, 풀이가 처음부터 보인다.', base: '기본 글자 3개(·, ㅡ, ㅣ)와 그림을 짝 짓고, ㅏ·ㅗ가 무엇으로 만들어졌는지 고른다.', challenge: '헷갈리는 카드가 섞이고, 셋째 문항에서 ㅗ 대신 ㅜ가 무엇으로 만들어졌는지 고른다.' },
      activity: {
        title: '하늘·땅·사람과 모음', tool: 'emotion',
        teacher: '"서 있는 사람 모양은 어느 글자일까요?" 짝을 지은 뒤 몸으로 글자를 만들어 본다. ㅏ를 ㅡ와 ·로 만들었다고 하는 학생에게 "ㅏ는 세로로 서 있어요. 서 있는 것은 무엇이었나요?"라고 묻는다. 세 가지 모양만으로 여러 모음을 만든 것이 한글의 좋은 점이라고 짚는다.',
        task: '모음 기본 글자와 닮은 그림을 짝 지어요.', levels: { easy: { showBack: true }, base: {}, challenge: { shuffle: true } },
        items: [
          { prompt: '기본 글자와 그림을 이어요.', toolOptions: { mode: 'match', slots: [{ id: 'dot', label: '·' }, { id: 'flat', label: 'ㅡ' }, { id: 'up', label: 'ㅣ' }], cards: [{ id: 'sky', text: '둥근 하늘', motif: 'sun', back: '·' }, { id: 'earth', text: '평평한 땅', motif: 'hills', back: 'ㅡ' }, { id: 'man', text: '서 있는 사람', motif: 'tree', back: 'ㅣ' }], weather: false }, target: { match: { dot: 'sky', flat: 'earth', up: 'man' } }, difficulty: 0.1,
            levels: { easy: { prompt: '두 글자와 그림을 이어요.', toolOptions: { slots: [{ id: 'flat', label: 'ㅡ' }, { id: 'up', label: 'ㅣ' }], cards: [{ id: 'earth', text: '평평한 땅', motif: 'hills', back: 'ㅡ' }, { id: 'man', text: '서 있는 사람', motif: 'tree', back: 'ㅣ' }] }, target: { match: { flat: 'earth', up: 'man' } } },
              challenge: { toolOptions: { cards: [{ id: 'sky', text: '둥근 하늘', motif: 'sun' }, { id: 'earth', text: '평평한 땅', motif: 'hills' }, { id: 'rain', text: '내리는 비', motif: 'cloud', why: '모음은 하늘·땅·사람을 본떴어요.' }, { id: 'man', text: '서 있는 사람', motif: 'tree' }] } } } },
          { prompt: 'ㅏ를 만든 두 모양을 골라요.', toolOptions: { mode: 'pick', basket: 'ㅏ를 만든 것', cards: [{ id: 'up', text: 'ㅣ 사람' }, { id: 'flat', text: 'ㅡ 땅' }, { id: 'dot', text: '· 하늘' }], weather: false }, target: { pick: ['up', 'dot'] }, difficulty: 0.15,
            levels: { easy: { prompt: 'ㅏ의 긴 막대를 골라요.', toolOptions: { cards: [{ id: 'up', text: 'ㅣ 사람' }, { id: 'flat', text: 'ㅡ 땅' }] }, target: { pick: ['up'] } } } },
          { prompt: 'ㅗ를 만든 두 모양을 골라요.', toolOptions: { mode: 'pick', basket: 'ㅗ를 만든 것', cards: [{ id: 'up', text: 'ㅣ 사람' }, { id: 'flat', text: 'ㅡ 땅' }, { id: 'dot', text: '· 하늘' }], weather: false }, target: { pick: ['flat', 'dot'] }, difficulty: 0.2,
            levels: { easy: { prompt: 'ㅗ의 긴 막대를 골라요.', toolOptions: { cards: [{ id: 'up', text: 'ㅣ 사람' }, { id: 'flat', text: 'ㅡ 땅' }] }, target: { pick: ['flat'] } },
              challenge: { prompt: 'ㅜ를 만든 두 모양을 골라요.', toolOptions: { basket: 'ㅜ를 만든 것' }, target: { pick: ['flat', 'dot'] } } },
            conclude: '모음은 둥근 하늘(·), 평평한 땅(ㅡ), 서 있는 사람(ㅣ)을 본떠 만들었어요.' },
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '닮은 것을 써요.', columns: ['글자', '닮은 것'], cells: [['ㅡ', ''], ['ㅣ', '']], answer: '땅, 사람' }] },
    }),
    HG({
      id: 'days.e12.hangul.activity.word2', type: 'activity', title: '바른 우리말 고르기',
      method: '바른 우리말 고르기', tool: 'sortboard', minutes: 13,
      levels: { easy: '카드 4장, 틀린 바구니에 넣으면 까닭을 말하고 돌아오며 장 수가 보인다.', base: '카드 6장을 다 넣은 뒤 확인한다.', challenge: '카드 8장, "ㅋㅋ"처럼 헷갈리는 카드가 섞인다.' },
      activity: {
        title: '바른 우리말과 줄임말 나누기', tool: 'sortboard',
        teacher: '"할머니께 \'ㄱㅅ\'라고 보내면 알아들으실까요?" 카드를 하나씩 소리 내어 읽고 바구니에 넣는다. 줄임말을 무조건 나쁜 말이라고 하는 학생에게 "친구끼리는 알아도 듣는 사람이 모르면 마음이 전해지지 않아요. 누구나 알아듣는 말을 골라요"라고 말한다. 한글날에는 한글을 바르게 쓰는 마음도 기념한다고 정리한다.',
        task: '말 카드를 바른 우리말·줄임말 바구니에 나누어요.', levels: SBLV,
        items: [
          SB(['바른 우리말', '줄임말'], '인사말을 나누어요.', ['안녕하세요', '고맙습니다', '미안해요'], ['ㅎㅇ', 'ㄱㅅ', 'ㅈㅅ'], ['ㅂㅇ', 'ㅃㅇ'], 0.1),
          SB(['바른 우리말', '줄임말'], '대답하는 말을 나누어요.', ['알겠어요', '좋아요', '잘 자요'], ['ㅇㅋ', 'ㄱㄱ', 'ㅈㅈ'], ['ㅇㅇ', 'ㄴㄴ'], 0.15),
          SB(['바른 우리말', '줄임말'], '부르는 말을 나누어요.', ['선생님', '생일 선물', '버스 정류장'], ['쌤', '생선', '버정'], ['ㅋㅋ', '노잼'], 0.2, { conclude: '누구나 알아듣는 바른 우리말로 마음을 전해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '바른 우리말로 바꿔 써요.', text: 'ㄱㅅ → ___', answer: '고맙습니다' }] },
      notes: '도전 카드(ㅂㅇ·ㅃㅇ·ㅇㅇ·ㄴㄴ·ㅋㅋ·노잼)는 모두 줄임말 바구니로 간다. 반에서 쓰는 다른 줄임말로 바꿔도 된다.',
    }),
    HG({
      id: 'days.e12.hangul.wrap.cheer1', type: 'wrap', title: '"한글 고마워요" 구호',
      method: '한글 고마워 구호', tool: 'timer', minutes: 7,
      levels: { easy: '구호 카드를 놓은 뒤 손뼉만 맞춰 친다.', base: '구호 카드를 놓고 구호와 손뼉을 함께 한다.', challenge: '구호 카드를 놓은 뒤 반에서 새 구호 한 줄을 지어 함께 외친다.' },
      wrap: {
        teacher: '"세종대왕께 고마운 마음을 구호로 전해 볼까요? \'한글! 고마워요! 짝짝짝!\'" 출구 1번 카드를 놓은 뒤 반 전체가 손뼉과 함께 외친다. 출구 2번에서 단군을 고른 학생에게 "단군은 고조선을 세운 분이에요. 한글을 만든 분은 누구였지요?"라고 묻는다.',
        exitTicket: [
          CHANT('한글날 구호', ['한글!', '고마워요!', '짝짝짝!'], '구호를 차례대로 놓아요.'),
          CH('한글을 만든 분은?', ['세종대왕', '단군', '환웅'], 0, '세종대왕이 백성을 위해 한글을 만들었어요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '한글날, 고마워요',
        items: [
          { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '한글날은 10월 ___일이에요.', answer: '9' },
          { type: 'short', prompt: '내가 좋아하는 낱말을 한글로 써요.' },
        ],
        easy: { note: '좋아하는 글자를 떠올려요.', items: [{ type: 'draw', prompt: '좋아하는 글자를 크게 써요.' }] },
      },
    }),
    HG({
      id: 'days.e12.hangul.wrap.bodyletter2', type: 'wrap', title: '몸으로 모음 만들기',
      method: '몸으로 한글 모음 만들기', tool: 'timer', minutes: 7,
      levels: { easy: '짝과 ㅡ, ㅣ 두 모양을 몸으로 만들고 표시한다.', base: '짝과 ㅡ, ㅣ, ㅏ 세 모양을 만들고 표시한다.', challenge: '세 모양에 더해 ㅗ까지 만들어 보고 표시한다(점검표에 없는 모양은 짝끼리 확인).' },
      wrap: {
        teacher: '"누워서 ㅡ, 서서 ㅣ! 짝과 함께 ㅏ도 만들 수 있을까요?" 한 명이 서서 ㅣ, 다른 한 명이 주먹을 옆에 대어 ·를 만들어 ㅏ를 이룬다. 바닥에 눕기 어려우면 팔을 옆으로 뻗어 ㅡ를 만든다. 출구 2번에서 ㅣ를 "둥근 하늘"로 고른 학생에게 서 있는 사람을 다시 몸으로 해 보게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'timer', options: { title: '몸으로 모음 만들기' }, prompt: '만든 모양에 표시해요.', target: { selfCheck: ['ㅡ를 만들었어요', 'ㅣ를 만들었어요', 'ㅏ를 만들었어요'] }, difficulty: 0.1 },
          CH('ㅣ는 무엇을 닮았나요?', ['서 있는 사람', '둥근 하늘', '평평한 땅'], 0, 'ㅣ는 서 있는 사람을 본떴어요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '하늘·땅·사람 모음',
        items: [
          { type: 'table', prompt: '닮은 것을 써요.', columns: ['글자', '닮은 것'], cells: [['·', ''], ['ㅡ', ''], ['ㅣ', '']], answer: '하늘, 땅, 사람' },
          { type: 'draw', prompt: '몸으로 ㅏ를 만든 모습을 그려요.' },
        ],
        easy: { note: '서 있으면 ㅣ, 누우면 ㅡ.', items: [{ type: 'draw', prompt: 'ㅣ처럼 선 내 모습을 그려요.' }] },
      },
      notes: '몸이 불편한 학생은 팔·손가락으로 모양을 만들어도 된다.',
    }),
  ];

  // =====================================================================================================
  // 학생독립운동기념일 — 용기 내어 바르게
  const ST = MOD('days.e12.student');
  const SHARE = (prompt, slots, same, others, d, more) => {
    const cards = [...same.map((t, i) => ({ id: `s${i + 1}`, text: t })), ...others.map((t, i) => ({ id: `o${i + 1}`, text: t }))];
    const ids = same.map((t, i) => `s${i + 1}`);
    const match = {}; slots.forEach((s) => { match[s.id] = ids; });
    return { prompt, toolOptions: { mode: 'match', slots, cards }, target: { match }, difficulty: d, ...more };
  };
  const SHL = (...a) => { const x = SHARE(...a); delete x.difficulty; return x; };
  const F2 = [{ id: 'a', label: '친구 가' }, { id: 'b', label: '친구 나' }];
  const F3 = [...F2, { id: 'c', label: '친구 다' }];
  const F4 = [...F3, { id: 'd', label: '친구 라' }];
  const T_STUDENT = [
    ST({
      id: 'days.e12.student.intro.brave1', type: 'intro', title: '용기 낸 친구 그림 고르기',
      method: '용기 낸 친구 그림 고르기', tool: 'wordcards', minutes: 6,
      levels: { easy: '교사가 카드 2장(그만해 말하기·같이 놀리기)만 읽어 주고 용기 낸 행동을 함께 고른다.', base: '시연을 보고 카드 4장 가운데 용기 낸 행동 2장을 말한다.', challenge: '용기 낸 행동을 고른 뒤 그 행동이 왜 용기인지 말한다.' },
      intro: {
        teacher: '"오래전 학생들도 학교에 다녔어요. 그 학생들은 무엇을 했을까요?" 1929년 광주의 학생들이 우리 학생들이 부당하게 놀림받고 차별받는 것을 보고 "그건 옳지 않아요"라며 함께 목소리를 냈고, 11월 3일에 그 용기를 기억한다고 알린다. 시연 단추로 용기 낸 행동 카드를 바구니에 담는다. "용기는 힘이 센 거예요"라는 말이 나오면 "바르게 말하고 어른께 알리는 것도 용기예요"라고 답한다.',
        student: '"그만해!"를 또박또박 바르게 말하는 얼굴을 지어 보아요.',
        demo: PICKDEMO('용기 내어 말해요', [{ id: 'stop', text: '그만해 말하기', motif: 'star' }, { id: 'join', text: '같이 놀리기', motif: 'cloud' }, { id: 'tell', text: '선생님께 알리기', motif: 'house' }, { id: 'ignore', text: '모른 척하기', motif: 'leaf' }], ['stop', 'tell']),
        art: { draw: 'paper students in old-fashioned school uniforms standing together and raising their hands, beside a paper train station, with an autumn paper tree', banner: '11월 3일, 용기를 기억해요', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
      },
      notes: '학생의 피해 경험을 말하게 하지 않는다. 어려울 때 담임·상담 선생님께 알리는 길을 안내한다.',
    }),
    ST({
      id: 'days.e12.student.intro.fair2', type: 'intro', title: '공평·불공평 그림 고르기',
      method: '공평·불공평 그림 고르기', tool: 'wordcards', minutes: 6,
      levels: { easy: '교사가 카드 2장(똑같이 나누기·혼자 다 갖기)만 읽어 주고 공평한 것을 함께 고른다.', base: '시연을 보고 카드 4장 가운데 공평한 것 2장을 말한다.', challenge: '공평한 것을 고른 뒤 불공평한 카드를 공평하게 고쳐 말한다.' },
      intro: {
        teacher: '"친구 한 명만 계속 다르게 대하면 어떤 마음일까요?" 대답을 듣고(기다릴 반응: "속상해요", "억울해요") 1929년, 기차로 학교에 다니던 우리 학생들이 차별받는 일이 생기자 광주의 학생들이 함께 "옳지 않다"고 나섰고 11월 3일에 그 일을 기억한다고 알린다. 시연 단추로 공평한 행동 카드를 바구니에 담는다. 새치기를 "빨라서 좋아요"라고 하는 학생에게 "기다린 친구들 마음은 어떨까요?"라고 묻는다.',
        student: '반에서 모두를 똑같이 대한 일을 하나 떠올려 보아요.',
        demo: PICKDEMO('공평해요', [{ id: 'same', text: '똑같이 나누기', motif: 'heart' }, { id: 'all', text: '혼자 다 갖기', motif: 'cloud' }, { id: 'turn', text: '차례 지키기', motif: 'star' }, { id: 'cut', text: '새치기', motif: 'leaf' }], ['same', 'turn']),
        art: { draw: 'two paper children sharing a paper cake cut into equal slices, and a neat paper line of children waiting their turn', banner: '모두 똑같이, 공평하게', extra: [{ motif: 'heart', x: 300, y: 96 }] },
      },
    }),
    ST({
      id: 'days.e12.student.activity.scene1', type: 'activity', title: '친구가 놀림받을 때 할 일 고르기',
      method: '친구가 놀림받을 때 할 일 고르기', tool: 'emotion', minutes: 14,
      levels: { easy: '보기 2개, 고르면 결과가 바로 보인다.', base: '보기 3개, 결과는 확인한 뒤에 보인다.', challenge: '보기 3개에 헷갈리는 보기("웃으며 지켜봐요")가 섞이고, 결과는 확인한 뒤에 보인다.' },
      activity: {
        title: '이럴 땐 어떻게 할까?', tool: 'emotion',
        teacher: '"친구가 놀림받는 것을 보면 어떻게 할까요?" 고른 뒤 결과를 함께 읽고, 혼자 어려우면 선생님께 알리는 것도 용기라고 말한다. 같이 놀리는 보기를 고른 학생에게 놀림받는 친구의 마음을 떠올리게 한다. 장면은 지어낸 이야기이며, 우리 반 친구 이야기를 하지 않는다고 미리 약속한다.',
        task: '장면을 듣고 용기 있는 행동을 골라요.', levels: { easy: {}, base: { revealAfterCheck: true }, challenge: { revealAfterCheck: true } },
        items: [
          { prompt: '친구를 놀려요. 어떻게?', toolOptions: { mode: 'branch', situation: '친구 옷을 보고 놀려요.', choices: [{ id: 'stop', text: '"그만해" 말해요', result: '놀림이 멈췄어요.', mood: '뿌듯함' }, { id: 'join', text: '같이 웃어요', result: '친구가 더 속상해요.', mood: '속상함' }, { id: 'tell', text: '선생님께 알려요', result: '선생님이 도와주셨어요.', mood: '편안함' }] }, target: { choice: ['stop', 'tell'] }, difficulty: 0.1,
            levels: { easy: { prompt: '친구를 놀려요. 할 일을 골라요.', toolOptions: { choices: [{ id: 'stop', text: '"그만해" 말해요', result: '놀림이 멈췄어요.', mood: '뿌듯함' }, { id: 'join', text: '같이 웃어요', result: '친구가 더 속상해요.', mood: '속상함' }] }, target: { choice: 'stop' } },
              challenge: { prompt: '놀려요. 가장 좋은 일을 골라요.', toolOptions: { choices: [{ id: 'stop', text: '"그만해" 말해요', result: '놀림이 멈췄어요.', mood: '뿌듯함' }, { id: 'watch', text: '웃으며 지켜봐요', result: '지켜보기만 해도 친구는 속상해요.', mood: '걱정' }, { id: 'join', text: '같이 웃어요', result: '친구가 더 속상해요.', mood: '속상함' }] }, target: { choice: 'stop' } } } },
          { prompt: '놀이에 안 끼워 줘요. 어떻게?', toolOptions: { mode: 'branch', situation: '한 친구만 놀이에 안 끼워요.', choices: [{ id: 'invite', text: '"같이 놀자" 해요', result: '모두 함께 놀았어요.', mood: '기쁨' }, { id: 'leave', text: '모른 척해요', result: '친구 혼자 남았어요.', mood: '속상함' }, { id: 'tell', text: '선생님께 알려요', result: '함께 노는 법을 정했어요.', mood: '편안함' }] }, target: { choice: ['invite', 'tell'] }, difficulty: 0.15,
            levels: { easy: { prompt: '놀이에 안 끼워요. 할 일을 골라요.', toolOptions: { choices: [{ id: 'invite', text: '"같이 놀자" 해요', result: '모두 함께 놀았어요.', mood: '기쁨' }, { id: 'leave', text: '모른 척해요', result: '친구 혼자 남았어요.', mood: '속상함' }] }, target: { choice: 'invite' } },
              challenge: { prompt: '안 끼워요. 가장 좋은 일을 골라요.', toolOptions: { choices: [{ id: 'invite', text: '"같이 놀자" 해요', result: '모두 함께 놀았어요.', mood: '기쁨' }, { id: 'later', text: '"다음에" 하고 가요', result: '친구는 오늘도 혼자예요.', mood: '걱정' }, { id: 'leave', text: '모른 척해요', result: '친구 혼자 남았어요.', mood: '속상함' }] }, target: { choice: 'invite' } } } },
          { prompt: '별명을 불러요. 어떻게?', toolOptions: { mode: 'branch', situation: '싫어하는 별명을 불러요.', choices: [{ id: 'name', text: '이름을 불러요', result: '친구가 웃었어요.', mood: '기쁨' }, { id: 'copy', text: '나도 따라 불러요', result: '친구가 울 것 같아요.', mood: '속상함' }, { id: 'stop', text: '"그만해" 말해요', result: '별명 부르기가 멈췄어요.', mood: '뿌듯함' }] }, target: { choice: ['name', 'stop'] }, difficulty: 0.2,
            levels: { easy: { prompt: '별명을 불러요. 할 일을 골라요.', toolOptions: { choices: [{ id: 'name', text: '이름을 불러요', result: '친구가 웃었어요.', mood: '기쁨' }, { id: 'copy', text: '나도 따라 불러요', result: '친구가 울 것 같아요.', mood: '속상함' }] }, target: { choice: 'name' } },
              challenge: { prompt: '별명을 불러요. 가장 좋은 일은?', toolOptions: { choices: [{ id: 'name', text: '이름을 불러요', result: '친구가 웃었어요.', mood: '기쁨' }, { id: 'soft', text: '작게 따라 불러요', result: '작아도 친구는 들어요.', mood: '걱정' }, { id: 'copy', text: '나도 따라 불러요', result: '친구가 울 것 같아요.', mood: '속상함' }] }, target: { choice: 'name' } } },
            conclude: '"그만해"라고 말하고, 함께 놀자고 하고, 어려우면 선생님께 알려요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '친구가 놀림받을 때 할 일은?', options: ['"그만해" 말해요', '같이 웃어요'], answer: '"그만해" 말해요' }] },
    }),
    ST({
      id: 'days.e12.student.activity.say1', type: 'activity', title: '"그만해, 같이 놀자" 말하기 연습',
      method: '"그만해, 같이 놀자" 말하기 연습', tool: 'timer', minutes: 13,
      levels: { easy: '말하는 차례 카드 3장을 맞추고, 교사를 따라 한 번 말해 본 뒤 표시한다.', base: '차례를 맞추고 짝과 3번 연습하게 타이머를 맞춘 뒤 표시한다.', challenge: '짝과 연습한 뒤 내 말로 바꿔 말해 본 것까지 표시한다.' },
      activity: {
        title: '바르게 말하기 연습', tool: 'timer',
        teacher: '"\'그만해!\'는 화내는 목소리일까요, 또박또박한 목소리일까요?" 교사가 또박또박한 목소리와 눈 맞춤을 먼저 보인 뒤 짝과 연습한다. 소리를 지르는 학생에게 "크게 소리치면 싸움처럼 들려요. 또박또박 말해요"라고 말한다. 1929년 학생들도 함께 바르게 목소리를 냈다고 이어 말한다.',
        task: '바르게 말하는 차례를 맞추고 짝과 연습해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          STEPS('바르게 말하는 차례를 놓아요.', '용기 내어 말하기', ['"그만해!"', '"같이 놀자"', '선생님께 알리기'], 0.1),
          { prompt: '짝과 3번 연습하게 맞춰요.', toolOptions: { title: '말하기 연습(우리 반 약속)', labels: ['말하기', '바꾸기'], plan: { work: 15, rest: 5, rounds: 1 } }, target: { plan: { rounds: 3 } }, difficulty: 0.15,
            hints: ['몇 번 연습할지 세어 봐요.', '번 칸이 연습 횟수예요.', '번 칸을 3에 맞춰요.'],
            levels: { easy: { prompt: '선생님과 1번 하게 맞춰요.', toolOptions: { plan: { work: 15, rest: 5, rounds: 2 } }, target: { plan: { rounds: 1 } } } } },
          { prompt: '말하기 연습에서 한 것에 표시해요.', toolOptions: { title: '말하기 점검' }, target: { selfCheck: ['또박또박 말했어요', '눈을 보고 말했어요'] }, difficulty: 0.15,
            levels: { challenge: { prompt: '내 말로 바꾼 것도 표시해요.', target: { selfCheck: ['또박또박 말했어요', '눈을 보고 말했어요', '내 말로 바꿔 말했어요'] } } },
            conclude: '또박또박 "그만해", 다정하게 "같이 놀자", 어려우면 선생님께 알려요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '"그만해, 같이 ___"', answer: '놀자' }] },
      notes: '타이머 초·횟수는 우리 반 약속이다. 연습 장면은 지어낸 장면이고, 실제 있었던 일을 꺼내지 않는다.',
    }),
    ST({
      id: 'days.e12.student.activity.story2', type: 'activity', title: '1929년 학생 이야기 놓기',
      method: '1929년 학생 이야기 세 장면 놓기', tool: 'story', minutes: 14,
      levels: { easy: '첫 장면이 놓여 있어 남은 두 장만 놓고, 놓으면 바로 맞는지 알려 준다.', base: '장면 세 장을 차례대로 놓는다.', challenge: '"모른 척했어요"처럼 이야기와 다른 장면 한 장이 섞여 있어 빼고 놓는다.' },
      activity: {
        title: '1929년 학생 이야기', tool: 'story',
        teacher: '"부당한 일이 생긴 뒤 학생들은 어떻게 했나요?" 장면을 놓은 뒤 소리 내어 읽는다. 학생들이 혼자가 아니라 함께 나섰다는 점, 다른 지역 학생들도 뜻을 같이했다는 점을 강조한다. 2·3번은 오늘 우리 교실에서 볼 수 있는 장면이라고 구별해 말한다. 맞서는 것을 싸움으로 여기는 학생에게 "바르게 말하고 함께 알리는 것이 맞서는 방법이에요"라고 짚는다.',
        task: '이야기 장면 카드를 차례대로 놓아요.', levels: LV,
        items: [
          ORDER3('1929년 이야기예요. 놓아요.', [{ id: 'unfair', text: '차별을 받았어요', motif: 'cloud' }, { id: 'together', text: '함께 말했어요', motif: 'star' }, { id: 'spread', text: '널리 퍼졌어요', motif: 'sun' }], { id: 'ignore', text: '모른 척했어요', motif: 'leaf' }, 0.1),
          ORDER3('교실 이야기예요. 놓아요.', [{ id: 'tease', text: '친구가 놀림받아요', motif: 'cloud' }, { id: 'stop', text: '"그만해" 말해요', motif: 'star' }, { id: 'play', text: '같이 놀아요', motif: 'heart' }], { id: 'laugh', text: '같이 웃어요', motif: 'leaf' }, 0.15),
          ORDER3('줄 서기 이야기예요. 놓아요.', [{ id: 'cut', text: '새치기를 봐요', motif: 'cloud' }, { id: 'say', text: '"차례 지켜요"', motif: 'star' }, { id: 'line', text: '차례대로 서요', motif: 'heart' }], { id: 'push', text: '밀어내요', motif: 'leaf' }, 0.2,
            { conclude: '옳지 않은 일을 보면 함께 바르게 말해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '학생독립운동기념일은 11월 ___일이에요.', answer: '3' }] },
    }),
    ST({
      id: 'days.e12.student.activity.share2', type: 'activity', title: '간식 공평하게 나누기',
      method: '간식 공평하게 나누기', tool: 'economy', minutes: 13,
      levels: { easy: '친구 2명에게 똑같이 나누는 카드를 고른다.', base: '친구 3명에게 똑같이 나누는 카드를 고른다.', challenge: '친구 4명에게 똑같이 나누는 카드를 고른다.' },
      activity: {
        title: '친구들에게 똑같이 나누기', tool: 'economy',
        teacher: '"사탕 6개를 두 친구에게 똑같이 나누면 한 사람이 몇 개일까요?" 바둑돌이나 종이 조각으로 먼저 하나씩 나눠 본 뒤 카드를 고른다. "내가 더 많이 가질래요"라는 학생에게 "적게 받은 친구의 마음은 어떨까요?"라고 묻는다. 똑같이 나누는 것이 공평이고, 1929년 학생들이 바란 것도 모두를 똑같이 대하는 것이었다고 짚는다.',
        task: '간식을 친구들에게 똑같이 나누는 카드를 놓아요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          SHARE('사탕 6개를 세 친구에게 나눠요.', F3, ['사탕 2개', '사탕 2개', '사탕 2개'], ['사탕 1개', '사탕 3개'], 0.1,
            { levels: { easy: SHL('사탕 6개를 두 친구에게 나눠요.', F2, ['사탕 3개', '사탕 3개'], ['사탕 2개', '사탕 4개'], 0.1), challenge: SHL('사탕 8개를 네 친구에게 나눠요.', F4, ['사탕 2개', '사탕 2개', '사탕 2개', '사탕 2개'], ['사탕 1개', '사탕 3개'], 0.1) } }),
          SHARE('귤 9개를 세 친구에게 나눠요.', F3, ['귤 3개', '귤 3개', '귤 3개'], ['귤 2개', '귤 4개'], 0.15,
            { levels: { easy: SHL('귤 4개를 두 친구에게 나눠요.', F2, ['귤 2개', '귤 2개'], ['귤 1개', '귤 3개'], 0.15), challenge: SHL('귤 12개를 네 친구에게 나눠요.', F4, ['귤 3개', '귤 3개', '귤 3개', '귤 3개'], ['귤 2개', '귤 4개'], 0.15) } }),
          SHARE('쿠키 12개를 세 친구에게 나눠요.', F3, ['쿠키 4개', '쿠키 4개', '쿠키 4개'], ['쿠키 3개', '쿠키 5개'], 0.2,
            { levels: { easy: SHL('쿠키 10개를 두 친구에게 나눠요.', F2, ['쿠키 5개', '쿠키 5개'], ['쿠키 4개', '쿠키 6개'], 0.2), challenge: SHL('쿠키 12개를 네 친구에게 나눠요.', F4, ['쿠키 3개', '쿠키 3개', '쿠키 3개', '쿠키 3개'], ['쿠키 2개', '쿠키 4개'], 0.2) },
              conclude: '모두 똑같이 나누면 공평해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 수를 써요.', text: '사탕 4개를 두 친구에게 똑같이 나누면 ___개씩', answer: '2' }] },
      notes: '이 교구는 돈 대신 간식 카드를 짝 짓는다(짝 짓기 판). 같은 수 카드는 어느 친구에게 놓아도 된다.',
    }),
    ST({
      id: 'days.e12.student.wrap.star1', type: 'wrap', title: '용기 배지 꾸미기',
      method: '용기 배지 꾸미기', tool: 'collage', minutes: 7,
      levels: { easy: '별 조각 1개를 붙여 배지를 꾸민다.', base: '별 조각 2개 이상을 붙여 배지를 꾸민다.', challenge: '배지를 꾸민 뒤 배지 이름("바른 말 배지" 등)을 지어 말한다.' },
      wrap: {
        teacher: '"오늘 배운 용기를 배지로 꾸며 볼까요?" 별 조각을 붙이며 "내가 낼 용기는 무엇인가요?"라고 묻는다. 출구 2번에서 "같이 놀려요"를 고른 학생에게 놀림받는 친구의 마음을 다시 떠올리게 한다. 꾸민 배지는 이름 없이 게시판에 붙이고, 어려운 일이 있으면 언제든 선생님께 말하라고 알린다.',
        exitTicket: [
          PASTE(['star', 'circle', 'heart'], ['노랑', '빨강', '파랑', '주황'], ['배지를 꾸몄어요', '내 용기를 말했어요'], '용기 배지를 꾸며요.', 1),
          CH('친구가 놀림받으면요?', ['"그만해" 말해요', '같이 놀려요', '모른 척해요'], 0, '"그만해"라고 말하거나 선생님께 알려요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '나의 용기',
        items: [
          { type: 'check', prompt: '내가 낼 수 있는 용기에 ✓ 해요.', options: ['"그만해" 말하기', '"같이 놀자" 하기', '선생님께 알리기'] },
          { type: 'draw', prompt: '내 용기 배지를 그려요.' },
        ],
        easy: { note: '별을 떠올려요.', items: [{ type: 'draw', prompt: '별 배지를 그려요.' }] },
      },
    }),
    ST({
      id: 'days.e12.student.wrap.circle2', type: 'wrap', title: '공평하게 차례 정하기 놀이',
      method: '공평하게 차례 정하기 놀이', tool: 'timer', minutes: 7,
      levels: { easy: '짝과 2명이 가위바위보로 차례를 정한 뒤 카드를 놓는다.', base: '모둠이 가위바위보로 차례를 정하고 지킨 뒤 카드를 놓는다.', challenge: '반 전체가 차례를 정해 지키는 놀이를 한 뒤 카드를 놓는다.' },
      wrap: {
        teacher: '"누가 먼저 할지 공평하게 정하는 방법은 무엇일까요?" 가위바위보로 차례를 정하고 그 차례대로 한 명씩 칠판에 별을 붙인다. 진 친구가 "다시 해!"라고 하면 "정한 방법으로 나온 차례는 모두 지켜요"라고 말한다. 올해 만난 기념일 가운데 가장 기억에 남는 날을 한 명씩 말하며 마친다.',
        exitTicket: [
          CHANT('공평한 차례 정하기', ['가위바위보', '차례 정하기', '차례 지키기'], '차례 정하는 순서를 놓아요.'),
          CH('11월 3일은 어떤 날이에요?', ['학생들이 용기 낸 날', '한글을 만든 날'], 0, '1929년 학생들이 함께 바르게 목소리를 낸 일을 기억하는 날이에요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '공평하게, 함께',
        items: [
          { type: 'table', prompt: '공평하면 ○, 아니면 ×를 써요.', columns: ['행동', '○ / ×'], cells: [['똑같이 나눠요', ''], ['새치기해요', ''], ['차례를 지켜요', '']], answer: '○, ×, ○' },
          { type: 'draw', prompt: '차례를 지키는 모습을 그려요.' },
        ],
        easy: { note: '"차례대로"를 떠올려요.', items: [{ type: 'draw', prompt: '줄을 선 친구들을 그려요.' }] },
      },
    }),
  ];

  PaperLessons.registerModules([].concat(T_MARCH1, T_SCIENCE, T_EARTH, T_MAY18, T_JUNE, T_JUNE10, T_LIB, T_FOUND, T_HANGUL, T_STUDENT));
})();
